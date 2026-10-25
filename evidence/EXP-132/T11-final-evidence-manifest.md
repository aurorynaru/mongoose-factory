# EXP-132 T11 - final evidence manifest (read-only reconciliation, 2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=13`, `task=T11`, `worker_session_id=47b7a498-239a-4449-a928-d58d72069b46`, `task_message_id=af0c08cf-e3f6-4fdf-87c6-1995821873a9`.

Companion file: `evidence/EXP-132/T11-ac9-audit-summary.md` (source-review compliance, deviation classification, AC-9 disposition).

## 0. Scope and limits of this manifest

- **Read-only task.** No browser tool call, no Mongoose mutation, no Form open, Save, runtime activation, object edit or cleanup. Repository reads, and writes limited to the files listed in section 9.
- **Git not available to this worker.** Bash is disabled and the available tools cannot run `git status` or `git diff`. Repository confinement is therefore assessed from (a) the controller Write/Edit rows in `harness-audit-T1..T10.md` and (b) the start-of-session `git status` snapshot supplied with this task. Authoritative confinement is reserved for operator Git review.
- **Image inspection.** Images marked **[T11 viewed]** were opened and examined by the T11 worker in this task. All other images are cited from worker descriptions and accessibility readbacks and are marked **[not re-viewed]**. Where a reviewer needs the picture, the path is listed under section 8 for manual attachment.
- **Acceptance.** This manifest does not accept EXP-132 and does not declare AC-9 passed. Final acceptance is reserved for the coordinator/operator.

## 1. Final environment state (established by T10, re-checked from images in T11)

| Surface | State | Evidence |
| --- | --- | --- |
| Web Client header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `T10-02` [T11 viewed]; `T10-01` [T11 viewed] |
| Web Client runtime tabs | No FX_BridgeTest tab; portal tabs `System Administrator` and `Mongoose`; main region shows Explorer | `T10-02` [T11 viewed]; T10 snapshot (console footer 3 errors / 10 warnings) |
| Designer | Tab `FX_BridgeTest`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save greyed; Undo and Redo greyed; FX_BridgeControl row selected; no dialog | `T10-03` [T11 viewed] |
| Designer console | 2 errors / 0 warnings (footer, after closure) | T10 snapshot |
| Runtime FX_BridgeTest instance | Closed once (T10), not saved | T10 controller row 11 |

Caveat: the Designer Save-disabled state at T10 end was observed in the same session only. Server-side durability is not established (section 3, AC-6).

## 2. Acceptance matrix

Status key: **Supported** = the required evidence exists and was checked; **Supported with qualification** = the evidence exists but a stated requirement is only partly met; **Not passed** = a strict requirement remains unmet.

### AC-1 - Preflight identity and isolation gate: **Supported with qualification**

- Decisive paths: `t2-01-web-client-account-header.png` [T11 viewed: Explorer with header account visible; no Form open]; `t2-07-select-form-filter-FX_CustomerPortal-positive-control.png` [T11 viewed: one row `FX_CustomerPortal / FX_CustomerPortal`]; `t2-05-select-form-filter-Mock-after-End.png` [T11 viewed: Filter `Mock`, empty grid]; `t2-06-select-form-filter-InventoryPrototype-after-End.png` [T11 viewed: Filter `InventoryPrototype`, empty grid]; `t2-02-select-form-dialog-filter-FX_Bridge.png` [T11 viewed: one row `FX_BridgeTest / FX_BridgeTest`]. Also `T2-preflight-completion-summary.md` section 2.1 (`t2-04`, `t2-08`, `t2-10`, `t2-29` [not re-viewed]).
- Observed proof: header account; FX_CustomerPortal present; MockLoginPortal and FX_InventoryPrototype01 absent under name-contains filters; FX_BridgeTest present; Designer identity and User scope (T2 accessibility; T10-03 shows the same identity and scope after the experiment).
- Limits:
  - Absence is from filter results, not a full Form inventory read end-to-end (T2 record).
  - The Mock and InventoryPrototype empty grids were produced by typed filters in the same dialog where the T9 record shows a fill did not refresh the grid. The FX_CustomerPortal control refreshed in the same dialog, which supports but does not prove the empty results.
  - "Operator-confirmed account" rests on the EXP-131 T1 disposition recorded at handoff. The EXP-132 T1 summary states this is the only basis; EXP-132 did not re-confirm it with the operator.
  - Web Client console baseline (3 errors / 10 warnings) was first read in T2; no earlier accepted baseline exists in the record.

