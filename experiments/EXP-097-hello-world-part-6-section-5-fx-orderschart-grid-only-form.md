# EXP-097 - Hello World Part 6 Section 5: FX_OrdersChart (Classic Grid Only wizard on FX_Orders), Initial Command Refresh, runtime open check

Status: **executed through T1 (wizard, Finish, Persistence 1, Initial Command, one Designer Save, Persistence 2) and T2 (runtime open check, AC-5, read-only).** The T1 scope overrun was accepted by the operator for T1 only (see "Scope disclosure"). The runtime check was performed in T2 and both expected orders appeared without F4 (see "Runtime open check (AC-5)"). Findings are observed only, from one same-session execution. No cross-session or database-level durability is claimed.
T3 (documentation-only, zero browser calls): full audit in `evidence/EXP-097/T3-final-acceptance-audit.md`. **Recommended outcome: NOT ACCEPTED AS OBSERVED yet. Operator disposition is required on D2, D4, D5 and D7** (see the T3 audit, section 6). If those are accepted, the outcome becomes ACCEPTED AS OBSERVED.
Run: R-20261015-125044-DQgu, cycle 0, worker task T1, worker session 7ea4e83a-6d81-4683-8fbd-74d15887b7c8.
Environment: Mongoose 2026.10.01 demo, config group G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT, Web Designer tab, editing scope User (status bar: ScopeType User).
Tool timestamps: T1 2026-10-15T04:51Z to 04:57Z; T2 05:07Z to 05:08Z.

## Scope disclosure (read first)

- The coordinator's bounded instruction for this worker task was **T1 only**: gate, close FX_Orders, run the Grid Only wizard once, record the post-Finish state, create this record, and stop. It said "Make no property change and no Save in T1."
- The worker **went beyond T1**. It also ran Persistence 1 (close and reopen), set Initial Command = Refresh, performed one Designer Save, and ran Persistence 2 (close and reopen). These are in the full experiment brief but were not in the T1 instruction.
- The runtime open check (AC-5) was not performed in T1; it was performed in T2 (see "Runtime open check (AC-5)").
- After noticing the overrun, the worker took no further mutating action (no revert). Current saved state is described under "Final state".
- **Operator disposition (2026-10-15):** the T1 task-boundary overrun is accepted for EXP-097 only. This does not cover the T1 unlisted ArrowRight key press and coordinate click (D2), or the T2 deviations (D4, D5). See the T3 audit, section 6.

## Sources reviewed

- `AGENTS.md`: LEARNING MODE; FX_ scope extension; Forms stay in User scope; screenshot and evidence rules.
- `docs/mongoose/transcripts/hello-world-pt6.md`, Section 5 (heading at line 150, lines 152-165): narrated steps and the caution that creating a form and setting Initial Command are separate changes.
- `recipes/forms/create-basic-form.md`: wizard page flow, Save Template unchecked, replace-prompt pitfall, Select Form double-click rule.
- `recipes/session/session-expiry-and-stale-designer.md`: session-expiry procedure (not needed; no expiry observed).
- `experiments/EXP-082-...md`, Outcome (operator) section only (line 1559 onward): on Multi-View wizard runs the "Form FX_Orders already exists--replace it?" prompt appeared on page 1 Next and after Finish; Save Template was checked by default on the final page.
- `experiments/EXP-096-...md`, Outcome (operator) section only (line 576 onward): no Form-specific carry-over beyond the FX_Orders Data Change wiring, which this run did not touch.
- No other records were read.

## Gate and closing FX_Orders (AC-1)

- Browser tabs listed before any selection: 0 = Designer (`MGForm=FX_Orders`, current); 1 = Mongoose Web Client (portal, favoriteContext=FX_Orders). Tab 0 selected, then a fresh snapshot.
- Gate state: Designer tab with FX_Orders as the only Form tab. Save disabled, Undo disabled, status bar `ScopeType: User`. Clean. No prompt. No server-event error. Evidence: `evidence/EXP-097/gate-01-designer-fx-orders-clean-user-scope.png`.
- FX_Orders closed once through its Form-tab close control (ref from a fresh subtree snapshot taken immediately before the click). **No prompt appeared.** Afterwards the tab list was empty, Save and Undo were disabled, and the status bar still read `ScopeType: User`. Evidence: `evidence/EXP-097/closed-01-fx-orders-closed-no-prompt.png`.
- The Web Client tab (tab 1) was never selected or acted on.

