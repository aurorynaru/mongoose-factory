# EXP-089 — Final acceptance report (T6, documentation only)

- Task: T6, cycle 6, run `R-20261014-200230-uc2F`, task_message_id `73e15a3a-7399-40a7-8fec-50e97e28d1a0`, worker session `b7b7dee9-f792-470a-8dea-7d5566ea2068`. Date 2026-10-14.
- Browser calls in T6: **0**. Mongoose changes in T6: **0**. Repository reads in T6: the EXP-089 record, the five controller audits `harness-audit-T1.md` to `harness-audit-T5.md`, and read-only views of the evidence PNG files named below (image reads are not browser calls).
- Scope: the record `experiments/EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md` (updated in T6) and this report (new). No other file was written.
- Classification of all findings: **observed only**, same session. **Not replay_verified. No cross-session durability and no independent database durability is claimed.**

## 1. Recommendation

**ACCEPTED AS OBSERVED**, on the conditions in section 8. All five acceptance checks are supported by existing evidence. Each check is restated below with its evidence and limits.

## 2. Viewing corrections made in T6 (read before relying on the record)

During the audit, five evidence PNGs were found to be described in the record as "viewed" in their task although no image read of them appears in that task's audit. Each was viewed in T6 (a read, not a browser call). The content matches the record's description in every case:

| File | Record claim | T6 view result |
| --- | --- | --- |
| `evidence/EXP-089/t2-01-designer-start-fx-orders-user-clean-after-reauth.png` | "each viewed before citing" (T2) | FX_Orders heading; Properties Name FX_Orders, Normal, Is Master True; footer `ScopeType: User`; Save and Undo greyed; no dialog. Matches. |
| `evidence/EXP-089/t4-02-FX_CustomerIDCombobox-selected-before-assignment.png` | "BEFORE, viewed" (T4) | FX_CustomerIDCombobox selected in the Components grid; Data Source Binding `object.FX_Custome…`; Inheritance heading with Component Class row at the bottom edge, value blank. Matches. (Parameters row is below the frame.) |
| `evidence/EXP-089/t5-04-runtime-reopened-add-mode-before-fip.png` | described as add-mode placeholder (T5) | Order Number textbox shows `3`; Customer ID blank; status `Order Number (Object 1 of 1)`. Matches. |
| `evidence/EXP-089/t5-11-reopened-add-mode-after-discard.png` | "viewed" (T5) | Same add-mode placeholder state as t5-04. Matches. |
| `evidence/EXP-089/t5-14-runtime-final-clean-close.png` | "(viewed)" (T5) | Explorer only; no Form tab; no dialog. Matches. |

Image views in their own task, by segment: T1 5 of 5; T2 2 of 3 (t2-01 not in-task); T3 22 of 22; T4 16 of 17 (t4-02 not in-task); T5 11 of 14 (t5-04, t5-11, t5-14 not in-task). After T6, all 61 PNG files have been viewed at least once.

## 3. Browser-call reconciliation (controller tables vs worker counts)

Source: `harness-audit-T1.md` … `harness-audit-T5.md` (controller-generated, not worker prose). In the controller's split, "actions" are clicks, coordinate clicks, key presses, typed text, navigation, mouse wheel, mouse moves, and tab selects; "reads" are snapshots, finds, screenshots, and the tab list. Local file tools (Read, Grep, Glob, Edit, Write) are excluded from both.

| Segment | Controller actions | Controller reads | Browser total (controller) | Worker count | Result |
| --- | --- | --- | --- | --- | --- |
| T1 | 17 | 30 | **47** | 47 | Match |
| T2 | 3 | 9 | **12** | 12 | Match |
| T3 | 49 | 72 | **121** | 121 | Match |
| T4 | 30 | 51 | **81** | 80 as first reported; corrected to 81 | Match after correction |
| T5 | 18 | 36 | **54** | 54 | Match |
| **Cumulative T1–T5** | **117** | **198** | **315** | 315 | Match |

The T4 worker count was 80 because one `browser_find` (the 32nd find of T4) was omitted from the worker's tally. The corrected T4 section of the record now states 81 and 32 finds. The worker's per-category T4 counts were re-derived from the controller table: tab list 1, tab select 1, snapshot 1, screenshots 17, finds 32, ref clicks 16, coordinate clicks 3, mouse moves 2, wheel 2, key presses 4 (Tab), typed text 2. Sum 81.

