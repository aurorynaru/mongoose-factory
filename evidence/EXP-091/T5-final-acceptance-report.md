# EXP-091 T5 - Final documentation-only acceptance report

Run: R-20261014-230638-ig8N. Worker session 0d5f552b-9feb-4af8-8a55-d02020a56a51. Date: 2026-10-14.
Scope of T5: documentation only. **Zero browser calls. Zero Mongoose changes.** No Designer reopen, screenshot, Save, close, reopen, correction or runtime action was performed. No experiment was started or replayed.
Findings are observed only. Nothing in this report is classed as replay_verified.

## 1. Sources reviewed (T5)

- Experiment record `experiments/EXP-091-hello-world-part-5-section-12-fx-item-component-class-and-assignment.md` (full read).
- Controller audits `evidence/EXP-091/harness-audit-T1.md` to `harness-audit-T4.md` (full read). Each lists tool name, element or filename argument and result. The controller audit records `file_path` only for Read calls; it does not record offset or limit.
- Four controller tables were checked row by row. Each table's summary line (actions, reads, prohibited-tool hits, errors) was re-derived from its rows (see section 4).
- Directory listing of `evidence/EXP-091/` (names only) and `evidence/playwright/` filtered on the run's UTC timestamp prefix `2026-10-14T15-` (names only). No file contents were opened in T5.
- Worker-recorded scope in earlier tasks (not re-read): the brief's sources were read in T1 as specified (AGENTS.md; `hello-world-pt5.md` lines 1-30 and 258-277 and transcript lines 553-580; the three recipes in full; EXP-088 Outcome from line 1630; EXP-089 Outcome from line 1025; EXP-090 Outcome from line 1216). The worker's Read calls used offset and limit 80, which limits each record read to its Outcome section. The controller audit does not show offset or limit, so this is supported by the worker's own call parameters, not by the controller audit.
- Scope note: T1 also ran directory-name globs and a heading-only grep over the experiments folder. These returned names and matching headings only; no unrelated record body was read.

## 2. Acceptance matrix

