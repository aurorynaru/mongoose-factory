# EXP-055 T7 — inherited runtime closure, one Select Form opening, automatic-opening Prompt observation, settled runtime

Date: 2026-10-11. Run R-20261011-153829-vsIH, EXP-055, cycle 6, task T7.
Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `89051269-2bfa-4c45-a13a-d0261843c22c`.
Mode: one runtime closure; one Web Client Open > Select Form opening; one OK dismissal of the expected Hello World prompt; read-only settled inspection. **No FX_RefreshButton activation. No manual Refresh, F4, Filter in Place, Get More Rows, or additional query. No runtime Save, New, Delete, or data entry. No Designer Save or close/reopen. No Diagnostics, User Preferences, Diagnostic Log, reload, or reauthentication.**

## Result

- **AC-7: supported.** The inherited FX_Items runtime was verified clean and closed once with no prompt. The saved FX_Items Form was opened once through Open > Select Form. The immediate state (before any dismissal) shows the FX_Items runtime with the expected prompt present.
- **AC-8: supported.** A native prompt was displayed after the single opening. Its literal message is `Hello World`, its title is `Infor Mongoose Application Development Framework - FX_Items`, its icon is information, and its only response control is OK. It was dismissed exactly once with its native OK.
- **AC-9: supported.** After the dismissal, the runtime shows FX_Refresh and the three original records with the EXP-054-R2 values. Save is disabled. The native loaded-object indicator reads `(Object 1 of 3)`.
- The automatic-opening Prompt **did appear**; no failed postcondition was recorded for AC-8.
- FX_RefreshButton was **not** activated in T7 (reserved for T8).

## Cumulative counts (reconciled through T7)

- Designer Saves: **1** (T5).
- Designer close: **1** (T6). Designer reopen (recent forms): **1** (T6).
- Runtime closure (inherited FX_Items tab): **1** (T7).
- Controlled runtime opening (Open > Select Form): **1** (T7).
- Automatic-opening Prompt dismissal: **1** (T7; OK).
- FX_RefreshButton activations: **0**.
- Manual refreshes: **0**. Runtime mutations: **0**.
- Diagnostics or User Preferences operations: **0**. Diagnostic Log operations: **0**.

## 1. Reference review

- T1 runtime baseline: three records `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`; FX_Refresh rendered; Save disabled; inherited DevTools log (16 FormEvent rows; not cleared).
- EXP-054-R2 T5 decisive runtime evidence: after Select Form, the Description field had focus with its text highlighted at open; status `Description (Object 1 of 3)`; FX_Refresh rendered; no prompt (pre-EXP-055 handler). The "highlight at open" is not a typed change.
- T6: the saved Designer definition (one StdFormRefreshCompleted handler, one Prompt action, Hello World parameters) is the definition the runtime open is expected to use. This is the same browser session, not cross-session evidence.

## 2. Pre-closure gate (view only)

- `browser_tabs list` (first call); `browser_tabs select 1` (Web Client) succeeded; fresh snapshot `t7-snapshot-00-pre-closure-fresh-web-client-runtime.md`.
- Identity bar: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (line 55). Configuration identity matches T1.
- Tab `FX_Items` selected (line 115–116); Form tab heading `FX_Items`; closable control `Close Panel FX_Items` (ref f1e101, line 117).
- Save `[disabled]` (line 59); Open, New, Delete, Refresh, Filter in Place enabled or disabled as at T1; Get More Rows `[disabled]` (line 69).
- Records (lines 151–167): dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA.
- FX_Refresh button rendered (line 170). No dialog, no alertdialog, no authentication challenge, no portal banner. Console 0 errors, 2 warnings (not inspected further).
- Screenshot `t7-01-pre-closure-inherited-runtime-state.png` (viewed): FX_Items runtime, identity bar, records 1–3, FX_Refresh, Save greyed, no dialog. Note: no `(Object n of n)` indicator visible in this frame's status line (the status line was not shown in the Web Client's bottom bar in this frame).
- Gate: **passed**. Proceeded.

## 3. Runtime closure (one)

- Native Form-tab close control `Close Panel FX_Items` (ref f1e101) clicked **once**.
- Immediate state (`t7-02-immediate-after-single-runtime-closure.png`, viewed; `t7-snapshot-01-after-single-runtime-closure.md`): no FX_Items tab, no FX_Items heading, no Close Panel control, no dialog or alertdialog node; Save `[disabled]` (line 59). The Explorer side panel and DevTools log remain (the DevTools log is the inherited log, not cleared).
- No unsaved-change prompt; no unexpected modal. **Closure verified.**

## 4. Controlled Open > Select Form (one opening)

- Toolbar `Open` control clicked **once** (`t7-03`, viewed: tooltip `Open`; Select Form dialog open). The Select Form dialog shows one row, Caption `FX_Items` / Name `FX_Items`, filter `FX_Items`; OK and Cancel. Accessibility `dialog "Select Form"` (line 406) with gridcell `FX_Items` (lines 416–417).
- The FX_Items row (ref f1e705) clicked **once** to select it (`t7-04`, `t7-snapshot-03`).
- OK (ref f1e733) clicked **once** (the single controlled opening). No direct URL, no alternate launcher, no retry.

