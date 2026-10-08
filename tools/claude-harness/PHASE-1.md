# Phase 1: baseline fork and CDP persistence assessment

Date: 2026-10-08, Asia/Singapore. Branch: `claude-harness`.
Status: Phase 1 complete; **STOP before Phase 2**.

## Changes and commit order

1. `09469ad`: amended PLAN.md for all operator changes, before Phase 1 work.
2. `6f8b8f5`: committed 18 existing operator documentation files as-is, separately:
   docs/mongoose/sources.md, structured/raw transcripts, docs/prompts/.
3. Phase 1 commit: forked the current learning-harness working tree into this
   directory. Excluded node_modules, dist, data, local harness.config.json and
   any Claude runtime directory. Retained controller, protocol, SQLite store,
   fakes, existing adapters, briefs/context and baseline scenarios.

Renamed package to mongoose-claude-harness, bin/CLI to claude-harness, and wrapper
to claude-harness.ps1. Updated old harness path literals, including DEV_PREFIX
and DEV_ALLOWED in src/git.ts, copied Git fixtures and documentation. Default
runtime directory and example config now use claude-data; generated dependencies,
build output, runtime and machine config are ignored locally. Claude adapters,
model defaults, guard implementation, MCP/Chrome ownership scripts and the
standalone worker command remain future-phase work. The README labels inherited
live commands as baseline commands; none were invoked.

Byte-hash verification found zero changes to all 153 inspected source-harness
files (excluding dependency/build/runtime directories), and zero changes to all
18 operator documentation files. The six pre-existing old-harness modifications
remain unstaged and uncommitted. No factory branch was pushed or merged.

## CDP finding: use CDP and drop the gateway

**Installed-source conclusion:** when the last browser-backed MCP client closes,
MCP calls context.close and browser.close, but in external-Chrome CDP mode the
default context close reaches a CDP transport disconnect. It does not send
Target.disposeBrowserContext for the default context or close the Chrome process
or pages. Playwright's local browser/context/page objects are invalidated;
the underlying Chrome default context and its pages remain alive.

Version: @playwright/mcp 0.0.83, Playwright core
1.64.0-alpha-1790635538000, as inspected in Phase 0. The source package entrypoint
delegates to the installed Playwright core bundle. All bundle line references
below use this exact file:

```text
C:\Users\juara\AppData\Local\npm-cache\_npx\9833c18b2d85bc59\node_modules\playwright-core\lib\coreBundle.js
SHA256: cd6730be1bbcff00771a0fc1390f200306d28428ce68e305420ca623cb39cdeb
```

| Installed source location | Decisive behavior |
|---|---|
| [coreBundle.js:75566](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:75566), config mapping at 74410 | Advertises --cdp-endpoint and maps it to browser.cdpEndpoint. |
| [coreBundle.js:73884](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:73884) | MCP server close disposes its backend; tools/list alone does not instantiate one (73877–73910). |
| [coreBundle.js:67539](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:67539) | Backend disposes its MCP Context, then invokes the factory cleanup callback. |
| [coreBundle.js:66803](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:66803) | MCP Context.dispose stops recordings and disposes tab wrappers/listeners; it does not call page.close. |
| [coreBundle.js:66361](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:66361) | Tab.dispose releases disposables and stops its console log; it does not close the page. |
| [coreBundle.js:75360](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:75360) | CDP browser is marked attached; createCDPBrowser calls chromium.connectOverCDP with noDefaults:true (75411–75420). |
| [coreBundle.js:75625](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:75625) | Non-isolated MCP selects the existing first context; isolated mode creates a new one. |
| [coreBundle.js:75634](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:75634) | Last-client cleanup explicitly calls context.close, browser.close and shared browser.close (75651–75657). The method names alone do not establish Chrome termination. |
| [coreBundle.js:39633](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:39633) | CDP's persistent default context is created without a browserContextId. |
| [coreBundle.js:40013](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:40013) | Chromium context doClose returns close-browser when there is no context ID. Target.disposeBrowserContext applies only to a context with an ID. |
| [coreBundle.js:53215](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:53215) | Context close-browser disposition invokes browser.close. |
| [coreBundle.js:53994](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:53994) | Browser close calls its configured browserProcess.close. |
| [coreBundle.js:44371](/C:/Users/juara/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core/lib/coreBundle.js:44371), 44389–44418 | CDP browserProcess.close/kill are doClose, which closes the WebSocket transport and cleans temporary artifacts; no Chrome termination or page-close command. |

