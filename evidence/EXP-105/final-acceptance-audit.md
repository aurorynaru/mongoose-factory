# EXP-105 final acceptance audit (documentation only)

Run: R-20261016-114004-XV8X. Worker session 82eaaa45-17fc-47b9-89bb-0317d1b5c457. Task message e149ca25-7acb-4683-83ab-393fecc1cc44 (cycle 12, bounded audit task T9).

Scope of this task: documentation-only audit. No browser calls, no Mongoose changes, no close or reopen of FX_CustomerPortal, no screenshot retries, no readback. Findings are observed only.

## 1. Recommendation (summary)

**ACCEPTED AS OBSERVED, conditional.** The functional checks AC-1 to AC-4 are supported by same-session UI evidence. Final acceptance is conditional on operator disposition of the items in section 6 (D1 to D6). D1 (the global-object wording of the Designer Save toast) is an AC-5 condition that this audit cannot resolve from the evidence. AC-6 is certified only for call-level counts, reconciled to the controller tables in section 4; it is not certified unconditionally.

## 2. Sources reviewed in this task

- Controller-generated tables: `evidence/EXP-105/harness-audit-T1.md` to `harness-audit-T8.md` (eight tables; mapping in section 4.1). These are controller output, not worker prose.
- Experiment record: `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` (read in full).
- Worker records: `evidence/EXP-105/t1b-gate-record.md`, `t2-record.md`, `t2c-record.md` (read in this task). `t2b-record.md`, `t3-record.md`, `t3c-record.md` and `t4-record.md` were read or written in earlier tasks in this session; their figures are cited as recorded and then compared with the controller tables.
- Screenshots viewed in this task: `t1b-gate-04-components-tree-expanded.png`, `t2-gate-01-form-clean-components-tree.png`, `t2-placement-02-components-tree-after-click.png`, `t2c-save-01-after-single-save.png`, `t2c-theme-02-after-tab.png`, `t2c-attrs-01-dialog-default-open.png`. Screenshots from T3 and T4 (`t3c-*`, `t4-*`) were viewed in the earlier tasks T7 and T8 and are cited on that basis.
- Not read in this task: the worker session transcript and any `.claude` session file (not accessed, per the bounded instruction). `tools/` was not read. No unrelated experiment body was read in this task.

## 3. AC-1 to AC-6 matrix

