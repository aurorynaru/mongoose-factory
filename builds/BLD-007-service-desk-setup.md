# BLD-007 — Service desk phase 1: setup tables and their Forms

Status: done with deviations (see Status and Deviations at the end)
Date: 2026-10-30
Account (checked at start): the operator's own account (Web Client header shows the [operator] account, not the read-only Mock account), 2026-10-30 06:00 UTC | Designer scope: User (status bar `ScopeType: User`, operator), checked before each Designer mutation
Evidence: full   Guide: none
Final scope for Forms: User   Group/Site save approved in the request: n/a
Build prefix: FX_   Existing tenant objects already starting with it (not factory-owned): n/a (FX_ is the default prefix; each new name gets an absence check)

Request: `requests/service-desk/phase-1-setup.md` (phase 1 of 4; design in `requests/service-desk/README.md`).
Operator go-ahead: "you can build it" (chat, 2026-10-30).

## Goal
The four setup tables of the service desk app (agents, projects, statuses, priorities), each with a Classic
maintenance Form, filled with fake test rows. Later phases add tickets, the web app and the dashboard.

Done = the request's section 7:
- the four Forms open from the Web Client and show the test rows;
- add / delete persists after close/reopen;
- Lead on FX_Projects is a dropdown of agents by name;
- Role and Category accept only their listed values;
- Sql Tables › Columns shows the types, lengths and keys.

## Objects
| Object | Type | New / factory-owned / other | Scope | Change |
|---|---|---|---|---|
| `FX_ServiceDeskProject` | IDO project | new (FX_) | tenant-wide | create |
| `FX_Agents` | SQL table + IDO | new (FX_) | tenant-wide | create (AgentID key, DisplayName, Team, Role, Active) |
| `FX_Projects` | SQL table + IDO | new (FX_) | tenant-wide | create (ProjectKey key, ProjectName, Description, LeadAgent, NextTicketNo, Active) |
| `FX_Statuses` | SQL table + IDO | new (FX_) | tenant-wide | create (StatusCode key, StatusName, Category, SortOrder, IsClosed) |
| `FX_Priorities` | SQL table + IDO | new (FX_) | tenant-wide | create (PriorityCode key, PriorityName, SortOrder, ResponseHours, ResolveHours) |
| `FX_AgentID` | property class | new (FX_) | tenant-wide | create; domain FX_Agents.AgentID, list DisplayName (LeadAgent dropdown) |
| `FX_Agents`, `FX_Projects`, `FX_Statuses`, `FX_Priorities` | Form (Classic Multi-View) | new (FX_) | User | create |

Existing global objects only used, never changed: built-in property classes or data types offered by the wizard
(for example a yes/no class). Each one is named in the build log when used.

## Data source
The four new IDOs. Test rows from the request (fake only): 4 agents, 2 projects (NextTicketNo SUP 6, FAC 4),
5 statuses, 4 priorities.

## Approvals required (fill before building)
| Object the factory doesn't own, or tenant-wide operation | Why | Rollback | Operator approval (quote + date) |
|---|---|---|---|
| none | All objects are new FX_ objects. No metadata unload, FormSync, deployment or Group/Site save is planned. If the Designer can't see a new property without "Unload All Global Form Objects", the build stops and asks. | — | — |

## Plan (each step ends with a Save and a readback)
1. Account and scope check; absence gate for every name above (IDOs, Sql Tables, Forms, property class, project).
2. Create IDO project `FX_ServiceDeskProject` (IdoProjects form).
3. Maintenance wizard (NewData / Maintenance, Create Form: No), in order: `FX_Agents`, `FX_Statuses`,
   `FX_Priorities`. Check in each IDO; read back Sql Tables › Columns.
4. Property class `FX_AgentID` with domain `FX_Agents` / `AgentID` / `DisplayName`.
5. Maintenance wizard for `FX_Projects`, with LeadAgent on class `FX_AgentID`. Check in; read back.
6. Classic Multi-View Form per IDO (Save Template unchecked), captions as in the request; NextTicketNo read-only.
7. Fixed lists: Role (Agent, Lead, Admin) and Category (To do, In progress, Done).
8. Test rows through each Form: Save, close/reopen, Refresh, read back.
9. Acceptance checks; complete this record.

Steps relying on **unverified** knowledge (probe first):
- Fixed value lists without a lookup table (step 7): no playbook route yet. Probe on one Form, Save, reopen,
  test at runtime; if it can't be done safely, report and propose a small lookup table instead.
- "Active agents only" in the Lead dropdown: a property-class domain lists every row; filtering is not covered.
  Probe; if not possible, record as a deviation.
- Yes/no columns in the wizard (which data type or class it offers): read what the grid offers, record it.

