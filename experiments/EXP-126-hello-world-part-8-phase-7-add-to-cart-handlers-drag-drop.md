# EXP-126: Hello World Part 8 Phase 7: Add To Cart event pipeline and drag/drop wiring (FX_CustomerPortal, User scope)

Status: accepted (observed)

Worker status (history): **in progress.** T1 (read-only gate) complete on 2026-10-23. T2 (FX_SetNewCartEntry created with the FX_Item pair, one Save) complete on 2026-10-23. T3 (FX_Count and FX_CustomerID pairs, three pairs in the list, one Save) complete on 2026-10-23. T4 (FX_AddToCart created with row 0 Collection Make Current on the primary collection, one Save) complete on 2026-10-23. T5 (FX_AddToCart row 1 Collection New on the primary collection, one Save) complete on 2026-10-23. T6 (FX_AddToCart row 2 Generate event FX_SetNewCartEntry with Post Event Asynchronously, one Save) complete on 2026-10-23. T7 (GridItems Drag From Events = FX_AddToCart, one Save) complete on 2026-10-23 (see the T7 section; an earlier T7 attempt was blocked by a portal sign-out before any mutation). T8 (ButtonAddToCart Drop On Events = FX_AddToCart, one Save) complete on 2026-10-23 (see the T8 section). T9 (one Designer close and reopen, readback of both handler groups and both event rows, final documentation audit) complete on 2026-10-23 (see the T9 section and the final audit). The experiment's planned steps T1 to T9 are done; acceptance qualifications are listed in the T9 final audit.
Run: R-20261023-003800-WxU3 (cycle 0). Worker session c8f39e61-2969-4d3f-bd8f-ed93eacb1df8.
Brief scope: Designer only (no runtime action; the drag test and checkout are Phase 8).
Tutorial source: `docs/mongoose/transcripts/hello-world-pt8.md` Phase 7 (lines 188-211) and transcript lines 474-513 (16:54 to 21:04).

## Objective

On FX_CustomerPortal (User scope), create:

1. Handler `FX_SetNewCartEntry` (tutorial: "Set New Cart Entry"). Response Type Set Values with three property pairs on the primary collection (FX_Orders): FX_Item = the secondary collection's FX_Item; FX_Count = V(FX_Count); FX_CustomerID = V(FX_CustomerID).
2. Handler group `FX_AddToCart` (tutorial: "Add To Cart") with three rows in order: 0 Collection Make Current (primary); 1 Collection New (primary); 2 Generate Event FX_SetNewCartEntry (Post Event Asynchronously).
3. Add `FX_AddToCart` to GridItems' Drag From Events and to ButtonAddToCart's Drop On Events.
4. Read everything back after one Designer close and reopen.

## Task plan

| Task | Content | Status |
| --- | --- | --- |
| T1 | Read-only gate (this record) | done, observed |
| T2 | FX_SetNewCartEntry created (New), Set Values, FX_Item pair; one Save | done, observed (see T2 section) |
| T3 | FX_Count and FX_CustomerID pairs; one Save | done, observed (see T3 section) |
| T4 | FX_AddToCart row 0 Collection Make Current (primary); one Save | done, observed (see T4 section) |
| T5 | FX_AddToCart row 1 Collection New (primary); one Save | done, observed (see T5 section) |
| T6 | FX_AddToCart row 2 Generate Event FX_SetNewCartEntry, Post Event Asynchronously; one Save | done, observed (see T6 section) |
| T7 | GridItems Drag From Events = FX_AddToCart; one Save | done, observed (see T7 section) |
| T8 | ButtonAddToCart Drop On Events = FX_AddToCart; one Save | done, observed (see T8 section) |
| T9 | Form close and reopen readback; final audit | done, observed (see T9 section and final audit) |

## Sources reviewed (T1, before any browser action)

- `AGENTS.md` (repository file, full read; LEARNING MODE; FX_ prefix rule; evidence rules).
- `docs/mongoose/transcripts/hello-world-pt8.md`: "Instructions for AI agents" lines 12-22; Phase 7 lines 188-211; transcript lines 474-513.
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- Outcome (operator) sections only: EXP-125 (line 1651), EXP-124 (line 1001), EXP-123 (line 925), EXP-117 (line 665).
- No other record was read. The file `experiments/EXP-126-...md` did not exist at T1 start (this record is created in T1).

## Gate results (T1, read-only; observed)

### Tabs and sessions

- Tab list (before the first selection): tab 0 = Designer (`mode=designer`, `MGForm=FX_CustomerPortal`); tab 1 = Mongoose portal Web Client (`mingle-portal...`, title "Mongoose"). No other tab.
- Session: usable. No "Session Expired" modal, no "Logout Successful", no sign-in page, no server-event error seen in either tab. No re-login performed.
- Designer tab selected once after the list (succeeded). Web Client tab selected once (succeeded).

### Web Client (tab 1), read only

- Shows the portal shell with the Mongoose frame in the Explorer view (My Folders, Master Explorer, Public Folders, User Folders). No runtime Form content visible, so no runtime Form is open and no unsaved change is visible.
- A portal notification banner ("The DistributionIFSContactUs group does not have any active users...") was visible. Dismissed once with its own close button under the standing authorization (`Close notification`). Post-dismissal state was seen only through the tool's auto-saved snapshot (`evidence\playwright\page-2026-10-22T16-38-28-704Z.yml`), not read inline.
- Web Client console count: **5 errors, 2 warnings** (recorded once at T1 as the brief requires; unchanged after the banner click).

### Designer (tab 0)

- Page title "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)". Scope line: `[ ScopeType: User / ScopeName: <signed-in user> ]`.
- Only Form tab open: FX_CustomerPortal (selected). No other Form tab; no Select Form opened; no dialog open.
- Save: **disabled** (checked at the start and again at the end of T1). Regenerate Form: disabled. Undo/Redo: disabled.
- Form properties: Name FX_CustomerPortal; Form Type Flex; Device Type Default; Version "User version for user ..." (scope User).
- Designer console count: **2 errors, 0 warnings** at baseline and after every T1 action (no rise).

### Details > Collections (view only, no dialog)

- Primary Collection: **FX_Orders**.
- Secondary Collection 2: **FX_Items**.
- (The "secondary collection 2" slot naming matches EXP-117.)

### Details > Event Handlers (expanded with the grid's Expand control; view only)

| Group | Seq | Response Type | Disabled | Response Parameters |
| --- | --- | --- | --- | --- |
| FX_CartBtn | 0 | Set Values | false | SETVARVALUES(FX_Page=3) |
| FX_HomeBtn | 0 | Set Values | false | SETVARVALUES(FX_Page=2) |
| FX_SignInBtn | 0 | Collection Refresh | false | object2 |
| FX_SignInBtn | 1 | Set Values | false | SETVARVALUES(FX_Page=2) |
| FX_SignInBtn2 | 0 | Set Values | false | SETVARVALUES(FX_Page=1) |
| StdFormPredisplay | 0 | Set Values | false | SETVARVALUES(FX_Page=1) |

- **No group named FX_SetNewCartEntry or FX_AddToCart exists.** The gate passes this check.
- Matches the expected state from EXP-124 and EXP-125.

### Details > Variables (view only)

- Form - Persistent: `fds_SC2` (pre-existing; not an FX_ artifact; not touched).
- Form - Temporary: **FX_Count**, **FX_CustomerID**, **FX_Page** (as expected).
- Global - Persistent and Global - Temporary hold non-FX_ entries (e.g. `ccvw_OutputFormatInlineAll`, `lse_...`); not touched.

### Details > Components (view only; tree expanded with the grid's Expand control)

Relevant rows (as read, not changed):

- **GridItems**: Type Grid; Data Source `objects2`; Pane 0; Container FlexLayoutHome (under FlexLayoutMain > Region03: homepage). Its Tile Form and Tile When were not read in T1 (not in scope).
- **ButtonAddToCart**: Type PushButton; Container FlexLayoutButtons (under Region04: buttons). Caption shows `FX_sAddToCart`.
- ButtonSignIn, ButtonHome, ButtonCart: Enabled When `#C(<button>), #V(FX_CustomerID) <> "", "True"` (EXP-125), Event to generate FX_SignInBtn2, FX_HomeBtn, FX_CartBtn (as seen in the Event to generate column).
- ButtonSignIn2: Event to generate FX_SignInBtn.
- StaticCustID and EditCustID: binding `variables.FX_CustomerID`; StaticCustID2: no binding shown; EditCount: `variables.FX_Count(INITIALVALUE(1))`.
- GridOrders: Grid, Data Source `objects`; columns object.FX_OrderNumber, object.FX_Item, object.FX_Count, object.FX_CustomerID.

### GridItems (Properties header confirmed: "GridItems (Grid)"; Name GridItems; Type Grid)

- Events group (expanded by label double-click, view only; EXP-122 route): Primary blank; Data Change, Lose Focus, Gain Focus blank; **Drag From Events: 0 event(s)** (blank); **Drop On Events: 0 event(s)**.
- Expected blank for Drag From Events: confirmed. Nothing to stop for.

### ButtonAddToCart (Properties header confirmed: "ButtonAddToCart (Button)"; Name ButtonAddToCart; Type PushButton)

- Events group (already expanded): Primary blank; **Drag From Events: 0 event(s)**; **Drop On Events: 0 event(s)** (blank, as expected).
- Expected blank for Drop On Events: confirmed.

### Results of the gate

- AC-1 checks, observed:
  - Sources reviewed at the start: yes (listed above).
  - Session usable: yes.
  - User scope: yes (ScopeType User).
  - No runtime Form dirty: the Web Client shows no runtime Form content; not dirty as observed.
  - FX_CustomerPortal open and clean in the Designer: yes (only Form tab; Save disabled).
  - Handlers and variables as left by EXP-125: yes (handler groups and rows as in the table; variables FX_Count, FX_CustomerID, FX_Page).
  - No FX_SetNewCartEntry or FX_AddToCart group: yes.
  - GridItems Drag From Events and ButtonAddToCart Drop On Events blank: yes ("0 event(s)" for both).
  - Baseline console error counts recorded: Designer 2 errors / 0 warnings; Web Client 5 errors / 2 warnings.

## Screenshots (T1)

| File | What it shows | What it does not prove |
| --- | --- | --- |
| `evidence/EXP-126/t1-01-event-handlers-baseline.png` | Details > Event Handlers panel, expanded: FX_CartBtn (0, Set Values, SETVARVALUES(FX_Page=3)), FX_HomeBtn (0, Set Values, SETVARVALUES(FX_Page=2)) and the top of FX_SignInBtn (0, Collection Refresh, object2), in the Response Parameters column. The image is clipped by the panel height. | FX_SignInBtn row 1, FX_SignInBtn2, StdFormPredisplay and the absence of a new group are visible only in the accessibility readback above, not in this image. |
| `evidence/EXP-126/t1-02-griditems-events-baseline.png` | Properties panel header "GridItems (Grid)", Name GridItems, Type Grid; Events group expanded with Primary, Data Change, Lose Focus, Gain Focus blank; Drag From Events "0 event(s)"; Drop On Events "0 event(s)". | Nothing beyond the readback about the Designer's saved state. |
| `evidence/EXP-126/t1-03-buttonaddtocart-events-baseline.png` | Properties panel header "ButtonAddToCart (Button)", Name ButtonAddToCart, Type PushButton, Caption FX_sAddToCart; Events group with Drag From Events and Drop On Events both "0 event(s)". | Nothing beyond the readback about saved state. |

All three were viewed (inspected) after capture. Filenames alone are not cited as proof.

## Action audit, T1 (the T1 part of the cumulative audit; the T1+T2 cumulative table is in the T2 section)

Counts are exact, from the ordered tool-call list of this task.

| Category | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first selection. |
| Tab selects (performed) | 2 | Tab 1 (Web Client), then tab 0 (Designer). Both succeeded. |
| Element clicks performed (ref-based) | 11 | Banner close (1); Details Expand Panel (1); Event Handlers tab (1); Event Handlers grid Expand (1); Variables tab (1); Variables grid Expand (1); Components tab (1); Components tree Expand (1); GridItems Type cell (2: first select, and re-select for the screenshot); ButtonAddToCart Type cell (1). Count: 1+1+1+1+1+1+1+1+2+1 = 11. |
| Double-clicks performed | 1 | GridItems Properties Events label (view-only group expansion). |
| Coordinate clicks | 0 | No coordinate fallback used. |
| Arrow clicks | 0 | No list or combo arrow clicked. |
| Keyboard/Enter/Tab presses | 0 | |
| Mouse drags | 0 | |
| List opens | 0 | |
| Dialog opens (incl. nested) | 0 | |
| Dialog OK / Cancel | 0 / 0 | |
| Ellipsis opens | 0 | |
| Prompts seen | 0 | |
| Text entries / corrections | 0 / 0 | |
| Designer Saves | 0 | Save disabled before and after; none performed (not permitted in T1). |
| Form closes / reopens | 0 / 0 | |
| Global/unload/Regenerate/Delete clicks | 0 | |
| Re-logins | 0 | |
| Session-expiry / server-event errors | 0 | |
| Console rises | 0 | Designer 2 -> 2 throughout; Web Client 5/2 unchanged. |
| Failed actions: "Ref not found" (click) | 1 | Click on the Event Handlers tab ref (not performed). |
| Failed actions: "Ref not found" (targeted snapshot) | 2 | Targeted snapshot of the Details tablist; targeted snapshot of the Components panel. |
| Fresh untargeted snapshot recovery (one per "Ref not found") | 3 | Used as the allowance rule requires; the third one returned as a file (persisted), so refs were taken from a find plus targeted snapshot instead. |
| Untargeted snapshots (total) | 7 | 3 recovery; 4 others. Two were too large to return inline (persisted output). |
| Targeted snapshots (total, performed) | 13 | 15 attempted, 2 failed ("Ref not found"). |
| Finds (locate only) | 12 | None used as click references. |
| Screenshots (decisive, gate) | 3 | t1-01, t1-02, t1-03. |
| Repository reads (Read, Glob, Grep) | 13 | AGENTS.md (1); transcript ranges (3); recipe (1); EXP-126 record Read (1, failed: file did not exist); Glob (2); Grep for outcome headings (1); Read of outcome sections (4). |
| Image views (inspection of saved screenshots) | 3 | t1-01, t1-02, t1-03. |

Narrative of the actions in order:

1. Read AGENTS.md, transcript sections, session recipe, and the four Outcome sections. Glob for the EXP-126 record and evidence directory (none existed).
2. Browser tab list; select tab 1 (Web Client); untargeted snapshot (Web Client): console 5/2; banner visible.
3. Click banner close (Web Client) once (standing authorization). Console 5/2.
4. Select tab 0 (Designer); untargeted snapshot: FX_CustomerPortal, Save disabled, User scope, console 2/0.
5. Click Details Expand Panel (console 2).
6. Find "Event Handlers"; targeted snapshot of the Details tablist. The Collections tab was selected by default (console 2).
7. Find "FX_Orders"; targeted snapshot of the Collections tabpanel: Primary FX_Orders, Secondary 2 FX_Items (console 2).
8. Click Event Handlers tab ref e522 from a stale targeted snapshot: "Ref not found" (not performed). One untargeted snapshot (recovery 1): Event Handlers tab present (console 2).
9. Click Event Handlers tab (performed). Find "StdFormPredisplay"; targeted snapshot: groups collapsed (console 2).
10. Click grid Expand (Event Handlers) (view only). Targeted snapshot: all six rows read (console 2).
11. Targeted snapshot of the Details tablist: "Ref not found" (recovery 2 untargeted snapshot taken, inline).
12. Screenshot t1-01 (Event Handlers panel) (console 2).
13. Click Variables tab (performed). Find "Form - Temporary"; targeted snapshot: groups collapsed (console 2).
14. Click Variables grid Expand (view only); targeted snapshot: FX_Count, FX_CustomerID, FX_Page read (console 2).
15. Untargeted snapshot (console 2); click Components tab (performed).
16. Find "GridItems" (no matches; tree collapsed); find "Components"; targeted snapshot of the Components panel: only Pane (00) visible.
17. Click Components tree Expand (view only); targeted snapshot: full tree read; GridItems and ButtonAddToCart rows located (console 2). The untargeted snapshot of this step was persisted to a file (too large).
18. Click GridItems Type cell (select). Find "Events" (console 2). Untargeted snapshot: persisted to a file (54 KB), not read.
19. Find "Component"; targeted snapshot of the Properties panel (header "GridItems (Grid)"; Events collapsed).
20. Double-click the Events label (view-only expansion); targeted snapshot: Events rows read (both blank).
21. Targeted snapshot of the Components panel: "Ref not found" (recovery 3: untargeted snapshot, persisted to a file 56 KB, not read inline). Find "ButtonAddToCart"; targeted snapshot of its table (refs fresh).
22. Click ButtonAddToCart Type cell (select). Find "Drop On Events"; targeted snapshot of the Properties panel: header "ButtonAddToCart (Button)"; Events: Drag From 0, Drop On 0 (console 2).
23. Screenshot t1-03 (ButtonAddToCart Events).
24. Find "GridItems"; targeted snapshot of its table; click GridItems Type cell (re-select for the screenshot). Screenshot t1-02 (GridItems Events).
25. Find "Save": Save disabled. Stop with no dialog, list or menu open.

