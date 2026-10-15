# EXP-095 - Hello World Part 6 Section 3: FX_Orders event handler FX_CalcOrderTotal (Form Script Method CalcOrderTotal), Data Change on FX_ItemCombobox and FX_CountEdit, one Designer Save, runtime recalculation check

Status: **T1 to T5 complete; T6 (documentation-only final acceptance audit) complete. Recommendation: ACCEPTED AS OBSERVED, with the qualifications in the T6 section and `evidence/EXP-095/T6-final-acceptance-report.md`.** Earlier T1 to T3 status text follows. After T3 the Designer FX_Orders (User scope) is **clean** (Save and Undo disabled), the handler and both Data Change values read back unchanged after the reopen (same session), and no dialog is open. T4 (runtime baseline, read-only) and T5 (unsaved Count 3 and Item eggs on order 1, save prompt answered No, reopen and comparison) complete. **Observed in the same session:** Order Total showed 135.00 after the unsaved Count change (before any Save) and 20.97 after the unsaved Item change to eggs (Cost 6.99). After the discard and reopen both orders matched the baseline. The runtime Form was closed cleanly and no FX_Orders Form is open in the Web Client. Designer FX_Orders was not touched in T5 (still clean from T3). Runtime recalculation is observed but **not independently verified** (see T5 limits); no cross-session or database-level durability was checked.

Scope: Hello World Part 6 Section 3 (transcript 02:05-03:43), adapted to FX_ names and User scope. Section 4 (grid columns) and Sections 5-8 are out of scope.

## Purpose

Create one FX_Orders event handler in the Designer, named `FX_CalcOrderTotal`, with Response Type Form Script Method, method `CalcOrderTotal` and parameters `P(FX_Count),P(FX_ItmsCost)` (OrderCount first, ItemCost second). Then wire it to Data Change on FX_ItemCombobox and FX_CountEdit, save once, verify persistence, and observe (without saving) whether the Order Total recalculates in the Web Client on an unsaved Count and Item change. Findings are observed only.

## Sources reviewed (T1, before browser interaction)

- `AGENTS.md` (full).
- `docs/mongoose/transcripts/hello-world-pt6.md` Section 3 (lines 113-135) and the timestamp lines for 02:05-03:43 (Section 3 is the only block; no other timestamp lines matched).
- `docs/mongoose/scripts/FX_Orders-form-script.vb` (reference only; 24 lines; method `CalcOrderTotal(OrderCount As String, ItemCost as String)` writing `FX_DerOrderTotal`).
- `recipes/components/apply-component-class.md` (runtime steps and pitfalls: outputs update before Save for the combobox; derived Order Total did not recalculate before Save in EXP-092; discard with close and No).
- `recipes/session/session-expiry-and-stale-designer.md` (expiry symptoms and the one-time procedure).
- Outcome (operator) sections only: EXP-093 (`experiments/EXP-093-...md`, from line 1010) and EXP-094 (`experiments/EXP-094-...md`, from line 264). No other part of either record was read.
- Not read: `tools/` (unreadable by instruction), the secrets folder, and `tools/claude-harness/protocol/worker-preamble.md` (the session-expiry procedure was taken from the task text).

Carried from EXP-093/EXP-094 Outcomes (observed, not re-tested here):
- Opening the Script Editor on an empty script and pressing Cancel left the Form dirty (EXP-093). On the saved FX_Orders script (EXP-094), Cancel left it clean.
- The Script Editor has a collapsible "Compile Result" panel with Output and Errors tabs; it was never expanded before this run.
- The editor auto-indents typed lines; no typing into the editor was done here.
- An hourly session expiry produces a server-event error on component selection in a stale Designer tab.

## Starting state and gate (AC-1)

Browser tabs at start: tab 0 = Designer (`designer/Default.aspx`, `MGForm=FX_Orders`); tab 1 = portal Mongoose page. Tab 0 was selected (list first, then select). No session-expiry modal, no sign-in page, no server-event error was seen.

Designer gate (read-only unless noted):
- Form identity and scope: Properties header `FX_Orders`; status bar `ScopeType: User`. The ScopeName (the signed-in user account) is shown in the status bar and in the screenshots; it is not transcribed here.
- Clean: the top-toolbar Save and Undo were disabled (accessibility tree: `button "Save" [disabled]`; greyed icons in the screenshot).
- Script Language: `Visual Basic` (Behavior group, Form properties).
- Event Handlers grid: no rows (columns Sequence, Response Type, Disabled, Response Parameters; empty).
- Data Change on FX_ItemCombobox (EnhancedCombo) and FX_CountEdit (Edit): blank. Primary, Data Change, Lose Focus and Gain Focus were all blank on both; Drag From and Drop On show `0 event(s)`.
- Component Class: the Components grid shows `FX_Item` on FX_ItemCombobox (pre-existing, from EXP-091); not changed.

Screenshots: `evidence/EXP-095/gate-designer-form-clean.png`, `gate-event-handlers-grid-before.png`, `gate-itemcombobox-events-before.png`, `gate-countedit-events-before.png`, and `gate-components-grid-before.png` (collapsed panes only).

Gate result: **passed.** Designer clean, User scope, Visual Basic, no handler rows, both Data Change values blank.

## Compile Result (AC-1, read-only)

1. Selected the Form (Properties tab `Form`), then clicked the blue pencil (`btnEditDownload`) once. The Script Editor opened. Its content (24 lines, visible in `script-editor-opened-before-compile-result.png`) includes line 14 `Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)`, the `FX_DerOrderTotal` line and `End Namespace`. The editor's textbox held focus; nothing was typed into it.
2. Expanded the Compile Result panel with one click on its "Expand Panel" control (`compile-result-panel-expanded.png`).
3. Recorded content, verbatim:
   - Tabs: `Output` (selected), `Errors`.
   - Output area: **empty**.
   - Errors tab: **not opened** (the brief allows one view click). Compile errors, if any, were therefore not inspected. See Open questions.
4. Left the editor once with **Cancel** (no OK, no Run, no Download, no Help).
5. After Cancel: editor closed; Save and Undo disabled (`after-script-editor-cancel-designer-state.png`; accessibility `button "Save" [disabled]`). Designer clean.

## Event handler (AC-2, partial: created and read back; Data Change and Save not yet done)

### Fields before filling (recorded from the dialog and property grid)

Details > Event Handlers, bottom-left grid toolbar `+` (New), clicked once (not the top-toolbar New button). The `Event Handler` dialog (`new-handler-form-after-new-click.png`) has:
- `Name:` (combobox with drop-down; an `OK` and a `Cancel` button). This is the only field in this dialog.

Opening the Name drop-down (`new-handler-name-dropdown-open.png`) listed standard events (`StdAppLaunchInbox`, `StdAppLaunchTasks`, `StdCurComp...`) in alphabetical order; no FX_ entry appeared in the rendered part of the list. The list may be virtualised, so this is not proof that FX_CalcOrderTotal is absent. The brief's fallback (type it once) was used.

### Fields filled

1. `Name:` typed once: `FX_CalcOrderTotal` (`new-handler-form-after-name-typed.png`). Dialog `OK` clicked once. Corrections: 0.
2. After OK, the grid shows a group row `FX_CalcOrderTotal` with one handler row: Sequence `0`, Disabled `false`, Response Type blank. The right-hand `Event To Handle` grid shows: `Event` = `FX_CalcOrderTotal`; `Description` blank; `Sequence` = 0; `Disabled` = False; and a collapsed `Response` group (`handler-row-after-name-ok.png`). The Designer became dirty (Save enabled).
3. Expanded the `Response` group (one chevron click; `handler-properties-response-expanded.png`, scrolled with one wheel step, `scratch-handler-properties-after-scroll.png`). Its children, with exact labels: **`Type`** (drop-down, blank), **`Parameters`** (text, blank, with an `Open Edit Property Dialog` `...` button), and **`Edit in-line Script`**. The grid column is named `Response Type`, but the property is labelled `Type`.
4. `Type` drop-down opened once (`response-type-dropdown-open.png`: options `Add Breadcrumb`, `Add entry to the Audit Log`, `Binary Value Action`, `Collection ...`, ... in alphabetical order). Selected `Form Script Method` once (`handler-response-type-after-select.png`). Corrections: 0.
5. `Parameters` `...` button clicked once. The `Event Handler Parameters` dialog opened (blank state seen before filling). Its fields, with exact labels:
   - General: `Error Message:` (blank); `Success Message:` (blank); `Only When Current Collection Is:` (`<all collections>`); `Only When Platform Is:` (blank); `Keep:` (blank); checkboxes `Ignore Failure` (unchecked), `Message as Toast?` (unchecked), `Disabled` (unchecked).
   - Edit Script Name and Parameters: `Name:` (drop-down, blank; its `Open` button opened a list with one option, `CalcOrderTotal`); `Parameters:` (text, blank).
   - Buttons: `OK`, `Cancel`, `Help`.
   The `Name:` drop-down was opened once and `CalcOrderTotal` selected once. The `Parameters:` text was entered once: `P(FX_Count),P(FX_ItmsCost)`. All other fields left at their defaults.
   Screenshot before OK: `parameters-dialog-before-ok.png` (shows Name `CalcOrderTotal`, Parameters `P(FX_Count),P(FX_ItmsCost)`, other fields default). See the screenshot deviation below.
6. Dialog `OK` clicked once.
7. Read back (`handler-row-readback-after-parameters-ok.png`): the group `FX_CalcOrderTotal`; row Sequence `0`; **Response Type = `Form Script Method`**; **Disabled = `false`**; **Response Parameters = `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))`**. The `Event To Handle` panel shows `Event` = `FX_CalcOrderTotal`, `Sequence` = 0, `Disabled` = False.

Corrections in this step: **0** (no field needed a second entry). The handler was not saved.

Result: **handler read back as intended (same session, unsaved).** Persistence not yet verified.

## Not performed in T1 (for later tasks)

- Data Change = `FX_CalcOrderTotal` on FX_ItemCombobox and on FX_CountEdit (T2).
- The single Designer Save (native response not yet recorded).
- Persistence: one Designer close/reopen; readback of the handler row and both Data Change values (AC-3).
- Runtime Count 2 -> 3 and Item dumbbell -> eggs on order 1, unsaved, with recording; discard by close and No; reopen and comparison (AC-4).

## Deviations and observations (T1)

- **Screenshot overwrite.** Two captures reused a filename, so the earlier one was replaced: `gate-itemcombobox-events-before.png` was written three times (final = expanded Events, showing Data Change blank), and `parameters-dialog-before-ok.png` was written twice. The blank pre-fill Parameters dialog was therefore **not kept as an image**; its fields are recorded above from the first capture. Future captures should use distinct names.
- **Extra property steps.** The brief expected the handler fields in one dialog. In this build, the Name step is a one-field dialog; Response Type and Parameters are set in the `Event To Handle` property grid, and the Parameters dialog is opened from there.
- **URL changed.** After the Name OK, the Designer page URL no longer carried `&MGForm=FX_Orders` (the Designer tab still showed the FX_Orders tab and Properties Name FX_Orders). Observed; no action taken.
- **Console header.** Designer snapshot headers show `Console: 2 errors, 0 warnings` (also seen in EXP-094). Not inspected (out of scope).
- **Page Properties panel.** After Form properties were selected for the pencil, the Form tab was used; no Form property was edited.
- No session expiry or server-event error occurred in T1. No re-login.

