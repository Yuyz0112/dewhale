import { join } from "jsr:@std/path@1.0.8";
import { exists } from "jsr:@std/fs@1.0.14";
import {
  DEFAULT_GLOBAL_CONFIG,
  loadGlobalConfig,
  merge,
  parseYamlWithVariables,
} from "./lib/config.ts";
import { CharacterConfig, DeepPartial, Issue } from "./types.ts";
import {
  generateText,
  getModel,
  tool,
  jsonSchema,
  ToolSet,
} from "./lib/llm.ts";
import { CoreMessage } from "npm:ai@4.1.54";
import { McpHub } from "./lib/mcp.ts";
import { BRANCH, OWNER, REPO, WORKSPACE } from "./lib/platform.ts";

export const DEFAULT_CHARACTER_CONFIG: CharacterConfig = {
  ...DEFAULT_GLOBAL_CONFIG,
  name: "",
  labels: [],
  systemPrompt: "",
};

const CONTEXT = {
  WORKSPACE,
  REPO,
  OWNER,
  CURRENT_BRANCH: BRANCH,
};
console.log(CONTEXT);

export class Character {
  private config: CharacterConfig;
  private mcpHub: McpHub;

  constructor(config: DeepPartial<CharacterConfig>) {
    if (!config.name) {
      throw new Error("name is required in character config");
    }

    this.config = merge(DEFAULT_CHARACTER_CONFIG, config);
    this.mcpHub = new McpHub({
      servers: this.config.mcp.servers,
    });
  }

  get name(): string {
    return this.config.name;
  }

  get model() {
    return getModel(this.config.llm.provider, this.config.llm.model);
  }

  public async initialize() {
    await this.mcpHub.connect();
  }

  public async finalize() {
    await this.mcpHub.disconnect();
  }

  public matchesLabels(issueLabels: Issue["labels"]): boolean {
    const issueLabelSet = new Set(issueLabels.map((label) => label.name));

    return this.config.labels.some((label) => issueLabelSet.has(label));
  }

  private issueToPrompt(issue: Issue): {
    messages: CoreMessage[];
  } {
    return {
      messages: [
        {
          role: "system",
          content: `<context>${JSON.stringify({
            ...CONTEXT,
            ISSUE_ID: issue.id,
            CURRENT_TIME: new Date().toISOString(),
          })}</context>
<character>${this.config.systemPrompt}</character>`,
        },
        {
          role: "user",
          content: `<title>${issue.title}</title><content>${issue.content}</content>`,
        },
        ...issue.comments.map((c) => {
          const m: CoreMessage = {
            role: "user",
            content: c.content,
          };

          return m;
        }),
      ],
    };
  }

  public async doTask(issue: Issue) {
    const { messages } = this.issueToPrompt(issue);
    const tools = await this.mcpHub.listTools();

    const { text, steps } = await generateText({
      model: this.model,
      messages,
      tools: tools.reduce((acc, t) => {
        // console.log("appending", t.name, t.description);
        acc[t.name] = tool({
          description: t.description,
          parameters: jsonSchema(t.inputSchema),
          execute: async (input) => {
            console.log("going to execute", { name: t.name, input });
            try {
              const { content } = await t.client.callTool({
                name: t.name,
                arguments: input as unknown as Record<string, string>,
              });

              return JSON.stringify(content);
            } catch (error: any) {
              console.error(error);
              return JSON.stringify({
                error: {
                  message: error?.message,
                  name: error?.name,
                  stack: error?.stack,
                  ...error,
                },
              });
            }
          },
        });
        return acc;
      }, {} as ToolSet),
      maxSteps: this.config.llm.maxSteps,
      temperature: this.config.llm.temperature,
      maxTokens: this.config.llm.maxTokens,
      maxRetries: this.config.llm.maxRetries,
    });

    return {
      text,
      steps,
    };
  }
}

export async function loadAllCharacters(
  basePath: string,
  data: Record<string, string>
): Promise<Character[]> {
  const characters: Character[] = [];
  const charactersDir = join(basePath, ".dewhale", "characters");
  const globalConfig = await loadGlobalConfig(basePath, data);
  console.log({ globalConfig });

  try {
    if (await exists(charactersDir)) {
      for await (const entry of Deno.readDir(charactersDir)) {
        const isYaml =
          entry.name.endsWith(".yaml") || entry.name.endsWith(".yml");
        if (entry.isFile && isYaml) {
          try {
            const filePath = join(charactersDir, entry.name);
            const content = await Deno.readTextFile(filePath);
            const config = parseYamlWithVariables(
              content,
              data
            ) as CharacterConfig;
            characters.push(new Character(merge(globalConfig, config)));
            console.log(`character "${config.name}" loaded`);
          } catch (error) {
            console.error(`failed to load character "${entry.name}":`, error);
          }
        }
      }
    } else {
      console.warn(`characters config folder "${charactersDir} not exists"`);
    }
  } catch (error) {
    console.error(`failed to load characters:`, error);
  }

  return characters;
}
