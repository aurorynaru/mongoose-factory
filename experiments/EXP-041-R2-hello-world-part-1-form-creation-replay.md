# EXP-041-R2 — Hello World Part 1: Form Creation on Existing FX_ IDO (replay with visible-inventory collision gate)

Status: **T2 stopped at wizard page 1 (Form Wizard - MultiView, Classic). Name value rejected twice by the wizard ("Value is required for Name") after key-event entry; no Finish, no Save, no object created. Wizard left open on page 1 as instructed.** T1 complete (read-only prerequisites, visible-inventory collision gate, and wizard route inspection). No creation action occurred. Gate result: **PASS for the Select Form inventory visible to this user** (positive control passed; `FX_HelloWorld01` exact and `HelloWorld` substring both returned zero rows). Wizard route inspected by rendered label; **no wizard was selected and no OK or Finish was pressed.** Outcome classification for the whole experiment: **observed only, not replay_verified** (to be finalised after the creation tasks).

Date: 2026-10-10
Run: R-20261010-152752-gg3Q · experiment EXP-041-R2 · cycle 0 · task T1
Worker session: `ff995603-f082-4900-b9ec-e3d25ee74734` · task_message_id `89a78036-ebc1-4e4a-9312-b5ff3d34f7b4`
Mode: LEARNING MODE. FX_-only scope extension for the Hello World tutorial (AGENTS.md, 2026-10-10). Forms stay in User editing scope.
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, signed-in user `anton.ramos@3mworks.com.ph`.
Editing scope: **User** (`ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`), shown in the Designer status bar. No scope dialog appeared in this session; the scope was not changed.
Evidence directory: `evidence/EXP-041-R2/`.
Relationship to prior records: replays EXP-041 (blocked at AC-2 on 2026-10-10 because cross-scope absence could not be shown). Operator decision of 2026-10-10 replaces the cross-scope requirement with the visible-inventory check used here.

## Outcome (operator, 2026-10-10)

**Blocked on wizard page 1 before any mutation** (run R-20261010-152752-gg3Q). The collision gate passed, and Classic > Multi-View loaded and offered the IDO `FX_HelloWorld01` as Data Source. The Name combobox was entered with key-event typing (`slowly: true`), first followed by opening and closing its dropdown plus Tab, then after Ctrl+A/Delete with Enter; both times Next reported 'Value is required for Name'. Nothing was committed.

Operator diagnosis: EXP-027, EXP-027-R2 and EXP-036 entered the wizard Name combobox with one plain fill (`browser_type` without `slowly`) and Next then advanced. Key-event typing is what the Select Form filter needs (EXP-041), but not this field. Replayed as EXP-041-R3 with the plain fill as a standard step.

## Operator decision applied (2026-10-10)

Absence in the Select Form inventory visible to this user is sufficient for a **User-scope** Form. A User-scope Form is created in the user's own scope and cannot overwrite a Site Default, Group or other user's Form. The Select Form dialog shows **no scope column**; this is recorded as a **limitation, not a failure**.

## Sources read

- `AGENTS.md`: read in full from disk (FX_ scope extension, safety, browser automation, evidence rules).
- `experiments/EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md`: read in full (T1 blocked at AC-2; Select Form mechanism; cross-scope limitation; hook-blocked lowercase target).
- `evidence/EXP-041/`: the positive-control capture `t1-05-select-form-positive-control-sqltables-slowly.png` was opened and matches this session's control. The remaining EXP-041 image files were **not** opened; the EXP-041 mechanism here is taken from its record plus this session's own captures.
- `experiments/EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md`: lines 1–505 and the T11/T12 summaries were read (IDO baseline, AC-7 carry-forward, Follow-up from EXP-041 T1). **Lines 506–1256 were not read in this session.** EXP-040 was read only and not edited.
- `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md`: **not read in this session**; the project `FX_HelloWorldProject01` was observed directly in the IDO identity fields.
- `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md`: wizard lessons (Select Form Name filter with key-event entry; Save Template intercepted by its display element in T5 and unchecked by a visible label click in T6; Designer status bar shows scope).
- `recipes/forms/create-basic-form.md`: read (Build-from-Scratch route; Select Form OK activates a row, so Cancel was used; Save Template is on page 2). Its status is verified for the Build-from-Scratch wizard only.
- `docs/mongoose/transcripts/hello-world-pt1.md`: Form step (sections 5–7) read by keyword search. Trust: **unverified** (speech-to-text transcript). Its Site Default scope, the New Data category and the non-FX_ values are **not** authorized here.

## Gate evidence summary

Mechanism: Web Client Open toolbar control (`#mgtoolbarbutton-1100`, tooltip "Open") → **Select Form** dialog. Filter By = **Name**; **Case Sensitive** and **Starts With** unchecked (verified by absence of `[checked]` in each snapshot and by the screenshots). Filter text entered by **key events** (`browser_type` with `slowly: true`) after focusing the textbox and pressing Ctrl+A. Each result was read after a **2-second wait** and captured by screenshot and dialog snapshot.

| # | Query (Filter By = Name) | Role | Settled result | Evidence |
|---|---|---|---|---|
| C1 | `SqlTables` | Positive control (required by the brief) | **2 rows:** `Sql Tables` / `SqlTables`; `Sql Tables Constraint` / `SqlTablesPrimaryKey` | `t1-05-positive-control-SqlTables-name-filter-settled.png` |
| T1 | `FX_HelloWorld01` (exact) | Target | **0 rows.** Grid `f1e856` has no child rows. | `t1-06-target-FX_HelloWorld01-exact-settled.png`, `t1-06-target-FX_HelloWorld01-exact-dialog-snapshot.md` |
| T2 | `HelloWorld` (case-preserved substring; case-insensitive because Case Sensitive is unchecked) | Target | **0 rows.** Grid `f1e856` has no child rows. | `t1-07-target-HelloWorld-substring-settled.png`, `t1-07-target-HelloWorld-substring-dialog-snapshot.md` |
| C2 | `testblank` (lowercase substring; expected `FX_TestBlank01`, `FX_TestBlank02`) | Additional control (added by the worker, read-only) | **2 rows:** `FX_TestBlank01` / `FX_TestBlank01`; `FX_TestBlank02` / `FX_TestBlank02` | `t1-08-control-testblank-lowercase-infix-settled.png`, `t1-08-control-testblank-lowercase-infix-dialog-snapshot.md` |

