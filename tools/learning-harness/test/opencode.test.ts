import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import type { AddressInfo } from "node:net";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { OpenCodeClient } from "../src/adapters/opencode/client.js";
import { OpenCodeWorker } from "../src/adapters/opencode/worker.js";
import { MemoryLogger } from "../src/util/log.js";
import { inspectionLoop, repeatedBrowserReads, repeatedShellCalls } from "../src/adapters/opencode/inspection-loop.js";
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

const worker = (password?: string, model: { providerID: string; modelID: string } | null = null, maxSnapshotRefFailures?: number, maxRepeatedBrowserReads?: number, maxRepeatedShellCalls?: number) =>
  new OpenCodeWorker({
    client: new OpenCodeClient({ baseUrl: base, directory: "C:\\AI\\mongoose-factory", password, timeoutMs: 2000 }),
    agent: null,
    model,
    pollIntervalMs: 10,
    noResponseGraceMs: 300,
    maxSnapshotRefFailures,
    maxRepeatedBrowserReads,
    maxRepeatedShellCalls,
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

function evaluateReads(parentID: string, count = 6, output = '### Result\n"none"'): OcMessage[] {
  return Array.from({ length: count }, (_, n) => ({
    info: { id: `msg_eval${n}`, sessionID: "ses_mock1", role: "assistant" as const, parentID, time: { created: 2, completed: 3 } },
    parts: [{ id: `prt_eval${n}`, type: "tool", tool: "playwright_browser_evaluate", state: {
      status: "completed", input: { function: "() => document.querySelector('iframe')?.contentDocument?.title ?? 'none'" }, output,
    } }],
  }));
}

function shellCalls(parentID: string, count = 6): OcMessage[] {
  return Array.from({ length: count }, (_, n) => ({
    info: { id: `msg_shell${n}`, sessionID: "ses_mock1", role: "assistant" as const, parentID, time: { created: 2, completed: 3 }, finish: "tool-calls" },
    parts: [{ id: `prt_shell${n}`, type: "tool", tool: "bash", state: {
      status: "completed", input: { command: "pwsh -NoProfile -Command 'Add-Module missing.dll'; Write-Output done" }, output: "done\r\n",
    } }],
  }));
}

function compaction(): OcMessage[] {
  return [
    { info: { id: "msg_compact", sessionID: "ses_mock1", role: "user", time: { created: 4 } }, parts: [{ id: "p_compact", type: "compaction", auto: true }] },
    { info: { id: "msg_summary", sessionID: "ses_mock1", role: "assistant", parentID: "msg_compact", time: { created: 5, completed: 6 }, summary: true, finish: "stop" }, parts: [{ id: "p_summary", type: "text", text: "SUMMARY IS NOT A VERIFIED WORKER REPORT" }] },
    { info: { id: "msg_continue", sessionID: "ses_mock1", role: "user", time: { created: 7 } }, parts: [{ id: "p_continue", type: "text", synthetic: true, text: "Continue if you have next steps" }] },
  ];
}

describe("repeated shell-call guard", () => {
  it("detects identical completed commands, including empty output; supports disabling", () => {
    expect(repeatedShellCalls(shellCalls("msg_task"), 6)).toContain("Do not replay the command");
    expect(repeatedShellCalls(shellCalls("msg_task", 5), 6)).toBeNull();
    expect(repeatedShellCalls(shellCalls("msg_task"), 0)).toBeNull();
    const empty = shellCalls("msg_task");
    for (const m of empty) m.parts[0].state!.output = "";
    expect(repeatedShellCalls(empty, 6)).toContain("6 consecutive times");
    expect(ConfigSchema.parse({}).opencode.maxRepeatedShellCalls).toBe(6);
    expect(ConfigSchema.safeParse({ opencode: { maxRepeatedShellCalls: 25 } }).success).toBe(false);
  });

  it("resets on changed commands/results or other tools and defers in-flight calls", () => {
    const changed = shellCalls("msg_task");
    changed.at(-1)!.parts[0].state!.input = { command: "different command" };
    expect(repeatedShellCalls(changed, 6)).toBeNull();
    changed.at(-1)!.parts[0].state!.input = shellCalls("msg_task")[0].parts[0].state!.input;
    changed.at(-1)!.parts[0].state!.output = "different result";
    expect(repeatedShellCalls(changed, 6)).toBeNull();
    expect(repeatedShellCalls([...shellCalls("msg_task"), snapshot("msg_fresh", "msg_task"), ...shellCalls("msg_task", 1)], 6)).toBeNull();
    delete changed.at(-1)!.parts[0].state!.output;
    expect(repeatedShellCalls(changed, 6)).toBeNull();
    for (const status of ["running", "pending"]) {
      const active = shellCalls("msg_task", 1)[0];
      active.parts[0].state!.status = status;
      expect(repeatedShellCalls([...shellCalls("msg_task"), active], 6)).toBeNull();
    }
  });
});

describe("repeated browser-result guard", () => {
  it("detects successful repeated evaluate calls returning none or any other identical result", () => {
    expect(repeatedBrowserReads(evaluateReads("msg_task"), 6)).toContain("6 consecutive times");
    expect(repeatedBrowserReads(evaluateReads("msg_task", 6, '### Result\n"same cell"'), 6)).toContain("same result");
    expect(repeatedBrowserReads(evaluateReads("msg_task", 5), 6)).toBeNull();
    expect(repeatedBrowserReads(evaluateReads("msg_task"), 0)).toBeNull();
  });

  it("detects repeated snapshots with identical arguments and observed output", () => {
    const reads = evaluateReads("msg_task");
    for (const m of reads) { m.parts[0].tool = "playwright_browser_snapshot"; m.parts[0].state!.input = { depth: 4 }; }
    expect(repeatedBrowserReads(reads, 6)).toContain("playwright_browser_snapshot");
  });

  it("resets on a changed result, changed arguments, or intervening tool", () => {
    const reads = evaluateReads("msg_task");
    reads.at(-1)!.parts[0].state!.output = '### Result\n"new observation"';
    expect(repeatedBrowserReads(reads, 6)).toBeNull();
    reads.at(-1)!.parts[0].state!.output = '### Result\n"none"';
    reads.at(-1)!.parts[0].state!.input = { function: "() => document.title" };
    expect(repeatedBrowserReads(reads, 6)).toBeNull();
    expect(repeatedBrowserReads([...evaluateReads("msg_task"), assistant("msg_wait", "msg_task", "wait"), ...evaluateReads("msg_task", 1)], 6)).toBeNull();
  });

  it("ignores unrelated tools, missing output, and an in-flight tool", () => {
    const reads = evaluateReads("msg_task");
    for (const m of reads) m.parts[0].tool = "playwright_browser_click";
    expect(repeatedBrowserReads(reads, 6)).toBeNull();
    for (const m of reads) { m.parts[0].tool = "playwright_browser_evaluate"; delete (m.parts[0].state as { output?: unknown }).output; }
    expect(repeatedBrowserReads(reads, 6)).toBeNull();
    const active = snapshot("msg_active", "msg_task");
    active.parts[0].state!.status = "running";
    expect(repeatedBrowserReads([...evaluateReads("msg_task"), active], 6)).toBeNull();
  });

  it("defaults to six reads with one automatic recovery, and validates thresholds", () => {
    expect(ConfigSchema.parse({}).opencode).toMatchObject({ maxRepeatedBrowserReads: 6, autoRecoverInspectionLoops: true });
    expect(ConfigSchema.safeParse({ opencode: { maxRepeatedBrowserReads: 25 } }).success).toBe(false);
  });
});

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
  it("tracks long compacted tasks, interrupts their shell loop, and preserves both sides of compaction", async () => {
    const w = worker(undefined, null, 0, 0); // Shell guard is independent.
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "Place exactly one Button; do not Save or replay placement");
    st.messages.push(assistant("msg_prefix", mid, "Button placed; baseline unresolved", { finish: "tool-calls" }), ...compaction(), ...shellCalls("msg_continue", 70));
    st.status = { ses_mock1: { type: "busy" }, ses_other: { type: "busy" } };
    const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
    expect(r).toMatchObject({ status: "stalled", aborted: true });
    if (r.status === "stalled") {
      expect(r.detail).toContain("bash repeated identical arguments");
      expect(r.text).toContain("Button placed; baseline unresolved");
      expect(r.text).not.toContain("SUMMARY IS NOT");
      expect(r.transcript).toContain("[automatic compaction]");
      expect(r.transcript).toContain("[tool bash completed]");
      expect(r.assistantMessageIds).toContain("msg_summary");
      expect(r.assistantMessageIds).toContain("msg_shell69");
    }
    expect(st.requests.filter((q) => q.url.includes("prompt_async"))).toHaveLength(1);
    expect(st.requests.filter((q) => q.url.includes("/abort"))).toHaveLength(1);
    expect(st.status.ses_other).toEqual({ type: "busy" });
  });

  it("returns a continuation abort as failure instead of declaring the pre-compaction prefix completed", async () => {
    const w = worker();
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "bounded task");
    st.messages.push(assistant("msg_prefix", mid, "Button already placed", { finish: "tool-calls" }), ...compaction(), assistant("msg_aborted", "msg_continue", "Partial baseline", { error: { name: "MessageAbortedError" } }));
    const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
    expect(r.status).toBe("failed");
    if (r.status === "failed") {
      expect(r.error).toContain("MessageAbortedError");
      expect(r.text).toContain("Button already placed");
      expect(r.text).toContain("Partial baseline");
      expect(r.text).not.toContain("SUMMARY IS NOT");
      expect(r.transcript).toContain("msg_continue");
    }
    expect(st.requests.filter((q) => q.method === "POST")).toHaveLength(1);
  });

  it("includes continuation reports, touched files, and usage on successful completion", async () => {
    const w = worker();
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "bounded task");
    st.messages.push(assistant("msg_prefix", mid, "Partial observations", { finish: "tool-calls" }), ...compaction(), assistant("msg_final", "msg_continue", "HARNESS REPORT final", { finish: "stop" }));
    st.messages.at(-1)!.parts[1].state = { status: "completed", input: { filePath: "evidence/EXP-020/final.png" } };
    const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
    expect(r).toMatchObject({ status: "completed", cost: 0.02, tokens: 30, touchedFiles: ["evidence/EXP-004/28-new.png", "evidence/EXP-020/final.png"] });
    if (r.status === "completed") {
      expect(r.text).toContain("HARNESS REPORT final");
      expect(r.text).not.toContain("SUMMARY IS NOT");
    }
  });

  it("does not treat a summary, a pending continuation, or pre-compaction tool calls as completion", async () => {
    for (const cutoff of [1, 2, 3]) {
      st.messages = [];
      const w = worker();
      const mid = w.newMessageId();
      await w.submit("ses_mock1", mid, "bounded task");
      st.messages.push(assistant("msg_prefix", mid, "Partial observations", { finish: "tool-calls" }), ...compaction().slice(0, cutoff));
      const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
      expect(r.status).toBe("failed");
      if (r.status === "failed") expect(r.text).toContain("Partial observations");
    }
  });

  it("never interrupts a later manual task when the old task loop remains in history", async () => {
    const w = worker();
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "old task");
    st.messages.push(...shellCalls(mid), { info: { id: "msg_manual", sessionID: "ses_mock1", role: "user", time: { created: 10 } }, parts: [{ type: "text", text: "manual task" }] }, ...shellCalls("msg_manual"));
    st.status = { ses_mock1: { type: "busy" } };
    expect((await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 50, shouldStop: () => false })).status).toBe("timeout");
    expect(st.requests.some((q) => q.url.includes("/abort"))).toBe(false);
  });

  it("interrupts repeated successful evaluate results without replaying the script", async () => {
    const w = worker(undefined, null, 0); // The new guard works independently of stale-reference checks.
    const mid = w.newMessageId();
    await w.submit("ses_mock1", mid, "Rendered UI only; no JavaScript");
    st.messages.push(...evaluateReads(mid));
    st.status = { ses_mock1: { type: "busy" } };
    const r = await w.waitForCompletion("ses_mock1", mid, { timeoutMs: 5000, shouldStop: () => false });
    expect(r).toMatchObject({ status: "stalled", aborted: true });
    if (r.status === "stalled") {
      expect(r.detail).toContain("same result 6 consecutive times");
      expect(r.detail).toContain("Do not repeat those arguments or scripts");
      expect(r.transcript).toContain("Rendered UI only; no JavaScript");
    }
    expect(st.requests.filter((q) => q.url.includes("prompt_async"))).toHaveLength(1);
    expect(st.requests.filter((q) => q.url.includes("/abort"))).toHaveLength(1);
  });
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
    const w = worker(undefined, null, 0, 0, 0);
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
