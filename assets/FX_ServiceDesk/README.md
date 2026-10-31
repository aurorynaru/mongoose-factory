# FX_ServiceDesk — Service Desk web app

A ticketing app inside Infor Mongoose: My work, Projects, Issues (list + detail, comments, activity), Board and
Dashboard, behind its own sign-in page (`FX_ServiceDeskLogin`).

Status: **installed and in use at Site scope** (every user gets the same version), 2026-11-01.
Built in BLD-007 (setup tables), BLD-009 (tickets), BLD-015 (web app), BLD-016 (workflow, history, create/edit,
Dashboard), BLD-017 (Site scope, clean slate) and BLD-018 (sign-in, sessions, resolved dates in local time).
Requests: `requests/service-desk/`. Layout guide: `mocks/service-desk/` (not 1:1).

> **Documentation still missing.** Not written yet:
> - a **one-page overview**: what the app does, who uses it, which objects exist and where (Site / User), how to
>   maintain or roll it back, on a single page;
> - a **user guide**: how agents, leads and admins use the app;
> - **developer documentation**: architecture, data model, script methods, install and maintenance steps.
>
> Until they exist, this README and the build records (`builds/BLD-007`, `-009`, `-015` … `-018`) are the reference.
> The operator will supply a sample to use as the format for the user guide and the developer documentation.

## How it fits together
```
FX_ServiceDeskLogin (Flex Form)            FX_ServiceDesk (Flex Form)
  page: assets/FX_ServiceDeskLogin/          page: assets/FX_ServiceDesk/
  script: FX_SLSignIn / SignUp / Check       script: FX_SDLoad / SetStatus / UpdateTicket /
        │  token in sessionStorage                   CreateTicket / AddComment / SignOut
        └── Goto Form FX_ServiceDesk ──────────►  (every call carries the session token)
            ◄── Goto Form FX_ServiceDeskLogin ──  (gate "Open the sign-in page")
                         │
       IDOs (project FX_ServiceDeskProject): FX_Tickets, FX_TicketComments, FX_TicketHistory, FX_Projects,
       FX_Agents, FX_Statuses, FX_Priorities, FX_StatusTransitions, FX_AgentAccounts, FX_AgentSessions
```
- The pages call their Form's C# script with `WSForm.invoke`; each method writes JSON (`{"ok":true,…}` or
  `{"ok":false,"message":…}`) to a global variable (`FX_vSDResult`, `FX_vSDLoginResult`) that the page reads back.
- Sign-in: PBKDF2-SHA256 (100,000 iterations, 16-byte salt per account). A session is a random 32-byte token; the
  server stores only its SHA-256 in `FX_AgentSessions` (12-hour expiry). The page keeps the token in `sessionStorage`
  for the browser tab. This is an app-level login on top of Mongoose sign-in, not a replacement for it.
- Status changes follow `FX_StatusTransitions`; every Status, Assignee or Priority change writes an
  `FX_TicketHistory` row (shown as Activity).
- Dates: the tenant clock is UTC. Server stamps (created, updated, resolved, comments, history) are stored in UTC and
  the page shows them in the viewer's local time (`markStamps` adds `Z`). Due dates are calendar dates and are not
  converted. See `app.js` config comments.

