# EXP-044 T10 — Read-only post-creation SQL Tables verification of dbo.FX_UMs: observations

Date: 2026-10-10. Task T10 (task_message_id `7d264a6d-d960-401d-8a31-49c28f379b97`, cycle 11). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single session, UI level). Not replay_verified.

**Result: one real table record `dbo.FX_UMs` exists (exact-name Filter in Place query, one F4; not a starred placeholder). Its constraints show `Primary Key PK_FX_UMs` (description `FX_UM`) and `Index IX_FX_UMs_RowPointer`. The Columns view shows nine columns: FX_UM and FX_Description (the two authored columns), plus seven system columns. FX_UM: nvarchar, length 10, NOT NULL (Is Nullable unchecked), Primary Key checked, Key Sequence 1. FX_Description: nvarchar, length 50, Is Nullable CHECKED (nullable). No mismatch against the expected definition was found. No mutation was made. The FX_UMs IDO was not checked in (held pending review of the T9 discrepancy).**

Scope distinction (restated): the SQL table is **tenant-wide** metadata; the Designer editing scope is **User**.

## 1. Preflight

- Web Client tab 0 (`favoriteContext=IdoCollections`): IDOs tab selected, criteria `FX_UMs` retained from T9, no dialog. Designer tab 1 untouched. No refresh, no reauthentication.
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- The existing IDO `FX_UMs` (checked out to the operator, Check In enabled) was not acted on.

## 2. Open SqlTables and the caution alert

| Step | Observed |
| --- | --- |
| Toolbar Open inner `f1e26` (label Open), once | Select Form opened (`f1e435`) with the filter prefilled `SqlTables`. |
| Filter re-entry: click `f1e471`; Control+a; Backspace; `SqlTables` typed with key events (`slowly`) | Rows: `Sql Tables` / `SqlTables` (`f1e499`) and `Sql Tables Constraint` / `SqlTablesPrimaryKey`. |
| Caption cell `f1e499`, then OK `f1e490` (label verified) | URL `favoriteContext=SqlTables`. |
| Caution alertdialog `f1e642` | Text: "Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms." Single button `OK` (`f1e646`). Fresh targeted snapshot verified the exact text and label. Dismissed with OK **once**. Informational, not a save or discard prompt. |

Evidence: `t10-01-sqltables-fip-blank-criteria-row-after-caution-ok.png`.

## 3. Criteria row (grid only) and query

| Step | Observed |
| --- | --- |
| Pre-query state | Sql Tables in Filter in Place with one blank criteria row (`1`); Save disabled. |
| First attempt: click the row-number cell `f1e528` | Clicked the row-number cell (`gridcell "1" [selected]`), not the Table Name criteria cell. **No edit occurred.** (Wrong target; recorded as a deviation.) Screenshot `t10-02`. |
| Corrected attempt: mouse click at (450, 191) on the grid's Table Name criteria cell | The active editor became the grid combobox `f1e653` inside grid `f1e549` (the criteria row). **The Attributes Table Name combo (`f1e631`) was NOT used.** |
| Plain fill `FX_UMs` into `f1e653`; Tab | Criteria cell `FX_UMs`, unstarred; focus moved to the criteria Schema cell. Attributes Table Name mirrored `FX_UMs` (as in T4). Screenshot `t10-03`. |
| Save before F4 | `Save` `[disabled]`. |
| **F4, once** | Result: **one real record** — Table Name `FX_UMs`, Schema `dbo`, Multi-Site unchecked, **no star**. Status bar `Schema (SQL Tables 1 of 1)`. Screenshot `t10-04`. |

Interpretation: this differs from the T4 result (a starred blank placeholder) and matches the T4 positive-control pattern (a real row, no star, status `Schema (SQL Tables 1 of 1)`, with constraints shown). The table `dbo.FX_UMs` is therefore a saved record.

## 4. Table identity and constraints (read-only)

| Field | Observed (accessibility tree and `t10-04`) |
| --- | --- |
| Table Name | `FX_UMs` |
| Schema | `dbo` |
| Multi-Site | unchecked |
| Attributes (Schema combo / Table Name combo) | `dbo` / `FX_UMs`, both read as values; Save `[disabled]`; **Update Current Table `[disabled]`** (no pending change) |
| Constraint 1 | Constraint Type `Primary Key`; Constraint Name `PK_FX_UMs`; Unique checked; Clustered checked; Description `FX_UM` |
| Constraint 2 | Constraint Type `Index`; Constraint Name `IX_FX_UMs_RowPointer`; Unique checked; Clustered unchecked; Description `RowPointer` |

