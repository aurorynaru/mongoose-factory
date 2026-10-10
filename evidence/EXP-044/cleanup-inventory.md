# EXP-044 — Cleanup inventory

Last updated: 2026-10-10, after T1 (read-only prerequisite gate). Classification: observed only.

## Objects created by EXP-044 (T1)

**None.** T1 created no SQL table, no IDO, no IDO project, no Form, no property class, no string resource, and no field row. The Data Maintenance wizard was cancelled (`Yes` on the cancel confirmation) without Finish. No Save was pressed.

Created-object count: **0**. Cleanup responsibility: **none** for T1.

## Intended objects for a later, separately authorized creation task (not created)

| Object | Scope | Project | Alias | Fields | Creation owner | Cleanup owner | Lifecycle state |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SQL table `dbo.FX_UMs` | Tenant-wide metadata (not User-scoped) | n/a | n/a | `FX_UM` nvarchar(10) PK NOT NULL (intended); `FX_Description` nvarchar(50) (intended) | Factory (EXP-044, if authorized) | Factory operator; deletion out of scope for EXP-044 | Not created |
| IDO `FX_UMs` | Tenant-wide metadata | `FX_HelloWorldProject01` (existing, reference only) | `fxum` | `FX_UM` (FX_UMBase, PK, Required); `FX_Description` (String 50, Label `FX_sDescription`) | Factory (EXP-044, if authorized) | Factory operator; deletion out of scope | Not created |

## Pre-existing objects touched in T1

| Object | T1 interaction | Change |
| --- | --- | --- |
| Property class `FX_UMBase` (IDO Property Classes) | Viewed in the Web Client Form (preflight); selected in the wizard's Property Class lookup (uncommitted, then discarded by Cancel) | **None.** Data Type `String`, Length `10`, Column Data Type `nvarchar`, Label String ID `FX_sUM`, Revision No `1`, Locked By the operator, still checked out (Check In enabled). No Check In, no Undo, no Save. |
| IDO project `FX_HelloWorldProject01` | Pre-populated in the wizard's IDO Project Name combobox; not opened, not changed | **None** |
| IDO `FX_HelloWorld01` and its SQL table `dbo.FX_HelloWorld01` | Not opened in T1 | **None** |
| Form `FX_HelloWorld01` (runtime tab) | Tab present at preflight; not selected or edited in T1 | **None** |
| Form `IdoPropertyClasses` (Designer) | Auto-loaded in the Designer tab (`?MGForm=IdoPropertyClasses`) by the Designer launch; design view only | **None**. No edit, no Save. |

## Session artifacts (non-metadata)

- A new browser tab for the Web Designer (`designer/default.aspx`) remains open after T1.
- No User Preference, Explorer shortcut, or configuration change.

## T2 update (read-only collision gate, 2026-10-10)

- Created objects: **still none.** T2 performed read-only Filter-in-Place queries in the IDOs (`IdoCollections`) Form only. No SQL Tables query was run. No wizard, Finish, Save, New, field, check-in, check-out, or lifecycle action.
- Observed collection state for `FX_UMs` in the IDOs collection: **inconclusive** (zero rows, no placeholder, criteria not readable afterwards). The positive control `FX_HelloWorld01` returned its one known row. Evidence: `evidence/EXP-044/t2-collision-gate-observations.md`, `t2-01`, `t2-03`, `t2-04`.
- Pre-existing objects (FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01 IDO and table): read and displayed only. Not edited, not checked in or out. `FX_HelloWorld01` IDO was displayed with Check Out enabled (checked in), unchanged.
- Form `IdoCollections` (IDOs) is open in the Web Client tab, in a stable state, with no record and Save disabled. No cleanup was performed.

## T2b update (IDOs collision retry, 2026-10-10)

