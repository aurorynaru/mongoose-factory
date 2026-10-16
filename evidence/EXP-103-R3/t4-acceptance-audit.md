# EXP-103-R3 T4: documentation-only acceptance audit

Task message `32e48185-e2fb-4eae-b116-e402a10cc65a`, run R-20261016-103141-CejP, cycle 3. Worker session 7af647c7-b95f-4d2a-8dff-5c0a2fe37b29.

Scope: documentation only. **No browser call, no Mongoose action, no dialog, no Save, close or reopen was performed in T4.** The final Designer state below is the state last observed in T3, not rechecked here.

Sources used (read-only): the EXP-103-R3 record; the three controller-generated audit tables `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md` in this directory; the directory listing and the `evidence/playwright` listing (Glob). Screenshots were **not** re-viewed in T4; their contents are the ones recorded when each was viewed in its own task.

Controller taxonomy (derived from the three tables, and it reconciles exactly): **actions** = inputs (tab select, clicks, `browser_type`, `press_key`, mouse wheel). **reads** = browser observations (tab list, snapshots, screenshots). File Read/Grep/Glob and Write/Edit are not in either count.

---

## 1. Count reconciliation

| Category | Brief figure | T1 | T2 | T3 | Sum (tables) | Match |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Tab lists | 3 | 1 | 1 | 1 | 3 | yes |
| Tab selections | 3 | 1 | 1 | 1 | 3 | yes |
| Form closes | 1 | 0 | 0 | 1 | 1 | yes |
| Form reopens | 1 | 0 | 0 | 1 | 1 | yes |
| FlexLayout selections (row click) | 3 | 1 | 1 | 1 | 3 | yes; no Error dialog in any |
| Attributes dialog opens (canvas control) | 3 | 1 | 1 | 1 | 3 | yes |
| Dialog left by Cancel | 2 | 1 | 0 | 1 | 2 | yes |
| Dialog left by OK | 1 | 0 | 1 | 0 | 1 | yes |
| List opens (Type 1, Unit 2, Orientation 3) | 6 | 0 | 6 | 0 | 6 | yes |
| Type changes | 1 | 0 | 1 | 0 | 1 | yes |
| Region selections (row clicks) | 6 | 0 | 3 | 3 | 6 | yes |
| Region field entries (ID 3, Length 2, Unit 2, Orientation 3) | 10 | 0 | 10 | 0 | 10 | yes |
| Corrections | 0 | 0 | 0 | 0 | 0 | yes |
| Designer Saves | 1 | 0 | 1 | 0 | 1 | yes |
| OK clicks | 1 | 0 | 1 | 0 | 1 | yes |
| Prompts | 0 | 0 | 0 | 0 | 0 | yes |
| Server-event or tool errors | 0 | 0 | 0 | 0 | 0 | yes (see note on console) |
| Re-logins | 0 | 0 | 0 | 0 | 0 | yes |
| Clicks (all) | 42 | 4 | 25 | 13 | 42 | yes |
| Mouse-wheel scrolls | 1 | 0 | 0 | 1 | 1 | yes |
| `browser_type` calls | (5 flagged in T2) | 0 | 5 | 0 | 5 | yes |
| `press_key` Tab presses | (not in brief) | 0 | 10 | 0 | 10 | n/a |
| Snapshots (browser_snapshot, inline) | 18 | 2 | 13 | 3 | 18 | yes |
| Screenshots | 38 | 4 | 20 | 14 | 38 | yes; matches the 38 PNG files on disk |
| Action total (inputs) | (not in brief) | 5 | 41 | 15 | 61 | = clicks + select + type + Tab + wheel |
| Reads total (observations) | (not in brief) | 7 | 34 | 18 | 59 | = tab lists + snapshots + screenshots |

Every brief figure matches the controller tables and the worker record. The five flagged `browser_type` calls are checked in section 2.

Note on "browser errors 0": the controller records `errors=0` for each task. Separately, the Designer page status line read "Console: 2 errors, 0 warnings" in every snapshot from the first T1 snapshot onward, before any T1 action. The console was not inspected (out of scope), so the 2 console errors are **an uninspected pre-existing condition**, not a count of errors caused by this run and not a server-event error.

