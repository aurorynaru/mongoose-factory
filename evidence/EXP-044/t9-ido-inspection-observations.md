# EXP-044 T9 — Post-creation IDO inspection of FX_UMs; lifecycle check-in NOT performed (discrepancy): observations

Date: 2026-10-10. Task T9 (task_message_id `4f12af24-395d-46c5-bcfd-5a432104d326`, cycle 10). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single session, UI level). Not replay_verified.

**Result: exactly one actual FX_UMs IDO exists under project FX_HelloWorldProject01 (exact-name Filter-in-Place query; one real record, not a placeholder). Its base table is FX_UMs, alias fxum, Primary Base, Inner. Its checked-out state is visible (lock owner the operator; Check In enabled). The inherited Data Type, Length and Column Type of FX_UM are BLANK in the IDO Properties grid, a discrepancy against the wizard's inherited String/10/nvarchar. Under the brief, the discrepancy blocks the single permitted Check In. Check In was NOT performed. No Save, no Finish, no Form creation, no SQL Tables inspection, no field edit, no lifecycle action on any other object.**

Scope distinction (restated): the IDO is **tenant-wide** metadata; the Designer editing scope is **User**.

## 1. Preflight

- Web Client tab 0 (`favoriteContext=IdoCollections`) selected by a tab reselect (navigation only). No refresh, no reauthentication. The first screenshot attempt timed out at "waiting for fonts to load" (the T2 background-tab rendering pattern); the tab reselect restored rendering.
- Runtime Form tabs: `FX_HelloWorld01`, `Property Classes`, `IDOs` (selected). No dialog, no banner.
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- The IDOs Form was in Filter in Place mode with the criterion `FX_HelloWorld01` retained (from T2b), status `Filter in Place`, one criteria-echo row. The vendor `IdoPropertyClasses` Form is in the Property Classes tab, untouched.
- The Designer tab (tab 1) was not used in T9 (`IdoPropertyClasses` design view, User scope, unchanged).

## 2. Exact-name query for FX_UMs (IDOs, Filter in Place)

| Step | Observed |
| --- | --- |
| Criterion entry | One plain fill `FX_UMs` into the IDO Name criteria textbox `f1e186` (editable in criteria mode), then one Tab. Screenshot `t9-02`: criterion `FX_UMs` committed; status `Filter in Place`; grid row showed only the criteria echo. |
| Execution | **One F4** (the same execution already demonstrated in this Form in T2b). |
| Settled result (`t9-03`) | **One data row**: `FX_UMs` with a checked row checkbox. Status bar `Description (IDOs 1 of 1)`. The record view is loaded (not the criteria echo): Revision Num `1`, Revision Date `10/10/2026`, Locked By `anton.ramos@3mworks.com.ph`, Access As `G6R`, Caption `oFX_UMs`, Label String ID `oFX_UMs`, Project Name `FX_HelloWorldProject01`. |
| Placeholder vs record | The row has a revision number, a lock owner and a base-table row, so it is a saved record, not an unsaved add-mode placeholder. |
| Count | **1 record** for the exact name. |

- Identity confirmed by a fresh accessibility read (`find`): IDO Name textbox `FX_UMs`; Project Name combobox `FX_HelloWorldProject01`; Revision Num `1`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Caption `oFX_UMs`; Label String ID combobox `oFX_UMs`.
- The Project Name combobox names `FX_HelloWorldProject01`, the intended project. The alias check is in §3.

## 3. Base table (Tables sub-tab, `t9-07`)

| Field | Observed |
| --- | --- |
| Table Name | `FX_UMs` |
| Table Alias | `fxum` |
| Table Type | `Primary Base` |
| Join Type | `Inner` |
| Join Text | empty |
| Row count | 1 |

Matches the intended base table and alias.

## 4. Properties (Properties sub-tab, `t9-04`, `t9-05`, `t9-06`; full accessibility read)

Status bar: `Properties 1 of 9` (nine property rows).

