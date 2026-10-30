# Service desk, phase 3 of 4: portal shell, ticket tiles and the board

Needs phases 1 and 2 accepted. Before sending: add **your own Mongoose user name** as an agent in FX_Agents and
assign two or three tickets to it (you do this in the Forms, so the prompt never contains your user name).
Screenshots: `mocks/service-desk/home.png`, `mocks/service-desk/board.png`. Paste the text block below as one
message, and attach the screenshots.

```text
/mongoose-builder

## 1. Goal (required)
What I want, in one or two sentences: Phase 3 of 4 of the service desk app: the FX_ServiceDesk portal (a Flex shell with header, menu and pages Home, Board, Tickets and Admin), a "My work" tile per ticket assigned to me, and a board web page with a column per status and a card per ticket that I can drag to change its status (plan in requests/service-desk/README.md).
Who uses it and for what: Service desk agents start here: see their own open tickets, work the board, and open the ticket list or the setup Forms. For now only I use it, while it's being built.

## 2. Build type (required, pick one or more)
[x] new Form            [ ] new IDO + SQL table     [x] new portal / shell (Flex) Form
[ ] dashboard / chart   [x] web page (HTML/JS/CSS asset)   [ ] change an existing factory object (built with this prefix)
[ ] change an existing object the factory didn't build (name it in section 6)
New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead:

## 3. Names
Prefix (every new object name starts with it; keep FX_ unless you want another): FX_
Form name(s) (FX_…): FX_TicketTile, FX_ServiceDesk
IDO / table name(s) (FX_…):
Asset folder (FX_…/index.html): FX_SDBoard/index.html
Leave blank and Claude will propose names in the plan for you to approve.

## 4. Details by type

### 4b. Forms (one block per Form)
#### Form 1
Form name (FX_…): FX_TicketTile
Data it shows (IDO): FX_Tickets
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): tile in another Form's grid
Connects to (which Form): FX_ServiceDesk
Linked by (what it passes or filters on): one tile per row of the Home page grid: open tickets (status not closed) whose Assignee is the signed-in user, earliest due date first
Layout: [ ] grid + detail   [ ] grid only   [ ] detail only   [x] other: small tile
Fields shown, in order (with captions as the user should see them):
- Ticket (TicketID)
- Summary
- Priority (PriorityName)
- Status (StatusName)
- Due (DueDate)
Read-only fields: all
Dropdowns / validation (field → allowed values or source): none
Second grid on this Form (another IDO, e.g. the selected row's lines): none
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

### 4c. Portal / shell
Pages (e.g. sign-in, home, list, cart) and what each shows:
- Home: "My work": a tile (FX_TicketTile) for each open ticket assigned to me, and a count of them
- Board: the board web page (FX_SDBoard)
- Tickets: a button "Open ticket list" that opens FX_Tickets
- Admin: buttons that open FX_Projects, FX_Agents, FX_Statuses and FX_Priorities
Menu / navigation items → which page: Home → Home, Board → Board, Tickets → Tickets, Admin → Admin
Header content (title, logo, user name): title "Service Desk" on the left, the signed-in user name on the right, no logo
Sign-in needed? [x] no  [ ] yes — users come from:
Tiles / cards (which data, which fields on a tile, click action): Home page: one FX_TicketTile per ticket as described in 4b; clicking a tile opens that ticket in FX_Tickets

### 4d. Web page / dashboard
Data shown (which IDO or API, which fields): FX_Tickets (TicketID, ProjectKey, Summary, Status, Priority, Assignee, DueDate) and FX_Statuses (StatusCode, StatusName, Category, SortOrder) for the columns; FX_Priorities (PriorityCode, PriorityName, SortOrder) for the card badge; FX_Agents (AgentID, DisplayName) for names
KPI cards / charts / tables (what each one counts or shows): Board: one column per status in SortOrder, with the count in its header. One card per ticket: ticket ID, summary, priority badge (its own colour per priority), assignee initials, due date in red when it's past. Dragging a card to another column changes that ticket's Status and saves it; the card stays there after Refresh.
Filters, sorting, refresh: Filters for Project (all / SUP / FAC …), Assignee (all / me / unassigned) and a text search on Summary; cards sorted by priority, then due date; a Refresh button
API calls (endpoint + verb). Only approved calls run; new ones need my approval here: none

## 5. Look and feel
Mock screenshot / reference (attach or give a path): mocks/service-desk/home.png (shell and Home), mocks/service-desk/board.png (board)
Colors / theme / fonts (or "match <an existing page>"): follow the screenshots' layout, spacing and colours; the board page uses the same colours as the shell
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
- FX_ServiceDesk opens from the Web Client; the menu switches between Home, Board, Tickets and Admin.
- The header shows "Service Desk" and my user name.
- Home shows one tile per open ticket assigned to me, with the right count; clicking a tile opens that ticket in FX_Tickets.
- Board shows a column per status with the right counts; each filter changes the cards shown; Refresh reloads them.
- Dragging a card to another column changes that ticket's Status: FX_Tickets shows the new status after Refresh.
- The Tickets and Admin buttons open FX_Tickets and the four setup Forms.

## 8. Anything else
Known problems, deadlines, things to avoid: Three steps are new here, so run each as a small probe first and tell me if one doesn't work before building on it: (1) reading the signed-in user name for "My work" and the header; if it can't be read, propose a "Me" picker on Home that remembers the agent; (2) saving a status change from the board's C# form script back to FX_Tickets; if that isn't safe, propose a "Move to" dropdown on each card that saves through the same route; (3) opening another Form from a button. FX_TicketTile may use the Classic Tile wizard (playbooks/portal-shell.md §4); that's fine. The web page uses three files (index.html, app.css, app.js) and a preview/stub.js with fake tickets, like the other assets. Screenshots are for layout only: the app is called "Service Desk" and uses no other product's name, logo or icons.

## 9. Evidence and guide
Evidence: full
Guide with pictures: none
```
