#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Command } from "commander";
import type { ChatPort } from "./adapters/types.js";
import { contextFilePath, liveController, openApp, openChats, openCodeClient, type App, type LiveController } from "./app.js";
import { parseConversationUrl } from "./adapters/chatgpt/selectors.js";
import { approveCoordinatorContext, contextBlock, contextRequestText, loadCoordinatorContext, writeCoordinatorContext } from "./context.js";
import { newNonce } from "./util/ids.js";
import { briefSummary, requestProposal } from "./proposal.js";
import { autopilotCycle, autopilotState, setAutopilot } from "./autopilot.js";
import { finalizeRun, Git, prepareRunBranch } from "./git.js";
import { briefProblems, draftBrief, loadBrief } from "./brief.js";
import { doctor } from "./doctor.js";
import { dryRun } from "./dryrun.js";
import { protocolBlock } from "./protocol/prompts.js";
import { setup } from "./setup.js";
import { controllerAlive, renderStatus, renderSummary } from "./status.js";
import type { RunRow } from "./store.js";
import { registerShadowCommands } from "./shadow/cli.js";
import { registerServiceCommands } from "./backend/cli.js";
import { registerWorkerCommands } from "./adapters/claude/cli.js";
import { ClaudeWorker } from "./adapters/claude/worker.js";
import { loadConfig, resolvePaths } from "./config.js";
import { collectUsage, renderUsage } from "./usage.js";

const program = new Command();
registerServiceCommands(program);
registerWorkerCommands(program);
program.name("claude-harness").description("Mongoose learning harness: Claude worker, ChatGPT/Claude coordinator, Opus specialist and optional Tab 2 second opinion").option("-c, --config <file>", "config file (default: harness.config.json next to package.json)").option("-v, --verbose", "debug output");

const app = (): App => openApp(program.opts().config, program.opts().verbose ? "debug" : "info");

function currentRun(a: App, id?: string): RunRow {
  const run = id ? a.store.getRun(id) : (a.store.activeRuns().pop() ?? null);
  if (!run) throw new Error(id ? `Unknown run ${id}` : "No active (running or paused) run.");
  return run;
}

async function drive(a: App, runId: string, existing?: LiveController): Promise<void> {
  a.log.setRunFile(join(a.paths.runsDir, runId, "events.jsonl"));
  const live = existing ?? (await liveController(a, () => runId));
  let interrupts = 0;
  const onSigint = () => {
    interrupts++;
    if (interrupts === 1) {
      console.error("\nPause requested: finishing the current step safely (Ctrl+C again to exit immediately; state is checkpointed).");
      a.store.requestControl(runId, "pause", "Ctrl+C");
    } else process.exit(130);
  };
  process.on("SIGINT", onSigint);
  let nextBrief: string | null = null;
  let finished: RunRow | null = null;
  try {
    const run = await live.controller.run(runId);
    finished = run;
    if(run.pause_reason==="completed_with_denials")process.exitCode=3;
    console.log("\n" + renderStatus(a.store, run));
    if (run.status === "completed") {
      if (autopilotState(a.store).remaining > 0) {
        nextBrief = await runAutopilot(a, live.chat, run);
      } else if (a.config.protocol.proposeNextOnComplete) {
        console.log("\nRun completed. Asking the coordinator to propose the next experiment (nothing will start)...");
        await proposeAndReport(a, live.chat, run);
      }
    }
  } finally {
    process.off("SIGINT", onSigint);
    await live.close().catch(() => undefined);
  }
  // Commit + merge AFTER autopilot/proposal, so the updated context and next brief are included.
  if (finished?.status === "completed" && a.config.git.enabled) {
    const g = await gitFinalize(a, finished);
    if (!g) nextBrief = null; // never start the next experiment on top of an unmerged one
  }
  if (nextBrief && interrupts === 0) {
    console.log(`\nNext brief prepared: ${nextBrief}. Confirm the new experiment's operator preconditions, then start it manually with --confirm-preconditions.`);
  }
}

