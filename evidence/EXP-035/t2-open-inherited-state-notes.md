# EXP-035 — T2 notes: repository review completion, single initial Open, inherited dialog state

Run R-20261009-204056-HY76, cycle 2, task T2. worker_session_id d2542b8f-3084-40fb-9b36-4ac05475c28b; task_message_id 5511e4c6-de65-45e8-89d8-2e3460c2d31f.
Permitted this task: fresh untargeted snapshot; prerequisite check; ONE toolbar Open; read-only capture of the dialog. Prohibited and NOT performed: Filter By change, checkbox click, textbox focus-click, Ctrl+A/Backspace, any typing, Enter/OK, row interaction, Cancel, reopen, JavaScript/evaluate.

## §A Repository review completed in T2 (T1 preceded it — disclosed)

T1 performed its read-only browser preflight BEFORE this complete review. T1 had read the EXP-034 record, EXP-033-R2 (procedure + T3 notes), and the first 45 lines of EXP-033-R4; it had only grepped EXP-033 and EXP-033-R3. T2 completes the review below before any further browser interaction.

### A1. EXP-034 decisive evidence (blocked run)
- `evidence/EXP-034/t2-tool-error-and-correction-notes.md` §A: the `type` tool call `type(element textbox, text="Control+A", slowly)` executed `pressSequentially('Control+A')` — LITERAL multi-character insertion. Postcondition read: textbox showed `Control+A`, zero rows, settings unchanged. §B: a label-only crop was insufficient and was recorded as history; §E: corrected by native Backspace ×9 then Ctrl+A/Backspace and 25 printable ops.
- `evidence/EXP-034/t2-open-positive-control-notes.md` §F/§G: 25 one-char `press_key` ops for `FX_ComponentRecoveryLab02` landed the exact row pre-Cancel; stale-ref recovery used; recovery allowance reached 1/1 + 1/1 = 0 remaining.
- Consequence: EXP-034 never performed a Cancel or reopen. Its row evidence cannot support any retention conclusion. **Must not repeat:** the `type` tool for any filter/key text; using `type` to send `Control+A`; spending the recovery allowance on a label-only crop.

### A2. EXP-033-R2 replay_verified native-keyboard procedure (`evidence/EXP-033-R2/t3-positive-control-notes.md`)
- Path: caret focus click on the textbox by current ref → `press_key Control+A` → `press_key Backspace` (post-clear: textbox empty, grid re-renders to the full list) → one `press_key` per printable character.
- Positive control `FX_ComponentRecoveryLab02`: exactly 25 printable ops in order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (lowercase `b` at position 23). Settled grid = one row, both cells exact.
- Failure recorded in EXP-033 T2: one `press_key` call with an EMPTY key argument returned "Unknown key: ''" and sent no keystroke. Must not be repeated: send exactly one printable character per call and verify each result.

### A3. EXP-033 original (`experiments/EXP-033-select-form-native-keyboard-filter-refresh-diagnos.md`)
- Same native path; its positive control settled as in R2. Its T4 probe entry sent `press('B')` (uppercase) where `b` was required, giving `FX_SelectFormKeyBoardProbe01` (case mismatch; history only, not relevant to the 25-character positive control). Must not repeat: a case error on any single character. Verify each character against the sequence.
- Its T5 reconciled the case mismatch and downgraded the probe result (history).

### A4. EXP-033-R3 (`experiments/EXP-033-R3-...md`)
- Attempt 1 (T1) was BLOCKED on the Infor Sign In / tenant-selection screen; the operator selected configuration and clicked OK (operator action, not a worker action).
- Attempt 1 (T3) BLOCKED: focus click on the Name-filter textbox timed out at "visible, enabled and stable" twice after one fresh untargeted snapshot; 0 keys sent. Attempt 2 then succeeded with a fresh snapshot and current refs. Must not repeat: repeating the same timed-out focus click without a fresh snapshot; a stale-ref focus attempt.
- Attempt 2 (T3) positive control PASSED with Ctrl+A → Backspace then 25 single-character ops; (T4) probe 28 ops with lowercase `b` confirmed by case-sensitive regex.

