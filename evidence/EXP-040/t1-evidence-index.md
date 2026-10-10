# EXP-040 — T1 evidence index (read-only preflight)

Run: R-20261010-133302-x5e3 · task T1 · worker session 6224dabe-675c-4250-a397-c10c2349e914 · task_message_id 930c4df3-e97b-440d-8905-76f2af62a232
Scope: User (observed in the Identify Your Editing Scope dialog and the Runtime Builder Selection scope line). Environment: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Web Client header, every capture).

Each row states what the capture shows and what it does not prove. Files are in this folder. Playwright snapshot and console files written by the browser tool live in `evidence/playwright/` (git-ignored) and are not indexed here.

| File | Shows | Does not prove |
|---|---|---|
| `00-t1-ido-projects-after-fip-toggle.png` | IDO Projects in Filter-in-Place mode (filter icon on tab). One grid row beginning `FX_HelloWorld…`, with blank Description and Access As in the detail pane. Project Name criteria field selected. Save greyed. | That the grid row is a data row. Superseded by `01`. |
| `01-t1-ido-projects-after-exact-fip-f4.png` | After F4 with criteria `FX_HelloWorldProject01`: one data row `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`. Detail pane greyed (saved-record style). FiP icon cleared. Save disabled. Description text field has focus, nothing typed. | Uniqueness beyond this query result (exact-name FiP only). |
| `02-t1-sql-tables-selected-initial.png` | Sql Tables tab in Filter-in-Place mode, blank criteria row, Schema and Table Name empty, Multi-Site unchecked, Save and New disabled. | Any query result. |
| `03-t1-sql-tables-table-name-list-opened.png` | Table Name combo list open, alphabetical: ABDataServices … ActiveXScriptLines. No FX_ entry in the rendered part. | Completeness. The list is virtualised; the FX_ region was not scrolled. |
| `04-t1-sql-tables-after-list-escape.png` | Final state after two Escape presses: combo list closed, Table Name blank. (First Escape left the list open; this file was overwritten by the second capture.) | — |
| `05-t1-sql-tables-positive-control-customer-entered.png` | Criteria `Customer` entered in Table Name before F4. | That the query ran. |
| `06-t1-sql-tables-positive-control-customer-f4-result.png` | **Positive control.** After F4: one data row `Customer` / `dbo` / Multi-Site unchecked. Constraints `PK_Customer` and `IX_Customer_RowPointer` listed. Update Current Table greyed. | Uniqueness, or any other table. |
| `07-t1-sql-tables-fip-reentered-before-target.png` | Filter-in-Place re-entered (tooltip shown). `Customer` carried in the Table Name criteria. | That the query ran. |
| `08-t1-sql-tables-target-criteria-before-f4.png` | Criteria `FX_HelloWorld01` in the criteria row, before F4. | That the query ran. |
| `09-t1-sql-tables-target-f4-result-zero-rows.png` | **Target query, exact case.** After F4: no data row. Grid shows a blank add-record placeholder (blue star; required asterisks on Table Name and Schema). Columns and Update Current Table greyed. | Database-wide absence. The placeholder is unsaved; it was cleared by the next FiP re-entry (`10`). |
| `10-t1-sql-tables-lowercase-positive-control-customer-f4.png` | Lowercase `customer` after F4 returns the `Customer` row. The placeholder from `09` is gone. | — |
| `11-t1-select-form-dialog-opened.png` | Select Form dialog. Rows include `IDO Projects` (IdoProjects) and `IDOs` (IdoCollections). | That the IDOs form is the only or complete list. |
| `12-t1-idos-form-opened-initial.png` | IDOs form opened from Select Form, in Filter-in-Place mode, blank criteria. New IDO, New Table, New Property, New Method, New Data Rule buttons visible. Check Out and Undo Check Out greyed. | The check-out state of any target. |
| `13-t1-idos-positive-control-customer-f4.png` | Criteria `Customer` after F4: no rows; detail fields greyed. | That the query works. No IDO named `Customer` exists in this client. **Not a valid positive control.** Superseded by `16`. |
| `14-t1-idos-blank-criteria-inventory-f4.png` | Captured after Tab then F4: blank criteria row and FiP icon still shown (focus was on the Extends combo). | — Superseded by `15`. |
| `15-t1-idos-blank-inventory-after-refocus-check.png` | Blank-criteria inventory rendered: IDO list alphabetical (`ABDataServices`, `ABProjectRoles`, `ABProjects`, `ABRepositoryComposites`, …) through row 29. Row 1 auto-selected: `ABDataServices`, Project `AppBuilder`, Access As `Core`, base table `ABDataServices` (Primary Base). | The complete list; only rows 1–29 are visible. |
| `16-t1-idos-positive-control-abdataservices-f4.png` | **Positive control.** `ABDataServices` after F4: one row, Project `AppBuilder`, Access As `Core`. | Uniqueness. |
| `17-t1-idos-target-fx_helloworld01-f4-result.png` | **Target query, exact case.** `FX_HelloWorld01` after F4: no rows; grid empty; detail greyed; New IDO enabled. | Database-wide absence. |
| `18-t1-idos-lowercase-positive-control-abdataservices-f4.png` | Lowercase `abdataservices` after F4 returns `ABDataServices`. | — |
| `19-t1-designer-toolbar-hover-tooltip.png` | Hover over the second Designer toolbar control: tooltip "Open designer in a new window" (split control; not clicked). | — |
| `20-t1-designer-identify-editing-scope-dialog.png` | Identify Your Editing Scope: **Scope = User**, **User = anton.ramos@3mworks.com.ph** (pre-filled; not changed by the worker). | That the scope applies to the wizard, or the configuration-wide visibility of tables and IDOs. |
| `21-t1-after-scope-cancel-state.png` | After Cancel on the scope dialog, the **Runtime Builder Selection** dialog opened: Category and Runtime Builder empty; scope line `[ Scope Type: User / Scope Name: anton.ramos@3mworks.com.ph ]`. | Any wizard. No category or builder was selected. |
| `22-t1-after-runtime-builder-cancel-idos-state.png` | After Cancel on Runtime Builder Selection: no dialog. IDOs tab shows `ABDataServices` (system IDO, not edited). Save disabled. New IDO enabled. Check Out and Undo Check Out greyed. | That the session state persists across sessions. |

