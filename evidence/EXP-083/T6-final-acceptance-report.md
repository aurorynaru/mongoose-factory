# EXP-083 — T6 final acceptance report (documentation and audit reconciliation only)

- Experiment: EXP-083, Hello World Part 5 Section 6a (FX_Orders caption strings and runtime check of joined and derived values).
- Task: T6, cycle 5, worker session `e48b52d0-6ce1-4953-a67f-d116e525169c`, task_message_id `6f53749d-3025-4577-b7c7-2a12420b18ff`, run `R-20261014-112529-I6l8`. Date 2026-10-14.
- **Declaration: zero browser calls and zero Mongoose changes in T6.** Tools used in T6: Glob, Grep and Read (repository files only) and Write (this report). No tab list or select, snapshot, find, screenshot, click, type, key, navigation or wait.
- Classification of every finding in this report: **observed only**. Same session. UI and accessibility level. Not database durability. Not replay_verified.

## 1. Recommendation

**ACCEPTED AS OBSERVED** (same session; UI and accessibility level), for coordinator review. All five acceptance checks (AC-1 to AC-5) are supported at that level. Three qualifications need the coordinator's attention before the result is relied on:

1. **AC-4 "nothing typed".** Runtime fields received no keystrokes. One filter was typed into the Select Form picker dialog that opens FX_Orders (T5). The picker is a dialog, not a runtime field, and the controller audit flags the call. Whether this satisfies the AC-4 wording is the coordinator's decision (see §6, D9).
2. **AC-3 "31 components otherwise unchanged".** Verified against the recorded EXP-082 T9 inventory by name, type, binding and tab order. Not verified property by property, and the other 28 Caption readings were not re-read in this experiment (see §4, AC-3 limits).
3. **AC-3 reopen as persistence evidence.** The reopen was in the same session. No metadata unload was in scope, so the reopened captions may reflect a client-side Form cache. The reopen is not server-side verification.

This run is **not** classified as replay_verified and makes **no** database-durability claim.

## 2. Consolidated browser-call totals (controller-reconciled)

Source: worker counts from the EXP-083 record, reconciled against the five controller-generated audits `harness-audit-T1.md` to `harness-audit-T5.md` in this directory (each lists every browser tool call with its result). The controller's `actions` figure equals clicks + type + key presses + tab select. Its `reads` figure equals tab list + snapshots + finds + screenshots. Local Read, Grep and Glob calls are excluded from both figures. This exclusion is inferred from the arithmetic, which matches exactly in every task.

| Task | tabs list | tabs select | snapshots | finds | clicks | type | key presses | screenshots | **Total** | Controller actions / reads |
|---|---|---|---|---|---|---|---|---|---|---|
| T1 | 1 | 1 | 3 | 9 | 8 | 1 | 1 | 4 | **28** | 11 / 17 |
| T2 | 1 | 1 | 5 | 30 | 22 | 4 | 4 | 10 | **77** | 31 / 46 |
| T3 | 1 | 1 | 1 | 3 | 1 | 0 | 0 | 2 | **9** | 2 / 7 |
| T4 | 1 | 1 | 3 | 9 | 9 | 0 | 0 | 4 | **27** | 10 / 17 |
| T5 | 1 | 1 | 4 | 8 | 7 | 1 | 2 | 8 | **32** | 11 / 21 |
| **Cumulative** | **5** | **5** | **16** | **59** | **47** | **6** | **7** | **28** | **173** | — |

Exact sum: 28 + 77 + 9 + 27 + 32 = **173**. Column sums (16, 59, 47, 6, 7, 28, 10 for tabs) add to 173 with the tab calls.

Controller tool-name counts (grep of each audit) match the worker columns exactly: click 8 / 22 / 1 / 9 / 7 = 47; find 9 / 30 / 3 / 9 / 8 = 59; snapshot 3 / 5 / 1 / 3 / 4 = 16; screenshot 4 / 10 / 2 / 4 / 8 = 28; tab calls 2 per task = 10. No browser_navigate, browser_evaluate, run-code, wait, console, network, mouse, hover, drag, select-option, file, dialog-handle, fill-form, close or resize call appears in any audit.

