# EXP-074 — T8 final acceptance report (documentation only)

**Experiment:** EXP-074 — Hello World Part 5 Prerequisite A: nullable `FX_Address` column on `dbo.FX_HelloWorld01`
**Run:** R-20261013-175801-w8FD · cycle 8 · task T8
**Task message:** `b3e01288-41d5-4f85-a0c8-332f6de7a559` · **Worker session:** `9f8c3e34-b35e-493e-b552-aec77a8844ab`
**Date:** 2026-10-13 · **Mode:** LEARNING MODE · **Editing scope:** User (Forms); the SQL column is tenant-wide schema.

**Scope of this task:** documentation only. Zero browser calls. Zero Mongoose changes. Sources: the EXP-074 record (T1–T7 sections, cumulative audits, knowledge state), the evidence images listed below, and the per-task audit tables. Nothing was re-observed in the browser in T8; statements about the UI rest on the earlier tasks' recorded readbacks.

---

## 1. Verdict and recommendation

**Recommendation: ACCEPTED AS OBSERVED (UI level; not replay-verified; no database durability claimed), conditional on operator review of the T6 Filter in Place deviation (section 9).**

- Every acceptance check AC-1 to AC-7 has decisive evidence at the UI level, with the limits stated in section 2.
- AC-8 (this report plus the record) is complete.
- The T6 deviation is **not** silently treated as satisfying the brief's "Filter in Place exactly once" instruction. It is flagged here for the operator. The criterion itself was entered once, committed once and queried with one F4; only the Filter in Place toggle was clicked twice.
- Worker recommendation only. Acceptance is the operator's decision.

---

## 2. Acceptance matrix (AC-1 to AC-8)

