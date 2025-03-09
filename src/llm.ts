import "jsr:@std/dotenv/load";
import { createGoogleGenerativeAI } from "npm:@ai-sdk/google";
import { generateText, streamText } from "npm:ai";

const google = createGoogleGenerativeAI({
  apiKey: Deno.env.get("GEMINI_API_KEY"),
});

google("gemini-2.0-flash");
