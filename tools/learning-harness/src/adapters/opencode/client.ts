/**
 * Minimal typed client for the OpenCode server HTTP API.
 *
 * Every endpoint used here was verified against the OpenAPI document served by the
 * installed OpenCode 1.18.33 (`GET /doc`) and exercised against a probe server:
 *   GET  /global/health                       -> { healthy: true, version }
 *   POST /session                             -> Session (body: { title? })
 *   GET  /session/{id}                        -> Session
 *   POST /session/{id}/prompt_async           -> 204 (body: { messageID?, parts, agent?, model? })
 *   GET  /session/{id}/message                -> Array<{ info, parts }>
 *   GET  /session/{id}/message/{messageID}    -> { info, parts } | 404 NotFoundError
 *   GET  /session/status                      -> { [sessionID]: { type: idle|busy|retry } } (idle sessions may be absent)
 *   GET  /session/{id}/children               -> Session[]
 *   POST /session/{id}/abort                  -> boolean
 *   GET  /permission, GET /question           -> pending requests (with sessionID)
 *   GET  /mcp                                 -> MCP server status map
 * Basic auth (user "opencode") is required when OPENCODE_SERVER_PASSWORD is set on the server.
 */

export interface OcMessage {
  info: {
    id: string;
    sessionID: string;
    role: "user" | "assistant";
    parentID?: string;
    time: { created: number; completed?: number };
    error?: { name?: string; data?: { message?: string } } & Record<string, unknown>;
    finish?: string;
    providerID?: string;
    modelID?: string;
    model?: { providerID: string; modelID: string };
    cost?: number;
    tokens?: { input?: number; output?: number; reasoning?: number };
  };
  parts: Array<{ id: string; type: string; text?: string; synthetic?: boolean; tool?: string; mime?: string; url?: string; state?: { status?: string; input?: Record<string, unknown>; output?: unknown; error?: string; attachments?: Array<{ mime: string; url: string }> } }>;
}

export type OcStatus = { type: "idle" } | { type: "busy" } | { type: "retry"; attempt: number; message: string; next: number };

export class OpenCodeHttpError extends Error {
  constructor(
    readonly status: number,
    readonly body: string,
    message: string,
  ) {
    super(message);
  }
}

export class OpenCodeClient {
  constructor(
    private readonly opts: { baseUrl: string; directory?: string; password?: string | null; timeoutMs?: number; fetchImpl?: typeof fetch },
  ) {}

  private async req<T>(method: string, path: string, body?: unknown, opts: { allow404?: boolean; timeoutMs?: number } = {}): Promise<T | null> {
    const url = new URL(path, this.opts.baseUrl);
    if (this.opts.directory && !path.startsWith("/global")) url.searchParams.set("directory", this.opts.directory);
    const headers: Record<string, string> = { accept: "application/json" };
    if (body !== undefined) headers["content-type"] = "application/json";
    if (this.opts.password) headers.authorization = "Basic " + Buffer.from(`opencode:${this.opts.password}`).toString("base64");
    const res = await (this.opts.fetchImpl ?? fetch)(url, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(opts.timeoutMs ?? this.opts.timeoutMs ?? 30_000),
    });
    if (res.status === 404 && opts.allow404) return null;
    const text = await res.text();
    if (!res.ok) throw new OpenCodeHttpError(res.status, text.slice(0, 500), `OpenCode ${method} ${path} -> HTTP ${res.status}`);
    if (res.status === 204 || text.length === 0) return null;
    return JSON.parse(text) as T;
  }

  health() {
    return this.req<{ healthy: boolean; version: string }>("GET", "/global/health", undefined, { timeoutMs: 5000 });
  }
  createSession(title: string) {
    return this.req<{ id: string; title: string; directory: string }>("POST", "/session", { title });
  }
  getSession(id: string) {
    return this.req<{ id: string; title: string }>("GET", `/session/${encodeURIComponent(id)}`, undefined, { allow404: true });
  }
  promptAsync(sessionId: string, body: { messageID: string; parts: Array<{ type: "text"; text: string }>; agent?: string; model?: { providerID: string; modelID: string } }) {
    return this.req<null>("POST", `/session/${encodeURIComponent(sessionId)}/prompt_async`, body);
  }
  getMessage(sessionId: string, messageId: string) {
    return this.req<OcMessage>("GET", `/session/${encodeURIComponent(sessionId)}/message/${encodeURIComponent(messageId)}`, undefined, { allow404: true });
  }
  listMessages(sessionId: string, limit?: number) {
    return this.req<OcMessage[]>("GET", `/session/${encodeURIComponent(sessionId)}/message${limit === undefined ? "" : `?limit=${limit}`}`, undefined, { timeoutMs: 60_000 });
  }
  status() {
    return this.req<Record<string, OcStatus>>("GET", "/session/status");
  }
  children(sessionId: string) {
    return this.req<Array<{ id: string }>>("GET", `/session/${encodeURIComponent(sessionId)}/children`);
  }
  abort(sessionId: string) {
    return this.req<boolean>("POST", `/session/${encodeURIComponent(sessionId)}/abort`);
  }
  permissions() {
    return this.req<Array<{ id: string; sessionID: string; permission: string; patterns: string[] }>>("GET", "/permission");
  }
  questions() {
    return this.req<Array<{ id: string; sessionID: string; questions: Array<{ question?: string }> }>>("GET", "/question");
  }
  mcpStatus() {
    return this.req<Record<string, { status: string; error?: string }>>("GET", "/mcp");
  }
}
