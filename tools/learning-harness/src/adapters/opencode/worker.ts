import type { LogSink } from "../../util/log.js";
import { opencodeMessageId } from "../../util/ids.js";
import type { Presence, WorkerPort, WorkerResult } from "../types.js";
import { OpenCodeClient, OpenCodeHttpError, type OcMessage } from "./client.js";

export interface OpenCodeWorkerOptions {
  client: OpenCodeClient;
  agent: string | null;
  model: { providerID: string; modelID: string } | null;
  pollIntervalMs: number;
  noResponseGraceMs: number;
  log: LogSink;
  /** Restarts only the harness-owned backend (via the fixed PowerShell script). */
  restartOwned?: () => Promise<boolean>;
  sleep?: (ms: number) => Promise<void>;
}

const PATH_KEYS = ["filePath", "path", "filename", "file"];

/** Render a message list into a readable transcript (text + tool summaries). */
export function transcriptOf(msgs: OcMessage[]): string {
  return msgs
    .map((m) => {
      const body = m.parts
        .map((p) => {
          if (p.type === "text" && p.text && !p.synthetic) return p.text;
          if (p.type === "tool") {
            const input = p.state?.input ? JSON.stringify(p.state.input).slice(0, 300) : "";
            return `[tool ${p.tool} ${p.state?.status ?? ""}] ${input}${p.state?.error ? ` ERROR: ${p.state.error}` : ""}`;
          }
          return "";
        })
        .filter(Boolean)
        .join("\n");
      return `### ${m.info.role} ${m.info.id}\n${body}`;
    })
    .join("\n\n");
}

export function touchedFilesOf(msgs: OcMessage[]): string[] {
  const out = new Set<string>();
  for (const m of msgs)
    for (const p of m.parts) {
      if (p.type !== "tool" || !p.state?.input) continue;
      for (const k of PATH_KEYS) {
        const v = p.state.input[k];
        if (typeof v === "string" && v.length < 400) out.add(v);
      }
    }
  return [...out];
}

export class OpenCodeWorker implements WorkerPort {
  private readonly sleep: (ms: number) => Promise<void>;
  constructor(private readonly o: OpenCodeWorkerOptions) {
    this.sleep = o.sleep ?? ((ms) => new Promise((r) => setTimeout(r, ms)));
  }

  async health() {
    try {
      const h = await this.o.client.health();
      return { ok: !!h?.healthy, version: h?.version };
    } catch (e) {
      return { ok: false, detail: (e as Error).message };
    }
  }

  async createSession(title: string): Promise<string> {
    const s = await this.o.client.createSession(title);
    if (!s?.id) throw new Error("OpenCode returned no session id");
    return s.id;
  }

  newMessageId(): string {
    return opencodeMessageId();
  }

  async findMessage(sessionId: string, messageId: string): Promise<Presence> {
    try {
      return (await this.o.client.getMessage(sessionId, messageId)) ? "present" : "absent";
    } catch (e) {
      this.o.log.log("warn", "worker.find_message_failed", { sessionId, messageId, error: (e as Error).message });
      return "unknown";
    }
  }

  async submit(sessionId: string, messageId: string, text: string) {
    try {
      await this.o.client.promptAsync(sessionId, {
        messageID: messageId,
        parts: [{ type: "text", text }],
        ...(this.o.agent ? { agent: this.o.agent } : {}),
        ...(this.o.model ? { model: this.o.model } : {}),
      });
      return { status: "accepted" as const };
    } catch (e) {
      if (e instanceof OpenCodeHttpError && e.status >= 400 && e.status < 500) {
        return { status: "rejected" as const, detail: `${e.message}: ${e.body}` };
      }
      // Network error / timeout / 5xx: the server may or may not have stored the message.
      return { status: "uncertain" as const, detail: (e as Error).message };
    }
  }

