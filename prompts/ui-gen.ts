const GITHUB_EVENT_PATH = Deno.env.get("GITHUB_EVENT_PATH");
if (!GITHUB_EVENT_PATH) {
  throw new Error("failed to get github event path");
}

const githubEvent: { issue: { number: number; labels: string[] } } = (
  await import(GITHUB_EVENT_PATH, {
    with: { type: "json" },
  })
).default;

console.log(githubEvent.issue);
