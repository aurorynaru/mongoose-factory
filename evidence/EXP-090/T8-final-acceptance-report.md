# EXP-090 — T8 final acceptance report (documentation only)

Run `R-20261014-210717-d1FM`, experiment EXP-090, cycle 6, task T8, task_message_id `4041d7da-fc03-46db-b91e-801fd160739c`, worker session `52ceb79b-0b18-433f-a129-0fc1b8df52b0`. Date 2026-10-14.

**Browser calls in T8: 0. Mongoose changes in T8: 0.** T8 did not reopen dialogs, repeat the Save, close or reopen the Form, or start another experiment. Tools used: Glob, Read, Grep, Write and Edit only.

---

## 1. Result and recommendation

**Recommendation: ACCEPTED AS OBSERVED**, with the limitations in section 11. All five acceptance checks (AC-1 to AC-5) are supported by the decisive evidence listed in section 6.

Two corrections were made in T8 and are recorded in the EXP-090 record:

1. **Browser count correction.** The controller audit for T3 (`evidence/EXP-090/harness-audit-T3.md`) records **59** browser calls and **23** finds. The worker report for T3 said **58** and **22**. The corrected grand total is **211**, not the 210 first reported. The record's T3–T7 cumulative tables were corrected to match.
2. **Count reconciliation.** Every other task's controller count agrees with the worker count. Details are in section 3.

Nothing in the EXP-090 mutation sequence changed as a result of the count correction. The correction affects only the count of read-only find calls in T3.

---

## 2. Sources read in T8

- The EXP-090 record: the status headers, the count tables for T3–T7, and the section headings (`grep` of headings, status and count lines, then targeted reads). The whole record was not re-read line by line in T8; the section content relies on the T1–T7 authoring, which is cited where used.
- The seven controller audits `evidence/EXP-090/harness-audit-T1.md` to `harness-audit-T7.md`, read in full.
- Six screenshots that the worker had captured but not opened during its own task. Each was opened in T8 and its content is recorded in section 6:
  - `t2-03-after-New-name-prompt-empty.png`
  - `t2-04-name-prompt-FX_Item-before-OK.png`
  - `t3-03-SetProp-Edit-Set-Values-initial.png`
  - `t3-04-SetProp-properties-list-initial-empty.png`
  - `t4-01-gate-inherited-parameters-IDO-SetProp-before-Property.png`
  - `t5-03-after-readback-Cancel-before-Save-Save-enabled.png`
- Enumeration of `evidence/EXP-090/**` (44 worker evidence files, 7 controller audit files).

Not read in T8: the EXP-087, EXP-089 and EXP-079 records (their reads are as disclosed in T1–T2). The T1–T7 evidence images were read in their own tasks; the decisive ones are re-cited in section 6.

---

## 3. Controller-audit verification and count reconciliation

The controller audits list every tool call in order, with its result. The table below compares each task's worker count with its controller count.