- The primary-key constraint is named `PK_FX_UMs` and its description is `FX_UM`. The constraint's column is not separately read from the constraint row; key membership is taken from the Columns view (§5), not from the constraint name.
- The index on `RowPointer` is a system index (not authored).

## 5. Columns (Sql Columns, read-only; status `Column Name (SQL Columns 1 of 9)`)

Opened by the supported `Columns...` button (`f1e563`). Nine rows: 

| # | Column Name | Column Id | Data Type | System Data Type | Length | Is Nullable | Primary Key | Key Sequence | Is Computed | Default | Origin |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **FX_UM** | 2 | nvarchar | nvarchar | **10** | **unchecked (NOT NULL)** | **checked** | **1** | unchecked | empty | authored (user-defined) |
| 2 | **FX_Description** | 3 | nvarchar | nvarchar | **50** | **checked (nullable)** | unchecked | (blank) | unchecked | empty | authored (user-defined) |
| 3 | CreatedBy | 4 | not read in detail (grid: dbo, FX_UMs; system row) | — | — | — | — | — | — | — | system-generated |
| 4 | UpdatedBy | — | not read | — | — | — | — | — | — | — | system-generated |
| 5 | CreateDate | — | not read | — | — | — | — | — | — | — | system-generated |
| 6 | RecordDate | — | not read | — | — | — | — | — | — | — | system-generated |
| 7 | RowPointer | — | not read | — | — | — | — | — | — | — | system-generated |
| 8 | NoteExistsFlag | — | not read | — | — | — | — | — | — | — | system-generated |
| 9 | InWorkflow | — | not read | — | — | — | — | — | — | — | system-generated |

Notes:
- Row 1 detail (`t10-05`): Column Id 2; Schema `dbo`; Table `FX_UMs`; Data Type `nvarchar`; System Data Type `nvarchar`; Length `10`; Is Nullable **unchecked**; Primary Key **checked** (greyed, read-only); Key Sequence `1`; Is Computed unchecked; Default Value empty; Decimal Position blank.
- Row 2 detail (`t10-06`, `t10-07`): Column Id 3; Schema `dbo`; Table `FX_UMs`; Data Type `nvarchar`; System Data Type `nvarchar`; Length `50`; **Is Nullable checked**; Primary Key unchecked (greyed); Key Sequence blank; Is Computed unchecked; Default Value empty.
- Rows 3–9: the Columns grid exposes only the column name, schema and table in the accessibility tree; their type, length, nullability and key values were **not read** in T10 (the detail pane for each was not opened to stay within the read-only plan). They are recorded as system-generated by name and by the constraint `IX_FX_UMs_RowPointer` (RowPointer) only. Their SQL types are **not verified**.

## 6. Verification against the expected definition

| Expectation (brief AC-9) | Observed | Result |
| --- | --- | --- |
| Exactly one dbo.FX_UMs table | One real record `FX_UMs` / `dbo` (status `1 of 1`, no star) | **Match** |
| FX_UM nvarchar(10) | nvarchar, length 10 | **Match** |
| FX_UM NOT NULL | Is Nullable unchecked | **Match** |
| FX_UM primary key | Primary Key checked; Key Sequence 1; constraint `PK_FX_UMs` (description FX_UM) | **Match** (two views agree) |
| FX_Description nvarchar(50) | nvarchar, length 50 | **Match** |
| FX_Description nullability | Is Nullable **checked** | **Recorded** (no expected value was specified in the brief; the wizard had no nullability control. Nullable is the observed state.) |
| System columns distinguished | Seven system columns (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow) and one system index (IX_FX_UMs_RowPointer) | **Distinguished** |

No mismatch with the expected FX_UM and FX_Description definitions was found in the observed UI.

## 7. Limitations and items the supported UI does not expose

1. System-column types, lengths and nullability (rows 3–9) were not read; the brief does not require them, and they are not claimed.
2. The constraint row does not show the constrained column; key membership of FX_UM is taken from the Columns view (Primary Key checked, Key Sequence 1) and from the constraint description `FX_UM`.
3. The Designer and wizard showed FX_UM's inherited Length and Column Type as blank on the IDO (T9). The SQL column shows length 10 and nvarchar, which matches the expected inherited values. This is a SQL-side confirmation of the FX_UM type; it does not explain the IDO-grid blanks.
4. Store-level (database catalogue) verification is not available through the UI. All values are UI-level, same session.
5. The Designer `doAutoInsert` console error (T8) is unresolved; the SQL values read here are consistent with the expected definition.

## 8. Errors, prompts and recovery (T10)

