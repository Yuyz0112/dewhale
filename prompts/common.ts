import { retryAsync } from "https://deno.land/x/retry@v2.0.0/mod.ts";
import OpenAI from "https://deno.land/x/openai@v4.20.1/mod.ts";
import {
  ChatCompletionMessageParam,
  CompletionUsage,
} from "https://deno.land/x/openai@v4.20.1/resources/mod.ts";
import { assert } from "https://deno.land/std@0.201.0/assert/assert.ts";
import { ChatCompletionCreateParamsBase } from "https://deno.land/x/openai@v4.20.1/resources/chat/completions.ts";
import { fromMarkdown } from "https://esm.sh/mdast-util-from-markdown@2.0.0";
import { visitParents } from "https://esm.sh/unist-util-visit-parents@6.0.1";
import { toMarkdown } from "https://esm.sh/mdast-util-to-markdown@2.1.0";
import { remove } from "https://esm.sh/unist-util-remove@4.0.0";
import { Octokit } from "npm:octokit@3.2.1";
import commitPlugin from "npm:octokit-commit-multiple-files";
import { checkValid, checkWhitelist } from "./quota.ts";

const apiKey = Deno.env.get("OPENAI_API_KEY");
assert(apiKey, "failed to get openAI API key");

const openai = new OpenAI({
  apiKey: apiKey,
});

export async function getCode(
  messages: ChatCompletionMessageParam[] = [],
  model: ChatCompletionCreateParamsBase["model"]
): Promise<{
  code: string;
  usage?: CompletionUsage | undefined;
  description: string;
}> {
  return await retryAsync<{
    code: string;
    usage?: CompletionUsage | undefined;
    description: string;
  }>(
    async () => {
      const chatCompletion = await openai.chat.completions.create({
        messages,
        model,
        max_tokens: 3000,
        temperature: 0,
      });

      console.log("raw output> ", chatCompletion.choices[0].message.content);

      const codeBlocks: string[] = [];
      const tree = fromMarkdown(
        chatCompletion.choices[0].message.content || ""
      );
      // deno-lint-ignore no-explicit-any
      visitParents(tree, "code", (node: any) => {
        codeBlocks.push(node.value.trim());
      });

      if (codeBlocks.length !== 1) {
        throw new Error(`invalid code blocks ${JSON.stringify(codeBlocks)}`);
      }

      remove(tree, "code");
      return {
        code: codeBlocks[0],
        usage: chatCompletion.usage,
        description: toMarkdown(tree),
      };
    },
    { delay: 100, maxTry: 3 }
  );
}

type IssueEvent = {
  actor: { login: string };
  action: string;
  issue: {
    body: string;
    number: number;
    labels: { name: string }[];
    user: { login: string };
    pull_request?: { url: string };
    state: string;
  };
  comment?: {
    body: string;
  };
};

const PatchedOctokit = Octokit.plugin(commitPlugin);
const ghToken = Deno.env.get("GH_TOKEN");
assert(ghToken, "failed to get github token");

export const octokit: Octokit = new PatchedOctokit({
  auth: ghToken,
});

const legacyVxDevPrefix = `[vx.dev]`;
export const dewhalePrefix = `[Dewhale]`;

function isValidComment(
  comment: {
    body?: string;
    user?: { login: string } | null;
  },
  login?: string
) {
  return (
    !comment.body?.includes(legacyVxDevPrefix) &&
    !comment.body?.includes(dewhalePrefix) &&
    (login ? comment.user?.login === login : checkWhitelist(comment.user?.login || ''))
  );
}

async function getConnectedPr(
  owner: string,
  repo: string,
  issueNumber: number
) {
  const connectedEvent = await octokit.graphql<{
    repository: {
      issue?: {
        timelineItems: {
          nodes: {
            id: string;
            source: { number: number; state: string };
            __typename: string;
            createdAt: string;
          }[];
        };
      };
    };
  }>(`{
    repository(owner: "${owner}", name: "${repo}") {
      issue(number: ${issueNumber}) {
        timelineItems(itemTypes: [CROSS_REFERENCED_EVENT], first: 1) {
          nodes {
            ... on CrossReferencedEvent {
              id
              createdAt
              source {
                ... on PullRequest {
                  id
                  number
                  state
                }
              }
              __typename
            }
          }
        }
      }
    }
  }`);

  let { nodes = [] } = connectedEvent.repository.issue?.timelineItems || {};
  nodes = nodes
    .filter((n) => n.source.state === "OPEN")
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  return nodes[0]?.source.number;
}

