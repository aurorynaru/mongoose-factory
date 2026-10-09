import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type { ChatPort, ChatRole } from "./adapters/types.js";
import { recordConversation } from "./adapters/conversation.js";
import { loadBrief, findRecord } from "./brief.js";
import type { HarnessConfig } from "./config.js";
import { contextBlock, loadCoordinatorContext, writeCoordinatorContext } from "./context.js";
import { extractSpecialistEnvelope } from "./protocol/envelope.js";
import { clip, header, protocolBlock } from "./protocol/prompts.js";
import { briefSummary, requestProposal, revisionRequestText } from "./proposal.js";
import type { RunRow, Store } from "./store.js";
import { newNonce } from "./util/ids.js";
import type { LogSink } from "./util/log.js";

/**
 * Autopilot: between experiments, refresh the durable context and pick the next experiment WITHOUT
 * the operator, using fresh chats only:
 *   coordinator(new) updates context  ->  specialist(new) reviews findings  ->  coordinator finalizes
 *   -> coordinator proposes next experiment (deterministic checks)  ->  specialist sanity-checks it
 *   -> only a "supports" verdict auto-approves the brief.
 * Any problem stops the chain and leaves everything on disk for the operator.
 */

export interface AutopilotDeps {
  chat: ChatPort;
  store: Store;
  config: HarnessConfig;
  factoryRoot: string;
  briefsDir: string;
  protocolDir: string;
  contextFile: string;
  workDir: string; // data/autopilot
  log: LogSink;
}

export interface AutopilotState {
  remaining: number;
  blockedStreak: number;
}

export function autopilotState(store: Store): AutopilotState {
  return {
    remaining: Number(store.getSetting("autopilot:remaining") ?? "0"),
    blockedStreak: Number(store.getSetting("autopilot:blocked_streak") ?? "0"),
  };
}

export function setAutopilot(store: Store, remaining: number): void {
  store.setSetting("autopilot:remaining", remaining > 0 ? String(remaining) : null);
  if (remaining <= 0) store.setSetting("autopilot:blocked_streak", null);
}

export type AutopilotOutcome = { ok: true; briefPath: string; experimentId: string } | { ok: false; reason: string };

class Stop extends Error {}

const MAX_BLOCKED_STREAK = 2;
const MAX_REVISIONS = 1;

