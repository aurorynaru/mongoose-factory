# EXP-080 — T4 final blocked report (documentation only; zero browser calls)

- Experiment: EXP-080, Hello World Part 5 Section 3 — add the derived property `FX_DerOrderTotal` (Derived; class `FX_Cost`; expression `FX_Count * FX_ItmsCost`) to the IDO `FX_Orders`.
- Task: T4, cycle 3, task_message_id `d115dd5e-84a4-4b2d-ab1b-a922522adce7`, worker session `da70d93e-04be-47f3-8cb8-8df281b07cc9`, run `R-20261014-010308-VV2d`. Date 2026-10-14.
- Mode: LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Forms only); the IDO and its properties are tenant-wide.
- This task made **zero browser calls** and **zero Mongoose changes**. The outstanding prompt was not answered, the name was not re-entered, the class lookup was not reopened, no expression was entered, and neither Finish nor Save was invoked. The wizard was not closed and no session recovery was performed.

## 1. Final disposition

**BLOCKED at AC-2.** The Derived New Property wizard displayed an unexpected validation prompt after the Property Name field visibly read `FX_DerOrderTotal`. Under the bounded instruction, the wizard was preserved and Finish was not invoked.

- Exact prompt text. The dialog renders the text on two lines, with no period after "Name" in the render. The accessibility tree reads `Value is required for Property NameDo you want to change the value now?`. The brief quotes it as `Value is required for Property Name. Do you want to change the value now?`; the rendered text is recorded here, not the brief's variant.
- Dialog title: `Infor Mongoose Application Development Framework - IDO Property Wizard`. Buttons: `Yes` (default focus) and `No`.
- The prompt was **not answered**: neither `Yes` nor `No` was selected.
- **Cause: unresolved.** The name field displayed `FX_DerOrderTotal` (readbacks in T3 steps 5 and 8), yet the prompt reports the property name as required. Untested hypotheses: (a) the plain fill set the DOM value without the change or blur event that the wizard validates on; (b) the click on the Property Class picker blurred the name field, and the validator read an empty model value.
- **FX_DerOrderTotal was not confirmed created.** Finish was never invoked, and the grid was not re-read after T3 (the wizard tab was in front of the IDOs tab), so no post-change inventory exists.

## 2. Acceptance status

| AC | Status | Basis |
|---|---|---|
| AC-1 | **Supported** (observed; UI and accessibility level; same session) | T1 evidence: fresh IDOs Form (one Close Panel and one Select Form reopen); one visible-criterion query (F4 once) returned exactly one FX_Orders IDO, Revision Num 2, Revision Date 10/13/2026, Locked By the operator account, Check In and Undo Check Out enabled, Save disabled; Tables view with three entries; 16 Bound properties; FX_DerOrderTotal absent. T2 gate re-read the same 16 rows. Evidence: `t1-01`, `t1-02`, `t1-03`, `t1-04`. |
| AC-2 | **Failed at the validation gate** | One wizard opening; Derived chosen (effective, once); page 1 and page 2 recorded; Property Name filled once; class lookup attempted once with no selection; the prompt above appeared. Class FX_Cost, the shown types, the expression readback and the Finish response were **not** obtained. Evidence: `t2-01` to `t2-04`, `t3-01`. |
| AC-3 | **Not reached** | No Finish, so no post-Finish state, no Save decision, no inventory comparison. |
| AC-4 | **Not reached** | No second close/reopen pair and no recovery query. |
| AC-5 | **Documentation completed; experimental acceptance NOT claimed** | This report, the EXP-080 record and the audit below. The experiment is blocked; nothing is accepted. |

## 3. Baseline (T1; exact, from the record)

Revision Num 2; Revision Date 10/13/2026; Locked By the operator account (identity bar account; clipped in the image); Check In and Undo Check Out enabled; Save disabled. Project `FX_HelloWorldProject01`. Access As `G6R`; Label String ID and Caption `oFX_Orders`.

Tables view (three entries):

| Table | Alias | Type | Join | Join text |
|---|---|---|---|---|
| FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| FX_Items | fxitms | Secondary | Left Outer | `fxitms.[FX_Item] = fxords.[FX_Item]` |
| FX_Orders | fxords | Primary Base | Inner | (blank) |

Properties (16 rows; every row `Bound to Column`; no Derived row):

