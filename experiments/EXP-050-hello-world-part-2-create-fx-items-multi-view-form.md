# EXP-050 — Hello World Part 2: Create FX_Items Multi-View Form, Caption Strings, and Verify Runtime

**Current status (after T9, final audit): PROPOSED OUTCOME OBSERVED — ACCEPTED WITH LIMITS (not blocked; not replay_verified).** One FX_Items User-scoped Classic Multi-View Form (one Finish); caption strings FX_sItem = Item and FX_sCost = Cost (one Yes and one OK each, committed before OK); one ordinary Designer Save (notification `Global object(s) were saved`; Designer clean); one same-session close and one reopen; one read-only runtime opening (order Item, Description, Cost, Unit of Measure; FX_UM combobox role with Open trigger; dropdown contents not inspected). No AC failed. Limits: same-session UI only (no cross-session, database, or replay evidence); no post-change read of the IDO, SQL objects, vendor Form, FX_sDescription, or FX_sUM (preservation rests on the action audit); Save notification names global objects, not the Form; canvas captions raw before reopen and resolved after (cause unresolved); Undo accessibility vs visual disagreement (unresolved); `git status` unavailable (Bash disabled; `.git` denied). Full matrix and reconciliation: `evidence/EXP-050/T9-final-audit-report.md`. AC-11 audit is now complete (T9).

Earlier status (after T8): RUNTIME OPENED ONCE (read-only; no data entered or saved). Rendered order Item, Description, Cost, Unit of Measure; captions Item, Description, Cost, Unit of Measure. FX_UM runtime control is a combobox (ComboBox role) with an Open dropdown trigger, matching the tutorial's ComboBox expectation; the dropdown trigger was not opened, so its list contents are unverified. Existing record shown as `Item (Object 1 of 1)`; no values changed. Runtime tab left open. Evidence: `evidence/EXP-050/T8-runtime-inspection-report.md`. Classification: observed only (single session); not replay_verified. AC-11 audit is a separate task.

Earlier status (after T7): FORM CREATED; ONE SAVE (clean); ONE SAME-SESSION CLOSE AND ONE REOPEN OF FX_Items COMPLETED. Reopened identity Name FX_Items, User / anton.ramos@3mworks.com.ph, Save and Undo disabled; four business fields at tabs 1 to 4 (FX_Item, FX_Description, FX_Cost, FX_UM); label Captions FX_sItem, FX_sDescription, FX_sCost, FX_sUM; FX_UMCombobox ComboBox (design-time, object.FX_UM). Canvas now shows resolved text Item, Description, Cost, Unit of Measure (raw IDs before close). Edit > String after reopen: FX_sItem = Item, FX_sCost = Cost (read-only; Cancel). Classification: observed same-session UI recovery only; not cross-session persistence; not replay_verified. Runtime NOT opened. Evidence: `evidence/EXP-050/T7-close-reopen-report.md`.

Earlier status (after T6): FORM CREATED; FX_sItem = Item and FX_sCost = Cost CREATED; ONE ORDINARY DESIGNER SAVE PERFORMED (native notification `Global object(s) were saved.`); POST-SAVE DESIGNER CLEAN (Save and Undo disabled); CANVAS STILL SHOWS RAW IDs FOR FX_sItem AND FX_sCost (unresolved); NO REOPEN, NO RUNTIME. T6 invoked the Designer Save once from a verified pre-Save state (FX_Items selected, User scope, Save enabled, no dialog). Post-Save reads: Save and Undo disabled, no alert, FX_Items still selected. Read-only Caption check: FX_ItemStatic `FX_sItem`, FX_DescriptionStatic `FX_sDescription`, FX_CostStatic `FX_sCost`, FX_UMStatic `FX_sUM`; bindings object.FX_Item, object.FX_Description, object.FX_Cost, object.FX_UM; FX_UMCombobox typed ComboBox (design-time). The notification names global objects, not the Form; whether the Form itself is persisted is for the reopen test. Evidence: `evidence/EXP-050/T6-designer-save-report.md`. Classification: observed only.

Earlier status (after T5): FORM CREATED; FX_sItem = Item and FX_sCost = Cost CREATED (one resource each); DESIGNER HAS TWO PENDING UNSAVED STRING CHANGES; NO ORDINARY SAVE, NO REOPEN, NO RUNTIME. T5 opened the FX_CostStatic Caption ellipsis (Caption confirmed `FX_sCost`), answered Yes once to `String FX_sCost does not exist. Create it?`, set String Value `Cost`, committed with Tab, verified the committed cell, and pressed OK once. Edit > String (read-only) shows `FX_sCost` = `Cost`; `FX_sItem` = `Item` reconfirmed; `FX_sDescription` = `Description` and `FX_sUM` = `Unit of Measure` read without edit. One targeting timeout occurred on the editor ref (no input reached it) and was recovered with one fresh snapshot and one corrected action. Canvas labels still show raw IDs for FX_sItem and FX_sCost. Save enabled (not pressed). Evidence: `evidence/EXP-050/T5-FX_sCost-caption-report.md`. Classification: observed only.

Earlier status (after T4): FORM CREATED; FX_sItem = Item CREATED (one resource); FX_sCost NOT YET CREATED; DESIGNER HAS A PENDING UNSAVED CHANGE; NO ORDINARY SAVE, NO REOPEN, NO RUNTIME. T4 opened the FX_ItemStatic Caption ellipsis (Caption confirmed `FX_sItem`), answered Yes once to `String FX_sItem does not exist. Create it?`, set String Value `Item`, committed with Tab, verified the committed cell, and pressed OK once. Edit > String (read-only) shows `FX_sItem` = `Item`; Cancelled. The canvas label still shows the raw `FX_sItem` ID, and Save is now enabled (not pressed). Evidence: `evidence/EXP-050/T4-FX_sItem-caption-report.md`. Classification: observed only.

