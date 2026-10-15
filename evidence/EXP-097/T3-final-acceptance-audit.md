# EXP-097 - T3 final acceptance audit (documentation only)

Task: T3 (documentation-only audit). Worker session 7ea4e83a-6d81-4683-8fbd-74d15887b7c8.
Browser calls in T3: **0**. Mongoose changes in T3: **0**. The Designer and Web Client were not re-read, reopened, saved or changed in T3.
Inputs reviewed: the experiment record `experiments/EXP-097-hello-world-part-6-section-5-fx-orderschart-grid-only-form.md`; T1 and T2 worker reports (in conversation); controller tables `evidence/EXP-097/harness-audit-T1.md` and `evidence/EXP-097/harness-audit-T2.md`; the 34 screenshots in `evidence/EXP-097/`; `.gitignore`; and the browser-tool auto-output in `evidence/playwright/` (counted by name, not read).
Screenshots newly viewed in T3 (previously captured but not inspected in-session): `wizard-03-wizard-dropdown-options.png`, `wizard-04-form-wizard-selection-classic-grid-only.png`, `wizard-06-page1-data-source-dropdown-open.png`, `persist1-07-components-expanded-after-reopen.png`.

## 1. Recommended outcome

**NOT ACCEPTED AS OBSERVED at this time. Operator disposition is required on items D2, D4, D5 and D7 in section 6.**

- AC-1, AC-2, AC-3, AC-4 and AC-6 are supported by the evidence, with the limitations listed below. The T1 task-boundary overrun is accepted by the operator (2026-10-15, EXP-097 only).
- AC-5 is supported for the expected rows, columns, values, the exact-row open, no F4 and clean closure. It is **not** supported for the required "mode" element: no mode indicator is visible in the evidence.
- Four process deviations (D2, D4, D5 and the mode gap D7) are new or are not covered by the 2026-10-15 acceptance. They need an explicit operator ruling.
- If the operator rules on D2, D4, D5 and D7 (accepting the mode as not visibly exposed), the recommended outcome becomes **ACCEPTED AS OBSERVED**. Classifications stay observed-only and same-session.

## 2. Acceptance checks

### AC-1 - Sources reviewed; session usable; User scope; FX_Orders closed clean. **Supported.**
- Sources: `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt6.md` lines 150-167 (the Section 5 heading and steps; line 167 is the Section 6 heading, shown but not read further); `recipes/forms/create-basic-form.md`; `recipes/session/session-expiry-and-stale-designer.md`; the EXP-082 Outcome (from line 1559) and EXP-096 Outcome (from line 576) only. Controller T1 reads 9-13 cover these.
- Session: usable; no expiry, sign-in page, or re-login (controller: none; record: re-logins 0).
- User scope: `evidence/EXP-097/gate-01-designer-fx-orders-clean-user-scope.png` shows FX_Orders open, Save and Undo greyed, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Snapshot confirms Save and Undo disabled.
- FX_Orders closed clean: `evidence/EXP-097/closed-01-fx-orders-closed-no-prompt.png` shows no Form and no dialog, status bar User. Controller #20: one click on the FX_Orders close control. No prompt; none answered.
- Limitation: the Designer was not re-observed after T1 for the FX_Orders check (it is not needed for AC-1).

