# EXP-049 — T13 created SQL table and columns verification (read-only)

Run: R-20261011-020822-9Eej, cycle 15, task T13 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
**Result: the native SQL Tables Form returns one real record `FX_Items` in schema `dbo`. The SQL Columns Form lists the four intended business columns with the expected data types and lengths, and shows FX_Item as the primary-key column. Nullability is recorded as displayed (three of four business columns show Is Nullable checked; see the nullability section, which is a finding, not a fix). No SQL data was changed. Check-in and same-session close-and-reopen recovery were not performed (reserved for later tasks).** This is observed same-session UI evidence only, not independent database verification.

## Action counts (T13)
| Action | Count |
| --- | --- |
| Web Client tab select (`browser_tabs select index=1`; navigation) | 1 |
| Read-only tab listing | 1 (before select) |
| Sql Tables runtime tab click (select tab only) | 1 |
| Filter in Place opens (Sql Tables) | 1 |
| Table Name criterion entries | 1 (`FX_Items`, re-entered over the retained pre-creation criterion) |
| Tab commits (criterion) | 1 |
| F4 query runs | 1 |
| Columns... button clicks (opens SQL Columns runtime Form) | 1 |
| SQL Columns row selections (view only) | 4 (`FX_Description`, `FX_Cost`, `FX_UM` business; `RowPointer` system). The `FX_Item` detail was shown on Columns... open, without a selection click. |
| Screenshots (worker) | 7 (`T13-01` to `T13-07`) |
| Accessibility snapshots (worker YAML) | 2 (`T13-00` and the web-client start); tool-saved snapshots after each step |
| Save / New / Delete / Refresh | 0 / 0 / 0 / 0 |
| Update Current Table / New Constraint / Modify Constraint | 0 / 0 / 0 |
| Checkout / check-in / Undo Check Out | 0 |
| Text typed into any field other than the Table Name criterion | 0 |
| Wizard actions | 0 |
| IDO Properties tab / IDOs tab / other runtime tabs touched | 0 (IDO Properties left open, not interacted with) |
| Browser evaluate / run-code | 0 |
| Direct SQL, schema synchronization, metadata unload | 0 |

Distinct SQL table queries in T13: **1** (the post-creation query). The T5 pre-creation queries were not repeated.

## Starting state (observed)
- Tab 0 (Designer) was current at the start of T13 and was not interacted with. Tab 1 (Web Client) was selected. The IDO Properties tab was active on entry (left open from T12); Save `[disabled]`; no dialog (`T13-00-fresh-snapshot-webclient-start.yml`).
- The Sql Tables tab was then selected once. Its state: one grid row, Table Name and Schema blank (the blank insertion placeholder from the earlier T1 state), Save disabled, Columns and constraint actions disabled, no dialog (`page-...18-56-53-724Z.yml`).

## Criterion and query (SQL Tables)
- Filter in Place opened. The criteria combobox already held `FX_Items` from the earlier T5 pre-creation query (retained). It was not treated as a result. The field was re-entered with `FX_Items` and committed with Tab.
- Pre-F4 screenshot `T13-01-sqltables-criterion-FX_Items-before-F4.png`: criteria row shows `FX_Items`; the criterion is visible.
- F4 once; wait 2 s; settled snapshot `page-...18-57-11-602Z.yml` and screenshot `T13-02-sqltables-FX_Items-after-F4-settled.png`.
- **Settled result, a real record:**
  - Grid row `1` with a row-arrow marker (not a blue star), Table Name `FX_Items`, Schema `dbo`, Multi-Site unchecked.
  - Attributes: Schema `dbo`; Table Name `FX_Items`; Multi-Site unchecked.
  - Columns... **enabled**; SQL Data Types... enabled; Edit Procedure... enabled; New Constraint... and Modify Constraint... **enabled**; Update Current Table **disabled** (no pending change).
  - Constraint grid, two rows:
    - `1` Primary Key | `PK_FX_Items` | Unique checked | Clustered checked | description `FX_Item`.
    - `2` Index | `IX_FX_Items_RowPointer` | Unique checked | Clustered unchecked | description `RowPointer`.
  - Status text `Table Name (SQL Tables 1 of 1)`. Save disabled. No dialog.
- Result: **dbo.FX_Items confirmed as a real table record.** The schema and name match the intended identity. No different name or schema was found, so no stop condition applied.
- Qualification: the grid's marker and dependent-control enablement are the native record indicators; the primary-key membership is confirmed separately in SQL Columns (below), not inferred from the constraint name alone.

