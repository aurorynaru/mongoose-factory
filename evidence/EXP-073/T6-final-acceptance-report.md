# EXP-073 — T6 final acceptance report (documentation only)

Run `R-20261013-171432-pH6P`, cycle 5, task T6. Date 2026-10-13. Worker session `da63ecb3-7001-414c-83da-605bbb1d52f6`. Task message `79ff8df7-a915-4904-a9c6-e9a748ea6633`.
Experiment: EXP-073 — Hello World Part 4 Section 12: enter two FX_Orders records at runtime and observe AUTONUMBER() order numbers and the domain lists. Target: runtime Form `FX_Orders` (User scope), table `dbo.FX_Orders`, IDO `FX_Orders`.

## 0. Declaration for T6

- **Zero browser calls.** No `browser_*` tool was invoked in T6. No tab list or select, no snapshot, no click, no key, no find, no screenshot, no wait.
- **Zero Mongoose changes.** No Form, IDO, property class, SQL table, string or Designer action; no close, reopen, save, unload, FormSync, deployment, check-in or check-out.
- Tools used in T6: `Glob`, `Read` and `Grep` (read-only, on the repository and on files already written by the harness and by earlier tasks); `Write` (this report, one new file); `Edit` (the experiment record, one file).
- Observed-only classification is preserved throughout. Nothing here is replay verification, a database read, a durability test, a cross-session test or a parallel-session uniqueness test.

## 1. Recommendation

**ACCEPTED AS OBSERVED.** All nine acceptance checks (AC-1 to AC-9) are supported at the same-session, UI level. Several supports rest on stated inferences or screenshot limits, listed per check in section 3. No check is missing its evidence, so no precise missing item is identified.

## 2. Sources reviewed in T6 (read-only)

- `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md` (status block, T1 to T5 sections, knowledge-state tables, T1-era blockers section).
- `evidence/EXP-073/T1-accessibility-readbacks.md`, `T2-row1-accessibility-readbacks.md`, `T3-row2-accessibility-readbacks.md`, `T4-save-accessibility-readbacks.md`, `T5-recovery-accessibility-readbacks.md`.
- The five controller-generated audits `evidence/EXP-073/harness-audit-T1.md` to `harness-audit-T5.md` (tool-call tables, written by the harness, not by the worker). Used for reconciliation in section 6.
- The file listing of `evidence/EXP-073/` (Glob), to confirm each cited file exists.
- Earlier-task inputs read during T1 and cited in the record: AGENTS.md; transcript `docs/mongoose/transcripts/hello-world-pt4.md` lines 569–575 (Section 12, 16:34–17:04); the EXP-072, EXP-071-R2, EXP-046 and EXP-051 records (read in T1, per harness audit rows 2 and 6–11).

## 3. Acceptance matrix (AC-1 to AC-9)