| AC | Status | Evidence (repo-relative) | What the evidence proves | Limitations |
| --- | --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; Sql Tables runtime Form in use; caution alert verbatim and OK only | **Supported** | Sources listed in the record ("Sources read", T1, and "Sources read" for hello-world-pt1 §6, hello-world-pt5 §1–2, EXP-059, EXP-040, EXP-042-R3). Identity: `evidence/EXP-074/t1-01-sqltables-tab-identity-clean-start.png`, `t2-01-…`, `t5-01-…`, `t6-03-…`, `t7-04-…`. Caution alert: `evidence/EXP-074/t5-03-reopen-caution-alert-before-ok.png`; dismissal recorded in `t5-04-reopened-sqltables-clean-after-ok.png`. | Session usable throughout; no expiry, no sign-in page, no re-login. The pre-existing Sql Tables tab was used in T1 (clean), so no caution alert appeared in T1; the alert was captured on the T5 reopen, where Select Form was used. Identity is shown by the identity bar, not by a separate identity capture per task. | The T1 alert was not shown (no Select Form in T1). The alert text matches EXP-059 and was captured once in this experiment. |
| **AC-2** One visible-criterion query (pre-F4 criterion captured) returns exactly one row; complete baseline recorded; FX_Address absent (case-insensitive) | **Supported** | Pre-F4 criterion: `evidence/EXP-074/t1-02-pre-f4-table-name-criterion-visible.png`. Result: `t1-03-post-f4-one-dbo-fx-helloworld01-row.png` (status `Table Name (SQL Tables 1 of 1)`). Baseline columns: `t1-04` to `t1-08`. | One FX_HelloWorld01 / dbo row; the nine-column baseline (Column Ids 2–10) with name, type, length, nullability, primary key and key sequence; no column named FX_Address, exact or in any case. | Baseline read from the Sql Columns UI (grid and detail), not the catalogue. System Data Type for rows 3–9 is from the accessibility readback, not a full screenshot. The Column Id 1 gap is unexplained (section 13). |
| **AC-3** One unsaved FX_Address: nvarchar (from list), Length 150, Is Nullable checked; existing columns unchanged | **Supported** | `evidence/EXP-074/t3-03-datatype-nvarchar-star-filtered-list.png` (one option `nvarchar` shown); `t3-04-datatype-after-option-select-readback.png` (Data Type `nvarchar`, list closed, grid row `nvarchar`); `t3-05-pre-save-fx-address-complete-configuration.png` (pre-Save: Data Type nvarchar, Length 150, Is Nullable checked, System Data Type and Column Id blank, status `Is Nullable (SQL Columns 2 of 10)`). Earlier partial state: `t2-02` to `t2-07` (T2 blocker; not the final configuration). | Data Type chosen from the list; Length and Is Nullable set; nine original rows unchanged on every readable field (accessibility readback). Pre-Save: Save enabled, no dialog. | The T3 Data Type recovery was an operator-authorized exception (section 10). Length and Is Nullable grid values were read from accessibility rows, not full-width screenshots. "Closing the list committed no value" is an inference from the readback. |
| **AC-4** Exactly one toolbar Save; native response recorded; generated SQL recorded; Save disabled and no error afterwards; System Data Type readback | **Supported (observed; no explicit success text)** | `evidence/EXP-074/t4-01-post-save-state-fx-address-readback.png` (post-Save: Save greyed, System Data Type `nvarchar`, Column Id blank, status `Is Nullable (SQL Columns 2 of 10)`, no dialog). Native response and SQL: recorded in the T4 section of the record. | One Save (cumulative 1). Native response: none visible (no confirmation text, toast, error, validation or dialog). Generated SQL: none displayed. Save disabled afterwards. System Data Type `nvarchar` populated. | No explicit success message exists in this UI. Column Id not visible until the reopen. "Saved" is inferred from the Save state and the populated System Data Type, not from a database read. |
| **AC-5** Clean Sql Columns and Sql Tables each closed once without a prompt; Sql Tables reopened once through Select Form | **Supported (observed; no prompt provoked)** | `evidence/EXP-074/t5-01-pre-close-sqltables-parent-clean-target.png` (parent clean before close); `t5-02-pre-close-sqlcolumns-clean-fx-address.png` (child clean before close); `t5-03-reopen-caution-alert-before-ok.png`; `t5-04-reopened-sqltables-clean-after-ok.png` (reopened, clean, tab strip without Sql Columns). Tab-strip readbacks: record section T5. | Each close ran once through its Form-tab close control; each Form was absent from the tab strip afterwards; no dialog appeared after either close; the reopen used toolbar Open > Select Form once. | "Without a prompt" is the absence of any dialog in the snapshots after each close. No save-changes prompt was provoked, since none was expected for clean Forms. |
| **AC-6** After the reopen, one visible-criterion query recovers exactly one row; recovered columns equal baseline plus FX_Address (nvarchar, 150, nullable, Column Id) field by field | **Supported (with the T6 deviation, section 9)** | Pre-F4 criterion: `evidence/EXP-074/t6-02-pre-f4-table-name-criterion-FX_HelloWorld01.png`. Result: `t6-03-post-f4-one-dbo-fx-helloworld01-row.png`. Inventory: `t6-04` (ten names, status `1 of 10`), `t6-05` (Data Type), `t6-06` (Length, Decimal, Default), `t6-07` (Is Computed; Column Id 2–11), `t6-08` (Is Nullable, Primary Key, Key Sequence), `t6-09-recovered-fx-address-detail-column-id-11.png` (FX_Address detail: Column Id 11). Parent clean: `t6-10-parent-sqltables-clean-after-recovered-inventory.png`. | One dbo.FX_HelloWorld01 row; ten columns; the nine originals match the baseline on every field; FX_Address is nvarchar, System Data Type nvarchar, Length 150, nullable checked, Primary Key unchecked, **Column Id 11**; both Forms clean. | Same browser session (UI-level recovery). Not a catalogue query. Not database durability. Two Filter in Place toggles occurred before the criterion was entered (section 9). Column Id 1 gap unexplained. |
| **AC-7** Runtime Form opened once and loaded with one Refresh; exactly FX001 / Factory test one and FX002 / Factory test two; Save disabled; nothing changed | **Supported (observed; UI level)** | `evidence/EXP-074/t7-02-select-form-fx-helloworld01-before-ok.png` (Select Form identity before OK); `t7-03-runtime-fx-helloworld01-initial-state-before-refresh.png` (add-mode placeholder, `(Object 1 of 1)`, Save greyed); `t7-04-runtime-fx-helloworld01-after-one-refresh-two-rows.png` (two rows, `(Object 1 of 2)`, Save greyed, detail `Factory test one` / `FX001`). Full row text: accessibility readback recorded in the T7 section. | Exactly two records loaded after one Refresh; Save disabled before and after; no edit, no Save, no New, no Filter in Place, no F4 after Refresh. | Same-session Web Client read; no database read. Row 1 is directly observed in the detail inputs and grid. Row 2 field mapping is inferred (section 7). Row 2 column 1 is cut short in the screenshot (full text from the accessibility readback). |
| **AC-8** Final report: AC-1 to AC-7 evidence; complete action audit with exact counts; baseline and recovered inventories; worker-written-file inventory; final state | **Supported by this report** | This file (sections 2–12) and the record's per-task audits, cumulative tables and T8 section. | Consolidated counts reconciled to the per-task tables (section 8); both inventories (section 3); the inventory of worker-written files (section 11); final state (section 12). | Repository confinement is supported by the worker's own inventories and the harness audit only; operator git review is authoritative. The worker ran no git or shell commands. |

