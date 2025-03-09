import { Client } from "npm:@modelcontextprotocol/sdk@1.6.1/client/index.js";
import {
  getDefaultEnvironment,
  StdioClientTransport,
} from "npm:@modelcontextprotocol/sdk@1.6.1/client/stdio.js";
import { McpServer } from "../types.ts";
import { Tool } from "npm:@modelcontextprotocol/sdk@1.6.1/types.js";

export interface McpHubOptions {
  servers: McpServer[];
}

export class McpHub {
  private clients: Array<[Client, McpServer]> = [];
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

      this.clients.push([client, server]);
    }
  }

  public async disconnect() {
    await Promise.all(this.clients.map(([client]) => client.close()));
  }

  public async listTools(): Promise<Array<Tool & { client: Client }>> {
    const tools = await Promise.all(
      this.clients.map(async ([client, server]) => {
        const result = await client.listTools();
        return {
          ...result,
          client,
          server,
        };
      })
    );

    return tools.reduce<Array<Tool & { client: Client }>>(
      (acc, { tools, client, server }) => {
        return acc.concat(
          tools
            .filter((t) => {
              if (!server.tools) {
                // allow all
                return true;
              }
              if (server.tools[t.name]) {
                // whitelist
                return true;
              }
              return false;
            })
            .map((t) => ({
              ...t,
              client,
            }))
        );
      },
      []
    );
  }
}
