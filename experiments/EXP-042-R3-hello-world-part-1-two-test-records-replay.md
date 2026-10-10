# EXP-042-R3 — Hello World Part 1: Two Test Records Through the Web Client Runtime (replay after operator browser refresh)

**Final disposition (cycle 14, T11, operator decision 2026-10-10, task message `8903d7af-2f4c-4c5e-a462-65ac4540d60c`, worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`): ACCEPTED WITH LIMITS.** AC-1 to AC-9 pass under their governing criteria as amended by the operator: the AC-2 amended empty-collection rule; AC-3 with the screenshot requirement that the focused input be visible in the Find-dialog image waived by the operator (all other AC-3 criteria met); and the AC-7 reading of the post-Refresh status `(Object 1 of 2)`. Two FX_ test records, FX001 / Factory test one and FX002 / Factory test two, were written to `dbo.FX_HelloWorld01` through IDO `FX_HelloWorld01` by one explicit runtime Save. They were recovered after a post-Save Refresh and after one ordinary Form close and one reopen, in the same session. Limits: the evidence is at the Web Client UI level only; there is no independent database read; cross-session recovery was not tested; no cleanup was performed, and cleanup ownership is retained for the operator. Classification: **observed only, NOT replay_verified** (single execution). Details: the "Cycle 14 (T11)" section, which precedes the cycle 12 section.

## Outcome (operator, 2026-10-10)

**Accepted with limits** (run R-20261010-173904-H4L5, completed/accepted in cycle 15). Hello World Part 1 test data are in place: `dbo.FX_HelloWorld01` holds FX001 / Factory test one and FX002 / Factory test two. They were entered through the User-scope Form FX_HelloWorld01 with one Save and recovered after Refresh and after one close and reopen. This is UI-level, same-session evidence.

Operator decisions during the run:
- AC-2 rule: in add mode the status bar counts the uncommitted placeholder.
- AC-3 property mapping accepted.
- One recovery attempt for Cancel on the open Find dialog.
- The operator waived the AC-3 requirement that the focused input be visible in the Find-dialog image. Corroboration: FX_Code turned read-only after Save, the grid's first column shows the label text, and the Save raised no Required error.

Operator screenshot review: `t3-03` and `t3-04` (Find dialog Property `FX_LabelGridCol (FX_Label)` and `FX_CodeGridCol (FX_Code)`), `t6-01` (both records staged, `(Object 2 of 2)`), `t7-01` (post-Save, stars gone, Save disabled, FX_Code read-only), `t9-04` (after reopen and Refresh, two rows, `(Object 1 of 2)`).

Learned (observed, single run):
1. The runtime inputs of this Form are uncaptioned. The upper input is FX_Label and the lower, Required input is FX_Code.
2. Edit > Find Value in Collection shows the focused field's bound property.
3. Display Status Bar needs a browser refresh. After that, the status bar reads `(Object n of N)`, and in add mode N counts the new-row placeholder.
4. After a browser refresh, Mongoose restores the last open Form tab, and an Infor OS portal banner can cover the menu bar. Dismissing the banner is now a standing worker-preamble rule.

Carry-forward:
- Hello World Part 2 or a later part should add captions (Label String IDs) for FX_Code and FX_Label.
- The two rows stay for later FX_ cleanup.
- Display Status Bar stays on for this user and is operator-reversible.


Latest outcome before the audit (cycle 11, T9, task message `7ff8ff2d-c0d4-44c5-9bb7-c634ebccb0bb`, worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`, 2026-10-10): the FX_HelloWorld01 Form tab was closed once with its ordinary `Close Panel FX_HelloWorld01` control (no prompt). The Form was reopened once through toolbar Open and Select Form (OK label verified). One unfiltered toolbar Refresh after reopen returned exactly two unstarred rows: row 1 `Factory test one` / `FX001`, row 2 `Factory test two` / `FX002`, with status `(Object 1 of 2)`, Save disabled and no error. This is observed same-session runtime recovery only, not database-level durability. AC-8 is supported at the runtime UI level. Runtime left open and clean. Details: "Cycle 11 (T9)" below.

Previous outcome (cycle 10, T8, task message `ff7d9829-2041-42fc-b267-513d2b2ed08d`, worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`, 2026-10-10): ONE toolbar Refresh (unfiltered, label verified `Refresh`, ref `f1e35`) was run after the Save preconditions were confirmed. The read returned exactly two unstarred rows: row 1 `Factory test one` / `FX001`, row 2 `Factory test two` / `FX002` (full values from the accessibility snapshot). Total status count is `(Object 1 of 2)`: the denominator is 2 (matching the two persisted rows), but the numerator is the current-record position after Refresh, not the `(Object 2 of 2)` text the AC-7 pass condition names. AC-7 is therefore NOT PASSED as literally written; the record and value evidence supports it. No corrective action. Runtime left open. Details: "Cycle 10 (T8)" below.

Previous outcome (cycle 9, T7, task message `0788dc02-cda5-45ac-94be-bcbe28f0ac0d`, worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`, 2026-10-10): ONE explicit toolbar Save was clicked (label verified `Save`, ref `f1e29`), with no retry. No validation, duplicate-key, overwrite or save-changes prompt, and no alert appeared. The post-Save runtime shows the new-row stars gone, Save disabled, both rows present (row 1 `Factory test one` / `FX001`; row 2 `Factory test two` / `FX002`), and status bar `(Object 2 of 2)`. This is runtime UI evidence of a completed Save only. Persistence is NOT independently verified (AC-7 read not run). Runtime left open. Details: "Cycle 9 (T7)" below.

Previous outcome (cycle 8, T6, task message `ff5b179a-53b3-4e00-ba05-1e0216766ab1`, worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`, 2026-10-10): both records are STAGED and UNSAVED in the open runtime. Row 1 = FX001 / Factory test one; row 2 = FX002 / Factory test two (both verified by snapshot and screenshot). Status bar `(Object 2 of 2)`, Save enabled. NO Save clicked, no New, no prompt, no persistence, no close or reopen. Details: "Cycle 8 (T6)" below.

Previous outcome (cycle 7, T5, task message `7d0c0339-638c-43c1-8dcf-05c4df2250d7`, worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`, 2026-10-10): one toolbar New click. Record 1 (FX001 / Factory test one) is still shown with its new-row star and its values, Save is enabled, and a blank starred record 2 was added (status bar `(Object 2 of 2)`). No Save, no typing into record 2, no prompt, no persistence. AC-5 preservation is supported at UI level; AC-5 overall stays pending until FX002 is staged in a later task. Details: "Cycle 7 (T5)" below.

Previous outcome (cycle 6, T4, task message `377512d3-7ddd-4410-957c-8f64a638a59f`, worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`, 2026-10-10): the input-2 Find dialog was closed by one verified Cancel; the runtime baseline was re-observed (one starred placeholder, both inputs blank, `(Object 1 of 1)`); record 1 (FX001 / Factory test one) is STAGED in the open add-mode record, UNSAVED. Stopped before New and Save. No Save, no New, no record persisted, no close or reopen.** Details: "Cycle 6 (T4)" below.

Earlier, cycle 4 (T3, task message `1cf5dce8-959c-4a82-9cab-dc7fdc66fc8d`, 2026-10-10): AC-3 NOT PASSED, STOPPED. Input 1 maps to FX_Label and input 2 maps to FX_Code (both observed in the Find dialog's Property field, consistent with the Designer table and the Required marker), but the input 2 Find dialog is still OPEN because its Cancel ref went stale and the recovery allowance was spent. No typing, New, Save, record insertion, close or reopen.** Details: "Cycle 4 (T3) field identification" below. Earlier: "Cycle 2 resumption" (AC-2 gate passed; AC-3 not run). The cycle 0 record follows.

**Outcome (cycle 0, T1, 2026-10-10): STOPPED AT PREFLIGHT. No Form opened by this run, no query, no field identification, no typing, no New, no Save, no record inserted, no close or reopen.** The brief's preflight requires that no `FX_HelloWorld01` runtime tab is open before this run opens the Form. One is already open (blank add-mode record, origin not established by this worker). The brief says to stop without discarding it or opening a duplicate, so the stop was taken.

Status-bar observation (not a gate decision): after the operator's refresh, a status bar **is displayed** in the open runtime tab and reads `(Object 1 of 1)`. Its count may include the starred new-row placeholder, so it is **ambiguous** for the zero-row gate. No query was run to resolve this, because the stop rule applies first.

Classification: **observed only, not replay_verified.** One run, read-only.

## Outcome (operator, 2026-10-10)

Pending. No operator outcome exists yet for this run.

Date: 2026-10-10
Run / task: EXP-042-R3, cycle 0, task T1 (task_message_id `3b04bb6c-7dec-41ac-a2f1-b4c81a3f656a`). Worker session `6d37db00-96a8-4f22-9cf4-9d30d3bfe510`.
Mode: LEARNING MODE. FX_-only scope for the Hello World tutorial (AGENTS.md, 2026-10-10). The Form stays in User editing scope.
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`evidence/EXP-042-R3/t1-01-…png`).
Evidence directory: `evidence/EXP-042-R3/`.
Predecessors: `experiments/EXP-042-R2-hello-world-part-1-two-test-records-replay.md` (blocked before entry; no status bar at its open; operator refresh required), `experiments/EXP-042-hello-world-part-1-two-test-records-through-the-we.md` (blocked; no status bar), `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` (Form accepted with limitations).

## Cycle 14 (T11) — operator-approved AC-3 disposition and final documentation update (task message `8903d7af-2f4c-4c5e-a462-65ac4540d60c`; worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`)

Scope: documentation only. No browser calls, no Mongoose state change, no Save, New, Refresh, Find, Designer or preference change. Edits limited to this record and `evidence/EXP-042-R3/cleanup-inventory.md`. `tools/` was not read.

### Operator decision (2026-10-10): AC-3 accepted with limits

The operator waived one requirement only: that each Edit > Find Value in Collection screenshot visibly show the focused runtime input. The other AC-3 requirements still apply, and they are met as follows:
- Each input shows its own Property preselection: upper input `FX_LabelGridCol (FX_Label)` (`t3-03`); lower required input `FX_CodeGridCol (FX_Code)` (`t3-04`).
- Each Find dialog was closed through a verified Cancel control, with no search: input 1 at cycle 4 (`f1e221`); input 2 at cycle 6 (`f1e190`). Both Find textboxes were empty.
- The mapping agrees with the EXP-041-R3 Designer component table (`FX_LabelEdit` → `object.FX_Label`; `FX_CodeEdit` → `object.FX_Code`; EXP-041-R3 lines 577–579) and with the red `*` required marker on the lower input (`t2-03`, `t3-04`).

### What supports the focus relationship (not visible in either modal image)

- Input 1 (upper): clicked at cycle 4 step 1 (`f1e142`, no typing). The snapshot at that point showed it as the active element.
- Input 2 (lower): clicked at cycle 4 (`f1e149`, no typing). The frame snapshot showed `[active]` on `f1e149`.
- Procedural sequence: each input was clicked, then its Edit menu and Find Value entry were opened, so the dialog preselection came from the input that had just been clicked.
- Operator acceptance.

These support the relationship. They do not show the focused input inside either Find screenshot. Also, the Property field names the grid column (`FX_…GridCol`), not the Edit, so the link from the column to the focused Edit remains an inference from the preselection, as EXP-041-R3 also states.

### Operator corroboration (reported by the operator; not independently tested)

- **Grey lower input after Save.** The lower FX_Code input appeared grey after Save (visible in `t7-01`, `t8-01`, `t9-04`). The operator reports this as consistent with primary-key read-only behaviour. **This is a visual observation. Read-only enforcement was NOT tested:** no edit was attempted on the grey input, and none is authorized or recommended here.
- **Label text in the first column.** The grid shows the FX_Label text in its first column. The accessibility snapshots from cycles 9–11 agree: the FX_Label gridcell precedes the FX_Code gridcell in each row.
- **No Required or validation error on Save.** No Required marker or validation message appeared with the Save. This matches the post-Save state recorded in cycle 9 (`t7-01`: no alert, no validation text, no prompt).

These corroborations are consistent with the mapping. They do not conclusively prove the bindings.

### Final acceptance matrix (governing criteria as amended by the operator)

| AC | Result | Evidence | Limits |
|---|---|---|---|
| AC-1 | **PASSED** | T2/T10 preflight and identity evidence (`t2-01`, `t2-02`, `t2-03`, `t9-02`, `t9-03`); EXP-041-R3 IDO and Designer records cited | The inherited tab closure and the browser refresh are operator-reported, not observed. The User-scope version and IDO revision are cited from EXP-041-R3, not re-read. |
| AC-2 | **PASSED** under the operator-amended rule | `t2-03`; the T2 snapshot (one `gridcell "1"`, no FX001/FX002 text) | Single session. The star is read from the image. |
| AC-3 | **PASSED WITH LIMITS** (operator decision 2026-10-10) | `t3-03`, `t3-04`; the Cancel labels in cycles 4 and 6; the Designer table; `t2-03` and `t3-04` (required marker) | The focused input is not visible in either modal image (waived by the operator). The focus-to-Edit link is inferred from preselection. |
| AC-4 | **PASSED** | `t4-02`; the cycle 7 and 8 snapshots (full text) | Staged before Save, by design. |
| AC-5 | **PASSED** at UI level | `t5-02`, `t6-01`, `t7-01` | "Record 1 not committed by New" is inferred from the star and Save state. No pre-Save database read. |
| AC-6 | **PASSED** at the runtime UI level | Controller audit `harness-audit-T7.md` (one Save click, no retry); `t7-01` | No explicit success message in this UI. Not a database read. |
| AC-7 | **PASSED** under the approved reading | `t8-01`; the cycle 10 snapshot (full text); `t9-04` reconciliation | Status `(Object 1 of 2)`: total 2, current record 1. The literal `(Object 2 of 2)` was not produced by the read, and the coordinator accepted this reading. Same-session Web Client read. |
| AC-8 | **PASSED** at the runtime UI level, same session | `t9-01`, `t9-02`, `t9-03`, `t9-04`; controller audit `harness-audit-T9.md`; cycle 11 baseline comparison | Same session only. The reopen opens in add mode, and the rows load only after a Refresh. |
| AC-9 | **PASSED** (documentation) | `evidence/EXP-042-R3/cleanup-inventory.md`: exactly two rows, table, IDO, values, cleanup ownership; no deletion | Persistence not database-verified. Cleanup not performed. |