| ID | Status (observed, UI level, same session) | Principal evidence (repo-relative paths) | Limitations kept in this status |
| --- | --- | --- | --- |
| AC-1 | **Supported** | `evidence/EXP-073/preflight-fx-orders-runtime-add-mode.png`; `evidence/EXP-073/T1-accessibility-readbacks.md` (R1) | Add mode is **inferred** (starred placeholder, pre-filled `1`), not a labelled mode. Form definition cited from EXP-072, not re-read. The `1` is a displayed value. |
| AC-2 | **Supported** | `evidence/EXP-073/gate-after-one-f4-empty-criteria.png`; `T1-accessibility-readbacks.md` (R2, R3) | The blue star is visible in the screenshot only (not in the accessibility tree). The F4 query's execution is **inferred** from the Filter-in-Place exit and the settled placeholder. Not a database read. The `Order Number` caption prefix is the expected focus prefix. |
| AC-3 | **Supported** | `evidence/EXP-073/list-fx-customer-id-open.png`; `evidence/EXP-073/list-fx-item-open.png`; `T1-accessibility-readbacks.md` (R4 to R7) | Options are as rendered (two and three rows). Closure by the Open toggle and nothing selected is taken from the snapshots R5 and R7; the screenshots show only the open state. |
| AC-4 | **Supported** | `evidence/EXP-073/row1-fx001-dumbbell-count2-settled.png`; `T2-row1-accessibility-readbacks.md` (S8) | The screenshot clips the grid data cells; the grid values `1`/`FX001`/`dumbbell`/`2` are supported by the accessibility readback. The Order Number `1` was displayed, not typed. |
| AC-5 | **Supported** | `evidence/EXP-073/row2-after-new-before-selection.png`; `evidence/EXP-073/two-rows-before-save-settled.png`; `T3-row2-accessibility-readbacks.md` (T3-S2, T3-S8) | Displayed Order Number `2` (not typed), distinct from `1`. Count default `1` observed, not edited. The grid cells are clipped in the images and supported by T3-S8. Stars are screenshot-only. |
| AC-6 | **Supported**, with the native response and the read-only state **inferred** | `evidence/EXP-073/save-immediate-after-one-save.png`; `evidence/EXP-073/save-settled-both-rows.png`; `evidence/EXP-073/save-settled-row1-selected-inspection.png`; `T4-save-accessibility-readbacks.md` (T4-S2 to T4-S5) | One toolbar Save (one click; no retry). **No native success message was displayed**; success is inferred from the Save button becoming disabled and the clean grid. Post-Save values `1`/`FX001`/`dumbbell`/`2` and `2`/`FX002`/`eggs`/`1`. Stars gone (screenshot only). Order Number field shaded grey and the header asterisk removed; **read-only is inferred from shading, not from an accessibility attribute**. Status `Count (Object 2 of 2)`, and `(Object 1 of 2)` when row 1 is selected. No database read. |
| AC-7 | **Supported**, with the close evidenced by readback rather than a screenshot | `evidence/EXP-073/reopened-form-before-query-addmode.png` (reopen); `T5-recovery-accessibility-readbacks.md` (T5-S1 close, T5-S2 reopen, T5-S3 state) | One Form-tab close with no prompt (the close is in the accessibility readback and the tool snapshot `evidence/playwright/page-2026-10-13T09-26-37-092Z.yml`). **No screenshot was captured between the close and the reopen.** Reopen through Form > Open > Select Form (OK once). Clean state judged from Save disabled and no dialog. |
| AC-8 | **Supported**, with the star and the clipped cells stated | `evidence/EXP-073/recovery-query-after-reopen-two-rows.png`; `T5-recovery-accessibility-readbacks.md` (T5-S6, T5-S8) | Exactly two data rows: `1`/`FX001`/`dumbbell`/`2` and `2`/`FX002`/`eggs`/`1` (accessibility). The screenshot clips the grid data cells, so row 2 is **not visible in the grid data of the image**; row 1 values appear only in the input fields. Stars absent per the screenshot only. Status `Customer ID (Object 1 of 2)` (focus prefix; row 1 current). Save disabled; no unsaved-change indication. The `FX001` text is highlighted from focus, not typed. |
| AC-9 | **Supported** by this report and the record | This file (sections 4 to 9); `experiments/EXP-073-…md` (T6 section) | Covers AC-1 to AC-8, the complete audit with reconciliation, the AUTONUMBER() observations, the inventory T1 to T6 and the final state. Observed only. |

## 4. Observations behind each check (what was seen)

- **Identity and mode (AC-1).** Tab `FX_Orders` selected; identity bar shows the DEM configuration. One starred add-mode row; Order Number textbox `1` (focused, value selected); Count `1`; Customer ID and Item blank comboboxes with Open buttons; Save disabled; status `Order Number (Object 1 of 1)`.
- **Gate (AC-2).** One FiP (criteria blank: Order Number, Customer ID, Item and Count empty), one F4, two-second settle. Result: one starred row (screenshot); Customer ID and Item blank; status `Order Number (Object 1 of 1)`; FiP off; Save disabled.
- **Lists (AC-3).** FX_CustomerID: `FX001` / Factory test one; `FX002` / Factory test two. FX_Item: `dumbbell` / 45 pound iron; `eggs` / cage free; `guitar` / natural acoustic. Each closed by its Open toggle with no selection; no Escape.
- **Row one (AC-4).** Displayed Order Number `1` (not typed). `FX001` and `dumbbell` clicked from the native lists. Count `1` replaced by `2` with one fill; one Tab to settle. Row: `1`/`FX001`/`dumbbell`/`2`.
- **Row two (AC-5).** One toolbar New. New row displayed Order Number `2` (not typed), distinct from `1`; status `Order Number (Object 2 of 2)`. `FX002` and `eggs` clicked from the native lists; Count left at its default `1`; one Tab. Two data rows, no third.
- **Save (AC-6).** One toolbar Save, single click, no retry. No native message observed. Save disabled afterwards. Stars gone (screenshot). Order Number header asterisk removed. Field shaded grey. Values unchanged. Status `Count (Object 2 of 2)`.
- **Close and reopen (AC-7).** One Form-tab close (`Close Panel FX_Orders`): no prompt; tab removed; remaining tabs FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables. One reopen via Form > Open > Select Form (OK once): FX_Orders in add mode with one placeholder showing Order Number `3`; saved rows not loaded before the query.
- **Recovery (AC-8).** One FiP (blank) and one F4: Filter in Place exited; two data rows and no placeholder; Save disabled; status `Customer ID (Object 1 of 2)`. Values match the pre-Save rows.

