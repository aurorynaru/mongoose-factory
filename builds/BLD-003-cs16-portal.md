# BLD-003 — CS 1.6 Global-Strike portal (FX_CS16Portal)

Status: built — runtime verified up to the external relay (see "Runtime verification")
Date: 2026-10-29
Account (checked at start): operator account (Web Client header `SECRET_MONGOOSE_USERNAME | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) | Designer scope: User
Evidence: full   Guide: none
Final scope for Forms: User
Build prefix: FX_   Existing tenant objects already starting with it (not factory-owned): none found for the object types this build touches (WUC assets, Flex Form)

## Goal
Play CS 1.6 (Global-Strike browser client) inside a Mongoose form. A signed-in user opens
`FX_CS16Portal`, the page launches the game client (blob-injected from jsDelivr), and the user
shares the form with friends (same tenant, own accounts) who join the same server rooms.
"Done" = game boots in the form, a room can be joined, mouse-look/keyboard/audio work, and the
form persists across close/reopen.

External dependency (read-only, not factory-owned): the author's game server
`probuildingsupplies.com` (verified live 2026-10-29: `/cs16/status` 4 rooms online,
`/cs16/ticket` PoW works, `/cs16/gamefiles.zip` 278 MB first-launch download). The client
hardcodes `SERVER_HOST="probuildingsupplies.com"`; all server calls are absolute URLs, so the
game page is safe to run from a blob document.

## Objects
| Object | Type | New (build prefix) / factory-owned / other | Scope | Change |
|---|---|---|---|---|
| `FX_CS16/index.html` | WUC asset | new (FX_) | tenant-wide | create (launcher markup) |
| `FX_CS16/app.css` | WUC asset | new (FX_) | tenant-wide | create (styles) |
| `FX_CS16/app.js` | WUC asset | new (FX_) | tenant-wide | create (blob-inject + status + share box) |
| `FX_CS16Portal` | Flex Form | new (FX_) | User | create, UserControl `FX_CS16Control` → `FX_CS16/index.html` |

No C# form script, no IDO, no variables, no strings: the page is self-contained and needs no
server bridge (no `WSForm.invoke`).

## Data source
None (no IDO). Game data comes from the author's server at runtime.

## Approvals required
| Object / operation | Why | Rollback | Operator approval |
|---|---|---|---|
| (none) | all objects are new FX_ factory-owned; no tenant-wide ops (no cache unload, no FormSync, no deployment, no Group/Site save) | delete FX_CS16Portal + FX_CS16 assets | n/a |

Operator decisions (2026-10-29): blob injection from jsDelivr (friends have Mongoose accounts in
the same tenant); Mongoose sign-in only (no in-form login); prefix `FX_`; form name
`FX_CS16Portal`.

## Plan (each step ends with a Save and a readback)
1. Local probe (no tenant): test page fetches `sf-gs.html` from jsDelivr → Blob(`text/html`) →
   iframe; verify the game boots (launcher, 4 rooms online, join a room, map renders,
   mouse-look/audio). Evidence: `evidence/BLD-003/local-probe-*.png`.
2. Repo files: `assets/FX_CS16/` from `_template` (index.html, app.css, app.js; no C#),
   `npm run flat -- FX_CS16`.
3. Tenant: create assets `FX_CS16/index.html`, `app.css`, `app.js` (Edit Browser File →
   full-text fill → readback check → OK). Save.
4. Tenant: create Flex Form `FX_CS16Portal` (large size), UserControl component
   `FX_CS16Control` → Control URL `FX_CS16/index.html`, Width/Height set separately. Save.
5. Runtime probe gate: open the form in the Web Client → status line → game boots → join a room
   → mouse-look/keyboard/audio. If pointer-lock or WebGL fails in the WUC iframe: stop, record,
   report (fallback = "launch in new tab" button).
6. Persistence: close/reopen the form, game boots again.
7. Record: this file + `evidence/BLD-003/`.

Steps relying on **unverified** knowledge (probe first):
- blob-document game boot (Step 1 local probe; Step 5 in-tenant probe).
- `app.css` relative load in a WUC (playbook: unverified) — confirmed in Step 5 runtime; the
  page degrades to unstyled-but-functional if it fails.
- pointer lock / WebGL / keyboard inside the WUC iframe (Step 5).

## Acceptance checks
- AC-1: Designer readback after close/reopen: assets `FX_CS16/*` present with content matching
  the repo install copies (compare-readback.js equal true); form `FX_CS16Portal` exists with
  `FX_CS16Control` → `FX_CS16/index.html`.
- AC-2: runtime: form opens, status line shows progress, game launcher appears, a room joins,
  map renders, mouse-look + keyboard + audio work.
- AC-3: close/reopen: game boots again without Designer changes.

## Rollback / cleanup
- Delete Form `FX_CS16Portal` (User scope).
- Delete assets `FX_CS16/index.html`, `FX_CS16/app.css`, `FX_CS16/app.js`.
- No other objects touched.

## Build log (2026-10-29)
- WUC assets `FX_CS16/{index.html,app.css,app.js}` created tenant-wide; content readback `equal true`
  for all three (1079 / 1512 / 2828 chars). Evidence `wuc-assets-created.png`.
- Flex Form `FX_CS16Portal` created via the **standalone Designer** (portal toolbar button left of
  Help `?`, tooltip "Open designer in a new window" → standalone Designer tab → New → Flex → Basic).
  The embedded portal Designer's New button stayed disabled. Evidence `form-created-flex.png`.
- FlexLayout reduced to a single full-width region `FLEX_PANE_REGION0` (1 Flex); removed REGION1/2.
  Evidence `flexlayout-single-region.png`.
- UserControl `FX_CS16Control` placed, renamed, Control URL → `FX_CS16/index.html`
  (Edit User Control References → Use Web Control → Control URL `FX_CS16/index.html`).
  Evidence `control-url-set.png`.
- **Fill technique:** the `Unit` property is read-only and locked to `Char` in this form, so the
  BLD-002 Pixel `964×684` pattern could not be used. Filled the region with Char units instead:
  region `889×724 px`, control at `120; 40` Char → `885×720 px` (fills the region). Set Width and
  Height separately, committing each by clicking the next cell. Evidence `usercontrol-fills-form.png`.
- Saved (`SaveChanges` 200, "Form [FX_CS16Portal] and global object(s) were saved."), closed,
  reopened. Readback after reopen: `Name FX_CS16Control`, `Size 120; 40`,
  `User Control Name V(UserCtrl_FX_CS16Control)`. Persistence confirmed.

## Runtime verification (Web Client, 2026-10-29)
Opened `FX_CS16Portal` in the Web Client (Form → Open → filter `FX_CS16Portal` → select row → OK).
The WUC iframe renders the launcher and the game engine boots:
- Launcher "CS 1.6 — Global Strike" loads in the WUC iframe; status line "Game page loaded (0.2 s)".
  Evidence `runtime-open.png`.
- Server list populates with live pings (de_dust2 / Classic Rotation / de_inferno / de_vertigo) —
  the client reached the author's server for the room list.
- Name `FXTester` entered and persisted; Play enabled after a valid name.
- Play → "Finding a route to the server… (n/254)" (PoW) → "Downloading game data… (266 MB)" →
  "Unpacking game files… (5145)" → engine boots; button becomes "Play again" (data now cached).
  Evidence `runtime-after-boot.png`, `runtime-play-again.png`.
- **Blocker (external, not the WUC):** the in-map session drops back to the lobby. Console shows
  `wss://probuildingsupplies.com/w/` → 502 (plus 403s to relay hosts) — the same transient relay
  instability recorded in the local probe. The WUC iframe is not the blocker: the engine fully
  booted (download + unpack + run). Pointer-lock / mouse-look / keyboard inside the map could not be
  confirmed this run because the relay dropped the session before the map rendered.
- Console also shows `api.github.com/.../releases/latest` blocked (code 7) — the client's optional
  update check; non-critical.

AC status: AC-1 pass (assets + form persisted, readback equal). AC-3 pass (close/reopen boots the
launcher again). AC-2 partial: launcher + room list + download + engine boot verified; in-map
mouse-look/keyboard/audio not confirmed this run due to the external relay 502 (matches the local
probe's recorded transient issue). Re-run AC-2 when the author's relay is stable to close the last
gap.