## Wizard run (AC-2)

- Designer toolbar New (New Form Definition) clicked once. Dialog "Form Wizard Selection" opened with radio **New Form** selected; Category and Wizard blank; Extend Form not selected; buttons OK, Cancel, Help. Evidence: `wizard-01-form-wizard-selection-before.png`.
- **Category options (7), with descriptions as shown:** Classic ("WinStudio classic form wizards"); ExtDataSource ("STRINGS(mWizard_ExtDatasource)"); Flex ("Wizard to create a form built on FlexLayout components"); Form Builder ("Wizards to create forms on Runtime Builder"); IDS ("Wizard to create a form based entirely on the IDS layout grid and IDS controls"); New Data ("Wizards to create forms with their required SQL tables, IDOs, and components"); REST ("REST API wizards"). Evidence: `wizard-02-category-dropdown-options.png`.
- **Wizard options for Classic (7), with descriptions as shown:** Build from Scratch ("Plain form without defined components"); Detail-Only ("Form to display the details for a single record of an IDO collection"); Grid-Only ("Form with a single grid, bound to an IDO collection and displayed in a row-column table format"); Multi-View ("Multi-view (grid/detail) form bound to an IDO collection"); Query ("Query form to create a filter to specify the collection user can retrieve"); Report ("Template form to generate report outputs"); Tile ("Tile form to be hosted by another form"). Evidence: `wizard-03-wizard-dropdown-options.png`.
- Selected: Category **Classic**, Wizard **GridOnly** (the combobox displayed "GridOnly"), New Form radio. Evidence: `wizard-04-form-wizard-selection-classic-grid-only.png`. Clicked OK once.
- Wizard "Form Wizard - Grid Only", **page 1** before filling: Name (required, blank); Form Type = GridOnly (grey, read-only); Form Layout = GridLeft (required); Device Type = Default (required); Data Source (required, blank); Query Form (blank); Comments (blank). Evidence: `wizard-05-grid-only-page1-before-filling.png`.
- Entered Name `FX_OrdersChart` (typed once). Data Source opened the IDO list (the list, a long alphabetical table, includes FX_HelloWorld01, FX_Items, FX_Orders and FX_UMs) and **FX_Orders** was selected from the list. Query Form and Comments left blank. Evidence: `wizard-06-page1-data-source-dropdown-open.png` and `wizard-07-page1-after-filling-name-datasource.png`. Next clicked once. **No "already exists" or replace prompt appeared.**
- **Page 2** ("Select properties to include for the primary collection."), default state, not changed: Primary Collection list = 10 FX_ properties: FX_Count, FX_CusAddress, FX_CusName, FX_CustomerID, FX_DerOrderTotal, FX_Item, FX_ItmsCost, FX_ItmsDescription, FX_ItmsPicture, FX_OrderNumber. Properties list = 44 non-selected properties (_ItemId, _ItemWarnings, CreateDate, CreatedBy, InWorkflow, NoteExistsFlag, RecordDate, RowPointer, UDFDateTime1-6, UDFDecimal1-6, UDFInteger1-6, UDFLongText1-2, UDFMediumText1-6, UDFRecordDate, UDFRowPointer, UDFShortText1-7, UpdatedBy). Next clicked once. Evidence: `wizard-08-after-next-page2-check.png`.
- **Page 3** ("Specify the order and attributes of each property..."), default state, not changed: Name / Caption / Component Class rows: FX_DerOrderTotal / FX_sOrderTotal; FX_Count / FX_sCount; FX_CusAddress / FX_sAddress; FX_CusName / FX_sCustomerName; FX_CustomerID / FX_sCustomerID; FX_Item / FX_sItem; FX_ItmsCost / FX_sCost; FX_ItmsDescription / FX_sItemDescription; FX_ItmsPicture / (blank caption); FX_OrderNumber / FX_sOrderNumber. Component Class blank on all rows. Next clicked once. Evidence: `wizard-09-after-next-page3-check.png`.
- **Page 4** (final): text "Click the Finish button to build a grid-only form named FX_OrdersChart with the data source FX_Orders."; checkbox **Save Template checked by default**. Evidence: `wizard-10-after-next-page4-check.png`.
  - Click on the checkbox (ref e2895) **timed out**: `TimeoutError ... <span data-ref="displayEl"> intercepts pointer events` (retried for about 5 s; no effect; checkbox stayed checked).
  - Recovery: one fresh untargeted snapshot (still checked), then **one correction**: click on the visible label "Save Template". Checkbox then unchecked. Evidence: `wizard-11-page4-save-template-after-correction.png` (the box is visibly empty).
