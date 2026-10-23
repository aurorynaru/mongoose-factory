# EXP-127: Hello World Part 8 Phase 8: ButtonCheckout Primary StdFormSave and runtime cart walkthrough (FX_CustomerPortal)

Status: accepted (observed)

Worker status (history): **T1 to T7 executed; final audit recorded; awaiting operator disposition.** T1 (read-only gate), T2 (ButtonCheckout Primary = StdFormSave, one Designer Save), T3 (one Designer close and reopen; read-back of Primary StdFormSave), T4 (runtime open, FX001 typed, one ButtonSignIn2 click; tiles shown), T5 (one drag of the dumbbell tile onto ButtonAddToCart; left-menu Cart; one starred GridOrders row, Order Number 3), T6 (one Checkout click on the cart page; the row's new-row star cleared; no prompt or message) and T7 (runtime closes; FX_Orders blank query: row Order Number 3 / FX001 / dumbbell / 1 present with rows 1 and 2 unchanged) recorded.
Scope: User (signed-in user). Form: FX_CustomerPortal. Tutorial source: `docs/mongoose/transcripts/hello-world-pt8.md` Phase 8 (lines 212-219) and transcript 21:04-21:44 (lines 514-521).
Predecessors: EXP-126 (Phase 7, accepted), EXP-125 (Phase 6b), EXP-118 (Phase 2), EXP-073 (FX_Orders rows, runtime).

## Sources reviewed (T1, before any browser action)

- `AGENTS.md` (read in full).
- `docs/mongoose/transcripts/hello-world-pt8.md`: instructions lines 12-22; Phases 7-8 lines 188-219; transcript lines 506-521.
- `recipes/session/session-expiry-and-stale-designer.md` (read in full).
- Outcome (operator) sections only: EXP-126 (lines 1320-1365), EXP-125 (lines 1651-1682), EXP-118 (lines 361-381), EXP-073 (lines 795-834).
- Header lookups by Grep on the four named records (heading line numbers only).
- Existence checks by Glob (`experiments/*127*`, `evidence/EXP-127/**`): no EXP-127 record or evidence existed before this task.

Carried over from the sources:
- EXP-126 Outcome: handlers FX_SetNewCartEntry (Set Values `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`); FX_AddToCart (rows: Collection Make Current `object`, Collection New `object`, Generate event `FX_SetNewCartEntry( POST() )`); GridItems Drag From Events and ButtonAddToCart Drop On Events = FX_AddToCart. No runtime drag was done in EXP-126, so no FX_Orders row was created by it.
- EXP-073 Outcome: FX_Orders rows 1 (FX001, dumbbell, 2) and 2 (FX002, eggs, 1). Customer IDs FX001/FX002 are the FX_ adaptation of the tutorial's Customer ID 1.
- EXP-125 Outcome: ButtonSignIn, ButtonHome and ButtonCart Enabled When `#V(FX_CustomerID) <> ""`. Runtime Customer ID FX001 plus ButtonSignIn2 shows the home page with the tiles.
- EXP-118 Outcome: ButtonSignIn2 (Primary FX_SignInBtn) shows the FX_Items tiles (GridItems Collection Refresh `object2`).
- Tutorial Phase 8: assign "Standard Form Save" (transcript wording; the ASR wrote "standard form safe") to Button Checkout as Primary; save; reopen runtime; sign in; drag one item to the cart; open Cart; a new row for the item with count 1; Checkout. The tutorial gives no independent post-commit or read-back evidence.

## Gate (T1, read-only): result

Result: **gate passed; no mutation made in T1.** Stopped with no menu, dialog or list open.

Starting state:
- Browser tabs (listed before any selection): tab 0 = Designer ("Infor Mongoose Application Development Framework", `MGForm=FX_CustomerPortal`, selected); tab 1 = portal page "Mongoose" (the Web Client, embedded in the Infor OS portal). No session-expiry modal, "Logout Successful" card or sign-in form was present in either tab.
- Designer: FX_CustomerPortal open; status bar `ScopeType: User / ScopeName: <signed-in user>`; toolbar Save disabled (confirmed by snapshot: `button "Save" [disabled]`) and Regenerate Form disabled; no dialog, menu or list open.
- Web Client: no runtime Form open (the main region is empty; the Explorer region shows My Folders, Master Explorer, Public Folders and User Folders). Nothing to be unsaved. Inferred from the accessibility tree; no screenshot was taken of this tab in T1.

Designer > Details > Event Handlers (read from a targeted snapshot of the Event Handlers panel; matches the EXP-126 Outcome):

| Group | Row | Response Type | Disabled | Response Parameters |
|---|---|---|---|---|
| FX_AddToCart | 0 | Collection Make Current | false | `object` |
| FX_AddToCart | 1 | Collection New | false | `object` |
| FX_AddToCart | 2 | Generate event | false | `FX_SetNewCartEntry( POST() )` |
| FX_CartBtn | 0 | Set Values | false | `SETVARVALUES(FX_Page=3)` |
| FX_HomeBtn | 0 | Set Values | false | `SETVARVALUES(FX_Page=2)` |
| FX_SetNewCartEntry | 0 | Set Values | false | `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))` |
| FX_SignInBtn | 0 | Collection Refresh | false | `object2` |
| FX_SignInBtn | 1 | Set Values | false | `SETVARVALUES(FX_Page=2)` |
| FX_SignInBtn2 | 0 | Set Values | false | `SETVARVALUES(FX_Page=1)` |
| StdFormPredisplay | 0 | Set Values | false | `SETVARVALUES(FX_Page=1)` |

All groups and rows match the expected state (FX_AddToCart three rows; FX_CartBtn, FX_HomeBtn, FX_SetNewCartEntry, FX_SignInBtn two rows, FX_SignInBtn2, StdFormPredisplay). Nothing was expanded or changed.

Components selections (each selected by its Components row Type cell; the Properties header names the component):

| Component (Type) | Properties header | Events | Reading |
|---|---|---|---|
| ButtonCheckout (PushButton; under FlexLayoutMain) | `ButtonCheckout (Button)`; Caption FX_sCheckout | Primary | **blank** (expected blank) |
| ButtonCheckout | same | Drag From Events / Drop On Events | 0 event(s) / 0 event(s) (not part of the gate; its own Drag/Drop are not expected to be set) |
| GridItems (Grid; under FlexLayoutHome) | `GridItems (Grid)` | Drag From Events | **1 event(s)** (expected 1) |
| ButtonAddToCart (PushButton; under FlexLayoutButtons) | `ButtonAddToCart (Button)`; Caption FX_sAddToCart | Drop On Events | **1 event(s)** (expected 1) |

The event name behind each count was not opened (no ellipsis opened, by the brief). It rests on EXP-126's T7/T8 evidence, as recorded in the EXP-126 Outcome.

Designer Save state: disabled before and after all T1 selections (find output `button "Save" [disabled]`).

Console error counts (from the tool output's page line):
- Designer tab baseline: **2 errors, 0 warnings**. Printed after every T1 action (the 5 click results and the snapshots) and unchanged each time. The tab-switch and find outputs do not print the count, so the count after the last tab switch is not printed; the last printed value (2 errors, 0 warnings) is the value before the final switch.
- Web Client tab baseline: **2 errors, 2 warnings**.
- The console messages themselves were not read, per the brief.

## T2: ButtonCheckout Primary = StdFormSave, one Designer Save

Result: **done (observed).** Primary reads `StdFormSave` after the change; one Designer Save produced the saved notice; Save is disabled again. The read-back after a Designer close and reopen is **T3, not yet run**.

Start of task:
- Sources: AGENTS.md re-read at the start of the task; this record (T1 and the "Next step" section) only. No other source.
- Tabs listed first (read-only): tab 0 = Designer (FX_CustomerPortal, `MGForm=FX_CustomerPortal`); tab 1 = Web Client (portal page). Tab 0 selected (succeeded).
- Designer baseline console: **2 errors, 0 warnings** (tool output line, at the first targeted snapshot). Web Client was not selected in T2; its last recorded baseline is 2 errors, 2 warnings (T1). The Web Client was not used or changed.
- Pre-state: status bar `ScopeType: User`; Save disabled; no dialog, menu or list open; ButtonAddToCart was still the selected component from T1.
- Snapshot exception: no untargeted snapshot was taken in T2, because the untargeted snapshot was too large to return inline (the T1 snapshot was 56 KB and saved by the tool). Targeted snapshots of the needed panels were used instead (snapshot-size rule, EXP-114). Five targeted snapshots were taken: the Components grid, the Properties tree (twice), the open Primary list, and the toolbar.

Steps (references each taken from the latest snapshot in this task; console count shown after each):

| # | Action | Result | Console (errors / warnings) |
|---|---|---|---|
| 1 | Click ButtonCheckout's Components row Type cell (`PushButton`) | Properties header `ButtonCheckout (Button)`, Caption `FX_sCheckout`. Events: Primary blank, Drag From Events 0 event(s), Drop On Events 0 event(s). | 2 / 0 |
| 2 | Click Primary's list arrow (the row's arrow in the Events group; not the ellipsis) | Combobox expanded; list open. | 2 / 0 |
| 3 | Screenshot `t2-01` (list open) | see evidence below | n/a |
| 4 | Click option `StdFormSave` (exact text, from the list's accessibility readback) | Combobox then reads `StdFormSave`; list closed. | 2 / 0 |
| 5 | Click a neutral row (the Design group's empty cell) | Field left; no editor opened. | 2 / 0 |
| 6 | Screenshot `t2-02` (Events group before the Save) | Primary `StdFormSave`; Drag From 0; Drop On 0; Save enabled. | n/a |
| 7 | Click the toolbar Save once (ref from the current toolbar snapshot) | Saved notice: "Save — Form [FX_CustomerPortal] and global object(s) were saved." Save disabled afterwards (find readback). | 2 / 0 |
| 8 | Screenshot `t2-03` (Save response state) | notice visible; Save greyed; Primary `StdFormSave`; User scope. | n/a |

Primary list options (recorded from the open list's accessibility readback, targeted snapshot of the combobox; the list is long and was not counted in full):
- Form's own handlers first (as EXP-117 noted): `FX_AddToCart`, `FX_CartBtn`, `FX_HomeBtn`, `FX_SetNewCartEntry`, `FX_SignInBtn`, `FX_SignInBtn2`.
- Then the Std events, alphabetically: `StdAppLaunchInbox`, `StdAppLaunchTasks`, `StdCurComp...` (action, add, clipboard, critical, details, edit, find, graph, search, show menu, sort), `StdFormApplySavedFilter`, `StdFormCalledFormReturned`, `StdFormClose`, ..., `StdFormPerformValidations`, `StdFormPredisplay`, `StdFormPrevious`, ..., **`StdFormResponsiveBreakpointChanged`, `StdFormSave`, `StdFormSaveCompleted`, `StdFormSaveCurrent`, `StdFormSaveCurrentCompleted`**, `StdFormShowHideSplitterPaneOne`, ..., `StdObjectSave`, `StdObjectSaveCompleted`, `StdObjectSaveCurrent`, `StdObjectSaveCurrentCompleted`, ..., `StdWebLocationInfoReceived`.
- Exact option `StdFormSave` is present, so the planned option was chosen.

Screenshots (what each shows and does not prove):
- `evidence/EXP-127/t2-01-primary-list-open.png`: Designer, FX_CustomerPortal, `ButtonCheckout (Button)` header, Primary list expanded showing the Form's handlers (`FX_AddToCart` to `FX_SignInBtn2`) and the start of the Std list (`StdAppLaunchInbox` onward), `ScopeType: User`. Does **not** show `StdFormSave` (it is below the visible scroll position); the option's presence rests on the accessibility readback of the list.
- `evidence/EXP-127/t2-02-events-before-save.png`: header `ButtonCheckout (Button)`, Primary `StdFormSave`, Drag From Events 0 event(s), Drop On Events 0 event(s); Save icon enabled (dark); `ScopeType: User`. Shows the pre-Save Events state. Does not prove the Save.
- `evidence/EXP-127/t2-03-after-save-state.png`: the saved notice "Form [FX_CustomerPortal] and global object(s) were saved." at top right; Save greyed; Primary `StdFormSave`; header ButtonCheckout; `ScopeType: User`. Shows the Save response in the Designer. Does **not** prove persistence across a close and reopen (that is T3).

Observations: no prompt, dialog, error, or "server event processing" message appeared in T2. The console count was 2 errors / 0 warnings after every action. No Save was retried. The saved notice wording names "global object(s)"; no global object was changed by this step (only the ButtonCheckout Primary event was set).

Acceptance checks (T2):
- AC-2 (partial, observed): ButtonCheckout Primary set to `StdFormSave` from the list (options recorded above); one Designer Save with its notice; list and Events and Save screenshots (`t2-01` to `t2-03`). **The read-back after one ordinary close and reopen is not yet done (T3).**
- AC-1 items: unchanged by T2 (Drag From and Drop On still 0 event(s) for ButtonCheckout, as expected for that component; GridItems and ButtonAddToCart not touched in T2).
- AC-3 to AC-5: not applicable yet / not run. AC-5 so far: no other Designer change in T2 (one property set, one Save, no handler, variable or binding edit).

Action audit, T2 only (exact counts):
- Tab list: 1. Tab selections: 1 (tab 0, succeeded).
- Finds: 5 (Components, Primary, StdFormSave, Save, Save).
- Snapshots: 5 (all targeted; 0 untargeted; 0 "Ref not found" errors).
- Clicks: 5 (ButtonCheckout Type cell; Primary list arrow; StdFormSave option; Design row neutral cell; toolbar Save). All by references from the latest snapshot; no coordinate clicks.
- Screenshots: 3 (`t2-01`, `t2-02`, `t2-03`).
- Designer Saves: 1. Lists opened: 1 (Primary). Ellipsis opened: 0. Dialogs opened: 0. Closes: 0. Reopens: 0. Keys pressed: 0. Typed text: 0. Drags: 0. Runtime clicks: 0. Unload, refresh, navigation: 0.
- Total browser tool calls in T2: 20 (2 tab calls + 5 finds + 5 snapshots + 5 clicks + 3 screenshots).

Cumulative browser action audit, T1 + T2 (exact counts):
- Tab lists: 2. Tab selections: 3 (T1: 2; T2: 1).
- Finds: 10 (T1: 5; T2: 5).
- Snapshots: 14 (T1: 9, of which 2 untargeted; T2: 5 targeted).
- Clicks: 10 (T1: 5 Event Handlers tab, Components tab, ButtonCheckout, GridItems and ButtonAddToCart Type cells; T2: 5 as listed above).
- Screenshots: 7 (T1: 4; T2: 3).
- Designer Saves: 1 (T2). Lists opened: 1 (T2). Ellipsis: 0. Dialogs: 0. Closes: 0. Reopens: 0. Drags: 0. Keys: 0. Typing: 0. Runtime clicks: 0. Unload: 0. Refresh or navigation: 0. Coordinate clicks: 0. "Ref not found" errors: 2 (both in T1).
- Total browser tool calls, T1 + T2: 46 (26 + 20).

Worker-written file inventory, T2 (in addition to T1's inventory):
- Edited: `experiments/EXP-127-hello-world-part-8-phase-8-checkout-runtime-cart-walkthrough.md` (status line; the "Next step" heading renamed to show it is from T1; this T2 section appended).
- Created (screenshot tool, at the worker's request): `evidence/EXP-127/t2-01-primary-list-open.png`, `evidence/EXP-127/t2-02-events-before-save.png`, `evidence/EXP-127/t2-03-after-save-state.png`.
- Tool-written only: the snapshot and console logs under `evidence/playwright/`.

Cleanup inventory after T2 (for later removal): **ButtonCheckout Primary = `StdFormSave`** on FX_CustomerPortal (User scope). No FX_Orders row created; no other change.

Final state after T2:
- Designer tab (tab 0) selected; FX_CustomerPortal open; User scope; Save disabled; ButtonCheckout selected in Components; the Events group expanded with Primary `StdFormSave`; no dialog, list, menu or unsaved change open. The saved notice is a transient toast, not a dialog.
- Web Client tab not touched.

Next step (not performed in T2): **T3, Designer readback.** Close the clean FX_CustomerPortal once through its Form-tab control (answer No to any save prompt and record its text), reopen it once through the Form menu recent-forms entry, and read ButtonCheckout Events > Primary (expect StdFormSave), the FX_AddToCart and FX_SetNewCartEntry rows, GridItems Drag From Events and ButtonAddToCart Drop On Events. Screenshot ButtonCheckout's Events group. Open no ellipsis, dialog or list. (Performed in T3; see the T3 section below.)

## T3: Designer close and reopen; read-back

Result: **done (observed).** One ordinary close of FX_CustomerPortal (no save prompt) and one reopen through the Form menu recent-forms entry. After the reopen, ButtonCheckout Events > Primary reads `StdFormSave`, User scope, Save disabled. The Form is open and clean at the end of T3. No Designer Save was performed in T3.

Start of task:
- Sources: AGENTS.md re-read at the start of the task; this record (the T2 section and the T3 instruction) only.
- Tabs listed first (read-only): tab 0 = Designer (FX_CustomerPortal, `MGForm=FX_CustomerPortal`); tab 1 = Web Client. Tab 0 selected (succeeded).
- Pre-state: Save disabled; Undo disabled (no unsaved change); `ScopeType: User`; no dialog, list, editor or menu open. Designer baseline console: **2 errors, 0 warnings**. Web Client not selected in T3 (last recorded baseline 2 errors, 2 warnings, from T1).

Steps (console count printed by the tool after each action, Designer tab):

| # | Action | Result | Console (errors / warnings) |
|---|---|---|---|
| 1 | Find, then targeted snapshot of the toolbar (`e11`) | Save and Undo disabled; baseline | 2 / 0 |
| 2 | Targeted snapshot of the Form tab strip (`e244`) | one Form tab, `FX_CustomerPortal`, selected; close control `closable FX_CustomerPortal` | 2 / 0 |
| 3 | Click the Form-tab close control once (`e247`) | Form closed; **no save prompt appeared** (no text to record); URL no longer carries `MGForm=FX_CustomerPortal` | 2 / 0 |
| 4 | Targeted snapshot of the navigation bar (`e2`) | Form menu button `Form` | 2 / 0 |
| 5 | Click the Form menu button once (`e3`) | menu opened | 2 / 0 |
| 6 | Targeted snapshot of the menu (`e2042`) | recent-forms entries: `FX_CustomerPortal`, `Test ION API Invoke`, `Access As`, `EX_Items`, `IDO Projects`, `FX_Items`, `FX_FlexProbe01`, `FX_OrdersChart`, `FX_Orders`, `FX_HelloWorld01` | 2 / 0 |
| 7 | Click the recent-forms entry `FX_CustomerPortal` once (`e2053`) | Form reopened; URL carries `MGForm=FX_CustomerPortal` | 2 / 0 |
| 8 | Read-only checks: Save (find: disabled); Details tab strip; screenshot `t3-01` | reopened tab selected; Save greyed; Details collapsed at the bottom; Properties shows the Form (Name `FX_CustomerPortal`, Form Type Flex); `ScopeType: User` | 2 / 0 |
| 9 | Targeted snapshot (`e2204`), then click "Expand Panel" once (view only) | Details panel expanded | 2 / 0 |
| 10 | Targeted snapshot of the Details tab strip (`e2311`), then click the Event Handlers tab (`e2316`) | Event Handlers tab selected; the seven handler groups listed, collapsed | 2 / 0 |
| 11 | Double-click the group label FX_AddToCart (`e2422`) (view only) | group expanded | 2 / 0 |
| 12 | Double-click the group label FX_SetNewCartEntry (`e2548`) (view only) | group expanded | 2 / 0 |
| 13 | Click the Components tab (`e2314`, from an untargeted snapshot taken in this task after one stale-ref error) | Components tab selected | 2 / 0 |
| 14 | Click the Components grid's Expand button once (`e2660`) (view only) | tree expanded (was collapsed to `Pane (00)`) | 2 / 0 |
| 15 | Click ButtonCheckout's Type cell (`e3928`) | Properties header `ButtonCheckout (Button)`; Caption `FX_sCheckout`; Events: Primary `StdFormSave`, Drag From 0, Drop On 0 | 2 / 0 |
| 16 | Click GridItems' Type cell (`e3453`) | Properties header `GridItems` (Type Grid); Drag From Events `1 event(s)`; Drop On Events `0 event(s)` | 2 / 0 |
| 17 | Click ButtonAddToCart's Type cell (`e3728`) | Properties header `ButtonAddToCart` (Type PushButton); Drag From `0 event(s)`; Drop On Events `1 event(s)` | 2 / 0 |
| 18 | Find "Save" (read-only) | Save disabled | 2 / 0 |

Recovery events (both were "Ref ... not found"; each recovered with one fresh snapshot, as the recovery rule allows):
- Step 10 snapshot of `e2311` after the Expand click: "Ref e2311 not found". Recovery: one untargeted snapshot (returned inline), then the Components tab (step 13) used a ref from it.
- Step 16 click on `e3728` after the GridItems click: "Ref e3728 not found". Recovery: one untargeted snapshot. Its output was 56.4 KB, so the tool saved it to a file instead of returning it inline (**oversized-snapshot exception, recorded**; the file was not read, per the brief). Then a targeted snapshot of the tree (`e2718`) gave the current ButtonAddToCart refs, and the click at step 17 used a ref from that targeted snapshot.

Observed values (read from snapshots; no edits):
- Event Handlers (after reopen; read from the accessibility tree):
  - FX_AddToCart: row 0 Collection Make Current `object`, disabled false; row 1 Collection New `object`, disabled false; row 2 Generate event `FX_SetNewCartEntry( POST() )`, disabled false. Same as before the close (EXP-126 and T1).
  - FX_SetNewCartEntry: row 0 Set Values, disabled false, `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`. Same as before the close.
  - Group names present, collapsed or not expanded in T3: FX_CartBtn, FX_HomeBtn, FX_SignInBtn, FX_SignInBtn2, StdFormPredisplay. Their rows were not expanded in T3 (not required); the group names are present.
- ButtonCheckout: Primary `StdFormSave` (Properties); the Components grid's "Event to generate" column shows `StdFormSave` for ButtonCheckout. Drag From 0 event(s); Drop On 0 event(s).
- GridItems: Drag From Events `1 event(s)`.
- ButtonAddToCart: Drop On Events `1 event(s)`.
- Save: disabled after the reopen and after all reads (find readbacks at steps 8 and 18).

Screenshots (what each shows and does not prove):
- `evidence/EXP-127/t3-01-reopened-designer.png`: reopened FX_CustomerPortal; Form Properties; Details collapsed; Save greyed; `ScopeType: User`. Proves the reopened Form's identity and scope and that Save is disabled. Does not show the handler or component values.
- `evidence/EXP-127/t3-02-event-handlers-after-reopen.png`: Event Handlers tab after the reopen, with the groups collapsed; `ScopeType: User`. Proves the tab and collapsed groups. The group rows are not visible in this image; they rest on the accessibility readback above.
- `evidence/EXP-127/t3-03-components-tab-check.png`: Components tab with the tree collapsed to `Pane (00)`, Save greyed. An intermediate state; not decisive.
- `evidence/EXP-127/t3-04-buttoncheckout-events-group.png`: **decisive for AC-2 read-back**. Properties header `ButtonCheckout (Button)`, Caption `FX_sCheckout`; Events group: Primary `StdFormSave`, Data Change/Lose Focus/Gain Focus blank, Drag From Events `0 event(s)`, Drop On Events `0 event(s)`; the Components row ButtonCheckout selected with `Event to generate` = `StdFormSave`; `ScopeType: User`. Proves the value read after one close and reopen in this session. Does not prove persistence beyond this session or database-level durability.

Acceptance checks (T3):
- **AC-2: met (observed, same session).** ButtonCheckout Primary = `StdFormSave` chosen from the list (T2), one Designer Save (T2), and read back after one ordinary Designer close and reopen (T3). Evidence: `t2-01` (list), `t2-02` (Events before Save), `t2-03` (Save response), `t3-04` (Events after reopen).
- AC-1 (T3 items): FX_CustomerPortal reopened, User scope, Save disabled; handlers FX_AddToCart and FX_SetNewCartEntry unchanged; GridItems Drag From 1 event(s); ButtonAddToCart Drop On 1 event(s); console baseline 2/0 at every point.
- AC-5 so far: no Designer Save in T3; no handler, variable, binding or global change; no unload, no Delete Form Definition, no Select Form OK. The Designer's view state (Details expanded, Event Handlers groups expanded, Components tree expanded) is a view change only.
- AC-3, AC-4: not yet run.

Save prompt: none appeared at the close (step 3). Recorded per the brief: no text to record, and no answer was given.

Account name: the Form properties show a version label containing the signed-in account name; the name is not copied into this record.

Action audit, T3 only (exact counts; total 55 tool calls):
- Tab lists: 1. Tab selections: 1 (tab 0; succeeded).
- Finds: 17 (Regenerate Form, Close (no match), FX_CustomerPortal ×2, Form, Save ×2, Event Handlers ×2 (one no match), Components, Details, SETPROPVALUES (no match), FX_AddToCart, Expand, ButtonCheckout (no match), Drag From Events, ButtonAddToCart).
- Snapshots: 19 (targeted 17; untargeted 2: one inline, one saved to file as oversized). "Ref not found" errors: 2 (on `e2311`, `e3728`).
- Clicks: 13 attempts; 12 successful and 1 failed (the `e3728` "Ref not found"). Successful clicks: Form-tab close 1; Form menu 1; recent-forms entry 1; Expand Panel 1; Event Handlers tab 1; FX_AddToCart double-click 1; FX_SetNewCartEntry double-click 1; Components tab 1; Components Expand 1; ButtonCheckout Type cell 1; GridItems Type cell 1; ButtonAddToCart Type cell 1.
- Screenshots: 4 (`t3-01` to `t3-04`).
- Designer Saves: 0. Closes: 1 (FX_CustomerPortal Form tab). Reopens: 1 (recent-forms entry). Lists opened: 0. Ellipsis opened: 0. Dialogs: 0. Save prompts: 0. Keys pressed: 0. Typed text: 0. Drags: 0. Runtime clicks: 0. Unload, refresh, navigation: 0. Coordinate clicks: 0.

Cumulative browser action audit, T1 to T3 (exact counts; 101 tool calls):
- Tab lists: 3. Tab selections: 4 (T1 2, T2 1, T3 1).
- Finds: 27 (T1 5, T2 5, T3 17).
- Snapshots: 33 (T1 9, T2 5, T3 19). Untargeted: 4 (T1 2: one saved to file, one inline; T3 2: one inline, one saved to file).
- Clicks: 22 successful (T1 5, T2 5, T3 12) plus 1 failed (T3 `e3728`, "Ref not found"). Total click attempts: 23. (The T3 `e2311` error was a snapshot, not a click, so it is counted under snapshots.)
- Screenshots: 11 (T1 4, T2 3, T3 4).
- Designer Saves: 1 (T2). Closes: 1 (T3). Reopens: 1 (T3). Lists opened: 1 (T2, ButtonCheckout Primary). Ellipsis: 0. Dialogs: 0. Drags: 0. Keys: 0. Typing: 0. Runtime clicks: 0. Unload, refresh, navigation: 0. Coordinate clicks: 0.
- "Ref not found" errors, cumulative: 4 (T1 2, T3 2).

Worker-written file inventory, T3 (in addition to T1 and T2):
- Edited: `experiments/EXP-127-hello-world-part-8-phase-8-checkout-runtime-cart-walkthrough.md` (status line; T2 "next step" note; this T3 section).
- Created (screenshot tool, at the worker's request): `evidence/EXP-127/t3-01-reopened-designer.png`, `evidence/EXP-127/t3-02-event-handlers-after-reopen.png`, `evidence/EXP-127/t3-03-components-tab-check.png`, `evidence/EXP-127/t3-04-buttoncheckout-events-group.png`.
- Tool-written only: snapshot and console logs under `evidence/playwright/`, and the oversized snapshot saved to the tool's result file (not read; not a worker-written file).

Cleanup inventory after T3 (for later removal): **ButtonCheckout Primary = `StdFormSave`** on FX_CustomerPortal (User scope). No FX_Orders row was created in T1 to T3. No other change.

Final state after T3:
- Designer tab (tab 0) selected; FX_CustomerPortal open, reopened, clean (Save disabled); User scope; ButtonAddToCart selected in Components; Details panel and tree expanded (view state only); no dialog, list, menu, editor or unsaved change open.
- Web Client tab (tab 1) not touched in T3; no runtime Form opened.

Next step as written at the end of T3 (T4 has since been performed; see T4 below): T4, runtime open and sign-in.

## T4: runtime open and sign-in (FX001, ButtonSignIn2)

Result: **done (observed).** FX_CustomerPortal opened in the Web Client through the Form menu's recent-forms entry. Customer ID `FX001` was typed key by key into EditCustID and ButtonSignIn2 (the sign-in page's Sign In button) was clicked once. The home page shows three FX_Items tiles, the header reads FX001, the Count edit reads 1, and the left-menu buttons are enabled. No prompt appeared. No drag, Cart, Checkout, FX_Orders or Designer action was performed in T4.

Start of task:
- Sources: AGENTS.md re-read at the start of the task; this record (the T3 section and the T4 instruction) only.
- Tabs listed first (read-only): tab 0 = Designer (FX_CustomerPortal, `MGForm=FX_CustomerPortal`); tab 1 = Web Client (portal page "Mongoose"). Tab 1 selected (succeeded).
- Web Client baseline console: **2 errors, 2 warnings** (matches T1). Designer tab was not selected in T4; its last recorded baseline is 2 errors, 0 warnings (T3).
- Pre-state (Web Client, read-only): no runtime Form open (main region empty); no session-expiry card, "Logout Successful" text, sign-in page or unsaved change. Save and the other Form toolbar buttons disabled.

Steps (Web Client tab; console count printed by the tool after each action):

| # | Action | Result | Console (errors / warnings) |
|---|---|---|---|
| 1 | Untargeted snapshot (state read) | empty main region; Explorer; no runtime Form | 2 / 2 |
| 2 | Click the Web Client `Form` menu button (`f1e10`) | menu opened; entries include `FX_CustomerPortal` (recent) | 2 / 2 |
| 3 | Untargeted snapshot (menu read) | recent entry `FX_CustomerPortal` (`f1e108`) present; FX_Orders, FX_Items, FX_OrdersChart and others listed | 2 / 2 |
| 4 | Click the recent entry `FX_CustomerPortal` (`f1e108`) once | Form opened; portal URL now carries `favoriteContext=FX_CustomerPortal` (set by the portal on the open, not typed by the worker) | 2 / 2 |
| 5 | Untargeted snapshot (opened Form) | tab `FX_CustomerPortal` selected; sign-in page; Customer ID empty; left menu Sign In, Home, Cart disabled | 2 / 2 |
| 6 | Screenshot `t4-01` (before sign-in) | see evidence below | n/a |
| 7 | Click the Customer ID edit box (`f1e169`, EditCustID) once | focus in the box; no other change | 2 / 2 |
| 8 | Type `FX001` into it, key by key (slowly) | box reads `FX001` | 2 / 2 |
| 9 | Untargeted snapshot (verify typed value and refs) | textbox `FX001`; sign-in button `f1e171` (distinct from the disabled left-menu Sign In `f1e154`) | 2 / 2 |
| 10 | Click the sign-in page's Sign In button `f1e171` (ButtonSignIn2) once | Form shows the home page | 2 / 2 |
| 11 | Wait 3 seconds (settle; the brief allows up to 10) | — | 2 / 2 |
| 12 | Untargeted snapshot (after sign-in) | see observed values below | 2 / 2 |
| 13 | Screenshot `t4-02` (after the sign-in click) | see evidence below | n/a |

Prompts: none at the open, at the typing or at the sign-in click. No "Session Expired", sign-in or server-event message appeared.

Observed values after the sign-in click (Web Client, FX_CustomerPortal runtime):
- Visible region: the home page (heading `Home`); the sign-in page is no longer shown.
- Status bar: `Sign In (Object 1 of 3)` (the status bar text field, and the bottom-left status line in `t4-02`).
- Console: 2 errors, 2 warnings (unchanged from the Web Client baseline).
- GridItems tiles: **3**. Item text of each, in order (top to bottom):
  1. `dumbbell` / `45 pound iron` / `45.00` (the first visible tile; drawn with a pale-blue current-row background in `t4-02`);
  2. `eggs` / `cage free` / `6.99`;
  3. `guitar` / `natural acoustic` / `129.99`.
  The tile pictures are not described beyond the item text (EXP-118 identified them visually; not re-checked here).
- Count edit value: `1` (expected 1).
- Header Customer ID display: `FX001` (top right of the header in `t4-02`; expected FX001).
- Menu state: left-menu buttons `Sign In`, `Home`, `Cart` **enabled** (they were disabled before the sign-in in step 5).
- Save (runtime Form toolbar): disabled (no unsaved change).

Screenshots (what each shows and does not prove):
- `evidence/EXP-127/t4-01-form-open-before-signin.png`: FX_CustomerPortal title; sign-in page ("Sign In" heading, cat picture, Customer ID box empty, Sign In button); left-menu Sign In, Home and Cart drawn pale (disabled); status bar shows only `en-US`; `ScopeType` not shown in the Web Client (the status line is the Web Client's own). Proves the opened Form and the disabled-menu state before the sign-in. Does not prove the Customer ID value (empty) beyond the image; the box is empty in the image.
- `evidence/EXP-127/t4-02-after-signin-click.png`: **decisive for AC-3 (sign-in part)**. Header FX001 at the top right; home page with three tiles (dumbbell 45 pound iron 45.00; eggs cage free 6.99; guitar natural acoustic 129.99); Count edit `1`; Add To Cart button; left-menu Sign In, Home and Cart enabled; status bar `Sign In (Object 1 of 3)`. Proves the tiles are shown after FX001 sign-in in this session. Does not prove authentication (the sign-in is a UI demonstration only, per the tutorial's instructions, AGENTS.md item 4), and does not prove any data beyond these three records.

Acceptance checks (T4):
- **AC-3 (sign-in part): met (observed).** Sign-in with FX001 shows the tiles (three, listed above); evidence `t4-02`. The drag effect, the cart rows and the Checkout result (T5 and T6) are not yet run.
- AC-1 (T4 items): the Web Client runtime Form opened with no dirty state (Save disabled before and after the sign-in); console baseline 2/2 recorded; no Designer change in T4.
- AC-5 so far: no drag; the runtime typing was FX001 only; the runtime clicks were ButtonSignIn2 (once) and the Web Client menu/recent-entry clicks (not runtime buttons); no runtime save; no unload; no Designer action.

Qualifications (observed, not asserted):
- The Form was opened through the recent-forms entry, so no Select Form dialog was used.
- The status bar text is in the Web Client's own status field, which the brief asked to read; the account name shown in the Web Client header is not copied into this record.
- The portal changed its URL to include `favoriteContext=FX_CustomerPortal` when the Form opened. This is the portal's own URL update from the menu action; the worker typed no URL and navigated nowhere.

Action audit, T4 only (exact counts; 15 browser tool calls):
- Tab lists: 1. Tab selections: 1 (tab 1, succeeded).
- Snapshots: 5 (all untargeted, all returned inline; 0 targeted; 0 "Ref not found" errors).
- Clicks: 4, all successful: Web Client Form menu 1; recent entry FX_CustomerPortal 1; Customer ID edit box 1; sign-in page Sign In (ButtonSignIn2) 1.
- Typing: 1 action (`FX001`, key by key; 5 keys). Waits: 1 (3 seconds).
- Screenshots: 2 (`t4-01`, `t4-02`).
- Finds: 0. Designer Saves: 0. Closes: 0. Reopens: 0 (of the Designer Form). Lists opened: 0. Dialogs: 0. Ellipsis: 0. Drags: 0. Runtime button clicks: 1 (ButtonSignIn2). Other runtime key presses: 0. Unload, refresh, direct navigation: 0. Coordinate clicks: 0.

Cumulative browser action audit, T1 to T4 (exact counts; 116 tool calls):
- Tab lists: 4. Tab selections: 5 (T1 2, T2 1, T3 1, T4 1).
- Finds: 27 (T1 5, T2 5, T3 17, T4 0).
- Snapshots: 38 (T1 9, T2 5, T3 19, T4 5). Untargeted: 9 (T1 2, T3 2, T4 5; of which 2 were saved to files by the tool as oversized and not read). Targeted: 29.
- Clicks: 26 successful (T1 5, T2 5, T3 12, T4 4) plus 1 failed (T3 `e3728`, "Ref not found"); total click attempts 27.
- Typing actions: 1 (T4; text `FX001`). Waits: 1 (T4).
- Screenshots: 13 (T1 4, T2 3, T3 4, T4 2).
- Designer Saves: 1 (T2). Designer closes: 1 (T3). Designer reopens: 1 (T3). Lists opened: 1 (T2, ButtonCheckout Primary). Ellipsis: 0. Dialogs: 0. Save prompts: 0. Drags: 0. Keys pressed: 0. Runtime button clicks: 1 (ButtonSignIn2). Unload, refresh, direct navigation: 0. Coordinate clicks: 0.
- "Ref not found" errors, cumulative: 4 (T1 2, T3 2).

Worker-written file inventory, T4 (in addition to T1 to T3):
- Edited: `experiments/EXP-127-hello-world-part-8-phase-8-checkout-runtime-cart-walkthrough.md` (status line; the T3 next-step note; this T4 section).
- Created (screenshot tool, at the worker's request): `evidence/EXP-127/t4-01-form-open-before-signin.png`, `evidence/EXP-127/t4-02-after-signin-click.png`.
- Tool-written only: snapshot and console logs under `evidence/playwright/`.

Cleanup inventory after T4 (for later removal): **ButtonCheckout Primary = `StdFormSave`** on FX_CustomerPortal (User scope, from T2). The runtime sign-in changed no data; no FX_Orders row was created. No other change.

Final state after T4:
- Web Client tab (tab 1) selected; runtime FX_CustomerPortal open on the home page after the sign-in; Customer ID FX001; Count 1; no drag; no dialog, menu, list or unsaved change open in the runtime Form (Save disabled).
- Designer tab (tab 0) not touched in T4; FX_CustomerPortal open, clean (as left at the end of T3).

Next step as written at the end of T4 (performed in T5; see T5 below): **T5, drag and cart.** Exactly one browser_drag from the first visible item tile in GridItems (the `dumbbell` tile, the first in the list) to ButtonAddToCart, both by references from the latest snapshot; then wait (at most 10 seconds) and record any prompt or message, the console count, the status bar and the visible region; then click the left menu Cart button once and record the GridOrders rows. Do not click any row, edit any cell or press a key in T5.

## T5: drag one tile onto ButtonAddToCart; left-menu Cart; GridOrders read

Result: **done (observed).** One browser_drag from the first visible GridItems tile (**dumbbell / 45 pound iron / 45.00**) onto ButtonAddToCart. No prompt or message appeared. The left-menu Cart button was clicked once; the cart page shows **one GridOrders row, starred (new)**: Order Number `3`, Item `dumbbell`, Count `1`, Customer ID `FX001`. The row is not yet saved; Checkout (T6) is the only save. T6 is permitted because a new row was recorded. T6 has not been run in this task.

Start of task:
- Sources: AGENTS.md read in full at the start of the task; this record's T4 section and the T5 instruction only.
- Tabs listed first (read-only): tab 0 = Designer (FX_CustomerPortal, `MGForm=FX_CustomerPortal`); tab 1 = Web Client (portal page "Mongoose"). Tab 1 selected (succeeded).
- Pre-state (fresh untargeted snapshot, Web Client): FX_CustomerPortal open on the home page; header `FX001`; Count `1`; three tiles (dumbbell 45 pound iron 45.00; eggs cage free 6.99; guitar natural acoustic 129.99); left-menu Sign In, Home and Cart enabled; status bar `Sign In (Object 1 of 3)`; no prompt, session-expiry card, "Logout Successful" text or sign-in page. Save (Web Client toolbar) disabled.
- Web Client console baseline: **2 errors, 2 warnings** (matches T1 and T4). Designer tab not selected in T5; its last baseline was 2 errors, 0 warnings (T3).

Steps (Web Client tab; console count printed by the tool after each action):

| # | Action | Result | Console (errors / warnings) |
|---|---|---|---|
| 1 | Tab list (read-only) | tab 0 Designer, tab 1 Web Client | n/a (Designer 2/0; Web Client 2/2 at list) |
| 2 | Tab select index 1 (Web Client) | selected | 2 / 2 |
| 3 | Untargeted snapshot (gate) | state as in the pre-state above | 2 / 2 |
| 4 | **browser_drag** from `f1e104` (GridItems first tile, dumbbell) to `f1e156` (ButtonAddToCart, "Add To Cart") — the one and only drag of the experiment | returned without error | 2 / 2 |
| 5 | Wait 3 seconds (settle; brief allows up to 10) | — | 2 / 2 |
| 6 | Untargeted snapshot (after drag) | home page unchanged; header FX001; Count 1; three tiles; status bar changed from `Sign In (Object 1 of 3)` to `Sign In (Object 1 of 1)`; no message text | 2 / 2 |
| 7 | Screenshot `t5-01` (after drag) | see evidence | n/a |
| 8 | Click the left-menu **Cart** button `f1e100` once (from the post-drag snapshot; not ButtonAddToCart) | cart page shown; Cart button drawn active | 2 / 2 |
| 9 | Wait 3 seconds | — | 2 / 2 |
| 10 | Untargeted snapshot (cart) | GridOrders: one data row, Order Number `3`, Item `dumbbell`, Count `1`, Customer ID `FX001`; status `Cart (Object 1 of 1)` | 2 / 2 |
| 11 | Screenshot `t5-02` (cart page) | see evidence | n/a |

Which tile was dragged: the first tile in GridItems, `dumbbell` (45 pound iron, 45.00). The drag start was the tile's text element (`dumbbell 45 pound iron 45.00`, as the tool reported; the target was the ButtonAddToCart button `Add To Cart`). The drag was not repeated.

Prompts and messages: none. No "server event processing" error, no session-expiry or sign-in page, and no toast or dialog appeared after the drag or after the Cart click.

Visible effect of the drag (observed): the home page did not change except for the status bar text (`Object 1 of 3` to `Object 1 of 1`). The Add To Cart button was drawn dark blue in the post-drag screenshot, probably a hover or focus state of the pointer. No count, tile or header value changed. The drag did not visibly navigate; the cart row appeared only after the Cart click.

Cart page (observed after the Cart click; snapshot and `t5-02`):
- Visible region: the Cart page (heading `Cart:`); the GridOrders grid with columns Order Number, Item, Count, Customer ID; Checkout button present; the home tiles are no longer shown.
- GridOrders rows: **one data row**:

  | Mark | Order Number | Item | Count | Customer ID |
  |---|---|---|---|---|
  | starred (blue star in the row indicator; row 1, current-row arrow) | 3 | dumbbell | 1 | FX001 |

- Row marking: the row is **starred** (blue star beside the row number `1` in `t5-02`). Per EXP-073, a starred row is a new, not-yet-saved row. The screenshot does not show a status-bar mode; the status bar reads `Cart (Object 1 of 1)`.
- Order Number `3`: the Order Number is the FX_Orders AUTONUMBER placeholder (EXP-073 found the next number after two saved rows is 3). Whether 3 becomes the saved key depends on the T6 Checkout; it is not a saved key yet (the row is starred).
- Status bar: `Cart (Object 1 of 1)`.
- No row was clicked, no cell was edited and no key was pressed in T5.

Screenshots (what each shows and does not prove):
- `evidence/EXP-127/t5-01-after-drag.png`: the home page after the drag; header FX001; three tiles unchanged; Count 1; Add To Cart drawn dark blue; status bar `Sign In (Object 1 of 1)`; no message. Proves that the drag left no visible message or navigation. Does not prove that a cart row was created (the row appears only on the cart page).
- `evidence/EXP-127/t5-02-cart-page.png`: **decisive for AC-3 (cart rows)**. Cart page (`Cart:` heading); one row with a blue star, Order Number 3, dumbbell, Count 1, Customer ID FX001; Cart button active; Checkout button visible; status bar `Cart (Object 1 of 1)`. Proves the single starred cart row and its values on the cart page in this session. Does not prove that the row is saved to the database (the star marks it new; only Checkout in T6 saves).

Acceptance checks (T5):
- **AC-3 (drag and cart part): met (observed).** The single drag's effect: one starred GridOrders row (Order Number 3, dumbbell, Count 1, FX001) on the cart page; evidence `t5-02`. The Checkout result (T6) is not yet run.
- AC-1 (T5 items): Web Client baseline 2/2 recorded at every action; no Designer change in T5.
- AC-5 so far: exactly one drag (the only one in the experiment); runtime clicks in T5: the left-menu Cart button once (not ButtonAddToCart); no key, typing, grid edit or row click; no runtime save (Save disabled throughout); no unload; no Designer action.

Qualifications (observed, not asserted):
- The row is starred, so it is not saved. Whether the Checkout saves it is the T6 question.
- The Order Number 3 is read from the grid. Its origin (client placeholder or server) is unresolved, as EXP-073 also left it.
- The drag start element was the tile's text element; the brief asked for "the first visible item tile", which this is.

Action audit, T5 only (exact counts; 11 browser tool calls):
- Tab lists: 1. Tab selections: 1 (tab 1, succeeded).
- Snapshots: 3 (all untargeted, all returned inline; 0 targeted; 0 "Ref not found").
- Drags: **1** (browser_drag, dumbbell tile to ButtonAddToCart).
- Clicks: 1 (left-menu Cart, `f1e100`; successful).
- Waits: 2 (3 seconds each).
- Screenshots: 2 (`t5-01`, `t5-02`).
- Typing: 0. Keys: 0. Row clicks: 0. Cell edits: 0. Checkout clicks: 0. Designer Saves: 0. Designer closes/reopens: 0. Dialogs: 0. Lists opened: 0. Ellipsis: 0. Unload, refresh, direct navigation: 0. Coordinate drags or mouse-down/up: 0.

Cumulative browser action audit, T1 to T5 (exact counts; 127 tool calls):
- Tab lists: 5. Tab selections: 6 (T1 2, T2 1, T3 1, T4 1, T5 1).
- Finds: 27 (T1 5, T2 5, T3 17, T4 0, T5 0).
- Snapshots: 41 (T1 9, T2 5, T3 19, T4 5, T5 3). Untargeted: 12 (of which 2 saved to files by the tool as oversized and not read, both in T1/T3; the rest inline). Targeted: 29.
- Drags: **1** (T5; the only drag of the experiment).
- Clicks: 27 successful (T1 5, T2 5, T3 12, T4 4, T5 1) plus 1 failed (T3 `e3728`, "Ref not found"); total click attempts 28.
- Typing actions: 1 (T4, `FX001`). Waits: 3 (T4 1, T5 2).
- Screenshots: 15 (T1 4, T2 3, T3 4, T4 2, T5 2).
- Designer Saves: 1 (T2). Designer closes: 1 (T3). Designer reopens: 1 (T3). Lists opened: 1 (T2, ButtonCheckout Primary). Ellipsis: 0. Dialogs: 0. Save prompts: 0. Keys pressed: 0. Runtime button clicks: 2 (ButtonSignIn2 once in T4; left-menu Cart once in T5). Checkout clicks: 0. Unload, refresh, direct navigation: 0. Coordinate clicks: 0.
- "Ref not found" errors, cumulative: 4 (T1 2, T3 2).

Worker-written file inventory, T5 (in addition to T1 to T4):
- Edited: `experiments/EXP-127-hello-world-part-8-phase-8-checkout-runtime-cart-walkthrough.md` (status line; the T4 next-step note; this T5 section).
- Created (screenshot tool, at the worker's request): `evidence/EXP-127/t5-01-after-drag.png`, `evidence/EXP-127/t5-02-cart-page.png`.
- Tool-written only: snapshot and console logs under `evidence/playwright/`.

Cleanup inventory after T5 (for later removal):
- **ButtonCheckout Primary = `StdFormSave`** on FX_CustomerPortal (User scope; from T2).
- **One starred (unsaved) GridOrders cart row** in the runtime Form: Order Number 3, dumbbell, Count 1, Customer ID FX001. It is not yet in the database; if T6 Checkout saves it, it becomes an FX_Orders row keyed by Order Number 3. If T6 is not performed, the row is discarded at the T7 close (the brief's rule: an unsaved cart row is discarded on a No answer).

Final state after T5:
- Web Client tab (tab 1) selected; runtime FX_CustomerPortal on the cart page (`Cart:`), header FX001, one starred row, Cart button active, status `Cart (Object 1 of 1)`; no dialog, menu, list or editor open; no Checkout click.
- Designer tab (tab 0) not touched in T5; FX_CustomerPortal open and clean (as left at the end of T3).

T6 permission: **permitted.** T5 recorded a new (starred) GridOrders row. T6 may click Checkout exactly once, in the cart page's `Checkout` button, from a fresh snapshot. T5 does not perform T6.

## T6: Checkout (one click on the cart page)

Result: **done (observed).** Checkout (`ButtonCheckout`, runtime cart page) was clicked **once**. No prompt, error or message appeared. After a 3-second settle, the status bar reads `Checkout (Object 1 of 1)` (it read `Cart (Object 1 of 1)` before). The GridOrders row is still listed as Order Number **3**, Item **dumbbell**, Count **1**, Customer ID **FX001**, and its **new-row star is gone** (visible in `t6-02`; the row marker shows `1` and the current-row arrow only). Whether the row was saved to FX_Orders is **not established by T6**; T7 reads FX_Orders through the FX_Orders Form.

Start of task:
- Sources: AGENTS.md read in full at the start of the task; this record's T5 section and the T6 instruction only.
- Tabs listed first (read-only): tab 0 = Designer (FX_CustomerPortal); tab 1 = Web Client (portal page "Mongoose"). Tab 1 selected (succeeded).
- Web Client baseline console: **2 errors, 2 warnings** (matches T1, T4, T5). Designer not selected in T6; its last baseline was 2 errors, 0 warnings (T3).
- Pre-check (fresh untargeted snapshot + `t6-01`): Cart page; header `FX001`; GridOrders one row: Order Number `3`, Item `dumbbell`, Count `1`, Customer ID `FX001`, **starred** (blue star beside the row marker in `t6-01`); Checkout button present (`f1e155`, the cart page's own button, distinct from the toolbar); status bar `Cart (Object 1 of 1)`; no prompt; Save disabled. All stop conditions absent, so the single click was permitted.

Steps (Web Client tab; console count printed by the tool after each action):

| # | Action | Result | Console (errors / warnings) |
|---|---|---|---|
| 1 | Tab list (read-only) | tab 0 Designer, tab 1 Web Client | n/a |
| 2 | Tab select index 1 (Web Client) | selected | 2 / 2 |
| 3 | Untargeted snapshot (pre-check) | row 3 / dumbbell / 1 / FX001; Checkout `f1e155`; status `Cart (Object 1 of 1)` | 2 / 2 |
| 4 | Screenshot `t6-01` (pre-Checkout; star visible) | starred row present | 2 / 2 |
| 5 | **Click Checkout `f1e155` — once** (from the snapshot in step 3) | returned without error | 2 / 2 |
| 6 | Wait 3 seconds (settle; the brief allows up to 10) | — | 2 / 2 |
| 7 | Untargeted snapshot (post-Checkout) | status `Checkout (Object 1 of 1)`; row 3 / dumbbell / 1 / FX001 still listed; no message or prompt text in the tree | 2 / 2 |
| 8 | Screenshot `t6-02` (cart page after Checkout) | star cleared on the row | 2 / 2 |

Checkout clicks: exactly **1**. It was not repeated.

Prompts, errors, messages: **none** observed (no dialog, no "server event processing" error, no validation text, no toast in the accessibility tree or in the screenshot). No OK, No or Cancel was needed.

Post-Checkout observations (observed):
- Status bar: `Checkout (Object 1 of 1)`.
- GridOrders rows: **one**, Order Number `3`, Item `dumbbell`, Count `1`, Customer ID `FX001`. The star is gone (the row is no longer marked new). Order Number 3 is unchanged from the cart page.
- Visible region: the cart page (`Cart:` heading), Checkout button drawn dark blue (hover or focus state after the click). Home tiles not shown.
- Console: 2 errors, 2 warnings (unchanged).

Interpretation (kept to what was observed):
- A vanished star plus an unchanged Order Number and no message is what the tutorial's Checkout looks like when the save runs; it is **not** by itself proof of database persistence (the brief says so explicitly). The separate FX_Orders readback in T7 is the check for the saved row.
- The row was not edited, clicked or re-keyed in T6.

Screenshots (what each shows and does not prove):
- `evidence/EXP-127/t6-01-cart-before-checkout.png`: the cart page before Checkout; header FX001; GridOrders row 1 with the blue star, Order Number 3, dumbbell, Count 1, FX001; Checkout button; status `Cart (Object 1 of 1)`. Proves the starred row before the click. Does not prove the save.
- `evidence/EXP-127/t6-02-cart-after-checkout.png`: the cart page after Checkout; the row marker now shows `1` with no star; the row values unchanged (3, dumbbell, 1, FX001); Checkout drawn dark blue; status `Checkout (Object 1 of 1)`; no message. **Decisive for AC-3 (Checkout observed).** Proves the star cleared and no message appeared. Does not prove persistence, which T7 must establish.

Acceptance checks (T6):
- **AC-3 (Checkout part): observed.** The single Checkout click produced no prompt or message; the new-row star cleared; the row stayed visible with its values; evidence `t6-01` and `t6-02`. Whether the save reached the database is for T7 (FX_Orders readback).
- AC-1 (T6 items): Web Client baseline 2/2 recorded at every action; Designer not touched.
- AC-5 so far: one Checkout click (the only runtime save); no second Checkout; no drag; no typing; no key; no row click; no cell edit; no Designer action.

Qualifications:
- The star disappearance is an observed UI state change, not a database confirmation (same-session UI only).
- Order Number 3 is the value shown before and after; whether it is the server-issued key is unresolved and is for T7 to test against FX_Orders.
- The Checkout wait was 3 seconds, within the 10-second maximum.

Action audit, T6 only (exact counts; 8 browser tool calls):
- Tab lists: 1. Tab selections: 1 (tab 1; succeeded).
- Snapshots: 2 (both untargeted; inline; 0 targeted; 0 "Ref not found").
- Clicks: **1** (Checkout `f1e155`, successful).
- Waits: 1 (3 seconds).
- Screenshots: 2 (`t6-01`, `t6-02`).
- Checkout clicks: 1. Designer Saves: 0. Drags: 0. Typing: 0. Keys: 0. Row clicks: 0. Cell edits: 0. Dialogs: 0. Lists: 0. Ellipsis: 0. Designer closes/reopens: 0. Unload, refresh, direct navigation: 0. Coordinate clicks: 0.
- Non-browser calls in T6: 2 reads (AGENTS.md; a grep of the record headings) and 0 writes so far.

Cumulative browser action audit, T1 to T6 (exact counts; 135 browser tool calls):
- Tab lists: 6. Tab selections: 7 (T1 2, T2 1, T3 1, T4 1, T5 1, T6 1).
- Finds: 27 (T1 5, T2 5, T3 17, T4 0, T5 0, T6 0).
- Snapshots: 43 (T1 9, T2 5, T3 19, T4 5, T5 3, T6 2). Untargeted: 14 (T1 2, T3 2, T4 5, T5 3, T6 2; of which 2 were saved to files by the tool as oversized and not read, both in T1 and T3). Targeted: 29 (T1 7, T2 5, T3 17 (incl. the failed `e2311`), T4 0, T5 0, T6 0).
- Drags: **1** (T5; the only drag).
- Clicks: **28 successful** (T1 5, T2 5, T3 12, T4 4, T5 1, T6 1) plus **1 failed** (T3 `e3728`, "Ref not found"); total click attempts 29.
- Typing actions: 1 (T4, `FX001`). Waits: 4 (T4 1, T5 2, T6 1).
- Screenshots: 17 (T1 4, T2 3, T3 4, T4 2, T5 2, T6 2).
- Designer Saves: 1 (T2). Designer closes: 1 (T3). Designer reopens: 1 (T3). Lists opened: 1 (T2, ButtonCheckout Primary). Ellipsis: 0. Dialogs: 0. Save prompts: 0. Keys pressed: 0. Runtime button clicks: 3 (ButtonSignIn2 in T4; left-menu Cart in T5; Checkout in T6). Checkout clicks: 1. Unload, refresh, direct navigation: 0. Coordinate clicks: 0.
- "Ref not found" errors, cumulative: 4 (T1 2, T3 2).

Worker-written file inventory, T6 (in addition to T1 to T5):
- Edited: `experiments/EXP-127-hello-world-part-8-phase-8-checkout-runtime-cart-walkthrough.md` (status line; this T6 section; the T6 cleanup note in the T7 step below, if any).
- Created (screenshot tool, at the worker's request): `evidence/EXP-127/t6-01-cart-before-checkout.png`, `evidence/EXP-127/t6-02-cart-after-checkout.png`.
- Tool-written only: snapshot and console logs under `evidence/playwright/`.

Cleanup inventory after T6 (for later removal):
- **ButtonCheckout Primary = `StdFormSave`** on FX_CustomerPortal (User scope; from T2).
- **One cart row, Order Number 3** (dumbbell, Count 1, Customer ID FX001), created by the single T5 drag and submitted by the single T6 Checkout click. Whether it is persisted in FX_Orders is **unverified until T7**. If T7 finds it, the FX_Orders row is 3 / FX001 / dumbbell / 1 and must be listed for cleanup (the EXP-073 rows 1 and 2 remain as they were).

Final state after T6:
- Web Client tab (tab 1) selected; runtime FX_CustomerPortal on the cart page; status `Checkout (Object 1 of 1)`; row 3 / dumbbell / 1 / FX001 without the star; no dialog, menu, list, editor or unsaved change visible; no further click.
- Designer tab (tab 0) not touched in T6; FX_CustomerPortal open and clean (as left at the end of T3).

T7 permission: **the next step.** T7 closes the runtime FX_CustomerPortal (answer No to any save prompt, recording it), opens FX_Orders through the Form menu recent-forms entry (the T4 route), runs one blank Filter in Place query (F4), reads the rows and the status bar, and closes FX_Orders. T6 does not perform T7.

## T7: runtime close, FX_Orders blank query readback, closes, and final audit

Result: **done (observed, same browser session).** The runtime FX_CustomerPortal was closed through its Form-close control (no save prompt appeared). FX_Orders was opened through the Form menu recent-forms entry. One Filter in Place click (criteria verified blank), then one F4, returned **three FX_Orders rows**. The row **Order Number 3 / FX001 / dumbbell / Count 1** (the T5 drag and T6 Checkout row) **is present**, and rows **1 and 2 remain as EXP-073 recorded them**. No other rows appeared. FX_Orders was then closed through its Form-close control (no save prompt appeared), and the Web Client was left with no Form open.

Start of task:
- Sources: AGENTS.md read in full at the start of the task (per the T7 instruction); this record's T6 section and the T7 instruction only.
- Tabs listed first (read-only): tab 0 = Designer (FX_CustomerPortal); tab 1 = Web Client. Tab 1 selected (succeeded).
- Web Client baseline console: **2 errors, 2 warnings** (matches T1, T4, T5, T6).
- Pre-state (fresh untargeted snapshot): runtime FX_CustomerPortal on the Cart page; header FX001; GridOrders one row (3 / dumbbell / 1 / FX001) with no star; status `Checkout (Object 1 of 1)`; Save disabled; no prompt, session-expiry card or sign-in page. As the brief expected.

Steps (Web Client tab; console count printed by the tool after each action):

| # | Action | Result | Console (errors / warnings) |
|---|---|---|---|
| 1 | Tab list (read-only); tab select index 1 | Web Client selected | 2 / 2 |
| 2 | Untargeted snapshot (pre-state) | as above | 2 / 2 |
| 3 | Click the runtime FX_CustomerPortal Form-close control, `Close Panel FX_CustomerPortal` (`f1e85`), **once** | returned; no save prompt in the output | 2 / 2 |
| 4 | Untargeted snapshot (verify close) | main region empty; no Form tab; no prompt text | 2 / 2 |
| 5 | Click the Web Client `Form` menu button (`f1e10`) | menu opened; recent entries include `FX_Orders` (`f1e210`) | 2 / 2 |
| 6 | Untargeted snapshot (menu) | `FX_Orders` recent entry present | 2 / 2 |
| 7 | Click the recent-forms entry `FX_Orders` (`f1e210`), **once** | Form opened; URL carries `favoriteContext=FX_Orders` | 2 / 2 |
| 8 | Untargeted snapshot (FX_Orders initial state) | see below | 2 / 2 |
| 9 | Screenshot not taken at this step (initial state read from the snapshot) | — | — |
| 10 | Click **Filter in Place** (`f1e221`), **once** | Filter in Place mode; criteria fields visible | 2 / 2 |
| 11 | Untargeted snapshot (criteria verification) | every criteria field blank (see below); status `Filter in Place` | 2 / 2 |
| 12 | Press **F4** once (no typing into any criteria field) | — | (no count printed by the key tool; read in step 14) |
| 13 | Wait 3 seconds | — | — |
| 14 | Untargeted snapshot (results) | three rows; status `Customer ID (Object 1 of 3)`; console **2 / 2** | 2 / 2 |
| 15 | Screenshot `t7-01` (FX_Orders after the blank query) | see below | 2 / 2 |
| 16 | Click the FX_Orders Form-close control, `Close Panel FX_Orders` (`f1e228`), **once** | returned; no save prompt in the output | 2 / 2 |
| 17 | Untargeted snapshot (verify both Forms closed) | Web Client main region empty; no Form tab; Save disabled; no prompt | 2 / 2 |
| 18 | Screenshot `t7-02` (Web Client after both closes) | see below | 2 / 2 |

FX_Orders initial state (step 8, before the query; Add mode): one placeholder row with Order Number `4`, Customer ID blank, Item blank, Count `1`, Cost `0.00`, Order Total `0.00`; status `Order Number (Object 1 of 1)`; Save disabled. The placeholder is not a saved row. Observed: the autonumber placeholder showed **4** before the query, which would be consistent with a saved maximum of 3, but this is an inference from one display value and is not claimed as proof.

Criteria verification (step 11): all criteria fields were blank before F4 — Order Number, Customer ID (combobox), Customer Name, Address, Item (combobox), Item Description, Cost, Count and Order Total. Nothing was typed.

Prompts: **none** at either close and none at the open. No save prompt appeared, so there was no text to record and no No answer was needed. No discard of unsaved data was observed at the runtime close (the cart row had already been saved by Checkout, per the readback below).

FX_Orders rows after the blank query (step 14; accessibility readback of the grid rows; status `Customer ID (Object 1 of 3)`):

| Order Number | Customer ID | Customer Name | Item | Item Description | Cost | Count | Order Total |
|---|---|---|---|---|---|---|---|
| 1 | FX001 | Factory test one | dumbbell | 45 pound iron | 45.00 | 2 | 90.00 |
| 2 | FX002 | Factory test two | eggs | cage free | 6.99 | 1 | 6.99 |
| 3 | FX001 | Factory test one | dumbbell | 45 pound iron | 45.00 | 1 | 45.00 |

- Rows 1 and 2 match EXP-073's rows (1 FX001 dumbbell 2; 2 FX002 eggs 1) exactly, including the customer names and item descriptions shown in the grid.
- Row 3 matches the T5 cart row and the T6 Checkout row: Order Number 3, FX001, dumbbell, Count 1. Customer Name, Address, Item Description, Cost (45.00) and Order Total (45.00) were filled by FX_Orders' own fields, not by the cart page (the cart page showed only Order Number, Item, Count and Customer ID). Cost and Order Total are therefore values FX_Orders derived or looked up, not values the cart displayed.
- No other rows appeared.
- Detail panel (current record = row 1): Order Number 1; Customer ID FX001; Item dumbbell; Count 2; Cost 45.00; Order Total 90.00; the Customer ID combobox held focus with its text selected (see the qualification below).

Screenshots (what each shows and does not prove):
- `evidence/EXP-127/t7-01-fx-orders-after-blank-query.png`: **decisive for AC-4 (readback)**. FX_Orders title; grid row markers 1, 2 and 3 (values clipped); the detail for row 1 (Order Number 1, FX001, Factory test one, dumbbell, 45.00, Count 2, Order Total 90.00); status `Customer ID (Object 1 of 3)`; `ScopeType` not shown in the Web Client status line. Proves that the query returned three records and the status after F4. Does **not** show rows 2 and 3 in full (the grid is clipped), so their values rest on the accessibility readback above.
- `evidence/EXP-127/t7-02-web-client-after-closes.png`: the Web Client after both closes. The main region is empty and no Form is open; the Explorer panel and toolbar are shown; no dialog, menu or prompt. Proves the closed state. Does not prove anything about the rows.

Acceptance checks (T7):
- **AC-4: met (observed, same browser session).** Runtime FX_CustomerPortal closed through its Form-close control, no save prompt. FX_Orders read through one blank Filter in Place query + F4 after reopening it: three rows, including the cart row (Order Number 3 / FX001 / dumbbell / 1) and rows 1 and 2 as EXP-073 recorded them. Evidence: `t7-01` (with the accessibility readback for rows 2 and 3). Whether the save is durable beyond this session, or in an independent database check, is **not established**.
- Other acceptance items are recorded in the final audit below.

Qualifications (observed, not asserted):
- **Customer ID combobox focus during F4.** When FX_Orders opened, the Customer ID combobox held focus with its text selected. The F4 key press was sent while that focus was in place. The result shows the query ran (three rows, status `Customer ID (Object 1 of 3)`), and `t7-01` shows no open list. The worker typed nothing. The effect of F4 on the focused combobox is not separately verified; the result is what was observed.
- The FX_Orders query was run after both runtime Forms had been closed and FX_Orders reopened from the Form menu. This is a re-read within the same browser session. It is **not** a cross-session check and **not** an independent database check.
- The 3-row result and the row-3 values are the readback as the UI presented them; the UI is the only source here.

Action audit, T7 only (exact counts; 18 browser tool calls):
- Tab lists: 1. Tab selections: 1 (tab 1; succeeded).
- Snapshots: 7 (all untargeted, all returned inline; 0 targeted; 0 "Ref not found"; no oversized snapshot).
- Clicks: 5, all successful: runtime FX_CustomerPortal Form-close (`f1e85`) 1; Web Client Form menu (`f1e10`) 1; recent entry FX_Orders (`f1e210`) 1; Filter in Place (`f1e221`) 1; FX_Orders Form-close (`f1e228`) 1.
- Key presses: 1 (F4, once). Typing: 0. Waits: 1 (3 seconds). Screenshots: 2 (`t7-01`, `t7-02`). Finds: 0.
- Runtime button clicks: 3 (Filter in Place once; Form-close controls: one per Form, 2 total, counted within the 5 clicks above). Runtime key presses: 1 (F4). Runtime saves: 0 (no Checkout, no Ctrl+S, no toolbar save, no save prompt answered).
- Designer actions in T7: 0. Designer saves: 0. Unload, refresh, direct navigation: 0. Coordinate clicks: 0. Drags: 0. Row clicks: 0. Cell edits: 0. Dialogs: 0. Select Form dialog used: 0 (FX_Orders opened via recent-forms, not Select Form, so no Select Form OK was involved).

Cumulative browser action audit, T1 to T7 (exact counts; 153 browser tool calls):
- Per task totals: T1 26; T2 20; T3 55; T4 15; T5 11; T6 8; T7 18. Sum 153.
- Tab lists: 7 (T1 1, T2 1, T3 1, T4 1, T5 1, T6 1, T7 1).
- Tab selections: 8 (T1 2, T2 1, T3 1, T4 1, T5 1, T6 1, T7 1).
- Finds: 27 (T1 5, T2 5, T3 17; T4–T7 0).
- Snapshots: 50 (T1 9, T2 5, T3 19, T4 5, T5 3, T6 2, T7 7). Untargeted: 21 (T1 2, T3 2, T4 5, T5 3, T6 2, T7 7; of these, two were saved to files by the tool as oversized and not read, in T1 and T3). Targeted: 29 (T1 7, T2 5, T3 17 incl. one failed `e2311`).
- Clicks: 33 successful (T1 5, T2 5, T3 12, T4 4, T5 1, T6 1, T7 5) plus 1 failed (T3 `e3728`, "Ref not found"). Total click attempts: 34.
- Drags: **1** (T5; the only drag of the experiment).
- Typing actions: 1 (T4, `FX001`). Key presses: 1 (T7, F4).
- Waits: 5 (T4 1, T5 2, T6 1, T7 1).
- Screenshots: 19 (T1 4, T2 3, T3 4, T4 2, T5 2, T6 2, T7 2).
- Designer Saves: 1 (T2, ButtonCheckout Primary). Designer closes: 1 (T3). Designer reopens: 1 (T3). Lists opened: 1 (T2, ButtonCheckout Primary). Ellipsis: 0. Dialogs: 0. Save prompts observed: 0 (none in the whole run).
- Runtime Form opens: 2 (FX_CustomerPortal in T4; FX_Orders in T7). Runtime Form closes: 2 (T7).
- Runtime clicks, cumulative: **6** = 4 runtime buttons (ButtonSignIn2 once, T4; left-menu Cart once, T5; Checkout once, T6; Filter in Place once, T7) plus 2 Form-close controls (one per Form, T7). Each is within its brief allowance.
- Checkout clicks: 1. Runtime saves: 1 (the T6 Checkout).
- Unload, refresh, direct navigation: 0. Coordinate clicks: 0. Mouse-down/mouse-up drags: 0. Select Form OK: 0. Delete Form Definition clicks: 0. Regenerate Form clicks: 0.
- "Ref not found" errors, cumulative: 4 (T1 2, T3 2).

Deviations and qualifications carried forward (recorded, not treated as compliant after the fact):
- **T1:** two "Ref not found" errors. Recovery used a find plus targeted snapshots rather than one untargeted snapshot per error, because the untargeted snapshot was too large to return inline (the brief's snapshot-size rule applied). Recorded in the T1 section.
- **T1:** the Web Client gate state was read from its accessibility snapshot; no Web Client screenshot was taken at T1.
- **T2:** no untargeted snapshot was taken in T2 (oversized); targeted snapshots were used instead. Recorded in the T2 section.
- **T3:** two oversized untargeted snapshots (one at the first "Ref not found" recovery, one at the second). The tool saved them to files; they were not read. Recorded in the T3 section.
- **T4:** AGENTS.md was read **only in part** at the start of the task (the first 20 lines), not in full as the T4 instruction asked. This is recorded as a deviation; it is not treated as compliant after the fact.
- **T5, T6, T7:** AGENTS.md read in full at the start of each task.
- **T7:** the F4 key was pressed while the Customer ID combobox held focus (see the qualification above).

Worker-written file inventory, T7 (in addition to T1 to T6):
- Edited: `experiments/EXP-127-hello-world-part-8-phase-8-checkout-runtime-cart-walkthrough.md` (status line; this T7 section and the final audit).
- Created (screenshot tool, at the worker's request): `evidence/EXP-127/t7-01-fx-orders-after-blank-query.png`, `evidence/EXP-127/t7-02-web-client-after-closes.png`.
- Tool-written only (not worker-written): the snapshot and console logs under `evidence/playwright/`, and the two oversized snapshot files saved in T1 and T3 (not read).
- Worker-written files across the whole experiment (cumulative): the EXP-127 record (one file, edited through T1–T7); `evidence/EXP-127/t1-01` to `t1-04`, `t2-01` to `t2-03`, `t3-01` to `t3-04`, `t4-01`, `t4-02`, `t5-01`, `t5-02`, `t6-01`, `t6-02`, `t7-01`, `t7-02` (PNG, 19 files in total in `evidence/EXP-127/`).

## Final audit (documentation only; written after the T7 closes)

### Decisive evidence per acceptance check

- **AC-1 (sources, session, scope, clean state, handlers, Primary blank, event counts, baselines): met (observed).**
  - Sources: AGENTS.md read at the start of each task (T4 read only in part; see the deviations above). The EXP-126, EXP-125, EXP-118 and EXP-073 Outcome sections and the hello-world-pt8 and session recipe sections were read in T1.
  - Session: usable throughout; no session-expiry card, sign-in page or "Logout Successful" appeared at any point.
  - User scope: `ScopeType: User` in every Designer screenshot (t1-01 to t3-04).
  - FX_CustomerPortal clean in the Designer: Save disabled at T1, T2 (before the single Save), T3 (end), and at T6 pre-check (Designer untouched T4 to T7). Note: the Designer was **not** re-read in T7 (no Designer action was in the T7 instruction); its end-of-T3 state is the last direct reading.
  - Handlers as left by EXP-126: T1 (read in full) and T3 (after reopen) show FX_AddToCart rows 0 Collection Make Current `object`, 1 Collection New `object`, 2 Generate event `FX_SetNewCartEntry( POST() )`; FX_SetNewCartEntry row 0 `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`; the group names FX_CartBtn, FX_HomeBtn, FX_SignInBtn, FX_SignInBtn2 and StdFormPredisplay (the FX_SignInBtn second row was present in T1 and not re-expanded in T3).
  - ButtonCheckout Primary blank before T2 (T1); GridItems Drag From Events 1 event(s) and ButtonAddToCart Drop On Events 1 event(s) (T1, re-read T3); ButtonCheckout Drag From and Drop On 0 event(s).
  - Console baselines recorded: Designer 2 errors / 0 warnings (T1, T2, T3); Web Client 2 errors / 2 warnings (T1, T4, T5, T6, T7). The counts were unchanged after every action in every task.
  - Evidence: gate screenshots `t1-01` to `t1-04`; T3 readback `t3-01` to `t3-04`.
  - Qualifications: the T1 Web Client gate was read from its accessibility snapshot without a screenshot; the event names behind the GridItems and ButtonAddToCart counts were not opened in T1 (they rest on EXP-126's T7/T8 evidence).

- **AC-2 (Primary StdFormSave chosen from the list; one Save; read back after one ordinary close and reopen): met (observed, same session).**
  - The list offered the Form's own handlers first (`FX_AddToCart`, `FX_CartBtn`, `FX_HomeBtn`, `FX_SetNewCartEntry`, `FX_SignInBtn`, `FX_SignInBtn2`), then Std events; the exact option `StdFormSave` was present, alongside `StdFormSaveCompleted`, `StdFormSaveCurrent`, `StdFormSaveCurrentCompleted` and `StdObjectSave` (T2 section).
  - One Designer Save; the notice read "Form [FX_CustomerPortal] and global object(s) were saved."; Save disabled afterwards (`t2-03`).
  - Read back after one ordinary close (no save prompt) and reopen via the recent-forms entry: Primary = `StdFormSave` (`t3-04`).
  - Evidence: list `t2-01` (does not show StdFormSave itself; its presence rests on the accessibility readback); Events before Save `t2-02`; Save response `t2-03`; Events after reopen `t3-04`.
  - Not established: persistence beyond this session.

- **AC-3 (sign-in shows tiles; the single drag's effect; GridOrders rows; the single Checkout's messages and result): met (observed).**
  - Sign-in with FX001 showed three tiles (dumbbell 45 pound iron 45.00; eggs cage free 6.99; guitar natural acoustic 129.99); header FX001; Count 1; menu enabled (`t4-02`).
  - Drag: one drag from the dumbbell tile onto ButtonAddToCart. No prompt or message. The home page did not change except the status bar text. No visible confirmation (`t5-01`).
  - Cart page after the Cart click: one GridOrders row, starred, Order Number 3, dumbbell, Count 1, FX001 (`t5-02`).
  - Checkout: one click; no prompt, error or message; the star cleared; the row remained with the same values; status `Checkout (Object 1 of 1)` (`t6-01`, `t6-02`).
  - Qualification: the star clearing is a UI state change. It is not, by itself, persistence; T7 provides the separate FX_Orders readback.

- **AC-4 (runtime Form closed with any save prompt answered No and recorded; FX_Orders rows after one blank query recorded, showing whether the cart row was saved and with which values): met (observed, same browser session).**
  - Runtime FX_CustomerPortal closed through its Form-close control; no save prompt appeared (so no No answer was given and nothing was discarded).
  - FX_Orders opened via the recent-forms entry; criteria verified blank; one F4; three rows returned (table in the T7 section).
  - **The cart row was saved and is visible in FX_Orders:** Order Number 3, Customer ID FX001, Item dumbbell, Count 1 (Cost 45.00, Order Total 45.00 as FX_Orders derived them).
  - Rows 1 and 2 remain as EXP-073 recorded them (1 FX001 dumbbell 2; 2 FX002 eggs 1). No other row appeared.
  - Evidence: `t7-01` (readback; grid clipped, rows 2 and 3 from the accessibility readback), `t7-02` (Web Client closed).
  - Limitations: same browser session; not cross-session; not an independent database check. The FX_Orders placeholder showed Order Number 4 before the query (observed; interpretation unresolved).

- **AC-5 (no other Designer change; no handler, variable or binding change; no global object; no unload, Delete Form Definition or Select Form OK; at most one drag; no extra runtime click, key or typing; no runtime save other than the single Checkout; no record edited or deleted; User scope only; no task-boundary overrun): met, with qualifications.**
  - Designer changes: one property (ButtonCheckout Primary, T2) and one Save. No handler, variable or binding edit; no global object; no other property. View-state changes only (Details panel and trees expanded, T3).
  - No unload; no Delete Form Definition; no Regenerate Form; no Select Form OK (FX_Orders opened from the recent-forms entry, not Select Form).
  - Drags: exactly one (T5).
  - Runtime input: typing only `FX001` (T4); keys only F4 (T7); runtime clicks: ButtonSignIn2 (T4), left-menu Cart (T5), Checkout (T6), Filter in Place (T7), and the Form-close controls, one per Form (T7).
  - Runtime saves: exactly one, the Checkout click in T6.
  - No FX_Orders row was edited, re-saved or deleted; no grid cell was edited; no row was clicked; the FX_Orders placeholder (Order Number 4, Add mode) was not saved.
  - User scope throughout. No Site Default or Group scope was chosen.
  - Task boundaries: each task (T1 to T6) stopped at its boundary; T7 completed within its task.
  - Qualifications: the T4 partial AGENTS.md read; the T1, T2 and T3 snapshot exceptions and stale-reference recoveries listed above; the T7 F4-with-combobox-focus observation.

### Cleanup inventory (for operator disposition; nothing was removed by the worker)

- **Designer:** ButtonCheckout's Event **Primary = `StdFormSave`** on FX_CustomerPortal (User scope). Set in T2 (one Save). Blank before T2. The operator may want to revert it; the worker did not.
- **FX_Orders row created (confirmed in T7 readback):** Order Number **3**, Customer ID **FX001**, Item **dumbbell**, Count **1** (Cost 45.00; Order Total 45.00). Created by the single T5 drag and submitted by the single T6 Checkout click. Its key is Order Number 3.
- **No other FX_Orders row was created.** The placeholder Order Number 4 shown in Add mode was never saved and was replaced by the query; no row 4 appeared.
- **Global objects:** none created or changed.
- **Pre-existing rows left as found:** FX_Orders Order Number 1 (FX001, dumbbell, Count 2) and Order Number 2 (FX002, eggs, Count 1), from EXP-073, unchanged.

### Final state

- **Web Client (tab 1):** selected; both runtime Forms closed; main region empty; no dialog, menu, list, editor or unsaved change visible; the portal URL carries `favoriteContext=FX_Orders` (the portal's own URL update from the last menu open; the worker typed no URL).
- **Designer (tab 0):** not touched in T4 to T7. FX_CustomerPortal open and clean as last read at the end of T3 (Save disabled). Not re-read in T7; the state is inferred from T3 and from the absence of any Designer action since.
- **Scope:** User throughout.
- **Open items for the operator:** (1) disposition of the ButtonCheckout Primary and the FX_Orders row 3 cleanup; (2) whether the same-session readback is accepted as observed; an independent check (for example, a cross-session readback or a database-level check) was not performed and is not claimed; (3) the deviations and qualifications listed above.
- **No further experiment or replay was started.**

## Evidence (T1)

| File | What it shows | What it does not prove |
|---|---|---|
| `evidence/EXP-127/t1-01-designer-event-handlers-tab.png` | Designer, FX_CustomerPortal; Details on Event Handlers; FX_AddToCart rows 0-2 and the start of FX_CartBtn; Properties header `ButtonAddToCart (Button)` with Drop On Events 1 event(s); Save greyed; status bar `ScopeType: User`. | The lower Event Handlers groups (FX_CartBtn to StdFormPredisplay) are clipped in the image; they rest on the accessibility readback above. |
| `evidence/EXP-127/t1-02-buttoncheckout-events-group.png` | Properties header `ButtonCheckout (Button)`, Caption FX_sCheckout; Events group: Primary blank, Drag From 0, Drop On 0; Components row ButtonCheckout selected under FlexLayoutMain; Save greyed; User scope. | Does not show a Primary list (none opened). |
| `evidence/EXP-127/t1-03-griditems-drag-from.png` | Properties header `GridItems (Grid)`; Drag From Events 1 event(s); Components row GridItems selected; User scope. | The event name is not shown (no list opened). |
| `evidence/EXP-127/t1-04-buttonaddtocart-drop-on.png` | Properties header `ButtonAddToCart (Button)`, Caption FX_sAddToCart; Drop On Events 1 event(s); Components row selected; User scope. | The event name is not shown (no list opened). |

Screenshot hygiene: the status bar in the screenshots shows the signed-in account name, as in earlier experiments; the name is not copied into this record.

## Action audit (cumulative; T1 is the first task)

Browser calls in T1, counted from the tool-call log:
- Tab list: 1 (read-only).
- Tab selections: 2 (index 1 to the Web Client; index 0 back to the Designer). Both succeeded.
- Click actions: 5 (Event Handlers tab; Components tab; ButtonCheckout Type cell; GridItems Type cell; ButtonAddToCart Type cell). All were tab or Components-row selections, not property edits.
- Snapshots: 9 (2 untargeted: the T1 start and the Web Client check; 7 targeted: 5 successful, 2 "Ref not found" errors). 
- Finds: 5 (read-only).
- Screenshots: 4 (`t1-01` to `t1-04`).
- Saves: 0. Closes: 0. Reopens: 0. Ellipsis or list openings: 0. Dialogs opened: 0. Keys pressed: 0. Typed text: 0. Drags: 0. Runtime clicks: 0. Unload: 0. Refresh or navigation: 0.
- Total browser tool calls in T1: 26 (5 clicks + 2 selects + 1 list + 9 snapshots + 5 finds + 4 screenshots).
- "Ref not found" errors: 2 (the first after the Event Handlers click, on a tablist ref; the second on a tabpanel ref). Recovery deviation: the brief asks for one fresh untargeted snapshot per error. I used one find and then targeted snapshots instead, because the untargeted snapshot was too large to return inline (see the snapshot-size rule). The recovery read did not change any state.
- Non-browser calls: one Read attempt on a tool-result file under the harness directory was denied by the permission settings; it was not an experiment source and was not retried.

## Worker-written file inventory (T1)

- `experiments/EXP-127-hello-world-part-8-phase-8-checkout-runtime-cart-walkthrough.md` (created in T1).
- `evidence/EXP-127/t1-01-designer-event-handlers-tab.png`, `evidence/EXP-127/t1-02-buttoncheckout-events-group.png`, `evidence/EXP-127/t1-03-griditems-drag-from.png`, `evidence/EXP-127/t1-04-buttonaddtocart-drop-on.png` (written by the screenshot tool at the worker's request).
- Tool-written, not worker-written: the snapshot and console logs under `evidence/playwright/` (written automatically by the browser tool).

## Acceptance check status (T1)

- **AC-1: met for the T1 items, observed.** Sources reviewed at the start of the task (above); session usable (no expiry, no sign-in); User scope (status bar `ScopeType: User` in every Designer screenshot); no runtime Form open in the Web Client (no dirty state); FX_CustomerPortal open and clean (Save disabled); handlers as EXP-126 left them (table above); ButtonCheckout Primary blank; GridItems Drag From 1 event(s); ButtonAddToCart Drop On 1 event(s); console baselines recorded (Designer 2/0, Web Client 2/2). Evidence: `t1-01` to `t1-04`.
- AC-2 to AC-5: not yet run.

## Final state at the end of T1

- Designer tab (tab 0) selected; FX_CustomerPortal open; User scope; Save disabled; Details on the Components tab with ButtonAddToCart selected; no dialog, menu, list or unsaved change open.
- Web Client tab (tab 1) not changed; no runtime Form open.
- Cleanup inventory: nothing was created or changed in T1.

## Next step as written at the end of T1 (T2 has since been performed; see T2 below)

T2: select ButtonCheckout by its Components row Type cell (`ButtonCheckout (Button)` header), open the Primary list once, record the options near the standard save event, and click StdFormSave (stop blocked if the exact name is absent); leave the field by a neutral row; verify Primary reads StdFormSave; one Designer Save with its response recorded.

## Limitations (T1)

- Event names behind the GridItems and ButtonAddToCart counts were not opened in T1.
- The Web Client state was read from its accessibility snapshot and no screenshot was taken.
- Console counts are the tool's page-line values; the messages were not read.

## Outcome (operator, 2026-10-23)

Accepted (observed), with qualifications. The decision was made by the operator assistant under the user's overnight authorization of 2026-10-23. The user approved the brief and the precondition attestation themselves. **Hello World Part 8 Phase 8 is complete, and with it the Hello World tutorial build (Parts 1–8, FX_ adaptation).**
- **ButtonCheckout:** Primary event StdFormSave on FX_CustomerPortal (User scope), read back after one close and reopen.
- **Runtime walkthrough:** Customer ID FX001 plus ButtonSignIn2 showed the three tiles. **One** browser_drag of the dumbbell tile onto ButtonAddToCart created a new (starred) cart row: Order Number 3, dumbbell, Count 1, Customer ID FX001. **One** Checkout click cleared the star, with no prompt or error.
- **Read-back:** the FX_Orders Form, with one blank Filter in Place + F4 query, returned three rows: EXP-073's rows 1 and 2, plus **3 / FX001 / dumbbell / 1**.

Run R-20261023-101856-5f9z used 7 of 12 worker tasks. There was one Designer Save, no toolbar or keyboard save at runtime, and no save prompt anywhere.

- Screenshots viewed by the operator assistant:
  - `t6-02`: the cart page after Checkout. One row, 3 / dumbbell / 1 / FX001, with no star; status `Checkout (Object 1 of 1)`.
  - `t7-01`: the FX_Orders Form after the query. Grid row markers 1, 2 and 3; detail of row 1 (FX001, dumbbell, Count 2, Order Total 90.00); status `Customer ID (Object 1 of 3)`.
- Operator rulings:
  1. The T1 pause (`completed_with_denials`) was one harmless denied Read of the worker's own oversized snapshot file outside the repository. The user approved resuming with `--approve denials`. The auto-mode classifier blocked that command, so a project-local allow rule for harness `resume` was added at the user's request.
  2. **Customer ID FX001** replaces the tutorial's 1, because FX_Orders.FX_CustomerID takes FX001/FX002 (EXP-073).
- Findings (observed):
  1. The FX_AddToCart pipeline works at runtime. Dragging a GridItems tile onto ButtonAddToCart (matching Drag From / Drop On event FX_AddToCart) appends a new primary-collection row. FX_SetNewCartEntry fills it with the dragged tile's FX_Item, FX_Count from the variable (initial value 1) and FX_CustomerID from the variable. The drag shows no message; only the status bar changes (`Object 1 of 3` to `Object 1 of 1`). The row appears when the cart page is shown.
  2. The new row's Order Number (3) is pre-assigned, as EXP-073's placeholder showed. It became the saved key.
  3. Checkout (Primary StdFormSave) saves the new row with no prompt or toast. The only visible sign is the star disappearing.
  4. Closing the runtime Form after the save gave no save prompt.
  5. Playwright's browser_drag works for Mongoose Web Client tile drag and drop.
- Qualifications accepted by the operator assistant:
  - T4 read only the first 20 lines of AGENTS.md.
  - The two T1 stale-reference recoveries used find and targeted snapshots instead of one untargeted snapshot (it was too large).
  - Oversized snapshots were saved by the tool and not read.
  - F4 was sent while the FX_Orders Customer ID combobox held focus with its text selected. Nothing was typed, and the query ran.
  - Row 3's values in FX_Orders come from the accessibility readback, because the grid in `t7-01` is clipped.
  - The Add To Cart pipeline was exercised once with the first tile only. Duplicate drops, other tiles, Count values other than 1 and the asynchronous ordering are untested.
  - The save is evidenced at UI level in the same browser session, not by SQL.
- Record hygiene: a grep for the account's email domain found no hit in this record. The screenshots' status bars show the account, as in earlier experiments.
- Confinement (git status): the run wrote only `evidence/EXP-127/` and this record in the repository, plus the tool's usual files under `evidence/playwright/`. `tools/claude-harness/briefs/EXP-119.brief.json` stays untracked and untouched.
- Cleanup inventory:
  - ButtonCheckout Primary StdFormSave (FX_CustomerPortal, User scope);
  - **one FX_Orders row, Order Number 3** (FX001, dumbbell, Count 1), in the factory-owned table.
  - No global object was created or changed.
- Limits: same-session UI observations; one pass through the pipeline.
- Next: the Hello World build is complete. Remaining open items: footer Region00 UNKNOWN0; FX_BlueButton renders teal; FX_FlexProbe01 cleanup; ButtonAddToCart Bitmap (no cart image in `assets/`); the redaction pass over earlier records (EXP-123 contains the account email); and the tutorial's responsive-layout demonstration, not tested.
