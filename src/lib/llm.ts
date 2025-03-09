import "jsr:@std/dotenv@0.225.3/load";
import { google } from "npm:@ai-sdk/google@1.1.20";
import { anthropic } from "npm:@ai-sdk/anthropic@1.1.17";
import { openai } from "npm:@ai-sdk/openai@1.2.5";
import {
  generateText,
  streamText,
  tool,
  jsonSchema,
  ToolSet,
} from "npm:ai@4.1.54";

export function getModel(provider: string, model: string) {
  switch (provider) {
    case "google":
      return google(model);
    case "openai":
      return openai(model);
    case "anthropic":
      return anthropic(model);
    default:
      throw new Error(`Invalid provider "${provider}"`);
  }
}

export { generateText, streamText, tool, jsonSchema };
export type { ToolSet };