## T3 captures (wizard entry attempt; stopped at the scope step)

| File | Shows | Does not prove |
|---|---|---|
| `23-t3-designer-toolbar-hover-before-launch.png` | Clean IDOs tab (`ABDataServices`); tooltip "Open designer in a new window" on the split control (`f1e53`). | The launch itself. |
| `24-t3-after-designer-click-dialog-state.png` | Runtime Builder Selection open (Category and Runtime Builder empty) with scope line `User / anton.ramos@3mworks.com.ph`. No Identify Your Editing Scope dialog. | An affirmative scope confirmation; the wizard. |
| `25-t3-final-state-after-runtime-builder-cancel.png` | After Cancel: no dialog; IDOs tab clean; Save disabled. | Persistence across sessions. |

## T12 captures (IDO preflight; one check-in; Form-absence check; close/reopen; SQL Tables and Sql Columns re-read)

| File | Shows | Does not prove |
|---|---|---|
| `80-t12-stageA-idos-tab-selected-from-clean-sql-columns.png` | IDOs tab selected from the clean Sql Columns surface. | The IDO identity (see 81). |
| `81-t12-stageA-idos-fx_helloworld01-fip-f4-settled.png` | One IDO row FX_HelloWorld01; project FX_HelloWorldProject01; Revision 1; Locked By set to the Site Developer user; row checkbox checked; Check In enabled; Access As G6R; FX_Code (String 30, key 1, Required) and FX_Label (String 100) in Properties. | Uniqueness across the configuration beyond the FiP result. |
| `t12-snapshot-stageA-idos-fx_helloworld01-f4-settled.yml` | Accessibility state of the Stage A query (one row; Save disabled). | — |
| `82-t12-stageA-idos-tables-subtab-base-table-alias.png` | Tables sub-tab: FX_HelloWorld01 / fxhw / Primary Base / Inner. | Physical table existence (see 104). |
| `83-t12-stageB-checkin-notice-dialog-before-ok.png` | The check-in source-control notice (text: "Source control integration is currently disabled…"), single OK. | That a check-in occurred (see 84). |
| `84-t12-stageB-post-checkin-fresh-exact-query-idos.png` | Fresh FX_HelloWorld01 query: Revision Num 2, Locked By empty, Check Out enabled, Undo Check Out disabled, Save disabled. | Server-side persistence in a separate session. |
| `t12-snapshot-stageB-post-checkin-fresh-query.yml` | Accessibility state after check-in (Check Out enabled; Revision 2). | — |
| `85-t12-stageB-post-checkin-properties-tab.png` | Properties tab after check-in (FX_Code, FX_Label, system properties). | That the properties were unchanged vs before check-in (not compared line by line). |
| `86-t12-stageC-select-form-dialog-opened.png` | Select Form dialog opened from the Open toolbar (Stage C start). | That the filter applies (see 87–88). |
| `87-t12-stageC-select-form-positive-control-idoprojects-typed.png` | Filter typed "IDO Projects"; list unchanged. | Filter function (filter did not narrow). |
| `88-t12-stageC-select-form-fx_helloworld01-filter-result.png` | Filter text FX_HelloWorld01; list unchanged (IDOs row selected). | Absence or presence of a Form (filter ineffective). |
| `89-t12-stageC-select-form-scrolled-toward-f-section.png` | Caption-sorted list scrolled toward the F/FX_ region. | Complete coverage. |
| `90-t12-stageC-select-form-fx-region-scan-after-scroll.png` | FX_ caption block after scroll. | Complete coverage of non-FX_ captions. |
| `91-t12-stageC-select-form-fx-gap-scan-between-formproperty-and-testblank.png` | FX_ rows: FX_ButtonCaptionLab01, FX_ComponentLab01/02, FX_ComponentRecoveryLab02/03, FX_FormPropertyLab05/06; no FX_HelloWorld01 row among these. | Rows outside the captured window; a catalogue query. |
| `92-t12-stageC-after-select-form-cancel-no-form-opened.png` | Select Form closed with Cancel; no form opened. | — |
| `93-t12-stageD-after-close-idos-tab.png` | IDOs tab closed normally; no prompt. | — |
| `94-t12-stageD-sql-tables-selected-before-close.png` | SQL Tables selected before its close; clean state. | — |
| `95-t12-stageD-after-close-sql-tables-tab.png` | SQL Tables tab closed normally; no prompt. | — |
| `96-t12-stageD-select-form-reopen-list-position.png` | Select Form reopen; list position before scroll. | — |
| `97-t12-stageD-select-form-scrolled-toward-ido-section.png` | Scrolled toward the IDO entries. | — |
| `98-t12-stageD-select-form-after-wheel-over-grid.png` | Wheel scroll after pointer placed over the grid. | — |
| `99-t12-stageD-idos-reopened-via-select-form.png` | IDOs reopened through Select Form. | Data (see 101). |
| `100-t12-stageD-idos-fip-readonly-field-after-f4-state.png` | After the failed read-only fill and blank-criteria F4: placeholder row; no data change; Save disabled. | Cause of the timeout (not diagnosed). |
| `t12-snapshot-stageD-idos-after-readonly-type-failure-and-f4.yml` | Accessibility state after the failed fill and F4. | — |
| `101-t12-stageD-idos-fx_helloworld01-requery-after-corrected-attempt.png` | Corrected IDO Name criteria: one data row FX_HelloWorld01; Revision 2; Check Out enabled; Save disabled; Tables sub-tab FX_HelloWorld01 / fxhw / Primary Base / Inner. | Properties after reopen (see 108). |
| `102-t12-stageD-select-form-open-before-sqltables-scroll.png` | Select Form open before scrolling to the S section. | — |
| `103-t12-stageD-select-form-after-scroll-toward-s.png` | Scrolled toward the S section (no Sql Tables row visible yet). | — |
| `104-t12-stageD-sqltables-reopened-fx_helloworld01-grid-criteria-f4.png` | SQL Tables reopened; grid criteria F4: one row FX_HelloWorld01 (dbo, Multi-Site unchecked); constraints PK_FX_HelloWorld01 (FX_Code) and IX_FX_HelloWorld01_RowP… (RowPointer); Update Current Table disabled. | Full index name (truncated; see T11 `76`); physical catalogue. |
| `105-t12-stageD-sqlcolumns-reopened-fx_helloworld01.png` | Sql Columns: nine columns; FX_Code detail (Column Id 2, nvarchar, length 30, Is Nullable unchecked, Primary Key checked, Key Sequence 1). | SQL types of the six system columns. |
| `106-t12-stageD-sqlcolumns-fx_label-row-selected.png` | FX_Label detail (Column Id 3, nvarchar, length 100, Is Nullable checked, Primary Key unchecked). | — |
| `107-t12-stageD-final-sqltables-clean-after-sqlcolumns-close.png` | Sql Tables clean after closing Sql Columns; Update Current Table disabled; no dialog. | — |
| `108-t12-stageD-idos-fx_helloworld01-properties-after-reopen.png` | IDOs after reopen: FX_HelloWorld01, checked in (Revision 2, Check Out enabled); Properties: FX_Code (Bound to Column, key 1, String 30, Required), FX_Label (String 100, not Required), 7 system properties. | Properties after the Stage B check-in compared numerically to the pre-check-in state. |

