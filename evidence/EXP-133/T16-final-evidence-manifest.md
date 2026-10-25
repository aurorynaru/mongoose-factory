# EXP-133 — Final evidence manifest (T1–T15 reconciliation, 2026-10-26)

Produced by the documentation-only continuation (no browser tool, no Mongoose action, no Designer Save, no runtime, no Sign in, no reload). Sources: the experiment record `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md`; the task summaries `T1-preflight-summary.md` through `T14-runtime-summary.md`, `T15-fresh-designer-readback-and-runtime-close-summary.md`; the controller audits `harness-audit-T1.md` through `harness-audit-T15.md`; the saved screenshots and accessibility snapshots named below.

The fixed fake password value is not reproduced in this manifest. The fake username `fx_probe` is recorded as in the brief.

## 1. Lifecycle counts (cumulative, reconciled)

| Brief item | Required | Observed | Status |
| --- | --- | --- | --- |
| One User-scoped Classic BuildFromScratch Form created | 1 | 1 (wizard Finish, T2; `t2-05`, `t2-06`) | met |
| Ordinary Designer Form Save | 1 | 1 (T8; notification `Form [FX_LoginPortal] and global object(s) were saved.`; `t8-02`) | met |
| Designer Form-tab close | 1 | **0 completed** (T9 attempt raised an in-page server-event Error dialog and console 2→3; `t9-01`) | **not met** |
| Designer reopen (recent-forms or other supported route) | 1 | 1 fresh Designer window via "Open designer in a new window" (T15; `t15-03`, `t15-04`). Not the recent-forms route; not a close/reopen | **deviation** |
| Runtime open | 1 | 1 (T14; Select Form OK; `t14-02`) | met |
| Sign in activation | 1 | 1 (T14; `t14-03` masked entry, `t14-04` `received`) | met |
| Runtime close without save | 1 | 1 (T15 audit 154; `t15-23` pre-close, `t15-24` post-close) | met |
| Two Web User Control assets | 2 | 2 (`FX_Login/index.html`, `FX_Login/script/app.js`; T4) | met |
| Global persistent variable | 1 | 1 (`FX_vLoginResult`; T5) | met |
| UserControl component | 1 | 1 (`FX_LoginControl`; T6) | met |
| Form Script method | 1 | 1 (`FX_ProcessLogin`; T7) | met |
| Form Save-template | unchecked | unchecked (T2; `t2-04`) | met |

## 2. Per-task reconciliation

| Task | Outcome | Mutations | Ordinary Save | Close | Runtime open | Sign in | Runtime close | Key evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | Read-only preflight; account and scope gates; absence checks (scoped) | 0 | 0 | 0 | 0 | 0 | 0 | `T1-preflight-summary.md`, `t1-14`, `t1-15`, `t1-17` |
| T2 | Form created by wizard (Save Template unchecked); Script Language Visual Basic recorded (deviation) | Form created 1 | 0 | 0 | 0 | 0 | 0 | `T2-creation-summary.md`, `t2-05` to `t2-07` |
| T3 | Script Language changed to Visual C# (dirty; not saved) | property 1 | 0 | 0 | 0 | 0 | 0 | `T3-script-language-summary.md`, `t3-02` |
| T4 | Two assets created; both sources committed; parent Global Objects OK | assets 2; source commits 2; parent OK 1 | 0 | 0 | 0 | 0 | 0 | `T4-web-user-control-assets-summary.md`, `t4-07`, `t4-13`, `t4-16`, `t4-17` |
| T5 | Global `FX_vLoginResult` created | global 1; dialog commits 2 | 0 | 0 | 0 | 0 | 0 | `T5-global-variable-summary.md`, `t5-08` |
| T6 | `FX_LoginControl` placed, renamed, references committed | component 1; reference OK 1 | 0 | 0 | 0 | 0 | 0 | `T6-usercontrol-component-summary.md`, `t6-06`, `t6-09` |
| T7 | `FX_ProcessLogin` method committed (Script Editor OK) | script commit 1 | 0 | 0 | 0 | 0 | 0 | `T7-process-login-method-summary.md`, `t7-06`, `t7-07` |
| T8 | One ordinary Designer Save; Save disabled afterwards | save 1 | **1** | 0 | 0 | 0 | 0 | `T8-ordinary-save-summary.md`, `t8-02`, `t8-03` |
| T9 | Form-tab close attempt; not completed; Error dialog | 0 | 0 | 0 (attempt 1) | 0 | 0 | 0 | `T9-close-reopen-summary.md`, `t9-01` |
| T10 | Error dialog acknowledged (OK); Edit menu click produced a second server-event Error; not clicked | 0 | 0 | 0 | 0 | 0 | 0 | `T10-recovery-diagnostics-stop.md`, `t10-01`, `t10-02` |
| T11 | Second Error dialog acknowledged (OK); URL gate; no reload | 0 | 0 | 0 | 0 | 0 | 0 | `T11-session-gate-designer-reload-stop.md`, `t11-01`, `t11-02` |
| T12 | F5 on the Designer tab (reload not verified) | 0 | 0 | 0 | 0 | 0 | 0 | `T12-designer-reload-unverified-stop.md`, `t12-01` |
| T13 | Runtime open interrupted by Session Expired; session-expiry procedure (modal OK; one navigation; one native beforeunload accepted); re-established | 0 | 0 | 0 | 0 (interrupted) | 0 | 0 | `T13-runtime-session-expiry-stop.md`, `t13-08` |
| T14 | Runtime open; pre-click card; fixed fake pair; one Sign in; `received` observed | 0 | 0 | 0 | **1** | **1** | 0 | `T14-runtime-summary.md`, `t14-00` to `t14-04` |
| T15 | Fresh Designer window readback (no commits); runtime close | 0 | 0 | 0 | 0 | 0 | **1** | `T15-fresh-designer-readback-and-runtime-close-summary.md`, `t15-00` to `t15-24`, `harness-audit-T15.md` |
| T16 | Documentation only | 0 | 0 | 0 | 0 | 0 | 0 | this manifest; T16 section of the record |