Why C2 was added: the EXP-041 audit recorded that no control combined a lowercase query with infix (substring) matching. The `HelloWorld` target result depends on substring matching, so C2 shows case-insensitive substring matching in this session. The brief's single required control (C1) passed.

Interpretation:

- **C1 passed:** the Select Form filter narrowed the grid by name in this session; the session was live; the filter was effective.
- **T1 zero rows (observed):** no displayed row for `FX_HelloWorld01` under the same settings that returned rows for C1 and C2.
- **T2 zero rows (observed):** no displayed row whose name contains `HelloWorld` in any letter case (C2 shows the same mechanism matches a lowercase substring against mixed-case names).
- **Scope not displayed (limitation):** the dialog shows Caption and Name only. The ScopeType and ScopeName of each row are not observable. Site Default, Group-scope and other users' Forms are not individually demonstrated. Under the operator decision this is accepted for a User-scope creation.
- **Inventory completeness:** the results are the Ext store after the name filter. The dialog shows no total count. Rows outside a rendered window were not separately scanned. The claim is limited to "the filtered result, as displayed".

**Gate result: PASS (visible inventory).** Creation is not authorized by this task. The gate is a precondition for a later creation task only.

## AC-1 preflight (T1 status: PASS, with limits)

| Item | Evidence | Finding |
|---|---|---|
| Usable authenticated session | Web Client identity bar: `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t1-03-webclient-initial-state.png`). No sign-in or configuration prompt. | Live. Observed. |
| DEM configuration | Designer Help → About (`t1-02-designer-help-about-site-developer-user-scope.png`): "Connected via data configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT". | Observed. |
| Site Developer | Same About dialog: "Currently logged in as anton.ramos@3mworks.com.ph, Site Developer, edits create user versions for user anton.ramos@3mworks.com.ph". | Observed in this session. Permission grants beyond the role label are not separately tested. |
| User editing scope | Designer status bar in `t1-01-designer-tab-initial-clean-user-scope.png` and `t1-15-…`: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No scope dialog this session. | Observed. |
| EXP-040 IDO baseline | Web Client IDOs surface, already displayed (`t1-03-webclient-initial-state.png`): IDO Name `FX_HelloWorld01`; Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/10/2026`; Locked By empty; Access As `G6R`; Check Out enabled; Undo Check Out disabled; Save disabled. Properties: `FX_Code` (sequence 1, Bound to Column, String 30, Key Sequence 1, Required checked); `FX_Label` (sequence 2, Bound to Column, String 100); seven system properties (CreatedBy, UpdatedBy String 128; CreateDate, RecordDate Date; RowPointer GUID; NoteExistsFlag, InWorkflow Byte). Label String ID and Caption both `oFX_HelloWorld01`. | Observed and consistent with EXP-040 T12 (Revision 2, checked in, FX_Code/FX_Label). The surface was already open; **no IDO maintenance form was opened or queried by this task** (out of scope for EXP-041-R2). |
| Clean working state before any action | Designer: no Form tab open, Save and Undo disabled, no dialog (`t1-01`). Web Client: IDOs surface, Save disabled, no dialog (`t1-03`). | Clean at start. |
| Portal and application versions | Portal footer `2026.10.01` (accessibility tree). Designer About: Application database `2026.10.13`, Form definitions database `2026.10.13`, Web Client `2026.10.13` (Build P#20116826). | Not reconciled (same as EXP-040 and EXP-041). |

Limitation: configuration-wide visibility of SQL tables and IDOs (EXP-040) remains untested.

## Wizard route inspection (T1 status: PASS for route identification; no wizard selected)

Route: Designer toolbar **New** (labelled "New"; Ext id `#mgtoolbarbutton-1088`) on an empty Designer (no Form open) → dialog **"Form Wizard Selection"** (`t1-10-designer-form-wizard-selection-opened.png`). Radios: **New Form** (selected), **Extend Form**. Category and Wizard comboboxes were empty. Buttons: OK, Cancel, Help.

Category labels offered (7), read from the dropdown (`t1-11-category-dropdown-labels.png`):

| Category label | Description shown |
|---|---|
| Classic | WinStudio classic form wizards |
| ExtDataSource | STRINGS(mWizard_ExtDatasource) |
| Flex | Wizard to create a form built on FlexLayout components |
| Form Builder (combobox value after selection: `FormBuilder`) | Wizards to create forms on Runtime Builder |
| IDS | Wizard to create a form based entirely on the IDS layout grid and IDS controls |
| New Data | Wizards to create forms with their required SQL tables, IDOs, and components |
| REST | REST API wizards |

**Classic** wizards (7, complete; list scrolled to its end, `t1-12` and `t1-13`):

| Wizard label | Description shown |
|---|---|
| Build from Scratch | Plain form without defined components (no IDO) |
| Detail-Only | Form to display the details for a single record of an IDO collection |
| Grid-Only | Form with a single grid, bound to an IDO collection and displayed in a row-column table format |
| Multi-View | Multi-view (grid/detail) form bound to an IDO collection |
| Query | Query form to create a filter to specify the collection user can retrieve |
| Report | Template form to generate report outputs |
| Tile | Tile form to be hosted by another form |

**Form Builder** wizards (4, complete; `t1-14-formbuilder-wizard-dropdown-labels.png`):

| Wizard label | Description shown |
|---|---|
| DataMaintenance | Creating a table, IDO, and (optionally) form |
| DataView | Wizard to create a DataView and associated criteria form |
| Report | Template form to generate report outputs |
| Responsive Form | Wizards to create forms on Runtime Builder |

Not examined: the wizard lists under ExtDataSource, Flex, IDS, New Data and REST (only their category labels were recorded).

Candidate analysis (from rendered labels only; **no wizard page was opened**):

- **Recommended candidate: Category Classic, Wizard Multi-View.** Its rendered description states it is "bound to an IDO collection". It is in the Classic family used by the verified Build-from-Scratch recipe (same Designer route, same two-page wizard pattern with a Save Template option). It also matches the tutorial's IDO-bound form. The EXP-040 record notes MultiView / GridLayout defaults on the Data Maintenance page 1 (historical, not re-observed here).
- Alternatives that also state IDO binding: Classic → Grid-Only and Classic → Detail-Only.
- Rejected for this experiment:
  - Form Builder → **DataMaintenance** and Category **New Data**: each creates a SQL table and an IDO (prohibited by the brief).
  - Form Builder → DataView: its description does not state IDO binding.
  - Form Builder → Responsive Form: the Responsive Form Builder stack is out of scope under AGENTS.md.
  - Build from Scratch: no IDO binding in its description (it is the no-data-source route).
