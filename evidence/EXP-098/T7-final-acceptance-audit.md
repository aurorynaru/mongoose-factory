# EXP-098 - T7 final acceptance and compliance audit (documentation-only)

Run R-20261015-162105-lEIr, cycle 9, task T7. Worker session cdb061de-2d3e-4460-b768-d6b053ea8230.
Browser calls in T7: **0**. Mongoose changes in T7: **0**. The Designer, the Binding dialog and the runtime Form were not reopened or interacted with. T7 tool calls were Read, Glob, Grep, Write and Edit only.

Recommendation (section 8): **ACCEPTED AS OBSERVED**, conditional on the operator's disposition of the process deviations marked "Review" in section 5. Findings are observed only. Nothing here is classified replay_verified, and no cross-session or database-level durability is claimed.

## 1. Scope and method

- Read the EXP-098 record (two pages, lines 1 to 750) and checked the specific facts cited below against it with targeted Grep.
- Read the six controller-generated audits `evidence/EXP-098/harness-audit-T1.md` to `harness-audit-T6.md`. These are not worker prose and were used only for reconciliation.
- Listed `evidence/EXP-098/*.png` (65 files, all present).
- Re-viewed two decisive captures in T7: `t4-02-save-immediate-response.png` and `t6-02-runtime-fx-orderschart-opened-no-f4.png`. Other captures are cited through the readings recorded in the record; they were not re-viewed in T7.
- Did not read tool-result or persisted-snapshot files, console logs or page metadata.

## 2. Browser-call reconciliation (controller vs worker)

Controller "actions" are attempted browser actions (clicks, keys, moves, wheel, type, tab select). Controller "reads" are browser reads (tab list, snapshot, find, screenshot). Non-browser tools (Read, Glob, Grep, Edit, Write) are excluded from both totals.