## Cumulative browser action audit (T1 only; exact counts)

| Category | Count | Notes |
|---|---|---|
| Tab list (read-only) | 1 | before any selection |
| Tab select | 1 | tab 0 (Designer) |
| Browser snapshot calls | 2 | 1 untargeted (initial), 1 targeted (dialog) |
| Find calls (read-only) | about 28 | tallied from the session log; treat as approximate by ±1 |
| Screenshot calls | 24 | 21 distinct files (3 overwrites: see Deviations) |
| Ref clicks | 21 | Expand Details 1; Event Handlers tab 2; Components tab 1; FX_ItemCombobox row 1; Events group row 1; FX_CountEdit row 1; Properties Form tab 1; pencil (Script Editor open) 1; Compile Result expand 1; Script Editor Cancel 1; handler New `+` 1; Name drop-down arrow 1; Name field focus 1; Name dialog OK 1; Type drop-down 1; Form Script Method option 1; Parameters `...` 1; Parameters Name `Open` 1; CalcOrderTotal option 1; Parameters dialog OK 1 |
| Mouse clicks at coordinates | 4 | Pane (00) chevron 1; Pane (01) chevron 1; Events chevron 1; Response chevron 1 |
| Mouse wheel | 1 | scroll of the Event To Handle grid (view only) |
| Typed entries | 2 | Name `FX_CalcOrderTotal` (corrections 0); Parameters `P(FX_Count),P(FX_ItmsCost)` (corrections 0) |
| Dropdown opens without a selection | 1 | Name drop-down arrow (closed by the name entry) |
| Script Editor opens | 1 | via the pencil |
| Script Editor closes | 1 | by Cancel (not OK) |
| Script Editor OK / Run / Download / Help / text typed into editor | 0 / 0 / 0 / 0 / 0 | |
| Event handler New | 1 | |
| Event handler corrections | 0 | |
| Data Change entries | 0 | not reached (T2) |
| Designer Saves | 0 | not reached (T2) |
| Designer close/reopen pairs | 0 | |
| Runtime opens / closes / F4 presses / entries | 0 / 0 / 0 / 0 | |
| Prompts answered (Yes / No) | 0 / 0 | no prompt appeared |
| Errors seen | 0 | no server-event error, no expiry |
| Worker re-logins | 0 | |
| Unloads / checkout actions / FormSync / deployment | 0 / 0 / 0 / 0 | |

## Worker-written file inventory (T1)

Written by the worker (this task):
- `experiments/EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md` (created).
- `evidence/EXP-095/` PNG files (21 distinct):
  - `gate-designer-form-clean.png`
  - `gate-event-handlers-grid-before.png`
  - `gate-components-grid-before.png`
  - `scratch-components-pane00-expanded.png`
  - `scratch-components-pane01-expanded.png`
  - `gate-itemcombobox-events-before.png`
  - `gate-countedit-events-before.png`
  - `gate-form-selected-before-script-editor.png`
  - `script-editor-opened-before-compile-result.png`
  - `compile-result-panel-expanded.png`
  - `after-script-editor-cancel-designer-state.png`
  - `new-handler-form-after-new-click.png`
  - `new-handler-name-dropdown-open.png`
  - `new-handler-form-after-name-typed.png`
  - `handler-row-after-name-ok.png`
  - `handler-properties-response-expanded.png`
  - `scratch-handler-properties-after-scroll.png`
  - `response-type-dropdown-open.png`
  - `handler-response-type-after-select.png`
  - `parameters-dialog-before-ok.png`
  - `handler-row-readback-after-parameters-ok.png`

Tool-generated, not worker-authored: the Playwright MCP wrote one page snapshot file per browser action under `evidence/playwright/` (`page-*.yml`) and console logs (`console-*.log`). These are outside `evidence/EXP-095/`; the harness git diff is authoritative.

No script, recipe, AGENTS.md, tutorial, or earlier-experiment file was written.

## Evidence: what each decisive image shows and does not prove

| File | Shows | Does not prove |
|---|---|---|
| gate-designer-form-clean.png | FX_Orders Designer, Properties Form Name FX_Orders, Script Language Visual Basic, Save/Undo greyed, status bar ScopeType User | Persistence; that nothing changes later |
| gate-event-handlers-grid-before.png | Event Handlers grid with headers and no rows | Hidden rows outside the grid viewport (grid viewport was empty) |
| gate-itemcombobox-events-before.png | FX_ItemCombobox (EnhancedCombo) Events: Primary, Data Change, Lose Focus, Gain Focus blank; Drag/Drop 0 events | Anything about other components |
| gate-countedit-events-before.png | FX_CountEdit (Edit) Events all blank; Drag/Drop 0 events | Anything about other components |
| script-editor-opened-before-compile-result.png | Script Editor with 24 lines including `Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)` (line 14); buttons OK/Cancel/Help/Download; Compile Result collapsed | That the script compiles |
| compile-result-panel-expanded.png | Compile Result expanded; Output tab selected and blank; Errors tab present | The Errors tab content (not opened) |
| after-script-editor-cancel-designer-state.png | Editor closed; Save/Undo greyed | Clean state after later steps |
| new-handler-form-after-new-click.png | Event Handler dialog with one field `Name:` and OK/Cancel | Other dialog fields (none existed in this dialog) |
| new-handler-name-dropdown-open.png | Name drop-down list of Std* events | That FX_CalcOrderTotal is absent from the full list (virtualised) |
| new-handler-form-after-name-typed.png | Name field reads FX_CalcOrderTotal | That the name is stored (checked later by grid row) |
| handler-row-after-name-ok.png | Group FX_CalcOrderTotal; row Sequence 0, Disabled false; Event To Handle Event FX_CalcOrderTotal; Save enabled | Response Type/Parameters (not yet set) |
| handler-properties-response-expanded.png | Response group expanded; children below the viewport | The child values |
| scratch-handler-properties-after-scroll.png | Response children: Type (blank), Parameters (blank with `...`), Edit in-line Script | Values after later steps |
| response-type-dropdown-open.png | Type drop-down options (alphabetical, partial list) | Full option set |
| handler-response-type-after-select.png | Type = Form Script Method; Parameters `...` enabled | Parameters value |
| parameters-dialog-before-ok.png | Parameters dialog filled: Name CalcOrderTotal, Parameters P(FX_Count),P(FX_ItmsCost), other fields default. **Overwrote the blank pre-fill capture** | The blank state as an image |
| handler-row-readback-after-parameters-ok.png | Row: Response Type Form Script Method, Disabled false, Response Parameters `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))`; Event To Handle shows the event | That the handler is saved; that the method compiles and runs |

Acceptance mapping (T1):
- **AC-1: met.** Sources reviewed; session usable; Designer FX_Orders User scope and clean; Script Language Visual Basic; no handler rows; both Data Change values blank; Compile Result recorded verbatim (Output empty; Errors not opened); editor left with Cancel; Designer clean afterwards. Evidence: gate-designer-form-clean.png, gate-event-handlers-grid-before.png, gate-itemcombobox-events-before.png, gate-countedit-events-before.png, script-editor-opened-before-compile-result.png, compile-result-panel-expanded.png, after-script-editor-cancel-designer-state.png.
- **AC-2: partially met.** The handler FX_CalcOrderTotal was created and read back with Response Type Form Script Method, method CalcOrderTotal and parameters P(FX_Count),P(FX_ItmsCost); corrections 0. **Not yet met:** Data Change on both components, the single Designer Save and its native response. Evidence so far: new-handler-form-after-new-click.png, new-handler-form-after-name-typed.png, parameters-dialog-before-ok.png, handler-row-readback-after-parameters-ok.png.
- **AC-3 to AC-6:** not yet performed (later tasks).

## Knowledge state (per finding; all same-session UI, not replayed)

- Event handler creation via Details > Event Handlers `+` -> Name dialog -> Event To Handle `Type` and `Parameters` (Parameters dialog with Name drop-down listing the method `CalcOrderTotal`): **observed** (one execution; not yet saved).
- Name drop-down in the New handler dialog shows standard Std* events first; FX_ entries not visible in the rendered part: **observed** (inconclusive for the full list).
- Script Editor content on the saved script still includes the method: **observed**.
- Compile Result Output empty on this open: **observed** (Errors tab not inspected; compile success **not established**).
- Cancel on the saved script left the Designer clean (after the handler was not yet added): **observed**, consistent with EXP-094.

## Open questions / next step

1. **Compile Result Errors tab.** Not inspected under the one-view-click rule. The coordinator can decide whether a further read-only look is wanted; it is the only evidence for compile success.
2. **Designer state.** The Designer FX_Orders is **dirty** (handler added, unsaved), with no dialog open. The next task must inspect state read-only first, then set Data Change on FX_ItemCombobox and FX_CountEdit to `FX_CalcOrderTotal`, then perform one Save.
3. **Name drop-down.** Whether FX_CalcOrderTotal is in the full list (virtualised list) is not established; the name was typed.
4. Runtime recalculation (the main question of EXP-095) is not yet tested.

## Blockers

None in T1. The task stopped before the component Data Change step as the bounded instruction requires.

## T2: pre-change check, Data Change on both components, one Designer Save (2026-10-15, worker session 6b03803b-35a8-4bda-a4a0-d561ba556c64)

Scope of T2 (from the bounded instruction): read-only state check; Data Change = FX_CalcOrderTotal on FX_ItemCombobox and FX_CountEdit (one entry each); exactly one native Designer Save. No close or reopen, no Script Editor, no other component, handler or property. The T1 items "Data Change" and "the single Designer Save" in the Not-performed list above are now done by T2; the persistence and runtime items remain open.

### Pre-change check (read-only, AC-2 precondition)

- Tabs listed first (2 tabs: 0 = Designer FX_Orders, 1 = portal Mongoose); tab 0 selected; fresh untargeted snapshot taken.
- Designer: Properties header `FX_Orders`; status bar `ScopeType: User`; **Save enabled** (the T1 Save is still pending from the dirty state), Undo enabled; no dialog open; no server-event error.
- Event Handlers grid: one group `FX_CalcOrderTotal`, one row: Sequence `0`, Response Type `Form Script Method`, Disabled `false`, Response Parameters `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))`. Matches T1. Not modified in T2.
- Script Language: `Visual Basic` (Form properties).
- Result: **matches T1; no discrepancy.** Screenshot: `t2-pre-change-state-designer.png`.

### Data Change on FX_ItemCombobox (AC-2)

1. Components tab selected (Details). FX_ItemCombobox row selected (ComboBox, object.FX_Item, pane 1, tab 20, Component Class FX_Item). Properties shows `FX_ItemCombobox (EnhancedCombo)` with Events expanded; Primary, Data Change, Lose Focus and Gain Focus blank before the change (`t2-itemcombobox-selected-before-data-change.png`).
2. Data Change drop-down opened once. Its first entry was `FX_CalcOrderTotal` (the list began with it, then the Std* events), so no typed name was needed.
3. Option `FX_CalcOrderTotal` selected once.
4. Commit: one Tab press (to leave the field). Accessibility readback: combobox value `FX_CalcOrderTotal` (full text). Screenshot after the Tab: Data Change displays `FX_CalcOrderTotal`; Lose Focus and Gain Focus still blank; Drag/Drop still `0 event(s)`. File: `t2-itemcombobox-data-change-readback.png` (see the overwrite note below).
- Corrections: **0.**

