# EXP-131 final evidence manifest (T11 reconciliation, documentation only) - 2026-10-25

Harness header: `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=12`, `task=T11`.
Scope of this step: documentation only. No browser tool, no Mongoose mutation, no runtime, no Form/asset/script/component/variable change. `UserControl.js` was not opened.

Sources: experiment record `experiments/EXP-131-first-fx-web-user-control-to-form-script-bridge.md` (T1-T10); worker summaries `evidence/EXP-131/T1-...` to `T10-...`; controller audits `evidence/EXP-131/harness-audit-T1.md` to `harness-audit-T10.md` (controller-generated, not worker prose). Where a worker report and a controller audit differ, the controller audit is treated as the authority and the difference is kept, not reconciled away.

---

## 1. Closure recommendation (for operator review)

- **Recommended status: BLOCKED / UNSUCCESSFUL.** The runtime bridge round trip did not produce the required literal. AC-6 is **FAILED**.
- The experiment is **not accepted** and is **not functionally successful**.
- Setup steps (T1-T9) completed as bounded, with a weak same-session persistence boundary only.
- AC-8 remains **qualified** until authoritative operator Git review and disposition of the items in section 9 (the two T6 snapshots outside `evidence/EXP-131/`, and the T1 guard-hook event).
- No cleanup was performed. All created FX_ artifacts remain (section 3) for any later operator-authorized action.

---

## 2. Acceptance-check assessment