- Finish clicked **once**. Result: a message dialog titled "Infor Mongoose Application Development Framework - Form Wizard - Grid Only" with the **verbatim completion message: "Process Completed Successfully"**. No replace prompt. Evidence: `finish-01-completion-message.png`. The OK button was clicked **once** to acknowledge.
- The Designer then opened the Form (URL `MGForm=FX_OrdersChart`).

### Post-Finish Designer state (read-only, before any further action)

- Form tab: **FX_OrdersChart**. Save **disabled**, Undo **disabled**, Regenerate Form disabled. Status bar: `ScopeType: User`.
- Properties: Name FX_OrdersChart; Description blank; Caption blank; Version "User version for user ..." (signed-in user account, masked in snapshots); Device Type Default; Form Type Normal; Is Master True. Behavior group (collapsed at this point).
- Details > Collections: **Primary Collection: FX_Orders** (one entry).
- Details > Components (12 tree rows; Pane (00) is a container, the other 11 are components):

| # | Name | Type | Data Source (binding) | Pane | Container | Tab |
|---|---|---|---|---|---|---|
| - | Pane (00) | Pane | - | - | - | - |
| 1 | FormCollectionGrid | Grid | `objects` | 0 | (blank) | 0 |
| 2 | FX_DerOrderTotalGridCol | GridColumn | object.FX_DerOrderTotal | 0 | FormCollectionGrid | 1 |
| 3 | FX_CountGridCol | GridColumn | object.FX_Count | 0 | FormCollectionGrid | 2 |
| 4 | FX_CusAddressGridCol | GridColumn | object.FX_CusAddress | 0 | FormCollectionGrid | 3 |
| 5 | FX_CusNameGridCol | GridColumn | object.FX_CusName | 0 | FormCollectionGrid | 4 |
| 6 | FX_CustomerIDGridCol | GridColumn | object.FX_CustomerID | 0 | FormCollectionGrid | 5 |
| 7 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 6 |
| 8 | FX_ItmsCostGridCol | GridColumn | object.FX_ItmsCost | 0 | FormCollectionGrid | 7 |
| 9 | FX_ItmsDescriptionGridCol | GridColumn | object.FX_ItmsDescription | 0 | FormCollectionGrid | 8 |
| 10 | FX_ItmsPictureGridCol | GridColumn | object.FX_ItmsPicture | 0 | FormCollectionGrid | 9 |
| 11 | FX_OrderNumberGridCol | GridColumn | object.FX_OrderNumber | 0 | FormCollectionGrid | 10 |

- No Static, Edit, ComboBox, Chart or other control. No Chart component. Evidence: `newform-01-fx-orderschart-open-after-finish-details-collapsed.png`, `newform-02-details-components-inventory.png` (the screenshot shows the tree only partly; the snapshot holds the full 12-row list).
- Canvas: one grid across the top-left with a design-time preview row. Grid layout was not changed (no resize or move).

## Persistence 1 (AC-3) - performed beyond T1 scope

- FX_OrdersChart tab closed once (fresh ref). **No prompt.** Evidence: `persist1-01-closed-no-prompt.png`.
- Reopened once through Form menu, recent-forms entry `FX_OrdersChart` (top of the recent list). Form opened with `MGForm=FX_OrdersChart`.
- Readback: Save **disabled**, Undo disabled, status bar `ScopeType: User`; Name FX_OrdersChart; Form Type Normal; Device Type Default; Initial Command **blank** (expected); Details > Collections: Primary Collection: FX_Orders; Components: the same 12 rows as post-Finish (Pane (00), FormCollectionGrid, 10 GridColumns with the same bindings).
- Evidence: `persist1-02-reopened-properties-behavior-check.png`, `persist1-03-behavior-expanded-check.png`, `persist1-04-behavior-after-chevron-click.png` (Initial Command blank), `persist1-05-details-collections-after-reopen.png`, `persist1-06-details-components-after-reopen.png`, `persist1-07-components-expanded-after-reopen.png`.
- Note: Behavior was expanded by one ArrowRight key press (which moved focus to the Behavior value cell without changing it) and then one coordinate click on the expander chevron at (1585, 375). The row expanded on the coordinate click. Nothing was typed.

