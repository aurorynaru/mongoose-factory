# EXP-088 — Hello World Part 5 Section 9: FX_CustomerID component class (validator, Validate Immediately, List Source)

**Status (T8, 2026-10-14; cycle 7; FINAL DOCUMENTATION AND ACCEPTANCE AUDIT; zero browser calls, zero Mongoose changes): EXP-088 IS COMPLETE AS A RECORD. Recommendation: ACCEPTED AS OBSERVED, with conditions (the validator definition was not re-read after the class-level Parameters step or after the reopen; the Designer Save-state transitions are unexplained; close and reopen is a weak persistence boundary; the T3 browser-call count is corrected from 47 to 48). Cumulative browser calls by the controller row ledgers: 252 (the worker-reported 251 omitted one T3 find). All other cumulative counts reconcile: one class created; one Component Classes New; one existing validator added; three list-source properties; two displayed columns; eight dialog OKs (one outer); six Cancels; six Tab commits; zero string or message prompts; zero contingency corrections; one native Save with toast `Save` / `Global object(s) were saved.`; one Designer close and one reopen; zero component changes; zero runtime, checkout and re-login events. Full acceptance report: `evidence/EXP-088/T8-final-acceptance-report.md`. Classification: observed only. Not replay_verified. No database durability is claimed. Details: section "T8" at the end of this record.**

**Status (T7, 2026-10-14; cycle 6; ONE clean close, ONE reopen via Form menu recent forms, ONE reopened readback; NO Save): THE CLEAN FX_Orders DESIGNER FORM WAS CLOSED ONCE (Form-tab close control; no save or discard prompt) AND REOPENED ONCE (Form menu recent-forms entry `FX_Orders`). THE REOPENED READBACK MATCHED: Name `FX_CustomerID`; Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` (verbatim, accessibility). The List Source read-only editor (closed with its own Cancel) showed Type `IDO Collection`, IDO `FX_HelloWorld01`, Properties `FX_Code,FX_Label,FX_Address`, Columns to Display `1,2`, Rec Cap Override `0`. FX_Orders is open, User scope, and clean (Save and Undo disabled). The readback dialog was closed with Cancel once. No Designer Save, no component or validator change, no runtime, checkout or cache action. Classification: observed across an ordinary close and reopen only. This is a weak persistence boundary: NOT replay_verified and NOT independent database durability. Details: section "T7" at the end of this record.**

**Status (T6, 2026-10-14; cycle 5; ONE native Designer Save): THE NATIVE TOOLBAR SAVE WAS INVOKED EXACTLY ONCE on the dirty FX_Orders Designer (Save was enabled before the click). Native response, verbatim: toast title `Save`, text `Global object(s) were saved.`, with a `Close` control; the toast cleared itself after about six seconds (not dismissed by the worker). Immediately after the Save: toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; no dialog or alertdialog; FX_Orders selected; `ScopeType: User`. No second Save, no retry, no close or reopen of FX_Orders, no readback of Edit > Component Class, no mutation. A toast confirms the Designer reported a save; it does NOT prove database durability, and no durability is claimed. Classification: observed only. Not replay_verified. Details: section "T6" at the end of this record.**

**Status (T5, 2026-10-14; cycle 4; OUTER Global Objects OK once; first readback; Global Objects readback closed with Cancel once; NO Designer Save; NO close/reopen): THE OUTER GLOBAL OBJECTS DIALOG WAS CONFIRMED WITH OK ONCE and closed with no prompt. After that OK the Designer toolbar Save became ENABLED (not invoked) and Undo stayed disabled. The readback (Edit > Component Class, FX_CustomerID selected) shows Name `FX_CustomerID`, Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, and List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`, identical to the T4 value. A read-only List Source editor inspection (closed with its own Cancel) confirmed IDO collection `FX_HelloWorld01`, Properties `FX_Code,FX_Label,FX_Address`, Columns to Display `1,2`, and showed Rec Cap Override `0`. FX_Orders is open, User scope, DIRTY (Save enabled). Classification: observed only; the readback is the in-session Designer state, not stored or persisted state. Details: section "T5" at the end of this record.**

**Status (T4, 2026-10-14; cycle 3; List Source configured; Global Objects LEFT OPEN for T5): THE LIST SOURCE OF `FX_CustomerID` WAS SET AND CONFIRMED: Type `IDO Collection` (Tab-committed), IDO `FX_HelloWorld01` (Tab-committed), Properties `FX_Code,FX_Label,FX_Address` (three Add, Properties OK once), Columns to Display `1,2` (= FX_Code and FX_Label; FX_Address not selected; picker OK once), List Source dialog OK once. The class List Source row now reads `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` (verbatim, accessibility). Validators still `FX_CustomerID(%1,%2)`; Validate Immediately still `True`. **The toolbar Save is `[disabled]` after the List Source OK (it was enabled after T3); not invoked.** No outer Global Objects OK, no Designer Save, no close or reopen, no readback. Classification: observed only. Not replay_verified. Details: section "T4" at the end of this record.**

**Status (T3, 2026-10-14; cycle 2; Validators and Validate Immediately configured; Global Objects LEFT OPEN for T4): THE VALIDATOR `FX_CustomerID` WAS ADDED TO THE CLASS ONCE (existing validator, chosen from the picker; no validator created or changed), its Parameters were set to `%1,%2` (Tab-committed, verified, OK once), the Validators editor was confirmed with OK once, and Validate Immediately was set to `True` (Tab-committed, verified). The class Validators value reads `FX_CustomerID(%1,%2)`. NOT DONE (out of scope for T3): List Source (no value set), the outer Global Objects OK, Designer Save, close or reopen, readback. The Designer toolbar Save is enabled (not invoked). Unexpected: the validator picker's title is `New` (see the T3 section). Classification: observed only. Not replay_verified. Details: section "T3" at the end of this record.**

**Status (T2, 2026-10-14; cycle 1; component class shell created through New (+) once; name committed with Tab and confirmed with OK once; property sheet recorded; Global Objects property sheet LEFT OPEN for T3): THE COMPONENT CLASS `FX_CustomerID` WAS CREATED ONCE (its Name reads `FX_CustomerID`). NOTHING ELSE SET: no Validators, no Validate Immediately value, no List Source value, no outer Global Objects OK or Cancel, no Designer Save, no close or reopen, no readback, no component change. The Designer toolbar Save became ENABLED after the name OK (observed; accessibility, not invoked). Classification: observed only. Not replay_verified. Details: section "T2" at the end of this record.**

**Status (T1, 2026-10-14; cycle 0; read-only preflight and gates): PREFLIGHT COMPLETE. STOPPED before the first `New` (+) click in the Component Classes list, as the T1 instruction required.** The gates passed: the Designer is `FX_Orders`, `ScopeType: User`, clean (Save, Regenerate Form, Undo and Redo disabled, no dialog open); component class `FX_CustomerID` is **absent** from the Component Classes list; validator `FX_CustomerID` is **present** with Type `In Collection` and the Parameters and Error Message from EXP-087. No component class created, no validator changed, no string or message prompt, no field set, no OK in any dialog, no Designer Save, no close or reopen, no component change. AC-1 is supported with the limits in the AC table below. AC-2 to AC-5 are **NOT RUN** (creation, validator parameters, list source, readback, Save and reopen are for later tasks). Classification: **observed only. Not replay_verified.**

Run identity: run `R-20261014-173235-Jbt8`, experiment EXP-088, cycle 0, task T1, task_message_id `a24b9c31-0caf-4534-be94-f50ec43596e0`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`. Date 2026-10-14. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (tab title). Editing scope User. Mode LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Evidence directory `evidence/EXP-088/`.

Record creation disclosure: `experiments/EXP-088-…md` did not exist before this task (the repository held only the brief commits `9ebc3a1` draft and `2726d31` approved). This worker created the record in T1.

## Why this experiment (from the brief)

The tutorial (`docs/mongoose/transcripts/hello-world-pt5.md`, Section 9, 13:06–15:08) packages the validator from EXP-087 into a reusable component class: a validator entry with forwarding parameters `%1,%2`, `Validate Immediately = True`, and a list source (IDO collection) whose extra hidden property (the address) feeds the validator's outputs when a drop-down choice is made. This experiment adapts that to FX_ names in User scope: class `FX_CustomerID`; validator `FX_CustomerID` (EXP-087); IDO `FX_HelloWorld01` (tutorial `Customer`); list properties `FX_Code`, `FX_Label`, `FX_Address`; displayed columns `FX_Code` and `FX_Label`. Applying the class to the FX_Orders combobox and grid column is EXP-089 (Section 10). The tutorial's cache step is deferred to the runtime test.

Expected end state after the later tasks: component class `FX_CustomerID` (User version) with Data Source > Validation > Validators `FX_CustomerID` (Parameters `%1,%2`), Validate Immediately `True`, List Source Type `IDO Collection`, IDO `FX_HelloWorld01`, Properties `FX_Code, FX_Label, FX_Address`, Columns to Display `FX_Code, FX_Label`. **Unverified** until read back.

## Sources reviewed (T1, before any browser interaction)

| Source | Extent of read | Applied lesson |
| --- | --- | --- |
| `AGENTS.md` | Read in full (238 lines). | FX_ scope extension; User editing scope; evidence rules; recovery rules; knowledge states. |
| `docs/mongoose/transcripts/hello-world-pt5.md`, Section 9 (lines 215–229) and Section 10 (lines 231–244); transcript lines 513–547 (13:06–16:22) | Read in full. Trust: **unverified** tutorial transcript (automatic transcription; possible recognition errors). | Narrated steps: Edit > Component Class > New; name; Data Source > Validation > Validators (add the validator); its Parameters `%1,%2`; Validate Immediately True; List Source Type IDO Collection, IDO Customer; Properties ID, Name, Address; Columns to Display ID, Name (shift-select); save and unload (**not in this experiment**). Section 10 (out of scope): apply to the combobox and grid column. |
| `docs/mongoose/guides/web-designer.md`, "Creating a Component Class object" (lines 242–254) | Read in full. Trust: **unverified** documentation. | Edit > Component Class; the lower-left New (+) button; Name field; OK; the property sheet appears; set properties; OK. |
| `docs/mongoose/guides/global-objects-additional.md`, "Modifying global objects in the Web Designer" (lines 59–74) | Read in full. Trust: **unverified** documentation. | Edit menu > object type; select the object in the editor form; modify; OK (in most cases through the Design/pencil button on the Properties sheet). |
| `experiments/EXP-087-…in-collection-validator.md` (status headers T1–T8; T1 gates; T2 and T3 sections, lines 1–507 of 1409) | Partial read (headers, T1–T3). T4–T8 read through their status headers only. Trust: the record's own observations (one run each). | Validator `FX_CustomerID` present (In Collection on `FX_HelloWorld01`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`). Dialog list pattern; Tab commit before OK; the Designer Save toast `Global object(s) were saved.` (T5 header). Lines 508–1409 (T4 body, T5–T8 bodies) were **not** read in full. |
| `experiments/EXP-085-…property-class-extensions.md` (outcome section, lines 1287–1329; T1 gates excerpt not read) | Targeted read of the outcome. | Creating an object in an inline editor works when every field is committed with Tab before OK; a new dialog's Property list may be empty and is typed into; a Global Objects Cancel readback changed nothing; a Designer Save toast read `Global object(s) were saved.`; created objects survive the Save and the Designer close/reopen. The comboboxes' component-level defaults can override an extension until cleared (not in scope here). |
| `experiments/EXP-064-…theme-and-button-class.md` (outcome section, lines 1008–1033) | Read in full. | The sequence for Global Objects editors is OK on the nested editor, then OK on the Global Objects dialog, then at most one Designer toolbar Save, only if it became enabled. Persistence observed only within the same session. |

**Partial-read limitation:** EXP-087 was read in part (lines 1–507 of 1409). The unread parts were not applied to this T1 task.

## Session and tab handling

- Tab list (first browser call of the task, before any selection): tab 0 = Designer (`designer/default.aspx`, `mode=designer`, heading `FX_Orders`, current); tab 1 = Mongoose (portal, `favoriteContext=IdoProperties`). Tab 0 selected (succeeded, after the list). Tab 1 was **not** selected or touched.
- Session usable throughout. No "Session Expired" modal, no Infor sign-in page, no portal notification banner, no unsaved-change prompt, no browser-native dialog. **Re-login count 0.** The session-expiry procedure was **not** invoked.
- Console counts at snapshots: "2 errors, 0 warnings" on the Designer page (not inspected; out of scope).
- After the Component Classes and Validators dialog Cancels, the Designer page URL is unchanged from the tab list in this task. The Designer tab heading, footer and selected Form were used for identity.

## AC-1 — Gates (Designer, FX_Orders, Edit > Component Class layout, FX_CustomerID absence, validator presence)

### Designer identity and scope (g0-01)

| Item | Observed |
| --- | --- |
| Form | `FX_Orders` (Designer tab selected; heading `FX_Orders`; Properties Name `FX_Orders`) |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator> ]` (the operator name is not copied here) |
| Clean | Toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`; no alertdialog or in-page dialog |
| Form tabs at start | Form tab selected; Component tab not selected |

### Component Classes dialog layout (read-only; g0-02, g0-03)

Route: Designer top menu `Edit` (one click) > `Component Class` (one click). Opened **once**. Dialog title `Global Objects`; left heading `Component Classes`; right heading `Properties`.

| Region | Observed layout |
| --- | --- |
| Left pane heading | `Component Classes` (alphabetical list, scrollable with a vertical scroll bar; the list renders in slices) |
| Left search box | Empty textbox with a magnifier icon above the list (not used) |
| List controls (bottom of left pane) | Three icon buttons: `+` (New; **not used**), a copy icon (Copy; **not used**), and a trash icon (Delete; **not used**). Unlabelled in the accessibility tree; identified by position in the screenshot. |
| Right pane heading | `Properties` |
| Right search box and icons | Empty textbox with a magnifier; two blue icon buttons at the top right (presumed expand / collapse; **not used**) |
| Properties pane | **Empty** (no component class selected at the gate) |
| Properties pane footer | Undo and Redo icon buttons, both `[disabled]` |
| Dialog buttons | `OK`, `Cancel`, `Help` (bottom centre) |

Dialog list content observed: the first slice runs `AccessAsVar` … `BackgroundQueue.Weekly` (g0-02); a D slice runs `DailyTimeVar` … `DocInternalVar` (g0-03); the F–G slice runs `FileServerLogicalFolderVar` … `GetHasIONAPI` (accessibility only, see the limit below). Many existing component classes are present (for example `AccessAsVar`, `Button`, `CustomerID`). None were selected, opened or changed.

### FX_CustomerID presence (absent in the Component Classes list)

| Check | Observed |
| --- | --- |
| Alphabetical position where `FX_CustomerID` would sort | Between `FrequencyVar` and `GetCharacterTypeColumns` (the F–G accessibility read, after scrolling). The row list reads `FormNames`, `FreqRelativeType`, `FreqSchDayType`, `FrequencyVar`, **[no row]**, `GetCharacterTypeColumns`. |
| Boundary E/F | `ExtensionBundleName` is directly followed by `FileServerLogicalFolderVar`. No `FX_` row exists at that boundary either, which covers an ordinal (case-sensitive) sort as well. |
| Conclusion | **`FX_CustomerID` is absent** from the Component Classes list (observed). No component class named `FX_CustomerID` exists, so the gate allows the creation step in a later task. |

Limitation: the list is the Designer's client view of the metadata, not a database read. The F–G and E/F slices were read by accessibility only: **no screenshot shows them** (g0-03 shows the D slice). The list was not enumerated in full.

### Validators dialog (read-only; g0-04, g0-05)

Route: Edit > `Validator` (one click), opened **once**. Dialog layout as in EXP-087 (`Validators` list with search box and the `+`, copy, trash controls; `Properties` pane with search box and two blue icons; Undo and Redo; OK, Cancel, Help). The list starts `AccessAsPrefixObjectNameValid` … `CheckDuplicateProperty` (g0-04).

| Check | Observed |
| --- | --- |
| Validator `FX_CustomerID` present | **Yes.** The F–G slice shows `FullTextIndexNameValidator` → `FX_CustomerID` → `GE` (accessibility; the row is also visible in g0-05). |
| Selection | The validator row was **selected once** (view-only, to read its properties; no edit). |
| Name | `FX_CustomerID` |
| Type | **`In Collection`** (visible in g0-05; accessibility). |
| Parameters | `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` (full text from the accessibility read; the frame clips the value). |
| Error Message | `mIsNotAValid` (visible in g0-05). |
| Description and Edit in-line Script | blank (accessibility). |

Validators dialog closed with its Cancel once. No validator changed.

## Screenshots (gates)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-088/g0-01-designer-fx-orders-start-state.png` | FX_Orders heading and tab; Properties Name `FX_Orders`; footer `ScopeType: User`; Save and Undo greyed; no dialog. | Form identity, User scope and clean toolbar at the start. | Component class or validator state (no dialog open here). |
| `evidence/EXP-088/g0-02-global-objects-after-edit-component-class-click.png` | `Global Objects` dialog with heading `Component Classes`; list slice `AccessAsVar` … `BackgroundQueue.Weekly`; list controls `+`, copy, trash at bottom left; Properties pane empty; OK / Cancel / Help. | The Component Classes dialog layout and that no component class is selected. | FX_ rows (not in this slice). |
| `evidence/EXP-088/g0-03-component-classes-list-after-scroll.png` | Same dialog, list scrolled to the D rows (`DailyTimeVar` … `DocInternalVar`). `DateIncrementVar` is highlighted by pointer hover only; Properties pane empty. | The scroll position and that hover does not select a row. | The F–G slice (no screenshot); FX_ absence (see the accessibility reads). |
| `evidence/EXP-088/g0-04-validator-dialog-readonly-start.png` | `Global Objects` dialog with heading `Validators`; list top slice `AccessAsPrefixObjectNameValid` … `CheckDuplicateProperty`; Properties pane empty; OK / Cancel / Help. | The Validators dialog layout before any selection. | `FX_CustomerID` (not in this slice). |
| `evidence/EXP-088/g0-05-validator-FX_CustomerID-readonly-In-Collection.png` | Validators list with `FX_CustomerID` selected (highlighted) between `FullTextIndexNameValidator` and `GE`; Properties: Name `FX_CustomerID`; Type `In Collection`; Parameters `FX_HelloWorld01( PRO…` (clipped); Error Message `mIsNotAValid`; Edit in-line Script blank. | The validator is present and its Type is In Collection; Error Message. | The full Parameters text (clipped in the frame; the full text is from the accessibility read); the stored definition (a client view, not a database read). |

Filenames and the `evidence/playwright/` snapshot files are not proof of state. The browser tool wrote its own page snapshots and console logs under `evidence/playwright/` (for example `page-2026-10-14T09-33-10-895Z.yml`, `console-2026-10-14T09-32-59-533Z.log`); they were written by the tool, not the worker, and are excluded from the inventory.

## Action audit (T1, exact counts; cumulative = T1 only)

