# EXP-103: Hello World Part 7 Section 3 - root FlexLayout of FX_CustomerPortal as Vertical Box with regions header / main / footer

Status: **BLOCKED AS OBSERVED** (recommended by the final documentation audit, 2026-10-16, cycle 6; operator disposition pending; see the last section). T1 blocked (2026-10-16). Original T1 (run R-20261016-000738-uuWU) was blocked by a server-event error on FlexLayout selection, then the operator reloaded the Designer tab. T1 recovery (read-only) ran next and the same server-event error recurred on FlexLayout selection after the reload. The T1 completion task then used the canvas Edit FlexLayout Attributes control (authorized, one click): the FlexLayout dialog opened, but the server-event error appeared with it, and the dialog's Attributes and Regions areas were empty. The error was answered OK once and the dialog closed with Cancel once. No value was changed, no Designer Save was made, and no region was selected. T2 (change) and T3 (readback) were not started. Edit Flex Layout Attributes discovery is **not** complete: the dialog contents could not be read.

Source: `docs/mongoose/transcripts/hello-world-pt7.md` Section 3 (lines 133-143) and the "Flex Layout concepts" table (lines 47-61). Prior form: `experiments/EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md` (Outcome section only was read, per brief).

Target: User-scope Flex Form `FX_CustomerPortal` (EXP-102). Component: `flexlayoutPane_FX_CustomerPortal` (FlexLayout, Pane 0, Container 0).

Planned change (not applied): Type = Vertical Box; region index 0 `header` Length 4 Unit Form Orientation Fill; index 1 `main` Length 1 Unit Flex Orientation Fill; index 2 `footer` Length 2 Unit Form Orientation Fill.

## T1 gate and selection (read-only, observed)

