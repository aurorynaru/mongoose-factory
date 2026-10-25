# EXP-133 T12 — Designer reload and saved-definition retention: STOPPED after an unverified reload (2026-10-26)

Outcome: **STOPPED.** One reload was attempted by sending F5 to the Designer tab. Its effect is **not verified**: the tab list reported no new console entries and the post-F5 Designer looked identical to the pre-reload view. Steps 2–8 (scope gate after a reload, Recent Forms reopen, component/variable/Form Script/Global/asset readbacks) were **not performed**. The saved definition was therefore **not** shown to be loaded from the server. This is the final T12 boundary; no further browser action was taken.

## Why F5, and why it is a deviation

- The browser tool set has no reload operation.
- The Designer tab's URL, as returned by the tool, has its session and tenant values masked (`<secret>SECRET_MONGOOSE_TENANT</secret>`). A byte-for-byte navigation to the "exact current URL" was therefore not possible without reconstructing tokens. The brief forbids that.
- The worker chose the browser's native current-tab reload (F5, one key press). It reloads the same document without constructing a URL. This is a judgment call, not a documented supported operation in the brief, and is disclosed as a deviation.

## Pre-flight (observed)

- Console log read: `evidence/playwright/console-2026-10-25T16-48-08-725Z.log` (session-wide history). Its four error lines are the known baseline: two "unload" permissions-policy entries, the T9 `Designer/Form/GenerateServerEvent` HTTP 400 and the T10 `Designer/DesignerSession/GetEditMenuState` HTTP 400.
- Fresh snapshot before any action: `evidence/playwright/t12-pre-reload-designer-fresh-snapshot.yml`. FX_LoginPortal is the selected tab. Save `[disabled]`. Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Script Language `Visual C#`. No `alertdialog`. Console 4 errors / 0 warnings.
- The Recent Forms route is documented in `experiments/EXP-006*`, `EXP-007*`, `EXP-008-R2*`, `EXP-009*`, `EXP-010-R2*` (Form menu → recent-forms entry). It was not reached.

## The reload attempt (observed, outcome unverified)

- One F5 key press on the Designer tab (`browser_press_key`).
- Tab list immediately after: no new console-log entries reported.
- Fresh snapshot after F5: `evidence/playwright/t12-post-f5-designer-fresh-snapshot.yml`. Same as pre-reload: FX_LoginPortal selected; FX_BridgeTest tab present; Save `[disabled]`; User scope; Visual C#; `FX_LoginControl UserControl` in the component tree; console 4 errors / 0 warnings. No `Identify Your Editing Scope` dialog.
- Tab list again (read-only): still no new console-log entries.
- Screenshot `evidence/EXP-133/t12-01-post-f5-designer-state-reload-unverified.png` (viewed): identical in-session Designer state. It shows the FX_LoginPortal tab selected, Visual C#, one FX_LoginControl under Pane (00), Save greyed, and the User-scope footer.
- Interpretation: a genuine page reload would normally re-emit the page-load "unload" permissions-policy entries and would often reset the Designer. Neither was observed, so the reload is **not established**. It is also not excluded: the console tool's attribution across reloads is unknown, and Mongoose may have ignored F5. The reload-count is recorded as **1 attempted, 0 verified**.

## Why the task stopped here

- The brief's purpose of T12 is to show the **server-saved** definition loads after a reload. A reload that cannot be shown to have occurred leaves only the in-session state, which is exactly what T8/T9 already read. Continuing would produce readbacks that do not answer the question.
- The brief says to STOP on an unsafe or unverifiable reload. A second reload is not permitted (one reload only), and no URL construction is allowed.
- Recent Forms reopen (Step 3) was not used: FX_LoginPortal is already open, and reopening it would not add a server reload.

## Action ledger (T12)

- Tab list 3 (start; after console read; after F5); tab select 1 (index 0, Designer); fresh untargeted snapshots 2 (pre-reload, post-F5); console-log reads 2.
- Key press 1 (F5 on the Designer tab; attempted reload; verified 0).
- Screenshots 1 (`t12-01`).
- Typed 0; clicks 0; browser JavaScript 0; run-code 0; recovery 0; Ref-not-found 0.
- Authentication attempts 0. Error-dialog acknowledgments 0 (none present). Designer Save 0. Form-tab close 0. Runtime open 0. Sign-in 0. Source, asset, variable, component and Form Script edits 0. Regenerate Form 0. Delete Form Definition 0. Metadata-cache action 0.
- Reload count: 1 attempted (F5), 0 verified. Form reopen count: 0.

## Console

- Pre-reload: 4 errors / 0 warnings (baseline).
- Post-F5: 4 errors / 0 warnings, no new console-log entries reported.
- The "new post-reload baseline" required by Step 2 could not be established, because the reload is unverified.

## Evidence files written by T12

- `evidence/EXP-133/T12-designer-reload-unverified-stop.md` (this file).
- `evidence/EXP-133/t12-01-post-f5-designer-state-reload-unverified.png`: in-session Designer state after F5. Proves the Designer is still open in the same state. Does **not** prove a reload or server-saved retention.
- Experiment record: `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (T12 section appended).
- Tool-written and disclosed, outside the evidence directory: `evidence/playwright/t12-pre-reload-designer-fresh-snapshot.yml` and `evidence/playwright/t12-post-f5-designer-fresh-snapshot.yml` (worker-named), and the console log `evidence/playwright/console-2026-10-25T16-48-08-725Z.log` (session-wide).

## Acceptance (T12 view)

- AC-8: **not met**. No verified reload, no Recent Forms reopen, no server-saved readback. Same-session retention beyond the in-session view is not established.
- AC-1 to AC-7: unchanged from earlier tasks. T12 gave no new readbacks for them.
- AC-9 (runtime) and AC-10 (final manifest): not started. Runtime is excluded from T12 and requires separate coordinator authorization.

## Knowledge state

- Designer reload via F5 after the T9–T11 failures: **unresolved** (sent; no verified effect).
- Server-saved definition loaded after a reload: **not observed**.
- Designer in-session state (FX_LoginPortal, User scope, Visual C#, Save disabled, one FX_LoginControl, console 4): **observed** (client view, this run).
- Cause of the T9 `GenerateServerEvent` and T10 `GetEditMenuState` HTTP 400s: **unresolved**.
- Generated UserCtrl variables after reload, Form Script Output/Errors, FX_vLoginResult properties and value, asset readbacks: **not observed** (not performed).

## Open questions and blockers (operator disposition)

1. **Did F5 reload the Designer?** The evidence is inconclusive. Confirm by an operator-side check or by a supported reload method, and state whether a second reload attempt is authorized.
2. **The Designer URL is masked in the tool output**, so exact-URL navigation is not available to the worker. A supported reload operation, or an unmasked URL route approved by the operator, is needed.
3. **Server-side state of FX_LoginPortal** after T9–T10 remains unknown. The Designer's client view cannot establish it.
4. The FX_LoginPortal Form Script Output/Errors (AC-7) remain outstanding because the Edit menu failed in T10.
5. Runtime (fixed fake Sign in) and the final manifest (AC-9/AC-10) remain separate. Runtime needs separate coordinator authorization and additional worker capacity.
6. T12 is the last available worker-task slot in this run. The coordinator must decide how to proceed.
