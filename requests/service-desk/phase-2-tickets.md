# Service desk, phase 2 of 4: tickets, comments and the ticket Form

Needs phase 1 accepted (the four setup tables and their test rows). Screenshot: `mocks/service-desk/ticket-list.png`.
Paste the text block below as one message, and attach the screenshot.

```text
/mongoose-builder

## 1. Goal (required)
What I want, in one or two sentences: Phase 2 of 4 of the service desk app: the tickets and ticket comments tables, and the FX_Tickets Form to list, open and work tickets, with the selected ticket's comments under it, Resolve / Reopen buttons and automatic ticket numbers (plan in requests/service-desk/README.md).
Who uses it and for what: Service desk agents log tickets, update them and add comments. For now only I use it, while it's being built.

## 2. Build type (required, pick one or more)
[x] new Form            [x] new IDO + SQL table     [ ] new portal / shell (Flex) Form
[ ] dashboard / chart   [ ] web page (HTML/JS/CSS asset)   [ ] change an existing factory object (built with this prefix)
[ ] change an existing object the factory didn't build (name it in section 6)
New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead: Classic

## 3. Names
Prefix (every new object name starts with it; keep FX_ unless you want another): FX_
Form name(s) (FX_…): FX_Tickets
IDO / table name(s) (FX_…): FX_Tickets, FX_TicketComments
Asset folder (FX_…/index.html):
Leave blank and Claude will propose names in the plan for you to approve.

## 4. Details by type

### 4a. IDOs / tables (one block per table)
#### Table 1
Table / IDO name (FX_…): FX_Tickets
Is the data in an existing IDO? (name it, or "new"): new
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
- TicketID | text | 20 | required | key | 
- ProjectKey | text | 10 | required | not key | 
- TicketType | text | 20 | required | not key | Incident
- Summary | text | 200 | required | not key | 
- Description | text | 2000 | optional | not key | 
- Status | text | 20 | required | not key | OPEN
- Priority | text | 10 | required | not key | MEDIUM
- Reporter | text | 30 | required | not key | 
- Assignee | text | 30 | optional | not key | 
- Category | text | 40 | optional | not key | 
- Labels | text | 200 | optional | not key | 
- DueDate | date |  | optional | not key | 
- ResolvedOn | date |  | optional | not key | 
- Resolution | text | 40 | optional | not key | 
Relations / lookups (field → other table or IDO): ProjectKey → FX_Projects; Status → FX_Statuses (shows StatusName); Priority → FX_Priorities (shows PriorityName); Reporter → FX_Agents; Assignee → FX_Agents
Calculated fields (formula in words): TicketID of a new ticket = its ProjectKey + "-" + that project's NextTicketNo (e.g. SUP-6), set when the new ticket is first saved; NextTicketNo in FX_Projects then goes up by 1.
Test rows to create (fake data only): 8 tickets: SUP-1 to SUP-5 and FAC-1 to FAC-3, spread over every status and priority, some unassigned, two with a DueDate in the past, every Reporter and Assignee from FX_Agents. Summaries like "Laptop won't start", "Need access to the shared drive", "Meeting room light flickers". RESOLVED and CLOSED ones have ResolvedOn and a Resolution.

#### Table 2
Table / IDO name (FX_…): FX_TicketComments
Is the data in an existing IDO? (name it, or "new"): new
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
- CommentID | number |  | required | key | AUTONUMBER()
- TicketID | text | 20 | required | not key | 
- Author | text | 30 | required | not key | 
- CommentText | text | 2000 | required | not key | 
- IsInternal | yes-no |  | required | not key | 0
Relations / lookups (field → other table or IDO): TicketID → FX_Tickets; Author → FX_Agents
Calculated fields (formula in words): none
Test rows to create (fake data only): 6 comments on SUP-1, SUP-2 and FAC-1, two of them internal.

### 4b. Forms (one block per Form)
#### Form 1
Form name (FX_…): FX_Tickets
Data it shows (IDO): FX_Tickets
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): on its own
Layout: [x] grid + detail   [ ] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
- Ticket (TicketID)
- Project (ProjectKey)
- Type (TicketType)
- Summary
- Description
- Status (showing StatusName)
- Priority (showing PriorityName)
- Reporter
- Assignee
- Category
- Labels
- Due date (DueDate)
- Resolved on (ResolvedOn)
- Resolution
Read-only fields: Ticket, Resolved on
Dropdowns / validation (field → allowed values or source): Project → FX_Projects (active only); Type → Incident, Service request, Problem, Change, Task; Status → FX_Statuses in SortOrder; Priority → FX_Priorities in SortOrder; Reporter and Assignee → FX_Agents (active only, by name); Category → Hardware, Software, Access, Network, Facilities, Other; Resolution → Fixed, Workaround, Duplicate, Won't do, Cannot reproduce
Second grid on this Form (another IDO, e.g. the selected row's lines): Comments of the selected ticket (FX_TicketComments): Author, Comment (CommentText), Internal (IsInternal), Posted (the system created date, read only). New comments can be added in this grid.
Buttons — one per line: caption | what happens when clicked | what the user sees after
- Resolve | sets Status to RESOLVED and Resolved on to today, then saves | Status shows Resolved and the ticket is saved
- Reopen | sets Status to OPEN and clears Resolved on and Resolution, then saves | Status shows Open and the ticket is saved

## 5. Look and feel
Mock screenshot / reference (attach or give a path): mocks/service-desk/ticket-list.png (layout guide for the list and the detail; keep within what a Classic Form can do)
Colors / theme / fonts (or "match <an existing page>"): default Mongoose theme
Must work on: [x] desktop  [ ] tablet  [ ] phone

## 6. Scope, approvals and limits
Final scope for Forms (User / Group <name> / Site) — default User; Group or Site is saved only after the User-scope version passes: User
Group/Site save approved: not needed (User scope)
Existing objects the factory didn't build that may be changed (name each one, or "none"): none
Other tenant-wide steps allowed (FormSync, deployment, metadata cache unload) — default none: none
Outbound calls allowed (exact endpoint + verb) — default none beyond those already approved: none
Data I must not touch: everything whose name doesn't start with FX_

## 7. Done means (required)
I will accept it when (list what I can see or do at runtime):
- FX_Tickets opens from the Web Client and shows the 8 test tickets; every dropdown lists values from the phase 1 tables.
- A new ticket in project SUP gets TicketID SUP-6 when I save it, and FX_Projects then shows Next ticket number 7 for SUP.
- Selecting a ticket shows only its comments; a comment I add is still there after close/reopen.
- Resolve and Reopen change Status (and Resolved on) and the change is still there after close/reopen.
- Saving a ticket without a Summary, Project or Reporter is refused with a message.

## 8. Anything else
Known problems, deadlines, things to avoid: Ticket numbering is new here: run it as a small probe first (one test ticket), and if it can't be done safely, say so and propose another way before building on it. Keep the table, column and Form names exactly as written: phases 3 and 4 rely on them. Use the system created date for "Posted"; don't add your own date columns. The screenshot is for layout only: no other product's name, logo or icons. Put the IDOs in FX_ServiceDeskProject (from phase 1). Test data is fake only.

## 9. Evidence and guide
Evidence: full
Guide with pictures: none
```
