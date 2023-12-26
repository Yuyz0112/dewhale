import { join } from "https://deno.land/std@0.188.0/path/mod.ts";
import { parse, print, visit, types } from "npm:recast";
import "npm:@babel/parser";
import tsParser from "npm:recast/parsers/babel-ts.js";
import {
  getCode,
  octokit,
  vxDevPrefix,
  applyPR,
  lucideIcons,
  composeWorkflow,
} from "./common.ts";

const uiGenLabel = `ui-gen`;

const __dirname = new URL(".", import.meta.url).pathname;
const systemPrompt = await Deno.readTextFile(join(__dirname, "./ui-gen.md"));

const PLACEHOLDER_CODE = `export default function VxDev() { return <p>vx.dev placeholder</p>; }`;
async function getCurrentCode(owner: string, repo: string, branch: string) {
  const code = (
    await octokit.rest.repos.getContent({
      owner,
      repo,
      ref: branch,
      path: "preview-ui/src/Preview.jsx",
    })
  ).data;

  if ("type" in code && code.type === "file") {
    return atob(code.content);
  }
}

function mapImports(used: string[], declarations: Set<string>) {
  const rules = [
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
  const importMap: Record<string, Set<string>> = {};
  const fallbacks: string[] = [];

  for (const u of used) {
    let source = "";
    let fallback = false;

    for (const rule of rules) {
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
      "preview-ui/src/Preview.jsx": refineCode(code),
    },
    `${vxDevPrefix} prompt:\r\n${commitMsg}`,
    [uiGenLabel]
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