The controller's `turns` field (T1 62; T2 12; T3 142; T4 80; T5 58) is not defined in the audit files and is not used for any count in this report. It is not needed for acceptance.

## 4. Tool errors and flagged entries

**Errors.** The controller summary records `errors=1` for T1 only. The underlying row (T1 audit row 3) is a **Read** (a local file tool, not a browser call) of the EXP-089 record path before the record existed; it returned "File does not exist". It is **not a browser tool error**. Browser-tool errors are 0 in every segment (T1–T5). Total tool errors cumulatively: 1 (local Read). Browser errors cumulatively: **0**. The T1 worker record stated "Browser errors / timeouts 0", which is consistent with this. The failed Read was not mentioned in the T1 record; it is disclosed here.

**Mongoose application alerts (not tool errors).** The Mongoose server-event error alert `The server event processing returned an error. If this persists, contact your system administrator.` appeared three times: twice in T1 (after the first and corrected Edit clicks) and once in T2. Each was answered with its OK once. The controller's `errors` field does not count these, because they were application UI alerts. Their cause is **unresolved**.

**Flagged `browser_type` entries (7 in total; each reviewed against the permitted actions).**

| Segment | Row(s) | Target | Classification |
| --- | --- | --- | --- |
| T1 | 41 | Infor CloudIdentities Username (placeholder `SECRET_MONGOOSE_USERNAME`) | Permitted: session-expiry procedure. The real value was not read or recorded. |
| T1 | 42 | Infor CloudIdentities Password (placeholder `SECRET_MONGOOSE_PASSWORD`) | Permitted: session-expiry procedure. |
| T1 | 60 | Infor OS portal "Search menu" textbox (text `Mongoose`) | **Judgment call.** Portal navigation used to reach the Mongoose app (the procedure says "open the Mongoose app"). Not a Mongoose data field and not a credential. The coordinator should confirm this is acceptable. |
| T3 | 117, 122 | Mongoose Select Form picker "Filter" textbox (`FX_Orders`) | Permitted: a picker filter in the runtime Open dialog, not a runtime record field. The plain fill did not narrow the list; the slow entry did (EXP-083 precedent). |
| T4 | 30, 52 | Component Class Parameters inline editor on FX_CustomerIDCombobox and on FX_CustomerIDGridCol (`FX_CusName,FX_CusAddress`) | Permitted: the brief's two parameter entries. |
| T2, T5 | — | — | No `browser_type` entries. |

Prohibited-tool hits per controller: T1 3, T3 2, T4 2 (all `browser_type`, classified above); T2 0; T5 0. No `browser_evaluate` or `run_code`, no shell, no Bash, no script, and no JavaScript was used. No `browser_navigate` was used outside the T1 portal step.

## 5. Acceptance checks

### AC-1 — Sources reviewed; session usable; Designer FX_Orders User scope and clean; validator and class readbacks; both components' pre-assignment state; runtime baseline

**Status: SUPPORTED (observed; same session), with the limits below.**

