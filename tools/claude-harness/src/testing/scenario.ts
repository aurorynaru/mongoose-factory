import { cpSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { loadBrief } from "../brief.js";
import { ConfigSchema, HARNESS_DIR, type HarnessConfig } from "../config.js";
import { Controller } from "../controller/machine.js";
import { Store, type RunRow } from "../store.js";
import { MemoryLogger } from "../util/log.js";
import { FakeChat, FakeInterpreter, FakeWorker, type ReplySpec, type WorkerSpec } from "./fakes.js";

export interface ScenarioExpect {
  status: RunRow["status"];
  outcome?: string;
  pause_reason?: string;
  workerSubmissions?: number;
  coordinatorSubmissions?: number;
  specialistSubmissions?: number;
  sessions?: number;
}

export interface Scenario {
  name: string;
  description: string;
  limits?: Partial<HarnessConfig["limits"]>;
  coordinator: ReplySpec[];
  specialist?: ReplySpec[];
  worker?: WorkerSpec[];
  expect: ScenarioExpect;
}

export interface Harnessed {
  dir: string;
  factoryRoot: string;
  store: Store;
  chat: FakeChat;
  worker: FakeWorker;
  config: HarnessConfig;
  controller: Controller;
  log: MemoryLogger;
  runsDir: string;
}

const FIXTURES = join(HARNESS_DIR, "fixtures");

/** Resolve "$name" references to the scenario file's shared blocks. */
function deref<T>(v: T, shared: Record<string, unknown>): T {
  if (typeof v === "string" && v.startsWith("$") && v.slice(1) in shared) return structuredClone(shared[v.slice(1)]) as T;
  if (Array.isArray(v)) return v.map((x) => deref(x, shared)) as T;
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deref(x, shared)])) as T;
  return v;
}

export function loadScenarios(): Scenario[] {
  const raw = JSON.parse(readFileSync(join(FIXTURES, "scenarios", "scenarios.json"), "utf8"));
  return (raw.scenarios as Scenario[]).map((s) => deref(s, raw.shared));
}

/** Build an isolated harness (temp factory copy + temp SQLite + fakes). No live systems are touched. */
export function harness(opts: {
  coordinator: ReplySpec[];
  specialist?: ReplySpec[];
  worker?: WorkerSpec[];
  limits?: Partial<HarnessConfig["limits"]>;
  config?: Record<string, unknown>;
  interpreter?: FakeInterpreter | null;
  dir?: string;
  store?: Store;
  pid?: number;
  isAlive?: (pid: number) => boolean;
  chat?: FakeChat;
  workerFake?: FakeWorker;
}): Harnessed {
  const dir = opts.dir ?? mkdtempSync(join(tmpdir(), "harness-test-"));
  const factoryRoot = join(dir, "factory");
  if (!opts.dir) cpSync(join(FIXTURES, "factory"), factoryRoot, { recursive: true });
  // Tests default to continuing the registered chat; new-chat behaviour is tested explicitly.
  const config = ConfigSchema.parse({ factoryRoot, dataDir: join(dir, "data"), limits: opts.limits ?? {}, chats: { newCoordinatorPerRun: false }, ...(opts.config ?? {}) });
  const store = opts.store ?? new Store(join(dir, "harness.sqlite"));
  const chat = opts.chat ?? new FakeChat({ coordinator: opts.coordinator, specialist: opts.specialist ?? [] });
  const worker = opts.workerFake ?? new FakeWorker(opts.worker ?? [], factoryRoot);
  const log = new MemoryLogger();
  const runsDir = join(dir, "data", "runs");
  const controller = new Controller({
    store,
    config,
    factoryRoot,
    runsDir,
    protocolDir: join(HARNESS_DIR, "protocol"),
    contextFile: join(dir, "context", "coordinator-context.md"),
    chat,
    worker,
    interpreter: opts.interpreter ?? null,
    log,
    pid: opts.pid,
    isAlive: opts.isAlive,
  });
  return { dir, factoryRoot, store, chat, worker, config, controller, log, runsDir };
}

export function fixtureBrief() {
  return loadBrief(join(FIXTURES, "briefs", "EXP-900.brief.json"), join(FIXTURES, "briefs"));
}

export interface ScenarioResult {
  scenario: Scenario;
  run: RunRow;
  h: Harnessed;
  checks: Array<{ name: string; ok: boolean; detail: string }>;
}

export async function runScenario(s: Scenario): Promise<ScenarioResult> {
  const h = harness({ coordinator: s.coordinator, specialist: s.specialist, worker: s.worker, limits: s.limits });
  const created = h.controller.createRun(fixtureBrief());
  const run = await h.controller.run(created.id);
  const e = s.expect;
  const count = (role: string) => h.chat.submissions.filter((x) => x.role === role).length;
  const checks: ScenarioResult["checks"] = [];
  const check = (name: string, expected: unknown, actual: unknown) => {
    if (expected === undefined) return;
    checks.push({ name, ok: expected === actual, detail: `expected ${String(expected)}, got ${String(actual)}` });
  };
  check("status", e.status, run.status);
  check("outcome", e.outcome, run.outcome);
  check("pause_reason", e.pause_reason, run.pause_reason);
  check("workerSubmissions", e.workerSubmissions, h.worker.submissions.length);
  check("coordinatorSubmissions", e.coordinatorSubmissions, count("coordinator"));
  check("specialistSubmissions", e.specialistSubmissions, count("specialist"));
  check("sessions", e.sessions, h.worker.sessions.length);
  return { scenario: s, run, h, checks };
}