## Constraints (read-only)
- `PK_FX_Items` is a Primary Key constraint. Its displayed description is `FX_Item`, which is the native constraint-description field. The SQL Columns detail for `FX_Item` shows **Primary Key checked** and Key Sequence `1`, which gives the column membership (see below).
- `IX_FX_Items_RowPointer` is an Index constraint on the system column `RowPointer` (description `RowPointer`). It is a system-generated index, not one of the four business columns.
- No other constraint is listed. The brief's "do not infer the primary key from constraint names alone" condition is satisfied by the SQL Columns detail.

## SQL Columns (Columns... opened once; read-only)
The SQL Columns runtime Form opened on the Columns... action, with 11 columns in the grid. Schema `dbo`, Table Name `FX_Items` for each.

| Col Id | Column Name | Data Type | System Data Type | Length | Decimal Position | Default Value | Is Nullable | Primary Key | Key Sequence | Is Computed | Role |
(Column Ids 2–5 and 10 were read from detail views; Column Id 1 and Ids 6–9 and 11 were not opened, so their values are unknown and not listed as observed.)
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | FX_Item | nvarchar | nvarchar | 20 | (blank) | (blank) | **unchecked** | **checked** | 1 | unchecked | Business (primary key) |
| 3 | FX_Description | nvarchar | nvarchar | 150 | (blank) | (blank) | **checked** | unchecked | (blank) | unchecked | Business |
| 4 | FX_Cost | decimal | decimal | 18 | 2 | (blank) | **checked** | unchecked | (blank) | unchecked | Business |
| 5 | FX_UM | nvarchar | nvarchar | 10 | (blank) | (blank) | **checked** | unchecked | (blank) | unchecked | Business |
| — | CreatedBy | not opened | — | — | — | — | — | — | — | — | System (listed only) |
| — | UpdatedBy | not opened | — | — | — | — | — | — | — | — | System (listed only) |
| — | CreateDate | not opened | — | — | — | — | — | — | — | — | System (listed only) |
| — | RecordDate | not opened | — | — | — | — | — | — | — | — | System (listed only) |
| 10 | RowPointer | RowPointerType | uniqueidentifier | (blank) | (blank) | `newid()` | **unchecked** | unchecked | (blank) | unchecked | System (row identifier; backs IX_FX_Items_RowPointer) |
| — | NoteExistsFlag, InWorkflow | not opened | — | — | — | — | — | — | — | — | System (listed only) |

Screenshot `T13-03` shows the Column Id 2 detail for FX_Item (the first grid row). Rows 6–9 and 11 were listed in the grid but not opened, so their types are not recorded.

Screenshots: `T13-03-sqlcolumns-overview-after-Columns-open.png` (FX_Item detail, Column Id 2, nvarchar, Is Nullable unchecked, Primary Key checked, Length 20, Key Sequence 1; 11-row list); `T13-04-sqlcolumn-FX_Description-detail.png` (Column Id 3, nvarchar, 150, Is Nullable checked, PK unchecked); `T13-05-sqlcolumn-FX_Cost-detail.png` (Column Id 4, decimal, 18, decimal position 2, Is Nullable checked, PK unchecked, Default blank); `T13-06-sqlcolumn-FX_UM-detail.png` (Column Id 5, nvarchar, 10, Is Nullable checked, PK unchecked, Default blank); `T13-07-sqlcolumn-RowPointer-system-detail.png` (Column Id 10, RowPointerType over uniqueidentifier, Is Nullable unchecked, Default `newid()`).

## Acceptance comparison against the AC-9 specification
| Spec item | Required (AC-9) | Observed | Verdict |
| --- | --- | --- | --- |
| Table identity | dbo.FX_Items | Table Name `FX_Items`, Schema `dbo` | **Matches** |
| FX_Item | nvarchar(20), not nullable, primary key | nvarchar, Length 20, Is Nullable unchecked, Primary Key checked, Key Sequence 1 | **Matches** |
| FX_Description | nvarchar(150) | nvarchar, Length 150 | **Type and length match.** Nullability not required by spec; observed Is Nullable checked. |
| FX_Cost | decimal(18,2) | decimal, Length 18, Decimal Position 2 | **Matches.** Default: IDO-level default 0 is not a SQL column default (Default Value blank). |
| FX_UM | nvarchar(10) | nvarchar, Length 10 | **Type and length match.** Nullability: Is Nullable checked (not specified by AC-9). |
| Primary key | FX_Item | PK_FX_Items, column FX_Item (Key Sequence 1) | **Matches** |
| Required / nullability | recorded where exposed | FX_Item not nullable; FX_Description, FX_Cost, FX_UM nullable | **Recorded as displayed** (see below) |
| System columns | distinguished | CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow are framework-generated | **Distinguished** from the four business columns |
| Indexes | distinguished | IX_FX_Items_RowPointer (system index on RowPointer) | **Distinguished** |