| ID | Verdict (observed, same session) | Decisive evidence (repo-relative) | Limitations / open items |
| --- | --- | --- | --- |
| AC-1 Gate: sources reviewed; session usable; User scope; FX_CustomerPortal open and clean with root regions header, main, footer; header region located on canvas | **Met**, with one source-review exception (D2) | `evidence/EXP-105/t1b-gate-04-components-tree-expanded.png` (viewed): Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00: header, Region01: main, Region02: footer; Save greyed; status bar ScopeType User. `evidence/EXP-105/t2-gate-01-form-clean-components-tree.png` (viewed): same tree; Save and Undo greyed. `evidence/EXP-105/t1b-gate-02-form-opened-canvas.png` (record only): header strip above the first dotted divider. | The footer row is not visible on the canvas in these captures (the tree confirms it). Session-usable is inferred from the absence of expiry or sign-in views in the captures and the record. The EXP-105 record was not read before the first browser call of T8 (D2). |
| AC-2 One FlexLayout placed by Toolbox selection and one canvas click, child of Region00: header; renamed FlexLayoutHeader; Theme Class FX_BlueBackground; at most one correction per field; one Designer Save with response; default attributes read-only with Cancel | **Met** (observed) | Placement: `evidence/EXP-105/t2-placement-02-components-tree-after-click.png` (viewed): flexLayout1_USER (FlexLayout) indented under Region00: header, with Region00: UNKNOWN0 beneath; Properties Name flexLayout1_USER, Type FlexLayout. Only one canvas placement click (coordinate click at (400, 135), controller row 17 of harness-audit-T3). Name: `evidence/EXP-105/t2c-save-01-after-single-save.png` (viewed): Properties Name FlexLayoutHeader; tree row FlexLayoutHeader; Save toast. Theme Class: `evidence/EXP-105/t2c-theme-02-after-tab.png` (viewed): FX_BlueBackgroun (truncated), accessibility tree FX_BlueBackground. Save: `t2c-save-01-after-single-save.png` (viewed): toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save greyed afterwards (snapshot in `t2c-record.md`). Default attributes: `evidence/EXP-105/t2c-attrs-01-dialog-default-open.png` (viewed): Type HorizontalBox; one region UNKNOWN0 (1 Flex). Region and list values: `t2c-attrs-02` to `t2c-attrs-06` (record). Cancel once: controller row 75 of harness-audit-T5. | Corrections: 0 for Name and Theme Class. The Name entry was hook-blocked twice before the one successful entry (blocked calls are not corrections). In `t2c-save-01` the Properties header combo still reads `flexLayout1_USER (FlexLayout)`: an observed lag, cleared later (T3 record). Theme Class is truncated in the column; the full value is confirmed only by the accessibility tree. The Alignment (Top, Middle, Stretch) and Pack (Start, Center, End) option lists are from the record (`t2c-attrs-03`, `t2c-attrs-05`), not re-viewed here. The Save toast names "global object(s)" (D1). |
| AC-3 Two regions: index 0 header (1 Flex, Horizontal, Middle, Start); index 1 user (1 Flex, Horizontal, Middle, End, Default Margin 1,0,0,0); Type unchanged; Regions grid before OK; OK once; one Designer Save with response | **Met as displayed** (observed), with two gaps (D4, P7) | Region 0: `evidence/EXP-105/t3c-region0-01-selected-before-ok.png` (viewed in T7): ID header; Alignment Middle; Pack Start; Default Margin blank; Orientation Horizontal partly cut off. Region 1: `t3c-region1-01-all-values-entered.png` (viewed in T7): Alignment Middle, Pack End, Default Margin 1,0,0,0; ID, Length, Unit scrolled above view (snapshot only). Grid before OK: `t3c-regions-grid-before-ok.png` (viewed in T7): `0 header 1 Flex`, `1 user 1 Flex`. OK: controller row 58 of harness-audit-T7; dialog closed in the next snapshot (accessibility). Save: `t3c-save-01-after-designer-save.png` (viewed in T7): same toast. Type unchanged: HorizontalBox in `t3b-gate-01` (record), `t4-region0-01` and `t4-region1-02`. | Gap D4: no screenshot of the OK response; the OK response is evidenced only by the accessibility snapshot (dialog closed) and the subsequent Save. P7: Orientation was not re-entered (already Horizontal), and Length and Unit were not re-entered (already 1 and Flex), so the brief's "set Orientation before Alignment and Pack" sequence was not exercised. Save state was read from the greyed icon in `t3c-save-01`; no snapshot was taken after that Save in T7. Both were corrected in the T8 readback. |
| AC-4 After one ordinary close and reopen: Name FlexLayoutHeader, Theme Class FX_BlueBackground, both regions, root regions unchanged, dialog Cancel, Form open and clean | **Met as observed, same session only** | Close: controller row 14 of harness-audit-T8 (one click on the Form-tab close control); `evidence/EXP-105/t4-pre-close-01-clean-form-state.png` (viewed in T8): clean, Save and Undo greyed. No save prompt. Reopen: controller rows 16 to 19 (Form menu, recent-forms entry, no Select Form OK). Name and Theme Class: `evidence/EXP-105/t4-reopen-04-properties-name-and-theme-class.png` (viewed in T8): Name FlexLayoutHeader; Type FlexLayout; Theme Class FX_BlueBackgroun (truncated); accessibility tree FX_BlueBackground. Tree: `t4-reopen-02-components-tree-expanded.png` and `t4-reopen-03-components-tree-scrolled.png` (viewed in T8): FlexLayoutHeader under Region00: header with Region00: header and Region01: user beneath; Region01: main and Region02: footer at root. Regions: `t4-region0-01-index0-header-selected.png`, `t4-region1-01-index1-user-selected.png`, `t4-region1-02-index1-user-properties-scrolled.png`, `t4-regions-grid-readback.png` (viewed in T8). Cancel: controller row 64; `t4-final-01-clean-state-after-cancel.png` (viewed in T8). | Same-session UI observation only; this is not database-level, cross-session or runtime persistence (per the brief). Nested hierarchy rests on visual indentation (accessibility rows are flat). Root regions: names and order confirmed; root region attributes were not reopened (out of T4 scope). The tooltip was confirmed by find (accessibility), not by the image. Region 1 Length, Unit and Orientation were read from the snapshot (scrolled out of the image). |
| AC-5 No other component, region or Form changed; no global object created or changed; no Regenerate; no dragging; Undo at most once; no runtime; no unload; no checkout; User scope; no task-boundary overrun | **Partially met.** Unresolved: global-object question (D1). Procedural: coordinate pointer moves (D3). | No other component: exactly one nested FlexLayoutHeader in the T8 tree; no placement click after T2 (controller tables). Other Forms: the only recent-forms entry used is FX_CustomerPortal (controller rows in harness-audit-T2, T5, T8). Undo: 0 calls in all eight tables. Regenerate: 0 calls; the button stayed disabled in the captures. Drag: no drag calls. Runtime, unload, navigation, refresh, checkout: no such calls in any table. Tab selection: the controller logs the action only (`action=select`); the worker records state that index 1 (Designer) was selected in every task. User scope: status bar ScopeType User in the gate and final captures. Task boundaries: T1 stopped at gate; T2 stopped at end of T2; T2b and T3a stopped at a blocker; T7 stopped after T3 (no T4); T8 stopped after T4. | **D1:** the Designer Save toast in T2 and T3 reads "Form [FX_CustomerPortal] and global object(s) were saved." (`t2c-save-01`, `t3c-save-01`, viewed). `experiments/EXP-103-R3-hello-world-part-7-section-3-fx-customer-portal-root-regions-replay.md` (Outcome, finding 3, line 402, as read in earlier tasks) records that a form-definition save showed no message. `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md` (Outcome, line 752, as read in earlier tasks) associates the "global object(s)" wording with a Form save that included theme changes. The EXP-105 saves therefore contain a global-object signal whose source is not established. The worker made no theme, class, string, image or variable change, but the UI cannot show which global object(s) were written. **D3:** two `browser_mouse_move_xy` calls (900,800) and (1100,570) positioned the pointer before ordinary wheel scrolls in T8. They were not clicks, but the T8 brief limited coordinates to the canvas placement click and nested canvas icons. Coordinate-click count remains 1 (the placement). Two `Ref not found` screenshot errors (T8) were recovered with one fresh untargeted snapshot each; no mutation was retried. |
| AC-6 Final report with decisive evidence for AC-1 to AC-5, complete action audit with exact counts, inventory and final state | **Certified for call-level counts only** (section 4); conditional overall | This file; `evidence/EXP-105/t4-record.md` (T4 counts); the controller tables `harness-audit-T1` to `T8`; worker inventory in section 5; final state in section 8. | Not certifiable unconditionally, because: (i) the controller logs file-tool arguments only as file paths, so the offset and limit of the Outcome-section reads cannot be verified; (ii) the controller does not log the arguments of snapshots and screenshots (targets) or the coordinates of `mouse_move_xy`; the coordinates come only from the T8 worker record; (iii) snapshot contents and screenshot contents are not in the controller; (iv) the OK response has no screenshot (D4); (v) D1 and D2 are open. Worker-record totals that disagree with the controller are listed in section 4.4 and corrected in the experiment record. |