## 5. AUTONUMBER() observations: displayed versus recovered (classification: unresolved mechanism)

| Row | Displayed at entry (not typed) | Displayed after Save (client grid) | Recovered after close, reopen and one query (same session) | Typed by worker |
| --- | --- | --- | --- | --- |
| 1 | `1` (T2, on the add-mode row; also `1` on the empty-table placeholder in T1 before any entry) | `1` (T4) | `1` (T5) | No |
| 2 | `2` (T3, on the row created by one toolbar New) | `2` (T4) | `2` (T5) | No |
| Reopened placeholder (not saved; removed by the query) | `3` (T5, before the query) | n/a | not a saved row; no third row after the query | No |

- Recovered numbers equal the numbers displayed before Save, in this session.
- The placeholder changed from `1` (empty table, T1) to `3` (reopened after two saved rows, T5). This is consistent with a next-value calculation, but **this is not established**: the brief does not allow a claim about the AUTONUMBER() mechanism or source.
- **Unresolved:** whether `1` and `2` are database-generated AUTONUMBER() values or client-side display values. The observations cannot separate them: the recovered values were read from the same Web Client session that displayed them. No independent database read was made.
- No uniqueness across sessions or parallel sessions is claimed.

## 6. Cumulative action audit T1–T5, reconciled to the harness audits

### 6.1 Per-task increments (worker call record), checked against `harness-audit-T1.md` to `T5.md`

| Operation | T1 | T2 | T3 | T4 | T5 | Cumulative | Expected (brief) | Match |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Runtime open (Form menu > Open > row > OK) | 1 | 0 | 0 | 0 | 0 | **1** | 1 | yes |
| Runtime close (Form-tab control) | 0 | 0 | 0 | 0 | 1 | **1** | 1 | yes |
| Runtime reopen (Form > Open > row > OK) | 0 | 0 | 0 | 0 | 1 | **1** | 1 | yes |
| Gate query (FiP blank + F4) | 1 | 0 | 0 | 0 | 0 | **1** | 1 | yes |
| Recovery query (FiP blank + F4) | 0 | 0 | 0 | 0 | 1 | **1** | 1 | yes |
| Read-only list inspections (open + Open-toggle close) | 2 | 0 | 0 | 0 | 0 | **2** | 2 | yes |
| List opens used to select a value | 0 | 2 | 2 | 0 | 0 | **4** | 4 | yes |
| Native option selections | 0 | 2 | 2 | 0 | 0 | **4** | 4 | yes |
| Rows entered | 0 | 1 | 1 | 0 | 0 | **2** | 2 | yes |
| Toolbar New | 0 | 0 | 1 | 0 | 0 | **1** | 1 | yes |
| Toolbar Save | 0 | 0 | 0 | 1 | 0 | **1** | 1 | yes |
| Field fills (Count `2`) | 0 | 1 | 0 | 0 | 0 | **1** | 1 | yes |
| FX_OrderNumber edits / typing | 0 | 0 | 0 | 0 | 0 | **0** | 0 | yes |
| Combo-box typing | 0 | 0 | 0 | 0 | 0 | **0** | 0 | yes |
| Clicks (successful / failed) | 9 / 0 | 4 / 0 | 5 / 0 | 2 / 0 | 6 / 0 | **26 / 0** | 26 | yes |
| F4 presses | 1 | 0 | 0 | 0 | 1 | **2** | 2 | yes |
| Tab presses | 0 | 1 | 1 | 0 | 0 | **2** | 2 | yes |
| Waits (2 s, 3 s, 3 s) | 1 | 0 | 0 | 1 | 1 | **3** | 3 | yes |
| `browser_tabs` list | 1 | 1 | 1 | 1 | 1 | **5** | 5 | yes |
| `browser_tabs` select | 1 | 1 | 1 | 1 | 1 | **5** | 5 | yes |
| Untargeted snapshots | 2 | 3 | 2 | 1 | 1 | **9** | 9 | yes |
| Targeted snapshots | 1 | 0 | 0 | 0 | 1 | **2** | 2 | yes |
| `browser_find` | 4 | 0 | 0 | 1 | 3 | **8** | 8 | yes |
| Screenshots | 4 | 1 | 2 | 3 | 2 | **12** | 12 | yes |
| Select Form OK confirmations | 1 | 0 | 0 | 0 | 1 | **2** | 2 | yes |
| Designer interactions | 0 | 0 | 0 | 0 | 0 | **0** | 0 | yes (see 6.3, D3) |
| Metadata changes | 0 | 0 | 0 | 0 | 0 | **0** | 0 | yes |
| Unloads / FormSync / deployment | 0 | 0 | 0 | 0 | 0 | **0** | 0 | yes |
| Check-in / check-out | 0 | 0 | 0 | 0 | 0 | **0** | 0 | yes |
| Re-logins / session expiries | 0 | 0 | 0 | 0 | 0 | **0 / 0** | 0 / 0 | yes |
| Refresh / restart / direct URL navigation | 0 | 0 | 0 | 0 | 0 | **0** | 0 | yes |
| Native browser dialogs / portal banner dismissals | 0 | 0 | 0 | 0 | 0 | **0 / 0** | 0 | yes |
| Ref-not-found / timeouts | 0 | 0 | 0 | 0 | 0 | **0 / 0** | 0 | yes |
| JavaScript, evaluate, run-code, console or network inspection, direct SQL | 0 | 0 | 0 | 0 | 0 | **0** | 0 | yes |

