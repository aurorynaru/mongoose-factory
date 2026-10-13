# EXP-072 — Hello World Part 4 Section 11b: FX_Orders Classic Multi-View Form and caption strings (T1 preflight and gates; T2 wizard configured; T3 single Finish; T4 reopen blocked; T5 recovery; T6, T7 and T8 caption strings; T9 single Designer Save; T10 post-Save close/reopen; T11 read-only runtime opening; T12 documentation-only final acceptance)

**CURRENT STATUS (after T12, cycle 14): EXP-072 is finalised as ACCEPTED AS OBSERVED, with qualifications. Recommendation: EXPERIMENT_COMPLETE.** T12 was documentation only: zero browser calls, zero Mongoose actions. Final report: `evidence/EXP-072/T12-final-acceptance-report.md` (acceptance matrix AC-1 to AC-8, reconciled counts, deviations, unresolved items). AC-1 to AC-7 are supported at UI level in one session; AC-7 is accepted by operator disposition despite the toolbar Open route used in T11. Add mode is NOT confirmed. The Save toast "Global object(s) were saved." is recorded verbatim and is not Form-definition durability proof. Nothing is replay-verified. Open items: the T4 Designer-picker discrepancy; the cause of the canvas raw-to-resolved change; Form-definition persistence beyond the session; the record count differences listed in the T12 section. Final state: Web Client on Sql Tables with no runtime FX_Orders open; Designer FX_Orders last observed clean at T10 and not reselected since.

**CURRENT STATUS (after T11, cycle 12): the AC-7 read-only runtime inspection is complete, observed at UI level.** FX_Orders was opened ONCE in the Web Client (toolbar Open, then Select Form with the pre-filled filter `FX_Orders`, Filter By Name, exactly one row `FX_Orders / FX_Orders`, OK pressed once) and closed ONCE through the runtime tab's Close Panel control. No close prompt appeared, so no "No" answer was needed. No record was typed into, chosen, saved or deleted. Observed at runtime: Order Number textbox `1` (focused, value selected); Customer ID and Item rendered as empty comboboxes with an Open button; Count textbox `1`; labels `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:` in order; Save disabled. **Mode:** no explicit mode label was observed; Add mode is inferred from the new-row star marker on row 1 and the pre-filled Order Number, consistent with the tutorial, and is NOT a confirmed label. The Designer tab was not selected in T11 (its last observed state is clean, T10). Counters: Finish 1; Form created 1; caption strings created 3; Designer Save 1; incidental pre-Save close 1 / reopen 1; post-Save close 1 / reopen 1 (T10); **runtime open 1 / close 1 (T11)**; records entered or saved 0; unloads 0; re-logins 0. Classification: observed only (same session). This is not database durability or replay verification. NOT replay_verified.

**CURRENT STATUS (after T10, cycle 11): the post-Save close and reopen pair is complete, observed at UI level.** The clean FX_Orders Form was closed ONCE through its Form-tab close control (no native prompt appeared; FX_Items unchanged), then reopened ONCE through the Designer Form-menu recent-forms entry FX_Orders (the operator-authorised route). The reopened Form shows Name `FX_Orders`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Save and Undo disabled, no dialog. The four business fields in the Components grid and on the canvas are in order: FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count. Each label's Caption reference read after reopen: `FX_sOrderNumber`, `FX_sCustomerID`, `FX_sItem`, `FX_sCount`. Bindings read after reopen: `FX_OrderNumberEdit` Edit → `object.FX_OrderNumber`; `FX_CustomerIDCombobox` ComboBox → `object.FX_CustomerID`; `FX_ItemCombobox` ComboBox → `object.FX_Item`; `FX_CountEdit` Edit → `object.FX_Count`. **Canvas after reopen: the labels render the resolved text** `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:` (before the T9 Save and the reopen, the canvas showed the raw IDs). The runtime Form has NOT been opened. Counters: Finish 1; Form created 1; caption strings created 3; Designer Save 1; incidental pre-Save close 1 / reopen 1 (T3 accidental close; T5 recent-forms reopen); **post-Save close 1 / reopen 1 (T10)**; runtime open 0; records 0; unloads 0; re-logins 0. Classification: observed only (same-session UI close/reopen). The Save toast named "Global object(s)", so Form-definition persistence beyond this same-session boundary is not established. This close/reopen is a weak persistence boundary, not database-durability or replay-verification evidence. NOT replay_verified.

**CURRENT STATUS (after T9, cycle 10): ONE Designer Save was invoked (once, not retried). The native response was a non-modal notification toast "Save — Global object(s) were saved." (top-right, auto-dismissed; not a prompt). Afterwards the toolbar Save and Undo were disabled, no dialog was open, and the footer showed ScopeType User / ScopeName operator. FX_Orders remains open and selected; FX_Items unchanged.** Save state: clean. The toast says "Global object(s)" (the strings) and does not state explicitly that the Form definition was saved; this wording is recorded as observed and not interpreted. Cumulative mutation inventory: one FX_Orders Form created (T3); three caption strings created (FX_sOrderNumber T6, FX_sCustomerID T7, FX_sCount T8); one Finish (T3); **one Designer Save (T9)**; zero changes to previously existing strings (FX_sItem read only) or unrelated objects; zero runtime records; zero unloads; zero re-logins. Incidental events kept separate from the required post-Save pair: T3 accidental close (1); T5 Form-menu recent-forms reopen (1). The required post-Save close and reopen has NOT happened. Classification: observed only (UI level, same session). Database persistence and durability are NOT verified; NOT replay_verified.

**CURRENT STATUS (after T8, cycle 9): all THREE caption strings now created, each with one Yes and a verified value before OK: `FX_sOrderNumber` = `Order Number` (T6), `FX_sCustomerID` = `Customer ID` (T7), `FX_sCount` = `Count` (T8).** T8 sequence: FX_CountStatic Caption read as `FX_sCount` (Static, Pane 1, Tab 11); Caption ellipsis opened once; exact prompt "String FX_sCount does not exist. Create it?" answered **Yes once**; String dialog Name `FX_sCount`, generated String Value `FX_s Count`; value replaced with `Count`; cell committed with Tab; committed value verified (gridcell `Count`, no active editor) and screenshot taken **before OK** (`t8-05`); String dialog OK pressed **once**; Designer after OK: Save **still enabled** (dirty), canvas label `FX_sCount:`. **Read-only Edit > String readback of all four** (Strings filter, one row each, Name and String Value): `FX_sOrderNumber` = `Order Number`; `FX_sCustomerID` = `Customer ID`; `FX_sCount` = `Count`; `FX_sItem` = `Item` (unchanged). Global Objects closed with **Cancel** (not OK). **Designer Save NOT pressed (0)**; Designer dirty with three pending string creations. FX_Orders remains open; no Form lifecycle action; no runtime. Cumulative: Finish 1; Form created 1 (T3); strings created **3**; Designer Save 0; runtime 0; unloads 0; re-logins 0. Classification: observed only (UI level, same session). NOT replay_verified; no durability claimed (the three strings are client-side until a Designer Save).

**CURRENT STATUS (after T7, cycle 8): TWO caption strings created so far: `FX_sOrderNumber` = `Order Number` (T6) and `FX_sCustomerID` = `Customer ID` (T7).** T7 sequence: FX_CustomerIDStatic Caption read as `FX_sCustomerID` (Static, Pane 1, Tab 7); the Caption ellipsis opened once; the exact prompt "String FX_sCustomerID does not exist. Create it?" answered **Yes once**; String dialog identity Name `FX_sCustomerID`, generated String Value `FX_s Customer ID`; value replaced with `Customer ID`; cell committed with Tab; committed value verified (gridcell `Customer ID`, no active editor) and screenshot taken **before OK**; String dialog OK pressed **once**; read-only Edit > String, Strings filter `FX_sCustomerID` (one row), readback Name `FX_sCustomerID`, String Value `Customer ID`; Global Objects closed with **Cancel** (not OK). **Designer dirty, Save enabled and NOT pressed (0 Designer Saves).** Pending caption changes (FX_sOrderNumber from T6, FX_sCustomerID from T7) retained for the single later Save. **FX_sCount NOT created** (still the third string to create). FX_sItem and FX_sOrderNumber not modified in T7. Cumulative: Finish 1; Form created 1 (T3); strings created **2**; Designer Save 0; runtime 0; unloads 0; re-logins 0. Classification: observed only (UI level, same session). NOT replay_verified; no durability claimed.

**CURRENT STATUS (after T6, cycle 7): ONE caption string created: `FX_sOrderNumber` = `Order Number`.** Sequence: the FX_OrderNumberStatic Caption reference read as `FX_sOrderNumber`; the Caption ellipsis opened once; the prompt read exactly "String FX_sOrderNumber does not exist. Create it?"; Yes answered ONCE; the String dialog identity read (Name `FX_sOrderNumber`, generated String Value `FX_s Order Number`); the String Value replaced with `Order Number`; the cell committed with Tab; the committed value verified in the accessibility tree (gridcell `Order Number`, no active editor) and by screenshot **before** OK; String dialog OK pressed ONCE; read-only Edit > String readback: Name `FX_sOrderNumber`, String Value `Order Number`. **Designer now dirty**: the Save toolbar button is enabled because of the new string. **Designer Save NOT invoked (0).** FX_Orders is still open and selected; FX_Items is unchanged. Not created in T6: FX_sCustomerID, FX_sCount (absent; not touched). FX_sItem not modified. Cumulative: Finish 1; Form created 1; strings created **1** (FX_sOrderNumber); Designer Save 0; runtime 0; unloads 0; re-logins 0. Classification: observed only (UI level, same session). NOT replay_verified; no database durability claimed.

**CURRENT STATUS (after T5, cycle 6): FX_Orders is RECOVERED and OPEN in the Designer (the operator-authorised incidental pre-Save reopen, via the Form-menu recent-forms entry, one click).** Designer identity: tab `FX_Orders` selected; Name `FX_Orders`; Device Default; Form Type Normal; Is Master True; footer `ScopeType: User / ScopeName: <operator account>`; Save and Undo disabled (clean). Canvas order: FX_sOrderNumber*, FX_sCustomerID*, Item:*, FX_sCount (value 1). Components grid read-only: label Captions `FX_sOrderNumber`, `FX_sCustomerID`, `FX_sItem`, `FX_sCount`; input bindings `object.FX_OrderNumber` (Edit), `object.FX_CustomerID` (ComboBox), `object.FX_Item` (ComboBox), `object.FX_Count` (Edit). **Discrepancy vs the T4 expectation:** FX_OrderNumber's label is `FX_sOrderNumber` and its input is an Edit (no combobox); the CustomerID and Item inputs are ComboBox components (control type observed at design time). The three new strings (FX_sOrderNumber, FX_sCustomerID, FX_sCount) are **still NOT created** (the Caption showed the raw IDs on the canvas), so the captions currently reference absent strings. Strings created 0; Designer Save 0; runtime 0; unloads 0; re-logins 0. The brief's post-Save close/reopen pair is still required. Classification: observed only (UI level, same session). NOT replay_verified; no durability claimed.

