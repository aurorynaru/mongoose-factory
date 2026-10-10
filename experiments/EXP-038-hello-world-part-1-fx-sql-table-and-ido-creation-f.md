# EXP-038 — Hello World Part 1: FX_ SQL Table and IDO Creation Feasibility

Status: **T1 (read-only preflight) — BLOCKED before any mutation.** No Mongoose object was created, saved, deleted, checked in, or checked out. No mutation is authorized by this record.

Outcome (operator, 2026-10-10): run stopped as **blocked**. The specialist reports that the New Data Maintenance wizard (the tutorial's route) uses one name for both table and IDO, which conflicts with this brief's separate names, and the SQL Tables form showed no new-table action. Follow-up split: EXP-039 creates only the IDO project FX_HelloWorldProject01 (save rights, naming rule, Access As prefix); EXP-040 runs the New Data Maintenance wizard with one shared FX_ name and declines Create Form. Left open in the browser: IDO Projects (criteria "FX", unsaved) and Sql Tables (minimized tab), both with Save disabled.

Date: 2026-10-10
Run: R-20261010-105122-w8zf · task T1 · worker session 88deeb2c-5945-48a9-8f63-5bf6bebc57ea
Mode: LEARNING MODE. FX_-only scope extension for the Hello World tutorial (AGENTS.md, 2026-10-10).
Editing scope: User (not changed; not re-verified in this run, see Preflight).
Target names: FX_HelloWorldData01 (SQL table), FX_HelloWorldIDO01 (IDO), FX_HelloWorldProject01 (IDO project), fallback FXHelloWorld01 (project; only on visible rejection).

## Objective (T1 scope)

Establish, without mutation, whether a supported core-form or documented wizard route could create exactly one FX_ SQL table with two application columns, one FX_ IDO backed by it, and one FX_ IDO project, without generating a Form. Confirm prerequisites, permissions, controls, name collisions, and the object-prefix and Multi-Site options.

## Outcome

1. **Name-collision check: not verified.** No target name could be confirmed absent through a supported visible inventory (see Preflight, Names). Per the brief this is a stop condition for T2.
2. **Table creation route: not established.** The SQL Tables form, as observed, exposes a Table Name combo of existing tables and an "Update Current Table" button, with no visible "new table" action. The IDO Wizard requires its base table to already exist in the IDO project. The only documented table-creating path seen is the New Data Maintenance wizard (see Route assessment).
3. **Mutation was not attempted.** No save, new record, wizard finish, check-in, check-out, column edit, constraint edit, or Form action was performed.
4. **Brief deviation:** a misdirected click (action 8). No visible effect was found. Two grid cell edits (actions 13–14) were opened by mis-targeted or ambiguous clicks and cancelled with Escape; no text was committed.

## Sources read

- `AGENTS.md`: scope extension (FX_ only, tenant-wide objects recorded for cleanup), evidence and recovery rules.
- `docs/mongoose/transcripts/hello-world-pt1.md` and `docs/mongoose/transcripts/raw/raw-hello-world-pt1.txt`. The raw transcript was checked line by line for the spellings in the tutorial's wizard steps (`customer`, `cust`, `s id` / `s name` / `s address`, `hello world`). The raw text renders IDO as "ideo"/"ideal" and Filter-in-Place as "filter and place". The tutorial's demo values (customer, Hello World, cust, ID 50, Name 100, Address 150) are not to be used. The tutorial's Site Default scope, Super User change, Hello World project, and unload-metadata steps are not authorized.
- `docs/mongoose/guides/ido-development.md` ("Adding an IDO"): documented IDO Wizard fields and behavior. Status: unverified (Infor documentation, not confirmed here).
- `docs/mongoose/guides/idos.md`: IDO elements; existing IDOs must be checked out before editing.
- `docs/mongoose/guides/deployment.md`: meaning of Access As and object prefix (not a creation procedure).
- `docs/mongoose/guides/form-control.md`: check-out/check-in semantics.
- `docs/mongoose/guides/web-designer.md`: the toolbar launches "wizards for SQL tables, IDOs, and forms".
- `environments/current-environment.md` and `experiments/EXP-001`/`EXP-002`: prior observations of the Data Maintenance wizard fields and the Select Form behavior. Not re-observed in this run.
- `recipes/`: only form and component recipes exist. No recipe covers SQL table or IDO creation.
- No EXP-038 record or `evidence/EXP-038/` folder existed in the repository before this run, even though the commit history lists an approved brief. This record was created for T1 (the brief asks for the initial record).

## Tutorial terms and documented steps

| Term (tutorial) | Mongoose surface | Status in this run |
|---|---|---|
| IDO Projects | Form `IdoProjects` (Select Form caption "IDO Projects") | Opened read-only. Fields: Project Name, Description, Access As. Buttons: "New IDO…", "IDOs" (both disabled with no project selected). |
| IDO / IDO Collection | Form `IdoCollections` (caption "IDOs") | Present in Select Form list. Not opened. |
| IDO Wizard | Form `IdoWizard` (caption "IDO Wizard"); reached from "New IDO…" | Present in Select Form list. Not opened. Documented: Project Name required; Primary Base Table required and must already exist in the IDO project; IDO Name unique; Access As read-only; Table Alias required; page 2 binds properties; Finish creates the IDO and, under source control, checks it out. |
| SQL Tables | Form `SqlTables` (caption "Sql Tables") | Opened read-only (after a warning). See Observations. |
| SQL Columns | Form `SqlColumns` (caption "Sql Columns") | Present in Select Form list. Not opened. |
| New Data Maintenance wizard | Web Client Designer button → Identify Your Editing Scope → Runtime Builder Selection (Category FormBuilder, Runtime Builder DataMaintenance) → Data Maintenance Wizard | Not opened in this run. Fields recorded earlier (current-environment.md): IDO Name, IDO Project Name (default value **HelloWorld**), Table Alias, Form Type, Form Layout, Device Type, Multi-Site Options (Site Split, Table Name, View Name), field grid, Get Database Schema, Back/Next/Finish/Cancel. Tutorial: Finish creates table and IDO, then offers "Create Form?". |
| Multi-Site | SQL Tables attribute checkbox and grid column | Present. Observed unchecked. Must stay cleared. |
| Access As / object prefix | IDO Projects "Access As" field; SQL Tables Schema combo | No prefix visible or pre-filled in blank states. Access As on new records not observable without creation. Unresolved. |
| Check-in | IDOs / IDO Projects form (Check In action) | Not observed. Documented only. |
| System columns and triggers (e.g., CreateDate, CreatedBy) | SQL Tables → Columns | Not inspected. Unverified. |

## Preflight observations (read-only)

- **Portal and Web Client.** The Infor OS Portal footer reads 2026.10.01. `environments/current-environment.md` records 2026.09.00 for the shell and 2026.09.08 for the Mongoose app. Version drift is observed but its effect is unknown. The Mongoose tab was selected; the Web Client iframe was rendered; no sign-in or configuration prompt appeared; no reauthentication was performed.
- **Signed-in user and configuration.** The Web Client header shows the signed-in Mongoose user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, matching `environments/current-environment.md`. Credentials were not read or printed.
- **Editing scope.** Not visible in this run. The Designer was deliberately not opened (it launches the scope flow). Last recorded: User scope for the signed-in user (EXP-001/EXP-002). **Unverified this run.**
- **Permissions.** Site Developer was recorded in EXP-001 (Designer About dialog). Not re-verified in T1. The SQL Tables and IDO Projects forms opened, which shows read access; it does not prove create rights.
- **Portal notification.** A portal banner (DistributionIFSContactUs group) covered the Web Client menu bar. It was dismissed with its own close control. It is not a Mongoose change.
- **Names (collision check).** Not verified for any target.
  - *SQL Tables.* The Table Name combo list (existing application tables) was opened and partly scanned, but the scan was not exhaustive and the list ordering was inconsistent across scroll positions. FX_ entries were not found in the positions scanned, which does not prove absence. An attempt to use the grid's blank row as a Filter-in-Place criteria row was ambiguous (the cell entered an edit state); no text was entered and the edit was cancelled.
  - *IDO Projects.* The criteria "FX" was entered in Project Name and run with F4 and then the toolbar Filter in Place button. No result rows appeared beneath the criteria row. This cannot distinguish "no matching projects" from "query did not run." No control query (for example, a known existing project) was run.
  - *IDOs.* Not inventoried.
  - *Form menu recent list.* Shows only earlier FX_ test forms (FX_SingleButtonLab01 and others); it is not an inventory.
- **IDO Projects naming rule.** Not observable without a saved or attempted save. Not tested. The fallback FXHelloWorld01 was not used.
- **Object prefix.** No prefix enforced or pre-filled in observed controls (Access As and Schema empty in blank state). Not fully observed (wizard not opened).
- **Multi-Site.** Present and cleared on SQL Tables.
- **IDO check-in behavior.** Not determinable in T1.

## Browser action log (T1, in order)

1. Tab list and fresh snapshot: one Mongoose tab, selected; Web Client iframe rendered.
2. Screenshot `00-preflight-webclient-start.png`.
3. Dismissed the portal notification banner via its close control.
4. Opened the Form menu (screenshot `01`).
5. Opened Select Form via the toolbar Open control (`mgtoolbarbutton-1100`) (screenshot `02`).
6. Scrolled the Select Form list. The first wheel event went to the wrong pointer position (no scroll; that capture was overwritten by the next one, see the index). After moving the pointer over the grid, scrolling worked; captures `03` (D/E captions) and `04` (Search…Session captions) were both saved under names later reused.
7. Double-clicked "Sql Tables" (`SqlTables`). The form opened behind a Mongoose warning ("Please be very careful using these forms…") (screenshot `05`).
8. **Deviation.** I issued a click with a guessed ref (`f1e1`, labelled "placeholder"). It resolved to `#ext-element-2` inside the Web Client iframe. No visible change followed; the warning remained (screenshot `06`). This was my error, not a recovery step. The effect of the click on that element could not be identified.
9. Took a fresh find for the warning's OK control and clicked OK (screenshot `07`: form visible, grid row 1 blank).
10. Opened the Table Name combo list (screenshots `08`, `09-scroll-1`, `09-scroll-2`, `10`). Nothing was selected.
11. A click on the form's blank area timed out ("subtree intercepts pointer events" by the open combo list). No click reached the form.
12. A coordinate click at (1600, 700) did not close the list. Escape closed it (screenshot `11`). Table Name remained blank.
13. A click on row 1 landed on the Schema cell and opened its cell editor (screenshot `12`). Escape cancelled it (screenshot `13`).
14. A click on the Table Name cell opened it in edit state (`mg-underEdit`, screenshot `14`). A text entry attempt failed (the cell is not an input; no text entered). Escape cancelled the edit (screenshot `15`).
15. Opened IDO Projects from Select Form (scroll positions `16`, `17`; double-clicked IdoProjects; screenshot `18`). The SQL Tables tab was minimized to the left.
16. Typed "FX" into the Project Name criteria textbox and pressed F4 (screenshot `19`): "FX" shown in row 1 and the detail field; no result rows.
17. Clicked the toolbar Filter in Place control (`f1e30`, the one corrected attempt) (screenshot `20`): no visible change in results. Afterwards a find reported Save, New, and Delete disabled.

No save, new, delete, check-in, check-out, Columns…, Update Current Table, New Constraint…, New IDO…, wizard Finish, Create Form, FormSync, cache unload, Designer, or preference change was performed.

## Created objects

**None.** No SQL table, IDO, IDO project, Form, column, constraint, procedure, or data record was created. Nothing was checked in, checked out, or deleted. The evidence index (`evidence/EXP-038/t1-evidence-index.md`) lists the same.

## Route assessment (proposal; not authorized)

- **Core-form route.** Preferred by the brief. Partially viable: the IDO Projects form can host a new project (its "New IDO…" button is the IDO Wizard entry). Not viable as observed for the SQL table: the SQL Tables form shows no visible action to create a new table. Its Table Name combo lists existing tables, and "Update Current Table" would modify a selected table. Creating a table this way is unverified and must not be attempted without an authorized test.
- **IDO Wizard.** Requires the base table to exist in the IDO project first. Cannot create the table.
- **New Data Maintenance wizard.** The only documented route observed that creates table and IDO together. Concerns before any authorization: (a) its IDO Project default is `HelloWorld`, which is non-FX_ and must be replaced by FX_HelloWorldProject01 (which must exist first); (b) Form Type, Form Layout, and Device Type are form-generation settings; (c) Finish is followed by a "Create Form?" prompt that must be declined, and whether the commit scope is fully determinable before Finish is unverified; (d) Multi-Site Options must stay cleared; (e) "Get Database Schema" should not be used.
- **Recommendation.** Do not authorize T2 yet. Next steps, in order: (1) finish the name inventory with a control query to prove Filter-in-Place (or the Table Name list) executes; (2) inspect the New Data Maintenance wizard's first page without Finish (requires the Designer scope flow, which the operator should approve since it touches session scope); (3) decide whether the wizard route is acceptable under the brief's "scope known before final commit" rule.

## Knowledge state

| Finding | State |
|---|---|
| Sql Tables and IDO Projects forms open read-only in the Web Client; Sql Tables shows a warning on open | observed |
| IDO Projects shows Project Name, Description, Access As; "New IDO…" and "IDOs" disabled with no project selected | observed |
| Sql Tables shows Multi-Site checkbox and column; Table Name combo lists existing app tables; no visible "new table" action | observed |
| Select Form lists IdoProjects, IdoCollections, IdoWizard, SqlTables, SqlColumns | observed |
| Documented IDO Wizard rules (base table must exist in project; checkout under source control) | candidate_procedure (documentation only, unverified here) |
| New Data Maintenance wizard creates table + IDO and offers a Form | candidate_procedure (tutorial; field list observed previously) |
| Target name absence (FX_HelloWorldData01, FX_HelloWorldIDO01, FX_HelloWorldProject01, FXHelloWorld01) | unresolved |
| Table creation control on SQL Tables | unresolved |
| Object prefix / Access As for new objects | unresolved |
| System columns and triggers generated on table creation | unresolved |
| Editing scope and Site Developer role in this session | unresolved (last recorded in EXP-001/EXP-002) |
| Whether IDO Projects Filter in Place executes and shows results | unresolved |
| IDO Wizard checkout state after Finish | unresolved (documented only) |

## Evidence

- `evidence/EXP-038/` screenshots `00` through `20` (22 PNG files; `09` has two captures). See `evidence/EXP-038/t1-evidence-index.md` for what each shows and does not prove.
- `evidence/EXP-038/t1-evidence-index.md`: screenshot index and object inventory (none created).
- Browser snapshot logs: `evidence/playwright/page-2026-10-10T02-*.yml` (from this run).

## Open questions and blockers

1. **Blocker — name-collision inventory unverified.** Needs a control-verified inventory (see Route assessment, step 1). Stop condition for any mutation.
2. **Blocker — table creation route unresolved.** The SQL Tables form does not visibly create a table. The only candidate is the New Data Maintenance wizard, whose scope-before-commit rule is not yet satisfied.
3. Object prefix / Access As for new objects: not observed. Needs the wizard's first page or a new record (a mutation-class step for T2).
4. Naming rule on IDO Projects: not tested (needs an attempted entry, which T1 excluded).
5. Editing scope and Site Developer re-check: needs the Designer scope flow or an approved equivalent.
6. Procedural deviation: Action 8 (misdirected click). No visible effect found; the element `#ext-element-2` was not identified.
7. Version drift (portal 2026.10.01 vs recorded 2026.09.00) should be reconciled in `environments/current-environment.md` by the operator; not edited here (outside the brief's write scope).
8. The IDO Projects form remains open on criteria "FX" (not saved); the Sql Tables form remains open in a minimized tab. Both show Save disabled (IDO Projects checked; Sql Tables last seen grey). The operator may close them.