### Disposition

- **Overall: ACCEPTED WITH LIMITS.**
- **Classification: observed only. NOT replay_verified** (a single execution). No claim of database-level durability or cross-session recovery.
- **Readiness:** the record and cleanup inventory are reconciled to the same facts. Ready for EXPERIMENT_COMPLETE with outcome accepted (with the limits above), pending the coordinator's marker.

### Documentation changes in this task

- This record: final disposition line replaced; AC-3 row and verdict updated; open items 1 and 4 updated; this cycle 14 section added.
- `evidence/EXP-042-R3/cleanup-inventory.md`: rewritten to the accepted disposition, with the same two rows and no change to data facts.

### Preserved from earlier tasks (not changed in this task)

- The cycle 12 (T10) evidence matrix and the image-by-image table.
- The operation accounting and the errors-and-recovery accounting.
- The repository confinement audit and the final browser state reported by T9 (not re-inspected).

## Cycle 12 (T10) — final documentation and evidence audit (task message `90ff4bb8-b6ab-4f5b-ba91-742ee8c0f82c`; worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`)

Scope: documentation and evidence audit only. No browser calls, no Mongoose state change, no Save, New, Refresh, Find, Designer, preference change or reload. Edits limited to this record and `evidence/EXP-042-R3/cleanup-inventory.md`. The `tools/` directory was not read.

Sources reviewed: this record (all cycles); `evidence/EXP-042-R3/cleanup-inventory.md`; controller audits `evidence/EXP-042-R3/harness-audit-T1.md` to `harness-audit-T9.md` (controller-generated, not worker prose); the EXP-041-R3 record (IDO and Designer table, lines 224, 569–579, 642–644, 782–784); and the screenshots listed below.

### Images inspected in this audit

| File | Read in | Observed | Proves | Does not prove |
|---|---|---|---|---|
| `t2-01-preflight-no-runtime-no-designer-tab-before-open.png` | T10 | Portal banner at top; Form region empty; toolbar greyed; no Form tab; status bar absent. | No runtime Form open before cycle 2's Open (AC-1). | Designer state beyond the tab list; the Mongoose identity text is not visible in this image. |
| `t2-02-select-form-fx-helloworld01-one-row-before-activate.png` | T10 | Select Form with one row, Caption `FX_HelloWorld01`, Name `FX_HelloWorld01`, Filter `FX_HelloWorld01` highlighted, Name and Starts With unchecked, OK/Cancel/Help. | The Form identity offered before activation (AC-1). | The User-scope version; the runtime content. |
| `t2-03-runtime-after-one-refresh-query-settled-status-bar.png` | T10 | Runtime `FX_HelloWorld01`; one row with blue star and number `1`; both inputs blank; lower input with red `*`; status `(Object 1 of 1)`; portal banner still visible. | The settled AC-2 gate state (one starred placeholder, blank inputs, status text). | Persisted-row count; the star is read from the image (the accessibility tree shows only `gridcell "1"`). |
| `t3-03-input1-find-value-dialog-property-FX_Label-with-focused-input.png` | T10 | Find dialog: Find empty, Collection `primary collection`, Property `FX_LabelGridCol (FX_Label)`, Case Sensitive, OK/Cancel/Help. The background is dimmed; the upper input shows no clear focus ring. | The Property preselection for the upper input (FX_Label). | **The focused input.** No focus ring is visible on the upper input. |
| `t3-04-input2-after-find-menu-click-state-readonly.png` | T10 | Find dialog: Find empty, Property `FX_CodeGridCol (FX_Code)`; background dimmed; lower input has a red outline. | The Property preselection for the lower input (FX_Code). | **A clear focus indicator.** The red outline is the required-field style and is not a blue focus ring. |
| `t4-01-post-cancel-find-dialog-closed-baseline-object-1-of-1.png` | T9 handoff / cycle 6 (viewed then) | Dialog closed; one starred placeholder; both inputs blank; `(Object 1 of 1)`. | Baseline after the second Cancel. | — |
| `t4-02-record1-staged-FX001-Factory-test-one-unsaved.png` | cycle 6 (viewed then) | Upper `Factory test one`, lower `FX001`, one starred row, Save enabled, `(Object 1 of 1)`. | AC-4 staged values. | Persistence. |
| `t5-02-post-new-click-record1-retained-record2-blank-settled.png` | cycle 7 (viewed then) | Record 1 still in the grid with its values and star; blank starred record 2; Save enabled; `(Object 2 of 2)`; no prompt. | AC-5 retention of record 1 across New. | Database state of record 1. |
| `t6-01-both-records-staged-unsaved-no-save-clicked.png` | cycle 8 (viewed then) | Both starred rows; upper `Factory test two`, lower `FX002`; Save enabled; `(Object 2 of 2)`. | AC-5 staging of both records before Save. | Persistence. |
| `t7-01-post-save-runtime-state-after-single-save-click.png` | cycle 9 (viewed then) | Stars cleared on rows 1 and 2; Save greyed; lower input grey; `(Object 2 of 2)`; no prompt or alert. | AC-6 settled UI after one Save. | Database write; the grey input's meaning. |
| `t8-01-post-refresh-complete-collection-read-after-save.png` | T10 | Two unstarred rows (numbers `1` and `2`); row 1 current; upper input `Factory test one` focused with its text selected; lower input `FX001` grey; Save greyed; `(Object 1 of 2)`; no prompt. | The post-Save Refresh state and the row count. | Full cell text (truncated to "Facto"; full text from the T8 accessibility snapshot). |
| `t9-01-post-form-tab-close-no-prompt.png` | T10 | Form tab gone; Form toolbar greyed; no dialog or save-changes prompt visible. | The ordinary close completed without a visible prompt (AC-8). | Database state. |
| `t9-02-select-form-fx-helloworld01-row-active-before-ok.png` | T10 | Select Form with one row `FX_HelloWorld01` / `FX_HelloWorld01`, the Name cell active, Filter `FX_HelloWorld01`, Name, both checkboxes unchecked; OK/Cancel/Help. | Target Form identity before OK (AC-8). | The User-scope version. |
| `t9-03-reopened-runtime-before-query-add-mode-placeholder.png` | T10 | Reopened runtime `FX_HelloWorld01`; one starred blank placeholder; both inputs blank; upper input focused; `(Object 1 of 1)`; Save greyed. The Mongoose identity bar is visible at top right. | The reopened Form opens in add mode with no saved rows loaded (AC-8). | The saved rows (none loaded until Refresh). |
| `t9-04-post-reopen-refresh-complete-collection-read.png` | T9 (viewed then) | Two unstarred rows; upper `Factory test one` focused; lower `FX001`; `(Object 1 of 2)`; Save greyed. | The post-reopen Refresh state (AC-8). | Full cell text (from the T9 accessibility snapshot). |

### Reconciliation: t9-04 against the post-Save baseline t8-01

| Item | T8 post-Save (t8-01, T8 snapshot) | T9 post-reopen (t9-04, T9 snapshot) | Result |
|---|---|---|---|
| Rows | 2 unstarred (`1`, `2`) | 2 unstarred (`1`, `2`) | Match |
| Row 1 values | `Factory test one` / `FX001` | `Factory test one` / `FX001` | Match |
| Row 2 values | `Factory test two` / `FX002` | `Factory test two` / `FX002` | Match |
| Status | `(Object 1 of 2)` | `(Object 1 of 2)` | Match |
| Save | Greyed | Greyed | Match |
| Focus and inputs | Upper `Factory test one` focused with selection; lower `FX001` | Same | Match |

The two screenshots show the same layout. No material difference was found.

### Corrections made in this audit

1. **Cycle 8 snapshot count.** The record said 4 snapshot calls. The controller audit (`harness-audit-T6.md`) shows 3 snapshot calls and 1 screenshot. Corrected in the cycle 8 operation counts.
2. **Cycle 11 "viewed" claims.** The cycle 11 record marked `t9-01`, `t9-02` and `t9-03` as viewed. T9 did not read those images (the controller audit `harness-audit-T9.md` lists only `t9-04` as read). They were read for the first time in this audit. Corrected in the cycle 11 section; `t9-04` remains viewed in T9.
3. **Cleanup inventory.** Two table rows were malformed (an extra cell, and status text merged into the wrong column), and the status paragraph interleaved several cycles. The file was rewritten with the same facts and no data changed (see `evidence/EXP-042-R3/cleanup-inventory.md`).
4. **Controller "prohibited-tool hits".** `harness-audit-T4.md` and `harness-audit-T6.md` report 2 flagged hits each. These are the `browser_type` calls for the plain fills, which the brief authorizes. They are not a finding of a prohibited action.

### Acceptance matrix (AC-1 to AC-9)

| AC | Verdict | Evidence (repo-relative) | Limits |
|---|---|---|---|
| AC-1 | **Supported** (observed, one session) | `t2-01` (T10), `t2-02` (T10), `t2-03` (T10); T2 accessibility snapshot. Preflight before cycle 2's Open: no runtime Form tab, no Designer tab. Target identity: `t9-02` and `t9-03` (T10) show `FX_HelloWorld01`, and the identity bar is visible in `t9-03`. Authorized table and values documented in the "Authorized target" section and `cleanup-inventory.md`. EXP-041-R3 IDO table (record line 224, `t1-01`): `FX_Code` String 30, key 1, required; `FX_Label` String 100. Designer table (EXP-041-R3 lines 574–579) and runtime-mapping limit (lines 782–784). | Cycle 0 stopped at the inherited runtime tab. The operator closed that tab between cycles 0 and 2 (operator-reported; the worker did not observe the close). The operator's browser refresh is operator-reported. The User-scope version and the IDO revision were cited from EXP-041-R3 and not re-read. |
| AC-2 | **Supported** under the operator-amended rule (2026-10-10) | `t2-03` (T10): one starred row, blank inputs, `(Object 1 of 1)`. T2 snapshot: one `gridcell "1"`, no FX001 or FX002 text. Zero matches for FX001 and FX002 recorded in cycle 2. | Single session. The star is read from the image. The count's meaning is tested only by AC-7. |
| AC-3 | **ACCEPTED WITH LIMITS** (operator decision 2026-10-10; see cycle 14) | Property preselections: `t3-03` (T10) shows `FX_LabelGridCol (FX_Label)` for the upper input; `t3-04` (T10) shows `FX_CodeGridCol (FX_Code)` for the lower input. Cancel verified by label: cycle 4 (`f1e221`, input 1) and cycle 6 (`f1e190`, input 2). No search: both Find textboxes are empty, and the controller audits show no OK click or search. Required marker: `t2-03` shows the red `*` on the lower input. | **The focused input is not visible in either modal image, and the operator waived that screenshot requirement (cycle 14).** `t3-03` shows no focus ring on the upper input; `t3-04` shows a red outline, not a clear focus ring. Focus is from accessibility snapshots only (cycle 4 frame snapshot shows `[active]` on `f1e149`; the input 1 focus snapshot was not saved to a file). The Edit-to-column link is inferred from the preselection. EXP-041-R3 (lines 583 and 784) states the same inference. The operator reviewed the mapping screenshots and accepted the mapping (operator-reported, 2026-10-10). |
| AC-4 | **Supported** | `t4-02` (cycle 6, viewed then): upper `Factory test one`, lower `FX001`, one starred row. Accessibility snapshot (full text). Re-observed in `t5-01` (cycle 7) and in the cycle 8 snapshot. | Staged, not persisted (by design before Save). |
| AC-5 | **Supported** at the UI level | `t5-02` (cycle 7): record 1 kept its values and star after New; record 2 blank and starred; Save enabled; no prompt. `t6-01` (cycle 8): both rows with values before Save. `t7-01` (cycle 9): stars cleared only after Save, which supports the star as the pending-state indicator. | "Record 1 not committed by New" is an inference from the star and Save state. There is no pre-Save database read. |
| AC-6 | **Supported** at the runtime UI level | Controller audit `harness-audit-T7.md`: one Save click (`f1e29`, label `Save`), no retry, no other action. `t7-01` (cycle 9): Save greyed, stars cleared, no alert or validation text, `(Object 2 of 2)`. | This Web Client UI shows no explicit success message; success is inferred from the state change. Not a database read. |
| AC-7 | **Supported** under the operator-approved reading (coordinator clarification before T9) | `t8-01` (T10): two unstarred rows; full text from the cycle 10 snapshot: `Factory test one` / `FX001`, `Factory test two` / `FX002`; no third row. Status `(Object 1 of 2)`: total 2, current record 1. Reconciled with `t9-04` (table above). Status immediately after Save (before the read): `(Object 2 of 2)` (`t7-01`). | The pass condition's literal text was `(Object 2 of 2)`. The read produced `(Object 1 of 2)`. The coordinator clarification accepts this reading. The count is not a contradiction of the AC-2 interpretation. A same-session Web Client read, not a database read. |
| AC-8 | **Supported** at the runtime UI level, same session only | `t9-01`, `t9-02`, `t9-03` (T10), `t9-04` (T9). Controller audit `harness-audit-T9.md`: one Form-tab close, one Open, one row activation, one OK, one Refresh, no prompt answered. Baseline comparison: cycle 11 table, all rows match. | Same session. The reopen shows an add-mode placeholder, and the rows appear only after Refresh. Not cross-session or database durability. |
| AC-9 | **Supported** (documentation) | `evidence/EXP-042-R3/cleanup-inventory.md` (rewritten in this audit, same facts): two rows, table `dbo.FX_HelloWorld01`, IDO `FX_HelloWorld01` in `FX_HelloWorldProject01`, exact values, cleanup ownership, no deletion. | Cleanup not performed (out of scope). Persistence is not database-verified. The IDO and Form identities are cited from EXP-041-R3, not re-read here. |

### Overall acceptance verdict

**Superseded by the cycle 14 operator decision: ACCEPTED WITH LIMITS.** The operator accepted AC-3 with the focused-input screenshot requirement waived. The T10 finding that neither Find image shows the focused input stands as a limit and is recorded in the cycle 14 section. All other checks were already supported at the recorded level.

