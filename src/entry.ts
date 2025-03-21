import { Character, loadAllCharacters } from "./character.ts";
import {
  getPlatformSdk,
  getTriggerEvent,
  WORKSPACE,
  REPO,
  OWNER,
} from "./lib/platform.ts";
import { Issue, PlatformSdk } from "./types.ts";

console.log("hello v2");

const data: Record<string, string> = {};
for (const [key, value] of Object.entries(Deno.env.toObject())) {
  console.log("setting -> ", `env_${key}`);
  data[`env_${key}`] = value;
}

const characters = await loadAllCharacters(WORKSPACE, data);

const event = await getTriggerEvent();

const sdk = getPlatformSdk("github");

switch (event?.name) {
  case "issues": {
    const issue = await sdk.getIssueFromEvent(event);

    await letCharacterDoTask(sdk, characters, issue);
    break;
  }
  case "schedule": {
    const issues = await sdk.listIssues({
      owner: OWNER,
      repo: REPO,
      labels: ["schedule"],
    });
    for (const issue of issues) {
      await letCharacterDoTask(sdk, characters, issue);
    }
    break;
  }
  default:
    console.warn(`Unsupported event`);
}

async function letCharacterDoTask(
  sdk: PlatformSdk,
  characters: Character[],
  issue: Issue
) {
  if (issue.state.toLowerCase() !== "open") {
    return;
  }

  for (const character of characters) {
    if (!character.matchesLabels(issue.labels)) {
      continue;
    }

    // TODO: parallel
    await character.initialize();

    const { steps, text } = await character.doTask(issue);
    console.log("final text ->", text);
    if (text.trim()) {
      await sdk.createIssueComment(issue, `[Dewhale] ${text}`);
    }
    for (const s of steps) {
      console.log("step ->", s.finishReason, s.response.messages);
    }

    await character.finalize();
  }
}