  async waitForCompletion(sessionId: string, messageId: string, opts: { timeoutMs: number; shouldStop: () => boolean }): Promise<WorkerResult> {
    const start = Date.now();
    let healthFailures = 0;
    let lastRetryMsg = "";
    while (true) {
      if (opts.shouldStop()) return { status: "interrupted" };
      if (Date.now() - start > opts.timeoutMs) return { status: "timeout", detail: `no completion within ${Math.round(opts.timeoutMs / 60000)} min` };
      try {
        const [statusMap, perms, questions] = await Promise.all([this.o.client.status(), this.o.client.permissions(), this.o.client.questions()]);
        healthFailures = 0;
        const related = new Set([sessionId]);
        if ((perms ?? []).length || (questions ?? []).length) {
          for (const c of (await this.o.client.children(sessionId)) ?? []) related.add(c.id);
        }
        const perm = (perms ?? []).find((p) => related.has(p.sessionID));
        if (perm) return { status: "blocked", kind: "permission", detail: `${perm.permission} ${perm.patterns.join(", ")} (request ${perm.id})` };
        const q = (questions ?? []).find((x) => related.has(x.sessionID));
        if (q) return { status: "blocked", kind: "question", detail: q.questions.map((x) => x.question ?? "").join(" | ") };

        const st = statusMap?.[sessionId] ?? { type: "idle" };
        if (st.type === "retry" && st.message !== lastRetryMsg) {
          lastRetryMsg = st.message;
          this.o.log.log("warn", "worker.provider_retry", { sessionId, attempt: st.attempt, message: st.message });
        }
        if (st.type === "idle") {
          const msgs = (await this.o.client.listMessages(sessionId)) ?? [];
          const userIdx = msgs.findIndex((m) => m.info.id === messageId);
          const replies = msgs.filter((m) => m.info.role === "assistant" && m.info.parentID === messageId);
          const last = replies[replies.length - 1];
          if (userIdx >= 0 && last && (last.info.time.completed || last.info.error)) {
            const scope = [msgs[userIdx], ...replies];
            const transcript = transcriptOf(scope);
            const text = replies
              .map((r) => r.parts.filter((p) => p.type === "text" && p.text && !p.synthetic).map((p) => p.text).join("\n"))
              .filter(Boolean)
              .join("\n\n");
            const ids = replies.map((r) => r.info.id);
            if (last.info.error) {
              const err = last.info.error;
              return { status: "failed", error: `${err.name ?? "Error"}: ${err.data?.message ?? JSON.stringify(err).slice(0, 300)}`, text, transcript, assistantMessageIds: ids };
            }
            const cost = replies.reduce((a, r) => a + (r.info.cost ?? 0), 0);
            const tokens = replies.reduce((a, r) => a + (r.info.tokens?.input ?? 0) + (r.info.tokens?.output ?? 0), 0);
            return { status: "completed", text, transcript, assistantMessageIds: ids, touchedFiles: touchedFilesOf(replies), cost, tokens };
          }
          if (userIdx < 0 && Date.now() - start > this.o.noResponseGraceMs) {
            return { status: "failed", error: "submitted message not present in session", text: "", transcript: "", assistantMessageIds: [] };
          }
          if (userIdx >= 0 && !last && Date.now() - start > this.o.noResponseGraceMs) {
            return { status: "failed", error: "session idle but no assistant reply to the task", text: "", transcript: transcriptOf([msgs[userIdx]]), assistantMessageIds: [] };
          }
        }
      } catch (e) {
        healthFailures++;
        this.o.log.log("warn", "worker.poll_failed", { sessionId, error: (e as Error).message, healthFailures });
        if (healthFailures >= 5) return { status: "backend_unavailable", detail: (e as Error).message };
      }
      await this.sleep(this.o.pollIntervalMs);
    }
  }

  async abort(sessionId: string): Promise<boolean> {
    try {
      return !!(await this.o.client.abort(sessionId));
    } catch {
      return false;
    }
  }

  async restartOwnedBackend(): Promise<boolean> {
    return this.o.restartOwned ? this.o.restartOwned() : false;
  }
}