async function gitFinalize(a: App, run: RunRow): Promise<boolean> {
  try {
    const r = await finalizeRun(new Git(a.paths.factoryRoot, a.log), a.config.git, a.store, run);
    console.log(`\nGit: ${r.detail}`);
    a.log.log(r.ok ? "info" : "warn", "git.finalize", { run_id: run.id, detail: r.detail });
    return r.ok;
  } catch (e) {
    console.log(`\nGit: ${(e as Error).message}\nFix it, then: .\\claude-harness.ps1 git finalize`);
    return false;
  }
}

async function runAutopilot(a: App, chat: ChatPort, previous: RunRow): Promise<string | null> {
  console.log(`\nAutopilot (${autopilotState(a.store).remaining} experiment(s) left): refreshing context, specialist review, next proposal, specialist check — all in new chats...`);
  const r = await autopilotCycle(
    {
      chat,
      store: a.store,
      config: a.config,
      factoryRoot: a.paths.factoryRoot,
      briefsDir: a.paths.briefsDir,
      protocolDir: a.paths.protocolDir,
      contextFile: contextFilePath(a),
      workDir: join(a.paths.dataDir, "autopilot"),
      log: a.log,
    },
    previous,
  );
  if (!r.ok) {
    console.log(`\nAutopilot stopped: ${r.reason}\nEverything is saved (claude-data\\autopilot\\, context\\, briefs\\). Continue manually, or after fixing: .\\claude-harness.ps1 autopilot next`);
    return null;
  }
  console.log(`\nAutopilot approved ${r.experimentId} (specialist: supports).`);
  return r.briefPath;
}

async function proposeAndReport(a: App, chat: ChatPort, previous: RunRow | null, force = false, focus?: string): Promise<boolean> {
  const r = await requestProposal(
    {
      chat,
      factoryRoot: a.paths.factoryRoot,
      briefsDir: a.paths.briefsDir,
      protocolDir: a.paths.protocolDir,
      proposalsDir: join(a.paths.dataDir, "proposals"),
      log: a.log,
      replyTimeoutMs: a.config.browser.replyTimeoutMinutes * 60_000,
      contextText: contextBlock(a.paths.factoryRoot, contextFilePath(a), a.config.chats.maxDigestChars, a.config.chats.maxContextChars) + (focus?.trim() ? `

OPERATOR FOCUS for this proposal (direction only; every protocol rule, FX_ boundary and scope limit still applies): ${focus.trim()}` : ""),
      newChatHome: a.store.getSetting("new_chat:coordinator") === "1" ? a.config.browser.baseUrl.replace(/\/$/, "") + "/" : undefined,
      onNewConversation: (url) => {
        const p = parseConversationUrl(url)!;
        a.store.setRole("coordinator", { url: p.canonical, conversationId: p.conversationId, gptId: null, title: null });
        a.store.setSetting("new_chat:coordinator", null);
        console.log(`New coordinator chat: ${p.canonical}`);
      },
    },
    previous,
    { force },
  );
  if (!r.ok) {
    console.log(`\nNo draft brief saved: ${r.reason}${r.rawPath ? `\nCoordinator reply: ${r.rawPath}` : ""}`);
    return false;
  }
  console.log(`\nDraft brief saved (NOT reviewed): ${r.briefPath}\n\n${briefSummary(r.brief)}\n`);
  console.log(`Review it (edit the file if needed), then:\n  .\\claude-harness.ps1 brief approve ${r.brief.experiment_id} --start`);
  return true;
}

program
  .command("next")
  .description("Ask the coordinator (Tab 1) to propose the next experiment; saves an UNREVIEWED draft brief, starts nothing")
  .option("--force", "overwrite an existing brief file for the proposed ID")
  .option("--focus <text>", "operator direction for this proposal (scope rules still apply)")
  .action(async (o) => {
    const a = app();
    if (a.store.activeRuns().length) throw new Error(`Run ${a.store.activeRuns()[0].id} is still active. Finish or stop it first.`);
    const chats = await openChats(a,()=>null);
    try {
      process.exitCode = (await proposeAndReport(a, chats.chat, a.store.latestRun(), !!o.force, o.focus)) ? 0 : 1;
    } finally {
      await chats.close();
    }
  });