async function getConnectedIssue(owner: string, repo: string, prBody: string) {
  const issueNumber = parseInt(
    prBody.match(/\[Dewhale\] This PR implements & closes #(\d+),/)?.[1] || ""
  );
  if (!issueNumber) {
    throw new Error("failed to get connected issue");
  }

  return (
    await octokit.rest.issues.get({
      owner,
      repo,
      issue_number: issueNumber,
    })
  ).data;
}

export async function applyPR(
  owner: string,
  repo: string,
  issueNumber: number,
  newBranch: string,
  files: Record<string, string>,
  commitMsg: string,
  labels: string[]
) {
  const baseBranch = "main";

  // deno-lint-ignore no-explicit-any
  await (octokit as any).createOrUpdateFiles({
    owner,
    repo,
    branch: newBranch,
    createBranch: true,
    // base: baseBranch,
    // forkFromBaseBranch: true,
    changes: [
      {
        message: commitMsg,
        files,
      },
    ],
  });

  let pr = (
    await octokit.rest.search.issuesAndPullRequests({
      q: `is:open is:pr base:${baseBranch} head:${newBranch}+repo:${owner}/${repo}`,
    })
  ).data.items[0];
  if (!pr) {
    pr = (
      await octokit.rest.pulls.create({
        owner,
        repo,
        head: newBranch,
        base: baseBranch,
        title: `${dewhalePrefix} implements #${issueNumber}`,
        body: `${dewhalePrefix} This PR implements & closes #${issueNumber}, created by Dewhale.`,
      })
    ).data as any;
  }

  octokit.rest.issues.setLabels({
    owner,
    repo,
    issue_number: pr.number,
    labels,
  });

  return pr;
}

async function collectPromptAndImages(
  owner: string,
  repo: string,
  issue: {
    number: number;
    body?: string | null;
    user?: { login: string } | null;
  },
  pr: { number: number },
  branch: string
) {
  const prComments = (
    await octokit.rest.issues.listComments({
      owner,
      repo,
      issue_number: pr.number,
    })
  ).data;
  const issueComments = (
    await octokit.rest.issues.listComments({
      owner,
      repo,
      issue_number: issue.number,
    })
  ).data;

  let commentsStr = issueComments
    .concat(prComments)
    .filter((c) => isValidComment(c, issue.user?.login || "-"))
    .sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )
    .map((c) => c.body)
    .join("\n");

  const prReviews = (
    await octokit.rest.pulls.listReviewComments({
      owner,
      repo,
      pull_number: pr.number,
    })
  ).data;
  for (const r of prReviews
    .filter(
      (r) =>
        isValidComment(r, issue.user?.login || "-") &&
        r.commit_id === r.original_commit_id
    )
    .sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )) {
    let lineCode = "";
    if (r.line) {
      const code = await getFileContent(owner, repo, branch, r.path);
      lineCode = (code || "").split("\n")[r.line - 1];
    }
    if (lineCode) {
      commentsStr += `\nIn your previous implemented code, I want to modify this part:
\`\`\`
${lineCode}
\`\`\`
by following the instruction:`;
    }
    commentsStr += `\n${r.body}\n`;
  }

  let prompt = `${issue.body || ""}\n${commentsStr}`;
  const regex = /!\[.*?\]\((.*?)\)/g;
  const imgRegex = /<img .*?src="(.*?)".*?>/g;
  const images = [];
  let match;
  while ((match = regex.exec(prompt)) !== null) {
    images.push(match[1]);
  }

  let imgMatch;
  while ((imgMatch = imgRegex.exec(prompt)) !== null) {
    images.push(imgMatch[1]);
  }
  prompt = prompt.replace(regex, "").replace(imgRegex, "");

  return {
    prompt,
    images,
  };
}

