# EXP-091 - Hello World Part 5 Section 12: Create the FX_Item Component Class and Apply It to FX_ItemCombobox and FX_ItemGridCol

Status: **execution complete; final acceptance audit complete (T5), recommended ACCEPTED AS OBSERVED.** T1 (read-only gates) complete: all gates pass. T2 (class creation, readback, Designer Save 1) complete: Save 1 confirmed. T3 (both component assignments, read-back, Designer Save 2) complete: Save 2 confirmed. T4 (one clean close, one reopen, read-back of class and both components) complete: AC-4 readbacks match; Designer clean. T5 (documentation-only acceptance audit, zero browser calls, zero Mongoose changes) complete; final matrix, reconciliation and inventory are in `evidence/EXP-091/T5-final-acceptance-report.md`. Findings are observed only; none is replay_verified.
Run: R-20261014-230638-ig8N. Worker session 0d5f552b-9feb-4af8-8a55-d02020a56a51.
Date: 2026-10-14. Editing scope: User. Form: FX_Orders (only).
Brief sources: `docs/mongoose/transcripts/hello-world-pt5.md` Section 12 (lines 260-276) and transcript lines 557-573 (17:31-19:24); `recipes/global-objects/create-component-class.md`; `recipes/components/apply-component-class.md` (Designer steps); `recipes/session/session-expiry-and-stale-designer.md`; Outcome sections of EXP-088, EXP-089, EXP-090 (read only those sections).

## Sources and prior results carried forward