const context = program.command("context").description("Durable coordinator context (fresh chats get it from disk, not from chat memory)");
context
  .command("save")
  .description("Ask the CURRENT coordinator chat for a handoff summary; saved UNREVIEWED to context/coordinator-context.md")
  .option("--force", "overwrite an existing context file")
  .action(async (o) => {
    const a = app();
    if (a.store.activeRuns().length) throw new Error(`Run ${a.store.activeRuns()[0].id} is still active. Finish or stop it first.`);
    const file = contextFilePath(a);
    if (loadCoordinatorContext(file).exists && !o.force) throw new Error(`${file} exists. Use --force to replace it.`);
    const chats = await openChats(a,()=>null);
    try {
      const chat = chats.chat;
      const ready = await chat.checkReady("coordinator");
      if (!ready.ok) throw new Error(`coordinator not ready: ${ready.problem} — ${ready.detail ?? ""}`);
      const nonce = newNonce();
      let sent = await chat.submit("coordinator", contextRequestText(nonce), nonce);
      if (sent.status !== "accepted" && (await chat.findSubmission("coordinator", nonce)).found) sent = { status: "accepted" };
      if (sent.status !== "accepted") throw new Error(`request not delivered (${sent.status}). Check Tab 1 and retry.`);
      console.log("Waiting for the coordinator's handoff summary...");
      const reply = await chat.waitForReply("coordinator", nonce, { timeoutMs: a.config.browser.replyTimeoutMinutes * 60_000, shouldStop: () => false });
      if (reply.status !== "complete") throw new Error(`no reply (${reply.status})`);
      writeCoordinatorContext(file, reply.markdown, false);
      console.log(`\nSaved (NOT reviewed): ${file}\nRead and correct it (remove anything wrong or unverified), then: .\\claude-harness.ps1 context approve`);
    } finally {
      await chats.close();
    }
  });
context
  .command("show")
  .description("Print the context file and the record digest that fresh coordinator chats receive")
  .action(() => {
    const a = app();
    const c = loadCoordinatorContext(contextFilePath(a));
    console.log(`Context file: ${c.path} — ${!c.exists ? "missing" : c.reviewed ? "REVIEWED (sent)" : "NOT reviewed (not sent)"}\n`);
    console.log(contextBlock(a.paths.factoryRoot, c.path, a.config.chats.maxDigestChars, a.config.chats.maxContextChars));
  });
context
  .command("approve")
  .description("Mark the context file as reviewed so it is included in kickoffs and proposal requests")
  .action(() => {
    const a = app();
    approveCoordinatorContext(contextFilePath(a));
    console.log(`Approved: ${contextFilePath(a)}`);
  });

const auto = program.command("autopilot").description("Bounded proposal/review cycles; each next experiment still requires manual precondition confirmation");
auto
  .command("on")
  .description("Enable autopilot for the next N experiments")
  .requiredOption("--experiments <n>", "how many further proposal/review cycles may be prepared")
  .action((o) => {
    const n = Number(o.experiments);
    if (!Number.isInteger(n) || n < 1 || n > 20) throw new Error("--experiments must be 1..20");
    const a = app();
    setAutopilot(a.store, n);
    console.log(`Autopilot ON for up to ${n} experiment(s). It runs after the current/next run completes, and stops on: any pause, 2 blocked in a row, a non-"supports" specialist verdict, or any invalid reply.`);
  });
auto
  .command("off")
  .description("Disable autopilot (a run in progress finishes normally)")
  .action(() => {
    const a = app();
    setAutopilot(a.store, 0);
    console.log("Autopilot OFF.");
  });