export const lucideIcons: Record<string, unknown> = {};
try {
  const iconNodes = await (
    await fetch("https://lucide.dev/api/icon-nodes")
  ).json();
  for (const key in iconNodes) {
    const newKey = key
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    lucideIcons[newKey] = iconNodes[key];
  }
} catch { }

export async function getIssueEvent() {
  const githubEventPath = Deno.env.get("GITHUB_EVENT_PATH");
  assert(githubEventPath, "failed to get github event path");

  let githubEvent: IssueEvent = (
    await import(githubEventPath, {
      with: { type: "json" },
    })
  ).default;

  const eventName = Deno.env.get("GITHUB_EVENT_NAME");
  assert(eventName, "failed to get event name");

  const actor = Deno.env.get("ACTOR");
  assert(actor, "failed to get actor");

  if (eventName === "pull_request_review_comment") {
    const { action, comment, pull_request } = githubEvent as unknown as {
      action: string;
      comment: { body: string };
      pull_request: { body: string };
    };
    const { owner, repo } = getOwnerAndRepo();

    githubEvent = {
      actor: {
        login: actor,
      },
      action,
      comment,
      issue: (await getConnectedIssue(
        owner,
        repo,
        pull_request.body
      )) as IssueEvent["issue"],
    };
  }

  return {
    githubEvent: {
      ...githubEvent,
      actor: {
        login: actor,
      },
    },
    eventName,
  };
}

function getOwnerAndRepo() {
  const owner = Deno.env.get("GITHUB_REPOSITORY_OWNER");
  assert(owner, "failed to get repo owner");

  let repo = Deno.env.get("GITHUB_REPOSITORY");
  assert(repo, "failed to get repo name");
  repo = repo.replace(`${owner}/`, "");

  return {
    owner,
    repo,
  };
}

export async function composeWorkflow(
  label: string,
  placeholderFiles: Record<string, string>
) {
  const { githubEvent, eventName } = await getIssueEvent();

  console.log(
    githubEvent.action,
    eventName,
    githubEvent.issue,
    githubEvent.comment,
    githubEvent.actor
  );

  const isPr = Boolean(githubEvent.issue.pull_request);

  if (githubEvent.issue.labels.every((l) => l.name !== label)) {
    throw new Error("label mismatch");
  }

  if (isPr && eventName === "issues") {
    throw new Error("non-comments event in PR");
  }

  if (
    ["issue_comment", "pull_request_review_comment"].includes(eventName) &&
    githubEvent.comment &&
    !isValidComment(githubEvent.comment)
  ) {
    throw new Error("invalid comment");
  }

  if (githubEvent.issue.state !== "open") {
    throw new Error("closed issue/PR");
  }

  const { owner, repo } = getOwnerAndRepo();

  // check whitelist and quota
  const valid = await checkValid(owner, repo, githubEvent.actor.login);
  if (!valid) {
    throw new Error(
      "invalid request, please check the whitelist or quota config"
    );
  }

  const issue = isPr
    ? await getConnectedIssue(owner, repo, githubEvent.issue.body)
    : githubEvent.issue;

  const branch = `${label}-issue-${issue.number}`;

  let pr: { number: number } = { number: -1 };
  if (isPr) {
    // is PR event
    pr = githubEvent.issue;
  } else {
    const connectedPrNumber = await getConnectedPr(owner, repo, issue.number);
    pr = connectedPrNumber
      ? (
        await octokit.rest.pulls.get({
          owner,
          repo,
          pull_number: connectedPrNumber,
        })
      ).data
      : await applyPR(
        owner,
        repo,
        issue.number,
        branch,
        placeholderFiles,
        "[Skip CI] Dewhale: init the PR",
        [label]
      );
  }

  const { prompt, images } = await collectPromptAndImages(
    owner,
    repo,
    issue,
    pr,
    branch
  );
  const commitMsg = JSON.stringify(
    {
      prompt,
      images,
    },
    null,
    2
  );

  return {
    commitMsg,
    prompt,
    images,
    owner,
    repo,
    branch,
    issue,
    pr,
  };
}