| Seq | Property Name | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Upper Case |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **FX_UM** | **FX_UMBase** | Bound to Column | FX_UM | **1** | **(blank)** | **(blank)** | **(blank)** | unchecked | **checked** | unchecked |
| 2 | **FX_Description** | (blank) | Bound to Column | FX_Description | 0 | **String** | **50** | **nvarchar** | unchecked | unchecked | unchecked |
| 3 | CreatedBy | — | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | checked | unchecked | — |
| 4 | UpdatedBy | — | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | checked | unchecked | — |
| 5 | CreateDate | — | Bound to Column | CreateDate | 0 | Date | — | CurrentDateType | checked | unchecked | — |
| 6 | RecordDate | — | Bound to Column | RecordDate | 0 | Date | — | CurrentDateType | checked | unchecked | — |
| 7 | RowPointer | — | Bound to Column | RowPointer | 0 | GUID | — | RowPointerType | checked | unchecked | — |
| 8 | NoteExistsFlag | — | Bound to Column | NoteExistsFlag | 0 | Byte | — | FlagNyType | unchecked | unchecked | — |
| 9 | InWorkflow | — | Bound to Column | InWorkflow | 0 | Byte | — | FlagNyType | unchecked | **checked** | — |

Observations:
- **Intended user-defined properties are present and correctly named**: `FX_UM` (sequence 1) and `FX_Description` (sequence 2). Columns are bound as `FX_UM` and `FX_Description`.
- **FX_UM's property class association is shown**: `FX_UMBase`. The IDO UI exposes the association in the Property Class column.
- **FX_UM's Key Sequence is 1, and its Required is checked.** Its Primary Key designation is therefore represented by Key Sequence 1 (the grid has no separate "Primary Key" column; it shows Key Sequence).
- **FX_Description**: String, Length 50, Column Type nvarchar, Key Sequence 0, Required unchecked. Matches the intended definition.
- **Discrepancy — FX_UM's inherited attributes are blank in the IDO**: Data Type, Length and Column Type are **empty** for FX_UM. The wizard displayed String, 10 and nvarchar from FX_UMBase (T7). Whether the IDO stores these values on the property, leaves them to be resolved from FX_UMBase at runtime, or did not write them is **not determinable** from this grid. The brief forbids inferring missing attributes from the wizard. This is recorded as unresolved, and it blocks the check-in step.
- **System-generated properties** (separate from the two intended ones): CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow (seven). These are ordinary system metadata; none was authored by the worker.
- The **FX_UM Label String ID** (`FX_sUM`) is not shown in the Properties grid (no Label column on this grid). Not verified in the IDO.

## 5. Lifecycle state (ownership)

| Item | Observed |
| --- | --- |
| Checked-out indicator | Row checkbox checked (`t9-03`, `t9-05`) |
| Locked By | `anton.ramos@3mworks.com.ph` (operator) |
| Revision Num / Date | `1` / `10/10/2026` |
| Check Out button | Disabled |
| Check In button `f1e315` (label `Check In`) | **Enabled** |
| Undo Check Out button `f1e317` | Disabled |

The IDO is checked out to the operator. The check-in step is the single permitted lifecycle action, but per the brief it requires an unambiguous identity **and no unexpected definition discrepancy**. The FX_UM inherited-attribute discrepancy (§4) is unexpected. **Check In was NOT performed.** Undo Check Out was not clicked either.

## 6. Operation counts (T9)

| Operation | Count |
| --- | --- |
| Check In / Undo Check Out / Check Out | **0 / 0 / 0** |
| Save | **0** |
| Finish / Create Form | **0 / 0** |
| Field edits / Add / Delete | **0 / 0 / 0** |
| IDO criteria entries (plain fill) | **1** (`FX_UMs`) |
| Tab commits | **1** |
| F4 executions | **1** (`FX_UMs`) |
| Sub-tab clicks (IDO detail navigation) | **2** (Properties; Tables) |
| Property row selection (read-only) | **1** (FX_UM Property Name cell) |
| Web Client tab selects (navigation) | **1** (tab 0 reselect after the timed-out screenshot) |
| Screenshots | **8** (`t9-01` to `t9-07`, plus one timed-out attempt not saved) |
| Errors | **1 timeout** (the first screenshot, "waiting for fonts to load"; resolved by the tab reselect) |
| Ref-not-found errors | **1** (`f1e351` after the Properties tab click) |
| Recovery snapshots | **1 of 1** used (after the Ref error: an untargeted `find` pass, not a full snapshot; a full untargeted snapshot was not taken) |
| Corrected visible inspections | **0 of 1** used |
| Prompts answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

