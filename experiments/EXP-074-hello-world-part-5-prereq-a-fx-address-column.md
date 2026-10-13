# EXP-074 — Hello World Part 5 Prerequisite A: add nullable FX_Address to dbo.FX_HelloWorld01

**Current status (after T8, 2026-10-13, final documentation; zero browser calls in T8): AC-1 to AC-7 observed at UI level; AC-8 final report written to `evidence/EXP-074/T8-final-acceptance-report.md`. Recommendation (worker, for operator decision): ACCEPTED AS OBSERVED (UI level; not replay-verified; no database durability claimed), conditional on operator review of the T6 double Filter in Place toggle. Final state: FX_HelloWorld01 runtime open with two loaded records; Sql Tables and Sql Columns open and clean; inherited FX_Orders and Web Designer untouched; FX_Address and the two factory test records retained. Cumulative: New 1, Save 1, Sql Columns close 1, Sql Tables close 1, Sql Tables reopen 1, Select Form 2, caution alert OK 1, runtime open 1, runtime Refresh 1, runtime edits 0, Designer 0, unloads 0, re-logins 0. Previous status (after T7): AC-7 observed at UI level. The FX_HelloWorld01 runtime Form was opened once through toolbar Open > Select Form (filter changed to FX_HelloWorld01; the single row Caption FX_HelloWorld01 / Name FX_HelloWorld01 was activated and OK pressed once; no caution alert appeared). Its initial state was one blank add-mode placeholder, `(Object 1 of 1)`, Save disabled. One toolbar Refresh (label verified) loaded exactly two records: row 1 `Factory test one` / `FX001` and row 2 `Factory test two` / `FX002`, status `(Object 1 of 2)`, Save disabled, no dialog, no edit. No record was changed and no Save or New was invoked. Stopped before AC-8. The T6 double-FiP deviation is retained (see T6). Cumulative: New 1, Save 1, runtime open 1, runtime load 1. Earlier status (T6): AC-6 observed at UI level. After the reopen, one Filter in Place query with the grid Table Name criterion `FX_HelloWorld01` (criterion captured before F4; one F4) returned exactly one dbo.FX_HelloWorld01 row. Columns... showed `SQL Columns 1 of 10`: the nine original columns match the T1 baseline field by field (Column Ids 2–10), and exactly one additional column FX_Address is present, nvarchar, System Data Type nvarchar, Length 150, Is Nullable checked, Primary Key unchecked, **Column Id 11** (read from the detail pane and the grid row). Both Forms are clean: Sql Columns Save disabled (`SQL Columns 10 of 10`), Sql Tables Save and Update Current Table disabled (`SQL Tables 1 of 1`). One incident: my first Filter in Place click on this reopened Form exited filter mode and loaded the unfiltered list (200 tables, record ABDataServices shown in the Attributes combobox, no edit); one corrective FiP click re-entered filter mode. No data changed. Cumulative: New 1, Save 1. The runtime check (AC-7) has NOT started. Earlier status (T5): AC-5 observed at UI level. The clean Sql Columns Form was closed once (no prompt); the clean Sql Tables Form was closed once (no prompt); both are absent from the tab list. Sql Tables was reopened once through Form > Open > Select Form (toolbar Open, filter SqlTables, row Sql Tables / SqlTables, OK). The informational caution alert appeared, was transcribed verbatim, and was dismissed with OK only. The reopened Sql Tables is clean: Save disabled, no dialog, blank placeholder (no record loaded yet). Stopped before Filter in Place and before retrieving FX_HelloWorld01 again (AC-6). Cumulative: New 1, Save 1, Sql Columns close 1, Sql Tables close 1, Sql Tables reopen 1, runtime open 0. AC-6 to AC-8 NOT STARTED.** Earlier status (T4): AC-4 observed at UI level. One ordinary toolbar Save was clicked once (cumulative Save = 1; cumulative New = 1). The native response was silent: no confirmation text, no dialog, no error, no generated SQL displayed. After the Save, FX_Address reads Data Type nvarchar, System Data Type nvarchar, Length 150, Is Nullable checked, Primary Key unchecked; Column Id is still blank in the UI (as in EXP-059, it appears after reopen); Save is disabled. The nine original rows read the same as before the Save. Sql Columns and Sql Tables were NOT closed; SQL Tables was NOT reopened; no runtime check was started. AC-1 to AC-3 established (T1–T3, observed). AC-4 observed at UI level, not a database read.** Classification: observed only; not replay_verified; no database durability claimed.

**Run history.** T1 (preflight and baseline) complete: see the T1 sections. T2 (task `e20cd9c7-9374-47a8-90d7-57350cc6d794`) performed New and the Column Name fill, then stopped at Data Type because the open list could not be closed without a wrong selection: see "T2 — unsaved FX_Address configuration (AC-3), blocked at Data Type". T3 (task `7843abcc-8a67-4eec-b1e7-674b064df0c0`, cycle 3) resumed under the operator's restricted Data Type recovery (close the list by its Open trigger toggle; type `nvarchar*`; one open; select the single exact `nvarchar` option): see "T3 — AC-3 completion: Data Type recovery, Length, Is Nullable, pre-Save verification". T4 (task `7cd2927a-458c-4b56-a29a-ec6e51988978`, cycle 4) made the single toolbar Save and read the post-Save state: see "T4 — AC-4: single ordinary toolbar Save and post-Save readback". T5 (task `352eff94-5a1e-40a4-bcb8-baddf69b9007`, cycle 5) closed the clean Sql Columns and Sql Tables Forms once each, reopened Sql Tables once, and dismissed the caution alert with OK: see "T5 — AC-5: clean close of Sql Columns and Sql Tables, one reopen". T6 (task `0867a51b-7d1b-4ad5-b1fd-8bd0217ed574`, cycle 6) ran the Filter in Place query for `FX_HelloWorld01`, opened Columns... once, and compared the recovered inventory with the T1 baseline plus FX_Address (Column Id 11): see "T6 — AC-6: recovered inventory after the reopen". T7 (task `23c181be-73f7-4457-a1ed-feb25ac3b663`, cycle 7) opened the FX_HelloWorld01 runtime Form once and loaded its records with one Refresh: see "T7 — AC-7: runtime FX_HelloWorld01 read-only check". T8 (task `b3e01288-41d5-4f85-a0c8-332f6de7a559`, cycle 8, documentation only, zero browser calls) wrote the final acceptance report `evidence/EXP-074/T8-final-acceptance-report.md`: see "T8 — final documentation" below.

## Run identity and provenance

- Run `R-20261013-175801-w8FD`, experiment EXP-074, cycle 0, task T1. Worker session `9f8c3e34-b35e-493e-b552-aec77a8844ab`; task_message_id `f5be76e4-73eb-4ddc-b3d9-293ac69216a0`.
- Date 2026-10-13. Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope: User (Forms only; the SQL column is tenant-wide schema).
- Brief commits (git log at session start): `a80afc8` (draft brief), `0e11e83` (approved brief).
- Operator decision (2026-10-13): add a nullable `FX_Address` column (nvarchar, length 150) to `dbo.FX_HelloWorld01`, for Hello World Part 5 (join Orders to Customer; show Name and Address). Source of the Address spec: `docs/mongoose/transcripts/hello-world-pt1.md` Section 6 (line 105: "`Address`: String, length **150**"; label string ID narrated as `s Address`, spoken only).
- This record did not exist at the start of T1 (no file matched `**/*EXP-074*`); it was created by the T1 worker at the brief's path.

## Objective (from the brief)

Using the native Web Client SQL Tables Form and the EXP-059 route (Columns > New), retrieve exactly one `dbo.FX_HelloWorld01` and record its complete column baseline. Then, in later authorized tasks: add exactly one column `FX_Address` (nvarchar, Length 150, Is Nullable checked) through one Columns > New; verify before one toolbar Save; close and reopen SQL Tables once; prove the recovered inventory equals the baseline plus `FX_Address`; then open the FX_HelloWorld01 runtime Form read-only and confirm the two records FX001 and FX002 still load. The IDO `FX_Address` property and the Form field are later experiments.

**T1 scope (this task):** preflight, a single visible-criterion query, the baseline, and the absence check. Stop before New.

**Out of scope:** any table other than `dbo.FX_HelloWorld01`; any column other than `FX_Address`; the IDO, property classes, Forms, strings and runtime records; any Web Designer action; unload, cache, FormSync, deploy or regeneration; direct SQL, browser JavaScript, console or network inspection, navigation, refresh or restart.

## Sources read (before browser interaction)

- `AGENTS.md`: full (LEARNING MODE; FX_ scope extension; experiment rules; evidence capture; recovery).
- `docs/mongoose/transcripts/hello-world-pt1.md`: Section 6 (lines 94–106; Address String 150; label string IDs narrated as spoken approximations only).
- `docs/mongoose/transcripts/hello-world-pt5.md`: header, "How an agent should use this file", Part 5 goals, prerequisites table (lines 1–110, including Section 1 join steps and Section 2 bind/assignment steps). Context only: the tutorial's Site Default scope and unprefixed `Customer`/`Orders` names are **not** approved here.
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md`: full. Relevant route: Sql Tables > grid criteria FiP > Columns... > New; Data Type chosen from the combobox list (type a prefix, select from the list, never Escape); Is Nullable checked by its label; one Save with no confirmation text and no DDL shown; System Data Type and Column Id populated after Save/reopen; the SQL Tables caution alert ("Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms.", OK only) appears on Select Form opening.
- `experiments/EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md`: lines 1–505 and T12 (lines 335–455). Relevant: `dbo.FX_HelloWorld01` columns FX_Code nvarchar(30) NOT NULL primary key, FX_Label nvarchar(100) nullable, seven system columns; the Attributes "Table Name" combobox is the record field, not a query field (EXP-040 T10 incident); query through the grid's criteria row.
- `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md`: lines 1–493 (outcome, cycle 9–14 records). Relevant: runtime Form inputs are uncaptioned (upper FX_Label, lower FX_Code); the Form opens in add mode and rows load only after Refresh; the status bar reads `(Object n of N)`; FX001 / Factory test one and FX002 / Factory test two were written by one Save and recovered after Refresh and one close/reopen (same session only).

## Repository starting state (session-start snapshot; not re-verified, no shell)

- Session-start git status (from the environment context): branch `claude-harness`; untracked `assets/`. No EXP-074 file existed. T1 did not read `tools/`, did not run git, and did not use shell.

## Browser preflight (AC-1)

| Item | Observed | Evidence |
| --- | --- | --- |
| Tab list (before the first select) | Tab 0: Web Designer (`mode=designer`, `MGForm=FX_Orders`). Tab 1: Mongoose Web Client. | `browser_tabs` list (tool output) |
| Tab selected | Tab 1 (Mongoose Web Client). Tab 0 (Web Designer) **not** selected, clicked, or captured. | tool output |
| Session | Usable. No Session Expired modal, no Infor sign-in page, no portal banner, no dialog. | snapshot `f1e1` tree; `t1-01` |
| Identity bar | Operator account (anton.ramos@3mworks.com.ph) \| `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (DEM configuration). | `t1-01` (identity bar) |
| Open Web Client tabs at start | FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables (clean; showing FX_Orders, 1 of 1), FX_Orders (runtime, active, Save disabled). | snapshot |
| Sql Tables surface | The existing Sql Tables tab was open and clean (Save disabled; Update Current Table disabled; no dialog). It was **used**, not reopened. | `t1-01` |
| Caution alert | Not observed in T1. The caution appears when Select Form opens SQL Tables; T1 did not open Select Form (the existing tab was used). | — |
| FX_Orders runtime tab | Left untouched (not selected or acted on). | snapshot |

The "Sql Tables" tab was selected with a view-only tab click (its heading), not a Select Form action.

## Target identity and baseline query (AC-2)

### Query steps (one Filter in Place, one criterion entry, one commit, one F4)

1. Toolbar **Filter in Place** clicked once (FiP). The grid's criteria row appeared with a leftover criterion value `FX_Orders`. The Attributes "Table Name" combobox was also showing `FX_Orders` and had focus. It was **not** typed into.
2. The grid's Table Name criteria cell was clicked once, which made the grid criteria combobox active (value `FX_Orders`).
3. `FX_HelloWorld01` was entered into that grid criteria combobox once (one `browser_type`, replacing `FX_Orders`).
4. Tab committed the criterion (Schema criteria cell became focused; Schema criterion left empty).
5. **Pre-F4 screenshot** `t1-02` captured with the criterion visible.
6. F4 pressed once. Result below.

### Result (exactly one dbo.FX_HelloWorld01 row)

- Status bar: `Table Name (SQL Tables 1 of 1)`.
- One data row: Table Name `FX_HelloWorld01`, Schema `dbo`, Multi-Site unchecked.
- Constraints: `Primary Key` **PK_FX_HelloWorld01** (description `FX_Code`); `Index` **IX_FX_HelloWorld01_RowPointer** (description `RowPointer`).
- Toolbar Save disabled; Update Current Table disabled; no dialog.
- The Attributes Table Name combobox displays `FX_HelloWorld01` with Schema `dbo` (mirrors the retrieved row; it was not typed into).

Evidence: `evidence/EXP-074/t1-02-pre-f4-table-name-criterion-visible.png` (pre-F4); `evidence/EXP-074/t1-03-post-f4-one-dbo-fx-helloworld01-row.png` (post-F4).

### Complete column baseline (Sql Columns, read-only, `SQL Columns 1 of 9`)

Columns... was clicked once. It opened Sql Columns as a separate child tab. No field was edited. Values are from the accessibility snapshot (full text) and the screenshots `t1-04` to `t1-08`. All nine rows share Schema `dbo` and Table `FX_HelloWorld01`.

| Column Id | Column Name | Data Type | System Data Type | Length | Decimal Position | Default Value | Is Nullable | Primary Key | Key Sequence | Is Computed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | FX_Code | nvarchar | nvarchar | 30 | (blank) | (blank) | No (unchecked) | **Yes** | 1 | No |
| 3 | FX_Label | nvarchar | nvarchar | 100 | (blank) | (blank) | **Yes** (checked) | No | (blank) | No |
| 4 | CreatedBy | UsernameType | nvarchar | 128 | (blank) | suser_sname() | No | No | (blank) | No |
| 5 | UpdatedBy | UsernameType | nvarchar | 128 | (blank) | suser_sname() | No | No | (blank) | No |
| 6 | CreateDate | CurrentDateType | datetime | (blank) | (blank) | getdate() | No | No | (blank) | No |
| 7 | RecordDate | CurrentDateType | datetime | (blank) | (blank) | getdate() | No | No | (blank) | No |
| 8 | RowPointer | RowPointerType | uniqueidentifier | (blank) | (blank) | newid() | No | No | (blank) | No |
| 9 | NoteExistsFlag | FlagNyType | tinyint | (blank) | (blank) | (0) | No | No | (blank) | No |
| 10 | InWorkflow | FlagNyType | tinyint | (blank) | (blank) | (0) | No | No | (blank) | No |