export const shadcnRules = [
  {
    matcher: "^Avatar.*",
    source: "@/components/ui/avatar",
  },
  {
    matcher: "^AspectRatio",
    source: "@/components/ui/aspect-ratio",
  },
  {
    matcher: "^Badge",
    source: "@/components/ui/badge",
  },
  {
    matcher: "^Button",
    source: "@/components/ui/button",
  },
  {
    matcher: "^Card.*",
    source: "@/components/ui/card",
  },
  {
    matcher: "^Checkbox",
    source: "@/components/ui/checkbox",
  },
  {
    matcher: "^Collapsible.*",
    source: "@/components/ui/collapsible",
  },
  {
    matcher: "^Menubar.*",
    source: "@/components/ui/menubar",
  },
  {
    matcher: "^Select.*",
    source: "@/components/ui/select",
  },
  {
    matcher: "^RadioGroup.*",
    source: "@/components/ui/radio-group",
  },
  {
    matcher: "^Textarea",
    source: "@/components/ui/textarea",
  },
  {
    matcher: "^ToggleGroup.*",
    source: "@/components/ui/toggle-group",
  },
  {
    matcher: "^Toggle",
    source: "@/components/ui/toggle",
  },
  {
    matcher: "^Skeleton",
    source: "@/components/ui/skeleton",
  },
  {
    matcher: "^Slider",
    source: "@/components/ui/slider",
  },
  {
    matcher: "^Tooltip.*",
    source: "@/components/ui/tooltip",
  },
  {
    matcher: "^Label",
    source: "@/components/ui/label",
  },
  {
    matcher: "^Input",
    source: "@/components/ui/input",
  },
  {
    matcher: "^ScrollArea",
    source: "@/components/ui/scroll-area",
  },
  {
    matcher: "^Switch",
    source: "@/components/ui/switch",
  },
  {
    matcher: "^Dialog.*",
    source: "@/components/ui/dialog",
  },
  {
    matcher: "^Sheet.*",
    source: "@/components/ui/sheet",
  },
  {
    matcher: "^Separator",
    source: "@/components/ui/separator",
  },
  {
    matcher: "^NavigationMenu.*",
    source: "@/components/ui/navigation-menu",
  },
  {
    matcher: "^HoverCard.*",
    source: "@/components/ui/hover-card",
  },
  {
    matcher: "^DropdownMenu.*",
    source: "@/components/ui/dropdown-menu",
  },
  {
    matcher: "^Accordion.*",
    source: "@/components/ui/accordion",
  },
  {
    matcher: "^AlertDialog.*",
    source: "@/components/ui/alert-dialog",
  },
  {
    matcher: "^Alert.*",
    source: "@/components/ui/alert",
  },
  {
    matcher: "^Table.*",
    source: "@/components/ui/table",
  },
  {
    matcher: "^Tabs.*",
    source: "@/components/ui/tabs",
  },
  {
    matcher: "^Popover.*",
    source: "@/components/ui/popover",
  },
  {
    matcher: "^Calendar",
    source: "@/components/ui/calendar",
  },
  {
    matcher: "^Command.*",
    source: "@/components/ui/command",
  },
  {
    matcher: "^ContextMenu.*",
    source: "@/components/ui/context-menu",
  },
  {
    matcher: "^Carousel.*",
    source: "@/components/ui/carousel",
  },
  {
    matcher: "^Drawer.*",
    source: "@/components/ui/drawer",
  },
  {
    matcher: "^Pagination.*",
    source: "@/components/ui/pagination",
  },
  {
    matcher: "^Resizable.*",
    source: "@/components/ui/resizable",
  },
  {
    matcher: "^ResponsiveBar",
    source: "@nivo/bar",
  },
  {
    matcher: "^ResponsiveLine",
    source: "@nivo/line",
  },
  {
    matcher: "^ResponsivePie",
    source: "@nivo/pie",
  },
  {
    matcher: "^ResponsiveScatterPlot",
    source: "@nivo/scatterplot",
  },
  {
    matcher: "^ResponsiveHeatMap",
    source: "@nivo/heatmap",
  },
];

export async function getFileContent(
  owner: string,
  repo: string,
  branch: string,
  path: string
) {
  const code = (
    await octokit.rest.repos.getContent({
      owner,
      repo,
      ref: branch,
      path,
    })
  ).data;

  if ("type" in code && code.type === "file") {
    return atob(code.content);
  }
}
