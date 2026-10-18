# EXP-115: Hello World Part 8 Phase 1a: create the User-scope Tile Form FX_ItemsTile, set Size 40; 4

Status: **accepted (observed), with qualifications — operator, 2026-10-18; see Outcome (operator) at the end.** T1 to T4 complete (2026-10-18); final audit written in T4. Run `R-20261018-220359-5LB8`, cycles 0 (T1), 1 (T2), 2 (T3) and 3 (T4). Brief approved in commit `822d865`. Outcome: FX_ItemsTile created, Layout Size 40; 4 saved once, and reopened after an ordinary close with the values observed (same session only; see the T4 limits).
Scope: User editing scope only. Tenant: `G6R8LJ9Q4E8C2Z8Y_DEM`, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Tutorial source: `docs/mongoose/transcripts/hello-world-pt8.md` (Phase 1, transcript 00:48-03:18).

## Task plan

| Task | Content | Status |
| --- | --- | --- |
| T1 | Read-only gate, absence check (Select Form + recent forms), Tile wizard discovery | **done (this section)** |
| T2 | Close clean FX_CustomerPortal once; run Classic > Tile wizard once to Finish (Name FX_ItemsTile, Data Source FX_Items, only FX_Picture, no template) | **done (section T2 below)** |
| T3 | Layout Size Width 40, Height 4; one Designer Save | **done (section T3 below)** |
| T4 | Close and reopen FX_ItemsTile via recent forms; readback; final audit | **done (section T4 and the final audit below)** |
| T4 | Close and reopen FX_ItemsTile via recent forms; readback; final audit | pending |

Out of scope (all phases): Picture Static removal, Picture Edit conversion, the three new Statics, Phases 2-9, the narrated "Unload All Global Form Objects" (not authorized), Regenerate Form (not authorized in this run).

## Sources reviewed (AC-1, before any browser action)

- `AGENTS.md` (repository file, LEARNING MODE).
- `docs/mongoose/transcripts/hello-world-pt8.md`: "Instructions for AI agents" lines 12-22; Phase 1 lines 87-112 (the narrated Tile wizard, Width 40 / Height 4 "UI units not independently confirmed", and the narrated Save, close and unload boundary); transcript lines 328-351 (00:48-03:18).
- `recipes/forms/create-basic-form.md` (verified; User-scope wizard procedure; Save Template must be unchecked; Select Form OK activates a row; double-click pitfalls).
- `recipes/session/session-expiry-and-stale-designer.md` (session-expiry procedure; stale Designer tab gives the server-event error).
- Outcome (operator) sections only: `experiments/EXP-061-...md` (2026-10-11), `experiments/EXP-102-...md` (2026-10-15; finding 5: a newly created Form was not listed in the Select Form dialog while the recent-forms entry opened it, so a zero-row Select Form result is not proof of absence), `experiments/EXP-114-...md` (2026-10-18).

No other records and no later Part 8 phases were read.

## T1 starting state and gate

- Browser tabs (listed before any selection): tab 0 = Designer (`mode=designer`, `MGForm=FX_CustomerPortal`), tab 1 = Mongoose portal/Web Client. Tab 0 selected (succeeded). The Web Client tab was not touched.
- Session: usable. No Session Expired modal, logout card or sign-in page was seen. No re-login. No "Identify Your Editing Scope" dialog appeared.
- Scope: Designer status bar `[ ScopeType: User / ScopeName: <signed-in operator> ]`; the Form tab and the scope toolbar show User. (The snapshot masks the name as `SECRET_MONGOOSE_USERNAME`; it is not repeated here.)
- Open Form: **FX_CustomerPortal** (only Form tab, `closable`, selected).
- Clean: toolbar **Save disabled**, **Regenerate Form disabled**, Undo and Redo disabled.
- Dialogs/menus open at the gate: none.
- Designer Properties panel: component combobox showed `GridItems (Grid)` (the component left selected by EXP-114; no edit made).
- Server-event error: none seen in T1.
- **Baseline console error count: 2 errors, 0 warnings** (from the tool output at the start of T1). Count after every T1 action: 2 (see the action audit). It did not rise. The console messages were not read.

## Absence check: FX_ItemsTile (AC-1)

### Select Form dialog (Form > Definition > Design; opened once)

- The Form menu lists: Definition (submenu), Sign Out, then recent forms `FX_CustomerPortal`, `FX_FlexProbe01`, `FX_OrdersChart`, `FX_Orders`, `FX_HelloWorld01`, `FX_Items`, then `IDO Properties`, `IDOs`, `Sql Tables`, `IDO Projects`. The Definition submenu lists: Design, Revert Form Definition, Regenerate Form (disabled), Regenerate Form from Cache (disabled), Site Developer Impersonation, Unload All Global Form Objects, New, Copy, Delete. None of Unload, Regenerate, Revert, Copy or Delete was clicked.
- No menu item is named "Open" in this build. **Definition > Design** opened the "Select Form" dialog (observed; the identification of Design as the Open/Select Form entry is an inference from that result).
- Dialog on open: Caption and Name columns; the Filter textbox was pre-filled with `IdoCollections`; Filter By = Name; Case Sensitive and Starts With unchecked; buttons OK, Cancel, Help. Three rows were listed (G6RIdoCollectionSearch, IdoCollections, IdoCollections.ids); the first row was highlighted by default and was not clicked.
- Filter `FX_ItemsTile` entered by a plain fill: the grid did not change (still the three earlier rows; the fill did not fire the filter). Re-entered after Ctrl+A with slow (per-key) typing: **zero rows** (`t1-03b`).
- Positive control `FX_Orders` entered the same way (Ctrl+A, slow typing): **two rows**, `FX_Orders` (Caption FX_Orders, Name FX_Orders) and `FX_OrdersChart` (`t1-04`). The filter and the list work.
- Left with **Cancel** (no OK, no row double-click). The dialog closed; the Form stayed FX_CustomerPortal.

### Recent forms (view only)

- The Form menu's recent-forms list (screenshot `t1-00`, snapshot of the Form menu) lists `FX_CustomerPortal`, `FX_FlexProbe01`, `FX_OrdersChart`, `FX_Orders`, `FX_HelloWorld01`, `FX_Items`. **FX_ItemsTile is not listed.** No recent entry was chosen.

### Result

- Select Form zero-row result for FX_ItemsTile, with a working positive control, and no entry in the recent-forms list: **FX_ItemsTile not found** (observed). Per EXP-102 finding 5 this is treated as observed absence only, not proof. Open question: whether the Select Form list includes Flex Forms (FX_CustomerPortal was not tested in this dialog in T1).

## Form Wizard Selection (wizard discovery; opened once, Cancel once, OK never clicked)

- Opened by the Designer toolbar **New** button (tooltip-named New Form Definition per the recipe; the dialog title confirms the function).
- Controls on open: radio **New Form** (selected) and radio **Extend Form** (unselected); **Category** combobox (blank); **Wizard** combobox (blank); buttons **OK**, **Cancel**, **Help**; title-bar close control.
- **Category options (7)**, with the descriptions shown in the list:
  1. Classic: "WinStudio classic form wizards"
  2. ExtDataSource: "STRINGS(mWizard_ExtDatasource)"
  3. Flex: "Wizard to create a form built on FlexLayout components"
  4. Form Builder: "Wizards to create forms on Runtime Builder"
  5. IDS: "Wizard to create a form based entirely on the IDS layout grid and IDS controls"
  6. New Data: "Wizards to create forms with their required SQL tables, IDOs, and components"
  7. REST: "REST API wizards"
- After selecting **Classic**, the **Wizard options (7)** with descriptions:
  1. Build from Scratch: "Plain form without defined components"
  2. Detail-Only: "Form to display the details for a single record of an IDO collection"
  3. Grid-Only: "Form with a single grid, bound to an IDO collection and displayed in a row-column table format"
  4. Multi-View: "Multi-view (grid/detail) form bound to an IDO collection"
  5. Query: "Query form to create a filter to specify the collection user can retrieve"
  6. Report: "Template form to generate report outputs"
  7. **Tile: "Tile form to be hosted by another form"** (present, as expected)
- The Wizard list was closed by clicking the Tile option (a selection, allowed by the brief); then the dialog was left with **Cancel** (dialog showed Category Classic, Wizard Tile before Cancel). Nothing was created: no Form, no template, no OK.
- Observed: the Designer URL lost `MGForm=FX_CustomerPortal` after the wizard Cancel; the Form stayed displayed (same pattern as EXP-114 finding 6).

## Evidence (T1)