auto
  .command("status")
  .description("Show autopilot state")
  .action(() => {
    const a = app();
    const s = autopilotState(a.store);
    console.log(s.remaining > 0 ? `Autopilot ON: ${s.remaining} experiment(s) left; blocked streak ${s.blockedStreak}.` : "Autopilot OFF.");
  });
auto
  .command("next")
  .description("Prepare the next brief from the latest COMPLETED run; start it manually after checking preconditions")
  .action(async () => {
    const a = app();
    if (a.store.activeRuns().length) throw new Error(`Run ${a.store.activeRuns()[0].id} is still active.`);
    const last = a.store.latestRun();
    if (!last || last.status !== "completed") throw new Error("The latest run is not completed.");
    if (autopilotState(a.store).remaining <= 0) throw new Error("Autopilot is off: harness autopilot on --experiments N");
    const chats = await openChats(a,()=>null);
    let next: string | null = null;
    try {
      next = await runAutopilot(a, chats.chat, last);
    } finally {
      await chats.close();
    }
    if(next)console.log(`Next brief prepared: ${next}. Start it manually with --confirm-preconditions after checking the operator preconditions.`);
  });

const chatCmd = program.command("chat").description("Which ChatGPT conversations the harness uses");
chatCmd
  .command("new <role>")
  .description("Open a NEW chat for coordinator|specialist with the next message to that role (nothing is sent now)")
  .action((role: string) => {
    if (role !== "coordinator" && role !== "specialist") throw new Error("role must be coordinator or specialist");
    const a = app();
    a.store.setSetting(`new_chat:${role}`, "1");
    console.log(`The next ${role} message will start a fresh ${role==="specialist"?"Claude Opus session":a.config.coordinator.transport+" conversation"}. Existing conversations are preserved.`);
  });
chatCmd
  .command("use <role> <url>")
  .description("Register an existing conversation URL for coordinator|specialist")
  .action((role: string, url: string) => {
    if (role !== "coordinator" && role !== "specialist") throw new Error("role must be coordinator or specialist");
    const p = parseConversationUrl(url);
    if (!p) throw new Error("Not a ChatGPT conversation URL (…/c/<id>)");
    if (role === "specialist" && !p.gptId) throw new Error("The specialist URL must be a custom GPT conversation (/g/g-…/c/…)");
    const a = app();
    a.store.setRole(role, { url: p.canonical, conversationId: p.conversationId, gptId: role === "specialist" ? p.gptId : null, title: null });
    console.log(`${role} conversation set to ${p.canonical}. Check with: .\\claude-harness.ps1 doctor`);
  });
chatCmd
  .command("show")
  .description("Show the registered conversations")
  .action(() => {
    const a = app();
    for (const role of ["coordinator", "specialist"] as const) {
      const r = a.store.getRole(role);
      console.log(`${role.padEnd(12)} ${r ? r.url : "(not set)"}${a.store.getSetting(`new_chat:${role}`) === "1" ? "   [new chat on next message]" : ""}`);
    }
    console.log(`New coordinator chat per run: ${a.config.chats.newCoordinatorPerRun ? "yes" : "no"}`);
  });

program
  .command("login")
  .description("Open a plain (non-automated) Chrome on the harness profile so you can sign in to ChatGPT manually")
  .action(async () => {
    const { login } = await import("./login.js");
    await login(app());
  });

program
  .command("setup")
  .description("Open the harness browser, sign in manually, and identify the coordinator (Tab 1) and Mongoose GPT (Tab 2) conversations")
  .option("--coordinator-url <url>", "coordinator conversation URL (non-interactive)")
  .option("--specialist-url <url>", "Mongoose GPT conversation URL (non-interactive)")
  .option("--allow-plain-specialist", "accept a specialist conversation whose URL is not /g/g-.../c/...")
  .action(async (o) => {
    process.exitCode = (await setup(app(), { coordinatorUrl: o.coordinatorUrl, specialistUrl: o.specialistUrl, allowPlainSpecialist: !!o.allowPlainSpecialist })) ? 0 : 1;
  });

