import "jsr:@std/dotenv/load";
import { google } from "npm:@ai-sdk/google";
import { generateText, streamText, tool, jsonSchema, ToolSet } from "npm:ai";

export function getModel(provider: string, model: string) {
  switch (provider) {
    case "google":
      return google(model);
    default:
      throw new Error(`Invalid provider "${provider}"`);
  }
}

export { generateText, streamText, tool, jsonSchema };
export type { ToolSet };
