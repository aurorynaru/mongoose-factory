# BLD-009 — Service desk phase 2: tickets, comments and the ticket Form

Status: done with deviations (see Status, Deviations and Open cleanup at the end)
Date: 2026-10-30
Account (checked at start): the operator's own account (Web Client header shows the [operator] account, not the read-only Mock account), 2026-10-30 08:19 UTC | Designer scope: User (status bar `ScopeType: User`, `07-designer-user-scope.png`), checked 08:30 UTC before the first Designer mutation
Evidence: full   Guide: none
Final scope for Forms: User   Group/Site save approved in the request: n/a
Build prefix: FX_   Existing tenant objects already starting with it (not factory-owned): n/a (default prefix; each new name gets an absence check)

Request: `requests/service-desk/phase-2-tickets.md` (phase 2 of 4; design in `requests/service-desk/README.md`).
Builds on BLD-007 (phase 1: FX_Agents, FX_Projects, FX_Statuses, FX_Priorities, property class FX_AgentID).
Operator go-ahead to start phase 2: "continue" (chat, 2026-10-30), after the defaults below were stated. Plan approval:
"continue" (chat, 2026-10-30, reply to the plan).

## Goal
The tickets and ticket comments tables and the Classic `FX_Tickets` Form: list, open and work tickets, the selected
ticket's comments under it, Resolve / Reopen buttons and automatic ticket numbers (SUP-6, then NextTicketNo 7).

Done = the request's section 7:
- FX_Tickets opens from the Web Client with the 8 test tickets; every dropdown lists values from the phase 1 tables;
- a new SUP ticket gets TicketID SUP-6 on Save, and FX_Projects then shows Next ticket number 7 for SUP;
- selecting a ticket shows only its comments; an added comment survives close/reopen;
- Resolve / Reopen change Status (and Resolved on) and survive close/reopen;
- saving without Summary, Project or Reporter is refused with a message.

## Defaults carried over from phase 1 (stated to the operator before "continue")
- **"Active only"** (Project, Reporter, Assignee): no filter route exists (BLD-007 deviation 1). Dropdowns list every row;
  recorded as a deviation. All test data is active.
- **"Showing the name"** (Status, Priority, Reporter, Assignee): the dropdown shows code + name; after a pick the field
  keeps the code / user name (BLD-007 deviation 2). No extra name fields unless the operator asks.

## Objects
| Object | Type | New / factory-owned / other | Scope | Change |
|---|---|---|---|---|
| `FX_Tickets` | SQL table + IDO (project FX_ServiceDeskProject) | new (FX_) | tenant-wide | create; 14 columns from the request |
| `FX_TicketComments` | SQL table + IDO (project FX_ServiceDeskProject) | new (FX_) | tenant-wide | create; CommentID int key AUTONUMBER() + 4 columns |
| `FX_ProjectKey` | property class | new (FX_) | tenant-wide | create; domain FX_Projects.ProjectKey, list ProjectName (Project dropdown) |
| `FX_StatusCode` | property class | new (FX_) | tenant-wide | create; domain FX_Statuses.StatusCode, list StatusName |
| `FX_PriorityCode` | property class | new (FX_) | tenant-wide | create; domain FX_Priorities.PriorityCode, list PriorityName |
| `FX_AgentID` | property class | factory-owned (BLD-007) | tenant-wide | reuse for Reporter, Assignee, Author; **check in** (still checked out from BLD-007) |
| `FX_Tickets` subcollection property (proposed name `FX_Comments`) | IDO property | new (FX_) on a new IDO | tenant-wide | link TicketID = TicketID to FX_TicketComments |
| `FX_Tickets` | Form (Classic Multi-View) + comments grid, 2 buttons, event handlers, C# form script | new (FX_) | User | create |
| `FX_Projects` rows SUP / FAC | test data (factory-created, fake) | factory-owned | data | NextTicketNo goes up when the numbering probe saves a ticket |

Existing objects only read, never changed: the phase 1 IDOs and Forms (except the NextTicketNo values above).

## Data source
`FX_Tickets` (primary), `FX_TicketComments` through the subcollection property. Lookups: FX_Projects, FX_Statuses,
FX_Priorities, FX_Agents. Test data (fake): 8 tickets SUP-1..5 and FAC-1..3 (every status and priority used, some
unassigned, two with a past DueDate, RESOLVED/CLOSED with ResolvedOn + Resolution) and 6 comments on SUP-1, SUP-2 and
FAC-1 (two internal).

## Approvals required (fill before building)
| Object the factory doesn't own, or tenant-wide operation | Why | Rollback | Operator approval (quote + date) |
|---|---|---|---|
| none planned | All objects are new FX_ or factory-owned. If the Designer can't see the subcollection property without "Unload All Global Form Objects", the build **stops and asks** (tenant-wide). | — | — |
| Step 10 numbering on Data Change of Project (option A in the 2026-10-30 chat report): a number is taken when a project is picked on a new ticket, so an abandoned ticket leaves a gap | The StdFormSave route can't fill the required key (build log 2026-10-30) | remove the handler and the Data Change wiring; reset NextTicketNo through the IDO | operator chat 2026-10-31: "continue. go with with A. yes run" |
| Form-object unload (Form › Definition; tenant-wide cache) | The runtime loaded 0 handlers for FX_Tickets although the Designer shows them saved | none needed (the cache reloads from the database) | operator chat 2026-10-31: "yes run", answering the 2026-10-30 question "may I run Form › Definition › Unload Global Form Objects?" |

## Plan (each step ends with a Save and a readback)
1. Account + scope check; check in `FX_AgentID`; absence gate for every new name above.
2. Property classes `FX_ProjectKey`, `FX_StatusCode`, `FX_PriorityCode` (IdoPropertyClasses; same route as FX_AgentID).
3. Data Maintenance wizard (Create Form: No), project FX_ServiceDeskProject:
   - `FX_Tickets`: TicketID nvarchar 20 PK; ProjectKey on FX_ProjectKey (Req); TicketType 20 Req default `Incident`;
     Summary 200 Req; Description 2000; Status on FX_StatusCode Req default `OPEN`; Priority on FX_PriorityCode Req
     default `MEDIUM`; Reporter on FX_AgentID Req; Assignee on FX_AgentID; Category 40; Labels 200; DueDate date;
     ResolvedOn date; Resolution 40.
   - `FX_TicketComments`: CommentID int PK default `AUTONUMBER()`; TicketID 20 Req; Author on FX_AgentID Req;
     CommentText 2000 Req; IsInternal yes-no Req default 0.
   - Read back Sql Tables › Columns.
