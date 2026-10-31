# BLD-017 — Service desk: tablet height fix, FX_ServiceDesk at Site scope, clean slate

Status: done
Date: 2026-10-31
Account (checked at start): to be checked at the first browser step | Designer scope: expected `ScopeType: User`
Evidence: full   Guide: none
Final scope for Forms: Site for `FX_ServiceDesk` only; every other Form stays User   Group/Site save approved: yes,
"only FX_ServiceDesk needs to be site wide" (chat, 2026-10-31), plan approved (chat, 2026-10-31)
Build prefix: FX_   Existing tenant objects already starting with it (not factory-owned): n/a (default prefix; only
factory-owned objects from BLD-007/009/015/016 are touched, plus two new FX_ Forms)

Request: operator chat, 2026-10-31, after BLD-016: "the height needs to be fixed then once that's okay you can remove
all the test data"; only FX_ServiceDesk needs to be site wide. Plan: the session's approved plan (copied below).

## Goal
1. At 1024×768 the Create dialog's Create/Cancel footer is visible without scrolling the outer pane (BLD-016
   Deviations 3); desktop unchanged.
2. Other users can open the Service Desk app: FX_ServiceDesk (and the global objects it needs) saved at Site scope.
3. Clean slate: every fake ticket, comment, history row, the fake projects and the fake agents removed; the
   configuration (statuses, priorities, status rules, the operator's own agent) kept.

## Objects
| Object | Type | New / factory-owned / other | Scope | Change |
|---|---|---|---|---|
| `FX_ServiceDesk` | Flex Form + C# script | factory-owned (BLD-015/016) | User → also Site | Size height (tablet fix); Site version saved |
| `FX_ServiceDesk/index.html`, `app.css`, `app.js` | Web User Control Assets | factory-owned (BLD-015/016) | global objects | only if the fallback tablet fix is needed; Site version if the save needs one |
| `FX_vSDResult` | Global variable | factory-owned (BLD-015) | global object | Site version if the save needs one |
| `FX_TicketHistory`, `FX_TicketComments` | Classic Multi-View Forms | new (FX_) | User | create, to delete rows; kept as admin screens |
| FX_Tickets, FX_TicketComments, FX_TicketHistory, FX_Projects, FX_Agents rows | fake test data | factory-owned / operator's test rows | data | delete (operator's own agent kept) |

## Approvals required (fill before building)
| Object the factory doesn't own, or tenant-wide operation | Why | Rollback | Operator approval (quote + date) |
|---|---|---|---|
| Site-scope save of `FX_ServiceDesk` and its global objects | other users must open the app | revert the Site versions (User versions untouched) | "only FX_ServiceDesk needs to be site wide" (chat, 2026-10-31); plan approved |
| Unload global form objects / metadata-cache refresh when switching scope | docs require it before reopening under another scope | none needed (cache reloads) | "Yes, approved" (question answer, 2026-10-31), this task only |
| Delete all fake data incl. the operator's FAC-4 and the fake agents/projects | clean slate | before-readbacks in `evidence/BLD-017/` (re-enter by hand) | "Clean slate + fake setup" (question answer, 2026-10-31) |