## 5. Immediate state after the opening, before any dismissal

- `t7-05-immediate-after-single-open-before-any-dismissal.png` (viewed) and `t7-snapshot-04-immediate-after-single-open-before-dismissal.md`:
  - Runtime tab heading `FX_Items` (behind the prompt, greyed).
  - Records visible behind the prompt: dumbbell, eggs, guitar; the dumbbell detail values (dumbbell / 45 pound iron / 45.00 / EA).
  - FX_Refresh rendered behind the prompt.
  - **Native prompt displayed** (see §6).
  - Status line `(Object 1 of 3)` (accessibility `textbox` line 477; screenshot bottom-left, viewed).
  - Save `[disabled]` (the Save icon is greyed in the screenshot).
- **Automatic-opening Prompt observation: the expected prompt appeared.**

## 6. The automatic-opening Prompt (captured before dismissal)

- Accessibility (`t7-snapshot-04`, lines 481–484): `alertdialog "Infor Mongoose Application Development Framework - FX_Items"`; content `Hello World` (line 482); `toolbar` with one button `OK` (line 484, `[active]`).
- Literal message: **`Hello World`** (exact).
- Title: **`Infor Mongoose Application Development Framework - FX_Items`** (the window-title text of the native alert; this includes the Form name FX_Items).
- Icon: information (blue "i" circle; visual, `t7-05`).
- Response controls: **one button, OK**. No Yes, No, Cancel, Abort, Retry, or Ignore control present in the accessibility tree.
- Context: the prompt is titled with the FX_Items Form name and appears over the FX_Items runtime tab.
- Default button: the OK button is the active/focused control (visual focus ring in `t7-05`; accessibility `[active]`).

## 7. Single OK dismissal

- The OK control (ref f1e873) clicked **once**. Its label and the single-response state were verified before the click (§6).
- Immediate post-dismissal (`t7-06-after-single-ok-dismissal-settled.png`, viewed; `t7-snapshot-05-settled-after-single-ok-dismissal.md`): the alertdialog is gone (no `alertdialog` or `dialog` node in the grep). The runtime tab is visible and active.
- The Description field now has focus with its text highlighted (`45 pound iron`, accessibility `textbox "Description:" [active]` line 178). This is the same focus/highlight observed at open in EXP-054-R2 T5 and in the pre-dismissal screenshot. No key press or typing was performed in T7; this is a focus state, not a data change.

## 8. Settled runtime (after the permitted dismissal; no mutation)

- `t7-06` (viewed): FX_Items tab; records: dumbbell (`45 pound iron`, `45.00`, `EA`), eggs and guitar rows; FX_Refresh button rendered; status `Description (Object 1 of 3)` (line 477 of `t7-snapshot-05`; screenshot bottom-left).
- Accessibility (`t7-snapshot-05`):
  - Save `[disabled]` (line 59). New, Delete, Refresh, Filter in Place enabled as at T1; Get More Rows `[disabled]` (line 69). None of these was used.
  - Grid cells (lines 151–168): `dumbbell` / `45 pound iron` / `45.00` / `EA` (lines 151–154); `eggs` / `cage free` / `6.99` / `DZ` (lines 158–161); `guitar` / `natural acoustic` / `129.99` / `EA` (lines 165–168). **Exactly the EXP-054-R2 baseline values.**
  - `button "FX_Refresh"` rendered (line 170).
  - Description textbox `45 pound iron` (line 178).
  - No `alertdialog` or `dialog` node.
- **Native loaded-object indicator:** `(Object 1 of 3)` is visible in the status line (accessibility line 477 and the screenshot). Recorded.
- The dumbbell detail values are shown in the detail pane; the eggs and guitar values are read from the grid cells (not from a detail pane).

## 9. Not performed (scope)

- FX_RefreshButton was **not** activated (reserved for T8).
- No manual Refresh, F4, Filter in Place, Get More Rows, additional query, or second opening.
- No runtime Save, New, Delete, or data entry. No business-field edit.
- No Designer action. No Diagnostics, User Preferences, Diagnostic Log operation. No reload. No reauthentication.
- Note on the DevTools log: it still shows the inherited FX_Items rows (timestamps 07:08:00.855 / .949) and was not cleared or configured. Whether this session's opening produced new FormEvent rows was not inspected in T7 (the log panel was not scrolled to the bottom); no claim is made about new log rows.

## 10. Acceptance status (T7 scope)

