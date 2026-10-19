# EXP-118 - Hello World Part 8 Phase 2 runtime check: FX_CustomerPortal sign-in and GridItems tiles

Status: **accepted (observed) — operator, 2026-10-19; see Outcome (operator) at the end.** Run complete in the Web Client (T1-T3). T1 gate, T2 runtime open and T3 sign-in check, close without saving and final audit are all recorded below. The runtime Form was closed once with no save prompt. The Designer was not used after T1. Outcome is pending operator review.
Target: User-scope Form `FX_CustomerPortal`, Web Client (runtime), Hello World Part 8 Phase 2 (tutorial 04:32-04:47).
Brief: operator T1-T3 brief for run R-20261019-225821-Tri4, cycle 0. Scope: observe only; no Save, no Designer change, no record or global object change.
Evidence directory: `evidence/EXP-118/`.

Question: after the Phase 2 Designer work of EXP-117 (GridItems Tile Form `FX_ItemsTile`, Tile When Always, handler `FX_SignInBtn` Collection Refresh of "secondary collection 2", `ButtonSignIn2` Primary event `FX_SignInBtn`), does a runtime sign-in click on `ButtonSignIn2` make GridItems show `FX_Items` records as `FX_ItemsTile` tiles, and does the handler's `object2` reach the FX_Items collection? Findings are observed only. The sign-in is a UI demonstration, not authentication (tutorial instruction 4).

## Sources reviewed (T1, before any browser action)