| Check | Verdict | Supporting evidence (repo-relative) | Observed result | Limitations |
|---|---|---|---|---|
| **AC-1** Sources reviewed; session usable; User scope, clean, FX_Orders open; FX_Item absent, FX_CustomerID present; validator read back; components recorded with no Component Class | **Supported** | `evidence/EXP-091/gate-designer-start.png`; `gate-component-class-list-scrolled.png`; `gate-validator-list-fx.png`; `gate-validator-fx-item-readback.png`; `gate-fx-itemcombobox-before.png`; `gate-fx-itemgridcol-before.png`; `t2-gate-component-class-list-fx.png`. Controller T1 rows 1-18 (sources), 19-24 (tabs), 25-78 (gates). | Save and Undo disabled; status bar ScopeType User. FX_Item absent between FX_CustomerID and GetCharacterTypeColumns. Validator Type In Collection; Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`; Error Message mIsNotAValid. Both components: Component Class blank. | The Parameters string is visually truncated; the full value is from the accessibility tree (worker and controller both record it). Absence of FX_Item is shown in the sorted region only, not tenant-wide. |
| **AC-2** Class created once via New; validator added once with `%1,%2`; Validate Immediately True; List Source IDO Collection / FX_Items / FX_Item, FX_Description, FX_Cost; Columns 1,2; each value committed; dialogs confirmed once; readback; Save 1 | **Supported, with two noted evidence gaps** | Creation: `t2-new-name-prompt.png`, `t2-new-name-entered-before-ok.png`. Validator: `t2-validator-new-fx-item-before-ok.png`, `t2-validator-parameters-percent1-percent2-before-ok.png`, `t2-validators-editor-after-params.png` (pre-OK). Properties: `t2-properties-fx_item-fx_description-fx_cost-before-ok.png`. Columns: `t2-columns-to-display-before-ok.png`. List Source: `t2-list-source-dialog-before-ok.png`. Readback: `t2-class-readback.png`. Save 1: `t2-save1-response.png`. Global Objects OK: `t2-after-global-objects-ok.png` (post-OK). | New 1 (controller T2 row 18). Validator picker FX_Item then OK (rows 37, 41); Parameters `%1,%2` typed, Tab, OK (rows 47-52); validators editor OK (row 56). Validate Immediately True (rows 58-61). Type IDO Collection (row 70, Tab 71); IDO FX_Items (row 75, Tab 76); Properties Add x3 in order (rows 81-88); OK (92). Columns FX_Item, FX_Description (97-98); OK (102). List Source OK (106). Global Objects OK (108). Readback: Validators `FX_Item(%1,%2)`, Validate Immediately `True`, List Source verbatim `STDOLE FX_Items( PROPERTIES(FX_Item,FX_Description,FX_Cost) DISPLAY(1,2)RECORDCAP(0))`. Save 1 toast: "Global object(s) were saved." | (a) **No pre-OK screenshot for the Global Objects OK** (row 108); the post-OK frame and the readback are the nearest evidence. (b) Validate Immediately has no dialog and no pre-OK frame; its value is shown by the readback. (c) Tab was not pressed before the Properties, Columns, List Source or Global Objects OKs; those dialogs have no open text field, and the committed values read back correctly. (d) The Validators, Validate Immediately and List Source readback values are from the accessibility tree; the readback screenshot shows Name and Version only. |
| **AC-3** Component Class FX_Item and Parameters `FX_ItmsDescription,FX_ItmsCost` set and committed on both components; changes recorded; Save 2 | **Supported** | Before/after: `t3-fx-itemcombobox-before-assignment.png`, `t3-fx-itemcombobox-component-class-fx-item-after-tab.png`, `t3-fx-itemcombobox-after-parameters.png`, `t3-fx-itemgridcol-before-assignment.png`, `t3-fx-itemgridcol-after-parameters.png`. Save 2: `t3-save2-response.png`. Controller T3 rows 1-55. | Component Class selections: rows 9-12 (combobox) and 31-34 (grid column); Tab rows 13 and 35. Parameter entries typed rows 19-21 and 37-39; Tab rows 22 and 40. Save 2 (row 51): toast "Form [FX_Orders] and global object(s) were saved." Automatic changes from applying the class: none observed in Binding, List Source, Validators, Validate Immediately, Set Class From, View Attributes, Edit Property Class Extension (worker and controller readbacks). | The Parameters values in the after-screenshots are truncated (`FX_ItmsDescription...`); the full string is from the tree (and from the T4 reopened readback, section AC-4). |
| **AC-4** Clean Form closed once and reopened once; reopened class readback matches AC-2; both components show AC-3 assignment; no other component, validator or class changed | **Supported at Designer-readback level** | Pre-close: `t4-pre-close-state.png`. Close: `t4-after-close.png`. Reopen: `t4-reopened-fx-orders.png`. Class: `t4-reopened-class-readback.png`. Combobox: `t4-reopened-fx-itemcombobox-readback.png`. Grid column: `t4-reopened-fx-itemgridcol-readback.png`. Controller T4 rows 1-47. | Close: controller row 6 (once), no prompt; Form-tab control. Reopen: row 12 (once), recent-forms `FX_Orders`. Class after reopen: Validators `FX_Item(%1,%2)`; Validate Immediately `True`; List Source `STDOLE FX_Items( PROPERTIES(FX_Item,FX_Description,FX_Cost) DISPLAY(1,2)RECORDCAP(0))` (tree). FX_ItemCombobox: Component Class FX_Item; Parameters `FX_ItmsDescription,FX_ItmsCost`; View Attributes FX_Item; Edit Property Class Extension FX_Item; List Source blank; Validators blank; Validate Immediately False. FX_ItemGridCol: identical. Components grid Component Class column: blank before close, FX_Item on both rows after reopen. Designer: Save and Undo disabled; no dialog. | (a) Persistence is evidenced only by the reopened Designer readback. No runtime, Web Client or database check was made, and none is claimed. (b) "No other component, validator or class changed" rests on the controller audit: no mutating action (Save, OK, type, key, Edit) targeted any other object in T1-T4. FX_CustomerID was listed beside FX_Item after reopen but was not re-read in T4. (c) The reopened class readback screenshot does not show Validators or List Source; those values are from the tree. |
| **AC-5** Final report with decisive evidence, full action audit with exact counts, file inventory, final state | **Supported by this report** (sections 3-7) | This file; experiment record; controller audits T1-T4. | See sections 3-7. | Worker-recorded per-task counts had three small differences from the controller (section 4). Corrected figures are shown; the per-task tables in the record were left as written and annotated. |

## 3. Final state (confirmed at the end of T4; no T5 browser call)

- FX_Orders open in the Designer, editing scope User (status bar `ScopeType: User`).
- Save and Undo disabled (clean). No dialog or prompt open.
- Details panel expanded, Components tab, Components grid expanded; FX_ItemGridCol selected (last T4 selection, controller T4 row 43).
- Both native Designer Saves used (2 of 2). Form close 1 of 1; reopen 1 of 1. New 1 of 1. Validator addition 1 of 1.
- No Web Client, runtime, checkout, cache, FormSync or deployment action.
- The Designer is not touched by T5. The operator may leave it as is.

## 4. Action audit: reconciliation of worker counts and controller counts

### 4.1 Counting conventions (verified)

The controller summary lines count **browser calls only**, in two groups:
- **actions** = clicks + type + key presses + mouse moves + wheel + tab select.
- **reads** = find + snapshot + screenshot + tab list.
- File tools (Read, Glob, Grep, Write, Edit) are counted separately and are not in either total.

I re-derived each controller summary line from its table rows:

| Task | Controller actions (re-derived) | Controller reads (re-derived) | Controller file ops (Read/Glob/Grep + Write/Edit) | Total rows | Summary line agrees |
|---|---|---|---|---|---|
| T1 | 19 (clicks 11, type 1, moves 2, wheel 4, tab select 1) | 31 (find 16, snapshot 4, screenshot 10, tab list 1) | 30 (28 read, 2 write/edit) | 80 | yes |
| T2 | 52 (clicks 39, type 2, key 6, moves 2, wheel 2, tab select 1) | 65 (find 29, snapshot 22, screenshot 13, tab list 1) | 15 (14 read, 1 write) | 132 | yes |
| T3 | 17 (clicks 10, type 2, key 4, tab select 1) | 31 (find 17, snapshot 7, screenshot 6, tab list 1) | 12 (7 read, 5 edit) | 60 | yes |
| T4 | 15 (clicks 12, moves 1, wheel 1, tab select 1) | 26 (find 15, snapshot 4, screenshot 6, tab list 1) | 12 (6 read, 6 edit) | 53 | yes |
| **Total** | **103** | **153** | **69** | **325** | |

The worker's "browser operations excluding snapshots and finds" count (30, 66, 24, 22; total 142) equals controller actions + screenshots + tab list in each task:

| Task | Controller actions + screenshots + tab list | Worker figure | Agrees |
|---|---|---|---|
| T1 | 19 + 10 + 1 = 30 | 30 | yes |
| T2 | 52 + 13 + 1 = 66 | 66 | yes |
| T3 | 17 + 6 + 1 = 24 | 24 | yes |
| T4 | 15 + 6 + 1 = 22 | 22 | yes |
| Total | 103 + 35 + 4 = 142 | 142 | yes |

So the two sets of numbers are not interchangeable in general. The controller's "actions" excludes screenshots, and the controller's "reads" includes them. The worker's browser-operation total includes screenshots and excludes snapshots and finds.

### 4.2 Corrected worker figures (discrepancies found)

| Item | Worker record | Controller (re-derived) | Resolution |
|---|---|---|---|
| T1 finds | 15 | 16 | Controller is the native call log; use 16. |
| T3 snapshot calls | 6 | 7 | Use 7. |
| T3 finds | 16 | 17 | Use 17. |
| Cumulative snapshot calls (T1-T4) | 36 | 37 | Use 37. |
| Cumulative finds (T1-T4) | 75 | 77 | Use 77. |
| Cumulative reads (snapshot + find + screenshot + tab list) | not stated as one figure | 37 + 77 + 35 + 4 = 153 | Matches controller reads total 153. |

The per-task tables in the experiment record are left as written. These corrections are annotated in the record (section "Reconciliation (T5)") and are not silently substituted.

All other worker-recorded counts agree with the controller:

| Item | Worker cumulative | Controller (T1-T4) | Agrees |
|---|---|---|---|
| Clicks | 72 | 11 + 39 + 10 + 12 = 72 | yes |
| Text typed | 5 | 1 + 2 + 2 + 0 = 5 | yes |
| Tab key commits | 10 | 0 + 6 + 4 + 0 = 10 | yes |
| Mouse moves | 5 | 2 + 2 + 0 + 1 = 5 | yes |
| Wheel | 7 | 4 + 2 + 0 + 1 = 7 | yes |
| Screenshot calls | 35 | 10 + 13 + 6 + 6 = 35 | yes |
| Tab list / tab select | 4 / 4 | 4 / 4 | yes |
| Controller actions total | (derived) | 103 | yes |
| Controller reads total | (derived, corrected) | 153 | yes |

### 4.3 Exact semantic counts (verified against controller rows)

| Measure | Count | Controller rows |
|---|---|---|
| Component classes created | **1** | T2 row 18 (New) and row 27 (name prompt OK) |
| New (Component Classes list) | **1** | T2 row 18 |
| Existing validators added to the class | **1** (FX_Item) | T2 rows 33-41 (+, pick FX_Item, OK) |
| Validator Parameters entries (`%1,%2`) | **1** | T2 row 47 (typed); row 52 OK |
| Validate Immediately set | **1** (True) | T2 rows 58-61 |
| List Source properties added | **3** (FX_Item, FX_Description, FX_Cost) | T2 Add clicks rows 82, 85, 88 |
| Displayed columns | **2** (FX_Item, FX_Description) | T2 rows 97-98 |
| Class-level dialog OKs | **8** (name prompt 27; validator picker 41; Parameters 52; validators editor 56; Properties 92; Columns 102; List Source 106; Global Objects 108) | T2 |
| Dialog Cancels | **4** (T1 rows 38, 61; T2 row 125 readback; T4 row 29 readback) | |
| Class assignments (Component Class set on a component) | **2** (FX_ItemCombobox, FX_ItemGridCol) | T3 option clicks rows 12, 34 |
| Component Class Parameters entries (committed) | **2** | T3 rows 21, 39 (typed), Tab rows 22, 40 |
| Tab commits (all) | **10** (T2 6; T3 4) | T2 rows 24, 38, 48, 61, 71, 76; T3 rows 13, 22, 35, 40 |
| Designer Saves | **2** (Save 1, Save 2; limit 2) | T2 row 127; T3 row 51 |
| Designer Form close | **1** (clean; no prompt) | T4 row 6 |
| Designer Form reopen | **1** (recent-forms) | T4 row 12 |
| Contingency corrections | **0** | none in controller (no re-edit of a committed value) |
| String or message creation prompts | **0 offered**; **0 answered "No"** | no "No" answer in controller rows |
| Other component property edits | **0** | all edits were on FX_ItemCombobox / FX_ItemGridCol (class assignment and Parameters only) or on the new class |
| Validators changed, created or deleted (other than FX_Item add) | **0** | |
| Runtime actions | **0** | no Web Client tab selection recorded by the worker (see 5.4) |
| Checkout-management actions | **0** | none in controller |
| Cache unload, FormSync, deployment, regeneration | **0** | none in controller; Delete Form Definition and Regenerate Form never clicked |
| Re-logins | **0** | no sign-in action; no session expiry or server-event error recorded |

Browser_type flags (controller, "flagged tools"): T1 1 (typing `FX_` into the Component Classes search filter; not applied, no artifact); T2 2 (Name `FX_Item`; validator Parameters `%1,%2`); T3 2 (component Parameters). Each is an authorised text entry within the brief. None produced an unintended artefact.

## 5. Anomalies and qualifications (observed)

1. **Stale reference (T2, row 3):** one targeted snapshot returned "Ref e1207 not found". One fresh untargeted snapshot (row 4) followed. Controller error count T2 = 1. No mutation was attempted from the stale reference.
2. **Global Objects pre-OK screenshot absent (T2 row 108):** the post-OK frame exists. Limitation for AC-2.
3. **Tab not pressed before list-selection OKs (T2 rows 92, 102, 106, 108):** these dialogs have no open text field; the committed values read back correctly. The brief said "Commit every field with Tab before OK"; this is an interpretation, recorded here.
4. **Validators and List Source readbacks from the accessibility tree:** the readback and reopened screenshots show Name/Version; the values were verified only through the tree. Visual truncation is recorded for the Parameters rows and the List Source row.
5. **Tab-select index not recorded by the controller:** the controller records `action=select` only. The worker recorded index 0 (the Designer) in every task; the Web Client tab (index 1) was never selected. The audit cannot independently confirm the index.
6. **Validator Parameters dialog:** an extra empty combobox appears under the `%1,%2` text box. It was not used. Its purpose is unexplored.
7. **RECORDCAP:** Rec Cap Override is blank in the List Source dialog, while the stored string contains `RECORDCAP(0)`. Observed only.
8. **Grid column refresh:** Components grid Component Class was blank for both components before the reopen and FX_Item after it. Observed only; matches the recipe pitfall.
9. **Page URL:** `MGForm=FX_Orders` was appended after dialogs and after reopen. The worker did not navigate.
10. **T1 typed filter text:** `FX_` was typed into the Component Classes search box. It did not filter the list, and the text was absent on the next opening. No artefact changed.
11. **T5 file-tool hook error:** the first Glob of `evidence/playwright/` in T5 returned a PreToolUse guard-state I/O error. Per the instruction not to bypass a hook, the call was retried once with the same arguments and succeeded. No other tool was substituted.

## 6. Written-file inventory (worker-written, T1-T5)

### 6.1 Experiment record (`experiments/`)
- `experiments/EXP-091-hello-world-part-5-section-12-fx-item-component-class-and-assignment.md`: **created** T1 (controller row 79 Write); **edited** T1 (row 80 Edit); **overwritten** T2 (row 132 Write, full rewrite); **edited** T3 (rows 56-60, 5 edits); **edited** T4 (rows 48-53, 6 edits); **edited** T5 (this task; reconciliation and acceptance notes).

### 6.2 Evidence (`evidence/EXP-091/`), worker-requested browser screenshots (34 distinct files; 35 captures; 1 overwrite)
- T1 (9 distinct files; 10 captures): `gate-designer-start.png`, `gate-component-class-list-initial.png`, `gate-component-class-list-scrolled.png`, `gate-validator-list.png`, `gate-validator-list-scrolled.png` (**overwritten once**, controller rows 46 and 50), `gate-validator-list-fx.png`, `gate-validator-fx-item-readback.png`, `gate-fx-itemcombobox-before.png`, `gate-fx-itemgridcol-before.png`.
- T2 (13 files; 13 captures): `t2-gate-component-class-open.png`, `t2-gate-component-class-list-fx.png`, `t2-new-name-prompt.png`, `t2-new-name-entered-before-ok.png`, `t2-validator-new-fx-item-before-ok.png`, `t2-validator-parameters-percent1-percent2-before-ok.png`, `t2-validators-editor-after-params.png`, `t2-properties-fx_item-fx_description-fx_cost-before-ok.png`, `t2-columns-to-display-before-ok.png`, `t2-list-source-dialog-before-ok.png`, `t2-after-global-objects-ok.png`, `t2-class-readback.png`, `t2-save1-response.png`.
- T3 (6 files; 6 captures): `t3-fx-itemcombobox-before-assignment.png`, `t3-fx-itemcombobox-component-class-fx-item-after-tab.png`, `t3-fx-itemcombobox-after-parameters.png`, `t3-fx-itemgridcol-before-assignment.png`, `t3-fx-itemgridcol-after-parameters.png`, `t3-save2-response.png`.
- T4 (6 files; 6 captures): `t4-pre-close-state.png`, `t4-after-close.png`, `t4-reopened-fx-orders.png`, `t4-reopened-class-readback.png`, `t4-reopened-fx-itemcombobox-readback.png`, `t4-reopened-fx-itemgridcol-readback.png`.
- T5 (this task): `T5-final-acceptance-report.md` (**created**).

Worker-written evidence total: 34 PNG (distinct) + 1 T5 report + 1 record = **36 distinct worker-written files**, with 1 overwrite (`gate-validator-list-scrolled.png`) and 1 full record rewrite (T2).

### 6.3 Controller-generated (not worker-written)
- `evidence/EXP-091/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md`.

### 6.4 Browser-tool side effects (not worker-authored; outside the EXP-091 paths)
- `evidence/playwright/`: **77 files** whose names carry this run's UTC timestamp prefix `2026-10-14T15-`. These are 5 console logs (`console-...`) and 72 accessibility-snapshot `page-...yml` files. Per task: T1 12 (1 console, 11 page), T2 40 (1 console, 39 page), T3 11 (1 console, 10 page), T4 14 (2 console, 12 page). The page files are generated per browser result, not one per snapshot call, so they do not map one-to-one to the snapshot counts.

### 6.5 Repository confinement
- Workers have no shell or git access. The files above are the worker-written set. The harness computes confinement from git state; operator git review is authoritative. No git status or diff was requested.

## 7. Final recommendation

**Recommended outcome: ACCEPTED AS OBSERVED.**

Every acceptance check (AC-1 to AC-5) has decisive evidence (sections 2 and 6), with the limitations stated above. The two evidence gaps under AC-2 (no pre-OK frame for the Global Objects OK; values verified by tree for some rows) and the Designer-level-only nature of AC-4 are qualifications the coordinator should weigh. They are not missing support: the values were read from the tree, and the interactions are on the controller log.

Qualifications to carry with the acceptance:
- Persistence and recovery are supported only at the Designer-readback level (close and reopen). No runtime (Section 13) or database durability is claimed.
- Worker counts for T1 finds, T3 snapshots and T3 finds differed from the controller; the controller figures are used (section 4.2).
- Controller "actions" and "reads" and the worker's "browser operations" are different conventions; the reconciliation is in section 4.1.

## 8. Next step

- Coordinator or operator: record the final acceptance decision in the experiment record (this report recommends ACCEPTED AS OBSERVED).
- No further browser work, Mongoose change, Save, close, reopen or runtime test is authorised or needed for EXP-091.
- The Designer may remain as it is (FX_Orders open, User scope, clean, no dialog).

## 9. Statement

T5 made **zero browser calls** and **zero Mongoose changes**. The only actions in this task were reads of the record, the controller audits and file listings, and the writes of this report and the experiment record update.
