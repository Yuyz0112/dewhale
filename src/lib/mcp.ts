import { Client } from "npm:@modelcontextprotocol/sdk/client/index.js";
import {
  getDefaultEnvironment,
  StdioClientTransport,
} from "npm:@modelcontextprotocol/sdk/client/stdio.js";
import { McpServer } from "../types.ts";
import { Tool } from "npm:@modelcontextprotocol/sdk/types.js";

export interface McpHubOptions {
  servers: McpServer[];
}

export class McpHub {
  private clients: Client[] = [];
  private servers: McpServer[] = [];

  constructor({ servers }: McpHubOptions) {
    this.servers = servers;
  }

  public async connect() {
    for (const server of this.servers) {
      const transport = new StdioClientTransport({
        command: server.command,
        args: server.args,
        env: { ...getDefaultEnvironment(), ...server.env },
      });

      const client = new Client(
        {
          name: "dewhale",
          version: "1.0.0",
        },
        {
          capabilities: {
            prompts: {},
            resources: {},
            tools: {},
          },
        }
      );

      await client.connect(transport);

      this.clients.push(client);
    }
  }

  public async disconnect() {
    await Promise.all(this.clients.map((client) => client.close()));
  }

  public async listTools(): Promise<Array<Tool & { client: Client }>> {
    const tools = await Promise.all(
      this.clients.map(async (client) => {
        const result = await client.listTools();
        return {
          ...result,
          client,
        };
      })
    );

    return tools.reduce<Array<Tool & { client: Client }>>(
      (acc, { tools, client }) => {
        return acc.concat(
          tools.map((t) => ({
            ...t,
            client,
          }))
        );
      },
      []
    );
  }
}