The installed bundle identifies original modules for these blocks:
tools/mcp/program.ts, tools/mcp/browserFactory.ts, tools/mcp/browserBackend.ts,
tools/mcp/browser/context.ts, tools/mcp/browser/tab.ts, server/chromium/crBrowser.ts,
server/chromium/chromium.ts, server/browserContext.ts and server/browser.ts.
Line numbers above refer to the installed bundle, not uninspected upstream files.

Ownership precedent in
[Start-HarnessChrome.ps1](/C:/AI/mongoose-factory/tools/learning-harness/scripts/Start-HarnessChrome.ps1:21):
lines 21–24 reject the default profile and the existing Mongoose profile;
line 32 rejects an occupied port; lines 35–37 launch with loopback-only debugging
and an explicit dedicated user-data directory. This script was read only. Its
ChatGPT startup URL/profile are inherited baseline details and will be replaced
when implementing the separately owned Chrome pattern.

Selected future design: external, harness-owned Chrome with dedicated profile,
loopback CDP endpoint, and owned MCP HTTP service using --cdp-endpoint. No gateway
or retained upstream MCP session. Do not use --isolated or create an ephemeral
context: Chromium creates those with disposeOnDetach:true (39652–39655), and
explicit close disposes them. Do not treat reconnect as preservation of MCP
current-tab metadata or accessibility references: inspect the visible active
tab/scope freshly before a task. Explicit browser/page tools, lifecycle actions,
Chrome restarts and process termination are outside this disconnect finding.

Trust: **observed source behavior**, with a derived lifecycle conclusion. No
browser was launched or contacted; physical browser persistence, authentication,
page selection and Mongoose session continuity remain unverified live.

## Validation and omissions

Observed command results in tools/claude-harness:

```text
npm ci --ignore-scripts --no-audit --no-fund
added 50 packages in 6s; exit 0

npm run build
tsc -p tsconfig.json; exit 0

HARNESS_BROWSER_TESTS=0 HARNESS_SMOKE=0 npm test
Test Files  10 passed (10)
Tests       181 passed (181)
Duration    14.92s; exit 0

npm run typecheck
tsc -p tsconfig.json --noEmit; exit 0

npm run dry-run
Dry-run: 17 scenario(s) against fakes (no live submissions).
All scenarios passed.; exit 0

.\claude-harness.ps1 --help
Usage: claude-harness [options] [command]; exit 0

ConfigSchema.parse({}) / resolvePaths
dataDir=claude-data
resolved=C:\AI\mongoose-factory\tools\claude-harness\claude-data
```

Existing fake/core tests cover routing, protocol/evidence/completion guards,
recovery, SQLite state, Git boundaries, proposal/context/autopilot behavior,
mocked OpenCode transport and frozen shadow comparisons. Git tests use scratch
repositories and scratch local bare remotes only; their push/merge output does
not refer to the factory branch. Dry-run records/evidence are scratch fixtures.

Explicitly omitted, preserved behind opt-in in vitest.config.ts:
test/browser/chatgpt-adapter.test.ts, test/browser/newchat.test.ts and
test/smoke/backend.smoke.test.ts. Browser fixtures launch headless Chrome, so
they were not run even though their pages are routed fixtures. No real model,
browser, backend server, secrets-file read or Mongoose action occurred.

Install correction: an initial npm ci invoked from the repository root failed
for lack of a root lockfile and installed nothing. In the new harness, plain
npm ci attempted node-gyp rebuild for better-sqlite3 and failed because Visual
C++ tooling is absent. The locked package ships platform binaries. Reinstall
with --ignore-scripts succeeded; passing SQLite-backed tests establish that its
packaged win32-x64 binary works on Node 24.11.1. No dependency version changed,
no compiler was installed, and no global Node version/configuration changed.

Staging audit: only tools/claude-harness paths were staged for the Phase 1 commit;
no dependency/build/runtime files or old-harness changes. The copied historical
context includes pre-existing whitespace-only lines flagged by git diff --check;
the byte-identical copied test/proposal.test.ts also has an inherited whitespace
finding. These baseline contents were preserved rather than reformatted. The
217 findings are confined to those baseline files, not newly written logic/docs.

No Phase 2 service/gateway/CDP scripts or Phase 3 adapters were implemented.
The next permitted action requires operator continuation after this report.