- The Definition column is blank for all nine rows.
- The two application columns match the brief's expectation: FX_Code nvarchar 30, not nullable, primary key (key sequence 1); FX_Label nvarchar 100, nullable.
- Column Id values run 2 to 10. Column Id 1 does not appear in the table. Not explained in T1.
- Detail pane for row 1 (FX_Code): Column Id 2, Data Type nvarchar, System Data Type nvarchar, Is Nullable unchecked, Primary Key checked, Length 30, Key Sequence 1, Is Computed unchecked. Is Nullable and Primary Key checkboxes are disabled in the detail (read-only in this view).
- Screenshot coverage: `t1-04` shows the Column Name list (9 rows) and the FX_Code detail. `t1-05` shows the Data Type column for all rows. `t1-06` shows Length, Decimal Position and Default Value (defaults truncated in the image; full text from the snapshot). `t1-07` shows Is Computed and Column Id (2 to 10). `t1-08` shows Is Nullable, Primary Key and Key Sequence (row 1 only for Key Sequence). **System Data Type values for rows 3–9 and the Default text beyond the truncation are read from the accessibility snapshot only; no screenshot shows them in full.**

Evidence: `evidence/EXP-074/t1-04-baseline-columns-initial-view.png`, `t1-05-baseline-columns-scroll-1.png`, `t1-06-baseline-columns-scroll-2.png`, `t1-07-baseline-columns-scroll-3-keys-column-id.png`, `t1-08-baseline-columns-scroll-4-nullable-pk-keyseq.png`.

### FX_Address absence (AC-2)

- Exact comparison: `FX_Address` is not among the nine names.
- Case-insensitive comparison: no name equals `fx_address` in any case, and no name contains `address` in any case (names: FX_Code, FX_Label, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow).
- **Finding: `FX_Address` does not exist on `dbo.FX_HelloWorld01`.** Creating it is authorized (the target is exactly one table and the baseline is complete).

## Decisive evidence per file (what each image shows and does not prove)

| File | Shows | Does not prove |
| --- | --- | --- |
| `t1-01-sqltables-tab-identity-clean-start.png` | Sql Tables tab active; FX_Orders record (1 of 1); toolbar Save greyed; identity bar (operator account, DEM configuration); no dialog. | Table target for this experiment (the record shown is FX_Orders, not the target). |
| `t1-02-pre-f4-table-name-criterion-visible.png` | Filter in Place active; grid Table Name criterion `FX_HelloWorld01`; Schema criterion focused after Tab; Save greyed; no result yet. | That F4 returns one row (checked in `t1-03`). |
| `t1-03-post-f4-one-dbo-fx-helloworld01-row.png` | One row FX_HelloWorld01 / dbo, Multi-Site unchecked; status `Table Name (SQL Tables 1 of 1)`; constraints PK_FX_HelloWorld01 and IX_FX_HelloWorld01_RowP…; Save and Update Current Table greyed. The Table Name cell shows an active editor with its text selected (no edit made). | The database catalogue (UI-level only). |
| `t1-04-baseline-columns-initial-view.png` | Sql Columns tab; Column Name list of nine rows; FX_Code detail (Column Id 2, nvarchar, length 30, PK checked, Is Nullable unchecked, Key Sequence 1); status `SQL Columns 1 of 9`. | Columns beyond the Column Name list (see t1-05 to t1-08). |
| `t1-05-baseline-columns-scroll-1.png` | Data Type column for all nine rows (nvarchar, nvarchar, UsernameType, UsernameType, CurrentDateType, CurrentDateType, RowPointerType, FlagNyType, FlagNyType). | System Data Type, Length and other columns (covered by t1-06 and the snapshot). |
| `t1-06-baseline-columns-scroll-2.png` | Length (30, 100, 128, 128, blank…); Decimal Position blank; Default Value (suser_s…, getdate…, newid(), (0)) truncated. | Full default text (from the snapshot). |
| `t1-07-baseline-columns-scroll-3-keys-column-id.png` | Is Computed unchecked for all nine rows; Column Id 2 through 10. | Primary Key and Is Nullable values (t1-08). |
| `t1-08-baseline-columns-scroll-4-nullable-pk-keyseq.png` | Is Nullable: checked only on row 2 (FX_Label). Primary Key: checked only on row 1 (FX_Code). Key Sequence 1 on row 1 (others blank). | — |

## Acceptance checks (T1)

| AC | Status (T1) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Established.** Sources reviewed; session usable; the existing Sql Tables runtime tab used (clean). | `t1-01`; source list above. | No caution alert appeared (no Select Form opened in T1). No alert text was captured verbatim. Editing scope User not re-checked by a dialog. |
| AC-2 | **Established (UI level).** One visible-criterion query (`t1-02`) returned exactly one `dbo.FX_HelloWorld01` row (`t1-03`); complete baseline recorded; `FX_Address` absent (exact and case-insensitive). | `t1-02` to `t1-08`; snapshot text. | UI-level inventory (not a catalogue query). System Data Type values from the snapshot only. |
| AC-3 to AC-8 | **Not started.** T1 stopped before New by instruction. | — | Later tasks. |