- Created objects: **still none.** T2b ran read-only FiP criteria queries in the IDOs (`IdoCollections`) Form: one `FX_UMs` query (zero rows observed) and one same-session positive control `FX_HelloWorld01` (one row). No SQL Tables query. No wizard, Finish, Save, New, field, check-in, check-out, or lifecycle action.
- A lowercase `fx_ums` entry was blocked by a harness hook and was not executed.
- Observed state for `FX_UMs` in the IDOs collection: zero rows (observed absence with limitations). Evidence: `evidence/EXP-044/t2b-idos-collision-retry-observations.md`, `t2b-02`, `t2b-03`, `t2b-04`.
- Pre-existing objects (FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01 IDO and table): read only. Not edited, not checked in or out.
- The IDOs Form is left in Filter in Place mode with criteria `FX_HelloWorld01`. No cleanup performed.

## T4 update (SQL Tables collision gate, 2026-10-10)

- Created objects: **still none.** T4 ran read-only Filter-in-Place criteria queries in the SQL Tables (`SqlTables`) Form only: positive control `FX_HelloWorld01` (one real table row) and target `FX_UMs` (zero data rows; one unsaved add-mode placeholder row displayed). No wizard, Finish, Save, New, check-in, check-out, schema action, or definition-field entry. The Attributes Table Name and Schema combos were not used.
- The `FX_UMs` placeholder row is an unsaved add-mode record. It was **not** saved, discarded, or typed into. Save is disabled, so no table definition is dirty. It is not a created object. Its disposal is pending a coordinator decision (a later close or criteria change may raise a save or discard prompt, which must be verified before answering).
- Pre-existing objects: `FX_HelloWorld01` table (`dbo`, PK `PK_FX_HelloWorld01`, index `IX_FX_HelloWorld01_RowPointer`) was displayed read-only. Not edited. `FX_UMBase`, `FX_HelloWorldProject01`, and the `FX_HelloWorld01` IDO were not touched in T4.
- Observed state for `FX_UMs` in the SQL Tables collection: zero data rows (observed absence with limitations). Evidence: `evidence/EXP-044/t4-sqltables-collision-gate-observations.md`, `t4-02`, `t4-03`, `t4-05`, `t4-06`.
- Case-insensitive coverage: not demonstrated (carried limitation). No cleanup was performed.

## T5 update (SQL Tables closure and wizard preparation, 2026-10-10)

- Created objects: **still none.** T5 did not Finish, Save, or create anything. The New Data Maintenance wizard is **open** on page 1 with IDO Name `FX_UMs`, IDO Project `FX_HelloWorldProject01` (selected from the visible lookup), and Table Alias `fxum`. No field has been configured. Field row 1 is the blank placeholder and was not deleted. Nothing in the wizard exists in the database or metadata until Finish.
- The Sql Tables tab (the FX_UMs query placeholder from T4) was closed with no prompt. The placeholder was not saved or typed into. Its removal with the tab is observed; whether it was an implicit discard is not proven.
- Pre-existing objects (FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01 IDO and table, vendor IdoPropertyClasses Designer Form): not edited, not saved, not checked in or out. The project was selected in the wizard's lookup only; the project itself is unchanged.
- Ownership of any future `FX_UMs` objects, if created: factory (EXP-044), tenant-wide. Cleanup responsibility: factory operator. No cleanup was performed in T5.
- Evidence: `evidence/EXP-044/t5-wizard-preparation-observations.md`, `t5-01-after-sqltables-tab-close-click.png`, `t5-02-wizard-page1-prepared-FX_UMs-fxum-FX_HelloWorldProject01.png`.

## T6 update (field row 1 check and single Delete Row, 2026-10-10)