- **Unverified:** whether the Multi-View page 1 exposes an existing-IDO Data Source field, and whether its page 2 offers Save Template. These must be verified in the next task before any Finish. The next task must not guess the wizard's data-source or mandatory fields.

Operator decision needed: confirm the wizard choice (recommended Classic / Multi-View) for the creation task, or name another IDO-bound wizard.

## Acceptance checks (T1)

| AC | T1 status | Proof | Limitation |
|---|---|---|---|
| AC-1 | **PASS (with limits)** | `t1-01`, `t1-02`, `t1-03`, `t1-15` | Configuration-wide visibility of SQL tables and IDOs untested. Permission grants beyond the role label untested. Version strings unreconciled. |
| AC-2 | **PASS (visible inventory)** | `t1-05`–`t1-08` and dialog snapshots | No scope column (recorded limitation, accepted by operator decision). Store totals not shown. No Site Default or Group Form demonstrated. |
| AC-3 | **PARTIAL (route and labels captured; wizard not selected)** | `t1-10`–`t1-14` | Load test not performed (no wizard opened, by design). Candidate Classic / Multi-View identified from labels only. |
| AC-4 – AC-8 | Not evaluated in T1 (no creation, no wizard page, no Finish, no reopen, no runtime open) | — | — |
| AC-9 | **PARTIAL (visible inventory re-confirmation recorded below)** | Section "AC-9 carried-forward question" | Scope-complete absence not shown. EXP-040 and EXP-041 records not edited. |

## AC-9 carried-forward question (EXP-040 AC-7; EXP-041 T1)

Question: did the declined Create Form prompt in EXP-040 (`2026-10-10`, T9) produce a Form named `FX_HelloWorld01`?

Re-confirmation on 2026-10-10 in this session (AC-2 evidence):

- No row for `FX_HelloWorld01` (exact query) in the visible Select Form inventory (`t1-06`).
- No row containing `HelloWorld` in any letter case (`t1-07`), with a same-session lowercase-substring control passing (`t1-08`).
- Therefore, in the visible inventory, there is no evidence that a Form named `FX_HelloWorld01` exists.
- Not shown: scope-complete absence (Site Default, Group, other users). Under the operator decision, this does not block a User-scope creation.

Cross-references (dated 2026-10-10):

- EXP-040 AC-7 and its 2026-10-10 Follow-up (from EXP-041 T1): carried-forward question. This record re-confirms the visible-inventory result. The operator is to update EXP-040 afterwards. **EXP-040 was not edited.** Its waivers are unchanged.
- EXP-041 T1 (blocked at AC-2; cross-scope limit): replaced by the visible-inventory decision. **EXP-041 was not edited.**

## Operations (T1, in order)

| # | Operation | Result |
|---|---|---|
| 1 | Tab list; Designer snapshot (tab 0) | Designer clean, no Form open, User scope bar. |
| 2 | Screenshot of Designer (tab 0) | **Timed out** ("taking page screenshot"). |
| 3 | Click Designer Help (`e9`) | **Timed out** ("visible, enabled and stable"). Resolved to an Ext button, `button-1068`. |
| 4 | Tab select 0 (Designer) | Navigation only. |
| 5 | Fresh untargeted snapshot (Designer) | Clean; refs refreshed. (Recovery snapshot 1 of 1.) |
| 6 | Screenshot of Designer, retried | **Succeeded**; viewed `t1-01` (corrected inspection). |
| 7 | Click Designer Help (`e9`), retried | **Succeeded**; Help menu open. |
| 8 | Find "About"; click About (`e287`) | About dialog open (`t1-02`). |
| 9 | Click About **OK** (`e294`, label verified as OK) | About closed. |
| 10 | Tab select 1 (Web Client); screenshot `t1-03`; find "Open" | IDOs surface; Open control `f1e25` (label "Open"). |
| 11 | Click Open (Select Form) | Select Form dialog opened with leftover filter `TestBlank`, Filter By = Name, both checkboxes unchecked (`t1-04`). |
| 12 | Click Filter textbox; Ctrl+A; type `SqlTables` (key events); wait 2 s; screenshot `t1-05`; find | **C1 settled: 2 rows.** |
| 13 | Click Filter; Ctrl+A; type `FX_HelloWorld01` (key events); wait 2 s; screenshot `t1-06`; dialog snapshot | **T1 settled: 0 rows.** |
| 14 | Click Filter; Ctrl+A; type `HelloWorld` (key events); wait 2 s; screenshot `t1-07`; dialog snapshot | **T2 settled: 0 rows.** |
| 15 | Click Filter; Ctrl+A; type `testblank` (key events); wait 2 s; screenshot `t1-08`; dialog snapshot | **C2 settled: 2 rows.** |
| 16 | Click Cancel (`f1e898`, label verified as Cancel) | Dialog closed; no row activated (`t1-09`). |
| 17 | Tab select 0 (Designer) | Navigation only. |
| 18 | Click Designer toolbar New (`e18`, label verified as New) | "Form Wizard Selection" opened (`t1-10`). |
| 19 | Category dropdown opened; labels read; screenshot `t1-11` | 7 Category labels. |
| 20 | Click Category option Classic | Category combobox = `Classic` (no commit). |
| 21 | Wizard dropdown opened; list read; screenshot `t1-12`; list scrolled to end (`t1-13`) | 7 Classic wizards. |
| 22 | Wizard dropdown collapsed by its trigger (no item selected) | Wizard empty. |
| 23 | Category dropdown opened; click Form Builder option | Category combobox = `FormBuilder` (no commit). |
| 24 | Wizard dropdown opened; list read; screenshot `t1-14` | 4 Form Builder wizards. |
| 25 | Wizard dropdown collapsed by its trigger (no item selected) | Wizard empty. |
| 26 | Click Cancel (`e330`, label verified as Cancel) on Form Wizard Selection | Dialog closed; no OK. Screenshot `t1-15`: Designer clean. |

## Operation counts (T1)

