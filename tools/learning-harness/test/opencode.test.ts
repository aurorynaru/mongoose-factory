import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import type { AddressInfo } from "node:net";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { OpenCodeClient } from "../src/adapters/opencode/client.js";
import { OpenCodeWorker } from "../src/adapters/opencode/worker.js";
import { MemoryLogger } from "../src/util/log.js";
import { inspectionLoop } from "../src/adapters/opencode/inspection-loop.js";
import type { OcMessage } from "../src/adapters/opencode/client.js";
import { ConfigSchema } from "../src/config.js";

/**
 * Mock of the OpenCode 1.18.33 endpoints the worker uses. Response shapes follow the OpenAPI
 * document served by the installed version (GET /doc) and a probe run against it.
 */
interface MockState {
  messages: Array<{ info: Record<string, unknown>; parts: Array<Record<string, unknown>> }>;
  status: Record<string, unknown>;
  permissions: Array<Record<string, unknown>>;
  questions: Array<Record<string, unknown>>;
  requests: Array<{ method: string; url: string; auth?: string; body?: unknown }>;
  failPrompt?: boolean;
  abortMode?: "idle" | "busy" | "reject";
}

let server: Server;
let base: string;
let st: MockState;

function send(res: ServerResponse, code: number, body?: unknown) {
  res.writeHead(code, { "content-type": "application/json" });
  res.end(body === undefined ? "" : JSON.stringify(body));
}

beforeEach(async () => {
  st = { messages: [], status: {}, permissions: [], questions: [], requests: [] };
  server = createServer(async (req: IncomingMessage, res) => {
    let raw = "";
    for await (const c of req) raw += c;
    const url = new URL(req.url!, "http://x");
    st.requests.push({ method: req.method!, url: req.url!, auth: req.headers.authorization, body: raw ? JSON.parse(raw) : undefined });
    const p = url.pathname;
    if (p === "/global/health") return send(res, 200, { healthy: true, version: "1.18.33" });
    if (p === "/session" && req.method === "POST") return send(res, 200, { id: "ses_mock1", title: JSON.parse(raw).title, directory: url.searchParams.get("directory") });
    if (p === "/session/status") return send(res, 200, st.status);
    if (p === "/permission") return send(res, 200, st.permissions);
    if (p === "/question") return send(res, 200, st.questions);
    if (p === "/session/ses_mock1/children") return send(res, 200, [{ id: "ses_child" }]);
    let m = p.match(/^\/session\/(ses_\w+)\/prompt_async$/);
    if (m) {
      if (st.failPrompt) return res.destroy();
      const b = JSON.parse(raw);
      st.messages.push({ info: { id: b.messageID, sessionID: m[1], role: "user", time: { created: 1 } }, parts: b.parts });
      res.writeHead(204).end();
      return;
    }
    m = p.match(/^\/session\/(ses_\w+)\/message\/(msg_\w+)$/);
    if (m) {
      const hit = st.messages.find((x) => x.info.id === m![2]);
      return hit ? send(res, 200, hit) : send(res, 404, { name: "NotFoundError", data: { message: `Message not found: ${m[2]}` } });
    }
    if (/^\/session\/ses_\w+\/message$/.test(p)) {
      const limit = url.searchParams.get("limit");
      return send(res, 200, limit ? st.messages.slice(-Number(limit)) : st.messages);
    }
    if (/^\/session\/ses_\w+\/abort$/.test(p) && req.method === "POST") {
      if (!st.abortMode || st.abortMode === "idle") delete st.status[p.split("/")[2]];
      return send(res, 200, st.abortMode !== "reject");
    }
    send(res, 404, { name: "NotFound" });
  });
  await new Promise<void>((r) => server.listen(0, "127.0.0.1", r));
  base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});
afterEach(() => new Promise<void>((r) => server.close(() => r())));

const worker = (password?: string, model: { providerID: string; modelID: string } | null = null, maxSnapshotRefFailures?: number) =>
  new OpenCodeWorker({
    client: new OpenCodeClient({ baseUrl: base, directory: "C:\\AI\\mongoose-factory", password, timeoutMs: 2000 }),
    agent: null,
    model,
    pollIntervalMs: 10,
    noResponseGraceMs: 300,
    maxSnapshotRefFailures,
    log: new MemoryLogger(),
  });

const assistant = (id: string, parentID: string, text: string, extra: Record<string, unknown> = {}) => ({
  info: { id, sessionID: "ses_mock1", role: "assistant", parentID, time: { created: 2, completed: 3 }, cost: 0.01, tokens: { input: 10, output: 5 }, ...extra },
  parts: [
    { id: "prt_1", type: "text", text },
    { id: "prt_2", type: "tool", tool: "write", state: { status: "completed", input: { filePath: "evidence/EXP-004/28-new.png" } } },
  ],
});