Action totals: the per-task browser-action counts are recorded inconsistently across tasks (some as exact tallies, some as approximate, and the T15 controller total of 48 does not reconcile to its own table). A single cumulative browser-action total is therefore **not reported**. The per-task mutation ledger above is the reconciled record.

## 3. Acceptance checks AC-1 to AC-10

| AC | Status | Basis | Limits |
| --- | --- | --- | --- |
| AC-1 | **supported** | T1: account header, `ScopeType: User`, `FX_CustomerPortal` positive control visible, no visible scoped matches for `MockLoginPortal` or `FX_InventoryPrototype01` (not opened), no `FX_LoginPortal`, no `FX_Login` asset, no `FX_vLoginResult` | Scoped and visible inventory only. Global list is a rendered window. Absence is not tenant-wide. |
| AC-2 | **supported** | T2 creation (User scope, BuildFromScratch, Save Template unchecked); T3 Visual C#; T15 fresh window shows Script Language Visual C#, Form Type Normal, Is Master True (`t15-05`) | Classic-versus-Mock-Flex deviation is deliberate and recorded. Script Language was Visual Basic at creation (wizard had no option). |
| AC-3 | **supported** (same session and fresh window) | T4 readbacks (`t4-16`, `t4-17`); T15 asset tree and source (`t15-19`, `t15-20`, `t15-21`) | Source as displayed, not executed. Two files only; no stylesheet or third asset observed. |
| AC-4 | **supported as source structure** | T4 committed source (full); T15 partial view (`t15-21`) | Not a runtime invalid-input test (none was run, per brief). `WSForm.invoke` two-argument pattern documented in the approved guidance; runtime-verified only for the valid pair in T14. |
| AC-5 | **supported** | T5 (`t5-05`, `t5-08`); T15 (`t15-17`): Name, Global True, Persistent True, blank Value, User version | Visible window only; the Global list is not a full inventory. |
| AC-6 | **partly supported** | T6 and T8 (one component, Use Web Control, Control URL `FX_Login/index.html`); T15 (`t15-05`, `t15-11`) | **Six** Form-level UserCtrl variables in the T15 window; three are stale non-FX_ names; operator disposition required. |
| AC-7 | **supported as source readback; compile unresolved** | T7 (`t7-06`, `t7-07`); T15 (`t15-12`); Errors grid empty (`t7-09`, `t15-14`); Output blank (`t15-13`) | Empty Errors grid is recorded only as an empty grid, not as compile proof. |
| AC-8 | **not met as specified** | Same-session UI retention observed in a fresh Designer window (T15); Save disabled | The required ordinary close and reopen **did not complete** (T9 close failed; T10–T12 did not complete a close). The claim is limited to "a new Designer window displayed the saved definition in this session"; server reload is unverified. |
| AC-9 | **observed single-run round trip** | T14: pre-click card (`t14-02`), masked entry (`t14-03`), one Sign in, `received` (`t14-04`); T15: runtime close (`t15-23`, `t15-24`) | Pre-click result emptiness rests on the accessibility tree (the frame clipped the button). Not proof of Global-object resolution. Single run. |
| AC-10 | **this manifest** | See sections 1–8 | Git confinement left for the operator (section 9). |

