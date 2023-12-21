console.log(Deno.env.toObject());

const GITHUB_EVENT_PATH = Deno.env.get("GITHUB_EVENT_PATH");
if (!GITHUB_EVENT_PATH) {
  throw new Error("failed to get github event path");
}

const githubEvent = await import(GITHUB_EVENT_PATH, {
  with: { type: "json" },
});

console.log(githubEvent);