Browser calls: **37** (all calls listed in order below).

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer `mode=designer`, current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted | Designer; Save, Regenerate, Undo disabled; FX_Orders heading; User scope |
| 4 | `browser_take_screenshot` `g0-01` | Identity and clean state |
| 5 | `browser_click` `e5` (Edit menu) | Edit menu opened |
| 6 | `browser_find` text "Component Class" | Menu item `e633` |
| 7 | `browser_click` `e633` (Component Class, **once**) | `Global Objects` dialog (Component Classes) opened |
| 8 | `browser_snapshot` targeted at the page root `e1` | Accessibility read of the dialog (large output; read-only) |
| 9 | `browser_take_screenshot` `g0-02` | Dialog layout; top slice |
| 10 | `browser_find` regex F/G gridcell | **No match** (list not yet scrolled to F–G) |
| 11 | `browser_mouse_move_xy` (760,450) | Pointer over the Component Classes list (view) |
| 12 | `browser_mouse_wheel` (0,1000) | List scrolled to D rows (view) |
| 13 | `browser_find` regex F/G gridcell | **No match** (D rows rendered) |
| 14 | `browser_take_screenshot` `g0-03` | D rows; Properties empty |
| 15 | `browser_mouse_wheel` (0,800) | List scrolled to F–G rows (view) |
| 16 | `browser_find` regex F/G gridcell | F–G slice read (20 matches); no `FX_` row |
| 17 | `browser_mouse_wheel` (0,-200) | List scrolled up slightly to the E/F boundary (view) |
| 18 | `browser_find` regex E/F/FX gridcell | E/F boundary read; no `FX_` row |
| 19 | `browser_find` text "Cancel" | Cancel `e971` |
| 20 | `browser_click` `e971` (Cancel, **once**) | Component Classes dialog closed; no OK |
| 21 | `browser_find` regex (dialog, scope, Save, Undo, tab) | No dialog; FX_Orders selected; User scope; Save and Undo disabled |
| 22 | `browser_find` regex `button "Edit"` | Edit `e5` (menu not open) |
| 23 | `browser_find` text "Validator" | No match (menu closed) |
| 24 | `browser_click` `e5` (Edit menu) | Edit menu opened |
| 25 | `browser_find` text "Validator" | Validator menu item `e654` |
| 26 | `browser_click` `e654` (Validator, **once**) | `Global Objects` dialog (Validators) opened |
| 27 | `browser_find` regex FX_ / dialog | Dialog `e1420`; no FX_ row in the rendered top slice |
| 28 | `browser_take_screenshot` `g0-04` | Validators top slice; Properties empty |
| 29 | `browser_mouse_move_xy` (760,450) | Pointer over the Validators list (view) |
| 30 | `browser_mouse_wheel` (0,1600) | List scrolled to F–G (view) |
| 31 | `browser_find` regex F/G/FX gridcell | `FX_CustomerID` row `e1837` between `FullTextIndexNameValidator` and `GE` |
| 32 | `browser_click` `e1837` (FX_CustomerID row, **once**, view-only selection) | Properties shown for the validator |
| 33 | `browser_find` regex (Type, Parameters, Error Message, Name) | Name `FX_CustomerID`; Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid` |
| 34 | `browser_take_screenshot` `g0-05` | Validator selected; In Collection visible; Parameters clipped |
| 35 | `browser_find` text "Cancel" | Cancel `e1725` |
| 36 | `browser_click` `e1725` (Cancel, **once**) | Validators dialog closed; no OK |
| 37 | `browser_find` regex (dialog, scope, Save, Undo, tab) | No dialog; FX_Orders selected; User scope; Save and Undo disabled |

Count summary (T1): tab lists 1; tab selects 1 (succeeded); snapshots 2 (one untargeted, one at the page root); screenshots 5 (`g0-01` … `g0-05`); finds 15 (calls 6, 10, 13, 16, 18, 19, 21, 22, 23, 25, 27, 31, 33, 35, 37; of these, 10, 13 and 23 returned no match); ref clicks 7 (`e5`, `e633`, `e971`, `e5`, `e654`, `e1837`, `e1725`); coordinate clicks 0; mouse moves 2; mouse wheel 4 (view only); key presses 0; typed text 0; fill 0. Total **37** = 1 + 1 + 2 + 5 + 15 + 7 + 2 + 4.

Recovery and errors: browser errors / timeouts **0**; "Ref not found" errors **0**; fresh-snapshot recovery allowance used **0**; no retries of any action. Three finds returned "No match" because of list rendering or menu state, not errors; they were not repeated. No two browser actions were issued in parallel.

**Mongoose mutations and lifecycle (T1), exact:**
- Component classes created: **0**. `New` (+) uses: **0**. Name prompts answered: **0**.
- Validators created: **0**. Validator added to a class: **0**. Validator parameters set: **0**.
- Dialog OK clicks: **0**. Dialog Cancel clicks: **2** (Component Classes, then Validators; no change in either).
- Tab commits: **0**. Field entries (typed or chosen): **0**.
- List source properties added: **0**. Columns to display set: **0**.
- String or message prompts: **0** seen; answers: **0**. Strings created: **0**.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Designer unloads: **0**. Cache unloads, FormSync, deployment, regeneration: **0**.
- Component, caption or layout changes: **0** (the list scrolls, hover and the `FX_CustomerID` validator row selection are view state).
- Existing validators or component classes changed, copied, renamed or deleted: **0**.
- Runtime (tab 1) actions: **0**. Runtime Form opened: **0**. Record edits: **0**.
- Checkout, check-in, undo-checkout: **0**.
- Browser JavaScript / evaluate / console / network inspection by the worker: **0**. (The browser tool's own replies contain the Playwright code it ran; the worker wrote no script.)
- Re-logins: **0**. Session-expiry procedure: **not invoked** (no expiry observed).

## Worker-written file inventory (T1)

- `experiments/EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md` (created by this worker; this record).
- `evidence/EXP-088/g0-01-designer-fx-orders-start-state.png`
- `evidence/EXP-088/g0-02-global-objects-after-edit-component-class-click.png`
- `evidence/EXP-088/g0-03-component-classes-list-after-scroll.png`
- `evidence/EXP-088/g0-04-validator-dialog-readonly-start.png`
- `evidence/EXP-088/g0-05-validator-FX_CustomerID-readonly-In-Collection.png`

Total worker-written repository files (T1): **6** (1 record created directly by the worker; 5 screenshots created by the browser tool at the worker's request). The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/`; these were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

## Acceptance (T1)

| AC | T1 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported with limits.** Sources reviewed (partial EXP-087 read disclosed). Session usable. Designer FX_Orders, User scope, clean, no dialog. Edit > Component Class layout recorded. `FX_CustomerID` absent from the Component Classes list. Validator `FX_CustomerID` present with Type In Collection. | g0-01 (identity, scope, clean); g0-02 and g0-03 (dialog layout, empty Properties pane); the F–G and E/F accessibility reads (FX_CustomerID absent); g0-04 (validators layout); g0-05 (validator In Collection, Error Message) | Client UI view, not a database read. The F–G and E/F component-class slices have **no screenshot** (accessibility only). The full list was not enumerated. The Parameters value is clipped in g0-05 (full text from accessibility). |
| AC-2 | **NOT RUN** (creation is a later task; T1 stopped before `New`). | — | — |
| AC-3 | **NOT RUN.** | — | — |
| AC-4 | **NOT RUN.** | — | — |
| AC-5 | **Partial** (action audit and inventory for T1 recorded; complete audit and final report are for the last task). | Audit and inventory above | — |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| FX_Orders is open in the Designer, User scope, clean, at the start of the task | **observed** (one run, T1; g0-01) |
| Edit > Component Class opens a `Global Objects` dialog with a `Component Classes` list, list controls `+`, copy and trash, a `Properties` pane, and OK / Cancel / Help | **observed** (one run, T1; g0-02, g0-03) |
| `FX_CustomerID` is absent from the Component Classes list (between `FrequencyVar` and `GetCharacterTypeColumns`; no FX_ row at the E/F boundary) | **observed** (one run, T1; accessibility reads; client UI view, not a database read) |
| Edit > Validator opens the Validators list; `FX_CustomerID` is present, Type `In Collection`, Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`, Error Message `mIsNotAValid` | **observed** (one run, T1; g0-04, g0-05; accessibility) |
| Cancel in the Component Classes and Validators dialogs leaves the Designer clean with no change | **observed** (one run, T1; g0-01 and the post-Cancel finds) |
| Selecting a validator row (view) does not dirty the Designer | **observed** (one run, T1; Save disabled in the post-Cancel find) |
| The Designer page URL stays as listed in the tab list after the dialog Cancels, with the Form still selected | **observed** (one run, T1; URL only; identity read from the tab heading) |
| Tutorial Section 9 narrated steps (class name, validator, `%1,%2`, Validate Immediately, List Source, Columns to Display) | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |

## Deviations and limits (T1)

- **D1:** `FX_Orders` was already the open, clean, User-scoped Designer Form on arrival. It was not reopened through the Form menu recent-forms entry (the brief's "if needed"). Identity and scope were established from the tab, heading, Properties Name, footer and g0-01.
- **D2:** The F–G and E/F component-class slices have no screenshot (accessibility reads only). The screenshot trail for the component-class absence is therefore incomplete; the accessibility reads are the only evidence for those slices.
- **D3:** The Component Classes list controls `+`, copy and trash are unlabelled in the accessibility tree. They were identified by position in g0-02 only. No control was clicked; the `+` identification is needed for the next task and must be confirmed there by its outcome (name prompt).
- **D4:** Step 8 used a targeted snapshot at the page root (`e1`), which returned the whole page (large output; read-only). It was not repeated.
- **D5:** The Edit menu was closed and reopened once (calls 22–24) after the Component Classes Cancel, because the first Edit click's menu had closed. No action in the dialogs was repeated.
- **D6:** Partial read of EXP-087 (lines 1–507 of 1409; T4–T8 bodies not read). The unread parts were not applied to T1.
- **D7:** The g0-05 Parameters value is clipped in the frame; the full text is from the accessibility read, as in EXP-087 T3.

## Next permitted action (requires the coordinator's authorization for the next task)

1. **T2 (creation, Name):** from the clean FX_Orders Designer, open Edit > Component Class **once**; use the list `+` (New) **once** (confirm it by its name prompt, not by position alone); enter the Name `FX_CustomerID`; Tab once; verify; confirm the name prompt with its OK **once**; record the new property sheet (groups and the Data Source > Validation rows); stop with the Global Objects dialog open at the property sheet. No Validators, List Source, Validate Immediately or Designer Save in T2.
2. **T3 (validator, Validate Immediately, List Source):** per the brief's Validators (ellipsis, Add once, choose `FX_CustomerID`, Parameters `%1,%2`, Tab, verify, OK, OK), Validate Immediately `True` (Tab, verify), List Source (Type IDO Collection; IDO `FX_HelloWorld01`; Properties `FX_Code`, `FX_Label`, `FX_Address`; Columns to Display `FX_Code`, `FX_Label`), each dialog OK once.
3. **T4 (readback, one Designer Save, close/reopen, reopened readback)** per the brief's AC-3 and AC-4.

Classification for all T1 findings: **observed only, NOT replay_verified.**

---

## T2 — FX_CustomerID component class shell created through New (+) once; name committed (Tab) and confirmed (OK) once; property sheet recorded; Global Objects left OPEN for T3 (cycle 1)

Task T2 (bounded instruction): review the remaining EXP-087 readbacks (T4–T8 headers, the T5 Save and the T6 close/reopen) and this record; inspect the Designer read-only; confirm FX_Orders, User scope, clean, no dialog; open Edit > Component Class once and capture the E/F and F/G slices; if FX_CustomerID is present stop; activate the list New (+) once and require its name prompt; enter `FX_CustomerID`, Tab, verify; OK the prompt once; record the property sheet's groups (Data Source > Validation). Configure no property; open no ellipsis; no outer OK; no Save; no close. Run `R-20261014-173235-Jbt8`, task_message_id `0e984817-38a1-49c7-9798-25998cb240ee`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`, cycle 1.

### Sources and reads (T2)

- **EXP-087 remaining sections read (this task):** the T5 Save section (lines 940–958: one native Save, toast `Global object(s) were saved.`, disabled Save afterwards) and the T6 close/reopen section (lines 1107–1136: Form-tab close, Form menu recent-forms entry, clean reopened state). EXP-087 T4 and T7/T8 bodies were not re-read beyond the status headers; the T1–T3 bodies were applied in T1.
- Not re-read in T2: `hello-world-pt5.md`, `web-designer.md`, `global-objects-additional.md`, AGENTS.md, EXP-064 and EXP-085 (all read in T1; their rules are unchanged).

### Starting state (verified before any mutation)