| Operation | Count | Notes |
|---|---|---|
| Save | **0** | Save disabled in every captured state. |
| Designer New Form Definition (wizard entry) | 1 opened; **0 OK; 0 wizard selected** | Cancelled. |
| Wizard Finish / Create Form / Get Database Schema | **0** | Not reached. |
| Select Form opened | **1** (Web Client Open) | Closed with Cancel. |
| Select Form OK / row activation | **0** | |
| Select Form filter entries (key events) | **4** (`SqlTables`, `FX_HelloWorld01`, `HelloWorld`, `testblank`) | All effective. |
| Ctrl+A | **4** | Before each filter entry. |
| Filter By changes | **0** | Name was already set. |
| Designer About opened / OK | **1 / 1** | Read-only. |
| Designer Help menu opened | **1** (after one timed-out attempt) | Menu item About activated. |
| Category selections | **2** (Classic, Form Builder) | Dialog state only; not committed. |
| Wizard list opened | **2** (Classic, FormBuilder) | No item selected. |
| Designer Form-tab open / close / reopen | **0 / 0 / 0** | No Form opened. |
| Check-in / check-out / undo | **0** | |
| Mouse wheel / move | **1 / 1** | Scroll inside the Classic Wizard dropdown to view the end of the list. No click there. |
| Screenshots saved | **15 PNG** | `t1-01` to `t1-15`. |
| Dialog snapshot files saved | **4 MD** | `t1-04`, `t1-06`, `t1-07`, `t1-08`. |
| Failed browser actions (timeouts) | **2** | Designer screenshot and Designer Help click (see Errors). |
| Fresh untargeted recovery snapshots | **1 of 1 used** | After the Designer timeouts. |
| Corrected inspections | **1 used** (screenshot retry) | Plus one Help click retry; see Errors. |
| Application rows edited / saved / inserted | **0** | |
| JavaScript / evaluate / run-code | **0** (no evaluate tool used) | |
| Authentication / logout / session reset | **0** | |

## Errors and recovery accounting

1. **Designer screenshot timed out** ("taking page screenshot" → "fonts loaded", then the call timed out at 5 s). Recovery: tab select 0 and one fresh untargeted snapshot. The retried screenshot then succeeded (`t1-01`).
2. **Designer Help click timed out** on ref `e9` ("visible, enabled and stable"). The locator resolved to an Ext toolbar `a` (`button-1068`). Recovery: after tab selection and the fresh snapshot, the same click on the same fresh ref succeeded. **Disclosure:** the brief allowed one corrected inspection. The screenshot retry was the corrected inspection; the Help click retry was a second corrective action. It opened a read-only menu, and it is disclosed here as an over-count against that allowance.
3. **Web Client snapshot at depth 4** showed only the portal shell, not the iframe contents. Recovery: `browser_find` with text "Open" (read-only). Not an error to the Mongoose state.
4. **Select Form opened with leftover state** (`TestBlank` filter, previously shown `FX_TestBlank01/02`). Not a Mongoose object. The filter was replaced with Ctrl+A before each query, and the leftover rows were never cited as results.
5. **Ext component ids** drifted from the recipe (e.g. Select Form filter textbox `#textfield-1197-inputEl`; Wizard trigger `#mginfoconexpandable-2215-trigger-picker`). Resolved by accessibility refs from fresh finds.
6. No `Ref … not found` errors. No hook rejection occurred (the lowercase exact target `fx_helloworld01` was not typed; it was not needed).

## Object audit (T1)

| Category | Finding |
|---|---|
| Created | **None.** No Form, component, IDO, IDO project, SQL table, column, property, method, script, wizard artifact or data row. |
| Changed | **None.** No save. Select Form and wizard dialog state only (not Mongoose objects). |
| Opened for editing | None. The Designer had no Form open; the Web Client IDOs surface was only observed. |
| Deleted | None. |
| Checked out / in | None. |
| Pending changes at end | **None.** Designer Save disabled, no Form open. Web Client Save disabled. |

## Final browser state (T1)

