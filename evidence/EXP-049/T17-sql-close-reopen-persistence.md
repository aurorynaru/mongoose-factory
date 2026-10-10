# EXP-049 — T17 SQL Tables and SQL Columns ordinary close/reopen persistence

Run: R-20261011-020822-9Eej, cycle 20, task T17 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).

**Result: SQL Columns and then Sql Tables were closed with their own native Form-tab Close controls, and both disappeared from the Form-tab list. Sql Tables was reopened once through Open → Select Form (row `Sql Tables / SqlTables`). After one caution notice was accepted, the Table Name criteria cell was made editable and `FX_Items` was entered once, with one F4. The result returned one real record: Table Name `FX_Items`, Schema `dbo`, PK_FX_Items (Primary Key, FX_Item) and IX_FX_Items_RowPointer (RowPointer). Columns... was opened once from the reopened Form, and the SQL Columns Form showed the four business columns with the same types, lengths, nullability and primary-key designation as the T13 baseline. This is observed same-session ordinary Form close/reopen evidence only. It is NOT replay_verified and NOT an independent database-catalogue check.**

## Pre-close state (observed)
- Tab 1 (Web Client) selected with fresh references (`T17-00`).
- Form-tab list: Property Classes, Sql Tables, IDO Projects, Export/Import Strings, Sql Columns, IDOs, IDO Properties (IDO Properties selected).
- Save disabled. No dialog, no unsaved-change wording (`T17-00` snapshot; the grep for "unsaved", "modified", "dirty", "discard", "Do you want" returned nothing).
- IDOs and IDO Properties were not closed (outside scope).

## Close actions
| # | Action | Result |
| --- | --- | --- |
| 1 | Close Panel Sql Columns (`f1e109`), native Form-tab close, first | Sql Columns removed from the Form-tab list. Context moved to `favoriteContext=SqlTables`. No dialog. Snapshot `page-...19-11-44-955Z.yml`. |
| 2 | Close Panel Sql Tables (`f1e100`), native Form-tab close, second | Sql Tables removed from the Form-tab list. No dialog, no unsaved-change prompt. Save disabled. Snapshot `T17-01-fresh-snapshot-after-both-closed.yml`. |

Confirmed closed state: the Form-tab list in `T17-01` holds Property Classes, IDO Projects, Export/Import Strings, IDOs, IDO Properties. Neither Sql Tables nor Sql Columns is present.

## Reopen (Sql Tables, once)
- Open toolbar (`f1e25`), once → Select Form dialog, filter still held `IdoCollections`.
- Filter changed to `SqlTables` (fill) and committed with Tab. The filtered list showed `Sql Tables / SqlTables`, `Sql Tables Constraint` and `SqlTablesPrimaryKey`. The form name was taken from this list, not assumed. Row `Sql Tables / SqlTables` (`f1e1541`) selected; OK pressed once (`f1e1532`).
- Context changed to `favoriteContext=SqlTables`. Reopened Sql Tables Form identified by its tab heading and tabpanel `Sql Tables`.
- A **caution alertdialog** ("Sql Tables": "Please be very careful using these forms. If you delete a column or a table you will lose data...") appeared on the reopened Form. It is the known informational notice seen in T1. Its single button was OK; it was accepted once. It is not a save or discard prompt. Snapshot `page-...19-12-29-289Z.yml`.

## Mode determination (before any FiP-related click)
- Fresh snapshot `T17-03` and screenshot `T17-04` (taken after the caution was accepted): the grid held one blank row (Table Name, Schema, Multi-Site blank; no star; arrow marker only); the detail Schema and Table Name comboboxes were empty; constraint grid empty; Save disabled; the tab header carried the filter icon and the status bar read "Filter in Place".
- Assessment: **not loaded-record mode** (no table record loaded). The filter icon and the "Filter in Place" status text are an indication of the criteria state, and the criteria cell later became editable on one click. That mode reading is an inference from these indicators, not from an explicit editability attribute read before the click. Per the brief, the Filter in Place toolbar control was **not clicked again**.
- The Table Name criteria cell (`f1e1596`) was clicked once to make it the editable criterion (the same criteria-cell route used in T5 and T13). The snapshot then listed an active editable combobox (`f1e1695`). This is the route the brief allows ("the criteria field"), taken without an extra FiP click.

