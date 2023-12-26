import { assert } from "https://deno.land/std@0.201.0/assert/assert.ts";
import {
  getCode,
  octokit,
  vxDevPrefix,
  applyPR,
  lucideIcons,
  composeWorkflow,
} from "./common.ts";
import { join } from "https://deno.land/std@0.188.0/path/mod.ts";

const vueUiGenLabel = `vue-ui-gen`;

const __dirname = new URL(".", import.meta.url).pathname;
const systemPrompt = await Deno.readTextFile(
  join(__dirname, "./vue-ui-gen.md")
);

const PLACEHOLDER_CODE = `<script setup>
const props = defineProps({});
</script>

<template>
  <p>vx.dev placeholder</p>
</template>`;

async function getCurrentCode(owner: string, repo: string, branch: string) {
  const code = (
    await octokit.rest.repos.getContent({
      owner,
      repo,
      ref: branch,
      path: "vue-preview-ui/src/Preview.vue",
    })
  ).data;

  if ("type" in code && code.type === "file") {
    return atob(code.content);
  }
}

function refineCode(code: string) {
  // TODO: refine Vue code
  return code;
}

async function main() {
  const result = await composeWorkflow(vueUiGenLabel, {
    "vue-preview-ui/src/Preview.vue": PLACEHOLDER_CODE,
  });

  if (!result) {
    return;
  }

  const { commitMsg, images, owner, repo, branch, issue, pr } = result;
  let { prompt } = result;

  const currentCode = await getCurrentCode(owner, repo, branch);
  if (currentCode !== PLACEHOLDER_CODE) {
    prompt += `
Rreviously you already implemented the following code, use it as a reference and meet my new requirements:
\`\`\`jsx
${currentCode}
\`\`\`
`;
  }

  const { code, usage, description } = await getCode(
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
      "vue-preview-ui/src/Preview.vue": refineCode(code),
      "scripts/build-task": "vue-preview-ui",
    },
    `${vxDevPrefix} prompt:\r\n${commitMsg}`,
    [vueUiGenLabel]
  );

  if (description) {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pr.number,
      body: `${vxDevPrefix}: ${description}`,
    });
  }
}

main();