## Action audit (cumulative, T1; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| Tab list (`browser_tabs` list) | 1 | Before the first select. |
| Tab select (`browser_tabs` select, index 1) | 1 | Web Client only. Web Designer (tab 0) not selected. |
| Accessibility snapshots (`browser_snapshot`) | 8 | 7 untargeted; 1 targeted (`f1e247`, a read, not a recovery). No ref-not-found errors. |
| `browser_find` (read-only regex search) | 1 | Row-cell read of the Sql Columns grid. |
| Screenshots (`browser_take_screenshot`) | 8 | `t1-01` to `t1-08`. |
| Clicks (`browser_click`) | 4 | (1) Sql Tables tab heading (view); (2) toolbar Filter in Place; (3) grid Table Name criteria cell; (4) Columns... button. |
| Typed entries (`browser_type`) | 1 | `FX_HelloWorld01` into the grid Table Name criteria combobox only. |
| Key presses | 2 | Tab (criterion commit) ×1; F4 (query) ×1. |
| Waits | 1 | 3 seconds (before the post-F4 snapshot). |
| Pointer moves | 1 | Over the Sql Columns grid, for horizontal scrolling. |
| Wheel scrolls (horizontal, view only) | 4 | deltaX +400, +400, +800, −400. |
| **New (Columns > New)** | **0** | Not invoked (stopped before New). |
| **Save (toolbar or SQL Tables)** | **0** | None. |
| FiP criteria and F4 | 1 FiP, 1 F4 | One Filter in Place entry; one F4. |
| Select Form opens | 0 | Existing Sql Tables tab used. |
| Caution alerts seen / OK | 0 / 0 | None appeared. |
| Close or reopen of Sql Tables / Sql Columns | 0 / 0 | Sql Columns opened as a child tab by Columns...; not closed. |
| IDO, Form, string, property-class, record or column edits | **0 / 0 / 0 / 0 / 0 / 0** | None. |
| Designer actions (Web Designer tab or Designer button) | **0** | Designer tab not touched; no in-frame Designer button clicked. |
| Unload, cache, FormSync, deploy, regenerate, check-in or check-out | **0** | None. |
| Dialogs answered | 0 | None appeared. |
| Portal banner dismissals | 0 | None visible. |
| Browser evaluate / run-code / JavaScript | 0 | None used. |
| Console or network reads (`browser_console_messages`, `browser_network_requests`) | 0 | Not called. (The tool's automatic console counter appeared in outputs; not read.) |
| Direct URL navigation | 0 | None. |
| Refresh, reload, restart | 0 | None. |
| Re-login (session expiry procedure) | **0** | Session stayed usable. |
| Ref-not-found or other browser errors | 0 | None. |

## Worker-written-file inventory (T1)

Written by this worker in T1:

- `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` (created; this record).
- `evidence/EXP-074/t1-01-sqltables-tab-identity-clean-start.png`
- `evidence/EXP-074/t1-02-pre-f4-table-name-criterion-visible.png`
- `evidence/EXP-074/t1-03-post-f4-one-dbo-fx-helloworld01-row.png`
- `evidence/EXP-074/t1-04-baseline-columns-initial-view.png`
- `evidence/EXP-074/t1-05-baseline-columns-scroll-1.png`
- `evidence/EXP-074/t1-06-baseline-columns-scroll-2.png`
- `evidence/EXP-074/t1-07-baseline-columns-scroll-3-keys-column-id.png`
- `evidence/EXP-074/t1-08-baseline-columns-scroll-4-nullable-pk-keyseq.png`

Tool-generated, not worker-authored: browser tool snapshot and console log files under `evidence\playwright\` (for example `page-2026-10-13T09-58-*.yml`, `console-2026-10-13T09-58-*.log`). They were written by the Playwright MCP harness on each snapshot or console event. Not listed as EXP-074 evidence.

No other file was written, edited or deleted in T1.

## Final state (end of T1)

- Mongoose Web Client tab selected (tab 1). Web Designer tab (tab 0) untouched.
- Active tab: **Sql Columns** (child of Sql Tables), `SQL Columns 1 of 9`, FX_HelloWorld01. Clean: toolbar Save disabled. The Column Name combobox is active with `FX_Code` (text not edited).
- Sql Tables tab (open, behind): Filter in Place still active; grid criterion `FX_HelloWorld01`; one row `FX_HelloWorld01` / `dbo`; Save disabled; Update Current Table disabled.
- FX_Items, Property Classes, IDO Projects, IDOs and FX_Orders tabs open and unchanged.
- No dialog, no unsaved-change prompt. No column has been added.

_The T1 final-state "next permitted step" is superseded. The current next step is in "Next permitted step (after T6; NOT started)" below._

## T2 — unsaved FX_Address configuration (AC-3), blocked at Data Type (cycle 1; task message `e20cd9c7-9374-47a8-90d7-57350cc6d794`)

Scope: the AC-3 unsaved configuration only. No Save, no close or reopen, no runtime open, no Designer action. Worker session `9f8c3e34-b35e-493e-b552-aec77a8844ab`.

### Inherited state (verified before New)

- Tab list (before the first select): tab 0 Web Designer (`mode=designer`), tab 1 Mongoose Web Client. The list's "current" marker showed tab 0 (Designer) at this point; the worker did not act on the Designer. Tab 1 was then selected (succeeded); tab 0 was not selected, clicked or captured.
- Web Client identity bar: operator account \| `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No Session Expired modal, no Infor sign-in page, no portal banner, no dialog.
- Sql Columns (child of Sql Tables) active, status `SQL Columns 1 of 9`, Save disabled, nine rows matching the T1 baseline (FX_Code, FX_Label, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow; Column Ids 2–10).
- Parent Sql Tables (view-only tab click, verified): status `Table Name (SQL Tables 1 of 1)`; the one row FX_HelloWorld01 / dbo; constraints PK_FX_HelloWorld01 and IX_FX_HelloWorld01_RowPointer; Save and Update Current Table disabled. Evidence `t2-01`.
- No `FX_Address` existed before New (T1 absence result; no column with that name in the nine-row inventory).

### Steps

1. Sql Tables tab view-selected (tab heading click), then Sql Columns tab view-selected (tab heading click). No state change.
2. **Columns > New, invoked once** (toolbar New in Sql Columns). Result: status `SQL Columns 2 of 10`; Save enabled; a blank row appeared at display position 2 (between FX_Code and FX_Label), with Schema `dbo` and Table `FX_HelloWorld01` and every other field blank. Note: in EXP-059 the unsaved row went to display position 4; here position 2. Observed only.
3. **Column Name:** `FX_Address` entered by one plain fill into the Column Name combobox. Readback: the combobox reads `FX_Address`; the grid's new row reads `FX_Address dbo FX_HelloWorld01` (find readback). No Tab was pressed for this field.
4. **Data Type:** the Open trigger was clicked once. The list opened as an alphabetical list (ABIdType, ABThemeType, … DateTimeType, DateType, decimal, DefaultCharType … GenericKeyType). The worker scrolled it by wheel (view only) to the D section (`decimal` visible) and then to F/G. **The list ends at `GenericKeyType`. The rendered listbox holds exactly 200 options (accessibility snapshot count), and no nvarchar option was rendered** (find "nvarchar" and a regex for the nvarchar option returned no option; the saved snapshot `evidence/playwright/page-2026-10-13T10-04-14-369Z.yml` lists the options and confirms the cut at GenericKeyType). The list was not closed.
   - Typed prefix `nvar` (one fill into the open Data Type combobox): the combobox showed `nvar`; the list did not filter (still the 200 unfiltered options).
   - Ctrl+A and Delete cleared the text (two key presses); then `nvarchar` was typed slowly (one key-event typing action). The combobox showed `nvarchar`; **the list still did not filter**; the list remained open with the same 200 options.
   - The brief forbids closing the list with Escape and allows closing only by selecting. No option was selected: selecting any rendered option would commit a wrong Data Type. Clicking elsewhere or toggling the Open trigger would close the list without a selection, which the brief does not allow. The list was therefore left open.
   - Data Type therefore **remains unselected**: the grid's new row shows no data type, and the combobox text `nvarchar` is typed text, not a selected list value.
   - Contrast with EXP-059 (for the coordinator): EXP-059 found the same missing-entry pattern with `binary` near the top and no `varbinary` after the G entries. Its successful route was a typed wildcard `varb*` entered while the dropdown was **closed**, then one Open-trigger click, which showed exactly one entry, `varbinary`. That route requires the list to be closed first, which this brief does not permit except by selecting.
4. Length, Is Nullable and the Data Type selection were **not** set (see the stop below). Tab was not pressed after Data Type.
5. **Stop before Save.** No Save was clicked. No Escape was pressed. No second New.

### Pre-Save readback (as observed; AC-3 NOT met)

| Field | Observed (pre-Save) | Required by AC-3 |
| --- | --- | --- |
| Row count | `SQL Columns 2 of 10` (10 rows: 9 original + 1 new) | 10 (9 original + FX_Address) |
| Dirty state | Save enabled (dirty) | Unsaved (yes) |
| Column Name | `FX_Address` (combobox and grid readback) | FX_Address — **met** |
| Schema / Table | `dbo` / `FX_HelloWorld01` | dbo / FX_HelloWorld01 — met |
| Data Type | **blank** (combobox shows typed text `nvarchar`, no list selection) | nvarchar selected from the list — **NOT met** |
| Length | **blank** | 150 — **NOT met** |
| Is Nullable | **unchecked** (enabled) | checked — **NOT met** |
| System Data Type | **blank** (not populated before Save) | populated only after Save (observed in EXP-059) |
| Column Id | **blank** (not assigned before Save) | blank before Save |
| Primary Key | unchecked, disabled | unchecked |
| Key Sequence / Default / Decimal | blank | blank |
| Existing 9 rows | unchanged. Values match the T1 baseline on every displayed field (FX_Code nvarchar 30 PK; FX_Label nvarchar 100 nullable; CreatedBy, UpdatedBy UsernameType nvarchar 128 suser_sname(); CreateDate, RecordDate CurrentDateType datetime getdate(); RowPointer RowPointerType uniqueidentifier newid(); NoteExistsFlag, InWorkflow FlagNyType tinyint (0); Column Ids 2–10). | unchanged — met (readback) |

**Default values for a new row (observed):** Data Type, Length, Decimal Position, Default Value, Key Sequence blank; Is Nullable unchecked; Primary Key disabled and unchecked; Is Computed disabled and unchecked.

### Evidence (T2)

- `evidence/EXP-074/t2-01-inherited-sqltables-target-identity-clean.png`: Sql Tables tab, `Table Name (SQL Tables 1 of 1)`, FX_HelloWorld01 / dbo, constraints, Save disabled. Shows the parent target identity; does not show the Sql Columns child state.
- `evidence/EXP-074/t2-02-data-type-list-opened.png`: Sql Columns, `SQL Columns 2 of 10`, Column Name `FX_Address`, Schema dbo, Table FX_HelloWorld01, Column Id blank, Data Type empty with the first 12 list options (ABIdType … ApplicationFeatureNameType) open. Shows the new-row identity and the blank configuration. Does not show Length, Is Nullable or the rest of the list.
- `evidence/EXP-074/t2-03-data-type-list-scrolled.png`: list at D section (DateTimeType … DocumentTypeType), `decimal` visible. Shows scroll position only.
- `evidence/EXP-074/t2-04-data-type-list-n-section-search.png`: list at F/G (FormNameOrCaptionType … GenericKeyType). Named "n-section-search" but the N section was not reached; the list ends here. Does not show an nvarchar option.
- `evidence/EXP-074/t2-05-data-type-list-n-section-scroll.png`: list at the end (GenericKeyType). Same list state as t2-04; shows the list end.
- `evidence/EXP-074/t2-06-data-type-prefix-nvar-filtered-list.png`: Data Type combobox text `nvar`, list still unfiltered (GenericDate highlighted by pointer hover). Shows the filter did not apply.
- `evidence/EXP-074/t2-07-data-type-nvarchar-typed-list-state.png`: Data Type combobox text `nvarchar`, list still open and unfiltered; Data Type not selected. Shows the blocker state; does not show a selected nvarchar.

Visual check note (worker): t2-04 and t2-05 show the same bottom of the list, so the scroll did reach the end. The `nvarchar` name is not in either image.

### Action audit (T2 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| Tab list (`browser_tabs` list) | 1 | Before the first select. |
| Tab select (index 1, Web Client) | 1 | Designer (tab 0) not selected. |
| Accessibility snapshots (`browser_snapshot` calls) | 5 | After the tab list; after the tab select; after the Sql Tables view; after the Sql Columns view; after New. No targeted snapshot. |
| Tool-written snapshot files after actions (not `browser_snapshot` calls) | — | The browser tool writes a `evidence\playwright\page-…yml` file after each action (for example `page-2026-10-13T10-04-14-369Z.yml` after the slow Data Type typing). Not counted as worker snapshots; the worker read one of them to count the listbox options. |
| `browser_find` (read-only) | 4 | "Data Type:" ×2; regex for nvarchar option (no match); text "nvarchar" (grid rows and list). |
| Clicks (`browser_click`) | 4 | (1) Sql Tables tab heading (view); (2) Sql Columns tab heading (view); (3) **New ×1**; (4) Data Type Open trigger ×1 (opened the list). |
| Typed entries (`browser_type`) | 3 | (1) Column Name `FX_Address` (one plain fill); (2) Data Type `nvar` (fill, list open, no filter); (3) Data Type `nvarchar` (slow key events, list open, no filter). |
| Key presses | 2 | Ctrl+A; Delete (clearing the Data Type text). |
| Escape presses | **0** | None. |
| Mouse moves | 1 | Over the Data Type list (view). |
| Wheel scrolls (list, view only) | 3 | deltaY 2000, 5000, 6000. |
| Screenshots (`browser_take_screenshot`) | 7 | `t2-01` to `t2-07`. |
| Waits | 0 | None. |
| **New (Columns > New)** | **1** (cumulative 1) | Invoked once; not retried. |
| **Save (toolbar or SQL Tables)** | **0** (cumulative 0) | Not pressed. |
| Column Name fill | 1 | Plain fill; readback FX_Address. |
| Data Type selected from the list | **0** | Not achieved (see Steps 3–4). |
| Length set / Is Nullable checked | **0 / 0** | Not reached (blocked at Data Type). |
| Close or reopen of Sql Tables / Sql Columns | 0 / 0 | Both tabs left open. |
| Select Form opens | 0 | None. |
| Runtime FX_HelloWorld01 open / FX_HelloWorld01 runtime actions | 0 / 0 | None. |
| IDO, Form, string, property-class, record or existing-column edits | 0 | None. |
| Designer actions | 0 | Web Designer tab not touched. |
| Unload, cache, FormSync, deploy, regenerate, check-in or check-out | 0 | None. |
| Dialogs answered | 0 | None appeared. |
| Re-login | 0 | Session stayed usable. |
| Browser evaluate / run-code / JavaScript | 0 | None. |
| Refresh, reload, restart, direct navigation | 0 | None. |
| Ref-not-found or other browser errors | 0 | None. Targeted snapshot count 0. |
| Recovery snapshot / corrected inspection | 0 / 0 | No ref error occurred, so the recovery allowance was not used. |

### Cumulative action audit (T1 + T2)

| Action | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| New | 0 | 1 | **1** |
| Save | 0 | 0 | **0** |
| Sql Tables / Sql Columns close or reopen | 0 | 0 | **0 / 0** |
| Select Form | 0 | 0 | 0 |
| Runtime opens / loads | 0 | 0 | 0 / 0 |
| Tab selects (Web Client) | 1 | 1 | 2 |
| Tab lists | 1 | 1 | 2 |
| Screenshots | 8 | 7 | 15 |
| Typed entries | 1 | 3 | 4 |
| Escape presses | 0 | 0 | 0 |
| IDO / Form / string / record / existing-column edits | 0 | 0 | 0 |
| Designer actions | 0 | 0 | 0 |
| Unload / cache / FormSync / deploy / regenerate | 0 | 0 | 0 |
| Re-login | 0 | 0 | 0 |

### Worker-written-file inventory (T2)

Written by this worker in T2:
- `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` (edited: status header; this T2 section; cumulative audit; knowledge state).
- `evidence/EXP-074/t2-01-inherited-sqltables-target-identity-clean.png`
- `evidence/EXP-074/t2-02-data-type-list-opened.png`
- `evidence/EXP-074/t2-03-data-type-list-scrolled.png`
- `evidence/EXP-074/t2-04-data-type-list-n-section-search.png`
- `evidence/EXP-074/t2-05-data-type-list-n-section-scroll.png`
- `evidence/EXP-074/t2-06-data-type-prefix-nvar-filtered-list.png`
- `evidence/EXP-074/t2-07-data-type-nvarchar-typed-list-state.png`

Tool-generated (not worker-authored): Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T10-02-*`, `page-2026-10-13T10-03-*`, `page-2026-10-13T10-04-14-369Z.yml`, `console-2026-10-13T10-02-49-*.log`). The worker read `page-2026-10-13T10-04-14-369Z.yml` (Read and Grep) to count the listbox options; that is a read, not a write.

No other file was written.

### Final browser state (end of T2)

- Mongoose Web Client tab selected (tab 1). Web Designer tab (tab 0) untouched.
- Active: Sql Columns, status `SQL Columns 2 of 10`, unsaved (Save enabled). New row: Column Name FX_Address, Schema dbo, Table FX_HelloWorld01; Data Type blank with its combobox text `nvarchar` (typed, not selected); Length blank; Is Nullable unchecked; System Data Type and Column Id blank.
- **Data Type combobox list is OPEN** (200 unfiltered options). It was not closed with Escape and not closed by any selection, to honour the brief's close rule.
- Sql Tables tab behind it (clean, FX_HelloWorld01 1 of 1). Save disabled on Sql Tables; Save enabled on Sql Columns (dirty, unsaved row).
- No dialog. No browser-native prompt. No Save performed.

### Blocker (for the coordinator / operator)

1. **Data Type cannot be selected as `nvarchar` under the brief's rules.** The Data Type list renders only 200 options (A through GenericKeyType); nvarchar is not among them. Typed prefixes (`nvar`, `nvarchar`) did not filter the open list. The brief permits closing a list only by selecting an option and forbids Escape, so the list is left open. Selecting a wrong type would be an error, and no close-by-selection exists for `nvarchar`.
2. **Decision needed.** Options: (a) authorize one non-Escape way to close the open list without selecting (for example, the Data Type Open trigger toggle, or a click outside the combobox), so that a filtered list can be opened as in EXP-059 (typed `nvarchar` with the list closed, then one Open-trigger click, then select the single entry); or (b) authorize the operator to close the list in the Mongoose UI, then the worker resumes at Data Type; or (c) accept a different selection route the operator names.
3. **Not done:** Data Type selection, Length 150, Is Nullable, verification of the four values, Save (AC-4), close/reopen (AC-5), recovered inventory (AC-6), runtime check (AC-7), and the final report (AC-8).

Acceptance status after T2: **AC-1** established (T1 identity; T2 inherited identity `t2-01`). **AC-2** established (T1; T2 re-confirmed the nine-row baseline and the parent target). **AC-3 NOT MET** (Column Name and row present; Data Type, Length and Is Nullable not set; list open). **AC-4 to AC-8 not started.**

## T3 — AC-3 completion: Data Type recovery, Length, Is Nullable, pre-Save verification (cycle 3; task message `7843abcc-8a67-4eec-b1e7-674b064df0c0`)

Scope: resume from the inherited dirty Sql Columns state under the operator's restricted Data Type recovery. Stop before Save. No New, no Save, no close or reopen, no Select Form, no runtime open, no Designer action, no Escape. Worker session `9f8c3e34-b35e-493e-b552-aec77a8844ab`.

### Inherited state (verified first)

- Tab list (before the first select): tab 0 Web Designer (`mode=designer`) marked current; tab 1 Mongoose Web Client. A first snapshot taken after the list reported the Designer page URL, as in T2. The worker did not act on it; tab 1 was selected (succeeded); tab 0 was not selected, clicked or captured.
- After selecting tab 1: Sql Columns active; status `Data Type (SQL Columns 2 of 10)`; Save enabled (dirty); one FX_Address row (find readback `FX_Address dbo FX_HelloWorld01`, unique); Data Type combobox expanded with typed text `nvarchar` and the list open; Is Nullable unchecked; Length blank; Column Id blank; no dialog. Parent Sql Tables target (`FX_HelloWorld01` / dbo, `1 of 1`) was not re-read in T3; T2 recorded it (`t2-01`).
- Evidence: `t3-01-inherited-dirty-state-datatype-list-open.png`.

### Restricted Data Type recovery (in the operator's order)

1. **List closed by its Open trigger toggle, once** (no Escape, no outside click). Result: the list closed. Readback: the combobox still displays `nvarchar` (typed text); System Data Type blank; Length blank. **Closing committed no selection visible in the readback** (the field text is unchanged and no type was selected). Evidence: `t3-02-after-trigger-toggle-readback.png`.
2. **Ctrl+A** (one key press) with the combobox active; then **typed `nvarchar*`** (one fill) replacing the text. The combobox then showed `nvarchar*`.
3. **Open trigger clicked once.** The filtered list showed **exactly one entry: `nvarchar`**. Evidence: `t3-03-datatype-nvarchar-star-filtered-list.png` (combobox `nvarchar*`; one option `nvarchar`).
4. **Exact option selected once** (native click on the option `nvarchar`, a single option found by read-only find). **Readback:** the combobox reads `nvarchar` with no `*`; the list is closed; the grid row for FX_Address reads `FX_Address dbo FX_HelloWorld01 nvarchar` (grid Data Type column = nvarchar, which is a committed value, not typed text); the Length field became editable. Evidence: `t3-04-datatype-after-option-select-readback.png`.
   - The selection is therefore confirmed: Data Type = nvarchar selected from the list.
   - No alternate prefix, no other option, no second Open, no second New was used.

### Length and Is Nullable

5. **Length:** `150` entered by one fill into the Length textbox; **Tab** committed it. Readback: Length `150`.
6. **Is Nullable:** the visible label `Is Nullable` clicked once. Readback (find): checkbox `Is Nullable` **checked**; the grid row for FX_Address shows Is Nullable checked (`checkbox checked` in the row text).

### Pre-Save verification (AC-3, observed)

| Field | Observed before Save | Required | Result |
| --- | --- | --- | --- |
| Column Name | `FX_Address` (combobox; grid row) | FX_Address | met |
| Data Type | `nvarchar` (combobox; grid row `nvarchar`; selected from list) | nvarchar, from the list | met |
| Length | `150` (textbox; grid row `nvarchar 150`) | 150 | met |
| Is Nullable | checked (checkbox checked; grid row checked) | checked | met |
| Primary Key | unchecked, disabled | not a key | met |
| Schema / Table | dbo / FX_HelloWorld01 | dbo / FX_HelloWorld01 | met |
| System Data Type | blank (populates on Save, EXP-059) | blank before Save | as expected |
| Column Id | blank (assigned on Save/reopen, EXP-059) | blank before Save | as expected |
| Default Value / Decimal / Key Sequence | blank | blank | as expected |
| Row count | 10 (`SQL Columns 2 of 10`; grid rows: 9 originals + 1 FX_Address; one FX_Address row) | 10 | met |
| Dirty state | Save enabled (dirty) | unsaved | met |
| Dialog | none | none | met |

**Existing nine rows compared against the T1 baseline (grid row text, read-only):**

| Column Id | Column Name | Data Type | System Data Type | Length | Is Nullable | Primary Key | Key Sequence | Is Computed | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | FX_Code | nvarchar | nvarchar | 30 | no | yes | 1 | no | unchanged |
| 3 | FX_Label | nvarchar | nvarchar | 100 | yes | no | (blank) | no | unchanged |
| 4 | CreatedBy | UsernameType | nvarchar | 128 | no | no | (blank) | no | unchanged (default suser_sname()) |
| 5 | UpdatedBy | UsernameType | nvarchar | 128 | no | no | (blank) | no | unchanged (default suser_sname()) |
| 6 | CreateDate | CurrentDateType | datetime | (blank) | no | no | (blank) | no | unchanged (default getdate()) |
| 7 | RecordDate | CurrentDateType | datetime | (blank) | no | no | (blank) | no | unchanged (default getdate()) |
| 8 | RowPointer | RowPointerType | uniqueidentifier | (blank) | no | no | (blank) | no | unchanged (default newid()) |
| 9 | NoteExistsFlag | FlagNyType | tinyint | (blank) | no | no | (blank) | no | unchanged (default (0)) |
| 10 | InWorkflow | FlagNyType | tinyint | (blank) | no | no | (blank) | no | unchanged (default (0)) |

- Column Ids 2–10 are unchanged. FX_Code keeps its primary key (sequence 1) and FX_Label keeps nullable. All nine original rows show no edit.
- The T1 baseline was read from the Sql Columns grid; the rows above were re-read through the accessibility tree and match it on every field shown.
- The rendered row text does not show System Data Type for the unsaved row; the detail pane shows it blank.
- The T1 baseline's Default Value and Decimal Position columns were not re-read in T3 (not visible in the current horizontal view); the T1 values are recorded in the T1 table above.

### Generated SQL and native response

- No Save was pressed. No SQL or DDL was displayed by the UI (none is generated before Save in the observed UI). Nothing was executed or pasted.

### Evidence (T3)

- `evidence/EXP-074/t3-01-inherited-dirty-state-datatype-list-open.png`: inherited dirty state: Column Name FX_Address; Data Type typed `nvarchar` with the list open; Is Nullable unchecked; Save enabled; status `Data Type (SQL Columns 2 of 10)`. Proves the inherited state. Does not prove the parent target (T2 `t2-01`).
- `evidence/EXP-074/t3-02-after-trigger-toggle-readback.png`: list closed; Data Type `nvarchar` (typed text, no selection visible); System Data Type and Length blank; Is Nullable unchecked. Proves the list closed without a visible value commit. Does not prove the absence of hidden state.
- `evidence/EXP-074/t3-03-datatype-nvarchar-star-filtered-list.png`: combobox `nvarchar*`; the open list shows exactly one option, `nvarchar`. Proves the filtered list. Does not prove the selection (see t3-04).
- `evidence/EXP-074/t3-04-datatype-after-option-select-readback.png`: Data Type `nvarchar` (no `*`), list closed, Length field editable. With the grid row (`FX_Address dbo FX_HelloWorld01 nvarchar`) this proves the selection. Does not show Length or Is Nullable.
- `evidence/EXP-074/t3-05-pre-save-fx-address-complete-configuration.png`: decisive pre-Save image. Shows Column Name FX_Address, Schema dbo, Table FX_HelloWorld01, Data Type nvarchar, Is Nullable checked, Length 150, System Data Type and Column Id blank, grid row 2 Is Nullable checked, status `Is Nullable (SQL Columns 2 of 10)`. Does not show the nine original columns' values in full (the grid is scrolled horizontally; their values are from the read-only accessibility readback above).

### Action audit (T3 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| Tab list (`browser_tabs` list) | 1 | Before the first select. |
| Tab select (index 1, Web Client) | 1 | Designer (tab 0) not selected. |
| `browser_snapshot` calls | 1 | One fresh snapshot after the list (persisted to file; the output was too large to inline). Reading the persisted file was denied; state was then read through targeted finds. |
| Clicks (`browser_click`) | 4 | (1) Data Type Open trigger toggle (close); (2) Open trigger (open the filtered list); (3) the `nvarchar` option (select); (4) the Is Nullable label. |
| Typed entries (`browser_type`) | 2 | (1) `nvarchar*` into the Data Type combobox; (2) `150` into the Length textbox (fill). |
| Key presses | 2 | Ctrl+A (replace the Data Type text); Tab (commit Length). |
| Escape presses | **0** | None. |
| Outside clicks used to close a list | **0** | None. |
| Mouse moves / wheel scrolls | 0 / 0 | None. |
| Waits | 0 | None. |
| `browser_find` (read-only) | 15 | Used for refs, readbacks and the nine-row comparison. |
| Screenshots (`browser_take_screenshot`) | 5 | `t3-01` to `t3-05`. |
| **New (Columns > New)** | **0 in T3** (cumulative **1**) | Not invoked again. |
| **Save (toolbar or SQL Tables)** | **0** (cumulative **0**) | Not pressed; stopped before Save. |
| Column Name / Data Type / Length / Is Nullable changes | 0 / 1 / 1 / 1 | Data Type selected from the list once; Length set once; Is Nullable checked once. |
| Close or reopen of Sql Tables / Sql Columns | 0 / 0 | Both left open. |
| Select Form opens | 0 | None. |
| Runtime FX_HelloWorld01 open / loads | 0 / 0 | None. |
| IDO, Form, string, property-class, record or existing-column edits | 0 | None. |
| Designer actions | 0 | Web Designer tab not touched. |
| Unload, cache, FormSync, deploy, regenerate, check-in or check-out | 0 | None. |
| Dialogs answered | 0 | None appeared. |
| Re-login | 0 | Session stayed usable. |
| Browser evaluate / run-code / JavaScript | 0 | None. |
| Refresh, reload, restart, direct navigation | 0 | None. |
| Ref-not-found or other browser errors | 0 | None. Recovery snapshot 0, corrected inspection 0. |

### Cumulative browser action audit (T1 + T2 + T3; exact counts)

| Action | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| New (Columns > New) | 0 | 1 | 0 | **1** |
| Save | 0 | 0 | 0 | **0** |
| Sql Tables / Sql Columns close or reopen | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Select Form opens | 0 | 0 | 0 | 0 |
| Runtime opens / loads | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Tab lists | 1 | 1 | 1 | 3 |
| Tab selects (Web Client) | 1 | 1 | 1 | 3 |
| Clicks | 4 | 4 | 4 | 12 |
| Typed entries | 1 | 3 | 2 | 6 |
| Key presses (Tab, F4, Ctrl+A, Delete) | 2 | 2 | 2 | 6 |
| Escape presses | 0 | 0 | 0 | **0** |
| Mouse moves | 1 | 1 | 0 | 2 |
| Wheel scrolls | 4 | 3 | 0 | 7 |
| `browser_snapshot` calls | 8 | 5 | 1 | 14 |
| `browser_find` calls | 1 | 4 | 15 | 20 |
| Screenshots | 8 | 7 | 5 | 20 |
| IDO / Form / string / property-class / record / existing-column edits | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deploy / regenerate / check-in / check-out | 0 | 0 | 0 | **0** |
| Re-login | 0 | 0 | 0 | **0** |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | 0 | 0 | **0** |

### Worker-written-file inventory (T3)

Written by this worker in T3:
- `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` (edited: status header; this T3 section; cumulative audit; knowledge state).
- `evidence/EXP-074/t3-01-inherited-dirty-state-datatype-list-open.png`
- `evidence/EXP-074/t3-02-after-trigger-toggle-readback.png`
- `evidence/EXP-074/t3-03-datatype-nvarchar-star-filtered-list.png`
- `evidence/EXP-074/t3-04-datatype-after-option-select-readback.png`
- `evidence/EXP-074/t3-05-pre-save-fx-address-complete-configuration.png`

Tool-generated (not worker-authored): Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T10-12-*.yml`, `console-2026-10-13T10-11-51-*.log`). The worker did not read them as evidence (one read was denied).

