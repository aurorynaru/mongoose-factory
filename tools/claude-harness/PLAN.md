# Claude harness: Phase 0 inspection and implementation plan

Date: 2026-10-08 (Asia/Singapore). Branch: `claude-harness`.
Status: **Phase 4 implemented and validated with fakes after explicit approval.
STOP after its commit; Phases 5–6 and live activity remain unapproved.** See
[PHASE-4.md](PHASE-4.md), [PHASE-2.md](PHASE-2.md) and
[PHASE-3.md](PHASE-3.md). The authorized scratch CDP check passed: both blank
tabs survived last-client disconnect. Owned Chrome/MCP were stopped; automatic
approval review blocked scratch-profile deletion, leaving manual cleanup pending.

Latest additions supersede older profile/no-browser proposals below. Phase 2
permits one scratch-profile Chrome launch on about:blank: MCP opens a second
about:blank tab via CDP, disconnect the last client, verify Chrome/both tabs via
/json, record exact output, stop owned Chrome and delete the scratch profile.
No secrets/login/Mongoose URL. Production uses configured
C:\AI\mongoose-playwright-profile, refuses an in-use profile, and never uses
default Chrome user data. Each worker task starts with a fresh visible-tab/scope
snapshot and ends without browser-native dialogs/unsaved-change prompts. Leave
in-page Mongoose dialogs open only when the current task explicitly says to;
otherwise finish without them. Never discard unsaved work; report a blocker.
Disconnect dismisses beforeunload dialogs (installed coreBundle.js:40014).
Known risk: any local
process reaching CDP controls the session. Loopback only, worker Bash denied
by default, stop owned Chrome when not in use. No other browser launches or
real model/Mongoose calls, no secrets-file reads, no gateway, no push/main merge.

Phase 1 finding: installed MCP 0.0.83 CDP cleanup disconnects Playwright without
closing external Chrome's default context or pages. **Select CDP; drop the
gateway.** See [PHASE-1.md](PHASE-1.md) for exact installed-source references,
validation and limits. The Phase 2 scratch observation supports this selection.

## Approved amendments and execution order

### Phase 4 approved hybrid controller (2026-10-09)

This amendment supersedes the earlier all-Claude/removal proposals below. Keep the
existing ChatGPT Tab 1 coordinator as default; `coordinator.transport: "claude"`
selects the implemented sonnet/high alternative. Both browser roles use exact
menu model `6` and effort `High`, confirmed before each send; failure pauses
`browser:model_mismatch`. No live label verification now.

The full loop's WorkerPort is Claude haiku/high, with per-brief worker.model
override and high default effort. OpenCode remains only for legacy tests/explicit
commands, never the default. Require run-specific explicit --confirm-preconditions
for manual Mongoose login, configuration selected/OK and normal Web Client loaded.
Before every new worker task check already-owned Chrome/MCP and read-only
browser-level CDP window state; refuse minimized/ambiguous/unreadable state and
record bounds/model. Never authenticate, start or restart services in the loop.
Preserve labelled worker_session_id, native deny policies and all R3/R4 guards:
serialized browser actions, parallel reads, lock-safe counters, exact values,
stale-ref fresh untargeted snapshot charged to the existing recovery allowance.

Opus/high is the primary specialist: separate empty workspace, native read-only
folders recipes/, experiments/, environments/, claims/, docs/mongoose/ including
guides/raw transcripts, empty strict MCP and no shell/mutation/delegation. Supply
sources.md and guides/INDEX.md first; read relevant local guides before WebFetch,
cite each page's Source URL, prefer 2026.09.08 and label the original source ranking.
Native WebFetch allow rules cover only the three approved Infor domains; a narrow
specialist-only domain guard also denies other documentation sites that native
WebFetch can preapprove. File boundaries remain native. Explicitly append AGENTS.md
for every Claude role; do not rely on discovery with setting-sources empty.

Enable externalSecondOpinion (default maxPerRun 2). Only Opus can request the
registered Infor CloudSuite Assistant Tab 2 GPT (6/High) through the existing
browser adapter. Journal actual requests/replies under the run directory, persist
limits across restart and reconcile uncertain nonces without replay. Return raw
replies only to Opus, labelled external model knowledge, unverified: never acceptance
proof/evidence. Reject external log paths as evidence; only Opus's assessed answer
reaches the coordinator. Keep Claude session references separate from ChatGPT
browser bindings. Proposal/handoff consultations use the same role routing.

Expected permission-denial completion (exit 3) pauses and withholds the report until
item-bound review (resume --approve denials), then forwards it once from cache.
Unexpected denials remain blocked. usage_limit is an expected Pro five-hour/weekly
pause: preserve state/leases/partial output, no retry/resubmit/model switch/restart.
Plain resume reconciles the cached pause. After reset an operator explicitly creates
a new bounded same-session worker continuation (--continue-after-usage), or continues
a pending Claude chat response (--continue-chat-after-usage); old requests remain.

Keep SEND_TO_OPENCODE and NEW_OPENCODE_SESSION compatibility tokens, but describe
the worker as Claude. README supplies the full operator sequence. Build/typecheck/
tests use fakes only: both coordinator transports, menu policy, full kickoff through
EXPERIMENT_COMPLETE with Claude worker, brief override, precondition gates, exit-3
review, usage pauses and specialist/second-opinion isolation/limits/labels. Commit,
then STOP. No live ChatGPT/Claude/Chrome/MCP/Mongoose, secrets-file reads, push/merge,
operator record changes or tools/learning-harness changes. See PHASE-4.md.

### Replay preparation and Phase 4 local documentation

2026-10-09, after operator-run R4 T1: expect parallel hook invocations from
Sonnet/Opus. Replace immediate EEXIST denial with a 3-second acquisition bound
and 20ms retry intervals. Store PID/timestamp/ownership token in lock files;
recover dead owners or locks older than 60 seconds (beyond the generated hook's
10-second execution timeout), and audit recovery. Serialize reclaimers, check
ownership before committing, and retain atomic temporary-file/rename updates.
Count consecutive calls in lock-acquisition order, comparing canonical tool
name and inputs; never group different calls. Preserve existing state/counts.
Validate state JSON and counters; distinguish `lock_timeout` from `state_corrupt`
in messages and the audit. Add ordered successful-call audit entries; exclude
calls/recoveries from denial totals, accepting earlier audit records. Corrupt
state stays intact; unrecoverable I/O also fails closed. Verify with eight
concurrent hook processes using mixed calls, eight identical calls, concurrent
stale-owner recovery, and real timeout/corruption cases. Code/tests/docs only;
no current R4 Chrome/MCP connection or lifecycle action, no browser/model run.
See PARALLEL-GUARD-FIX.md for exact validation output. Phase 4 remains unstarted.

