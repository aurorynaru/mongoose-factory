# EXP-093 final evidence and acceptance audit (T11, documentation only)

Date: 2026-10-15. Worker session: 8df4d69e-293a-41bf-9abf-a61af6b32609.
Scope of this report: reconciliation of EXP-093 acceptance checks AC-1 to AC-5 against the kickoff criteria, using the experiment record, the controller-generated audits `harness-audit-T1.md` to `harness-audit-T10.md`, and the existing screenshots and transcription in `evidence/EXP-093/`.

Method and limits of this step:
- Zero browser calls and zero Mongoose changes in T11. No Form was opened, closed or reopened, and no experiment step was repeated.
- Counts were tallied from the audit table rows by counting tool names with read-only search. The audits' summary lines ("N actions, M reads") do not match their own table rows in any file, so the summary lines were not used.
- Screenshots were read for the T1 to T9 claims that this report relies on. The screenshots cited below were re-viewed in their earlier tasks; they were not re-described from memory.
- Observed UI state only. Nothing here is replay verification, cross-session durability, an independently verified stored value, or a Save-triggered recalculation result.

## 1. Decisive recommendation

**EXP-093 must not be declared accepted.** AC-2's original criterion, "the Designer still clean afterwards," failed in T1 (Save and Regenerate Form were enabled after the Script Editor was closed with Cancel). The later operator-authorised close and "No" answer in T2 restored a clean Designer, but that is a recovery of the state, not a pass of the original criterion. No operator waiver or revised acceptance criterion exists in the record. The worker therefore cannot issue an acceptance.

Recommended outcome for the coordinator: **operator disposition.** Either (a) the operator waives or revises AC-2's clean-state clause on the basis of the T2 recovery, in which case EXP-093 can be recorded as accepted with limits, or (b) AC-2 stays failed, in which case the outcome is partial or blocked. In both cases the successful observations below stay recorded.

Summary by check:

| ID | Recommendation | Basis |
|---|---|---|
| AC-1 | Met with limitation | Script Language label and value observed; the "Edit Form Script" label was not observed (the pencil opened the editor directly). |
| AC-2 | **Failed** on the original clean-state clause; editor-opening clauses met | T1 post-Cancel state (Save and Regenerate enabled); recovered by T2, which is recorded separately. |
| AC-3 | Met (observed) with limitations | Event Handlers grid empty; all six components read in T5; values are displayed blanks. |
| AC-4 | Met as observed in one session, with qualifications | T6 baseline; T7 single Count entry, Order Total 90.00 before Save, exact prompt, No; T9 reopen and both-order readback; clean close. |
| AC-5 | Met after reconciliation (this report); the record needed the corrections listed in section 5 | Counts reconciled to the audits. |
| Overall | **Not accepted. Operator disposition required.** | AC-2 failed; no waiver exists. |

## 2. Acceptance reconciliation

### AC-1: sources reviewed; session usable; Designer FX_Orders in User scope and clean; Script Language and the Edit Form Script entry point recorded

- Status: met with limitation.
- Evidence: `t1-01-designer-gate-behavior-script-language.png` shows `ScopeType: User`, the Form Properties Behavior group expanded, Script Language = Visual Basic with a drop-list arrow, the blue pencil button with a chevron at the top of the Properties panel, and Save and Regenerate Form greyed at the start of T1 (the T1 audit records the Designer snapshot and the Behavior and Expand clicks, rows 14 to 22). The T1 snapshot shows Save `[disabled]` at the start.
- Limitations:
  - The "Edit Form Script" label was **not observed.** The pencil button has no accessible name. A click on it (T1 audit row 28) opened the "Script Editor" dialog directly. Whether the chevron offers a menu item with that label was **not** checked. Per the operator's instruction, this label stays unverified.
  - "Sources reviewed": the T1 audit records Reads of the transcript, `apply-component-class.md`, `session-expiry-and-stale-designer.md`, and the Outcome sections of EXP-053, EXP-055, EXP-081 and EXP-092 (rows 2 to 4 and 8 to 11, with offsets). **No audit row records a tool read of `AGENTS.md`.** Its rules were supplied in the task text. The "sources reviewed" claim for AGENTS.md is therefore supported only by the task text, not by a tool trail.
  - "Session usable": no Session Expired modal and no Infor sign-in page was observed in any task (see section 8 for the T9 usage-limit message).

