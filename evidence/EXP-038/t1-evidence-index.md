# EXP-038 — T1 evidence index (read-only preflight, 2026-10-10)

Run R-20261010-105122-w8zf · task T1 · worker session 88deeb2c-5945-48a9-8f63-5bf6bebc57ea
Record: `experiments/EXP-038-hello-world-part-1-fx-sql-table-and-ido-creation-f.md`

No Mongoose object was created, saved, deleted, checked in, or checked out in this run.

## Object inventory (for operator cleanup)

**Empty.** No SQL table, IDO, IDO project, Form, column, constraint, or data record was created by T1.

## Screenshots

Each entry lists what the image shows and what it does not prove. Screenshot `03` and `04` filenames were each reused by a later capture; the file on disk is the later capture noted below.

| File | Shows | Does NOT prove |
|---|---|---|
| `00-preflight-webclient-start.png` | Portal top bar (Mongoose tab selected); portal notification banner covering the Web Client menu bar; empty Web Client main area. | Object state; editing scope; permissions. |
| `01-form-menu-recent-forms.png` | Web Client Form menu open. Recent list shows earlier FX_ test forms (FX_SingleButtonLab01, FX_ComponentRecoveryLab03, … FormSync). No Sql Tables entry. | Full form inventory; absence of any FX_HelloWorld object. |
| `02-select-form-dialog-open.png` | Select Form dialog, Caption and Name grid sorted by caption (Access As … Application Schema Tables Metadata), Filter textbox, Filter By = Caption. | The Filter textbox does not filter; no name check. |
| `03-select-form-scroll-check.png` | (Overwritten name.) Current file: Select Form grid after scrolling, captions "Domain Additional Settings … Edit Collection Specification…". | First wheel attempt had no effect (that capture was overwritten). |
| `04-select-form-scrolling-to-sql.png` | (Overwritten name.) Current file: Select Form grid at "Search Items Query … Session Access As". The earlier bottom-of-list capture was overwritten. | Position of "Sql Tables" (it lies below this region). |
| `05-sql-tables-form-opened.png` | Sql Tables form (`SqlTables`) opened with the Mongoose warning "Please be very careful using these forms…" over it. Behind it: grid Table Name / Schema / Multi-Site (row 1 blank); buttons Columns…, SQL Data Types…, Edit Procedure…; Attributes: Schema combo, Table Name combo, Multi-Site checkbox; Update Current Table, New Constraint…, Modify Constraint…. | Whether the form can create tables; the grid row's meaning (criteria vs. new record) is not established. |
| `06-after-misdirected-click-check.png` | Warning still displayed after the misdirected click (action 8 in the record). No visible change. | The effect on element `#ext-element-2`, which was not identified. |
| `07-sql-tables-form-after-warning-ok.png` | Warning dismissed; Sql Tables form visible; grid row 1 blank; Save and New icons appear grey. | Programmatic Save state (only visual). |
| `08-sql-tables-table-name-dropdown.png` | Table Name combo list open; first entries ABDataServices, ABProjectRoles, ABProjects … ActiveXScriptLines (existing application tables). | Absence of FX_HelloWorldData01 (only the top of the list is visible). |
| `09-table-name-dropdown-scroll-1.png` | Same list scrolled to its end: fsbase_Menus … fsbase_PropertyDefaultDragDropEvents. | Any FX_ entry (none visible). |
| `09-table-name-dropdown-scroll-2.png` | Same list at a middle position: BodInformation … COR_INBOX_ENTRY. | Any FX_ entry (none visible). List ordering is not consistent across positions. |
| `10-after-dropdown-dismiss.png` | List still open after a coordinate click; positioned at EventInitialState … EventState. | — |
| `11-after-escape-check.png` | List closed after Escape; Table Name combo blank; Schema blank; Multi-Site unchecked; Save grey. | — |
| `12-table-name-cell-clicked.png` | Row 1 Schema cell opened as an editor (dropdown arrow). The click had targeted an unintended cell. | — |
| `13-after-schema-cell-escape.png` | Schema cell focused; no dropdown; values blank; Save grey. | — |
| `14-table-name-criteria-cell.png` | Row 1 Table Name cell opened as an editor (lookup arrow, cell state under edit). Text entry was then attempted and failed (no text entered). | Whether the grid is in Filter-in-Place criteria mode (funnel icon present in the title; not proven). |
| `15-after-table-name-cell-escape.png` | Table Name cell focused, no editor open, value blank; Save grey. | — |
| `16-select-form-scroll-to-ido.png` | Select Form grid at the bottom of its list (WSForm Builder… , XML to IDO Wizard). | — |
| `17-select-form-scroll-search.png` | Select Form grid at "Event Action …" captions. | — |
| `18-ido-projects-form-opened.png` | IDO Projects form (`IdoProjects`) in a second tab (Sql Tables tab minimized at left). Grid: Project Name, Description, Access As columns; row 1 blank. Buttons "New IDO…" and "IDOs" (appear light / disabled). Detail fields: Project Name (focused), Description, Access As (empty). | Access As for real records; naming rule; whether "New IDO…" would open the IDO Wizard. |
| `19-ido-projects-fx-query-f4.png` | Project Name criteria "FX" (highlighted) in row 1 and in the detail field, after F4. No result rows beneath. | Whether F4 executed a query; absence or presence of FX projects. |
| `20-ido-projects-fip-click-result.png` | Same state after clicking the toolbar "Filter in Place" control (tooltip visible). Still only the "FX" criteria row; no result rows. | Whether any query ran. Result is inconclusive; a control query was not run. |

Playwright snapshots from this run: `evidence/playwright/page-2026-10-10T02-*.yml`, and console log `evidence/playwright/console-2026-10-10T02-51-28-136Z.log`.

## Name-collision status

| Name | Inventory used | Status |
|---|---|---|
| FX_HelloWorldData01 | Sql Tables Table Name combo (partial scan, positions in `08`–`10`) | Not verified |
| FX_HelloWorldIDO01 | IDOs form | Not inventoried |
| FX_HelloWorldProject01 | IDO Projects FiP criteria "FX" (`19`, `20`): inconclusive | Not verified |
| FXHelloWorld01 (fallback) | Same as above | Not verified |