### 6.2 How the "one" operations decompose

- A **runtime open** is one operation made of four clicks (Form menu, Open item, the `FX_Orders` row, OK) and one dialog. The four clicks are counted in the click total. The same applies to the close (one click) and the reopen (four clicks).
- A **list inspection** is one open plus one Open-toggle close (two clicks). T1 contains two of these. In T2 and T3 each list was opened and then closed by the selection itself, so those openings are counted as "list opens used to select a value" and not as read-only inspections.
- The **gate query** is one FiP click plus one F4. The **recovery query** is the same pattern after the reopen.

### 6.3 Discrepancies and how each was handled (not silently adjusted)

- **D1. Controller summary line in `harness-audit-T1.md`.** The header reads "11 actions, 13 reads". Its row table lists 24 browser calls in T1 (tabs 2, snapshots 3, clicks 9, finds 4, key 1, wait 1, screenshots 4) and 27 non-browser rows. The header's categories cannot be reproduced from the rows, so the row table was used. The worker's count (24) matches the rows. Nothing was adjusted.
- **D2. Non-browser read error in T1.** Audit row 3 is a `Read` of the experiment record path before the record existed. Error: "File does not exist". No browser effect. The record was created afterwards with `Write`.
- **D3. T2 read-only Designer snapshot (disclosed in the T2 record).** Audit row 2 is a `browser_snapshot` taken while tab 0 (Designer) was the current tab. It was read-only and no Designer element was interacted with. It is counted as one untargeted snapshot (T2 total 3, which matches the audit). The Designer-interaction count of 0 stands. Per the T6 instruction, this is reviewed and **not treated as a violation**.
- **D4. T2 `browser_type` flagged as a prohibited-tool hit.** The controller's T2 header reports "prohibited-tool hits=1" with `{"browser_type":1}`. That single fill is the Count `2` replacement authorised by the T2 bounded instruction. Per the T6 instruction, it is **not treated as a violation**. The brief's fill count of 1 matches.
- **D5. Snapshot target arguments are not captured in the audit.** The audit's key-argument column reads "(no key/element/filename argument)" for every snapshot, including the two targeted ones (T1 row 19, the Select Form dialog target `f1e339`; T5 row 10, target `f1e457`). The targeted classification therefore rests on the worker's own call parameters, not on the audit. The count of 2 targeted snapshots is kept.
- **D6. Auto-generated snapshots after actions.** Each click, key and find returns a tool-generated snapshot file. These are not explicit `browser_snapshot` calls, are not in the audit's snapshot rows, and were not counted as worker snapshots, consistently with the earlier task records.
- **D7. Console counts.** Reported by the tool, not inspected (brief). They rose from 7 errors and 3 warnings to 20 errors and 13 warnings across the run. Recorded as a tool-reported figure only.
- **D8. Stale record text.** The T1-era "next permitted action" and four knowledge-state rows still said "not yet tested". These were corrected in T6 with Edit (see section 9). Counts were not changed.
- **D9. Close evidence.** AC-7 asks for a reopen screenshot, which exists. No screenshot was taken between the close and the reopen; the close is evidenced by the T5-S1 readback and the tool snapshot.

