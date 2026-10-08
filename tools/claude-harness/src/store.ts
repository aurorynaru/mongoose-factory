import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import type { Limits } from "./config.js";

export type RunStatus = "running" | "paused" | "completed" | "stopped";
export type RunState =
  | "READY"
  | "COORDINATOR_PENDING"
  | "DECISION_PENDING"
  | "SPECIALIST_PENDING"
  | "WORKER_PENDING"
  | "DONE";

export interface Counters {
  cycles: number;
  workerTasks: number;
  specialistConsultations: number;
  consecutiveFailures: number;
  totalFailures: number;
  deepseekCalls: number;
  deepseekCostUsd: number;
  deepseekTokens: number;
  sessionsCreated: number;
  reasks: number;
  backendRestarts: number;
  inspectionRecoveries: number;
}

export const ZERO_COUNTERS: Counters = {
  cycles: 0,
  workerTasks: 0,
  specialistConsultations: 0,
  consecutiveFailures: 0,
  totalFailures: 0,
  deepseekCalls: 0,
  deepseekCostUsd: 0,
  deepseekTokens: 0,
  sessionsCreated: 0,
  reasks: 0,
  backendRestarts: 0,
  inspectionRecoveries: 0,
};

/** Operator approvals for a specific pending item (keyed by review code -> item id). */
export type Approvals = Partial<Record<"scope" | "candidate" | "attachment" | "resubmit", number>>;

export interface RunRow {
  id: string;
  experiment_id: string;
  brief_path: string;
  brief_hash: string;
  brief_json: string;
  status: RunStatus;
  state: RunState;
  cycle_id: number;
  current_session_id: string | null;
  pending_op_id: number | null;
  pending_inbound_id: number | null;
  pause_reason: string | null;
  pause_detail: string | null;
  last_action: string | null;
  outcome: string | null;
  counters: Counters;
  limits: Limits;
  approvals: Approvals;
  active_ms: number;
  created_at: string;
  updated_at: string;
}

export type OpKind = "coordinator" | "specialist" | "worker";
export type OpStatus = "planned" | "submitting" | "uncertain" | "accepted" | "completed" | "failed";

export interface OpRow {
  id: number;
  run_id: string;
  kind: OpKind;
  purpose: string;
  cycle_id: number;
  status: OpStatus;
  nonce: string | null;
  message_id: string | null;
  session_id: string | null;
  new_session: number;
  handoff_id: number | null;
  payload_path: string;
  payload_text: string;
  attempts: number;
  counted: number;
  external_ref: string | null;
  result_inbound_id: number | null;
  meta: Record<string, unknown>;
  error: string | null;
  created_at: string;
  updated_at: string;
}

export interface InboundRow {
  id: number;
  run_id: string;
  source: "coordinator" | "specialist" | "worker";
  op_id: number;
  external_id: string;
  content_path: string;
  content: string;
  meta: Record<string, unknown>;
  received_at: string;
}

export interface DecisionRow {
  id: number;
  run_id: string;
  cycle_id: number;
  inbound_id: number;
  action: string | null;
  method: "deterministic" | "deepseek" | "none";
  status: "accepted" | "rejected" | "review";
  envelope: unknown;
  reasons: string[];
  created_at: string;
}

