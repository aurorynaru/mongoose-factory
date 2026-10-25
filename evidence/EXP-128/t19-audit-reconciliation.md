# EXP-128 T19 audit reconciliation (worker-authored; repository only; no browser call)

Written by the T19 worker on 2026-10-25 as a summary of the controller audits. The controller files `harness-audit-T1.md` to `harness-audit-T18.md` were read and not edited. Every count below was obtained by a count or row-pattern search over those files. No credential value was displayed.

## 1. Counting rules (applied to the controller row table `| n | tool | key | result |`)

- **Browser action** = a row whose tool is `browser_click`, `browser_type`, `browser_press_key`, `browser_hover`, `browser_select_option`, `browser_drag`, any `browser_mouse_*` (click_xy, move_xy, wheel, down, up, drag_xy), `browser_file_upload`, `browser_handle_dialog`, `browser_fill_form`, `browser_navigate`, `browser_navigate_back`, `browser_drop`, `browser_resize`, `browser_emulate_media` or `browser_close`, plus `browser_tabs` with `action=select`. This rule reproduces the controller's own "actions" figure exactly for every file H1 to H17 (sum 317).
- **Browser read** = `browser_snapshot`, `browser_find`, `browser_take_screenshot`, `browser_tabs action=list`, `browser_wait_for`. Counted as total browser rows minus actions. The sum (443) matches the controller's reads figure.
- **Repository call** = `Read`, `Glob`, `Grep`, `Write`, `Edit`. Counted by a row search of each file (H1 to H9: 135; H10 to H17: 103; total 238). Together with actions and reads this reconciles to the row totals (998 rows for H1 to H17).
- **Result class.** `ok` = the row result is `ok`. `error` = the row result begins `error:`. The error is classified by its text: `Ref ... not found` (element reference no longer present), `TimeoutError` (actionability wait timed out), `hook denial` (PreToolUse identical-call limit) or repository error (`String to replace not found`, permission denied, Grep timeout).
- **Session-limit terminal message** = a line in the controller `Errors:` list, not a table row. The controller summary counts it in `errors=`.
- **"Tool-reported success"** means the controller row result is `ok`. It is not a confirmation of the intended UI effect. The controller does not record UI state.

## 2. Per-task reconciliation (H = controller task number = `harness-audit-T<n>.md`)

| H | Record label and location (T12 mapping; T19 finding) | Rows | Actions | Reads | Repo | Action ok | Action error | Read error | Repo error | Session limit | Record-attested executed | Screenshots (ok) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | T1 | 45 | 15 | 16 | 14 | 15 | 0 | 0 | 0 | 0 | 15 | 4 |
| 2 | T2 | 122 | 35 | 58 | 29 | 33 | 2 | 2 | 0 | 0 | 33 (+2 timed out) | 21 |
| 3 | T3 | 61 | 20 | 22 | 19 | 19 | 1 | 2 | 0 | 0 | 19 | 9 |
| 4 | T4 first task | 39 | 10 | 18 | 11 | 10 | 0 | 1 | 0 | 0 | 10 | 4 |
| 5 | T4 continuation (task fd81c666) | 34 | 7 | 15 | 12 | 5 | 2 | 0 | 0 | 0 | 5 | 4 |
| 6 | T4 completion and T5 (task 893366b8) | 45 | 10 | 20 | 15 | 7 | 3 | 0 | 1 | 0 | 7 (+3 timed out) | 4 |
| 7 | **No dedicated section.** Captures t5-05 to t5-08 are described at record lines 583 to 658, under the label "MockInventory retry (task bbc76dc0)". That section gives no action count. | 35 | 12 | 19 | 4 | 11 | 1 | 1 | 0 | 1 | not recorded | 4 |
| 8 | MockInventory retry (script) and T6 checkpoint (task bbc76dc0; record lines 659 to 726; audit lines 696 to 715) | 54 | 16 | 25 | 13 | 14 | 2 | 0 | 0 | 0 | 14 | 2 |
| 9 | T6 completion (task f6a97a00; record lines 727 to 829) | 119 | 43 | 58 | 18 | 37 | 6 | 1 | 0 | 0 | 26 (reconstructed) | 9 |
| 10 | T7 | 64 | 17 | 25 | 22 | 17 | 0 | 0 | 1 | 0 | 17 | 6 |
| 11 | T8 | 74 | 24 | 32 | 18 | 24 | 0 | 0 | 0 | 0 | 24 | 2 |
| 12 | T9 | 35 | 10 | 15 | 10 | 9 | 1 | 1 | 0 | 0 | 9 | 2 |
| 13 | T10 | 63 | 21 | 30 | 12 | 20 | 1 | 2 | 0 | 0 | 20 | 3 |
| 14 | T11 | 35 | 10 | 17 | 8 | 10 | 0 | 0 | 0 | 0 | 10 | 3 |
| 15 | **No dedicated section.** Described only as "T15 session" observations in the pre-T12 BLOCKED section (record lines 1825 to 1837), with no action count. | 54 | 24 | 27 | 3 | 24 | 0 | 1 | 0 | 1 | not recorded | 1 (t12rec-01) |
| 16 | Pre-T12 BLOCKED section (record lines 1811 to 1866; header label T16) | 9 | 2 | 4 | 3 | 2 | 0 | 0 | 0 | 0 | 2 | 0 |
| 17 | Pre-T12 COMPLETE section (T17) | 110 | 41 | 42 | 27 | 41 | 0 | 0 | 1 | 0 | 41 | 4 |
| **Total H1 to H17** | | **998** | **317** | **443** | **238** | **298** | **19** | **11** | **3** | **2** | **252** | **82** |