### Data Change on FX_CountEdit (AC-2)

1. FX_CountEdit row selected (Edit, object.FX_Count, pane 1, tab 26). Properties shows `FX_CountEdit (Edit)`; Data Change blank before the change (`t2-countedit-selected-before-data-change.png`).
2. Data Change drop-down opened once; `FX_CalcOrderTotal` was the first entry.
3. Option `FX_CalcOrderTotal` selected once.
4. Commit: one Tab press. Accessibility readback: `FX_CalcOrderTotal`. Screenshot: Data Change `FX_CalcOrderTotal`; Lose Focus and Gain Focus blank (`t2-countedit-data-change-readback.png`).
- Corrections: **0.**

Only Data Change was set on each component. Primary, Lose Focus, Gain Focus, Drag From and Drop On were not touched; no grid column or other component was changed.

### Designer Save (AC-2, exactly one)

- Native toolbar Save clicked **once** (no retry).
- Native response, verbatim: toast with title `Save` and text `Form [FX_Orders] and global object(s) were saved.` (`designer-save-response.png`). No error, no dialog, no prompt.
- Immediately after: toolbar Save `[disabled]` and Undo `[disabled]` (accessibility readback). The Designer is clean.

Result: **Save succeeded (same-session UI toast; no error).** Persistence not yet verified: the close/reopen is in T3.

### AC status after T2

- AC-1: met (T1).
- AC-2: **met for the handler, the two Data Change values and the single Save** (same-session UI evidence; corrections 0 in T1 and T2; no error). Evidence: handler readback (T1 `handler-row-readback-after-parameters-ok.png`; T2 `t2-pre-change-state-designer.png`), Data Change readbacks (`t2-itemcombobox-data-change-readback.png`, `t2-countedit-data-change-readback.png`), Save (`designer-save-response.png`).
- AC-3 to AC-6: not yet performed.

### Screenshots (T2): what each shows and does not prove

| File | Shows | Does not prove |
|---|---|---|
| t2-pre-change-state-designer.png | FX_Orders, Save enabled, Undo enabled, handler row Form Script Method / CalcOrderTotal(P(FX_Count),P(FX_ItmsCost)), Script Language Visual Basic, ScopeType User | Any persistence; the Data Change values (not yet set) |
| t2-itemcombobox-selected-before-data-change.png | FX_ItemCombobox (EnhancedCombo) selected; Events expanded; Data Change blank | The value after the change |
| t2-itemcombobox-data-change-readback.png | Data Change `FX_CalcOrderTotal` after Tab; Lose Focus and Gain Focus blank. **Overwrote the pre-Tab capture** (that capture showed the value truncated as `FX_CalcOrderTota`, and the accessibility readback gave the full text before the Tab) | Persistence |
| t2-countedit-selected-before-data-change.png | FX_CountEdit (Edit) selected; Data Change blank | The value after the change |
| t2-countedit-data-change-readback.png | Data Change `FX_CalcOrderTotal`; Lose Focus and Gain Focus blank | Persistence |
| designer-save-response.png | The Save toast `Form [FX_Orders] and global object(s) were saved.`; Save and Undo greyed in the toolbar; the Save tooltip visible | That the saved data is durable outside this session |

### T2 action audit (T2 only; exact counts)

| Category | T2 count | Notes |
|---|---|---|
| Tab list (read-only) | 1 | before any selection |
| Tab select | 1 | tab 0 |
| Browser snapshot (untargeted) | 1 | fresh start-of-task snapshot |
| Find calls (read-only) | 12 | Components, FX_ItemCombobox, Data Change, FX_CalcOrderTotal (list), FX_CalcOrderTota (commit readback), FX_CountEdit, Data Change, FX_CalcOrderTotal (list), combobox/FX_CalcOrderTotal readback, Save, saved (toast), Save/Undo readback |
| Screenshot calls | 7 | 6 distinct files (`t2-itemcombobox-data-change-readback.png` written twice) |
| Ref clicks | 8 | Components tab 1; FX_ItemCombobox row 1; Data Change drop-down 1; FX_CalcOrderTotal option 1; FX_CountEdit row 1; Data Change drop-down 1; FX_CalcOrderTotal option 1; toolbar Save 1 |
| Keyboard Tab presses | 2 | one commit per component (the field value is not otherwise changed) |
| Mouse clicks at coordinates / wheel | 0 / 0 | |
| Typed text entries | 0 | |
| Data Change entries | 2 | FX_ItemCombobox 1; FX_CountEdit 1 |
| Corrections | 0 | |
| Designer Saves | 1 | native toolbar Save, one invocation, success toast |
| Designer close/reopen pairs | 0 | not performed in T2 |
| Script Editor opens | 0 | not performed in T2 |
| Handler New | 0 | not performed in T2 |
| Prompts answered | 0 | no prompt appeared |
| Errors seen | 0 | no server-event error, no session expiry |
| Re-logins | 0 | |
| Other | 0 | no unload, checkout, FormSync, deployment, Run/Download/Help, runtime action |

Note on T1 counts: the T1 find figure (about 28) was counted from the session log and is approximate. The controller audit was not available to the worker, so no exact T1 find count is stated; the cumulative figure below carries that approximation forward.

### Cumulative browser action audit (T1 + T2)

| Category | T1 | T2 | Cumulative |
|---|---|---|---|
| Tab list | 1 | 1 | 2 |
| Tab select | 1 | 1 | 2 |
| Browser snapshot | 2 | 1 | 3 |
| Find calls | about 28 (approximate) | 12 | about 40 (approximate) |
| Screenshot calls | 24 (21 distinct files) | 7 (6 distinct) | 31 (27 distinct) |
| Ref clicks | 21 | 8 | 29 |
| Mouse clicks at coordinates | 4 | 0 | 4 |
| Mouse wheel | 1 | 0 | 1 |
| Keyboard Tab presses | 0 | 2 | 2 |
| Typed entries | 2 | 0 | 2 |
| Script Editor opens | 1 | 0 | 1 |
| Script Editor closes | 1 (Cancel) | 0 | 1 (Cancel); OK / Run / Download / Help 0 |
| Event handler New | 1 | 0 | 1 |
| Event handler corrections | 0 | 0 | 0 |
| Data Change entries | 0 | 2 | 2 |
| Data Change corrections | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 |
| Designer close/reopen pairs | 0 | 0 | 0 |
| Runtime opens / closes / F4 / entries | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |
| Prompts answered (Yes / No) | 0 / 0 | 0 / 0 | 0 / 0 |
| Errors seen | 0 | 0 | 0 |
| Worker re-logins | 0 | 0 | 0 |
| Unloads / checkout / FormSync / deployment | 0 | 0 | 0 |

### Worker-written file inventory (T2 additions)

Written or overwritten by the worker in T2 (in addition to the T1 inventory above):
- `evidence/EXP-095/t2-pre-change-state-designer.png` (new)
- `evidence/EXP-095/t2-itemcombobox-selected-before-data-change.png` (new)
- `evidence/EXP-095/t2-itemcombobox-data-change-readback.png` (written twice; the final file is the post-Tab readback)
- `evidence/EXP-095/t2-countedit-selected-before-data-change.png` (new)
- `evidence/EXP-095/t2-countedit-data-change-readback.png` (new)
- `evidence/EXP-095/designer-save-response.png` (new)
- `experiments/EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md` (this record: status line and T2 section)

No other files were written by the worker in T2. Tool-generated Playwright snapshot and console files under `evidence/playwright/` are outside this experiment directory.

### Final state after T2

- Designer FX_Orders, ScopeType User, **clean** (toolbar Save and Undo disabled), Script Language Visual Basic.
- Handler FX_CalcOrderTotal present (one row; unchanged in T2).
- FX_ItemCombobox and FX_CountEdit: Data Change `FX_CalcOrderTotal`; Lose Focus and Gain Focus blank.
- Components tab active; FX_CountEdit selected; Properties Component tab shows Events; no dialog open; the Save toast is visible and will auto-dismiss.
- Designer not closed or reopened (that is the T3 persistence step).
- The Script Editor was not opened in T2.

### Knowledge state (T2; same-session UI only)

- Data Change assignment by drop-down on a combobox and an edit component, with one Tab commit: **observed** (one execution each; the value reads back in full in the accessibility tree).
- Designer Save of the handler and both Data Change values produced the success toast and cleared the dirty state: **observed** (same session). Durability outside the session is not established.
- Handler row unchanged across the Save: **observed** (same session).

### Open questions / next step (T3)

1. Persistence: one Designer close (Form-tab control) and one reopen (Form menu recent forms). Verify Save disabled, the handler row and both Data Change values unchanged. Record any save prompt and answer No if one appears.
2. Runtime recalculation (the main EXP-095 question) after T3.
3. Compile Result Errors tab still not inspected (compile success not established).

### Blockers

None in T2. The Designer is clean; no dialog or error is open.

## T3: Designer persistence verification (one close, one reopen; read-only readbacks) (2026-10-15, worker session 6b03803b-35a8-4bda-a4a0-d561ba556c64)

Scope of T3 (bounded instruction): read-only gate; close FX_Orders once through its Form-tab close control; reopen once through the Form menu recent-forms entry; read back the handler row and both Data Change values; check Save and Undo. No handler change, no property change, no Save, no Script Editor, no runtime FX_Orders.

### Pre-close gate (read-only, fresh snapshot)

- Tabs listed first (2 tabs: 0 = Designer FX_Orders, 1 = portal Mongoose). Tab 0 selected. Fresh untargeted snapshot at the start of the task.
- Designer: Properties header `FX_Orders`; status bar `ScopeType: User`; toolbar **Save `[disabled]`, Undo `[disabled]`** (accessibility tree and `t3-pre-close-gate-designer-clean.png`); no dialog; no server-event error.
- Script Language `Visual Basic` (Form properties, still in the tree).
- Components tab: FX_CountEdit showed Data Change `FX_CalcOrderTotal` (Properties, FX_CountEdit component selected before the close).
- Result: **matches the end of T2; no discrepancy. Designer clean before closing.** No mutation was made before the close.

### Close (Form-tab control, one invocation)

- A first click on the FX_Orders close control (accessibility ref `e253`; **corrected in T6:** this ref came from the T2 snapshot, not from the T3 start-of-task snapshot, which showed the control as `e247`) **timed out without effect**: Playwright reported `element ... intercepts pointer events` by `div#compadorner-1977` (a Mongoose adorner overlay), and the ref had resolved to the grid column header `rownumberer-1912` instead of the tab control. Nothing was clicked. Recorded as an error (see below).
- One fresh untargeted snapshot taken (counted as the single allowed recovery snapshot). It was saved to `evidence/EXP-095/t3-fresh-snapshot-before-close.md`. The current Form-tab close control is `button "closable FX_Orders"`, Save and Undo still `[disabled]`.
- The close control was clicked **once**. Result: the FX_Orders tab closed and the workspace went blank (`t3-after-close-prompt-check.png`). Toolbar Save and Undo disabled; Properties panel empty; status bar still `ScopeType: User`.
- **Prompt: none.** No save prompt, no confirmation dialog, no browser dialog appeared. Nothing was answered. The brief's "answer No" branch was not needed.