### A5. EXP-033-R4 (`experiments/EXP-033-R4-...md`)
- T2 inherited/initial state: textbox EMPTY, Filter By = `Caption`, both checkboxes unchecked, full 43-row list. Settings were established by one rendered dropdown change (Caption → Name). This matches T2's inherited state in this run (see §D).
- T3: a stale ref `f1e78` returned "Ref ... not found"; resolved with ONE targeted find (no untargeted snapshot needed). Positive control PASS: 25 single-character ops, one exact row.
- T4/T5: probe PASS for the exact literal (rendered-UI only); final ordinary Cancel dismissed the dialog, no reopen.
- Caveat recorded there: `ERR_NAME_NOT_RESOLVED` console errors on portal `user/cookie/reset` (undiagnosed; no effect observed).

### A6. Failures NOT to repeat (consolidated)
1. `type` tool for `Control+A` or any multi-character text (EXP-034 §A).
2. Empty key argument to `press_key` (EXP-033 T2).
3. Case error on a single letter (EXP-033 T4 `B` vs `b`).
4. Repeating an identical timed-out focus click without a fresh snapshot (EXP-033-R3 attempt 1).
5. Treating a stale-ref error as permission for a targeted find instead of the one allowed fresh untargeted snapshot.

## §B Start guard — fresh untargeted snapshot (planned current-reference check)

Fresh untargeted `browser_snapshot` (no earlier refs reused). Result identical to T1's preflight:
- ONE browser tab (`browser_tabs` list at T1; the snapshot shows a single Mongoose tab selected).
- Web Client usable: identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree (My/Master/Public/User Folders), toolbar `Open` enabled (ref `f1e23`), Save/New/Delete/Refresh/FiP/Get More Rows/System Notes/Documents/Send email/Export To Excel/Help Current Form disabled.
- No sign-in or configuration text; no dialog node; `find "Select Form"` before Open = no matches (checked at T1 and by this snapshot, which has no dialog node).
- No visible unsaved-change indicator (Save disabled).
Result: prerequisites hold → proceed.

## §C One ordinary initial Open (1/1 consumed)

- Single `browser_click` on the rendered toolbar `Open` control (accessibility name `Open`, ref `f1e23` from the guard snapshot above). Returned without error.
- Postcondition check (read-only): `browser_find "Select Form"` = ONE match: `dialog "Select Form" [ref=f1e78]` inside the Web Client iframe, with `textbox [active] [ref=f1e401]`.
- No second Open, no reopen. Recovery allowance untouched.

## §D Inherited dialog state (captured WITHOUT any change)

Source: `evidence/EXP-035/t2-01-dialog-open-inherited-snapshot.md` (saved fresh accessibility snapshot) and read-only finds, plus screenshot `t2-02-dialog-open-inherited-viewport.png`.

| Item | Observed value | Basis |
|---|---|---|
| Dialog | `dialog "Select Form"` open in the Web Client iframe | snapshot line `dialog "Select Form" [ref=f1e78]` |
| Name-filter textbox | `textbox [active] [ref=f1e401]`, NO value line → EMPTY; active (focused) | snapshot; screenshot shows empty field with blue focus border |
| Filter By | combobox `Caption` (NOT `Name`) | snapshot `combobox [ref=f1e407]: Caption`; screenshot dropdown reads `Caption` |
| Case Sensitive | checkbox, no `[checked]` marker → UNCHECKED | snapshot `checkbox "Case Sensitive" [ref=f1e411]`; screenshot box empty |
| Starts With | checkbox, no `[checked]` marker → UNCHECKED | snapshot `checkbox "Starts With" [ref=f1e416]`; screenshot box empty |
| Visible rows | many rows, FULL unfiltered list. First row `XML to IDO Wizard / WSFormWizardNewDataXmlToIdo`; **CORRECTED in T7 (`t7-final-acceptance-audit.md` §D): 47 rowgroup entries in the saved snapshot** (the earlier "15" came from a regex that missed refs starting with 2 or 3; the saved snapshot has no elision markers — they appeared only in the tool output) | snapshot grid; screenshot shows first 11 rows and a mid-track scroll thumb |
| First row highlight | the first row appears highlighted (blue) in the screenshot — this is the grid's default selection state; NO row was clicked or activated by the worker | screenshot |
| Buttons | OK, Cancel, Help present, unpressed; `Close Window` present | snapshot toolbar `[ref=f1e419]` |

