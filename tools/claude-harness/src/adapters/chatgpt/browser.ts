import { chromium, type Browser, type BrowserContext, type Page } from "playwright";
import type { HarnessConfig } from "../../config.js";

/**
 * Owns the harness browser (never the OpenCode Mongoose browser).
 *  - persistent (default): Playwright launches Chrome with a dedicated user-data-dir; you sign in once manually.
 *  - cdp: attach to a Chrome you started with scripts/Start-HarnessChrome.ps1 (DevTools on 127.0.0.1 only).
 */
export class BrowserSession {
  private constructor(
    readonly context: BrowserContext,
    private readonly browser: Browser | null,
    readonly mode: "persistent" | "cdp",
  ) {}

  static async open(cfg: HarnessConfig["browser"]): Promise<BrowserSession> {
    if (cfg.mode === "cdp") {
      const host = new URL(cfg.cdpUrl).hostname;
      if (!["127.0.0.1", "localhost", "::1", "[::1]"].includes(host)) throw new Error("browser.cdpUrl must point to localhost");
      const browser = await chromium.connectOverCDP(cfg.cdpUrl);
      const context = browser.contexts()[0];
      if (!context) throw new Error(`No browser context at ${cfg.cdpUrl}`);
      return new BrowserSession(context, browser, "cdp");
    }
    const context = await chromium
      .launchPersistentContext(cfg.userDataDir, {
        channel: cfg.channel || undefined,
        headless: false,
        viewport: null,
        args: ["--no-first-run", "--no-default-browser-check"],
      })
      .catch((e: Error) => {
        if (/existing browser session|profile is already in use/i.test(e.message)) {
          throw new Error(
            `The harness profile ${cfg.userDataDir} is already open in another Chrome window. ` +
              `Close that window, or, if you started it with scripts\\Start-HarnessChrome.ps1, set "browser": {"mode": "cdp"} in harness.config.json.`,
          );
        }
        throw e;
      });
    context.setDefaultNavigationTimeout(cfg.navigationTimeoutSeconds * 1000);
    return new BrowserSession(context, null, "persistent");
  }

  pages(): Page[] {
    return this.context.pages().filter((p) => !p.isClosed());
  }

  async close(): Promise<void> {
    // persistent: closes the harness Chrome. cdp: only disconnects; the Chrome you started stays open.
    if (this.browser) await this.browser.close();
    else await this.context.close();
  }
}
