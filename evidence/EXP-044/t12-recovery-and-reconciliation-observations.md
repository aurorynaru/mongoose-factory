# EXP-044 T12 — Same-session close/reopen recovery (AC-10) and evidence reconciliation: observations

Date: 2026-10-10. Task T12 (task_message_id `9ea963ca-5479-42f7-8ddd-e38e9cac73e1`, cycle 14). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single session, UI level). Not replay_verified. No database durability, cross-session, or cross-user visibility claim is made.

**Result: AC-10 same-session UI recovery was performed. The IDOs and Sql Tables runtime Forms were closed cleanly (no prompt) and reopened through Select Form. Recovered IDO `FX_UMs` (Revision 2, not locked, project FX_HelloWorldProject01, base table FX_UMs, alias fxum, FX_UM on FX_UMBase with key 1 and Required, FX_Description String/50/nvarchar, seven system properties) matches the T9/T11 post-check-in baseline. Recovered `dbo.FX_UMs` (one real record, PK_FX_UMs and IX_FX_UMs_RowPointer, nine columns; FX_UM nvarchar 10 NOT NULL primary key; FX_Description nvarchar 50 nullable) matches the T10 baseline. No mutation occurred. No Check In, Save, Finish, Create Form, Delete Row, or cleanup action was performed.**

Scope distinction (restated): the IDO and SQL table are **tenant-wide** metadata; the Designer editing scope is **User** (the Designer tab was not used in T12).

## 1. Preflight and clean-state verification (AC-10 first step)

