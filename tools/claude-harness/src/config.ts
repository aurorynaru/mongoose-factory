import { existsSync, readFileSync } from "node:fs";
import { dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

/** tools/claude-harness (works from both src/ and dist/). */
export const HARNESS_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const LimitsSchema = z.object({
  maxCycles: z.number().int().positive().default(30),
  maxWorkerTasks: z.number().int().positive().default(12),
  maxSpecialistConsultations: z.number().int().nonnegative().default(6),
  maxConsecutiveFailures: z.number().int().positive().default(3),
  maxDurationMinutes: z.number().positive().default(240),
  maxDeepseekCalls: z.number().int().nonnegative().default(10),
  maxDeepseekCostUsd: z.number().nonnegative().default(0.5),
});
export type Limits = z.infer<typeof LimitsSchema>;

export const ConfigSchema = z.object({
  factoryRoot: z.string().min(1).default(resolve(HARNESS_DIR, "..", "..")),
  dataDir: z.string().min(1).default("claude-data"),
  claude: z.object({
    executable: z.string().default("claude"),
    argvPrefix: z.array(z.string()).default([]),
    billing: z.enum(["subscription", "api"]).default("subscription"),
    configDir: z.string().nullable().default(null),
    models: z.object({
      worker: z.object({ model: z.string().default("haiku"), effort: z.enum(["low","medium","high","xhigh","max"]).nullable().default("high") }).prefault({}),
      coordinator: z.object({ model: z.string().default("sonnet"), effort: z.enum(["low","medium","high","xhigh","max"]).nullable().default("high") }).prefault({}),
      specialist: z.object({ model: z.string().default("opus"), effort: z.enum(["low","medium","high","xhigh","max"]).nullable().default("high") }).prefault({}),
    }).prefault({}),
  }).prefault({}),
  worker: z.object({
    allowBash: z.boolean().default(false),
    allowBackendRestart: z.boolean().default(false),
    maxTurns: z.number().int().positive().default(40),
    taskTimeoutMinutes: z.number().positive().default(90),
    maxIdenticalCalls: z.number().int().min(0).max(24).default(6),
    maxSnapshotRefFailures: z.number().int().min(0).max(24).default(6),
    maxRepeatedBrowserReads: z.number().int().min(0).max(24).default(6),
    maxRepeatedShellCalls: z.number().int().min(0).max(24).default(6),
  }).prefault({}),
  mcp: z.object({
    port: z.number().int().min(1024).max(65535).default(8931),
    cdpPort: z.number().int().min(1024).max(65535).default(9224),
    chromeExecutable: z.string().nullable().default(null),
    entrypoint: z.string().nullable().default(null),
    secretsFile: z.string().nullable().default("C:\\AI\\mongoose-secrets\\demo.env"),
    outputDir: z.string().default("evidence/playwright"),
  }).prefault({}),
  browser: z
    .object({
      mode: z.enum(["persistent", "cdp"]).default("persistent"),
      userDataDir: z.string().min(1).default("C:\\AI\\claude-harness-chatgpt-profile"),
      channel: z.string().default("chrome"),
      cdpUrl: z.string().default("http://127.0.0.1:9223"),
      baseUrl: z.string().default("https://chatgpt.com"),
      replyTimeoutMinutes: z.number().positive().default(25),
      submitConfirmSeconds: z.number().positive().default(30),
      stableMs: z.number().int().positive().default(3000),
      maxMessageChars: z.number().int().positive().default(30000),
      navigationTimeoutSeconds: z.number().positive().default(60),
    })
    .prefault({}),
  opencode: z
    .object({
      baseUrl: z.string().default("http://127.0.0.1:4096"),
      port: z.number().int().positive().default(4096),
      passwordEnv: z.string().default("OPENCODE_SERVER_PASSWORD"),
      executable: z.string().nullable().default(null),
      agent: z.string().nullable().default(null),
      model: z.object({ providerID: z.string(), modelID: z.string() }).nullable().default(null),
      taskTimeoutMinutes: z.number().positive().default(90),
      pollIntervalMs: z.number().int().positive().default(3000),
      noResponseGraceSeconds: z.number().positive().default(120),
      /** Missing-reference failures for one snapshot target in the last 24 tool calls; 0 disables. */
      maxSnapshotRefFailures: z.number().int().min(0).max(24).default(6),
      /** Consecutive identical snapshot/evaluate/run-code arguments/results; 0 disables. */
      maxRepeatedBrowserReads: z.number().int().min(0).max(24).default(6),
      /** Consecutive identical completed shell arguments/results; 0 disables. */
      maxRepeatedShellCalls: z.number().int().min(0).max(24).default(6),
      /** Permit one coordinator-directed inspection recovery per run, within normal budgets. */
      autoRecoverInspectionLoops: z.boolean().default(true),
      manageBackend: z.boolean().default(true),
      autoRestartOnFailure: z.boolean().default(true),
    })
    .prefault({}),
  deepseek: z
    .object({
      enabled: z.boolean().default(false),
      apiKeyEnv: z.string().default("DEEPSEEK_API_KEY"),
      baseUrl: z.string().default("https://api.deepseek.com"),
      model: z.string().default("deepseek-chat"),
      inputCostPerMTok: z.number().nonnegative().default(0.27),
      outputCostPerMTok: z.number().nonnegative().default(1.1),
      autoAcceptValidated: z.boolean().default(true),
      timeoutSeconds: z.number().positive().default(60),
    })
    .prefault({}),
  protocol: z
    .object({
      reaskOnInvalid: z.number().int().nonnegative().default(1),
      pauseOnSpecialistAttachmentRequest: z.boolean().default(true),
      /** After a run completes, ask Tab 1 for the next experiment and save it as an UNREVIEWED draft brief. */
      proposeNextOnComplete: z.boolean().default(true),
    })
    .prefault({}),
  chats: z
    .object({
      /** Start every run in a NEW coordinator conversation (context comes from disk, not chat memory). */
      newCoordinatorPerRun: z.boolean().default(true),
      /**
       * Text that must appear in the visible model/effort selector before anything is sent
       * (e.g. "High"). null = no check. The model NAME is not shown without opening the picker.
       */
      expectedModelLabel: z.object({ coordinator: z.string().nullable().default(null), specialist: z.string().nullable().default(null) }).prefault({}),
      /**
       * Model and effort the harness SELECTS (via the visible model menu) in new chats and whenever the
       * label does not match. Names as shown in the menu, e.g. "GPT-5.6 Sol" / "High". null = leave as is.
       */
      desiredModel: z
        .object({
          coordinator: z.object({ model: z.string().nullable().default(null), effort: z.string().nullable().default(null) }).prefault({}),
          specialist: z.object({ model: z.string().nullable().default(null), effort: z.string().nullable().default(null) }).prefault({}),
        })
        .prefault({}),
      autoSelectModel: z.boolean().default(true),
      contextFile: z.string().default("context/coordinator-context.md"),
      maxDigestChars: z.number().int().positive().default(9000),
      maxContextChars: z.number().int().positive().default(14000),
    })
    .prefault({}),
  git: z
    .object({
      /** Per-experiment branch + auto commit/merge in the factory repo (see src/git.ts). */
      enabled: z.boolean().default(false),
      remote: z.string().default("origin"),
      mainBranch: z.string().default("main"),
      push: z.boolean().default(true),
      mergeBlocked: z.boolean().default(true),
    })
    .prefault({}),
  limits: LimitsSchema.prefault({}),
  mongooseBrowserProfile: z.string().default("C:\\AI\\mongoose-playwright-profile"),
});
export type HarnessConfig = z.infer<typeof ConfigSchema>;

export interface ResolvedPaths {
  harnessDir: string;
  factoryRoot: string;
  dataDir: string;
  dbFile: string;
  runsDir: string;
  logFile: string;
  backendStateFile: string;
  backendLogDir: string;
  scriptsDir: string;
  protocolDir: string;
  briefsDir: string;
}

export function resolvePaths(cfg: HarnessConfig, harnessDir = HARNESS_DIR): ResolvedPaths {
  const dataDir = isAbsolute(cfg.dataDir) ? cfg.dataDir : resolve(harnessDir, cfg.dataDir);
  return {
    harnessDir,
    factoryRoot: resolve(cfg.factoryRoot),
    dataDir,
    dbFile: resolve(dataDir, "harness.sqlite"),
    runsDir: resolve(dataDir, "runs"),
    logFile: resolve(dataDir, "logs", "harness.jsonl"),
    backendStateFile: resolve(dataDir, "backend", "backend-state.json"),
    backendLogDir: resolve(dataDir, "backend", "logs"),
    scriptsDir: resolve(harnessDir, "scripts"),
    protocolDir: resolve(harnessDir, "protocol"),
    briefsDir: resolve(harnessDir, "briefs"),
  };
}

export function loadConfig(file?: string): { config: HarnessConfig; file: string | null } {
  const candidate = file ?? resolve(HARNESS_DIR, "harness.config.json");
  if (!existsSync(candidate)) {
    if (file) throw new Error(`Config file not found: ${file}`);
    return { config: ConfigSchema.parse({}), file: null };
  }
  const raw = JSON.parse(readFileSync(candidate, "utf8"));
  delete raw.$comment;
  const parsed = ConfigSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(`Invalid config ${candidate}:\n${parsed.error.issues.map((i) => `  ${i.path.join(".")}: ${i.message}`).join("\n")}`);
  }
  return { config: parsed.data, file: candidate };
}

/** Problems that make the config unsafe to run with. */
export function configProblems(cfg: HarnessConfig): string[] {
  const out: string[] = [];
  const norm = (p: string) => resolve(p).toLowerCase();
  if (norm(cfg.browser.userDataDir) === norm(cfg.mongooseBrowserProfile)) {
    out.push("browser.userDataDir must differ from the OpenCode Mongoose browser profile (mongooseBrowserProfile).");
  }
  if (norm(cfg.browser.userDataDir).startsWith(norm(cfg.factoryRoot))) {
    out.push("browser.userDataDir must be outside factoryRoot so the OpenCode worker cannot read ChatGPT session cookies.");
  }
  for (const url of [cfg.opencode.baseUrl, cfg.browser.mode === "cdp" ? cfg.browser.cdpUrl : null]) {
    if (!url) continue;
    const host = new URL(url).hostname;
    if (!["127.0.0.1", "localhost", "::1", "[::1]"].includes(host)) out.push(`${url} is not bound to localhost.`);
  }
  return out;
}