| # | Property | Seq | Class | Column | Key | Data type | Length | Column type | Read Only | Required |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | FX_OrderNumber | 1 | (class) | — | (class) | no | yes |
| 2 | FX_CusName | 2 | — | FX_Label (fxcus) | 0 | String | 100 | nvarchar | yes | no |
| 3 | FX_CustomerID | 2 | FX_CustomerID | FX_CustomerID | 0 | (class) | — | (class) | no | yes |
| 4 | FX_ItmsDescription | 2 | — | FX_Description (fxitms) | 0 | String | 150 | nvarchar | yes | no |
| 5 | FX_Item | 3 | FX_Item | FX_Item | 0 | (class) | 50 | (class) | no | yes |
| 6 | FX_ItmsCost | 3 | FX_Cost | FX_Cost (fxitms) | 0 | Decimal | 18 | decimal | yes | no |
| 7 | FX_Count | 4 | — | FX_Count | 0 | Long Integer | — | int | no | no |
| 8 | CreatedBy | 5 | — | CreatedBy | 0 | String | 128 | UsernameType | yes | no |
| 9 | UpdatedBy | 6 | — | UpdatedBy | 0 | String | 128 | UsernameType | yes | no |
| 10 | CreateDate | 7 | — | CreateDate | 0 | Date | — | CurrentDateType | yes | no |
| 11 | RecordDate | 8 | — | RecordDate | 0 | Date | — | CurrentDateType | yes | no |
| 12 | RowPointer | 9 | — | RowPointer | 0 | GUID | — | RowPointerType | yes | no |
| 13 | FX_CusAddress | 10 | — | FX_Address (fxcus) | 0 | String | 150 | nvarchar | yes | no |
| 14 | NoteExistsFlag | 10 | — | NoteExistsFlag | 0 | Byte | — | FlagNyType | no | no |
| 15 | InWorkflow | 11 | — | InWorkflow | 0 | Byte | — | FlagNyType | no | no (Read Only Record yes) |
| 16 | FX_ItmsPicture | 12 | FX_Picture | FX_Picture (fxitms) | 0 | Binary | — | varbinary | yes | no |

`FX_Count` and `FX_ItmsCost` were confirmed with exact spelling. FX_DerOrderTotal and any Derived property were absent at T1 and at the T2 gate.

Screenshots: `t1-03` (rows 1–8) and `t1-04` (rows 9–16) show the inventory; `t1-02` shows identity and the Tables view.

## 4. Wizard observations (all pages)

- **Page 1 (Attributes; "Select the binding for the new property").** IDO Name `FX_Orders` (shown in a field labelled "Property Name:", an accessibility mislabel recorded in EXP-061 and EXP-079). Four binding options, in order: **Bound** (selected by default), **Derived**, **Unbound**, **Subcollection**. Back disabled; Next enabled; Finish disabled; Cancel enabled. Screenshot `t2-01`: Bound selected, four options visible (verified on review). Derived was chosen once in effect: the first radio click timed out (below); the corrected click on the visible "Derived" label selected it. Screenshot `t2-03`: Derived selected, status bar `Derived`, Next enabled (verified on review).
- **Page 2 (Property Attributes), captured before any entry (T2).** Property Name: empty, required (`*`). Property Class: empty. Data Type, Column Data Type and Expression: each with an "Inherit from Property Class" checkbox, all unchecked; Data Type and Column Data Type comboboxes empty. Length and Decimal textboxes empty. Expression: an empty multi-line text area. No Bind To field; no Read Only option; no validation message at that time. Next disabled (last page); Back, Finish, Cancel enabled; Finish **enabled** while the name was blank. Screenshot `t2-04` (verified on review).
- **Page 2 after the name fill (T3).** Property Name textbox reads `FX_DerOrderTotal` (screenshot `t3-01`, and the T3 readback). The Property Class combobox remained empty after the picker click; no lookup list was visible. Finish enabled behind the prompt.
- **The prompt (T3).** Shown above; screenshot `t3-01` (verified on review): the centred dialog with its text and Yes/No, the wizard greyed behind it, the name field showing `FX_DerOrderTotal`, the class empty.

Not observed (never reached): the class selection readback, the inherit checkbox states after a class, the displayed Data Type / Length / Decimal Position / Column Data Type for FX_Cost, the expression field's readback, and the Finish response.

## 5. Action audit (cumulative T1–T3; reconciled to the task records)

Counts are the task records' own counts; none is inferred beyond them.