- Web Client session authenticated (identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`). No refresh, no reauthentication, no navigation away from the Mongoose page.
- Designer tab 1 (`IdoPropertyClasses`, User scope) not used.
- Runtime tabs at start: `FX_HelloWorld01`, `Property Classes` (FX_UMBase, checked out to the operator), `IDOs`, `Sql Tables`, `Sql Columns` (selected).
- **IDOs form clean state (`t12-01`):** Save `[disabled]`; no active editor; no pending change; record `FX_UMs` at Revision 2, Locked By empty, Access As G6R, Check Out enabled (checked in); status `Check Out (IDOs 1 of 1)`.
- **Sql Tables form clean state (`t12-03`):** Save `[disabled]`; Update Current Table `[disabled]`; one record `FX_UMs` / `dbo`; status `Columns... (SQL Tables 1 of 1)`; no caution, no pending change.

## 2. Close of the IDOs and Sql Tables runtime Forms (AC-10)

| Step | Observed |
| --- | --- |
| Close IDOs: `Close Panel IDOs` (`f1e107`, label verified), **once** | Tab removed. URL moved to `favoriteContext=IdoPropertyClasses`. **No save, discard, validation, or confirmation prompt.** Screenshot `t12-02`. |
| Close Sql Tables: `Close Panel Sql Tables` (`f1e110`, label verified), **once** | Tab removed. **No prompt.** Screenshot `t12-04`. |
| Side effect (observed) | The **Sql Columns** runtime tab (opened from Sql Tables' Columns... button in T10 and T11) **also disappeared** with the Sql Tables Form. The brief said to preserve the Sql Columns Form; this was not a worker close. Recorded as an observed side effect of closing Sql Tables. Sql Columns was reopened later in T12 by the Columns... button, not by a separate Select Form action. |
| Preserved | `FX_HelloWorld01`, `Property Classes` (FX_UMBase, not edited). |

Post-close find for dialogs, prompts, validation, discard, save-changes: none. Screenshot `t12-04-after-SqlTables-form-tab-closed-no-prompt.png`.

## 3. Reopen IDOs through Select Form and exact-name recovery

| Step | Observed |
| --- | --- |
| Toolbar Open (`f1e26`), once | Select Form opened (`f1e1837`), filter prefilled `SqlTables`. |
| Filter: click `f1e1873`; Control+a; Backspace; `IdoCollections` typed with key events (`slowly`) | Rows: `IDOs` / `IdoCollections` (`f1e1908`) and `G6RIdoCollectionSearch`. |
| Caption cell `f1e1908`, then OK `f1e1892` (label verified) | URL `favoriteContext=IdoCollections`. IDOs tab reopened. The reopen loaded the full inventory (`IDOs 1 of 360`) with the stock record `ABDataServices` as the last-selected row; **not** an action taken by the worker. |
| Exact-name query: Filter in Place toolbar (`f1e38`), then IDO Name criterion | The first criterion fill `FX_UMs` was **refused** (`CollectionNameEdit` read-only, `mgedit-2452`; the same read-only condition as T2). The Tab after it moved focus only and changed nothing. Screenshot `t12-05` (ABDataServices record, read-only). **Interaction failure (E2).** |
| Corrected visible inspection (the one permitted): Filter in Place toolbar (`f1e38`) clicked again, then re-read of the IDO Name textbox (`f1e2007`, active) | Criteria mode with the field editable. Plain fill `FX_UMs` **succeeded**. |
| Tab (commit) | Criterion `FX_UMs` committed. Screenshot `t12-06` (`IDO Name: FX_UMs`, status `Filter in Place`, criteria echo row only, no record loaded). |
| **F4, once** | Result: **exactly one IDO record** `FX_UMs` (`t12-07`). Project `FX_HelloWorldProject01`; **Revision Num `2`**; Revision Date `10/10/2026`; **Locked By empty**; Access As `G6R`; Check Out enabled (checked in); Undo Check Out disabled. Tables sub-tab: `FX_UMs` / `fxum` / Primary Base / Inner, one row. Status `Extends (IDOs 1 of 1)`. |

- Exact-name result count: **1**. Matches the T11 post-check-in baseline.

## 4. Recovered IDO definition (Properties sub-tab, accessibility read `t12-08`)

Status `Properties 1 of 9`. Properties (sequence, name, property class, property type, column, key sequence, data type, length, column type, read-only, required):

| Seq | Property | Property Class | Type | Column | Key Seq | Data Type | Length | Column Type | Required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_UM | **FX_UMBase** | Bound to Column | FX_UM | **1** | (blank) | (blank) | (blank) | **checked** |
| 2 | FX_Description | (none) | Bound to Column | FX_Description | 0 | **String** | **50** | **nvarchar** | unchecked |
| 3 | CreatedBy | — | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | unchecked |
| 4 | UpdatedBy | — | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | unchecked |
| 5 | CreateDate | — | Bound to Column | CreateDate | 0 | Date | — | CurrentDateType | unchecked |
| 6 | RecordDate | — | Bound to Column | RecordDate | 0 | Date | — | CurrentDateType | unchecked |
| 7 | RowPointer | — | Bound to Column | RowPointer | 0 | GUID | — | RowPointerType | unchecked |
| 8 | NoteExistsFlag | — | Bound to Column | NoteExistsFlag | 0 | Byte | — | FlagNyType | unchecked |
| 9 | InWorkflow | — | Bound to Column | InWorkflow | 0 | Byte | — | FlagNyType | **checked** |

- **Inheritance note (not an effective-value proof):** FX_UM's Data Type, Length and Column Type cells are blank in this grid. These are consistent with property-class inheritance, but the grid does not display the effective value, so this run does **not** prove the saved IDO's effective String / 10 / nvarchar. The inference rests on the visible `FX_UMBase` reference and the independently verified FX_UMBase definition (Section 6), and on the physical column (Section 5).
- **Label String ID:** FX_UM's `FX_sUM` label is not displayed on the saved IDO property grid. The wizard had displayed it (T7); this recovery did not display it on the IDO. Not claimed as directly displayed on the saved IDO.
- The seven system properties are separately identified (rows 3 to 9), by name and by their Bound-to-Column type.

Evidence: `t12-08-idos-recovered-FX_UMs-properties-baseline.png` (grid: FX_UM blank cells; FX_Description String/50/nvarchar).

## 5. Reopen Sql Tables through Select Form and exact-name recovery

| Step | Observed |
| --- | --- |
| Toolbar Open (`f1e26`), once | Select Form opened (`f1e1837`). |
| Filter re-entry `SqlTables` (Control+a, Backspace, key events) | Row `Sql Tables` / `SqlTables` (`f1e4154`). OK clicked (label verified). URL `favoriteContext=SqlTables`. |
| Caution alertdialog `f1e4297` | Targeted snapshot verified text "Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms." and single button `OK` (`f1e4301`). **OK clicked once.** Informational only, the exact caution previously verified (EXP-040 / T4 / T5 / T10). |
| Criterion (grid criteria row only): mouse click at (450, 191) on the Table Name criteria cell; the active editor is the grid combobox `f1e4308` (grid `f1e4204`), **not** the Attributes Table Name combo | Plain fill `FX_UMs`; Tab. Screenshot `t12-10`: criterion `FX_UMs` in row 1, unstarred; Attributes mirror. Save `[disabled]` before F4. |
| **F4, once** | Accessibility read: status `Schema (SQL Tables 1 of 1)`; constraint rows **`Primary Key` `PK_FX_UMs`** (Unique and Clustered checked) and **`Index` `IX_FX_UMs_RowPointer`** (Unique checked); Save `[disabled]`; Update Current Table `[disabled]`; row number `1` with no star; `* Table Name` required marker. **One real record.** The screenshot `t12-11` was taken before the detail repainted (the same timing effect noted in T11); the accessibility read is the decisive record. |

## 6. Recovered column definitions (Columns..., read-only; `t12-12`, `t12-13`)

Opened by the supported `Columns...` button (`f1e4218`). Sql Columns status `Column Name (SQL Columns 1 of 9)`.

| # | Column | Column Id | Data Type | System Data Type | Length | Is Nullable | Primary Key | Key Seq | Origin |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **FX_UM** | 2 | nvarchar | nvarchar | **10** | **unchecked (NOT NULL)** | **checked** | **1** | authored |
| 2 | **FX_Description** | 3 | nvarchar | nvarchar | **50** | **checked (nullable)** | unchecked | blank | authored |
| 3–9 | CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow | — | not read in detail | — | — | — | — | — | system-generated (by name) |

- FX_UM detail (`t12-13`): Column Id 2; Schema `dbo`; Table `FX_UMs`; Data Type `nvarchar`; System Data Type `nvarchar`; Length `10`; Is Nullable **unchecked** (disabled checkbox, `f1e4702`); Primary Key checked; Key Sequence `1`; Is Computed unchecked; Default empty.
- Table constraints (Section 5): `PK_FX_UMs` (primary key; the description FX_UM); `IX_FX_UMs_RowPointer` (system index on RowPointer).
- The primary-key membership of FX_UM is supported by two views: the Columns Primary Key checkbox with Key Sequence 1, and the constraint `PK_FX_UMs` described as FX_UM.
- FX_Description nullability is recorded as observed (nullable). The brief gave no expected nullability and the wizard had no control for it.
- System columns 3 to 9: not read in detail (names only). Their types, lengths and nullability are **not verified**.

## 7. Comparison against the post-creation baselines

| Item | Baseline (T9 / T10 / T11) | Recovered (T12) | Match |
| --- | --- | --- | --- |
| IDO name | FX_UMs | FX_UMs | Yes |
| Project | FX_HelloWorldProject01 | FX_HelloWorldProject01 | Yes |
| Base table / alias | FX_UMs / fxum (Primary Base, Inner) | FX_UMs / fxum (Primary Base, Inner) | Yes |
| Revision | 2 after check-in (T11) | 2 | Yes |
| Lock | none after check-in (T11) | Locked By empty | Yes |
| FX_UM property class | FX_UMBase | FX_UMBase | Yes |
| FX_UM Key Sequence / Required | 1 / checked | 1 / checked | Yes |
| FX_UM Data Type / Length / Column Type on IDO | blank (T9, T11) | blank | Yes (display unchanged; not proven effective) |
| FX_Description | String / 50 / nvarchar | String / 50 / nvarchar | Yes |
| System properties | 7 (T9, T11) | 7 (rows 3–9) | Yes |
| Table identity | dbo.FX_UMs, one real record (T10) | dbo.FX_UMs, one real record | Yes |
| Constraints | PK_FX_UMs; IX_FX_UMs_RowPointer (T10) | PK_FX_UMs; IX_FX_UMs_RowPointer | Yes |
| Columns | 9 (T10) | 9 | Yes |
| FX_UM nvarchar / 10 / NOT NULL / PK | T10 | T12 | Yes |
| FX_Description nvarchar / 50 / nullable | T10 | T12 | Yes |

Limitation: the comparison is same-session UI recovery only. It does not establish database-level durability.

## 8. Operation counts and recovery (T12)

| Operation | Count |
| --- | --- |
| **Form tab closes** (IDOs, Sql Tables) | **2** (both ordinary; no prompt) |
| **Form reopens** (IDOs, Sql Tables) | **2** (both through Select Form) |
| Exact-name recovery queries (F4) | **2** (`FX_UMs` IDO; `FX_UMs` SQL table) |
| Criterion entries committed (plain fill + Tab) | **2** (IDO; SQL table) plus **1 refused fill** (IDO, E2) |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| Save / Finish / Create Form | **0 / 0 / 0** |
| Update Current Table / Columns edits / Constraint changes / Delete Row | **0** |
| Field or table definition edits | **0** |
| Caution alert OK | **1** (informational; verified text and label) |
| Select Form OK | **2** |
| Columns... opened | **1** (read-only) |
| Sub-tab clicks (IDO Tables, Properties) | **3** |
| Tab selections (navigation) | **3** |
| Filter in Place toolbar clicks | **2** on the IDOs form (one before the refused fill, when the form was already in record view; one as the corrected inspection after E2). **0** on the Sql Tables form (it opened already in Filter in Place mode). |
| Screenshots | **13** (`t12-01` to `t12-13`) |
| Errors | **1** (E2: the IDO criterion fill refused — `CollectionNameEdit` read-only, a record-view state). No ref-not-found error occurred in T12. |
| Recovery snapshots | **0 of 1** used (the recovery was not a fresh untargeted snapshot; see the recovery note) |
| Corrected visible inspections | **1 of 1** used (the Filter in Place re-entry with the toolbar control after E2, followed by a successful fill and Tab) |
| Prompts answered | **1** (Sql Tables caution OK, informational). **0** others. |
| Portal banner dismissals | **0** (none visible) |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart, reauthentication | **0** |

Recovery accounting note: E2 was a refused fill into the read-only criterion field, not a stale ref. The one corrected visible inspection was re-entering Filter in Place with the toolbar control (`f1e38`), which made the field editable, followed by one successful fill and one Tab. No fresh untargeted recovery snapshot was taken in T12, and none was needed; the Select Form and Columns steps used targeted reads.

## 9. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t12-01-idos-clean-state-before-close.png` | IDOs form: FX_UMs Revision 2, Check Out enabled, status `Check Out (IDOs 1 of 1)`, Properties grid | Clean pre-close state (AC-10 step 1) | Post-close state |
| `t12-02-after-IDOs-form-tab-closed-no-prompt.png` | Tabs after the IDOs close; no prompt | IDOs Form tab removed; no unsaved-change prompt (AC-10 close) | Database state |
| `t12-03-sqltables-clean-state-before-close.png` | Sql Tables: `FX_UMs`/`dbo`, Save disabled, Update disabled | Clean pre-close state (AC-10) | — |
| `t12-04-after-SqlTables-form-tab-closed-no-prompt.png` | Tabs after the Sql Tables close; no prompt; FX_HelloWorld01, Property Classes remain | Sql Tables Form tab removed; no prompt | Sql Columns not preserved (observed side effect) |
| `t12-05-idos-reopened-readonly-criterion-after-fill-refused.png` | Reopened IDOs: full inventory (`IDOs 1 of 360`), ABDataServices record; criterion field read-only | E2 interaction failure evidence | — |
| `t12-06-idos-FX_UMs-criterion-committed-before-F4.png` | IDO Name `FX_UMs` committed in Filter in Place; criteria echo only | Criterion established before F4 | The result |
| `t12-07-idos-FX_UMs-after-single-F4-recovered.png` | One record `FX_UMs`, Revision 2, Locked By empty, Check Out enabled, Tables `FX_UMs`/`fxum`; `Extends (IDOs 1 of 1)` | **AC-10 IDO recovery: one saved record matching the T11 baseline** | Property values (see t12-08) |
| `t12-08-idos-recovered-FX_UMs-properties-baseline.png` | Properties grid: FX_UM (FX_UMBase, key 1, Required checked, blank data cells); FX_Description String/50/nvarchar | **AC-10 property recovery, with the blank-cell limitation visible** | Effective inherited values |
| `t12-09-sqltables-reopened-fip-blank-criteria-after-caution-ok.png` | Reopened Sql Tables: caution acknowledged; blank criteria row; Attributes empty | Reopen state before the criterion | — |
| `t12-10-sqltables-FX_UMs-criterion-committed-before-F4.png` | Grid criterion `FX_UMs`, unstarred; Save disabled | Criterion in the grid before F4 | The result |
| `t12-11-sqltables-FX_UMs-after-single-F4-recovered.png` | Image taken before repaint: Table Name `FX_UMs` row with empty Schema; accessibility read shows the record and constraints | **Recovered table record** (decisive data is the accessibility read, not this image) | The image itself as the proof |
| `t12-12-sqlcolumns-recovered-FX_UMs-column-grid.png` | Sql Columns: 9 rows; FX_UM detail (nvarchar, 10, Is Nullable unchecked, PK checked, key 1) | **AC-10 table column recovery: FX_UM** | System-column types |
| `t12-13-final-state-after-recovery-reads.png` | Sql Columns state after reads; no dialog; FX_UM detail | Stable end state; column detail | — |

Note: `t12-09`, `t12-10`, and `t12-11` were captured in the Sql Tables tab, and `t12-12`/`t12-13` in the Sql Columns tab; the file list above records each one's identity from its own screenshot and accessibility read.

## 10. Final browser state (last verified)

- Tab 0 (Mongoose, `favoriteContext=SqlColumns`): `Sql Columns` runtime tab selected, showing `FX_UMs` column detail (FX_UM current row, Column Name combobox active with text selected, not edited; 9 columns). The runtime tabs open are `FX_HelloWorld01`, `Property Classes` (FX_UMBase, checked out to the operator), `IDOs` (FX_UMs recovered record; Revision 2, checked in; Check Out enabled), and `Sql Tables` (criterion `FX_UMs`, record `FX_UMs`/`dbo` loaded, Save disabled).
- No dialog, no unsaved-change prompt, no banner (`t12-13`).
- Tab 1 (Designer, User scope): not used in T12.