const SCHEMA = `
CREATE TABLE IF NOT EXISTS runs (
  id TEXT PRIMARY KEY,
  experiment_id TEXT NOT NULL,
  brief_path TEXT NOT NULL,
  brief_hash TEXT NOT NULL,
  brief_json TEXT NOT NULL,
  status TEXT NOT NULL,
  state TEXT NOT NULL,
  cycle_id INTEGER NOT NULL DEFAULT 0,
  current_session_id TEXT,
  pending_op_id INTEGER,
  pending_inbound_id INTEGER,
  pause_reason TEXT,
  pause_detail TEXT,
  last_action TEXT,
  outcome TEXT,
  counters_json TEXT NOT NULL,
  limits_json TEXT NOT NULL,
  approvals_json TEXT NOT NULL DEFAULT '{}',
  active_ms INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS transitions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id TEXT NOT NULL,
  from_state TEXT, to_state TEXT, from_status TEXT, to_status TEXT,
  event TEXT NOT NULL,
  detail_json TEXT,
  at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS operations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id TEXT NOT NULL,
  kind TEXT NOT NULL,
  purpose TEXT NOT NULL,
  cycle_id INTEGER NOT NULL,
  status TEXT NOT NULL,
  nonce TEXT UNIQUE,
  message_id TEXT UNIQUE,
  session_id TEXT,
  new_session INTEGER NOT NULL DEFAULT 0,
  handoff_id INTEGER,
  payload_path TEXT NOT NULL,
  payload_text TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  counted INTEGER NOT NULL DEFAULT 0,
  external_ref TEXT,
  result_inbound_id INTEGER,
  meta_json TEXT NOT NULL DEFAULT '{}',
  error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS inbound (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id TEXT NOT NULL,
  source TEXT NOT NULL,
  op_id INTEGER NOT NULL,
  external_id TEXT NOT NULL,
  content_path TEXT NOT NULL,
  content TEXT NOT NULL,
  meta_json TEXT NOT NULL DEFAULT '{}',
  received_at TEXT NOT NULL,
  UNIQUE(source, external_id)
);
CREATE TABLE IF NOT EXISTS decisions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id TEXT NOT NULL,
  cycle_id INTEGER NOT NULL,
  inbound_id INTEGER NOT NULL,
  action TEXT,
  method TEXT NOT NULL,
  status TEXT NOT NULL,
  envelope_json TEXT,
  reasons_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id TEXT NOT NULL,
  opencode_session_id TEXT NOT NULL,
  handoff_id INTEGER,
  reason TEXT,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS handoffs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id TEXT NOT NULL,
  cycle_id INTEGER NOT NULL,
  path TEXT NOT NULL,
  content TEXT NOT NULL,
  data_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS findings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id TEXT NOT NULL,
  cycle_id INTEGER NOT NULL,
  statement TEXT NOT NULL,
  classification TEXT NOT NULL,
  evidence_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS failures (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id TEXT NOT NULL,
  kind TEXT NOT NULL,
  detail TEXT,
  at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS control (
  run_id TEXT PRIMARY KEY,
  pause_requested INTEGER NOT NULL DEFAULT 0,
  stop_requested INTEGER NOT NULL DEFAULT 0,
  reason TEXT,
  requested_at TEXT
);
CREATE TABLE IF NOT EXISTS lease (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  run_id TEXT NOT NULL,
  pid INTEGER NOT NULL,
  heartbeat_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS browser_roles (
  role TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  conversation_id TEXT NOT NULL,
  gpt_id TEXT,
  title TEXT,
  validated_at TEXT NOT NULL
);
`;

const now = () => new Date().toISOString();

export class Store {
  readonly db: Database.Database;

  constructor(file: string) {
    if (file !== ":memory:") mkdirSync(dirname(file), { recursive: true });
    this.db = new Database(file);
    this.db.pragma("journal_mode = WAL");
    this.db.pragma("busy_timeout = 5000");
    this.db.pragma("synchronous = FULL");
    this.db.exec(SCHEMA);
  }

  close(): void {
    this.db.close();
  }

  tx<T>(fn: () => T): T {
    return this.db.transaction(fn)();
  }

