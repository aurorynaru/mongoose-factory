import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { ChatPort, ChatRole, InterpreterPort, InterpreterResult, Presence, ReadyStatus, ReplyOutcome, SubmissionCheck, SubmitOutcome, WorkerPort, WorkerResult } from "../adapters/types.js";
import { PROTOCOL_ID } from "../protocol/envelope.js";
import { parseHeader } from "../protocol/prompts.js";

/** A scripted chat reply. `envelope` is rendered as a fenced json block after `prose`. */
export type ReplySpec =
  | string
  | {
      prose?: string;
      envelope?: Record<string, unknown>;
      markdown?: string;
      /** How submission behaves for the message this reply answers. */
      submit?: "accept" | "uncertain_accepted" | "uncertain_lost" | "not_submitted_once" | "crash_after_accept";
      /** Force the assistant message id (to simulate duplicate delivery). */
      messageId?: string;
      replyBlocked?: "rate_limited" | "login_required" | "visible_error";
    };

function fill(value: unknown, h: Record<string, string>): unknown {
  if (typeof value === "string") {
    if (value === "{{cycle_id}}") return Number(h.cycle_id);
    return value.replace(/\{\{(\w+)\}\}/g, (_, k: string) => h[k] ?? `{{${k}}}`);
  }
  if (Array.isArray(value)) return value.map((v) => fill(v, h));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fill(v, h)]));
  return value;
}

export function renderReply(spec: ReplySpec, sentText: string): string {
  const h = parseHeader(sentText) ?? {};
  if (typeof spec === "string") return fill(spec, h) as string;
  if (spec.markdown) return fill(spec.markdown, h) as string;
  const parts: string[] = [];
  if (spec.prose) parts.push(fill(spec.prose, h) as string);
  if (spec.envelope) {
    const env = fill({ protocol: PROTOCOL_ID, run_id: "{{run_id}}", experiment_id: "{{experiment_id}}", cycle_id: "{{cycle_id}}", ...spec.envelope }, h);
    parts.push("```json\n" + JSON.stringify(env, null, 2) + "\n```");
  }
  return parts.join("\n\n");
}

export class SimulatedCrash extends Error {}

interface Entry {
  nonce: string;
  text: string;
  reply: string;
  id: string;
  blocked?: "rate_limited" | "login_required" | "visible_error";
}

export class FakeChat implements ChatPort {
  readonly submissions: Array<{ role: ChatRole; text: string; nonce: string }> = [];
  readonly conversations: Record<ChatRole, Entry[]> = { coordinator: [], specialist: [] };
  readonly notReady: Partial<Record<ChatRole, ReadyStatus>> = {};
  private idx: Record<ChatRole, number> = { coordinator: 0, specialist: 0 };
  private seq = 0;
  private notSubmittedOnce = new Set<string>();

  constructor(private readonly script: Record<ChatRole, ReplySpec[]>) {}

  private spec(role: ChatRole): ReplySpec | undefined {
    return this.script[role][this.idx[role]];
  }

  async checkReady(role: ChatRole): Promise<ReadyStatus> {
    return this.notReady[role] ?? { ok: true };
  }

  /** New conversations started via submitNew (role, home URL, resulting URL). */
  readonly newChats: Array<{ role: ChatRole; homeUrl: string; url: string; nonce: string }> = [];

  async submitNew(role: ChatRole, homeUrl: string, text: string, nonce: string): Promise<SubmitOutcome & { conversationUrl?: string }> {
    const nr = this.notReady[role];
    if (nr && !nr.ok) return { status: "blocked", problem: nr.problem ?? "visible_error", detail: nr.detail ?? "not ready" };
    const out = await this.submit(role, text, nonce);
    if (out.status !== "accepted") return out;
    const url = `https://chatgpt.com${role === "specialist" ? "/g/g-fakegpt-mongoose" : ""}/c/fake-new-${role}-${this.newChats.length + 1}`;
    this.newChats.push({ role, homeUrl, url, nonce });
    return { ...out, conversationUrl: url };
  }

  async findSubmission(role: ChatRole, nonce: string): Promise<SubmissionCheck> {
    const hit = this.conversations[role].find((e) => e.nonce === nonce);
    return { reliable: true, found: !!hit, userMessageId: hit ? `u-${hit.id}` : undefined };
  }

  private accept(role: ChatRole, text: string, nonce: string, spec: ReplySpec | undefined): Entry {
    const reply = spec === undefined ? "(script exhausted: no scripted reply)" : renderReply(spec, text);
    const id = typeof spec === "object" && spec.messageId ? spec.messageId : `${role}-a${++this.seq}`;
    const e: Entry = { nonce, text, reply, id, blocked: typeof spec === "object" ? spec.replyBlocked : undefined };
    this.conversations[role].push(e);
    this.idx[role]++;
    return e;
  }