2026-10-09, after operator-run R3 T3: production Chrome now always uses
`--disable-backgrounding-occluded-windows`, `--disable-renderer-backgrounding`,
and `--disable-background-timer-throttling`. Add configurable `chromeWindowSize`
(`"1920,1080"` default, passed as `--window-size`) and `chromeStartMaximized`
(`true` default, passed as `--start-maximized` when true). Store effective launch
arguments in owned-service state and show them in `mcp health`. Hash every option
in the request; retain the actual command hash in the process ownership identity.
An owned Chrome with only these options outdated gives a `running with outdated
launch options` warning, preserving health and its original identity; other
scope/ownership mismatches fail. Apply new flags only at the next operator start.
Never touch the Phase 2 scratch script or current R3 Chrome/MCP session.

Before every standalone `worker task` (new or resumed), check owned Chrome using
read-only browser-level CDP: `/json/version`, `Target.getTargets`, and
`Browser.getWindowForTarget` for the single page target. No MCP window inspection,
page JavaScript, page attachment or window restoration. Refuse minimized windows
with `restore the Chrome window first`; refuse ambiguous/unreadable state.
Record observed windowState/bounds in the task manifest/output and show them in
`mcp health`. Use Node.js 22+ for the built-in WebSocket client.

Both replay scripts require a visible, uncovered Chrome window for the entire
run, no minimizing, and the same window size for R3/R4. Only after R3 finishes,
the operator must `chrome stop` and `chrome start` before R4's preconditions to
apply new launch options; record/re-establish the actual starting state manually.
CDP cannot prove lack of occlusion. The worker preamble treats locator-resolved
`visible, enabled and stable` timeouts as suspected environment blockers, records
the exact error and retains the brief's retry limits. It explains that the harness
computes repository confinement from Git state/evidence diffs, so the worker needs
no git status and should state only files it wrote. Implementation/tests only;
no live validation, no Phase 4. See RENDERING-FIX.md for validation output.

2026-10-09: preparation only; no new live run or Phase 4 implementation.
Production Chrome adds configurable `chromeWindowStyle` normal/minimized/hidden,
default normal for manual login/observation and to avoid hidden-window background
rendering/timer throttling. The Phase 2 scratch-check script stays unchanged.
EXP-033-R3 (haiku/high) and R4 (sonnet/high) remain unreviewed; scripts preserve
accepted coordinator instructions except IDs, paths, worker identity wording and
the subsequently approved state/recovery clauses. The stable-finish conflict is
resolved by distinguishing browser-native/unsaved prompts from explicitly
required in-page dialogs. T2 checks T1's recorded state; T2–T5 continue actual
recorded recovery counts. No state reset or invented recovery use. See
PREPARATION.md for every clause change and operator preconditions.