### Operation accounting (all tasks, controller audits and records)

| Operation | Total | By task |
|---|---|---|
| Browser clicks (including the 2 that errored) | 23 | T2 6, T3 8, T4 1, T5 1, T7 1, T8 1, T9 5 |
| Click errors | 2 | T2 Edit menu (timeout, portal banner intercept); T3 Edit menu (`Ref f1e14 not found`) |
| Accessibility snapshot calls | 38 | T1 2, T2 6, T3 11, T4 4, T5 2, T6 3, T7 2, T8 2, T9 6 |
| Snapshot `Ref not found` errors | 1 | T3 (`f1e191`) |
| Recovery snapshots (after a stale ref) | 1 | T3 (the one allowed); T4's fresh snapshot was the operator-authorized recovery attempt |
| `browser_find` calls | 4 | T2 2, T3 2 |
| Screenshots (worker-requested PNG) | 19 | T1 1, T2 4, T3 3, T4 2, T5 2, T6 1, T7 1, T8 1, T9 4 |
| Plain fills (`browser_type`, no `slowly`) | 4 | T4 2 (FX001; Factory test one), T6 2 (FX002; Factory test two) |
| Key-event typing (`slowly: true`) and Ctrl+A | 0 | Not needed: the Select Form filter was already set to `FX_HelloWorld01` |
| Tab presses (commit) | 4 | T4 2, T6 2 |
| New (toolbar) | 1 | T5 (between record 1 and record 2) |
| Save (toolbar) | 1 | T7 (no retry, no second Save) |
| Refresh (toolbar, empty criteria) | 3 | T2 (gate query), T8 (post-Save read), T9 (post-reopen read) |
| Filter-in-Place, F4, Get More Rows | 0 | — |
| Toolbar Open | 2 | T2, T9 |
| Select Form row activations | 2 | T2, T9 |
| Select Form OK | 2 | T2, T9 |
| Runtime Form openings | 2 | T2 (first), T9 (reopen) |
| Ordinary Form-tab close | 1 | T9 (no prompt) |
| Find Value in Collection opens | 2 | T3 (input 1, input 2) |
| Find dialog Cancel (verified label) | 2 | T3 (`f1e221`, input 1); T4 (`f1e190`, input 2) |
| Find dialog OK or search | 0 | — |
| Edit-menu clicks | 4 | T2 1 (timeout), T3 3 (1 `Ref not found`, 2 successful) |
| Input clicks (no typing) | 3 | T2 1 (upper), T3 2 (upper, lower) |
| Corrected visible inspections | 1 | T2 (`t2-04`) |
| Save retries, Refresh retries, New retries | 0 | — |
| Dialogs or prompts answered (save-changes, validation, duplicate-key, overwrite, discard) | 0 | — |
| Designer opens, User Preferences opens, browser refresh or reload, navigation | 0 | — |
| JavaScript, evaluate, run-code, SQL, API | 0 | — |
| Authentication, session replacement, check-in or check-out | 0 | — |
| Records inserted by the runtime Save | 2 | T7 (one Save) |
| Records edited or deleted after Save | 0 | — |