### Reopen (Form menu recent-forms entry, one invocation)

- `Form` menu opened once (`t3-form-menu-open.png`). Its items, top to bottom: `Definition` (submenu), `Sign Out`, `FX_Orders`, `FX_HelloWorld01`, `FX_Items`, `IDO Properties`, `IDOs`, `Sql Tables`, `IDO Projects`, `Property Classes`, `FX_UMs`, `Export/Import Strings`. `Sign Out` was not clicked.
- Recent-forms item `FX_Orders` clicked **once**. The Designer reopened FX_Orders (`t3-reopened-designer-readback.png`): Properties Name `FX_Orders`; status bar `ScopeType: User`; Script Language `Visual Basic`; toolbar **Save `[disabled]`, Undo `[disabled]`** (accessibility readback and screenshot). The Details panel reopened collapsed.
- Details panel expanded once (view only). Event Handlers tab selected once.

### Readbacks after the reopen (no dialog opened; no value changed)

- **Event Handlers:** on arrival the group `FX_CalcOrderTotal` was collapsed (its row hidden). Expanded it once by clicking the group row (view only). The row reads (`t3-reopened-event-handler-row.png`, final expanded image):
  - Sequence `0`; Response Type `Form Script Method`; Disabled `false`; Response Parameters `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))`.
  - Matches T1 and T2. The handler dialog was **not opened** (the grid shows the method and parameters).
  - Note: the same filename was written first with the group collapsed and then overwritten with the expanded row; only the expanded image is kept.
- **Components (Pane (01) expanded once by its chevron, view only; Pane (00) untouched):**
  - FX_ItemCombobox (EnhancedCombo) selected: Data Change **`FX_CalcOrderTotal`**; Primary blank; Lose Focus blank; Gain Focus blank; Drag From Events and Drop On Events `0 event(s)` (`t3-reopened-itemcombobox-data-change.png`).
  - FX_CountEdit (Edit) selected: Data Change **`FX_CalcOrderTotal`**; Primary blank; Lose Focus blank; Gain Focus blank; Drag/Drop `0 event(s)` (`t3-reopened-countedit-data-change.png`).
  - Components grid itself: `t3-components-grid-after-reopen.png` (both panes collapsed before the expansion).
- **Save and Undo after the readbacks:** Save `[disabled]`, Undo `[disabled]` (accessibility readback; the readbacks changed nothing, so no restoration pair was needed).

### Result against the brief

- The Designer FX_Orders remains open in **User scope and clean**: Save disabled, Undo disabled, no dialog, no server-event error.
- **Handler row and both Data Change values read back unchanged after one Designer close/reopen (same session).**
- No other event value was observed as changed (Primary, Lose Focus, Gain Focus blank on both components; Drag/Drop 0 on both).
- Designer close/reopen pairs used in the experiment: **1** (T3). The brief allows at most two; no restoration pair was used.

### Errors and deviations (T3)

1. **Click timeout on the close control (no effect).** Ref `e253` (**corrected in T6:** a stale ref from the T2 snapshot, not from the T3 start-of-task snapshot, which showed `e247`) resolved to the grid column header `rownumberer-1912`; Playwright then waited on the adorner overlay `compadorner-1977` that intercepted the pointer, and timed out after about 5 seconds. Nothing was clicked, and the Designer state was unchanged afterwards. Suspected cause: an adorner overlay over the tab strip plus a stale ref mapping (the ref was not re-resolved to the tab). Recovered with one fresh untargeted snapshot (file above) and a click on the current ref `e247` (single successful close). Reported as a suspected environment/rendering blocker, not as a Designer state change.
2. **Handler group collapsed on reopen.** The group opened collapsed and was expanded with one click on the group row. Expansion only; no value changed.
3. **Screenshot overwrite.** `t3-reopened-event-handler-row.png` was written twice (collapsed, then expanded). The collapsed image is lost; the record above describes it.
4. No prompt, no dialog, no server-event error, no session expiry, no re-login.

### Screenshots (T3): what each shows and does not prove

| File | Shows | Does not prove |
|---|---|---|
| t3-pre-close-gate-designer-clean.png | FX_Orders, User scope, Save and Undo greyed in the toolbar, Script Language Visual Basic, FX_CountEdit selected with Data Change `FX_CalcOrderTotal` | Anything after the close |
| t3-after-close-prompt-check.png | Workspace blank after closing FX_Orders; Save greyed; no prompt or dialog visible | That the server-side definition is stored (the same-session reopen supports it only partly) |
| t3-form-menu-open.png | Form menu recent-forms list including `FX_Orders` (and `Sign Out`, not clicked) | The contents of the form |
| t3-reopened-designer-readback.png | Reopened FX_Orders, Name FX_Orders, User scope, Visual Basic, Save/Undo greyed | The handler and Data Change values (not visible in this image) |
| t3-reopened-event-handler-row.png | Event Handlers grid expanded: group FX_CalcOrderTotal; row Sequence 0, Form Script Method, Disabled false, CalcOrderTotal(P(FX_Count),P(FX_ItmsCost)) | That the handler runs at runtime |
| t3-components-grid-after-reopen.png | Components grid with Pane (00) and Pane (01) collapsed after the reopen | Any event value |
| t3-reopened-itemcombobox-data-change.png | FX_ItemCombobox (EnhancedCombo): Data Change `FX_CalcOrderTotal`; Lose Focus and Gain Focus blank; Drag/Drop 0 | Runtime behaviour |
| t3-reopened-countedit-data-change.png | FX_CountEdit (Edit): Data Change `FX_CalcOrderTotal`; Lose Focus and Gain Focus blank; Drag/Drop 0 | Runtime behaviour |

Acceptance mapping (T3):
- **AC-3: met (same session).** After one Designer close/reopen, Save disabled; handler row and both Data Change values read back unchanged; Designer clean at the end; no restoration pair needed. Evidence: t3-reopened-designer-readback.png, t3-reopened-event-handler-row.png, t3-reopened-itemcombobox-data-change.png, t3-reopened-countedit-data-change.png. Not established: cross-session or database-level durability (the reopen is in the same browser session).
- AC-1 and AC-2: met in T1 and T2 (unchanged here).
- AC-4 to AC-6: not yet performed (runtime checks not started in T3).

### T3 action audit (T3 only; exact counts)

| Category | T3 count | Notes |
|---|---|---|
| Tab list (read-only) | 1 | before any selection |
| Tab select | 1 | tab 0 |
| Browser snapshot | 2 | 1 untargeted at start; 1 fresh untargeted after the timeout (saved to file) |
| Find calls (read-only) | 10 | Recent; FX_Orders (menu); Details; Event Handlers; FX_CalcOrderTotal; Components; FX_ItemCombobox (no match, before expansion); FX_ItemCombobox; FX_CountEdit; Save/Undo regex |
| Screenshot calls | 9 | 8 distinct files (`t3-reopened-event-handler-row.png` written twice) |
| Ref clicks (executed) | 9 | close control `e247` 1; Form menu 1; recent-forms FX_Orders 1; Details expand 1; Event Handlers tab 1; group row (expand) 1; Components tab 1; FX_ItemCombobox row 1; FX_CountEdit row 1 |
| Ref clicks (failed, no effect) | 1 | close control `e253`: timed out (intercepted by adorner) |
| Mouse clicks at coordinates | 1 | Pane (01) chevron (view only) |
| Mouse wheel / keyboard / typed entries | 0 / 0 / 0 | |
| Designer close | 1 | Form-tab close control; no prompt |
| Designer reopen | 1 | Form menu recent-forms entry |
| Designer close/reopen pairs | 1 | experiment total: 1 (limit: 2) |
| Prompts answered No / Yes | 0 / 0 | no prompt appeared |
| Handler New / handler dialogs opened | 0 / 0 | |
| Data Change entries / corrections | 0 / 0 | readback only |
| Designer Saves | 0 | none in T3 (experiment total remains 1) |
| Script Editor opens | 0 | |
| Runtime opens / closes / F4 / entries | 0 / 0 / 0 / 0 | not started |
| Errors seen | 1 | click timeout on `e253` (no effect); no server-event error |
| Re-logins / unloads / checkout / FormSync / deployment / Run/Download/Help | 0 | |

### Cumulative browser action audit (T1 + T2 + T3; exact counts)

| Category | T1 | T2 | T3 | Cumulative |
|---|---|---|---|---|
| Tab list | 1 | 1 | 1 | 3 |
| Tab select | 1 | 1 | 1 | 3 |
| Browser snapshots | 2 | 1 | 2 | 5 |
| Find calls | about 28 (approximate) | 12 | 10 | about 50 (approximate; T1 not reconciled to a controller audit) |
| Screenshot calls | 24 (21 distinct) | 7 (6 distinct) | 9 (8 distinct) | 40 (35 distinct; T2 `t2-itemcombobox-data-change-readback.png` and T1 `gate-itemcombobox-events-before.png` / `parameters-dialog-before-ok.png` were overwritten, see earlier sections) |
| Ref clicks (executed) | 21 | 8 | 9 | 38 |
| Ref clicks (failed, no effect) | 0 | 0 | 1 | 1 |
| Mouse clicks at coordinates | 4 | 0 | 1 | 5 |
| Mouse wheel | 1 | 0 | 0 | 1 |
| Keyboard Tab presses | 0 | 2 | 0 | 2 |
| Typed entries | 2 | 0 | 0 | 2 |
| Script Editor opens | 1 | 0 | 0 | 1 |
| Script Editor closes | 1 (Cancel) | 0 | 0 | 1 (Cancel); OK / Run / Download / Help 0 |
| Event handler New | 1 | 0 | 0 | 1 |
| Event handler corrections | 0 | 0 | 0 | 0 |
| Data Change entries | 0 | 2 | 0 | 2 |
| Data Change corrections | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 0 | 1 |
| Designer close/reopen pairs | 0 | 0 | 1 | 1 (limit 2; no restoration pair used) |
| Runtime opens / closes / F4 / entries | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |
| Prompts answered No / Yes | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Errors seen | 0 | 0 | 1 (click timeout, no effect) | 1 |
| Worker re-logins | 0 | 0 | 0 | 0 |
| Unloads / checkout / FormSync / deployment | 0 | 0 | 0 | 0 |

Reconciliation note: the find totals (T1 about 28) are approximate and carry forward as approximate; no controller audit was available to the worker, so no exact figure is claimed for T1 or the cumulative find count.

### Worker-written file inventory (T3 additions)

