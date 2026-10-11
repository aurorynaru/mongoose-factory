# EXP-059 — T6 AC-6: refilter dbo.FX_Items after reopen and field-by-field recovered inventory comparison

Run `R-20261011-203230-bdYw`, cycle 6, task T6. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `febb4b9f-488a-4b6f-a3fc-04727a699b91`. Date 2026-10-11. Classification: **observed only** (UI-level recovery; not independent database durability, not cross-session, not replay).

**Outcome: AC-6 PASSED (observed, UI level).** After the reopen, one native Filter in Place query on `Table Name = FX_Items` returned exactly one record, `dbo.FX_Items`. Its recovered column inventory has 12 columns: the 11 original columns match the T1 baseline on every compared field, and exactly one additional column, FX_Picture (`varbinary`, Length `-1`, Is Nullable checked, Primary Key unchecked, Column Id 13), is present. No other additions, removals, or attribute changes were observed. Save remains disabled. Sql Columns is open as a read-only child; no Save, New, Update Current Table, close, reopen, FX_Items runtime open, or authentication action was performed.

## 1. Starting state (fresh)

- Tab list (1) → tab 1 selected (1). Snapshot `t6-snapshot-00-start.md`, screenshot `t6-01-start-state.png`.
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Active: `Sql Tables` (reopened in T5). Save disabled. Filter in Place status; grid one blank placeholder row. No dialog. Tabs: `FX_Items` (inherited runtime, untouched) and `Sql Tables`.

## 2. Filter and target identity (native, once)

1. Clicked the grid's Table Name criteria cell in row 1 (`f1e132`) — became an active grid combobox (`f1e681`), not the Attributes combobox. Snapshot `t6-snapshot-01`, screenshot `t6-02`.
2. Typed `FX_Items` into that criteria combobox (typed entry 1), then Tab (key 1). Snapshot `t6-snapshot-02`, screenshot `t6-03-criteria-FX_Items-before-F4.png` (criteria row shows FX_Items; Schema criteria cell focused).
3. F4 once. Snapshot `t6-snapshot-03-after-F4-FX_Items.md`, screenshot `t6-04-after-F4-FX_Items.png`.

Settled result:
- Status `Schema (SQL Tables 1 of 1)`.
- One data row: Table Name `FX_Items`, Schema `dbo`, Multi-Site unchecked.
- Attributes: Schema `dbo`; Table Name `FX_Items`.
- Constraints: `PK_FX_Items` (Primary Key, description `FX_Item`); `IX_FX_Items_RowPointer` (Index, description `RowPointer`).
- Save **disabled**; Update Current Table **disabled**; no dialog.

Target: **exactly one dbo.FX_Items record**. Missing/duplicate/ambiguous: none. Record count 1.

## 3. Columns... (read-only, once)

- Clicked `Columns...` (`f1e141`) once. Sql Columns child opened (`favoriteContext=SqlColumns`). Snapshot `t6-snapshot-04-sqlcolumns-opened-readonly.md`, screenshot `t6-05-sqlcolumns-opened-readonly.png`.
- Status `Column Name (SQL Columns 1 of 12)`. Detail (row 1): Column Name `FX_Item`, Schema `dbo`, Table `FX_Items`, Column Id `2`, Data Type `nvarchar`, System Data Type `nvarchar`, Is Nullable unchecked, Primary Key checked (disabled), Length `20`, Key Sequence `1`.
- Horizontal scroll (view only): mouse move (1); wheel deltaX 400 (1), 600 (1), 800 (1). Snapshots `t6-snapshot-05-sqlcolumns-hscrolled-full.md` (`t6-06-sqlcolumns-hscrolled-full.png`) and `t6-snapshot-06-sqlcolumns-hscrolled-far.md` (`t6-07-sqlcolumns-hscrolled-far.png`). Together they render every column's Data Type, System Data Type, Length, Decimal Position, Default Value, Is Nullable, Primary Key, Key Sequence, Is Computed and Column Id for all 12 rows.
- Row selections for detail: one mis-target (see §6), then row 12 selected correctly (`t6-snapshot-07`, `t6-snapshot-08-fx-picture-row-detail-corrected.md`, `t6-09-fx-picture-row-detail-corrected.png`). Final status `Column Id (SQL Columns 12 of 12)` / `(SQL Columns 12 of 12)`.