Not captured in T12: network requests (no save prompt appeared); Form inventory beyond the qualified Select Form scan; any DB catalogue query.

## T11 captures (SQL Tables recovery; Customer verification; FX_HelloWorld01 columns)

| File | Shows | Does not prove |
|---|---|---|
| `70-t11-step1-fresh-state-before-error-inspection.png` | Row 1 FX_HelloWorld01 with red error badge "1"; Save enabled; constraints panel of the displayed record. | The error text. |
| `71-t11-step1-hover-error-badge-row1.png` | Pointer on the badge: no tooltip or message appeared. | Any error contents (not exposed). |
| `72-t11-step2-after-refresh-click.png` | Save-changes prompt after Refresh: Yes / No / Cancel. | The response (see 73). |
| `73-t11-step2-settled-after-no-discard.png` | After No: row 1 Customer (dbo), no badge, Save greyed, constraints PK_Customer and IX_Customer_RowPointer. | Server-side persistence in a separate session. |
| `74-t11-step3-fip-mode-grid-criteria-identification.png` | Filter-in-Place mode; grid criteria row (Customer, empty Schema); constraints empty. | That the criteria row is a record. |
| `75-t11-step3-customer-grid-criteria-f4-result.png` | Customer data row (dbo) with PK_Customer and IX_Customer_RowPointer; Save disabled. | Uniqueness across schemas. |
| `76-t11-step4-fx_helloworld01-grid-criteria-f4-result.png` | FX_HelloWorld01 data row (dbo) with PK_FX_HelloWorld01 (FX_Code) and IX_FX_HelloWorld01_RowPointer. | Column types (see 77). |
| `77-t11-step4-sql-columns-view-opened.png` | Sql Columns: nine columns; FX_Code detail (Column Id 2, nvarchar, Length 30, Is Nullable unchecked, Primary Key checked, Key Sequence 1). | The other columns' SQL types. |
| `78-t11-step4-sql-columns-fx_label-detail.png` | FX_Label detail (Column Id 3, nvarchar, Length 100, Is Nullable checked, Primary Key unchecked). | — |
| `79-t11-step4-sql-columns-createdby-system-detail.png` | CreatedBy detail (Column Id 4, UsernameType, nvarchar 128, not nullable, default suser_sname()). | UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow SQL types (not read). |
| `t11-snapshot-step2-settled-after-no.yml` | Accessibility state after the No discard (Save disabled; Customer). | — |
| `t11-snapshot-step3-customer-f4-settled.yml` | Accessibility state of the Customer query and constraints. | — |
| `t11-snapshot-step4-fx_helloworld01-f4-settled.yml` | Accessibility state of the FX_HelloWorld01 query and constraints. | — |
| `t11-snapshot-step4-sql-columns-after-fx_label-select.yml` | Accessibility state of the Sql Columns list after the FX_Label selection. | — |
| `t11-network-requests-after-step2-no.txt` | Network list for the Refresh and prompt responses. | Server-side save outcomes. |

