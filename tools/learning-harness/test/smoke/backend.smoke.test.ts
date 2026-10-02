import { spawn, spawnSync, type ChildProcess } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import { OpenCodeClient } from "../../src/adapters/opencode/client.js";
import { OpenCodeWorker } from "../../src/adapters/opencode/worker.js";
import { BackendManager } from "../../src/backend/process.js";
import { ConfigSchema, resolvePaths } from "../../src/config.js";
import { MemoryLogger } from "../../src/util/log.js";

/**
 * LOCAL SMOKE TEST — starts real `opencode serve` processes through the fixed PowerShell scripts.
 * Uses a scratch project directory (NOT the Mongoose factory), so no project MCP servers or
 * Mongoose browser are started and no prompt reaches a model (noReply only).
 * Opt-in: set HARNESS_SMOKE=1.
 */
const enabled = process.env.HARNESS_SMOKE === "1";
const PORT = 4197;
const UNOWNED_PORT = 4196;
const dir = mkdtempSync(join(tmpdir(), "harness-smoke-"));
const cfg = (port: number, data = "data") => ConfigSchema.parse({ factoryRoot: dir, dataDir: join(dir, data), opencode: { port, baseUrl: `http://127.0.0.1:${port}` } });
const mgr = (port: number, data = "data") => new BackendManager(cfg(port, data), resolvePaths(cfg(port, data)));
let unowned: ChildProcess | null = null;

const alive = (pid: number) => {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
};

afterAll(async () => {
  if (!enabled) return;
  await mgr(PORT).stop();
  // the "unowned" server was started by this test through a shell; end its whole tree
  const pid = (await mgr(UNOWNED_PORT, "other").health()).portOwnerPid as number | null;
  if (pid) spawnSync("taskkill", ["/PID", String(pid), "/T", "/F"], { stdio: "ignore" });
  unowned?.kill();
}, 120_000);

describe.runIf(enabled)("backend process management (real opencode serve)", { timeout: 180_000 }, () => {
  it("starts, reports health + ownership, and is idempotent", async () => {
    const m = mgr(PORT);
    const s = await m.start();
    expect(s).toMatchObject({ ok: true, action: "started", port: PORT });
    expect(String(s.version)).toMatch(/^\d+\.\d+\.\d+$/);
    const h = await m.health();
    expect(h).toMatchObject({ ok: true, healthy: true, owned: true, pid: s.pid, portOwnerPid: s.pid });
    expect(await m.start()).toMatchObject({ ok: true, action: "already_running", pid: s.pid });
    const state = JSON.parse(readFileSync(resolvePaths(cfg(PORT)).backendStateFile, "utf8"));
    expect(state.pid).toBe(s.pid);
    expect(state.exe).toMatch(/opencode\.exe$/i);
  });

  it("serves the session endpoints the worker adapter relies on (reconciliation by messageID)", async () => {
    const w = new OpenCodeWorker({ client: new OpenCodeClient({ baseUrl: `http://127.0.0.1:${PORT}`, directory: dir }), agent: null, model: null, pollIntervalMs: 200, noResponseGraceMs: 1000, log: new MemoryLogger() });
    expect((await w.health()).ok).toBe(true);
    const sid = await w.createSession("harness smoke");
    const mid = w.newMessageId();
    expect(await w.findMessage(sid, mid)).toBe("absent");
    // noReply stores the user message without invoking any model
    const res = await fetch(`http://127.0.0.1:${PORT}/session/${sid}/prompt_async?directory=${encodeURIComponent(dir)}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messageID: mid, noReply: true, parts: [{ type: "text", text: "harness smoke (noReply)" }] }),
    });
    expect(res.status).toBe(204);
    await expect.poll(() => w.findMessage(sid, mid), { timeout: 10_000 }).toBe("present");
  });

  it("restarts only the owned process", async () => {
    const m = mgr(PORT);
    const before = (await m.health()).pid as number;
    const r = await m.restart();
    expect(r).toMatchObject({ ok: true, action: "restarted" });
    expect(r.pid).not.toBe(before);
    expect(alive(before)).toBe(false);
    expect((await m.health()).healthy).toBe(true);
  });

  it("never stops or reuses a port held by an OpenCode it does not own", async () => {
    unowned = spawn("opencode", ["serve", "--port", String(UNOWNED_PORT), "--hostname", "127.0.0.1", "--pure"], { cwd: dir, shell: true, stdio: "ignore" });
    await expect.poll(async () => (await fetch(`http://127.0.0.1:${UNOWNED_PORT}/global/health`).then((x) => x.ok).catch(() => false)), { timeout: 60_000, interval: 500 }).toBe(true);
    // same harness state, different port: refuses to start a second owned backend
    const same = await mgr(UNOWNED_PORT).start();
    expect(same.ok).toBe(false);
    expect(["owned_backend_running_on_other_port", "port_in_use_by_unowned_process"]).toContain(same.error);
    expect(await mgr(UNOWNED_PORT).health()).toMatchObject({ healthy: true, owned: false });
    // an independent harness state (e.g. another tool) sees the port as foreign
    const m2 = mgr(UNOWNED_PORT, "other");
    const h = await m2.health();
    expect(h).toMatchObject({ healthy: true, owned: false });
    const portPid = h.portOwnerPid as number;
    expect(await m2.start()).toMatchObject({ ok: false, error: "port_in_use_by_unowned_process" });
    // forge a state file naming the unowned pid: ownership check (start time + path) must refuse it
    const st = resolvePaths(cfg(UNOWNED_PORT, "other")).backendStateFile;
    mkdirSync(dirname(st), { recursive: true });
    writeFileSync(st, JSON.stringify({ pid: portPid, port: UNOWNED_PORT, exe: "C:\\not\\opencode.exe", startTicks: "1" }));
    expect(await m2.stop()).toMatchObject({ ok: true, stopped: false, reason: "not_running_or_not_owned" });
    expect(alive(portPid)).toBe(true);
    expect((await m2.health()).healthy).toBe(true);
  });

  it("stops the owned backend", async () => {
    const m = mgr(PORT);
    const pid = (await m.health()).pid as number;
    expect(await m.stop()).toMatchObject({ ok: true, stopped: true });
    expect(alive(pid)).toBe(false);
    expect((await m.health()).healthy).toBe(false);
  });
});