  // ---- runs ---------------------------------------------------------------
  createRun(r: { id: string; experimentId: string; briefPath: string; briefHash: string; briefJson: string; limits: Limits }): RunRow {
    const t = now();
    this.db
      .prepare(
        `INSERT INTO runs (id, experiment_id, brief_path, brief_hash, brief_json, status, state, counters_json, limits_json, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, 'running', 'READY', ?, ?, ?, ?)`,
      )
      .run(r.id, r.experimentId, r.briefPath, r.briefHash, r.briefJson, JSON.stringify(ZERO_COUNTERS), JSON.stringify(r.limits), t, t);
    this.db.prepare(`INSERT INTO control (run_id) VALUES (?)`).run(r.id);
    this.addTransition(r.id, null, "READY", null, "running", "run_created", { experiment: r.experimentId });
    return this.getRun(r.id)!;
  }

  getRun(id: string): RunRow | null {
    const row = this.db.prepare(`SELECT * FROM runs WHERE id = ?`).get(id) as Record<string, unknown> | undefined;
    return row ? this.mapRun(row) : null;
  }

  latestRun(): RunRow | null {
    const row = this.db.prepare(`SELECT * FROM runs ORDER BY created_at DESC, rowid DESC LIMIT 1`).get() as Record<string, unknown> | undefined;
    return row ? this.mapRun(row) : null;
  }

  activeRuns(): RunRow[] {
    return (this.db.prepare(`SELECT * FROM runs WHERE status IN ('running','paused') ORDER BY created_at`).all() as Record<string, unknown>[]).map((r) =>
      this.mapRun(r),
    );
  }

  private mapRun(row: Record<string, unknown>): RunRow {
    return {
      ...(row as unknown as RunRow),
      counters: { ...ZERO_COUNTERS, ...JSON.parse(row.counters_json as string) },
      limits: JSON.parse(row.limits_json as string),
      approvals: JSON.parse((row.approvals_json as string) ?? "{}"),
    };
  }

  updateRun(id: string, patch: Partial<Omit<RunRow, "id">>): RunRow {
    const cur = this.getRun(id);
    if (!cur) throw new Error(`run ${id} not found`);
    const next = { ...cur, ...patch };
    this.db
      .prepare(
        `UPDATE runs SET status=?, state=?, cycle_id=?, current_session_id=?, pending_op_id=?, pending_inbound_id=?, pause_reason=?, pause_detail=?,
          last_action=?, outcome=?, counters_json=?, limits_json=?, approvals_json=?, active_ms=?, updated_at=? WHERE id=?`,
      )
      .run(
        next.status,
        next.state,
        next.cycle_id,
        next.current_session_id,
        next.pending_op_id,
        next.pending_inbound_id,
        next.pause_reason,
        next.pause_detail,
        next.last_action,
        next.outcome,
        JSON.stringify(next.counters),
        JSON.stringify(next.limits),
        JSON.stringify(next.approvals),
        Math.round(next.active_ms),
        now(),
        id,
      );
    if (cur.state !== next.state || cur.status !== next.status) {
      this.addTransition(id, cur.state, next.state, cur.status, next.status, "state_change", {
        pause_reason: next.pause_reason,
      });
    }
    return this.getRun(id)!;
  }

  addTransition(runId: string, fromState: string | null, toState: string | null, fromStatus: string | null, toStatus: string | null, event: string, detail: unknown): void {
    this.db
      .prepare(`INSERT INTO transitions (run_id, from_state, to_state, from_status, to_status, event, detail_json, at) VALUES (?,?,?,?,?,?,?,?)`)
      .run(runId, fromState, toState, fromStatus, toStatus, event, JSON.stringify(detail ?? null), now());
  }

  transitions(runId: string, limit = 50): Array<{ id: number; event: string; from_state: string; to_state: string; to_status: string; detail: unknown; at: string }> {
    return (this.db.prepare(`SELECT * FROM transitions WHERE run_id=? ORDER BY id DESC LIMIT ?`).all(runId, limit) as Record<string, unknown>[])
      .map((r) => ({ ...(r as Record<string, unknown>), detail: JSON.parse((r.detail_json as string) ?? "null") }) as never)
      .reverse();
  }

