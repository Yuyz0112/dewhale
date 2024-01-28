import { join } from "https://deno.land/std@0.188.0/path/mod.ts";
import { parse, print, visit, types } from "npm:recast";
import "npm:@babel/parser";
import tsParser from "npm:recast/parsers/babel-ts.js";
import {
  getCode,
  octokit,
  dewhalePrefix,
  applyPR,
  lucideIcons,
  composeWorkflow,
  shadcnRules,
  getFileContent,
} from "./common.ts";

const uiGenLabel = `ui-gen`;

const __dirname = new URL(".", import.meta.url).pathname;
const systemPrompt = await Deno.readTextFile(join(__dirname, "./ui-gen.md"));

const PLACEHOLDER_CODE = `export default function Preview() { return <p>Dewhale placeholder</p>; }`;
function getCurrentCode(owner: string, repo: string, branch: string) {
  return getFileContent(owner, repo, branch, "preview-ui/src/Preview.jsx");
}

function mapImports(used: string[], declarations: Set<string>) {
  const importMap: Record<string, Set<string>> = {};
  const fallbacks: string[] = [];

  for (const u of used) {
    let source = "";
    let fallback = false;

    for (const rule of shadcnRules) {
      if (new RegExp(rule.matcher).test(u)) {
        source = rule.source;
        break;
      }
    }

    if (!source && lucideIcons[u]) {
      source = "lucide-react";
    }

    if (!source && declarations.has(u)) {
      continue;
    }

    if (!source) {
      // fallback to Home icon
      source = "lucide-react";
      fallback = true;
      fallbacks.push(u);
    }

    if (!importMap[source]) {
      importMap[source] = new Set();
    }
    importMap[source].add(fallback ? "Home" : u);
  }

  let importStr = "";
  for (const key in importMap) {
    const statement = `import { ${Array.from(importMap[key]).join(
      ", "
    )} } from '${key}';`;
    importStr += `${statement}\r\n`;
  }

  return { importStr, fallbacks };
}

function refineCode(code: string) {
  const fromReact = new Set<string>();
  const usedVariables = new Set<string>();
  const declarations = new Set<string>();

  const ast = parse(code, {
    parser: tsParser,
  });

  visit(ast, {
    visitImportDeclaration(p) {
      const isReact =
        p.node.source.type === "StringLiteral" &&
        p.node.source.value === "react";

      if (!isReact) {
        p.replace();
      } else {
        for (const s of p.node.specifiers || []) {
          fromReact.add(s.local?.name.toString() || "");
        }
      }

      this.traverse(p);
    },
  });

  visit(ast, {
    visitIdentifier(p) {
      const varName = p.node.name;
      const isDecl = ["VariableDeclarator", "FunctionDeclaration"].includes(
        p.parent?.node.type
      );

      if (isDecl) {
        declarations.add(varName);
      }

      // TODO: collect with a better strategy
      // if (!fromReact.has(varName) && !isDecl) {
      //   usedVariables.add(varName);
      // }
      this.traverse(p);
    },
    visitJSXIdentifier(p) {
      const elName = p.node.name;
      if (
        p.parent?.node.type === "JSXOpeningElement" &&
        elName[0].toUpperCase() === elName[0] &&
        !fromReact.has(elName)
      ) {
        usedVariables.add(elName);
      }
      this.traverse(p);
    },
  });

  const { importStr, fallbacks } = mapImports(
    Array.from(usedVariables),
    declarations
  );

  visit(ast, {
    visitJSXIdentifier(p) {
      const elName = p.node.name;
      if (
        ["JSXOpeningElement", "JSXClosingElement"].includes(
          p.parent?.node.type
        ) &&
        elName[0].toUpperCase() === elName[0] &&
        !fromReact.has(elName) &&
        fallbacks.includes(elName)
      ) {
        p.replace(types.builders.jsxIdentifier("div"));
      }
      this.traverse(p);
    },
  });

  return importStr + print(ast).code;
}

async function main() {
  const result = await composeWorkflow(uiGenLabel, {
    "preview-ui/src/Preview.jsx": PLACEHOLDER_CODE,
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
      "preview-ui/src/Preview.jsx": refineCode(code),
    },
    `${dewhalePrefix} prompt:\r\n${commitMsg}`,
    [uiGenLabel]
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