## Query (one criterion, one F4)
- `FX_Items` entered once into the active criteria combobox (`f1e1695`). Committed with Tab.
- `find` FX_Items confirmed the criteria row (`gridcell "FX_Items"` in the criteria row) and the detail Table Name combobox value `FX_Items`.
- Pre-F4 screenshot: `T17-05-sqltables-criterion-FX_Items-before-F4.png`.
- F4 pressed **once**; wait 2 s; settled snapshot `T17-06-fresh-snapshot-after-F4-settled.yml` and screenshot `T17-07-sqltables-FX_Items-after-F4-settled.png`.

## Recovered Sql Tables record (settled)
| Field | Recovered value | T13 baseline | Match |
| --- | --- | --- | --- |
| Grid row | `1 \| FX_Items \| dbo`, row-arrow marker (not a blue star), Multi-Site unchecked | `1 \| FX_Items \| dbo`, row-arrow marker | Yes |
| Schema | dbo | dbo | Yes |
| Table Name | FX_Items | FX_Items | Yes |
| Multi-Site | unchecked | unchecked | Yes |
| Constraint 1 | Primary Key, PK_FX_Items, description FX_Item | Primary Key, PK_FX_Items, FX_Item | Yes |
| Constraint 2 | Index, IX_FX_Items_RowPointer, description RowPointer | Index, IX_FX_Items_RowPointer, RowPointer | Yes |
| Columns... | enabled | enabled | Yes |
| Update Current Table | disabled (no pending change) | disabled | Yes |
| New / Modify Constraint | enabled | enabled | Yes |
| Save | disabled | disabled | Yes |
| Status | `Schema (SQL Tables 1 of 1)` | `Table Name (SQL Tables 1 of 1)` | Status wording differs by focused field; count matches |

Result: the expected table is present with the intended identity (`dbo.FX_Items`). No different name or schema was found, so no stop condition applied.

## Columns... (opened once from the reopened Form)
- Columns... (`f1e1605`), once. The SQL Columns runtime Form opened on `favoriteContext=SqlColumns` with the tab present in the Form-tab list (`T17-08`). It lists **11 rows**: FX_Item, FX_Description, FX_Cost, FX_UM (business) and CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow (framework).

Column detail, read-only (view selections only; no value changed):
| Column | Column Id | Data Type | System Data Type | Length | Decimal Position | Default | Is Nullable | Primary Key | Key Sequence | Screenshot |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FX_Item | 2 | nvarchar | nvarchar | 20 | (blank) | (blank) | **unchecked** | **checked** | **1** | `T17-08` (overview with FX_Item detail) |
| FX_Description | (grid row 2) | nvarchar | nvarchar | 150 | (blank) | — | nullable (grid) | unchecked | — | not re-read in detail (T13 detail stands; grid row shows nvarchar 150, Is Nullable checked) |
| FX_Cost | 4 | decimal | decimal | 18 | **2** | (blank) | **checked** | unchecked | (blank) | `T17-09` |
| FX_UM | 5 | nvarchar | nvarchar | 10 | (blank) | (blank) | **checked** | unchecked | (blank) | `T17-10` |

- The **SQL FX_Cost default is blank** on the reopened Columns Form, consistent with T13. The IDO property displayed default `0` (T12). No SQL default is claimed for FX_Cost, since none is visibly supported on the Columns Form.
- Framework rows CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag and InWorkflow were listed, distinct from the four business columns. RowPointer (T13) is `RowPointerType` over `uniqueidentifier`, default `newid()`, not nullable; its detail was not re-read in T17.

## Counts (T17)
| Action | Count |
| --- | --- |
| Native Form-tab close (Sql Columns, first) | 1 |
| Native Form-tab close (Sql Tables, second) | 1 |
| Select Form open (toolbar) | 1 (filter edit 1; row 1; OK 1) |
| Caution alertdialog OK | 1 (informational; known first-open notice) |
| Filter in Place clicks (Sql Tables) | **0** (mode already criteria-entry; not clicked) |
| Table Name criteria cell clicks | 1 (made the criterion editable) |
| Criterion entries | **1** (`FX_Items`) |
| Tab commits | 1 |
| F4 runs | **1** |
| Distinct SQL table recovery queries | **1** |
| Columns... clicks | 1 |
| Column detail selections (view only) | 3 (FX_Cost, FX_UM; FX_Item detail shown on open) |
| Fresh untargeted snapshots (this task) | 4 (`T17-00`, `T17-01`, `T17-02`, `T17-03`, `T17-06`) |
| Stale-ref or browser-reference failures | 0 |
| Save / New / Delete / Refresh / Update Current Table / New or Modify Constraint | 0 |
| Check In / Check Out / Undo | 0 |
| Wizard / Finish / Create Form | 0 |
| Direct SQL, browser evaluate, metadata unload, preference change, cache reset | 0 |
| Screenshots (worker) | 7 saved PNGs (`T17-04`, `T17-05`, `T17-07`, `T17-08`, `T17-09`, `T17-10`; plus `T17-01` closed-state snapshot is YAML). The pre-close state was not separately captured as an image. |