Not captured: the Form inventory, any close/reopen, any check-in.

## T10 captures (post-Finish read-only inventory; SQL Tables stopped after an unintended prompt response)

| File | Shows | Does not prove |
|---|---|---|
| `64-t10-idos-fip-fx_helloworld01-f4-post-finish.png` | IDO data row FX_HelloWorld01; project FX_HelloWorldProject01; Access As G6R; Revision 1; Locked By anton.ramos; Check In enabled, Undo Check Out disabled (checked out); base table FX_HelloWorld01 / fxhw / Primary Base. | The SQL table's columns or lengths; that the checked-out state will persist. |
| `65-t10-ido-properties-tab-fx_helloworld01.png` | Nine IDO properties: FX_Code (Seq 1, Key Seq 1, String 30, nvarchar, Required checked); FX_Label (Seq 2, Key Seq 0, String 100, nvarchar); system properties CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer (Read Only checked), NoteExistsFlag, InWorkflow. | The SQL-side primary key, nullability, or physical column definitions. |
| `66-t10-sql-tables-tab-selected-before-query.png` | SQL Tables before the query: old Customer result and Customer criteria. | — |
| `67-t10-sql-tables-fx_helloworld01-exact-f4-result.png` | Exact query row FX_HelloWorld01 / dbo / Multi-Site unchecked, and the "already exists as a TableName or another ViewName" prompt. | Columns; physical lengths. |
| `68-t10-sql-tables-after-value-prompt-declined-no.png` | The save-changes prompt (Yes / No / Cancel) that the misclick answered **Yes**. | The outcome of that Yes. |
| `69-t10-current-state-after-misclicked-save-prompt-yes.png` | Current SQL Tables state: row error badge; Save enabled; stale Customer constraints. | Whether the save reached the server. |
| `t10-snapshot-idos-fip-fx_helloworld01-post-finish.yml` | Accessibility state of the IDO data row and form fields. | — |
| `t10-snapshot-sql-tables-fx_helloworld01-f4.yml` | Accessibility state of the SQL exact row and prompts. | — |
| `t10-network-requests-after-sql-yes-misclick.txt` | Network request list; requests 9 (promptresp No) and 11 (promptresp Yes) identified. | Server-side save outcome. |

