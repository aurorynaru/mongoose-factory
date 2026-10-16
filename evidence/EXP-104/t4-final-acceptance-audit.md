# EXP-104 T4: final acceptance audit (documentation only)

Date: 2026-10-16. Worker task T4 (controller cycle 4). Worker session 5a977b9b-8eff-4dc2-81ce-2ecbff69aed3.

Scope of this task: documentation review and reconciliation only. **Zero browser calls. Zero Mongoose changes.** No Form was opened, closed, edited or saved; no dialog or menu was opened; no probe was repeated; no Form was created; no cleanup was performed. The only writes are this file and the update to `experiments/EXP-104-flex-layout-selection-isolation-probe.md`.

Inputs reviewed in this task:

- `experiments/EXP-104-flex-layout-selection-isolation-probe.md` (read in full).
- `evidence/EXP-104/` directory listing (Glob).
- `evidence/EXP-104/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md` (controller-generated; read, not modified).
- `AGENTS.md` and the session recipe were read in full in the T1 task; they were not re-read here.
- Screenshots were not re-opened in this task. Each capture was viewed in the task that took it (controller audit rows 11, 15, 17, 25, 31, 38, 45, 54, 58, 62, 66, 74, 79 to 88 for the T3 captures). Findings below rely on those earlier views and on the snapshots recorded in the record.

Definitions used in every count below (matching the controller tables): **reads** are browser read-only calls (tab list, snapshot, screenshot, find). **Actions** are browser action calls (tab select, click, coordinate click, hover, text fill, key press). Local file reads, greps, writes and edits are not browser calls and are not in either count. The controller's "13 reads" for T1 is browser reads only; it is not a file-read count.

---

## 1. Count reconciliation

### 1.1 Per task (controller tables versus worker records)