- Created objects: **still none.** The wizard was not finished. No field was configured (FX_UM and FX_Description both not configured). The wizard's grid row 1 (the starred blank add-mode row) was pressed once with Delete Row; the outcome is ambiguous (one starred blank row still displayed). Nothing was persisted: the wizard has not been finished or saved.
- Wizard state: open in the Designer tab on page 1 (`FX_UMs`, `FX_HelloWorldProject01`, `fxum`), field grid with one starred blank row, Finish disabled. If the wizard is cancelled later, the discard confirmation must be verified; the wizard's data is not a created object.
- Pre-existing objects (FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01 IDO and table, vendor `IdoPropertyClasses` Designer Form): not edited, not saved, not checked in or out.
- Ownership of any future `FX_UMs` objects, if created: factory (EXP-044), tenant-wide. Cleanup responsibility: factory operator. No cleanup was performed in T6.
- Evidence: `evidence/EXP-044/t6-field-grid-row1-placeholder-delete-observations.md`, `t6-01-wizard-state-before-field-work.png`, `t6-02-after-single-delete-row-placeholder.png`.

## T7 update (two-field configuration, wizard open, no Finish, 2026-10-10)

- Created objects: **still none.** The wizard was not finished, saved, or submitted. Nothing exists in the database or metadata for `FX_UMs` until Finish.
- Staged (uncommitted) wizard definition, for cleanup planning if the wizard is later cancelled or the record is discarded:
  - Table/IDO name `FX_UMs` (tenant-wide), project `FX_HelloWorldProject01` (existing; reference only), alias `fxum`.
  - Field 1: `FX_UM`, Property Class `FX_UMBase` (existing; inspection and selection only), String, Length 10, SQL nvarchar, Label `FX_sUM` (reference), Primary Key checked, Required checked.
  - Field 2: `FX_Description`, String, Length 50, SQL nvarchar, Label `FX_sDescription` (reference), PK and Required unchecked.
- Wizard state: open in the Designer tab on page 1; Finish not pressed. Cancelling it would raise a discard confirmation, which must be verified before answering. No object is affected by a discard.
- Required on FX_UM was checked by the Primary Key click (unresolved mechanism; see the T7 record).
- Pre-existing objects (FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01 IDO and table, vendor `IdoPropertyClasses` Designer Form): not edited, not saved, not checked in or out. The property class was selected in the wizard lookup only.
- Ownership of any future `FX_UMs` objects, if created: factory (EXP-044), tenant-wide. Cleanup responsibility: factory operator. No cleanup was performed in T7.
- Evidence: `evidence/EXP-044/t7-field-configuration-observations.md`, `t7-01-fresh-state-before-row1-configuration.png`, `t7-02-FX_UM-property-class-FX_UMBase-selected-after-tab.png`, `t7-03-after-primary-key-click-required-state-observed.png`, `t7-04-pre-finish-field-grid-two-rows-FX_UM-FX_Description.png`.

## T8 update (single Finish; Create Form declined; wizard closed, 2026-10-10)

- **Created by EXP-044 (wizard-level observation):** one tenant-wide SQL table `FX_UMs` and one tenant-wide IDO `FX_UMs` in project `FX_HelloWorldProject01`, alias `fxum`, with fields `FX_UM` (FX_UMBase; String; Length 10; nvarchar; Label `FX_sUM`; Primary Key; Required) and `FX_Description` (String; Length 50; nvarchar; Label `FX_sDescription`). Evidence of creation: the wizard's settled message `Table and IDO created.` after one Finish (`evidence/EXP-044/t8-04-wizard-completion-state-after-No.png`, `t8-finish-observations.md`). **Not yet verified by any post-creation query.**
- **Creation ownership:** factory (EXP-044 creation, operator-authorized). Tenant-wide scope. **Cleanup responsibility:** factory operator. Deletion is out of EXP-044 scope; the objects are to be left intact at the end of the experiment.
- **Form creation:** declined with `No` (once). No Form was created by this worker (not verified by a Form-list query).
- **Lifecycle state:** not inspected in T8. The IDO may be checked out (the EXP-043 property class was left checked out after a Save). Check-in is out of T8 scope.
- **Pre-existing objects:** FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01 IDO and table, and the vendor `IdoPropertyClasses` Designer Form were not edited, saved, checked in or out in T8.
- **Unexpected observation:** a Designer console error `doAutoInsert` in `onKeyPressToNewRow` during an empty Default Value Tab (no row inserted; effect unknown).
- **Cleanup performed:** none.
- Evidence: `evidence/EXP-044/t8-finish-observations.md`, `t8-01-…` to `t8-05-…` PNGs.

