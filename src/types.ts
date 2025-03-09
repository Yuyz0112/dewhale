export interface GlobalConfig {
  llm: {
    provider: string;
    model: string;
    temperature?: number;
    maxTokens?: number;
    maxRetries?: number;
    maxSteps?: number;
  };
  mcp: {
    servers: McpServer[];
  };
  permissions: Permissions;
}

export interface CharacterConfig extends GlobalConfig {
  name: string;
  labels: string[];
  systemPrompt: string;
}

export interface McpServer {
  command: string;
  args?: string[];
  env?: Record<string, string>;
}

export interface Permissions {
  maxResponsesPerIssue: number;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type TriggerEvent = IssueEvent | ScheduleEvent;

export type IssueEvent = {
  name: "issues";
  action: string;
  issue: {
    owner: string;
    repo: string;
    id: number;
  };
};

export type ScheduleEvent = {
  name: "schedule";
};

export type PlatformType = "github";

export interface PlatformSdk {
  getIssueFromEvent(event: IssueEvent): Promise<Issue>;
  listIssues(options: {
    owner: string;
    repo: string;
    labels?: string[];
  }): Promise<Issue[]>;
}

export interface Issue {
  title: string;
  content: string;
  labels: { name: string }[];
  comments: IssueComment[];
}

export interface IssueComment {
  author: {
    name: string;
  };
  content: string;
}
