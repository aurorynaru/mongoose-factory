# EXP-085 — T7 final acceptance report (documentation only)

Run `R-20261014-133538-PdTc`, experiment EXP-085, cycle 6, task T7, task_message_id `8884edc5-2078-4f49-9b2e-802cc546a221`, worker session `a11950eb-dcb4-409d-8d31-8c71e3eeead3`. Date 2026-10-14.

**T7 performed zero browser calls and made no Mongoose change.** It reviewed the EXP-085 record, the saved evidence files, and the harness audit files in `evidence/EXP-085/`. Where a screenshot is cited below, it was opened and inspected in this task (Read); where a claim rests on an accessibility snapshot, the file was searched (Grep) for the stated lines.

**Scope limit:** all conclusions are observations within one browser session in the Designer UI. They do not establish database durability, server persistence, runtime drill-down behaviour, or replay verification.

---

## 1. Result summary

| AC | Observed result | Recommendation |
| --- | --- | --- |
| AC-1 | Sources reviewed; session usable; Designer FX_Orders in User scope and clean at T1; FX_UM present in the extension list; FX_Item and FX_CustomerID absent before creation (corroborated by the "does not exist" prompts in T2 and T3); both comboboxes bound to `object.FX_Item` / `object.FX_CustomerID` with Inheritance `FX_Item` / `FX_CustomerID`; component Behavior recorded (Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault`). | **Pass, with two disclosed gaps** (see §6): FX_Orders was not re-opened through the recent-forms entry in T1 (it was already open), and the extension list was checked by its rendered slices rather than enumerated in full. |
| AC-2 | FX_Item: one ellipsis click; one Yes to the exact prompt; four values committed with one Tab each; four values visible before one OK; OK closed the dialog with no alert. | **Pass.** |
| AC-3 | FX_CustomerID: one ellipsis click; one Yes to the exact prompt; four values committed with one Tab each; four values visible before one OK; OK closed the dialog with no alert. | **Pass.** |
| AC-4 | Pre-Save readback of all eight values (T4) matches; exactly one native Designer Save (T5), acknowledgement `Save` / `Global object(s) were saved.`; no corrections; post-reopen readback of all eight values (T6) matches. | **Pass, with one note:** no readback was taken between the Save and the close (T5 forbade readbacks); the first post-Save readback is the post-reopen one in T6. |
| AC-5 | Clean close (no prompt) and one reopen via recent-forms; post-reopen readback matches all eight values; both comboboxes' component Behavior unchanged between T1 and T6; FX_UM present and not edited. | **Partial.** Items 1–4 pass. "FX_UM unchanged" is supported only as *presence and no worker edit*; no FX_UM field was read in any task, so field-level equality is not established (see §4.3). |
| AC-6 | Final report data complete: audit counts reconcile with harness logs (§5); inventory reconciles (§6); final state recorded (§7). | **Pass**, subject to the AC-5 FX_UM gap. |

**Overall recommendation for coordinator review: ACCEPTED AS OBSERVED** (same-session Designer UI observations), with the FX_UM field-level equality gap stated explicitly. No required step failed; nothing was BLOCKED. The operator may instead want a read-only FX_UM field readback in a separate bounded task; that was not done here (T7 makes no browser calls).

---

## 2. Reconciliation of the T6 FX_CustomerID four-field screenshots

The T6 record cited two FX_CustomerID captures. The filenames suggest the opposite of what they show, so the image contents were checked directly.

| File | What the saved image actually shows (inspected in T7) | Fields visible in this frame |
| --- | --- | --- |
| `evidence/EXP-085/t6-10-FX_CustomerID-scrolled-three-fields-after-reopen.png` | Global Objects open; FX_CustomerID selected in the list; Properties scrolled: Add/Details Form `FX_HelloWorld01`; Find Form `FX_HelloWorld01`; Property `FX_Code`; Right-Click Menu `StdDetailsAddFind`; FX_UM row visible in the list. | **All four** Behavior/Add-Details values. Name and Version are scrolled out. |
| `evidence/EXP-085/t6-09-FX_CustomerID-four-fields-after-reopen.png` | Global Objects open; FX_CustomerID selected; Design group: Name `FX_CustomerID`; Version `User version for user …`; Add/Details Form `FX_HelloWorld01` (Find Form row cut off at the bottom edge). | Name, Version and Add/Details Form. |

**Conclusion:**
- The filename `t6-10-…-scrolled-three-fields…` is **misleading**: that frame shows four values, not three. The `t6-09-…-four-fields…` filename is also misleading: that frame shows three of the four Behavior/Add-Details values plus Name and Version. Neither filename should be relied on.
- The **single saved image that establishes the four extension fields together is `t6-10`**. The **Name and Version** of FX_CustomerID are established by `t6-09` (image) and by `t6-08` (accessibility snapshot, see below).
- The accessibility snapshot `evidence/EXP-085/t6-08-FX_CustomerID-selected-after-reopen-snapshot.yml` contains, in one file, all six lines the record cites: gridcell `FX_CustomerID` (line 236, Name), `User version for user …` (line 256, Version), `FX_HelloWorld01` (line 322, Add/Details), `FX_HelloWorld01` (line 332, Find), `FX_Code` (line 342, Property), `StdDetailsAddFind` (line 363, Right-Click Menu). This is the only file that establishes all eight FX_CustomerID observations together, and it is a text record, not a frame.
- The T6 record's audit-table row 32 describes `t6-10` as showing "Find, Property, Right-Click". That description omits Add/Details, which is also in the frame. The record's screenshot-evidence section is correct; the audit row is corrected in the record (see §8).

---

## 3. Name/version evidence kept separate from four-field evidence (T6)

| Extension | Name | User version | Four Behavior/Add-Details fields in one frame |
| --- | --- | --- | --- |
| FX_Item | `t6-06` image (Name `FX_Item`; Version `User version for us…`; Add/Details `FX_Items`); `t6-05` accessibility (Name line 236; Version line 256) | `t6-06` image; `t6-05` line 256 | `t6-07` image: Add/Details `FX_Items`, Find `FX_Items`, Property `FX_Item`, Right-Click `StdDetailsAddFind` (Name not in this frame). `t6-05` lines 322, 332, 342, 363 agree. |
| FX_CustomerID | `t6-09` image; `t6-08` accessibility (Name line 236; Version line 256) | `t6-09` image; `t6-08` line 256 | `t6-10` image (see §2); `t6-08` lines 322, 332, 342, 363 agree. |

The "User version" value is read as `User version for user …`. The username is deliberately not copied into any file.

---

## 4. Before and after close/reopen

### 4.1 Eight-field comparison (plus Name and Version)

"Before" is the last readback before the Save (T4, pre-Save, same session). The Save happened in T5. "After" is the readback after close and reopen (T6). No readback was taken between the Save and the close, so "before" is pre-Save, not immediately pre-close.

| # | Extension | Field | Before (T4, pre-Save) | After (T6, post-reopen) | Match | Sources |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | Name | `FX_Item` | `FX_Item` | yes | T4 `t4-05` line 236; T6 `t6-05` line 236 |
| 2 | FX_Item | Version | User version | User version | yes | T4 `t4-05` line 256; T6 `t6-05` line 256 |
| 3 | FX_Item | Add/Details Form | `FX_Items` | `FX_Items` | yes | `t4-05` 322; `t6-05` 322; image `t6-07` |
| 4 | FX_Item | Find Form | `FX_Items` | `FX_Items` | yes | `t4-05` 332; `t6-05` 332; image `t6-07` |
| 5 | FX_Item | Property | `FX_Item` | `FX_Item` | yes | `t4-05` 342; `t6-05` 342; image `t6-07` |
| 6 | FX_Item | Right-Click Menu | `StdDetailsAddFind` | `StdDetailsAddFind` | yes | `t4-05` 363; `t6-05` 363; image `t6-07` |
| 7 | FX_CustomerID | Name | `FX_CustomerID` | `FX_CustomerID` | yes | T4 `t4-07`; T6 `t6-08` line 236; image `t6-09` |
| 8 | FX_CustomerID | Version | User version | User version | yes | T4 `t4-07`; T6 `t6-08` line 256; image `t6-09` |
| 9 | FX_CustomerID | Add/Details Form | `FX_HelloWorld01` | `FX_HelloWorld01` | yes | `t4-07` 322; `t6-08` 322; image `t6-10` |
| 10 | FX_CustomerID | Find Form | `FX_HelloWorld01` | `FX_HelloWorld01` | yes | `t4-07` 332; `t6-08` 332; image `t6-10` |
| 11 | FX_CustomerID | Property | `FX_Code` | `FX_Code` | yes | `t4-07` 342; `t6-08` 342; image `t6-10` |
| 12 | FX_CustomerID | Right-Click Menu | `StdDetailsAddFind` | `StdDetailsAddFind` | yes | `t4-07` 363; `t6-08` 363; image `t6-10` |

Twelve observations (the brief's "eight values" are the four fields of each extension; Name and Version were read in addition). All match. The T4 accessibility line numbers cited are from `t4-05` and `t4-07`, which were searched in T4 with the same structure as T6.

### 4.2 Component Behavior, T1 (preflight) versus T6 (after reopen)

| Component | Field | T1 (before creation) | T6 (after reopen) | Evidence |
| --- | --- | --- | --- | --- |
| FX_ItemCombobox | Binding | `object.FX_Item` (Property) | `object.FX_Item` (Property) | T1 `gate-04-…properties-before-expand.png` (Binding Type `Property`, Binding `object.FX_Item`); T6 `t6-13` image (components row `FX_ItemCombobox ComboBox object.FX_Item 1 20`); Properties Binding `object.FX_Item` from T6 find output (not saved as a file) |
| FX_ItemCombobox | Inheritance: View Attributes / Edit Property Class Extension | `FX_Item` / `FX_Item` | `FX_Item` / `FX_Item` | T1 `gate-05-…inheritance-expanded.png` and find output; T6 accessibility only (**no saved file**; see §4.4) |
| FX_ItemCombobox | Behavior: Add/Details Form / Find Form / Property | blank / blank / blank | blank / blank / blank | T1 `gate-04-…addfind-expanded.png`; T6 `t6-13` image |
| FX_ItemCombobox | Behavior: Right-Click Menu | `StdDefault` | `StdDefault` | T1 `gate-04-…behavior-expanded.png`; T6 `t6-13` image |
| FX_CustomerIDCombobox | Binding | `object.FX_CustomerID` (Property) | `object.FX_CustomerID` (Property) | T1 `gate-06-…selected-properties.png` (components row `FX_CustomerIDCombobox ComboBox object.FX_CustomerID 1 14`); T6 `t6-14` image (components row `object.FX_CustomerID`) |
| FX_CustomerIDCombobox | Inheritance: View Attributes / Edit Property Class Extension | `FX_CustomerID` / `FX_CustomerID` | `FX_CustomerID` / `FX_CustomerID` | T1 `gate-06-…inheritance-before-expand.png` (View Attributes visible; Edit row cut off, read by accessibility); T6 accessibility only (**no saved file**) |
| FX_CustomerIDCombobox | Behavior: Add/Details Form / Find Form / Property | blank / blank / blank | blank / blank / blank | T1 `gate-06-…selected-properties.png`; T6 `t6-14` image |
| FX_CustomerIDCombobox | Behavior: Right-Click Menu | `StdDefault` | `StdDefault` | T1 `gate-06-…selected-properties.png`; T6 `t6-14` image |

**Result:** unchanged in every recorded field. Between T1 and T6 the worker's component reads were: T2 post-OK check of FX_ItemCombobox Right-Click `StdDefault`; T3 gate and post-OK check of FX_CustomerIDCombobox Right-Click `StdDefault`. No component value was changed by any task.

### 4.3 FX_UM

- **Present:** `gate-03-extension-list-FX_UM-positive-control.png` (T1, before creation); `t4-03` accessibility (T4); `t6-04` accessibility (T6, line 175 `gridcell "FX_UM"`); visible in `t6-10` and `t6-07` image lists.
- **Not edited:** no task selected or edited FX_UM. T1 and T4 and T6 selected FX_Item and FX_CustomerID only.
- **Not established:** field-level equality. No FX_UM field (Name, Version, Add/Details, Find, Property, Right-Click) was read in T1, T4 or T6, so there is **no before/after FX_UM field comparison**. The record must not say "FX_UM unchanged" without that qualifier. This is the one unresolved AC-5 item.

### 4.4 Evidence limitation: T6 combobox Inheritance and Data Source rows

The T6 Inheritance rows (View Attributes and Edit Property Class Extension for both comboboxes) and the Binding text were read through `browser_find` output, which was recorded in the record but **not saved as a snapshot file**. The T6 screenshots `t6-13` and `t6-14` show the Behavior values and the components-grid row (`object.FX_Item` / `object.FX_CustomerID`), but not the Inheritance rows. T6 Inheritance values are therefore supported by the record's transcription of find output, not by a saved image or snapshot file. T1 has image evidence for Inheritance.

---

## 5. Save acknowledgement and browser-audit reconciliation

### 5.1 Native Save acknowledgement (T5), verbatim

Title `Save`; body `Global object(s) were saved.`; a Close control. The toast appeared at the top right and cleared itself within about four seconds. Saved as `evidence/EXP-085/t5-02-post-save-response-state.png` (inspected: toast visible, Save, Undo and Regenerate Form greyed, FX_Orders open, footer `ScopeType: User`) and in the T5 accessibility find (`Global object(s) were saved.`).

Note: EXP-084's toast named the Form (`Form [FX_Orders] and global object(s) were saved.`). The EXP-085 toast does not name the Form. Recorded as observed; cause not established.

### 5.2 Browser calls, screenshots and mutations (worker record versus harness log)

The harness audit files `harness-audit-T1.md` … `harness-audit-T6.md` in `evidence/EXP-085/` log every tool call. They were counted with Grep. They are **harness-written** (not worker-written).

| Task | Worker-recorded browser calls | Harness-logged browser calls | Worker screenshots | Harness take_screenshot calls |
| --- | --- | --- | --- | --- |
| T1 | 53 | 53 | 13 | 13 |
| T2 | 60 | 60 | 13 | 13 |
| T3 | 48 | 48 | 9 | 9 |
| T4 | 31 | 31 | 8 | 8 |
| T5 | 10 | 10 | 2 | 2 |
| T6 | 55 | 55 | 11 | 11 |
| **Total** | **257** | **257** | **56** | **56** |

Arithmetic check: 53 + 60 + 48 + 31 + 10 + 55 = 257. Screenshots: 13 + 13 + 9 + 8 + 2 + 11 = 56.

Mutating and lifecycle calls, counted from the harness log:

| Item | Worker count | Harness-log evidence |
| --- | --- | --- |
| Extensions created | 2 | FX_Item (T2) and FX_CustomerID (T3) |
| Creation prompts answered Yes | 2 | T2 file line 50 (call 30) `Yes button of the FX_Item creation prompt`; T3 file line 40 (call 20) `Yes button of the FX_CustomerID creation prompt` |
| Extension ellipsis clicks | 2 | T2 file line 46 (call 26); T3 file line 36 (call 16) |
| Extension dialog OK clicks | 2 | T2 file line 102 (call 82, FX_Item); T3 file line 80 (call 60, FX_CustomerID) |
| Field commits with Tab (extension) | 8 | T2 `press_key Tab` file lines 70, 78, 90, 98 (four); T3 file lines 49, 57, 67, 75 (four) |
| Contingency corrections | 0 | No correction call in any log |
| Global Objects opened / Cancelled | 3 / 3 | Cancel: T1 file line 73 (call 53); T4 file line 58 (call 38); T6 file line 61 (call 41) |
| Designer Save | 1 (of 1 allowed) | T5 file line 27 (call 7; the single click on the Designer toolbar Save) |
| Form close / reopen | 1 / 1 | T6 file line 26 (call 6; Form-tab close); T6 file line 32 (call 12; recent-forms `FX_Orders`) |
| Component mutations | 0 | No component-related element click in any log |
| Runtime actions | 0 | No runtime element in any log |
| Checkout actions | 0 | None logged |
| Re-logins | 0 | Session-expiry procedure not invoked |
| Regenerate Form / top-toolbar delete clicks | 0 | None logged |

Typed text and fill calls, all in view or extension-field entry (not component properties): T1 `browser_type` on the Global Objects list search box (view filter; cleared with a `browser_fill_form`); T2 `browser_type` into the Property combobox (`FX_Item`); T3 `browser_type` into the Property combobox (`FX_Code`).

**Harness-flagged tool usage:** the harness logs record `Flagged tool usage: {"browser_type":1,"browser_fill_form":1}` for T1 and `{"browser_type":1}` for T2 and T3. These are the three intended typed entries above and the T1 search-box clear. They are disclosed, not hidden.

**Reconciliation result:** every worker count in the brief's list (257 browser calls, 56 screenshots, 2 extensions created, 2 Yes answers, 2 ellipsis clicks, 2 OKs, 8 Tab commits, 0 corrections, 3/3 Global Objects open/Cancel, 1/1 Designer Save, 1/1 close/reopen, 0 component mutations, 0 runtime, 0 checkout, 0 re-logins) matches the harness log.

---

## 6. Worker-written file inventory (reconciled)

### 6.1 Files in `evidence/EXP-085/` (Glob of the directory, T7)

| Category | Count | Notes |
| --- | --- | --- |
| Screenshots (`*.png`) | **56** | T1 13 (`gate-…`), T2 13, T3 9, T4 8, T5 2, T6 11. Matches the worker counts. |
| Accessibility snapshots (`*.yml`) | **20** | T2 6, T3 5, T4 4, T5 1, T6 4. Matches the worker counts. |
| Harness audit artifacts (`harness-audit-T1.md` … `harness-audit-T6.md`) | **6** | **Harness-written, not worker-written.** Excluded from the worker inventory. |
| T7 final report (`T7-final-acceptance-report.md`) | **1** | Worker-written in T7 (this file). |

### 6.2 Repository files written by the worker across EXP-085

| File | Written by | Tasks |
| --- | --- | --- |
| `experiments/EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md` | Worker (created T1; updated T2–T7) | T1–T7 |
| 56 PNG and 20 YAML in `evidence/EXP-085/` | Worker (via the browser tool's `filename` parameter or screenshot save path) | T1–T6 |
| `evidence/EXP-085/T7-final-acceptance-report.md` | Worker | T7 |

Total worker-written repository files at the end of T7: **78** (1 record, 56 PNG, 20 YAML, 1 T7 report). The 6 harness audit files are excluded.

### 6.3 Files excluded from the worker inventory

- Browser-tool logs under `evidence/playwright/` (for example `page-2026-10-14T…yml` and `console-2026-10-14T…log`). These are generated by the browser tool, not by the worker, and they are outside `evidence/EXP-085/`.
- Harness audit artifacts (6 files above).

### 6.4 Repository confinement

The worker inventories above are consistent with the harness logs (each save call names a path under `evidence/EXP-085/` or the EXP-085 record). Repository confinement is authoritative in the harness and operator git review; the worker did not run git.

---

## 7. Final state of the FX_Orders Designer (T6, confirmed unchanged in T7)

- Tab 0 Designer, `MGForm=FX_Orders`, Form tab FX_Orders `[selected]`.
- Footer: `ScopeType: User`.
- Toolbar: **Save disabled, Undo disabled, Regenerate Form disabled** (last verified by find in T6).
- Dialogs: none (no alertdialog, no `dialog` node).
- Details panel expanded and Components tab selected, with Pane (01) expanded and FX_CustomerIDCombobox as the selected row (view state only).
- Tab 1 (Web Client) not touched in T6 or T7.
- The T7 task made no browser call, so this state is the last observed state (T6 final find), not a fresh observation.

---

## 8. Corrections and discrepancies found in this audit

| # | Where | Issue | Disposition |
| --- | --- | --- | --- |
| C1 | `t6-10-FX_CustomerID-scrolled-three-fields-after-reopen.png` | Filename says "three fields"; the image shows **four** values (Add/Details, Find, Property, Right-Click). | Disclosed (§2). Filename not renamed (no shell; no rename action). |
| C2 | `t6-09-FX_CustomerID-four-fields-after-reopen.png` | Filename says "four fields"; the image shows **Name, Version and Add/Details** (Find cut off). | Disclosed (§2). |
| C3 | T6 record, audit row 32 | Described `t6-10` as "Find, Property, Right-Click in one frame"; the frame also shows Add/Details. | Corrected in the record (§9). |
| C4 | T6 record, eight-field table title | Titled "eight-field" but lists twelve observations (four per extension plus Name and Version). | Clarified in the record (§9). |
| C5 | T6 combobox Inheritance and Binding | Recorded from find output; no saved snapshot file. | Disclosed (§4.4); no new file (no browser action in T7). |
| C6 | EXP-085 T1 | FX_Orders was already open; not re-opened through recent-forms (D1 in the T1 record). | Disclosed (AC-1 gap). |
| C7 | EXP-085 T1 gate-06 | Filename `…inheritance-before-expand.png` shows the group already expanded. | Disclosed in the T1 record (D3). |
| C8 | T1 extension list | List is virtualised; absence of FX_Item and FX_CustomerID is confirmed only in rendered slices. Corroborated by the "does not exist" prompts in T2 and T3 (which appear only when the class is absent). | Disclosed (AC-1). |
| C9 | T5 toast | Toast text omits the Form name (EXP-084's toast named it). | Observed; cause not established. |
| C10 | Worker T1 and T6 notes | T1 typed `FX_` into the Global Objects list search box (view filter; did not filter; cleared). | Disclosed (D4 in T1). |

---

## 9. Record updates made in T7

The EXP-085 record was updated only as follows:
- A T7 status line at the top.
- A T7 section at the end that cites this report and records the corrections C3 and C4 above.
- No earlier task's observations were rewritten.

---

## 10. Acceptance gaps (not silently treated as passed)

1. **FX_UM field-level equality (AC-5, AC-6):** not established. Only presence and no worker edit are supported. A read-only FX_UM readback (in a separate bounded task, if the operator wants it) would be needed to close this. Not done in T7.
2. **Post-Save readback without reopen (AC-4):** not taken; T5 forbade readbacks. The post-reopen readback (T6) stands in for it.
3. **T1 FX_Orders open route (AC-1):** FX_Orders was not opened through the recent-forms entry in T1 (already open). The recent-forms route was used later, in T6.
4. **Extension-list absence (AC-1):** confirmed in rendered slices plus the creation prompts; not enumerated row by row.
5. **T6 Inheritance rows (AC-5):** no saved file; transcribed from find output.
6. **Persistence (AC-4, AC-5):** no server or database evidence exists. Every readback is in the same browser session and is a Designer UI observation.
7. **Right-Click Menu of the extensions after the Save (EXP-069-R2 loss pattern):** the value persisted through the Save and reopen in this session; whether it persists across independent sessions is not tested.

---

## 11. Limits (explicit)

- All observations are same-browser-session UI observations in the Designer.
- No independent database durability, no server persistence, no replay verification.
- No runtime drill-down behaviour was tested (Section 5 step 8, EXP-086, is not started). The runtime effect of `StdDetailsAddFind` on the comboboxes is unknown.
- The component-level Right-Click Menu is `StdDefault` on both comboboxes; it was not changed (out of scope).
- Findings are observed only; none is classified as replay_verified.

---

## 12. Knowledge state (per finding)

| Finding | State |
| --- | --- |
| The FX_Item extension was created with the four values and the exact prompt, and OK closed the dialog with no alert | **observed** (one run; T2) |
| The FX_CustomerID extension was created with the four values and the exact prompt, and OK closed the dialog with no alert | **observed** (one run; T3) |
| Pre-Save readback (T4) of all eight values matches the expected values | **observed** (one run, same session) |
| One native Designer Save: `Save` / `Global object(s) were saved.`; Save and Undo disabled afterwards | **observed** (one run; T5) |
| Clean close raised no discard prompt; recent-forms reopen loaded the Form clean in User scope | **observed** (one run; T6) |
| Post-reopen readback of all eight values matches; Name and Version match | **observed** (one run; T6) |
| Both comboboxes' component Behavior and binding unchanged between T1 and T6 | **observed** (one run each; T6 Inheritance from find output) |
| FX_UM is present and was not edited by the worker | **observed** (T1, T4, T6) |
| FX_UM field-level equality with any earlier state | **unresolved** (not read in any task) |
| Values persist on the server or in the database | **unresolved** (not tested; no claim made) |
| Runtime drill-down behaviour of the extensions | **unresolved** (Section 5 step 8, not run) |
| Cause of the empty Property list when opened for each class | **unresolved** |
| Cause of the EXP-085 toast omitting the Form name (EXP-084 named it) | **unresolved** |
| Replay verification of any procedure | **not claimed** (no candidate_procedure or replay_verified state is asserted) |

---

## 13. Recommendation

**ACCEPTED AS OBSERVED**, for coordinator review, scoped to: same-browser-session Designer UI observations of two User-version property-class extensions (FX_Item and FX_CustomerID), their creation through FX_ItemCombobox and FX_CustomerIDCombobox, one Designer Save, one clean close and reopen, and the component Behavior comparison (unchanged).

Conditions to state with the acceptance:
- FX_UM is recorded as **present and not edited by the worker**; field-level equality is **not** established.
- No database durability, server persistence, runtime drill-down behaviour, or replay verification is claimed.

If the operator requires FX_UM field-level equality as a condition of acceptance, the recommendation would change to **pending** (not BLOCKED): nothing that was attempted failed; that one check was not performed.

Open items for the coordinator (not started here): an optional read-only FX_UM readback; Section 5 step 8 (EXP-086) runtime checks, which need their own instruction.