Not captured: the SQL Columns list, the Form inventory, any close/reopen.

## T9 captures (single Finish; Create Form declined; wizard closed)

| File | Shows | Does not prove |
|---|---|---|
| `61-t9-immediately-after-single-finish.png` | Create Form prompt after the single Finish: "Do you want to create a form for FX_HelloWorld01?"; green check; Yes focused, No available. | The physical table name; that the table/IDO exist (verification pending). |
| `62-t9-after-create-form-declined-no.png` | Wizard completion after declining the form: message "Table and IDO created."; Back / Next / Finish disabled; Close enabled. | Independent SQL or IDO verification. |
| `t9-snapshot-wizard-completion-state.yml` | Accessibility text of the completion state (verbatim message; disabled controls). | The server response. |
| `63-t9-after-wizard-close-settled-state.png` | Settled page after Close: no dialog; Save and New disabled; IDOs grid still lists only ABDataServices. | That FX_HelloWorld01 is absent or present in the IDO list (not refreshed). |

Not captured: any verification of the generated table or IDO (next task).

## T8 captures (page-1 re-verification; one Next to the last page; stopped before Finish)

| File | Shows | Does not prove |
|---|---|---|
| `55-t8-page1-pre-next-verification.png` | Page 1 settled before Next: IDO Name FX_HelloWorld01; project FX_HelloWorldProject01; alias fxhw; Site Split unchecked; Table Name / View Name empty; MultiView / GridLeft / Default; grid partly scrolled (Required visible: FX_Code checked, FX_Label unchecked; Label String ID and Default Value empty). | Primary Key (clipped in this view). |
| `56-t8-page1-grid-scrolled-left-primary-key-verification.png` | Scroll attempt with pointer off the grid: no change. | — (partial, not decisive). |
| `57-t8-page1-grid-scrolled-left-after-pointer-over-grid.png` | Partial scroll left: SQL Data Type nvarchar, Property Length 30 / 100 visible. | Primary Key (partial, not decisive). |
| `58-t8-page1-grid-scrolled-to-leftmost-property-class-data-type-key.png` | Leftmost view: Property Class empty, Data Type String, SQL Data Type nvarchar for both rows. | Primary Key. |
| `59-t8-page1-grid-primary-key-column-visible.png` | Primary Key column visible: FX_Code checked, FX_Label unchecked; Property Length 30 and 100. **Decisive for the key settings.** | Required (clipped in this view). |
| `60-t8-wizard-page-2-after-next-1.png` | Last wizard page after one Next: Create Scripts unchecked; text "Click Finish to create the database table, IDO and optional form."; empty disabled preview area; Next disabled; Finish enabled and not pressed. | Any generated object name; the physical table identifier; the preview content (exposed as no text). |
| `t8-snapshot-page1-grid-settled-pre-next.yml` | Accessibility state of both grid rows before Next (partly scrolled). | — |
| `t8-snapshot-page1-grid-leftmost-after-scroll.yml` | Accessibility state at leftmost scroll (Property Class, Data Type, SQL Data Type). | — |
| `t8-snapshot-wizard-page-2-last-page-dialog.yml` | Last-page dialog accessibility state (checkbox, text, disabled textbox with no exposed text, Next disabled, Finish enabled). | The preview content. |