## 4. Reconciled action counts

### 4.1 Mapping of controller tables to worker tasks

| Controller table | Worker task (record) | Browser content |
| --- | --- | --- |
| `harness-audit-T1.md` | T1 attempt 1 (`t1-gate-browser-unavailable.md`) | Tab list timeouts (2) and snapshot timeout (1); no Mongoose state seen |
| `harness-audit-T2.md` | T1 attempt 2 (`t1b-gate-record.md`) | Gate; one Form open via recent-forms; read-only inspection |
| `harness-audit-T3.md` | T2 attempt 3 (`t2-record.md`) | Toolbox selection; one canvas placement click; Name editor hook-blocked |
| `harness-audit-T4.md` | T2 attempt 4 (`t2b-record.md`) | Name editor still open; hook-blocked again; find for confirmation |
| `harness-audit-T5.md` | T2 attempt 5 (`t2c-record.md`) | Name entry; Theme Class; one Save; default attributes; Cancel |
| `harness-audit-T6.md` | T3 attempt (`t3-record.md`) | Regions +; guard I/O error on snapshot; dialog left open |
| `harness-audit-T7.md` | T3 continuation, the bounded "T7" task (`t3c-record.md`) | Regions completed, OK, one Save; denied transcript Grep |
| `harness-audit-T8.md` | T4 (`t4-record.md`) | Close, recent-forms reopen, readback, Cancel |

Controller counting rule (inferred from the tables and checked against the worker records): an action is a click, hover, mouse move, wheel, key press, text entry, tab selection or click-to-select; a read is a snapshot, screenshot (including failed ones), find or tab listing. File tools (Read, Glob, Grep, Write, Edit) are excluded from browser counts. The controller's stated totals (for example T7 "23 actions, 27 reads") are reproduced from the row-level tables under this rule.