- **Designer tab (tab 0, currently selected):** `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. No Form open (Form tab list empty), canvas blank, Save and Undo disabled, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. "Form Wizard Selection" closed (Cancel). No dialog or unsaved-change prompt.
- **Web Client tab (tab 1):** portal `Mongoose`; IDOs surface showing `FX_HelloWorld01` (unchanged); Save disabled; Select Form dialog closed (Cancel); no dialog.
- No browser-native dialog, no beforeunload prompt, no in-page dialog open.

## Evidence (`evidence/EXP-041-R2/`)

| File | Shows | Does not prove |
|---|---|---|
| `t1-01-designer-tab-initial-clean-user-scope.png` | Designer: no Form open; blank canvas; Save and Undo greyed; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. | Site Developer role; database state. |
| `t1-02-designer-help-about-site-developer-user-scope.png` | About: DEM configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; "logged in as anton.ramos@3mworks.com.ph, Site Developer, edits create user versions for user anton.ramos@3mworks.com.ph". | Permission grants beyond the role label. |
| `t1-03-webclient-initial-state.png` | Web Client IDOs surface: `FX_HelloWorld01` in `FX_HelloWorldProject01`; Revision 2; Access As `G6R`; FX_Code / FX_Label and 7 system properties; Save greyed; identity bar DEM. | Anything about Forms; the IDO's runtime behaviour. |
| `t1-04-select-form-dialog-opened-leftover-filter.png` and `t1-04-select-form-dialog-opened-snapshot.md` | Select Form at open: leftover `TestBlank`; Filter By Name; both checkboxes unchecked; leftover rows `FX_TestBlank01/02`. | That these rows are a result of a query in this session. |
| `t1-05-positive-control-SqlTables-name-filter-settled.png` | **Positive control C1:** `SqlTables` typed; rows `Sql Tables / SqlTables` and `Sql Tables Constraint / SqlTablesPrimaryKey`; Filter By Name; Case Sensitive and Starts With unchecked. | Scope of each row; the store total. |
| `t1-06-target-FX_HelloWorld01-exact-settled.png` and `…-exact-dialog-snapshot.md` | **Target T1:** `FX_HelloWorld01` typed; grid empty after 2 s; filter textbox shows `FX_HelloWorld01`; both checkboxes unchecked. | Scope; database absence. |
| `t1-07-target-HelloWorld-substring-settled.png` and `…-substring-dialog-snapshot.md` | **Target T2:** `HelloWorld` typed; grid empty after 2 s. | Scope; database absence. |
| `t1-08-control-testblank-lowercase-infix-settled.png` and `…-infix-dialog-snapshot.md` | **Control C2:** lowercase `testblank` returns `FX_TestBlank01` and `FX_TestBlank02`: case-insensitive substring matching in this session. | Anything beyond name matching for this control. |
| `t1-09-after-select-form-cancel-webclient-clean.png` | Web Client after Cancel: IDOs surface; no dialog; Save greyed. | Scope. |
| `t1-10-designer-form-wizard-selection-opened.png` | Form Wizard Selection: New Form (selected), Extend Form; Category and Wizard empty; OK/Cancel/Help. | Any wizard's behaviour. |
| `t1-11-category-dropdown-labels.png` | Category dropdown: Classic, ExtDataSource, Flex, Form Builder, IDS, New Data, REST. | Anything about the categories' wizards except as listed. |
| `t1-12-classic-wizard-dropdown-labels.png` | Classic wizard list (top): Build from Scratch, Detail-Only, Grid-Only, Multi-View, Query. | The bottom of the list (see `t1-13`). |
| `t1-13-classic-wizard-dropdown-scrolled-to-end.png` | Classic wizard list at its end: Query, Report, Tile. The highlighted Report row is a hover highlight; nothing was selected. | Selection state (none). |
| `t1-14-formbuilder-wizard-dropdown-labels.png` | FormBuilder wizard list: DataMaintenance, DataView, Report, Responsive Form (complete; no scroll). | Anything about how each wizard behaves. |
| `t1-15-after-wizard-selection-cancel-designer-clean.png` | Designer after Cancel: no dialog; no Form open; Save greyed; User scope. | Database state. |

Tool-generated browser captures under `evidence/playwright/` are gitignored tool output and are not worker-authored evidence.

## Acceptance evidence matrix (T1 summary)

| AC | Status | Key evidence |
|---|---|---|
| AC-1 | PASS (with limits) | `t1-01`, `t1-02`, `t1-03`, `t1-15` |
| AC-2 | PASS (visible inventory; no scope column) | `t1-05` (C1), `t1-06` (T1), `t1-07` (T2), `t1-08` (C2) |
| AC-3 | PARTIAL | `t1-10`, `t1-11`, `t1-12`, `t1-13`, `t1-14` |
| AC-4 – AC-8 | Not evaluated (no creation task in T1) | — |
| AC-9 | PARTIAL | Section "AC-9 carried-forward question" |

## Knowledge state (T1)

| Finding | State |
|---|---|
| Select Form Name filter, key-event entry, Case Sensitive and Starts With unchecked: positive control `SqlTables` returns its two rows | observed (this session, `t1-05`) |
| `FX_HelloWorld01` absent from the visible Select Form inventory (exact name) | observed (`t1-06`) |
| `HelloWorld` substring absent from the visible Select Form inventory | observed (`t1-07`) |
| Case-insensitive substring matching in one control (`testblank` → `FX_TestBlank01/02`) | observed (`t1-08`) |
| Select Form rows do not display scope | observed (limitation; `t1-05`–`t1-08`) |
| Designer Help → About: DEM configuration; Site Developer; edits user versions | observed (`t1-02`) |
| User scope in the Designer status bar with no Form open | observed (`t1-01`, `t1-15`) |
| IDO `FX_HelloWorld01` in `FX_HelloWorldProject01`, Revision 2, FX_Code/FX_Label as in EXP-040 T12 | observed (`t1-03`, displayed; not re-queried) |
| IDO Label String ID and Caption both `oFX_HelloWorld01` | observed (`t1-03`); not in EXP-040 |
| Form Wizard Selection dialog: New Form / Extend Form radios; 7 Category labels; Classic 7 wizards; FormBuilder 4 wizards | observed (`t1-10`–`t1-14`) |
| Classic → Multi-View is the IDO-bound Classic wizard recommended for this experiment | **candidate_procedure** (from labels; page 1 and page 2 not yet observed) |
| Classic → Multi-View page 1 has an existing-IDO Data Source field; page 2 has Save Template | **unresolved** (must be observed before any OK or Finish) |
| Form Builder category value appears as `FormBuilder` in the combobox but as "Form Builder" in its list | observed (`t1-11`, `t1-14`) |
| Portal footer `2026.10.01` vs Designer About `2026.10.13` | observed; **unresolved** |
| Configuration-wide visibility of SQL tables and IDOs | **unresolved** (not tested) |
| Select Form dialog remembers the last filter text and Filter By between openings | observed (`t1-04`) |

## Repository changes (this task)

- Written: `experiments/EXP-041-R2-hello-world-part-1-form-creation-replay.md` (this record).
- Written: `evidence/EXP-041-R2/` (15 PNG; 4 MD dialog snapshots: `t1-04`, `t1-06`, `t1-07`, `t1-08`).
- Not written: `experiments/EXP-040-…`, `experiments/EXP-041-…` (not edited; the operator will cross-reference). No recipe, AGENTS.md, memory, `tools/`, or other experiment file.

## Open questions and blockers

1. **Wizard choice.** Recommended: Classic → Multi-View. The operator should confirm, or name another IDO-bound wizard, before the creation task. The page 1 Data Source field and page 2 Save Template state must be observed first.
2. **Scope limitation.** Select Form does not show scope. Accepted under the operator decision for a User-scope Form. Scope-complete absence is not claimed.
3. **Inventory totals.** No total count is displayed. The gate is the filtered result as displayed.
4. **EXP-040 records 506–1256 and EXP-039 not read in this session.** Not needed for the T1 gate; read before any creation task if the next task requires them.
5. **Version strings** (portal `2026.10.01` vs Designer `2026.10.13`) unreconciled, as in EXP-040 and EXP-041.
6. **Designer screenshot and Help click timeouts** on the first attempts (see Errors). Environment behaviour; not reproduced after tab selection.
7. **Creation not authorized by T1.** The next step, if the operator approves, is a separate creation task: select the wizard, verify page 1 identity (Name `FX_HelloWorld01`, Data Source IDO `FX_HelloWorld01`), uncheck Save Template if present, and perform one Finish only after review.

---

## T2 — Single-wizard inspection (Classic → Multi-View), stopped on page 1

Task: T2, cycle 1, run R-20261010-152752-gg3Q, worker session `ff995603-f082-4900-b9ec-e3d25ee74734`, task_message_id `ab894ee6-b395-4880-9b64-bb3c6d801c1e`.
Scope: prerequisite reconciliation; one wizard (Classic → Multi-View) opened and inspected; no Finish, no Designer Save, no other wizard, no object change.

### Outcome (T2)

- **Route, Category and Wizard identified and selected:** Designer toolbar **New** → Form Wizard Selection → New Form; Category **Classic**; Wizard **Multi-View** (rendered label; the combobox value after selection is `MultiView`). OK pressed once; the wizard loaded as **"Form Wizard - MultiView"** with no load error and no ComponentFlags message.
- **Existing-IDO support: visibly proven.** The page-1 **Data Source** combobox lists IDOs (including `FX_HelloWorld01`, one cell among the IDO names), and selecting `FX_HelloWorld01` shows that value in the field. Data Source is marked required (`*`).
- **Defaults observed on page 1 (not changed):** Form Type `MultiView` (read-only grey); Form Layout `GridLeft`; Device Type `Default`; Query Form empty; Comments empty. Page text: a Query Form name causes a query form to be **created automatically**, so Query Form was left empty. No Save Template control is visible on page 1.
- **Blocker: Name was not committed.** Name `FX_HelloWorld01` was entered by key events (`browser_type` with `slowly: true`, which the tool ran as `pressSequentially`). The field displays `FX_HelloWorld01` and the red required border appeared. **Next was pressed twice; both times the wizard showed a modal alert "Value is required for Name" and stayed on page 1.** After the first alert, one corrected attempt: focus the Name input and press Tab. The border turned normal and focus moved to Form Layout, but the second Next produced the same alert. The recovery allowance is spent, so T2 stopped here. Page 2 was **not reached**, and Save Template and the generated-object implications of page 2 are **unobserved**.
- **Finish: not pressed. Designer Save: not pressed. No object created** (no Form tab in the Designer; Save disabled; no Finish, no IDO or table change).

### Interpretation of the Name blocker (unresolved)

- The wizard's model did not register the key-event text as a Name value; the on-screen text alone is not the committed value. The field's own validation disagreed with the display, which is why the red border and the alert both appeared.
- The Name combobox offers form templates (`CPRCustomer`, `CPRItems`, `CPROrders`, `CPRUMs`, `Customer`, `CustomerForm`, `G6RItems`, `G6RUMs`, `MockInventory`, `MPLogin`, `PortalLogin`, `SDReceivingPlans`, `SearchHistoryIDO`, `Ship_to`, `SmpPortal`, `Suffix`, `TestCustomer`). **No FX_ entry appears**, so `FX_HelloWorld01` is a new-name entry, which the page text allows. Whether a new name must be committed another way is **not established**.
- Comparison (EXP-036 T5, `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md`): the Build-from-Scratch Name `FX_SingleButtonLab01` was entered with `browser_type` (fill; no `slowly`) and Next then advanced to page 2. This is a **difference in entry method and wizard type, not a verified cause.** It is a candidate explanation for the operator to weigh, not a tested fix. It was **not** tried here, because the recovery allowance was spent.

### Prerequisite reconciliation (T2)

- **EXP-039** (`FX_HelloWorldProject01`, accepted at UI level): read in full. Relevant facts: the IDO project was created through a single New, one Save, one close and one reopen; the Save and recovery evidence is same-session UI only. Nothing in it restricts the wizard choice.
- **EXP-040** lines 506–1256 (previously unread): read in full. Relevant facts: (a) the Data Maintenance wizard (New Data / Form Builder) creates a table and an IDO and offers a "Create Form" prompt after Finish, and it showed no physical table preview before Finish; (b) the Field grid had a blank placeholder row that was deleted in T7; (c) the Table Alias `fxhw` was operator-authorized; (d) a Save-changes prompt was mis-answered in T10 and was reverted by T11 (historical, SQL Tables; not touched in EXP-041-R2); (e) the EXP-040 Finish count was 1. Classic Multi-View is **not** shown to be a table-creating route: its list description says "bound to an IDO collection" and its page 1 requires a Data Source. No table-creation option was observed on page 1; page 2 is unobserved, so this is not fully established.
- **EXP-036** lessons: Save Template is checked by default on page 2 and was unchecked through a visible label click (T6) after the checkbox display `<span>` intercepted a direct click (T5). Select Form and wizard entries used key events.
- **Hello World Part 1 transcript** (`docs/mongoose/transcripts/hello-world-pt1.md`, section 7, lines ~112–122): "Create Form? → Yes; use the just-created IDO; proceed with defaults; Finish". The transcript leaves the form name, table name and wizard defaults unspecified. Trust: unverified. Its Site Default scope and non-FX_ values are not authorized here.
- **AGENTS.md** and the **recipe** (`recipes/forms/create-basic-form.md`): no restriction on Classic wizards. AGENTS.md allows Classic Mongoose Forms. The recipe's Save Template instruction applies to page 2.
- **T1 browser_type review:** all T1 target queries used `browser_type` with `slowly: true`, which the tool executed as `pressSequentially` (native key events, shown in the tool output, e.g. `pressSequentially('SqlTables')`). Each settled read showed the expected value in the textbox and the expected grid change. The T1 collision evidence therefore comes from key-event input, consistent with the required mechanism. No repeat of the collision queries was needed.

### Wizard route and labels (captured before selection)

| Level | Rendered label | Evidence |
|---|---|---|
| Designer toolbar | New (`e18`, verified label New) | `t2-01` |
| Dialog | Form Wizard Selection; New Form (selected); Extend Form | `t2-01` |
| Category (chosen) | **Classic** ("WinStudio classic form wizards") | `t2-01` |
| Category options (T1 and T2) | Classic; ExtDataSource; Flex; Form Builder; IDS; New Data; REST | `t1-11` |
| Classic wizards | Build from Scratch; Detail-Only; Grid-Only; Multi-View; Query; Report; Tile | `t1-12`, `t1-13` |
| Wizard (chosen) | **Multi-View** (combobox value `MultiView`) | `t2-01` |

Alternatives in Classic (Grid-Only, Detail-Only) also state IDO binding; the brief asked for one builder, so they were not opened.

### Page 1 (Form Wizard - MultiView) — state

| Control | Initial | After entries | Evidence |
|---|---|---|---|
| Name (required) | empty | displays `FX_HelloWorld01`; **not committed** (alert) | `t2-02`, `t2-04`, `t2-07`, `t2-08` |
| Form Type | `MultiView` (read-only) | unchanged | `t2-02` |
| Form Layout (required) | `GridLeft` | unchanged | `t2-02` |
| Device Type (required) | `Default` | unchanged | `t2-02` |
| Data Source (required) | empty | `FX_HelloWorld01` (selected from the IDO list) | `t2-03`, `t2-04` |
| Query Form | empty | empty (not used; creates a query form if filled) | `t2-02` |
| Comments | empty | empty | `t2-02` |
| Back | disabled | disabled | |
| Next | enabled | enabled; pressed twice, both blocked by the alert | `t2-06`, `t2-08` |
| Finish | disabled | disabled | |

Scope bar throughout: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### Acceptance checks (T2)

| AC | T2 status | Proof | Limitation |
|---|---|---|---|
| AC-1 | PASS (T1, carried) | T1 `t1-01`, `t1-02`, `t1-03`, `t1-15`; scope bar in every T2 capture | Unchanged from T1 |
| AC-2 | PASS (T1, carried; not repeated per brief) | T1 `t1-05`–`t1-08` | No scope column (limitation). No new query was run in T2 |
| AC-3 | **PARTIAL** — route, Category and Wizard captured; wizard loads; existing-IDO Data Source is visibly offered and selectable. Page 2 not reached | `t2-01`–`t2-03`, `t2-04` | "Supports an existing IDO" is proven at page 1 only |
| AC-4 | **NOT MET** — Name not committed (wizard rejects it); Save Template unobserved (page 2 not reached) | `t2-04`, `t2-06`, `t2-07`, `t2-08` | Finish not authorized |
| AC-5 – AC-8 | Not evaluated (no Finish, no Save, no close/reopen, no runtime open) | — | — |
| AC-9 | Unchanged from T1 | T1 section | — |

### Operation counts (T2)

| Operation | Count | Notes |
|---|---|---|
| Designer New (wizard entry) | 1 | Form Wizard Selection opened |
| Category selected | 1 (Classic) | Committed by OK |
| Wizard selected | 1 (Multi-View) | Committed by OK |
| Wizard OK (opened page 1) | 1 | No object created |
| Category/Wizard dropdown opens | 2 (Category 1, Wizard 1) | Read-only |
| Data Source list opened / option selected | 1 / 1 (`FX_HelloWorld01`) | |
| Name template list opened / closed | 1 / 1 | No selection |
| Name entry (key events) | 1 | `FX_HelloWorld01` |
| Name focus clicks | 2 | Before entry; corrective focus |
| Hover | 1 | No tooltip |
| Tab key | 1 | Corrected commit attempt; did not register |
| Next clicks | 2 | Both blocked by "Value is required for Name" |
| Alert dialogs dismissed (OK) | 2 | Each verified by fresh label `OK` before click |
| Finish | **0** | |
| Save (Designer) | **0** | |
| Save Template | not reached | page 2 not opened |
| Object creation / SQL / IDO / project change | **0** | |
| Fresh recovery snapshots | 1 | Dialog snapshot after the first alert (failure inspection) |
| Corrected inspections / attempts | 1 | Tab commit (corrected attempt); its verification Next failed |
| Read-only snapshots and screenshots (non-recovery) | several | Routine reads |
| JavaScript / evaluate | **0** | |
| Authentication / session | **0** | |

### Errors and recovery (T2)

1. **Next did not advance; "Value is required for Name" alert** (first Next). Recovery: fresh snapshot of the alert, verified label OK, dismissed once.
2. **Corrected attempt: Tab commit.** Focus on Name, Tab. The border turned normal, but the second Next gave the same alert. Recovery: fresh alert snapshot, verified label OK, dismissed. Stopped.
3. No `Ref … not found` errors. No timeouts in T2.

### Stop decision (T2)

Stopped on page 1 per the instruction and the recovery allowance. The intended postcondition (Name committed, page 2 reached) remains unproven. Not attempted: entry by fill (EXP-036 style), a second Tab or Enter variant, a list selection, or any other wizard. These are listed as operator decisions below.

### Artifacts (T2)

| File | Shows | Does not prove |
|---|---|---|
| `t2-01-wizard-selection-classic-multiview-before-ok.png` | Form Wizard Selection before OK: Category `Classic`, Wizard `MultiView`; New Form radio; scope bar User. | That the wizard loads (see t2-02). |
| `t2-02-multiview-page1-initial-empty-defaults.png` | Page 1 loaded: Name empty (required); Form Type MultiView; Form Layout GridLeft; Device Type Default; Data Source empty (required); Query Form, Comments empty; Back and Finish disabled. | That any page-1 value is committed. |
| `t2-03-data-source-listbox-snapshot.md` | Accessibility listbox of the Data Source IDO list, including the option `FX_HelloWorld01`. | That the list is complete (it is a rendered list; no total is shown). |
| `t2-04-page1-name-and-data-source-entered.png` | Name `FX_HelloWorld01` (red required border) and Data Source `FX_HelloWorld01`; Finish disabled. | That Name is committed in the wizard model (the alert shows it is not). |
| `t2-05-page1-name-field-after-hover.png` | Same state after hover; no tooltip or error text. | Anything beyond the red border. |
| `t2-06-page1-after-next-click-not-advanced.png` | Page 1 with the alert "Value is required for Name" over it after the first Next. | Which control the alert refers to beyond the text. |
| `t2-07-page1-name-after-tab-commit-attempt.png` | After Tab: Name border normal; focus on Form Layout (value highlighted, not typed). | That Name is committed (the second Next alert shows it is not). |
| `t2-08-stop-state-page1-name-required-after-second-next.png` | Stable stop state: page 1; alert dismissed; Name shows `FX_HelloWorld01` with a normal border; Next has focus; Finish disabled. | Name commitment (not established by this image). |

Snapshot files for the failure alerts were not saved; their state is in the T2 text above (`find` output: `alertdialog "Infor Mongoose … Form Wizard - MultiView"`, text `Value is required for Name`, button `OK`).

### Final browser state (T2)

- **Designer tab (tab 0, selected):** `Form Wizard - MultiView` open on **page 1** (stable inspection state, as the instruction requires). Name shows `FX_HelloWorld01` (not committed); Form Type `MultiView`; Form Layout `GridLeft`; Device Type `Default`; Data Source `FX_HelloWorld01`; Query Form and Comments empty. Back disabled, Next enabled and focused, Finish disabled. **No Form tab is open, Designer Save is disabled, no alert is open.** Scope bar: User / anton.ramos.
- **Web Client tab (tab 1):** unchanged since T1 (IDOs surface, no dialog).
- In-page wizard dialog left open by instruction ("Leave the wizard at a stable inspection state"). No browser-native dialog.

### Open questions and blockers (T2)

1. **Name commitment (blocker for page 2 and Finish).** The wizard rejected the key-event Name entry twice. Operator decision: authorize one further attempt with a named method (for example the fill-type entry that EXP-036 used), or choose another entry route. No retry was made in T2.
2. **Page 2 unobserved.** Save Template presence and state, any generated-object preview, and mandatory page-2 choices are **unknown**. Finish must not be authorized until page 2 is inspected.
3. **Query Form** must remain empty unless the operator decides a query form should be generated (page text: created automatically).
4. **Scope confirmation** of the wizard: the scope bar displays User; no affirmative scope control appeared in T2.
5. **Gate reliance.** The T1 collision gate (visible inventory, 2026-10-10) still applies. T2 ran no new collision query. A later creation task must still confirm the gate result is current.
6. Version strings (portal `2026.10.01` vs Designer `2026.10.13`) remain unreconciled.

---

## T3 — Authorized Name-combobox recovery (single attempt), blocked again at Next

Task: T3, cycle 3, run R-20261010-152752-gg3Q, worker session `ff995603-f082-4900-b9ec-e3d25ee74734`, task_message_id `3825564b-b263-440d-97fe-2e9795cc34f5`.
Scope (operator-authorized): one bounded entry recovery on wizard page 1 (Form Wizard - MultiView, Classic). No Finish, no Designer Save, no other wizard, no page-2 change, no object change, no JavaScript.

### Steps and postconditions

| # | Action | Observed postcondition | Evidence |
|---|---|---|---|
| 0 | Fresh snapshot | Wizard on page 1; no alert open; Name combobox displays `FX_HelloWorld01` (uncommitted from T2); Data Source `FX_HelloWorld01`; Back disabled; Next enabled; Finish disabled; scope User / anton.ramos. | snapshot in this session |
| 1 | Click directly in Name text input (`e300`), not the Open trigger (`e301`) | Input focused; no list opened. | — |
| 2a | Ctrl+A (press_key) | Text selected. | — |
| 2b | Delete (press_key) | Find: Name combobox has **no value**; Data Source still `FX_HelloWorld01`; no alert. | find output |
| 3 | `browser_type` `FX_HelloWorld01`, slowly:true (native key events) | Tool ran `pressSequentially('FX_HelloWorld01')`. | — |
| 4 | Enter (press_key), no dropdown opened, no template selected | No visible change in the snapshot. | — |
| 5 | Fresh snapshot + screenshot `t3-01` | Name reads `FX_HelloWorld01`; Name border normal and focused (not red); no listbox open; Data Source reads `FX_HelloWorld01`; no alert. Checks passed. | `t3-01-page1-name-retyped-before-next.png` (viewed) |
| 6 | Next (`e356`, verified label Next in fresh snapshot), **once** | **Did not advance.** Alert `Value is required for Name` appeared (alertdialog `e363`, button `OK` `e367`). Page 1 remains. | fresh snapshot after the click |
| 7 | Fresh snapshot; OK (`e367`, verified label OK), **once** | Alert dismissed. No alert in the tree. Wizard still on page 1. | `t3-02-after-next-alert-value-required-dismissed.png` (viewed) |

Page 2 was **not reached**. Save Template, page-2 defaults and generated-object implications remain **unobserved**. Per the brief, no further recovery was attempted.

### Interpretation

- The Name displayed as `FX_HelloWorld01` after key-event entry is still not accepted by the wizard as a value. Entry by key events is therefore **not** sufficient in this wizard, on two separate attempts (T2 with Tab commit; T3 with a clean Delete-then-retype and Enter).
- Clearing the field and retyping with Enter did not change the outcome. The remaining difference from the EXP-036 Build-from-Scratch wizard (which advanced after a `browser_type` fill without `slowly`) is untested here and is still a candidate, not a verified cause.
- Whether this Multi-View Name control requires selecting an entry from its list, or a commit mechanism other than key events, is **unresolved**. The Name list contains no `FX_` template, so a template selection is not a valid route to `FX_HelloWorld01`.

### Operation counts (T3)

| Operation | Count |
|---|---|
| Name click (text input) | 1 |
| Ctrl+A | 1 |
| Delete | 1 |
| browser_type (slowly) | 1 |
| Enter | 1 |
| Next | 1 (blocked by alert) |
| Alert OK | 1 |
| Fresh snapshots (routine checks) | 4 (after entry, before Next, after alert, final find) |
| Recovery snapshots used | 0 beyond the routine checks above |
| Finish / Designer Save / object creation / JavaScript | 0 / 0 / 0 / 0 |

### Errors and recovery (T3)

- Next produced "Value is required for Name" after the authorized entry. Recovery: fresh snapshot, verified OK label, one dismissal. Stopped as instructed. No further entry method, Next, or recovery was tried.
- No `Ref … not found`, no timeouts.

### Artifacts (T3)

- `evidence/EXP-041-R2/t3-01-page1-name-retyped-before-next.png`: Name `FX_HelloWorld01` with a normal focused border, Data Source `FX_HelloWorld01`, no alert, before Next. Proves the displayed values only; does **not** prove the wizard's committed Name (the next alert shows it was not accepted).
- `evidence/EXP-041-R2/t3-02-after-next-alert-value-required-dismissed.png`: page 1 after OK on the alert; no alert; Name and Data Source displayed. Does **not** prove the Name is committed.

### Final browser state (T3)

- Designer tab (selected): Form Wizard - MultiView open on **page 1** (in-page; left open as the instruction requires). No alert. Finish disabled, Next enabled, Back disabled. No Form tab open. Designer Save disabled. Scope User / anton.ramos.
- Web Client tab: unchanged since T1 (no dialog).

### Acceptance (T3)

- AC-3: still PARTIAL (wizard loads; existing-IDO Data Source visible and selected; page 2 not reached).
- AC-4: **NOT MET** (the Name is not accepted by the wizard; Save Template unobserved).
- AC-1, AC-2: carried from T1, unchanged. AC-5 to AC-8: not evaluated.

### Open questions (T3)

1. Operator decision: the Name control still rejects the typed name. Options: a different, named entry or commit method, or stop the wizard path and record the blocker for the experiment.
2. Page 2 still unobserved; Save Template unknown.
3. Do not authorize Finish until the Name is accepted and page 2 is inspected.
