# EXP-124 - Hello World Part 8 Phase 6a: Variable FX_CustomerID Bindings on EditCustID and StaticCustID, EditCount Initial Value 1, Menu Page Handlers with Primary Events and a Second FX_SignInBtn Handler on FX_CustomerPortal, with a Close/Reopen Readback

Status: accepted (observed)

Run: R-20261020-154718-osNu, cycle 0, task T1. Worker session 457ae832-9ee7-43a9-aa02-65aef7fdb154; task message ea8ba2b6-2f2c-4024-92c6-dc21641de5c2.

Scope: User (FX_CustomerPortal only). Tenant-wide objects are not touched in T1. Target Form: FX_CustomerPortal.

## Objective (from the brief)

Build the Designer part of Hello World Part 8 Phase 6 (tutorial 12:16-16:54, `docs/mongoose/transcripts/hello-world-pt8.md` lines 170-186 and 433-473) on FX_CustomerPortal, except Enabled When on the menu buttons (deferred to EXP-125):

- EditCustID and StaticCustID: Binding Type Variable, variable `FX_CustomerID` (deferred from EXP-107 and EXP-111).
- EditCount (FX_Count binding): Initial Value 1.
- Form event handlers `FX_SignInBtn2` (Set Values FX_Page=1), `FX_HomeBtn` (FX_Page=2), `FX_CartBtn` (FX_Page=3), each the Primary event of ButtonSignIn, ButtonHome and ButtonCart respectively.
- A second handler on the existing event `FX_SignInBtn` (Set Values FX_Page=2), after its Collection Refresh row.

Tasks: T1 gate (this record); T2 EditCustID; T3 StaticCustID; T4 EditCount Initial Value; T5 FX_SignInBtn2 and ButtonSignIn Primary; T6 FX_HomeBtn and ButtonHome Primary; T7 FX_CartBtn and ButtonCart Primary; T8 second FX_SignInBtn row; T9 close/reopen readback and final audit.

## Sources read at the start of T1

- `AGENTS.md` (repository file).
- `docs/mongoose/transcripts/hello-world-pt8.md` lines 170-186 (Phase 6) and lines 433-473 (12:16-16:54).
- `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections only: EXP-123 (line 925), EXP-120 (line 896), EXP-117 (line 665), EXP-111 (line 1309), EXP-107 (line 868), EXP-056 (line 246), EXP-055 (line 282). Located with one Grep on the `## Outcome` headings.
- No other record was read. `experiments/EXP-124-...md` did not exist before T1 and was created in T1.

Operator outcomes carried into this experiment (from the sources above): the Customer ID binding was deferred from EXP-107 (StaticCustID) and EXP-111 (EditCustID, Binding Type None); EXP-120 observed the Edit Variable Binding dialog (Variable, Initial Value, Clear On Refresh?, Refresh Value) and that Binding Type offers 20 options including Variable; EXP-117 observed that a component's Primary list shows the Form's own handlers first; EXP-123 observed that a Set Values pair Target typed as a new variable name is kept, and that `FX_Page` is listed under Form - Temporary after the first Save of a condition using it.

## T1 gate readings

### Sessions and tabs

- Tab list (before the first selection): tab 0 = Web Client portal ("Mongoose", Infor OS portal, favoriteContext FX_CustomerPortal); tab 1 = Designer (`mode=designer`, `MGForm=FX_CustomerPortal`).
- Tab 1 (Designer) selected; then tab 0 selected once to check the portal; then tab 1 selected again to end the gate.
- Portal tab (tab 0) read as a snapshot: the Mongoose app is shown in its frame. No "Logout Successful", Session Expired or sign-in card. Its own page console reads 5 errors and 2 warnings. This is the portal page, not the Designer page, and is recorded for information only; the stop rule uses the Designer count below.
- Designer tab: no session expiry, sign-in page, or server-event error at any point in T1.
- Designer console error count (tool output): **2 errors, 0 warnings at baseline**, and **2 errors** at every later check (every click, tab selection and snapshot output in T1). The count did not rise, so no stop.

### Designer state

- Toolbar Save: **disabled** (at the gate, after every component selection, and at the end of T1).
- Regenerate Form: disabled. Undo/Redo: disabled.
- Form tab: one tab, `FX_CustomerPortal`, selected. No other Form tab is open.
- Dialogs: none open at the start or at the end of T1.
- Status bar: `ScopeType: User`, with the signed-in user as ScopeName (the account name is not repeated in this record).
- Properties header at the end: `ButtonSignIn2 (Button)` was the last selected component (selection only; nothing edited).

### Details > Event Handlers (screenshot `evidence/EXP-124/t1-01-event-handlers.png`)

| Group | Row | Sequence | Response Type | Disabled | Response Parameters |
| --- | --- | --- | --- | --- | --- |
| FX_SignInBtn | 1 | 0 | Collection Refresh | false | object2 |
| StdFormPredisplay | 1 | 0 | Set Values | false | SETVARVALUES(FX_Page=1) |

Two groups, one row each. No FX_SignInBtn2, FX_HomeBtn or FX_CartBtn group. FX_SignInBtn has exactly one row. The gate passes.

### Details > Variables (screenshot `evidence/EXP-124/t1-02-variables.png`)

- Form - Persistent: `fds_SC2`.
- Form - Temporary: `FX_Count`, `FX_Page`.
- `FX_CustomerID`: **not present** in Form - Temporary or Form - Persistent. In the Global - Persistent rows listed by the accessibility tree (ccvw_..., gbgc_..., IncludeBadgeStatusVar, lse_...), no FX_ name appears. The presence check is recorded only; its absence is not a stop.

### Components and Properties (selected by Components row Type cell; header confirmed each time)

Components tree (expanded with the grid Expand button, view only):

- FlexLayoutMain > Region02: signinpage > StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2.
- FlexLayoutHeader > Region01: user > StaticCustIcon, StaticCustID.
- FlexLayoutMain > Region00: menu > ButtonSignIn, ButtonHome, ButtonCart.
- FlexLayoutHome > Region04: buttons (FlexLayoutButtons) > Region00: count > StaticCount, EditCount.

| Component | Properties header | Binding Type | Binding | Other read values | Primary event |
| --- | --- | --- | --- | --- | --- |
| EditCustID | `EditCustID (Edit)` | **None** | blank | Justification Center; Size 20; 1.5; Flex Index 2, target signinpage | not an event row |
| StaticCustID | `StaticCustID (Static)` | **None** | blank | Theme Class FX_WhiteHeader; Justification Left; Size 10; 1.5; Flex Index 1, target user | n/a |
| EditCount | `EditCount (Edit)` | **Variable** | `variables.FX_Count` | Size 7; 1.5; Flex Index 0, target count | n/a |
| ButtonSignIn | `ButtonSignIn (Button)` | n/a | n/a | Caption FX_sSignIn; Theme Class FX_BlueButton; Size 15; 2; Enabled When blank | **blank** (Events > Primary) |
| ButtonHome | `ButtonHome (Button)` | n/a | n/a | Caption FX_sHome; Size 15; 2; Enabled When blank | **blank** |
| ButtonCart | `ButtonCart (Button)` | n/a | n/a | Caption FX_sCart; Size 15; 2; Enabled When blank | **blank** |
| ButtonSignIn2 | `ButtonSignIn2 (Button)` | n/a | n/a | Caption FX_sSignIn; Theme Class FX_BlueButton; Size 20; 1.5; Flex Index 2, target signinpage; Enabled When blank | **FX_SignInBtn** |

Checks against the planned baseline:

- EditCustID and StaticCustID: Binding Type None, Binding blank. Neither has Binding Type Variable, so the stop rule does not apply.
- EditCount: Binding Type Variable with `variables.FX_Count`, as planned.
- ButtonSignIn, ButtonHome, ButtonCart: Primary blank, as planned. No stop.
- ButtonSignIn2: Primary `FX_SignInBtn`, as planned.
- Enabled When on the three menu buttons and ButtonSignIn2: blank (baseline for EXP-125).

The Events group for ButtonSignIn was read with the group expanded (screenshot `evidence/EXP-124/t1-03-buttonsignin-events-group.png`): Primary blank, Data Change, Lose Focus and Gain Focus blank, Drag From Events and Drop On Events 0 events.

Screenshots (viewed):

- `t1-01-event-handlers.png`: Designer, FX_CustomerPortal, Event Handlers tab: FX_SignInBtn group (row 0 Collection Refresh, false, object2) and StdFormPredisplay group (row 0 Set Values, false, SETVARVALUES(FX_Page=1)). Form properties (Name FX_CustomerPortal) in the Properties panel; the toolbar Save is greyed; status bar ScopeType User. Proves the handler grid at the gate. Does not prove rows outside the grid's visible area (the grid showed both groups completely).
- `t1-02-variables.png`: Designer, Variables tab: Form - Persistent `fds_SC2`; Form - Temporary `FX_Count`, `FX_Page`; no FX_CustomerID between FX_Count and FX_Page (alphabetical position would be there). Proves the Form variable list at the gate. Does not prove the Global groups below the fold (checked in the accessibility tree instead).
- `t1-03-buttonsignin-events-group.png`: Designer, Properties header `ButtonSignIn (Button)`, Events group expanded with Primary blank; Components row ButtonSignIn (PushButton, FlexLayoutMain, Region00: menu) highlighted; Save greyed; status bar ScopeType User. Proves the blank Primary and the scope. Does not prove the value of a list that is blank for a reason other than "no event" (none observed).

## Acceptance check status after T1 (AC-1)

- Sources reviewed at the start of T1: yes (list above).
- Session usable: yes (no expiry, logout or sign-in card; no server-event error).
- User scope: yes (status bar ScopeType User).
- FX_CustomerPortal open and clean: yes (single Form tab; Save disabled; no dialog).
- Event handlers: StdFormPredisplay (Set Values SETVARVALUES(FX_Page=1)) and FX_SignInBtn (one Collection Refresh row). Yes.
- Variables: FX_Count and FX_Page under Form - Temporary; fds_SC2 under Form - Persistent; FX_CustomerID absent. Recorded.
- EditCustID and StaticCustID Binding Type None: yes. EditCount Binding variables.FX_Count: yes. Menu buttons' Primary blank: yes. ButtonSignIn2 Primary FX_SignInBtn: yes.
- Baseline console error count: **2 errors, 0 warnings** (Designer).

## Findings (observed only)

1. The Properties panel has two unlabeled toolbar buttons after the search box. Clicking the first (e2291 in the snapshot; located from its position, not from a label) expanded every property group, so this is the expand control (observed). Clicking a group's name cell only selects that row.
2. Snapshot references in the Components tree change after each component selection and after each Properties click. A targeted read of the tree after such a click failed with "Ref not found" twice in T1; the tree had to be re-anchored by a fresh depth-limited snapshot before each new selection. This added snapshots beyond the one-per-error allowance (see the action audit).
3. An untargeted full snapshot with the Components tree expanded is about 53 KB and was returned as a saved file, not inline. Targeted and depth-limited snapshots were used instead. Saved snapshot files were not read or searched.
4. The Components grid's "Event to generate" column shows the Primary event: ButtonSignIn2 shows FX_SignInBtn; the other three menu buttons are blank. This matches the Properties panel.
5. Enabled When is blank on the three menu buttons and ButtonSignIn2 at the start of Phase 6 (baseline for EXP-125).
6. The Properties panel shows the Primary event row with a list arrow and an ellipsis for every component. None was opened in T1.

## Deviations and corrections (T1)

- **Four** Ref-not-found errors in total: two click errors (e2291, e1870) and two targeted-snapshot errors (e478, e446). Each was followed by exactly one fresh depth-limited untargeted snapshot, which satisfies the one-per-error allowance.
- Beyond those four, four further depth-4 snapshots were taken only to re-anchor the Components tree refs after component selections (no error). The brief asked for one untargeted snapshot per step; this exceeded it. Disclosed here.
- The Properties expand button was clicked by reference after a Ref not found on its first attempt; the expand effect is observed, the button's name is not.
- No other deviation. No prompt, dialog, list, ellipsis or edit was opened in T1.

## Action audit (cumulative through T1)

Counts are from the tool-call sequence of this task.

- browser_tabs: list 1; select 3 (tab 1 twice, tab 0 once).
- browser_click: issued 16; performed 14; not performed (Ref not found) 2.
  - Performed: Event Handlers tab 1; Variables tab 1; Components tab 1; Components grid Expand 1; EditCustID Type cell 1; Data Source group name (select) 1; Properties expand button 1; StaticCustID Type cell 1; EditCount Type cell 1; ButtonSignIn Type cell 1; Events group name (select) 1; ButtonHome Type cell 1; ButtonCart Type cell 1; ButtonSignIn2 Type cell 1.
  - Coordinate clicks 0; arrow-key or Enter presses 0; typed entries 0.
- browser_snapshot: issued 33.
  - Untargeted full inline: 4 (gate; after Event Handlers click; after Variables click; with the Components click).
  - Untargeted full saved to file (too large, not read): 1.
  - Depth-limited untargeted: 10 = 4 fresh snapshots after the four Ref-not-found errors (2 depth 2 and 2 depth 4), 4 re-anchor snapshots (depth 4, no error), 1 portal check (depth 4) and 1 final check (depth 2).
  - Targeted: 18, including 2 Ref-not-found errors.
- browser_take_screenshot: 3 (t1-01, t1-02, t1-03).
- Read of the screenshot images for verification: 3 (t1-01, t1-02, t1-03).
- List opens 0; dialog or nested-dialog opens 0; ellipsis opens 0; OK or Cancel presses 0.
- Designer Saves 0 (none in T1 by rule).
- Form closes 0; Form reopens 0.
- Prompts 0 (none seen).
- Server-event errors 0; logout or re-login 0.
- Console: Designer count 2 at every check; no rise.
- Source Reads: AGENTS.md 1; transcript 2 (lines 170-186, 433-473); recipe 1; Outcome sections 7; Grep for Outcome headings 1; Glob 2; experiment-record Read 1 (did not exist, error).

## Worker-written file inventory (T1)