4. Fixed lists on the IDO properties (Inline List + In Inline List validator, observed twice in BLD-007): TicketType
   (Incident, Service request, Problem, Change, Task), Category (Hardware, Software, Access, Network, Facilities,
   Other), Resolution (Fixed, Workaround, Duplicate, Won't do, Cannot reproduce).
5. **Probe:** subcollection property on FX_Tickets → FX_TicketComments linked by TicketID (IDO Property Wizard,
   "Subcollection" option). Check in the IDOs.
6. Classic Multi-View Form `FX_Tickets` (captions typed on wizard page 3, Save Template unchecked); Designer readback,
   close/reopen.
7. **Probe:** comments grid under the detail fields: Grid bound to the subcollection (Binding Type "SubCollection Grid"),
   columns Author, Comment, Internal, Posted (system CreateDate, read-only). Save, reopen, runtime check that it follows
   the selected ticket.
8. Runtime: enter the 8 tickets (TicketID typed) and 6 comments; Save each; close/reopen/Refresh readback. AC-5 check
   (missing Summary / Project / Reporter refused).
9. Make TicketID and Resolved on read-only on the Form (component Read-Only/Disable, observed in BLD-007).
10. **Probe, ticket numbering** (one test ticket first): C# form script method that, for a new ticket with an empty
    TicketID, reads the project's NextTicketNo (IDOClient.LoadCollection, observed), sets TicketID = Key-N on the
    current row, and raises FX_Projects.NextTicketNo by 1 (IDOClient.UpdateCollection, **unverified**). Wiring tried in
    order: a handler that runs before the save; if that ordering can't be shown, Data Change on Project for new rows.
    Test: new SUP ticket → SUP-6, FX_Projects SUP shows 7. **If it can't be done safely, stop and propose another way
    before building on it** (request section 8).
11. **Probe, Resolve / Reopen buttons:** Button → custom event → handler Set Values on properties (docs only; observed
    for variables) + Collection Save; Resolved on = today. Fallback: a form script method (property set observed in
    EXP-095). Save, reopen, runtime test on one ticket each way.
12. Acceptance checks; complete the record (deviations, objects, evidence, cleanup).

Steps relying on **unverified** knowledge (probe first): 5, 7, 10, 11; also the Status/Priority dropdown order
(request: "in SortOrder"; a domain lists in key order, so this is expected to be a deviation unless a route shows up).

## Acceptance checks
- AC-1: Sql Tables › Columns shows both tables' columns, types, lengths and keys.
- AC-2: FX_Tickets opens from the Web Client with the 8 test tickets; Project, Type, Status, Priority, Reporter,
  Assignee, Category and Resolution dropdowns list the phase 1 values / fixed lists; a value outside a list is refused.
- AC-3: a new SUP ticket saves as SUP-6 and FX_Projects then shows Next ticket number 7 for SUP.
- AC-4: the comments grid shows only the selected ticket's comments; an added comment survives close/reopen + Refresh.
- AC-5: Resolve sets Status RESOLVED and Resolved on today; Reopen sets OPEN and clears Resolved on and Resolution;
  both survive close/reopen.
- AC-6: saving a ticket without Summary, Project or Reporter is refused with a message.

## Rollback / cleanup
- Delete Form FX_Tickets (User scope); the subcollection property; IDOs + tables FX_Tickets and FX_TicketComments;
  property classes FX_ProjectKey, FX_StatusCode, FX_PriorityCode.
- Test tickets created by the numbering probe (e.g. SUP-6) are kept only if the operator wants them; otherwise deleted
  and NextTicketNo for SUP set back to 6 (FX_Projects is factory-owned test data; NextTicketNo is read-only on the
  Form, so the reset goes through the IDO, method recorded when used).

## Build log
- 2026-10-30: brief and plan written; waiting for approval.
- 2026-10-30: plan approved ("continue"). Status → building.
- 2026-10-30 08:19–08:20 UTC: **step 1 (part).** Web Client header shows the operator's account. Property Classes
  query `FX_%` (`01-propclasses-fx-query.png`): 9 classes; no FX_ProjectKey / FX_StatusCode / FX_PriorityCode (absence
  confirmed). FX_AgentID was Revision 1, locked by the operator → **Check In** → Revision 2, Locked By empty, button
  now Check Out.
- 2026-10-30 08:20–08:26 UTC: **step 2, three property classes** (IdoPropertyClasses, New → fields → toolbar Save, one
  Save each; same route as FX_AgentID in BLD-007). Each was read back from the accessibility tree before Save
  (`evidence/playwright/bld009-pc-*-before-save.yml`) and showed Save disabled, Revision 1 and Locked By the operator
  afterwards:
  | Class | Data | Domain IDO / Property / List | Evidence |
  |---|---|---|---|
  | `FX_ProjectKey` | String 10, nvarchar | FX_Projects / ProjectKey / ProjectName | `02-projectkey-class-after-save.png` |
  | `FX_StatusCode` | String 20, nvarchar | FX_Statuses / StatusCode / StatusName | `03-statuscode-class-after-save.png` |
  | `FX_PriorityCode` | String 10, nvarchar | FX_Priorities / PriorityCode / PriorityName | `04-prioritycode-class-after-save.png` |
  Descriptions "Service desk … (BLD-009), dropdown of FX_…". The three stay checked out to the operator (FX_AgentID
  worked that way in BLD-007); check-in at the end. Two stale-ref clicks (toolbar Save, the nvarchar option) did not
  run; a fresh find or a readback showed the state before the corrected step. Typing "nvar" in Column Data Type
  already set nvarchar for FX_PriorityCode, as for FX_StatusCode.
- 2026-10-30 08:27–08:30 UTC: **step 1, absence gate (read-only).** IDOs `FX_*` → 11 IDOs (FX_Agents … FX_UMs), no
  FX_Tickets / FX_TicketComments (`05-idos-fx-absence.png`). Sql Tables grid criteria `FX_*` → 11 tables, neither of
  the two (`06-sqltables-fx-absence.png`). Select Form filter `FX_Ticket` → empty list (the same filter route listed
  `SqlTables` for `SqlTab`). An Enter in the Select Form filter opened a second, empty Property Classes panel in
  Filter in Place; closed with its Close Panel button, nothing changed. Select Form filter needs key-by-key typing +
  Tab (playbook), never Enter.
- 2026-10-30 08:30–10:40 UTC: **step 3a, table + IDO `FX_Tickets`** (Designer User scope, `07-designer-user-scope.png`;
  New → NewData / Maintenance → OK). Header: IDO `FX_Tickets`, project `FX_ServiceDeskProject` (picked; default was
  `amoveMock`), alias `fxtkt`, MultiView / GridLeft / Default, Site Split off. 14 rows, read back from the grid before
  Next (`evidence/playwright/bld009-tickets-page1.yml`, `08-tickets-wizard-page1.png` shows rows 9–14):
  TicketID String nvarchar 20 PK+Req · ProjectKey **FX_ProjectKey** (nvarchar 10) Req · TicketType String nvarchar 20
  Req default `Incident` · Summary nvarchar 200 Req · Description nvarchar 2000 · Status **FX_StatusCode** (nvarchar 20)
  Req default `OPEN` · Priority **FX_PriorityCode** (nvarchar 10) Req default `MEDIUM` · Reporter **FX_AgentID**
  (nvarchar 30) Req · Assignee FX_AgentID · Category nvarchar 40 · Labels nvarchar 200 · DueDate Date (datetime) ·
  ResolvedOn Date (datetime) · Resolution nvarchar 40. Page 2 Create Scripts off → Finish once → "Create Form" → **No**
  → "Table and IDO created." (`09-tickets-finish-result.png`, `10-tickets-created.png`) → Close.
  Wizard grid lessons (observed): Tab moves cell to cell; **Tab in the last column (Default Value) throws
  `doAutoInsert` and keeps the editor open** — commit a cell by clicking the row-number cell instead. A Data Type
  picked from the list fills SQL Data Type (String → nvarchar, Date → datetime); typed `String` + Tab leaves it blank
  (typed `nvarchar` then). A typed Property Class fills Data Type/Length only after a row-number click. Refs go stale
  after a partial snapshot: one batch of Tab presses ran after a stale-ref failure; a fresh snapshot showed only the
  row-3 editor had moved, nothing lost.
- 2026-10-30 11:06–11:14 UTC: **step 3b, table + IDO `FX_TicketComments`** (same wizard route, Designer User scope;
  status bar `ScopeType: User` in `11-…`). Header: IDO `FX_TicketComments`, project `FX_ServiceDeskProject`, alias
  `fxtcm`, MultiView / GridLeft / Default. 5 rows, read back from the grid before Next
  (`evidence/playwright/bld009-comments-page1.yml`; `11-comments-wizard-page1.png` shows names, Required and defaults,
  type columns scrolled out of view): CommentID Long Integer int PK+Req default `AUTONUMBER()` · TicketID String
  nvarchar 20 Req · Author **FX_AgentID** (String nvarchar 30) Req · CommentText String nvarchar 2000 Req · IsInternal
  **ListYesNo** (Byte, SQL type `ListYesNoType`, filled from the class) Req default `0`. ListYesNo is an Infor class,
  only referenced, not changed. Page 2 Create Scripts off → Finish once → "Create Form" → **No** → "Table and IDO
  created." (`12-comments-finish-result.png`, `13-comments-created.png`) → Close. One stale-ref Add Row click did not
  run (fresh snapshot showed one row only); corrected click added row 2. The row-number-click commit and the
  picked-Data-Type autofill behaved as in step 3a (second observation).
- 2026-10-30 11:14–11:15 UTC: **FX_TicketComments IDO checked in** (Web Client IDOs, Refresh → both new IDOs listed,
  Revision 1, Locked By the operator). FX_TicketComments → detail IDO Name / Revision 1 / project
  FX_ServiceDeskProject confirmed → **Check In** → "Source control integration is currently disabled…" notice → OK.
  Readback: Revision Num **2**, Locked By empty, button now Check Out, Tables tab FX_TicketComments / fxtcm / Primary
  Base (`14-comments-ido-checkin.png`). **FX_Tickets stays checked out** (Revision 1) for steps 4–5 (inline lists,
  subcollection); it's checked in after them.
- 2026-10-30 11:15–11:18 UTC: **AC-1 readback, Sql Tables › Columns** (read-only). Sql Tables Refresh (criteria
  `FX_*` kept) → 13 tables incl. FX_TicketComments and FX_Tickets (`15-sqltables-both.png`; FX_Tickets has
  PK_FX_Tickets and IX_FX_Tickets_RowPointer in the accessibility tree). Columns… per table, each user column clicked
  and its detail read (accessibility snapshots `evidence/playwright/page-2026-10-30T11-16-*.yml`, `…T11-17-*.yml`):
  | Table | Column: SQL type, length, nullable, key |
  |---|---|
  | FX_Tickets (21 = 14 + 7 system) | TicketID nvarchar 20 not null PK (key seq 1) · ProjectKey nvarchar 10 not null · TicketType nvarchar 20 not null · Summary nvarchar 200 not null · Description nvarchar 2000 null · Status nvarchar 20 not null · Priority nvarchar 10 not null · Reporter nvarchar 30 not null · Assignee nvarchar 30 null · Category nvarchar 40 null · Labels nvarchar 200 null · DueDate datetime null · ResolvedOn datetime null · Resolution nvarchar 40 null |
  | FX_TicketComments (12 = 5 + 7 system) | CommentID int not null PK (key seq 1) · TicketID nvarchar 20 not null · Author nvarchar 30 not null · CommentText nvarchar 2000 not null · IsInternal ListYesNoType (system tinyint) not null |

  Screenshots: `16-columns-tickets.png` (column list, TicketID nvarchar 20 PK key seq 1), `17-columns-tickets-resolution.png`
  (Resolution nvarchar 40 nullable), `18-columns-comments-isinternal.png` (column list, IsInternal ListYesNoType/tinyint).
  **AC-1 passes.** Observation: the SQL **Default Value is empty** on every column, including TicketType / Status /
  Priority / IsInternal / CommentID, though the wizard rows had defaults (`Incident`, `OPEN`, `MEDIUM`, `0`,
  `AUTONUMBER()`). Where the wizard put them (IDO property default?) is unproven; step 8 checks that a new row gets
  them and that CommentID is numbered.
- 2026-10-30 11:18–11:28 UTC: **step 4, fixed lists on FX_Tickets** (BLD-007 route, now observed a 2nd time; FX_Tickets
  still checked out to the operator, Revision 1). IDOs › FX_Tickets › Properties tab › **Properties** button → IDO
  Properties form. It opened on TicketID; the property was then picked in that form's own grid (the IDOs-panel row
  selection doesn't carry over). Per property: rollback baseline read first (Inline List and Validators empty) →
  Inline List ellipsis → Edit Inline List: row 1 typed into the cell editor, then Add Row → click the new cell → type,
  for each value → Column For Value `1` and Display Columns `1` (both have accessible textboxes,
  `C(ValueColumnStatic)` / `C(DisplayColumnsStatic)`) → readback → OK → Validators ellipsis → Add… → **In Inline
  List** (preselected; a click on the radio timed out because it sat outside the viewport, but the call log showed
  `aria-checked="true"`) → Next → OK → list `In Inline List | ININLINELIST()` → OK → toolbar **Save** → Save disabled.
  | Property | Inline List (read back after Save) | Validators | Default | Evidence |
  |---|---|---|---|---|
  | TicketType | `ENTRIES(Incident,Service request,Problem,Change,Task) DISPLAY(1) VALUE(1)` | `ININLINELIST()` | `Incident` (from the wizard) | `19-tickettype-before.png`, `20-tickettype-inline-before-ok.png`, `21-tickettype-after-save.png` |
  | Category | `ENTRIES(Hardware,Software,Access,Network,Facilities,Other) DISPLAY(1) VALUE(1)` | `ININLINELIST()` | none | `22-category-after-save.png` |
  | Resolution | `ENTRIES(Fixed,Workaround,Duplicate,Won't do,Cannot reproduce) DISPLAY(1) VALUE(1)` | `ININLINELIST()` | none | `23-resolution-inline-before-ok.png`, `24-resolution-after-save.png` |

  The apostrophe in `Won't do` is stored as typed. **Persistence:** toolbar Refresh → all three re-read from the
  server with the same Inline List / Validators values (`25-resolution-after-refresh.png`; accessibility readback of
  all three). Runtime enforcement (list shown, outside value refused) is checked in AC-2. Also confirmed: the wizard
  default `Incident` lives on the IDO property (Default Value), not on the SQL column; this explains the empty SQL
  defaults in AC-1.
- 2026-10-30 11:28–11:31 UTC: **step 5 probe, subcollection property `FX_Comments`** (unverified → observed at the
  IDO layer; runtime use is proven in step 7). IDO Properties (FX_Tickets, checked out) → **New Property…** → IDO
  Property Wizard page 1: radio **Subcollection** (IDO field shows FX_Tickets; its accessible label reads "Property
  Name") → Next → page 2: **Subcollection IDO** `FX_TicketComments` (typed key by key) + **Property Name**
  `FX_Comments` (`26-subcoll-wizard-page2.png`; Next disabled) → **Finish** → property created and saved by the
  wizard (22 properties; Save disabled; Property Type Subcollection). Its **Subcollection** tab has Subcollection IDO
  + a **Link By** button (no LinkBy on the wizard pages) → IDO Link By Editor: Parent Property and Child Property
  picked from their lists (TicketID / TicketID) → **Add** → list `TicketID=TicketID` (`27-subcoll-linkby.png`) → OK →
  Property Value `TicketID=TicketID` → toolbar **Save** → Save disabled. Refresh → row reads `FX_Comments …
  Subcollection … TicketID=TicketID FX_TicketComments` (`28-subcoll-after-refresh.png`). No syntax typed; both
  sides picked from the lists.
- 2026-10-30 11:31 UTC: **FX_Tickets IDO checked in** (IDOs › FX_Tickets Revision 1, Locked By the operator → Check
  In → Revision **2**, Locked By empty, button Check Out; no source-control notice this time, as in BLD-007 after the
  first one) (`29-tickets-ido-checkin.png`). Docs: IDO changes take effect only after check-in, so steps 4–5 now
  apply at runtime. Both new IDOs are checked in; property classes FX_ProjectKey / FX_StatusCode / FX_PriorityCode
  are still checked out (check-in at the end).
- 2026-10-30 11:32–11:42 UTC: **step 6, Form `FX_Tickets` created** (Classic Multi-View wizard, Designer User scope).
  Page 1 Name `FX_Tickets`, Data Source IDO `FX_Tickets`, GridLeft, Default (`30-tickets-mv-page1.png`); page 2 the 14
  business properties (`31-tickets-mv-page2.png`). Page 3: order set with the move buttons to TicketID, ProjectKey,
  TicketType, Summary, Description, Status, Priority, Reporter, Assignee, Category, Labels, DueDate, ResolvedOn,
  Resolution; captions Ticket, Project, Type, Summary, Description, Status, Priority, Reporter, Assignee, Category,
  Labels, Due date, Resolved on, Resolution. Each caption was typed into the shared Caption combobox and committed by
  clicking the next row's caption cell (the last one by clicking a name cell). Accessibility readback of all 14 rows
  (`evidence/playwright/bld009-form-wiz-page3-captions.yml`); `32-tickets-mv-page3-order-captions.png` shows rows 1–5.
  Last page: **Save Template** unchecked by its label (readback: checkbox not checked) (`33-tickets-mv-final-page.png`)
  → Finish → "Process Completed Successfully" → OK.
  - Designer readback (`34-tickets-form-in-designer.png`, `evidence/playwright/bld009-tickets-form-created.yml`): the
    14 labels in that order. Required stars on Ticket, Project, Type, Summary, Status, Priority, Reporter. Wizard
    defaults on the canvas: Type `Incident`, Status `OPEN`, Priority `MEDIUM`. Version "User version…",
    `ScopeType: User`.
  - Close (no prompt) → Form menu recent `FX_Tickets` → same 14 labels and the same defaults
    (`35-tickets-reopened-designer.png`, `evidence/playwright/bld009-tickets-reopened.yml`).
- 2026-10-30 11:43–12:00 UTC: **step 7 probe, comments grid** (unverified → observed in the Designer and at runtime
  for layout; data flow is checked in step 8).
  - **Form height.** The 14 fields filled the 69 × 21 Form (detail pane scrolls), leaving no free area. Form › Layout ›
    Size › Height 21 → **42** (Enter) → Save (`36-tickets-form-height-42.png`); later **44** so the grid fits (Save).
    Rollback = Height 21.
  - **Grid placed.** Toolbox **Grid** → one native mouse click on the empty canvas below Resolution (no accessibility
    element covers the empty canvas; coordinate fallback, as in the toolbox recipe) → `grid1_USER (Grid)` selected
    (`37-comments-grid-placed.png`) → Name `FX_CommentsGrid` (Enter) → Save.
  - **Binding.** Data Source › Binding ellipsis opened **Edit Collection Specification for Subcollection** directly.
    Parent Collection picked `primary collection` (the only entry); Subcollection Property picked `FX_Comments` (the
    only entry; the Designer saw the new subcollection property **without a metadata unload**)
    (`38-comments-grid-subcoll-spec.png`). Set LinkBy shows **Property Pairs Inherited from IDO: TicketID=TicketID**
    and an empty override list → Cancel, no override (`39-comments-grid-linkby-inherited.png`). OK → notice "You will
    need to regen this form (save the form definition and re-open it) to see the effect of this binding change" → OK.
    Properties read Binding Type `SubCollection Grid`, Binding `V(cds_DataSourceFX_CommentsGrid)` → Save → close →
    reopen: same values.
  - **Columns** via the grid's top-left icon (tooltip "Edit grid column(s)", no accessible name; hover then a coordinate
    click, as in EXP-068-R2) → dialog **Contained Components**, which already held two columns `gridColumn1_USER`,
    `gridColumn2_USER`. The column Binding picker lists only the **parent** properties (`object.TicketID` …), and
    typing does not filter it. The documented notation `object.<subcollection>.<property>`
    (`docs/mongoose/guides/component-bindings.md`, unverified) was typed for **one column first**:
    FX_CommentAuthorGridCol, caption Author, Binding Type Property, Binding `object.FX_Comments.Author` → OK → Save →
    reopen → grid header "* Author" → runtime (portal-tab reload with `favoriteContext=FX_Tickets`, leave-page prompt
    accepted, nothing unsaved): FX_Tickets opens with all 14 fields, defaults Incident / OPEN / MEDIUM, and the grid
    with an "* Author" column (`42-comments-grid-author-reopened.png`, `43-tickets-runtime-first-open.png`). Then
    the rest, same route (dialog **New** button, tooltip "New", adds after the selected column):
    FX_CommentTextGridCol / Comment / `object.FX_Comments.CommentText`; FX_CommentInternalGridCol / Internal /
    `object.FX_Comments.IsInternal`; FX_CommentPostedGridCol / Posted / `object.FX_Comments.CreateDate`,
    Behavior › Read-Only/Disable **True** (`44-comments-columns-before-ok.png`; dialog readback
    `evidence/playwright/bld009-col4-done.yml`) → OK → Save → close → reopen: headers "* Author", "* Comment",
    "* Internal", "Posted".
  - **Grid geometry.** Location (Top; Left, pane-relative chars) 35.22; 28.34 → **34.5; 3**; Size 30; 8.82 →
    **53; 8.82** → Save (`45-comments-grid-resized.png`: four columns, Internal as a checkbox).
  - **Runtime** (portal reload again): grid below Resolution with Author*, Comm…*, Internal* (checkbox), Posted
    (new row pre-filled with today's date) (`46-tickets-runtime-comments-grid.png`). Not yet proven: rows load per
    selected ticket, a comment saves (step 8 / AC-4).
- 2026-10-30 12:23–12:31 UTC: **step 8, test tickets** (new browser session; the operator signed in manually on
  CloudIdentities, no credentials typed by the agent). Web Client header shows the operator's configured user, not the
  read-only Mock account. Portal tab → `favoriteContext=FX_Tickets` (leave-page prompt accepted, nothing unsaved).
  **Inspect before redo:** the previous session's last snapshots (`evidence/playwright/bld009-sup1-after-save.yml`,
  `bld009-sup2-after-save.yml`, `bld009-sup3-before-save.yml`, 12:01–12:04 UTC) showed SUP-1 and SUP-2 saved and
  SUP-3 typed but unsaved. Refresh → "Object 1 of 2", rows SUP-1 and SUP-2 only, so SUP-3 had not been saved and nothing
  was duplicated. The earlier session's SUP-1..3 values were kept; the rest chosen so that every status, priority,
  reporter and assignee is used. Each row: toolbar New → fields filled (combos filled by typing the code, Tab to commit)
  → accessibility readback before Save (`evidence/playwright/bld009-sup3-before-save-2.yml`, `bld009-sup4-before-save.yml`,
  `bld009-sup5-before-save.yml`, `bld009-fac1-before-save.yml`, `bld009-fac2-before-save.yml`,
  `bld009-fac3-before-save.yml`) → Save → Save disabled, no message.
  | Ticket | Type | Summary | Status | Priority | Reporter → Assignee | Category | Due / Resolved |
  |---|---|---|---|---|---|---|---|
  | SUP-1 | Incident | Laptop won't start | INPROG | HIGH | agent.ben → agent.anna | Hardware | due 10/28/2026 (past) |
  | SUP-2 | Service request | Need access to the shared drive | OPEN | MEDIUM | agent.anna → (none) | Access | |
  | SUP-3 | Incident | Email not syncing on phone | WAITING | LOW | tech.dev → agent.ben | Software | due 10/27/2026 (past) |
  | SUP-4 | Problem | VPN drops every hour | RESOLVED | CRITICAL | lead.carla → lead.carla | Network | resolved 10/29/2026, Fixed |
  | SUP-5 | Task | Install a monitor at reception | CLOSED | LOW | agent.ben → agent.anna | Hardware | resolved 10/26/2026, Fixed |
  | FAC-1 | Incident | Meeting room light flickers | INPROG | MEDIUM | lead.carla → tech.dev | Facilities | |
  | FAC-2 | Service request | Order a standing desk | OPEN | LOW | agent.anna → (none) | Facilities | due 11/13/2026 |
  | FAC-3 | Change | Replace the kitchen coffee machine | CLOSED | HIGH | tech.dev → tech.dev | Facilities | resolved 10/27/2026, Won't do |

  `48-eight-tickets-saved.png`: grid rows 1–8, FAC-3 in the detail, Save disabled, comments grid with one empty new
  row. Close/reopen readback still to do.
- 2026-10-30 12:32 UTC: **comment insert fails (error).** SUP-1 selected → comments grid shows only the starred new
  row (correct: no comments yet) → Author `agent.anna`, Comment "Tried a different charger, still no power light.",
  Internal unticked → Save → alert **"The CommentID entered cannot be null in FX_TicketComments. INSERT rolled back."**
  (`49-comment-save-commentid-null-error.png`) → OK. Diagnosis (inferred, not proven): `AUTONUMBER()` is a WinStudio
  substitution keyword resolved client-side (Hello World pt 4 narration, `docs/mongoose/transcripts/hello-world-pt4.md`
  14:22–14:34), and in FX_Orders it worked with Order Number bound on the Form (EXP-073). CommentID is not bound to any
  component on FX_Tickets. **Correction probe:** add a read-only CommentID column to FX_CommentsGrid (factory-owned
  Form, User scope; no approval needed) and check that a new comment row gets a number.
- 2026-10-30 12:33–12:37 UTC: **correction probe, CommentID column** (Designer from the Web Client's second
  "Designer" button; scope dialog User / operator → OK; status bar `ScopeType: User`;
  `50-designer-before-commentid-col.png`). FX_CommentsGrid selected (adorner click) → "Edit grid column(s)" icon
  (coordinate click at the grid's top-left, as in step 7) → Contained Components: FX_CommentPostedGridCol selected →
  **New** (`+`, first bottom-left button) → `gridColumn1_USER` at 4 → Name **FX_CommentIDGridCol** (Enter) → Caption
  `ID` (typed key by key, committed by clicking another row) → Data Source (filter "Binding", double-click to expand)
  → Binding Type picked **Property** from the list (this auto-filled Binding `object._ItemId`) → Binding replaced with
  `object.FX_Comments.CommentID` → Behavior › Read-Only/Disable picked **True** (`51-commentid-col-before-ok.png`:
  name, caption, Read-Only True; binding read back from the accessibility tree before OK) → OK → canvas headers
  Author, Comment, Internal, Posted, ID → Designer **Save** → toast "Form [FX_Tickets] and global object(s) were
  saved.", Save disabled. Rollback: delete column FX_CommentIDGridCol.
- 2026-10-30 12:37–12:40 UTC: **runtime, comments.** Portal tab reload (leave-page prompt accepted; the failed comment
  was never inserted) → Refresh → "Object 1 of 8" (all 8 tickets after the Form reopen). The comments grid's starred
  new row now shows **ID 1** before anything is typed: `AUTONUMBER()` is evaluated once CommentID is bound
  (correction probe passes; **observed**). Six comments, one Save each, Save disabled after each and no message:
  | ID | Ticket | Author | Comment | Internal |
  |---|---|---|---|---|
  | 1 | FAC-1 | tech.dev | Ordered a replacement ballast, fitting it on Monday. | No |
  | 2 | FAC-1 | lead.carla | Moved the room 3B bookings to 3C until this is fixed. | **Yes** |
  | 3 | SUP-1 | agent.anna | Tried a different charger, still no power light. | No |
  | 4 | SUP-1 | agent.ben | Opened a warranty case with the vendor; reference is in the asset sheet. | **Yes** |
  | 5 | SUP-2 | lead.carla | Approved. Read-only access is enough for now. | No |
  | 6 | SUP-2 | agent.anna | Asked the drive owner which group to add the user to. | No |

  Second comment per ticket: click a saved comment cell (focus the comments grid) → toolbar **New** → a new comment
  row under the same ticket (Ticket field unchanged, status "Author (Object 2 of 2)"); New did not add a ticket.
  AUTONUMBER took the next free number across tickets (SUP-1's first new row showed 3), so it reads the table, not
  only the loaded subcollection. Ticket list cells are covered by the row numberer / splitter in the narrow list pane;
  clicking the **row number** selects the ticket.
- 2026-10-30 12:40–12:42 UTC: **close/reopen readback** (portal reload → Refresh, "Object 1 of 8"):
  FAC-1 → comments 1, 2 (2 internal) only (`52-reopen-fac1-comments.png`, `evidence/playwright/bld009-reopen-fac1.yml`);
  SUP-1 → 3, 4 (4 internal) only (`bld009-reopen-sup1.yml`); SUP-2 → 5, 6 only (`53-reopen-sup2-comments.png`,
  `bld009-reopen-sup2.yml`); FAC-2 → no comments, only the starred new row (ID 7) (`bld009-reopen-fac2.yml`). SUP-1
  and SUP-2 detail fields read back with the values entered; the list shows FAC-1..3 and SUP-1..5 with FAC-1 and FAC-2
  rows complete. **AC-4 passes** (only the selected ticket's comments; added comments survive close/reopen + Refresh).
- 2026-10-30 12:42–12:44 UTC: **AC-6 check.** Focus on the Ticket field → toolbar New → ticket row "Object 3 of 9"
  (defaults Incident / OPEN / MEDIUM, `evidence/playwright/bld009-ac6-new.yml`) → Ticket `SUP-90` only → Save →
  alert **"Value is required for Project"** (`54-ac6-project-required.png`) → OK → Project `SUP` → Save →
  **"Value is required for Summary"** (`55-ac6-summary-required.png`) → OK → Summary filled → Save → **"Value is
  required for Reporter"** (`56-ac6-reporter-required.png`) → OK. Unsaved row discarded by a portal reload
  (leave-page prompt accepted) → Refresh → "Object 1 of 8", no SUP-90. **AC-6 passes** (the message names one
  missing field per Save, in Form order).
- 2026-10-30 12:44–12:47 UTC: **step 9, read-only Ticket and Resolved on** (BLD-007 route, now observed a 2nd time).
  Designer (User scope): canvas adorner click → `TicketIDEdit (Edit)` → Properties search "Read" → Behavior (double-click
  to expand) → Read-Only/Disable picked **True** from its list → Save (toast "…were saved.", Save disabled); same for
  `ResolvedOnDateCombo (DateCombo)` → True → Save. Rollback: both back to False.
  - **Designer close/reopen:** Form tab closed (no prompt) → Form menu recent FX_Tickets → Version "User version for
    user …", status bar `ScopeType: User`; comments grid headers Author, Comment, Internal, Posted, **ID**;
    TicketIDEdit Read-Only/Disable True (`57-reopen-ticketid-readonly.png`); ResolvedOnDateCombo True (accessibility).
  - **Runtime** (portal reload): on the new, empty row the Ticket input renders `readonly="readonly"
    aria-readonly="true"` and a typed value is refused ("element is not editable"); same for Resolved on. After
    Refresh, FAC-1 shows both fields greyed (`58-runtime-readonly-ticket-resolvedon.png`). The required star on
    Ticket is gone (`aria-required="false"`); the IDO key is still required, so **a new ticket can't be saved by hand
    until step 10 fills TicketID** (expected per the plan).
- 2026-10-30 12:50 UTC: **checkpoint before step 10.** Done: steps 1–9; AC-1, AC-4, AC-6 pass; AC-2 partly (8 tickets
  shown after reopen; dropdown lists and the outside-value refusal not yet re-checked at runtime in this session).
  Open: step 10 (numbering probe), step 11 (Resolve/Reopen probe), AC-2 list check, AC-3, AC-5, step 12.
  Browser: Playwright tab 0 = Web Client on FX_Tickets (FAC-1, clean, Save disabled); tab 1 = Designer, FX_Tickets
  open, clean, User scope. Session signed in about 12:24 UTC (expires about hourly).
  Step 10 facts gathered (not yet tried): `StdFormSave`, `StdFormPerformValidations`, `StdObjectSave` are event names
  seen in docs/experiments; whether a user handler on one of them runs **before** the row is written is unknown.
  The Data Change fallback raises NextTicketNo when a project is picked, even if the ticket is never saved (numbers
  burned), so it is only acceptable with the operator's yes. Update helper to reuse: `FX_UpdateRow` in
  `assets/FX_ServiceDesk/FX_ServiceDesk.cs.txt` (UNVERIFIED, from `docs/mongoose/guides/ido-dotnet-api.md`).
  Next permitted action: diagnostics on (View › User Preferences › Diagnostics), Save once on an unchanged existing
  ticket, and read the Diagnostic Log for the save-event order; then write the script.
- 2026-10-30 17:58–18:17 UTC (new session, "continue jira clone"): **step 10 probe, ticket numbering on Save. Result:
  the StdFormSave route does not work; stopped per step 10 ("stop and propose another way").**
  - Session: Playwright browser was fresh; signed in with the secret placeholders; Web Client header shows the
    secret-file account (the operator's account, not the read-only Mock account) | `…_MONGOOSE_DEM_DEFAULT`.
    Designer opened with the Web Client's "Designer" button (the other split-button half opened Runtime Builder
    Selection; cancelled, nothing changed). Scope dialog User / operator → `ScopeType: User`, FX_Tickets "User version".
  - Rollback baseline (`59-designer-before-script.png`, `67-event-handlers-before.png`, `60-script-template-before.yml`):
    Script Language **Visual Basic**, no form script, **no event handlers**, Initial Command empty.
  - Behavior › Script Language → **Visual C#** (picked from the list) → Save ("Form [FX_Tickets] and global object(s)
    were saved.").
  - Form script `assets/FX_ServiceDesk/FX_Tickets.cs.txt` (+ `.flat.cs.txt`, 91 lines, longest 96 chars): method
    `FX_AssignTicketNo(ticketId, projectKey)` → if TicketID empty and Project set: LoadCollection FX_Projects
    NextTicketNo, UpdateCollection NextTicketNo + 1, `SetCurrentObjectPropertyPlusModifyRefresh("TicketID", "SUP-6")`.
    - First fill had `using System.Globalization;` → ▶ gave **"Cannot Save - the class name has changed (did you paste
      in the wrong script?)"** (`63-script-compile.png`), the same refusal BLD-002 got for `using System.IO;`. Fixed by
      keeping the template header exactly (3 usings, class line 7), header comments moved inside the class and
      `System.Globalization` fully qualified → ▶ **"Built with 0 errors at 18:06 PM."** (`63-script-compile-result.png`).
      Second observation of the rule: **adding a `using` line makes the Script Editor refuse the script.**
    - Readback: the Script Editor is Monaco; its accessibility value holds only the visible lines (150 of 3,464
      chars), so `compare-readback.js` can't be used on it (`61-script-readback-before-ok.yml`), and **Download gives a
      zip of 5 Mongoose DLLs, not the script** (deleted). Visual readback instead: lines 1–23 (`64-script-top.png`)
      and 56–87 (`62-…`, `63-…-result.png`) match the source; line numbers match the source (60, 68, 82). Lines 24–55
      were not seen; the compile and the method list below are the remaining evidence.
    - OK → Save ("Form [FX_Tickets] and global object(s) were saved.").
  - Event handler: Details › Event Handlers → + → Name **StdFormSave** (picked from the list, Enter) → Response Type
    **Form Script Method** → Parameters: Name list offered `FX_AssignTicketNo` (picked), Parameters
    `P(TicketID),P(ProjectKey)` (`70-handler-params-before-ok.png`) → OK → Save (saved notice).
  - **Designer close/reopen** (tab close, no prompt; Form menu recent list): User version, `ScopeType: User`, Script
    Language Visual C#, handler `StdFormSave | 0 | Form Script Method | false | FX_AssignTicketNo(P(TicketID),P(ProjectKey))`
    (`71-reopen-handler-persisted.png`). Designer persistence: observed.
  - Runtime baseline (portal reload, FX_Projects Refresh): **SUP NextTicketNo 6, FAC 4** (`72-projects-before-probe.png`).
  - **Runtime probe** (FX_Tickets opened from Open › Select Form; it opens on a new row): Project SUP, Summary
    "FX numbering probe (test ticket)", Reporter agent.anna, Ticket empty (`73-probe-new-ticket-before-save.png`) →
    toolbar Save → **"Value is required for Ticket"** (`74-probe-after-save.png`). FX_Projects Refresh: SUP still **6**
    (script did not run, or stopped before its update).
  - **Diagnostics** (View › User Preferences › Diagnostics › Enabled, was off; Diagnostic Log › Log Messages), Save
    again (`76-diagnostic-log-messages.yml`):
    ```
    FormEvent (FX_Tickets): Event name StdFormSave, starting processing
    FormEvent (FX_Tickets): Event name StdFormGetBoundValues, starting processing
    FormEvent (FX_Tickets): Event name StdFormGetBoundValues, result -1, num handlers for event 0, num executed 0
    FormEvent (FX_Tickets): Event name StdFormSave, result -1, num handlers for event 0, num executed 0
    ```
    Two findings:
    1. **Save runs StdFormGetBoundValues first**, and that is where the required-key check fails; StdFormSave then
       ends with -1. A StdFormSave handler therefore can't fill a required key (even when it loads; the
       ordering "custom handlers before the built-in response" from form-events.md does not cover this).
    2. **The runtime reported 0 handlers for StdFormSave**, after a portal reload and again after closing and
       reopening FX_Tickets in the Web Client (`77-diaglog-reopen.yml`: StdFormPredisplay … StdFormInitCompleted, all
       0 handlers). The Designer shows the handler saved in the User version. Cause unknown (runtime form cache? the
       read-only flags from step 9 did reach the runtime after a portal reload). The corrected attempt's Save at 18:15
       did not appear in the log view (`78-diaglog-save-results.txt`); not re-read.
  - Cleanup in this session: the unsaved probe row discarded twice (close → "Do you want to save your changes to
    primary collection?" → **No**); no ticket saved; SUP NextTicketNo unchanged (6); Diagnostics Enabled set back
    to **off**. Left in place (factory-owned, harmless while it can't run): FX_Tickets Script Language Visual C#, the
    form script and the StdFormSave handler. Rollback: delete the handler, clear the script, Script Language back to
    Visual Basic.
  - Status: step 10 **blocked on an operator decision** (options in the chat report, 2026-10-30). Steps 11–12, AC-2
    list check, AC-3 and AC-5 still open.
- 2026-10-31 02:27–02:42 UTC (operator: "continue. go with with A. yes run"): **step 10 done with option A,
  numbering on Data Change of Project. AC-3 passes.**
  - Session: portal still signed in; Web Client header = the secret-file account (operator, not the Mock account);
    Designer opened with the Web Client's "Designer" button, scope dialog User / operator → `ScopeType: User`,
    FX_Tickets "User version" (`80-designer-details.png`).
  - Handler moved, not recreated: Details › Event Handlers → StdFormSave row → property grid Event → typed
    `FX_NumberNewTicket` (custom event), Enter. Readback: `FX_NumberNewTicket | 0 | Form Script Method | false |
    FX_AssignTicketNo(P(TicketID),P(ProjectKey))` → Save ("Form [FX_Tickets] and global object(s) were saved.",
    `81-handler-moved-saved.png`). Renaming a handler's event in the Event field works (observed).
  - Data Change wiring (picked from the list, never typed): ProjectKeyCombobox (Components grid row → Properties ›
    Events › Data Change = FX_NumberNewTicket, `82-projectkey-selected.png`) → Save; ProjectKeyGridCol the same →
    Save. The canvas control couldn't be clicked (an adorner covers it); selecting through the Components grid works.
  - Script comments updated for the new wiring (`FX_Tickets.cs.txt` + `.flat.cs.txt`, 94 lines, longest 94 chars;
    code unchanged): Script Editor → Ctrl+A, Delete, one fill → ▶ **"Built with 0 errors at 2:34 AM."**
    (`84-script-refilled.png`: lines 64–95 match the source, numbering matches; `85-script-compile-result.png`) → OK →
    Save (saved notice). Before-state: `83-script-before-refill.png` (old header). Same Monaco readback limit as before.
  - **Designer close/reopen** (tab closed, Designer button, User scope): handler as above (`86-reopen-handler-moved.png`);
    ProjectKeyCombobox Data Change = FX_NumberNewTicket (`87-reopen-combobox-datachange.png`); ProjectKeyGridCol Data
    Change = FX_NumberNewTicket (readback in the property grid, no screenshot).
  - **Form-object unload: approved, not run.** The runtime picked the handler up without it (below), so the
    2026-10-30 "0 handlers" was not a cache that needed unloading here. What changed in between: a new session
    (portal reload + fresh Designer) and a custom event instead of StdFormSave. Not separated; open question.
  - **Runtime** (FX_Tickets closed and reopened from Select Form; FX_Projects Refresh baseline **SUP 6, FAC 4**,
    `88-projects-before-probe.png`):
    - New row, Ticket empty → Project dropdown → SUP → **Ticket shows SUP-6** immediately
      (`89-project-picked-sup6.png`).
    - Summary "FX numbering probe (test ticket)", Reporter agent.anna → Save → Save disabled, row saved
      (`90-sup6-saved.png`).
    - FX_Projects Refresh: **SUP 7, FAC 4** (`91-projects-after-sup7.png`). **AC-3 pass.**
    - FX_Tickets close/reopen + Refresh: 9 tickets, SUP-6 with the probe values (`92-reopen-sup6-persisted.png`).
    - Negative check: on saved SUP-6, Project → FAC: Ticket stays **SUP-6** (`93-existing-ticket-project-change-keeps-id.png`);
      discarded (close → "Do you want to save your changes to primary collection?" → No); FX_Projects Refresh: FAC
      still **4** (`94-projects-after-negative-check.png`).
  - Knowledge: Data Change → Form Script Method → C# `IDOClient.LoadCollection` + **`IDOClient.UpdateCollection`** +
    `SetCurrentObjectPropertyPlusModifyRefresh` from a form script: **observed** (one run, persisted, re-read through
    FX_Projects). UpdateCollection was unverified before this run.
  - Known limits (accepted with option A): a new ticket that is never saved still uses its number (gap); a new
    ticket whose project is changed after numbering keeps the first project's prefix (discard and start again).
  - Test data left: ticket **SUP-6** "FX numbering probe (test ticket)" and SUP NextTicketNo 7. Per the rollback
    section it stays only if the operator wants it; otherwise delete SUP-6 and set SUP back to 6.
  - Status: step 10 done; AC-1, AC-3, AC-4, AC-6 pass. Open: step 11 (Resolve/Reopen probe), AC-2 list check,
    AC-5, step 12. Browser: tab 0 Web Client on FX_Projects (clean), tab 1 Designer on FX_Tickets (clean, User scope).
- 2026-10-31 02:53–02:56 UTC (operator: "try removing it instead"): **probe test data removed, baseline restored.**
  - FX_Tickets: SUP-6 selected, clean (`95-before-delete-state.png`) → toolbar Delete → "Selected records will be
    permanently deleted upon Save." → OK → only row 9 marked ✕ (`96-sup6-marked-delete.png`) → Save → Object 8 of 8.
    SUP-6 had no comments (only the empty new comment row).
  - FX_Projects: Refresh showed SUP 7. The detail Next ticket number is read-only (BLD-007), the grid column is not:
    clicked the SUP row's grid NextTicketNo cell → editor → `6` → Tab → row marked ◆, detail shows 6
    (`97-sup-nextno-edited.png`) → Save → Refresh: **SUP 6, FAC 4**, Save disabled (`98-projects-sup-reset-6.png`).
    Reset route for NextTicketNo: the FX_Projects grid column (observed).
  - FX_Tickets Refresh: 8 tickets, FAC-1..3 and SUP-1..5 (`99-tickets-after-sup6-removed.png`).
  - The next SUP ticket will be SUP-6 again. AC-3 evidence stays in screenshots 88–94.
- 2026-10-31 02:57–03:21 UTC (operator: "yes continue"): **step 11 done, AC-5 pass.**
  - Route: the plan's fallback (form script method), not Set Values on properties. The script route rests on an
    observed property set (EXP-095, step 10); Set Values on properties is docs-only. Each button raises a custom
    event with two handlers: seq 0 Form Script Method, seq 1 Generate event StdFormSave (Post Event Asynchronously
    unchecked).
  - Script: `FX_ResolveTicket()` and `FX_ReopenTicket()` added (compiled 0 errors 2:59 AM, saved, `100-script-resolve-reopen-compiled.png`).
  - Handlers (Details › Event Handlers, names typed in the "+" dialog, methods and events picked from lists), Save
    after each: `FX_ResolveTicket | 0 | Form Script Method | FX_ResolveTicket()`, `| 1 | Generate event | StdFormSave( )`;
    `FX_ReopenTicket` the same with `FX_ReopenTicket()` (`102`, `103`, `104-event-handlers-resolve-reopen-saved.png`).
  - Buttons: Toolbox Button + canvas click → renamed `FX_ResolveButton` / `FX_ReopenButton`, Caption typed
    `Resolve` / `Reopen` (literal), Events › Primary picked = `FX_ResolveTicket` / `FX_ReopenTicket`, Save each
    (`108-resolve-button-placed.png`, `109-reopen-button-placed.png`). Placed right of Status / Priority.
  - Canvas width: the form canvas (Design View Size Form 69 × 44) had no free space. The View Width 69 → 90 +
    Update widened the canvas for placing (`106-design-view-size-before.png`, `107-view-width-90.png`), but it is a
    **design-time view setting only**: after reopen both widths read 69 again and the Designer clips the buttons
    (`110-reopen-designer-buttons.png`, buttons present in the DOM). At runtime they show in full beside Status and
    Priority (`111-runtime-buttons.png`). Observed; to edit the buttons later, select them via Details › Components.
  - Designer close/reopen: both buttons present (DOM readback), User scope, no unsaved-changes prompt on close.
  - **Probe 1 failed (internal date format):** Resolve on SUP-2 set Status RESOLVED and showed Resolved on 10/31/2026,
    then alert "Value 20261031 00:00:00.000 for Resolved on is not a valid date"; Save stayed enabled, row and a
    comment row marked with error icons (`113-resolve-date-error.png`). OK → close → "save your changes?" → **No**;
    reopen showed SUP-2 unchanged (OPEN, Resolved on empty). Finding: `SetCurrentObjectPropertyPlusModifyRefresh`
    takes the value as display text, not the IDO internal format (consistent with FX_Orders passing
    `OrderTotal.ToString()`). Observed.
  - Fix: `IdoDateFormat` → `FormDateFormat = "MM/dd/yyyy"` (en-US display format) + header comment
    (`FX_Tickets.cs.txt` / `.flat.cs.txt`, 126 lines, longest 94). Script Editor Ctrl+A, Delete, one fill → ▶
    **"Built with 0 errors at 3:17 AM."** (`115-script-date-fix-compiled.png`, 127 lines incl. trailing blank) → OK →
    Save (saved notice).
  - **Probe 2, runtime on SUP-2** (FX_Tickets reopened from Select Form, Refresh):
    - Before: OPEN, Resolved on empty, Resolution empty (`112-sup2-before-resolve.png`, taken before probe 1).
    - Resolve → **RESOLVED, Resolved on 10/31/2026, Save disabled, no alert, no error icons** (`116-sup2-resolved-saved.png`).
    - Close (no save prompt) → reopen → Refresh → SUP-2 still RESOLVED, 10/31/2026 (`117-reopen-sup2-resolved-persisted.png`).
    - Resolution set to `Fixed` by hand + Save, so Reopen's clear can be seen (`118-sup2-before-reopen.png`).
    - Reopen → **OPEN, Resolved on empty, Resolution empty, Save disabled, no alert** (`119-sup2-reopened-saved.png`).
    - Close (no save prompt) → reopen → Refresh → still OPEN, both empty (`120-reopen-sup2-open-persisted.png`).
    - SUP-2 ends as it started (OPEN, Resolved on and Resolution empty); no test data left.
  - Knowledge (observed, one run each, persisted): button Primary → custom event → Form Script Method + Generate
    event StdFormSave saves the row; `SetCurrentObjectPropertyPlusModifyRefresh(prop, "")` clears a date and a
    list field; a date must be passed in the display format.
  - Known limits: `FormDateFormat` is fixed to en-US (a user with another date format would get the "not a valid
    date" alert); `DateTime.Today` is the server's date (time zone not checked), which can differ from the user's local date near
    midnight. Resolve/Reopen on a row with other unsaved edits saves those edits too (same Save).
  - Status: steps 10–11 done; AC-1, AC-3, AC-4, AC-5, AC-6 pass. Open: AC-2 list check, step 12. Browser: tab 0 Web
    Client on FX_Tickets (SUP-2 selected, clean), tab 1 Designer on FX_Tickets (clean, User scope).
- 2026-10-31 (operator: "the date stuff is fine we can convert it in the frontend, continue with the next phase /
  tasks"): the en-US `FormDateFormat` is accepted as is; a later front end converts dates.
- 2026-10-31 03:27–03:31 UTC: **AC-2 pass.** Web Client FX_Tickets, SUP-2 selected; each dropdown opened with its
  Open button and read from the accessibility tree, then Escape:
  | Dropdown | Listed (in order) | Evidence |
  |---|---|---|
  | Project | FAC Facilities · SUP IT Support | `121-ac2-project-list.png` |
  | Type | Incident · Service request · Problem · Change · Task | `122-ac2-type-list.png` |
  | Status | CLOSED Closed · INPROG In progress · OPEN Open · RESOLVED Resolved · WAITING Waiting for customer | `123-ac2-status-list.png` |
  | Priority | CRITICAL Critical · HIGH High · LOW Low · MEDIUM Medium | `124-ac2-priority-list.png` |
  | Reporter | agent.anna Anna Agent · agent.ben Ben Agent · lead.carla Carla Lead · tech.dev Dev Tech | `125-ac2-reporter-list.png` |
  | Assignee | same four agents | `126-ac2-assignee-list.png` |
  | Category | Hardware · Software · Access · Network · Facilities · Other | `127-ac2-category-list.png` |
  | Resolution | Fixed · Workaround · Duplicate · Won't do · Cannot reproduce | `128-ac2-resolution-list.png` |
  - Status and Priority list in code order (alphabetical), not SortOrder: the expected deviation (Deviations 3).
  - **Outside values:** Category typed `Bogus` + Tab → the field kept it, no message (`129-…`); toolbar Save → alert
    **"Bogus is not a valid Category"**, row error icon, nothing saved (`130-ac2-category-bogus-refused.png`). OK →
    Category back to `Access`; Status typed `ZZZ` → Save → **"ZZZ is not a valid Status"** (`131-…`). OK → Status back
    to `OPEN` → Save → Save disabled. Refresh → 8 tickets ("Object 1 of 8", `132-ac2-after-refresh.png`); SUP-2 reads
    OPEN / MEDIUM / Service request / Access / Assignee, Resolved on and Resolution empty, as before the check.
  - So a fixed list (In Inline List validator) and a lookup (property-class domain) both refuse outside values **at
    Save, not when the field is left**. Observed.
- 2026-10-31 03:31–03:35 UTC: **property-class check-in, blocked (not done).** Goal: check in FX_ProjectKey,
  FX_StatusCode, FX_PriorityCode (Revision 1, locked by the operator since step 2).
  - First Select Form try: Enter in the filter box confirmed the dialog while FX_Tickets was still the selected row
    and opened a **second FX_Tickets panel on a blank new row**. No project picked, so no number taken; Close Panel →
    no save prompt. Lesson: in Select Form, type the filter and double-click the row; never press Enter.
  - Property Classes (IdoPropertyClasses) opens in Filter in Place. Try 1: Class Name `FX_%` (filled) → the FiP
    toolbar button **cancelled** the filter and the form showed a blank new record (★, Revision 1, Locked By the
    operator, Revision Date 10/30/2026). Close Panel → no prompt.
  - Try 2 (corrected per `browser-and-session.md`): `FX_%` typed key by key → **Actions › Filter › Execute in
    Place** → the same single record with an empty Class Name, "1 of 1" (`133-propclass-filter-blank-row.png`).
    Step 1 found 9 classes with the same filter on 2026-10-30, so the cause is unknown (the Revision Date suggests a
    real row whose name doesn't display, or a new-record default). Stopped per AGENTS.md after one corrected
    attempt; Close Panel → no prompt; nothing saved.
  - Effect: none at runtime (FX_AgentID worked checked out in BLD-007; AC-2 lists come from these classes). Left as
    open cleanup.

## Status
**Done with deviations** (2026-10-31 03:35 UTC). All six acceptance checks pass. Parts of the request that aren't met
as written are listed under Deviations. One cleanup item is open (property-class check-in).

| Check | Result | Evidence |
|---|---|---|
| AC-1 Sql Tables › Columns, both tables | pass | `15-…`–`18-…` |
| AC-2 dropdowns list phase 1 values / fixed lists; outside value refused | pass (8/8 lists; 2 refusals) | `121-…`–`132-…` |
| AC-3 new SUP ticket → SUP-6, FX_Projects SUP → 7 | pass (then SUP-6 removed, SUP reset to 6 on request) | `88-…`–`94-…`, `95-…`–`99-…` |
| AC-4 comments follow the selected ticket; added comment survives | pass | `46-…`, `52-…`, `53-…` |
| AC-5 Resolve / Reopen, both survive close/reopen | pass | `112-…`, `116-…`–`120-…` |
| AC-6 save without Summary / Project / Reporter refused | pass | `54-…`, `55-…`, `56-…` |

## Deviations
1. **"Active only" not applied.** Project, Reporter and Assignee list every row (no list-source filter route; BLD-007
   deviation 1). All test rows are active.
2. **Dropdowns show code + name; the field keeps the code / user name** (BLD-007 deviation 2). No name fields added.
3. **Status and Priority list in code order, not SortOrder** (a property-class domain lists by key). Order today:
   CLOSED, INPROG, OPEN, RESOLVED, WAITING / CRITICAL, HIGH, LOW, MEDIUM. A fix needs a list source with an order
   (unverified).
4. **Ticket number is taken when the project is picked, not on Save** (option A, operator-approved 2026-10-31). A new
   ticket that is never saved leaves a gap; a numbered ticket keeps its number if the project changes. Save could not
   be used: the required TicketID is checked before any Save handler runs.
5. **Resolve / Reopen use a form script method**, not Set Values on properties (the plan's fallback). Resolved on is
   passed as en-US display text (`MM/dd/yyyy`) and is the server's date; the operator accepted this on 2026-10-31
   (the front end converts dates). A click also saves any other unsaved edit on the row.
6. **The Resolve / Reopen buttons sit beyond the Designer canvas width.** They show in full at runtime; in the Designer
   they are clipped and are selected through Details › Components.
7. **Outside values are refused at Save**, not when the field is left (the dropdowns accept typing).

## Objects created (all new FX_, factory-owned)
- SQL tables + IDOs `FX_Tickets` (14 columns) and `FX_TicketComments` (CommentID AUTONUMBER + 4), project
  `FX_ServiceDeskProject`, both checked in (Revision 2).
- Subcollection property `FX_Comments` on FX_Tickets (Link By TicketID = TicketID).
- Inline lists + In Inline List validators on FX_Tickets TicketType, Category, Resolution.
- Property classes `FX_ProjectKey`, `FX_StatusCode`, `FX_PriorityCode` (**still checked out to the operator,
  Revision 1**; check-in blocked 2026-10-31, see log). `FX_AgentID` (BLD-007) was checked in (Revision 2) and reused.
- Form `FX_Tickets` (Classic Multi-View, User scope, operator's account) with:
  - comments grid `FX_CommentsGrid` (columns FX_CommentIDGridCol, FX_CommentAuthorGridCol, FX_CommentTextGridCol,
    FX_CommentInternalGridCol, FX_CommentPostedGridCol);
  - TicketID and Resolved on read-only;
  - buttons `FX_ResolveButton`, `FX_ReopenButton`;
  - event handlers `FX_NumberNewTicket` (Data Change of ProjectKeyCombobox / ProjectKeyGridCol), `FX_ResolveTicket`
    and `FX_ReopenTicket` (script method + Generate event StdFormSave);
  - C# form script `FX_Tickets` (`FX_AssignTicketNo`, `FX_ResolveTicket`, `FX_ReopenTicket`), source in
    `assets/FX_ServiceDesk/FX_Tickets.cs.txt` (install copy `.flat.cs.txt`).
- Test data (fake): 8 tickets FAC-1..3, SUP-1..5 and their comments. FX_Projects NextTicketNo: SUP 6, FAC 4. Probe
  ticket SUP-6 deleted on the operator's request; SUP-2 restored after the AC-2 and AC-5 probes.

No object the factory doesn't own was changed. Tenant-wide operations: none run (the approved form-object unload
was not needed). No Group/Site save, FormSync or deployment.

## Open cleanup
- Check in `FX_ProjectKey`, `FX_StatusCode`, `FX_PriorityCode` (Property Classes). The FiP filter returned a blank
  record on 2026-10-31; try an exact class name or the IDOs-style route next time.

## Knowledge updates proposed (not applied to recipes)
- `SetCurrentObjectPropertyPlusModifyRefresh` takes the value as display text (a date in the user's format; the IDO
  internal format is refused); `""` clears a date or list field. Observed.
- Button Primary → custom event → Form Script Method handler + Generate event StdFormSave (Post Event
  Asynchronously unchecked) saves the row. Observed.
- Save checks required bound fields (StdFormGetBoundValues) before any StdFormSave handler runs, so a handler can't
  fill a required key on Save. Observed.
- Data Change handler wired through the Components grid on both the detail combobox and the grid column. Observed.
- `IDOClient.UpdateCollection` with the loaded ItemID from a form script updates another IDO. Observed.
- Design View Size › View Width is design-time only (reverts on reopen); controls placed beyond the form width are
  clipped in the Designer but render at runtime. Observed.
- Script Editor: the first dialog button is maximize; compile is ▶ in the maximized dialog toolbar. Observed.
- In Inline List and property-class domain values are refused at Save with "<value> is not a valid <caption>",
  not on field exit. Observed.
- Select Form: Enter in the filter box opens the selected row (it may still be the previous form). Observed.
- Filter in Place toolbar button cancels FiP (it doesn't run it); use Actions › Filter › Execute in Place. Observed.
