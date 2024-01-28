import {
  getCode,
  octokit,
  dewhalePrefix,
  applyPR,
  composeWorkflow,
  shadcnRules,
  getFileContent,
} from "./common.ts";
import { join } from "https://deno.land/std@0.188.0/path/mod.ts";
import { parse, print, visit } from "npm:recast";
import "npm:@babel/parser";
import tsParser from "npm:recast/parsers/babel-ts.js";

const svelteUiGenLabel = `svelte-ui-gen`;

const __dirname = new URL(".", import.meta.url).pathname;
const systemPrompt = await Deno.readTextFile(
  join(__dirname, "./svelte-ui-gen.md")
);

const PLACEHOLDER_CODE = `<p>Dewhale placeholder</p>`;

function getCurrentCode(owner: string, repo: string, branch: string) {
  return getFileContent(
    owner,
    repo,
    branch,
    "svelte-preview-ui/src/routes/preview.svelte"
  );
}

function refineCode(code: string) {
  const regex = /<script>([\s\S]*?)<\/script>/;
  const matches = code.match(regex);

  if (!matches) {
    return code;
  }

  const scriptContent = matches[1];

  const ast = parse(scriptContent, {
    parser: tsParser,
  });

  let importStr = "";

  visit(ast, {
    visitImportDeclaration(p) {
      const isRootUi =
        p.node.source.type === "StringLiteral" &&
        p.node.source.value === "$lib/components/ui";

      if (isRootUi) {
        const components = (p.node.specifiers || [])
          .map((c) => c.local?.name.toString() || "")
          .filter(Boolean);

        importStr = mapShadcnImports(components).importStr;

        p.replace();
      }

      this.traverse(p);
    },
  });

  return code.replace(scriptContent, "\n" + importStr + print(ast).code);
}

function mapShadcnImports(used: string[]) {
  const importMap: Record<string, Set<string>> = {};

  for (const u of used) {
    let source = "";

    for (const rule of shadcnRules) {
      if (new RegExp(rule.matcher).test(u)) {
        source = rule.source.replace("@/components", "$lib/components");
        break;
      }
    }

    if (!source) {
      continue;
    }

    if (!importMap[source]) {
      importMap[source] = new Set();
    }
    importMap[source].add(u);
  }

  let importStr = "";
  for (const key in importMap) {
    const statement = `import { ${Array.from(importMap[key]).join(
      ", "
    )} } from '${key}';`;
    importStr += `${statement}\r\n`;
  }

  return { importStr };
}

async function main() {
  const result = await composeWorkflow(svelteUiGenLabel, {
    "svelte-preview-ui/src/routes/preview.svelte": PLACEHOLDER_CODE,
  });

  if (!result) {
    return;
  }

  const { commitMsg, images, owner, repo, branch, issue, pr } = result;
  let { prompt } = result;

  const currentCode = await getCurrentCode(owner, repo, branch);
  if (currentCode !== PLACEHOLDER_CODE) {
    prompt += `
Previously you already implemented the following code, use it as a reference and meet my new requirements:
\`\`\`svelte
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
      "svelte-preview-ui/src/routes/preview.svelte": refineCode(code),
      "scripts/build-task": "svelte-preview-ui",
    },
    `${dewhalePrefix} prompt:\r\n${commitMsg}`,
    [svelteUiGenLabel]
  );

  if (description) {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pr.number,
      body: `${dewhalePrefix}: ${description}`,
    });
  }
}

main();