Earlier status (after T3): FORM CREATED BY ONE FINISH; CAPTION STRINGS NOT YET CREATED; NO SAVE, NO REOPEN, NO RUNTIME. T3 re-ran the collision gate (positive control `FX_UMs` one row; `FX_Items` zero rows), invoked wizard Finish exactly once (native result `Process Completed Successfully`, acknowledged once with OK), and inspected the result. The Designer opened `FX_Items` in User scope (Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, Device Default, Normal, Is Master True), with Save and Undo disabled. A post-creation Select Form inventory shows one `FX_Items` row. Components (read-only): the four business fields are at tabs 1 to 4 (GridColumns) and their labels at tabs 5, 7, 9, 11 (Static) with Edit or ComboBox rows at 6, 8, 10, 12. Label Captions: `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`. `FX_UMCombobox` is typed **ComboBox** (design-time; not runtime). Evidence: `evidence/EXP-050/T3-form-creation-report.md`. Classification: observed only.

Earlier status (after T2): WIZARD STAGED TO THE FINAL PAGE; FINISH NOT INVOKED; NOTHING CREATED. T2 repeated the Select Form gate (positive control `FX_UMs` one row; exact `FX_Items` zero rows), opened the Classic Multi-View wizard, entered Name `FX_Items` (one plain fill) and Data Source `FX_Items`, kept the wizard's default four business fields, reordered them to FX_Item, FX_Description, FX_Cost, FX_UM, and unchecked Save Template. The wizard is left open on its final page (Finish enabled, not pressed). No Designer Save, caption string, close, reopen, or runtime open was performed. Evidence: `evidence/EXP-050/T2-wizard-preparation-report.md`. Classification: observed only.

Earlier status (after T1): PREFLIGHT AND GATES PASSED; NOTHING CREATED. T1 was read-only: the Web Client Select Form collision gate passed (positive control `FX_UMs` returned its row; exact `FX_Items` returned zero rows); the IDO `FX_Items` and its four business properties were read back and match the EXP-049 baseline; the Designer Global Objects Strings view shows `FX_sItem` and `FX_sCost` absent and `FX_sDescription` = `Description` and `FX_sUM` = `Unit of Measure` present and unchanged. No wizard was opened, no Form or string was created, and nothing was saved, checked in, or checked out. The creation task (wizard, Finish, the two caption strings, one Designer Save, close/reopen, runtime open) has not been authorised and has not been performed. Classification: observed only, single session, UI level. Not replay_verified.

Evidence: `evidence/EXP-050/T1-preflight-and-gates-report.md` (gate table, counts, limits, screenshot index).

## Run identity and provenance

- Run `R-20261011-034347-PXmt`, cycle 0, task T1. Worker session `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641`, task_message_id `22c7ea86-aa03-4a0c-b02c-bad57c40eb1b`.
- Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Designer footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- Mode: LEARNING MODE, FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User. Forms stay User-scoped; the IDO `FX_Items`, SQL table `dbo.FX_Items`, and the string resources are tenant-wide.
- Prerequisite records: EXP-049 (accepted with limits; FX_Items IDO checked in, FX_Items SQL table, four business properties) and EXP-045 (FX_UMs Multi-View Form and caption route; accepted with limitations).
- **Record path note:** the task header names this record `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md`. The T1 final-deliverable name `experiments/EXP-050-hello-world-part-2-fx-items-multiview-form.md` is the alternate. T2 (cycle 1) instructed: document the alternate name without creating a duplicate. The alternate file is **not** created; this file is the single EXP-050 record. Later tasks append here.

## T2 — Wizard staged to the final page (Finish NOT invoked; cycle 1)

Full report: `evidence/EXP-050/T2-wizard-preparation-report.md`. Screenshots `evidence/EXP-050/t2-01` to `t2-13`.

- **Gate (repeat):** Select Form, positive control `FX_UMs` returned one row (`t2-01`); exact `FX_Items` returned zero rows (`t2-02`). Cancelled. PASS for the visible inventory; same-session UI; no scope column or total count.
- **Route:** Designer toolbar New > Form Wizard Selection: Category `Classic`, Wizard `MultiView`, OK (`t2-03`).
- **Page 1:** Name `FX_Items` (one plain fill); Data Source `FX_Items` (selected once); Form Type MultiView; Layout GridLeft; Device Default (`t2-04`).
- **Page 2:** wizard default selection, four business fields (FX_Cost, FX_Description, FX_Item, FX_UM), all included (`t2-05`).
- **Page 3:** default order FX_Cost, FX_Description, FX_UM, FX_Item (`t2-06`). Reordered with four single-up presses (FX_Item three times, FX_Description once) to FX_Item, FX_Description, FX_Cost, FX_UM (`t2-07` to `t2-11`).
- **Final page:** sentence "Click the Finish button to build a multiview form named FX_Items with the data source FX_Items." Save Template checked, then unchecked (one label click after one timed-out checkbox click) (`t2-12`, `t2-13`). Next disabled, Back enabled, Finish enabled and not pressed.
- **Stop:** wizard open on the final page. No Finish, Save, caption string, close, reopen, or runtime open.
- **Counts:** Finish 0; Save 0; Form created 0; caption dialogs 0; wizard Next 3; Back 0; Cancel 0; plain Name fill 1; Data Source option 1; row selections 2; arrow presses 4; ref-not-found 2; timeouts 1; untargeted recovery snapshots 2 (second one disclosed in T2 report).
- **Observations:** page-3 accessibility marks the FX_Cost cell `[selected]` while the row marker is on FX_Description (order consistent; cause not established); the Save Template checkbox display span intercepted a click (environment behaviour).
- **Acceptance (T2 scope):** AC-2 PASS (visible inventory); AC-3 PASS for identity, route, Data Source, ordered fields, and Save Template unchecked, with the wizard grid order only (Designer order not established until after Finish). AC-4 to AC-11 not performed.