## Findings and qualifications
1. **Nullability of the three non-key business columns.** The SQL Columns detail shows Is Nullable **checked** for FX_Description, FX_Cost and FX_UM. The IDO property definitions show Required **unchecked** for these rows, which is consistent. The brief's AC-9 text does not specify nullability for these three columns beyond types and lengths, so this is recorded as observed, not as a defect. It is a difference from the AC-9 summary sentence only in that AC-9 lists "not nullable" for FX_Item alone; no database constraint was inferred or added.
2. **Default values.** FX_Cost shows **no SQL column default** (Default Value blank), while the IDO property FX_Cost shows Default Value `0`. The IDO default is an IDO-level property; no SQL DEFAULT is displayed for the column. This is an inherited-versus-explicit display difference, recorded and not resolved here.
3. **Primary key.** FX_Item is the primary key: PK_FX_Items, Key Sequence 1, Primary Key checked in the column detail. This is the only key column.
4. **System columns and index.** CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag and InWorkflow are framework-generated columns (not in the specification). IX_FX_Items_RowPointer is a system index. Recorded as distinct from the four business columns.
5. **FX_Item length and nvarchar** match the specification.
6. **Physical-level verification is not claimed.** All values are the Mongoose SQL metadata UI display. No independent database query was run.

## Limitations
- Rows 6–9 and 11 (CreatedBy, UpdatedBy, CreateDate, RecordDate, NoteExistsFlag, InWorkflow) were not opened in detail; their types are not recorded.
- Business-column detail values are from the SQL Columns detail view for each column (screenshots), not from an accessibility tree (the detail fields are not all exposed in the snapshot).
- The Table Name criterion is name-only; it does not filter by schema. The record's schema `dbo` is shown in the grid and the Attributes panel.
- Same-session UI-level observation only. No cross-session recovery (reserved for a later close-and-reopen task). No independent database durability claim.

## Acceptance-check status (T13)
- **AC-9 (SQL post-creation baseline):** **supported at same-session UI level.** Identity dbo.FX_Items; intended business columns, types, lengths and precision/scale match; FX_Item is the primary key and not nullable; FX_Description, FX_Cost and FX_UM are shown as nullable (recorded, not required by the spec); system columns and index distinguished. FX_UM and FX_Cost defaults are recorded as displayed (blank SQL defaults).
- **AC-11 (SQL recovery):** **NOT performed.** This was the first post-creation SQL inspection, not the close-and-reopen recovery. Recovery is reserved for a later task.
- **AC-8 (check-in):** not addressed in T13 (no check-in; reserved).
- **AC-10 (IDO recovery):** not addressed in T13.

## Visible runtime state left in place
- Sql Tables runtime tab: active, FX_Items real record, Save disabled, Update Current Table disabled. The Table Name editor holds focus with the text selected (nothing typed).
- Sql Columns runtime tab: opened from Columns..., showing the FX_Item column detail with the editor active; row selections moved to RowPointer last (view only).
- IDO Properties runtime tab: still open from T12 (not interacted with in T13).
- Save disabled throughout. No dialog open at any point after the Columns... action.

## Evidence files written in T13
- `evidence/EXP-049/T13-created-sql-table-and-columns-verification.md` (this file)
- `evidence/EXP-049/T13-00-fresh-snapshot-webclient-start.yml`
- `evidence/EXP-049/T13-01-sqltables-criterion-FX_Items-before-F4.png`
- `evidence/EXP-049/T13-02-sqltables-FX_Items-after-F4-settled.png`
- `evidence/EXP-049/T13-03-sqlcolumns-overview-after-Columns-open.png`
- `evidence/EXP-049/T13-04-sqlcolumn-FX_Description-detail.png`
- `evidence/EXP-049/T13-05-sqlcolumn-FX_Cost-detail.png`
- `evidence/EXP-049/T13-06-sqlcolumn-FX_UM-detail.png`
- `evidence/EXP-049/T13-07-sqlcolumn-RowPointer-system-detail.png`
- Tool-written files (not worker-written): `evidence/playwright/page-2026-10-10T18-56-53-724Z.yml`, `page-...18-56-58-777Z.yml`, `page-...18-57-11-602Z.yml`, `page-...18-57-20-449Z.yml`, `page-...18-57-31-235Z.yml`, `page-...18-57-36-888Z.yml`, `page-...18-57-42-457Z.yml`, `page-...18-57-48-425Z.yml`, and console logs.

## Next permitted action
Coordinator review. Pending authorisations: (a) the same-session close-and-reopen recovery of the IDOs runtime Form (AC-10) and the SQL Tables runtime Form with SQL Columns (AC-11); (b) the conditional check-in decision for FX_Items (AC-8), which is still open from T12 (Undo Check Out disabled, unexplained); (c) whether the IDO Properties and Sql Columns runtime tabs should be closed. No check-in, save, or further creation was performed in T13.