The Web Client console (5/2) and Designer console (2/0) were recorded at the start and after every action; no rise occurred.

## Worker-written file inventory (T1)

- Written by the worker: `experiments/EXP-126-hello-world-part-8-phase-7-add-to-cart-handlers-drag-drop.md` (created in T1).
- Written by the worker: `evidence/EXP-126/t1-01-event-handlers-baseline.png`, `evidence/EXP-126/t1-02-griditems-events-baseline.png`, `evidence/EXP-126/t1-03-buttonaddtocart-events-baseline.png`.
- Tool-written (automatic, not authored by the worker; not read): 12 page snapshot files `evidence/playwright/page-2026-10-22T16-38-28-704Z.yml`, `...16-38-36-929Z`, `...16-39-00-037Z`, `...16-39-13-926Z`, `...16-39-29-661Z`, `...16-39-36-295Z`, `...16-39-48-070Z`, `...16-39-56-454Z`, `...16-40-02-884Z`, `...16-40-24-628Z`, `...16-40-46-203Z`, `...16-41-02-711Z` (one per performed click); one console log `evidence/playwright/console-2026-10-22T16-38-19-023Z.log` (the tool's console log; not read by the worker).
- Persisted tool output outside the repository (not read beyond the preview): two large untargeted snapshot results saved under the user's Claude projects `tool-results` folder.
- No change to any other repository file in T1.

## Cleanup inventory (T1)

- Nothing created or changed in Mongoose in T1. The cleanup inventory for T2 to T8 is recorded in each task.

## Final state (end of T1)

- Designer: FX_CustomerPortal is the only Form tab, open and clean (Save disabled), User scope, no dialog, list or menu open. Details panel expanded (Components tab selected; Components tree expanded; GridItems selected; ButtonAddToCart not selected). Expansion of groups and trees is view state only.
- Web Client: unchanged except the banner dismissal; no runtime Form open; not inspected further.

## Findings (observed only)

1. Details opens collapsed; after expansion the default tab is Collections, which lists the primary collection as "Primary Collection: FX_Orders" and the secondary as "Secondary Collection 2: FX_Items".
2. The Event Handlers grid toolbar has an Expand control that expands every handler group (view only). Groups are collapsed by default.
3. Components tree: GridItems = Grid with Data Source `objects2`; ButtonAddToCart = PushButton with caption `FX_sAddToCart` (a string resource; not changed here).
4. A property group expanded by a label double-click (Events) stays expanded when another component is selected (ButtonAddToCart's Events group was already open).
5. "0 event(s)" is the Designer's display for an empty Drag From Events / Drop On Events row.
6. Ref handling: a targeted snapshot of one subtree invalidated refs that the Details tablist had in an earlier targeted snapshot; three "Ref not found" errors occurred in T1, each followed by one fresh untargeted snapshot.
7. Untargeted snapshots of the Components tree and the full Designer page exceed the inline limit (54 to 56 KB) and are saved to a file; targeted snapshots of the Details panels were used instead.
8. Form - Persistent holds a pre-existing `fds_SC2` variable (non-FX_, not part of EXP-126).

## Qualifications

- The Event Handlers screenshot is clipped by the panel height; the full group list is established by the accessibility readback, not by the image.
- The post-banner Web Client state was not read inline.
- "No runtime Form dirty" for the Web Client is inferred from the absence of runtime Form content in the visible frame; no further inspection was performed.
- The Designer console count is a tool-reported count ("2 errors, 0 warnings") and was not inspected.

## Next step

T2 was run next (see the T2 section below).

## Limits

- Same-session UI evidence only. No cross-session durability, database-level durability or replay verification is claimed.
- Findings are observed only.

## Reconciliation of the T1 click subtotal

The T1 section above reported "Element clicks performed 11" and a separate "Double-clicks performed 1". Reconciled from the T1 call list: 11 single ref-based clicks (banner close 1; Details Expand Panel 1; Event Handlers tab 1; Event Handlers grid Expand 1; Variables tab 1; Variables grid Expand 1; Components tab 1; Components tree Expand 1; GridItems Type cell 2, the second being the re-select for the Events screenshot; ButtonAddToCart Type cell 1) plus 1 double-click (GridItems Events label, view-only). The one failed click ("Ref e522 not found") was not performed and is not counted. Total T1 pointer actions: 12 (11 single + 1 double). No figure was estimated.

## T2: FX_SetNewCartEntry with the FX_Item pair (one Save)

Scope: FX_CustomerPortal, User scope. Created one handler group `FX_SetNewCartEntry` (sequence 0, Response Type Set Values, one property pair). No FX_Count or FX_CustomerID pair, no FX_AddToCart, no component event changed.

### Start state (read first; observed)

- Sources: AGENTS.md reread in full; this record's Status, Objective, Task plan and T1 gate read (lines 1-40). Brief T2 text in the task.
- Tabs listed before any selection: tab 0 = Designer (FX_CustomerPortal, current); tab 1 = portal Web Client. No tab selection was needed in T2 (tab 0 was already current); the Web Client was not touched.
- Designer console at T2 start: **2 errors, 0 warnings** (same as the T1 baseline).
- Designer: User scope (status line `ScopeType: User`), FX_CustomerPortal the only Form tab, Save disabled, no dialog open.
- Event Handlers before the change: FX_CartBtn (0 Set Values SETVARVALUES(FX_Page=3)); FX_HomeBtn (0 Set Values SETVARVALUES(FX_Page=2)); FX_SignInBtn (0 Collection Refresh object2; 1 Set Values SETVARVALUES(FX_Page=2)); FX_SignInBtn2 (0 Set Values SETVARVALUES(FX_Page=1)); StdFormPredisplay (0 Set Values SETVARVALUES(FX_Page=1)). No FX_SetNewCartEntry or FX_AddToCart group.

### Steps and observations

1. Details > Event Handlers tab selected. Event Handlers grid New (+) (the first of five grid-toolbar buttons; icon identified from the T1 screenshot) clicked once.
2. **Event Handler dialog** (title "Event Handler"): Name combobox (with a list arrow), OK, Cancel. **The Name field was blank when the dialog opened** (`evidence/EXP-126/t2-01-event-handler-dialog-open.png`); EXP-124 recorded a pre-filled name, which did not occur here (observed). Name focused by clicking the text field, one Control+A, then `FX_SetNewCartEntry` typed key by key (slow). Verified text: `FX_SetNewCartEntry`. OK once.
3. Result: new group **FX_SetNewCartEntry**, sequence 0, Response Type blank, Disabled false. The new group sorted between FX_HomeBtn and FX_SignInBtn; no existing row was replaced, reordered or moved (targeted readback of the whole panel).
4. Row selected by its Response Type cell. Properties grid: Expand (all) clicked once. Response group expanded; sub-row **Type** with a list arrow (value blank) and **Parameters** (Open Edit Property Dialog ellipsis).
5. Type list opened by the Response > Type arrow. Options offered (targeted snapshot of the list): Send Web Container Message, **Set Values**, Show Banner, Timer, Add Breadcrumb, Add entry to the Audit Log, Binary Value Action, Collection Copy, Collection Delete, Collection Init with Auto Insert Row, Collection Make Current, Collection Navigate, Collection New, Collection Notes, Collection Notes for Current, Collection Refresh, Collection Refresh Current, Collection Save, Collection Validate, Conditional Action, Execute EXE or other program, Form Script Method, Generate Application Event, Generate event, Get Location From Browser, Goto Explorer Folder, Goto Form, Goto Form Page, Goto Tab, Goto URL, Inline Script, Invoke User Control, Load Collection, Method Call, Print Preview, Prompt, Run Background Task, Run Form, Run Form as Linked Child, Run Form as Modal Child, Run Form to Retrieve Filter, Run Script. Clicked **Set Values** once. Neutral row (Description label) clicked once to commit the in-line editor. Readback: Type = **Set Values**.
6. Parameters ellipsis clicked once. **Event Handler Parameters** dialog fields: Keep (combobox); Error Message (C(ErrorMessageStatic)); Success Message (C(SuccessMessageStatic)); Only When Current Collection Is (C(CollectionStatic) = `<all collections>`); Only When Platform Is; Ignore Failure; Message as Toast?; Disabled; Variables "..."; Components "..."; Properties "..." (the one used); Do not mark output targets modified?; OK, Cancel, Help. Nothing changed in these fields.
7. Properties ellipsis clicked once. **"Edit Set Property Values"** list: title as shown; listbox empty; controls Up (disabled), New, Edit (disabled), Delete (disabled), Down (disabled), OK, Cancel, Help. (Empty as expected.)
8. New clicked once. **"Edit Set Property Value Pair"** dialog fields: Target (combobox with Open); Value (text box with "..." ellipsis); Collection for Target (combobox = **primary collection**, with Open). Buttons OK, Cancel, Help.
9. Target list opened (Open). The list held the primary FX_Orders properties (including FX_CustomerID, FX_Count, FX_Item, FX_OrderNumber). Clicked **FX_Item** once. Target = FX_Item. Collection for Target left at **primary collection** (it is named "primary collection"; the primary collection was already selected, so no change was needed).
10. Value "..." ellipsis clicked once. **"Edit Entry"** dialog (the value dialog): Type (combobox, Open); Value (combobox, Open); Collection (combobox, Open; disabled until a Type was chosen, then enabled at "primary collection"). Buttons OK, Cancel, Help (`evidence/EXP-126/t2-02-value-dialog-open.png`).
11. Type list opened (Open). Options offered: **Literal, Property Name, Variable Name, Component Name, Property Value, Variable Value, Component Value.** Clicked **Property Value** once.
12. Collection list opened (Open). Options offered: **primary collection** (was selected), **secondary collection 2**. Clicked **secondary collection 2** once.
13. Value list opened (Open): the secondary collection's FX_Items properties (CreateDate, CreatedBy, FX_Cost, FX_Description, FX_Picture, FX_UM, FX_UMsDescription, InWorkflow, NoteExistsFlag, RecordDate, RowPointer, UpdatedBy, FX_Item, _ItemId, _ItemWarnings, UDF fields, and others). Clicked **FX_Item** once.
14. Value dialog verified before its OK: Type = Property Value; Value = FX_Item; Collection = secondary collection 2 (`evidence/EXP-126/t2-03-value-dialog-before-ok.png`). OK once (Edit Entry closed).
15. Pair dialog: **Value text = `P(2.FX_Item)`** (the `2.` prefix marks the secondary collection, as the tutorial says). Target = FX_Item; Collection for Target = primary collection (`evidence/EXP-126/t2-04-pair-dialog-before-ok.png`). OK once.
16. "Edit Set Property Values" list now holds one pair: **`FX_Item=P(2.FX_Item)`** (verified by targeted snapshot). OK once.
17. Event Handler Parameters: Properties field reads `FX_Item=P(2.FX_Item)`; other fields unchanged. OK once.
18. Handler row read back: FX_SetNewCartEntry | 0 | Set Values | false | Response Parameters **`SETPROPVALUES(FX_Item=P(2.FX_Item))`** (Properties > Parameters row shows the same text). Row screenshot before Save: `evidence/EXP-126/t2-05-handler-row-before-save.png`.
19. **One Designer Save** (the Designer toolbar Save, enabled after the change). Response: the toast **"Form [FX_CustomerPortal] and global object(s) were saved."** was observed (text read with find and a targeted snapshot of the toast element). The toast disappeared before a screenshot could be taken; the toast-element screenshot failed with "Ref e3228 not found" (one fresh untargeted snapshot, recovery allowance used; the Save state then read Save disabled). Post-save state screenshot: `evidence/EXP-126/t2-06-save-state-after.png` (Save icon greyed; this image shows the toolbar only, not the toast).
20. After the Save, the Event Handlers readback still shows FX_SetNewCartEntry (0 Set Values, SETPROPVALUES(FX_Item=P(2.FX_Item))) and the five earlier groups unchanged. Save disabled. No dialog, list or menu open. Designer console **2 errors, 0 warnings** after every action.

### Exact texts recorded (T2)

| Item | Exact text observed |
| --- | --- |
| Handler name (typed) | `FX_SetNewCartEntry` |
| Response Type | `Set Values` |
| Pair text (list) | `FX_Item=P(2.FX_Item)` |
| Pair Value field | `P(2.FX_Item)` |
| Target | `FX_Item` |
| Collection for Target (pair) | `primary collection` |
| Value Type chosen | `Property Value` |
| Value property | `FX_Item` |
| Value collection chosen | `secondary collection 2` |
| Response Parameters (row) | `SETPROPVALUES(FX_Item=P(2.FX_Item))` |
| Save toast | `Form [FX_CustomerPortal] and global object(s) were saved.` |

### Collection options named (T2; the brief asks each to be recorded)

- Collection for Target (pair dialog): "primary collection" (the default; the Open list was not opened).
- Value dialog Collection: "primary collection" and "secondary collection 2".
- Form-level collections (Details > Collections, T1): Primary Collection FX_Orders; Secondary Collection 2 FX_Items.

### Screenshots (T2; viewed by the worker after capture)

| File | What it shows | What it does not prove |
| --- | --- | --- |
| `evidence/EXP-126/t2-01-event-handler-dialog-open.png` | Event Handler dialog at open: Name combobox empty; OK; Cancel. | Does not show a pre-fill; the Name was blank. |
| `evidence/EXP-126/t2-02-value-dialog-open.png` | Edit Entry dialog at open: Type, Value and Collection (greyed) empty. | Does not show a completed value. |
| `evidence/EXP-126/t2-03-value-dialog-before-ok.png` | Edit Entry before OK: Type Property Value, Value FX_Item, Collection secondary collection 2. | Does not show the pair list or saved state. |
| `evidence/EXP-126/t2-04-pair-dialog-before-ok.png` | Edit Set Property Value Pair before OK: Target FX_Item, Value P(2.FX_Item), Collection for Target primary collection. | Does not show the list after OK. |
| `evidence/EXP-126/t2-05-handler-row-before-save.png` | Event Handlers panel: FX_SetNewCartEntry 0 Set Values false SETPROPVALUES(FX_Item=P(2.FX_Item)); the Properties panel shows Event FX_SetNewCartEntry, Sequence 0, Disabled False. The image is clipped; the other groups are partly visible. | Does not show the lower Parameters row or the group's rest. |
| `evidence/EXP-126/t2-06-save-state-after.png` | Designer toolbar after the Save: the Save icon greyed (disabled). | Does not show the toast (it had disappeared); the toast text is recorded from find and a targeted snapshot. |

### Designer Save

- Saves in T2: **1**. Save response: toast text above; Save disabled afterwards; no retry, no second Save.

### Cumulative browser action audit (T1 + T2)

| Category | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Tab list (read-only) | 1 | 1 | 2 |
| Tab selections performed | 2 | 0 | 2 |
| Single ref-based clicks performed | 11 | 26 | 37 |
| Double-clicks performed (view-only Events label) | 1 | 0 | 1 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow-button clicks (list or combo arrows) | 0 | 5 | 5 |
| Ellipsis clicks (Parameters, Properties, Value) | 0 | 3 | 3 |
| New clicks (handler, pair) | 0 | 2 | 2 |
| Tab clicks (Details tabs) | 3 | 1 | 4 |
| Expand clicks (group/grid/tree/Properties, view only; single) | 4 | 1 | 5 |
| Option (list item) clicks | 0 | 5 | 5 |
| Neutral-row clicks (to commit an editor) | 0 | 1 | 1 |
| Name-field focus clicks | 0 | 1 | 1 |
| Response Type cell selects (row) | 0 | 1 | 1 |
| Component selects (Type cell) | 3 | 0 | 3 |
| Banner dismissals | 1 | 0 | 1 |
| Save clicks (Designer) | 0 | 1 | 1 |
| Dialog OK clicks | 0 | 5 | 5 |
| Dialog Cancel clicks | 0 | 0 | 0 |
| Dialogs opened (incl. nested) | 0 | 5 | 5 |
| Lists opened | 0 | 5 | 5 |
| Prompts seen | 0 | 0 | 0 |
| Key presses | 0 | 1 (Control+A) | 1 |
| Typed entries (text fields) | 0 | 1 (Name, 18 characters, key by key) | 1 |
| Corrections | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 |
| Form closes or reopens | 0 | 0 | 0 |
| Global, unload, Regenerate, Delete, Select Form OK clicks | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 |
| Session-expiry or sign-in pages | 0 | 0 | 0 |
| Console rises | 0 | 0 | 0 |
| "Ref not found" errors | 1 (click; not performed) + 2 (targeted snapshot) | 1 (screenshot of the toast element) | 4 |
| Fresh untargeted snapshot recoveries | 3 | 1 | 4 |
| Untargeted snapshots taken | 7 | 2 | 9 |
| Targeted snapshots performed | 13 | 27 | 40 |
| Finds (locating only; never used as click refs) | 12 | 19 | 31 |
| Repository reads (Read, Glob, Grep) | 13 | 2 | 15 |
| Screenshots saved | 3 | 6 | 9 |
| Screenshot images viewed | 3 | 6 | 9 |

Notes on the cumulative figures: the T1 "Expand" row counts four single clicks (Details panel, Event Handlers grid, Variables grid, Components tree); the fifth expand in T1 was the double-click on the Events label, counted in the double-click row. T1's "Component selects" are the three Type-cell clicks (GridItems twice, ButtonAddToCart once). T2's Properties Expand is the only expand in T2. The "Ref not found" total is 4 (T1: one click and two targeted snapshots; T2: one screenshot). All counts are from the ordered call lists of each task, not estimates.

### Worker-written file inventory (T2)

- Written by the worker in T2: `evidence/EXP-126/t2-01-event-handler-dialog-open.png`, `t2-02-value-dialog-open.png`, `t2-03-value-dialog-before-ok.png`, `t2-04-pair-dialog-before-ok.png`, `t2-05-handler-row-before-save.png`, `t2-06-save-state-after.png`; and this record (updated).
- Tool-written (automatic; not read): page snapshot files `evidence/playwright/page-2026-10-22T16-44-52-738Z.yml` through `...16-47-35-124Z.yml` (one per performed click or action) and the console log `evidence/playwright/console-2026-10-22T16-44-40-292Z.log`.
- Tool results persisted outside the repository (not read beyond previews): the two large untargeted snapshots taken at the start of T2 and in the recovery step, if persisted.
- No other repository file was written in T2.

### Final state (end of T2)

- Designer: FX_CustomerPortal open and clean (Save disabled); User scope; no dialog, list or menu open; Details panel on Event Handlers with the new FX_SetNewCartEntry row selected; Properties grid expanded (view state).
- Event Handlers: six groups now (FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn, FX_SignInBtn2, StdFormPredisplay); FX_SetNewCartEntry has one row (sequence 0, Set Values, SETPROPVALUES(FX_Item=P(2.FX_Item))).
- Web Client: not touched in T2 (last read in T1: 5 errors, 2 warnings).

### Cleanup inventory (so far)

- FX_SetNewCartEntry handler group, one row (sequence 0, Set Values, one property pair FX_Item = P(2.FX_Item)) on FX_CustomerPortal (User scope). Nothing else created or changed in T2.

### Findings (T2; observed only)

1. The Event Handler dialog's Name was blank at open in this run (EXP-124 recorded a pre-fill).
2. The Response Type list offers "Set Values" among about 40 entries; it is set only in the lower Properties grid, through the Type arrow.
3. The Parameters dialog's Properties ellipsis opens an empty "Edit Set Property Values" list with New, Edit, Delete, Up and Down (Edit, Delete, Up and Down disabled until a pair exists).
4. In the pair dialog, the Value field is a text box with an ellipsis; a Property Value from the secondary collection is stored and shown as `P(2.FX_Item)`, and the list shows `FX_Item=P(2.FX_Item)`.
5. The value dialog's Collection field is disabled until a Type is chosen, then defaults to "primary collection".
6. The handler's Response Parameters read `SETPROPVALUES(FX_Item=P(2.FX_Item))` after the Save; the Save toast read "Form [FX_CustomerPortal] and global object(s) were saved." (observed via text).

### Qualifications

- The Save toast was observed as text, not as an image; it disappeared before a screenshot.
- The readback after the Save is the same-session Designer UI state; no close/reopen was performed in T2 (the T9 readback covers that).
- No cross-session durability or database-level durability is claimed.

### Next step

T3: select the FX_SetNewCartEntry row, open its Parameters ellipsis and then the Properties ellipsis (the list should hold the FX_Item pair), add the FX_Count pair (target FX_Count on the primary collection, Value V(FX_Count) typed key by key), then the FX_CustomerID pair (target FX_CustomerID on the primary collection, Value V(FX_CustomerID)), verify the three pairs, one Save. Not run in T2.

## T3: FX_Count and FX_CustomerID pairs (one Save)

Scope: FX_CustomerPortal, User scope. Edited only the existing `FX_SetNewCartEntry` group (sequence 0). No new handler row was created. Two property pairs added; the FX_Item pair left unchanged. No FX_AddToCart, no component event, no other handler or variable changed.

### Start state (observed)

- Sources: AGENTS.md reread (lines 130-170, partial; the rest was in context from the T1 full read); the record's Status and task table read (lines 1-30). Tabs listed before any selection: tab 0 = Designer (FX_CustomerPortal, current); tab 1 = portal Web Client. No tab selection was needed (tab 0 current); the Web Client was not touched.
- Designer console at T3 start: **2 errors, 0 warnings**.
- Designer: User scope (status line `ScopeType: User`), FX_CustomerPortal the only Form tab, Save disabled, no dialog or list open. Event Handlers tab selected.
- Event Handlers (targeted snapshot): FX_CartBtn (0 Set Values SETVARVALUES(FX_Page=3)); FX_HomeBtn (0 Set Values SETVARVALUES(FX_Page=2)); FX_SetNewCartEntry (0 Set Values SETPROPVALUES(FX_Item=P(2.FX_Item))); FX_SignInBtn (0 Collection Refresh object2; 1 Set Values SETVARVALUES(FX_Page=2)); FX_SignInBtn2 (0 Set Values SETVARVALUES(FX_Page=1)); StdFormPredisplay (0 Set Values SETVARVALUES(FX_Page=1)). No FX_AddToCart group.

### Steps and observations

1. Clicked the FX_SetNewCartEntry row's Response Type cell once (row selected; Response Type = Set Values confirmed in the Properties tree).
2. Parameters ellipsis clicked once: Event Handler Parameters dialog. Properties field read `FX_Item=P(2.FX_Item)` (unchanged).
3. Properties ellipsis clicked once: "Edit Set Property Values" list showed **one existing pair, `FX_Item=P(2.FX_Item)`** (verified; FX_Item pair is the first and unchanged).
4. **Pair 2 (FX_Count):** New clicked once. Pair dialog: Target (empty combobox with Open), Value (textbox with "..."), Collection for Target = **primary collection** (not opened). Target list opened (Open) and **FX_Count** clicked once (the list showed the FX_Orders properties). Target read `FX_Count`. Value textbox clicked once, then `V(FX_Count)` typed key by key (slow); Tab pressed once. Verified: Target FX_Count, Value `V(FX_Count)`, Collection for Target primary collection. OK once. The list then held two pairs (`FX_Item=P(2.FX_Item)`, `FX_Count=V(FX_Count)`).
5. **Pair 3 (FX_CustomerID):** New clicked once. Pair dialog as above. Target list opened (Open) and **FX_CustomerID** clicked once. Value textbox clicked once, `V(FX_CustomerID)` typed key by key (slow); Tab pressed once. Verified: Target FX_CustomerID, Value `V(FX_CustomerID)`, Collection for Target primary collection. OK once.
6. "Edit Set Property Values" list read: **three pairs in this order** (screenshot `t3-01` before its OK):
   - `FX_Item=P(2.FX_Item)`
   - `FX_Count=V(FX_Count)`
   - `FX_CustomerID=V(FX_CustomerID)`
   The first pair is unchanged. OK once (list closed).
7. Event Handler Parameters: Properties field read `FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID)`; other fields unchanged. OK once (dialog closed).
8. Handler row read back (targeted snapshot): FX_SetNewCartEntry | 0 | Set Values | false | Response Parameters **`SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`**. Screenshot `t3-02` before Save. Note: the screenshot's Response Parameters column is clipped (`SETPROPVALUES(FX_Item=P(2.FX_Item),F...`); the full text comes from the accessibility readback.
9. Designer toolbar: Save enabled (verified by a toolbar snapshot, console 2/0). No dialog or list open at that point. **One Designer Save** clicked once.
10. Save response: the toast read **"Form [FX_CustomerPortal] and global object(s) were saved."** The toast was captured this time as an image: `t3-03-save-toast.png` (title "Save", message as above; viewed). Console 2/0 after the Save.
11. Save state after: a fresh snapshot showed **Save disabled**. The Event Handlers readback still shows the three-pair Response Parameters; the other five groups unchanged. A targeted toolbar snapshot used a stale ref ("Ref e11 not found"), recovered with one fresh untargeted snapshot (recovery allowance used), after which the toolbar capture was taken (`t3-04-save-state-after.png`; toolbar only; not viewed).
12. Designer console **2 errors, 0 warnings** after every action in T3. No dialog, list or editor open at the end. Nothing was retried.

### Exact texts recorded (T3)

| Item | Exact text observed |
| --- | --- |
| Existing pair (before T3) | `FX_Item=P(2.FX_Item)` |
| Pair 2 Target / Value / Collection | `FX_Count` / `V(FX_Count)` / `primary collection` |
| Pair 3 Target / Value / Collection | `FX_CustomerID` / `V(FX_CustomerID)` / `primary collection` |
| List after T3 (order) | `FX_Item=P(2.FX_Item)`, `FX_Count=V(FX_Count)`, `FX_CustomerID=V(FX_CustomerID)` |
| Event Handler Parameters Properties field | `FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID)` |
| Response Parameters (handler row, after Save) | `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))` |
| Save toast | `Form [FX_CustomerPortal] and global object(s) were saved.` |

### Screenshots (T3)

| File | What it shows | What it does not prove |
| --- | --- | --- |
| `evidence/EXP-126/t3-01-three-pairs-list-before-ok.png` | "Edit Set Property Values" list before its OK: three rows, `FX_Item=P(2.FX_Item)`, `FX_Count=V(FX_Count)`, `FX_CustomerID=V(FX_CustomerID)`, in that order. Viewed. | Does not show the saved state; the list's OK and the pair dialogs are shown only by text. |
| `evidence/EXP-126/t3-02-handler-row-before-save.png` | Event Handlers panel before Save: FX_SetNewCartEntry row 0, Set Values, false, Response Parameters beginning `SETPROPVALUES(FX_Item=P(2.FX_Item),F...`. Viewed. | The Response Parameters text is clipped; the full text is from the accessibility readback. Other groups partly visible. |
| `evidence/EXP-126/t3-03-save-toast.png` | Save toast after the Save: "Save" / "Form [FX_CustomerPortal] and global object(s) were saved." Viewed. | Does not prove persistence across a close/reopen (T9). |
| `evidence/EXP-126/t3-04-save-state-after.png` | Designer toolbar after the Save (Save state). Not viewed by the worker in T3. | The Save state is taken from the accessibility snapshot (Save disabled), not from this image. |

### Designer Save (T3)

- Saves in T3: **1**. Response: toast text above; Save disabled afterwards; no retry.

### Cumulative browser action audit (T1 + T2 + T3)

| Category | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab lists (read-only) | 1 | 1 | 1 | 3 |
| Tab selections performed | 2 | 0 | 0 | 2 |
| Single ref-based clicks performed (all click categories below sum to this, except the double-click) | 11 | 26 | 16 | 53 |
| Double-clicks (view-only Events label) | 1 | 0 | 0 | 1 |
| Coordinate clicks | 0 | 0 | 0 | 0 |
| Arrow-button clicks (list or combo arrows) | 0 | 5 | 2 | 7 |
| Ellipsis clicks (Parameters, Properties, Value) | 0 | 3 | 2 | 5 |
| New clicks (handler, pair) | 0 | 2 | 2 | 4 |
| Expand clicks (group/grid/tree/Properties, view only; single) | 4 | 1 | 0 | 5 |
| Details tab clicks | 3 | 1 | 0 | 4 |
| Option (list item) clicks | 0 | 5 | 2 | 7 |
| Neutral-row clicks (to commit an editor) | 0 | 1 | 0 | 1 |
| Name-field focus clicks | 0 | 1 | 0 | 1 |
| Value-textbox clicks | 0 | 0 | 2 | 2 |
| Row selects (Response Type cell) | 0 | 1 | 1 | 2 |
| Component selects (Type cell) | 3 | 0 | 0 | 3 |
| Banner dismissals | 1 | 0 | 0 | 1 |
| Save clicks (Designer) | 0 | 1 | 1 | 2 |
| Dialog OK clicks | 0 | 5 | 4 | 9 |
| Dialog Cancel clicks | 0 | 0 | 0 | 0 |
| Dialogs opened (incl. nested) | 0 | 5 | 4 | 9 |
| Lists opened (Type, Target, Collection, Value, and T3 Target lists) | 0 | 5 | 2 | 7 |
| Prompts seen | 0 | 0 | 0 | 0 |
| Key presses | 0 | 1 (Control+A) | 2 (Tab) | 3 |
| Typed entries (text fields, key by key) | 0 | 1 (Name) | 2 (Values) | 3 |
| Corrections | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 | 2 |
| Form closes or reopens | 0 | 0 | 0 | 0 |
| Global, unload, Regenerate, Delete, Select Form OK clicks | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Session-expiry or sign-in pages | 0 | 0 | 0 | 0 |
| Console rises | 0 | 0 | 0 | 0 |
| "Ref not found" errors | 3 | 1 | 1 | 5 |
| Fresh untargeted snapshot recoveries | 3 | 1 | 1 | 5 |
| Untargeted snapshots taken | 7 | 2 | 1 | 10 |
| Targeted snapshots performed | 13 | 27 | 18 | 58 |
| Finds (locating only; never used as click refs) | 12 | 19 | 9 | 40 |
| Repository reads (Read, Glob, Grep) | 13 | 2 | 2 | 17 |
| Screenshots saved | 3 | 6 | 4 | 13 |
| Screenshot images viewed | 3 | 6 | 3 | 12 |

Notes: the "Single ref-based clicks" total excludes the one double-click and the key presses. T3's 16 clicks = row select 1 + ellipses 2 + New 2 + Target arrows 2 + options 2 + value textboxes 2 + OK 4 (pair, pair, list, Event Handler Parameters) + Save 1. The T1 "Ref not found" total of 3 counts one click (not performed) and two targeted snapshots; T2's and T3's are one each (a toast-element screenshot and a toolbar snapshot). The untargeted snapshot count is the operator's reconstruction from the call list; the persisted-to-file untargeted snapshots are included.

### Worker-written file inventory (T3)

- Written by the worker in T3: `evidence/EXP-126/t3-01-three-pairs-list-before-ok.png`, `t3-02-handler-row-before-save.png`, `t3-03-save-toast.png`, `t3-04-save-state-after.png`; and this record (updated).
- Tool-written (automatic; not read): page snapshot files `evidence/playwright/page-2026-10-22T16-50-51-389Z.yml` through `...16-52-12-439Z.yml` (one per performed action) and the console log `evidence/playwright/console-2026-10-22T16-50-44-287Z.log`.
- Tool results persisted outside the repository (not read beyond previews): untargeted snapshot results taken in T3, if persisted.
- No other repository file was written in T3.

### Cleanup inventory (so far)

- FX_SetNewCartEntry handler group: one row (sequence 0, Set Values) with three property pairs on FX_CustomerPortal (User scope): FX_Item = P(2.FX_Item); FX_Count = V(FX_Count); FX_CustomerID = V(FX_CustomerID). Nothing else created or changed in T3.

### Final state (end of T3)

- Designer: FX_CustomerPortal open and clean (Save disabled); User scope; no dialog, list or menu open; Event Handlers tab selected; the FX_SetNewCartEntry row selected (view state).
- Web Client: not touched in T3 (last read in T1: 5 errors, 2 warnings).

### Findings (T3; observed only)

1. The Properties ellipsis's "Edit Set Property Values" list appends new pairs at the end; the first pair (FX_Item) stayed in position.
2. Each new pair's Target list shows the FX_Orders properties (FX_Count and FX_CustomerID both appear in it, among the other FX_Orders fields); the Collection for Target defaults to "primary collection" and its list was not opened.
3. A plain (non-prefixed) variable expression typed into the pair's Value textbox is stored as typed: `V(FX_Count)`, `V(FX_CustomerID)`.
4. The handler's Response Parameters text now holds all three pairs in the order entered.

### Qualifications

- Same-session UI evidence only; no close/reopen was performed in T3 (the T9 readback covers that).
- The Response Parameters text is clipped in `t3-02`; the full text is taken from the accessibility readback.
- The save state after the Save was read from a fresh accessibility snapshot; `t3-04` is the toolbar capture (not viewed).
- No cross-session or database-level durability is claimed.

### Next step

T4: create the handler group FX_AddToCart with New (Response Type Collection Make Current), set its Parameters to the primary collection (record every collection option and how the primary one is named), OK, record the Response Parameters, one Save. Not run in T3.

## T4: FX_AddToCart row 0, Collection Make Current on the primary collection (one Save)

Scope: FX_CustomerPortal, User scope. Created one handler group `FX_AddToCart` (sequence 0, Response Type Collection Make Current, Parameters = primary collection). No FX_AddToCart row 1 or 2, no change to FX_SetNewCartEntry, no component event changed.

### Start state (observed)

- Sources: AGENTS.md reread in full; the record's Status and task table read (lines 1-30). Tabs listed before any selection: tab 0 = Designer (FX_CustomerPortal, current); tab 1 = portal Web Client. No tab selection was needed; the Web Client was not touched.
- Designer console at T4 start: **2 errors, 0 warnings**. Save: disabled. No dialog or list open. User scope (status line `ScopeType: User`). FX_CustomerPortal the only Form tab.
- Event Handlers before the change (targeted snapshot): FX_CartBtn (0 Set Values SETVARVALUES(FX_Page=3)); FX_HomeBtn (0 Set Values SETVARVALUES(FX_Page=2)); FX_SetNewCartEntry (0 Set Values SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))); FX_SignInBtn (0 Collection Refresh object2; 1 Set Values SETVARVALUES(FX_Page=2)); FX_SignInBtn2 (0 Set Values SETVARVALUES(FX_Page=1)); StdFormPredisplay (0 Set Values SETVARVALUES(FX_Page=1)). **No FX_AddToCart group** (stop rule not triggered).