| File | Shows | Does not show |
| --- | --- | --- |
| `evidence/EXP-115/t1-00-form-menu-state.png` | Form menu open: Definition, Sign Out, recent-forms list (no FX_ItemsTile); FX_CustomerPortal canvas, Save state not visible in this crop; status bar User scope | Whether the list is complete (menu fully visible) |
| `evidence/EXP-115/t1-01-definition-submenu-state.png` | Definition submenu: Design, Revert, Regenerate (greyed), Regenerate from Cache (greyed), Impersonation, Unload All Global Form Objects, New, Copy, Delete (none clicked) | Anything beyond the menu |
| `evidence/EXP-115/t1-02-select-form-dialog.png` | Select Form dialog opened by Definition > Design: filter `IdoCollections`, three rows, first row highlighted, OK/Cancel/Help | Final filter result (see t1-03/03b) |
| `evidence/EXP-115/t1-03-select-form-filter-fx-itemstile.png` | Failed plain fill: filter text `FX_ItemsTile` but the list still shows the three earlier rows | Does not prove absence; shows the non-updating fill |
| `evidence/EXP-115/t1-03b-select-form-filter-fx-itemstile-typed.png` | Slow-typed filter `FX_ItemsTile`: **zero rows** | Positive control (see t1-04) |
| `evidence/EXP-115/t1-04-select-form-positive-control-fx-orders.png` | Filter `FX_Orders`: rows FX_Orders and FX_OrdersChart; filter works | Whether Flex Forms are listed |
| `evidence/EXP-115/t1-05-wizard-category-list.png` | Form Wizard Selection, New Form, Category list open: Classic, ExtDataSource, Flex, Form Builder, IDS (list scrolls) | Full list below IDS (read via snapshot: 7 entries total) |
| `evidence/EXP-115/t1-06-wizard-classic-list.png` | Wizard list under Classic: Build from Scratch, Detail-Only, Grid-Only, Multi-View, Query (partly visible); Report and Tile below the fold | Report and Tile entries and their descriptions (read via the listbox snapshot, not from the image) |

Screenshots are viewport captures (the dialog content is visible in each). The name and scope text in the status bar is visible in them; the names are not copied into this record.

## Action audit (cumulative through T1)

| Category | Count | Notes |
| --- | --- | --- |
| Browser tab list / select | 1 / 1 | list first, then select tab 0 (Designer); both succeeded |
| Snapshot calls | 16 | untargeted 4 (3 successful at depth 2; 1 failed: 65,942 characters, auto-saved by the tool, not read); targeted 12 (e3 x2, Definition menu e2340 x1, Select Form dialog x3, toolbar e11 x1, wizard dialog x3, Category list x1, Wizard list x1) |
| Find calls (read-only, not used for clicks) | 7 | used only to locate refs |
| Wait | 1 | 2 s, to see whether the Select Form grid updated |
| Clicks (successful) | 10 | Form menu 1; Definition 1; Design 1; Select Form Cancel 1; toolbar New 1; Category trigger 1; Classic option 1; Wizard trigger 1; Tile option 1; wizard Cancel 1 |
| Select Form dialog opens | 1 | OK 0; Cancel 1; row double-clicks 0 |
| Form Wizard Selection opens | 1 | OK 0; Cancel 1 |
| Wizard pages / Finish | 0 / 0 | no wizard page reached |
| Type actions | 3 | fill of FX_ItemsTile (no effect on grid); slow type of FX_ItemsTile (zero rows); slow type of FX_Orders (positive control) |
| Key presses | 2 | Ctrl+A in the Select Form filter textbox (x2), to clear the filter before typing; no Enter, Tab or arrow keys |
| Screenshots | 8 | listed in the Evidence table |
| Designer Saves | 0 | none in T1 |
| Prompts / dialogs answered | 0 prompts; 2 dialogs closed by Cancel | no OK-only or Yes/No prompt appeared |
| Form closes / reopens | 0 / 0 | |
| Templates created | 0 | |
| Global objects / components changed | 0 / 0 | |
| Regenerate / Unload / Delete Form Definition / Select Form OK | 0 / 0 / 0 / 0 | |
| Server-event errors | 0 | |
| Session expiries / re-logins | 0 / 0 | |
| Navigations / refreshes / restarts | 0 / 0 / 0 | |
| Console error count | 2 errors, 0 warnings at the gate and after every action (no rise) | console messages not read |
| Checkout / FormSync / deployment / runtime actions | 0 | |

Timeouts: none. Ref-not-found errors: none (fresh-snapshot recovery allowance not used).

## Worker-written file inventory (T1)

Written by the worker (explicit writes):
- `experiments/EXP-115-hello-world-part-8-phase-1a-fx-itemstile-form.md` (this record; created in T1)
- `evidence/EXP-115/t1-00-form-menu-state.png`, `t1-01-definition-submenu-state.png`, `t1-02-select-form-dialog.png`, `t1-03-select-form-filter-fx-itemstile.png`, `t1-03b-select-form-filter-fx-itemstile-typed.png`, `t1-04-select-form-positive-control-fx-orders.png`, `t1-05-wizard-category-list.png`, `t1-06-wizard-classic-list.png` (8 screenshots, written through the browser screenshot tool)

Written by the browser tool during worker actions (not by an explicit worker write; recorded for the harness inventory):
- `evidence/playwright/page-2026-10-18T14-04-29-261Z.yml`, `14-04-56-222Z`, `14-05-18-691Z`, `14-05-43-028Z`, `14-05-53-674Z`, `14-06-03-795Z`, `14-06-16-058Z`, `14-06-26-531Z`, `14-06-37-281Z`, `14-06-52-365Z`, `14-07-00-931Z`, `14-07-18-730Z`, `14-07-24-784Z` (13 snapshot files; the tool auto-saves a snapshot after several actions)
- `evidence/playwright/console-2026-10-18T14-04-16-181Z.log` (tool-written console log; **not read** by the worker)
- Outside the repository: one untargeted snapshot saved by the tool to the worker's tool-results directory (65,942 characters; not read; not used).

No other files were written. No templates, no Forms, no global objects were created.

## Cleanup inventory (T1)

Nothing created in T1. Objects to clean up later: none from this experiment yet.

## Final state (end of T1)

- Designer tab 0: FX_CustomerPortal open (the only Form tab), clean (Save disabled, Regenerate Form disabled), User scope, no dialog open, no menu open, no unsaved change.
- Console: 2 errors, 0 warnings.
- No change made to any Form, component, collection, template or global object.

## Observations (T1, observed only)

1. A plain Playwright fill in the Select Form filter did not update the grid; slow per-key typing (after Ctrl+A) did. The fill is not a valid way to filter this dialog.
2. The Form menu has no "Open" item in this build; Definition > Design opened the Select Form dialog.
3. The Form menu's recent-forms list and the Select Form dialog both lack FX_ItemsTile (pre-creation, as expected).
4. The Category list has 7 entries and the Classic Wizard list has 7 entries, including Tile ("Tile form to be hosted by another form").
5. The untargeted accessibility snapshot exceeded the inline size limit (65,942 characters) and was auto-saved; the Form menu and dialogs were only visible to the snapshot in targeted form, so targeted snapshots were used from then on.

## Procedural deviations (T1)

- The recent-forms list was viewed in the open Form menu, and the menu was then moved to Definition > Design (which opened Select Form) rather than being closed separately. No recent entry was chosen.
- Ctrl+A was used twice in the Select Form filter textbox before typing (to clear the filter). Enter, Tab and arrow keys were not used.
- Clicking the Tile option to close the Wizard list selected Tile as the Wizard value (allowed by the brief); the dialog was then cancelled, so nothing was created.
- Five screenshots beyond the two named in the brief were taken as decisive state records (t1-00, t1-01, t1-03, t1-03b, t1-04).

## Open questions (T1)

- Whether the Select Form dialog lists Flex Forms (FX_CustomerPortal, EXP-102 finding 5). Not tested in T1; FX_CustomerPortal does appear in the recent-forms list.
- Whether the Select Form list is current (it is filtered live, so it probably is; not verified against a database).

## Knowledge state

- Gate (User scope, FX_CustomerPortal clean, console baseline 2): observed.
- FX_ItemsTile absent in Select Form (positive control FX_Orders) and in the recent-forms list: observed (not proof of absence beyond this session).
- Classic wizard list with 7 Wizard options and Tile present: observed.
- Category list with 7 options: observed.

## T1 typing reconciliation (operator instruction, cycle 1)

The three T1 `browser_type` calls were Select Form filter entries only: a plain fill of `FX_ItemsTile` (no effect on the grid), a slow per-key entry of `FX_ItemsTile` (zero rows), and a slow per-key entry of `FX_Orders` (positive control). They are permitted filter typing, not record edits. The T1 action audit above is unchanged (3 type actions).

## T2: create FX_ItemsTile (cycle 1, 2026-10-18)

### Sources and starting state (AC-1 continuation)

- `AGENTS.md`: read again at the start of T2 (lines 1-60 this task; the rest was read in T1 of this session and is unchanged). This record's T2 part (lines 150-179 at the start of T2) was read.
- Browser tabs listed before the first selection: tab 0 = Designer (`MGForm=FX_CustomerPortal`), tab 1 = Mongoose portal. Tab 0 selected (succeeded).
- Starting state: FX_CustomerPortal the only open Form; Save and Regenerate Form disabled; no dialog or menu; Designer scope toolbar `ScopeType: User`; console **2 errors, 0 warnings** (starting count). No session expiry, sign-in or server-event error.

