# BLD-016 — Service desk phase 4: workflow rules, history, create/edit in the app, Dashboard

Status: done (AC-1..AC-8 pass; one tablet finding open, see Deviations 3)
Date: 2026-10-31
Account (checked at start): the operator's own account (Web Client header; Designer status bar `ScopeType: User`),
not the read-only Mock account (step 1)
Evidence: full   Guide: none
Final scope for Forms: User   Group/Site save approved in the request: n/a (User scope)
Build prefix: FX_   Existing tenant objects already starting with it (not factory-owned): n/a (default prefix; each new
name gets an absence check)

Request: `requests/service-desk/phase-4-workflow-dashboard.md` (phase 4 of 4; design in
`requests/service-desk/README.md`). Builds on BLD-007 (phase 1), BLD-009 (phase 2) and BLD-015 (phase 3, accepted
2026-10-31). Operator go-ahead to start: "continue" (chat, 2026-10-31).

## Goal
Agents create and edit tickets inside the Service Desk web app and can move a ticket only along the allowed status
steps; every change to Status, Assignee or Priority leaves a history row (who, old, new) that shows as Activity; a
Dashboard view gives team leads KPIs and charts. The Classic FX_Tickets Form stops changing Status. Done = request
section 7 (AC-1..AC-8 below).

## Objects
| Object | Type | New / factory-owned / other | Scope | Change |
|---|---|---|---|---|
| `FX_StatusTransitions` | SQL table + IDO (project FX_ServiceDeskProject) | new (FX_) | tenant-wide | create: TransitionID int PK AUTONUMBER(), FromStatus / ToStatus nvarchar 20 Req on property class FX_StatusCode |
| `FX_TicketHistory` | SQL table + IDO (project FX_ServiceDeskProject) | new (FX_) | tenant-wide | create: HistoryID int PK AUTONUMBER(), TicketID nvarchar 20 Req, FieldName nvarchar 30 Req, OldValue / NewValue nvarchar 200, ChangedBy Req on property class FX_AgentID |
| `FX_StatusTransitions` | Classic Multi-View Form (the request asks for Classic) | new (FX_) | User | create; captions From status, To status |
| FX_StatusTransitions rows | test data (fake) | new | data | the request's 10 rows, entered through the Form |
| `FX_ServiceDesk` C# script | form script | factory-owned (BLD-015) | User | rules, history, create, edit, more data in the load (see Design) |
| `FX_ServiceDesk/index.html`, `app.css`, `app.js` | Web User Control Assets | factory-owned (BLD-015) | tenant-wide | Create issue dialog, Edit mode, Activity, Recent activity, Dashboard view |
| `FX_Tickets` Form | Classic Form | factory-owned (BLD-009) | User | Status read-only; delete FX_ResolveButton, FX_ReopenButton and their event handlers |
| `FX_Tickets` C# script | form script | factory-owned (BLD-009) | User | delete the now-unused FX_ResolveTicket / FX_ReopenTicket methods (numbering stays) |
| FX_Tickets / FX_TicketComments / FX_Projects rows | test data (fake) | factory-owned | data | probes and ACs create tickets (e.g. SUP-7) and change some; listed in the log, kept or removed as the operator prefers |

Reused as is: IDO project FX_ServiceDeskProject, property classes FX_StatusCode and FX_AgentID (factory-owned; still
checked out since BLD-007/009, which works), Global variable FX_vSDResult, the Flex Form FX_ServiceDesk and its
UserControl. Read only: FX_Statuses, FX_Priorities, FX_Agents.

## Data source
Everything goes through the FX_ServiceDesk C# script with `IDOClient.LoadCollection` / `UpdateCollection` (phase 3's
proven route). New reads: FX_StatusTransitions, FX_TicketHistory. New writes: insert FX_Tickets (create), update
FX_Projects.NextTicketNo (numbering), update ticket fields (edit), insert FX_TicketHistory rows.

## Approvals required (fill before building)
| Object the factory doesn't own, or tenant-wide operation | Why | Rollback | Operator approval (quote + date) |
|---|---|---|---|
| none planned | Every object is new FX_ or factory-owned. No metadata unload, FormSync, deployment or Group/Site save. Table creation is part of the FX_ data-layer scope (AGENTS.md scope extension). | — | — |

## Design (decisions for you to confirm or change)
1. **Rules live in the C# script**, so every route through the app obeys them:
   - `FX_SDSetStatus(ticketId, status, resolution, me)`: refused unless FX_StatusTransitions has (current → new); the
     message names the allowed moves ("OPEN can move to: In progress, Waiting for customer"). Moving to RESOLVED needs a
     Resolution from the FX_Tickets list (Fixed, Workaround, Duplicate, Won't do, Cannot reproduce); the page asks for it
     first (Board drop and detail pane). Leaving the Done category clears ResolvedOn **and Resolution** (what phase 2's
     Reopen did).
   - `FX_SDUpdateTicket(ticketId, fieldsJson, me)`: summary, description, assignee, priority, due date, category,
     labels. Same validation as the Form's lists (inline lists, active agents, priorities). Status is not editable here.
   - `FX_SDCreateTicket(fieldsJson, me)`: Project, Type, Summary, Description, Priority, Assignee, Reporter (default
     me), Due date, Category, Labels. Takes the project's NextTicketNo and adds 1 (phase 2's numbering), then inserts
     the ticket with Status OPEN. Field errors come back per field so the dialog shows them next to the field.
   - **History**: one FX_TicketHistory row per changed field among Status, Assignee, Priority (old, new, ChangedBy =
     me). No row for creating a ticket (Activity shows "Created by <reporter>" from the ticket itself).
   - "Me" stays the page's picker (phase 3); creating, editing and moving require it, as commenting does now.
