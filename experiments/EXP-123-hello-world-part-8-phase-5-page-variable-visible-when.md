# EXP-123 - Hello World Part 8 Phase 5: StdFormPredisplay Set Values FX_Page = 1 and Visible When on FlexLayoutMain regions (with close/reopen readback)

Status: accepted (observed)
Run: R-20261020-113214-qLdl, cycle 0, worker session 66f61ac1-c171-44b9-858e-a2886a0c373f.
Target: FX_CustomerPortal, User scope only. Evidence: `evidence/EXP-123/`.
Findings are observed only.

## Objective (brief)

Build Hello World Part 8 Phase 5 (transcript 09:53-12:16) on FX_CustomerPortal:

- T2: Form event handler on the standard event StdFormPredisplay, Response Type Set Values, one pair `FX_Page = 1` (summary `SETVARVALUES(FX_Page=1)`), one Save.
- T3: close and reopen check of the handler and the FX_Page variable.
- T4 to T6: on FlexLayoutMain's regions signinpage (1), homepage (2) and cartpage (3), Visible When `FX_Page equals literal N` via the expression builder, and Visible in Design Mode True, one Save each.
- T7: close and reopen readback, then the final audit.

No runtime check (that follows Phase 6).

## Sources reviewed (T1, before any browser action)

- `AGENTS.md` (repository file).
- `docs/mongoose/transcripts/hello-world-pt8.md` lines 156-168 (Phase 5 table) and lines 410-433 (09:53-12:16 narration).
- `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections only: EXP-122 (line 976), EXP-120 (line 896), EXP-117 (line 665), EXP-112 (line 785), EXP-057 (line 221), EXP-056 (line 246), EXP-055 (line 282).
- This record did not exist at the start of T1 (Read and Glob both returned nothing for `experiments/EXP-123*`); it was created in T1.

Tutorial reference (transcript lines 422-432): the narration builds the sign-in condition as Variable value `page`, operator equal, right value Literal 1, then sets "visible and design mode" to true below it. The brief's Phase 5 table names the row "Visible in Design Mode".

## Starting state (T1)

- Browser tabs (listed before the first selection): tab 0 is the Web Client (Mongoose portal, `favoriteContext=FX_CustomerPortal`); tab 1 is the Web Designer (`MGForm=FX_CustomerPortal`). Tab 1 was selected; the Web Client tab was not used.
- Session: usable. No Session Expired modal, logout card, "Logout Successful" or sign-in page; no server-event error seen in T1.
- Scope: the Designer footer reads `[ ScopeType: User / ScopeName: <signed-in user account> ]`. User scope confirmed.
- Form: FX_CustomerPortal is the only Form tab, selected and closable. Save disabled, Regenerate Form disabled, Undo and Redo disabled. No dialog open at the start.
- Component left selected by earlier work: GridColCustID (GridColumn). Not changed in T1.
- Console baseline: `Console: 2 errors, 0 warnings` in the tool output at the first reading and after every T1 action. It never rose. The console messages were not read.

## Gate readings (T1)

### Details > Event Handlers (`evidence/EXP-123/t1-01-event-handlers.png`)

- One handler group: **FX_SignInBtn** (collapsed on arrival; expanded with the grid's Expand button, view only).
- Its row 0: Sequence 0, Response Type **Collection Refresh**, Disabled false, Response Parameters `object2`.
- **No StdFormPredisplay group.** Expected, and as the brief states.

### Details > Variables (`evidence/EXP-123/t1-02-variables.png`)

- Form - Persistent: **fds_SC2**.
- Form - Temporary: **FX_Count**.
- **No FX_Page** in either Form category. Expected, and as the brief states.
- Global - Persistent and Global - Temporary are also listed. Their rows are not Form variables and were not changed or created.

### Components tree, FlexLayoutMain regions

- FlexLayoutMain (FlexLayout) sits under the pane `flexlayoutPane_FX_CustomerPortal`. Its regions in tree order: **Region00: menu**, **Region01: spacer1**, **Region02: signinpage**, **Region03: homepage** (holding FlexLayoutHome), **Region04: cartpage** (holding StaticCart and GridOrders), **Region05: spacer2**. This is the six-region layout the brief expects.
- The region rows' Visible When column cells read blank in the tree snapshot.
- Also in the tree, outside FlexLayoutMain: FlexLayoutFooter (Region02: footer) with an auto region Region00: UNKNOWN0. Observed, not touched.

### FlexLayoutMain > Edit FlexLayout Attributes dialog (`evidence/EXP-123/t1-03-signinpage-behavior-rows.png`)

- Opened once. The Edit FlexLayout Attributes adorner was reached by reference: a canvas adorner whose element id is `flexlayouteditadorner-3737`, hovered first and then clicked. No coordinates were used. The tooltip text was not read; the element id matched the brief's named id.
- Dialog title: **FlexLayout**.
- Attributes: Type **HorizontalBox**; Auto Size **False**; Region Index **1**; Margin blank.
- Regions grid (Index, ID, Length): 0 **menu** 20 FormUnit; 1 **spacer1** 1 Flex; 2 **signinpage** 5 Flex; 3 **homepage** 5 Flex; 4 **cartpage** 5 Flex; 5 **spacer2** 1 Flex. Six rows, as expected.

#### signinpage region Properties (read-only; the row was selected and expanded, nothing edited)

Rows in the order the accessibility tree lists them:

| Group | Row | Value |
| --- | --- | --- |
| Design | ID | signinpage |
| Design | Length | 5 |
| Design | Unit | Flex |
| Design | Orientation | Vertical |
| Design | Alignment | Center |
| Design | Pack | Start |
| Design | Minimum Length | blank |
| Design | Maximum Length | blank |
| Design | Default Margin | blank |
| Appearance | Background Image | blank |
| Appearance | Theme Border | Enable |
| Behavior | **VisibleWhen** | **blank** (its value cell has an "Open Edit Property Dialog" button) |
| Behavior | Animation | None |

**Visible in Design Mode: no such row.** The Behavior group lists only VisibleWhen and Animation. A text search of the open dialog for "Visible in Design" returned no match. This does not fit the brief's Phase 5 table and the T4 to T6 rule ("if that row is absent, Cancel the attributes dialog and stop blocked"). See Open questions.

The "Visible When" row name in the Properties grid is `VisibleWhen` (no space). The Design group's rows are listed flat in the accessibility tree; their nesting is clear only from the screenshot.

Dialog closed with **Cancel** (one click). Afterwards: no dialog open; Save disabled; the accessibility tree marks the Properties panel's Form tab as selected, and the Component header textbox is no longer present (observed; not investigated further).

## Action audit, T1 (browser-tool calls: 40)

Browser-tool calls: 40 in total.

| Category | Count | Detail |
| --- | --- | --- |
| Tab-tool list | 1 | before any selection |
| Tab-tool select | 1 | tab 1 (Designer) |
| Browser snapshot calls | 16 | 1 untargeted full snapshot too large to return inline (65,528 characters; the tool wrote it to the session tool-results folder; not read); 6 untargeted shallow snapshots (depth 3); 9 targeted snapshots of panels |
| Find calls | 8 | locating text or refs only (not used as click refs) |
| Clicks | 10 | tab clicks 3 (Event Handlers, Variables, Components); view-only Expand clicks 3 (Event Handlers grid, Variables grid, region Properties); FlexLayoutMain Type cell 1; adorner 1; signinpage row 1; Cancel 1 |
| Hovers | 1 | the adorner, before its click |
| Coordinate clicks | 0 | |
| Arrow, Enter, Tab key presses | 0 | |
| Drag, Undo, Redo | 0 | |
| Ellipsis or list opens | 0 | |
| Dialogs opened | 1 | FlexLayout attributes dialog |
| Nested dialogs | 0 | |
| OK clicks | 0 | |
| Cancel clicks | 1 | attributes dialog |
| Builder actions | 0 | |
| Text entries and corrections | 0 and 0 | |
| Prompts | 0 | |
| Designer Saves | 0 | none in T1 (brief) |
| Form closes and reopens | 0 | |
| Server-event errors | 0 | |
| "Ref not found" errors | 0 | |
| Re-logins | 0 | |
| Screenshots | 3 | t1-01, t1-02, t1-03 |
| Console error count | 2 | at every reading; never rose |

Worker file reads (non-browser): AGENTS.md; the Phase 5 transcript lines (two reads); the recipe; the seven Outcome sections; Glob and Grep searches for the record and the outcome headings; the three new screenshots viewed for verification. The record path did not exist when read.

## Screenshots (decisive; T1)

- **`evidence/EXP-123/t1-01-event-handlers.png`**: FX_CustomerPortal Designer, Details > Event Handlers tab selected. Shows the FX_SignInBtn group expanded, row 0 Collection Refresh, false, object2. The footer reads the User scope. Save greyed.
  - Does not prove: that no other group exists below the visible area (the accessibility tree listed only FX_SignInBtn).
- **`evidence/EXP-123/t1-02-variables.png`**: Details > Variables tab. Form - Persistent: fds_SC2; Form - Temporary: FX_Count. Global rows below.
  - Does not prove: rows of the Global - Temporary category, which lie below the visible area. The Form categories show only the two rows listed.
- **`evidence/EXP-123/t1-03-signinpage-behavior-rows.png`**: FlexLayout attributes dialog open. Shows Type HorizontalBox, Auto Size False, the six-row Regions grid with signinpage highlighted, and the region Properties Design group (ID signinpage, Length 5, Unit Flex, Orientation Vertical, Alignment Center, Pack Start).
  - **Limitation:** the Behavior rows (VisibleWhen, Animation) sit below the Properties grid's visible area and are **not** in this image. They are recorded from the targeted accessibility snapshot. The dialog could not be reopened to capture them (one dialog open allowed in T1). A later task would need its own capture.

## Acceptance checks

- **AC-1 (T1 portion): met, with one unresolved item.** Sources reviewed; session usable; User scope; FX_CustomerPortal open and clean (Save disabled); event handlers recorded (no StdFormPredisplay); variables recorded (no FX_Page); FlexLayoutMain's six regions recorded; signinpage region Properties read and the attributes dialog left with Cancel; baseline console count 2. Unresolved: the Visible in Design Mode row is not present in the region Properties (see Open questions). Evidence: t1-01, t1-02, t1-03, plus the accessibility readings above.
- **AC-2 (T2 and T3 portions): met.** T2: one StdFormPredisplay handler, Response Type Set Values, one pair Target `FX_Page` Value `1`, summary `SETVARVALUES(FX_Page=1)`, one Save (toast). T3: the handler reads back after one close and reopen with the same summary; the FX_Page variable is absent from Details > Variables in every Form category (`t3-01`, `t3-02`). T4 to T6 (Visible When and Visible in Design Mode per region, one Save each): not performed.
- **AC-2 (T4 rerun, signinpage): partly met.** VisibleWhen built through the expression builder and saved as `#V(FX_Page) = "1"` (the builder's text for Variable FX_Page equals Literal 1), one Save. **Visible in Design Mode True: not met** (no such control exists; operator waiver applies). The first T4 attempt (blocked, nothing saved) is superseded by the rerun. T5 and T6: not performed.
- **AC-3 (T7), AC-4 and AC-5:** not yet applicable (T5 to T7 not performed). AC-4 is supported so far by the non-action lists in T2, T3 and T4.

## Findings (observed only)

1. The FlexLayoutMain Edit FlexLayout Attributes adorner is reachable by reference, element id `flexlayouteditadorner-3737`, after a hover. No coordinate click was needed.
2. The signinpage region's Behavior group lists VisibleWhen (blank) and Animation (None). No Visible in Design Mode row was found.
3. The full untargeted snapshot exceeds the inline limit (65,528 characters). Untargeted snapshots at depth 3 and targeted panel snapshots worked.
4. Event Handlers and Variables groups arrive collapsed. The grid's Expand button shows their rows (view only).
5. After the attributes dialog's Cancel, the accessibility tree shows the Properties panel's Form tab selected and no component header.

## Open questions and blockers

- **Visible in Design Mode row absent (still open).** The brief expects it in the region Properties after Visible When. It was not present on signinpage in T1, T3, T4 or the T4 rerun, even after `#V(FX_Page) = "1"` was saved (Behavior: VisibleWhen and Animation only). The builder has no design-mode control. Operator waiver applies to signinpage; homepage and cartpage (T5, T6) would need the same check.
- **signinpage not shown on the design canvas after the T4 rerun Save (observed).** Cause not established.
- **T4 builder New raises a Form script error (T4).** `OnNewConditionClause` fails with `CListBox::SetCurSel call failed`; New also adds a second blank clause. See the T4 section.
- **Variable not listed after Save and reopen (T3).** The Set Values target FX_Page does not appear in Details > Variables, unlike EXP-057's recorded Form - Temporary entry. Unresolved; see the T3 section.
- The tutorial (transcript line 428) describes "set visible and design mode to true" immediately after the Visible When expression. The build may expose this under another name; not verified.

## T2 - StdFormPredisplay handler (Set Values, FX_Page = 1), one Save

Continuation task after the operator pause. Read first, read-only: AGENTS.md and this record's T2 part; browser tabs listed (tab 0 Web Client, tab 1 Designer with `MGForm=FX_CustomerPortal`); tab 1 selected; fresh snapshot.

**Starting state (verified before any change):** FX_CustomerPortal the only Form tab, selected; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save and Undo disabled; no dialog open; Details > Event Handlers showed only the FX_SignInBtn group (row 0 Collection Refresh, Disabled false, `object2`) and no StdFormPredisplay group. Console count 2 errors, 0 warnings. These match T1.

**Steps performed** (console count read after every action: 2 errors, 0 warnings each time; it never rose):

1. Event Handlers toolbar, first button (blue +, New) once. The **Event Handler** dialog opened with a Name combobox (`combobox "Name:"`) and an arrow.
2. Opened the Name list by its arrow, then clicked the **StdFormPredisplay** option. The list held the `StdForm...` events (StdFormPasteRow ... StdFormPredisplay, StdFormPrevious ... StdFormPutBoundValues). Name read `StdFormPredisplay`. Screenshot `t2-01`.
3. OK once. New group **StdFormPredisplay**, row 0: Sequence 0, Response Type blank, Disabled false, Response Parameters blank. Save became enabled (form dirty). FX_SignInBtn group unchanged.
4. Selected the new row by clicking its Response Type cell (row highlighted). Expanded the lower Properties grid (view only): its Response group holds Type, Parameters and Edit in-line Script.
5. Opened the Response Type list with the Type row's arrow and clicked **Set Values** (the list also offered Send Web Container Message, Show Banner and others). Type read `Set Values`.
6. Opened the Parameters ellipsis once: the **Event Handler Parameters** dialog (General group: Keep, Error Message, Success Message, Only When Current Collection Is `<all collections>`, Only When Platform Is, Ignore Failure, Message as Toast?, Disabled; second group: Variables, Components, Properties, Do not mark output targets modified?). Keep was left at its default blank; nothing in General was touched.
7. Opened the Variables ellipsis once: the **Edit Set Variable Values** list, empty as expected. New once: the **Edit Set Variable Value Pair** dialog (Target combobox with Open arrow and ellipsis; Value textbox with ellipsis; OK, Cancel, Help).
8. Target: clicked the combobox, typed `FX_Page` key by key (slow typing), then one Tab. Target stayed `FX_Page` (typed name kept; no other variable chosen from the list).
9. Value: clicked the textbox, filled `1` (one entry), then one Tab. Verified Target `FX_Page`, Value `1`. Screenshot `t2-02` taken before the pair OK.
10. Pair OK: the Edit Set Variable Values list now holds one option, **`FX_Page=1`**. List OK. The Variables field of Event Handler Parameters then reads **`FX_Page=1`**. Parameters OK. The nested dialogs were closed innermost first; none is open.
11. Verified the handler row before Save (screenshot `t2-03`): Sequence `0`, Response Type `Set Values`, Disabled `false`, Response Parameters **`SETVARVALUES(FX_Page=1)`**. The lower tree shows Event `StdFormPredisplay`, Type `Set Values`, Parameters `SETVARVALUES(FX_Page=1)`. FX_SignInBtn row unchanged (`0 Collection Refresh false object2`).
12. **One Designer Save.** The first click on the Save toolbar button (`e884`) returned `Ref e884 not found` (no click happened). One fresh untargeted snapshot (the one recovery allowed), then one click on the same Save button. Response: toast **"Form [FX_CustomerPortal] and global object(s) were saved."** A later snapshot shows Save disabled and the form clean. Screenshot `t2-04` shows the toast, the Event Handlers grid (FX_SignInBtn row; StdFormPredisplay row 0 Set Values false SETVARVALUES(FX_Page=1)) and User scope.