### AC-2 - Baseline and source-pattern gate: **Supported with qualification (material)**

- Original FX_Echo, FX_Bridge/index.html, FX_BridgeControl reference, Form-level variables and FX_vEcho absence captured before mutation: `T2-source-readback.md` sections 1-5 (visual transcription of `t2-22`, `t2-24`, `t2-28`, `t2-21`, `t2-10`, `t2-14`, `t2-16`, `t2-18`); `T2-preflight-completion-summary.md` section 2.2.
- Mock evidence lines (saved copies, read-only):
  - Variable write: `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt` embedded line 51 `ThisForm.Variables("vInventoryJson").Value = json;` (file line 63), inside `public void LoadInventoryFromIDO()` (embedded line 12; file line 24).
  - Invoke then read: `evidence/EXP-128/assets/MockInventory_index.html.txt` functions `invokeLoadInventoryFromIDO()` (`WSForm.invoke("LoadInventoryFromIDO", cb)`, no argument) and `getInventoryJson()` (`WSForm.getVarValue("vInventoryJson", cb)`). The file stores these on one long line (file line 3); the grep output omitted the text, so the citation is by function name.
  - Variable metadata: `evidence/EXP-130/T2-designer-metadata-gaps.txt` lines 52-54 (vInventoryJson: Global - Persistent, Persistent True, Global True, value blank), lines 86-87 and 89 (no Form-level copy; runtime binding not established), line 143 (summary), line 149 (U-1 unresolved).