### Steps and observations

1. Event Handlers grid New (+) clicked once (first grid-toolbar button). Event Handler dialog opened.
2. **Name field was pre-filled with `FX_SetNewCartEntry`** (the previous handler name). This differs from T2, where the field was blank at open (`evidence/EXP-126/t4-01-event-handler-name-before-ok.png` shows the final name only). Name focused by a click; Control+A pressed once; `FX_AddToCart` typed key by key (slow). Verified text: `FX_AddToCart`. OK once.
3. New group **FX_AddToCart** appears at the top of the grid (sorted before FX_CartBtn; existing groups were not reordered), sequence 0, Response Type blank, Disabled false. The five earlier groups and their rows are unchanged (targeted readback). No prompt appeared.
4. Row selected by its Response Type cell. Properties grid Expand (all) clicked once (view state). Response > Type sub-row arrow clicked once: list offered **Collection Make Current** (among the list options, the Collection options were: Collection Copy, Collection Delete, Collection Init with Auto Insert Row, Collection Make Current, Collection Navigate, Collection New, Collection Notes, Collection Notes for Current, Collection Refresh, Collection Refresh Current, Collection Save, Collection Validate). Clicked Collection Make Current once. Neutral row (Description label) clicked once to commit the editor. Readback: Type = **Collection Make Current**.
5. Parameters ellipsis clicked once: **Event Handler Parameters** dialog. Fields: General group (Error Message; Success Message; Only When Current Collection Is = `<all collections>`; Only When Platform Is; Keep; Ignore Failure; Message as Toast?; Disabled), then the section titled **"Edit Collection Action Set Current Collection"** with **Collection** (combobox, Open) and **Navigation Action** (= First, greyed). Buttons OK, Cancel, Help. Screenshot before OK: `evidence/EXP-126/t4-02-parameters-dialog-before-ok.png` (viewed).
6. Collection list opened (Open): options **primary collection** and **secondary collection 2**. Clicked **primary collection** once. Collection = primary collection; Navigation Action left at its default `First`.
7. Parameters dialog OK once (dialog closed). Row read back: FX_AddToCart | 0 | Collection Make Current | false | Response Parameters **`object`**. The summary shows the primary collection as `object`; the existing FX_SignInBtn row shows the secondary collection 2 as `object2`. Screenshot before Save: `evidence/EXP-126/t4-03-addtocart-group-before-save.png` (viewed; Response Type clipped as "Collection Make Cur…", Parameters `object`).
8. **One Designer Save** (toolbar Save enabled; no dialog or list open). Response: toast **"Form [FX_CustomerPortal] and global object(s) were saved."** (`evidence/EXP-126/t4-04-save-toast.png`; viewed). Console 2/0. Save disabled afterwards (find, and toolbar capture `evidence/EXP-126/t4-05-save-state-after.png`; viewed: Save icon greyed).
9. Post-Save targeted read: FX_AddToCart | 0 | Collection Make Current | false | `object`; the other six groups unchanged. Console 2/0.