const snapshot = (id: string, parentID: string, target?: string, missing = false): OcMessage => ({
  info: { id, sessionID: "ses_mock1", role: "assistant", parentID, time: { created: 2, completed: 3 } },
  parts: [{ id: `prt_${id}`, type: "tool", tool: "playwright_browser_snapshot", state: {
    status: missing ? "error" : "completed", input: target ? { depth: 4, target } : {},
    ...(missing ? { error: `### Error\nError: Ref ${target} not found in the current page snapshot. Try capturing new snapshot.` } : {}),
  } }],
});

function staleLoop(parentID: string, cycles = 6): OcMessage[] {
  return Array.from({ length: cycles }, (_, n) => [
    snapshot(`msg_${n}a`, parentID, "f3e1307"),
    snapshot(`msg_${n}b`, parentID, "f3e1309", true),
    snapshot(`msg_${n}c`, parentID, "f3e1311", true),
  ]).flat();
}

describe("snapshot missing-reference guard", () => {
  it("detects alternating failed refs despite a successful cell-only read", () => {
    expect(inspectionLoop(staleLoop("msg_task"), 6)).toContain("f3e1309");
    expect(inspectionLoop(staleLoop("msg_task", 5), 6)).toBeNull();
    expect(inspectionLoop(staleLoop("msg_task"), 0)).toBeNull();
    expect(ConfigSchema.parse({}).opencode.maxSnapshotRefFailures).toBe(6);
    expect(ConfigSchema.safeParse({ opencode: { maxSnapshotRefFailures: 25 } }).success).toBe(false);
  });

  it("permits recovery via a fresh snapshot or a different successful tool", () => {
    const old = staleLoop("msg_task");
    expect(inspectionLoop([...old, snapshot("msg_fresh", "msg_task"), ...staleLoop("msg_task", 1)], 6)).toBeNull();
    expect(inspectionLoop([...old, assistant("msg_read", "msg_task", "read state"), ...staleLoop("msg_task", 1)], 6)).toBeNull();
  });

  it("does not stop repeated valid reads, unrelated errors, or stale failures outside the window", () => {
    const valid = Array.from({ length: 25 }, (_, n) => snapshot(`msg_v${n}`, "msg_task", "valid"));
    expect(inspectionLoop(valid, 6)).toBeNull();
    expect(inspectionLoop([...staleLoop("msg_task"), ...valid], 6)).toBeNull();
    const errors = staleLoop("msg_task");
    for (const m of errors) if (m.parts[0].state?.status === "error") m.parts[0].state.error = "Timeout waiting for page";
    expect(inspectionLoop(errors, 6)).toBeNull();
  });

  it("defers interruption whenever a tool is still running or pending", () => {
    for (const status of ["running", "pending"]) {
      const active = snapshot("msg_active", "msg_task");
      active.parts[0].tool = "playwright_browser_click";
      active.parts[0].state!.status = status;
      expect(inspectionLoop([...staleLoop("msg_task"), active], 6)).toBeNull();
    }
  });
});

