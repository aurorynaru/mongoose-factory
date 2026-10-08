import type { OcMessage } from "./client.js";

/** Follow OpenCode's automatic compaction/summary/continuation chain only.
 * A real user message (including manual compaction) ends task ownership.
 * Call with chronological history containing the original user message.
 */
export function taskScope(messages: OcMessage[], messageId: string) {
  const root = messages.findIndex((m) => m.info.role === "user" && m.info.id === messageId);
  const history: OcMessage[] = [];
  const replies: OcMessage[] = [];
  let parentId = messageId;
  let summaryReady = false;
  let superseded = false;
  if (root >= 0) {
    history.push(messages[root]);
    for (const m of messages.slice(root + 1)) {
      if (m.info.sessionID !== messages[root].info.sessionID) continue;
      if (m.info.role === "user") {
        const automatic = m.parts.some((p) => p.type === "compaction" && p.auto === true)
          && m.parts.every((p) => (p.type === "compaction" && p.auto === true) || (p.type === "text" && p.synthetic === true));
        const continuation = summaryReady && m.parts.length > 0
          && m.parts.every((p) => p.type === "text" && p.synthetic === true);
        if (!automatic && !continuation) { superseded = true; break; }
        parentId = m.info.id;
        summaryReady = false;
        history.push(m);
      } else if (m.info.parentID === parentId) {
        replies.push(m);
        history.push(m);
        summaryReady = m.info.summary === true && !!m.info.time.completed && !m.info.error;
      }
    }
  }
  // Do not treat a finished pre-compaction tool call or summary as task completion.
  const last = replies.at(-1);
  const terminal = last?.info.parentID === parentId &&
    (!!last.info.error || (!!last.info.time.completed && !last.info.summary && last.info.finish !== "tool-calls"));
  return { found: root >= 0, history, replies, superseded, terminal: terminal ? last : undefined };
}