## Acceptance checks
- AC-1: Sql Tables › Columns for each table shows the columns, types, lengths and key from the request.
- AC-2: each Form opens from the Web Client (Select Form) and shows its test rows after Refresh.
- AC-3: a row added in each Form survives Save + close/reopen + Refresh; deleting it survives the same.
- AC-4: Lead on FX_Projects is a dropdown listing the agents with their names; a value outside it is refused at Save.
- AC-5: Role and Category refuse values outside their lists.

## Rollback / cleanup
- Delete the four Forms (User scope), the property class, the four IDOs, their SQL tables and the IDO project.
  All are new FX_ objects listed above; nothing existing is changed.

## Build log
- 2026-10-30 05:43 UTC: Playwright opened the portal and was redirected to Infor CloudIdentities sign-in. The agent
  does not type passwords into the live tenant's sign-in page (its own safety rule overrides the placeholder route
  in AGENTS.md), so the operator was asked to sign in manually in the Playwright browser window. No credentials
  were typed and no screenshot of the sign-in form was taken. Nothing in the tenant has been touched yet.
- 2026-10-30 06:00 UTC: the operator signed in. Portal › navigation menu › Mongoose. **Account gate passed:** the Web
  Client header shows the operator's own ([operator]) account; the read-only Mock account is not signed in.
  Evidence `evidence/BLD-007/01-account-webclient.png`. A portal notification banner covered the Web Client menu bar;
  closed with its own Close button (UI only).
- 2026-10-30 06:01–06:04 UTC: **absence gate, read-only** (no Save, no record touched). One `FX_*` prefix query per admin
  Form doubles as the positive control (existing FX_ objects are listed):
  - IDOs (`IdoCollections`), IDO Name `FX_*` → 7 IDOs: FX_ApiItems, FX_HelloWorld01, FX_InventoryItems, FX_Items,
    FX_LoginUsers, FX_Orders, FX_UMs. None of FX_Agents / FX_Projects / FX_Statuses / FX_Priorities.
    `02-ido-criterion.png`, `03-ido-fx-result.png`.
  - Sql Tables, grid criteria row `FX_*` (never the Attributes Table Name field) → the same 7 tables, none of the four.
    `04-sqltables-criterion.png`, `06-sqltables-after-f4.png` (`05-…` was taken before the result settled: it still
    shows the criterion).
  - IDO Projects, Project Name `FX_*` → 1 project, FX_HelloWorldProject01. FX_ServiceDeskProject is free.
    `08-…` (unsettled), `09-idoprojects-fx-settled.png`.
  - Property Classes, Class Name `FX_*` → 8 classes (FX_Cost, FX_CustomerID, FX_Item, FX_ItemBase, FX_OrderNumBase,
    FX_Picture, FX_UM, FX_UMBase; corrected 06:20 from the screenshot, the first entry listed two names wrongly).
    FX_AgentID is free. `10-…` (unsettled), `11-propclasses-fx-settled.png`.
  - Forms: Select Form filter `FX_` lists 46 FX_ Forms; none is FX_Agents / FX_Projects / FX_Statuses / FX_Priorities
    (or FX_ServiceDesk). List saved as `evidence/playwright/bld007-forms-fx.md`.
  - Observation: in Sql Tables, IDO Projects and Property Classes, F4 ran the query but the result took 5–10 s to
    replace the criterion row; a screenshot right after F4 still shows "Filter in Place". Wait for the status bar
    to change before reading the result.