---

## 2. The five flagged T2 `browser_type` calls

The controller flagged `browser_type: 5` in T2 (rows 27, 33, 60, 76, 82). Each row's element description identifies a permitted field entry in the Properties grid's cell editor:

| Controller row | Element (from the controller table) | Value entered | Committed by (controller row) |
| ---: | --- | --- | --- |
| 27 | Region 0 ID editor textbox (active) | header | Tab (row 28) |
| 33 | Region 0 Length editor textbox (active, value 1) | 4 | Tab (row 34) |
| 60 | Region 1 ID editor textbox (active, FLEX_PANE_REGION1) | main | Tab (row 61) |
| 76 | Region 2 ID editor textbox (active, FLEX_PANE_REGION2) | footer | Tab (row 77) |
| 82 | Region 2 Length editor textbox (active, value 1) | 2 | Tab (row 83) |

These are the five field entries the brief permits (ID for regions 0, 1, 2; Length for regions 0 and 2). The brief prohibits evaluate/run-code tools and browser JavaScript. `browser_type` is neither: it enters text into an element the operator's UI had made active. The rendered-UI route is therefore permitted, and the controller's "prohibited-tool hit" is a classification of the tool's name, not evidence of a prohibited method. No Enter key was pressed (the key sequence shows only Tab), and the controller's "key string (none)" and "spelled strings: []" confirm that no credential or stray string was typed.

Unit and Orientation were set by clicking visible list options (6 list-option clicks: rows 40, 49, 66, 88, 94, and Type row 18), not by typing. The 10 Tab presses are cell commits.

Corrections: **0.** Each field was entered once; no field was re-entered (the controller table shows each `browser_type` on a different field).

---

## 3. Source-review audit (per task)

The controller tables give the order of file reads relative to the first browser call.

**T1 (cycle 0). Not compliant with the AGENTS.md read requirement.**
- File reads before the first browser call (row 8, `browser_tabs list`): Read `hello-world-pt7.md` (row 1), Read `session-expiry-and-stale-designer.md` (row 2), Grep (row 3), Read EXP-103-R2 (row 4), Read EXP-104 (row 5), Glob (rows 6, 7).
- **`AGENTS.md` does not appear in the T1 table at all.** The T1 worker had the embedded copy in its task message but did not read the repository file before T1 browser interaction. This is recorded here as a timing deviation. The embedded copy and the later T2/T3 reads do not make T1 compliant retroactively.
- The Read windows for the EXP-103-R2 and EXP-104 Outcome sections were 40 lines from each Outcome heading; each window reached end of file. This was disclosed in the T1 record.

**T2 (cycle 1). Partial deviation, not disclosed in the T2 record.**
- Row 1: Read `AGENTS.md`. Row 2: `browser_tabs list` (read-only). These were issued in the same turn; `AGENTS.md` is ordered first.
- **No T2 read** of `hello-world-pt7.md` lines 133-143, the session recipe, or the EXP-103-R2/EXP-104 Outcome sections appears in the T2 table. The T2 brief required these before browser interaction. The T2 worker relied on its T1 context for them. That is not a fresh read, so the requirement was not met in T2.
- The T2 record's Sources section now says so (see the correction in the record).

**T3 (cycle 2). Compliant.**
- Rows 1-5: Read `AGENTS.md`, `hello-world-pt7.md`, the session recipe, EXP-103-R2 Outcome, EXP-104 Outcome. Row 6 is the first browser call (`browser_tabs list`). All five reads precede it.

---

## 4. Acceptance checks

