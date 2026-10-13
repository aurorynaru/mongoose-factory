# EXP-072 — T12 final acceptance report (documentation only)

- Experiment: EXP-072 — Hello World Part 4 Section 11b: FX_Orders Classic Multi-View Form and caption strings
- Record: `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md`
- Run `R-20261013-154321-ryQV`, cycle 14, task T12, date 2026-10-13
- Worker session `3134edf3-0841-4663-ae74-fda66642b56e`; task_message_id `ceb458f1-c291-43f2-865c-f04319bd1abb` (from the T12 header)

## 0. Declaration for T12

- **Browser calls in T12: 0.** No tab listing or selection, no snapshot, screenshot, find, click, type, key press, wait, or navigation.
- **Mongoose actions in T12: 0.** No Form, String, Designer Save, Finish, close, reopen, runtime open or close, unload, FormSync, deployment, check-in or check-out.
- **Tools used in T12:** Read, Grep, Glob (read-only), one Write (this report) and Edit (the experiment record).
- The earlier controller audit files (`evidence/EXP-072/harness-audit-T1.md` to `harness-audit-T11.md`) were read, not written by the worker.
- One read attempt on a controller tool-results file was denied by the permission settings. The reconciliation therefore uses the record and the controller audit files, not that file.

## 1. Result and recommendation

- **Recommendation: EXPERIMENT_COMPLETE, classified as "accepted as observed", with the qualifications in sections 4 to 7.**
- AC-1 to AC-7 are supported at the UI level in one session. AC-7 is accepted by explicit operator disposition despite the toolbar Open deviation (section 5, D6).
- Nothing in EXP-072 is replay-verified. No database durability is claimed. The Save toast named "Global object(s)", so Form-definition persistence beyond the same session is not established.
- Add mode is **not** confirmed. A new-row marker and the pre-filled Order Number suggested it, but no explicit mode label was observed.

## 2. Acceptance matrix

Evidence paths are relative to the repository root. "Observed" means observed in the UI in one session.