### 4.2 Per-task controller totals

| Task | Actions | Reads | Ref clicks | Coord. clicks | Hovers | Mouse move / wheel | Text entries (ok / blocked) | Tab keys | Tab select | Tab list | Snapshots ok / err | Screenshots ok / err | Finds |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1 attempt 1 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 (err) | 0 / 1 | 0 / 0 | 0 |
| T1 attempt 2 | 6 | 7 | 5 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 2 / 0 | 4 / 0 | 0 |
| T2 attempt 3 | 5 | 8 | 2 | 1 | 0 | 0 | 0 / 1 | 0 | 1 | 1 | 3 / 0 | 4 / 0 | 0 |
| T2 attempt 4 | 2 | 4 | 0 | 0 | 0 | 0 | 0 / 1 | 0 | 1 | 1 | 1 / 0 | 1 / 0 | 1 |
| T2 attempt 5 | 19 | 32 | 13 | 0 | 2 | 0 | 1 / 0 | 2 | 1 | 1 | 14 / 0 | 17 / 0 | 0 |
| T3 attempt | 7 | 12 | 4 | 0 | 2 | 0 | 0 | 0 | 1 | 1 | 5 / 1 (hook) | 5 / 0 | 0 |
| T3 continuation (T7) | 23 | 27 | 16 | 0 | 0 | 0 | 3 / 0 | 3 | 1 | 1 | 20 / 0 | 6 / 0 | 0 |
| T4 (T8) | 17 | 32 | 11 | 0 | 1 | 2 / 2 | 0 | 0 | 1 | 1 | 17 / 0 | 10 / 2 (Ref not found) | 2 |
| **Total** | **79** | **125** | **51** | **1** | **5** | **2 / 2** | **4 ok, 2 blocked** | **5** | **7** | **9 (7 ok, 2 failed)** | **62 ok, 2 err** | **47 ok, 2 err** | **3** |

Totals check: 79 actions = 0+6+5+2+19+7+23+17; 125 reads = 3+7+8+4+32+12+27+32; 51 clicks = 5+2+13+4+16+11; 47 successful screenshots = 4+4+1+17+5+6+10, and the 47 PNG files in the inventory match this figure.

Controller-derived dialog and field-level counts (T7 and T2 attempt 5 detail):
- Dialog opens: 3 (T2 attempt 5, T3 attempt, T4). Exits: Cancel 2 (T2 attempt 5, T4); OK 1 (T7). Region adds: 1 (T3 attempt). Region deletes, reorders: 0.
- Region field entries in T7: 6 (text entries 3: region 0 ID, region 1 ID, region 1 Default Margin; option picks 3: region 0 Alignment, region 1 Alignment, region 1 Pack). Corrections: 0.
- Name entries: 1 successful (T2 attempt 5); 2 hook-blocked calls (T2 attempt 3 and 4). Corrections: 0.
- Theme Class entries: 1 (T2 attempt 5); corrections: 0.
- List opens: 6 (T2 attempt 5: Theme Class, Alignment, Pack; T7: region 0 Alignment, region 1 Alignment, Pack). Pack trigger click in T7 produced no list on its first click (row 38); the list opened on the arrow click (row 40).
- Designer Saves: 2 (T2 attempt 5, row 42; T7, row 60). OK clicks: 1 (T7, row 58). Undo: 0. Regenerate: 0.
- Form opens: 2 (T1 attempt 2, recent-forms; T4, recent-forms). Form closes: 1 (T4, Form-tab control). Prompts: 0.
- Hook errors: 3 (two blocked text entries, one blocked snapshot). Ref not found: 2 (T4). Server-event errors: 0. Re-logins: 0.
- Flagged `browser_type` tool name: 6 calls. Four succeeded and were authorized entries (one Name, three in T7); two were hook-blocked. The four successful entries are not violations.
- Denied file search: 1 (T7, Grep over the worker session transcript; permission denied; not retried). Not a browser call.

### 4.3 Pre-compaction part of T7, now resolved

The T7 record (`t3c-record.md`) left the pre-compaction part approximate. The controller table for T7 (rows 1 to 35 before the first post-compaction action) resolves it exactly:
- Tab list 1 and tab select 1 (rows 9 and 10): the T7 record did not itemize these.
- Reference clicks 7 (rows 14, 16, 21, 23, 27, 29, 34): the record said "at least 2".
- Text entries 2 (ID header, ID user) and Tab keys 2: consistent with the record's "at least 2" text entries; the Tab presses were not itemized.
- Snapshots 10 and screenshots 2: the record gave 2 screenshots and did not itemize snapshots.
- Pre-compaction field entries: region 0 ID and Alignment, region 1 ID; list opens 2 (region 0 Alignment, region 1 Alignment).