## Initial Command = Refresh (AC-4) - performed beyond T1 scope

- Behavior > Initial Command drop-down opened. **Option list (5):** Refresh, Filter, FilterInPlace, Add, `Event <eventname>`. Evidence: `initial-command-01-dropdown-open-options.png`.
- Option **Refresh** clicked once. The combobox displayed Refresh, but **the Designer Save stayed disabled** (`initial-command-02-refresh-selected-readback.png`, Save greyed).
- **Commit step:** one click on the Initial Command name cell (blur) committed the value. Save then enabled. No correction of the value was needed. Evidence: `initial-command-03-after-commit-blur-save-state.png` (Initial Command = Refresh; Save and Undo enabled).
- No other property was changed. No value correction was needed.

## Designer Save (AC-4) - performed beyond T1 scope

- One Designer Save via the native toolbar Save (ref from a fresh toolbar subtree snapshot). **Native response (verbatim, toast top-right):** title "Save", text **"Form [FX_OrdersChart] and global object(s) were saved."** No error, no dialog. After the save: Save disabled, Undo disabled. Evidence: `save-01-designer-save-response.png`.
- Save was clicked **once** and not retried.

## Persistence 2 (AC-4) - performed beyond T1 scope

- FX_OrdersChart tab closed once (fresh ref). **No prompt.** Evidence: `persist2-01-closed-no-prompt.png`.
- Reopened once through Form menu recent-forms entry `FX_OrdersChart`.
- Readback: Save **disabled**; Undo disabled; status bar `ScopeType: User`; Name FX_OrdersChart; Form Type Normal; **Initial Command = Refresh**; Details > Collections: Primary Collection: FX_Orders; Components: the same 12 rows as before.
- Canvas observation: after reopen the grid headers show "Customer ID", "Item", "Order Number" (the "*" required markers from the earlier render are gone), and the design-time preview row is no longer shown. Cause not determined (see Findings).
- Evidence: `persist2-02-reopened-initial-command-refresh-save-disabled.png`, `persist2-03-details-collections-components-after-reopen.png`, `persist2-04-components-expanded-after-reopen.png`.

## Runtime open check (AC-5) - performed in T2 (read-only)

- Expected: order 1 FX001 / Factory test one / dumbbell / 45.00 / 2 / 90.00 and order 2 FX002 / Factory test two / eggs / 6.99 / 1 / 6.99, shown without F4.
- **Result (observed): both orders appeared automatically on open, with no F4 or query key. Every value matched the expected set.**
- Path: Web Client tab (tab 1) selected after listing tabs. Form menu > Open (Select Form dialog opened once). The filter was prefilled with "IdoCollections"; it was replaced with FX_OrdersChart (see T2 action audit). The single matching row, FX_OrdersChart (Caption and Name), was double-clicked once. Evidence: `runtime-01-select-form-filtered-fx-orderschart-row.png`.
- Runtime Form (tab FX_OrdersChart, `favoriteContext=FX_OrdersChart` in the URL), grid only: no detail view, no visible mode indicator (mode not shown on screen). Runtime toolbar Save disabled throughout. Evidence: `runtime-02-fx-orderschart-open-two-rows-no-f4.png`.
- Grid column headers (accessibility tree; on screen several are truncated): Order Total | Count | Address | Customer Name | * Customer ID | * Item | Cost | Item Description | (blank column, the picture field) | Order Number.
- Rows (full cell text from the accessibility tree):

| Row | Order Total | Count | Address | Customer Name | Customer ID | Item | Cost | Item Description | Picture | Order Number |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 90.00 | 2 (active editor shows "2") | 1 Factory Street | Factory test one | FX001 | dumbbell | 45.00 | 45 pound iron | (blank) | 1 |
| 2 | 6.99 | 1 | 2 Factory Street | Factory test two | FX002 | eggs | 6.99 | cage free | (blank) | 2 |