Cross-checks:
- Actions 317 and reads 443 equal the controller summary totals. Action rows per file equal the controller `actions` figure for all 17 files.
- Screenshot rows with `ok` total 82, equal to the 82 PNG files in `evidence/EXP-128/` (the H18 file has no screenshot row).
- Column sums: action ok 298 + action error 19 = 317. Read error 11 and repository error 3 bring the table's non-ok rows to 33. Adding the 2 session-limit messages gives 35, equal to the controller `errors=` total across H1 to H17 (0+4+3+1+2+4+3+2+7+1+0+2+3+0+2+0+1 = 35).
- Record-attested executed counts sum to 252 (excluding H7 and H15, and using the record's reconstructed H9 figure of 26).

## 3. Classification of the 317 attempted browser actions (exact, controller-derived)

| Class | Count | Composition |
| --- | --- | --- |
| Attempted browser actions | **317** | Section 1 rule; equals controller `actions` |
| Tool-reported success (`ok`) | **298** | H1 15, H2 33, H3 19, H4 10, H5 5, H6 7, H7 11, H8 14, H9 37, H10 17, H11 24, H12 9, H13 20, H14 10, H15 24, H16 2, H17 41 |
| Tool-reported error, not dispatched | **19** | 7 click timeouts (H2 rows 24, 26; H5 rows 18, 20; H6 rows 14, 19, 31); 11 `Ref not found` clicks (H7 row 18; H8 rows 40, 49; H9 rows 60, 64, 68, 72, 73, 78; H12 row 21; H13 row 29); 1 hook denial (H3 row 43, identical-call limit) |
| Record-attested executed | 252 | Subset of the 298. Difference 46 = H7 11 + H9 11 (above the record's 26) + H15 24 |
| Former "unknown" attempts (record, 53) | 53 | Resolved by the controller result column: 46 tool-reported success and 7 tool-reported error (H7 1, H9 6) |
| Reads (snapshots, finds, screenshots, tab lists, waits) | 443 | 11 of them returned errors (below) |

Convention. A click that returns a `Ref not found` error or a `TimeoutError` (actionability wait) is treated as not dispatched, which matches the record's convention. The controller does not prove that a tool-reported success changed the UI. Therefore "executed" in this record means tool-reported success only. The range 252 to 305 in the T12 record is superseded by the exact figure of 298.

Non-action errors. Read errors (11): H2 row 7 (screenshot timed out; no PNG written) and row 35; H3 rows 23 and 46; H4 row 28; H7 row 24; H9 row 74; H12 row 25; H13 rows 15 and 32; H15 row 11 (all `snapshot Ref not found`). Repository errors (3, H1 to H17): H6 row 39 (`Edit` on the experiment record, String to replace not found; row 40 `Edit ok`), H10 row 40 (`Grep` denied: permission to read a tool-results file in the session folder), H17 row 105 (`Edit` on `evidence/EXP-128/MockLoginPortal-form-script.cs.txt`, String to replace not found; rows 106 and 107 `ok`). Session-limit terminal messages (2): H7 (`harness-audit-T7.md` line 15, "Terminal success: You've hit your session limit · resets 3:10pm (Asia/Singapore)") and H15 (`harness-audit-T15.md` line 15, same wording, "resets 8:20pm"). The `Terminal success` label is the controller's own text. It does not indicate a successful task.

H18 (`harness-audit-T18.md`): 0 actions, 0 reads, 58 repository rows, 1 repository error (Grep timed out after 20 seconds, row 26). T18 is outside the H1 to H17 totals.

## 4. Mapping gaps (H7, H9, H15) and the H9 discrepancy

- **H7 (12 actions).** The H7 rows are the MockInventory Components, Event Handlers and Variables reads, with screenshots t5-05 to t5-08 (rows 16, 22, 28, 34). The record's "MockInventory retry" section (lines 583 to 658) describes these same captures under the label "task bbc76dc0". Its audit at lines 696 to 715 counts only H8 (14 executed; 2 Ref errors), which matches the controller. Record line 709 calls t5-05 to t5-08 "from the previous task", and H8 rows 6 and 7 are reads of t5-06 and t5-07. The record is therefore internally inconsistent about the label. Inference: H7 is the first part of the bbc76dc0 retry (interrupted by the session limit). This is not proven. The H7 action count is not in the record.
- **H7 end state.** H7 ended after row 35 (a read of t5-08). No row closes the MockInventory Form, so it was open at the session end. The record's H8 gate (line 662) found no Form open after the operator's manual refresh (the section header at line 583 says "after the operator's manual refresh, cycle 10").
- **H15 (24 actions).** Composition: 1 tab select, 4 clicks (Form menu, recent Form entry, Edit menu, Form Script menu item), 1 mouse move and 18 view-only mouse wheels. The screenshot `evidence/EXP-128/t12rec-01-script-editor-open-start.png` is row 16, taken after the Form Script item was clicked. H15 contains no close, Cancel, Save or Ctrl+S row. The Script Editor was therefore open at the H15 session end (inference from the absence of a close row). H16 (rows 1 to 9) found no editor and no Mock Form in the Designer recent list, with a changed scope name (record lines 1817 to 1823). The cause is not established.
- **Record wording correction.** The pre-T12 BLOCKED section heading (line 1825) says "before the editor closed". No close action is logged in H15. The record should not describe the editor as closed by the worker.
- **t12rec-01 provenance.** Controller attribution: H15, row 16 (`browser_take_screenshot`, relative filename `evidence/EXP-128/t12rec-01-script-editor-open-start.png`, result ok); row 17 is a Read of the file. The file's content was not viewed in T19. Its purpose is not recorded.
- **H9 discrepancy (resolved as a count discrepancy; unresolved as a UI question).** H9 contains 43 actions: 30 clicks (24 ok, 6 `Ref not found` on variable rows and the Designer Edit menu) and 13 non-click actions. The record's T6 completion section reconstructs "about 12" clicks before compaction plus 2 in the step, so about 14 clicks, and the record's "Ref not found: 0" statement refers to the step only. The controller counts supersede the record: the record undercounts H9 clicks by about 16 and tool-reported successes by 11 (37 against 26). Each `Ref not found` click in H9 was followed by a fresh snapshot and, in the cases checked (rows 58 to 65), a retry that returned `ok`. The UI effect of each retry is not verified.

## 5. Procedural exceptions (new or corrected in T19)

1. **H6 failed repository Edit** (row 39; experiment record; `String to replace not found`). Not in the T12 record (which named only H17). Row 40 `Edit ok`. The same "Undo toolbar" wording appears at record line 557 (T5 section). Linking row 40 to that text is an inference.
2. **H17 failed repository Edit** (row 105) targeted the MockLoginPortal `.txt` copy, not the record. No content change. T12 did not state the target.
3. **H15 open Script Editor at the session end** (no close row; see section 4). Not a Save: H15 contains no Save, Ctrl+S, OK or Apply click.
4. **H7 open MockInventory Form at the session end** (no close row; see section 4).
5. **H16 AGENTS.md not read.** Confirmed: H16 has no AGENTS.md row. Every other H task (H1 to H15 and H17) has AGENTS.md as its first row. The controller records only `file_path`, so partial reads claimed for T2, T3 and T8 cannot be checked.
6. **Unrecorded session-limit messages** (H7, H15) are confirmed by controller evidence. The record does not mention them.
7. **Relative-path screenshot filenames** (H9 row 107 `t6-10`; H10 rows 11, 17, 20, 31, 46 and 49 `t7-*`; H15 row 16 `t12rec-01`). The files are inside `evidence/EXP-128/`. The relative form is harmless but differs from the absolute paths used elsewhere.
8. **Out-of-scope file.** `evidence/playwright/t4-components-snapshot-check.yml` was written by H5 row 15 (`browser_snapshot` with `filename=C:\AI\mongoose-factory\evidence\playwright\t4-components-snapshot-check.yml`). The brief permits writes only under `evidence/EXP-128/`. Recorded as a historical exception and not moved.

## 6. T5-to-T6 task-boundary item (Q-20)

Evidence that is retained:
- Record line 511 (H6, task 893366b8): the bounded instruction said "execute only T5, including the T4 structural recovery", "stop after T5 and report the next step, T6". H6's controller rows contain only T4 completion and T5 actions (screenshots t5-01 to t5-04; no dashboard action). The record states it stopped after T5.
- Record line 725 (H8, task bbc76dc0): the bounded instruction "asked to continue to T6 onward"; the dashboard checkpoint was "the furthest point reached". H8's rows 40 and 49 are dashboard clicks (Components tab; Form-tab close control), both `Ref not found`; row 46 is a screenshot of t6-01.
- H7 (not named in any record statement about boundaries) contains MockInventory structure reads. Whether that was within its bounded instruction cannot be determined.

The bounded instruction texts for H6, H7 and H8 are not retained in the repository. The statements at lines 511 and 725 are the only retained description. Compliance cannot be established, and non-compliance cannot be established either. The item remains undefined. Recommendation: the operator defines it with the retained bounded text, or withdraws it as unverifiable.

## 7. Worker-written file inventory (EXP-128, cumulative to T19)

**Experiment record (worker-authored, edited in many tasks):** `experiments/EXP-128-mock-inventory-portal-read-only-study.md`. T19 edits: top status line, a note under the T12 heading, and an appended T19 section.

**Verbatim source copies (controller Write calls; 14 calls; 13 unique files; `MockInventory-form-script.cs.txt` written twice):**
| Controller task (row) | File |
| --- | --- |
| H1 (45) | `experiments/EXP-128-...md` (record created) |
| H3 (55) | `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` (lines 1 to 77; later extended by Edits in H17) |
| H6 (37) | `evidence/EXP-128/MockInventory-form-script.cs.txt` (header-only, first version) |
| H8 (18) | `evidence/EXP-128/MockInventory-form-script.cs.txt` (complete version; overwrite) |
| H9 (105) | `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt` |
| H10 (34, 45) | `evidence/EXP-128/assets/mocklogin_index.html.txt`; `evidence/EXP-128/assets/MockInventory_index.html.txt` |
| H11 (20, 30, 50, 58) | `evidence/EXP-128/assets/mocklogin_script_app.js.txt`; `mocklogin_style_app.css.txt`; `MockInventory_style.css.txt`; `MockInventory_script.js.txt` |
| H12 (30) | `evidence/EXP-128/global-variables-inventory.txt` |
| H13 (40, 59) | `evidence/EXP-128/MockLoginIDO-form-script.cs.txt`; `MockLoginIDO-metadata.txt` |

The 12 `.txt` copies match the T12 list. `evidence/EXP-128/global-script.cs.txt` was never written (Q-14).

**Edits:** 62 Edit calls in H1 to H17 (60 ok; 2 failed, see section 5). T18 made 19 Edit calls to the record (outside H1 to H17).

**Screenshots (worker-requested via `browser_take_screenshot`; 82 PNG files, tool-written):** per task H1 4, H2 21, H3 9, H4 4, H5 4, H6 4, H7 4, H8 2, H9 9, H10 6, H11 2, H12 2, H13 3, H14 3, H15 1 (t12rec-01), H16 0, H17 4. Total 82. H2 row 7 (a timed-out screenshot) wrote no file. The record names the status-bar account name for specific files only; T19 viewed no image. Review of all 82 is needed before sharing (see section 8).

**Controller-generated (not worker-authored):** `evidence/EXP-128/harness-audit-T1.md` to `harness-audit-T18.md` (18 files).

**Tool-generated (not worker-authored):** `evidence/playwright/page-*.yml` (read by workers, for example H1 rows 22 and 26) and `console-*.log`. These were not enumerated and their content was not read in T19.

**Outside the permitted directory:** `evidence/playwright/t4-components-snapshot-check.yml` (section 5, item 8).

**This task (T19):** new file `evidence/EXP-128/t19-audit-reconciliation.md` (this file); the experiment record edits listed above. No copy, screenshot or controller audit file was changed.

## 8. Credential scan and screenshot status (T19)

- Pattern scan over the `.txt` copies (credential-named field followed by `:` or `=` and a value): 3 matching lines. (a) `MockLoginPortal-form-script.cs.txt` (copy line 59): code, `Password = Convert.ToString(...)` at source line 50. (b) `assets/mocklogin_script_app.js.txt`: code, `password = passwordInput.value`. (c) `global-variables-inventory.txt` (line 89): a credential-named global label whose line also contains a "withheld", "name only" or similar note (confirmed by pattern count; the line text was not displayed in T19). No literal credential value was found. Redactions made in T19: 0.
- Screenshots: the record names the status-bar account name in specific files. T19 did not view any image. The claim that all 82 PNG files contain the name is not supported by T19 evidence; all 82 must be reviewed before external sharing.

## 9. Git

No shell tool is available in this task. A read-only Grep of `.git/logs/HEAD` was denied by the harness permission and was not retried. Authoritative Git verification (commit identity, untracked status of the EXP-128 files, and the tools changes outside this experiment) remains outstanding for the operator.