## 4. Artifacts created (FX_ scope)

- Form: `FX_LoginPortal` (User scope, User version for `anton.ramos@3mworks.com.ph`, Classic BuildFromScratch, Script Language Visual C#).
- Web User Control assets: `FX_Login/index.html` (text/html) and `FX_Login/script/app.js` (text/javascript). The folder nodes `FX_Login` and `script` are containers, not assets.
- Global persistent variable: `FX_vLoginResult` (User version).
- UserControl component: `FX_LoginControl` (Pane 0, Tab 0).
- Form Script method: `public string FX_ProcessLogin(string username, string password)` (Visual C#, lines 14–20 of the Script Editor).

## 5. Generated variables (Mongoose-generated, non-FX_ prefix)

As observed in the T15 fresh window (`t15-16`, accessibility `page-2026-10-25T17-11-22-368Z.yml` lines 249–270). Earlier tasks (T6, T7, T8) observed no UserCtrl variable before the T15 window; the T8 accessibility read after its Save found none.

| Variable | Disposition status |
| --- | --- |
| `UserCtrl_FX_LoginControl` | Matches the FX_LoginControl component. The operator's 2026-10-26 disposition (quoted in T8) authorized "Designer-generated Form-level UserCtrl variables for FX_LoginControl only". Consistent with that authorization. |
| `UserCtrlAsm_FX_LoginControl` | Same as above. |
| `UserCtrlUrl_FX_LoginControl` | Same as above. |
| `UserCtrl_userControl1_USER` | **Stale, non-FX_.** Generated under the pre-rename component name. Not covered by the disposition as written. **Operator disposition required.** Not deleted or altered. |
| `UserCtrlAsm_userControl1_USER` | **Stale, non-FX_.** Same. **Operator disposition required.** |
| `UserCtrlUrl_userControl1_USER` | **Stale, non-FX_.** Same. **Operator disposition required.** |

The `User Control Name` expression of `FX_LoginControl` reads `V(UserCtrl_FX_LoginControl)` in the T15 window (`t15-10`). It read `V(UserCtrl_userControl1_USER)` in T8 (`t8-04`). The timing of this change is unresolved.

Note on earlier record: the T8 summary (and the T8 claim "generated variables: none") is contradicted by the T15 window. The T8 observation was taken in the same session before any reopen. The discrepancy is recorded; its cause is unresolved.

## 6. Excluded and shared objects

Not opened, edited, saved or regenerated by any task (per the records):

- `MockLoginPortal`: never opened (T1 absence check only; scoped list).
- `FX_InventoryPrototype01`: never opened (T1 absence check only; scoped list).
- `FX_CustomerPortal`: positive control in the Select Form list (T1); not opened.
- `FX_BridgeTest`: a second Designer tab opened in EXP-132; left open and untouched in every EXP-133 task (per records). Its current state is **unknown** after T15.
- `FX_Echo`, `FX_Bridge/index.html`, `FX_vEcho`, `FX_BridgeControl`, `FX_Bridge` assets: not modified. `FX_vEcho` appears as a visible positive control in the Global list (`t1-12`, `t15-17`); not edited.
- Shared `$app/scripts/UserControl.js`: referenced as an unchanged dependency only (`t4-07`, `t15-20`); not opened for edit or uploaded.
- `$app`, `mongoose`, `sohoComponents`, `sohoxi`: not opened or changed.
- IDOs, SQL tables, data, property classes, validators, Global Objects other than `FX_vLoginResult`: none created or changed.

Stale Designer tab (from T9): the tab that carried the T9 close attempt and the T10/T11 dialogs was not touched in T15 (per the audit). Its current state (Form open, dirty or clean) is **unknown**.

## 7. Session, recovery and procedural deviations

- **Session expiry (T13).** One Session Expired alert; standing procedure used: modal OK (1), one navigation to the permitted portal URL (1), one native beforeunload prompt accepted to let navigation complete (disclosed; no unsaved Form was open), a portal notification dismissed once by its own close control. Account and configuration re-verified in the Web Client. Cause of the expiry: **unresolved**.
- **Server-event errors (T9, T10).** A Form-tab close raised an in-page server-event Error with HTTP 400 on `Designer/Form/GenerateServerEvent`. The subsequent Edit-menu click raised a second Error with HTTP 400 on `Designer/DesignerSession/GetEditMenuState`. Both dialogs were acknowledged with OK (T10 step 1; T11 step 1) and no retry was made. Cause: **unresolved**; any relation between them: **unverified**.
- **Designer reload (T12).** One F5 on the Designer tab (the browser tool set has no reload operation and the URL masks session values). The effect is **unverified**; no new console entries were reported. Recorded as a deviation.
- **Designer reopen (T15).** The brief requires one ordinary close and reopen through the recent-forms path. The close did not complete (T9). T15 opened a fresh Designer window through the Web Client's "Open designer in a new window" split button, as the operator-approved readback route. This is a deviation from AC-8's procedure and is not a close/reopen.
- **URL parameter (T4).** The Designer page URL lost `&MGForm=FX_LoginPortal` after the first asset commit (observed in T4 and in the T11 gate). The Designer tab kept displaying `FX_LoginPortal`.
- **Coordinate clicks (T15).** Seven coordinate clicks (audit orders 27, 46, 53, 65, 69, 131, 139) with targets not recorded in the audit. Save stayed disabled in every subsequent Designer snapshot; no commit recorded. Attribution of each click to a named control is **not possible from the audit**.
- **Duplicate screenshot names (T15).** `t15-05` and `t15-09` were each captured twice; the first captures were overwritten (audit orders 33→37 and 60→63). The saved files are the second captures.
- **Ref not found (T15).** One occurrence (audit 83). Recovery: fresh untargeted snapshot (1 of 1), corrected click (1 of 1).
- **Click timeout (T2).** Save Template click timed out (ref e930; `displayEl` span intercepted pointer events). Recovery: fresh snapshot (1 of 1), corrected click on the visible label (1 of 1).
- **Script Language (T2–T3).** Created as Visual Basic (wizard has no option); changed to Visual C# in T3 (dirty) and saved in T8.
- **Screenshot filename mismatch (T1).** `t1-15-web-client-account-header-and-console.png` does not show the console; the console reading rests on the snapshot footer.
- **Source-line count (T7 vs T15).** T7 recorded a 24-line Form Script; the T15 Script Editor displays lines 1–25 (24–25 blank). The method text (lines 14–20) is identical. Minor; recorded.
- **Experiment-record edit (T15 audit order 160).** The audit reports an Edit to the experiment record as ok. The record as read in T16 has no T15 section and an unchanged status line (T9). **The content of that edit cannot be determined from the audit.** The operator should inspect the record's diff (not run by this continuation).
- **Worker turn limit (T15).** Stopped at 150 turns before the final report. This summary was reconstructed (see the T15 summary, section 12).
- **Harness flags.** T14 audit: `browser_type` flagged twice, which matches the two authorized text entries (username and password). T15 audit: prohibited-tool hits 0. No browser JavaScript, evaluate or run-code call is recorded in any task ledger.

## 8. Transient fake-password exposure (T14) — procedural qualification

- During T14, after Sign in, a later accessibility read returned the password field's accessible value in tool output. The worker recorded this as a disclosure and made no further password-field reads.
- The T14 summary reports a zero-match count for the password value across `evidence/`. **That zero count is the worker's earlier report.** In this T16 continuation I did not repeat a literal search for the value, to avoid restating it in a tool call. The T14 audit (`harness-audit-T14.md`) records `Exact values: []`, `Spelled strings: []` and `Key sequence: []`; this is a controller-generated record of attempted typed strings, not of tool output.
- Conclusion: no file in the EXP-133 evidence set is recorded as containing the value. The tool-output exposure is a **procedural qualification** for the operator's final review. It is not a finding of credential exposure in saved evidence.
- The password was masked in every screenshot reviewed (`t14-03`, `t14-04`, `t15-23`).

## 9. Repository writes and Git confinement

Files written by the EXP-133 worker sessions, to the best of the records:

- Experiment record: `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (created in T1; edited in T2–T14 and in this continuation).
- Evidence directory `evidence/EXP-133/`: summaries and screenshots (per the lists in the record) and `harness-audit-T1.md` through `harness-audit-T15.md` (controller-generated).
- Tool-written under `evidence/playwright/` (not authored by the worker; disclosed): page-snapshot YAMLs and console logs, including those stamped 2026-10-25T15 to 2026-10-25T17 and the T15-window files listed in section 10.
- In this continuation: `evidence/EXP-133/T15-fresh-designer-readback-and-runtime-close-summary.md` (created), `evidence/EXP-133/T16-final-evidence-manifest.md` (created), the experiment record (edited).

Git: this continuation did not run git, did not modify tracked source and did not clean up files. The harness computes repository confinement from before/after Git state and the evidence diff. **Authoritative confinement review is left to the operator**, including the audit order 160 content question above.

## 10. Evidence inventory notes

- T15-window accessibility snapshots: 38 files stamped 2026-10-25T17-06-40 through 17-14-31 (T15 by timestamp; attribution to specific actions is by timestamp only).
- T15-window console logs: `console-2026-10-25T17-06-20-207Z.log` (session-wide history) and `console-2026-10-25T17-06-58-836Z.log` (new Designer window, two unload-class errors).
- T14-window files (for reference): `page-2026-10-25T17-00-59-081Z.yml`, `…17-01-04-777Z.yml`, `…17-01-14-483Z.yml`, `…17-01-22-202Z.yml`, `…17-02-09-176Z.yml`; `console-2026-10-25T17-00-47-072Z.log`, `…17-00-47-073Z.log`.
- Screenshots not inspected in the T16 continuation (files exist): `t15-01`, `t15-02`, `t15-06`, `t15-07`, `t15-08`, `t15-09`. Everything else in `t15-*` was viewed.

## 11. Unresolved issues and operator decisions

1. **Stale non-FX_ UserCtrl variables** (`UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER`). Operator disposition required under the brief's FX_ boundary rule. The worker has not deleted or altered them.
2. **Close/reopen (AC-8).** The required ordinary Designer close and reopen did not complete. Decide whether a new close attempt is authorized (the T9 failure is unresolved), or whether AC-8 is accepted in the narrower form observed (fresh Designer window, same definition).
3. **Stale Designer tab and `FX_BridgeTest` tab.** Their current state is unknown. Confirm whether either still holds `FX_LoginPortal` open or dirty.
4. **Server-event HTTP 400 causes** (T9 `GenerateServerEvent`; T10 `GetEditMenuState`) and the **Session Expired cause** (T13): unresolved.
5. **Compile success** of `FX_ProcessLogin`: unresolved (empty Errors grid only).
6. **Global-variable resolution** by `ThisForm.Variables` and `WSForm.getVarValue` (EXP-130 U-1): unresolved and out of scope.
7. **Audit order 160** (record edit): inspect the record's diff against the pre-T15 state.
8. **Transient password exposure (T14)**: procedural qualification for final operator review; no saved file recorded as containing the value.
9. **Coordinate-click attribution (T15)**: seven clicks with unrecorded targets; Save stayed disabled; operator may want the Designer state (components, properties) re-read before accepting the T15 readbacks.
10. **Runtime Sign-in visibility:** the pre-click Sign in button was clipped by the frame in T14; the single observation is the accessibility tree plus the post-click screenshot.
11. **Git confinement review** (section 9).

## 12. Final assessment (limitations preserved)

- An observed single-run round trip occurred in the Web Client: the saved FX_LoginPortal rendered the FX_LoginControl Web User Control, the fixed fake pair produced one Sign in, and FX_LoginResult displayed `received`, with the password visually masked and no alert observed (T14). The runtime Form was then closed without saving (T15).
- The Designer shows the saved definition in a fresh window, with Save disabled, the Visual C# method, the two assets, the Global variable and the component reference (T15). This is a same-session UI observation; it is not proof of server reload or cross-session durability.
- The required ordinary close and reopen did not complete. AC-8 is **not met** as specified.
- Six Form-level UserCtrl variables are present; three are stale non-FX_ names awaiting operator disposition.
- Not claimed: real authentication, credential verification, server-side security, compile success, Global-variable resolution, database durability, cross-session persistence, replay verification.
