import { parse, CORE_SCHEMA } from "https://deno.land/std@0.207.0/yaml/mod.ts";
import { octokit } from "./common.ts";

type QuotaConfig = {
  total_limit: number;
  rule_specific: { rule: string; total_limit: number }[];
  user_specific: { user_login: string; total_limit: number }[];
  since?: string;
};

async function checkQuota(
  owner: string,
  repo: string,
  login: string
): Promise<boolean> {
  const configStr = Deno.env.get("CONFIG");

  if (!configStr) {
    return false;
  }

  const { quota: quotaConfig } = parse(configStr, { schema: CORE_SCHEMA }) as {
    quota: QuotaConfig;
  };

  const workflows = await octokit.rest.actions.listRepoWorkflows({
    owner,
    repo,
  });

  const prWorkflow = workflows.data.workflows.find(
    (w) => w.name === "Create PR"
  );

  if (!prWorkflow) {
    throw new Error("stop");
  }

  const runs = [];
  for await (const res of octokit.paginate.iterator(
    octokit.rest.actions.listWorkflowRuns,
    {
      owner,
      repo,
      workflow_id: prWorkflow.id,
      exclude_pull_requests: true,
      status: "success",
      per_page: 100,
      created: quotaConfig.since ? `>=${quotaConfig.since}` : undefined,
    }
  )) {
    runs.push(...res.data);
  }

  const usageMap: Record<string, number> = {};

  for (const run of runs) {
    if (!run.actor) {
      continue;
    }

    if (!usageMap[run.actor.login]) {
      usageMap[run.actor.login] = 0;
    }

    usageMap[run.actor.login]++;
  }

  const usage = usageMap[login] || 0;
  const quota = await getQuota(owner, repo, login, quotaConfig);

  console.log({ login, usage, quota });

  return usage < quota;
}

async function getQuota(
  owner: string,
  repo: string,
  login: string,
  quotaConfig: QuotaConfig
) {
  for (const item of quotaConfig.user_specific) {
    if (item.user_login === login) {
      return item.total_limit;
    }
  }

  for (const item of quotaConfig.rule_specific) {
    switch (item.rule) {
      case "stargazers": {
        const stargazers = [];
        for await (const res of octokit.paginate.iterator(
          octokit.rest.activity.listStargazersForRepo,
          {
            owner,
            repo,
            per_page: 100,
          }
        )) {
          stargazers.push(...res.data);
        }

        if (stargazers.some((s) => "login" in s && s.login === login)) {
          return item.total_limit;
        }
        break;
      }
      default:
    }
  }

  return quotaConfig.total_limit;
}

export function checkWhitelist(login: string): boolean {
  const whitelistStr = Deno.env.get("WHITELIST");

  if (!whitelistStr) {
    return false;
  }

  const whitelist = whitelistStr.split(",");
  return whitelist.some((item) => item === login);
}

export async function checkValid(
  owner: string,
  repo: string,
  login: string
): Promise<boolean> {
  const valid = checkWhitelist(login) || (await checkQuota(owner, repo, login));

  return valid;
}
