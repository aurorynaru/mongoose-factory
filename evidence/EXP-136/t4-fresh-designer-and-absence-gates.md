# EXP-136 T4 - Fresh Designer, absence gates and session-expiry stop (checkpoint, BLOCKED)

Run: `R-20261026-062909-9GoC` · task `T4` · cycle 5 · worker session `5a1881bc-5233-4e91-a078-ae1cc0a81fa9` · task_message_id `2eabe8aa-916a-40d8-b63f-684abc8cfede`.

**Result: BLOCKED (stopped). Two of three absence gates were observed; the Select Form gate for `FX_InventoryDashboard` was NOT performed because a Session Expired modal interrupted the Web Client. One documented session recovery was used (OK, one navigation, one banner dismissal). The Mongoose Web Client was NOT re-opened, so "session re-established" is NOT achieved. No application mutation was performed. AC-1 and AC-2 remain PENDING. No FX_ artifact was created.**

## 1. Sources read before browser action

- `evidence/EXP-136/t1-preflight-source-gate-and-blocker.md` (read in T1; not re-read in full here).
- `evidence/EXP-136/t2-web-client-identity-checkpoint.md` (full, read in T3).
- `evidence/EXP-136/t3-global-variable-absence-checkpoint.md` (full, read in T4).
- `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` (status header, first 40 lines, read in T4).
- `recipes/session/session-expiry-and-stale-designer.md` (full, read in T4 before the session-expiry step).

## 2. Operator-supplied source hashes (recorded, NOT worker-computed)

| File | Commit | SHA-256 (operator-supplied) | Worker computation |
| --- | --- | --- | --- |
| `assets/FX_Inventory/index.html` | `d4b99db` | `53baed0a9ce30a4c4d76bbd59eae9bb7ad531e29a3bc7b091aafb157633cd21d` | **Not computed.** No hashing tool is permitted (Bash disabled; no browser JavaScript). |
| `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` | `d4b99db` | `3a21099492d1e4565f18df4a58033497101681838654ad3fc7866a61658bfc0f` | **Not computed.** |

These values are associated with the T1 readable contents (`evidence/EXP-136/t1-preflight-source-gate-and-blocker.md` section 2): HTML 71 lines, C# 32 lines, bridge strings present. The worker did not verify byte identity, and it did not modify either source file.

## 3. Browser actions (in order)