program
  .command("doctor")
  .description("Check config, Claude auth, owned services and ChatGPT bindings (never submits prompts)")
  .option("--no-browser", "skip opening the harness browser")
  .option("--mcp", "also check the already-owned Chrome/MCP and window (never starts services)")
  .action(async (o) => {
    process.exitCode = (await doctor(app(), { browser: o.browser, mcp: !!o.mcp })) ? 0 : 1;
  });

const brief = program.command("brief").description("Experiment briefs: the explicit, reviewed selection and scope of one experiment");
brief
  .command("init <experimentId>")
  .description("Draft briefs/<EXP>.brief.json from the experiment record (unreviewed; you must edit and set reviewed=true)")
  .option("--force", "overwrite an existing brief")
  .action((id: string, o) => {
    const a = app();
    const file = join(a.paths.briefsDir, `${id}.brief.json`);
    if (existsSync(file) && !o.force) throw new Error(`${file} exists (use --force to overwrite)`);
    mkdirSync(a.paths.briefsDir, { recursive: true });
    writeFileSync(file, JSON.stringify(draftBrief(a.paths.factoryRoot, id), null, 2) + "\n");
    console.log(`Draft written: ${file}\nReview scope, prohibited_patterns and acceptance_checks, replace every TODO, then set "reviewed": true.`);
  });
brief
  .command("check <experimentIdOrPath>")
  .description("Validate a brief")
  .action((x: string) => {
    const a = app();
    const b = loadBrief(x, a.paths.briefsDir);
    const p = briefProblems(b.brief, a.paths.factoryRoot);
    console.log(p.length ? `NOT READY ${b.path}\n - ${p.join("\n - ")}` : `READY ${b.path}`);
    process.exitCode = p.length ? 1 : 0;
  });

brief
  .command("show <experimentIdOrPath>")
  .description("Print a brief in readable form")
  .action((x: string) => {
    const a = app();
    const b = loadBrief(x, a.paths.briefsDir);
    console.log(`${b.path}\n\n${briefSummary(b.brief)}`);
  });
brief
  .command("approve <experimentIdOrPath>")
  .description('Show a (proposed) brief, ask for confirmation, set "reviewed": true; --start starts the run')
  .option("--yes", "do not ask for confirmation")
  .option("--start", "start the run right after approval")
  .option("--confirm-preconditions","confirm manual Mongoose login/configuration and normal Web Client loaded")
  .action(async (x: string, o) => {
    const a = app();
    const b = loadBrief(x, a.paths.briefsDir);
    console.log(`${b.path}\n\n${briefSummary(b.brief)}\n`);
    const other = briefProblems({ ...b.brief, reviewed: true }, a.paths.factoryRoot);
    if (other.length) throw new Error(`Fix these first (edit the file):\n - ${other.join("\n - ")}`);
    if (!b.brief.reviewed) {
      if (!o.yes) {
        const { createInterface } = await import("node:readline/promises");
        const rl = createInterface({ input: process.stdin, output: process.stdout });
        const ans = (await rl.question('This scope is what the run may do. Type "yes" to approve it: ')).trim().toLowerCase();
        rl.close();
        if (ans !== "yes") {
          console.log("Not approved. Edit the file and run this again.");
          process.exitCode = 1;
          return;
        }
      }
      const raw = JSON.parse(readFileSync(b.path, "utf8"));
      raw.reviewed = true;
      writeFileSync(b.path, JSON.stringify(raw, null, 2) + "\n");
      console.log(`Approved: ${b.path}`);
    } else console.log("Already reviewed.");
    if (o.start) await startRun(a, b.path,!!o.confirmPreconditions);
    else console.log(`Start it with: .\\claude-harness.ps1 start ${b.brief.experiment_id}`);
  });

