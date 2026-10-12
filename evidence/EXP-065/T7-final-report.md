# EXP-065 — T7 final acceptance report (documentation only)

**Outcome: BLOCKED at AC-5.** The Designer `FX_RefreshButton` Theme Class readback after the Designer close/reopen was never obtained, so AC-5 is recorded as **FAILED**. Everything else in the chain was observed in the same session.

- Experiment: EXP-065, Hello World Part 4 Section 6b (FX_HelloWorld Layout theme; FX_BlueButton Theme Class on the Import button).
- Run `R-20261012-225328-o9Fr`, cycle 6, task T7.
- Worker session `6c5f00dc-cbf5-42b9-84cf-95676225e69c`; task_message_id `abbb20cf-56ec-4c3a-90dc-bdc32f9f50f8`.
- Experiment record: `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md`.
- This report: `evidence/EXP-065/T7-final-report.md`.
- Findings are **observed** or **unresolved** only. Nothing is `replay_verified`.

## 1. T7 scope and method

- T7 made **zero browser calls**. No tab was listed, selected, snapshotted, clicked or screenshotted. No preference, property, theme, Save, close or reopen was performed.
- Sources reviewed in T7:
  - The EXP-065 record: section index and status lines (Grep), plus the T1–T6 audit tables written in this session. The full body text of the record was not re-read in T7.
  - The six controller-generated audits `evidence/EXP-065/harness-audit-T1.md` to `harness-audit-T6.md` (read in full). They record attempted tool calls and native results only.
  - The contents of `evidence/EXP-065/` (Glob).
- The screenshots were **not re-viewed in T7**. Their descriptions below come from the viewings recorded in T1–T6 (see the record §§8–17).

## 2. Final acceptance matrix

| AC | Status | Decisive evidence | Limitations |
| --- | --- | --- | --- |
| AC-1 | **PASSED (observed)** | Tab list (record §3.1; controller audit T1, row 9): tab 0 = Web Designer, tab 1 = Web Client. `t1-01`: Designer tab `FX_Items`, footer `ScopeType: User`, Save and Undo disabled, Properties `FX_RefreshButton (Button)`, Appearance > **Theme Class = `BlueButton`**. `t1-03`: Layout `Theme:` = **`Hi world`** (verbatim). `t1-04`: theme list. | Cancel does not exist in this dialog (`t1-02`: OK and Help only). The dialog was closed with its × control (deviation D1). Theme list rows below `Projector` are unconfirmed (scroll bar present). A blank first row is unexplained. |
| AC-2 | **PASSED (observed)** | Pre-change `t2-01` (`Hi world`). Before OK `t2-02` (`FX_HelloWorld` selected). One OK (controller T2, row 17). After OK `t2-03` (dialog closed; status `OK (Object 1 of 1)`; Import teal). Read-back after reopen `t2-04` (`FX_HelloWorld`). Dismissed with × `t2-05` (dialog gone, no OK). | Read-back is same-session only. Other preference pages were not re-read after OK. "No other preference changed" rests on the audit (only Layout-related clicks) and matching Layout controls before and after. No read-back was taken after the × close. |
| AC-3 | **PASSED (observed)** | Pre-state `t3-01`: label **`Theme Class`**, value `BlueButton`. Option list `t3-02`: one option, `FX_BlueButton`. One selection (controller T3, row 10). Readback `t3-03`: `FX_BlueButton`. Commit by one Tab focus-out (T4): `t4-01` shows `FX_BlueButton`, Save and Undo enabled, canvas Import blue. | "No other property changed" is supported by the audit and by the visible Appearance rows (Background Color empty, Foreground `#000000`, Bitmap File Name, Font and Justification empty). It is not a full property diff. The value committed on focus-out, not on selection; the T3 "Save disabled" reading was taken before the commit. |
| AC-4 | **PASSED (observed)** | One native toolbar Save (controller T4, row 9). Native response, verbatim (`t4-02` toast; find result): heading `Save`; body `Form [FX_Items] and global object(s) were saved.` Save disabled afterwards (`t4-02`; find shows `[disabled]`). Save count = **1**. | The body says "global object(s) were saved". The worker changed no Global Object, so what that phrase covers is unresolved (see U3). The response text is read from the UI toast, not from a server log. |
| AC-5 | **FAILED** | **Met parts:** Designer close once, no unsaved-changes prompt (`t5-01`; controller T5, row 3). Reopen once through the unnamed toolbar Open icon, which opened Select Form with one row, `FX_Items` (`t5-03`; controller rows 12, 16). Identity after reopen `t5-04`: Name `FX_Items`, Form Type Normal, Is Master True, footer `ScopeType: User`, Save and Undo disabled. **Not met:** Theme Class readback after reopen. Canvas selection of the Import button timed out (controller T5, row 21), so no component was selected (`t5-05`). | Recorded as FAILED per the coordinator instruction. The class is not reported as lost or persisted. The blue canvas Import button in `t5-04`/`t5-05` is a canvas observation, not a class readback. No retry was made. |
| AC-6 | **PASSED (observed)** | Pre-close runtime Import teal (`t6-01`). Close once with no prompt (`t6-02`). Form > Open > Select Form, one row `FX_Items` (`t6-03`; controller T6, rows 12–19). Reopened (`t6-04`): `FX_Items`, records `dumbbell`/`eggs`/`guitar`, Import **teal**, Save disabled, no dialog. | Appearance observed only; no unload; no colour cause assigned to FX_BlueButton. At reopen the Description field held focus with its text selected; nothing was typed or edited. |
| AC-7 | **MET at the observed level** for the audited action set | Worker audit (section 3): one preference OK, one class change, one Designer Save, one Designer close/reopen, one runtime close/reopen, zero theme edits, zero Global Objects or Edit Styles opens, zero other property changes, zero Import activations, zero runtime Saves, zero typed text. Controller audits: `prohibited-tool hits=0` in all six tasks; `Flagged tool usage: {}`; the only key sequence is one Tab (T4). Final screenshots: `t5-04`/`t5-05` (Designer, no dialog); `t6-04` (runtime, no dialog, Save disabled). | Supported absence of unauthorized UI actions. Not verified against application internals (stored model values, server state, database content). Qualifications: U3 (Save wording); D1 (× close not followed by read-back); no read of other preference pages; the Save toast was visible during T4 and was not dismissed by the worker (a notification, not a modal; not visible in T5). |
| AC-8 | **MET as a report** (this document). Experiment outcome: **BLOCKED at AC-5**. | Sections 3–8 below: decisive evidence per AC, the reconciled audit with exact counts, the restoration baselines, the worker-written file inventory and the final browser state. | Counts reconcile to the controller audits (section 3). |