No count in the record differs from the harness audits or from the brief's expected figures.

## 7. Worker-written-file inventory (T1 to T6)

### 7.1 Worker-authored files

| Task | File | Action |
| --- | --- | --- |
| T1 | `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md` | created (Write) and edited once (Edit; paraphrase corrected to the transcript wording) |
| T1 | `evidence/EXP-073/preflight-fx-orders-runtime-add-mode.png` | created |
| T1 | `evidence/EXP-073/gate-after-one-f4-empty-criteria.png` | created |
| T1 | `evidence/EXP-073/list-fx-customer-id-open.png` | created |
| T1 | `evidence/EXP-073/list-fx-item-open.png` | created |
| T1 | `evidence/EXP-073/T1-accessibility-readbacks.md` | created |
| T2 | `evidence/EXP-073/row1-fx001-dumbbell-count2-settled.png` | created |
| T2 | `evidence/EXP-073/T2-row1-accessibility-readbacks.md` | created |
| T2 | `experiments/EXP-073-…md` | edited three times (Edit) |
| T3 | `evidence/EXP-073/row2-after-new-before-selection.png` | created |
| T3 | `evidence/EXP-073/two-rows-before-save-settled.png` | created |
| T3 | `evidence/EXP-073/T3-row2-accessibility-readbacks.md` | created |
| T3 | `experiments/EXP-073-…md` | edited twice (Edit) |
| T4 | `evidence/EXP-073/save-immediate-after-one-save.png` | created |
| T4 | `evidence/EXP-073/save-settled-both-rows.png` | created |
| T4 | `evidence/EXP-073/save-settled-row1-selected-inspection.png` | created |
| T4 | `evidence/EXP-073/T4-save-accessibility-readbacks.md` | created |
| T4 | `experiments/EXP-073-…md` | edited twice (Edit) |
| T5 | `evidence/EXP-073/reopened-form-before-query-addmode.png` | created |
| T5 | `evidence/EXP-073/recovery-query-after-reopen-two-rows.png` | created |
| T5 | `evidence/EXP-073/T5-recovery-accessibility-readbacks.md` | created |
| T5 | `experiments/EXP-073-…md` | edited twice (Edit) |
| T6 | `evidence/EXP-073/T6-final-acceptance-report.md` | created (this file) |
| T6 | `experiments/EXP-073-…md` | edited (status line; four stale knowledge rows; the T1-era blockers heading and next-action bullet; a T6 section) |

Totals: 12 screenshots (PNG) and 6 Markdown files written by the worker (five T1 to T5 readbacks and this report). The experiment record was created once (Write) in T1.

Edit count for the experiment record (for reconciliation): T1 Edit 1; T2 Edit 3; T3 Edit 2; T4 Edit 2; T5 Edit 2 (10 Edits through T5). T6 Edit 7: status line (1); four stale knowledge rows in three calls (3); T1-era blockers heading (1); T1-era next-action bullet (1); T6 section appended (1). Total record Edits T1 to T6: 17.

### 7.2 Harness-generated files in `evidence/EXP-073/` (not worker-authored)

- `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md`, `harness-audit-T5.md` (controller tool-call audits).

### 7.3 Tool-generated files outside `evidence/EXP-073/` (not worker-authored)

- `evidence/playwright/` snapshot YAML and console logs written by the browser MCP tool for each call (for example `page-2026-10-13T09-14-52-837Z.yml` to `page-2026-10-13T09-27-13-617Z.yml`). Not enumerated. They are written by the tool to that location and are outside the EXP-073 evidence directory. Operator git review is authoritative for whether those files are in the repository.