Phase 4 specialist must consult `docs/mongoose/sources.md` (including "Local
copies: read these first"), then `docs/mongoose/guides/INDEX.md` and relevant
local guide pages **before WebFetch**. The directory contains 35 converted Infor
Mongoose 2026.x guides plus INDEX.md. Conversions changed formatting only and
remain **unverified**; cite each page's **Source URL**, not just its local path.
Prefer the actual environment version 2026.09.08. Keep answer labels/ranking:
verified recipes/records > observed records > documentation/video transcripts
(unverified) > model knowledge (unverified). Check raw transcripts for exact
steps/spelling. Read-only local guides do not broaden technology or editing scope.
No specialist code changes in this preparation turn.

These operator amendments supersede conflicting Phase 0 proposals below.
First commit this updated plan; at the start of Phase 1 commit existing untracked
`docs/mongoose/` and `docs/prompts/` as-is in a separate commit. Never edit their
contents. Preserve all old `tools/learning-harness/` edits untouched/uncommitted.
Then complete and commit Phase 1, and STOP for review of the CDP finding.
No real model calls, browser launches or Mongoose operations; no push/main merge.

- Configurable defaults: worker **haiku/high**, coordinator **sonnet/high**,
  specialist **opus/high**. Claude Pro five-hour/weekly limits are expected;
  `usage_limit` is a normal pause preserving all sessions, journals, partial
  events, transcripts, evidence and browser state. Wait for operator recovery;
  never automatically resubmit, restart the backend or switch models.
- Before Phase 2, inspect installed Playwright MCP `--cdp-endpoint` cleanup:
  trace last-client disposal, context/browser close and transport disconnect;
  report browser/context/page survival with exact file/line references. If an
  external harness-owned Chrome survives WITH pages, use CDP and **drop the
  gateway**. Otherwise retain it. Adapt the ownership pattern in the old
  `scripts/Start-HarnessChrome.ps1`: loopback-only debugging, dedicated profile,
  verified process identity. Static inspection only in Phase 1; then STOP.
- Explicitly embed current AGENTS.md (or applicable worker excerpt) in **each
  role's appended system prompt**, including standalone tasks; journal its hash.
  Do not rely on CLAUDE.md discovery with empty setting sources.
- `--setting-sources ""` selects none of user (`~/.claude/settings.json`), project
  (`.claude/settings.json`), local (`.claude/settings.local.json`) settings,
  excluding their permissions, hooks, environment and other settings. Explicit
  `--settings`, CLI flags and managed policies remain applicable; this does not
  reset subscription authentication or replace strict MCP configuration. This
  is documented behavior, not native model-call verification. See the
  [CLI reference](https://code.claude.com/docs/en/cli-reference) and
  [settings precedence](https://code.claude.com/docs/en/settings#settings-precedence).
- Generated settings use built-in permission deny rules wherever possible for
  secrets directory, `.git`, `tools/`, Claude authentication storage and other
  protected paths. Specialist file access is limited to read-only knowledge
  folders. Test native Windows path, traversal and junction behavior; report
  limitations rather than adding a custom file-boundary hook. Custom PreToolUse
  has **only** key-chord text, exact_values, identical consecutive calls.
- Specialist read-only folders: `recipes/`, `experiments/`, `environments/`,
  `claims/`, `docs/mongoose/`, including structured and raw transcripts. Allow
  WebFetch only for `docs.infor.com`, `developer.infor.com`, `support.infor.com`
  using built-in domain permissions; deny/exclude all other web tools and test
  other domains/redirects fail closed. Do not grant broad WebFetch permission.
  Reference existing operator-maintained `docs/mongoose/sources.md`; never
  overwrite it. Prefer sources for **Mongoose 2026.09.08**, as recorded in
  `environments/current-environment.md`. Label source rank in every answer:
  verified recipes/records > observed records > documentation/video transcripts
  (unverified) > model knowledge (unverified). Structured transcripts are
  paraphrases; check raw transcripts for exact steps/spellings.
- By the end of Phase 3 add
  `claude-harness worker task <EXP-ID> "<instruction>"`: one bounded task without
  coordinator, with brief boundaries, preamble, explicit AGENTS.md, guards,
  tool policy, evidence diff and transcript. Configurable worker model/effort
  enables operator-directed Haiku-vs-Sonnet replay; never auto-switch.
- Phase 1 copies the baseline, preserving current source edits in the fork,
  excludes dependency/build/runtime/local-config directories, rewrites every
  old harness path, separates data, builds and runs fake/core tests before
  adapter changes. Preserve fixture-browser suites behind explicit opt-in and
  do not run them: all browser activity is prohibited. Report omitted suites.
  Phases 4–6 and live smoke require subsequent approval.

## Scope and inspection record

Read `AGENTS.md` and `docs/prompts/claude-harness-build.md`. Inspected the existing
README, TROUBLESHOOTING, adapter ports, all OpenCode and ChatGPT adapter modules,
controller modules, Git integration, config, CLI, doctor, all protocol Markdown,
test-suite inventory and safety/recovery fixtures. Also inspected app wiring,
brief validation, SQLite schema, fake/scenario support, backend PowerShell scripts,
package/build configuration, root `.gitignore`, and `opencode.json`.

This is harness engineering. No Mongoose experiment, browser launch, login,
navigation, backend start, model request, secret-file read, or test-suite execution
was performed. Help/version and authentication-status commands are diagnostic
commands, not model calls. Tests and baseline build belong to Phase 1.

Initial state: branch `main`; no `tools/claude-harness` implementation. Switched
with `git switch -c claude-harness`. These preexisting changes must remain intact
and outside all phase commits:

- Modified old harness: `README.md`, `briefs/EXP-035.brief.json`,
  `harness.config.example.json`, `src/shadow/cli.ts`, `src/shadow/runner.ts`,
  `test/shadow.test.ts`.
- Untracked `docs/prompts/` and `docs/mongoose/` are the explicit exception:
  commit their existing operator-authored contents separately, as-is.

The fork must reflect the inspected working tree, including existing edits, without
writing to the source. Phase commits stage only explicitly selected new-harness
files (and later the requested root `CLAUDE.md`), plus the authorized separate
operator-docs commit. No documentation directory marker is needed.
Never push or merge this engineering branch. Preserve experiment Git finalize
behavior as code; do not invoke it in the real factory during this build.

## Diagnostic results and trust

| Command / inspection | Actual result | What it establishes |
|---|---|---|
| `Get-Command claude` | `C:\Users\juara\.local\bin\claude.exe`, Application | Native executable available |
| `claude --version` | `2.1.294 (Claude Code)`; exit 0 | Installed version differs from prompt's 2.1.289 |
| `claude --help` | Exit 0; flag inventory below | Help-advertised syntax on 2.1.294, not execution of role commands |
| `claude auth --help` | `login`, `logout`, `status` | Authentication subcommands present |
| `claude auth status --help` | `--json` (default), `--text` | Non-model authentication check available |
| `claude auth status` with stripped child environment | Exit 0; `loggedIn=true`, `authMethod=claude.ai`, `subscriptionType=pro`, `configDirectory=C:\Users\juara\.claude` | Subscription login observed; account identifiers withheld |
| `npx -y @playwright/mcp@latest --help` | Exit 0 | Network/context/path flags below advertised |
| `npx -y @playwright/mcp@latest --version` | `Version 0.0.83`; exit 0 | Version resolved by latest during inspection |
| Existing factory Claude transcript, first 50 JSONL records, schema only | `user`, `assistant`, auxiliary records; text blocks, UUIDs, session ID and cwd fields | Local transcript location/shape observed; no harness marker/resume test |

These are **observed** diagnostics. Documentation and implementation proposals
remain **unverified** under AGENTS.md until repeated executions and persistence
checks establish behavior. No claim of end-to-end operation or 2.1.289 compatibility.

### Claude flag inventory

Every flag below was found in the installed `--help`. Commands later use argument
arrays, not shell interpolation. Values in braces in this plan are harness values,
not Playwright credential placeholders.

| Flag | Advertised syntax / planned reliance |
|---|---|
| `-p`, `--print` | Noninteractive response then exit; workspace trust dialog skipped |
| `--output-format` | `text`, `json`, `stream-json`; chat JSON, worker JSONL |
| `--verbose` | Verbose output; worker stream and chat startup metadata |
| `--input-format` | `text` (default) or `stream-json`; use text stdin |
| `--model` | Alias or full model name; configurable per role |
| `--effort` | `low`, `medium`, `high`, `xhigh`, `max`; effective support is model-dependent and untested |
| `-r`, `--resume [value]` | Resume explicit session UUID; never implicit latest session |
| `--session-id <uuid>` | Preassigned valid UUID on first call |
| `--mcp-config <configs...>` | JSON file(s) or JSON string(s) |
| `--strict-mcp-config` | Only configured MCP servers; also use an empty config for chat roles |
| `--tools <tools...>` | Built-in tool inventory; empty string disables built-in tools |
| `--allowedTools <tools...>` | Comma/space-separated permission rules; does not alone restrict tool inventory |
| `--disallowedTools <tools...>` | Deny named tools/rules; exclude Bash and brief-forbidden browser JavaScript |
| `--permission-mode` | `acceptEdits`, `auto`, `bypassPermissions`, `manual`, `dontAsk`, `plan`; choose `dontAsk` |
| `--permission-prompts` | `host` or `none`; none automatically denies unresolved permission prompts |
| `--system-prompt` | Replace system prompt; available but unnecessary for baseline |
| `--append-system-prompt` | Append role preamble to default prompt |
| `--system-prompt-snapshot <on\|off>` | Default on reuses first system prompt on resume; use off for task-specific preambles |
| `--settings <file-or-json>` | Explicit generated role/session settings and hooks |
| `--setting-sources <sources>` | User/project/local sources; use empty argv value to exclude those sources, subject to validation |
| `--disable-slash-commands` | Disable skills; exclude alternate execution routes |
| `--json-schema` | Available; do not replace existing prose plus fenced envelope protocol |
| `--add-dir` | Additional working directories; access expansion, not a read-only boundary; baseline does not need it |

`--max-turns` is **absent from installed help**. Official documentation describes
it, but this task explicitly requires harness-enforced limits. Do not use it.
Enforce wall time, agent turns, task counts, consultations, failures and recovery
budgets in the harness. Other documented-but-unchecked flags are not dependencies.

Do not use `--bare`: installed help says it skips hooks and CLAUDE.md discovery
and requires explicit API authentication rather than subscription OAuth.
Do not use permission bypasses, fallback models, or global `claude mcp add`.

Documented permission semantics: `--allowedTools` permits execution without a
prompt; `--tools` controls built-in availability. `dontAsk` denies actions needing
approval, while explicit allowed actions can run. `--permission-prompts none`
denies unresolved prompts and exposes denials in output. A final textual report
can still follow a denial; a successful process exit is not evidence that the
requested operation ran. These semantics are documented, **not live-tested here**.
See [programmatic permissions](https://code.claude.com/docs/en/headless#turn-off-permission-prompts-in-unattended-runs)
and [CLI reference](https://code.claude.com/docs/en/cli-reference).

### Playwright flags and source inspection

Help confirms `--host`, `--port`, `--allowed-hosts`, `--user-data-dir`, `--secrets`,
`--output-dir`, `--shared-browser-context`, `--idle-timeout`, `--config`, and
`--version`. `--port` help calls its transport SSE. The installed package README
shows `/mcp`; implementation handles SSE under `/sse` and Streamable HTTP for
other paths. Prefer Claude HTTP config at `/mcp`; verify handshake with fakes,
then tools/list only in the approved Phase 6 smoke.

Inspected package cache (read-only):

```text
C:\Users\juara\AppData\Local\npm-cache\_npx\9833c18b2d85bc59\node_modules\@playwright\mcp\package.json
C:\Users\juara\AppData\Local\npm-cache\_npx\9833c18b2d85bc59\node_modules\@playwright\mcp\README.md
C:\Users\juara\AppData\Local\npm-cache\_npx\9833c18b2d85bc59\node_modules\playwright-core\lib\coreBundle.js
```

The package uses Playwright `1.64.0-alpha-1790635538000`. Source observations:

- `coreBundle.js:75577` onward: shared context is reused, but disposal of the last
  browser-backed client closes it. **A server process alone does not guarantee
  browser state across disconnected CLI clients.**
- `coreBundle.js:73870` onward: initialize/tools/list do not construct the browser
  backend; the first tools/call does. An idle keeper using tools/list alone would
  not count as a browser-backed client.
- `coreBundle.js:73720` onward: default Host allow list normalizes loopback to
  localhost; explicitly allow the configured `127.0.0.1:<port>` authority.
- Text-entry schema: `browser_type.text`; `browser_fill_form.fields[].value`.
  Key tool: `browser_press_key.key`. `browser_press_sequentially.text` also exists
  but is skill-only. Cover it defensively if a discovered catalog exposes it.
  `browser_run_code_unsafe` is documented by the installed package; deny all
  three requested JavaScript names even if some are absent from the catalog.

Static source inspection does not prove the current Claude client disconnect
behavior, browser persistence, or Windows process ownership handling.
The [Playwright MCP repository](https://github.com/microsoft/playwright-mcp)
provides additional upstream context; the installed source above is authoritative
for these observations.

## File migration map

Paths below are relative to `tools/learning-harness`, copied into the new harness.
Phase 1 first copies the baseline, rewrites harness identity/path literals, and
runs its existing tests **before any adapter replacement**. Drop/adapt entries
describe the final implementation after that baseline passes.

| Treatment | Files / directories | Details |
|---|---|---|
| Copy unchanged | `src/protocol/envelope.ts`, `src/protocol/validate.ts`, `src/controller/evidence.ts` | Keep schemas, actions, acceptance/completion and evidence guards |
| Copy unchanged initially | `src/store.ts`, `src/util/log.ts`, `src/dryrun.ts`, `tsconfig.json`, `vitest.config.ts`, fixture factory/brief/scenarios | Keep SQLite/WAL, transactions, lease, audit trail, redaction and isolated test setup |
| Preserve, narrowly adapt | `src/controller/machine.ts`, `src/controller/handoff.ts` | Remove transport coupling; add usage-limit pause; retain routing, completion, handoffs and one recovery/run |
| Adapt | `src/adapters/types.ts` | Keep all ChatPort/WorkerPort methods; add Claude errors/usage_limit, session identity and richer worker guard policy; retire production interpreter port |
| Adapt | `src/git.ts` | Change DEV_PREFIX/DEV_ALLOWED to `tools/claude-harness/`; preserve experiment commit/finalize guards |
| Adapt | `src/config.ts`, `src/app.ts`, `src/cli.ts`, `src/doctor.ts`, `src/status.ts` | Claude roles, owned MCP service, separate state, CLI diagnostics and session controls |
| Adapt | `src/brief.ts`, `src/protocol/prompts.ts`, `src/util/ids.ts` | New guard fields; neutral policy imports; UUID IDs; retain brief/nonce/scope validation |
| Adapt | `src/context.ts`, `src/proposal.ts`, `src/autopilot.ts` | CLI session identities instead of ChatGPT URLs; preserve reviewed context/proposal checks and existing opt-in autopilot limits |
| Port logic | `src/adapters/opencode/inspection-loop.ts`, `tool-policy.ts`, `task-scope.ts` | Preserve detection/legacy brief parsing; replace HTTP-message representations and compaction assumptions with Claude event/transcript tracking |
| Port ownership | `src/backend/process.ts`, `scripts/HarnessBackend.Common.ps1`, `Start-HarnessBackend.ps1`, `Get-HarnessBackendHealth.ps1`, `Stop-HarnessBackend.ps1`, `Restart-HarnessBackend.ps1` | Node/MCP service identity, two loopback ports, JSON-RPC health and sibling Claude processes |
| Adapt docs | `protocol/*.md`, `README.md`, `TROUBLESHOOTING.md`, example config | Role wording and operational commands; retain protocol IDs and action tokens including SEND_TO_OPENCODE/NEW_OPENCODE_SESSION for compatibility |
| Adapt packaging | `package.json`, `package-lock.json`, `harness.ps1` | Package/bin `mongoose-claude-harness` / `claude-harness`; script `claude-harness.ps1`; new local `.gitignore` |
| Retain then adapt tests | `test/controller.test.ts`, `protocol.test.ts`, `git.test.ts`, `newchat.test.ts`, `proposal.test.ts`, `autopilot.test.ts`, `tool-policy.test.ts`, `task-scope.test.ts`; `src/testing/*` | Retain core scenarios/assertions; replace URL/HTTP/model-label assumptions; remove only retired DeepSeek-specific tests with corresponding feature removal |
| Replace adapter tests | `test/opencode.test.ts`, `test/smoke/backend.smoke.test.ts`, `test/browser/*` | Preserve applicable outcomes in Claude fake-process and fake-MCP suites; no real OpenCode/browser tests in final suite |
| Drop after baseline | `src/adapters/chatgpt/*`, `src/adapters/opencode/client.ts`, `worker.ts`, `src/login.ts`, ChatGPT `src/setup.ts`, `scripts/Start-HarnessChrome.ps1`, `fixtures/html/*` | No ChatGPT DOM, Chrome profile, OpenCode HTTP backend or model-label menus |
| Drop after baseline | `src/protocol/interpreter.ts`, `src/shadow/*`, `test/shadow.test.ts`, shadow CLI registration | No DeepSeek fallback or shadow testing in final harness; remove runtime interpreter dependency |
| Exclude from fork | `node_modules/`, `dist/`, `data/`, machine `harness.config.json` | Do not import live state, role URLs or machine configuration; regenerate from new example |

Copy briefs/context as knowledge inputs; none are authority to start an experiment.
Every other source file is copied initially; surviving references get a path/role
audit before finalization. Drop Playwright/Turndown direct-browser dependencies
after their fixture tests are retired; add the MCP SDK and a pinned tested
Playwright MCP package. No package changes in Phase 0.

Planned additions: `src/adapters/claude/{process,events,transcripts,worker,chat,tool-policy}.ts`,
`src/backend/mcp-service.ts` (CDP, no gateway), `src/hooks/pre-tool-use.ts`,
`protocol/specialist-knowledge.md`, fake executable and MCP fixtures/tests,
local `.gitignore`. Runtime settings, MCP configs, process journals and hook state
live under ignored `tools/claude-harness/claude-data/`, never the old `data/`.
Phase 5 adds root `CLAUDE.md` containing only `@AGENTS.md`; preserve existing
`docs/mongoose/` contents and operator-maintained index.

## Process environment and exact role invocations

Run roles with factory root as cwd, through `spawn(executable, argv, {shell:false,
windowsHide:true, env:childEnv})`. Feed the saved payload through stdin and close
stdin after delivery. This preserves multiline content and empty argv values on
Windows; do not execute these templates through a string-built PowerShell command.

For subscription billing, clone the environment and delete ANTHROPIC_API_KEY and
ANTHROPIC_AUTH_TOKEN case-insensitively before **every** Claude diagnostic or model
process. Parent environment stays unchanged. Do not load a secrets dotenv file.
Only `billing: "api"` may retain those variables. Reject conflicting third-party
provider/custom API routing settings in subscription mode rather than silently
changing billing. Verify authMethod via stripped-environment auth status.
Report presence/absence, never values; no credentials in Markdown or logs.

Generated worker settings use built-in permission deny rules to deny access to the
configured secrets file/directory and Claude authentication storage; model-facing
file tools remain within the factory's permitted paths. Protect hook/settings,
controller runtime state, `.git`, the old harness and AGENTS.md from worker writes.
Test Read/Glob/Grep/Write/Edit path rules, traversal and junction escapes; no
custom file-path hook. Only the Playwright server consumes its configured
secrets file. Controller transcript reconciliation uses the dedicated parser, not
model file access. Optional Bash or browser code requires explicit task scope;
these permission rules alone are not an OS sandbox for arbitrary code.

Generated files (not created in Phase 0):

```json
// claude-data/mcp/worker.json
{"mcpServers":{"playwright":{"type":"http","url":"http://127.0.0.1:8931/mcp"}}}
// claude-data/mcp/empty.json
{"mcpServers":{}}
```

The comments label separate files and are not part of the generated JSON.
Approved defaults for effort: worker/coordinator/specialist `high`;
each is configurable or null (omit the flag to use CLI default). Model aliases
default to `haiku`, `sonnet`, `opus`; optional worker/specialist `sonnet`.
Do not claim aliases resolve to the prompt's 5.5 models until actual init metadata
confirms this. Store configured alias plus resolved model separately.

Worker first call (substitute only config/controller-owned values):

```text
claude -p --session-id {WORKER_UUID} --output-format stream-json --verbose --input-format text --model haiku --effort high --append-system-prompt {FILLED_WORKER_PREAMBLE_WITH_AGENTS} --system-prompt-snapshot off --mcp-config {WORKER_MCP_JSON} --strict-mcp-config --tools "Read,Write,Edit,Glob,Grep" --allowedTools "Read,Write,Edit,Glob,Grep,mcp__playwright__*" --disallowedTools "Bash" --permission-mode dontAsk --permission-prompts none --settings {WORKER_SETTINGS_JSON} --setting-sources "" --disable-slash-commands
```

Subsequent worker calls use the identical policy arguments, replacing
`--session-id {WORKER_UUID}` with `--resume {WORKER_UUID}`. Optional allowBash adds
Bash to both inventory/allow list and removes its deny; it never overrides a
brief prohibition. No-JavaScript tasks append these deny rules:

```text
mcp__playwright__browser_evaluate,mcp__playwright__browser_run_code,mcp__playwright__browser_run_code_unsafe
```

Keep existing denials within a session even if a later brief is less restrictive.
Separate the bounded worker preamble from the coordinator instruction at the
renderer boundary; persist both. Put preamble in append-system-prompt and the
marker, handoff and instruction in stdin; do not use an unsafe text split to infer
policy. Preserve the full controller payload for auditing and fakes.

Coordinator first call:

```text
claude -p --session-id {COORDINATOR_UUID} --output-format json --verbose --input-format text --model sonnet --effort high --append-system-prompt {COORDINATOR_ROLE_PREAMBLE_WITH_AGENTS} --mcp-config {EMPTY_MCP_JSON} --strict-mcp-config --tools "" --permission-mode dontAsk --permission-prompts none --settings {COORDINATOR_SETTINGS_JSON} --setting-sources "" --disable-slash-commands
```

Specialist first call:

```text
claude -p --session-id {SPECIALIST_UUID} --output-format json --verbose --input-format text --model opus --effort high --append-system-prompt {SPECIALIST_KNOWLEDGE_PREAMBLE_WITH_AGENTS} --mcp-config {EMPTY_MCP_JSON} --strict-mcp-config --tools "Read,Glob,Grep,WebFetch" --disallowedTools "Write,Edit,Bash,WebSearch" --permission-mode dontAsk --permission-prompts none --settings {SPECIALIST_SETTINGS_JSON} --setting-sources "" --disable-slash-commands
```

Continuations replace session-id with `--resume` for that role. Protocol text and
nonce remain in the first saved user payload, as kickoff does today. Persist one
current session per role; preserve existing fresh-coordinator-per-run configuration
and explicit new-chat requests. Additional directories are not required with the
factory cwd; `--add-dir` would not enforce folder restrictions.

`json --verbose` may return startup metadata alongside the result. Its exact
2.1.294 shape is untested: parse both a result object and an event array, and require
an init/system model observation to declare model verification. Do not invent
metadata from the configured alias or run a readiness prompt. Auth readiness is
separate from model readiness; first real submitted operation performs the model
check, discards mismatched output and pauses `model_mismatch`. Doctor reports
model resolution as unknown if no matching prior init event exists.

## Persistent MCP service and browser ownership

**Selected Phase 2 topology after source inspection:** one owned MCP HTTP service
at configurable loopback port 8931, attached to separately started harness-owned
Chrome at configurable loopback CDP port 9224. Use a dedicated profile (proposed
`C:\AI\claude-harness-mongoose-profile`), separate from both existing profiles;
do not launch Chrome during this engineering task. Chrome owns its profile;
omit MCP `--user-data-dir` in CDP mode. Track Chrome and MCP ownership independently.

Equivalent MCP argv (launch directly with Node from the pinned package):

```text
npx -y @playwright/mcp@0.0.83 --host 127.0.0.1 --port 8931 --allowed-hosts "127.0.0.1:8931" --cdp-endpoint http://127.0.0.1:9224 --idle-timeout 0 --secrets {MCP_SECRETS_FILE} --output-dir {MCP_OUTPUT_DIR}
```

No retained upstream session/gateway is required. Disconnect releases Playwright
objects, tab-selection metadata, listeners/recording and connection; Chrome and
its default-context pages survive. A later task must freshly inspect its active
tab and scope; stale accessibility references must not be reused. The source
finding does not establish live persistence, authentication or Mongoose state.
An isolated/new context would be disposed and is incompatible with this design.

The following **superseded fallback** is retained only as Phase 0 rationale and
must not be implemented for the inspected version. Its proposed hidden supervisor hosts a gateway and
spawns a pinned `@playwright/mcp` entrypoint directly with Node. Do not track an
`npx.cmd` wrapper PID as if it owned the listening port. The equivalent backend
argument vector, with config-sourced paths from `opencode.json`, is:

```text
npx -y @playwright/mcp@0.0.83 --host 127.0.0.1 --port 8932 --allowed-hosts "127.0.0.1:8932" --shared-browser-context --idle-timeout 0 --user-data-dir {MCP_PROFILE_DIR} --secrets {MCP_SECRETS_FILE} --output-dir {MCP_OUTPUT_DIR}
```

Version pin is the version whose help/source was inspected. Reverify flags when
upgrading. Profile/output/secrets paths come from config populated from the
existing Playwright MCP arguments; the secrets file is never read by the harness.

**Fallback only if CDP cleanup does not preserve pages:** expose a harness-owned gateway
at `127.0.0.1:8931/mcp` and keep one upstream MCP session to the backend at 8932.
List schemas and forward permitted tool calls through that session. Claude clients
get their own downstream sessions but cannot dispose the upstream session when
they exit. First worker tools/call creates the browser backend on the retained
session. Merely listing tools creates no browser, as observed in source. Thus no
warm-up browser tool or duplicate worker action is needed. A keeper connection
that only sends initialize/tools/list to a separate session is insufficient.

Both ports are configurable and loopback-only. Enforce one worker call at a time,
forward cancellation, preserve image/content blocks, prevent unknown tool names,
and forbid downstream shutdown/delete from stopping the upstream session.
The gateway must survive controller exit/pause, so it belongs to the persistent
owned service, not a per-task adapter. This extra gateway is needed to address the
observed last-client disposal path; actual lifecycle behavior remains unverified.

State records supervisor/backend PID, executable, start ticks, expected script
and command identity, both ports and owners. Check all before stop/restart; Node
executable identity alone is insufficient. Refuse unowned listeners, stale/PID-
reused records, another factory/profile, partial startup and mismatched ports.
Health uses owned-process checks plus initialize/tools/list (never browser tools).
No OpenCode health endpoint assumptions. Verify listed authority on 127.0.0.1.

Claude task processes are siblings of this service, not parents. Killing a worker
tree must leave service/browser state intact. Explicit service restart closes
browser state and must obey the experiment's lifecycle permissions. Missing
transcripts, usage limits, permission denials and worker crashes are **not** reasons
to restart it. Keep the ownership restart method, with automatic restart default
off during a run unless its scope authorizes that lifecycle operation.

## WorkerPort mapping

| Method | CLI / deterministic behavior |
|---|---|
| `health()` | Stripped-environment version/auth status plus owned MCP service health; no prompt |
| `createSession(title)` | Generate/persist UUID, title, cwd and first-call state; no model process yet |
| `configureSession(id, policy)` | Require idle owned task process; persist effective tool/hook rules and validate generated files/argv before submission; failure pauses without counting/submitting |
| `newMessageId()` | Durable UUID-based task marker ID; no requirement for old OpenCode ID encoding |
| `findMessage(sessionId, messageId)` | Search parsed user-text blocks for exact `[HARNESS WORKER message_id=…]`; validate UUID/cwd/task association; return present/absent/unknown conservatively |
| `submit(id, messageId, text)` | Journal payload, marker, settings, Git baseline and process intent first; spawn first/resume command; accepted only with receipt evidence, uncertain if delivery may have occurred, rejected only if definitively unsent |
| `waitForCompletion(...)` | Parse JSONL live, join tool use/results by IDs, journal events, inspect final result plus process state; map completed/failed/timeout/stalled/permission/usage_limit; persist partial output on interruption |
| `abort(id)` | Verify PID/executable/start identity, then `taskkill /PID <pid> /T /F`; confirm process exit; never kill MCP service |
| `restartOwnedBackend()` | Fixed ownership-checked MCP service restart only; false if not owned/permitted |

Worker limits count distinct assistant agent turns, not streaming chunks, within
the current marker. Interrupt before another turn/tool when cap is reached;
wall timer includes initialization and tool waits. Preserve existing run budgets.
A summary/compaction boundary is context, never completion: require the final
result for the current invocation, associated marker and session, and handle
unfinished/unknown event types conservatively.

For touchedFiles, capture `git status --porcelain=v1 -z --untracked-files=all`
before/after and index/worktree/untracked content fingerprints for dirty paths.
A path-set subtraction alone misses edits to already dirty files. Include adds,
modifications, deletions and rename endpoints; retain the existing evidence-dir
diff separately. Record external concurrent edits as an attribution limitation;
never attribute files from the model's prose. Persist baseline across crashes.

Transcript observed at:

```text
C:\Users\juara\.claude\projects\c--AI-mongoose-factory\dd6bbbf4-06c3-4560-b48e-b85e8ed2ae64.jsonl
```

Observed user records contain `type`, `uuid`, `parentUuid`, `sessionId`, `cwd`,
`message.role`, and `message.content` text blocks; assistant records add model,
message ID, stop/usage fields and content blocks. Auxiliary records also exist.
Do not assume they are user submissions or final results. Validate config-directory
override and case/path encoding; search only matching project/session, not all
personal conversations. This older existing transcript is not proof of print-mode
marker durability. Unreadable/missing/truncated files, compaction ambiguity,
unowned active process, or incomplete crash journal mean unknown, not absent.
Use complete validated transcript plus durable process journal to recover a result;
process exit alone never proves task completion.

CLI marker presence is not server-enforced idempotency. Replace the old worker
auto-resubmit-on-absent behavior with conservative reconciliation and explicit
operator resubmit approval for any attempt that may have been delivered. Extend
existing item-bound resubmit approval to worker operations. Persist new chat UUIDs
before spawning so first-message crashes can reconcile the intended session.

Usage-limit/rate-limit handling: add `usage_limit` to relevant result/problem
unions and controller pause reasons; preserve op/session/marker and partial
events. No automatic resubmission, backend restart or model switch. Explicit
resume checks marker and saved terminal state first; a continuation after a usage
limit requires operator-directed recovery, not silently replaying the task.
Exact native usage-limit event fields/text remain unconfirmed.

## ChatPort mapping and specialist boundary

| Method | CLI / durable behavior |
|---|---|
| `checkReady(role)` | CLI/version and auth status without model calls; verify last applicable init model when available; otherwise clearly indicate deferred model check |
| `findSubmission(role, nonce)` | Same transcript parser as worker; exact user nonce, reliable=false on ambiguity, no model request |
| `submit(role, text, nonce)` | Journal role UUID/payload/nonce, spawn existing role resume command (or first session-id command if never started); record receipt/process outcomes |
| `submitNew(role, homeUrl, text, nonce)` | Allocate and persist a new UUID before spawn; homeUrl becomes a transport-neutral role hint; return a session reference instead of browser URL |
| `waitForReply(role, nonce, opts)` | Await JSON/verbose event output or recover matching journal/transcript result; return textual `result` containing prose + envelope, preserve reply ID, block usage/model mismatch, respect timeout/stop |
| `close()` | Stop/detach owned chat child processes safely and journal incomplete state; leave role sessions and MCP service intact |

Use SQLite role `conversation_id` for Claude UUID and a transport-neutral reference
such as `claude-session:<uuid>` in the legacy URL column, or a narrow schema
migration. Remove parseConversationUrl from controller/proposal/autopilot paths;
do not manufacture ChatGPT URLs to preserve a browser parser. Keep all checkpoint,
duplicate-reply and item-bound approval semantics. Neutralize browser-prefixed
pause messages while retaining meaningful existing failure categories.

Specialist gets Read/Glob/Grep/WebFetch and no MCP. Built-in permission rules in
generated settings must restrict reads under `recipes/`, `experiments/`,
`environments/`, `claims/`, `docs/mongoose/`. Resolve Windows case/separators,
symlinks/junctions and traversal; reject external targets and searches without an
allowed explicit directory. `--allowedTools` and `--add-dir` do not impose this
boundary; reads in cwd can otherwise be automatic. Prompts require knowledge
source ranking/version/raw-transcript policy from the approved amendments above.
Allow WebFetch only to the three approved Infor domains; deny other web tools.
No implicit access to evidence images: retain the attachment/manual-review gate.
Read/deny path semantics and hook format are documented in
[permissions](https://code.claude.com/docs/en/permissions#read-and-edit) and
[hooks](https://code.claude.com/docs/en/hooks#pretooluse); Windows enforcement is
not yet tested.

## Guard and loop behavior

Generated PreToolUse settings invoke a fixed Node hook, matching tool names and
reading JSON stdin (`session_id`, `tool_name`, `tool_input`, other metadata).
Denial returns `hookSpecificOutput` with `hookEventName: PreToolUse`,
`permissionDecision: deny`, and a precise reason. Passing checks return no
permission override: the hook never grants extra access. Validate state/settings
before model launch; failed hook availability must prevent submission. Test
runtime hook-failure behavior instead of assuming a nonzero exit is a denial.

- Key-like text: examine `browser_type.text`, textbox values in
  `browser_fill_form.fields`, and any additional verified entry tool. Deny chords
  with Control/Ctrl/Shift/Alt/Meta modifiers, Enter/Tab/Escape/Backspace/Delete,
  F1–F12; tell the model to use browser_press_key. Brief top-level
  `allow_literal_key_text: true` disables only this text check. Do not treat
  credential placeholder strings as credentials or chords.
- Exact casing: brief top-level `exact_values: ["Keyboard", ...]` denies
  case-insensitive matches that are not exact and names the required spelling.
  Reject conflicting case-equivalent entries during brief validation.
- Identical calls: atomically persist canonical tool+argument hashes/counters per
  session under claude-data; deny the sixth consecutive identical call by default.
  Reset on a different call; retries of the same denied call remain denied. No raw
  text/credentials in fingerprint state. Counter and threshold semantics tested
  at N-1/N and across resumed processes.
- Keep the existing independent result-aware detectors: six stale-ref failures,
  six identical completed browser reads, six identical completed shell calls;
  24-call window; thresholds 0–24; 0 disables each. Join stream results by tool ID,
  do not interrupt an in-flight mutation. Normalize shell and MCP name variants.
  PreToolUse checks arguments before execution; this is stronger than the existing
  result-aware monitor and must be documented separately, not called equivalent.
- Preserve one coordinator-directed recovery per run, failure/task/time budgets,
  partial evidence and explicit no-JavaScript restrictions. New sessions do not
  restore recovery allowance. Denials never authorize alternate shell/scripts.

## Phase sequence and validation gates (after approval)

1. **Fork:** separate as-is operator-docs commit, then baseline copy/identity/path rename, local ignore rules, package name,
   data separation. `npm ci`, `npm run build`, `npm test` in the new harness before
   adapter changes. Gate fixture-browser tests explicitly and omit them; real
   smoke remains disabled. Inspect CDP cleanup. No browser/Mongoose/real model.
   Commit Phase 1 and **STOP/report before Phase 2**.
2. **Owned MCP service:** after the Phase 1 report and permission to continue,
   scripts, CDP/external-Chrome ownership if pages survive (drop gateway),
   otherwise gateway/retained upstream session, generated
   configs and process ownership checks. Fake MCP verifies last-downstream exit
   preserves upstream state, listing creates no browser, port conflicts and PID
   reuse are refused, stop targets only owned trees. Commit.
3. **Worker:** process/event/transcript adapters, markers, policy/hook, Git
   fingerprints, loop/limit handling, usage-limit pause and crash-safe controller
   adjustments. Fake Claude/MCP tests for submit/resume/abort and partial output;
   build/typecheck/controller regressions. Add standalone bounded
   `claude-harness worker task <EXP-ID> "<instruction>"` as specified above. Commit.
4. **Hybrid controller (approved amendment above):** retain ChatGPT default,
   implement Claude coordinator alternative, Opus specialist and external broker;
   Claude worker, precondition gates, denial review and usage pauses. Port all
   applicable controller/proposal/autopilot scenarios; session recovery and file
   boundary tests. Commit.
5. **Config/CLI/docs:** per-role model/effort/billing, executable+argv-prefix for
   fake Node CLI, MCP/CDP ports and path settings, task/chat/turn limits,
   loop thresholds, allowBash; CLAUDE.md and preserve existing docs index. Doctor validates
   CLI/auth/service/config/hook/child environment/Git without calling a model or
   starting a browser. Rewrite verified/not-verified table honestly. Commit.
6. **Final fake regression suite:** success, tool loop, hook denial, usage limit,
   crash mid-task, missing transcript and model mismatch; split JSON lines,
   malformed output, no final event, compaction, dirty-file edits, conflicting
   calls, permission denials, role persistence, path escapes, process ownership.
   `npm run typecheck`, `npm run build`, `npm test`, fixture dry-run/CLI smoke.
   Capture real command output for the phase report. Commit.

Keep fakes and core controller tests throughout; transport-specific tests are
ported or retired explicitly, not silently skipped to obtain a green suite.
Git tests use only scratch repositories/local bare remotes; never call real
factory push/merge. MCP tests use fake servers/state, not the Mongoose profile.

Only after **separate explicit Phase 6 live-smoke approval**, use stripped env for
the requested single `claude -p --model haiku "Reply with READY"` and one call that
only lists owned MCP tools. Clarify the two requested smoke calls as the explicit
exception to the real-model prohibition; no navigation or browser tool call. A
direct JSON-RPC tools/list is preferable for catalog health and needs no model;
if the second call must use Claude, its exact supported approach must be confirmed
before execution. Report exact outputs and mark failures/unverified areas honestly.
The smoke does not verify Mongoose save/reopen or browser persistence; those
remain outside harness-engineering authorization.

## Remaining questions / approval decision

- Phases 1–4 approved with amendments above and implemented. This turn ends
  after Phase 4. Phases 5–6/live smoke require subsequent explicit approval.
- Actual installed baseline is 2.1.294. Proposed implementation targets this
  observed version; 2.1.289 flag/behavior compatibility is unverified.
- CDP selected from accepted Phase 1 source evidence and the authorized Phase 2
  scratch check. No gateway implemented.
- Native stream/json event schema, usage-limit signatures, effort/model resolution,
  hook enforcement, empty setting-sources behavior, marker durability after CLI
  compaction/resume, and actual browser persistence cannot be live-confirmed within
  Phase 0. Test fixtures are not proof of native behavior.
- Transcripts were inspected only for metadata/schema; prompt/reply contents,
  account identifiers, authentication tokens and secrets were not copied into
  this plan. The plan is the only repository file created in Phase 0.

The R3/R4 comparison is recorded in replays/scorecard.md. Phase 4 now implements
the hybrid loop. STOP after this phase; do not start Phase 5 or a live run.
Native model/permission/hook behavior remains unverified by the fake suite. Scratch-profile cleanup remains
pending as recorded in PHASE-2.md; do not rerun its one-off browser check.