## T9 update (post-creation IDO inspection; check-in withheld, 2026-10-10)

- **Created object confirmed (IDO level):** exactly one IDO record `FX_UMs` in project `FX_HelloWorldProject01` (exact-name Filter in Place query; one F4; saved record with revision 1 and a lock owner). Base table `FX_UMs`, alias `fxum`, Primary Base, Inner. Properties: `FX_UM` (bound to column `FX_UM`, property class `FX_UMBase`, Key Sequence 1, Required checked; Data Type, Length and Column Type **blank** in the IDO grid) and `FX_Description` (bound to column `FX_Description`, String, 50, nvarchar). Seven system-generated properties (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow).
- **Lifecycle state (observed):** checked out to the operator (`anton.ramos@3mworks.com.ph`); Check In enabled; Undo Check Out disabled. **No check-in performed** (the blank inherited FX_UM attributes are an unexpected definition discrepancy, held for coordinator decision).
- Creation ownership: factory (EXP-044), tenant-wide. Cleanup responsibility: factory operator. **Cleanup performed: none.** The IDO is to be left intact.
- Pre-existing objects (FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01 IDO and table, vendor `IdoPropertyClasses` Form): not edited, not checked in or out in T9.
- Evidence: `evidence/EXP-044/t9-ido-inspection-observations.md`, `t9-01` to `t9-07` PNGs.

## T10 update (read-only SQL verification of dbo.FX_UMs, 2026-10-10)

- **Created object confirmed (SQL level, UI):** one real table `dbo.FX_UMs` (Schema `dbo`, not a placeholder). Constraints: `PK_FX_UMs` (primary key, described FX_UM) and `IX_FX_UMs_RowPointer` (system index on RowPointer).
- **Columns (nine):** FX_UM (Column Id 2, nvarchar, length 10, NOT NULL, primary key checked, Key Sequence 1); FX_Description (Column Id 3, nvarchar, length 50, nullable); seven system columns (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow), types not read.
- Creation ownership: factory (EXP-044), tenant-wide. Cleanup responsibility: factory operator. **Cleanup performed: none.** The table is to be left intact.
- No mutation in T10: no Save, Update Current Table, New Constraint, Modify Constraint, schema action, Attributes edit or Columns edit. The Sql Tables Attributes combos were read only.
- The IDO `FX_UMs` was not checked in or otherwise changed in T10 (still checked out to the operator, pending coordinator decision).
- Pre-existing objects (FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01 IDO and table, vendor `IdoPropertyClasses` Form): not edited in T10.
- Evidence: `evidence/EXP-044/t10-sql-table-verification-observations.md`, `t10-01` to `t10-07` PNGs.

## T11 update (single IDO check-in; FX_UMBase invariant recheck, 2026-10-10)

- **Lifecycle action performed (one):** ordinary `Check In` on the IDO `FX_UMs` only (project `FX_HelloWorldProject01`). No confirmation or comment dialog appeared. Settled: Revision Num 1 → 2; Locked By empty; checkbox unchecked; Check Out enabled; Undo Check Out disabled. Save disabled. Evidence: `t11-07-idos-FX_UMs-settled-after-single-checkin.png`.
- **Created object state (observed):** IDO `FX_UMs` is now checked in (revision 2). Creation ownership: factory (EXP-044), tenant-wide. Cleanup responsibility: factory operator. **Cleanup performed: none.** The IDO is to be left intact.
- **FX_UMBase (pre-existing):** read before and after the check-in. Unchanged: String, 10, nvarchar, FX_sUM; Revision 1; **still checked out to the operator**. No lifecycle action was performed on FX_UMBase (no Check In, Undo, Check Out, or Save on it). Evidence: `t11-03` to `t11-05` (pre), `t11-08` (post).
- **FX_HelloWorldProject01, FX_HelloWorld01 IDO and table, and the vendor `IdoPropertyClasses` Designer Form:** not edited, not checked in or out in T11. FX_HelloWorldProject01 was not re-read after the action.
- **Unresolved:** FX_UM's inherited Data Type, Length and Column Type are blank in the IDO's property grid (T9/T11). Treated per the coordinator's instruction as inheritance display; not proven as an effective IDO value.
- Evidence: `evidence/EXP-044/t11-checkin-and-invariant-observations.md`, `t11-01` to `t11-08` PNGs.