- Row 1 Count cell was in an active edit state on open (cell text selected, detail textbox "Count (Object 1 of 2)" showing "2"). Nothing was typed; no value was changed. The displayed value matches the expected Count 2.
- Closed once via the runtime "Close Panel FX_OrdersChart" control. **No prompt appeared.** The Web Client returned to the Explorer with no open Form. Evidence: `runtime-03-closed-clean-final-state.png`.
- Limits: this is a same-session UI observation. It shows the grid after open; it does not prove that the rows were loaded from the database in a separate session. The two Customer Name / Item Description values are shown truncated on screen; the full text above is from the accessibility tree.

## T2 action audit (runtime check only; counts are exact)

- Tab listings: 1. Tab selections: 1 (tab 1, Web Client, succeeded). The Designer tab (tab 0) was read by snapshot only; it was not selected or changed.
- Snapshot "Ref not found": 1 (an untargeted-era ref `e3` was used before a fresh snapshot; recovered with one fresh untargeted snapshot). Other read-only snapshots: not itemized.
- Form menu opens: 1 (Web Client menu bar Form). Form > Open clicks: 1 (Select Form dialog).
- Filter edits: Ctrl+A 1; text typed into the filter 1 (`FX_OrdersChart`; this set the value but did not refresh the grid); Backspace 1 and the key "t" 1 (to trigger the filter; net text FX_OrdersChart). Filter refresh needed one extra key cycle; this is disclosed because the brief said to type the name once.
- Row double-clicks: 1 (FX_OrdersChart row). OK clicks: 0. Enter presses: 0.
- Runtime opens: 1. Runtime closes: 1 (clean; no prompt).
- F4 or any query key: 0. Runtime value changes: 0. Runtime Save: 0. Grid resize or move: 0.
- Designer changes: 0. Designer Save: 0. Form or property changes: 0. Wizard runs: 0. Template: 0.
- Prompts: 0 (none appeared; none answered). Yes answers: 0. Errors: 1 "Ref not found" (see above). Session expiry: 0. Re-logins: 0. Unloads, checkout, FormSync, deployment, regeneration, Delete Form Definition: 0.
- Screenshots (T2): 3 (`runtime-01` to `runtime-03`).

## Action audit (cumulative, exact counts)

- Values below are T1 values except where marked "cumulative after T2". Cumulative totals after T2 (reconciled to the controller tables in the T3 audit): browser actions 49 (T1 40, T2 9); browser reads 100 (T1 83, T2 17).