  async submit(role: ChatRole, text: string, nonce: string): Promise<SubmitOutcome> {
    const spec = this.spec(role);
    const mode = typeof spec === "object" ? spec.submit ?? "accept" : "accept";
    this.submissions.push({ role, text, nonce });
    switch (mode) {
      case "uncertain_accepted":
        this.accept(role, text, nonce, spec);
        return { status: "uncertain", detail: "simulated timeout after send (message was accepted)" };
      case "uncertain_lost":
        // lost only the first time this nonce is sent (a later, operator-approved resend goes through)
        if (!this.notSubmittedOnce.has(nonce)) {
          this.notSubmittedOnce.add(nonce);
          return { status: "uncertain", detail: "simulated timeout after send (message was lost)" };
        }
        this.accept(role, text, nonce, spec);
        return { status: "accepted" };
      case "not_submitted_once":
        if (!this.notSubmittedOnce.has(nonce)) {
          this.notSubmittedOnce.add(nonce);
          return { status: "not_submitted", detail: "simulated: text stayed in composer" };
        }
        this.accept(role, text, nonce, spec);
        return { status: "accepted" };
      case "crash_after_accept":
        this.accept(role, text, nonce, spec);
        throw new SimulatedCrash("simulated controller crash right after the browser accepted the message");
      default:
        this.accept(role, text, nonce, spec);
        return { status: "accepted", userMessageId: `u-${this.seq}` };
    }
  }

  async waitForReply(role: ChatRole, nonce: string): Promise<ReplyOutcome> {
    const e = this.conversations[role].find((x) => x.nonce === nonce);
    if (!e) return { status: "blocked", problem: "conversation_missing", detail: "nonce not in fake conversation" };
    if (e.blocked) return { status: "blocked", problem: e.blocked, detail: `simulated ${e.blocked}` };
    return { status: "complete", messageId: e.id, markdown: e.reply };
  }

  async close(): Promise<void> {}
}

export type WorkerSpec =
  | { status: "completed"; text: string; files?: Record<string, string> }
  | { status: "failed"; error: string; text?: string }
  | { status: "stalled"; detail: string; aborted: boolean; text?: string; transcript?: string }
  | { status: "blocked"; kind: "permission" | "question"; detail: string }
  | { status: "backend_unavailable"; detail: string }
  | { submit: "uncertain_stored" | "uncertain_lost"; then: WorkerSpec };

export class FakeWorker implements WorkerPort {
  readonly sessions: string[] = [];
  readonly submissions: Array<{ sessionId: string; messageId: string; text: string }> = [];
  readonly stored = new Map<string, Set<string>>();
  readonly onCreateSession: Array<(n: number) => void> = [];
  private idx = 0;
  private seq = 0;
  healthy = true;
  restarts = 0;

  constructor(
    private readonly script: WorkerSpec[],
    private readonly factoryRoot: string,
  ) {}

  async health() {
    return { ok: this.healthy, version: "fake" };
  }

  async createSession(): Promise<string> {
    const id = `ses_fake${this.sessions.length + 1}`;
    for (const cb of this.onCreateSession) cb(this.sessions.length + 1);
    this.sessions.push(id);
    this.stored.set(id, new Set());
    return id;
  }

  newMessageId(): string {
    return `msg_fake${String(++this.seq).padStart(6, "0")}`;
  }

  async findMessage(sessionId: string, messageId: string): Promise<Presence> {
    return this.stored.get(sessionId)?.has(messageId) ? "present" : "absent";
  }

  async submit(sessionId: string, messageId: string, text: string) {
    const spec = this.script[this.idx];
    this.submissions.push({ sessionId, messageId, text });
    if (spec && "submit" in spec) {
      this.script[this.idx] = spec.then;
      if (spec.submit === "uncertain_stored") {
        this.stored.get(sessionId)?.add(messageId);
      }
      return { status: "uncertain" as const, detail: `simulated ${spec.submit}` };
    }
    this.stored.get(sessionId)?.add(messageId);
    return { status: "accepted" as const };
  }

  async waitForCompletion(sessionId: string, messageId: string): Promise<WorkerResult> {
    const spec = this.script[this.idx++];
    if (!spec) return { status: "failed", error: "worker script exhausted", text: "", transcript: "", assistantMessageIds: [] };
    if ("submit" in spec) throw new Error("unexpected nested submit spec");
    switch (spec.status) {
      case "completed":
        for (const [rel, content] of Object.entries(spec.files ?? {})) {
          const abs = join(this.factoryRoot, rel);
          mkdirSync(dirname(abs), { recursive: true });
          writeFileSync(abs, content);
        }
        return { status: "completed", text: spec.text, transcript: `### user ${messageId}\n...\n### assistant\n${spec.text}`, assistantMessageIds: [`${messageId}-reply`], touchedFiles: Object.keys(spec.files ?? {}), cost: 0, tokens: 0 };
      case "failed":
        return { status: "failed", error: spec.error, text: spec.text ?? "", transcript: "", assistantMessageIds: [`${messageId}-reply`] };
      case "stalled":
        return { status: "stalled", detail: spec.detail, aborted: spec.aborted, text: spec.text ?? "", transcript: spec.transcript ?? "", assistantMessageIds: [`${messageId}-reply`] };
      case "blocked":
        this.idx--; // the same task is still pending after the operator answers
        this.script[this.idx] = { status: "completed", text: "HARNESS REPORT: continued after operator answered." };
        return { status: "blocked", kind: spec.kind, detail: spec.detail };
      case "backend_unavailable":
        this.healthy = false;
        return { status: "backend_unavailable", detail: spec.detail };
    }
  }

  async abort(): Promise<boolean> {
    return true;
  }

  async restartOwnedBackend(): Promise<boolean> {
    this.restarts++;
    this.healthy = true;
    return true;
  }
}

export class FakeInterpreter implements InterpreterPort {
  calls = 0;
  constructor(private readonly result: Omit<InterpreterResult, "usage">) {}
  async interpret(): Promise<InterpreterResult> {
    this.calls++;
    return { ...this.result, usage: { promptTokens: 1000, completionTokens: 100, costUsd: 0.0004 } };
  }
}