| # | Action | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list (read-only, before any selection) | 4 tabs (0 Designer `FX_InventoryEditor`, 1 Designer `FX_LoginPortal` with Error dialog, 2 Designer start page, 3 portal `Mongoose`). |
| 2 | `browser_tabs` select 3 | Succeeded. |
| 3 | `browser_snapshot` (fresh read, not recovery) | Web Client header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Form tab `FX_InventoryEditor` (runtime). No modal. |
| 4 | `browser_find` `new window` | No match. |
| 5 | `browser_hover` on f1e54 (wrench icon, `mgtoolbarbutton-1124`) | Hover ran. Tooltip not visible. |
| 6 | `browser_find` `Open designer` | No match. |
| 7 | `Grep` of hover snapshot file | Only `Designer` names; no tooltip text. |
| 8 | `browser_take_screenshot` `t4-webclient-designer-button-hover.png` | Saved. Tooltip not visible in image. |
| 9 | `browser_hover` on f1e57 (tools icon, `mgtoolbarbutton-1125`) | Hover ran (one corrected inspection: second candidate control). |
| 10 | `browser_find` `designer in a new window` | **Tooltip found**: `Open designer in a new window` (under the f1e57 hover). |
| 11 | `browser_click` f1e57 (the single Designer launch) | Succeeded. New tab 4 appeared with URL `…/WSWebClient/designer/default.aspx?MGForm=FX_InventoryEditor`. |
| 12 | `browser_tabs` select 4 | Succeeded. Title `Designer`. |
| 13 | `browser_snapshot` (fresh read) | `Identify Your Editing Scope` dialog visible with Scope `User` and User `anton.ramos@3mworks.com.ph` pre-set. |
| 14 | `browser_click` OK on scope dialog (f1e305) | Succeeded. Dialog closed. Values not changed. |
| 15 | `Grep` snapshot file (scope and Form) | Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Form tab `FX_InventoryEditor` (selected, existing clean Form; not edited). |
| 16 | `browser_click` Edit (f1e5) — liveness probe, open | Menu rendered (Undo, Redo, Copy, Cut, Paste, Form Script, Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets, Revert Global Object Definition). |
| 17 | `browser_click` Edit (f1e5) — liveness probe, close | Menu closed. `Grep` finds no menu or dialog. No menu entry selected. |
| 18 | `browser_click` Edit (f1e5) — open for Global Objects inspection | Menu rendered. |
| 19 | `browser_snapshot` (fresh read to obtain menu refs, depth 4) | Refs for `Variable` (f1e607) and `Web User Control Assets` (f1e611). Not a recovery snapshot. |
| 20 | `browser_click` Variable (f1e607) | Opened `Global Objects` dialog (Variables list). |
| 21 | `Read` of dialog section + `Grep` `FX_` in snapshot file | List shows `FX_vEcho` and `FX_vLoginResult` (positive control `FX_vEcho` observed). No `FX_vInventoryJson` row between them. |
| 22 | `browser_type` `FX_vInventoryJson` into dialog filter (f1e629) | Text entered. **The list did NOT filter** (still unfiltered). Enter not pressed. |
| 23 | `browser_find` `FX_v` | Filter box shows `FX_vInventoryJson`; list still shows `FX_vEcho`, `FX_vLoginResult`. |
| 24 | `browser_take_screenshot` `t4-global-objects-absence-dialog.png` | Saved and viewed (section 4). |
| 25 | `browser_find` `Cancel` → f1e922; `browser_click` Cancel | Dialog closed. `Grep` of follow-up snapshot: no dialog, no menu. |
| 26 | `browser_click` Edit (f1e5) — open for Web Assets inspection | Menu rendered. |
| 27 | `Grep` for `Web User Control Assets` → f1e611; `browser_click` f1e611 | The wrapper resolved `#menuitem-1059-itemEl`. Result: the `Global Objects` container title, but the content is the **Web Assets** tree (`$app`, `FX_Bridge`, `FX_Login`, `mongoose`, `sohoComponents`, `sohoxi`). |
| 28 | `browser_find` `Web User Control` | No match (title text only). |
| 29 | `browser_take_screenshot` `t4-unexpected-global-objects-after-wuca-click.png` | Saved and viewed (section 4). |
| 30 | `browser_find` `FX_Login` → f1e959; `browser_click` f1e959 | Selected the folder; did not expand. |
| 31 | `browser_press_key` ArrowRight | Expanded `FX_Login` (shows `script` folder and `index.html`). |
| 32 | `browser_find` `index.html` | Found under `FX_Login` (f1e1029). |
| 33 | `browser_take_screenshot` `t4-web-user-control-assets-absence-dialog.png` | Saved and viewed (section 4). |
| 34 | `browser_find` `Cancel` → f1e1016; `browser_click` Cancel | Dialog closed. `Grep` confirms no dialog or menu. |
| 35 | `browser_tabs` select 3 | Succeeded (tab list had been taken at step 1). |
| 36 | `browser_find` `Open` → toolbar Open f1e25 | Ref found. |
| 37 | `browser_click` f1e25 (Select Form, toolbar Open) | **TIMEOUT** at "visible, enabled and stable": `div id="ext-element-51" class="x-mask"` intercepts pointer events. Not repeated. |
| 38 | `browser_snapshot` (recovery fresh snapshot, the one allowed for this task) | **`alertdialog "Session Expired"`** visible on tab 3 with text `Your session has expired.` and OK (f1e261). |
| 39 | `Read` recipe `recipes/session/session-expiry-and-stale-designer.md` | Procedure read. |
| 40 | `browser_click` OK f1e261 (session procedure step 2, once) | Modal closed. |
| 41 | `Grep` snapshot after OK (no sign-in form, no modal) | No `Sign In`, `Username`, `Password`, `CloudIdentities` or `Session Expired` text in the Web Client snapshot. |
| 42 | `browser_navigate` to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (session procedure step 2, once; the URL exactly as given in the session procedure) | Navigation ran. A `beforeunload` dialog appeared. |
| 43 | `browser_handle_dialog` accept=true (leave page; no unsaved work existed in tab 3) | Accepted. |
| 44 | `browser_wait_for` 3 s | Tab 3 now `System Administrator` portal workspace (`…/89e55a10-…?inforWorkspace=infor.common.sysadmin.productivity`). No sign-in form. |
| 45 | `Grep` of the post-wait snapshot file | No sign-in form. Portal notification banner `The DistributionIFSContactUs group does not have any active users…` with `Close notification` (f2e409). Mongoose appears only as a Cloud Status row (not the app launcher). |
| 46 | `browser_click` banner close (f2e409) | Banner dismissed (`Grep`: no `DistributionIFSContactUs` text). Page URL unchanged; no redirect. |
| 47 | `browser_click` `Open navigation menu` `e15` | **Ref not found** (`Ref e15 not found in the current page snapshot`). |
| — | (stop) | Recovery allowance exhausted (one fresh snapshot used at step 38). A second fresh snapshot would exceed the task budget, so no further action was taken. |

