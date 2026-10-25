# EXP-133 T10 — Operator-authorized recovery: acknowledgment, then stop (2026-10-26)

Outcome: **STOPPED at Step 2.** Step 1 completed. Step 2 did not complete: clicking the Designer `Edit` menu raised a new in-page Mongoose `Error` dialog and a new console error (HTTP 400 on `DesignerSession/GetEditMenuState`). Per the bounded instruction ("If opening or inspecting the editor introduces an unexpected error or dialog, STOP"), Form Script was not opened, no Step 3 close attempt was made, and no Step 4 reopen or readback was performed. The new Error dialog is **still open** (its OK was not clicked).

## Step 1 — Acknowledge the T9 error (observed)

- Fresh untargeted snapshot before acting (tab list, then select index 0 = `FX_LoginPortal`): dialog `alertdialog "Error"` present with OK button; console 3 errors / 0 warnings; FX_LoginPortal selected; Save `[disabled]`; scope `User / anton.ramos@3mworks.com.ph`.
- One click on the dialog's OK (acknowledgment of the T9 message; not a close retry).
- Fresh untargeted snapshot after OK: `evidence/playwright/t10-step1-post-ok-snapshot.yml`. No `alertdialog` remains. Save `[disabled]`. FX_LoginPortal selected. Scope User / anton.ramos@3mworks.com.ph. Console 3 errors / 0 warnings (no change from T9 baseline, including the T9 GenerateServerEvent HTTP 400).
- Screenshot `evidence/EXP-133/t10-01-post-error-ok-designer-save-disabled-console-3.png` (viewed): no dialog; FX_LoginPortal tab selected; Save greyed; Script Language Visual C#; Components `Pane (00)` > `FX_LoginControl` UserControl (one row); footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Proves the post-acknowledgment Designer state. Does not prove server-side Form state.
- Step 1 stop conditions checked: Form present, Save disabled, no dialog after OK, no unrelated new console error. All passed.

## Step 2 — Form Script diagnostics: not completed (observed stop)

- One click on the `Edit` menu button (navigation bar, ref `e5` from the fresh pre-OK snapshot; the post-OK snapshot was written to a file and did not list refs inline, so `e5` was not re-verified after the OK click).
- Result:
  - Console rose **3 → 4 errors**. New entry (`evidence/playwright/console-2026-10-25T16-37-01-471Z.log` line 4): `[ERROR] Failed to load resource: the server responded with a status of 400 () @ https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/Designer/DesignerSession/GetEditMenuState:0`. Lines 1–2 are the known "Permissions policy violation: unload" entries; line 3 is the T9 `GenerateServerEvent` HTTP 400.
  - A new in-page `alertdialog "Error"` appeared with text: "The server event processing returned an error. If this persists, contact your system administrator." Single OK button. Snapshot `evidence/playwright/page-2026-10-25T16-37-21-799Z.yml` lines 442–445.
  - Screenshot `evidence/EXP-133/t10-02-edit-menu-click-new-error-dialog-console-4-stop.png` (viewed): the Error dialog is over the Designer. FX_LoginPortal is selected. Save is greyed. Visual C# and scope User / anton.ramos@3mworks.com.ph are visible. FX_LoginControl is under Pane (00). The Edit drop-down is **not** visible, so the menu did not open.
- Not done (stop): Edit > Form Script was not reached. No Script Editor, no Compile Result Output or Errors read, no source change, no Cancel needed. OK on this dialog was not clicked, because the bounded instruction for Step 2 is to stop and no authorization covers acknowledging this new error.

## Steps 3, 4A, 4B, 5-runtime — not performed

- Step 3 (second and final close attempt): **not performed**. Cumulative close attempts across EXP-133: **1** (T9), completed **0**.
- Step 4A (reopen and readbacks) / Step 4B (second-close error branch): **not reached**. No reopen, no read-only retention checks, no generated-variable inventory after reopen.
- Runtime open, Sign in, runtime close: **not performed** (0/0/0), as required.

## Action ledger (T10)