- `AGENTS.md` (repository file).
- `docs/mongoose/transcripts/hello-world-pt8.md`: "Instructions for AI agents" lines 12-22; Phase 2 lines 114-123; transcript lines 362-364 (4:32-4:43).
- `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections: `experiments/EXP-117-...md` line 665; `experiments/EXP-116-...md` line 1552 (the pending paragraph heading "Outcome (operator)" and the 2026-10-18 Outcome, both read because one read started at line 1552); `experiments/EXP-111-...md` line 1309; `experiments/EXP-095-...md` line 956.
- Locating reads only: a Glob for the EXP-118 record and evidence path (none existed before this task) and a content search for `Outcome` headings in the four named records.

## Starting state (T1 gate)

- **Tabs (listed before the first selection):** 0 = Web Client (`Mongoose` page in the Infor OS portal; the Mongoose frame is an iframe of that page). 1 = Web Designer (`Infor Mongoose Application Development Framework`, `designer/Default.aspx`; its URL carries `MGForm=FX_CustomerPortal`).
- **Session:** both tabs show the Mongoose UI. No Session Expired modal, no sign-in form, no `Logout Successful` text was seen. No server-event error was raised.
- **Designer (tab 1):** one Form tab open, `FX_CustomerPortal` (selected). Scope bar reads `[ ScopeType: User / ScopeName: <operator user> ]`. Form Type Flex. Toolbar `Save` disabled, `Regenerate Form` disabled, `Undo` and `Redo` disabled. Console baseline **2 errors, 0 warnings**.
- **Web Client (tab 0):** no runtime Form open (main area empty, no Form tab in the strip). Toolbar `Save` and the other record buttons disabled. Console baseline **3 errors, 10 warnings** (EXP-117 recorded 2 throughout; this 3 is the start-of-task baseline for the stop rule in T2 and T3, not an in-task rise).

## Recent-forms check (Web Client Form menu, view only)

Form menu entries, top to bottom: `Open`; `Close and Save Changes` (disabled); `Close and Cancel Changes` (disabled); `Definition`; `Sign Out`; recent forms `FX_CustomerPortal`, `FX_Items`, `FX_FlexProbe01`, `FX_OrdersChart`, `FX_Orders`, `FX_HelloWorld01`; then `IDO Properties`, `IDOs`, `Sql Tables`, `IDO Projects`.

**`FX_CustomerPortal` is listed** as the first recent-forms entry, so T2 uses the recent-forms route (EXP-095 route). Nothing was chosen from the menu; `Sign Out` was not clicked.

Evidence: `evidence/EXP-118/t1-01-webclient-form-menu-open.png` (viewed). It shows the menu open with the entries above and the empty main area. It does not prove that the recent-forms list is complete or that the entry opens the Form (T2 will show that).

## Menu close

The first close attempt, an `Escape` key press, did not close the menu (the next snapshot still showed it open). The Form menu-bar button was then clicked once more (the same reference) and the menu closed; the following snapshot shows the menu gone, the `Form` button no longer expanded, and the Explorer view back. No menu item was chosen. Note for T2: `Escape` did not dismiss this menu, so a menu-bar toggle is the verified way to close it.

## Action audit (cumulative, through T1)

| Action | Count |
|---|---|
| Tab list (`browser_tabs` list) | 1 |
| Tab select (index 1 Designer, index 0 Web Client; both after the list, both succeeded) | 2 |
| Explicit browser snapshots | 6 |
| Web Client Form-menu opens (click on the Form menu-bar button) | 1 |
| Web Client Form-menu closes (click on the same Form menu-bar button; effective) | 1 |
| Escape key press (no effect on the menu) | 1 |
| Clicks in total (both on the Form menu-bar button) | 2 |
| Screenshots taken | 1 (`t1-01`) |
| Designer changes, Designer saves, Designer Regenerate | 0 |
| Runtime Form opens / closes | 0 / 0 |
| Typed entries | 0 |
| Runtime button clicks (incl. ButtonSignIn2) | 0 |
| Tile or grid-row clicks; scrolls; Filter in Place; F4; Refresh | 0 |
| Runtime Saves; Yes answers to any prompt | 0 |
| Prompts or dialogs seen | 0 |
| Server-event errors | 0 |
| Console-count rises | 0 (Web Client 3 at every check; Designer 2 at its check, no action after it) |
| Re-logins; navigations; refreshes; restarts; unloads | 0 |
| Recovery fresh snapshots (Ref not found) | 0 |

The tool also wrote its own snapshot file for each click response (see the tool-written list below); these are not separate worker snapshot calls.

## File inventory (T1)

Worker-written (repository):
- `experiments/EXP-118-hello-world-part-8-phase-2-runtime-sign-in-tiles.md` (created in T1).
- `evidence/EXP-118/t1-01-webclient-form-menu-open.png`.

Tool-written (browser tool, not worker-authored; listed for completeness, the console logs were not read):
- `evidence/playwright/page-2026-10-19T14-58-58-852Z.yml` (snapshot output of the menu-open click).
- `evidence/playwright/page-2026-10-19T14-59-16-362Z.yml` (snapshot output of the menu-bar toggle click).
- `evidence/playwright/console-2026-10-19T14-58-38-179Z.log` and `evidence/playwright/console-2026-10-19T14-58-38-181Z.log` (tool-written console logs; not read).

## Acceptance matrix (T1)

| Check | Result | Evidence |
|---|---|---|
| AC-1 Sources reviewed at task start | Met (sources listed above) | this record |
| AC-1 Session usable in both tabs | Met (both show the Mongoose UI; no sign-in, expiry or logout text) | snapshots only |
| AC-1 Designer in User scope, no unsaved changes | Met (scope bar `ScopeType: User`; Save disabled) | Designer snapshot; no image |
| AC-1 Web Client, no dirty runtime Form | Met (no runtime Form open; Close-and-Save and Close-and-Cancel disabled) | `t1-01` and snapshots |
| AC-1 Recent-forms content recorded | Met (`FX_CustomerPortal` listed) | `t1-01` |
| AC-1 Baseline console counts recorded | Met (Web Client 3 errors / 10 warnings; Designer 2 errors / 0 warnings) | tool output |
| AC-1 Gate screenshot | Met (`t1-01`, Web Client with menu open) | `t1-01` |

Limitation: the Designer gate has no screenshot (the brief asks for one screenshot of the Web Client, which was taken).

## Findings (observed only)

1. The Web Client console count at T1 start is 3 errors, 10 warnings. EXP-117 recorded 2 throughout. The brief forbids reading the console, so the cause is not established. The T2 and T3 stop rule is measured against this 3.
2. `FX_CustomerPortal` is in the Web Client recent-forms list, so T2 can use the recent-forms route.
3. The Form menu did not close on `Escape`; it closed on a second click of the Form menu-bar button.
4. The Designer's Form tab for `FX_CustomerPortal` is open clean in User scope; nothing in T1 changed it.

## T2 - runtime open and initial state (cycle 1, task T2)

Continuation task. Read again at task start: `AGENTS.md` (repository file) and this record's T1 section (lines 60-74). Other sources were not re-read.

### Actions (in order)

1. Tab list (read-only, before any selection). Tab 0 = Web Client, marked current; tab 1 = Web Designer (`MGForm=FX_CustomerPortal`). No tab selection was needed; tab 0 was already the selected tab.
2. Fresh inline snapshot of tab 0. Start-of-task state: Explorer view, no runtime Form open, Form Save disabled. **Console 3 errors, 10 warnings (start-of-task baseline).**
3. Click on the Web Client Form menu-bar button (ref `f1e10` from step 2). Menu opened. Console 3 (no rise).
4. Fresh inline snapshot. Menu open; the recent-forms entry `FX_CustomerPortal` is at `f1e108`. Console 3.
5. Click on `f1e108`, the `FX_CustomerPortal` recent-forms item (EXP-095 route). The Form opened. Console 3 (no rise). The page URL now carries `favoriteContext=FX_CustomerPortal&LogicalId=lid://infor.mongoose.mongoose`; this URL change came from the recent-forms route, not from a worker navigation.
6. Fresh inline snapshot. The Form is open and the menu is closed (Form menu-bar button not active). Console 3 (no rise).
7. Screenshot `evidence/EXP-118/t2-01-opened-form-initial.png` (opened Form; viewed).

