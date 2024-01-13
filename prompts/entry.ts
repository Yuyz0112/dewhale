import { join } from "https://deno.land/std@0.188.0/path/mod.ts";
import { getIssueEvent } from "./common.ts";

const { githubEvent } = await getIssueEvent();

const __dirname = new URL(".", import.meta.url).pathname;

const labels = new Set(githubEvent.issue.labels.map((l) => l.name));

const entry = labels.has("ui-gen")
  ? "ui-gen"
  : labels.has("vue-ui-gen")
  ? "vue-ui-gen"
  : labels.has("svelte-ui-gen")
  ? "svelte-ui-gen"
  : null;
if (!entry) {
  throw new Error("unknown entry");
} else {
  const module = await import(join(__dirname, `./${entry}.ts`));
  module.main?.();
}