- Tab list 1; tab select 1 (index 0, `FX_LoginPortal`).
- Fresh untargeted snapshots 2 (pre-OK, post-OK). Ref-not-found errors 0; fresh-snapshot recovery use 0.
- Clicks 2: OK on the T9 Error dialog 1 (Step 1 acknowledgment); `Edit` menu 1 (Step 2 entry point; triggered the new error).
- Screenshots 2 (`t10-01`, `t10-02`).
- Reads/greps on saved files: T8/T9 summaries, console log, two snapshot files, one image read each for `t10-01` and `t10-02`; greps 2.
- Typed 0; key presses 0; browser JavaScript 0; run-code 0; recovery 0; reload/navigate 0.
- Mutations: Designer Save 0; close attempts 0 in T10 (close completed 0); reopen 0; runtime open 0; Sign in 0; runtime close 0; source edit 0; asset edit 0; variable change 0; component change 0; Form Script edit 0; Regenerate Form 0; Delete Form Definition 0; metadata-cache action 0.
- Console: T10 start 3 errors / 0 warnings → after Step 1 OK 3 / 0 → after Edit click **4** / 0 (+1: `DesignerSession/GetEditMenuState` HTTP 400).

## Recovery usage

- The OK click in Step 1 was the single authorized acknowledgment of the T9 dialog, not a retry.
- No speculative recovery, no retry of the Edit click, no OK on the new dialog.

## Generated variables

- Not inventoried in T10 (Step 4A not reached). T8 recorded no Form-level `UserCtrl*` variable in the same session (see `T8-ordinary-save-summary.md`). Generated-variable state after close/reopen remains **unresolved**.

## Evidence files written by T10

- `evidence/EXP-133/t10-01-post-error-ok-designer-save-disabled-console-3.png`: post-OK state (no dialog, Save disabled, console 3). Proves the Designer client state after acknowledgment. Not the server state.
- `evidence/EXP-133/t10-02-edit-menu-click-new-error-dialog-console-4-stop.png`: new Error dialog after the Edit click (console 4). Proves the new dialog is open and the Edit menu did not show. Does not identify the cause.
- `evidence/playwright/t10-step1-post-ok-snapshot.yml`: post-OK accessibility snapshot (filename chosen by this worker).
- `evidence/EXP-133/T10-recovery-diagnostics-stop.md` (this file).
- Experiment record: `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (T10 section appended).

Tool-written and disclosed, not authored by the worker (under `evidence/playwright/`): `page-2026-10-25T16-37-09-203Z.yml` (snapshot returned by the OK click), `page-2026-10-25T16-37-21-799Z.yml` (snapshot returned by the Edit click), `console-2026-10-25T16-37-01-471Z.log` (console log with the new HTTP 400 entry). Also the tab-list/select outputs reference this log.

## Acceptance (T10 view)

- AC-8: **not met**. Same-session close/reopen retention was not tested (close not completed in T9 or T10; no reopen).
- AC-7: Form Script diagnostics (Output/Errors) were **not** re-read in T10. The T7 readbacks stand as recorded; no new compile-result evidence.
- AC-6: T8 readback stands (one FX_LoginControl, Use Web Control and Control URL recorded). Not re-read in T10.
- AC-9, AC-10: not started. AC-9 runtime and AC-10 final manifest remain outstanding.

## Knowledge state

- Close-time server-event failure (T9): **observed** (one run); cause **unresolved**.
- New server-event failure on opening the Edit menu (`DesignerSession/GetEditMenuState` HTTP 400) with the same generic Error dialog: **observed** (one run); cause **unresolved**. Whether it relates to the T9 close failure or the T8 Save is **unverified**. No hypothesis was tested.
- Designer state after the Step 1 acknowledgment: **observed** (client-side only).
- Form Script diagnostics: **not observed** in T10.
- Close completion, reopen retention, generated variables after reopen, runtime round-trip, independent compilation success, Global-variable resolution, database durability, replay verification, real authentication: **not claimed**.

## Open questions and blockers (operator disposition required)

1. **The Error dialog from the Edit click is still open and was not acknowledged.** The operator must decide whether to dismiss it. The worker did not click OK because the Step 2 stop rule applies. Per the end-state rule, in-page dialogs should not remain open unless the task authorizes it. The operator should confirm.
2. **Server-side Form state is unknown.** The Designer shows FX_LoginPortal open and clean (client view), but the 400 responses on `GenerateServerEvent` and `GetEditMenuState` suggest a server-side fault. The state should be checked by the operator, through a route they choose, before any further task.
3. **Form Script diagnostics (Step 2) are still required** for AC-7 and the compile evidence, but opening the Edit menu now triggers the server error. Whether to retry, read the diagnostics another way, or defer is an operator decision.
4. **Whether to retry the close (Step 3)** is not authorized as a worker step. T10 Step 3 is not performed.
5. Generated UserCtrl variables after reopen remain unresolved (no reopen).
