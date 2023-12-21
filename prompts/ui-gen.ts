import { Octokit } from "npm:octokit";
import commitPlugin from "npm:octokit-commit-multiple-files";
import { assert } from "https://deno.land/std@0.201.0/assert/assert.ts";
import { join } from "https://deno.land/std@0.188.0/path/mod.ts";
import { getCode } from "./common.ts";

type IssueEvent = {
  action: string;
  issue: {
    body: string;
    number: number;
    labels: { name: string }[];
    user: { login: string };
    pull_request?: { url: string };
  };
};

const PatchedOctokit = Octokit.plugin(commitPlugin);
const ghToken = Deno.env.get("GH_TOKEN");
assert(ghToken, "failed to get github token");

const octokit: Octokit = new PatchedOctokit({
  auth: ghToken,
});

const whitelist = ["Yuyz0112"];

const vxDevPrefix = `[vx.dev]`;
const uiGenLabel = `ui-gen`;

const __dirname = new URL(".", import.meta.url).pathname;
const systemPrompt = await Deno.readTextFile(join(__dirname, "./ui-gen.md"));
console.log(systemPrompt);

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
    prBody.match(/\[vx\.dev\] This PR implements #(\d+),/)?.[1] || ""
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

async function applyPR(
  owner: string,
  repo: string,
  issueNumber: number,
  newBranch: string,
  files: Record<string, string>,
  commitMsg: string
) {
  const baseBranch = "main";

  // deno-lint-ignore no-explicit-any
  await (octokit as any).createOrUpdateFiles({
    owner,
    repo,
    branch: newBranch,
    createBranch: true,
    base: baseBranch,
    forkFromBaseBranch: true,
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
        title: `${vxDevPrefix} implements #${issueNumber}`,
        body: `${vxDevPrefix} This PR implements #${issueNumber}, created by vx.dev.`,
      })
    ).data as any;
  }

  octokit.rest.issues.setLabels({
    owner,
    repo,
    issue_number: pr.number,
    labels: [uiGenLabel],
  });

  return pr;
}

async function collectPromptAndImages(
  owner: string,
  repo: string,
  issue: { number: number; body?: string | null },
  pr: { number: number }
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

  const commentsStr = issueComments
    .concat(prComments)
    .filter(
      (c) =>
        !c.body?.includes(vxDevPrefix) &&
        whitelist.some((item) => item === c.user?.login)
    )
    .sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )
    .map((c) => c.body)
    .join("\n");

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

async function main() {
  const githubEventPath = Deno.env.get("GITHUB_EVENT_PATH");
  assert(githubEventPath, "failed to get github event path");

  const githubEvent: IssueEvent = (
    await import(githubEventPath, {
      with: { type: "json" },
    })
  ).default;

  console.log(githubEvent.action, githubEvent.issue);

  if (githubEvent.issue.labels.every((l) => l.name !== uiGenLabel)) {
    return;
  }

  if (whitelist.every((item) => item !== githubEvent.issue.user.login)) {
    return;
  }

  const isPr = Boolean(githubEvent.issue.pull_request);
  const eventName = Deno.env.get("GITHUB_EVENT_NAME");
  assert(eventName, "failed to get event name");

  // ignore non-comments event in PR
  if (isPr && eventName === "issues") {
    return;
  }

  const owner = Deno.env.get("GITHUB_REPOSITORY_OWNER");
  assert(owner, "failed to get repo owner");

  let repo = Deno.env.get("GITHUB_REPOSITORY");
  assert(repo, "failed to get repo name");
  repo = repo.replace(`${owner}/`, "");

  const issue = isPr
    ? await getConnectedIssue(owner, repo, githubEvent.issue.body)
    : githubEvent.issue;

  const branch = `ui-gen-issue-${issue.number}`;

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
          {
            "vx.dev.txt": "placeholder",
          },
          "vx.dev: init the PR"
        );
  }

  const { prompt, images } = await collectPromptAndImages(
    owner,
    repo,
    issue,
    pr
  );
  const commitMsg = JSON.stringify(
    {
      prompt,
      images,
    },
    null,
    2
  );
  console.log(commitMsg);

  const { code, usage } = await getCode(
    [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
          ...images.map(
            (image) =>
              ({
                type: "image_url",
                image_url: {
                  url: image,
                },
              } as const)
          ),
        ],
      },
    ],
    "gpt-4-vision-preview"
  );
  console.log(JSON.stringify(usage, null, 2));

  await applyPR(
    owner,
    repo,
    issue.number,
    branch,
    {
      "preview-ui/src/Preview.jsx": code,
    },
    `${vxDevPrefix} prompt:\r\n${commitMsg}`
  );
}

main();
