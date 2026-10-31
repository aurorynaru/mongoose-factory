# BLD-015 — Service desk phase 3: the Service Desk web app (FX_ServiceDesk)

Status: done with deviations (see Status, Deviations and Open cleanup at the end)
Date: 2026-10-31
Account (checked at start): the operator's own account (Designer status bar `ScopeType: User`; Web Client header),
not the read-only Mock account
Evidence: full   Guide: none
Final scope for Forms: User   Group/Site save approved in the request: n/a (User scope)
Build prefix: FX_   Existing tenant objects already starting with it (not factory-owned): n/a (default prefix; each new
name gets an absence check)

Request: `requests/service-desk/phase-3-web-app.md` (phase 3 of 4; design in `requests/service-desk/README.md`).
Builds on BLD-007 (phase 1) and BLD-009 (phase 2, done with deviations 2026-10-31).
Operator go-ahead to start phase 3: "continue with the next phase / tasks" (chat, 2026-10-31). Plan approval and
prerequisite: "created [their] agent and FAC-4 ticket, yes you can continue" (chat, 2026-10-31).

## Goal
One custom web page, `FX_ServiceDesk/index.html`, in a new full-width Flex Form `FX_ServiceDesk`: sidebar, top bar
and four views (My work, Projects, Issues with a detail pane, Board) over the phase 1–2 tables. The page changes a
ticket's Status and adds comments, and nothing else. Done = the request's section 7.

## Prerequisite (the operator, before step 6)
The request asks the operator to add **their own Mongoose user name** as an agent in FX_Agents and assign two or
three tickets to it, in the Forms, so that no prompt or record contains the user name. On 2026-10-31 (AC-2 of
BLD-009) FX_Agents still listed only the four test agents. Without this row, "Assigned to me", the greeting and
the Me-based tabs show nothing, and section 7's "My work shows my name" can't pass.