- EXP-088 (observed, accepted): class FX_CustomerID created through New; validator added with `%1,%2`; List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`; one Save.
- EXP-089 (observed, accepted): FX_CustomerIDCombobox and FX_CustomerIDGridCol assigned class FX_CustomerID with parameters `FX_CusName,FX_CusAddress`; one Save. Lesson: a Designer tab loaded before a session expiry returns the server-event error on Edit and needs an operator reload.
- EXP-090 (observed, accepted): validator FX_Item, In Collection, `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`, `mIsNotAValid`; one Save; FX_ItemCombobox had no Component Class.

## T1 baseline (read-only gates, observed)

| Gate item | Observed value | Evidence |
|---|---|---|
| Session | Usable. Edit menu opened with no server-event error. No Session Expired modal or sign-in page. | gate-designer-start.png |
| Designer | Tab 0 selected; Form tab `FX_Orders`; status bar `ScopeType: User`; Save and Undo disabled (clean). | gate-designer-start.png |
| Component class FX_Item | **Absent.** Sorted region reads `FrequencyVar`, `FX_CustomerID`, `GetCharacterTypeColumns`. | gate-component-class-list-scrolled.png |
| FX_CustomerID | **Present** (EXP-088 class). | gate-component-class-list-scrolled.png |
| Validator FX_Item | Type **In Collection**; Parameters **`FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`** (full string from accessibility text; visually truncated); Error Message `mIsNotAValid`. Matches expected. | gate-validator-list-fx.png, gate-validator-fx-item-readback.png |
| FX_ItemCombobox | Binding `object.FX_Item`; List Source blank; Validators blank; Validate Immediately False; Component Class **blank**; Component Class Parameters blank; View Attributes `FX_Item`; Edit Property Class Extension `FX_Item`. | gate-fx-itemcombobox-before.png |
| FX_ItemGridCol | Same values as FX_ItemCombobox (GridColumn, FormCollectionGrid, tab 5). | gate-fx-itemgridcol-before.png |

## T1 step table

| # | Step | Result |
|---|---|---|
| 1 | Tabs list, select tab 0 | Tab 0 = Designer (FX_Orders). Tab 1 = Web Client, not touched. |
| 2 | Fresh snapshot | FX_Orders selected; Save/Undo disabled; User scope. |
| 3 | Edit > Component Class (once) | FX_Item absent; FX_CustomerID present. |
| 4 | Cancel (1 of 2) | No change. |
| 5 | Edit > Validator, select FX_Item | In Collection; Parameters verified. |
| 6 | Cancel (2 of 2) | No change. |
| 7-8 | Select FX_ItemCombobox, FX_ItemGridCol | Baseline recorded. |
| 9 | Stop before New | No class created. |

T1 notes: the Component Classes search box accepted `FX_` but did not filter (no Enter). Wheel scrolling works only with the pointer over the list. The grid column appears in Details > Components only after the Expand control.

## T2 status: class created, configured, read back, Save 1 done

Result: all T2 steps passed. Blocker: none. Session usable throughout (no server-event error, no re-login). The leftover `FX_` text from T1 was **not** present when the dialog reopened (search box empty), so no clearing was needed.

| # | Step | Observed result | Evidence |
|---|---|---|---|
| 1 | Gate: Edit > Component Class (open) | FX_Item absent (list: FX_CustomerID then GetCharacterTypeColumns); FX_CustomerID present; search box empty. Components grid: both FX_ItemCombobox and FX_ItemGridCol Component Class blank. | t2-gate-component-class-open.png, t2-gate-component-class-list-fx.png |
| 2 | List New (+) once | Name prompt appeared. | t2-new-name-prompt.png |
| 3 | Name `FX_Item`, Tab, prompt OK once | Class `FX_Item` created; Properties Name `FX_Item`, Version User. | t2-new-name-entered-before-ok.png |
| 4 | Validators ellipsis, + once, pick FX_Item, Tab, OK once | Picker listed existing validators (FX_CustomerID, FX_Item, ...); FX_Item row added, created nothing. | t2-validator-new-fx-item-before-ok.png |
| 5 | Row selected, cube once, `%1,%2`, Tab, OK once | Row shows `%1,%2`. | t2-validator-parameters-percent1-percent2-before-ok.png |
| 6 | Validators editor OK once | Class Validators reads **`FX_Item(%1,%2)`**. | t2-validators-editor-after-params.png (pre-OK) |
| 7 | Validate Immediately: choose True, Tab | Reads **True**. Undo became enabled (pending change). | (readback below) |
| 8 | List Source ellipsis; Type IDO Collection, Tab | Type `IDO Collection`. IDO enabled. | t2-list-source-dialog-before-ok.png |
| 9 | IDO FX_Items, Tab | IDO `FX_Items`. | t2-list-source-dialog-before-ok.png |
| 10 | Properties ellipsis: add FX_Item, FX_Description, FX_Cost in order; OK once | Right list order: FX_Item, FX_Description, FX_Cost. Properties field `FX_Item,FX_Description,FX_Cost`. | t2-properties-fx_item-fx_description-fx_cost-before-ok.png |
| 11 | Columns to Display: FX_Item, Ctrl-click FX_Description; OK once | Both outlined; FX_Cost not selected. Field reads **`1,2`**. | t2-columns-to-display-before-ok.png (pre-OK) |
| 12 | List Source OK once | Row value (verbatim): **`STDOLE FX_Items( PROPERTIES(FX_Item,FX_Description,FX_Cost) DISPLAY(1,2)RECORDCAP(0))`** (matches expected exactly). | t2-list-source-dialog-before-ok.png (pre-OK) |
| 13 | Global Objects OK once | Dialog closed. Designer Save became **enabled**. | t2-after-global-objects-ok.png |
| 14 | Readback: Edit > Component Class; select FX_Item; read values; Cancel | Validators `FX_Item(%1,%2)`; Validate Immediately `True`; List Source as step 12. No correction needed. | t2-class-readback.png |
| 15 | Designer Save 1 (native toolbar, once) | Toast: **"Global object(s) were saved."** Toolbar Save and Undo greyed afterwards (clean). | t2-save1-response.png |

Not done in T2 (per brief): no component assignments; Save 2 not invoked; no close/reopen.

## Deviations and observations (T2)

- **Tab commit:** Tab was pressed before every typed or picked text/combobox value (name, validator picker, Parameters, Validate Immediately, Type, IDO). The Properties and Columns steps are list selections with no open text field, so no Tab was pressed before their OKs; the committed values read back correctly (Properties field and `1,2`).
- **Global Objects OK:** no pre-OK screenshot was captured for this OK (the List Source and Properties pre-OK captures exist).
- **Columns selection:** the accessibility tree marked only FX_Item `[selected]` after the Ctrl-click (recipe pitfall, as predicted); the screenshot shows both selected; the result field reads `1,2`.
- **Rec Cap Override** stayed blank in the dialog, yet the string shows `RECORDCAP(0)`. Observed only.
- **Validator Parameters dialog** shows an extra empty combobox below the `%1,%2` text box. It was not used (focus passed to it by Tab, left empty). Its purpose is unexplored.
- **Page URL** gained `&MGForm=FX_Orders` after the Designer dialogs closed. The worker did not navigate; the Designer appended it. Observed only.
- The Designer Edit menu was not reloaded or retried at any point.

## T3 status: both assignments committed; Designer Save 2 done

Result: all T3 steps passed. Blocker: none. Session usable (no server-event error, no session expiry, no re-login). No prompt or dialog appeared during any assignment. No Form close or reopen (per brief). FX_ItemCombobox and FX_ItemGridCol are the only components changed.

| # | Step | Observed result | Evidence |
|---|---|---|---|
| 1 | Fresh snapshot; Designer state | FX_Orders selected; User scope; Save and Undo disabled; no dialog open; FX_ItemGridCol was last selected in Properties from T2. | (snapshot) |
| 2 | Select FX_ItemCombobox (Components grid, selection only); pre-mutation read | Binding `object.FX_Item`; List Source blank; Validators blank; Validate Immediately False; Component Class blank; Component Class Parameters blank; View Attributes `FX_Item`; Edit Property Class Extension `FX_Item`. | t3-fx-itemcombobox-before-assignment.png |
| 3 | Component Class dropdown, FX_Item chosen (option offered), Tab | Component Class **FX_Item**. Save and Undo became enabled. | t3-fx-itemcombobox-component-class-fx-item-after-tab.png |
| 4 | Component Class Parameters value cell, typed `FX_ItmsDescription,FX_ItmsCost`, Tab | Committed; tree reads `FX_ItmsDescription,FX_ItmsCost`. | t3-fx-itemcombobox-after-parameters.png |
| 5 | FX_ItemCombobox after-state read | Binding, List Source, Validators, Validate Immediately, Set Class From, View Attributes and Edit Property Class Extension **unchanged** from step 2. Only Component Class and Component Class Parameters changed. | (readback, same file) |
| 6 | Select FX_ItemGridCol (selection only); pre-mutation read | Binding `object.FX_Item`; List Source blank; Validators blank; Validate Immediately False; Component Class blank; Component Class Parameters blank; View Attributes `FX_Item`; Edit Property Class Extension `FX_Item`. | t3-fx-itemgridcol-before-assignment.png |
| 7 | Component Class dropdown, FX_Item chosen, Tab | Component Class **FX_Item**. | (readback) |
| 8 | Component Class Parameters value cell, typed `FX_ItmsDescription,FX_ItmsCost`, Tab | Committed; tree reads `FX_ItmsDescription,FX_ItmsCost`. | t3-fx-itemgridcol-after-parameters.png |
| 9 | FX_ItemGridCol after-state read | Binding, List Source, Validators, Validate Immediately, Set Class From, View Attributes and Edit Property Class Extension **unchanged** from step 6. | (readback, same file) |
| 10 | Read-only verification of FX_ItemCombobox after reselect | Component Class FX_Item; Component Class Parameters `FX_ItmsDescription,FX_ItmsCost`; other values unchanged. | (readback) |
| 11 | Designer Save 2 (native toolbar, once) | Toast: **"Form [FX_Orders] and global object(s) were saved."** Save and Undo greyed afterwards. | t3-save2-response.png |

Automatic changes from applying the class: none observed in the recorded properties (List Source, Validators, Validate Immediately, Binding, Set Class From, View Attributes, Edit Property Class Extension). The inherited List Source and Validators stayed blank on both components, and Validate Immediately stayed False, as the recipe predicted.

Observed in T3:
- FX_ItemCombobox and FX_ItemGridCol rows in the Details > Components grid still show a blank Component Class column after Save 2 (before any reopen). The Properties panel shows FX_Item. This matches the recipe's pitfall (grid column refreshes after save and reopen). Observed only.
- The Component Class list offered FX_Item directly (no stop condition).
- The FX_ItemGridCol Expand control was not needed (the grid column was already listed from T1).
- The Properties tree reports `FX_ItmsDescription,FX_ItmsCost` after Tab with no change to other rows.

## T4 status: clean close and reopen; readback matches; Designer clean

Result: all T4 steps passed. Blocker: none. Session usable (no server-event error, no session expiry, no re-login). Close produced **no prompt**. The Designer was clean before and after the close and after the reopen. No Save, correction, assignment or other mutation was performed. Only read-only selection, view toggles and Cancel were used.

| # | Step | Observed result | Evidence |
|---|---|---|---|
| 1 | Fresh snapshot; pre-close state | FX_Orders selected (Form tab); User scope (status bar); Save and Undo disabled; no dialog; FX_ItemCombobox selected in Properties with Component Class FX_Item; Components grid Component Class column blank for FX_ItemCombobox (grid had not refreshed). | t4-pre-close-state.png |
| 2 | Close FX_Orders once via Form-tab close control (`closable FX_Orders`) | Closed with **no prompt**. Designer area empty; status bar still ScopeType User. | t4-after-close.png |
| 3 | Form menu > recent-forms `FX_Orders` (once) | Form reopened in User scope (URL gained `MGForm=FX_Orders`). Save and Undo disabled; clean initial state (Form properties shown). Details panel collapsed on reopen. | t4-reopened-fx-orders.png |
| 4 | Edit > Component Class (once); no server-event error; FX_Item selected; readback; Cancel once | Name FX_Item; User version; Validators `FX_Item(%1,%2)`; Validate Immediately `True`; List Source `STDOLE FX_Items( PROPERTIES(FX_Item,FX_Description,FX_Cost) DISPLAY(1,2)RECORDCAP(0))` (accessibility tree; visual truncation below the scroll area). FX_CustomerID and FX_Item sorted adjacently in the list. Cancelled. | t4-reopened-class-readback.png |
| 5 | Expand Details panel (view toggle), Components tab, Components grid Expand (view toggle) | Components grid populated; both component rows now show Component Class `FX_Item` in the grid. | (grid readback) |
| 6 | FX_ItemCombobox readback (selection only) | Binding `object.FX_Item`; Component Class **FX_Item**; Component Class Parameters **`FX_ItmsDescription,FX_ItmsCost`**; View Attributes `FX_Item`; Edit Property Class Extension `FX_Item`; List Source blank; Validators blank; Validate Immediately False. | t4-reopened-fx-itemcombobox-readback.png |
| 7 | FX_ItemGridCol readback (selection only) | Binding `object.FX_Item`; Component Class **FX_Item**; Component Class Parameters **`FX_ItmsDescription,FX_ItmsCost`**; View Attributes `FX_Item`; Edit Property Class Extension `FX_Item`; List Source blank; Validators blank; Validate Immediately False. | t4-reopened-fx-itemgridcol-readback.png |
| 8 | Final state check | Save and Undo disabled; no dialog open; ScopeType User. | (find, same as step 3) |

Grid vs Properties: after the reopen, the Components grid's Component Class column **is populated** (FX_Item on both rows). Before the close it was blank for FX_ItemCombobox and FX_ItemGridCol (the recipe's grid-refresh pitfall, observed again). The Properties panel showed FX_Item both before and after.

Unchanged after reopen: the FX_Item class (Validators, Validate Immediately, List Source) and all other recorded component values match the T1-T3 baselines and the expected values. FX_CustomerID is still listed beside FX_Item (not inspected further; out of scope).

Limitations: the class readback's Validators and List Source values are from the accessibility tree; the screenshot shows only Name and Version. The component Parameters rows are below the visible area in the screenshots; their values are from the tree. Persistence is evidenced by the reopened Designer readback only (no runtime, no database check).

## Reconciliation (T5)

Controller audits `evidence/EXP-091/harness-audit-T1.md` to `harness-audit-T4.md` were re-derived row by row. Their summary lines agree (controller totals: actions 103, reads 153, file ops 69, tool rows 325).

- **Conventions.** Controller "actions" = clicks, type, key, moves, wheel, tab select. Controller "reads" = find, snapshot, screenshot, tab list. File tools are separate. The worker's "browser operations excluding snapshots and finds" = controller actions + screenshots + tab list (30 + 66 + 24 + 22 = 142 = 103 + 35 + 4). These are not interchangeable across the two sets.
- **Corrections to worker figures (the per-task tables above are left as written):**
  - T1 finds: worker 15, controller 16.
  - T3 snapshots: worker 6, controller 7.
  - T3 finds: worker 16, controller 17.
  - Cumulative snapshots T1-T4: 37 (not 36). Cumulative finds: 77 (not 75). Cumulative reads: 153 (matches controller).
- **Verified as agreeing:** clicks 72, typed 5, Tab commits 10, moves 5, wheel 7, screenshots 35, tab list 4, tab select 4; Designer Saves 2; close 1; reopen 1; dialog OKs 8; Cancels 4; New 1; class created 1; validator added 1; list-source properties 3; displayed columns 2; class assignments 2; component Parameters entries 2; string prompts offered or answered 0; corrections 0; re-logins 0; runtime, checkout, cache, FormSync and deployment actions 0.
- **Browser-tool side effects:** 77 files in `evidence/playwright/` carry the run's `2026-10-14T15-` prefix (5 console, 72 page snapshot). Not worker-authored.
- **Tab-select index:** the controller does not record the tab index. The worker recorded index 0 in every task; the Web Client (index 1) was never selected by the worker's record.
- Full detail and the acceptance matrix: `evidence/EXP-091/T5-final-acceptance-report.md`.

## Action audit

### T4 counts (this task, worker-recorded)

| Category | T4 | Cumulative (T1 to T4) |
|---|---|---|
| Browser tab list / tab select | 1 / 1 | 4 / 4 |
| Snapshot calls (1 untargeted, 3 targeted) | 4 | 36 |
| Finds (read-only) | 15 | 75 |
| Screenshot calls (6 distinct files) | 6 | 35 |
| Clicks | 12 | 72 |
| Mouse moves / wheel scrolls (list scroll) | 1 / 1 | 5 / 7 |
| Text typed | 0 | 5 |
| Tab key commits | 0 | 10 |
| **Designer Form close** | **1** | **1** |
| **Designer Form reopen (recent-forms)** | **1** | **1** |
| Dialog Cancels (class readback) | 1 | 4 |
| Dialog OKs | 0 | 8 |
| Prompts seen | 0 | none |
| Component classes created / New / validators added | 0 / 0 / 0 | 1 / 1 / 1 |
| Class assignments / parameter entries | 0 / 0 | 2 / 2 |
| Other component or validator changes | 0 | 0 |
| **Designer Saves** | **0** | **2** (limit 2; both used) |
| Runtime, Web Client, checkout, cache unload, FormSync, deployment actions | 0 | 0 |
| Re-logins | 0 | 0 |
| Server-event error occurrences | 0 | 0 |

Browser action total excluding snapshots and finds: T4 = 12 clicks + 1 move + 1 wheel + 6 screenshots + 2 tab actions = **22**. Cumulative T1 to T4 = 30 + 66 + 24 + 22 = **142**.

Controller audit (superseded note, added T5): `evidence/EXP-091/harness-audit-T4.md` now exists and records 15 actions and 26 reads for T4, which agrees with the worker counts above (clicks 12, moves 1, wheel 1, tab select 1; find 15, snapshot 4, screenshot 6, tab list 1). See "Reconciliation (T5)" below.

### T3 counts (this task, worker-recorded)

| Category | T3 | Cumulative (T1+T2+T3) |
|---|---|---|
| Browser tab list / tab select | 1 / 1 | 3 / 3 |
| Snapshot calls (untargeted 1, targeted 5) | 6 | 32 |
| Finds (read-only) | 16 | 60 |
| Screenshot calls (6 distinct files) | 6 | 29 |
| Clicks | 10 | 60 |
| Text typed (parameter entries) | 2 | 5 (incl. T1 search `FX_` not applied) |
| Tab key commits | 4 | 10 |
| Mouse moves / wheel scrolls | 0 / 0 | 4 / 6 |
| **Component classes created** | 0 | **1** |
| **New (Component Classes list)** | 0 | **1** |
| **Validators added** | 0 | **1** |
| **Class assignments (Component Class set and committed)** | **2** (FX_ItemCombobox, FX_ItemGridCol) | **2** |
| **Parameter entries (committed)** | **2** | **2** |
| Dialog OKs | 0 | 8 |
| Dialog Cancels | 0 | 3 |
| Prompts seen | 0 | — (T1+T2 prompts as recorded) |
| String / message prompts offered or created | 0 / 0 | 0 / 0 |
| Correction contingency | 0 | 0 |
| Other component property changes | 0 | 0 |
| **Designer Saves** | **1** (Save 2) | **2** (limit 2; both used) |
| Designer close/reopen | 0 (deferred to next task) | 0 |
| Runtime, Web Client, checkout, cache unload, FormSync, deployment actions | 0 | 0 |
| Re-logins | 0 | 0 |
| Server-event error occurrences | 0 | 0 |

Browser action total excluding snapshots and finds: T3 = 10 clicks + 2 typed + 4 Tab keys + 6 screenshots + 2 tab actions = **24**. Cumulative T1+T2+T3 = 30 + 66 + 24 = **120**.

Controller audit (superseded note, added T5): `evidence/EXP-091/harness-audit-T3.md` records 17 actions and 31 reads. Snapshot and find counts differ from the worker figures above: controller snapshot 7 (worker 6) and find 17 (worker 16). See "Reconciliation (T5)".

### T2 counts (historic; cumulative column is T1+T2 only)

| Category | T2 | Cumulative (T1+T2) |
|---|---|---|
| Browser tab list / tab select | 1 / 1 | 2 / 2 |
| Snapshot calls (21 successful; 1 targeted call returned "Ref not found") | 22 | 26 |
| Finds (read-only) | 29 | 44 |
| Screenshot calls (13 distinct files) | 13 | 23 |
| Clicks (incl. one Ctrl-click) | 39 | 50 |
| Text typed (`FX_Item`, `%1,%2`) | 2 | 3 (T1 `FX_` into search, not applied) |
| Tab key commits | 6 | 6 |
| Mouse moves / wheel scrolls | 2 / 2 | 4 / 6 |
| **Component classes created** | **1** | **1** |
| **New (Component Classes list)** | **1** | **1** |
| **Validators added** | **1** (FX_Item, once) | **1** |
| Validators changed / created / deleted | 0 / 0 / 0 | 0 / 0 / 0 |
| Validator Parameters entries | 1 (`%1,%2`) | 1 |
| Validate Immediately set | 1 (True) | 1 |
| List Source: Type / IDO / Properties / Columns | 1 / 1 / 3 added / 2 displayed | 1 / 1 / 3 / 2 |
| Dialog OKs | 8 (name prompt, validator picker, Parameters, validators editor, Properties, Columns, List Source, Global Objects) | 8 |
| Dialog Cancels (readback only) | 1 | 3 (T1 2 + T2 1) |
| Prompts answered | 3 OK (name, validator picker, Parameters). Name prompt OK = expected. | 3 OK |
| String / message prompts offered or created | 0 / 0 | 0 / 0 |
| Correction contingency | 0 | 0 |
| Class assignments / parameter entries (AC-3) | 0 / 0 | 0 / 0 |
| Other component changes | 0 | 0 |
| Designer Saves | **1** (Save 1) | **1** (limit 2) |
| Designer close/reopen | 0 | 0 |
| Runtime, Web Client, checkout, cache unload, FormSync, deployment actions | 0 | 0 |
| Re-logins | 0 | 0 |
| Server-event error occurrences | 0 | 0 |

Browser action total excluding snapshots and finds: T2 = 39 clicks + 2 typed + 6 keys + 2 moves + 2 wheel + 13 screenshots + 2 tab actions = **66**. Cumulative = T1 30 + T2 66 = **96**. (T1 included 1 typed and 4 wheel events, and no key presses.)

## Worker-written file inventory (cumulative)

Written or updated by the worker:
- `experiments/EXP-091-hello-world-part-5-section-12-fx-item-component-class-and-assignment.md` (created T1; updated T2)
- T1 screenshots (9 files): `evidence/EXP-091/gate-designer-start.png`, `gate-component-class-list-initial.png`, `gate-component-class-list-scrolled.png`, `gate-validator-list.png`, `gate-validator-list-scrolled.png` (overwritten once; the saved file is the second, scrolled capture), `gate-validator-list-fx.png`, `gate-validator-fx-item-readback.png`, `gate-fx-itemcombobox-before.png`, `gate-fx-itemgridcol-before.png`
- T5 (documentation-only, this audit): `evidence/EXP-091/T5-final-acceptance-report.md` (created); this record (edited: status, reconciliation and acceptance notes). No screenshots or browser calls in T5.

T4 screenshots (6 files, written in T4): `evidence/EXP-091/t4-pre-close-state.png`, `t4-after-close.png`, `t4-reopened-fx-orders.png`, `t4-reopened-class-readback.png`, `t4-reopened-fx-itemcombobox-readback.png`, `t4-reopened-fx-itemgridcol-readback.png`

T3 screenshots (6 files, written in T3): `evidence/EXP-091/t3-fx-itemcombobox-before-assignment.png`, `t3-fx-itemcombobox-component-class-fx-item-after-tab.png`, `t3-fx-itemcombobox-after-parameters.png`, `t3-fx-itemgridcol-before-assignment.png`, `t3-fx-itemgridcol-after-parameters.png`, `t3-save2-response.png`

T2 screenshots (13 files): `evidence/EXP-091/t2-gate-component-class-open.png`, `t2-gate-component-class-list-fx.png`, `t2-new-name-prompt.png`, `t2-new-name-entered-before-ok.png`, `t2-validator-new-fx-item-before-ok.png`, `t2-validator-parameters-percent1-percent2-before-ok.png`, `t2-validators-editor-after-params.png`, `t2-properties-fx_item-fx_description-fx_cost-before-ok.png`, `t2-columns-to-display-before-ok.png`, `t2-list-source-dialog-before-ok.png`, `t2-after-global-objects-ok.png`, `t2-class-readback.png`, `t2-save1-response.png`

Written by the browser tool as a side effect (not worker-authored; outside the EXP-091 paths): accessibility snapshot `.yml` files and console logs under `evidence/playwright/`.

## Evidence (decisive; what each proves and does not prove)

- `t2-validators-editor-after-params.png`: validator editor, row FX_Item with Parameters `%1,%2`, before the editor's OK. Proves the parameter value was entered and committed in the row. Does not prove the class-level readback (that is in the readback file).
- `t2-validator-parameters-percent1-percent2-before-ok.png`: Parameters dialog, text `%1,%2`, before OK. Proves the typed value before confirmation. The lower empty combobox is visible and unexplained.
- `t2-properties-fx_item-fx_description-fx_cost-before-ok.png`: Edit Property Specifications with right list FX_Item, FX_Description, FX_Cost. Proves order before OK.
- `t2-columns-to-display-before-ok.png`: Select Columns dialog with FX_Item and FX_Description outlined; FX_Cost not outlined. Proves the visual selection before OK. The accessibility tree showed only FX_Item selected; the image is the stronger evidence.
- `t2-list-source-dialog-before-ok.png`: Edit List Source with Type IDO Collection, IDO FX_Items, Properties `FX_Item,FX_Description,FX_C…` (truncated in the image; the full string is in the tree and the readback), Columns `1,2`, Rec Cap blank. Proves the dialog state before OK.
- `t2-class-readback.png`: Global Objects with FX_Item selected, Name FX_Item, Version User. Validators and List Source are below the visible scroll area; the values `FX_Item(%1,%2)`, `True` and the STDOLE string come from the accessibility tree, not the image. Proves identity only, not the values.
- `t2-save1-response.png`: toast "Global object(s) were saved." with the toolbar Save and Undo greyed. Proves the native response and clean state after Save 1. Does not prove persistence (no close/reopen yet).

## Next permitted action

T5 (documentation-only final acceptance audit) is complete: AC-1 to AC-5 supported, recommended ACCEPTED AS OBSERVED, with the qualifications in `evidence/EXP-091/T5-final-acceptance-report.md` section 7. Next permitted action: coordinator or operator records the final acceptance decision. No further browser work, Save, close, reopen or runtime test is authorised for EXP-091. Earlier wording follows: Designer Saves are used up (2 of 2); the Form-close/reopen (1 of 1) is used up; New (1 of 1), validator addition (1 of 1) and class assignments (2 of 2) are used up. The Designer is clean with FX_Orders open in User scope and no dialog open; the operator may leave it as is.

## Open items

- AC-1 met (T1). AC-2 met for class creation, validator add and Parameters, Validate Immediately, List Source, Columns, readback and Save 1, with the limits noted above.
- AC-3 met for the committed assignments and parameter entries on both components, with Save 2 confirmed (T3).
- AC-4 met at the Designer-readback level: one clean close, one reopen, class readback and both components read back as expected (T4). Persistence is evidenced only by the reopened Designer, not by runtime or database checks.
- AC-5: supported by `evidence/EXP-091/T5-final-acceptance-report.md` (matrix, reconciliation, file inventory, final state). Recommended outcome ACCEPTED AS OBSERVED.
- AC-2 evidence gaps carried forward: no pre-OK frame for the Global Objects OK; several readbacks verified only through the accessibility tree.
- Hook note (T5): one PreToolUse guard I/O error on a file-listing call, retried once with the same arguments; succeeded.
- Unexplored: the empty combobox in the validator Parameters dialog; the blank Rec Cap Override versus `RECORDCAP(0)` in the string.
- Grid rows showed blank Component Class until the reopen; after the reopen both rows show FX_Item (observed, T4).

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 12 is complete: component class **FX_Item** exists and is applied to FX_ItemCombobox and FX_ItemGridCol on FX_Orders. The operator decided acceptance.

- Created, for later cleanup (tenant-wide global object): component class **`FX_Item`**:
  - Validators `FX_Item(%1,%2)`; Validate Immediately `True`;
  - List Source `STDOLE FX_Items( PROPERTIES(FX_Item,FX_Description,FX_Cost) DISPLAY(1,2)RECORDCAP(0))`.
- Form changes (User scope): FX_ItemCombobox and FX_ItemGridCol now have Component Class `FX_Item` and Component Class Parameters `FX_ItmsDescription,FX_ItmsCost`. No other property changed automatically.
- Saves: Save 1 "Global object(s) were saved." after the class readback; Save 2 "Form [FX_Orders] and global object(s) were saved." after the assignments. Whether an unsaved class appears in the Component Class list stayed untested.
- **Run R-20261014-230638-ig8N:** T1-T4 completed with no Mongoose-affecting errors. T5 (documentation only) paused as `completed_with_denials`: its third Glob (of `evidence/playwright/`) hit a PreToolUse "Guard state unavailable" I/O error, and the worker retried it once with the same arguments instead of stopping. The retry was a read-only listing with no bypass. The operator approved the denials, the coordinator paused for a decision on the retry, and the operator accepted it with `--note`. The run ended `completed/DONE`.
- Screenshots viewed by the operator assistant:
  - `t3-save2-response.png`: the Save 2 toast, scope User, with FX_ItemCombobox showing Component Class FX_Item in Properties while the Components grid column is still blank;
  - `t4-reopened-fx-itemcombobox-readback.png`: after one close and reopen, Properties shows Component Class FX_Item and the grid row shows FX_Item, scope User, Designer clean. Parameters are off-screen; their value comes from the accessibility tree.
- Flagged `browser_type` calls, all allowed: T1 one filter `FX_` (no effect); T2 the name `FX_Item` and `%1,%2`; T3 the two Parameters entries.
- Errors: T2 one stale ref (fresh snapshot, no mutation); T5 the Glob guard error.
- Counts: classes created 1, validator added 1, class assignments 2, Designer Saves 2, close/reopen 1, runtime actions 0, unloads 0, checkout actions 0, re-logins 0.
- Limits: the evidence is Designer readback only. Runtime behavior (section 13) and database durability are not established. The pre-OK frame for the Global Objects OK is missing.
- Harness gap: on a guard-state I/O error, the worker preamble should say plainly whether one identical retry is allowed.
- Confinement (git status): only `evidence/EXP-091/` and this record were written by the run.
- Next: Part 5 section 13, the runtime test on FX_Orders order 1 (Item dumbbell → eggs, unsaved; then close and answer No).