Not captured: Finish, any created object (none occurred).

## T7 captures (blank row deleted once; FX_Code and FX_Label configured; wizard open on page 1)

| File | Shows | Does not prove |
|---|---|---|
| `41-t7-blank-row1-selected-before-delete.png` | Blank top row selected (outlined, empty), FX_Code unselected, before Delete Row. | The deletion (see 42). |
| `42-t7-after-single-delete-row-settled.png` | One Name row, FX_Code (its editor shows the text highlighted; nothing typed); one empty property row. | Later field values. |
| `t7-snapshot-after-single-delete-row.yml` | Accessibility state after the single deletion. | — |
| `43-t7-data-type-cell-opened-fx-code.png` | FX_Code Data Type cell opened. | The choice made. |
| `44-t7-data-type-list-opened-fx-code.png` | Data Type options: Binary, Byte, Date, Decimal, Float, GUID, Long Integer, NumSortedString, Short Integer, String, Big Integer. | The full option set beyond these. |
| `45-t7-fx-code-data-type-string-selected.png` | FX_Code Data Type String; SQL Data Type nvarchar auto-populated. | Physical length. |
| `46-t7-fx-code-property-length-cell-opened.png` | Property Length editor open for FX_Code. | The value (see 47). |
| `47-t7-fx-code-length-30-committed.png` | FX_Code length 30 committed (accessibility confirms String / nvarchar / 30). | Physical SQL column length. |
| `48-t7-fx-code-primary-key-clicked.png` | FX_Code Primary Key checked and Required checked (Required set by coupling). | Why Required was set. |
| `49-t7-after-single-add-row-for-fx-label.png` | Second row created by the single Add Row; Name editor active. | The FX_Label values (see 50–52). |
| `50-t7-fx-label-name-committed.png` | FX_Label name committed. | — |
| `51-t7-fx-label-data-type-string-selected.png` | FX_Label Data Type String; SQL Data Type nvarchar auto-populated. | — |
| `52-t7-fx-label-length-100-committed.png` | FX_Label length 100 committed; Primary Key and Required unchecked. | — |
| `53-t7-field-grid-settled-two-rows.png` | Settled two-row grid: Name, Property Length 30 / 100, Decimal Precision, Primary Key (FX_Code checked, FX_Label unchecked). | Data Type and Required in this view. |
| `54-t7-field-grid-scrolled-right-hidden-columns.png` | Scrolled view: Required (FX_Code checked, FX_Label unchecked), Label String ID empty, Default Value empty. | The Primary Key checkbox, which is not drawn in this capture (rendering mismatch; see the record). |
| `t7-snapshot-field-grid-fx-code-fx-label.yml` | Accessibility state of both rows, all columns. | — |
| `t7-snapshot-field-grid-after-horizontal-scroll.yml` | Accessibility state after the horizontal scroll. | — |

Not captured: Finish, any later wizard page, any generated object (none occurred).

## T6 captures (row 1 inspection; stopped; no grid change)