### Exact texts recorded (T4)

| Item | Exact text observed |
| --- | --- |
| Handler name (pre-filled, then replaced) | `FX_SetNewCartEntry` → `FX_AddToCart` |
| Response Type | `Collection Make Current` |
| Collection options offered (Parameters) | `primary collection`, `secondary collection 2` |
| Primary collection named as | `primary collection` (dialog); stored in the row summary as `object` |
| Secondary collection 2 (for comparison) | `secondary collection 2`; summary `object2` (FX_SignInBtn row) |
| Navigation Action (default, unchanged) | `First` |
| Response Parameters (row, after OK and after Save) | `object` |
| Save toast | `Form [FX_CustomerPortal] and global object(s) were saved.` |

### Screenshots (T4)

| File | What it shows | What it does not prove |
| --- | --- | --- |
| `evidence/EXP-126/t4-01-event-handler-name-before-ok.png` | Event Handler dialog with Name `FX_AddToCart`, OK, Cancel (viewed). | Does not show the pre-filled text (before the edit) or the group after OK. |
| `evidence/EXP-126/t4-02-parameters-dialog-before-ok.png` | Event Handler Parameters before OK: section "Edit Collection Action Set Current Collection", Collection primary collection, Navigation Action First (viewed). | Does not show the saved state. |
| `evidence/EXP-126/t4-03-addtocart-group-before-save.png` | Event Handlers panel before Save: FX_AddToCart group, row 0, Collection Make Cur… (clipped), false, `object` (viewed). | Response Type text clipped; the full text is from the accessibility readback. |
| `evidence/EXP-126/t4-04-save-toast.png` | Save toast: "Save / Form [FX_CustomerPortal] and global object(s) were saved." (viewed). | Does not prove persistence across close/reopen (T9). |
| `evidence/EXP-126/t4-05-save-state-after.png` | Designer toolbar after Save: Save icon greyed (viewed). | Save state from the toolbar capture plus a find showing `disabled`. |

### Designer Save (T4)

- Saves in T4: **1**. Response: toast text above; Save disabled afterwards; no retry.

### Cumulative browser action audit (T1 + T2 + T3 + T4)

| Category | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Tab lists (read-only) | 1 | 1 | 1 | 1 | 4 |
| Tab selections performed | 2 | 0 | 0 | 0 | 2 |
| Single ref-based clicks performed | 11 | 26 | 16 | 13 | 66 |
| Double-clicks (view-only Events label) | 1 | 0 | 0 | 0 | 1 |
| Coordinate clicks | 0 | 0 | 0 | 0 | 0 |
| Arrow-button clicks (list or combo arrows) | 0 | 5 | 2 | 2 | 9 |
| Ellipsis clicks (Parameters, Properties, Value) | 0 | 3 | 2 | 1 | 6 |
| New clicks (handler, pair) | 0 | 2 | 2 | 1 | 5 |
| Expand clicks (group/grid/tree/Properties, view only; single) | 4 | 1 | 0 | 1 | 6 |
| Details tab clicks | 3 | 1 | 0 | 0 | 4 |
| Option (list item) clicks | 0 | 5 | 2 | 2 | 9 |
| Neutral-row clicks (to commit an editor) | 0 | 1 | 0 | 1 | 2 |
| Name-field focus clicks | 0 | 1 | 0 | 1 | 2 |
| Value-textbox clicks | 0 | 0 | 2 | 0 | 2 |
| Row selects (Response Type cell) | 0 | 1 | 1 | 1 | 3 |
| Component selects (Type cell) | 3 | 0 | 0 | 0 | 3 |
| Banner dismissals | 1 | 0 | 0 | 0 | 1 |
| Save clicks (Designer) | 0 | 1 | 1 | 1 | 3 |
| Dialog OK clicks | 0 | 5 | 4 | 2 | 11 |
| Dialog Cancel clicks | 0 | 0 | 0 | 0 | 0 |
| Dialogs opened (incl. nested) | 0 | 5 | 4 | 2 | 11 |
| Lists opened | 0 | 5 | 2 | 2 | 9 |
| Prompts seen | 0 | 0 | 0 | 0 | 0 |
| Key presses | 0 | 1 (Control+A) | 2 (Tab) | 1 (Control+A) | 4 |
| Typed entries (text fields, key by key) | 0 | 1 (Name) | 2 (Values) | 1 (Name) | 4 |
| Corrections | 0 | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 | 1 | 3 |
| Form closes or reopens | 0 | 0 | 0 | 0 | 0 |
| Global, unload, Regenerate, Delete, Select Form OK clicks | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 | 0 |
| Session-expiry or sign-in pages | 0 | 0 | 0 | 0 | 0 |
| Console rises | 0 | 0 | 0 | 0 | 0 |
| "Ref not found" errors | 3 | 1 | 1 | 0 | 5 |
| Fresh untargeted snapshot recoveries | 3 | 1 | 1 | 0 | 5 |
| Untargeted snapshots taken | 7 | 2 | 1 | 0 | 10 |
| Targeted snapshots performed | 13 | 27 | 18 | 16 | 74 |
| Finds (locating only; never used as click refs) | 12 | 19 | 9 | 9 | 49 |
| Repository reads (Read, Glob, Grep) | 13 | 2 | 2 | 2 | 19 |
| Screenshots saved | 3 | 6 | 4 | 5 | 18 |
| Screenshot images viewed | 3 | 6 | 3 | 5 | 17 |

Notes: T4's 13 clicks = New 1, name focus 1, OK 2 (Event Handler; Parameters), row select 1, Expand 1, Type arrow 1, Type option 1, neutral row 1, Parameters ellipsis 1, Collection arrow 1, Collection option 1, Save 1. T4 had no "Ref not found" and no untargeted snapshot. Coordinate pointer clicks: none. Finds counted separately from clicks.

### Worker-written file inventory (T4)

- Written by the worker in T4: `evidence/EXP-126/t4-01-event-handler-name-before-ok.png`, `t4-02-parameters-dialog-before-ok.png`, `t4-03-addtocart-group-before-save.png`, `t4-04-save-toast.png`, `t4-05-save-state-after.png`; and this record (updated).
- Tool-written (automatic; not read): page snapshot files `evidence/playwright/page-2026-10-22T16-54-49-239Z.yml` through `...16-55-53-769Z.yml` (one per performed action) and the console log `evidence/playwright/console-2026-10-22T16-54-42-147Z.log`.
- No other repository file was written in T4.

### Cleanup inventory (so far)

- FX_SetNewCartEntry handler group: one row (sequence 0, Set Values) with three property pairs (FX_Item = P(2.FX_Item); FX_Count = V(FX_Count); FX_CustomerID = V(FX_CustomerID)).
- FX_AddToCart handler group: one row so far (sequence 0, Collection Make Current, Parameters primary collection, summary `object`) on FX_CustomerPortal (User scope). Rows 1 and 2 not yet created.

### Final state (end of T4)

- Designer: FX_CustomerPortal open and clean (Save disabled); User scope; no dialog, list or menu open. Event Handlers tab selected; the FX_AddToCart row selected (view state).
- Event Handlers: seven groups now (FX_AddToCart, FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn, FX_SignInBtn2, StdFormPredisplay); FX_AddToCart has one row (0, Collection Make Current, `object`).
- Web Client: not touched in T4 (last read in T1: 5 errors, 2 warnings).

### Findings (T4; observed only)

1. The Event Handler dialog's Name was **pre-filled** with the previous handler name in T4 (FX_SetNewCartEntry), but **blank** in T2. The pre-fill is not consistent across tasks; the clear-and-type routine handled both.
2. A new group sorts into the grid's alphabetical order (FX_AddToCart appears before FX_CartBtn); existing groups were not reordered.
3. The Response Type list offers twelve Collection options (Copy, Delete, Init with Auto Insert Row, Make Current, Navigate, New, Notes, Notes for Current, Refresh, Refresh Current, Save, Validate) among about forty entries.
4. The Collection action dialog's section is titled "Edit Collection Action Set Current Collection"; its Collection list names the collections as "primary collection" and "secondary collection 2" (the primary collection is not named FX_Orders in the list).
5. The row summary stores the primary collection as `object` and the secondary collection 2 as `object2` (FX_SignInBtn).
6. Navigation Action defaults to `First` (greyed in the dialog) and was left unchanged.

### Qualifications

- Same-session UI evidence only; no close/reopen was performed in T4 (the T9 readback covers that).
- The Response Type text is clipped in `t4-03`; the full value comes from the accessibility readback ("Collection Make Current").
- The Collection options beyond the two named were not checked against the list of Collection action types (the Response Type list was read, not the Collection dropdown of the dialog).

### Next step

T5 was run next (see the T5 section below).

## T5: FX_AddToCart row 1, Collection New on the primary collection (one Save)

Scope: FX_CustomerPortal, User scope. Created one new row in the existing `FX_AddToCart` group (sequence 1, Response Type Collection New, Parameters = primary collection). No row 2 created, no change to FX_SetNewCartEntry, row 0 or any other handler, no component event changed.

### Start state (observed)

- Sources: AGENTS.md reread (Safety and Experiment-rules sections); the record's Status and task table read (lines 1-30). Tabs listed before any selection: tab 0 = Designer (FX_CustomerPortal, current); tab 1 = portal Web Client. No tab selection was needed; the Web Client was not touched.
- Designer console at T5 start: **2 errors, 0 warnings**. Save: disabled. No dialog or list open. User scope (status line `ScopeType: User`). FX_CustomerPortal the only Form tab.
- Event Handlers before the change (targeted snapshot): FX_AddToCart (0 Collection Make Current, Response Parameters `object`); FX_CartBtn (0 Set Values SETVARVALUES(FX_Page=3)); FX_HomeBtn (0 Set Values SETVARVALUES(FX_Page=2)); FX_SetNewCartEntry (0 Set Values SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))); FX_SignInBtn (0 Collection Refresh object2; 1 Set Values SETVARVALUES(FX_Page=2)); FX_SignInBtn2 (0 Set Values SETVARVALUES(FX_Page=1)); StdFormPredisplay (0 Set Values SETVARVALUES(FX_Page=1)). Matches the T4 end state; the stop rule was not triggered.

### Steps and observations

1. Event Handlers grid New (+) clicked once. Event Handler dialog opened with the Name **pre-filled with `FX_AddToCart`** (the previous name).
2. Name field clicked once; Control+A pressed once; `FX_AddToCart` typed key by key (slow). Typing opened the Name field's **autocomplete suggestion list** (one entry, `FX_AddToCart`), which the brief's rules forbid answering with Enter or Tab. I closed it by clicking the matching suggestion option once (same value; no other option was available). The list closed; Name read `FX_AddToCart`. Screenshot before OK: `evidence/EXP-126/t5-01-event-handler-name-before-ok.png` (viewed: Name FX_AddToCart, OK, Cancel). OK clicked once.
3. Result: no prompt appeared. A **new sequence 1 row was appended** inside the existing FX_AddToCart group. Row 0 (Collection Make Current, `object`) and every other group are unchanged (targeted readback). Not in another group; no reordering.
4. Row 1 selected by its Response Type cell (clicked once). Properties grid Expand (all) clicked once (view state). Response > Type arrow clicked once: list offered the Collection options (among the list entries: Collection Copy, Collection Delete, Collection Init with Auto Insert Row, Collection Make Current, Collection Navigate, **Collection New**, Collection Notes, Collection Notes for Current, Collection Refresh, Collection Refresh Current, Collection Save, Collection Validate). Clicked **Collection New** once. Neutral row (Description label) clicked once to commit. Readback: Type = **Collection New** on sequence 1.
5. Parameters ellipsis clicked once: **Event Handler Parameters** dialog. General group as in T4 (Error Message; Success Message; Only When Current Collection Is = `<all collections>`; Only When Platform Is; Keep; Ignore Failure; Message as Toast?; Disabled). Section title this time: **"Edit Collection Action New"** (T4 read "Edit Collection Action Set Current Collection"). Fields: **Collection** (on open: **blank**), Navigation Action (= First, greyed). Buttons OK, Cancel, Help.
6. Collection list opened (arrow, once): options **primary collection** and **secondary collection 2**. Clicked **primary collection** once. Collection = primary collection; Navigation Action unchanged (First). Screenshot before OK: `evidence/EXP-126/t5-02-parameters-dialog-before-ok.png` (viewed).
7. Parameters OK clicked once (dialog closed). Row 1 readback: **Collection New | false | Response Parameters `object`**. Row 0 unchanged (`object`). Group before Save: `evidence/EXP-126/t5-03-addtocart-group-before-save.png` (viewed: rows 0 Collection Make Cur…/object and 1 Collection New/object; FX_CartBtn below).
8. **One Designer Save** (toolbar Save enabled; no dialog or list open; console 2/0). Response: toast **"Form [FX_CustomerPortal] and global object(s) were saved."** (`evidence/EXP-126/t5-04-save-toast.png`; viewed). Save disabled afterwards (find; toolbar capture `evidence/EXP-126/t5-05-save-state-after.png`; viewed: Save icon greyed). Console 2/0 after every action.

### Exact texts recorded (T5)

| Item | Exact text observed |
| --- | --- |
| Handler name (pre-filled, then typed) | `FX_AddToCart` (pre-filled value `FX_AddToCart`; typed value `FX_AddToCart`) |
| Row 1 Response Type | `Collection New` |
| Collection options offered (Parameters) | `primary collection`, `secondary collection 2` |
| Collection chosen | `primary collection` (blank when the dialog opened) |
| Navigation Action (default, unchanged) | `First` |
| Parameters section title | `Edit Collection Action New` |
| Response Parameters (row 1, after OK and after Save) | `object` |
| Row 0 Response Parameters (unchanged) | `object` |
| Save toast | `Form [FX_CustomerPortal] and global object(s) were saved.` |