- Sources reviewed: AGENTS.md; `hello-world-pt5.md` Sections 7–10 and 13 with the transcript timestamp lines; the EXP-082, EXP-083, EXP-086, EXP-087 and EXP-088 records, partly as disclosed in the T1 sources table. The partial reads are a limit (section 8).
- Session usable: T1 found the Web Client logged out; the session-expiry procedure was run once (see section 6). T2 and T3 found the Designer and runtime usable.
- Designer FX_Orders User scope and clean: `t1-01` (identity, footer `ScopeType: User`, Save greyed); `t2-01` (T6-viewed: same); `t3-02` (FX_Orders opened via recent-forms; Name FX_Orders; Save and Undo greyed; footer User); `t4-01` (FX_Orders open, User, clean, before assignment).
- Validator `FX_CustomerID` readback (Edit > Validator, opened once; Cancelled once): `t3-04`. Type `In Collection`; Error Message `mIsNotAValid`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` (the accessibility readback gives the full text; the frame clips it to `FX_HelloWorld01( PRO…`). All match the EXP-087 expected values. Also `t3-03` (dialog opened, list not yet at the row).
- Component class `FX_CustomerID` readback (Edit > Component Class, opened once; Cancelled once): `t3-09`. Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` (accessibility; the frame clips it). The string matches the EXP-088 string exactly. Validate Immediately Prompt blank (as in EXP-088 T2). Also `t3-05` to `t3-08` (the Data Source and Validation groups expanded, view only).
- Components before assignment (no Component Class on either): `t3-13` (FX_CustomerIDCombobox; Component Class blank; View Attributes and Edit Property Class Extension `FX_CustomerID`); `t3-23` (FX_CustomerIDGridCol; the full Inheritance block visible; Component Class and Component Class Parameters blank); `t4-03` and `t4-08` (the same two components at the start of T4 before the assignments). Data Source: Binding `object.FX_CustomerID` on both (Binding Type Property); List Source blank on both; Validators blank on both; Validate Immediately False on both; Message On Status Bar False on both.
- Runtime baseline, both orders as expected: order 1 `t3-21` (after the T3 F4: FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00; Customer ID combobox focused, not typed into); order 2 `t3-22` (FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99; reached by its row-number cell). Grid rows read by accessibility (T3 section of the record). Order 1 was re-verified before the T5 change in `t5-06`.

**Limits of AC-1.**
- The validator and class values were read back in T3, after the operator's manual Designer recovery. The brief's description of that recovery is not in the evidence, and the cause of the earlier server-event errors is not established. The Form was absent at T3 start (T3 record).
- The EXP-088 condition was that the validator definition had not been re-read after the class Parameters step or after a reopen. T3 closes the first half only for the **pre-assignment** state. **The validator was not re-read after the T4 assignments or after the T4 Designer close/reopen** (no validator dialog was opened in T4 or T5). The post-reopen half of the EXP-088 gap therefore remains open. This is a limit, not a contradiction.
- The Parameters text and the List Source text are clipped in the images; the full text is from the accessibility readback.
- The T1 and T2 readbacks were not achieved (server-event alerts); AC-1 rests on T3.

### AC-2 — Two class assignments, two parameter entries, one native Designer Save, both assignments after one Designer close/reopen

**Status: SUPPORTED (observed; same session).**

- Assignments: exactly **2** Component Class picks: FX_CustomerIDCombobox (controller T4 row 20, option `FX_CustomerID`, then Tab, row 21) and FX_CustomerIDGridCol (row 45, option `FX_CustomerID`, then Tab, row 46). Each commit: `t4-05` (combobox; Component Class `FX_CustomerID`; Validators blank; List Source blank; Validate Immediately False; Save and Undo became enabled) and `t4-09` (GridCol; the same). No prompt appeared at either pick.
- Parameter entries: exactly **2**: combobox (controller T4 row 30, type `FX_CusName,FX_CusAddress`, then Tab, row 31) and GridCol (row 52, then Tab, row 53). Committed values: `t4-07` (combobox, clipped to `FX_CusName,FX_…`, accessibility `FX_CusName,FX_CusAddress`) and `t4-10` (GridCol, the same). No prompt.
- Other values changed by the assignments: **none** recorded (Binding, View Attributes, Edit Property Class Extension, List Source, Validators, Validate Immediately unchanged on both components).
- Designer Save: exactly **1** (controller T4 row 57, the native toolbar Save). Native response verbatim (`t4-11`): toast title `Save`; text `Form [FX_Orders] and global object(s) were saved.`; Save and Undo disabled afterward. Save was enabled before the click (find after the Tab commits; `t4-10`).
- Designer close/reopen: exactly **1 each**. Close through the Form-tab control (controller T4 row 62); **no prompt** (`t4-12`, empty canvas). Reopen through Form menu recent-forms `FX_Orders` (row 68); `t4-13` (Name FX_Orders; Normal; Is Master True; `ScopeType: User`; Save and Undo disabled; no dialog).
- After the reopen both components show the assignment: `t4-16` (GridCol Inheritance: Component Class `FX_CustomerID`; View Attributes and Edit Property Class `FX_CustomerID`; the Components grid row shows `FX_CustomerID` in the Component Class column) and `t4-17` (combobox: the same; the row's Component Class column shows `FX_CustomerID`). Parameters after the reopen (accessibility): `FX_CusName,FX_CusAddress` on both (T4 record).

**Limits of AC-2.**
- Same-session only. The close/reopen is a weak persistence boundary (the same limitation recorded for EXP-086 and EXP-087). No cross-session durability and no database durability is claimed.
- The Component Class column of the Components grid was blank before the Save and showed `FX_CustomerID` after the reopen. This is recorded as observed. Its cause (a grid refresh on reopen) is **not established**.
- The Save is accepted as a UI acknowledgement; its effect on stored metadata was not independently read.

### AC-3 — Runtime after one close/reopen: FX002 on order 1 changes Customer Name and Address before any Save; drop-down columns recorded; contingency unload at most once and only under its condition

**Status: SUPPORTED (observed; same session).**

- Runtime closed once clean (controller T5 row 7, no prompt, `t5-02`), reopened once through Form > Open > Select Form (row 14, picker row `FX_Orders` at `t5-03`, OK at row 18), Filter in Place (row 21, `t5-05`), blank-criteria F4 once (row 24), order 1 verified (`t5-06`).
- Customer ID drop-down opened **once** (controller T5 row 29, a coordinate click on the caret at (876, 218); the Details "Open" button beside the combobox was not clicked). Visible columns: **Customer ID** and **Customer Name**. Rows: `FX001` / `Factory test one` (selected at open) and `FX002` / `Factory test two`. Address is not a displayed column. Evidence: `t5-07` (screenshot) and the accessibility option list.
- FX002 chosen **once** (controller T5 row 33; no typing).
- Immediately after the choice, before any Save: detail view Customer Name `Factory test two`, Address `2 Factory Street` (`t5-08`, viewed; the runtime became dirty: Save enabled, orange change marker on row 1). Order 1 grid row (accessibility): `1 | FX002 | Factory test two | 2 Factory Street | dumbbell | 45 pound iron | 45.00 | 2 | 90.00`. Both fields changed, so the cache contingency condition did not apply.
- Contingency unload: **not invoked** (Web Client unloads 0; Designer unloads 0).

**Limits of AC-3.**
- The grid row is read by accessibility; in `t5-08` row 1 is partly off-frame.
- The drop-down's visible Address exclusion is observed. The statement that this is "consistent with DISPLAY(1,2)" in the T5 record is an **interpretation** of the EXP-088 list source, not an observation.
- The Order Total stayed `90.00` after the change. The record's statement that the Order Total is "not affected by Customer ID" is an **interpretation** (not tested); only the unchanged value was observed.

### AC-4 — Discard: one close with one No (exact text recorded); reopened orders unchanged; no runtime Save; runtime closed clean at the end

**Status: SUPPORTED (observed; same session).**

- Dirty runtime closed once through its tab close control (controller T5 row 38). The save prompt appeared. Exact text (`t5-09`, viewed; title `Infor Mongoose Application Development Framework - FX_Orders`): **`Do you want to save your changes to primary collection?`** Buttons: `Yes` (default focus), `No`, `Cancel`.
- Answered **No** once (controller T5 row 42). Not Yes (0), not Cancel (0). Result (`t5-10`): runtime closed; no dialog.
- Reopened once (rows 46–50: Form menu, Form > Open, Select Form OK) with Filter in Place (row 53) and blank-criteria F4 once (row 54). Order 1 (`t5-12`, viewed): FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00 / status `Customer ID (Object 1 of 2)`. Grid row 1 (accessibility) identical.
- Order 2 by its row-number cell (controller T5 row 58; `t5-13`, viewed): FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99 / status `Order Number (Object 2 of 2)`. Grid row 2 (accessibility) identical.
- Runtime Saves: **0**. No runtime Save control was clicked (the runtime Save remained the only Save-labelled control and it was never invoked; the audit records no such click). Runtime typed fields: **0**.
- Final runtime close (controller T5 row 63): clean, no prompt; `t5-14` (viewed in T6): Explorer only; no dialog.

**Limits of AC-4.**
- The reverted values are same-session observations after a runtime reopen. They do not show database-level durability.
- The prompt is the runtime Form's save prompt (`primary collection`). Its wording is recorded as displayed, not interpreted.

### AC-5 — Final report: decisive evidence for AC-1 to AC-4, complete audit with exact counts, worker-written inventory, final state

**Status: SUPPORTED** by this report and the record, with the reconciliations in sections 3 and 4 and the inventory in section 7.

## 6. Exact cumulative counts (reconciled)

| Item | Expected (brief) | Audited (controller tables, verified) | Result |
| --- | --- | --- | --- |
| Class assignments (Component Class picks) | 2 | 2 (T4 rows 20, 45) | Match |
| Parameter entries | 2 | 2 (T4 rows 30, 52) | Match |
| Designer Save | 1 | 1 (T4 row 57) | Match |
| Designer close / reopen | 1 / 1 | 1 (T4 row 62) / 1 (T4 row 68) | Match |
| Runtime opens (Select Form OK) | — | 3 (T3 row 126; T5 rows 18, 50) | Recorded |
| Runtime closes | — | 3 (T5 rows 7, 38, 63) | Recorded |
| Runtime F4 presses | — | 3 (T3 row 131; T5 rows 24, 54) | Recorded |
| Customer ID drop-down opened | — | 1 (T5 row 29, coordinate) | Recorded |
| FX002 selections from drop-down | 1 | 1 (T5 row 33) | Match |
| Save prompts answered No | 1 | 1 (T5 row 42) | Match |
| Save prompts answered Yes / Cancel | 0 | 0 / 0 | Match |
| Runtime Saves | 0 | 0 | Match |
| Runtime typed fields | 0 | 0 (the only typed entries are the T1 sign-in placeholders, T1 portal search, T3 picker filter, T4 parameter editor) | Match |
| Unloads (Web Client; Designer) | 0 | 0; 0 | Match |
| Other component property changes | 0 | 0 | Match |
| Validator / class / property class changes | 0 | 0 (validator and class dialogs were opened in T3 and cancelled; no OK) | Match |
| Checkout actions | 0 | 0 | Match |
| Re-logins (session-expiry procedure) | 1 | 1 (T1 navigate row 38; sign-in typing rows 41–42; sign-in click row 43) | Match |
| Portal navigation steps | — | T1: navigate (1); banner dismissal (1); portal menu clicks and search text (judgment, section 4) | Recorded |
| Error alerts answered OK | — | 3 (T1 rows 27, 33; T2 row 10) | Recorded |

**Cumulative browser calls by segment (controller-verified):** T1 47; T2 12; T3 121; T4 81; T5 54; **total 315** (actions 117; reads 198). Browser-tool errors 0.

**Cumulative audit of action kinds (T1–T5, controller tables):** tab lists 5 (one per segment); tab selects 8 (T1 2, T2 1, T3 3, T4 1, T5 1); snapshots 12; screenshots 61; finds 120 (T1 17, T2 4, T3 47, T4 32, T5 20; each segment's reads reconcile: T1 30 = 1 list + 7 snapshots + 5 screenshots + 17 finds; T2 9 = 1 + 1 + 3 + 4; T3 72 = 1 + 2 + 22 + 47; T4 51 = 1 + 1 + 17 + 32; T5 36 = 1 + 1 + 14 + 20); ref clicks 65 (T1 10, T2 2, T3 23, T4 16, T5 14); coordinate clicks 12 (T3 8, T4 3, T5 1); mouse moves 6 (T3 4, T4 2); wheel 7 (T1 1, T3 4, T4 2); F4 3 (T3 1, T5 2); Tab presses 4 (all in T4, one per commit); ArrowRight 2 (T3; no value change); Control+a 2 (T3, filter field); typed text 7 (section 4). Key presses total 11. Check: segment action totals 17 + 3 + 49 + 30 + 18 = 117 and reads 30 + 9 + 72 + 51 + 36 = 198; 117 + 198 = 315.

## 7. Worker-written file inventory

**Before T6 (distinct, verified by directory listing):** 1 experiment record and **73** evidence files (T1 12; T2 4; T3 24; T4 18; T5 15). That is **74**, matching the expected count. Controller-generated files `harness-audit-T1.md` to `harness-audit-T5.md` (5) are written by the harness and are **excluded**. Tool-generated `evidence/playwright/` snapshot and console files are **excluded**.

**Written in T6:** this report `evidence/EXP-089/T6-final-acceptance-report.md` (**1** new file). The record was edited (not a new file).

**After T6 (distinct worker-written):** 1 record + 73 evidence + 1 report = **75**. Confined to `experiments/` and `evidence/EXP-089/`. Repository confinement is supported by the worker and harness inventories; operator git review is authoritative. No git or shell command was run by the worker.

## 8. Limits, uncertainties and open items (not hidden)

1. **Same-session only.** Nothing here is cross-session, replay, or database-durability evidence.
2. **EXP-088 post-reopen validator gap remains.** The validator was not re-read after the T4 assignments or the T4 close/reopen. Only the pre-assignment readback (T3) exists.
3. **Cause of the server-event alerts** (T1 ×2, T2 ×1) is **unresolved**. The operator's manual Designer recovery between T2 and T3 is referenced in the T3 bounded instruction but not documented in the evidence. The Form was absent at T3 start, so the recovery is the likely cause but is **not established**.
4. **Grid Component Class column refresh** (blank before Save, `FX_CustomerID` after the reopen) is observed; its cause is not established.
5. **Interpretive statements in the record** (not observations): "Address not a column, consistent with DISPLAY(1,2)" (T5); "Order Total not affected by Customer ID" (T5). The observed facts are recorded alongside.
6. **Viewing claims corrected** (section 2): five PNGs were described as viewed in their task without an image read in that task. They were viewed in T6 and match.
7. **T1 failed local Read** of the record path before creation (section 4). It is not a browser error. It is now disclosed in the record.
8. **T1 portal menu search typed `Mongoose`** (section 4). A judgment call for the coordinator. It was portal navigation, not a Mongoose data entry.
9. **Counts reconciled.** T4 was corrected from 80 to 81 (one find omitted from the worker tally). The controller `turns` metric is undefined and unused.
10. **Partial reads** of EXP-082 to EXP-088 (declared in the T1 sources table) remain partial. No later source was read in T6.
11. **Final browser state** (below) is as established by T5 and the T4 end-of-task inspection. **No fresh browser inspection was made in T6.**

### Out-of-scope observations (recorded only; not investigated)
- **Picture component type:** the Components grid reads `FX_ItmsPictureEdit` as **Static** (T3 `t3-15`/`t3-10` area; T3 record), whereas EXP-082 T9 recorded it as an **Edit**.
- **Picture display:** runtime orders 1 and 2 display a picture (T3 `t3-21`, `t3-22`; T5 `t5-06`, `t5-13`), whereas EXP-083 T5 recorded the picture field as blank in both orders.

Neither observation is a finding of EXP-089. Neither was investigated, per the T4 and T6 instructions.

## 9. Final state (as established by T5; not re-inspected in T6)

- **Designer (tab 0, Infor Mongoose Application Development Framework):** FX_Orders open after the T4 reopen; `ScopeType: User`; clean (Save, Regenerate Form and Undo disabled at the last T4 check); no dialog. Not acted on in T5. The assignments (FX_CustomerIDCombobox and FX_CustomerIDGridCol: Component Class `FX_CustomerID`; Parameters `FX_CusName,FX_CusAddress`) are saved (one native Save in T4).
- **Web Client (tab 1, Mongoose app in the portal frame):** no runtime FX_Orders Form open (closed clean in T5, the final close). The Explorer is shown. No prompt, no menu and no unsaved runtime change is open per the T5 final close.
- **Runtime data:** unchanged from baseline (the T5 change was discarded with "No").

## 10. Conditions on the recommendation

1. Same-session observations only; no replay or durability claim.
2. The validator's post-assignment and post-reopen state was not read back (EXP-088 gap; section 8, item 2).
3. The cause of the server-event alerts and of the Designer recovery is unresolved (section 8, item 3).
4. The coordinator confirms the T1 portal-search typing as an acceptable portal-navigation step (section 4).
5. The T1 failed local Read is disclosed; it is not a browser error.

Classification for every finding in this report: **observed only**, not replay_verified.