No other file was written.

### Final browser state (end of T3)

- Mongoose Web Client tab selected (tab 1). Web Designer tab (tab 0) untouched.
- Active: Sql Columns, status `Is Nullable (SQL Columns 2 of 10)`, dirty (Save enabled), unsaved.
- The Data Type list is **closed**. Data Type `nvarchar` (selected from the list). Length `150`. Is Nullable checked.
- Sql Tables (behind, parent, T2 identity `1 of 1`) not re-read in T3; left open.
- No dialog. No browser-native prompt. No Save performed.

### Acceptance status after T3

- **AC-1** established (T1 identity; T2 `t2-01`; T3 `t3-01`).
- **AC-2** established (T1 baseline and absence; re-confirmed in T2 and T3 via the same nine rows).
- **AC-3 MET (observed, UI level).** Exactly one unsaved FX_Address row; Data Type nvarchar selected from the list (grid row `nvarchar`); Length 150; Is Nullable checked; the nine original rows unchanged on the readable fields. Evidence: `t3-04`, `t3-05`, and the readbacks above.
- **AC-4 to AC-8 NOT STARTED.** Stopped before Save by instruction. Next permitted step (separately authorized): one toolbar Save of this configuration, then the native response and System Data Type readback.

Limits for AC-3: the Data Type selection is confirmed by the combobox readback and the grid row; I did not inspect a hidden selected value. The "closing the list committed no value" finding (step 1) is a visual and readback inference only; the list was closed, the field text stayed `nvarchar`, and System Data Type stayed blank, which suggests no commit but does not prove it. The Length and Is Nullable grid values were read from the accessibility rows, not from full-width screenshots.

## T4 — AC-4: single ordinary toolbar Save and post-Save readback (cycle 4; task message `7cd2927a-458c-4b56-a29a-ec6e51988978`)

Scope: one toolbar Save, then the post-Save state only. No New, no second Save, no close or reopen, no Select Form, no runtime open, no Designer action, no Escape, no generated SQL run or applied. Worker session `9f8c3e34-b35e-493e-b552-aec77a8844ab`.

### Gate before Save (verified; material differences would have stopped the task)

- Tab list (before the first select): tab 0 Web Designer (`mode=designer`) marked current; tab 1 Mongoose Web Client. Tab 1 was selected (succeeded). Tab 0 was not selected, clicked or captured.
- Fresh snapshot (depth 12) after the select: Sql Columns active; status `Is Nullable (SQL Columns 2 of 10)`; Table Name combobox `FX_HelloWorld01`, Schema `dbo`; Save enabled; no dialog. Parent-target identity was verified in T2 (`t2-01`, Sql Tables `1 of 1`, FX_HelloWorld01 / dbo) and not re-read in T4 (the parent tab was not selected).
- Gate readbacks (finds): one FX_Address row, `FX_Address dbo FX_HelloWorld01 nvarchar 150 checkbox checked checkbox not checked checkbox not checked`; Data Type combobox `nvarchar`; Is Nullable checked; Length `150`; System Data Type and Column Id blank; Primary Key unchecked (disabled).
- Gate for the nine original rows (finds): FX_Code (`nvarchar 30`, not nullable, PK 1, Column Id 2); FX_Label (`nvarchar 100`, nullable, Column Id 3); CreatedBy, UpdatedBy (`UsernameType nvarchar 128 suser_sname()`, Column Ids 4, 5); CreateDate, RecordDate (`CurrentDateType datetime getdate()`, Column Ids 6, 7); RowPointer (`RowPointerType uniqueidentifier newid()`, Column Id 8); NoteExistsFlag, InWorkflow (`FlagNyType tinyint (0)`, Column Ids 9, 10). All unchanged against T1 and T3.
- No dialog, no prompt, no error text found (find on alert, dialog, error, warning, confirm, prompt: no matches).
- Gate result: **passed**. No material difference from T3.

### The single Save

- **Save clicked once** (toolbar Save, ref from the gate snapshot). No retry. No second Save.
- Click returned with no error. No timeout, no ref error.
- **Native response:** no success text, no toast, no confirmation prompt, no informational message, no error, no validation message and no DDL/SQL text appeared in the screenshot (`t4-01`) or the accessibility finds. No save-changes or destructive or data-conversion confirmation appeared. Nothing was approved.
- **Displayed generated SQL:** none displayed in the UI. Nothing was run, pasted or applied.
- Settle: one wait of 3 seconds (no action), then finds and one screenshot.

### Post-Save state (observed)

| Item | Observed after Save | Expected | Result |
| --- | --- | --- | --- |
| Save toolbar state | **disabled** (find: `button "Save" [disabled]`, read after a 3-second settle; a Save tooltip appeared in an earlier find result after the click) | disabled | met |
| Error / dialog | none found | none | met |
| FX_Address Column Name | `FX_Address` | FX_Address | met |
| FX_Address Schema / Table | `dbo` / `FX_HelloWorld01` | dbo / FX_HelloWorld01 | met |
| FX_Address Data Type | `nvarchar` (combobox and grid) | nvarchar | met |
| FX_Address **System Data Type** | **`nvarchar`** (textbox, populated after Save) | populated | met |
| FX_Address Length | `150` | 150 | met |
| FX_Address Is Nullable | **checked** | checked | met |
| FX_Address Primary Key | unchecked (disabled) | not a key | met |
| FX_Address Key Sequence / Default / Decimal / Is Computed | blank / blank / blank / unchecked | blank / blank / blank / unchecked | met |
| FX_Address **Column Id** | **blank** in the detail (textbox empty) | blank before the reopen (EXP-059 pattern: assigned on reopen) | as expected; not yet visible |
| Row count | 10 (`Is Nullable (SQL Columns 2 of 10)`; grid rows 1–10) | 10 | met |
| Original 9 rows | identical to the pre-Save readback on every readable field (see the table in the T3 section) | unchanged | met |
| Dirty state | clean (Save disabled) | clean | met |

Limits: the detail pane's Column Id is blank for FX_Address. In EXP-059 it was also blank after Save and became visible only after the reopen. The Column Id is therefore not established by this task. The "clean" finding is from the Save button state, not from a database read.

### Evidence (T4)

- `evidence/EXP-074/t4-01-post-save-state-fx-address-readback.png`: post-Save state. Shows Column Name FX_Address, Schema dbo, Table FX_HelloWorld01, Column Id blank, Data Type nvarchar, System Data Type nvarchar, Is Nullable checked, Length 150, Primary Key unchecked, the grid (rows 1–10) with the Is Nullable column (rows 2 and 3 checked), status `Is Nullable (SQL Columns 2 of 10)`, and the greyed toolbar Save icon. No dialog, no error text, no SQL text. Does NOT prove the database state; does not show the full nine-row grid values (they are from the accessibility readback above).
- The pre-Save configuration image is `evidence/EXP-074/t3-05-pre-save-fx-address-complete-configuration.png` (T3, same configuration). Not re-captured in T4.

### Action audit (T4 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| Tab list (`browser_tabs` list) | 1 | Before the first select. |
| Tab select (index 1, Web Client) | 1 | Designer (tab 0) not selected. |
| `browser_snapshot` calls | 1 | Gate snapshot (depth 12). No targeted snapshot. |
| `browser_find` (read-only) | 7 | Gate: 2. Post-Save: 5 (Save state after wait; alert/dialog/error scan; post-Save row readback; System Data Type; Column Id and Save disabled). |
| **Clicks (`browser_click`)** | **1** | **Toolbar Save ×1.** |
| **Save (toolbar)** | **1** (cumulative **1**) | Not retried. |
| **New** | **0** in T4 (cumulative **1**) | Not invoked. |
| Typed entries | 0 | None. |
| Key presses | 0 | None. Escape 0. |
| Waits | 1 | 3 seconds, no action (post-Save settle). |
| Screenshots (`browser_take_screenshot`) | 1 | `t4-01`. |
| Close or reopen of Sql Tables / Sql Columns | 0 / 0 | Not performed. |
| Select Form opens | 0 | None. |
| Runtime FX_HelloWorld01 open / loads | 0 / 0 | None. |
| IDO, Form, string, property-class, record or existing-column edits | 0 | None. |
| Designer actions | 0 | Web Designer tab not touched. |
| Unload, cache, FormSync, deploy, regenerate, check-in, check-out | 0 | None. |
| Dialogs answered | 0 | None appeared. |
| Re-login | 0 | Session stayed usable. |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | None. |
| Ref-not-found or other browser errors | 0 | None. Recovery snapshot 0; corrected inspection 0. |

### Cumulative browser action audit (T1 + T2 + T3 + T4; exact counts)

| Action | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| New (Columns > New) | 0 | 1 | 0 | 0 | **1** |
| Save (toolbar) | 0 | 0 | 0 | 1 | **1** |
| Sql Tables / Sql Columns close or reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Select Form opens | 0 | 0 | 0 | 0 | **0** |
| Runtime opens / loads | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Tab lists | 1 | 1 | 1 | 1 | **4** |
| Tab selects (Web Client) | 1 | 1 | 1 | 1 | **4** |
| Clicks | 4 | 4 | 4 | 1 | **13** |
| Typed entries | 1 | 3 | 2 | 0 | **6** |
| Key presses (Tab, F4, Ctrl+A, Delete) | 2 | 2 | 2 | 0 | **6** |
| Escape presses | 0 | 0 | 0 | 0 | **0** |
| Mouse moves | 1 | 1 | 0 | 0 | **2** |
| Wheel scrolls | 4 | 3 | 0 | 0 | **7** |
| Waits | 1 | 0 | 0 | 1 | **2** |
| `browser_snapshot` calls | 8 | 5 | 1 | 1 | **15** |
| `browser_find` calls | 1 | 4 | 15 | 7 | **27** |
| Screenshots | 8 | 7 | 5 | 1 | **21** |
| IDO / Form / string / property-class / record / existing-column edits | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deploy / regenerate / check-in / check-out | 0 | 0 | 0 | 0 | **0** |
| Re-login | 0 | 0 | 0 | 0 | **0** |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | 0 | 0 | 0 | **0** |

