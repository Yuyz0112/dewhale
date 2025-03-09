import { join } from "jsr:@std/path";
import { exists } from "jsr:@std/fs";
import { parse as parseYaml } from "jsr:@std/yaml";
import { DeepPartial, GlobalConfig } from "../types.ts";

export function merge<T extends object>(target: T, source: DeepPartial<T>): T {
  if (typeof source === "object" && source !== null) {
    const result = { ...target };

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];

        if (sourceValue === undefined) {
          continue;
        }

        const targetValue = target[key];

        if (Array.isArray(sourceValue)) {
          result[key] = sourceValue as any;
        } else if (typeof sourceValue === "object" && sourceValue !== null) {
          if (targetValue && typeof targetValue === "object") {
            result[key] = merge(targetValue, sourceValue);
          } else {
            result[key] = sourceValue as any;
          }
        } else {
          result[key] = sourceValue as any;
        }
      }
    }

    return result;
  }

  return source;
}

export const DEFAULT_GLOBAL_CONFIG: GlobalConfig = {
  llm: {
    provider: "",
    model: "",
    temperature: 0,
    maxTokens: 0,
  },
  mcp: {
    servers: [],
  },
  permissions: {
    maxResponsesPerIssue: 0,
  },
};

export async function loadGlobalConfig(
  basePath: string,
  data: Record<string, string>
) {
  const configPath = join(basePath, ".dewhale", "config.yaml");
  console.log({ configPath });

  if (!(await exists(configPath))) {
    return DEFAULT_GLOBAL_CONFIG;
  }

  const configYaml = await Deno.readTextFile(configPath);
  const config = parseYamlWithVariables(
    configYaml,
    data
  ) as DeepPartial<GlobalConfig>;

  return merge(DEFAULT_GLOBAL_CONFIG, config);
}

export function parseYamlWithVariables(
  content: string,
  data: Record<string, string>
) {
  const renderedContent = content.replace(/\${{\s*(.*?)\s*}}/g, (_, key) => {
    if (!key || !data[key.trim()]) {
      throw new Error(`Invalid variable key "${key}"`);
    }
    return data[key.trim()] || "";
  });

  return parseYaml(renderedContent);
}