### 7.4 Confinement statement

Repository confinement is supported by the worker-written-file inventory (7.1) and the harness-generated inventories (7.2 and the controller audits). The worker wrote only under `experiments/EXP-073-…md` and `evidence/EXP-073/`. The only write outside those paths is the browser tool's `evidence/playwright/` output (7.3), which the tool produced and the worker did not author. No shell or git access was requested or used. Operator git review at outcome is authoritative.

## 8. Final browser and Form state (inherited from T5; unchanged by T6)

- Web Client (tab 1) selected. Tab list (last taken in T5): tab 0 Designer (URL `MGForm=FX_Orders`) left untouched; tab 1 Mongoose.
- Runtime Form `FX_Orders` open and selected. Clean: Save disabled; no unsaved-change indication. FiP off.
- Grid: two data rows, both unstarred in the screenshot: `1`/`FX001`/`dumbbell`/`2` and `2`/`FX002`/`eggs`/`1`. No placeholder and no third row (the placeholder seen before the T5 query was removed by the query).
- Current row: row 1. Order Number `1` (greyed). Customer ID combobox focused with `FX001` highlighted (from focus; nothing typed). Item `dumbbell`. Count `2`.
- Status bar: `Customer ID (Object 1 of 2)`.
- No dialog, no native prompt, no portal banner, no session expiry.
- Other Form tabs unchanged: FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables.

## 9. Record hygiene performed in T6

- The status block was updated to after-T6 (accepted as observed).
- Four T2-era knowledge rows that still said "not yet tested" were corrected to the observed displayed and recovered states, with database persistence stated as not read.
- The T1-era "Blockers, open questions and next permitted action" heading and next-action bullet were marked superseded. The bullet was not deleted, so the T1 text remains visible as history.
- A T6 section was appended to the record.
- No count, observation or evidence reference was changed.

## 10. What was not performed and is not claimed

- No independent database read (the recovered values come from the same Web Client session that displayed them).
- No cross-session durability test, no restart or refresh of the browser, and no re-login.
- No parallel-session uniqueness test. No claim that Order Numbers are unique across sessions.
- No replay of the experiment and no replay verification.
- No claim about the AUTONUMBER() default's mechanism or source. The displayed `1`, `2` and the reopened placeholder `3` are classified as displayed values with an unresolved source.
- No claim that a native success message exists. Save success is inferred from the disabled Save button and the clean grid.
- No claim that Order Number is read-only at the attribute level. It is inferred from the grey shading and the removed required asterisk.
- No claim about the star markers beyond the screenshots.

## 11. Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Runtime FX_Orders opens via Form > Open > Select Form in add mode with captions Order Number, Customer ID, Item, Count and status bar | observed (one run) |
| Empty-collection gate under the accepted count rule (one FiP blank + one F4: one starred blank row, `Order Number (Object 1 of 1)`) | observed (one run); query execution inferred |
| FX_CustomerID list: FX001 "Factory test one", FX002 "Factory test two"; FX_Item list: dumbbell "45 pound iron", eggs "cage free", guitar "natural acoustic" | observed (one run each) |
| Native-list selection and Open-toggle closure with no accidental commit | observed |
| Row one `1`/FX001/dumbbell/2 and row two `2`/FX002/eggs/1 are displayed and verified before Save | observed (one run); displayed only |
| One toolbar Save disables Save, removes row-header stars, and shows no native message | observed; success **inferred** from the disabled Save and clean grid |
| Order Number field shaded grey and required asterisk removed after Save | observed; read-only state **inferred**, not an accessibility property |
| Close (one Form-tab click, no prompt) and reopen (Form > Open > Select Form OK once) of FX_Orders | observed (one run each) |
| Recovery after reopen (one FiP blank + one F4) shows exactly two unstarred rows with values matching the pre-Save rows and status `Customer ID (Object 1 of 2)` | observed (one run); same-session UI; not a database read |
| Displayed and recovered Order Numbers `1` and `2` | observed; **mechanism and AUTONUMBER() source unresolved** |
| Reopened add-mode placeholder displayed `3`, not saved | observed; source **unresolved** |
| Database persistence, durability, cross-session persistence, uniqueness across sessions, replay | **not claimed** (not performed) |

## 12. Final classification

Observed only. Same session, UI level. Not replay-verified. Not a database durability check.