## T3 — One Finish; Form created; immediate inspection (cycle 2)

Full report: `evidence/EXP-050/T3-form-creation-report.md`. Screenshots `evidence/EXP-050/t3-01` to `t3-08`.

- **Pre-Finish:** wizard staged on its final page (`t3-01`); Web Client collision recheck repeated (`FX_UMs` one row; `FX_Items` zero rows; cancelled); wizard unchanged after the tab round trip (`t3-02`). Field order verified in T2 (`t2-11`); not re-checked in T3 (Back not used).
- **Finish:** invoked **once**. Native result: `Process Completed Successfully` (`t3-03`), acknowledged once with OK. Not retried.
- **Created Form:** Designer URL `?MGForm=FX_Items`; tabs `Property Classes` (vendor, not selected) and `FX_Items` (selected). Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Device Default; Form Type Normal; Is Master True; Caption empty; Save and Undo disabled (`t3-04`).
- **Components (read-only, native Expand and row selection):** Details panel and Components tab opened; grid Expand once; scrolled once (`t3-05`, `t3-06`). Tree rows:

| Tab | Component | Type | Data Source |
| --- | --- | --- | --- |
| 1 to 4 | FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol | GridColumn | object.FX_Item, object.FX_Description, object.FX_Cost, object.FX_UM |
| 5 | FX_ItemStatic | Static | — (Caption `FX_sItem`) |
| 6 | FX_ItemEdit | Edit | object.FX_Item |
| 7 | FX_DescriptionStatic | Static | — (Caption `FX_sDescription`) |
| 8 | FX_DescriptionEdit | Edit | object.FX_Description |
| 9 | FX_CostStatic | Static | — (Caption `FX_sCost`) |
| 10 | FX_CostEdit | Edit | object.FX_Cost |
| 11 | FX_UMStatic | Static | — (Caption `FX_sUM`, `t3-07`) |
| 12 | **FX_UMCombobox** | **ComboBox** | object.FX_UM |

- **Canvas order** (top to bottom): `FX_sItem*`, `Description`, `FX_sCost`, `Unit of Measure`. FX_sItem and FX_sCost show raw IDs (absent strings, consistent with T1). Description and Unit of Measure resolve.
- **FX_UM type:** the generated component is `FX_UMCombobox`, Type `ComboBox`. This is design-time evidence only. The tutorial's ComboBox expectation is matched at design time; runtime rendering is not yet observed.
- **Post-creation inventory:** Select Form, Filter `FX_Items`, settled after 2 s: one row `FX_Items` / `FX_Items` (`t3-08`). Cancelled; OK not pressed.
- **Counts:** Finish 1; completion OK 1; Designer Save 0; Undo 0; Caption dialog 0; String editor 0; close or reopen 0; runtime open 0; Select Form opened 2 (cancelled 2); components expand 2; row selections 4; wheel 1; ref errors 0; timeouts 0; template created 0; IDO, SQL, property, FX_UMs, vendor Form, string edits 0.
- **Acceptance (T3 scope):** AC-2 PASS (repeated); AC-3 PASS for identity, route, Data Source, and Save Template (field order from T2); AC-4 PASS for one Finish, the native result, Designer identity, and one inventory row; AC-7 partial (order, bindings, captions, and FX_UM type read; canvas order matches). AC-5, AC-6, AC-8 to AC-11 not performed.
- **Limits:** Finish result is the wizard's completion message, not persistence; Save disabled shows no pending edit, not database storage; Select Form has no scope column (scope from the Designer status bar and Properties Version); the page-3 order was not re-verified in T3.

## T4 — FX_sItem caption string (one creation; cycle 3)

Full report: `evidence/EXP-050/T4-FX_sItem-caption-report.md`. Screenshots `evidence/EXP-050/t4-01` to `t4-07`.

- **Preflight:** FX_Items tab selected (User scope; Save and Undo disabled; no dialog). FX_ItemStatic selected (tab 5, Pane 1); Caption `FX_sItem` confirmed before mutation (`t4-01`).
- **Prompt:** Caption ellipsis, once. Prompt `String FX_sItem does not exist. Create it?` (`t4-02`). Yes, once.
- **String dialog:** Name `FX_sItem`; generated default String Value `FX_s Item` (`t4-03`). Editor: Control+a, plain fill `Item`, Tab commit. Committed cell reads `Item` before OK (`t4-04`). OK, once (`t4-05`).
- **Independent check:** Edit > String, Strings filter `FX_sItem`, one row; String Value `Item` (`t4-06`). Cancel; no edit (`t4-07`).
- **Pending state:** Save enabled; not pressed. Canvas label still shows raw `FX_sItem*`. Undo: accessibility `[disabled]` vs icon visually darker (unresolved; not used).
- **Counts:** Caption ellipsis 1; Yes 1; String Value edits 1; Tab commit 1; OK 1; resources created 1; FX_sCost created or edited 0; FX_sDescription or FX_sUM edited 0; Designer Save 0; close or reopen 0; runtime open 0; component edits 0; ref errors 0; timeouts 0.
- **Acceptance (T4 scope):** AC-5 FX_sItem part PASS (exact prompt; commit before OK; exact ID and value in Edit > String; client view, not database). AC-6 untouched (no edit). AC-7 partial (Caption `FX_sItem` confirmed). AC-8 not performed.

