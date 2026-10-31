# Service desk, phase 3 of 4: the Service Desk web app (My work, Projects, Issues, Board)

Needs phases 1 and 2 accepted. Before sending: add **your own Mongoose user name** as an agent in FX_Agents and
assign two or three tickets to it (you do this in the Forms, so the prompt never contains your user name).
Screenshots: `mocks/service-desk/home.png`, `ticket-list.png`, `board.png`. Paste the text block below as one
message, and attach the three screenshots.

```text
/mongoose-builder

## 1. Goal (required)
What I want, in one or two sentences: Phase 3 of 4 of the service desk app: the Service Desk web app, one custom web page in the full-width Flex Form FX_ServiceDesk, with a sidebar and four views (My work, Projects, Issues with a detail pane, Board) over the phase 1–2 tables. In this phase the page can change a ticket's status and add comments (plan in requests/service-desk/README.md).
Who uses it and for what: Service desk agents work their tickets here every day: see what's theirs, find a ticket, read and comment on it, and move it along the board. For now only I use it, while it's being built.

## 2. Build type (required, pick one or more)
[x] new Form            [ ] new IDO + SQL table     [ ] new portal / shell (Flex) Form
[ ] dashboard / chart   [x] web page (HTML/JS/CSS asset)   [ ] change an existing factory object (built with this prefix)
[ ] change an existing object the factory didn't build (name it in section 6)
New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead:

## 3. Names
Prefix (every new object name starts with it; keep FX_ unless you want another): FX_
Form name(s) (FX_…): FX_ServiceDesk
IDO / table name(s) (FX_…):
Asset folder (FX_…/index.html): FX_ServiceDesk/index.html
Leave blank and Claude will propose names in the plan for you to approve.

## 4. Details by type

### 4b. Forms (one block per Form)
#### Form 1
Form name (FX_…): FX_ServiceDesk
Data it shows (IDO): none bound to the Form; the page reads FX_Tickets, FX_TicketComments, FX_Projects, FX_Agents, FX_Statuses and FX_Priorities through the Form's C# script
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): on its own
Layout: [ ] grid + detail   [ ] grid only   [ ] detail only   [x] other: one UserControl, FX_ServiceDeskControl, filling the whole Form and showing FX_ServiceDesk/index.html
Fields shown, in order (with captions as the user should see them):
- none (everything is inside the web page)
Read-only fields: none
Dropdowns / validation (field → allowed values or source): none
Second grid on this Form (another IDO, e.g. the selected row's lines): none
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

### 4d. Web page / dashboard
Data shown (which IDO or API, which fields):
FX_Tickets (every column, plus the system created and updated dates and users); FX_TicketComments (every column, plus the system created date); FX_Projects; FX_Agents; FX_Statuses (for status names, colours by Category, and board column order); FX_Priorities (names and order).
The page reads them through the C# form script FX_ServiceDesk.cs.txt. It writes two things only: a ticket's Status, and a new FX_TicketComments row.
KPI cards / charts / tables (what each one counts or shows):
App frame (every view): left sidebar with the app name "Service Desk" and a simple mark of its own; navigation My work, Projects, Issues (with a count of open tickets), Board; a "Your projects" list of active projects with a colour dot each (clicking one filters Issues and Board to it); the signed-in agent at the bottom (initials, name, role). Top bar: breadcrumb (Service Desk / view), a search box (ticket ID or summary; Enter opens Issues with that search), the signed-in agent's initials, a Refresh button.
My work view: today's date and "Good morning/afternoon/evening, <first name>"; four KPI cards: Assigned to me (open), Due this week (mine), Resolved this week (by me), Overdue (mine, open, due date past); a "Team queue" card with tabs To do and In progress (open tickets of everyone by status category, highest priority then earliest due first, each row: type icon, summary, ID · project, status pill, due date in red when past, assignee initials) and a "View all issues" link; an "Unassigned" card with the 5 oldest unassigned open tickets; a "Recent comments" card (the 5 latest comments: who commented on which ticket, how long ago); a "Your projects" row of project cards (name, key, open tickets, lead).
Projects view: one card per active project (key, name, description, lead, open and overdue counts); clicking a card opens Issues filtered to that project.
Issues view: title "Issues" (with the project name when filtered); tabs All issues (with count), Assigned to me, Recently updated (last 7 days), Resolved; a search box, Status, Priority and Assignee filters, and "Showing x of y". Left: the ticket list (type icon, summary, ID, priority flag, status pill, assignee initials; the selected row is highlighted). Right: the detail pane for the selected ticket: project / ID breadcrumb, summary as the title, status and type pills, a Status dropdown (changing it saves the ticket), Description, Details (Assignee, Priority, Reporter, Due date, Category, Labels), Comments (author, time ago, text; internal ones marked) with a box to add a comment and an Internal switch, and a footer "Created <date> · Updated <time ago>".
Board view: title "Board" (with the project name when filtered); a search box, Assignee (All / Me / Unassigned) and Type filters; one column per status in SortOrder with its count (the Closed column shows only tickets closed in the last 14 days). Each card: project name, summary, Category chip, type icon, ticket ID, priority flag, assignee initials, due date in red when past. Dragging a card to another column changes that ticket's Status and saves it; each card also has a "Move to…" menu that does the same with the keyboard.
Filters, sorting, refresh: as described per view. Refresh in the top bar reloads every list. The page remembers the last view and filters in this browser only.
API calls (endpoint + verb). Only approved calls run; new ones need my approval here: none

## 5. Look and feel
Mock screenshot / reference (attach or give a path): mocks/service-desk/home.png (app frame and My work), mocks/service-desk/ticket-list.png (Issues), mocks/service-desk/board.png (Board). A guide, not a 1:1 copy: see section 8 for what is kept, changed and left out.
Colors / theme / fonts (or "match <an existing page>"): follow the mocks: light background, white cards, one blue accent, soft status and priority colours, rounded cards with thin borders
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
- FX_ServiceDesk opens from the Web Client and the page fills the whole Form at desktop width; at tablet width the layout adapts (the sidebar collapses to icons or a menu button) without sideways scrolling.
- My work shows my name, and its four KPI numbers match what I count in FX_Tickets.
- Issues: the tabs, search and filters change the list and "Showing x of y"; selecting a ticket shows its details and only its comments.
- Changing Status in the detail pane saves it: FX_Tickets shows the new status after Refresh. A comment I add appears in FX_Tickets' comments grid.
- Board: one column per status with the right counts; dragging a card, or using "Move to…", changes its status, and it stays there after Refresh.
- Projects: one card per active project with the right counts; clicking one filters Issues and Board.
- The build record lists the web-design-guidelines review findings and how each one was fixed.

## 8. Anything else
Known problems, deadlines, things to avoid:
Create the Form with playbooks/portal-shell.md § "Flex Form for one full-width web page": Category Flex, Wizard Basic, Unit Pixel, then Edit FlexLayout Attributes, delete regions 1 and 2, region 0 Orientation Fill. Pick each of those values by clicking the dropdown, never by typing. That procedure is new to the factory: read back Unit, the region count and Orientation, Save and reopen before going on.
New here, so run each as a small probe first and stop to tell me if one fails: (1) writing from the C# script with IDOClient.UpdateCollection: change the Status of one test ticket, then read it back in FX_Tickets; if it can't be done safely, propose another way before building on it; (2) reading the signed-in user name; if it can't be read, propose a "Me" agent picker that the page remembers.
The mocks are a guide, not a 1:1 copy. Keep: the sidebar and top bar, greeting and KPI cards, the Issues tabs, filters and list with the detail pane, the board columns and cards. Changed: the sprint card becomes "Unassigned"; "Completed this sprint" becomes "Resolved this week"; "Projects in progress" becomes "Overdue"; subtasks become Comments; label chips show Category; "In review" and the other columns come from FX_Statuses. Leave out: the workspace switcher, Calendar, sprints and story points, Sprint insights, Board settings, Quick filters, the avatar-stack filter, Attach, Export, the notifications bell, the help card, the ⌘K shortcut, the "…" menus. Create issue and the Dashboards view come in phase 4: leave them out of this phase.
Design: load .claude/skills/frontend-design/SKILL.md and use it for every visual choice the mocks leave open (type scale, spacing, hover/focus/empty/error states, wording). Before installing, review index.html, app.css and app.js with .claude/skills/web-design-guidelines/SKILL.md and fix what it finds in the local preview; if its rules can't be fetched, tell me. app.css must have media queries. The app is called "Service Desk": no "nexa" name, logo or any other product's branding. System fonts only and inline SVG icons (no CDN, playbooks/web-user-controls.md).
Files: FX_ServiceDesk/ with index.html, app.css, app.js, FX_ServiceDesk.cs.txt and preview/stub.js (fake data matching the phase 1–2 test rows), started from assets/_template. Build and review it in the local preview (npm run preview) before installing anything.

## 9. Evidence and guide
Evidence: full
Guide with pictures: none
```
