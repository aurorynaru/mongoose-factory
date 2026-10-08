# Phase 2: owned Chrome and MCP over CDP

Date: 2026-10-08. Source-based CDP decision accepted by operator.
No gateway. Implementation and scratch persistence check complete; scratch
profile deletion is pending because automatic approval review rejected both
recursive and narrower per-entry PowerShell deletion as "blocked by policy".
Chrome/MCP are stopped; no listening scratch ports remain. This is a cleanup
limitation, not permission to retry the browser launch.

## Changes

- src/backend/mcp-service.ts: separate Chrome/MCP ownership; fixed config-only
  argument arrays, loopback HTTP MCP attached to external Chrome, no isolated
  context or MCP user-data-dir, explicit generated worker MCP config. Health
  checks process identity/port plus initialize/tools/list; never a browser tool.
- scripts/OwnedService.ps1 and OwnedService.Common.ps1: start/health/stop/restart,
  PID/executable/start-time/command hash/port and request-scope checks; refuse
  stale state, unowned listeners, concurrent starts, wrong factory/configuration.
  Independent trees: MCP restart never restarts Chrome. Partial startup cleans
  an identified owned process. Unknown ownership is preserved for inspection.
- Named Chrome/MCP lifecycle wrappers, including replaced Start-HarnessChrome.
  Production profile comes from mongooseBrowserProfile, default
  C:\AI\mongoose-playwright-profile. Refuse its use by other Chrome processes,
  reject default Chrome profile/children and reparse-point profile paths. No
  rejection merely because it is the configured Mongoose profile.
- Config/schema/example MCP ports/paths, CLI chrome/mcp lifecycle commands,
  pinned @playwright/mcp 0.0.83 and @modelcontextprotocol/sdk 1.32.1, fake MCP
  process fixture and ownership tests. Existing coordinator transport is retained
  until Phase 4; production replay uses the forthcoming standalone worker path.
- scripts/phase2-scratch-check.mjs: explicit one-off opt-in, exclusive launch
  marker to prevent blind replay after interruption; not in npm test.

## Live scratch check and exact output

Command: node scripts/phase2-scratch-check.mjs --authorized-scratch-check
Exit 0. One hidden owned Chrome, SCRATCH user data, startup URL about:blank;
one owned MCP over HTTP/CDP, secretsFile=null. One browser_tabs(action=new)
call opened the second about:blank tab. The only MCP client explicitly deleted
its session and closed. After 1.5 seconds /json still returned both identical
page IDs; ownership health established Chrome process/loopback port were alive.
Owned MCP and Chrome trees then stopped successfully. No Mongoose URL, login,
secrets file, model call, second browser launch or production profile access.

The following is the exact recorded JSONL output, including all /json fields:

