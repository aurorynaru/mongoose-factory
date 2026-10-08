import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type { Presence } from "../types.js";
export const marker = (messageId: string) => `[HARNESS WORKER message_id=${messageId}]`;
export function transcriptPath(configDir: string, cwd: string, sessionId: string) {
  if (!/^[\da-f]{8}-(?:[\da-f]{4}-){3}[\da-f]{12}$/i.test(sessionId)) throw new Error("Invalid session UUID");
  const key = resolve(cwd).replace(/^([A-Z]):/, (_, d: string) => d.toLowerCase() + ":").replace(/[^a-z\d]/gi, "-");
  return join(configDir, "projects", key, `${sessionId}.jsonl`);
}
const sameCwd = (a: string, b: string) => process.platform === "win32" ? resolve(a).toLowerCase() === resolve(b).toLowerCase() : resolve(a) === resolve(b);
export function findMarker(file: string, cwd: string, sessionId: string, messageId: string): Presence {
  try {
    const text = readFileSync(file, "utf8");
    if (!text.endsWith("\n")) return "unknown";
    let found = false, ownedUser = false;
    for (const line of text.split("\n").filter(Boolean)) {
      const event = JSON.parse(line);
      if (event.type !== "user") continue;
      if (event.sessionId !== sessionId || typeof event.cwd !== "string" || !sameCwd(event.cwd, cwd)) return "unknown";
      ownedUser = true;
      const content = event.message?.content;
      const body = typeof content === "string" ? content : Array.isArray(content) ? content.filter(p => p.type === "text").map(p => p.text).join("\n") : "";
      if (body.split(/\r?\n/).includes(marker(messageId))) found = true;
    }
    return found ? "present" : ownedUser ? "absent" : "unknown";
  } catch { return "unknown"; }
}