## T5 — FX_sCost caption string (one creation; cycle 4)

Full report: `evidence/EXP-050/T5-FX_sCost-caption-report.md`. Screenshots `evidence/EXP-050/t5-01` to `t5-09`.

- **Preflight:** FX_Items tab selected (User scope; Save enabled from the pending FX_sItem change; no dialog). FX_CostStatic selected (tab 9); Caption `FX_sCost` confirmed before mutation (`t5-01`, `t5-02`).
- **Prompt:** Caption ellipsis, once. Prompt `String FX_sCost does not exist. Create it?` (`t5-03`). Yes, once.
- **String dialog:** Name `FX_sCost`; generated default `FX_s Cost` (`t5-04`). A type against a stale ref timed out with no input (the ref resolved to the read-only Property Description textarea). Fresh snapshot; corrected type into the active editor set `Cost`. Tab commit: grid cell reads `Cost`, out of edit mode (`t5-05`). OK, once (`t5-06`).
- **Independent check:** Edit > String, read-only. `FX_sCost` = `Cost` (`t5-07`). `FX_sItem` = `Item` reconfirmed (`t5-08`). `FX_sDescription` = `Description` and `FX_sUM` = `Unit of Measure` read via accessibility, no edit. Cancel (no OK).
- **Pending state:** Save enabled (not pressed). Undo: accessibility `[disabled]` vs icon visibly active (unresolved; not used). Canvas labels FX_sItem and FX_sCost still raw IDs.
- **Counts:** Caption ellipsis 1; Yes 1; String Value editor 1; committed text entries 1; timed-out type 1; Tab 1; OK 1; resources created 1; FX_sItem, FX_sDescription, FX_sUM edits 0; Designer Save 0; close or reopen 0; runtime open 0; component edits 0; Global Objects Cancel 1; screenshots 9.
- **Acceptance (T5 scope):** AC-5 both intended resources now established (FX_sItem in T4; FX_sCost here), each prompt tied to its exact ID, each value committed before OK, Edit > String shows exact IDs and values (client view, not database). AC-6 read-only PASS (no edit). AC-7 partial (captions `FX_sCost` and `FX_sItem` as references; canvas raw IDs). AC-8 not performed.

## T6 — One ordinary Designer Save; post-Save verification (cycle 5)

Full report: `evidence/EXP-050/T6-designer-save-report.md`. Screenshots `evidence/EXP-050/t6-01` to `t6-04`.

- **Pre-Save gate:** FX_Items tab selected (vendor Property Classes not selected); status bar User / anton.ramos@3mworks.com.ph; Save enabled; Undo icon active (accessibility disabled, not used); no dialog (`t6-01`).
- **Save:** toolbar Save invoked **once** (`e16`). Not retried.
- **Immediate result:** notification `Save — Global object(s) were saved.`; Save and Undo disabled; no alert, error, or prompt; FX_Items selected, User scope (`t6-02`).
- **Settled (3 s, no action):** notification gone; Save and Undo disabled; no dialog (`t6-03`).
- **Canvas captions (not modified):** FX_sItem* and FX_sCost: still raw IDs; Description and Unit of Measure resolved (`t6-03`, `t6-04`). Unresolved; not refreshed.
- **Read-only component check (selection only):** FX_ItemStatic `FX_sItem` (tab 5); FX_DescriptionStatic `FX_sDescription` (tab 7); FX_CostStatic `FX_sCost` (tab 9); FX_UMStatic `FX_sUM` (tab 11). Edit rows bound to object.FX_Item, object.FX_Description, object.FX_Cost (tabs 6, 8, 10). FX_UMCombobox ComboBox, object.FX_UM, tab 12 (design-time type only). Save and Undo disabled after these reads (`t6-04`).
- **Counts:** Save 1; Save retries 0; close or reopen 0; runtime open 0; string dialog 0; caption ellipsis 0; component edits 0; row selections 4; ref errors 0; timeouts 0.
- **Acceptance (T6 scope):** AC-8 PASS for one invocation, native result, and clean state (Save and Undo disabled, no dialog). The notification names global objects, not the Form. AC-7 extended (captions and bindings re-read after Save; canvas raw IDs unresolved). AC-9 to AC-11, AC-4 not in T6 scope.

## T7 — Same-session close and reopen of FX_Items (recovery inspection; cycle 6)

Full report: `evidence/EXP-050/T7-close-reopen-report.md`. Screenshots `evidence/EXP-050/t7-01` to `t7-07`.