### Screenshots (T5)

| File | What it shows | What it does not prove |
| --- | --- | --- |
| `evidence/EXP-126/t5-01-event-handler-name-before-ok.png` | Event Handler dialog, Name `FX_AddToCart`, OK, Cancel (viewed). | Does not show the suggestion list (closed before capture) or the pre-filled text. |
| `evidence/EXP-126/t5-02-parameters-dialog-before-ok.png` | Event Handler Parameters before OK: section "Edit Collection Action New", Collection primary collection, Navigation Action First (viewed). | Does not show the saved state. |
| `evidence/EXP-126/t5-03-addtocart-group-before-save.png` | Event Handlers panel before Save: FX_AddToCart rows 0 (Collection Make Cur…, `object`) and 1 (Collection New, `object`) (viewed). | The Response Type text of row 0 is clipped; full text from the readback. |
| `evidence/EXP-126/t5-04-save-toast.png` | Save toast "Save / Form [FX_CustomerPortal] and global object(s) were saved." (viewed). | Does not prove persistence across close/reopen (T9). |
| `evidence/EXP-126/t5-05-save-state-after.png` | Designer toolbar after Save: Save icon greyed (viewed). | Save state rests on the toolbar capture plus a find showing `disabled`. |

### Designer Save (T5)

- Saves in T5: **1**. Response: toast text above; Save disabled afterwards; no retry.

### Cumulative browser action audit (T1 to T5)

| Category | T5 | Cumulative (T1 to T5) |
| --- | --- | --- |
| Tab lists (read-only) | 1 | 5 |
| Tab selections performed | 0 | 2 |
| Single ref-based clicks performed | 14 | 80 |
| Double-clicks (view-only Events label) | 0 | 1 |
| Coordinate clicks | 0 | 0 |
| Arrow-button clicks (list or combo arrows) | 2 | 11 |
| Ellipsis clicks (Parameters, Properties, Value) | 1 | 7 |
| New clicks (handler, pair) | 1 | 6 |
| Expand clicks (group/grid/tree/Properties, view only; single) | 1 | 7 |
| Details tab clicks | 0 | 4 |
| Option (list item) clicks | 3 | 12 |
| Neutral-row clicks (to commit an editor) | 1 | 3 |
| Name-field focus clicks | 1 | 3 |
| Value-textbox clicks | 0 | 2 |
| Row selects (Response Type cell) | 1 | 4 |
| Component selects (Type cell) | 0 | 3 |
| Banner dismissals | 0 | 1 |
| Save clicks (Designer) | 1 | 4 |
| Dialog OK clicks | 2 | 13 |
| Dialog Cancel clicks | 0 | 0 |
| Dialogs opened (incl. nested) | 2 | 13 |
| Lists opened by the worker | 2 | 11 |
| Autocomplete suggestion list opened by typing (not by a click) | 1 | 1 |
| Prompts seen | 0 | 0 |
| Key presses | 1 (Control+A) | 5 |
| Typed entries (text fields, key by key) | 1 (Name) | 5 |
| Corrections | 0 | 0 |
| Designer Saves | 1 | 4 |
| Form closes or reopens | 0 | 0 |
| Global, unload, Regenerate, Delete, Select Form OK clicks | 0 | 0 |
| Re-logins | 0 | 0 |
| Server-event errors | 0 | 0 |
| Session-expiry or sign-in pages | 0 | 0 |
| Console rises | 0 | 0 |
| "Ref not found" errors | 0 | 5 |
| Fresh untargeted snapshot recoveries | 0 | 5 |
| Untargeted snapshots taken | 0 | 10 |
| Targeted snapshots performed | 15 | 89 |
| Finds (locating only; never used as click refs) | 9 | 58 |
| Repository reads (Read, Glob, Grep) | 2 | 21 |
| Screenshots saved | 5 | 23 |
| Screenshot images viewed | 5 | 22 |

Notes: T5's 14 clicks = New 1, Name focus 1, suggestion option 1, Event Handler OK 1, row select 1, Properties Expand 1, Type arrow 1, Type option 1, neutral row 1, Parameters ellipsis 1, Collection arrow 1, Collection option 1, Parameters OK 1, Save 1. The autocomplete list was not opened by a worker click. The Event Handler dialog's Name pre-fill and the suggestion list are both recorded as observed behaviour. Browser-tool "Ref not found" count: none in T5. No untargeted snapshot was taken in T5.

### Worker-written file inventory (T5)

- Written by the worker in T5: `evidence/EXP-126/t5-01-event-handler-name-before-ok.png`, `t5-02-parameters-dialog-before-ok.png`, `t5-03-addtocart-group-before-save.png`, `t5-04-save-toast.png`, `t5-05-save-state-after.png`; and this record (updated).
- Tool-written (automatic; not read): page snapshot files `evidence/playwright/page-2026-10-22T16-58-10-644Z.yml` through `...16-59-10-577Z.yml` (one per performed action) and the console log `evidence/playwright/console-2026-10-22T16-58-04-617Z.log`.
- Documentation-tool errors in T5: none. (The T4 record cycle had one no-op Edit that changed nothing; it was rejected by the tool and is not a T5 error.)
- No other repository file was written in T5.

### Cleanup inventory (so far)

- FX_SetNewCartEntry handler group: one row (sequence 0, Set Values) with three property pairs (FX_Item = P(2.FX_Item); FX_Count = V(FX_Count); FX_CustomerID = V(FX_CustomerID)).
- FX_AddToCart handler group: two rows (sequence 0 Collection Make Current, `object`; sequence 1 Collection New, `object`) on FX_CustomerPortal (User scope). Row 2 (Generate Event) not yet created.

### Final state (end of T5)

- Designer: FX_CustomerPortal open and clean (Save disabled); User scope; no dialog, list or menu open. Event Handlers tab selected; the FX_AddToCart row 1 selected (view state).
- Event Handlers: seven groups (FX_AddToCart, FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn, FX_SignInBtn2, StdFormPredisplay); FX_AddToCart has two rows.
- Web Client: not touched in T5 (last read in T1: 5 errors, 2 warnings).

### Findings (T5; observed only)

1. The Event Handler dialog's Name was pre-filled with the previous name (`FX_AddToCart`), as in T4 and unlike T2.
2. Typing into the Name combobox opens an autocomplete suggestion list. Answering it without Enter or Tab (by clicking the matching option) closed it with the same value.
3. A second row appended to a group keeps the group and takes the next sequence (1); row 0 is unchanged, with no prompt.
4. The Collection field of a new collection action is blank when the Parameters dialog opens; it must be chosen (primary collection, or secondary collection 2).
5. The Parameters section title follows the action type: "Edit Collection Action New" for Collection New (T4's Collection Make Current read "Edit Collection Action Set Current Collection").
6. The summary for the primary collection is `object` for both rows.

### Qualifications

- Same-session UI evidence only; no close/reopen was performed in T5 (the T9 readback covers that).
- The save toast and the greyed Save icon are read from one image each and the accessibility state; no cross-session durability is claimed.
- The suggestion list was dismissed by clicking its entry; the brief's preferred route (no list interaction) was not available because the list opened automatically when typing.

### Next step

T6: create the third FX_AddToCart row with New (name FX_AddToCart; expected sequence 2), Response Type Generate Event, Parameters: event FX_SetNewCartEntry (Post Event Asynchronously checked; record its exact label), OK, one Save, and verify the three rows in order 0 Make Current, 1 New, 2 Generate Event. Not run in T5.

## T6: FX_AddToCart row 2, Generate event FX_SetNewCartEntry with Post Event Asynchronously (one Save)

Scope: FX_CustomerPortal, User scope. Created one new row in the existing `FX_AddToCart` group (sequence 2, Response Type Generate event, Parameters = event FX_SetNewCartEntry with Post Event Asynchronously checked). No further handler row, no change to FX_SetNewCartEntry or rows 0 and 1, no component event changed.

### Start state (observed)

- Sources: AGENTS.md reread (opening sections, Safety, Experiment rules); the record's Status and task table read (lines 1-30). Tabs listed before any selection: tab 0 = Designer (FX_CustomerPortal, current); tab 1 = portal Web Client. No tab selection was needed; the Web Client was not touched.
- Designer console at T6 start: **2 errors, 0 warnings**. Save: disabled. No dialog or list open. User scope (status line `ScopeType: User`). FX_CustomerPortal the only Form tab.
- Event Handlers before the change (targeted snapshot): FX_AddToCart (0 Collection Make Current `object`; 1 Collection New `object`); FX_CartBtn (0 Set Values SETVARVALUES(FX_Page=3)); FX_HomeBtn (0 Set Values SETVARVALUES(FX_Page=2)); FX_SetNewCartEntry (0 Set Values SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))); FX_SignInBtn (0 Collection Refresh object2; 1 Set Values SETVARVALUES(FX_Page=2)); FX_SignInBtn2 (0 Set Values SETVARVALUES(FX_Page=1)); StdFormPredisplay (0 Set Values SETVARVALUES(FX_Page=1)). Matches the T5 end state; the stop rule was not triggered.

### Steps and observations

1. Event Handlers grid New (+) clicked once. Event Handler dialog opened with the Name **pre-filled `FX_AddToCart`**.
2. Name field clicked once; Control+A once; `FX_AddToCart` typed key by key. The **autocomplete suggestion list** opened automatically (one entry, `FX_AddToCart`). I closed it by clicking the matching option once (same value; no Enter, Tab or arrow key used). Name read `FX_AddToCart`. Screenshot before OK: `evidence/EXP-126/t6-01-event-handler-name-before-ok.png` (viewed). OK clicked once.
3. Result: no prompt. A **new sequence 2 row was appended** inside the existing FX_AddToCart group. Rows 0 and 1 and every other group are unchanged (targeted readback).
4. Row 2 selected by its Response Type cell (clicked once). Properties Expand (all) clicked once (view state). Response > Type arrow clicked once: list offered two near options, "Generate Application Event" and **"Generate event"**. The brief names the tutorial's Generate Event; the exact option "Generate event" was clicked once (not "Generate Application Event"). Neutral row (Description label) clicked once to commit. Readback: Type = **Generate event**.
5. Parameters ellipsis clicked once: **Event Handler Parameters** dialog. General group as in T5 (Error Message; Success Message; Only When Current Collection Is = `<all collections>`; Only When Platform Is; Keep; Ignore Failure; Message as Toast?; Disabled; all at defaults). Section **"Edit Event To Generate"** with **Event** (combobox, blank on open, with Open) and **Post Event Asynchronously** (checkbox, unchecked on open). Buttons OK, Cancel, Help.
6. Event list opened (Open, once): the list held the handler events including **FX_SetNewCartEntry** (among FX_AddToCart, FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn, FX_SignInBtn2, and the Std events). Clicked **FX_SetNewCartEntry** once. Event reads FX_SetNewCartEntry.
7. **Checkbox issue (observed):** a click on the checkbox input (`e1375`) timed out: "element ... `<span displayEl>` intercepts pointer events", repeated for 5 seconds (the tool's retry loop). This was not a stale ref; the control was visible and enabled, but a sibling span covered the input. Per the brief, I took **one fresh untargeted snapshot** (this task's first untargeted snapshot; it confirmed the dialog open, Event FX_SetNewCartEntry, checkbox unchecked, no list open). I then clicked the **checkbox's label text** ("Post Event Asynchronously", ref `e1377`) once; that click succeeded. Verified: the checkbox reads `[checked]`. No second click on the input. Screenshot before OK: `evidence/EXP-126/t6-02-parameters-dialog-before-ok.png` (viewed: Edit Event To Generate; Event FX_SetNewCartEntry; Post Event Asynchronously checked; all other fields default).
8. Parameters OK clicked once (dialog closed). Console 2/0.
9. Row 2 readback: **Generate event | false | Response Parameters `FX_SetNewCartEntry( POST() )`**. Rows 0 and 1 unchanged (`object`, `object`). Group before Save: `evidence/EXP-126/t6-03-addtocart-group-before-save.png` (viewed: three rows in order; row 2 Response Parameters `FX_SetNewCartEntry( POST() )`).
10. **One Designer Save** (toolbar Save enabled; no dialog or list open; console 2/0). Response: toast **"Form [FX_CustomerPortal] and global object(s) were saved."** (`evidence/EXP-126/t6-04-save-toast.png`; viewed). Save disabled afterwards (find; toolbar capture `evidence/EXP-126/t6-05-save-state-after.png`). Console 2/0.

### Exact texts recorded (T6)

| Item | Exact text observed |
| --- | --- |
| Handler name (pre-filled, then typed) | `FX_AddToCart` |
| Row 2 Response Type | `Generate event` (the list also offers `Generate Application Event`; not chosen) |
| Parameters section title | `Edit Event To Generate` |
| Event | `FX_SetNewCartEntry` |
| Asynchronous option label | `Post Event Asynchronously` (checkbox; checked state confirmed `[checked]` before OK) |
| Other Parameters fields | left at defaults (Error Message and Success Message blank; Only When Current Collection Is `<all collections>`; Only When Platform Is blank; Keep blank; Ignore Failure, Message as Toast?, Disabled unchecked) |
| Row 2 Response Parameters (after OK and after Save) | `FX_SetNewCartEntry( POST() )` |
| Row 0 / row 1 Response Parameters (unchanged) | `object` / `object` |
| Save toast | `Form [FX_CustomerPortal] and global object(s) were saved.` |

### Screenshots (T6)

| File | What it shows | What it does not prove |
| --- | --- | --- |
| `evidence/EXP-126/t6-01-event-handler-name-before-ok.png` | Event Handler dialog, Name `FX_AddToCart`, OK, Cancel (viewed). | Does not show the autocomplete list (closed before capture). |
| `evidence/EXP-126/t6-02-parameters-dialog-before-ok.png` | Event Handler Parameters before OK: section "Edit Event To Generate", Event FX_SetNewCartEntry, Post Event Asynchronously checked (viewed). | Does not show the saved state. |
| `evidence/EXP-126/t6-03-addtocart-group-before-save.png` | Event Handlers panel before Save: FX_AddToCart rows 0 (Collection Make Cur…, object), 1 (Collection New, object), 2 (Generate event, FX_SetNewCartEntry( POST() )) (viewed). | Row 0 Response Type clipped; full text from readback. |
| `evidence/EXP-126/t6-04-save-toast.png` | Save toast "Save / Form [FX_CustomerPortal] and global object(s) were saved." (viewed). | Does not prove persistence across close/reopen (T9). |
| `evidence/EXP-126/t6-05-save-state-after.png` | Designer toolbar after Save (Save state; not viewed by the worker in T6). | Save state rests on the accessibility snapshot showing `disabled`. |

### Designer Save (T6)

- Saves in T6: **1**. Response: toast text above; Save disabled afterwards; no retry.

### Cumulative browser action audit (T1 to T6)

| Category | T6 | Cumulative (T1 to T6) |
| --- | --- | --- |
| Tab lists (read-only) | 1 | 6 |
| Tab selections performed | 0 | 2 |
| Single ref-based clicks performed (completed) | 15 | 95 |
| Clicks that timed out (not performed; "intercepts pointer events") | 1 | 1 |
| Double-clicks (view-only Events label) | 0 | 1 |
| Coordinate clicks | 0 | 0 |
| Arrow-button clicks (list or combo arrows) | 3 | 14 |
| Ellipsis clicks (Parameters, Properties, Value) | 1 | 8 |
| New clicks (handler, pair) | 1 | 7 |
| Expand clicks (group/grid/tree/Properties, view only; single) | 1 | 8 |
| Details tab clicks | 0 | 4 |
| Option (list item) clicks | 3 | 15 |
| Label-text clicks (checkbox label, after the input click timed out) | 1 | 1 |
| Neutral-row clicks (to commit an editor) | 1 | 4 |
| Name-field focus clicks | 1 | 4 |
| Value-textbox clicks | 0 | 2 |
| Row selects (Response Type cell) | 1 | 5 |
| Component selects (Type cell) | 0 | 3 |
| Banner dismissals | 0 | 1 |
| Save clicks (Designer) | 1 | 5 |
| Dialog OK clicks | 2 | 15 |
| Dialog Cancel clicks | 0 | 0 |
| Dialogs opened (incl. nested) | 2 | 15 |
| Lists opened by the worker | 3 | 14 |
| Autocomplete suggestion lists opened by typing (not by a click) | 1 | 2 |
| Prompts seen | 0 | 0 |
| Key presses | 1 (Control+A) | 6 |
| Typed entries (text fields, key by key) | 1 (Name) | 6 |
| Corrections | 0 | 0 |
| Designer Saves | 1 | 5 |
| Form closes or reopens | 0 | 0 |
| Global, unload, Regenerate, Delete, Select Form OK clicks | 0 | 0 |
| Re-logins | 0 | 0 |
| Server-event errors | 0 | 0 |
| Session-expiry or sign-in pages | 0 | 0 |
| Console rises | 0 | 0 |
| "Ref not found" errors | 0 | 5 |
| Fresh untargeted snapshot recoveries (allowance) | 0 | 5 |
| Untargeted snapshots taken (includes one T6 inspection after the intercepted click) | 1 | 11 |
| Targeted snapshots performed | 18 | 107 |
| Finds (locating only; never used as click refs) | 10 | 68 |
| Repository reads (Read, Glob, Grep) | 2 | 23 |
| Screenshots saved | 6 | 29 |
| Screenshot images viewed | 4 | 26 |