### AC-2 - One wizard run; Classic / Grid Only recorded; pages recorded before filling; FX_OrdersChart and FX_Orders entered; defaults kept; Save Template unchecked; Finish once; completion verbatim; no replace answered OK. **Supported.**
- Wizard identity: `wizard-01-form-wizard-selection-before.png` (New Form radio, Category and Wizard blank); `wizard-02-category-dropdown-options.png` (Category options); `wizard-04-form-wizard-selection-classic-grid-only.png` (Category Classic, Wizard GridOnly, read in T3). Controller #24 is the single New click; #42 the single OK.
- Wizard options: `wizard-03-wizard-dropdown-options.png` (read in T3) shows Build from Scratch, Detail-Only, Grid-Only, Multi-View and Query; Report and Tile are below the fold in the image and appear only in the accessibility snapshot. Limitation: the Category list in `wizard-02` is also partly below the fold (Form Builder and IDS visible; New Data and REST only in the snapshot). The record lists all seven of each from the snapshot.
- Page 1 before filling: `wizard-05-grid-only-page1-before-filling.png` (Name blank, Form Type GridOnly, Form Layout GridLeft, Device Type Default, Data Source blank, Query Form and Comments blank).
- Page 1 entries: `wizard-07-page1-after-filling-name-datasource.png` shows Name FX_OrdersChart and Data Source FX_Orders. The list was opened (`wizard-06`, read in T3, shows only the top of the alphabetical list; FX_Orders is not visible in that image and was selected from the accessibility snapshot). The created Form's data source is FX_Orders, which corroborates the selection.
- Pages 2 and 3 (defaults; no change): `wizard-08-after-next-page2-check.png` (Primary Collection: 10 FX_ properties) and `wizard-09-after-next-page3-check.png` (captions FX_s...; FX_ItmsPicture caption blank).
- Page 4: `wizard-10-after-next-page4-check.png` (Save Template checked by default; text names FX_OrdersChart and FX_Orders). Save Template: a direct click timed out (controller #67, element intercepted by the checkbox display span); one correction by clicking the label (controller #69). `wizard-11-page4-save-template-after-correction.png` shows the box empty. Save Template unchecked: supported.
- Finish: controller #73, one click. Completion message verbatim: "Process Completed Successfully" (`finish-01-completion-message.png`, title "Infor Mongoose Application Development Framework - Form Wizard - Grid Only"). Acknowledged once (controller #77). No replace or exists prompt appeared; none answered OK.
- Post-Finish state: `newform-01-fx-orderschart-open-after-finish-details-collapsed.png` (tab FX_OrdersChart; Name, Device Type Default, Form Type Normal, Is Master True; status bar User; Save and Undo greyed). Collections: Primary Collection: FX_Orders (snapshot). Components: 12 tree rows (Pane (00); FormCollectionGrid bound to `objects`; ten GridColumns bound to `object.<FX_property>`; no Chart or other control), from the snapshot. `newform-02-details-components-inventory.png` shows only the first rows; the full 12-row inventory is from the snapshot text.
- Limitation: the Version value is masked as "User version for user <account>" in snapshots; the image truncates it ("User version for us...").

### AC-3 - After one close/reopen, FX_OrdersChart reads back (Name, Form Type, Collections FX_Orders, component count; Initial Command blank) with Save disabled. **Supported (same session).**
- Close: `persist1-01-closed-no-prompt.png`; controller #91, one click on the Form-tab close control. No prompt.
- Reopen: controller #98, one click on the Form-menu recent entry FX_OrdersChart.
- Readback: `persist1-02-reopened-properties-behavior-check.png` (Name FX_OrdersChart, Form Type Normal, Device Type Default, status bar User; Save icon greyed in the image). The snapshot taken at reopen shows Save disabled, Undo disabled.
- Initial Command blank: `persist1-04-behavior-after-chevron-click.png` (Behavior expanded; Initial Command field empty).
- Collections: `persist1-05-details-collections-after-reopen.png` (Primary Collection: FX_Orders).
- Components: `persist1-06-details-components-after-reopen.png` and `persist1-07-components-expanded-after-reopen.png` (read in T3: Pane (00) expanded with FormCollectionGrid and GridColumns). Component count 12 tree rows (11 components plus the Pane container), from the snapshot.
- Limitation: same-session only. Not cross-session or database-level.

### AC-4 - Initial Command = Refresh set and read back (at most one correction); exactly one Designer Save with native response; after one more close/reopen Initial Command reads Refresh and Save disabled; Designer clean at end. **Supported (same session), with one observation noted.**
- Option list (5): `initial-command-01-dropdown-open-options.png` (Refresh, Filter, FilterInPlace, Add, Event <eventname>).
- Set: controller #128 (Refresh). Value corrections: 0. Commit click: controller #134 (name cell, blur). `initial-command-02-refresh-selected-readback.png`: Refresh shown; Save greyed. `initial-command-03-after-commit-blur-save-state.png`: Refresh shown; Save and Undo enabled. Observation: the Save button stayed disabled until the editor lost focus.
- Save: controller #139, one click on the native toolbar Save. Native response (toast, verbatim): "Save" / "Form [FX_OrdersChart] and global object(s) were saved." (`save-01-designer-save-response.png`). No error, no dialog; not retried.
- Persistence 2: close (controller #143; `persist2-01-closed-no-prompt.png`, no prompt); reopen (controller #149). Readback: `persist2-02-reopened-initial-command-refresh-save-disabled.png` (Initial Command Refresh; Save greyed; status bar User). Snapshot: Save disabled, Undo disabled. Collections (`persist2-03`) and components (`persist2-04`, read in T1) match.
- Designer clean at end: Save and Undo disabled in the T2 start snapshot and the post-save snapshot. The Designer was not re-observed after T2 (see D6).
- Observation: after Persistence 2 the Designer grid headers show "Customer ID", "Item", "Order Number" without the "*" required markers, and the design-time preview row is gone (persist2 snapshot and screenshot). The same markers were present at Persistence 1 (`persist1-05`). Cause not determined; not an acceptance check.

### AC-5 - Runtime: FX_OrdersChart opened once from Select Form (exact row); without F4 the mode, grid columns and rows recorded (both orders expected); no value changed; closed clean. **Partly supported: mode not established.**
- Select Form: `runtime-01-select-form-filtered-fx-orderschart-row.png` (read in T2 and T3-verified by the record): dialog with filter FX_OrdersChart, Filter By Name, Case Sensitive and Starts With unchecked, one row (Caption FX_OrdersChart, Name FX_OrdersChart).
- Exact-row open: controller #22, one double-click on the FX_OrdersChart row. Controller #22 is the only open action and there is no OK click (OK clicks 0).
- Runtime grid: `runtime-02-fx-orderschart-open-two-rows-no-f4.png` (tab FX_OrdersChart; two rows visible; Count editor on row 1). Complete values come from the accessibility tree (T2):

| Row | Order Total | Count | Address | Customer Name | Customer ID | Item | Cost | Item Description | Picture (blank) | Order Number |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 90.00 | 2 (editor) | 1 Factory Street | Factory test one | FX001 | dumbbell | 45.00 | 45 pound iron | (blank) | 1 |
| 2 | 6.99 | 1 | 2 Factory Street | Factory test two | FX002 | eggs | 6.99 | cage free | (blank) | 2 |

- Both expected orders appeared on open without F4, with the expected Customer ID, Customer Name, Item, Cost, Count and Order Total. The additional columns (Address, Item Description, Order Number) are present and match the Designer binding; the unnamed picture column is blank.
- Mode: **not established.** The screen shows no mode indicator (Browse, Edit or Add). The status-bar text "Count (Object 1 of 2)" identifies the focused field and record position; it is not a mode. The brief requires the mode to be recorded. See D7.
- Count editor: on open, row 1's Count cell was in an active edit state showing "2". T2 typed nothing in the runtime. The value was not changed. Evidence for "not changed": the editor shows the original value on open and no keys were pressed after the runtime opened (T2 key presses all preceded the open).
- Runtime Save: the runtime toolbar Save is disabled throughout (snapshots).
- Closed clean: controller #26, one click on "Close Panel FX_OrdersChart". No prompt. `runtime-03-closed-clean-final-state.png` shows the Web Client Explorer with no Form and no dialog.
- Limitations: the Customer Name and Item Description cells are truncated on screen; full text is from the accessibility tree. Same-session only.

### AC-6 - No change to FX_Orders or another Form; no second wizard; no template; no other property or component change; no Chart; no runtime Save or F4; no unload; no checkout; no Yes answer. **Supported, with the T1 overrun accepted by the operator.**
- FX_Orders: closed once, clean; not reopened, saved or changed (controller #20 only).
- Wizard openings: 1 (controller #24). Finish: 1 (controller #73). No second wizard, no template saved.
- Property changes on FX_OrdersChart: Initial Command = Refresh only. Component changes: 0. Chart components: 0. Hidden: 0. Grid resized or moved: 0.
- Yes answers: 0. Replace prompts answered OK: 0.
- Runtime Save: 0. F4 or query keys in the runtime: 0. Runtime value changes: 0.
- Unloads, checkout, FormSync, deployment, Regenerate Form, Delete Form Definition: 0 (controller: none; record).
- Overrun: T1 included Persistence 1, Initial Command, one Save and Persistence 2, which the T1 instruction did not list. The operator accepted the T1 task-boundary overrun for EXP-097 only (2026-10-15). T1 also contained the unlisted ArrowRight key press and coordinate click (D2); the acceptance does not clearly cover those.

## 3. Browser count reconciliation (controller tables and worker enumeration)

Reconciled by matching each controller row to the worker's own call list. Read/Grep/Glob/Edit/Write are not browser calls and are excluded from the browser counts.

| Task | Controller actions | Worker enumeration (actions) | Controller reads | Worker enumeration (reads) | Match |
|---|---|---|---|---|---|
| T1 | 40 | 36 clicks + 1 type + 1 press (ArrowRight) + 1 coordinate click + 1 tab select = 40 | 83 | 83 (tabs list 1, snapshots, finds, screenshots, wait_for 1) | Yes |
| T2 | 9 | 4 clicks + 3 key presses (Ctrl+A, Backspace, t) + 1 type + 1 tab select = 9 | 17 | 17 (tabs list 1, snapshots, finds, screenshots, wait_for 3) | Yes |
| Cumulative | 49 | 49 | 100 | 100 | Yes |

Controller flagged tool usage: `browser_type` 1 in each task (T1: Name entry; T2: filter text). Both are authorized by the brief (see section 4.1).

Controller error entries (5 total):
- T1 #5: `Read` of the EXP-097 record path before it existed (non-browser; "File does not exist"). Not listed in the T1 record's error count; added here.
- T1 #67: click timeout on the Save Template checkbox ("intercepts pointer events").
- T1 #89: "Ref e2904 not found" (recovered by untargeted snapshot #90).
- T1 #121: "Ref e1584 not found" (recovered by untargeted snapshot #122).
- T2 #2: "Ref e3 not found" (first snapshot of T2 used a targeted ref carried from T1; recovered by untargeted snapshot #3). See D4.

## 4. Specific audits requested

### 4.1 Flagged browser_type operations (against the brief)
- T1 #46 (`browser_type`, element "Form Wizard Grid Only page 1 Name combobox", text FX_OrdersChart): the brief says "Enter Name FX_OrdersChart". Authorized. The value was applied (the Designer created and opened FX_OrdersChart). The call used Playwright fill (one call, not key-by-key); the wizard accepted it.
- T2 #11 (`browser_type`, element "Select Form filter textbox", text FX_OrdersChart): the brief says "clear it and type FX_OrdersChart once". Authorized as the typing step. Observed: fill set the text but did not refresh the grid (the grid still showed the earlier rows); see 4.2.

### 4.2 T2 Backspace and "t" after typing FX_OrdersChart once
- Sequence (controller #10, #15, #17): Ctrl+A (clear the prefilled "IdoCollections"; the snapshot before showed the filter textbox active, so focus was on the filter), then one fill to FX_OrdersChart, then Backspace, then "t". Net text: FX_OrdersChart.
- Exceeded the instruction? **Yes.** The brief allowed one type of the name; the Backspace and "t" were two additional keyboard entries used to make the filter apply. They are a process deviation (D5).
- Application mutation beyond filtering? **None observed.** The only observed effect was the grid changing to the single FX_OrdersChart row (`runtime-01`). No Form, property, or runtime value change was observed. The Select Form dialog stayed open until the intended double-click. Limitation: the Designer was not re-read after T2, so a Designer-side effect is not ruled out by observation; the keys were sent to the Web Client filter, and the Designer tab was not selected during T2.

### 4.3 Stale-reference errors and one-snapshot recovery
- T1 #89 and #121: each "Ref not found" was followed by exactly one untargeted snapshot (#90, #122). The next click (#91 and #123) used refs from that snapshot. Compliant.
- T2 #2: the first snapshot of the task was a targeted call using ref `e3` carried from T1's last snapshot. This is not a fresh snapshot of the task; the brief requires fresh references at the start of each task. The error was followed by one untargeted fresh snapshot (#3), then the tab select (#4). No mutation resulted. The T2 record called this "an untargeted-era ref", which is inaccurate; corrected in the record. Disposition needed (D4).

### 4.4 T1 reads of EXP-082 and EXP-096
- Controller T1 #12 and #13: Reads of EXP-082 and EXP-096. The worker transcript shows the reads used offsets 1559 (EXP-082) and 576 (EXP-096), each with limit 60. EXP-082's Outcome heading is at 1559 and runs to the end of the file (1610-1611). EXP-096's Outcome heading is at 576 and the file ends at 594 (the read returned no lines past 594). Both reads therefore stayed in the Outcome sections.
- Controller T1 #10 and #11 (Grep, content mode, "Outcome" heading pattern) returned only the heading line numbers and heading text. No body text from the prohibited sections was read.
- Controller T1 #7 and #8 (Glob): filenames only.
- Conclusion: within the authorized final Outcome sections. Note: the EXP-096 Outcome itself names EXP-092 and EXP-095 in a waived-deviation note; that is text inside the authorized section and was not followed.

### 4.5 Runtime mode indicator
- Not visibly established. See AC-5 and D7. No evidence in the screenshot or accessibility tree labels the runtime mode.

### 4.6 Wizard option lists and descriptions
- Descriptions in the record are normalized from accessibility text (line-break joins removed, spacing reconstructed). The exact whitespace of the wording is not guaranteed; the words are as shown in the snapshot and screenshot.

## 5. Worker-written file inventory (reconciled with controller tables)

| Path | Written by | Controller evidence | Notes |
|---|---|---|---|
| `experiments/EXP-097-hello-world-part-6-section-5-fx-orderschart-grid-only-form.md` | Worker (T1 Write #164; T1 Edit #165; T2 Edits #30-33; T3 Edits, this task) | Matches controller #164, #165, #30-33 | Record is the only repository document edited in T1-T3. |
| `evidence/EXP-097/*.png` (34 files) | Worker, via browser screenshot | T1 take_screenshot calls #17, 22, 26, 30, 38, 41, 44, 50, 53, 56, 60, 64, 70, 74, 79, 87, 92, 101, 104, 107, 111, 115, 120, 124, 129, 136, 140, 144, 151, 154, 161 (31); T2 #20, 24, 28 (3) | Glob count 34 = 31 + 3. |
| `evidence/EXP-097/T3-final-acceptance-audit.md` | Worker (T3 Write, this task) | Not a browser task; no controller row | This file. |
| `evidence/EXP-097/harness-audit-T1.md`, `harness-audit-T2.md` | Controller (not worker) | Present in evidence/EXP-097 | Not authored by the worker. |
| `evidence/playwright/*` (auto output) | Browser tool, not the worker | T1 window 04:51-04:57: 37 `.yml` + 2 `.log` (console-...-04-51-06-135Z and -136Z). T2 window 05:07-05:08: 7 `.yml` + 2 `.log`. | Outside EXP-097 paths. Covered by `.gitignore` line 10 (`evidence/playwright/`). Folder also holds files from earlier runs today (04:00-04:08 and before), not from this run. |
| `assets/` (untracked) | Pre-existing | gitStatus at session start | Not written by the worker; listed for completeness. |

Confinement: the worker wrote only under `experiments/EXP-097-...md` and `evidence/EXP-097/`. The `evidence/playwright/` output is written by the browser tool into a gitignored directory; it is not an EXP-097 path. Operator git review is authoritative.

## 6. Deviation register (new deviations are not waived)

| ID | Deviation | Evidence | Effect observed | Status |
|---|---|---|---|---|
| D1 | T1 went beyond its instruction (Persistence 1, Initial Command, one Save, Persistence 2) | Record Scope disclosure; T1 controller #91-#159 | Expected effects only; no other change | **Accepted by operator, 2026-10-15, for EXP-097 only.** |
| D2 | T1 pressed ArrowRight once and made one coordinate click (1585, 375) on the Behavior expander. ArrowRight is not in the brief; coordinates are a last resort under AGENTS.md. | Controller #103, #106; `persist1-03`, `persist1-04` | Focus moved to the Behavior value cell; the group expanded. No value changed (Script Language, Close Box, Initial Command unchanged). | **Needs operator disposition.** The D1 acceptance does not clearly cover these. |
| D3 | T1 Save Template: a direct click timed out (attempt), then one label correction | Controller #67, #69 | Checkbox unchecked after correction; no template saved | Within the one-correction rule. Informational. |
| D4 | T2 first snapshot used a targeted stale ref (`e3`) carried from T1, not a fresh untargeted snapshot. The T2 record misdescribed it. | Controller T2 #2 | Read-only; "Ref e3 not found"; no mutation | **Needs operator disposition** (new process deviation). The record is corrected. |
| D5 | T2 sent Backspace and "t" after the one authorized type of FX_OrdersChart, which exceeds "type once" | Controller T2 #15, #17 | Filter applied; no other mutation observed | **Needs operator disposition** (new deviation). |
| D6 | The Designer was not re-observed after T2 (only the T2 start snapshot showed it clean) | T2 start snapshot; no T2 Designer calls | No Designer action was taken in T2 | Informational. Observed-only limit; T3 was documentation-only and did not re-read it. |
| D7 | AC-5 runtime mode not established (the brief requires recording it) | `runtime-02` and tree; no mode element | Not observed | **Needs operator disposition**: accept as not visibly exposed in this UI, or authorize a read-only check in a later task. |
| D8 | Canvas grid headers and preview row changed after Persistence 2 (cause unresolved) | `persist1-05` vs `persist2-03`/`persist2-04` snapshot | Design-time only; no value or property change observed | Unresolved finding. Not an acceptance check. |
| D9 | T1 controller #5: a `Read` of the EXP-097 record path before it was created (non-browser) | Controller #5 | Read error only | Informational. |

## 7. Corrections made to the record in T3
- Scope disclosure: the "operator decision needed" bullet is replaced with the operator's 2026-10-15 acceptance of the T1 overrun, limited to EXP-097 and T1. D2 and the other T2 deviations are listed as not covered.
- Open questions: item 1 (T1 overrun) is resolved; the remaining operator items are listed.
- T2 action audit: the "untargeted-era ref e3" description is corrected to the cross-task stale ref (D4).
- Cumulative action audit: runtime opens and closes updated from 0 to 1 each; browser action and read totals (49 and 100) added; T1 error count updated to include the non-browser Read error.
- Worker-written file inventory: PNG count corrected (31 T1 + 3 T2 = 34); auto-output counts corrected from "about 40 .yml and one .log" to 37 + 2 (T1 window) and 7 + 2 (T2 window); `.gitignore` coverage noted.
- Status line: T3 audit pointer and the recommended outcome are added.

## 8. Final state (as last observed; no browser activity in T3)
- Designer (tab 0): FX_OrdersChart open and clean (Save and Undo disabled), User scope, Initial Command = Refresh, Details expanded with the Components tab. Last observed in T2 start snapshot; not re-observed (D6).
- Web Client (tab 1): Explorer with no Form open and no dialog after `runtime-03`.
- FX_Orders: closed clean; not reopened.
- No dialog, menu, prompt, unsaved change or runtime Form is open that the worker knows of.

## 9. Classification of findings (observed-only; unchanged)
- Wizard flow, option lists and descriptions: observed (one run).
- Save Template direct click times out; label click toggles: observed (one occurrence).
- Initial Command commit requires blur before Save enables: observed (one run; needs a second run to confirm).
- Save toast text: observed.
- Same-session persistence (Name, Form Type, Collections, components, Initial Command, Save state): observed. **Not** cross-session or database-level durability.
- Both expected orders appear on open with Initial Command Refresh, without F4: observed (one same-session run). **Not** replay-verified.
- Canvas header and preview change after Persistence 2: unresolved (D8).
- Select Form filter needed key events; fill did not refresh the grid: observed (one occurrence).
- Runtime mode: not established (D7).
- Whether FX_OrdersChart pre-existed: unresolved (not checked before the wizard; no prompt appeared).

## 10. Decisive evidence paths
- Gate and closure: `gate-01-designer-fx-orders-clean-user-scope.png`, `closed-01-fx-orders-closed-no-prompt.png`.
- Wizard: `wizard-01`, `wizard-02`, `wizard-03` (read in T3), `wizard-04` (read in T3), `wizard-05`, `wizard-06` (read in T3; partial list), `wizard-07`, `wizard-08`, `wizard-09`, `wizard-10`, `wizard-11`.
- Completion and new Form: `finish-01-completion-message.png`, `newform-01-fx-orderschart-open-after-finish-details-collapsed.png`, `newform-02-details-components-inventory.png` (partial), with the full 12-row inventory in the snapshot text.
- Persistence 1: `persist1-01` through `persist1-07` (`persist1-07` read in T3).
- Initial Command: `initial-command-01` (options), `initial-command-02`, `initial-command-03`.
- Save: `save-01-designer-save-response.png` (toast text).
- Persistence 2: `persist2-01` through `persist2-04`.
- Runtime: `runtime-01-select-form-filtered-fx-orderschart-row.png`, `runtime-02-fx-orderschart-open-two-rows-no-f4.png` (values from the tree; names truncated on screen), `runtime-03-closed-clean-final-state.png`.
- Controller tables: `harness-audit-T1.md`, `harness-audit-T2.md`.

## 11. Limitations (for every accepted check)
- All observations are same-session UI observations from one execution. No cross-session, database-level or replay verification is claimed.
- Screenshots truncate several labels and values; complete values come from the accessibility tree and are labelled as such.
- Several wizard lists extend below the fold in the screenshots; the full lists are from snapshot text.
- Runtime mode is not established (D7).