async function startRun(a: App, x: string,confirmed=false): Promise<void> {
  if(!confirmed)throw Error("Operator confirmation required: log in manually, select Mongoose configuration (OK) and load the normal Web Client; then start with --confirm-preconditions. The worker never authenticates.");
  const b = loadBrief(x, a.paths.briefsDir);
    const p = briefProblems(b.brief, a.paths.factoryRoot);
    if (p.length) throw new Error(`Brief not ready:\n - ${p.join("\n - ")}`);
    if (a.store.activeRuns().length) throw new Error(`A run is already active: ${a.store.activeRuns()[0].id}. Use resume or stop.`);
    for (const role of ["coordinator", "specialist"] as const) if ((role==="coordinator"?a.config.coordinator.transport==="chatgpt":a.config.externalSecondOpinion.enabled)&&!a.store.getRole(role)) throw new Error(`No ${role==="specialist"?"external Tab 2":"coordinator"} conversation configured. Run: claude-harness setup`);
    // Git: clean repo, up-to-date main, new branch for this experiment (before anything else happens).
    let gitBranch: string | null = null;
    if (a.config.git.enabled) {
      const g = await prepareRunBranch(new Git(a.paths.factoryRoot, a.log), a.config.git, b.brief.experiment_id);
      if (!g.ok) throw new Error(`Git: ${g.detail}`);
      gitBranch = g.branch ?? null;
      console.log(`Git: ${g.detail}`);
    }
    // Pre-flight before a run exists: backend + both conversations must be ready.
    let runId: string | null = null;
    const live = await liveController(a, () => runId,confirmed);
    try {
      for (const role of ["coordinator", "specialist"] as const) {
        // A run that opens its own new chat does not depend on the previously registered one.
        if (role === "coordinator" && a.config.chats.newCoordinatorPerRun) continue;
        if (a.store.getSetting(`new_chat:${role}`) === "1") continue;
        const r = await live.chat.checkReady(role);
        if (!r.ok) throw new Error(`${role} not ready: ${r.problem} — ${r.detail ?? ""}`);
      }
    } catch (e) {
      await live.close().catch(() => undefined);
      throw e;
    }
    const run = live.controller.createRun(b);
    runId = run.id;
    if (gitBranch) a.store.setSetting(`git:branch:${run.id}`, gitBranch);
    console.log(`Run ${run.id} created for ${run.experiment_id}.`);
    await drive(a, runId, live);
}

const gitCmd = program.command("git").description("Per-experiment branches with automatic commit/merge in the factory repo");
gitCmd
  .command("status")
  .description("Show git integration state")
  .action(async () => {
    const a = app();
    const g = new Git(a.paths.factoryRoot, a.log);
    if (!(await g.isRepo())) return console.log("Factory folder is not a git repository.");
    const run = a.store.latestRun();
    console.log(`Enabled: ${a.config.git.enabled}   branch: ${await g.branch()}   remote ${a.config.git.remote}: ${(await g.hasRemote(a.config.git.remote)) ? "yes" : "no"}`);
    if (run) console.log(`Latest run ${run.id} (${run.experiment_id}, ${run.status}) branch: ${a.store.getSetting(`git:branch:${run.id}`) ?? "-"} merged: ${a.store.getSetting(`git:merged:${run.id}`) ? "yes" : "no"}`);
    const ch = await g.changes();
    console.log(ch.length ? `Uncommitted:\n  ${ch.slice(0, 30).join("\n  ")}` : "Working tree clean.");
  });
gitCmd
  .command("finalize")
  .description("Commit/push/merge the latest completed run (after fixing a git problem)")
  .option("--run <id>")
  .action(async (o) => {
    const a = app();
    const run = o.run ? a.store.getRun(o.run) : a.store.latestRun();
    if (!run) throw new Error("No run.");
    process.exitCode = (await gitFinalize(a, run)) ? 0 : 1;
  });

program
  .command("start <experimentIdOrBrief>")
  .description("Start a run for ONE explicitly selected experiment (runs in the foreground)")
  .option("--confirm-preconditions","confirm manual Mongoose login/configuration and normal Web Client loaded")
  .action(async (x: string,o) => startRun(app(), x,!!o.confirmPreconditions));