### Step 1: close FX_CustomerPortal (AC-2)

- Clicked the Form-tab close control (`closable FX_CustomerPortal`) once.
- Prompts: **none appeared** (no save prompt, so no answer was given). Confirmed closed: the tab list is empty and no Form tab remains (snapshot after the click). FX_CustomerPortal was not edited or saved.
- Console after the action: 2.

### Step 2: New Form Definition, New Form, Classic, Tile, OK

- Clicked the toolbar **New** once (New Form Definition). The Form Wizard Selection dialog opened with New Form already selected (screenshot confirms the radio is filled), Category and Wizard blank.
- Category: opened the list (7 options, the same as T1), clicked **Classic**.
- Wizard: opened the list, clicked **Tile** ("Tile form to be hosted by another form").
- Verified before OK (`t2-01`): New Form selected, Category `Classic`, Wizard `Tile`, User scope in the status bar. Clicked **OK** once.
- Console after each action: 2.

### Step 3: wizard pages (every page recorded before any change; one screenshot before the change on each page)

**Page 1 "Form Wizard - Tile" (Form Template and Attributes)**
- Fields and defaults (before any change, `t2-02`): **Name** `*` required, combobox, blank (with an Open button); **Form Type** `Tile` (read-only); **Form Layout** `GridLeft` (read-only); **Device Type** `*` `Default` (combobox with Open); **Data Source** `*` required, combobox, blank (with Open); **Query Form** textbox, blank; **Comments** textbox, blank. Buttons: Back (disabled), Next, Finish (disabled), Cancel, Help. Instruction text: "Select a form template or enter a new form name. Also select a form type, device and data source. You may enter a Query Form name and a query form will be created automatically for you. You may also enter comments."
- **Name**: one plain fill `FX_ItemsTile` (no correction). Snapshot shows the combobox value FX_ItemsTile.
- **Data Source**: clicked the field's **Open** button; the list of IDO names opened (a long list: ABDataServices … WSFormWizards); clicked the option **FX_Items** (the list held FX_HelloWorld01, FX_Items, FX_Orders, FX_UMs, G6RItems, and others; no correction). Snapshot shows Data Source `FX_Items`.
- Device Type left at `Default`; Query Form and Comments left blank (defaults).
- Filled state (`t2-03`): Name FX_ItemsTile, Form Type Tile, Form Layout GridLeft, Device Type Default, Data Source FX_Items. Clicked **Next** once.

