import { appendFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const SECRET_KEY = /pass(word)?|secret|token|api[-_]?key|authorization|cookie|credential/i;

export type Level = "debug" | "info" | "warn" | "error";

/** Values (e.g. env-provided API keys) that must never appear in logs or prompts. */
const knownSecrets = new Set<string>();

export function registerSecret(value: string | undefined | null): void {
  if (value && value.length >= 4) knownSecrets.add(value);
}

export function redactString(s: string): string {
  let out = s;
  for (const secret of knownSecrets) out = out.split(secret).join("[REDACTED]");
  return out;
}

export function redact(value: unknown, depth = 0): unknown {
  if (depth > 8) return "[depth]";
  if (typeof value === "string") return redactString(value);
  if (Array.isArray(value)) return value.map((v) => redact(v, depth + 1));
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = SECRET_KEY.test(k) ? "[REDACTED]" : redact(v, depth + 1);
    }
    return out;
  }
  return value;
}

export interface LogSink {
  log(level: Level, event: string, data?: Record<string, unknown>): void;
}

/** Structured JSON-lines logger. One global file plus an optional per-run file. */
export class Logger implements LogSink {
  private runFile: string | null = null;
  constructor(
    private readonly file: string | null,
    private readonly echo: boolean = true,
    private readonly minEcho: Level = "info",
  ) {
    if (file) mkdirSync(dirname(file), { recursive: true });
  }

  setRunFile(file: string | null): void {
    this.runFile = file;
    if (file) mkdirSync(dirname(file), { recursive: true });
  }

  log(level: Level, event: string, data: Record<string, unknown> = {}): void {
    const rec = { ts: new Date().toISOString(), level, event, ...(redact(data) as object) };
    const line = JSON.stringify(rec);
    if (this.file) appendFileSync(this.file, line + "\n");
    if (this.runFile) appendFileSync(this.runFile, line + "\n");
    if (this.echo && rank(level) >= rank(this.minEcho)) {
      const brief = Object.entries(redact(data) as Record<string, unknown>)
        .filter(([, v]) => v !== undefined && typeof v !== "object")
        .map(([k, v]) => `${k}=${String(v).slice(0, 120)}`)
        .join(" ");
      process.stderr.write(`[${rec.ts.slice(11, 19)}] ${level.toUpperCase().padEnd(5)} ${event} ${brief}\n`);
    }
  }
}

export class MemoryLogger implements LogSink {
  readonly records: Array<{ level: Level; event: string; data: Record<string, unknown> }> = [];
  log(level: Level, event: string, data: Record<string, unknown> = {}): void {
    this.records.push({ level, event, data: redact(data) as Record<string, unknown> });
  }
}

function rank(l: Level): number {
  return { debug: 0, info: 1, warn: 2, error: 3 }[l];
}