Notes: T6's 15 completed clicks = New 1, Name focus 1, autocomplete option 1, Event Handler OK 1, row select 1, Properties Expand 1, Type arrow 1, Type option 1, neutral row 1, Parameters ellipsis 1, Event list arrow 1, Event option 1, checkbox label 1, Parameters OK 1, Save 1. One further click (the checkbox input) timed out and was not performed; it is counted under "timed out" and not in the completed total. The autocomplete list was opened by typing, not by a click. Coordinate pointer clicks: none. The browser-tool "Ref not found" total stays at 5 (none in T6).

### Worker-written file inventory (T6)

- Written by the worker in T6: `evidence/EXP-126/t6-01-event-handler-name-before-ok.png`, `t6-02-parameters-dialog-before-ok.png`, `t6-03-addtocart-group-before-save.png`, `t6-04-save-toast.png`, `t6-05-save-state-after.png`; and this record (updated).
- Tool-written (automatic; not read): page snapshot files `evidence/playwright/page-2026-10-22T17-01-28…` range `…17-01-34-472Z.yml` through `…17-02-44-687Z.yml` (one per performed action, including the timed-out click's snapshot entry) and the console log `evidence/playwright/console-2026-10-22T17-01-28-218Z.log`.
- Documentation-tool errors in T6: none.
- No other repository file was written in T6.

### Cleanup inventory (so far)

- FX_SetNewCartEntry handler group: one row (sequence 0, Set Values) with three property pairs (FX_Item = P(2.FX_Item); FX_Count = V(FX_Count); FX_CustomerID = V(FX_CustomerID)).
- FX_AddToCart handler group: three rows (sequence 0 Collection Make Current, `object`; sequence 1 Collection New, `object`; sequence 2 Generate event, `FX_SetNewCartEntry( POST() )`) on FX_CustomerPortal (User scope).
- Event-list entries (drag and drop): none yet (T7 and T8 not run).

### Final state (end of T6)

- Designer: FX_CustomerPortal open and clean (Save disabled); User scope; no dialog, list or menu open. Event Handlers tab selected; the FX_AddToCart row 2 selected (view state).
- Event Handlers: seven groups (FX_AddToCart, FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn, FX_SignInBtn2, StdFormPredisplay); FX_AddToCart has three rows in order 0 Make Current, 1 New, 2 Generate event.
- Web Client: not touched in T6 (last read in T1: 5 errors, 2 warnings).

### Findings (T6; observed only)

1. The Response > Type list offers both "Generate event" and "Generate Application Event"; the tutorial's Generate Event corresponds to "Generate event" (the option chosen; the other was not selected).
2. The Event to generate list holds every handler in the form (FX_AddToCart, FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn, FX_SignInBtn2) followed by the Std events (about 150 entries).
3. The Post Event Asynchronously checkbox's input element is covered by a sibling span (displayEl); clicking its label text toggled it. The toggled state is reflected in the accessible name `[checked]`.
4. The Response Parameters summary for an asynchronous generate-event row reads `FX_SetNewCartEntry( POST() )`, which is how the Designer summarises the asynchronous flag (the non-asynchronous summary was not observed; no inference beyond this is drawn).
5. The Name field's autocomplete list (second consecutive task) again opened on typing and was closed by clicking the matching entry.

### Qualifications

- Same-session UI evidence only; no close/reopen performed in T6 (the T9 readback covers that).
- The checkbox was set by a label click after the input click timed out; the accessibility state `[checked]` and the image `t6-02` are the evidence of the setting.
- The Save state after the Save is from the accessibility snapshot (`disabled`) and the toolbar capture `t6-05` (not viewed).
- The meaning of `POST()` in the summary is inferred from the Post Event Asynchronously checkbox state; it is recorded as observed text, not as a verified flag encoding.

### Next step

T7: GridItems: select GridItems by its Components Type cell (Properties header "GridItems (Grid)"), open the Drag From Events ellipsis once, screenshot the dialog, click FX_AddToCart in the event list, click Add once, verify FX_AddToCart is listed as added, OK, then one Save. Not run in T6.

## T7: GridItems Drag From Events = FX_AddToCart (one Save; complete 2026-10-23)

Header and instruction mismatch: the task header says `task=T9`; the bounded instruction says "Execute EXP-126 T7 only" and to stop at the T7 boundary. I followed the bounded instruction (T7) and did not start T8 or T9. Reported to the operator.

Context: an earlier T7 attempt (see the T7 attempt note below) stopped before any mutation because the portal tab showed "Logout Successful". The operator then signed in manually; this run re-verified the Designer before acting.

### Gate (read-only, this run)

- Tabs listed before any selection: tab 0 = Designer (FX_CustomerPortal, `mode=designer`, current); tab 1 = portal "Mongoose". No tab selection was needed.
- Designer snapshot (User scope, FX_CustomerPortal tab selected): status bar `[ ScopeType: User / ScopeName: <signed-in user> ]`; Save disabled; Regenerate Form disabled; no dialog, list or menu open; console **2 errors, 0 warnings**. Event Handlers and Variables were read back as expected (rows and variables as left by T6). Screenshot: none for this gate.
- Components tree expanded view-only; GridItems selected by its Components row Type cell: Properties header `GridItems (Grid)`, Type `Grid`.
- Events group expanded by a label double-click (view only). Baseline: Drag From Events `0 event(s)`, Drop On Events `0 event(s)`. Screenshot `t7-01-griditems-events-before.png`.

### Action

1. Drag From Events ellipsis clicked once: dialog "Edit Drag-From Events" opened; added list empty; Add and Delete disabled. Screenshot `t7-02-drag-from-dialog-open.png`.
2. "Event to Add" Open arrow clicked once (list opened); option `FX_AddToCart` clicked once (field reads FX_AddToCart). Screenshot `t7-03-drag-from-dialog-before-add.png`.
3. Add clicked once: FX_AddToCart listed as added (the only entry). Screenshot `t7-04-drag-from-dialog-before-ok.png`.
4. OK clicked once: dialog closed.
5. Readback after OK: GridItems Drag From Events `1 event(s)`; Drop On Events `0 event(s)` (unchanged).
6. Events group before Save: screenshot `t7-05-griditems-events-before-save.png` (GridItems Properties panel: Name GridItems, Type Grid, Drag From Events `1 event(s)`, Drop On Events `0 event(s)`; Save not yet clicked).
7. One Designer Save (toolbar Save clicked once). Response: toast text `Form [FX_CustomerPortal] and global object(s) were saved.` (read via find and snapshot; the toast had faded from the viewport frame). Save disabled afterwards; console still 2 errors / 0 warnings. Screenshot `t7-06-save-state-after.png` (viewport: Save icon greyed; Drag From Events `1 event(s)`, Drop On Events `0 event(s)`; status bar User scope).

### What the evidence shows and does not show

- Proves (observed in this session): the dialog listed FX_AddToCart as added before OK; the Drag From Events summary changed from `0 event(s)` to `1 event(s)`; one Save ran with the success toast and Save disabled afterwards; the console count did not rise.
- Does not prove: the grid cell shows only the count, so the name FX_AddToCart is evidenced by the dialog screenshots (t7-03, t7-04), not by the grid cell. Persistence across a Designer close and reopen is not established here; T9 does that readback.
- Drop On Events of GridItems and ButtonAddToCart's events were not touched in T7.

### Decision

- Stop at the T7 boundary. T8 (ButtonAddToCart Drop On Events = FX_AddToCart, one Save) is the next permitted task. T9 (close/reopen readback and final audit) follows T8.

### T7 attempt note (earlier, blocked before any mutation)

An earlier T7 attempt stopped because the portal tab read "Logout Successful" (`.../session/slo/signoutsuccess`); no GridItems or ButtonAddToCart action was taken and the Designer was not mutated. The operator signed in manually (EXP-107); the standing session-expiry procedure was not run by the worker.

## T7 cumulative audit additions (this run)

| Category | This run (T7) | Cumulative (T1 to T7) |
| --- | --- | --- |
| Tab lists (read-only) | 1 | 9 (8 before this run; the earlier blocked attempt's 2 lists are in the 8) |
| Tab selections performed | 0 | 2 (unchanged) |
| Completed ref-based clicks | 7 (GridItems Type cell, Drag From ellipsis, Event to Add arrow, FX_AddToCart option, Add, OK, Save) | 102 (95 before this run) |
| Double-clicks | 1 (Events label, view-only expansion) | 1 |
| Component-tree expansion clicks | not individually counted in the run notes (view only; qualification) | not counted |
| Clicks timed out (not performed) | 0 | 1 |
| Coordinate clicks | 0 recorded | 0 |
| Ellipsis / arrow / Add / OK / Save clicks | 1 / 1 / 1 / 1 / 1 | previous subtotals unchanged + these |
| Dialogs opened / closed by OK / by Cancel | 1 / 1 / 0 (Edit Drag-From Events) | 16 / 15 / 0 |
| Lists opened / closed by option click | 1 / 1 (Event to Add) | 15 / 15 |
| Prompts seen | 0 | 0 |
| Designer Saves | 1 (success toast) | 6 (T2 to T7; one per task) |
| Form closes or reopens | 0 | 0 |
| Re-logins by the worker | 0 (the operator signed in before this run) | 0 |
| Server-event errors | 0 | 0 |
| Session-signed-out indications | 0 in this run (the earlier attempt's "Logout Successful" is recorded in the T7 attempt note) | 1 |
| Console rises (Designer) | 0 (2 errors / 0 warnings at every reading) | 0 |
| "Ref not found" | 0 recorded in this run | 5 |
| Untargeted snapshots | 3 this turn (one full, persisted as a 56 KB file under the tool results; two at depth 4, before and after Save); earlier in this run not itemized | 14 counted (11 before this turn + 3) |
| Targeted snapshots | 0 this turn | 108 |
| Finds | 1 this turn ("were saved") | 71 counted (70 before + 1); earlier in this run not itemized |
| Repository reads | record sections and screenshots (no AGENTS.md reread recorded in this turn) | 25 before this turn |
| Screenshots saved | 6 (t7-01 to t7-06) | 34 files under evidence/EXP-126 (t1: 3, t2: 6, t3: 4, t4: 5, t5: 5, t6: 5, t7: 6) |

Notes:
- The earlier audit row "Screenshots saved 29" did not match the file list; the correct total from the file list is 34 (corrected here).
- Repository reads: the brief asked for an AGENTS.md reread before browser interaction; a full reread was not verified in this turn. Qualification carried to the final audit.
- Screenshot t7-05 used element reference e2513 from the untargeted snapshot taken earlier in this run (the Properties panel); the image confirms the panel contents.
- Header/instruction mismatch (task=T9 in the header; "execute T7 only" in the instruction) is recorded in the T7 section; T8 and T9 were not started.

## Worker-written file inventory (T7 run)

- Written by the worker in this run: `evidence/EXP-126/t7-01-griditems-events-before.png`, `t7-02-drag-from-dialog-open.png`, `t7-03-drag-from-dialog-before-add.png`, `t7-04-drag-from-dialog-before-ok.png`, `t7-05-griditems-events-before-save.png`, `t7-06-save-state-after.png`; and this record (the status line, task-table rows, T7 section, this audit, the inventory and the final state).
- Tool-written (automatic; not read by the worker): page snapshot files under `evidence/playwright/page-…` for this run's snapshots and finds; the console logs written by the browser tool; and the 56 KB full snapshot persisted by the tool under the session's tool-results directory, outside the repository.

## Cleanup inventory update (T7)

- Event-list entries now present: 1 (GridItems Drag From Events = FX_AddToCart). ButtonAddToCart Drop On Events is pending (T8).
- Handler groups and rows and property pairs unchanged in T7.

## Final state (end of T7)

- Designer: FX_CustomerPortal open; User scope; Save disabled; console 2 errors / 0 warnings; no dialog, list or menu open; GridItems selected with its Events group expanded (view only; Drag From Events `1 event(s)`, Drop On Events `0 event(s)`).
- ButtonAddToCart not selected or changed in T7.
- Portal tab: not selected or changed in this run.
- Next permitted task: T8 (ButtonAddToCart Drop On Events = FX_AddToCart; one Save). T9 after T8. (Historical: superseded by the T8 final state below.)

## T8: ButtonAddToCart Drop On Events = FX_AddToCart (one Save; complete 2026-10-23)

Task header said `task=T10`; the bounded instruction said "Execute EXP-126 T8 only" and to stop at the T8 boundary. I followed the bounded instruction (T8) and did not start T9. Reported to the operator. The bounded instruction asked to reread "the current T8 section"; this record had no T8 section before this task (T8 existed only as a task-table row and the T7 final-state note), so the reread covered AGENTS.md (in full) and the task-table and T7 final-state rows.

### Gate (read-only, this run)

- Tabs listed before any selection: tab 0 = Designer (FX_CustomerPortal, `mode=designer`, current); tab 1 = portal "Mongoose" (not selected, clicked or navigated in this task). No sign-out or sign-in page was seen. The Designer tab was current throughout, so no tab selection was needed.
- Designer: User scope (`[ ScopeType: User / ScopeName: <signed-in user> ]`); FX_CustomerPortal tab selected; Save disabled; Regenerate Form disabled; no dialog, list or menu open; console **2 errors, 0 warnings** (baseline for this task).
- Event Handlers read back (view only; Event Handlers tab clicked once, targeted snapshot of the panel, then Components tab clicked once again). Rows observed, all as left by T6/T7:
  - `FX_AddToCart`: seq 0 Collection Make Current, Disabled false, `object`; seq 1 Collection New, false, `object`; seq 2 Generate event, false, `FX_SetNewCartEntry( POST() )`.
  - `FX_CartBtn`: seq 0 Set Values, `SETVARVALUES(FX_Page=3)`.
  - `FX_HomeBtn`: seq 0 Set Values, `SETVARVALUES(FX_Page=2)`.
  - `FX_SetNewCartEntry`: seq 0 Set Values, `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`.
  - `FX_SignInBtn`: seq 0 Collection Refresh, `object2`; seq 1 Set Values, `SETVARVALUES(FX_Page=2)`.
  - `FX_SignInBtn2`: seq 0 Set Values, `SETVARVALUES(FX_Page=1)`.
  - `StdFormPredisplay`: seq 0 Set Values, `SETVARVALUES(FX_Page=1)`.
  - No other group was seen. The earlier handlers match the T1 baseline.
- ButtonAddToCart selected by its Components row Type cell (FlexLayoutButtons > ButtonAddToCart, PushButton). Properties header `ButtonAddToCart (Button)`.
- ButtonAddToCart Events group (already expanded): Primary, Data Change, Lose Focus, Gain Focus blank; Drag From Events `0 event(s)` (this component's own event, left unchanged); Drop On Events `0 event(s)` (expected blank: confirmed). No group expansion was needed.
- Other ButtonAddToCart properties at baseline: Name ButtonAddToCart; Caption `FX_sAddToCart`; Type PushButton; From Device Master True.

### Action

1. Drop On Events ellipsis clicked once. Dialog "Edit Drop On Events" opened. Contents: "Event to Add:" combobox (empty), Open arrow, an empty added-events listbox, Add (disabled), Delete (disabled), OK, Cancel, Help. Screenshot `t8-01-drop-on-dialog-open.png`.
2. "Event to Add" Open arrow (button `Open`) clicked once. The list opened and offered a long event list (StdCurComp*, StdForm*, StdObject* and others); the first entry is FX_AddToCart, followed by FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn, FX_SignInBtn2 and then the Std events. No coordinate click was used.
3. Option `FX_AddToCart` clicked once (the list closed; the combobox reads FX_AddToCart). Add became enabled.
4. Add clicked once: the added listbox shows the single entry `FX_AddToCart`; Delete remains disabled. Screenshot `t8-02-drop-on-dialog-before-ok.png` (dialog before OK; shows the combobox FX_AddToCart and the one-entry list).
5. OK clicked once: the dialog closed.
6. Readback after OK: ButtonAddToCart Drop On Events `1 event(s)`; Drag From Events `0 event(s)`; Primary, Data Change, Lose Focus, Gain Focus still blank; Name, Caption, Type, From Device Master unchanged. Events group before Save captured: `t8-03-buttonaddtocart-events-before-save.png` (Properties header ButtonAddToCart (Button); Drop On Events `1 event(s)`).
7. One Designer Save (toolbar Save clicked once, with no dialog or list open and console at 2/0). Response: the success toast `Form [FX_CustomerPortal] and global object(s) were saved.` (read by find and snapshot; the toast had faded in the viewport capture). Save disabled afterwards; console still 2 errors / 0 warnings. Screenshot `t8-04-save-state-after.png`: Save icon greyed; Properties header ButtonAddToCart (Button), Drop On Events `1 event(s)`; status bar User scope; the toast is only faintly visible at the top right.
8. Final verification (read-only): GridItems selected by its Components Type cell (`e1163`, a selection only, no edit). Properties header `GridItems (Grid)`; Drag From Events `1 event(s)` (from T7); Drop On Events `0 event(s)`. Then a final untargeted snapshot: Save disabled, no dialog or list open, User scope, console 2 errors / 0 warnings.

### What the evidence shows and does not show

- Proves (observed in this session): the Drop On Events dialog listed FX_AddToCart as the only added event before OK; the summary changed from `0 event(s)` to `1 event(s)`; one Save ran with the success toast and Save was disabled afterwards; the console count did not rise; GridItems still shows Drag From Events `1 event(s)` after the save.
- Does not prove: the grid row shows only the count, so the name FX_AddToCart is evidenced by the dialog screenshots (t8-01, t8-02), not by the Events row. Persistence across a Designer close and reopen is not established here; that is T9. The Save toast text was captured through find and snapshot, not in a clear image.
- The FX_AddToCart option is the first list entry (the list is sorted by name; the entry is FX_AddToCart, not a similarly named event). Only FX_AddToCart was added.

### Qualifications (carried from the T7 record, not reconciled by the worker)

- The T7 worker narrative said the AGENTS.md reread before browser interaction was not repeated after the interruption. The controller audit records a successful AGENTS.md read in the T7 attempt. The worker cannot identify the reason for the difference, so this is not reconciled here.
- The controller recorded a stale-reference error in the T7 run that the T7 narrative omitted. The T7 narrative said "0 Ref not found" for that run. The worker cannot identify the reason for the controller entry from its own record.
- T7 screenshot `t7-05-griditems-events-before-save.png` was taken with element reference `e2513` that the worker held from earlier context, not from a snapshot taken in that turn. The screenshot succeeded and the image was checked (GridItems Events group: Drag From Events `1 event(s)`, Drop On Events `0 event(s)`). The rule to use the current snapshot's references was not followed for that one screenshot; this is recorded here as the worker's own deviation.
- This run: one "Ref not found" error on `e383` (the Event Handlers tab) after a targeted snapshot had replaced the active snapshot; recovered with one fresh untargeted snapshot (the one recovery allowance for this error) and then the click used the fresh reference.

### Not performed (T8)

- No T9 action (no Form close or reopen, no readback of the saved state after reopen, no final audit). No runtime action. No change to GridItems, the handlers, the variables or any other ButtonAddToCart property. No Toolbox placement, no Copy, no Undo, no dragging.

### Decision

- Stop at the T8 boundary. T9 (one ordinary Designer close and reopen through the Form tab, readback of both handler groups and both event rows, and the final documentation audit) is the next permitted task.

## T8 cumulative audit (this run) and cumulative totals

This run (T8) only, then the cumulative totals including earlier tasks as recorded in the T7 table (not recomputed from the controller's logs).

| Category | This run (T8) | Cumulative (T1 to T8) |
| --- | --- | --- |
| Tab lists (read-only) | 1 | 10 (9 before this run) |
| Tab selections performed | 0 | 2 (unchanged) |
| Completed ref-based clicks | 10 (Event Handlers tab; Components tab; ButtonAddToCart Type cell; Drop On ellipsis; Event to Add Open arrow; FX_AddToCart option; Add; OK; Save; GridItems Type cell) | 112 (102 before this run) |
| Clicks not performed ("Ref not found") | 1 (Event Handlers tab, first attempt) | cumulative count not updated beyond the T7 table (5 recorded there; the T7 controller entry is noted in the qualifications) |
| Clicks timed out | 0 | 1 (unchanged) |
| Coordinate clicks | 0 | 0 |
| Arrow clicks (Open) | 1 | not recomputed per category; T8 adds 1 |
| Ellipsis clicks | 1 | not recomputed per category; T8 adds 1 |
| Add clicks | 1 | T8 adds 1 (first Add in the record for the Drop On dialog; the Drag From Add is in T7) |
| OK clicks (dialog) | 1 | T8 adds 1 |
| Save clicks | 1 | T8 adds 1 |
| Double-clicks | 0 | 1 (T7 Events label; unchanged) |
| Dialogs opened / closed by OK / by Cancel | 1 / 1 / 0 | 17 / 16 / 0 (16 / 15 / 0 before) |
| Nested dialogs | 0 | 0 |
| Lists opened / closed by option click | 1 / 1 | 16 / 16 (15 / 15 before) |
| Prompts seen | 0 | 0 |
| Designer Saves (one per performed step) | 1 (success toast) | 7 (T2 to T8; one per task) |
| Form closes or reopens | 0 | 0 |
| Re-logins by the worker | 0 | 0 |
| Server-event errors | 0 | 0 |
| Session-signed-out indications | 0 (portal tab not selected; no sign-in page seen) | 1 (earlier T7 attempt; recorded in the T7 section) |
| Console rises (Designer) | 0 (2 errors / 0 warnings at every reading) | 0 |
| Untargeted snapshots | 11 | 25 (14 before this run) |
| Targeted snapshots | 9 | 117 (108 before this run) |
| Finds | 7 | 78 (71 before this run) |
| Repository reads | 2 (AGENTS.md in full; record Grep for the T8 section) | 27 (25 before this run) |
| Screenshots saved (files under evidence/EXP-126) | 4 (t8-01 to t8-04) | 38 (34 before this run) |

Notes:
- Snapshot count: 20 snapshot calls in this run (11 untargeted, 9 targeted), including one fresh untargeted snapshot after the "Ref not found" error.
- Image reads by the worker in this run: 4 (the four T8 screenshots, checked for content). These are not counted as repository reads.
- The "Arrow", "Ellipsis", "OK" and "Save" subtotals are reported for this run; the earlier per-category subtotals from the T1 to T7 record are not recomputed here, because the record does not hold a full per-category ledger for every earlier snapshot and click. The totals in the Cumulative column are the record's previous totals plus this run.

## Worker-written file inventory (T8 run)

- Written by the worker in this run: `evidence/EXP-126/t8-01-drop-on-dialog-open.png`, `t8-02-drop-on-dialog-before-ok.png`, `t8-03-buttonaddtocart-events-before-save.png`, `t8-04-save-state-after.png`; and this record (the status line, task-table rows, the T8 section, this audit, the inventory, the cleanup inventory and the final state).
- Tool-written (automatic; not read by the worker): page snapshot files under `evidence/playwright/page-2026-10-23T02-03-04-690Z.yml`, `-02-03-19-893Z`, `-02-03-27-766Z`, `-02-03-36-219Z`, `-02-03-47-106Z`, `-02-03-56-076Z`, `-02-04-01-388Z`, `-02-04-08-777Z`, `-02-04-23-921Z`, `-02-04-38-945Z` (one per performed action, as the tool wrote them), and the console log `evidence/playwright/console-2026-10-23T02-02-48-583Z.log` listed by the tab tool. The worker did not read any of these.
- No other repository file was written in this run.

## Cleanup inventory update (T8)

- Event-list entries now present: 2 (GridItems Drag From Events = FX_AddToCart; ButtonAddToCart Drop On Events = FX_AddToCart).
- Handler rows present: FX_AddToCart (3 rows: 0 Collection Make Current, 1 Collection New, 2 Generate event) and FX_SetNewCartEntry (1 row, Set Values, 3 property pairs). Total new rows: 4; property pairs: 3. No change in T8 to the handlers.

## Final state (end of T8)

- Designer: FX_CustomerPortal open; User scope; Save disabled; no dialog, list or menu open; console 2 errors / 0 warnings. GridItems is the selected component (Properties header `GridItems (Grid)`; Drag From Events `1 event(s)`; Drop On Events `0 event(s)`). ButtonAddToCart was selected in T8 and is no longer selected.
- Portal tab: not selected, clicked or changed in this run.
- Next permitted task: T9 (one ordinary Designer close and reopen through the Form tab, readback of both new groups and both event rows, earlier handlers unchanged, Form left open and clean, then the documentation-only final audit). (Historical: superseded by the T9 final state below.)

## T9: close/reopen readback (one close, one reopen; no Save)

Header said `task=T11`; the bounded instruction said "Execute EXP-126 T9 only". I followed the bounded instruction (T9). This is a cosmetic task-header mismatch, like the earlier T7 (`task=T9`) and T8 (`task=T10`) headers. The bounded instruction asked to reread "the current T9 section"; the record had no T9 section before this task (T9 existed only as a task-table row and the T8 final-state note). AGENTS.md was reread in this turn only in part (lines 1 to 60, the top of the file; the full file was read in the T8 turn), so the reread is recorded as partial.

### Gate (read-only)

- Tabs listed before any selection: tab 0 = Designer (FX_CustomerPortal, `mode=designer`, current); tab 1 = portal "Mongoose" (title "Mongoose", not "Logout Successful"; not selected or changed). No sign-out card or sign-in page was seen. Authentication remained usable.
- Designer before the close: User scope (`[ ScopeType: User / ScopeName: <signed-in user> ]`); FX_CustomerPortal tab selected; Save disabled; no dialog, list or menu open; console **2 errors, 0 warnings**. No gate screenshot was taken for this read.

### Action 1: close FX_CustomerPortal once (Form-tab control)

- Clicked the Form-tab close control (`closable FX_CustomerPortal`) once.
- Console after the click: 2 errors / 0 warnings.
- Result: the Form tab closed. The snapshot taken immediately afterwards showed **no save prompt and no dialog**, so no prompt text exists to record and no answer was given. (The brief's "answer No to any save prompt" did not apply.)
- Save was never invoked in T9.

### Action 2: reopen FX_CustomerPortal once (Form menu, recent-forms entry)

- Clicked the Designer `Form` menu once. The menu opened with the entries Definition, Sign Out (not clicked), and recent forms FX_CustomerPortal, Test ION API Invoke, Access As, EX_Items, IDO Projects, FX_Items, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01.
- Clicked the recent-forms entry `FX_CustomerPortal` once. Select Form was not used.
- Console after the click: 2 errors / 0 warnings.
- Result: FX_CustomerPortal reopened. The page URL gained `&MGForm=FX_CustomerPortal`. No editing-scope dialog appeared; the status bar reads User scope. Save disabled; no dialog open; the Form is clean.
- The Details panel had been collapsed by the close; it was expanded once with its own "Expand Panel" control (view only). Console 2 / 0.

### Readback 1: Details > Event Handlers (view only, no parameters dialog, no editor, no list)

- Groups listed in the panel (accessibility readback, targeted snapshot of the Event Handlers grid): FX_AddToCart, FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn, FX_SignInBtn2, StdFormPredisplay. Groups came back collapsed; the panel's own "Expand" toolbar button was clicked once (view only) to show rows.
- Rows as read back:
  - `FX_AddToCart`: seq 0 Collection Make Current, Disabled false, Response Parameters `object`; seq 1 Collection New, false, `object`; seq 2 Generate event, false, `FX_SetNewCartEntry( POST() )`.
  - `FX_SetNewCartEntry`: seq 0 Set Values, false, `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`. One row only.
  - `FX_CartBtn`: seq 0 Set Values, `SETVARVALUES(FX_Page=3)`.
  - `FX_HomeBtn`: seq 0 Set Values, `SETVARVALUES(FX_Page=2)`.
  - `FX_SignInBtn`: seq 0 Collection Refresh, `object2`; seq 1 Set Values, `SETVARVALUES(FX_Page=2)`.
  - `FX_SignInBtn2`: seq 0 Set Values, `SETVARVALUES(FX_Page=1)`.
  - `StdFormPredisplay`: seq 0 Set Values, `SETVARVALUES(FX_Page=1)`.
- Comparison with the T1 baseline (record lines 71 to 76): the five earlier groups match exactly (FX_CartBtn, FX_HomeBtn, FX_SignInBtn two rows, FX_SignInBtn2, StdFormPredisplay). Nothing was edited. The two new groups match the T2–T6 entries.
- Screenshot `evidence/EXP-126/t9-01-event-handlers-readback-after-reopen.png`: the image shows the FX_AddToCart group (rows 0 Collection Make Cur..., 1 Collection New, 2 Generate event, with Response Parameters `object`, `object`, `FX_SetNewCartEntry( POST() )`) and the start of FX_CartBtn. **Clipped:** the FX_SetNewCartEntry group and the lower earlier groups are below the panel edge and are not visible in the image; the Expand tooltip also covers part of the header. The FX_SetNewCartEntry row is evidenced only by the accessibility readback above, not by the image.

### Readback 2: GridItems and ButtonAddToCart (selection by Components Type cell; view only)

- Components tab clicked once; the Components tree was expanded once with the grid's Expand control (view only).
- GridItems selected by its Type cell (row GridItems, `Grid`, FlexLayoutHome). Properties header `GridItems (Grid)`. Drag From Events **`1 event(s)`**; Drop On Events **`0 event(s)`**. Other values in the Events group unchanged (Primary, Data Change, Lose Focus, Gain Focus blank). Screenshot `t9-02-griditems-events-after-reopen.png` (Properties panel: Name GridItems, Type Grid, Events group with the two counts).
- ButtonAddToCart selected by its Type cell (row ButtonAddToCart, `PushButton`, FlexLayoutButtons). Properties header `ButtonAddToCart (Button)`. Drop On Events **`1 event(s)`**; Drag From Events `0 event(s)` (this button's own event; unchanged); Primary, Data Change, Lose Focus, Gain Focus blank. Name ButtonAddToCart, Caption `FX_sAddToCart`, Type PushButton, From Device Master True (all as in T8). Screenshot `t9-03-buttonaddtocart-events-after-reopen.png`.
- Association of the counts with FX_AddToCart: only through the T7 and T8 dialog evidence (`t7-03`, `t7-04`, `t8-01`, `t8-02`); the T9 readback does not reopen the dialogs and does not show the event name in the grid. This is the association the brief requires.

### Final state after readback

- Designer: FX_CustomerPortal open and clean (Save disabled); User scope; no dialog, list or menu open; console 2 errors / 0 warnings (observed at every reading in T9). ButtonAddToCart is the selected component.
- Portal tab: not selected, clicked or changed in T9.
- No Designer Save, no further close or reopen, no runtime action, no other mutation.

### T9 stop-rule check

- Console: 2 errors / 0 warnings after every action (close, reopen, each expand, each selection, each read). No rise.
- Server-event errors: none. No "Logout Successful", sign-in page or session-expiry indication. No re-login.
- Stale references: two "Ref not found" errors in this task, each recovered with one fresh untargeted snapshot (see audit): (1) the Components tab reference after the Event Handlers readback; (2) the Components grid Expand reference. The failed clicks were not performed.
- Prompts: none seen on close or reopen. No Identify Your Editing Scope dialog.

## T9 browser action audit (this task only)

| Category | T9 |
| --- | --- |
| Tab lists (read-only) | 1 (before the first action) |
| Tab selections | 0 |
| Completed clicks (ref-based) | 10: Form-tab close (1); Form menu (1); recent-forms entry FX_CustomerPortal (1); Details Expand Panel (1); Event Handlers tab (1); Event Handlers panel Expand (view, 1); Components tab (1); Components grid Expand (view, 1); GridItems Type cell (1); ButtonAddToCart Type cell (1) |
| Clicks not performed ("Ref not found") | 2 (Components tab; Components grid Expand; each followed by one fresh untargeted snapshot and then a successful click) |
| Clicks timed out | 0 |
| Coordinate clicks | 0 |
| List opens / arrow clicks / ellipsis clicks | 0 / 0 / 0 |
| Dialogs opened (OK / Cancel) | 0 |
| Nested dialogs | 0 |
| Prompts seen | 0 |
| Designer Saves | 0 |
| Form closes | 1 (Form-tab control; no prompt) |
| Form reopens | 1 (Form menu, recent-forms entry; no scope dialog) |
| Re-logins | 0 |
| Server-event errors | 0 |
| Console rises | 0 (Designer 2 errors / 0 warnings at each reading) |
| Untargeted snapshots | 10 |
| Targeted snapshots | 4 (Event Handlers grid twice; Components tree twice) |
| Finds | 4 (GridItems header, event(s) count, ButtonAddToCart header, Drop On Events) |
| Screenshots saved | 3 (t9-01, t9-02, t9-03) |
| Repository reads | AGENTS.md (lines 1–60; partial); the record grep for the T9 and baseline sections; no other reads |

## Cumulative browser action audit (T1 to T9)

The cumulative figures below are the totals stated in each earlier record section, extended by this task's counts. They were **not** re-derived from the tool logs in this task, and the worker did not read the tool logs. Where a total cannot be reconciled from the record, it is marked.

| Category | Cumulative (T1 to T9) | Basis |
| --- | --- | --- |
| Tab lists (read-only) | 11 (10 through T8 + 1 in T9) | T8 record total 10 + T9 |
| Tab selections performed | 2 (T1 only; the T1 Web Client and Designer selections) | T1 section; no tab selection in T2–T9 |
| Completed ref-based clicks | 122 (112 through T8 + 10 in T9) | T8 record total 112 + T9 |
| Clicks not performed ("Ref not found") | 8 recorded by the worker (5 through T7 + 1 in T8 + 2 in T9); the controller's T7 stale-reference entry is not in the worker's narrative and is **not added** | T7/T8 tables; unreconciled |
| Clicks timed out | 1 (T1 record) | T7/T8 table |
| Coordinate clicks | 0 | every task record |
| Arrow, ellipsis, Add, OK, Save clicks (per category) | Not recomputed per category through T8 by the records; T8 record added 1 each of arrow, ellipsis, Add, OK, Save. T9 adds none. **Unresolved for earlier tasks.** | T8 table; T2–T7 per-category totals not reproduced |
| Double-clicks | 1 (T7 Events label, view only) | T7 table |
| Dialogs opened / closed by OK / closed by Cancel | 17 / 16 / 0 (T9 adds none) | T8 record total |
| Lists opened / closed by option click | 16 / 16 (T9 adds none) | T8 record total |
| Prompts seen | 0 | T7/T8 cumulative tables; T9 none |
| Designer Saves | 7: one each in T2, T3, T4, T5, T6, T7, T8 (each with its success toast, Save then disabled). T9 adds none. | Per-task records |
| Form closes / reopens | 1 / 1 (T9 only; no earlier close or reopen) | T9 section |
| Re-logins by the worker | 0 | every record |
| Server-event errors | 0 | every record |
| Session-signed-out indications | 1 (earlier T7 attempt, portal tab "Logout Successful"; operator signed in manually; recorded in the T7 attempt note) | T7 attempt note |
| Console rises (Designer) | 0 | every record |
| Untargeted snapshots | 35 (25 through T8 + 10 in T9) | T8 record total 25 + T9 |
| Targeted snapshots | 121 (117 through T8 + 4 in T9) | T8 record total 117 + T9 |
| Finds | 82 (78 through T8 + 4 in T9) | T8 record total 78 + T9 |
| Repository reads | 28 (27 through T8 + the T9 reads above, counted as 1 partial AGENTS.md read; the record grep is not counted) | T8 record total 27 + 1 |
| Screenshots saved under evidence/EXP-126 | 41 (38 through T8 + 3 in T9) | file inventory below |

Known discrepancies and qualifications (not reconciled, not invented):
- T7 controller audit recorded a successful AGENTS.md read; the T7 narrative said the reread was not repeated. Not reconciled.
- T7 controller recorded one stale-reference error that the T7 narrative omitted (narrative said 0). Not reconciled; the worker does not add it to the 8 above.
- T7 screenshot `t7-05-griditems-events-before-save.png` used element reference e2513 held from earlier context, not from a snapshot taken in that turn (the worker's own deviation; the image was checked and shows GridItems Events with `1 event(s)` and `0 event(s)`).
- T8 "Ref not found" (Event Handlers tab, reference e383) was recovered with one fresh untargeted snapshot; the T8 record counts it as not performed.
- Per-category totals (arrow, ellipsis, Add, OK, Save) for T2–T7 are not in the records as cumulative figures; they are unresolved.
- Snapshot counts for T1–T7 are as recorded in the earlier sections; the worker did not re-derive them.

## Worker-written file inventory (cumulative, this experiment)

Written by the worker (repo-relative, all under `evidence/EXP-126/`), 41 PNG files:
- T1 (3): `t1-01-event-handlers-baseline.png`, `t1-02-griditems-events-baseline.png`, `t1-03-buttonaddtocart-events-baseline.png`.
- T2 (6): `t2-01-event-handler-dialog-open.png`, `t2-02-value-dialog-open.png`, `t2-03-value-dialog-before-ok.png`, `t2-04-pair-dialog-before-ok.png`, `t2-05-handler-row-before-save.png`, `t2-06-save-state-after.png`.
- T3 (4): `t3-01-three-pairs-list-before-ok.png`, `t3-02-handler-row-before-save.png`, `t3-03-save-toast.png`, `t3-04-save-state-after.png`.
- T4 (5): `t4-01-event-handler-name-before-ok.png`, `t4-02-parameters-dialog-before-ok.png`, `t4-03-addtocart-group-before-save.png`, `t4-04-save-toast.png`, `t4-05-save-state-after.png`.
- T5 (5): `t5-01-event-handler-name-before-ok.png`, `t5-02-parameters-dialog-before-ok.png`, `t5-03-addtocart-group-before-save.png`, `t5-04-save-toast.png`, `t5-05-save-state-after.png`.
- T6 (5): `t6-01-event-handler-name-before-ok.png`, `t6-02-parameters-dialog-before-ok.png`, `t6-03-addtocart-group-before-save.png`, `t6-04-save-toast.png`, `t6-05-save-state-after.png`.
- T7 (6): `t7-01-griditems-events-before.png`, `t7-02-drag-from-dialog-open.png`, `t7-03-drag-from-dialog-before-add.png`, `t7-04-drag-from-dialog-before-ok.png`, `t7-05-griditems-events-before-save.png`, `t7-06-save-state-after.png`.
- T8 (4): `t8-01-drop-on-dialog-open.png`, `t8-02-drop-on-dialog-before-ok.png`, `t8-03-buttonaddtocart-events-before-save.png`, `t8-04-save-state-after.png`.
- T9 (3): `t9-01-event-handlers-readback-after-reopen.png`, `t9-02-griditems-events-after-reopen.png`, `t9-03-buttonaddtocart-events-after-reopen.png`.

Written by the worker: this record (`experiments/EXP-126-hello-world-part-8-phase-7-add-to-cart-handlers-drag-drop.md`) only. No other repository file was written.

Tool-written (automatic; the worker did not read them): page snapshot files `evidence/playwright/page-2026-10-23T02-08-19-190Z.yml`, `-02-08-22-958Z`, `-02-08-28-684Z`, `-02-08-32-624Z`, `-02-08-36-144Z`, `-02-08-42-589Z`, `-02-08-54-482Z`, `-02-09-06-766Z`, `-02-09-11-657Z`, `-02-09-22-628Z` (and the earlier T1–T8 snapshot files named in each record); console logs listed by the tab tool, including `evidence/playwright/console-2026-10-23T02-08-13-891Z.log`. The list is not exhaustive for every automatic file; a full 56 KB snapshot from T7 was persisted under the tool-results directory outside the repository.

## Cleanup inventory (created in EXP-126; nothing removed in T9)

- Handler groups: 2 (`FX_SetNewCartEntry`, `FX_AddToCart`).
- Handler rows: 4 (FX_SetNewCartEntry seq 0; FX_AddToCart seq 0, 1, 2).
- Property pairs: 3 (in the FX_SetNewCartEntry row: FX_Item, FX_Count, FX_CustomerID).
- Event-list assignments: 2 (GridItems Drag From Events = FX_AddToCart; ButtonAddToCart Drop On Events = FX_AddToCart).
- No variable, component, region value, collection, binding or other Form property was created or changed.

## Final audit (acceptance checks; observed only)

- **AC-1 (sources, session, scope, baseline):** Supported at T1 (record gate sections and `t1-01` to `t1-03`), at T9 gate (snapshot readings: User scope, Save disabled, no dialog or list open, console 2/0, portal tab "Mongoose", not "Logout Successful"), and by the T9 readback of the earlier handlers (same as the T1 baseline). Limitations: no T9 gate screenshot; the T1 Web Client console (5 errors / 2 warnings) and the banner dismissal are T1 observations only and were not re-read in T9. The T1 "No runtime Form dirty" statement is an inference from the absence of runtime Form content in the visible frame (T1), not a verified dirty-state reading.
- **AC-2 (FX_SetNewCartEntry, T2–T3):** Row seq 0, Set Values, Response Parameters `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`, read back after the close and reopen (accessibility readback; `t9-01` shows the group clipped). One Save in T2 and one in T3, with the T2 Save-state and T3 list/row/save screenshots. Limitation: the summary text cannot show the collection names of each pair; they are recorded in the T2 and T3 sections.
- **AC-3 (FX_AddToCart, T4–T6):** Rows 0 Collection Make Current `object`, 1 Collection New `object`, 2 Generate event `FX_SetNewCartEntry( POST() )`, read back after reopen (`t9-01` shows rows 0–2 clearly). One Save each in T4, T5, T6. Limitations: `object` and `object2` are summary strings; the primary/secondary naming is in T4 and T2 records. "POST()" is the Post Event Asynchronously summary as displayed; its meaning is **unverified** here (it is not confirmed as asynchronous behaviour, and the checkbox was set by label click in T6, recorded as observed).
- **AC-4 (drag and drop, T7–T8, readback T9):** GridItems Drag From Events reads `1 event(s)` and ButtonAddToCart Drop On Events reads `1 event(s)` after the close and reopen (`t9-02`, `t9-03`). Event assignment FX_AddToCart established by the T7 and T8 dialog evidence (`t7-03`, `t7-04`, `t8-01`, `t8-02`), not by the grid, as the brief requires. One Save each in T7 and T8. Earlier handlers unchanged after reopen. Form open and clean at the end.
- **AC-5 (no other change; no task-boundary overrun):** No handler, variable, binding, component, region value or Form property was changed in T9. No Toolbox placement, no handler Copy, no copy/paste, no global object, no unload, no Delete Form Definition, no Select Form OK, no dragging, no Undo, no runtime action. View-only expansions in T9 (Details panel, Event Handlers grid, Components tree) and selection of GridItems and ButtonAddToCart did not change Form content. Limitation: earlier per-category click totals are not reconciled (see the cumulative audit).

## Remaining acceptance qualifications and open items

- Persistence across one Designer close and reopen: observed in this session (the same browser session, same worker session). This is **not** cross-session or database-level durability, and it is not runtime verification or replay verification.
- Clipped screenshot: `t9-01` does not show the FX_SetNewCartEntry group; its readback is the accessibility readback only.
- Name field pre-fill: blank in T2, pre-filled with the previous name in T4–T6 (contrary to the EXP-124 record). Unresolved; the operator should decide whether this matters.
- "POST()" meaning: unverified.
- Save toast: T2's toast text is recorded from the snapshot; T3–T8 toasts were read by find or snapshot and some images faded the toast.
- Row screenshot clipping in T2–T6 row images, as already recorded.
- T7: screenshot `t7-05` used an earlier-context reference (deviation recorded); the T7 stale-reference and source-review discrepancies remain as recorded in the T8 section.
- T8: the stale reference on the Event Handlers tab was recovered with one fresh untargeted snapshot.
- Task-header mismatches (T7 `task=T9`, T8 `task=T10`, T9 `task=T11` against bounded instructions for T7, T8, T9): treated as cosmetic; each bounded instruction was followed.
- Session-expiry pause in an earlier T7 attempt (portal "Logout Successful"; no mutation; operator signed in manually). The worker did not run the session-expiry procedure. T9 found the portal usable.
- Web Client dirty-state inference and banner dismissal (T1): preserved as recorded in the T1 section; not re-verified in T9.
- Remaining count uncertainty: the cumulative per-category figures and the "Ref not found" total are as stated above and are not reconciled with tool logs.

## Final state (end of T9)

- Experiment: EXP-126 T1 to T9 complete as planned. Handlers and event assignments are present as read back after one close and reopen.
- Designer: FX_CustomerPortal open and clean; User scope; Save disabled; no dialog, list or menu open; console 2 errors / 0 warnings; ButtonAddToCart selected.
- Portal tab: unchanged; not selected.
- Next step: none within EXP-126. Any further change (for example cleanup, or a new readback) is outside this brief and needs a new instruction.

## Outcome (operator, 2026-10-23)

Accepted (observed), with qualifications. The decision was made by the operator assistant under the user's overnight authorization of 2026-10-23 (auto-accept recommendations). The user approved the brief and the precondition attestation themselves. **Hello World Part 8 Phase 7 is complete in the Designer on FX_CustomerPortal (User scope):**
- **FX_SetNewCartEntry:** Set Values `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`.
- **FX_AddToCart:** row 0 Collection Make Current `object`, row 1 Collection New `object`, row 2 Generate event `FX_SetNewCartEntry( POST() )`.
- **Drag and drop:** GridItems Drag From Events and ButtonAddToCart Drop On Events both hold FX_AddToCart.

All of these read back after one ordinary close and reopen (T9). Run R-20261023-003800-WxU3 used 11 of 12 worker tasks. There were seven Designer Saves (T2 to T8, one each, each with the saved toast) and no runtime action.

- Screenshots viewed by the operator assistant:
  - `t7-04`: Edit Drag-From Events, Event to Add FX_AddToCart, list FX_AddToCart.
  - `t8-02`: Edit Drop On Events, same content.
  - `t9-01`: after the reopen, FX_AddToCart rows 0 to 2 as above.
- Operator rulings during the run:
  1. **First T7 attempt, usage limit:** the run paused on the Claude usage limit after the worker had only read files and listed tabs. It was resumed with `--continue-after-usage` and a bounded instruction to redo T7 from a read-only gate.
  2. **Second T7 attempt, sign-out:** the portal tab read "Logout Successful" after the idle gap, and the worker stopped correctly with no mutation. My background resume process was also stopped by Claude Code (low system memory), which left the controller down at COORDINATOR_PENDING. The user signed in again and said continue. The run was resumed with `--confirm-preconditions`, then with a `--note` to redo T7 from its gate.
  3. **Accepted as cosmetic or minor:** task-header label mismatches; partial AGENTS.md rereads; a T7 screenshot taken with an earlier-context reference.
- Findings (observed):
  1. The Set Values Parameters dialog's **Properties** ellipsis opens "Edit Set Property Values" (New, Edit, Delete, Up, Down). In a pair, the Target list holds the primary collection's (FX_Orders) properties, and the Collection for Target defaults to "primary collection".
  2. Value ellipsis > Property Value from the secondary collection is stored as `P(2.FX_Item)`. Its Collection field is disabled until a Type is chosen, then defaults to "primary collection". A typed `V(FX_Count)` is stored as typed.
  3. Collection action dialogs name collections "primary collection" and "secondary collection 2" (not by IDO). The row summary is `object` / `object2`. The Collection field of a new collection action starts blank. Collection Make Current's section is titled "Edit Collection Action Set Current Collection", with Navigation Action defaulting to First.
  4. The Response Type list has both "Generate event" (the tutorial's) and "Generate Application Event". The Event-to-generate list holds the Form's handlers first, then about 150 Std events.
  5. **Post Event Asynchronously:** its checkbox input is covered by a sibling span, so a label click toggles it. The row summary shows `( POST() )`.
  6. **Drag From Events / Drop On Events:** each opens an "Edit Drag-From Events" or "Edit Drop On Events" dialog (Event to Add combobox, Add, Delete, list, OK). The Properties grid shows only a count, e.g. `1 event(s)`; `0 event(s)` means empty.
  7. **Event Handler dialog Name field:** blank in T2 but pre-filled with the previous name in T4 to T6. The clear-and-type routine handled both. Typing opens an autocomplete list, which closes when the matching entry is clicked.
  8. New handler groups sort alphabetically. New rows with an existing name append at the next sequence (EXP-124 again).
  9. Details opens on Collections, listing "Primary Collection: FX_Orders" and "Secondary Collection 2: FX_Items".
- Qualifications accepted by the operator assistant:
  - same-session UI evidence only;
  - `t9-01` is clipped, so the FX_SetNewCartEntry readback rests on the accessibility tree;
  - the FX_AddToCart name behind the `1 event(s)` counts rests on the T7/T8 dialog evidence;
  - the meaning of `POST()` and the tutorial's "fires only after earlier rows succeed" claim are untested;
  - the cumulative counts are not reconciled with tool logs;
  - a portal notification banner was closed in T1 under the standing authorization;
  - the T1 Web Client dirty-state check was an inference.
- Record hygiene: the worker copied the signed-in account name from the status bar into three places. The operator assistant replaced each with `<signed-in user>`. The screenshots' status bars still show it, as in earlier experiments.
- Confinement (git status): the run wrote only `evidence/EXP-126/` and this record in the repository, plus the tool's usual files under `evidence/playwright/`. `tools/claude-harness/briefs/EXP-119.brief.json` stays untracked and untouched.
- Cleanup inventory (Phase 7, FX_CustomerPortal, User scope):
  - handler FX_SetNewCartEntry (one row, three property pairs);
  - handler FX_AddToCart (three rows);
  - GridItems Drag From Events FX_AddToCart;
  - ButtonAddToCart Drop On Events FX_AddToCart.
  - No global object was created or changed, and nothing was done at runtime.
- Limits: Designer metadata only. The cart pipeline has not run: there was no runtime drag, so no FX_Orders row was inserted or saved.
- Next: EXP-127, Part 8 Phase 8. Set ButtonCheckout's Primary event to StdFormSave (the tutorial's "standard form safe"; confirm the exact label). Then do the runtime walkthrough: Customer ID 1, ButtonSignIn2, drag one tile onto ButtonAddToCart, Cart shows a new FX_Orders row with count 1, Checkout saves it. This needs drag tools and a disposable FX_Orders row in the brief, and a separate read-back of the saved row.