### AC-2: editor opened once; title, controls, language and full content recorded verbatim; left once with Cancel; any prompt answered No; Designer still clean afterwards

- Status: **failed** on the clean-state clause. The editor-opening clauses are met.
- Met clauses:
  - Opened once: T1 audit row 28 (one pencil click).
  - Title and controls: `t1-03-after-pencil-click.png` shows the dialog title "Script Editor", the Script tab, the icon toolbar, the Options and Compile Result panels, and footer buttons OK, Cancel, Help and Download.
  - Language and content: `form-script-editor-content-verbatim.txt` gives the content as lines 1 to 20 (VB; `Option Explicit On`, `Option Strict On`, the four Imports, `Namespace Mongoose.FormScripts`, `Public Class FX_Orders`, `Inherits FormScript`, the `' Methods go here` placeholder, `End Class`, `End Namespace`). The transcription was made by reading the screenshot.
  - Left once with Cancel: T1 audit row 34 (Cancel click). No prompt appeared after Cancel. No text was typed or clicked inside the editor (T1 audit has no key or type rows).
- Failed clause, with evidence:
  - `t1-04-after-cancel-designer-clean.png` shows the Designer after Cancel, with Save and Regenerate Form appearing enabled.
  - The T1 audit row 38 is an untargeted toolbar snapshot taken after Cancel. The T1 record quotes it: `button "Save"` and `button "Regenerate Form"` without `[disabled]`.
  - The start-of-T1 snapshot had both `[disabled]`. The Designer therefore became dirty during T1. The cause was not isolated (candidates: the pencil click, the Cancel, or the view-only Form-tab, Behavior and Expand clicks).
- Recovery, recorded separately (not a pass of the original clause):
  - T2 (operator-authorised): the T2 audit shows the Form close (row 5), a save prompt answered No (row 9), and a recent-forms reopen (rows 15 to 17). Evidence: `t2-01-designer-before-close-save-enabled.png`, `t2-02-after-close-click.png` (exact prompt), `t2-03-after-no-answer.png`, `t2-04-reopened-designer-clean.png` (Save, Undo and Regenerate disabled).
  - The T2 prompt read: title "Infor Mongoose Application Development Framework - FX_Orders"; "Form FX_Orders has changed"; "Do you want to save the form definition?"; buttons Yes (default focus), No, Cancel.
- Limitations kept:
  - The editor content was not demonstrably captured beyond line 20. No scrolling and no keyboard use in the editor were allowed, so text below the visible frame (if any) was not shown.
  - The discard in T2 removed the unsaved Designer change. The editor was not reopened afterwards, so the persisted script content after the discard was **not** verified.
  - The Designer change's origin is unknown.

### AC-3: Event Handlers grid recorded; Binding and Events group recorded for the six components; no value set; no drop-down or editor opened