---

## 3. Baseline (T1) versus recovered inventory (T6), field by field

Sources: baseline `t1-04` to `t1-08` and the T1 table in the record; recovered `t6-04` to `t6-09` and the T6 comparison in the record. System Data Type and default text for rows 3–9 come from the accessibility readback (the screenshots truncate them). "Decimal" is blank for every row in both readings.

| # | Column | Column Id (T1 → T6) | Data Type (T1 → T6) | System Data Type (T1 → T6) | Length (T1 → T6) | Is Nullable (T1 → T6) | Primary Key / Key Seq (T1 → T6) | Default (T1 → T6) | Is Computed (T1 → T6) | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Code | 2 → 2 | nvarchar → nvarchar | nvarchar → nvarchar | 30 → 30 | No → No | Yes / 1 → Yes / 1 | blank → blank | No → No | Unchanged |
| 2 | FX_Label | 3 → 3 | nvarchar → nvarchar | nvarchar → nvarchar | 100 → 100 | Yes → Yes | No / blank → No / blank | blank → blank | No → No | Unchanged |
| 3 | CreatedBy | 4 → 4 | UsernameType → UsernameType | nvarchar → nvarchar | 128 → 128 | No → No | No → No | suser_sname() → suser_sname() | No → No | Unchanged |
| 4 | UpdatedBy | 5 → 5 | UsernameType → UsernameType | nvarchar → nvarchar | 128 → 128 | No → No | No → No | suser_sname() → suser_sname() | No → No | Unchanged |
| 5 | CreateDate | 6 → 6 | CurrentDateType → CurrentDateType | datetime → datetime | blank → blank | No → No | No → No | getdate() → getdate() | No → No | Unchanged |
| 6 | RecordDate | 7 → 7 | CurrentDateType → CurrentDateType | datetime → datetime | blank → blank | No → No | No → No | getdate() → getdate() | No → No | Unchanged |
| 7 | RowPointer | 8 → 8 | RowPointerType → RowPointerType | uniqueidentifier → uniqueidentifier | blank → blank | No → No | No → No | newid() → newid() | No → No | Unchanged |
| 8 | NoteExistsFlag | 9 → 9 | FlagNyType → FlagNyType | tinyint → tinyint | blank → blank | No → No | No → No | (0) → (0) | No → No | Unchanged |
| 9 | InWorkflow | 10 → 10 | FlagNyType → FlagNyType | tinyint → tinyint | blank → blank | No → No | No → No | (0) → (0) | No → No | Unchanged |

**Recovered addition (not in the baseline):**

| # | Column | Column Id | Data Type | System Data Type | Length | Is Nullable | Primary Key / Key Seq | Default | Is Computed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | **FX_Address** | **11** | **nvarchar** | **nvarchar** | **150** | **Yes (checked)** | **No / blank** | blank | No |

**Result:** nine originals unchanged on every compared field; one addition; ten columns in total. Column Ids 2–10 kept their values; FX_Address took **11**, read from the detail pane textbox (`t6-09`) and the grid row, not assumed.

---

## 4. FX_Address as recovered (AC-6, observed)