## 4. Before/after comparison matrix (12 rows; T1 baseline vs recovered)

Baseline = `evidence/EXP-059/T1-baseline-report.md` §5. "T1 Column Id" is shown only where T1 recorded it. Rows are compared by Column Name.

| # | Column (recovered) | Field | T1 baseline | Recovered | Result |
|---|---|---|---|---|---|
| 1 | FX_Item | Data Type / System Type | nvarchar / nvarchar | nvarchar / nvarchar | PASS |
| | | Length | 20 | 20 | PASS |
| | | Is Nullable | No | No (unchecked) | PASS |
| | | Primary Key / Key Seq | Yes / 1 | Yes (checked) / 1 | PASS |
| | | Column Id | 2 | 2 | PASS |
| 2 | FX_Description | Data Type / System Type | nvarchar / nvarchar | nvarchar / nvarchar | PASS |
| | | Length | 150 | 150 | PASS |
| | | Is Nullable | Yes | Yes (checked) | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | 3 | 3 | PASS |
| 3 | FX_Cost | Data Type / System Type | decimal / decimal | decimal / decimal | PASS |
| | | Length / Decimal Position | 18 / 2 | 18 / 2 | PASS |
| | | Is Nullable | Yes | Yes (checked) | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | 4 | 4 | PASS |
| 4 | FX_UM | Data Type / System Type | nvarchar / nvarchar | nvarchar / nvarchar | PASS |
| | | Length | 10 | 10 | PASS |
| | | Is Nullable | Yes | Yes (checked) | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | not in T1 | 5 | observed now (not compared to T1) |
| 5 | CreatedBy | Data Type / System Type | UsernameType / nvarchar | UsernameType / nvarchar | PASS |
| | | Length | 128 | 128 | PASS |
| | | Is Nullable | No | No | PASS |
| | | Default | suser_sname() | suser_sname() | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | not in T1 | 6 | observed now |
| 6 | UpdatedBy | Data Type / System Type | UsernameType / nvarchar | UsernameType / nvarchar | PASS |
| | | Length | 128 | 128 | PASS |
| | | Is Nullable | No | No | PASS |
| | | Default | suser_sname() | suser_sname() | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | not in T1 | 7 | observed now |
| 7 | CreateDate | Data Type / System Type | CurrentDateType / datetime | CurrentDateType / datetime | PASS |
| | | Is Nullable | No | No | PASS |
| | | Default | getdate() | getdate() | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | not in T1 | 8 | observed now |
| 8 | RecordDate | Data Type / System Type | CurrentDateType / datetime | CurrentDateType / datetime | PASS |
| | | Is Nullable | No | No | PASS |
| | | Default | getdate() | getdate() | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | not in T1 | 9 | observed now |
| 9 | RowPointer | Data Type / System Type | RowPointerType / uniqueidentifier | RowPointerType / uniqueidentifier | PASS |
| | | Is Nullable | No | No | PASS |
| | | Default | newid() | newid() | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | not in T1 | 10 | observed now |
| 10 | NoteExistsFlag | Data Type / System Type | FlagNyType / tinyint | FlagNyType / tinyint | PASS |
| | | Is Nullable | No | No | PASS |
| | | Default | (0) | (0) | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | not in T1 | 11 | observed now |
| 11 | InWorkflow | Data Type / System Type | FlagNyType / tinyint | FlagNyType / tinyint | PASS |
| | | Is Nullable | No | No | PASS |
| | | Default | (0) | (0) | PASS |
| | | Primary Key | No | No | PASS |
| | | Column Id | not in T1 | 12 | observed now |
| 12 | **FX_Picture (NEW)** | Name | — (absent in T1) | FX_Picture | new — PASS (single addition) |
| | | Data Type / System Type | — | varbinary / varbinary | PASS (VarBinary equivalent) |
| | | Length | — | -1 | PASS |
| | | Is Nullable | — | checked | PASS |
| | | Primary Key | — | unchecked (disabled) | PASS |
| | | Default / Decimal / Key Seq | — | blank / blank / blank | PASS (none required) |
| | | Is Computed | — | unchecked | PASS |
| | | Column Id | — | 13 | observed (recovered value) |