- Status: met (observed), with limitations.
- Event Handlers: `t3-01-event-handlers-grid.png` shows the Event Handlers view with column headers Sequence, Response Type, Disabled and Response Parameters and **zero rows**. The right-hand pane is empty and no event-name list is visible without a dialog. The T3 audit (rows 5 to 8) records the tab click and screenshot.
- Components (all six read in T5, after the operator's reported re-login and tab reloads; T5 audit rows 13 to 81):

| Component | Binding (Designer display) | Component Class | Events (Primary / Data Change / Lose Focus / Gain Focus) | Drag From / Drop On | Screenshot |
|---|---|---|---|---|---|
| FX_ItemCombobox | `object.FX_Item` | `FX_Item` | all blank | `0 event(s)` / `0 event(s)` | `t5-02`, `t5-03`, `t5-04` |
| FX_CountEdit | `object.FX_Count` | blank | all blank | `0 event(s)` / `0 event(s)` | `t5-05`, `t5-06` (required) |
| FX_DerOrderTotalEdit | `object.FX_DerOrderTotal` | blank | all blank | `0 event(s)` / `0 event(s)` | `t5-07` |
| FX_ItemGridCol | `object.FX_Item` | `FX_Item` | all blank | `0 event(s)` / `0 event(s)` | `t5-08` |
| FX_CountGridCol | `object.FX_Count` | blank | all blank | `0 event(s)` / `0 event(s)` | `t5-09` (required) |
| FX_DerOrderTotalGridCol | `object.FX_DerOrderTotal` | blank | all blank | `0 event(s)` / `0 event(s)` | `t5-10` |

- No component was absent; all six names were found in the Components tree.
- No value was set. The T5 audit has no key, type or value-entry rows. The Events row click (T5 audit row 18) selected the group row only. No drop-down or editor was opened (the blank Events value cells were not opened).
- Limitations:
  - A blank is "no value displayed", read from the accessibility tree and the screenshots. The drop-downs were deliberately not opened, so a stored empty value is not verified.
  - The empty Event Handlers view does not prove that no handler exists outside the inspected view (both search boxes were empty and no group was expanded).
  - FX_ItemCombobox's first read (T4) raised a server-event error and left its Properties tree blank. The error did not recur in T5. Its cause is not established (section 6).

### AC-4: runtime baseline; Count typed as 3 once with Order Total recorded before Save; discard with one close and one No; reopen shows both orders unchanged; runtime closed clean at the end; no Designer change

- Status: met as observed in one session, with qualifications.
- Baseline (T6 and T7, then T9): order 1 = FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, Cost 45.00, Count 2, Order Total 90.00. Order 2 = FX002, Factory test two, 2 Factory Street, eggs, cage free, Cost 6.99, Count 1, Order Total 6.99. Evidence: `t6-05-after-f4-order1.png`, `t6-06-order2-baseline.png`, `t6-08-order1-returned.png`, `t7-00-baseline-before-count-change.png`, `t9-03-order1-after-f4.png`, `t9-04-order2-reopened.png`. The grid row text matched in T6 and T9.
- Count entry (T7): one click on the detail Count field, Ctrl+A, one entry of `3`, Tab. No Save was pressed. Evidence: `t7-01-post-count-change-unsaved.png` shows Count 3, Cost 45.00, Order Total **90.00** (unchanged before Save), and the unsaved marker. The grid row reads `... 45.00 3 90.00`.
- Discard (T7): one click on the runtime tab's close control (T7 audit row 20). The save prompt appeared. Exact text, from `t7-02-save-prompt-before-answer.png`: title "Infor Mongoose Application Development Framework - FX_Orders"; question "Do you want to save your changes to primary collection?"; buttons Yes (default focus), No, Cancel. One click on **No** (T7 audit row 24). `t7-03-after-no-answer-runtime-closed.png` shows the Form closed and no prompt.
- Reopen and verification (T9, via the operator-approved recent-forms route): order 1 read back Count 2 and Order Total 90.00; order 2 read back Count 1 and Order Total 6.99. Evidence: `t9-03`, `t9-04`, `t9-05`. The unsaved Count 3 from T7 was not displayed.
- Clean close (T9): runtime Save was disabled before the close (T9 finds). One tab close (T9 audit row 29). No prompt appeared (T9 audit row 30 find). `t9-06-after-clean-close.png` shows the Explorer with no open form.
- Designer change: no Designer Save occurred (0 in every audit). An **unsaved** Designer change occurred in T1 (see AC-2), and it was discarded in T2. The "no Designer change" clause therefore holds only for persisted changes.
- Limitations:
  - The Count entry was a single browser fill operation (`browser_type`, one call), not keystroke-by-keystroke typing. The brief said "type 3 once." The field's result is `3`. This is recorded as a deviation.
  - The Order Total of 90.00 before Save is observed. It is consistent with the tutorial's statement that the derived total updates after Save, but no Save was made, so Save-triggered recalculation is **not tested**.
  - The post-discard stored values are not verified. The T9 readbacks are same-session UI observations only.
  - The T6 baseline used the recent-forms route before the operator approved that route (the T6 instruction called for Select Form, which did not list FX_Orders without typing). This is a recorded route deviation.

### AC-5: final report with decisive evidence, complete reconciled audit, prompts, Saves, unloads, checkout, re-login, file inventory and final state

- Status: met after reconciliation. This report (sections 3 to 8) reconciles the counts to the controller audits. The record needed the corrections in section 5.

## 3. Reconciled browser-action audit (from the controller audits)

Counts are the audit table rows for each browser tool, by task. Non-browser calls are listed separately.

| Task | tabs (list / select) | snapshots (failed) | finds | clicks (ok / failed) | coordinate clicks | screenshots | key presses | typed | hover / move / wheel | Edit (record) | Write | Read / Grep / Glob |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | 2 (1 / 1) | 4 (0) | 7 | 5 (5 / 0) | 0 | 4 | 0 | 0 | 1 / 0 / 0 | 0 | 2 | 15 |
| T2 | 1 (1 / 0) | 3 (0) | 3 | 5 (4 / 1) | 0 | 4 | 0 | 0 | 0 | 6 | 0 | 5 |
| T3 | 1 (1 / 0) | 4 (1) | 3 | 2 (2 / 0) | 0 | 1 | 0 | 0 | 0 | 8 | 0 | 3 |
| T4 | 1 (1 / 0) | 2 (1) | 7 | 5 (4 / 1) | 0 | 3 | 0 | 0 | 0 | 8 | 0 | 3 |
| T5 | 3 (1 / 2) | 9 (0) | 24 | 11 (11 / 0) | 0 | 11 | 0 | 0 | 0 / 6 / 7 | 10 | 0 | 15 |
| T6 | 3 (2 / 1) | 1 (1, oversize output) | 18 | 8 (7 / 1) | 1 | 9 | 1 (F4) | 0 | 0 | 8 | 0 | 10 |
| T7 | 2 (1 / 1) | 1 (0) | 11 | 3 (3 / 0) | 0 | 4 | 2 (Ctrl+A, Tab) | 1 | 0 | 9 | 0 | 4 |
| T8 | 2 (1 / 1) | 0 | 10 | 3 (3 / 0) | 0 | 3 | 0 | 0 | 0 | 13 | 0 | 3 |
| T9 | 2 (1 / 1) | 0 | 9 | 4 (4 / 0) | 2 | 7 | 1 (F4) | 0 | 0 | 4 | 0 | 10 |
| **T1–T9 total** | **17 (10 / 7)** | **24 (3)** | **92** | **46 (43 / 3)** | **3** | **46** | **4** | **1** | **1 / 6 / 7** | **66** | **2** | **68** |
| T10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 0 | 13 |

Notes:
- Browser calls, T1 to T9: 17 + 24 + 92 + 46 + 3 + 46 + 4 + 1 + 1 + 6 + 7 = **247**. T10: **0**, confirmed by the T10 audit (no browser rows).
- The 46 clicks include 3 failed (T2 row 13, T4 row 15, T6 row 43). The 3 coordinate clicks (T6 row 46; T9 rows 21 and 24) are all successful. Successful clicks in total: 43 + 3 = 46.
- Snapshot failures: 2 "ref not found" (T3 row 10, T4 row 2) and 1 oversize-output error (T6 row 2; the output was saved by the browser tool outside the repository and was not readable by the worker).
- Snapshot targeting (targeted or untargeted) is **not** recorded by the audits (the key-argument column shows none for snapshots), so the record's untargeted/targeted split cannot be verified. The totals agree.
- Non-browser calls, T1 to T9: 66 record edits, 2 writes, 68 reads/greps/globs. T10: 12 edits, 13 reads/greps/globs.
- The audits' header summaries (for example, "7 actions, 16 reads" for T1, which has 40 rows) do not match the table rows, so the table rows were used.

Per-category totals (T1 to T9), with dialogs and runtime:

| Category | Count | Detail |
|---|---|---|
| Designer dialogs opened / how left | 1 / Cancel 1 | Script Editor (T1). Left with Cancel. |
| Designer Form closes / reopens | 1 / 1 | T2 (close, No, recent-forms reopen). |
| Designer prompts answered No | 1 | T2, exact text in section 4. |
| Designer Saves / Regenerate / Delete / Undo / unloads | 0 | No such calls in any audit. |
| Designer property edits / Script Language changes / event edits | 0 | Only view-level clicks (section 6). |
| Server-event error dialogs answered OK | 1 | T4 row 17 (one OK). |
| Select Form dialogs (runtime) opened / cancelled / selected | 2 / 2 / 0 | T6 (rows 16, 20) and T8 (rows 11, 18). |
| Runtime opens / closes | 2 / 2 | Opens: T6 (row 28), T9 (row 10). Closes: T7 (row 20, answered No), T9 (row 29, clean). |
| Runtime F4 presses | 2 | T6 (row 35), T9 (row 17). |
| Runtime typed entries | 1 | T7 (`3` into the order 1 Count field). |
| Runtime key presses (other) | 2 | T7: Ctrl+A, Tab. |
| Runtime prompts answered | 1 No | T7 exact text in section 4. |
| Runtime Saves | 0 | No Save click, no Save-option use. |
| Unloads (Web Client or Designer) | 0 | None. |
| Checkout actions | 0 | None. |
| Worker re-logins | 0 | None. |
| Add / Details / Find / New / Delete at runtime | 0 | None. |
| Grid-cell edits / splitter drags | 0 | None (one ref-based click on a grid row-number cell was intercepted, T6 row 43; no splitter was dragged). |
| Event Handlers rows opened or edited | 0 | None. |

## 4. Prompt and dialog ledger (exact texts)

| When | Where | Title | Text | Buttons | Answer |
|---|---|---|---|---|---|
| T1 | Designer, Script Editor | "Script Editor" (dialog) | (editor, not a prompt) | OK, Cancel, Help, Download | Cancel (once) |
| T2 | Designer, closing FX_Orders | "Infor Mongoose Application Development Framework - FX_Orders" | "Form FX_Orders has changed" / "Do you want to save the form definition?" | Yes (default), No, Cancel | No (once) |
| T4 | Designer, selecting FX_ItemCombobox | "Error" | "The server event processing returned an error. If this persists, contact your system administrator." | OK | OK (once) |
| T6 | Runtime, Form menu > Open | "Select Form" (dialog) | (filter prefilled `IdoCollections`; no prompt) | OK, Cancel, Help | Cancel (once) |
| T7 | Runtime, closing FX_Orders | "Infor Mongoose Application Development Framework - FX_Orders" | "Do you want to save your changes to primary collection?" | Yes (default), No, Cancel | No (once) |
| T8 | Runtime, Form menu > Open | "Select Form" (dialog) | (filter prefilled `IdoCollections`; no clear control) | OK, Cancel, Help | Cancel (once) |
| T9 | Runtime, clean close | none | none appeared | — | none |

Yes answers: 0. Cancel answers on save prompts: 0. Other prompts: 0.

## 5. Corrections to the record

The record's earlier cumulative tables were checked against the audits. These are the differences found. They are corrected in this report and noted in the record's T11 section. The earlier per-task text is preserved in the record.

| # | Record said | Audit shows | Where |
|---|---|---|---|
| C1 | T5 finds 23 | 24 | T5 action audit and cumulative tables |
| C2 | T7 finds 10 | 11 (the record's own list has 11 items) | T7 action audit and cumulative tables |
| C3 | T6 tab lists 1 | 2 (a second list at the end of T6, row 51, to confirm the Designer tab was unchanged) | T6 action audit and cumulative tables |
| C4 | T6 snapshot: "untargeted 1 (Designer)" | 1 call that errored with oversize output (row 2); not counted as a failed snapshot in the record | T6 audit |
| C5 | T6: no mention of a denied read | A `Read` of a browser-tool output file outside the repository (T6 audit row 3) was denied by the permission setting and was not retried | T6 deviations |
| C6 | Cumulative key presses 3 | 4 (the T6 F4 press was left out of the cumulative row) | T9 cumulative table |
| C7 | Cumulative tab lists 9 | 10 (the T6 extra list, C3) | T9 cumulative table |
| C8 | Cumulative finds 90 | 92 (C1 and C2) | T9 cumulative table |
| C9 | Cumulative failed snapshots 2 (targeted failed) | 3 (2 ref-not-found plus 1 oversize, C4) | T9 cumulative table |
| C10 | "AGENTS.md reviewed" in the sources list | No audit records a tool read of AGENTS.md; the rules were supplied in the task text | T1 sources |
| C11 | T1 snapshots: 3 targeted, 1 untargeted | The audit does not record snapshot targets; the total of 4 agrees | T1 action audit (not verifiable) |
| C12 | Audit summary lines used as totals (implicit in earlier tasks) | Summary lines do not match the table rows in any audit | All audits (note only) |

Totals that agree with the audits: browser clicks (46 successful, 3 failed), coordinate clicks (3), screenshots (46 captures; 45 files, because `t5-04` was captured twice and the first capture was overwritten), hovers (1), mouse moves (6), wheel scrolls (7), typed entries (1), F4 presses (2), runtime opens and closes (2 and 2), Select Form dialogs (2 opened, 2 cancelled), Designer dialogs (1 opened, 1 left), Designer Form closes and reopens (1 and 1), save prompts answered No (2), Yes (0), Saves (0), unloads (0), checkout (0), worker re-logins (0), server-event OK (1).

## 6. Deviations, limitations and unexplained items

Deviations from the brief (each recorded in the experiment record):
1. T1: the Designer was left dirty after Cancel (AC-2 clean-state failure). Cause not isolated.
2. T1: the "Edit Form Script" label was not observed; the pencil opened the editor directly.
3. T2: the discard was operator-authorised. The worker performed the close and the No answer; the origin of the unsaved change is still unknown.
4. T4: selecting FX_ItemCombobox raised a server-event error, answered OK once. The Properties tree was blank afterwards. The cause is not established. The error did not recur in T5.
5. T5: values were read from the display; the value drop-downs were not opened by rule.
6. T6: the Select Form route did not list FX_Orders without typing into its prefilled filter. The dialog was cancelled and the recent-forms route was used **before** the operator approved that route (approval came in the T9 instruction).
7. T6: one ref-based click on a grid row-number cell was intercepted by the grid splitter (no effect); one coordinate click on the same visible cell succeeded.
8. T6: one snapshot output was too large to read; the worker could not read the saved file (a denied read, C5).
9. T7: the Count entry was one browser fill operation, not keystroke typing. Ctrl+A was pressed first.
10. T8: the Select Form route was blocked (prefilled filter, no visible Clear or Reset). The dialog was cancelled. No reopen occurred in T8.
11. T9: the recent-forms route was used once, as approved. The task ended with a worker usage-limit message after its evidence and record edits (the T9 controller audit records it; it is not a Mongoose session expiry).
12. T10: documentation only. No browser call; screenshots were re-read.

Limitations that apply to the whole experiment:
- All findings are same-session UI observations. None is cross-session durability or replay verification.
- Stored values (Count, Order Total, Events properties, script content) were not independently verified.
- Save-triggered recalculation of the derived Order Total was not tested (no Save was authorised or pressed).
- The persisted script content after the T2 discard was not checked (the editor was not reopened).
- The sources check of AGENTS.md is supported only by the task text (C10).
- The T1 Designer dirty state, the T4 server-event error and the T4 blank Properties tree are observed history with unexplained causes. They are not proven root causes.
- The "Edit Form Script" menu label and the content of the editor below line 20 were not demonstrated.

## 7. Worker-written files and automatic outputs

Worker-authored files (created or edited by the worker in T1 to T11):
- `experiments/EXP-093-hello-world-part-6-section-1-4-fx-orders-script-and-event-discovery.md` (created T1; edited T2 to T11; the T11 edits are the reconciliation section, the status line, the AC-2 and AC-5 rows, and the inventory and deviation additions).
- `evidence/EXP-093/form-script-editor-content-verbatim.txt` (created T1).
- `evidence/EXP-093/final-acceptance-audit-report.md` (created T11; this file).
- Screenshots requested by the worker through the browser tool, under `evidence/EXP-093/` (45 files; 46 captures, because `t5-04` was captured twice and only the second file was kept):
  - T1: `t1-01-designer-gate-behavior-script-language.png`, `t1-02-properties-pencil-hover.png`, `t1-03-after-pencil-click.png`, `t1-04-after-cancel-designer-clean.png`.
  - T2: `t2-01-designer-before-close-save-enabled.png`, `t2-02-after-close-click.png`, `t2-03-after-no-answer.png`, `t2-04-reopened-designer-clean.png`.
  - T3: `t3-01-event-handlers-grid.png`.
  - T4: `t4-00-components-tab-state.png`, `t4-01-fx-itemcombobox-selected.png`, `t4-02-after-error-ok.png`.
  - T5: `t5-01` to `t5-10` (ten files; see section 2 for each).
  - T6: `t6-00-webclient-start-state.png` to `t6-08-order1-returned.png` (nine files).
  - T7: `t7-00-baseline-before-count-change.png` to `t7-03-after-no-answer-runtime-closed.png` (four files).
  - T8: `t8-00-webclient-start-state.png`, `t8-01-select-form-dialog-initial.png`, `t8-02-after-select-form-cancel.png`.
  - T9: `t9-00-webclient-start-state.png` to `t9-06-after-clean-close.png` (seven files).

Harness-generated files in `evidence/EXP-093/` (controller output, not worker prose): `harness-audit-T1.md` to `harness-audit-T10.md` (ten files).

Automatic browser-tool outputs written inside the repository but outside `evidence/EXP-093/` (confinement note for operator git review):
- `evidence/playwright/page-*.yml`: 47 page-snapshot files written by the browser tool after particular calls (T1: 6; T2: 4; T3: 2; T4: 4; T5: 11; T6: 8; T7: 3; T8: 3; T9: 6). The worker did not author their content; the tool wrote them when it returned a snapshot.
- `evidence/playwright/console-*.log`: 10 console-log files, reported by the browser tool on tab listings (T1, T2, T3, T4, T5, T6, T7, T8 and two in T9).

Outside the repository:
- One browser-tool snapshot output (T6) was saved under the harness tool-results area of the user profile, not under the repository. It was not readable by the worker.

No other files were written. No repository file other than those listed was edited by the worker. The T11 documentation-only step made no change to any Mongoose artifact.

## 8. Final known browser state

- Tab 0, Infor Mongoose Designer (FX_Orders). Last verified: Save disabled at the start of T7 (find). In T8 and T9 only a prompt-text find was made on this tab (no match). The tab was not selected or changed in T10 or T11. The Details panel is expanded on the Components tab with FX_DerOrderTotalGridCol selected (the state left by T5). The Designer's Save state at the end of T9 was **not** re-read; the Mongoose session may also have changed overnight. Re-verification read-only is needed before any further Designer step.
- Tab 1, Web Client (Mongoose inside the portal). Last verified at the T9 clean close (`t9-06-after-clean-close.png`): Explorer shown, identity bar with the operator account and the DEM configuration, no runtime Form open, no prompt. Not re-checked in T10 or T11.
- Runtime: FX_Orders closed. No unsaved runtime change is open. The discarded Count 3 (T7) is not displayed in the T9 readback.
- Open prompts or menus: none recorded as open at the last observation.
- The worker's last browser call was in T9 (the clean close and its no-prompt find).

## 9. Operator dispositions and open items (not decided by the worker)

1. **AC-2 disposition (decisive).** Either waive or revise AC-2's "Designer still clean afterwards" clause on the basis of the T2 recovery, or leave it failed. Until this is decided, EXP-093 cannot be accepted.
2. **T1 dirty-state cause.** Unresolved. The operator should decide whether the question matters for EXP-094 (which will edit form scripts) and whether a bounded, read-only check is wanted.
3. **Stored values.** The post-discard Count and Order Total, and the Events values, are unverified. A cross-session or database-level check would need its own authorised task.
4. **Save-triggered recalculation.** Untested. Testing it would require a Save, which is not authorised in EXP-093.
5. **Route deviations.** Accept or reject the T6 use of the recent-forms route before approval, and the T7 fill-mode Count entry, as recorded deviations.
6. **AGENTS.md.** The rules were supplied in the task text, and no tool read is recorded. The operator should decide whether that is acceptable.
7. **"Edit Form Script" label.** Unverified. A future read-only check of the pencil's chevron could settle it, if the operator wants that.
8. **EXP-094.** I recommend waiting for disposition items 1 and 2 before starting EXP-094, since it depends on the same editor and Designer path.

## 10. Knowledge state per finding

- Observed (same session): Script Language = Visual Basic in the Form Behavior group; the pencil opens a dialog titled "Script Editor" with OK, Cancel, Help and Download; the editor content lines 1 to 20 with the `' Methods go here` placeholder; the Designer was dirty after Cancel in T1; the T2 save prompt text; the T2 clean reopen; the Event Handlers view with zero rows; the six components' Binding and blank Events displays in T5; the T4 server-event error (not recurring in T5); the T6 baseline values; the T7 Count 3 with Order Total 90.00 before Save; the T7 prompt text and No answer; the T9 post-discard readbacks (Count 2 and Order Total 90.00; Count 1 and Order Total 6.99); the T9 clean close with no prompt; the T8 blocked Select Form route.
- Candidate procedure: none recorded as a verified procedure. The recent-forms route and the pencil path are observed routes only.
- Unresolved: the T1 dirty-state cause; whether the pencil chevron offers "Edit Form Script"; content beyond line 20 of the editor; the T4 error cause and the T4 blank Properties tree; stored values; Save-triggered recalculation; persisted script content after the discard; whether any handler is bound outside the empty Event Handlers view.
- Not claimed: replay verification; cross-session durability; independently verified stored values; Save-triggered recalculation.