| Task | Worker total | Worker actions | Worker reads | Controller actions | Controller reads | Controller errors | Flagged tools | Match |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | 22 | 10 | 12 | 10 | 12 | 1 (non-browser: Read of the record before it existed, controller #5) | none | Yes |
| T2 | 57 | 26 | 31 | 26 | 31 | 0 | browser_type x1 (rename, authorized; controller #37) | Yes |
| T3 | 65 | 24 | 41 | 24 | 41 | 2 (non-browser: Grep denied #47; Edit string-not-found #88) | none | Yes |
| T4 | 12 | 2 | 10 | 2 | 10 | 0 | none | Yes |
| T5 | 43 | 11 | 32 | 11 | 32 | 0 | none | Yes |
| T6 | 16 | 4 | 12 | 4 | 12 | 0 | none | Yes |
| **Total** | **215** | **77** | **138** | **77** | **138** | 0 browser; 3 non-browser | 1 authorized | **Yes** |

Arithmetic: 22 + 57 + 65 + 12 + 43 + 16 = 215; 10 + 26 + 24 + 2 + 11 + 4 = 77; 12 + 31 + 41 + 10 + 32 + 12 = 138; 77 + 138 = 215.

Breakdown by type, derived from the controller rows of each audit:

| Type | T1 | T2 | T3 | T4 | T5 | T6 | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tab lists (read) | 1 | 1 | 1 | 1 | 1 | 1 | 6 |
| Tab selects (action) | 3 | 0 | 0 | 0 | 0 | 1 | 4 |
| Snapshots (read) | 2 | 10 | 9 | 3 | 10 | 3 | 37 |
| Finds (read) | 0 | 1 | 12 | 3 | 10 | 4 | 30 |
| Screenshots (read) | 9 | 19 | 19 | 3 | 11 | 4 | 65 |
| Ref-targeted clicks (action) | 2 | 8 | 14 | 2 | 9 | 3 | 38 |
| Coordinate clicks (action) | 5 | 1 | 2 | 0 | 2 | 0 | 10 |
| Mouse moves / wheel (action) | 0 | 0 | 3 / 3 | 0 | 0 | 0 | 3 / 3 |
| Key presses (action) | 0 | 16 | 2 | 0 | 0 | 0 | 18 |
| browser_type (action) | 0 | 1 | 0 | 0 | 0 | 0 | 1 |

Checks: reads 6 + 37 + 30 + 65 = 138; actions 4 + 38 + 10 + 3 + 3 + 18 + 1 = 77.

Limitation: controller snapshot rows do not show a target argument, so the worker's targeted/untargeted split of snapshots (for example, T2's targeted snapshot, deviation D6) is worker-reported only.

## 3. Cumulative exact counts (T1 to T6)

| Item | Count | Source |
| --- | --- | --- |
| Browser calls | 215 | section 2 |
| Toolbox placements | **1** | controller T2 #27 (Chart row click) |
| Canvas placement clicks | **1** | controller T2 #28 (coordinate click; the record gives (400, 220), line 146) |
| Property field changes | 9 | T2: grid Height, grid Top, chart Name, chart Top, Left, Width, Height (7); T3: Binding Type, Hidden (2) |
| Enter commits | 8 | T2: 7 (grid 2, chart 5; controller #11, #23, #40, #50, #58, #67, #76); T3: 1 (controller #73) |
| Property corrections | **0** | each field was entered once and read back; no second entry of any field |
| Binding dialog opens | **2** | T3 controller #27 (with OK); T5 controller #35 (read-only, with Cancel) |
| Binding dialog OK | 1 | T3 controller #52 |
| Binding dialog Cancel | 1 | T5 controller #40 |
| Chart Data adds | 1 | T3 controller #36 (FX_DerOrderTotal) |
| X-axis label selections | 1 | T3 controller #49 (FX_OrderNumber) |
| Designer Save clicks | **1** | T4 controller #11 (the only Save click in the run) |
| Designer Save errors | 0 | T4 native toast; no error text recorded |
| Designer close/reopen pairs | **1** | T5 controller #3 (close) and #11 (reopen) |
| Save-prompt answers (No / Yes) | 0 / 0 | no prompt recorded at close, reopen, dialog or runtime close |
| Runtime opens / closes | **1 / 1** | T6 controller #9 (open) and #18 (close) |
| F4 / runtime value change / runtime Save | 0 / 0 / 0 | T6 controller key rows: none |
| Key presses | 18 | T2 16 (digits and Enter); T3 2 (ArrowDown, Enter) |
| Text entry | 1 | T2 controller #37 (browser_type, rename; authorized) |
| Session re-logins | **0** | no Session Expired modal or sign-in page recorded in any task |
| Unload, checkout, FormSync, deployment, regenerate, Delete | 0 | no matching element in any controller row |
| FX_Orders or other Form opened | 0 | Form opens were FX_OrdersChart only (T5 #11, T6 #9) |
| Browser evaluate / run-code / console / network | 0 | none in any controller row |

Browser-level errors recorded by the controller: none.

## 4. Acceptance-check reconciliation (AC-1 to AC-6)

### AC-1 - Sources, session, clean User-scoped Designer, gate values

- Sources: transcript Section 5 step 7 and Section 6, the three recipes, and the EXP-062-R4 and EXP-097 records were read in T1 (controller T1 #1 to #4, #11, #12). AGENTS.md was read from disk in T2 (controller T2 #1); the T1 omission was waived by the operator (record line 5).
- Session usable: `gate-09-tab1-portal-webclient-state.png` (T1; Web Client tab state) and `t6-01-webclient-gate-before-open.png` (T6).
- User scope and clean Designer: `gate-01-designer-initial-components-form-props.png`. The record (line 101) describes it as showing the FX_OrdersChart header, Initial Command Refresh, Save and Undo greyed, `ScopeType: User`, and the Components grid starting at Pane (00) and FormCollectionGrid. It does not show all rows.
- 12 component rows and no Chart: the T1 accessibility snapshot (record line 29). The 12-row count rests on the snapshot, not the image.
- Form and grid Layout: recorded in the T1 section as Form Size 69; 21 (Unit Char), grid Size 69; 21 and Location 0; 0 (record line 138). Captures `gate-03-form-layout-values.png`, `gate-04-form-size-expanded.png`, `gate-07-grid-size-location-expanded.png` and `gate-08-grid-location-expanded.png` are the cited evidence; they were not re-viewed in T7.

**Status: supported.**

### AC-2 - Grid move, one Chart placement, rename, Layout, zero corrections

- Grid Location Top 0 to 14 (`t2-04`, `t2-05`, `t2-06`). Grid Height 21 to 6 under the operator amendment (`t2-02`, `t2-03`). Width 69 and Left 0 unchanged (`t2-03`, `t2-06`; readback `t5-10-reopened-grid-hidden-size-location.png`).
- One Toolbox placement: controller T2 #27 and #28 only. The new component is `chart1_USER`, Type Chart, default Size 31.25; 14.705882352941176 and default Location 6.6111111111111107; 17.75 (record line 146; `t2-07-chart-placed-above-grid.png`).
- Rename to FX_OrderTotalChart: `t2-08`, `t2-09`, `t2-10`. Reconfirmed in `t5-04`, `t5-05`, `t5-07` after reopen.
- Chart Layout: Top 1 and Left 0 (= grid Left), `t2-11` to `t2-14`. Size Width 69 (= grid width) and Height 12 (= grid Top 14 minus 2), `t2-15` to `t2-19`. Reconfirmed in `t5-07`.
- Corrections: none. Each field was entered once.
- Caveats: (a) the brief said Size stays unchanged for the grid; the Height change is the operator amendment. (b) The default chart geometry overlapped the grid's visual area until the Layout corrections (record line 229; `t2-07`). (c) The chart is a sibling of the grid, not contained in it (T3 preflight, record line 248).

**Status: supported, with the operator amendment and the temporary overlap noted.**

### AC-3 - Binding Type, dialog before and after, OK once, Hidden True

- Binding Type `Chart`: `t3-06-binding-type-chart-readback.png`; reconfirmed in `t3-19-final-chart-data-source-after-ok-readback.png` and `t5-07`.
- Dialog defaults before filling (record lines 537 to 548): Chart Style Single Series Charts; Chart Type Column2D; Show Caption On Top checked; Align Caption With Canvas checked; Load Just In Time unchecked; Bold checked for Caption and Sub-Caption; Binding Bind Chart To Entire Collection selected. Captures: `t3-07-binding-dialog-initial-before-fill.png`, `t3-08-binding-dialog-available-properties-scrolled.png`.
- Chart Data FX_DerOrderTotal (`t3-09-binding-dialog-after-add-fx-derordertotal.png`) and X-axis label FX_OrderNumber (`t3-12-binding-dialog-before-ok-both-set.png`, state before OK).
- OK once: controller T3 #52. Post-OK readback: `t3-13-after-binding-ok-readback.png`; chart Binding Type Chart, Binding `V(cds_FX_OrderTotalChart)` (`t3-19`).
- Independent post-reopen check (T5, read-only, one open, Cancel once): `t5-08-binding-dialog-reopened-readonly.png` (X-axis FX_OrderNumber and Chart Data FX_DerOrderTotal as recorded in T5). Cancel: controller T5 #40; `t5-09-after-binding-cancel-state.png`.
- Hidden True: `t3-17-hidden-true-readback.png`, `t3-18-hidden-true-committed-readback.png`; reconfirmed `t5-10-reopened-grid-hidden-size-location.png`.
- Caveats: (a) after OK in T3 only Binding Type, Binding, Size and Location were read back; Chart Data and X-axis were re-read only in the T5 reopen (record line 264). (b) The FX_DerOrderTotal caption auto-filled as `sFX_DerOr…` and is truncated; the full value was not read (record line 374). (c) The X-axis option and the Hidden True option were taken from read-only find results (deviation D11).

**Status: supported, with caveats (a) to (c).**

### AC-4 - One Save with native response; one close/reopen; read-backs unchanged; clean at end

- One Save: controller T4 #11, the only Save click in the run. Native response: toast `Save — Form [FX_OrdersChart] and global object(s) were saved.` (`t4-02-save-immediate-response.png`, re-viewed in T7). Also visible in that image: Hidden True in Properties, Save and Undo greyed, ScopeType User. No error and no dialog.
- Save and Undo after Save: `t4-03-post-save-designer-state-clean.png` (state as recorded in the T4 section; not re-viewed in T7).
- One close/reopen: controller T5 #3 (close) and #11 (reopen). No prompt (`t5-01-after-form-tab-close.png`). Reopened: `t5-02-reopened-form-identity-scope-save-state.png`; record line 629 states User scope, Save and Undo disabled, Initial Command Refresh.
- Readbacks after reopen, compared with the pre-save values in the T4 section:
  - Components: 13 rows including FX_OrderTotalChart (`t5-04`, `t5-05`, `t5-06`).
  - FX_OrderTotalChart: Binding Type Chart, Binding `V(cds_FX_OrderTotalChart)`, Size 69; 12, Location 1; 0 (`t5-07`).
  - FormCollectionGrid: Hidden True, Size 69; 6, Location 14; 0 (`t5-10`).
  - Initial Command Refresh (T5 record, line 629).
- Clean at end: Save and Undo disabled after the readbacks and the Cancel (T5 find results; `t5-09`, `t5-11-final-clean-state-before-stop.png`).
- Caveats: no chart-binding readback was taken between the Save and the close; the comparison is the T4 pre-save readback against the T5 post-reopen readback. Persistence is same-session UI observation only; it is not cross-session or database-level durability.

**Status: supported, with the caveats above.**

### AC-5 - Runtime open once, no F4, observed display, one clean close

- One open: controller T6 #9 (Form menu recent-forms FX_OrdersChart). No F4 and no query key (T6 controller key rows: none). No runtime value changed.
- Chart drawn: yes. Column chart with bars on a Y axis 0 to 100 (`t6-02-runtime-fx-orderschart-opened-no-f4.png`, re-viewed in T7; `t6-03-runtime-chart-region-detail.png`).
- Type: the runtime does not display a type name. The vertical-column appearance is consistent with the Column2D setting recorded in T3 (record line 659). This is an inference.
- X-axis labels: 1 and 2 (record line 655; the accessibility tree and the image).
- Values: labels "90" and "6.99". The bar for label 1 reaches about 90 on the 0 to 100 axis; the bar for label 2 is short. **The expected string "90.00" was not displayed; the value was displayed as "90".** The brief allowed "or proportional", and the bar heights are proportional, so the expectation is met by bar heights, not by the text.
- Legend and title: none visible.
- Grid: not visible. A find for "Order Total" returned no match and the Form's tab-panel subtree contains only the chart image (record line 666). This is consistent with Hidden True in the Designer, but it is not a runtime readout of that property.
- Status bar: `(Object 1 of 2)` (record line 667).
- Messages: no runtime message is recorded in the T6 section. The Designer page snapshot showed "Console: 2 errors" (record line 74); console inspection is out of scope and was not performed.
- One close, clean: controller T6 #18; no prompt; `t6-04-after-runtime-close-clean-state.png`.

**Status: supported, with the "90" versus "90.00" difference and the undisplayed type name recorded as observations.**

### AC-6 - Boundaries, prohibited actions, deviations, inventory

- No second Toolbox placement and no removal: the only Toolbox row click is controller T2 #27; no Delete or Regenerate click appears in any controller row.
- No other component or property change: the complete list is in section 3. Expansion clicks (controller T3 #10, #60; T5 #15, #22, #25; T1 expansions) were view-only.
- FX_Orders: not opened or changed (no controller row names it).
- No runtime Save, no F4, no runtime value change: T6 controller key rows none; no Save click after T4.
- No unload, checkout, FormSync, deployment or regeneration: none in any controller row.
- No Yes answer: no prompt was recorded.
- Task boundaries: T1 stopped at the grid blocker; T2 stopped before Binding, Hidden and Save; T3 stopped before Save; T4 stopped after one Save; T5 stopped before runtime; T6 stopped after one runtime close; T7 made no browser calls.
- Re-logins: 0.

**Status: supported, with the disclosed deviations in section 5.**

## 5. Deviations and operator dispositions

"Recorded disposition" means the disposition is stated in the record. "Coordinator instruction" means the worker's brief or summary says so, but the record does not restate it. Items marked **Review** need an explicit operator decision.

| ID | Task | Deviation | Evidence | Disposition | Action |
| --- | --- | --- | --- | --- | --- |
| D1 | T1 | AGENTS.md not read from disk in T1 | T1 section; controller T1 has no AGENTS.md read | Waived by operator (record line 5) | none |
| D2 | T1 | Failed Read of the EXP-098 record before it existed (non-browser) | controller T1 #5 "File does not exist" | Not in the record; no effect on Designer or runtime | **Review** |
| D3 | T1 | Grid move blocked by the brief's formula (computed Top −1, below the threshold of 12) | T1 section | Resolved by operator amendment (record line 5) | none |
| D4 | T2 | Grid Height 21 to 6 (brief said Size unchanged) | record line 5; `t2-02`, `t2-03` | Operator amendment (recorded) | none |
| D5 | T2 | Keys "1" and "4" issued in one parallel block | record line 165; controller T2 #19, #20 | Record calls it a brief breach; both completed; value verified "14" before commit (`t2-05`). Waiver is a coordinator instruction, not restated in the record | **Review** |
| D6 | T2 | Targeted snapshot (ref e1198) returned only the Name row; an untargeted snapshot supplied the textbox ref | record line 166; controller T2 #35, #36 (no target argument shown) | Not verifiable from controller logs. No stale ref was clicked; value confirmed (`t2-10`) | **Review** |
| D7 | T2 | browser_type used for the rename | controller T2 #37 (flagged, authorized) | Authorized by coordinator instruction | none |
| D8 | T2 | Default chart geometry overlapped the grid visual area until Layout corrections | record line 229; `t2-07` | Accepted under coordinator instruction; not restated in the record | confirm |
| D9 | T2 | Chart landed as a sibling of the grid, not contained | record line 248 (empty Container, Pane (00)) | Accepted under coordinator instruction ("sibling-containment interpretation"); not restated in the record | confirm |
| D10 | T3 | Hidden drop-down opened by ArrowDown; Hidden value-cell ref from a read-only find | record line 284; controller T3 #63, #64, #68 | Method only; no parallel action; Hidden True confirmed by readback (`t3-17`, `t3-18`) | none |
| D11 | T3 | X-axis option and Hidden True option refs taken from read-only find results after the snapshot list overflowed inline | record line 285; controller T3 #46 to #48, #69, #70 | Refs not stated as accepted for EXP-098 in the record. Both values confirmed by readback (`t3-13`, `t3-17`) | **Review** |
| D12 | T3 | Grep denied for a persisted tool-result file (non-browser) | controller T3 #47 | Operator accepted for EXP-098 only (record line 389) | none |
| D13 | T3 | Edit string not found for a documentation edit (non-browser) | controller T3 #88 | Operator accepted for EXP-098 only (record line 389); record later updated by controller #89 to #93 | none |
| D14 | T3 | After OK, Chart Data and X-axis were not re-read | record line 264 ("Not verified") | Resolved by the T5 read-only reopen (`t5-08`) | none |
| D15 | T3 | Designer tab URL lost the `&MGForm=FX_OrdersChart` suffix after the dialog OK | record lines 261, 280, 367 | Observed; identity confirmed by the canvas header, the Properties header and the status bar | none |
| D16 | T4 | Save click targeted by ref e16; the tool reported element `#ext-element-121` | T4 section limitations | Mapping inferred from snapshot and toast; the toast confirms the outcome | none |
| D17 | T5 | Full snapshot overflowed inline; Cancel ref taken from a read-only find, then clicked | controller T5 #38 to #40; T5 section | Not in the record as an operator disposition. Cancel closed the dialog; Save and Undo verified disabled | **Review** |
| D18 | T5 | Coordinate clicks to expand the Components pane and grid children | controller T5 #22, #25 | View-only; no property edit | none |
| D19 | T6 | Runtime value label reads "90" (expected "90.00") | `t6-02`; record lines 652 to 660 | Observation; bar height is proportional, which the brief allowed | none |
| D20 | all | Designer page showed "Console: 2 errors" | record line 74 | Not inspected (out of scope) | none |
| D21 | T3 | The failed Edit #88 payload contained a draft tally of "58 total", "find 7" and "59 final"; the controller count is 65 calls with 12 finds | controller T3 #88 error text; controller T3 summary (24 actions, 41 reads) | The draft figures are superseded by the controller counts; the cumulative figure in the record (144 after T3) matches the controller | **Review** (note only) |
| D22 | all | Harness-generated console logs, page-metadata files and a persisted snapshot file | `evidence/playwright/*`; tool-results folder | Not worker-authored; not inspected | none |

Summary for the operator: D2, D5, D6, D11, D17 and D21 need an explicit disposition for the formal decision. D8 and D9 need confirmation that the coordinator's acceptance applies. None of these deviations changed a configured value; each affected action was confirmed by readback where a readback was taken.

## 6. Worker-written file inventory (cumulative)

Written by this worker in EXP-098:

- `experiments/EXP-098-hello-world-part-6-section-6-fx-orderschart-chart-component.md` (created in T1; updated in T2 to T6; T7 pointer added after this audit)
- `evidence/EXP-098/gate-01-designer-initial-components-form-props.png` to `gate-09-tab1-portal-webclient-state.png` (9 files, T1)
- `evidence/EXP-098/t2-01-before-grid-height-edit.png` to `t2-19-chart-layout-readback-after-height-12.png` (19 files, T2)
- `evidence/EXP-098/t3-01-gate-grid-selected-layout-verify.png` to `t3-19-final-chart-data-source-after-ok-readback.png` (19 files, T3)
- `evidence/EXP-098/t4-01-pre-save-gate-grid-selected.png` to `t4-03-post-save-designer-state-clean.png` (3 files, T4)
- `evidence/EXP-098/t5-01-after-form-tab-close.png` to `t5-11-final-clean-state-before-stop.png` (11 files, T5)
- `evidence/EXP-098/t6-01-webclient-gate-before-open.png` to `t6-04-after-runtime-close-clean-state.png` (4 files, T6)
- `evidence/EXP-098/T7-final-acceptance-audit.md` (this file, T7)

Totals: 65 PNG captures (9 + 19 + 19 + 3 + 11 + 4), confirmed by directory listing in T7; 1 experiment record; 1 audit document.

Not worker-written (listed for confinement review): `evidence/EXP-098/harness-audit-T1.md` to `harness-audit-T6.md` (controller-generated), `evidence/playwright/*` (browser-tool output), and one persisted snapshot in the tool-results folder (not read). Operator git review remains authoritative for repository confinement.

## 7. Final state (last observed in T6; unchanged in T7)

- Designer (tab 0): FX_OrdersChart, `ScopeType: User`, clean (Save and Undo disabled at the end of T5; no Designer interaction in T6 or T7). Components: Pane (00); FormCollectionGrid (Hidden True; Size 69; 6; Location 14; 0); 10 GridColumns; FX_OrderTotalChart (Chart; Binding Type Chart; Binding `V(cds_FX_OrderTotalChart)`; Size 69; 12; Location 1; 0). Initial Command Refresh; Form Size 69; 21 (Unit Char).
- Web Client (tab 1): Mongoose Explorer; no runtime Form open; no prompt recorded. Tab 1 was the last selected tab (T6).
- Open in-page dialogs or prompts: none recorded.

## 8. Recommendation

All six acceptance checks are supported by the recorded evidence after reconciliation (section 4). The browser-call totals reconcile exactly with the controller audits for every task (section 2). Task boundaries and prohibited-action limits were respected in the controller logs. The open items are process deviations that need explicit operator disposition (section 5: D2, D5, D6, D11, D17, D21; confirmation of D8 and D9). None changed a configured value.

**Recommendation: ACCEPTED AS OBSERVED**, conditional on the operator's disposition of the Review items in section 5.

Constraints on this recommendation:
- Observed only; not replay_verified.
- Persistence is same-session UI observation. Cross-session and database-level durability are not claimed.
- Runtime values come from the accessibility tree and the rendered image, not from an independent data check. The runtime value reads "90", not "90.00", and the runtime chart type name was not displayed.
- Absence of the grid at runtime is an observation from the accessibility tree and the image.
- The formal completion decision remains with the coordinator.

No further browser task is proposed for EXP-098. T7 takes no further action.