## Acceptance conclusion (AC-11)
- **AC-11 (SQL recovery after ordinary close and reopen):** **supported at same-session ordinary Form close/reopen level**, with these qualifications:
  - The reopened Sql Tables Form, after one fresh exact-name query (`FX_Items`, one F4), returned dbo.FX_Items with schema dbo, PK_FX_Items and IX_FX_Items_RowPointer; Save was disabled; no unexpected prompt remained once the informational caution was accepted.
  - Supported SQL Columns inspection on the reopened Form showed the same four business columns, physical types, precision and scale, nullability and primary-key designation as the T13 baseline. FX_Description was confirmed from its grid row and T13 detail; the FX_Cost default remained blank.
  - Qualified as same-session UI recovery. **Not** independent database durability, **not** a cross-session test, **not** replay_verified.
- **AC-9:** unchanged from T13 (SQL post-creation baseline), now re-observed after reopen.

## Documented differences (inherited-versus-explicit display)
- FX_Cost: the IDO property shows default `0` (T12, IDO-level); the SQL column shows **no default** (blank) on both T13 and T17. The difference persists across the close/reopen and is recorded, not resolved.
- Nullability: FX_Description, FX_Cost and FX_UM show nullable on the SQL side, which AC-9 does not require otherwise. FX_Item is not nullable and is the primary key.
- Status wording differs between the T13 and T17 Sql Tables screens (`Table Name (…)` vs `Schema (…)`), tied to the focused field, with the same record count (1 of 1).

## Limitations
- The Sql Tables mode was read as criteria-entry from the filter icon and status text, not from an explicit editability attribute of the criteria cell. The cell became an active combobox after one click; that is the observed evidence.
- Sql Columns FX_Description detail and the RowPointer detail were not re-read in T17.
- The caution alertdialog was accepted (OK) once as the known informational notice; no other prompt occurred.
- The Sql Tables reopen used the Select Form row `Sql Tables / SqlTables` selected from the filtered list (not assumed).

## Evidence files written in T17
- `evidence/EXP-049/T17-sql-close-reopen-persistence.md` (this file)
- `evidence/EXP-049/T17-00-fresh-snapshot-precheck.yml`, `T17-01-fresh-snapshot-after-both-closed.yml`, `T17-02-select-form-filtered-SqlTables.yml`, `T17-03-fresh-snapshot-reopened-sqltables-mode.yml`, `T17-06-fresh-snapshot-after-F4-settled.yml`
- `evidence/EXP-049/T17-04-reopened-sqltables-mode-before-FiP.png` (empty criteria-entry mode before the criterion; shows the blank row and filter icon, no record)
- `evidence/EXP-049/T17-05-sqltables-criterion-FX_Items-before-F4.png` (criterion before F4)
- `evidence/EXP-049/T17-07-sqltables-FX_Items-after-F4-settled.png` (recovered record, constraints, Save disabled)
- `evidence/EXP-049/T17-08-sqlcolumns-reopened-overview-FX_Item-detail.png` (11-row list; FX_Item detail: Column Id 2, nvarchar 20, not nullable, PK checked, key sequence 1)
- `evidence/EXP-049/T17-09-sqlcolumn-FX_Cost-detail-reopened.png` (decimal 18, scale 2, nullable, PK unchecked, default blank)
- `evidence/EXP-049/T17-10-sqlcolumn-FX_UM-detail-reopened.png` (nvarchar 10, nullable, PK unchecked, default blank)
- Tool snapshots `evidence/playwright/page-2026-10-10T19-11-*`, `...19-12-*`, `...19-13-*` (not worker-written) and console logs.

## Next permitted action
Coordinator review. Stop here. The Forms (Sql Tables and Sql Columns) are left open in clean observed states. Not performed in T17: the final audit (AC-12) and any further close/reopen. No check-in, save, or creation was performed.