- Data Type `nvarchar`; System Data Type `nvarchar`; Length `150`; Is Nullable **checked**; Primary Key **unchecked** (disabled); Key Sequence blank; Decimal Position blank; Default Value blank; Is Computed unchecked; Column Id **11**.
- Schema `dbo`, Table `FX_HelloWorld01`. Case-insensitive name check: exactly one name matches `fx_address`.
- Observed both before Save (T3 pre-Save), immediately after Save (T4), before close (T5) and after reopen (T6, T7).

---

## 5. Single Save, clean boundary, reopen and caution alert

**Single native Save (T4, observed):**
- One click on the toolbar Save (cumulative Save = 1). No retry.
- Native response: **silent.** No confirmation text, toast, informational message, error, validation message, or dialog. No destructive, data-conversion or table-recreation confirmation appeared, so none was approved.
- Generated SQL: **none displayed**. Nothing was run, pasted or applied.
- After Save: toolbar Save disabled; System Data Type `nvarchar`; Column Id blank in the UI (it appeared only after the reopen, which matches EXP-059); status `Is Nullable (SQL Columns 2 of 10)`; no error text.
- Evidence: `evidence/EXP-074/t4-01-post-save-state-fx-address-readback.png`.

**Clean close/reopen boundary (T5, observed):**
- Sql Columns closed once (clean; no dialog after close; tab absent afterwards).
- Sql Tables closed once (clean; no dialog after close; tab absent afterwards; the platform then selected the inherited FX_Orders tab, which was not touched).
- Sql Tables reopened once through toolbar Open > Select Form (filter changed to `SqlTables`; one End key press to refresh; row `Sql Tables / SqlTables` activated; OK once).
- Reopened Sql Tables: Save disabled; no record loaded (blank placeholder); no dialog after OK.

**Caution alert (T5, captured on the reopen):**
- Title: `Sql Tables`. Icon: warning. Buttons: **OK only**.
- Exact visible text: *"Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms."*
- Disposition: dismissed with **OK** once. No other response was offered or selected.
- Evidence: `evidence/EXP-074/t5-03-reopen-caution-alert-before-ok.png` (before OK); `t5-04-reopened-sqltables-clean-after-ok.png` (after OK).

---

## 6. Runtime verification (AC-7, observed)

- **Runtime open:** exactly one (Select Form, filter `FX_HelloWorld01`, one row Caption `FX_HelloWorld01` / Name `FX_HelloWorld01`, row activated, OK once). Caution alert on this path: none.
- **Initial state:** one starred blank add-mode placeholder, `(Object 1 of 1)`, both inputs blank, Save disabled (`t7-03`).
- **Runtime load:** exactly one toolbar Refresh (label verified). No Filter in Place, no F4 after it.
- **Result (`t7-04`, accessibility readback):**
  - Row 1: `Factory test one` / `FX001`.
  - Row 2: `Factory test two` / `FX002`.
  - Record count: 2. Status `(Object 1 of 2)`. Save **disabled** before and after the load. No dialog, no error text.
- **Record edits: zero.** No runtime field was typed into. Save and New were not invoked.
- The runtime tab remains open and clean.

---

## 7. Runtime row mapping (observed versus inferred)

**Directly observed (T7):**
- Row 1 pairing: the upper detail input shows `Factory test one` and the lower detail input shows `FX001`. Both values are also in row 1's grid cells, in the same row. The **pairing** of those two values in one record is observed.
- Row 2 pairing: the grid cells of row 2 read `Factory test two` and `FX002` (accessibility readback), in the same row.
- The grid's column headers are uncaptioned for column 1 and carry a required marker `*` on column 2.

**Inferred (not observed):**
- That the upper input and grid column 1 are **FX_Label**, and the lower input and grid column 2 are **FX_Code**. This is taken from the EXP-042-R3 record (upper input FX_Label, lower required input FX_Code) and from the required marker on column 2. It is consistent with row 1 but was **not** confirmed from Designer bindings, and the Designer was not opened (out of scope).
- The mapping for **row 2** is inferred from the same column order. Row 2 values are therefore read under the same inferred mapping.

**Not claimed:** any Designer binding verification; any IDO or property mapping; any database column binding for the runtime inputs. The IDO `FX_Address` property and the Form field are later experiments.

---

## 8. Cumulative action counts (reconciled to the per-task audits)

### 8a. Per task (from each task's audit table in the record)

