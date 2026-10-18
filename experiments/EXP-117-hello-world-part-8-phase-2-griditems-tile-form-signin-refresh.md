# EXP-117 - Hello World Part 8 Phase 2 (Designer): GridItems Tile Form, FX_SignInBtn refresh handler, ButtonSignIn2 Primary, one Regenerate

Brief: approved in commit 732fd07 (LEARNING MODE, AGENTS.md).
Target: FX_CustomerPortal, User scope only. Operator authorization for one Regenerate Form (2026-10-18).
Runtime check (Customer ID 1, sign-in click, tile rendering): out of scope; separate later experiment (operator decision, 2026-10-18).
Status: **accepted (observed), with qualifications — operator, 2026-10-19; see Outcome (operator) at the end.**
Run R-20261018-235207-sV2Q. Task progress: **T1 (gate) complete. T2 complete (two Saves). T3 complete (one Save; handler FX_SignInBtn created). T4 complete (one Save; ButtonSignIn2 Primary = FX_SignInBtn). T5 BLOCKED at the availability gate (Regenerate Form disabled; not clicked; see T5 section; operator-amended AC-3: regeneration unnecessary, zero Regenerate clicks, authorization expired). T6 readback and final audit completed in the 2026-10-19 continuation after the operator's manual re-login: FX_CustomerPortal was NOT open at re-login, so the worker reopened it once (no ordinary close by the worker); see T6 continuation and FINAL AUDIT section. Run status: observed UI evidence with qualifications; not unconditional acceptance.**

## Status summary

| Task | Status |
|---|---|
| T1 gate, baselines | Complete (no change made) |
| T2 GridItems Tile Form FX_ItemsTile, tile setting Always (two Saves) | Complete (2 Saves, both saved toasts; see T2 section) |
| T3 handler FX_SignInBtn, Collection Refresh, FX_Items (one Save) | Complete (1 Save, saved toast; handler row Collection Refresh / object2; see T3 section) |
| T4 ButtonSignIn2 Primary = FX_SignInBtn (one Save) | Complete (1 Save, saved toast; Primary reads FX_SignInBtn after Save; see T4 section) |
| T5 one Regenerate Form | BLOCKED before any click: availability gate failed (Regenerate Form disabled). Regenerate clicks: 0. See T5 section. |
| T6 close/reopen readback and final audit | Readback and final audit completed 2026-10-19 (continuation after operator re-login). Worker performed a reopen only (FX_CustomerPortal was not open at re-login); no worker close. See T6 continuation and FINAL AUDIT. |

## Sources read (T1)