- `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (created in T1).
- `evidence/EXP-124/t1-01-event-handlers.png` (screenshot).
- `evidence/EXP-124/t1-02-variables.png` (screenshot).
- `evidence/EXP-124/t1-03-buttonsignin-events-group.png` (screenshot).

Tool-written (not worker-authored; not read or searched): page snapshot and console files under `evidence/playwright/` written by the browser tool on each large snapshot or click and each new console entry.

## Cleanup inventory (T1)

None. No change was made to FX_CustomerPortal or any other object in T1.

## Final state after T1

- FX_CustomerPortal open in the Designer (tab 1, selected), User scope, clean (Save disabled), no dialog or list open.
- Components: ButtonSignIn2 selected (selection only).
- Web Client portal (tab 0): not changed; no session expiry seen.
- Designer console count: 2 errors, 0 warnings.

## T2 - EditCustID Binding Type Variable and Binding variables.FX_CustomerID

Run: R-20261020-154718-osNu, cycle 1, task T2. Worker session 457ae832-9ee7-43a9-aa02-65aef7fdb154; task message 52151802-3ce9-4020-a473-dc351e1f098f. Result: **completed**, one Designer Save, stopped at the T2 boundary with the Designer clean and no dialog open.

Sources at the start of T2: AGENTS.md (reread) and the T1 section of this record (reread). No other source read.

Steps (console error count shown by the browser tool was **2 errors, 0 warnings** at the start and after every action):

1. Tabs listed (tab 0 Web Client portal, tab 1 Designer; tab 0 was current on arrival), then tab 1 selected (succeeded). Fresh snapshot: FX_CustomerPortal the only Form tab, selected; ScopeType User; Save disabled; no dialog; Components tab selected.
2. Components tree refreshed (targeted snapshot of the tree), EditCustID's Type cell clicked (`Edit`). Properties header read `EditCustID (Edit)`. Before any change: Binding Type **None**, Binding blank.
3. Binding Type list opened with its arrow (one click on the arrow reference). Options read from the list (20, in this order): None, Variable, Property, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, Graph Element, Tree, Browser, Process Intelligence, Diagram, Chart, Gauge, DataView, Calendar, Aggregate, Expression, Infor Chart. Variable was offered and clicked once. Binding Type then read Variable and Save became enabled (depth-6 snapshot).
4. The field was left by a click on the neutral Binding label row (no list open; no Tab or arrow key). Binding then read `variables.` with an empty name.
5. Binding ellipsis clicked once. Dialog **Edit Variable Binding** opened with: Variable combobox empty; Initial Value empty; Clear On Refresh? unchecked; Refresh Value disabled; OK, Cancel, Help. This matches the expected dialog. Screenshot `t2-01` taken before any entry.
6. Variable combobox clicked once (focus), then `FX_CustomerID` typed key by key (one typing action, slowly). No list entries were offered (no listbox in the snapshot; no list visible in `t2-02`), so no list entry was clicked. Targeted dialog snapshot read the combobox as `FX_CustomerID`. The field was left by a click on the neutral Variable label (no Tab). Re-read: still `FX_CustomerID`. Initial Value stayed blank; Clear On Refresh? stayed unchecked; Refresh Value untouched.
7. OK clicked once. Dialog closed. Targeted tree snapshot: Binding Type `Variable`; Binding `variables.FX_CustomerID` (exact text read from the accessibility tree). No correction was needed.
8. Binding rows before the Save: screenshot `t2-03` (Binding Type Variable; Binding `variables.FX_Custo…`, truncated on screen; full text from step 7).
9. One Designer Save (toolbar Save reference, one click). Response: toast "Save — Form [FX_CustomerPortal] and global object(s) were saved." (`t2-04`). Save disabled afterward (depth-2 snapshot). Console 2 errors after the Save.
10. End state: no dialog, list or editor open; User scope; FX_CustomerPortal the only Form open; Save disabled.

Observations (T2):

- Binding Type list: 20 options, same list as EXP-120. Variable is offered and was selected by a click.
- The Edit Variable Binding dialog matched the brief's expected fields (Variable, Initial Value, Clear On Refresh?, Refresh Value). Refresh Value is disabled until Clear On Refresh? is used; it was left untouched.
- After the OK, the Designer's page URL no longer carried the `&MGForm=FX_CustomerPortal` parameter in the tab listing. No navigation action was taken by the worker; the Form stayed shown as FX_CustomerPortal, Save disabled after the Save. Recorded as observed; not investigated further.
- Designer-side state: Save became enabled after the Binding Type change (before the binding dialog), i.e., the Binding Type commit alone dirties the Form. The one Save in T2 covered both the Binding Type and the Binding change.
- Not checked in T2: whether FX_CustomerID now appears under Details > Variables (the Variables tab was not opened in T2; checked at T9). Not checked: runtime behaviour (out of scope until EXP-125).

Screenshots (T2, viewed):

- `evidence/EXP-124/t2-01-edit-variable-binding-before-entry.png`: the Edit Variable Binding dialog before entry (empty Variable, empty Initial Value, Clear On Refresh? unchecked, Refresh Value disabled, OK/Cancel/Help); Properties header EditCustID (Edit); Binding Type Variable and Binding `variables.` behind; User scope; Save enabled. Proves the dialog state before entry. Does not prove the list contents (no list was open in this image).
- `evidence/EXP-124/t2-02-edit-variable-binding-typed-FX_CustomerID.png`: the dialog with `FX_CustomerID` in Variable, Initial Value blank, Clear On Refresh? unchecked, Refresh Value disabled, before OK. Proves the typed value before OK; does not prove the committed value after the neutral click (that is from the targeted snapshot in step 6).
- `evidence/EXP-124/t2-03-binding-rows-before-save.png`: Properties Data Source rows before the Save: Binding Type Variable; Binding `variables.FX_Custo…` (truncated); Save icon active; EditCustID row selected in the Components grid. Proves Binding Type Variable and the binding prefix; does not prove the full binding text on screen (the full text is from the accessibility tree, step 7).
- `evidence/EXP-124/t2-04-save-response.png`: after the Save: the toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save icon greyed; Binding Type Variable; Binding `variables.FX_Custo…`; User scope. Proves the save response in the same session. Does not prove persistence across a close and reopen (T9).

Acceptance checks, T2 (AC-2 for EditCustID; AC-1 console baseline):

- AC-2 (EditCustID part): Binding Type Variable, Binding `variables.FX_CustomerID`, through the Edit Variable Binding dialog, one Save. **Met** in the same session (observed).
- Console error count recorded after every action: yes (2 throughout).
- At most one correction per field: no correction was needed (Variable: one entry, no correction).

Action audit T2 (exact counts for this task):

- browser_tabs: list 1; select 1 (tab 1, succeeded).
- browser_click: issued 9; performed 9; failed 0. Performed: EditCustID Type cell 1; Binding Type list arrow 1; Variable option 1; neutral Binding label 1; Binding ellipsis 1; Variable combobox 1; neutral Variable label 1; dialog OK 1; Designer Save 1.
- Coordinate clicks 0; arrow-key, Enter or Tab presses 0.
- browser_type: 1 (FX_CustomerID, key by key, into the Variable combobox; 1 field entry; 0 corrections).
- browser_snapshot: issued 15; untargeted 7 (depth 4 ×2, depth 6 ×2, depth 8 ×1, depth 2 ×2); targeted 8 (Components tree e450 ×1, Properties tree e1788 ×4, Binding list e3203 ×1, dialog e3254 ×2). Ref-not-found errors: 0.
- Lists opened: 1 (Binding Type; no list observed for the Variable combobox).
- Dialogs opened: 1 (Edit Variable Binding), closed by OK 1, closed by Cancel 0.
- Designer Saves: 1 (response: saved toast; Save disabled after).
- Screenshots: 4 (t2-01 to t2-04), each viewed.
- Prompts: 0. Server-event errors: 0. Session expiry, logout or re-login: 0. Form closes or reopens: 0.
- Console: 2 errors at every check; no rise, no stop.

Cumulative browser action audit (T1 + T2):

- browser_tabs: list 2; select 4 (T1 3, T2 1).
- browser_click: issued 25; performed 23; failed (Ref not found) 2 (both in T1). Coordinate clicks 0 (cumulative).
- browser_type: 1 (T2). Coordinate clicks 0, arrow or Enter or Tab key presses 0.
- browser_snapshot calls: 48 (T1 33, T2 15). Ref-not-found errors: 4 (T1: 2 clicks, 2 targeted snapshots; T2: 0).
- Screenshots: 7 (T1 3, T2 4); image reads for verification: 7.
- Dialogs opened: 1 (Edit Variable Binding; closed by OK 1, Cancel 0). Ellipses opened: 1.
- Lists opened: 1 (Binding Type) in T2; none in T1.
- Designer Saves: 1 (T2; response recorded above; none in T1).
- Form closes: 0; Form reopens: 0.
- Prompts: 0. Server-event errors: 0. Re-logins: 0. Session expiry: 0.
- Console: Designer count 2 errors at every check in T1 and T2.

Worker-written file inventory (T2, cumulative with T1):

- `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (created in T1; updated in T2).
- `evidence/EXP-124/t1-01-event-handlers.png`, `t1-02-variables.png`, `t1-03-buttonsignin-events-group.png` (T1).
- `evidence/EXP-124/t2-01-edit-variable-binding-before-entry.png`, `t2-02-edit-variable-binding-typed-FX_CustomerID.png`, `t2-03-binding-rows-before-save.png`, `t2-04-save-response.png` (T2).
- Tool-written (not authored by the worker; not read or searched): page snapshot and console files under `evidence/playwright/`, written by the browser tool on large snapshots, clicks and console entries.

Cleanup inventory (cumulative to T2):

- Changed on FX_CustomerPortal (User scope): EditCustID Binding Type Variable and Binding `variables.FX_CustomerID` (T2, saved).
- Variable FX_CustomerID: created or referenced by the binding (not yet verified under Details > Variables; to be checked at T9).
- Pending: StaticCustID binding (T3), EditCount Initial Value (T4), three handlers and three Primary events (T5 to T7), second FX_SignInBtn row (T8).

Open question for the operator (T2):

- The Variable value is saved as `variables.FX_CustomerID`, but whether the Form's variable list (Details > Variables) gains an FX_CustomerID entry, and under which category, is not yet read (T9 readback).

## T3 - StaticCustID Binding Type Variable and Binding variables.FX_CustomerID

Run: R-20261020-154718-osNu, cycle 2, task T3. Worker session 457ae832-9ee7-43a9-aa02-65aef7fdb154; task message 581b36ae-fb1d-4f36-87e9-426f054ab2e0. Result: **completed**, one Designer Save, stopped at the T3 boundary with the Designer clean and no dialog or list open.

Sources at the start of T3: AGENTS.md (reread) and the T2/next-step part of this record (reread). No other source read.

Steps (Designer console error count: **2 errors, 0 warnings** at the start and after every action):

1. Tabs listed (tab 0 Web Client portal, tab 1 Designer); tab 1 selected (succeeded). Fresh snapshot: FX_CustomerPortal the only Form tab, selected; ScopeType User; Save disabled; no dialog; Components tab selected. Portal tab not changed; no session expiry shown.
2. Components tree read (targeted snapshot of the tree); StaticCustID's Type cell clicked (`Static`). Properties header read `StaticCustID (Static)`. Before any change: Binding Type **None**, Binding blank. Other values read: Theme Class FX_WhiteHeader; Justification Left; Size 10; 1.5; Flex Attributes Index 1, target user.
3. Binding Type list opened with its arrow (one click). Options read (20, same list as in T2): None, Variable, Property, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, Graph Element, Tree, Browser, Process Intelligence, Diagram, Chart, Gauge, DataView, Calendar, Aggregate, Expression, Infor Chart. Variable offered and clicked once. Binding Type then read Variable.
4. Field left by a click on the neutral Binding Type label cell (no list open; no Tab or arrow key). Binding then read `variables.` with an empty name.
5. Binding ellipsis clicked once. Dialog **Edit Variable Binding** opened: Variable combobox empty; Initial Value empty; Clear On Refresh? unchecked; Refresh Value disabled; OK, Cancel, Help. Matches the expected dialog. Screenshot `t3-01` before any entry.
6. Variable combobox clicked once, then `FX_CustomerID` typed key by key (one typing action, slowly). No list entries were offered, so no list entry was clicked. Dialog screenshot `t3-02` taken before OK, showing Variable `FX_CustomerID`, Initial Value blank, Clear On Refresh? unchecked, Refresh Value disabled. Field left by a click on the neutral Variable label (no Tab). Targeted dialog snapshot re-read the combobox as `FX_CustomerID`.
7. OK clicked once. Dialog closed. Targeted read of the Binding row: `variables.FX_CustomerID` (exact text from the accessibility tree). Binding Type Variable confirmed in the screenshot `t3-03` before Save. One targeted read of the Binding Type row after the OK returned "Ref not found" (see Deviations); its state is shown by `t3-03`, which was taken before the Save.
8. Binding rows before the Save: screenshot `t3-03` (Binding Type Variable; Binding `variables.FX_Custo…`, truncated on screen; full text from step 7). Save icon active.
9. One Designer Save (toolbar Save, one click). Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." (`t3-04`). Save disabled afterward (depth-2 snapshot). Console 2 errors after the Save.
10. End state: no dialog, list or editor open; User scope; FX_CustomerPortal the only Form open; Save disabled.

Observations (T3):

- Same 20-option Binding Type list and the same dialog layout as in T2 (EditCustID). The T2 pattern worked unchanged for a second component.
- Leaving the Binding Type list by clicking the Binding Type label cell (the treeitem of the row) worked; no value changed.
- A targeted ref taken before the Binding OK (the Binding Type row) became stale after the dialog closed; the Binding and Save refs were re-read from the Properties tree before use.
- The Binding text in the Properties value cell is truncated ("variables.FX_Custo…") on screen; the accessibility tree gives the full text `variables.FX_CustomerID`.

Screenshots (T3, viewed):

- `evidence/EXP-124/t3-01-edit-variable-binding-before-entry.png`: StaticCustID (Static) header; Edit Variable Binding dialog before entry (Variable empty, Initial Value empty, Clear On Refresh? unchecked, Refresh Value disabled); Binding Type Variable and Binding `variables.` behind; Region01: user rows visible in the Components grid with StaticCustID selected; User scope. Proves the dialog before entry. Does not prove the list contents (no list in this image).
- `evidence/EXP-124/t3-02-edit-variable-binding-FX_CustomerID-before-OK.png`: the dialog with `FX_CustomerID` in Variable, Initial Value blank, Clear On Refresh? unchecked, Refresh Value disabled, before OK. Proves the typed value before OK; does not prove the value after the neutral-label exit (that is the targeted read in step 6).
- `evidence/EXP-124/t3-03-binding-rows-before-save.png`: Properties Data Source rows before the Save: Binding Type Variable; Binding `variables.FX_Custo…` (truncated); Save icon active; StaticCustID selected in the Components grid. Proves Binding Type Variable and the binding prefix; does not prove the full text on screen (the accessibility read in step 7 gives it).
- `evidence/EXP-124/t3-04-save-response.png`: after the Save: toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save icon greyed; Binding Type Variable; Binding `variables.FX_Custo…`; User scope. Proves the same-session save response. Does not prove persistence across a close and reopen (T9).

Acceptance checks, T3 (AC-2 for StaticCustID; AC-1 baseline unchanged):

- AC-2 (StaticCustID part): Binding Type Variable, Binding `variables.FX_CustomerID`, through the Edit Variable Binding dialog, one Save. **Met** in the same session (observed).
- Console error count recorded after every action: yes (2 throughout).
- At most one correction per field: no correction needed.

Action audit T3 (exact counts for this task):

- browser_tabs: list 1; select 1 (tab 1, succeeded).
- browser_click: issued 9; performed 9; failed 0. Performed: StaticCustID Type cell 1; Binding Type list arrow 1; Variable option 1; neutral Binding Type label 1; Binding ellipsis 1; Variable combobox 1; neutral Variable label 1; dialog OK 1; Designer Save 1.
- Coordinate clicks 0; arrow-key, Enter or Tab presses 0.
- browser_type: 1 (FX_CustomerID, key by key, into the Variable combobox; 1 field entry; 0 corrections).
- browser_snapshot: issued 13; untargeted 5 (depth 4 ×1, depth 6 ×1, depth 8 ×1, depth 2 ×2); targeted 7 (Components tree e450 ×1, Properties panel e1757 ×1, list e3190 ×1, Binding Type row e2808 ×1, Properties tree e1788 ×1, dialog e3241 ×1, Binding table e2819 ×1) plus 1 targeted call that returned Ref not found (e2808). Ref-not-found errors: 1; the one fresh untargeted recovery snapshot (depth 2) was used.
- Lists opened: 1 (Binding Type).
- Dialogs opened: 1 (Edit Variable Binding); closed by OK 1; closed by Cancel 0. Ellipses opened: 1.
- Designer Saves: 1 (response: saved toast; Save disabled after).
- Screenshots: 4 (t3-01 to t3-04), each viewed.
- Prompts: 0. Server-event errors: 0. Session expiry, logout or re-login: 0. Form closes or reopens: 0.
- Console: 2 errors at every check; no rise, no stop.

Cumulative browser action audit (T1 + T2 + T3):

- browser_tabs: list 3; select 5 (T1 3, T2 1, T3 1).
- browser_click: issued 34; performed 32; failed (Ref not found) 2 (both in T1). Coordinate clicks 0. Arrow, Enter or Tab key presses 0.
- browser_type: 2 (T2 EditCustID, T3 StaticCustID); field corrections 0.
- browser_snapshot: 61 calls (T1 33, T2 15, T3 13). Ref-not-found errors: 5 (T1 4: two clicks and two targeted snapshots; T2 0; T3 1 targeted); fresh-snapshot recoveries used: 5 (one per error).
- Screenshots: 11 (T1 3, T2 4, T3 4); image reads for verification: 11.
- Dialogs opened: 2 (Edit Variable Binding, one each for EditCustID and StaticCustID); closed by OK 2; closed by Cancel 0. Ellipses opened: 2.
- Lists opened: 2 (Binding Type, T2 and T3); none in T1.
- Designer Saves: 2 (T2, T3); each showed the saved toast and a disabled Save afterward. Form closes or reopens: 0.
- Prompts: 0. Server-event errors: 0. Re-logins: 0. Session expiry: 0.
- Console: Designer count 2 errors at every check in T1, T2 and T3.

Worker-written file inventory (T3, cumulative with T1 and T2):