```jsonl
{"label":"chrome_start","value":{"pid":34136,"port":56004,"kind":"chrome","ok":true,"action":"started"}}
{"label":"cdp_before","value":[{"description":"","devtoolsFrontendUrl":"https://chrome-devtools-frontend.appspot.com/serve_rev/@b859317bf11f6be47f9b7799ec690a0a42a1fb33/inspector.html?ws=127.0.0.1:56004/devtools/page/3FDE74037F561520A764A757D3A36914","id":"3FDE74037F561520A764A757D3A36914","title":"about:blank","type":"page","url":"about:blank","webSocketDebuggerUrl":"ws://127.0.0.1:56004/devtools/page/3FDE74037F561520A764A757D3A36914"}]}
{"label":"mcp_start","value":{"ok":true,"kind":"mcp","action":"started","pid":26460,"port":56003}}
{"label":"mcp_new_blank_tab","value":{"content":[{"type":"text","text":"### Result\n- 0: [](about:blank)\n- 1: (current) [](about:blank)"}]}}
{"label":"cdp_two_tabs_before_disconnect","value":[{"description":"","devtoolsFrontendUrl":"https://chrome-devtools-frontend.appspot.com/serve_rev/@b859317bf11f6be47f9b7799ec690a0a42a1fb33/inspector.html?ws=127.0.0.1:56004/devtools/page/5D6698B4ABC7BCF87480C394E0F63CF6","id":"5D6698B4ABC7BCF87480C394E0F63CF6","title":"about:blank","type":"page","url":"about:blank","webSocketDebuggerUrl":"ws://127.0.0.1:56004/devtools/page/5D6698B4ABC7BCF87480C394E0F63CF6"},{"description":"","devtoolsFrontendUrl":"https://chrome-devtools-frontend.appspot.com/serve_rev/@b859317bf11f6be47f9b7799ec690a0a42a1fb33/inspector.html?ws=127.0.0.1:56004/devtools/page/3FDE74037F561520A764A757D3A36914","id":"3FDE74037F561520A764A757D3A36914","title":"about:blank","type":"page","url":"about:blank","webSocketDebuggerUrl":"ws://127.0.0.1:56004/devtools/page/3FDE74037F561520A764A757D3A36914"}]}
{"label":"last_client_disconnected","value":{"sessionDeleted":true,"clientClosed":true}}
{"label":"cdp_after_last_disconnect","value":[{"description":"","devtoolsFrontendUrl":"https://chrome-devtools-frontend.appspot.com/serve_rev/@b859317bf11f6be47f9b7799ec690a0a42a1fb33/inspector.html?ws=127.0.0.1:56004/devtools/page/5D6698B4ABC7BCF87480C394E0F63CF6","id":"5D6698B4ABC7BCF87480C394E0F63CF6","title":"about:blank","type":"page","url":"about:blank","webSocketDebuggerUrl":"ws://127.0.0.1:56004/devtools/page/5D6698B4ABC7BCF87480C394E0F63CF6"},{"description":"","devtoolsFrontendUrl":"https://chrome-devtools-frontend.appspot.com/serve_rev/@b859317bf11f6be47f9b7799ec690a0a42a1fb33/inspector.html?ws=127.0.0.1:56004/devtools/page/3FDE74037F561520A764A757D3A36914","id":"3FDE74037F561520A764A757D3A36914","title":"about:blank","type":"page","url":"about:blank","webSocketDebuggerUrl":"ws://127.0.0.1:56004/devtools/page/3FDE74037F561520A764A757D3A36914"}]}
{"label":"chrome_after_last_disconnect","value":{"ok":true,"state":{"startTicks":"639270706493992720","requestHash":"aa57a31c9042bff126b4144fd91cc5bfe754e88727dc719e38bf9564f55a6a76","pid":34136,"profile":"C:\\AI\\mongoose-factory\\tools\\claude-harness\\claude-data\\phase2-scratch\\profile","commandHash":"16E1A32E9B71F392D6F159F782918D25DDCEB65660B0B635CDCEDBD3394E2F83","port":56004,"exe":"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe","cwd":"C:\\AI\\mongoose-factory","kind":"chrome"},"kind":"chrome","owned":true}}
{"label":"persistence_result","value":{"chromeAlive":true,"originalTabAlive":true,"secondTabAlive":true,"pageCount":2}}
{"label":"mcp_stop","value":{"ok":true,"action":"stopped","kind":"mcp","pid":26460}}
{"label":"chrome_stop","value":{"pid":34136,"kind":"chrome","ok":true,"action":"stopped"}}
```

Cleanup verification: Chrome PID 34136 and MCP PID 26460 absent; ports 56003/56004 have no listener. Scratch profile remains at C:\AI\mongoose-factory\tools\claude-harness\claude-data\phase2-scratch\profile. Automatic approval review rejected deletion with "blocked by policy" without a more specific reason. Do not relaunch the scratch check.

## Validation and known limits

Actual command output:

```text
npm install --save-exact @playwright/mcp@0.0.83 @modelcontextprotocol/sdk --ignore-scripts --no-audit --no-fund
added 96 packages in 8s; exit 0 (SDK resolved/pinned to 1.32.1)
node node_modules/@playwright/mcp/cli.js --version
Version 0.0.83
node node_modules/@playwright/mcp/cli.js --help
Confirmed: --host, --port, --allowed-hosts, --cdp-endpoint, --idle-timeout,
--output-dir, --secrets. --secrets omitted entirely from scratch argv.
npm run build
tsc -p tsconfig.json; exit 0
npm run typecheck
tsc -p tsconfig.json --noEmit; exit 0
npx vitest run test/mcp-service.test.ts
Test Files 1 passed (1); Tests 6 passed (6); Duration 10.09s; exit 0
HARNESS_BROWSER_TESTS=0 HARNESS_SMOKE=0 npm test
Test Files 11 passed (11); Tests 187 passed (187); Duration 13.71s; exit 0
```

Fake-process tests cover owned start/idempotence/health/stop, MCP handshake,
stale start-time refusal without stopping the fake server, unowned listeners,
factory/config scope mismatch and default/in-use profile rejection with mocked
CIM data. No additional browsers were launched. Core/controller baseline still
passes. Browser fixture and real OpenCode smoke suites remain excluded.

Live result is **observed once**, not a repeatably verified Mongoose procedure.
No login, production-profile persistence, real Claude client lifecycle or
Mongoose authentication/session continuity was tested. Production profile-in-use
checks are source/test based, not a test against a running OpenCode browser.

Known risk: any local process that can reach the CDP port controls the logged-in
session. Loopback binding prevents remote network exposure, not access by other
local processes. Keep worker Bash denied by default and stop owned Chrome when
not in use. Disconnect dismisses beforeunload dialogs; every worker task must
finish stable, with no open dialogs/unsaved prompts, and begin with a fresh
snapshot confirming the visible tab, Form identity and scope. MCP tab-selection
metadata/accessibility references do not persist across clients. Health checks
must never normalize or navigate the browser. Chrome/MCP start are explicit
operator actions; worker creation and health never start either service.
