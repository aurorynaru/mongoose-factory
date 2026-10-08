import { execFile, spawn } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { HarnessConfig, ResolvedPaths } from "../config.js";

/**
 * Invokes the fixed PowerShell scripts in scripts/. Arguments are passed as an argv
 * array (no shell string), and only values from the harness config are used — never
 * text received from ChatGPT or DeepSeek.
 */
export class BackendManager {
  private shell: string | null = null;
  constructor(
    private readonly cfg: HarnessConfig,
    private readonly paths: ResolvedPaths,
  ) {}

  private async pickShell(): Promise<string> {
    if (this.shell) return this.shell;
    this.shell = await new Promise<string>((res) => execFile("pwsh", ["-NoProfile", "-Command", "$PSVersionTable.PSVersion.Major"], (err) => res(err ? "powershell.exe" : "pwsh")));
    return this.shell;
  }

  /**
   * The script reports through -ResultFile and we wait for the PowerShell process to EXIT, not for
   * its pipes to close: on Windows, Start-Process lets opencode.exe inherit the script's stdio
   * handles, so pipe-based waiting would block until OpenCode itself exits.
   */
  private async run(script: string, args: string[], timeoutMs = 120_000): Promise<Record<string, unknown>> {
    const file = join(this.paths.scriptsDir, script);
    if (!existsSync(file)) throw new Error(`missing script ${file}`);
    const shell = await this.pickShell();
    const resultDir = mkdtempSync(join(tmpdir(), "harness-ps-"));
    const resultFile = join(resultDir, "result.json");
    try {
      const code = await new Promise<number | null>((resolve) => {
        const child = spawn(shell, ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File", file, ...args, "-ResultFile", resultFile], {
          stdio: "ignore",
          windowsHide: true,
        });
        const timer = setTimeout(() => {
          child.kill();
          resolve(null);
        }, timeoutMs);
        child.on("error", () => {
          clearTimeout(timer);
          resolve(-1);
        });
        child.on("exit", (c) => {
          clearTimeout(timer);
          resolve(c);
        });
      });
      if (!existsSync(resultFile)) return { ok: false, error: code === null ? "script_timeout" : "script_no_result", exitCode: code };
      try {
        return JSON.parse(readFileSync(resultFile, "utf8").replace(/^﻿/, ""));
      } catch (e) {
        return { ok: false, error: "script_output_unparseable", detail: (e as Error).message };
      }
    } finally {
      rmSync(resultDir, { recursive: true, force: true });
    }
  }

  private common(): string[] {
    const a = ["-Port", String(this.cfg.opencode.port), "-ProjectDir", this.paths.factoryRoot, "-StateFile", this.paths.backendStateFile, "-LogDir", this.paths.backendLogDir, "-PasswordEnv", this.cfg.opencode.passwordEnv];
    if (this.cfg.opencode.executable) a.push("-Executable", this.cfg.opencode.executable);
    return a;
  }

  start() {
    return this.run("Start-HarnessBackend.ps1", this.common());
  }
  restart() {
    return this.run("Restart-HarnessBackend.ps1", this.common());
  }
  stop() {
    return this.run("Stop-HarnessBackend.ps1", ["-StateFile", this.paths.backendStateFile]);
  }
  health() {
    return this.run("Get-HarnessBackendHealth.ps1", ["-Port", String(this.cfg.opencode.port), "-StateFile", this.paths.backendStateFile, "-PasswordEnv", this.cfg.opencode.passwordEnv], 30_000);
  }
}