program
  .command("status")
  .description("Show the current run: experiment, state, last action, session, limits, pause reason")
  .option("--run <id>")
  .option("--watch", "refresh every 5 s")
  .option("--json")
  .option("--summary", "task action-audit headlines, coordinator decision and exact resume command")
  .action(async (o) => {
    const a = app();
    const show = () => {
      const run = o.run ? a.store.getRun(o.run) : a.store.latestRun();
      if (o.json) console.log(JSON.stringify(run, null, 2));
      else if(o.summary) console.log(renderSummary(a.store,run));
      else console.log(renderStatus(a.store, run));
    };
    if (!o.watch) return show();
    while (true) {
      process.stdout.write("\x1b[2J\x1b[H");
      show();
      await new Promise((r) => setTimeout(r, 5000));
    }
  });

program
  .command("usage")
  .description("Token usage of Claude worker/role tasks from their saved event logs (read-only; no services, no database)")
  .option("--since <date>", "only task logs modified on or after this date (YYYY-MM-DD)")
  .option("--tasks", "list every task")
  .option("--json")
  .action((o) => {
    const since = o.since ? Date.parse(`${o.since}T00:00:00`) : 0;
    if (Number.isNaN(since)) throw new Error(`Invalid --since date: ${o.since}`);
    const report = collectUsage(resolvePaths(loadConfig(program.opts().config).config).dataDir, since);
    console.log(o.json ? JSON.stringify(report, null, 2) : renderUsage(report, { tasks: !!o.tasks }));
  });

program
  .command("pause")
  .description("Stop sending anything new. An in-flight step keeps its state and is reconciled on resume.")
  .option("--reason <text>", "", "operator pause")
  .action((o) => {
    const a = app();
    const run = currentRun(a);
    if (run.status === "paused") return console.log(`Run ${run.id} is already paused (${run.pause_reason}).`);
    if (controllerAlive(a.store, run.id).alive) {
      a.store.requestControl(run.id, "pause", o.reason);
      console.log(`Pause requested for ${run.id}; the controller pauses at its next safe point.`);
    } else {
      a.store.updateRun(run.id, { status: "paused", pause_reason: "operator_pause", pause_detail: `${o.reason} (controller was not running)` });
      console.log(`Run ${run.id} marked paused (no controller was running).`);
    }
  });

program
  .command("resume")
  .description("Reconcile pending submissions, then continue the paused (or interrupted) run")
  .option("--run <id>")
  .option("--approve <code...>", "approve the specific pending item: scope | candidate | attachment | resubmit | denials")
  .option("--confirm-preconditions","confirm manual Mongoose login/configuration and normal Web Client loaded")
  .option("--continue-after-usage <instruction>","after reset, submit a NEW bounded worker continuation; never replay the old task")
  .option("--continue-chat-after-usage <role>","after reset, explicitly continue the pending Claude coordinator/specialist response")
  .option("--limit <k=v...>", "raise a limit, e.g. --limit maxWorkerTasks=20")
  .option("--reload-brief", "re-read the brief file (same experiment only)")
  .option("--reask [note]", "ask the coordinator to reconsider its last reply")
  .option("--note <text>", "after a coordinator PAUSE, add the operator's decision to the pending resume message")
  .action(async (o) => {
    const a = app();
    const run = currentRun(a, o.run);
    if (run.status === "running" && controllerAlive(a.store, run.id).alive) throw new Error(`Run ${run.id} is already being driven by pid ${controllerAlive(a.store, run.id).pid}.`);
    if (run.status === "running") console.log(`Run ${run.id} was interrupted (no live controller); recovering.`);
    const limits: Record<string, number> = {};
    for (const kv of (o.limit as string[] | undefined) ?? []) {
      const [k, v] = kv.split("=");
      limits[k] = Number(v);
    }
    const loaded = o.reloadBrief ? loadBrief(run.brief_path, a.paths.briefsDir) : undefined;
    // Controller constructed without live adapters just to apply options transactionally.
    const { Controller } = await import("./controller/machine.js");
    const offline = new Controller({ store: a.store, config: a.config, factoryRoot: a.paths.factoryRoot, runsDir: a.paths.runsDir, protocolDir: a.paths.protocolDir, chat: null as never, worker: { newMessageId: () => "" } as never, interpreter: null, log: a.log });
    const notes = offline.applyResumeOptions(run.id, { approve: o.approve, limits, brief: loaded, reask: o.reask,confirmPreconditions:!!o.confirmPreconditions,continueAfterUsage:o.continueAfterUsage,note:o.note });
    notes.forEach((n) => console.log(`- ${n}`));
    if(o.continueChatAfterUsage) {
      const role=o.continueChatAfterUsage;
      const pending=run.pending_op_id?a.store.getOp(run.pending_op_id):null;
      if(!pending||!["coordinator","specialist"].includes(role)||run.pause_reason!=="usage_limit"||pending.kind!==role||!pending.nonce)throw Error("No matching pending Claude chat usage pause");
      const live=await liveController(a,()=>run.id);
      try{const out=await live.claudeChat.continueUsage(role,pending.nonce);if(out.status==="rejected")throw Error(out.detail??"Continuation rejected");await drive(a,run.id,live);}catch(error){await live.close();throw error;}
    }else await drive(a, run.id);
  });