- 2026-10-30 06:05 UTC: **created IDO project `FX_ServiceDeskProject`** (IDO Projects › New; Description "Factory
  service desk app (BLD-007)"; Access As pre-filled G6R) → Save. Readback: ★ gone, Project Name read-only, Save
  disabled; toolbar Refresh re-reads the row from the server (IDO Projects 2 rows). `12-project-before-save.png`,
  `13-project-after-save.png`.
- 2026-10-30 06:06 UTC: Web Client Designer split button → Designer tab; "Identify Your Editing Scope" → Scope **User**
  → OK. Status bar: `ScopeType: User / ScopeName: [operator]` (`14-designer-user-scope.png`). The Designer's
  background Form is the vendor `IdoProjects` (Vendor Default version); it is never saved. New → Category NewData,
  Wizard Maintenance (both picked from the dropdowns) → OK (`15-wizard-selection.png`).
- 2026-10-30 06:07–06:12 UTC: **created table + IDO `FX_Agents`** (Data Maintenance wizard). IDO Project changed
  from the default `amoveMock` to `FX_ServiceDeskProject`; alias `fxagt`; MultiView / GridLeft / Default; Site Split
  off. Rows (grid readback before Next, `evidence/playwright/bld007-agents-page1.yml`):
  AgentID String nvarchar 30 PK+Req · DisplayName String nvarchar 60 Req · Team String nvarchar 40 ·
  Role String nvarchar 20 Req default `Agent` · Active on property class **ListYesNo** Req default `1`.
  **Yes/no probe result:** the wizard's Data Type list has no Boolean; choosing the built-in class `ListYesNo`
  (existing global object, only used) fills Data Type **Byte** and SQL Data Type **ListYesNoType**.
  Page 2 (Create Scripts off) → Finish once → "Create Form" → **No** → "Table and IDO created."
  `16-agents-wizard-page1.png` (header + Required/Default columns; status bar User scope), `17-agents-wizard-page2.png`,
  `18-agents-finish-result.png` (Create Form question), `19-agents-after-no.png` ("Table and IDO created.").
  Not yet proven: check-in and the Sql Tables readback (below).
- 2026-10-30 06:13–06:16 UTC: **created table + IDO `FX_Statuses`** (same wizard route; Category NewData / Wizard
  Maintenance picked from the dropdowns). Project `FX_ServiceDeskProject` (picked; default was `amoveMock` again),
  alias `fxsts`. Grid readback before Next (`evidence/playwright/bld007-statuses-page1.yml`):
  StatusCode String nvarchar 20 PK+Req · StatusName String nvarchar 40 Req · Category String nvarchar 20 Req default
  `To do` · SortOrder **Long Integer** (SQL `int`) Req default `0` · IsClosed ListYesNo (Byte / ListYesNoType) Req
  default `0`. The request's "number" maps to Long Integer (whole numbers). Finish once → Create Form **No** →
  "Table and IDO created." `20-statuses-wizard-page1.png`, `21-statuses-created.png`.
  Observation: this time the grid opened with one empty row 1 and Add Row added row 2; row 1 was filled first.
- 2026-10-30 06:17–06:19 UTC: **created table + IDO `FX_Priorities`** (same route; project `FX_ServiceDeskProject`
  picked, alias `fxpri`). Grid readback (`evidence/playwright/bld007-priorities-page1.yml`): PriorityCode String
  nvarchar 10 PK+Req · PriorityName String nvarchar 30 Req · SortOrder Long Integer int Req default `0` ·
  ResponseHours Long Integer int Req default `8` · ResolveHours Long Integer int Req default `72`. Finish once →
  Create Form **No** → "Table and IDO created." `22-priorities-wizard-page1.png`, `23-priorities-created.png`.
- 2026-10-30 06:20–06:21 UTC: **created property class `FX_AgentID`** (Web Client › Property Classes › New). Class Name
  `FX_AgentID`; Description "Service desk agent ID (BLD-007), dropdown of FX_Agents"; Data Type String (picked);
  Length 30; Column Data Type `nvarchar` (the list shows only its first 200 entries; typed `nvar` + F2 → one match,
  clicked); Domain IDO `FX_Agents` (listed although the IDO is still checked out), Domain Property `AgentID`, Domain
  List Properties `DisplayName`; Label String ID left blank (not required in add mode; captions are set on the
  Forms). One Save → Class Name read-only, Save disabled, Revision 1, 10/30/2026, checked out to the operator,
  9 FX_ classes. Toolbar Refresh re-reads all values from the server (`evidence/playwright/bld007-pc-after-refresh.yml`).
  The Domain Property list showed the IDO's properties: Active, AgentID, DisplayName, Role, Team + system columns.
  Precedent: `FX_CustomerID` (Hello World) is the same shape (String 30 nvarchar, domain FX_HelloWorld01).
  `24-agentid-class-before-save.png`, `25-agentid-class-after-save.png`.
- 2026-10-30 06:22–06:25 UTC: **created table + IDO `FX_Projects`** (same route; project `FX_ServiceDeskProject`
  picked, alias `fxprj`). Grid readback (`evidence/playwright/bld007-projects-page1.yml`): ProjectKey String nvarchar 10
  PK+Req · ProjectName String nvarchar 60 Req · Description String nvarchar 500 · LeadAgent on class **FX_AgentID**
  (filled String nvarchar 30; the class list showed FX_AgentID while it is still checked out, no metadata unload) ·
  NextTicketNo Long Integer int Req default `1` · Active ListYesNo (Byte / ListYesNoType) Req default `1`.
  Finish once → Create Form **No** → "Table and IDO created." `26-projects-wizard-page1.png`, `27-projects-created.png`.
- 2026-10-30 06:25–06:27 UTC: **checked in the four IDOs** (Web Client › IDOs, `FX_*` query → 11 IDOs, all four in project
  FX_ServiceDeskProject at Revision 1, locked by the operator; `28-idos-fx-after-create.png`). Per IDO: click its name
  cell, confirm IDO Name and Revision 1, Check In. The first check-in of the session (FX_Agents) showed the notice
  "Source control integration is currently disabled…" → OK (`29-agents-checkin-notice.png`); the others showed none.
  Readback each time: Revision Num **2**, Locked By empty, the button turns into Check Out. Order: FX_Agents,
  FX_Priorities (`30-priorities-checked-in.png`), FX_Projects, FX_Statuses. `31-idos-all-checked-in.png`: the grid
  checkbox is clear on all four (still set on the older FX_ApiItems / FX_HelloWorld01 / FX_Items / FX_Orders, not
  touched). The class `FX_AgentID` stays checked out (Revision 1); it works in that state.
- 2026-10-30 06:27–06:32 UTC: **AC-1 readback, Sql Tables › Columns** (read-only). Sql Tables grid criteria `FX_*` →
  F4 → 11 tables including the four (`32-sqltables-fx-query.png`; FX_Agents has PK_FX_Agents on AgentID and
  IX_FX_Agents_RowPointer). Columns… per table, each user column clicked and its detail read:
  | Table | Column: SQL type, length, nullable, key |
  |---|---|
  | FX_Agents | AgentID nvarchar 30 not null PK (key seq 1) · DisplayName nvarchar 60 not null · Team nvarchar 40 null · Role nvarchar 20 not null · Active ListYesNoType not null |
  | FX_Priorities | PriorityCode nvarchar 10 not null PK · PriorityName nvarchar 30 not null · SortOrder int not null · ResponseHours int not null · ResolveHours int not null |
  | FX_Projects | ProjectKey nvarchar 10 not null PK · ProjectName nvarchar 60 not null · Description nvarchar 500 null · LeadAgent nvarchar 30 null · NextTicketNo int not null · Active ListYesNoType (system type tinyint) not null |
  | FX_Statuses | StatusCode nvarchar 20 not null PK · StatusName nvarchar 40 not null · Category nvarchar 20 not null · SortOrder int not null · IsClosed ListYesNoType (tinyint) not null |

  Each table also has the system columns CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag,
  InWorkflow (none added by the factory). Screenshots: `33-columns-agents.png` (AgentID), `35-columns-priorities.png`
  (ResolveHours int), `36-columns-projects.png` (Active ListYesNoType / tinyint), `37-columns-statuses.png` (IsClosed).
  **AC-1 passes** (names, types, lengths, keys and required match the request).
  **Defaults:** every column's SQL Default Value is empty (`34-columns-agents-role-no-default.png`: Role). The defaults
  are on the **IDO properties** instead: the IDO Properties form shows Role Default Value `Agent`
  (`40-ido-property-role-default.png`) and Category `To do`. (The IDOs › Properties grid has no Default Value column;
  `38-agents-ido-properties.png`.) Corrected 06:39: an earlier draft of this entry wrongly said there were no defaults.
  Observation: the Data Maintenance wizard's Default Value column becomes the IDO property's Default Value, not a SQL
  default.
- 2026-10-30 06:33–06:39 UTC: **fixed lists for Role and Category, probe (unverified route, now observed for the
  setup):** on the factory-owned IDOs, not on the Forms, so the IDO Runtime Service enforces them at Save (docs:
  `docs/mongoose/guides/ido-development.md` § validators, § inline list).
  Per IDO: IDOs › select › **Check Out** (Locked By = operator) → Properties tab › property row → **Properties** button
  → IDO Properties form on that property:
  1. **Inline List** ellipsis → Edit Inline List: one column; row 1 typed into the cell editor, then Add Row for each
     next value (the grid opens with one empty row) → Column For Value `1`, Display Columns `1` → OK. Display Columns
     is labelled with a raw string ID in the accessibility tree; Column For Value has no accessible node and was
     reached with Shift+Tab from Display Columns (`42-…`, `46-…` show both fields = 1 before OK).
  2. **Validators** ellipsis → Edit Validators → Add… → Select Validator Type: **In Inline List** (preselected) → Next
     → "Set Properties From Inline List" (left empty) → OK → list shows `In Inline List | ININLINELIST()` → OK.
  3. Toolbar **Save** → Save greys out; Inline List and Validators get the override star.
  4. IDOs › **Check In**.
  Results:
  - FX_Agents.Role: Inline List `ENTRIES(Agent,Lead,Admin…` (field clipped), Validators `ININLINELIST()`, Default
    `Agent`, Required. FX_Agents checked in at **Revision 3**. `39-…` (before), `41-inline-list-dialog.png`,
    `42-inline-list-role-before-ok.png`, `43-validators-role-list.png`, `44-role-before-save.png`,
    `45-role-after-save.png`.
  - FX_Statuses.Category: Inline List `ENTRIES(To do,In progress…` (clipped), Validators `ININLINELIST()`, Default
    `To do`. Checked in at **Revision 3**. `46-inline-list-category-before-ok.png`, `47-category-after-save.png`.
  Still to prove at runtime (AC-5): the Form shows the list and a value outside it is refused at Save.
  Plan change: NextTicketNo is made read-only on the FX_Projects **Form** (step 6), not on the IDO, so phase 2's
  numbering can still update it.
- 2026-10-30 ~06:40 UTC: a first FX_Agents Multi-View wizard run reached page 3 (`48-…`, `49-…`, `50-…`) but was
  never finished: that session's Playwright browser was closed by the operator (process stopped). **Nothing was
  created by it:** at 07:21 Select Form filter `FX_Agents` returned no rows.
- 2026-10-30 07:21 UTC: **resumed in a new session.** Portal opened with the persisted Playwright profile (no sign-in
  needed). **Account gate passed:** Web Client header shows the operator's own account (`51-resume-account-webclient.png`).
  Note: the Web Client toolbar button next to Designer is **Runtime Builder…** (opened "Identify Your Editing Scope",
  then a "Runtime Builder Selection" dialog; both cancelled, nothing chosen). The Designer button (`designerButton`)
  is disabled until a Form is open; opened vendor `IdoProjects` read-only as the background Form (never saved), then
  Designer → new tab → Scope **User** → OK. Status bar `ScopeType: User / ScopeName: <operator>`.
- 2026-10-30 07:23–07:25 UTC: **created Form `FX_Agents`** (Designer New → Category Classic → Wizard Multi-View, both
  picked by click). Page 1: Name `FX_Agents` (one fill), Data Source `FX_Agents` (picked from the IDO list), GridLeft,
  Default (`52-agents-mv-page1.png`). Page 2: the five business properties were already in the Primary Collection.
  Page 3: reordered AgentID (top), Active (bottom), Team (up 1) → AgentID, DisplayName, Team, Role, Active; captions
  typed as literals `User name`, `Name` (blur-commit) (`53-agents-mv-page3-order-captions.png`). Final page: Save
  Template unchecked by its label (`54-agents-mv-final-page.png`). Finish once → "Process Completed Successfully"
  (`55-agents-form-created.png`) → Form opened, Version "User version for user <operator>" (`56-agents-form-in-designer.png`).
  **Probe result (literal captions in the wizard, now observed):** a literal typed in the page-3 Caption column
  becomes the label and grid-column caption. A **blank** Caption stays blank (these IDO properties have no label
  string), so Team/Role/Active came out with empty labels. Generated components: FormCollectionGrid with
  AgentIDGridCol…ActiveGridCol; AgentIDStatic/Edit, DisplayNameStatic/Edit, TeamStatic/Edit, RoleStatic +
  **RoleCombobox** (from the inline list), ActiveStatic/Edit (shows `Yes`). **For the next Forms, type every caption
  on page 3.**
- 2026-10-30 07:25–07:28 UTC: **captions fixed in the Designer**, one Caption commit + Save each (toast "Form [FX_Agents]
  and global object(s) were saved.", Save disabled after): TeamStatic `Team`, RoleStatic `Role`, ActiveStatic
  `Active`, TeamGridCol `Team`, RoleGridCol `Role`, ActiveGridCol `Active` (Details › Components › row → Properties
  Caption value, double-click, fill, commit by clicking the Name label). `57-agents-captions-after-save.png`.
  Closed the Form tab (no prompt) → Form menu recent `FX_Agents` → reopened: labels User name, Name, Team, Role,
  Active; Save disabled; User version (`58-agents-reopened-designer.png`). Grid headers not yet seen at runtime.
- 2026-10-30 07:29–07:34 UTC: **FX_Agents runtime (Web Client).** Select Form did not list FX_Agents in the Web Client
  session loaded before the Form existed (empty result for `FX_Agents`); after a full reload of the Mongoose portal tab
  (browser "leave page" prompt accepted; nothing unsaved) it listed `FX_Agents / FX_Agents` (same as EXP-002).
  Opened: add mode on an empty table; labels User name*, Name*, Team, Role* (dropdown, default Agent), Active* (`Yes`)
  (`59-agents-runtime-empty.png`). The grid pane on the left is very narrow (only the first column's first letters
  show); cosmetic, left as generated.
  - Test rows typed key-by-key, one Save each, each settled with Save disabled and "Object n of n":
    agent.anna / Anna Agent / Service Desk / Agent; agent.ben / Ben Agent / Service Desk / Agent; lead.carla / Carla Lead
    / Service Desk / **Lead** (picked from the dropdown, which lists exactly Agent, Lead, Admin); tech.dev / Dev Tech /
    Facilities / Agent. All Active = Yes. `60-agents-row1-before-save.png`, `61-agents-row1-after-save.png` (key greyed,
    Save disabled).
  - **AC-5 (Role) passes:** row fx.test / FX Test Row with Role typed `Boss` → Save → "Boss is not a valid Role"
    (`62-agents-role-invalid-refused.png`); the row kept its error marker and nothing was saved.
  - **AC-3 (FX_Agents) passes:** Role changed to Agent (dropdown) → Save (5 of 5) → Close Panel → Open → Refresh → 5 rows
    incl. fx.test. Then fx.test → Delete ("Selected records will be permanently deleted upon Save." → OK) → Save (4 rows)
    → Close Panel → Open → Refresh → exactly the 4 agents (`63-agents-after-delete-reopen.png`).
  - **AC-2 (FX_Agents) passes:** the Form opens from the Web Client and shows the 4 test agents after Refresh.
- 2026-10-30 07:35–07:37 UTC: **created Form `FX_Statuses`** (same wizard route; Designer User scope). Page 1 Name
  `FX_Statuses`, Data Source IDO `FX_Statuses` (`64-statuses-mv-page1.png`). Page 3 order StatusCode, StatusName,
  Category, SortOrder, IsClosed with every caption typed in the wizard: Code, Status, Category, Order, Closed
  (`65-statuses-mv-page3-order-captions.png`). Save Template unchecked → Finish → "Process Completed Successfully" → OK.
  - Designer readback (`66-statuses-form-in-designer.png`): labels Code*, Status*, Category* (shows default `To do`),
    Order* (`0`), Closed* (`No`); Form Name FX_Statuses, User version; status bar `ScopeType: User`. Typing the
    captions in the wizard worked, so no Designer caption fixes were needed this time.
  - Components (`67-statuses-components.png`, full list `evidence/playwright/bld007-statuses-components.yml`):
    FormCollectionGrid + StatusCodeGridCol…IsClosedGridCol (tabs 1–5); StatusCodeStatic/Edit, StatusNameStatic/Edit,
    CategoryStatic + **CategoryCombobox** (from the inline list), SortOrderStatic/Edit, IsClosedStatic/Edit.
  - Close (no prompt) → Form menu recent `FX_Statuses` → same labels and values, User scope
    (`68-statuses-reopened-designer.png`).
- 2026-10-30 07:38–07:43 UTC: **FX_Statuses runtime (Web Client).** Full portal-tab reload again needed before Select
  Form listed the new Form ("leave page" accepted; nothing unsaved). Header showed the operator's account. Portal
  notification banner closed with its own Close button.
  - Rows typed key-by-key, Category **picked from the dropdown** (lists exactly To do, In progress, Done), one Save
    each, each settled with Save disabled and "Object n of n": OPEN / Open / To do / 10 / No; INPROG / In progress /
    In progress / 20 / No; WAITING / Waiting for customer / In progress / 30 / No; RESOLVED / Resolved / Done / 40 / No;
    CLOSED / Closed / Done / 50 / **Yes**. `69-statuses-row1-before-save.png`, `70-statuses-row1-after-save.png` (key
    greyed, Save disabled).
  - Probe: the generated IsClosedEdit is a plain Edit showing `No`/`Yes`. Typing `Yes` in it turned the grid's Closed
    checkbox on (`71-statuses-closed-row-before-save.png`), and after Save + reopen CLOSED still shows `Yes`. The grid
    column renders as a checkbox. Observed once.
  - One stale-ref Save click on CLOSED did not run (Save still enabled, "Object 5 of 5" unsaved); fresh ref found,
    one corrected click saved it. Nothing duplicated (`72-statuses-five-rows-saved.png`).
  - **AC-5 (Category) passes:** row FXTEST / FX Test Row with Category typed `Later` → Save → "Later is not a valid
    Category" (`73-statuses-category-invalid-refused.png`); the row kept its error marker and nothing was saved.
  - **AC-3 (FX_Statuses) passes:** Category set to To do (dropdown) → Save (6 of 6) → Close Panel → Open → Refresh →
    6 rows incl. FXTEST. Then FXTEST → Delete (notice → OK) → Save (5 rows) → Close Panel → Open → Refresh → exactly the
    5 statuses, CLOSED with Closed `Yes` (`74-statuses-after-delete-reopen.png`).
  - **AC-2 (FX_Statuses) passes:** the Form opens from the Web Client and shows the 5 test statuses after Refresh.
- 2026-10-30 07:43–07:47 UTC: **created Form `FX_Priorities`** (same wizard route; Designer User scope). In the
  Form Wizard Selection the Category tile's text label did not take a click (the tile background intercepts it);
  clicking the option row itself set Classic, then MultiView, both read back before OK. Page 1 Name `FX_Priorities`,
  Data Source IDO `FX_Priorities` (`75-priorities-mv-page1.png`). Page 2 already held the 5 business properties
  (`76-priorities-mv-page2.png`). Page 3 order PriorityCode (top), ResolveHours (bottom), ResponseHours (down 1) →
  PriorityCode, PriorityName, SortOrder, ResponseHours, ResolveHours; captions Code, Priority, Order, Respond within
  (hours), Resolve within (hours) (`77-priorities-mv-page3-order-captions.png`). Save Template unchecked
  (`78-priorities-mv-final-page.png`) → Finish → "Process Completed Successfully" → OK.
  - Designer readback (`79-priorities-form-in-designer.png`): labels Code*, Priority*, Order* (`0`), Respond within
    (hours)* (`8`), Resolve within (hours)* (`72`); User version; `ScopeType: User`.
  - Close (no prompt) → Form menu recent `FX_Priorities` → unchanged (`80-priorities-reopened-designer.png`).
- 2026-10-30 07:47–07:50 UTC: **FX_Priorities runtime (Web Client).** Portal-tab reload again needed for Select
  Form; header showed the operator's account; banner closed with its own Close button.
  - Rows typed key-by-key, one Save each, each settled with Save disabled and "Object n of n": CRITICAL / Critical /
    10 / 1 / 4; HIGH / High / 20 / 4 / 24; MEDIUM / Medium / 30 / 8 / 72 (Respond and Resolve kept their defaults,
    read back as 8 and 72 before Save); LOW / Low / 40 / 24 / 120. `81-priorities-row1-before-save.png`.
  - **AC-3 (FX_Priorities) passes:** FXTEST / FX Test Row (defaults 0 / 8 / 72) → Save (5 of 5) → Close Panel → Open →
    Refresh → 5 rows incl. FXTEST. Then FXTEST → Delete (notice → OK) → Save (4 rows) → Close Panel → Open → Refresh →
    exactly 4 rows (`82-priorities-after-delete-reopen.png`). Grid readback after the reopen, all columns
    (`evidence/playwright/bld007-priorities-grid-after-reopen.yml`): CRITICAL Critical 10 1 4 · HIGH High 20 4 24 ·
    LOW Low 40 24 120 · MEDIUM Medium 30 8 72.
  - **AC-2 (FX_Priorities) passes.** No dropdowns or validation were requested for this Form (no AC-5 here).
- 2026-10-30 07:51–07:56 UTC: **created Form `FX_Projects`** (same wizard route; Designer User scope). Page 1 Name
  `FX_Projects`, Data Source IDO `FX_Projects`, GridLeft, Default (`83-projects-mv-page1.png`). Page 2 already held the
  6 business properties (`84-projects-mv-page2.png`). Page 3 order Active (bottom), ProjectName (top), ProjectKey (top)
  → ProjectKey, ProjectName, Description, LeadAgent, NextTicketNo, Active; captions Key, Project, Description, Lead,
  Next ticket number, Active (accessibility readback of all six rows; `85-projects-mv-page3-order-captions.png` shows
  rows 1–5). Save Template unchecked (`86-projects-mv-final-page.png`). The first Finish click hit a stale ref and did
  not run (wizard unchanged on a fresh snapshot); one corrected click → "Process Completed Successfully" → OK.
  - Designer readback (`87-projects-form-in-designer.png`): labels Key*, Project*, Description, Lead (dropdown),
    Next ticket number* (`1`), Active* (`Yes`); User version; `ScopeType: User`.
  - Components (`88-projects-components.png`, list `evidence/playwright/bld007-projects-components.yml`):
    FormCollectionGrid + ProjectKeyGridCol…ActiveGridCol; ProjectKey/ProjectName/Description Static+Edit,
    LeadAgentStatic + **LeadAgentCombobox** (from property class FX_AgentID), NextTicketNoStatic/Edit, ActiveStatic/Edit.
  - Close (no prompt) → Form menu recent `FX_Projects` → unchanged (`89-projects-reopened-designer.png`).
- 2026-10-30 07:56–08:00 UTC: **FX_Projects runtime (Web Client).** Portal-tab reload for Select Form; header showed
  the operator's account; banner closed with its own Close button.
  - **Lead dropdown** (`90-projects-lead-dropdown.png`): lists the 4 agents in two columns, user name and display name
    (agent.anna / Anna Agent, agent.ben / Ben Agent, lead.carla / Carla Lead, tech.dev / Dev Tech).
  - Rows, Lead **picked from the dropdown**, one Save each, each settled with Save disabled and "Object n of n":
    SUP / IT Support / Hardware, software and access requests / lead.carla / 6 / Yes; FAC / Facilities / Building and
    office requests / tech.dev / 4 / Yes (`evidence/playwright/bld007-projects-sup-before-save.yml`,
    `…-fac-before-save.yml`). NextTicketNo was typed before the read-only change below.
  - **AC-4 passes:** row FXTEST / FX test project with Lead typed `nobody.x` → Save → "nobody.x is not a valid Lead"
    (`91-projects-lead-invalid-refused.png`); nothing saved.
  - **AC-3 (FX_Projects) passes:** Lead set to agent.anna (dropdown) → Save (3 of 3) → Close Panel → Open → Refresh →
    FAC, FXTEST, SUP (`92-projects-rows-after-reopen.png`; the grid pane shows only Key; values from accessibility:
    FAC tech.dev 4 · FXTEST agent.anna 1 · SUP lead.carla 6). FXTEST → Delete (notice → OK) → Save (1 of 2) → Close
    Panel → Open → Refresh → exactly FAC and SUP (`93-projects-after-delete-reopen.png`; accessibility: FAC Facilities
    "Building and office requests" tech.dev 4 · SUP IT Support "Hardware, software and access requests" lead.carla 6).
    One stale-ref Close Panel click did not run and Open was clicked with the panel still open; the Select Form dialog
    was cancelled, then the close/reopen was done properly.
  - **AC-2 (FX_Projects) passes.**
  - Observation: after a pick, the Lead box shows the **user name** (`lead.carla`), not the display name; the display
    name appears only in the open dropdown. See Deviations.
- 2026-10-30 08:01–08:05 UTC: **NextTicketNo read-only, probe (component property, now observed):** Designer FX_Projects
  → Details › Components › NextTicketNoEdit → Properties search `Read` → Behavior › **Read-Only/Disable**: baseline
  `False` (`95-nextticket-readonly-before.png`; rollback = set False) → dropdown → `True` (picked) → Tab → reads True →
  toolbar Save → toast "Form [FX_Projects] and global object(s) were saved." (`96-nextticket-readonly-after-save.png`).
  Clicking the field on the canvas does not select it (a Designer adorner intercepts the click); the Components row
  does. Close → Form menu recent → NextTicketNoEdit Read-Only/Disable `True`, field greyed on the canvas
  (`97-nextticket-readonly-reopened.png`). Runtime: Close Panel → Open → Refresh (no portal reload needed for a
  changed Form) → Next ticket number greyed like Key, no required star (`101-projects-runtime-nextticket-readonly.png`);
  typing `9` into it left the value `4` and Save disabled. Only the detail Edit was changed; NextTicketNoGridCol was
  not changed (the narrow grid pane shows only Key).
- 2026-10-30 08:03–08:04 UTC: **"Active agents only" probe, not possible on the proven route.** LeadAgentCombobox
  List Source baseline blank (inherited from FX_AgentID; `98-lead-listsource-before.png`). Its Edit List Source
  Specifications dialog offers Type, IDO, Properties, Columns to Display, Method Name, Method Parameters, and **no
  filter field** (`99-lead-listsource-editor.png`). No filter syntax is documented in `docs/` or the recipes, so none was
  typed. **Cancel**, nothing changed; List Source still blank, Save disabled (`100-lead-listsource-cancelled.png`).
  Recorded as a deviation.

## Status
**Done with deviations** (2026-10-30 08:05 UTC). All five acceptance checks pass; two parts of the request are not
met as written (Deviations 1 and 2).

| Check | Result | Evidence |
|---|---|---|
| AC-1 Sql Tables › Columns | pass | log 06:27–06:32, `32-…`–`37-…` |
| AC-2 each Form opens with its test rows | pass (4/4) | `63-…`, `74-…`, `82-…`, `93-…` |
| AC-3 add/delete survives close/reopen | pass (4/4) | same, plus `92-…` |
| AC-4 Lead dropdown of agents with names; outside value refused | pass | `90-…`, `91-…` |
| AC-5 Role and Category refuse outside values | pass | `62-…`, `73-…` |

## Deviations
1. **Lead lists every agent, not only active ones.** The property-class domain lists all FX_Agents rows. The component
   List Source editor has no filter field, and no filter syntax is documented here. All four test agents are active,
   so nothing differs today. Options (each a new request, unverified): an IDO-Method list source that returns only
   active agents, or a validator that refuses inactive agents at Save.
2. **Lead shows the user name after a pick.** The dropdown shows user name + name, but the field keeps the user name
   (`lead.carla`), the stored key. Showing the name next to it needs a joined read-only field (e.g. LeadName from
   FX_Agents, the FX_Orders join route, observed). Not done; ask if wanted.
3. **Narrow grid pane.** On all four Forms the generated grid pane shows only the first column. Cosmetic, left as
   generated.
4. **NextTicketNo is read-only on the Form only** (planned change, logged 06:39): the IDO still accepts updates, so
   phase 2's numbering can change it. Only the detail field is read-only; the grid column was not changed.

## Objects created (all new FX_, factory-owned)
- IDO project `FX_ServiceDeskProject`.
- SQL tables + IDOs `FX_Agents`, `FX_Projects`, `FX_Statuses`, `FX_Priorities`, all checked in.
- Property class `FX_AgentID` (**still checked out to the operator, Revision 1**; it works in that state; check it in
  from Property Classes when convenient).
- Forms (User scope, operator's account) `FX_Agents`, `FX_Statuses`, `FX_Priorities`, `FX_Projects`.
- Test data (fake): 4 agents, 2 projects, 5 statuses, 4 priorities. The temporary `fx.test` / `FXTEST` rows used for
  AC-3/AC-4/AC-5 were deleted and the deletes verified after reopen.

No object the factory doesn't own was changed. No tenant-wide operation (metadata unload, FormSync, deployment,
Group/Site save) was run.

## Knowledge updates proposed (not applied to recipes)
- Classic Multi-View wizard with every caption typed on page 3: observed four times this build (FX_Agents with the
  blank-caption lesson, then three clean runs). Candidate for a recipe or a knowledge-state upgrade.
- Read-only field on a Form: Components row → Behavior › Read-Only/Disable True → Tab → Save; persists after reopen
  and blocks typing at runtime. Observed once.
- Inline List + In Inline List validator on the IDO property for fixed dropdowns: observed twice (Role, Category).
- A changed (not new) Form loads at runtime with Close Panel → Open; only a **new** Form needs the portal-tab reload
  before Select Form lists it.