Note: T1 snapshot count is as recorded in T1 (8). The earlier cumulative figures for snapshots, finds and screenshots were recorded in the T1–T3 tables and are carried forward unchanged.

### Worker-written-file inventory (T4)

Written by this worker in T4:
- `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` (edited: status header; this T4 section; cumulative audit; next-step section; knowledge state).
- `evidence/EXP-074/t4-01-post-save-state-fx-address-readback.png`

Tool-generated (not worker-authored): Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T10-16-42-*`, `page-2026-10-13T10-16-53-605Z.yml`, `page-2026-10-13T10-16-58-497Z.yml`, `console-2026-10-13T10-16-42-*.log`). Not read as evidence.

No other file was written.

### Final browser state (end of T4)

- Mongoose Web Client tab selected (tab 1). Web Designer tab (tab 0) untouched.
- Active: Sql Columns, status `Is Nullable (SQL Columns 2 of 10)`, **clean** (toolbar Save disabled). FX_Address configuration as described above; Column Id blank in the UI.
- Sql Tables tab open behind (not selected or read in T4; last verified in T2 as clean, `1 of 1`).
- No dialog, no browser-native prompt, no unsaved-change prompt.
- No further Save, New, close, reopen or runtime action performed.

### Acceptance status after T4

- **AC-1** established (T1; T2 `t2-01`; T3 `t3-01`; T4 gate snapshot). Caution alert was not captured in T1–T4 (no Select Form ran); the alert appears only on Select Form opening, so this check is still open for the reopen step.
- **AC-2** established (T1 baseline and absence; re-confirmed in T2, T3 and T4).
- **AC-3** MET (observed, UI level; T3).
- **AC-4** observed at UI level (T4): one toolbar Save; silent native response; no generated SQL displayed; Save disabled afterwards; System Data Type `nvarchar` read back. Limits: no explicit success text; Column Id not yet visible; not a database read; no durability claim.
- **AC-5 to AC-8** NOT STARTED.

## T5 — AC-5: clean close of Sql Columns and Sql Tables, one reopen (cycle 5; task message `352eff94-5a1e-40a4-bcb8-baddf69b9007`)

Scope: close the clean child (Sql Columns) and parent (Sql Tables) Forms once each through their Form-tab close controls, then reopen Sql Tables once through Form > Open > Select Form. Stop before Filter in Place and before retrieving FX_HelloWorld01 again (AC-6). No New, no Save, no runtime open, no Designer action, no Escape, no edits. Worker session `9f8c3e34-b35e-493e-b552-aec77a8844ab`.

### Tab list and selection

- Tab list (before the first select): tab 0 Web Designer (`mode=designer`) marked current, as in T2–T4; tab 1 Mongoose Web Client. The worker did not act on the Designer. Tab 1 was selected (succeeded). Tab 0 was not selected, clicked or captured.

### Inherited state (verified before any close)

- Fresh snapshot (depth 14): Sql Columns active; status `Is Nullable (SQL Columns 2 of 10)`; toolbar Save **disabled** (clean); Column Name `FX_Address`; Schema `dbo`; Table Name `FX_HelloWorld01`; Data Type `nvarchar`; System Data Type `nvarchar`; Length `150`; Is Nullable checked; Primary Key unchecked (disabled); Column Id textbox **blank**; no dialog.
- Parent Sql Tables (view-only tab heading click): Table Name combobox `FX_HelloWorld01`, Schema `dbo`; status `Columns... (SQL Tables 1 of 1)`; the one row `FX_HelloWorld01 / dbo`; constraints PK_FX_HelloWorld01 and IX_FX_HelloWorld01_RowPointer; **Update Current Table disabled**; toolbar Save greyed; no dialog. Evidence `t5-01`.
- Sql Columns (view-only tab heading click, after the parent view): the same values as above; toolbar Save **disabled**. Evidence `t5-02`.
- Both Forms were verified clean and targeted correctly before any close. The brief's stop conditions did not apply.

### Close 1 — Sql Columns (child), once

- One click on `Close Panel Sql Columns` (Form-tab close control).
- Result: no unsaved-changes prompt and no dialog appeared. A fresh snapshot shows the Sql Columns tab **absent** from the tab list. The remaining tabs: FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables (selected), FX_Orders. Toolbar Save disabled. The parent's status was not read between the two closes; its clean `SQL Tables 1 of 1` state was read immediately before close 1 (`t5-01`).

### Close 2 — Sql Tables (parent), once

- One click on `Close Panel Sql Tables` (Form-tab close control).
- Result: no unsaved-changes prompt and no dialog. A fresh snapshot shows the Sql Tables tab **absent**. The platform then selected the inherited `FX_Orders` runtime tab (its Customer ID `(Object 1 of 2)` runtime, toolbar Save disabled). **The FX_Orders tab was not acted on** (not clicked, not edited, not closed). Remaining tabs: FX_Items, Property Classes, IDO Projects, IDOs, FX_Orders (selected).

### Reopen 1 — Sql Tables through Form > Open > Select Form, once

- One click on the toolbar `Open` button (Select Form dialog opened). Dialog `Select Form` showed filter `FX_Orders` (the last-used filter) with one row `FX_Orders / FX_Orders`.
- Filter textbox set to `SqlTables` (one fill), then one End key press to refresh the list (the same pattern as EXP-059). The list showed `Sql Tables / SqlTables` and a second row `Sql Tables Constraint / SqlTablesPrimaryKey` (not the target; not selected).
- The row `Sql Tables / SqlTables` was activated by one click on its Name cell (verified `[active]`). OK (verified label `OK`) was clicked once.
- Result: the Sql Tables tab reopened (selected; tab list: FX_Items, Property Classes, IDO Projects, IDOs, FX_Orders, Sql Tables).

### Caution alert (AC-1 remainder), verbatim

- An `alertdialog` titled `Sql Tables` appeared immediately after the Select Form OK. Its single line of text, transcribed exactly from the accessibility snapshot and the screenshot:

  > Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms.

- Buttons: **OK only** (no save, delete or conversion choice). Warning icon shown.
- Disposition: dismissed with **OK**, one click (ref verified `OK`). No other response. Evidence `t5-03` (captured before OK).

### Reopened Sql Tables — settled state (after OK)

- Fresh find: no `alertdialog` remaining; Sql Tables tab selected; **toolbar Save `[disabled]`**; New, Delete, Refresh, Get More Rows and the other record commands disabled (no record loaded).
- Tabpanel: a blank placeholder row (no record loaded). Attributes Table Name combobox and Schema combobox **empty**. Constraints grid empty. Status `Filter in Place`.
- Observed detail: `Update Current Table` is rendered enabled (blue) in the blank-placeholder state. In the earlier loaded state (close 2 above) it was disabled. This is observed only; Save is disabled, so no pending change is shown.
- No FX_HelloWorld01 record is loaded in this reopened Form (the brief's stop before AC-6).

### Evidence (T5)

- `evidence/EXP-074/t5-01-pre-close-sqltables-parent-clean-target.png`: parent Sql Tables active before close 1. Shows FX_HelloWorld01 / dbo, `SQL Tables 1 of 1`, the two constraints, Update Current Table disabled, toolbar Save greyed. Proves parent identity and clean state at that time. Does not show the Sql Columns child (verified by the snapshot in the record).
- `evidence/EXP-074/t5-02-pre-close-sqlcolumns-clean-fx-address.png`: Sql Columns active before close 1. Shows Column Name FX_Address, Schema dbo, Table FX_HelloWorld01, Data Type nvarchar, System Data Type nvarchar, Length 150, Is Nullable checked, Primary Key unchecked, Column Id blank, status `Is Nullable (SQL Columns 2 of 10)`, Save greyed. Proves the pre-close clean state. Does not show the nine original rows in full (the grid shows only the Is Nullable and Primary Key columns at this scroll).
- `evidence/EXP-074/t5-03-reopen-caution-alert-before-ok.png`: the caution alertdialog before OK. Shows the exact text, title `Sql Tables`, the warning icon and OK as the only button, over a dimmed Sql Tables placeholder. Proves the alert and its single option. Does not prove what would have happened on any other choice (none was offered).
- `evidence/EXP-074/t5-04-reopened-sqltables-clean-after-ok.png`: reopened Sql Tables after OK. Shows the tab selected, the tab strip without Sql Columns (FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables, FX_Orders), a blank placeholder row, Save greyed, `Filter in Place` status, and no dialog. Proves the reopen and the clean state. Does not show FX_HelloWorld01 (not retrieved, by design; that is AC-6).

### Reopen and close readbacks (tab strip)

| Step | Tab strip after the step | Dialogs |
| --- | --- | --- |
| Start (inherited) | FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables, FX_Orders, Sql Columns (selected) | none |
| After close 1 (Sql Columns) | FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables (selected), FX_Orders | none |
| After close 2 (Sql Tables) | FX_Items, Property Classes, IDO Projects, IDOs, FX_Orders (selected by the platform) | none |
| After reopen (Select Form OK) | FX_Items, Property Classes, IDO Projects, IDOs, FX_Orders, Sql Tables (selected) | caution alert (OK once) |
| After caution OK | same as above | none |

### Action audit (T5 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| Tab list (`browser_tabs` list) | 1 | Before the first select. |
| Tab select (index 1, Web Client) | 1 | Designer (tab 0) not selected. |
| `browser_snapshot` calls | 5 | (1) inherited state; (2) after the Sql Columns close; (3) after the Sql Tables close; (4) after the Open click (Select Form visible); (5) after the caution OK. |
| `browser_find` (read-only) | 6 | Parent check; Sql Columns check; Select Form row check; Select Form OK/Cancel/filter check; post-OK alert and Save check; post-OK settled check. |
| Clicks (`browser_click`) | **8** | (1) Sql Tables tab view; (2) Sql Columns tab view; (3) **Close Panel Sql Columns ×1**; (4) **Close Panel Sql Tables ×1**; (5) toolbar **Open ×1**; (6) Select Form row Name cell (activate); (7) Select Form **OK ×1**; (8) caution alert **OK ×1**. |
| Typed entries (`browser_type`) | 1 | Select Form filter `SqlTables` (one fill). Not a query or record field. |
| Key presses | 1 | End (refresh of the Select Form list). Escape **0**. |
| Waits | 0 | None. |
| Screenshots (`browser_take_screenshot`) | 4 | `t5-01` to `t5-04`. |
| **New (Columns > New)** | **0** in T5 (cumulative **1**) | Not invoked. |
| **Save (toolbar or SQL Tables)** | **0** in T5 (cumulative **1**) | Not pressed. |
| Sql Columns close | **1** | Clean; no prompt. |
| Sql Tables close | **1** | Clean; no prompt. |
| Sql Tables reopen (Select Form) | **1** | Select Form opened once; OK once. |
| Caution alert appearances / OK | 1 / 1 | Verbatim text in the record; OK only. |
| Runtime FX_HelloWorld01 open / loads | 0 / 0 | Not opened; the FX_Orders tab was inherited and not touched. |
| Filter in Place / criteria / F4 | 0 / 0 / 0 | Not entered (AC-6 stop). |
| Columns… (opened in T5) | 0 | Not opened. |
| IDO, Form, string, property-class, record or existing-column edits | 0 | None. |
| Designer actions | 0 | Web Designer tab not touched. |
| Unload, cache, FormSync, deploy, regenerate, check-in or check-out | 0 | None. |
| Re-login | 0 | Session stayed usable throughout. |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | None. |
| Ref-not-found or other browser errors | 0 | None. Recovery snapshot 0; corrected inspection 0. |

Note on the tool echo: the browser tool echoes a Playwright locator for each action (for example one used the toolbar's element id for Open). The worker did not author or run any script; these are the tool's own generated locators.

### Cumulative browser action audit (T1 + T2 + T3 + T4 + T5; exact counts)

| Action | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| New (Columns > New) | 0 | 1 | 0 | 0 | 0 | **1** |
| Save (toolbar) | 0 | 0 | 0 | 1 | 0 | **1** |
| Sql Columns close | 0 | 0 | 0 | 0 | 1 | **1** |
| Sql Tables close | 0 | 0 | 0 | 0 | 1 | **1** |
| Sql Tables reopen (Select Form) | 0 | 0 | 0 | 0 | 1 | **1** |
| Select Form opens | 0 | 0 | 0 | 0 | 1 | **1** |
| Caution alert OK | 0 | 0 | 0 | 0 | 1 | **1** |
| Runtime opens / loads | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Tab lists | 1 | 1 | 1 | 1 | 1 | **5** |
| Tab selects (Web Client) | 1 | 1 | 1 | 1 | 1 | **5** |
| Clicks | 4 | 4 | 4 | 1 | 8 | **21** |
| Typed entries | 1 | 3 | 2 | 0 | 1 | **7** |
| Key presses (Tab, F4, Ctrl+A, Delete, End) | 2 | 2 | 2 | 0 | 1 | **7** |
| Escape presses | 0 | 0 | 0 | 0 | 0 | **0** |
| Mouse moves | 1 | 1 | 0 | 0 | 0 | **2** |
| Wheel scrolls | 4 | 3 | 0 | 0 | 0 | **7** |
| Waits | 1 | 0 | 0 | 1 | 0 | **2** |
| `browser_snapshot` calls | 8 | 5 | 1 | 1 | 5 | **20** |
| `browser_find` calls | 1 | 4 | 15 | 7 | 6 | **33** |
| Screenshots | 8 | 7 | 5 | 1 | 4 | **25** |
| IDO / Form / string / property-class / record / existing-column edits | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deploy / regenerate / check-in / check-out | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-login | 0 | 0 | 0 | 0 | 0 | **0** |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | 0 | 0 | 0 | 0 | **0** |

### Documentation reconciliation (requested in the T5 instruction)

- T4 had one failed documentation Edit (the run-history line), which the tool rejected without changing the file. The retry succeeded. Verified in this task: the T4 reference appears once in the run-history line, and the T4 section heading appears once. No partial or duplicate text was found, so no correction was needed.
- T4's table entry "Save toolbar state" was corrected to say the tooltip appeared in an earlier find (a wording fix, not a data change).
- Earlier T4 statements that said "AC-5 to AC-8 NOT STARTED" were superseded by this T5 status and corrected in the status header.

### Worker-written-file inventory (T5)

Written by this worker in T5:
- `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` (edited: status header; run history; this T5 section; cumulative audit; knowledge state; next-step section).
- `evidence/EXP-074/t5-01-pre-close-sqltables-parent-clean-target.png`
- `evidence/EXP-074/t5-02-pre-close-sqlcolumns-clean-fx-address.png`
- `evidence/EXP-074/t5-03-reopen-caution-alert-before-ok.png`
- `evidence/EXP-074/t5-04-reopened-sqltables-clean-after-ok.png`

Tool-generated (not worker-authored): Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T10-19-*.yml`, `page-2026-10-13T10-20-*.yml`, `console-2026-10-13T10-19-15-*.log`). Not read as evidence.

No other file was written.

### Final browser state (end of T5)