## Where things live in Mongoose
| Object | Scope |
|---|---|
| Forms `FX_ServiceDesk`, `FX_ServiceDeskLogin`; their assets; variables `FX_vSDResult`, `FX_vSDLoginResult` | Site Default only |
| Admin Forms `FX_Tickets`, `FX_Projects`, `FX_Agents`, `FX_Statuses`, `FX_Priorities`, `FX_StatusTransitions`, `FX_TicketHistory`, `FX_TicketComments`, `FX_AgentAccounts`, `FX_AgentSessions` | User (the operator's account) |
| Tables / IDOs, property classes `FX_AgentID`, `FX_StatusCode` | tenant-wide |

Every global object (asset, variable) a Site Form uses needs its own Site version; a missing one shows
`Error processing metadata request: path not found` in the page (BLD-017, BLD-018).

## Files
| File | What it is |
|---|---|
| `index.html` | Markup: app frame (sidebar, top bar), sign-in gate, dialogs, inline SVG icon sprite. Loads `app.css?v=…` / `app.js?v=…`. |
| `app.css` | Tokens, frame, shared parts, one section per view, then media queries (≤1100px icon rail, ≤1000px stacked list/detail, ≤760px off-canvas menu, ≤480px). |
| `app.js` | Config, state, helpers (dates, sorting), `callServer` (session token, first-call retry), one render function per view, dialogs, wiring. |
| `FX_ServiceDesk.cs.txt` | C# form script: `FX_SDLoad`, `FX_SDSetStatus`, `FX_SDUpdateTicket`, `FX_SDCreateTicket`, `FX_SDAddComment`, `FX_SDSignOut`. |
| `FX_Tickets.cs.txt` | C# script of the Classic `FX_Tickets` admin Form (ticket numbering). |
| `preview/stub.js` | Preview only: fake WSForm with test rows (dates relative to today). Never installed. |
| `*.flat.*` | Install copies made by `npm run flat -- FX_ServiceDesk`; these are what gets pasted into Mongoose. |

Both pages also load `../$app/scripts/UserControl.js`, Mongoose's own bridge (provides `WSForm`); it exists only in
the tenant, and the preview server answers it with `preview/stub.js`.

Sign-in page, `assets/FX_ServiceDeskLogin/`:
| File | What it is |
|---|---|
| `index.html` | One centered card: Sign in / Create account tabs, the "continue" panel for an existing session. |
| `app.css` | Same tokens as the app; card, fields, password meter; media queries. |
| `app.js` | Validation, `callServer`, session token in `sessionStorage`, opens the app with `WSForm.generate("FX_OpenServiceDesk")`. |
| `FX_ServiceDeskLogin.cs.txt` | C# form script: `FX_SLSignIn`, `FX_SLSignUp`, `FX_SLCheck`; result variable `FX_vSDLoginResult`. |
| `preview/stub.js` | Preview only: fake accounts. Never installed. |
| `*.flat.*` | Install copies (`npm run flat -- FX_ServiceDeskLogin`). |

## Other files to know
| File / folder | What it is |
|---|---|
| `assets/package.json`, `assets/tools/serve.js`, `assets/tools/flat.js` | `npm run preview` (local preview server, port 8765) and `npm run flat -- <App>` (install copies) |
| `requests/service-desk/README.md`, `phase-1-setup.md` … `phase-4-workflow-dashboard.md` | The design requests, one per phase |
| `mocks/service-desk/home.png`, `ticket-list.png`, `board.png`, `dashboard.png` | Layout and look reference |
| `builds/BLD-007-service-desk-setup.md`, `BLD-009-service-desk-tickets.md`, `BLD-015-service-desk-web-app.md`, `BLD-016-service-desk-workflow-dashboard.md`, `BLD-017-service-desk-site-and-cleanup.md`, `BLD-018-service-desk-login.md` | Build records: every object created, approvals, steps, problems and fixes, rollback |
| `evidence/BLD-007/` … `evidence/BLD-018/` | Screenshots, readbacks and before-readbacks of deleted data behind each build record |
| `evidence/BLD-017/rollback/`, `evidence/BLD-018/rollback/` | Earlier installed versions of the app's script and assets (rollback) |
| `evidence/BLD-018/app-asset-fill.js`, `app-asset-readback.js`, `asset-ok.js` | Browser helpers used for a Site install of the app's assets (fill with baseline check, readback, OK) |
| `evidence/BLD-018/site-asset-fill.js`, `asset-readback.js` | The same for the sign-in page's assets |
| `evidence/BLD-018/preview-test.js` | Preview regression test (25 checks) |
| `.claude/skills/mongoose-builder/tools/compare-readback.js` | Compares a Mongoose editor readback with the source file |
| `.claude/skills/mongoose-builder/playbooks/web-user-controls.md`, `forms.md`, `browser-and-session.md` | How pages, Forms, scopes and Designer work are done in this repo |

## Changing the app
1. Edit the source files, preview locally, then `npm run flat -- FX_ServiceDesk`.
2. Bump `?v=` in `index.html` whenever `app.css` or `app.js` changes (browsers cache the old file otherwise).
3. Install at **Site scope** (needs the operator's approval; it changes the app for everyone): Designer › Form ›
   Definition › Site Developer Impersonation › Site Default → Unload All Global Form Objects → Edit › Web User Control
   Assets → fill each changed file from its `.flat` copy → compare the editor readback with
   `.claude/skills/mongoose-builder/tools/compare-readback.js` → OK → Save → unload → read back → back to User scope.
4. Record the change in a build record (`builds/BLD-NNN-…md`).
Rollback copies: `evidence/BLD-017/rollback/` and `evidence/BLD-018/rollback/`.

## Local preview
`cd assets && npm run preview`, then open http://127.0.0.1:8765/FX_ServiceDeskLogin/index.html (preview account
`sam.lee` / `correct-horse`, fake) or go straight to the app with
http://127.0.0.1:8765/FX_ServiceDesk/index.html?as=agent.anna.
URL switches: `?as=<agent>` (session without the login page), `?expire=1` (session ended), `?empty=1` (no tickets),
`?fail=write`, `?fail=history`, `?dropfirst=1` (first call arrives without its argument, as in the tenant).
Regression check: `evidence/BLD-018/preview-test.js` (25 checks, sign-in to sign-out).

## Design review: web-design-guidelines (phase 3, rules fetched 2026-10-30 from vercel-labs/web-interface-guidelines)
Later reviews (phase 4 dialogs and Dashboard, the sign-in page) are recorded in BLD-016 and BLD-018.

| Finding | Fix |
|---|---|
| index.html: decorative icons in nav, brand and buttons not hidden from assistive tech | `aria-hidden="true"` on every `<svg><use>` |
| index.html: no skip link | "Skip to content" link to `#FX_View`, visible on focus |
| index.html: search input has no `name`; no `theme-color` | `name="q"`; `theme-color` #f4f6fa |
| index.html: icon-rail nav links lose their text (labels `display:none` ≤1100px) | `title` on each link (also its accessible name in the rail) |
| app.js: open count used `aria-label` on a `<b>` (not reliably read) | visible number + hidden " open" text |
| app.js: `role="tab"` buttons without tab panels or arrow keys | plain toggle buttons with `aria-pressed` in a labelled group |
| app.js: two `h1` on the Issues view (view title and ticket title) | ticket title is an `h2` |
| app.js: truncated list titles unreadable when cut | `title` with the full summary |
| app.js: Move to… button had no initial `aria-expanded` | `aria-expanded="false"` |
| app.js: unsent comment lost on leaving | `beforeunload` warning while a draft exists |
| app.css: menu items removed the focus outline | 2px accent outline on `:focus-visible` |
| app.css: switch animated `background-color`; skeleton animated `background-position` | no background transition; skeleton pulses opacity (both off with reduced motion) |
| app.css: `touch-action` only on some controls; text selection fought board dragging | `touch-action: manipulation` on all controls; `user-select: none` on board cards |
| app.css (found by the test, not the rules): screen-reader text in off-screen board cards widened the page | `position: relative` on the view, board and type icon |

Kept on purpose:
- Filters and tabs live in this browser's storage, not the URL. The view and the selected ticket are in the URL hash.
- Ticket and project "open" controls are buttons, not links: opened in a new tab outside the Mongoose Form, the page has
  no bridge to load data.
- Headings and buttons use sentence case (frontend-design skill), not the guidelines' Title Case.
- Lists are not virtualized; the service desk reads at most 2,000 rows (`MaxRows`).