Post-compaction part of T7 (rows 36 to 62): reference clicks 9, text entries 1, Tab keys 1, snapshots 10, screenshots 4, list opens 1, option picks 2. These match `t3c-record.md`. (The untargeted/targeted split of those snapshots, 4 and 6, is from the worker record; the controller does not log targets.)

### 4.4 Worker-record figures that disagree with the controller

| Figure | Worker record | Controller | Disposition |
| --- | --- | --- | --- |
| Cumulative tab listings through T8 | 8 (`t4-record.md`) | 9 (7 succeeded, 2 failed) | Record omitted the T7 pre-compaction list call. Corrected here. |
| Cumulative tab selections through T8 | 6 (`t4-record.md`) | 7 | Same omission. Corrected here. |
| Cumulative successful snapshots through T8 | 54 (`t4-record.md`: 27 + 10 + 17) | 62 (25 + 20 + 17) | The "27 through T3 attempt" figure is 25 by the controller; the T7 pre-compaction snapshots (10) were not counted. Corrected here. |
| Cumulative snapshot total at T2 attempt 5 | 22 (1 failed, 21 succeeded) (`t2c-record.md`) | 21 (1 failed, 20 succeeded) | The earlier cumulative sums in the record carried a +1 arithmetic error from the attempt-3 total. Corrected here. |
| Cumulative reference clicks through T8 | 44 plus "at least 2" (`t4-record.md`) | 51 | The T7 pre-compaction clicks (7) were under-stated. Corrected here. |
| Region-0 field entries | "approximate" (`t3c-record.md`) | exact: region 0 ID (1 text) and Alignment (1 pick) | Resolved here. |
| T8 untargeted and targeted snapshots | 13 and 4 (`t4-record.md`) | 17 total (controller does not log targets) | Consistent. |
| T8 screenshots | 10 ok, 2 failed | 10 ok, 2 failed | Consistent. |
| T8 reference clicks | 11 | 11 | Consistent. |
| T7 post-compaction counts | as recorded | as recorded | Consistent. |
| Screenshot files (PNG) | 47 successful screenshots | 47 PNG files in the inventory | Consistent. |
| Hook errors | 3 | 3 | Consistent. |

The totals in `t4-record.md` (section "Cumulative EXP-105 audit") and the cumulative lines of the experiment record are superseded by section 4.2 of this file.

### 4.5 Quantities that remain unknown from authorized evidence

- Snapshot and screenshot targets: the controller logs "(no key/element/filename argument)" for targeted and untargeted calls alike. The worker records state which calls were targeted; those statements are not independently verifiable.
- Coordinates of the two `mouse_move_xy` calls in T8: from the T8 worker record only.
- Offsets and limits of file reads of the Outcome sections (EXP-103-R3 and EXP-065): not logged; the worker records state offset 392 and offset 731 respectively.
- Contents of the file-search calls (section 6, P10).
- Whether the "global object(s)" save text reflects a write to a global object (D1).

## 5. Worker-written files (EXP-105 paths)

Experiment record (created in T1 attempt 1, updated in each later task): `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md`.

Evidence records (`evidence/EXP-105/`):
- `t1-gate-browser-unavailable.md`; `t1b-gate-record.md`
- `t2-record.md`; `t2b-record.md`; `t2c-record.md`
- `t3-record.md`; `t3c-record.md`
- `t4-record.md`
- `final-acceptance-audit.md` (this file, created in T9)