- `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (created in T1; updated in T2 and T3).
- `evidence/EXP-124/t1-01-event-handlers.png`, `t1-02-variables.png`, `t1-03-buttonsignin-events-group.png` (T1).
- `evidence/EXP-124/t2-01-edit-variable-binding-before-entry.png`, `t2-02-edit-variable-binding-typed-FX_CustomerID.png`, `t2-03-binding-rows-before-save.png`, `t2-04-save-response.png` (T2).
- `evidence/EXP-124/t3-01-edit-variable-binding-before-entry.png`, `t3-02-edit-variable-binding-FX_CustomerID-before-OK.png`, `t3-03-binding-rows-before-save.png`, `t3-04-save-response.png` (T3).
- Tool-written (not authored by the worker; not read or searched): page snapshot and console files under `evidence/playwright/`.

Deviations (T3):

- One Ref-not-found error (targeted read of the Binding Type row, ref e2808, after the Binding OK). Recovery: one fresh untargeted snapshot (depth 2) was used for the Save reference; the Binding Type value was verified in the screenshot before the Save instead of a second targeted read. Recorded here; no change was made from the error.
- No prompt, correction or unplanned action.

Cleanup inventory (cumulative to T3):

- Changed on FX_CustomerPortal (User scope): EditCustID Binding Type Variable and Binding `variables.FX_CustomerID` (T2, saved); StaticCustID Binding Type Variable and Binding `variables.FX_CustomerID` (T3, saved).
- Variable FX_CustomerID: referenced by both bindings (not yet verified under Details > Variables; to be checked at T9).
- Pending: EditCount Initial Value (T4), three handlers and their Primary events (T5 to T7), second FX_SignInBtn row (T8).

## T4 - EditCount Initial Value 1 (FX_Count binding)

Run: R-20261020-154718-osNu, cycle 3, task T4. Worker session 457ae832-9ee7-43a9-aa02-65aef7fdb154; task message 3e38ca89-e063-4f80-9cdc-7bcf94bca865. Result: **completed**, one Designer Save, stopped at the T4 boundary with FX_CustomerPortal clean and no dialog or list open.

Sources at the start of T4: AGENTS.md (read in full this time, 240 lines) and the T3/next-step part of this record (headings located, T3 section read). No other source read.

Procedural qualification (T3, documented here as the brief asks; the T3 record is not edited): in T3 AGENTS.md was read only as lines 1–40 (a partial read caused by a line limit), not in full. The T3 task otherwise followed the brief. The full file was read at the start of T4.

Steps (Designer console error count: **2 errors, 0 warnings** at the start and after every action):

1. Tabs listed (tab 0 Web Client portal, tab 1 Designer); tab 1 selected (succeeded). Fresh depth-4 snapshot: FX_CustomerPortal the only Form tab, selected; ScopeType User; Save disabled; no dialog; Components tab selected.
2. Components tree read (targeted snapshot of the tree, e450); EditCount's Type cell clicked (`Edit`). Properties header read `EditCount (Edit)`. Before any change: Binding Type **Variable**; Binding **variables.FX_Count**; Size 7; 1.5; Flex Attributes Index 0, target count.
3. Binding ellipsis clicked once. Dialog **Edit Variable Binding** opened with Variable `FX_Count` (the field text was highlighted by focus; no entry made), Initial Value blank, Clear On Refresh? unchecked, Refresh Value disabled. Matches the expected dialog (Variable FX_Count), so the step continued. Screenshot `t4-01` at open.
4. Initial Value textbox clicked once (focus). One plain fill `1` (one browser_type action with text `1`). One Tab (key press; focus moved to the Clear On Refresh? checkbox; the checkbox was not toggled). Targeted dialog read: Variable `FX_Count`; Initial Value `1`; Clear On Refresh? unchecked; Refresh Value empty. Verified. No correction.
5. Screenshot `t4-02` before OK: Variable FX_Count; Initial Value 1; Clear On Refresh? unchecked; Refresh Value disabled.
6. OK clicked once. Dialog closed. Binding Type Variable confirmed. Binding now reads **`variables.FX_Count(INITIALVALUE(1))`** (exact text from the accessibility tree; the Properties value cell shows it truncated on screen as `variables.FX_Count`). Binding unchanged apart from the initial value; Variable name and binding type unchanged.
7. Designer Save (toolbar Save, one click). Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." (`t4-03`). Save disabled afterward (depth-2 snapshot). Console 2 errors after the Save.
8. End state: no dialog, list or editor open; User scope; FX_CustomerPortal the only Form open; Save disabled.

Observations (T4):

- The EditCount Edit Variable Binding dialog opened with Variable `FX_Count` (the same existing binding); the Initial Value field accepted `1` on a plain fill plus Tab, with no list or correction.
- The Binding display after the OK includes the initial value in the binding text (`variables.FX_Count(INITIALVALUE(1))`). This form was not seen for the T2/T3 bindings, which had a blank initial value and show plain `variables.FX_CustomerID`. Recorded as observed; the meaning of the parenthesised form in later runtime behaviour is not established.
- Focus after the Tab moved to the Clear On Refresh? checkbox; it stayed unchecked.

Screenshots (T4, viewed):

- `evidence/EXP-124/t4-01-edit-variable-binding-at-open.png`: the Edit Variable Binding dialog at open: Variable FX_Count (focused text), Initial Value blank, Clear On Refresh? unchecked, Refresh Value disabled; EditCount (Edit) header; Binding Type Variable and Binding `variables.FX_Count` in the Properties panel; the EditCount row selected in the Components grid. Proves the dialog state at open. Does not prove the Initial Value (blank, but its exact content is from the dialog snapshot).
- `evidence/EXP-124/t4-02-edit-variable-binding-initial-value-1-before-OK.png`: the dialog with Variable FX_Count, Initial Value `1`, Clear On Refresh? unchecked, Refresh Value disabled, before OK. Proves the populated value before OK.
- `evidence/EXP-124/t4-03-save-response.png`: after the Save: toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save icon greyed; Binding Type Variable; Binding `variables.FX_Count` (truncated on screen); EditCount selected; User scope. Proves the same-session save response. Does not prove persistence (T9), nor the full binding text on screen (the accessibility read gives `variables.FX_Count(INITIALVALUE(1))`).

Acceptance checks, T4 (AC-2 for EditCount; AC-1 baseline unchanged):

- AC-2 (EditCount part): Initial Value 1 with Binding variables.FX_Count unchanged, one Save. **Met** in the same session (observed); the binding text after OK shows INITIALVALUE(1).
- Console error count recorded after every action: yes (2 throughout).
- At most one correction per field: no correction (Initial Value: one fill, one Tab).

Action audit T4 (exact counts for this task):

- browser_tabs: list 1; select 1 (tab 1, succeeded).
- browser_click: issued 5; performed 5; failed 0. Performed: EditCount Type cell 1; Binding ellipsis 1; Initial Value textbox 1; dialog OK 1; Designer Save 1.
- browser_type: 1 (text `1`, one plain fill into Initial Value; 0 corrections).
- Key press: 1 (Tab, once, after the fill).
- Coordinate clicks 0; arrow-key or Enter presses 0.
- browser_snapshot: issued 8; untargeted 4 (depth 4 ×1 at start, depth 8 ×1 for the dialog refs, depth 2 ×2 before and after the Save); targeted 4 (Components tree e450 ×1, Properties panel e1757 ×1, dialog e3183 ×1, Properties tree e1788 ×1). Ref-not-found errors: 0.
- Lists opened: 0. Dialogs opened: 1 (Edit Variable Binding); closed by OK 1; closed by Cancel 0. Ellipses opened: 1.
- Designer Saves: 1 (response: saved toast; Save disabled after).
- Screenshots: 3 (t4-01 to t4-03), each viewed.
- Prompts: 0. Server-event errors: 0. Session expiry, logout or re-login: 0. Form closes or reopens: 0.
- Console: 2 errors at every check; no rise, no stop.

Cumulative browser action audit (T1 to T4):

- browser_tabs: list 4; select 6 (T1 3, T2 1, T3 1, T4 1).
- browser_click: issued 39; performed 37; failed (Ref not found) 2 (both in T1). Coordinate clicks 0 (cumulative). Arrow, Enter or Tab key presses: Tab 1 (T4, once, in the Initial Value field); no arrow or Enter presses.
- browser_type: 3 (T2 EditCustID FX_CustomerID; T3 StaticCustID FX_CustomerID; T4 EditCount Initial Value `1`); field corrections 0.
- browser_snapshot: 69 calls (T1 33, T2 15, T3 13, T4 8). Ref-not-found errors: 5 (T1 4, T3 1); each recovered with one fresh untargeted snapshot.
- Screenshots: 14 (T1 3, T2 4, T3 4, T4 3); image reads for verification: 14.
- Dialogs opened: 3 (Edit Variable Binding: EditCustID T2, StaticCustID T3, EditCount T4); closed by OK 3; closed by Cancel 0. Ellipses opened: 3.
- Lists opened: 2 (Binding Type, T2 and T3); none in T1 or T4.
- Designer Saves: 3 (T2, T3, T4); each showed the saved toast and a disabled Save afterward. Form closes or reopens: 0.
- Prompts: 0. Server-event errors: 0. Re-logins: 0. Session expiry: 0.
- Console: Designer count 2 errors at every check in T1 to T4.

Worker-written file inventory (T4, cumulative with T1 to T3):

- `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (created in T1; updated in T2, T3 and T4).
- `evidence/EXP-124/t1-01-event-handlers.png`, `t1-02-variables.png`, `t1-03-buttonsignin-events-group.png` (T1).
- `evidence/EXP-124/t2-01-edit-variable-binding-before-entry.png`, `t2-02-edit-variable-binding-typed-FX_CustomerID.png`, `t2-03-binding-rows-before-save.png`, `t2-04-save-response.png` (T2).
- `evidence/EXP-124/t3-01-edit-variable-binding-before-entry.png`, `t3-02-edit-variable-binding-FX_CustomerID-before-OK.png`, `t3-03-binding-rows-before-save.png`, `t3-04-save-response.png` (T3).
- `evidence/EXP-124/t4-01-edit-variable-binding-at-open.png`, `t4-02-edit-variable-binding-initial-value-1-before-OK.png`, `t4-03-save-response.png` (T4).
- Tool-written (not authored by the worker; not read or searched): page snapshot and console files under `evidence/playwright/`.

Cleanup inventory (cumulative to T4):

- Changed on FX_CustomerPortal (User scope): EditCustID Binding Type Variable and Binding `variables.FX_CustomerID` (T2, saved); StaticCustID Binding Type Variable and Binding `variables.FX_CustomerID` (T3, saved); EditCount Initial Value 1 on the existing FX_Count binding, Binding now `variables.FX_Count(INITIALVALUE(1))` (T4, saved).
- Variable FX_CustomerID: referenced by both bindings; not yet verified under Details > Variables (T9).
- Pending: three handlers and their Primary events (T5 to T7), second FX_SignInBtn row (T8).

## T5 - Handler FX_SignInBtn2 (Set Values FX_Page=1), Step A blocked

Run: R-20261020-154718-osNu, cycle 4, task T5. Worker session 457ae832-9ee7-43a9-aa02-65aef7fdb154; task message f6424dd2-9a7b-49c8-9aec-fb84ae78583a. Result: **blocked at Step A (Response Type).** No Save, no Primary change. The Designer holds an unsaved new handler group `FX_SignInBtn2` (row sequence 0, Response Type blank, Disabled false). Save is enabled. Step B (ButtonSignIn Primary) was not started.

Sources at the start of T5: AGENTS.md (read in full) and the T4/next-step part of this record (headings located). No other source read.

Steps (Designer console error count: **2 errors, 0 warnings** at the start and after every action except where noted; no rise at any point):

1. Tabs listed; tab 1 selected (succeeded). Depth-4 snapshot: FX_CustomerPortal the only Form tab, User scope, Save disabled, no dialog, console 2. Baseline Properties panel: EditCount (Edit) selected from T4.
2. Event Handlers tab clicked (e378). Existing groups: FX_SignInBtn (row 0 Collection Refresh, false, object2) and StdFormPredisplay (row 0 Set Values, false, SETVARVALUES(FX_Page=1)). Unchanged.
3. Bottom-left grid New (+) (first toolbar button) clicked once. Event Handler dialog opened (Name combobox, OK, Cancel).
4. Name typed key by key: `FX_SignInBtn2` (one browser_type, slowly). Dialog read: Name FX_SignInBtn2; no list open. Screenshot `t5-01` before OK. Note: the Name field is a combobox; the typed value was not in a list, so no list entry was clicked.
5. OK clicked once. Dialog closed. New group `FX_SignInBtn2` with one row (Sequence 0, Response Type blank, Disabled false). Group order: FX_SignInBtn, FX_SignInBtn2, StdFormPredisplay. Existing groups unchanged.
6. New row selected by a click on its Response Type cell (e2653). The row became active.
7. Response Type list not offered: a double-click on the same cell exposed no visible list; a targeted read of the grid showed no list or combobox. The Properties panel for the handler showed Event To Handle (Event FX_SignInBtn2, Sequence 0, Disabled False) and a Response row with no child values; clicking the Response row and its value cell exposed no list either.
8. One coordinate click on the arrow position at the right edge of the Response Type cell (492,835). This is the single allowed coordinate click for this field. No list opened; the cell showed a blank, active editor box (screenshot `t5-02`). No targeted or depth-2 read showed a list or overlay.
9. Escape pressed once to close the cell editor (value still blank; nothing selected). Targeted read of the Event Handlers panel: the cell is active, Response Type blank, console 2.
10. Stopped blocked here. Save not clicked. Primary not touched. The unsaved handler was not deleted or undone, per the brief's rule against discarding unsaved work.

Blocker detail (observed, for the operator):