| Task | Controller file | Controller browser calls | Worker reported | Status |
| --- | --- | --- | --- | --- |
| T1 | `harness-audit-T1.md` | 21 (tab lists 1; selects 3; snapshot 1; screenshots 4; finds 7; ref clicks 3; mouse move 1; wheel 1) | 21 | Agrees. Also 1 non-browser Read error (#4, the record path did not exist yet) and 1 Write (record created). |
| T2 | `harness-audit-T2.md` | 34 (tab list 1; select 1; snapshot 1; finds 12; screenshots 7; ref clicks 7; typed 1; Tab presses 2; mouse move 1; wheel 1) | 34 | Agrees. |
| T3 | `harness-audit-T3.md` | **59** (tab list 1; select 1; snapshot 1; finds **23**; screenshots 9; ref clicks 13; coordinate click 1; typed 3; Tab presses 7) | 58 (finds 22) | **Corrected.** The worker's count omitted one find. The controller log is authoritative: **59**. |
| T4 | `harness-audit-T4.md` | 30 (tab list 1; select 1; snapshot 1; finds 12; screenshots 6; ref clicks 7; Tab presses 2) | 30 | Agrees. Also one failed Edit (#38), a documentation edit, not a browser call (section 5). |
| T5 | `harness-audit-T5.md` | 25 (tab list 1; select 1; snapshot 1; finds 9; screenshots 5; ref clicks 5; mouse move 1; wheel 1; wait 1) | 25 | Agrees. |
| T6 (pre-pause) | `harness-audit-T6.md` | 1 (tab list) | 1 | Agrees. The controller's own summary line reads "0 actions, 1 reads" and records a terminal usage-limit message; the one call is a read. |
| T7 (resumed) | `harness-audit-T7.md` | 41 (tab list 1; select 1; snapshot 1; finds 18; screenshots 7; ref clicks 10; coordinate click 1; mouse move 1; wheel 1) | 41 | Agrees. |

**Corrected grand total: 21 + 34 + 59 + 30 + 25 + 1 + 41 = 211.** The first-reported total of 210 is superseded.

Category totals across all segments, computed from the controller rows:

| Category | Total | Breakdown |
| --- | --- | --- |
| Tab lists | 7 | one per task T1–T7 |
| Tab selects | 8 | T1 3; T2 1; T3 1; T4 1; T5 1; T7 1 |
| Untargeted snapshots | 6 | T1–T5, T7 |
| Finds | 81 | T1 7; T2 12; T3 23; T4 12; T5 9; T7 18 |
| Screenshots | 38 | T1 4; T2 7; T3 9; T4 6; T5 5; T7 7 |
| Ref clicks | 45 | T1 3; T2 7; T3 13; T4 7; T5 5; T7 10 |
| Coordinate clicks | 2 | T3 (IDO arrow, row 8); T7 (Pane (01) chevron, row 29) |
| Mouse moves / wheels | 4 / 4 | T1, T2, T5, T7 (list scrolling; view only) |
| Waits | 1 | T5 (6 s after the Save) |
| Typed entries | 4 | T2 (name `FX_Item`); T3 (mis-entry, `%1` Target, `%2` Target) |
| Tab key presses | 11 | T2 2; T3 7; T4 2 |
| **Total** | **211** | 7 + 8 + 6 + 81 + 38 + 45 + 2 + 8 + 1 + 4 + 11 = 211 |

The controller header for every audit reports "exact mismatches=0" for the typed and key strings it was given. That check covers the typed text only (`FX_Item`, `%1`, `%2`); it does not read the accessibility text of any readback.

---

## 4. Reconciled cumulative counts (exact)

**Validators and creation**
- Validators created: **1** (`FX_Item`, T2). Validators-list New (+): **1** (T2 controller row 19).
- Name-prompt OK: **1** (T2 row 26). Name prompt Cancel: **0**.

**Set Prop**
- Set Prop New: **2** (T3 rows 23 and 44, one per output).
- Set Prop outputs: **2** (`%1=FX_Description`, `%2=FX_Cost`).
- Set Prop output-editor OK (`Edit Set Property From List`): **2** (T3 rows 42 and 56).
- Set Prop list OK (`Edit Set Property Values`): **1** (T3 row 60). Edit Set Values editor OK: **1** (T3 row 62).

**Dialog confirmations and cancels, by dialog type**

| Dialog | OK | Cancel |
| --- | --- | --- |
| Name prompt (New) | 1 (T2 row 26) | 0 |
| Global Objects (Validators) | 1 (T4 row 32) | **3** (T1 row 36; T5 row 20; T7 row 45) |
| Edit In Collection Validator Parameters | 1 (T4 row 18) | 0 |
| Property of FX_Items to Use (picker) | 1 (T4 row 14) | 0 |
| Edit Set Property From List (output editor) | 2 (T3 rows 42, 56) | 0 |
| Edit Set Property Values (list) | 1 (T3 row 60) | 0 |
| Edit Set Values (editor) | 1 (T3 row 62) | 0 |
| **Total** | **8** | **3** |

All three Global Objects Cancels were read-only readbacks or the T1 preflight; none changed a value. The Parameters dialog was confirmed once and never cancelled.

**Tab commits: 11.** T2 2 (name, Type); T3 7 (IDO; output 1 Value and Target and the re-entry Tab; output 2 Target and Value); T4 2 (picker Property; Error Message).

**Typed entries: 4.** T2 1 (name `FX_Item`); T3 3 (one mis-entry into Value, two Targets `%1` and `%2`).

**List choices: 6.** IDO `FX_Items` (T3 row 11); Type `In Collection` (T2 row 32); Set Prop Value `FX_Description` (T3 row 34) and `FX_Cost` (T3 row 51); In Collection Only Property `FX_Item` (T4 row 9); Error Message `mIsNotAValid` (T4 row 26, the exact entry, not `mIsNotAValid%1`).

**Corrections**
- In-editor, before any OK: **1** (D-T3-1, section 5).
- Readback contingency corrections: **0** (no readback value was wrong or blank).
- Error Message corrections: **0**.

**Prompts**
- String or message prompts: **0** seen in any frame, find or controller row. Answers (No): **0**. Strings created: **0**.

**Designer Save and Form lifecycle**
- Designer Saves: **1** (T5 row 23). Retries: **0**.
- Native response (verbatim): toast titled `Save`, text `Global object(s) were saved.`, with a `Close` control. No alert, no alertdialog, no error.
- Toolbar state immediately after the Save: Save, Regenerate Form and Undo disabled. After a 6-second wait (T5 row 27): toast gone; the same toolbar state; FX_Orders selected; `ScopeType: User`; no dialog.
- Form close: **1** (T7 row 8, Form-tab control). Discard or other prompt: **0**.
- Form reopen: **1** (T7 row 15, Form menu recent-forms `FX_Orders`).
- Designer close/reopen as a pair: **1 / 1**.

**Component, validator, runtime and checkout**
- Component mutations: **0** (section 8: two component rows individually compared).
- Validators other than `FX_Item` changed: **0**. No controller row clicked the `FX_CustomerID` row (find-only reads of it in T1, T5 and T7).
- Runtime actions: **0**. The Web Client tab (tab 1) was selected once, in T1 rows 18–20, for a read-only gate (find and screenshot). The runtime Form was never opened.
- Checkout actions (check-out, check-in, undo check-out): **0**.

**Session, navigation and tool errors**
- Session-expiry procedure invocations: **0**. Re-logins: **0**. Browser navigations: **0**.
- Browser-tool errors, timeouts, ref-not-found: **0**.
- Browser evaluate or run-code calls: **0**. Console or network inspection: **0**.
- Non-browser errors: **2** (T1 Read #4, the record path did not yet exist; T4 Edit #38, a replacement string not found). Both are documentation or read tool errors, not browser actions. Section 5 covers each.
- Terminal non-error: the T6 usage-limit pause (controller T6 row 1 terminal message).

---

## 5. Explicit reconciliation of events

**(a) T4 documentation Edit failure #38.** During the T4 turn, an Edit to the EXP-090 record (correcting the `t4-02` description) used a replacement string that did not match the file. The controller log records `#38 Edit: String to replace not found in file`. The failed Edit made **no change**; the record was unchanged. The worker then ran one read-only Grep (`#39`) to locate the exact text, and a corrected Edit (`#40`) succeeded. This is a documentation tool error. It is not a browser action and it is not counted in the browser audit.

**(b) T3 initial wrong-field entry, corrected before confirmation (D-T3-1).** The worker's first `type` call for output 1 (controller T3 row 25) used the **Value** combobox reference, not Target. The controller log labels the element "Target combobox in Edit Set Property From List (output 1)". The label was the intended target; the reference used was Value. The frame `t3-05` shows Target blank and Value `%1`, which confirms the entry landed in Value. The correction followed before any OK: Value was re-picked from its list as `FX_Description` (rows 31 to 35), Target was typed as `%1` (row 36), and both fields were Tab-committed. No dialog was confirmed between row 25 and the output-1 OK (row 42). The pre-OK frames `t3-06` (output 1) and `t3-07` (output 2) show the correct values. Counted as one in-editor correction and one extra typed entry, which is included in the totals above.

**(c) T2 combined tab-select and snapshot (deviation D8 in the record).** The worker's T2 record says the `browser_tabs` select and the `browser_snapshot` were issued in one block. The controller log lists them in sequence (rows 4 and 5), and it cannot show concurrency. The select completed before the snapshot's result was read, and no state changed. It is recorded as a disclosed procedural deviation with no observed effect.

**(d) T6 interruption and T7 resume.** Before the usage-limit pause, the T6 segment made **one** call: the tab list (controller T6 row 1). The controller records a terminal message "session limit… resets 10pm (Asia/Singapore)". The resumed segment (controller T7) began with a read-only tab list, a Designer select and a fresh snapshot (rows 1–3), then find and screenshot (rows 4–5) before any mutation. The first mutation after the resume is the Form close at row 8. The T7 task header said `task=T7` while the bounded instruction said "resume T6". The worker followed the bounded instruction, which is the same resolution EXP-087 recorded. No pre-pause action was replayed.

**(e) Coordinate and view-state actions.** There are two coordinate clicks and several view-only actions:
- Coordinate click at (1019,367), the IDO dropdown arrow in T3 (row 8). No accessibility ref exists for the arrow; the same position was used in EXP-087 T3. The IDO value was then verified by find and frame `t3-02`.
- Coordinate click at (273,763), the Pane (01) chevron in T7 (row 29). It expanded the pane. Verified by find and frame `t6-05`.
- Mouse moves and wheel scrolls of the Validators list (T1 rows 30–31; T2 rows 13–14; T5 rows 12–13; T7 rows 37–38). These are view-only. No validator was selected by hover.
- Details panel expansion (T7 row 20), Components tab (T7 row 22), Pane (01) tree-row selection (T7 row 27). These are view state on the reopened Form. No component property was changed.

**(f) The T1 Web Client read (tab 1).** Tab 1 was selected once (T1 row 18), for a find (row 19) and a screenshot (row 20). No click or input reached the Web Client runtime.

---

## 6. Acceptance checks AC-1 to AC-4, with decisive evidence

Each entry states what the inspected contents establish. "Viewed" means the image was opened and its visible content checked. "Accessibility" means a text value from the accessibility tree, which is complete even where the frame clips it.

### AC-1 — Sources reviewed; both tabs live; Designer clean in User scope; FX_Item absent; FX_CustomerID present
- **Sources:** AGENTS.md, transcript Section 11–12 and lines 547–575, EXP-087 (partial; T4 and T5 read in full in T5), EXP-089 (partial), EXP-079 (partial). Disclosed in the record's Sources tables.
- **Tab 1 live:** `t1-02-gate-webclient-tab1-live.png` (viewed): the Mongoose Explorer and the identity bar `<operator> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no sign-in, no sign-out.
- **Designer live, User scope, clean:** `t1-01-gate-designer-fx-orders-user-clean.png` (viewed): FX_Orders tab and heading; toolbar Save and Undo greyed; footer `ScopeType: User`; FX_CustomerIDCombobox selected with Component Class `FX_CustomerID`; no dialog. The T1 snapshot `t1-00` (accessibility) agrees.
- **FX_Item absent; FX_CustomerID present:** `t1-04-preflight-validator-list-FG-FX-slot-readonly.png` (viewed): the Validators list at F–G shows `FullTextIndexNameValidator`, `FX_CustomerID`, `GE`; no `FX_Item` between them; the Properties pane is empty. The top row of that slice is partly cut. Accessibility: exact `gridcell "FX_CustomerID"` match in the dialog; no `FX_Item` validator row. `t2-02` repeats the view.
- **Limits:** the validator list is the Designer's client view, not a database read. Both tabs were checked live in T1 only. The EXP-089 server-event error did not recur.
- **Supported:** AC-1.

### AC-2 — FX_Item created once through New, Type In Collection, IDO, two outputs, In Collection Only Property, Error Message; each committed by Tab before OK; each dialog confirmed once
- **Creation through New:** `t2-03-after-New-name-prompt-empty.png` (viewed): the New prompt, Name empty and focused. `t2-04-name-prompt-FX_Item-before-OK.png` (viewed): Name `FX_Item` before OK. `t2-05-new-validator-FX_Item-property-sheet.png` (viewed): Name `FX_Item`; Type `AlphaNumeric` (the default); Parameters and Error Message blank; Version `User version`. Controller: one New (row 19), one name Tab (row 23), one OK (row 26).
- **Type In Collection:** `t2-06-type-In-Collection-after-Tab.png` (viewed): Type `In Collection`; Undo enabled. Controller: list pick (row 32), Tab (row 33).
- **Parameters, empty before entry:** `t2-07-parameters-dialog-initial-layout-before-entry.png` (viewed): IDO and Set Prop empty; four option checkboxes and the Exception checkbox unchecked; Property and Filter empty.
- **IDO `FX_Items`:** `t3-02-IDO-FX_Items-after-Tab.png` (viewed): IDO `FX_Items`, list closed. Controller: list pick (row 11), Tab (row 12).
- **Set Prop editor and list, empty:** `t3-03-SetProp-Edit-Set-Values-initial.png` (viewed): the Edit Set Values editor with Variables, Components and Properties empty; the Parameters dialog behind it shows IDO `FX_Items`. `t3-04-SetProp-properties-list-initial-empty.png` (viewed): the output list empty.
- **Output 1 before OK:** `t3-06-SetProp-output1-Target-%1-Value-FX_Description-before-OK.png` (viewed): Target `%1`; Value `FX_Description`; Collection `primary collection`. Captured after the Target Tab, before the final Tab and the OK (controller rows 38–42).
- **Output 2 before OK:** `t3-07-SetProp-output2-Target-%2-Value-FX_Cost-before-OK.png` (viewed): Target `%2`; Value `FX_Cost`; Collection `primary collection`.
- **Two outputs in the list:** `t3-08-SetProp-properties-list-two-outputs-before-OK.png` (viewed): rows `%1=FX_Description` and `%2=FX_Cost`.
- **Parameters with IDO and Set Prop, before the Property:** `t3-09-parameters-after-SetProp-IDO-set-before-InCollectionOnly.png` (viewed): IDO `FX_Items`; Set Prop `SETP(%1=FX_Description,%2=FX_C…` (clipped; the full text is from the accessibility read `SETP(%1=FX_Description,%2=FX_Cost)`); Property empty.
- **In Collection Only Property `FX_Item`:** `t4-02-InCollectionOnly-Property-FX_Item-before-picker-OK.png` (viewed): the `Property of FX_Items to Use` picker with `FX_Item` highlighted and OK focused. The Parameters Property textbox is covered by the picker in this frame, so the frame does not show its value. Controller: picker opened (row 7), `FX_Item` chosen (row 9), Tab (row 10), picker OK (row 14). The Property value `FX_Item` is confirmed by the find after the picker OK and by `t4-03`.
- **Parameters before its OK:** `t4-03-parameters-complete-before-Parameters-OK.png` (viewed): IDO `FX_Items`; Set Prop `SETP(%1=FX_Description,%2=FX_C…` (clipped); Property `FX_Item`; Filter blank; four option checkboxes and Exception unchecked. Controller: no checkbox was clicked in any task.
- **Error Message `mIsNotAValid` before the Global Objects OK:** `t4-05-ErrorMessage-mIsNotAValid-after-Tab-before-GlobalObjects-OK.png` (viewed): Error Message `mIsNotAValid`; Type `In Collection`; Parameters `FX_Items( PROPERTY(…` (clipped); Name `FX_Item`; no dialog or prompt. Controller: the exact entry chosen (row 26), Tab (row 27).
- **Each dialog confirmed once:** the picker (row 14), the Parameters dialog (row 18), the Global Objects dialog (row 32), the name prompt (row 26), the two output editors (rows 42, 56), the list (row 60) and the Edit Set Values editor (row 62). Each dialog's confirmation is a single controller row.
- **Limits:** `t3-05` is the mis-entry frame (D-T3-1), kept as evidence and not a correct state. `t4-02` does not show the Property value (covered by the picker).
- **Supported:** AC-2.

### AC-3 — Readback Type In Collection and the Parameters value verbatim; Error Message mIsNotAValid; FX_CustomerID listed; exactly one Designer Save with its native response
- **Readback (T5, before the Save):** `t5-02-readback-FX_Item-selected-properties.png` (viewed): FX_Item selected; Name `FX_Item`; Type `In Collection`; Parameters `FX_Items( PROP…` (clipped); Error Message `mIsNotAValid`; Version `User version`; `FX_CustomerID` listed directly above `FX_Item`. The Parameters text is from the accessibility find in T5: `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`.
- **Readback (T7, after the reopen):** `t6-06-reopened-readback-FX_Item-properties.png` (viewed): the same values; Parameters clipped; accessibility identical.
- **Save:** `t5-04-single-Save-native-response-toast-and-disabled-toolbar.png` (viewed): the toast `Save` / `Global object(s) were saved.`; Save and Undo greyed; footer `ScopeType: User`. `t5-05-after-Save-clean-state-6s-later.png` (viewed): the toast gone; Save, Regenerate and Undo greyed; no dialog.
- **Exactly one Save:** controller T5 row 23 is the only Save click in the whole series.
- **Contingency:** not used.
- **Supported:** AC-3.

### AC-4 — Clean Form closed once and reopened once; reopened readback matches AC-3; no component changed; no other validator changed
- **Clean close:** `t6-01-resume-before-close-clean-FX_Orders-component-class.png` (viewed): FX_Orders; `ScopeType: User`; Save and Undo greyed; FX_CustomerIDCombobox selected with Component Class `FX_CustomerID`. `t6-02-after-single-Form-close-no-prompt.png` (viewed): the canvas empty; Save greyed; no prompt. Controller T7 row 8: one click.
- **Reopen:** `t6-03-reopened-FX_Orders-via-recent-forms-clean.png` (viewed): Name `FX_Orders`; Form Type `Normal`; Is Master `True`; `ScopeType: User`; Save greyed. Controller T7 row 15: one click on the recent-forms entry.
- **Reopened readback:** `t6-06` (above). Matches AC-3 on every visible value.
- **Components:** `t6-05-reopened-component-rows-FX_CustomerIDCombobox-class-readonly.png` (viewed): Pane (01) expanded; FX_OrderNumberStatic, FX_OrderNumberEdit and FX_CustomerIDStatic visible; the FX_CustomerIDCombobox row is cut at the bottom edge, with `FX_CustomerID` visible in its Component Class column. The accessibility rows agree: `FX_CustomerIDCombobox … 14 FX_CustomerID` and `FX_ItemCombobox … 20` (no class). Both match the T1 snapshot `t1-00` (pre-EXP-090 state).
- **No other validator changed:** only `FX_Item` was selected and read (T5 row 15; T7 row 40); no controller row clicked the `FX_CustomerID` row.
- **Limits:** the close and reopen is an ordinary UI cycle, a weak persistence boundary (section 11). Only two component rows were compared individually (section 8).
- **Supported:** AC-4.

### AC-5 — Final report with evidence for AC-1 to AC-4, the complete audit with exact counts, the file inventory and final state
- This report (sections 3, 4, 7, 9 and 10) supplies the audit, the corrected totals, the inventory and the final state. The EXP-090 record carries the same corrected figures.
- **Supported:** AC-5.

---

## 7. Confirmations requested by the brief

- **Compiled Parameters value:** `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`. The accessibility text is identical to the brief's expected value. It was read at three points: after the Parameters OK (T4, Global Objects property cell), in the pre-Save readback (T5), and in the reopened readback (T7). The screenshots clip it; the accessibility text is complete.
- **Error Message:** `mIsNotAValid`. Read at T4 (after the Tab), T5 (readback) and T7 (reopened readback). The exact entry was selected, not the `mIsNotAValid%1` variant (T4 list row `e4443` vs `e4445`).
- **One successful Save toast:** one Save invocation; the native toast `Save` / `Global object(s) were saved.`; the toolbar clean immediately and after 6 seconds. This shows the UI accepted the Save. It is not proof of database persistence.
- **One clean close and reopen:** one Form-tab close with no prompt; one recent-forms reopen; the Designer clean and in User scope afterward.
- **Matching reopened readback:** `t6-06` and the T7 accessibility read match the T5 readback on Name, Type, Parameters, Error Message and Version, with `FX_CustomerID` still listed.

---

## 8. Component comparison scope

Only **two** component rows were individually compared before and after the EXP-090 work:
- `FX_CustomerIDCombobox`: Component Class `FX_CustomerID` before (T1 snapshot `t1-00`) and after the reopen (T7 accessibility row).
- `FX_ItemCombobox`: no Component Class before (T1 snapshot `t1-00`) and after the reopen (T7 accessibility row).

The **zero-component-mutation claim is not an exhaustive component-by-component equality proof.** It is supported by the browser action audit: no controller row edits any component property, binding, class, caption, layout or Form-level setting. The only component-area actions were view-state actions listed in section 5(e). The remaining component rows were not individually compared.

---

## 9. Worker-written file inventory

### 9a. Repository files created by the worker (new)
1. `experiments/EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md` — created in T1 (Write, controller T1 row 38).
2. `evidence/EXP-090/T8-final-acceptance-report.md` — created in T8 (this file).

### 9b. Evidence files written at the worker's request (new; 44 total)
Snapshots (YAML, 6): `t1-00-designer-fresh-snapshot-start.yml`; `t2-00-designer-fresh-snapshot-start.yml`; `t3-00-designer-fresh-snapshot-start.yml`; `t4-00-designer-fresh-snapshot-start.yml`; `t5-00-designer-fresh-snapshot-start.yml`; `t7-00-designer-fresh-snapshot-resume.yml`.

Screenshots (PNG, 38):
- T1 (4): `t1-01-gate-designer-fx-orders-user-clean.png`; `t1-02-gate-webclient-tab1-live.png`; `t1-03-preflight-validator-dialog-list-readonly.png`; `t1-04-preflight-validator-list-FG-FX-slot-readonly.png`.
- T2 (7): `t2-01-gate-designer-fx-orders-user-clean-before-validator.png`; `t2-02-gate-validator-list-FG-before-New.png`; `t2-03-after-New-name-prompt-empty.png`; `t2-04-name-prompt-FX_Item-before-OK.png`; `t2-05-new-validator-FX_Item-property-sheet.png`; `t2-06-type-In-Collection-after-Tab.png`; `t2-07-parameters-dialog-initial-layout-before-entry.png`.
- T3 (9): `t3-01-gate-inherited-parameters-dialog-before-IDO.png`; `t3-02-IDO-FX_Items-after-Tab.png`; `t3-03-SetProp-Edit-Set-Values-initial.png`; `t3-04-SetProp-properties-list-initial-empty.png`; `t3-05-SetProp-output1-Target-%1-after-Tab.png` (mis-entry frame); `t3-06-SetProp-output1-Target-%1-Value-FX_Description-before-OK.png`; `t3-07-SetProp-output2-Target-%2-Value-FX_Cost-before-OK.png`; `t3-08-SetProp-properties-list-two-outputs-before-OK.png`; `t3-09-parameters-after-SetProp-IDO-set-before-InCollectionOnly.png`.
- T4 (6): `t4-01-gate-inherited-parameters-IDO-SetProp-before-Property.png`; `t4-02-InCollectionOnly-Property-FX_Item-before-picker-OK.png`; `t4-03-parameters-complete-before-Parameters-OK.png`; `t4-04-global-objects-property-sheet-after-Parameters-OK-before-ErrorMessage.png`; `t4-05-ErrorMessage-mIsNotAValid-after-Tab-before-GlobalObjects-OK.png`; `t4-06-after-GlobalObjects-OK-Save-enabled-no-dialog.png`.
- T5 (5): `t5-01-gate-designer-dirty-Save-enabled-before-readback.png`; `t5-02-readback-FX_Item-selected-properties.png`; `t5-03-after-readback-Cancel-before-Save-Save-enabled.png`; `t5-04-single-Save-native-response-toast-and-disabled-toolbar.png`; `t5-05-after-Save-clean-state-6s-later.png`.
- T6/T7 (7): `t6-01-resume-before-close-clean-FX_Orders-component-class.png`; `t6-02-after-single-Form-close-no-prompt.png`; `t6-03-reopened-FX_Orders-via-recent-forms-clean.png`; `t6-04-reopened-components-grid-readonly-view.png`; `t6-05-reopened-component-rows-FX_CustomerIDCombobox-class-readonly.png`; `t6-06-reopened-readback-FX_Item-properties.png`; `t6-07-after-readback-Cancel-final-clean-state.png`.

### 9c. Edits to the EXP-090 record (not new files)
- T2: 5 successful Edits. T3: 2. T4: 3 successful Edits and 1 failed (#38, no change). T5: 2. T7 (resumed T6): 2.
- T8: 17 count-correction Edits (T3–T7 tables and text) plus one status-header Edit and one T8 section Edit.

### 9d. Harness-written files under `evidence/EXP-090/` (not worker-authored)
`harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md`, `harness-audit-T5.md`, `harness-audit-T6.md`, `harness-audit-T7.md` (7 controller tables).

### 9e. Tool-written browser artifacts outside the EXP-090 paths
The browser tool writes its own page snapshots and console logs under `evidence/playwright/` (for example `page-2026-10-14T13-08-01-725Z.yml`, `console-2026-10-14T13-07-34-179Z.log`). These were written by the browser tool, not by the worker, and they are outside `experiments/EXP-090-*` and `evidence/EXP-090/`. They were not enumerated in T8. They are listed here for the operator's git review.

### 9f. Repository confinement
- All worker Write and Edit targets (controller rows across T1–T7) are the EXP-090 record only.
- All worker-requested screenshot and snapshot filenames are under `evidence\EXP-090\`.
- Read-only access outside the EXP-090 paths: AGENTS.md; the EXP-087, EXP-089 and EXP-079 records; the transcript `docs/mongoose/transcripts/hello-world-pt5.md`; and, in T8, the Glob for `harness-audit-T*.md`, which returned files in other experiments' evidence folders (EXP-036 to EXP-044 and others). None of those was read or written in T8 beyond the Glob listing. Nothing outside the EXP-090 paths was written by the worker.
- Git was not run. Repository confinement is supported by the controller audits and the worker inventory; operator git review is authoritative.

---

## 10. Final state (inherited from T7, not touched in T8)

- **Designer (tab 0):** FX_Orders selected; `ScopeType: User`; **clean** (toolbar Save, Regenerate Form and Undo disabled); no dialog or prompt open. Details panel expanded; Components tab active; Pane (01) expanded; FX_CustomerIDCombobox row visible at the bottom edge with Component Class `FX_CustomerID`. These are view states only.
- **Web Client (tab 1):** last touched in T1 (a read-only gate). Not touched since.
- **Validator:** `FX_Item` (User version): Type `In Collection`; Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`; Error Message `mIsNotAValid`. `FX_CustomerID` listed and not changed.
- **Form state:** the single Designer Save was done in T5. The Form was closed and reopened once in T7. No Save happened after T5.

---

## 11. Limitations

1. **Ordinary close and reopen is a weak persistence boundary.** It is a UI cycle, not an independent database read. It does not prove database durability.
2. **No independent database-durability proof.** The Save toast is a UI acknowledgement.
3. **No runtime validation test.** The runtime Form was not opened. Nothing in this experiment shows what `mIsNotAValid` renders as at runtime, or that FX_Item validates a value.
4. **No exhaustive component equality proof.** Two rows were individually compared (section 8).
5. **No replay verification.** EXP-090 has not been replayed.
6. **Client-view validator list.** The absence check and the presence check of FX_CustomerID used the Designer's client view of the validator list, not a database read.
7. **Clipped text.** Several screenshots clip the Parameters and Set Prop text. The complete values come from accessibility reads and were not inferred from partial frames.
8. **Partial source reads.** EXP-087, EXP-089 and EXP-079 were read in part, as disclosed in the record's Sources tables. EXP-087 T4 lines 735–799 were read by grep only.
9. **Count correction.** The T3 count was wrong in the worker report (58 calls, 22 finds). The controller audit gives 59 and 23. Corrected in the record and in this report.
10. **Controller labels.** The controller's human-readable label for T3 row 25 reads "Target"; the frame shows the entry landed in Value. The reference used was the Value combobox. The label is an audit description issue, not a second entry.
11. **Operator git review is authoritative** for repository confinement.

---

## 12. Knowledge state (per finding; observed only)

| Finding | State |
| --- | --- |
| FX_Item created once through the Validators New (+) control, Type In Collection | observed (one run; controller T2 rows 19–26; `t2-03` to `t2-06`) |
| IDO `FX_Items`, outputs `%1=FX_Description` and `%2=FX_Cost`, In Collection Only Property `FX_Item`, Error Message `mIsNotAValid` | observed (one run; frames `t3-02`, `t3-06`, `t3-07`, `t3-08`, `t4-03`, `t4-05`; accessibility) |
| The compiled Parameters value equals `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` | observed (accessibility, three readbacks: T4, T5, T7) |
| The Error Message `mIsNotAValid` is the exact entry, not the `%1` variant | observed (list entries `e4443` and `e4445`; readbacks) |
| One native Designer Save returned the toast `Save` / `Global object(s) were saved.`; the toolbar was clean afterward | observed (one run; `t5-04`, `t5-05`) |
| One Form close with no prompt and one recent-forms reopen; the reopened readback matches | observed (one run; `t6-02`, `t6-03`, `t6-06`) |
| FX_CustomerIDCombobox keeps Component Class `FX_CustomerID`; FX_ItemCombobox has none | observed (two accessibility rows; `t1-00` baseline and T7 read) |
| The validator is stored in the database | not established (UI acknowledgement and ordinary reopen only) |
| `mIsNotAValid` renders as "m is not a valid" at runtime | unverified (identifier only; the runtime was not opened) |
| Runtime validation behaviour, database durability, replay | not claimed (not replay_verified) |

---

## 13. Final recommendation

**ACCEPTED AS OBSERVED.** AC-1, AC-2, AC-3, AC-4 and AC-5 are each supported by the decisive evidence in section 6, within the limitations in section 11. The corrected cumulative browser total is **211** calls, not 210. The discrepancy was in the T3 find count (23, not 22) and is corrected here and in the record.

Nothing in this recommendation claims database durability, runtime validation, replay verification, or an exhaustive component comparison.