**Recommendation: BLOCKED at AC-5.**

## 3. Cumulative browser-action audit (reconciled)

### 3.1 Per-task counts

Columns: Lists = `browser_tabs list`; Sel = `browser_tabs select`; Snap = `browser_snapshot`; Find = `browser_find`; Shot = `browser_take_screenshot`; Elem-OK = successful element click; Coord-OK = successful coordinate click (`mouse_click_xy`); Elem-fail = failed element click; Key = `press_key`; Hover = `mouse_move_xy`; Wait = `wait_for`.

| Task | Lists | Sel | Snap | Find | Shot | Elem-OK | Coord-OK | Elem-fail | Key | Hover | Wait |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | 1 | 1 | 3 | 4 | 6 | 6 | 0 | 0 | 0 | 0 | 0 |
| T2 | 1 | 1 | 4 | 7 | 5 | 10 | 0 | 0 | 0 | 0 | 0 |
| T3 | 1 | 1 | 2 | 2 | 3 | 2 | 0 | 0 | 0 | 0 | 1 |
| T4 | 1 | 0 | 3 | 3 | 2 | 1 | 0 | 0 | 1 | 0 | 0 |
| T5 | 1 | 0 | 5 | 3 | 5 | 2 | 1 | 1 | 0 | 1 | 0 |
| T6 | 1 | 1 | 2 | 6 | 4 | 4 | 0 | 0 | 0 | 0 | 0 |
| **Total** | **6** | **4** | **19** | **25** | **25** | **25** | **1** | **1** | **1** | **1** | **1** |

### 3.2 Reconciliation against the controller audits