Screenshot `t2-02-dialog-open-inherited-viewport.png` (inspected): full Web Client viewport with identity bar (`anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), DEM badge, Explorer tree behind a greyed overlay, and the centered "Select Form" dialog showing: Caption ↓ | Name header, a populated grid of WSForm* template rows, an empty Filter textbox with blue focus border, Filter By `Caption`, empty Case Sensitive and Starts With boxes, and unpressed OK / Cancel / Help.
- PROVES: the dialog is open at the inherited state; textbox empty and focused; Filter By = Caption; both checkboxes unchecked; the grid shows an unfiltered populated list (not a single row); scope (identity bar, DEM) intact.
- DOES NOT PROVE: the exact row count (only the first ~11 are legible); anything about retained state from earlier runs (this is the first dialog state at the Open); the absence of a native dialog outside the viewport.

Comparison (observed, not explained): EXP-034 T2 inherited a textbox `FX_SelectFormKeyboardProbe01` with zero rows and Filter By `Name`; EXP-033-R4 T2 inherited an empty textbox, `Caption`, full list. The present state matches R4's inherited state. No mechanism is inferred from this difference.

## §E Settlement and inherited-state checks

- Settle: a read-only find after the click returned the dialog; no further wait was needed for the populated grid to be visible in the screenshot.
- Textbox focus: the textbox is already `[active]` on dialog open; no focus-click was performed (not needed; prohibited to act further in T2).

## §F Action audit (T2)

- Initial Open: 1/1 consumed (single toolbar click).
- Tested Cancel: 0/1. Tested reopen: 0/1. Final ordinary Cancel: 0/1.
- Filter By change: 0. Checkbox click: 0. Textbox focus-click: 0. Ctrl+A / Backspace: 0. Printable key ops: 0. `type`/fill/paste/bulk: 0.
- Enter/OK: 0. Row interaction/activation: 0. Form/component action: 0. JavaScript/evaluate/run-code: 0. Authentication/navigation/tab closure/dialog dismissal: 0.
- Read-only actions: fresh untargeted snapshot ×1 (guard); find "Select Form" ×2; find regex (controls) ×1; grep on the saved snapshot ×2; screenshot ×1 (viewport). Tool-generated evidence (not authored by the worker): click result snapshot `evidence/playwright/page-2026-10-09T12-44-40-618Z.yml` and console logs under `evidence/playwright/`.

## §G Ambiguity-recovery allowance

Used **0** / remaining **1** (fresh untargeted snapshot + one corrected visible inspection, shared across all EXP-035 tasks). No stale-ref error, no ambiguous read. The guard snapshot and the post-Open snapshot/find/screenshot were planned current-reference checks and evidence captures, NOT recovery. Not relabeled as recovery.

## §H Feasibility of T3 (positive-control setup) — assessment

- The textbox is already the active element with an empty value, so T3 can start from a known empty field. T3 still needs its own fresh untargeted snapshot before any ref is used.
- Filter By must be changed from `Caption` to `Name` through the rendered combobox (T3 may do this; T2 did not). A `Name` selection is a rendered-control change and must be verified by read-back before any typing.
- Checkboxes are unchecked and must stay that way: no toggling.
- The native key path (`Control+a`, `Backspace`, then 25 one-character `press_key` calls) is replay_verified in EXP-033-R2 and R4 for this same Web Client, so the keyboard path is expected to work. The risk is the focus step: EXP-033-R3 attempt 1 failed on a timed-out focus click, so T3 should use the current textbox ref from a fresh snapshot and, if the focus click times out, stop after one fresh snapshot and report rather than repeat.
- Verdict: T3 CAN safely attempt the positive control from this inherited state, subject to its own fresh snapshot, the rendered Filter By change to `Name` with read-back, and the single-character rule.

## §I End state

Select Form OPEN in its inherited state (textbox empty and focused; Filter By `Caption`; both checkboxes unchecked; full unfiltered list). No change to any control. Web Client scope preserved. No Cancel, reopen, or further action. Dialog left open as the brief requires.

## §J Evidence files written this task

- `evidence/EXP-035/t2-open-inherited-state-notes.md` (this file)
- `evidence/EXP-035/t2-01-dialog-open-inherited-snapshot.md` (saved fresh accessibility snapshot of the open dialog; inspected via grep for the dialog subtree and the control lines)
- `evidence/EXP-035/t2-02-dialog-open-inherited-viewport.png` (inspected; see §D)