Notes on the matrix:
- "System Data Type" for original rows is shown in the grid (`nvarchar`, `decimal`, `varbinary` for FX_Picture) and in T1 (`nvarchar`, `decimal`, `UsernameType`→`nvarchar`, `datetime`, `uniqueidentifier`, `tinyint`) as recorded. Every match PASS.
- Column Id values 2–12 for the 11 originals form a continuous sequence with FX_Picture = 13. T1 recorded Column Id only for FX_Item (2), FX_Description (3), FX_Cost (4); those three match. The remaining originals' Column Ids were not in the T1 baseline and are recorded now as observed.
- Key Sequence: FX_Item = 1; all other rows blank (matches T1; FX_Picture blank).
- Is Computed: unchecked for all 12 rows.

Field-level result: **all 11 original columns PASS on Name, Data Type, System Data Type, Length, Decimal Position (where applicable), Is Nullable, Primary Key, and Default.** FX_Picture PASS on all four required attributes (VarBinary equivalent, Length -1, Is Nullable checked, PK unchecked). Total columns: **12 = 11 + 1**.

## 5. Constraint identity (parent Sql Tables, recovered in §2)

- `PK_FX_Items` — Primary Key, description `FX_Item`, Unique checked, Clustered checked — unchanged vs T1 (T1 §4 recorded PK_FX_Items on the same target).
- `IX_FX_Items_RowPointer` — Index, Unique checked, Clustered unchecked, description `RowPointer` — unchanged.
- No new constraint appeared. (Note: FX_Picture has no constraint of its own; none is expected for a nullable binary column.)

## 6. Discrepancies and mistakes recorded

1. **Mis-target (view-only, disclosed):** the first attempt to select row 12 used the ref of the Column Id cell `f1e1469`, which belongs to row 11 (InWorkflow). The detail pane displayed InWorkflow (Column Id 12, FlagNyType, tinyint, default (0), nullable unchecked). The Column Id cell was read-only (disabled-looking display); the click changed no value. Save remained disabled afterwards (`t6-snapshot-07`). The correct row was then selected via the row-header ref `f1e835` (`t6-snapshot-08`, `t6-09`). **No data changed.** Counted as one failed action.
2. **Row position:** FX_Picture appeared at grid position 4 pre-Save (T2–T4) and at position 12 (last) after reopen. The order is a display/reload difference, not an attribute difference. Recorded as observed; the comparison is by name.
3. **Parent Sql Tables Save:** not separately re-read after T6 selection changes. Save was observed disabled in the parent snapshot `t6-snapshot-03` (before Columns...) and the child snapshot `t6-snapshot-08` (after). Not re-checked on the parent after the child was opened.

No attribute differed from baseline. No data was unavailable. The target was not ambiguous.

## 7. Recovered System Data Type and Column Id, as displayed

- FX_Picture: System Data Type `varbinary` (textbox displayed); Column Id `13` (textbox displayed).
- Originals: System Data Type displayed for each row in the grid (see §4); Column Id displayed for each row (2–12).
- Nothing was assumed: both values are read from the displayed UI.

## 8. Action audit (T6, cumulative)