| # | Event | Handling |
| --- | --- | --- |
| E1 | Clicked the row-number cell `f1e528` instead of the Table Name criteria cell (wrong target; no edit) | Recorded. Corrected by the one permitted corrected visible inspection (screenshot `t10-02`) and a coordinate click on the Table Name criteria cell. |
| E2 | `Ref f1e532 not found` after the caution OK and the criteria screenshot | One fresh untargeted snapshot (depth 14). Recovery allowance used **1 of 1**. |
| P1 | Caution alertdialog `Sql Tables` (informational) | Verified text and OK label by a targeted snapshot; OK clicked once. |
| — | No save-changes, discard, validation or unexpected confirmation prompt. | — |

Corrected visible inspections: 1 of 1 used (E1). Recovery snapshots: 1 of 1 used (E2).

## 9. Operation counts (T10)

| Operation | Count |
| --- | --- |
| Save / Finish / Create Form | **0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Update Current Table / New Constraint / Modify Constraint / Columns edits | **0** (the Columns grid was opened by the read-only `Columns...` button; no value edited) |
| Attributes definition-field entries | **0** |
| Table or IDO definition edits | **0** |
| Caution alert OK | **1** (verified label) |
| Select Form OK | **1** |
| Criteria entries (grid, plain fill) | **1** (`FX_UMs`) |
| F4 executed | **1** (`FX_UMs`) |
| Tab commits | **1** |
| Grid cell / row selections (read-only) | **3** (criteria row number, the Table Name criteria cell, the FX_Description name cell) |
| Columns... opened | **1** (Sql Columns tab created as a runtime tab; read-only) |
| Screenshots | **7** (`t10-01` to `t10-07`, all saved and listed in the evidence index) |
| Errors | **1** ref-not-found (E2); one wrong-target click (E1, no effect) |
| Recovery snapshots | **1 of 1** used |
| Corrected visible inspections | **1 of 1** used |
| Prompts answered | **1** (caution OK, informational) |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |
| Form tab closes / reopens (AC-10 lifecycle) | **0 / 0** (not performed in T10 by instruction) |

## 10. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t10-01-sqltables-fip-blank-criteria-row-after-caution-ok.png` | Sql Tables in Filter in Place, blank criteria row, after the caution OK | Clean state before the query | Any result |
| `t10-02-sqltables-criteria-row-after-row-number-click.png` | Criteria row 1 with the row-number cell focused (wrong-target click) | The state after E1; no edit | — |
| `t10-03-sqltables-FX_UMs-criterion-committed-before-F4.png` | Criteria cell `FX_UMs` (unstarred); status `Filter in Place`; Attributes Table Name mirrors | The criterion was committed before F4 | The result |
| `t10-04-sqltables-FX_UMs-after-single-F4-settled.png` | **One real record** `FX_UMs` / `dbo`, no star; constraints `PK_FX_UMs` (FX_UM) and `IX_FX_UMs_RowPointer`; status `Schema (SQL Tables 1 of 1)`; Save disabled | **AC-9 table identity: one real dbo.FX_UMs record; constraints** | Column definitions (see t10-05) |
| `t10-05-sqlcolumns-FX_UMs-column-grid-9-rows.png` | Sql Columns: nine rows (`Column Name (SQL Columns 1 of 9)`); FX_UM detail: nvarchar, 10, Is Nullable unchecked, Primary Key checked, Key Sequence 1 | **AC-9 FX_UM: nvarchar(10), NOT NULL, primary key; nine columns** | System-column types |
| `t10-06-sqlcolumns-FX_Description-detail.png` | FX_Description detail: nvarchar, 50, Is Nullable checked, Primary Key unchecked, Column Id 3 | **AC-9 FX_Description: nvarchar(50); nullability recorded** | — |
| `t10-07-final-state-sqlcolumns-after-reads.png` | Sql Columns tab, FX_Description row current (combobox active, text selected, untouched); no dialog | Stable end state | — |

## 11. Last verified browser state

- Tab 0 (Mongoose): `Sql Columns` runtime tab selected (opened from Sql Tables' Columns... button), `FX_Description` as the current column row; the `Sql Tables` tab (criteria `FX_UMs`, record `FX_UMs` / `dbo` loaded, Save disabled) and `IDOs` (criteria `FX_UMs`, Check In enabled, not clicked) remain open; `FX_HelloWorld01` and `Property Classes` tabs open. No dialog, no unsaved-change prompt, no banner.
- Tab 1 (Designer, User scope): `IdoPropertyClasses` design view unchanged; Save disabled.