program
  .command("stop")
  .description("End the run permanently (it cannot be resumed). Does not start any other experiment.")
  .option("--abort-worker", "also abort the owned Claude task of this run if one is in flight")
  .option("--reason <text>", "", "operator stop")
  .action(async (o) => {
    const a = app();
    const run = currentRun(a);
    if (o.abortWorker && run.current_session_id) {
      const ok = await new ClaudeWorker({config:a.config,paths:a.paths}).abort(run.current_session_id).catch(() => false);
      console.log(`Abort Claude session ${run.current_session_id}: ${ok ? "requested" : "failed/not running"}`);
    }
    if (controllerAlive(a.store, run.id).alive) {
      a.store.requestControl(run.id, "stop", o.reason);
      console.log(`Stop requested for ${run.id}.`);
    } else {
      a.store.updateRun(run.id, { status: "stopped", pause_reason: "operator_stop", pause_detail: o.reason });
      console.log(`Run ${run.id} stopped.`);
    }
  });

program
  .command("dry-run")
  .description("Exercise routing with fixtures and fake adapters (no ChatGPT, no OpenCode, no Mongoose)")
  .option("--scenario <name>", "only scenarios whose name contains this")
  .option("--keep", "keep temp artifacts for inspection")
  .action(async (o) => {
    process.exitCode = (await dryRun(o.scenario, o.keep)) ? 0 : 1;
  });

const backend = program.command("backend").description("LEGACY OpenCode commands; not used by the Phase 4 controller or Claude worker");
for (const [name, desc] of [
  ["start", "start `opencode serve` on 127.0.0.1 in the factory directory"],
  ["health", "health + ownership report"],
  ["restart", "restart ONLY the harness-owned backend (ends its MCP children incl. its Mongoose browser)"],
  ["stop", "stop the harness-owned backend"],
] as const) {
  backend
    .command(name)
    .description(desc)
    .action(async () => {
      const a = app();
      const r = await a.backend[name]();
      console.log(JSON.stringify(r, null, 2));
      process.exitCode = r.ok === false ? 1 : 0;
    });
}

program
  .command("protocol")
  .description("Print the protocol text exactly as it is sent")
  .argument("<which>", "coordinator | specialist | worker")
  .action((which: string) => {
    const a = app();
    const file = { coordinator: "coordinator-protocol.md", specialist: "specialist-protocol.md", worker: "worker-preamble.md" }[which];
    if (!file) throw new Error("coordinator | specialist | worker");
    console.log(protocolBlock(a.paths.protocolDir, file));
  });

registerShadowCommands(program);

program.parseAsync().catch((e: Error) => {
  console.error(`error: ${e.message}`);
  process.exitCode = 1;
});