**AC-1: Sources reviewed; session usable; User scope; FX_CustomerPortal open and clean; selection passed; dialog populated with EXP-103-R2 values; Cancel; Save disabled.** Status: **met for the functional elements; the source-review element is not met in full** (T1 `AGENTS.md`; T2 other in-scope reads).
- Session usable: no expiry, sign-in or re-login in any task (controller re-logins 0; no sign-in screen in any capture).
- User scope: the status bar `[ ScopeType: User / ScopeName: … ]` appears in every gate and readback capture.
- FX_CustomerPortal open and clean at each gate: `gate-01-designer-start.png` (T1), `t2-gate-01-designer-start.png` (T2), `t3-gate-01-designer-before-close.png` (T3). Save disabled in each.
- Selection passed with screenshot and Design group: `selection-01-flexlayout-after-click.png` (T1), `t2-selection-01-flexlayout-after-click.png` (T2), `t3-selection-01-flexlayout-after-click.png` (T3). Each shows the Properties grid with Design, Type FlexLayout, From Device Master True and no Error dialog.
- Dialog populated with EXP-103-R2 values: `precheck-01-flexlayout-attributes-dialog-readonly.png` shows Type HorizontalBox and three `1 Flex` rows. The full region IDs are confirmed in the Components tree (`Region00: FLEX_PANE_REGION0`, etc.) and in the T2 baseline accessibility snapshot (inline, not saved as a file), which lists `FLEX_PANE_REGION0`, `FLEX_PANE_REGION1`, `FLEX_PANE_REGION2`, each `1 Flex`. The per-region captures `t2-region0-01…`, `t2-region1-01…`, `t2-region2-01…` also show the full IDs in the Properties grid.
- Cancel and Save disabled: `precheck-02-after-cancel-save-disabled.png`.
- Limit: the T1 dialog capture truncates the ID column; the full IDs come from other captures as stated above.

**AC-2: Type and three regions set exactly; at most one correction per field; no region added, deleted or reordered; Regions grid captured before OK; OK once; one Save; Save disabled afterwards; canvas recorded.** Status: **met for values, OK, Save and the Save-disabled state. The canvas requirement is not met** (the three stacked rows were not clearly visible).
- Type VerticalBox: `t2-type-01-after-entry-verticalbox.png`.
- Region 0 header / 4 / FormUnit / Fill: `t2-region0-02…`, `-03…`, `-04…`, `-05…`, `-06-complete-header-4-formunit-fill.png`.
- Region 1 main / 1 / Flex / Fill (Flex verified, not re-selected): `t2-region1-02…`, `-03-complete-main-1-flex-fill.png`.
- Region 2 footer / 2 / FormUnit / Fill: `t2-region2-02…`, `-03…`, `-04…`.
- Regions grid before OK: `t2-regions-grid-before-ok.png` shows `header 4 FormUnit`, `main 1 Flex`, `footer 2 FormUnit`, Type VerticalBox, and region 2's Orientation Fill.
- OK once, response: `t2-ok-01-response-after-ok.png`. Dialog closed; no prompt or message visible; Save and Undo became enabled (pending change).
- Save once, response: `t2-save-01-response-after-save-click.png`. Save and Undo disabled afterwards; no dialog; no error; tooltip "Save".
- Canvas: `t2-save-01…` shows **one horizontal dashed guide** near the top of the viewport and no visible region rows. This does **not** show three stacked rows. The post-Save snapshot contains no canvas region elements.
- Corrections 0; no region added, deleted or reordered (region index order 0 header, 1 main, 2 footer in T3).