| Category | Count | Detail |
|---|---|---|
| Tab lists | 1 | before first select |
| Tab selects | 1 | tab 1 (Web Client) |
| Criteria cell click | 1 | grid Table Name criteria (`f1e132`) |
| Typed entries | 1 | `FX_Items` into grid criteria |
| Key presses | 2 | Tab (1), F4 (1) |
| Clicks (Columns..., row 11 mis-target, row 12 header) | 3 | `Columns...` (1); mis-target Column Id cell (1, view-only, no change); row 12 header (1) |
| Mouse move / wheel | 1 / 3 | wheel deltaX 400, 600, 800 (view-only grid horizontal scroll) |
| Snapshots | 9 | `t6-snapshot-00` … `-08` |
| Screenshots | 9 | `t6-01` … `t6-09` |
| Finds / waits | 0 / 0 | none |
| **Sql Columns child open** | **1** | via `Columns...` (read-only) |
| Sql Tables close / reopen | 0 / 0 | none |
| Form close (any) | 0 | none |
| **New** | **0** | not invoked |
| **Save** | **0** | not invoked |
| Update Current Table / constraint actions | 0 | none |
| Column property edits | 0 | none |
| SQL execution / DDL | 0 | none |
| Metadata, FormSync, cache, check-in/out | 0 | none |
| FX_Items runtime open or interaction | 0 | inherited tab untouched |
| Authentication, refresh, navigation by URL | 0 | none |
| Browser evaluate / run-code | 0 | none invoked |
| Failed / mis-targeted actions | 1 | §6.1 (view-only) |
| Ref-not-found / timeouts | 0 / 0 | none |
| Fresh-snapshot recovery | 0 of 1 (this task) | not needed; experiment-wide allowance consumed in T3 |
| Corrected inspection | 1 | the row-12 corrected selection (§6.1), which is a corrected inspection of the same kind |

## 9. Acceptance (T6 scope)

- **AC-6: PASSED (observed, UI level).** (a) Post-reopen table identity: one dbo.FX_Items record (§2). (b) Complete column readbacks: all 12 rows (§4, §7). (c) Field-by-field comparison: 11 originals PASS on all compared fields; FX_Picture PASS on the four required attributes; 12 = 11 + 1 (§4).
- AC-1 through AC-5: carried from T1–T5.
- AC-7 to AC-9: not started (out of T6 scope).

## 10. Limitations

1. "Recovery" here is the same Web Client session after an ordinary close and reopen of SQL Tables. It is UI-level persistence only. It is not independent database durability, not cross-session, and not replay verification.
2. The inventory is the Mongoose Sql Columns UI rendering, not a database catalogue query.
3. The baseline does not include Column Id for rows 4–11 (T1 did not record it); those values are recorded now as observed, not compared.
4. The grid's Key Sequence and Is Computed columns were read from the grid; the detail pane was read for rows 1 and 11–12 only.
5. The parent Sql Tables Save was not re-read after the child was opened (see §6.3).
6. Console: 1 error (401 from portal security-refresh resource), present since T1; not investigated.
7. Repository confinement is subject to operator git review (no shell).

## 11. Files written by this worker in T6

- `evidence/EXP-059/T6-recovered-inventory-comparison-report.md` (this report)
- `evidence/EXP-059/t6-snapshot-00-start.md` … `t6-snapshot-08-fx-picture-row-detail-corrected.md` (9 files)
- `evidence/EXP-059/t6-01-start-state.png` … `t6-09-fx-picture-row-detail-corrected.png` (9 files)
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md` (updated: T6 section and status)

Tool-generated captures under `evidence/playwright/` are not worker files.

## 12. Next permitted step

AC-7 (the single read-only FX_Items runtime opening with the three-record check) is **reserved** and not authorized by T6. The inherited FX_Items runtime tab is still open. Per the brief, one ordinary close of that clean inherited instance is permitted before the single opening. The Sql Columns child remains open (clean); its ordinary close is a later decision.