## 3. Category reconciliation (worker record against controller)

| Category (brief's AC-5 list) | Worker record | Controller evidence | Status |
|---|---|---|---|
| Strings created | 3 | T2 String dialog OK clicks: audit lines 22, 41, 59 | match |
| Prompt Yes | 3 | T2 clicks `Yes button on … create prompt`: lines 13, 32, 50 | match |
| String OK | 3 | T2 clicks `String dialog OK button …`: lines 22, 41, 59 | match |
| Tab commits before OK (string values) | 3 | T2 key Tab: lines 18, 37, 55 (each after a String Value fill, lines 17, 36, 54) | match |
| Designer Save | 1 | T3 click `Designer toolbar Save button`: line 28 (no other Save click in any audit) | match |
| Designer close | 1 | T4 click `closable FX_Orders Form-tab close control`: line 27 | match |
| Designer reopen | 1 | T4 clicks `Form menu button` line 11 and `Form menu recent-forms entry FX_Orders` line 13 | match |
| Runtime open | 1 | T5 clicks `Form > Open` line 11, `Select Form row` line 20, `Select Form OK` line 21 | match |
| F4 | 1 | T5 key `F4`: line 29 (the only key after the picker Tab, line 16) | match |
| Runtime close | 1 | T5 click `Close Panel FX_Orders runtime tab`: line 42 | match |
| Runtime edits | 0 | Only T5 type call is the picker filter (line 15). No keystroke after F4 (line 29); later actions are a row click (35) and the close (42) | match |
| Component edits | 0 | No type call targets a component; the only T2 type targets are String Value editors and the Strings filter | match |
| Caption-reference edits | 0 | Caption ellipsis opened 3 times (T2 lines 10, 29, 47), each opening the string dialog. No type into a Caption field | match |
| IDO changes | 0 | No click or type in any IDO Form field. T5 used the Web Client Form menu (line 8) while the pre-existing IDO Properties tab was active; no IDO field was touched | match |
| Checkout actions | 0 | No check-in, check-out or undo-checkout element clicked in any audit | match |
| Re-logins | 0 | No navigate call; no sign-in, session-expiry or portal step in any task | match |
| Designer top-toolbar Delete / Regenerate Form | 0 | None clicked (the only toolbar Save is line 28) | match |

No category shows a worker/controller mismatch.

## 4. Acceptance matrix

### AC-1 — Sources reviewed; session usable; User-scoped clean Designer; three strings absent; FX_sAddress present; FX_Orders identity and the three raw Caption references recorded

- **Observed postcondition (T1, re-confirmed at T2 and T3 starts):** Designer FX_Orders tab selected; footer `ScopeType: User`; Save and Undo disabled; no dialog. Edit > String, filter `FX_s`, showed nine rows, none of them `FX_sCustomerName`, `FX_sItemDescription` or `FX_sOrderTotal`. `FX_sAddress` present with String Value `Address` (positive control). Raw Captions: FX_CusNameStatic = `FX_sCustomerName`; FX_ItmsDescriptionStatic = `FX_sItemDescription`; FX_DerOrderTotalStatic = `FX_sOrderTotal`. Session usable (no expiry, sign-in or banner).
- **Evidence:** `t1-01-designer-start-fx-orders-open-user-clean.png` (FX_Orders, User, Save greyed, raw IDs on the three target labels, Address resolved); `t1-02-edit-string-filter-fx_s-before-cancel.png` (nine rows, three targets absent); `t1-03-edit-string-fx_sAddress-positive-control-value.png` (`FX_sAddress` = `Address`); `t1-04-fx-orders-open-captions-read-clean-before-stop.png` (FX_DerOrderTotalStatic Caption `FX_sOrderTotal`, Save greyed); `snapshot-t1-01-designer-start.yml`; `snapshot-t1-02-global-objects-dialog.yml`; `snapshot-t2-01-designer-fresh-start.yml` (T2 gate).
- **Limitations:** The absence check reads the name column of the `FX_s` filter only. The first two Captions were read from the Properties readback, not an image. The Form-menu recent-forms open was **not** repeated in T1 because FX_Orders was already open (deviation D8). The FX_Orders tab stayed selected, but the Designer URL lost `MGForm=FX_Orders` after the T1 Cancel and regained it on the T4 reopen.

### AC-2 — Three strings created through the Caption ellipsis; one Yes per exact prompt; Tab commit before OK; exact values; Edit > String readback exact

- **Observed postcondition (T2):**
  - FX_CusNameStatic: prompt `String FX_sCustomerName does not exist. Create it?`; Yes once; generated value `FX_s Customer Name` replaced by one fill `Customer Name`; Tab; grid showed `Customer Name` with no active editor; OK once.
  - FX_ItmsDescriptionStatic: prompt `String FX_sItemDescription does not exist. Create it?`; Yes once; `FX_s Item Description` replaced by `Item Description`; Tab; OK once.
  - FX_DerOrderTotalStatic: prompt `String FX_sOrderTotal does not exist. Create it?`; Yes once; `FX_s Order Total` replaced by `Order Total`; Tab; OK once.
  - Edit > String readback (Properties grid, one row each): `FX_sCustomerName` = `Customer Name`; `FX_sItemDescription` = `Item Description`; `FX_sOrderTotal` = `Order Total`. Global Objects closed with Cancel. The `FX_s` list showed 12 rows (the nine from T1 plus the three new ones).
- **Evidence:** prompts `t2-01`, `t2-03`, `t2-05`; pre-OK dialogs with committed value `t2-02`, `t2-04`, `t2-06`; list `t2-07`; readbacks `t2-08`, `t2-09`, `t2-10`; snapshots `snapshot-t2-02` to `-05`; controller key and click rows listed in §3.
- **Limitations:** The strings were client-side until the T3 Save. The readback is the same-session Properties grid, not a server read. The exact match is by the accessibility text of the readback, not by OCR. Each prompt matched the brief's `String <ID> does not exist. Create it?` text, so none of the three strings existed before this task; no overwrite was needed or made.

### AC-3 — One Designer Save with its native response; clean Form closed once and reopened once; captions resolved; 31 components otherwise unchanged

- **Save (T3):** one toolbar Save click (controller line 28). Native response: a non-modal toast titled `Save`, text `Global object(s) were saved.` No prompt, error or warning. Immediately afterwards Save and Undo were disabled; FX_Orders was still the selected tab; footer `ScopeType: User`; no dialog. The canvas still showed the raw IDs at that moment.
- **Close (T4):** one click on the Form-tab control `closable FX_Orders` (controller line 27). No prompt, no native response. Save was disabled before the close.
- **Reopen (T4):** one Form menu click and one click on the recent-forms entry `FX_Orders` (controller lines 11, 13). The reopened Form: Name `FX_Orders`; Device Type Default; Form Type Normal; Is Master True; footer `ScopeType: User`; Save and Undo disabled; no dialog.
- **Captions resolved on the reopened canvas:** `Customer Name:`, `Item Description:`, `Order Total:` (with the ordinary trailing colon), alongside the unchanged `Address:` and the other labels. Grid headers read `Customer Name`, `Item Description`, `Order Total`.
- **Caption references:** FX_CusNameStatic = `FX_sCustomerName`; FX_ItmsDescriptionStatic = `FX_sItemDescription`; FX_DerOrderTotalStatic = `FX_sOrderTotal`. These are the references, unchanged; the resolved text is shown on the canvas, as designed.
- **31 components:** the reopened Components grid (expanded in T4) lists 31 rows: FormCollectionGrid; 10 GridColumns (tabs 1–10); 10 Static and 10 detail controls (tabs 11–30). Names, types, bindings and tab order match the EXP-082 T9 inventory row for row: FX_CustomerIDCombobox and FX_ItemCombobox are ComboBox; FX_ItmsPictureEdit is an Edit bound to `object.FX_ItmsPicture`. The T1 start snapshot showed the same 31 names.
- **Evidence:** `t3-01-pre-save-fx_orders-dirty-user-scope-no-dialog.png`; `t3-02-post-save-immediate-response-fx_orders.png` (toast, Save greyed); `t4-01-pre-close-fx_orders-clean-user-scope-no-dialog.png`; `t4-02-after-close-once-fx_orders-tab-closed-no-prompt.png`; `t4-03-reopened-fx_orders-canvas-identity-user-clean.png` (resolved captions, identity, scope); `t4-04-reopened-components-grid-caption-fx_derordertotalstatic.png` (grid, Caption `FX_sOrderTotal`); `snapshot-t3-01-designer-pre-save-fresh.yml`; `snapshot-t4-01-pre-close-fresh.yml`; `snapshot-t4-03-reopened-fx_orders-full.yml`; `snapshot-t4-04-reopened-components-expanded.yml` (31 rows).
- **Limitations:**
  - The "otherwise unchanged" check compares identity, type, binding and tab order with the recorded EXP-082 T9 inventory, and the T1 start names. It does not compare every property (for example Layout or size), and the other 28 Caption readings were not re-read in this experiment.
  - The T3 native message names "Global object(s)", not the Form. It is the only native confirmation, and it does not by itself prove that the Form definition was persisted.
  - The canvas captions were raw IDs immediately after the Save and resolved after the reopen. The cause is not established. The reopen was in the same session, and no metadata unload was in scope, so the resolved text may come from a client-side cache. This is observed UI behaviour, not server-side persistence.

### AC-4 — Runtime: Add mode initially; one transition to Filter in Place; blank criteria; one F4; exactly two rows; nine fields per order match the brief; picture visibly blank for both orders; zero runtime mutations; one close without prompt

- **Initial mode (T5):** Add mode. The new-row star marker was on row 1; the Order Number textbox held the add-mode placeholder `3`; status bar `Order Number (Object 1 of 1)`; the status bar did not show Filter in Place. Evidence: `t5-04-runtime-fx_orders-opened-before-f4-mode.png`; `snapshot-t5-02-runtime-fx-orders-after-open.yml`.
- **Transition (T5):** one click on the Filter in Place toolbar button (controller line 26). Status bar then `Filter in Place`; all criteria blank; the placeholder was gone. The adjacent Delete toolbar button was not clicked. Evidence: `t5-05-runtime-fx_orders-after-fip-criteria-blank.png`.
- **Query (T5):** F4 once (controller line 29). Exactly two grid rows (row-number cells `1` and `2`); status `Customer ID (Object 1 of 2)`. No retry, no criterion change. Evidence: `t5-06-runtime-after-f4-blank-criteria-query-result.png`.
- **Order 1 (row-number cell `1`; no navigation click was needed, since row 1 was already current after F4):**

  | Field | Brief | Observed (accessibility value) | Match |
  |---|---|---|---|
  | Order Number | 1 | `1` | yes |
  | Customer ID | FX001 | `FX001` | yes |
  | Customer Name | Factory test one | `Factory test one` | yes |
  | Address | 1 Factory Street | `1 Factory Street` | yes |
  | Item | dumbbell | `dumbbell` | yes |
  | Item Description | 45 pound iron | `45 pound iron` | yes |
  | Cost | 45.00 | `45.00` | yes (display string) |
  | Count | 2 | `2` | yes |
  | Order Total | 90.00 | `90.00` | yes (display string) |
  | FX_ItmsPicture | — | empty text box; blank label | blank |

  Grid row 1 reads `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00`. Evidence: `snapshot-t5-03-runtime-after-f4-row1-fields.yml` (lines 156–166 and 190–224); `t5-06`.

- **Order 2 (row-number cell `2`; controller line 35):**

  | Field | Brief | Observed (accessibility value) | Match |
  |---|---|---|---|
  | Order Number | 2 | `2` | yes |
  | Customer ID | FX002 | `FX002` | yes |
  | Customer Name | Factory test two | `Factory test two` | yes |
  | Address | 2 Factory Street | `2 Factory Street` | yes |
  | Item | eggs | `eggs` | yes |
  | Item Description | cage free | `cage free` | yes |
  | Cost | 6.99 | `6.99` | yes (display string) |
  | Count | 1 | `1` | yes |
  | Order Total | 6.99 | `6.99` | yes (display string) |
  | FX_ItmsPicture | — | empty text box; blank label | blank |

  Grid row 2 reads `2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99`; status `(Object 2 of 2)`. Evidence: `snapshot-t5-04-runtime-order-2-fields.yml` (lines 169–223); `t5-07-runtime-order-2-fields.png`.

- **FX_ItmsPicture display:** blank in both orders (empty text box, blank label, empty grid picture cell). The blank label matches the EXP-082 record: FX_ItmsPictureStatic has a blank Caption by design, so the blank label is not a runtime finding.
- **Mutations (T5):** zero runtime edits, saves, New, Delete or list choices. The one type call (controller line 15) entered the Select Form picker filter `FX_Orders`, before the runtime opened. After F4 the controller records no keystroke. The Customer ID combobox held focus after F4 with its text selected; nothing was typed into it.
- **Close (T5):** one click on `Close Panel FX_Orders` (controller line 42). No save prompt, so no No answer was needed or given. The IDO Properties runtime tab that was already open remains. Evidence: `t5-08-runtime-fx_orders-after-close-once-no-prompt.png`.
- **Limitations:**
  - Cost and Order Total are display strings with two decimals. Their stored numeric values were **not** read, so exact numeric equality (for example Order Total = Count × Cost in the database) is not independently established. The arithmetic (2 × 45.00 = 90.00; 1 × 6.99 = 6.99) holds only for the displayed inputs.
  - The joined values (Customer Name, Address, Item Description) are visible values only. The join mechanism was not independently verified in this run; it rests on the EXP-078 and EXP-079 records.
  - A blank picture rendering is **not** proof that no image data exists. An Edit control can render blank for binary data it cannot display, and the check does not distinguish the two cases.
  - The picker filter is the D9 item in §6.

### AC-5 — Final report for AC-1 to AC-4; complete audit; worker-written inventory; final state

- This report (§2 to §8) and the EXP-083 record provide the decisive evidence, the reconciled audit, the inventory and the final state. Recommendation in §1.

## 5. Worker-written-file inventory (complete; verified by Glob at T6)

**Repository files written or edited by the worker in EXP-083:**

- `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md` — created at T1; edited at T2, T3, T4, T5 and T6 (status headers; per-task sections; audit tables).
- `evidence/EXP-083/T6-final-acceptance-report.md` — created at T6 (this file).

**Evidence files (worker-authored, under `evidence/EXP-083/`):**

- Snapshots (16 YAML, written by the snapshot tool at the worker's filename request):
  - T1: `snapshot-t1-01-designer-start.yml`, `snapshot-t1-02-global-objects-dialog.yml`, `snapshot-t1-03-after-global-objects-cancel.yml`.
  - T2: `snapshot-t2-01-designer-fresh-start.yml`, `snapshot-t2-02-caption-row-fx_cusnamestatic.yml`, `snapshot-t2-03-caption-row-fx_itmsdescriptionstatic.yml`, `snapshot-t2-04-caption-row-fx_derordertotalstatic.yml`, `snapshot-t2-05-global-objects-strings-grid.yml`.
  - T3: `snapshot-t3-01-designer-pre-save-fresh.yml`.
  - T4: `snapshot-t4-01-pre-close-fresh.yml`, `snapshot-t4-03-reopened-fx_orders-full.yml`, `snapshot-t4-04-reopened-components-expanded.yml`.
  - T5: `snapshot-t5-01-webclient-start-fresh.yml`, `snapshot-t5-02-runtime-fx-orders-after-open.yml`, `snapshot-t5-03-runtime-after-f4-row1-fields.yml`, `snapshot-t5-04-runtime-order-2-fields.yml`.
- Screenshots (28 PNG, written by the screenshot tool at the worker's filename request):
  - T1 (4): `t1-01-designer-start-fx-orders-open-user-clean.png`, `t1-02-edit-string-filter-fx_s-before-cancel.png`, `t1-03-edit-string-fx_sAddress-positive-control-value.png`, `t1-04-fx-orders-open-captions-read-clean-before-stop.png`.
  - T2 (10): `t2-01-prompt-string-fx_scustomername-does-not-exist.png`, `t2-02-string-dialog-fx_scustomername-value-committed-before-ok.png`, `t2-03-prompt-string-fx_sitemdescription-does-not-exist.png`, `t2-04-string-dialog-fx_sitemdescription-value-committed-before-ok.png`, `t2-05-prompt-string-fx_sordertotal-does-not-exist.png`, `t2-06-string-dialog-fx_sordertotal-value-committed-before-ok.png`, `t2-07-edit-string-readback-fx_s-list-after-create.png`, `t2-08-edit-string-readback-fx_scustomername-value.png`, `t2-09-edit-string-readback-fx_sitemdescription-value.png`, `t2-10-edit-string-readback-fx_sordertotal-value.png`.
  - T3 (2): `t3-01-pre-save-fx_orders-dirty-user-scope-no-dialog.png`, `t3-02-post-save-immediate-response-fx_orders.png`.
  - T4 (4): `t4-01-pre-close-fx_orders-clean-user-scope-no-dialog.png`, `t4-02-after-close-once-fx_orders-tab-closed-no-prompt.png`, `t4-03-reopened-fx_orders-canvas-identity-user-clean.png`, `t4-04-reopened-components-grid-caption-fx_derordertotalstatic.png`.
  - T5 (8): `t5-01-webclient-start-usable-before-open.png`, `t5-02-select-form-dialog-before-fx_orders-choice.png`, `t5-03-select-form-filter-fx_orders-one-row.png`, `t5-04-runtime-fx_orders-opened-before-f4-mode.png`, `t5-05-runtime-fx_orders-after-fip-criteria-blank.png`, `t5-06-runtime-after-f4-blank-criteria-query-result.png`, `t5-07-runtime-order-2-fields.png`, `t5-08-runtime-fx_orders-after-close-once-no-prompt.png`.

**Controller-generated (not worker-written; present in the directory):** `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md`, `harness-audit-T5.md`.

**Tool-generated, outside the EXP-083 path (not enumerated, not worker-authored):** the Playwright page snapshot and console files under `evidence\playwright\`.

Totals: 16 snapshot YAML; 28 screenshot PNG; 2 worker-written markdown documents (the record and this report); 5 controller audits (not worker-written). Screenshot count matches the per-task counts (4, 10, 2, 4, 8).

## 6. Discrepancies and deviations (listed, not silently corrected)

- **D1 — T3 total corrected in the record.** The T3 record first stated 8 browser calls (cumulative 113). It was corrected in the record to 9 (cumulative 114) during T3; the T4 and T5 cumulative figures were built from the corrected value. The controller (2 actions + 7 reads = 9) confirms 9. Resolved; disclosed here.
- **D2 — T2 find count reconstructed.** The worker had no tool counter and reconstructed 30 finds. The controller confirms 30. Resolved.
- **D3 — Controller "prohibited-tool hits".** The controller's `prohibited-tool hits` equals the browser_type count: T1 1, T2 4, T5 1 (total 6). The controller labels these "flagged tool usage", and its note says flagged tools may be allowed by other briefs. Each call is accounted for in D9 and §6 below. None is an error.
- **D4 — Controller error, T1.** The controller's only error is a `Read` (non-browser) of the EXP-083 record path before the file existed; the Read returned "does not exist". The record was created afterwards in T1. This is not a browser error.
- **D5 — Controller "exact values" list.** All five audits show the same expected-value list, including T3 and T4 which typed nothing. The list appears to be the run's expected-value set rather than the text typed in each task. Each audit reports `exact mismatches=0`. This report does not treat the list as evidence that those values were typed in each task.
- **D6 — Console counts (tool output).** The tool reported Designer `2 errors, 0 warnings` and, from T5, Web Client `29 errors, 2 warnings`. These counts were not inspected (console inspection is not permitted). Recorded as tool output only.
- **D7 — Call sequencing in the response block.** In T1 to T5 the tab selection and the first snapshot were issued in one response block. The controller records them sequentially (list, then select, then snapshot), and no two browser actions ran concurrently in the controller's order. Disclosed as a process note.
- **D8 — Deviation (recent-forms open not repeated in T1).** FX_Orders was already open at T1 start, so the brief's recent-forms open step was not repeated. The postcondition (open, identified, clean) was established by observation. The controller shows no Form-menu click in T1, consistent with this.
- **D9 — Typed picker filter in T5.** The brief says "Do not type into any field, choose list values, press New or Save". At T5 one filter was typed (`FX_Orders`) into the Select Form picker dialog, and one picker row was selected, before the runtime opened. No runtime field received input. The controller flags the type call. The coordinator must decide whether this conflicts with the AC-4 wording "nothing typed".
- **D10 — Web Client Form menu used while IDO Properties was active.** The T5 Form menu click was made while the pre-existing IDO Properties tab was the active Form. No IDO Properties field was clicked or typed into. Controller lines 8–11 confirm this.
- **D11 — Designer URL parameter.** After the T1 Cancel of Global Objects the Designer URL lost `MGForm=FX_Orders`. The FX_Orders tab stayed selected. The parameter returned after the T4 reopen. No navigation call exists in any audit. The cause of the URL change is not established.
- **D12 — Displayed values versus stored values.** Cost and Order Total are verified only as displayed strings. The stored numbers were not read (see AC-4 limits).

## 7. Final state (as last observed; no browser call in T6)

- **Designer (tab 0):** FX_Orders open in the Designer. Last observed in T4 (clean, Save and Undo disabled, footer `ScopeType: User`, no dialog) and not re-read after T4, because T5 did not select the Designer. The Save count is 1 of 1 and was not invoked again. The Designer URL carries `MGForm=FX_Orders` from the T4 reopen. The Components grid and Details panel are expanded (view state).
- **Web Client (tab 1):** selected at the end of T5. Shows the IDO Properties tab (pre-existing, unchanged). The FX_Orders runtime tab is closed. The URL is `favoriteContext=IdoProperties`. No dialog. Its status bar reads `Filter in Place`.
- **Dialogs:** none open in either tab at the last observation.
- **Unsaved changes:** none known. The Designer was clean at its last observation (T4).

## 8. Documentation and unresolved items

- **Documentation changes in T6:** `evidence/EXP-083/T6-final-acceptance-report.md` (created) and `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md` (status header and a T6 section).
- **Unresolved, not claimed:**
  - Server-side or database persistence of the three strings and the Form definition. Only same-session UI behaviour is observed.
  - Whether the reopen reflects a client-side cache rather than the stored definition (no metadata unload was in scope).
  - Stored numeric values of Cost and Order Total, and the derived-value arithmetic beyond the displayed inputs.
  - Whether FX_ItmsPicture holds image data (its display is blank; the cause is not established).
  - Independent verification of the join mechanism for Customer Name, Address and Item Description.
  - The cause of the raw-to-resolved caption change between the T3 Save and the T4 reopen.
  - The cause of the Designer URL parameter change (D11).
  - The meaning of the Undo-disabled-with-Save-enabled state observed at the end of T2.
  - Property-level equality of the 31 components (only identity, type, binding and tab order were compared).
- **Repository confinement:** supported by the worker inventory in §5 and the controller inventories in this directory. Operator git review is authoritative. No git, shell or further browser inspection is requested for this purpose.

## 9. Knowledge state

| Finding | State |
|---|---|
| Three caption strings created through the Caption ellipsis, exact prompts, Yes, Tab before OK, exact readbacks | observed (one run; same session) |
| One Designer Save, native `Global object(s) were saved.`, Save and Undo disabled afterwards | observed (one run; same session) |
| One clean close (no prompt) and one recent-forms reopen; resolved captions on the canvas | observed (one run; same session; possibly cached client state) |
| 31 components match the EXP-082 T9 inventory by identity, type, binding and tab | observed (against the recorded inventory; not property-level) |
| Runtime Add mode, one transition to Filter in Place, one F4, two rows, nine fields per order as displayed | observed (one run; same session) |
| FX_ItmsPicture displays blank in both orders | observed (blank rendering only; data not established) |
| Stored numeric values; join mechanism; image data; persistence beyond the session | unresolved |
| Replay or database durability | not claimed (not replay_verified) |

## 10. Final statement

All five acceptance checks are supported at the observed, same-session UI and accessibility level, with the qualifications in §1, §4 and §6. Recommendation for coordinator review: **ACCEPTED AS OBSERVED**. The coordinator's decision points are D9 (typed picker filter against the AC-4 wording) and the depth of the AC-3 component check.