Evidence PNG files (47 successful screenshots):
- T1 attempt 2: `t1b-gate-01-designer-fresh-screenshot.png`, `t1b-gate-02-form-opened-canvas.png`, `t1b-gate-03-details-components-collapsed.png`, `t1b-gate-04-components-tree-expanded.png`
- T2 attempt 3: `t2-gate-01-form-clean-components-tree.png`, `t2-toolbox-01-flexlayout-row-selected.png`, `t2-placement-02-components-tree-after-click.png`, `t2-name-01-editor-open-hook-blocked.png`
- T2 attempt 4: `t2b-gate-01-unsaved-placement-name-editor-open.png`
- T2 attempt 5: `t2c-gate-01-inherited-state-name-editor-active.png`, `t2c-name-02-flexlayoutheader-after-tab.png`, `t2c-name-03-reselected-properties-header.png`, `t2c-appearance-01-expanded-properties.png`, `t2c-appearance-02-after-properties-expand.png`, `t2c-theme-01-list-opened.png`, `t2c-theme-02-after-tab.png`, `t2c-save-01-after-single-save.png`, `t2c-adorner-01-hover-icon5.png`, `t2c-adorner-02-hover-edit-icon1.png`, `t2c-attrs-01-dialog-default-open.png`, `t2c-attrs-02-region0-selected-default.png`, `t2c-attrs-03-alignment-list-open.png`, `t2c-attrs-04-alignment-list-closed-no-change.png`, `t2c-attrs-05-pack-list-open.png`, `t2c-attrs-06-pack-list-closed-no-change.png`, `t2c-attrs-07-after-cancel-save-state.png`
- T3 attempt: `t3-gate-01-form-clean-tree-expanded.png`, `t3-adorner-01-hover-icon1.png`, `t3-adorner-02-hover-icon2-tooltip.png`, `t3-dialog-01-start-one-region.png`, `t3-dialog-02-after-add-region.png`
- T3 continuation (T7): `t3b-gate-01-dialog-open-two-regions-uncommitted.png`, `t3b-region0-01-id-header-alignment-middle.png`, `t3c-region1-01-all-values-entered.png`, `t3c-region0-01-selected-before-ok.png`, `t3c-regions-grid-before-ok.png`, `t3c-save-01-after-designer-save.png`
- T4 (T8): `t4-pre-close-01-clean-form-state.png`, `t4-reopen-02-components-tree-expanded.png`, `t4-reopen-03-components-tree-scrolled.png`, `t4-reopen-04-properties-name-and-theme-class.png`, `t4-reopen-05-edit-adorner-tooltip-hover.png`, `t4-region0-01-index0-header-selected.png`, `t4-region1-01-index1-user-selected.png`, `t4-region1-02-index1-user-properties-scrolled.png`, `t4-regions-grid-readback.png`, `t4-final-01-clean-state-after-cancel.png`

Count check: 4 + 4 + 1 + 17 + 5 + 6 + 10 = 47 PNG files, equal to the successful screenshot count in section 4.2.

Controller-generated files in `evidence/EXP-105/` (not worker-written): `harness-audit-T1.md` to `harness-audit-T8.md`.

Worker writes in this task (T9): `evidence/EXP-105/final-acceptance-audit.md` (created) and `experiments/EXP-105-…md` (edited; see section 9). No other file was written.

## 6. Procedural review

### 6.1 Required-source compliance before first browser action

| Task | Required sources read before first browser call | Evidence |
| --- | --- | --- |
| T1 attempt 1 | AGENTS.md, hello-world-pt7 Section 4, two recipes; EXP-105 record did not yet exist (read error) | controller harness-audit-T1, rows 1 to 4 and row 5 (error) |
| T1 attempt 2 | All required sources, including the EXP-105 record and the T1 failure record | harness-audit-T2, rows 1 to 9 |
| T2 attempt 3 | All required sources, including the EXP-105 record | harness-audit-T3, rows 1 to 8 |
| T2 attempt 4 | All required sources, including the EXP-105 and t2-records | harness-audit-T4, rows 1 to 8 |
| T2 attempt 5 | All required sources, including the EXP-105 and t2b-records | harness-audit-T5, rows 1 to 8 |
| T3 attempt | All required sources, including the EXP-105 and t2c-records | harness-audit-T6, rows 1 to 8 |
| T3 continuation (T7) | All required sources, including the EXP-105 record (row 8) | harness-audit-T7, rows 1 to 8 |
| T4 (T8) | AGENTS.md, Section 4, both recipes, EXP-103-R3 and EXP-065 Outcome reads, and `t3c-record.md` (row 8) were read. **The EXP-105 experiment record was not read before the first browser call** (row 10). It was read at row 69, after the readback. | harness-audit-T8, rows 1 to 9 vs row 10 |

The required-source list in the brief covers AGENTS.md, Section 4, both recipes and the Outcome sections. Each of those was read before the first browser call in every task. The additional EXP-105 record review is required by the T8 bounded instruction ("Review the EXP-105 record and evidence/EXP-105/t3c-record.md"); it was not performed before the first browser call in T8 (D2).

