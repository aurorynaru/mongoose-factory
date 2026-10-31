# Service desk app: design and build requests

A ticketing app for a service desk: projects, tickets with comments, a board, a dashboard and simple
workflow rules. It's built in four phases. Each phase is one request in the `mongoose-builder` format
(`.claude/skills/mongoose-builder/templates/build-request-prompt.md`), so each one gets its own build record
in `builds/`.

Written 2026-10-29, updated 2026-10-30 for the UI mocks. Prefix `FX_`, User scope, fake test data only.

## How to use these files

1. The UI mocks are in `mocks/service-desk/` (see [Screenshots](#screenshots)).
2. Paste `phase-1-setup.md`'s text block into OpenCode (or Claude Code) in this repo, together with its screenshots.
3. Let it finish: plan → your approval → build → close/reopen checks → build record. Check section 7 ("Done
   means") yourself before starting the next phase. Later phases rely on the earlier tables and names.
4. Repeat with phases 2, 3 and 4.

To change something before sending, edit the text block directly. A blank after a label means "ask me".

## Phases

| Phase | File | Builds | Knowledge state of the main steps |
|---|---|---|---|
| 1 | `phase-1-setup.md` | 4 setup tables + a Classic maintenance Form for each | Observed (Maintenance wizard + Classic Multi-View Form) |
| 2 | `phase-2-tickets.md` | Tickets and comments tables, the Classic ticket Form (comments under it), Resolve/Reopen, ticket numbers | Observed, except ticket numbering (probe) |
| 3 | `phase-3-web-app.md` | The Service Desk web app in a full-width Flex Form: My work, Projects, Issues (list + detail, comments), Board; changes status and adds comments | Page and reads observed; the full-width Flex steps, IDO writes from the C# script and the signed-in user name are probes |
| 4 | `phase-4-workflow-dashboard.md` | Allowed status moves, history, create and edit tickets in the app, activity feed, Dashboard view | Rules and inserts run as probes on top of phase 3's write route |

The Classic Forms from phases 1 and 2 stay as the setup screens and as a fallback ticket editor. From phase 4 on,
ticket status changes only in the web app, so its rules can't be bypassed.

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

## Forms and the web app (7 Forms, 1 web app)

| Object | Phase | What it is | Connects |
|---|---|---|---|
| `FX_Projects`, `FX_Agents`, `FX_Statuses`, `FX_Priorities` | 1 | Classic maintenance Forms (grid + detail) | On their own |
| `FX_Tickets` | 2 | Classic ticket list + detail, comments grid under it | On its own (fallback editor; Status read-only from phase 4) |
| `FX_ServiceDesk` | 3 | Flex Form with one full-width UserControl | The app's start Form |
| `FX_ServiceDesk/` (web app) | 3, 4 | `index.html`, `app.css`, `app.js`, C# script, `preview/stub.js`. Views: My work, Projects, Issues, Board, Dashboard (phase 4) | Shown in `FX_ServiceDesk` |
| `FX_StatusTransitions` | 4 | Classic maintenance Form for the allowed status moves | On its own |

## Screenshots

| File | Used in | Shows |
|---|---|---|
| `mocks/service-desk/home.png` | Phase 3 | App frame (sidebar, top bar) and My work |
| `mocks/service-desk/ticket-list.png` | Phases 3, 4 | Issues: list and detail pane |
| `mocks/service-desk/board.png` | Phase 3 | Board columns and cards |
| `mocks/service-desk/dashboard.png` | Phase 4 | Dashboard KPIs and charts |

The mocks are a **guide, not a 1:1 copy**. Each prompt's section 8 lists what is kept, what changes and what is
left out. Left out: the workspace switcher, Calendar, sprints and story points, Board settings, Quick filters,
Attach, Export, the notifications bell, the help card and the "…" menus. The app is called "Service Desk", with
no "nexa" or other product branding.

**Design:** the web app is designed with the `frontend-design` skill and reviewed with `web-design-guidelines`
before each install (`.claude/skills/`). Its CSS has media queries. It uses system fonts and inline SVG only
(no CDN). The review downloads its rules from GitHub, so the agent needs web access for that step.

## Decisions you can still change

- **Prefix:** `FX_` (the proven path). To use your own, e.g. `SD_`, change section 3's Prefix in every phase and
  every `FX_` name in the prompts. Claude then checks the tenant for existing `SD_` objects first.
- **Classic Forms in phases 1, 2 and 4:** the data Forms use the Classic Multi-View wizard, the route that has
  worked here. `FX_ServiceDesk` is Flex, created with the operator's full-width procedure
  (`playbooks/portal-shell.md` § Flex Form for one full-width web page).
- **Agents instead of Mongoose users:** `FX_Agents` is a list the app owns. Its AgentID should equal each person's
  Mongoose user name, so "assigned to me" works in phase 3. Add your own user name as an agent yourself before
  phase 3; the prompts don't type it for you.