Recovery accounting note: after the `Ref f1e351 not found` error, the recovery used targeted `find` queries and one full-depth `snapshot` of the property grid (`f1e460`, which succeeded). The brief's rule is one fresh untargeted recovery snapshot; the grid snapshot was targeted (`f1e460`). This is recorded as a deviation.

## 7. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t9-01-webclient-state-before-FX_UMs-query.png` | IDOs tab, FiP mode, criterion `FX_HelloWorld01` (criteria echo) | Starting state of the IDOs Form | Any FX_UMs result |
| `t9-02-idos-FX_UMs-criterion-committed-before-F4.png` | IDO Name `FX_UMs` committed; status `Filter in Place`; criteria echo row | Criterion established before F4 | The result |
| `t9-03-idos-FX_UMs-after-single-F4-settled.png` | **One record `FX_UMs`**; record view (Revision 1, Locked By, Caption `oFX_UMs`); Base table `FX_UMs`/`fxum`; Check In enabled; status `Description (IDOs 1 of 1)` | **AC-7 identity: one IDO record for the exact name, in FX_HelloWorldProject01; base table and alias; checked-out state** | Property definitions (see t9-04 to t9-06) |
| `t9-04-idos-properties-subtab-FX_UM-FX_Description.png` | Properties grid: FX_UM (`FX_UMBase`, key 1, Required checked, Data Type/Length/Column Type blank); FX_Description (String, 50, nvarchar); system rows | **AC-7 property association and FX_Description definition; the FX_UM blank-inherited discrepancy** | FX_UM's inherited Length/Type |
| `t9-05-idos-FX_UM-property-row-selected-detail.png` | FX_UM row selected; status `Property Name (Properties 1 of 9)` | That nine properties exist; FX_UM selected for read-only detail | Any detail pane values (none shown) |
| `t9-06-idos-properties-full-grid-FX_UM-blank-inherited-cells.png` | Full property grid view with FX_UM blank Data Type/Length/Column Type cells | The blank inherited cells on the IDO (the discrepancy) | Why they are blank |
| `t9-07-idos-tables-subtab-base-table-FX_UMs-fxum.png` | Tables sub-tab: `FX_UMs` / `fxum` / Primary Base / Inner, one row | **AC-7 base table and alias** | The SQL table definition (not inspected in T9) |

## 8. Unresolved items and discrepancies (for coordinator decision)

1. **FX_UM inherited Data Type, Length and Column Type are blank in the IDO Properties grid** (`t9-06`), while the wizard showed String / 10 / nvarchar. The IDO does not show the inherited values in the grid. Unresolved: whether the IDO stores them, or whether the grid simply does not display inherited values for a property-class-bound property. The brief forbids inferring these. Check-in is blocked on this.
2. **FX_UM's Label String ID** (`FX_sUM`) is not shown in the Properties grid. Not verified in the IDO.
3. **Required and Primary Key on FX_UM**: Key Sequence 1 and Required checked are shown. The Primary Key designation is represented by Key Sequence (no separate Primary Key column). The Required value was set by the Primary Key interaction in T7 (accepted by the coordinator).
4. The Designer `doAutoInsert` console error (from T8) has not been investigated; its effect on the saved IDO is unknown.
5. Lifecycle: the IDO is checked out to the operator. No check-in was performed.

## 9. Final browser state (last verified)

- Web Client tab 0 (`favoriteContext=IdoCollections`): IDOs Form selected, Filter in Place criteria `FX_UMs`; the one `FX_UMs` record loaded; the Tables sub-tab selected (`t9-07`). Check In enabled, not clicked. No dialog, prompt, or banner (find at the end).
- Designer tab 1 (User scope): wizard closed (after T8); vendor `IdoPropertyClasses` design view unchanged.