- `AGENTS.md` (repository file).
- `docs/mongoose/transcripts/hello-world-pt8.md`: Phase 2 lines 114-123; ambiguity items 3 and 6 (lines 270, 273); transcript lines 352-362 (03:25-04:32).
- `recipes/components/configure-basic-component.md`; `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections only: EXP-116 (lines 1552-1581), EXP-114 (681-702), EXP-095 (956-976), EXP-102 (943-962). Their headings were located by a heading search of each file; no other content of those records was read. No other record and no later Part 8 phase was read.

## T1 gate result

- Sessions: Web Client tab (tab 1) and Designer (tab 0) both usable. No Session Expired modal, sign-in page, "Logout Successful" or server-event error appeared at any point in T1. No re-login.
- Scope: User throughout (ScopeType User, ScopeName = signed-in user). No "Identify Your Editing Scope" dialog appeared.
- FX_ItemsTile: was open and clean (Save disabled). Closed once through its tab close control. No save prompt appeared.
- FX_CustomerPortal: opened once through the Form menu recent-forms entry (not Select Form OK). Clean (Save disabled).
- Components tree: matches the EXP-114 acceptance for the named items. GridItems (Grid, Data Source objects2) under FlexLayoutHome > Region02: grid, with gridColumn1_USER and gridColumn2_USER. ButtonSignIn2 (PushButton) under FlexLayoutMain > Region02: signinpage. Full tree in `evidence/EXP-117/t1-gate-readings.md`.
- GridItems: Binding Type "Secondary Collection Grid"; Binding "objects2". Miscellaneous rows and their options recorded (table in the readings file). Tile Form: blank; list of nine tile forms, including FX_ItemsTile. The row directly below Tile Form is **Tile When**; its list offers **Always**, <n> (tile when width < n char units), Interpreted values (variables, keywords), Never.
- ButtonSignIn2: Events > Primary blank (Data Change, Lose Focus, Gain Focus blank; Drag From and Drop On 0 events). Caption FX_sSignIn (untouched).
- Form Event Handlers: no rows. So FX_SignInBtn does not exist yet.
- Collections: Primary Collection FX_Orders; Secondary Collection 2 FX_Items.
- Console baseline (Designer page): **2 errors, 0 warnings**. Unchanged after every action in T1.

## Ambiguity items resolved for T2 (observed in this build)

- Item 3 ("tile and attribute to always"): the tile setting is the Miscellaneous row **Tile When**, the one row directly below Tile Form, whose list offers **Always**. Exactly one candidate; no other row below Tile Form is a list with Always.
- Item 6: the sign-in panel button is **ButtonSignIn2** (under Region02: signinpage); the menu button ButtonSignIn (Region00: menu) is not to be used.

## Findings (observed only)

1. Clicking the GridItems Components row highlighted the row but did not switch Properties; the Type cell did (as EXP-113/EXP-114).
2. An open Tile When list overlaid its own Description row; two clicks on the Description row (textarea e1114 and label e1115) were intercepted by the list ("subtree intercepts pointer events") and timed out without dispatching. Not repeated. The list was closed with Escape; Tile When stayed blank.
3. Clicking the Events group label selected the row but did not expand the group; the group expander (no accessible ref) was clicked by coordinates once.
4. The first untargeted snapshot of the Designer (about 58 KB) was too large to return inline; the tool saved it outside this record. It was not read. Later reads used targeted snapshots of the tree, the Properties panel, the Details tab strip and the toolbar.
5. After the Tile Form description click, the description textarea carried the Ext class "x-form-dirty" (seen in an intercept log). Save stayed disabled throughout and no value changed. Interpretation not made.
6. Closing FX_ItemsTile raised no save prompt.

## Deviations (for operator review)

- **Escape key used to close six open Miscellaneous lists** (Tile When, Client Grid Pagination, Group, No Row Header, No Scroll, Stretch Columns). The brief's list rule names arrow keys, Enter and Tab; Escape is not named and no option was chosen. Each list's value was verified unchanged in a screenshot (t1-06, t1-08, t1-13).
- Coordinate click once on the ButtonSignIn2 Events expander (no ref). Mouse move and wheel (scroll of the Properties panel) once each.
- Tile Form list closed through the Description row (as the brief specifies); Tile When list could not be closed that way (see finding 2).
- Client Grid Pagination list is longer than the viewport; entries below the visible area were not read.
- Full Components tree is recorded as text (targeted snapshot); screenshot t1-01 shows only the GridItems part of it.
- ButtonSignIn2 was selected by its Type cell directly (the row click was not tried for it).

## Acceptance checks (status after T1)

- **AC-1: supported** (T1 scope). Sources read at start; session usable; User scope; FX_ItemsTile closed clean; FX_CustomerPortal opened via recent forms; tree as accepted in EXP-114; GridItems binding and Miscellaneous rows recorded (with Tile Form); ButtonSignIn2 Primary blank; Event Handlers and Collections recorded; baseline console 2 errors recorded. Evidence: t1-01 to t1-17, readings file. Limits: see Deviations.
- AC-2 to AC-5: not yet due (T2 to T6).

## T2 GridItems Tile Form and tile setting (2026-10-19)

Brief: T2 only. Bounded instruction: two Designer Saves at most; no FX_SignInBtn, no ButtonSignIn2 change, no Regenerate.

### Start state (read-only, before any action)

- Designer tab 0 (current; tab list taken first): `designer/default.aspx?MGForm=FX_CustomerPortal`. Web Client tab 1 not selected or touched in T2.
- FX_CustomerPortal open; ScopeType User / ScopeName = signed-in user; Save and Regenerate Form disabled; no dialog or list; Details on Components; Properties on ButtonSignIn2 (left from T1, Events expanded).
- Console baseline: **2 errors, 0 warnings** (start, and after every action in T2: no rise).
- Evidence: `evidence/EXP-117/t2-00-start-state.png`.
- Full untargeted snapshot at start was too large to return inline (tool saved it outside the repository; not read). Targeted reads were used from then on (recorded as the size rule).

### Step A: GridItems Tile Form = FX_ItemsTile, Save 1 of 2 (performed)

1. GridItems selected through its Components Type cell (`Grid`, Components grid; row click not used). Properties header "GridItems (Grid)".
2. Tile Form (Miscellaneous, Specific Attributes) list arrow clicked: list opened. Options as displayed (nine, unchanged from T1): FX_ItemsTile; WSFormBuilderFormTypeTile; WSFormBuilderLayoutsTile; WSFormBuilderLayoutTypeTile; WSFormBuilderTemplateWidgetListTile; WSFormWizardCategoryTile; WSFormWizardTile; WSRuntimeBuilderFormTypeTile; WSRuntimeBuilderLayoutTypeTile.
3. Option **FX_ItemsTile** clicked (list option click; no keyboard). Field then showed FX_ItemsTile; Save still disabled (uncommitted).
4. Field committed by clicking the Description row label "Tile Form" (list was already closed, so no intercept). Save then enabled.
5. Miscellaneous before Save: `evidence/EXP-117/t2-01-tile-form-selected-before-commit.png` (value shown, Save greyed before commit) and `evidence/EXP-117/t2-02-misc-before-save-a.png` (committed; Save enabled; Tile Form FX_ItemsTile; Tile When blank).
6. **Designer Save 1**: toolbar Save clicked once. Response: toast "Save — Form [FX_CustomerPortal] and global object(s) were saved." Save state after: disabled. Console: 2 errors, 0 warnings. Evidence: `evidence/EXP-117/t2-03-save-a-response.png`. Tile Form still FX_ItemsTile after the Save.

### Step B: tile setting = Tile When = Always, Save 2 of 2 (performed)

1. Ambiguity check: the Miscellaneous row directly below Tile Form is **Tile When** (confirmed by the targeted read of its row; no other row sits between). Its list offers exactly four options: **Always**; <n> (tile when width < n char units); Interpreted values (variables, keywords); Never. Only one candidate row offers Always.
2. Tile When list arrow clicked (its arrow ref was current from the snapshot read after Save 1). A targeted read of the combobox returned a reference error once (see stale-reference counts); one fresh untargeted snapshot was taken as the recovery allowance and the list's option refs were read from it.
3. Option **Always** clicked (list option click, cell e2791 in the list read). The list closed. The field's Save state before the commit was not captured (no screenshot taken between steps 3 and 4), so this is not claimed.
4. Field committed by clicking the Description row label "Tile When" (no intercept: list already closed). Save enabled.
5. Miscellaneous before Save: `evidence/EXP-117/t2-04-misc-before-save-b.png` (Tile Form FX_ItemsTile; Tile When Always; Save enabled).
6. **Designer Save 2**: toolbar Save clicked once. Response: toast "Save — Form [FX_CustomerPortal] and global object(s) were saved." Save state after: disabled. Console: 2 errors, 0 warnings. Evidence: `evidence/EXP-117/t2-05-save-b-response.png`; Miscellaneous after Save 2 visible in the same image: Tile Form FX_ItemsTile, Tile When Always.

### T2 end state

- FX_CustomerPortal open, User scope, clean (Save disabled per the screenshot after Save 2; the Regenerate Form button's state was not read after Save 2), no dialog, no list open. Designer console 2 errors, 0 warnings.
- GridItems selected; Properties Miscellaneous shows Tile Form FX_ItemsTile and Tile When Always; Client Grid Pagination None, Group/No Row Header/No Scroll/Stretch Columns False, Grid Button Height 0 (unchanged from T1).
- Binding Type and Binding unchanged (Secondary Collection Grid; objects2) per the T2 readings in the Properties tree.
- Not done (out of T2): no FX_SignInBtn handler; ButtonSignIn2 not changed (Primary still blank per T1); no Regenerate; no close/reopen.

### T2 limitations (audit)

- The T1 Escape qualification stands (six lists closed with Escape in T1, no option chosen). T2 closed both of its lists by option click and field commit, not Escape.
- The two Description-row intercepts from T1 (Tile When, while its list was open) were not repeated; in T2 the list was closed before the commit click.
- Client Grid Pagination options below the visible area were not read (T1 limitation; not revisited).
- Two "Ref not found" errors occurred in T2 (GridItems row snapshot; the Tile When combobox), each recovered with one fresh untargeted snapshot.
- Save toast text was read from the screenshot (visible text), not from the network or the database. This is same-session UI evidence only.

## T3 FX_SignInBtn event handler (2026-10-19)

Brief: T3 only. One New (+), one Designer Save, Parameters collection FX_Items. No T4 (ButtonSignIn2 Primary) and no Regenerate.

### Start state (read-only, before any action)

- Designer tab 0 (tab list taken first; tab 0 was already current on `designer/default.aspx?MGForm=FX_CustomerPortal`). Tab 1 (Web Client) not selected or touched.
- FX_CustomerPortal; ScopeType User / ScopeName = signed-in user; Save and Regenerate disabled; no dialog or list open. Console **2 errors, 0 warnings**.
- Miscellaneous (GridItems) still showed Tile Form FX_ItemsTile and Tile When Always (T2 values present in-session). Evidence: `evidence/EXP-117/t3-01-event-handlers-before-new.png` (also shows the Event Handlers table empty: no FX_SignInBtn existed before T3).

### Steps (performed)

1. **Event Handlers tab** selected (Details tab strip; no change). Table empty before New.
2. **New (+)** clicked once (Event Handlers bottom-left toolbar, first of five buttons). Console 2 errors, 0 warnings.
3. **Event Handler dialog** recorded before typing: title "Event Handler"; one field "Name:" (an editable combobox with a dropdown arrow, empty); buttons OK, Cancel (and a close X). Screenshot `t3-02-event-handler-dialog.png`.
4. **Name typed** "FX_SignInBtn" key by key (slow typing, 12 characters, one entry). Field showed FX_SignInBtn; screenshot `t3-03-event-handler-name-typed.png`. Typed entries: 1; corrections: 0.
5. **Dialog OK** clicked once. Dialog closed. Console 2 errors, 0 warnings. The page URL lost its `MGForm` parameter (`designer/default.aspx`), as the EXP-102 and EXP-114 records describe for dialog OK; the Form stayed displayed as FX_CustomerPortal. Screenshot `t3-04-handler-row-after-name-ok.png` (handler row FX_SignInBtn appears; Save became enabled because the Form is now dirty; no Save has been made).
6. **Event To Handle property grid** (every row, read after expanding Response with the grid's Expand control, one click; the Response row click alone only selected it):
   - Event: FX_SignInBtn (combobox, not changed)
   - Description: blank
   - Sequence: 0
   - Disabled: False (list-type row)
   - Response (group): Type = blank before T3 step 7; Parameters = blank before step 8; Edit in-line Script = blank
   - Screenshot `t3-05-event-to-handle-rows.png` (Response selected; Expand used once).
7. **Response Type** list opened (Type row under Response, list arrow read from a current snapshot). Options recorded (40 entries, read from the list): Add Breadcrumb; Add entry to the Audit Log; Binary Value Action; Collection Copy; Collection Delete; Collection Init with Auto Insert Row; Collection Make Current; Collection Navigate; Collection New; Collection Notes; Collection Notes for Current; **Collection Refresh**; Collection Refresh Current; Collection Save; Collection Validate; Conditional Action; Execute EXE or other program; Form Script Method; Generate Application Event; Generate event; Get Location From Browser; Goto Explorer Folder; Goto Form; Goto Form Page; Goto Tab; Goto URL; Inline Script; Invoke User Control; Load Collection; Method Call; Print Preview; Prompt; Run Background Task; Run Form; Run Form as Linked Child; Run Form as Modal Child; Run Form to Retrieve Filter; Run Script; Send Web Container Message; Set Values; Show Banner; Timer. Screenshot `t3-06-response-type-list-open.png`.
   - **Collection Refresh** clicked (exact entry; not "Collection Refresh Current"). Screenshot `t3-07-response-type-after-option.png` (Type shows Collection Refresh; Save enabled; not yet committed).
   - Committed by clicking the Description row label "Type" (`t3` step; no intercept). Console 2 errors, 0 warnings.
8. **Parameters ellipsis** clicked **once** (Response > Parameters, "Open Edit Property Dialog"). Dialog **"Event Handler Parameters"**, recorded **before any choice**: screenshot `t3-08-parameters-dialog-before-choice.png`. Fields and defaults as displayed:
   - General: Error Message (blank); Success Message (blank); Only When Current Collection Is: **\<all collections\>**; Only When Platform Is: (blank); Keep: (blank, focused); checkboxes Ignore Failure, Message as Toast?, Disabled (all unchecked).
   - Edit Collection Action Refresh: Collection (blank combobox); Navigation Action: **First** (grey, default).
   - Buttons: OK, Cancel, Help.
9. **Collection** list opened (combobox Open arrow, read from the dialog snapshot). Screenshot `t3-09-collection-list-open.png`. Options: **primary collection**; **secondary collection 2**. No entry names FX_Items on its face (see Judgement below).
   - **secondary collection 2** clicked. Screenshot `t3-10-parameters-collection-chosen.png` (Collection = secondary collection 2; Navigation Action First; every other field unchanged).
10. **Parameters OK** clicked **once**. Dialog closed. Screenshot `t3-11-after-parameters-ok-handler-row.png`.
    - Parameters summary as displayed in the handler row and the property grid: **"object2"** (exact accessibility text: `object2`).
11. **Handler row before Save** (verified by accessibility text, `t3-11`): Sequence 0; Response Type **Collection Refresh**; Disabled false; Response Parameters **object2**. Event To Handle Event: FX_SignInBtn.
12. **Designer Save** (one, the only T3 Save): first attempt returned "Ref e2220 not found" (the click was **not dispatched**; recovered with one fresh untargeted snapshot; the Save button had ref e2220 in that snapshot). Second attempt (single click) succeeded. Response: toast **"Save — Form [FX_CustomerPortal] and global object(s) were saved."** Save state after: disabled (greyed in `t3-12`). Console 2 errors, 0 warnings. Screenshot `t3-12-save-response.png`. Handler row after Save: FX_SignInBtn; Collection Refresh; false; object2.

### Judgement on the collection parameter (for operator review)

- The brief allows FX_Items to be selected "by an entry naming FX_Items, or objects2 only if the visible list also establishes that it corresponds to FX_Items". The dialog's entries are **primary collection** and **secondary collection 2**; neither names FX_Items.
- The mapping was taken from the Form's **Collections** tab, read in T1 (same Designer session, not re-read in T3 because the dialog was modal): "Primary Collection: FX_Orders" and "Secondary Collection 2: FX_Items". The Form has exactly two collections; "secondary collection 2" is the only secondary entry offered.
- The stored/displayed summary is "object2", which matches the naming convention recorded in EXP-114 (`objects2` binding = Secondary Collection 2: FX_Items). That convention is itself an inference recorded there, not verified here.
- **Not verified in T3:** that the saved parameter resolves to FX_Items. The T6 readback should re-read the Collections tab and the handler row; it cannot show the database value.

### T3 end state

- FX_CustomerPortal open; User scope; **clean** (Save disabled in `t3-12` after the one Save; the Regenerate Form button's state was not read after the Save). No dialog, no list, no editor open.
- Details on Event Handlers; FX_SignInBtn row selected; Properties still GridItems (view state only).
- Console 2 errors, 0 warnings at the end.
- Not done (out of T3): ButtonSignIn2 Primary (still blank); no Regenerate; no close/reopen; no second handler.

### T3 limitations (audit)

- Designer URL lost `MGForm` after the Event Handler dialog OK (URL-only effect; the Form stayed displayed).
- The first Save click was "Ref e2220 not found"; the recovery was one fresh untargeted snapshot before the second, single click. The Save was therefore invoked once in T3 (the failed attempt did not invoke it).
- A targeted read of the Event To Handle tree (ref e2194) returned "Ref not found" once; recovered with one fresh untargeted snapshot (within allowance).
- Parameters summary is the displayed string "object2"; the FX_Items mapping is judgement (see above).
- The Collections tab was not re-read in T3 (modal dialog open); it was read in T1.
- Save toast read from the screenshot (visible text); same-session UI evidence only.

## Operator disposition of T3 (2026-10-19, recorded at the start of T4)

- Accepted: "secondary collection 2" is accepted as FX_Items for this experiment (the collection parameter choice stands).
- Accepted: the existing FX_SignInBtn handler (Collection Refresh; parameter object2 as displayed) stays unchanged.
- Accepted: browser_type entry of FX_SignInBtn was compliant slow key-by-key entry (no correction needed).
- Accepted: the T1 Escape presses (six Miscellaneous lists closed with Escape, no option chosen) are accepted.
- **Unresolved, carried forward:** "object2" (displayed) versus "objects2" (the GridItems binding) remains unresolved for the later runtime experiment. It is not resolved in T4 or T6 and no claim is made about it here.

## T4 ButtonSignIn2 Events > Primary = FX_SignInBtn (2026-10-19)

Brief: T4 only. Select ButtonSignIn2 (Region02: signinpage under FlexLayoutMain), set Events > Primary to FX_SignInBtn by list option click, one Designer Save. No Regenerate, no close/reopen, no change to GridItems, FX_ItemsTile, the handler or any global object.

### Start state (read-only, before any action)

- Tab list taken first. Tab 0 (Designer) current; tab 1 (Web Client) not selected or touched in T4.
- Designer URL is `designer/default.aspx` (no `MGForm` parameter since the T3 Event Handler dialog OK; the Form remains displayed). Displayed Form: FX_CustomerPortal (Form tab title). ScopeType User / ScopeName = signed-in user. Save and Regenerate Form disabled. No dialog or list open.
- Console baseline: **2 errors, 0 warnings**.
- Session usable: no expiry, sign-in page, or server-event error observed.
- Full untargeted snapshots at start and in this task were kept shallow (depth 2 to 4) and returned inline; no snapshot was saved to a file and grepped.

### Steps (performed)

1. **Details tab strip** (targeted read of e317), then **Components** tab clicked (tab shows selected; console 2 errors, 0 warnings).
2. **ButtonSignIn2 selected by its Type cell** (Components grid row `ButtonSignIn2 PushButton 0 FlexLayoutMain 0`, Container FlexLayoutMain; the tree shows it under `Region02: signinpage`, which sits under FlexLayoutMain). Row was not used alone. Properties header "ButtonSignIn2 (Button)"; Name ButtonSignIn2; Caption FX_sSignIn (untouched); Type PushButton; Theme Class FX_BlueButton; Binding Type None; Flex Attributes "Index: 2 Target: signinpage". Screenshot `t4-01-buttonsignin2-selected.png`. Console 2 errors, 0 warnings.
3. **Events group read before any change** (targeted read of the Properties tree): Events expanded; **Primary blank** (the baseline the brief expects); Data Change, Lose Focus, Gain Focus blank; Drag From Events 0 event(s); Drop On Events 0 event(s). Not populated, so no stop was needed.
4. **Primary list opened once** via its list arrow (Events > Primary value cell arrow). Screenshot `t4-02-primary-list-open.png`. Options read from the list (the first option and the rest): **FX_SignInBtn** (first); StdAppLaunchInbox; StdAppLaunchTasks; StdCurCompAction; StdCurCompAdd; StdCurCompClipboardCopy; StdCurCompClipboardCut; StdCurCompClipboardPaste; StdCurCompClipboardPasteAppend; StdCurCompClipboardPasteAppendCompleted; StdCurCompClipboardPasteOverwrite; StdCurCompClipboardPasteOverwriteCompleted; StdCurCompCriticalDisplaySettings; StdCurCompCriticalRefresh; StdCurCompCriticalSetup; StdCurCompCriticalSnapshots; StdCurCompDetails; StdCurCompEditFlexLayout; StdCurCompEditGridColumns; StdCurCompFind; StdCurCompGraphProperties; StdCurCompSearch; StdCurCompShowMenu; StdCurCompSort; then the remaining entries, all standard Std* system events (StdForm*, StdObject*, StdQueryForm*, StdWebContainerMessageReceived, StdWebLocationInfoReceived), read in full in the snapshot and not individually listed here. Only one FX_SignInBtn entry is in the list.
5. **FX_SignInBtn option clicked** (cell e2911, the first option; list option click, no keyboard). List closed on selection.
6. **Committed** by clicking the Properties Description row label (the label read "Primary"). No intercept. Console 2 errors, 0 warnings.
7. **Events group before Save**: screenshot `t4-03-events-group-before-save.png` shows Primary = **FX_SignInBtn**, Data Change / Lose Focus / Gain Focus blank, Drag From and Drop On 0 event(s); Save enabled; no dialog or list open.
8. **Designer Save (the one T4 Save)**: toolbar Save clicked once (ref e15 from a current snapshot). Response: toast **"Save — Form [FX_CustomerPortal] and global object(s) were saved."** Screenshot `t4-04-save-response.png` (Primary FX_SignInBtn visible after Save). A follow-up snapshot read the toolbar: **Save disabled, Regenerate Form disabled**; Undo was not disabled in that snapshot (not used; Undo is out of scope). Console 2 errors, 0 warnings. The Form is clean.

### T4 end state

- FX_CustomerPortal open; User scope; clean (Save and Regenerate Form disabled per the post-Save snapshot). ButtonSignIn2 selected in Properties (view state only). Details on Components. No dialog, no list, no editor open.
- Designer console 2 errors, 0 warnings at the start and after every action (no rise, so no stop was needed).
- Not done (out of T4): no Regenerate Form click; no close or reopen; no change to GridItems, FX_ItemsTile, the FX_SignInBtn handler (not re-opened; its Parameters dialog was not reopened), any other component, or any global object.

### T4 limitations and carried-forward qualifications

- The T1 Escape qualification (six Miscellaneous lists closed with Escape, no option chosen) stands; operator accepted it on 2026-10-19 (see disposition above).
- The unresolved **object2 versus objects2** distinction is carried forward unchanged to the runtime experiment. It was not resolved in T4.
- The Primary option list is long; only the first option (FX_SignInBtn) and the visible entries were checked; no other option was chosen.
- The Save toast was read from a screenshot (visible text). This is same-session UI evidence only; it is not persistence or database evidence.
- Events group expansion: its state was already expanded (left from T1); no expander click was needed in T4.

## T5 Regenerate Form (2026-10-19): BLOCKED at the availability gate, no click

Brief: T5 only. Mandatory read-only availability check first; click the toolbar Regenerate Form exactly once only if it is visibly enabled and every prerequisite holds. Do not begin T6.

### Procedural reconciliation (carried forward from the T4 brief)

- T4 read only the first 30 lines of AGENTS.md. T5 read the complete AGENTS.md (240 lines) before any browser action. Nothing in the complete file changes the T1 to T4 procedure.
- Tab list taken before any selection; tab 0 (Designer, current) was not re-selected. Tab 1 (Web Client) not touched.

### Availability gate (read-only)

1. Designer URL `designer/default.aspx` (no `MGForm` parameter since the T3 dialog OK). Form tab title and Properties header show **FX_CustomerPortal**; ScopeType **User** / ScopeName = signed-in user (status bar).
2. **Save: disabled** (accessibility snapshot `button "Save" [disabled]`), consistent with the T4 Save having been committed.
3. **Regenerate Form: disabled** (accessibility snapshot `button "Regenerate Form" [disabled] [ref=e16]`). The control is greyed in the toolbar of `evidence/EXP-117/t5-01-availability-gate-regenerate-disabled.png`.
4. No dialog or list open (no combobox expanded; no dialog role in the snapshot).
5. Properties visibly show **ButtonSignIn2 (Button)** with Events > Primary = **FX_SignInBtn** (T4 value present; read-only, not changed).
6. Designer console **2 errors, 0 warnings** at the start of the task and in every tool output of T5.
7. Session usable: no expiry, sign-in page, "Logout Successful" or server-event error observed.

### Decision

- Step 3 of the brief applies: **Regenerate Form is not visibly enabled.** Stop blocked. No click was made on it. No property was changed to try to activate it, no Form was closed or reopened, no Save was invoked, no other route was tried (no alternate Regenerate mechanism, no menu, no keyboard shortcut), and the Form was not reloaded.
- Regenerate Form clicks in T5: **0**. Regenerate clicks cumulative (T1 to T5): **0**. The one authorized Regenerate has therefore **not been used**.
- The Form is clean, so the action gate's other conditions (clean, FX_CustomerPortal active, User scope) hold, but the availability gate itself failed.

### Observations and unresolved interpretation (observed only)

- The disabled Regenerate state was observed after the T4 Save and again in this task. The brief describes Regenerate as available after the T2 to T4 changes are saved; the observation does not match that expectation.
- The EXP-102 Outcome (read in T1) records that Regenerate became enabled after a collection change raised a regeneration prompt, and that a regeneration left Save, Undo and Regenerate disabled. This suggests Regenerate is enabled only when the Designer has a pending regeneration need. In EXP-117, no regeneration prompt was observed at the T3 handler creation or the T4 Primary change (the T3 and T4 readings did not show a prompt). **Why Regenerate is disabled here is unresolved**; it is not established from this task whether the control should be enabled for these changes.
- No claim is made that Regenerate is unavailable by design, or that the T2 to T4 changes are regenerated on Save. Persistence is not verified (T6 is needed for that, and only after the operator disposes of T5).

### Screenshots (T5)

- `evidence/EXP-117/t5-01-availability-gate-regenerate-disabled.png`: FX_CustomerPortal, User scope; Save greyed; Regenerate Form greyed in the toolbar (as the toolbar is shown in the viewport); ButtonSignIn2 Primary FX_SignInBtn in Properties. Proves the disabled Regenerate state at the time of the gate. Does not prove the reason the control is disabled, or the saved state at the database level.
- No before-click or after-response screenshot was taken, because no click was made.

### Operator disposition needed

1. Decide whether Regenerate Form should be enabled for the T2 to T4 changes. If the operator expects a regeneration need to show as a prompt or an enabled control, that needs explaining before any further run.
2. Decide whether T6 may proceed as a close/reopen readback without a Regenerate. (The brief's T6 readback depends on the Form being clean; the close/reopen can still show whether the saved changes persist in the same session, but the regeneration step would remain outstanding.)
3. The Regenerate authorization (operator, 2026-10-18) remains unused and remains available for a later bounded run.

### T5 end state

- FX_CustomerPortal open in the Designer; User scope; clean (Save disabled); Regenerate Form disabled and not clicked; no dialog, list, editor or unsaved change open. Designer console 2 errors, 0 warnings. Web Client tab not touched.
- Not done (out of T5): Regenerate click; T6 close/reopen; any further Save.

## T6 readback and final audit (2026-10-19): BLOCKED before the close (session signal)

### Operator ruling recorded at the start of T6 (from the T6 brief, 2026-10-19)

- T6 is explicitly authorized on 2026-10-19. The operator replaced AC-3 with the finding that Regenerate Form was unnecessary and correctly not performed. Under the amended AC-3 the disabled Regenerate state (observed at T5) is the recorded outcome; **zero Regenerate clicks** in the whole run; the one 2026-10-18 Regenerate authorization is **expired/unused**.
- Preserved earlier rulings: the T1 Escape closures of six Miscellaneous lists (accepted); the T3 collection mapping "secondary collection 2" accepted as FX_Items (and "object2" versus "objects2" remains **unresolved** for the runtime experiment); slow key-by-key entry of FX_SignInBtn accepted as compliant.

### Start state (read-only)

- Tab list taken before any selection: tab 0 = Designer (`designer/default.aspx`, current); **tab 1 = title "Logout Successful"** (URL `.../session/slo/signoutsuccess`). Tab 1 was not selected.
- Designer snapshot (fresh, untargeted, depth 2): FX_CustomerPortal active (Form tab); ScopeType User; Save disabled; Regenerate Form disabled; no dialog; no list; no server-event error text observed in the snapshot. Console **2 errors, 0 warnings** (baseline unchanged).

### Gate decision

- The brief's stop rule for a signed-out session requires a server-event error together with a portal tab reading "Logout Successful". The portal-tab half is present; a server-event error was **not** observed in the Designer snapshot.
- Because the session usability prerequisite cannot be confirmed and the Form close is a server-side lifecycle action, **T6 did not perform the close, the reopen, or any readback**. No click, no Save, no Regenerate, no Edit-menu probe, no re-login, no navigation and no reload was attempted. The Designer state is unchanged: clean, FX_CustomerPortal open, no dialog or list.
- This is the operator's decision point: either confirm the Designer session is still usable (then T6 can continue as a new bounded step), or re-establish the session through the operator as EXP-107 requires.

### Readback status (T6)

- Close: **not performed**. Reopen: **not performed**. Readback of GridItems (Binding, Tile Form, Tile When), the FX_SignInBtn handler row, ButtonSignIn2 Primary, the Components tree and the Collections entries after an ordinary close/reopen: **not performed**. AC-4 is therefore **not yet assessable**; the pre-close values remain the only observations (T2 to T4, same session).
- The T4 and T5 observations stand as same-session observations only (see those sections). Nothing here claims persistence.

### Screenshots (T6)

- `evidence/EXP-117/t6-01-start-state-tabs-and-designer.png` (see Worker-written file inventory). Proves the Designer state at the gate; does not prove the server session state.

### Final audit (partial; T6 blocked)

- AC-1: supported from T1 (sources read; User scope; FX_ItemsTile closed clean; FX_CustomerPortal opened from recent forms; tree and binding recorded; ButtonSignIn2 Primary blank at T1; Event Handlers and Collections recorded; baseline console 2 errors).
- AC-2: supported for T2 (Tile Form FX_ItemsTile; Tile When Always; two Saves with toasts), T3 (handler; Collection Refresh; FX_Items collection chosen as "secondary collection 2" with the Parameters dialog recorded before choice; one Save), T4 (Primary = FX_SignInBtn; one Save). Limitations: saved values are same-session UI observations; the object2 versus objects2 mapping is unresolved.
- AC-3 (operator-amended): regeneration judged unnecessary by the operator; Regenerate Form observed **disabled** at the T5 gate and in T6 start; **zero** Regenerate clicks; authorization expired/unused. No Regenerate occurred.
- AC-4: **not assessable** (close/reopen blocked; see gate).
- AC-5: partially supported to date: no change to other components, events, handlers, Forms or global objects observed in T1 to T5; FX_ItemsTile closed (T1) and not otherwise changed; no unload, Delete Form Definition or Select Form OK; no drag, Undo, runtime action or checkout action; User scope throughout. Re-login count 0.

### Cumulative action audit (T1 to T6, exact)

- Tab lists: 6 (T1 1, T2 1, T3 1, T4 1, T5 1, T6 1). Tab selects: 2 (T1 only; T6 selected none).
- Browser clicks: attempted 52; dispatched 49 (T1 21 successful plus 2 intercept timeouts not dispatched; T2 9; T3 13 dispatched plus 1 Save Ref-not-found not dispatched; T4 6). Not dispatched 3. T5 0; T6 0.
- Coordinate actions: 1 click (T1, ButtonSignIn2 Events expander at 1586,495); 1 mouse move and 1 wheel (T1). None in T2 to T6.
- Key presses: 6 Escape (T1; no option chosen).
- Typed entries: 1 (T3, FX_SignInBtn, slow key-by-key). Corrections: 0.
- Untargeted snapshots: 30 (T1 11, T2 3, T3 8, T4 6, T5 1, T6 1). Targeted reads with content: 42. Find: 1 (T1). Ref-not-found errors: 4 (T2 2; T3 2 = one targeted read and one Save click), each followed by one fresh untargeted snapshot.
- Screenshots: 40 (T1 17, T2 6, T3 12, T4 4, T5 1); T6 start-state screenshot to be counted if written (see inventory).
- Lists opened: 12 (T1 7 view-only, none chosen; T2 2, T3 2, T4 1 with one option chosen each); lists closed: 12; options chosen: 5.
- Dialogs opened: 2 (T3: Event Handler; Event Handler Parameters), OK 2, Cancel 0.
- Prompts: 0 in all tasks (the URL losing the MGForm parameter after dialog OK is not a prompt).
- Designer Saves: 4 (T2 2, T3 1, T4 1), each with a saved toast; none retried; one failed Save invocation (T3, Ref not found, not dispatched).
- Regenerate Form clicks: **0** (cumulative).
- Form closes: 1 (T1 FX_ItemsTile). Form opens: 1 (T1 FX_CustomerPortal via recent forms). T6 close and reopen: **0 (blocked)**.
- Intercepted timeouts: 2 (T1). Server-event errors: 0. Console rises: 0 (2 errors, 0 warnings at every reading).
- Re-logins: 0. Session-expiry procedure runs: 0. Navigations: 0. Refreshes or restarts: 0. Runtime actions: 0. Checkout actions: 0. Unload: 0. FormSync or deployment: 0.

## T6 continuation after manual re-login (2026-10-19)

### Operator ruling recorded at the start of this continuation

- The operator reports that the Mongoose session was manually re-established on 2026-10-19 (EXP-107 manual sign-in). This worker did not authenticate, did not use the session-expiry procedure, and did not record any credential.
- Conditional lifecycle procedure (operator): if FX_CustomerPortal is open, close it once and reopen it once; if it is not open, open it once through the Form menu recent-forms entry, counting that open as the T6 reopen.
- Screenshot inventory must be reconciled to the actual files in `evidence/EXP-117/` (the operator's reported per-task total of 41, not 40, is to be checked against the files).
- Preserved rulings: AC-3 amended (Regenerate unnecessary, not performed, zero clicks, authorization expired); T1 Escape closures accepted; T3 collection mapping "secondary collection 2" accepted as FX_Items; slow key-by-key entry accepted; T4 partial AGENTS.md reading; object2 versus objects2 unresolved for the runtime experiment.

### Start state (read-only, this continuation)

- Tab list taken before any selection: tab 0 = Designer, current, URL `designer/default.aspx?MGForm=FX_ItemsTile`; tab 1 = Mongoose portal (title "Mongoose"; not "Logout Successful"). Tab 1 not selected.
- Fresh untargeted snapshot (depth 2) of tab 0: **FX_ItemsTile** is the open Form (Form tab title); ScopeType **User**; Save disabled; Regenerate Form disabled; no dialog; no list.
- Designer console baseline in this continuation: **2 errors, 0 warnings** (recorded as the new baseline; same count as before re-login).
- Interpretation (unresolved): FX_CustomerPortal is **not** the open Form after re-login. The Designer shows FX_ItemsTile, which the brief's T1 gate had closed earlier. Why FX_ItemsTile is displayed after the re-login is not known to this worker (the operator's re-login may have reloaded the Designer on that Form).

### T6 continuation: lifecycle actions performed (in order)

1. Form menu opened (Form navigation button, one click). Menu read by a targeted snapshot: recent-forms entries FX_ItemsTile, FX_CustomerPortal, FX_Items, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01 (plus Definition, Sign Out, IDO Properties, IDOs). Not used: Sign Out, Definition, IDOs, IDO Properties.
2. **FX_CustomerPortal opened once** through the recent-forms entry (menu item FX_CustomerPortal, one click). The Designer URL became `MGForm=FX_CustomerPortal`; the tab list then showed **two Form tabs**: `FX_ItemsTile` (still open, clean, not closed by this worker) and `FX_CustomerPortal` (selected). No save prompt, no scope dialog, no server-event error appeared. Console 2 errors, 0 warnings after the open.
3. Details panel expanded (Expand Panel layout control, one click). Components tab and Components grid Expand (view-only) used to show the tree; Properties expand-all (view-only) and one coordinate click on the Specific Attributes group expander (1596,784, a group expander with no accessible ref) used to show Tile Form and Tile When. Event Handlers tab and its grid Expand (view-only) used to show the handler row.
4. Components Type cells used to select GridItems and then ButtonSignIn2 (not the menu ButtonSignIn). No component was placed, moved, renamed or resized.
5. **No Save, no Regenerate Form, no close of FX_CustomerPortal, no dialog, no list, no typed entry.** Nothing was changed in the Form.
- Console count after every action: **2 errors, 0 warnings** (no rise).

### T6 continuation: readback results (observed; same Designer session after the operator's re-login)

| Item | Observed value (as displayed) | Source |
|---|---|---|
| Form | FX_CustomerPortal, Form Type Flex, Name FX_CustomerPortal, Unit Char, Size 120; 40 (Form properties) | t6b-02 (Form properties panel) |
| ScopeType / ScopeName | User / signed-in user | status bar, all screenshots |
| Save / Regenerate Form | both disabled (clean) | toolbar snapshot, every reading |
| Collections | "Primary Collection: FX_Orders" and "Secondary Collection 2: FX_Items" | t6b-02 (Collections tab, visible text) |
| Tree (Components grid) | Pane (00) > flexlayoutPane_FX_CustomerPortal > FlexLayoutHeader (Region00 header StaticHeader; Region01 user StaticCustIcon, StaticCustID); FlexLayoutMain > Region00 menu (ButtonSignIn, ButtonHome, ButtonCart), Region01 spacer1, **Region02: signinpage** (StaticSignIn, StaticImage1, StaticCustID2, EditCustID, **ButtonSignIn2**), Region03 homepage > FlexLayoutHome > Region00 header (StaticHome), Region01 spacer, **Region02: grid (GridItems; gridColumn1_USER, gridColumn2_USER)**, Region03 spacer2, Region04 buttons > FlexLayoutButtons (count, spacer, cart, cartpage, spacer2), FlexLayoutFooter (Region02 footer, Region00 UNKNOWN0). | t6b-03 (screenshot) and the Components grid snapshot text |
| GridItems Type | Grid; Name GridItems; under FlexLayoutHome | Components grid snapshot text; Properties header "GridItems (Grid)" |
| GridItems Binding Type | **Secondary Collection Grid** (unchanged) | Properties Data Source group snapshot text |
| GridItems Binding | **objects2** (unchanged) | Properties Data Source group snapshot text; Components Data Source column "objects2" |
| GridItems Miscellaneous > Specific Attributes | Client Grid Pagination **None**; Grid Button Height **0**; Group **False**; No Row Header **False**; No Scroll **False**; Stretch Columns **False**; **Tile Form FX_ItemsTile**; **Tile When Always**; Free-Form Data Type (collapsed group, not read) | t6b-05 (screenshot), Properties snapshot text |
| GridItems Events | Drag From Events 0 event(s) and Drop On Events 0 event(s) displayed. The Primary row was only partly visible in the screenshot and its value was not read; Data Change, Lose Focus and Gain Focus were not read in text. GridItems events were not part of the T6 readback targets. | t6b-05 (screenshot, partly visible) |
| Event Handlers (Form) | One handler group **FX_SignInBtn**; row Sequence **0**, **Response Type Collection Refresh**, Disabled **false**, Response Parameters **object2** (as displayed) | t6b-06 (screenshot), grid snapshot text |
| ButtonSignIn2 (signinpage) | Name ButtonSignIn2; Caption FX_sSignIn; Type PushButton; Theme Class FX_BlueButton; Binding Type None; Binding blank; Flex Attributes "Index: 2 Target: signinpage" | Properties snapshot text |
| ButtonSignIn2 Events | **Primary = FX_SignInBtn**; Data Change, Lose Focus, Gain Focus blank; Drag From Events 0 event(s); Drop On Events 0 event(s) | t6b-07 (screenshot), Properties snapshot text |
| ButtonSignIn2 "Event to generate" column (Components grid) | FX_SignInBtn | Components grid snapshot text |
| Canvas, grid band (Region02: grid, approx. x 670 to 885, y 262 to 600 on screen) | The grid shows a three-cell header strip with empty cells; no tile content or rows are rendered in the Designer canvas band. The canvas is the Designer design view, so runtime rendering is not expected here. | t6b-02 and t6b-05 (screenshots) |
| Canvas, other bands | Header "Customer Portal" band with StaticHome label; left menu ButtonSignIn/Home/Cart; sign-in panel with Customer ID field and Sign In button (ButtonSignIn2); image placeholder. | t6b-02 |

Values **not** read in T6: Free-Form Data Type group; Specific Attributes beyond the rows listed; the Parameters dialog (deliberately not opened); the Collections child rows (the Collections tree shows two top-level entries only, no children read).

### T6 continuation: AC evaluation and final audit (documentation only)

- **AC-1: supported.** Sources read at the start of each task (AGENTS.md, the named transcript lines, recipes and the named Outcome sections). Session usable in T1 and in this continuation after the operator's manual re-login (no expiry, no server-event error, no sign-in page observed by this worker). User scope throughout. T1: FX_ItemsTile closed clean (t1-gate; no save prompt) and FX_CustomerPortal opened through recent forms. Tree as accepted in EXP-114 (t1-01, t6b-03). GridItems binding and Miscellaneous rows recorded with options (T1, t1-02..t1-13). ButtonSignIn2 Primary blank at T1 (t1-16, t1-17). Event Handlers and Collections recorded (T1 t1-14; T6 t6b-02, t6b-06). Baseline console 2 errors, 0 warnings (T1; re-confirmed at this continuation's start).
- **AC-2: supported with two qualifications.** T2: Tile Form FX_ItemsTile (labels and nine options recorded), tile setting Tile When = Always (four options recorded), two Designer Saves each with the toast "Form [FX_CustomerPortal] and global object(s) were saved." (t2-02..t2-05). T3: handler FX_SignInBtn created (t3-02, t3-04); Response Type Collection Refresh (40 options, t3-06, t3-07); Parameters dialog recorded before the choice (t3-08); collection choice "secondary collection 2" among two entries (t3-09, t3-10); one Save with toast (t3-12). T4: ButtonSignIn2 Primary FX_SignInBtn (t4-02, t4-03), one Save with toast (t4-04). Console recorded after every action (2 errors, 0 warnings throughout). Qualifications: (a) the choice "secondary collection 2" is accepted by the operator as FX_Items, but the dialog itself does not name FX_Items, and the stored/displayed parameter is "object2" (not "objects2"); the mapping is not verified at database level. (b) The Save toasts are visible text in screenshots; this is same-session UI evidence only.
- **AC-3 (operator-amended): supported as amended.** Regenerate Form was judged unnecessary by the operator and was not performed. Regenerate clicks: **0** across the whole run. The disabled control was observed at the T5 availability gate (t5-01; Save and Regenerate greyed), at the T6 start (t6-01 and the T6 snapshot), and in this continuation's snapshots (Regenerate Form disabled, text only; no separate screenshot of that button in T6b). The one 2026-10-18 authorization is recorded as expired and unused. Nothing here claims that Regenerate ran or that it is needed.
- **AC-4: observed with qualifications; NOT an ordinary close and reopen by this worker.** The brief expected the worker to close and reopen the clean Form. At this continuation's start FX_CustomerPortal was **not open** (the Designer displayed FX_ItemsTile), so the worker did not perform a close; it opened FX_CustomerPortal once through the Form menu recent-forms entry, which the operator's instruction counts as the T6 reopen. How the Form came to be closed before re-login is not known to the worker and is unresolved. After the reopen, the readback shows: GridItems Tile Form FX_ItemsTile and Tile When Always (t6b-05); Binding Type Secondary Collection Grid and Binding objects2 (unchanged, snapshot text); the FX_SignInBtn handler row Collection Refresh with parameter displayed as object2 (t6b-06); ButtonSignIn2 Primary FX_SignInBtn (t6b-07); the tree and Collections unchanged (t6b-02, t6b-03); Form open and clean (Save disabled). Limitations: these values were read after an operator re-login and a Form reopen in the same browser session; the worker cannot verify the server copy, so this is **not** cross-session, replay or database-level durability. The FX_Items mapping (object2 versus objects2) remains unresolved for the later runtime experiment.
- **AC-5: supported with qualifications.** No other component, event, handler, Form or global object was changed by this worker in T1 to T6 (the continuation performed no Save, no Regenerate, no typed entry, no list or dialog). FX_ItemsTile was not edited or saved; it was closed once in T1 and was open and clean at this continuation's start. One Designer tab for FX_ItemsTile remains open beside FX_CustomerPortal; this worker did not close it (the brief permits closing FX_ItemsTile only in T1). Regenerate: zero clicks (operator-amended). No unload, Delete Form Definition, Select Form OK, dragging, Undo, runtime action or checkout action. User scope only. Task boundary respected: the continuation stopped after the readback and audit; no Save or Regenerate was attempted. One unintended scroll of the Components tree (pointer over the tree) changed view only; the selection stayed on the intended component.

### Cumulative action audit (T1 to T6, including this continuation; exact where recorded, otherwise marked)

- Tab lists: **7** (T1, T2, T3, T4, T5, T6-blocked, T6-continuation: one each). Tab selects: **2** (T1 only; none in T2 to T6-continuation).
- Browser clicks: attempted **66**; dispatched **61** (includes 2 coordinate clicks); not dispatched **5** (T1: 2 Description-row intercept timeouts; T3: 1 Save "Ref e2220 not found"; T6-continuation: 2 "Ref not found" (Components tab e637 once; Properties expand e1885 once)). Successful ref-based clicks in T6-continuation: 11.
- Coordinate clicks: **2** (T1 ButtonSignIn2 Events expander at 1586,495; T6-continuation Specific Attributes expander at 1596,784). Mouse moves: **3**. Mouse wheels: **5** (T1 1; T6-continuation 4, including one unintended scroll of the Components tree, view only).
- Key presses: **6** Escape (all T1; no option chosen). Typed entries: **1** (T3, FX_SignInBtn, slow key-by-key). Corrections: **0**.
- Snapshots: untargeted **46** (T1 11, T2 3, T3 8, T4 6, T5 1, T6-blocked 1, T6-continuation 16); targeted reads with content **50** (the earlier total of 42 was recorded as an estimate in the T6-blocked audit and is carried as 42 + 8 in this continuation; not re-verified). Find: **1** (T1). Tool-returned snapshot files generated automatically by clicks are written by the tool under `evidence/playwright/` and were not read or counted as worker snapshots.
- "Ref not found" errors: **6** (T2 2, T3 2, T6-continuation 2), each followed by one fresh untargeted snapshot.
- Screenshot captures: **52** (T1 17, T2 6, T3 12, T4 4, T5 1, T6-blocked 1, T6-continuation 11). Surviving files: **48** (see inventory). Four T6-continuation captures were overwritten by a later capture of the same filename (t6b-03 once, t6b-05 twice, t6b-07 once); the surviving file is the last capture.
- Lists opened: **12** (T1 7 view-only, none chosen; T2 2 with option chosen; T3 2 with option chosen; T4 1 with option chosen; T6-continuation 0). Lists closed: 12. Options chosen: **5** (FX_ItemsTile; Always; Collection Refresh; secondary collection 2; FX_SignInBtn).
- Dialogs opened: **2** (T3: "Event Handler" name dialog and "Event Handler Parameters"); OK **2**; Cancel **0**.
- Prompts: **0** in all tasks (no save or scope prompt in T6-continuation; the Designer URL losing its MGForm parameter after a T3 dialog OK is not a prompt).
- Designer Saves: **4** (T2 2, T3 1, T4 1), each with its saved toast; none retried; the T3 Save invocation that failed as "Ref not found" was not dispatched and is not counted as a Save.
- Regenerate Form clicks: **0** (run-wide).
- Delete Form Definition: **0**. Select Form OK: **0**. Double-clicks on Select Form rows: **0**.
- Form-menu opens: **2** (T1 1; T6-continuation 1). Form opens: **2** (T1 FX_CustomerPortal; T6-continuation FX_CustomerPortal reopen). Form closes: **1** (T1 FX_ItemsTile, via its Form-tab close). FX_CustomerPortal closes by this worker: **0** (not performed; the Form was not open at re-login and its earlier closure is unresolved).
- Intercepted timeouts: **2** (T1). Server-event errors: **0**. Console rises: **0** (2 errors, 0 warnings at every reading in every task).
- Re-logins: worker **0**; operator manual re-login **1** (2026-10-19, reported in the brief; the worker did not authenticate or record credentials). Session-expiry procedure runs by worker: **0**.
- Navigations: **0** (no direct URL). Refreshes or restarts: **0**. Runtime actions: **0**. Checkout actions: **0**. Unload: **0**. FormSync or deployment: **0**. Browser JavaScript, console or network inspection: **0**.
- Counts that cannot be reconciled exactly: the 42 earlier targeted-read figure (estimate, see above) and the number of tool-written snapshot files generated by clicks under `evidence/playwright/`, which the worker did not count.

### Worker-written file inventory (final, this continuation's additions)

- Surviving continuation screenshots (7): `evidence/EXP-117/t6b-01-start-after-relogin-fx-itemstile-open.png` (start: FX_ItemsTile open, clean, User scope); `t6b-02-reopened-form-collections-tab.png` (reopened FX_CustomerPortal, Collections entries, canvas, Form properties); `t6b-03-reopened-form-components-tree.png` (expanded tree, top part); `t6b-04-griditems-properties-after-expand.png` (GridItems Properties after Expand); `t6b-05-griditems-miscellaneous-group-reopened.png` (Miscellaneous > Specific Attributes with Tile Form FX_ItemsTile, Tile When Always); `t6b-06-event-handlers-tab-reopened.png` (FX_SignInBtn row, Collection Refresh, object2); `t6b-07-buttonsignin2-events-group-reopened.png` (ButtonSignIn2 Events, Primary FX_SignInBtn).
- Overwritten and not on disk: four earlier captures of the same filenames (see screenshot counts).
- This record (continuation sections, status, final audit): edited. No other file was written by the worker in this continuation.

### Complete worker-written file inventory (EXP-117 evidence and record, T1 to T6 continuation)

- Record: `experiments/EXP-117-hello-world-part-8-phase-2-griditems-tile-form-signin-refresh.md` (created T1; edited T2 to T6 continuation).
- Documentation: `evidence/EXP-117/t1-gate-readings.md` (T1).
- PNG files present in `evidence/EXP-117/` (48 total): t1-01 to t1-17 (17); t2-00 to t2-05 (6); t3-01 to t3-12 (12); t4-01 to t4-04 (4); t5-01 (1); t6-01 (1); t6b-01 to t6b-07 (7).
- Present in `evidence/EXP-117/` but **not in this worker's inventory**: `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md`, `harness-audit-T5.md`, `harness-audit-T6.md`. The worker did not create or edit them in T1 to T6 continuation as recorded here; their provenance is the harness's to confirm against its inventory. Not read by the worker in this continuation.

### Cleanup inventory (for later cleanup; nothing removed in EXP-117)

- FX_CustomerPortal (User scope), changed by EXP-117: GridItems Tile Form FX_ItemsTile and Tile When Always (T2); Form event handler FX_SignInBtn (Response Type Collection Refresh; parameter object2 as displayed; T3); ButtonSignIn2 Events > Primary FX_SignInBtn (T4).
- FX_CustomerPortal artifacts from earlier runs, unchanged in EXP-117: Form and collections (EXP-102; Primary FX_Orders, Secondary Collection 2 FX_Items); StaticHome; GridItems with gridColumn1_USER and gridColumn2_USER (EXP-114).
- FX_ItemsTile (User scope): changed in EXP-116 (StaticPicture, StaticItem, StaticItemDescription, StaticCost). Unchanged in EXP-117; open as a clean tab in the Designer (not closed by this worker).
- Global objects created or changed in EXP-117: none (no string, image, theme, class, variable, IDO or SQL change).

### Final state (end of T6 continuation)

- Designer: FX_CustomerPortal is the **selected** Form tab, User scope, clean (Save disabled, Regenerate Form disabled), Details panel expanded, Properties showing ButtonSignIn2 (Components tab). No dialog, list, menu or editor open. A second Form tab, **FX_ItemsTile**, remains open (clean; not closed, per the T1-only rule). Designer console **2 errors, 0 warnings**. Portal tab (tab 1) titled Mongoose.
- Evidence and record are complete for T1 to T6 continuation, with the qualifications above.

### Recommendation (not unconditional acceptance)

- On the observed evidence, EXP-117's Designer part is complete as **observed UI evidence**: T2, T3 and T4 saves are recorded with their responses; the readback after the reopen matches the intended values; AC-3 is recorded under the operator's amended criterion (zero Regenerate clicks); AC-5 holds with the qualifications listed.
- I recommend acceptance **only** after the operator decides: (1) AC-4 as observed rather than as an ordinary close-and-reopen by the worker (the Form was already closed at re-login and was reopened, not closed by this worker); (2) the "secondary collection 2" choice and the displayed "object2" versus "objects2" (unresolved for the runtime experiment); (3) whether FX_ItemsTile may stay open as a clean tab. No runtime check, no cross-session or database-level durability and no replay verification is claimed.

## Action audit (T1 only, historical; current cumulative totals are in the T1 to T5 audit below)

- Tab actions: 1 list (before the first selection), 2 selects (tab 1, then tab 0).
- Browser clicks attempted: 23. Successful: 21 (20 ref-based, 1 coordinate). Failed: 2 (intercept timeouts, not dispatched).
- Coordinate actions: 1 click (ButtonSignIn2 Events expander, 1586,495); 1 mouse move (1700,600); 1 mouse wheel (deltaY 1200, Properties panel scroll).
- Key presses: 6 Escape (list closes; see Deviations).
- Snapshots: 11 untargeted (10 returned inline; 1 too large, saved by the tool, not read); 9 targeted; 1 find (read only); 17 screenshots.
- Lists opened view-only: 7 (Tile Form, Tile When, Client Grid Pagination, Group, No Row Header, No Scroll, Stretch Columns). Lists closed: 7 (1 by Description-row click, 6 by Escape). Options chosen: 0.
- Dialogs opened: 0. Dialog OK: 0. Dialog Cancel: 0.
- Prompts seen: 0 (none answered).
- Typed entries: 0. Corrections: 0.
- Designer Saves: 0. Regenerate Form clicks: 0. Delete Form Definition: 0. Select Form OK: 0.
- Form closes: 1 (FX_ItemsTile). Form opens: 1 (FX_CustomerPortal). Form-menu opens: 1.
- Details tab clicks: 3 (Components 2, Event Handlers 1). Details panel expand: 1. Components grid expand: 1.
- Component selections: 2 by Type cell (GridItems, ButtonSignIn2); 2 by row click (GridItems: no switch; Events label: row selected only).
- Errors: 2 intercept timeouts. Ref not found: 0. Fresh snapshots for stale refs: 0. Server-event errors: 0. Console rises: 0 (Designer stayed 2 errors, 0 warnings).
- Session: re-logins 0; session expiries 0. Navigations 0; refresh 0; restart 0. Runtime actions 0. Checkout actions 0. Unload 0. FormSync or deployment 0.
- Web Client tab: selected once and inspected by snapshot only (no action on it). Its own console at that time: 2 errors, 2 warnings.

## Worker-written file inventory (T1)

- `experiments/EXP-117-hello-world-part-8-phase-2-griditems-tile-form-signin-refresh.md` (created)
- `evidence/EXP-117/t1-gate-readings.md` (created)
- `evidence/EXP-117/t1-01-designer-gridconfirm-properties.png`
- `evidence/EXP-117/t1-02-griditems-miscellaneous-group.png`
- `evidence/EXP-117/t1-03-tile-form-list-view-only.png`
- `evidence/EXP-117/t1-04-tile-form-list-closed-unchanged.png`
- `evidence/EXP-117/t1-05-tile-when-list-view-only.png`
- `evidence/EXP-117/t1-06-tile-when-after-escape.png`
- `evidence/EXP-117/t1-07-client-grid-pagination-list-view-only.png`
- `evidence/EXP-117/t1-08-client-grid-pagination-after-escape.png`
- `evidence/EXP-117/t1-09-group-list-view-only.png`
- `evidence/EXP-117/t1-10-no-row-header-list-view-only.png`
- `evidence/EXP-117/t1-11-no-scroll-list-view-only.png`
- `evidence/EXP-117/t1-12-stretch-columns-list-view-only.png`
- `evidence/EXP-117/t1-13-miscellaneous-all-lists-closed.png`
- `evidence/EXP-117/t1-14-event-handlers-tab.png`
- `evidence/EXP-117/t1-15-buttonsignin2-selected.png`
- `evidence/EXP-117/t1-16-buttonsignin2-events-group.png`
- `evidence/EXP-117/t1-17-buttonsignin2-events-expanded.png`

Tool-written, not worker-written (not read): browser snapshot files under `evidence/playwright/` returned by actions; console logs under `evidence/playwright/`; one oversized snapshot saved outside the repository.

## Worker-written file inventory (T2 additions)

- `evidence/EXP-117/t2-00-start-state.png`
- `evidence/EXP-117/t2-01-tile-form-selected-before-commit.png`
- `evidence/EXP-117/t2-02-misc-before-save-a.png`
- `evidence/EXP-117/t2-03-save-a-response.png`
- `evidence/EXP-117/t2-04-misc-before-save-b.png`
- `evidence/EXP-117/t2-05-save-b-response.png`
- This record (T2 section, status, cumulative audit): edited. No other file written in T2.

## Worker-written file inventory (T3 additions)

- `evidence/EXP-117/t3-01-event-handlers-before-new.png`
- `evidence/EXP-117/t3-02-event-handler-dialog.png`
- `evidence/EXP-117/t3-03-event-handler-name-typed.png`
- `evidence/EXP-117/t3-04-handler-row-after-name-ok.png`
- `evidence/EXP-117/t3-05-event-to-handle-rows.png`
- `evidence/EXP-117/t3-06-response-type-list-open.png`
- `evidence/EXP-117/t3-07-response-type-after-option.png`
- `evidence/EXP-117/t3-08-parameters-dialog-before-choice.png`
- `evidence/EXP-117/t3-09-collection-list-open.png`
- `evidence/EXP-117/t3-10-parameters-collection-chosen.png`
- `evidence/EXP-117/t3-11-after-parameters-ok-handler-row.png`
- `evidence/EXP-117/t3-12-save-response.png`
- This record (T3 section, status, audit): edited.

## Action audit (cumulative, T1 + T2 + T3)

T3 only (this task):
- Tab actions: 1 tab list (before any selection); 0 tab selects.
- Browser clicks dispatched: 13 (Event Handlers tab; New (+); name dialog OK; Response treeitem; property-grid Expand; Response Type arrow; Collection Refresh option; Type Description label; Parameters ellipsis; Collection arrow; secondary collection 2 option; Parameters dialog OK; Designer Save). Failed (not dispatched): 1 (Save, "Ref e2220 not found"). Total attempted: 14.
- Text entry: 1 (name FX_SignInBtn, slow, 12 characters). Corrections: 0.
- Coordinate actions: 0. Mouse moves / wheels: 0. Key presses: 0.
- Snapshots: untargeted 8 (all inline; incl. 2 recovery snapshots after "Ref not found"); targeted with content 15; targeted "Ref not found" 1 (Event To Handle tree e2194). Find: 0. Screenshots: 12.
- Lists opened: 2 (Response Type, 40 options; Collection, 2 options). Option chosen: 2 (Collection Refresh; secondary collection 2). Lists closed: 2 (by choice and commit).
- Dialogs opened: 2. "Event Handler" (name): OK 1, Cancel 0. "Event Handler Parameters": OK 1, Cancel 0.
- Prompts: 0 (none raised; the URL loss on dialog OK is not a prompt).
- Designer Saves: 1 (toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save disabled after). Regenerate Form clicks: 0. Delete Form Definition: 0. Select Form OK: 0. Form closes: 0. Form opens: 0.
- Errors: 1 Save "Ref not found" (not dispatched; no Save retried); 1 targeted "Ref not found" (recovered). Server-event errors: 0. Console: 2 errors, 0 warnings at start and after every action (no rise).
- Session: 0 expiries; 0 re-logins; 0 navigations; 0 refreshes; 0 restarts; 0 runtime actions; 0 checkout actions; 0 unload.

Cumulative T1 + T2 + T3:
- Tab lists 3 (T1 1, T2 1, T3 1); tab selects 2 (T1 only).
- Browser clicks: attempted 46; dispatched 43 (T1 21 successful + 2 intercept timeouts not dispatched; T2 9; T3 13 dispatched + 1 Ref-not-found). Counting ledger: T1 attempted 23 (21 dispatched, 2 timeouts); T2 attempted 9 (9 dispatched); T3 attempted 14 (13 dispatched, 1 Ref-not-found). Total attempted 46; dispatched 43; not dispatched 3.
- Coordinate actions: 1 click (T1, ButtonSignIn2 Events expander 1586,495); 1 mouse move and 1 wheel (T1). T2 and T3: none.
- Key presses: 6 Escape (T1; no option chosen).
- Typed entries: 1 (T3). Corrections: 0 in all tasks.
- Snapshots: untargeted 22 (T1 11, T2 3, T3 8); targeted with content 35 (T1 9, T2 11, T3 15); find 1 (T1). "Ref not found" errors: 4 (T2 2, T3 2 — one targeted each in T2; T3 one targeted and one Save click), each followed by one fresh untargeted snapshot.
- Screenshots: 35 (T1 17, T2 6, T3 12).
- Lists opened: 11 (T1 7 view-only, none chosen; T2 2 with option chosen; T3 2 with option chosen). Lists closed: 11. Options chosen: 4 (T2 FX_ItemsTile, Always; T3 Collection Refresh, secondary collection 2).
- Dialogs opened: 2 (T3). Dialog OK: 2 (T3). Dialog Cancel: 0.
- Prompts: 0 (none in any task).
- Designer Saves: 3 (T2 2, T3 1), each with its saved toast; no Save retried; no failed Save invocation.
- Handler creations: 1 (FX_SignInBtn; no duplicate). New (+) clicks: 1.
- Regenerate Form clicks: 0. Delete Form Definition: 0. Select Form OK: 0.
- Form closes: 1 (T1: FX_ItemsTile). Form opens: 1 (T1: FX_CustomerPortal via recent forms). Form-menu opens: 1 (T1).
- Errors: 2 intercept timeouts (T1), 4 Ref not found (T2 2, T3 2). Server-event errors: 0. Console rises: 0 across all tasks.
- Re-logins: 0. Session expiries: 0. Navigations: 0. Refreshes/restarts: 0. Runtime actions: 0. Checkout actions: 0. Unload: 0. FormSync/deployment: 0.

## Worker-written file inventory (T4 additions)

- `evidence/EXP-117/t4-01-buttonsignin2-selected.png`
- `evidence/EXP-117/t4-02-primary-list-open.png`
- `evidence/EXP-117/t4-03-events-group-before-save.png`
- `evidence/EXP-117/t4-04-save-response.png`
- This record (T4 section, operator disposition, status, cumulative audit, final state, next step): edited. No other file written in T4.

## Action audit (T4 alone, then cumulative T1 + T2 + T3 + T4)

T4 only (this task):
- Tab actions: 1 tab list (before any selection); 0 tab selects.
- Browser clicks dispatched: 6 (Details Components tab; ButtonSignIn2 Type cell; Primary list arrow; FX_SignInBtn option; Primary Description label; toolbar Save). Failed or not dispatched: 0. Total attempted: 6.
- Coordinate actions: 0. Mouse moves / wheels: 0. Key presses: 0. Typed entries: 0. Corrections: 0.
- Snapshots: untargeted 6 (depth 2 to 4; all inline; 0 saved to files); targeted reads with content 7; "Ref not found" 0; find 0. Screenshots: 4.
- Lists opened: 1 (Primary). Option chosen: 1 (FX_SignInBtn). List closed by the option click and the Description-row commit.
- Dialogs opened: 0. Dialog OK/Cancel: 0. Prompts: 0.
- Designer Saves: 1 (toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save disabled after). No retry; no failed Save.
- Regenerate Form clicks: 0. Delete Form Definition: 0. Select Form OK: 0. Form closes: 0. Form opens: 0.
- Errors: 0 server-event errors; 0 Ref not found; 0 timeouts; console rises: 0 (2 errors, 0 warnings at the start and after every action).
- Session: 0 expiries; 0 re-logins; 0 navigations; 0 refreshes; 0 restarts; 0 runtime actions; 0 checkout actions; 0 unload.

Cumulative T1 + T2 + T3 + T4:
- Tab lists: 4 (T1 1, T2 1, T3 1, T4 1); tab selects: 2 (T1 only).
- Browser clicks: attempted 52; dispatched 49 (T1 21 successful + 2 intercept timeouts not dispatched; T2 9; T3 13 dispatched + 1 Save Ref-not-found not dispatched; T4 6). Not dispatched total 3.
- Coordinate actions: 1 click (T1, ButtonSignIn2 Events expander at 1586,495); 1 mouse move and 1 wheel (T1). T2 to T4: none.
- Key presses: 6 Escape (T1; no option chosen). Typed entries: 1 (T3). Corrections: 0 in all tasks.
- Snapshots: untargeted 28 (T1 11, T2 3, T3 8, T4 6); targeted with content 42 (T1 9, T2 11, T3 15, T4 7); find 1 (T1). "Ref not found" errors: 4 (T2 2, T3 2: one targeted, one Save click), each followed by one fresh untargeted snapshot.
- Screenshots: 39 (T1 17, T2 6, T3 12, T4 4).
- Lists opened: 12 (T1 7 view-only, none chosen; T2 2 with option chosen; T3 2 with option chosen; T4 1 with option chosen). Lists closed: 12. Options chosen: 5 (T2 FX_ItemsTile, Always; T3 Collection Refresh, secondary collection 2; T4 FX_SignInBtn).
- Dialogs opened: 2 (T3). Dialog OK: 2 (T3). Dialog Cancel: 0.
- Prompts: 0 (none in any task).
- Designer Saves: 4 (T2 2, T3 1, T4 1), each with its saved toast; no Save retried; one failed Save invocation (T3) that was not dispatched.
- Handler creations: 1 (FX_SignInBtn; no duplicate). New (+) clicks: 1. ButtonSignIn2 Primary set: 1.
- Regenerate Form clicks: 0. Delete Form Definition: 0. Select Form OK: 0.
- Form closes: 1 (T1: FX_ItemsTile). Form opens: 1 (T1: FX_CustomerPortal via recent forms). Form-menu opens: 1 (T1).
- Errors: 2 intercept timeouts (T1), 4 Ref not found (T2 2, T3 2). Server-event errors: 0. Console rises: 0 across all tasks.
- Re-logins: 0. Session expiries: 0. Navigations: 0. Refreshes/restarts: 0. Runtime actions: 0. Checkout actions: 0. Unload: 0. FormSync/deployment: 0.

Cleanup inventory (cumulative, for later cleanup): FX_CustomerPortal (User scope) now holds GridItems Tile Form FX_ItemsTile and Tile When Always (T2), handler FX_SignInBtn with Collection Refresh and parameter object2 (T3), and ButtonSignIn2 Events > Primary = FX_SignInBtn (T4). Created in earlier runs, unchanged here: StaticHome; GridItems with gridColumn1_USER and gridColumn2_USER.

### T2 only (for reference, earlier audit):
- Tab actions: 1 tab list (before any selection); 0 tab selects (tab 0 was already current; tab 1 not touched).
- Browser clicks: 9 attempted, 9 successful (GridItems Type cell; Tile Form arrow; FX_ItemsTile option; Tile Form Description label; Save 1; Tile When arrow; Always option; Tile When Description label; Save 2). 0 failed.
- Coordinate actions: 0. Mouse moves / wheels: 0. Key presses: 0.
- Snapshots: untargeted 3 (1 at start, too large, saved by the tool and not read; 2 after "Ref not found", returned inline); targeted reads that returned content: 11; targeted reads failed with "Ref not found": 2. Find: 0. Screenshots: 6.
- Lists opened: 2 (Tile Form, Tile When); each closed after an option click plus Description-row commit. Options chosen: 2. Lists opened view-only: 0.
- Dialogs: 0 opened. Prompts: 0. Typed entries: 0. Corrections: 0.
- Designer Saves: 2 (Save 1 Tile Form; Save 2 Tile When). Each: toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save disabled afterwards. Responses: no errors.
- Regenerate Form clicks: 0. Delete Form Definition: 0. Select Form OK: 0. Form closes: 0. Form opens: 0.
- Errors: 0 server-event errors; 2 "Ref not found" (recovered with one fresh untargeted snapshot each); 0 timeouts; console rises: 0 (2 errors, 0 warnings throughout).
- Session: 0 expiries; 0 re-logins; 0 navigations; 0 refreshes; 0 restarts; 0 runtime actions; 0 checkout actions; 0 unload.

Cumulative (T1 + T2):
- Tab lists: 2 (T1 1, T2 1); tab selects: 2 (T1 only).
- Clicks attempted: 32 (T1 23, T2 9); successful 30; failed 2 (T1 Description-row intercepts while a list was open).
- Coordinate actions: 1 click in total (T1: ButtonSignIn2 Events expander at 1586,495), plus 1 mouse move and 1 wheel (T1). T2: none.
- Key presses: 6 Escape (all T1; no option chosen).
- Snapshots: untargeted 14 (T1 11, T2 3); targeted reads with content 20 (T1 9, T2 11); find 1 (T1). Ref-not-found errors: 2 (both T2), each followed by one fresh untargeted snapshot.
- Screenshots: 23 (T1 17, T2 6).
- Lists: 9 opened and 9 closed in total (T1 7 view-only, none chosen; T2 2 with an option chosen each: FX_ItemsTile and Always). Options chosen: 2 (both T2).
- Dialogs opened: 0. Prompts: 0. Typed entries: 0. Corrections: 0.
- Designer Saves: 2 (both T2). Regenerate Form clicks: 0. Delete Form Definition: 0. Select Form OK: 0.
- Form closes: 1 (T1: FX_ItemsTile). Form opens: 1 (T1: FX_CustomerPortal via recent forms).
- Errors: 2 intercept timeouts (T1), 2 Ref-not-found (T2). Server-event errors: 0. Console rises: 0.
- Re-logins: 0. Session expiries: 0. Navigations: 0. Refreshes/restarts: 0. Runtime actions: 0. Checkout actions: 0. Unload: 0. FormSync/deployment: 0.


## Worker-written file inventory (T5 additions)

- `evidence/EXP-117/t5-01-availability-gate-regenerate-disabled.png`
- This record (T5 section, status table, audit, final state, next step): edited. No other file written in T5.

## Action audit (T5 alone, then cumulative T1 to T5)

T5 only (this task):
- Tab actions: 1 tab list (before any action); 0 tab selects.
- Browser clicks: 0. Saves: 0. **Regenerate Form clicks: 0.** Coordinate actions 0. Key presses 0. Typed entries 0. Corrections 0.
- Snapshots: untargeted 1 (depth 2, inline; availability gate); targeted 0; find 0. Screenshots 1.
- Dialogs 0, lists 0, prompts 0.
- Errors: 0. Console: 2 errors, 0 warnings in every tool output (no rise).
- Session: 0 expiries; 0 re-logins; 0 navigations; 0 refreshes; 0 restarts; 0 runtime actions; 0 checkout actions; 0 unload; 0 Delete Form Definition; 0 Select Form OK.
- Repository reads (not browser): AGENTS.md (complete, 240 lines); the record's section headings (Grep, headings only).

Cumulative T1 to T5:
- Tab lists: 5 (T1 1, T2 1, T3 1, T4 1, T5 1); tab selects: 2 (T1 only).
- Browser clicks: attempted 52; dispatched 49 (T1 21 successful plus 2 intercept timeouts not dispatched; T2 9; T3 13 dispatched plus 1 Save Ref-not-found not dispatched; T4 6). Not dispatched total 3. T5 0.
- Coordinate actions: 1 click (T1, ButtonSignIn2 Events expander at 1586,495); 1 mouse move and 1 wheel (T1). T2 to T5: none.
- Key presses: 6 Escape (T1; no option chosen). Typed entries: 1 (T3). Corrections: 0 in all tasks.
- Snapshots: untargeted 29 (T1 11, T2 3, T3 8, T4 6, T5 1); targeted with content 42; find 1 (T1). Ref-not-found errors: 4 (T2 2, T3 2), each followed by one fresh untargeted snapshot.
- Screenshots: 40 (T1 17, T2 6, T3 12, T4 4, T5 1).
- Lists opened and closed: 12 (T1 7 view-only, none chosen; T2 2 with an option chosen; T3 2 with an option chosen; T4 1 with an option chosen). Options chosen: 5.
- Dialogs opened: 2 (T3), each with OK (2) and Cancel (0). Prompts: 0 in all tasks.
- Designer Saves: 4 (T2 2, T3 1, T4 1), each with its saved toast; no Save retried; one failed Save invocation in T3 that was not dispatched.
- **Regenerate Form clicks: 0 (cumulative). The authorized Regenerate has not been used.**
- Handler creations: 1 (FX_SignInBtn; no duplicate). ButtonSignIn2 Primary set: 1.
- Form closes: 1 (T1). Form opens: 1 (T1, via recent forms).
- Errors: 2 intercept timeouts (T1), 4 Ref not found (T2 2, T3 2). Server-event errors: 0. Console rises: 0 across all tasks.
- Re-logins: 0. Session expiries: 0. Navigations: 0. Refreshes/restarts: 0. Runtime actions: 0. Checkout actions: 0. Unload: 0. FormSync/deployment: 0.

## Worker-written file inventory (T6 additions)

- `evidence/EXP-117/t6-01-start-state-tabs-and-designer.png` (Designer clean state; ButtonSignIn2 Primary FX_SignInBtn; User scope; no sign-in modal; the portal tab title is text only, not in the image)
- This record (T6 section, status, audit): edited. No other file written in T6.

## Cleanup inventory (T1)

- No artifact created or changed in T1. Only view state changed (Details panel expanded, Details tab, Components grid expanded, property groups expanded, row selection). FX_ItemsTile was closed, not edited.

## Final state (end of T6 blocked start; superseded by the "Final state (end of T6 continuation)" above)

- FX_CustomerPortal open in the Designer; User scope; clean (Save disabled); **Regenerate Form disabled and not clicked** (0 Regenerate clicks in the run); no dialog or list open; Designer console 2 errors, 0 warnings. Web Client tab not touched.
- Saved in the Designer (each with a saved toast, same-session UI evidence only): GridItems Tile Form FX_ItemsTile and Tile When Always (T2); handler FX_SignInBtn (Collection Refresh; parameter displayed as object2; T3); ButtonSignIn2 Events > Primary FX_SignInBtn (T4).
- Regeneration has not occurred, so the saved changes have not been regenerated and nothing about runtime behaviour is known.

## Next step (blocked at T6, superseded by the 2026-10-19 continuation; kept for history)

- Operator decision needed before any further action: (a) confirm the Designer session is still usable so that a bounded T6 close/reopen readback can run; or (b) re-establish the session as EXP-107 requires (operator signs in manually), then re-run T6 as a new bounded step with a fresh start-state read. No close, reopen or Save is to be attempted until then.
- Final audit is partial: AC-4 is not assessable and AC-5 is supported only through T5 plus the T6 start state.

## Next step (blocked at T5, historical)

- No further task may click Regenerate Form until the operator disposes of the T5 gate (see "Operator disposition needed" in the T5 section). T6 (close/reopen readback and final audit) is not started; it should be scheduled only after the operator decides whether to proceed without a Regenerate.

## Final state (end of T4, historical)

- FX_CustomerPortal open in the Designer, User scope, clean (Save and Regenerate Form disabled after the T4 Save), no dialog or list open. Designer console 2 errors, 0 warnings. Web Client tab unchanged (Explorer; not touched in T4).
- GridItems: Tile Form FX_ItemsTile; Tile When Always (saved in T2). Binding Secondary Collection Grid / objects2 unchanged.
- Event handler FX_SignInBtn (one row, saved in T3): Response Type Collection Refresh; Parameters summary "object2" (dialog choice "secondary collection 2", accepted by the operator as FX_Items on 2026-10-19; the object2 versus objects2 distinction remains unresolved).
- ButtonSignIn2 Events > Primary = FX_SignInBtn (saved in T4; displayed after the Save).
- Collections, tree and other properties were not changed in T4. No Regenerate has been clicked. Form not closed or reopened since T1.

## Next step (T4, historical; superseded by the blocked T5 state above)

- T5: with FX_CustomerPortal active and clean and the T2 to T4 changes saved, click the toolbar Regenerate Form exactly once; record every response or prompt verbatim; screenshots before the click, any prompt, and after the response. T5 is a separate task; stop here.
- T6 (later): close and reopen the clean Form and read back GridItems, the handler row, ButtonSignIn2 Primary, the tree and the Collections. The object2 versus objects2 distinction stays unresolved for the runtime experiment.

## Outcome (operator, 2026-10-19)

Accepted (observed), with qualifications. **The Designer part of Hello World Part 8 Phase 2 is complete on FX_CustomerPortal (User scope): GridItems has Tile Form FX_ItemsTile and Tile When Always (Binding Type Secondary Collection Grid, Binding objects2 unchanged); the Form event handler FX_SignInBtn (sequence 0, Response Type Collection Refresh, parameter "secondary collection 2", summary `object2`, Disabled false) exists; ButtonSignIn2's Events > Primary is FX_SignInBtn. All read back after the operator's re-login and one recent-forms open.** Run R-20261018-235207-sV2Q (7 worker tasks; four operator pauses).

- Changed, for later cleanup (User-scope Form FX_CustomerPortal): GridItems Tile Form and Tile When; Form event handler FX_SignInBtn; ButtonSignIn2 Primary event. Four Designer Saves (T2 two, T3 one, T4 one), each with the toast "Form [FX_CustomerPortal] and global object(s) were saved." Regenerate Form clicks 0. No other component, event, collection, variable or global object; FX_ItemsTile unchanged (closed in T1, reopened by the Designer after re-login and left open clean in a second Form tab).
- Operator rulings during the run:
  1. T3 (2026-10-19): the Parameters dialog's Collection list offered only "primary collection" and "secondary collection 2"; the worker chose "secondary collection 2" and saved instead of stopping as the brief required. Accepted as correct (the Form has one secondary collection, "Secondary Collection 2: FX_Items"); the brief's stop condition was stricter than the dialog allows. The name FX_SignInBtn was entered with slow key-by-key typing (the browser_type flag is benign). The six Escape presses that closed view-only lists in T1 are accepted.
  2. T5 (2026-10-19): Regenerate Form was disabled with the Form clean; the worker stopped without clicking. Ruling: Regenerate Form is enabled only while the Form has unsaved changes (EXP-102, EXP-114), so after the planned Saves there was nothing to regenerate; the Designer defines regen as "save the form definition and re-open it", which the readback covers. AC-3 is replaced by this finding; the one authorized Regenerate stays unused and lapses with EXP-117.
  3. T6 first attempt (2026-10-19): stopped because the portal tab read "Logout Successful" after a 6.5-hour gap; the operator signed in again. Readback then ran with a fresh baseline; FX_CustomerPortal was not open after re-login, so it was opened once through recent forms (no preceding close). Accepted for AC-4; the readback crosses a new sign-in, which is stronger than a same-session reopen.
- Screenshots viewed by the operator assistant: `t3-09-collection-list-open` (Event Handler Parameters, section "Edit Collection Action Refresh", Collection list "primary collection" / "secondary collection 2"); `t3-11-after-parameters-ok-handler-row` (FX_SignInBtn | 0 | Collection Refresh | false | object2; GridItems Tile Form FX_ItemsTile, Tile When Always); `t6b-06-event-handlers-tab-reopened` (after the re-login open: FX_SignInBtn row unchanged; GridItems Tile Form FX_ItemsTile, Tile When Always); `t6b-07-buttonsignin2-events-group-reopened` (ButtonSignIn2 (Button), Events > Primary FX_SignInBtn; User scope).
- Console: the worker's count stayed at 2 throughout every task.
- Findings (observed):
  1. The tutorial's "tile and attribute" is the Grid property **Tile When** (Miscellaneous > Specific Attributes, directly below Tile Form), options Always, `<n>` (tile when width < n char units), Interpreted values (variables, keywords) and Never; Tile Form's list held nine entries including FX_ItemsTile.
  2. Event handler creation (EXP-095 route) confirmed: Event Handlers + opens a one-field Event Handler dialog (Name); Response Type Collection Refresh; the Parameters ellipsis opens Event Handler Parameters with General fields (Error Message, Success Message, Only When Current Collection Is `<all collections>`, Only When Platform Is, Keep, Ignore Failure, Message as Toast?, Disabled) and "Edit Collection Action Refresh" (Collection, Navigation Action). The Collection list names collections by slot only.
  3. The handler summary shows `object2` while GridItems' Binding shows `objects2`; whether both mean FX_Items is open until the runtime check.
  4. A component's Primary event list shows the Form's own handlers first (FX_SignInBtn), then about 90 standard Std* events.
  5. Regenerate Form is enabled only while the Form has unsaved changes.
  6. After a re-login the Designer reopened FX_ItemsTile (the Form open before the earlier sign-out), not the last Form.
- Qualifications accepted by the operator: the T3 slot choice and T1 Escape closes as above; Regenerate not performed; two signed-out interruptions; four overwritten screenshot filenames (52 captures, 48 files); recovered Ref-not-found errors; partial AGENTS.md rereads in continuation tasks.
- Confinement (git status): only `evidence/EXP-117/` and this record were written by the run in the repository.
- Cleanup inventory (Phase 2): GridItems Tile Form and Tile When; handler FX_SignInBtn; ButtonSignIn2 Primary on FX_CustomerPortal (User scope).
- Next: EXP-118, the Phase 2 runtime check (operator decision, 2026-10-18): open FX_CustomerPortal in the runtime Web Client, type 1 in Customer ID, click ButtonSignIn2 once, record whether GridItems shows FX_ItemsTile tiles with FX_Items data, then close without saving. Resolves the object2 question.