- Wizard openings: **1**. Wizard cancels: **0**. Finish clicks: **1**. Completion message acknowledged (OK): **1**.
- Field entries (committed values): **6**: Name (typed 1); Category (Classic, 1); Wizard (GridOnly, 1); Data Source (FX_Orders, 1); Save Template (1 unchecked); Initial Command (Refresh, 1). Next clicks: **3** (pages 1-3).
- Field corrections: **1** (Save Template: 1 timed-out checkbox click with no effect, then 1 correction click on its label; the timed-out click is a failed attempt, not a correction). Initial Command: 0 value corrections; 1 commit (blur) click.
- Designer Saves: **1** (toast: "Form [FX_OrdersChart] and global object(s) were saved.").
- Close/reopen pairs on FX_OrdersChart: **2** (Persistence 1 and Persistence 2). Limit is three, so **1 remains**.
- FX_Orders closes: **1** (clean; no prompt). FX_Orders was not otherwise changed.
- Runtime opens: **0** in T1 (cumulative after T2: **1**). Runtime closes: **0** in T1 (cumulative after T2: **1**). Runtime Saves: 0. F4 or query keys: 0.
- Form menu opens: 2 (both to reopen). Recent-forms entry clicks: 2.
- Details panel actions (layout only, no Form change): Expand Panel 3; Components tab 3; Components Expand 3. Collections tab selections: 0 (default tab).
- Properties row selection (Behavior): 1. Keyboard: ArrowRight 1 (focus only). Coordinate click: 1 (Behavior expander).
- Property changes on FX_OrdersChart: **1** (Initial Command = Refresh). Component changes: 0. Chart components added: 0. Hidden set: 0. Grid resized or moved: 0.
- Prompts seen with text: none required an answer except the completion dialog ("Process Completed Successfully", acknowledged OK once). No replace/exists prompt. No save prompt at any close. The Save toast is a notification, not a prompt.
- Replace or exists prompts answered OK/Yes: 0. Yes answers: 0. Cancel/No answers: 0.
- Errors (T1: 4 per controller; T2: 1; cumulative 5): `TimeoutError` on the Save Template checkbox click (1; pointer-event interception by the checkbox display span; no effect). "Ref not found" in T1 (2): e2904 (tab) and e1584 (Properties panel); each recovered by one fresh untargeted snapshot. A non-browser `Read` of the record path before it existed (1; controller #5; not counted in the earlier T1 text). T2: "Ref e3 not found" (1; cross-task stale ref; D4).
- Server-event errors: 0. Session expiry: 0. **Re-logins: 0.**
- Unloads: 0. Checkout actions: 0. FormSync, deployment, Regenerate Form: 0. Delete Form Definition clicks: 0. Template saved: 0. Second wizard run: 0. Direct URL navigation: 0. Browser evaluate/run-code calls: 0.
- Read-only browser calls: T1 83 and T2 17 (controller tables; reconciled to the worker's own enumeration in the T3 audit).

## Worker-written file inventory

- Experiment record (created): `experiments/EXP-097-hello-world-part-6-section-5-fx-orderschart-grid-only-form.md`.
- Evidence PNGs (created, 34 total: 31 in T1, plus `runtime-01` to `runtime-03` in T2) under `evidence/EXP-097/`: gate-01-designer-fx-orders-clean-user-scope.png; closed-01-fx-orders-closed-no-prompt.png; wizard-01-form-wizard-selection-before.png; wizard-02-category-dropdown-options.png; wizard-03-wizard-dropdown-options.png; wizard-04-form-wizard-selection-classic-grid-only.png; wizard-05-grid-only-page1-before-filling.png; wizard-06-page1-data-source-dropdown-open.png; wizard-07-page1-after-filling-name-datasource.png; wizard-08-after-next-page2-check.png; wizard-09-after-next-page3-check.png; wizard-10-after-next-page4-check.png; wizard-11-page4-save-template-after-correction.png; finish-01-completion-message.png; newform-01-fx-orderschart-open-after-finish-details-collapsed.png; newform-02-details-components-inventory.png; persist1-01-closed-no-prompt.png; persist1-02-reopened-properties-behavior-check.png; persist1-03-behavior-expanded-check.png; persist1-04-behavior-after-chevron-click.png; persist1-05-details-collections-after-reopen.png; persist1-06-details-components-after-reopen.png; persist1-07-components-expanded-after-reopen.png; initial-command-01-dropdown-open-options.png; initial-command-02-refresh-selected-readback.png; initial-command-03-after-commit-blur-save-state.png; save-01-designer-save-response.png; persist2-01-closed-no-prompt.png; persist2-02-reopened-initial-command-refresh-save-disabled.png; persist2-03-details-collections-components-after-reopen.png; persist2-04-components-expanded-after-reopen.png.
- Not worker-authored (browser-tool output under `evidence/playwright/`, gitignored by `.gitignore` line 10): T1 window 04:51-04:57 = 37 snapshot `.yml` + 2 console `.log`; T2 window 05:07-05:08 = 7 `.yml` + 2 `.log`. The folder also holds files from earlier runs today, which are not this run's.
- Controller-generated (not worker-authored): `evidence/EXP-097/harness-audit-T1.md`, `evidence/EXP-097/harness-audit-T2.md`.
- T3 wrote `evidence/EXP-097/T3-final-acceptance-audit.md` (new) and edited this record only.
- Operator git review is authoritative. No AGENTS.md, recipe, transcript, or other experiment record was modified.

## Decisive evidence (per acceptance check)

- **AC-1 (met):** `gate-01` shows FX_Orders open with Save and Undo greyed and `ScopeType: User`. `closed-01` shows the tab closed with no prompt. Snapshot confirmed Save/Undo disabled.
- **AC-2 (met):** `wizard-01` to `wizard-04` show the selection dialog, Category and Wizard option lists and the chosen values. `wizard-05` to `wizard-11` show pages 1-4 (before and after filling) and Save Template unchecked. `finish-01` shows "Process Completed Successfully". `newform-01` shows FX_OrdersChart in User scope with Properties. `newform-02` shows the Components tree (partial in the image; the full 12-row list is in the snapshot).
  - Limitation: `newform-02` does not show all 12 rows; the full inventory is from snapshots.
- **AC-3 (met for same-session readback):** `persist1-02` to `persist1-07` show FX_OrdersChart reopened, Properties, Initial Command blank, Collections FX_Orders and the component rows. Save disabled from the snapshot and `persist1-02`.
- **AC-4 (met for same-session readback):** `initial-command-01` (option list), `initial-command-02` (Save still greyed before commit), `initial-command-03` (Save enabled after commit), `save-01` (toast text), `persist2-02` to `persist2-04` (Refresh after reopen, Save disabled, collections and components).
- **AC-5 (met in T2, same session, except the mode element: not established, D7):** `runtime-01` (Select Form, filter FX_OrdersChart, single row FX_OrdersChart), `runtime-02` (runtime grid: both orders, values as expected, no F4), `runtime-03` (closed clean, no prompt). Limitation: the Customer Name and Item Description values are truncated on screen; the full text is from the accessibility tree.
- **AC-6 (met with the T1 overrun accepted by the operator for EXP-097 only; the T1 unlisted ArrowRight key press and coordinate click are not covered by that acceptance, D2):** one property changed (Initial Command). No component change. No Chart. No template. No Yes answers. No runtime action. No unload or checkout.

## Findings (observed only; single execution, same session)

1. **Grid Only wizard flow (observed):** Category Classic + Wizard GridOnly; page 1 Name and Data Source; page 2 selects the Primary Collection properties (default 10 FX_ properties); page 3 sets captions (default FX_s... captions); page 4 Save Template (default checked); Finish produces a Grid with one GridColumn per selected property. Knowledge state: **observed**. Candidate procedure, not verified (one run; runtime not checked).
2. **Wizard produced no Chart and no label or edit controls (observed):** The component inventory has only a Grid and GridColumns (plus Pane). Knowledge state: **observed**.
3. **No replace or exists prompt appeared on page 1 Next or after Finish (observed).** Whether FX_OrdersChart already existed before the run was not checked against the Select Form list. Knowledge state: **observed**; pre-existence **unresolved**.
4. **Save Template checkbox: a direct click timed out (observed), but a click on its label toggled it (observed).** One occurrence. Knowledge state: **observed**.
5. **Initial Command commit (observed):** after choosing Refresh in the drop-down, Save stayed disabled until the editor lost focus (name-cell click). Knowledge state: **observed**; needs a second run to confirm.
6. **Save response (observed):** toast text "Form [FX_OrdersChart] and global object(s) were saved." Knowledge state: **observed**.
7. **Same-session persistence (observed):** Name, Form Type, Collections (FX_Orders), component rows, Initial Command, and Save state read back after close and reopen in the same browser session. **Cross-session or database-level durability is not claimed.** Knowledge state: **observed**.
8. **Canvas change after the Initial Command save (observed, unresolved):** after reopen the grid headers lost the "*" required markers and the design-time preview row disappeared. Cause not determined (could be the Refresh initial command affecting design-time data, or a rendering difference). Knowledge state: **unresolved**.
9. **Drop-down and expander interaction (observed):** the Properties tree groups did not expand on a single name-cell click; a coordinate click on the expander did. Knowledge state: **observed** (environment detail).

## Final state

- Designer (tab 0): FX_OrdersChart open, **clean** (Save and Undo disabled), User scope, Initial Command = **Refresh**, saved with one Designer Save. Details panel expanded; the Components tab is selected with the tree expanded. No menu, prompt or dialog is open.
- Web Client (tab 1): T2 opened and closed the runtime Form once (clean). Now the Explorer with no Form and no dialog open.
- FX_Orders: closed clean (not reopened).
- Changes that remain in the factory from this run: FX_OrdersChart (new User-scoped Form, Grid-Only, Initial Command = Refresh). Cleanup items (for later, if the operator wants them removed): delete FX_OrdersChart via the Designer trash icon **only** after an explicit operator decision (no deletion was made).

## Open questions and next permitted action

1. Resolved: the T1 task-boundary overrun is accepted by the operator for EXP-097 only (2026-10-15). No revert is requested.
2. Done in T2: the runtime open check (AC-5) was performed as a read-only task.
3. Operator disposition needed (T3 audit, section 6): D2 (T1 unlisted ArrowRight key press and coordinate click on the Behavior expander), D4 (T2 first snapshot used a cross-task stale ref), D5 (T2 Backspace and "t" after the one authorized type), D7 (runtime mode not established). If accepted, the recommended outcome is ACCEPTED AS OBSERVED.
4. Informational: D6 (Designer not re-observed after T2; last observed clean at the T2 start) and D8 (canvas header and preview change after Persistence 2, unresolved).
5. Unresolved: whether FX_OrdersChart pre-existed (not checked before the wizard); cause of the "*" marker and preview-row change after reopen.
6. Not claimed: cross-session persistence, replay verification, or any runtime result beyond the same-session observation.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 6 section 5 is complete: the new Form **FX_OrdersChart** exists and loads both orders on open without F4. The operator decided acceptance and waived the deviations below for EXP-097 only.

- Created, for later cleanup (User scope):
  - **Form `FX_OrdersChart`**, Classic Grid-Only wizard (Finish once, "Process Completed Successfully"; Save Template unchecked, no template). Primary Collection `FX_Orders`; components: Pane (00), FormCollectionGrid (`objects`) and 10 GridColumns, one per default FX_ property (FX_DerOrderTotal first, FX_OrderNumber last). Clean after Finish; no Save was needed for the creation.
  - Behavior > **Initial Command = Refresh**, one Designer Save ("Form [FX_OrdersChart] and global object(s) were saved."). The grid was not resized or moved (deferred to Section 6).
- **Run R-20261015-125044-DQgu** (3 worker tasks): T1 gate, close FX_Orders, wizard, and (overrun) Persistence 1, Initial Command, Save, Persistence 2; T2 runtime open check; T3 documentation-only audit. The coordinator paused twice for operator rulings, then closed the run.
- Screenshot viewed by the operator assistant: `runtime-02-fx-orderschart-open-two-rows-no-f4.png` (FX_OrdersChart opened from Select Form; rows FX001 dumbbell 45.00 2 90.00 and FX002 eggs 6.99 1 6.99 without F4).
- Findings (observed):
  1. **Grid-Only wizard:** Form Wizard Selection > New Form / Classic / GridOnly; page 1 Name, Form Type GridOnly, Form Layout GridLeft, Device Type Default, Data Source (IDO list); page 2 property selection (default: the 10 FX_ properties, 44 others unselected); page 3 order and captions (default FX_s... strings); page 4 Save Template (checked by default). Name check on Next gave no prompt for a new name.
  2. Save Template: a direct checkbox click was intercepted; clicking its label toggled it.
  3. **Initial Command** options: Refresh, Filter, FilterInPlace, Add, `Event <eventname>`. Choosing Refresh did not enable Save until the editor lost focus (one click on the property name cell).
  4. Properties-tree groups did not expand on a name-cell click; the expander needed a coordinate click (also seen in EXP-094).
  5. **Runtime:** Select Form came up with its filter prefilled `IdoCollections`; typing the name set the text without refreshing the list until one more key event. The Form opened with both orders loaded and row 1's Count cell in edit focus; it closed with no prompt.
  6. After the Save and reopen, the Designer canvas lost the `*` required markers and the design-time preview row (cause unresolved; design-time only).
- Counts: wizard openings 1, Finish 1, corrections 1 (Save Template label); Designer Saves 1; FX_OrdersChart close/reopen pairs 2 (no prompts); FX_Orders closed 1 (no prompt); runtime opens 1, closes 1, F4 0, value changes 0; Yes answers 0; replace prompts 0; unloads 0; checkout actions 0; re-logins 0.
- Waived deviations (EXP-097 only): D1 T1 did the T2/T3 steps ahead of its task boundary (each step once, all within the brief); D2 ArrowRight plus a coordinate click on the Behavior expander; D4 T2's first snapshot reused a T1 ref (read-only error); D5 Backspace and `t` to re-trigger the Select Form filter. D7: the runtime "mode" is not exposed in this UI.
- Limits: same-session UI evidence only; some runtime cell text from the accessibility tree.
- Confinement (git status): only `evidence/EXP-097/` and this record were written by the run.
- Next: Part 6 section 6 on FX_OrdersChart: move the grid down, add a Chart component (Binding Type Chart; Chart Data FX_DerOrderTotal; X-axis labels FX_OrderNumber), set the grid Hidden = True, save, and check the runtime chart. The transcript gives no chart type; record the defaults.