- Browser tabs listed before any tab selection: tab 0 = Mongoose Designer, URL with `MGForm=FX_CustomerPortal`; tab 1 = "Logout Successful" (Infor portal sign-out page, `session/slo/signoutsuccess`).
- Designer tab 0 at the start of the gate (`evidence/EXP-103/t1-01-gate-designer-user-scope-clean.png`): tab "FX_CustomerPortal" selected; Save and Regenerate Form disabled; Undo disabled; no dialog; status bar `ScopeType: User` (ScopeName is the operator's Mongoose user; value not recorded here). Form Type Flex, Device Type Default, Unit Char, Size 120; 40, Synchronize FlexLayout attributes True. Details > Collections: Primary Collection FX_Orders, Secondary Collection 2 FX_Items. This matches EXP-102.
- Selection: Details > Components > click on the row `flexlayoutPane_FX_CustomerPortal` (FlexLayout, Pane 0, Container 0). Child rows: `Region00: FLEX_PANE_REGION0`, `Region01: FLEX_PANE_REGION1`, `Region02: FLEX_PANE_REGION2`, under `Pane (00)`. The Properties header then read `flexlayoutPane_FX_CustomerPortal (FlexLayout)` (`evidence/EXP-103/t1-02-flexlayout-selected-properties.png`).
- **Server-event error on selection.** Immediately after the selection click, an `Error` alertdialog appeared over the canvas: "The server event processing returned an error. If this persists, contact your system administrator." (OK only). It was answered once with OK. After OK, the FlexLayout stayed selected (Properties header shows its name), Save and Undo stayed disabled, and no dialog was open (`evidence/EXP-103/t1-04-after-error-ok-designer-state.png`). The Properties grid below the header was blank in both captures.
- Per the recipe `recipes/session/session-expiry-and-stale-designer.md`, this is the stale-Designer symptom. The Designer was not retried, reloaded or re-logged-in from inside the Designer.
- **Session expiry.** The first tab list already showed tab 1 on "Logout Successful" (no modal, no sign-in form in that tab). The session-expiry procedure was run once: tab 1 was navigated once to the portal URL (top-level). The Infor CloudIdentities Sign In form appeared; `SECRET_MONGOOSE_USERNAME` and `SECRET_MONGOOSE_PASSWORD` were typed by placeholder, and Sign in was clicked once. The portal's notification banner (DistributionIFSContactUs) was dismissed once with its own close button. The portal navigation menu was searched for "Mongoose" and the Mongoose link was opened. The Mongoose Web Client loaded in tab 1 (Explorer view; configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT in the header; `evidence/EXP-103/t1-08-mongoose-app-frame-after-portal-open.png`). The configuration sign-in did not appear.
- Designer tab 0 was **not** reloaded and was left as it is (FX_CustomerPortal, clean, no dialog). The re-login in tab 1 does not revive the Designer tab loaded before expiry (recipe). The coordinator's next task must have the operator reload the Designer tab.

## Blocker

- Designer tab 0 shows the server-event error on a component action after the session expiry. Gate condition "the session shows the server-event error" is met, so the Edit Flex Layout Attributes dialog was **not** opened (no route, controls, Type options, region values, Unit or Orientation options recorded).
- Next permitted action (coordinator): operator manually reloads the Designer tab (FX_CustomerPortal, User scope); then resume with a note to inspect read-only, redo the read-only gates (Save disabled, no dialog, FlexLayout selection), and repeat no earlier action.

## T1 recovery (2026-10-16, after operator Designer reload; read-only)

- Operator action (external, not a worker action): the operator manually reloaded the Designer tab on 2026-10-16.
- Tab list (read-only, before any selection): tab 0 = Designer (`MGForm=FX_CustomerPortal`, current); tab 1 = Mongoose Web Client (portal app page, `c51080bc-…`). Tab 0 selected (succeeded after the list).
- Gate (fresh snapshot, then screenshot `evidence/EXP-103/t1r-01-gate-after-operator-reload.png`): FX_CustomerPortal selected tab; User scope in the status bar; Save and Regenerate Form disabled; Undo disabled; no dialog; no server-event error at gate; Form Type Flex; Properties shows Form properties (Name FX_CustomerPortal). The Details panel was collapsed at the gate. Gate passed.
- Details panel expanded (UI only, its expand button). Components tab selected. The Components tree was collapsed at the Pane (00) row, so the grid's Expand control was used (view only). Tree then showed `Pane (00)` > `flexlayoutPane_FX_CustomerPortal` (FlexLayout, Pane 0, Container 0) > `Region00: FLEX_PANE_REGION0`, `Region01: FLEX_PANE_REGION1`, `Region02: FLEX_PANE_REGION2`.
- Selection: click on the `flexlayoutPane_FX_CustomerPortal` row. **The server-event error recurred**, with the same verbatim text as in T1: "The server event processing returned an error. If this persists, contact your system administrator." (alertdialog `Error`, OK only). Capture: `evidence/EXP-103/t1r-02-flexlayout-selection-server-event-error.png`. Fresh snapshot for the OK reference: `evidence/EXP-103/t1r-03-snapshot-before-error-ok.md` (OK ref at that snapshot).
- OK clicked once. After OK: Properties header reads `flexlayoutPane_FX_CustomerPortal (FlexLayout)`; the Properties grid is blank; no dialog open; Save disabled; User scope. Capture: `evidence/EXP-103/t1r-04-after-error-ok-designer-state.png`.
- Stopped blocked. Per the brief, no further discovery was done: Edit Flex Layout Attributes was not opened, and no T2 or T3 action was taken.
- Observation (observed only): the error recurred after the operator reload, which gives the Designer a fresh session. That points to the FlexLayout selection itself raising the server event, rather than only a stale Designer. This is not proven: the cause is still **unresolved**. The re-login in tab 1 was not used in this task.
- Next permitted action (coordinator): decide on the FlexLayout selection error (for example, the canvas selection route, or the Designer's own diagnostics, if authorized) before the dialog can be reached. The Designer tab currently shows the FlexLayout selected with no dialog open.

## T1 completion: canvas route to Edit FlexLayout Attributes (2026-10-16)

- Gate (fresh snapshot, then `evidence/EXP-103/t1c-01-gate-flexlayout-already-selected.png`): FX_CustomerPortal open; User scope; Save and Regenerate Form disabled; no alert or dialog. The FlexLayout was already selected (Properties textbox `flexlayoutPane_FX_CustomerPortal (FlexLayout)`), so it was not reselected. The Components tree was expanded (Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00-02).
- Canvas control identity: the four small icons at the top left of the canvas are not in the accessibility tree. A mouse move (hover, no click) over the first icon at canvas coordinates (270,113) showed the tooltip **"Edit FlexLayout Attributes"** (`evidence/EXP-103/t1c-02-canvas-icon1-hover-tooltip.png`). The tooltip is the only identity evidence for this icon.
- Route used: the canvas icon 1, one mouse click at (270,113). This is a coordinate click, because the control has no accessibility ref.
- Result (`evidence/EXP-103/t1c-03-after-canvas-icon1-click.png`): the **server-event error** appeared (verbatim: "The server event processing returned an error. If this persists, contact your system administrator.", alertdialog `Error`, OK only). Behind it, a dialog titled **"FlexLayout"** opened. The dialog's Attributes area was empty, and its Regions grid showed only the column headers Index, ID, Length with no rows. The Properties group was empty.
- Error answered: fresh snapshot (`evidence/EXP-103/t1c-04-snapshot-before-error-ok.md`, OK ref e521), then OK once. The tool resolved the click through the locator `#button-1013`. The Error closed (`evidence/EXP-103/t1c-05-after-error-ok-dialog-state.png`), and the FlexLayout dialog remained open with the same empty content.
- Dialog structure (observed in the fresh snapshot `t1c-06`, the screenshot `t1c-05`, and the snapshot's accessibility tree): groups **Attributes** (empty tree; `Name`/`Value` columns), **Regions** (grid with columns Index, ID, Length; **zero rows**; toolbar with four icon buttons, shown in the screenshot as add (+), delete (trash), move up, move down), and **Properties** (search textbox "Search Properties:", Expand and Collapse buttons, empty `Name`/`Value` tree, empty description field). Footer: `Preview` checkbox (unchecked), `Undo` and `Redo` (both disabled), `Contained Components` button, then `OK`, `Cancel`, `Help`. Dialog title: `FlexLayout`.
- The Regions grid was **empty** although the Components tree shows three regions. The dialog therefore did not load its FlexLayout data. This is the only observed state; the cause is unresolved.
- The brief's rule for a recurring error (stop blocked, OK once) was followed; no further discovery was done (no region row selected, no Unit or Orientation list opened, no Type list opened). The dialog was closed with **Cancel once**, so no dialog stayed open across tasks. Closing an empty, unchanged dialog is a judgement call: the brief named only OK and "stop blocked", and the standing rule forbids leaving a dialog open.
- Final state (`evidence/EXP-103/t1c-07-final-state-after-cancel.png`, snapshot checked): dialog closed; no alert; Save disabled; FX_CustomerPortal open; User scope; Properties header `flexlayoutPane_FX_CustomerPortal (FlexLayout)`. The Region00 row shows a light highlight in the screenshot; no region was clicked by the worker in this task, so that is a display state, not a worker selection.
- Console error count: 3 before the canvas click, 4 after it, 4 after OK, 4 after Cancel. Not inspected.

## Dialog inventory

Not completed. The FlexLayout dialog was reached only in the T1 completion task (canvas route above), where its Attributes and Regions were empty because of the server-event error. Still unobserved: Type options, every region's ID, Length, Unit, Orientation, Align, Pack, Max Length and Margin values, and the Unit and Orientation option lists. The Properties > Layout > Flex Attributes ellipsis route has not been tried.

## Action audit: original T1 (run R-20261016-000738-uuWU)

| Item | Count | Detail |
| --- | ---: | --- |
| Browser tab lists | 1 | at the start, before any tab selection |
| Tab selections | 2 | tab 0 (Designer) and tab 1 (portal); both succeeded after the list |
| Navigations | 1 | tab 1 to the portal URL (session-expiry procedure only) |
| Browser snapshots (explicit calls) | 8 | gate; before error OK; tab 1 sign-out page; sign-in form; portal after sign-in; portal top-bar; menu search; Mongoose app |
| Screenshots | 4 | t1-01, t1-02, t1-04, t1-08 |
| Clicks | 7 | Components tab 1; flexlayout row 1; error OK 1; Sign in 1; banner close 1; navigation menu 1; Mongoose link 1 |
| Type actions | 3 | username placeholder 1; password placeholder 1; menu search "Mongoose" 1 |
| Edit Flex Layout Attributes opens | 0 | |
| Type changes | 0 | |
| Region field entries / corrections | 0 / 0 | |
| Dialog OK clicks | 0 | |
| Designer Saves | 0 | |
| Regenerate Form clicks | 0 | |
| Prompts answered | 1 | server-event Error, OK only, text above; answered OK once |
| Form closes / reopens | 0 / 0 | |
| Errors | 1 | server-event error on FlexLayout selection (Designer tab 0) |
| Ref not found / timeouts | 0 / 0 | |
| Fresh-snapshot recovery used | 0 | |
| Re-logins | 1 | session-expiry procedure, once: "session re-established" |
| Portal banner dismissals | 1 | DistributionIFSContactUs, close button only; link not followed |
| Select Form opens / OK clicks | 0 / 0 | |
| find / evaluate / console / network inspections | 0 / 0 / 0 / 0 | Designer console error count rose from 2 to 4 after the selection click; not inspected |

## Cumulative action audit (original T1 + T1 recovery, 2026-10-16)

| Item | Original T1 | T1 recovery | Cumulative |
| --- | ---: | ---: | ---: |
| Browser tab lists | 1 | 1 | 2 |
| Tab selections (succeeded after a list) | 2 | 1 | 3 |
| Navigations (portal URL, session-expiry procedure only) | 1 | 0 | 1 |
| Explicit browser snapshots | 8 | 2 | 10 |
| Screenshots | 4 | 3 | 7 |
| Clicks | 7 | 5 | 12 |
| Type actions (username, password, menu search) | 3 | 0 | 3 |
| Edit Flex Layout Attributes opens | 0 | 0 | 0 |
| Dialog Cancel / OK clicks | 0 / 0 | 0 / 0 | 0 / 0 |
| Type changes; region entries; corrections | 0; 0; 0 | 0; 0; 0 | 0; 0; 0 |
| Designer Saves; Regenerate Form clicks | 0; 0 | 0; 0 | 0; 0 |
| Prompts answered (server-event Error, OK only; text as above) | 1 | 1 | 2 |
| Server-event errors on FlexLayout selection | 1 | 1 (recurred) | 2 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 |
| Portal banner dismissals (close button only) | 1 | 0 | 1 |
| Re-logins (session-expiry procedure) | 1 | 0 | 1 |
| Ref not found / timeouts / fresh-snapshot recovery | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Select Form opens | 0 | 0 | 0 |
| find / evaluate / console / network inspections | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |

External action, not a worker action: the operator reloaded the Designer tab between the two tasks (2026-10-16). Auto-returned snapshots that accompany each action are not counted as explicit snapshot calls. Designer console error count: 2 at the first gate; 4 after the T1 selection click; 3 after the T1 recovery selection and OK.

## Action audit: T1 completion (canvas route, 2026-10-16)

| Item | Count | Detail |
| --- | ---: | --- |
| Browser tab lists | 1 | before any tab selection |
| Tab selections | 1 | tab 0 (Designer); succeeded after the list |
| Explicit browser snapshots | 3 | gate; before error OK (`t1c-04`); before Cancel (`t1c-06`) |
| Screenshots | 5 | t1c-01, t1c-02, t1c-03, t1c-05, t1c-07 |
| Mouse moves (hover, no click) | 1 | canvas icon 1 at (270,113), tooltip read |
| Clicks | 3 | canvas icon 1 at (270,113) 1; error OK (`#button-1013`, ref e521) 1; dialog Cancel (ref e615) 1 |
| Edit Flex Layout Attributes opens | 1 | route: canvas icon 1 (coordinate click); the dialog opened with a server-event error on top |
| Dialog left by | Cancel 1 | no change; OK 0 |
| Type changes; region entries; corrections | 0; 0; 0 | |
| Region rows selected; option lists opened | 0; 0 | |
| Designer Saves; Regenerate Form clicks | 0; 0 | |
| Prompts answered | 1 | server-event Error, OK once, text as above |
| Server-event errors | 1 | recurred on opening the dialog |
| Form closes / reopens; re-logins; navigations | 0; 0; 0 | |
| Ref not found / timeouts / fresh-snapshot recovery | 0 / 0 / 0 | |
| Type actions | 0 | |
| find / evaluate / console / network inspections | 0 / 0 / 0 / 0 | console errors 3 → 4 across the canvas click (not inspected) |

Cumulative through T1 completion (original T1 + T1 recovery + T1 completion; external Designer reload by the operator between tasks 1 and 2 is not counted):

| Item | Cumulative |
| --- | ---: |
| Browser tab lists | 3 |
| Tab selections | 4 |
| Navigations (portal URL, session-expiry procedure only) | 1 |
| Explicit browser snapshots | 13 |
| Screenshots | 12 |
| Clicks | 15 (the original and recovery Components row clicks, error OKs, sign-in, banner close, menu, Mongoose link, the canvas icon, Cancel and expand/collapse UI clicks) |
| Mouse moves (hover) | 1 |
| Type actions | 3 |
| Edit Flex Layout Attributes opens | 1 (closed by Cancel 1; OK 0) |
| Type changes; region entries; corrections | 0; 0; 0 |
| Designer Saves; Regenerate Form clicks | 0; 0 |
| Prompts answered | 3 (server-event Error, OK once each time; all three texts identical) |
| Server-event errors | 3 (T1 selection; T1 recovery selection; T1 completion canvas dialog open) |
| Portal banner dismissals; re-logins | 1; 1 |
| Form closes / reopens; Select Form opens | 0 / 0; 0 |
| Ref not found / timeouts / fresh-snapshot recovery | 0 / 0 / 0 |
| find / evaluate / console / network inspections | 0 / 0 / 0 / 0 |

Not counted: the operator's Designer reload (external, between T1 and the T1 recovery). Snapshots returned automatically by an action are not counted as explicit snapshot calls. The Components expand clicks in the T1 recovery were counted as clicks in that task's audit.

## Screenshots (evidence/EXP-103/)

| File | Shows | Does not prove |
| --- | --- | --- |
| `t1-01-gate-designer-user-scope-clean.png` | Designer tab FX_CustomerPortal; Save/Undo greyed; status bar User scope; three canvas columns; Collections Primary FX_Orders, Secondary FX_Items; Form Type Flex, Unit Char | Session healthy (the later error shows it was not); Form's server state |
| `t1-02-flexlayout-selected-properties.png` | Components row flexlayoutPane_FX_CustomerPortal selected with Region00-02 children; Properties header names it; Error modal with server-event text | Which event triggered the error |
| `t1-04-after-error-ok-designer-state.png` | After OK: FlexLayout still selected; no dialog; Save and Undo greyed | Designer is healthy (the stale symptom is not cleared by OK) |
| `t1-08-mongoose-app-frame-after-portal-open.png` | Mongoose Web Client (Explorer) in tab 1 after the portal re-login | Anything about the Designer tab 0 |
| `t1-03-snapshot-before-error-ok.md`, `t1-05-portal-after-signin-snapshot.md`, `t1-06-portal-menu-search-mongoose.md`, `t1-07-mongoose-app-after-portal-open.md` | Accessibility snapshot files at those points (refs used for clicks) | Visual state (use the screenshots) |

T1 recovery captures:

| File | Shows | Does not prove |
| --- | --- | --- |
| `t1r-01-gate-after-operator-reload.png` | Designer tab FX_CustomerPortal after the operator reload: Save/Undo greyed, status bar User scope, Form properties in Properties, no dialog | That the FlexLayout can be selected (the next capture shows it cannot, cleanly) |
| `t1r-02-flexlayout-selection-server-event-error.png` | After clicking the FlexLayout row: Error alertdialog with the server-event text, OK only, over the canvas | The cause of the error |
| `t1r-03-snapshot-before-error-ok.md` | Accessibility snapshot with the alertdialog and OK ref (e745) used for the click | Visual state (use the PNG) |
| `t1r-04-after-error-ok-designer-state.png` | After OK: FlexLayout selected and named in Properties header (`flexlayoutPane_FX_CustomerPortal (FlexLayout)`); Properties grid blank; Components tree with Region00-02; Save disabled; no dialog | That the Designer is healthy for later actions (the error recurred on selection, so no) |

T1 completion captures:

| File | Shows | Does not prove |
| --- | --- | --- |
| `t1c-01-gate-flexlayout-already-selected.png` | FX_CustomerPortal, Save disabled, User scope in status bar, no alert; FlexLayout row selected in Components with Region00-02 children; Properties header `flexlayoutPane_FX_CustomerPortal (FlexLayout)` | That the dialog route works (the canvas click came later) |
| `t1c-02-canvas-icon1-hover-tooltip.png` | Tooltip "Edit FlexLayout Attributes" over the first canvas icon (top left, hover only) | That the icon opens the dialog (proved only by `t1c-03`) |
| `t1c-03-after-canvas-icon1-click.png` | Server-event Error modal on top of a dialog titled "FlexLayout" (Attributes empty; Regions grid header only; Properties empty; OK/Cancel/Help) | The cause of the error; the dialog's contents (they were empty) |
| `t1c-05-after-error-ok-dialog-state.png` | After the Error was closed by OK: FlexLayout dialog still open, Regions grid with no rows, Attributes empty | That the dialog data can be read |
| `t1c-07-final-state-after-cancel.png` | After Cancel: dialog closed, no alert, Save disabled, FlexLayout selected in Properties, Components tree showing Region00-02, status bar User scope | That T2 can run (the dialog data is still unread) |
| `t1c-04-snapshot-before-error-ok.md`, `t1c-06-snapshot-dialog-state-before-cancel.md` | Accessibility snapshots: the Error alertdialog with OK ref e521; the empty FlexLayout dialog tree with Cancel ref e615 | Visual state (use the PNGs) |

Not captured for T1, the recovery or T1 completion (not reached): dialog before change with each region, option lists, dialog after entries, OK and Save responses, canvas after Save, readback.

## Findings (observed only)

1. Designer gate at the start of T1 passed: User scope, FX_CustomerPortal open, Save disabled, no dialog. The Collections state matched EXP-102.
2. Components tree (observed on selection): `Pane (00)` > `flexlayoutPane_FX_CustomerPortal` (FlexLayout) > `Region00: FLEX_PANE_REGION0`, `Region01: FLEX_PANE_REGION1`, `Region02: FLEX_PANE_REGION2`.
3. Selecting the FlexLayout row in the stale Designer raised the server-event error (OK only). The Properties header then named the FlexLayout, but its property grid was blank in both captures. Whether the error came from the session expiry or from the selection is **unresolved**.
4. Tab 1 showed "Logout Successful" at the first tab list, which is the session-expiry symptom from the recipe. The re-login was done in tab 1 (top-level portal), and the Mongoose Web Client loaded with no configuration sign-in prompt.
5. Portal top bar has an "Open navigation menu" control with a "Search menu" box that finds the Mongoose app (observed; this was the procedure's search step).

## Limits

- Same-session UI evidence only. No cross-session or database-level durability is claimed; nothing was saved.
- The FlexLayout dialog opened once (T1 completion task, canvas route) but showed empty Attributes and Regions, so no FlexLayout attribute values, Type options or Unit/Orientation options are recorded.

## Worker-written file inventory (original T1 and T1 recovery)

- `experiments/EXP-103-hello-world-part-7-section-3-fx-customer-portal-root-regions.md` (this record: created in the original T1, updated in the T1 recovery)
- `evidence/EXP-103/t1r-01-gate-after-operator-reload.png`
- `evidence/EXP-103/t1r-02-flexlayout-selection-server-event-error.png`
- `evidence/EXP-103/t1r-03-snapshot-before-error-ok.md`
- `evidence/EXP-103/t1r-04-after-error-ok-designer-state.png`
- `evidence/EXP-103/t1c-01-gate-flexlayout-already-selected.png`
- `evidence/EXP-103/t1c-02-canvas-icon1-hover-tooltip.png`
- `evidence/EXP-103/t1c-03-after-canvas-icon1-click.png`
- `evidence/EXP-103/t1c-04-snapshot-before-error-ok.md`
- `evidence/EXP-103/t1c-05-after-error-ok-dialog-state.png`
- `evidence/EXP-103/t1c-06-snapshot-dialog-state-before-cancel.md`
- `evidence/EXP-103/t1c-07-final-state-after-cancel.png`
- `evidence/EXP-103/t1-01-gate-designer-user-scope-clean.png`
- `evidence/EXP-103/t1-02-flexlayout-selected-properties.png`
- `evidence/EXP-103/t1-03-snapshot-before-error-ok.md`
- `evidence/EXP-103/t1-04-after-error-ok-designer-state.png`
- `evidence/EXP-103/t1-05-portal-after-signin-snapshot.md`
- `evidence/EXP-103/t1-06-portal-menu-search-mongoose.md`
- `evidence/EXP-103/t1-07-mongoose-app-after-portal-open.md`
- `evidence/EXP-103/t1-08-mongoose-app-frame-after-portal-open.png`

Tool-generated, not worker-named: snapshot and console dumps the browser tool wrote under `evidence/playwright/` (for example `page-2026-10-15T16-08-12-184Z.yml`, `page-2026-10-15T16-09-42-239Z.yml`) and console logs `console-2026-10-15T16-07-58-925Z.log`, `console-2026-10-15T16-08-58-837Z.log`.

## Next

- Coordinator: the canvas Edit FlexLayout Attributes control opens the FlexLayout dialog, but the server-event error appears with it and the dialog's Regions and Attributes stay empty. Decide how to proceed before dialog discovery can be completed (for example, the Properties > Layout > Flex Attributes ellipsis route, or a fresh session if the coordinator has one). T2 (change) and T3 (readback) remain and were not started.
- Designer final state: FX_CustomerPortal open, clean (Save disabled), User scope, FlexLayout selected with its name in Properties, no dialog, no alert.
- Operator review: the `evidence/EXP-103/` files and this record are the only worker-written files.

## Unresolved

- Cause of the server-event error on FlexLayout selection (T1, T1 recovery) and on opening the FlexLayout dialog (T1 completion): session expiry, the FlexLayout component, or a server-side fault. The operator's reload did not clear it.
- Why the FlexLayout dialog's Regions grid and Attributes are empty while the Components tree lists three regions: not established.
- Route to Edit Flex Layout Attributes: the canvas control (tooltip-identified, one attempt) has been tried; the Properties ellipsis has not.

## Final documentation audit (cycle 6, documentation only)

Scope: no browser call, no Mongoose change, no dialog, no reopen, no refresh, no authentication, no T2 or T3. Only this record was edited; the evidence files were reviewed by their recorded content, not reopened in the browser.

### Reconciliation of the reported failed edit

- The reported failure ("String to replace not found in file") was an Edit that tried to add the T1 completion capture table and the inventory lines, with a trailing-blank-line anchor that did not match. It happened in the **T1 completion task** (cycle 5), not in T3. T3 was never run, so no readback occurred.
- The tool reported no change. The retry with a different anchor applied once. Grep confirms each of `t1c-01` to `t1c-07` appears exactly once in the inventory, and the T1 completion capture table appears once. No duplicate or partial text was found, so the failed attempt changed nothing in the record.

### Operator-requested points

1. **Canvas icon identity.** The first canvas icon has no accessibility ref. Its identity rests on the hover tooltip "Edit FlexLayout Attributes" only (`t1c-02`). Clicking it at coordinates (270,113) is a last-resort locator under AGENTS.md; the T1 completion instruction authorized one such click.
2. **Click result.** One click produced both the server-event error and the FlexLayout dialog. The screenshot (`t1c-03`) shows both on screen; the order between them is **not** established.
3. **Error acknowledgement.** The fresh-snapshot OK ref was e521 (`t1c-04`). The tool's generated code for that click shows the locator `#button-1013`, which the worker did not choose. The Error closed afterwards (`t1c-05`). Whether the tool clicked exactly e521 is inferred from the closed Error, not separately verified.
4. **Decision to Cancel.** The bounded T1 completion instruction says to leave an opened dialog with Cancel once. The worker also applied the standing rule that no in-page dialog may remain open across tasks. The dialog had no entered values, Undo and Redo were disabled, and OK was not clicked. The operator may decide Cancel was not the right choice.
5. **Highlight after Cancel.** The Region00 row is highlighted in `t1c-07`. The worker did not click a region in that task. Cause unresolved.

### Procedural qualifications (process, not observed product behavior)

1. **Session-expiry trigger (original T1).** Tab 1 showed "Logout Successful", not a Session Expired modal or a sign-in form. The procedure's modal-OK step therefore did not apply, and the worker navigated tab 1 once to the portal URL (the procedure's fallback). The re-login ran in the same task as the selection error, which the T1 gate text ("record it and stop blocked") did not contemplate. The worker acknowledged the error once, then performed the procedure. The operator should rule on whether this deviation is acceptable.
2. **Expansion clicks (cycle 2).** The Details panel "Expand Panel" and the Components grid "Expand" were UI view changes only. They are counted as clicks.
3. **Auto-returned snapshots** that accompany an action are not counted as explicit snapshot calls, consistently across all three tables.
4. **Coordinate actions.** One mouse move (hover, tooltip) and one mouse click (canvas icon) in cycle 5. Both are listed in the audit.
5. **Tool-generated paths.** The browser tool writes `evidence/playwright/` snapshot dumps and console logs, which are outside the `evidence/EXP-103/` path. The worker did not write them; they are listed below as incidental.

### Cumulative action audit (reconciled to the controller tables)

| Item | Original T1 (cycle 0) | Recovery (cycle 2) | Completion (cycle 5) | Cumulative | Controller figure |
| --- | ---: | ---: | ---: | ---: | ---: |
| Browser tab lists | 1 | 1 | 1 | 3 | 3 |
| Tab selections | 2 | 1 | 1 | 4 | 4 |
| Navigations (portal URL, procedure only) | 1 | 0 | 0 | 1 | 1 |
| Explicit browser snapshots | 8 | 2 | 3 | 13 | 13 |
| Screenshots | 4 | 3 | 5 | 12 | 12 |
| Clicks | 7 | 5 | 3 | 15 | 15 |
| Mouse moves (hover) | 0 | 0 | 1 | 1 | 1 |
| Type actions | 3 | 0 | 0 | 3 | 3 |
| Attribute dialog opens | 0 | 0 | 1 | 1 | 1 |
| Attribute dialog Cancels | 0 | 0 | 1 | 1 | 1 |
| Attribute dialog OKs | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 1 | 1 | 1 | 3 | 3 |
| Error acknowledgements (OK once each) | 1 | 1 | 1 | 3 | 3 |
| Portal re-logins | 1 | 0 | 0 | 1 | 1 |
| Portal banner dismissals | 1 | 0 | 0 | 1 | 1 |
| Type changes | 0 | 0 | 0 | 0 | 0 |
| Region field entries / corrections | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 |
| Designer Saves | 0 | 0 | 0 | 0 | 0 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 |
| Regenerate Form clicks | 0 | 0 | 0 | 0 | 0 |
| Prompts answered (all server-event Error, OK, identical text) | 1 | 1 | 1 | 3 | 3 (texts identical) |

The operator's Designer reload (between cycles 0 and 2) is an **external action**. It is not counted, and no worker action is attributed to it.

Click breakdown: original T1 = Components tab, flexlayout row, error OK, Sign in, banner close, navigation menu, Mongoose link (7). Recovery = Expand Panel, Components tab, grid Expand, flexlayout row, error OK (5). Completion = canvas icon, error OK, Cancel (3).

### Worker-written file inventory

- **Worker-written in this cycle (cycle 6):** `experiments/EXP-103-hello-world-part-7-section-3-fx-customer-portal-root-regions.md` (status line, Limits bullet, this section). No `evidence/EXP-103/` file was written in this cycle.
- **Worker-named evidence, all cycles (19 files):**
  - PNG, 12: `t1-01-gate-designer-user-scope-clean.png`, `t1-02-flexlayout-selected-properties.png`, `t1-04-after-error-ok-designer-state.png`, `t1-08-mongoose-app-frame-after-portal-open.png`, `t1r-01-gate-after-operator-reload.png`, `t1r-02-flexlayout-selection-server-event-error.png`, `t1r-04-after-error-ok-designer-state.png`, `t1c-01-gate-flexlayout-already-selected.png`, `t1c-02-canvas-icon1-hover-tooltip.png`, `t1c-03-after-canvas-icon1-click.png`, `t1c-05-after-error-ok-dialog-state.png`, `t1c-07-final-state-after-cancel.png`.
  - Markdown, 7 (snapshot files written by the browser tool at the worker's filename): `t1-03-snapshot-before-error-ok.md`, `t1-05-portal-after-signin-snapshot.md`, `t1-06-portal-menu-search-mongoose.md`, `t1-07-mongoose-app-after-portal-open.md`, `t1r-03-snapshot-before-error-ok.md`, `t1c-04-snapshot-before-error-ok.md`, `t1c-06-snapshot-dialog-state-before-cancel.md`.
- **Tool-generated incidental (not worker-named, outside `evidence/EXP-103/`):** `evidence/playwright/page-*.yml` snapshot dumps and `evidence/playwright/console-*.log` logs, for example `page-2026-10-15T16-08-12-184Z.yml`, `page-2026-10-15T16-30-47-369Z.yml`, `page-2026-10-15T16-45-38-747Z.yml`, `console-2026-10-15T16-44-56-232Z.log`. The operator should decide whether these need handling.
- **Git:** this inventory is not a git check. The operator's git review is authoritative for repository confinement.

### Acceptance checks

- **AC-1: FAILED (incomplete).** Sources reviewed. Session **not** shown usable: the Designer showed the server-event error on FlexLayout selection in all three tasks, and the tab-1 re-login did not clear it. Designer gate clean in User scope with FX_CustomerPortal open (`t1-01`, `t1r-01`, `t1c-01`). FlexLayout selected and its name confirmed in Properties (`t1-02`, `t1r-04`, `t1c-01`). Edit FlexLayout Attributes route identified (canvas icon, tooltip `t1c-02`) and opened (`t1c-03`), but the dialog's Attributes and Regions were **empty**. Type options, every region's ID, Length, Unit, Orientation, Align, Pack, Max Length and Margin, and the Unit and Orientation option lists were **not obtained**. Left with Cancel and Save disabled (`t1c-07`).
- **AC-2: NOT EXECUTED.** Blocked before T2. No Type change, no region entry, no OK, no Designer Save.
- **AC-3: NOT EXECUTED.** Blocked before T3. No close, no reopen, no readback.
- **AC-4: SUPPORTED, WITH QUALIFICATIONS.** The reported observations show no attribute change, no component, region or collection change, no Form property change, no Regenerate, no checkout action, no unload, no runtime action, and User scope only. Qualifications: no full before-and-after property diff was captured (only gate screenshots); the Region00 highlight after Cancel is unexplained; the portal re-login was performed in tab 1 (procedural qualification 1 above).
- **AC-5: DOCUMENTATION-COMPLETENESS AUDIT.** This section, the reconciled audit, the inventory and the screenshot tables satisfy the reporting requirement. Decisive evidence is listed per file in the Screenshots section. The figures match the controller tables.

### Recommendation

**BLOCKED AS OBSERVED.** The worker recommends the operator record the run as blocked, with AC-1 failed and AC-2 and AC-3 not executed.

### Knowledge state of findings

- Canvas icon 1 tooltip "Edit FlexLayout Attributes": **observed** (hover only; identity beyond the tooltip unverified).
- Canvas click opened a FlexLayout dialog with the server-event error: **observed**, one occurrence; order between error and dialog unknown.
- Dialog with empty Attributes and Regions after the error: **observed**, one occurrence; cause **unresolved**.
- Server-event error on FlexLayout selection: **observed**, three occurrences (original T1, recovery after operator reload, completion); cause (session, component, or server) **unresolved**.
- Relation of the error to session expiry: **unresolved**.
- No finding is **replay_verified**. No cross-session or database-level durability is claimed.

### Operator dispositions requested

1. Rule on the portal re-login performed in the same task as the selection error (procedural qualification 1).
2. Rule on the Cancel of the empty dialog (point 4 above).
3. Choose the next route: the Properties ellipsis, a different session or Designer investigation outside this experiment, or stop. T2 should not start until the dialog shows its regions.
4. Decide handling of the tool-generated `evidence/playwright/` files.

## Outcome (operator, 2026-10-16)

**Blocked (observed).** Hello World Part 7 section 3 could not be performed: the FlexLayout of FX_CustomerPortal cannot be edited in this state. Nothing was changed or saved; FX_CustomerPortal is unchanged from EXP-102 (Save stayed disabled throughout). The operator closed the run as blocked and waived the procedural notes below for EXP-103 only.

- **Run R-20261016-000738-uuWU** (4 worker tasks): T1 blocked by the server-event error with a session expiry and one permitted re-login in the Web Client tab; the operator then reloaded the Designer tab manually; T2 (T1 retry) reproduced the error; T3 (T1 continuation, operator-authorized canvas route) opened the dialog empty; T4 documentation-only audit. Paused three times for operator decisions.
- Screenshots viewed by the operator assistant: `t1r-01` (freshly reloaded Designer, FX_CustomerPortal clean, User scope), `t1r-02` (Error "The server event processing returned an error. If this persists, contact your system administrator." immediately after selecting flexlayoutPane_FX_CustomerPortal in Details > Components; the Properties dropdown names the FlexLayout but its grid is empty), `t1c-02` (canvas icon tooltip "Edit FlexLayout Attributes"), `t1c-05` (the "FlexLayout" dialog after the error's OK: Attributes empty, Regions grid with only Index/ID/Length headers and no rows, Properties empty; buttons add/delete/up/down, Preview, Contained Components, OK, Cancel, Help).
- Findings (observed):
  1. **Selecting the FlexLayout of FX_CustomerPortal raises the server-event error every time** (3 of 3 selections), including in a Designer reloaded after re-login; so it is not only the stale-Designer symptom of `recipes/session/session-expiry-and-stale-designer.md`.
  2. **The tutorial route works as a UI path:** a selected FlexLayout shows four small icons at the top left of the canvas; the first is "Edit FlexLayout Attributes" and opens the FlexLayout dialog. Here the dialog loads no data.
  3. The FlexLayout dialog layout (for later briefs): title "FlexLayout"; Attributes group; Regions grid (Index, ID, Length) with add, delete, move up, move down; Properties pane with search and expand/collapse; Preview checkbox; Contained Components; OK, Cancel, Help.
  4. Cause **unresolved**. Candidates: FX_CustomerPortal's collections or Regenerate (EXP-102), the FX_HelloWorld theme's FlexLayout class FX_BlueBackground (EXP-100), or the product build.
- Counts: FlexLayout selections 3 (each raised the error, answered OK); Edit FlexLayout Attributes clicks 1; dialog Cancel 1, OK 0; value changes 0; Designer Saves 0; Regenerate 0; Form closes / reopens 0 / 0; re-logins 1 (T1, Web Client tab, permitted procedure); operator Designer reloads 1 (manual).
- Operator rulings (EXP-103 only): the Read of the not-yet-created record, the failed record Edit in T3, and the extra selection and recovery steps authorized by operator notes are waived.
- Confinement (git status): only `evidence/EXP-103/` and this record were written by the run.
- Next: EXP-104 isolation probe — a throwaway Flex > Basic Form FX_FlexProbe01 without collections or Regenerate; select its FlexLayout and open Edit FlexLayout Attributes read-only.