| Operation | Count | Note |
|---|---|---|
| Wizard openings (New Property) | **1** | T2 |
| Derived choice (effective) | **1** | T2 label click; the radio click timed out and did not run |
| Next navigation | **1** | T2 |
| Property Name fills | **1** | T3 (`FX_DerOrderTotal`) |
| Class lookup attempts | **1** | T3 (picker click; no list opened; no selection) |
| Class selections | **0** | |
| Expression fills | **0** | |
| Finish | **0** | |
| Save | **0** | |
| IDOs close / reopen pairs | **1 of 2** | T1: one Close Panel IDOs; one Select Form reopen |
| Target F4 queries | **1 of 2** | T1 |
| Select Form OK | 1 | T1 |
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** | zero checkout-management actions |
| Designer actions | **0** | tab 0 listed only; never selected, clicked or captured |
| Unloads, cache, FormSync, deployment, regeneration | **0** | |
| Strings, property classes, SQL, Forms, runtime records, IDO/property/table changes | **0** | |
| Re-logins (session-expiry procedure) | **0** | |
| In-page prompts answered | **0** | the T3 prompt is open and unanswered |
| Browser JavaScript, evaluate, run-code, console, network | **0** (worker-authored) | |
| Refresh, restart, direct URL | **0** | |
| Filter in Place button clicks | **0** | |
| `browser_tabs` list / select | **3 / 3** | T1 1/1; T2 1/1; T3 1/1 |
| Snapshots, untargeted / targeted | **16 / 0** | T1 8; T2 5; T3 3 |
| `browser_find` | **5** | T1 4 (`Open`, `Select Form`, `IdoCollections`, `OK`); T3 1 (`FX_Cost`, no match) |
| Element clicks, successful / failed | **11 / 1** | Successful: T1 7 (IDOs tab heading; Close Panel IDOs; Form menu; Open; IDOs row; Select Form OK; in-form Properties sub-tab); T2 3 (New Property; Derived label; Next); T3 1 (Property Class Open). Failed: T2 Derived radio (timeout; did not run) |
| `browser_type` | **3** | T1 2 (filter `IdoCollections`; IDO Name `FX_Orders`); T3 1 (Property Name) |
| Key presses | **3** | T1 only (Tab, Tab, F4) |
| Enter / Escape | **0 / 0** | |
| Waits / mouse moves / wheel | **1 / 1 / 1** | T1 only |
| Screenshots | **9** | T1 4; T2 4; T3 1 |
| Ref-not-found errors | **0** | |
| Timeouts | **1** | T2 Derived radio ("outside of the viewport"; visible, enabled and stable per the call log) |
| Native dialogs answered | **0** | |
| Fresh-snapshot recovery allowance used | **1 of 1** | T2 step 8 (no ref-not-found; used after the radio timeout) |
| Corrected visible inspections | **2** | T2 `t2-02` (viewport check after the timeout); T3 `t3-01` (prompt inspection) |

Reconciliation of clicks: 11 successful and 1 failed element click across T1–T3. The T2 failed click (Derived radio) is the only timeout. No successful click is recounted as failed.

## 6. Worker-written-file inventory (T1–T4)

- `experiments/EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md`: created at T1; edited at T2, T3 and T4 (status header; T2, T3 and T4 sections).
- `evidence/EXP-080/t1-01-pre-f4-idos-fx-orders-criterion.png`
- `evidence/EXP-080/t1-02-post-f4-identity-and-tables-view.png`
- `evidence/EXP-080/t1-03-baseline-inventory-properties-rows-1-to-8.png`
- `evidence/EXP-080/t1-04-baseline-inventory-properties-rows-9-to-16.png`
- `evidence/EXP-080/t2-01-wizard-page1-before-derived-choice.png`
- `evidence/EXP-080/t2-02-wizard-page1-derived-click-timeout-viewport.png`
- `evidence/EXP-080/t2-03-wizard-page1-derived-selected-before-next.png`
- `evidence/EXP-080/t2-04-wizard-page2-derived-before-any-entry.png`
- `evidence/EXP-080/t3-01-prompt-value-required-property-name-before-class.png`
- `evidence/EXP-080/T4-final-blocked-report.md` (this file; created at T4)