**AC-3: After one ordinary close and reopen, dialog shows the values; Components tree and canvas reflect the regions; dialog left with Cancel; Form open and clean.** Status: **partly met.** Values and Components tree are verified; the canvas is not verified.
- Close: `t3-close-01-after-form-close.png`; no save prompt (prompt text: none; no answer needed).
- Reopen via recent-forms: `t3-reopen-01-form-menu-open.png`, `t3-reopen-02-form-reopened.png`.
- Components tree: `t3-readback-components-tree-after-reopen.png` shows `Region00: header`, `Region01: main`, `Region02: footer`.
- Dialog readback, Type: `t3-readback-dialog-01-overview.png` shows VerticalBox; grid rows `header 4 FormUnit`, `main 1 Flex`, `footer 2 FormUnit`.
- Per-region readback (each row selected once, no edit): `t3-readback-region0-header-4-formunit-fill.png` (header / 4 / FormUnit / Fill), `t3-readback-region1-main-1-flex-fill.png` (main / 1 / Flex / Fill), `t3-readback-region2-footer-2-formunit-fill.png` (footer / 2 / FormUnit / Fill).
- Cancel and clean: `t3-final-01-after-cancel-canvas-tree.png`; Save disabled; Form open; no dialog.
- Canvas: `t3-final-02-canvas-after-one-scroll.png` shows the top guide only; footer not visible; one scroll changed nothing visible. Region-row highlights seen in the readback captures: header a top band (about y 100–172), main a band from about y 172 down, footer no highlight in the viewport. The position of the footer and the complete three-row arrangement remain **unresolved**.
- Limit: the readback is after one close and reopen **in the same Designer session**. It is a weak persistence boundary, not cross-session, database or replay verification.

**AC-4: No other attribute, component, region, Form property, collection or Form changed; no Regenerate; no runtime action; no unload; no checkout; User scope; no task-boundary overrun.** Status: **met as to recorded actions.** The stored values of hidden rows were not read (see limitations).
- No attribute outside Type and the three regions' ID, Length, Unit and Orientation was edited: the controller table's `browser_type` and list-option clicks are limited to those fields.
- No component added, deleted, moved or renamed; no Delete or trash click (controller: delete/trash 0 in every task).
- No Regenerate Form click (controller: 0). No Form-properties edit; no collection edit. The Collections tab showed `Primary Collection: FX_Orders` and `Secondary Collection 2: FX_Items` when the Details panel reopened in T3 (`t3-reopen-03-details-panel-expanded.png`); it was viewed only and the Components tab was then selected.
- No runtime action, unload, checkout, FormSync or deployment (none in the controller tables).
- No task-boundary overrun: T1 stopped after the read-only pre-change check; T2 stopped after the Save; T3 stopped after Cancel and one scroll; T4 made no browser call.
- View-only actions: Components "Expand" (T1, T2, T3 twice), Details "Expand Panel" (T3), Components tab (T3), one canvas scroll (T3). None changed the Form's content.
- Hidden attributes (Alignment, Pack, Minimum Length, Maximum Length): the brief required them to remain at their current values. They were not clicked. After Orientation Fill (and, for region 2, Unit FormUnit), the Properties grid stops listing Alignment and Pack (for Fill) and Minimum/Maximum Length (for FormUnit). Their stored values were **not read**, so "unchanged" is **not verified**.

**AC-5: Final report gives decisive evidence for AC-1–AC-4, the complete audit with exact counts, the worker-written-file inventory and the final state.** Status: **met by the record and this audit**, with the limitations listed here.
- Counts: section 1 (every figure reconciles).
- Prompts with texts: none appeared. The only prompt-like step was the T3 close, which showed no prompt.
- Error dialogs with texts: none. The only text-bearing errors observed were the console status "2 errors" (uninspected, pre-existing) and no server-event text.
- Re-login count: 0.
- Worker-written files and final state: section 5 and section 6.

---

## 5. Worker-written-file inventory (checked against the directory listing)

Written by the worker across T1–T4:
- `experiments/EXP-103-R3-hello-world-part-7-section-3-fx-customer-portal-root-regions-replay.md` (created in T1; rewritten in T2 with `Write`; edited in T3 (six `Edit` calls); edited in T4).
- `evidence/EXP-103-R3/t4-acceptance-audit.md` (this file; created in T4).
- 38 screenshot PNGs in `evidence/EXP-103-R3/`:
  - T1 (4): `gate-01-designer-start.png`, `selection-01-flexlayout-after-click.png`, `precheck-01-flexlayout-attributes-dialog-readonly.png`, `precheck-02-after-cancel-save-disabled.png`.
  - T2 (20): `t2-gate-01…`, `t2-selection-01…`, `t2-baseline-01…`, `t2-type-01…`, `t2-region0-01…` to `-06…` (6), `t2-region1-01…` to `-03…` (3), `t2-region2-01…` to `-04…` (4), `t2-regions-grid-before-ok.png`, `t2-ok-01…`, `t2-save-01…`.
  - T3 (14): `t3-gate-01…`, `t3-precheck-02…`, `t3-close-01…`, `t3-reopen-01…`, `t3-reopen-02…`, `t3-reopen-03…`, `t3-readback-components-tree-after-reopen.png`, `t3-selection-01…`, `t3-readback-dialog-01…`, `t3-readback-region0…`, `t3-readback-region1…`, `t3-readback-region2…`, `t3-final-01…`, `t3-final-02…`.