The brief names "transcript lines 05:16-06:31". The Section 4 block of `hello-world-pt7.md` (lines 145 to 163) carries the heading "05:16–07:31"; no separate 05:16-06:31 sub-range is identifiable in the file. The worker read lines 145 to 163 in each task. This is recorded as a wording limit, not a deviation.

### 6.2 Deviations and qualifications

| ID | Item | Evidence | Classification | Operator disposition requested |
| --- | --- | --- | --- | --- |
| D2 (P1) | T8 did not read the EXP-105 record before its first browser call, although the T8 bounded instruction asked for it. The record was read at the update step. The readback values were compared with the brief's expected values, not with the record, so the record's omission did not affect any observation. | harness-audit-T8 rows 8 to 10 and 69 | **New deviation; requires disposition.** | Accept as a procedural deviation, or treat as a finding for the next run. |
| D3 (P2) | T8 used two coordinate-based pointer moves (`mouse_move_xy`) before ordinary wheel scrolls of the Components tree and the Properties grid. Not clicks. The T8 brief allowed coordinates only for the canvas placement click and nested canvas icons. | harness-audit-T8 rows 30 and 56; coordinates in `t4-record.md` | **New deviation; requires disposition.** | Accept, or treat as outside the stated coordinate allowance. |
| D4 | No screenshot of the OK response in T7. The brief asked for "the OK response" as a capture. The OK outcome is evidenced by the accessibility snapshot after OK (dialog closed) and the subsequent Save toast. | `t3c-record.md`; harness-audit-T7 row 58 and the following snapshot | **Evidence gap; requires disposition.** A new browser capture is not permitted in this audit. | Accept the gap, or authorize a later capture in a permitted task. |
| D5 (T7 transcript) | During T7, before a context summary, a Grep was attempted on the worker session transcript (denied; not retried). The T7 bounded instruction did not prohibit it; the summary had pointed to the transcript. The T8 bounded instruction later forbade transcript access. This audit did not access the transcript. The pre-compaction counts are now reconciled from the controller tables, so the denial has no remaining count effect. | harness-audit-T7 row 63 | **Attempt recorded; no effect on counts.** Operator awareness requested. | Acknowledge. |
| D6 (T8 errors) | Two `Ref not found` errors on screenshot calls. Each was followed by one fresh untargeted snapshot before the retry, as the brief required. No mutation was retried. | harness-audit-T8 rows 32 and 58 | Compliant recovery. | None. |
| P7 | T3 continuation: the brief said "set Orientation before Alignment and Pack". Orientation was already Horizontal in both regions, and Length and Unit were already 1 and Flex. No entry was made for those fields, so the sequence was not exercised. | `t3c-record.md`; `t3c-region0-01`, `t3c-region1-01` | Interpretation; low. | Accept that the values were verified as displayed, not entered. |
| P8 | Region-list click targets: two T2 attempt 5 clicks used the Regions grid ID cell to close the Alignment and Pack lists without choosing (controller rows 64 and 71). Those clicks could in principle activate cell editing; no text entry followed in that task, and Cancel discarded any uncommitted state. Attributes after the closes were verified as unchanged (`t2c-attrs-04`, `t2c-attrs-06`). T4 also clicked Index cells to select region rows (controller rows 47 and 51). | harness-audit-T5 rows 64 and 71; harness-audit-T8 rows 47 and 51 | Low; no observed effect. | Note only. |
| P10 | File-search and file-read calls over saved snapshot files were used in T2 (controller rows 18 to 20, 25: Read of a `page-…yml` snapshot file, then Grep), T1 attempt 2 (several Grep calls) and T2 attempt 5 (one Grep, row 24). The controller does not log their patterns. These are not browser calls. The brief requires element references to come from the most recent browser snapshot of the task, not from find output; the snapshot files carry the same content as the inline snapshot output. | harness-audit-T3 rows 18 to 20, 25; harness-audit-T2 Grep rows; harness-audit-T5 row 24 | **Purpose not recorded; requires operator confirmation** that these calls did not supply element references in place of the current snapshot. | Confirm, or treat as a process note. |
| P11 | Icon labels for the canvas adorner strip are inconsistent between records. T2 attempt 5 and T4 describe the Edit control as the first icon (DOM id `flexlayouteditadorner-…`). T3 attempt describes icon 1 as the component thumbnail (`compthumbadorner-…`) and icon 2 as the Edit control. The Edit control's identity was checked in each task by DOM id and tooltip, and the dialog that opened showed the expected regions each time. | `t2c-record.md`; `t3-record.md`; `t4-record.md`; harness-audit-T5 rows 49 and 52; harness-audit-T6 rows 19 and 23 | Documentation inconsistency; no effect on the outcome. | Accept; a documentation correction is noted in section 9. |