Tool-written snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-03-30-402Z.yml`, `page-2026-10-13T17-08-21-457Z.yml`, `page-2026-10-13T17-11-50-259Z.yml`, `console-2026-10-13T17-03-24-217Z.log`) were written by the browser tooling, not by the worker. They are read as readbacks only and are listed for operator git review.

No other repository file was written, edited or deleted in T1–T4. Repository confinement rests on the worker and harness inventories; the operator's git review is authoritative.

## 7. Limitations

- Same-session UI and accessibility evidence only. No database read; nothing here establishes durability, expression correctness or replay.
- Checkout ownership is read from the Locked By value and the enabled Check In and Undo Check Out buttons, not from a database field. The Locked By value is clipped in the screenshots.
- The Derived radio timeout's cause is unresolved. The click's non-execution is inferred from the next snapshot, which showed Bound still checked; a late execution cannot be fully excluded, but the subsequent readback shows only Derived selected.
- The prompt's cause is unresolved (see section 1). The name's registration in the wizard model is unverified.
- The class lookup was never opened successfully, so FX_Cost's selection, inherited types and inherit checkboxes are not observed.
- The IDOs grid was not re-read after T3 (the wizard was in front). Whether the existing 16 properties are unchanged after T3 is therefore not verified by a fresh read; the T1 and T2 readings are the last inventory.
- Two screenshots (`t2-01`, `t2-03`) were captured in T2 and first viewed only in T4; their descriptions in the T2 record were written from the pre-capture readback and are consistent with the images as verified here.
- The session-expiry notice read 11 minutes at T2 and 8 minutes at T3. No Session Expired modal or sign-in page appeared; the expiry procedure was not run.

## 8. Final browser state (as last observed in T3; not re-observed in T4)

- Tab 0: Web Designer; listed only; never acted on.
- Tab 1: Mongoose Web Client, selected at T3's last snapshot. The **IDO Property Wizard** tab is open and selected, on **page 2 (Property Attributes)**. Property Name `FX_DerOrderTotal`; Property Class empty; Data Type, Length, Decimal, Column Data Type and Expression empty; inherit checkboxes unchecked; Next disabled; Back, Finish and Cancel enabled. Finish was not pressed.
- **The in-page prompt "Value is required for Property Name / Do you want to change the value now?" (Yes, default focus; No) is OPEN and UNANSWERED.** The bounded instruction forbids answering it in T4. This leaves the page in a non-stable state (an open in-page dialog and an unsaved wizard). The coordinator or operator must decide the resolution; this is not a stable end state under the browser task boundaries.
- The IDOs Form tab is behind the wizard, disabled while the wizard is open. Last observed clean (Save disabled) at T2; not re-read in T3.
- The FX_Orders runtime tab is open and was not acted on.
- Session: about 8 minutes remaining at T3's last snapshot.

FX_Orders was checked out to the operator at T2 (Check In and Undo Check Out enabled); it was not re-read in T3 or T4.

## 9. Knowledge state

| Finding | State |
|---|---|
| IDO FX_Orders: Revision 2, checked out to the operator, Tables view three entries, 16 Bound properties; FX_DerOrderTotal absent | **observed** (one session; UI level) |
| New Property page 1 offers Bound (default), Derived, Unbound, Subcollection | **observed** (one run) |
| Derived page 2 shows Property Name, Property Class, Data Type / Length / Decimal, Column Data Type and an Expression text area, all empty, with inherit checkboxes unchecked; no Bind To and no Read Only option | **observed** (one run) |
| Finish enabled on Derived page 2 with a blank name and no class | **observed**; meaning not established |
| Entering the name then opening the class picker produced "Value is required for Property Name" while the field showed `FX_DerOrderTotal` | **observed** (one run); cause **unresolved** |
| Derived radio click timed out "outside of the viewport" while the element was visible; the label click selected Derived | **observed** (one run); cause **unresolved** (suspected environment) |
| FX_Cost selection; inherited Decimal 18 / 2 / decimal; expression readback; Finish response; post-Finish inventory | **unresolved** (not reached) |
| FX_DerOrderTotal created | **not confirmed** (no Finish; no post-change read) |
| Database durability, expression correctness, replay | **not claimed** (not supported by any evidence in this experiment) |

No candidate procedure is claimed. The Derived wizard flow is not verified beyond the observations above.

## 10. Open questions and blockers for the coordinator or operator

1. **Resolve the open prompt.** Decide whether to answer `Yes` (re-enter the name) or `No`, or cancel the wizard (a further lifecycle action requiring explicit approval). The prompt must not be left open as a stable end state.
2. **Diagnose the validation.** Establish whether the name fill reached the wizard model. A possible next step, if authorized, is to re-enter the name and move focus to another field before opening the class picker. Any such step is a new mutation and requires explicit direction.
3. **Single-wizard constraint.** The wizard must not be reopened in EXP-080 (one opening is recorded). Reopening would need an explicit operator decision.
4. **Session.** The session may expire before the wizard is resolved; an expiry would lose the open wizard state (treat as lost).
5. **Verification gap.** The IDOs grid has not been re-read since T2. The 16-property baseline should be confirmed before any further step.
6. **Derived radio timeout.** Unexplained; recurrence in a later task should be noted.

Classification: **observed only; experiment BLOCKED at AC-2; not replay_verified.**