- Mongoose Web Client tab selected (tab 1). Web Designer tab (tab 0) untouched.
- Form tabs open: FX_Items (inherited), Property Classes (inherited), IDO Projects (inherited), IDOs (inherited), FX_Orders (inherited runtime, clean, Save disabled, not acted on), **Sql Tables (reopened once, selected, clean, blank placeholder, Save disabled)**.
- **Sql Columns: closed** (absent from the tab list).
- No dialog. No browser-native prompt. No unsaved-change prompt. No pending edits in the Sql Tables Form.
- The FX_HelloWorld01 record is not loaded in the reopened Sql Tables (AC-6 not started).

### Acceptance status after T5

- **AC-1:** established for the session, identity, and the sources reviewed in T1 (no new source read in T5). The caution alert was captured verbatim (`t5-03`) and dismissed with OK only. Identity visible in `t5-01`, `t5-02` and `t5-04` (operator account and DEM configuration bar).
- **AC-2:** established in T1; re-confirmed in T2–T4 and in T5 by the parent target readback (`FX_HelloWorld01`, `1 of 1`).
- **AC-3:** MET (T3, observed, UI level).
- **AC-4:** observed at UI level (T4): one Save; silent native response; Save disabled afterwards; System Data Type `nvarchar`.
- **AC-5:** **observed at UI level** (T5). Sql Columns closed once and Sql Tables closed once, each clean with no prompt and each absent from the tab list afterwards. Sql Tables reopened once through Form > Open > Select Form; the caution alert was dismissed with OK only; the reopened Sql Tables is clean with Save disabled. Evidence: `t5-01` to `t5-04` and the tab-strip readbacks. Limit: "no prompt" is observed as the absence of any dialog in the snapshots after each close. No separate save-changes prompt was provoked, since none was expected for a clean Form.
- **AC-6 to AC-8:** NOT STARTED. AC-6 (the recovered-inventory query and the Column Id of FX_Address) requires separate authorization.

## T6 — AC-6: recovered inventory after the reopen (cycle 6; task message `0867a51b-7d1b-4ad5-b1fd-8bd0217ed574`)

Scope: one Filter in Place query for `FX_HelloWorld01` on the reopened Sql Tables, one F4, then Columns... once to read the recovered inventory and compare it with the T1 baseline plus FX_Address. No New, no Save, no Update Current Table, no field edits, no runtime open, no close or reopen, no Designer action, no Escape. Worker session `9f8c3e34-b35e-493e-b552-aec77a8844ab`.

### Tab list and inherited state

- Tab list (before the first select): tab 0 Web Designer (`mode=designer`) marked current, as in T2–T5; tab 1 Mongoose Web Client. Tab 1 was selected (succeeded). Tab 0 was not selected, clicked or captured.
- Fresh snapshot (depth 14) after the select: Sql Tables active (the only Form tab of the four that this task uses; the inherited FX_Orders tab was not touched); toolbar Save **disabled**; no record loaded (blank placeholder); Table Name and Schema comboboxes empty; Update Current Table disabled; no dialog. Matches the T5 end state.

### Filter in Place: one intended entry, one unintended toggle, one corrective entry

1. **First FiP click (intended entry), one click on the toolbar `FiP` button.** Result: unexpected. The criteria row disappeared, the grid loaded the unfiltered list (status `Table Name (SQL Tables 1 of 200)`), the Table Name Attributes combobox showed `ABDataServices` (the first row, selected as the record, with focus), the toolbar New, Refresh and Get More Rows became enabled, and the Sql Tables tab lost its filter icon. Save stayed disabled; no edit was made; no value was typed into any field. Evidence: `t6-01-after-fip-click-unfiltered-state.png`.
   - Interpretation (inference, not directly observed): the reopened Form was already in Filter in Place mode (status `Filter in Place`, criteria row present, as shown in the pre-click snapshot). The click therefore toggled filter mode **off** and ran an unfiltered query. The brief's wording "enter Filter in Place once" did not anticipate that the mode was already on.
2. **Fresh untargeted snapshot (one allowed recovery snapshot)** confirmed: no criteria row; filter icon absent; status `1 of 200`; Save disabled; Update Current Table disabled; no dialog.
3. **Second FiP click (one corrective attempt), on the same `FiP` button.** Result: filter mode back on. Criteria row present again with an empty Table Name criterion; the record cleared (Table Name combobox empty); status `Filter in Place`; Refresh and Delete disabled; Save disabled.
   - **FiP was therefore clicked twice in total in this task** (one toggle off, one toggle on). This is a deviation from "exactly once" and is disclosed here. Net effect: filter mode is on, the criterion was entered once, and F4 ran once.

### Criterion entry and F4

- One click on the criteria row's Table Name cell (`gridcell` in the criteria row, not the Attributes combobox). The grid criteria combobox became active (verified `[active]`).
- One `browser_type` of `FX_HelloWorld01` into that grid criteria combobox (the only typed entry in T6).
- One Tab press (commit). The Schema criteria cell took focus.
- **Pre-F4 screenshot** `t6-02-pre-f4-table-name-criterion-FX_HelloWorld01.png`: Filter in Place active (filter icon on the Sql Tables tab; status `Filter in Place`); criteria row Table Name `FX_HelloWorld01`; Schema criteria focused; Attributes Table Name combobox showing `FX_HelloWorld01` (a mirror of the criterion, as observed in T1 and T2); Save greyed; no dialog. Does NOT show the result.
- **One F4**, then a 3-second wait (no action), then a find.

### Target result (exactly one dbo.FX_HelloWorld01 row)

- Status: `Table Name (SQL Tables 1 of 1)`.
- One data row: Table Name `FX_HelloWorld01`, Schema `dbo` (find readback `gridcell "dbo"`), Multi-Site unchecked. The Table Name cell shows an active editor with its text selected; no edit was made.
- Constraints: `Primary Key` **PK_FX_HelloWorld01** (Unique checked, Clustered checked, description `FX_Code`); `Index` **IX_FX_HelloWorld01_RowPointer** (Unique checked, Clustered unchecked, description `RowPointer`).
- Toolbar **Save disabled**; **Update Current Table disabled**; no dialog.
- Evidence: `t6-03-post-f4-one-dbo-fx-helloworld01-row.png` (identity, status `Table Name (SQL Tables 1 of 1)`, constraints, Save and Update Current Table greyed).

### Columns... (once) and the recovered inventory

- One click on `Columns...`. Sql Columns opened as a child tab; status `Column Name (SQL Columns 1 of 10)`: **ten columns**.
- Reading method: visible horizontal grid scrolling with screenshots (primary) and accessibility rows (supplement). The grid renders each column block only in its scroll position, so the accessibility rows are partial per block; the full per-row values below combine the screenshots, the accessibility row texts (`row "FX_… dbo FX_HelloWorld01 …"`) and the detail pane (row 1 and row 10).
- Screenshots: `t6-04` (names, ten rows, row 10 FX_Address; detail FX_Code), `t6-05` (Data Type and System Data Type), `t6-06` (Length, Decimal Position, Default Value), `t6-07` (Is Computed, Column Id 2–11), `t6-08` (Is Nullable, Primary Key, Key Sequence).
- Detail pane for row 10 (after one view-only row-header click, no edit): `t6-09-recovered-fx-address-detail-column-id-11.png` shows Column Name `FX_Address`, Schema `dbo`, Table `FX_HelloWorld01`, **Column Id `11`** (textbox), Data Type `nvarchar`, System Data Type `nvarchar`, Is Nullable checked, Primary Key unchecked (disabled), Length `150`, Decimal Position blank, Default Value blank, Key Sequence blank, Is Computed unchecked, status `(SQL Columns 10 of 10)`.

### Baseline (T1) versus recovered inventory, field by field

| # | Column (recovered) | Column Id T1 → T6 | Data Type T1 → T6 | System Data Type T1 → T6 | Length T1 → T6 | Decimal | Default T1 → T6 | Is Nullable T1 → T6 | Primary Key / Key Seq T1 → T6 | Is Computed | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Code | 2 → 2 | nvarchar → nvarchar | nvarchar → nvarchar | 30 → 30 | blank → blank | blank → blank | No → No | Yes / 1 → Yes / 1 | No → No | **MATCH** |
| 2 | FX_Label | 3 → 3 | nvarchar → nvarchar | nvarchar → nvarchar | 100 → 100 | blank → blank | blank → blank | Yes → Yes | No / blank → No / blank | No → No | **MATCH** |
| 3 | CreatedBy | 4 → 4 | UsernameType → UsernameType | nvarchar → nvarchar | 128 → 128 | blank → blank | suser_sname() → suser_sname() | No → No | No → No | No → No | **MATCH** |
| 4 | UpdatedBy | 5 → 5 | UsernameType → UsernameType | nvarchar → nvarchar | 128 → 128 | blank → blank | suser_sname() → suser_sname() | No → No | No → No | No → No | **MATCH** |
| 5 | CreateDate | 6 → 6 | CurrentDateType → CurrentDateType | datetime → datetime | blank → blank | blank → blank | getdate() → getdate() | No → No | No → No | No → No | **MATCH** |
| 6 | RecordDate | 7 → 7 | CurrentDateType → CurrentDateType | datetime → datetime | blank → blank | blank → blank | getdate() → getdate() | No → No | No → No | No → No | **MATCH** |
| 7 | RowPointer | 8 → 8 | RowPointerType → RowPointerType | uniqueidentifier → uniqueidentifier | blank → blank | blank → blank | newid() → newid() | No → No | No → No | No → No | **MATCH** |
| 8 | NoteExistsFlag | 9 → 9 | FlagNyType → FlagNyType | tinyint → tinyint | blank → blank | blank → blank | (0) → (0) | No → No | No → No | No → No | **MATCH** |
| 9 | InWorkflow | 10 → 10 | FlagNyType → FlagNyType | tinyint → tinyint | blank → blank | blank → blank | (0) → (0) | No → No | No → No | No → No | **MATCH** |
| 10 | **FX_Address (new)** | **— → 11** | — → **nvarchar** | — → **nvarchar** | — → **150** | blank | — → blank | — → **Yes (checked)** | — → **No** | — → No | **Expected addition, as specified** |

Notes on the comparison:
- The "T1 → T6" entries for the nine originals compare the T1 baseline (T1 section, and T3/T4 readbacks) with the T6 values read now. Every field matches.
- Column Ids of the originals are unchanged (2–10). FX_Address received **Column Id 11** (the brief did not assume it; the readback gives 11).
- Only FX_Address is new. Ten columns total (nine originals + one).
- Default values for the originals were read from the accessibility rows (full text) and the screenshots (`t6-06` shows the start of each default text, e.g. `suser_s…`, which the accessibility row resolves to `suser_sname()`).

### Recovered-inventory checks requested by the brief

- Exactly ten columns: **yes** (`SQL Columns 1 of 10`; ten rows in the Column Name list; status `10 of 10` on the detail).
- Exactly one additional column named FX_Address under a case-insensitive comparison: **yes** (only one name matches `fx_address` in any case; no other name contains `address`).
- FX_Address Data Type nvarchar: **yes**. Length 150: **yes**. Is Nullable checked: **yes**. Primary Key unchecked: **yes**. System Data Type nvarchar: **yes**. Column Id: **11**.
- The seven system columns are non-primary: **yes** (Primary Key unchecked on rows 3–10 in `t6-08`; Key Sequence blank).
- Neither SQL Form is dirty: **yes**. Sql Columns Save disabled (find, status `(SQL Columns 10 of 10)`, no dialog). Sql Tables Save disabled and Update Current Table disabled (find, `SQL Tables 1 of 1`, `t6-10`).

### Evidence and what each proves

- `t6-01-after-fip-click-unfiltered-state.png`: the unintended unfiltered state after the first FiP click (200 tables, `ABDataServices` in the record combobox, status `1 of 200`). Proves the toggle effect. Not the target.
- `t6-02-pre-f4-table-name-criterion-FX_HelloWorld01.png`: the pre-F4 criterion (filter icon on, criterion `FX_HelloWorld01` committed by Tab, status `Filter in Place`, Save greyed). Proves the criterion before F4. Not the result.
- `t6-03-post-f4-one-dbo-fx-helloworld01-row.png`: one row FX_HelloWorld01 / dbo, status `1 of 1`, constraints, Save and Update Current Table greyed. Proves the single target. UI level, not a catalogue read.
- `t6-04-recovered-columns-initial-view-status-10.png`: ten names; row 10 FX_Address; status `1 of 10`; detail FX_Code (Column Id 2). Proves the count and the names. Not the other fields.
- `t6-05-recovered-columns-scroll1-datatype-systemtype.png`: Data Type for all ten rows (row 10 nvarchar). Proves Data Type; System Data Type appears in the accessibility rows.
- `t6-06-recovered-columns-scroll2-length-decimal-default.png`: Length (row 10 150; originals 30, 100, 128, 128, blank…); Decimal blank; Default (truncated). Proves Length. Default text is truncated here; the full text is in the accessibility rows.
- `t6-07-recovered-columns-scroll3-iscomputed-columnid.png`: Is Computed unchecked for all ten; **Column Id 2–11** with row 10 = 11. Proves Column Id 11.
- `t6-08-recovered-columns-scroll4-nullable-pk-keyseq.png`: Is Nullable checked on rows 2 and 10; Primary Key checked on row 1 only; Key Sequence 1 on row 1. Proves nullability and keys.
- `t6-09-recovered-fx-address-detail-column-id-11.png`: FX_Address detail (Column Id 11, nvarchar, System Data Type nvarchar, Length 150, Is Nullable checked, Primary Key unchecked). Proves the FX_Address attributes. Taken after a view-only row selection.
- `t6-10-parent-sqltables-clean-after-recovered-inventory.png`: the parent Sql Tables after the Columns... check: `SQL Tables 1 of 1`, FX_HelloWorld01, Update Current Table greyed, Save greyed, no dialog. Proves the parent is clean. Does not show the child.

### Action audit (T6 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first select. |
| Tab select (Web Client) | 1 | Designer not selected. |
| `browser_snapshot` calls | 2 | (1) inherited state, depth 14; (2) fresh untargeted recovery snapshot after the unintended FiP toggle, depth 10. |
| `browser_find` calls | 13 | Read-only refs and readbacks (status, rows, detail, Save state, tab heading, parent Save). |
| Clicks | 6 | (1) FiP toolbar, intended entry (**toggled filter off**); (2) FiP toolbar, **corrective re-entry**; (3) grid criteria cell (activate criterion editor); (4) `Columns...` ×1; (5) row-10 row-header (view-only row selection); (6) Sql Tables tab heading (view-only, parent check). |
| Typed entries | 1 | `FX_HelloWorld01` into the grid Table Name criteria combobox only. |
| Key presses | 2 | Tab (commit criterion); F4 ×1 (query). Escape **0**. |
| Mouse moves | 1 | Over the grid, for horizontal scrolling. |
| Wheel scrolls (horizontal, view only) | 4 | deltaX +400, +400, +800, −400. |
| Waits | 1 | 3 seconds after F4. |
| Screenshots | 10 | `t6-01` to `t6-10`. |
| **New** | **0** in T6 (cumulative **1**) | Not invoked. |
| **Save** | **0** in T6 (cumulative **1**) | Not pressed. |
| Update Current Table | 0 | Not pressed. |
| F4 | 1 | One query. |
| Filter in Place entries | 2 clicks (1 intended-looking, 1 corrective) | See the FiP section: the first click toggled mode off; the second re-entered it. |
| Close / reopen of Sql Tables or Sql Columns | 0 / 0 | Both left open. |
| Select Form | 0 | None. |
| Runtime FX_HelloWorld01 open / loads | 0 / 0 | None. |
| Field edits, record edits, IDO / Form / string / property-class | 0 | None. |
| Designer actions | 0 | Web Designer not touched. |
| Unload, cache, FormSync, deploy, regenerate, check-in, check-out | 0 | None. |
| Dialogs answered | 0 | None appeared. |
| Re-login | 0 | Session stayed usable. |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | None. |
| Ref-not-found or other browser errors | 0 | None. Recovery snapshot 1 (used for the FiP state check); corrected visible inspection 1 (the second FiP click, with the fresh find that followed it). |