| Task | Controller label | Controller summary line | Worker record | Match |
|---|---|---|---|---|
| T1 gate and close | T1 | 6 actions, 13 reads; errors 1 (file read before the record existed, not a browser error) | 19 calls: 13 reads, 6 actions | Yes |
| Recovery gate | T2 (cycle 2) | 1 action, 3 reads; errors 0 | 4 calls: 3 reads, 1 action | Yes |
| Creation and probe | T3 (cycle 3) | 26 actions, 44 reads; flagged `browser_type` 1; errors 1 (ref-click timeout) | 70 calls: 44 reads, 26 actions | Yes |
| **Total** | | | **93 calls: 60 reads, 33 actions** | Yes (matches the coordinator's figure) |

The record's headings use different labels: its "T1" is controller T1; its "Recovery gate" is controller T2; its "T2" section is controller T3. This audit uses controller labels where a label appears.

### 1.2 Complete cumulative breakdown

| Category | T1 | Recovery | Creation/probe | Total |
|---|---|---|---|---|
| Tab list | 1 | 1 | 1 | 3 |
| Tab select | 1 | 1 | 1 | 3 |
| Snapshot | 5 | 1 | 25 | 31 |
| Screenshot | 6 | 1 | 17 | 24 |
| Find | 1 | 0 | 1 | 2 |
| **Reads subtotal** | **13** | **3** | **44** | **60** |
| Ref-based click | 4 | 0 | 22 | 26 |
| Coordinate click | 0 | 0 | 1 | 1 |
| Hover | 0 | 0 | 1 | 1 |
| Text fill (`browser_type`) | 0 | 0 | 1 | 1 |
| Escape key | 1 | 0 | 0 | 1 |
| **Actions subtotal (includes tab selects)** | **6** | **1** | **26** | **33** |
| **Total** | **19** | **4** | **70** | **93** |

Checks: reads 60 + actions 33 = 93. Ref clicks 26 + coordinate 1 = 27 clicks in total, of which 1 was a coordinate click.

### 1.3 Click purposes (exact)

T1 ref clicks (4): Form-tab close control (1, raised the error dialog); error dialog OK (1); Form menu title open (1); Form menu title close (1).

Creation/probe ref clicks (22): Form menu title (1); Definition submenu item (1); New (1); Category trigger (1); Flex option (1, timed out); Wizard trigger (1); Basic option (1); selection-dialog OK (1); Unit trigger (1); Char option (1); page 1 Next (1); page 2 Finish (1); completion OK (1); Details Expand Panel (1, view only); Components tab (1, view only); Components grid Expand (1, view only); FlexLayout row (1, selection); canvas Edit FlexLayout Attributes icon (1, edit); region row 0 (1); region row 1 (1); region row 2 (1); dialog Cancel (1).

Creation/probe coordinate click (1): Flex label after the timed-out ref click (see D1).
Creation/probe hover (1): tooltip on the canvas icon.
Creation/probe text fill (1): Name combobox (see D2).

### 1.4 Form-menu clicks (clarification of the record)

The record's cumulative table counted Form-menu title clicks (3) and Escape (1). It did not show the two submenu item clicks (Definition, New) except as "New Form Definition clicks 1". Full menu-related clicks: title clicks 3 (T1 2, creation 1); submenu clicks 2 (Definition, New). Total menu clicks: 5.

### 1.5 Harness flag

Controller T3 reports `browser_type: 1` in "flagged tool usage" and "prohibited-tool hits=1". The brief's enforced-tools list prohibits only browser evaluate and run-code tools; it does not name `browser_type`. The flag is a review classification. See D2.

---

## 2. Procedural qualifications

### D1. Coordinate click after an intercepted reference click

Controller rows 13 to 19 (creation task):

- Row 13: snapshot.
- Row 14: ref click on `e421` (the Flex option label). **Timeout**: the locator resolved to a tile label `<g data-qaid="cid-1256">` and the click was intercepted by an SVG tile (`cid-1249`, `tileEvent('', '2','icb','4')`).
- Row 15: fresh untargeted snapshot. This snapshot still listed the Flex option with usable references: option `e418`, image `e419`, name label `e421`, description `e424`.
- Row 16: screenshot. Row 17: Read of the screenshot (the Flex tile was at approximately x 835 to 1130, y 580 to 640).
- Row 18: **coordinate click** at (911, 596), derived from the screenshot.
- Row 19: snapshot. The Category combobox read "Flex".

Rules that apply:

- Brief: "Before every click, use references from the most recent snapshot taken in the current task"; "after any timeout ... take one fresh untargeted snapshot and use only its references".
- Bounded instruction: "Before every click use a reference from the most recent snapshot in this task, never from find output". The same instruction permits "one fresh untargeted snapshot and one corrected visible inspection, then stop blocked if unresolved."
- AGENTS.md: coordinates "only as a last resort"; prefer role or accessibility name.

Assessment: **deviation.** The fresh snapshot offered reference-based targets for the same option (`e418`, `e419`, `e424`). A coordinate click was not needed under the rules, and I did not try a reference-based correction. Choosing a coordinate click after a timeout was a change of input method, not a corrected reference. My record described it accurately ("one coordinate click on the visible Flex label"), but I did not classify it as a deviation, and that classification is made here.

Effect: none observed. The click selected Flex (row 19). The wizard stayed open with the intended state (`t2-03`: Category Flex, Wizard Basic). No Form change occurred.

Classification: procedural deviation, with no observed effect on the experiment result. Not a blocker. Operator disposition required (section 9, item 1).

### D2. The `browser_type` call (Name field)

- Controller row 28: `browser_type`, element "Name combobox in Form Wizard - Flex Basic". The call passed target, element and text only. The `slowly` and `submit` options were not set.
- Text entered: `FX_FlexProbe01`. Controller: exact values include `FX_FlexProbe01`; exact mismatches 0; key sequence empty; spelled strings empty.
- Underlying action (from the tool's run log): `fill('FX_FlexProbe01')` on the Name input. This is one replacement of the field's value, not keystrokes.
- Row 29 snapshot: the Name combobox read `FX_FlexProbe01`.
- Brief requirement: "Name FX_FlexProbe01 (one plain fill; at most one correction)". Corrections: 0.

Assessment: **compliant with the brief's required action.** The worker's description "text fill 1 (Name; corrections 0)" is accurate.

Unresolved: the controller's "prohibited-tool hit" classification. The brief does not prohibit `browser_type`, and the Name entry is an action the brief requires. Whether the operator's review policy treats `browser_type` as a flagged tool needs confirmation. The `tools/` directory is unreadable by design and was not read.

### Other qualifications (self-identified)

- **Q1. Failed worker close of FX_CustomerPortal.** The single close attempt raised the server-event error and did not close the Form. It is recorded as the one allowed attempt, not as a clean close. The Form was later closed by the operator (operator report: reload of both tabs, then manual close, with no error and no prompt). The worker did not perform a clean close.
- **Q2. Gate screenshot missing in the creation task.** The brief lists "the gate" among the captures. The creation task took no gate screenshot; its gate was a task-local snapshot. The most recent gate screenshot is `t2r-01` from the recovery task.
- **Q3. Read-only Form-menu check after the error.** After the T1 error (answered OK once), I performed the brief's read-only Form-menu check and toggled the menu closed before ending T1. The stale-Designer recipe says to "stop for the coordinator" after this error. I did not retry, reload, re-login or mutate. The check was required by the brief's gate. Recorded as a tension between the brief and the recipe.
- **Q4. View-state clicks.** The Details pane was collapsed after Finish. I expanded it (Expand Panel), selected the Components tab and used the grid's Expand button. These are view state, not Form properties. The Details pane opened on the Collections tab by default; I did not click that tab.
- **Q5. Collections default node.** The Collections tree showed one node, "Primary Collection:", with no value. The record interprets this as no configured collection. The value and the property grid were not inspected. This is a limitation, not a finding.
- **Q6. Cancel-state tree.** After Cancel, the Components tree was collapsed to Pane (00) (`t2-17`). The FlexLayout row was not visible, so its presence after Cancel was not directly re-verified. The record's earlier statement that "the FlexLayout row is still in the Form" was an inference from Save remaining disabled and from no OK being clicked. It is not an observation.
- **Q7. Label mapping.** Record labels versus controller labels: record "T1" = controller T1; record "Recovery gate" = controller T2; record "T2" = controller T3. The record's heading "T2" section should be read as controller T3.
- **Q8. Screenshot `t2-04` name.** The file is named "after-wizard-ok-page-2-name-unit", but it shows wizard page 1 (Name, Unit and Comments, blank) immediately after the selection dialog's OK. The name is misleading. The file was not renamed or overwritten.
- **Q9. Expansion limits.** The new Form's other Properties groups (Appearance, Behavior, Layout) and the FlexLayout's other groups (Appearance, Behavior, Events, Help, Inheritance, Layout) were not expanded. EXP-102 recorded a Size and "Synchronize FlexLayout attributes" setting for FX_CustomerPortal; these were not checked for FX_FlexProbe01.
- **Q10. Timing of error checks.** The error checks after the selection and after the Edit click were a snapshot and a screenshot taken immediately after each action. The observation window was not extended, so a delayed error would not have been seen.

---

## 3. Event narrative (observed)

1. **T1 (gate and close).** Starting state: Designer on FX_CustomerPortal, User scope, clean (Save, Undo and Regenerate disabled). The worker clicked the Form-tab close control once. The Error dialog appeared with the verbatim text "The server event processing returned an error. If this persists, contact your system administrator." The Form stayed open. OK was answered once. The Form menu was opened and closed; FX_FlexProbe01 was absent from the recent-forms list. Escape did not close the menu. No Form was created. (`t1-01` to `t1-06`.)
2. **Operator recovery (not a worker action).** The operator reloaded both tabs and closed FX_CustomerPortal manually, reporting no error and no prompt.
3. **Recovery gate.** Tab list, tab select, snapshot and screenshot. No Form open; User scope; Save, Undo and Regenerate disabled; no dialog; the Designer URL no longer carries `MGForm=FX_CustomerPortal`. (`t2r-01`.)
4. **Creation.** Form menu, Definition, New; Form Wizard Selection; Category Flex (one coordinate click after the timeout, D1); Wizard Basic; OK. Page 1: Name FX_FlexProbe01 (one fill, D2); Unit Char; Comments blank; Next. Page 2: Save Template unchecked; Finish once. "Process Completed Successfully"; OK once. The new Form opened clean in User scope. (`t2-01` to `t2-08`.)
5. **Components.** Pane (00) > `flexlayoutPane_FX_FlexProbe01` (FlexLayout, Pane 0, Container 0) > Region00 FLEX_PANE_REGION0, Region01 FLEX_PANE_REGION1, Region02 FLEX_PANE_REGION2. (`t2-10`.)
6. **FlexLayout selection (one click).** No error dialog. Properties dropdown: "flexlayoutPane_FX_FlexProbe01 (FlexLayout)". Design group populated (Name, Description blank, Type FlexLayout, From Device Master True). (`t2-11`.)
7. **Tooltip.** Hover on the first canvas icon showed "Edit FlexLayout Attributes". (`t2-12`.)
8. **Edit FlexLayout Attributes (one click).** No error dialog. The FlexLayout dialog showed Attributes: Design, Type HorizontalBox (dropdown, not opened). Regions grid (Index, ID, Length): 0 FLEX_PANE_REGION0 "1 Flex"; 1 FLEX_PANE_REGION1 "1 Flex"; 2 FLEX_PANE_REGION2 "1 Flex". Properties pane empty until a row is selected. (`t2-13`.)
9. **Region rows (each selected once).** Row 0 (`t2-14`), row 1 (`t2-15`), row 2 (`t2-16`): ID matches the row; Length 1; Unit Flex; Orientation Vertical; Alignment Left; Pack Start; Minimum Length, Maximum Length and Default Margin blank. No option list was opened and no value was changed.
10. **Cancel (once; OK never clicked).** Dialog closed. Save, Undo and Regenerate disabled; no dialog. The Components tree was collapsed (Q6). (`t2-17`.)

---

## 4. Acceptance checks

Verdicts separate functional support from procedural qualifications.

**AC-1. Sources reviewed; session usable; User scope; starting Form and dirty state recorded; FX_CustomerPortal closed clean once or recorded as not open; no Form open before creation.**
- Functional: met. Sources reviewed: AGENTS.md and the recipe in full; EXP-102 and EXP-103 Outcome sections only (the read ranges ended at end of file, so no content beyond the Outcome sections was read); a grep for section headings in both records returned only heading lines. Session usable throughout; no session expiry; re-logins 0. User scope recorded on every task. Starting Form and clean state recorded (`t1-01`). No Form open before creation (recovery gate `t2r-01`; creation-task start snapshot).
- Procedural: **not met as worded for the worker's close.** FX_CustomerPortal was not closed clean by the worker (Q1); it was closed by the operator. Q2 (no gate screenshot in the creation task) applies.

**AC-2. FX_FlexProbe01 created once through Flex > Basic with Unit Char, Save Template unchecked; completion recorded; open in User scope and clean with FlexLayout and regions listed; no collection, Save or Regenerate.**
- Functional: met. Creation via Flex > Basic once (Finish 1); Unit Char; Save Template unchecked (`t2-06`); completion recorded (`t2-07`); open, User scope, clean (`t2-08`); FlexLayout and three regions listed (`t2-10`). No collection set, no Save, no Regenerate (audit counts).
- Procedural: D1 (coordinate Category selection, no observed effect); D2 (flagged `browser_type`, compliant on the transcript); Q5 (default collection node not inspected); Q9 (other property groups not checked).

**AC-3. Probe result with screenshots: selection error and Properties; Edit error and dialog attributes and region rows; dialog left with Cancel; Save disabled; FX_FlexProbe01 open and clean.**
- Functional: met (observed, one run). No error after the selection (`t2-11`); Properties populated in the Design group; no error after the Edit click (`t2-13`); attributes (Type HorizontalBox) and three region rows with values (`t2-14` to `t2-16`); Cancel once (`t2-17`); Save disabled; FX_FlexProbe01 open and clean.
- Procedural: Q6 (FlexLayout row not directly re-checked after Cancel); Q10 (no extended observation window); Q9 (other groups not expanded).

**AC-4. No change after Finish; no other Form changed; no global object, collection, Save or Regenerate; no runtime action; no unload; no checkout action; User scope only; no task-boundary overrun.**
- Functional: met. No value, component, region, attribute or Form property was edited after Finish. No other Form was opened or changed. The Definition submenu showed "Unload All Global Form Objects" and disabled Regenerate entries; neither was clicked. No Save, Regenerate, unload, checkout, FormSync or deployment. No Web Client tab action. Each task stopped at its boundary.
- Procedural: one failed close attempt on FX_CustomerPortal, within the one-close allowance; its side effects, if any, are not observable from the worker's records. View-state toggles (Q4). The recipe-versus-brief tension in Q3.

**AC-5. Final report: decisive evidence for AC-1 to AC-4; complete action audit with exact counts; worker-written-file inventory; final state; isolation result stated plainly.**
- Met as a report, by this audit and the record. Counts reconcile to the controller tables (section 1). The inventory is in section 7. The final state is in section 8. The isolation result is in section 5.
- Qualification: the record's cumulative table omitted the coordinate click, hover, text fill and the submenu clicks. This audit supplies them.

---

## 5. Isolation result

- **The server-event error was NOT reproduced on FX_FlexProbe01 in this single observed test.** One FlexLayout selection and one Edit FlexLayout Attributes click produced no error. The Properties grid and the dialog were populated.
- **The cause of the EXP-103 blocker remains UNRESOLVED.**
- Limits on this result:
  1. One run, same session. Not replay-verified, not cross-session, not database-level.
  2. **The probe ran after the operator's reload.** The T1 error occurred before that reload. The stale-Designer recipe predicts errors in a Designer loaded before a session change, and EXP-103 reported that the error persisted after a reload on FX_CustomerPortal. The probe therefore does not separate "Flex Form without collections" from "reloaded Designer". This is a confound.
  3. **The error did occur on FX_CustomerPortal in this session** (T1, Form-close action, observed once). This result does not clear FX_CustomerPortal.
  4. FX_CustomerPortal's own FlexLayout was not selected in this session, so the EXP-103 symptom was not retested under the same conditions.
- Required to settle the question (not performed here; needs a new brief and operator decision): a single read-only FlexLayout selection on FX_CustomerPortal in the same session as FX_FlexProbe01, and a repeat of the probe.

---

## 6. Evidence review (captures and what they do not prove)

- `t1-02`: Error dialog over FX_CustomerPortal after the close click. Proves the error appeared on that action. Does not prove the cause.
- `t1-03`: after OK, Form still open and clean. Does not prove server-side state.
- `t1-04`: Form menu list with no FX_FlexProbe01. Proves the list at that moment only.
- `t2r-01`: no Form open, User scope, Save disabled, no dialog. Does not show the Web Client tab.
- `t2-04`: misnamed (Q8); shows wizard page 1 before entry.
- `t2-07`: "Process Completed Successfully" with OK. Proves the message, not the server-side save. (No Save was performed.)
- `t2-08`, `t2-10`: new Form open, clean, Components tree with FlexLayout and regions. Proves the Components listing; does not prove the Collections content.
- `t2-11`: after one selection, no error; Properties Design group populated. Proves the state at that moment only.
- `t2-13`: dialog with Type HorizontalBox and region rows. Proves the dialog state; the Type dropdown was not opened.
- `t2-14` to `t2-16`: region values. Proves the values shown for each row; blank rows (Minimum Length, Maximum Length, Default Margin) were not inspected beyond their blank display.
- `t2-17`: after Cancel, clean. Does not show the FlexLayout row (tree collapsed; Q6).

---

## 7. Worker-written-file inventory and repository confinement

### 7.1 Worker-authored files (exhaustive for this worker's writes)

Record (one file, created and edited across tasks):

- `experiments/EXP-104-flex-layout-selection-isolation-probe.md`: created T1 (Write); edited in the recovery task (2 edits); edited in the creation task (6 edits); edited in T4 (this task's section).

Screenshots (24 files, all new, none overwritten):

- T1: `evidence/EXP-104/t1-01-gate-start-fx-customerportal-clean.png`; `t1-02-after-close-fx-customerportal.png`; `t1-03-after-error-ok-fx-customerportal-still-open.png`; `t1-04-form-menu-recent-forms-readonly.png`; `t1-05-after-form-menu-escape.png`; `t1-06-after-form-menu-toggle-closed.png` (6).
- Recovery: `evidence/EXP-104/t2r-01-recovery-gate-no-form-open-user-scope.png` (1).
- Creation/probe: `evidence/EXP-104/t2-01-form-wizard-selection-dialog-initial.png` through `t2-17-after-cancel-final-state-fx-flexprobe01-clean.png` (17; names t2-01 to t2-17).

Audit (this task):

- `evidence/EXP-104/t4-final-acceptance-audit.md` (this file; created).

Totals: 1 record (existing, edited) + 24 screenshots + 1 audit = 26 worker-authored files.

### 7.2 Controller/harness-generated files under the EXP-104 evidence path

- `evidence/EXP-104/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`. Written by the controller; not authored or modified by the worker. They are in the EXP-104 path, so operator review should note them as harness output.

### 7.3 Tool-generated files outside the EXP-104 paths

- Snapshot (`.yml`) and console (`.log`) files written by the browser tool under `evidence/playwright/`. Names appear in tool results (for example `page-2026-10-15T17-05-46-505Z.yml`, `console-2026-10-15T17-05-29-463Z.log`). They were not enumerated in this audit, and the worker did not author them. Operator git review is authoritative for whether they appear in the repository's change set.

### 7.4 Confinement assessment

- All worker-authored writes are inside `experiments/EXP-104-…md` or `evidence/EXP-104/`. No write touched AGENTS.md, recipes, tutorial sources, assets, other experiment records, or any Mongoose object.
- Reads of EXP-102 and EXP-103 did not write to them.
- The only outside-path writes are tool-generated (7.3). Their presence in the change set is a matter for operator git review, not a worker write.
- Repository confinement is supported by the worker's and the controller's inventories; operator git review is authoritative.

---

## 8. Final state

Last browser call: screenshot `t2-17` (end of the creation task). No browser call was made in T4.

- Designer tab selected. Form open: **FX_FlexProbe01**, User scope, clean (Save, Undo and Regenerate Form disabled).
- No Error dialog, no Form menu, no browser-native dialog, no unsaved change.
- Details pane expanded, Components tab active, tree collapsed to Pane (00) (view state; Q6).
- FX_FlexProbe01 remains in place for later cleanup (not performed).
- FX_CustomerPortal: closed by the operator (operator report). Not reopened.

---

## 9. Dispositions requested from the operator

1. **D1 (coordinate click).** Accept as a recorded procedural deviation with no observed effect, or reject and require reference-only retries in future briefs. The worker recommends recording it as a deviation and tightening the retry rule.
2. **D2 (`browser_type`).** Confirm that `browser_type` is permitted for this brief's Name entry. The transcript shows one fill with the exact value and no corrections. The `prohibited-tool hit=1` classification conflicts with the brief's enforced-tools list.
3. **Q1 (close condition).** Decide whether the operator's manual close satisfies the AC-1 close requirement. The worker's close attempt was not clean.
4. **Q2 (creation-task gate).** Accept the snapshot plus `t2r-01` as the gate, or request a read-only re-gate in a later task.
5. **Q3 (post-error continuation).** Decide whether the read-only Form-menu check after the T1 error was acceptable given the recipe's "stop for the coordinator" wording.
6. **Q6 (FlexLayout row after Cancel).** Optional: a later read-only check that expands the tree.
7. **Q5 (default collection node).** Optional: a later read-only inspection of the Collections tree.
8. **Confound (section 5).** Decide whether to authorise a new brief that tests FX_CustomerPortal's FlexLayout in the same session as FX_FlexProbe01, and a repeat of the probe.
9. **Labels (Q7) and file name (Q8).** Accept the label mapping and the unrenamed `t2-04`.
10. **Cleanup.** FX_FlexProbe01 remains. Deletion requires a separate approval.

Acceptance is **not** declared unconditionally here. Functional support for AC-1 to AC-5 is recorded above; the qualifications and dispositions in sections 2 and 9 remain open for the operator.

---

## 10. Summary of the isolation result

The server-event error was **not** reproduced on FX_FlexProbe01 (Flex > Basic, Unit Char, no collections, no Regenerate) in this single observed test. The cause of the EXP-103 blocker on FX_CustomerPortal **remains unresolved**. The error did occur once on FX_CustomerPortal in this session at a Form-close action. The probe ran after an operator reload, which confounds the result.