## T12 reconciled inventory (final, 2026-10-10)

Two objects were created by EXP-044's single wizard Finish (T8). Nothing else was created.

| Field | Value |
| --- | --- |
| Object 1 | SQL table `dbo.FX_UMs` (Schema `dbo`); one real record; constraints `PK_FX_UMs` (primary key, FX_UM) and `IX_FX_UMs_RowPointer` (system index) |
| Object 2 | IDO `FX_UMs` in project `FX_HelloWorldProject01`; base table `FX_UMs`; alias `fxum` (Primary Base, Inner) |
| Scope | Tenant-wide metadata. The Designer editing scope was User; the objects are not User-scoped Form versions. |
| User field 1 | `FX_UM`: nvarchar(10), NOT NULL, primary key (Key Sequence 1); IDO property bound to column `FX_UM`, property class `FX_UMBase`; Required checked on the IDO. IDO-grid Data Type/Length/Column Type cells blank (inherited display; not proven effective). Label `FX_sUM` (inherited reference; not directly displayed on the saved IDO). |
| User field 2 | `FX_Description`: nvarchar(50), nullable; IDO property String/50/nvarchar; not required; no property class. Label `FX_sDescription` (reference only). |
| System-generated columns (7) | CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow. Types/nullability not read for 3–9 (system-generated; not authored). |
| System-generated index | `IX_FX_UMs_RowPointer` (RowPointer). |
| Optional Form | **Declined** with `No` (T8). No Form was created by this worker; not verified by a Form-list query. |
| Creation response | One wizard Finish (T8). Immediate: Create Form prompt. Settled after No: `Table and IDO created.` |
| Revision / lock (IDO) | Revision 1 at creation (T9); checked in once at T11 → Revision 2; Locked By empty; Check Out enabled (T11, T12 recovery). |
| Creation ownership | Factory (EXP-044), operator-authorized, tenant-wide. |
| Cleanup responsibility | Factory operator. Deletion is out of EXP-044 scope; the two objects are to be left intact. |
| Cleanup performed | **None.** No object was deleted in any task. |

Pre-existing objects (recorded as unchanged in every task):

| Object | Status |
| --- | --- |
| Property class `FX_UMBase` | Unchanged in UI reads before and after the T11 check-in and in T12. String, 10, nvarchar, FX_sUM; Revision 1; still checked out to the operator. No lifecycle action performed on it. |
| Project `FX_HelloWorldProject01` | Not edited. Used only as the existing destination in the wizard lookup. **Not re-read after T11** (identity not independently re-read in T12). |
| IDO `FX_HelloWorld01`, table `dbo.FX_HelloWorld01`, Form `FX_HelloWorld01` | Read only in collision checks and as a positive control. Not edited, checked in or out, or deleted. |
| Vendor Designer Form `IdoPropertyClasses` | Viewed in the Designer design view only. Not edited or saved. |

Repository: this inventory and the EXP-044 record are the only documentation written in T12 (see the record's T12 section).

## Confirmation

- No cleanup was performed in T1, T2, T2b, T4, T5, T6, T7, T8, T9, T10, T11, or T12. No object was deleted. No pre-existing object was edited.
- The lifecycle actions across the experiment were: one ordinary check-in of the newly created `FX_UMs` IDO (T11). No Check Out, Undo Check Out, or metadata unload, FormSync, or deployment was performed.