**Page 2 "Properties" (property selection for the Primary Collection)**
- Before any change (`t2-04`): left list **Properties** (available) held `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `FX_Cost`, `FX_Description`, `FX_Item`, `FX_Picture`, `FX_UM`, `FX_UMsDescription`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, `UDFDateTime1-6`, `UDFDecimal1-6`, `UDFInteger1-6`, `UDFLongText1-2`, `UDFMediumText1-6`, `UDFRecordDate`, `UDFRowPointer`, `UDFShortText1-7`, `UpdatedBy`. Right list **Primary Collection** (selected) held **FX_Cost, FX_Description, FX_Item, FX_Picture, FX_UM, FX_UMsDescription** (all six selected by default). Controls between them: `>>`, `>`, `<`, `<<`.
- Controls used (page's own, each once): (1) `<<` (remove all selected), which emptied the Primary Collection list; (2) clicked `FX_Picture` in the left list (selected); (3) `>` (move selected to Primary Collection). No `>>` or `<` was used.
- Result (`t2-05`): Primary Collection holds **only FX_Picture**; the other five FX_ properties and the system properties are in the left list. Clicked **Next** once.

**Page 3 (attribute order and attributes for the included property)**
- Before any change (`t2-06`): a grid with columns Name, Caption, Component Class, and one row: `1` (star) · `FX_Picture` · Caption blank · Component Class blank. Four ordering buttons at the right (top, up, down, bottom), not used. Text: "Specify the order and attributes of each property you have included in the primary collection. First select it in the list. You may also access advanced property attributes for the selected property."
- No change made. Clicked **Next** once.

**Page 4 (final: Save Template and Finish)**
- Before any change (`t2-07`): text "Click the Finish button to build a tile form named FX_ItemsTile with the data source FX_Items."; checkbox **Save Template** **checked** (default). Next disabled; Finish enabled.
- Save Template correction (recorded as an attempt, not a field correction): one click on the checkbox itself (`e3582`) **timed out** ("element is visible, enabled and stable ... `ext-comp-3550-displayEl` intercepts pointer events"; no change). Per the brief, took one fresh untargeted snapshot (checkbox still checked), then one corrected attempt: a click on the **Save Template label** text. The label click unchecked the box (snapshot: no `[checked]`; `t2-08` shows the box empty).
- Result: Save Template **unchecked**, so no template is created. Console after the timeout and after the label click: 2.

### Step 4: Finish (once), completion message, new Form

- Before Finish, verified: name FX_ItemsTile; Data Source FX_Items; FX_Picture the only selected property; Save Template unchecked. Clicked **Finish** once.
- Completion message (`t2-09`), verbatim: **"Process Completed Successfully"** (alertdialog title "Infor Mongoose Application Development Framework - Form Wizard - Tile"). Answered **OK** once.
- After OK the Designer opened the new Form: tab `FX_ItemsTile closable`, selected; URL carries `MGForm=FX_ItemsTile`; Save and Regenerate Form disabled; status bar `ScopeType: User`. Console: 2.
- Screenshot `t2-10`: canvas with two elements in the top band (a narrow box at the top left and a grey box to its right; not read further in T2); Properties (Form tab).

### Step 5: Form Properties, components, Collections (view only; AC-2, AC-3 baseline)

- **Properties (Form tab, Design group)**: Name `FX_ItemsTile`; Description blank; Caption blank; Version `User version for us…` (truncated in the panel; full text not read); Device Type `Default`; Form Type `Tile`; Is Master `True`. Groups Appearance, Behavior, Help and **Layout** are collapsed. **Layout Size and Unit were not read in T2** (the Layout group was not expanded); the Size is read and set in T3.
- **Details > Collections** (`t2-11`): one entry, **"Primary Collection: FX_Items"** (expanded tree row not opened).
- **Details > Components** (expanded with the grid's Expand control; `t2-13`): **Pane (00)** with two generated components:
  1. **FX_PictureStatic**: Type `Static`; Data Source blank; Pane `0`; Tab `0`.
  2. **FX_PictureEdit**: Type `Edit`; Data Source (binding) `object.FX_Picture`; Pane `0`; Tab `1`.
- No component was selected, edited, moved or deleted. No Collections change.
- Designer after the reads: FX_ItemsTile open, clean (Save disabled), User scope, no dialog or menu. Console 2.

### T2 observations (observed only)

1. The Form menu's recent-forms list was not opened in T2 (the brief reserves the recent-forms reopen for T4); whether FX_ItemsTile appears there is not yet observed.
2. Wizard Cancel and the Designer URL: the URL lost `MGForm=` after the T1 wizard Cancel and gained `MGForm=FX_ItemsTile` after Finish and OK.
3. Page 2's default selection is all six FX_ properties; the wizard does not default to FX_Picture alone.
4. The Save Template checkbox sits under a span (`ext-comp-3550-displayEl`) that intercepts clicks on the input; a click on its label text worked. This is the one observed click failure in T2.
5. The Data Source picker (the field's Open button) opens the full IDO name list (many entries); FX_Items is listed.
6. The wizard's Name field accepted a plain fill, and the typed value appeared in the field (no correction needed).

### T2 procedural deviations

- One untargeted snapshot was taken after the checkbox timeout (the brief's allowance); one `Ref not found` (`e3594`, the Details tabpanel after the Finish) was recovered with one fresh untargeted snapshot.
- Three view-only clicks in the Designer after Finish: the Details "Expand Panel" control, the Components tab, and the Components grid "Expand" control. None edits the Form.
- The Layout group was not expanded, so Layout Size and Unit are not recorded (deferred to T3 as the brief allows for "if shown").

## Cumulative action audit (through T2)

Counts are cumulative across T1 and T2 (T1 values from the T1 audit above; T2 values from this task).

| Category | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Tab list / tab select | 1 / 1 | 1 / 1 | 2 / 2 |
| Snapshot calls | 16 (untargeted 4, targeted 12) | 27 (untargeted 6, targeted 21 incl. 1 `Ref not found`) | 43 (untargeted 10, targeted 33) |
| Find calls (read-only; not used for clicks) | 7 | 6 | 13 |
| Wait | 1 | 0 | 1 |
| Successful clicks | 10 | 21 | 31 |
| Clicks timed out | 0 | 1 (Save Template checkbox, `e3582`) | 1 |
| Select Form dialog opens | 1 (Cancel 1; OK 0; row double-click 0) | 0 | 1 (Cancel 1; OK 0; row double-click 0) |
| Form Wizard Selection opens | 1 (Cancel 1; OK 0) | 1 (OK 1; Cancel 0) | 2 (Cancel 1; OK 1) |
| Lists opened (Category, Wizard, Data Source picker) | 2 (Category, Wizard) | 3 (Category, Wizard, Data Source) | 5 |
| Wizard pages reached | 0 | 4 | 4 |
| Wizard Next clicks | 0 | 3 | 3 |
| Wizard Back clicks | 0 | 0 | 0 |
| Wizard Finish clicks | 0 | 1 | 1 |
| Completion messages answered OK | 0 | 1 ("Process Completed Successfully") | 1 |
| Prompts (other than completion) | 0 | 0 (no save prompt on FX_CustomerPortal close) | 0 |
| Type actions | 3 (Select Form filter entries) | 1 (Name fill `FX_ItemsTile`) | 4 |
| Key presses | 2 (Ctrl+A in Select Form filter) | 0 | 2 |
| Per-field entries | none | Name 1 (no correction); Data Source 1 (no correction); Properties `<<` 1, FX_Picture 1, `>` 1; Save Template 1 timed-out click + 1 label click (the corrected attempt) | — |
| Field corrections | 0 | 0 value corrections (1 corrected click attempt on Save Template) | 0 value corrections |
| Screenshots | 8 | 13 | 21 |
| Form closes | 0 | 1 (FX_CustomerPortal, clean, no prompt) | 1 |
| Forms created | 0 | 1 (FX_ItemsTile, Tile) | 1 |
| Forms reopened | 0 | 0 | 0 |
| Templates created | 0 | 0 (Save Template unchecked) | 0 |
| Designer Saves | 0 | 0 | 0 |
| Regenerate Form / Unload / Delete Form Definition / Select Form OK | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |
| Components edited / global objects created or changed | 0 / 0 | 0 / 0 | 0 / 0 |
| Collections changed | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 |
| Ref-not-found errors | 0 | 1 (`e3594`; recovered with 1 fresh untargeted snapshot) | 1 |
| Session expiries / re-logins | 0 / 0 | 0 / 0 | 0 / 0 |
| Navigations / refreshes / restarts | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Checkout, FormSync, deployment, runtime actions | 0 | 0 | 0 |
| Console error count | 2 (throughout) | 2 (throughout; no rise after any action) | 2 |

Console messages were not read in T1 or T2.

## Worker-written file inventory (through T2)

Written by the worker (explicit writes):
- `experiments/EXP-115-hello-world-part-8-phase-1a-fx-itemstile-form.md` (created in T1; updated in T2)
- T1 screenshots (8): `evidence/EXP-115/t1-00-form-menu-state.png`, `t1-01-definition-submenu-state.png`, `t1-02-select-form-dialog.png`, `t1-03-select-form-filter-fx-itemstile.png`, `t1-03b-select-form-filter-fx-itemstile-typed.png`, `t1-04-select-form-positive-control-fx-orders.png`, `t1-05-wizard-category-list.png`, `t1-06-wizard-classic-list.png`
- T2 screenshots (13): `evidence/EXP-115/t2-01-wizard-selection-classic-tile-before-ok.png`, `t2-02-wizard-page1-before-change.png`, `t2-03-wizard-page1-filled.png`, `t2-04-wizard-page2-properties-before-change.png`, `t2-05-wizard-page2-only-fx-picture-selected.png`, `t2-06-wizard-page3-attributes-before-change.png`, `t2-07-wizard-page4-save-template-before-change.png`, `t2-08-wizard-page4-save-template-unchecked.png`, `t2-09-completion-message.png`, `t2-10-new-form-fx-itemstile-after-finish.png`, `t2-11-details-components-collections.png`, `t2-12-components-tree.png`, `t2-13-components-tree-expanded.png`

Written by the browser tool during worker actions (not explicit worker writes; recorded for the harness inventory; not read):
- Snapshot files, T1 (13): `evidence/playwright/page-2026-10-18T14-04-29-261Z.yml`, `14-04-56-222Z`, `14-05-18-691Z`, `14-05-43-028Z`, `14-05-53-674Z`, `14-06-03-795Z`, `14-06-16-058Z`, `14-06-26-531Z`, `14-06-37-281Z`, `14-06-52-365Z`, `14-07-00-931Z`, `14-07-18-730Z`, `14-07-24-784Z`
- Snapshot files, T2 (21): `evidence/playwright/page-2026-10-18T14-11-10-757Z.yml`, `14-11-21-808Z`, `14-11-32-748Z`, `14-11-40-936Z`, `14-11-49-010Z`, `14-11-54-525Z`, `14-12-07-996Z`, `14-12-34-037Z`, `14-12-42-355Z`, `14-12-55-284Z`, `14-13-16-587Z`, `14-13-23-646Z`, `14-13-30-478Z`, `14-13-43-850Z`, `14-13-57-255Z`, `14-14-26-835Z`, `14-14-39-559Z`, `14-14-52-315Z`, `14-15-25-828Z`, `14-15-40-967Z`, `14-15-56-584Z`
- Tool-written console logs, not read: `evidence/playwright/console-2026-10-18T14-04-16-181Z.log` (T1), `evidence/playwright/console-2026-10-18T14-11-00-505Z.log` (T2 tab-list event)
- Outside the repository: the 65,942-character untargeted snapshot from T1 (worker tool-results directory; not read; not used).

No other files were written. No templates, Forms (other than FX_ItemsTile), or global objects were created.

## Cleanup inventory (through T2)

- Form **FX_ItemsTile** (User scope, Tile; Data Source FX_Items; Primary Collection FX_Items; one property FX_Picture; generated components FX_PictureStatic and FX_PictureEdit). Created by the wizard in T2. Cleanup needed later (operator authorization).
- No template (Save Template unchecked). No other object created.

## Final state (end of T2)

- Designer tab 0: **FX_ItemsTile** open and clean (Save disabled, Regenerate Form disabled), User scope, Details panel expanded, Components tree expanded. No dialog, menu or wizard open. No unsaved change.
- FX_CustomerPortal: closed (not open in the Designer); no change to it.
- Console: 2 errors, 0 warnings.

## Acceptance status after T2

- **AC-1**: met in T1 (unchanged).
- **AC-2**: met for T2: FX_CustomerPortal closed clean once (no prompt); wizard run once to Finish with every page recorded before any change; Name FX_ItemsTile, Data Source FX_Items, only FX_Picture selected, no template; completion message recorded verbatim; FX_ItemsTile open in User scope and clean; Properties, generated components and Collections recorded. The T3 part (Layout Size and Save) is not started.
- **AC-3**: not started (T4).
- **AC-4**: no violation so far (no other Form created or changed; no template; no component edited; no global object; no Regenerate, unload, Delete Form Definition or Select Form OK; no Designer Save; no runtime or checkout action; User scope only).
- **AC-5**: not started (T4 final audit).

## T3: set Layout Size 40; 4 and one Designer Save (cycle 2, 2026-10-18)

### Sources and starting state

- `AGENTS.md` re-read at the start of T3. The T3 part of this record was read (sections "Next step" and "Acceptance status after T2").
- Tabs listed before the first selection: tab 0 = Designer (`MGForm=FX_ItemsTile`), tab 1 = Mongoose portal. Tab 0 selected (succeeded).
- Starting state (`S1`, untargeted depth-2 snapshot): FX_ItemsTile the only open Form tab, selected; **Save disabled**; Undo and Redo disabled; Regenerate Form disabled; Properties Form tab selected; status bar `ScopeType: User`; no dialog, menu, editor or wizard open. Console **2 errors, 0 warnings** (starting count). No session expiry, sign-in, prompt or server-event error.
- Initial Properties state before any edit: Name FX_ItemsTile, Version `User version for us…` (truncated), Device Type Default, Form Type Tile, Is Master True; group Layout collapsed.

### Step 1: expand the Layout group

- Single click on the **Layout** row (`e551`) only selected the row (highlighted, Description pane showed "Layout"); the group stayed collapsed. Console 2.
- Double-click on the **Layout** row (fresh reference from a targeted snapshot of the tree) expanded it. Console 2.
- Layout group observed after expansion (`t3-01` and the targeted tree snapshot):
  - Splitter `None`
  - Pane 0 Scroll Bars `As Needed`
  - Pane 1 Scroll Bars `As Needed`
  - Form Pages (dropdown button, not used)
  - **Unit `Char`**
  - **Size `69; 21`** (group row, expandable)
  - Synchronize FlexLayout attributes `True`

### Step 2: expand the Size row

- Double-click on the **Size** row (`e632`). The row expanded into two child rows:
  - **Width `69`**
  - **Height `21`**
- Size row summary before any edit: `69; 21`. Unit `Char`. The Size is in the Form's Layout group in the Unit `Char` (the Form's own unit, shown on the Unit row), so it is the expected place and unit; no stop was needed.
- Initial state screenshot: `t3-02` (Layout expanded, Size expanded, Width 69, Height 21).

### Step 3: Width (one plain fill and Tab; no correction)

- Click on the Width value cell (`e657`) opened an editor (textbox showed `69`).
- Plain fill `40` (one `browser_type` call), then Tab once to commit.
- Result: Width `40`; Size summary `40; 21`. Neither field was skipped (69 was not the target value).

### Step 4: Height (one plain fill and Tab; no correction)

- Click on the Height value cell (`e666`) opened an editor (textbox showed `21`).
- Plain fill `4` (one `browser_type` call), then Tab once to commit.
- Result: Height `4`; Size summary `40; 4`.
- Save and Undo became **enabled** (dirty state), as expected after the first committed change.

### Step 5: verification before Save

- Targeted tree snapshot (`e443`): **Size `40; 4`, Width `40`, Height `4`, Unit `Char`**, Splitter None, Pane scroll bars As Needed, Synchronize FlexLayout True.
- Screenshot `t3-03` (before Save): Layout group expanded; Size `40; 4`; Width `40`; Height `4`; Unit `Char`; Save icon enabled; canvas outline is visibly smaller than before the edit (the Form is drawn at the new Size; not measured in pixels). Status bar `ScopeType: User`.
- Console before Save: 2.

### Step 6: the one Designer Save

- Designer toolbar **Save** (`e15`, enabled in the fresh untargeted snapshot `S11`) clicked **once**.
- Response: a save toast appeared in the DOM, read by `find` as **"Save — Form [FX_ItemsTile] and global object(s) were saved."** (the toast is in the page DOM; it was not visible in screenshot `t3-04`, which was taken after it had gone or before it rendered in the viewport; both are unresolved).
- Post-Save Save state (`S12`, untargeted depth-2): **Save disabled**; Undo disabled; Regenerate Form disabled; FX_ItemsTile open in the Designer; tab `FX_ItemsTile closable`, selected; status bar `ScopeType: User`.
- Post-Save values (`t3-04`): Size `40; 4`, Width `40`, Height `4`, Unit `Char`. Console after Save: **2** (no rise).
- No server-event error, no prompt, no dialog. The Save was not retried.

### Step 7: post-Save state

- FX_ItemsTile remains open and clean. Not closed, not reopened. No component edited; no collection changed; no template; no global object; no Regenerate; no unload; no Delete Form Definition.

### Ref-not-found recovery (one)

- A targeted snapshot of the toolbar (`e11`) after the Height verification returned `Ref e11 not found`. Recovery: one fresh untargeted depth-2 snapshot (`S11`), and the Save reference was taken from that snapshot only. This is the single recovery used in T3.

### T3 observations (observed only)

1. The Layout group is collapsed by default on this Form; a single click selects the row but does not expand it, and a double-click expands it.
2. Size is a group with Width and Height children (Width/Height rows, values as plain numbers, no unit suffix in the value; the Unit row above shows `Char`).
3. The Size summary (`69; 21` before, `40; 21`/`40; 4` after the edits) mirrors the child values.
4. The Width and Height editors open on a single click of the value cell; the editor textbox is the active element in the tree snapshot.
5. After Save the Save and Undo icons are disabled again (clean state) and the Size stays `40; 4`.
6. The canvas outline became visibly smaller after the Width/Height change (observed in `t3-03` and `t3-04`; not measured).

### T3 procedural deviations

- The Layout group needed a double-click (not the single click the brief implied); the first single click only selected the row.
- The Width and Height edits were made through the Properties tree value cells (click, then a plain fill, then Tab). Tab was used only to commit the two Size fields, not to pick a list option.
- One targeted-snapshot reference error (`e11`, toolbar) recovered with one fresh untargeted snapshot, as the brief allows.
- The save toast text was read with a `find` search on the page (not a snapshot file, not console inspection). The toast was not captured in a screenshot.

## Cumulative action audit (through T3)

Counts are cumulative across T1, T2 and T3. T3 values are from this task.

| Category | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list / tab select | 1 / 1 | 1 / 1 | 1 / 1 | 3 / 3 |
| Snapshot calls | 16 (untargeted 4, targeted 12) | 27 (untargeted 6, targeted 21 incl. 1 Ref-not-found) | 13 (untargeted 4, targeted 9 incl. 1 Ref-not-found) | 56 (untargeted 14, targeted 42; 2 Ref-not-found) |
| Find calls (read-only; not used for clicks) | 7 | 6 | 1 (Save toast text) | 14 |
| Wait | 1 | 0 | 0 | 1 |
| Successful clicks | 10 | 21 | 6 (Layout single, Layout double-click, Size double-click, Width cell, Height cell, Save) | 37 |
| Clicks timed out | 0 | 1 (Save Template checkbox) | 0 | 1 |
| Select Form dialog opens | 1 (Cancel 1; OK 0; row double-click 0) | 0 | 0 | 1 (Cancel 1; OK 0; row double-click 0) |
| Form Wizard Selection opens | 1 (Cancel 1; OK 0) | 1 (OK 1; Cancel 0) | 0 | 2 (Cancel 1; OK 1) |
| Lists opened | 2 | 3 | 0 | 5 |
| Wizard pages reached | 0 | 4 | 0 | 4 |
| Wizard Next / Back / Finish | 0 / 0 / 0 | 3 / 0 / 1 | 0 / 0 / 0 | 3 / 0 / 1 |
| Completion messages answered OK | 0 | 1 | 0 | 1 |
| Prompts (other than completion) | 0 | 0 | 0 | 0 |
| Type actions | 3 (Select Form filter) | 1 (Name fill) | 2 (Width fill `40`; Height fill `4`) | 6 |
| Key presses | 2 (Ctrl+A in Select Form filter) | 0 | 2 (Tab after Width; Tab after Height) | 4 |
| Per-field entries (T3) | — | — | Width 1 (69 → 40, no correction); Height 1 (21 → 4, no correction) | — |
| Field corrections | 0 | 0 value corrections (1 corrected click attempt on Save Template) | 0 | 0 value corrections |
| Screenshots | 8 | 13 | 4 (`t3-01`, `t3-02`, `t3-03`, `t3-04`) | 25 |
| Form closes | 0 | 1 (FX_CustomerPortal, clean, no prompt) | 0 | 1 |
| Forms created | 0 | 1 (FX_ItemsTile, Tile) | 0 | 1 |
| Forms reopened | 0 | 0 | 0 | 0 |
| Templates created | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 0 | 1 (response: "Form [FX_ItemsTile] and global object(s) were saved.") | 1 |
| Regenerate Form / Unload / Delete Form Definition / Select Form OK | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |
| Components edited / global objects created or changed | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Form properties changed | 0 | 0 | 2 (Layout Size Width and Height on FX_ItemsTile only) | 2 |
| Collections changed | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Ref-not-found errors | 0 | 1 (recovered) | 1 (recovered) | 2 |
| Timeouts (other) | 0 | 0 | 0 | 0 |
| Session expiries / re-logins | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Navigations / refreshes / restarts | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Checkout, FormSync, deployment, runtime actions | 0 | 0 | 0 | 0 |
| Console error count | 2 throughout | 2 throughout | 2 throughout (before and after Save) | 2 |

Console messages were not read in T1, T2 or T3.

## Worker-written file inventory (through T3)

Written by the worker (explicit writes):
- `experiments/EXP-115-hello-world-part-8-phase-1a-fx-itemstile-form.md` (created in T1; updated in T2 and T3)
- T1 screenshots (8): `evidence/EXP-115/t1-00-form-menu-state.png`, `t1-01-definition-submenu-state.png`, `t1-02-select-form-dialog.png`, `t1-03-select-form-filter-fx-itemstile.png`, `t1-03b-select-form-filter-fx-itemstile-typed.png`, `t1-04-select-form-positive-control-fx-orders.png`, `t1-05-wizard-category-list.png`, `t1-06-wizard-classic-list.png`
- T2 screenshots (13): `evidence/EXP-115/t2-01-wizard-selection-classic-tile-before-ok.png` through `t2-13-components-tree-expanded.png` (`t2-01`, `t2-02`, `t2-03`, `t2-04`, `t2-05`, `t2-06`, `t2-07`, `t2-08`, `t2-09`, `t2-10`, `t2-11`, `t2-12`, `t2-13`)
- T3 screenshots (4): `evidence/EXP-115/t3-01-layout-group-expanded.png`, `t3-02-size-expanded-initial-69-21.png`, `t3-03-size-40-4-before-save.png`, `t3-04-save-response-toast.png`

Written by the browser tool during worker actions (not explicit worker writes; not read):
- Snapshot files, T3 (6, one per click action): `evidence/playwright/page-2026-10-18T14-19-38-836Z.yml` (Layout single click), `14-19-52-327Z` (Layout double-click), `14-20-00-877Z` (Size double-click), `14-20-14-660Z` (Width cell click), `14-20-30-335Z` (Height cell click), `14-21-01-615Z` (Save click)
- Tool-written console log, T3 tab-list event (not read): `evidence/playwright/console-2026-10-18T14-19-27-355Z.log`
- Snapshot files and console logs from T1 and T2 are listed in the earlier inventory and are unchanged.
- Outside the repository: the 65,942-character snapshot from T1 (worker tool-results directory; not read; not used).

No other files were written. No templates, Forms (other than FX_ItemsTile) or global objects were created.

## Cleanup inventory (through T3)

- Form **FX_ItemsTile** (User scope, Tile; Data Source FX_Items; Primary Collection FX_Items; one property FX_Picture; generated components FX_PictureStatic and FX_PictureEdit). Created in T2. Layout Size now 40; 4 (saved once in T3). Cleanup needed later (operator authorization).
- No template (Save Template unchecked in T2). No other object created.

## Final state (end of T3)

- Designer tab 0: **FX_ItemsTile** open and clean (Save disabled, Undo disabled, Regenerate Form disabled), User scope, Properties Form tab with Layout expanded and Size `40; 4`, Details panel expanded on the Components tab. No dialog, menu, wizard, list or editor open. No unsaved change.
- FX_CustomerPortal: closed (not open in the Designer); not changed.
- Console: 2 errors, 0 warnings.

## Acceptance status after T3

- **AC-1**: met in T1 (unchanged).
- **AC-2**: met for T2 (unchanged). T3 part met: Layout Size set to Width 40 and Height 4; exactly one Designer Save with response recorded (toast text read from the DOM); console count recorded before and after the Save and after each action; at most one correction per field (none needed).
- **AC-3**: not started (T4 readback). Only the same-session Save is observed; the ordinary close and reopen have not happened.
- **AC-4**: no violation so far (no other Form created or changed; no template; no component edited; no global object; no Regenerate, unload, Delete Form Definition or Select Form OK; the one Save is the T3 Save; no runtime or checkout action; User scope only).
- **AC-5**: not started (T4 final audit).

## T4: ordinary close, reopen readback (cycle 3, 2026-10-18)

### Sources and starting state

- `AGENTS.md` re-read; the T4 part of this record read (the T3 section and the "Next step" that named T4).
- Tabs listed before the first selection: tab 0 = Designer (`MGForm=FX_ItemsTile`), tab 1 = portal. Tab 0 selected (succeeded).
- Starting state (untargeted depth-2 snapshot): FX_ItemsTile the only open Form tab, selected; **Save disabled**; Undo and Redo disabled; Regenerate Form disabled; Properties Form tab selected; Layout group expanded with Size `40; 4`; status bar `ScopeType: User`; no dialog or menu open. Console **2 errors, 0 warnings** (starting count). No session expiry, sign-in, prompt or server-event error.

### Step 1: close FX_ItemsTile (once)

- Targeted snapshot of the Form tablist (`e244`) gave the close control `closable FX_ItemsTile` (`e247`). One click on it.
- **Prompts: none.** No save prompt appeared, so no answer was given. Confirmed closed by an untargeted snapshot: the Form tablist is empty, no Form tab remains, Save disabled, and the URL lost `MGForm=`.
- Console after the close: 2.

### Step 2: reopen through the Form menu recent-forms entry (once)

- Clicked the Form menu (`e3`). A targeted snapshot of the menu listed, at the top of the recent-forms entries, **`FX_ItemsTile`** (`e674`), followed by FX_CustomerPortal, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, FX_Items, then IDO Properties and IDOs. (FX_ItemsTile was absent from this list in T1; its appearance now is observed.)
- Clicked `FX_ItemsTile` (`e674`) once. Select Form was not opened; no direct URL was used.
- After the click: Form tab `FX_ItemsTile closable`, selected; URL `MGForm=FX_ItemsTile`; Save disabled; Undo disabled; User scope. Console 2.

### Step 3: readback (read-only; no editor, dialog or list opened)

- **Properties** (Form tab; untargeted and targeted snapshots of the Properties tree; screenshot `t4-01`):
  - Name `FX_ItemsTile`
  - Version `User version for user <signed-in operator>` (the panel truncates it to "User version for us…"; the full text is in the accessibility tree)
  - Device Type `Default`
  - Form Type `Tile`
  - Is Master `True`
  - Layout group (expanded on arrival): Splitter `None`; Pane 0 Scroll Bars `As Needed`; Pane 1 Scroll Bars `As Needed`; Form Pages (not used); **Unit `Char`**; **Size `40; 4`**; Width `40`; Height `4`; Synchronize FlexLayout attributes `True`.
  - Verified exactly: Width 40, Height 4, Unit Char. No value was edited, and no editor was opened.
- **Details > Collections** (view only; targeted snapshot `e932`; no separate screenshot): one entry, **"Primary Collection: FX_Items"** (the entry was not expanded).
- **Details > Components** (view only; the grid's Expand control used once; screenshot `t4-02`): **Pane (00)** with, in order:
  1. **FX_PictureStatic**: Type `Static`; Data Source blank (no binding); Pane `0`; Tab `0`.
  2. **FX_PictureEdit**: Type `Edit`; Data Source (binding) `object.FX_Picture`; Pane `0`; Tab `1`.
  - No component was selected, edited, moved or deleted.
- **Canvas** (`t4-01`, `t4-02`): the Form outline is a small rectangle at the top left of the canvas, smaller than the pre-T3 canvas; inside it a narrow box at the left (the Static) and a grey box to its right (the Edit). No picture is rendered in the grey box. The canvas is not measured in pixels.
- Console after every read action: 2.

### Ref-not-found recoveries in T4 (two; each followed by one fresh untargeted snapshot)

1. The Details "Expand Panel" control (`e716`) returned `Ref not found` after a targeted snapshot. Fresh untargeted snapshot; the same control reference appeared in it and the click then succeeded.
2. The Components tab (`e924`) returned `Ref not found` after a targeted snapshot. Fresh untargeted snapshot; the tab reference appeared in it and the click then succeeded.

### T4 observations (observed only)

1. The reopened Form shows Size `40; 4` with Unit `Char`, the same values saved in T3.
2. The Components tree after reopen shows the same two components as T2 (FX_PictureStatic Static; FX_PictureEdit Edit bound to `object.FX_Picture`), in the same order and with the same Pane/Tab values.
3. The Collections tree after reopen shows Primary Collection FX_Items, as in T2.
4. The recent-forms entry for FX_ItemsTile appeared at the top of the list after the close, and it opened the Form.
5. The Details panel was collapsed on arrival and the Properties Layout group was expanded (both are view states).

### Step 4: leave clean

- FX_ItemsTile open, selected, clean: Save disabled, Undo disabled, Regenerate Form disabled; User scope; the Details panel is expanded on the Components tab (a view state). No dialog, menu, list, wizard or editor is open. Console 2.
- No Designer Save in T4. No Regenerate. No unload. No Select Form. No component or collection change. No template.

## T3 qualifications (documented in T4, as the brief requires)

1. **The save toast.** The text "Form [FX_ItemsTile] and global object(s) were saved." was found in the page text by a `find` search after the T3 Save. It was **not visible** in screenshot `t3-04`, which was taken after the Save, so the text is recorded from the DOM, not from the captured image. The phrase is generic: it names "global object(s)" without naming any. **The worker modified no global object**; the Save covered only FX_ItemsTile's Layout Size. Do not infer from the generic toast that a global object changed.
2. **`t3-01-layout-group-expanded.png`.** Despite its filename, this capture was taken while the Layout group was still **collapsed** (only the Layout row was selected; the pane shows the "Layout" description). The expanded state is shown by `t3-02`, not `t3-01`. The filename is not corrected (no rename, per the brief).
3. **Screenshots reopened in T3.** The operator's note says two saved screenshots were reopened in T3. The worker's own record shows **four** T3 screenshots were opened with `Read` (`t3-01` to `t3-04`), each to confirm the state being recorded rather than to take new data. In T2 the worker also opened the T2 captures (`t2-01` to `t2-13`) to confirm each state. The worker did not retake or re-save any T3 evidence, and no Save was retried.

## Final audit (documentation only; written in T4)

### AC disposition, with decisive evidence

- **AC-1: met (T1; unchanged).** Sources reviewed at the start of T1 and re-checked at T2, T3 and T4. Session usable; User scope on every task. FX_CustomerPortal open and clean at the gate (T1). FX_ItemsTile absent in T1 from the Select Form list and the recent-forms list; the FX_Orders positive control returned two rows (`t1-03b`, `t1-04`); the recent-forms list was viewed (`t1-00`). Form Wizard Selection recorded: Category options (7) and Classic Wizard options (7, including Tile "Tile form to be hosted by another form") (`t1-05`, `t1-06`). Baseline console error count 2. **Limitation:** absence is observed in one session; a zero-row Select Form result is not proof of absence (EXP-102 finding 5), so the recent-forms check and the positive control were both used.
- **AC-2: met.** T2 (`t2-01` to `t2-13`): FX_CustomerPortal closed clean once, with no prompt (T2 Step 1). The Tile wizard run once to Finish, with every page recorded before any change (four pages). Name FX_ItemsTile (one plain fill, no correction). Data Source FX_Items (picker, one selection, no correction). Property page: available and selected lists recorded; `<<`, then FX_Picture selected, then `>`; only FX_Picture remained selected (`t2-04`, `t2-05`). Save Template unchecked after one timed-out checkbox click and one corrected label click (`t2-07`, `t2-08`); no template created. Completion message "Process Completed Successfully" answered OK once (`t2-09`). FX_ItemsTile open, User scope, clean, with Properties, components and Collections recorded (`t2-10` to `t2-13`). T3: Layout Size Width 40 and Height 4 set (one plain fill each, no correction), one Designer Save, response "Form [FX_ItemsTile] and global object(s) were saved." read from the DOM; Save disabled afterwards (`t3-02` to `t3-04`). Console 2 at every action. **Limitation:** the save response is the DOM text; `t3-04` does not show it.
- **AC-3: met for the same session; the persistence claim is limited.** After one ordinary close (no prompt) and one reopen through the recent-forms entry, FX_ItemsTile opened in User scope with Size `40; 4` (Width 40, Height 4, Unit Char) (`t4-01`; targeted Properties snapshot). The generated components (FX_PictureStatic Static; FX_PictureEdit Edit bound to `object.FX_Picture`) and the Primary Collection FX_Items match T2. The Form is open and clean (Save disabled). Evidence: readback screenshot `t4-02` (the reopened Form with its tree and Properties showing the Size). **Limitation:** same-session UI observation only. This does not verify a new browser session, a runtime Web Client open, or database-level persistence. Cross-session durability is not claimed.
- **AC-4: no violation found.** Other Forms: none created or changed; FX_CustomerPortal only closed (T2). Template: none (Save Template unchecked; `t2-08`). Components: none edited, moved, renamed or deleted (FX_ItemsTile's two components were only read). Global objects: none created or changed by the worker; no Binding dialog, string, image or theme was opened. Regenerate Form: never clicked (disabled in every snapshot). Unload: never invoked. Delete Form Definition: never clicked. Select Form OK: never clicked (Select Form opened once in T1 and left with Cancel). Designer Save: exactly once (T3). Runtime action: none. Checkout action: none. User scope throughout; no Site Default or Group scope chosen. No task boundary overrun: T1 stopped with no dialog open; T2 stopped at the Size boundary (no Save and no Size change); T3 stopped after its single Save; T4 stopped after the readback and this audit.
- **AC-5: met.** This section gives the disposition, the cumulative action audit, the worker-written file inventory, the cleanup inventory and the final state.

### Cumulative browser action audit (T1 to T4; exact counts)

Worker-side counts. The controller's own counts were not available to the worker; each row states the worker's definition.

| Category | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Tab list calls / tab selects | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 4 / 4 |
| Snapshot calls, total | 16 | 27 | 13 | 12 | **68** |
| – untargeted | 4 | 6 | 4 | 7 | 21 |
| – targeted (element) | 12 | 21 | 9 | 5 | 47 |
| Find calls (read-only; never used for a click) | 7 | 6 | 1 | 0 | 14 |
| Wait | 1 | 0 | 0 | 0 | 1 |
| Successful clicks | 10 | 21 | 6 | 6 | **43** |
| Clicks that timed out (`visible, enabled and stable`) | 0 | 1 (Save Template checkbox) | 0 | 0 | 1 |
| Ref-not-found errors (not timeouts; each recovered by one fresh untargeted snapshot) | 0 | 1 (`e3594`) | 1 (`e11`) | 2 (`e716`, `e924`) | 4 |
| Select Form dialog opens (OK / Cancel / row double-click) | 1 (0 / 1 / 0) | 0 | 0 | 0 | 1 (0 / 1 / 0) |
| Form Wizard Selection opens (OK / Cancel) | 1 (0 / 1) | 1 (1 / 0) | 0 | 0 | 2 (1 / 1) |
| Other dialogs opened | 0 | 0 | 0 | 0 | 0 |
| Lists opened (Category, Wizard, Data Source) | 2 | 3 | 0 | 0 | 5 |
| Wizard pages reached | 0 | 4 | 0 | 0 | 4 |
| Wizard Next / Back / Finish | 0 / 0 / 0 | 3 / 0 / 1 | 0 / 0 / 0 | 0 / 0 / 0 | 3 / 0 / 1 |
| Property selection clicks (`<<`, select FX_Picture, `>`) | 0 | 3 | 0 | 0 | 3 |
| Completion messages answered OK | 0 | 1 | 0 | 0 | 1 |
| Prompts seen (texts and answers) | 0 | 0 | 0 | 0 | 0 |
| Type actions (fills and filter entries) | 3 | 1 | 2 | 0 | 6 |
| Key presses | 2 (Ctrl+A) | 0 | 2 (Tab) | 0 | 4 |
| Per-field entries (Name, Data Source, Width, Height) | 0 | 2 | 2 | 0 | 4 |
| Field value corrections | 0 | 0 | 0 | 0 | **0** |
| Screenshots taken | 8 | 13 | 4 | 2 | **27** |
| Form closes (by tab control) | 0 | 1 (FX_CustomerPortal) | 0 | 1 (FX_ItemsTile) | 2 |
| Form reopens (recent-forms entry) | 0 | 0 | 0 | 1 (FX_ItemsTile) | 1 |
| Forms created | 0 | 1 (FX_ItemsTile) | 0 | 0 | 1 |
| Templates created | 0 | 0 | 0 | 0 | **0** |
| Designer Saves (responses) | 0 | 0 | 1 ("Form [FX_ItemsTile] and global object(s) were saved.", from the DOM) | 0 | 1 |
| Properties edited (Width, Height) | 0 | 0 | 2 | 0 | 2 |
| Regenerate Form / Unload / Delete Form Definition / Select Form OK | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |
| Components edited / moved / deleted | 0 | 0 | 0 | 0 | 0 |
| Collections changed | 0 | 0 | 0 | 0 | 0 |
| Global objects created or changed by the worker | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 | 0 |
| Session expiries / re-logins | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Navigations / refreshes / restarts | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Checkout, FormSync, deployment, runtime actions | 0 | 0 | 0 | 0 | 0 |
| Console error count (start; after actions) | 2; 2 | 2; 2 | 2; 2 | 2; 2 | 2 throughout (never rose) |

Console messages were not read in any task. The per-task totals match the earlier per-task entries in this record.

### Worker-written file inventory (T1 to T4)

Explicit worker writes:
- `experiments/EXP-115-hello-world-part-8-phase-1a-fx-itemstile-form.md` (created T1; updated T2, T3 and T4).
- Screenshots (27), all in `evidence/EXP-115/`:
  - T1 (8): `t1-00-form-menu-state.png`, `t1-01-definition-submenu-state.png`, `t1-02-select-form-dialog.png`, `t1-03-select-form-filter-fx-itemstile.png`, `t1-03b-select-form-filter-fx-itemstile-typed.png`, `t1-04-select-form-positive-control-fx-orders.png`, `t1-05-wizard-category-list.png`, `t1-06-wizard-classic-list.png`.
  - T2 (13): `t2-01-wizard-selection-classic-tile-before-ok.png`, `t2-02-wizard-page1-before-change.png`, `t2-03-wizard-page1-filled.png`, `t2-04-wizard-page2-properties-before-change.png`, `t2-05-wizard-page2-only-fx-picture-selected.png`, `t2-06-wizard-page3-attributes-before-change.png`, `t2-07-wizard-page4-save-template-before-change.png`, `t2-08-wizard-page4-save-template-unchecked.png`, `t2-09-completion-message.png`, `t2-10-new-form-fx-itemstile-after-finish.png`, `t2-11-details-components-collections.png`, `t2-12-components-tree.png`, `t2-13-components-tree-expanded.png`.
  - T3 (4): `t3-01-layout-group-expanded.png` (captured while collapsed; see T3 qualification 2), `t3-02-size-expanded-initial-69-21.png`, `t3-03-size-40-4-before-save.png`, `t3-04-save-response-toast.png`.
  - T4 (2): `t4-01-reopened-form-initial-view.png`, `t4-02-reopened-form-components-and-size.png`.
- Total explicit worker writes: **1 record + 27 screenshots = 28 files**.

Tool-generated artifacts (written by the browser tool, not by the worker; not read; listed for the harness inventory):
- Snapshot files in `evidence/playwright/` (46 in total):
  - T1 (13): `page-2026-10-18T14-04-29-261Z.yml`, `14-04-56-222Z`, `14-05-18-691Z`, `14-05-43-028Z`, `14-05-53-674Z`, `14-06-03-795Z`, `14-06-16-058Z`, `14-06-26-531Z`, `14-06-37-281Z`, `14-06-52-365Z`, `14-07-00-931Z`, `14-07-18-730Z`, `14-07-24-784Z`.
  - T2 (21): `14-11-10-757Z`, `14-11-21-808Z`, `14-11-32-748Z`, `14-11-40-936Z`, `14-11-49-010Z`, `14-11-54-525Z`, `14-12-07-996Z`, `14-12-34-037Z`, `14-12-42-355Z`, `14-12-55-284Z`, `14-13-16-587Z`, `14-13-23-646Z`, `14-13-30-478Z`, `14-13-43-850Z`, `14-13-57-255Z`, `14-14-26-835Z`, `14-14-39-559Z`, `14-14-52-315Z`, `14-15-25-828Z`, `14-15-40-967Z`, `14-15-56-584Z`.
  - T3 (6): `14-19-38-836Z`, `14-19-52-327Z`, `14-20-00-877Z`, `14-20-14-660Z`, `14-20-30-335Z`, `14-21-01-615Z`.
  - T4 (6): `14-24-46-888Z`, `14-24-55-581Z`, `14-25-03-175Z`, `14-25-31-137Z`, `14-25-51-076Z`, `14-26-03-698Z`.
- Console logs in `evidence/playwright/` (tool-written; not read): `console-2026-10-18T14-04-16-181Z.log` (T1), `console-2026-10-18T14-11-00-505Z.log` (T2), `console-2026-10-18T14-19-27-355Z.log` (T3), `console-2026-10-18T14-24-35-432Z.log` (T4). Four files.
- Outside the repository: one 65,942-character untargeted snapshot from T1, saved to the worker's tool-results directory (not read; not used).

Repository confinement is supported by this worker inventory; the operator's git review is authoritative. The worker wrote no other files: no templates, no Forms other than FX_ItemsTile, no global objects, and no edits to AGENTS.md, tutorial sources, recipes or other experiments.

### Cleanup inventory (for the operator; no cleanup performed or authorized in this run)

- **Form FX_ItemsTile** (User scope; Tile; Device Type Default; Data Source FX_Items; Primary Collection FX_Items; property FX_Picture; generated components FX_PictureStatic (Static) and FX_PictureEdit (Edit, `object.FX_Picture`) under Pane (00); Layout Size 40; 4, Unit Char). Created by the wizard in T2; Size saved in T3. This Form is the only cleanup item from this run. Removing it needs operator authorization; the worker did not and does not delete it.
- No template (Save Template unchecked; no template artifact).
- No global object (string, image, theme, class, IDO, SQL object or variable) was created or changed by the worker.
- FX_CustomerPortal: closed only; not changed.
- For the operator: the Phase 1 component edits (remove FX_PictureStatic, convert FX_PictureEdit to Static, the three new Statics) are out of scope and were not performed. FX_PictureStatic and FX_PictureEdit remain as generated.

### Final state (end of T4)

- Designer tab 0: **FX_ItemsTile** open, selected and clean (Save and Undo disabled; Regenerate Form disabled); User scope (`ScopeType: User`); Properties Form tab with the Layout group expanded and Size `40; 4`; Details panel expanded on the Components tab.
- No dialog, menu, list, editor, wizard or unsaved change open.
- FX_CustomerPortal: closed; unchanged.
- Console: 2 errors, 0 warnings (unchanged throughout).

### Findings (observed only; knowledge state)

1. Form > Definition > Design opens the Select Form dialog in this build (observed; T1). The "Open" label does not appear in the Form menu.
2. A plain Playwright fill does not update the Select Form filter; slow per-key typing does (observed; T1; candidate procedure, one occurrence).
3. The Category list has 7 options and the Classic Wizard list has 7 options, including Tile (observed; T1 and T2).
4. The Wizard page 4 Save Template checkbox is covered by a span that intercepts pointer events; a click on the label toggled it (observed; T2; one occurrence).
5. Wizard page 2 defaults to all six FX_ properties selected; `<<`, then select FX_Picture, then `>` leaves exactly FX_Picture (observed; T2; one occurrence).
6. The generated Form has components FX_PictureStatic and FX_PictureEdit (`object.FX_Picture`) (observed; T2 and T4).
7. The Layout group is collapsed on arrival; a double-click expands it; the Size row expands into Width and Height (observed; T3).
8. The save toast text is generic ("global object(s)") and was read from the DOM (observed; T3). No inference is drawn that a global object changed.
9. After an ordinary close and a recent-forms reopen, Size `40; 4`, the two components and the Primary Collection FX_Items are shown (observed; same session; T4).
10. The recent-forms list placed FX_ItemsTile at the top after the close (observed; T4).
11. Nothing is replay-verified. No cross-session, database-level or runtime durability is claimed.

### Open questions and limits

- Whether the saved Size and components persist across a new browser session, a metadata reload or runtime use (not tested; outside this run).
- The rendered Tile in the runtime Web Client (not tested; no runtime action was permitted).
- Whether the generic save toast's "global object(s)" wording reflects any change beyond FX_ItemsTile (not determined; the worker changed no global object).
- Whether the Select Form dialog lists Flex Forms such as FX_CustomerPortal (EXP-102 finding 5; not tested).
- The full Version text is visible only in the accessibility tree; the panel truncates it.
- Next step: none inside this experiment. The rest of Part 8 Phase 1 (component edits) and later phases need a new operator brief; this run stops here.

## Outcome (operator, 2026-10-18)

Accepted (observed), with qualifications. **Hello World Part 8 Phase 1a is complete: the User-scope Tile Form FX_ItemsTile (tutorial "Items Tile") exists with Primary Collection FX_Items, the generated components FX_PictureStatic (Static) and FX_PictureEdit (Edit, `object.FX_Picture`), and Layout Size 40; 4 (Unit Char), read back after an ordinary close and reopen.** Run R-20261018-220359-5LB8 (4 worker tasks), completed/accepted by the coordinator without a pause.

- Created, for later cleanup (User scope): Form `FX_ItemsTile` through New Form Definition > New Form > Category Classic > Wizard Tile; page 1 Name FX_ItemsTile, Data Source FX_Items (Form Type Tile and Form Layout GridLeft read-only, Device Type Default); page 2 only FX_Picture in Primary Collection; page 3 unchanged; page 4 Save Template unchecked (no template). One Finish ("Process Completed Successfully", OK). Layout Size changed from 69; 21 to 40; 4 with one Designer Save (toast "Form [FX_ItemsTile] and global object(s) were saved."). FX_CustomerPortal was only closed clean (no save prompt). No global object, no component edit, no Regenerate, no unload, no Select Form OK.
- Screenshots viewed by the operator assistant: `t2-05-wizard-page2-only-fx-picture-selected` (Form Wizard - Tile, "Select properties to include for the primary collection.", Primary Collection list holds only FX_Picture; the Properties list shows the other FX_ properties and system properties); `t4-02-reopened-form-components-and-size` (after reopen: FX_ItemsTile, Form Type Tile, Is Master True, Unit Char, Size 40; 4 with Width 40 and Height 4; Components Pane (00) > FX_PictureStatic Static, FX_PictureEdit Edit object.FX_Picture; User scope; Save disabled).
- Console (operator assistant, tool-written logs `evidence/playwright/console-2026-10-18T14-*`): only the baseline "unload" permissions-policy errors. The worker's count stayed at 2 throughout.
- Findings (observed):
  1. Form Wizard Selection offers seven Categories (Classic, ExtDataSource, Flex, Form Builder, IDS, New Data, REST); Classic offers seven Wizards (Build from Scratch, Detail-Only, Grid-Only, Multi-View, Query, Report, Tile "Tile form to be hosted by another form").
  2. The Tile wizard has four pages: (1) Name, Form Type Tile, Form Layout GridLeft, Device Type, Data Source, Query Form, Comments; (2) property selection with all six FX_ properties preselected (FX_Cost, FX_Description, FX_Item, FX_Picture, FX_UM, FX_UMsDescription) and `>>`, `>`, `<`, `<<` controls; `<<` then FX_Picture then `>` leaves one; (3) one attribute row per property (Caption, Component Class blank); (4) Save Template, checked by default.
  3. The Save Template checkbox click timed out (intercepted by a span); a click on its label toggled it.
  4. A Tile Form gets a Static/Edit pair per selected property (FX_PictureStatic Tab 0, FX_PictureEdit Tab 1) and default Size 69; 21.
  5. The Select Form filter ignored a plain fill and filtered only with key-by-key typing; the dialog was reached through Form > Definition > Design. A Form opened by the wizard carries `MGForm=` in the URL; Cancel of the wizard selection drops it while the Form stays displayed.
  6. The Form's Layout group expanded only on a double-click.
- Qualifications accepted by the operator: the T3 Save toast read from page text, not a screenshot; the reopened Collections entry verified by a targeted snapshot; two stale-reference recoveries and one documentation-edit error in T4 (corrected); partial AGENTS.md rereads in T2-T4 relying on the full T1 read; same-session close and reopen only.
- Confinement (git status): only `evidence/EXP-115/` and this record were written by the run in the repository.
- Cleanup inventory: Form FX_ItemsTile (User scope).
- Next: Part 8 Phase 1b on FX_ItemsTile (01:25-03:18): delete FX_PictureStatic; change FX_PictureEdit to a Static named StaticPicture with Image Only and No Colon True; add Statics StaticItem (Theme Class FX_Header, Left, Binding Type Property FX_Item, 27; 1.5, No Colon), StaticItemDescription (Left, FX_Description, 20; 1.5, No Colon) and StaticCost (Right, FX_Cost, 8; 1.5, No Colon). The narrated unload of global form objects stays out unless authorized.