**CURRENT STATUS (after T4, cycle 4): BLOCKED. The operator-authorised incidental reopen of FX_Orders was NOT achieved.** The Designer toolbar Open and Select Form (the Designer's own picker) list no FX_Orders row: a Name filter `FX_Orders` returned zero rows (two attempts, settled), and the FX_ prefix list (sorted by caption, scrolled to both ends) contains FX_Items, FX_HelloWorld01 and FX_UMs but no FX_Orders. The Designer's Form menu (T3) still lists "FX_Orders", and the Web Client's runtime Select Form lists exactly one row `FX_Orders / FX_Orders` (observed read-only, settled, cancelled, not opened). The two pickers disagree. Per the brief's ambiguity rule, FX_Orders was **not opened** by any route (no Form-menu entry, no runtime open, no creation). Designer state: tab FX_Items is the only open Form (clean; Save and Undo disabled; footer ScopeType User). **Components, bindings and caption references of FX_Orders were NOT read** (the Form is not open). **Finish stays at 1 (T3 only). Designer Save 0. Strings created 0. Runtime open 0. Records 0. Unloads 0. Re-logins 0.** Classification: observed only (UI level, same session). Form existence is observed on the server-backed runtime list only. NOT replay_verified; no durability claimed.

**CURRENT STATUS (after T3, cycle 2): ONE Finish was invoked (once, not retried). The wizard returned the native message "Process Completed Successfully" (wizard title "Form Wizard - MultiView"); the message was acknowledged once with OK and the wizard is no longer in the page. The Designer then displayed a new Form tab `FX_Orders` (Name FX_Orders, Device Default, Form Type Normal, Is Master True; footer ScopeType User / ScopeName = operator account; Save and Undo disabled). Caveat: during T3 I clicked the FX_Orders tab's close control by mistake (an out-of-scope Form close, see T3 deviations); the Form was clean (Save disabled) and no prompt appeared. The FX_Orders tab is therefore NOT open now; FX_Orders is listed in the Designer's Form menu (not opened). Strings created 0; Designer Save 0; runtime 0; unloads 0; re-logins 0. Finish is audited at 1 (maximum 1). Classification: observed only (UI level, same session). Database persistence NOT verified. NOT replay_verified.**

**CURRENT STATUS (after T2, cycle 1): the Form Wizard (Classic > MultiView) is OPEN on its final page, configured and verified, with Finish ENABLED and NOT invoked.** Page 1: Name `FX_Orders` (one plain fill), Form Type MultiView, Form Layout GridLeft, Device Default, Data Source `FX_Orders`. Page 2: the four business fields are in the Primary Collection (defaults accepted; no change). Page 3: order set to FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count (all Include checked) by three up presses and two down presses. Final page: sentence "Click the Finish button to build a multiview form named FX_Orders with the data source FX_Orders."; **Save Template unchecked**. **Finish = 0. Designer Save = 0. Strings created = 0. Application-object mutations = 0.** Nothing has been created yet: the Form, the three strings, the Designer Save, the close/reopen and the runtime opening (AC-3 creation part to AC-7) remain NOT executed. Classification: **observed only (single session, UI level). NOT replay_verified.**

## T2 — Form wizard configured to the pre-Finish state (wizard OPEN; Finish NOT invoked; cycle 1)

- Task T2, cycle 1, task_message_id `b5b9cd4c-d19e-4810-9f35-d59c01377daf`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- Scope: from the clean User-scope Designer (FX_Items, unchanged), open Designer New > Classic > MultiView; configure Name, Data Source, the field order and Save Template; verify; leave the wizard open at its pre-Finish state. No Finish, no string creation, no Designer Save, no close/reopen, no runtime open.
- Preflight (AC-1 for T2, `t2-01`): tabs listed before the first selection (tab 0 Designer, tab 1 Web Client); tab 0 selected; Designer FX_Items design view, footer `ScopeType: User`, Save disabled.
- Gate carried from T1 (not re-run in T2): Select Form FX_Orders zero rows; FX_sOrderNumber, FX_sCustomerID, FX_sCount absent. The T1 gate was the last Designer string check; no string or Form was created after it. Confirmed by the T2 preflight (Save disabled, no dialog).

### Actions (T2, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current at start); tab 1 Web Client (`favoriteContext=SqlTables`) | — |
| 2 | Select tab 0; `find` Save | Save disabled; Regenerate Form disabled | `t2-01` |
| 3 | Designer toolbar `New` (one click) | Form Wizard Selection dialog opened: New Form selected; Category and Wizard blank | `t2-02` |
| 4 | Category combobox arrow, then `Classic` | Category `Classic` | `find` |
| 5 | Wizard combobox arrow, then `Multi-View` (the MultiView option) | Wizard `MultiView`; New Form selected | `t2-03` |
| 6 | Form Wizard Selection `OK` (one click) | Form Wizard - MultiView opened on page 1 | `t2-04` |
| 7 | Name combobox: plain fill `FX_Orders` (one fill, no Tab) | Name `FX_Orders` shown | `t2-05` |
| 8 | Data Source combobox `Open`, then the `FX_Orders` IDO entry (in the IDO list, row FX_Orders) | Data Source `FX_Orders`; Query Form empty | `t2-06` |
| 9 | Page 1 `Next` | Page 2 (Primary Collection) | `t2-07` |
| 10 | Page 2 `Next` (default selection, no change) | Page 3 (order and attributes) | `t2-08` |
| 11 | Row FX_OrderNumber (name cell, one click; row marker active) | Row 4 selected | `t2-09` |
| 12 | Move-up arrow, three single presses (one per press, screenshot after the first and third) | Row 1 = FX_OrderNumber. Intermediate: row 3 after press 1 (`t2-10`) | `t2-10`, `t2-11` |
| 13 | Row FX_Count (name cell, one click) | Row 3 selected (after the moves) | `find` |
| 14 | Move-down arrow, two single presses | Rows: FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count | `t2-12`, `t2-13` |
| 15 | Page 3 `Next` | Final page: "Click the Finish button to build a multiview form named FX_Orders with the data source FX_Orders."; Save Template checked (default); Next disabled; Finish enabled | `find`, `t2-14` |
| 16 | Save Template checkbox click (direct click) | **Timed out**: `<span data-ref="displayEl">` intercepted pointer events (the same display-span behaviour as EXP-050 T2). No state change. Failed click, counted | error |
| 17 | Save Template label click (one click on the `Save Template` label, the EXP-050 workaround) | Save Template **unchecked** (`find`: no `[checked]`) | `t2-15` |
| 18 | Attempt to read the page-3 full names after the final page (`find` FX_CustomerID) | Not found (page 3 grid no longer in the DOM). Limitation, see below | `find` |

Errors: one timed-out checkbox click (action 16) and one stale ref (`e2912`, not found) during the page-3 inspection. Recovery: one fresh untargeted snapshot (saved to `evidence/EXP-072/t2-fresh-snapshot-page3.yml`), then a corrected inspection (the arrow refs were read from the saved snapshot). No further recovery.

### Pre-Finish state verified (observed)

| Item | Required | Observed | Evidence |
| --- | --- | --- | --- |
| Route | Classic > MultiView | Category `Classic`; Wizard `MultiView`; New Form | `t2-03` |
| Form Name | FX_Orders (one plain fill) | `FX_Orders` | `t2-05`, `t2-15` (sentence) |
| Form Type / Layout / Device | MultiView / GridLeft / Default (defaults) | MultiView / GridLeft / Default | `t2-04`, `t2-06` |
| Data Source | FX_Orders | `FX_Orders` (IDO list entry; the IDO list also contains `FX_Items`, `FX_UMs`, `FX_HelloWorld01`) | `t2-06` |
| Field order (page 3) | FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count | Rows 1 to 4: `FX_OrderN…`, `FX_Custom…`, `FX_Item`, `FX_Count` (`t2-13`). Full name of row 1 `FX_OrderNumber` read from the accessibility tree; row 2 full name `FX_CustomerID` read on page 2 (`t2-07`) but not re-read on page 3 (see limitations) | `t2-13`, `t2-07` |
| Include | All four checked | All four checked | `t2-13` |
| Wizard-generated caption (label string ID, page 3 Caption column) | informational | `FX_sOrder…`, `FX_sCusto…`, `FX_sItem`, `FX_sCount`. These are the property label IDs the wizard generated, not strings created in the database; the caption strings are a later step | `t2-13` |
| Save Template | unchecked | unchecked | `t2-15` |
| Finish | enabled, NOT pressed | enabled (not pressed) | `t2-15` |
| Back / Next | Back enabled; Next disabled on the final page | as observed | `t2-15` |

### Limitations (T2)

- The page-3 row 2 full name is read as `FX_CustomerID` by inference from the truncated `FX_Custom…` and from page 2, not from a page-3 accessibility readback (the page-3 grid left the DOM before a read was possible). Page-3 row 1 `FX_OrderN…` and row 3 `FX_Item` are the only other rows; the column is truncated.
- The wizard's generated caption IDs appear in the page-3 Caption column. They are not evidence that the strings exist (the T1 gate showed FX_sOrderNumber, FX_sCustomerID, FX_sCount absent) and they are not the component captions.
- The wizard is in a modal state; nothing has been written to the database or the Designer.

### Action counts (T2, exact; worker-requested browser calls)

| Operation | T2 |
| --- | --- |
| **Finish** | **0** |
| **Designer Save** / Regenerate / Designer Delete | **0 / 0 / 0** |
| Designer toolbar `New` (wizard launch only; no object created) | **1** |
| Wizard openings | **1** (Form Wizard - MultiView opened once) |
| Form Wizard Selection OK | **1** |
| Strings created; String dialogs; OK in a String dialog | **0 / 0 / 0** |
| Unloads / FormSync / deployment / check-in / check-out | **0 / 0 / 0 / 0 / 0** |
| Records entered / saved / deleted; list values chosen | **0 / 0 / 0 / 0** |
| Application-object mutations (IDO, table, property class, FX_Items, FX_sItem, strings, other Forms) | **0** |
| Designer close / reopen; runtime open / close | **0 / 0; 0 / 0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0 / 0 / 0 / 0 / 0** |
| Clicks (successful / failed) | **19 / 1** (successful: toolbar New 1; Category arrow 1; Classic 1; Wizard arrow 1; MultiView 1; Form Wizard OK 1; Data Source Open 1; FX_Orders entry 1; Next p1→p2 1; Next p2→p3 1; FX_OrderNumber name cell 1; move-up 3; FX_Count name cell 1; move-down 2; Next p3→final 1; Save Template label 1. Failed: Save Template checkbox 1 (timeout)) |
| `browser_type` fills (succeeded / refused) | **1 / 0** (Name `FX_Orders`) |
| Key presses | **0** |
| Waits | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted (worker-requested) | **1** (saved: `evidence/EXP-072/t2-fresh-snapshot-page3.yml`; its content was read by `Grep`, not inline) |
| Snapshots targeted (worker-requested) | **2 successful** (`e2037` depth 4; `e3050` depth 2) and **1 failed** (`e2912`, not found) |
| `browser_find` calls | **25** |
| Screenshots (worker-requested PNG) | **15** (`t2-01` to `t2-15`) |
| Ref-not-found errors / recovery snapshots used / timeouts | **1 / 1 / 1** (ref `e2912`; the timeout is the Save Template checkbox click) |
| In-page dialogs answered | **1** (Form Wizard Selection OK); no dialog closed by Cancel or OK otherwise |
| Native browser dialogs | **0** |
| Portal banner dismissals | **0** (none visible) |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** |

Note: the tool-generated page snapshots written under `evidence/playwright/` (one per click or find) are tool-generated, not worker-authored, and are not enumerated.

### Worker-written-file inventory (T2)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T2 status block and this T2 section) |
| `evidence/EXP-072/t2-01-designer-preflight-before-wizard.png` | created |
| `evidence/EXP-072/t2-02-form-wizard-selection-dialog-before-category.png` | created |
| `evidence/EXP-072/t2-03-form-wizard-selection-Classic-MultiView.png` | created |
| `evidence/EXP-072/t2-04-wizard-page1-initial.png` | created |
| `evidence/EXP-072/t2-05-wizard-page1-name-filled.png` | created |
| `evidence/EXP-072/t2-06-wizard-page1-datasource-FX_Orders.png` | created |
| `evidence/EXP-072/t2-07-wizard-page2-field-selection.png` | created |
| `evidence/EXP-072/t2-08-wizard-page3-order-before-reorder.png` | created |
| `evidence/EXP-072/t2-09-wizard-page3-FX_OrderNumber-row-selected.png` | created |
| `evidence/EXP-072/t2-10-wizard-page3-after-up-1.png` | created |
| `evidence/EXP-072/t2-11-wizard-page3-after-up-3.png` | created |
| `evidence/EXP-072/t2-12-wizard-page3-after-down-1.png` | created |
| `evidence/EXP-072/t2-13-wizard-page3-order-final.png` | created |
| `evidence/EXP-072/t2-14-wizard-final-page-before-save-template.png` | created |
| `evidence/EXP-072/t2-15-wizard-final-page-save-template-unchecked.png` | created |
| `evidence/EXP-072/t2-fresh-snapshot-page3.yml` | created (the one fresh untargeted snapshot) |

Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t2-01` | FX_Items design view; footer ScopeType User; Save greyed | Preflight: Designer clean, User scope | Database state |
| `t2-03` | Form Wizard Selection: New Form; Category Classic; Wizard MultiView | Route (AC-3 route) | The wizard result |
| `t2-05` | Wizard page 1: Name `FX_Orders`; Form Type MultiView; Layout GridLeft; Device Default; Data Source empty | Name entered (one fill) | Data Source (set in `t2-06`) |
| `t2-06` | Wizard page 1: Name `FX_Orders`; Data Source `FX_Orders` | Data Source selection (AC-3) | The IDO binding after Finish |
| `t2-13` | Page 3: rows FX_OrderN… (1), FX_Custom… (2), FX_Item (3), FX_Count (4); all Include checked; captions FX_sOrder…, FX_sCusto…, FX_sItem, FX_sCount | The field order before Finish (AC-3 order) | Full names of rows 1 and 2 (truncated); the order after Finish |
| `t2-14` | Final page before the Save Template change: sentence; Save Template checked; Finish enabled | The final page and default state | Anything after the change |
| `t2-15` | Final page: sentence "...multiview form named FX_Orders with the data source FX_Orders."; Save Template unchecked; Finish enabled, Next disabled | Pre-Finish state (AC-3 Save Template unchecked) | That Finish would create the Form; that the page-3 order is saved |

Acceptance (T2 scope): AC-3 **pre-Finish part supported** (route, Name, Data Source, field order on page 3, Save Template unchecked; Finish enabled and not pressed). AC-3 creation part (one Finish; creation screenshot) **not run**. AC-1 and AC-2 carried from T1 and the T2 preflight. AC-4 to AC-8: not run.

### Blockers and state

- **No blocker.** The stale ref (`e2912`) and the timed-out checkbox click were each handled within the recovery rules (one fresh untargeted snapshot; one corrected inspection; one label click for the checkbox, per EXP-050).
- **Wizard state (end of T2):** Form Wizard - MultiView OPEN on the final page; Name `FX_Orders`; Data Source `FX_Orders`; Form Type MultiView; Layout GridLeft; Device Default; field order FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count; Save Template unchecked; Back enabled; Next disabled; **Finish enabled and not pressed**. Designer behind the wizard unchanged (FX_Items; Save state not re-read after the wizard opened; no Designer edit made).
- Open question for the coordinator: authorise the single Finish (AC-3 creation). The Finish result is wizard-level only; the IDO/Form readback and the Designer Save are later steps.

---

## T12 — final acceptance review (cycle 14): documentation only; EXPERIMENT_COMPLETE recommended (accepted as observed)

- Task T12, cycle 14, task_message_id `ceb458f1-c291-43f2-865c-f04319bd1abb` (from the T12 header), worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- **Declaration: zero browser calls, zero Mongoose actions** (no tab list or select, snapshot, screenshot, find, click, type, key, wait, navigation, Form, String, Save, Finish, close, reopen, runtime open or close, unload, FormSync or deployment). Tools used: Read, Grep, Glob (read-only), Write (the report), Edit (this record).
- Full report: `evidence/EXP-072/T12-final-acceptance-report.md`. It holds the AC-1 to AC-8 matrix with exact evidence paths and levels, the reconciled counts and their basis, the deviations and authorisations, the qualifications, the final state, the inventory and the unresolved items.

### Acceptance (T12 final, observed)

| ID | Status | Principal evidence |
| --- | --- | --- |
| AC-1 | Supported (UI, one session); IDO cited from EXP-071-R2, not re-observed | `ac1-01`, `ac2-00`, `t2-01` |
| AC-2 | Supported (list level) | `ac2-01`, `ac2-02` (zero FX_Orders rows), `ac2-05` to `ac2-09` |
| AC-3 | Supported | `t2-03`, `t2-05`, `t2-06`, `t2-13`, `t2-15`; `t3-01`, `t3-02`, `t3-03` |
| AC-4 | Supported (client-side until Save) | `t6-04` to `t6-10`; `t7-03` to `t7-07`; `t8-03` to `t8-10` |
| AC-5 | Native response observed; persistence not established | `t9-01`, `t9-02` (toast; canvas still raw IDs), `t9-03` |
| AC-6 | Supported (same session) | `t10-02` to `t10-10` |
| AC-7 | Supported (same session); Add mode not confirmed; accepted by operator disposition for the toolbar Open route | `t11-01`, `t11-02`, `t11-03` |
| AC-8 | Satisfied by the report and this update | `T12-final-acceptance-report.md` |

### Corrections to earlier counts (reconciled against the controller audits)

The controller audit files `evidence/EXP-072/harness-audit-T1.md` to `harness-audit-T11.md` are generated by the harness, not written by the worker. They record each tool call and its result. Their totals are used where the record disagrees.

| Item | Previously stated | Reconciled | Basis |
| --- | --- | --- | --- |
| Designer Select Form openings | 6 (T1 1, T4 3, T5 2) | **4** (T4 2, T5 2; all cancelled) | Record T4 (line ~1093) and T5 (line ~964); the T1 item was the Web Client gate |
| Web Client Select Form openings | 1 (T11) | **3** (T1 cancel, T4 cancel, T11 OK) | Record T1, T4 and T11 |
| Failed browser clicks | 2 | **1** (T2 Save Template timeout, controller #77) | Controller; the T6 "failed click e1711" is controller #14, a `browser_snapshot` error |
| Successful clicks (cumulative) | 105 (with 2 failed, 107 calls) | **105** (106 calls, 1 failed) | Controller 106 click calls |
| browser_type | 20 ok / 0 refused | **20 ok / 1 refused** (21 calls; T6 #27, ref e2543) | Controller |
| browser_tabs (list / select) | 11 / 15 | **12 / 15** (27 calls) | Controller and per-task entries |
| browser_find | 171 | **165** (controller). The record's own per-task entries sum to 187; unresolved | Controller |
| browser_wait_for | 22 | **23** (controller); one difference unresolved | Controller |
| browser_snapshot | untargeted 14 | **23** total (controller); worker split unresolved | Controller |
| Screenshots (PNG) | 101 | **101** (confirmed by controller and file inventory) | Controller and inventory |
| Key presses | 25 | **25** (confirmed) | Controller |
| Mouse calls | 7 (move 2, click_xy 2, wheel 3) | **7** (confirmed; all T4) | Controller |

Controller browser-call total: **498** (click 106, screenshot 101, snapshot 23, find 165, type 21, tabs 27, press_key 25, wait_for 23, mouse 7). Browser errors: 4 (1 click timeout, 2 snapshot ref-not-found, 1 type ref-not-found). Non-browser tool errors: 3 (T1 Read missing path; T1 Grep permission denied; T8 Edit string not found).

### Deviations and authorisations (T12 record)

- D1 T3 accidental clean Form-tab close (no prompt). D2 T5 operator-authorised reopen via Form-menu recent-forms. D3 T4 Designer-picker zero-row discrepancy (**unresolved**). D4 T5 two unintended toolbar Open-icon clicks (both cancelled, no OK). D5 T6 stale refs and T2 stale ref and checkbox timeout (recovered). D6 T11 toolbar Open instead of Form > Open (**accepted by operator disposition**). D7 T1 Strings-filter Tab-commit failure (fixed by Control+a and slow retype). D8 T4 coordinate clicks (last-resort; recorded). D9 T10 post-Save close and Form-menu reopen (authorised by the T10 brief).

### Qualifications

- Same-session UI observations only. Not database durability; not replay verification.
- The Save toast "Global object(s) were saved." is verbatim and does not state that the Form definition was saved.
- Canvas raw IDs at the Save (`t9-02`) and resolved text after the reopen (`t10-04`): cause unresolved.
- Add mode not confirmed; the Order Number `1` is the screen value (no record saved); the Count `1` agrees with the EXP-071-R2 default (cited, not re-observed); Customer ID and Item are comboboxes at runtime with empty lists (lists not opened).
- No record entered, saved or deleted; no list value chosen; no "No" answer given (no save prompt appeared); zero unloads; zero re-logins.

### Worker-written files (T12)

| File | Action |
| --- | --- |
| `evidence/EXP-072/T12-final-acceptance-report.md` | created |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (header, status block, T11 corrections, this T12 section) |

Cumulative worker-written evidence (T1–T11): 101 PNG screenshots and 16 YAML snapshots under `evidence/EXP-072/`, as listed in the report, section 3c.

### Final state (end of T12)

- Web Client (tab 1): Sql Tables panel selected; no runtime FX_Orders open; no dialog.
- Designer (tab 0): FX_Orders last observed open and clean at T10 (`t10-10`); not reselected in T11 or T12.

### Recommendation

- **EXPERIMENT_COMPLETE**, accepted as observed, with the qualifications above and the unresolved items in the report, section 9. No candidate procedure has been promoted, and nothing is replay-verified.

---

## T11 — read-only runtime opening of FX_Orders in the Web Client (cycle 12, AC-7): OPENED once, CLOSED once; no record entered

- Task T11, cycle 12, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13. The task_message_id previously written here (`6778eb5f-…`) was **an error and is withdrawn**: the T11 task text available to the worker did not contain a message identifier.
- Scope: one Web Client Form > Open > Select Form opening of FX_Orders; one runtime close; read-only observation; screenshots. No typing, no list choice, no record save, no Designer action, no Save, no Finish, no reload, no URL navigation, no session action.

### Actions (T11, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection; performed at the start of this task) | Tab 0 Designer (`MGForm=FX_Orders`); tab 1 Web Client (`favoriteContext=SqlTables`) | — |
| 2 | `browser_tabs` select tab 1 (Web Client); fresh untargeted snapshot (saved) | Web Client selected; Form tab active; Save disabled; Sql Tables panel; no runtime FX_Orders open; no dialog. Console line counts reported by the tool (7 errors, 3 warnings) were not inspected | `t11-00` yml |
| 3 | Toolbar **Open** (ONE click, `f1e25`) | Select Form dialog opened. Filter pre-filled `FX_Orders` (not typed by the worker); Filter By `Name`; Case Sensitive and Starts With unchecked; exactly one row `FX_Orders` / `FX_Orders`, highlighted | `t11-01` png and yml |
| 4 | Select Form **OK** (ONE click, `f1e336`) on that row | Page URL `favoriteContext` changed to `FX_Orders`; runtime FX_Orders tab opened and selected | `t11-02` |
| 5 | Settle wait 3 s; screenshot and fresh snapshot (saved) | Runtime Form displayed; no dialog | `t11-02` png and yml |
| 6 | Runtime close: **Close Panel FX_Orders** (ONE click, `f1e344`) | No close or save prompt appeared; `favoriteContext` returned to `SqlTables`; the FX_Orders runtime tab was removed; Sql Tables panel shown | `t11-03` png and yml |

Errors: none. Recovery snapshots: 0. Ref-not-found: 0.

### Runtime observations (observed, AC-7)

- **Identity:** runtime tab `FX_Orders` selected; picker caption and name `FX_Orders`; status bar `Order Number (Object 1 of 1)`.
- **Mode:** no explicit mode label was observed. The grid row header shows a star (new-row) marker on row 1, and the Order Number textbox is pre-filled. Add mode is inferred from these, consistent with the tutorial; it is not a confirmed label.
- **Order Number displayed:** `1` (textbox, focused, value selected). No record was saved, so no database-generated value is claimed; the source of the `1` is not established.
- **Labels (canvas, top to bottom):** `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:`. Grid column headers: `* Order Number`, `* Customer ID`, `* Item`, `Count`.
- **Control types:** Order Number textbox; **Customer ID combobox** (Open button, empty); **Item combobox** (Open button, empty); Count textbox.
- **Count default:** `1` (textbox).
- **Save:** disabled in the runtime toolbar (no change was made).
- No list was opened or chosen; the Customer ID and Item lists' contents are not observed.

### Close (observed)

- Closed once through the runtime tab's Close Panel control. No native prompt and no in-page save prompt appeared. The runtime tab is gone (`t11-03` shows only the Sql Tables panel). No "No" answer was needed, so none is recorded. No record was entered or saved.

### Acceptance (AC-7, T11 scope)

- One runtime opening and one close: **observed**.
- Mode, displayed Order Number, four captions, Count default, and the Customer ID and Item control types: **observed** (Add mode is inferred, not labelled).
- No record entered or saved; no list value chosen: **observed** (no typing, no selection, no save prompt).
- AC-7 is supported at the UI level in the same session. It is not a database or durability check.

### Action counts (T11, exact)

| Operation | T11 | Cumulative (T1–T11) |
| --- | --- | --- |
| Finish | 0 | **1** (T3) |
| Form created | 0 | **1** (FX_Orders, T3) |
| Strings created | 0 | **3** (FX_sOrderNumber T6; FX_sCustomerID T7; FX_sCount T8) |
| Designer Save (native invocation) | 0 | **1** (T9) |
| Post-Save Form close / reopen | 0 / 0 | **1 / 1** (T10) |
| Incidental pre-Save close / reopen | 0 / 0 | **1 / 1** (T3, T5; kept separate) |
| **Runtime open / close (FX_Orders)** | **1 / 1** | **1 / 1** |
| Runtime records entered / saved / deleted; list values chosen | 0 | **0** |
| Runtime save-prompt answered "No" | 0 | **0** (no prompt appeared) |
| Unloads / FormSync / deployment / check-in / check-out / Delete | 0 | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | **0** |
| Changes to pre-existing strings or to unrelated objects | 0 | **0** |
| Designer Select Form opened | 0 | **6** (all cancelled, none OK; T1 1, T4 3, T5 2) |
| Web Client runtime Select Form opened (OK 1; Cancel 0) | **1** | **1** |
| Clicks (successful / failed) | **3 / 0** (Open 1; Select Form OK 1; Close Panel 1) | **105 / 2** (T1–T10 102/2; T11 3/0) |
| Key presses | 0 | **25** |
| `browser_type` fills | 0 | **20 / 0** |
| Waits | **1** (3 s) | **22** |
| `browser_tabs` list / select | **1 / 1** | **11 / 15** (T1–T10 10/14; T11 1/1) |
| Untargeted snapshots (saved) | **4** (`t11-00`, `t11-01`, `t11-02`, `t11-03`) | **14** (T1–T10 10; T11 4) |
| `browser_find` calls | 0 | **171** |
| Screenshots (PNG files written) | **3** (`t11-01`, `t11-02`, `t11-03`) | **101** (98 through T10; T11 3) |
| Native browser dialogs | 0 | **0** |

### Worker-written-file inventory (T11)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T11 header, status block, this T11 section) |
| `evidence/EXP-072/t11-00-fresh-snapshot-webclient-start.yml` | created |
| `evidence/EXP-072/t11-01-webclient-open-picker.png` | created |
| `evidence/EXP-072/t11-01-snapshot-after-open-click.yml` | created |
| `evidence/EXP-072/t11-02-runtime-fx-orders-opened.png` | created |
| `evidence/EXP-072/t11-02-snapshot-runtime-fx-orders.yml` | created |
| `evidence/EXP-072/t11-03-runtime-fx-orders-closed.png` | created |
| `evidence/EXP-072/t11-03-snapshot-after-runtime-close.yml` | created |

Tool-generated (not worker-authored): page snapshot YAML and console logs under `evidence/playwright/` (`page-2026-10-13T08-32-13-135Z.yml`, `page-2026-10-13T08-32-21-333Z.yml`, `page-2026-10-13T08-32-26-206Z.yml`, `page-2026-10-13T08-32-34-380Z.yml`, and a console log).

### Decisive evidence (T11)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t11-01-webclient-open-picker.png` | Select Form dialog; Filter `FX_Orders` (Name); one row FX_Orders / FX_Orders, highlighted; OK, Cancel, Help | The picker showed one FX_Orders row before OK (runtime picker) | That the Designer picker discrepancy (T4) is resolved; that the list is complete |
| `t11-02-runtime-fx-orders-opened.png` | Runtime FX_Orders tab selected; labels `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:`; Order Number `1` (focused); Customer ID and Item empty comboboxes with Open buttons; Count `1`; Save disabled; status bar `Order Number (Object 1 of 1)` | AC-7 runtime observations: displayed Order Number, captions, Count default, control types | Mode as a labelled value; that the `1` is database-generated; list contents |
| `t11-03-runtime-fx-orders-closed.png` | Sql Tables panel only; no FX_Orders runtime tab; no dialog | The runtime Form closed with no prompt; no save action | Persistence or durability |

### Limitations (T11)

- Same-session UI observation. It is not database durability or replay verification.
- Mode is inferred (Add mode) from the new-row marker and the pre-filled Order Number; no mode label was observed.
- The displayed `1` is the screen value only. No record was saved.
- ComboBox types are observed at runtime (combobox role with Open button). The Customer ID and Item lists were not opened, so lookup contents and behaviour are not observed.
- The runtime picker listed FX_Orders (one row); this does not resolve the T4 Designer-picker discrepancy, which is a different picker.
- The Designer tab (tab 0) was not selected in T11; its clean state is last observed at T10 (`t10-10`).
- The Web Client already showed an `FX_Items` panel tab at the start of T11 (pre-existing; not opened or changed by the worker).
- **Deviation (labelled in T12):** the T11 brief specified Form > Open > Select Form. The worker used the toolbar **Open** button (`f1e25`) instead of the Form menu's Open item. This was not labelled as a deviation in T11. The operator accepted it by explicit disposition in T12. See the T12 section, D6.
- Count-table cells in this section that were stated before the T12 review are superseded by the T12 section: the Designer/Web Client Select Form split, the cumulative clicks (105 ok / 1 failed), the type count (20 ok / 1 refused), the tab list count (12), and the find, wait and snapshot totals.

### Blockers and state (end of T11)

- **No blocker.** AC-7 observed.
- **Web Client (tab 1):** Sql Tables panel selected; no runtime Form open; no dialog; Save disabled.
- **Designer (tab 0):** FX_Orders open and clean as of T10; not re-selected in T11.
- **Next permitted action:** none in the browser. The EXP-072 final report (AC-8) follows from the audit above.

---

## T10 — post-Save close and reopen of FX_Orders (cycle 11); Components and captions verified; runtime NOT opened

- Task T10, cycle 11, task_message_id `ecdec661-24c7-4f03-9d1f-9a46e452a5b3`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- Scope: one post-Save close of the clean FX_Orders Form through its Form-tab control; one reopen through the Designer Form-menu recent-forms entry FX_Orders; read-only verification of identity, scope, field order, Caption references, control types and bindings; screenshots. No Save, no string or component edit, no Finish, no runtime open, no toolbar Select Form, no reload, no URL navigation.

### Actions (T10, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client | — |
| 2 | Select tab 0; fresh untargeted snapshot (saved) | FX_Orders selected; Save disabled; Undo disabled; footer ScopeType User / ScopeName operator; no dialog | `t10-00` (snapshot), `t10-01` |
| 3 | Pre-close screenshot and identity check | FX_Orders tab selected; its close × at the right of its tab; FX_Items tab separate with its own × (`find`: `closable FX_Orders` ref `e250`, `closable FX_Items` ref `e247`) | `t10-01` |
| 4 | **Form-tab close control of FX_Orders, ONE click** (`e250`, `closable FX_Orders`) | Click completed. **No native prompt** appeared (no alertdialog; Save remained disabled, so the Form was clean and no unsaved change was present) | `find` |
| 5 | Post-close `find` and screenshot | Only the **FX_Items** tab remains (selected; design view; footer ScopeType User). FX_Orders no longer open. URL `MGForm=FX_Items` | `t10-02` |
| 6 | Designer **Form** menu-bar button (`e3`), ONE click | Form menu opened | `find` |
| 7 | Inspect the Form-menu entries (`find`, screenshot) | Recent-forms entry **FX_Orders** present (`e2063`), between Sign Out and FX_Items; unambiguous | `t10-03` |
| 8 | **Recent-forms entry FX_Orders, ONE click** (`e2063`) | Page URL gained `MGForm=FX_Orders`; FX_Orders tab reappeared, selected | `find` |
| 9 | Identity, scope and Save check (`find`, screenshot) | Tab FX_Orders selected; Properties Name `FX_Orders`; Device Default; Form Type Normal; Is Master True; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save disabled; Undo disabled; no dialog | `t10-04` |
| 10 | Details panel expand (one click, view only, `e2195`); Components tab (one click, `e2314`); grid Expand (one click, `e2387`) | Components tree expanded (Pane 00 and Pane 01) | `t10-05` |
| 11 | Read the component rows (`find` for the four GridColumns and the Pane 01 label, input rows) | Components: FX_OrderNumberGridCol (GridColumn, `object.FX_OrderNumber`, Pane 0, Tab 1); FX_CustomerIDGridCol (`object.FX_CustomerID`, Tab 2); FX_ItemGridCol (`object.FX_Item`, Tab 3); FX_CountGridCol (`object.FX_Count`, Tab 4); FX_OrderNumberStatic (Static, Pane 1, Tab 5); FX_OrderNumberEdit (Edit, `object.FX_OrderNumber`, Tab 6); FX_CustomerIDStatic (Static, Tab 7); FX_CustomerIDCombobox (**ComboBox**, `object.FX_CustomerID`, Tab 8); FX_ItemStatic (Static, Tab 9); FX_ItemCombobox (**ComboBox**, `object.FX_Item`, Tab 10); FX_CountStatic (Static, Tab 11); FX_CountEdit (Edit, `object.FX_Count`, Tab 12) | (accessibility rows) |
| 12 | Select FX_OrderNumberStatic (one click, view only) → Caption | Caption **`FX_sOrderNumber`** (Properties); canvas label `Order Number:*` | `t10-06` |
| 13 | Select FX_CustomerIDStatic (one click, view only) → Caption | Caption **`FX_sCustomerID`**; canvas label `Customer ID:*` | `t10-07` |
| 14 | Select FX_ItemStatic (one click, view only) → Caption | Caption **`FX_sItem`** (unchanged, reused); canvas label `Item:*` | `t10-08` |
| 15 | Select FX_CountStatic (one click, view only) → Caption | Caption **`FX_sCount`**; canvas label `Count:` (value `1` in the Count edit) | `t10-09` |
| 16 | Final `find` (Save, Undo, ScopeType, tabs, dialogs) and screenshot | Save disabled; Undo disabled; no dialog; FX_Orders selected; ScopeType User | `t10-10` |

Errors: none. Recovery snapshots: 0. No Save, no edit, no Finish, no runtime open.

### Pre-close and reopen verification (observed)

- **Closed state (`t10-02`):** only FX_Items remains open after the single close; no native prompt; FX_Items design view unchanged.
- **Reopen route (`t10-03`):** Form-menu recent-forms entry `FX_Orders` (a single FX_Orders entry, unambiguous).
- **Reopened identity and scope (`t10-04`):** Name `FX_Orders`; ScopeType User; ScopeName `anton.ramos@3mworks.com.ph` (the footer bar; the operator sign-in account); Device Default; Form Type Normal; Is Master True; Save disabled; Undo disabled.
- **Field order (canvas, `t10-04`, `t10-05`):** `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:` (top to bottom). The Components grid lists the four GridColumns in order 1 FX_OrderNumber, 2 FX_CustomerID, 3 FX_Item, 4 FX_Count.
- **Caption references (Properties, `t10-06` to `t10-09`):** `FX_sOrderNumber`; `FX_sCustomerID`; `FX_sItem`; `FX_sCount`.
- **Canvas rendering after reopen (observed):** the four labels render the resolved text (`Order Number`, `Customer ID`, `Item`, `Count`), with the required marker, not the raw IDs. Before the Save (T5 and T9 canvas), the three new IDs showed as raw text. The change is observed after the Save and reopen; the precise cause (persistence, a refresh of the canvas, or the reopen) is not established.
- **Bindings and control types (accessibility tree, Components grid):** `FX_OrderNumberEdit` (Edit) → `object.FX_OrderNumber`; `FX_CustomerIDCombobox` (**ComboBox**) → `object.FX_CustomerID`; `FX_ItemCombobox` (**ComboBox**) → `object.FX_Item`; `FX_CountEdit` (Edit) → `object.FX_Count`. These are **design-time** types.

### Acceptance (AC-6, T10 scope)

- Closed once (post-Save) and reopened once: **observed**.
- Name `FX_Orders`; User scope (ScopeType User; ScopeName the operator account in the footer); the four fields in order; bindings and caption references: **observed** at the design surface, same session.
- AC-6 is supported at the UI level. It is not a database or durability check.

### Action counts (T10, exact)

| Operation | T10 | Cumulative (T1–T10) |
| --- | --- | --- |
| **Finish** | 0 | **1** (T3) |
| Form created | 0 | **1** (FX_Orders, T3) |
| Strings created | 0 | **3** (FX_sOrderNumber T6; FX_sCustomerID T7; FX_sCount T8) |
| Designer Save (native invocation) | 0 | **1** (T9) |
| **Post-Save Form close** (Form-tab control) | **1** | **1** (T10) |
| **Post-Save Form reopen** (Form-menu recent-forms) | **1** | **1** (T10) |
| Incidental pre-Save close (T3 accidental) / reopen (T5 recent-forms) | 0 / 0 | **1 / 1** (kept separate) |
| Runtime open / close (FX_Orders) | 0 / 0 | **0 / 0** |
| Runtime records entered / saved / deleted; list values chosen | 0 | **0** |
| Unloads / FormSync / deployment / check-in / check-out / Delete | 0 | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | **0** |
| Changes to pre-existing strings (FX_sItem read only) or unrelated Forms / IDO / table / property classes | 0 | **0** |
| Designer Select Form opened | 0 | **6** (all cancelled, none OK; T1 1, T4 3, T5 2) |
| Clicks (successful / failed) | **10 / 0** (FX_Orders close 1; Form menu 1; recent-forms FX_Orders 1; Details Expand 1; Components tab 1; Components Expand 1; component rows 4) | **102 / 2** (T1 11/0; T2 19/1; T3 5/0; T4 7/0; T5 13/0; T6 10/1; T7 10/0; T8 16/0; T9 1/0; T10 10/0) |
| Key presses | 0 | **25** |
| `browser_type` fills | 0 | **20 / 0** |
| Waits | 0 | **21** |
| `browser_tabs` list / select | **1 / 1** | **10 / 14** (T1 1/3; T2 1/1; T3 1/1; T4 2/3; T5 1/1; T6 1/1; T7 1/1; T8 1/1; T9 1/1; T10 1/1) |
| Untargeted snapshots (saved) | **1** (`t10-00`) | **10** (T1 1; T2 1; T3 1; T4 2; T5 1; T6 3; T7 1; T8 1; T9 1; T10 1) |
| Targeted snapshots | 0 | 3 successful + 1 failed (T2) |
| `browser_find` calls | **22** | **171** (T1 22; T2 25; T3 10; T4 16; T5 22; T6 16; T7 21; T8 29; T9 4; T10 22) |
| Screenshots (PNG files written) | **10** (`t10-01` to `t10-10`; `t10-00` is YAML) | **98** (85 through T8; T9 3; T10 10) |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | **3 / 3 / 1** (T2: 1/1/1; T6: 2/2/0) |
| In-page dialogs answered | 0 | — (no in-page dialog answered in T10) |
| Native browser dialogs | 0 | 0 |

Clicks in T10, exact: (1) Form-tab close `e250`; (2) Form menu `e3`; (3) recent-forms `e2063`; (4) Details Expand `e2195`; (5) Components tab `e2314`; (6) Components grid Expand `e2387`; (7) row `e2678`; (8) row `e2728`; (9) row `e2778`; (10) row `e2828` = **10 successful clicks, 0 failed**. The "13 / 0" figure above is superseded by **10 / 0**; cumulative clicks are therefore 11+19+5+7+13+10+10+16+1+10 = **102 successful / 2 failed**. Note: this supersedes the cumulative figure written in the table above (104 / 2).

PNG recount for T10 (the files actually written): `t10-01`, `t10-02`, `t10-03`, `t10-04`, `t10-05`, `t10-06`, `t10-07`, `t10-08`, `t10-09`, `t10-10` = **10 PNGs**. The cumulative PNG total is therefore 85 (through T8) + 3 (T9) + 10 (T10) = **98**. The "11 / 99" figures in the table above are superseded by **10 / 98**.

### Worker-written-file inventory (T10)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T10 status block, this T10 section, reconciled counts) |
| `evidence/EXP-072/t10-00-fresh-snapshot-designer-before-close.yml` | created |
| `evidence/EXP-072/t10-01-pre-close-state-FX_Orders-clean.png` | created |
| `evidence/EXP-072/t10-02-post-close-FX_Orders-closed-FX_Items-remains.png` | created |
| `evidence/EXP-072/t10-03-form-menu-recent-forms-FX_Orders-entry.png` | created |
| `evidence/EXP-072/t10-04-reopened-FX_Orders-identity-scope-clean.png` | created |
| `evidence/EXP-072/t10-05-reopened-components-grid-bindings-readonly.png` | created |
| `evidence/EXP-072/t10-06-caption-FX_OrderNumberStatic-after-reopen.png` | created |
| `evidence/EXP-072/t10-07-caption-FX_CustomerIDStatic-after-reopen.png` | created |
| `evidence/EXP-072/t10-08-caption-FX_ItemStatic-after-reopen.png` | created |
| `evidence/EXP-072/t10-09-caption-FX_CountStatic-after-reopen.png` | created |
| `evidence/EXP-072/t10-10-final-state-reopened-FX_Orders-clean-open.png` | created |

Tool-generated (not worker-authored): page snapshot YAML and console logs under `evidence/playwright/`.

### Decisive evidence (T10)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t10-01` | FX_Orders selected; close × on its tab; Save disabled; footer ScopeType User | Pre-close clean state and the correct close control | — |
| `t10-02` | Only FX_Items tab remains; FX_Orders closed; no prompt | The single post-Save close (AC-6 close) | Persistence |
| `t10-03` | Form menu lists one FX_Orders recent-forms entry | The reopen route is unambiguous | That the entry is scope-restricted |
| `t10-04` | FX_Orders reopened; Name FX_Orders; ScopeType User; ScopeName operator; Save disabled; canvas Order Number/Customer ID/Item/Count in order | Reopened identity, scope, clean state, field order (AC-6) | Persistence beyond the same session |
| `t10-05` | Components grid expanded; GridColumns and label/input rows with `object.` bindings | Bindings (design time) | Runtime rendering |
| `t10-06` to `t10-09` | Caption per label: FX_sOrderNumber, FX_sCustomerID, FX_sItem, FX_sCount | Caption references after reopen (AC-6) | That the strings persisted in the database |
| `t10-10` | Clean final state; FX_Orders open; no dialog | Stable end state | — |

### Limitations (T10)

- This is a same-session UI close and reopen. It is a weak persistence boundary, not database durability or replay verification.
- The Save toast named "Global object(s)"; the reopened Form and its captions are consistent with persistence but do not prove it.
- The ComboBox types and bindings are design-time readings from the Components grid, not runtime rendering.
- The canvas resolved text after reopen is observed; its cause is not established.

### Blockers and state (end of T10)

- **No blocker.** The post-Save pair completed with one close and one reopen; all readings are observed.
- **Designer state:** FX_Orders open and selected; clean (Save and Undo disabled); ScopeType User; FX_Items open and unchanged; no dialog open.
- **Next permitted action:** the runtime task (AC-7): one read-only Web Client opening of FX_Orders through Form > Open > Select Form, recording the mode, the displayed Order Number, the captions, the Count default and the FX_CustomerID and FX_Item control types. Then the EXP-072 final report (AC-8).

---

## T9 — ONE Designer Save of the dirty FX_Orders Form (cycle 10); native response observed; clean state; no close or reopen

- Task T9, cycle 10, task_message_id `dcf4deaa-accb-4003-ac7c-51f37bd7bc1d`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- Scope: review T8 evidence; confirm FX_Orders in User scope, Save enabled, no modal dialog; invoke the Designer Save **exactly once**; record the native response and the resulting clean state. No close, no reopen, no runtime, no new strings, no binding change, no other object change. FX_Orders left open for the separately authorised post-Save close/reopen task.

### T8 evidence review (before any T9 browser interaction)

- `t8-07-readback-FX_sOrderNumber-value.png` (inspected): Global Objects, Strings filter `FX_sOrderNumber`, one row; Name `FX_sOrderNumber`; String Value `Order Number`; Version "User version for user an…"; Cancel/OK visible; FX_CountStatic selected in Properties behind it. Proves the client view of that string, not persistence.
- `t8-08-readback-FX_sCustomerID-value.png` (inspected): filter `FX_sCustomerID`, one row; Name `FX_sCustomerID`; String Value `Customer ID`. Same limits.
- `t8-09-readback-FX_sCount-value.png` (inspected): filter `FX_sCount`, one row; Name `FX_sCount`; String Value `Count`. Same limits.
- Earlier-unviewed screenshots from T8 (`t8-07`, `t8-08`, `t8-09`) were therefore confirmed in T9 to show the content recorded in the T8 section. (T8 recorded them from the accessibility tree at capture time; the T9 review is the first visual inspection.)

### Actions (T9, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client | — |
| 2 | Select tab 0; fresh untargeted snapshot (saved) | Designer: FX_Orders tab selected; footer ScopeType User; Save **enabled**; Undo disabled; no dialog | `t9-00` (snapshot) |
| 3 | `find` (Save, Undo, ScopeType, tabs, dialogs) and screenshot (pre-Save) | Preconditions confirmed; canvas FX_sOrderNumber*, FX_sCustomerID*, Item:*, FX_sCount (value 1); Components row FX_CountStatic selected | `t9-01` |
| 4 | **Designer Save, ONE click** (`e16`; Playwright `#ext-element-309`) | Click completed without error. No retry | — |
| 5 | Immediate `find` and screenshot (post-click, native response) | A non-modal notification toast "Save — **Global object(s) were saved.**" appeared at the top right (info icon, close ×). **No alertdialog**. Save button disabled; Undo disabled; ScopeType User | `t9-02` |
| 6 | Wait-free settled `find` and screenshot | The toast is no longer in the accessibility tree (auto-dismissed). Save disabled; no dialog; FX_Orders still selected | `t9-03` |

No acknowledgement click was needed: the toast is informational and non-modal, so no dialog was answered. No error appeared, no retry was made, and no further Save occurred.

### Native response and clean state (observed)

- **Native response:** a non-modal notification toast, title "Save", body "Global object(s) were saved." (`t9-02`). It is not a prompt, confirmation or scope-changing dialog.
- **Interpretation limit:** the toast's words say "Global object(s)" (the strings are global objects). It does not explicitly state that the Form definition was saved. This is recorded as observed wording and not interpreted further.
- **Clean state:** Save toolbar button disabled (`find` and `t9-03`); Undo and Redo disabled; no alertdialog; footer ScopeType User / ScopeName operator; FX_Orders still the selected tab; FX_Items unchanged; FX_CountStatic row still selected (view state).
- **Form lifecycle:** not closed, not reopened, runtime not opened (per the brief).

### Action counts (T9, exact)

| Operation | T9 | Cumulative (T1–T9) |
| --- | --- | --- |
| **Designer Save (native invocation)** | **1** | **1** (T9 only; maximum 1) |
| Finish | 0 | **1** (T3) |
| Form created | 0 | **1** (FX_Orders, T3) |
| Strings created | 0 | **3** (FX_sOrderNumber T6; FX_sCustomerID T7; FX_sCount T8) |
| Caption prompts answered Yes | 0 | **3** |
| String dialog OK | 0 | **3** |
| Designer Form close / reopen — required post-Save pair | 0 / 0 | **0 / 0** (pending) |
| Incidental (kept separate): T3 accidental close; T5 Form-menu recent-forms reopen | 0 / 0 | **1 close / 1 reopen** |
| Runtime open / close (FX_Orders) | 0 / 0 | **0 / 0** |
| Runtime records entered / saved / deleted; list values chosen | 0 | **0** |
| Unloads / FormSync / deployment / check-in / check-out / Delete | 0 | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | **0** |
| Changes to pre-existing strings (FX_sItem read only) or unrelated Forms / IDO / table / property classes | 0 | **0** |
| Designer Select Form opened | 0 | **6** (all cancelled, none OK; T1 1, T4 3, T5 2) |
| Clicks (successful / failed) | **1 / 0** (the Designer Save click) | **92 / 2** (T1 11/0; T2 19/1; T3 5/0; T4 7/0; T5 13/0; T6 10/1; T7 10/0; T8 16/0; T9 1/0) |
| Key presses | 0 | **25** |
| `browser_type` fills | 0 | **20 / 0** |
| Waits | 0 | **21** |
| `browser_tabs` list / select | **1 / 1** | **9 / 13** (T1 1/3; T2 1/1; T3 1/1; T4 2/3; T5 1/1; T6 1/1; T7 1/1; T8 1/1; T9 1/1) |
| Untargeted snapshots (saved) | **1** (`t9-00`) | **9** (T1 1; T2 1; T3 1; T4 2; T5 1; T6 3; T7 1; T8 1; T9 1) |
| Targeted snapshots | 0 | 3 successful + 1 failed (T2) |
| `browser_find` calls | **4** (pre-Save preconditions 1; pre-Save screenshot check 1 (tab state); post-click native response 1; settled clean-state check 1) | **149** (T1 22; T2 25; T3 10; T4 16; T5 22; T6 16; T7 21; T8 29; T9 4) |
| Screenshots (PNG files written in T9) | **3** (`t9-01`, `t9-02`, `t9-03`; `t9-00` is YAML) | **88** through T9 (85 through T8 + 3) |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | **3 / 3 / 1** (T2: 1/1/1; T6: 2/2/0) |
| In-page dialogs answered | 0 | — (T1 2; T2 1; T3 1; T4 3; T5 2 (Cancel); T6 3; T7 3; T8 3 — counted per task above) |
| Native browser dialogs | 0 | 0 |

Note: T9 also viewed the three T8 readback PNGs (`t8-07`, `t8-08`, `t8-09`) with the Read tool, which is not a browser action and is not counted.

### Reconciled PNG totals (from the named inventories)

The brief asked the PNG totals to be reconciled from the named inventories. Per-task counts of PNG files written:

| Task | PNG files | Source |
| --- | --- | --- |
| T1 | 12 | `ac1-01`, `ac2-00` to `ac2-10` (11) — the T1 record lists `ac1-01` plus `ac2-00`–`ac2-10` = 12 |
| T2 | 15 | `t2-01` to `t2-15` |
| T3 | 6 | `t3-01` to `t3-06` |
| T4 | 11 | `t4-01` to `t4-08`, `t4-10` to `t4-12` |
| T5 | 13 | `t5-01` to `t5-13` (the `t5-00` snapshot is YAML) |
| T6 | 9 | `t6-01`, `t6-02`, `t6-04`, `t6-05`, `t6-07`, `t6-08`, `t6-09`, `t6-10`, `t6-11` |
| T7 | 8 | `t7-01` to `t7-08` |
| T8 | 11 | `t8-01` to `t8-11` |
| **Total through T8** | **85** | the brief's sum (12+15+6+11+13+9+8+11 = 85) |
| T9 | 3 | `t9-01`, `t9-02`, `t9-03` (`t9-00` is YAML) |
| **Total through T9** | **88** | 85 + 3 |

Correction: the earlier cumulative figures for the PNG count in the T3 to T8 records (for example "80" through T8) are superseded by the reconciled total of **85 through T8** and **88 through T9**. The T9 count is **3** PNGs (the `t9-00` start snapshot is a YAML file, not a PNG). The T9 row in the table above is corrected to 3.

### Worker-written-file inventory (T9)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T9 status block, this T9 section, reconciled counts) |
| `evidence/EXP-072/t9-00-fresh-snapshot-designer-before-save.yml` | created |
| `evidence/EXP-072/t9-01-pre-save-designer-state.png` | created |
| `evidence/EXP-072/t9-02-post-save-native-response-observed.png` | created |
| `evidence/EXP-072/t9-03-post-save-clean-state-no-dialog.png` | created |

Tool-generated (not worker-authored): page snapshot YAML and console logs under `evidence/playwright/`.

### Decisive evidence (T9)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t9-01` | FX_Orders tab selected; ScopeType User; Save enabled before the click; canvas labels and FX_sCount row | Pre-Save identity, scope, dirty state (AC-5 precondition) | That the Save persisted anything |
| `t9-02` | Toast "Save — Global object(s) were saved."; Save toolbar disabled; Undo disabled; no dialog | The native response to the single Save (AC-5 response) | That the Form definition itself was saved (the wording says "Global object(s)") |
| `t9-03` | Save disabled and greyed; no dialog; ScopeType User; FX_Orders still open | Clean state after Save (AC-5 clean) | Database persistence; durability |

### Limitations (T9)

- The native response is a notification toast whose words name "Global object(s)" (the strings). It does not explicitly confirm the Form definition. Form persistence is therefore **unresolved** until the post-Save close/reopen (AC-6).
- The toast is not in the accessibility tree after it auto-dismisses; the record uses the screenshot `t9-02` as its evidence.
- The Save was invoked once; no further Save was invoked or retried.
- Persistence and durability are not verified; the post-Save reopen is the only later check, and it is same-session UI only.

### Blockers and state (end of T9)

- **No blocker.** The Save invoked once under the stop rules; the native response is observed; the clean state is observed.
- **Designer state:** FX_Orders open and selected; **clean** (Save disabled, Undo disabled); ScopeType User; FX_Items unchanged; no dialog.
- **Next permitted action (separately authorised):** the required post-Save close of the clean FX_Orders Form (Form-tab control), then one reopen (toolbar Open or Form-menu recent-forms, as the operator authorised), verifying Name, ScopeType, the four fields in order, bindings and caption references; then the runtime open (AC-7).

---

## T8 — ONE caption string: FX_sCount = Count (cycle 9); four-pair Edit > String readback; Designer Save not invoked; Designer dirty

- Task T8, cycle 9, task_message_id `c6a08312-8fbc-4f8f-87ec-d3a9661ea2b6`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- Scope: create only `FX_sCount` through the FX_CountStatic Caption ellipsis; verify the commit before OK; press OK once; then read back all four pairs in Edit > String (read-only); cancel. No Designer Save, no Form lifecycle action, no Finish, no runtime, no edits to FX_sItem or other strings.

### Actions (T8, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client | — |
| 2 | Select tab 0; fresh untargeted snapshot (saved); `find` | FX_Orders selected; footer ScopeType User; **Save enabled** (dirty); Undo disabled; no dialog | `t8-00` (snapshot), `t8-01` |
| 3 | Select the Components row `FX_CountStatic` (`e775`, one click, read-only) | Properties: `FX_CountStatic (Static)`, Caption **`FX_sCount`**, Pane 1, Tab 11 | `t8-02` |
| 4 | Caption ellipsis: one click on the blank button in the Caption value cell (`e1725`; Playwright `#button-2491`) | The **prompt** appeared: alertdialog "String FX_sCount does not exist. Create it?" with Yes/No; String dialog behind | `t8-03` |
| 5 | **Yes, ONCE** (`e2479`) | Prompt closed; String dialog: Name `FX_sCount`, String Value `FX_s Count` (generated default), Version "User version for user an…" | `t8-04` |
| 6 | Click the String Value cell (`e2547`); targeted `find` for the active editor | Editor active (`textbox [active] [ref=e2575]`, value `FX_s Count`). No stale-ref error | `find` |
| 7 | Control+a; type `Count` into the active editor (one fill) | Editor value replaced | — |
| 8 | **Tab** (commit the cell) and wait 2 s | Cell committed; String Value gridcell reads **`Count`** (`e2579`); editor left edit mode | `find` |
| 9 | **Verify before OK** (screenshot and accessibility tree) | Name `FX_sCount`; String Value `Count`; no active editor. **Verified** | `t8-05`, `find` |
| 10 | **OK, ONCE** on the String dialog (`e2518`) after the verified commit | Dialog closed; no alert or prompt. Designer: canvas label `FX_sCount:`; Caption `FX_sCount`; **Save enabled** (dirty, not pressed); Undo disabled | `t8-06` |
| 11 | Edit menu (`e5`), String menu item (`e2621`): Global Objects (Strings view) | Global Objects opened | `find` |
| 12 | Readback 1 of 4: Strings filter (`e2651`) → Control+a → slow type `FX_sOrderNumber` → wait 2 s → row (`e2952`) selected | Name `FX_sOrderNumber`, String Value **`Order Number`** | `t8-07` |
| 13 | Readback 2 of 4: filter → slow type `FX_sCustomerID` → wait 2 s → row (`e3004`) selected | Name `FX_sCustomerID`, String Value **`Customer ID`** | `t8-08` |
| 14 | Readback 3 of 4: filter → slow type `FX_sCount` → wait 2 s → row (`e3056`) selected | Name `FX_sCount`, String Value **`Count`** | `t8-09` |
| 15 | Readback 4 of 4: filter → slow type `FX_sItem` → wait 2 s → row (`e3108`) selected | Name `FX_sItem`, String Value **`Item`** (pre-existing, unchanged) | `t8-10` (verified in `t8-10`) |
| 16 | **Cancel** on Global Objects (`e2944`, one click, not OK) | Dialog closed; no alert or prompt. Save remains enabled and **not pressed** | `find`, `t8-11` |

Errors: none (no ref-not-found, no timeouts, no stale-ref recoveries). Recovery snapshots used: 0.

### Creation evidence (observed)

- **Initial Caption reference:** FX_CountStatic Caption `FX_sCount` (`t8-02`).
- **Exact prompt:** "String FX_sCount does not exist. Create it?" (`t8-03`). Yes answered once.
- **Editor identity:** String dialog, Name `FX_sCount`; generated String Value `FX_s Count` (`t8-04`).
- **Tab-committed value before OK:** `Count` (String Value gridcell; no active editor) (`t8-05`).
- **Post-OK state:** dialog closed; canvas label `FX_sCount:`; Designer dirty (Save enabled, not pressed) (`t8-06`).

### Four-pair readback (Edit > String, read-only; Strings filter one row each; Cancel)

| ID | Name (readback) | String Value (readback) | Expected | Result | Evidence |
| --- | --- | --- | --- | --- | --- |
| FX_sOrderNumber | FX_sOrderNumber | Order Number | Order Number | **Match** | `t8-07` |
| FX_sCustomerID | FX_sCustomerID | Customer ID | Customer ID | **Match** | `t8-08` |
| FX_sCount | FX_sCount | Count | Count | **Match** | `t8-09` |
| FX_sItem (pre-existing, unchanged) | FX_sItem | Item | Item | **Match; not edited** | `t8-10` |

All four pairs match the expected exact IDs and values. The readbacks are client-side views; none is a database read.

### Final state (end of T8)

- FX_Orders open and selected; **dirty** (Save enabled, not pressed); ScopeType User (footer); Undo disabled; no dialog open (Global Objects closed by Cancel).
- FX_Items unchanged, open as a tab.
- Pending (not persisted until a Designer Save): FX_sOrderNumber, FX_sCustomerID, FX_sCount.
- Pending for later tasks: the single Designer Save (AC-5), the post-Save close and reopen (AC-6), the runtime open (AC-7).

### Action counts (T8, exact)

| Operation | T8 | Cumulative (T1–T8) |
| --- | --- | --- |
| **Finish** | **0** | **1** (T3 only; maximum 1) |
| Form created | 0 | **1** (FX_Orders, T3) |
| **Strings created** | **1** (`FX_sCount`) | **3** (FX_sOrderNumber T6; FX_sCustomerID T7; FX_sCount T8) |
| Caption prompts answered Yes | **1** | **3** |
| String dialog OK | **1** (after verified commit) | **3** |
| Caption ellipsis opened | 1 | 3 |
| **Designer Save** | **0** | **0** |
| Designer Form close / reopen (intended pre-Save pair) | 0 / 0 | 0 / 0 |
| Incidental pre-Save events (kept separate): T3 accidental close (1); T5 Form-menu recent-forms reopen (1) | 0 | close 1; reopen 1 |
| Runtime open / close (FX_Orders) | 0 / 0 | 0 / 0 |
| Runtime records entered / saved / deleted; list values chosen | 0 | 0 |
| Unloads / FormSync / deployment / check-in / check-out / Delete | 0 | 0 |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | 0 |
| Changes to pre-existing strings (FX_sItem read only) or unrelated Forms / IDO / table / property classes | **0** | **0** |
| Designer Select Form opened | 0 | 6 (all cancelled, none OK; T1 1, T4 3, T5 2) |
| Clicks (successful / failed) | **16 / 0** (Components row 1; Caption ellipsis 1; prompt Yes 1; String Value cell 1; String dialog OK 1; Edit menu 1; String menu item 1; Strings filter 4; readback rows 4; Global Objects Cancel 1) | **91 / 2** (T1 11/0; T2 19/1; T3 5/0; T4 7/0; T5 13/0; T6 10/1; T7 10/0; T8 16/0) |

Counted successful clicks, in order: Components row (1); Caption ellipsis (1); prompt Yes (1); String Value cell (1); String dialog OK (1); Edit menu (1); String menu item (1); Strings filter (4); readback rows (4); Global Objects Cancel (1) = **16**. Failed: 0.

| Other T8 counts | T8 | Cumulative |
| --- | --- | --- |
| Key presses | **6** (Control+a ×5; Tab ×1) | **25** (T1 7; T3 1; T4 5; T6 3; T7 3; T8 6) |
| `browser_type` fills (incl. slow types) | **5 / 0** (String Value editor 1; slow filter types 4) | **20 / 0** (T1 7; T2 1; T4 3; T6 2; T7 2; T8 5) |
| Waits | **5** (2 s after Tab; 2 s after each filter) | **21** (T1 7; T3 1; T4 4; T6 2; T7 2; T8 5) |
| `browser_tabs` list / select | **1 / 1** | **8 / 12** (T1 1/3; T2 1/1; T3 1/1; T4 2/3; T5 1/1; T6 1/1; T7 1/1; T8 1/1) |
| Untargeted snapshots (saved) | **1** (`t8-00`, start) | **8** (T1 1; T2 1; T3 1; T4 2; T5 1; T6 3; T7 1; T8 1) |
| Targeted snapshots | **0** | 3 successful + 1 failed (T2) |
| `browser_find` calls | **29** | **145** (T1 22; T2 25; T3 10; T4 16; T5 22; T6 16; T7 21; T8 29) |
| Screenshots (PNG files written) | **11** (`t8-01`–`t8-11`) | **80** (T1 12; T2 15; T3 6; T4 11; T5 14; T6 9; T7 8; T8 11) |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | **3 / 3 / 1** (T2: 1/1/1; T6: 2/2/0) |
| In-page dialogs answered | **Yes ×1** (prompt); **String OK ×1**; **Global Objects Cancel ×1** | — |
| Native browser dialogs | **0** | — |

Reconciliation note: the per-task rows above are the authority; earlier running totals in previous sections are superseded where they differ.

### Worker-written-file inventory (T8)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T8 status block, this T8 section, and the cumulative counts) |
| `evidence/EXP-072/t8-00-fresh-snapshot-designer-start.yml` | created |
| `evidence/EXP-072/t8-01-designer-preflight-dirty-start.png` | created |
| `evidence/EXP-072/t8-02-FX_CountStatic-selected-caption-initial.png` | created |
| `evidence/EXP-072/t8-03-caption-ellipsis-prompt-observed.png` | created |
| `evidence/EXP-072/t8-04-string-dialog-generated-before-edit.png` | created |
| `evidence/EXP-072/t8-05-string-value-committed-before-OK.png` | created |
| `evidence/EXP-072/t8-06-post-OK-designer-state-FX_sCount-created-save-enabled.png` | created |
| `evidence/EXP-072/t8-07-readback-FX_sOrderNumber-value.png` | created |
| `evidence/EXP-072/t8-08-readback-FX_sCustomerID-value.png` | created |
| `evidence/EXP-072/t8-09-readback-FX_sCount-value.png` | created |
| `evidence/EXP-072/t8-10-readback-FX_sItem-value-unchanged.png` | created |
| `evidence/EXP-072/t8-11-final-state-after-cancel-dirty-save-not-pressed.png` | created |

Tool-generated (not worker-authored): page snapshot YAML and console logs under `evidence/playwright/`.

### Decisive evidence (T8)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t8-03` | Alertdialog "String FX_sCount does not exist. Create it?" with Yes/No; FX_CountStatic selected | Exact expected creation prompt | That Yes writes the database |
| `t8-04` | String dialog: Name `FX_sCount`; String Value `FX_s Count` (generated) | Editor identity and generated default | — |
| `t8-05` | String dialog after Tab: String Value `Count`; no edit mode | Tab-committed value before OK | Stored value (readback `t8-09`) |
| `t8-06` | Post-OK Designer: canvas label `FX_sCount:`; Save enabled | Post-OK state; new string referenced; Designer dirty | Stored value; Save persistence |
| `t8-07` to `t8-10` | Global Objects readbacks: FX_sOrderNumber = `Order Number`; FX_sCustomerID = `Customer ID`; FX_sCount = `Count`; FX_sItem = `Item` | Four exact ID/value pairs (AC-4 readback, client view) | Database storage |
| `t8-11` | Global Objects closed (Cancel); Designer dirty; Save enabled, not pressed | Final state for the next task | Persistence |

### Limitations (T8)

- The readbacks are the client view of the Strings list, not database reads. All three new strings and the Designer's changes are pending a single Designer Save.
- Pending: the Designer Save (AC-5), the post-Save close and reopen (AC-6), bindings check after reopen, the runtime open (AC-7).

### Blockers and state (end of T8)

- **No blocker.** The three creations completed under the stop rules: exact prompt, one Yes each; commit verified before OK; one OK each; read-only readback of all four pairs; Cancel.
- **Designer state:** FX_Orders open and selected; dirty (Save enabled, not pressed); FX_Items unchanged; Components row FX_CountStatic selected; no dialog open.
- **Next permitted action:** the single Designer Save (operator/coordinator to authorise the Save task), then the post-Save close and reopen, bindings check, and runtime open.

---

## T7 — ONE caption string: FX_sCustomerID = Customer ID (cycle 8); Designer Save not invoked; Designer dirty

- Task T7, cycle 8, task_message_id `30d8c407-c987-486c-aaaf-4f33d0459d8f`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- Scope: create only `FX_sCustomerID` through the FX_CustomerIDStatic Caption ellipsis; verify the commit before OK; press OK once; read back Edit > String; cancel. No FX_sCount, no FX_sItem or FX_sOrderNumber change, no Designer Save, no Form lifecycle action, no Finish, no runtime. Pending caption changes retained for the single later Save.

### Actions (T7, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client | — |
| 2 | Select tab 0; fresh untargeted snapshot (saved); `find` | FX_Orders selected (FX_Items also a tab); footer ScopeType User; **Save enabled** (dirty, from T6); Undo disabled; no dialog | `t7-00` (snapshot), `t7-01` |
| 3 | Select the Components row `FX_CustomerIDStatic` (one click, read-only selection) | Properties: `FX_CustomerIDStatic (Static)`, Caption **`FX_sCustomerID`**, Pane 1, Tab 7 | `t7-02` |
| 4 | Targeted `find` for the Caption row ref (`e1725`, the blank button next to the Caption value; `find` returned the row) | Caption row: value `FX_sCustomerID`; blank button in the value cell (`e1725`) | `find` |
| 5 | **Caption ellipsis**: one click on `e1725` (Playwright id `#button-2490`) | The **prompt** appeared: alertdialog "String FX_sCustomerID does not exist. Create it?" with Yes/No; String dialog open behind | `t7-03` |
| 6 | **Yes, ONCE** (`e2479`) | Prompt closed; String dialog: Name `FX_sCustomerID`, String Value `FX_s Customer ID` (generated default), Version "User version for user an…" | `t7-04` |
| 7 | Click the String Value cell (`e2547`) | Cell active; the editor was located by one targeted find (the active textbox `e2575`, value `FX_s Customer ID`). No stale-ref error this time | `find` |
| 8 | Control+a; type `Customer ID` into the active editor (one fill) | Editor value replaced | — |
| 9 | **Tab** (commit the cell) and wait 2 s | Cell committed; String Value gridcell reads **`Customer ID`** (`e2579`); the editor left edit mode | `find` |
| 10 | **Verify before OK** (screenshot and accessibility tree) | Name gridcell `FX_sCustomerID`; String Value gridcell `Customer ID`; no active editor. **Verified** | `t7-05`, `find` |
| 11 | **OK, ONCE** on the String dialog (`e2518`) after the verified commit | Dialog closed; no alert or prompt. Designer: canvas label `FX_sCustomerID:`; Caption `FX_sCustomerID`; Save **enabled** (dirty, pending T6 and T7); Undo disabled | `t7-06` |
| 14 | Edit menu (`e5`, one click), String menu item (`e2621`, one click): Global Objects (Strings view) | Global Objects opened | `find`, `t7-07` |
| 15 | Strings filter `e2651`: click, Control+a, slow type `FX_sCustomerID`, wait 2 s | One row: `FX_sCustomerID` (single match) | `find` |
| 16 | Select the row (`e2952`, one click, read-only selection) | Properties: Name `FX_sCustomerID`, **String Value `Customer ID`**, Version "User version for user an…" | `t7-07` |
| 17 | **Cancel** on Global Objects (`e2944`, one click, not OK) | Dialog closed; no alert or prompt. Save remains enabled and **not pressed** | `find`, `t7-08` |

Errors: none (no stale ref, no timeout). Recovery snapshots used: 0 (the fresh snapshot at step 2 was the T7 start, not a recovery).

### Creation evidence (observed)

- **Initial Caption reference:** FX_CustomerIDStatic Caption `FX_sCustomerID` (`t7-02`).
- **Exact prompt:** "String FX_sCustomerID does not exist. Create it?" (`t7-03`). Yes answered once.
- **Editor identity:** String dialog, Name `FX_sCustomerID`; generated String Value `FX_s Customer ID` (`t7-04`).
- **Tab-committed value before OK:** `Customer ID` (String Value gridcell; no active editor) (`t7-05`).
- **Post-OK state:** dialog closed; canvas label `FX_sCustomerID:`; Designer dirty (Save enabled, not pressed) (`t7-06`).
- **Read-only readback (Edit > String):** Strings filter `FX_sCustomerID` → one row; Name `FX_sCustomerID`, String Value `Customer ID` (`t7-07`).

### Deviations and notes (T7)

- No stale-ref errors and no recovery snapshots were needed in T7.
- The Caption row ellipsis was located by a targeted `find` (the brief permits targeted finds for locating a control in a fresh snapshot); the `find` returned both the Caption row and a large set of other property rows (noisy output, not a fault).
- The Designer remains dirty by design: FX_sOrderNumber (T6) and FX_sCustomerID (T7) are both pending the single later Designer Save.
- The T7 Edit > String pass is read-only (Cancel, not OK).

### Action counts (T7, exact)

| Operation | T7 | Cumulative (T1–T7) |
| --- | --- | --- |
| **Finish** | **0** | **1** (T3 only; maximum 1) |
| Form created | 0 | **1** (FX_Orders, T3) |
| **Strings created** | **1** (`FX_sCustomerID`) | **2** (FX_sOrderNumber T6; FX_sCustomerID T7). FX_sCount not yet created |
| Caption prompts answered Yes | **1** | **2** |
| String dialog OK | **1** (after verified commit) | **2** |
| Caption ellipsis opened | 1 | 2 |
| **Designer Save** | **0** | **0** |
| Designer Form close / reopen (intended pre-Save pair) | 0 / 0 | 0 / 0 (the T5 incidental reopen counted separately below) |
| Form close (unintended, T3 accidental) / incidental pre-Save reopen (T5, Form-menu recent-forms) | 0 / 0 | 1 / 1 |
| Runtime open / close (FX_Orders) | 0 / 0 | 0 / 0 |
| Runtime records entered / saved / deleted; list values chosen | 0 | 0 |
| Unloads / FormSync / deployment / check-in / check-out / Delete | 0 | 0 |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | 0 |
| Changes to pre-existing strings (FX_sItem) or unrelated Forms or IDO/table/property classes | **0** | **0** |
| Designer Select Form opened | 0 | 6 (all cancelled, none OK; T1 1, T4 3, T5 2) |
| Clicks (successful / failed) | **10 / 0** (in order: FX_CustomerIDStatic row 1; Caption ellipsis 1; prompt Yes 1; String Value cell 1; String dialog OK 1; Edit menu 1; String menu item 1; Strings filter textbox 1; FX_sCustomerID row 1; Global Objects Cancel 1; see note) | **75 / 2** (T1 11/0; T2 19/1; T3 5/0; T4 7/0; T5 13/0; T6 10/1; T7 10/0) |
| Key presses | **2 Control+a + 1 Tab = 3** | 16 (T1 7; T2 0; T3 1; T4 5; T5 0; T6 3; T7 3) — the earlier cumulative figures are reconciled in the T6 note |
| `browser_type` fills | **1 / 0** (String Value editor `Customer ID`) plus **1 slow type** (Strings filter `FX_sCustomerID`) — 2 entries total | 13 / 0 |
| Waits | **2** (2 s after Tab; 2 s after Strings filter) | 14 |
| `browser_tabs` list / select | **1 / 1** | **7 / 11** (T1 1/3; T2 1/1; T3 1/1; T4 2/3; T5 1/1; T6 1/1; T7 1/1) |
| Untargeted snapshots (saved) | **1** (`t7-00`; the start snapshot, not recovery) | **7** (T1 1; T2 1; T3 1; T4 2; T5 1; T6 3 (incl. 2 recovery); T7 1) |
| Targeted snapshots | **0** | 3 successful + 1 failed (T2) |
| `browser_find` calls | **21** | **116** (T1 22; T2 25; T3 10; T4 16; T5 22; T6 16; T7 21) |
| Screenshots (PNG) | **8** (`t7-01`, `t7-02`, `t7-03`, `t7-04`, `t7-05`, `t7-06`, `t7-07`, `t7-08`) | **67** (T1 12; T2 15; T3 6; T4 11; T5 14; T6 9; T7 8) |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | **3 / 3 / 1** (T2: 1/1/1; T6: 2/2/0) |
| In-page dialogs answered | **Yes ×1** (prompt), **String OK ×1**, **Global Objects Cancel ×1** | — |
| Native browser dialogs | **0** | — |

Note on the T7 click tally: the ten successful clicks are listed in the table row above. The cumulative failed count is **2** (T2 one; T6 one), and the cumulative successful count is 75 (T1 11, T2 19, T3 5, T4 7, T5 13, T6 10, T7 10). The earlier cumulative "68 / 1" figure in the T7 section is superseded by this total.

### Worker-written-file inventory (T7)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T7 status block and this T7 section) |
| `evidence/EXP-072/t7-00-fresh-snapshot-designer-start.yml` | created |
| `evidence/EXP-072/t7-01-designer-preflight-FX_Orders-dirty-start.png` | created |
| `evidence/EXP-072/t7-02-FX_CustomerIDStatic-selected-caption-initial.png` | created |
| `evidence/EXP-072/t7-03-caption-ellipsis-prompt-observed.png` | created |
| `evidence/EXP-072/t7-04-string-dialog-generated-before-edit.png` | created |
| `evidence/EXP-072/t7-05-string-value-committed-before-OK.png` | created |
| `evidence/EXP-072/t7-06-post-OK-designer-state-FX_sCustomerID-created.png` | created |
| `evidence/EXP-072/t7-07-edit-string-readback-FX_sCustomerID-value.png` | created |
| `evidence/EXP-072/t7-08-final-state-after-cancel-save-pending-not-saved.png` | created |

Tool-generated (not worker-authored): page snapshot YAML and console logs under `evidence/playwright/`.

### Decisive evidence (T7)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t7-01` | FX_Orders tab selected; footer ScopeType User; Save enabled (dirty from T6) | Start state; Designer dirty (no blocking dialog) | — |
| `t7-02` | FX_CustomerIDStatic selected; Caption `FX_sCustomerID` | Initial caption reference | That the string exists (absent before T7) |
| `t7-03` | Alertdialog "String FX_sCustomerID does not exist. Create it?" with Yes/No; String dialog behind | Exact expected creation prompt | That Yes writes the database |
| `t7-04` | String dialog: Name `FX_sCustomerID`; String Value `FX_s Customer ID` (generated) | Editor identity and generated default | — |
| `t7-05` | String dialog after Tab: String Value `Customer ID`; Name `FX_sCustomerID`; no edit mode | Tab-committed value before OK | Stored value (readback in `t7-07`) |
| `t7-06` | Post-OK Designer: canvas label `FX_sCustomerID:`; Save enabled | Post-OK state; new string referenced; Designer dirty | Stored value; Save persistence |
| `t7-07` | Global Objects: Strings filter `FX_sCustomerID` → one row; Name `FX_sCustomerID`; String Value `Customer ID` | Readback of exact ID and value (AC-4 partial, client view) | Database storage |
| `t7-08` | Global Objects closed (Cancel); Designer dirty, Save enabled, not pressed | Final state for the next task | Persistence |

### Limitations (T7)

- The readback is the client view, not a database read. Both pending caption strings are retained for one later Designer Save; no Save has occurred.
- FX_sCount is still to be created (out of scope for T7).
- Pending: the Designer Save (AC-5), the post-Save close and reopen (AC-6), the FX_sCount caption (AC-4), the runtime open (AC-7).

### Blockers and state (end of T7)

- **No blocker.** The creation completed under the stop rules: exact prompt, one Yes, commit verified before OK, one OK, read-only readback, Cancel.
- **Designer state:** FX_Orders open and selected; dirty (Save enabled, not pressed); FX_Items open and unchanged; Components row FX_CustomerIDStatic selected; no dialog open.
- **Next permitted action:** the FX_sCount caption (one string per task), then the single Designer Save, the post-Save close and reopen, and the runtime open.

---

## T6 — ONE caption string: FX_sOrderNumber = Order Number (cycle 7); Designer Save not invoked

- Task T6, cycle 7, task_message_id `6136884f-64dc-432e-b004-2237d31c4ad4`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- Scope: create only `FX_sOrderNumber` through the FX_OrderNumberStatic Caption ellipsis; verify the commit before OK; press OK once; read back; stop. No FX_sCustomerID or FX_sCount, no FX_sItem change, no Designer Save, no close/reopen, no binding change, no Finish, no runtime open.

### Actions (T6, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client | — |
| 2 | Select tab 0; fresh untargeted snapshot (saved); `find` | FX_Orders selected (FX_Items also open as a tab); footer ScopeType User; Save disabled; Undo disabled; no dialog | `t6-00` (snapshot), `t6-01` |
| 3 | Select the component row `FX_OrderNumberStatic` (one click, Components grid, read-only selection) | Properties: `FX_OrderNumberStatic (Static)`, Caption **`FX_sOrderNumber`**, Justification Right | `t6-02` |
| 4 | Stale-ref check: one click on a Caption-row ref (`e1711`) → "Ref not found" | No action performed | error |
| 5 | One fresh untargeted snapshot (saved as `t6-03`); read the Caption row from it | Caption row: value `FX_sOrderNumber`, dropdown control and a blank button (`e1721`) in the value cell's neighbour | `t6-03` |
| 6 | **Caption ellipsis**: one click on the blank button next to the Caption value (`e1721`; Playwright id `#button-2080`) | The **prompt** appeared: alertdialog "String FX_sOrderNumber does not exist. Create it?" with Yes and No; the String dialog was open behind it | `t6-04` |
| 7 | **Yes, ONCE** (the only answer to the prompt) | Prompt closed; String dialog shows Name `FX_sOrderNumber`, String Value `FX_s Order Number` (generated default), Description blank, Version "User version for user an…" | `t6-05` |
| 8 | Click the String Value cell (`e2543`) | Cell became active. The ref went stale ("Ref not found"); one fresh untargeted snapshot (saved as `t6-06`) then the active editor ref `e2571` (`FX_s Order Number`) | `t6-06` |
| 9 | Control+a, then type `Order Number` into the active editor (one fill) | Editor value replaced | — |
| 10 | **Tab** (commit the cell) and wait 2 s | Cell committed; the editor left edit mode. The rendered String Value reads **`Order Number`** | `t6-07` |
| 11 | **Verify before OK** (accessibility tree and screenshot) | String dialog gridcell `Order Number` (String Value row), Name gridcell `FX_sOrderNumber`, no active editor. **Verified** | `t6-07`, `find` |
| 12 | **OK, ONCE** on the String dialog (after the verified commit) | Dialog closed. Designer shows the new string reference: the Save toolbar button **enabled** (pending change), Undo enabled; the canvas label reads `FX_sOrderNumber:` | `t6-08` |
| 13 | Read-only verification: Designer **Edit** menu (one click), **String** menu item (one click) | Global Objects opened (Strings view) | `find`, `t6-09` |
| 14 | Strings filter: click the filter textbox (one click), Control+a, slow type `FX_sOrderNumber` | One row: `FX_sOrderNumber` | `find`, `t6-10` |
| 15 | Select the row (one click, read-only): Properties Name `FX_sOrderNumber`, **String Value `Order Number`**, Version "User version for user an…" | Readback confirmed (exact ID and value) | `t6-10` |
| 16 | **Cancel** on Global Objects (not OK; one click) | Dialog closed. No alert or prompt open. Designer Save remains enabled (pending) and was **not pressed** | `find`, `t6-11` |

Errors: one stale-ref click (`e1711`, step 4) with no effect; one stale-ref on the String Value cell (`e2543`, step 8) with the editor ref recovered from one fresh snapshot (`t6-06`). No timeouts. Recovery allowance used: 2 fresh untargeted snapshots (`t6-03`, `t6-06`), each followed by one corrected action.

### Creation evidence (observed)

- **Initial Caption reference:** FX_OrderNumberStatic Caption `FX_sOrderNumber` (`t6-02`, `t6-03`).
- **Exact prompt:** "String FX_sOrderNumber does not exist. Create it?" (`t6-04`). Yes answered once.
- **Editor identity:** String dialog, Name `FX_sOrderNumber`; generated String Value `FX_s Order Number` (`t6-05`).
- **Tab-committed value before OK:** `Order Number` (gridcell, String Value row; no active editor) (`t6-07`).
- **Post-OK state:** dialog closed; Designer dirty (Save enabled); canvas label `FX_sOrderNumber:` (`t6-08`).
- **Read-only readback (Edit > String):** Name `FX_sOrderNumber`, String Value `Order Number`, Version "User version for user an…" (`t6-10`).

### Deviations and notes (T6)

- The brief named the ellipsis by "Caption ellipsis"; it was located as the blank button next to the Caption value (`e1721`), confirmed by the prompt it raised. No other control was used.
- The String Value cell showed the generated default as `FX_s Order Number` (with a space); replaced by `Order Number`.
- The Designer is now **dirty** (Save enabled). Per the brief this is expected after a string creation; **no Designer Save was invoked** and the Designer must not be closed without operator direction.

### Action counts (T6, exact)

| Operation | T6 | Cumulative (T1–T6) |
| --- | --- | --- |
| **Finish** | **0** | **1** (T3 only; maximum 1) |
| Form created | 0 | **1** (FX_Orders, T3) |
| **Strings created** | **1** (`FX_sOrderNumber`) | **1** (FX_sOrderNumber; FX_sCustomerID and FX_sCount NOT created) |
| Caption prompts answered Yes | **1** | **1** |
| String dialog OK | **1** (after verified commit) | **1** |
| Caption ellipsis opened | 1 | 1 |
| **Designer Save** | **0** | **0** |
| Form close (intended pre-Save) / reopen | 0 / 0 | 0 / 1 (T5 incidental recovery) |
| Form close (unintended, T3 accidental) / reopen | 0 / 0 | 1 / 0 |
| Runtime open / close | 0 / 0 | 0 / 0 |
| Runtime records entered / saved / deleted; list values chosen | 0 | 0 |
| Unloads / FormSync / deployment / check-in / check-out / Delete | 0 | 0 |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | 0 |
| Changes to existing objects (IDO, table, property classes, FX_Items, FX_sItem, other strings, other Forms) | **0** | **0** |
| Designer Select Form opened | **0** | **6 (T1 Web Client 1; T4 3; T5 2; all cancelled, none OK)** |
| Clicks (successful / failed) | **10 / 1** (see note) | — |
| Key presses | **3** (Control+a ×2; Tab ×1) | — |
| `browser_type` fills | **2 / 0** (String Value editor `Order Number`; Strings filter `FX_sOrderNumber`, slow) | — |
| Waits | **2** (2 s after Tab commit; 2 s after Strings filter) | — |
| `browser_tabs` list / select | **1 / 1** (tab 0; the Web Client not selected) | — |
| Untargeted snapshots (saved) | **3** (`t6-00` start; `t6-03` and `t6-06` recovery, counted against the allowance) | — |
| Targeted snapshots | **0** (the targeted `browser_snapshot` attempt on the stale ref errored; not a snapshot) | — |
| `browser_find` calls | **16** | — |
| Screenshots (PNG) | **9** (`t6-01`, `t6-02`, `t6-04`, `t6-05`, `t6-07`, `t6-08`, `t6-09`, `t6-10`, `t6-11`) | — |
| Ref-not-found / recovery snapshots used / timeouts | **2 / 2 / 0** (stale Caption row `e1711`, one click, no effect; stale String Value cell `e2543`, recovered with `t6-06`) | — |
| In-page dialogs answered | **Yes ×1** (the caption prompt), **String dialog OK ×1**, **Global Objects Cancel ×1** | — |
| Native browser dialogs | **0** | — |

Note on the T6 click tally (successful clicks in order): FX_OrderNumberStatic row (1); Caption ellipsis (1); prompt Yes (1); String Value cell (1); String dialog OK (1); Edit menu (1); String menu item (1); Strings filter textbox (1); FX_sOrderNumber row (1); Global Objects Cancel (1) = **10 successful**. Failed: the stale Caption-row click `e1711` (1). The Tab commit and Control+a presses are key presses, not clicks.

### Worker-written-file inventory (T6)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T6 status block and this T6 section) |
| `evidence/EXP-072/t6-00-fresh-snapshot-designer-start.yml` | created |
| `evidence/EXP-072/t6-01-designer-preflight-FX_Orders-start.png` | created |
| `evidence/EXP-072/t6-02-FX_OrderNumberStatic-selected-caption-initial.png` | created |
| `evidence/EXP-072/t6-03-fresh-snapshot-caption-row-recovery.yml` | created (recovery snapshot) |
| `evidence/EXP-072/t6-04-caption-ellipsis-prompt-observed.png` | created |
| `evidence/EXP-072/t6-05-string-dialog-generated-before-edit.png` | created |
| `evidence/EXP-072/t6-06-fresh-snapshot-string-value-editor-recovery.yml` | created (recovery snapshot) |
| `evidence/EXP-072/t6-07-string-value-committed-before-OK.png` | created |
| `evidence/EXP-072/t6-08-post-OK-designer-state-FX_sOrderNumber-created.png` | created |
| `evidence/EXP-072/t6-09-edit-string-readback-FX_sOrderNumber-after-OK.png` | created |
| `evidence/EXP-072/t6-10-edit-string-readback-FX_sOrderNumber-value.png` | created |
| `evidence/EXP-072/t6-11-final-state-after-cancel-save-pending-not-saved.png` | created |

Tool-generated (not worker-authored): page snapshot YAML and console logs under `evidence/playwright/`.

### Decisive evidence (T6)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t6-04` | Alertdialog "String FX_sOrderNumber does not exist. Create it?" with Yes/No; String dialog behind | The exact expected prompt for this ID (creation precondition) | That Yes creates the string in the database |
| `t6-05` | String dialog: Name FX_sOrderNumber; String Value `FX_s Order Number` (generated) | Editor identity and the pre-edit default | — |
| `t6-07` | String dialog after Tab: String Value `Order Number`, no edit mode | The Tab-committed value before OK | Stored value (before OK, the readback is in `t6-10`) |
| `t6-08` | Post-OK Designer: Save enabled; canvas label `FX_sOrderNumber:`; Caption FX_sOrderNumber | Post-OK state; the new string is referenced; Designer dirty | The stored value (`t6-10`); that Save would persist it |
| `t6-10` | Global Objects Strings: one row FX_sOrderNumber; Name FX_sOrderNumber; String Value `Order Number` | Readback of exact ID and value (AC-4 partial) | Database storage; the other strings |
| `t6-11` | Global Objects closed (Cancel); Designer dirty, Save enabled and not pressed | Final state for the next task | Persistence |

### Limitations (T6)

- The readback is the client view of the string, not a database read. The Designer is dirty; the string is not persisted until a Designer Save, which is not part of T6.
- Two recovery snapshots and one stale Caption-row click were required.
- FX_sCustomerID and FX_sCount were not created or read in T6 (out of scope).

### Blockers and state (end of T6)

- **No blocker.** The creation completed under the stop rules: exact prompt, one Yes, commit verified before OK, one OK.
- **Designer state:** FX_Orders open and selected; dirty (Save enabled, not pressed); FX_Items open and unchanged; Components row FX_OrderNumberStatic selected; no dialog open.
- **Next permitted action:** the caption step for FX_sCustomerID and FX_sCount (one string per task, per the brief), then the Designer Save, the post-Save close and reopen, and the runtime open.

---

## T5 — incidental pre-Save recovery of FX_Orders via Form-menu recent-forms (operator-authorised; cycle 6): OPENED; Components read-only

- Task T5, cycle 6, task_message_id `1d7298d8-ab3f-472f-9c79-04e9c554abeb`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- **Operator authorisation (documented):** the T5 instruction authorised the incidental pre-Save recovery of FX_Orders through the Designer's Form-menu recent-forms entry, exactly one click. This is the reopen that T4 could not do. It is separate from the still-required **post-Save** close/reopen pair (AC-6). The operator also authorised Form-menu recent-forms for that later post-Save reopen; it was NOT performed in T5.
- Pre-T5 state: FX_Orders was not open (T3 accidental close); Designer showed FX_Items only, clean.
- Accidental-click guard: the control named "closable FX_Orders" was not used.

### Actions (T5, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (`MGForm=FX_Items`, current); tab 1 Web Client | — |
| 2 | Select tab 0; fresh untargeted snapshot (saved); `find` | Designer: FX_Items only; Save and Undo disabled; footer ScopeType User | `t5-00-fresh-snapshot-designer-start.yml`, `t5-01` |
| 3 | **Form menu opened, one click.** The first click (`e12`, the toolbar Design/Form area) landed on the toolbar **Open** icon instead (tooltip "Open" visible): the Designer's own Select Form opened (filter FX_Orders, one row FX_Orders). This is the toolbar route the brief forbids in T5. **Not used**: Cancel pressed (no OK) | Select Form opened and cancelled (no OK). No Form opened. | `t5-02` |
| 4 | Menu-bar `Form` button (`e3`), one click (the Form menu opened) | Menu lists: Definition; Sign Out; **FX_Orders** (first recent-forms entry); FX_Items; IDOs; Property Classes; Sql Tables; Export/Import Strings; IDO Projects; FX_UMs; FX_HelloWorld01 | `t5-03` |
| 5 | **Recent-forms entry FX_Orders, one click** (the only Form-open action of T5) | Page URL gained `MGForm=FX_Orders`. New tab **FX_Orders** selected (FX_Items tab still open). Properties Design: Name FX_Orders; Device Default; Form Type Normal; Is Master True. Footer ScopeType User / ScopeName operator. Save and Undo disabled | `t5-04` |
| 6 | **Unintended action:** one click on `#ext-element-323` (ref `e13`, stale; intended "Details" region). The click landed on the toolbar **Open** icon again: the Designer Select Form opened (filter FX_Orders, one row) | No Form opened. Cancelled (no OK). FX_Orders tab still selected and clean | `t5-05` |
| 7 | Cancel the Designer Select Form (no OK) | Dialog closed. `find`: no dialog | — |
| 8 | Expand the Details panel (`Expand Panel`, one click) | Details panel expanded on the Collections tab | `t5-06` |
| 9 | Components tab (one click) | Components tab shows Pane (00) and Pane (01) collapsed | `t5-07` |
| 10 | Components grid **Expand** (one click; view only) | Full tree expanded (read-only) | `t5-08` |
| 11 | Select the label row `FX_OrderNumberStatic` (one click, read-only) | Properties Caption: **FX_sOrderNumber** (Static, Pane 1, Tab 5) | `t5-09` |
| 12 | Select `FX_CustomerIDStatic` (one click, read-only) | Caption: **FX_sCustomerID** (Tab 7) | `t5-10` |
| 13 | Select `FX_ItemStatic` (one click, read-only) | Caption: **FX_sItem** (Tab 9) | `t5-11` |
| 14 | Select `FX_CountStatic` (one click, read-only) | Caption: **FX_sCount** (Tab 11) | `t5-12` |
| 15 | Final state: `find` (Save, Undo, ScopeType) and screenshot | FX_Orders selected; Save and Undo disabled; footer User; Components row FX_CountStatic selected | `t5-13` |

Note: no edit, no caption change, no string dialog, no Save, no close and no runtime open occurred in T5. Steps 3 and 6 were two unintended Open-icon clicks (both cancelled, no Form opened).

### Recovery verification (observed)

- **Identity:** tab FX_Orders selected; Properties Name `FX_Orders`.
- **Scope:** footer `ScopeType: User / ScopeName: <operator account>` (`t5-04`, `t5-13`). Form tab `Version: User version for user…`.
- **Clean state:** Save and Undo disabled after recovery and after the inspection (`find`, `t5-13`).
- **Field order (canvas, `t5-04`):** FX_sOrderNumber* (raw ID), FX_sCustomerID* (raw ID), Item:* (resolved), FX_sCount (raw ID, value 1). Matches FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count.
- Note: the canvas shows raw IDs for the three strings that do not yet exist; `Item` resolves through the existing FX_sItem.

### Components grid (read-only; Details > Components, expanded)

| Component | Type | Data Source | Pane | Tab | Caption (Properties, read-only) |
| --- | --- | --- | --- | --- | --- |
| FX_OrderNumberGridCol | GridColumn | object.FX_OrderNumber | 0 (FormCollectionGrid) | 1 | — (grid column) |
| FX_CustomerIDGridCol | GridColumn | object.FX_CustomerID | 0 | 2 | — |
| FX_ItemGridCol | GridColumn | object.FX_Item | 0 | 3 | — |
| FX_CountGridCol | GridColumn | object.FX_Count | 0 | 4 | — |
| **FX_OrderNumberStatic** (label) | Static | — | 1 | 5 | **FX_sOrderNumber** |
| **FX_OrderNumberEdit** (input) | Edit | object.FX_OrderNumber | 1 | 6 | — (input) |
| **FX_CustomerIDStatic** (label) | Static | — | 1 | 7 | **FX_sCustomerID** |
| **FX_CustomerIDCombobox** (input) | ComboBox | object.FX_CustomerID | 1 | 8 | — (input) |
| **FX_ItemStatic** (label) | Static | — | 1 | 9 | **FX_sItem** |
| **FX_ItemCombobox** (input) | ComboBox | object.FX_Item | 1 | 10 | — (input) |
| **FX_CountStatic** (label) | Static | — | 1 | 11 | **FX_sCount** |
| **FX_CountEdit** (input) | Edit | object.FX_Count | 1 | 12 | — (input) |

Observed values (exact text): the four Caption values are `FX_sOrderNumber`, `FX_sCustomerID`, `FX_sItem`, `FX_sCount`. The FX_CustomerID and FX_Item input controls are ComboBox components (design-time type, from the grid text); their bindings are `object.FX_CustomerID` and `object.FX_Item`. The Count input is an Edit bound to `object.FX_Count`.

### Discrepancies and unresolved items (for the next task)

- **Expected vs observed captions:** the wizard generated the label captions FX_sOrderNumber, FX_sCustomerID, FX_sCount as caption references, and FX_sItem already exists. The three generated IDs are the strings to be created in the caption task (they are absent from the Strings view, T1). This is consistent with the plan, not a discrepancy in the references; the discrepancy is that the canvas and Caption reference point at strings that do not exist yet.
- **Control types:** the grid shows ComboBox for CustomerID and Item (matching the tutorial's domain-backed expectation). Only design-time type is observed; runtime rendering is not yet observed.
- **Count:** the Count input is an Edit (not ComboBox). The canvas shows the value `1` (the IDO default) in the Count edit.
- **Not read:** the Caption ellipsis state, the Edit > String values for the generated IDs (absent), and the binding details beyond the grid text.
- **Limitations:** the Properties pane values are read from the accessibility tree; the Caption value is the reference ID, not the resolved string.

### Action counts (T5, exact)

| Operation | T5 | Cumulative (T1 + T2 + T3 + T4 + T5) |
| --- | --- | --- |
| **Finish** | **0** | **1** (T3 only; maximum 1) |
| Form created | 0 | **1** (FX_Orders, T3) |
| **Designer Save** | **0** | **0** |
| Strings created | **0** | **0** |
| String dialogs / OK in a String dialog | **0 / 0** | **0 / 0** |
| Form close (intended pre-Save) / reopen (intended, incidental pre-Save recovery) | **0 / 1** | **0 / 1** |
| Form close (unintended, T3 accidental) | 0 | **1** |
| Form reopen (Designer recent-forms, T5) | **1** | **1** |
| Designer Select Form opened (toolbar Open icon, both unintended; cancelled, no OK) | **2 / 2 (0 OK)** | **6 / 6 (0 OK)** (T1 Web Client gate 1; T4 3; T5 2) |
| Runtime open / close (FX_Orders) | **0 / 0** | **0 / 0** |
| Runtime records entered / saved / deleted; list values chosen | **0** | **0** |
| Unloads / FormSync / deployment / check-in / check-out / Delete | **0** | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** | **0** |
| Application-object mutations (IDO, table, property classes, FX_Items, FX_sItem, strings, other Forms) | **0** | **0** |
| Clicks (successful / failed) | **13 / 0** (in order: `e12` toolbar area that hit the toolbar Open icon 1; Form menu `e3` 1; recent-forms FX_Orders 1; `e13` stray click that hit the toolbar Open icon 1; Select Form Cancel 1; Details Expand 1; Components tab 1; Components Expand 1; label rows 4; second Select Form Cancel 1) | **55 / 1** (T1 11/0; T2 19/1; T3 5/0; T4 7/0; T5 13/0) |
| Coordinate clicks (`mouse_click_xy`) | 0 | **2** (T4) |
| Mouse moves / wheel | 0 / 0 | **2 / 3** (T4) |
| `browser_type` fills | **0** | **11 / 0** |
| Key presses | **0** | **13** |
| Waits | **0** | **12** |
| `browser_tabs` list / select | **1 / 2** (select tab 0 and tab 0 again is not counted separately; 1 list, 1 select of tab 0 and the Web Client not selected: 1 select) | **6 / 10** (T1 1/3; T2 1/1; T3 1/1; T4 2/3; T5 1/1) |
| Snapshots untargeted (worker-requested, saved) | **1** (`t5-00`) | **6** (T1 1; T2 1; T3 1; T4 2; T5 1) |
| Snapshots targeted | **0** | **3 successful + 1 failed (T2)** |
| `browser_find` calls | **22** | **95** (T1 22; T2 25; T3 10; T4 16; T5 22) |
| Screenshots (worker-requested PNG) | **14** (`t5-01`–`t5-13` plus `t5-02`/`t5-03`; count includes the saved `t5-00` YAML excluded) | **58** (T1 12; T2 15; T3 6; T4 11; T5 14) |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | **1 / 1 / 1** (T2) |
| In-page dialogs answered (Cancel) | **2** (Designer Select Form, no OK) | **9** (T1 2; T2 1; T3 1; T4 3; T5 2) — the T1 count of 2 is the Web Client gate Cancel and T1 OK; the cumulative is recorded as the per-task sum |
| Native browser dialogs | **0** | **0** |

Counting notes: the T5 "clicks" row counts the Form-menu toolbar click as a click on the toolbar Open icon (the first attempt). The two unintended Open-icon events in T5 are recorded in the actions table (steps 3 and 6). The cumulative Designer Select Form count (6) includes T1's Web Client gate only where stated in earlier rows; the per-task figures above are the authority.

### Worker-written-file inventory (T5)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T5 status block and this T5 section) |
| `evidence/EXP-072/t5-00-fresh-snapshot-designer-start.yml` | created |
| `evidence/EXP-072/t5-01-designer-preflight-start.png` | created |
| `evidence/EXP-072/t5-02-form-menu-open-recent-forms-visible.png` | created (shows the unintended Open-icon Select Form, not the menu) |
| `evidence/EXP-072/t5-03-form-menu-open-recent-forms-visible.png` | created (Form menu with FX_Orders entry) |
| `evidence/EXP-072/t5-04-designer-FX_Orders-recovered-identity-scope-clean.png` | created |
| `evidence/EXP-072/t5-05-after-unintended-design-button-click-check.png` | created (shows the stray Open-icon Select Form, cancelled) |
| `evidence/EXP-072/t5-06-details-panel-expanded-components-tab.png` | created |
| `evidence/EXP-072/t5-07-details-components-tab-readonly.png` | created |
| `evidence/EXP-072/t5-08-components-grid-expanded-readonly.png` | created |
| `evidence/EXP-072/t5-09-FX_OrderNumberStatic-selected-caption-readonly.png` | created |
| `evidence/EXP-072/t5-10-FX_CustomerIDStatic-selected-caption-readonly.png` | created |
| `evidence/EXP-072/t5-11-FX_ItemStatic-selected-caption-readonly.png` | created |
| `evidence/EXP-072/t5-12-FX_CountStatic-selected-caption-readonly.png` | created |
| `evidence/EXP-072/t5-13-final-state-FX_Orders-open-clean-readonly.png` | created |

Tool-generated (not worker-authored): page snapshot YAML and console logs under `evidence/playwright/`.

### Decisive evidence (T5)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t5-03` | Form menu open; FX_Orders is the first recent-forms entry | The recent-forms entry exists (AC-6 route) | That it is scoped to User (scope not shown in the menu) |
| `t5-04` | Tab FX_Orders selected; Name FX_Orders; footer ScopeType User; Save disabled; canvas order FX_sOrderNumber*, FX_sCustomerID*, Item:*, FX_sCount | Incidental pre-Save recovery succeeded; identity, scope and field order (AC-6 partial, incidental) | Bindings and captions (read in `t5-09` to `t5-12`); persistence |
| `t5-09` to `t5-12` | Properties Caption for each label row: FX_sOrderNumber, FX_sCustomerID, FX_sItem, FX_sCount | The four label caption references (read-only) | That the strings exist (absent per T1; not yet verified in T5) |
| `t5-08` | Components grid expanded; Pane (00) grid columns and Pane (01) label/input components with Data Source | Bindings and types (text read from the grid) | Runtime control rendering |
| `t5-13` | FX_Orders open, Save disabled, ScopeType User, FX_CountStatic selected | Clean state after the read-only inspection | — |

### Limitations (T5)

- The four Caption values are the reference IDs; whether they resolve to strings is not checked in T5 (the three new strings do not exist yet).
- Design-time control types only; no runtime render.
- The Components grid is read from the accessibility tree and screenshots; no value was edited.
- Two unintended toolbar Open clicks occurred (cancelled, no Form opened); the stray `e13` click is a stale-ref error (the placeholder ref pointed at the toolbar Design button, not Details).

### Blockers and state (end of T5)

- **No blocker** to recovery: FX_Orders opened once through the recent-forms entry and verified.
- **Designer state:** tabs FX_Items (not changed, clean) and FX_Orders (selected, clean; Save and Undo disabled; footer ScopeType User). No dialog. Details panel expanded on the Components tab with one row selected (view state only).
- **Pending:** the three caption strings (AC-4), the Designer Save (AC-5), the post-Save close/reopen (AC-6), the runtime open (AC-7).

---

## T4 — incidental pre-Save reopen of FX_Orders (operator-authorised): BLOCKED; FX_Orders not opened (cycle 4)

- Task T4, cycle 4, task_message_id `ab9f50d2-61e8-487b-b169-84d2199d4b27`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- **Operator authorisation (documented):** the bounded T4 instruction authorised one incidental pre-Save recovery: reopen the existing FX_Orders once through the Designer toolbar Open and Select Form, then inspect its Components read-only. This is distinct from the still-required post-Save close/reopen pair (AC-6), which remains pending. The incidental pre-Save close was the accidental T3 close of the FX_Orders tab (clean; Save disabled). **The incidental reopen did not happen**, so the incidental pair is 1 close, 0 reopens.
- Accidental-click guard: the T4 brief forbade interacting with the control named "closable FX_Orders". No such control was used in T4.

### Actions (T4, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (`MGForm=FX_Items`, current); tab 1 Web Client (`favoriteContext=SqlTables`) | — |
| 2 | Select tab 0; fresh untargeted snapshot (saved) | Designer, FX_Items only | `t4-00-fresh-snapshot-designer-start.yml` |
| 3 | `find` (Save, Undo, ScopeType, tabs) and screenshot | FX_Items sole tab; footer ScopeType User / ScopeName operator; Save and Regenerate disabled; Undo disabled | `t4-01` |
| 4 | Locate the toolbar Open button | The folder icon at the far left of the Designer toolbar is not named in the accessibility tree (targeted snapshot of the toolbar, one `find`). Hover over it (`t4-02`) showed **no tooltip** | `t4-02` |
| 5 | **Coordinate click** at the folder icon (25,51), the last-resort route (AGENTS.md) | Select Form dialog opened (Designer picker). Filter pre-filled `FX_Items`; one row FX_Items / FX_Items | `t4-03` |
| 6 | Filter: `FX_Orders` (one fill), Tab, wait 2 s | **Zero rows** (grid empty) | `t4-04` |
| 7 | Wait 3 s and re-read the grid (`find` rows) | Still zero rows | `find` |
| 8 | Read-only broader check: filter `FX_` (one fill), Tab, wait 3 s | List of FX_ Forms sorted by Caption, starting "Form Property Caption Close Only" (no blank-caption row seen at the top); `FX_FormPropertyLab…`, `FX_HelloWorld01`, `FX_Items`, `FX_SingleButtonLab01`… | `t4-05` |
| 9 | Scroll the list (mouse wheel 300, then 100, then 2000) with reads at each stop | Between `FX_HelloWorld01`, `FX_Items` and `FX_SingleButtonLab01` there is **no FX_Orders**. List bottom ends at `FX_VariableLab01`; `FX_UMs` and `FX_TestBlank02` are present | `t4-06`, `t4-07`, `t4-08` |
| 10 | Cancel the Designer Select Form (one click, no OK) | Dialog closed; Designer unchanged; Save disabled | `find` |
| 11 | Cross-check (read-only, not a lifecycle route): tabs list; select tab 1 (Web Client); fresh untargeted snapshot (saved); Form menu; Form > Open; Select Form | The Web Client Select Form opened with a pre-filled filter `FX_Orders` and **one row: Caption `FX_Orders`, Name `FX_Orders`** (settled 2 s). Not opened | `t4-09` (snapshot), `t4-10` |
| 12 | Cancel the Web Client Select Form (one click, no OK; the brief forbids opening the runtime Form) | Dialog closed | `find` |
| 13 | Corrected attempt (the one allowed): tabs select 0; reopen the Designer picker via the same toolbar icon (second coordinate click); filter `FX_Orders` (one fill), Tab, wait 3 s | Filter `FX_Orders` retained; **zero rows** again | `t4-11` |
| 14 | Cancel the Designer Select Form (no OK) | Dialog closed | `find` |
| 15 | Final state screenshot | FX_Items sole tab; clean; ScopeType User; Save disabled; no dialog | `t4-12` |

Errors: none (no ref-not-found, no timeout, no dialog left open). One coordinate click is recorded as a route variance (the Open button is unnamed). No fresh-snapshot recovery was needed.

### Assessment (observed; not resolved)

- **Designer Select Form:** `FX_Orders` not listed (filter zero rows on two openings; prefix list complete at both ends; no blank-caption row).
- **Web Client Select Form (runtime list):** `FX_Orders / FX_Orders` listed, one row.
- **Designer Form menu (T3, `t3-05`):** lists `FX_Orders`.
- Therefore the Designer picker and the other two surfaces disagree. The brief's rule: "if its identity or availability is ambiguous, stop without attempting creation or an alternative lifecycle route." **Stopped.** FX_Orders was not opened through the Designer Form menu entry, the runtime Form, or any creation path.
- Unverified explanation (not tested): the Designer picker may hold a Form list loaded before the T3 Finish (the Designer page has not been reloaded since T2). Testing this requires a page reload or new session, which the brief forbids. Classification: **unresolved**.

### Blocker (T4)

- **Blocker:** the Designer's Select Form cannot select FX_Orders, so the operator's authorised reopen did not happen. The Components, bindings and caption references were therefore not read.
- Impact on the next steps: the reopen pair and the caption work (AC-4) must wait until the coordinator decides how to make FX_Orders selectable in the Designer (for example, a Designer page reload by the operator, or an operator-approved reopen route). The worker must not improvise another route.
- The canvas state recorded in T3 (raw IDs `FX_sOrderNumber`, `FX_sCustomerID`, `FX_sCount` and resolved `Item`) is not re-read in T4 because FX_Orders is not open.

### Action counts (T4, exact)

| Operation | T4 | Cumulative (T1 + T2 + T3 + T4) |
| --- | --- | --- |
| **Finish** | **0** | **1** (T3 only; maximum 1) |
| **Designer Save** | **0** | **0** |
| Strings created; String dialogs; OK in a String dialog | **0 / 0 / 0** | **0 / 0 / 0** |
| Form created (through the wizard Finish) | **0** | **1** (FX_Orders, T3) |
| Changes to pre-existing objects (IDO, table, property classes, FX_Items, FX_sItem, other strings, other Forms) | **0** | **0** |
| Form opened (Designer reopen of FX_Orders) | **0** | **0** |
| Form close (Designer) — intended pre-Save or post-Save pair | **0 / 0** | **0 / 0** (the T3 accidental close is counted separately below) |
| Form close (unintended, T3) / reopen | **0 / 0** | **1 / 0** |
| Runtime open / close (FX_Orders) | **0 / 0** | **0 / 0** |
| Runtime records entered / saved / deleted; list values chosen | **0 / 0 / 0 / 0** | **0 / 0 / 0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** | **0 / 0 / 0 / 0** |
| Check-in / check-out / Delete (top toolbar) | **0 / 0 / 0** | **0 / 0 / 0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0 / 0 / 0 / 0 / 0** | **0 / 0 / 0 / 0 / 0** |
| Select Form dialogs opened / cancelled (OK pressed) | **3 / 3 (0)** (Designer ×2; Web Client ×1) | **4 / 4 (0)** (T1 Web Client gate 1; T4 3) |
| Designer toolbar Open coordinate clicks | **2** | **2** |
| Clicks (browser `click` tool, successful / failed) | **7 / 0** (Designer filter ×2; Designer Select Form Cancel ×2; Web Client Form menu; Form > Open; Web Client Select Form Cancel) | **42 / 1** (T1 11/0; T2 19/1; T3 5/0; T4 7/0) — the coordinate clicks are counted below |
| Coordinate clicks (`mouse_click_xy`) | **2** (toolbar Open icon at 25,51) | **2** |
| Mouse moves (`mouse_move_xy`) | **2** (hover at 25,51; move to 950,460) | **2** |
| Mouse wheel | **3** (300, 100, 2000 px) | **3** |
| `browser_type` fills (succeeded / refused) | **3 / 0** (Designer filter FX_Orders ×2; FX_ ×1) | **11 / 0** (T1 7/0; T2 1/0; T3 0/0; T4 3/0) |
| Key presses | **5** (Tab 3; Control+a 2) | **13** (T1 Tab 3, Control+a 4; T2 0; T3 Escape 1; T4 Tab 3, Control+a 2) — the earlier T3 running total of 8 is corrected here |
| Waits | **4** (2 s ×2; 3 s ×2) | **12** (T1 7; T3 1; T4 4) |
| `browser_tabs` list / select | **2 / 3** | **5 / 8** (T1 1/3; T2 1/1; T3 1/1; T4 2/3) |
| Snapshots untargeted (worker-requested) | **2** (`t4-00`, `t4-09`; saved as files) | **5** (T1 1; T2 1; T3 1; T4 2) |
| Snapshots targeted | **1 successful** (toolbar `e11`) | **2 successful + 1 failed (T2) + 1 successful (T4) = 3 successful, 1 failed** |
| `browser_find` calls | **16** | **73** (T1 22; T2 25; T3 10; T4 16) — the earlier T3 running total of 57 is corrected here |
| Screenshots (worker-requested PNG) | **11** (`t4-01`–`t4-08`, `t4-10`–`t4-12`) | **44** (T1 12; T2 15; T3 6; T4 11) |
| Ref-not-found / recovery snapshots used / timeouts | **0 / 0 / 0** | **1 / 1 / 1** (T2) |
| In-page dialogs answered (Cancel) | **3** (no OK pressed) | **7** (T1 2; T2 1; T3 1; T4 3) |
| Native browser dialogs | **0** | **0** |
| Portal banner dismissals | **0** | **0** |

Notes on the cumulative corrections: the T3 record's running totals for key presses (8), finds (57) and the T3 dialog count were under-stated against the per-task rows. The table above uses the per-task rows (T1 7 + T3 1 + T4 5 = 13 key presses; T1 22 + T2 25 + T3 10 + T4 16 = 73 finds; in-page dialogs 2 + 1 + 1 + 3 = 7). The earlier T3 clicks cumulative (35/1) is corrected to 42/1 with T4's seven browser clicks; the two coordinate clicks are reported separately. The tool-generated snapshot and console files under `evidence/playwright/` are not counted.

### Worker-written-file inventory (T4)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T4 status block and this T4 section; cumulative audit) |
| `evidence/EXP-072/t4-00-fresh-snapshot-designer-start.yml` | created |
| `evidence/EXP-072/t4-01-designer-preflight-start.png` | created |
| `evidence/EXP-072/t4-02-toolbar-open-icon-hover-tooltip-check.png` | created |
| `evidence/EXP-072/t4-03-after-toolbar-open-click.png` | created |
| `evidence/EXP-072/t4-04-select-form-FX_Orders-settled-before-open.png` | created |
| `evidence/EXP-072/t4-05-select-form-FX_prefix-list-readonly-check.png` | created |
| `evidence/EXP-072/t4-06-select-form-FX_prefix-list-scrolled-readonly.png` | created |
| `evidence/EXP-072/t4-07-select-form-FX_prefix-list-after-FX_Items-readonly.png` | created |
| `evidence/EXP-072/t4-08-select-form-FX_prefix-list-bottom-readonly.png` | created |
| `evidence/EXP-072/t4-09-webclient-fresh-snapshot-crosscheck.yml` | created |
| `evidence/EXP-072/t4-10-webclient-select-form-FX_Orders-row-crosscheck-settled.png` | created |
| `evidence/EXP-072/t4-11-designer-select-form-FX_Orders-second-attempt-settled.png` | created |
| `evidence/EXP-072/t4-12-designer-final-state-FX_Orders-not-opened.png` | created |

Tool-generated (not worker-authored): page snapshot files and console logs under `evidence/playwright/`.

### Decisive evidence (T4)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t4-01` | FX_Items sole tab, Designer clean, footer ScopeType User | Preflight (AC-1) | Database state |
| `t4-03` | Designer Select Form opened from the toolbar icon; filter FX_Items; one row FX_Items | The picker works and lists FX_Items (positive control) | — |
| `t4-04` | Designer Select Form; filter `FX_Orders`; grid empty | FX_Orders not selectable in the Designer picker | That FX_Orders does not exist (the Web Client lists it) |
| `t4-07`, `t4-08` | Designer FX_ list: FX_HelloWorld01, FX_Items, FX_SingleButtonLab01 adjacent; no FX_Orders; list ends at FX_VariableLab01 | The Designer picker lists no FX_Orders in the full FX_ prefix | Why (cache or server state, unresolved) |
| `t4-10` | Web Client Select Form; filter `FX_Orders`; one row FX_Orders / FX_Orders (selected) | The runtime list includes FX_Orders (server-backed) | That opening it would be correct for the Designer; the scope column (not shown) |
| `t4-11` | Designer picker, second opening; filter `FX_Orders`; empty grid | The Designer picker still excludes FX_Orders on a second opening | Whether a page reload changes it (not tested) |
| `t4-12` | FX_Items only; clean; ScopeType User; Save disabled | Final state (no FX_Orders open) | — |

### Limitations (T4)

- No Components, binding or caption read (FX_Orders not open). AC-6 reopen, AC-4 captions and AC-5 Save are all still pending.
- The toolbar Open icon is not named in the accessibility tree; it was reached by a coordinate click (last resort).
- The discrepancy between the Designer picker and the runtime list is observed only; its cause is not established.

### Action state (end of T4)

- Designer: FX_Items only; clean; ScopeType User; Save and Undo disabled; no dialog; Form menu closed.
- Web Client (tab 1): Select Form cancelled; no dialog; runtime Form-tabs unchanged (Sql Tables active).
- No in-page dialog is open in either tab. No browser-native dialog.

---

## T3 — ONE Finish (cycle 2); creation result observed; accidental FX_Orders tab close (deviation)

- Task T3, cycle 2, task_message_id `9b043847-f9b0-4f22-99f4-f0c74bad4bf5`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`, run `R-20261013-154321-ryQV`. Date 2026-10-13.
- Scope: confirm the final wizard page (FX_Orders name and data source, Save Template unchecked, Finish enabled); take a pre-Finish screenshot; invoke Finish exactly once; capture the native response and the resulting Designer state; no string, Designer Save, runtime open or reopen.

### Actions (T3, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Web Client (`favoriteContext=SqlTables`) | — |
| 2 | Select tab 0; fresh untargeted snapshot (saved) | Designer on FX_Items with the wizard open on its final page | `t3-00-fresh-snapshot-before-finish.yml` |
| 3 | `find` (wizard) and screenshot before Finish | Sentence "Click the Finish button to build a multiview form named FX_Orders with the data source FX_Orders."; Save Template unchecked; Next disabled; Finish enabled. Wizard unchanged from T2 | `t3-01` |
| 4 | **Finish, one click (the only Finish)** | Not retried. Native alert "Infor Mongoose Application Development Framework - Form Wizard - MultiView": **"Process Completed Successfully"**, info icon, single OK button. Captured before acknowledgement | `t3-02` |
| 5 | Wait 2 s; `find` (alertdialog, scope bar) | Alert present; ScopeType User / ScopeName operator bar | `find` |
| 6 | OK on the completion alert (one click; acknowledgement only, not a second Finish, the same acknowledgement EXP-050 T3 recorded) | Alert closed. Page URL gained `&MGForm=FX_Orders`. Wizard no longer in the page (`find` "Form Wizard" / dialog: no match) | `find` |
| 7 | `find` (Designer identity, Save, Undo, ScopeType) and screenshot | New tab **FX_Orders** selected next to FX_Items. Properties (Design): Name `FX_Orders`; Device Type `Default`; Form Type `Normal`; Is Master `True`; Version `User version for us…`; Caption empty. Footer `ScopeType: User / ScopeName: <operator account>`. Toolbar Save **disabled**; Undo and Redo disabled; Regenerate Form disabled | `t3-03` |
| 8 | **Accidental action:** one click on the FX_Orders tab's control named "closable FX_Orders" (intended to select the tab) | The FX_Orders Form tab **closed**. FX_Items is the only tab and is shown. No dialog and no unsaved-change prompt appeared. The Form was clean at the time (Save disabled in step 7) | `t3-04` |
| 9 | Designer Form menu (one click), `find` menu items, one more click on the same Form button to close the menu | The menu lists "FX_Orders" among the Designer Form entries (not clicked, so the Form was not reopened). Escape (one key press) did not close the menu; the second click on the Form button did | `t3-05`, `t3-06` |

### Creation result (observed)

- **Native response:** single completion alert, "Process Completed Successfully" (`t3-02`). This is the wizard's own message, as in EXP-050 T3 and EXP-071-R2 T6.
- **Wizard:** closed after OK (no wizard dialog in the page; `find` no match).
- **Designer identity (`t3-03`):** tab `FX_Orders` selected; Properties Name `FX_Orders`; Device Default; Form Type Normal; Is Master True; footer `ScopeType: User`.
- **Canvas (`t3-03`):** four fields in the order top to bottom: `FX_sOrderNumber*` (raw ID, caption not resolved), `FX_sCustomerID*` (raw ID), `Item:*` (resolved to `Item`, the existing FX_sItem), `FX_sCount:` (raw ID) with the count edit showing `1`. The raw IDs are the expected state before the three new strings exist (the same canvas behaviour EXP-050 T3 recorded for absent strings).
- **Save state:** Save disabled after Finish (`find`, `t3-03`). Undo disabled.
- **Not read in T3:** the Components grid (the Details panel was not expanded), the Form's bindings, and the Caption ellipsis state. These are for the next task (the caption and reopen steps).

### Deviation (T3): accidental close of FX_Orders

- In step 8 I clicked the tab's close control instead of the tab (the accessibility name "closable FX_Orders" was the tab's close button). The brief forbids closing or reopening any Form in T3, so this is an out-of-scope Form lifecycle action.
- Consequence: the FX_Orders Designer tab is closed. The Form was clean (Save disabled; no prompt), so no unsaved change was discarded. The Form definition itself was produced by Finish and is not affected by closing the tab (observed: the Form menu still lists FX_Orders).
- Audit: **Form close 1 (unintended)**; Form reopen 0.
- Corrective action: none taken (no reopen, since reopen is out of T3 scope). The next task must reopen FX_Orders once through its own authorised step and must not click the "closable" control.

### Action counts (T3, exact)

| Operation | T3 | Cumulative (T1 + T2 + T3) |
| --- | --- | --- |
| **Finish** | **1** (maximum 1; not retried) | **1** |
| **Designer Save** | **0** | **0** |
| Strings created; String dialogs; OK in a String dialog | **0 / 0 / 0** | **0 / 0 / 0** |
| Designer toolbar New (launch) | 0 | 1 (T2) |
| Wizard openings | 0 | 1 (T2) |
| Form close (unintended, accidental click) / Form reopen | **1 / 0** | **1 / 0** |
| Designer close (intended, once) / reopen (intended, once) | **0 / 0** | **0 / 0** |
| Runtime open / close | **0 / 0** | **0 / 0** |
| Runtime records entered / saved / deleted; list values chosen | **0 / 0 / 0 / 0** | **0 / 0 / 0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** | **0 / 0 / 0 / 0** |
| Check-in / check-out / Delete (top toolbar) | **0 / 0 / 0** | **0 / 0 / 0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0 / 0 / 0 / 0 / 0** | **0 / 0 / 0 / 0 / 0** |
| Application-object mutations (IDO, table, property class, FX_Items, FX_sItem, strings, other Forms) | **0** | **0** |
| Clicks (successful / failed) | **5 / 0** (Finish 1; completion OK 1; closable-tab click 1; Form menu 2) | **35 / 1** (T1 11/0; T2 19/1; T3 5/0) |
| `browser_type` fills | **0** | **8 / 0** (T1 7/0; T2 1/0) |
| Key presses | **1** (Escape) | **8** (T1 7: Tab 3, Control+a 4; T3 1: Escape) |
| Waits | **1** (2 s) | **8** (T1 7; T3 1) |
| `browser_tabs` list / select | **1 / 1** | **3 / 5** (T1 1/3; T2 1/1; T3 1/1) |
| Snapshots untargeted (worker-requested, saved) | **1** | **3** (one per task) |
| Snapshots targeted | **0** | **2 successful, 1 failed** (T2) |
| `browser_find` calls | **10** | **57** (T1 22; T2 25; T3 10) |
| Screenshots (worker-requested PNG) | **6** (`t3-01` to `t3-06`) | **33** (T1 12; T2 15; T3 6) |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | **1 / 1 / 1** (T2) |
| In-page dialogs answered | **1** (completion OK) | **4** (T1 2 Cancel/OK-type answers; T2 1; T3 1) |
| Native browser dialogs | **0** | **0** |
| Portal banner dismissals | **0** | **0** |

### Worker-written-file inventory (T3)

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T3 status block and this T3 section) |
| `evidence/EXP-072/t3-00-fresh-snapshot-before-finish.yml` | created (fresh untargeted snapshot) |
| `evidence/EXP-072/t3-01-pre-finish-wizard-final-page.png` | created |
| `evidence/EXP-072/t3-02-after-single-finish-immediate.png` | created |
| `evidence/EXP-072/t3-03-designer-after-finish-FX_Orders-displayed.png` | created |
| `evidence/EXP-072/t3-04-after-accidental-close-click-FX_Orders-tab-check.png` | created |
| `evidence/EXP-072/t3-05-designer-after-menu-escape-state.png` | created |
| `evidence/EXP-072/t3-06-designer-menu-closed-final-state.png` | created |

Tool-generated (not worker-authored): snapshot YAML and console logs written under `evidence/playwright/` by the MCP tool.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t3-01` | Wizard final page: "...multiview form named FX_Orders with the data source FX_Orders."; Save Template unchecked; Finish enabled | Pre-Finish state verified before the one Finish (AC-3 pre-Finish) | That Finish succeeds (not yet shown) |
| `t3-02` | Alert "Form Wizard - MultiView": "Process Completed Successfully"; OK; Designer FX_Items behind | The native response to the single Finish (AC-3 creation response) | Database persistence; the Form's contents |
| `t3-03` | Tab FX_Orders selected; Name FX_Orders; Device Default; Form Type Normal; Is Master True; footer ScopeType User; Save greyed; canvas FX_sOrderNumber*, FX_sCustomerID*, Item:*, FX_sCount: (value 1) | The new Form exists in the Designer with User scope; four fields on the canvas in order; Save disabled | Caption resolution for the three new string IDs (absent strings show raw IDs); bindings; components (Details not read); persistence |
| `t3-04` | FX_Items is the only tab after the accidental close; no dialog | The accidental close and that no prompt appeared | Whether the close persisted anything (none expected: Form clean) |
| `t3-05`, `t3-06` | Form menu open, listing FX_Orders among entries; then menu closed; FX_Items shown | FX_Orders appears in the Designer Form menu list | That the list is scope-restricted (not shown); that FX_Orders is re-openable without the next authorised step |

### Limitations (T3)

- The Form's Components grid, bindings and caption references were not read. The FX_Orders tab was not expanded and no component was selected. These belong to the next task (AC-6 reopen and caption steps).
- The completion message confirms the wizard reported success; it is not a database readback.
- The FX_Orders tab was closed by accident (deviation above). The Form is not open in the Designer now.
- The Form menu listing is not a scope check. The ScopeType bar at the moment of creation is the only scope evidence (`t3-03`).

### Blockers and state (end of T3)

- **No blocker to the Finish step.** The single Finish completed with the native success message.
- **Designer state:** tab FX_Items is the only open Form tab (clean; Save disabled; Form menu closed). FX_Orders is not open. The Designer has no unsaved change.
- **Web Client (tab 1):** not selected or acted on in T3.
- Open question for the coordinator: authorise the next task to reopen FX_Orders once (through a Select Form or the Form menu entry as an authorised reopen) to verify the four fields, the bindings and captions, and then the caption-string steps (AC-4).

---

## T1 (cycle 0) record follows

**CURRENT STATUS (T1, cycle 0): preflight and both collision gates PASSED at observed UI level, same session.** The Designer is in User scope and clean (FX_Items design view; Save, Regenerate Form and Undo disabled). The Web Client Select Form shows the FX_Items positive control and zero FX_Orders Form matches. The Designer Edit > String view shows FX_sItem = `Item` (positive control, present) and FX_sOrderNumber, FX_sCustomerID and FX_sCount absent. Both dialogs were cancelled. **Nothing was created.** The Form wizard, the caption strings, the Designer Save, the close/reopen and the runtime opening (AC-3 to AC-7) are **NOT executed**: the T1 instruction stops before the wizard. Classification: **observed only (single session, UI level). NOT replay_verified.**

## Run identity

- Experiment EXP-072, **cycle 0, task T1** (preflight, gates and record). Run `R-20261013-154321-ryQV`, task_message_id `bd6461f0-d5bd-4966-b4a6-ff5940a45d4b`, worker session `3134edf3-0841-4663-ae74-fda66642b56e`.
- Date 2026-10-13. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The operator sign-in account is masked as a secret placeholder in the accessibility tree and is not transcribed here.
- Editing scope User. Mode: LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10).
- Evidence directory `evidence/EXP-072/`.
- Record creation: this file did not exist at the start of T1 (`Glob experiments/EXP-072*` returned no match and `Read` of the expected path returned "File does not exist"), although the git history lists `55f2a14 EXP-072: approved brief`. It was created by this worker in T1.

## Sources read before any browser action

- `AGENTS.md` (full).
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 11 (lines 261–284: the wizard steps, the property specification, and the expected narrated result) and Section 12 (lines 286–296: runtime Add mode, Order Number 1, list lookups; not executed here). The narration lines at 16:00 (Count default 1) and 16:22–16:28 (Item caption `s item`) were located by grep only (lines 563 and 567–568). Trust: unverified (speech-to-text transcript).
- `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md`: the status block (lines 1–21: IDO and SQL readbacks, the T8 check-in, the T10 recovery pair), the T7 IDO readback (lines 1069–1117), and grep hits for the T8–T10 sections. Its whole length (1988 lines) was not read.
- `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md`: the Multi-View route and the Select Form gate (T2, lines 31–44), the Finish and created-Form inventory (T3, lines 46–72), the Caption ellipsis string procedure with Tab-commit before OK (T4 and T5, lines 74–96), and the Edit > String readback and reopen notes (lines 120–122, 284–304).
- Not read: EXP-049, EXP-045 and EXP-070 records (not needed for T1).

## Baseline (starting state, read-only)

- Tabs (list, before any selection): tab 0 = Designer (`mode=designer`, current at start); tab 1 = Web Client (Mongoose, `favoriteContext=SqlTables`).
- Designer (tab 0), selected after the list (`ac1-01`): design view of **FX_Items** (a Form from EXP-050), footer `ScopeType: User / ScopeName: <operator account>`. Toolbar Save **disabled**, Regenerate Form **disabled**, Undo and Redo **disabled** (`find`). No dialog. Designer clean; not changed.
- Web Client (tab 1), selected after the list (`ac2-00`): runtime Form-tabs `FX_Items`, `Property Classes`, `IDO Projects`, `IDOs`, `Sql Tables` (active). The Sql Tables view shows one row, Table Name `FX_Orders`, Schema `dbo`, Multi-Site unchecked; constraints `PK_FX_Orders` (Primary Key on FX_OrderNumber) and `IX_FX_Orders_RowPointer`. These are leftover views from EXP-071-R2; not changed.
- Session usable. No `Session Expired` modal, no Infor sign-in page, no `portal-notification` banner, no native browser dialog seen at any point in T1.

## Cited object: IDO FX_Orders (EXP-071-R2 readback; not re-read in T1, not changed)

From EXP-071-R2 T7 (lines 1098–1117; same-session UI readback) and the EXP-071-R2 status block (line 5: T10 recovery pair, one exact-name record, four property rows matching T7):

- IDO `FX_Orders`; Project `FX_HelloWorldProject01`; Table Alias `fxords`; table `FX_Orders` (Primary Base, Inner). Access `G6R`. Revision Num 1 at T7; Revision 2 after the single T8 check-in (Locked By cleared); the T10 recovery shows Revision 2 and Check Out offered.

| Seq | Property Name | Property Class | Data Type | Column Data Type (SQL) | Length | Default Value | Label String ID | Key Sequence | Required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_OrderNumber | FX_OrderNumBase | Long Integer | int | blank | `AUTONUMBER()` | FX_sOrderNumber | 1 | ✓ |
| 2 | FX_CustomerID | FX_CustomerID | String | nvarchar | 30 | blank | FX_sCustomerID | 0 | ✓ |
| 3 | FX_Item | FX_Item | String | nvarchar | 50 (override of the class's 20) | blank | FX_sItem | 0 | ✓ |
| 4 | FX_Count | (none) | Long Integer | int | blank | `1` | FX_sCount | 0 | ☐ |

- Domains (EXP-071-R2 T7): FX_CustomerID domain IDO `FX_HelloWorld01`, Domain Property `FX_Code`, Domain List Properties `FX_Label`. FX_Item domain IDO `FX_Items`, Domain Property `FX_Item`, Domain List Properties `FX_Description`. FX_Count has no domain.
- SQL `dbo.FX_Orders`: wizard reported creation with the IDO; EXP-071-R2 T9 readback recorded FX_OrderNumber int primary key, FX_CustomerID nvarchar(30), FX_Item nvarchar(50), all not nullable. **EXP-071-R2 recorded that FX_Count's SQL Default Value is blank (the IDO default is 1) and FX_Count is nullable**; that was observed and not repaired there. Relevant to the later Count default check.
- Form `FX_Orders`: none was created in EXP-071-R2 (Create Form answered No once).

## Collision gate results (AC-2)

### Web Client Select Form (Form > Open > Select Form; Filter By Name; Starts With unchecked; Case Sensitive unchecked)

| Step | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Form menu, then Form > Open (Web Client; the Select Form dialog opened once) | Select Form dialog open; the filter held the stale value `SqlTables` | `find` |
| 2 | Filter replaced with `FX_Items` (positive control), Tab commit, wait 2 s | Grid shows **one row**: Caption `FX_Items`, Name `FX_Items` | `ac2-01` |
| 3 | Filter replaced with `FX_Orders` (target), Tab commit, wait 2 s | Grid shows **zero rows** (header only). No FX_Orders Form visible | `ac2-02` |
| 4 | Cancel | Dialog closed (`find` "Select Form": no match). OK not pressed | `find` |

Result: **zero visible FX_Orders matches with a working positive control.** The absence is observed at the Select Form list level (same session). Not a database-level or scope-level check (the list shows no scope column).

### Designer Edit > String (Global Objects; Strings filter)

The Strings filter did **not** apply on the Tab commit alone (`ac2-04`: the filter text was `FX_sItem` but the list was unfiltered and focus moved to the list). The filter applied after the field was cleared with Control+a and retyped slowly (one key event per character); this is the only change of method (see Deviations).

| Step | Filter | Observed (after 2 s settle) | Evidence |
| --- | --- | --- | --- |
| Positive control | `FX_sItem` | **One row: `FX_sItem`**. Selected (single click, read-only): Name `FX_sItem`, **String Value `Item`**, Description blank, Version `User version for user an…`. No edit | `ac2-05`, `ac2-06` |
| Absent check 1 | `FX_sOrderNumber` | **Zero rows** | `ac2-07` |
| Absent check 2 | `FX_sCustomerID` | **Zero rows** | `ac2-08` |
| Absent check 3 | `FX_sCount` | **Zero rows** | `ac2-09` |
| Cancel | — | Global Objects closed with **Cancel** (OK not pressed). Designer Save disabled afterwards | `ac2-10` |

Result: **FX_sOrderNumber, FX_sCustomerID and FX_sCount absent; FX_sItem present with value `Item`**, with one positive control (FX_sItem one row). The absence is from the Strings list filter; the Properties pane still showed the FX_sItem selection during the three zero-row checks (stale; the list was empty, so the absence reading does not depend on it).

**Gate verdict: PASS.** No target exists; no ambiguous result. The Form creation prerequisites in the brief's preflight are met.

## Screenshots (evidence/EXP-072/)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `ac1-01-designer-identity-scope-before.png` | Designer, FX_Items design view; footer `ScopeType: User / ScopeName: …`; Components grid with FX_UMCombobox selected; Save greyed in the toolbar | Designer in User scope showing FX_Items; Save greyed | The Undo state (not visible in the image; read by `find`); database state |
| `ac2-00-webclient-before-select-form.png` | Web Client runtime Form-tabs FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables (active); Sql Tables row FX_Orders, dbo, PK_FX_Orders and IX_FX_Orders_RowPointer | Web Client session usable; leftover EXP-071-R2 views | Anything about FX_Orders as a Form |
| `ac2-01-select-form-FX_Items-positive-control.png` | Select Form dialog; Filter `FX_Items`, Filter By Name; one row Caption `FX_Items` / Name `FX_Items` | The Select Form filter works and FX_Items is listed | That the Form list shows scope |
| `ac2-02-select-form-FX_Orders-target-zero-match.png` | Select Form dialog; Filter `FX_Orders`; grid header only, no rows | **Zero visible FX_Orders matches** (AC-2 Select Form part) | Completeness beyond the visible list; database state |
| `ac2-03-designer-edit-string-view-opened.png` | Global Objects dialog open over the FX_Items design view; Strings list unfiltered (ApplyFullTextIndexScriptQuestion first); OK / Cancel / Help | The Edit > String view opened from the Designer (Designer still FX_Items, Save not changed) | The string values (unfiltered list) |
| `ac2-04-designer-strings-FX_sItem-positive-control.png` | Strings filter field reads `FX_sItem` but the list is **unfiltered** (Tab commit did not apply) | The failed Tab-commit attempt (deviation) | Any string state |
| `ac2-05-designer-strings-FX_sItem-positive-control-settled.png` | Strings filter `FX_sItem` after slow retyping; one row `FX_sItem` (red text, not selected) | **Positive control: the filter works** and FX_sItem is present | The value |
| `ac2-06-designer-strings-FX_sItem-value-readonly.png` | FX_sItem row selected; Properties: Name `FX_sItem`, String Value `Item`, Version `User version for user an…` | **FX_sItem = Item present** (AC-2) | Database state; that the selection made no edit (Save disabled in `ac2-10`) |
| `ac2-07-designer-strings-FX_sOrderNumber-absent.png` | Filter `FX_sOrderNumber`; Strings list empty; Properties still show the earlier FX_sItem selection | **FX_sOrderNumber absent** (zero rows after settle) | Database state; the Properties pane (stale) |
| `ac2-08-designer-strings-FX_sCustomerID-absent.png` | Filter `FX_sCustomerID`; Strings list empty | **FX_sCustomerID absent** | As above |
| `ac2-09-designer-strings-FX_sCount-absent.png` | Filter `FX_sCount`; Strings list empty | **FX_sCount absent** | As above |
| `ac2-10-designer-after-strings-cancel-clean.png` | Global Objects closed; FX_Items design view; toolbar Save greyed; footer ScopeType User | Designer back to a clean state after Cancel; no dialog | The Undo state (not visible; `find` shows disabled) |

## Action audit (T1, exact counts, worker-requested browser calls)

| Operation | Count |
| --- | --- |
| **Finish** (Form wizard) | **0** |
| Form wizard opened | **0** |
| Caption strings created (FX_sOrderNumber, FX_sCustomerID, FX_sCount) | **0** |
| String values edited or OK pressed in a String dialog | **0** |
| **Designer Save** / Regenerate Form / Designer top-toolbar Delete | **0 / 0 / 0** |
| Designer toolbar New | **0** |
| Designer Form close / reopen | **0 / 0** |
| Runtime Form open / close (FX_Orders) | **0 / 0** |
| Records entered, saved, deleted; list values chosen | **0 / 0 / 0 / 0** |
| Unload All Global Form Objects / Web Client unload / FormSync / deployment | **0 / 0 / 0 / 0** |
| Check-in / check-out / undo check-out | **0 / 0 / 0** |
| Changes to existing objects (IDO, table, property classes, FX_Items, FX_sItem, other strings, other Forms) | **0** |
| Select Form opened / cancelled with Cancel | **1 / 1** (OK pressed 0) |
| Global Objects (Strings view) opened / cancelled with Cancel | **1 / 1** (OK pressed 0) |
| `browser_tabs` list / select | **1 / 3** (select tab 0, tab 1, tab 0; each select after the list) |
| Snapshots untargeted / targeted | **1 / 0** (the one untargeted snapshot was saved by the tool; reading the saved file was denied by the harness, so the snapshot content was not read) |
| `browser_find` calls | **22** |
| Clicks (successful / failed) | **11 / 0** (Web Client Form menu 1; Form > Open 1; Select Form Cancel 1; Designer Edit menu 1; Edit > String 1; Strings filter 4; FX_sItem row 1; Global Objects Cancel 1) |
| `browser_type` fills (succeeded / refused) | **7 / 0** (Select Form filter FX_Items 1; Select Form filter FX_Orders 1; Strings filter FX_sItem, first fill 1; Strings filter FX_sItem slowly 1; FX_sOrderNumber slowly 1; FX_sCustomerID slowly 1; FX_sCount slowly 1) |
| Key presses | **7** (Tab 3; Control+a 4) |
| Waits | **7** (each 2 s) |
| Screenshots (worker-requested PNG) | **12** (`ac1-01`, `ac2-00` to `ac2-10`) |
| Ref-not-found errors / recovery snapshots used / timeouts | **0 / 0 / 0** |
| In-page dialogs answered | **2** (Select Form Cancel 1; Global Objects Cancel 1) |
| Native browser dialogs | **0** |
| Portal banner dismissals | **0** (none visible) |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0 / 0 / 0 / 0 / 0** |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** |
| Designer actions other than the read-only Edit > String view | **0** |

Tool-generated items not counted: the Playwright run-code wrappers and the snapshot YAML files and console logs written by the MCP tool under `evidence/playwright/` (tool-generated, not worker-authored; not enumerated).

## Worker-written-file inventory

| File | Action |
| --- | --- |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | created (this record) |
| `evidence/EXP-072/ac1-01-designer-identity-scope-before.png` | created |
| `evidence/EXP-072/ac2-00-webclient-before-select-form.png` | created |
| `evidence/EXP-072/ac2-01-select-form-FX_Items-positive-control.png` | created |
| `evidence/EXP-072/ac2-02-select-form-FX_Orders-target-zero-match.png` | created |
| `evidence/EXP-072/ac2-03-designer-edit-string-view-opened.png` | created |
| `evidence/EXP-072/ac2-04-designer-strings-FX_sItem-positive-control.png` | created |
| `evidence/EXP-072/ac2-05-designer-strings-FX_sItem-positive-control-settled.png` | created |
| `evidence/EXP-072/ac2-06-designer-strings-FX_sItem-value-readonly.png` | created |
| `evidence/EXP-072/ac2-07-designer-strings-FX_sOrderNumber-absent.png` | created |
| `evidence/EXP-072/ac2-08-designer-strings-FX_sCustomerID-absent.png` | created |
| `evidence/EXP-072/ac2-09-designer-strings-FX_sCount-absent.png` | created |
| `evidence/EXP-072/ac2-10-designer-after-strings-cancel-clean.png` | created |

Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

## Acceptance matrix (T1 scope)

| AC | T1 status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; Designer in User scope and clean; FX_Orders IDO cited from EXP-071-R2 | **SUPPORTED (observed, one run).** Sources listed above; session usable; footer ScopeType User; Save, Regenerate and Undo disabled. IDO cited from EXP-071-R2 T7 and T10 status. | `ac1-01`, `ac2-00`, `ac2-10` | IDO not re-read in T1. Scope shown by footer text, not by a scope column. |
| **AC-2** Collision gate: Select Form shows the FX_Items control and no FX_Orders Form; Edit > String shows the three IDs absent and FX_sItem = Item | **SUPPORTED (observed, one run each).** Select Form: control 1 row, target 0 rows. Strings: control 1 row (FX_sItem = `Item`); three absent checks 0 rows each. Both cancelled. | `ac2-01`, `ac2-02`, `ac2-05` to `ac2-09` | Same session. Absence is at list level, not database level. |
| AC-3 Pre-Finish wizard and one Finish | **NOT RUN** (T1 stops before the wizard). | — | — |
| AC-4 Three strings and the FX_sItem caption | **NOT RUN.** | — | — |
| AC-5 One Designer Save | **NOT RUN.** Designer Save 0. | — | — |
| AC-6 Designer close and reopen | **NOT RUN.** | — | — |
| AC-7 Runtime read-only opening | **NOT RUN.** | — | — |
| **AC-8** Final report with audit | **PARTIAL (T1).** Audit, inventory and state above. | This record | Observed only. |

## Final browser state (end of T1)

- Designer tab (tab 0) is the current tab: FX_Items design view, User scope, Save and Regenerate Form disabled, Undo disabled, no dialog open, no unsaved-change prompt.
- Web Client tab (tab 1) is not selected; its Select Form dialog was cancelled, so no in-page dialog is open there. Its runtime Form-tabs are as they were at the start (Sql Tables active).
- No browser-native dialog. No Finish, no Save, no creation, no change to any object.

## Deviations and notes (T1)

- **Strings filter Tab commit did not apply** (`ac2-04`): the filter text was entered and Tab moved focus to the list, but the list stayed unfiltered. The filter applied only after Control+a and a slow, key-by-key retype (`ac2-05`). The Select Form filter applied on Tab (as EXP-071-R2 recorded). Observed in one run; cause not established.
- **Saved snapshot not read:** the untargeted Designer snapshot was saved by the tool to a tool-results file, and a read permission for that file was denied by the harness. Its content was not read; the Designer state was established by `find` and screenshots instead.
- **Stale Properties pane:** during the three zero-row Strings checks the Properties pane still showed FX_sItem's properties. The Strings list was empty, so this does not affect the absence reading.
- **Red text:** the unselected FX_sItem row shows in red text (`ac2-05`). The meaning was not established.
- The Designer shows the FX_Items Form (not FX_Orders) as the current Form; it was not changed.

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Select Form, Filter By Name, Tab commit applies the filter; FX_Items returns one row; FX_Orders returns zero rows (no FX_Orders Form) | **observed** (one run; same session) |
| Designer Edit > String Strings filter: Tab commit did not filter; slow retype did | **observed** (one run); cause **unresolved** |
| FX_sItem present with value `Item` (Name FX_sItem, Version User) | **observed** (one run; agrees with EXP-050 T4) |
| FX_sOrderNumber, FX_sCustomerID, FX_sCount absent from the Strings list | **observed** (one run; list level, same session) |
| FX_Orders IDO and four properties (from EXP-071-R2) | **observed** in EXP-071-R2 (T7; recovered T10); **cited, not re-observed** in T1 |
| Designer clean in User scope (Save, Regenerate and Undo disabled) | **observed** (one run) |
| Route, wizard, Finish, strings creation, Designer Save, reopen, runtime | **not performed** (AC-3 to AC-7) |

## Open questions and next permitted action

1. **Gates passed** (AC-2): no FX_Orders Form exists in the Select Form list and the three string IDs are absent. The wizard task (Designer New > Classic > Multi-View, EXP-050 route) was not opened in T1.
2. **Next permitted action:** the Form wizard task of EXP-072 (AC-3 onward), which the coordinator must authorise. It needs a fresh snapshot of the Designer before the wizard, and the wizard must not be opened on a dirty Designer.
3. **Note for that task:** the Strings-filter slow-retype method and the Select Form Tab commit should be re-checked before relying on them. The FX_sItem row was selected (not edited) in T1; no pending Designer change exists.
4. Classification remains **observed only, NOT replay_verified.** Same-session UI evidence only; no database durability is claimed.

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 4 section 11 is complete (11a EXP-071-R2, 11b this experiment). Operator calls under the standing authorization of 2026-10-11.

- Run R-20261013-154321-ryQV completed as accepted after 12 worker tasks.
- Created, for later cleanup:
  - **Form `FX_Orders`:** User scope, Classic Multi-View on IDO FX_Orders, created with one Finish ("Process Completed Successfully").
    - Components, in order:
      - FX_OrderNumberStatic + FX_OrderNumberEdit
      - FX_CustomerIDStatic + FX_CustomerIDCombobox (ComboBox, object.FX_CustomerID)
      - FX_ItemStatic + FX_ItemCombobox (ComboBox, object.FX_Item)
      - FX_CountStatic + FX_CountEdit (object.FX_Count)
    - Saved with one Designer Save ("Global object(s) were saved.").
  - **Strings** (tenant-wide, User version):
    - `FX_sOrderNumber` = `Order Number`
    - `FX_sCustomerID` = `Customer ID`
    - `FX_sCount` = `Count`

    Each was created through the Caption ellipsis, with one Yes to its prompt and the value Tab-committed before OK. FX_sItem = `Item` was reused unchanged (the wizard already resolved the Item caption).
- Screenshots viewed by the operator assistant:
  - `t3-03`: right after Finish, the Designer shows FX_Orders in User scope with Save disabled. The canvas shows raw IDs FX_sOrderNumber, FX_sCustomerID and FX_sCount, `Item` resolved, and Count `1`.
  - `t8-09`: Edit > String shows FX_sCount = Count (User version).
  - `t9-02`: the Save toast; components list as above.
  - `t10-04`: after the post-Save close/reopen through the Form menu recent-forms entry, FX_Orders is in User scope with captions Order Number*, Customer ID*, Item*, Count, and Count 1.
  - `t11-01` and `t11-02`: the Web Client Select Form shows FX_Orders.
    - The runtime FX_Orders opens on a new record (blue star) with **Order Number 1**, Customer ID and Item as empty combo boxes, and Count 1.
    - Status "Order Number (Object 1 of 1)".
  - `t11-03`: the runtime Form closed with no prompt.
- Operator dispositions:
  1. **T3 accidental close:** the worker clicked the FX_Orders tab close control. The Form was clean, so it closed with no prompt. Accepted, and one incidental reopen was authorized.
  2. **T4 Designer Select Form:** it listed no FX_Orders on two searches, while the Web Client Select Form and the Designer Form menu did. The reopen route was changed to the Form menu recent-forms entry.
  3. **T11 toolbar Open:** used instead of Form > Open. It opens the same Select Form picker, and is accepted.
  4. **Worker denials** (reads of its own tool-result files outside the repo): approved twice.
- Counts:
  - Finish 1; Forms created 1; strings created 3; Designer Saves 1.
  - Designer closes/reopens: 1 accidental + 1 incidental reopen, then 1 post-Save pair.
  - Runtime open/close 1; records entered 0.
  - Unloads 0; checkout actions 0; changes to existing objects 0.
- Findings (observed):
  - The Designer Select Form list did not show a Form created earlier in the same Designer session; the Designer Form menu recent-forms list did. Use the Form menu to reopen new Forms. The cause is unresolved.
  - A domain-backed property class (FX_CustomerID, FX_Item) yields a ComboBox in the Multi-View wizard, as with FX_UM in EXP-050.
  - `AUTONUMBER()` shows Order Number 1 on a new record before any save. Increment and persistence are section 12.
  - The Strings filter in Edit > String needs select-all and retyping; Tab alone did not apply it.
- Confinement (git status): only `evidence/EXP-072/` and this record were written by the run.
- Next: section 12. In the runtime FX_Orders, add a couple of order records (Customer from FX_HelloWorld01, Item from FX_Items, Count), save, and observe the order number increasing by 1.