| ID | Requirement | Status | Decisive evidence (exact paths) | Level | Limitations |
|---|---|---|---|---|---|
| **AC-1** | Sources reviewed; session usable; Designer in User scope and clean; FX_Orders IDO cited from EXP-071-R2 | **Supported** | `evidence/EXP-072/ac1-01-designer-identity-scope-before.png` (Designer, footer `ScopeType: User`, Save disabled); `evidence/EXP-072/ac2-00-webclient-before-select-form.png`; `evidence/EXP-072/t2-01-designer-preflight-before-wizard.png`. IDO cited from the EXP-071-R2 readback (T7 readback lines 1069–1117 and the EXP-071-R2 status block) in the record's "Sources" and "Cited object" sections. | Observed (same session) | The IDO was **not re-read** in EXP-072 (cited, not re-observed). Designer showed FX_Items at T1; the scope was read from the footer, not a scope column. |
| **AC-2** | Collision gate: Select Form shows FX_Items positive control and no FX_Orders; Edit > String shows the three new IDs absent and FX_sItem = Item | **Supported** | Web Client Select Form: `evidence/EXP-072/ac2-01-select-form-FX_Items-positive-control.png` (one row FX_Items); `evidence/EXP-072/ac2-02-select-form-FX_Orders-target-zero-match.png` (filter FX_Orders, no rows). Designer Edit > String: `evidence/EXP-072/ac2-05-designer-strings-FX_sItem-positive-control-settled.png` (FX_sItem positive control); `ac2-06-designer-strings-FX_sItem-value-readonly.png` (value Item); `ac2-07-…FX_sOrderNumber-absent.png`; `ac2-08-…FX_sCustomerID-absent.png`; `ac2-09-…FX_sCount-absent.png`; `ac2-10-designer-after-strings-cancel-clean.png`. | Observed (list-level) | Absence is at list level in one session, not database level. The Strings-filter Tab commit did not apply (`ac2-04-…positive-control.png` shows the unfiltered list); the filter applied after Control+a and a slow retype. Cause not established. |
| **AC-3** | Classic Multi-View route; Form Name FX_Orders; Data Source FX_Orders; fields ordered FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count; Save Template unchecked; one Finish creating one User-scoped FX_Orders | **Supported** | Route and fields: `evidence/EXP-072/t2-03-form-wizard-selection-Classic-MultiView.png`; `t2-05-wizard-page1-name-filled.png`; `t2-06-wizard-page1-datasource-FX_Orders.png`; `t2-13-wizard-page3-order-final.png`; `t2-15-wizard-final-page-save-template-unchecked.png`. Pre-Finish: `evidence/EXP-072/t3-01-pre-finish-wizard-final-page.png`. Creation: `evidence/EXP-072/t3-02-after-single-finish-immediate.png` (native message "Process Completed Successfully", acknowledged once); `evidence/EXP-072/t3-03-designer-after-finish-FX_Orders-displayed.png` (Name FX_Orders, footer ScopeType User). | Observed | Save Template: the checkbox click timed out (controller error #77, T2); it was then checked by one label click (EXP-050 behaviour). The Finish was invoked once. |
| **AC-4** | Exactly three new strings with exact values, each created via the Caption ellipsis with one Yes to its exact prompt and the value committed before OK; FX_sItem reused unchanged; four-string Edit > String readback | **Supported (client-side until Save)** | FX_sOrderNumber: `evidence/EXP-072/t6-04-caption-ellipsis-prompt-observed.png`; `t6-05-string-dialog-generated-before-edit.png`; `t6-07-string-value-committed-before-OK.png` (String Value row shows `Order Number`; see note); `t6-08-post-OK-designer-state-FX_sOrderNumber-created.png`; readback `t6-09` and `t6-10`. FX_sCustomerID: `t7-03`, `t7-04`, `t7-05-string-value-committed-before-OK.png`, `t7-06`, readback `t7-07`. FX_sCount: `t8-03`, `t8-04`, `t8-05-string-value-committed-before-OK.png`, `t8-06-post-OK-designer-state-FX_sCount-created-save-enabled.png`. Four-pair readback: `t8-07-readback-FX_sOrderNumber-value.png`, `t8-08-readback-FX_sCustomerID-value.png`, `t8-09-readback-FX_sCount-value.png`, `t8-10-readback-FX_sItem-value-unchanged.png`; cancel `t8-11-final-state-after-cancel-dirty-save-not-pressed.png`. | Observed (one run per string) | `t6-07` visibly shows `Order Number` in the String Value row. The "no active editor" state was read from the accessibility tree, not from the image. The three strings exist only client-side until the Designer Save (section 6). Controller click totals per task agree with the record's one prompt-Yes and one String-dialog-OK per string (T6 10, T7 10, T8 16 clicks). |
| **AC-5** | Exactly one Designer Save with the native response; clean state | **Supported (native response observed; persistence not established)** | `evidence/EXP-072/t9-01-pre-save-designer-state.png` (Save enabled, dirty); `evidence/EXP-072/t9-02-post-save-native-response-observed.png` (toast "Save — Global object(s) were saved."; footer ScopeType User; the canvas still shows raw IDs `FX_sOrderNumber:*`, `FX_sCustomerID:*`, `Item:*`, `FX_sCount:`); `evidence/EXP-072/t9-03-post-save-clean-state-no-dialog.png`. | Observed | The toast names "Global object(s)" and does not state that the Form definition was saved. This is recorded verbatim and not interpreted as Form-definition durability. One Save was invoked; the controller shows one Save click (T9). |
| **AC-6** | Clean Designer Form closed once and reopened once; Name FX_Orders; User scope; four fields in order with bindings and caption references | **Supported (same session)** | Closed: `evidence/EXP-072/t10-02-post-close-FX_Orders-closed-FX_Items-remains.png` (only FX_Items remains; no prompt). Route: `evidence/EXP-072/t10-03-form-menu-recent-forms-FX_Orders-entry.png`. Reopened: `evidence/EXP-072/t10-04-reopened-FX_Orders-identity-scope-clean.png` (Name FX_Orders; Device Type Default; Form Type Normal; Is Master True; footer ScopeType User, ScopeName = operator account; Save disabled; canvas `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:`). Bindings: `evidence/EXP-072/t10-05-reopened-components-grid-bindings-readonly.png`. Captions: `t10-06-caption-FX_OrderNumberStatic-after-reopen.png` (`FX_sOrderNumber`); `t10-07-…FX_CustomerIDStatic…png` (`FX_sCustomerID`); `t10-08-…FX_ItemStatic…png` (`FX_sItem`); `t10-09-…FX_CountStatic…png` (`FX_sCount`). Final: `t10-10-final-state-reopened-FX_Orders-clean-open.png`. | Observed (same session) | Same-session close and reopen only; not a database or durability check. The canvas showed raw IDs before the Save and resolved text after the reopen; the cause is not established (section 6). Bindings and control types are design-time readings from the Components grid. |
| **AC-7** | One read-only runtime opening: mode; displayed Order Number; four captions; Count default; Customer ID and Item control types; no record entered or saved; runtime closed once | **Supported (same session); mode not confirmed** | Picker: `evidence/EXP-072/t11-01-webclient-open-picker.png` (one row FX_Orders / FX_Orders before OK). Runtime: `evidence/EXP-072/t11-02-runtime-fx-orders-opened.png` (Order Number `1`; Customer ID and Item empty comboboxes with Open buttons; Count `1`; labels `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:`; Save disabled; status `Order Number (Object 1 of 1)`). Closed: `evidence/EXP-072/t11-03-runtime-fx-orders-closed.png` (Sql Tables panel only; no prompt). | Observed (same session) | Mode: **not confirmed**, Add mode inferred from the new-row marker and pre-filled value only. The `1` is the screen value; no record was saved, so its source is not established. Lookup list contents were not opened and are not observed. The runtime picker showed FX_Orders; this does not settle the T4 Designer-picker discrepancy. Operator disposition covers the toolbar Open route (D6). |
| **AC-8** | Final report with decisive evidence for AC-1 to AC-7, complete action audit with exact counts, worker-written inventory, final state | **Satisfied by this report and the record update** | This file; `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` (T12 section and corrections). Counts in section 3. Inventory in section 8. Final state in section 7. | Documentation | Counts that do not reconcile are listed as unresolved in section 3, not totalled. |

## 3. Reconciled cumulative counts (T1–T11)

Basis column: **C** = controller audit files `evidence/EXP-072/harness-audit-T1.md` to `harness-audit-T11.md` (tool-call rows, authoritative for MCP calls); **I** = PNG/YAML inventory by file name; **R** = worker record (per-task section). Where the record's stated cumulative figure differs from its own per-task entries, both are shown.

### 3a. Lifecycle and state counts

| Item | Reconciled | Basis | Notes |
|---|---|---|---|
| Finish | **1** | R; C (T3 click tally includes Finish) | T3 only. |
| Form created (FX_Orders, User scope) | **1** | R | T3. |
| Caption strings created | **3** | R; C per-task click totals agree | FX_sOrderNumber (T6), FX_sCustomerID (T7), FX_sCount (T8). Each has one prompt Yes and one String-dialog OK. |
| Pre-existing string FX_sItem | **reused, unchanged** | R (read-only in T1, T8) | |
| Designer Save invoked | **1** | R; C (T9 1 click) | Native response: toast "Global object(s) were saved." |
| Incidental pre-Save close / reopen | **1 / 1** | R | T3 accidental Form-tab close (clean, no prompt). T5 reopen via Form-menu recent-forms (operator-authorised). |
| Post-Save close / reopen (AC-6) | **1 / 1** | R; C (T10 10 clicks) | T10 Form-tab close; Form-menu recent-forms reopen. |
| Runtime open / close (FX_Orders) | **1 / 1** | R; C (T11 3 clicks: Open, OK, Close Panel) | No save prompt appeared, so no "No" answer was given. |
| Records entered, saved or deleted; list values chosen | **0** | R; C (T11 has no type, select or key calls) | |
| Unloads, FormSync, deployment, check-in, check-out, Delete Form Definition | **0** | R | No such tool call appears in C. |
| Re-logins; session expiry; refresh; restart; direct URL navigation | **0** | R | Session expiry procedure not invoked. |
| Changes to pre-existing strings or other objects | **0** | R | |
| Native browser dialogs | **0** | R | Controller does not log dialogs. |
| Designer Select Form openings | **4** (all cancelled, none OK) | R: T4 2, T5 2 | **Record stated 6.** The record's "T1 1" was the Web Client gate, not a Designer picker. |
| Web Client Select Form openings | **3** (cancel 2; OK 1) | R: T1 1 (cancel), T4 1 (cancel), T11 1 (OK) | **Record stated 1** (T11 only). |
| Total Select Form dialogs | **7** | R | Same total as the record; the split is corrected. |

### 3b. Browser tool-call counts (controller C)

| Tool | Controller total | Per-task (T1–T11) | Record as stated | Reconciled | Notes |
|---|---|---|---|---|---|
| `browser_click` | **106** = 105 ok + 1 error | 11, 20, 5, 7, 13, 10, 10, 16, 1, 10, 3 | 105 ok / 2 failed (107) | **105 ok / 1 failed (106 calls)** | The failed click is the T2 Save Template checkbox timeout (controller #77). The record's second failure, T6 "stale Caption-row click e1711", is logged by the controller as a `browser_snapshot` error (#14, ref e1711 not found); no T6 click row failed. See section 4. |
| `browser_type` | **21** = 20 ok + 1 error | 7, 1, 0, 3, 2, 5 in T1, T2, T3, T4, T7, T8; T6 3 (2 ok + 1 error) | 20 ok / 0 refused | **20 ok / 1 refused (21 calls)** | Refused: T6 #27, ref e2543 not found on the String Value editor. All types were in-scope fills (Name, filters, String Value). Controller flags browser_type as a flagged tool, not as a prohibited one. |
| `browser_press_key` | **25** | T1 7, T3 1, T4 5, T6 3, T7 3, T8 6 | 25 | **25** | Control+a, Tab, Escape. |
| `browser_mouse_*` | **7** = move 2, click_xy 2, wheel 3 | all in T4 | move 2, click_xy 2, wheel 3 | **7** | T4 coordinate routes (last resort, recorded in the record). |
| `browser_wait_for` | **23** | T1 7, T3 1, T4 5, T6 2, T7 2, T8 5, T11 1 | 22 (T1–T11 cumulative) | **23 (controller)**; 1 difference unresolved | The record's cumulative figure is 1 lower; its per-task entries are not all stated, so the task that differs cannot be identified. |
| `browser_tabs` | **27** = 12 list + 15 select | list 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1; select 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1 | 11 list / 15 select | **12 list / 15 select** | Per-task entries sum to 12 list; the stated 11 is an arithmetic error. Every tab call is logged `ok`. |
| `browser_snapshot` | **23** (2 errors: T2 #56 ref e2912; T6 #14 ref e1711) | T1 1, T2 4, T3 1, T4 3, T5 1, T6 5, T7 1, T8 1, T9 1, T10 1, T11 4 | Untargeted 14 stated; per-task untargeted entries sum to 17; T2 targeted stated as 3 successful + 1 failed | **23 (controller)**; worker split unresolved | Targeted and untargeted per-task figures cannot be reconciled from the record. |
| `browser_find` | **165** | T1 22, T2 25, T3 11, T4 16, T5 19, T6 16, T7 17, T8 21, T9 3, T10 15, T11 0 | Stated 171; per-task entries sum to **187** | **165 (controller)**; 22 difference from the per-task record unresolved | The record's stated cumulative (171) does not equal its own per-task sum (187); neither matches the controller. |
| **All browser tool calls** | **498** (sum of the rows above) | — | — | **498** | Browser errors: 4 (1 click timeout, 2 snapshot ref-not-found, 1 type ref-not-found). |
| Non-browser tool errors (controller) | 3 | — | — | — | T1 Read of a missing path (#5); T1 Grep permission denied on a tool-results file (#17); T8 Edit "String to replace not found" (#78). None was a browser action. |

### 3c. Screenshot and file counts (I)

| Task | PNG files | Notes |
|---|---|---|
| T1 | 12 | `ac1-01`; `ac2-00` to `ac2-10` (no `t1` prefix) |
| T2 | 15 | `t2-01` to `t2-15` |
| T3 | 6 | `t3-01` to `t3-06` |
| T4 | 11 | `t4-01` to `t4-08`, `t4-10` to `t4-12` |
| T5 | 13 | `t5-01` to `t5-13` |
| T6 | 9 | `t6-01`, `02`, `04`, `05`, `07`, `08`, `09`, `10`, `11` |
| T7 | 8 | `t7-01` to `t7-08` |
| T8 | 11 | `t8-01` to `t8-11` |
| T9 | 3 | `t9-01` to `t9-03` |
| T10 | 10 | `t10-01` to `t10-10` |
| T11 | 3 | `t11-01`, `t11-02`, `t11-03` |
| **Total PNG** | **101** | Equals the controller's 101 screenshot calls and the record's 101 (85 through T8, 3 in T9, 10 in T10, 3 in T11). |

YAML snapshots saved by the worker: 16 (`t2-fresh-snapshot-page3.yml`; `t3-00`; `t4-00`; `t4-09`; `t5-00`; `t6-00`; `t6-03`; `t6-06`; `t7-00`; `t8-00`; `t9-00`; `t10-00`; `t11-00`; `t11-01-snapshot-after-open-click.yml`; `t11-02-snapshot-runtime-fx-orders.yml`; `t11-03-snapshot-after-runtime-close.yml`).

## 4. Corrections to earlier counts (record)

These corrections were made in the record (T12 section and the T11 correction note). Each one rests on the controller or the record's own per-task entries.

1. **T11 task_message_id.** The T11 section gave an identifier (`6778eb5f-…`). The T11 task text available to the worker did not contain one, so that identifier was an error and is withdrawn.
2. **Designer Select Form total.** Stated 6; reconciled 4 (T4 2, T5 2). The T1 gate was a Web Client Select Form.
3. **Web Client Select Form total.** Stated 1 (T11 only); reconciled 3 (T1 cancel, T4 cancel, T11 OK).
4. **Failed clicks.** Stated 2; reconciled 1 (the T2 timeout). The T6 "failed click e1711" is the controller's snapshot error #14 on the same ref; the controller logs no T6 click error.
5. **browser_type.** Stated 20 ok / 0 refused; reconciled 20 ok / 1 refused (T6 #27, ref e2543).
6. **browser_tabs cumulative list count.** Stated 11; reconciled 12 (per-task sum and controller). The select total of 15 is unchanged.
7. **browser_find cumulative.** Stated 171; the record's own per-task entries sum to 187; the controller shows 165. Left as unresolved (section 9); the controller total 165 is used.
8. **browser_wait_for and snapshot splits.** Stated totals do not match the controller (22 vs 23; untargeted 14 vs per-task 17). Left as unresolved.

## 5. Deviations and authorisations

| ID | Deviation or authorisation | Outcome | Source |
|---|---|---|---|
| D1 | **T3 accidental Form-tab close** of FX_Orders (clicked the tab close control instead of selecting the tab) | Form was clean; no prompt; recorded as an out-of-scope close. Reopened later, see D2. | Record T3 section; controller T3 click #4 |
| D2 | **T5 operator-authorised incidental reopen** of FX_Orders through the Designer Form-menu recent-forms entry | Reopened; Components read-only; no change | Record T4 and T5 sections; T5 brief |
| D3 | **T4 Designer Select Form zero-row discrepancy.** The Designer picker listed no FX_Orders on two openings; the Web Client picker (T4 and T11) and the Designer's Form menu (T3, T5, T10) listed FX_Orders. The T4 reopen was blocked; the form was later reopened through the Form menu (T5). | **Unresolved.** Cause not established. The controller shows no FX_Orders-related error in T4. | Record T4 section; `t4-04`, `t4-10`, `t4-11` |
| D4 | **T5 two unintended toolbar Open-icon clicks** opened the Designer Select Form | Both cancelled without OK; no Form opened | Record T5 steps 3 and 6; `t5-02`, `t5-05` |
| D5 | **T6 stale refs** (controller #14 snapshot ref e1711; #27 type ref e2543) and **T2 stale ref and checkbox timeout** (controller #56 snapshot ref e2912; #77 click timeout) | One fresh untargeted snapshot each (T2: `t2-fresh-snapshot-page3.yml`; T6: `t6-03`, `t6-06`), then a corrected action. The Save Template checkbox timeout was handled by one label click. | Controller rows; record T2 and T6 |
| D6 | **T11 toolbar Open instead of Form menu > Open.** The T11 brief specified Form > Open > Select Form. The worker used the toolbar Open button (`f1e25`). The T11 section did not label this as a deviation. | **Accepted by explicit operator disposition** (T12 instruction). This correction labels it now. | Record T11 action 3; `t11-01` |
| D7 | **Strings-filter Tab commit did not apply** (T1); fixed by Control+a and slow retype | Recorded in the T1 section; the three later Strings filters used the same method | `ac2-04`, `ac2-05` |
| D8 | **T4 coordinate clicks** (toolbar Open icon at 25,51; mouse moves and wheel) | Last-resort routes, recorded in the record; no state change recorded | Record T4; controller T4 mouse rows |
| D9 | **Post-Save close and reopen route** (T10) through the Form tab close and Form-menu recent-forms | Authorised by the T10 brief; not a toolbar Select Form | Record T10 section |

## 6. Qualifications on the findings

- **Persistence boundary.** All observations are same-session UI observations. The close and reopen (AC-6) and the runtime open (AC-7) do not establish database durability or replay verification. Nothing is replay-verified.
- **Save toast.** The native response was "Save — Global object(s) were saved." (`t9-02`). It is recorded verbatim. It does not explicitly say that the Form definition was saved.
- **Canvas resolution.** At the Save (`t9-02`) the canvas showed raw IDs (`FX_sOrderNumber:*`, `FX_sCustomerID:*`, `FX_sCount:`). After the reopen (`t10-04`) it showed resolved text (`Order Number:*`, `Customer ID:*`, `Count:`). The cause (persistence, canvas refresh, or reopen) is not established.
- **Mode.** Add mode not confirmed (section 1).
- **Order Number `1`.** Displayed in the runtime textbox. No record was saved, so this is not a database-generated value. The EXP-071-R2 IDO records a default `AUTONUMBER()`, cited from EXP-071-R2 and not re-observed.
- **Count default `1`.** Displayed at runtime. EXP-071-R2 records the FX_Count default as 1 (cited, not re-observed). The runtime value agrees with that default; the attribution is not tested.
- **ComboBox types.** At runtime, Customer ID and Item expose the combobox role with an Open button and are empty. At design time, FX_CustomerIDCombobox and FX_ItemCombobox are ComboBox components bound to `object.FX_CustomerID` and `object.FX_Item`. Lookup lists were not opened.
- **Scope.** The footer ScopeType is User and the ScopeName is the operator sign-in account (`anton.ramos@3mworks.com.ph` in the footer). Scope is read from the footer, not from a scope column.
- **Caption on FX_Item.** The Caption is `FX_sItem` (reused, unchanged). Its design-surface and reopened readings are observed.
- **String commit.** The "committed before OK" state was read from the accessibility tree; `t6-07`, `t7-05` and `t8-05` show the values in the String Value row.

## 7. Final application state (as last observed; no T12 browser action)

- **Web Client (tab 1):** Sql Tables panel selected; no runtime FX_Orders open; no dialog open; Save disabled. An FX_Items panel tab was present from before EXP-072 and was not changed.
- **Designer (tab 0):** FX_Orders open and clean as of T10 (`t10-10`: Save and Undo disabled, footer ScopeType User, no dialog). FX_Items also open as a tab, unchanged. **FX_Orders was not reselected in T11 or T12**, so its state rests on the T10 observation.
- **Created objects:** one Form FX_Orders (User scope); three strings FX_sOrderNumber, FX_sCustomerID, FX_sCount. These were saved only by the single T9 Save (toast observed; persistence not established).
- **Records:** none entered, saved or deleted.

## 8. Worker-written file inventory

| File | Action | Task |
|---|---|---|
| `evidence/EXP-072/T12-final-acceptance-report.md` | created (this report) | T12 |
| `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` | edited (T12 header, status block, T12 section; T11 corrections and deviation labels) | T12 |
| `evidence/EXP-072/` PNG files (101) | created across T1–T11 (see section 3c) | T1–T11 |
| `evidence/EXP-072/` YAML snapshots (16) | created across T2–T11 (see section 3c) | T2–T11 |
| `evidence/EXP-072/` earlier records | none | — |

Not worker-written: `evidence/EXP-072/harness-audit-T1.md` to `harness-audit-T11.md` (controller-generated), and the page snapshot YAML and console logs under `evidence/playwright/` (tool-generated).

## 9. Unresolved items

1. **T4 Designer-picker discrepancy (D3).** The Designer Select Form did not list FX_Orders on two openings; the Web Client picker and the Form menu did. Cause not established.
2. **Form-definition and string persistence.** The Save toast says "Global object(s)". No independent persistence check was made or is claimed.
3. **Canvas raw-to-resolved change (section 6).** Cause not established.
4. **Add mode.** Not confirmed; no mode label observed.
5. **Record count differences.** `browser_find` (stated 171, per-task 187, controller 165); `browser_wait_for` (stated 22, controller 23); snapshot split (stated untargeted 14, per-task 17; controller total 23). The controller totals are used; the differences are not resolved to a task.
6. **Runtime Order Number source and Customer ID/Item lists.** Not established; lists not opened.

## 10. Knowledge state per finding

| Finding | State |
|---|---|
| Classic Multi-View wizard route creates FX_Orders with the four fields in the set order; one Finish | observed |
| Caption ellipsis string creation with Tab commit before OK (three strings) | observed (one run per string) |
| FX_sItem reused as the FX_Item caption | observed |
| Designer Save native response (toast "Global object(s) were saved.") | observed |
| Form-definition and string persistence beyond the same session | **unresolved** |
| Same-session Designer close and reopen; identity, scope, order, captions, bindings | observed |
| Runtime display: Order Number 1; captions; Count 1; Customer ID and Item comboboxes | observed |
| Add mode | **unresolved** (not confirmed) |
| T4 Designer-picker discrepancy | **unresolved** |
| Caption resolution change on canvas | **unresolved** |
| Any procedure promoted to candidate_procedure or replay_verified | **none** (no promotion made in T12) |

## 11. Limitations of this report

- It reconciles counts from the record and the controller audit files. It does not re-observe any screen state.
- It does not establish durability, replay verification, or the cause of the open unresolved items.
- The controller audits record tool calls and results, not rendered state (their own note); the screenshot observations are as described in section 2.