| Action | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | **Total** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tab lists | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **7** |
| Tab selects (Web Client) | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **7** |
| Clicks | 4 | 4 | 4 | 1 | 8 | 6 | 5 | 0 | **32** |
| Typed entries | 1 | 3 | 2 | 0 | 1 | 1 | 1 | 0 | **9** |
| Key presses | 2 | 2 | 2 | 0 | 1 | 2 | 1 | 0 | **10** |
| Escape presses | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Mouse moves | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | **3** |
| Wheel scrolls | 4 | 3 | 0 | 0 | 0 | 4 | 0 | 0 | **11** |
| Waits | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | **4** |
| `browser_snapshot` calls | 8 | 5 | 1 | 1 | 5 | 2 | 3 | 0 | **25** |
| `browser_find` calls | 1 | 4 | 15 | 7 | 6 | 13 | 5 | 0 | **51** |
| Screenshots | 8 | 7 | 5 | 1 | 4 | 10 | 4 | 0 | **39** |

Note on snapshot and find counts: T1's eight snapshots included one targeted call (on the Sql Columns grid row container, a read); the others were untargeted. T2–T7 counts are the tool calls each task's audit recorded. The T2 record initially mis-stated its snapshot count and was corrected in-record (section 9 lists the in-record corrections).

### 8b. Mutation and lifecycle counts (exact)

| Item | Count | Where |
| --- | --- | --- |
| **New (Columns > New)** | **1** | T2 (one invocation; never retried) |
| **Save (toolbar)** | **1** | T4 (one invocation; never retried) |
| Sql Columns close (clean) | **1** | T5 |
| Sql Tables close (clean) | **1** | T5 |
| Sql Tables reopen (Select Form) | **1** | T5 |
| Select Form opens (cumulative) | **2** | T5 (reopen) and T7 (runtime open) |
| Select Form OK | 2 | T5 and T7 |
| Caution alert appearances | **1** | T5 (verbatim text in section 5) |
| Caution alert OK | **1** | T5 |
| Runtime FX_HelloWorld01 open | **1** | T7 |
| Runtime load (Refresh) | **1** | T7 |
| Runtime record edits | **0** | — |
| Runtime Save / New | **0 / 0** | — |
| Columns... child opens | 2 | T1 (first child open) and T6 (child re-opened after the reopen; not a Form reopen) |
| Filter in Place toolbar clicks | **3** | T1: 1 (target query, mode off → on). T6: 2 (first toggled mode off; second re-entered it). See section 9. |
| Data Type list open-trigger clicks (T2–T3) | 3 | T2: 1 (opened list). T3: 2 (one toggled the list closed; one opened the filtered list). See section 10. |
| Designer actions (any) | **0** | Web Designer tab never selected, clicked or captured by the worker |
| Unloads / cache / FormSync / deploy / regenerate / check-in / check-out | **0 / 0 / 0 / 0 / 0 / 0 / 0** | — |
| IDO / Form / string / property-class edits | **0** | — |
| Existing dbo.FX_HelloWorld01 column, index, key, constraint or row changes | **0** | Only the new FX_Address column was added |
| Re-logins | **0** | Session stayed usable throughout |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | **0** | — |

### 8c. Reconciliation with the brief's list

- New 1 — matches. Save 1 — matches. Sql Tables close/reopen 1 — matches (plus one Sql Columns close). Runtime open 1 — matches. Runtime Refresh 1 — matches. Designer actions 0 — matches. Unloads 0 — matches. Re-logins 0 — matches. Runtime record edits 0 — matches.
- Select Form opens 2 — the brief's list does not name this; it is recorded because T5 and T7 each used it once.
- Caution alert OK 1 — matches.

### 8d. Discrepancies identified (not guessed away)

