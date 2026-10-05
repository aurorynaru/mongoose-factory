import { isAbsolute, join } from "node:path";
import { ChatGptAdapter } from "./adapters/chatgpt/adapter.js";
import { BrowserSession } from "./adapters/chatgpt/browser.js";
import { OpenCodeClient } from "./adapters/opencode/client.js";
import { OpenCodeWorker } from "./adapters/opencode/worker.js";
import type { ChatRole } from "./adapters/types.js";
import { BackendManager } from "./backend/process.js";
import { configProblems, loadConfig, resolvePaths, type HarnessConfig, type ResolvedPaths } from "./config.js";
import { Controller } from "./controller/machine.js";
import { DeepSeekInterpreter } from "./protocol/interpreter.js";
import { Store } from "./store.js";
import { Logger, registerSecret } from "./util/log.js";

export interface App {
  config: HarnessConfig;
  configFile: string | null;
  paths: ResolvedPaths;
  store: Store;
  log: Logger;
  backend: BackendManager;
}

export function openApp(configPath?: string, echoLevel: "debug" | "info" | "warn" = "info"): App {
  const { config, file } = loadConfig(configPath);
  const problems = configProblems(config);
  if (problems.length) throw new Error(`Unsafe configuration:\n - ${problems.join("\n - ")}`);
  const paths = resolvePaths(config);
  registerSecret(process.env[config.opencode.passwordEnv]);
  registerSecret(process.env[config.deepseek.apiKeyEnv]);
  const store = new Store(paths.dbFile);
  const log = new Logger(paths.logFile, true, echoLevel);
  return { config, configFile: file, paths, store, log, backend: new BackendManager(config, paths) };
}

export function contextFilePath(app: App): string {
  return isAbsolute(app.config.chats.contextFile) ? app.config.chats.contextFile : join(app.paths.harnessDir, app.config.chats.contextFile);
}

export function openCodeClient(app: App): OpenCodeClient {
  return new OpenCodeClient({ baseUrl: app.config.opencode.baseUrl, directory: app.paths.factoryRoot, password: process.env[app.config.opencode.passwordEnv] ?? null });
}

export function roleBinding(app: App) {
  return (role: ChatRole) => {
    const r = app.store.getRole(role);
    return r ? { url: r.url, conversationId: r.conversation_id, gptId: r.gpt_id } : null;
  };
}

export function chatAdapter(app: App, browser: BrowserSession, runId: () => string | null): ChatGptAdapter {
  const b = app.config.browser;
  return new ChatGptAdapter({
    pages: () => browser.pages(),
    newPage: () => browser.context.newPage(),
    roles: roleBinding(app),
    log: app.log,
    submitConfirmMs: b.submitConfirmSeconds * 1000,
    stableMs: b.stableMs,
    navigationTimeoutMs: b.navigationTimeoutSeconds * 1000,
    expectedModelLabel: (role) => app.config.chats.expectedModelLabel[role],
    desiredModel: (role) => app.config.chats.desiredModel[role],
    autoSelectModel: app.config.chats.autoSelectModel,
    artifactDir: () => {
      const id = runId();
      return id ? join(app.paths.runsDir, id, "screenshots") : join(app.paths.dataDir, "screenshots");
    },
  });
}

export interface LiveController {
  controller: Controller;
  chat: ChatGptAdapter;
  worker: OpenCodeWorker;
  browser: BrowserSession;
  close(): Promise<void>;
}

/** Build the real adapters. Starts the harness-owned OpenCode backend if configured to manage it. */
export async function liveController(app: App, currentRun: () => string | null): Promise<LiveController> {
  const { config } = app;
  if (config.opencode.manageBackend) {
    const r = await app.backend.start();
    if (!r.ok) throw new Error(`OpenCode backend not available: ${JSON.stringify(r)}`);
    app.log.log("info", "backend.ready", { action: r.action, pid: r.pid, version: r.version });
  }
  const client = openCodeClient(app);
  const worker = new OpenCodeWorker({
    client,
    agent: config.opencode.agent,
    model: config.opencode.model,
    pollIntervalMs: config.opencode.pollIntervalMs,
    noResponseGraceMs: config.opencode.noResponseGraceSeconds * 1000,
    maxSnapshotRefFailures: config.opencode.maxSnapshotRefFailures,
    maxRepeatedBrowserReads: config.opencode.maxRepeatedBrowserReads,
    log: app.log,
    restartOwned: async () => {
      if (!config.opencode.manageBackend) return false;
      const r = await app.backend.restart();
      app.log.log(r.ok ? "info" : "error", "backend.restarted", r);
      return r.ok === true;
    },
  });
  const h = await worker.health();
  if (!h.ok) throw new Error(`OpenCode at ${config.opencode.baseUrl} is not healthy: ${h.detail ?? ""}`);

  let interpreter: DeepSeekInterpreter | null = null;
  if (config.deepseek.enabled) {
    const key = process.env[config.deepseek.apiKeyEnv];
    if (!key) throw new Error(`deepseek.enabled is true but ${config.deepseek.apiKeyEnv} is not set`);
    interpreter = new DeepSeekInterpreter(config.deepseek, key);
  }

  const browser = await BrowserSession.open(config.browser);
  const chat = chatAdapter(app, browser, currentRun);
  const controller = new Controller({
    store: app.store,
    config,
    factoryRoot: app.paths.factoryRoot,
    runsDir: app.paths.runsDir,
    protocolDir: app.paths.protocolDir,
    contextFile: contextFilePath(app),
    chat,
    worker,
    interpreter,
    log: app.log,
  });
  return { controller, chat, worker, browser, close: () => browser.close() };
}