### Counts

- Tab lists: 1 at the start (plus the list taken before step 35 in the same task; the tab-selection rule was met).
- Tab selects: 4 (3, 4, 3, 3). All succeeded.
- Fresh untargeted snapshots: steps 3, 13, 19 (reads, not recovery) and step 38 (recovery).
- Corrected inspections (recovery): hover on the second candidate control (step 9) used to find the tooltip; this was not a repair of a failed action.
- Recovery after failure: the step 37 overlay timeout was handled with the one fresh snapshot (step 38). Ref-not-found at step 47 was **not** recovered because the budget was spent.
- Designer launch clicks: **1** (step 11). Not repeated.
- Edit-menu clicks: 6 (probe open/close at steps 16-17; inspection open at steps 18, 26; Edit opened again for each dialog). The probe itself was one open and one close, as required.
- Global Objects dialog opened: 1. Web Assets dialog opened: 1. Each closed with Cancel. No value committed.
- Filter typed: 1 (step 22) into the Global Objects filter box; did not apply and was not committed.
- Scope OK click: 1 (step 14), on the pre-set values.
- Session procedure: OK on the modal (1), one top-level navigation (1), one `beforeunload` accept (1), one banner dismissal (1). No credentials typed. No sign-in performed.
- Browser JavaScript / run-code: 0 worker-authored. (The `Ran Playwright code` lines are MCP click, hover, fill and screenshot wrappers.)
- Mutations (create, edit, Save, close, reopen, Portal reload by the worker's own action, Refresh, inventory write): **0**. The navigation at step 42 was the session-expiry procedure's single allowed navigation, not a Portal reload.

## 4. Screenshots (described; manual attachment may be required)

| File | Shows (proven) | Does NOT prove |
| --- | --- | --- |
| `evidence/EXP-136/t4-webclient-designer-button-hover.png` | Web Client tab 3 header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (top-right); runtime `FX_InventoryEditor` grid; Save disabled; no modal. | The Designer tooltip (not visible in this image); which toolbar button was hovered. |
| `evidence/EXP-136/t4-global-objects-absence-dialog.png` | Designer tab 4 (behind dialog) Form `FX_InventoryEditor`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Global Objects dialog listing `FX_vEcho` (positive control) and `FX_vLoginResult` adjacent, with no `FX_vInventoryJson` row between them; filter box text `FX_vInventoryJson` with the list unfiltered. | That the list is complete (only the rendered rows are visible; the list was not scrolled to the end); that the filter applied. |
| `evidence/EXP-136/t4-unexpected-global-objects-after-wuca-click.png` | Dialog titled `Global Objects` whose content is the **Web Assets** tree: `$app`, `FX_Bridge`, `FX_Login`, `mongoose`, `sohoComponents`, `sohoxi`. No `FX_Inventory` root folder. Footer shows User scope. | That this is the target Web User Control Assets list (it is; the title is shared). |
| `evidence/EXP-136/t4-web-user-control-assets-absence-dialog.png` | Web Assets tree with `FX_Login` expanded to `script` and `index.html` (positive control `FX_Login/index.html`). No `FX_Inventory` root folder. | Absence within any subfolder other than the root; that a filter was applied (no filter was used here). |

Assessment: the three decisive screenshots show the Designer identity, the existing lists and the positive controls. The hover screenshot does not show the tooltip, which was verified by the accessibility tree instead (step 10).

## 5. Absence gates (AC-1 inputs)

| Gate | Target | Positive control | Result | Status |
| --- | --- | --- | --- | --- |
| Global Objects (Designer tab 4) | `FX_vInventoryJson` | `FX_vEcho` visible | No `FX_vInventoryJson` row between `FX_vEcho` and `FX_vLoginResult` in the unfiltered alphabetical list. | **Observed absent** (unfiltered list; the filter did not apply; full-list coverage not verified by scrolling). |
| Web User Control Assets (Designer tab 4) | `FX_Inventory/index.html` | `FX_Login/index.html` visible | No `FX_Inventory` folder at the Web Assets root (six roots: `$app`, `FX_Bridge`, `FX_Login`, `mongoose`, `sohoComponents`, `sohoxi`). | **Observed absent** at root level (the asset path requires an `FX_Inventory` root folder). |
| Select Form (Web Client) | `FX_InventoryDashboard` | `FX_InventoryEditor` | **NOT performed.** Blocked by the Session Expired modal at step 37-38. | **Not established.** |

## 6. Acceptance status after T4

- **AC-1: pending.** Established: Web Client header account and configuration (step 3); Designer tab 4 User scope and account (steps 13-15, screenshot); Global Objects absence of `FX_vInventoryJson` with positive control `FX_vEcho` (steps 20-24); Web Assets absence of `FX_Inventory/index.html` at root with positive control `FX_Login/index.html` (steps 26-33). **Not established: Select Form absence of `FX_InventoryDashboard`** (session interruption). AC-1 needs this third gate and the stop-state checks before creation.
- **AC-2: pending.** Operator-supplied SHA-256 values are recorded (section 2) and marked operator-computed. The worker did not compute, verify or cross-check them, and byte identity to the committed files is not established by the worker. T1 readable contents and bridge strings are the only worker-side source evidence.
- AC-3 to AC-13: not evaluated (no mutation; T4 was a preflight stop).

## 7. Blocker and state for the coordinator

1. **Session expired during T4.** The Web Client showed the `Session Expired` modal at step 37-38 after the Select Form click timed out on an `x-mask` overlay. The documented procedure was applied once: OK, one navigation to the portal URL, leaving the `beforeunload` page, and one banner dismissal. The portal shows the `System Administrator` workspace. **The Mongoose app was not opened and no sign-in was performed.** The step 47 `e15` navigation-menu click failed because its ref was stale, and the recovery budget was spent. This means "session re-established" is **not** achieved.
2. **Unfinished Select Form gate.** `FX_InventoryDashboard` absence in the Web Client Select Form list was not checked.
3. **Open tabs left in place:**
   - Tab 1 Designer `FX_LoginPortal` still shows the `server event processing returned an error` modal from T3. It was not touched in T4.
   - Tab 4 is a new Designer (`MGForm=FX_InventoryEditor`), scope User, clean, Save disabled. It may have expired with the session; this was **not** verified.
   - Tab 0 and tab 2 were not touched.
   - Tab 3 is the portal `System Administrator` page with the Mongoose app not open.
4. **Next permitted action (for the coordinator):** a fresh task with its own recovery allowance. It should (a) read tab 3 and the portal state; (b) complete the documented session step 4 (open Mongoose from the portal, keep the default configuration, sign in only if the configuration sign-in appears), without typing any value other than the SECRET placeholders; (c) recheck the header account and configuration; (d) perform the Select Form absence gate for `FX_InventoryDashboard` with positive control `FX_InventoryEditor`, then cancel. Tab 4 should be treated as expired until verified. An operator decision on the Tab 1 error dialog is still needed.

## 8. Unexplained warnings (recorded, not diagnosed)

- Page console counter: tab 3 `15 errors, 10 warnings` (T2 and step 3); after the session modal `31 errors, 11 warnings` (step 40) and `32 errors, 11 warnings` (step 42); after portal load `0 errors, 9 warnings` (step 44).
- Tab 4 console `1 errors` then `2 errors`.
- The Global Objects filter did not apply after typing (step 22-23).
- The Web Assets dialog shares the `Global Objects` title (step 27-28).
- The Edit-menu `Revert Global Object Definition` entry exists and was not used.

## 9. Mutation ledger (T4)

Created: 0. Modified: 0. Saves: 0. Closes: 0 (no Form closed). Reopens: 0. Portal reloads: 0 by worker action (one session-procedure navigation). Refresh activations: 0. Forms opened: 0 new (the Designer tab 4 opened `FX_InventoryEditor` automatically, not by the worker). Global variables: 0. Web User Control Assets: 0. Components: 0. Script methods: 0. Event handlers: 0. Browser JavaScript: 0. Credentials read or printed: 0. Credentials typed: 0.

## 10. Files written in T4

- `evidence/EXP-136/t4-fresh-designer-and-absence-gates.md` (this file, new).
- `evidence/EXP-136/t4-webclient-designer-button-hover.png` (new).
- `evidence/EXP-136/t4-global-objects-absence-dialog.png` (new).
- `evidence/EXP-136/t4-unexpected-global-objects-after-wuca-click.png` (new).
- `evidence/EXP-136/t4-web-user-control-assets-absence-dialog.png` (new).
- `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` (status and T4 section updated).
- Outside the experiment directory, the browser tool wrote snapshot and console log files under `evidence\playwright\`. These are harness outputs, not worker-written files.
