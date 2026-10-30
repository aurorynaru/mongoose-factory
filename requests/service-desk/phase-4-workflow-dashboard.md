# Service desk, phase 4 of 4: workflow rules, ticket history and the dashboard

Needs phases 1 to 3 accepted. Screenshot: `mocks/service-desk/dashboard.png`. Paste the text block below as one
message, and attach the screenshot.

```text
/mongoose-builder

## 1. Goal (required)
What I want, in one or two sentences: Phase 4 of 4 of the service desk app: allowed status moves and a history row for every change on a ticket, a History Form opened from the ticket, and a Dashboard page in the FX_ServiceDesk portal with KPIs and charts (plan in requests/service-desk/README.md).
Who uses it and for what: Agents see who changed what on a ticket and can only move tickets along the allowed steps; team leads watch the dashboard. For now only I use it, while it's being built.

## 2. Build type (required, pick one or more)
[x] new Form            [x] new IDO + SQL table     [ ] new portal / shell (Flex) Form
[x] dashboard / chart   [ ] web page (HTML/JS/CSS asset)   [x] change an existing factory object (built with this prefix)
[ ] change an existing object the factory didn't build (name it in section 6)
New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead: Classic

## 3. Names
Prefix (every new object name starts with it; keep FX_ unless you want another): FX_
Form name(s) (FX_…): FX_TicketHistory, FX_StatusTransitions, FX_Tickets, FX_ServiceDesk
IDO / table name(s) (FX_…): FX_TicketHistory, FX_StatusTransitions
Asset folder (FX_…/index.html): FX_SDDashboard/index.html (new), FX_SDBoard/index.html (changed)
Leave blank and Claude will propose names in the plan for you to approve.

## 4. Details by type

### 4a. IDOs / tables (one block per table)
#### Table 1
Table / IDO name (FX_…): FX_StatusTransitions
Is the data in an existing IDO? (name it, or "new"): new
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
- TransitionID | number |  | required | key | AUTONUMBER()
- FromStatus | text | 20 | required | not key | 
- ToStatus | text | 20 | required | not key | 
Relations / lookups (field → other table or IDO): FromStatus → FX_Statuses; ToStatus → FX_Statuses
Calculated fields (formula in words): none
Test rows to create (fake data only): 10 rows (from → to): OPEN → INPROG; OPEN → WAITING; INPROG → WAITING; WAITING → INPROG; INPROG → RESOLVED; WAITING → RESOLVED; RESOLVED → CLOSED; RESOLVED → INPROG; RESOLVED → OPEN; CLOSED → OPEN

#### Table 2
Table / IDO name (FX_…): FX_TicketHistory
Is the data in an existing IDO? (name it, or "new"): new
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
- HistoryID | number |  | required | key | AUTONUMBER()
- TicketID | text | 20 | required | not key | 
- FieldName | text | 30 | required | not key | 
- OldValue | text | 200 | optional | not key | 
- NewValue | text | 200 | optional | not key | 
- ChangedBy | text | 30 | required | not key | 
Relations / lookups (field → other table or IDO): TicketID → FX_Tickets
Calculated fields (formula in words): none
Test rows to create (fake data only): none (rows come from real changes made while testing)

### 4b. Forms (one block per Form)
#### Form 1
Form name (FX_…): FX_TicketHistory
Data it shows (IDO): FX_TicketHistory
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): opened by a button on another Form
Connects to (which Form): FX_Tickets
Linked by (what it passes or filters on): the selected ticket's TicketID; shows only that ticket's rows, newest first
Layout: [ ] grid + detail   [x] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
- When (the system created date)
- Field (FieldName)
- From (OldValue)
- To (NewValue)
- By (ChangedBy)
Read-only fields: all
Dropdowns / validation (field → allowed values or source): none
Second grid on this Form (another IDO, e.g. the selected row's lines): none
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

#### Form 2
Form name (FX_…): FX_StatusTransitions
Data it shows (IDO): FX_StatusTransitions
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): on its own
Layout: [x] grid + detail   [ ] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
- From status (FromStatus, showing StatusName)
- To status (ToStatus, showing StatusName)
Read-only fields: none
Dropdowns / validation (field → allowed values or source): From status and To status → FX_Statuses in SortOrder
Second grid on this Form (another IDO, e.g. the selected row's lines): none
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

### 4d. Web page / dashboard
Data shown (which IDO or API, which fields): FX_Tickets (TicketID, ProjectKey, Summary, Status, Priority, Assignee, DueDate, ResolvedOn and the system created date), FX_Statuses (Category, IsClosed), FX_Priorities (PriorityName, ResolveHours), FX_Agents (DisplayName)
KPI cards / charts / tables (what each one counts or shows): KPI cards: Open tickets (status category not Done); Overdue (open, and DueDate before today or created more than the priority's ResolveHours ago); Unassigned (open, no Assignee); Resolved in the last 7 days. Charts: open tickets by priority (bars); tickets created and resolved per day over the last 14 days (two lines); open tickets per assignee (bars). Table: the 10 oldest open tickets (ID, summary, priority, assignee, age in days); clicking a row opens it in FX_Tickets if that works like the Home tiles.
Filters, sorting, refresh: a Project filter (all / SUP / FAC …) for every card, chart and the table; a Refresh button
API calls (endpoint + verb). Only approved calls run; new ones need my approval here: none

## 5. Look and feel
Mock screenshot / reference (attach or give a path): mocks/service-desk/dashboard.png
Colors / theme / fonts (or "match <an existing page>"): match FX_SDBoard (the same colours as the shell and board)
Must work on: [x] desktop  [x] tablet  [ ] phone

## 6. Scope, approvals and limits
Final scope for Forms (User / Group <name> / Site) — default User; Group or Site is saved only after the User-scope version passes: User
Group/Site save approved: not needed (User scope)
Existing objects the factory didn't build that may be changed (name each one, or "none"): none
Other tenant-wide steps allowed (FormSync, deployment, metadata cache unload) — default none: none
Outbound calls allowed (exact endpoint + verb) — default none beyond those already approved: none
Data I must not touch: everything whose name doesn't start with FX_

## 7. Done means (required)
I will accept it when (list what I can see or do at runtime):
- Changing a ticket's Status, Assignee or Priority and saving adds one FX_TicketHistory row per changed field (old value, new value, who).
- The History button on FX_Tickets opens FX_TicketHistory with only that ticket's rows, newest first.
- A status move that isn't in FX_StatusTransitions (e.g. OPEN → CLOSED) is refused with a message saying which moves are allowed, on FX_Tickets and on the board.
- Moving a ticket to RESOLVED without a Resolution is refused with a message.
- The portal has a Dashboard page; its cards and charts match counts I check in FX_Tickets, and the Project filter changes them all.
- The Admin page has a button that opens FX_StatusTransitions.

## 8. Anything else
Known problems, deadlines, things to avoid: Changes to factory-owned objects from earlier phases (record each one's current state first, so it can be rolled back): FX_Tickets gets the rules above, the history writes and a History button; FX_ServiceDesk gets a Dashboard page and menu item, and an Admin button for FX_StatusTransitions; FX_SDBoard checks the allowed moves before saving a dragged card, and shows the message when a move isn't allowed. Resolve and Reopen on FX_Tickets must follow the same rules. Writing history rows from a form script, and opening FX_TicketHistory filtered by the selected ticket, are new here: run each as a small probe first. The dashboard uses three files (index.html, app.css, app.js) and a preview/stub.js with fake data. The screenshot is for layout only: no other product's name, logo or icons.

## 9. Evidence and guide
Evidence: full
Guide with pictures: none
```