**Operator interventions (operator-reported in the handoff record or the task briefs; not worker actions):** (1) one browser refresh before the run to apply the Display Status Bar preference; (2) the inherited blank runtime tab closed between T1 and T2; (3) the portal banner dismissed between T2 and T3; (4) the 2026-10-10 amendment to the AC-2 rule (before T2's gate); (5) the mapping screenshots reviewed and the mapping accepted (after T3); (6) one fresh recovery attempt authorized for the T3 dialog (T4); (7) the AC-7 reading clarification (before T9).

**Worker portal-banner dismissals:** 0. The banner was visible in T2 (`t2-01` to `t2-04`, cycle 2) and absent from cycle 4 onward.

### Errors and recovery accounting

1. **T1 (cycle 0): gate stop.** An inherited runtime tab was open, so the run stopped without opening the Form. Recovered by the operator closing the tab (operator-reported). No mutation.
2. **T2 (cycle 2): Edit menu timeout.** `TimeoutError` because the portal banner intercepted the click. One corrected visible inspection (`t2-04`). The mapping step did not run; the operator dismissed the banner later. No retry of the Edit click in T2.
3. **T3 (cycle 4): `Ref f1e14 not found`** on the Edit click for input 2. One fresh untargeted recovery snapshot (the allowance). The click then succeeded with the new ref.
4. **T3 (cycle 4): `Ref f1e191 not found`** on the dialog snapshot. The allowance was already spent, so no new ref was used. A read-only screenshot (`t3-04`) recorded the state. The input 2 dialog was left open.
5. **T4 (cycle 6): dialog closed.** One fresh snapshot (operator-authorized), one Cancel with the label verified as `Cancel`. The Find dialog closed; the baseline was re-observed.
6. **No Save, New or Refresh retries; no prompts; no lost rows; no unexpected commits.**

### Repository confinement audit

- Written or edited by this task (T10): `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md` (edited); `evidence/EXP-042-R3/cleanup-inventory.md` (rewritten). No other file.
- In `evidence/EXP-042-R3/` from earlier tasks (not modified here): `t1-01`, `t1-02` (snapshot file), `t2-01` to `t2-04`, `t3-01`, `t3-02` (snapshot file), `t3-03`, `t3-04`, `t4-01`, `t4-02`, `t5-01`, `t5-02`, `t6-01`, `t7-01`, `t8-01`, `t9-01` to `t9-04`. Plus `harness-audit-T1.md` to `harness-audit-T9.md` (controller-generated, not worker prose).
- `evidence/playwright/` holds browser-tool snapshot and console logs. These are tool-generated, not worker-authored, and not in `evidence/EXP-042-R3/`. It includes files dated before this experiment (2026-09-29 and 2026-09-30) and this run's files (2026-10-10). This task did not create or modify any of them.
- Session-start git status (from the harness context): `tools/learning-harness/*` (README, the EXP-035 brief, the config example, and the shadow CLI, runner and test) were already modified before this run. This run did not touch them, and T10 did not read `tools/`.
- Out-of-scope changes by this run: none found in the audited records. The harness computes repository confinement itself from the Git state; this is the worker's self-audit only.

### Final browser state (as reported by T9; not re-inspected in T10)

- Mongoose is the only browser tab. No Designer tab. No dialog, browser-native prompt or unsaved-change prompt.
- Runtime `FX_HelloWorld01` reopened once and open, with two unstarred rows (`Factory test one` / `FX001`; `Factory test two` / `FX002`). Save disabled. Status `(Object 1 of 2)`. Upper input focused with `Factory test one` selected. No typing after the Refresh.
- Portal banner: absent in T9.

### Findings and knowledge state

| Finding | State |
|---|---|
| Find dialog Cancel closes the dialog and leaves the blank baseline unchanged | observed (one run per dialog) |
| Plain fill plus one Tab keeps the value in the verified input and row, for both FX_Code and FX_Label | observed (4 fills, 4 Tabs, one session) |
| New keeps record 1 visible with its values and star, and adds a blank starred record 2, with no prompt | observed (one run) |
| The starred new-row indicator clears after Save; Save then greys | observed (one run) |
| One Save produces no explicit success message in the UI | observed (one run) |
| Refresh after Save returns both rows with the correct pairings and total 2 | observed (one session) |
| The status-bar numerator is the current-record position (Object 2 of 2 before Refresh, Object 1 of 2 after) | observed; interpretation accepted by operator |
| Form-tab close with no prompt when saved; reopen opens in add mode; Refresh loads the rows | observed (one run) |
| Recovered rows persist in `dbo.FX_HelloWorld01` | **unresolved** (no database read) |
| Mapping of the upper input to FX_Label and the lower input to FX_Code | observed (Property preselection) and operator-accepted; **the focused-input link is unresolved** |
| The grey FX_Code input after Save (read-only state or visual only) | **unresolved** |
| A procedure for this flow is repeatable | **candidate_procedure** only; not replay_verified |

### Open items and blockers (for the operator)

1. **AC-3 decision: resolved.** Accepted with limits by the operator on 2026-10-10 (cycle 14).
2. **Database persistence.** Not verified. Any durability claim needs a separately authorized read of `dbo.FX_HelloWorld01` (out of this experiment's scope).
3. **Cleanup.** FX001 and FX002 remain in `dbo.FX_HelloWorld01`. Their removal is out of scope and needs a separately authorized, FX_-scoped task.
4. **Grey FX_Code input after Save.** Visually observed (`t7-01`, `t8-01`, `t9-04`). The operator reports it as consistent with primary-key read-only behaviour. Read-only enforcement was not tested.
5. **Runtime left open.** The runtime is open and clean, as the T9 record reports. This audit did not change it.

## Cycle 11 (T9) — ordinary Form close, one reopen, post-reopen complete read (task message `7ff8ff2d-c0d4-44c5-9bb7-c634ebccb0bb`; worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`)

Scope per coordinator clarification: AC-7 passes under the operator-approved brief, where the post-Refresh status `(Object 1 of 2)` reports current record 1 of 2 with both expected non-starred records recovered. The selection was not manipulated to obtain `(Object 2 of 2)`. No Save, New, Delete, typing, second Refresh, second close or reopen, Designer, preference change, browser refresh or navigation, JavaScript, SQL or API. No portal banner appeared, so no dismissal was made.

### Pre-close preconditions (fresh untargeted snapshot)

| Check | Observed |
|---|---|
| Selected runtime Form | Tab `FX_HelloWorld01` selected (`f1e99`), tabpanel `FX_HelloWorld01` (`f1e102`). DEM identity bar. No Designer tab. |
| Dialogs / prompts | None. |
| Save | Disabled (`f1e28`). |
| Rows | Two non-starred rows. Row 1 `Factory test one` / `FX001`; row 2 `Factory test two` / `FX002` (full text). |
| Status bar | `(Object 1 of 2)` (`f1e172`). Total 2 confirmed. |

All preconditions matched.

### Close, reopen, and query

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | One click on the ordinary Form-tab close `Close Panel FX_HelloWorld01` (`f1e101`, accessible name verified in the fresh snapshot). | Completed with no error. No save-changes, discard, validation or other prompt. | tool log |
| 2 | Fresh snapshot and screenshot `t9-01`. | FX_HelloWorld01 tab gone; tabpanel gone. Form toolbar actions disabled. No dialog. Toolbar `Open` enabled. | `t9-01` (not read in T9; read in the T10 audit), snapshot |
| 3 | One click on toolbar `Open` (`f1e25`, label verified). | Select Form dialog opened (`f1e178`). Single row Caption `FX_HelloWorld01` / Name `FX_HelloWorld01`. Filter `FX_HelloWorld01`, Filter By `Name`, Case Sensitive and Starts With unchecked. | snapshot (this task) |
| 4 | One click on the row Name cell `f1e200` to activate it. | Row shows as active (`[active]` on the Name cell). | `t9-02` (not read in T9; read in the T10 audit), snapshot |
| 5 | One click on OK `f1e226` (label verified `OK` in a fresh snapshot). | Runtime `FX_HelloWorld01` tab reopened (`f1e233`, tabpanel `f1e236`). Status bar `(Object 1 of 1)`. Save disabled. The reopened runtime showed a **single blank add-mode placeholder**, not the two saved rows. | snapshot (this task), `t9-03` (not read in T9; read in the T10 audit) |
| 6 | Fresh snapshot, then one click on toolbar `Refresh` (`f1e35`, label verified `Refresh`). | Completed with no error and no prompt. Tooltip `Refresh` visible. | tool log |
| 7 | Fresh snapshot and settled screenshot `t9-04`. | Two rows, both non-starred (numbers `1` and `2`). Row 1 `Factory test one` (`f1e306`) / `FX001` (`f1e308`). Row 2 `Factory test two` (`f1e313`) / `FX002` (`f1e315`). Status bar **`(Object 1 of 2)`** (`f1e172`). Upper input `Factory test one`, lower input `FX001`. Save disabled. No error. | `t9-04` (viewed), snapshot |

### Comparison with the T8 post-Save baseline

| Item | T8 post-Save baseline | T9 post-reopen (one Refresh) | Match |
|---|---|---|---|
| Row count | 2 | 2 | Yes |
| Row 1 pair | `Factory test one` / `FX001` | `Factory test one` / `FX001` | Yes |
| Row 2 pair | `Factory test two` / `FX002` | `Factory test two` / `FX002` | Yes |
| Starred rows | None | None | Yes |
| Status total | 2 | 2 | Yes |
| Status numerator | 1 (after T8 Refresh) | 1 | Yes |
| Save | Disabled | Disabled | Yes |
| Errors / prompts | None | None | Yes |

The post-reopen values and totals match the baseline.

### Observations that need interpretation

- **Opening state:** on reopen the Form showed one blank add-mode placeholder with `(Object 1 of 1)` before the Refresh. This matches the earlier open behaviour (EXP-041-R3 and cycle 2), in which the Form opens in add mode. It means the Form does not load the saved rows on open. The Refresh was required, and it did load them.
- **Status-bar total:** the post-reopen Refresh gave `(Object 1 of 2)`, the same form as the T8 baseline. The numerator is the current-record position, as the coordinator's clarification states, so this is consistent with AC-7 under the approved reading.

### Acceptance checkpoint (cycle 11)

| AC | Status | Basis | Limit |
|---|---|---|---|
| AC-1 | Carried from earlier cycles. Re-observed here: tab identity, DEM identity bar, no Designer tab, no dialog. | snapshots, `t9-01`, `t9-04` | Session-scoped. |
| AC-2 | Carried from cycle 2. This task's Refresh was the post-reopen read, not the AC-2 gate query. | — | Session-scoped. |
| AC-3 | Passed in cycle 6 (operator-accepted mapping). Not re-run. | — | Edit-to-column link inferred from the preselection. |
| AC-4 | Supported (cycles 6 and 9). | — | — |
| AC-5 | Supported at UI level (cycles 7 and 8). | — | — |
| AC-6 | Supported at the runtime UI level (cycle 9): one Save, no prompt or validation message, Save disabled afterwards. | cycle 9 `t7-01` | Not a database read. |
| AC-7 | **PASSED under the operator-approved reading (coordinator clarification, cycle 11).** The complete read (cycle 10) returned exactly two non-starred records with the correct pairings and total 2; status `(Object 1 of 2)` reports current record 1 of 2. | `t8-01`, cycle 10 snapshot | Same-session Web Client read. Not database durability. |
| AC-8 | **Supported at the runtime UI level.** One ordinary Form-tab close (no prompt), one reopen through Select Form, and one unfiltered Refresh returned the same two records and values as the post-Save baseline, with no extra row or error. | `t9-01`, `t9-02`, `t9-03` (read in the T10 audit), `t9-04` (read in T9), snapshots | Same-session runtime recovery only. Not cross-session or database durability. The reopen opened in add mode, so a Refresh was needed to load the rows. |
| AC-9 | Partial. The cleanup inventory lists both rows with exact values, table and IDO identities and cleanup ownership, and records the close and reopen recovery. | cleanup inventory | No deletion. Cleanup not performed. |

### Operation counts (cycle 11)

| Operation | Count |
|---|---|
| Accessibility snapshot calls | 6 (pre-close; post-close; post-Open, Select Form; post-row-activation; post-OK; post-Refresh) |
| Screenshots (worker-requested PNG) | 4: `t9-01`, `t9-02`, `t9-03`, `t9-04` |
| Form-tab close clicks | **1** (label verified `Close Panel FX_HelloWorld01`) |
| Toolbar Open clicks | **1** (label verified `Open`) |
| Select Form row activation clicks | **1** (Name cell `f1e200`) |
| Select Form OK clicks | **1** (label verified `OK`) |
| Runtime Form openings | **1** (the reopen) |
| Refresh clicks | **1** (label verified `Refresh`) |
| Save / New / Delete | **0 / 0 / 0** |
| Typing / fills / Tabs | **0 / 0 / 0** |
| Filter-in-Place / Get More Rows / F4 | **0 / 0 / 0** |
| Designer / User Preferences / browser refresh / navigation | **0 / 0 / 0 / 0** |
| Dialogs or prompts answered | **0** |
| Ref `not found` errors / recovery snapshots | **0 / 0** |
| Portal banner dismissals | **0** (banner absent) |
| JavaScript / evaluate / run-code (worker-initiated) | **0** |

### Final browser state (cycle 11)

- Mongoose tab selected (only browser tab). No Designer tab. No in-page dialog, no browser-native prompt, no unsaved-change prompt observed.
- Runtime tab `FX_HelloWorld01` reopened once and open. Two non-starred rows (`Factory test one` / `FX001`, `Factory test two` / `FX002`). Save disabled. Status bar `(Object 1 of 2)`. Upper input focused with `Factory test one` (no typing).
- Left open and clean for final documentation review.

### Open questions (cycle 11)

1. Whether the two rows are persisted to `dbo.FX_HelloWorld01` is still not verified at the database level. Recovery here is same-session runtime recovery only.
2. The grey lower FX_Code input after Save: read-only state or visual only (unresolved).
3. The reopen opened in add mode and did not show the saved rows until Refresh. This is an observation about the open behaviour, not a failure.

## Cycle 10 (T8) — AC-7 complete post-Save collection read (task message `ff7d9829-2041-42fc-b267-513d2b2ed08d`; worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`)

Scope: confirm the post-Save preconditions, run one unfiltered toolbar Refresh, and capture the completed read. No criteria, no repeat Refresh, no New, no Save, no Delete, no typing, no Filter-in-Place, no Get More Rows, no close or reopen, no Designer, no preference change, no JavaScript, no reload or navigation. No dialog, prompt or portal banner appeared.

### Pre-query preconditions (fresh untargeted snapshot)

| Check | Observed |
|---|---|
| Selected runtime Form | Tab `FX_HelloWorld01` selected (`f1e99`), tabpanel `FX_HelloWorld01` (`f1e102`), DEM identity bar. No Designer tab. |
| Dialogs / prompts | None. |
| Save | Disabled (`f1e28`). |
| Rows | Exactly two rows (`1`, `2`). Row 1 `Factory test one` / `FX001`; row 2 `Factory test two` / `FX002` (full text). |
| Starred indicators | None in the snapshot (plain row numbers). |
| Status bar | `(Object 2 of 2)` (`f1e172`). |

All preconditions matched.

### Query (one Refresh)

| # | Action | Observed |
|---|---|---|
| 1 | One click on toolbar `Refresh` (`f1e35`, label verified `Refresh`). | Completed with no error, no prompt, no dialog. Tooltip `Refresh` visible. |
| 2 | Fresh snapshot (no action). | Rows: exactly two (`1`, `2`). Row 1 `Factory test one` (`f1e191`) / `FX001` (`f1e193`). Row 2 `Factory test two` (`f1e198`) / `FX002` (`f1e200`). Status bar **`(Object 1 of 2)`** (`f1e172`). Current inputs: upper `Factory test one` (focused, `f1e159`), lower `FX001` (`f1e166`). Save disabled. No dialog, no validation or error text. |
| 3 | Settled screenshot `t8-01`. | Two unstarred rows (numbers `1` and `2`; row 1 carries the current-row arrow). Save icon greyed. Status bar `(Object 1 of 2)`. Lower input grey, upper input focused with its text selected. No error. |

No second Refresh. No other action.

### AC-7 assessment (direct observation vs interpretation)

- **Direct:** the completed read returned exactly two rows. Row 1 pairs FX001 with `Factory test one`, row 2 pairs FX002 with `Factory test two` (full text from the accessibility snapshot; the screenshot truncates to `Facto`). No third row. No starred row. No error.
- **Direct:** the status bar reads `(Object 1 of 2)`. Its denominator is 2, which matches the two persisted rows. Its numerator is the current-object position: before Refresh it was 2 (the cursor was on record 2); after Refresh it is 1 (the cursor is on row 1, whose values now fill the inputs).
- **Not as written:** the AC-7 pass condition says the status bar must confirm `(Object 2 of 2)`. The literal text is `(Object 1 of 2)`. The total still matches, but the brief's literal text does not.
- **Interpretation (not proven):** the position change is most likely a Refresh side effect. The read itself does not show a count contradiction, so this is not logged as the AC-2 contradiction. The operator should decide whether the literal text governs.

**AC-7 status: NOT PASSED as literally written.** The substantive evidence (two rows, both pairings, no extras, total 2) supports the intended result. The literal status text does not match the pass condition, and I did not treat that as a pass.

### Acceptance checkpoint (cycle 10)

| AC | Status | Basis | Limit |
|---|---|---|---|
| AC-1 | Carried from earlier cycles. Re-observed here: FX_HelloWorld01 tab and tabpanel, DEM identity bar, no Designer tab. | snapshots, `t8-01` | Session-scoped. |
| AC-2 | Carried from cycle 2. This task's Refresh was the post-Save read, not the AC-2 gate query. | — | Session-scoped. |
| AC-3 | Passed in cycle 6 (operator-accepted mapping). Not re-run. | — | Edit-to-column link inferred from the preselection. |
| AC-4 | Supported (cycle 6, re-checked pre-Save in cycle 9). | — | Persistence not established by the Save alone. |
| AC-5 | Supported at UI level (cycles 7 and 8). | — | — |
| AC-6 | Supported at the runtime UI level (cycle 9): one Save, no prompt or validation message, Save disabled afterwards. | cycle 9 `t7-01` | Not a database read. |
| AC-7 | **NOT PASSED as written.** A completed Refresh returned exactly two unstarred rows with the correct FX001 / Factory test one and FX002 / Factory test two pairings, with total 2. The literal status text is `(Object 1 of 2)`, not the `(Object 2 of 2)` in the pass condition. | `t8-01` (viewed), snapshot (full values) | Status numerator is the current-record position; the operator decides whether the literal text governs. The read is a same-session Web Client read, not database durability. |
| AC-8 | Not executed. Runtime left open for AC-8. | — | — |
| AC-9 | Partial. The cleanup inventory records both rows as read back by the post-Save Web Client query (rows and values), with the literal status-text deviation noted. | cleanup inventory | No deletion. |

### Operation counts (cycle 10)

| Operation | Count |
|---|---|
| Fresh untargeted snapshots | 2 (pre-query, post-query) |
| Screenshots (worker-requested PNG) | 1: `t8-01` |
| Refresh clicks (label verified `Refresh`) | **1** |
| Refresh retries | **0** |
| Criteria / Filter-in-Place / Get More Rows / F4 | **0** |
| New / Save / Delete | **0 / 0 / 0** |
| Typing / fills / Tabs | **0 / 0 / 0** |
| Form close / reopen / Select Form | **0 / 0 / 0** |
| Designer / User Preferences / browser refresh / navigation | **0 / 0 / 0 / 0** |
| Dialogs or prompts answered | **0** |
| Ref `not found` errors / recovery snapshots | **0 / 0** |
| Portal banner dismissals | **0** (banner absent) |
| JavaScript / evaluate / run-code (worker-initiated) | **0** |

### Final browser state (cycle 10)

- Mongoose tab selected (only browser tab). No Designer tab. No in-page dialog, no browser-native prompt, no unsaved-change prompt.
- Runtime tab `FX_HelloWorld01` open and selected. Two unstarred rows (`Factory test one` / `FX001`, `Factory test two` / `FX002`). Save disabled. Status bar `(Object 1 of 2)`. Upper input focused with `Factory test one` selected (no typing).
- Left open and clean for a separately authorized AC-8 close and reopen.

### Next permitted action (coordinator)

- The operator decides whether AC-7 passes given the literal status text `(Object 1 of 2)` versus the `(Object 2 of 2)` in the pass condition. The record evidence supports the two rows and their pairings.
- If authorized, AC-8: one ordinary Form-tab close, one reopen through Select Form, one unfiltered complete read, and comparison with the two rows above. Not performed here.

### Open questions (cycle 10)

1. Whether `(Object 1 of 2)` is acceptable for AC-7, given it differs from the literal `(Object 2 of 2)` only in the current-position number.
2. Whether the grey lower input after Save indicates read-only state or only a visual state (unresolved since cycle 9).
3. Database-level persistence is not established. The only read is a same-session Web Client read.

## Cycle 9 (T7) — single explicit Save and immediate result (task message `0788dc02-cda5-45ac-94be-bcbe28f0ac0d`; worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`)

Scope: verify the pre-Save state, click the runtime toolbar Save exactly once, then capture the immediate runtime result. No retry, no second Save, no Refresh, no Filter-in-Place, no Get More Rows, no New, no Delete, no edits, no close or reopen, no Designer, no preference change, no JavaScript, no reload or navigation. No dialog, prompt or portal banner appeared at any point.

### Pre-Save verification (observed, fresh untargeted snapshot)

| Check | Observed | Source |
|---|---|---|
| Selected runtime Form | Tab `FX_HelloWorld01` selected (`f1e95`), tabpanel `FX_HelloWorld01` (`f1e98`), DEM identity bar, no Designer tab. | snapshot |
| Dialogs / prompts | None open. | snapshot |
| Row 1 full values | `gridcell "Factory test one"` (`f1e138`) and `gridcell "FX001"` (`f1e140`). Grid image truncates to "Facto". | snapshot (full text) |
| Row 2 full values | `gridcell "Factory test two"` (`f1e145`) and `gridcell "FX002"` (`f1e147`). | snapshot (full text) |
| Row count | Exactly two rows (`1`, `2`) in the grid; no third row. | snapshot |
| Starred indicators | Both rows starred in the pre-save image (`t6-01`, prior task). Not separately re-captured before Save. | `t6-01` |
| Inputs | Upper `Factory test two` (`f1e156`); lower `FX002` (`f1e163`). | snapshot |
| Save | Enabled. Accessible label exactly `Save` at `f1e29` (no `disabled`). | snapshot |
| Status bar | `(Object 2 of 2)` (`f1e169`). | snapshot |

Pre-Save gate passed. No condition differed.

### Save (one explicit click)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | One click on the toolbar `Save` (`f1e29`, label verified `Save`). | Click returned with no error. No timeout, no `Ref not found`. No prompt or dialog appeared. | tool log |
| 2 | Fresh untargeted snapshot (no further action). | Save button now `[disabled] [active]` (`f1e28` label `Save`), i.e. disabled. Tooltip `Save` visible. Both rows still present with their values. Status bar `(Object 2 of 2)`. No dialog, no validation text, no alert. | snapshot (this task) |
| 3 | Settled screenshot `t7-01`. | Starred indicators are no longer shown on rows 1 and 2 (plain numbers `1` and `2`). Save icon greyed. Upper input `Factory test two`. Lower input `FX002` now shows a grey (non-editing) background. Status bar `(Object 2 of 2)`. No dialog or error text. | `t7-01` (viewed) |

No second Save. No retry. No corrective edit.

### Save result (exact observations)

- **Response:** the click completed with no error. The runtime showed no success message, toast, validation message, duplicate-key message or alert. Mongoose gives no explicit success text in this UI, so success is inferred from the UI state change below.
- **UI state change:** the starred new-row indicators disappeared, Save became disabled, and the lower input changed from an editable-looking field to a grey field. This is UI evidence that the pending changes were accepted, not database evidence.
- **Row count in the grid:** 2. Row 1 `Factory test one` / `FX001`; row 2 `Factory test two` / `FX002`. No extra row.
- **Status bar after Save:** `(Object 2 of 2)`. Recorded as observed. Under the operator's 2026-10-10 rule, a count of 2 is consistent with two persisted records, but this is not the AC-7 test: AC-7 requires a supported complete collection read, which was not run here.

### Acceptance checkpoint (cycle 9)

| AC | Status | Basis | Limit |
|---|---|---|---|
| AC-1 | Carried from earlier cycles. Re-observed here: tab and tabpanel identity, DEM identity bar, no Designer tab, no dialog. | snapshot, `t7-01` | Session-scoped. |
| AC-2 | Carried from cycle 2. No query was run in this task. | — | Session-scoped. |
| AC-3 | Passed in cycle 6 (operator-accepted mapping). Not re-run. | `t3-03`, `t3-04`, `t4-01` | Edit-to-column link inferred from the grid-column preselection. |
| AC-4 | Supported (cycle 6). Re-observed pre-Save here: row 1 = `Factory test one` / `FX001` in full text. | snapshot, `t6-01` | Save is now done, so AC-4's "no explicit Save" condition no longer applies to later reads. |
| AC-5 | Staging of both records, and preservation of record 1 across New, observed in cycles 7 and 8. Both records remain represented before Save. | `t5-02`, `t6-01`, `t7-01` | — |
| AC-6 | **Supported at the runtime UI level.** Exactly one Save click; no timeout, no prompt, no validation or duplicate-key message; Save disabled and the new-row stars cleared afterwards; two rows present with their values. | `t7-01` (viewed), snapshot | No database read was made. This is not durability, and the Save response is not an explicit success message. |
| AC-7 | **NOT CHECKED in this task.** The post-Save status bar reads `(Object 2 of 2)`, which is consistent with the operator's amended rule (count of 2 persisted records), but the required complete collection read has not been run. | `t7-01` | Read deferred to the separately authorized AC-7 read. Any other count will be recorded as a contradiction. |
| AC-8 | Not executed. | — | — |
| AC-9 | Partial. The cleanup inventory records FX001 and FX002 with the Save outcome (Save clicked once; UI-level success), and states that persistence is not independently verified. | cleanup inventory | No rows deleted. |

### Operation counts (cycle 9)

| Operation | Count |
|---|---|
| Fresh untargeted snapshots (pre-Save, post-Save) | 2 |
| Screenshots (worker-requested PNG) | 1: `t7-01` |
| Save clicks | **1** (label verified `Save`, ref `f1e29`) |
| Save retries | **0** |
| New / Delete / Refresh / FiP / Get More Rows | **0 / 0 / 0 / 0 / 0** |
| Typing / fills / Tabs | **0 / 0 / 0** |
| Form close / reopen / Select Form | **0 / 0 / 0** |
| Designer / User Preferences / browser refresh / navigation | **0 / 0 / 0 / 0** |
| Dialogs or prompts answered | **0** |
| Ref `not found` errors / recovery snapshots | **0 / 0** |
| Portal banner dismissals | **0** (banner absent) |
| JavaScript / evaluate / run-code (worker-initiated) | **0** |

### Final browser state (cycle 9)

- Mongoose tab selected (only browser tab). No Designer tab. No in-page dialog, no browser-native prompt, no unsaved-change prompt observed.
- Runtime tab `FX_HelloWorld01` open and selected. Two rows: `Factory test one` / `FX001` and `Factory test two` / `FX002`. Save disabled. Status bar `(Object 2 of 2)`.
- The runtime is left open for the separately authorized AC-7 read. No further action taken.

### Next permitted action (coordinator)

A separately authorized complete collection read (AC-7): a single supported read, Refresh or Filter-in-Place with empty criteria, then read the status bar, grid rows and inputs. Then an ordinary Form-tab close, one reopen through Select Form, and an unfiltered complete read (AC-8). Neither is performed here.

### Open questions (cycle 9)

1. Whether the two records are persisted to `dbo.FX_HelloWorld01` is not verified. The AC-7 read is the test. A different count from 2 would be a contradiction of the operator's AC-2 interpretation.
2. Whether the Save response carries an explicit success signal, or only the UI state change, is unresolved. No success message appeared.
3. The lower FX_Code input is grey after Save. Its meaning (read-only after save, or only a visual state) is not established.

## Cycle 8 (T6) — stage record 2 and verify both staged records; no Save (task message `ff5b179a-53b3-4e00-ba05-1e0216766ab1`; worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`)

Scope: verify the staged state from cycle 7, enter FX002 into the lower FX_Code input and `Factory test two` into the upper FX_Label input (one plain fill and one Tab each), and verify both rows. Stopped before Save. No Refresh, no Filter-in-Place, no close or reopen, no Designer, no preference change, no JavaScript, no reload or navigation, no New. No dialog or prompt appeared, and no portal banner was present.

### Steps (observed)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Fresh untargeted snapshot before any input. | FX_HelloWorld01 tab selected (heading `f1e96`). No dialog. Grid: row `1` = `Factory test one` / `FX001` (`f1e137`, `f1e138`, `f1e140`); row `2` blank (`f1e144`, `f1e145`, `f1e147`). Upper input `f1e156` blank and active. Lower required input `f1e163` blank. Save enabled (`f1e28`, no disabled attribute). Status bar `(Object 2 of 2)`. All preconditions matched. | snapshot (this task) |
| 2 | One plain `browser_type` (no `slowly`) of `FX002` into the lower FX_Code input `f1e163`, then one Tab. | Snapshot: `f1e163` = `FX002`. Row 2 cell `f1e176` = `FX002`. Row 2 FX_Label cell still blank. Status bar `(Object 2 of 2)`. The value held after Tab, so no corrected attempt was needed. | snapshot (this task) |
| 3 | One plain `browser_type` (no `slowly`) of `Factory test two` into the upper FX_Label input `f1e156`, then one Tab. | Snapshot: `f1e156` = `Factory test two`. Row 2 cells `Factory test two` (`f1e178`) and `FX002` (`f1e176`). Row 1 unchanged (`Factory test one` / `FX001`). Lower input `f1e163` still `FX002`. Status bar `(Object 2 of 2)`. The value held after Tab, so no corrected attempt was needed. | snapshot (this task) |
| 4 | Settled screenshot `t6-01` and fresh snapshot. | Both rows starred (blue star on `1` and `2`). Both rows' label cells truncated to `Facto` in the image; full text from the snapshot. Save icon enabled. Status bar `(Object 2 of 2)`. Focus on the lower input with `FX002` selected. No dialog, prompt or validation message. | `t6-01` (viewed), snapshot |

Save was not clicked. Nothing was typed after step 3.

### Acceptance checkpoint (cycle 8)

| AC | Status | Basis | Limit |
|---|---|---|---|
| AC-1 | Carried from cycles 0, 2, 6, 7. Re-observed in this task: FX_HelloWorld01 tab and tabpanel identity, DEM identity bar, no Designer tab. | snapshots, `t6-01` | Session-scoped. |
| AC-2 | Carried from cycle 2. No new query was run in this task. | — | Session-scoped. |
| AC-3 | Passed in cycle 6 (operator-accepted mapping). Used again in this task: FX_Code entered into the lower required input (`f1e163`), FX_Label into the upper input (`f1e156`). | `t3-03`, `t3-04`, `t4-01`; snapshot step 1 | The Edit-to-column link is inferred from the grid-column preselection (see cycle 6). |
| AC-4 | Supported at cycle 6 (`t4-02`), re-observed in cycle 7 (`t5-01`) and this task (snapshot step 1: row 1 = FX001 / Factory test one). | `t4-02`, `t5-01`, snapshot | Staged, not persisted. |
| AC-5 | **Staging evidence captured; preservation of record 1 and the New transition were observed in cycle 7.** Both expected records are now represented in the grid with their values before Save. Persistence of either record is not established (no Save, no query). | `t5-02` (cycle 7), `t6-01` (this task), snapshot step 4 | "Not committed" for record 1 is inferred from the star and enabled Save, not read from the database. |
| AC-6 to AC-8 | Not executed. No Save in this task. | — | — |
| AC-9 | Partial. The cleanup inventory records FX001 and FX002 as STAGED, NOT EXPLICITLY SAVED. | cleanup inventory | No row persisted. |

### Operation counts (cycle 8)

| Operation | Count |
|---|---|
| Accessibility snapshot calls | 3 (pre-entry; after the FX002 Tab; after the Factory test two Tab). The settled screenshot `t6-01` was a separate call. Controller audit `harness-audit-T6.md`: 3 snapshots, 1 screenshot. |
| Screenshots (worker-requested PNG) | 1: `t6-01` |
| Plain fills (`browser_type`, no `slowly`) | **2** (FX002 into `f1e163`; Factory test two into `f1e156`) |
| Tab presses (commit) | **2** |
| Typing with `slowly: true` | 0 |
| New / Save / Delete / Refresh / FiP / Get More Rows | **0 / 0 / 0 / 0 / 0 / 0** |
| Form close / reopen / Select Form | **0 / 0 / 0** |
| Designer / User Preferences / browser refresh / navigation | **0 / 0 / 0 / 0** |
| Dialogs or prompts answered | **0** |
| Ref `not found` errors / recovery snapshots | **0 / 0** |
| Portal banner dismissals | **0** (banner absent) |
| JavaScript / evaluate / run-code (worker-initiated) | **0** |

Note on the tool log: each `browser_type` printed the Playwright call it ran, using the generated Mongoose input IDs (`#mgedit-1270-inputEl` for the lower FX_Code input, `#mgedit-1268-inputEl` for the upper FX_Label input), the same mechanism as cycle 6. The worker wrote no script.

### Final browser state (cycle 8)

- Mongoose tab selected (only browser tab). No Designer tab. No in-page dialog. No browser-native dialog or unsaved-change prompt observed.
- Runtime tab `FX_HelloWorld01` open and selected. Two starred rows: row 1 = `Factory test one` / `FX001`; row 2 = `Factory test two` / `FX002`. Both inputs hold row 2's values (`Factory test two` upper, `FX002` lower). Focus on the lower input.
- Save enabled. Status bar `(Object 2 of 2)`. **Not saved, not discarded, not closed.**

### Next permitted action (coordinator)

The next step is a separately authorized decision. It is one explicit runtime toolbar Save (`f1e29` in the current snapshot, label `Save`, verified before any click). After Save, verify the post-Save collection and status-bar count (AC-7); the status bar should read `(Object 2 of 2)` if it counts two persisted records, and any other count is a contradiction to record. Do not retry Save if its outcome is uncertain.

### Open questions (cycle 8)

1. Whether both records are persisted is unknown until the explicit Save and the post-Save read.
2. Whether `(Object n of n)` counts persisted rows is still unresolved (AC-7).
3. Whether the staged states persist if the runtime is closed without Save: not tested, and closing without Save would discard both records (not performed).

## Cycle 7 (T5) — native New transition verification (task message `7d0c0339-638c-43c1-8dcf-05c4df2250d7`; worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`)

Scope: confirm the staged record 1 state, click the toolbar New once, and observe whether record 1 is retained and not committed. Stopped before typing FX002. No Save, no Refresh, no Filter-in-Place, no close or reopen, no Designer, no preference change, no JavaScript, no reload or navigation. The portal banner was absent in this task, so no dismissal was made.

### Steps (observed)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Fresh untargeted snapshot before any action. | FX_HelloWorld01 tab selected in the tabpanel and heading. No dialog open. Grid: one starred row with `Factory test one` and `FX001` cells. Lower input (`f1e151`) = `FX001`, upper input (`f1e144`) = `Factory test one`. Save enabled (`f1e28`). Status bar `(Object 1 of 1)`. Stage matches the T4 end state. | snapshot (this task) |
| 2 | Screenshot before New. | Starred row `1` (blue star) with `Facto…` in the FX_Label cell. Both values in the inputs. Save icon enabled. Status bar `(Object 1 of 1)`. Focus on the lower input, `FX001` selected. | `t5-01` (viewed) |
| 3 | Fresh label check of toolbar New: the snapshot showed `New` at `f1e31`. One click on it. | Click completed with no error. No prompt or dialog. | tool log |
| 4 | Fresh snapshot and settled screenshot after New. | Grid now shows two starred rows: row `1` (`Factory test one` / `FX001`) and row `2` (blank). Upper input `f1e144` is the active, blank input. Lower input blank. Save enabled (`f1e28`, not disabled). Status bar **`(Object 2 of 2)`**. Tooltip `New` visible from hover. No dialog. | snapshot, `t5-02` (viewed) |

No input was typed into after the New click. FX002 was not entered.

### Interpretation (direct observation vs inference)

- **Direct:** record 1 is still displayed as a row with both values after New. Record 2 is a second starred blank row. Both inputs are blank, and the focus is on the upper input. No prompt, alert or validation message appeared. Save is still enabled.
- **Direct (star):** the blue star marks the new-row placeholder in this grid. Both rows show it. In the cycle 2 observation (`t2-03`) the star marked the uncommitted placeholder, so row 1 still carrying it is consistent with record 1 remaining uncommitted.
- **Inference (not a DB read):** that record 1 is still uncommitted rests on the star and the enabled Save. No query was run, so no persisted-row count supports it.
- **Status bar `(Object 2 of 2)`:** the count rose from 1 to 2 with the second blank record. This matches the operator's 2026-10-10 rule that the count includes uncommitted new rows. It is observed, not proven to be a persisted count. The AC-7 post-Save read tests it.

### Acceptance checkpoint (cycle 7)

| AC | Status | Basis | Limit |
|---|---|---|---|
| AC-1 | Carried from cycles 0, 2 and 6. Re-observed in this task: the tab, tabpanel and heading identity name FX_HelloWorld01, the DEM identity bar is present, and there is no Designer tab. | snapshots, `t5-01` | Session-scoped. |
| AC-2 | Carried from cycle 2. No new query was run in this task. | — | Session-scoped. |
| AC-3 | Passed in cycle 6 (operator-accepted mapping). Not re-run. | `t3-03`, `t3-04`, `t4-01` | — |
| AC-4 | Supported at cycle 6 (`t4-02`). Re-observed here (`t5-01`, snapshot step 1). | `t4-02`, `t5-01` | Staged, not persisted. |
| AC-5 | **Pending.** Preservation and no-implicit-commit are supported at UI level: record 1 remains visible with both values and its star, Save stays enabled, no prompt appeared, and record 2 is a blank starred row. Record 2 values (FX002 / Factory test two) are not yet entered, so AC-5's record-2 capture is not met. | `t5-01`, `t5-02` (viewed), snapshot step 4 | No persistence query was run. "Not committed" rests on the star and the enabled Save (inference). |
| AC-6 to AC-8 | Not executed. | — | — |
| AC-9 | Partial. The cleanup inventory records record 1 as STAGED, NOT SAVED, and the new blank row 2 as not yet entered. | cleanup inventory | No row persisted. |

### Operation counts (cycle 7)

| Operation | Count |
|---|---|
| Untargeted fresh snapshots | 2 (pre-New, post-New) |
| Screenshots (worker-requested PNG) | 2: `t5-01`, `t5-02` |
| New clicks (toolbar, label verified `New`) | **1** |
| Typing / plain fills / Tab presses | **0 / 0 / 0** |
| Save / Delete / Refresh / FiP / Get More Rows | **0 / 0 / 0 / 0 / 0** |
| Form close / reopen / Select Form | **0 / 0 / 0** |
| Designer / User Preferences / browser refresh / navigation | **0 / 0 / 0 / 0** |
| Dialogs or prompts answered | **0** |
| Ref `not found` errors / recovery snapshots | **0 / 0** |
| Portal banner dismissals | **0** (banner absent) |
| JavaScript / evaluate / run-code (worker-initiated) | **0** |

### Final browser state (cycle 7)

- Mongoose tab selected (the only browser tab). No Designer tab. No dialog, no browser-native prompt, no unsaved-change prompt.
- Runtime tab `FX_HelloWorld01` open. Two starred add-mode rows: row 1 holds `Factory test one` / `FX001`; row 2 is blank and selected, with focus on its upper input.
- Save enabled. Status bar `(Object 2 of 2)`. Not saved, not discarded, not closed. Record 1 is unsaved (inference, see above). Record 2 is blank.

### Next permitted action (coordinator)

FX002 / Factory test two may be entered into the blank record 2 only in a separate authorized task. Lower input = FX_Code (`FX002`), upper input = FX_Label (`Factory test two`), each by one plain fill and Tab, verified by snapshot. Then one explicit Save. The mapping stays as accepted in cycle 6.

### Open questions (cycle 7)

1. Whether record 1 is uncommitted is inferred from the star and Save state, not from a read. An explicit Save (later task) is the first point at which persistence is tested.
2. Whether `(Object n of n)` counts persisted rows is still unresolved (AC-7).

## Cycle 6 (T4) — close Find dialog, stage record 1 (task message `377512d3-7ddd-4410-957c-8f64a638a59f`; worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`)

Scope: one Cancel to close the open input-2 Find dialog; re-observe the blank baseline; stage record 1 only (FX001, Factory test one) with one plain fill and one Tab per field. Stopped before New and Save. No Refresh, no reopen, no close, no Designer, no preference change, no search, no JavaScript. The operator authorized one fresh recovery attempt and AC-4 if the dialog closed and the baseline was verified.

### Steps (observed)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Fresh untargeted snapshot before any action. | Find dialog `[active]` open. Property `FX_CodeGridCol (FX_Code)`. Find textbox empty (no search). Cancel button labelled exactly `Cancel` at `f1e190`. No portal banner. Runtime tab `FX_HelloWorld01` selected; one starred placeholder; both inputs blank; status bar `(Object 1 of 1)`. | snapshot (this task) |
| 2 | One click on Cancel `f1e190` (label verified in step 1). No OK, no search. | Click completed. No error. | tool log |
| 3 | Fresh snapshot after Cancel, and screenshot `t4-01`. | Find dialog gone from the tree. `FX_HelloWorld01` tab selected. One starred placeholder row. Both inputs blank. Status bar `(Object 1 of 1)`. Save disabled. | `t4-01` (viewed), snapshot |
| 4 | One plain `browser_type` (no `slowly`) of `FX001` into the lower input (`f1e149`, mapped FX_Code, red required marker). Tab once. | Snapshot: textbox `f1e149` = `FX001`. The grid row shows `FX001` in its second cell (`f1e198`). **Save became enabled** (dirty record). Status bar `(Object 1 of 1)`. Focus moved to the status-bar textbox. Value persisted in the field after Tab, so no corrected attempt was needed. | snapshot (this task) |
| 5 | One plain `browser_type` (no `slowly`) of `Factory test one` into the upper input (`f1e142`, mapped FX_Label). Tab once. | Snapshot: textbox `f1e142` = `Factory test one`. Grid row (`f1e199`) cells `Factory test one` (`f1e200`) and `FX001` (`f1e198`). Lower input `f1e149` still `FX001`. Status bar `(Object 1 of 1)`. Focus is on the lower input with its text selected. Value remained after Tab, no corrected attempt. | snapshot, `t4-02` (viewed) |
| 6 | Screenshot `t4-02` (settled). | Upper `Factory test one`; lower `FX001`; one starred row (star and `1` in the row header) with `Facto…` truncated in the FX_Label cell; Save icon enabled; status bar `(Object 1 of 1)`. | `t4-02` (viewed) |

Stopped here. New and Save were not performed. Record 2 was not staged. No further fields were touched.

### Acceptance checkpoint (cycle 6)

| AC | Status | Basis | Limit |
|---|---|---|---|
| AC-1 | Carried from cycles 0 and 2 (passed; runtime and Designer state as recorded there). This task re-observed the runtime Form identity (tab, tabpanel, URL), the DEM identity bar and the absence of a Designer tab. | snapshots (this task), `t4-01` | The Designer and User-scope version were not re-read. Session-scoped. |
| AC-2 | Carried from cycle 2 (passed under the amended rule). Re-observed in this task (step 1 and step 3): one starred placeholder, both inputs blank, `(Object 1 of 1)`. **No new Refresh or query was run in this task.** | `t2-03`, `t4-01`, snapshots | Session-scoped. The `(Object 1 of 1)` count's meaning is tested only at AC-7. |
| AC-3 | **PASSED (observed; operator-accepted).** Input 1 (`FX_LabelGridCol (FX_Label)`) closed by Cancel in cycle 4. Input 2 (`FX_CodeGridCol (FX_Code)`) closed by a verified Cancel in this task (step 2); its post-Cancel state is `t4-01`. Mapping: upper input → FX_Label; lower input → FX_Code, consistent with the EXP-041-R3 T5 Designer table and the Required marker. | `t3-03`, `t3-04`, `t4-01`; snapshots | The Property field names the grid column (`FX_…GridCol`), not the Edit. The Edit-to-column link is an inference from the dialog preselection. The input-2 focus is seen as a red outline in `t3-04`. |
| AC-4 | **Supported (observed).** Lower input `FX001`, upper input `Factory test one`, both in the verified inputs; one starred staged row shows both values; no Save. | `t4-02` (viewed), snapshot step 5 | The grid's FX_Label cell is truncated in the image (`Facto…`); its full text comes from the accessibility snapshot (`gridcell "Factory test one"`). Staged, not persisted. |
| AC-5 to AC-8 | Not executed. | — | — |
| AC-9 | Partial. `evidence/EXP-042-R3/cleanup-inventory.md` now records FX001 / Factory test one as STAGED, NOT SAVED. | cleanup inventory | No row persisted. |

### Operation counts (cycle 6)

| Operation | Count |
|---|---|
| Untargeted snapshots (fresh) | 4 (pre-Cancel, post-Cancel, after FX001 Tab, after Factory test one Tab) |
| Find dialog Cancel clicks (label verified `Cancel`) | **1** (`f1e190`) |
| Find dialog OK clicks / searches | **0 / 0** |
| Plain fills (`browser_type`, no `slowly`) | **2** (FX001 into `f1e149`; Factory test one into `f1e142`) |
| Tab presses (commit) | **2** |
| Typing with `slowly: true` | 0 |
| Runtime input clicks (no typing) | 0 |
| Ref `not found` errors | **0** |
| Recovery snapshots | 0 (allowance not used) |
| Screenshots (worker-requested PNG) | 2: `t4-01`, `t4-02` |
| New / Save / Delete / Refresh / FiP / Get More Rows | **0 / 0 / 0 / 0 / 0 / 0** |
| Records persisted / edited / deleted | **0 / 0 / 0** |
| Form-tab close / reopen / Select Form | **0 / 0 / 0** |
| Designer / User Preferences / browser refresh / navigation | **0 / 0 / 0 / 0** |
| Portal banner dismissals | **0** (banner absent this task) |
| JavaScript / evaluate / run-code (worker-initiated) | **0** |

Note on the tool log: the `browser_type` and `browser_click` tool outputs print the Playwright call they ran, which targets the snapshot ref's generated Mongoose input ID (`#mgedit-1270-inputEl` for `f1e149`, `#mgedit-1268-inputEl` for `f1e142`) and `getByRole('button', { name: 'Cancel' })` for the dialog. These are the tool's own mechanics for the permitted `browser_type` and `browser_click` calls. The worker wrote no script and used no evaluate, run-code, SQL or API route.

### Final browser state (cycle 6)

- Mongoose tab selected (only browser tab). No Designer tab. No in-page dialog. No Find dialog open. No browser-native dialog or unsaved-change prompt observed.
- Runtime tab `FX_HelloWorld01` open and selected, Form toolbar enabled. One starred add-mode row staged with FX001 / Factory test one. **Save enabled (unsaved). Not saved, not discarded, not closed.** Status bar `(Object 1 of 1)`.
- Focus is on the lower input (`FX001`, text selected) after the Tab from the upper input. Nothing was typed after that. A later task must not treat this focus as a commit.
- Portal banner: absent.

### Next permitted action (for the coordinator)

Record 2 requires a separately authorized step: the native toolbar New (`f1e29`), with a check that record 1 is still staged and not committed or discarded (AC-5), then FX002 / Factory test two. Only after both records are staged may one explicit toolbar Save be performed (AC-6). This task stopped before New.

### Open questions and limits (cycle 6)

1. Whether toolbar New keeps record 1 staged or commits or discards it is unobserved. AC-5 is open.
2. The status-bar count semantics (AC-7) are untested until a Save and a post-Save read.
3. The Find-dialog mapping rests on the grid-column preselection (see AC-3 limit). The operator accepted it.

## Cycle 4 (T3) field identification (task message `1cf5dce8-959c-4a82-9cab-dc7fdc66fc8d`; worker session `6d37db00-96a8-4f22-9cf4-9d30d3bfe510`)

Scope: AC-3 field identification only. No Form reopen, no refresh, no repeated collection query, no typing, no New, no Save, no close, no Designer, no preference change, no JavaScript.

### Baseline (unchanged, verified before any input click)

| Check | Observed | Evidence |
|---|---|---|
| Runtime Form | Tab heading and tabpanel `FX_HelloWorld01`; the Mongoose tab is the only browser tab; no Designer tab. | `t3-01` (viewed), `t3-02` (snapshot file) |
| Portal notification | **Absent** in this session. No banner dismissal was needed, so none was performed. | `t3-01` (viewed) |
| Grid | One starred new-row placeholder (gridcell `1`). | `t3-01` (viewed) |
| Inputs | Both blank. | `t3-01`; `t3-02` |
| Status bar | `(Object 1 of 1)`. | `t3-01` (viewed) |
| Menu bar | Visible (Explorer, Form, Actions, Edit, View, Window, Help). | `t3-01` (viewed) |

The baseline matches the operator's amended AC-2 condition, so the mapping step ran.

### Input 1 (upper input, preceded by `:`, no required marker)

| Step | Action | Observed |
|---|---|---|
| 1 | Click the upper input (`f1e142`). No typing. | Input became the active element; still empty. |
| 2 | Fresh untargeted snapshot. Edit menu ref `f1e14`. Open Edit, then Find Value In Collection (`f1e171`, verified by a targeted menu snapshot). | Find dialog opened. |
| 3 | Dialog snapshot (`f1e191`). | Find: textbox empty. Collection: `primary collection`. **Property: `FX_LabelGridCol (FX_Label)`.** The dialog labels this field "Property", not the brief's "In Property". |
| 4 | Screenshot `t3-03` (dialog and runtime together). | Dialog visible over a dimmed Form. The focus border on the upper input is **not clearly visible** under the overlay. The upper input's focus is confirmed by the step-1 snapshot, not by this image. |
| 5 | Fresh dialog snapshot before Cancel. Cancel verified as label `Cancel` at `f1e221`. Find textbox empty, so no search. | Verified. |
| 6 | Click Cancel (`f1e221`) once. | Dialog closed. Post-Cancel snapshot: input 1 still empty; status bar `(Object 1 of 1)`. |

**Input 1 result: Property `FX_LabelGridCol (FX_Label)` → FX_Label.** Cancel verified; no search.

### Input 2 (lower input, preceded by red `*`, Required marker)

| Step | Action | Observed |
|---|---|---|
| 1 | Click the lower input (`f1e149`). No typing. | Active element; still empty. Frame snapshot (`f1e96`) confirmed `[active]` on `f1e149`. |
| 2 | Click Edit (`f1e14`). | **Ref `f1e14` not found** (stale). |
| 3 | One fresh **untargeted** recovery snapshot (the one allowed). Edit ref `f1e14` confirmed. Lower input still active. | Recovery allowance now **spent**. |
| 4 | Click Edit (`f1e14`). Menu snapshot (`f1e160`). Click Find Value In Collection (`f1e171`). | Find dialog opened. |
| 5 | Snapshot of the dialog (`f1e191`). | **Ref `f1e191` not found.** No new ref was used. |
| 6 | Read-only screenshot `t3-04` (no ref needed). | Find dialog **open** over the dimmed Form. **Property: `FX_CodeGridCol (FX_Code)`.** The lower input shows a **red outline**. Find textbox empty; no search. |
| 7 | Cancel for input 2. | **Not performed.** No verified Cancel ref exists in the current state, and the recovery allowance is spent. The brief forbids using new refs in that state. |

**Input 2 result: Property `FX_CodeGridCol (FX_Code)` → FX_Code (observed in the dialog). The Find dialog is still open and its Cancel is not verified.**

### AC-3 verdict

- Mapping, observed: input 1 → FX_Label; input 2 → FX_Code. The two properties differ.
- Consistent with the EXP-041-R3 Designer table (`FX_LabelEdit` → `object.FX_Label`, `FX_CodeEdit` → `object.FX_Code`) and with the Required marker on the lower input (FX_Code is Required in the IDO).
- Limits: (a) the Property field names the grid column (`FX_LabelGridCol` / `FX_CodeGridCol`), not the Edit. The link from that preselection to the focused Edit is an inference from the dialog's preselection, not a read of the component. (b) The input 1 focus is confirmed only by the snapshot, not in the image. (c) The input 2 focus is seen only as a red outline in one image.
- **AC-3 is NOT PASSED.** The brief requires each dialog to be closed by a verified Cancel. Input 2's Cancel was not verified or performed. The mapping is therefore not closed out, and no typing is authorized.

### Errors and recovery (cycle 4)

1. `Ref f1e14 not found` on the input 2 Edit click (a stale ref after the input 1 Cancel). Recovery: one fresh untargeted snapshot (the allowance).
2. `Ref f1e191 not found` on the dialog snapshot after the Find menu click. The recovery allowance was already spent, so no new ref was used. Read-only screenshot `t3-04` was taken to check the state. It is not a corrected inspection with new refs.
3. No timeout. No portal banner intercept (the banner was absent this session, unlike cycle 2).

### Operation counts (cycle 4)

| Operation | Count |
|---|---|
| Runtime input clicks (no typing) | 2 (`f1e142`, `f1e149`) |
| Edit menu clicks | 2 (one after a stale ref, retried once with a fresh ref) |
| Find Value In Collection menu clicks | 2 |
| Find dialog opens | 2 |
| Find dialog Cancel clicks, verified label | **1** (input 1 only) |
| Find dialog left open | **1** (input 2) |
| Searches run | **0** |
| Untargeted snapshots (fresh) | 4 (preflight, after input 1 click, recovery, after input 1 Cancel) |
| Targeted snapshots (menus, dialogs, tabpanel) | 4 (`f1e160` × 2, `f1e191`, `f1e96`) |
| Ref `not found` errors | 2 (`f1e14`, `f1e191`) |
| Screenshots (worker-requested PNG) | 3: `t3-01`, `t3-03`, `t3-04`. Plus the snapshot file `t3-02`. |
| Typing / New / Save / Delete / Refresh / Select Form / Open | **0** |
| Form reopen / close / Designer / User Preferences / browser refresh | **0** |
| Portal banner dismissals | **0** (banner absent) |
| JavaScript / evaluate / run-code | **0** |

### Acceptance checkpoint (cycle 4)

| AC | Status | Basis | Limit |
|---|---|---|---|
| AC-1 | Carried from cycle 2 (passed). The baseline here matches. | `t3-01`, `t3-02` | Designer and User-scope version not re-read. |
| AC-2 | Carried from cycle 2 (passed under the amended rule). The state is unchanged. The query was not repeated, per the brief. | `t3-01` (viewed), `t3-02` | Session-scoped. |
| AC-3 | **NOT PASSED.** Mapping observed (input 1 → FX_Label, input 2 → FX_Code). Input 2's dialog is still open, so its Cancel is unverified. | `t3-03` (viewed), `t3-04` (viewed) | See the AC-3 verdict above. |
| AC-4 to AC-8 | Not executed. No entry, New, Save, close or reopen. | — | — |
| AC-9 | Partial. The cleanup inventory lists the two rows as NOT INSERTED. | `evidence/EXP-042-R3/cleanup-inventory.md` | — |

### Final browser state (cycle 4)

- Mongoose tab selected (only tab). No Designer tab. Runtime tab `FX_HelloWorld01` selected, unchanged: one starred placeholder, both inputs blank, Save disabled, status bar `(Object 1 of 1)`.
- **Find Value in Collection dialog for input 2 is OPEN** (in-page dialog, Property `FX_CodeGridCol (FX_Code)`, Find textbox empty, no search). Its Cancel is **not verified or clicked**, and the coordinator must close it. This is a bounded-task stop, not a data change.
- Portal banner: absent.

### Operator/coordinator actions needed

1. **Close the open Find dialog for input 2 with Cancel**, or authorize the next task to do so with a fresh snapshot and label check.
2. Decide whether AC-3 can be accepted from the observed mapping (both properties differ, consistent with the Designer and the Required marker) or must be re-run in a new session.
3. The runtime tab remains open as a blank add-mode record for the next decision (unchanged from cycle 2).

## Cycle 2 resumption (task message `59ed6fcf-edea-4350-b81e-892cd144da84`; worker session `6d37db00-96a8-4f22-9cf4-9d30d3bfe510`)

Scope of this task: read-only preflight, one Form open, one complete query, and field mapping (AC-3). No typing, New, Save, mutation, close, reopen, Designer, preference change, browser refresh or navigation. The operator-amended AC-2 rule (2026-10-10) was applied: an empty-criteria collection read must show exactly one starred new-row placeholder, blank inputs and the status bar text exactly `(Object 1 of 1)`.

Sources for this task: the cycle 0 record (above), `evidence/EXP-042-R3/` files of cycle 0, and the same EXP-041-R3 and EXP-042 references as before. No new reading of EXP-040 or EXP-041-R3 detail was done in this task.

### Preflight (AC-1), observed

| Item | Observed | Evidence |
|---|---|---|
| Browser tabs | One tab, `Mongoose` (URL `favoriteContext=FX_HelloWorld01`). No Web Designer tab. | `browser_tabs` list |
| Web Client tab strip | **Empty.** No `FX_HelloWorld01` runtime tab, no `IDO Projects`, `IDOs` or `Sql Tables` tab. The cycle 0 blank runtime tab is **no longer open**. The worker did not close it and cannot attest who did. | `t2-01` (viewed); snapshot |
| Form region and toolbar | Form region blank. Save, New, Delete, Refresh, FiP and the other Form toolbar buttons disabled, so no Form was open. | `t2-01`; snapshot |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in or configuration screen. | snapshot |
| Designer | No Designer tab. The toolbar's Designer buttons were not used. | `browser_tabs` list |
| Status bar before Open | Not displayed (no Form open). | `t2-01` (viewed) |
| User Preferences | Not opened. No preference changed. | — |

**AC-1 gate: passed.** No runtime tab and no Designer tab were open before the Open action.

### Form identity and open (once)

| Step | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Toolbar Open (`f1e23`) | Select Form dialog opened with the leftover filter `FX_HelloWorld01`, Filter By `Name`, Case Sensitive and Starts With unchecked, **one row** Caption `FX_HelloWorld01` / Name `FX_HelloWorld01`. | `t2-02` (viewed); dialog snapshot |
| 2 | Filter | **Not retyped.** The brief's Select Form typing was not needed; the existing filter already showed the single target row. No key events were sent. | — |
| 3 | Row Name cell (`f1e111`) clicked to activate the row | Row active (`[active]` on the Name cell). | dialog snapshot |
| 4 | Fresh dialog snapshot, then OK (`f1e137`) clicked once | Button label `OK` verified in the fresh snapshot. Runtime tab `FX_HelloWorld01` opened once. URL `favoriteContext=FX_HelloWorld01`. Tabpanel `FX_HelloWorld01`. | snapshot after OK |
| 5 | Status bar check | **Displayed.** Footer textbox reads `(Object 1 of 1)`, with `en-US` and `powered by infor` at the right. | snapshot; `t2-03` (viewed) |

Runtime Form opens by this task: **1.** Form identity: the tab heading, the tabpanel and the URL all name `FX_HelloWorld01`. The User-scope version is not shown by the runtime and was not re-read here (the Designer was not opened).

### Complete read-only query (AC-2)

| Step | Action | Observed |
|---|---|---|
| 1 | One toolbar **Refresh** (`f1e29`, label `Refresh`), no criteria | Completed. No dialog. No prompt. |
| 2 | Status bar (find, then snapshot) | `(Object 1 of 1)`, unchanged from the open state. |
| 3 | Grid and inputs (`f1e161` snapshot) | One gridcell `1`. The upper and lower inputs have no value. No cell text. No FX001 or FX002 text is visible anywhere in the Form. |
| 4 | Settled screenshot `t2-03` (viewed) | Tab `FX_HelloWorld01`; one row with the **blue new-row star** and number `1`; both inputs blank; the Refresh tooltip visible from the hover; status bar `(Object 1 of 1)` at bottom left. |

**AC-2 gate: PASSED under the operator-amended rule.** Exactly one row, carrying the blue new-row star; both inputs blank; status bar text exactly `(Object 1 of 1)`. Recorded: zero matches for FX001 and FX002 (none visible in the settled grid or inputs).

Limits of this gate:
- The star is seen in the screenshot `t2-03`. The accessibility snapshot shows only the gridcell `1` and does not name the star.
- Under the operator's 2026-10-10 rule, `(Object 1 of 1)` counts only the uncommitted placeholder. This interpretation is **not tested** here. The AC-7 post-Save check is the test.
- This is one run and one query. Collection emptiness is not claimed beyond this session's displayed state.

### Field mapping (AC-3): NOT ESTABLISHED. No typing occurred.

| Step | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Click into the **upper** input (`f1e207`, preceded by `:`, no required marker). No typing. | Input focused (blue focus border). Empty. | `t2-04` (viewed) |
| 2 | Fresh snapshot of the Form frame (`f1e1`). Edit menu ref `f1e12`, label `Edit`. | Snapshot taken before the menu click. | snapshot |
| 3 | Click the **Edit** menu (`f1e12`). | **TimeoutError** after the tool's retries: `waiting for element to be visible, enabled and stable … <span aria-hidden="true">The DistributionIFSContactUs group does not have …</span> from <portal-notification class="osp-warn-bg"> subtree intercepts pointer events`. The portal warning banner covers the top of the Mongoose frame. | error text; `t2-04` |
| 4 | One corrected visible inspection (screenshot `t2-04`) | Banner visible across the top. The Mongoose menu bar (Explorer, Form, Actions, Edit, View, Window, Help) is **not visible** in the captured viewport; the Form toolbar is directly under the banner. | `t2-04` (viewed) |

Not done: the lower input was **not** clicked; **Find Value in Collection was not opened** for either input; no In Property value was read; no Cancel was needed. The portal banner's close control was **not** used: it is a portal notification outside this brief, and dismissing it was not authorized.

**AC-3 result: FAILED (not established).** Neither input's property was identified. Per the brief, no typing occurs and the mutation gate stays closed.

Environment blocker (suspected): the portal notification banner intercepts pointer events over the Mongoose menu bar, so the supported Edit menu cannot be clicked. This is one timeout, one corrected inspection, and no retry of the Edit click.

### Entry, Save, close and reopen

Not performed (gate closed by AC-3). New: 0. Typing into runtime fields: 0. Save: 0. Form-tab close: 0. Reopen: 0. Record 1 and record 2: not staged.

### Operation counts (cycle 2)

| Operation | Count |
|---|---|
| Browser tab list / fresh untargeted snapshots | 1 / 1 (preflight) |
| Toolbar Open click | 1 |
| Select Form dialog-scoped snapshots | 2 (before and after activation) |
| Select Form dialog finds | 1 (`Select Form`) |
| Select Form row Name-cell click | 1 |
| Select Form OK click | 1 (label `OK` verified) |
| Runtime Form openings by this task | **1** |
| Select Form filter typing (`slowly: true`) / Control+a | **0 / 0** |
| Runtime queries (Refresh) | **1** (FiP and F4 not used) |
| Settle waits | 0 explicit |
| Find Value in Collection dialogs | **0** |
| Runtime input clicks (no typing) | 1 (upper input) |
| Edit menu click | 1, **timed out** (portal banner intercept) |
| Corrected visible inspections | 1 (`t2-04`) |
| Recovery snapshots (after `Ref … not found`) | 0 (no `Ref not found` error occurred) |
| Typing into runtime fields | **0** |
| New / Save / Delete | **0 / 0 / 0** |
| Records inserted / edited / deleted | **0 / 0 / 0** |
| Form-tab closes / reopens | **0 / 0** |
| Designer launches / User Preferences opens | **0 / 0** |
| Browser refresh / reload / navigation | **0 / 0 / 0** |
| JavaScript / evaluate / run-code | **0** |
| Authentication / session replacement / logout | **0** |
| Screenshots (browser tool, worker-requested) | 4: `t2-01` to `t2-04`; see Evidence |

### Acceptance checkpoint (cycle 2)

| AC | Status | Basis | Limit |
|---|---|---|---|
| AC-1 | **PASSED (observed).** No runtime tab and no Designer tab before Open; DEM identity; status bar displayed after the Form opened. | `t2-01`, `t2-02`, `t2-03`; snapshots | Designer and User-scope version not re-read; the EXP-041-R3 T5 table and T1 identity are cited, not observed here. The runtime's origin is not known. |
| AC-2 | **PASSED under the operator-amended rule (observed).** One starred placeholder, blank inputs, `(Object 1 of 1)`. | `t2-03` (viewed); the refresh snapshot | Single run. The count's meaning is tested only at AC-7. |
| AC-3 | **NOT PASSED.** Neither input identified. | `t2-04` (viewed); the Edit-click timeout | Blocked by the portal banner intercepting the Edit menu. |
| AC-4 | Not executed (no entry). | — | — |
| AC-5 | Not executed (no New). | — | — |
| AC-6 | Not executed (no Save). | — | — |
| AC-7 | Not executed (no post-Save read). | — | — |
| AC-8 | Not executed (no close or reopen). | — | — |
| AC-9 | Partial (documentation only). `evidence/EXP-042-R3/cleanup-inventory.md` lists both rows as NOT INSERTED. | cleanup inventory | No insertion occurred. |

### Evidence (cycle 2)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-042-R3/t2-01-preflight-no-runtime-no-designer-tab-before-open.png` (viewed) | Web Client with no tab strip entries, empty Form region, disabled toolbar, banner, DEM identity bar, no status bar. | Designer state (by absence only); the runtime's previous origin. |
| `evidence/EXP-042-R3/t2-02-select-form-fx-helloworld01-one-row-before-activate.png` (viewed) | Select Form: Filter `FX_HelloWorld01` selected (text highlighted), Filter By Name, both checkboxes unchecked, one row Caption `FX_HelloWorld01` / Name `FX_HelloWorld01`, Name cell highlighted, OK and Cancel. | The User-scope version (no scope column); the runtime content. |
| `evidence/EXP-042-R3/t2-03-runtime-after-one-refresh-query-settled-status-bar.png` (viewed) | Runtime tab `FX_HelloWorld01`; one row with blue star and `1`; two blank inputs (lower with red `*`); status bar `(Object 1 of 1)`; Refresh tooltip from hover. | Persisted-row count (the placeholder is the only row shown); which input is which field; the Save state beyond Save-disabled in the snapshot. |
| `evidence/EXP-042-R3/t2-04-edit-menu-click-timeout-banner-intercepts.png` (viewed) | Upper input focused with a blue border, both inputs blank, banner across the top, the Mongoose menu bar not visible, status bar `(Object 1 of 1)`. | Any Find Value in Collection result; the Edit menu's contents. |
| `evidence/EXP-042-R3/t2-01`…`t2-04` snapshot references in the browser tool output (`evidence/playwright/…`) | Tool-written snapshots after Open, after Refresh and after the Edit timeout. | Not worker-authored. |

### Final browser state (cycle 2)

- Mongoose tab selected (the only browser tab). No Designer tab.
- Web Client tab strip: one tab, `FX_HelloWorld01`, selected. Runtime open once in this task.
- The runtime is a **blank add-mode record**: one new-row placeholder (star, number `1`), both inputs empty, **the upper input focused** (clicked, not typed), Save disabled, New and Delete enabled. Status bar `(Object 1 of 1)`. **Not saved, not discarded, not closed.**
- No Select Form dialog open. No in-page dialog. No browser-native dialog. No unsaved-change prompt.
- The portal warning banner is still displayed above the Mongoose frame.

### Operator decisions needed before the next EXP-042-R3 task

1. **The portal banner.** `The DistributionIFSContactUs group does not have any active users assigned to the group …` covers the Mongoose menu bar. Options: (a) authorize a dismissal of this portal notification (its own Close control) so the Edit menu can be reached, then re-run the mapping; (b) name another supported route to Find Value in Collection. The worker chose neither.
2. **The open runtime tab.** It is a blank add-mode record, left untouched. Close it, or keep it for the next run, by operator action. A close in a later run must be a separately authorized Form-tab close.
3. **Whether the mutation gate should be re-run.** The AC-2 query is valid for this session only. A later run must repeat the query and the mapping in its own session before any entry.

## Sources read before the first browser action

- `AGENTS.md` (repository root): read in full.
- `docs/mongoose/transcripts/hello-world-pt1.md`, lines 270–277 (the 7:40–8:01 test-data passage): "open the form in runtime mode … the form should open in add mode since we don't have any data … enter in some test data … use the new button on the toolbar to add each record once … hit the save icon." No values or record count are named. Trust: **unverified** (speech-to-text transcript).
- `experiments/EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md`: **not re-read in this task.** The IDO and table identities below are taken from the EXP-041-R3 status line and its T1 AC-1 table, which cite EXP-040 T12. Limitation disclosed; no claim of an independent EXP-040 re-read.
- `experiments/EXP-042-R2-…md` (outcome block, AC-2 gate, Final browser state, Open actions) and `experiments/EXP-042-hello-world-part-1-two-test-records-through-the-we.md` (outcome block, T2 and T4 sections): read.
- `experiments/EXP-041-R3-…md`: lines 1–447 (outcome, T1 AC-1 table, T1–T3), lines 448–607 (T4 and the T5 Designer component table, lines 569–579), lines 730–809 (T8 closing note, T9 and T10 runtime sections). T6–T8 detail (lines 607–730) was not read in this task.

## Authorized target (documented before any mutation; AC-1)

| Item | Identity | Source |
|---|---|---|
| Form (runtime only) | `FX_HelloWorld01`, User scope (`ScopeName` `anton.ramos@3mworks.com.ph`), Primary Collection `FX_HelloWorld01`, Version `User version for user anton.ramos@3mworks.com.ph` | EXP-041-R3 T5 (`t5-03`): Designer read after Finish; Save clean. Not re-read here (Designer not opened). |
| IDO | `FX_HelloWorld01`, project `FX_HelloWorldProject01`. Revision 2. Label String ID and Caption `oFX_HelloWorld01`. | EXP-041-R3 T1 AC-1 table (`t1-01`, observed on the IDOs surface there). Not re-read here. |
| SQL table | `dbo.FX_HelloWorld01`. `FX_Code` String 30 (nvarchar), key sequence 1, Required. `FX_Label` String 100 (nvarchar), Required unchecked. | EXP-041-R3 T1 AC-1 table; EXP-040 T12 as cited there. Read-only reference; not re-read here. |
| Designer component bindings | `FX_CodeEdit` (Edit, `object.FX_Code`, Pane 1, tab 6); `FX_LabelEdit` (Edit, `object.FX_Label`, Pane 1, tab 4); `FX_CodeGridCol` → `object.FX_Code`; `FX_LabelGridCol` → `object.FX_Label`; Static labels `FX_CodeStatic`, `FX_LabelStatic` with no data source. | EXP-041-R3 T5 table (lines 569–579). The runtime mapping to these Edits is **not** observed in any record. |
| Authorized records | (1) `FX_Code` = `FX001`, `FX_Label` = `Factory test one`; (2) `FX_Code` = `FX002`, `FX_Label` = `Factory test two` | Brief. |
| Authorized mutation | Exactly two inserts into `dbo.FX_HelloWorld01` through the runtime Form, one explicit Save. **Not performed.** | Brief. |

## Preflight (AC-1)

| Item | Observed (T1) | Evidence |
|---|---|---|
| Authenticated configuration | Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Portal tab `Mongoose` selected. No sign-in or configuration screen. | `t1-01`; `t1-02` |
| Browser tabs | One browser tab, `Mongoose` (URL includes `favoriteContext=FX_HelloWorld01`). The portal bar also shows `System Administrator` (portal tab, not part of this task). | `browser_tabs` list |
| Designer tab | **Not open.** No Web Designer tab in the browser tab list. | `browser_tabs` list |
| FX_HelloWorld01 runtime tab | **OPEN.** The Web Client tab strip contains one tab, `FX_HelloWorld01` (selected). The earlier `IDO Projects`, `IDOs` and `Sql Tables` tabs seen in EXP-042-R2 and EXP-042 are not present. | `t1-02` snapshot (tablist with one tab); `t1-01` |
| Runtime content | One starred new-row placeholder (row `1`, blank cells). Two unnamed inputs (upper preceded by `:`; lower preceded by a red `*`). Save disabled. New and Delete enabled. No dialog. | `t1-01`; `t1-02` |
| Status bar | **Displayed.** Bottom-left text `(Object 1 of 1)`; bottom-right `en-US` and `powered by infor`. This is the first observation in these records of a status bar in the runtime. | `t1-01` (viewed); `t1-02` (textbox `(Object 1 of 1)` in the form footer region) |
| Origin of the open runtime tab | **Not established.** The operator's refresh, a restored tab, or a prior run's open (EXP-041-R3 T9, EXP-042 T2, EXP-042-R2 T1 each left a blank add-mode record open) are all consistent with the screen. This worker cannot determine which. | — |

**Gate result: AC-1 NOT PASSED (stop).** The brief requires that no `FX_HelloWorld01` runtime tab be open before this run opens the Form. The tab is open. The worker did not discard it, did not close it, did not open a duplicate, and did not query it.

## Status-bar observation (read-only; not a gate decision)

- Exact text seen in the open runtime tab: `(Object 1 of 1)`.
- Seen in the screenshot and in the accessibility snapshot. No query was run; the grid shows one starred new-row placeholder.
- **Ambiguous for AC-2.** Under the brief, a count that "could count the placeholder" closes the gate. A `1` alongside one placeholder row cannot be read as a persisted-row count. Whether this text counts the placeholder is **unresolved**. A later run must check it after a query on a known-empty collection, or with a known row.
- The status bar was **not** displayed in EXP-042-R2 or EXP-042 at their runtime opens. Its present display is consistent with the operator's refresh applying the Display Status Bar preference. This is one observation, not proof of cause.

## Stop decision

- The T1 instruction says: "If a FX_HelloWorld01 runtime tab is open, stop without discarding it or opening a duplicate runtime Form."
- The stop was taken at preflight, before any Select Form use, Open, or query.
- AC-2 (zero-row gate) was **not run**, because the stop precedes it. The status-bar text above is not used for any gate decision.
- AC-3 (field mapping) was **not run**, because no typing or Find dialog occurred.

## Acceptance matrix (T1)

| AC | Status | Basis (evidence) | Limit |
|---|---|---|---|
| AC-1 | **NOT PASSED (stop).** Identity, DEM configuration, Designer absence, and the EXP-041-R3 Form record are observed. The runtime-tab-absence precondition **fails**. Status bar displayed and captured on the open runtime tab. | `t1-01` (viewed), `t1-02`, `browser_tabs` list | The runtime tab's origin is not established. Designer state is by absence only. The EXP-041-R3 Form read is cited, not re-observed. No preference was changed. |
| AC-2 | **Not evaluated.** No supported complete query was run. | — | The stop precedes the query. `(Object 1 of 1)` is ambiguous (may count the placeholder). Zero matches for FX001 and FX002 are **not** recorded. |
| AC-3 | **Not evaluated.** No Find Value in Collection dialog opened; no runtime input clicked. | — | — |
| AC-4 | Not executed (no entry). | — | — |
| AC-5 | Not executed (no New). | — | — |
| AC-6 | Not executed (no Save). | — | — |
| AC-7 | Not executed (no post-Save read). | — | — |
| AC-8 | Not executed (no close or reopen). | — | — |
| AC-9 | **Partial (documentation only).** `evidence/EXP-042-R3/cleanup-inventory.md` lists the two planned rows as NOT INSERTED. | `evidence/EXP-042-R3/cleanup-inventory.md` | No insertion occurred. The "exactly two inserted rows" requirement is not met and not claimed. |

## Operation counts (T1)

| Operation | Count |
|---|---|
| Browser tab list | 1 |
| Fresh untargeted snapshots | 1 (the initial preflight snapshot; read-only) |
| Snapshot saved to file | 1 (`t1-02`; read-only) |
| Screenshots (worker-authored) | 1 (`t1-01`; read-only) |
| Clicks, key presses, typing (any target) | **0** |
| Select Form opens / OK / Cancel | **0 / 0 / 0** |
| Open (toolbar) | 0 |
| Runtime Form openings by EXP-042-R3 | **0** |
| Runtime queries (FiP, F4, Refresh) | **0** |
| Find Value in Collection dialogs | **0** |
| Typing into runtime fields | **0** |
| New / Save / Delete | **0 / 0 / 0** |
| Records inserted / edited / deleted | **0 / 0 / 0** |
| Form-tab closes / reopens | **0 / 0** |
| Designer launches | **0** |
| Preference changes (User Preferences opened) | **0** |
| Browser refresh / reload / navigate | **0** |
| Timeouts | 0 |
| Recovery snapshots (after `Ref … not found`) | 0 |
| JavaScript / evaluate / run-code | **0** |
| Authentication / session replacement / logout | **0** |

## Errors and recovery accounting

1. No `Ref … not found`, no timeout, no validation, duplicate-key, discard or save-changes prompt, no browser-native dialog.
2. No Mongoose error observed. The portal banner `The DistributionIFSContactUs group does not have any active users assigned…` is a portal notification (not a dialog, not part of this task). It was not acknowledged or dismissed.
3. The stop is a gate decision under the brief, not an error.

## Repository confinement audit (worker's self-audit; the harness computes confinement)

Worker-written files in T1:
- `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md` (this record; created).
- `evidence/EXP-042-R3/cleanup-inventory.md` (created).
- `evidence/EXP-042-R3/t1-01-preflight-fx-helloworld01-runtime-tab-open-stop.png` (screenshot, written by the browser tool at the worker's request).
- `evidence/EXP-042-R3/t1-02-preflight-runtime-accessibility-snapshot.md` (snapshot file, written by the browser tool at the worker's request).

No other repository file was written. No `tools/`, AGENTS.md, memory, recipe, or other experiment record was touched.

## Final browser state (last observed)

- Mongoose tab selected (the only browser tab). No Designer tab.
- Web Client tab strip: one tab, `FX_HelloWorld01`, selected.
- The `FX_HelloWorld01` runtime tab is **open and untouched**: one starred new-row placeholder (`1`), two empty unnamed inputs, Save disabled, New and Delete enabled. Status bar `(Object 1 of 1)` displayed. **Blank, untouched, add-mode record. Not saved, not discarded, not closed.**
- No in-page dialog open. No browser-native dialog or unsaved-change prompt observed.
- User Preferences: not opened. Display Status Bar remains as left by EXP-042-R2 (checked).

## Operator actions needed before the next EXP-042-R3 task

1. **Decide on the open runtime tab.** The brief forbids discarding it or opening a duplicate. Options for the operator: (a) close the blank `FX_HelloWorld01` runtime tab through its ordinary Form-tab close control (fresh label check on any prompt), then run a new T1 that opens the Form once; or (b) direct a different route. The worker did not choose.
2. **Confirm the status-bar count semantics** (open question below) before relying on `(Object 1 of 1)`. A new run should read the status bar after a query on this collection and compare it with the placeholder-only state.

## Open questions and blockers

1. **Blocker (AC-1):** a `FX_HelloWorld01` runtime tab is open at preflight. The brief requires it to be absent before this run opens the Form. Operator decision needed (see above).
2. **Status-bar semantics (AC-2):** `(Object 1 of 1)` with one placeholder row. Whether this counts the placeholder, persisted rows, or both is **unresolved**. It has not been tested by a query in this run.
3. **Runtime mapping (AC-3):** not run. The Designer bindings in EXP-041-R3 T5 are a Designer read; no runtime observation links the two unnamed inputs to `FX_CodeEdit` or `FX_LabelEdit`. The mapping still needs the Find Value in Collection route in a later run.
4. **Origin of the open runtime tab:** not established. The operator's refresh and the earlier runs are all consistent with it.

## Knowledge state

| Finding | State |
|---|---|
| Identity bar shows DEM configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` with the signed-in Site Developer, no sign-in screen | observed (`t1-01`, `t1-02`) |
| The browser has one tab (`Mongoose`); no Web Designer tab is open | observed (`browser_tabs` list) |
| A `FX_HelloWorld01` runtime tab is open at preflight, with one starred placeholder and two unnamed inputs | observed (`t1-01`, `t1-02`) |
| A status bar is displayed in the open runtime tab, reading `(Object 1 of 1)` | observed (`t1-01`, `t1-02`) |
| `(Object 1 of 1)` counts persisted rows | **unresolved** (ambiguous; the placeholder may be counted; not tested by a query) |
| The status bar appeared after the operator's refresh | **candidate** (consistent with the refresh; not tested by a before/after pair in this run) |
| The open runtime tab's origin (refresh, restored tab, or a prior open) | **unresolved** |
| Runtime input → `FX_Code` / `FX_Label` mapping | **unresolved** (not run) |
| Persisted rows in `dbo.FX_HelloWorld01` before entry | **unresolved** (no complete read-only query run in this run) |