- **Pre-close:** FX_Items selected; User / anton.ramos@3mworks.com.ph; Save and Undo disabled; no dialog (`t7-01`).
- **Close (once):** the FX_Items tab's own close control. FX_Items absent from the tablist; no prompt. The Designer moved to the vendor IdoPropertyClasses view (not edited) (`t7-02`).
- **Reopen (once):** Form menu, recent-forms entry `FX_Items`. Reopened tab selected; Name FX_Items; Version `User version for user anton.ramos@3mworks.com.ph`; User scope; Save and Undo disabled (`t7-03`).
- **Components (read-only):** Details expanded; Components grid Expand once. Positions and bindings: 1 FX_ItemGridCol (object.FX_Item); 2 FX_DescriptionGridCol; 3 FX_CostGridCol; 4 FX_UMGridCol; labels at 5, 7, 9, 11 (FX_ItemStatic, FX_DescriptionStatic, FX_CostStatic, FX_UMStatic) with Edit rows at 6, 8, 10 and FX_UMCombobox ComboBox (object.FX_UM) at 12 (`t7-04`, `t7-05`). Label Captions `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM` (row selection, Properties).
- **Canvas after reopen:** `Item*`, `Description`, `Cost`, `Unit of Measure` (resolved). Before close: raw `FX_sItem*` and `FX_sCost:`. Cause not established; same-session observation.
- **Edit > String (read-only, Cancel):** FX_sItem = `Item`; FX_sCost = `Cost` (`t7-06`).
- **Final:** Save and Undo disabled; no dialog; FX_Items selected (`t7-07`).
- **Counts:** close 1; reopen 1; Save 0; creation or wizard 0; runtime 0; String edits or OK 0; Caption edits 0; component edits 0; row selections 4; Edit > String 1 (Cancel 1); Details Expand 1; grid Expand 1; ref errors 0; timeouts 0; screenshots 7.
- **Acceptance (T7 scope):** AC-9 PASS for same-session UI recovery (close, reopen, identity, positions, bindings, caption references). Not cross-session or database-level. AC-7 extended (positions, bindings, captions). AC-5 recovery view (strings read). AC-10, AC-11 not complete (runtime not in T7).

## T8 — One read-only Web Client runtime opening of FX_Items; AC-10 (cycle 7)

Full report: `evidence/EXP-050/T8-runtime-inspection-report.md`. Screenshots `evidence/EXP-050/t8-01` to `t8-04`.

- **Preflight:** Designer FX_Items unchanged (User scope; Save disabled; no dialog). Web Client usable (DEM identity bar; no sign-in or banner).
- **Select Form (native):** toolbar Open; single settled row Caption `FX_Items` / Name `FX_Items`, Filter By Name, boxes unchecked (`t8-01`). Not retyped.
- **Open (once):** Select Form OK. Runtime tab `FX_Items` selected (`favoriteContext=FX_Items`).
- **Rendered layout (`t8-02`, `t8-04`):** Item (required, textbox, empty); Description (textbox, empty); Cost (textbox, `0.00`); Unit of Measure (combobox with Open trigger, empty). Grid columns `* Item`, `Description`, `Cost`, `Unit of Measure`. Status bar `Item (Object 1 of 1)`.
- **FX_UM control:** accessibility `combobox "Unit of Measure:"` with `Open` button; element crop `t8-03` shows bordered field with downward arrow. Trigger not clicked. Direct runtime evidence of a combo-box-style control; list contents unverified.
- **Comparison:** tutorial expects a ComboBox; runtime combobox role and dropdown trigger match. Designer type ComboBox (T3, T6, T7) agrees. No discrepancy in order or captions.
- **Counts:** runtime open 1; Select Form opened 1, OK 1, Cancel 0; text entered 0; dropdown selections 0; Open trigger clicks 0; records created, saved, or deleted 0; Save 0; close or reopen 0; Filter in Place 0; New, Delete, Refresh 0; Designer edits 0; ref errors 0; timeouts 0; screenshots 4.
- **Acceptance (T8 scope):** AC-10 PASS for one read-only opening, order, captions, FX_UM control captured, comparison recorded, no data entered or saved. Limits: dropdown list not inspected; domain-bound list not verified in runtime; existing record's stored values not read beyond display. AC-7 runtime display supplement. AC-11 separate.

## T9 — Final evidence, count, and confinement audit (documentation only; no browser action)

Full report: `evidence/EXP-050/T9-final-audit-report.md` (matrix with evidence paths and limits; reconciliation; preservation audit; confinement; open questions). Sources: this record, the T1–T8 reports, the controller audits `harness-audit-T1` to `T8`, and the existing screenshots. No screenshot, Save, Form, or Designer action was taken in T9.