### Cumulative browser action audit (T1 through T6; exact counts)

| Action | Through T5 | T6 | Cumulative |
| --- | --- | --- | --- |
| New (Columns > New) | 1 | 0 | **1** |
| Save (toolbar) | 1 | 0 | **1** |
| Sql Columns close / Sql Tables close / Sql Tables reopen | 1 / 1 / 1 | 0 / 0 / 0 | **1 / 1 / 1** |
| Select Form opens | 1 | 0 | **1** |
| Caution alert appearances / OK | 1 / 1 | 0 / 0 | **1 / 1** |
| Runtime opens / loads | 0 / 0 | 0 / 0 | **0 / 0** |
| Tab lists | 5 | 1 | **6** |
| Tab selects (Web Client) | 5 | 1 | **6** |
| Clicks | 21 | 6 | **27** |
| Typed entries | 7 | 1 | **8** |
| Key presses (Tab, F4, Ctrl+A, Delete, End) | 7 | 2 | **9** |
| Escape presses | 0 | 0 | **0** |
| Mouse moves | 2 | 1 | **3** |
| Wheel scrolls | 7 | 4 | **11** |
| Waits | 2 | 1 | **3** |
| `browser_snapshot` calls | 20 | 2 | **22** |
| `browser_find` calls | 33 | 13 | **46** |
| Screenshots | 25 | 10 | **35** |
| Filter in Place toolbar clicks | 1 (T1: one entry for the target query; T2–T5 used none) | 2 (one toggled filter off, one re-entered it; see T6) | **3** |
| IDO / Form / string / property-class / record / existing-column edits | 0 | 0 | **0** |
| Designer actions | 0 | 0 | **0** |
| Unload / cache / FormSync / deploy / regenerate / check-in / check-out | 0 | 0 | **0** |
| Re-login | 0 | 0 | **0** |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | 0 | **0** |

Note: the cumulative "Filter in Place clicks" row is included because T1 used Filter in Place to query the target and T2 through T5 did not; the cumulative totals above are carried from the T1–T5 tables, which are unchanged.

### Worker-written-file inventory (T6)

Written by this worker in T6:
- `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` (edited: status header; run history; this T6 section; next-step section; knowledge state rows).
- `evidence/EXP-074/t6-01-after-fip-click-unfiltered-state.png`
- `evidence/EXP-074/t6-02-pre-f4-table-name-criterion-FX_HelloWorld01.png`
- `evidence/EXP-074/t6-03-post-f4-one-dbo-fx-helloworld01-row.png`
- `evidence/EXP-074/t6-04-recovered-columns-initial-view-status-10.png`
- `evidence/EXP-074/t6-05-recovered-columns-scroll1-datatype-systemtype.png`
- `evidence/EXP-074/t6-06-recovered-columns-scroll2-length-decimal-default.png`
- `evidence/EXP-074/t6-07-recovered-columns-scroll3-iscomputed-columnid.png`
- `evidence/EXP-074/t6-08-recovered-columns-scroll4-nullable-pk-keyseq.png`
- `evidence/EXP-074/t6-09-recovered-fx-address-detail-column-id-11.png`
- `evidence/EXP-074/t6-10-parent-sqltables-clean-after-recovered-inventory.png`

Tool-generated (not worker-authored): Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T10-23-*.yml`, `page-2026-10-13T10-24-*.yml`, `page-2026-10-13T10-25-05-698Z.yml`, `console-2026-10-13T10-23-13-*.log`). Not read as evidence.

No other file was written.

### Final browser state (end of T6)

- Mongoose Web Client tab selected (tab 1). Web Designer tab (tab 0) untouched.
- Form tabs open: FX_Items, Property Classes, IDO Projects, IDOs, FX_Orders (inherited runtime, not touched), **Sql Tables** (selected; Filter in Place on; criterion `FX_HelloWorld01`; one row, FX_HelloWorld01 / dbo, `1 of 1`; clean; Save disabled; Update Current Table disabled).
- **Sql Columns** is open as a child tab (`SQL Columns 10 of 10`, row 10 FX_Address selected by a view-only row click; clean; Save disabled).
- No dialog. No browser-native prompt. No unsaved-change prompt. No pending edits.
- The FX_HelloWorld01 runtime is not opened (AC-7 not started).

### Acceptance status after T6

- **AC-1:** established (T1; T5 caution alert; T6 identity visible in `t6-03`, `t6-09`, `t6-10`).
- **AC-2:** established (T1 baseline; T6 re-read of the same nine rows as the recovered inventory).
- **AC-3:** MET (T3).
- **AC-4:** observed at UI level (T4).
- **AC-5:** observed at UI level (T5).
- **AC-6:** **observed at UI level (T6).** One visible-criterion query returned exactly one dbo.FX_HelloWorld01 row (`t6-02` before F4, `t6-03` after); the recovered inventory has ten columns, the nine originals match the T1 baseline field by field, and FX_Address is nvarchar, 150, nullable, PK unchecked, System Data Type nvarchar, **Column Id 11**; both Forms clean. Limits: UI-level recovery in the same browser session only; not a catalogue query; not a database durability read; the FiP toggle deviation is disclosed.
- **AC-7:** NOT STARTED. The runtime check requires separate authorization.
- **AC-8:** not final; the cumulative audit and inventories are recorded here; the final report waits for AC-7.

## T7 — AC-7: runtime FX_HelloWorld01 read-only check (cycle 7; task message `23c181be-73f7-4457-a1ed-feb25ac3b663`)

Scope: open the existing FX_HelloWorld01 runtime Form once through Select Form, load its records with one toolbar Refresh, and read the two records. No record edit, no Save, no New, no Delete, no Filter in Place, no F4, no close or reopen of Sql Tables or Sql Columns, no Designer action, no IDO, Form, string or property-class change, no Escape. Worker session `9f8c3e34-b35e-493e-b552-aec77a8844ab`.

### Tab list and inherited state

- Tab list (before the first select): tab 0 Web Designer (`mode=designer`) marked current, as in T2–T6; tab 1 Mongoose Web Client. Tab 1 was selected (succeeded). Tab 0 was not selected, clicked or captured.
- Fresh snapshot (depth 14): Sql Tables active; toolbar Save disabled; FX_HelloWorld01 / dbo, `Columns... (SQL Tables 1 of 1)`; no dialog. Sql Tables and FX_Orders were not acted on beyond this.
- Sql Columns verified clean with a view-only tab selection: Save disabled; status `Column Name (SQL Columns 10 of 10)`; FX_Address row 11 unchanged (`FX_Address dbo FX_HelloWorld01 nvarchar nvarchar 150 checkbox checked checkbox not checked checkbox not checked 11`); Column Id textbox `11`. Evidence `t7-01`.

### Select Form (once), exact Form verified before OK

1. Toolbar `Open` clicked once (ref verified `Open`). The Select Form dialog opened with the last filter value `SqlTables` and two rows (`Sql Tables / SqlTables` and `Sql Tables Constraint / SqlTablesPrimaryKey`).
2. Filter textbox set to `FX_HelloWorld01` (one fill), then one End key press to refresh the list (the same pattern as EXP-059 and T5).
3. The list then showed **one** row: Caption `FX_HelloWorld01`, Name `FX_HelloWorld01` (no similarly named Form). Evidence `t7-02` (captured before OK).
4. The row's Name cell was clicked once to activate it (`[active]` verified). OK (ref verified `OK`) was clicked once.
5. Result: the runtime tab `FX_HelloWorld01` opened and was selected. No caution alert and no other dialog appeared (checked in the snapshot after OK).

### Initial runtime state (before Refresh)

- Tab `FX_HelloWorld01` selected (heading `FX_HelloWorld01`; the tabpanel `FX_HelloWorld01`); identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Status `(Object 1 of 1)`; one starred blank add-mode placeholder row; both inputs blank; upper input focused (not typed into); toolbar Save **disabled**; no dialog. This matches the EXP-042-R3 pattern (the Form opens in add mode and does not load saved rows until Refresh).
- Evidence `t7-03` (captured before Refresh).

### One toolbar Refresh (once)

- `Refresh` toolbar button clicked once (label verified; tooltip `Refresh`). Refresh was not repeated. No Filter in Place and no F4 after it.
- Result after a 3-second settle: the grid shows **two rows** (row 1 and row 2), the status reads `(Object 1 of 2)`, the upper input shows `Factory test one`, the lower input shows `FX001`, Save **disabled**, no dialog, no error text.

### Runtime readbacks (exact)

| Row | Column 1 (grid, first column; upper input for row 1) | Column 2 (grid, second column, header `*` required; lower input for row 1) | Source |
| --- | --- | --- | --- |
| 1 | `Factory test one` | `FX001` | accessibility rows `gridcell "Factory test one"` / `gridcell "FX001"` (full text); detail inputs `textbox Factory test one` / `textbox FX001`; screenshot `t7-04` (column 1 cut short by the column width; full text from the snapshot) |
| 2 | `Factory test two` | `FX002` | accessibility row `gridcell "Factory test two"` / `gridcell "FX002"` (full text); screenshot `t7-04` (column 1 cut short by the column width) |

- Record count: **2** (rows 1 and 2; no third row; status denominator 2).
- Required identities: row 1 = FX001 / `Factory test one` and row 2 = FX002 / `Factory test two`, both as required.
- Field mapping (inferred, not directly proven for row 2): the Form's inputs are uncaptioned. The EXP-042-R3 record documents the upper input as FX_Label and the lower, required input as FX_Code, and the grid's first column as FX_Label and second as FX_Code (its header marks the required FX_Code column with `*`). The row 1 detail inputs (`Factory test one` upper, `FX001` lower) agree with that mapping. Row 2 values are read from the grid under the same mapping. The Form's Designer bindings were not opened (out of scope).
- Save: disabled (find, toolbar `button "Save" [disabled]`), before and after the Refresh.
- No record edited; no value typed into any runtime field.
- The second record was **not** navigated to: both rows were visible in the grid after the one Refresh, so no record-navigation action was needed.

### Evidence (T7)

- `evidence/EXP-074/t7-01-sqlcolumns-clean-verified-before-runtime.png`: Sql Columns (view-only selection) before the runtime open. Shows FX_Address row, Column Id 11 readback, status `10 of 10`, Save greyed. Proves the inherited Sql Columns state is clean and unchanged. Does not prove the database state.
- `evidence/EXP-074/t7-02-select-form-fx-helloworld01-before-ok.png`: Select Form before OK. Shows the filter `FX_HelloWorld01` and the single row, active. Proves the Form identity offered and selected. Does not show the runtime.
- `evidence/EXP-074/t7-03-runtime-fx-helloworld01-initial-state-before-refresh.png`: runtime before Refresh. Shows the starred blank placeholder, both inputs blank, `(Object 1 of 1)`, Save greyed, the FX_HelloWorld01 tab selected. Proves the add-mode baseline. Does not show saved rows.
- `evidence/EXP-074/t7-04-runtime-fx-helloworld01-after-one-refresh-two-rows.png`: runtime after the one Refresh. Shows two grid rows (column 1 cut short by the column width; column 2 shows `FX001` on row 1 and is partly hidden on row 2), the detail inputs `Factory test one` and `FX001`, `(Object 1 of 2)`, Save greyed. Proves the two-record load and the state. Does not show the full text of row 2 column 1 (from the accessibility readback above).

### Action audit (T7 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first select. |
| Tab select (Web Client) | 1 | Designer not selected. |
| `browser_snapshot` calls | 3 | (1) inherited state, depth 14; (2) after OK (runtime open), depth 16; (3) after Refresh, depth 16. No targeted snapshot. |
| `browser_find` calls | 5 | Sql Columns clean check; Select Form list; Select Form row check; post-OK and post-Refresh checks; final Save/rows check. |
| Clicks | 5 | (1) Sql Columns tab heading (view-only); (2) toolbar Open (Select Form, ×1); (3) Select Form row Name cell (activate, ×1); (4) Select Form OK (×1); (5) toolbar Refresh (×1). |
| Typed entries | 1 | Select Form filter `FX_HelloWorld01` (one fill; a Select Form filter, not a record field). |
| Key presses | 1 | End (refresh of the Select Form list). Escape **0**. |
| Waits | 1 | 3 seconds after Refresh (settle). |
| Screenshots | 4 | `t7-01` to `t7-04`. |
| **Runtime Form open** | **1** (cumulative **1**) | Via Select Form OK, once. |
| **Runtime load (Refresh)** | **1** (cumulative **1**) | One toolbar Refresh. |
| Select Form opens | 1 in T7 (cumulative **2**) | T5 reopen and T7 runtime open. |
| Caution alerts | 0 | None appeared on this Select Form path. |
| **New** | **0** in T7 (cumulative **1**) | Not invoked. |
| **Save** | **0** in T7 (cumulative **1**) | Not pressed; runtime Save remained disabled. |
| Record edits / runtime value changes | 0 | None. |
| Filter in Place / F4 in T7 | 0 / 0 | None (the one Refresh was the only load). |
| Close or reopen of Sql Tables or Sql Columns | 0 / 0 | Both left open and clean. |
| Sql Tables / Sql Columns / FX_Orders actions | view-only only | Sql Columns and Sql Tables were viewed; FX_Orders not touched. |
| IDO, Form, string, property-class or SQL column edits | 0 | None. |
| Designer actions | 0 | Web Designer not touched. |
| Unload, cache, FormSync, deploy, regenerate, check-in, check-out | 0 | None. |
| Dialogs answered | 1 (Select Form OK) | Select Form is an in-page Mongoose dialog; no alert. |
| Re-login | 0 | Session stayed usable. |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | None. |
| Ref-not-found or other browser errors | 0 | None. Recovery snapshot 0; corrected visible inspection 0. |

### Cumulative browser action audit (T1 through T7; exact counts)

| Action | Through T6 | T7 | Cumulative |
| --- | --- | --- | --- |
| New (Columns > New) | 1 | 0 | **1** |
| Save (toolbar) | 1 | 0 | **1** |
| Sql Columns close / Sql Tables close / Sql Tables reopen | 1 / 1 / 1 | 0 / 0 / 0 | **1 / 1 / 1** |
| Select Form opens | 1 | 1 | **2** |
| Caution alert appearances / OK | 1 / 1 | 0 / 0 | **1 / 1** |
| Runtime FX_HelloWorld01 opens / loads | 0 / 0 | 1 / 1 | **1 / 1** |
| Tab lists | 6 | 1 | **7** |
| Tab selects (Web Client) | 6 | 1 | **7** |
| Clicks | 27 | 5 | **32** |
| Typed entries | 8 | 1 | **9** |
| Key presses (Tab, F4, Ctrl+A, Delete, End) | 9 | 1 | **10** |
| Escape presses | 0 | 0 | **0** |
| Mouse moves | 3 | 0 | **3** |
| Wheel scrolls | 11 | 0 | **11** |
| Waits | 3 | 1 | **4** |
| `browser_snapshot` calls | 22 | 3 | **25** |
| `browser_find` calls | 46 | 5 | **51** |
| Screenshots | 35 | 4 | **39** |
| Filter in Place toolbar clicks | 3 | 0 | **3** (see the T6 deviation: two of these were in T6) |
| Refresh clicks (runtime) | 0 | 1 | **1** |
| IDO / Form / string / property-class / record / existing-column edits | 0 | 0 | **0** |
| Designer actions | 0 | 0 | **0** |
| Unload / cache / FormSync / deploy / regenerate / check-in / check-out | 0 | 0 | **0** |
| Re-login | 0 | 0 | **0** |
| JavaScript / evaluate / run-code / direct navigation / refresh / restart | 0 | 0 | **0** |

### Retained deviation from T6 (double Filter in Place)

- T6 clicked the toolbar Filter in Place button twice (one click toggled filter mode off and loaded the unfiltered list; one corrective click re-entered filter mode). The brief had asked for one entry. This is retained here as a deviation; it is not corrected or re-argued in T7. No data changed as a result.

### Worker-written-file inventory (T7)

Written by this worker in T7:
- `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md` (edited: status header; run history; this T7 section; next-step section; knowledge state).
- `evidence/EXP-074/t7-01-sqlcolumns-clean-verified-before-runtime.png`
- `evidence/EXP-074/t7-02-select-form-fx-helloworld01-before-ok.png`
- `evidence/EXP-074/t7-03-runtime-fx-helloworld01-initial-state-before-refresh.png`
- `evidence/EXP-074/t7-04-runtime-fx-helloworld01-after-one-refresh-two-rows.png`

Tool-generated (not worker-authored): Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T10-28-*.yml`, `console-2026-10-13T10-28-07-709Z.log`). Not read as evidence.