No typing. No runtime button click (the `Sign In` buttons, `Home` and `Cart` were not clicked). No tile, grid row, Filter in Place, F4, Refresh or scroll. Sign Out was not chosen. No Designer action. No prompt or dialog appeared at any step. No server-event error.

### Opened Form (observed in step 6 and `t2-01`)

- **Form identity:** the runtime tab strip shows a selected tab with heading `FX_CustomerPortal` and a close control `Close Panel FX_CustomerPortal`; the panel is `tabpanel "FX_CustomerPortal"`. The Form's caption (teal header) reads `Customer Portal`. The Form is opened once.
- **Toolbar:** Save disabled (`f1e26`). A new `Actions` menu-bar item and an enabled `Help Current Form` appeared when the Form opened (not investigated).
- **Status bar:** no Form status-bar text is visible in `t2-01` or in the snapshot. The only footer text is the Mongoose shell's `en-US` and `powered by infor`. Position text and mode were **not observed** (the brief's status-bar readings cannot be recorded for this view).
- **Regions and components visible in `t2-01`:**
  - Header: teal band `Customer Portal` with a small cat thumbnail at the top right.
  - Menu buttons (left column): `Sign In` (`f1e154`), `Home` (`f1e156`), `Cart` (`f1e158`), all teal.
  - Sign-in page (centre column): `Sign In` heading, a cat-with-microphone picture, `Customer ID` label, an empty textbox (`f1e169`, shown with a blue focus outline; the snapshot marks it active), and the inner `Sign In` button (`f1e171`).
  - Home page (right column): `Home` heading (`f1e172`).
  - GridItems band: below the Home heading the area is blank white to the bottom of the Form. No rows, no tiles, no text.
  - Buttons band: the left column's three buttons (see above).
  - Cart page: not visible. It was not opened (the Cart button was not clicked).
  - Footer: a teal band at the bottom of the Form with no visible text.
- **GridItems before sign-in:** **empty** (0 rows, 0 tiles visible). The accessibility snapshot has no grid or row nodes under the Home heading. The Designer tree (EXP-117) has a Home heading followed by grid nodes, so the runtime grid is either not rendered or renders no DOM when empty. This is observed; the cause is not established.
- **Prompts:** none. Nothing was answered.
- **Menu:** closed (the recent-forms item closes the menu).

### Evidence and what it does and does not prove

- `t2-01-opened-form-initial.png` (viewed): shows the runtime Form `Customer Portal` with the sign-in page, the Home heading, the three menu buttons, the footer, and an empty GridItems band below the Home heading. It supports AC-2 (Form opened, initial state, GridItems empty before sign-in). It does **not** prove the Form's status-bar position or mode (none is visible), the presence of GridItems in the DOM, or any data loading state. A closer GridItems crop was not taken: the first capture already shows the band clearly enough (blank).

### Console and stop rule

- Web Client: 3 errors, 10 warnings at the start of T2 and after every T2 action (steps 3, 5, 2 and 6). No rise; the stop rule was not triggered.
- Designer (tab 1): not acted on in T2; its last reading was 2 errors, 0 warnings (T1). No re-read in T2 (the brief asks for a count after each action in the tab used; the Designer was not used).