## What already exists (local only, 2026-10-30)
`assets/FX_ServiceDesk/` holds the page, built and reviewed in the local preview before the tables existed
(`assets/FX_ServiceDesk/README.md`):
- `index.html`, `app.css` (media queries at 1100 / 1000 / 760 / 480 px), `app.js`, `preview/stub.js`;
- `FX_ServiceDesk.cs.txt`: `FX_SDLoad`, `FX_SDSetStatus`, `FX_SDAddComment`, result variable `FX_vSDResult`;
- headless test 32/33 pass (the 33rd is only Chromium's favicon 404);
- web-design-guidelines review, 14 findings, each fixed (the table goes into this record at step 12).
Nothing is installed in the tenant.

## Changes needed before install (from what phase 2 established)
1. **Line length.** The flat copy has lines up to 219 characters (`TicketProps`, line 40). The longest installed
   line so far is 168 (FX_ASNPortal, BLD-002), and EXP-138 failed Save on long lines (`ActiveXScriptLines.CodeLine`,
   width unknown). Rewrap to ≤ 100 characters flat, as in FX_Tickets.
2. **Config against the real IDOs.** Read back the FX_Tickets / FX_TicketComments property names, including the
   system columns the script reads (`CreateDate`, `RecordDate`, `CreatedBy`, `UpdatedBy`), and fix Config.
3. **Dates.** Phase 2 found that `SetCurrentObjectPropertyPlusModifyRefresh` refuses the IDO internal date
   format. This script writes through `IDOClient.UpdateCollection`, a different API, so `IdoDateFormat` stays a
   probe (step 8). Per the operator (2026-10-31), date display and conversion happen in the page.
4. `using` lines: the script uses the template's `using` set (System.Collections.Generic, Newtonsoft.Json, …),
   which installed before in FX_ASNPortal (BLD-002) and FX_InventoryDashboard. `System.Globalization` is extra: drop it and fully
   qualify, as in FX_Tickets (BLD-002: a new `using` line made the editor refuse the script).
After any change: rerun the headless preview test. If the page files change, rerun the design review.

## Objects
| Object | Type | New / factory-owned / other | Scope | Change |
|---|---|---|---|---|
| `FX_ServiceDesk` | Form (Flex, one Fill region) | new (FX_) | User | create |
| `FX_ServiceDeskControl` | UserControl component on FX_ServiceDesk | new (FX_) | User | create; shows `FX_ServiceDesk/index.html` |
| `FX_vSDResult` | Global variable (Edit › Variable › Global Objects, `web-user-controls.md` step 3) | new (FX_) | global object | create; JSON result of each script call |
| `FX_ServiceDesk` | C# form script | new (FX_) | User | create (`FX_ServiceDesk.cs.txt`, flat copy) |
| `FX_ServiceDesk/index.html`, `app.css`, `app.js` | Web User Control Assets | new (FX_) | tenant-wide | upload |
| FX_Tickets rows, FX_TicketComments rows | test data (fake, factory-created) | factory-owned | data | probes change one ticket's Status and add one comment; restored / deleted afterwards |

Read only: FX_Projects, FX_Agents, FX_Statuses, FX_Priorities (the agent row the operator adds is theirs).

## Data source
Through the Form's C# script (`IDOClient.LoadCollection`): FX_Tickets, FX_TicketComments, FX_Projects, FX_Agents,
FX_Statuses, FX_Priorities. Writes (`IDOClient.UpdateCollection`): FX_Tickets.Status (+ ResolvedOn when the status
category changes to or from Done), and an insert into FX_TicketComments. No Form collection.

## Approvals required (fill before building)
| Object the factory doesn't own, or tenant-wide operation | Why | Rollback | Operator approval (quote + date) |
|---|---|---|---|
| none planned | All objects are new FX_ or factory-owned test data. No unload, FormSync, deployment or Group/Site save. | — | — |

## Plan (each step ends with a Save and a readback)
1. Account + scope check. Absence gate: Form `FX_ServiceDesk`, assets `FX_ServiceDesk/*`. (No form variable or
   component can exist before the Form does.)
2. Local: changes 1–4 above; `npm run flat -- FX_ServiceDesk`; headless preview test; design review only if the
   page files change.
3. **Probe, full-width Flex Form** (`portal-shell.md` § Flex Form for one full-width web page, unverified): New →
   Flex → Basic → Unit Pixel → Edit FlexLayout Attributes → delete regions 1 and 2 → region 0 Orientation Fill.
   Every value picked by clicking. Read back Unit, region count and Orientation; Save; close/reopen; read back again.
   **Stop and report if it fails.**
4. Upload the three assets (`web-user-controls.md`, observed route); readback with `tools/compare-readback.js`.
5. UserControl `FX_ServiceDeskControl` in region 0 pointing at `FX_ServiceDesk/index.html`; form variable
   `FX_vSDResult`; Save, reopen.
6. Form script: install the flat copy, compile (0 errors), Save, reopen, readback with `compare-readback.js`.
7. **Probe, read path:** open FX_ServiceDesk in the Web Client → the page loads 8 tickets, 4–5 agents, 2 projects.
   Record the date text LoadCollection returns and whether `me` (the signed-in user, request probe 2) is filled.
   If it can't be read, the page's Me picker (remembered in this browser) is the fallback. **Report either way.**
8. **Probe, write path** (request probe 1): `FX_SDSetStatus` on one test ticket (SUP-3: its status → INPROG,
   then back), read back in FX_Tickets after Refresh. Then one move into Done and back, to check the ResolvedOn date
   text and clearing it with "". If a write fails or does something unexpected, **stop and propose another way**.
   The ticket ends as it started.
9. **Probe, comment insert:** add one test comment on SUP-3 → it shows in FX_Tickets' comments grid; check that
   CommentID was filled (AUTONUMBER on an UpdateCollection insert). If not, `SetCommentIdInScript = true`,
   reinstall, retry. Delete the test comment afterwards unless it's kept for an acceptance check.
10. Runtime acceptance (section 7) at desktop and tablet widths: KPIs against counts in FX_Tickets; Issues tabs,
    search, filters, "Showing x of y", detail + only its comments; Status change → FX_Tickets after Refresh; comment
    → FX_Tickets' comments grid; Board counts, drag and Move to… → persists after Refresh; Projects cards and
    filtering. Test changes are put back afterwards.
11. Designer close/reopen of FX_ServiceDesk; final readbacks.
12. Record: objects, evidence, the design-review table, deviations, cleanup.

Steps relying on **unverified** knowledge (probe first, stop on failure): 3 (Flex full-width), 7 (signed-in user
name, LoadCollection date text), 8 (UpdateCollection on FX_Tickets with ResolvedOn; UpdateCollection itself is
observed on FX_Projects in BLD-009), 9 (insert + AUTONUMBER).

## Acceptance checks (request section 7)
- AC-1: FX_ServiceDesk opens from the Web Client and the page fills the Form at desktop width. At tablet width the
  sidebar collapses (icon rail or menu button) with no sideways scrolling.
- AC-2: My work shows the operator's name; its four KPI numbers match counts in FX_Tickets.
- AC-3: Issues tabs, search and filters change the list and "Showing x of y"; selecting a ticket shows its details
  and only its comments.
- AC-4: a Status change in the detail pane shows in FX_Tickets after Refresh; an added comment shows in FX_Tickets'
  comments grid.
- AC-5: Board has one column per status with the right counts; drag and "Move to…" change the status, which
  persists after Refresh.
- AC-6: Projects has one card per active project with the right counts; clicking one filters Issues and Board.
- AC-7: this record lists the web-design-guidelines findings and the fix for each.

## Rollback / cleanup
- Delete Form FX_ServiceDesk (User scope; removes its UserControl, variable and script); delete assets
  `FX_ServiceDesk/index.html`, `app.css`, `app.js`.
- Test status changes are put back (ticket by ticket, through the page or FX_Tickets); test comments deleted through
  FX_Tickets' comments grid.

## Build log
- 2026-10-31: brief and plan written; waiting for approval and the prerequisite agent row.
- 2026-10-31: **approved.** The operator added their own agent row and ticket FAC-4 (so FAC NextTicketNo is now 5).
  Their AgentID, as given in chat, is a short name, not the full Mongoose sign-in name: "Me" therefore can't come
  from the sign-in name even if a script could read it.
- 2026-10-31: **step 2, local script changes** (`assets/FX_ServiceDesk/FX_ServiceDesk.cs.txt`; the 2026-10-30
  version is kept in the session scratchpad only):
  - lines wrapped: the flat copy is 445 lines, longest **90** (was 219);
  - `using System.Globalization` dropped; `Invariant`, `NumberStyles`, `DateTimeStyles` fully qualified;
  - **`SetCommentIdInScript = true`**: BLD-009 step 8 showed `AUTONUMBER()` is filled in by the client only (an
    unbound insert was refused with "CommentID ... cannot be null"), so the script sends max + 1;
  - `FX_CurrentUser` stays null: no form-script route to the signed-in user is documented here (the docs'
    `IDORuntime.Context.UserName` is for IDO extension classes, `docs/mongoose/guides/ido-extension-classes.md`).
    Request probe 2's fallback, the page's Me picker, is used. Step 7 confirms the page shows it;
  - Config property names kept: they match the phase 1–2 records (BLD-007 AC-1 lists the system columns on every
    table). The step 7 load is their runtime readback: a wrong name fails the load with a message;
  - `npm run flat -- FX_ServiceDesk` → `FX_ServiceDesk.flat.cs.txt`, `index.flat.html`, `app.flat.css`,
    `app.flat.js`. It also rewrote `FX_Tickets.flat.cs.txt`, identical to the installed copy (diff checked).
  - Page files (`index.html`, `app.css`, `app.js`) unchanged, so the headless test and design review from
    2026-10-30 still apply (the preview runs `stub.js` in place of the C#).
- 2026-10-31 03:48–03:55 UTC: **steps 1 and 3 done; Flex full-width probe passes** (unverified → observed).
  - Step 1: standalone Designer, status bar `ScopeType: User` / the operator's account, FX_Tickets clean. Select
    Form filter `FX_Service` → empty (`01-selectform-absence.png`). Edit › Web User Control Assets: top level has
    `$app`, FX_ApiPage, FX_ASNPortal, FX_Bridge, FX_CS16, FX_Inventory, FX_Login, mongoose, sohoComponents, sohoxi;
    no `FX_ServiceDesk` (`02-webassets-absence.png`) → Cancel.
  - Step 3: toolbar **New** (enabled in the standalone Designer) → Form Wizard Selection: Category list → **Flex**
    (clicking the label timed out behind a tile graphic; clicking the option row worked), Wizard list → **Basic**
    (the only entry) (`03-new-form-flex-basic.png`) → OK → page 1 Name `FX_ServiceDesk` (typed), Unit list →
    **Pixel**, Comments typed (`04-wizard-page1-name-pixel.png`) → Next → Save Template unchecked → Finish →
    "Process Completed Successfully" → OK. The Form opened with three regions, Form Type Flex, **Save already
    disabled** (the wizard saved it) (`06-form-open-designer.png`).
  - Canvas click selected `flexlayoutPane_FX_ServiceDesk`; adorner `.mg-adorner-edit-flexlayout` → FlexLayout
    dialog (`07-flexlayout-before.png`). Regions toolbar icons: add, delete (trash), up, down (no labels). Row 2 →
    trash, row 1 → trash → only `0 FLEX_PANE_REGION0 1 Flex`. Row 0 → Orientation list → **Fill** → readback
    HorizontalBox / one region / Flex / Fill (`08-flexlayout-one-fill-region.png`) → OK → **Save** → "Form
    [FX_ServiceDesk] and global object(s) were saved." (`09-flex-saved.png`).
  - Close (no prompt) → reopen from Select Form: Form properties › Layout **Unit Pixel**, Size 960; 680; FlexLayout
    dialog shows **one region, Flex, Fill** (Alignment and Pack hidden, as Fill does) (`10-reopen-one-fill-region.png`)
    → Cancel.
- 2026-10-31 03:56–04:00 UTC: **step 4, three assets** (Edit › Web User Control Assets → New): `FX_ServiceDesk/index.html`,
  `FX_ServiceDesk/app.css`, `FX_ServiceDesk/app.js`, each filled once from its `.flat` copy (fetched from the local
  preview server). Edit Browser File snapshot before OK → `compare-readback.js` **equal: true** for all three
  (`11-index-editor-before-ok.yml`, `12-appcss-editor-before-ok.yml`, `13-appjs-editor-before-ok.yml`) → OK → Global
  Objects OK → Save → "Global object(s) were saved." (`14-assets-saved.png`).
- 2026-10-31 04:00–04:04 UTC: **step 5, variable and UserControl.**
  - Edit › Variable → + → `FX_vSDResult` → OK (second click needed) → Persistent True, Global True
    (`15-variable-created.png`) → Save.
  - Toolbox UserControl + canvas click → `userControl1_USER` fills the Fill region (`16-usercontrol-placed.png`) →
    Name `FX_ServiceDeskControl` → Save. User Control Name ellipsis → Edit User Control References: Use Web Control
    already checked → Control URL list → **FX_ServiceDesk/index.html**, radio Web User Control Asset selected
    (`17-usercontrol-url-picked.png`) → OK → OK-only "You will need to regen this form…" prompt (`18-after-url-ok.png`)
    → OK → Save (Save disabled afterwards). User Control Name now `V(UserCtrl_FX_Ser…)` (`19-after-save-url.png`).
    Layout Size not changed: the control fills the Fill region (runtime check in step 7).
- 2026-10-31 04:05–04:13 UTC: **step 6, form script.**
  - Form › Behavior › Script Language was **Visual Basic** → **Visual C#** (list pick + Tab) → Save.
  - Blue pencil → Script Editor with the 16-line C# template, class on **line 7** (`20-script-editor-before.png`).
  - **Fill method:** click the editor, Ctrl+A, Delete, `keyboard.insertText(<flat file>)`.
  - **New readback route:** `window.monaco.editor.getEditors()` → `getModel().getValue()` gives the whole script
    (BLD-009 could read only the visible lines). Compared with the flat source, trimmed line by line: **equal**.
  - Fill 1 (5 usings + `//<Ref>`, class on line 23) → ▶ **"Cannot Save - the class name has changed"**
    (`21-script-compile.png`). Corrected attempt 1: rewording the one header comment that said "class name" → same
    refusal, so that wasn't it.
  - Fix (BLD-009's: keep the template header): lines 1–7 exactly as the template (3 usings, class on line 7);
    `//<Ref>Newtonsoft.Json.dll</Ref>` moved inside the class; `System.Collections.Generic` replaced by nested types
    `JsonObject`, `JsonList`, `Fields`, `FieldsList`; `Newtonsoft.Json.JsonConvert` fully qualified. Flat copy
    453 lines, longest 90. Refill → Monaco readback equal (454 lines incl. trailing blank) → ▶ **"Built with 0 errors
    at 4:12 AM."** (`22-script-compiled-0-errors.png`) → OK → Save (Save disabled afterwards, no error box).
  - What this suggests (not proven): the check compares where the class line sits with where it sat in the stored
    script. FX_ASNPortal's first fill (7 usings) passed while the stored script was still the VB template.
- 2026-10-31 04:15–04:20 UTC: **step 7, runtime read probe: passes.**
  - Form › Open didn't list FX_ServiceDesk (the list was loaded before the Form existed). Portal reload (Save was
    disabled, so nothing pending; accepted the generic leave-page prompt), closed the Infor OS
    "DistributionIFSContactUs" banner with its ×, then Form › Open → filter → double-click FX_ServiceDesk.
  - The page fills the Form tab (`23-runtime-first-load.png`): Service Desk shell, My work, Issues 6, Team queue
    To do 3 / In progress 3, Unassigned SUP-2 and FAC-2, Recent comments. Me picker shows **"Not chosen"**, and the
    stat cards show "–" with "Choose who you are…", as designed for `me = null`.
  - Console (`24-runtime-console.log`): `call FX_SDLoad` → `result FX_SDLoad 261 ms {ok: true, me: null, …}`. The 4
    errors are the platform's "Permissions policy violation: unload" messages, not the page's.
  - FX_vSDResult read in the page frame: agents agent.anna, [operator's agent], agent.ben, lead.carla, tech.dev; projects
    FAC next 5, SUP next 7; statuses OPEN To do, INPROG / WAITING In progress, RESOLVED / CLOSED Done; 4 priorities;
    **9 tickets**; 6 comments. Dates all came through `FX_IsoDate` as ISO text (FAC-2 due `2026-11-13T00:00:00`,
    FAC-3 resolvedOn `2026-10-27T00:00:00`, created `2026-10-30T12:30:38`), so LoadCollection's date text parses.
    Counts match: not-Done tickets FAC-1, FAC-2, FAC-4, SUP-1, SUP-2, SUP-3 = 6.
  - **Data finding (not changed):** ticket **FAC-4 has Project SUP**, and SUP NextTicketNo went 6 → 7 while FAC went
    4 → 5. Likely: FAC was picked first (numbered FAC-4), then the project was changed to SUP, which took another
    number but kept the ID. This is BLD-009 deviation "numbering on project pick". The row is the operator's; left
    as is and reported.
- 2026-10-31 04:18–04:21 UTC: **step 8, write probe: passes** (SUP-3, through the page's detail-pane Status list).
  - Before: SUP-3 WAITING, Resolved on empty (`25-sup3-before-probe.png`).
  - WAITING → INPROG: `call FX_SDSetStatus [SUP-3, INPROG]` → `{ok: true}` in 385 ms, "SUP-3 moved to In progress."
    (`26-sup3-inprog.png`). The script re-reads the row after UpdateCollection and fails if the status differs, so
    `ok` is itself a readback.
  - INPROG → RESOLVED (into Done): ok in 225 ms; returned `resolvedOn "2026-10-31T04:19:45"`, `updated` the same
    (`27-sup3-resolved.png`). So **`yyyyMMdd HH:mm:ss.fff` is accepted by UpdateCollection** for ResolvedOn
    (unverified → observed), and the server clock is UTC (04:19 matched UTC).
  - RESOLVED → WAITING (out of Done): ok in 388 ms; `resolvedOn ""`: **clearing with "" works** (observed).
  - FX_Tickets, Refresh, SUP-3: Status WAITING, Resolved on empty, Save disabled (`28-fxtickets-sup3-readback.png`).
    SUP-3 ends as it started (RecordDate/UpdatedBy changed, which can't be avoided).
- 2026-10-31 04:20–04:24 UTC: **step 9, comment insert: passes.** Me picker → the operator's agent (their row).
  SUP-3 → comment "FX test comment BLD-015 step 9 (to be deleted)" → `{ok: true, comments: [1]}` in 221 ms,
  **CommentID 7** (set by the script, `SetCommentIdInScript = true`), author = the operator's agent, internal false, created
  `2026-10-31T04:20:46` (`29-sup3-comment-added.png`). FX_Tickets, Refresh, row 7 (SUP-3): the comment shows in
  the comments grid (`30-fxtickets-comment-before-delete.png`). Deleted there: selected the comment cell (status bar
  "Author (Object 1 of 1)") → toolbar Delete → "Selected records will be permanently deleted upon Save." → OK → only
  the comment row marked ✕, ticket row shows ◆ (`31-comment-marked-delete.png`) → Save → grid back to the empty
  new-row placeholder, Save disabled (`32-comment-deleted-saved.png`).
- 2026-10-31 04:24 UTC: **finding: relative times 8 hours off.** The comment just posted showed "8 hours ago"
  (browser at UTC+8). The server sends UTC text with no offset; `parseDate` read it as local time.
  - Fix (page only; the script is unchanged): `SERVER_TIME_UTC = true` in app.js config; `parseDate` honours a
    trailing `Z`; `markStamps` adds `Z` to tickets' `created`/`updated` and comments' `created` as they arrive
    (load, status change, comment). Due and resolved dates stay calendar dates. `preview/stub.js` now sends UTC stamps
    too. Node check of `parseDate`, and a preview run (new comment "11 minutes ago", as the stub stamps at :15; no page
    errors).
  - Reinstall (07:21 UTC, after a usage-limit pause): Web User Control Assets → `FX_ServiceDesk/app.js` → rollback
    baseline `33-appjs-baseline-editor.yml` (differs from the new file first at the new config lines, so it is the
    step 4 install) → one fill → `34-appjs-editor-before-ok.yml` **equal: true** → OK → OK → Save (Save disabled
    afterwards).
- 2026-10-31 07:23–07:27 UTC: **step 11, Designer close/reopen** (tab closed, no prompt; Form › recent list →
  FX_ServiceDesk):
  - Form: Name FX_ServiceDesk, Form Type Flex, **Script Language Visual C#**, Unit Pixel, Size 960; 680,
    `ScopeType: User`.
  - Script Editor: Monaco model **equal** to `FX_ServiceDesk.flat.cs.txt` (454 lines, line 7
    `public class FX_ServiceDesk : FormScript`) (`35-reopen-script.png`) → Cancel; Save stayed disabled.
  - `FX_ServiceDesk/app.js` asset: `36-appjs-reopen-readback.yml` **equal: true** → Cancel, Cancel.
  - The UserControl's User Control Name could not be read back in the Designer after reopen: the Properties
    component list and Details › Components (Pane 00 › flexlayoutPane_FX_ServiceDesk) didn't show the control row
    after one inspection and one corrected attempt. Stopped there. The runtime is the evidence: the Form keeps loading
    `FX_ServiceDesk/index.html` full-width (next entry).
- 2026-10-31 07:28–07:31 UTC: **runtime with the fix.** Close Panel → Form › Open → FX_ServiceDesk still ran the old
  app.js (42,541 bytes, transferSize 0: **browser HTTP cache**, although the server answers `private, max-age=120`).
  A `fetch(…, {cache: "reload"})` of app.js, app.css and index.html from the page frame refreshed those cache entries
  (server: app.js 43,572 chars with the fix). Close/reopen → app.js 43,607 bytes, SUP-3 "Updated **3 hours ago**"
  (04:20 UTC vs 07:30 UTC), FAC-4 "Updated 4 hours ago" (`37-runtime-utc-fix.png`). Users who had the page open
  before an asset update may need a hard refresh (Ctrl+F5); see Deviations.
- 2026-10-31 07:31–07:40 UTC: **step 10, acceptance checks** (Web Client, the operator's account, Me = the operator's agent).
  - AC-2 (`38-ac2-my-work.png`): "Good afternoon, <their first name>"; Assigned to me **1**, Due this week **1**, Resolved this
    week **0**, Overdue **0**. Expected from the data: the operator's agent has only FAC-4 (OPEN, due Oct 31 = today, so not
    overdue). Picker briefly on Anna Agent: **1 / 1 / 1 / 1**, as expected (SUP-1 open, due Oct 28, overdue; SUP-5
    closed, resolved Oct 26 = Monday of this week). Picker set back to the operator's agent.
  - AC-3: All issues "Showing 9 of 9"; Assigned to me 1 (FAC-4); Resolved 3 (FAC-3, SUP-5, SUP-4); Recently updated
    9; search "drive" → 1 of 9 (SUP-2); Status In progress → FAC-1, SUP-1; Priority High → FAC-3, SUP-1; Assignee
    Unassigned → SUP-2, FAC-2; reset → 9 of 9. Every ticket's detail shows exactly its own comments (FAC-1, SUP-1,
    SUP-2 two each; the rest none) (`39-ac3-issues-detail.png`).
  - AC-4: covered by steps 8 and 9 (status change read back in FX_Tickets; comment shown in its comments grid).
  - AC-5 (`40-ac5-board.png`): five columns in status order: Open FAC-4, SUP-2, FAC-2 (3) · In progress SUP-1, FAC-1
    (2) · Waiting SUP-3 (1) · Resolved SUP-4 (1) · Closed FAC-3, SUP-5 (2, both closed within 14 days). SUP-3
    "Move to…" → In progress: ok, "SUP-3 moved to In progress." → page Refresh (new FX_SDLoad): still In progress.
    Drag SUP-3 to Waiting: ok, "SUP-3 moved to Waiting for customer." → Refresh: Waiting. SUP-3 ends as it started.
  - AC-6 (`41-ac6-projects.png`): two cards. FAC: 2 open (FAC-1, FAC-2), 0 overdue. SUP: 4 open (FAC-4, SUP-1,
    SUP-2, SUP-3), 2 overdue (SUP-1, SUP-3). Clicking FAC → Issues "Showing 3 of 3" (FAC-1, FAC-2, FAC-3) and the Board
    shows only FAC cards. Project filter cleared afterwards.
  - AC-1: desktop (1920 px) fills the Form tab (`23-runtime-first-load.png`, `37-runtime-utc-fix.png`). Browser at
    1024 px (the page gets 670 px beside the Explorer panel): sidebar collapsed to a menu button, page scrollWidth =
    clientWidth = 670 (no sideways scroll; the board scrolls inside its own area) (`42-ac1-tablet-1024.png`); "Open
    menu" opens the off-canvas sidebar, Escape closes it (`43-ac1-tablet-menu-open.png`). Window restored to 1920.
  - AC-7: the design-review table is below.

## Design review: web-design-guidelines (AC-7)
Done 2026-10-30 on the page files (rules from vercel-labs/web-interface-guidelines); copied from
`assets/FX_ServiceDesk/README.md`. The 2026-10-31 change (UTC stamps in app.js) adds no markup or styles.

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

## Status
All seven acceptance checks pass.

| AC | Result | Evidence |
|---|---|---|
| AC-1 full width; tablet collapses, no sideways scroll | pass | 23, 37, 42, 43 |
| AC-2 name + four KPIs match FX_Tickets | pass | 38 (+ Anna cross-check in the log) |
| AC-3 tabs, search, filters, "Showing x of y", detail with only its comments | pass | 39 + log |
| AC-4 status change and comment reach FX_Tickets | pass | 26–28, 29–32 |
| AC-5 board columns, counts, drag and Move to… persist | pass | 40 + log |
| AC-6 project cards and their filter | pass | 41 + log |
| AC-7 design-review findings and fixes listed | pass | table above |

## Deviations
1. **"Me" comes from the page's picker**, not the signed-in user: no form-script route to the user name is known
   here, and the operator's AgentID (a short name) differs from the sign-in name anyway. The choice is remembered in
   this browser only (request probe 2's fallback).
2. **Script header**: the installed script keeps the template's three `using` lines (Script Editor refusal, third
   observation) and uses nested types and full names instead of extra `using` lines.
3. **UTC stamps**: the server sends created/updated times as UTC text with no offset; the page marks them as UTC
   (`SERVER_TIME_UTC = true`). If the tenant's clock ever changes zone, set it to false or change the script.
4. **Browser cache after an asset update**: an open Web Client kept the old app.js through Form close/reopen. Users
   who had the page open before an update need a hard refresh (Ctrl+F5). Not handled in the page (a version query on
   the script tags would mean changing index.html with every update).
5. **UserControl readback in the Designer after reopen** couldn't be done (component not found in the lists after
   one corrected attempt); the runtime shows the control and its URL work.
6. **Data finding, not changed**: FAC-4 belongs to project SUP (ID from FAC, project switched afterwards; SUP
   NextTicketNo 6 → 7). This is phase 2's "numbering on project pick" deviation. The row is the operator's.
7. The probes leave SUP-3's RecordDate/UpdatedBy updated (its status was put back each time). CommentID 7 was used
   and deleted; the next comment gets 7 again (the script takes max + 1).

## Objects created
| Object | Type | Scope |
|---|---|---|
| `FX_ServiceDesk` | Flex Form, one Fill region; Script Language Visual C# | User (operator) |
| `FX_ServiceDeskControl` | UserControl on FX_ServiceDesk → `FX_ServiceDesk/index.html` | User |
| `FX_ServiceDesk` | C# form script (`FX_ServiceDesk.flat.cs.txt`, 453 lines) | User |
| `FX_vSDResult` | Global variable (Persistent, Global) | global object |
| `FX_ServiceDesk/index.html`, `app.css`, `app.js` | Web User Control Assets | tenant-wide |
| `UserCtrl_*`, `UserCtrlAsm_*`, `UserCtrlUrl_*` | form variables the Designer adds for the control (incl. stale `*_userControl1_USER` from the rename) | User |

No test data left behind (SUP-3 restored; test comment deleted).

## Open cleanup
- Nothing new from this build. BLD-009's open item stays: property classes FX_ProjectKey, FX_StatusCode,
  FX_PriorityCode still checked out.
- Optional, the operator's call: FAC-4's project/ID mismatch.

## Knowledge updates proposed (not applied)
- `web-user-controls.md` § C# form script: **Monaco model readback**. `window.monaco.editor.getEditors()` →
  `getModel().getValue()` reads the whole script (BLD-009 could only see visible lines); compare trimmed line by
  line. Observed twice (before OK, after reopen).
- `web-user-controls.md` / `api-calls-and-background-tasks.md`: the "class name has changed" refusal, now seen three
  times (BLD-002, BLD-009, BLD-015). Proposed rule: once the stored script is C#, keep lines 1–7 exactly as the
  template (class on line 7); put `//<Ref>` inside the class (observed working); write other namespaces out in full.
  A comment containing "class" is not the trigger (tested).
- `web-user-controls.md` § Runtime: a new Form isn't in the Web Client's Form › Open list until a portal reload; an
  asset update may need the browser cache refreshed (hard refresh) even after Form close/reopen.
- `events-and-scripts.md`: `IDOClient.UpdateCollection` accepts `yyyyMMdd HH:mm:ss.fff` for a DateTime property and
  "" clears it; an insert with the key value set by the script works (observed). The server clock and CreateDate
  are UTC in this tenant (observed).
- `portal-shell.md` § Flex Form for one full-width web page: observed end to end (Flex Basic wizard → one Fill
  region → UserControl fills it).