No other file was written.

### Final browser state (end of T7)

- Mongoose Web Client tab selected (tab 1). Web Designer tab (tab 0) untouched.
- Form tabs open: FX_Items, Property Classes, IDO Projects, IDOs, FX_Orders (inherited, not touched), Sql Tables (clean; FX_HelloWorld01 `1 of 1`; Save disabled), Sql Columns (clean; `10 of 10`; Save disabled), **FX_HelloWorld01 runtime** (selected; two records; `(Object 1 of 2)`; Save disabled; not edited).
- No dialog. No browser-native prompt. No unsaved-change prompt. No pending edits in any Form.
- Stopped after AC-7. AC-8 is not finalized in this task.

### Acceptance status after T7

- **AC-1:** established (T1; T5 caution alert verbatim; T7 Select Form identity `t7-02` and runtime identity bar in `t7-03`, `t7-04`).
- **AC-2:** established (T1 baseline; re-read in T6).
- **AC-3:** MET (T3).
- **AC-4:** observed at UI level (T4).
- **AC-5:** observed at UI level (T5).
- **AC-6:** observed at UI level (T6), with the FiP deviation retained.
- **AC-7:** **observed at UI level (T7).** The FX_HelloWorld01 runtime Form opened once through Select Form; one Refresh loaded exactly two records, FX001 / Factory test one and FX002 / Factory test two; status `(Object 1 of 2)`; Save disabled; no record change, no Save, no New. Limits: same-session Web Client read; uncaptioned-input mapping inferred from EXP-042-R3 and the grid header, not from Designer bindings; row 2 column 1 full text from the accessibility readback, not a full-width screenshot; no database read.
- **AC-8:** not finalized in T7 (the final report and the complete audit are recorded above and in the record; the final report is for the coordinator's next step).

## Next permitted step (after T8; NOT started)

T8 finalized AC-8 in `evidence/EXP-074/T8-final-acceptance-report.md` (documentation only). The remaining steps need separate authorization: (0) operator review and acceptance decision, including the T6 Filter in Place deviation and the T3 Data Type exception; (1) the final AC-8 consolidation, if the operator wants it in this record; (2) any cleanup of the FX_ test records or the new column, which is out of this experiment's scope and not authorized here; (3) the later IDO `FX_Address` property and Form field experiments, which are out of scope. Do not Save, New, or Refresh again without authorization. The FX_HelloWorld01 runtime, Sql Tables and Sql Columns tabs are open and clean; the inherited FX_Orders tab is untouched.

## Knowledge state

| Finding | State |
| --- | --- |
| Ordinary Form-tab close of the clean Sql Columns child: no prompt, tab absent afterwards | observed (single run; T5) |
| Ordinary Form-tab close of the clean parent Sql Tables: no prompt; the platform then selected the inherited FX_Orders runtime tab | observed (single run; T5) |
| Reopen through toolbar Open > Select Form (filter `SqlTables` after one End refresh) opens Sql Tables; the caution alert appears with the exact text and OK only | observed (single run; T5; second occurrence after EXP-059's) |
| Reopened Sql Tables with no record loaded: Save disabled, blank placeholder, Update Current Table rendered enabled | observed (single run; T5) |
| FX_Address recovered in the inventory after reopen (ten columns; nine originals unchanged; FX_Address nvarchar, 150, nullable, PK unchecked, System Data Type nvarchar) | observed (single run; UI level; T6) |
| Column Id of FX_Address after the reopen | observed (single run; T6): **11** (detail pane textbox and grid row). Not assumed |
| Original nine columns keep Column Ids 2–10, types, lengths, nullability, keys and system defaults across the Save and the reopen | observed (single run; T6, UI level) |
| Filter in Place is ON when the reopened Sql Tables shows a criteria row and status `Filter in Place`; one FiP click on it toggled the mode off and ran an unfiltered load (200 rows, first record selected) | observed (single run; T6) |
| The first row of the unfiltered load becomes the record (Attributes combobox), with no edit and Save disabled | observed (single run; T6) |
| FX_HelloWorld01 runtime opens in add mode with one blank placeholder, `(Object 1 of 1)`, Save disabled | observed (single run; T7) |
| One toolbar Refresh loads exactly two records: `Factory test one` / `FX001` and `Factory test two` / `FX002`; status `(Object 1 of 2)`; Save disabled | observed (single run; T7; UI level) |
| Runtime grid column 1 holds the FX_Label text and column 2 (required `*`) holds FX_Code, consistent with the upper/lower input mapping in EXP-042-R3 | observed for row 1 (detail inputs and grid); the mapping is inferred from EXP-042-R3 and the grid header for row 2 (T7) |
| The FX001 / FX002 records persisted to `dbo.FX_HelloWorld01` as a database fact | **unresolved** (UI-level same-session read only; no database read; no durability claim) |
| FX_Address persisted to `dbo.FX_HelloWorld01` | **unresolved** (no database read; UI-level only) |
| Single toolbar Save of the Sql Columns FX_Address configuration returned no confirmation text, dialog or error, and displayed no generated SQL | observed (single run; T4) |
| After Save: System Data Type `nvarchar` populated; Column Id blank in the UI; Save disabled | observed (single run; T4) |
| Nine original rows unchanged across the Save (readable fields) | observed (single run; T4) |
| FX_Address persisted to `dbo.FX_HelloWorld01` | **unresolved** (not tested; no database read; reopen step pending) |
| Column Id assigned to FX_Address | **unresolved** (blank in the UI before reopen; EXP-059 saw it only after reopen) |
| Restricted recovery: Open trigger toggle closes the list; the typed text `nvarchar` stays in the field and no value is visibly committed | observed (single run; T3); "no commit" is an inference from the readback |
| Typed `nvarchar*` with the list closed, then one Open-trigger click, shows exactly one option `nvarchar` | observed (single run; T3) |
| Selecting that one option commits Data Type `nvarchar` (combobox without `*`, grid row `nvarchar`, Length field becomes editable) | observed (single run; T3) |
| Pre-Save unsaved row: Length 150 (Tab commit) and Is Nullable checked (label click) with System Data Type and Column Id blank | observed (single run; T3) |
| Nine original rows unchanged after the new row is added (readable fields) | observed (single run; T3) |
| Data Type list (Sql Columns, Data Type combobox) renders 200 options and no nvarchar option when opened without a filter (A through GenericKeyType); a typed prefix did not filter the already-open list | observed (single run; T2) |
| A typed prefix with the list closed then one Open-trigger click filters the list (EXP-059 `varb*` route) | observed in EXP-059 (single run); not re-run here |
| Sql Tables tab (pre-opened) was clean and usable; no caution alert on the existing tab | observed (single run) |
| Grid Table Name criteria route (Filter in Place, criteria cell, Tab, F4) returns one `dbo.FX_HelloWorld01` row | observed (single run; UI level) |
| Baseline of dbo.FX_HelloWorld01: nine columns, Column Ids 2–10, FX_Code nvarchar 30 PK, FX_Label nvarchar 100 nullable, seven system columns | observed (single run; UI level) |
| FX_Address absent (exact and case-insensitive) | observed (single run; UI level) |
| Attributes Table Name combobox mirrors the active criteria or retrieved row | observed (single run; not a query field) |
| Column creation, Save, DDL, persistence, reopen inventory, runtime rows | not tested (later tasks) |
| Replay | not claimed |

## T8 — final documentation (cycle 8; task `b3e01288-41d5-4f85-a0c8-332f6de7a559`; zero browser calls)

Documentation only. Wrote `evidence/EXP-074/T8-final-acceptance-report.md`, which contains the AC-1 to AC-8 matrix with evidence paths and limits, the nine-column baseline compared field by field with the ten-column recovered inventory, the FX_Address attributes (nvarchar, 150, nullable checked, Primary Key unchecked, System Data Type nvarchar, Column Id 11), the single silent Save, the clean close/reopen boundary and the verbatim caution alert, the runtime verification (one open, one Refresh, two records, Save disabled, zero edits), the observed-versus-inferred runtime mapping, the reconciled action counts, the discrepancies list, the T6 deviation, the T3 Data Type exception, the worker-written-file inventory, and the final state.

Worker recommendation (operator decides): **ACCEPTED AS OBSERVED** (UI level; not replay-verified; no database durability claimed), conditional on operator review of the T6 double Filter in Place toggle. The T6 deviation is flagged, not treated as satisfying the brief.

Reconciled totals (T1–T7): clicks 32; typed 9; key presses 10; Escape 0; snapshots 25; finds 51; screenshots 39; tab lists 7; tab selects 7; Filter in Place toolbar clicks 3 (one in T1, two in T6); Data Type open-trigger clicks 3 (T2 one; T3 two); New 1; Save 1; Sql Columns close 1; Sql Tables close 1; Sql Tables reopen 1; Select Form opens 2; caution alert OK 1; runtime open 1; runtime Refresh 1; runtime edits 0; Designer 0; unloads 0; re-logins 0.

Worker-written repository files across T1–T8: this record (created T1, edited T2–T8), `evidence/EXP-074/t1-01` to `t7-04` (39 PNG), and `evidence/EXP-074/T8-final-acceptance-report.md`. Tool-generated Playwright files under `evidence\playwright\` are not worker-authored. Operator git review is authoritative.

Final browser state: FX_HelloWorld01 runtime open with two loaded records; Sql Tables and Sql Columns open and clean; inherited FX_Orders and Web Designer untouched.

## Open items for the coordinator

1. **Operator decision** on the T6 Filter in Place deviation (flagged in the T8 report, section 9) and on the T3 Data Type exception (section 10).
2. The Column Id 1 gap (values now run 2–11) is not explained; not investigated.
3. Runtime row-2 field mapping, and the row-1 mapping of uncaptioned inputs to FX_Label and FX_Code, are inferred from EXP-042-R3 and the grid's required marker; not confirmed from Designer bindings (out of scope).
4. System Data Type values for rows 3–9 were read from the accessibility snapshot in T1 and T6, not from a full-width screenshot.
5. The new column FX_Address and the factory test records FX001 and FX002 are retained; cleanup requires a separate FX_-scoped authorization.
6. The Sql Tables tab is in Filter in Place mode with the FX_HelloWorld01 criterion and is clean; Sql Columns is open and clean. Both can be left or closed by the operator.

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 5 prerequisite A is complete. Every decision during this run was the operator's own; auto-accept was not renewed for Part 5.

- Run R-20261013-175801-w8FD completed as accepted after 8 worker tasks.
- Changed, for later cleanup (tenant-wide, AGENTS.md FX_ scope extension; operator decision 2026-10-13 to add Address):
  - **New column `dbo.FX_HelloWorld01.FX_Address`:** nvarchar, Length 150, nullable, Column Id 11. It was created with one Columns New and one Save.
  - The 9 original columns are unchanged.
- Operator decisions during the run:
  1. **T2 pause, Data Type list:**
     - The open list renders only 200 entries (A to GenericKeyType), and a typed prefix does not filter an open list.
     - The operator authorized one close of the list with its Open toggle (never Escape), then the EXP-059 wildcard route: `nvarchar*` typed with the list closed, one Open click, then the single `nvarchar` option selected.
     - The brief had omitted EXP-059's wildcard detail; that was an error by the operator assistant.
  2. **T3 permission denial:** a worker Grep on its own tool-result file outside the repo. It was harmless and approved.
  3. **T6 deviation, accepted:** the reopened Sql Tables inherited Filter in Place mode, so Filter in Place was clicked twice (off, then on).
     - The criterion was typed once, captured before F4 (`t6-02`) and queried once.
- Screenshots viewed by the operator assistant:
  - `t3-05`: the pre-Save configuration: FX_Address on dbo / FX_HelloWorld01, Data Type nvarchar, Length 150, Is Nullable checked, with System Data Type and Column Id blank and 10 rows.
  - `t4-01`: after the Save, System Data Type `nvarchar` and Save disabled. No message appeared.
  - `t6-02`: after the reopen, Filter in Place with Table Name FX_HelloWorld01 visible before F4.
  - `t6-09`: the recovered FX_Address: Column Id 11, nvarchar/nvarchar, 150, nullable, not a key, with status "(SQL Columns 10 of 10)".
  - `t7-04`: the FX_HelloWorld01 runtime after one Refresh: two rows, FX001 / Factory test one shown, "(Object 1 of 2)", Save disabled.
- Counts:
  - Columns New 1; Save 1; Sql Tables close/reopen 1 (plus Sql Columns closed and reopened through Columns…);
  - runtime open 1; Refresh 1;
  - IDO, Form, string and record changes 0; Designer actions 0; unloads 0; re-logins 0.
- Findings (observed):
  1. **Sql Columns Data Type** is a 200-entry first-page list. Select from it with a closed-list wildcard (`<type>*`), then one Open click. The open list ignores typed text. This is the second observation, after EXP-059 `varb*`.
  2. **Closing the list with the Open toggle** while typed text was present committed nothing visible: System Data Type stayed blank.
  3. A reopened Sql Tables can inherit Filter in Place mode. Check the status bar ("Filter in Place") before clicking Filter in Place.
  4. A successful column Save shows no message. Success shows as the System Data Type filling in and, after the reopen, a Column Id. This matches EXP-059.
  5. **Unexplained:** the FX_HelloWorld01 columns start at Column Id 2; the gap at Id 1 is unexplained.
- Confinement (git status): only `evidence/EXP-074/` and this record were written by the run.
- Next: prerequisite B. Add the Bound property FX_Address (label FX_sAddress) to IDO FX_HelloWorld01 through IDO Collections, using the EXP-061 route.
  - The IDO is checked in (EXP-040), so it needs one check-out.
