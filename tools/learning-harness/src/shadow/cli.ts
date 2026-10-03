import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { randomUUID } from "node:crypto";
import { Command, InvalidArgumentError } from "commander";
import { OpenCodeClient, type OcMessage } from "../adapters/opencode/client.js";
import { loadConfig, resolvePaths } from "../config.js";
import { registerSecret } from "../util/log.js";
import { captureDataset, loadDataset, writeDatasetReview } from "./dataset.js";
import { compareResults, gradeResult, loadResult, writeReport } from "./report.js";
import { loadShadowModel, runShadow } from "./runner.js";

const integer = (value: string) => { if (!/^\d+$/.test(value) || !Number.isSafeInteger(Number(value))) throw new InvalidArgumentError("Expected a nonnegative integer"); return Number(value); };
const number = (value: string) => { const n = Number(value); if (!value.trim() || !Number.isFinite(n)) throw new InvalidArgumentError("Expected a finite number"); return n; };
const safeName = (value: string) => { if (!/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(value)) throw new Error("Names and run IDs may contain only letters, digits, hyphens and underscores"); return value; };

export function registerShadowCommands(program: Command): void {
  // Deliberately do not call openApp: shadow commands never open the controller database or browser.
  const settings = () => {
    const { config } = loadConfig(program.opts().config), paths = resolvePaths(config);
    registerSecret(process.env[config.opencode.passwordEnv]);
    // Only inspect environment references in provider API-key settings; never read credential files.
    const modelConfig = join(paths.factoryRoot, "opencode.json");
    const raw = JSON.parse(readFileSync(modelConfig, "utf8"));
    for (const p of Object.values(raw.provider ?? {}) as Array<{ options?: { apiKey?: string } }>) {
      const match = p.options?.apiKey?.match(/^\{env:([A-Za-z_][A-Za-z0-9_]*)\}$/);
      if (match) registerSecret(process.env[match[1]]);
    }
    return { config, paths, modelConfig, root: join(paths.dataDir, "shadow") };
  };
  const datasetPath = (root: string, name: string) => existsSync(name) ? resolve(name) : join(root, "datasets", `${safeName(name)}.json`);
  const resultPath = (root: string, name: string) => existsSync(name) ? resolve(name) : join(root, "runs", safeName(name));
  const shadow = program.command("shadow").description("Frozen worker-checkpoint comparisons: local models, no tool execution or live browser");

  shadow.command("capture").description("Capture past observations and withheld replies from archived OpenCode sessions")
    .requiredOption("--run <id>", "source harness run ID")
    .requiredOption("--name <name>", "new dataset name")
    .option("--export <file>", "offline opencode export JSON (one session), instead of reading the backend")
    .option("--history <mode>", "task: bounded task plus prior reports; session: full prefix", "task")
    .option("--max-cases <n>", "evenly sample up to this many checkpoints", integer, 12)
    .option("--max-context-chars <n>", "skip oversized prefixes; never silently truncate observations", integer, 240000)
    .option("--max-images <n>", "skip checkpoints with more prior screenshots", integer, 12)
    .action(async o => {
      const { config, paths, root } = settings();
      const runId = safeName(o.run), name = safeName(o.name), target = join(root, "datasets", `${name}.json`);
      if (existsSync(target)) throw new Error("Dataset already exists; use a new name to preserve frozen inputs");
      if (o.maxCases < 1 || o.maxCases > 100 || o.maxContextChars < 1 || o.maxImages > 100) throw new Error("Invalid capture limits (cases 1..100, positive context size, images 0..100)");
      if (!["task", "session"].includes(o.history)) throw new Error("History mode must be task or session");
      const events = readFileSync(join(paths.runsDir, runId, "events.jsonl"), "utf8").split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
      const sessions = [...new Set(events.filter(e => ["worker.session_created", "worker.submit"].includes(e.event)).map(e => e.session).filter((id): id is string => typeof id === "string"))];
      if (!sessions.length) throw new Error("No archived worker session IDs in this run's events");
      const sources: Array<{ runId: string; sessionId: string; messages: OcMessage[] }> = [];
      if (o.export) {
        const file = JSON.parse(readFileSync(resolve(o.export), "utf8"));
        const sessionId = file.info?.id;
        if (!sessions.includes(sessionId) || !Array.isArray(file.messages)) throw new Error("Export must contain a worker session belonging to this run");
        sources.push({ runId, sessionId, messages: file.messages });
      } else {
        const client = new OpenCodeClient({ baseUrl: config.opencode.baseUrl, directory: paths.factoryRoot, password: process.env[config.opencode.passwordEnv] });
        for (const sessionId of sessions) {
          const messages = await client.listMessages(sessionId);
          if (!messages?.length) throw new Error(`Archived session ${sessionId} unavailable; provide --export`);
          sources.push({ runId, sessionId, messages });
        }
      }
      const dataset = captureDataset(name, sources, { maxCases: o.maxCases, maxContextChars: o.maxContextChars, maxImages: o.maxImages, historyMode: o.history });
      mkdirSync(resolve(target, ".."), { recursive: true });
      writeFileSync(target, JSON.stringify(dataset, null, 2) + "\n", { encoding: "utf8", flag: "wx" });
      const review = join(root, "datasets", `${name}.review.md`); writeDatasetReview(review, dataset);
      console.log(`Saved ${dataset.cases.length} cases from ${dataset.capture.eligible} eligible checkpoints; ${dataset.capture.skipped} skipped by limits.\n${target}\nReview inputs and screenshots: ${review}\nBaseline replies are not ground truth.`);
    });

  shadow.command("inspect").description("List frozen case IDs and sizes without starting a model")
    .requiredOption("--dataset <name-or-file>")
    .action(o => {
      const { root } = settings(), d = loadDataset(datasetPath(root, o.dataset));
      console.log(`Dataset ${d.name}: ${d.cases.length} checkpoints`);
      for (const c of d.cases) console.log(`${c.id}  ${c.source.taskId}  ${c.context.length} chars  ${c.images.length} image(s)  source ${c.source.baselineModel}`);
    });

  shadow.command("run").description("Request next-action proposals from one local model; persist each trial without executing it")
    .requiredOption("--dataset <name-or-file>")
    .requiredOption("--model <provider/model>")
    .option("--case <ids...>", "run only specified case IDs")
    .option("--repeats <n>", "independent trials per case, 1..10", integer, 1)
    .option("--max-tokens <n>", "output token cap, 1..32768", integer, 4096)
    .option("--timeout-seconds <n>", "per-request timeout", integer, 180)
    .option("--temperature <n>", "common temperature, 0..2", number, 0)
    .action(async o => {
      const { root, modelConfig } = settings();
      const dataset = loadDataset(datasetPath(root, o.dataset)), model = loadShadowModel(modelConfig, o.model);
      if (o.case) {
        if (o.case.some((id: string) => !dataset.cases.some(c => c.id === id))) throw new Error("Unknown dataset case ID");
        dataset.cases = dataset.cases.filter(c => o.case.includes(c.id));
      }
      const id = `S-${new Date().toISOString().replace(/[-:.TZ]/g, "")}-${randomUUID().slice(0, 8)}`, out = join(root, "runs", id);
      const abort = new AbortController(), stop = () => abort.abort();
      process.on("SIGINT", stop);
      console.log(`Shadow ${id}: ${dataset.cases.length} cases x ${o.repeats} trial(s), model ${model.id}. Proposed actions will not execute.\n${out}`);
      try {
        const result = await runShadow(dataset, model, out, { repeats: o.repeats, maxTokens: o.maxTokens, temperature: o.temperature, timeoutMs: o.timeoutSeconds * 1000, signal: abort.signal },
          { onTrial: t => console.log(`${t.caseId} #${t.repeat}: ${t.status}, ${(t.durationMs / 1000).toFixed(1)}s`) });
        writeReport(out, result);
        console.log(`Saved result.json, dataset.json and report.md. Correctness and safety remain ungraded until reviewed.`);
        process.exitCode = abort.signal.aborted ? 130 : result.trials.some(t => t.status !== "completed") ? 1 : 0;
      } finally { process.off("SIGINT", stop); }
    });

  shadow.command("grade").description("Record an evidence-based human review; no model judge or automatic quality claims")
    .requiredOption("--result <id-or-directory>").requiredOption("--case <id>")
    .option("--repeat <n>", "trial number", integer, 1)
    .requiredOption("--correctness <n>", "0 wrong, 1 partial, 2 correct", integer)
    .requiredOption("--evidence <n>", "0 unsupported, 1 incomplete, 2 sufficient", integer)
    .requiredOption("--safety <pass-or-fail>")
    .requiredOption("--reviewer <name>").requiredOption("--note <text>")
    .action(o => {
      const { root } = settings(), out = resultPath(root, o.result);
      gradeResult(out, o.case, o.repeat, { correctness: o.correctness, evidence: o.evidence, safety: o.safety, reviewer: o.reviewer, note: o.note });
      console.log(`Review saved; report updated: ${join(out, "report.md")}`);
    });

  shadow.command("compare").description("Compare two finished runs with identical frozen inputs and common limits")
    .argument("<left>", "result ID or directory").argument("<right>", "result ID or directory")
    .action((left: string, right: string) => {
      const { root } = settings();
      const text = compareResults(loadResult(resultPath(root, left)), loadResult(resultPath(root, right)));
      const out = join(root, "comparisons", `${randomUUID()}.md`);
      mkdirSync(resolve(out, ".."), { recursive: true }); writeFileSync(out, text, "utf8");
      console.log(text + `\nSaved ${out}`);
    });
}
