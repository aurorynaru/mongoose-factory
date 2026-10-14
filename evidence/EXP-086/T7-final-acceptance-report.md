# EXP-086 — Final acceptance report (T7, documentation-only audit)

Experiment: EXP-086 — Hello World Part 5 Section 5 Step 8: clear the FX_Orders combobox Right-Click Menus and test the Item and Customer ID drill-downs.
Run: `R-20261014-144223-SAFC`. Cycle 6, task T7. Task message `570a58ab-b1eb-4c02-8c61-d105405ab733`. Worker session `b92f69ca-6bec-4614-b91b-e98c2b65b3c7`. Date 2026-10-14. Editing scope User. Mode LEARNING MODE.
Record: `experiments/EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md`.

**Browser calls in T7: 0. Mongoose changes in T7: 0.** This audit used only file reads and searches of the repository.

---

## 1. Recommendation

**ACCEPTED AS OBSERVED**, on the stated conditions in section 9. All five acceptance checks (AC-1 to AC-5) are supported by visible UI evidence and accessibility readings, recorded in the experiment record. Acceptance is for same-session observations only.

One correction is recorded in this audit. The T1 browser-call count in the record was 45; the harness controller log shows 46 (the T1 record omitted a final `browser_find` run after the record edits). The corrected cumulative total is **191**, not 190. No acceptance check depends on this count. Section 5 gives the reconciliation.

---

## 2. Sources reviewed (T7)

| Source | How read in T7 | Used for |
| --- | --- | --- |
| `experiments/EXP-086-…md` (the record) | Searched for section headers, status lines and the T1 count lines (read-only search). The T1–T6 sections were reviewed as written in the session. | Per-task statements, counts and evidence references. |
| `evidence/EXP-086/harness-audit-T1.md` … `harness-audit-T6.md` | Read in full (six files). Controller-generated (their first line reads "controller-generated audit (not worker prose)"). | Independent comparison of tool-call counts, keys, errors and exact values. |
| `evidence/EXP-086/` directory listing | `Glob` (read-only). | Worker-written file inventory and existence of every cited evidence file. |
| `evidence/playwright/` listing | `Glob` (read-only), counted by timestamp window. | Tool-written logs and repository confinement. |
| Earlier source reviews (AGENTS.md; `hello-world-pt5.md` Sections 4–6; EXP-085 outcome; EXP-069-R2 T6–T8; EXP-069-R4 outcome; EXP-083 T5) | Completed in T1, T2 and T4 (see the record). Not re-read in T7. | Background only. |

Not read: `tools/` and `briefs/` (unreadable by instruction). No git and no shell were used.

---

## 3. Acceptance reconciliation

Each acceptance check is reconciled on its own. "Observed" means a visible UI state or accessibility reading in the stated session. None of these is a database or cross-session result.

### AC-1 — Sources reviewed; session usable; Designer User-scoped and clean; both comboboxes' values; Help-only runtime baseline. **SUPPORTED.**