export async function autopilotCycle(d: AutopilotDeps, previous: RunRow): Promise<AutopilotOutcome> {
  const st = autopilotState(d.store);
  if (st.remaining <= 0) return { ok: false, reason: "autopilot is off (harness autopilot on --experiments N)" };
  if (previous.status !== "completed") return { ok: false, reason: `run ${previous.id} is ${previous.status}, not completed` };
  const counted = d.store.getSetting("autopilot:last_counted_run") === previous.id;
  const blockedStreak = counted ? st.blockedStreak : previous.outcome === "blocked" ? st.blockedStreak + 1 : 0;
  d.store.setSetting("autopilot:blocked_streak", String(blockedStreak));
  d.store.setSetting("autopilot:last_counted_run", previous.id);
  if (blockedStreak >= MAX_BLOCKED_STREAK) {
    setAutopilot(d.store, 0);
    return { ok: false, reason: `${blockedStreak} blocked experiments in a row; autopilot stopped for operator review` };
  }

  mkdirSync(d.workDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const save = (name: string, text: string) => {
    const p = join(d.workDir, `${stamp}-${name}.md`);
    writeFileSync(p, text);
    return p;
  };

  const ask = async (role: ChatRole, kind: string, body: string, newChat: boolean): Promise<string> => {
    const nonce = newNonce();
    const text = `${header({ nonce, runId: previous.id, experimentId: previous.experiment_id, cycleId: 0, kind, extra: { consultation_id: `${previous.id}-${kind}` } })}\n${body}`;
    save(`${kind}-request`, text);
    if (newChat) {
      const home = d.chat.transport?.(role)==="claude"?`claude-role:${role}`:role === "coordinator" ? d.config.browser.baseUrl.replace(/\/$/, "") + "/" : d.store.getRole("specialist")?.url.replace(/\/c\/.*$/, "");
      if (!home) throw new Stop("no specialist GPT registered (harness setup)");
      const out = await d.chat.submitNew(role, home, clip(text, d.config.browser.maxMessageChars, "data/autopilot"), nonce);
      if (out.status !== "accepted" || !out.conversationUrl) throw new Stop(`${kind}: could not open a new ${role} chat (${out.status}${"detail" in out ? `: ${out.detail}` : ""})`);
      recordConversation(d.store,role,out.conversationUrl);
      d.log.log("info", "autopilot.new_chat", { role, url:out.conversationUrl, step: kind });
    } else {
      const out = await d.chat.submit(role, clip(text, d.config.browser.maxMessageChars, "data/autopilot"), nonce);
      if (out.status !== "accepted" && !(await d.chat.findSubmission(role, nonce)).found) throw new Stop(`${kind}: message not delivered (${out.status})`);
    }
    const reply = await d.chat.waitForReply(role, nonce, { timeoutMs: d.config.browser.replyTimeoutMinutes * 60_000, shouldStop: () => false });
    if (reply.status !== "complete") throw new Stop(`${kind}: no reply (${reply.status}${"detail" in reply ? `: ${reply.detail}` : ""})`);
    save(`${kind}-reply`, reply.markdown);
    return reply.markdown;
  };

  const block = (marker: string) => protocolBlock(d.protocolDir, "autopilot-protocol.md", marker);
  const recordPath = findRecord(d.factoryRoot, previous.experiment_id);
  const record = recordPath ? readFileSync(join(d.factoryRoot, recordPath), "utf8") : "(record not found)";
  const ch = d.config.chats;

  try {
    // 1. coordinator (new chat): update context from disk
    const current = loadCoordinatorContext(d.contextFile);
    const updatedMarker = `updated by autopilot after ${previous.experiment_id} (${previous.id})`;
    const contextDone = current.exists && current.reviewed && current.text.includes(updatedMarker);
    if (contextDone) {
      // A rerun after a later step stopped: the context for this run is already saved; continue with
      // the proposal in the chats registered by that earlier attempt.
      d.log.log("info", "autopilot.context_already_updated", { run: previous.id });
    } else {
      // 1. coordinator (new chat): update context from disk
      const draft = await ask(
        "coordinator",
        "CONTEXT_UPDATE",
        [
          block("CONTEXT_UPDATE"),
          "",
          "(a) CURRENT CONTEXT DOCUMENT:",
          current.exists ? current.text : "(none yet)",
          "",
          "(b) " + contextBlock(d.factoryRoot, "", ch.maxDigestChars, 0, previous.experiment_id),
          "",
          `(c) FULL RECORD OF ${previous.experiment_id} (outcome: ${previous.outcome ?? "?"}):`,
          clip(record, 12000, recordPath ?? ""),
        ].join("\n"),
        true,
      );

      // 2. specialist (new chat): review findings
      const review = await ask("specialist", "SPECIALIST_REVIEW", [block("SPECIALIST_REVIEW"), "", "UPDATED CONTEXT DOCUMENT:", draft, "", `RECORD OF ${previous.experiment_id}:`, clip(record, 9000, recordPath ?? "")].join("\n"), true);
      const reviewVerdict = verdictOf(review);

      // 3. coordinator (same chat): finalize
      const final = await ask("coordinator", "CONTEXT_FINALIZE", [block("CONTEXT_FINALIZE"), "", `SPECIALIST REVIEW (verdict: ${reviewVerdict}):`, review].join("\n"), false);
      if (final.trim().length < 500) throw new Stop("finalized context is implausibly short; not saved");
      mkdirSync(join(d.contextFile, "..", "history"), { recursive: true });
      if (existsSync(d.contextFile)) copyFileSync(d.contextFile, join(d.contextFile, "..", "history", `${stamp}-before.md`));
      writeCoordinatorContext(d.contextFile, `<!-- ${updatedMarker}; specialist findings verdict: ${reviewVerdict}; ${new Date().toISOString()} -->\n${final}`, true);
      d.log.log("info", "autopilot.context_saved", { file: d.contextFile, verdict: reviewVerdict });
    }

    // 4. coordinator: propose the next experiment
    const proposalDeps = {
      chat: d.chat,
      factoryRoot: d.factoryRoot,
      briefsDir: d.briefsDir,
      protocolDir: d.protocolDir,
      proposalsDir: join(d.workDir, "proposals"),
      log: d.log,
      replyTimeoutMs: d.config.browser.replyTimeoutMinutes * 60_000,
      contextText: contextBlock(d.factoryRoot, d.contextFile, ch.maxDigestChars, ch.maxContextChars),
    };
    let prop = await requestProposal(proposalDeps, previous, { force: true });
    if (!prop.ok) throw new Stop(`proposal failed: ${prop.reason}`);

    // 5. specialist: sanity check, with up to MAX_REVISIONS revision rounds on an objection
    let verdict = "unknown";
    let checkFile = "";
    for (let round = 0; ; round++) {
      const check = await ask("specialist", round === 0 ? "PROPOSAL_CHECK" : `PROPOSAL_RECHECK_${round}`, [block("PROPOSAL_CHECK"), "", briefSummary(prop.brief)].join("\n"), false);
      verdict = verdictOf(check);
      checkFile = `data/autopilot/${stamp}-${round === 0 ? "PROPOSAL_CHECK" : `PROPOSAL_RECHECK_${round}`}-reply.md`;
      if (verdict === "supports") break;
      if (round >= MAX_REVISIONS) throw new Stop(`specialist verdict on ${prop.brief.experiment_id} is "${verdict}" after ${round} revision(s) — draft brief left unapproved: ${prop.briefPath}`);
      d.log.log("info", "autopilot.revision_requested", { experiment_id: prop.brief.experiment_id, verdict, round: round + 1 });
      const revised = await requestProposal(proposalDeps, previous, { force: true, firstText: revisionRequestText(previous, prop.brief.experiment_id, check) });
      if (!revised.ok) throw new Stop(`revised proposal failed: ${revised.reason}`);
      prop = revised;
    }

    // 6. auto-approve
    const raw = JSON.parse(readFileSync(prop.briefPath, "utf8"));
    raw.reviewed = true;
    raw.notes = `${raw.notes ?? ""} Auto-approved by autopilot ${new Date().toISOString()} after specialist verdict "supports" (see ${checkFile}).`.trim();
    writeFileSync(prop.briefPath, JSON.stringify(raw, null, 2) + "\n");
    loadBrief(prop.briefPath, d.briefsDir); // re-validate
    setAutopilot(d.store, st.remaining - 1);
    d.log.log("info", "autopilot.approved", { experiment_id: prop.brief.experiment_id, remaining: st.remaining - 1 });
    return { ok: true, briefPath: resolve(prop.briefPath), experimentId: prop.brief.experiment_id };
  } catch (e) {
    if (e instanceof Stop) {
      d.log.log("warn", "autopilot.stopped", { reason: e.message });
      return { ok: false, reason: e.message };
    }
    throw e;
  }
}

function verdictOf(markdown: string): string {
  const x = extractSpecialistEnvelope(markdown);
  return x.status === "found" ? x.value.verdict : "unknown";
}