  // ---- operations ---------------------------------------------------------
  createOp(o: {
    runId: string;
    kind: OpKind;
    purpose: string;
    cycleId: number;
    nonce?: string | null;
    messageId?: string | null;
    sessionId?: string | null;
    newSession?: boolean;
    handoffId?: number | null;
    payloadPath: string;
    payloadText: string;
    meta?: Record<string, unknown>;
  }): OpRow {
    const t = now();
    const info = this.db
      .prepare(
        `INSERT INTO operations (run_id, kind, purpose, cycle_id, status, nonce, message_id, session_id, new_session, handoff_id, payload_path, payload_text, meta_json, created_at, updated_at)
         VALUES (?, ?, ?, ?, 'planned', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        o.runId,
        o.kind,
        o.purpose,
        o.cycleId,
        o.nonce ?? null,
        o.messageId ?? null,
        o.sessionId ?? null,
        o.newSession ? 1 : 0,
        o.handoffId ?? null,
        o.payloadPath,
        o.payloadText,
        JSON.stringify(o.meta ?? {}),
        t,
        t,
      );
    return this.getOp(Number(info.lastInsertRowid))!;
  }

  getOp(id: number): OpRow | null {
    const row = this.db.prepare(`SELECT * FROM operations WHERE id=?`).get(id) as Record<string, unknown> | undefined;
    return row ? { ...(row as unknown as OpRow), meta: JSON.parse(row.meta_json as string) } : null;
  }

  opsForRun(runId: string): OpRow[] {
    return (this.db.prepare(`SELECT * FROM operations WHERE run_id=? ORDER BY id`).all(runId) as Record<string, unknown>[]).map((r) => ({
      ...(r as unknown as OpRow),
      meta: JSON.parse(r.meta_json as string),
    }));
  }

  updateOp(id: number, patch: Partial<Pick<OpRow, "status" | "session_id" | "attempts" | "counted" | "external_ref" | "result_inbound_id" | "meta" | "error">>): OpRow {
    const cur = this.getOp(id)!;
    const n = { ...cur, ...patch };
    this.db
      .prepare(`UPDATE operations SET status=?, session_id=?, attempts=?, counted=?, external_ref=?, result_inbound_id=?, meta_json=?, error=?, updated_at=? WHERE id=?`)
      .run(n.status, n.session_id, n.attempts, n.counted, n.external_ref, n.result_inbound_id, JSON.stringify(n.meta), n.error, now(), id);
    return this.getOp(id)!;
  }

  // ---- inbound ------------------------------------------------------------
  findInbound(source: string, externalId: string): InboundRow | null {
    const row = this.db.prepare(`SELECT * FROM inbound WHERE source=? AND external_id=?`).get(source, externalId) as Record<string, unknown> | undefined;
    return row ? { ...(row as unknown as InboundRow), meta: JSON.parse(row.meta_json as string) } : null;
  }

  getInbound(id: number): InboundRow | null {
    const row = this.db.prepare(`SELECT * FROM inbound WHERE id=?`).get(id) as Record<string, unknown> | undefined;
    return row ? { ...(row as unknown as InboundRow), meta: JSON.parse(row.meta_json as string) } : null;
  }

  insertInbound(i: { runId: string; source: InboundRow["source"]; opId: number; externalId: string; contentPath: string; content: string; meta?: Record<string, unknown> }): InboundRow {
    const info = this.db
      .prepare(`INSERT INTO inbound (run_id, source, op_id, external_id, content_path, content, meta_json, received_at) VALUES (?,?,?,?,?,?,?,?)`)
      .run(i.runId, i.source, i.opId, i.externalId, i.contentPath, i.content, JSON.stringify(i.meta ?? {}), now());
    return this.getInbound(Number(info.lastInsertRowid))!;
  }

  inboundForRun(runId: string, source?: string): InboundRow[] {
    const rows = (source
      ? this.db.prepare(`SELECT * FROM inbound WHERE run_id=? AND source=? ORDER BY id`).all(runId, source)
      : this.db.prepare(`SELECT * FROM inbound WHERE run_id=? ORDER BY id`).all(runId)) as Record<string, unknown>[];
    return rows.map((r) => ({ ...(r as unknown as InboundRow), meta: JSON.parse(r.meta_json as string) }));
  }

  // ---- decisions / findings / failures / sessions / handoffs ----------------
  addDecision(d: Omit<DecisionRow, "id" | "created_at">): DecisionRow {
    const info = this.db
      .prepare(`INSERT INTO decisions (run_id, cycle_id, inbound_id, action, method, status, envelope_json, reasons_json, created_at) VALUES (?,?,?,?,?,?,?,?,?)`)
      .run(d.run_id, d.cycle_id, d.inbound_id, d.action, d.method, d.status, JSON.stringify(d.envelope ?? null), JSON.stringify(d.reasons), now());
    return this.decisions(d.run_id).find((x) => x.id === Number(info.lastInsertRowid))!;
  }

  decisions(runId: string): DecisionRow[] {
    return (this.db.prepare(`SELECT * FROM decisions WHERE run_id=? ORDER BY id`).all(runId) as Record<string, unknown>[]).map((r) => ({
      ...(r as unknown as DecisionRow),
      envelope: JSON.parse((r.envelope_json as string) ?? "null"),
      reasons: JSON.parse(r.reasons_json as string),
    }));
  }

  addFinding(runId: string, cycleId: number, statement: string, classification: string, evidence: string[]): void {
    this.db
      .prepare(`INSERT INTO findings (run_id, cycle_id, statement, classification, evidence_json, created_at) VALUES (?,?,?,?,?,?)`)
      .run(runId, cycleId, statement, classification, JSON.stringify(evidence), now());
  }

  findings(runId: string): Array<{ statement: string; classification: string; evidence: string[]; cycle_id: number }> {
    return (this.db.prepare(`SELECT * FROM findings WHERE run_id=? ORDER BY id`).all(runId) as Record<string, unknown>[]).map((r) => ({
      statement: r.statement as string,
      classification: r.classification as string,
      cycle_id: r.cycle_id as number,
      evidence: JSON.parse(r.evidence_json as string),
    }));
  }

  addFailure(runId: string, kind: string, detail: string): void {
    this.db.prepare(`INSERT INTO failures (run_id, kind, detail, at) VALUES (?,?,?,?)`).run(runId, kind, detail, now());
  }

  failures(runId: string): Array<{ kind: string; detail: string; at: string }> {
    return this.db.prepare(`SELECT kind, detail, at FROM failures WHERE run_id=? ORDER BY id`).all(runId) as never;
  }

  addSession(runId: string, sessionId: string, handoffId: number | null, reason: string): void {
    this.db.prepare(`INSERT INTO sessions (run_id, opencode_session_id, handoff_id, reason, created_at) VALUES (?,?,?,?,?)`).run(runId, sessionId, handoffId, reason, now());
  }

  sessions(runId: string): Array<{ opencode_session_id: string; handoff_id: number | null; reason: string; created_at: string }> {
    return this.db.prepare(`SELECT opencode_session_id, handoff_id, reason, created_at FROM sessions WHERE run_id=? ORDER BY id`).all(runId) as never;
  }

  addHandoff(runId: string, cycleId: number, path: string, content: string, data: unknown): number {
    const info = this.db
      .prepare(`INSERT INTO handoffs (run_id, cycle_id, path, content, data_json, created_at) VALUES (?,?,?,?,?,?)`)
      .run(runId, cycleId, path, content, JSON.stringify(data), now());
    return Number(info.lastInsertRowid);
  }

  getHandoff(id: number): { id: number; path: string; content: string } | null {
    return (this.db.prepare(`SELECT id, path, content FROM handoffs WHERE id=?`).get(id) as never) ?? null;
  }

  // ---- control / lease ------------------------------------------------------
  getControl(runId: string): { pause_requested: number; stop_requested: number; reason: string | null } {
    return (
      (this.db.prepare(`SELECT pause_requested, stop_requested, reason FROM control WHERE run_id=?`).get(runId) as never) ?? {
        pause_requested: 0,
        stop_requested: 0,
        reason: null,
      }
    );
  }

  requestControl(runId: string, what: "pause" | "stop", reason: string): void {
    const col = what === "pause" ? "pause_requested" : "stop_requested";
    this.db
      .prepare(`INSERT INTO control (run_id, ${col}, reason, requested_at) VALUES (?, 1, ?, ?) ON CONFLICT(run_id) DO UPDATE SET ${col}=1, reason=excluded.reason, requested_at=excluded.requested_at`)
      .run(runId, reason, now());
  }

  clearControl(runId: string): void {
    this.db.prepare(`UPDATE control SET pause_requested=0, stop_requested=0, reason=NULL WHERE run_id=?`).run(runId);
  }

  getLease(): { run_id: string; pid: number; heartbeat_at: number } | null {
    return (this.db.prepare(`SELECT run_id, pid, heartbeat_at FROM lease WHERE id=1`).get() as never) ?? null;
  }

  /** Single-controller guarantee: only one live loop may drive runs at a time. */
  acquireLease(runId: string, pid: number, isAlive: (pid: number) => boolean, staleMs = 90_000): { ok: true } | { ok: false; holder: { run_id: string; pid: number } } {
    return this.tx(() => {
      const cur = this.getLease();
      if (cur && cur.pid !== pid && Date.now() - cur.heartbeat_at < staleMs && isAlive(cur.pid)) {
        return { ok: false as const, holder: { run_id: cur.run_id, pid: cur.pid } };
      }
      this.db.prepare(`INSERT INTO lease (id, run_id, pid, heartbeat_at) VALUES (1, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET run_id=excluded.run_id, pid=excluded.pid, heartbeat_at=excluded.heartbeat_at`).run(runId, pid, Date.now());
      return { ok: true as const };
    });
  }

  heartbeat(pid: number): void {
    this.db.prepare(`UPDATE lease SET heartbeat_at=? WHERE id=1 AND pid=?`).run(Date.now(), pid);
  }

  releaseLease(pid: number): void {
    this.db.prepare(`DELETE FROM lease WHERE id=1 AND pid=?`).run(pid);
  }

  // ---- settings (small operator flags) -------------------------------------------
  getSetting(key: string): string | null {
    return ((this.db.prepare(`SELECT value FROM settings WHERE key=?`).get(key) as { value: string } | undefined)?.value) ?? null;
  }

  setSetting(key: string, value: string | null): void {
    if (value === null) this.db.prepare(`DELETE FROM settings WHERE key=?`).run(key);
    else this.db.prepare(`INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value`).run(key, value);
  }

  // ---- browser roles --------------------------------------------------------
  setRole(role: "coordinator" | "specialist", r: { url: string; conversationId: string; gptId: string | null; title: string | null }): void {
    this.db
      .prepare(
        `INSERT INTO browser_roles (role, url, conversation_id, gpt_id, title, validated_at) VALUES (?,?,?,?,?,?)
         ON CONFLICT(role) DO UPDATE SET url=excluded.url, conversation_id=excluded.conversation_id, gpt_id=excluded.gpt_id, title=excluded.title, validated_at=excluded.validated_at`,
      )
      .run(role, r.url, r.conversationId, r.gptId, r.title, now());
  }

  getRole(role: "coordinator" | "specialist"): { role: string; url: string; conversation_id: string; gpt_id: string | null; title: string | null; validated_at: string } | null {
    return (this.db.prepare(`SELECT * FROM browser_roles WHERE role=?`).get(role) as never) ?? null;
  }
}

export function pidAlive(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return (e as NodeJS.ErrnoException).code === "EPERM";
  }
}
