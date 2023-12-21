import { retryAsync } from "https://deno.land/x/retry@v2.0.0/mod.ts";
import OpenAI from "https://deno.land/x/openai@v4.20.1/mod.ts";
import {
  ChatCompletionMessageParam,
  CompletionUsage,
} from "https://deno.land/x/openai@v4.20.1/resources/mod.ts";
import { assert } from "https://deno.land/std@0.201.0/assert/assert.ts";
import { ChatCompletionCreateParamsBase } from "https://deno.land/x/openai@v4.20.1/resources/chat/completions.ts";
import { fromMarkdown } from "https://esm.sh/mdast-util-from-markdown@2.0.0";
import { visitParents } from "https://esm.sh/unist-util-visit-parents@6.0.1";

const apiKey = Deno.env.get("OPENAI_API_KEY");
assert(apiKey, "failed to get openAI API key");

const openai = new OpenAI({
  apiKey: apiKey,
});

export async function getCode(
  messages: ChatCompletionMessageParam[] = [],
  model: ChatCompletionCreateParamsBase["model"]
): Promise<{ code: string; usage?: CompletionUsage | undefined }> {
  return await retryAsync<{
    code: string;
    usage?: CompletionUsage | undefined;
  }>(
    async () => {
      const chatCompletion = await openai.chat.completions.create({
        messages,
        model,
        max_tokens: 3000,
        temperature: 0.2,
      });

      const codeBlocks: string[] = [];
      const tree = fromMarkdown(chatCompletion.choices[0].message.content);
      // deno-lint-ignore no-explicit-any
      visitParents(tree, "code", (node: any) => {
        codeBlocks.push(node.value.trim());
      });

      if (codeBlocks.length !== 1) {
        throw new Error(`invalid code blocks ${JSON.stringify(codeBlocks)}`);
      }

      return {
        code: codeBlocks[0],
        usage: chatCompletion.usage,
      };
    },
    { delay: 100, maxTry: 3 }
  );
}
