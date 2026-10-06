# EXP-025 — Designer Launch Click Telemetry

Status: **T2 — AC-3 TELEMETRY CAPABILITY GATE: BLOCKED. No supported persistent browser-context page-lifecycle observer/recorder facility is available in this worker session (no `browser_start_tracing` or equivalent). Retrospective per-page `browser_network_requests`/`browser_console_messages` reads and point-in-time tab lists are insufficient per the T2 instruction. AC-3 as specified (persistent lifecycle observer armed before click) FAILED/BLOCKED. EXP-025 cannot proceed as written to the single launch activation. Both retained clients preserved untouched; NO launch click performed.**
Date: 2026-10-06 (Asia/Singapore)
Run: `R-20261006-162608-kmU9` (cycle 1, task T1; cycle 3, task T2) Qualifying two-client baseline confirmed (exactly one retained Web Client + one retained original Web Designer, no modal over the launch surface, no rendered authentication/session-establishment challenge). Semantic "Open designer in a new window" control present/enabled (ref `f14e39`, EXP-009/R2/EXP-023/EXP-024-correlated). AC-3 telemetry arming demonstrably available and armed: Playwright/MCP per-page console + network request/response observation (read on demand, continuously recorded per page) + browser-context page lifecycle via the tab list. Task-local pre-click telemetry baselines recorded. NO launch click performed (deferred to the next task).**
Date: 2026-10-06 (Asia/Singapore)
Run: `R-20261006-162608-kmU9` (cycle 1, task T1)
Mode: LEARNING MODE
Editing scope: User
Target: (none — EXP-025 T1 creates/modifies no artifact)
Evidence directory: `evidence/EXP-025/`

## Objective

Establish, before any activation, that from a qualifying baseline (exactly one retained Web Client + one retained original Web Designer, no rendered modal covering the launch surface, no visible authentication/session-establishment challenge) the supported pre-activation observation is armed for browser-context page lifecycle plus request/response activity, with page-level console observation where supported. Then (in the NEXT task only) perform exactly one native Playwright click on the EXP-009/R2/EXP-024-correlated semantic "Open designer in a new window" control, enumerate controlled pages immediately, keep telemetry armed for exactly five seconds, then enumerate finally and capture telemetry/rendered state. This T1 performs the preflight only: read prior records, create this record + evidence dir, enumerate pages, verify the Web Client gates, identify the launch control, inspect the retained Designer read-only, and demonstrate/arm the telemetry mechanism with a pre-click baseline. No launch click in this task.

## Required reading (read-only; none modified)

- `experiments/EXP-024-additional-designer-launch-from-unobstructed-web-c.md` — prior run: two-page baseline; Cancel closed the inherited Select Form dialog; single click on ref `f14e39` dispatched without interception; tooltip "Open designer in a new window" rendered; final enumeration still exactly two pages — classified (c) ambiguous. Launch control: Web Client **Designer split button** `mgtoolbarbutton-1126` (accessibility ref `f14e39`); the main `mgtoolbarbutton-1125` leads to the Runtime Builder Selection flow (verified recipe pitfall).
- `experiments/EXP-024-R2-clean-replay-additional-designer-launch-from-live-.md` — clean replay: fresh populated Select Form dialog + ordinary `GetRequestedData/runform → 200` trace; ordinary Cancel; post-Cancel unobstructed surface + enabled second `Designer` control (`f14e39`); single click dispatched, still two pages — ambiguous. Note: EXP-024-R2's post-click capture did NOT surface the tooltip (capture limitation).
- `experiments/EXP-009-R2-clean-replay-form-description-recovery-across-new-.md` — `replay_verified` historical successful new-Designer baseline: split-button click → **new browser tab** at `WSWebClient/designer/Default.aspx` (no `MGForm`), "Identify Your Editing Scope" (User) → OK → clean new Designer; new tab carried the same `inforSessionId` suffix (same authenticated Web Client session).
- **Correlation limits (explicit):** the semantic launch control is correlated across EXP-009/EXP-009-R2/EXP-023/EXP-024/EXP-024-R2 as the second rendered `Designer` split control. The Ext ID `mgtoolbarbutton-1126`, the ordinal position (second `Designer` button), and the accessibility ref `f14e39` are **diagnostics only — not product contracts**. The semantic identity is "the second `Designer` split button in the Web Client toolbar, whose hover tooltip reads 'Open designer in a new window'".