- **Sources and session.** The sources are listed in the record (T1, T2, T4). The session stayed usable; there was no Session Expired modal, no sign-in page and no portal banner. The session-expiry procedure was not invoked; re-login count 0.
- **Designer User scope and clean.** Observed at the T1 start (`preflight-01`, `preflight-02`; footer `ScopeType: User`, Save and Undo disabled), at the T2 start (harness T2 row 9–10 snapshot and find; `t2-00`), at T3 start (`t3-00`), and at T6 end (`t6-03`).
- **Combobox values (Designer, before any change).**
  - FX_ItemCombobox: Binding `object.FX_Item`; Inheritance `FX_Item` (both rows); Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault`. Evidence: `preflight-01` (Behavior values visible in frame); the Inheritance rows lie below the frame and were read by accessibility.
  - FX_CustomerIDCombobox: Binding `object.FX_CustomerID`; Inheritance `FX_CustomerID` (both rows); Add/Details Form, Find Form, Property blank; Right-Click Menu `StdDefault`. Evidence: `preflight-02`; Inheritance by accessibility.
- **Baseline runtime menus on order 1, no item chosen.** Item combobox: `Help` only (`rt-04`). Customer ID combobox: `Help` only (`rt-05`). Each was dismissed with one Escape (not dismissed) and one blank-area click (dismissed). No menu item was chosen.
- **Limits.** The Inheritance rows are accessibility readings, not visible in the screenshots. Escape did not dismiss either runtime menu in T1 (or later); this is observed behaviour.

### AC-2 — Both component-level Right-Click Menus cleared; other values unchanged; exactly one Designer Save with its verbatim native response; both blank after one Designer close/reopen. **SUPPORTED** (same-session UI observation).

- **Clears: exactly two.** FX_ItemCombobox: one click on the highlighted `StdDefault` (focus), one Delete, one Tab; readback blank (`t2-01` before, `t2-02` after; accessibility value cell `e2106` with no text). FX_CustomerIDCombobox: the same sequence (`t2-03` before, `t2-04` after; value cell `e2887` with no text). No value was typed or chosen from a menu list.
- **Other values unchanged.** Before the clears (T2 start), Binding, Inheritance (both rows), Add/Details Form, Find Form and Property matched the T1 baseline. After the reopen (T3), the same rows were read again for both comboboxes (`t3-05`, `t3-06`), and Component Class and its parameters were blank. Only the Right-Click Menu had changed.
- **Exactly one Designer Save.** Harness T2 row 35: one click on the native toolbar Save. Native response, verbatim, from the toast (`t2-05`; find result): **`Form [FX_Orders] and global object(s) were saved.`** Afterwards Save and Undo were disabled. Save was not retried.
- **Customer ID rows after the Save.** The Customer ID Binding and Inheritance rows were not read until T3 (after the reopen); this gap is closed by the T3 readback (see section 8, D-5).
- **One Designer close/reopen.** Close through the Form-tab control: no prompt (`t3-01`). Reopen through Form > recent-forms FX_Orders: clean, User scope, no dialog (`t3-02`). After the reopen both Right-Click Menus read blank (`t3-05` for Item; `t3-06` for Customer ID).
- **Limits.** The Save is a UI acknowledgment, not a database read. The reopen is a client-side Designer reopen in the same browser session; it is not a new session or a server cache boundary. "Other values unchanged" covers the rows enumerated above, not every property of the components (for example Caption and Tab Order were visible only partly in the frames). The toast names the Form; the EXP-085 toast read `Global object(s) were saved.` (noted, not interpreted).

### AC-3 — After one runtime close/reopen and one blank-criteria F4, the Item and Customer ID menus on order 1 each offer Details, Add and Find; unload used at most once and only under its condition. **SUPPORTED** (same-session UI observation). Unload count **0**.

- **Runtime close and reopen (T4).** Clean close through the runtime tab control, no prompt (`t4-01`). Reopen through Form > Open > Select Form (FX_Orders row, OK); add-mode placeholder (`t4-02`); Filter in Place switched once.
- **One blank-criteria F4 (T4).** Two rows; order 1 = FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, count 2, total 90.00 (`t4-03`).
- **Item combobox menu on order 1.** Verbatim, in order: `Add...`, `Details...`, `Find...`, `Help` (`t4-04`). The menu was dismissed with one Escape (not dismissed) and one blank-area click; no command was chosen.
- **Customer ID combobox menu on order 1.** Verbatim, in order: `Add...`, `Details...`, `Find...`, `Help` (`t4-05`). Dismissed the same way.
- **Re-observed before the Details choices (T5).** `t5-02` (Item) and `t5-05` (Customer ID) show the same four commands.
- **Contingency unload.** Condition: "only if the runtime check shows no Details, Add or Find on a combobox." Condition not met. Unload count **0** (Web Client); Designer unload 0.
- **Limits.** One runtime open. The menus were observed in the same session. The attribution of these commands to the extension's `StdDetailsAddFind` is consistent with the observations (the component values were blank, and the extension values were read back in EXP-085) but was not separately isolated (for example by restoring the component value). `Help` is an additional command; the brief allows it.

### AC-4 — Details on the Item combobox opens FX_Items on dumbbell (45 pound iron); Details on the Customer ID combobox opens FX_HelloWorld01 on FX001; both drill-down Forms closed clean; FX_Orders still clean on order 1; closed once at the end. **SUPPORTED** (same-session UI observation).

- **Item drill-down.** One right-click (`t5-02` shows the menu with Details... visible), one Details... choice. The `FX_Items` tab opened as the third tab, selected. Record: Item `dumbbell`; Description `45 pound iron`; Cost `45.00`; UM `EA` (`Each`); status `Description (Object 1 of 1)`; Save disabled (`t5-03`). Closed once with its own tab control; no prompt (`t5-04` shows FX_Orders selected on order 1).
- **Customer ID drill-down.** One right-click (`t5-05`), one Details... choice. The `FX_HelloWorld01` tab opened as the third tab, selected. Visible values: Name `Factory test one`; ID `FX001`; Address `1 Factory Street`; status `(Object 1 of 1)`; Save disabled (`t5-06`). Closed once with its own tab control; no prompt (`t5-07` shows FX_Orders selected on order 1, pre-close).
- **FX_Orders clean on order 1 before the final close.** `t5-07`, `t6-01`: FX001 / dumbbell / 45 pound iron; Save disabled; no menu or dialog.
- **Final close in T6.** One click on the runtime tab control. No prompt (`t6-02`: only the pre-existing IDO Properties Form remains; no FX_Orders tab). The No answer to a save-new-record prompt was not needed and was not given (count 0).
- **Limits.** The drill-down values were read from visible frames and accessibility; the stored record was not queried. The lookup mechanism (how the combobox value identifies the record) was not established. The drill-down "mode" is a record view with `Object 1 of 1`, not a named mode. The Form-level values of FX_Orders after the close were not re-read beyond the visible frame.

### AC-5 — Final report: decisive evidence for AC-1 to AC-4, complete action audit with exact counts, worker-written file inventory, final state. **SUPPORTED** (this report and the record's T7 section), with the T1 count correction in section 5.

Sections 4 to 9 provide the audit, inventory, confinement assessment, final state and classifications.

---

## 4. Browser-action audit, reconciled to the harness

### 4.1 Per-task totals (record versus harness controller log)

| Task | Record total (as written) | Harness controller log | Actions (clicks, keys, mouse, selects) | Reads (list, snapshots, finds, screenshots) | Match |
| --- | --- | --- | --- | --- | --- |
| T1 | 45 | **46** | 16 (clicks 9, keys 3, mouse 2, selects 2) | 30 (list 1, snapshots 2, finds 19, screenshots 8) | **No**: record omitted one final find (corrected here) |
| T2 | 31 | 31 | 11 (clicks 6, keys 4, select 1) | 20 (list 1, snapshot 1, finds 12, screenshots 6) | Yes |
| T3 | 39 | 39 | 11 (clicks 9, key 1, select 1) | 28 (list 1, snapshot 1, finds 20, screenshots 6) | Yes |
| T4 | 38 | 38 | 14 (clicks 8, keys 3, mouse 2, select 1) | 24 (list 1, snapshot 1, finds 16, screenshots 6) | Yes |
| T5 | 26 | 26 | 7 (clicks 6, select 1) | 19 (list 1, snapshot 1, finds 10, screenshots 7) | Yes |
| T6 | 11 | 11 | 3 (click 1, selects 2) | 8 (list 1, snapshot 1, finds 3, screenshots 3) | Yes |
| **Total** | **190 (record)** | **191** | **62** | **129** | **Corrected total 191** |

The harness log states, for every task: prohibited-tool hits 0, flagged tool usage none, exact mismatches 0. Errors: T1 2 (both non-browser tool errors; section 8, D-1); T2–T6 0.

### 4.2 Corrected cumulative categories (EXP-086, T1–T6)

| Category | Expected in brief | Verified (record and harness) |
| --- | --- | --- |
| Tab lists | 6 | 6 |
| Tab selects | 8 | 8 (T1 2, T2 1, T3 1, T4 1, T5 1, T6 2) |
| Untargeted snapshots | 7 | 7 (T1 2, T2–T6 1 each) |
| Finds | 79 (record) | **80** (T1 19, not 18; the harness T1 log lists 19 `browser_find` calls) |
| Screenshots | 36 | 36 (T1 8, T2 6, T3 6, T4 6, T5 7, T6 3) |
| Element clicks | 39 | 39 (T1 9, T2 6, T3 9, T4 8, T5 6, T6 1) |
| Coordinate clicks | 4 | 4 (T1 2, T4 2) |
| Key presses | 11 | 11 (T1 3, T2 4, T3 1, T4 3) |
| **Total** | **190 (record)** | **191** = 62 actions + 129 reads |

Cross-checks that do not depend on the prose totals:
- 62 actions = 39 element clicks + 4 coordinate clicks + 11 key presses + 8 tab selects.
- 129 reads = 6 tab lists + 7 snapshots + 80 finds + 36 screenshots.
- 36 screenshot calls produced 36 PNG files in `evidence/EXP-086/` (one file per call, distinct names).
- 7 snapshot calls produced 7 YAML files in `evidence/EXP-086/` (each snapshot was called with a filename).

### 4.3 Operation counts (cumulative, T1–T6)

| Operation | Expected | Verified | Evidence |
| --- | --- | --- | --- |
| Right-Click Menu clears | 2 | **2** | T2 harness rows 14–22 and 26–30: one Delete and one Tab per combobox |
| Designer Save | 1 | **1** | T2 harness row 35 (native toolbar Save click) |
| Designer close / reopen | 1 / 1 | **1 / 1** | T3 harness row 5 (Form-tab close) and row 11 (recent-forms reopen) |
| Runtime FX_Orders opens | 2 | **2** | T1 rows 37–42 (Form > Open > Select Form); T4 rows 10–16 |
| Runtime FX_Orders closes | 2 | **2** | T4 row 7 (close, clean); T6 row 7 (final close) |
| Runtime F4 (blank criteria) | 2 | **2** | T1 harness row 49; T4 harness row 22 |
| Runtime right-clicks | 6 (3 per combobox) | **6** | Item: T1 row 53, T4 row 26, T5 row 7. Customer ID: T1 row 62, T4 row 35, T5 row 21 |
| Details selections | 2 (1 per combobox) | **2** | T5 row 11 (Item) and row 25 (Customer ID) |
| Add selections | 0 | **0** | No click on an `Add...` item in any harness row |
| Find selections | 0 | **0** | No click on a `Find...` item in any harness row |
| Drill-down Forms opened | 2 | **2** | T5 (FX_Items; FX_HelloWorld01) |
| Drill-down Forms closed | 2 | **2** | T5 rows 15 (FX_Items) and 30 (FX_HelloWorld01); clean |
| Escapes / blank-area dismissals | 4 / 4 | **4 / 4** | T1 rows 57, 66 and 59, 68; T4 rows 30, 39 and 32, 41 |
| Web Client unloads | 0 (budget 1, contingency only) | **0** | No unload element in any harness row; condition not met |
| Designer unloads | 0 | **0** | None |
| Runtime edits, typed text, runtime New/Save/Delete | 0 | **0** | No `browser_type` call in any harness row; key presses limited to F4, Escape, Delete/Tab (Designer) and ArrowRight (Designer) |
| Other component or property changes | 0 (two Right-Click Menu clears only) | **0** | The Delete/Tab pairs occur only in T2 (the two clears); the T3 ArrowRight moved focus only; Components-row selections and tree expansions are view state |
| Save-new-record prompts answered No | 0 | **0** | No such prompt occurred (T4 and T6 closes raised none) |
| Checkout, check-in, undo checkout | 0 | **0** | None |
| Re-logins | 0 | **0** | None; session-expiry procedure not invoked |
| Designer Save retries | 0 | **0** | Only one Save click (harness T2 row 35) |

---

## 5. Audit reconciliation note (the T1 count correction)

- **What differed.** The record's T1 audit listed 45 browser calls and 18 finds. The harness T1 log lists 46 browser calls and 19 finds. The extra call is a `browser_find` run at the end of T1, after the record was written and corrected, which checked that the Web Client had no open menu or dialog. The T1 audit table was not updated to include it.
- **Correction made.** The record's T1 audit now carries an erratum (T1 total 46; finds 19). The corrected cumulative total is **191** (not 190); the corrected finds total is **80** (not 79). No other category changed.
- **Effect.** None on any acceptance check. The earlier cumulative tables in the T2–T6 sections still show the superseded totals; this report and the record's T7 section give the corrected values.

---

## 6. Worker-written file inventory

### 6.1 Through T6 (as previously reported)

| Task | Files | Paths |
| --- | --- | --- |
| T1 (10 evidence + record) | 10 evidence + the record (created) | `evidence/EXP-086/t1-00-designer-fresh-snapshot-start.yml`; `preflight-01-designer-fx-itemcombobox-properties.png`; `preflight-02-designer-fx-customeridcombobox-properties.png`; `rt-00-webclient-fresh-snapshot-baseline.yml`; `rt-00-webclient-before-baseline.png`; `rt-01-baseline-fx-orders-opened.png`; `rt-02-baseline-fx-orders-filter-in-place.png`; `rt-03-baseline-after-f4-blank-query.png`; `rt-04-baseline-item-combobox-right-click-menu.png`; `rt-05-baseline-customerid-combobox-right-click-menu.png` |
| T2 (7) | `t2-00-designer-fresh-snapshot-start.yml`; `t2-01` to `t2-06` PNG | |
| T3 (7) | `t3-00-designer-fresh-snapshot-before-close.yml`; `t3-01` to `t3-06` PNG | |
| T4 (7) | `t4-00-webclient-fresh-snapshot-before-close.yml`; `t4-01` to `t4-06` PNG | |
| T5 (8) | `t5-00-webclient-fresh-snapshot-start.yml`; `t5-01` to `t5-07` PNG | |
| T6 (4) | `t6-00-webclient-fresh-snapshot-before-final-close.yml`; `t6-01` to `t6-03` PNG | |
| **Evidence subtotal** | **43** (36 PNG, 7 YAML) | all under `evidence/EXP-086/` |
| Record | 1 (created in T1; updated T2–T7) | `experiments/EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md` |
| **Subtotal through T6** | **44** (1 record + 43 evidence) | |

### 6.2 Added by T7

| File | Status |
| --- | --- |
| `evidence/EXP-086/T7-final-acceptance-report.md` | Created in T7 (this report). |
| `experiments/EXP-086-…md` | Updated in T7 (T7 status line; T1 erratum; T7 section). Not a new file. |

**Total worker-created files for EXP-086 through T7: 45** (1 record, 43 evidence files through T6, and this T7 report).

### 6.3 Files in the EXP-086 evidence directory that the worker did not write

- `evidence/EXP-086/harness-audit-T1.md` … `harness-audit-T6.md` (six files). Controller-generated audits (each begins "controller-generated audit (not worker prose)"). Not counted as worker-written.

### 6.4 Tool-written logs (outside the EXP-086 path)

- The browser tool wrote page snapshots and console logs under `evidence/playwright/`. Within the EXP-086 time window (console `…2026-10-14T06-42-58…` to `…2026-10-14T07-02-18…`) there are **50** such files by timestamp (43 page snapshots and 7 console logs). They are not in `evidence/EXP-086/` and were not written by the worker. Earlier entries in `evidence/playwright/` belong to other experiments. Attribution is by timestamp only.

---

## 7. Repository confinement assessment

- **Worker-written paths.** From the worker inventories (section 6.1–6.2), every file the worker wrote is either the EXP-086 record (`experiments/EXP-086-…md`) or a file under `evidence/EXP-086/`. The worker wrote no other file, did not run git, and used no shell or script.
- **Controller-written paths inside the EXP-086 directory.** The six `harness-audit-T*.md` files were written by the harness, not the worker.
- **Tool-written paths outside the EXP-086 directory.** The browser tool wrote about 50 log and snapshot files under `evidence/playwright/` during EXP-086 (section 6.4). These are outside the EXP-086 path, but the worker did not author them. They are a known confinement consideration of this environment.
- **Harness call-level safety.** The harness log for all six tasks shows no prohibited-tool hits and no flagged-tool use. Exact mismatches are 0 in every task.
- **Authority.** The operator's git review is authoritative for repository confinement. This assessment is based on the worker inventories and the harness audits only. No git or shell access was requested or used.

---

## 8. Discrepancies and deviations

| ID | Description | Material to acceptance? | Status |
| --- | --- | --- | --- |
| D-1 | T1 record count: 45 browser calls and 18 finds; harness log 46 and 19 (a final post-edit `browser_find` omitted from the table). | No. Count only. | **Corrected** (record erratum; cumulative 191 and finds 80). |
| D-2 | T1 harness log lists two non-browser tool errors: a `Grep` with a wrong file name (the EXP-069-R2 record was typed under a shorter name and not found) and one `Edit` whose old string did not match (fixed by a second `Edit`). Neither touched Mongoose or the browser. The T1 record's "browser errors 0" is accurate for the browser. | No. | Recorded here; not corrected in the record. |
| D-3 | In the opening block of several tasks (T1, T3, T4, T5, T6) a tab select was issued in the same response block as a read-only snapshot or find. The brief forbids parallel browser actions; a tab select is navigation, and the snapshot/find was read-only. The harness log gives sequential order numbers and reports no parallel mutation. | No. No mutation was parallelized. | Disclosed here (procedural note). |
| D-4 | The Save toast names the Form (`Form [FX_Orders] and global object(s) were saved.`); the EXP-085 toast read `Global object(s) were saved.` | No. Observed difference. | Recorded; not interpreted. |
| D-5 | The Customer ID Binding and Inheritance rows were not read immediately after the T2 Save; they were read after the T3 reopen. | No. Reconciled in T3 (`t3-06`, accessibility). | Closed. |
| D-6 | "Other values unchanged" covers the enumerated rows (Binding, Inheritance, Add/Details, Find, Property, Component Class), not every component property. | Limits the AC-2 claim to those rows. | Stated as a limit. |
| D-7 | The drill-down "mode" is a record view (`Object 1 of 1`), not a named mode; the FX_Orders status bar shows record position, not mode. | No. Limit on the mode wording. | Stated as a limit. |
| D-8 | The T5 record notes a tab select and snapshot in one block (disclosed in T5). | No. | Covered by D-3. |
| D-9 | The Item combobox's Right-Click Menu and Binding were read after the T3 reopen (`t3-05`) and not again in T6 beyond the frame; the T6 frame (`t6-03`) shows the Customer ID value. | No. Limit on the T6 readback. | Stated as a limit. |

No discrepancy affects an acceptance check.

---

## 9. Final state

**Runtime (tab 1):**
- FX_Orders runtime tab: **closed** (final close in T6, one click; no prompt; no save-new-record prompt).
- The pre-existing `IDO Properties` Form is the only runtime tab, selected, untouched; status `Filter in Place`.
- No menu, dialog, alertdialog or unresolved prompt.
- FX_Items and FX_HelloWorld01: closed.

**Designer (tab 0):**
- FX_Orders Form: open, **clean** (Save, Undo and Regenerate Form disabled), `ScopeType: User`, no dialog.
- Selected component: FX_CustomerIDCombobox (view state).
- Right-Click Menu: blank on FX_ItemCombobox (`t3-05`, `t2-06`) and on FX_CustomerIDCombobox (`t3-06`, `t6-03`).
- Binding and Inheritance: `object.FX_Item` / `FX_Item` and `object.FX_CustomerID` / `FX_CustomerID` (T3 readbacks).
- Not edited, saved, closed or reopened in T6 or T7.

**Extensions:** FX_Item, FX_CustomerID and FX_UM were not changed by EXP-086. FX_UM was not re-read or verified field by field in this experiment.

---

## 10. Knowledge classification (observed only)

| Finding | Classification |
| --- | --- |
| Designer FX_Orders was User-scoped and clean at T1, T2, T3 and T6 starts/ends | observed (same session) |
| Before the change, both combobox Binding, Inheritance and Behavior values matched expectations, with Right-Click Menu `StdDefault` | observed |
| Baseline runtime Item and Customer ID menus on order 1 offered `Help` only (no item chosen) | observed (one run each) |
| Focus, one Delete and one Tab cleared each component Right-Click Menu to blank | observed (one run each) |
| One native Designer Save returned `Form [FX_Orders] and global object(s) were saved.` | observed (one run) |
| After one Designer close (no prompt) and one recent-forms reopen, both Right-Click Menus were blank and the other enumerated values unchanged | observed (one run; same session) |
| After one runtime close/reopen and one blank-criteria F4, Item and Customer ID menus on order 1 offered `Add...`, `Details...`, `Find...`, `Help` | observed (one run; same session) |
| Details on the Item combobox opened FX_Items on dumbbell (45 pound iron) in a new tab | observed (one run) |
| Details on the Customer ID combobox opened FX_HelloWorld01 on FX001 in a new tab | observed (one run) |
| Both drill-down tabs closed with their own controls and no prompt | observed (one run each) |
| FX_Orders closed once in T6 with no prompt | observed (one run) |
| The runtime menu commands arise from the extension's `StdDetailsAddFind` (causal attribution) | **candidate_procedure** (consistent with the observations and EXP-069-R4; not isolated in EXP-086) |
| The lookup mechanism by which the combobox value identifies the drill-down record | **unresolved** |
| Escape does not dismiss a runtime context menu; one blank-area click does | observed (four Escape presses in T1 and T4) |
| Persistence of the changes (database) or across a server or session boundary | **unresolved**: not tested; no replay verification and no cross-session durability are claimed |
| FX_UM state after EXP-086 | **unresolved** (not re-read; not edited by the worker) |
| Replay verification of any finding | none (no finding is replay_verified) |

---

## 11. Conditions on the recommendation

1. All acceptance results are same-session UI observations. No database durability, server persistence, cross-session persistence or replay verification is established or claimed.
2. Causal attribution of the runtime command set to `StdDetailsAddFind` is consistent with the observations but was not isolated.
3. The drill-down lookup mechanism and the stored record were not queried; drill-down values come from the visible frames and accessibility.
4. FX_UM was not edited and was not re-read in this experiment.
5. Repository confinement is judged from the worker inventories and harness audits. The operator's git review is authoritative. Tool-written logs under `evidence/playwright/` lie outside the EXP-086 path (section 7).
6. The T1 count correction (section 5) is recorded; the harness log and this report now agree on all six tasks.

---

## 12. Evidence index (decisive files)

- AC-1: `preflight-01-designer-fx-itemcombobox-properties.png`, `preflight-02-designer-fx-customeridcombobox-properties.png`, `rt-04-baseline-item-combobox-right-click-menu.png`, `rt-05-baseline-customerid-combobox-right-click-menu.png`.
- AC-2: `t2-01`, `t2-03` (before clears); `t2-02`, `t2-04` (after clears); `t2-05` (Save toast, clean state); `t2-06` (Item blank after Save); `t3-01` (close, no prompt); `t3-02` (reopen); `t3-05`, `t3-06` (post-reopen Behavior values).
- AC-3: `t4-01` (pre-close), `t4-02` (reopen, add-mode), `t4-03` (F4 result, order 1), `t4-04` (Item menu), `t4-05` (Customer ID menu); `t5-02`, `t5-05` (same menus before Details).
- AC-4: `t5-03` (FX_Items on dumbbell), `t5-04` (after FX_Items closed), `t5-06` (FX_HelloWorld01 on FX001), `t5-07` (order 1 before final close), `t6-01` (pre-close), `t6-02` (after final close), `t6-03` (Designer final).
- Harness audits (controller-generated): `harness-audit-T1.md` to `harness-audit-T6.md`.

---

## 13. Remaining acceptance gaps

None of the acceptance checks is outstanding. The gaps that remain are the limits in section 11: same-session scope, unisolated causal attribution, unqueried stored data, FX_UM not re-verified, and the operator's git review of confinement.