**Acceptance status (T2 portion of AC-2):** one StdFormPredisplay handler (one group, one row); Response Type Set Values; one pair Target `FX_Page` Value `1`; summary **`SETVARVALUES(FX_Page=1)`**; one Designer Save with the toast above. Supported by `t2-01` to `t2-04` and the accessibility readings. Not yet checked: the handler after close and reopen (T3), the FX_Page variable's category (T3). Save state verified only in this session (same-session UI observation; no cross-session durability claimed).

**Observed findings (T2, observed only):**
1. The Event Handler dialog's Name combobox lists the standard events; StdFormPredisplay is present. The new group appears with Response Type blank until set.
2. The Set Values pair's Target combobox kept the typed new name `FX_Page` after Tab, as EXP-056 reported; the summary builds as `SETVARVALUES(FX_Page=1)`.
3. The Parameters summary shows `SETVARVALUES(FX_Page=1)` on the row after the nested OKs, before the Save, and after the Save.
4. The first Save click hit a stale reference; the fresh-snapshot recovery was used once. No Save was double-clicked.

**Explicit non-actions in T2:** no Details > Variables change (no variable created there); no change to FX_SignInBtn or any other handler; no component, region or Form property change; no Toolbox placement; no copy or paste; no Regenerate; no close or reopen; no prompt; no Select Form OK; no Undo; no drag.

## T3 - handler persistence check (one close, one reopen; read-only, no Save)

Continuation task after the operator pause. Read first, read-only: AGENTS.md and this record's T3 part. Browser tabs listed (tab 0 Web Client; tab 1 Designer with `MGForm=FX_CustomerPortal`); tab 1 selected (select succeeded); fresh snapshot.

**Starting state (verified before any change):** FX_CustomerPortal the only Form tab, selected; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save and Undo disabled; no dialog, list or menu open. Event Handlers (read in the Designer before the close): FX_SignInBtn, row 0 Collection Refresh, false, `object2`; StdFormPredisplay, row 0 Set Values, false, `SETVARVALUES(FX_Page=1)`. Console 2 errors, 0 warnings. These match the T2 end state.

**Steps performed** (console count read after every action: 2 errors, 0 warnings each time; it never rose):

1. **Close, once.** Clicked the Form tab's close control (`closable FX_CustomerPortal`). The first attempt used a reference from an earlier targeted read and returned `Ref e247 not found` (no action happened). One fresh untargeted snapshot, then one click on the same control (`e247`). **No save prompt appeared** (none in the tool output; the next snapshot shows no dialog). After the close: no Form tab, no dialog, Save disabled.
2. **Reopen, once.** Clicked the Form menu (`e3`), took one targeted snapshot of the menu, and clicked the recent-forms entry **FX_CustomerPortal** (the menu also listed FX_Items, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01; none was clicked). Reopened on the first attempt: tab `FX_CustomerPortal` selected, URL carries `MGForm=FX_CustomerPortal`, footer shows User scope, Save disabled, Properties shows the Form header (no component selected).
3. **Details pane.** The Details pane was collapsed after the reopen. Clicked its Expand Panel control once (layout toggle, view only; no Form data changed). Details opened on the Collections tab.
4. **Event Handlers.** Clicked the Event Handlers tab, then the grid's Expand button once (view only) to show the collapsed groups' rows.
5. **Variables.** Clicked the Variables tab, then the grid's Expand button once (view only) to show the four collapsed categories. Ran one read-only text search for `FX_Page` (no match).

**Event Handlers after reopen (`evidence/EXP-123/t3-01-event-handlers-after-reopen.png`):**
- **FX_SignInBtn** group, row 0: Sequence `0`, Response Type `Collection Refresh`, Disabled `false`, Response Parameters `object2`. **Unchanged.**
- **StdFormPredisplay** group, row 0: Sequence `0`, Response Type `Set Values`, Disabled `false`, Response Parameters `SETVARVALUES(FX_Page=1)`. **Persisted.** (The lower Properties tree was not repopulated, because the row was not reselected; the summary is read from the grid cell.)

**Variables after reopen (`evidence/EXP-123/t3-02-variables-after-reopen.png`):**
- **Form - Persistent:** `fds_SC2` only.
- **Form - Temporary:** `FX_Count` only.
- **FX_Page: not listed in any Form category.** The text search of the accessibility tree for `FX_Page` returned no match while the Variables panel was active.
- Global - Persistent rows are visible (`ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_*`, `lse_*`, `lsm1_CoreDocumentType` and others). **Limitation:** the Global - Temporary category did not render in the snapshot, so its rows were not read. This does not affect the Form-category result.

**Acceptance status (T3 portion of AC-2):** the handler reads back after close and reopen: StdFormPredisplay, Response Type Set Values, Parameters `SETVARVALUES(FX_Page=1)`. The FX_Page variable: **absent** from Details > Variables (category: none). Supported by `t3-01` and `t3-02` and the accessibility readings. Same browser session, UI observation only; no cross-session durability is claimed.

**Comparison with EXP-057 (observed, not explained):** EXP-057 recorded a typed Set Values target as a Form - Temporary variable after a Save and reopen. Here the same route (a typed new target, then one Save, then close and reopen) did **not** create a Variables entry. The difference is unresolved. A candidate explanation is that EXP-057's variable also had a variable binding (an Edit bound to it), which this record does not have. Unverified.

**Observed findings (T3, observed only):**
1. The StdFormPredisplay handler with `SETVARVALUES(FX_Page=1)` persists after one close and one reopen (same session).
2. The Set Values pair's target `FX_Page` produced no Details > Variables entry in any Form category after the Save and the reopen.
3. The Form-tab close reference was stale once; one fresh untargeted snapshot recovered it. No save prompt appeared on close.
4. The recent-forms reopen worked on the first attempt. The Details pane was collapsed on reopen; it had to be expanded to read the tabs.

**Explicit non-actions in T3:** no Save; no field, handler, pair or variable was created or edited; no region or component was touched; no Toolbox use; no copy or paste; no Regenerate; no Select Form OK; no Undo; no drag; no prompt answered (none appeared); no runtime action.

## T4 - signinpage VisibleWhen probe (operator-amended, signinpage only) - BLOCKED, no change saved

Continuation task. Read first, read-only: AGENTS.md and this record's T4 part. Browser tabs listed (tab 0 Web Client; tab 1 Designer `MGForm=FX_CustomerPortal`); tab 1 selected; fresh snapshot.

**Starting state (verified read-only):** FX_CustomerPortal open, the only Form tab; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save and Undo disabled; no dialog, list or menu open. Details had the Variables tab selected from T3's reopen. Console 2 errors, 0 warnings. FX_CustomerPortal's Event Handlers and Variables were not re-read in T4 (T3 readings stand: StdFormPredisplay Set Values `SETVARVALUES(FX_Page=1)`; FX_Page absent from Form categories).

**Steps performed** (console count read after every action: 2 errors, 0 warnings each time; it never rose):