### Acceptance matrix (T2)

| Check | Result | Evidence |
|---|---|---|
| AC-2 FX_CustomerPortal opened once at runtime by an allowed route | Met (recent-forms entry, one click) | snapshots steps 4-6; `t2-01` |
| AC-2 Initial state recorded, including GridItems before sign-in | Met (GridItems empty; regions listed) | `t2-01`, step 6 snapshot |
| AC-2 Prompts recorded and answered as allowed | Met (no prompt appeared) | steps 3, 5, 6 |
| AC-1 (carried from T1) | Met in T1 | `t1-01` |
| AC-3 to AC-5 | Not yet run (T3) | - |

Limitation: no status-bar position or mode observed; the Form's runtime status bar is not visible in this view.

### Action audit (T2 and cumulative)

| Action | T1 | T2 | Cumulative |
|---|---|---|---|
| Tab list | 1 | 1 | 2 |
| Tab select (succeeded) | 2 | 0 | 2 |
| Explicit snapshot calls | 6 | 3 | 9 |
| Form-menu opens (click on the Form menu-bar button) | 1 | 1 | 2 |
| Form-menu closes by toggle click (menu-bar button) | 1 | 0 | 1 |
| Escape presses (no effect on the menu) | 1 | 0 | 1 |
| Recent-forms item chosen (`FX_CustomerPortal`) | 0 | 1 | 1 |
| Clicks in total | 2 | 2 | 4 |
| Screenshots | 1 | 1 | 2 |
| Runtime opens | 0 | 1 | 1 |
| Runtime closes | 0 | 0 | 0 |
| Typed entries | 0 | 0 | 0 |
| Runtime button clicks (ButtonSignIn2, left menu, Home, Cart) | 0 | 0 | 0 |
| Tile or grid-row clicks; view-only scrolls; Filter in Place; F4; Refresh | 0 | 0 | 0 |
| Designer changes, saves, Regenerate | 0 | 0 | 0 |
| Runtime Saves; Yes answers | 0 | 0 | 0 |
| Prompts or dialogs seen | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 |
| Console-count rises | 0 | 0 | 0 |
| Re-logins; session-expiry procedures | 0 | 0 | 0 |
| Worker navigations; refreshes; restarts; unloads | 0 | 0 | 0 |
| Ref-not-found recoveries | 0 | 0 | 0 |

### File inventory (T2)

Worker-written (repository), this task:
- `experiments/EXP-118-hello-world-part-8-phase-2-runtime-sign-in-tiles.md` (updated).
- `evidence/EXP-118/t2-01-opened-form-initial.png`.

Tool-written (browser tool, not worker-authored; console logs not read):
- `evidence/playwright/page-2026-10-19T15-01-38-742Z.yml` (click response, Form menu open).
- `evidence/playwright/page-2026-10-19T15-01-45-246Z.yml` (click response, recent-forms item).
- `evidence/playwright/console-2026-10-19T15-01-33-222Z.log` (tool-written console log; not read).

### State at the end of T2 (T3 boundary)

- Web Client (tab 0): runtime Form `FX_CustomerPortal` open once; not dirty (toolbar Save disabled); Customer ID textbox empty (focused, not typed); no menu, list, dialog or prompt open.
- Designer (tab 1): unchanged; `FX_CustomerPortal` open clean in User scope (as in T1).
- No record, Form, metadata or global object changed.

### Next step (T3, not performed in T2)