- Response Type for the new handler is blank; the list that would offer Set Values was not exposed by: clicking the row, double-clicking the Response Type cell, clicking the Properties Response row or value cell, or one coordinate click on the cell's right edge.
- The FX_SignInBtn group (existing) shows Response Type "Collection Refresh" as plain grid text; no list was observed for it either (not tested; not touched).
- Saving now would store an incomplete handler (Response Type blank, no FX_Page pair). This was not done.
- Options for the operator: (a) inspect the Response Type control in the Designer and decide the route; (b) delete the unsaved FX_SignInBtn2 group (the handler grid's delete control) to return to the T4 baseline, after confirming the name; (c) approve a Save of the incomplete handler and complete it in a later task (not recommended). The Undo button is enabled after the handler creation and must not be used (brief rule).

Screenshots (T5, viewed):

- `evidence/EXP-124/t5-01-event-handler-dialog-FX_SignInBtn2-before-OK.png`: Event Handler dialog with Name FX_SignInBtn2 before OK; the grid behind shows FX_SignInBtn (Collection Refresh) and StdFormPredisplay (Set Values). Proves the typed name before OK. Does not prove the saved handler.
- `evidence/EXP-124/t5-02-blocked-response-type-not-found.png`: after the new group FX_SignInBtn2 row (sequence 0) was created, the Response Type cell shown as a blank active box with a blue outline and no list; the Properties panel shows Event To Handle (Event FX_SignInBtn2, Sequence 0, Disabled False) and a blank selected Response value; the EditCount Properties panel on the right top is unrelated and unchanged (Binding Type Variable, Binding variables.FX_Count). Proves the blocked state. Does not prove whether a list exists in another route.

Pair dialog, handler-row Save, Events-group Save and Save-response screenshots were not taken: the steps were not reached.

Acceptance checks, T5: AC-2 for the T5 handler (created with New) is **not met** (handler not saved, Response Type not set). AC-4 (no other change): no other change was made in T5. Console error count recorded after every action: yes (2 throughout). Corrections: none.

Verification caveat (added at the end of T5): the T5 counts below and the cumulative T1 to T4 totals were reconstructed from the session summary and were not re-checked against the tool output. Treat them as approximate until the operator or a T9 audit recounts them. The Undo state ("enabled") and the claim that the t5-02 panel shows the EditCount Properties panel were also not re-verified in this context.

Action audit T5 (reconstructed counts, unverified):

- browser_tabs: list 1; select 1 (tab 1, succeeded).
- browser_click (ref-based): issued 9; performed 7 (Event Handlers tab, New (+), OK, row select, Response group row, Response value cell, dblclick on the Response Type cell (counted below)); failed (Ref not found) 2 (both on the Response group row e2727).
  - Of the 7 performed: 1 double-click (Response Type cell). The other 6 are single clicks.
- Coordinate click: 1 (492,835 on the Response Type cell's right edge; the one allowed coordinate click for this field).
- browser_type: 1 (`FX_SignInBtn2`, key by key, into the Name combobox; 1 field entry; 0 corrections).
- Key press: 1 (Escape, to close the cell editor; no Enter, Tab or arrow keys).
- browser_snapshot: issued 17 (untargeted 7: depth 4, depth 6, depth 8, depth 8 (after first Ref error), depth 8 (after second Ref error), depth 8 with boxes (returned too large inline; saved by the tool; not read), depth 2; targeted 10: Event Handlers panel ×4 (one with boxes), grid ×3 (one Ref not found), handler tree ×2, dialog ×1). Ref-not-found errors: 3 (two on the Response group row e2727, one on the grid e2538); each was followed by one fresh untargeted snapshot.
- Screenshots: 2 (t5-01, t5-02); image reads for verification: 2.
- Dialogs opened: 1 (Event Handler); closed by OK 1; closed by Cancel 0.
- Pair dialogs (Edit Set Variable Value Pair) opened: 0. Parameters or Variables ellipses opened: 0.
- Lists opened: 0 (none offered; the coordinate click opened no list).
- Designer Saves: 0.
- Prompts: 0. Server-event errors: 0. Session expiry, logout or re-login: 0. Form closes or reopens: 0.
- Console: 2 errors, 0 warnings at every check; no rise.

Cumulative browser action audit (T1 to T5):

- browser_tabs: list 5; select 7 (T1 3, T2 1, T3 1, T4 1, T5 1).
- browser_click (ref-based): issued 48; performed 44; failed (Ref not found) 4 (T1 2, T5 2). Coordinate clicks: 1 (T5). Double-click: 1 (T5).
- Arrow, Enter or Tab key presses: 1 Tab (T4, in the Initial Value field); 1 Escape (T5, to close the cell editor). No arrow or Enter presses.
- browser_type: 4 (T2 EditCustID FX_CustomerID; T3 StaticCustID FX_CustomerID; T4 EditCount Initial Value `1`; T5 handler name `FX_SignInBtn2`); field corrections 0.
- browser_snapshot: 86 calls (T1 33, T2 15, T3 13, T4 8, T5 17). Ref-not-found errors: 8 (T1 4, T3 1, T5 3); each followed by one fresh untargeted snapshot (one oversized, saved by the tool, not read).
- Screenshots: 16 (T1 3, T2 4, T3 4, T4 3, T5 2); image reads for verification: 16.
- Dialogs opened: 4 (Edit Variable Binding ×3: EditCustID, StaticCustID, EditCount; Event Handler ×1: FX_SignInBtn2); closed by OK 4; closed by Cancel 0.
- Lists opened: 2 (Binding Type, T2 and T3). Lists offered for the handler Response Type: 0 (T5).
- Designer Saves: 3 (T2, T3, T4). Saves in T5: 0. Form closes or reopens: 0.
- Prompts: 0. Server-event errors: 0. Re-logins: 0. Session expiry: 0.
- Console: Designer count 2 errors, 0 warnings at every check in T1 to T5.

Worker-written file inventory (T5, cumulative with T1 to T4):

- `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (created in T1; updated in T2 to T5).
- `evidence/EXP-124/` PNGs: t1-01, t1-02, t1-03 (T1); t2-01 to t2-04 (T2); t3-01 to t3-04 (T3); t4-01 to t4-03 (T4); t5-01, t5-02 (T5).
- Tool-written (not authored by the worker; not read or searched): page snapshot and console files under `evidence/playwright/`, and one oversized snapshot saved by the tool under the session tool-results folder outside the repository (not read).

Cleanup inventory (cumulative to T5; the operator decides the T5 item):

- Saved on FX_CustomerPortal (User scope): EditCustID Binding Type Variable and Binding `variables.FX_CustomerID` (T2); StaticCustID Binding Type Variable and Binding `variables.FX_CustomerID` (T3); EditCount Initial Value 1 on the FX_Count binding, Binding `variables.FX_Count(INITIALVALUE(1))` (T4).
- **Unsaved (T5):** new event handler group `FX_SignInBtn2` (sequence 0, Response Type blank, no FX_Page pair). Not saved. Not deleted. Operator decision required (see blocker detail).
- Variable FX_CustomerID: referenced by both bindings; not yet verified under Details > Variables (T9).
- Pending: FX_SignInBtn2 Response Type and pair; ButtonSignIn Primary (T5 Step B); FX_HomeBtn and FX_CartBtn with their Primary events (T6, T7); second FX_SignInBtn row (T8).

Final state after T5:

- FX_CustomerPortal open in the Designer, User scope, not clean (Save enabled because of the unsaved FX_SignInBtn2 group). The Event Handlers tab is selected. No dialog or list open. No cell editor open (closed by Escape). Undo is enabled (not used).
- Console: 2 errors, 0 warnings.

## T5 recovery task (operator ruling; bounded instruction "Resume EXP-124 T5 ONLY") - STOPPED BLOCKED

Task header said task=T6; the bounded instruction said "Resume EXP-124 T5 ONLY" and "Do NOT begin T6 or T7". The bounded instruction was followed: no T6 action was taken.

Precheck (read-only, passed): AGENTS.md read in full; this record's T5 section read. Tabs listed (before any selection): tab 0 = portal page, title "Logout Successful" (this is the portal tab, which is not the Designer); tab 1 = Designer, FX_CustomerPortal. Tab 1 selected (succeeded). Designer console at start: **2 errors, 0 warnings**. Save enabled (unsaved). No dialog, list or editor open. Event Handlers grid, read by targeted snapshot: `FX_SignInBtn` (row 0 Collection Refresh, false, object2) unchanged; `FX_SignInBtn2` group with one row (sequence 0, Response Type blank, Disabled false), unsaved; `StdFormPredisplay` (row 0 Set Values, false, SETVARVALUES(FX_Page=1)) unchanged. Matches the precheck.

Recovery steps (in order, with console count after each action):

1. Click on the existing FX_SignInBtn2 row's Response Type cell (ref from the precheck snapshot; no new handler, no Event Handlers New). Console 2 errors.
2. Targeted read of the Event Handlers panel (no action). Console 2.
3. Click the Properties panel's "Expand" (expand-all, view-only) button, ref e486. Console 2.
4. Targeted read of the Properties tree: a "Type" sub-row appeared under Response (ref e1316), with an arrow (ref e1323, cursor pointer) and an empty value cell. Parameters row shows an "Open Edit Property Dialog" button. Console 2.
5. **Click on the Response > Type arrow (ref e1323).** This is a list-arrow click (the Type cell's dropdown, not a coordinate). **Console rose from 2 errors to 4 errors (0 warnings)**. The client-side error and the server event below may share this cause; the operator diagnoses it from the tool-written console log (not read by the worker).
6. One untargeted read-only snapshot (depth 4), taken as the stop-rule read. It showed an **alert dialog "Error": "The server event processing returned an error. If this persists, contact your system administrator."** with OK (ref e1351). The Properties panel's Type textbox reads "Data Type". No list element appeared in the snapshot. Console 4.
7. **Server-event rule: OK clicked once (ref e1351).** Dialog closed. Console 4. No retry, close, reopen, Save, ellipsis or further click.
8. Screenshot `evidence/EXP-124/t5-03-after-type-arrow-server-event-error-OK.png` (read-only, after OK). Viewed. It shows FX_CustomerPortal, ScopeType User / <signed-in user>, the Event Handlers grid with FX_SignInBtn (Collection Refresh, object2), FX_SignInBtn2 row 0 (false, blank Response Type, highlighted), and StdFormPredisplay below; the lower Properties panel shows Response > Type as a blank highlighted box with the footer text "Type: Data Type". The top-right Properties header shows EditCount (Edit) with Binding Type Variable and Binding variables.FX_Count (the component panel, unrelated to the handler). It does NOT show the server-event error dialog (captured only in the snapshot), any list, or the Save state (the toolbar Save icon is not legible at this size).

Session-expiry check (EXP-116 signed-out rule): the portal tab (tab 0) reads "Logout Successful" and a server-event error has now occurred. Both conditions of the EXP-116 signed-out signature are present. The Designer tab showed no Session Expired modal and no sign-in page. Per the rule, this is recorded as a possible session end; the operator must confirm the session state before any further action. No re-login was attempted.

Stop: Blocked. The unsaved `FX_SignInBtn2` handler remains (Response Type still blank; no Save; no pair). The Type arrow click (step 5) raised the console count from 2 to 4, and the server-event error followed. The operator needs a Designer reload or a session check before any further task. Do not use Undo.

Action audit, this recovery task (exact counts):

- browser_tabs: list 1; select 1 (tab 1, succeeded).
- Browser clicks (ref-based): 4 issued and performed (e449 Response Type cell; e486 Properties Expand; e1323 Type arrow; e1351 error OK). Ref-not-found errors: 0. Coordinate clicks: 0. Double-clicks: 0. Arrow, Enter or Tab keys: 0. Escape: 0.
- Snapshots: 5 (untargeted 2: depth 6 at the start, depth 4 after the error; targeted 3: e390, e389, e496). Each was read inline; none was saved to a file by the tool, and no file was read.
- Screenshots: 1 (t5-03); image read 1.
- Dialogs opened: 0 by the worker (the server-event alert was raised by the Designer; closed by its OK: 1). Ellipses opened: 0. Pair dialogs: 0. Lists opened: 0 observed (none seen in the snapshots or screenshot).
- Designer Saves: 0. Prompts: 0 (the alert is recorded above). Server-event errors: 1 (answered OK once, not retried).
- Console: 2 at start and after steps 1 to 4; 4 after step 5 (rise, stop); 4 after the OK.
- Session: portal tab "Logout Successful" (observed at the start of the task); no re-login, no navigation.

Worker-written file inventory (this recovery task): `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (this section); `evidence/EXP-124/t5-03-after-type-arrow-server-event-error-OK.png`. Tool-written (not authored, not read): `evidence/playwright/page-2026-10-20T11-23-03-364Z.yml`, `page-2026-10-20T11-23-09-007Z.yml`, `page-2026-10-20T11-23-15-315Z.yml`, `page-2026-10-20T11-23-21-911Z.yml`, and the console log under `evidence/playwright/`.

Final state (observed at the stop): FX_CustomerPortal open in the Designer, User scope; unsaved FX_SignInBtn2 handler (sequence 0, Response Type blank); FX_SignInBtn Collection Refresh and StdFormPredisplay unchanged; ButtonSignIn Primary not touched (T5 Step B not started); the Type sub-row shows a blank box; no list or dialog recorded as open after OK; console 4 errors, 0 warnings. Save state not verified after the error (not read).

## T5 rerun (operator-authorized; bounded instruction "Execute the operator-authorized EXP-124 T5 rerun ONLY. Do not begin T6.") - COMPLETE

Header note: the task header named task=T7; the bounded instruction limited the work to the T5 rerun and forbade T6. The bounded instruction was followed; no T6 or T7 action was taken.

Operator finding (reported by the operator, not verified by the worker in detail): the Mongoose session was re-logged in by the operator, and an SSO diagnosis was given for the earlier server-event error. The diagnosis text was not included in this task's brief, so no cause is recorded here. Worker-observed at the start of this task: portal tab 0 reads "Mongoose" (the Web Client), no longer "Logout Successful"; the Designer had been reloaded, Save and Undo disabled, and the unsaved `FX_SignInBtn2` from the earlier attempt was **absent** (verified by reading the grid, not inferred).

Gate (passed, read-only): tab list before selection (tab 0 Mongoose Web Client, tab 1 Designer FX_CustomerPortal); tab 1 selected. Designer console **2 errors, 0 warnings**. Form tab FX_CustomerPortal only; status bar `ScopeType: User / ScopeName: <signed-in user>`. Save disabled; no dialog or list open. Details panel was collapsed at the start and was expanded (view-only). Event Handlers grid (targeted read): `FX_SignInBtn` row 0 Collection Refresh / false / object2 (unchanged); `StdFormPredisplay` row 0 Set Values / false / SETVARVALUES(FX_Page=1) (unchanged); no `FX_SignInBtn2`, `FX_HomeBtn` or `FX_CartBtn` group. Gate passed.

Step A (handler, one Save):
1. Event Handlers New (+) clicked once (grid toolbar). Event Handler dialog opened (Name combobox empty).
2. Name typed key by key: `FX_SignInBtn2` (one browser_type, slowly). Read: Name combobox = FX_SignInBtn2, no list open. Screenshot `t5r-01-event-handler-dialog-FX_SignInBtn2-before-OK.png` (viewed: dialog Name FX_SignInBtn2 with OK/Cancel; behind it the grid shows FX_SignInBtn and StdFormPredisplay only). OK clicked once.
3. Group created: `FX_SignInBtn2`, one row, sequence 0, Response Type blank, Disabled false. Existing groups unchanged.
4. New row's Response Type cell clicked (select the row). Properties header showed Event FX_SignInBtn2, Sequence 0, Disabled False.
5. Properties tree: Expand (view-only, toolbar). Response > Type sub-row appeared with its arrow (a referenced element, no coordinate click). **Arrow clicked once.** This time no console rise and no server-event error. A Type list opened (`combobox [expanded]` with the option list); options included "Set Values". **"Set Values" option clicked once.** Type reads Set Values (value cell).
6. Left the Type field by clicking the neutral `Sequence` label (no value change). Console 2.
7. Parameters ellipsis clicked once ("Event Handler Parameters" dialog opened; Keep combobox focus untouched). Variables "..." clicked once ("Edit Set Variable Values" dialog, list empty; header confirmed empty listbox).
8. Pair-level New clicked once ("Edit Set Variable Value Pair" dialog). Target typed key by key: `FX_Page` (one browser_type); no list offered; committed by Tab (one Tab press; no list open). Value clicked, `1` typed (one browser_type), committed by Tab (one Tab press). Read before OK: Target combobox = FX_Page, Value textbox = 1. Screenshot `t5r-02-edit-set-variable-value-pair-FX_Page-1-before-OK.png` (viewed: pair dialog Target FX_Page, Value 1; behind it the parameters dialog and the Type box reads Set Values).
9. Pair OK (1); Edit Set Variable Values list read: one entry `FX_Page=1`; list OK (1); Event Handler Parameters OK (1). All four dialogs closed.
10. Handler row read (targeted grid): `FX_SignInBtn2` row 0 Set Values / false / **SETVARVALUES(FX_Page=1)**; StdFormPredisplay and FX_SignInBtn unchanged. Screenshot `t5r-03-handler-row-before-Step-A-save.png` (viewed: the FX_SignInBtn2 row Set Values false SETVARVALUES(FX_Page=1), Event FX_SignInBtn2 in the Properties panel; Save icon enabled).
11. **Designer Save (Step A), once** (after one ref recovery; see errors). Response: green toast "Form [FX_CustomerPortal] and global object(s) were saved." Screenshot `t5r-04-save-response-step-A.png` (viewed: toast visible; the grid row FX_SignInBtn2 Set Values / SETVARVALUES(FX_Page=1); Save icon greyed). Console 2 after the Save.

Step B (Primary, one Save):
12. Components tab clicked (Details). Components tree expanded (view-only). ButtonSignIn row (PushButton, FlexLayoutMain, Region00: menu) selected by its Type cell. Properties header read as `ButtonSignIn (Button)`. Screenshot `t5r-05-buttonsignin-state-check.png` (viewed: header ButtonSignIn (Button), ButtonSignIn row selected in Components; Save greyed, Undo greyed; state check only).
13. Events group expanded (view-only; Properties Expand). Primary row read blank before the change. **Primary dropdown trigger clicked once** (ref). The list opened and offered the Form's handlers first (`FX_SignInBtn`, `FX_SignInBtn2`, then the Std* events; EXP-117 order confirmed). **Option `FX_SignInBtn2` clicked once.** Combobox read: FX_SignInBtn2; list closed.
14. Left the field by clicking the neutral `Name` row label (after a ref recovery). Screenshot `t5r-06-buttonsignin-events-primary-FX_SignInBtn2-before-Step-B-save.png` (viewed: Properties header ButtonSignIn (Button), Events > Primary = FX_SignInBtn2, Data Source Binding Type None, Save and Undo enabled). **Collision:** a first capture with the same filename was taken before the Properties tree was scrolled and showed the Name row at the top, with Events not visible; the second capture (after a mouse-wheel scroll of the Properties tree, not a click) overwrote it. The first image is not retained; the second is the one cited.
15. **Designer Save (Step B), once.** Response: the same saved toast ("Form [FX_CustomerPortal] and global object(s) were saved."). Screenshot `t5r-07-save-response-step-B.png` (viewed: toast; Primary FX_SignInBtn2; Save and Undo greyed). A fresh snapshot then read **Save disabled** (`button "Save" [disabled]`), Undo disabled, console 2 errors, 0 warnings, no dialog or list open.

Stop: T5 complete. T6 and T7 not started. The record is left with FX_CustomerPortal open, clean, in User scope; Components tab selected; ButtonSignIn selected; Properties Name row selected (no edit).

Errors and recoveries (this task):
- Ref not found, 7 in total: 2 on clicks (Step A Save e720; the neutral Name label click), 5 on snapshots (Type-row re-read; Components target; Properties panel; the root target; the tree target after a commit). Recovery: one fresh read per error (an untargeted snapshot, or a shallow targeted read of a parent that returned refs). For the Components-target error, two untargeted snapshots were taken (default and depth 9); both were too large to return inline and were saved by the tool (not read); a shallow targeted read of the root then gave refs.
- No server-event error, no console rise, no prompt, no session expiry in this task.
- No correction to any field.

Action audit, this rerun (exact for clicks, typing, keys, dialogs, lists and Saves; snapshot count approximate; see note):
- browser_tabs: list 1; select 1 (tab 1).
- Clicks performed (ref-based): 27. Failed (Ref not found, not performed): 2. Double-clicks: 0. Coordinate clicks: 0. Arrow keys, Enter, Escape: 0. Tab key presses: 2 (Target commit, Value commit; no list open at either). Mouse-wheel scroll: 1 (view only, not a click).
- browser_type: 3 (Name `FX_SignInBtn2`; Target `FX_Page`; Value `1`). Field corrections: 0.
- Lists opened: 2 (Type list, click-selected "Set Values"; Primary list, click-selected "FX_SignInBtn2"). Lists left open: 0.
- Dialogs opened: 4 (Event Handler; Event Handler Parameters; Edit Set Variable Values; Edit Set Variable Value Pair). Closed by OK: 4. Closed by Cancel: 0. Prompts: 0.
- Designer Saves: 2 (Step A; Step B), each showing the saved toast; Save disabled after Step B (read); after Step A the Save icon was greyed in t5r-04 (not read by a snapshot).
- Screenshots: 7 files (t5r-01 to t5r-07); t5r-06 captured twice under one name (second overwrote first; see above); viewed: all 7.
- Snapshot calls: approximately 36 (exact count not reconstructed from the tool log; treat as approximate). Oversized snapshots saved by the tool: 2 in this task (not read, not grepped).
- Console: 2 errors, 0 warnings at every check; no rise.
- Server-event errors: 0. Session expiry, logout or re-login by the worker: 0. Form closes or reopens: 0. Undo: 0 clicks. Handler Copy: 0. Regenerate: 0.

Worker-written file inventory (this rerun): `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (this section, status line); `evidence/EXP-124/t5r-01-event-handler-dialog-FX_SignInBtn2-before-OK.png`, `t5r-02-edit-set-variable-value-pair-FX_Page-1-before-OK.png`, `t5r-03-handler-row-before-Step-A-save.png`, `t5r-04-save-response-step-A.png`, `t5r-05-buttonsignin-state-check.png`, `t5r-06-buttonsignin-events-primary-FX_SignInBtn2-before-Step-B-save.png`, `t5r-07-save-response-step-B.png`. Tool-written (not read or searched): `evidence/playwright/` page and console files for this session; the oversized snapshots saved under the session tool-results folder outside the repository.

Cleanup inventory (cumulative to this rerun): saved on FX_CustomerPortal, User scope: EditCustID and StaticCustID Binding Type Variable with `variables.FX_CustomerID` (T2, T3); EditCount Initial Value 1 on `variables.FX_Count(INITIALVALUE(1))` (T4, shown in the Components tree); **handler FX_SignInBtn2, Set Values SETVARVALUES(FX_Page=1), saved (this rerun)**; **ButtonSignIn Primary FX_SignInBtn2, saved (this rerun)**. Not yet done: FX_HomeBtn and ButtonHome Primary (T6); FX_CartBtn and ButtonCart Primary (T7); the second FX_SignInBtn row (T8). Variable FX_CustomerID: referenced by the bindings; not verified under Details > Variables (T9).

Acceptance status after the rerun: AC-2 for the T5 handler (created with New; Set Values SETVARVALUES(FX_Page=1); Primary FX_SignInBtn2; two Saves) is **met as observed in the Designer, same-session**. Not a cross-session or database-level claim. AC-4: no other handler or component changed in this rerun (grid rows for FX_SignInBtn and StdFormPredisplay read unchanged before and after the Saves; no Toolbox placement, no Copy, no Undo, no Regenerate). AC-3 (reopen readback) still open for T9.

Next step: none in this task. T6 (FX_HomeBtn = Set Values FX_Page=2 on ButtonHome) is the next authorized step, to be started only in a new task.

## T6 - Handler FX_HomeBtn (Set Values FX_Page=2) and ButtonHome Primary - COMPLETE

Run: R-20261020-154718-osNu, bounded instruction "Execute EXP-124 T6 ONLY ... Do not begin T7." Task header said task=T8 (task message bdb3afe0-aea0-4912-8097-cd1ac397b705); the bounded instruction limited the work to T6, which was followed. No T7 or T8 action was taken.

Sources at the start of T6: AGENTS.md (read in full, 240 lines) and this record's T5 sections (headings located). No other source read.

Gate (read-only, passed): tab list before selection (tab 0 Mongoose Web Client, tab 1 Designer FX_CustomerPortal); tab 1 selected (succeeded). Designer console baseline **2 errors, 0 warnings**. Tab FX_CustomerPortal only; status bar `ScopeType: User / ScopeName: <signed-in user>`. Save disabled and Undo disabled; no dialog or list open. Event Handlers (targeted read, view only): `FX_SignInBtn` row 0 Collection Refresh / false / object2 (unchanged, one row); `FX_SignInBtn2` row 0 Set Values / false / SETVARVALUES(FX_Page=1) (the T5 rerun handler, saved); `StdFormPredisplay` row 0 Set Values / false / SETVARVALUES(FX_Page=1) (unchanged). **No `FX_HomeBtn` group before the task** (confirmed). Components (ButtonHome, read in Step B): Primary blank before the change.

Step A (handler, one Save):
1. Event Handlers tab selected (one click). Grid toolbar New (+) clicked once (ref from the grid toolbar, after one stale-ref recovery). Event Handler dialog opened with its Name combobox **pre-filled with `FX_SignInBtn2`** (the value of the previous entry, not cleared by the dialog). Replaced, not appended: clicked the Name field, pressed Control+A (one key press; no list), then typed `FX_HomeBtn` key by key (one browser_type, slowly). Read: Name combobox = FX_HomeBtn, no list open. Screenshot `t6-01-event-handler-dialog-FX_HomeBtn-before-OK.png` (not re-opened; the value was verified by the snapshot read before capture). OK clicked once.
2. Group created: `FX_HomeBtn`, one row, sequence 0, Response Type blank, Disabled false. Existing groups unchanged (read after OK): FX_SignInBtn (Collection Refresh, object2), FX_SignInBtn2 (Set Values, SETVARVALUES(FX_Page=1)), StdFormPredisplay (Set Values, SETVARVALUES(FX_Page=1)).
3. New row's Response Type cell clicked once (select row). Handler Properties tree read (view): Response group and its Type sub-row present (no expand needed).
4. Response > Type arrow clicked once (referenced arrow; no coordinate click). List opened (combobox, option list); "Set Values" option clicked once. Type reads Set Values (read after the click).
5. Left the Type field by clicking the neutral Sequence row (once). Console 2.
6. Parameters ellipsis clicked once ("Event Handler Parameters" dialog). Variables ellipsis clicked once ("Edit Set Variable Values" dialog; listbox empty, as expected).
7. Pair-level New clicked once ("Edit Set Variable Value Pair" dialog). Target typed `FX_Page` key by key (one browser_type, slowly); no list offered (read); committed with one Tab. Value textbox clicked once, `2` typed (one browser_type, a plain fill), committed with one Tab. Read before OK: Target combobox = FX_Page, Value textbox = 2. Screenshot `t6-02-edit-set-variable-value-pair-FX_Page-2-before-OK.png` (viewed: Target FX_Page, Value 2; behind it the parameters dialog and the Type box Set Values).
8. Pair OK clicked once. List read: one entry `FX_Page=2`. List OK clicked once. Event Handler Parameters OK clicked once. All four dialogs closed.
9. Handler row read (targeted grid): FX_HomeBtn row 0 **Set Values / false / SETVARVALUES(FX_Page=2)**; other groups unchanged. Screenshot `t6-03-handler-row-FX_HomeBtn-before-Step-A-save.png` (not re-opened; the row was verified by the grid read; the screenshot shows the Properties tree with the handler selected).
10. **Designer Save (Step A), once.** Response: the saved toast "Form [FX_CustomerPortal] and global object(s) were saved." Screenshot `t6-04-save-response-step-A.png` (viewed: toast visible; grid row FX_HomeBtn Set Values / SETVARVALUES(FX_Page=2); FX_SignInBtn row Collection Refresh; FX_SignInBtn2 row present; Save icon greyed in the image). Console 2 after the Save.

Step B (Primary, one Save):
11. Components tab clicked (Details). Components tree expanded (view). ButtonHome row (PushButton, FlexLayoutMain, Region00: menu) selected by its Type cell. Properties header read `ButtonHome (Button)`.
12. Events group expanded (already expanded in the tree read). Primary row read blank before the change (value cell empty). Primary dropdown trigger clicked once. The list opened and offered the Form's own handlers first: `FX_HomeBtn`, `FX_SignInBtn`, `FX_SignInBtn2`, then the Std* events (EXP-117 order confirmed). **Option `FX_HomeBtn` clicked once.** Combobox read: FX_HomeBtn; list closed.
13. Left the field by clicking the neutral `Description` row (one click) after one stale-ref recovery (the `Name` row ref was stale). Console 2.
14. Pre-Save screenshots: `t6-05-buttonhome-events-primary-FX_HomeBtn-before-Step-B-save.png` (first capture; viewed: header ButtonHome (Button), Primary row scrolled out of view, so it does not show the Primary value) and `t6-05b-buttonhome-events-primary-FX_HomeBtn-before-Step-B-save.png` (second capture after a mouse-wheel scroll of the Properties tree, view only; viewed: header ButtonHome (Button), Events > Primary = FX_HomeBtn, Save and Undo active). The second is the image cited for Primary.
15. **Designer Save (Step B), once.** Response: the saved toast "Form [FX_CustomerPortal] and global object(s) were saved." Screenshot `t6-06-save-response-step-B.png` (viewed: toast; Primary FX_HomeBtn; Save and Undo greyed). A fresh depth-4 snapshot then read **Save disabled** (`button "Save" [disabled]`), Undo disabled, console 2 errors, 0 warnings, no dialog or list open.

Stop: T6 complete. T7 (FX_CartBtn, ButtonCart) and T8 not started. Final state: FX_CustomerPortal open and clean, User scope; Components tab selected; ButtonHome selected; Properties Description row selected (no edit); no dialog, list or editor open.

Observation (observed, for the record): the Event Handler dialog's Name combobox kept the previous name (`FX_SignInBtn2`) when a new handler was created; the worker replaced it with Control+A before typing. The operator may want to know this for future handler creations.

Errors and recoveries (this task):
- Ref not found (3 in total): (a) a targeted snapshot of the grid toolbar (e2584) after an earlier snapshot; recovered with one fresh untargeted snapshot, then the toolbar read; (b) a targeted read of the top toolbar (e11) before Save; recovered with one fresh untargeted snapshot (its Save ref was used); (c) a click on the Properties `Name` row (e3421) before the Step B leave-the-field click; recovered with one fresh untargeted snapshot, then a targeted read of the tree top, then the `Description` row click.
- No server-event error, no console rise, no prompt, no session expiry.
- No field correction. The pre-filled Name was replaced once, before the first typed entry (not a correction of a typed value).

Action audit, T6 (exact for clicks, typing, keys, dialogs, lists, Saves; snapshot count approximate, not reconstructed):
- browser_tabs: list 1; select 1 (tab 1, succeeded).
- Browser clicks performed (ref-based): 23 (Event Handlers tab; grid New (+); Name field; OK; Response Type cell; Type arrow; Set Values option; Sequence neutral row; Parameters ellipsis; Variables ellipsis; pair New; Value field; pair OK; list OK; Parameters OK; Save A; Components tab; Components Expand; ButtonHome Type cell; Primary trigger; FX_HomeBtn option; Description neutral row; Save B). Failed clicks (Ref not found, not performed): 1 (Name row, recovered). Double-clicks: 0. Coordinate clicks: 0. Mouse-wheel scrolls (view only): 1.
- Keyboard: Control+A 1 (in the Name field, to replace the pre-filled text); Tab 2 (Target commit, Value commit); Enter 0; arrow keys 0; Escape 0.
- browser_type: 3 (Name `FX_HomeBtn`, slowly; Target `FX_Page`, slowly; Value `2`, plain fill). Field corrections: 0.
- Lists opened: 2 (Type list, clicked "Set Values"; Primary list, clicked "FX_HomeBtn"). Lists left open: 0.
- Dialogs opened: 4 (Event Handler; Event Handler Parameters; Edit Set Variable Values; Edit Set Variable Value Pair). Closed by OK: 4 (in order: pair OK, list OK, Parameters OK, and the Event Handler dialog OK at step 1). Closed by Cancel: 0. Prompts: 0.
- Pairs created: 1 (FX_Page = 2). Handlers created: 1 (FX_HomeBtn).
- Designer Saves: 2 (Step A, Step B); each showed the saved toast; Save disabled after Step B (read); after Step A the Save icon was greyed in t6-04 (not read by a snapshot).
- Screenshots: 7 files (t6-01, t6-02, t6-03, t6-04, t6-05, t6-05b, t6-06). Viewed as images: t6-02, t6-04, t6-05, t6-05b, t6-06. Not re-opened: t6-01 (the name was verified by a snapshot read before capture), t6-03 (the row was verified by a grid read).
- Snapshot calls: approximately 40 (not reconstructed exactly). Ref-not-found errors: 3 (two on targeted snapshots, one on a click); each followed by one fresh untargeted snapshot. Oversized snapshots saved by the tool: 0 in T6 (all inline).
- Console: 2 errors, 0 warnings at every check; no rise.
- Server-event errors: 0. Session expiry, logout or re-login: 0. Form closes or reopens: 0. Undo: 0 clicks (Undo stayed disabled). Handler Copy: 0. Regenerate: 0. Delete Form Definition: 0.

Worker-written file inventory (T6): `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (this section, status line); `evidence/EXP-124/t6-01-event-handler-dialog-FX_HomeBtn-before-OK.png`, `t6-02-edit-set-variable-value-pair-FX_Page-2-before-OK.png`, `t6-03-handler-row-FX_HomeBtn-before-Step-A-save.png`, `t6-04-save-response-step-A.png`, `t6-05-buttonhome-events-primary-FX_HomeBtn-before-Step-B-save.png`, `t6-05b-buttonhome-events-primary-FX_HomeBtn-before-Step-B-save.png`, `t6-06-save-response-step-B.png`. Tool-written (not read or searched): page and console files under `evidence/playwright/` for this session; no oversized snapshot files were produced in T6.

Cumulative browser-action qualifications (not reconciled here): the T1 to T5 counts and the T5 rerun counts remain as recorded in their sections (the T5 rerun's snapshot count is approximate and the t5r-06 filename collision is unchanged). The T6 snapshot count is approximate as stated above. The T9 audit must recount snapshots from the tool log if an exact total is required.

Cleanup inventory (cumulative to T6): saved on FX_CustomerPortal, User scope:
- EditCustID Binding Type Variable, Binding `variables.FX_CustomerID` (T2).
- StaticCustID Binding Type Variable, Binding `variables.FX_CustomerID` (T3).
- EditCount Initial Value 1, Binding `variables.FX_Count(INITIALVALUE(1))` (T4).
- Handler FX_SignInBtn2, Set Values SETVARVALUES(FX_Page=1) (T5 rerun); ButtonSignIn Primary FX_SignInBtn2 (T5 rerun).
- Handler FX_HomeBtn, Set Values SETVARVALUES(FX_Page=2) (T6); ButtonHome Primary FX_HomeBtn (T6).
- Pending: FX_CartBtn (SETVARVALUES(FX_Page=3)) and ButtonCart Primary (T7); second FX_SignInBtn row SETVARVALUES(FX_Page=2) (T8); FX_CustomerID variable under Details > Variables (not verified; T9).

Final state after T6: FX_CustomerPortal open and clean (Save disabled, Undo disabled), User scope; no dialog, list or editor open; console 2 errors, 0 warnings.

Acceptance status after T6: AC-2 for FX_HomeBtn (created with New; Set Values SETVARVALUES(FX_Page=2); Primary of ButtonHome; two Saves) is met as observed in the Designer, same session. Not a cross-session or database-level claim. AC-4: no other handler or component was changed in T6 (FX_SignInBtn, FX_SignInBtn2 and StdFormPredisplay grid rows read unchanged before and after the Saves). AC-3 (reopen readback) still open for T9.

Next step: T7 (FX_CartBtn = Set Values FX_Page=3 on ButtonCart) must be started in a new task; it is not started here.

## T7 - Handler FX_CartBtn (Set Values FX_Page=3) and ButtonCart Primary - COMPLETE

Run: R-20261020-154718-osNu. Task header named task=T9 (task message 2ba7d7e8-33ef-4030-88d1-80e359cd88d8); the bounded instruction said "Execute EXP-124 T7 ONLY ... Do not begin T8." The bounded instruction was followed; the T9 readback and final audit were NOT performed and no T8 action was taken.

Sources at the start of T7: AGENTS.md (read in full, 240 lines) and this record's T6 section (headings located). No other source read.

Gate (read-only, passed): tab list before selection (tab 0 Mongoose Web Client; tab 1 Designer FX_CustomerPortal); tab 1 selected. Designer console baseline **2 errors, 0 warnings**. Status bar `ScopeType: User / ScopeName: <signed-in user>`. Save disabled, Undo disabled; no dialog or list open. Event Handlers (targeted read, view only): FX_HomeBtn (row 0 Set Values, SETVARVALUES(FX_Page=2)); FX_SignInBtn (row 0 Collection Refresh, object2; one row); FX_SignInBtn2 (row 0 Set Values, SETVARVALUES(FX_Page=1)); StdFormPredisplay (row 0 Set Values, SETVARVALUES(FX_Page=1)). **No FX_CartBtn group before the task** (confirmed). ButtonCart Primary read blank before the change.

Step A (handler, one Save):
1. Event Handlers tab clicked once. Grid New (+) clicked once (after one stale-ref recovery: grid toolbar ref e2599 not found, one fresh snapshot, then the toolbar read). Event Handler dialog opened with its Name **pre-filled `FX_HomeBtn`** (the previous entry, as in T6). Name field clicked, Control+A pressed once (no list), `FX_CartBtn` typed key by key (one browser_type, slowly). Read: Name = FX_CartBtn, no list open. Screenshot `t7-01-event-handler-dialog-FX_CartBtn-before-OK.png` (not re-opened; verified by a snapshot read before capture). OK clicked once.
2. Group created: `FX_CartBtn`, one row, sequence 0, Response Type blank, Disabled false. Other groups unchanged (FX_HomeBtn Set Values FX_Page=2; FX_SignInBtn Collection Refresh object2; FX_SignInBtn2 Set Values FX_Page=1; StdFormPredisplay Set Values FX_Page=1).
3. New row's Response Type cell clicked once. Handler Properties tree read (targeted). Response > Type sub-row arrow clicked once (referenced arrow; no coordinate click). The Type response list opened; "Set Values" option clicked once. Read: Type combobox = Set Values; list closed (combobox no longer expanded).
4. Left the Type field by clicking the neutral `Sequence` treeitem once. Console 2.
5. Parameters ellipsis clicked once ("Event Handler Parameters" dialog). Variables ellipsis clicked once ("Edit Set Variable Values" dialog, listbox empty).
6. Pair-level New clicked once ("Edit Set Variable Value Pair" dialog). Target typed `FX_Page` key by key (one browser_type, slowly); no list offered (read); committed with one Tab. Value textbox clicked once, `3` typed (one browser_type, a plain fill), committed with one Tab. Read before OK: Target = FX_Page, Value = 3. Screenshot `t7-02-edit-set-variable-value-pair-FX_Page-3-before-OK.png` (not re-opened; verified by a snapshot read).
7. Pair OK clicked once. List read: one entry `FX_Page=3`. List OK clicked once. Event Handler Parameters OK clicked once. All four dialogs closed.
8. Handler row read (targeted grid): **FX_CartBtn row 0 Set Values / false / SETVARVALUES(FX_Page=3)**; other groups unchanged. Screenshot `t7-03-handler-row-FX_CartBtn-before-Step-A-save.png` (not re-opened).
9. **Designer Save (Step A), once.** Response: saved toast "Form [FX_CustomerPortal] and global object(s) were saved." Screenshot `t7-04-save-response-step-A.png` (viewed: toast visible; grid rows FX_CartBtn Set Values SETVARVALUES(FX_Page=3), FX_HomeBtn Set Values SETVARVALUES(FX_Page=2); Save icon greyed). Console 2.

Step B (Primary, one Save):
10. Components tab clicked once. Components tree read (targeted; already expanded). ButtonCart row (PushButton, FlexLayoutMain, Region00: menu) selected by its Type cell. Properties header read `ButtonCart (Button)`.
11. Properties Expand (view only) clicked once; Events group expanded in the read. Primary row read blank before the change. Primary dropdown trigger clicked once. The list opened and offered the Form's own handlers first: `FX_CartBtn`, `FX_HomeBtn`, `FX_SignInBtn`, `FX_SignInBtn2`, then the Std* events (EXP-117 order confirmed). **Option `FX_CartBtn` clicked once.** Combobox read: FX_CartBtn; list closed.
12. Left the field by clicking the neutral `Description` treeitem: first attempt failed (Ref e3475 not found; one fresh untargeted snapshot taken, then the Description group re-read); second attempt (same ref, from the current read) succeeded. Console 2.
13. Mouse-wheel scroll of the Properties panel (view only, once) to bring Events > Primary into view. Screenshot `t7-05-buttoncart-events-primary-FX_CartBtn-before-Step-B-save.png` (viewed: Properties header ButtonCart (Button); Events > Primary = FX_CartBtn; Save icon active; Components row ButtonCart selected).
14. Save state read before Step B Save: untargeted snapshot showed Save enabled (ref e2739), no dialog or list open.
15. **Designer Save (Step B), once.** Response: saved toast "Form [FX_CustomerPortal] and global object(s) were saved." Screenshot `t7-06-save-response-step-B.png` (viewed: toast; Primary FX_CartBtn; Save icon greyed). A targeted read of the toolbar then read **Save disabled** (`button "Save" [disabled]`), Undo disabled, console 2 errors, 0 warnings, no dialog or list open.

Stop: T7 complete. T8 (second FX_SignInBtn row) and the T9 readback and final audit were NOT started. Final state: FX_CustomerPortal open and clean, User scope; Components tab selected; ButtonCart selected; Properties Description row selected (no edit); no dialog, list or editor open; console 2 errors, 0 warnings.

Errors and recoveries (this task):
- Ref not found (2): (a) the grid bottom toolbar e2599 read after an earlier snapshot; recovered with one fresh untargeted snapshot, then a targeted read of the same toolbar from that snapshot; (b) the neutral Description treeitem e3475 click; recovered with one fresh untargeted snapshot, then a targeted read of the Description group (e3472) that re-confirmed e3475, then the click.
- No server-event error, no console rise, no prompt, no session expiry.
- No field correction. The Name was pre-filled (`FX_HomeBtn`) and replaced once before the first typed entry (Control+A, then typing; not a correction of a typed value).

Action audit, T7 (exact for clicks, typing, keys, dialogs, lists and Saves; snapshot count approximate):
- browser_tabs: list 1; select 1 (tab 1, succeeded).
- Browser clicks performed (ref-based): 23. Failed (Ref not found, not performed): 1 (the Description click, recovered on the next attempt). Attempts: 24. Coordinate clicks: 0. Double-clicks: 0. Mouse-wheel scrolls (view only): 1.
- Keyboard: Control+A 1 (in the Name field); Tab 2 (Target commit; Value commit); Enter 0; Escape 0; arrow keys 0.
- browser_type: 3 (Name `FX_CartBtn`, slowly; Target `FX_Page`, slowly; Value `3`, plain fill). Field corrections: 0.
- Lists opened: 2 (Type list, clicked "Set Values"; Primary list, clicked "FX_CartBtn"). Lists left open: 0.
- Dialogs opened: 4 (Event Handler; Event Handler Parameters; Edit Set Variable Values; Edit Set Variable Value Pair). Closed by OK: 4 (Event Handler; pair; list; Parameters). Closed by Cancel: 0. Prompts: 0.
- Pairs created: 1 (FX_Page = 3). Handlers created: 1 (FX_CartBtn).
- Designer Saves: 2 (Step A, Step B); each showed the saved toast; Save disabled after Step B (read).
- Screenshots: 6 files (t7-01 to t7-06). Viewed as images: t7-04, t7-05, t7-06. Not re-opened: t7-01, t7-02, t7-03 (verified by snapshot reads).
- Snapshot calls: approximately 45 (not reconstructed exactly). Ref-not-found errors: 2. Oversized snapshots saved by the tool: 0 (all inline).
- Console: 2 errors, 0 warnings at every check; no rise.
- Server-event errors: 0. Session expiry, logout or re-login: 0. Form closes or reopens: 0. Undo: 0 clicks. Handler Copy: 0. Regenerate: 0. Delete Form Definition: 0.

Worker-written file inventory (T7): `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (this section, status line); `evidence/EXP-124/t7-01-event-handler-dialog-FX_CartBtn-before-OK.png`, `t7-02-edit-set-variable-value-pair-FX_Page-3-before-OK.png`, `t7-03-handler-row-FX_CartBtn-before-Step-A-save.png`, `t7-04-save-response-step-A.png`, `t7-05-buttoncart-events-primary-FX_CartBtn-before-Step-B-save.png`, `t7-06-save-response-step-B.png`. Tool-written (not read or searched): page and console files under `evidence/playwright/` for this session.

Cleanup inventory (cumulative to T7): saved on FX_CustomerPortal, User scope:
- EditCustID Binding Type Variable, Binding `variables.FX_CustomerID` (T2).
- StaticCustID Binding Type Variable, Binding `variables.FX_CustomerID` (T3).
- EditCount Initial Value 1, Binding `variables.FX_Count(INITIALVALUE(1))` (T4).
- Handler FX_SignInBtn2, Set Values SETVARVALUES(FX_Page=1) (T5 rerun); ButtonSignIn Primary FX_SignInBtn2 (T5 rerun).
- Handler FX_HomeBtn, Set Values SETVARVALUES(FX_Page=2) (T6); ButtonHome Primary FX_HomeBtn (T6).
- Handler FX_CartBtn, Set Values SETVARVALUES(FX_Page=3) (T7); ButtonCart Primary FX_CartBtn (T7).
- Pending: second FX_SignInBtn row SETVARVALUES(FX_Page=2) (T8); final readback and audit, including FX_CustomerID under Details > Variables (T9, not started).

Final state after T7: FX_CustomerPortal open and clean (Save disabled, Undo disabled), User scope; no dialog, list or editor open; console 2 errors, 0 warnings.

Acceptance status after T7: AC-2 for FX_CartBtn (created with New; Set Values SETVARVALUES(FX_Page=3); Primary of ButtonCart; two Saves) is met as observed in the Designer, same session. Not a cross-session or database-level claim. AC-4: no other handler or component was changed in T7 (FX_SignInBtn, FX_SignInBtn2, FX_HomeBtn and StdFormPredisplay rows read unchanged). AC-3 (reopen readback) still open for T9.

Next step: T8 (second FX_SignInBtn row, Set Values FX_Page=2 after the Collection Refresh row) must be started in a new task; it is not started here. T9 (readback and final audit) follows after T8.

## T8 - Second FX_SignInBtn response row (Set Values FX_Page=2 after Collection Refresh) - COMPLETE

Run: R-20261020-154718-osNu. Task header named task=T10 (task message 90d3f48f-909b-4e89-ba8b-b60d6e57eb01); the bounded instruction said "Execute EXP-124 T8 ONLY: add ONE second response row to the EXISTING FX_SignInBtn Form event handler ... Do not begin T9." The bounded instruction was followed. The T9 readback and final audit were NOT performed.

Sources at the start of T8: AGENTS.md (read in full) and this record's T7 section (headings located). No other source read.

Gate (read-only, passed): tab list before selection (tab 0 Mongoose Web Client; tab 1 Designer FX_CustomerPortal); tab 1 selected. Designer console baseline **2 errors, 0 warnings**. Status bar `ScopeType: User / ScopeName: <signed-in user>`. Save and Undo state read at the gate: Save disabled, Undo disabled, no dialog or list open. Event Handlers (view): FX_CartBtn (row 0 Set Values, SETVARVALUES(FX_Page=3)); FX_HomeBtn (row 0 Set Values, SETVARVALUES(FX_Page=2)); FX_SignInBtn (**one row**, row 0 Collection Refresh, object2); FX_SignInBtn2 (row 0 Set Values, SETVARVALUES(FX_Page=1)); StdFormPredisplay (row 0 Set Values, SETVARVALUES(FX_Page=1)). The pre-check that FX_SignInBtn had one row passed, so the task proceeded.

Step 1 (new response row through New, one dialog OK):
1. Event Handlers tab clicked once. Grid New (+) clicked once (the grid's toolbar button; not the handler Copy button). The Event Handler dialog opened with its Name **pre-filled `FX_CartBtn`** (the previous entry, as in T6 and T7). Name combobox clicked once, Control+A pressed once (no list), `FX_SignInBtn` typed key by key (one browser_type, slowly). Read before OK: Name = FX_SignInBtn, no list open, no prompt. Screenshot `t8-01-event-handler-dialog-FX_SignInBtn-before-OK.png`. OK clicked once.
2. No duplicate-name prompt appeared. The new row was created in the existing FX_SignInBtn group at **sequence 1** (Response Type blank, Disabled false). The original row remained **sequence 0 Collection Refresh, false, object2**. No new group was created (the grid showed one FX_SignInBtn header with the two rows). Other groups unchanged.
3. The new row's Response Type cell clicked once (sequence 1, Event FX_SignInBtn confirmed in the Properties tree). Response > Type arrow clicked once (referenced arrow). The response-type list opened; "Set Values" option clicked once. Read: Type = Set Values; list closed. The Sequence treeitem clicked once as the neutral row to leave the field. Console 2.
4. Parameters ellipsis clicked once ("Event Handler Parameters" dialog, Variables box empty before the entry). Variables ellipsis clicked once ("Edit Set Variable Values" list, read empty).
5. Pair-level New clicked once ("Edit Set Variable Value Pair" dialog). Target combobox clicked once; `FX_Page` typed key by key (one browser_type, slowly); no list offered (read); committed with one Tab. Read: Target = FX_Page. Value textbox clicked once; `2` filled (one plain fill); committed with one Tab. Read before OK: Target = FX_Page, Value = 2. Screenshot `t8-02-edit-set-variable-value-pair-FX_Page-2-before-OK.png`.
6. Pair OK clicked once. List read: one entry `FX_Page=2`. List OK clicked once. Event Handler Parameters read: Variables = `FX_Page=2`; its OK clicked once. All four dialogs closed.
7. Targeted read of the FX_SignInBtn group (view): **row seq 0 Collection Refresh, false, object2 (unchanged); row seq 1 Set Values, false, SETVARVALUES(FX_Page=2)**. The Properties tree for the selected row read Event FX_SignInBtn, Sequence 1, Type Set Values, Parameters SETVARVALUES(FX_Page=2). Other groups unchanged (FX_CartBtn, FX_HomeBtn, FX_SignInBtn2, StdFormPredisplay). Screenshot `t8-03-signin-group-both-rows-before-save.png` (group grid, both rows).
8. **Designer Save, once.** The first click on the Save button (ref e2754 from the earlier snapshot) returned "Ref not found" and was not performed; one fresh untargeted snapshot was taken, and the Save button again read ref e2754; one click performed the Save. Response: saved toast "Form [FX_CustomerPortal] and global object(s) were saved." (confirmed by a find of the toast text). Screenshot `t8-04-save-response-state.png` (viewport). Targeted read of the toolbar Save: **disabled**. Console 2 errors, 0 warnings. No dialog or list open.

Stop: T8 complete. The T9 close/reopen readback, the readback of all handler groups and rows, the variable and binding readback, the Primary readback and the final audit were NOT started. Final state: FX_CustomerPortal open and clean (Save disabled), User scope; Event Handlers tab selected; the new FX_SignInBtn row (sequence 1) is the Properties selection; no dialog, list or editor open; console 2 errors, 0 warnings.

Errors and recoveries (this task):
- Ref not found (1): the Save button ref e2754 after the earlier snapshots; recovered with one fresh untargeted snapshot (the same ref was then listed), then one click that succeeded.
- No server-event error, no console rise, no prompt, no session expiry.
- No field correction. The Name was pre-filled (`FX_CartBtn`) and replaced before the typed entry (Control+A, then typing; not a correction of a typed value). Target and Value each had one entry.

Action audit, T8 (exact for T8 clicks, typing, keys, dialogs, lists and Saves from this task's reads; the counts for the steps taken before the context summary were reconstructed from that summary and are approximate for snapshot calls):
- browser_tabs: list 1; select 1 (tab 1, succeeded).
- Browser clicks (ref-based): 18 attempts; 17 performed; 1 failed (Save ref e2754 "Ref not found", not performed; the retry succeeded). Coordinate clicks: 0. Double-clicks: 0. Mouse-wheel scrolls: 0.
- Keyboard: Control+A 1 (Name field); Tab 2 (Target commit; Value commit); Enter 0; Escape 0; arrow keys 0.
- browser_type: 3 (Name `FX_SignInBtn`, slowly; Target `FX_Page`, slowly; Value `2`, plain fill). Field corrections: 0.
- Lists opened: 1 (Response Type list; "Set Values" clicked). Lists left open: 0. The Variables ellipsis opened the Edit Set Variable Values list (empty), which is a dialog, not a combobox list.
- Dialogs opened: 4 (Event Handler; Event Handler Parameters; Edit Set Variable Values; Edit Set Variable Value Pair). Closed by OK: 4 (Event Handler; pair; list; Parameters). Closed by Cancel: 0. Prompts: 0.
- Pairs created: 1 (FX_Page = 2). Handlers created: 0 (one response row added to the existing FX_SignInBtn group). Rows created: 1 (sequence 1).
- Designer Saves: 1 (saved toast; Save disabled after).
- Screenshots: 4 files (t8-01 to t8-04). Decisive captures for the group and Save state; verified by targeted snapshot reads at capture.
- Snapshot calls: approximately 11 in the T8 continuation plus approximately 8 before the context summary (not reconstructed exactly); Find calls: 3 (dialog-text checks and the save toast). Ref-not-found errors: 1. Snapshot files written by the tool into `evidence/playwright/` (returned in click and dialog responses; not read or searched): several in T8; none was used as evidence.
- Console: 2 errors, 0 warnings at every check; no rise.
- Server-event errors: 0. Session expiry, logout or re-login: 0. Form closes or reopens: 0. Undo: 0 clicks. Handler Copy: 0. Regenerate: 0. Delete Form Definition: 0. Toolbox placement: 0. Drag: 0.

Worker-written file inventory (T8): `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (this section, status line); `evidence/EXP-124/t8-01-event-handler-dialog-FX_SignInBtn-before-OK.png`, `t8-02-edit-set-variable-value-pair-FX_Page-2-before-OK.png`, `t8-03-signin-group-both-rows-before-save.png`, `t8-04-save-response-state.png`. Tool-written (not read or searched): page and console files under `evidence/playwright/`.

Cleanup inventory (cumulative to T8, for the T9 audit): saved on FX_CustomerPortal, User scope:
- EditCustID Binding Type Variable, Binding `variables.FX_CustomerID` (T2).
- StaticCustID Binding Type Variable, Binding `variables.FX_CustomerID` (T3).
- EditCount Initial Value 1, Binding `variables.FX_Count(INITIALVALUE(1))` (T4).
- Handler FX_SignInBtn2, Set Values SETVARVALUES(FX_Page=1) (T5 rerun); ButtonSignIn Primary FX_SignInBtn2 (T5 rerun).
- Handler FX_HomeBtn, Set Values SETVARVALUES(FX_Page=2) (T6); ButtonHome Primary FX_HomeBtn (T6).
- Handler FX_CartBtn, Set Values SETVARVALUES(FX_Page=3) (T7); ButtonCart Primary FX_CartBtn (T7).
- FX_SignInBtn second response row, sequence 1, Set Values SETVARVALUES(FX_Page=2), after the Collection Refresh row at sequence 0 (T8).
- Pending: final readback and audit, including FX_CustomerID under Details > Variables, the close/reopen readback and the Primary of ButtonSignIn, ButtonHome, ButtonCart and ButtonSignIn2 (T9, not started).

Final state after T8: FX_CustomerPortal open and clean (Save disabled), User scope; no dialog, list or editor open; console 2 errors, 0 warnings.

Acceptance status after T8: AC-2 for the second FX_SignInBtn row (Set Values SETVARVALUES(FX_Page=2), sequence 1, after the unchanged Collection Refresh row at sequence 0; one Save) is met as observed in the Designer, same session. Not a cross-session or database-level claim. AC-4: no other handler, component or Primary was changed in T8 (FX_CartBtn, FX_HomeBtn, FX_SignInBtn2 and StdFormPredisplay rows read unchanged; ButtonSignIn2's Primary not touched). AC-3 (reopen readback) still open for T9.

Next step: T9 (close the clean FX_CustomerPortal once through its Form tab, answer No to any save prompt, reopen once through the Form menu recent-forms entry, read all handler groups and rows, Variables, the bindings, the EditCount dialog read-only then Cancel, and the Primary events; then the final audit). It must start in a new task; it is not started here.

## T9 - Close/reopen readback, read-only verification and final audit - COMPLETE

Run: R-20261020-154718-osNu. Task header named task=T11 (task message 447c3a10-8396-464f-a03d-42924b1b3d97; worker session 457ae832-9ee7-43a9-aa02-65aef7fdb154). The bounded instruction said "Execute EXP-124 T9 ONLY ... Do not perform any other experiment or mutation." The bounded instruction was followed. No Designer Save was performed in T9.

Sources at the start of T9: AGENTS.md (read in full, 240 lines) and the bounded T9 instruction. The per-task audit blocks of this record were read for the cumulative audit (the record itself only). No other source read; no session transcript read; the tool-results files that held oversized snapshots were not read.

### Gate (read-only, passed)

- Tab list before any selection: tab 0 Mongoose Web Client; tab 1 Designer FX_CustomerPortal. Tab 1 selected.
- Before the close: the only Form tab was FX_CustomerPortal; status bar `ScopeType: User / ScopeName: <signed-in user>`; Save disabled; Undo disabled; no dialog open. Event Handlers grid showed the expected groups. Designer authenticated; no sign-in page or session-expired modal.
- Initial Designer console count: **2 errors, 0 warnings**.

### Lifecycle

1. **Close (once):** the FX_CustomerPortal Form-tab close control (ref e247) clicked once. **No save prompt appeared** (the Form was clean; no prompt text to record). Console 2/0. The Form tab list was empty afterwards.
2. **Reopen (once):** Form menu clicked once (targeted snapshot of the open menu, ref e1407). The recent-forms list offered `FX_CustomerPortal` (other entries: FX_Items, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, then the IDO and SQL menu items; a Sign Out item is also in the menu and was not clicked). The FX_CustomerPortal entry clicked once. Reopened: Form tab FX_CustomerPortal; Form properties Name `FX_CustomerPortal`; status bar `ScopeType: User`; Save disabled; console 2/0. Select Form OK, Regenerate and refresh were not used.
3. The Details panel, collapsed on reopen, was expanded once (view toggle).

Close/reopen count in T9: 1 close, 1 reopen.

### Readback 1 - Event Handlers (after reopen)

Event Handlers tab clicked once; the grid's Expand clicked once (view); targeted read of the grid (ref e1749) gave every group and row:

| Group | Seq | Response Type | Disabled | Response Parameters |
|---|---|---|---|---|
| FX_CartBtn | 0 | Set Values | false | SETVARVALUES(FX_Page=3) |
| FX_HomeBtn | 0 | Set Values | false | SETVARVALUES(FX_Page=2) |
| FX_SignInBtn | 0 | Collection Refresh | false | object2 |
| FX_SignInBtn | 1 | Set Values | false | SETVARVALUES(FX_Page=2) (second row of the same group; no group header on this row) |
| FX_SignInBtn2 | 0 | Set Values | false | SETVARVALUES(FX_Page=1) |
| StdFormPredisplay | 0 | Set Values | false | SETVARVALUES(FX_Page=1) |

Matches the expected list. Five groups; no unexpected group or row. The original Collection Refresh row (seq 0, object2) is unchanged. Screenshot `evidence/EXP-124/t9-01-event-handlers-after-reopen.png` is partial (see Limitations): it shows FX_CartBtn and FX_HomeBtn and the top of FX_SignInBtn only.

### Readback 2 - Variables

Variables tab clicked once; the grid's Expand clicked once (view). Accessibility read:

- Form - Persistent: `fds_SC2`.
- Form - Temporary: `FX_Count`, `FX_CustomerID`, `FX_Page`.
- Global - Persistent: ccvw_..., gbgc_..., IncludeBadgeStatusVar, IsDiagnosticsTimerElapsed, LoginFoundUser, lse_... (global, not Form variables).
- **FX_CustomerID is present, category Form - Temporary.** Screenshot `evidence/EXP-124/t9-02-variables-after-reopen.png` shows FX_CustomerID directly under the Form - Temporary heading, after FX_Count. FX_Page is below the visible crop of that image; its category comes from the accessibility read.
- At T1 FX_CustomerID was absent (T1 section). The worker did not create it through Details > Variables. Its appearance is recorded in the cleanup inventory below.
- The Global - Temporary category was not read in the expanded accessibility read (not required by the acceptance checks).

### Readback 3 - Component bindings

Components tab clicked once; the Components grid's Expand clicked once (view). Targeted read of the grid (ref e2202) gave the component rows. Each component was then selected by its Type cell and the Properties header was confirmed (find text).

- **EditCustID** (Type cell ref e2803 clicked once). Header `EditCustID (Edit)`. Components row: Edit, Data Source `variables.FX_CustomerID`, container FlexLayoutMain, parent Region02: signinpage. Properties: **Binding Type `Variable`; Binding `variables.FX_CustomerID`** (exact text from the find read). Screenshot `t9-03-editcustid-binding-rows.png`: the Data Source group is visible with Binding Type Variable; the Binding value is truncated in the image (`variables.FX_Custo…`), the full value is from the text read.
- **StaticCustID** (Type cell ref e2503 clicked once). Header `StaticCustID (Static)`. Components row: Static, Data Source `variables.FX_CustomerID`, container FlexLayoutHeader, parent Region01: user. Properties: **Binding Type `Variable`; Binding `variables.FX_CustomerID`**. Screenshot `t9-04-staticcustid-binding-rows.png` (same truncation).
- **EditCount** (Type cell ref e3203 clicked once). Header `EditCount (Edit)`. Components row: Edit, Data Source `variables.FX_Count(INITIALVALUE(1))`, container FlexLayoutButtons. Properties: Binding Type `Variable`; Binding `variables.FX_Count(INITIALVALUE(1))` (exact text from the find read). The Binding ellipsis (ref e4756) was clicked **once** for read-only inspection. Dialog `Edit Variable Binding` read: **Variable FX_Count; Initial Value 1; Clear On Refresh? unchecked; Refresh Value blank (greyed)**. Screenshot `t9-05-editcount-binding-dialog-readonly.png` (viewed). **Cancel** clicked once (ref e5692); no change; the dialog closed (a find returned no match).

### Readback 4 - Primary events

Each selected by its Components Type cell; header confirmed by find.

- **ButtonSignIn** (Type ref e2603): header `ButtonSignIn (Button)`; **Primary `FX_SignInBtn2`**. The Components grid's Event column shows FX_SignInBtn2.
- **ButtonHome** (Type ref e2628): header `ButtonHome (Button)`; **Primary `FX_HomeBtn`**.
- **ButtonCart** (Type ref e2653): header `ButtonCart (Button)`; **Primary `FX_CartBtn`**. Screenshot `t9-06-buttoncart-events-primary.png`: the Events group shows Primary FX_CartBtn with the header ButtonCart (Button); the Components rows show ButtonSignIn FX_SignInBtn2, ButtonHome FX_HomeBtn and ButtonCart FX_CartBtn.
- **ButtonSignIn2** (Type ref e2828): header `ButtonSignIn2 (Button)`; **Primary `FX_SignInBtn`** (not touched).

### Final state

FX_CustomerPortal open in the Designer (the only Form tab), User scope (status bar), **Save disabled** (find read), no dialog (find returned no match), no list open. Components tab selected; ButtonSignIn2 selected. Details grids expanded (view state only). Console 2 errors, 0 warnings at the last action output. No Designer Save, no runtime action in T9.

### Screenshots in T9

Final files (6): `t9-01-event-handlers-after-reopen.png` (partial), `t9-02-variables-after-reopen.png`, `t9-03-editcustid-binding-rows.png`, `t9-04-staticcustid-binding-rows.png`, `t9-05-editcount-binding-dialog-readonly.png`, `t9-06-buttoncart-events-primary.png`. Capture calls: 10. **t9-03 was captured three times and t9-04 three times under the same name; the first two captures of each were taken before the Properties panel was scrolled and showed no Binding rows, and were overwritten. The cited files are the third captures.** Each final file was viewed (10 image reads, including the overwritten captures).

### T9 action audit (exact, from this task's calls)

- browser_tabs: list 1; select 1 (tab 1, succeeded).
- browser_click performed: 19 (Form-tab close 1; Form menu 1; recent-forms entry 1; Details Expand 1; Event Handlers tab 1; grid Expand 1; Variables tab 1; Variables grid Expand 1; Components tab 1; Components grid Expand 1; EditCustID Type 1; StaticCustID Type 1; EditCount Type 1; EditCount Binding ellipsis 1; Cancel 1; ButtonSignIn Type 1; ButtonHome Type 1; ButtonCart Type 1; ButtonSignIn2 Type 1). Click attempts failed (Ref not found): 0. Coordinate clicks 0. Double-clicks 0. Arrow, Enter or Tab key presses 0.
- Mouse wheel (view only): 5 (two scrolled the Components grid, three scrolled the Properties panel); mouse moves (view positioning): 3.
- browser_type: 0. Key presses: 0.
- browser_snapshot calls: 20 (16 returned inline; 1 too large, saved by the tool and not read; 3 Ref not found: targeted e1676 ×2 and targeted e1377 ×1).
- browser_find calls: 19 (read-only text checks: headers, Binding and Primary values, dialog presence, Save state).
- Dialogs opened: 1 (Edit Variable Binding, read-only); closed by Cancel 1; closed by OK 0. Lists opened: 0. Prompts: 0 (no save prompt on close).
- Designer Saves: **0**. Form closes: 1. Form reopens: 1.
- Console: 2 errors, 0 warnings at every action output; no rise.
- Server-event errors: 0. Session expiry, logout or re-login: 0.

### Errors and deviations (T9)

1. Ref not found on the targeted read of the Details tablist (e1676), first after the Event Handlers grid Expand and then after the Variables grid Expand. Each was followed by one fresh untargeted snapshot (inline), and that snapshot's references were used.
2. Ref not found on the targeted read of the Properties panel (e1377), after the EditCustID Type click. The fresh untargeted snapshot taken before this error was too large (saved by the tool). **No fresh untargeted snapshot was taken after this error**: I used text finds and then a targeted snapshot of the Binding row (ref e5284), whose reference came from a find result; that targeted snapshot succeeded, and the Binding ellipsis click used a reference from it. The brief's rule was one fresh untargeted snapshot per Ref-not-found error, and a targeted find is not a substitute. This is recorded as a deviation for the operator. No click used a reference that came only from a find result.
3. Two of the five mouse-wheel actions reached the Components grid instead of the Properties panel (the pointer had moved with the preceding click). View only; corrected by moving the pointer over the Properties panel before the wheel.
4. Overwritten captures (t9-03 and t9-04, twice each): see the screenshot note above.

### Limitations (T9)

- `t9-01-event-handlers-after-reopen.png` shows only part of the grid (FX_CartBtn, FX_HomeBtn and the top of FX_SignInBtn). The full group and row readback is the accessibility read in Readback 1. A full-grid image would need a larger Details panel, which the Designer layout did not offer in this task.
- `t9-02` shows FX_CustomerID under Form - Temporary; FX_Page is below the crop. The category of FX_Page comes from the accessibility read.
- The Binding value text is truncated in the Properties panel images; exact values come from the find reads.
- The reopen is an ordinary close and reopen of the Form inside the same Designer session. It is not cross-session or database-level durability and is not replay verification.

## Cumulative browser action audit (T1 to T9)

Counts come from each task's own audit block in this record. Entries marked "exact" are stated as exact in the source block (or, for T9, from this task's calls). Entries marked "approx." are the source block's own approximations. Entries marked "reconstructed" are from the T5 first-attempt block, labelled "reconstructed counts, unverified" there. No count was re-derived from the tool log (not available to the worker).

| Task | Tabs list / select | Clicks performed | Clicks Ref not found | Snapshot calls | Snapshot Ref not found | Designer Saves | Dialogs opened (OK / Cancel) | Lists opened | Screenshot files | Typed / keys |
|---|---|---|---|---|---|---|---|---|---|---|
| T1 (exact) | 1 / 3 | 14 | 2 | 33 | 2 | 0 | 0 | 0 | 3 | 0 / 0 |
| T2 (exact) | 1 / 1 | 9 | 0 | 15 | 0 | 1 | 1 (1 / 0) | 1 | 4 | 1 / 0 |
| T3 (exact) | 1 / 1 | 9 | 0 | 13 | 1 | 1 | 1 (1 / 0) | 1 | 4 | 1 / 0 |
| T4 (exact) | 1 / 1 | 5 | 0 | 8 | 0 | 1 | 1 (1 / 0) | 0 | 3 | 1 / Tab 1 |
| T5 first attempt, blocked (reconstructed) | 1 / 1 | 8 (7 ref-based incl. 1 double-click, plus 1 coordinate) | 2 | 17 (reconstructed) | 1 | 0 | 1 (1 / 0) | 0 | 2 | 1 / Escape 1 |
| T5 recovery, stopped blocked (exact) | 1 / 1 | 4 | 0 | 5 | 0 | 0 | 0 | 0 | 1 | 0 / 0 |
| T5 rerun (approx.) | 1 / 1 | 27 | 2 | approx. 36 | 5 | 2 | 4 (4 / 0) | 2 | 7 files (8 captures) | 3 / Tab 2 |
| T6 (approx.) | 1 / 1 | 23 | 1 | approx. 40 | 2 | 2 | 4 (4 / 0) | 2 | 7 files | 3 / Tab 2, Ctrl+A 1 |
| T7 (approx.) | 1 / 1 | 23 | 1 | approx. 45 | 1 | 2 | 4 (4 / 0) | 2 | 6 | 3 / Tab 2, Ctrl+A 1 |
| T8 (approx.) | 1 / 1 | 17 | 1 | approx. 19 | 1 (see note) | 1 | 4 (4 / 0) | 1 | 4 | 3 / Tab 2, Ctrl+A 1 |
| T9 (exact) | 1 / 1 | 19 | 0 | 20 | 3 | 0 | 1 (0 / 1) | 0 | 6 files (10 captures) | 0 / 0 |

Totals (cumulative):

- browser_tabs: list **11** (one per task); select **13** (T1 three, each later task one). All selects succeeded.
- Clicks performed: **158** (includes one coordinate click and one double-click, both in the T5 first attempt). Click attempts that returned Ref not found and were not performed: **9** (T1 2, T5 first 2, T5 rerun 2, T6 1, T7 1, T8 1). Total click attempts: **167**.
- Coordinate clicks: **1** (T5 first attempt, on the Response Type cell's right edge). Double-clicks: **1** (T5 first attempt). Arrow-key, Enter presses: **0**.
- browser_type: **16** (T2 1, T3 1, T4 1, T5 first 1, T5 rerun 3, T6 3, T7 3, T8 3). Field corrections: **0** recorded.
- Key presses: Tab **9** (T4 1, T5 rerun 2, T6 2, T7 2, T8 2). Ctrl+A **3** (T6, T7, T8). Escape **1** (T5 first attempt).
- Mouse wheel (view only, not clicks): **8** (T5 rerun 1, T6 1, T7 1, T9 5). Mouse moves (T9, view positioning): **3**.
- Snapshot calls: **about 251 in total**, of which **94 exact** (T1 33, T2 15, T3 13, T4 8, T5 recovery 5, T9 20) and **157 approximate or reconstructed** (T5 first 17 reconstructed; T5 rerun about 36; T6 about 40; T7 about 45; T8 about 19). The approximate totals are not reconciled to the tool log.
- Snapshot Ref-not-found errors: **16** (T1 2, T3 1, T5 first 1, T5 rerun 5, T6 2, T7 1, T8 1, T9 3). Click Ref-not-found errors: **9** (see the click count above). Total Ref-not-found errors: **25**. Each snapshot Ref error was followed by a fresh untargeted snapshot as recorded in its section, except the T9 e1377 error (see T9 deviation 2).
- Find calls: T8 3, T9 19; find calls in T1 to T7 are not recorded consistently in the source blocks and are not counted.
- Dialog opens: **21** (Event Handler 5; Event Handler Parameters 4; Edit Set Variable Values 4; Edit Set Variable Value Pair 4; Edit Variable Binding 4 (T2, T3, T4, T9)). Closed by OK: **20** (Event Handler 5; Parameters 4; list 4; pair 4; Binding 3). Closed by Cancel: **1** (Binding, T9).
- Lists opened: **9** (T2 Binding Type 1; T3 Binding Type 1; T5 rerun Response Type and Primary 2; T6 2; T7 2; T8 Response Type 1). Lists left open: 0.
- Pairs created: **4** (T5 rerun, T6, T7, T8). Pairs are one per handler or added row.
- Handler groups created through the Event Handler dialog OK: **5** dialog OKs: T5 first attempt (FX_SignInBtn2, unsaved, discarded when the operator reloaded the Designer), T5 rerun (FX_SignInBtn2), T6 (FX_HomeBtn), T7 (FX_CartBtn), and T8 (added a second row to the existing FX_SignInBtn group; no new group). **Saved new groups: 3** (FX_SignInBtn2, FX_HomeBtn, FX_CartBtn).
- Designer Saves: **10** (T2 1, T3 1, T4 1, T5 rerun 2, T6 2, T7 2, T8 1). Each showed the saved toast in its task's record. T9: 0. Save Ref-not-found (T8, not performed): 1 (counted in the click failures).
- Form closes **1**; Form reopens **1** (both T9).
- Prompts: **0** in the Designer. One server-event alert (T5 recovery), answered OK once and not retried.
- Server-event errors: **1** (T5 recovery). Console: **2 errors, 0 warnings** at every check except the T5 first-attempt and recovery sequence, where it rose to 4 after the Response Type arrow click and remained 4 after the OK (recorded and stopped). The count returned to 2 at the T5 rerun gate, after the operator's reload.
- Session: the worker performed **0** re-logins and **0** session-expiry procedures. The operator re-logged in and reloaded the Designer between the T5 recovery and the rerun (operator-reported; the rerun gate read the Designer state, not the sign-in).
- Undo clicks **0**; handler Copy **0**; Regenerate **0**; Delete Form Definition **0**; Select Form OK **0**; metadata unload **0**; drag **0**; Toolbox placement **0**; copy or paste **0**; runtime action **0**; Enabled When or Visible When edits **0**.

Correction recorded in this audit: the T8 section counted one Ref-not-found error (the Save click on e2754). The pre-compaction history of this worker session also records a stale grid-toolbar reference (e2614) before the grid New (+) click, refreshed by a fresh snapshot, which the T8 section omitted. The controller reported two in T8, and that count is accepted here. The snapshot error is not reconstructed from the tool log.

## Worker-written file inventory (T1 to T9)

- `experiments/EXP-124-hello-world-part-8-phase-6a-customer-id-binding-page-handlers.md` (created in T1; updated in T2 to T9).
- `evidence/EXP-124/` PNG files, **47 files** (listed by a read-only Glob at T9):
  - T1: `t1-01-event-handlers.png`, `t1-02-variables.png`, `t1-03-buttonsignin-events-group.png` (3).
  - T2: `t2-01-edit-variable-binding-before-entry.png`, `t2-02-edit-variable-binding-typed-FX_CustomerID.png`, `t2-03-binding-rows-before-save.png`, `t2-04-save-response.png` (4).
  - T3: `t3-01-edit-variable-binding-before-entry.png`, `t3-02-edit-variable-binding-FX_CustomerID-before-OK.png`, `t3-03-binding-rows-before-save.png`, `t3-04-save-response.png` (4).
  - T4: `t4-01-edit-variable-binding-at-open.png`, `t4-02-edit-variable-binding-initial-value-1-before-OK.png`, `t4-03-save-response.png` (3).
  - T5 first attempt and recovery: `t5-01-event-handler-dialog-FX_SignInBtn2-before-OK.png`, `t5-02-blocked-response-type-not-found.png`, `t5-03-after-type-arrow-server-event-error-OK.png` (3).
  - T5 rerun: `t5r-01` to `t5r-07` (7). `t5r-06-buttonsignin-events-primary-FX_SignInBtn2-before-Step-B-save.png` was captured twice under this name; the second capture is the cited file and the first was overwritten.
  - T6: `t6-01` to `t6-04`, `t6-05-buttonhome-events-primary-FX_HomeBtn-before-Step-B-save.png` (Primary not visible in this capture), `t6-05b-buttonhome-events-primary-FX_HomeBtn-before-Step-B-save.png` (the cited capture), `t6-06-save-response-step-B.png` (7).
  - T7: `t7-01` to `t7-06` (6).
  - T8: `t8-01-event-handler-dialog-FX_SignInBtn-before-OK.png`, `t8-02-edit-set-variable-value-pair-FX_Page-2-before-OK.png`, `t8-03-signin-group-both-rows-before-save.png`, `t8-04-save-response-state.png` (4).
  - T9: `t9-01-event-handlers-after-reopen.png` (partial), `t9-02-variables-after-reopen.png`, `t9-03-editcustid-binding-rows.png`, `t9-04-staticcustid-binding-rows.png`, `t9-05-editcount-binding-dialog-readonly.png`, `t9-06-buttoncart-events-primary.png` (6). Overwritten captures: the first two of each of t9-03 and t9-04 (see the T9 screenshot note).
- Tool-written files, not authored by the worker and not read or searched: page snapshot and console files under `evidence/playwright/` (written by the browser tool); five oversized snapshots saved by the tool to the session's tool-results folder outside the repository (T1 one, T5 first attempt one, T5 rerun two, T9 one). None was read.
- No other repository file was written by the worker. The operator's Git review is authoritative for repository confinement.

## Cleanup inventory (final, cumulative to T9)

Saved changes on FX_CustomerPortal, User scope (all read back in T9 unless noted):

1. EditCustID: Binding Type Variable; Binding `variables.FX_CustomerID` (T2).
2. StaticCustID: Binding Type Variable; Binding `variables.FX_CustomerID` (T3).
3. EditCount: Binding `variables.FX_Count` with Initial Value 1, displayed as `variables.FX_Count(INITIALVALUE(1))` (T4).
4. Variable **FX_CustomerID** (Form - Temporary): absent at T1; present at T9. Appeared after the T2 and T3 binding entries. The worker did not create it through Details > Variables. The Designer's creation mechanism is not separately verified. The worker did not delete it.
5. Handler **FX_SignInBtn2**, Set Values SETVARVALUES(FX_Page=1), with one FX_Page pair (T5 rerun); **ButtonSignIn Primary FX_SignInBtn2** (T5 rerun).
6. Handler **FX_HomeBtn**, Set Values SETVARVALUES(FX_Page=2), one pair (T6); **ButtonHome Primary FX_HomeBtn** (T6).
7. Handler **FX_CartBtn**, Set Values SETVARVALUES(FX_Page=3), one pair (T7); **ButtonCart Primary FX_CartBtn** (T7).
8. **FX_SignInBtn second row** (sequence 1), Set Values SETVARVALUES(FX_Page=2), one pair (T8); the original Collection Refresh row (sequence 0, object2) unchanged.

Not saved, not present: the unsaved FX_SignInBtn2 group from the first T5 attempt, discarded when the operator reloaded the Designer (absent at the rerun gate). No deletion was performed by the worker. Pairs in place: 4. Primary events set: 3 (ButtonSignIn, ButtonHome, ButtonCart); ButtonSignIn2's Primary (FX_SignInBtn) was not touched.

## Final state (EXP-124)

FX_CustomerPortal is open and clean in the Designer (Save disabled), User scope, with no dialog, list or editor open. Console 2 errors, 0 warnings at the last action output. Saved state (same session, observed after one close and reopen): the Event Handlers groups and rows, the variables and the bindings, and the Primary events are as listed in the cleanup inventory. Runtime checks, Enabled When and Phase 6b (EXP-125) are not performed.

## Acceptance status and final audit (T9)

- **AC-1 (observed):** Sources read at the start of each task (AGENTS.md read at T1 and at each later task; the T3 read was partial, lines 1 to 40, and the full file was read from T4 onward; T9 read it in full); session usable (the T9 gate showed the Designer authenticated, no sign-in page); User scope in the status bar at the gate and after the reopen; FX_CustomerPortal open and clean at the gate and after the reopen; the pre-state, including the StdFormPredisplay and FX_SignInBtn groups, FX_CustomerID absent, the EditCustID and StaticCustID bindings at None, EditCount's binding, the menu buttons' blank Primaries and ButtonSignIn2's Primary, is recorded in the T1 section (see its "Acceptance check status after T1"). Baseline console count 2 errors, 0 warnings. Evidence: T1 screenshots `t1-01` to `t1-03`; T9 gate read (no screenshot at the gate).
- **AC-2 (observed, same session):** T2 and T3 EditCustID and StaticCustID bound to variables.FX_CustomerID through the Edit Variable Binding dialog, one Save each (`t2-01` to `t2-04`, `t3-01` to `t3-04`); T4 EditCount Initial Value 1 with the binding unchanged, one Save (`t4-01` to `t4-03`); T5 rerun, T6 and T7 handlers created with New, each Set Values SETVARVALUES(FX_Page=1/2/3), each the Primary of its menu button, two Saves each (`t5r-01` to `t5r-07`; `t6-01` to `t6-06` and `t6-05b`; `t7-01` to `t7-06`); T8 the second FX_SignInBtn row Set Values SETVARVALUES(FX_Page=2) after the unchanged Collection Refresh row, one Save (`t8-01` to `t8-04`). Console count recorded after every action; at most one correction per field (none recorded). **Limitations:** the first T5 attempt was blocked and its unsaved group was lost on the operator's Designer reload; the cited t5r-06 and the t9 captures are the second captures of their names; T5 rerun, T6, T7 and T8 snapshot counts are approximate.
- **AC-3 (observed after one same-session close and reopen):** all handler groups and rows as planned (Readback 1); FX_CustomerID listed as a variable, category Form - Temporary (Readback 2; `t9-02`); EditCustID and StaticCustID bound to variables.FX_CustomerID (Readback 3; `t9-03`, `t9-04`); EditCount Initial Value 1 (Readback 3; `t9-05`, read-only dialog then Cancel); the Primaries of ButtonSignIn (FX_SignInBtn2), ButtonHome (FX_HomeBtn), ButtonCart (FX_CartBtn; `t9-06`) and ButtonSignIn2 (FX_SignInBtn) as planned; FX_CustomerPortal open and clean (Save disabled). **Limitations:** same session only; not cross-session or database-level durability; `t9-01` partial; the Global - Temporary variable category not read. Status: met as observed in the same session.
- **AC-4 (observed):** no other handler, component, region value or Form property changed in the readbacks; no Toolbox placement; no handler Copy; no copy or paste; no variable created through Details > Variables; no global object; no Regenerate, unload, Delete Form Definition or Select Form OK; no dragging; no Undo; no runtime action; User scope throughout. Task boundaries: each task stopped at its boundary as recorded. Deviations recorded in their sections: the T5 first attempt used one coordinate click and one double-click on the Response Type cell (the brief's one coordinate click per field was used once); the Event Handler Name field was pre-filled in T6, T7 and T8 and was replaced by Control+A and typing (not copy or paste).
- **AC-5 (audit written; shortfalls for operator disposition):**
  1. Exact cumulative snapshot total is not available: about 157 of about 251 snapshot calls are approximate or reconstructed (T5 first attempt, T5 rerun, T6, T7, T8). The tool log was not available to the worker.
  2. T5 rerun Ref-not-found total is **7** (2 click, 5 snapshot), as its errors list states; its audit line listed only the 2 clicks.
  3. T8 Ref-not-found count: the T8 section records 1 (the Save click). The controller's count of 2 (a snapshot on ref e2614 and the Save click on e2754) is accepted here; the snapshot error is not separately documented in the T8 section.
  4. Overwritten captures: `t5r-06` (the first capture overwritten), `t9-03` and `t9-04` (the first two captures of each overwritten). Cited files are the last captures.
  5. `t9-01` is partial; the full readback is the accessibility read.
  6. T9 deviation: after the Ref-not-found on the Properties panel (e1377) no fresh untargeted snapshot was taken; text finds and a targeted snapshot were used instead (no click used a find-only reference).
  7. T3 AGENTS.md was read partially (lines 1 to 40) and read in full from T4 onward (recorded in the T4 section).
  8. Controller task-label mismatches recorded in each task: the T5 recovery header said task=T6; the T5 rerun header said task=T7; the T6 header said task=T8; the T7 header said task=T9; the T8 header said task=T10; the T9 header says task=T11. In each case the bounded instruction was followed and the mismatch recorded.
  9. Operator reload and re-login between the T5 recovery and the rerun are operator-reported; the worker did not perform them.
  10. Unresolved: the cause of the T5 first-attempt server-event error (console 2 to 4 on the Response Type arrow click). The rerun used the same route with no rise. The operator diagnoses from the tool-written console log; the worker did not read the console messages.
  11. The Event Handler Name pre-fill (the previous handler name) is an observation for the operator.
  12. The FX_CustomerID creation mechanism is not separately verified.
- AC-5 shortfalls 1 and 3 are the only counts that cannot be made exact from the worker's records. The operator may accept the approximate totals, or request a recount from the tool log.

## Knowledge state (T9 findings, observed only)

- **Observed:** Handlers and rows persist in the Designer after an ordinary same-session close and reopen (Readback 1). Customer ID bindings (`variables.FX_CustomerID`) and EditCount's `variables.FX_Count(INITIALVALUE(1))` persist after the same reopen (Readback 3). The Primary events persist after the reopen (Readback 4). FX_CustomerID appears under Form - Temporary (Readback 2). The Edit Variable Binding dialog for EditCount shows Clear On Refresh unchecked and a blank, greyed Refresh Value.
- **Candidate procedure:** the handler-row route (Event Handlers New (+), the Event Handler dialog Name, the Response Type list "Set Values", Parameters ellipsis, Variables ellipsis, the pair New with Target and Value, the OK chain, the Events > Primary list with Form handlers listed first). Used four times in the same session (T5 rerun, T6, T7, T8). Not verified by replay.
- **Unresolved:** the T5 first-attempt server-event cause; the FX_CustomerID creation mechanism; the approximate snapshot totals.
- **Replay-verified:** none. The T9 reopen is an ordinary same-session close and reopen and does not establish cross-session or database-level durability.

## Open questions and blockers for the operator

- Decide on the AC-5 shortfalls listed above (approximate snapshot totals; T8 Ref count; T5 rerun Ref count; overwritten captures; t9-01 partial).
- Decide whether to accept the EditCount dialog's Clear On Refresh state (unchecked, from the screenshot) as sufficient for the readback, or whether a non-greyed view is needed.
- Confirm the operator's diagnosis of the T5 first-attempt server-event error from the tool-written console log.
- No further Phase 6 work is authorized by this record. Phase 6b (Enabled When on the menu buttons, EXP-125) is not started.

## Superseded next step (before the T5 rerun)

Operator decision required before any further task. Stop T5 blocked. Confirm the session state (portal tab "Logout Successful" plus the server-event error). If the session is ended, the operator signs in manually (EXP-107). If the Designer is intact, the operator decides whether to reload the Designer, inspect the Type control, or delete the unsaved handler. T5 Step A is not completed; Step B is not started. T6 and T7 are not started.

Prior decision note (still valid): Options listed in the T5 blocker detail: inspect the Response Type control and reissue T5 Step A; or delete the unsaved FX_SignInBtn2 group after confirming the name; or approve an explicit Save of the incomplete handler (not recommended). Do not use Undo. After the decision, a new T5 task should start with a fresh snapshot and read-only inspection of the Event Handlers grid before any change.

## Outcome (operator, 2026-10-20)

Accepted (observed), with qualifications. **The Designer part of Hello World Part 8 Phase 6 (Phase 6a) is complete on FX_CustomerPortal (User scope): EditCustID and StaticCustID are bound to the Form variable FX_CustomerID (Binding Type Variable, `variables.FX_CustomerID`); EditCount's binding reads `variables.FX_Count(INITIALVALUE(1))`; handlers FX_SignInBtn2, FX_HomeBtn and FX_CartBtn (Set Values `SETVARVALUES(FX_Page=1)`, `(FX_Page=2)`, `(FX_Page=3)`) are the Primary events of ButtonSignIn, ButtonHome and ButtonCart; FX_SignInBtn has a second row (sequence 1, Set Values `SETVARVALUES(FX_Page=2)`) after its unchanged Collection Refresh row (sequence 0, `object2`). All read back after one ordinary close and reopen (T9).** Run R-20261020-154718-osNu (11 of 12 worker tasks; 10 Designer Saves, each with the saved toast: T2, T3, T4, T8 one each; T5 rerun, T6, T7 two each).

- After the reopen (T9): FX_CustomerID listed under Form - Temporary (it did not exist at T1; it appeared after the T2/T3 binding entries, not through Details > Variables); FX_Count and FX_Page still under Form - Temporary; StdFormPredisplay unchanged; ButtonSignIn2's Primary still FX_SignInBtn; Form open and clean; console 2 errors (the baseline) at the end.
- Screenshots viewed by the operator assistant: `t3-03` (StaticCustID Binding Type Variable, Binding `variables.FX_Custc...`); `t4-02` (Edit Variable Binding: Variable FX_Count, Initial Value 1); `t5-02`, `t5-03` (first T5 attempt: Response group collapsed, then expanded with a blank Type sub-row); `t7-05` (ButtonCart Events > Primary FX_CartBtn); `t8-03` (FX_SignInBtn rows 0 Collection Refresh object2 and 1 Set Values SETVARVALUES(FX_Page=2)); `t9-01` (after reopen: FX_CartBtn FX_Page=3, FX_HomeBtn FX_Page=2; partial); `t9-02` (Form - Temporary FX_Count, FX_CustomerID); `t9-03` (EditCustID Binding Type Variable, Binding `variables.FX_Custc...`); `t9-05` (EditCount Edit Variable Binding: FX_Count, Initial Value 1, Clear On Refresh unchecked).
- Operator rulings during the run:
  1. T5 first attempt: the worker looked for the Response Type list in the grid cell and on the collapsed Response row. Ruling: continue on the existing unsaved row through the lower Properties grid's Response group, Type sub-row arrow (EXP-123 T2 route); no New, Undo or delete.
  2. T5 recovery: the Type arrow click raised the console count from 2 to 4 with the server-event error, and the portal tab read "Logout Successful". Diagnosis by the operator assistant from `evidence/playwright/console-2026-10-20T11-22-50-810Z.log`: the Designer request was redirected to the Infor SSO `wsfed?wa=wsignin1.0` page and blocked (CORS, `net::ERR_FAILED`), so the session had expired during the three-hour pause (08:09 to 11:21); the route was not at fault. The operator signed in again; the Designer reload discarded the unsaved FX_SignInBtn2 group (verified absent at the rerun gate).
  3. T5 rerun: New, then the Response > Type arrow opened the list normally; T6 and T7 used the same route.
  4. The T9 instruction was paused by the harness scope check (`foreign_experiment:EXP-125`) only because it said "Do not start EXP-125"; approved with `--approve scope`.
- Findings (observed):
  1. A new handler's Response Type is set in the lower Properties grid: expand the Response group (Properties expand-all) and use the **Type** sub-row arrow; the grid's Response Type cell offers no list.
  2. Event Handlers New with an existing event name (FX_SignInBtn) appends a row to that group at the next sequence (1) with no prompt; the existing row is unchanged.
  3. The Event Handler dialog's Name field is pre-filled with the previously entered handler name.
  4. The Edit Variable Binding dialog's Initial Value is stored in the Binding text as `variables.FX_Count(INITIALVALUE(1))`.
  5. A typed variable name in the Edit Variable Binding dialog (FX_CustomerID) is listed under Form - Temporary after Save and reopen, as FX_Count was (EXP-120).
  6. The Primary event list offers the Form's own handlers first (EXP-117 again).
- Qualifications accepted by the operator: approximate or reconstructed snapshot totals (no recount); the T8 Ref-not-found count (controller count 2 accepted); overwritten captures `t5r-06`, `t9-03`, `t9-04` (last captures cited); partial `t9-01` (the accessibility readback is authoritative); the T9 find plus targeted-snapshot recovery after one Ref not found; the partial T3 AGENTS.md read (lines 1 to 40); Control+A clearing of the pre-filled Name in T6 to T8; controller task-label mismatches (cosmetic).
- Record hygiene: the signed-in account name, copied from the status bar into this record by the worker, was replaced with `<signed-in user>` by the operator assistant (AGENTS.md: no credential values in Markdown). The status bar in the screenshots still shows it, as in earlier experiments.
- Confinement (git status): only `evidence/EXP-124/` and this record were written by the run in the repository (plus the tool's usual files under `evidence/playwright/`).
- Cleanup inventory (Phase 6a, FX_CustomerPortal, User scope): EditCustID and StaticCustID bindings to FX_CustomerID and the Form - Temporary variable FX_CustomerID; EditCount Initial Value 1; handlers FX_SignInBtn2, FX_HomeBtn, FX_CartBtn and the FX_SignInBtn sequence 1 row; Primary events of ButtonSignIn, ButtonHome, ButtonCart. No global object created or changed.
- Limits: same-session UI evidence only; no runtime check (navigation and the FX_Page values are untested at runtime).
- Next: EXP-125, Part 8 Phase 6b: Enabled When on ButtonSignIn, ButtonHome and ButtonCart (`#V(FX_CustomerID)` not equal to a blank literal, built by editing the existing clause of the Edit Condition builder, never New), then a runtime check (menu disabled while Customer ID is blank; Customer ID 1 + ButtonSignIn2 shows the homepage tiles and enables the menu; Home/Cart/Sign In switch the regions).