**Reconciled operations (worker reports and controller audits agree):** Finish 1 (T3 #27); completion notice OK 1 (T3 #31); caption prompts answered Yes 2 (FX_sItem T4 #10; FX_sCost T5 #15), No 0; String dialog OK 2 (T4 #22; T5 #29), each after a Tab commit; Designer Save 1 (T6 #7); Form-tab close 1 (T7 #6); recent-forms reopen 1 (T7 #13); runtime open 1 (T8 #11); Global Objects opened 4, all cancelled (OK 0); Select Form opened 5 (4 cancelled, 1 OK = the runtime open); wizard Next 3; browser-reference "not found" 2 (T2); browser timeouts 2 (T2 Save Template checkbox; T5 type into a read-only textarea, no input); harness-flagged `browser_type` 23 (filter entries, one plain Name fill, String Value entries). Grep over the audits: no Delete, Check In or Out, Regenerate, Refresh, Get More Rows, SQL, or second Save or close. Screenshots: 69 PNG (T1 17, T2 13, T3 8, T4 7, T5 9, T6 4, T7 7, T8 4).

**Acceptance matrix (no check FAILED; none PENDING):**

| AC | Status | Limit (see report §2 for evidence paths) |
| --- | --- | --- |
| AC-1 Preflight | PASS (limited) | Site Developer not observed; FX_Description detail from accessibility only |
| AC-2 Collision gate | PASS (limited) | Visible inventory; no scope column; match mode unstated; T3 recheck has no PNG |
| AC-3 Pre-Finish wizard | PASS | Field order captured in T2 (`t2-11`), not re-checked in T3; wizard grid order |
| AC-4 One Finish, one Form | PASS | Initially-loaded identity (T3); reopened identity in AC-9 |
| AC-5 Two caption resources | PASS (limited) | Global Objects client view, not database; canvas raw IDs until reopen |
| AC-6 Existing strings unchanged | PASS (limited) | Pre-Save reads and action audit; no post-Save read |
| AC-7 Components order and captions | PASS (limited) | Tab-number and canvas order, not pixels; three captions from accessibility text |
| AC-8 One ordinary Save; clean Designer | PASS (limited) | Notification names global objects, not the Form |
| AC-9 Close and reopen | PASS (limited) | Same-session UI recovery only; canvas display changed after reopen (cause unresolved) |
| AC-10 Runtime open | PASS (limited) | Dropdown contents not inspected (trigger deliberately unopened); domain validation unverified |
| AC-11 Final audit | PASS (limited) | Counts reconciled; preservation by action audit and pre-change reads only; `git status` unavailable |

**Preservation (limits):** no post-change read of the FX_Items IDO, the SQL objects, the vendor IdoPropertyClasses Form, FX_sDescription, FX_sUM, or existing data. No audit row shows an action on any of these except the read-only views listed in the report. The vendor Form was viewed (Designer tab) but never saved or selected for edit.

**Repository confinement:** worker Write and Edit calls target only this record and `evidence/EXP-050/` (T1–T9 reports and 69 PNG). Controller audit files `evidence/EXP-050/harness-audit-T1..T8.md` are controller-generated. `evidence/playwright` snapshot and console files from 19:44 to 20:14 were written by the browser tool. `.git` is access-denied, so `git status` was not run; the harness's before/after diff is needed for the final confinement verdict. The alternate deliverable name `experiments/EXP-050-hello-world-part-2-fx-items-multiview-form.md` was **not** created; this single record is the file the task header named.

**Proposed outcome:** OBSERVED — ACCEPTED WITH LIMITS; not replay_verified. Coordinator decisions requested: outcome and limit waivers; classification of the 23 `browser_type` flags; whether the two T2 recovery snapshots count against one allowance; the repository confinement verdict; optional post-change preservation reads and a read-only FX_UM dropdown inspection (both deliberately not done).

## Operator-approved objective (summary of the brief)

Create exactly one User-scoped Classic Multi-View Form `FX_Items` on the existing `FX_Items` IDO, with the wizard's default properties and the business-field order FX_Item, FX_Description, FX_Cost, FX_UM. Create caption strings `FX_sItem` = `Item` and `FX_sCost` = `Cost` through the EXP-045 Caption ellipsis route. Leave `FX_sDescription` = `Description` and `FX_sUM` = `Unit of Measure` unchanged. Perform one ordinary Designer Save, close and reopen the Form once, verify its identity and persisted configuration, and open it once in the Web Client runtime without entering data. Record the actual `FX_UM` component type and compare it with the tutorial's ComboBox expectation without assuming it.

**Out of scope:** the IDO and SQL table; the property classes; FX_UMs; `FX_sDescription` and `FX_sUM` edits; caption strings beyond `FX_sItem` and `FX_sCost`; a second FX_Items Form; the IdoPropertyClasses Form; test records; check-in, checkout, metadata unload, FormSync, deployment, and direct SQL.

## T1 — Read-only preflight and gates (no creation)

Actions in order (counts in the evidence report):

1. Read AGENTS.md, the EXP-049 outcome block, and the EXP-045 Multi-View, Components-grid, and Caption-dialog procedures (EXP-045 T5 to T13 lessons: Components grid Expand; Caption ellipsis prompt; Global Objects string view; commit-before-OK note from T12).
2. Snapshot both tabs. Tab 0 Designer: vendor `IdoPropertyClasses` design view, Save and Undo disabled, `ScopeType: User`. Tab 1 Web Client: identity bar matches the DEM configuration, no sign-in or configuration prompt, no portal banner.
3. Select Form gate in the Web Client: positive control `FX_UMs` returned one row (`t1-02`); exact `FX_Items` returned zero rows (`t1-03`). Cancelled.
4. IDOs tab, one Filter in Place query with IDO Name `FX_Items`: one IDO, project `FX_HelloWorldProject01`, alias `fxitms`, Revision 2, checked in (`t1-04`, `t1-05`).
5. IDO Properties (linked to FX_Items): four business rows read. FX_Item (`t1-06`), FX_Cost (`t1-07`), FX_UM (`t1-08`), FX_Description (accessibility row text).
6. Designer Edit > String (Global Objects, Strings filter, Cancel): `FX_sItem` zero rows (`t1-11`); `FX_sCost` zero rows (`t1-12`); `FX_sDescription` = `Description` (`t1-13`, `t1-14`); `FX_sUM` = `Unit of Measure` (`t1-15`); positive control `Collection Name` one row (`t1-16`). Cancelled; Designer Save disabled (`t1-17`).

### T1 gate results

| Gate | Result | AC |
| --- | --- | --- |
| Select Form, positive control `FX_UMs` | One row `FX_UMs` / `FX_UMs` | AC-2 |
| Select Form, exact `FX_Items` | Zero rows | AC-2 |
| Designer Strings `FX_sItem` | Zero rows (absent in the visible list) | AC-5 pre-check |
| Designer Strings `FX_sCost` | Zero rows (absent in the visible list) | AC-5 pre-check |
| Designer Strings `FX_sDescription` | `Description`, User version | AC-6 read |
| Designer Strings `FX_sUM` | `Unit of Measure`, User version | AC-6 read |

### T1 IDO baseline (read-only, matches EXP-049)

| Property | Class | Column | Type | Length or precision | Required | Label | Domain | Sequence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FX_Item | FX_ItemBase | FX_Item | String, nvarchar | 20 | Yes (`*Required`) | FX_sItem | none | 1 |
| FX_Description | none | FX_Description | String, nvarchar | 150 | No | FX_sDescription | none | 2 |
| FX_Cost | FX_Cost | FX_Cost | Decimal, decimal | 18, 2; default 0 | No | FX_sCost | none | 3 |
| FX_UM | FX_UM | FX_UM | String, nvarchar | 10 | No | FX_sUM | FX_UMs / FX_UM / FX_Description | 4 |

Checkout state observed: `FX_Items` IDO checked in (Revision 2, Locked By blank). Property-class checkout state was not re-read in T1.

### T1 acceptance status

| AC | T1 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-1 Preflight | Partial | `t1-01`, `t1-09`, `t1-17`; IDO and property reads | Site Developer capability and the About text not observed; Designer console not checked |
| AC-2 Collision gate | PASS for the visible inventory | `t1-02`, `t1-03` | Pre-creation repeat required before any Finish; no scope column or total count; single session |
| AC-3 to AC-4 | Not performed | — | Creation not authorised |
| AC-5 Caption strings | Pre-check only (both absent in the visible list) | `t1-11`, `t1-12` | No creation performed |
| AC-6 Existing strings | Read PASS | `t1-14`, `t1-15` | Read only; Global Objects view, not a database read |
| AC-7 to AC-11 | Not performed | — | — |

### Unresolved observations (T1)

- Match mode (substring or exact) of the Select Form and Global Objects filters is not stated by either UI.
- The Global Objects Strings list shows no scope column; scope-complete absence is not established.
- Red row font on `FX_sDescription`, `FX_sUM`, and the positive control `Collection Name` is unexplained. It is not specific to FX_ strings.
- The IDOs tab keeps the FX_Items criterion from T1.
- The Sql Columns FX_UM editor was left in an active state from before T1; not touched.
- `t1-06` is named "four-business-properties" but shows only the FX_Item detail.

## Counts (T1)

Wizard 0; Finish 0; Create Form 0; Form created 0; Save 0; New or Delete 0; Caption dialog 0; string created or prompt answered 0; string edited 0; check-in or checkout 0; IDO, property class, SQL, FX_UMs, or string edits 0; Select Form opened 1 (cancelled 1, OK 0); Global Objects opened 1 (cancelled 1, OK 0); screenshots 17; Ref-not-found or timeouts 0; prompts answered 0; portal banner dismissals 0; JavaScript by worker 0.

**Superseded (T9):** the T1 statements in this section and in "Knowledge state (T1)" that creation, the Save, the close and reopen, and the runtime open were "not authorised" or "not performed" describe the T1 state only. Those steps were performed in T2–T8 (see the T2–T8 sections above and `evidence/EXP-050/T9-final-audit-report.md`).

## Operator decisions and next permitted action (T1 state; superseded)

1. **Creation task authorisation.** Creating the Form, the two strings, the Designer Save, the close/reopen, and the runtime open are not authorised by T1. A new task must authorise them explicitly.
2. **Gate repeat.** The creation task must repeat the Select Form gate in its own session before any Finish, and must not press Finish if a conflicting `FX_Items` Form is visible.
3. **Save Template.** EXP-045 observed the final page's Save Template state only in T2 (checked, then unchecked). The creation task must confirm it unchecked before Finish.
4. **Caption dialog.** The `FX_sItem` and `FX_sCost` prompts must each be answered once and the String Value committed (Tab or Enter) before OK.

## Evidence index

- `evidence/EXP-050/t1-01-webclient-preflight-initial-state.png`: Web Client identity bar (DEM configuration, `anton.ramos@3mworks.com.ph`), runtime tabs, SQL Columns row FX_UM with an active Column Name editor. Proves identity and no dialog; does not prove the editor is harmless.
- `evidence/EXP-050/t1-02-select-form-positive-control-FX_UMs-settled.png`: Select Form, filter `FX_UMs`, one row `FX_UMs`. Proves the filter executed and found the control; not scope or database.
- `evidence/EXP-050/t1-03-select-form-target-FX_Items-exact-settled-zero-rows.png`: Select Form, filter `FX_Items`, empty grid. Proves zero visible rows for the filter; not database absence.
- `evidence/EXP-050/t1-04-webclient-idos-tab-state-before-query.png`: IDOs tab with the earlier FX_Items record. Proves the retained state before T1's query.
- `evidence/EXP-050/t1-05-idos-FX_Items-exact-query-settled.png`: IDO FX_Items, Revision 2, project FX_HelloWorldProject01, alias fxitms, Locked By blank, Check Out enabled, Save greyed, `IDOs 1 of 1`. Proves the IDO's displayed state; not the stored definition.
- `evidence/EXP-050/t1-06-ido-properties-FX_Items-four-business-properties-readonly.png`: IDO Properties, FX_Item detail (`Properties 1 of 11`). Proves FX_Item only; the filename overstates the content.
- `evidence/EXP-050/t1-07-ido-properties-FX_Cost-row-readonly.png`: FX_Cost detail (Decimal 18/2, default 0, FX_sCost, sequence 3).
- `evidence/EXP-050/t1-08-ido-properties-FX_UM-row-readonly.png`: FX_UM detail (String 10, nvarchar, FX_sUM, domain FX_UMs / FX_UM / FX_Description, sequence 4).
- `evidence/EXP-050/t1-09-designer-preflight-vendor-IdoPropertyClasses-save-disabled.png`: Designer, vendor IdoPropertyClasses design view, Save and Undo greyed, `ScopeType: User`. Proves the clean Designer state; no change made.
- `evidence/EXP-050/t1-10-global-objects-strings-dialog-initial.png`: Global Objects dialog opening state, Strings filter empty. Proves the dialog and its controls.
- `evidence/EXP-050/t1-11-strings-filter-FX_sItem-settled.png`: Strings filter `FX_sItem`, empty list. Proves zero visible rows.
- `evidence/EXP-050/t1-12-strings-filter-FX_sCost-settled.png`: Strings filter `FX_sCost`, empty list. Proves zero visible rows.
- `evidence/EXP-050/t1-13-strings-filter-FX_sDescription-settled.png`: Strings filter `FX_sDescription`, one row (red text).
- `evidence/EXP-050/t1-14-strings-FX_sDescription-row-selected-value.png`: FX_sDescription selected; String Value `Description`; Version `User version for user an…`. Proves the displayed value; not the database.
- `evidence/EXP-050/t1-15-strings-FX_sUM-row-selected-value.png`: FX_sUM selected; String Value `Unit of Measure`; Version `User version for user an…`. Proves the displayed value; not the database.
- `evidence/EXP-050/t1-16-strings-positive-control-Collection-Name-settled.png`: positive control `Collection Name`, one row (red text). Proves the filter returns rows.
- `evidence/EXP-050/t1-17-designer-after-global-objects-cancel.png`: Designer after Cancel; dialog closed; Save and Undo greyed. Proves the clean post-T1 state.
- `evidence/EXP-050/T1-preflight-and-gates-report.md`: gate table, counts, limits, and final browser state.

## Repository changes (T1)

- Written: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (this record).
- Written: `evidence/EXP-050/t1-01` to `t1-17` (PNG) and `evidence/EXP-050/T1-preflight-and-gates-report.md`.
- Not written: any other repository file. No IDO, SQL, property class, FX_UMs, string, vendor Form, memory, recipe, or `tools/` file was edited.

## Knowledge state (T1)

| Finding | State |
| --- | --- |
| Web Client and Designer usable; User scope; DEM configuration | observed (`t1-01`, `t1-09`) |
| Select Form, `FX_UMs` returns one row; `FX_Items` returns zero rows (visible inventory, single session) | observed (`t1-02`, `t1-03`) |
| IDO `FX_Items` (project `FX_HelloWorldProject01`, alias `fxitms`, Revision 2, checked in) | observed (`t1-05`) |
| IDO `FX_Items` four business properties and their values (matches EXP-049) | observed (`t1-06`–`t1-08`, accessibility) |
| `FX_sItem` and `FX_sCost` absent from the visible Global Objects Strings list | observed (`t1-11`, `t1-12`) |
| `FX_sDescription` = `Description`; `FX_sUM` = `Unit of Measure` (Global Objects view) | observed (`t1-14`, `t1-15`) |
| Multi-View creation, caption strings, Designer Save, reopen, and runtime display | **not performed**; unresolved |
| `FX_UM` runtime input type (tutorial ComboBox expectation) | **unresolved**; not assumed |
| Replay verification | **not claimed** |

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-034347-PXmt, completed/accepted in cycle 9). Observed only, not replay-verified.