- Tab list (first browser call, before any selection): tab 0 Designer (`mode=designer`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot (depth 4): tab `FX_Orders` selected; heading `FX_Orders`; footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; no dialog, no alertdialog, no Session Expired text, no sign-in. **Clean and User scope.** Image: `g0-01` (T1) shows the same state.

### Existence gate (FX_CustomerID absent; slices read before mutation)

- Edit (`e5`) > Component Class (`e633`) opened the `Global Objects` dialog **once** (heading `Component Classes`; Properties pane empty).
- Scroll and reads (view only): the E/F boundary and the F–G slice were read by accessibility (`ExtensionBundleName` → `FileServerLogicalFolderVar`; `FrequencyVar` → `GetCharacterTypeColumns`) and by screenshot.
- `t2-01-component-classes-EF-FG-slice-before-New.png`: **the file name is misleading**. It shows the E/F slice (`EventHandlerChrono` … `FldUDT`), not F–G. No FX_ row is visible.
- `t2-02-component-classes-FG-slice-before-New.png`: the F–G slice (`FreqSchDayType`, `FrequencyVar`, `GetCharacterTypeColumns`, `GraphTypeVar` … `IMECharset`). **No FX_CustomerID between `FrequencyVar` and `GetCharacterTypeColumns`.**
- **Gate result: FX_CustomerID absent. Proceed.** (Limit: a client UI view, not a database read.)
- The Validator gate was **not re-run** in T2. The bounded T2 instruction does not require it; T1 verified `FX_CustomerID` In Collection, and no validator action has been taken since.

### Creation (ONE New; ONE name prompt; ONE OK)

| Step | Call | Observed result | Evidence |
| --- | --- | --- | --- |
| Identify New (+) | Three unlabelled list controls at the bottom left (`e932`, `e933`, `e934`); the leftmost is the blue `+` in g0-02 and t2-02. Identified by position; the outcome (the name prompt) confirmed it. | — | — |
| New (+) | click `e932`, **once** | Small dialog `New`: `Name:` textbox (`e1339`, active, empty), OK `e1342`, Cancel `e1344`, `Close Window`. **The expected name prompt appeared.** | `t2-03-after-New-name-prompt-empty.png` |
| Name | type `FX_CustomerID` into `e1339` | Textbox reads `FX_CustomerID` | — |
| Name commit | Tab, **once** | Prompt still reads `FX_CustomerID`; exact value verified by find. | `t2-04-name-prompt-FX_CustomerID-before-OK.png` (captured after Tab, before OK) |
| Name prompt OK | click `e1342`, **once** | Prompt closed; no alert; no string or message prompt; the list gained the row `FX_CustomerID` (selected, below `FrequencyVar`). | `t2-05-new-component-class-property-sheet.png` |

### New property sheet (observed after the name OK; nothing configured)

Top-level groups, in order: **Design** (expanded: Name `FX_CustomerID`; Description blank; Caption blank with `Open Edit Property Dialog`; Version `User version for user <operator>`), **Appearance**, **Behavior**, **Data Source**, **Events**, **Help**, **Layout**, **Miscellaneous**, **Report** (the last nine collapsed at the first read).

Data Source group, expanded in this task (view state only; `t2-06-property-sheet-data-source-expanded.png`):

| Row | Observed value |
| --- | --- |
| Required | False |
| To Be Determined | False |
| Upper or Lower Case | Mixed |
| Value Is List Index | False |
| Default Value | blank |
| Data Type | group (collapsed) |
| List Source | blank, with `Open Edit Property Dialog` ellipsis (not opened) |
| Validation | group, expanded in this task (`t2-08`) |
| Formatting | group (collapsed) |

Validation group, expanded (`t2-07`, `t2-08`):

| Row | Observed value |
| --- | --- |
| Validators | blank, with `Open Edit Property Dialog` ellipsis (not opened) |
| Validate Immediately | False (dropdown) |
| **Validate Immediately Prompt** | blank (dropdown; a second property row; its meaning is **unresolved**; T3 must set the row named `Validate Immediately` only) |
| Message On Status Bar | False |

Designer toolbar Save: **enabled** (accessibility: Save button `e1346` without `[disabled]`; Regenerate Form `e1348` enabled). Undo in the Designer remains disabled; Undo in the Global Objects Properties pane is disabled. The dirtiness is the new, unsaved component class.

### Stop state (end of T2)

- **Open:** the `Global Objects` dialog, Component Classes list with `FX_CustomerID` selected (last row), Properties pane showing the property sheet with Data Source and Validation expanded. **No subsidiary prompt, no ellipsis, no New prompt open.** Find after the last action: only `dialog "Global Objects"` is present.
- **Not confirmed:** the Global Objects dialog (no OK, no Cancel). The class is therefore not yet committed by an outer OK.
- **Not configured:** Validators, Validate Immediately, List Source, Validators parameters, Columns to Display (all blank or False, as created).
- **Designer:** FX_Orders selected; `ScopeType: User`; Save **enabled** (not invoked); no close or reopen.

### Screenshots (T2)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-088/t2-01-component-classes-EF-FG-slice-before-New.png` | Global Objects (Component Classes); list slice E/F (`EventHandlerChrono` … `FldUDT`); `ExtClassNameVar` hover only; Properties empty. **Name says F–G; content is E/F.** | That no FX_ row appears in the E/F slice before New. | F–G (see t2-02). |
| `evidence/EXP-088/t2-02-component-classes-FG-slice-before-New.png` | Global Objects; list slice F–G (`FreqSchDayType` … `IMECharset`); no FX_CustomerID between `FrequencyVar` and `GetCharacterTypeColumns`. | FX_CustomerID absent before New (client view). | A database state. |
| `evidence/EXP-088/t2-03-after-New-name-prompt-empty.png` | `New` prompt over the Global Objects dialog; Name empty and focused; OK / Cancel. | The leftmost list control opens the expected name prompt. | Name content (empty here). |
| `evidence/EXP-088/t2-04-name-prompt-FX_CustomerID-before-OK.png` | `New` prompt with `FX_CustomerID` after Tab; OK / Cancel. | The name is entered and committed before OK. | That the name was accepted (see t2-05). |
| `evidence/EXP-088/t2-05-new-component-class-property-sheet.png` | List with `FX_CustomerID` selected (last visible row after `FrequencyVar`); Properties: Design group with Name `FX_CustomerID`; other groups collapsed; OK / Cancel / Help. Designer behind shows the Save icon dark (enabled). | Creation of one class named `FX_CustomerID`; the group list. | Stored definition (client view); Save state (accessibility confirms). |
| `evidence/EXP-088/t2-06-property-sheet-data-source-expanded.png` | Properties: Data Source expanded (Required False, To Be Determined False, Upper or Lower Case Mixed, Value Is List Index False, Default Value blank, Data Type). The **first capture of this file (collapsed) was overwritten by this capture**; the collapsed frame is no longer on disk. | Data Source rows as above. | Validation rows (see t2-08). |
| `evidence/EXP-088/t2-07-property-sheet-validation-row-selected.png` | Properties: Data Source children visible; List Source (blank, ellipsis); Validation selected (collapsed); Formatting. | The Validation and List Source rows exist as direct Data Source children. | Validators and Validate Immediately values (see t2-08). |
| `evidence/EXP-088/t2-08-property-sheet-validation-expanded.png` | Properties: Validation expanded: Validators (ellipsis), Validate Immediately False, `Validate Immediately ...` (blank; accessibility name `Validate Immediately Prompt`), Message On Status Bar False. | The Validation rows and their values at creation. | That any value is committed beyond creation. |

Filenames and tool-written `evidence/playwright/` snapshot or console files are not proof of state.

### Action audit (T2, exact; 40 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer `mode=designer`, current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (depth 4) | Designer; FX_Orders selected; Save, Regenerate, Undo disabled |
| 4 | `browser_click` `e5` (Edit) | Edit menu opened |
| 5 | `browser_find` "Component Class" | Menu item `e633` |
| 6 | `browser_click` `e633` (Component Class, **once**) | Global Objects (Component Classes) opened |
| 7 | `browser_find` dialog, heading, Cancel, OK | Dialog `e666`; OK `e969`; Cancel `e971` |
| 8 | `browser_mouse_move_xy` (760,450) | Pointer over list (view) |
| 9 | `browser_mouse_wheel` (0,1800) | List scrolled (view) |
| 10 | `browser_find` regex F/G/E gridcell | E/F and F/G rows read (accessibility) |
| 11 | `browser_take_screenshot` `t2-01` | E/F slice (name misleading) |
| 12 | `browser_mouse_wheel` (0,500) | List scrolled to F–G (view) |
| 13 | `browser_take_screenshot` `t2-02` | F–G slice; no FX_CustomerID |
| 14 | `browser_find` toolbar and list-control refs | Controls `e932` (+), `e933`, `e934` |
| 15 | `browser_click` `e932` (New +, **once**) | `New` name prompt opened |
| 16 | `browser_find` New prompt | Name textbox `e1339` (active); OK `e1342` |
| 17 | `browser_take_screenshot` `t2-03` | Empty name prompt |
| 18 | `browser_type` `e1339` `FX_CustomerID` | Name typed |
| 19 | `browser_press_key` Tab (**once**) | Name committed |
| 20 | `browser_find` name verify | Name reads `FX_CustomerID` |
| 21 | `browser_take_screenshot` `t2-04` | Name before OK |
| 22 | `browser_click` `e1342` (name OK, **once**) | Class created; list row; property sheet |
| 23 | `browser_find` property sheet (treeitems) | Groups and Design rows |
| 24 | `browser_take_screenshot` `t2-05` | Property sheet |
| 25 | `browser_click` `e1667` (Data Source row, select) | Data Source selected, not expanded |
| 26 | `browser_find` Data Source / Validation / List Source | Rows found; Data Source collapsed |
| 27 | `browser_press_key` ArrowRight (**once**) | No expansion |
| 28 | `browser_take_screenshot` `t2-06` (collapsed frame) | Overwritten later (see screenshot table) |
| 29 | `browser_mouse_click_xy` (980,467) (Data Source chevron, **once**) | Data Source expanded |
| 30 | `browser_find` Validation / List Source rows | List Source and Validation rows |
| 31 | `browser_take_screenshot` `t2-06` (expanded; **overwrote** the file) | Data Source expanded |
| 32 | `browser_find` Data Source rows (Required … Data Type) | Values read |
| 33 | `browser_click` `e1796` (Validation row, select) | Validation selected |
| 34 | `browser_press_key` ArrowRight (**once**) | No expansion |
| 35 | `browser_find` text "Validators" | No match (Validation not yet expanded) |
| 36 | `browser_take_screenshot` `t2-07` | Validation selected; collapsed |
| 37 | `browser_mouse_click_xy` (989,462) (Validation chevron, **once**) | Validation expanded |
| 38 | `browser_take_screenshot` `t2-08` | Validation rows |
| 39 | `browser_find` Validators, Validate Immediately, Message On Status Bar, Save, Undo, Regenerate | Rows read; Save enabled |
| 40 | `browser_find` dialog New / alertdialog / Global Objects / session text | Only `Global Objects` open |

Count summary (T2): tab lists 1; tab selects 1 (succeeded); untargeted snapshots 1; finds 13 (calls 5, 7, 10, 14, 16, 20, 23, 26, 30, 32, 35 (no match), 39, 40); screenshots 9 (`t2-01` … `t2-08`, with `t2-06` taken twice, the second overwriting the first); ref clicks 6 (`e5`, `e633`, `e932`, `e1342`, `e1667`, `e1796`); coordinate clicks 2 (chevrons at (980,467) and (989,462)); mouse moves 1; mouse wheels 2; typed text 1; Tab key presses 1; ArrowRight key presses 2. Total **40** = 1 + 1 + 1 + 13 + 9 + 6 + 2 + 1 + 2 + 1 + 1 + 2.

Recovery and errors: browser errors / timeouts **0**; "Ref not found" errors **0**; fresh-snapshot recovery allowance used **0**; no retries of any mutation; no two browser actions issued in parallel. One find (call 35) returned no match because the Validation group was not yet expanded; it was not repeated.

### Mutation and lifecycle counts (T2, exact)

- Component classes created: **1** (`FX_CustomerID`). **New (+) uses: 1.** Name prompts confirmed: 1 (OK once).
- Tab commits: **1** (name). Dialog OK clicks: **1** (name prompt). Outer Global Objects OK: **0**. Cancel clicks: **0**.
- Validators added: **0**. Validator Parameters set: **0**. Validators ellipsis opened: **0**.
- Validate Immediately changed: **0** (False as created). List Source ellipsis opened: **0**; List Source values set: **0**. Properties added: **0**. Columns to Display set: **0**.
- String or message prompts: **0** seen; answers **0**. Strings created: **0**.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Unloads, FormSync, deployment, regeneration: **0**.
- Component, caption or layout changes: **0**. Existing validators or component classes changed, copied, renamed or deleted: **0**.
- Runtime (tab 1) actions: **0**. Checkout actions: **0**. Re-logins: **0**. Session-expiry procedure: **not invoked** (no expiry observed).
- Browser JavaScript, console or network inspection by the worker: **0**.

### Cumulative browser action audit (T1 + T2)

| Item | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Browser calls | 37 | 40 | **77** |
| Component classes created | 0 | 1 | **1** |
| New (+) uses | 0 | 1 | **1** |
| Validators added to class | 0 | 0 | **0** (T3) |
| List-source properties added | 0 | 0 | **0** (T3) |
| Displayed columns set | 0 | 0 | **0** (T3) |
| Tab commits | 0 | 1 | **1** |
| Dialog OK clicks | 0 | 1 | **1** (name prompt) |
| Dialog Cancel clicks | 2 | 0 | **2** (T1: Component Classes; Validators; no change) |
| String or message prompts / answers | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | **0** |
| Re-logins | 0 | 0 | **0** |

### Worker-written file inventory (T2)

- `experiments/EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md` (edited in T2: status header and this section).
- `evidence/EXP-088/t2-01-component-classes-EF-FG-slice-before-New.png`
- `evidence/EXP-088/t2-02-component-classes-FG-slice-before-New.png`
- `evidence/EXP-088/t2-03-after-New-name-prompt-empty.png`
- `evidence/EXP-088/t2-04-name-prompt-FX_CustomerID-before-OK.png`
- `evidence/EXP-088/t2-05-new-component-class-property-sheet.png`
- `evidence/EXP-088/t2-06-property-sheet-data-source-expanded.png` (written twice; the second write replaced the first)
- `evidence/EXP-088/t2-07-property-sheet-validation-row-selected.png`
- `evidence/EXP-088/t2-08-property-sheet-validation-expanded.png`

T2 total: **8** evidence PNG files plus the record edit. Cumulative worker-requested repository files for EXP-088 (T1 + T2): **14** (the record once, 5 T1 files, 8 T2 files). Tool-written `evidence/playwright/` snapshots and console logs are excluded. The worker ran no git command; repository confinement is authoritative in the harness and operator git review.

### Deviations and limits (T2)

- **D1 (T2):** `t2-01` is named as the E/F+F–G slice but shows only the E/F slice. `t2-02` shows the F–G slice. Use `t2-02` for the F–G absence.
- **D2 (T2):** `t2-06` was written twice; the collapsed Data Source frame was overwritten. The collapsed state is recorded from the T2 find and screenshot reads, not from a preserved file.
- **D3 (T2):** The Validator gate was not re-run in T2 (not required by the bounded T2 instruction; verified in T1).
- **D4 (T2):** Expansion of the Data Source and Validation groups used one keyboard ArrowRight each (where it worked) and one coordinate click on each chevron. The first ArrowRight on Data Source did not expand; the chevron click did. This is view state only.
- **D5 (T2):** The Validate Immediately row's accessibility name is `Validate Immediately Prompt` (its visible label is truncated). A second row named `Validate Immediately` sits above it. T3 must target the row named exactly `Validate Immediately`, and the meaning of the Prompt row is not verified.
- **D6 (T2):** The Designer's Save is enabled and the class is dirty. That is the intended state for T3; Save is not invoked until the T4 readback task.

### Knowledge state (T2 findings)

| Finding | State |
| --- | --- |
| The leftmost unlabelled list control (`+`) in the Component Classes dialog opens the `New` name prompt; OK after the name creates the class | **observed** (one run, T2) |
| The New name prompt's Name textbox accepted `FX_CustomerID` after one Tab and OK created the class | **observed** (one run, T2) |
| A new component class's property sheet has groups Design, Appearance, Behavior, Data Source, Events, Help, Layout, Miscellaneous, Report | **observed** (one run, T2) |
| Data Source group rows at creation: Required False; To Be Determined False; Upper or Lower Case Mixed; Value Is List Index False; Default Value blank; Data Type; List Source blank (ellipsis); Validation group; Formatting group | **observed** (one run, T2) |
| Validation group rows at creation: Validators blank (ellipsis); Validate Immediately False; `Validate Immediately Prompt` blank; Message On Status Bar False | **observed** (one run, T2; the meaning of the Prompt row is unresolved) |
| The Designer Save becomes enabled after a new component class's name OK (no property set) | **observed** (one run, T2; accessibility) |
| FX_CustomerID is absent from the Component Classes list before New | **observed** (one run, T2; F–G and E/F slices; client view) |
| Tutorial Section 9 steps (validators, Parameters `%1,%2`, Validate Immediately, List Source) | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |

**Next permitted action (T3, after the coordinator's authorization):** keep the Global Objects dialog open at the new class. Under Data Source > Validation, open the Validators ellipsis once, record its layout, Add once, choose `FX_CustomerID`, select it, open its Parameters once and enter `%1,%2` (Tab, verify, OK once); confirm the Validators editor with OK once. Set the row `Validate Immediately` to True (Tab, verify). Open the List Source ellipsis once and set Type IDO Collection and IDO `FX_HelloWorld01`; Properties `FX_Code`, `FX_Label`, `FX_Address` (OK once); Columns to Display `FX_Code` and `FX_Label` (OK once); confirm the List Source dialog with OK once. Then outer Global Objects OK once (T3 scope as the coordinator defines it).

Classification for all T2 findings: **observed only, NOT replay_verified.**

---

## T3 — Validators (FX_CustomerID added once, Parameters `%1,%2`, OK once) and Validate Immediately (True, Tab-committed); Global Objects LEFT OPEN for T4 (cycle 2)

Task T3 (bounded instruction): configure only the Validators and Validate Immediately properties of the open `FX_CustomerID` class; add the EXISTING validator once; set Parameters `%1,%2` with Tab and OK once; OK the Validators editor once; set Validate Immediately True with Tab; leave Validate Immediately Prompt and Message On Status Bar unchanged; no List Source; no outer Global Objects OK; no Designer Save; no close or reopen. Run `R-20261014-173235-Jbt8`, task_message_id `9df82ffa-47aa-4e22-b728-9c3da6dd6601`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`, cycle 2.

### Sources and reads (T3)

No new source reads. T3 relied on the T1 and T2 reads and on the T2 record. The EXP-087 T3 section (the validator Parameters dialog layout and the `%1,%2`-style Set Prop text) was not re-read in T3.

### Starting state (verified read-only before any mutation)

- Tab list (first browser call): tab 0 Designer (`mode=designer`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Snapshot (depth 4): FX_Orders selected; `ScopeType: User`; Global Objects dialog open (the only dialog). Designer toolbar Save enabled (accessibility `button "Save"` without `[disabled]`).
- Find: the Name row reads `FX_CustomerID`; the Validation group is expanded; Validators (ellipsis `e1071`) blank; Validate Immediately `False`; Validate Immediately Prompt blank; Message On Status Bar `False`; List Source blank. **Matches the T2 stop state.**
- `t3-00-gate-inherited-FX_CustomerID-before-Validators.png`: the class property sheet with FX_CustomerID selected and the Validation rows. Shows identity, scope and the starting values.

### Validators editor: layout (opened once; read-only layout recorded before any Add)

Route: Validators ellipsis (`e1071`, `Open Edit Property Dialog`), clicked **once**. Dialog title `Validators`, nested over the Global Objects dialog.

| Region | Observed (`t3-01-validators-editor-layout-empty-before-Add.png`) |
| --- | --- |
| Grid | Two columns, `Name` and `Parameters`. **Empty** at the start (no validator on the class). |
| Bottom toolbar (left) | Five unlabelled icon buttons, left to right: blue `+` (`e1193`), trash, up, down, and a cube icon (`e1197`). The accessibility tree gives no labels. |
| Right pane | Properties pane; empty until a row is selected. A search box and two blue icons at the top right. |
| Buttons | `OK` (`e1228`) and `Help` only. **There is no Cancel** in this editor. |

### Add (the `+`): ONE activation; the prompt is a picker of existing validators, not a create prompt

| Step | Call | Observed |
| --- | --- | --- |
| `+` (leftmost, `e1193`) | click, **once** | A small dialog titled **`New`** opened: `Name:` combobox (active, empty, with a dropdown arrow `e1242`), OK `e1245`, Cancel `e1247`. `t3-02-validators-plus-opened-New-name-prompt-cancelled.png` (**the file name is wrong**: this capture was taken before any choice, and the prompt was not cancelled; see the deviations). |
| Dropdown (view only, not a commit) | click the arrow `e1242`, once | The dropdown opened and listed **existing validators** (`AccessAsPrefixObjectNameValid` … `YesNoFlag`, 283 matches in the accessibility tree), including `FX_CustomerID` (`e1331`). The list is the same set of validators that the Validators dialog on the Global Objects screen lists. |
| Choose | click `FX_CustomerID` (`e1331`), once | Combobox reads `FX_CustomerID`. |
| Commit | Tab, **once** | Combobox reads `FX_CustomerID`; list closed. `t3-03-add-validator-picker-FX_CustomerID-before-OK.png` (captured before OK). |
| Picker OK | click `e1245`, **once** | The prompt closed. The Validators grid gained **one** row `FX_CustomerID`, Parameters blank. No alert, no string or message prompt. |

**Interpretation (observed, one run):** the `+` in this editor opens a prompt titled `New` whose Name combobox lists existing validators; choosing one and confirming adds that validator to the class. A create-new path was **not** exercised, and no name was typed or created. The title `New` therefore does not mean a new validator was created. The validator list on the Global Objects screen still shows a single `FX_CustomerID` (client view; see the post-OK find below).

### Validator row selected; Parameters (opened ONCE; dialog layout recorded before any entry)

| Step | Call | Observed |
| --- | --- | --- |
| Select the row | click the row cell `e1534`, once | The row `FX_CustomerID` is highlighted in the Name column. The right pane shows the **validator definition's** properties (Name `FX_CustomerID`, Type `In Collection`, Parameters `FX_HelloWorld…`, Error Message `mIsNotAValid`, Edit in-line Script blank, Version). **These are the validator's own properties; they were not edited.** `t3-04-validators-editor-FX_CustomerID-row-selected.png`. |
| Parameters control (bottom cube icon `e1197`) | click, **once** | Tooltip not available in the accessibility tree (a hover, `e1197`, gave none). The click opened a dialog titled **`Parameters`** (`e1625`): an empty text box (`e1632`), an empty combobox (`e1637`, with a dropdown arrow `e1638`), and `OK` (`e1640`) / `Cancel` (`e1642`). `t3-05-validator-Parameters-dialog-initial-layout.png`. The cube is therefore the class-level Parameters control for the selected row (matching the tutorial's "parameters button at the bottom"). |
| Enter | click the text box (`e1632`), then type `%1,%2` | Text box reads `%1,%2`. |
| Commit | Tab, **once** | Text box reads `%1,%2`; focus moved to the combobox (`e1637`). The combobox was **not** touched. `t3-06-validator-Parameters-%1-%2-before-OK.png` (captured before OK). |
| Parameters OK | click `e1640`, **once** | The Parameters dialog closed. The Validators grid row now reads Parameters **`%1,%2`**. |

### Validators editor: the editor frame before its OK, and its OK

- `t3-07-validators-editor-FX_CustomerID-%1-%2-before-OK.png`: the grid shows one row, `FX_CustomerID` | `%1,%2`. Shows the validator and its parameters before the editor OK.
- Validators editor OK (`e1228`), **once**. The editor closed with no prompt. The Global Objects dialog remains open.
- Post-OK find: the Validators property on the class reads **`FX_CustomerID(%1,%2)`** (verbatim, accessibility `gridcell`). Only the Global Objects dialog remains open.

### Validate Immediately: True (dropdown, Tab, verify)

| Step | Call | Observed |
| --- | --- | --- |
| Open the dropdown | click the arrow `e1081`, once | Combobox expanded: options `True` (`e1667`) and `False` (selected). |
| Choose | click `True` (`e1667`), once | Combobox text `True`. |
| Commit | Tab, **once** | The Validate Immediately row reads **`True`** (gridcell, accessibility). The dropdown closed. |

`t3-08-validate-immediately-True-after-Tab.png`: the Validation group shows Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, the Prompt row blank, and Message On Status Bar `False`. Shows the values after the commit. The Designer behind shows the class dirty.

**Not changed (as the bounded instruction requires):** Validate Immediately **Prompt** (blank), Message On Status Bar (`False`), Formatting, Events, Data Type, Default Value, Required, To Be Determined, Upper or Lower Case, Value Is List Index. The List Source row (blank) was **not** opened.

### Stop state (end of T3)

- **Open:** only the `Global Objects` dialog, at the class `FX_CustomerID` (selected), with its Validation group showing Validators `FX_CustomerID(%1,%2)` and Validate Immediately `True`. A final find confirms no `alertdialog`, no `New`, no `Validators` and no `Parameters` dialog open.
- **Not confirmed:** the Global Objects dialog (no OK, no Cancel). The class is not yet committed by an outer OK.
- **Designer:** FX_Orders selected; `ScopeType: User`; toolbar Save **enabled** (not invoked); Regenerate Form enabled (not invoked); no close or reopen.
- **Not configured:** List Source (blank); Validate Immediately Prompt (blank); Message On Status Bar (`False`).

### Screenshots (T3)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-088/t3-00-gate-inherited-FX_CustomerID-before-Validators.png` | Global Objects, class `FX_CustomerID` selected, Validation group expanded; Validators blank; Validate Immediately False; Save enabled behind. | The inherited T2 state before any T3 mutation. | The stored state (client view). |
| `evidence/EXP-088/t3-01-validators-editor-layout-empty-before-Add.png` | Validators editor (`Name` / `Parameters` grid empty); bottom toolbar of five icons (`+`, trash, up, down, cube); right pane empty; OK / Help only. | The editor layout before any Add. | The icon functions (not labelled). |
| `evidence/EXP-088/t3-02-validators-plus-opened-New-name-prompt-cancelled.png` | Validators editor with the `New` prompt open over it: `Name:` combobox empty, OK / Cancel. **File name wrong**: the prompt was not cancelled; this frame is before any choice. | That the `+` opens the `New` prompt. | That it is a create-new prompt (see the picker dropdown in the accessibility read; the T3 interpretation). |
| `evidence/EXP-088/t3-03-add-validator-picker-FX_CustomerID-before-OK.png` | The `New` prompt with `FX_CustomerID` in the Name combobox after Tab; OK / Cancel. | The chosen existing validator name, committed before OK. | That the OK adds it as a class entry (see t3-04 and t3-07). |
| `evidence/EXP-088/t3-04-validators-editor-FX_CustomerID-row-selected.png` | Validators grid with one row `FX_CustomerID`, Parameters blank; right pane shows the validator definition (Name `FX_CustomerID`, Type `In Collection`, Parameters `FX_HelloWorld01(…)`, Error Message `mIsNotAValid`). | One row added; the validator is In Collection and unchanged. | That the class-level Parameters are set (t3-07). |
| `evidence/EXP-088/t3-05-validator-Parameters-dialog-initial-layout.png` | `Parameters` dialog: empty text box, empty combobox, OK / Cancel. | The layout before entry. | The meaning of the combobox (not entered). |
| `evidence/EXP-088/t3-06-validator-Parameters-%1-%2-before-OK.png` | `Parameters` dialog with the text box `%1,%2` after Tab; focus on the combobox. | The committed text before OK. | That OK stores it (t3-07). |
| `evidence/EXP-088/t3-07-validators-editor-FX_CustomerID-%1-%2-before-OK.png` | Validators editor: one row `FX_CustomerID` | `%1,%2`; OK / Help. | Validators-level OK effect (see the post-OK find: `FX_CustomerID(%1,%2)`). |
| `evidence/EXP-088/t3-08-validate-immediately-True-after-Tab.png` | Validation group: Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, Prompt row blank, Message On Status Bar `False`. | The committed values for the T4 readback. | The stored definition (client view) or the Designer Save. |

Filenames and tool-written `evidence/playwright/` files are not proof of state. The T2 stop-state frame `t2-08` remains the reference for the Validation layout at creation.

### Action audit (T3, exact; reported as 47 browser calls; reconciled in T8 to 48 by the controller row ledger, with 17 finds not 16; see the T8 section)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (depth 4) | Designer; FX_Orders; User; Global Objects open |
| 4 | `browser_find` gate rows (FX_CustomerID, Validation rows) | Name `FX_CustomerID`; Validators blank; Validate Immediately False |
| 5 | `browser_take_screenshot` `t3-00` | Gate state |
| 6 | `browser_click` `e1071` (Validators ellipsis, **once**) | Validators editor opened |
| 7 | `browser_find` dialog and buttons | Validators dialog; OK `e1228`, Help; no Cancel |
| 8 | `browser_snapshot` target `e1175` (Validators dialog) | Grid empty; toolbar of five icons |
| 9 | `browser_take_screenshot` `t3-01` | Editor layout before Add |
| 10 | `browser_click` `e1193` (`+`, **once**) | `New` prompt opened (Name combobox) |
| 11 | `browser_find` dialog check | `New` dialog `e1232` |
| 12 | `browser_take_screenshot` `t3-02` | `New` prompt before choice |
| 13 | `browser_find` combobox and buttons | Combobox `e1241`; arrow `e1242`; OK `e1245`; Cancel `e1247` |
| 14 | `browser_click` `e1242` (dropdown arrow; view) | Dropdown opened (existing validators) |
| 15 | `browser_find` option list | `FX_CustomerID` option `e1331` |
| 16 | `browser_click` `e1331` (FX_CustomerID, **once**) | Combobox set |
| 17 | `browser_press_key` Tab (**once**) | Committed |
| 18 | `browser_find` combobox verify | Combobox reads `FX_CustomerID` |
| 19 | `browser_take_screenshot` `t3-03` | Before OK |
| 20 | `browser_click` `e1245` (picker OK, **once**) | Row added to Validators grid |
| 21 | `browser_find` grid row | Row `FX_CustomerID` `e1534`; Parameters blank |
| 22 | `browser_click` `e1534` (row, select) | Row selected; validator definition shown |
| 23 | `browser_take_screenshot` `t3-04` | Row selected |
| 24 | `browser_find` Parameters / buttons | Validator definition read; Parameters cube `e1197` |
| 25 | `browser_hover` `e1197` | No tooltip in the tree |
| 26 | `browser_click` `e1197` (Parameters cube, **once**) | `Parameters` dialog opened |
| 27 | `browser_find` dialog | `Parameters` `e1625` |
| 28 | `browser_snapshot` target `e1625` | Text box `e1632`; combobox `e1637`; OK `e1640`; Cancel `e1642` |
| 29 | `browser_take_screenshot` `t3-05` | Layout before entry |
| 30 | `browser_click` `e1632` (text box, focus) | Focused |
| 31 | `browser_type` `e1632` `%1,%2` | Typed |
| 32 | `browser_press_key` Tab (**once**) | Committed; focus to combobox |
| 33 | `browser_find` verify | Text box `%1,%2` |
| 34 | `browser_take_screenshot` `t3-06` | Before OK |
| 35 | `browser_click` `e1640` (Parameters OK, **once**) | Parameters closed; grid Parameters `%1,%2` |
| 36 | `browser_find` dialogs and grid | Only Validators open; row `%1,%2` |
| 37 | `browser_take_screenshot` `t3-07` | Editor before OK |
| 38 | `browser_click` `e1228` (Validators OK, **once**) | Editor closed |
| 39 | `browser_find` post-OK | Validators value `FX_CustomerID(%1,%2)`; Validate Immediately False |
| 40 | `browser_click` `e1081` (Validate Immediately arrow; view) | Dropdown opened (True, False) |
| 41 | `browser_find` options | Option `True` `e1667`; `False` selected |
| 42 | `browser_find` option refs | Same as 41 |
| 43 | `browser_click` `e1667` (True, **once**) | Combobox `True` |
| 44 | `browser_press_key` Tab (**once**) | Committed |
| 45 | `browser_find` verify | Validate Immediately reads `True` |
| 46 | `browser_take_screenshot` `t3-08` | Validation values after commit |
| 47 | `browser_find` dialogs, Save, scope | Only Global Objects open; Save enabled; User |

Count summary (T3): tab lists 1; tab selects 1 (succeeded); snapshots 3 (one untargeted, two targeted); finds 16 (calls 4, 7, 11, 13, 15, 18, 21, 24, 27, 33, 36, 39, 41, 42, 45, 47); screenshots 9 (`t3-00` … `t3-08`); ref clicks 12 (`e1071`, `e1193`, `e1242`, `e1331`, `e1245`, `e1534`, `e1197`, `e1632`, `e1640`, `e1228`, `e1081`, `e1667`); hover 1; typed text 1; Tab key presses 3; coordinate clicks 0. Total **47** = 1 + 1 + 3 + 16 + 9 + 12 + 1 + 1 + 3.

Recovery and errors: browser errors / timeouts **0**; "Ref not found" **0**; fresh-snapshot recovery allowance used **0**; no retries of a mutation; no two browser actions in parallel. Calls 41 and 42 were two reads of the same option state (not a repeated mutation). Call 24 was a read of the validator definition (a non-error step that exposed the right-pane properties).

### Mutation and lifecycle counts (T3, exact)

- Validators added to the class: **1** (`FX_CustomerID`, through the `+` picker; the `+` was activated once).
- Validators created or changed (definition): **0**. The validator's own Parameters and Error Message were **not** edited (the right-pane values were only read).
- Validator class-entry Parameters set: **1** (`%1,%2`). Parameters dialog OKs: **1**. Parameters dialog Cancels: **0**.
- Validators editor OKs: **1**. Picker `New`-titled prompt OKs: **1**. Outer Global Objects OK: **0**. Outer Global Objects Cancel: **0**.
- Validate Immediately set: **1** (`True`).
- Tab commits: **3** (picker combobox; Parameters text box; Validate Immediately). Field entries typed: **1** (`%1,%2`).
- Strings or messages: **0** prompts; answers **0**. Strings created: **0**.
- Designer Saves: **0**. Designer close/reopen: **0 / 0**. Unloads, FormSync, deployment, regeneration: **0**.
- Component, caption or layout changes: **0**. Other classes, validators or property classes changed: **0**.
- List Source: **not opened, not set** (out of scope for T3).
- Runtime (tab 1) actions: **0**. Checkout actions: **0**. Re-logins: **0**. Session-expiry procedure: **not invoked**.
- Browser JavaScript, console or network inspection by the worker: **0**.

### Cumulative browser action audit (T1 + T2 + T3)

| Item | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Browser calls | 37 | 40 | 47 | **124** |
| Component classes created | 0 | 1 | 0 | **1** |
| New (+) in Component Classes list | 0 | 1 | 0 | **1** |
| Validators added to class | 0 | 0 | 1 | **1** |
| Validator definitions created or changed | 0 | 0 | 0 | **0** |
| List-source properties added | 0 | 0 | 0 | **0** (T4 scope) |
| Displayed columns set | 0 | 0 | 0 | **0** (T4 scope) |
| Validator Parameters set | 0 | 0 | 1 | **1** |
| Validate Immediately set | 0 | 0 | 1 | **1** |
| Tab commits | 0 | 1 | 3 | **4** |
| Dialog OK clicks | 0 | 1 | 3 | **4** (T2 name; T3 picker, Parameters, Validators) |
| Outer Global Objects OK | 0 | 0 | 0 | **0** |
| Dialog Cancel clicks | 2 | 0 | 0 | **2** (T1 Component Classes; Validators; no change) |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T3)

- `experiments/EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md` (edited in T3: status header and this section).
- `evidence/EXP-088/t3-00-gate-inherited-FX_CustomerID-before-Validators.png`
- `evidence/EXP-088/t3-01-validators-editor-layout-empty-before-Add.png`
- `evidence/EXP-088/t3-02-validators-plus-opened-New-name-prompt-cancelled.png` (name wrong; see above)
- `evidence/EXP-088/t3-03-add-validator-picker-FX_CustomerID-before-OK.png`
- `evidence/EXP-088/t3-04-validators-editor-FX_CustomerID-row-selected.png`
- `evidence/EXP-088/t3-05-validator-Parameters-dialog-initial-layout.png`
- `evidence/EXP-088/t3-06-validator-Parameters-%1-%2-before-OK.png` (file name contains `%`)
- `evidence/EXP-088/t3-07-validators-editor-FX_CustomerID-%1-%2-before-OK.png` (file name contains `%`)
- `evidence/EXP-088/t3-08-validate-immediately-True-after-Tab.png`

T3 total: **9** PNG files plus the record edit. Cumulative worker-requested repository files for EXP-088 (T1 + T2 + T3): **23** (the record once, 5 T1 PNGs, 8 T2 PNGs, 9 T3 PNGs). Tool-written `evidence/playwright/` files are excluded. No git command was run.

### Deviations and limits (T3)

- **D1 (the `+` is labelled `New`):** the validators editor's `+` opened a prompt titled `New` whose Name combobox lists existing validators. The brief called it the Add control. It was used once, a validator was chosen from the existing list, and the prompt's OK was used once. No name was typed and no create path was tested. **Unresolved:** whether typing a non-listed name and OK would create a validator (not tested and not to be tested).
- **D2 (`t3-02` file name):** named `…cancelled.png`, but it shows the `New` prompt before any choice. The prompt was **not** cancelled. The name is wrong.
- **D3 (the Parameters control):** the Parameters dialog opened from the bottom cube icon (`e1197`), which is the only bottom-toolbar icon left after identifying `+`. The cube's name is unlabelled and was confirmed only by its dialog (a single text box `%1,%2` and an unentered combobox). The combobox was left empty. Its purpose is **unresolved**.
- **D4 (validator definition shown in the right pane):** selecting the class's validator row showed the validator's own properties, including its Parameters `FX_HelloWorld01(…)`. These were read, not edited. The class-level Parameters (`%1,%2`) are separate and show in the Parameters column.
- **D5 (the hover):** the hover on the cube produced no tooltip; the identification is by the dialog that opened.
- **D6 (file names with `%`):** `t3-06` and `t3-07` contain `%` characters. Both were written successfully.
- **D7 (no Cancel in the Validators editor):** the editor offers only OK and Help. Nothing was cancelled there.

### Knowledge state (T3 findings)

| Finding | State |
| --- | --- |
| The Validators editor on a class has columns Name and Parameters, a bottom toolbar of five icons (`+`, trash, up, down, cube), and OK / Help only | **observed** (one run, T3) |
| The `+` in this editor opens a prompt titled `New` whose Name combobox lists existing validators (including FX_CustomerID); choosing one and OK adds one class row | **observed** (one run, T3; the create-new path is not tested) |
| The cube icon opens a `Parameters` dialog (text box and combobox; OK / Cancel) for the selected class row | **observed** (one run, T3; the combobox purpose is unresolved) |
| Parameters text `%1,%2` committed with Tab, then OK, is shown on the class row as `%1,%2`; the Validators value reads `FX_CustomerID(%1,%2)` | **observed** (one run, T3; client view, not stored state) |
| Validate Immediately can be set to True from its dropdown, committed with Tab | **observed** (one run, T3) |
| Validate Immediately Prompt and Message On Status Bar were left unchanged | **observed** (one run, T3) |
| The validator's own definition (Type In Collection, Error Message `mIsNotAValid`) was not changed by T3 | **observed** (one run, T3; read only) |
| Tutorial Section 9 steps (validators, `%1,%2`, Validate Immediately, List Source) | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |

**Next permitted action (T4, after the coordinator's authorization):** keep the Global Objects dialog open at FX_CustomerID. Open the List Source ellipsis once (`e1052` in the last find, to be re-read in the next task); set Type `IDO Collection` and IDO `FX_HelloWorld01` (Tab, verify each); open Properties once and add `FX_Code`, `FX_Label`, `FX_Address` in that order (OK once); open Columns to Display once and select `FX_Code` and `FX_Label` only (OK once); confirm the List Source dialog with OK once. Then the outer Global Objects OK once, and the readback, Save and reopen as the brief defines.

Classification for all T3 findings: **observed only, NOT replay_verified.**

---

## T4 — List Source of FX_CustomerID: Type IDO Collection; IDO FX_HelloWorld01; Properties FX_Code, FX_Label, FX_Address; Columns to Display 1,2; List Source dialog OK once; Global Objects LEFT OPEN for T5 (cycle 3)

Task T4 (bounded instruction): configure only the List Source of the existing `FX_CustomerID` class, from the Global Objects dialog retained by T3. Inspect read-only; open the List Source ellipsis once; record its layout; set Type and IDO (Tab, verify); open Properties once and add FX_Code, FX_Label, FX_Address in that order; OK once; open Columns to Display once and select FX_Code and FX_Label only (FX_Address not selected); OK once; OK the List Source dialog once; record the List Source value verbatim; verify Validators and Validate Immediately; leave the outer Global Objects dialog open. No outer OK, no Save, no close or reopen, no readback, no further validators. Run `R-20261014-173235-Jbt8`, task_message_id `22e89200-54cd-4a81-b65f-4133e4dd626a`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`, cycle 3.

### Sources and reads (T4)

No new source reads. T4 relied on the T1–T3 reads and this record's T2 and T3 sections. The bounded instruction was the controlling source.

### Starting state (verified read-only before any mutation)

- Tab list (first browser call): tab 0 Designer (`mode=designer`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Snapshot (depth 4): FX_Orders selected; `ScopeType: User`; Global Objects dialog open and the only dialog; toolbar Save enabled (from T3).
- Find: class Name row `FX_CustomerID`; Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source blank (`e1045`, ellipsis `e1052`, freshly re-read in this task). **Matches the T3 stop state.**
- `t4-00-gate-inherited-FX_CustomerID-before-ListSource.png`: the class property sheet with FX_CustomerID selected and the Validation rows. Shows identity, scope and the starting values.

### List Source dialog: layout (opened once)

Route: List Source ellipsis (`e1052`, `Open Edit Property Dialog`), clicked **once**. Dialog title `Edit List Source Specifications`, nested over the Global Objects dialog. (The ellipsis ref `e1052` was taken from a find made in this task, not reused from T3.)

| Region | Observed at open (`t4-01-list-source-dialog-initial-layout.png`) |
| --- | --- |
| Type | Combobox, **empty**, active, with an `Open` button (`e1232`). |
| IDO | Greyed; its ellipsis disabled. Enabled only after a Type is chosen. |
| Properties | Greyed (disabled) until IDO is chosen. |
| Columns to Display | Greyed (disabled) until Properties is set. |
| Method Name / Method Parameters | Greyed; not part of this task. |
| Buttons | `OK` (`e1234`), `Cancel` (`e1236`), `Help`. |

After Type and IDO were committed, the dialog enabled Filter etc., Rec Cap Override, and the Properties and Columns rows. Filter etc. and Rec Cap Override were **left blank** (not in the brief).

### Type: IDO Collection (Open list once, choose, Tab, verify)

| Step | Call | Observed |
| --- | --- | --- |
| Open the Type list | click `Open` `e1232`, **once** | The list offered `None`, `IDO Method`, `IDO Collection` (`e1248`), `Inline`, … |
| Choose | click `IDO Collection` (`e1248`), **once** | Combobox showed the choice before the commit. |
| Commit | Tab, **once** | Type reads `IDO Collection`. The IDO row enabled. |

### IDO: FX_HelloWorld01 (Open list once, choose, Tab, verify)

| Step | Call | Observed |
| --- | --- | --- |
| Open the IDO list | click the IDO `Open` `e1260`, **once** | A list of IDOs: `FormsAndObjects`, `FX_HelloWorld01` (`e1566`), `FX_Items`, `FX_Orders`, `FX_UMs`, `G6RItems`, … |
| Choose | click `FX_HelloWorld01` (`e1566`), **once** | Combobox showed the choice. |
| Commit | Tab, **once** | IDO reads `FX_HelloWorld01`. The Properties row became enabled; the Columns to Display control stayed greyed until Properties was set (corrected in T8 from the t4-02 frame). |

`t4-02-list-source-Type-IDO-Collection-and-IDO-FX_HelloWorld01-committed.png`: Type `IDO Collection` and IDO `FX_HelloWorld01` after Tab (shows both values).

### Properties: FX_Code, FX_Label, FX_Address (picker, three Add, OK once)

The `Edit Property Specifications` picker has an available list on the left (IDO properties, alphabetical, including `FX_Address`, `FX_Code`, `FX_Label`), `Add` and `Remove` in the middle, an empty selected list on the right, `Move Up` and `Move Down`, and OK / Cancel / Help (`t4-03-properties-picker-initial-layout-empty-right-list.png`).

| Step | Call | Observed |
| --- | --- | --- |
| Select `FX_Code` | click `e2038`, **once** | `FX_Code` highlighted in the left list. |
| Add | click `Add` `e2081`, **once** | `FX_Code` moved to the right list; the left list lost it. |
| Select `FX_Label` | click `e2100`, **once** | Highlighted. |
| Add | click `Add` `e2081`, **once** | Right list: `FX_Code`, `FX_Label`. |
| Select `FX_Address` | click `e2147`, **once** | Highlighted. |
| Add | click `Add` `e2081`, **once** | Right list: `FX_Code`, `FX_Label`, `FX_Address` (in that order). |
| Verify | find and `t4-04-properties-FX_Code-FX_Label-FX_Address-before-OK.png` | The order is verified in the right list before OK. |
| Properties OK | click `e2090`, **once** | The picker closed. The Properties field reads **`FX_Code,FX_Label,FX_Address`** (textbox, verified). |

No Tab was needed for the picker (the values were chosen by Add, not typed). The field commit was the picker OK.

### Columns to Display: FX_Code and FX_Label only (picker, OK once)

The `Select Columns to Display in List` picker lists the three properties by name (`FX_Code`, `FX_Label`, `FX_Address`); none was highlighted at open (`t4-05-columns-to-display-picker-initial-no-selection.png`).

| Step | Call | Observed |
| --- | --- | --- |
| Select `FX_Code` | click `e2241`, **once** | `FX_Code` selected. |
| Add `FX_Label` | Control-click `e2242`, **once** (modifier `Control`) | Visually both `FX_Code` and `FX_Label` were highlighted; `FX_Address` was not (`t4-06-…-before-OK.png`). The accessibility tree marked only `FX_Code` as `[selected]`, with `FX_Label` as `[active]` (focused). **This conflict was not resolved by another click** (a further click could toggle `FX_Label` off). |
| Picker OK | click `e2245`, **once** | The picker closed. |
| Result | find | Columns to Display reads **`1,2`**. This is the UI's position-based representation: position 1 = `FX_Code`, position 2 = `FX_Label`. Position 3 (`FX_Address`) is not included. **This confirms both selections and the exclusion of FX_Address.** |

### List Source dialog: values before its OK, and its OK

- `t4-07-list-source-dialog-all-values-before-OK.png`: Type `IDO Collection`; IDO `FX_HelloWorld01`; Properties `FX_Code,FX_Label,FX_Address` (the last word is clipped in the frame); Columns to Display `1,2`; Filter etc. and Rec Cap Override blank.
- List Source dialog OK (`e1234`), **once**. The dialog closed with no prompt.

### After the List Source OK (readback-free checks, no readback)

- Class List Source row, verbatim (accessibility `gridcell`): **`STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`**. The `STDOLE` prefix, the `DISPLAY(1,2)` positions and the `RECORDCAP(0)` token were **generated by the UI**; `RECORDCAP(0)` was not set by the worker (Rec Cap Override was left blank).
- Validators: `FX_CustomerID(%1,%2)` (unchanged).
- Validate Immediately: `True` (unchanged). Validate Immediately Prompt blank; Message On Status Bar `False` (unchanged).
- `t4-08-property-sheet-after-ListSource-OK-Validators-ValidateImmediately-kept.png`: the property sheet shows List Source `STDOLE FX_HelloWorl…` (clipped), Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, Message On Status Bar `False`.
- **Designer toolbar Save: `[disabled]`** (accessibility, read twice, the second after a 2-second wait). Undo in the Designer and the Undo in the Properties pane: Designer Undo `[disabled]`; Properties-pane Undo enabled. **This differs from T3**, where Save was enabled with the dialog open. The reason is **unresolved**. The brief says to record it, and it was not invoked (no Save in T4).
- Only the `Global Objects` dialog is open. No `New`, `Edit…`, `Select…` or alertdialog. The URL gained `&MGForm=FX_Orders` after the Properties OK; the Form stayed `FX_Orders` (heading), so identity was read from the heading.

### Stop state (end of T4)

- **Open:** only the `Global Objects` dialog at class `FX_CustomerID` (selected): List Source set; Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`.
- **Not confirmed:** the outer Global Objects dialog (no OK, no Cancel).
- **Designer:** FX_Orders selected; `ScopeType: User`; toolbar Save **disabled** (not invoked); no Designer close or reopen.
- **Not configured in T4:** Filter etc. (blank), Rec Cap Override (blank), Method Name (greyed), Validate Immediately Prompt (blank), Message On Status Bar (`False`).

### Clarification of the T3 screenshot filename (documentation only; not evidence of cancellation)

`t3-02-validators-plus-opened-New-name-prompt-cancelled.png` is **misnamed**. It was captured while the `New` prompt was open, before any choice. The prompt was **not** cancelled in T3: the T3 record shows the prompt's dropdown was used to choose `FX_CustomerID`, and its OK was used once. The word `cancelled` in the filename does not describe the image and is **not evidence** of any cancellation. Its content proves only that the prompt opened with an empty Name combobox.

### Screenshots (T4)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-088/t4-00-gate-inherited-FX_CustomerID-before-ListSource.png` | Global Objects; class `FX_CustomerID` selected; Validation rows (Validators `FX_CustomerID(%1,%2)`, Validate Immediately True); List Source blank. | The inherited T3 state before any T4 mutation. | The stored state (client view). |
| `evidence/EXP-088/t4-01-list-source-dialog-initial-layout.png` | `Edit List Source Specifications`: Type empty; IDO, Properties, Columns greyed; Method rows greyed; OK / Cancel / Help. | The initial layout. | Any value. |
| `evidence/EXP-088/t4-02-list-source-Type-IDO-Collection-and-IDO-FX_HelloWorld01-committed.png` | Type `IDO Collection`; IDO `FX_HelloWorld01`; Properties and Columns enabled. | Both values committed before the Properties step. | The stored definition. |
| `evidence/EXP-088/t4-03-properties-picker-initial-layout-empty-right-list.png` | `Edit Property Specifications`: available list (`_ItemId` … `UpdatedBy`); Add / Remove; empty right list; Move Up / Move Down; OK / Cancel / Help. | The picker layout before any Add. | The order of the additions. |
| `evidence/EXP-088/t4-04-properties-FX_Code-FX_Label-FX_Address-before-OK.png` | Right list `FX_Code`, `FX_Label`, `FX_Address` (highlighted FX_Address); Properties OK. | The three properties in the intended order before the picker OK. | The stored value (see t4-07 and t4-08). |
| `evidence/EXP-088/t4-05-columns-to-display-picker-initial-no-selection.png` | `Select Columns to Display in List`: `FX_Code`, `FX_Label`, `FX_Address`; none highlighted (FX_Code focus outline only). | The picker's starting state. | Any selection. |
| `evidence/EXP-088/t4-06-columns-to-display-FX_Code-FX_Label-selected-FX_Address-not-selected-before-OK.png` | `FX_Code` and `FX_Label` highlighted; `FX_Address` not. | The rendered selection before the picker OK. | The accessibility `[selected]` state (only FX_Code is marked; see the T4 section). |
| `evidence/EXP-088/t4-07-list-source-dialog-all-values-before-OK.png` | `Edit List Source Specifications`: IDO Collection; IDO `FX_HelloWorld01`; Properties `FX_Code,FX_Label,FX_Addres…` (clipped); Columns `1,2`; OK / Cancel / Help. | The values before the List Source OK. | The clipped Properties word (the full value is from the accessibility read `FX_Code,FX_Label,FX_Address`). |
| `evidence/EXP-088/t4-08-property-sheet-after-ListSource-OK-Validators-ValidateImmediately-kept.png` | Class property sheet: List Source `STDOLE FX_HelloWorl…` (clipped); Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; Message On Status Bar `False`; the toolbar Save is **greyed** (the frame shows it dim). | The property sheet after the List Source OK, and the greyed toolbar Save in the frame. | The full List Source value (clipped; the full text is from the accessibility read). |

Filenames and tool-written `evidence/playwright/` snapshots are not proof of state.

### Action audit (T4, exact; 53 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (depth 4) | FX_Orders; User; Global Objects open; Save enabled |
| 4 | `browser_find` gate rows | `FX_CustomerID`; Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source blank (`e1052`) |
| 5 | `browser_take_screenshot` `t4-00` | Gate state |
| 6 | `browser_click` `e1052` (List Source ellipsis, **once**) | `Edit List Source Specifications` opened |
| 7 | `browser_find` dialog and buttons | Dialog `e1175`; OK `e1234`; Cancel `e1236` |
| 8 | `browser_take_screenshot` `t4-01` | Initial layout |
| 9 | `browser_click` `e1232` (Type Open, **once**) | Type list opened |
| 10 | `browser_find` option (general) | No match |
| 11 | `browser_find` IDO Collection options | Option `IDO Collection` `e1248` |
| 12 | `browser_click` `e1248` (IDO Collection, **once**) | Type set |
| 13 | `browser_press_key` Tab (**once**) | Type committed |
| 14 | `browser_find` Type / IDO verify | Type `IDO Collection`; IDO row enabled |
| 15 | `browser_click` `e1260` (IDO Open, **once**) | IDO list opened |
| 16 | `browser_find` FX_ IDO options | `FX_HelloWorld01` `e1566` |
| 17 | `browser_click` `e1566` (FX_HelloWorld01, **once**) | IDO set |
| 18 | `browser_press_key` Tab (**once**) | IDO committed |
| 19 | `browser_find` IDO and Properties rows | IDO `FX_HelloWorld01`; Properties ellipsis `e1271` |
| 20 | `browser_take_screenshot` `t4-02` | Type and IDO |
| 21 | `browser_find` further rows | Properties and Columns rows enabled |
| 22 | `browser_click` `e1271` (Properties ellipsis, **once**) | `Edit Property Specifications` opened |
| 23 | `browser_find` picker options | Available list; Add `e2081` (disabled); OK `e2090` |
| 24 | `browser_take_screenshot` `t4-03` | Empty right list |
| 25 | `browser_click` `e2038` (FX_Code, **once**) | Highlighted |
| 26 | `browser_click` `e2081` (Add, **once**) | FX_Code to the right list |
| 27 | `browser_find` lists | Right list `FX_Code`; left list without it |
| 28 | `browser_click` `e2100` (FX_Label, **once**) | Highlighted |
| 29 | `browser_click` `e2081` (Add, **once**) | Right list `FX_Code`, `FX_Label` |
| 30 | `browser_find` lists | Right list verified |
| 31 | `browser_click` `e2147` (FX_Address, **once**) | Highlighted |
| 32 | `browser_click` `e2081` (Add, **once**) | Right list `FX_Code`, `FX_Label`, `FX_Address` |
| 33 | `browser_find` right list | Order verified |
| 34 | `browser_take_screenshot` `t4-04` | Before the picker OK |
| 35 | `browser_click` `e2090` (Properties OK, **once**) | Picker closed |
| 36 | `browser_find` Properties field | `FX_Code,FX_Label,FX_Address`; Columns ellipsis `e1296` enabled |
| 37 | `browser_click` `e1296` (Columns ellipsis, **once**) | `Select Columns to Display in List` opened |
| 38 | `browser_find` picker options | `FX_Code`, `FX_Label`, `FX_Address`; none `[selected]` |
| 39 | `browser_take_screenshot` `t4-05` | No selection |
| 40 | `browser_click` `e2241` (FX_Code, **once**) | FX_Code selected |
| 41 | `browser_click` `e2242` (FX_Label, **once**, modifier `Control`) | Visually both highlighted; accessibility marks only FX_Code `[selected]` |
| 42 | `browser_take_screenshot` `t4-06` | Rendered selection before OK |
| 43 | `browser_find` picker options | Same accessibility state as call 40/41 (read only) |
| 44 | `browser_snapshot` target `e2234` (picker) | Same accessibility state (read only) |
| 45 | `browser_click` `e2245` (Columns OK, **once**) | Picker closed; Columns reads `1,2` |
| 46 | `browser_find` Columns and Type | Columns `1,2`; Type `IDO Collection` |
| 47 | `browser_take_screenshot` `t4-07` | Values before the List Source OK |
| 48 | `browser_click` `e1234` (List Source OK, **once**) | Dialog closed; class List Source row set |
| 49 | `browser_find` post-OK | List Source row verbatim; Validators; Validate Immediately `True`; no dialog |
| 50 | `browser_wait_for` 2 s | Wait only |
| 51 | `browser_find` Save / Undo / dialog | Save `[disabled]`; only Global Objects open |
| 52 | `browser_take_screenshot` `t4-08` | Property sheet after OK |
| 53 | `browser_find` Name row and dialogs | Name `FX_CustomerID`; no subsidiary dialog |

Count summary (T4): tab lists 1; tab selects 1 (succeeded); snapshots 2 (calls 3 and 44); finds 19 (calls 4, 7, 10, 11, 14, 16, 19, 21, 23, 27, 30, 33, 36, 38, 43, 46, 49, 51, 53); screenshots 9 (`t4-00` … `t4-08`); ref clicks 17 (`e1052`, `e1232`, `e1248`, `e1260`, `e1566`, `e1271`, `e2038`, `e2081` ×3, `e2100`, `e2147`, `e2090`, `e1296`, `e2241`, `e2245`, `e1234`); Control-modified clicks 1 (`e2242`); Tab key presses 2; wait 1. Total **53** = 1 + 1 + 2 + 19 + 9 + 17 + 1 + 2 + 1.

Recovery and errors: browser errors / timeouts **0**; "Ref not found" **0**; fresh-snapshot recovery allowance used **0**; no retries of a mutation; no two browser actions in parallel. Call 10 returned no match for its generic `option "…"` pattern; call 11, with the option names, found the Type options (the cause of the first miss was not checked). Calls 43 and 44 were read-only re-reads of the picker state after the ambiguous Control-click, not repeated mutations.

### Mutation and lifecycle counts (T4, exact)

- Component classes created: **0** (T4). New (+) uses: **0**.
- Validators added or changed: **0**.
- List Source Type set: **1** (`IDO Collection`). List Source IDO set: **1** (`FX_HelloWorld01`).
- **List-source properties added: 3** (`FX_Code`, `FX_Label`, `FX_Address`, in that order).
- **Displayed columns selected: 2** (`FX_Code`, `FX_Label`; `FX_Address` not selected).
- Tab commits: **2** (Type; IDO). The picker values were chosen, not typed; no typed text in T4.
- Dialog OKs: **3** (Properties picker, Columns picker, List Source dialog). Outer Global Objects OK: **0**. Dialog Cancels: **0**.
- Contingency corrections: **0**. Strings or messages: **0** prompts; **0** answers; **0** created. Filter etc. and Rec Cap Override: untouched.
- Designer Saves: **0** (the toolbar Save was `[disabled]` after the List Source OK; no invocation). Designer close / reopen: **0 / 0**.
- Component, caption or layout changes: **0**. Other classes, validators, property classes or extensions changed: **0**.
- Runtime (tab 1) actions: **0**. Checkout actions: **0**. Unloads, FormSync, deployment, regeneration: **0**. Re-logins: **0** (session-expiry procedure not invoked).
- Browser JavaScript, console or network inspection by the worker: **0**.

### Cumulative browser action audit (T1 + T2 + T3 + T4)

| Item | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Browser calls | 37 | 40 | 47 | 53 | **177** |
| Component classes created | 0 | 1 | 0 | 0 | **1** |
| New (+) in Component Classes list | 0 | 1 | 0 | 0 | **1** |
| Validators added to class | 0 | 0 | 1 | 0 | **1** |
| Validator definitions created or changed | 0 | 0 | 0 | 0 | **0** |
| List-source properties added | 0 | 0 | 0 | 3 | **3** |
| Displayed columns selected | 0 | 0 | 0 | 2 | **2** |
| List Source Type / IDO set | 0 | 0 | 0 | 1 / 1 | **1 / 1** |
| Validator Parameters set | 0 | 0 | 1 | 0 | **1** |
| Validate Immediately set | 0 | 0 | 1 | 0 | **1** |
| Tab commits | 0 | 1 | 3 | 2 | **6** |
| Dialog OK clicks | 0 | 1 | 3 | 3 | **7** (T2 name; T3 picker, Parameters, Validators; T4 Properties, Columns, List Source) |
| Outer Global Objects OK | 0 | 0 | 0 | 0 | **0** |
| Dialog Cancel clicks | 2 | 0 | 0 | 0 | **2** (T1 Component Classes; Validators; no change in either) |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T4)

- `experiments/EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md` (edited in T4: status header and this section).
- `evidence/EXP-088/t4-00-gate-inherited-FX_CustomerID-before-ListSource.png`
- `evidence/EXP-088/t4-01-list-source-dialog-initial-layout.png`
- `evidence/EXP-088/t4-02-list-source-Type-IDO-Collection-and-IDO-FX_HelloWorld01-committed.png`
- `evidence/EXP-088/t4-03-properties-picker-initial-layout-empty-right-list.png`
- `evidence/EXP-088/t4-04-properties-FX_Code-FX_Label-FX_Address-before-OK.png`
- `evidence/EXP-088/t4-05-columns-to-display-picker-initial-no-selection.png`
- `evidence/EXP-088/t4-06-columns-to-display-FX_Code-FX_Label-selected-FX_Address-not-selected-before-OK.png`
- `evidence/EXP-088/t4-07-list-source-dialog-all-values-before-OK.png`
- `evidence/EXP-088/t4-08-property-sheet-after-ListSource-OK-Validators-ValidateImmediately-kept.png`

T4 total: **9** PNG files plus the record edit. Cumulative worker-requested repository files for EXP-088 (T1 + T2 + T3 + T4): **32** (the record once, 5 T1 PNGs, 8 T2 PNGs, 9 T3 PNGs, 9 T4 PNGs). Tool-written `evidence/playwright/` files are excluded. No git command was run.

### Deviations and limits (T4)

- **D1 (Columns Control-click):** the Control-click on `FX_Label` left the accessibility state with only `FX_Code` `[selected]` and `FX_Label` `[active]`, while the rendering highlighted both. The result `1,2` confirms both were selected. No further click was made to resolve the conflict.
- **D2 (Save state):** the toolbar Save was enabled after T3 and `[disabled]` after the T4 List Source OK, with the dialog still open. The cause is **unresolved**. No Save was invoked.
- **D3 (generated tokens):** `STDOLE`, `DISPLAY(1,2)` and `RECORDCAP(0)` in the List Source value were produced by the UI. The worker did not type them.
- **D4 (no Tab for picker values):** Properties and Columns to Display were set by picker Add and picker selection, not by typing; their commit is the picker OK. The brief's "Tab each field" applies to typed fields; Tab was used for Type and IDO.
- **D5 (URL):** the page URL gained `&MGForm=FX_Orders` after the Properties OK. Form identity was read from the heading and the footer.
- **D6 (clipped frames):** `t4-07` and `t4-08` clip the Properties and List Source text. The full values are from the accessibility reads.
- **D7 (T3 filename):** `t3-02` is misnamed `…cancelled.png`; see the clarification above.

### Knowledge state (T4 findings)

| Finding | State |
| --- | --- |
| The List Source ellipsis opens `Edit List Source Specifications` with Type first; IDO, Properties and Columns are greyed until their predecessors are set | **observed** (one run, T4) |
| Type list offers `IDO Collection`; IDO list offers `FX_HelloWorld01`; both committed with Tab | **observed** (one run, T4) |
| The Properties picker adds properties by Add in the chosen order; the right list keeps that order | **observed** (one run, T4) |
| The Columns picker's selection is shown as `1,2` (positions) after OK | **observed** (one run, T4) |
| Control-click on a second Columns item is reflected visually and in the `1,2` result, though the accessibility tree marks only the first item `[selected]` | **observed** (one run, T4; conflict noted) |
| The class List Source row reads `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` after the List Source OK | **observed** (one run, T4; client view; verbatim) |
| Validators `FX_CustomerID(%1,%2)` and Validate Immediately `True` were unchanged by T4 | **observed** (one run, T4) |
| The toolbar Save was `[disabled]` after the List Source OK (enabled after T3) | **observed** (one run, T4; cause unresolved) |
| Tutorial Section 9 List Source steps (Properties `ID, Name, Address`; Columns `ID, Name`) | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |

**Next permitted action (T5, after the coordinator's authorization):** keep the outer Global Objects dialog open at `FX_CustomerID`. Re-read the class property sheet read-only and check the Designer Save state first. Then, as the coordinator defines T5, confirm the outer Global Objects OK once, perform the single Designer Save only if enabled (or record it disabled), and read back. Re-read every control ref before use; the refs used in T4 (for example `e1052` for the List Source ellipsis) are stale after the T4 OK and must be re-found.

Classification for all T4 findings: **observed only, NOT replay_verified.**

---

## T5 — Pre-confirmation check; OUTER Global Objects OK once; first readback (Component Class); read-only List Source inspection (Cancel once); readback Global Objects Cancel once; NO Designer Save; NO close/reopen (cycle 4)

Task T5 (bounded instruction): confirm the inherited FX_CustomerID class values read-only (name, Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source exactly `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`); confirm the OUTER Global Objects dialog with OK once; record the response, prompts, and native Save/Undo state; open Edit > Component Class once; select FX_CustomerID; capture and read back its properties; inspect the List Source editor read-only (Cancel); close the readback with Cancel once. No Designer Save, no close or reopen, no contingency correction. Run `R-20261014-173235-Jbt8`, task_message_id `726ee767-42bf-4099-8594-4dab188adcb0`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`, cycle 4.

### Sources and reads (T5)

No new source reads. T5 relied on the T1–T4 reads and the T2–T4 records in this file.

### Starting state (verified read-only before the outer OK)

- Tab list (first browser call): tab 0 Designer (`mode=designer`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot (depth 4): FX_Orders selected (heading, tab `selected`); footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; the only dialog is `Global Objects` (outer, from T4).
- Fresh finds (refs from this task): Name row `FX_CustomerID`; Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source gridcell `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` (**exact match with the brief's expected value**); Validate Immediately Prompt blank; Message On Status Bar `False`. No subsidiary dialog, no alertdialog, no `New`.
- `t5-00-preconfirm-values-before-outer-OK.png`: the class property sheet, FX_CustomerID selected, List Source `STDOLE FX_HelloWorl…` (clipped), Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`. Toolbar Save greyed.

**Gate result: all values match the T4 record; proceed to the outer OK.**

### Outer Global Objects OK (once)

| Step | Call | Observed |
| --- | --- | --- |
| Outer OK | click the outer `OK` (`e1164`), **once** | The dialog closed. **No prompt, no alert, no string or message prompt, no alertdialog.** |
| Post-OK state (find) | `browser_find` for dialogs, Save, Undo, tab, scope | No dialog open. **Designer toolbar Save: ENABLED** (`button "Save"` without `[disabled]`; ref `e1170`). Regenerate Form enabled. Undo `[disabled]`. FX_Orders selected; `ScopeType: User`. |
| Screenshot | `t5-01-after-outer-OK-dialog-closed-Save-enabled.png` | Dialog closed over the Designer; the toolbar Save icon is dark (enabled); Undo greyed; footer `ScopeType: User`. |

**Native response of the outer OK:** no toast, no prompt, no error text observed. **Native Designer Save: enabled after the outer OK, not invoked.** Create-string/message prompts: **0 seen; answers 0.**

### Readback: Edit > Component Class (opened once)

| Step | Call | Observed |
| --- | --- | --- |
| Edit menu | click `e5`, **once** | Edit menu opened. |
| Component Class | click `e1200`, **once** | `Global Objects` (Component Classes) opened over the Designer. The list had scrolled away from FX_CustomerID. |
| Locate | mouse move (760,450) and wheel (0,2000) (view only) | The F rows rendered; `FX_CustomerID` at `e1675`, between `FrequencyVar` and `GetCharacterTypeColumns`. |
| Select | click `e1675`, **once** (view-state row selection; no property change) | Row `FX_CustomerID` `[active]`; the Properties pane shows its Design group. |

Readback values (accessibility, fresh refs; all verbatim):

| Property | Observed value |
| --- | --- |
| Name (Design) | `FX_CustomerID` |
| Validators (Validation) | `FX_CustomerID(%1,%2)` |
| Validate Immediately | `True` |
| Validate Immediately Prompt | blank (unchanged; meaning unresolved) |
| Message On Status Bar | `False` (unchanged) |
| List Source | `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` |

Screenshots: `t5-02-readback-FX_CustomerID-selected-properties.png` shows the Design group with Name `FX_CustomerID` and the Data Source group; the Validators, Validate Immediately and List Source rows are below the visible area in that frame, so they are **not** visible there (accessibility only). `t5-03-readback-after-ListSource-readonly-Cancel-sheet.png` shows, after the subordinate inspection, List Source `STDOLE FX_HelloWorl…` (clipped), Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, Message On Status Bar `False`, with the ellipsis tooltip `Open Edit Property Dialog`.

### Read-only List Source inspection (opened once; closed with its own Cancel)

Route: the List Source ellipsis (`e1935`, `Open Edit Property Dialog`), clicked **once**. Dialog `Edit List Source Specifications` (nested). Observed (accessibility; no screenshot of this editor was taken, so this is an accessibility-only confirmation):

| Field | Observed |
| --- | --- |
| Type | `IDO Collection` |
| IDO | `FX_HelloWorld01` |
| Properties | `FX_Code,FX_Label,FX_Address` |
| Filter etc. | blank |
| Rec Cap Override | `0` (**T4 had left it blank at its screenshot `t4-07`; the value is shown now**; consistent with the `RECORDCAP(0)` token in the List Source string) |
| Columns to Display | `1,2` |

Closed with the **subordinate** editor's Cancel (`e2103`), **once**. The List Source row was unchanged afterwards (verified by find). **No edits in the subordinate editor.**

### Readback Global Objects: Cancel (once)

The outer readback dialog was closed with its Cancel (`e1538`), **once**. Post-Cancel state (find and `t5-04-after-readback-Cancel-state-Save-enabled-no-dialog.png`): no dialog open; FX_Orders heading selected; `ScopeType: User`; **Designer toolbar Save enabled** (`e1170`); Regenerate Form enabled; Undo `[disabled]`. The Designer is **dirty**. The Designer was **not** saved.

### Stop state (end of T5)

- **Open:** no dialog. (The outer Global Objects dialog was closed with its Cancel after the readback.)
- **Designer:** FX_Orders open, `ScopeType: User`, **dirty** (Save enabled), not saved; Designer not closed or reopened.
- **Class:** `FX_CustomerID`, Name, Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source as above (client state after the outer OK). No Validator definition changed; no other class changed.
- **Not done in T5:** Designer Save; FX_Orders close/reopen; contingency correction (not needed: no discrepancy); runtime, checkout, unload, FormSync, deployment.

### Interpretation and limits (T5)

- The readback reads the **Designer's in-session state** after the outer OK. It does not show stored or database state. **No durability is claimed.** The dirty (Save enabled) state confirms the change is held by the Designer until Save.
- The Save became enabled **after the outer OK**. In T4 it was `[disabled]` after the List Source OK (with the outer dialog open); its cause remains **unresolved** and is noted, not explained.
- Rec Cap Override is `0` in the List Source editor; it was blank in T4's screenshot. The `RECORDCAP(0)` token was already present in the List Source string read immediately after the T4 List Source OK (T4 post-OK find), so the blank-to-`0` change is tied to that OK, not to a later step (correction recorded in T8). The cause is **not verified**. Recorded as an observation only.

### Screenshots (T5)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-088/t5-00-preconfirm-values-before-outer-OK.png` | Global Objects; FX_CustomerID selected; List Source `STDOLE FX_HelloWorl…` (clipped); Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; Save greyed. | The pre-confirmation values (partly clipped List Source; full value from accessibility). | The stored state. |
| `evidence/EXP-088/t5-01-after-outer-OK-dialog-closed-Save-enabled.png` | Dialog closed; FX_Orders in User scope; toolbar Save icon dark (enabled); Undo greyed. | The outer OK closed the dialog and Save became enabled. | The native response beyond the absence of a prompt. |
| `evidence/EXP-088/t5-02-readback-FX_CustomerID-selected-properties.png` | Global Objects (readback); FX_CustomerID highlighted; Design group Name `FX_CustomerID`; Data Source group expanded (Required … Data Type). | The class is selected and named FX_CustomerID in the readback. | The Validators, Validate Immediately and List Source rows (below the frame; accessibility only). |
| `evidence/EXP-088/t5-03-readback-after-ListSource-readonly-Cancel-sheet.png` | Readback after the List Source inspection and its Cancel: List Source `STDOLE FX_HelloWorl…`, Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, Message On Status Bar `False`. | The three values visible in one frame after the subordinate Cancel. | The full List Source string (clipped; accessibility gives it). |
| `evidence/EXP-088/t5-04-after-readback-Cancel-state-Save-enabled-no-dialog.png` | Post-Cancel frame; FX_Orders heading and tab; footer User scope; no dialog. | Clean close of the readback with the Designer dirty. | The toolbar Save state, which is taken from accessibility here (the frame's toolbar is dim at this size). |

Filenames and tool-written `evidence/playwright/` snapshots are not proof of state. The List Source editor was not screenshotted; its values are an accessibility-only confirmation.

### Action audit (T5, exact; 29 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (depth 4) | FX_Orders; User; Global Objects open; Save disabled at that point |
| 4 | `browser_find` pre-confirm values | Name, Validators, Validate Immediately, List Source verbatim; no subsidiary dialog |
| 5 | `browser_take_screenshot` `t5-00` | Pre-confirm values |
| 6 | `Read` `t5-00` (not a browser call) | Framing confirmed |
| 7 | `browser_click` `e1164` (outer OK, **once**) | Dialog closed; no prompt |
| 8 | `browser_find` post-OK | No dialog; Save enabled (`e1170`); Regenerate enabled; Undo disabled; User |
| 9 | `browser_take_screenshot` `t5-01` | Dialog closed; Save icon dark |
| 10 | `Read` `t5-01` (not a browser call) | Framing confirmed |
| 11 | `browser_find` Edit ref | `e5` |
| 12 | `browser_click` `e5` (Edit) | Edit menu opened |
| 13 | `browser_find` "Component Class" | Menu item `e1200` |
| 14 | `browser_click` `e1200` (Component Class, **once**) | Global Objects (Component Classes) opened |
| 15 | `browser_find` dialog, OK, Cancel | Outer OK `e1536`; Cancel `e1538` |
| 16 | `browser_find` gridcell FX_CustomerID | No match (list scrolled) |
| 17 | `browser_mouse_move_xy` (760,450) | Pointer over list (view) |
| 18 | `browser_mouse_wheel` (0,2000) | List scrolled to F rows (view) |
| 19 | `browser_find` FrequencyVar / FX_CustomerID | `FX_CustomerID` `e1675` |
| 20 | `browser_click` `e1675` (FX_CustomerID row, **once**, view selection) | Row active; Design group shown |
| 21 | `browser_find` readback values | Name; Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source verbatim |
| 22 | `browser_take_screenshot` `t5-02` | Readback Design / Data Source |
| 23 | `browser_click` `e1935` (List Source ellipsis, **once**, read-only) | `Edit List Source Specifications` opened |
| 24 | `browser_find` editor fields | Type `IDO Collection`; IDO `FX_HelloWorld01`; Properties `FX_Code,FX_Label,FX_Address`; Columns `1,2`; Rec Cap `0` |
| 25 | `browser_click` `e2103` (subordinate **Cancel**, **once**) | Editor closed; no change |
| 26 | `browser_find` post-subordinate | List Source row unchanged; no dialog except outer |
| 27 | `browser_take_screenshot` `t5-03` | Values after subordinate Cancel |
| 28 | `browser_find` Cancel ref | Outer Cancel `e1538` |
| 29 | `browser_click` `e1538` (outer readback **Cancel**, **once**) | Dialog closed |
| 30 | `browser_find` post-Cancel | No dialog; Save enabled (`e1170`); User |
| 31 | `browser_take_screenshot` `t5-04` | Post-Cancel frame |

(Browser calls counted: 29 — tab list 1, tab select 1, snapshot 1, finds 12, screenshots 5, ref clicks 7, mouse move 1, mouse wheel 1. The two `Read` entries are file reads, not browser calls.)

Recovery and errors: browser errors/timeouts **0**; "Ref not found" **0**; fresh-snapshot recovery allowance used **0**; no retries of any mutation; no two browser actions in parallel. Call 16 returned no match because the list was scrolled away from FX_CustomerID; it was not an error and was followed by a view scroll, not a retry of a mutation.

### Dialog and mutation counts (T5, exact)

- **Outer Global Objects OK: 1** (dialog closed, no prompt). **Outer Global Objects Cancel: 1** (readback close). **Subordinate List Source editor Cancel: 1** (read-only inspection). Subordinate OK: 0.
- Native Designer Save invocations: **0** (enabled, not invoked). Designer close / reopen: **0 / 0**.
- Undo: not invoked. Tab commits: **0**. Typed text: **0**. Field entries: **0**.
- Strings or messages: **0** prompts seen; answers **0**; created **0**.
- New (+) uses: **0**. Component classes created or changed: **0** (row selection is view state only). Validators added, changed or deleted: **0**. Other classes, property classes, extensions, IDOs, SQL or runtime data changed: **0**.
- Components, captions or layout changed: **0**. Runtime actions: **0**. Checkout actions: **0**. Unloads, FormSync, deployment, regeneration: **0**. Re-logins: **0** (session-expiry procedure not invoked).
- Contingency corrections: **0** (no readback value differed from the T4 record).
- Browser JavaScript, console or network inspection by the worker: **0**.

### Cumulative dialog totals (T1–T5)

| Item | Total |
| --- | --- |
| Dialog OK clicks | **8**: T2 name prompt (1); T3 picker, Parameters, Validators editor (3); T4 Properties picker, Columns picker, List Source dialog (3); T5 outer Global Objects (1) |
| Outer Global Objects OK | **1** (T5) |
| Dialog Cancel clicks | **4**: T1 Component Classes dialog and Validators dialog (2, both read-only, no change); T5 subordinate List Source editor (1) and outer readback Global Objects (1) |
| Tab commits | **6** (T2: name, 1; T3: picker combobox, Parameters text, Validate Immediately, 3; T4: Type, IDO, 2) |

### Cumulative browser action audit (T1–T5)

| Item | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 37 | 40 | 47 | 53 | 29 | **206** |
| Component classes created | 0 | 1 | 0 | 0 | 0 | **1** |
| New (+) in Component Classes list | 0 | 1 | 0 | 0 | 0 | **1** |
| Validators added to class | 0 | 0 | 1 | 0 | 0 | **1** |
| Validator definitions created or changed | 0 | 0 | 0 | 0 | 0 | **0** |
| List-source properties added | 0 | 0 | 0 | 3 | 0 | **3** |
| Displayed columns selected | 0 | 0 | 0 | 2 | 0 | **2** |
| Validator Parameters set | 0 | 0 | 1 | 0 | 0 | **1** |
| Validate Immediately set | 0 | 0 | 1 | 0 | 0 | **1** |
| List Source Type / IDO set | 0 | 0 | 0 | 1 / 1 | 0 | **1 / 1** |
| Tab commits | 0 | 1 | 3 | 2 | 0 | **6** |
| Dialog OK clicks | 0 | 1 | 3 | 3 | 1 | **8** |
| Outer Global Objects OK | 0 | 0 | 0 | 0 | 1 | **1** |
| Dialog Cancel clicks | 2 | 0 | 0 | 0 | 2 | **4** |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | 0 | 0 | **0** (none invoked; Save enabled after the T5 outer OK) |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T5)

- `experiments/EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md` (edited in T5: status header and this section).
- `evidence/EXP-088/t5-00-preconfirm-values-before-outer-OK.png`
- `evidence/EXP-088/t5-01-after-outer-OK-dialog-closed-Save-enabled.png`
- `evidence/EXP-088/t5-02-readback-FX_CustomerID-selected-properties.png`
- `evidence/EXP-088/t5-03-readback-after-ListSource-readonly-Cancel-sheet.png`
- `evidence/EXP-088/t5-04-after-readback-Cancel-state-Save-enabled-no-dialog.png`

T5 total: **5** PNG files plus the record edit. Cumulative worker-requested repository files for EXP-088 (T1–T5): **37** (the record once, plus 36 PNG: 5 T1, 8 T2, 9 T3, 9 T4, 5 T5). Tool-written `evidence/playwright/` files are excluded. No git command was run.

### Deviations and limits (T5)

- **D1 (no Save; Save enabled):** the outer OK made the toolbar Save enabled. As the brief directs, it was not invoked. T6 or the coordinator must decide whether the one permitted Save is taken next.
- **D2 (readback is in-session):** the readback reads the Designer's state after the outer OK; it is not persisted. No durability is claimed.
- **D3 (T5 readback frame):** `t5-02` does not show the Validators, Validate Immediately or List Source rows (they are below the frame). Those values are from accessibility; `t5-03` shows three of them in one frame.
- **D4 (List Source editor):** inspected read-only by accessibility only; not screenshotted. Its Cancel was used once.
- **D5 (Rec Cap Override `0`):** shown in the List Source editor, while T4's screenshot showed it blank. The change is observed, not explained.
- **D6 (Save state changes):** Save was enabled after T3, disabled after T4's List Source OK (outer dialog open), and enabled again after T5's outer OK. The causes are not established; the state is recorded as observed.

### Knowledge state (T5 findings)

| Finding | State |
| --- | --- |
| The outer Global Objects OK closes the dialog with no prompt, and the Designer toolbar Save becomes enabled | **observed** (one run, T5) |
| Undo in the Designer stays disabled after the outer OK | **observed** (one run, T5) |
| The class readback (in-session) shows Name `FX_CustomerID`, Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` | **observed** (one run, T5; in-session state, not persisted) |
| The List Source editor shows Type `IDO Collection`, IDO `FX_HelloWorld01`, Properties `FX_Code,FX_Label,FX_Address`, Columns `1,2`, Rec Cap Override `0` | **observed** (one run, T5; accessibility only) |
| Rec Cap Override changed from blank (T4 screenshot) to `0` before the readback; cause not established | **observed** (one run, T5; unresolved) |
| Save is enabled after the readback Cancel (Designer dirty) | **observed** (one run, T5) |
| Stored or database persistence of the class | **unresolved** (not checked; Save not invoked) |
| Tutorial Section 9 steps as a whole | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |

**Next permitted action (T6, after the coordinator's authorization):** the coordinator decides on the one permitted Designer Save of FX_Orders, then the Form-tab close and recent-forms reopen, and the reopened readback. T6 must start with a fresh snapshot and check whether the Designer is still dirty before any action.

Classification for all T5 findings: **observed only, NOT replay_verified.**

---

## T6 — ONE native Designer Save of FX_Orders; native response transcribed; post-Save state (cycle 5)

Task T6 (bounded instruction): one native toolbar Save only if enabled; record the response verbatim; no second Save; no readback of Edit > Component Class; no close or reopen of FX_Orders; no other mutation. Run `R-20261014-173235-Jbt8`, task_message_id `2d297e90-e4ac-4913-a817-2490d7e7348d`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`, cycle 5.

### Sources and reads (T6)

No new source reads. T6 relied on the T1–T5 records in this file.

### Starting state (verified read-only before the Save)

- Tab list (first browser call): tab 0 Designer (`mode=designer`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot (depth 4): FX_Orders selected (tab `selected`, heading `FX_Orders`); footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save **enabled** (`button "Save"` without `[disabled]`, ref `e16`); Regenerate Form enabled; Undo and Redo `[disabled]`; **no dialog**, no alertdialog, no toast, no Session Expired or sign-in text.
- `t6-00-pre-Save-state-Save-enabled-no-dialog.png`: FX_Orders heading; Properties Name `FX_Orders`; toolbar Save icon dark (enabled); Undo greyed; footer `ScopeType: User`; no dialog.

**Gate result: Save enabled, User scope, no dialog. Proceed with the single Save.**

### The single native Save (invoked once)

| Step | Call | Observed |
| --- | --- | --- |
| Native toolbar Save | click the toolbar Save (`e16`, fresh ref from the pre-Save find), **once** | The click completed. No error. |

### Native response (verbatim, read immediately after the click)

- Toast (top right; `t6-01-after-single-Save-immediate-response.png`): title **`Save`**; text **`Global object(s) were saved.`**; a `Close` control (`e625`). The toast was **not** dismissed by the worker.
- A tooltip `Save` also appeared on the toolbar (hover from the click).
- No alert, no alertdialog, no error text, no prompt.
- Toolbar **after** the click (find): Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`.

### Post-Save state (read-only; after a 6-second wait)

- The toast cleared on its own (find returned no `Global object` match after the wait; `t6-02-final-state-after-Save-toast-cleared-clean.png`).
- Toolbar: Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`. **The Designer is clean.**
- FX_Orders: selected (heading and tab); footer `ScopeType: User`; no dialog, no alertdialog.
- Form remains open. No close, no reopen, no Edit > Component Class readback in T6.

**Interpretation:** the toast and the disabled Save show that the Designer accepted and cleared the save of the User-scoped global objects. This is a UI acknowledgement of the Designer's save. It is **not** independent proof of database durability, server persistence, or what is stored; none is claimed.

### Stop state (end of T6)

- **Open:** no dialog or prompt. FX_Orders is open (not closed or reopened).
- **Designer:** clean (Save and Undo disabled), `ScopeType: User`.
- **Class:** `FX_CustomerID` as in T5 (Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`); no value changed in T6.
- **Still outstanding for a later task:** the Form-tab close, the recent-forms reopen (AC-4), and the reopened readback. These are **not** performed in T6 per the bounded instruction.

### Screenshots (T6)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-088/t6-00-pre-Save-state-Save-enabled-no-dialog.png` | FX_Orders; Save icon dark (enabled); Undo greyed; footer User; no dialog. | The state immediately before the one Save. | Anything stored. |
| `evidence/EXP-088/t6-01-after-single-Save-immediate-response.png` | Toast top right: `Save` / `Global object(s) were saved.`; toolbar Save icon greyed; tooltip `Save`; FX_Orders; User. | The native response text and the disabled Save immediately after the click. | Database durability; the stored definition. |
| `evidence/EXP-088/t6-02-final-state-after-Save-toast-cleared-clean.png` | No toast; Save and Undo greyed; FX_Orders; User; no dialog. | The clean final state after the toast cleared. | Persistence beyond the Designer's acknowledgement. |

Filenames and tool-written `evidence/playwright/` snapshots are not proof of state.

### Action audit (T6, exact; 11 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (depth 4) | FX_Orders; User; Save enabled; Undo disabled; no dialog |
| 4 | `browser_find` Save / Undo / dialog / scope | Save enabled (`e16`); Undo disabled; no dialog |
| 5 | `browser_take_screenshot` `t6-00` | Pre-Save state |
| 6 | `browser_click` `e16` (native Save, **once**) | Toast `Save` / `Global object(s) were saved.` |
| 7 | `browser_find` post-click response | Toast present; Save `[disabled]`; Undo `[disabled]`; `Close` `e625` |
| 8 | `browser_take_screenshot` `t6-01` | Toast and disabled Save |
| 9 | `browser_wait_for` 6 s | Wait only (toast clears by itself) |
| 10 | `browser_find` final state | No toast; Save `[disabled]`; Undo `[disabled]`; no dialog; User |
| 11 | `browser_take_screenshot` `t6-02` | Clean final state |

Count summary (T6): tab lists 1; tab selects 1 (succeeded); snapshots 1; finds 4; screenshots 3; Save clicks 1; wait 1. Total **11** = 1 + 1 + 1 + 3 + 3 + 1 + 1. (Reading the screenshot files with `Read` is not a browser call.)

Recovery and errors: browser errors / timeouts **0**; "Ref not found" **0**; fresh-snapshot recovery allowance used **0**; no retry of the Save; no two browser actions in parallel.

### T6 counts (exact)

- **Native Designer Save invocations: 1** (T6). Cumulative Designer Saves: **1**. No retry, no second invocation, no uncertain Save.
- Save response: toast `Save` / `Global object(s) were saved.` (observed). No error, no prompt.
- Dialog OK clicks: **0** (T6). Dialog Cancel clicks: **0** (T6).
- Strings or messages: **0** prompts; answers **0**; created **0**.
- Designer close / reopen: **0 / 0**. Component, validator or class changes: **0**. Edit > Component Class readback in T6: **0**.
- Runtime actions: **0**. Checkout actions: **0**. Unloads, FormSync, deployment, regeneration: **0**. Re-logins: **0** (session-expiry procedure not invoked).
- Browser JavaScript, console or network inspection by the worker: **0**.

### Cumulative dialog totals (T1–T6)

| Item | Total |
| --- | --- |
| Dialog OK clicks | **8** (unchanged in T6: T2 name prompt 1; T3 picker, Parameters, Validators editor 3; T4 Properties picker, Columns picker, List Source dialog 3; T5 outer Global Objects 1) |
| Outer Global Objects OK | **1** (T5) |
| Dialog Cancel clicks | **4** (T1 Component Classes and Validators, 2; T5 subordinate List Source editor 1 and outer readback Global Objects 1) |
| Tab commits | **6** (unchanged in T6) |

### Cumulative browser action audit (T1–T6)

| Item | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 37 | 40 | 47 | 53 | 29 | 11 | **217** |
| Component classes created | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| New (+) in Component Classes list | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Validators added to class | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Validator definitions created or changed | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| List-source properties added | 0 | 0 | 0 | 3 | 0 | 0 | **3** |
| Displayed columns selected | 0 | 0 | 0 | 2 | 0 | 0 | **2** |
| Validator Parameters set | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Validate Immediately set | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| List Source Type / IDO set | 0 | 0 | 0 | 1 / 1 | 0 | 0 | **1 / 1** |
| Tab commits | 0 | 1 | 3 | 2 | 0 | 0 | **6** |
| Dialog OK clicks | 0 | 1 | 3 | 3 | 1 | 0 | **8** |
| Outer Global Objects OK | 0 | 0 | 0 | 0 | 1 | 0 | **1** |
| Dialog Cancel clicks | 2 | 0 | 0 | 0 | 2 | 0 | **4** |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer Saves (native) | 0 | 0 | 0 | 0 | 0 | 1 | **1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T6)

- `experiments/EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md` (edited in T6: status header and this section).
- `evidence/EXP-088/t6-00-pre-Save-state-Save-enabled-no-dialog.png`
- `evidence/EXP-088/t6-01-after-single-Save-immediate-response.png`
- `evidence/EXP-088/t6-02-final-state-after-Save-toast-cleared-clean.png`

T6 total: **3** PNG files plus the record edit. Cumulative worker-requested repository files for EXP-088 (T1–T6): **40** (the record once, plus 39 PNG: 5 T1, 8 T2, 9 T3, 9 T4, 5 T5, 3 T6). Tool-written `evidence/playwright/` files are excluded. No git command was run.

### Deviations and limits (T6)

- **D1 (close/reopen not done):** the T6 bounded instruction does not include the Form close and reopen, so AC-4 (clean close, reopen, reopened readback) remains unrun. It is the next step for a later task.
- **D2 (toast not dismissed):** the Save toast was left to clear itself, as EXP-087 observed; its `Close` control was not used.
- **D3 (pre-Save screenshot):** `t6-00` shows the Save icon as enabled from the icon's darkness; the enabled state was confirmed by accessibility (`button "Save"` without `[disabled]`).
- **D4 (no readback after Save):** the class was not re-read after the Save (the bounded T6 instruction excluded the Component Class readback). Post-Save verification of the class values is therefore not in T6.

### Knowledge state (T6 findings)

| Finding | State |
| --- | --- |
| The toolbar Save of the dirty FX_Orders Designer, invoked once, produced the toast `Save` / `Global object(s) were saved.` | **observed** (one run, T6; native UI acknowledgement) |
| The toolbar Save and Undo became disabled after the Save, and the Designer is clean | **observed** (one run, T6; accessibility and screenshot) |
| The toast cleared on its own after about six seconds | **observed** (one run, T6) |
| The Save persisted the FX_CustomerID class to the database | **unresolved** (not checked; a toast is not a database read; no durability is claimed) |
| Close and reopen reproduces the class values (AC-4) | **unresolved** (not run in T6; for a later task) |
| Tutorial Section 9 as a whole | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |

**Next permitted action (the coordinator decides):** the Form-tab close of the clean FX_Orders, the recent-forms reopen, and the reopened readback of FX_CustomerID (AC-4). T7 must start with a fresh snapshot and confirm FX_Orders is clean before any close.

Classification for all T6 findings: **observed only, NOT replay_verified.**

---

## T7 — ONE clean close and ONE reopen of FX_Orders (Form-tab close; Form menu recent forms); ONE reopened readback of FX_CustomerID; List Source editor read-only (Cancel once); readback dialog Cancel once; NO Save (cycle 6)

Task T7 (bounded instruction): confirm the clean FX_Orders Designer (User, Save and Undo disabled, no dialog); close it once with its Form-tab close control; take the post-close state; reopen it once through the Form menu recent-forms entry; capture the menu before choosing; confirm identity, User scope and a clean state; open Edit > Component Class once; select FX_CustomerID; record the Name, Validators, Validate Immediately and List Source values; inspect the List Source editor read-only if needed and close it with Cancel; close the readback dialog with Cancel once; confirm final state. No Save, no class or validator change, no runtime, checkout or cache action. Run `R-20261014-173235-Jbt8`, task_message_id `5d78c313-6624-438d-bae4-736ab0a7eaf4`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`, cycle 6.

### Sources and reads (T7)

No new source reads. T7 relied on the T1–T6 records in this file.

### Starting state (verified read-only before any close)

- Tab list (first browser call): tab 0 Designer (`mode=designer`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot (depth 4): tab `FX_Orders` selected (heading `FX_Orders`); footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; no dialog, no alertdialog, no toast, no Session Expired or sign-in text.
- Targeted find: the same state; no dialog; no `Global object` toast.
- `t7-00-pre-close-clean-FX_Orders-User-no-dialog.png`: FX_Orders heading and tab; Properties Name `FX_Orders`; Save and Undo greyed; footer `ScopeType: User`; no dialog.

**Gate result: clean, User scope, FX_Orders identity confirmed, no dialog. Proceed to the single close.**

### Close (Form-tab close control, once)

| Step | Call | Observed |
| --- | --- | --- |
| Form-tab close | click the `closable FX_Orders` control (`e247`), **once** | The FX_Orders tab disappeared. **No save prompt, no discard prompt, no alertdialog, no toast.** |
| Immediate post-close (find and `t7-01-immediate-post-close-state.png`) | find for heading, tabs, dialogs, Save, prompts | No FX_Orders heading; the canvas is blank; the footer still reads `ScopeType: User`; no dialog. Save and Undo greyed. |

**Post-close: the Form closed cleanly with no unsaved-changes prompt.** The Form was clean before the close.

### Reopen (Form menu recent-forms entry, once)

| Step | Call | Observed |
| --- | --- | --- |
| Form menu | click the `Form` button (`e3`), **once** | The Form menu opened. Its recent-forms entries listed `FX_Orders` (`e619`), `IDO Properties`, `IDOs`, `FX_HelloWorld01`, `Sql Tables`, `IDO Projects`, `Property Classes`, `FX_Items`, `FX_UMs`, `Export/Import Strings`. |
| Menu captured before choosing | `t7-02-form-menu-recent-forms-before-choosing-FX_Orders.png` | Shows the recent-forms list with `FX_Orders` present. |
| Choose FX_Orders | click the `FX_Orders` menu item (`e619`), **once** | The page URL gained `&MGForm=FX_Orders`; the Form reopened. |

### Reopened Form identity and clean state (verified before the readback)

| Item | Observed |
| --- | --- |
| Form identity | Tab `FX_Orders` selected (`selected`); heading `FX_Orders`; Properties Name `FX_Orders`; Version `User version for user …`; Device Type `Default`; Form Type `Normal`; Is Master `True`. |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator> ]`. |
| Clean state | Toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`. |
| Prompts | No dialog, no alertdialog, no toast, no discard prompt, no Session Expired text, no sign-in. |
| Screenshot | `t7-03-reopened-FX_Orders-after-recent-forms-clean-state.png` (framing checked): the reopened FX_Orders canvas and its Form properties; footer `ScopeType: User`; Save greyed. |

### Reopened readback: Edit > Component Class (opened once)

| Step | Call | Observed |
| --- | --- | --- |
| Edit menu | click `e5`, **once** | Edit menu opened. |
| Component Class | click `e993`, **once** | `Global Objects` (Component Classes) opened. |
| Locate | mouse move (760,450) and wheel (0,2000) (view only) | The F rows rendered; `FX_CustomerID` at `e1468`, between `FrequencyVar` and `GetCharacterTypeColumns`. |
| Select | click `e1468`, **once** (view-state row selection) | Row `FX_CustomerID` `[active]`; the Properties pane shows its Design group. |

Reopened values (accessibility, fresh refs; verbatim):

| Property | Reopened value | Expected (T5) | Match |
| --- | --- | --- | --- |
| Name (Design) | `FX_CustomerID` | `FX_CustomerID` | yes |
| Validators (Validation) | `FX_CustomerID(%1,%2)` | `FX_CustomerID(%1,%2)` | yes |
| Validate Immediately | `True` | `True` | yes |
| List Source | `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` | the T4/T5 string | yes (exact) |
| Validate Immediately Prompt | blank | blank | yes (unchanged; meaning unresolved) |
| Message On Status Bar | `False` | `False` | yes (unchanged) |

Screenshot: `t7-04-reopened-readback-FX_CustomerID-selected-properties.png` (framing checked): Name `FX_CustomerID` in the Design group; FX_CustomerID highlighted in the list; Data Source group expanded. The Validators, Validate Immediately and List Source rows are **below** the frame; those values are from accessibility only.

### Read-only List Source inspection (opened once; closed with its own Cancel)

Route: the List Source ellipsis (`e1728`, `Open Edit Property Dialog`), clicked **once**. Dialog `Edit List Source Specifications` (nested). Observed (accessibility; `t7-05-reopened-ListSource-editor-readonly-before-Cancel.png` framing checked: the editor with Type `IDO Collection`, IDO `FX_HelloWorld01`, Properties `FX_Code,FX_Label,FX_Address`, Columns to Display `1,2`, Rec Cap Override `0`, Filter etc. blank):

| Field | Observed |
| --- | --- |
| Type | `IDO Collection` |
| IDO | `FX_HelloWorld01` |
| Properties | `FX_Code,FX_Label,FX_Address` (**fetched** properties) |
| Columns to Display | `1,2` (**displayed** columns: positions 1 = `FX_Code`, 2 = `FX_Label`; position 3 = `FX_Address` is **not** displayed) |
| Rec Cap Override | `0` |
| Filter etc. | blank |

Closed with the **subordinate** editor's Cancel (`e1896`), **once**. The List Source row was unchanged afterwards (find: `STDOLE …` unchanged). No edits in the editor.

### Readback dialog: Cancel (once)

The outer readback dialog was closed with its Cancel (`e1331`), **once**. Post-Cancel state (find and `t7-06-final-state-after-readback-Cancel-clean-FX_Orders-User.png`): no dialog; FX_Orders heading and tab selected; `ScopeType: User`; **toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`**. The Designer is **clean**.

### Stop state (end of T7)

- **Open:** no dialog or prompt. FX_Orders is open again (reopened through recent forms).
- **Designer:** clean (Save and Undo disabled), `ScopeType: User`.
- **Class:** `FX_CustomerID` as read back: Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`. No value changed in T7. No correction contingency was needed (no value blank or wrong).

### Interpretation (AC-4 and the persistence boundary)

- **AC-4 (observed):** the clean FX_Orders Form was closed once and reopened once; the reopened readback matches the T5 readback on every visible and accessible value; the Designer stayed clean; no component changed; no validator or other class changed.
- **Weak persistence boundary:** the close and recent-forms reopen is an ordinary close-only boundary. It shows that the Designer re-presents the class values after the Form was closed and reopened in the same browser session. It is **NOT** independent database durability, is **NOT** a server-side persistence proof, and is **NOT** replay verification. The reopened values are client-side Designer state reloaded through the Form menu.
- **The Save (T6)** produced the toast `Global object(s) were saved.` and cleared the dirty state. The reopen results are consistent with that Save but do not, on their own, prove the stored definition.
- **Rec Cap Override `0`** now reads `0` after the reopen (it was blank in T4's screenshot and first appeared as `0` in T5). Observed; cause still unresolved.

### Screenshots (T7)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-088/t7-00-pre-close-clean-FX_Orders-User-no-dialog.png` | FX_Orders; Save and Undo greyed; User; no dialog. | The clean pre-close state. | Stored state. |
| `evidence/EXP-088/t7-01-immediate-post-close-state.png` | Blank canvas after the Form-tab close; Save greyed; footer `ScopeType: User`; no prompt. | The Form closed without a prompt. | Anything about the stored definition. |
| `evidence/EXP-088/t7-02-form-menu-recent-forms-before-choosing-FX_Orders.png` | Form menu open with the recent-forms list including `FX_Orders`. | The entry used to reopen was present before the choice. | The reopened Form (see t7-03). |
| `evidence/EXP-088/t7-03-reopened-FX_Orders-after-recent-forms-clean-state.png` | Reopened FX_Orders canvas and Form properties; Save greyed; footer User. | The reopen and the clean state. | The class values. |
| `evidence/EXP-088/t7-04-reopened-readback-FX_CustomerID-selected-properties.png` | Global Objects readback; FX_CustomerID highlighted; Name `FX_CustomerID`; Data Source expanded. | The reopened class is selected and named FX_CustomerID. | Validators, Validate Immediately and List Source (below the frame; accessibility only). |
| `evidence/EXP-088/t7-05-reopened-ListSource-editor-readonly-before-Cancel.png` | List Source editor: IDO Collection; FX_HelloWorld01; Properties `FX_Code,FX_Label,FX_Address`; Columns `1,2`; Rec Cap `0`. | The reopened List Source fields (read only). | Any stored state. |
| `evidence/EXP-088/t7-06-final-state-after-readback-Cancel-clean-FX_Orders-User.png` | Post-Cancel: FX_Orders; User; no dialog; Save greyed. | The final clean state. | Stored state. |

Filenames and tool-written `evidence/playwright/` snapshots are not proof of state.

### Action audit (T7, exact; 34 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (depth 4) | FX_Orders; User; Save and Undo disabled; no dialog |
| 4 | `browser_find` Save / Undo / dialog / scope | Clean; no dialog |
| 5 | `browser_take_screenshot` `t7-00` | Pre-close clean state |
| 6 | `browser_click` `e247` (Form-tab close, **once**) | FX_Orders tab closed; no prompt |
| 7 | `browser_find` post-close | No FX_Orders heading; no dialog; User |
| 8 | `browser_take_screenshot` `t7-01` | Blank canvas; no prompt |
| 9 | `browser_find` Form button | `e3` |
| 10 | `browser_click` `e3` (Form menu, **once**) | Form menu opened |
| 11 | `browser_find` menu items | Recent entry `FX_Orders` `e619` |
| 12 | `browser_take_screenshot` `t7-02` | Recent-forms list before the choice |
| 13 | `browser_click` `e619` (FX_Orders recent entry, **once**) | FX_Orders reopened (URL gained `MGForm=FX_Orders`) |
| 14 | `browser_find` reopened tab, scope, Save, Undo, dialog | Selected; User; Save and Undo disabled; no dialog |
| 15 | `browser_take_screenshot` `t7-03` | Reopened clean state |
| 16 | `browser_find` Edit ref | `e5` |
| 17 | `browser_click` `e5` (Edit, **once**) | Edit menu opened |
| 18 | `browser_find` "Component Class" | Menu item `e993` |
| 19 | `browser_click` `e993` (Component Class, **once**) | Global Objects (Component Classes) opened |
| 20 | `browser_find` dialog state | Dialog present; no subsidiary dialog |
| 21 | `browser_mouse_move_xy` (760,450) | Pointer over the list (view) |
| 22 | `browser_mouse_wheel` (0,2000) | List scrolled to F rows (view) |
| 23 | `browser_find` F-row gridcells | `FX_CustomerID` `e1468` |
| 24 | `browser_click` `e1468` (FX_CustomerID row, **once**, view selection) | Row active; Design group shown |
| 25 | `browser_find` readback values | Name; Validators; Validate Immediately `True`; List Source verbatim |
| 26 | `browser_take_screenshot` `t7-04` | Readback Design / Data Source |
| 27 | `browser_click` `e1728` (List Source ellipsis, **once**, read-only) | `Edit List Source Specifications` opened |
| 28 | `browser_find` editor fields | IDO Collection; FX_HelloWorld01; Properties; Columns `1,2`; Rec Cap `0` |
| 29 | `browser_take_screenshot` `t7-05` | Editor before its Cancel |
| 30 | `browser_click` `e1896` (subordinate **Cancel**, **once**) | Editor closed; no change |
| 31 | `browser_find` post-subordinate | Dialog state; List Source unchanged |
| 32 | `browser_click` `e1331` (outer readback **Cancel**, **once**) | Dialog closed |
| 33 | `browser_find` final state | No dialog; Save and Undo disabled; FX_Orders; User |
| 34 | `browser_take_screenshot` `t7-06` | Clean final state |

Count summary (T7): tab lists 1; tab selects 1 (succeeded); snapshots 1; finds 13 (calls 4, 7, 9, 11, 14, 16, 18, 20, 23, 25, 28, 31, 33); screenshots 7 (`t7-00` … `t7-06`); ref clicks 9 (`e247`, `e3`, `e619`, `e5`, `e993`, `e1468`, `e1728`, `e1896`, `e1331`); mouse moves 1; mouse wheels 1. Total **34** = 1 + 1 + 1 + 13 + 7 + 9 + 1 + 1.

Recovery and errors: browser errors / timeouts **0**; "Ref not found" **0**; fresh-snapshot recovery allowance used **0**; no retries; no two browser actions in parallel. The `Read` calls on the screenshots are file reads, not browser calls.

### Close, reopen and dialog counts (T7, exact)

- **Designer close: 1** (Form-tab close control). **Designer reopen: 1** (Form menu recent-forms entry). Cumulative close/reopen: **1 / 1**.
- Designer Saves in T7: **0**. Cumulative Designer Saves: **1** (T6). No retry, no uncertain Save.
- Dialog OK clicks in T7: **0**. Dialog Cancel clicks in T7: **2** (subordinate List Source editor, 1; outer readback Global Objects, 1).
- Save or discard prompts: **0** seen; none answered. Strings or messages: **0** prompts; answers **0**; created **0**.
- Tab commits, typed text, field entries: **0**. Contingency corrections: **0** (no value blank or wrong).
- New (+) uses, component classes created, validators added or changed: **0**. Other classes, property classes, extensions, IDOs, SQL or runtime data changed: **0**.
- Components, captions or layout changed: **0**. Runtime actions: **0**. Checkout actions: **0**. Unloads, FormSync, deployment, regeneration: **0**. Re-logins: **0** (session-expiry procedure not invoked).
- Browser JavaScript, console or network inspection by the worker: **0**.

### Cumulative dialog totals (T1–T7)

| Item | Total |
| --- | --- |
| Dialog OK clicks | **8** (unchanged in T7; T2 name prompt 1; T3 picker, Parameters, Validators editor 3; T4 Properties picker, Columns picker, List Source dialog 3; T5 outer Global Objects 1) |
| Outer Global Objects OK | **1** (T5) |
| Dialog Cancel clicks | **6** (T1 Component Classes and Validators, 2; T5 subordinate List Source editor 1 and outer readback 1; T7 subordinate List Source editor 1 and outer readback 1) |
| Tab commits | **6** (unchanged in T7) |

### Cumulative browser action audit (T1–T7)

| Item | T1 | T2 | T3 | T4 | T5 | T6 | T7 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 37 | 40 | 47 | 53 | 29 | 11 | 34 | **251** |
| Component classes created | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| New (+) in Component Classes list | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Validators added to class | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Validator definitions created or changed | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| List-source properties added | 0 | 0 | 0 | 3 | 0 | 0 | 0 | **3** |
| Displayed columns selected | 0 | 0 | 0 | 2 | 0 | 0 | 0 | **2** |
| Validator Parameters set | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Validate Immediately set | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| List Source Type / IDO set | 0 | 0 | 0 | 1 / 1 | 0 | 0 | 0 | **1 / 1** |
| Tab commits | 0 | 1 | 3 | 2 | 0 | 0 | 0 | **6** |
| Dialog OK clicks | 0 | 1 | 3 | 3 | 1 | 0 | 0 | **8** |
| Outer Global Objects OK | 0 | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Dialog Cancel clicks | 2 | 0 | 0 | 0 | 2 | 0 | 2 | **6** |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer Saves (native) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | **1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** |
| Component changes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T7)

- `experiments/EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md` (edited in T7: status header and this section).
- `evidence/EXP-088/t7-00-pre-close-clean-FX_Orders-User-no-dialog.png`
- `evidence/EXP-088/t7-01-immediate-post-close-state.png`
- `evidence/EXP-088/t7-02-form-menu-recent-forms-before-choosing-FX_Orders.png`
- `evidence/EXP-088/t7-03-reopened-FX_Orders-after-recent-forms-clean-state.png`
- `evidence/EXP-088/t7-04-reopened-readback-FX_CustomerID-selected-properties.png`
- `evidence/EXP-088/t7-05-reopened-ListSource-editor-readonly-before-Cancel.png`
- `evidence/EXP-088/t7-06-final-state-after-readback-Cancel-clean-FX_Orders-User.png`

T7 total: **7** PNG files plus the record edit. Cumulative worker-requested repository files for EXP-088 (T1–T7): **47** (the record once, plus 46 PNG: 5 T1, 8 T2, 9 T3, 9 T4, 5 T5, 3 T6, 7 T7). Tool-written `evidence/playwright/` files are excluded. No git command was run.

### Deviations and limits (T7)

- **D1 (rendering-only):** `t7-04` does not show the Validators, Validate Immediately or List Source rows (below the frame). Their values are from accessibility.
- **D2 (List Source editor):** `t7-05` shows the editor, and its values are read in the screenshot as well as by accessibility.
- **D3 (Rec Cap Override):** `0` in the editor after the reopen (blank in T4's screenshot). Observed; the cause is unresolved and was not changed in T7.
- **D4 (weak boundary):** the close and reopen is a same-session, close-only boundary. It is not database durability and not replay verification.

### Knowledge state (T7 findings)

| Finding | State |
| --- | --- |
| The clean FX_Orders Form (User, Save and Undo disabled, no dialog) closes through its Form-tab close control with no save or discard prompt | **observed** (one run, T7) |
| The Form menu recent-forms entry `FX_Orders` reopens the Form in User scope with a clean Designer | **observed** (one run, T7) |
| After the close and reopen, the class readback matches the pre-close (T5) values: Name, Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source verbatim | **observed** (one run, T7; Designer state reloaded in the same browser session; **weak boundary**) |
| The reopened List Source editor shows IDO Collection, `FX_HelloWorld01`, Properties `FX_Code,FX_Label,FX_Address` (fetched) and Columns `1,2` (displayed; FX_Address not displayed) | **observed** (one run, T7; accessibility, plus editor screenshot) |
| Rec Cap Override `0` persists across the close and reopen | **observed** (one run, T7; cause unresolved) |
| The class is persisted to the database or survives a server cache unload | **unresolved** (not checked; no cache action in T7; no durability claimed) |
| Replay of the class behavior at runtime (Section 10 and Section 13) | **unresolved** (out of scope for EXP-088) |
| Tutorial Section 9 as a whole | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |

Recovery classification for T7: **observed across an ordinary close-only weak persistence boundary. Not replay_verified. Not independent database durability.**

**Next step (the coordinator decides):** EXP-088's required steps (T1–T7) are complete as bounded tasks. Any cache-unload or runtime check belongs to a later experiment (EXP-089 and the runtime test), and any cleanup of the FX_ artifacts created here needs an explicit operator decision.

Classification for all T7 findings: **observed only, NOT replay_verified.**

---

## T8 — Final documentation and acceptance audit (cycle 7; documentation only; zero browser calls; zero Mongoose changes)

Task T8 (bounded instruction): review the record, the T1–T7 worker summaries, the existing evidence files and the seven controller audits; write `evidence/EXP-088/T8-final-acceptance-report.md`; update only this record. No live inspection, no cleanup, no git or shell, no edits to older experiments. Run `R-20261014-173235-Jbt8`, task_message_id `757f05ec-7261-463c-903a-f7ea5bb525c3`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`, cycle 7.

### Sources (T8)

- This record: all `**Status (T…` headers (Grep) and the T1–T7 sections as written.
- `evidence/EXP-088/harness-audit-T1.md` … `harness-audit-T7.md`: read in full (7 files). Used for row-level reconciliation.
- `evidence/EXP-088/*.png`: directory listing (46 PNG). Eight frames re-opened: `t2-04`, `t3-03`, `t3-06`, `t4-02`, `t5-04`, `t7-00`, `t7-02`, `t7-06`. The rest were viewed in T1–T7.

### Reconciliation (controller row ledgers, not worker totals)

| Task | Worker-reported browser calls | Controller row count | Finds (controller / worker) | Flagged tools |
| --- | ---: | ---: | --- | --- |
| T1 | 37 | 37 | 15 / 15 | none (non-browser Read error on the record path before creation) |
| T2 | 40 | 40 | 13 / 13 | `browser_type` row 23 (`FX_CustomerID`), authorized name entry |
| T3 | 47 | **48** | 17 / 16 | `browser_type` row 38 (`%1,%2`), authorized parameter entry |
| T4 | 53 | 53 | 19 / 19 | none |
| T5 | 29 | 29 | 12 / 12 | none |
| T6 | 11 | 11 | 3 / 4 (worker summary; its arithmetic uses 3) | none |
| T7 | 34 | 34 | 13 / 13 | none |
| **Total** | **251** | **252** | | no prohibited action found |

Other controller header tallies ("actions", "reads") use definitions the files do not state and could not be reproduced; the row tables were used.

### Corrections made in T8 (disclosed)

1. **T3 browser-call count:** 47 reported; 48 by the controller row ledger (17 finds, not 16). The T3 audit heading was annotated. Cumulative: **252**.
2. **T4 Columns enabled state:** the T4 record said Properties and Columns became enabled after the IDO commit. `t4-02` shows Properties enabled and Columns greyed until Properties was set. Corrected in the T4 commit line.
3. **T5 Rec Cap Override timing:** the T5 record said the blank-to-`0` change happened between the T4 List Source OK and the T5 readback. The T4 post-OK find already shows `RECORDCAP(0)` in the List Source string, so the change is tied to the T4 List Source OK. Corrected in the T5 record sentence. Cause not verified.
4. **T6 find count:** the worker's T6 summary says "finds 4"; its own arithmetic and the ledger give 3. Recorded in the report.
5. **T3 validator-row selection:** the report cites T3 row 27 (not 22) for the validator-row select; T2 name OK is row 27 (not 22).

### Acceptance assessment (summary; full detail in the report)

- **AC-1: supported, with limits.** Sources reviewed; session usable; FX_Orders User and clean; dialog layout (`g0-02`); FX_CustomerID absent (`t2-02` F–G; `t2-01` E/F; the T1 F–G read is accessibility only); validator In Collection (`g0-05`, `t3-04`).
- **AC-2: supported.** One New (T2 row 20) and one name OK (row 27); one validator added (T3 row 25); Parameters `%1,%2` (rows 38–42); Validators OK (row 46); Validate Immediately `True` (rows 51–52); List Source Type and IDO (rows 14–20); three Adds in order (rows 29, 32, 35); two column selections (rows 45, 46); eight dialog OKs, each with a pre-OK frame (`t2-04`, `t3-03`, `t3-06`, `t3-07`, `t4-04`, `t4-06`, `t4-07`, `t5-00`). Limit: picker fields were set without Tab (disclosed as T4 D4).
- **AC-3: supported (in-session readback).** T5 and T7 readbacks: Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` (accessibility; the Validators and List Source rows are below the readback frames). One native Save (T6 row 7): toast `Save` / `Global object(s) were saved.` (`t6-01`).
- **AC-4: supported as observed, across a weak boundary.** One clean close (`t7-00`, `t7-01`); one recent-forms reopen (`t7-02`, `t7-03`); reopened readback matches T5 (`t7-04`, `t7-05`, accessibility for Validators and List Source); final clean (`t7-06`). **Gap:** the validator definition was not re-read after the class-level Parameters step or after the reopen; "no validator changed" rests on the action ledgers.
- **AC-5: supported by the T8 report** (counts reconciled; file inventory; final state).

### Prompts, strings and special cases

- Prompts: the New name prompt (T2), the validator picker titled "New" (T3; a picker of existing validators, not a create prompt), the Parameters dialog (T3), the Edit List Source Specifications and the two column/property pickers (T4), the outer Global Objects (T5). No save or discard prompt in any close; no alert or error text; the Save toast (T6) only.
- String or message creation prompts: **0 seen**; answers **0**; created **0**.
- Contingency corrections: **0**.

### Save-state and Rec Cap transitions (unexplained; not invented)

Designer Save: enabled after T2 name OK; enabled at T3 and T4 starts; disabled at the post-OK check after the T4 List Source OK (the exact step is not sampled); disabled at T5 start; enabled after the T5 outer OK; enabled after the T5 readback Cancel; enabled at T6 pre-Save; disabled after the T6 Save and through T7. Cause not established. Rec Cap Override: blank in `t4-07` (before the T4 List Source OK); `0` in the T4 post-OK string and in the T5 and T7 editors. Cause not established.

### Files and final state (T8)

- Worker-written files: T1–T7 = 1 record + 46 PNG (47). T8 = `evidence/EXP-088/T8-final-acceptance-report.md` (new) and this record (edited). The seven `harness-audit-T*.md` files are controller-generated, not worker-written. Tool-written `evidence/playwright/` files are excluded. No git or shell was used. Confinement is authoritative in the harness and operator git review.
- Final inherited application state (as of T7; not re-checked in T8): Designer tab selected; `FX_Orders` open; `ScopeType: User`; clean (Save and Undo disabled); no dialog or prompt.

### T8 documentation-only action audit

- Browser calls: **0**. Mongoose changes: **0**.
- Non-browser calls: search 4 (Glob 2, Grep 2); Read 15 (7 audit files, 8 PNG frames); Edit 11 (this record: T3 heading, T4 sentence, T5 sentence, top status, this section = 5; the report = 6, one of which failed on a non-matching string and was retried); Write 1 (the report, created). Total 31.
- Session-expiry procedure or re-login: 0.

### Cumulative counts (T1–T8, controller row ledgers unless stated)

Browser calls **252**; component classes created **1**; Component Classes New **1**; validators added to the class **1**; list-source properties **3**; displayed columns **2**; dialog OKs **8** (outer **1**); dialog Cancels **6**; Tab commits **6**; string or message prompts **0** (answers 0, created 0); contingency corrections **0**; Designer Saves **1**; Designer close / reopen **1 / 1**; component changes **0**; runtime actions **0**; checkout actions **0**; re-logins **0**.

### Knowledge state (T8)

Every finding in T1–T7 remains **observed**, one run each. Nothing is **replay_verified**. The close and reopen are a **weak persistence boundary**, not replay verification and not database durability. Unresolved: database persistence of the class; the validator definition after the class-level Parameters step; the Save-state transitions; the Rec Cap Override cause; the Columns accessibility conflict (rendered selection and `1,2` consistent with both selected); the meaning of the empty combobox in the Parameters dialog and of the Validate Immediately Prompt row; runtime behaviour (Sections 10 and 13, out of scope).

### Recommendation

**ACCEPTED AS OBSERVED**, with the conditions listed in the report (section 9): a read-only re-check of the validator definition is recommended if the coordinator requires a direct read for AC-4. The coordinator makes the authoritative decision.

Classification for all T8 findings: **observed only, NOT replay_verified.**

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 9 is complete. The operator decided acceptance.

- Run R-20261014-173235-Jbt8 completed as accepted after 8 worker tasks, with no pauses.
- Created, for later cleanup (through Designer Edit > Component Class, the Global Objects dialog, list New once): Component Class **`FX_CustomerID`** (User version) with:
  - **Validators:** `FX_CustomerID(%1,%2)`, added through the class Validators editor's `+` picker. That picker selects an existing validator and creates none.
  - **Validate Immediately:** `True`.
  - **List Source:** `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`. In the editor this reads Type IDO Collection, IDO FX_HelloWorld01, Properties FX_Code,FX_Label,FX_Address, Columns to Display `1,2`, Rec Cap Override `0`.
  - One Designer Save with FX_Orders open: "Global object(s) were saved."
- Screenshots viewed by the operator assistant:
  - `t3-07`: the class Validators editor (Name / Parameters grid) shows `FX_CustomerID` / `%1,%2`, with controls for add, delete, up, down and parameters.
  - `t7-05`: after the Save and one Designer close/reopen, the Edit List Source Specifications dialog shows Type `IDO Collection`, IDO `FX_HelloWorld01`, Properties `FX_Code,FX_Label,FX_Addre…`, Columns to Display `1,2`, Rec Cap Override `0`. FX_CustomerID is selected in the Component Classes list, in User scope.
- Gap, accepted: the validator's own definition was last read in T3, before the class-level `%1,%2` entry, and was not re-read after it or after the reopen.
  - The ledgers show no validator edit.
  - EXP-089's read-only gates re-read the validator to close this gap.
- Accepted deviations:
  1. The `t3-02` filename says "cancelled", but it shows the `+` picker before a choice. T8 disclosed this.
  2. A T1 Read on a not-yet-existing record.
  3. A T8 record Edit retried.
- Flagged `browser_type` calls: the class Name and the class-level Parameters `%1,%2`, both required entries.
- Counts:
  - component classes created 1, New 1, validators added 1;
  - list-source properties 3, displayed columns 2;
  - Designer Save 1, Designer close/reopen 1;
  - component changes 0, runtime actions 0, checkout actions 0, unloads 0, re-logins 0.
- Findings (observed):
  1. **The class Validators editor** lists validator rows with their own Parameters. Its `+` opens a picker of existing validators. The class stores `<validator>(<params>)`.
  2. **The List Source is stored as one string:** `STDOLE <IDO>( PROPERTIES(<p1>,<p2>,<p3>) DISPLAY(<indexes>)RECORDCAP(0))`.
  3. **Columns to Display is stored as 1-based property indexes** (`1,2`), not names.
- Limits:
  - Same-session Designer UI evidence only.
  - No runtime use yet; the class is not yet assigned to any component.
- Confinement (git status): only `evidence/EXP-088/` and this record were written by the run.
- Next: EXP-089 (Part 5 section 10). Apply component class FX_CustomerID to FX_CustomerIDCombobox and to the Customer ID grid column, with Component Class Parameters FX_CusName,FX_CusAddress. Before that, its gates re-read the FX_CustomerID validator.