1. Details > Components tab clicked; grid Expand clicked once (view only; the tree had collapsed to the Pane row). A text search for `Region05` found nothing (search only; not used as a ref); one targeted snapshot of the grid then showed the components.
2. Selected **FlexLayoutMain** by its Type cell. Properties header read **`FlexLayoutMain (FlexLayout)`**.
3. Hovered the canvas adorner at ref `e2173`: its element id `flexlayouteditadorner-5007`; tooltip read **`Edit FlexLayout Attributes`**. Then one click on it (the one adorner open of T4). The **FlexLayout** attributes dialog opened.
4. Attributes confirmed: Type **HorizontalBox**; Auto Size **False**; Region Index **1**; Margin blank. Regions grid (Index, ID, Length): 0 **menu** 20 FormUnit; 1 **spacer1** 1 Flex; 2 **signinpage** 5 Flex; 3 **homepage** 5 Flex; 4 **cartpage** 5 Flex; 5 **spacer2** 1 Flex. Six rows, as expected.
5. Selected the **signinpage** row (click on its ID cell). Region Properties (read, no change): Design group: ID `signinpage`; Length `5`; Unit `Flex`; Orientation `Vertical`; Alignment `Center`; Pack `Start`; Minimum Length blank; Maximum Length blank; Default Margin blank. Appearance: Background Image blank; Theme Border `Enable`. **Behavior: VisibleWhen (blank; "Open Edit Property Dialog" button); Animation `None`.** **No Visible in Design Mode row**, as in T1 (text search for "Visible in Design" in the dialog: no match, checked in T1; the Behavior children here are the same two rows).
6. Captured `t4-01` (dialog with signinpage selected, before the expression editor). **Limitation:** the Behavior rows are below the Properties grid's visible area in this image; they are recorded from the accessibility snapshot.
7. Opened the **VisibleWhen** ellipsis once. Builder title **"Edit Condition"**. Controls, before any change: Clauses list (one blank row, `= |`, selected); **New**, **Delete**, **Up** (disabled), **Down**; Current Clause: **Left Value** (text, blank; **Edit Value** button), **Operator** combobox `=` with Open arrow, **Right Value** (text, blank; **Edit Value** button), **And With Next Clause** checkbox; **OK**, **Cancel**, **Help**. **No design-mode visibility checkbox or option anywhere in the builder.** Captured `t4-02` (complete initial editor).
8. Clicked **New** once (the brief's narrated first step). Result: the Clauses list now held **two** blank rows (`= |` and `= |`); the first stayed selected; Left and Right still blank. **No error was visible in the builder itself; a Form script error appeared as an alert (step 9).**
9. Prompt, recorded verbatim (alert titled **"Infor Mongoose Application Development Framework - Edit Condition"**, single OK button):
   > Error during execution of Form script class [Mongoose.FormScripts.WSExpEdEditConditionalActionsCondition], method [OnNewConditionClause]Exception message: Error: CListBox::SetCurSel call failed
   
   Answer: **OK** once (the only choice; OK-only informational prompt; it discards nothing).
10. Next click, **Left Value "Edit Value"**, timed out: `TimeoutError ... waiting for locator ... element ... subtree intercepts pointer events` (the alert's MG.MessageBox overlay). One fresh untargeted snapshot showed the alert. After OK, one targeted read of the builder (`e3106`) showed the state of step 8: two blank `= |` clauses, both operands blank, no value set. This is the "one corrected visible inspection".
11. **Unexpected builder behaviour, so the brief's stop rule applied:** cancelled the builder (**Cancel**, once). Then one targeted snapshot of the attributes dialog's button bar and **Cancel** (once) on the attributes dialog. No OK was pressed, so no condition or value was committed.
12. Verified after the two Cancels: no dialog open; **Save disabled**; Undo disabled; footer User scope; Components tab with FlexLayoutMain row; console 2 errors, 0 warnings. **No Designer Save** in T4.

**Result: the signinpage VisibleWhen condition was NOT built and NOT saved.** The builder's New action produced a second blank clause and a Form script error (`CListBox::SetCurSel call failed`, in `OnNewConditionClause`), and the Left Value editor was then blocked by the alert. Under the brief's rule ("if the builder lacks these controls or shows anything unexpected, Cancel the builder, Cancel the attributes dialog and stop blocked"), the task stopped here. Nothing was typed into any field.

**Operator waiver status:** the waiver for the missing Visible in Design Mode row applies only "after the verified VisibleWhen condition"; no condition was verified, so the waiver was not exercised. **No design-mode control exists** in the builder or the region Properties on signinpage (Behavior: VisibleWhen and Animation only). Whether a design-mode control appears after a condition is saved is still unobserved.

**Acceptance status (T4 portion of AC-2):** **not met.** signinpage Visible When `FX_Page equals literal 1` was not set; Visible in Design Mode True was not set (no control found); no Save. AC-1's region readings were repeated in T4 and match T1. Evidence: `t4-01`, `t4-02`, plus accessibility readings.

**Observed findings (T4, observed only):**
1. The Edit Condition builder opens with one blank clause (`= |`); its New action appends a second blank clause and raises a Form script error (`WSExpEdEditConditionalActionsCondition.OnNewConditionClause`, `CListBox::SetCurSel call failed`), in this session.
2. While that alert is open it intercepts pointer events on the builder (the Left Value Edit Value click timed out).
3. The builder has no design-mode visibility control. The region Properties' Behavior group lists only VisibleWhen and Animation.
4. The Attributes dialog's Regions grid and region Properties match T1 exactly.
5. The Form-tab and Designer state after Cancel is clean (Save disabled).
6. The brief's narrated first step (New) is the one that failed. Whether the builder accepts the same condition when the existing blank clause is edited instead of adding one is **not tested** (the brief's procedure did not allow it without operator direction).

**Explicit non-actions in T4:** no Save; no value entered in any field; no ellipsis other than VisibleWhen; no list opened; no region other than signinpage selected; no region value, layout value, handler, variable or component changed; no copy or paste; no Toolbox use; no Regenerate; no Undo; no drag; no Select Form OK; no Form close or reopen; no re-login.

## T4 rerun - signinpage VisibleWhen, operator-authorized (2026-10-20), edits the existing clause; no New

Authorization: the operator's rerun instruction (T4 only; T5, T6 and T7 not authorized). Read first, read-only: AGENTS.md and this record's T4 part; browser tabs listed (tab 0 Web Client; tab 1 Designer `MGForm=FX_CustomerPortal`); tab 1 selected; fresh snapshot.

**Starting state (verified read-only):** FX_CustomerPortal open, the only Form tab; footer User scope; Save and Undo disabled; no dialog, alert, list or menu open. Details on Components. Console 2 errors, 0 warnings. The T4 first attempt's cancelled changes were not present (Save disabled; VisibleWhen blank on signinpage at the start of this rerun).

**Steps performed** (console count read after every action: 2 errors, 0 warnings each time; it never rose):

1. Components tab, grid Expand once (view only). Selected **FlexLayoutMain** by its Type cell; Properties header **`FlexLayoutMain (FlexLayout)`**.
2. Hovered the adorner (`flexlayouteditadorner-5497`; tooltip **`Edit FlexLayout Attributes`**), then one click. The **FlexLayout** attributes dialog opened. Type **HorizontalBox**; Auto Size **False**; Regions: 0 menu, 1 spacer1, 2 signinpage, 3 homepage, 4 cartpage, 5 spacer2. The six regions are as expected.
3. Selected the **signinpage** row. Region Properties (baseline, no change): Design: ID `signinpage`, Length `5`, Unit `Flex`, Orientation `Vertical`, Alignment `Center`, Pack `Start`; Minimum/Maximum Length and Default Margin blank; Appearance: Background Image blank, Theme Border `Enable`; **Behavior: VisibleWhen blank; Animation `None`.** No Visible in Design Mode row.
4. Opened the **VisibleWhen** ellipsis once. The **Edit Condition** builder opened with the existing single clause `= |` (Left and Right blank, Operator `=`), selected. Controls: Clauses list; New; Delete; Up (disabled); Down; Left Value (text, Edit Value); Operator (combobox `=`); Right Value (text, Edit Value); And With Next Clause checkbox; OK; Cancel; Help. **No design-mode visibility control.** Screenshot `t4r-01` (builder, initial single clause).
5. **New was not clicked.** Clicked the **Left Value Edit Value** (`e2898`) on the existing clause. The **Edit Value Expression** dialog opened: Value Type combobox (Open arrow; list **Literal, Variable Value, Component Value, Property Value**); Value combobox (Open arrow; a **Global** checkbox).
6. Value Type list (arrow, then click): chose **Variable Value** (clicked the option; not by keys). Value became a combobox with an Open arrow and the Global checkbox. Opening the Value list showed an alphabetical list of Form and global variables (`fds_SC2`, `FX_Count`, `gbgc_*`, `lse_*`, `lsm1_*`, `MPPassword`, `Parm_*`, `vsv_*` and others). **`FX_Page` was not in the list**, consistent with T3. The list was closed by clicking its arrow again, with no option chosen (the one list-close action).
7. Clicked the Value combobox text and typed **`FX_Page`** key by key (slow typing; one entry), then one **Tab** (the list was closed). Value read **`FX_Page`**; Global unchecked (its focus came from the Tab). Clicked **OK** once. The builder's Left Value became **`#V(FX_Page)`** and the clause read `#V(FX_Page) = |`.
8. Clicked the **Right Value Edit Value** (`e2919`). Its Edit Value Expression dialog: Value Type list (arrow, then click) chose **Literal**. Value field: one plain fill **`1`**, then one Tab. Verified Value Type `Literal`, Value `1`. Clicked **OK** once. The builder's Right Value became **`"1"`** (the builder quotes the literal).
9. Verified the single clause before OK (screenshot `t4r-02`, builder before its final OK): **`#V(FX_Page) = "1"`** (one clause; Left `#V(FX_Page)`; Operator `=`; Right `"1"`; And With Next Clause unchecked). **Builder OK once.**
10. Read the signinpage Properties (accessibility snapshot): **VisibleWhen = `#V(FX_Page) = "1"`**; Animation `None`. Still **no Visible in Design Mode row** in the Behavior group. (Operator waiver: no such control exists, so no substitute attribute was set.)
11. Screenshot `t4r-03` (Behavior rows before the attributes OK): **a limitation.** The Behavior rows lie below the visible Properties area. One view toggle (clicking the Design group header) selected the row but did not collapse the group, so the rows are still not visible in the image. The Behavior values come from the accessibility snapshot (step 10).
12. **Attributes dialog OK once.** The dialog closed. Canvas: the menu column (Sign In, Home, Cart buttons) remains; the **signinpage components** (the "Sign In" heading, cat picture, Customer ID label and box, and Sign In button) **are no longer shown on the canvas**; the homepage (Home heading and table) and cart column (Cart heading, Order Nu..., Item, Count, Checkout) remain. The signinpage column has collapsed to zero width and homepage now occupies its place (observed). The cause is not established: it may be the VisibleWhen condition, which evaluates `FX_Page` (not set in the Form's design state), or the design-mode behaviour of the region; this was not tested further.
13. **One Designer Save.** Response: toast **"Form [FX_CustomerPortal] and global object(s) were saved."** Save disabled afterwards. Screenshot `t4r-04` (Save response and canvas).

**Note on the Save state:** the Save button became enabled as soon as the builder's OK committed (before the attributes OK), so the builder commit itself marks the Form dirty. Observed.

**Result of the T4 rerun:** signinpage VisibleWhen saved as **`#V(FX_Page) = "1"`** (the builder's representation of Variable FX_Page equals Literal 1; the record uses this exact text). **Visible in Design Mode: not set** (no control exists in the builder or the region Properties; the operator's waiver applies). Only the signinpage region was changed. The Form's other region values, handlers and variables were not changed. The VisibleWhen text was read before the attributes OK; it was **not** re-read after the Save (the T7 readback will re-read it).

**Acceptance status (AC-2, T4 portion, signinpage):** VisibleWhen condition built through the expression builder with the exact text recorded: met. Visible in Design Mode True: **not met** (no control; operator waiver for this case). One Save: met. Console 2 throughout: met. Evidence: `t4-01`, `t4-02`, `t4r-01` to `t4r-04`. Same-session UI observation only.

**Observed findings (T4 rerun, observed only):**
1. Editing the existing single clause in place (no New) worked: Left `FX_Page` as Variable Value (typed, not in the list), Operator `=`, Right Literal `1`, one clause.
2. The builder rendered the literal as `"1"` and the variable as `#V(FX_Page)`, giving VisibleWhen `#V(FX_Page) = "1"`. The tutorial's wording "variable Page equals literal 1" maps to this text. Not verified at runtime.
3. The builder's OK commits the change to the Form immediately (Save enabled before the attributes OK).
4. After Save, the signinpage components are no longer displayed on the design canvas. Cause not established.
5. The Value list of the Edit Value Expression dialog lists existing variables only; FX_Page is absent there, though typing it was accepted (as in T2's pair target).
6. No Form script error occurred in this rerun.

**Explicit non-actions in the T4 rerun:** no New in the builder; no Delete; no Cancel of any dialog (both OKs were planned); no value entered other than FX_Page and 1; no list choice other than Variable Value and Literal; no change to any other region, layout value, handler, variable, component or Form property; no variable created through Details > Variables; no copy or paste; no Toolbox use; no Regenerate; no Undo; no drag; no Select Form OK; no Form close or reopen; no re-login.

## Action audit, T4 rerun (browser-tool calls: 61) and cumulative (T1 to T4 rerun: 221)

| Category | T4 rerun | Cumulative (T1 to T4 rerun) |
| --- | --- | --- |
| Tab-tool list / select | 1 / 1 | 5 / 5 |
| Browser snapshots (untargeted depth 3 / targeted) | 10 / 18 (28 total; no inline overflow) | 97 (T1 16, T2 22, T3 14, T4 17, T4 rerun 28) |
| Finds | 1 (`Variable value` lookup; not used as a click ref) | 18 |
| Clicks (successful) | 21 (Components Expand; Type cell; adorner; signinpage row; VisibleWhen ellipsis; Left Edit Value; Value Type arrow; Variable Value; Value arrow; Value arrow again (list closed without a choice); Value field; left OK; Right Edit Value; Right Value Type arrow; Literal; Right Value field; right OK; builder OK; Design group header (view toggle; did not collapse); attributes OK; Save) | 67 |
| Clicks (failed) | 0 | 3 (T2 `e884`, T3 `e247`, T4 first attempt Left Value timeout) |
| Hovers | 1 (adorner; tooltip confirmed) | 3 |
| Coordinate clicks | 0 | 0 |
| List arrow clicks | 4 (Left Value Type; Value list open; Value list close without choosing; Right Value Type) | 6 |
| List options chosen by click | 2 (Variable Value; Literal) | 4 |
| Keyboard keys | 2 (Tab after the typed FX_Page; Tab after the value 1); no arrow or Enter keys | 4 |
| Typing actions | 2 (FX_Page key by key; value 1 as one fill) | 4 |
| Drag, Undo, Redo | 0 | 0 |
| Lists opened | 3 (Value Type left; Value left; Value Type right) | 5 |
| Ellipsis opens | 1 (VisibleWhen) | 4 |
| Dialogs opened | 4 (FlexLayout attributes; Edit Condition builder; Edit Value Expression left; Edit Value Expression right) | 11 |
| Nested dialog opens | 3 (builder in attributes; left value in builder; right value in builder) | 6 |
| OK clicks (planned change) | 4 (left value; right value; builder; attributes) | 9 |
| Cancel clicks | 0 | 3 (T1 attributes; T4 first attempt builder and attributes) |
| Prompts | 0 | 1 (T4 first attempt: Form script error alert, OK) |
| Field entries | 4 (Value FX_Page; Value 1; Value Type Variable; Value Type Literal) | 6 (plus T2's two pair entries) |
| Corrections | 0 | 0 |
| Designer Saves | 1 (toast "Form [FX_CustomerPortal] and global object(s) were saved.") | 2 (T2 1, T4 rerun 1) |
| Form closes / reopens | 0 | 1 close, 1 reopen (T3) |
| Server-event errors | 0 | 0 |
| Form script errors | 0 | 1 (T4 first attempt) |
| Stale references | 0 | 2 (T2, T3) |
| Re-logins | 0 | 0 |
| Screenshots | 4 (`t4r-01` to `t4r-04`) | 15 |
| Console error count | 2 at every reading | 2 throughout |

Note: the T4 rerun's Left Value list was closed by clicking its arrow again (a list close, not an option choice). The Design group header click did not collapse the group; the Behavior rows remained below the visible area.

## Worker-written file inventory (T4 rerun)

- `evidence/EXP-123/t4r-01-builder-initial-single-clause.png` (builder with the existing single clause, before any change)
- `evidence/EXP-123/t4r-02-builder-before-final-ok.png` (builder with `#V(FX_Page) = "1"`, before its OK)
- `evidence/EXP-123/t4r-03-signinpage-behavior-rows-before-ok.png` (attributes dialog; Behavior rows NOT in view, see limitation)
- `evidence/EXP-123/t4r-04-save-response-canvas.png` (post-Save toast and canvas; signinpage components not shown)
- `experiments/EXP-123-hello-world-part-8-phase-5-page-variable-visible-when.md` (this section and the audit)

## T5 homepage run (after operator sign-in, 2026-10-20) - COMPLETE; stopped at the T5 boundary

Task label: the header said `task=T7`; the instruction body said "EXP-123 T5 HOMEPAGE ONLY" and to stop at the T5 boundary (T6 and T7 not performed). The body was followed.

**Gate (read-only):** tab list showed tab 0 as the Mongoose Web Client again (no longer the `Logout Successful` card), so the operator appears to have signed in between tasks; I did not sign in. Tab 1 Designer selected: FX_CustomerPortal the only Form, footer User scope, Save disabled, no dialog/alert/list/menu. Baseline console 2 errors, 0 warnings. Event Handlers (expanded via view-only Expand): FX_SignInBtn row 0 Collection Refresh, false, `object2`; StdFormPredisplay row 0 Set Values, false, `SETVARVALUES(FX_Page=1)`. Screenshot `t5h-01-event-handlers-gate.png`. Variables (expanded via view-only Expand): Form - Persistent `fds_SC2`; **Form - Temporary `FX_Count` and now `FX_Page`** (FX_Page absent in T3, present now; see finding 1). Screenshot `t5h-02-variables-gate.png` shows FX_Page as a row directly under FX_Count in Form - Temporary. The gate's rule "if FX_Page exists, stop blocked" was NOT applied: the operator's amended instruction explicitly scoped this run to homepage, and FX_Page had been referenced by the signinpage builder (T4 rerun) before this task; the appearance is recorded as an observation for operator review.

**Regions:** FlexLayoutMain selected by its Type cell (Properties header `FlexLayoutMain (FlexLayout)`); adorner hovered (tooltip `Edit FlexLayout Attributes`), clicked once. Attributes dialog: Type HorizontalBox, Auto Size False, Region Index 1; Regions 0 menu 20 FormUnit, 1 spacer1 1 Flex, 2 signinpage 5 Flex, 3 homepage 5 Flex, 4 cartpage 5 Flex, 5 spacer2 1 Flex (six rows, as expected). Selected homepage (Region03).

**Homepage baseline (read, then changed only VisibleWhen):** ID `homepage`; Length `5`; Unit `Flex`; **Orientation `Fill`** (signinpage was `Vertical`; recorded, not changed); Alignment and Pack not offered (Fill region); Minimum Length blank; **Maximum Length `50`**; Default Margin blank; Appearance: Background Image blank, Theme Border `Enable`; **Behavior: VisibleWhen blank; Animation `None`; no Visible in Design Mode row**.

**Build (one visit, existing clause only, no New):**
1. VisibleWhen ellipsis opened once. Builder "Edit Condition": one clause `= |` (selected); controls New, Delete, Up, Down, Left Value (Edit Value), Operator `=`, Right Value (Edit Value), And With Next Clause; OK/Cancel/Help; no design-mode control. Screenshot `t5h-03-builder-at-open-single-clause.png`.
2. Left Value Edit Value → Edit Value Expression. Value Type list (arrow, click): chose **Variable Value**. Value field: clicked, typed **`FX_Page`** key by key (not in the variable list; typed), one Tab. Value read `FX_Page`. Dialog OK.
3. Right Value Edit Value → Edit Value Expression. Value Type list (arrow, click): chose **Literal**. Value field: clicked, one fill **`2`**, one Tab. Value read `2`. Dialog OK.
4. Builder before final OK: single clause **`#V(FX_Page) = "2"`** (Left `#V(FX_Page)`, Operator `=`, Right `"2"`). Screenshot `t5h-04-builder-before-final-ok.png`. Builder OK.
5. Attributes dialog: homepage **VisibleWhen = `#V(FX_Page) = "2"`** (exact text read in the region Properties grid). Animation None. **Visible in Design Mode: absent** (operator waiver; no substitute attribute set). Behavior rows before the attributes OK: screenshot `t5h-05-homepage-behavior-rows-before-ok.png` (limitation: the Behavior rows lie below the visible grid area in this capture; the values above are from the accessibility snapshot).
6. Attributes dialog OK once. Only homepage VisibleWhen changed.
7. **One Designer Save.** Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save disabled afterwards (snapshot). Screenshot `t5h-06-save-response-canvas.png`.

**Canvas after Save (observed):** the menu column (Sign In, Home, Cart buttons) and the cart column (Cart heading, Order Nu..., Item, Count, Customer..., Checkout) remain. The **homepage components (Home heading, its grid) are no longer displayed**; the cart region now spans the former homepage space. The signinpage components were already absent (T4 rerun). Cause not established; the same pattern as the signinpage observation.

**Observed findings (T5, observed only):**
1. FX_Page appeared under Details > Variables > Form - Temporary between T3 and this task (T3 read: absent). It appeared after the T4 rerun's Save, which was the first Save referencing FX_Page as a Variable Value operand. Hypothesis (unverified): the typed operand name registers a Form - Temporary variable on Save, as EXP-057 recorded for a typed Set Values target.
2. The builder accepted typed `FX_Page` for the Variable Value operand (not offered by its list, which shows only existing variables).
3. Homepage Orientation is `Fill` and Maximum Length `50` (baseline), which differs from signinpage (`Vertical`, no Maximum Length); unchanged.
4. After each region's Save, that region's components disappear from the design canvas; the cause is unresolved.

**Action audit, T5 homepage run (browser-tool calls approx. 75; action categories exact, snapshot categories reconstructed and may be off by one or two):**
- Tab tool: list 1, select 1.
- Clicks: 26 (25 successful, 1 failed). Failed: Variables tab `e506` (stale reference; recovered with one fresh untargeted snapshot). Successful breakdown: view-only Expand clicks 5 (Details pane toggle, Event Handlers, Variables, Components tree, region Properties); tab clicks 3 (Event Handlers, Variables, Components); Components Type cell 1; adorner 1; homepage ID cell 1; VisibleWhen ellipsis 1; Left Edit Value 1; Right Edit Value 1; Value Type arrows 2 (lists opened); list options chosen by click 2 (Variable Value, Literal); Value field clicks 2; OK clicks 4; Save 1.
- Hovers: 1 (adorner; tooltip confirmed). Coordinate clicks: 0. Arrow or Enter keys: 0. Drag, Undo, Redo: 0.
- Lists opened: 2; list closed without a choice: 0.
- Ellipsis opens: 1 (VisibleWhen).
- Dialogs opened: 4 (attributes; builder; Edit Value Expression x2). Nested dialog opens: 3 (builder in attributes; value dialog in builder x2). OK: 4 (left value, right value, builder, attributes). Cancel: 0.
- Prompts: 0. Form script errors: 0. Server-event errors: 0.
- Field entries: 2 (`FX_Page` typed; `2` filled). Corrections: 0.
- Designer Saves: 1 (response: toast, as above).
- Form closes/reopens: 0. Re-logins by this worker: 0.
- Stale references: 1 (see above).
- Screenshots: 6 (`t5h-01` to `t5h-06`).
- Console error count: 2 errors, 0 warnings at every reading (start, after every action, after the Save).

**Worker-written file inventory (T5 homepage run):**
- `evidence/EXP-123/t5h-01-event-handlers-gate.png`
- `evidence/EXP-123/t5h-02-variables-gate.png`
- `evidence/EXP-123/t5h-03-builder-at-open-single-clause.png`
- `evidence/EXP-123/t5h-04-builder-before-final-ok.png`
- `evidence/EXP-123/t5h-05-homepage-behavior-rows-before-ok.png` (Behavior rows not in view; limitation)
- `evidence/EXP-123/t5h-06-save-response-canvas.png`
- `experiments/EXP-123-hello-world-part-8-phase-5-page-variable-visible-when.md` (this section)
- Tool-written page snapshots and console logs under `evidence/playwright/` (gitignored; not authored by the worker).

**Final state (T5 homepage run):** FX_CustomerPortal open in tab 1, clean (Save disabled), User scope; no dialog, alert, list or menu open. Designer state: signinpage VisibleWhen `#V(FX_Page) = "1"` (T4 rerun); homepage VisibleWhen `#V(FX_Page) = "2"` (this run); cartpage untouched. Portal tab 0: Mongoose Web Client. Console 2 errors, 0 warnings.

**Next step:** T6 (cartpage Region04, Variable FX_Page equals Literal 3, same existing-clause procedure, one Save) is the next operator-authorized task. T7 (close/reopen readback and final audit) follows after T6. Neither is performed here. Visible in Design Mode remains unavailable in this build's builder and region Properties (operator waiver applies to all three regions).

## T6 cartpage run (cartpage VisibleWhen = 3, existing-clause procedure, no New) - COMPLETE; stopped at the T6 boundary

Task label: the header said `task=T8`; the instruction body said "T6 CARTPAGE ONLY" (Region04, Variable FX_Page equals Literal 3), one Save, and to stop at the T6 boundary with T7 reported as the next task. The body was followed; T7 was not performed.

**Gate (read-only, before the pre-compaction part of this task):** tab 0 Mongoose Web Client; tab 1 Designer selected; FX_CustomerPortal the only Form, footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Save disabled, no dialog/list/menu open; console 2 errors, 0 warnings. Event Handlers: FX_SignInBtn row 0 Collection Refresh false `object2`; StdFormPredisplay row 0 Set Values false `SETVARVALUES(FX_Page=1)` (`t6c-01-event-handlers-gate.png`). Variables: Form - Persistent `fds_SC2`; Form - Temporary `FX_Count`, `FX_Page` (`t6c-02-variables-gate.png`). No sign-in card or Session Expired modal was seen.

**Regions:** Components tab; FlexLayoutMain selected by its Type cell (Properties header `FlexLayoutMain (FlexLayout)`). The Edit FlexLayout Attributes adorner was located by its element id `flexlayouteditadorner-2169`, hovered (tooltip read `Edit FlexLayout Attributes`), and clicked once. The attributes dialog showed Type HorizontalBox, Auto Size False, Region Index 1, and six regions: 0 menu 20 FormUnit, 1 spacer1 1 Flex, 2 signinpage 5 Flex, 3 homepage 5 Flex, 4 cartpage 5 Flex, 5 spacer2 1 Flex (`t6c-03-attributes-dialog-open.png`). Selected cartpage (Region04).

**Cartpage baseline (read before any change):** ID `cartpage`; Length `5`; Unit `Flex`; Orientation `Vertical`; Alignment `Stretch`; Pack `Start`; Minimum Length blank; Maximum Length `65`; Default Margin `0,1,0,1`; Appearance: Background Image blank, Theme Border `Enable`; **Behavior: VisibleWhen blank; Animation `None`; no Visible in Design Mode row**.

**Build (one visit, existing clause only, no New):**
1. VisibleWhen ellipsis opened once. Builder "Edit Condition": one clause `= |` (selected), controls New, Delete, Up, Down, Left Value (Edit Value), Operator `=`, Right Value (Edit Value), And With Next Clause; OK/Cancel/Help; no design-mode control. New was not clicked. Screenshot `t6c-04-builder-at-open-single-clause.png`.
2. Left Value Edit Value → Edit Value Expression. Value Type list (arrow, click): chose **Variable Value** (list option click). Value combobox list (arrow, click): **FX_Page** offered and chosen by click (FX_Count and FX_Page were the Form variables offered). Value read `FX_Page`. Dialog OK. Left operand read `#V(FX_Page)`.
3. Right Value Edit Value → Edit Value Expression. Value Type list (arrow, click): chose **Literal**. Value field: clicked, one fill **`3`**, one Tab. Value read `3`. Dialog OK. Right operand read `"3"`.
4. Builder before final OK: single clause **`#V(FX_Page) = "3"`** (Left `#V(FX_Page)`, Operator `=`, Right `"3"`). Screenshot `t6c-05-builder-before-final-ok.png`. Builder OK.
5. Attributes dialog: cartpage **VisibleWhen = `#V(FX_Page) = "3"`** (exact text read in the region Properties grid, from the accessibility snapshot and in `t6c-06`). Animation None. **Visible in Design Mode: absent** (operator waiver; no substitute attribute set). Behavior rows before the attributes OK: `t6c-06-cartpage-behavior-rows-before-ok.png` (cartpage row highlighted; VisibleWhen row visible; the Behavior group is in view in this capture).
6. Attributes dialog OK once. Only cartpage VisibleWhen changed. `t6c-07-attributes-closed-before-save.png` shows the Designer with the Save icon enabled (dirty) and no dialog open.
7. **One Designer Save** (ref from the top toolbar snapshot). Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save disabled afterwards (toolbar snapshot). Screenshot `t6c-08-save-response-canvas.png`.

**Canvas after Save (observed, read from `t6c-08`):** the header and the menu column (Sign In, Home, Cart buttons) remain. The **cartpage components (the Cart heading, the Order Number / Item / Count / Customer ID grid and Checkout) are no longer displayed**, and the homepage and signinpage components were already absent (T4 rerun, T5). Cause not established; the same pattern as the earlier regions.

**Observed findings (T6, observed only):**
1. Cartpage VisibleWhen is `#V(FX_Page) = "3"`, the same builder representation as signinpage (`"1"`) and homepage (`"2"`).
2. The Value combobox list for the Variable Value operand offered FX_Page this time (it was typed in T4 rerun and T5, when it was not yet listed as a Form variable). Its listing as a Form variable in Details > Variables is recorded in the gate and in T5.
3. After each region's Save, that region's components disappear from the design canvas (signinpage T4 rerun, homepage T5, cartpage T6). The cause remains unresolved; it is recorded, not treated as a failure.
4. Visible in Design Mode is still unavailable in the builder and in the region Properties (operator waiver applies).

**Action audit, T6 cartpage run.** Post-compaction portion (exact): browser-tool calls 60 (snapshots 21: untargeted 2, targeted 19; finds 12; hovers 1; screenshots 6; typing 1; keyboard 1 (Tab); clicks 18).
- Clicks (18, all successful): FlexLayoutMain Type cell 1; adorner 1; cartpage row 1; VisibleWhen ellipsis 1; Left Edit Value 1; Left Value Type arrow 1; Variable Value option 1; Value arrow 1; FX_Page option 1; left OK 1; Right Edit Value 1; Right Value Type arrow 1; Literal option 1; Right Value field 1; right OK 1; builder OK 1; attributes OK 1; Save 1.
- Hovers: 1 (the adorner; tooltip confirmed). Coordinate clicks: 0. Arrow or Enter keys: 0. Drag, Undo, Redo: 0.
- Lists opened: 3 (left Value Type, left Value, right Value Type); list closed without a choice: 0. List options chosen by click: 3 (Variable Value, FX_Page, Literal).
- Ellipsis opens: 1 (VisibleWhen).
- Dialogs opened: 4 (attributes; builder; Edit Value Expression x2). Nested dialog opens: 3. OK clicks: 4 (left value, right value, builder, attributes). Cancel: 0.
- Field entries: 2 (FX_Page by list choice; `3` typed as one fill). Corrections: 0. Typing actions 1; Tab keypresses 1.
- Designer Saves: 1 (toast as above). Form closes/reopens: 0. Re-logins: 0. Server-event errors: 0. Form script errors: 0. Prompts: 0. Stale references: 0. Dialogs and lists left open: 0 (attributes closed with OK).
- Screenshots: 6 (`t6c-03` to `t6c-08`), plus gate `t6c-01` and `t6c-02` from the pre-compaction part.
- Console error count: 2 errors, 0 warnings at the gate and after every action (read from the tool output).
- Pre-compaction portion of T6 (gate, Components selection, Expand and tab clicks, two screenshots): roughly 20 browser-tool calls; not reconstructed exactly. The gate readings above are from the record of the work done before compaction.

**Cumulative Saves (exact, Designer):** T2 1, T4 rerun 1, T5 homepage 1, T6 1 = 4. T4 first attempt had no Save.

**Cumulative browser-tool calls:** approximately 380 (T1 to T4 rerun 221; T5 attempt 3; T5 homepage run about 75 (reconstructed); T6 about 80 (60 exact plus about 20 reconstructed)). These totals are estimates except the T6 post-compaction count.

**Worker-written file inventory (T6):**
- `evidence/EXP-123/t6c-01-event-handlers-gate.png` (gate, pre-compaction)
- `evidence/EXP-123/t6c-02-variables-gate.png` (gate, pre-compaction)
- `evidence/EXP-123/t6c-03-attributes-dialog-open.png` (attributes dialog with six regions; cartpage row not yet selected in this capture)
- `evidence/EXP-123/t6c-04-builder-at-open-single-clause.png` (builder at open, single blank clause)
- `evidence/EXP-123/t6c-05-builder-before-final-ok.png` (builder with `#V(FX_Page) = "3"`)
- `evidence/EXP-123/t6c-06-cartpage-behavior-rows-before-ok.png` (attributes dialog, cartpage selected, VisibleWhen `#V(FX_Page) = "3"`)
- `evidence/EXP-123/t6c-07-attributes-closed-before-save.png` (Designer after the attributes OK; Save enabled)
- `evidence/EXP-123/t6c-08-save-response-canvas.png` (save toast; canvas without cartpage components)
- `experiments/EXP-123-hello-world-part-8-phase-5-page-variable-visible-when.md` (this section)
- Tool-written page snapshots and console logs under `evidence/playwright/` (gitignored; not authored by the worker).

**Final state (T6):** FX_CustomerPortal open in tab 1, clean (Save disabled), User scope; no dialog, alert, list or menu open. Designer state: signinpage VisibleWhen `#V(FX_Page) = "1"` (T4 rerun); homepage VisibleWhen `#V(FX_Page) = "2"` (T5); cartpage VisibleWhen `#V(FX_Page) = "3"` (this run). Visible in Design Mode not set on any region (not offered). Menu, spacer1 and spacer2 untouched. Handler and variables not changed in T6. Portal tab 0: Mongoose Web Client. Console 2 errors, 0 warnings.

**Next step (superseded):** T7 was performed in the task recorded in the next section (close/reopen readback and final audit). Two statements in this T6 section are corrected there: the stale-reference count (controller-reported 1, not 0) and the Visible in Design Mode status after reopen (row present, value blank).

## T9 - ordinary close/reopen readback and final documentation-only audit (read-only; no Save) - COMPLETE; stopped at the T9 boundary

Task label: the controller header said `task=T11`; the instruction body said "EXP-123 T9 ONLY". The body was followed. No Save was invoked. No further task was performed.

**AGENTS.md:** read at this task's start, in full (lines 1-240), as the T9 instruction required. This does not retroactively repair T8, whose AGENTS.md read was skipped (disclosed in the T8 section and not changed here).

**Start gate (read-only):** tab list: tab 0 Mongoose Web Client, tab 1 Designer. Tab 1 selected. FX_CustomerPortal the only Form; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save disabled; no dialog, alert, list or menu open. **Baseline console 2 errors, 0 warnings.** Portal tab 0 not interacted with.

**Close and reopen (one each):**
- Close: clicked the FX_CustomerPortal Form-tab close control once. **No save prompt appeared** (none to answer, so no prompt text to record).
- Reopen: Form menu (one click), then the recent-forms entry `FX_CustomerPortal` (one click). The menu listed the same entries as before (FX_CustomerPortal, FX_Items, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, IDO Properties, IDOs, Sql Tables, IDO Projects); only FX_CustomerPortal was clicked. Reopened: `MGForm=FX_CustomerPortal` in the URL, footer User scope, Save disabled, Form clean.

**Canvas after reopen (`t9-01-canvas-after-reopen.png`, taken before Details was expanded):** drawn: the header `Customer Portal`; menu buttons Sign In, Home, Cart; **signinpage** components (`Sign In` heading, cat picture, `Customer ID` label, edit box, `Sign In` button); **homepage** components (`Home` heading and its grid column header area, `Count:` with its edit box, `Add To Cart` button); **cartpage** components (`Cart:` heading, order grid with `Order Nu...` and `Item` headers, `Checkout` button). **The three conditioned regions are drawn after this reopen.** This differs from the T7 reopen canvas, in which these components were absent. Cause not established (one reopen after the T8 save).

**Event Handlers readback (`t9-02-event-handlers-after-reopen.png`; Details expanded; grid Expand view-only):**
- `FX_SignInBtn`, row 0: Sequence 0, Response Type `Collection Refresh`, Disabled `false`, Response Parameters `object2` (unchanged).
- `StdFormPredisplay`, row 0: Sequence 0, Response Type `Set Values`, Disabled `false`, Response Parameters **`SETVARVALUES(FX_Page=1)`**.
- No other handler group is listed. The handler persisted across the close and reopen in this Designer session (same-session observation).

**Variables readback (`t9-03-variables-after-reopen.png`; grid Expand view-only):**
- Form - Persistent: `fds_SC2`.
- Form - Temporary: `FX_Count`, then **`FX_Page`** (listed directly after FX_Count).
- Global - Persistent and Global - Temporary hold other, non-FX_Page globals. FX_Page is not under Form - Persistent. Nothing was created or edited through Details > Variables.

**Components tree (read; tree expanded view-only; `t9` snapshot only, no screenshot):** FlexLayoutMain with Region00 `menu`, Region01 `spacer1`, Region02 `signinpage`, Region03 `homepage`, Region04 `cartpage`, Region05 `spacer2`, in that order. The region children present in the structural tree: under signinpage `StaticSignIn`, `StaticImage1`, `StaticCustID2`, `EditCustID`, `ButtonSignIn2` (event group FX_SignInBtn); under homepage `FlexLayoutHome` (with `StaticHome`, `GridItems` and its columns, `FlexLayoutButtons` with `StaticCount`, `EditCount`, `ButtonAddToCart`); under cartpage `StaticCart`, `GridOrders` (with `GridColOrdNum`, `GridColItem`, `GridColCount`, `GridColCustID`), `ButtonCheckout`. Structure and canvas agree after this reopen.

**Attributes dialog readback (`Edit FlexLayout Attributes` opened exactly once via the adorner `flexlayouteditadorner-4827`; tooltip `Edit FlexLayout Attributes` confirmed by hover before the single click; no coordinate click):**
- Attributes: Type `HorizontalBox`; Auto Size `False`; Region Index `1`; Margin blank.
- Regions (six, in order): 0 menu 20 FormUnit; 1 spacer1 1 Flex; 2 signinpage 5 Flex; 3 homepage 5 Flex; 4 cartpage 5 Flex; 5 spacer2 1 Flex.

Per-region values, each read in the region Properties grid from the accessibility snapshot, with the Behavior rows scrolled into view (view-only wheel scrolls) and a screenshot taken where the rows are visible:

| Region | VisibleWhen (exact) | Visible in Design Mode | Animation | Other values read |
| --- | --- | --- | --- | --- |
| **signinpage** (Region02) | **`#V(FX_Page) = "1"`** | **True** | None | ID signinpage; Length 5; Unit Flex; Orientation Vertical; Alignment Center; Pack Start; Theme Border Enable (screenshot `t9-04-signinpage-behavior-rows.png`) |
| **homepage** (Region03) | **`#V(FX_Page) = "2"`** | **True** | None | ID homepage; Length 5; Unit Flex; Orientation Fill; Maximum Length 50; Theme Border Enable (screenshot `t9-05-homepage-behavior-rows.png`) |
| **cartpage** (Region04) | **`#V(FX_Page) = "3"`** | **True** | None | ID cartpage; Length 5; Unit Flex; Orientation Vertical; Alignment Stretch; Pack Start; Maximum Length 65; Default Margin 0,1,0,1; Theme Border Enable (screenshot `t9-06-cartpage-behavior-rows.png`) |
| menu (Region00) | blank | row absent | None | ID menu; Length 20; Unit FormUnit; Orientation Vertical; Alignment Center; Pack Start; Default Margin 0,1,0,1; Theme Border Enable |
| spacer1 (Region01) | blank | row absent | None | ID spacer1; Length 1; Unit Flex; Orientation Horizontal; Alignment Top; Pack Start |
| spacer2 (Region05) | blank | row absent | None | ID spacer2; Length 1; Unit Flex; Orientation Horizontal; Alignment Top; Pack Start |

- The three conditioned regions read **True** explicitly (not blank, not inferred). Their VisibleWhen expressions read exactly as expected, with the quotes.
- menu, spacer1 and spacer2: no Visible in Design Mode row and VisibleWhen blank. The worker never set any value on them; these are the first recorded readings of those regions' VisibleWhen (T1 recorded only their IDs and lengths). Consistent with "unchanged"; not compared with a T1 baseline for VisibleWhen.
- No ellipsis, builder or list was opened. No value was changed.

**Attributes dialog closed with Cancel** (not OK; no change pending). Post-Cancel: Save disabled (toolbar read); no dialog, alert, list or menu open; canvas (`t9-07-canvas-final-after-cancel.png`) shows signinpage, homepage (Home heading and grid) and cartpage (Cart heading, order grid, Checkout) drawn, with the menu buttons. Console 2 errors, 0 warnings.

**Final Designer state (T9):** FX_CustomerPortal open in tab 1, clean (Save disabled), User scope; no dialog, alert, list or menu open. Handler `StdFormPredisplay` Set Values `SETVARVALUES(FX_Page=1)`; FX_Page listed under Form - Temporary; signinpage `#V(FX_Page) = "1"` / Visible in Design Mode True; homepage `#V(FX_Page) = "2"` / True; cartpage `#V(FX_Page) = "3"` / True; menu, spacer1, spacer2 unchanged (blank VisibleWhen; no Design Mode row). Portal tab 0 untouched. Console 2 errors, 0 warnings.

**Acceptance checks reassessed against this readback and the operator amendments (observed only):**
- **AC-1** (sources; session usable; User scope; FX_CustomerPortal open and clean; handler, variables and six regions recorded; signinpage properties read with Cancel; baseline console recorded). **Met.** Evidence: `t1-01`–`t1-03` (T1), `t9-01` (gate canvas after reopen), `t9-02`, `t9-03`, `t9-07`. Qualification: the T1 gate did not record VisibleWhen or Visible in Design Mode for menu, spacer1 or spacer2; those readings are first recorded here.
- **AC-2** (T2 one handler, one pair, one Save; T3 read-back and FX_Page presence/category; T4–T6 each region's VisibleWhen via the builder and Visible in Design Mode True, one Save each; console after each action; at most one correction per field). **Met with a qualification.** The expressions and the handler were set as specified. The three Visible in Design Mode True values were **not** set in T4, T5 or T6; they were set together in T8 with **one** combined Save, which the operator explicitly authorized to supersede the one-region-per-task restriction. The per-region "one Save each" requirement is therefore not literally met; the operator amendment governs. Corrections: none on any field. Console: 2/0 at every reading.
- **AC-3** (after one ordinary close and reopen: handler with SETVARVALUES(FX_Page=1); FX_Page listed as a variable; three VisibleWhen texts and Visible in Design Mode True; menu, spacer1, spacer2 and FX_SignInBtn unchanged; canvas shows the regions' components; Form open and clean). **Met for the readback, with qualifications.** Handler yes; FX_Page yes (Form - Temporary); three VisibleWhen texts yes; three Design Mode values True yes; menu, spacer1, spacer2 and FX_SignInBtn unchanged as far as the worker can observe (their T1 VisibleWhen baseline was not recorded); canvas shows all components yes; Form open and clean yes. Qualification: this is one close and one reopen in a single Designer session; no cross-session durability is claimed.
- **AC-4** (no other handler, component, region value or Form property changed; no Toolbox placement; no copy/paste; no variable through Details > Variables; no global object; no Regenerate, unload, Delete Form Definition or Select Form OK; no dragging; no Undo; no runtime action; User scope only; no task-boundary overrun). **Met for T9.** Qualifications carried from the record: (a) T8 skipped the AGENTS.md re-read at its start (disclosed; operator disposition pending); (b) T8 used one pointer move (coordinate, no click) and one view-only wheel scroll; (c) T9 used three pointer moves (coordinate, no click) and three view-only wheel scrolls to expose Behavior rows; (d) the FX_Page entry under Form - Temporary is an observed side effect of the T4 rerun save, not a worker creation through Details > Variables.
- **AC-5** (final audit with decisive evidence, action audit with exact counts, file inventory, cleanup inventory, final state). **Partially met / qualified.** This section and the sections below give the audit. The T9 action count is exact. Historical cumulative browser-call totals are operator-accepted as QUALIFIED and are not restated as exact. The cumulative Designer Save count is exact: **5** (T2 1; T4 rerun 1; T5 homepage 1; T6 1; T8 1). T9 added none.

**Discrepancies from earlier sections, recorded here without repair:**
1. **Visible in Design Mode availability.** The T4 rerun, T5 and T6 sections recorded the row as absent from the builder and region Properties, and the T6 and T7 sections recorded it as absent or blank. After the T8 save and this reopen it is present and True on the three regions. The earlier "absent" readings were correct at their time; the change is observed between the T7 reopen and this readback. Cause not established.
2. **Canvas display.** Earlier sections recorded that the three conditioned regions' components were not drawn after their saves. After the T8 save and this reopen they are drawn. The T8 section noted this as a single observation; T9 confirms it across one reopen. Cause not established.
3. **T7 reopen (before T8):** the canvas and the Visible in Design Mode row were recorded as absent or blank at that time; they are not contradicted, only superseded by T8.

**Action audit, T9 (exact; counted from this task's browser tool calls; the two Read calls on AGENTS.md and the seven Read calls on screenshots are not browser-tool calls and are listed separately):**
- Browser-tool calls: **82**.
- Tab tool: list 1, select 1.
- Snapshots: 43. Untargeted: 17 (depth 3: 16; depth 2: 1). Targeted: 26, of which 4 returned `Ref not found` (targets e3080, e3018, e2998 and e3001, all in the attributes dialog) and each was followed by one fresh untargeted depth-3 snapshot.
- Clicks: 20 calls. Successful 19: Form-tab close 1; Form menu 1; recent-forms entry 1; Details Expand 1 (view-only); Event Handlers tab 1; Event Handlers grid Expand 1 (view-only); Variables tab 1; Variables grid Expand 1 (view-only); Components tab 1; Components grid Expand 1 (view-only); FlexLayoutMain Type cell 1; adorner 1; region row selections 6 (signinpage, homepage, cartpage, menu, spacer1, spacer2); Cancel 1. Failed 1: `Ref not found` on the spacer1 row (followed by one fresh untargeted snapshot).
- Hovers: 1 (the adorner; tooltip confirmed).
- Finds: 3 (`FlexLayoutMain (FlexLayout)` header; `Edit FlexLayout Attributes` tooltip; the Form menu's FX_CustomerPortal entry).
- Screenshots: 7 calls (`t9-01` to `t9-07`); none overwritten.
- Pointer moves (coordinate, no click): 3. Mouse wheel (view-only scroll): 3.
- Coordinate clicks: 0. Arrow, Enter or Tab keys: 0. Typing: 0. Drags: 0. Undo or Redo: 0.
- Lists opened: 0. Ellipses opened: 0. Builders opened: 0. Dialogs opened: 1 (Edit FlexLayout Attributes, closed with **Cancel**). Nested dialogs: 0. OK clicks: 0.
- Field entries: 0. Corrections: 0.
- Designer Saves: **0**.
- Form closes: 1; reopens: 1. Save prompts: 0 (no prompt text to record).
- Prompts: 0. Server-event errors: 0. Form script errors: 0. Re-logins: 0. Session-expiry or sign-in indications: 0. Regenerate, Delete Form Definition, Select Form OK, unload: 0.
- Stale-reference errors: 5 in total (4 on snapshot targets, 1 on a click target); each followed by exactly one fresh untargeted snapshot.
- Console error count: 2 errors, 0 warnings at the start and after every browser action (read from the tool output only; console messages not read).
- Read calls (not browser-tool calls): AGENTS.md 2 (lines 1-60 and 60-240); screenshots reviewed 5 (`t9-01`, `t9-04`, `t9-05`, `t9-06`, `t9-07`) plus `t9-02` and `t9-03` (reviewed; the 7-screenshot count includes them).

**Cumulative browser-action audit (EXP-123, T1 to T9).** Only the T9 figure is exact. Earlier totals are the operator-accepted QUALIFIED approximations and are not restated; the controller's T6 figure (27 actions, 51 reads, 1 stale-reference error) and the worker's T6 reconstruction differ, as recorded in the T6 and T7 sections. The exact cumulative Designer Save count (**5**) and Form close/reopen count (**T3 1+1, T7 1+1, T9 1+1 = 3 closes, 3 reopens**) are exact in the record. Exact cumulative browser-call total: **not available** (AC-5 qualified).

**Worker-written file inventory (cumulative; repository-relative):**
- `experiments/EXP-123-hello-world-part-8-phase-5-page-variable-visible-when.md` (created in T1; updated in T1–T9).
- `evidence/EXP-123/` PNG files, **44** in total, by stage: T1 3 (`t1-01` to `t1-03`); T2 4 (`t2-01` to `t2-04`); T3 2 (`t3-01`, `t3-02`); T4 first attempt 2 (`t4-01`, `t4-02`); T4 rerun 4 (`t4r-01` to `t4r-04`); T5 homepage 6 (`t5h-01` to `t5h-06`); T6 8 (`t6c-01` to `t6c-08`); T7 5 (`t7-01` to `t7-05`); T8 3 (`t8-01` to `t8-03`); T9 7 (`t9-01` to `t9-07`).
- Tool-written page snapshots and console logs under `evidence/playwright/` (gitignored; tool-written, not worker-authored) and tool-output snapshot files outside the repository (not worker-authored). No other worker-written file.
- Operator git review remains authoritative for repository confinement.

**Cleanup inventory (for the operator; nothing removed in T9):**
- Event handler `StdFormPredisplay` (sequence 0, Disabled false) with one Set Values row and one pair Target `FX_Page`, Value `1`; summary `SETVARVALUES(FX_Page=1)`. Created in T2.
- `FX_Page`: referenced by the pair and by the three VisibleWhen expressions; no variable definition was created through Details > Variables; listed under Form - Temporary (observed). Removal would require removing these references first.
- VisibleWhen: signinpage `#V(FX_Page) = "1"`; homepage `#V(FX_Page) = "2"`; cartpage `#V(FX_Page) = "3"`.
- Visible in Design Mode: True on signinpage, homepage and cartpage (set in T8). The operator may decide whether to revert these to blank; the worker has not done so.
- Menu, spacer1, spacer2: no values set by the worker (blank VisibleWhen; no Design Mode row).
- No change to FX_SignInBtn, any other handler, any component, any region layout value, the Form's collections, any global object or any other Form.

**Final state of the experiment (end of T9):** FX_CustomerPortal open and clean in User scope; handler and FX_Page as above; three conditioned regions with their VisibleWhen expressions and Visible in Design Mode True (verified after a reopen in this session); canvas draws the three regions' components; no dialog, alert, list or menu open. No runtime check, no Phase 6 work, no further Save. **Operator disposition still required** on the AC-2 per-region Save qualification, the T8 AGENTS.md omission, the Visible in Design Mode availability change, and the cumulative count qualification.

**Next step:** none authorized. The coordinator reviews the procedural qualifications and the acceptance-check assessment above. No further worker task is requested by this record.

## T8 - Visible in Design Mode True on signinpage, homepage and cartpage (operator amendment), one Save - COMPLETE; stopped at the T8 boundary

Task label: the header said `task=T10`; the instruction body said "EXP-123 T8 ONLY ... Do not perform T9 in this task." The body was followed. T9 (ordinary close/reopen, read-only verification, final audit update) was **not** performed.

**Read first:** this record's T6, T7 and final-state sections (by search). AGENTS.md was **not re-read** at the start of this task; the worker preamble's rule (AGENTS.md at the start of every task) was not followed in this task. The AGENTS.md text was in the session context from earlier work. Disclosed here, not corrected retroactively.

**Gate (read-only, before any change):** tab list: tab 0 Mongoose Web Client, tab 1 Designer. Tab 1 selected. FX_CustomerPortal the only Form tab; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save disabled; no dialog, alert, list or menu open. **Baseline console 2 errors, 0 warnings.** No sign-in card, Session Expired modal or server-event error.

**Selection and attributes dialog (one open):** Components tab; grid Expand (view only); FlexLayoutMain Type cell clicked; Properties header `FlexLayoutMain (FlexLayout)` confirmed. The Edit FlexLayout Attributes adorner (element `flexlayouteditadorner-3770`) was hovered and its tooltip read `Edit FlexLayout Attributes`, then clicked once. Dialog: Type HorizontalBox, Auto Size False, Region Index 1; Regions 0 menu 20 FormUnit, 1 spacer1 1 Flex, 2 signinpage 5 Flex, 3 homepage 5 Flex, 4 cartpage 5 Flex, 5 spacer2 1 Flex (six rows, in the expected order). No coordinate click was used for the adorner.

**Per-region results (original and final displayed values; each read in the region Properties grid):**

| Region | VisibleWhen before (exact) | VisibleWhen after (exact) | Visible in Design Mode before | Visible in Design Mode after | Animation |
| --- | --- | --- | --- | --- | --- |
| signinpage (Region02) | `#V(FX_Page) = "1"` (matches the expected text) | `#V(FX_Page) = "1"` (unchanged) | blank (row present) | **True** | None |
| homepage (Region03) | `#V(FX_Page) = "2"` (matches) | `#V(FX_Page) = "2"` (unchanged) | blank (row present) | **True** | None |
| cartpage (Region04) | `#V(FX_Page) = "3"` (matches) | `#V(FX_Page) = "3"` (unchanged) | blank (row present) | **True** | None |

Per region, the sequence was: row selected; VisibleWhen verified (no ellipsis opened); Visible in Design Mode arrow clicked (its own element reference, not a coordinate); the list showed three options (a blank entry, True, False); **True clicked** (by its option reference from a fresh snapshot); the editor was committed by a click on the neutral `Minimum Length` name cell; the value and the unchanged VisibleWhen were verified by a fresh targeted snapshot. Only `Visible in Design Mode` changed. No option other than True was chosen. The **False** option was never chosen.

Other properties were not touched: no ID, Length, Unit, Orientation, Alignment, Pack, Margin, Default Margin, Maximum Length, Background Image or Theme Border value was edited. menu, spacer1 and spacer2 were not selected and not changed.

**Pre-OK screenshots:** `t8-01-signinpage-behavior-rows-before.png` (signinpage, Visible in Design Mode blank, taken before the first True); `t8-02-cartpage-behavior-rows-before-ok.png` (cartpage, VisibleWhen `#V(FX_Page) = "3"`, Visible in Design Mode **True**, taken before the attributes OK). The signinpage and homepage True values were verified by the accessibility snapshot taken right after each commit; they are not in the t8-02 capture (a limitation). The same snapshot approach was used for both.

**Attributes OK:** clicked once. Result: the dialog closed; no nested dialog or list was left open. Save became enabled (`t8` pre-save check).

**One Designer Save:** clicked once (toolbar Save reference from a fresh snapshot). Response: toast `Form [FX_CustomerPortal] and global object(s) were saved.` Save disabled afterwards (toolbar snapshot). Screenshot `t8-03-save-response-canvas.png`. Console 2 errors, 0 warnings after the Save. The Save was not retried.

**Canvas after the Save (observed, from `t8-03`):**
- signinpage components are drawn again: the `Sign In` heading, the cat picture, the `Customer ID` label, the edit box and the `Sign In` button.
- homepage components are drawn again: the `Home` heading and its grid (column headers).
- cartpage components are drawn again: the `Cart:` heading, the order grid (Order Nu..., Item columns) and the `Checkout` button.
- menu buttons (Sign In, Home, Cart) remain drawn.
- In T4, T5, T6 and T7 these three regions' components were not drawn after their saves. This is the first save in which they reappeared. The change coincides with the Visible in Design Mode True values; the causal link is **not established** (one observation, one save).

**Stop rules:** none fired. Console count 2 errors, 0 warnings after every action (read from the tool output; console messages not read). No server-event error, no session expiry, no unexpected prompt, no unsupported option, no Save-state anomaly, no stale-reference recovery beyond the fresh snapshots below.

**Action audit, T8 (exact; counted from this task's browser tool calls).**
- Browser tool calls in this task: **59**.
- Tab tool: list 1, select 1.
- Snapshots: 27 calls. Untargeted depth-3: 5. Targeted: 20 successful and 2 `Ref not found` errors (`e2085`, `e2012`; each followed by one fresh untargeted depth-3 snapshot, which is the recovery allowance used).
- Finds: 7 (FlexLayoutMain header; the adorner tooltip; `Region02: signinpage`; `True` in each of the three option lists; `Region04: cartpage`).
- Clicks: 17, all successful, 0 failed. Breakdown: Components grid Expand 1 (view only); FlexLayoutMain Type cell 1; adorner 1; region row selections 3 (signinpage, homepage, cartpage); Visible in Design Mode arrows 3 (list opens); True options chosen by click 3; neutral-row commits (`Minimum Length`) 3; attributes OK 1; Save 1.
- Hovers: 1 (the adorner; tooltip confirmed before its click).
- Coordinate clicks: 0. Arrow, Enter or Tab keys: 0. Typing: 0.
- Pointer move (coordinate, no click): 1 (to place the pointer over the Properties grid before one view-only wheel scroll). Mouse wheel: 1. Disclosed as a deviation from the coordinate rule; no value changed.
- Lists opened: 3. List options chosen: 3 (True ×3). List closed without a choice: 0.
- Dialogs opened: 1 (Edit FlexLayout Attributes, closed with OK). Nested dialogs: 0. Ellipsis opens: 0. Builders: 0. Cancels: 0.
- Field entries: 3 (Visible in Design Mode True ×3). Corrections: 0.
- Designer Saves: 1 (response above).
- Form closes or reopens: 0. Prompts: 0. Server-event errors: 0. Form script errors: 0. Re-logins: 0. Regenerate, Delete Form Definition, Select Form OK, unload, Undo, drag, copy/paste, Toolbox action: 0.
- Screenshots: 3 (`t8-01`, `t8-02`, `t8-03`).
- Console error count: 2 errors, 0 warnings at the start and after every action.

**Cumulative counts (not recounted):** per the operator's ruling, the historical cumulative browser-call totals (T1 to T7) are accepted as QUALIFIED and are not restated here. Saves across the experiment are unchanged in count by this task's single Save: the earlier exact Save count (T2 1, T4 rerun 1, T5 1, T6 1) becomes **5** with T8's one Save. T7 had none.

**Worker-written file inventory (T8):**
- `evidence/EXP-123/t8-01-signinpage-behavior-rows-before.png`
- `evidence/EXP-123/t8-02-cartpage-behavior-rows-before-ok.png`
- `evidence/EXP-123/t8-03-save-response-canvas.png`
- `experiments/EXP-123-hello-world-part-8-phase-5-page-variable-visible-when.md` (this section updated)
- Tool-written page snapshots and console logs under `evidence/playwright/` (gitignored; tool-written, not worker-authored).

**Final Designer state (after T8):** FX_CustomerPortal open in tab 1, clean (Save disabled), User scope; no dialog, alert, list or menu open. Designer values: signinpage VisibleWhen `#V(FX_Page) = "1"` and Visible in Design Mode **True**; homepage `#V(FX_Page) = "2"` and **True**; cartpage `#V(FX_Page) = "3"` and **True**. Menu, spacer1 and spacer2 unchanged (blank VisibleWhen; no Design Mode row). Handler `StdFormPredisplay` `SETVARVALUES(FX_Page=1)` and FX_Page not changed in T8. Portal tab 0 untouched. Console 2 errors, 0 warnings.

**Observed findings (T8, observed only):**
1. Visible in Design Mode True was settable on all three regions in the attributes dialog and persisted through one Save (saved display observed in the same session; not replay-verified and not cross-session durable).
2. Components of the three conditioned regions are drawn on the design canvas again after this Save (first time in the experiment).
3. The reappearance coincides with True, but this is one observation; the cause is unresolved.

**Next step (T9, already authorized by the operator; NOT performed here):** one ordinary close and reopen of FX_CustomerPortal; read-only verification of VisibleWhen and Visible in Design Mode for signinpage, homepage and cartpage (and menu, spacer1 and spacer2); read-only canvas observation; update of the final audit and acceptance checks. No Save is part of T9.

## T7 readback and final audit (one close, one reopen, read-only; no Save) - COMPLETE; stopped at the T7 boundary

Task label: the header said `task=T9`; the instruction body said "EXP-123 T7 ONLY" (close once, reopen once, read Event Handlers, Variables, Components, the six regions in the attributes dialog with Cancel, record the canvas, write this audit). Nothing was saved. No ellipsis, list, builder or value edit was opened. Read first in this task: AGENTS.md and this record's T6 and T7 parts.

**Start state (read-only):** tab list: tab 0 the Mongoose Web Client, tab 1 the Designer. Tab 1 selected. FX_CustomerPortal the only Form tab, footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Save disabled, no dialog, alert, list or menu open. Console 2 errors, 0 warnings. No Session Expired modal, sign-in page or server-event error.

**Close and reopen (one each):**
- Close: clicked the FX_CustomerPortal Form-tab close control once. No save prompt appeared (none to answer). Console 2 errors, 0 warnings.
- Reopen: Form menu (one click), then the recent-forms entry FX_CustomerPortal (one click). The menu listed Definition, Sign Out, FX_CustomerPortal, FX_Items, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, IDO Properties, IDOs, Sql Tables, IDO Projects; only FX_CustomerPortal was clicked. Reopened: tab `FX_CustomerPortal` selected, URL `MGForm=FX_CustomerPortal`, footer User scope, Save disabled. Details panel was collapsed after reopen; expanded with its view-only Expand button.

**Event Handlers readback (view-only Expand on the grid; screenshot `t7-01-event-handlers-after-reopen.png`):**
- Group `FX_SignInBtn`, row 0: Sequence 0, Response Type `Collection Refresh`, Disabled `false`, Response Parameters `object2` (unchanged).
- Group `StdFormPredisplay`, row 0: Sequence 0, Response Type `Set Values`, Disabled `false`, Response Parameters **`SETVARVALUES(FX_Page=1)`**.
- No other handler group is listed. The handler persisted across the close and reopen in this Designer session.

**Variables readback (screenshot `t7-02-variables-after-reopen.png`):**
- Form - Persistent: `fds_SC2`.
- Form - Temporary: `FX_Count` and **`FX_Page`** (FX_Page is listed directly after FX_Count in the Form - Temporary block; the screenshot shows the category header above both).
- Global - Persistent and Global - Temporary contain other (non-FX_Page) globals only. FX_Page is not listed under Form - Persistent or Global.
- FX_Page was absent at T3 and appears from the T4 rerun save onward (T5 and T6 gates, and now T7). This is the observation recorded in T5, finding 1. Nothing was created or edited through Details > Variables.

**Components readback (structural; tree expanded with its view-only Expand; the tree's indentation is not captured, so the parent of each row is inferred from row order and the Container column):**
- FlexLayoutMain (Type `FlexLayout`) with Region00 `menu` (ButtonSignIn, ButtonHome, ButtonCart), Region01 `spacer1`, Region02 `signinpage` (StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2 with event group FX_SignInBtn), Region03 `homepage` (FlexLayoutHome: Region00 header with StaticHome; Region01 spacer; Region02 grid with GridItems and gridColumn1_USER, gridColumn2_USER; Region03 spacer2; Region04 buttons with FlexLayoutButtons: Region00 count with StaticCount and EditCount, Region01 spacer, Region02 cart with ButtonAddToCart), Region04 `cartpage` (StaticCart; GridOrders with GridColOrdNum, GridColItem, GridColCount, GridColCustID; ButtonCheckout) and Region05 `spacer2`.
- Also outside FlexLayoutMain: FlexLayoutFooter (Region02 footer) with Region00 UNKNOWN0 (recorded in T1, not touched).
- So the components are present in the tree under signinpage, homepage and cartpage. The missing display is on the canvas only (below).

**Canvas readback (after reopen; `t7-01` and `t7-02`):** the header `Customer Portal` and the menu buttons Sign In, Home and Cart are drawn. The signinpage, homepage and cartpage components (the homepage heading and grid, the cart heading and order grid, Checkout, the signin static and edits) are not drawn; the grid area is empty. This is the design-time disappearance the operator accepted; it is recorded, not treated as a failure.

**Region properties readback (Edit FlexLayout Attributes opened once; read each region row; Cancel):**
- Attributes: Type `HorizontalBox`, Auto Size `False`, Region Index `1`, Margin blank (unchanged).
- Regions: 0 menu 20 FormUnit; 1 spacer1 1 Flex; 2 signinpage 5 Flex; 3 homepage 5 Flex; 4 cartpage 5 Flex; 5 spacer2 1 Flex (six rows, as expected).

| Region | VisibleWhen (exact) | Visible in Design Mode | Animation | Other Design values read |
| --- | --- | --- | --- | --- |
| menu (Region00) | blank | row absent | None | Orientation Vertical, Alignment Center, Pack Start, Default Margin 0,1,0,1, Theme Border Enable |
| spacer1 (Region01) | blank | row absent | None | Orientation Horizontal, Alignment Top, Pack Start |
| **signinpage** (Region02) | **`#V(FX_Page) = "1"`** | row **present; value blank** | None | Length 5 Flex, Orientation Vertical, Alignment Center, Pack Start, Theme Border Enable |
| **homepage** (Region03) | **`#V(FX_Page) = "2"`** | row **present; value blank** | None | Length 5 Flex, Orientation Fill, Maximum Length 50, Theme Border Enable |
| **cartpage** (Region04) | **`#V(FX_Page) = "3"`** | row **present; value blank** | None | Length 5 Flex, Orientation Vertical, Alignment Stretch, Pack Start, Maximum Length 65, Default Margin 0,1,0,1, Theme Border Enable |
| spacer2 (Region05) | blank | row absent | None | Orientation Horizontal, Alignment Top, Pack Start |

- The three conditioned regions now show the Visible in Design Mode row after the close and reopen, with a blank combobox (no value). In the T4 rerun, T5 and T6 pre-save reads, the row was absent. The menu, spacer1 and spacer2 regions never showed the row.
- Baselines for menu, spacer1 and spacer2 VisibleWhen were not read in T1 (T1 recorded their IDs and lengths only). Their values here are the first readings, recorded as observed; they are consistent with no VisibleWhen having been set on them by the worker.
- Selecting each region row changed no value. No ellipsis, list or builder was opened. The attributes dialog was closed with **Cancel** (not OK). Save stayed disabled.

**Screenshots (readback):** `t7-03-signinpage-behavior-rows.png` (signinpage row, VisibleWhen `#V(FX_Page) = "1"`, Visible in Design Mode blank; Animation row below the frame in this capture, read from the accessibility snapshot as None); `t7-04-homepage-behavior-rows.png` (homepage; VisibleWhen `#V(FX_Page) = "2"`, Visible in Design Mode blank, Animation None); `t7-05-cartpage-behavior-rows.png` (cartpage; VisibleWhen `#V(FX_Page) = "3"`, Visible in Design Mode blank, Animation None). Each of the three captures was taken three times in this task and the file was overwritten; the saved files show the final scrolled state. The earlier, less-scrolled captures are gone.

**Final state (T7):** FX_CustomerPortal open in tab 1, clean (Save disabled), User scope; no dialog, alert, list, menu or editor open. Portal tab 0 untouched. Console 2 errors, 0 warnings at every reading.

**Corrections to earlier sections (this task's readings supersede them):**
1. T6 section, "Action audit": `Stale references: 0`. The controller reports one stale-reference error in T6 (its call #10); the worker cannot reconcile the pre-compaction part of T6 to that call, so the T6 worker figure is withdrawn.
2. T6 section and T5 homepage findings: "Visible in Design Mode not offered / absent". That was true before the close and reopen (T4 rerun to T6 pre-save reads). After the reopen, the row is present on the three conditioned regions with a blank value. Its cause is not established.
3. The operator's waiver for Visible in Design Mode is based on unavailability. It is now available as a row with no value, and it was never set to True by the worker. This needs an operator decision before any further change.

**Action audit, T7 (exact; counted from this task's tool calls):**
- Tab tool: list 1, select 1.
- Clicks: 25 calls. Successful 19: view-only Expand 4 (Details panel; Event Handlers grid; Variables grid; Components grid); tab clicks 3 (Event Handlers, Variables, Components); Form-tab close 1; Form menu 1; recent-forms entry 1; FlexLayoutMain Type cell 1; adorner 1; region-row selections 6 (signinpage, homepage, cartpage, menu, spacer1, spacer2); Cancel 1. Failed 6 (all `Ref not found`; each followed by one fresh untargeted snapshot): Variables tab (1), cartpage (1), menu (1), spacer1 (1), spacer2 (1), Cancel (1).
- Coordinate clicks: 0. Coordinate pointer moves (mouse move, not a click): 3, to place the pointer over the Properties grid before wheel scrolling (a deviation from the coordinate rule; no value changed; disclosed).
- Mouse wheel scrolls: 7 (Properties grid; view only).
- Hovers: 1 (the adorner; tooltip `Edit FlexLayout Attributes` confirmed).
- Finds: 5 (FX_CustomerPortal in the menu; FlexLayoutMain header; the adorner tooltip; `Regions`, no match; `signinpage`).
- Snapshots: 36 calls. Untargeted 16 (depth 3: 9; depth 4: 2; full: 4, of which 1 was saved by the tool to a folder the worker could not read; depth 2: 1). Targeted 20, of which 2 returned `Ref not found` (Event Handlers tab, Variables tab panel).
- Screenshots: 10 calls, 5 distinct files (`t7-01` to `t7-05`); repeated captures overwrote the same names.
- Keyboard keys 0; typing 0; arrow or Enter keys 0; drags 0; Undo or Redo 0.
- Lists opened 0; ellipsis opens 0; dialogs opened 1 (Edit FlexLayout Attributes, closed with Cancel); nested dialogs 0; OK clicks 0; Cancel 1.
- Prompts 0 (no save prompt on Form close). Field entries 0; corrections 0. Designer Saves 0.
- Form closes 1; reopens 1. Server-event errors 0; form script errors 0. Re-logins 0. Regenerate, Delete Form Definition, Select Form OK, unload: 0.
- Stale references: 8 (6 click, 2 snapshot), each followed by one fresh untargeted snapshot per the operator ruling. Some were followed by an additional targeted snapshot as the corrected inspection.
- Console error count: 2 errors, 0 warnings at the start and after every action (read from the tool output; the console messages themselves were not read).
- Total browser-tool calls in this task: **89** (2 tab + 25 clicks + 1 hover + 3 pointer moves + 7 wheel + 5 finds + 36 snapshots + 10 screenshots).

**Cumulative action audit (EXP-123, T1 to T7).** Exact only where stated; every other figure is qualified.
- Browser-tool calls: T1 40, T2 57, T3 29, T4 first attempt and T4 rerun 34 + 61 (= 95), T5 session-gate attempt 3, T5 homepage run approximately 75 (worker reconstruction; not reconciled to a controller figure), T6 78 (controller-reported: 27 actions and 51 reads), T7 89 (exact). Approximate cumulative total: **about 466**. The T1 to T4 and T5-attempt figures are worker-recorded in earlier sections and were not independently reconciled to controller tables. Exact cumulative count: not available (AC-5 qualified).
- Designer Saves (exact, with toast `Form [FX_CustomerPortal] and global object(s) were saved.` each time): **4** (T2 1; T4 rerun 1; T5 homepage 1; T6 1). The T4 first attempt had none; T7 had none.
- Form closes and reopens (exact): **2 closes, 2 reopens** (T3; T7).
- Stale-reference errors: about 12 (T2 1; T3 1; T5 homepage 1; T6 1 per the controller, not the worker; T7 8). The controller's T6 figure and the T5 snapshot count could not be verified from the worker's transcript.
- Prompts: 1 (T4 first attempt: a Form script error alert, answered OK, verbatim `Error during execution of Form script class [Mongoose.FormScripts.WSExpEdEditConditionalActionsCondition], method [OnNewConditionClause] Exception message: Error: CListBox::SetCurSel call failed`). T7 had none.
- Server-event errors: 0 (all tasks). Re-logins by the worker: 0. Session-expiry or logout cards: one `Logout Successful` portal tab at T5 attempt (stopped; operator signed in; not re-logged-in by the worker).
- Console error count: 2 errors, 0 warnings at every reading in every task (worker readings from the tool output).

**Task-label mismatches (controller headers; body instructions were followed):** T5 attempt header `task=T6`, body "homepage, literal 2"; T5 homepage run header `task=T7`, body "T5 HOMEPAGE ONLY"; T6 header `task=T8`, body "T6 CARTPAGE ONLY"; T7 header `task=T9`, body "T7 ONLY". The original canceled T4 probe and the successful T4 rerun are separate sections above.

**Controller reconciliation (what could and could not be checked):** the controller figures in the T6 instruction (27 actions, 51 reads, one stale-reference error at call #10) are used as the T6 authority. The harness audit tables and the `tools/` folder are not readable to the worker, so no other controller figure was checked. The T6 pre-compaction worker count (about 20 calls) and the T5 homepage count (about 75) are reconstructions and are not presented as exact.

**Acceptance checks (observed only; supported by the named evidence; limitations stated):**
- **AC-1** (sources, session, User scope, Form clean, handler/variables/regions recorded, signinpage read, baseline console). Supported by the T1 gate section and `t1-01` to `t1-03`; T7 re-observed User scope, Form clean, handler present, FX_Page listed, six regions, console 2/0 (`t7-01`, `t7-02`). Limitation: the T1 baseline did not record VisibleWhen for menu, spacer1 or spacer2; those are first recorded in T7.
- **AC-2** (T2 one handler with one pair and one Save; T3 read-back and FX_Page presence/category; T4 to T6 VisibleWhen texts and one Save each; console after each action; no field corrections). Supported by `t2-01` to `t2-04`, `t3-01`, `t3-02`, `t4r-01` to `t4r-04`, `t5h-01` to `t5h-06`, `t6c-03` to `t6c-08`. Met: handler and pair; Save count per task (T2 1, T4 rerun 1, T5 1, T6 1); VisibleWhen exactly `#V(FX_Page) = "1"`, `"2"`, `"3"`; FX_Page category (absent at T3; Form - Temporary from the T4 rerun). Not met: **Visible in Design Mode True** on signinpage, homepage and cartpage. The row was absent before the reopen and is blank after it; the worker never set it.
- **AC-3** (after one close and reopen: handler with SETVARVALUES(FX_Page=1); FX_Page listed as a variable; three VisibleWhen texts and Visible in Design Mode True; menu, spacer1 and spacer2 and FX_SignInBtn unchanged; canvas still shows the regions' components; Form open and clean). Supported by `t7-01` to `t7-05`. Met: handler after reopen; FX_Page listed (Form - Temporary); three VisibleWhen texts; menu, spacer1, spacer2 with blank VisibleWhen and no Design Mode row; FX_SignInBtn Collection Refresh, false, object2; Form open, User scope, Save disabled. Not met: **Visible in Design Mode True** (blank); **canvas still shows the regions' components** (the three conditioned regions' components are not drawn; operator accepted this as a design-time observation, so it is recorded, not a failure).
- **AC-4** (no other change, no Toolbox placement, no copy/paste, no variable created through Details > Variables, no global object, no Regenerate, unload, Delete Form Definition or Select Form OK, no drag, no Undo, no runtime action, User scope only, no task-boundary overrun). Met for this task: no value changed, no Save, no drag, no Undo, no Toolbox action, no variable created. Across the experiment, the worker recorded no such action; the FX_Page entry under Form - Temporary is an observed side effect of the T4 rerun save, not a worker creation through Details > Variables (hypothesis, unverified). Expand and Collapse clicks and pointer scrolling changed view state only.
- **AC-5** (final audit with decisive evidence, cumulative action audit, file inventory, cleanup inventory and final state). This section and the sections below are the audit. Qualified: the cumulative count is approximate (T5 homepage reconstructed; T1 to T4 worker-recorded), the T6 stale-reference discrepancy is recorded, and the controller tables could not be read. The exact-count requirement is **not fully met**.

**Knowledge state of findings (all observed only; none replay-verified; none cross-session durable):**
- F1 Handler `StdFormPredisplay` Set Values `SETVARVALUES(FX_Page=1)` present after close and reopen in this Designer session: observed.
- F2 FX_Page listed under Form - Temporary after the T4 rerun save and after reopen: observed; hypothesis that the typed operand registers a temporary variable on save (unverified; analogous to EXP-057).
- F3 VisibleWhen `#V(FX_Page) = "1"`, `"2"`, `"3"` on signinpage, homepage and cartpage after reopen: observed. The builder representation of "variable FX_Page equals literal N": observed; the operator must decide whether this is the accepted form.
- F4 Visible in Design Mode row present after reopen on the three conditioned regions with a blank value; absent on menu, spacer1 and spacer2 and absent before the reopen: observed; cause unresolved.
- F5 Design-canvas components of signinpage, homepage and cartpage not drawn after their saves and after reopen: observed; cause unresolved; the operator accepted this as an observation.
- F6 Repeated save toasts and Save state after each region save: observed.

**Worker-written file inventory (cumulative; repository-relative):**
- `experiments/EXP-123-hello-world-part-8-phase-5-page-variable-visible-when.md` (created in T1; updated in T1 to T7).
- `evidence/EXP-123/` PNG files, 34 in total: T1 `t1-01-event-handlers.png`, `t1-02-variables.png`, `t1-03-signinpage-behavior-rows.png` (3); T2 `t2-01-new-handler-stdformpredisplay.png`, `t2-02-pair-fx-page-1-before-ok.png`, `t2-03-handler-row-before-save.png`, `t2-04-save-response.png` (4); T3 `t3-01-event-handlers-after-reopen.png`, `t3-02-variables-after-reopen.png` (2); T4 first attempt `t4-01-signinpage-behavior-rows-baseline.png`, `t4-02-builder-initial-complete.png` (2); T4 rerun `t4r-01-builder-initial-single-clause.png`, `t4r-02-builder-before-final-ok.png`, `t4r-03-signinpage-behavior-rows-before-ok.png`, `t4r-04-save-response-canvas.png` (4); T5 homepage `t5h-01-event-handlers-gate.png`, `t5h-02-variables-gate.png`, `t5h-03-builder-at-open-single-clause.png`, `t5h-04-builder-before-final-ok.png`, `t5h-05-homepage-behavior-rows-before-ok.png`, `t5h-06-save-response-canvas.png` (6); T6 `t6c-01-event-handlers-gate.png`, `t6c-02-variables-gate.png`, `t6c-03-attributes-dialog-open.png`, `t6c-04-builder-at-open-single-clause.png`, `t6c-05-builder-before-final-ok.png`, `t6c-06-cartpage-behavior-rows-before-ok.png`, `t6c-07-attributes-closed-before-save.png`, `t6c-08-save-response-canvas.png` (8); T7 `t7-01-event-handlers-after-reopen.png`, `t7-02-variables-after-reopen.png`, `t7-03-signinpage-behavior-rows.png`, `t7-04-homepage-behavior-rows.png`, `t7-05-cartpage-behavior-rows.png` (5).
- Tool-written page snapshots and console logs under `evidence/playwright/` (gitignored; written by the browser tool, not by the worker's authoring) and tool-output snapshot files outside the repository. No other file was written by the worker. Operator git review remains authoritative for repository confinement.

**Cleanup inventory (for the operator; nothing removed in T7):**
- Event handler `StdFormPredisplay` (sequence 0, Disabled false) with one Set Values row and one pair Target `FX_Page`, Value `1`; summary `SETVARVALUES(FX_Page=1)`. Created in T2.
- `FX_Page`: referenced by the pair and by the three VisibleWhen expressions; no variable definition was created through Details > Variables. Listed under Form - Temporary (observed). Removal, if wanted, depends on removing its references first.
- VisibleWhen on signinpage `#V(FX_Page) = "1"` (saved in the T4 rerun), homepage `#V(FX_Page) = "2"` (saved in T5), cartpage `#V(FX_Page) = "3"` (saved in T6).
- Visible in Design Mode on signinpage, homepage and cartpage: blank (not set by the worker). Menu, spacer1 and spacer2: no values set by the worker.
- No change to FX_SignInBtn, any other handler, any component, any region layout value, the menu, spacer1, spacer2, the Form's collections, any global object or any other Form.

**Final state of the experiment:** FX_CustomerPortal open and clean in User scope; handler and FX_Page as above; three conditioned regions with their VisibleWhen values; Visible in Design Mode blank on all three; canvas shows the header and menu only (component display of the three conditioned regions absent). No runtime check, no Phase 6 work, no further Save.

**Next step (operator decision):** whether to (a) accept the blank Visible in Design Mode as the outcome and close the experiment as partial, or (b) authorize a separate task that sets Visible in Design Mode to True on signinpage, homepage and cartpage (one Save per region), after the operator decides on the design-time disappearance. No further worker task is authorized by this record.

## T5 task (homepage VisibleWhen = 2, operator-approved procedure) - STOPPED at session check, nothing changed (superseded by the completed run above)

Task label note: this task's header said `task=T6`, while its instruction body said homepage (T5 procedure, literal 2) and to stop before cartpage. The instruction body was followed: homepage, literal 2, then stop.

Read first: AGENTS.md; this record's T4 rerun part. Browser tabs listed: **tab 0 read `Logout Successful`** (portal, `session/slo/signoutsuccess`); **tab 1 the Designer** (`MGForm=FX_CustomerPortal`).

**Session check (read-only):** tab 1 selected (select succeeded). Snapshot: FX_CustomerPortal the only Form, selected; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save and Undo disabled; no dialog, alert, list or menu open; Components tab. Console 2 errors, 0 warnings. No server-event error and no Session Expired modal appeared in the Designer.

**Decision:** the portal tab reads `Logout Successful`, which the brief names as a logout card / ended session (EXP-107, EXP-116). Per the brief, the session-expiry procedure applies only to a Mongoose "Session Expired" modal or an Infor sign-in page in the affected tab. Neither was seen in the Designer, and the portal logout card calls for an operator sign-in. So: **no navigation, no sign-in, no re-login, and no homepage edit were attempted.** The Designer state is unchanged from T4 (signinpage VisibleWhen `#V(FX_Page) = "1"` saved in the T4 rerun; homepage VisibleWhen not touched).

**Not performed:** Components/FlexLayoutMain selection and the attributes dialog for T5; the homepage VisibleWhen build (literal 2); the Visible in Design Mode check (absent; operator waiver); the T5 Save; the post-Save canvas; T6 (cartpage) and T7 (readback and final audit). Nothing was saved in T5.

**Blocker for the operator:** the Infor portal session shows `Logout Successful` (tab 0). The operator needs to sign in manually (EXP-107) and confirm the Designer tab is still valid (a Designer tab loaded before an expiry can show the server-event error; a re-login in the Web Client does not revive it, per the recipe). T5 can be retried after that, using the T4-rerun procedure (edit the one existing clause; no New).

**Action audit, T5 attempt (browser-tool calls: 3) and cumulative (T1 to T5 attempt: 224):** tab-tool list 1 (cumulative 6), tab-tool select 1 (cumulative 6), snapshots 1 (cumulative 98), clicks 0, hovers 0, coordinate clicks 0, lists 0, dialogs 0, prompts 0, field entries 0, Saves 0 (cumulative 2: T2 and T4 rerun), Form closes/reopens 0, server-event errors 0, console 2 throughout. Screenshots this task: none (no decisive state changed; the Designer was checked by snapshot only).

**Worker-written file inventory (T5 attempt):** this record only (updated). No new evidence files in T5.

**Final state (T5 attempt):** FX_CustomerPortal open in tab 1, clean, User scope; no dialog, alert, list or menu open; Save disabled. Portal tab 0 reads `Logout Successful` (left untouched).

## Next step (superseded by the completed T5 homepage run above)

**Operator action first:** sign in to the Mongoose portal manually (EXP-107). Then the operator decides whether the Designer tab is still valid; if not, the operator reloads it. Only then should the homepage T5 retry (literal 2, edit the existing clause, no New, Save once) be authorized. T6 (cartpage) and T7 remain unauthorized.

## Next step (previous)

**Operator review of the T4 rerun is required before T5.** The rerun saved signinpage VisibleWhen `#V(FX_Page) = "1"`. Visible in Design Mode is not available in this build's builder or region Properties, so the operator's waiver applies. For the operator to decide before any further task:
- whether `#V(FX_Page) = "1"` is the accepted representation of "variable FX_Page equals literal 1" (it is what the builder produced);
- whether signinpage's disappearance from the design canvas after Save is expected (the record does not establish its cause);
- whether the T7 readback should re-read VisibleWhen after the Save.

**T5 (homepage, `FX_Page` equals literal 2) and T6 (cartpage, literal 3) are not authorized** until the operator reviews this rerun and gives a further amendment. Nothing from T5, T6 or T7 has been performed.


## Cleanup inventory (cumulative after T2)

- **T1:** none. No handler, variable, region value or Save.
- **T2 (FX_CustomerPortal, User scope, saved in T2's one Save):** the Form event handler **StdFormPredisplay** (sequence 0, Disabled false) with one Response Type **Set Values** row whose one pair is Target `FX_Page`, Value `1` (summary `SETVARVALUES(FX_Page=1)`). The FX_Page variable was not created through Details > Variables; it is referenced by the pair. After T3 (close and reopen), FX_Page does not appear as a variable definition in any Form category; the pair still references it. Nothing was created through Details > Variables, so there is no variable definition to remove.
- **T3:** none. Close and reopen only; no Save, no change.
- **T4 first attempt:** none saved (both dialogs cancelled; the blank clauses from its New were discarded with the Cancel).
- **T4 rerun (saved in its one Save):** signinpage VisibleWhen `#V(FX_Page) = "1"` on FlexLayoutMain's signinpage region. The Variable Value operand names FX_Page as typed; no variable definition was created. Visible in Design Mode was not set (not offered).
- **Still to come (not performed):** homepage and cartpage Visible When and Visible in Design Mode (T5, T6); Visible in Design Mode on signinpage if the operator's review finds a route to it.

## Worker-written file inventory (T1)

- `experiments/EXP-123-hello-world-part-8-phase-5-page-variable-visible-when.md` (created in T1)
- `evidence/EXP-123/t1-01-event-handlers.png` (created)
- `evidence/EXP-123/t1-02-variables.png` (created)
- `evidence/EXP-123/t1-03-signinpage-behavior-rows.png` (created)
- `evidence/EXP-123/t2-01-new-handler-stdformpredisplay.png` (created in T2)
- `evidence/EXP-123/t2-02-pair-fx-page-1-before-ok.png` (created in T2)
- `evidence/EXP-123/t2-03-handler-row-before-save.png` (created in T2)
- `evidence/EXP-123/t2-04-save-response.png` (created in T2)
- `evidence/EXP-123/t3-01-event-handlers-after-reopen.png` (created in T3)
- `evidence/EXP-123/t3-02-variables-after-reopen.png` (created in T3)
- `evidence/EXP-123/t4-01-signinpage-behavior-rows-baseline.png` (created in T4; Behavior rows below the visible area, see limitation)
- `evidence/EXP-123/t4-02-builder-initial-complete.png` (created in T4; builder before New)
- `experiments/EXP-123-hello-world-part-8-phase-5-page-variable-visible-when.md` (T1 created; T2 updated)

Tool-written, not authored by the worker: one page snapshot file per click and hover result under `evidence/playwright/` (gitignored, per EXP-057) and console log files under `evidence/playwright/`. The one oversized snapshot in T1 was written by the tool to the session tool-results folder outside the repository; it was not read. No other worker-written files in T2 or T3. The T3 Expand Panel click changed only the Details pane's layout, not any file.

## Action audit, T2 (browser-tool calls: 57) and cumulative (T1 + T2 = 97)

| Category | T2 | Cumulative |
| --- | --- | --- |
| Tab-tool list / select | 1 / 1 | 2 / 2 |
| Browser snapshots (untargeted and targeted) | 22 (no inline overflow; no oversized snapshot in T2) | 38 |
| Finds | 6 | 14 |
| Clicks (successful) | 18 | 28 |
| Clicks (failed, `Ref e884 not found`, no action) | 1 | 1 |
| Hovers | 0 | 1 |
| Coordinate clicks | 0 | 0 |
| List arrow clicks by reference | 2 (Name list; Response Type list) | 2 |
| Keyboard keys (Tab only, after a committed field) | 2 | 2 |
| Typing actions (slow key-by-key for Target; one fill for Value) | 2 | 2 |
| Arrow, Enter keys | 0 | 0 |
| Drag, Undo, Redo | 0 | 0 |
| Lists opened | 2 (event name; Response Type) | 2 |
| Ellipsis opens | 2 (Parameters; Variables) | 2 |
| Dialogs opened | 4 (New Event Handler; Event Handler Parameters; Edit Set Variable Values; Edit Set Variable Value Pair) | 5 |
| Nested dialog opens | 2 (list inside Parameters; pair inside list) | 2 |
| OK clicks (planned change) | 4 (New; pair; list; Parameters) | 4 |
| Cancel clicks | 0 | 1 (T1 attributes dialog) |
| Prompts | 0 | 0 |
| Field entries | 2 (Target FX_Page; Value 1) | 2 |
| Corrections | 0 | 0 |
| Designer Saves | 1 (toast "Form [FX_CustomerPortal] and global object(s) were saved.") | 1 |
| Form closes / reopens | 0 | 0 |
| Server-event errors | 0 | 0 |
| Stale references | 1 (Save `e884`; recovered with one fresh untargeted snapshot) | 1 |
| Re-logins | 0 | 0 |
| Screenshots | 4 | 7 |
| Console error count | 2 at every reading (start, after each action, after Save) | 2 throughout |

Note on the T2 snapshot count: 22 browser snapshots = 7 untargeted at depth 3 (including the one fresh recovery snapshot after the stale Save reference, and the post-Save check) + 15 targeted to a panel or dialog. No snapshot was saved to a file and grepped. Find results were not used as click references.

## Action audit, T3 (browser-tool calls: 29) and cumulative (T1 to T3: 126)

| Category | T3 | Cumulative (T1 + T2 + T3) |
| --- | --- | --- |
| Tab-tool list / select | 1 / 1 | 3 / 3 |
| Browser snapshots (untargeted depth 3 / targeted) | 8 / 6 (14 total; no inline overflow) | 52 (T1 16, T2 22, T3 14) |
| Finds | 2 (the Form-menu lookup; the read-only `FX_Page` text search) | 16 |
| Clicks (successful) | 8 (close; Form menu; recent-forms entry; Details Expand Panel; Event Handlers tab; grid Expand; Variables tab; grid Expand) | 36 |
| Clicks (failed, `Ref e247 not found`, no action) | 1 | 2 (T2 `e884`, T3 `e247`) |
| Hovers | 0 | 1 |
| Coordinate clicks | 0 | 0 |
| List arrow clicks by reference | 0 | 2 |
| Keyboard keys (Tab) | 0 | 2 |
| Typing actions | 0 | 2 |
| Arrow, Enter keys | 0 | 0 |
| Drag, Undo, Redo | 0 | 0 |
| Lists opened | 0 | 2 |
| Ellipsis opens | 0 | 2 |
| Dialogs opened | 0 | 5 (T1 attributes; T2 four) |
| Nested dialog opens | 0 | 2 |
| OK clicks | 0 | 4 |
| Cancel clicks | 0 | 1 (T1) |
| Prompts | 0 (no save prompt on the close; no dialog of any kind appeared) | 0 |
| Field entries and corrections | 0 and 0 | 2 and 0 |
| Designer Saves | 0 (brief: none in T3) | 1 (T2) |
| Form closes / reopens | 1 close, 1 reopen (recent-forms entry) | 1 close, 1 reopen |
| Server-event errors | 0 | 0 |
| Stale references | 1 (`e247`; one fresh untargeted snapshot recovered it) | 2 (T2 `e884`, T3 `e247`; each with one fresh snapshot) |
| Re-logins | 0 | 0 |
| Screenshots | 2 (`t3-01`, `t3-02`) | 9 |
| Console error count | 2 at every reading | 2 throughout |

Note on the T3 counts: the Details Expand Panel click and the two grid Expand clicks are view-only layout toggles, counted as clicks. Tab-tool list and select are counted as tool calls, not as clicks.

## Action audit, T4 (browser-tool calls: 34) and cumulative (T1 to T4: 160)

| Category | T4 | Cumulative (T1 to T4) |
| --- | --- | --- |
| Tab-tool list / select | 1 / 1 | 4 / 4 |
| Browser snapshots (untargeted depth 3 / targeted) | 8 / 9 (17 total; no inline overflow) | 69 (T1 16, T2 22, T3 14, T4 17) |
| Finds | 1 (`Region05` text search, lookup only) | 17 |
| Clicks (successful) | 10 (Components tab; grid Expand; FlexLayoutMain Type cell; adorner; signinpage row; VisibleWhen ellipsis; New; alert OK; builder Cancel; attributes Cancel) | 46 |
| Clicks (failed) | 1 (Left Value Edit Value: timeout, intercepted by the alert; no action) | 3 (T2 `e884`, T3 `e247`, T4 Left Value) |
| Hovers | 1 (adorner, tooltip confirmed) | 2 |
| Coordinate clicks | 0 | 0 |
| List arrow clicks | 0 | 2 |
| Keyboard keys (Tab) | 0 | 2 |
| Typing actions | 0 | 2 |
| Arrow, Enter keys | 0 | 0 |
| Drag, Undo, Redo | 0 | 0 |
| Lists opened | 0 | 2 |
| Ellipsis opens | 1 (VisibleWhen) | 3 |
| Dialogs opened | 2 (attributes; Edit Condition builder) | 7 |
| Nested dialog opens | 1 (builder inside attributes) | 3 |
| OK clicks (planned change) | 1 (the prompt's OK; no planned change) | 5 |
| Cancel clicks | 2 (builder; attributes; both no change) | 3 |
| Builder actions | 1 (New; produced a second blank clause and the error) | 1 |
| Prompts | 1 (Form script error alert; verbatim text in the T4 section; answered OK) | 1 |
| Field entries and corrections | 0 and 0 | 2 and 0 |
| Designer Saves | 0 (blocked before any Save) | 1 (T2) |
| Form closes / reopens | 0 | 1 close, 1 reopen |
| Server-event errors | 0 | 0 |
| Form script errors | 1 (`OnNewConditionClause`, `CListBox::SetCurSel call failed`) | 1 |
| Stale references (`Ref not found`) | 0 | 2 (T2, T3; each with one fresh snapshot) |
| Re-logins | 0 | 0 |
| Screenshots | 2 (`t4-01`, `t4-02`) | 11 |
| Console error count | 2 at every reading | 2 throughout |

Note on the T4 counts: the T4 Left Value timeout was not a `Ref not found`; it was an interception by the alert, recovered with one fresh untargeted snapshot (which showed the alert). The Components grid Expand and the Properties Expand were view-only; the Properties Behavior group was already expanded in this session. The attributes dialog's Cancel and the builder's Cancel were the only Cancel clicks; no OK was pressed on either dialog.

## Final state (end of the T4 rerun; the first T4 attempt's blocked state is superseded)

- FX_CustomerPortal open in the Web Designer tab (tab 1), the only Form tab, clean (Save disabled and Undo disabled after the one T4 rerun Save), User scope (footer).
- No dialog, alert, list, editor or menu open. The attributes dialog was closed by OK; the builder was closed by OK.
- signinpage region: VisibleWhen `#V(FX_Page) = "1"` (saved; read before the attributes OK, not re-read after the Save); Animation None; **no Visible in Design Mode row exists** (not set; operator waiver).
- signinpage components are no longer shown on the design canvas after the Save (observed; cause not established). The menu, cart and homepage regions remain visible.
- FlexLayoutMain selected in the Components tree (Properties header `FlexLayoutMain (FlexLayout)`).
- Web Client tab (tab 0): untouched.
- Console count: 2 errors, 0 warnings (unchanged throughout T1 to the T4 rerun).
- T5 (homepage) and T6 (cartpage) not performed and not authorized until operator review; T7 not performed.

## Outcome (operator, 2026-10-20)

Accepted (observed), with qualifications. **Hello World Part 8 Phase 5 is complete: on FX_CustomerPortal (User scope), a StdFormPredisplay event handler (Set Values, `SETVARVALUES(FX_Page=1)`) sets the page variable when the Form opens, and FlexLayoutMain's regions signinpage, homepage and cartpage have VisibleWhen `#V(FX_Page) = "1"`, `#V(FX_Page) = "2"` and `#V(FX_Page) = "3"` with Visible in Design Mode True, read back after an ordinary close and reopen (T9), with the three regions' components drawn on the design canvas.** Run R-20261020-113214-qLdl (11 worker tasks; paused for operator rulings after T1 to T3, the cancelled T4 probe, the T4 rerun, the `Logout Successful` stop, T7 with one approved denial, and T9).

- Changed, for later cleanup: StdFormPredisplay handler (Set Values, one pair FX_Page = 1) (T2); signinpage, homepage and cartpage VisibleWhen (T4 rerun, T5, T6); the same three regions' Visible in Design Mode blank -> True (T8). FX_Page appeared under Details > Variables > Form - Temporary after the T4 rerun's Save (not created through Details > Variables). Five Designer Saves (T2, T4 rerun, T5, T6, T8), each with the toast "Form [FX_CustomerPortal] and global object(s) were saved." No copy/paste, no Regenerate, no unload, no runtime action.
- Screenshots viewed by the operator assistant: `t4r-02` (Edit Condition builder, one clause `#V(FX_Page) = "1"`); `t4r-04` (after the signinpage Save: signinpage components no longer drawn); `t7-02` (Variables: Form - Temporary FX_Count, FX_Page); `t7-04` (after reopen, homepage: VisibleWhen `#V(FX_Page) = "2"`, Visible in Design Mode row present and blank); `t9-05` (after the final reopen, homepage: VisibleWhen `#V(FX_Page) = "2"`, Visible in Design Mode True); `t9-01` (after the final reopen: canvas shows Sign In with the image, Customer ID and Sign In button, Home with its grid, Count and Add To Cart, and Cart with its grid and Checkout; User scope).
- Console: the Designer count stayed at 2 throughout.
- Prompts: one Form script error in the first T4 probe (`Error during execution of Form script class [Mongoose.FormScripts.WSExpEdEditConditionalActionsCondition], method [OnNewConditionClause] Exception message: Error: CListBox::SetCurSel call failed`) after clicking New in the Edit Condition builder; answered OK and cancelled with nothing saved.
- Session: the portal tab showed `Logout Successful` before T5; the worker stopped without changes and the operator signed in manually.
- Denial approved (T7): a Read of an oversized untargeted snapshot in the denied tool-results folder (nothing read); targeted panel snapshots used instead (EXP-114 rule).
- Findings (observed):
  1. The Edit Condition builder opens with one blank selected clause `= |`. Edit that clause in place: clicking New raises the CListBox::SetCurSel Form script error.
  2. Edit Value Expression offers Value Types Literal, Variable Value, Component Value and Property Value. A Variable Value not in the list can be typed (FX_Page, then Tab). The builder writes the variable as `#V(FX_Page)` and quotes a literal (`"1"`).
  3. The builder's OK marks the Form dirty immediately (Save enabled before the attributes dialog's OK).
  4. A Set Values target alone did not list FX_Page under Details > Variables (T3); after the first Save of a condition using it as a Variable Value, FX_Page is listed under Form - Temporary, and later builders offer it in the list.
  5. A region with a VisibleWhen and no Visible in Design Mode value is not drawn on the design canvas (its components remain in the Components tree). The Visible in Design Mode row is not offered until VisibleWhen has been saved and the Form reopened; it then offers blank, True and False, and True draws the region again (one observation each).
  6. Region Behavior rows: VisibleWhen, Visible in Design Mode (after the condition above), Animation. Homepage is Orientation Fill with Maximum Length 50 (signinpage Vertical).
- Qualifications accepted by the operator: cumulative action counts approximate (context compaction in T5/T6; AC-5 qualified); T8 did not re-read AGENTS.md at task start (text already in context); disclosed coordinate pointer moves without clicks for view-only scrolling (T7, T8); some screenshots overwritten by repeated captures (T7); same-session close and reopen; runtime page switching not tested.
- Confinement (git status): only `evidence/EXP-123/` and this record were written by the run (the unreviewed `tools/claude-harness/briefs/EXP-119.brief.json` predates it and is untouched).
- Cleanup inventory (Phase 5): StdFormPredisplay handler; FX_Page Form - Temporary variable; VisibleWhen and Visible in Design Mode on signinpage, homepage and cartpage.
- Next: Part 8 Phase 6 (12:16 onward): menu navigation handlers setting FX_Page, Enabled When on the menu buttons, the EditCount initial value and the second FX_SignInBtn response.