Created, for later cleanup:
- **Form `FX_Items`** (User scope), Classic Multi-View on IDO FX_Items. Field order: FX_Item, FX_Description, FX_Cost, FX_UM.
  - Created with one Finish.
  - Saved with one Designer Save (notification "Global object(s) were saved").
  - Recovered after one close/reopen.
- **Strings:** `FX_sItem` = `Item`, `FX_sCost` = `Cost`. Each was created through the Caption ellipsis, with one Yes to "String <ID> does not exist. Create it?" and the String Value cell committed with Tab before one OK. Both were verified in Edit > String, before and after the reopen.

FX_sDescription and FX_sUM were read in T1 (Description / Unit of Measure) and not changed.

Operator screenshot review:
- `t7-03`: the reopened Designer Form FX_Items, User scope, Save disabled. Labels: `Item*`, `Description:`, `Cost:` (input shows 0.00), `Unit of Measure:`.
- `t8-02`: the Web Client runtime FX_Items in add mode, same order and captions. Cost is pre-filled with `0.00`. Unit of Measure is a combo box with a dropdown arrow. Status "Item (Object 1 of 1)".
- `t8-03`: close-up of the FX_UM combo box with its open trigger. The dropdown contents were not inspected.

Operator decision during the run:
1. **Approved worker denial (T9):** one expected permission denial: a read of `.git/logs/HEAD`, which is denied by design. It had no effect on the experiment.