- Controller "actions" (the interaction tools) per task: T1 7, T2 11, T3 3, T4 2, T5 5, T6 5. Total **33**. Worker totals: selects 4 + element clicks OK 25 + coordinate OK 1 + element fail 1 + Tab 1 + hover 1 = **33**. Match.
- Controller "reads" (the read-only tools, including `wait_for`): T1 14, T2 17, T3 9, T4 9, T5 14, T6 13. Total **76**. Worker totals: lists 6 + snapshots 19 + finds 25 + screenshots 25 + wait 1 = **76**. Match.
- Each task matches individually (for example T3: 2 clicks + 1 select = 3 actions; 8 read tools + 1 wait = 9 reads).

### 3.3 Counting differences disclosed

No irreconcilable count difference was found. Three definitional points:
- **Coordinate click counting.** The record's T5 and cumulative "successful clicks" (22 and 26) include the one coordinate click on the toolbar Open icon. The controller logs it as a separate tool. Element-only successful clicks total 25.
- **Targeted snapshot in T4.** The worker record says one snapshot in T4 was taken with a target (the Save ref). The controller log shows no target argument, so the record is the only source for that detail. The Save click itself used a ref from an untargeted snapshot (record §15.3).
- **`wait_for` classification.** The controller counts `wait_for` as a read; the worker counts it as a separate wait. Totals are the same.

### 3.4 Non-browser events logged by the controller