1. **Filter in Place: 3 toolbar clicks in total, not 1.** T1 used one (correct, mode off → on). T6's first click exited an already-active filter mode, and a second click re-entered it. The brief said "exactly once" for T6. This is the disclosed deviation (section 9).
2. **The T2 snapshot count** was first recorded inconsistently and corrected in the record. The table above uses the corrected figures.
3. **The T5 entry "Update Current Table rendered enabled"** in the blank placeholder state was recorded as observed. The T6 readings were consistent with a pattern: enabled with no record loaded, disabled once a record is loaded (T1, T5 and T6 readings with FX_HelloWorld01 loaded). Save stayed disabled in all of them. Not a pending change; not re-observed in T8.
4. **The T6 record first stated a truncation value (`Factc`) for runtime column 1 in the T7 draft.** This was corrected in T7 to "cut short by the column width". The image does not show a specific fragment; the accessibility readback carries the full text.
5. **The first T6 cumulative FiP row read 2**; corrected to 3 (T1 plus T6's two clicks).
6. **The T5 record carried a duplicated knowledge-state row and a stale T1 next-step paragraph** after a large insert. Both were removed in T5.
7. **The T4 run-history edit failed on the first attempt** (string not matched). The file was unchanged by the failed call; the retry succeeded and was verified as a single occurrence.
8. **Column Id 1 is absent** from every readback (baseline and recovered). This is a gap in the readings, not a value the worker saw and discarded. It is unexplained (section 13).
9. **The tab list reported the Web Designer as "current" at the start of every task** (T2–T7). This is the tool's listing marker. The worker did not select, click or capture tab 0; each task selected tab 1 successfully. Not investigated further.
10. **No caution alert in T1**: the brief asked for the alert "if shown". It was not shown in T1 because the existing Sql Tables tab was used. It was captured on the T5 reopen.

---

## 9. T6 procedural deviation (operator review required)

**What happened (T6):**
- The brief asked for Filter in Place to be entered **once**, then the criterion typed, committed with Tab, captured before F4, and F4 pressed once.
- On the reopened Sql Tables, Filter in Place was **already active** (the status bar read `Filter in Place` on the T5 end state `t5-04` and in the T6 pre-click snapshot as recorded in the T6 section). The worker did not register this before clicking.
- **First FiP click:** toggled filter mode **off**. The grid loaded the unfiltered list (`Table Name (SQL Tables 1 of 200)`), the Attributes Table Name combobox showed `ABDataServices` (the first row became the record, with focus), and New, Refresh and Get More Rows became enabled. **No value was typed, no field was edited, Save stayed disabled.** Evidence: `t6-01-after-fip-click-unfiltered-state.png`.
- **Fresh untargeted snapshot** (the recovery allowance) confirmed the unfiltered state.
- **Second FiP click:** a single corrective entry; filter mode re-entered (criteria row present, status `Filter in Place`, record cleared, Save disabled).
- The criterion, commit and F4 then ran exactly once each.

**Why this is flagged:** the brief's "exactly once" was not met for the FiP toggle. The brief did not anticipate that the mode would already be active after a Select Form reopen. The worker did not treat this as satisfied; it is recorded as a deviation.

**Effect on the data:** none observed. The unfiltered load only read the table list. ABDataServices was selected as the record but not edited. The final query returned exactly one row, and the inventory was read after it.

**Effect on the acceptance check:** AC-6 still rests on a single criterion entry, a pre-F4 capture, one F4, one row and a complete readback. The operator may judge that AC-6 is met, or may require a rerun. The worker does not make that decision.

---

## 10. T3 Data Type exception (operator-authorized)

- The original Data Type rule (close a list only by selecting an option; never Escape) left the T2 list open with no selectable `nvarchar` entry. T2 stopped there.
- The operator authorized a restricted recovery in T3 only. The worker used it as instructed:
  1. Closed the open list with its Open trigger toggle, once. No Escape, no outside click. The field text `nvarchar` remained; no value was visibly committed.
  2. Ctrl+A, then typed `nvarchar*` with the list closed.
  3. One Open-trigger click. The filtered list showed **exactly one option, `nvarchar`** (`t3-03`).
  4. One click selected that exact option. Readback: Data Type `nvarchar` (no `*`), list closed, grid row `nvarchar`, Length field editable (`t3-04`).
- No alternate prefix, no other option, no second New, no Escape were used. The same exception covers no other field.
- Observed behaviour, single run: a typed prefix did not filter an already-open list (T2); a typed `nvarchar*` with the list closed, followed by one Open click, did filter it (T3).

---

## 11. Worker-written-file inventory by task

### 11a. Repository files written by the worker

| Task | Written | Edited |
| --- | --- | --- |
| T1 | `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` (created at the brief's path); `evidence/EXP-074/t1-01-…png` to `t1-08-…png` (8 PNG) | — |
| T2 | `evidence/EXP-074/t2-01-…png` to `t2-07-…png` (7 PNG) | the record |
| T3 | `evidence/EXP-074/t3-01-…png` to `t3-05-…png` (5 PNG) | the record |
| T4 | `evidence/EXP-074/t4-01-…png` (1 PNG) | the record |
| T5 | `evidence/EXP-074/t5-01-…png` to `t5-04-…png` (4 PNG) | the record |
| T6 | `evidence/EXP-074/t6-01-…png` to `t6-10-…png` (10 PNG) | the record |
| T7 | `evidence/EXP-074/t7-01-…png` to `t7-04-…png` (4 PNG) | the record |
| T8 | `evidence/EXP-074/T8-final-acceptance-report.md` (this file) | the record |

**Totals:** 39 PNG screenshots (matches the cumulative screenshot count), 1 experiment record (created in T1, edited in T2–T8), 1 final report (T8).

### 11b. Tool-generated files (not worker-authored)

- Playwright MCP snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T09-58-*.yml`, `page-2026-10-13T10-28-*.yml`, `console-2026-10-13T10-28-07-709Z.log`). These are written by the browser tool on each action or snapshot. They are not EXP-074 evidence and were not authored by the worker. One such file was read by the worker, in T2, with Read and Grep, to count the Data Type listbox options; no file was changed.
- Oversized snapshot outputs were persisted by the harness to a directory outside the repository (a Claude tool-results folder under the user profile). The worker read none of them successfully (one read was denied; see 11c). These were not written by the worker.

### 11c. Failed read or edit attempts and their resolution

| Task | Attempt | Result | Resolution |
| --- | --- | --- | --- |
| T1 | Read of `experiments/EXP-074-…md` before creation | "File does not exist" | Created the record at the brief's path with Write (no prior content existed). |
| T3 | Grep and Read of a persisted tool-results snapshot file | **Permission denied** | Not needed: state was read through targeted browser finds. No browser effect. |
| T4 | Edit of the run-history line | **String not found** (the file unchanged) | Re-read the exact line, retried with the exact text, verified a single occurrence. |
| T5 | A large Edit inserted text that left a duplicate knowledge row and a stale T1 next-step paragraph | Record-quality error (not a tool failure) | Removed the duplicate row; replaced the stale paragraph with a pointer; corrected a parent-status sentence in T5. |
| T6 | Cumulative FiP row stated 2 | Miscount (record) | Corrected to 3. |
| T7 | Runtime column-1 truncation phrasing | Imprecise wording (record) | Reworded to "cut short by the column width". |

No browser call failed with a Ref-not-found error in any task. No recovery snapshot was needed beyond the one T6 snapshot, and no corrected visible inspection was needed beyond the T6 second FiP click.

### 11d. Repository confinement assessment

- Worker-written repository files are limited to `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` and `evidence/EXP-074/` (39 PNG, plus `T8-final-acceptance-report.md`).
- No other repository file was written, edited or deleted by the worker. No file under `tools/`, `briefs/`, `AGENTS.md`, tutorial sources, recipes or earlier experiment records was read for writing or edited. (`tools/` was not read at all.)
- The worker did not run git, shell or scripts, so repository confinement was not checked against git status by the worker.
- **Operator git review is authoritative.** The harness computes confinement from before/after Git state and the evidence diff.

---

## 12. Final browser state (as left at the end of T7; T8 made no browser calls)

- **Web Client** tab selected (tab 1). **Web Designer** (tab 0) untouched by the worker throughout.
- **FX_HelloWorld01 runtime** tab open and selected: two loaded records (`Factory test one` / `FX001`, `Factory test two` / `FX002`), `(Object 1 of 2)`, Save disabled, not edited.
- **Sql Tables** tab open: clean, FX_HelloWorld01 `1 of 1`, Save disabled, Update Current Table disabled; Filter in Place mode active with the FX_HelloWorld01 criterion.
- **Sql Columns** tab open: clean, `SQL Columns 10 of 10`, FX_Address row (Column Id 11) selected by a view-only click; Save disabled.
- **Inherited FX_Orders** runtime tab open and **untouched**.
- Other inherited tabs (FX_Items, Property Classes, IDO Projects, IDOs) open and untouched.
- No dialog. No browser-native prompt. No unsaved-change prompt. No pending edits.
- **Retained artifacts:** the new column `dbo.FX_HelloWorld01.FX_Address` (nvarchar, 150, nullable, Column Id 11); the two factory test records FX001 and FX002 in `dbo.FX_HelloWorld01`. Neither was removed; cleanup is out of this experiment's scope and was not authorized.

**Durability and replay:** all of this is same-session UI recovery. It establishes observed UI behaviour only. It does **not** independently verify database durability, a catalogue read of the column, or replay verification. No claim of any of these is made.

---

## 13. Knowledge state and unresolved items

| Finding | State |
| --- | --- |
| Baseline of nine columns (Column Ids 2–10) on dbo.FX_HelloWorld01, with the field values in section 3 | observed (UI level; single run) |
| FX_Address absent before T2 (exact and case-insensitive) | observed (UI level) |
| The Data Type list of the unsaved row renders 200 options and no `nvarchar` option without a filter; a typed prefix does not filter an already-open list | observed (single run; T2) |
| Typed `nvarchar*` with the list closed, then one Open click, shows exactly one `nvarchar` option; selecting it commits Data Type `nvarchar` | observed (single run; T3; operator-authorized exception) |
| Pre-Save configuration: Length 150, Is Nullable checked, System Data Type and Column Id blank | observed (single run; T3) |
| Single toolbar Save: silent response, no generated SQL displayed, Save disabled afterwards, System Data Type `nvarchar` | observed (single run; T4) |
| Clean close of Sql Columns and Sql Tables; no dialog afterwards | observed (single run; T5) |
| Caution alert text (verbatim, section 5), OK only | observed (single run; T5; second occurrence after EXP-059's) |
| Reopened Sql Tables: clean, no record loaded, Filter in Place mode active on reopen | observed (single run; T5, T6) |
| Recovered inventory: ten columns; nine originals unchanged; FX_Address nvarchar 150 nullable PK unchecked, System Data Type nvarchar, **Column Id 11** | observed (single run; UI level; T6) |
| Filter in Place toggled by a click exits an active mode and loads the unfiltered list | observed (single run; T6) |
| Runtime FX_HelloWorld01 opens in add mode with a blank placeholder, Save disabled | observed (single run; T7) |
| One Refresh loads FX001 / Factory test one and FX002 / Factory test two; `(Object 1 of 2)`; Save disabled | observed (single run; T7; UI level) |
| Row 1 pairing of `Factory test one` with `FX001` in one record | observed (T7) |
| Runtime grid column 1 = FX_Label and column 2 = FX_Code, including the upper/lower input mapping | **inferred** (from EXP-042-R3 and the required `*` on column 2); **not** confirmed from Designer bindings |
| Row 2 field mapping | **inferred** (same column order as row 1) |
| Column Id 1 absence (values run 2–11) | **unresolved** (not investigated; not in any readback) |
| Persistence of FX_Address and FX001 / FX002 to the database | **unresolved** (no database read; UI-level only) |
| IDO `FX_Address` property and Form field | **not tested** (later experiments; out of scope) |
| Replay of this procedure | **not claimed** |
| Database durability | **not claimed** |

---

## 14. Open items for the operator

1. **Decide on the T6 Filter in Place deviation** (section 9): accept AC-6 as observed, or require a rerun of the T6 query with a verified filter-mode state beforehand.
2. **Accept or reject the T3 Data Type exception** (section 10) as a one-time, operator-authorized recovery, not a general procedure.
3. **Column Id 1 gap** in every readback: explain or accept as unresolved.
4. **Row-2 and row-1 runtime mapping** is inferred from EXP-042-R3 and the grid's required marker. Confirm later from Designer bindings in the IDO or Form-field experiment, or accept as inferred.
5. **Retained test artifacts:** the FX_Address column and the FX001 / FX002 records remain. Cleanup, if wanted, needs a separate FX_-scoped authorization.
6. **Git review:** confirm the repository changes are limited to the paths in section 11d.
7. **Acceptance:** the recommendation in section 1 is the worker's. The operator decides.

---

*End of T8 report. Documentation only. No browser calls were made in T8.*