describe("OpenCode worker adapter (mock server)", () => {
  it("interrupts only the looping task's session, confirms idle, and retains partial output", async () => {
    const w = worker();
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "bounded task");
    st.messages.push(assistant("msg_note", mid, "Target scope still unresolved"), ...staleLoop(mid));
    st.status = { ses_mock1: { type: "busy" }, ses_other: { type: "busy" } };
    const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
    expect(r).toMatchObject({ status: "stalled", aborted: true });
    if (r.status === "stalled") {
      expect(r.text).toContain("Target scope still unresolved");
      expect(r.transcript).toContain("bounded task");
      expect(r.transcript).toContain("Ref f3e1309 not found");
    }
    expect(st.requests.filter((q) => q.url.includes("/abort"))).toHaveLength(1);
    expect(st.requests.find((q) => q.url.includes("/abort"))!.url).toContain("/session/ses_mock1/abort");
    expect(st.requests.some((q) => q.url.includes("limit=64"))).toBe(true);
    expect(st.requests.filter((q) => q.url.includes("prompt_async"))).toHaveLength(1);
    expect(st.status.ses_other).toEqual({ type: "busy" });
  });

  it("can disable monitoring without changing normal busy-task handling", async () => {
    const w = worker(undefined, null, 0);
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "task");
    st.messages.push(...staleLoop(mid));
    st.status = { ses_mock1: { type: "busy" } };
    expect((await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 50, shouldStop: () => false })).status).toBe("timeout");
    expect(st.requests.some((q) => q.url.includes("/message?limit=") || q.url.includes("/abort"))).toBe(false);
  });

  it("does not label a rejected abort or an acknowledgement with a still-busy worker as stopped", async () => {
    for (const mode of ["reject", "busy"] as const) {
      st.messages = [];
      const w = worker();
      const mid = w.newMessageId();
      await w.submit("ses_mock1", mid, "task");
      st.messages.push(...staleLoop(mid));
      st.status = { ses_mock1: { type: "busy" } };
      st.abortMode = mode;
      expect(await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false })).toMatchObject({ status: "stalled", aborted: false });
    }
  });

  it("ignores a previous task's loop while waiting for a new task", async () => {
    const w = worker();
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "new task");
    st.messages.push(...staleLoop("msg_oldtask"));
    st.status = { ses_mock1: { type: "busy" } };
    expect((await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 50, shouldStop: () => false })).status).toBe("timeout");
    expect(st.requests.some((q) => q.url.includes("/abort"))).toBe(false);
  });

  it("creates a session, submits with our messageID and directory, and uses Basic auth user 'opencode'", async () => {
    const w = worker("pw123");
    const sid = await w.createSession("EXP-004 test");
    const mid = w.newMessageId();
    expect(await w.submit(sid, mid, "do the thing")).toEqual({ status: "accepted" });
    const prompt = st.requests.find((r) => r.url.includes("prompt_async"))!;
    expect(prompt.body).toMatchObject({ messageID: mid, parts: [{ type: "text", text: "do the thing" }] });
    expect(prompt.url).toContain("directory=C%3A%5CAI%5Cmongoose-factory");
    expect(prompt.auth).toBe("Basic " + Buffer.from("opencode:pw123").toString("base64"));
    expect(await w.findMessage(sid, mid)).toBe("present");
    expect(await w.findMessage(sid, "msg_000000000000doesnotexist")).toBe("absent");
  });

  it("sends the configured Strata model with a worker task", async () => {
    const model = { providerID: "strata", modelID: "qwen3.8-flash-next-coder-iq1_m" };
    const w = worker(undefined, model);
    const mid = w.newMessageId();
    expect(await w.submit("ses_mock1", mid, "read-only check")).toEqual({ status: "accepted" });
    const prompt = st.requests.find((r) => r.url.includes("prompt_async"))!;
    expect(prompt.body).toMatchObject({ messageID: mid, model });
  });

  it("returns uncertain (not failed) when the connection drops during submission", async () => {
    st.failPrompt = true;
    const w = worker();
    expect((await w.submit("ses_mock1", w.newMessageId(), "x")).status).toBe("uncertain");
  });

  it("waits for idle + completed assistant replies linked by parentID, ignoring unrelated messages", async () => {
    const w = worker();
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "task");
    st.messages.unshift(assistant("msg_old", "msg_earlier", "OLD REPORT"));
    st.status = { ses_mock1: { type: "busy" } };
    setTimeout(() => {
      st.messages.push(assistant("msg_a1", mid, "step one"), assistant("msg_a2", mid, "HARNESS REPORT final"));
      st.status = {};
    }, 50);
    const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
    expect(r.status).toBe("completed");
    if (r.status === "completed") {
      expect(r.text).toContain("HARNESS REPORT final");
      expect(r.text).not.toContain("OLD REPORT");
      expect(r.assistantMessageIds).toEqual(["msg_a1", "msg_a2"]);
      expect(r.touchedFiles).toContain("evidence/EXP-004/28-new.png");
      expect(r.transcript).toContain("[tool write completed]");
    }
  });

  it("reports provider errors as failures", async () => {
    const w = worker();
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "task");
    st.messages.push(assistant("msg_e", mid, "partial", { error: { name: "APIError", data: { message: "connection reset" } } }));
    const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
    expect(r.status === "failed" && r.error).toBe("APIError: connection reset");
  });

  it("stops for pending permissions / questions of the session or its children, never auto-approving", async () => {
    const w = worker();
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "task");
    st.status = { ses_mock1: { type: "busy" } };
    st.permissions = [{ id: "per_1", sessionID: "ses_child", permission: "bash", patterns: ["rm *"] }];
    const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
    expect(r).toMatchObject({ status: "blocked", kind: "permission" });
    expect(st.requests.some((q) => q.url.includes("/permission/") && q.method === "POST")).toBe(false);
  });

  it("honours pause (interrupted) and timeouts while the task is busy", async () => {
    const w = worker();
    st.status = { ses_mock1: { type: "busy" } };
    expect((await w.waitForCompletion("ses_mock1", "msg_x", { timeoutMs: 5000, shouldStop: () => true })).status).toBe("interrupted");
    expect((await w.waitForCompletion("ses_mock1", "msg_x", { timeoutMs: 50, shouldStop: () => false })).status).toBe("timeout");
  });

  it("detects a backend that went away", async () => {
    const w = worker();
    await new Promise<void>((r) => server.close(() => r()));
    server = createServer();
    await new Promise<void>((r) => server.listen(0, "127.0.0.1", r));
    const r = await w.waitForCompletion("ses_mock1", "msg_x", { timeoutMs: 20_000, shouldStop: () => false });
    expect(r.status).toBe("backend_unavailable");
    expect((await w.health()).ok).toBe(false);
  });
});
