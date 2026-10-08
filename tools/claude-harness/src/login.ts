import { spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import type { App } from "./app.js";

export function findChrome(): string | null {
  const candidates = [
    join(process.env.ProgramFiles ?? "C:\\Program Files", "Google\\Chrome\\Application\\chrome.exe"),
    join(process.env["ProgramFiles(x86)"] ?? "C:\\Program Files (x86)", "Google\\Chrome\\Application\\chrome.exe"),
    join(process.env.LOCALAPPDATA ?? "", "Google\\Chrome\\Application\\chrome.exe"),
  ];
  return candidates.find((c) => existsSync(c)) ?? null;
}

/**
 * Open a plain Chrome (NOT launched by Playwright: no automation flags, no DevTools port) on the
 * dedicated harness profile so you can sign in to ChatGPT yourself. The harness never sees or types
 * credentials; it only reuses the resulting browser session afterwards.
 */
export async function login(app: App): Promise<void> {
  const chrome = findChrome();
  if (!chrome) throw new Error("chrome.exe not found");
  const profile = app.config.browser.userDataDir;
  mkdirSync(profile, { recursive: true });
  console.log(`Opening a normal Chrome window with the harness profile:\n  ${profile}\n
Sign in to ChatGPT there yourself, open your two conversations once if you like,
then CLOSE THAT CHROME WINDOW. The harness continues when Chrome exits.
(Close any other harness browser window first; one profile can only be open once.)`);
  await new Promise<void>((resolve, reject) => {
    const child = spawn(chrome, [`--user-data-dir=${profile}`, "--no-first-run", "--no-default-browser-check", app.config.browser.baseUrl], { stdio: "ignore" });
    child.on("error", reject);
    child.on("exit", () => resolve());
  });
  console.log("Chrome closed. Next: harness setup (it reuses this signed-in profile).");
}