- T1 `Read` error (controller #2): the EXP-065 record path did not yet exist when first read. The record was created afterwards. No effect.
- T5 `Edit` error (controller #26): the intended T5 note on record item Q7 did not match the file text, so it was not applied. Q7 stands as first written. Its partial answer is in record §16 only.

### 3.5 Cumulative state-change counts

| Item | Count | Bound (brief) | Within bound |
| --- | --- | --- | --- |
| User Preference OK (Layout theme only) | 1 | at most 1 | yes |
| User Preference changes (other than Layout theme) | 0 | 0 | yes |
| Theme Class change (FX_RefreshButton) | 1 | at most 1 | yes |
| Other property changes | 0 | 0 | yes |
| Designer Save (native toolbar) | 1 | at most 1 | yes |
| Designer close / reopen | 1 / 1 | one each | yes |
| Runtime close / reopen | 1 / 1 | one each | yes |
| Theme edits, creates, saves; Global Objects or Edit Styles opened | 0 | 0 | yes |
| Runtime record changes, runtime Save, Import activation | 0 | 0 | yes |
| Dialogs closed with × (no OK) | 2 (T1 baseline; T2 read-back) | not restricted | noted (D1) |
| Select Form dialogs closed with OK | 2 (T5, T6) | not restricted | noted |
| Top-toolbar "Delete Form Definition" clicks | 0 | 0 | yes |
| Checkout, unload, cache, FormSync, deployment, regeneration | 0 | 0 | yes |
| Navigate, refresh, restart, reauthentication | 0 | 0 | yes |
| Browser JavaScript, evaluate, run-code, console or network inspection | 0 | 0 | yes (controller: prohibited hits 0) |
| Typed text | 0 | — | yes |

Screenshots: 25 worker-requested (`t1-01`–`t6-04`).

## 4. Deviations and disclosed issues

- **D1. Cancel control absent (T1, T2).** The brief names Cancel for the User Preferences dialog. The dialog has only OK and Help plus the top-right × control (`t1-02`, `t1-03`). The × was used once to close the T1 baseline (no OK) and once to close the T2 read-back (after the T2 OK and read-back). No read-back followed the T2 ×, so storage after × is not verified.
- **D2. Unnamed Designer toolbar Open icon (T5).** The accessibility tree gives the toolbar's first icon (open-folder glyph) no name. A hover at about (25, 51) showed no tooltip (`t5-02`). The icon was identified visually and clicked once by coordinate (`t5-03`). The result (Select Form listing `FX_Items`) is consistent with Open. The Designer trash (Delete Form Definition) icon is at about x = 204 on the same row (`t5-01`); it was not clicked.
- **D3. Adorner interception on the canvas (T5).** The canvas Import button (identified by `data-mgcompnamevalue="FX_RefreshButton"`) could not be clicked. Playwright reported a `compadorner-…` overlay intercepting pointer events, with a 5000 ms timeout (controller T5, row 21). One fresh snapshot and one visual inspection followed. No further selection attempt was made, per the brief. Cause unresolved.
- **D4. Selection-reference deviation (T6).** The Select Form OK ref (`f1e338`) came from a find on the same open dialog, not from a fresh untargeted snapshot immediately before. The Form > Open item ref (`f1e243`) came from a find after the Form menu click. Both clicks succeeded once with no ref error. The Form-menu ref (`f1e10`) came from a fresh untargeted snapshot.
- **D5. Targeted snapshot in T4.** A targeted snapshot (ref `e15`) was used before the fresh untargeted snapshot that supplied the Save ref (`e603`). The Save click used the untargeted ref.
- **D6. T3 commit ambiguity.** In T3 the combo showed `FX_BlueButton` but Save stayed disabled. T4 resolved this with one Tab focus-out (no value change), which enabled Save. This is recorded as observed and does not change the one-Save count.
- **D7. Save toast left visible (T4).** The toast was a notification with a Close button. The worker did not click Close. It was not visible in T5.
- **D8. Runtime Description focus (T6).** At reopen the Description field held focus with its text selected (`t6-04`). No key press or typing was performed by the worker.
- **D9. Q7 note edit failed (T5).** See 3.4.

## 5. Unresolved items (observed only)

- **U1. Theme Class after Designer reopen (AC-5).** Not read. The last committed value is `FX_BlueButton` (T4 Save, observed through the toast and the T4 readback). Whether the stored class reads `FX_BlueButton` after the reopen is **unresolved**. Nothing is claimed as lost or persisted.
- **U2. Designer blue versus runtime teal.** Observed sequence:
  - Runtime Import blue at the T1 baseline (Layout `Hi world`; `t1-06`).
  - Runtime Import teal after the Layout OK (T2, `t2-03`), before any class change was committed.
  - Runtime teal unchanged after the close/reopen (T6, `t6-01`/`t6-04`), which came after the class Save.
  - Designer canvas Import cyan before the class commit (`t1-01`, `t3-01`, `t3-03`).
  - Designer canvas Import blue after the commit (`t4-01`, `t4-02`, `t5-04`, `t5-05`).

  The sequence is consistent with the runtime colour tracking the Layout theme and the Designer canvas tracking the committed class. That is an inference, not an established cause. Record §15.8 and §17.6 also note that the EXP-064 record gives the `FX_BlueButton` Normal-state Background as `#FF5CC6C7`, a teal hue near the runtime colour. No causal claim is made for FX_BlueButton. Attribution would need a separate, authorized experiment.
- **U3. Scope of "global object(s) were saved" (T4).** The native toast says global object(s) were saved. The worker made no Global Objects change. What the native save included beyond FX_Items is unknown.
- **U4. Theme dropdown blank first row and possible rows below `Projector`.** Not explained (T1 `t1-04`).
- **U5. Dismissal by × (D1).** Storage after the × close is not verified by a read-back.
- **U6. Identity of the toolbar Open icon.** Identified visually and by its Select Form result only (D2).
- **U7. Canvas click interception (D3).** Cause unresolved.
- **U8. Durability.** Only same-session observations exist. No cross-session or database durability is claimed.

## 6. Restoration baselines

- **Layout theme (User Preferences):** original value **`Hi world`** (T1 `t1-03`; T2 `t2-01`). Current value `FX_HelloWorld` (T2 read-back `t2-04`; unchanged through T6). Restoring it would need one further User Preferences OK. Not performed.
- **FX_RefreshButton Theme Class:** original value **`BlueButton`** (T1 `t1-01`; label `Theme Class`). Current committed value `FX_BlueButton` (T4 Save). Restoring it would need one further property selection and one Designer Save. Not performed.

## 7. Final browser state

- **Web Designer (tab 0):** last observed in T5 (`t5-05`). Form `FX_Items` reopened (single Form tab), URL `designer/default.aspx?MGForm=FX_Items`, footer `ScopeType: User`, Save and Undo disabled, no component selected, no dialog open. Not re-inspected in T7.
- **Web Client (tab 1):** last observed in T6 (`t6-04`; the current tab at the end of T6). Runtime `FX_Items` open after the Form > Open > Select Form reopen; records `dumbbell`, `eggs`, `guitar`; Import teal; Save disabled; Description field focused with text selected (no edit); no modal dialog. Not re-inspected in T7.
- No dialog, unsaved-change prompt or browser-native prompt was left open by the worker at the last observation of either tab.

## 8. Worker-written file inventory

Written in T1–T7 (repo-relative):

- `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md` (created T1; updated T2–T7)
- `evidence/EXP-065/T7-final-report.md` (created T7; this report)
- `evidence/EXP-065/t1-01-designer-initial-state-fx-items-clean.png`
- `evidence/EXP-065/t1-02-user-preferences-open-behavior-page-before-layout.png`
- `evidence/EXP-065/t1-03-user-preferences-layout-baseline-theme-hi-world.png`
- `evidence/EXP-065/t1-04-user-preferences-theme-dropdown-list-readonly.png`
- `evidence/EXP-065/t1-05-user-preferences-layout-after-dropdown-collapsed-value-unchanged.png`
- `evidence/EXP-065/t1-06-web-client-after-preferences-closed-no-ok.png`
- `evidence/EXP-065/t2-01-user-preferences-layout-pre-change-theme-hi-world.png`
- `evidence/EXP-065/t2-02-theme-selection-fx-helloworld-before-ok.png`
- `evidence/EXP-065/t2-03-web-client-after-ok-theme-response.png`
- `evidence/EXP-065/t2-04-user-preferences-readback-layout-theme-fx-helloworld.png`
- `evidence/EXP-065/t2-05-web-client-after-readback-dialog-dismissed-no-ok.png`
- `evidence/EXP-065/t3-01-designer-pre-change-appearance-theme-class-blue-button.png`
- `evidence/EXP-065/t3-02-theme-class-dropdown-open-fx-bluebutton-option-visible.png`
- `evidence/EXP-065/t3-03-theme-class-readback-after-select-fx-bluebutton-canvas.png`
- `evidence/EXP-065/t4-01-after-single-tab-focus-out-theme-class-save-state.png`
- `evidence/EXP-065/t4-02-designer-immediately-after-single-save-native-response.png`
- `evidence/EXP-065/t5-01-designer-after-form-tab-close-result.png`
- `evidence/EXP-065/t5-02-designer-toolbar-open-icon-hover-tooltip-check.png`
- `evidence/EXP-065/t5-03-native-open-selection-interface-after-toolbar-open.png`
- `evidence/EXP-065/t5-04-designer-reopened-fx-items-form-tab-identity-scope-clean.png`
- `evidence/EXP-065/t5-05-designer-reopened-visible-inspection-import-selection-blocked.png`
- `evidence/EXP-065/t6-01-runtime-pre-close-import-button-baseline.png`
- `evidence/EXP-065/t6-02-runtime-after-form-tab-close-result.png`
- `evidence/EXP-065/t6-03-runtime-form-open-submenu-select-form-route.png`
- `evidence/EXP-065/t6-04-runtime-reopened-fx-items-import-button-appearance.png`

Totals: 27 worker-written files (25 PNG screenshots, 1 record, 1 final report).

Not worker-written (listed so the reviewer can separate them):
- `evidence/EXP-065/harness-audit-T1.md` to `harness-audit-T6.md`: controller-generated.
- `evidence/playwright/*`: tool-generated snapshot and console files, outside the EXP-065 paths. Not inventoried here. The operator's git review decides their status.

Repository confinement is supported by this inventory and the controller audits. The operator's git review is authoritative.

## 9. Knowledge state

- **Observed:** items in AC-1 to AC-4 and AC-6 (section 2); the Layout theme `Hi world` → `FX_HelloWorld` in one session; the class option list and selection; the native Save toast text; the runtime Import teal before and after the close/reopen.
- **Unresolved:** U1 to U8 (section 5).
- **Not replay_verified:** no procedure in this experiment is marked verified.

## 10. Next steps (not performed in T7)

- To resolve AC-5, the operator would need to authorize one read-only route to the stored Theme Class after the Designer reopen. A candidate, not tested here, is the component selector at the top of the Properties panel, which avoids the canvas adorner (D3). That route would need its own approval.
- To attribute the colours (U2), a separate, authorized experiment would be needed.
- To resolve U3, the Save scope would need an explicit check outside this experiment.
- No restoration (section 6) has been performed.