Present in the directory but **not worker-written**: `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md` (controller-generated).

Tool-generated files (not worker-written), referenced here only for completeness:
- 42 Playwright page snapshot files, one per click: 4 in T1 (`page-2026-10-16T02-32-17-347Z.yml` … `02-32-53-822Z.yml`), 25 in T2 (`02-35-48-778Z.yml` … `02-40-27-823Z.yml`), 13 in T3 (`02-44-26-681Z.yml` … `02-47-07-469Z.yml`).
- Console logs: `console-2026-10-16T02-32-00-071Z.log`, `…-072Z.log` (T1); `console-2026-10-16T02-35-39-573Z.log` (T2); `console-2026-10-16T02-44-12-491Z.log` (T3).
- Not attributable to this run: `evidence/playwright/page-2026-10-16T02-00-*` and `…02-01-*` files predate the T1 start (02:32). They are not counted or claimed here.

Repository confinement: the worker's writes are limited to the EXP-103-R3 record and `evidence/EXP-103-R3/`. Operator git review remains authoritative; no git or shell access was used or requested.

---

## 6. Final state

**Last observed in T3, not rechecked in T4:** Designer tab 0 selected; Form FX_CustomerPortal open and clean; Save and Undo disabled; no dialog, menu or prompt open; Properties shows the Form; Details panel expanded on the Components tab with the tree collapsed to `Pane (00)`; scope User.
Web Client tab (tab 1) not used in any task.

---

## 7. Limitations (all tasks)

- **Canvas**: the complete three-row arrangement was never clearly visible; the footer was never seen in a viewport. This is unresolved.
- **Hidden attributes**: stored values of Alignment, Pack, Minimum Length and Maximum Length after the change were not read.
- **Persistence**: observed only within the same Designer session after one ordinary close and reopen. No cross-session, database-level or replay verification is claimed.
- **Pre-existing console errors**: "2 errors" in the page status line, uninspected.
- **Screenshot viewing**: the screenshot contents cited here are the ones recorded when each was viewed in its own task; T4 did not re-view them.
- **Harness/controller tables**: their "actions" and "reads" are the input and observation categories described above; they are not labels for rendered-state proof.
- **T1 and T2 source-review deviations**: see section 3.

---

## 8. Recommendations for operator disposition (not decided here)

1. **T1 timing deviation.** `AGENTS.md` was not read from the repository before T1 browser interaction; the T1 worker had only the embedded copy. Recommend the operator record this as a procedural deviation in T1 and decide whether T1's observations are accepted with that qualifier. It should not be described as compliant.
2. **T2 source-read deviation.** The T2 in-scope reads (transcript lines, recipe, EXP-103-R2 and EXP-104 Outcome sections) were not performed at T2 start; only `AGENTS.md` was. Recommend the operator record this alongside item 1.
3. **Canvas confirmation.** The three-row arrangement and the footer's position remain unconfirmed. Recommend a separate, explicitly authorized read-only visual check (for example, a Designer look with the Details panel collapsed and the canvas viewed without changing the layout) before the canvas item is marked accepted.
4. **Hidden attributes.** If the operator needs the "every other attribute unchanged" requirement proven, a separately authorized read-only inspection of those rows is needed; it is not established here.
5. **Persistence.** A cross-session readback would be needed before any persistence claim beyond the same-session observation.

This audit does **not** declare unconditional acceptance, and it does **not** claim replay verification.