### 6.3 Previously approved exceptions (not re-requested)

- Guard correction: the operator removed the exact-value `header` requirement from the guard, after the first Name entry was blocked (T2 attempt 3 and 4). The Name entry then succeeded in T2 attempt 5 (authorized in that task's instruction).
- Browser recovery: the operator restored the unresponsive Portal tab after T1 attempt 1; the worker did not restart Chrome or the MCP.
- Inherited unsaved Name editor: authorized to be completed from the existing placement (T2 attempt 5 instruction).
- Guard I/O error and continuation: the operator authorized continuation with the uncommitted second region already added, and directed completion from the open dialog without repeating Regions + or reopening the dialog (T7 instruction).
- Inherited open list: the Alignment list left open at the T7 handoff was completed within T7 (authorized by the same instruction).
- Close and reopen: authorized by the T8 instruction (one close, one reopen).

### 6.4 Whether any new deviation requires disposition

Yes: D2 (T8 record review omitted), D3 (T8 coordinate pointer moves), D4 (missing OK-response screenshot) and P10 (purpose of file-search calls). D5 is acknowledged, not re-disposed. P7, P8, P11 and P12 are low-severity notes. The ordinary authorized `browser_type` field entries (four successful entries) are not violations, and the two hook-blocked calls were not retried.

## 7. Unresolved issues

- **D1 (AC-5, global-object wording).** Two EXP-105 Designer Saves reported "Form [FX_CustomerPortal] and global object(s) were saved." The EXP-103-R3 Outcome reports that a form-definition save showed no message; the EXP-065 Outcome reports the same wording for a Form save with theme changes. The worker changed no global object on purpose: the Theme Class value FX_BlueBackground was selected from the existing class list (EXP-100), not created or edited. Whether any global object was written by the saves is not determinable from the UI or the controller log. The operator should decide whether to check the global-object state (read-only) or record AC-5's global-object item as open.
- **Properties header lag.** `flexLayout1_USER (FlexLayout)` was displayed after the Name change, after one reselect and after the Save (T2 attempt 5). It was not displayed in T8. The cause is not established.
- **Root region attributes.** Root regions (header, main, footer) were confirmed by name and order only. Their attributes were not reopened in T4.
- **Same-session persistence only.** Persistence is observed across one ordinary close and reopen in the same browser session. Cross-session, database-level and runtime persistence are not claimed or tested.
- **Nested hierarchy.** Established by screenshot indentation; the accessibility rows are flat.
- **Footer on canvas.** The footer row is not visible on the canvas in any capture; its presence is established by the tree.

## 8. Final Designer state

Observed in the T8 final snapshot and `t4-final-01-clean-state-after-cancel.png` (viewed in T8): FX_CustomerPortal is the open Form tab in User scope; Save and Undo are disabled; no dialog, menu or prompt is open; the Components tree is collapsed to Pane (00); the Details panel is on the Components tab. No browser call was made in T9, so this is the state left by T8.

## 9. Documentation actions in this task

- Created: `evidence/EXP-105/final-acceptance-audit.md` (this file).
- Edited: `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` (added a T9 audit pointer and reconciled counts; marked the superseded cumulative lines).
- Not edited: the worker records (`t3c-record.md`, `t4-record.md` and others). Their corrections are in sections 4.4 and 6 of this file.

## 10. Browser and Mongoose operation counts for this task (T9)

- Browser calls: **0** (no tab listing, no selection, no click, no hover, no snapshot, no screenshot, no find, no key press, no text entry, no drag).
- Mongoose changes: **0**. No Save, OK, Cancel, Undo, close, reopen, Regenerate, unload, checkout, FormSync or deployment.
- File-tool calls this task: 3 Glob (`evidence/EXP-105/*`; `harness-audit-T*.md` under `evidence` and under `experiments`); 18 Read (eight controller tables, the experiment record, `t1b-gate-record.md`, `t2-record.md`, `t2c-record.md`, and six PNGs); 0 Grep; 1 Write (this file); 5 Edit calls on this file (corrections after drafting); 4 Edit calls on the experiment record (two superseded-line markers, the T9 section, and the inventory entries).
- Denied calls: 0. Tool errors: 0.

## 11. Final statement

Findings are observed only. This audit does not claim database persistence, cross-session durability, runtime validation or replay verification.
