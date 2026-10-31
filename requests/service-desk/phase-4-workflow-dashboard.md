# Service desk, phase 4 of 4: workflow rules, history, create and edit in the app, and the dashboard

Needs phases 1 to 3 accepted, including phase 3's write probe. Screenshots: `mocks/service-desk/dashboard.png`
(and `ticket-list.png` again for the activity in the detail pane). Paste the text block below as one message, and
attach the screenshots.

```text
/mongoose-builder

## 1. Goal (required)
What I want, in one or two sentences: Phase 4 of 4 of the service desk app: allowed status moves and a history row for every ticket change, creating and editing tickets inside the Service Desk web app, an activity feed, and a Dashboard view with KPIs and charts (plan in requests/service-desk/README.md).
Who uses it and for what: Agents create and update tickets in the app and can only move them along the allowed steps; everyone sees who changed what; team leads watch the dashboard. For now only I use it, while it's being built.

## 2. Build type (required, pick one or more)
[x] new Form            [x] new IDO + SQL table     [ ] new portal / shell (Flex) Form
[x] dashboard / chart   [ ] web page (HTML/JS/CSS asset)   [x] change an existing factory object (built with this prefix)
[ ] change an existing object the factory didn't build (name it in section 6)
New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead: Classic

## 3. Names
Prefix (every new object name starts with it; keep FX_ unless you want another): FX_
Form name(s) (FX_…): FX_StatusTransitions, FX_ServiceDesk, FX_Tickets
IDO / table name(s) (FX_…): FX_StatusTransitions, FX_TicketHistory
Asset folder (FX_…/index.html): FX_ServiceDesk/index.html (changed)
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
Relations / lookups (field → other table or IDO): TicketID → FX_Tickets; ChangedBy → FX_Agents
Calculated fields (formula in words): none
Test rows to create (fake data only): none (rows come from the changes made while testing)

### 4b. Forms (one block per Form)
#### Form 1
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
Data shown (which IDO or API, which fields): the Dashboard view in FX_ServiceDesk: FX_Tickets (Status, Priority, Assignee, ProjectKey, DueDate, ResolvedOn, the system created date), FX_Statuses (Category, IsClosed), FX_Priorities (ResolveHours), FX_Agents (DisplayName), read through the same C# form script
KPI cards / charts / tables (what each one counts or shows):
A new "Dashboard" item in the sidebar opens the Dashboard view.
Four KPI cards, each with the change against the previous period of the same length: Total tickets (created in the period); Resolved (ResolvedOn in the period); Open now (status category not Done); Overdue (open, and DueDate past or created more than the priority's ResolveHours ago).
"Ticket activity": tickets created and resolved per day in the period (two lines with a legend).
"Tickets by status": a donut with the total in the middle and a legend with each status and its count.
"Resolved per agent": one bar per agent with the number resolved in the period and its share.
"Oldest open tickets": the 10 oldest open tickets (ID, summary, priority, assignee, age in days); clicking a row opens it in the Issues view.
Filters, sorting, refresh: a period picker (Last 7 / 30 / 90 days, default 30) and a Project filter that apply to every card and chart; the top bar's Refresh reloads them
API calls (endpoint + verb). Only approved calls run; new ones need my approval here: none

## 5. Look and feel
Mock screenshot / reference (attach or give a path): mocks/service-desk/dashboard.png (Dashboard view), mocks/service-desk/ticket-list.png (detail pane, for where Activity goes). A guide, not a 1:1 copy: see section 8.
Colors / theme / fonts (or "match <an existing page>"): match the phase 3 FX_ServiceDesk page (same colours, type and components)
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
- "Create issue" in the app creates a ticket with the next number of its project (e.g. SUP-7); it shows in Issues and on the Board; leaving Summary, Project or Reporter empty shows a message next to that field and saves nothing.
- Editing a ticket in the detail pane (summary, description, assignee, priority, due date, category, labels) saves it, and FX_Tickets shows the change after Refresh.
- Every saved change to Status, Assignee or Priority adds one FX_TicketHistory row per field (old value, new value, who); the detail pane's Activity lists them newest first, and My work's "Recent activity" shows the latest 5 changes and comments.
- A status move that isn't in FX_StatusTransitions (e.g. OPEN → CLOSED) is refused with a message naming the allowed moves, on the Board and in the detail pane; moving to Resolved without a Resolution asks for one first.
- In the Classic FX_Tickets Form, Status is read-only and the Resolve / Reopen buttons are gone, so status only changes through the app's rules.
- The Dashboard's numbers match what I count in FX_Tickets, and the period and Project filters change every card and chart.
- FX_StatusTransitions opens from the Web Client and shows the 10 test rows.
- The build record lists the web-design-guidelines review findings and how each one was fixed.

## 8. Anything else
Known problems, deadlines, things to avoid:
Changes to factory-owned objects from earlier phases (record each one's current state first, so it can be rolled back):
FX_ServiceDesk page and C# script: the rules above, enforced in the C# script so every route goes through them; history rows written by the same script; "Create issue" in the top bar (a dialog with Project, Type, Summary, Description, Priority, Assignee, Reporter defaulting to me, Due date, Category, Labels; ticket numbering as in phase 2); an Edit mode in the detail pane; an Activity section in the detail pane (changes and comments, newest first); "Recent comments" on My work becomes "Recent activity"; the Dashboard view and sidebar item.
FX_Tickets (Classic): Status read-only; remove the Resolve and Reopen buttons.
These writes use the same IDOClient.UpdateCollection route that phase 3 proved. Creating a row (a new ticket, a history row) wasn't part of that probe, so probe one insert first and read it back.
The mock is a guide, not a 1:1 copy. Keep: the KPI cards with their change line, the created/resolved line chart with a period picker, the status donut with its legend, the per-agent bars. Changed: "Completed" becomes "Resolved"; "Team performance" becomes "Resolved per agent"; "Sprint health" becomes "Oldest open tickets". Leave out: Export report, sprints, story points, cycle time, "View team", the "…" menus.
Design: load .claude/skills/frontend-design/SKILL.md for every visual choice the mock leaves open, and review the changed index.html, app.css and app.js with .claude/skills/web-design-guidelines/SKILL.md before installing; fix what it finds in the local preview; if its rules can't be fetched, tell me. app.css keeps its media queries. Charts are inline SVG, drawn from the data (no chart library, no CDN), each with a text alternative (its numbers in a table or the legend). No "nexa" name, logo or any other product's branding.
Update preview/stub.js with fake history, transitions and enough tickets over the last 90 days to fill the charts, and run everything in the local preview before installing.

## 9. Evidence and guide
Evidence: full
Guide with pictures: none
```