| AC | Status | Evidence / limit |
| --- | --- | --- |
| AC-7 inherited runtime verified clean and closed once without a prompt; one Select Form opening; immediate evidence shows Form identity and the Prompt after automatic Initial Command Refresh; no manual refresh or additional load | **Supported.** Pre-closure gate `t7-01`, `t7-snapshot-00`; closure `t7-02`, `t7-snapshot-01` (tab absent, no dialog); opening `t7-03`, `t7-04`, `t7-snapshot-02`, `-03`; immediate state with the prompt `t7-05`, `t7-snapshot-04`. | Limits: the prompt is observed after the opening, but whether the prompt is caused by the Initial Command Refresh specifically is not established by this observation (no internal event causation is claimed). Same browser session. |
| AC-8 the controlled runtime opening displays a native Prompt whose literal message is Hello World and whose available response is OK only; evidence captures the Prompt before exactly one OK dismissal | **Supported.** Literal `Hello World` (`t7-snapshot-04` line 482); single OK button (line 484); captured before dismissal (`t7-05`, `t7-snapshot-04`); dismissed once (`t7-06`, `t7-snapshot-05`). | Limits: the title includes the Form name; the info icon is visual only. The prompt appeared once; no repeat test. |
| AC-9 after the automatic-opening prompt observation and permitted dismissal, the runtime displays FX_Refresh and the three original records with the baseline values; Save disabled; native loaded-object indicator recorded | **Supported.** `t7-snapshot-05` lines 151–170, 59, 477; `t7-06`. Object indicator `(Object 1 of 3)` recorded. | Limits: the eggs and guitar values are from grid cells, not a detail pane; the detail pane shows only dumbbell. |

## 11. Action counts (T7)

- Tab operations: list 1; select 1 (tab 1). Succeeded.
- Snapshots saved: 6 (`t7-snapshot-00` to `-05`). Screenshots: 6 (`t7-01` to `t7-06`).
- Clicks: Form-tab close control 1 (runtime closure); toolbar Open 1; Select Form row 1; Select Form OK 1 (the opening); Prompt OK 1 (the dismissal). Total 5.
- Finds 0. Typing 0. Key presses 0. Wheel 0. Mouse 0.
- Recovery snapshots used: 0. Corrected inspections: 0. Errors: none. Ref-not-found: none. Unexpected modal: none.
- FX_RefreshButton activations 0.

## 12. Evidence files written by T7

- `evidence/EXP-055/T7-runtime-closure-select-form-opening-and-automatic-prompt-observation.md` (this report).
- Screenshots (`evidence/EXP-055/`):
  - `t7-01-pre-closure-inherited-runtime-state.png`: inherited runtime before closure; identity bar; records; FX_Refresh; Save greyed; no dialog. Proves the pre-closure runtime state; does not prove an Object indicator (not shown in this frame).
  - `t7-02-immediate-after-single-runtime-closure.png`: the runtime area blank after the close (no FX_Items tab); Explorer and DevTools panels visible; no dialog. Proves the tab is absent.
  - `t7-03-after-open-control-select-form-dialog.png`: Select Form dialog with the single FX_Items row (Caption and Name FX_Items). Proves the dialog and its row; the Open tooltip is visible.
  - `t7-04-select-form-row-selected-before-ok.png`: the FX_Items row selected, OK visible. Proves the row selection state before the single OK.
  - `t7-05-immediate-after-single-open-before-any-dismissal.png`: the immediate state with the native prompt: title `Infor Mongoose Application Development Framework - FX_Items`, message `Hello World`, info icon, one OK button; greyed FX_Items runtime, records, FX_Refresh behind it; status `(Object 1 of 3)`. Proves the prompt and its context before dismissal. Does not prove the prompt's origin (Initial Command Refresh causation not claimed).
  - `t7-06-after-single-ok-dismissal-settled.png`: the runtime after OK; prompt gone; records and FX_Refresh rendered; status `Description (Object 1 of 3)`; Description focused with text highlighted (no typing). Proves the settled runtime after dismissal.
- Accessibility snapshots (`evidence/EXP-055/`): `t7-snapshot-00-pre-closure-fresh-web-client-runtime.md`, `t7-snapshot-01-after-single-runtime-closure.md`, `t7-snapshot-02-select-form-dialog-open.md`, `t7-snapshot-03-select-form-row-selected.md`, `t7-snapshot-04-immediate-after-single-open-before-dismissal.md` (the alertdialog and its OK), `t7-snapshot-05-settled-after-single-ok-dismissal.md` (records, Save, FX_Refresh, object indicator).
- Tool-generated (gitignored `evidence/playwright/`): snapshots and console logs for the T7 window.

## 13. Knowledge state

- Observed (same session): the inherited runtime closed without a prompt; the Select Form opening showed a native prompt with literal `Hello World`, OK only, title with FX_Items; the single OK dismissed it; the settled runtime shows the three records at the baseline values, FX_Refresh, Save disabled, and `(Object 1 of 3)`.
- Not claimed: that the Initial Command Refresh caused the prompt; cross-session persistence; server-side event causation; database durability; whether this opening produced new FormEvent log rows.
- Not tested in T7: FX_RefreshButton activation and its prompt (T8).
- Replay-verified: none.

## 14. Next permitted action (not authorized by T7)

T8: the single FX_RefreshButton activation and, if a second Hello World prompt appears, one OK dismissal. The browser is left in the settled runtime state (clean, Save disabled, no dialog) for T8.