2. **IDs set by the script**: HistoryID, like CommentID, gets max + 1 from the script, because AUTONUMBER() is filled by
   the client only (BLD-009). Fine for one user; two people saving in the same second could collide (the second save
   fails with a message, nothing half-saved apart from the history row order).
3. **Order of writes, no transactions**: create = number first, then insert (a failed insert wastes a number, as in
   phase 2); status/edit = ticket update first, then history rows (if a history insert fails, the change stays and the
   message says so).
4. **Dashboard** is computed in the page from data the load already returns (tickets with created/resolved dates,
   statuses, priorities with ResolveHours, agents) plus nothing new from the server:
   - period picker 7 / 30 / 90 days (default 30) and Project filter, applied to everything; top-bar Refresh reloads;
   - KPI cards with the change against the previous period of the same length. "Open now" and "Overdue" at the start
     of the previous period are estimated from created and resolved dates (status history only starts now);
   - Overdue on the Dashboard uses the request's rule (open, and past due date **or** older than the priority's
     ResolveHours). My work, Issues and Board keep phase 3's meaning (past due date), so their accepted numbers don't
     change. The card's text alternative says which rule it uses;
   - charts are inline SVG drawn from the data, each with its numbers in a legend or table (no library, no CDN).
5. **FX_StatusTransitions Form**: Classic Multi-View; From/To dropdowns from FX_StatusCode (they show code + name,
   as phase 2's dropdowns do; phase 2 deviation 2).
6. **FX_Tickets**: Status read-only (new rows still get the OPEN default); Resolve/Reopen buttons and their two
   handlers deleted with the Components-grid trash (never the top-toolbar trash); the two script methods removed.

## Plan (each step ends with a Save and a readback)
1. Account + scope check. Absence gate: IDOs and Sql Tables `FX_StatusTransitions`, `FX_TicketHistory`; Form
   `FX_StatusTransitions`. Before-state of FX_Tickets (components list, event handlers, Status Read-Only, script
   via Monaco readback), FX_ServiceDesk script and assets (Monaco / editor readbacks = rollback sources).
2. Local work: C# script (rules, history, create, edit, load), page (Create issue dialog, Edit mode, Activity, Recent
   activity, Dashboard), `preview/stub.js` (transitions, history, ~90 days of fake tickets). frontend-design for open
   visual choices; headless preview test at 1440 / 1024 / 768 px; web-design-guidelines review (rules fetched; if
   they can't be fetched, I tell you) with fixes; `npm run flat`.
3. Maintenance wizard (NewData / Maintenance, Create Form: No): `FX_StatusTransitions`, then `FX_TicketHistory`. Check
   in each IDO; read back Sql Tables › Columns.
4. Classic Multi-View Form `FX_StatusTransitions`; enter the 10 rows; Save, close/reopen, Refresh, read back (AC-7).
5. Install the script (Monaco fill, compile 0 errors, Save, reopen, Monaco readback) and the three assets (fill,
   compare-readback before OK, Save, reopen readback); refresh the browser cache for the assets. The page and script
   change together, so they go in as one step.
6. **Probe, history insert:** one allowed move on SUP-3 (WAITING → INPROG, then back) → two FX_TicketHistory rows,
   shown in the detail pane's Activity and read back from the load result (FX_vSDResult). **Stop and report if it
   fails.**
7. **Probe, ticket insert:** Create issue on SUP → SUP-7, NextTicketNo 7 → 8; read back in FX_Tickets and FX_Projects.
   **Stop and report if it fails.**
8. Only if 6 and 7 pass does the rest go ahead as designed; otherwise I stop and propose another way. (If a probe
   fails, the phase 3 versions of the script and page are reinstalled so the app keeps working.)
9. FX_Tickets changes (step 1's before-state recorded): Status read-only, delete the two buttons and handlers, reinstall
   the FX_Tickets script without the two methods; Save, reopen, runtime check (AC-5).
10. Acceptance checks AC-1..AC-6 at desktop and tablet widths; Dashboard numbers counted against FX_Tickets.
11. Designer close/reopen readbacks; record (objects, evidence, design-review table, deviations, cleanup).

Steps relying on **unverified** knowledge (probe first, stop on failure):
- 5: insert into a new table with the key set by the script (only the comment insert is observed).
- 7: inserting a ticket (text key from numbering, required fields) plus the NextTicketNo update in one call.
- 6: a script about twice as long as any installed so far (~900 lines); compile, Save and reopen readback decide.
- 9: deleting components and event handlers on a Classic Form (playbook has the Components-grid trash route; the
  handler delete is not exercised here yet).
- 3: property classes on properties of a new IDO while the class is still checked out (worked in BLD-009).

## Acceptance checks (request section 7)
- AC-1: "Create issue" creates a ticket with the project's next number (e.g. SUP-7) that shows in Issues and on the
  Board; empty Summary, Project or Reporter shows a message next to that field and saves nothing.
- AC-2: editing summary, description, assignee, priority, due date, category, labels in the detail pane saves; FX_Tickets
  shows the change after Refresh.
- AC-3: each saved change to Status, Assignee or Priority adds one FX_TicketHistory row per field (old, new, who); the
  detail pane's Activity lists them newest first; My work's "Recent activity" shows the latest 5 changes and comments.
- AC-4: a move not in FX_StatusTransitions (e.g. OPEN → CLOSED) is refused with a message naming the allowed moves, on
  the Board and in the detail pane; moving to Resolved without a Resolution asks for one first.
- AC-5: in FX_Tickets, Status is read-only and the Resolve / Reopen buttons are gone.
- AC-6: the Dashboard's numbers match counts in FX_Tickets; the period and Project filters change every card and chart.
- AC-7: FX_StatusTransitions opens from the Web Client and shows the 10 test rows.
- AC-8: this record lists the web-design-guidelines findings and the fix for each.

## Rollback / cleanup
- Delete Form FX_StatusTransitions; delete IDOs + tables FX_StatusTransitions, FX_TicketHistory.
- FX_ServiceDesk script and assets: reinstall the BLD-015 versions (Monaco / editor readbacks from step 1, and the
  BLD-015 flat copies kept in the session scratchpad before editing).
- FX_Tickets: Status Read-Only back to False; re-add the two buttons and handlers (BLD-009 step 11 route); reinstall
  the BLD-009 script.
- Test tickets created by the probes/ACs: deleted through FX_Tickets on request (NextTicketNo is then set back too).

## Build log
- 2026-10-31: brief and plan written; waiting for approval.
- 2026-10-31: **approved** ("approved", chat, 2026-10-31), with design decisions 1–5 as written. Local work (step 2)
  runs before the tenant steps; step 1's tenant checks run right before step 3. Rollback source for the phase 3
  page and script: the BLD-015 files copied to the session scratchpad (`bld015-final/`) before any edit.
- 2026-10-31: **step 2, local work done** (nothing in the tenant yet).
  - `FX_ServiceDesk.cs.txt` (926 lines, flat copy longest line 90 characters, template lines 1–7 unchanged):
    - new `FX_SDUpdateTicket(ticketId, fieldsJson, me)` and `FX_SDCreateTicket(fieldsJson, me)`;
    - `FX_SDSetStatus(ticketId, status, resolution, me)` now checks FX_StatusTransitions, needs a Resolution for
      RESOLVED, and clears ResolvedOn + Resolution when leaving Done;
    - history rows through `FX_AddHistory` (HistoryID = max + 1 read with a `DESC` order, **unverified**);
    - the load adds transitions, history and the inline lists;
    - JSON input goes through `Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string,string>>` with
      `DateParseHandling.None`, written fully qualified.
  - Local compile check: both scripts compile with the .NET Framework 4 `csc` (C# 5) against stub Mongoose types,
    with no errors or warnings. This checks syntax and types only; the tenant compile decides.
  - `FX_Tickets.cs.txt`: FX_ResolveTicket, FX_ReopenTicket and their six constants removed, header updated. It
    gets installed in step 9. The BLD-009 copy is kept in `bld015-final/FX_Tickets.cs.bld009.txt`.
  - Page (`index.html`, `app.css`, `app.js`):
    - Create issue button and dialog;
    - Resolution dialog;
    - Edit mode in the detail pane;
    - Activity (changes + comments, newest first), and Recent activity on My work;
    - Dashboard view and sidebar item;
    - moves outside FX_StatusTransitions refused on the Board (drag, Move to…) and in the detail pane;
    - create, edit and move require Me.
  - Chart colours: the dataviz reference categorical slots 1–5 (`#2a78d6, #eb6834, #1baf7a, #eda100, #e87ba4`).
    The validator passes on a white surface. Its contrast WARN for slots 3–5 is covered by legends carrying each
    number.
  - `preview/stub.js`: the 10 transitions, 4 history rows, 70 generated tickets over 90 days (seeded), the new
    methods, and the `?fail=history` / `?empty=1` switches.
  - Preview test (Playwright, separate tab, closed afterwards), with 0 page errors throughout:
    - the period and Project filters change all four KPIs and the donut (30 days 35/21/19/18; 7 days 10/9/19/18;
      90 days 78/59/19/18; FAC 26/22/4/4);
    - the line-chart tooltip works;
    - OPEN → CLOSED is refused in the detail pane and on a Board drop, with "Open can move to: In progress,
      Waiting for customer.";
    - Move to… marks Resolved and Closed "Not allowed";
    - → Resolved opens the Resolution dialog, which refuses an empty pick;
    - Edit: an empty Summary shows an error next to the field (focus moves there); saving assignee + priority adds
      two Activity rows; switching tickets with unsaved edits is held back;
    - Create: empty Project, Summary and Reporter each show their own error; a valid create gets the next number
      and opens the ticket;
    - without Me, moves and creates are refused;
    - `?fail=history` shows the "saved, but its history row wasn't" warning;
    - Recent activity lists the latest 5;
    - no sideways scroll at 1440, 1024 or 768 px.
    - Screenshots: `p01`–`p07` in `evidence/BLD-016/` (preview, fake data).
  - Design review: the rules were fetched from vercel-labs/web-interface-guidelines; the fetch tool returned them as
    a summary, not verbatim. The findings and fixes are in the table below. `npm run flat` was run.
  - Size: `app.flat.js` is 80 KB (BLD-015: 44 KB). No asset size limit is known; the step-5 readback decides.

- 2026-10-31: **step 1, account check and absence gates** (read only).
  - Account: the Designer status bar shows `ScopeType: User` with the operator's own scope name, and the Web
    Client header shows the operator's account. This is not the read-only Mock account.
  - Form `FX_StatusTransitions`: the Web Client Select Form filter "FX_Status" lists only FX_Statuses (an existing
    Form, which also serves as the positive control) (`01-absence-form-selectform.png`). The Designer check comes in
    step 4.
  - IDOs (IdoCollections, Filter in Place, criterion in IDO Name, F4):
    - `FX_StatusTransitions` → empty grid (`03`/`04-absence-ido-transitions-*.png`);
    - `FX_TicketHistory` → empty grid (`05-absence-ido-history-*.png`);
    - positive control `FX_TicketComments` → found (`06-positive-control-ido-comments-*.png`).
    - Correction: the first re-query appended its text to the criterion that Filter in Place keeps, which made both
      queries invalid (the earlier `06-*` capture was overwritten). The corrected attempt clears the field first.
  - Sql Tables (grid criteria row only, Filter in Place, F4):
    - positive control `FX_TicketComments` → "SQL Tables 1 of 1" with PK CommentID
      (`08-positive-control-table-comments-*.png`);
    - `FX_StatusTransitions` and `FX_TicketHistory` → only the blue-star add-mode placeholder, so no rows
      (`09`/`10-absence-table-*.png`).
  - Both admin tabs were closed without saving; no prompt appeared.
  - The FX_Tickets before-state (components, handlers, Status Read-Only, script) is recorded right before step 9.
  - The FX_ServiceDesk script and asset baselines are read back right before the step-5 fills. The BLD-015 copies
    in `bld015-final/` remain the rollback source.

- 2026-10-31: **step 3, tables and IDOs created** (Designer › New › New Data › Maintenance, Create Scripts off,
  Create Form **No**, project FX_ServiceDeskProject, MultiView / GridLeft).
  - `FX_StatusTransitions` (alias `fxstr`): TransitionID Long Integer int, PK, Required, default `AUTONUMBER()`;
    FromStatus and ToStatus on class FX_StatusCode, Required. Finish → "Table and IDO created."
    (`11-transitions-wizard-page1.png`, `12-transitions-finish.png`, `13-transitions-created.png`; grid snapshot
    `evidence/playwright/bld016-transitions-page1.yml`).
  - `FX_TicketHistory` (alias `fxthi`): HistoryID Long Integer int, PK, Required, default `AUTONUMBER()`; TicketID
    String nvarchar 20 Required; FieldName String nvarchar 30 Required; OldValue and NewValue String nvarchar 200;
    ChangedBy class FX_AgentID (String nvarchar 30) Required. `14-history-wizard-page1.png` shows all six rows with
    the PK and Required ticks; it was read back from the grid before Next. Finish → "Create Form?" No → "Table and IDO
    created." (`15-history-created.png`) → Close.
  - Both IDOs checked in (Web Client › IDOs, Filter in Place on IDO Name): each was at Revision 1, locked by the
    operator → Check In → Revision **2**, Locked By empty, button now Check Out. Only the first check-in showed
    the "Source control integration is currently disabled…" notice (OK). See `16-transitions-ido-checkin.png` and
    `17-history-ido-checkin.png`.
  - Readback: IDO › Properties, every property "Bound to Column". FX_TicketHistory has HistoryID (key 1, Long
    Integer int), TicketID String 20, FieldName String 30, OldValue/NewValue String 200 and ChangedBy FX_AgentID,
    plus the standard CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag and InWorkflow
    (`18-history-ido-properties.png`). FX_StatusTransitions has TransitionID (key 1), FromStatus and ToStatus on
    FX_StatusCode, plus the standard columns (`19-transitions-ido-properties.png`). CreateDate exists, which the
    script's HistoryProps reads.
  - Deviation: the readback used IDO › Properties (the columns bound by the wizard) instead of Sql Tables › Columns.
    The step-4 data entry and the step-6 probe write to and read from the tables themselves.
  - Correction: the Select Form filter "IDOs" (Name, contains) matched only the `…IDOSetup` forms. Caption filter
    with exact "IDOs" found the IDOs form (IdoCollections).

- 2026-10-31: **step 4, Form `FX_StatusTransitions` and its 10 rows (AC-7).**
  - Designer (status bar `ScopeType: User`) → New → Category Classic (the option row "WinStudio classic form
    wizards") → Wizard Multi-View, both read back before OK.
    - Page 1: Name `FX_StatusTransitions`, Data Source IDO `FX_StatusTransitions` (picked from the list),
      MultiView / GridLeft / Default (`20-transitions-mv-page1.png`).
    - Page 2: Primary Collection already held FromStatus, ToStatus and TransitionID (`21-…-page2.png`).
    - Page 3: captions typed `From status`, `To status`, `ID` (`22-…-page3-captions.png`).
    - Final page: Save Template was **checked** by default; unchecked by its label and read back
      (`23-…-final-page.png`).
    - Finish → "Process Completed Successfully" (`24-transitions-form-created.png`) → OK. The Form opened as "User
      version for user <operator>", Save disabled, labels From status*, To status*, ID*
      (`25-transitions-form-in-designer.png`).
  - Close (no prompt) → Form menu recent `FX_StatusTransitions` → same labels, `ScopeType: User`
    (`26-transitions-form-reopened.png`).
  - Web Client:
    - Reloaded the portal tab so Select Form lists the new Form. A beforeunload prompt appeared; nothing was
      unsaved and it cleared itself.
    - The portal banner was dismissed with its ×. The header shows the operator's account.
    - The Form opened in add mode with ID `1` pre-filled (`AUTONUMBER()`, ID bound on the Form, as in BLD-009)
      (`27-transitions-runtime-empty.png`). From status / To status are dropdowns from FX_StatusCode, listing the
      five codes.
    - Rows were picked from the dropdowns, each read back before its Save; toolbar New for each next row. Each Save
      ended with Save disabled, no message, and "Object n of n".
    - Saved: OPEN→INPROG (1), OPEN→WAITING (2), INPROG→WAITING (3), WAITING→INPROG (4), INPROG→RESOLVED (5),
      WAITING→RESOLVED (6), RESOLVED→CLOSED (7), RESOLVED→INPROG (8), RESOLVED→OPEN (9), CLOSED→OPEN (10).
    - Correction: the first loop's option match with `\b` found no option on row 2 (nothing was saved; the row was
      still empty in add mode). The corrected attempt used the plain prefix match from row 1.
  - **AC-7 readback passes:**
    - Closed the Form tab (no prompt) → Open → Refresh → "Object 1 of 10";
    - the grid holds exactly the 10 rows above;
    - saved rows show ID greyed out (read-only key).
    - Evidence: `28-transitions-after-reopen.png`, rows in `28-transitions-after-reopen.txt`.

- 2026-10-31: **step 5, script and assets installed** (Designer, FX_ServiceDesk, `ScopeType: User`).
  - Script Editor (`#btnEditDownload`):
    - Rollback baseline: the Monaco model, line-trimmed and SHA-256 hashed, **equals** the BLD-015 copy
      `bld015-final/FX_ServiceDesk.flat.cs.txt` (454 lines) (`29-script-baseline.png`).
    - One fill from `FX_ServiceDesk.flat.cs.txt`. Readback hash **equal** to the source; 927 lines; line 7 is
      still `public class FX_ServiceDesk : FormScript`.
    - ▶ → Compile Result › Output **"Built with 0 errors at 9:35 AM."** (`30-script-compiled.png`; the panel opens
      only after clicking its "Compile Result" title).
    - OK → Save (enabled → disabled, no error box) (`31-script-saved.png`).
  - Assets (Edit › Web User Control Assets › FX_ServiceDesk › file › Content › Open Edit Property Dialog; the
    first "Open Edit Property Dialog" match is a hidden copy, so use the visible one):
    - Each baseline snapshot was checked with `compare-readback.js` and was **equal** to the BLD-015 copy:
      `32-index-baseline-editor.yml`, `34-appcss-baseline-editor.yml`, `36-appjs-baseline-editor.yml`.
    - Each file had one textarea fill from its `.flat` copy. The readback before OK was **equal: true**:
      `33-index-editor-before-ok.yml` (7,766 chars), `35-appcss-editor-before-ok.yml` (33,586),
      `37-appjs-editor-before-ok.yml` (80,480).
    - Then Edit Browser File OK → Global Objects OK → Save, once per file. Save was disabled afterwards with no
      message (`38-assets-saved.png`).
  - Close/reopen (tab closed, no prompt → Form menu recent FX_ServiceDesk):
    - script hash still **equal** (927 lines) (`39-reopen-script.png`) → Cancel, Save stayed disabled;
    - app.js `40-appjs-reopen-readback.yml` **equal: true**;
    - app.css and index.html still equal to their flat copies (whitespace-normalized, compared in the page).
  - The 80 KB app.js was stored and read back whole, so no asset size limit was hit.
  - Runtime cache:
    - `fetch(…, {cache: 'reload'})` from the page frame for app.js, app.css and index.html returned 80,480 /
      33,586 / 7,766 chars, the new files.
    - Closed the FX_ServiceDesk tab (no prompt) → Open → FX_ServiceDesk. The new page loaded: app.js 80,532 bytes,
      nav with Dashboard, the Create issue button, Me = the operator's agent (`41-runtime-first-load.png`).

- 2026-10-31: **step 6, probe: history insert passes.**
  - The SUP-3 Move menu (status WAITING) showed In progress and Resolved; Open and Closed were marked "Not
    allowed". This matches FX_StatusTransitions, so the load returned the server's rules.
  - In progress → console: `FX_SDSetStatus` result `{ok: true, ticket, history: Array(1)}` with no warning; the
    card moved to In progress (`42-probe-sup3-inprog-board.png`).
  - Then back to Waiting for customer (allowed from INPROG) → same result.
  - Refresh (full FX_SDLoad from the server) → SUP-3 detail › **Activity (2)**: "the operator's agent changed status
    In progress → Waiting for customer · this minute", then "… Waiting for customer → In progress · 1 minute ago",
    then "Dev Tech created the ticket" (`43-probe-sup3-activity.png`).
  - So both FX_TicketHistory rows were inserted with script-set HistoryIDs and read back.
- 2026-10-31: **step 7, probe: ticket insert passes.**
  - Create issue → Project IT Support; the hint said "Gets the next number: SUP-7".
  - Values: Service request; summary "FX test: printer on floor 2 jams on every job"; a description; Low; assignee
    agent.anna; reporter the operator's agent (default); Hardware; labels "printer, fx-test"
    (`44-probe-create-before-submit.png`).
  - Create → `FX_SDCreateTicket` `{ok: true, ticket, projects}`; the dialog closed. The detail pane shows **SUP-7**,
    Open, Service request, Low, Anna Agent, the labels, Activity "created the ticket"
    (`45-probe-created-sup7.png`).
  - Refresh → SUP-7 still listed; the Create hint for IT Support now says **SUP-8**.
  - Classic readback: FX_Projects → Refresh → SUP **Next ticket number 8**, FAC unchanged at 5
    (`46-probe-projects-nextno.png`).
  - SUP-7 is fake test data: it stays as an example ticket and is on the cleanup list.
- 2026-10-31: **step 8, go.** Both probes passed, so the rest goes ahead as designed. The rollback files in
  `bld015-final/` were not needed.

- 2026-10-31: **step 9, FX_Tickets changes (AC-5 passes).** Designer, FX_Tickets, `ScopeType: User`.
  - Before-state:
    - Details › Components, all expanded: `49-tickets-before-components.txt`, which includes FX_ResolveButton and
      FX_ReopenButton, both PushButton, Primary event FX_ResolveTicket / FX_ReopenTicket;
    - Event Handlers (`48-tickets-before-handlers.png`):
      - FX_NumberNewTicket 0 Form Script Method `FX_AssignTicketNo(P(TicketID),P(ProjectKey))`;
      - FX_ReopenTicket 0 Form Script Method `FX_ReopenTicket()` and 1 Generate event `StdFormSave( )`;
      - FX_ResolveTicket the same, with `FX_ResolveTicket()`;
    - StatusCombobox and StatusGridCol: Read-Only/Disable **False**;
    - script: Monaco hash **equal** to the BLD-009 copy `FX_Tickets.cs.bld009.txt`, 127 lines
      (`50-tickets-script-baseline.png`).
  - Buttons, each deleted separately:
    - Components grid row → the grid's own trash (bottom left of Details, checked by position; never the top
      toolbar) → "Are you sure you want to delete FX_ResolveButton and all the components it contains?" → OK →
      Save. Same for FX_ReopenButton.
    - Readback: no PushButton rows (`51-resolve-button-selected.png`, `52-buttons-deleted-saved.png`).
    - After the first delete the grid showed no buttons until it was expanded again; the expanded grid had only
      FX_ReopenButton left. Use an expanded readback.
  - Handlers (**probe, now observed**): Event Handlers row → toolbar trash (third button: + · copy · trash · up ·
    down) → "Are you sure you want to delete event handler FX_ResolveTicket (0)?" → Yes → Save.
    - The remaining action moved up to sequence 0.
    - Then FX_ResolveTicket (0) Generate event and FX_ReopenTicket (0) ×2, one Save each.
    - Only FX_NumberNewTicket is left (`53-handlers-deleted-saved.png`).
    - Correction: the first loop matched rows with `hasText` and found none (a row's text has no spaces between
      cells), so nothing was deleted. The corrected loop picks the row by its innerText index.
  - Script:
    - One fill from `FX_Tickets.flat.cs.txt` → ▶ "Built with 0 errors at 9:53 AM." (`54-tickets-script-compiled.png`)
      → OK → Save.
    - Readback note: the "longest model" shortcut picked the hidden diff editor's original copy (old script,
      127 lines). The visible editor (1393×533) held the new script, hash **equal** to the source, 97 lines. Read
      back the largest visible editor from now on.
  - Status: StatusCombobox and then StatusGridCol, each Properties › Behavior (double-click) › Read-Only/Disable
    picked **True**, checked in the header and the value before Save (`55-status-readonly-saved.png`).
  - Close/reopen (no prompt → Form menu recent FX_Tickets):
    - no PushButton; handlers only FX_NumberNewTicket (`56-tickets-reopened-handlers.png`);
    - StatusCombobox and StatusGridCol Read-Only/Disable **True** (`57-tickets-reopened-status-readonly.png`);
    - script 97 lines, hash equal, no FX_ResolveTicket / FX_ReopenTicket; Save stayed disabled.
    - The Script Editor button `#btnEditDownload` shows only with Properties › **Form** selected.
  - Runtime (Web Client → FX_Tickets → Refresh, "Object 1 of 10"), `58-tickets-runtime-ac5.png`:
    - Status is greyed out (`x-form-readonly`, dropdown trigger hidden), while Priority stays editable for
      comparison;
    - no Resolve / Reopen buttons;
    - the tab was closed without a prompt.

- 2026-10-31: **step 10, acceptance checks** (Web Client, FX_ServiceDesk, Me = the operator's agent, 1920×945
  unless noted).
  - **AC-1 passes.** Create issue with nothing filled → Create: "Pick a project.", "Summary is required." and "Pick a
    reporter." next to their fields, focus on Project, and no `FX_SDCreateTicket` call
    (`59-ac1-create-empty-errors.png`). Step 7's SUP-7 shows in Issues and in the Board's Open column.
  - **AC-2 passes.** SUP-7 › Edit: summary, description, assignee, priority, due date, category and labels changed
    (`60-ac2-edit-before-save.png`) → Save → the detail pane shows the new values (`61-ac2-ac3-after-save.png`).
    FX_Tickets → Refresh → SUP-7 shows all seven new values (`66-ac2-tickets-sup7-readback.png`; it also shows the
    AC-4 result: Status RESOLVED, Resolved on 10/31/2026, Resolution Fixed).
  - **AC-3 passes.** The edit added exactly one history row each for Assignee and Priority (none for the other five
    fields); Activity lists them newest first (`61-ac2-ac3-after-save.png`). My work › Recent activity shows the
    latest 5 changes and comments (`65-ac3-recent-activity.png`).
  - **AC-4 passes.**
    - Detail pane Move → Closed on SUP-7 (Open): refused with "SUP-7 is still Open. Can't move from Open to Closed.
      Open can move to: In progress, Waiting for customer." (`62-ac4-detail-refused.png`).
    - Board drag Open → Closed: the same message, the card stays in Open (`63-ac4-board-refused.png`).
    - Move to Resolved (via In progress): the Resolution dialog with nothing picked says "Pick a resolution." and
      saves nothing (`64-ac4-resolution-required.png`); Fixed → resolved.
  - **AC-6 passes.** Counted in FX_Tickets (Refresh, 10 rows) against the Dashboard:
    - All projects: Total 10, Resolved 4, Open 6, Overdue 2; donut Open 3 / In progress 2 / Waiting 1 / Resolved
      2 / Closed 2; the agent bars match the Assignee counts (`67-ac6-dashboard-all-7d.png`).
    - Project SUP: 7 / 3 / 4 / 2 (`68-ac6-dashboard-sup-30d.png`). The Project filter changed every card and chart.
    - Period 30 → 7 days (`69-ac6-dashboard-sup-7d.png`) changed the subtitle, the line chart (30 → 7 points) and
      the comparison text, but **not the counts**: every live ticket was created in the last 2 days, so all of
      them fall in both periods. The headless preview (`p01`, `p06`, ~90 days of stub tickets) showed the counts
      change with the period. See Deviations 4.
    - FAC-4 (the operator's own test ticket) has project SUP in FX_Tickets, so it counts under SUP. Noted, not
      changed (it is the operator's data).
  - **Tablet 1024×768** (browser resized, then back to 1920×945):
    - Dashboard: no horizontal scroll; the nav collapses to ☰ and Create issue to its + icon
      (`70-tablet-dashboard.png`).
    - Issue detail stacks under the list (`71-tablet-issue-detail.png`).
    - **Finding:** the Create dialog's Create/Cancel footer sits below the visible area
      (`72-tablet-create-dialog.png`). FX_ServiceDesk's Form Size is 960;680 px, so the page iframe (684 px, top at
      y 141) is taller than the space Mongoose gives it, and Mongoose scrolls the Form. The footer can be reached by
      scrolling the outer pane, but this is awkward. Not fixed; see Deviations 3.
- 2026-10-31: **step 11, readbacks and record.**
  - Designer close/reopen readbacks: every Designer object was closed, reopened and read back after its last Save
    (FX_StatusTransitions in step 4, FX_ServiceDesk script and assets in step 5, FX_Tickets in step 9). Nothing was
    changed in the Designer after those readbacks, so they were not repeated.
  - Approvals: none were needed (every object is new FX_ or factory-owned; no tenant-wide operation was run).
  - Objects, evidence, the design-review table (AC-8), deviations, cleanup and knowledge notes are below.

## Design review: web-design-guidelines (AC-8)
| Finding | Fix |
|---|---|
| index.html: Refresh and Create issue lose their visible text at narrow widths (label `display:none`), leaving no accessible name (Refresh: since phase 3) | `aria-label` + `title` on both |
| app.css: the line chart's hover dot and the empty tooltip were drawn while `hidden` (`display` overrode the attribute) | `.FX_Tip[hidden], .FX_Hover[hidden] { display: none }` |
| app.js: Edit mode was dropped silently when another ticket was selected (lost input) | switching is held back while there are unsaved edits, with "Save or cancel your changes to … first." |
| app.js: field errors stayed after the user corrected the field | typing clears that field's error and `aria-invalid` |
| app.js: the chart hover recounted the whole dashboard on every pointer move | it reuses the numbers on screen |
| app.css: the dialog body scroll could chain to the page | `overscroll-behavior: contain` on the dialog body |
| app.css: Create issue label wrapped onto two lines at tablet width | `white-space: nowrap`; label hidden ≤1000 px (name kept by `aria-label`) |
| app.css (found by the test): the Type field was stretched to the row height beside the Project hint | form grid `align-items: start` |
| Not changed: Title Case for headings and buttons | sentence case is kept, matching phase 3 and the Classic Forms |
| Checked, no change needed: form controls labelled (`<label for>`) and named; inline errors tied to fields with `aria-describedby`; the line chart has a pointer crosshair plus a table of the numbers per day; the donut and bars carry their numbers in legends or rows; up/down changes carry an arrow and hidden "Up/Down" text, not colour alone; `…` in loading text and placeholders; dates through `Intl`; tabular numbers; dialogs use native `<dialog>` (focus trap, Escape); unsaved Edit/Create input is covered by the `beforeunload` warning; the oldest-tickets rows open through a real button in the first cell | — |

## Deviations
1. **Step 3 readback route.** The new tables' columns were read back through the IDOs form › Properties (name, type,
   property class, Required) instead of Sql Tables › Columns. Same facts, different form.
2. **Step 9 readback.** The "longest Monaco model" shortcut read the hidden diff editor (old script). The decisive
   readback is the largest visible editor; the playbook note is in the knowledge list below.
3. **Tablet height (open).** At 1024×768 the Create dialog footer is below the visible area because the Form Size
   (960;680) is taller than the space left by the portal header. Proposed fix, **unverified**: lower the Form
   Size height of FX_ServiceDesk in the Designer (factory-owned, User scope), or cap the dialog height in `app.css`
   to the iframe's visible height. Not done in this build; it needs the operator's go-ahead as a follow-up.
4. **Period filter on live data.** The counts can't differ between 7, 30 and 90 days on the live tenant yet, because
   all live tickets are 0–2 days old. The period filter's effect on the counts is proven on the preview stub only;
   on the tenant only the subtitle, the line chart and the comparison text were seen to change.

## Cleanup list (test data and objects; kept until the operator decides)
- Ticket SUP-7 (fake, created in step 7, edited and resolved in step 10) and its FX_TicketHistory rows; SUP's
  NextTicketNo goes back to 7 if SUP-7 is deleted.
- The two SUP-3 history rows from the step 6 probe (SUP-3 itself is back at Waiting for customer).
- The 10 FX_StatusTransitions rows (they are the live rules; deleting them makes every move refused).
- Full rollback of the build: § Rollback / cleanup above. FX_Tickets rollback: Status Read-Only back to False on
  StatusCombobox and StatusGridCol; re-add FX_ResolveButton / FX_ReopenButton with their handlers (BLD-009 step 11,
  before-state in `49-tickets-before-components.txt` and `48-tickets-before-handlers.png`); reinstall the BLD-009
  script (`evidence/BLD-016/rollback-bld015/FX_Tickets.cs.bld009.txt`, hash equal to the step 9 baseline).
- Rollback sources for the phase 3 page and script (BLD-015 flat files): `evidence/BLD-016/rollback-bld015/`.

## Knowledge notes (proposed upgrades; recipes not edited)
- Deleting a Classic Form event handler (Event Handlers toolbar trash → "delete event handler NAME (n)?" → Yes →
  Save; the remaining actions renumber from 0): **observed** (step 9, 4 deletes, persisted after reopen).
- Asset fill with Playwright `locator.fill(text)` on the Edit Browser File textarea, text fetched from the local
  static server, then compare-readback before OK and after reopen: worked for four files up to 80 KB in BLD-015 and
  again here → candidate for **verified** in `playbooks/web-user-controls.md`.
- Script readback: read the **largest visible** Monaco editor; the hidden diff editor holds the old text. Add to
  `playbooks/events-and-scripts.md`.
- `#btnEditDownload` (Script Editor) shows only with Properties › Form selected.
- Classic Multi-View wizard for a new Form (Form Wizard Selection → "WinStudio classic form wizards" → Multi-View;
  uncheck Save Template): **observed** (step 4).
- Inserting rows into a new table with a script-set key (max + 1), and a ticket insert plus NextTicketNo update in
  one script call: **observed** (steps 6–7).