Site check: a second normal account (operator's choice "A second account"); never the read-only Mock account.

## Plan (each step ends with a Save and a readback)
0. Intake (this file); account check.
1. Tablet fix in User scope: measure the pane at 1024×768; lower FX_ServiceDesk Size height; Save, reopen,
   readback; runtime 1024×768 (footer visible, no outer scroll), 1920×945 (Fill still full height?), 768×1024.
   Fallback if the desktop view shrinks: Size back, cap the dialog in the page instead (asset route).
2. Site prerequisites (read only): Site Developer permission; User-scope readback for rollback.
3. Site save probe: Impersonate Site, unload, open FX_ServiceDesk (`ScopeType: Site`), save Form + global objects,
   close/unload/reopen readback, back to User.
4. Second-account check (read only), before the cleanup.
5. Clean slate: temporary Forms FX_TicketHistory / FX_TicketComments, delete rows, then tickets, projects, agents;
   readbacks; app empty states.
6. Record.

Steps relying on **unverified** knowledge (probe first): 1 (Flex Fill vs Size), 3 (Site save, docs only), 4
(other users' permissions).

## Acceptance checks
- AC-1: 1024×768: Create dialog footer visible, no outer scroll; 1920×945 height unchanged.
- AC-2: Designer reopen shows `ScopeType: Site`, readback equal to the User version.
- AC-3: a second account loads the app and sees the data.
- AC-4: FX_Tickets, FX_TicketComments, FX_TicketHistory, FX_Projects 0 rows; FX_Agents only the operator's agent;
  the app shows empty states, no console errors.

## Rollback / cleanup
- Tablet: Size back to 960; 680, or reinstall the BLD-016 assets (`evidence/BLD-017/rollback/`).
- Site: revert the Site versions of FX_ServiceDesk and its global objects.
- Data: re-enter from the before-readbacks in `evidence/BLD-017/`.

## Build log
- 2026-10-31: brief written from the approved plan.
- 2026-10-31: **step 0.** Account: Designer status bar `ScopeType: User` with the operator's own scope name (not the
  read-only Mock account). Rollback copies of the current assets and scripts: `evidence/BLD-017/rollback/`.
- 2026-10-31: **step 1, tablet fix (AC-1 passes; probe, now observed).**
  - Before, 1024×768: Form pane body 590 px high, app iframe 684 px (Size height 680 + 4), so the pane scrolled
    (`01-before-tablet-1024x768.png`). At 1920×945 the iframe was already 767 px: the Flex Fill region stretches to
    the pane, and Size acts as a **minimum**.
  - Designer FX_ServiceDesk › Properties › Form: Size `960; 680` → double-click Size → Height value cell (the
    middle `pgvaluecolumn` cell; the last cell is a button column) → `560` → Tab → Size `960; 560` → Save → Save
    disabled again (`02-designer-size-560-saved.png`).
  - Close (no prompt) → Form menu recent FX_ServiceDesk → Size `960; 560`, Unit Pixel, `ScopeType: User`.
  - Runtime: three stale FX_ServiceDesk tabs closed (no prompt) → Open → Select Form → FX_ServiceDesk.
    - 1024×768: iframe 590 px = the pane, no outer scroll. Create issue dialog 16–574 px inside the 590 px frame,
      Create/Cancel at 521–557, the fields scroll inside the dialog (`03-tablet-create-dialog-fixed.png`).
      Cancelled, nothing typed.
    - 1920×945: iframe 767 px, unchanged, no outer scroll (`04-desktop-1920x945-unchanged.png`).
    - 768×1024: iframe 729×846, page has no horizontal overflow; the Board columns scroll inside the page as
      designed (`05-portrait-768x1024.png`). Width 960 is not a hard minimum either.
  - The fallback (capping the dialog in the page) was not needed; the assets are unchanged.
  - Side note: pressing Enter in Select Form's filter box runs OK on the selected row (it opened FX_Tickets); type
    the filter and wait instead.
- 2026-10-31: **step 2, Site prerequisites.** Designer Help › About: "Currently logged in as [the operator], **Site
  Developer**, edits create user versions for user [the operator]" (no screenshot: it shows the user name). Rollback
  sources for the User version: `evidence/BLD-017/rollback/` (script hash 5f0382…, the BLD-016 readbacks).
- 2026-10-31: **step 3, Site save (AC-2 passes; probe, now observed — first Site save in the factory).** Steps as seen:
  1. Close FX_ServiceDesk (and FX_StatusTransitions, FX_Tickets, so nothing else could be saved at Site).
  2. Form › Definition › **Site Developer Impersonation** → dialog "Identify Your Editing Scope": Scope options
     *Site Default / User / Group*; picked **Site Default** (the User field disappears) → OK
     (`06-impersonation-site-default.png`) → notice "You may want to unload all global objects before editing to
     ensure that you load the correct versions" → OK. Status bar `ScopeType: Site Default`.
  3. Form › Definition › **Unload All Global Form Objects** (approved) → no message.
  4. Form menu recent FX_ServiceDesk → "Warning: Form FX_ServiceDesk is not locked...design anyway?" (Form Control
     lock; `07-site-not-locked-warning.png`) → Yes. It opened with the User version's content (Size 960; 560), Save
     disabled.
  5. To make the Form dirty without changing it: Height 561 → Tab → 560 → Tab (Size back to `960; 560`) → Save →
     "…is not locked...save anyway?" → Yes → Save disabled (`08-site-form-saved.png`).
  6. **Global objects are scoped too.** At Site scope, Edit › Web User Control Assets listed only `$app`, `mongoose`,
     `sohoComponents`, `sohoxi` (no FX_ folders), and Edit › Variable listed 49 variables, none FX_. So other users
     would have had no page and no result variable.
     - Assets: + → `FX_ServiceDesk/index.html`, `…/app.css`, `…/app.js` (each "Version: Site Default version") →
       each filled from the `*.flat.*` install copies (`locator.fill`) → compare-readback before OK **equal**
       (`09-site-index-before-ok.yml`, `10-site-appcss-before-ok.yml`, `11-site-appjs-before-ok.yml`) → OK →
       Global Objects OK → Save → disabled.
     - Variable: + → `FX_vSDResult` → OK (one click was enough) → Persistent True, Global True, "Site Default
       version" → Global Objects OK → Save → disabled.
  7. Close → unload → reopen (Yes to the lock warning) at Site:
     - Form Properties **Version: Site Default version**, Size `960; 560`, Flex, Visual C#
       (`12-site-form-reopened-version.png`);
     - script (largest visible Monaco editor) 927 lines, hash **5f0382…, equal** to `FX_ServiceDesk.flat.cs.txt`;
       Script Editor cancelled;
     - assets: all three "Site Default version", compare-readback after reopen **equal**
       (`13-site-index-reopen.yml`, `14-site-appcss-reopen.yml`, `15-site-appjs-reopen.yml`);
     - FX_vSDResult: Persistent True, Global True, Site Default version.
  8. Back to User: close the Form → Impersonation → Scope **User**; the User field comes up **empty** and must be set
     to the operator's own user (typed with the secret placeholder) → OK → status bar `ScopeType: User` with the
     operator's name, About "edits create user versions for user [the operator]" (both checked in code against the
     typed value) → Unload All Global Form Objects.
  - **Open point:** reopening FX_ServiceDesk in User scope afterwards showed Properties "Version: Site Default
    version", while the assets correctly showed "User version for user [the operator]". Likely the Designer's form
    cache (the unload command names *global* objects; the docs say forms are cached "regardless of the current Site
    Developer impersonation"). Both versions are identical, so nothing differs for the operator now. Not changed;
    nothing was saved in that state. A fresh Designer session would settle it.
  - Not touched: every other Form stays User; no Group save, FormSync or deployment.
- 2026-10-31: **step 4, second-account check (AC-3 passes, operator's report).** The operator signed in with a different
  normal account in another browser and could open FX_ServiceDesk: "yes it works I sign in in another browser using a
  different account and I have access to FX_ServiceDesk" (chat, 2026-10-31). Not observed by the factory directly; no
  screenshot from that account.
- 2026-10-31: **between steps 4 and 5: Designer relaunch came up in Site scope.** The Designer tab had been closed
  (not by the factory). Relaunched from the Web Client toolbar Designer button: status bar `ScopeType: Site Default /
  ScopeName: [NULL]`, and it tried to open FX_ServiceDesk ("not locked...design anyway?") → **No** (nothing opened or
  saved). Switched back to User (Impersonation → User → the operator's user via the secret placeholder → OK →
  `ScopeType: User` with the operator's name) → Unload All Global Form Objects.
  - Then, in User scope in this fresh session, FX_ServiceDesk still showed **Version: Site Default version**, while
    FX_Tickets showed "User version for user [the operator]". So this is not the cache: after the Site save the
    operator has **no User version** of the FX_ServiceDesk Form any more; the operator now runs the Site version
    (identical content). The page assets still have User versions.
  - Lesson: after any Designer launch, read the status bar before working; a launch can inherit Site scope.
- 2026-10-31: **step 5, clean slate (AC-4 passes).**
  - Temporary Forms (Designer, User scope; Form › Definition › New → Category list "WinStudio classic form wizards"
    → Wizard field + ArrowDown → Multi-View → OK): `FX_TicketHistory` and `FX_TicketComments` (Data Source = the
    IDO of the same name; page 2 already held all columns; Save Template unchecked) → "Process Completed
    Successfully" → "User version for user [the operator]". No "already exists" prompt, so neither existed. Kept as
    admin screens. Portal reloaded so Select Form lists them (beforeunload cleared itself).
  - Before-readbacks: `18-before-tickethistory.txt` (6 rows), `20-before-ticketcomments.txt` (6),
    `21-before-tickets.txt` (10; SUP-6 no longer existed), `22-before-projects.txt` (2), `23-before-agents.txt` (5).
  - Deletes, each row: select → toolbar Delete → "Selected records will be permanently deleted upon Save." (title
    names the Form) → OK → Save → re-read; the loop stopped on any other prompt or a count that didn't drop by one.
    - FX_TicketHistory 1–6, FX_TicketComments 1–6, FX_Tickets FAC-1…4, SUP-1…5, SUP-7, FX_Projects FAC, SUP,
      FX_Agents agent.anna, agent.ben, lead.carla, tech.dev. All removed, no messages.
    - Correction (projects): the first row match used a regex on the row text, which starts with a row number, and
      found nothing (nothing deleted). The corrected attempt matched the cell whose text equals the key.
    - The history and comments Forms show one blank add-mode row (placeholder ID 1) when empty; it is never saved.
  - Readback after close/reopen + Refresh in each Form: FX_TicketHistory and FX_TicketComments only the blank add
    row (`19-tickethistory-empty-after-reopen.png`); FX_Tickets 0, FX_Projects 0, FX_Agents only the operator's agent;
    FX_StatusTransitions still 10 rows.
  - App (FX_ServiceDesk → Refresh): all KPIs 0, empty states ("Nothing here.", "Every open ticket has an owner.",
    "No activity yet."), no console errors from the page (`24-app-empty-after-cleanup.png`). Small gap: "Your
    projects" has no empty-state text (noted for the next build).
- 2026-10-31: **step 6, record.** Status: done. AC-1 tablet, AC-2 Site save, AC-3 second account (operator's report),
  AC-4 clean slate all pass.

## Deviations
1. Global objects needed their own Site versions (three assets + FX_vSDResult), created by hand at Site scope; the
   Form save alone did not carry them.
2. After the Site save the operator's User version of the FX_ServiceDesk Form was gone (the Site version is used for
   everyone, including the operator). Rollback is now: revert the Site version (only after re-creating a User
   version, or everyone loses the app).
3. A Designer relaunch inherited Site scope; switched back before any work.
4. The two temporary Forms are kept as admin screens (User scope).

## Objects created or changed
- `FX_ServiceDesk` Form: Size height 680 → 560 (User, then Site; User version now absent).
- Site versions: Form `FX_ServiceDesk`; assets `FX_ServiceDesk/index.html`, `app.css`, `app.js`; global variable
  `FX_vSDResult`.
- New Forms (User): `FX_TicketHistory`, `FX_TicketComments`.
- Data deleted: see the before-readbacks 18, 20–23.

## Knowledge notes (proposed; recipes not edited)
- Site save route (steps 3 and 8 above): **observed**, first time. Candidate text for `playbooks/forms.md` § Group or
  Site scope, including: global objects are scoped too; the Form Control "not locked" prompts; Impersonation back
  to User needs the user name re-entered; a launch can inherit Site scope; the User version of a saved Form
  disappears.
- Flex Form Size is a minimum height/width; the Fill region stretches to the pane (step 1): **observed**.
- Deleting rows in a Classic Form (Delete → OK → Save, one at a time): **observed**.