## T1 starting state / preflight facts (2026-10-06, inspected first; no login performed — session already authenticated)

- Environment: Mongoose Web Client / Designer 2026.09.08, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and live badges).
- Browser (tab list, inspected first): **exactly two pages** —
  - **Tab 0 — retained Web Client (portal shell):** `mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87`, title `Mongoose`. Portal tabs: System Administrator, **Mongoose (selected)**.
  - **Tab 1 — retained original Web Designer:** `mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/Default.aspx?…&inforSessionId=<tenant>~0a319988-7980-4412-943d-4397dcb07eca&MGForm=FX_StaticCaptionLab04`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. Same Designer client context (session-id suffix `…0a319988-…`) inherited through EXP-022/EXP-021-R4/EXP-023/EXP-024/EXP-024-R2.
- **Qualifying baseline PASSES:** exactly one retained Web Client + exactly one retained original Designer; no unexpected modal; no rendered authentication/session-establishment challenge (see gate verification below).

## Gate verification (read-only, no mutation)

### Web Client (Tab 0) rendered/accessibility gates

- **No rendered modal covering the launch surface:** fresh accessibility snapshot `snapshot-webclient-active-preflight.txt` — whole-page search for `dialog`/`modal`/`Select Form`/`Close Window` nodes → **0 matches**; screenshot `02`/`03` inspected: the entire runtime area renders empty white space and the toolbar row is fully visible/unobstructed. Limitation: the accessibility tree cannot prove absence of a transparent non-accessibility overlay; final proof of unobstruction comes only from the single click attempt itself (next task).
- **No visible authentication/session-establishment challenge:** rendered user badge `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` and DEM badge visible; no login form, no credential/session-establishment UI, no `portal-notification`/`Session Expired` banner in the snapshot or screenshots. (Historical network history contains prior `AppApi/SignIn → 200` and `sso/…/session/timeout → 200` entries — recorded as history facts; they are not a rendered challenge and do not affect qualification.)
- **Semantic launch control present/enabled:** Web Client toolbar (accessibility): **Open** enabled (`f14e23`); Save/New/Delete/Refresh/Filter in Place/Get More Rows/System Notes/Documents/Send email/Export To Excel/Help Current Form `[disabled]`; **two `Designer` buttons enabled** — first split pair (`f14e36`/`f14e37`), second split control **`f14e39`** (inner `f14e40`, `[active]`), no `[disabled]` marker on either. `f14e39` is the EXP-009/R2/EXP-023/EXP-024-correlated launch control (`mgtoolbarbutton-1126` identity per EXP-023's resolution; not re-resolved via DOM here; ref/ID/ordinal are diagnostics, not contracts). A read-only hover on `f14e39` dispatched without error (locator `getByLabel('Designer')` in the Web Client iframe frame `mongoose_46_c51080bc-…`); the hover tooltip text did **not** surface in the accessibility tree or screenshot `03` (capture limitation — same limitation seen in EXP-024-R2; not evidence about the control's semantics).

### Retained original Designer (Tab 1) — read-only identification only

- URL/title as above (`MGForm=FX_StaticCaptionLab04`). Fresh snapshot `snapshot-designer-preflight.txt` + screenshot `01` (inspected): two Form tabs `FX_StaticNoColonLab01` (unselected, closable) + `FX_StaticCaptionLab04` (selected); toolbar Save (`e734`) / Regenerate Form (`e736`) present-enabled, Undo/Redo `[disabled]` (inherited dirty indicators); status bar `[ ScopeType: User / ScopeName: <masked-username> ]` (User scope rendered); **no dialog nodes**. No Form operation, no scope/preference change performed.

## Telemetry mechanism inspection + arming (this task)

Supported Playwright/MCP observation facilities in this worker session, inspected and demonstrated:

1. **Browser-context page lifecycle:** `browser_tabs` list — enumerates every controlled page/window with URL/title on demand (used for the baseline enumeration; will be used for the immediate and final enumerations around the click). Arming: available/armed (stateless read; the controlled-page set is the lifecycle surface).
2. **Request/response activity:** `browser_network_requests` (+ `browser_network_request` for detail) — per-page, continuously recorded since each page was loaded in this browser context; read on demand. Demonstrated armed: read for Tab 1 (active Designer) → 21 non-static requests (#1–#34, latest `Designer/Form/GenerateServerEvent → 200`, note "14 static requests not shown"); read for Tab 0 (active Web Client) → 243 non-static lines (latest #425 `sso/…/session/timeout → 200`, note "183 static requests not shown").
3. **Console activity (page-level):** `browser_console_messages` (+ `all` variant) — per-page, continuously recorded. Demonstrated armed: Tab 1 → 1 error (`TypeError … ctor.onKeyEnter` in Designer `app.js`, pre-existing inherited console state), 0 warnings; Tab 0 → 61 total messages (0 errors, 9 warnings — portal widget deprecation warnings), `all`-variant error read → 1 historical `ReferenceError: autofillAbortController…` from the SSO authorization page.
4. **Popup observation:** no dedicated MCP facility for OS/browser-chrome popup-blocker UI exists in this session; page-level observation (rendered dialogs/toasts inside the controlled pages + tab-list lifecycle) is the supported supplement. Proving absence of OS/browser popup UI outside the controlled automation context is out of scope (per brief).

**Task-local pre-click telemetry baseline (immediately before the would-be activation):** with Tab 0 active — `network-webclient-baseline-immediately-preclick.txt` (243 non-static lines, last #425) and `console-webclient-baseline-immediately-preclick.txt` (61 total, 0 errors, 9 warnings, `all` error variant). Post-click activity in the next task will be correlated as entries beyond these baselines.

## T1 method (this task; read-only only)

1. Read EXP-024, EXP-024-R2, EXP-009-R2 records (above).
2. Repository baseline before other writes: `git status --porcelain` → empty; HEAD `57d599b` (Merge EXP-024-R2 (accepted)).
3. Created this record + `evidence/EXP-025/`.
4. Browser tab list (read-only) → the two tabs above; identified Web Client (Tab 0) vs original Designer (Tab 1) by URL/title.
5. Tab 1 (active at start): fresh accessibility snapshot (`snapshot-webclient-preflight.txt` — Designer page), console error read, network read, screenshot `01`; then depth-limited snapshot `snapshot-designer-preflight.txt`.
6. Switched Playwright **active frame** to Tab 0 (tab select — no reload/navigation). Fresh snapshot `snapshot-webclient-active-preflight.txt`, screenshot `02`, console + network reads.
7. Read-only hover on `f14e39` (no click) + targeted snapshot of the control + screenshot `03` (inspected: signed-in badges, empty runtime area, unobstructed toolbar row; no tooltip surfaced — capture limitation).
8. Pre-click telemetry baselines (Tab 0 active): network + console (`all` error variant) reads.
9. **STOPPED before activating the launch control** — no click on any Designer control, no Form operation, no navigation/reload, no authentication, no preference/unload action.

## Evidence (under `evidence/EXP-025/`)

- `snapshot-webclient-preflight.txt` — accessibility snapshot of the **Designer** page (Tab 1, active frame at start): Save/Regenerate present-enabled, Undo/Redo `[disabled]`, scope bar `[ ScopeType: User / ScopeName: <masked-username> ]`, no dialog nodes. Proves: original Designer open, dirty inherited toolbar, User scope rendered. Does not prove tab labels (screenshot `01` covers).
- `snapshot-designer-preflight.txt` — depth-limited Designer snapshot: Form-tab tablist `FX_StaticNoColonLab01` (closable `e609`) + `FX_StaticCaptionLab04` (closable `e1790`), Save `e734`/Regenerate `e736`, Undo `[disabled]`, scope bar. Proves: two Form tabs, retained Designer identity.
- `01-designer-preflight.png` — inspected: Designer tab; both Form-tab headings, `FX_StaticCaptionLab04` selected (blue), Toolbox tree, component grid `static1_USER (Static)` (Name `static1_USER`, Caption/Description empty, Type `Static`, From Device Master `True`), scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, toolbar. Proves: retained original Designer visibly open with inherited two-tab/dirty state and User scope. Does not prove enabled/disabled detail (accessibility files cover) or any launch outcome.
- `console-designer-active-preflight.txt` — Tab 1 console: 1 error (`TypeError: Cannot read properties of null (reading 'data')` at `ctor.onKeyEnter`, Designer `app.js`), 0 warnings. Pre-existing inherited console state; recorded as baseline fact.
- `network-designer-active-preflight.txt` — Tab 1 network (non-static): 21 lines, #1–#34 (`FormWizard/GetFormWizard`, `AppApi/GenerateServerEvent`, `FormsApi/GetForm`, `Designer/Form/GetFormDesigner`, `Designer/Form/GenerateServerEvent` — all `[200]`); note "14 static requests not shown".
- `snapshot-webclient-active-preflight.txt` — accessibility snapshot of the **Web Client** (Tab 0, active frame): toolbar Open enabled (`f14e23`); runtime indicators `[disabled]`; two `Designer` buttons enabled — `f14e36`/`f14e37` and **`f14e39`/`f14e40`** (second split control, EXP-correlated launch control); Explorer panel; **no `dialog`/`modal`/`Select Form` nodes**; user badge + DEM badge rendered. Proves: authenticated Web Client live, no credential UI, no inherited dialog at this baseline, launch control present/enabled.
- `02-webclient-preflight.png` — inspected: portal top bar (System Administrator / Mongoose selected, DEM badge, user badge), Web Client menu/toolbar row, Explorer panel, **empty runtime area, no dialog**. Proves: clean Web Client baseline rendering. Does not prove enabled/disabled detail (accessibility file covers).
- `03-webclient-hover-launch-control.png` — inspected after read-only hover on `f14e39`: signed-in badges, Explorer panel, empty runtime area, toolbar row fully visible/unobstructed; **no tooltip surfaced in the capture**. Proves: launch surface unobstructed in the rendered view; hover dispatched without error. Does not prove the tooltip text (capture limitation) nor pointer-actionability of an activation.
- `console-webclient-active-preflight.txt` — Tab 0 console (warnings level): 61 total (0 errors, 9 warnings — portal `WidgetLoaderComponent`/`ApplicationUrlResolver` deprecation warnings).
- `network-webclient-active-preflight.txt` — Tab 0 network (non-static): 243 lines up to #425; includes historical `AppApi/SignIn → 200` and `sso/…/session/timeout → 200` entries; note "183 static requests not shown".
- `network-webclient-baseline-immediately-preclick.txt` — **task-local pre-click network baseline** (Tab 0 active): 243 lines, last #425 `sso/…/session/timeout → 200`. Post-click correlation in the next task = entries beyond #425.
- `console-webclient-baseline-immediately-preclick.txt` — **task-local pre-click console baseline** (Tab 0 active, `all` error variant): 61 total (0 errors, 9 warnings); 1 historical `ReferenceError: autofillAbortController…` from the SSO authorization page.

## Knowledge state (as of T1)

- Qualifying two-client baseline (exactly one retained authenticated Web Client + one retained original Designer `MGForm=FX_StaticCaptionLab04`, session-id suffix `…0a319988-…`, no modal over the launch surface, no rendered auth/session challenge): **observed** (T1).
- Retained original Designer inherited state intact (two Form tabs, `FX_StaticCaptionLab04` selected, Save/Regenerate enabled dirty, no dialogs, User scope rendered): **observed** (T1).
- Web Client launch control present/enabled — second `Designer` split control ref `f14e39` (inner `f14e40` `[active]`), EXP-009/R2/EXP-023/EXP-024-correlated; Ext ID/ordinal/ref are diagnostics, not product contracts: **observed** (T1, presence/enabled only — not activated).
- Telemetry arming: Playwright/MCP per-page console + network request/response observation demonstrably available and read (baselines recorded); browser-context page lifecycle via tab list available: **observed** (T1). No dedicated popup-blocker UI facility: **limitation recorded**.
- Additional-Designer-launch click-telemetry procedure: **unverified** — activation deferred to the next task; no promotion.
- No claim of distinct Portal/auth/IDO Runtime/Designer-backend/cache/database sessions; no persistence claim; no transient-page claim.

## Acceptance criteria (this task reports AC-1…AC-3 only)

| # | Criterion | Status | Evidence |
|---|---|---|---|
| **AC-1** | Baseline recorded: all controlled pages enumerated with URL/title; retained Web Client vs retained original Designer identified; qualifying baseline exactly one of each, no modal/session challenge | **PASS** | tab-list outputs (quoted above); `01`, `02`, `snapshot-webclient-preflight.txt`, `snapshot-webclient-active-preflight.txt` |
| **AC-2** | Web Client rendered/accessibility gates: no rendered modal over the launch surface; no visible authentication/session-establishment challenge; semantic launch control visibly present/enabled (presence/enabled only, pre-activation) | **PASS** | `snapshot-webclient-active-preflight.txt` (0 dialog nodes; `f14e39`/`f14e40` enabled), `02`, `03` |
| **AC-3** | Pre-activation observation demonstrably armed: browser-context page lifecycle + request/response observation, page-level console where supported; task-local pre-click telemetry baseline recorded; no synthetic DOM activation, no launch action | **PASS** | `network-webclient-baseline-immediately-preclick.txt`, `console-webclient-baseline-immediately-preclick.txt`, `network-designer-active-preflight.txt`, `console-designer-active-preflight.txt`; tab-list facility |

## Open questions / blockers

- No blocker: all pre-activation gates are satisfied; the one allowed activation may proceed in the next task (single native click on the second `Designer` split control, then immediate enumeration, five-second armed telemetry window, final enumeration).
- Tooltip "Open designer in a new window" did not surface in this T1's hover capture (accessibility or screenshot) — capture limitation, not evidence about the control; semantic correlation rests on the EXP-009/R2/EXP-023/EXP-024 record chain.
- Pre-existing inherited console error on the Designer page (`ctor.onKeyEnter` TypeError) and historical SSO network entries: recorded as baselines; no cause analysis (out of scope).
- Inherited state preserved intact and untouched throughout T1: `FX_StaticNoColonLab01` (unselected), `FX_StaticCaptionLab04` (selected, dirty toolbar), component `static1_USER` leftover; no Select Form dialog present at this baseline (as in EXP-024-R2).

## T2 — AC-3 telemetry capability gate (2026-10-06) — BLOCKED

Coordinator instruction (T2): inspect the currently available Playwright/MCP capabilities **once** for a supported **persistent browser-context page-lifecycle observer/recorder** that can be armed before the later launch and remain active across subsequent MCP calls through the fixed five-second window, plus supported request/response recording. A point-in-time tab list is NOT lifecycle observation; retrospective `browser_network_requests`/`browser_console_messages` reads alone are NOT sufficient. If `browser_start_tracing` (or equivalent supported tracing) is available, it may be started now (but tracing does not satisfy page-lifecycle observation unless it explicitly demonstrates page creation/closure lifecycle capture). No arbitrary Playwright code, browser-evaluated scripting, synthetic DOM hooks, dummy tabs/popups, shell/subagent workarounds, or launch activation to test instrumentation. Decisive PASS requires an explicit supported-tool acknowledgment/state showing a persistent lifecycle observer active before click. If no such supported persistent lifecycle mechanism is available: STOP immediately without launch activation, document AC-3 as failed/blocked with the exact capabilities inspected and their limits.

### T2.1 — Capability inspection (single, read-only)

Inspected the MCP/Playwright capability surface available in this worker session:

- **MCP tool surface:** the available Playwright MCP tools are `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_tabs` (list/select/close/new), `browser_console_messages`, `browser_network_requests` / `browser_network_request`, `browser_evaluate`, `browser_run_code_unsafe`, `browser_start_trace`/`browser_stop_tracing` — **no `browser_start_tracing` / tracing tool is exposed** in this session's tool set. There is no MCP tool that arms a persistent browser-context page-lifecycle observer/recorder.
- **Playwright `Page` object surface (read-only introspection):** the Page exposes event hooks (`_onClose`, `_onCrash`, `_onFrameAttached`, `_onFrameDetached`, `_onWorker`, `_waitForEvent`, `waitForNavigation`, `waitForURL`, `waitForRequest`, `waitForResponse`, `isClosed`, `opener`, `requests`) and per-page retrospective buffers (`consoleMessages`, `pageErrors`, `requests`). These are **per-page, per-call** primitives: they require arbitrary Playwright code / browser-evaluated scripting to install persistent listeners, which the T2 instruction explicitly forbids as a means of testing instrumentation. There is **no supported, MCP-exposed, persistent lifecycle recorder** that can be armed once and remain active across subsequent MCP calls.
- **`browser_tabs` list:** point-in-time enumeration of controlled pages — explicitly **not** lifecycle observation per the instruction.
- **`browser_network_requests` / `browser_console_messages`:** retrospective per-page reads of continuously-recorded buffers — explicitly **insufficient alone** per the instruction.

### T2.2 — AC-3 verdict

- **Request/response recording:** supported and continuously recorded per page (retrospective reads) — but per the T2 instruction this alone is **not sufficient** for AC-3.
- **Page-level console observation:** supported (retrospective per-page reads) — armed where supported, but again insufficient alone.
- **Popup observation:** no dedicated MCP facility for OS/browser-chrome popup-blocker UI (limitation recorded in T1).
- **Persistent browser-context page-lifecycle observer/recorder:** **NOT AVAILABLE** via any supported MCP tool in this session. No `browser_start_tracing` or equivalent supported tracing/lifecycle-recording tool is exposed, and installing persistent listeners would require forbidden arbitrary Playwright/browser-evaluated scripting.

**AC-3 (as specified in T2) = FAILED / BLOCKED.** Decisive PASS evidence (an explicit supported-tool acknowledgment/state showing a persistent browser-context page-lifecycle observer active before click) cannot be produced with the available tool set.

### T2.3 — Consequence

Per the T2 instruction: **STOP immediately without launch activation.** The single permitted Designer-launch click is **NOT** performed. EXP-025 **cannot proceed as written** to the click + five-second telemetry window because the required persistent lifecycle-observation gate cannot be satisfied with the supported MCP capabilities in this worker session. Both retained clients (Tab 0 Web Client, Tab 1 original Designer) are preserved exactly as inherited — no reload/navigation/close, no authentication, no Form operation, no Save/Regenerate, no unload, no preference/scope change, no browser-setting change.

### T2.4 — T2 evidence

- Capability inspection is recorded in this section (T2.1) verbatim; no new screenshot is decisive for a capability absence (a capability gap is documented by the inspected tool surface, not by a rendered UI state). The T1 evidence files remain the baseline evidence.
- Repository confinement re-audited after T2 writes: `git status --porcelain` → only `?? evidence/EXP-025/` and `?? experiments/EXP-025-designer-launch-click-telemetry.md`; no tracked file modified; HEAD unchanged (`57d599b`).

### T2.5 — T2 knowledge-state update

- Persistent browser-context page-lifecycle observer/recorder via supported MCP tools: **not available** in this worker session (no `browser_start_tracing`/equivalent exposed; per-page event hooks require forbidden scripting): **observed** (T2 capability inspection).
- Retrospective per-page network/console recording + point-in-time tab-list enumeration: available but **insufficient** for the AC-3 persistent-lifecycle gate: **observed** (T2).
- AC-3 (persistent lifecycle observer armed before click): **blocked/failed** — EXP-025 launch activation not authorized.
- Additional-Designer-launch click-telemetry procedure: **unverified** — never activated; no promotion.

### T2 — Stopped here (capability gate blocked; launch budget unconsumed but not authorized)

Did **not** click any launch control; did **not** navigate/reload/close either retained client; did **not** authenticate; did **not** perform any Form operation or mutation; did **not** use arbitrary Playwright code / browser-evaluated scripting / synthetic hooks / dummy tabs to test instrumentation. The experiment halts at the AC-3 capability gate.

## T1 — Stopped here (pre-activation preflight only)

Did **not** click any launch control; did **not** open/close/save/create/modify/delete any Form or component; did **not** navigate/reload/use direct URLs; did **not** authenticate; did **not** touch the retained Designer beyond read-only observation; did **not** change popup/security settings. **Next task:** exactly one native click on the second `Designer` split control (`f14e39`), immediate enumeration, five-second armed telemetry window, final enumeration + telemetry capture.
