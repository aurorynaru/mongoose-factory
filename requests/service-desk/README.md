# Service desk app: design and build requests

A ticketing app for a service desk: projects, tickets with comments, a board, a dashboard and simple
workflow rules. It's built in four phases. Each phase is one request in the `mongoose-builder` format
(`.claude/skills/mongoose-builder/templates/build-request-prompt.md`), so each one gets its own build record
in `builds/`.

Written 2026-10-29. Prefix `FX_`, User scope, fake test data only.

## How to use these files

1. Save your UI screenshots in `mocks/service-desk/` under the names in [Screenshots](#screenshots).
2. Paste `phase-1-setup.md`'s text block into OpenCode (or Claude Code) in this repo, together with its screenshots.
3. Let it finish: plan → your approval → build → close/reopen checks → build record. Check section 7 ("Done
   means") yourself before starting the next phase. Later phases rely on the earlier tables and names.
4. Repeat with phases 2, 3 and 4.

To change something before sending, edit the text block directly. A blank after a label means "ask me".

## Phases

| Phase | File | Builds | Knowledge state of the main steps |
|---|---|---|---|
| 1 | `phase-1-setup.md` | 4 lookup tables + a maintenance Form for each | Observed (Maintenance wizard + Classic Multi-View Form) |
| 2 | `phase-2-tickets.md` | Tickets and comments tables, the ticket Form (comments under it), Resolve/Reopen, ticket numbers | Observed, except ticket numbering (runs as a probe) |
| 3 | `phase-3-portal-board.md` | The Flex shell with menu and pages, ticket tiles for "My work", the board web page | Observed; dragging a card to change Status is a probe |
| 4 | `phase-4-workflow-dashboard.md` | History and allowed status moves, the rules on the ticket Form, a History Form, the dashboard page | Observed; the History button and the rule checks are probes |

Not in these phases (each is a later, separate request): email notifications, SLA timers (background tasks),
attachments, real Mongoose user lookup, and Group/Site scope for the team. All are untried in this tenant.

## Tables (8)

Mongoose adds system columns to every table (created/updated date and user). The design uses those instead of
its own "created on" columns.

| Table | Phase | Columns (key first) | Links |
|---|---|---|---|
| `FX_Projects` | 1 | ProjectKey, ProjectName, Description, LeadAgent, NextTicketNo, Active | LeadAgent → FX_Agents |
| `FX_Agents` | 1 | AgentID (the Mongoose user name), DisplayName, Team, Role, Active | — |
| `FX_Statuses` | 1 | StatusCode, StatusName, Category (To do / In progress / Done), SortOrder, IsClosed | — |
| `FX_Priorities` | 1 | PriorityCode, PriorityName, SortOrder, ResponseHours, ResolveHours | — |
| `FX_Tickets` | 2 | TicketID (e.g. SUP-6), ProjectKey, TicketType, Summary, Description, Status, Priority, Reporter, Assignee, Category, Labels, DueDate, ResolvedOn, Resolution | ProjectKey → FX_Projects, Status → FX_Statuses, Priority → FX_Priorities, Reporter/Assignee → FX_Agents |
| `FX_TicketComments` | 2 | CommentID (AUTONUMBER), TicketID, Author, CommentText, IsInternal | TicketID → FX_Tickets, Author → FX_Agents |
| `FX_TicketHistory` | 4 | HistoryID (AUTONUMBER), TicketID, FieldName, OldValue, NewValue, ChangedBy | TicketID → FX_Tickets |
| `FX_StatusTransitions` | 4 | TransitionID (AUTONUMBER), FromStatus, ToStatus | both → FX_Statuses |

Fixed lists (dropdown values, no table): ticket type, category, resolution, agent role, status category.

## Forms and pages (9 Forms, 2 web pages)

| Object | Phase | What it is | Connects |
|---|---|---|---|
| `FX_Projects`, `FX_Agents`, `FX_Statuses`, `FX_Priorities` | 1 | Maintenance Forms (grid + detail) | On their own; buttons on the Admin page open them (phase 3) |
| `FX_Tickets` | 2 | Ticket list + detail, comments grid under it, Resolve / Reopen | On its own; opened from the shell (phase 3) |
| `FX_ServiceDesk` | 3 | Flex shell: header, menu, pages Home / Board / Tickets / Admin (+ Dashboard in phase 4) | The app's start Form |
| `FX_TicketTile` | 3 | One ticket as a small tile | Tile in the Home page grid of `FX_ServiceDesk` |
| `FX_SDBoard/index.html` | 3 | Board web page: a column per status, a card per ticket | Shown on the Board page |
| `FX_TicketHistory` | 4 | History rows of one ticket (read only) | Opened by the History button on `FX_Tickets`, filtered by TicketID |
| `FX_StatusTransitions` | 4 | Allowed status moves (maintenance Form) | On its own; a button on the Admin page opens it |
| `FX_SDDashboard/index.html` | 4 | Dashboard web page: KPIs, charts, oldest open tickets | Shown on the Dashboard page |

## Screenshots

Save them here so the prompts can point at them. Missing ones are fine: Claude asks or uses the standard look.

| File | Used in | Shows |
|---|---|---|
| `mocks/service-desk/ticket-list.png` | Phase 2 | The ticket list and the ticket detail |
| `mocks/service-desk/home.png` | Phase 3 | The shell: header, menu, "My work" tiles |
| `mocks/service-desk/board.png` | Phase 3 | The board columns and cards |
| `mocks/service-desk/dashboard.png` | Phase 4 | KPIs and charts |

Screenshots of another product are used for **layout only**. The app uses its own name ("Service Desk"),
colours and icons, never another product's name or logo. Each prompt says so in section 8.

## Decisions you can still change

- **Prefix:** `FX_` (the proven path). To use your own, e.g. `SD_`, change section 3's Prefix in every phase and
  every `FX_` name in the prompts. Claude then checks the tenant for existing `SD_` objects first.
- **Classic Forms in phases 1 and 2:** the data Forms use the Classic Multi-View wizard, the route that has worked
  here. The shell in phase 3 is Flex. Remove "Classic" in section 2 to ask for Flex (whether Flex has a data
  wizard is untested).
- **Agents instead of Mongoose users:** `FX_Agents` is a list the app owns. Its AgentID should equal each person's
  Mongoose user name, so "assigned to me" works in phase 3. Add your own user name as an agent yourself before
  phase 3; the prompts don't type it for you.