- Documented API text (read by T3): `docs/mongoose/guides/scripts.md` lines 76-84 (global variables via `Application.Variables`), lines 86-96 (form variables via `ThisForm.Variables`); `docs/mongoose/guides/user-control.md` lines 204-206 ("Use `WSForm.getVarValue` to retrieve the value of a form variable").
- Variable-type decision: T2 proposed Global=True / Persistent=True from the Mock metadata. T3 found that the repository docs associate `ThisForm.Variables` and `WSForm.getVarValue` with **form** variables. The Global path was then chosen through the operator amendment after T3 (name-only Global Objects creation with metadata verification). The Form-level alternative was not selected.
- **Qualification:** the AC-2 wording requires uncertainty about the variable type to be resolved by documented specialist guidance and coordinator approval. Coordinator approval exists; documented guidance does not establish the Global choice and partly points the other way. The runtime storage question (EXP-130 U-1) remains unresolved (section 5).
- Tenant-wide or other-scope absence of FX_vEcho is not established (T2 scope limit; `vInventoryJson` also absent from this User's tree).

### AC-3 - Exactly one FX_vEcho variable through the Designer UI: **Supported**

- Creation: `T4-03`, `T4-04` (pre-commit, name typed) [not re-viewed]; New dialog OK once (controller `harness-audit-T4.md` row 27); parent Global Objects OK once after one stale-ref recovery (rows 32-34).
- Metadata: `T4-05-global-objects-fx_vEcho-properties-after-new-ok.png` [T11 viewed: Name `FX_vEcho`, Value blank, Persistent `True`, Global `True`, Version `User version for user an...` (truncated); FX_vEcho row selected in the Global Objects list]; `T8-05-global-objects-FX_vEcho-properties-readonly-after-reopen.png` [T11 viewed: same properties after reopen].
- Category: `T8-07-designer-details-global-persistent-expanded-readonly.png` [T11 viewed: FX_vEcho row under the `Global - Persistent` group, at the bottom edge of the visible pane, partly cropped]. The Properties pane does not show a category field; the group label is the category evidence.
- Other variables: no other creation, rename or deletion appears in the controller rows. T3 cancelled both creation dialogs (no commit). Form-level variables (six `UserCtrl*` rows) were not modified (T2 and T8 readbacks).
- Limits: the Version text is truncated in the images; the full text (`User version for user anton.ramos@3mworks.com.ph`) comes from accessibility readbacks, not from a saved image. Persistence after Save: section AC-6.

### AC-4 - FX_Echo source and Compile Result: **Supported for source; compilation not established**

- Source: `T8-08-script-editor-readonly-after-reopen.png` [T11 viewed: 20 lines; `namespace Mongoose.FormScripts`; `public class FX_BridgeTest : FormScript`; one `public string FX_Echo(string s)`; line 15 `ThisForm.Variables("FX_vEcho").Value = "FX_ECHO:" + s;`; line 16 `return "FX_ECHO:" + s;`]. Also `T5-04` and `T5-08` [not re-viewed]; the T5 summary records the same text.
- Compile Result: `T8-09-script-editor-compile-result-expanded-readonly.png` [T11 viewed: Errors tab selected; column headers Line, Column, Error; no rows]. The Output tab for this readback was overwritten by the Errors capture (T8 disclosure; controller row 59 and 61 both use this filename). `T5-05` and `T5-06` [not re-viewed] show the pre-OK state (Output blank; Errors headers only).
- **Not affirmative:** an empty Errors grid is not proof of successful compilation (per the brief). The post-OK compile status was never inspected with a non-empty result. Compilation: **unresolved**.

### AC-5 - FX_Bridge/index.html readback before asset commit; reference shown: **Supported**

- Structure, pre-commit: `T6-html-readback.md` (original and revised text; structure table). `T6-04-edit-browser-file-index-html-revised-precommit.png` [T11 viewed: revised lines visible from the `<button>` line down, including `<div id="FX_BridgeStatus">`, the invoke line with `"bridge-probe"`, the `WSForm.getVarValue("FX_vEcho", ...)` line and `FX_BridgeOutput`; top lines scrolled out of view].
- Post-reopen structure: `T8-10-edit-browser-file-index-html-readonly-after-reopen.png` [T11 viewed: `<script type="text/javascript" src="../$app/scripts/UserControl.js">` present; `FX_BridgeButton`; `FX_BridgeStatus`; `FX_BridgeOutput`; one `WSForm.invoke("FX_Echo", "bridge-probe", ...)` whose callback writes `result` to FX_BridgeStatus and issues one `WSForm.getVarValue("FX_vEcho", ...)` writing `value` to FX_BridgeOutput].
- FX_BridgeControl reference: pre-mutation evidence `t2-21-user-control-references-dialog-readonly.png` [not re-viewed; T2 record: Use Web Control checked; Control URL `FX_Bridge/index.html`]. This precedes the asset commit, as AC-5 requires. The post-commit readbacks (`T6-06`, `T8-14`) [not re-viewed] show the same values.
- Limits: the asset was replaced with one full-content fill (T6 decision 2), so byte-level whitespace and line endings are not proven. The T6 parent Global Objects OK followed the asset commit; the asset was not re-read between those two steps, but T8 re-read it after the Save and reopen (same session).

### AC-6 - One Designer Save, then one close/reopen with read-only verification: **Supported at the same-session UI level only**

- Save: controller row 17 in `harness-audit-T7.md` (one click on the top toolbar Save). `T7-02` [not re-viewed]: Save disabled afterwards; toast "Form [FX_BridgeTest] and global object(s) were saved."
- Close and reopen: `harness-audit-T8.md` rows 11 (Designer tab close) and 22 (recent-list entry `FX_BridgeTest`). `T8-04` [not re-viewed]: reopened, User scope, Save and Undo disabled.
- Persistence readbacks after reopen: FX_vEcho metadata (`T8-05` [T11 viewed]); tree row (`T8-07` [T11 viewed]); FX_Echo source (`T8-08` [T11 viewed]); asset content (`T8-10` [T11 viewed]); FX_BridgeControl reference (`T8-14`, `T8-13` [not re-viewed]).
- Save-disabled state appears greyed in `T8-05`, `T8-07`, `T8-08`, `T8-10` and `T10-03` [T11 viewed]; the accessibility readbacks are the stronger proof.
- **Limits:** same session only; server-side durability not established. The pre-Save enabled state (from T4) was never explained. The FX_vEcho tree-visibility change (absent in T4-T7, present after T8 reopen) has no isolated cause (section 5).

### AC-7 - One runtime open, pre-click empty state, one activation, decisive readback: **Supported at the visible-evidence level, with a mapping qualification**

- Pre-click: `T9-01-runtime-pre-click-empty-state.png` [T11 viewed: runtime heading `FX_BridgeTest`; button `FX Bridge Test`; no text beneath the button; header account; no dialog].
- Post-click: `T9-02-runtime-post-single-click-status-output.png` [T11 viewed: `0` on the line directly under the button; `FX_ECHO:bridge-probe` on the line beneath it]. Accessibility readback (`evidence/playwright/page-2026-10-25T15-15-50-539Z.yml` lines 119-124, tool-generated, read by the T9 worker) lists `button "FX Bridge Test"`, `generic "0"`, `generic "FX_ECHO:bridge-probe"` in that order.
- Re-observation before closure: `T10-01-runtime-pre-close-readonly-state.png` [T11 viewed: the same three elements in the same order]. This is a re-observation, not a second activation.
- Activation count: one (controller `harness-audit-T9.md` row 26). Runtime opens: one (row 22, recorded as a click; the worker reports a double-click, and the audit does not record the double-click flag).
- **Qualifications:**
  - Element IDs are not exposed. The status-to-`0` and output-to-literal mapping rests on DOM order in the saved HTML (FX_BridgeStatus is written before FX_BridgeOutput) and the visible order. Not element-verified; no browser JavaScript was allowed.
  - `0` is recorded as the raw invoke callback display. It is not interpreted as a status code.
  - The literal's origin is not established as the Global FX_vEcho object (section 5).

### AC-8 - Runtime Form closed once without saving; final state captured: **Met, with a procedural qualification**

- Closure: one click on `Close Panel FX_BridgeTest` (controller `harness-audit-T10.md` row 11). No Save, no prompt, no dialog.
- After closure: `T10-02-web-client-after-single-runtime-close.png` [T11 viewed: Explorer; empty main region; header account; no FX_BridgeTest tab]. Snapshot tabs: `System Administrator`, `Mongoose` only.
- Designer after closure: `T10-03-designer-final-after-runtime-close-save-disabled.png` [T11 viewed: FX_BridgeTest, User scope, Save and Undo greyed, no dialog]. Designer console 2 / 0.
- Console counters: Web Client 3 errors / 10 warnings before and after closure (T10-01 and T10 snapshot footers). Designer 2 / 0 at the end of T9 and after closure.
- **Qualification:** the T10 brief (step 2) required the Designer gate (Save disabled, User scope, no dialog, console 2/0) to be read **before** closure. It was read only after closure. The T10 worker disclosed this. The Designer state before closure rests on the T9 end read and the absence of any Designer action between T9 and T10 (controller audits: no Designer actions in T10 before row 15). The omitted pre-closure read cannot be represented as performed.

### AC-9 - Final manifest and audit reconciliation: **Not passed by this audit. Supported only with explicit operator disposition.**

- This manifest reconciles objects, lifecycle counts, browser totals and recovery usage (sections 3-7).
- Disposition items and unresolved questions are listed in `T11-ac9-audit-summary.md` sections 1, 3 and 5. The items that prevent unconditional support are: T8 source-review compliance not evidenced; T2 pre-browser AGENTS.md read absent; the T10 pre-closure Designer gate omitted; the AC-2 variable-type qualification; the unexplained T6 read difference; repository confinement not verifiable here; and the open runtime, compilation, persistence and callback questions.

## 3. Created and modified artifacts (EXP-132 perspective)

| Object | Kind | Task and action (controller row) | Evidence | State at T10 / T11 |
| --- | --- | --- | --- | --- |
| `FX_vEcho` | Global Object (Global=True, Persistent=True, Value blank, User version) | Created T4: New OK once (`harness-audit-T4` row 27); parent Global Objects OK (rows 32-34) | `T4-05` [T11 viewed], `T4-07`, `T8-05` [T11 viewed], `T8-07` [T11 viewed] | Present (observed in same session after T8) |
| `FX_Echo` (method in `FX_BridgeTest` Form Script) | C# method text | Edited T5: Script Editor OK once (`harness-audit-T5` row 60) | `T5-03`, `T5-04`, `T5-08` [not re-viewed]; `T8-08` [T11 viewed] | One assignment (line 15) before the unchanged return (line 16); scaffold intact; compile unresolved |
| `FX_Bridge/index.html` (Web User Control Asset; created in EXP-131) | Asset content | Edited T6: Edit Browser File OK once (`harness-audit-T6` row 49); parent Global Objects OK (row 58) | `T6-html-readback.md`; `T6-04` [T11 viewed]; `T8-10` [T11 viewed] | Revised content (same session) |
| `FX_BridgeTest` Form | Form (User version; created in EXP-131) | Not created or modified in structure; one Designer Save (T7 row 17); one close and one reopen (T8 rows 11, 22) | `T7-02` [not re-viewed]; `T8-04` [not re-viewed]; `T10-03` [T11 viewed] | Open in Designer, User scope, Save disabled |
| `FX_BridgeControl` (UserControl component; created in EXP-131) | Component | Not changed; read-only dialogs only (T2, T6, T8, T10) | `t2-21`, `T6-06`, `T8-14` [not re-viewed]; `T10-03` [T11 viewed: selected row, Type UserControl, Pane 0] | Unchanged (Use Web Control checked; Control URL `FX_Bridge/index.html`) |
| Form-level `UserCtrl_*`, `UserCtrlAsm_*`, `UserCtrlUrl_*` (six rows, including stale `*_userControl1_USER`) | Designer-generated Form variables (EXP-131) | Not touched | `T2-source-readback.md` section 4 | Unchanged; not deleted; runtime significance unresolved |
| `FX_BridgeStatus`, `FX_BridgeButton`, `FX_BridgeOutput` | HTML element IDs inside the asset | Added or retained in the asset (T6) | `T8-10` [T11 viewed] | Not Mongoose objects |
| Runtime FX_BridgeTest instance | Runtime Form | Opened once (T9), closed once without Save (T10) | `T9-01`, `T9-02`, `T10-01`, `T10-02` [all T11 viewed] | Closed |
| Global Objects dialog (parent) | Dialog only | OK twice (T4, T6) | Controller rows | No object created by these OKs |

Not created in EXP-132: any other variable, method, component, Form, IDO, SQL table, property class, event handler, global script or global object. No Regenerate, Delete, FormSync, metadata, cache, IDO or database operation was performed (controller click descriptions reviewed in all ten audits).

## 4. Lifecycle and commit inventory (controller-verified)

| Operation | Count | Controller row (task) | Notes |
| --- | --- | --- | --- |
| Variable creation (New OK) | 1 | T4 row 27 | Only creation |
| Global Objects parent OK | 2 | T4 row 34; T6 row 58 | Dialog-level finalisation; accepted as separate from the asset commit (brief T11 item 5) |
| Script Editor OK (FX_Echo) | 1 | T5 row 60 | Not a Form Save |
| Edit Browser File OK (asset) | 1 | T6 row 49 | Single asset-editor commit |
| Designer ordinary Form Save | 1 | T7 row 17 | The only Save in EXP-132 |
| Designer close | 1 | T8 row 11 | |
| Designer reopen | 1 | T8 row 22 | Recent-list entry |
| Runtime Form open | 1 | T9 row 22 | Recorded as click; worker reports double-click |
| FX_BridgeButton activation | 1 | T9 row 26 | |
| Runtime Form close without Save | 1 | T10 row 11 | |
| Select Form dialog cancellations | several | T2, T3 and others | View-only; no Form change |

## 5. Unresolved and qualified technical points (carried, not settled)

- **Callback value `0`:** displayed in the status position on the EXP-132 run. EXP-131's output was `0` in its single run as well. Across the two runs the invoke-callback position showed `0` while the literal reached the page only through the getVarValue path. This is an inference from two observations. The meaning of `0` is out of scope and was not interpreted.
- **Global-object resolution:** whether `ThisForm.Variables("FX_vEcho")` in FX_Echo and `WSForm.getVarValue("FX_vEcho")` in the asset used the Global object is unresolved (EXP-130 U-1). The documented API text associates these calls with form variables (section AC-2). The successful visible round trip does not establish which storage was used.
- **Compile success of revised FX_Echo:** unresolved. The Errors grid was empty (T5, T6, T8), which is not affirmative. The Output tab for the post-change state was not preserved.
- **FX_vEcho tree visibility:** absent from the Designer Global - Persistent tree in T4-T7 (`T4-06`, `T5-07`, `T5-09`, `T6`), present after the T7 Save and T8 reopen (`T8-07`). The evidence does not isolate Save, reopen or a refresh. The variable's presence in the Global Objects list was observed after the T4 commit (`T4-07`), so the list and tree did not agree during T4-T7.
- **Save-enabled state before T7:** cause not established. Enabled after the T4 Global Objects commit; remained enabled through T5 and T6; cleared by the T7 Save.
- **Regenerate Form state change (EXP-131 T8):** not applicable to EXP-132 controller rows; recorded in the EXP-131 manifest and not re-examined here.
- **Server-side durability and cross-session persistence:** not tested. All persistence claims are same-session UI evidence.
- **Element-ID mapping (`0` = status; literal = output):** DOM order only.
- **Whitespace identity of the rewritten asset:** not proven (T6 decision 2).
- **T8-09 overwrite:** the original Output-tab image of the revised script's Compile Result was overwritten by the Errors-tab image under the same filename. The Output state cannot be recovered.

## 6. Browser action and read accounting

### 6.1 Controller totals (authoritative) and worker reports

| Task | Controller actions | Controller reads | Worker actions | Worker reads | Reconciliation |
| --- | --- | --- | --- | --- | --- |
| T1 | 19 | 19 | 19 | 19 | Agrees. Controller errors: 2 ref-not-found (`e5` at #40; `e659` at #67) and 2 repository Read errors (missing experiment record, #2 and #5; expected at T1 start) |
| T2 | 48 | 34 | 48 | 34 | Agrees |
| T3 | 15 | 27 | 15 | 27 | Agrees. Controller error: `e275` at #27 |
| T4 | 14 | 29 | 14 | 29 | Agrees. Controller error: `e1098` at #32 |
| T5 | 21 | 36 | 16 (+5 tab selects in the worker's own breakdown = 21) | 36 | Labelling only: the worker's "actions 16" omitted tab selects that it listed separately |
| T6 | 25 | 44 | 25 | 42 | Read difference of 2 not explained by the worker's breakdown. Controller total stands |
| T7 | 6 | 11 | 6 | 11 | Agrees |
| T8 | 34 | 68 | 34 | about 68 | Agrees (worker figure was approximate) |
| T9 | 9 | 12 | 9 actions + 1 wait | 11 | Classification: the controller counts the 2 s `browser_wait_for` as a read; the worker listed it under actions. Controller total stands |
| T10 | 3 | 8 | 3 | 8 | Agrees |
| **Total** | **194** | **288** | | | Matches the brief's totals and the cumulative controller totals (182/268 through T8; 191/280 through T9) |

Sum check: actions 19+48+15+14+21+25+6+34+9+3 = 194; reads 19+34+27+29+36+44+11+68+12+8 = 288.

### 6.2 Flagged input tools (controller prohibited-tool hits; interpretation by brief and action)

| Task | Flagged calls | Actual operation | Classification |
| --- | --- | --- | --- |
| T1 | `browser_type` 5 (Designer Variables search; Global Objects search: `vEcho`, `vInventoryJson`, slow typing) plus key presses End, Ctrl+A, Backspace, Delete, Escape | View-filter text entry in two search boxes; the Delete key followed Ctrl+A in the Global Objects search box (T1 record: text cleared, list repopulated) | Filter entry, no artifact change recorded. The Delete key's focus was not read back; see 7.2 item 4 |
| T2 | `browser_type` 11 | Select Form filter (`FX_Bridge`, `FX_CustomerPortal`, `Mock`, `InventoryPrototype`, `vEcho`) and Designer Variables search (`ccvw_PrinterName`, `Printer`, `Echo`, `vInventoryJson`, `vEcho`) | Read-only absence and presence checks. The `Mock` and `InventoryPrototype` strings were typed as filter text; no matching Form was selected or opened |
| T4 | `browser_type` 1 | Name `FX_vEcho` in the New dialog | Approved creation step |
| T5 | `browser_type` 1 | The approved FX_Echo assignment in the Script Editor | Approved edit (readback verified) |
| T6 | `browser_type` 1 | Full-content replacement of the asset textarea | Approved asset commit (full-content method; see 7.2 item 9) |
| T9 | `browser_fill_form` 1 and `browser_type` 1 | Select Form filter text (`FX_BridgeTest`; then Backspace and `t`) | Filter entry; one Form opened (FX_BridgeTest) |

No flagged call opened or selected a Mock object, FX_InventoryPrototype01, or a $app asset. No flagged call was an automatic rejection under the brief.

### 6.3 Recovery allowance usage

| Task | Fresh snapshot | Corrected inspection or action | Notes |
| --- | --- | --- | --- |
| T1 | 1 of 1 (`t1-05` after `e5` error) | 1 of 1 (Edit click retried) | Then a further targeted snapshot after the allowance was exhausted (`e659` error, `t1-11`, no file). Recorded by the T1 worker as not permitted; the worker stopped. A coordinate Cancel was used (operator-accepted, section 7.2) |
| T2 | 0 of 1 | 0 of 1 | No ref error |
| T3 | 1 of 1 (after `e275`) | 1 of 1 | |
| T4 | 1 of 1 (after `e1098`) | 1 of 1 | |
| T5 | 0 | 0 | |
| T6 | 0 | 0 | |
| T7 | 0 | 0 | |
| T8 | 0 | 0 | |
| T9 | 1 of 1 (worker-counted snapshot after the Select Form fill) | 1 of 1 (Backspace and retyped `t`) | The controller records no ref-not-found error in T9; these were filter-refresh attempts, counted by the worker |
| T10 | 0 | 0 | |

Ref-not-found errors (controller): four in total (T1 twice, T3 once, T4 once).

### 6.4 Repository-side tool results

- Read failures: two in T1 (experiment record did not exist at T1 start; expected; the record was created by T1).
- Edit failure: one in T9 (`String to replace not found`, `harness-audit-T9.md` row 38). No write occurred from this call; the surrounding Edits succeeded. Not a Mongoose or browser mutation.

## 7. Procedural deviations, operator amendments and disposition

Full classification is in `T11-ac9-audit-summary.md` section 3. Summary:

### 7.1 Operator amendments and dispositions (chronological, as recorded in the record and the brief)

1. After T1: browser recovery became one fresh untargeted snapshot plus one corrected inspection per worker task. Applied from T2 onward.
2. Coordinator disposition after T2 (recorded in the T3 summary): accept the User-scoped Designer tree as the FX_vEcho absence evidence for the variable gate. Applied in T3.
3. After T3: exactly one name-only FX_vEcho creation through Global Objects, with immediate Global, Persistent and Version verification and at most one Persistent correction if needed. Applied in T4; no correction was needed or made.
4. Operator acceptance (per the brief's T11 instruction): the T1 coordinate Cancel; the T6 parent Global Objects OK as a dialog-level commit distinct from the asset commit.

### 7.2 Observed deviations (actual effect and classification)

1. **T1 recovery overrun.** One targeted snapshot after the allowance was exhausted (`e659`). No effect. Disclosed by the worker. Classification: procedural breach of the recovery rule, no state effect. Disposition: operator to note.
2. **T1 coordinate Cancel** at (959, 728). Operator-accepted per the brief.
3. **T1 Delete key in the Global Objects search box** after Ctrl+A. The record says the text cleared and the list repopulated. Focus was not read back before the key press. The later readbacks in T1, T2, T3 and T4 show the same neighbouring rows (`FarmEnforcePrefixFromAccessAs` then `gbgc_bg`), which does not show a removal but does not prove absence of one. Classification: unverified risk, no evidence of effect. Disposition: operator may wish to decide whether a read-only check is needed.
4. **T2 pre-browser source review incomplete.** The controller trace shows only the T1 summary read before the first browser call; AGENTS.md and the record were read later. No mutation occurred in T2. Classification: per-task source-review gap (see audit file section 2). Disposition: operator.
5. **T2 flagged typing** (11). Filter entries only; see 6.2.
6. **T3 stop at the variable gate.** Correct stop under the brief (creation dialogs did not show Global or Persistent before commit). Resolved by the operator amendment (7.1 item 3).
7. **T4 stale parent OK reference** (`e1098`), followed by one fresh snapshot and one corrected OK. Permitted recovery; no double commit.
8. **T5 misdirected Form navigation.** The first click on the top Form button opened a Form-selection menu. No Form was selected and Escape did not close it; the next Edit click replaced it. Designer remained on FX_BridgeTest. No artifact change. Disclosed.
9. **T6 full-content asset rewrite** rather than minimal insertion, with whitespace identity unproven. Structure checked by readback (`T6-html-readback.md`). T8 re-read the content after reopen (same session). Disposition: operator may accept the structural comparison.
10. **T6 parent Global Objects OK** after the asset OK. Accepted per 7.1 item 4.
11. **T6 read difference** (worker 42, controller 44). Unexplained by the worker. Controller total stands. Disposition: operator.
12. **T7 Save** as the single ordinary Save: no deviation. The Save-enabled cause before it remains unexplained (section 5).
13. **T8 duplicate screenshot filename** (`T8-09`) overwrote the Output-tab image. Not recoverable. Disclosed.
14. **T8 source-review trace.** The controller trace begins with a tab list at order 1; no pre-browser read of AGENTS.md, the record or any summary is recorded. The saved T8 summary and record do not contain a statement that such reads occurred. Classification: **not evidenced; treated as noncompliant with the per-task source-review standard pending operator disposition.** A later read in T9 does not establish a pre-T8 read.
15. **T9 Select Form filter recovery.** The fill did not refresh the grid; Backspace and a slow retype did. One row resulted. One runtime opened. Controller and worker counts differ only by the wait classification (6.1).
16. **T9 failed repository Edit** (`String to replace not found`). No write. Not a Mongoose mutation.
17. **T9 browser_fill_form and browser_type flags:** filter entry (6.2).
18. **T10 omitted pre-closure Designer gate.** See AC-8. Disclosed by the T10 worker and in this manifest.
19. **T10 EXP-131 closure reference not re-read.** The brief asked for review "where applicable". The closure used the same Form-panel control named in the T10 brief; not re-reading the EXP-131 closure record is disclosed.

## 8. Evidence for manual attachment (reviewer use)

Recommended for direct reviewer inspection (paths are repo-relative):

- `evidence/EXP-132/T9-02-runtime-post-single-click-status-output.png` (post-click `0` and `FX_ECHO:bridge-probe`)
- `evidence/EXP-132/T9-01-runtime-pre-click-empty-state.png` (pre-click state)
- `evidence/EXP-132/T10-01-runtime-pre-close-readonly-state.png` (pre-closure re-observation)
- `evidence/EXP-132/T10-02-web-client-after-single-runtime-close.png` (post-closure Explorer state)
- `evidence/EXP-132/T10-03-designer-final-after-runtime-close-save-disabled.png` (final Designer)
- `evidence/EXP-132/T4-05-global-objects-fx_vEcho-properties-after-new-ok.png` (creation metadata)
- `evidence/EXP-132/T8-05-global-objects-FX_vEcho-properties-readonly-after-reopen.png` (metadata after reopen)
- `evidence/EXP-132/T8-07-designer-details-global-persistent-expanded-readonly.png` (FX_vEcho under Global - Persistent)
- `evidence/EXP-132/T8-08-script-editor-readonly-after-reopen.png` (committed FX_Echo source)
- `evidence/EXP-132/T8-09-script-editor-compile-result-expanded-readonly.png` (Errors headers only; not compile proof)
- `evidence/EXP-132/T8-10-edit-browser-file-index-html-readonly-after-reopen.png` (committed asset content)

Images cited but not re-viewed in T11 (worker descriptions only): `T7-02`, `T8-04`, `T8-13`, `T8-14`, `T6-06`, `T5-04`, `T5-08`, `T4-06`, `t2-21`, `t2-10`, `t2-29`, `t1-01`, `t1-12`.

## 9. Repository confinement

### 9.1 Files written by workers in EXP-132 (controller Write and Edit rows)

- Experiment record: `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` (created T1; appended T2-T10).
- Worker evidence under `evidence/EXP-132/` (summaries, readback markdown and snapshot markdown files, and screenshots; names listed in the Glob at T11 start). Examples: `T1-preflight-summary.md`, `T2-source-readback.md`, `T2-preflight-completion-summary.md`, `T3-variable-creation-stop-summary.md`, `T4-variable-creation-summary.md`, `T5-script-edit-summary.md`, `T6-html-readback.md`, `T6-asset-edit-summary.md`, `T7-save-summary.md`, `T8-close-reopen-summary.md`, `T9-runtime-activation-summary.md`, `T10-runtime-closure-summary.md`.
- Controller-generated audits: `evidence/EXP-132/harness-audit-T1.md` to `harness-audit-T10.md` (not worker prose).
- Screenshots: 81 PNG files in `evidence/EXP-132/` at T11 start (T1 3; T2 27; T3 6; T4 7; T5 9; T6 7; T7 2; T8 15; T9 2; T10 3).

### 9.2 Tool-generated files

- `evidence/playwright/` snapshot and console files. This directory is listed in `.gitignore` (lines 10-11 of the repository `.gitignore`), so these files are excluded from Git tracking.
- No worker-named file was written outside `evidence/EXP-132/` or the experiment record in EXP-132 (controller Write and Edit rows; the T9 worker-named files are under `evidence/EXP-132/`).

### 9.3 Git state (limited)

- Start-of-session `git status` snapshot (supplied with this task, not current): `?? evidence/EXP-132/` and `?? experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` (both untracked at T11 start); recent commit `fd721cc EXP-132: approved brief`.
- The same snapshot lists modified or untracked files under `tools/claude-harness/` (for example `src/cli.ts`, `src/controller/machine.ts`, `briefs/EXP-119.brief.json`, `src/usage.ts`, `test/usage.test.ts`). The controller Write and Edit rows show no EXP-132 worker write under `tools/`. These differences predate the EXP-132 runs as far as the audits show, but the worker cannot verify their origin here. They are outside EXP-132 and were not touched by this task.
- No `git add`, `reset`, `checkout`, `commit`, `status` or `diff` was run by this worker.

### 9.4 Confinement conclusion

Repository confinement is **not verified** by this worker. The controller-side evidence shows EXP-132 writes confined to the experiment record and `evidence/EXP-132/`. Operator Git review must confirm that only the approved EXP-132 record and evidence directory are attributable tracked or untracked changes for this experiment.