Learned (observed):
1. **Domain gives a combo box:** a property whose property class has a domain (FX_UM → FX_UMs) is generated by the Classic Multi-View wizard as a combo box. The tutorial's section 8 expectation was observed at the control-type level. Its list contents and validation are still untested.
2. **Default reaches the runtime:** the property-class default (FX_Cost Default Value 0, Decimal Position 2) reaches the runtime as a pre-filled `0.00` in add mode, while the SQL column has no default (EXP-049). This answers the tutorial's "correct inheritance level" caution at the UI level.
3. **Caption procedure repeated:** the EXP-045 caption-string procedure (Yes to the create prompt, replace the generated default, Tab-commit, OK, verify in Edit > String) worked first time for both strings. It is now observed twice and is a candidate for a recipe.
4. **Captions after reopen:** canvas captions showed the raw IDs before the reopen and the resolved values after it, as in EXP-045.

Limits:
- Only the same session, at the UI level.
- No post-change read of the FX_Items IDO, its SQL objects, FX_sDescription or FX_sUM; preservation rests on the action audit.
- The Save notification names global objects, not the Form.

Next in Part 2 (sections 8–9):
- the FX_UM dropdown list contents;
- an invalid-domain validation attempt (one rejected Save);
- the three tutorial items (dumbbell, guitar and eggs adapted, with EA/DZ).

The eggs cost is ambiguous in the transcript, so the brief must fix a value.