Written by the worker in T3:
- `evidence/EXP-095/t3-pre-close-gate-designer-clean.png` (new)
- `evidence/EXP-095/t3-fresh-snapshot-before-close.md` (new; page snapshot saved to file at the worker's request after the timeout)
- `evidence/EXP-095/t3-after-close-prompt-check.png` (new)
- `evidence/EXP-095/t3-form-menu-open.png` (new)
- `evidence/EXP-095/t3-reopened-designer-readback.png` (new)
- `evidence/EXP-095/t3-reopened-event-handler-row.png` (written twice; final = expanded row)
- `evidence/EXP-095/t3-components-grid-after-reopen.png` (new)
- `evidence/EXP-095/t3-reopened-itemcombobox-data-change.png` (new)
- `evidence/EXP-095/t3-reopened-countedit-data-change.png` (new)
- `experiments/EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md` (status line and this T3 section)

Tool-generated Playwright page snapshot and console files under `evidence/playwright/` are outside this experiment directory. No script, recipe, AGENTS.md, tutorial or earlier-experiment file was written.

### Final browser state after T3

- Designer FX_Orders reopened, **User scope**, **clean** (toolbar Save and Undo disabled), Script Language Visual Basic.
- Details panel expanded on the **Components** tab; Pane (01) expanded; FX_CountEdit selected; Properties Component tab shows Events. No dialog, no menu, no unsaved change.
- Handler FX_CalcOrderTotal present (one row, unchanged). FX_ItemCombobox and FX_CountEdit Data Change `FX_CalcOrderTotal`.
- Runtime FX_Orders not opened (the Web Client tab was not touched in T3).

### Knowledge state (T3; same-session UI only)

- Close via the Form-tab control and reopen via the Form menu recent-forms entry: the Designer returns to a clean state with the handler and both Data Change values present: **observed** (one execution; same session). Not cross-session.
- Save-and-readback persistence of the handler and Data Change values in the Designer definition: **observed** in this session; **not verified** cross-session or at database level.
- The Form-tab close control's ref is not stable across snapshots; a stale ref resolved to a grid header and the click timed out under an overlay: **observed** (one occurrence; suspected environment/ref-mapping issue).

### Open questions / next step

1. Runtime recalculation (the main EXP-095 question): runtime baseline on FX_Orders (Web Client, recent-forms route, F4 once, both orders verified), then Count 3 and Item eggs on order 1 unsaved, then discard with close and No. Not started; it is the next bounded task.
2. Compile success (Compile Result Errors tab) is still not established.
3. The handler row after the reopen was read in the expanded state only; the handler dialog was not opened (the brief did not require it).

### Blockers

None in T3. The Designer is clean and open; no dialog or unsaved change is pending. The runtime checks were not started, as the bounded instruction requires.

## T4: runtime baseline verification (read-only; FX_Orders left open clean on order 1) (2026-10-15, worker session 6b03803b-35a8-4bda-a4a0-d561ba556c64)

Scope of T4 (bounded instruction): establish a clean FX_Orders runtime Form through the Form menu recent-forms route; Filter in Place with blank criteria; F4 once; verify order 1 and order 2 (detail view and grid row); return to order 1 by its row-number cell. No Count change, no Item change, no Save, no Designer interaction, no discard, no close.

### Tabs and gate

- Tabs listed first: 2 tabs. 0 = Designer FX_Orders (`MGForm=FX_Orders`); 1 = portal page `Mongoose` (the Web Client, embedded in an iframe).
- Tab 1 selected (the Web Client). Fresh untargeted snapshot saved to `evidence/EXP-095/t4-fresh-snapshot-web-client-start.md`.
- Start state (`t4-web-client-start-state.png`): the Mongoose Explorer with no Form open; no session-expiry modal, no sign-in page, no portal notification. The Form menu's `Close and Save Changes` and `Close and Cancel Changes` items were **disabled**, which indicates that no runtime Form was open. FX_Orders was therefore not open and nothing was closed.
- Designer tab 0 was **not selected or touched** in T4. Its last known state (end of T3) was clean.

### Opening FX_Orders (recent-forms route)

1. Form menu (inside the Web Client iframe) opened once (`t4-form-menu-open-web-client.png`). Its items, top to bottom: `Open`, `Close and Save Changes` (disabled), `Close and Cancel Changes` (disabled), `Definition` (submenu), `Sign Out`, `FX_Orders`, `FX_HelloWorld01`, `FX_Items`, `IDO Properties`, `IDOs`, `Sql Tables`, `IDO Projects`, `Property Classes`, `FX_UMs`, `Export/Import Strings`. `Sign Out` was not clicked.
2. Recent-forms item `FX_Orders` clicked once. The Form opened as an add-mode placeholder (Object 1 of 1, blank fields, Order Number 3 selected in the field; `t4-after-recent-forms-open-fx-orders.png`). No value was typed.
3. Filter in Place toolbar button clicked once. The form title showed the filter icon, the status bar read `Filter in Place`, and all criteria were blank (`t4-filter-in-place-mode-blank-criteria.png`).
4. F4 pressed **once** with every criterion blank. Result (`t4-after-f4-grid-rows.png`): the filter icon disappeared from the title (the form is in browse mode again); the status bar reads `Customer ID (Object 1 of 2)`; the grid has two rows (1 and 2). The Customer ID combobox received focus with `FX001` selected by the query; no key was typed into it.

### Order 1 (detail view and grid row)

| Field | Detail view (screen; accessibility value) | Grid row 1 (accessibility row text; the grid pane shows only the Order Number column on screen) |
|---|---|---|
| Order Number | 1 | 1 |
| Customer ID | FX001 | FX001 |
| Customer Name | Factory test one | Factory test one |
| Address | 1 Factory Street | 1 Factory Street |
| Item | dumbbell | dumbbell |
| Item Description | 45 pound iron | 45 pound iron |
| Cost | 45.00 | 45.00 |
| Count | 2 | 2 |
| Order Total | 90.00 | 90.00 |

Result: **matches the baseline.** Screenshot: `t4-runtime-baseline-order1.png` (order 1 detail view, FX001 ... 90.00, dumbbell image; `1` selected in the grid row-number pane).

### Order 2 (detail view and grid row)

| Field | Detail view (screen) | Grid row 2 (accessibility) |
|---|---|---|
| Order Number | 2 | 2 |
| Customer ID | FX002 | FX002 |
| Customer Name | Factory test two | Factory test two |
| Address | 2 Factory Street | 2 Factory Street |
| Item | eggs | eggs |
| Item Description | cage free | cage free |
| Cost | 6.99 | 6.99 |
| Count | 1 | 1 |
| Order Total | 6.99 | 6.99 |

Result: **matches the baseline.** Screenshot: `t4-runtime-baseline-order2.png` (order 2 detail view, status `(Object 2 of 2)`). Taken via the row-number cell of row 2 (left row-header pane).

Brief text versus recorded display: the brief wrote the address as `Address 1 Factory Street`; the stored display value is `1 Factory Street` (the field is labelled `Address`). The recorded value is the displayed text.

### Return to order 1

- Row-number cell of order 1 clicked once (left row-header pane). The detail view returned to FX001 (`(Object 1 of 2)` in the status bar). Screenshot `t4-runtime-baseline-order1.png`.
- Accessibility readback: `button "Save" [disabled]` in the runtime toolbar (`Close and Save Changes` not separately read; the Form menu was not reopened). The form is **clean**.

### Limitations (T4)

- The grid pane is narrow: on screen only the Order Number column is visible. Grid-row values are taken from the accessibility tree row text, not from a visible screenshot of those columns. The screenshots show the detail view only.
- The baseline is a single same-session read after F4; it is not a cross-session or database-level verification.
- The F4 query ran with the Customer ID combobox focused (selection by the query, not by the worker). No value was entered.

### Screenshots (T4): what each shows and does not prove

| File | Shows | Does not prove |
|---|---|---|
| t4-web-client-start-state.png | Web Client Explorer, no Form open; no modal | Session validity beyond this view |
| t4-form-menu-open-web-client.png | Form menu with `FX_Orders` recent-forms item; Close and Save/Cancel disabled | That the item leads to the expected data (shown in later images) |
| t4-after-recent-forms-open-fx-orders.png | FX_Orders add-mode placeholder, blank fields, Object 1 of 1 | Any record data |
| t4-filter-in-place-mode-blank-criteria.png | Filter in Place mode (title filter icon; status "Filter in Place"), blank criteria | That F4 ran |
| t4-after-f4-grid-rows.png | Browse mode after F4; order 1 detail; grid rows 1 and 2; status Object 1 of 2 | Grid columns other than Order Number (not visible) |
| t4-runtime-baseline-order1.png | Order 1 detail: FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, 2, 90.00 | The grid-row values (accessibility only) |
| t4-runtime-baseline-order2.png | Order 2 detail: FX002, Factory test two, 2 Factory Street, eggs, cage free, 6.99, 1, 6.99 | The grid-row values (accessibility only) |

Accessibility snapshots saved as evidence (text, not images): `t4-fresh-snapshot-web-client-start.md` (tab 1 start), `t4-runtime-baseline-snapshot.md` (after F4; contains the grid row text for both orders), `t4-runtime-order2-snapshot.md` (before returning to order 1).

### Acceptance mapping (T4)

- **AC-4 baseline: met (same session).** Baseline of both orders verified against the required values (detail view; grid row via accessibility text). Evidence: t4-runtime-baseline-order1.png, t4-runtime-baseline-order2.png, t4-runtime-baseline-snapshot.md. The Count, Item, discard and reopen steps of AC-4 are **not yet performed**.
- AC-1 to AC-3: unchanged (met in T1 to T3).
- AC-5: no Designer change; no runtime Save; no unload; no checkout; no Run/Download/Help; no Yes answer in T4.

### Prompts, menus and errors (T4)

- No prompt appeared. No runtime save prompt was reached (no close was performed).
- No menu is open at the end. The Form menu opened once and closed when the FX_Orders item was chosen.
- No error, no server-event error, no session expiry, no re-login.

### T4 action audit (T4 only; exact counts)

| Category | T4 count | Notes |
|---|---|---|
| Tab list (read-only) | 1 | before the first selection |
| Tab select | 1 | tab 1 (Web Client); tab 0 not selected |
| Browser snapshots | 3 | 1 start (fresh, Web Client); 1 after F4 (baseline); 1 before the return to order 1 |
| Find calls (read-only) | 4 | Form; FX_Orders; Filter in Place; Save/Object-count regex |
| Screenshot calls | 7 | 7 distinct files |
| Ref clicks (executed) | 5 | Form menu 1; FX_Orders recent-forms 1; Filter in Place 1; order 2 row-number cell 1; order 1 row-number cell 1 |
| Ref clicks (failed) | 0 | |
| Key presses | 1 | F4 (one press) |
| Typed entries | 0 | |
| Runtime FX_Orders opens | 1 | recent-forms route, once |
| Runtime FX_Orders closes | 0 | none (kept open for T5) |
| Filter in Place toggles | 1 | |
| F4 presses | 1 | |
| Row-number selections | 2 | order 2 then order 1 |
| Prompts answered | 0 | none appeared |
| Count or Item entries | 0 | not performed (T5) |
| Designer actions | 0 | tab 0 not touched |
| Save actions (Designer or runtime) | 0 | |
| Errors seen | 0 | |
| Worker re-logins | 0 | |

### Cumulative browser action audit (T1 + T2 + T3 + T4; exact counts)

| Category | T1 | T2 | T3 | T4 | Cumulative |
|---|---|---|---|---|---|
| Tab list | 1 | 1 | 1 | 1 | 4 |
| Tab select | 1 | 1 | 1 | 1 | 4 |
| Browser snapshots | 2 | 1 | 2 | 3 | 8 |
| Find calls | about 28 (approx.) | 12 | 10 | 4 | about 54 (approximate; T1 not reconciled to a controller audit) |
| Screenshot calls | 24 (21 distinct) | 7 (6 distinct) | 9 (8 distinct) | 7 (7 distinct) | 47 (42 distinct; overwrites listed in earlier sections) |
| Ref clicks (executed) | 21 | 8 | 9 | 5 | 43 |
| Ref clicks (failed, no effect) | 0 | 0 | 1 | 0 | 1 |
| Mouse clicks at coordinates | 4 | 0 | 1 | 0 | 5 |
| Mouse wheel | 1 | 0 | 0 | 0 | 1 |
| Keyboard Tab presses | 0 | 2 | 0 | 0 | 2 |
| Keyboard F4 presses | 0 | 0 | 0 | 1 | 1 |
| Typed entries | 2 | 0 | 0 | 0 | 2 |
| Script Editor opens | 1 | 0 | 0 | 0 | 1 |
| Script Editor closes | 1 (Cancel) | 0 | 0 | 0 | 1 (Cancel); OK / Run / Download / Help 0 |
| Event handler New | 1 | 0 | 0 | 0 | 1 |
| Event handler corrections | 0 | 0 | 0 | 0 | 0 |
| Data Change entries | 0 | 2 | 0 | 0 | 2 |
| Data Change corrections | 0 | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 0 | 0 | 1 |
| Designer close/reopen pairs | 0 | 0 | 1 | 0 | 1 (limit 2) |
| Runtime FX_Orders opens | 0 | 0 | 0 | 1 | 1 |
| Runtime FX_Orders closes | 0 | 0 | 0 | 0 | 0 |
| Runtime Filter in Place toggles | 0 | 0 | 0 | 1 | 1 |
| Runtime F4 presses | 0 | 0 | 0 | 1 | 1 |
| Runtime row-number selections | 0 | 0 | 0 | 2 | 2 |
| Runtime Count / Item entries | 0 | 0 | 0 | 0 | 0 |
| Runtime Save | 0 | 0 | 0 | 0 | 0 |
| Prompts answered No / Yes | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Errors seen | 0 | 0 | 1 (click timeout, no effect) | 0 | 1 |
| Worker re-logins | 0 | 0 | 0 | 0 | 0 |
| Unloads / checkout / FormSync / deployment | 0 | 0 | 0 | 0 | 0 |

Note on counts: the find totals are approximate (see T1). Snapshot calls that saved files are counted as snapshots.

### Worker-written file inventory (T4 additions)

Written by the worker in T4:
- `evidence/EXP-095/t4-web-client-start-state.png` (new)
- `evidence/EXP-095/t4-fresh-snapshot-web-client-start.md` (new; accessibility snapshot saved to file)
- `evidence/EXP-095/t4-form-menu-open-web-client.png` (new)
- `evidence/EXP-095/t4-after-recent-forms-open-fx-orders.png` (new)
- `evidence/EXP-095/t4-filter-in-place-mode-blank-criteria.png` (new)
- `evidence/EXP-095/t4-after-f4-grid-rows.png` (new)
- `evidence/EXP-095/t4-runtime-baseline-snapshot.md` (new; accessibility snapshot after F4)
- `evidence/EXP-095/t4-runtime-baseline-order2.png` (new)
- `evidence/EXP-095/t4-runtime-order2-snapshot.md` (new; accessibility snapshot before returning to order 1)
- `evidence/EXP-095/t4-runtime-baseline-order1.png` (new)
- `experiments/EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md` (status line and this T4 section)

Tool-generated Playwright snapshot and console files under `evidence/playwright/` are outside this experiment directory.

### Final browser state after T4

- Tab 1 (Web Client) selected. Explorer shell with the FX_Orders runtime Form open in browse mode (Object 1 of 2), **order 1 selected**, detail view showing FX001 ... 90.00, **Save disabled** (clean), Count 2 unchanged.
- No prompt, no menu, no dialog open. No value changed; no Save.
- Tab 0 (Designer FX_Orders) was not touched in T4 and remains as left at the end of T3 (clean).

### Knowledge state (T4; same session)

- Recent-forms route to FX_Orders from the Web Client Form menu opens the form as an add-mode placeholder; Filter in Place plus F4 with blank criteria loads both orders: **observed** (one execution).
- Baseline values for order 1 and order 2 (detail view and grid text) match the brief's expected values: **observed** (same session; not cross-session).
- Grid pane narrowness hides the non-Order-Number columns on screen; their values are visible only in the accessibility tree: **observed**.

### Open questions / next step (T5)

1. The Count check (Count 2 to 3 on order 1, unsaved; record Count, Cost, Order Total in the detail view and the grid row) and the Item check (Item dumbbell to eggs on order 1, unsaved; record the same values), then discard by close and No with the prompt text. Not started.
2. Compile success (Compile Result Errors tab) remains unestablished.

### Blockers

None in T4. The baseline is verified and FX_Orders is open clean on order 1 for the next task.

## T5: runtime Count and Item checks (unsaved), discard by close and No, reopen comparison, clean close (2026-10-15, worker session 6b03803b-35a8-4bda-a4a0-d561ba556c64)

Scope (bounded instruction): start-of-task read-only baseline; Count 2 to 3 on order 1 (no Save); Item dumbbell to eggs on order 1 (no Save); close the runtime Form once and answer No to the save prompt; reopen via recent forms, Filter in Place, F4 once; verify both orders; close the reopened Form once while clean. No Designer change, no runtime Save, no Yes answer.

### Tabs and start-of-task baseline (read-only)

- Tabs listed first (2 tabs: 0 = Designer FX_Orders, 1 = portal Mongoose / Web Client). Tab 1 selected. Fresh untargeted snapshot saved to `evidence/EXP-095/t5-start-fresh-snapshot-web-client.md`.
- Baseline (`t5-start-baseline-order1.png`; accessibility text): FX_Orders open in browse mode, `(Object 1 of 2)`, order 1 selected: Customer ID FX001, Customer Name Factory test one, Address 1 Factory Street, Item dumbbell, Item Description 45 pound iron, Cost 45.00, Count 2, Order Total 90.00; grid row `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00`; runtime Save `[disabled]`.
- Result: **matches the baseline; no discrepancy; mutation proceeded.**

### COUNT CHECK (order 1, unsaved)

1. Detail-view Count field clicked once. Its entire content selected with Control+A (one key press). Then `3` entered once (typed entry; see deviation 1). Tab pressed once. No Save.
2. Observed immediately after Tab (`t5-after-count-3-unsaved-order1.png`; accessibility `t5-after-count-3-snapshot.md`):
   - Detail view: Count **3**; Cost **45.00**; Order Total **135.00**.
   - Grid row 1 (accessibility text): `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 3 135.00`.
   - Row-number cell shows the unsaved marker (orange diamond); runtime toolbar Save now enabled (`button "Save"` without `[disabled]`); status `Count (Object 1 of 2)`.
   - Messages or errors: **none** (no dialog, no message text, no toast).
3. Tutorial expectation was Order Total 135.00 before Save. **Observed: 135.00.** Cost did not change.

### ITEM CHECK (order 1, still unsaved)

1. Item combobox drop-down opened once (its Open button). The list showed `dumbbell` (selected), `eggs` and `guitar` (among others). `eggs` chosen once. No Save.
2. Observed (`t5-after-item-eggs-unsaved-order1.png`; accessibility `t5-after-item-eggs-snapshot.md`):
   - Detail view: Item **eggs**; Item Description **cage free**; Cost **6.99**; Count **3** (kept); Order Total **20.97**.
   - Grid row 1 (accessibility text): `1 FX001 Factory test one 1 Factory Street eggs cage free 6.99 3 20.97`.
   - Messages or errors: **none**. Status `Item (Object 1 of 2)`.
3. Brief expectation: Cost 6.99 and Order Total 20.97 (3 x 6.99). **Observed: exactly that.** The Cost and the Order Total both updated before any Save.

### DISCARD (close and No)

1. Runtime Form-tab close control (`Close Panel FX_Orders`) clicked once.
2. **Prompt (captured before answering; `t5-save-prompt-before-answering.png`):** dialog title `Infor Mongoose Application Development Framework - FX_Orders`; text **`Do you want to save your changes to primary collection?`**; buttons `Yes` (focused by default), `No`, `Cancel`. No other prompt appeared.
3. Answered **No** once (clicked the No button; Enter was not pressed). Result (`t5-after-no-discard-explorer.png`): the dialog closed; the Explorer is empty; no FX_Orders Form open; no further prompt.
4. Yes was **not** answered. No runtime Save was invoked.

### REOPEN AND COMPARISON (recent-forms route, F4 once, row-number cells only)

1. Web Client Form menu opened once; recent-forms `FX_Orders` clicked once. Opened as an add-mode placeholder.
2. Filter in Place toolbar button clicked once (as in T4); criteria left blank; **F4 pressed once**.
3. Order 1 after the reopen (`t5-reopened-order1-after-discard.png`; accessibility `t5-reopened-runtime-snapshot.md`): Customer ID FX001, Customer Name Factory test one, Address `1 Factory Street`, Item dumbbell, Item Description 45 pound iron, Cost 45.00, Count 2, Order Total 90.00. Grid row `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00`. **Matches the baseline.**
4. Order 2 selected by its row-number cell (one click), (`t5-reopened-order2-after-discard.png`; accessibility `t5-reopened-order2-snapshot.md`): Customer ID FX002, Customer Name Factory test two, Address `2 Factory Street`, Item eggs, Item Description cage free, Cost 6.99, Count 1, Order Total 6.99. Grid row `2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99`. **Matches the baseline.**
5. Clipped columns: on screen only the Order Number column of the grid is visible in the runtime screenshots; the other grid-row values are verified from the accessibility tree only.

### FINAL CLOSE (clean)

- Reopened runtime Form closed once via `Close Panel FX_Orders` while clean. **No prompt appeared** (`t5-final-runtime-closed-clean.png`: the Explorer is empty; no FX_Orders Form open).

### Results against the brief

- **AC-4: met (same session).** Baseline verified; unsaved Count 3 entered once and recorded (135.00); unsaved Item eggs entered once and recorded (Cost 6.99, Order Total 20.97); no message or error; discard by close with answer No (prompt text recorded); after the reopen both orders match the baseline.
- **Observed finding:** the Order Total recalculated on the unsaved Count change (135.00) and again on the unsaved Item change (20.97), before any Save, in this session. This is the behaviour the tutorial expected, and it differs from the EXP-092 pitfall note (derived Order Total did not recalculate before Save). **Attribution is not isolated:** this run changed the handler and the two Data Change values together, so the handler is the most plausible cause, but no control run was made. Observed only.
- **AC-5:** no other Designer change; no script edit; no grid-column event; no runtime Save; no unload; no checkout action; no Run, Download or Help click; no Yes answer.
- Discard-then-reopen result: the unsaved runtime values did not persist in this session (both orders match the baseline). Same-session evidence only; not a cross-session or database-level verification.

### Deviations and notes (T5)

1. **Count entry method.** The brief asks to select the Count content and type `3` once. The selection was made with Control+A (one key press), then the typed entry `3` was made with the browser type tool, which fills the field (Playwright fill) rather than sending a single keystroke. The field value after the entry was `3`. Recorded as a tooling difference, not a value difference.
2. **Accessibility refs.** The first ref after the Count step was reused for the Count entry only after a fresh snapshot (`t5-after-count-3-snapshot.md`), and the Item ref after a fresh find. No "ref not found" error occurred in T5.
3. **Row-number cell for order 2 after reopen** was taken from the fresh snapshot of that moment.
4. **Screenshots not overwritten** in T5 (all 8 filenames unique).

### Screenshots (T5): what each shows and does not prove

| File | Shows | Does not prove |
|---|---|---|
| t5-start-baseline-order1.png | Order 1 baseline: FX001 ... 90.00; Object 1 of 2; Save disabled | Grid columns beyond Order Number (not visible) |
| t5-after-count-3-unsaved-order1.png | Count 3; Cost 45.00; Order Total 135.00; unsaved marker; Save enabled | Grid row values (accessibility only) |
| t5-after-item-eggs-unsaved-order1.png | Item eggs; cage free; Cost 6.99; Count 3; Order Total 20.97; unsaved | Grid row values (accessibility only) |
| t5-save-prompt-before-answering.png | Save prompt: title, text, Yes (focused), No, Cancel | The result of answering |
| t5-after-no-discard-explorer.png | Explorer, no Form open after answering No | Stored values (see reopen) |
| t5-reopened-order1-after-discard.png | Reopened order 1: FX001 ... 90.00, Count 2, Save disabled | Grid row values (accessibility only) |
| t5-reopened-order2-after-discard.png | Reopened order 2: FX002 ... 6.99 | Grid row values (accessibility only) |
| t5-final-runtime-closed-clean.png | Explorer after the final clean close; no prompt | Anything after the close |

Accessibility snapshot files (text evidence): `t5-start-fresh-snapshot-web-client.md`, `t5-after-count-3-snapshot.md`, `t5-after-item-eggs-snapshot.md`, `t5-reopened-runtime-snapshot.md`, `t5-reopened-order2-snapshot.md`.

### Prompts, menus, and errors (T5)

- Prompts: one save prompt (`Do you want to save your changes to primary collection?`), answered **No** once. No other prompt appeared at any point, including on the final clean close.
- Menus: the Web Client Form menu was opened twice and closed by choosing the FX_Orders item each time. No menu, dialog or unsaved change is open at task end.
- Errors: **none** in T5.

### T5 action audit (T5 only; exact counts)

| Category | T5 count | Notes |
|---|---|---|
| Tab list (read-only) | 1 | before the first selection |
| Tab select | 1 | tab 1 (Web Client); tab 0 not selected |
| Browser snapshot calls | 5 | start; after Count; after Item; reopened order 1; reopened order 2 |
| Find calls (read-only) | 8 | Item:; eggs; [Cc]lose; No; Form; FX_Orders; Filter in Place; Close Panel FX_Orders |
| Screenshot calls | 8 | 8 distinct files; none overwritten |
| Ref clicks (executed) | 10 | Count field 1; Item Open button 1; eggs option 1; runtime close 1; No button 1; Web Client Form menu 1; recent FX_Orders 1; Filter in Place 1; order 2 row-number cell 1; final runtime close 1 |
| Ref clicks (failed) | 0 | |
| Typed entries | 1 | Count value `3` (fill; see deviation 1) |
| Keyboard presses | 3 | Control+A 1; Tab 1 (after Count); F4 1 (reopen) |
| Mouse clicks at coordinates / wheel | 0 / 0 | |
| Count entries | 1 | value 3 |
| Item selections (drop-down choice) | 1 | eggs |
| Runtime Saves | 0 | |
| Runtime opens | 1 | recent-forms route, once |
| Runtime closes | 2 | discard close (answered No) 1; final clean close 1 |
| Filter in Place toggles | 1 | |
| F4 presses | 1 | after the reopen |
| Row-number selections | 1 | order 2 (order 1 was the default selection) |
| Prompts answered No / Yes | 1 / 0 | prompt text recorded above |
| Designer actions | 0 | tab 0 not selected or touched |
| Errors seen | 0 | |
| Worker re-logins | 0 | |
| Unloads / checkout / FormSync / deployment / Run / Download / Help | 0 | |

### Cumulative browser action audit (T1 through T5; exact counts)

Designer totals are unchanged in T5, as the bounded instruction requires (Designer Saves 1; handler New 1; Data Change entries 2; Designer close/reopen pairs 1).

| Category | T1 | T2 | T3 | T4 | T5 | Cumulative |
|---|---|---|---|---|---|---|
| Tab list | 1 | 1 | 1 | 1 | 1 | 5 |
| Tab select | 1 | 1 | 1 | 1 | 1 | 5 |
| Browser snapshot calls | 2 | 1 | 2 | 3 | 5 | 13 |
| Find calls | about 28 (approx.) | 12 | 10 | 4 | 8 | about 62 (approximate; T1 not reconciled to a controller audit) |
| Screenshot calls | 24 (21 distinct) | 7 (6 distinct) | 9 (8 distinct) | 7 (7 distinct) | 8 (8 distinct) | 55 (50 distinct; overwrites listed in earlier sections) |
| Ref clicks (executed) | 21 | 8 | 9 | 5 | 10 | 53 |
| Ref clicks (failed, no effect) | 0 | 0 | 1 | 0 | 0 | 1 |
| Mouse clicks at coordinates | 4 | 0 | 1 | 0 | 0 | 5 |
| Mouse wheel | 1 | 0 | 0 | 0 | 0 | 1 |
| Keyboard Tab presses | 0 | 2 | 0 | 0 | 1 | 3 |
| Keyboard Control+A presses | 0 | 0 | 0 | 0 | 1 | 1 |
| Keyboard F4 presses | 0 | 0 | 0 | 1 | 1 | 2 |
| Typed entries | 2 | 0 | 0 | 0 | 1 | 3 |
| Script Editor opens | 1 | 0 | 0 | 0 | 0 | 1 |
| Script Editor closes | 1 (Cancel) | 0 | 0 | 0 | 0 | 1 (Cancel); OK / Run / Download / Help 0 |
| Event handler New | 1 | 0 | 0 | 0 | 0 | 1 |
| Event handler corrections | 0 | 0 | 0 | 0 | 0 | 0 |
| Data Change entries | 0 | 2 | 0 | 0 | 0 | 2 |
| Data Change corrections | 0 | 0 | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 0 | 0 | 0 | 1 |
| Designer close/reopen pairs | 0 | 0 | 1 | 0 | 0 | 1 (limit 2; no restoration pair used) |
| Runtime opens | 0 | 0 | 0 | 1 | 1 | 2 |
| Runtime closes | 0 | 0 | 0 | 0 | 2 | 2 |
| Runtime Filter in Place toggles | 0 | 0 | 0 | 1 | 1 | 2 |
| Runtime F4 presses | 0 | 0 | 0 | 1 | 1 | 2 |
| Runtime row-number selections | 0 | 0 | 0 | 2 | 1 | 3 |
| Runtime Count entries | 0 | 0 | 0 | 0 | 1 | 1 (value 3; unsaved; discarded) |
| Runtime Item selections | 0 | 0 | 0 | 0 | 1 | 1 (eggs; unsaved; discarded) |
| Runtime Saves | 0 | 0 | 0 | 0 | 0 | 0 |
| Prompts answered No / Yes | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 0 | 1 / 0 |
| Errors seen | 0 | 0 | 1 (click timeout, no effect) | 0 | 0 | 1 |
| Worker re-logins | 0 | 0 | 0 | 0 | 0 | 0 |
| Unloads / checkout / FormSync / deployment | 0 | 0 | 0 | 0 | 0 | 0 |

Find totals are approximate (T1 not reconciled), so the cumulative find count is approximate.

### Worker-written file inventory (T5 additions)

Written by the worker in T5:
- `evidence/EXP-095/t5-start-fresh-snapshot-web-client.md` (new; start snapshot to file)
- `evidence/EXP-095/t5-start-baseline-order1.png` (new)
- `evidence/EXP-095/t5-after-count-3-unsaved-order1.png` (new)
- `evidence/EXP-095/t5-after-count-3-snapshot.md` (new)
- `evidence/EXP-095/t5-after-item-eggs-unsaved-order1.png` (new)
- `evidence/EXP-095/t5-after-item-eggs-snapshot.md` (new)
- `evidence/EXP-095/t5-save-prompt-before-answering.png` (new)
- `evidence/EXP-095/t5-after-no-discard-explorer.png` (new)
- `evidence/EXP-095/t5-reopened-runtime-snapshot.md` (new)
- `evidence/EXP-095/t5-reopened-order1-after-discard.png` (new)
- `evidence/EXP-095/t5-reopened-order2-snapshot.md` (new)
- `evidence/EXP-095/t5-reopened-order2-after-discard.png` (new)
- `evidence/EXP-095/t5-final-runtime-closed-clean.png` (new)
- `experiments/EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md` (status line and this T5 section)

Tool-generated Playwright page snapshot and console files under `evidence/playwright/` are outside this experiment directory. No script, recipe, AGENTS.md, tutorial or earlier-experiment file was written.

### Final state after T5

- Web Client (tab 1) selected. No FX_Orders runtime Form open; Explorer shell only; no prompt, menu or dialog open; no unsaved runtime change (the discarded changes were answered No and the reopened form was closed clean).
- Designer FX_Orders (tab 0) untouched in T5; clean as left at the end of T3 (Save and Undo disabled; handler FX_CalcOrderTotal; Data Change `FX_CalcOrderTotal` on FX_ItemCombobox and FX_CountEdit).
- Designer Saves 1; handler New 1; Data Change entries 2; Designer close/reopen pairs 1.

### Knowledge state (T5; same session)

- Unsaved Count change 2 to 3 on order 1 shows Order Total 135.00 in the detail view and the grid row before any Save: **observed** (one execution; same session).
- Unsaved Item change to eggs (Count 3) shows Cost 6.99 and Order Total 20.97 before any Save: **observed** (one execution; same session).
- Attribution of the recalculation to the FX_CalcOrderTotal handler and the Data Change values: **candidate explanation; not isolated** (no control run).
- Save prompt text and the discard-by-No route restore both orders to the baseline in this session: **observed** (same session; not cross-session or database-level).
- Recalculation as a repeatable procedure: **unresolved** (needs repetition and a persistence check; not claimed as verified).

### Open questions / next steps

1. Repeat or verify the recalculation behaviour in a later session before calling it verified (AGENTS.md requires repeatable execution plus persistence verification).
2. Compile success: the Compile Result Errors tab was never opened; the runtime results suggest the script runs, but compile success is still formally unestablished.
3. The grid-row columns beyond Order Number are not visible on screen in the runtime screenshots; their values rest on the accessibility tree.

### Blockers

None in T5. The mutation and discard steps completed without error or unexpected prompt, and the Web Client has no open FX_Orders Form.

## T6: final acceptance audit (documentation only; zero browser calls) (2026-10-15, worker session 6b03803b-35a8-4bda-a4a0-d561ba556c64)

Scope: review of this record, the T1 to T5 worker evidence, and the controller audits `evidence/EXP-095/harness-audit-T1.md` to `harness-audit-T5.md`. No browser tool, no Mongoose change, no compile inspection. The full report is `evidence/EXP-095/T6-final-acceptance-report.md`.

### Recommendation

**ACCEPTED AS OBSERVED, with qualifications.** AC-1 to AC-5 each have direct evidence and none failed. Not established: compile success (the Errors tab was never opened); that the handler alone caused the recalculation; cross-session or database-level durability; a repeatable procedure. BLOCKED was considered and rejected: no required step is missing and no prohibited action is evidenced.

### Controller reconciliation (exact)

- The controller headers do not define "actions" or "reads". Inferred definitions (actions = tab select, element clicks incl. coordinate clicks, wheel, key presses, typed entries; reads = tab list, snapshots, finds, screenshot calls) reproduce all five headers exactly from their row tables. "Exact mismatches = 0" in all five.
- Cumulative T1 to T5, exact: tab list 5; tab select 5; snapshots 13; finds 62 (T1 = 28, previously "about 28", now exact); screenshot calls 55 (50 distinct filenames, 5 overwritten writes); element clicks attempted 54 (53 succeeded, 1 failed in T3); coordinate clicks 5; wheel 1; key presses 6 (Tab 3, Ctrl+A 1, F4 2); typed entries 3 (T1 name, T1 parameters, T5 Count; all authorised); **interactive actions 74; read-only inspection calls 135**.
- Browser flags: `browser_type` in T1 (2) and T5 (1) are authorised entries (section 3 of the T6 report). Typing into the Script Editor: 0.
- Snapshot files written into the EXP-095 directory: 9 (T3 1, T4 3, T5 5). Distinct browser-tool evidence files: 59 (50 PNG + 9 Markdown).

### Designer and runtime counts (exact)

Script Editor opens 1 (T1 pencil); left by Cancel 1; OK, Run, Download, Help and editor text: 0. Handler New 1; handler corrections 0. Data Change entries 2 (one per component, each with a Tab commit); corrections 0. Designer Saves 1 (T2 row 35; retries 0). Designer close/reopen pairs 1 (limit 2). Runtime opens 2 (T4, T5); runtime closes 2 (T5: discard with No, and the final clean close); Filter in Place toggles 2; F4 presses 2; row-number selections 3. Runtime Count entry 1 (value 3); runtime Item selection 1 (eggs); runtime Saves 0. Prompts: 1 answered No, 0 Yes. Re-logins 0. Unloads, checkout, FormSync, deployment, navigate, JavaScript, console, network: 0. Record writes (non-browser): 9 (1 Write T1; 2 Edit in each of T2 to T5).

### Acceptance evidence (summary; details in the T6 report)

- **AC-1:** Designer gate (User scope, Save/Undo disabled, Visual Basic, empty grid, Data Change blank on both): `gate-designer-form-clean.png`, `gate-event-handlers-grid-before.png`, `gate-itemcombobox-events-before.png`, `gate-countedit-events-before.png` (visual). Compile Result Output **empty**, Errors tab not opened: `compile-result-panel-expanded.png` (visual). Cancel once: T1 row 69; Save disabled after: `after-script-editor-cancel-designer-state.png`.
- **AC-2:** Handler FX_CalcOrderTotal, Form Script Method, CalcOrderTotal, `P(FX_Count),P(FX_ItmsCost)`: `handler-row-readback-after-parameters-ok.png`, `parameters-dialog-before-ok.png` (visual). Data Change readbacks: `t2-itemcombobox-data-change-readback.png`, `t2-countedit-data-change-readback.png` (visual). Save native toast verbatim `Form [FX_Orders] and global object(s) were saved.`: `designer-save-response.png` (visual). Corrections 0; no error.
- **AC-3:** After one close (no prompt) and reopen: Save disabled; handler row and both Data Change values unchanged: `t3-reopened-designer-readback.png`, `t3-reopened-event-handler-row.png`, `t3-reopened-itemcombobox-data-change.png`, `t3-reopened-countedit-data-change.png` (visual). No Designer observation after T3.
- **AC-4:** Baseline both orders (visual detail; grid row accessibility): `t4-runtime-baseline-order1.png`, `t4-runtime-baseline-order2.png`, `t5-start-baseline-order1.png`. Unsaved Count 3: detail Cost 45.00, **Order Total 135.00** (`t5-after-count-3-unsaved-order1.png`, visual; grid row `1 FX001 … 45.00 3 135.00`, accessibility). Unsaved Item eggs: detail Cost **6.99**, Count 3, **Order Total 20.97** (`t5-after-item-eggs-unsaved-order1.png`, visual; grid row `… eggs cage free 6.99 3 20.97`, accessibility). No message or error. Prompt, exact text: `Do you want to save your changes to primary collection?` (title `Infor Mongoose Application Development Framework - FX_Orders`; Yes focused, No, Cancel): `t5-save-prompt-before-answering.png` (visual). Answered **No** once: `t5-after-no-discard-explorer.png`. Reopened: order 1 FX001 … 90.00 and order 2 FX002 … 6.99 match the baseline: `t5-reopened-order1-after-discard.png`, `t5-reopened-order2-after-discard.png` (visual; grid rows accessibility). Final clean close, no prompt: `t5-final-runtime-closed-clean.png`.
- **AC-5:** no other Designer change, no script edit, no grid-column event, no runtime Save, no unload, no checkout action, no Run/Download/Help click, no Yes answer (controller rows checked).
- **AC-6:** this section, the T6 report and the counts above.

### T3 intercepted click (corrected)

Controller row 6 of T3: click on `e253` timed out, the locator having resolved to the grid column header `rownumberer-1912` and then being intercepted by `compadorner-1977`. An intercepted Playwright click is not dispatched, and the post-timeout snapshot shows no change; the single successful close followed (row 9). The ref `e253` came from the **T2** snapshot, not the T3 start snapshot (which showed `e247`); this is a recovery-rule deviation with no observed effect, not an enumerated prohibition violation. The earlier T3 wording has been corrected in place above.

### Overwritten screenshots (not preserved)

T1 `gate-itemcombobox-events-before.png` (writes at rows 40 and 44 lost; final = row 48); T1 `parameters-dialog-before-ok.png` (blank pre-fill at row 111 lost; final = row 119); T2 `t2-itemcombobox-data-change-readback.png` (pre-Tab at row 16 lost; final = row 20); T3 `t3-reopened-event-handler-row.png` (collapsed at row 24 lost; final = row 28). Five intermediate images in total.

### Visual versus accessibility

Detail-view values and the prompt text were visually confirmed in T1 to T5 screenshots. Runtime grid-row values (Count, Cost, Order Total in the grid) are accessibility-only: the grid pane shows only the Order Number column on screen.

### Limitations and missing sources

Not exact or not logged: tab index on select; snapshot target argument; Read offset and limit (the Outcome-only read scope of EXP-093 and EXP-094 rests on the worker's tool inputs, and three heading-only Greps over those two records were made); the T3 error text beyond 1731 characters. T1 has one non-browser Read error (the record did not yet exist), not reported in the T1 worker text. The T1 worker's "one targeted snapshot" cannot be checked against the controller.

### Worker-written files in T6

- `evidence/EXP-095/T6-final-acceptance-report.md` (new)
- `experiments/EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md` (status line, T3 correction (two places), this T6 section)

The full worker-written inventory across T1 to T6 (61 distinct files: 1 record, 50 PNG, 9 snapshot Markdown, 1 T6 report) is in section 7 of the T6 report. Controller-generated: `harness-audit-T1.md` to `harness-audit-T5.md`. Tool-generated outside the EXP-095 paths: `evidence/playwright/page-*.yml` and `console-*.log`. Operator git review is authoritative for repository confinement.

### Final state

Designer FX_Orders: last observed at the end of T3 as User scope, clean (Save and Undo disabled), with handler FX_CalcOrderTotal and both Data Change values set; not observed in T4 to T6. Web Client: no FX_Orders Form open, no prompt, menu or dialog; portal tab active. No browser call was made in T6.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 6 section 3 is complete: FX_Orders now recalculates Order Total through the form script before Save. The operator decided acceptance and waived two deviations for EXP-095 only (see below).

- Changed, for later cleanup (Form `FX_Orders`, User scope), with one Designer Save ("Form [FX_Orders] and global object(s) were saved."):
  - Event handler **`FX_CalcOrderTotal`**: Sequence 0, Response Type Form Script Method, Disabled false, Response Parameters `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))`.
  - Events > Data Change = `FX_CalcOrderTotal` on **FX_ItemCombobox** and **FX_CountEdit**. Grid columns are not wired yet (Section 4).
- **Run R-20261015-111043-84uH** (6 worker tasks): T1 gate, Compile Result and handler; T2 Data Change and Save; T3 close/reopen readback; T4 runtime baseline; T5 runtime check and discard; T6 documentation-only audit. The coordinator paused for the operator's ruling on the deviations, then closed the run after the operator's note.
- Screenshots viewed by the operator assistant: `t3-reopened-event-handler-row.png` (handler row after reopen, ScopeType User); `t5-after-count-3-unsaved-order1.png` (Count 3, Cost 45.00, Order Total 135.00, unsaved); `t5-after-item-eggs-unsaved-order1.png` (eggs, cage free, 6.99, Count 3, Order Total 20.97, unsaved).
- Findings (observed):
  1. **The handler is built in two places.** Event Handlers `+` opens a one-field `Event Handler` dialog (Name; a new name is typed). Response `Type` and `Parameters` are then set in the `Event To Handle` property grid; the `...` button opens `Event Handler Parameters`, whose Name list offered the form-script method `CalcOrderTotal`.
  2. After the handler exists, `FX_CalcOrderTotal` is the first entry in each component's Data Change drop-down.
  3. **The script works at runtime.** Unsaved Count 2 -> 3 gave Order Total 135.00 (90.00 without the handler, EXP-093). Unsaved Item -> eggs gave Cost 6.99 and Order Total 20.97, so FX_ItmsCost is updated before the Data Change event runs. The EXP-092 pitfall ("derived Order Total does not recalculate before Save") no longer applies once the handler is wired.
  4. Compile Result: Output tab empty; Errors tab not opened. Compile success is shown indirectly by the runtime result only.
  5. Discard by close + No (`Do you want to save your changes to primary collection?`) left both orders at the baseline after the reopen.
- Counts: handler New 1; typed entries 3 (event name, parameters, runtime Count); corrections 0; Data Change entries 2; Designer Saves 1; Designer close/reopen pairs 1 (no prompt); runtime opens 2 and F4 presses 2; runtime No answers 1; runtime Saves 0; Yes answers 0; unloads 0; checkout actions 0; re-logins 0.
- Waived deviations (EXP-095 only, no observed effect): (1) T3 clicked the Form-tab close with stale ref `e253` from the T2 snapshot; the click timed out undispatched, and a fresh snapshot plus the current ref closed the tab. (2) T1 ran three heading-only searches beyond the Outcome-only reading scope.
- Limits: same-session UI evidence only; recalculation attribution is not isolated by a control run; runtime grid-row values are accessibility-only; `Console: 2 errors` headers not inspected.
- Confinement (git status): only `evidence/EXP-095/` and this record were written by the run.
- Next: Part 6 section 4. Set Data Change = `FX_CalcOrderTotal` on FX_ItemGridCol and FX_CountGridCol (Edit Grid Columns), save, and test changes from within the grid.