T3: click the Customer ID textbox once (ref from a fresh snapshot in T3), type `1` once, record the value; screenshot after typing. Then click the inner `Sign In` button (ButtonSignIn2) exactly once, wait up to 10 s, record any message, status bar, console count and GridItems (tiles or rows, count, and each tile's picture, item, description, cost); screenshots after the click and of the GridItems band. Then close the runtime Form once through the Form-close control, record the state, and write the final audit. Stop rule: the Web Client baseline is 3 errors, 10 warnings.

## T3 - sign-in check, close without saving (cycle 2, task T3)

Continuation task. Read again at task start: `AGENTS.md` (repository file) and the T2 state section of this record. The other sources were not re-read.

### Actions (in order)

1. Tab list (read-only, before any selection). Tab 0 = Web Client, current; tab 1 = Web Designer. No tab selection was needed in T3 (tab 0 already selected).
2. Fresh inline snapshot of tab 0. Start-of-T3 state: runtime tab `FX_CustomerPortal` selected, Form Save disabled, Customer ID textbox empty (`f1e110`), inner `Sign In` button `f1e112`, left menu `Sign In` `f1e95`. GridItems shows nothing (as in T2). **Console 3 errors, 10 warnings (start-of-task baseline).**
3. Click on the Customer ID textbox (`f1e110`, from snapshot 2). Console 3 (no rise).
4. Type `1` into the Customer ID textbox (`f1e110`), key by key (one character). Console 3 (no rise).
5. Fresh inline snapshot: textbox `f1e110` reads `"1"`. Console 3.
6. Screenshot `evidence/EXP-118/t3-01-after-typing-1.png` (after typing).
7. Click on the inner `Sign In` button `f1e112` (`ButtonSignIn2`, directly under the Customer ID box; the left menu Sign In `f1e95` was not used). **Exactly once.** Console 3 (no rise).
8. Wait 5 seconds (within the 10-second settle limit), then fresh inline snapshot. Console 3 (no rise).
9. Screenshot `evidence/EXP-118/t3-02-after-signin-click.png` (after the click; viewed).
10. Click on the Form-close control `f1e85` (`Close Panel FX_CustomerPortal`, the runtime tab's close X) **once**. No save prompt or any other dialog was reported. Console 3 (no rise).
11. Fresh inline snapshot after the close. The runtime Form is gone: the main area is empty, no `FX_CustomerPortal` tab, toolbar Save disabled, Explorer view. No prompt, dialog or menu. Console 3.

No Save; no Yes answer; no other runtime button; no tile, grid-row or GridItems click; no scroll (not needed: the status bar reads `Object 1 of 3` and the grid shows three tiles with no further rows); no Filter in Place, F4, Refresh or query control; no Designer action; no Form or record change. No server-event error. No session-expiry, logout or sign-in page appeared; no re-login was performed.

### Customer ID value

- Field value after typing: `1` (snapshot 5 and `t3-01`). Typed once, one character.

### Response to the ButtonSignIn2 click (observed; settle wait 5 s)

- **Prompts or messages:** none. No dialog, toast, or server-event error appeared.
- **Status bar** (bottom left of the Form area, visible in `t3-02`): `Sign In (Object 1 of 3)`. Mode is **not visible** in any capture. This position text is the only status-bar reading.
- **Console:** 3 errors, 10 warnings after the click and after the settle (no rise from the T3 baseline).
- **Sign In button:** after the click it shows a solid blue fill (`t3-02`), which the snapshot marks as the active control. The left menu Sign In was not clicked.

### GridItems after the click (observed in `t3-02` and the snapshot)

- **Tiles: 3 visible**, arranged vertically under the `Home` heading in GridItems (the band spans about y=303 to 572 in the 1920x945 capture). Before the click (T2) GridItems showed 0 rows.
- Tile 1 (top, with a pale-blue background):
  - Picture: present. A light-brown dog photograph (sitting, golden-retriever type).
  - Item: `dumbbell`. Description: `45 pound iron`. Cost: `45.00`.
- Tile 2 (middle):
  - Picture: present. A small grey-and-white image with scattered fragments; the content is not identified with confidence at this size.
  - Item: `eggs`. Description: `cage free`. Cost: `6.99`.
- Tile 3 (bottom):
  - Picture: present. A tan/brown dog photograph.
  - Item: `guitar`. Description: `natural acoustic`. Cost: `129.99`.
- The accessibility snapshot shows these three as image nodes with the same text (cost, item, description), which matches the visible text.
- Tile 1 has a pale-blue background. The worker did not click any tile or row; the cause of the highlight is not established (it may be the grid's current-row marker).
- No further tiles were visible below tile 3, and the grid bottom border is visible. The status bar `Object 1 of 3` matches three records.

### Observed vs inferred (object2 question)

- **Observed:** after one ButtonSignIn2 click, GridItems went from zero visible rows to three tiles, each showing a picture, an item name, a description and a cost. The tile text is item-like (`dumbbell`, `eggs`, `guitar`).
- **Observed:** the status bar reads `Object 1 of 3` after the click.
- **Not established by this observation:** that the three tiles come from the FX_Items collection through the handler's `object2` (or the grid's `objects2`). The UI shows that a refresh populated the grid with tiles; it does not show which collection supplied the rows or whether the row count equals FX_Items' row count. The tile fields are bound to FX_Item, FX_Description and FX_Cost (EXP-116), which is consistent with FX_Items data, but this is inference, not a verified source.
- **Not established:** authentication, identity or row-level isolation. The sign-in is the UI demonstration only (tutorial instruction 4). The result is same-session, UI-observed only; no database or cross-session durability is claimed.

### Close without saving

- Close control `f1e85` clicked once. No `Yes`/`No` save prompt appeared (none was reported by the tool and none is visible in the post-close snapshot). Nothing was answered.
- After the close: runtime Form not open; main area empty; no `FX_CustomerPortal` tab; Save disabled; Explorer view; no menu, dialog, list or prompt open. Console 3 errors, 10 warnings.
- The typed `1` was not saved (no save action was performed). Post-close persistence of the value was not checked and is not claimed.

### Evidence and what each file does and does not prove

- `t3-01-after-typing-1.png` (viewed): the sign-in page with the Customer ID box showing `1` (focused), the inner `Sign In` button below it, the left menu buttons and an empty GridItems band. Proves the typed value and the pre-click state of GridItems (no tiles). Does not prove the field's data binding (none) or any server response.
- `t3-02-after-signin-click.png` (viewed): after the click, three tiles under the Home heading (`dumbbell`/`45 pound iron`/`45.00`; `eggs`/`cage free`/`6.99`; `guitar`/`natural acoustic`/`129.99`), the status bar `Sign In (Object 1 of 3)`, and the blue Sign In button. Proves the tile content and the status-bar text as observed in the same session. Does not prove the source collection, the status-bar mode, or database content. Limitation: this is the full-viewport capture; no separate closer crop of GridItems was taken (the tiles are legible in this capture).

### Acceptance matrix (T3)

| Check | Result | Evidence |
|---|---|---|
| AC-1 (carried from T1; start of T3 re-checked) | Met: Web Client runtime Form open and clean; console baseline 3/10; Designer not used (last 2/0 in T1) | snapshot 2; T1 `t1-01` |
| AC-2 (carried from T2) | Met: FX_CustomerPortal opened once by recent-forms; GridItems empty before sign-in; no prompt | `t2-01` |
| AC-3 | Met as observed: `1` typed once; ButtonSignIn2 clicked once; no message or prompt; status bar `Object 1 of 3`; console 3 (no rise); GridItems: 3 tiles with picture, item, description, cost. Whether these are FX_Items records via `object2` is recorded as **not established** | `t3-01`, `t3-02` |
| AC-4 | Met: runtime Form closed once; no save prompt; not saved; no Designer action; no other runtime button, query or typing; User scope; no overrun | snapshot 11; actions 10-11 |
| AC-5 | Met in this record (final audit below) | this section |

Limitations: no status-bar mode captured; no separate crop of GridItems; the picture of tile 2 is not identified with confidence; the source collection is not established; no post-close persistence check (not in scope).

### Final audit (cumulative T1-T3, exact counts)

| Action | T1 | T2 | T3 | Cumulative |
|---|---|---|---|---|
| Tab list (`browser_tabs` list) | 1 | 1 | 1 | 3 |
| Tab selection (succeeded) | 2 | 0 | 0 | 2 |
| Explicit snapshot calls | 6 | 3 | 4 | 13 |
| Wait calls (5 s settle) | 0 | 0 | 1 | 1 |
| Web Client Form-menu opens (click on the Form menu-bar button) | 1 | 1 | 0 | 2 |
| Form-menu closes by toggle (menu-bar button) | 1 | 0 | 0 | 1 |
| Recent-forms item chosen (`FX_CustomerPortal`) | 0 | 1 | 0 | 1 |
| Escape presses (no effect on the menu) | 1 | 0 | 0 | 1 |
| Runtime Form opens | 0 | 1 | 0 | 1 |
| Runtime Form closes (Form-close control) | 0 | 0 | 1 | 1 |
| Typed entries (single `1`, key by key, in EditCustID) | 0 | 0 | 1 | 1 |
| Runtime button clicks: ButtonSignIn2 | 0 | 0 | 1 | 1 |
| Runtime button clicks: left menu Sign In, Home, Cart | 0 | 0 | 0 | 0 |
| Clicks in total | 2 | 2 | 3 | 7 |
| Customer ID textbox clicks (focus) | 0 | 0 | 1 | 1 |
| Tile or grid-row clicks | 0 | 0 | 0 | 0 |
| View-only mouse-wheel scrolls in GridItems | 0 | 0 | 0 | 0 |
| Filter in Place; F4; Refresh; other query controls | 0 | 0 | 0 | 0 |
| Screenshots | 1 | 1 | 2 | 4 |
| Designer changes, Designer saves, Regenerate, Designer Form opens/closes | 0 | 0 | 0 | 0 |
| Runtime saves; Yes answers to any prompt | 0 | 0 | 0 | 0 |
| Prompts or dialogs seen | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Console-count rises (stop rule) | 0 | 0 | 0 | 0 |
| Re-logins; session-expiry procedures | 0 | 0 | 0 | 0 |
| Worker navigations; refreshes; restarts; unloads | 0 | 0 | 0 | 0 |
| Ref-not-found recoveries | 0 | 0 | 0 | 0 |

Notes on the audit: the recent-forms route changed the page URL (adds `favoriteContext=FX_CustomerPortal`); this is the portal's route, not a worker navigation. The T1 Escape had no effect on the menu.

### Prompts (verbatim)

- None appeared in T1, T2 or T3. No prompt was answered.

### Console (Web Client, the tab in use)

- T1 baseline: 3 errors, 10 warnings (the Designer's baseline was 2 errors, 0 warnings).
- After every action in T2 and T3: 3 errors, 10 warnings. No rise. The stop rule was never triggered.
- Designer (tab 1): not used after T1; last reading 2 errors, 0 warnings (T1). No T3 reading was taken because the Designer was not acted on in T3.

### Worker-written-file inventory (T1-T3)

Worker-written (repository):
- `experiments/EXP-118-hello-world-part-8-phase-2-runtime-sign-in-tiles.md` (created in T1; updated in T2 and T3).
- `evidence/EXP-118/t1-01-webclient-form-menu-open.png` (T1).
- `evidence/EXP-118/t2-01-opened-form-initial.png` (T2).
- `evidence/EXP-118/t3-01-after-typing-1.png` (T3).
- `evidence/EXP-118/t3-02-after-signin-click.png` (T3).

Tool-written (browser tool, not worker-authored; the console logs were not read):
- `evidence/playwright/page-2026-10-19T14-58-58-852Z.yml`, `evidence/playwright/page-2026-10-19T14-59-16-362Z.yml`, `evidence/playwright/console-2026-10-19T14-58-38-179Z.log`, `evidence/playwright/console-2026-10-19T14-58-38-181Z.log` (T1).
- `evidence/playwright/page-2026-10-19T15-01-38-742Z.yml`, `evidence/playwright/page-2026-10-19T15-01-45-246Z.yml`, `evidence/playwright/console-2026-10-19T15-01-33-222Z.log` (T2).
- `evidence/playwright/console-2026-10-19T15-04-21-270Z.log`, `evidence/playwright/page-2026-10-19T15-04-26-381Z.yml`, `evidence/playwright/page-2026-10-19T15-04-30-294Z.yml`, `evidence/playwright/page-2026-10-19T15-04-37-127Z.yml`, `evidence/playwright/page-2026-10-19T15-04-44-081Z.yml`, `evidence/playwright/page-2026-10-19T15-04-58-809Z.yml` (T3).

### Cleanup inventory

- Nothing was created in the runtime, the Designer or the metadata. The only artifacts are this record and the screenshots above, all under the authorized EXP-118 paths.
- The Designer changes from EXP-117 are unchanged by EXP-118 and are not cleaned up here.

### Final state (end of T3)

- Web Client (tab 0): Explorer view; the runtime Form `FX_CustomerPortal` is closed; no Form tab; no menu, list, dialog or prompt open; console 3 errors, 10 warnings.
- Designer (tab 1): not acted on since T1; `FX_CustomerPortal` remains open clean in User scope (T1 reading: Save disabled, scope User). Not re-read in T3.
- No record, Form, metadata or global object changed by EXP-118. No save at runtime. No Designer action. User scope only.

### Limitations

- The source of the three tiles (FX_Items via `object2`, or another collection) is not established by UI observation.
- The status-bar mode is not visible; only the position text `Object 1 of 3` was observed.
- No closer GridItems crop was taken.
- Same-session, UI-observed only. No cross-session durability, database-level durability or replay verification is claimed.

## Next step after T1 (superseded by T2 above)

T2 was run as described in the T2 section.

## Final state (end of T1)

- Web Client (tab 0): Explorer view, no runtime Form open, no menu open, no dialog or list open, console 3 errors / 10 warnings.
- Designer (tab 1): `FX_CustomerPortal` open clean in User scope, Save disabled; not acted on in T1; console 2 errors / 0 warnings.
- No record, Form, metadata or global object changed. No Designer action.

## Outcome (operator)

Pending. T1, T2 and T3 are recorded as executed, with the final audit above. Operator review is needed for the source of the three tiles (`object2` versus another collection), the pale-blue highlight on tile 1, and the status-bar mode, which was not visible.

## Outcome (operator, 2026-10-19)

Accepted (observed). **Hello World Part 8 Phase 2 is complete: at runtime, FX_CustomerPortal opens with GridItems empty; after Customer ID 1 and one click on the sign-in page's Sign In button (ButtonSignIn2, Primary FX_SignInBtn), GridItems shows the three FX_Items records as FX_ItemsTile tiles.** Run R-20261019-225821-Tri4 (3 worker tasks), completed/accepted by the coordinator without a pause. No Regenerate was needed: the EXP-117 Saves plus a reopen were enough.

- Actions: one Web Client recent-forms open of FX_CustomerPortal; `1` typed key by key into the unbound EditCustID; one ButtonSignIn2 click; one close through the Form-close control (no save prompt). No Save anywhere, no Designer action, no record, Form, metadata or global object change; nothing to clean up.
- Screenshots viewed by the operator assistant: `t3-02-after-signin-click` (runtime "Customer Portal": menu buttons Sign In, Home, Cart; sign-in page with the cat picture, Customer ID `1` and the Sign In button; under Home three tiles: golden retriever puppy / dumbbell / 45 pound iron / 45.00 (pale-blue current-row background), small grey figure / eggs / cage free / 6.99, tan dog / guitar / natural acoustic / 129.99; status bar "Sign In (Object 1 of 3)").
- Console: Web Client tab 3 errors and 10 warnings at its own T1 baseline, unchanged after every action; Designer tab 2.
- Findings (observed):
  1. The Collection Refresh handler with parameter "secondary collection 2" (summary `object2`) refreshes FX_Items: the three tiles are the FX_Items records (dumbbell, eggs, guitar; pictures as in EXP-084), not FX_Orders (two orders). This closes the EXP-117 `object2` / `objects2` question.
  2. GridItems with Tile Form FX_ItemsTile and Tile When Always renders one tile per record using the EXP-116 layout (picture left, item in FX_Header style top right, description below, cost right); StaticPicture's dangling Caption `C(FX_PictureStatic)` does not show at runtime.
  3. Before the sign-in click, GridItems is empty after the open (no initial load of the secondary collection); the current record's tile has a pale-blue background.
  4. Saved Designer changes plus a reopen take effect at runtime without Regenerate Form.
  5. The Web Client Form menu did not close on Escape; a second click on its menu-bar button closed it.
- Qualifications accepted by the operator: one failed record edit reapplied by the worker; the tile picture descriptions are visual identifications only; same-session runtime evidence only; no status-bar mode visible.
- Confinement (git status): only `evidence/EXP-118/` and this record were written by the run in the repository (the coordinator also left an unreviewed proposal `tools/claude-harness/briefs/EXP-119.brief.json` for the same runtime check; superseded by this experiment, not run).
- Next: Part 8 Phase 3 (04:47-06:39): StaticCount and EditCount in FlexLayoutButtons' count region (Caption FX_sCount; EditCount Binding Type Variable Count, Left, 7; 1.5) and ButtonAddToCart in its cart region (Caption FX_sAddToCart, Theme Class FX_BlueButton, Bitmap shoppingcart image, Horizontal Image Text, 20; 1.5); the narrated Regenerate there needs a decision (EXP-117 finding 5: it only acts on unsaved changes).