| File | Shows | Does not prove |
|---|---|---|
| `40-t6-field-grid-row1-vs-fx-code-inspection.png` | Field grid: row 1 blank, row 2 FX_Code; no row-number column; no star or new-row marker; Property Class, Data Type, SQL Data Type empty; Finish disabled. | Whether row 1 is a placeholder or a real field. |
| `t6-snapshot-field-grid-row1-vs-fx-code.yml` | Accessibility state of both grid rows (Name, Property Class, Data Type, SQL Data Type, Primary Key, Required, Label String ID, Default Value). | Row identity. |

## T5 captures (first-page configuration; wizard left open; stopped before Property Class)

| File | Shows | Does not prove |
|---|---|---|
| `31-t5-designer-launch-runtime-builder-selection-reopened.png` | Runtime Builder Selection (empty category and builder); scope line User / anton.ramos. No Identify dialog. | An affirmative scope confirmation. |
| `32-t5-runtime-builder-selection-formbuilder-datamaintenance-chosen.png` | Category FormBuilder and Runtime Builder DataMaintenance before OK. | The wizard. |
| `33-t5-data-maintenance-wizard-reopened-first-page.png` | Wizard reopened on page 1: IDO Name empty; IDO Project Name default FX_HelloWorldProject01; Table Alias empty; MultiView / GridLeft / Default; Site Split unchecked; empty field grid; Finish disabled. | Entries (none yet). |
| `34-t5-wizard-ido-name-and-table-alias-entered.png` | IDO Name FX_HelloWorld01; project FX_HelloWorldProject01; Table Alias fxhw; Site Split unchecked; Finish disabled. | Multi-Site Table/View Name values (accessibility tree only). |
| `35-t5-after-add-row-field-grid.png` | Second grid row added beside the original blank row; Name editor active. | The field's name value (typed next). |
| `36-t5-field-code-name-typed-before-commit.png` | FX_Code typed into the Name editor before commit. | Commit (see 37). |
| `37-t5-field-code-after-tab-property-class-cell.png` | FX_Code committed in Name; Property Class cell active and empty; Data Type and SQL Data Type empty. | Any Property Class, length, or key setting. |
| `38-t5-property-class-list-opened-for-fx-code.png` | Property Class list opened (about 200 classes, alphabetical); no plain String class in view. | The full list (virtualised). |
| `39-t5-after-property-class-list-escape-state.png` | Stable state after Escape: list closed, Property Class empty, Finish disabled, Next enabled and not pressed. | That any field is valid for SQL. |
| `t5-snapshot-after-field-code-name-tab.yml` | Accessibility snapshot after the FX_Code commit. | — |
| `t5-snapshot-after-property-class-escape.yml` | Accessibility snapshot after Escape. | — |

Not captured: any Next, Finish, Save, check-in, or object creation (none occurred).

## T4 captures (preflight completion and Data Maintenance Wizard first page)

| File | Shows | Does not prove |
|---|---|---|
| `26-t4-help-about-dialog.png` | Help > About: "Currently logged in as anton.ramos@3mworks.com.ph, Site Developer, edits create user versions for user anton.ramos@3mworks.com.ph"; configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Mongoose 2026.10.13. | A live permission check; the reason for version drift. |
| `27-t4-designer-launch-runtime-builder-selection-initial.png` | Runtime Builder Selection with empty Category and Runtime Builder; scope line User / anton.ramos. No Identify Your Editing Scope dialog. | An affirmative scope confirmation. |
| `28-t4-runtime-builder-selection-category-and-builder-chosen.png` | Runtime Builder Selection showing Category FormBuilder and Runtime Builder DataMaintenance before OK (accessibility tree also confirms both values). | The wizard itself. |
| `29-t4-data-maintenance-wizard-first-page.png` | Data Maintenance Wizard first page: IDO Name empty; IDO Project Name default FX_HelloWorldProject01; Table Alias empty; Form Type MultiView; Form Layout GridLeft; Device Type Default; Site Split unchecked; Back disabled, Next enabled, Finish disabled; field grid with headers and no data rows; no error. | Multi-Site Table Name/View Name enabled state (grey shading only); nothing entered. |
| `30-t4-after-wizard-cancel-final-state.png` | Clean IDOs state after the wizard was cancelled (Yes on the "All data entered will be lost" confirmation; no entries made). | Persistence across sessions. |

Not captured: the Finish result, any created object, and any post-creation state. The Data Maintenance wizard was **not** advanced past its first page.