| ID | Assessment | Supporting evidence (repo paths) | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported** | `evidence/EXP-131/T1-preflight-summary.md`; `t1-05-web-client-fresh-snapshot.md` (header account); `t1-08` (FX_CustomerPortal present); `t1-09` (MockLoginPortal absent); `t1-10` (FX_InventoryPrototype01 absent); `t1-11` (FX_BridgeTest absent); `t1-14` (no FX_ asset folder); `t1-16-designer-clean-user-scope.png`; T2 gate re-check; `t10-00-web-client-fresh-preflight-snapshot.md` | Account ownership rests on the operator's confirmation recorded at T1 disposition (handoff), not on an independent worker check. Absence checks are filtered-view checks. T1 contains a guard-hook event (section 9, item 1). |
| AC-2 | **Supported** | `t2-04-designer-form-created-clean-components.png` (creation; Name, Device Type, Form Type, Is Master, User scope); `t8-02-designer-after-save-clean.png`; `t9-04-reopened-form-visible-state.png` (Name, Visual C#, Save disabled after reopen); `t10-09-designer-after-runtime-close.png` (identity, Save disabled) | The full User version text is confirmed from accessibility readbacks (`User version for user anton.ramos@3mworks.com.ph`); the screenshot truncates it. Exactly one Form creation is confirmed by the controller audit (one wizard Finish, T2). |
| AC-3 | **Supported** (stored content only) | `t6-07-edit-browser-file-index-html-bridge-content-before-ok.png`; `t9-14-edit-browser-file-readonly-snapshot.md` (text); `t9-15-asset-edit-browser-file-readonly.png` (full HTML) | Shows the `../$app/scripts/UserControl.js` include, one `FX_BridgeButton`, one `FX_BridgeOutput`, and the candidate `WSForm.invoke("FX_Echo", "bridge-probe", ...)` call. The call is **candidate only**. Runtime behaviour is not verified (AC-6). |
| AC-4 | **Supported** | `t9-10-user-control-references-readonly-dialog.png` (Use Web Control; `FX_Bridge/index.html`; component row `FX_BridgeControl \| UserControl` behind the dialog); `t9-08` (User Control Name `V(UserCtrl_FX_BridgeControl)`); `t9-17` and `t9-18` (Script Editor, one `FX_Echo`, prefix return) | The Web User Control Asset radio shows a dot only. Its accessibility state is disabled, so the checked state is visual only. The Script Editor shows the method text. It does not show compilation. |
| AC-5 | **Supported within a weak same-session boundary** | Save: `T8-ordinary-form-save-summary.md`; `t8-01-after-save-snapshot.md` (Save, Undo, Redo disabled; no dialog). Close and reopen: `T9-close-reopen-readback-summary.md`; `t9-01`, `t9-02` (closed); `t9-03`, `t9-04` (reopened, recent-list route). Asset readback: `t9-14`, `t9-15` | The Save produced no toast, alert, error or dialog. The success evidence is the tool `ok` result and the disabled Save state. It is not a message. Readbacks are same-session UI evidence after one reopen. This is **not** database-level durability and not cross-session equivalence. |
| AC-6 | **FAILED** (worker-reported visible observation supported by `t10-05`) | `t10-03-runtime-form-before-activation.png` (button rendered, output empty); `t10-05-runtime-form-after-single-activation.png` (visible `0` beneath the button; no `FX_ECHO:bridge-probe`); `t10-04-after-single-activation-snapshot.md` (no dialog or error element); `T10-runtime-round-trip-summary.md` | Exactly one activation (controller `harness-audit-T10.md`, row 23). The output observed after the activation is `0`. The root cause is **unresolved** (section 6). This report does not claim that `WSForm.invoke` returned `0`, that the callback ran or failed, or that `FX_Echo` compiled or failed. The T11 worker re-viewed `t10-05` from the saved file. The coordinator has not independently inspected it. |
| AC-7 | **Supported** | `t10-06-after-runtime-close-snapshot.md` (no runtime Form tab; Save disabled; no dialog); `t10-07-web-client-after-runtime-close.png` (empty Web Client shell); `t10-08-designer-after-runtime-close-snapshot.md`; `t10-09-designer-after-runtime-close.png` (FX_BridgeTest open; Save, Undo, Redo disabled; User scope) | No inherited runtime Form was open before the experiment opened the runtime instance, and none is open after. The Designer's FX_BridgeTest tab remains open, as the brief instructed. |
| AC-8 | **Qualified** | This manifest (sections 3-10); controller audits `harness-audit-T1` to `T10` | Controller and worker counts agree on actions and on most reads. Three read-count differences and one guard-hook event remain open (sections 8 and 9). The two T6 snapshots outside `evidence/EXP-131/` need operator disposition. Authoritative Git review is the final confinement check. |

---

## 3. Created-artifact inventory (for possible later operator-authorized cleanup; none removed)

| # | Object | Created or changed by (controller audit row) | Visible proof | State at last observation |
| --- | --- | --- | --- | --- |
| 1 | Form `FX_BridgeTest` (User scope, classic BuildFromScratch, Save Template unchecked) | T2 wizard Finish and OK (T2 rows 64, 66) | `t2-04`, `t8-02`, `t9-04`, `t10-09` | Open in the Designer; saved at T8 |
| 2 | Form Script method `public string FX_Echo(string s)` (returns `"FX_ECHO:" + s`) in the C# class | T5 Script Editor OK (T5 row 28); content typed at T5 row 23 | `t5-02`, `t9-17`, `t9-18`, `t9-19` | Saved at T8; readback after reopen (T9). Compilation **unresolved** |
| 3 | Web User Control Asset `FX_Bridge/index.html` (folder `FX_Bridge`) | T6 New OK (row 32), Edit Browser File OK (row 57), Global Objects OK (row 59) | `t6-04` to `t6-09`, `t9-13`, `t9-14`, `t9-15` | Same-session readbacks at T6 and after the T9 reopen. Asset-level persistence is not separately confirmed |
| 4 | UserControl component `FX_BridgeControl` on `FX_BridgeTest` (created as `userControl1_USER`, renamed) | T7 canvas click (row 20, coordinate click), rename (rows 25 to 28), reference OK (row 67), information alert OK (row 71, not a mutation) | `t7-00` to `t7-12`, `t9-06`, `t9-10` | Saved at T8; reference readback after reopen (T9) |
| 5 | Designer-generated Form variables (not created by hand): `UserCtrl_FX_BridgeControl`, `UserCtrlAsm_FX_BridgeControl`, `UserCtrlUrl_FX_BridgeControl` | Designer, at the T8 Save | `t9-11`, `t9-12` | Present. **Stale** `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER` are also present. Not edited or removed. Runtime significance **unresolved** |
| 6 | Form property change: Script Language `Visual Basic` to `Visual C#` | T4 option click (T4 row 6) and Tab commit (row 10) | `t4-01`, `t4-02`, `t9-04` | Saved at T8 |
| 7 | Possible Save Template artifact from T2 | Not determined | None | **Unresolved**; never checked |

Not created: runtime artifacts (the runtime instance was not saved), SQL tables, IDOs, global objects, property classes, validators, other Forms, other assets. Confirmed from the T1 to T10 Write and Edit audit rows (section 10).

---

## 4. Authorized mutation accounting (controller audit rows in parentheses)

- Form creations: 1 (T2 rows 64, 66).
- Form Script commits: 1 (T5 row 28). The Script Editor was opened only for edit (T5 row 14) and in read-only form at T9.
- Asset: 1 New (T6 row 21 and row 32), 1 Edit Browser File OK (row 57), 1 Global Objects OK (row 59).
- UserControl: 1 add (T7 row 20), 1 rename (T7 rows 25 to 28), 1 Edit User Control References OK (row 67).
- Script Language: 1 option click and 1 Tab commit (T4 rows 6 and 10).
- **Designer Save: 1** (T8 row 18). No Regenerate, no Delete, no Check In or Out.
- Designer Form close: 1 (T9 row 6). Reopen: 1 (T9 row 14, recent-list item).
- Runtime open: 1 (T10 row 17, double-click). Button activation: **1** (T10 row 23). Runtime close: 1 (T10 row 29, without saving).
- Not performed: database operations, FormSync, metadata unload, cache clear, regeneration, deployment, tenant configuration, login, logout, reauthentication, navigation to other Forms, and changes to Mock objects or `FX_InventoryPrototype01`.

---

## 5. Save, close and reopen accounting

- **Save (one):** toolbar Save (T8 row 18), tool result `ok`. No toast, alert, error or dialog was visible. Afterwards Save, Undo and Redo were disabled. **Regenerate Form changed from enabled to disabled**; the cause is not established. Regenerate was not invoked (no Regenerate row in the T8 audit).
- **Close (one):** Form-tab close control (T9 row 6). The tab list emptied with no save prompt and no dialog.
- **Reopen (one):** Form menu recent-list item `FX_BridgeTest` (T9 row 14). The Select Form dialog was not used. Readbacks: Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph`; `ScopeType: User`; Visual C#; Save disabled; one `FX_BridgeControl`; reference `FX_Bridge/index.html`; `FX_Echo` present.
- **Asset readback (read-only):** T9 rows 59 to 75 (Edit > Web User Control Assets, `FX_Bridge` folder, `index.html`, Open Edit Property Dialog, then Cancel on both dialogs).
- Persistence claim: **weak same-session UI boundary only**. Database-level durability and independent-session equivalence were not tested.

---

## 6. Runtime outcome (T10)

- Web Client header account `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No session dialog. No inherited runtime Form open before the experiment opened one.
- One runtime open by Select Form double-click (`favoriteContext=FX_BridgeTest`; tab heading `FX_BridgeTest`).
- Pre-activation: `FX Bridge Test` button rendered (`t10-03`). Output area empty.
- **One activation** (controller T10 row 23). Observed output **`0`** (`t10-05`). Expected literal `FX_ECHO:bridge-probe` **not displayed**. No dialog. Console unchanged.
- Classification: **unsuccessful at the observed level; root cause unresolved.**
- **Established:** after one activation the visible output is `0`, not the required literal.
- **Not established:** whether `WSForm.invoke` was called, whether it returned, whether the callback ran, whether `FX_Echo` compiled or executed, whether `0` originates from the callback path or from a default. The brief forbids further invocation attempts and inspection of `UserControl.js`, so these remain open. A later diagnosis would need a new, separately authorized step.

---

## 7. Console comparison

| Surface | Baseline | During or after tasks | Note |
| --- | --- | --- | --- |
| Web Client (portal tab) | 3 errors / 10 warnings (T1) | 3 / 10 at every reading, T2 and T10 included (T10: before open, after open, after double-click, before and after activation, after close) | The three errors are "Permissions policy violation: unload" messages from `default-app.js`, `wswebform-app.js` and `yggdrasil-core.js`. The error list was unchanged after the activation (T10 `t10-04`). |
| Designer | 2 errors / 0 warnings (T1) | 2 / 0 at every reading T1 to T10 | Same two baseline unload errors. The T10 Designer reading is at its endpoints only. |

- Tool console logs (`evidence/playwright/console-*.log`) are cumulative for the session and are **not like-for-like** with the footer counters.
- Stop rule (unexplained error increase): **not triggered** in any task.

---

## 8. Browser-action and read totals: controller versus worker

Action totals agree for every task. Read totals differ in three tasks. Controller counts are the authority (controller reads = browser read tools only; Read, Grep and Glob are excluded).

| Task | Controller actions | Worker actions | Controller reads | Worker reads | Difference and cause |
| --- | --- | --- | --- | --- | --- |
| T1 | 21 | 21 | 20 | 19 (18 + 1 screenshot) | Controller includes one `browser_wait_for` (2 s) at row 69. The worker excluded it. |
| T2 | 21 | 21 | 29 | 30 | Controller shows 11 `browser_snapshot` calls; worker reported 12. Worker overcounted by one. Not reconciled. |
| T3 | 6 | 6 | 15 | 15 | Agrees. |
| T4 | 4 | 4 | 8 | 8 | Agrees. |
| T5 | 6 | 6 | 9 | 9 | Agrees. |
| T6 | 24 | 24 | 22 | 21 | Controller shows 3 `browser_snapshot` calls (rows 13, 41, 69). Worker reported 2 and did not count the untargeted row 13. Worker undercounted by one. |
| T7 | 23 | 23 | 33 | 33 | Agrees. |
| T8 | 4 | 4 | 10 | 10 | Agrees. |
| T9 | 27 | 27 | 43 | 43 | Agrees. |
| T10 | 6 | 6 | 13 | 13 | Agrees (6 snapshots, 4 screenshots, 2 console reads, 1 tab list). |
| **Total** | **142** | **142** | **202** | **201 (worker sum)** | Net difference +1 = T1 wait (+1) minus T2 (-1) plus T6 (+1). |

Input and typing totals (controller `flagged` counts): `browser_type` 10 (T1 4, T2 1, T5 1, T6 2, T7 2). Key presses: T1 5, T2 1, T3 2, T4 1, T5 1, T6 4, T7 6, T8 2, T9 2. Coordinate clicks (`browser_mouse_click_xy`): 6 (T3 1, T7 5). Browser JavaScript, evaluate or run-code calls: **0** in every audit.

---

## 9. Failed operations, deviations and open qualifications

1. **T1 guard-hook event (not previously reported).** Controller `harness-audit-T1.md` row 9 (a `Glob`) returned: `PreToolUse:Glob hook error: Guard state unavailable: atomic update/audit I/O failed; preserve state and stop instead of bypassing the hook.` The guard's own message says "preserve state and stop instead of bypassing the hook", and the T10 instruction requires stopping immediately on any guard or hook error. The worker did not stop. Rows 10 to 80 continued, including 4 browser-typed filter strings, browser actions, and two repository Writes at rows 79 and 80. The T1 record and summary do not mention this event. Controller audit recorded the calls, so the audit trail appears intact, but the guard-state I/O failure itself needs **operator review**. No repository write error was reported.
2. **T1 row 2:** `Read` of the experiment record failed because the file did not yet exist. This was expected and had no effect.
3. **T2 browser click timeouts (A-1, A-2):** the New Form radio (A-1) and the Save Template checkbox (A-2) each timed out with no visible effect. Recovery for A-2: one fresh untargeted snapshot (row 59) and one corrected label click (row 60). The recovery allowance was then exhausted (1 of 1 snapshot, 1 of 1 corrected attempt).
4. **Read-only path errors:** T3 row 11 (`EXP-093` path wrong) and T6 row 7 (`EXP-128` path wrong). No effect.
5. **Coordinate clicks (AGENTS.md: last resort):** T3 row 19 is disclosed in the T3 record. T7 row 20 (canvas placement) is disclosed in the T7 summary. **T7 rows 47, 50, 54 and 78 are coordinate clicks not separately disclosed** in the T7 record or summary. Operator review is needed.
6. **T5 whitespace drift:** the editor auto-indent produced progressive indentation in the FX_Echo block. Structure is valid. Not repaired (cosmetic).
7. **T6 worker-named snapshots outside `evidence/EXP-131/`:** `evidence/playwright/t6-snapshot-after-fx-bridge-expanded.yml` (T6 row 41) and `evidence/playwright/t6-snapshot-reopened-asset-dialog-expanded.yml` (T6 row 69). Confinement exception. **Not moved, deleted or reclassified.** Operator disposition pending.
8. **T6 snapshot count** (section 8): the worker reported 2, the controller shows 3.
9. **T8 failed Edit calls (documentation only):** two `Edit` calls to `T8-ordinary-form-save-summary.md` (audit rows 27 and 28) failed with "String to replace not found". No change was written by a failed Edit. Later Edits succeeded (rows 30 and 31).
10. **T8 Regenerate Form state change:** enabled before Save, disabled after. Cause not established. Not invoked.
11. **T1 filter typing:** the strings `MockLoginPortal` and `FX_InventoryPrototype01` were typed into the Select Form filter (T1 rows 46 and 50). The worker did not open or select either object. Flagged for operator attention because the brief lists `FX_InventoryPrototype01` as out of scope.
12. **T6 Undo state change:** Undo was enabled after the Edit Browser File OK and disabled after the Global Objects OK. Cause not isolated.
13. **T9 Cancel by ref:** the Edit Browser File Cancel was clicked by a ref; the tool's selector does not show the label. The visible outcome (dialog closed, Global Objects still open) is consistent with Cancel. No text was typed. Disclosed in the T9 record.
14. **T10 identity method:** Help > About This Form was not opened. Identity rests on the tab heading and the URL `favoriteContext=FX_BridgeTest`.
15. **T10 console sampling:** the Designer console was read only before and after the runtime steps, not between them.

---

## 10. Repository-confinement audit

Files written or edited by the worker (controller Write and Edit rows, T1 to T10):

- **Experiment record** `experiments/EXP-131-first-fx-web-user-control-to-form-script-bridge.md`: created at T1, then edited in T2 to T10 (appended sections; header status updated at T2 and T10). Permitted.
- **Worker evidence under `evidence/EXP-131/`:** `T1-preflight-summary.md`; `T2-source-review.md`, `T2-form-creation-summary.md`; `T3-script-language-inspection-summary.md`; `T4-script-language-csharp-change-summary.md`; `T5-form-script-fx-echo-summary.md`; `T6-web-user-control-asset-summary.md`; `T7-user-control-component-summary.md`; `T8-ordinary-form-save-summary.md`; `T9-close-reopen-readback-summary.md`; `T10-runtime-round-trip-summary.md`; the worker-named snapshots `t1-*` through `t10-*` (`.md`); the worker-named screenshots `t1-*` through `t10-*` (`.png`); and this manifest `T11-final-evidence-manifest.md`. Permitted.
- **Worker-named files outside `evidence/EXP-131/`:** `evidence/playwright/t6-snapshot-after-fx-bridge-expanded.yml`; `evidence/playwright/t6-snapshot-reopened-asset-dialog-expanded.yml`. **Confinement exception, pending operator disposition.**
- **Tool-generated under `evidence/playwright/`** (not worker-named; not moved): per-action snapshots `page-2026-10-25T12-*.yml` and `T13-*.yml`, and console logs `console-2026-10-25T12-*.log` and `T13-*.log`. Glob `evidence/playwright/*2026-10-25T*` to enumerate.
- **Controller-generated** `evidence/EXP-131/harness-audit-T1.md` to `harness-audit-T10.md`. Not worker prose.

Confinement checks from the controller audits:

- No Write or Edit targets outside `evidence/EXP-131/` or the experiment record.
- No Write or Edit targets `AGENTS.md`, any recipe, any other experiment record, or any unrelated file.
- No Read targets `UserControl.js` (checked all ten audit tables).
- No browser evaluate, run-code or other browser JavaScript call (checked all ten audit tables).
- Failed repository operations: two T8 Edit failures (no write); two read-only path errors (T3, T6); one T1 `Read` on a not-yet-existing record. No repository write error was reported.
- Hook or guard error: one (T1 row 9), see section 9 item 1.

Final confinement determination belongs to authoritative operator Git review.

---

## 11. Unresolved items (not claimed as settled)

- **Root cause of the `0` output:** unresolved. The candidate contract `WSForm.invoke("FX_Echo", "bridge-probe", callback)` is unverified. The T2 source review noted that the EXP-128 Mock source uses a two-argument `invokeAsync` pattern; this is context, not verification.
- **C# compilation of `FX_Echo`:** not confirmed. The Compile Result was empty at T9 with no error rows. That shows no error was reported, not that compilation succeeded. The `0` output does not decide this either way.
- **Callback delivery and runtime behaviour:** unresolved.
- **Possible Save Template artifact at T2:** unresolved (never checked).
- **Backend-level durability and cross-session persistence:** not tested. All persistence claims are same-session UI evidence.
- **Stale generated variables** `UserCtrl*_userControl1_USER`: present alongside the new `UserCtrl*_FX_BridgeControl`; runtime significance unknown; not edited.
- **Web User Control Asset radio state:** visual only (disabled in the accessibility tree).
- **Regenerate Form state change at T8 Save:** cause not established.
- **T6 Undo state change:** cause not isolated.
- **Account ownership:** operator confirmation recorded in the handoff disposition at T1. The T11 worker did not re-verify it.

---

## 12. Recommendation to the operator

1. Record EXP-131 as **BLOCKED / UNSUCCESSFUL** for the runtime bridge round trip. AC-6 is failed. Do not record a functional success.
2. Treat AC-1 to AC-5 and AC-7 as supported within their stated same-session scope. Keep AC-8 qualified.
3. Decide disposition of: the two T6 snapshots outside `evidence/EXP-131/`; the T1 guard-hook event (section 9 item 1); and the undisclosed T7 coordinate clicks (section 9 item 5).
4. Decide whether any follow-up diagnosis of the `0` output should be a **new** experiment with its own brief. This experiment's brief does not authorize one.
5. Cleanup of the FX_ artifacts in section 3 is not part of this experiment and needs separate operator authorization.
