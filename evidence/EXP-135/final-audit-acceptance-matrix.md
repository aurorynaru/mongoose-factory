# EXP-135 — Final acceptance matrix, action audit, mutation inventory, recovery accounting (T1–T12)

Run `R-20261026-051803-zOUZ` · cycle 15 · task T12 (final) · worker session `e66eac16-9efa-4e9d-acf5-dff12f4b7176`.
Status: **all ACs observed at the Web Client UI level in one session, with the qualifications below. EXP-135 is not accepted. Operator acceptance review is required. Nothing here is replay verification, cross-session durability, or database-level verification.**

## 1. Acceptance matrix

| AC | Status | Supporting evidence (exact paths) | Limitations and qualifications |
|---|---|---|---|
| **AC-1** Pre-mutation gates (account, User scope, configuration, baseline, session) | **Supported** (T1; re-observed T9, T10–T12) | `evidence/EXP-135/t1-01-webclient-identity-initial-state.png`, `t1-02-designer-tab0-user-scope-footer-initial.png`, `t1-preflight-gates.md`; T12 `t12-01-pre-close-clean-three-rows-checkpoint.png` (header `anton.ramos@3mworks.com.ph`, config `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) | Designer User-scope footer observed in T1 and T7; not re-observed after T9. Required sources read in T1 (AGENTS.md, EXP-130 §§2–4 lines 300–335, EXP-134 header and T1–T9, EXP-041-R3 first 447 lines plus grep, EXP-042-R3 first 493 lines, the session-expiry recipe, the create-basic-form recipe). Recipes were not edited. |
| **AC-2** Target identity and collision gate | **Partially supported.** Collision check passed in T1. IDO property types carried forward, not re-read | Collision: `t1-preflight-gates.md` (exact `FX_InventoryEditor` → 0 rows; infix → 0 rows; positive controls `FX_HelloWorld01` exact and `helloworld` infix → 1 row each). IDO membership: `t1-01` and T9 IDOs panel (`FX_InventoryItems` under `FX_HelloWorldProject01`). Six names: `t3-03`, `t3-04` (wizard) | (a) The T1 absence result is from the list before creation; it is valid for that point. The later T8 "not listed" result was stale and is superseded by T9. (b) **Property types** (FX_Item String 50 key; FX_Description String 255; FX_Warehouse String 100; FX_QuantityOnHand and FX_ReorderLevel Decimal 12,2; FX_Location String 100) were not re-read through a permitted read-only surface. They rest on the EXP-134 readback, accepted by operator decision in cycle 2. The T9 IDOs grid showed `Length 12` for the Decimal columns, which does not show the scale. (c) The alias `fxinv` was not observed in EXP-135. |
| **AC-3** Empty data gate (runtime zero rows before first insert) | **Supported with limitation** (T9) | `t9-04-runtime-fx-inventoryeditor-after-refresh-zero-rows.png`; `t9-runtime-open-zero-row-gate.md`; T10 `t10-01-pre-entry-runtime-clean-placeholder-zero-rows.png` | Zero committed rows was inferred from one starred blank add-mode row after Refresh (star read from the screenshot; the `(Object 1 of 1)` count includes the placeholder). Single session. The EXP-134 pre-creation empty state was carried forward by the brief. |
| **AC-4** Wizard configuration and single creation | **Supported** (T3) | Pre-Finish: `t3-01-wizard-selection-classic-multiview-before-ok.png`, `t3-02-…page1-name-datasource…png`, `t3-03-…page2-primary-collection-properties.png`, `t3-04-…page3-six-rows-included…png`, `t3-05-wizard-final-page-prefinish-save-template-unchecked.png`. Post-Finish: `t3-06-post-finish-designer-fx-inventoryeditor-opened.png`. Record: `t3-wizard-creation.md` | Classic MultiView; name `FX_InventoryEditor`; Data Source `FX_InventoryItems`; Form Type MultiView; Layout GridLeft; Save Template unchecked; User scope footer. Finish invoked once with `Process Completed Successfully`. The wizard did not set the Caption (blank). No SQL table, IDO, or IDO project was created by the worker (worker record only). |
| **AC-5** Form definition (Caption, bound IDO, grid, six Static/Edit pairs) | **Supported** (T4, T6, T7) | `t4-02-designer-components-tree-expanded-bindings.png`; `t4-definition-readback.md`; Caption committed and saved: `t6-03-caption-committed-via-label-click-pre-save.png`, `t6-04-after-single-designer-save-caption-readback.png`; after reopen: `t7-05-reopened-details-components-tab-bindings.png`, `t7-06-reopened-components-tree-six-bindings.png`; `t7-designer-close-reopen-readback.md` | Bindings were read from the Designer accessibility text and screenshots (six GridColumns `object.FX_*`; six Edits `object.FX_*` each paired with a Static). The Static captions are blank; the brief does not require them and they were not fixed. The Caption was corrected in T6 after an incorrect unsaved commit in T5 (see §4). |
| **AC-6** Save and Designer recovery | **Supported, with qualified Save exception** (T6, T7) | Save: `t6-04-after-single-designer-save-caption-readback.png` (notification `Form [FX_InventoryEditor] and global object(s) were saved.`; Save disabled after). Close and reopen: `t7-01-pre-close-clean-fx-inventoryeditor-caption-user-scope.png`, `t7-02-post-close-tab0-no-form-loaded.png`, `t7-03-form-menu-opened-recent-forms-route.png`, `t7-04-reopened-via-form-menu-recent-fx-inventoryeditor.png` | The wizard left the Form **clean** (AC-6 would allow zero Saves). A Caption-only ordinary Save was therefore an **operator-authorized deviation** (cycle 6, then cycle 8). Its notification says "global object(s) were saved"; the included objects were not identified. Save was disabled after reopen; Version `User version for user anton.ramos@3mworks.com.ph`. |
| **AC-7** Runtime open and initial zero-row state | **Supported with limitation** (T9; re-observed T10 pre-entry and T12 reopen) | `t9-03-select-form-exact-fx-inventoryeditor-one-match.png`; `t9-04-…zero-rows.png`; T12 reopen state (inline snapshot: one blank row, `(Object 1 of 1)`) | Same limitation as AC-3 (placeholder inference). The T8 "not listed" result was stale; T9 found the Form after the operator-authorized Portal navigation. |
| **AC-8** Three exact commits, one Save each, readback per record | **Supported at UI level, same session** (T10, T11) | Record 1: `t10-02-…pre-save.png`, `t10-03-…save-disabled.png`, `t10-04-…after-refresh.png`. Record 2: `t11-02-…pre-save.png`, `t11-03-…save-disabled.png`, `t11-04-…after-refresh.png`, `t11-05-…row2-selected-readback.png`. Record 3: `t11-06-…pre-save.png`, `t11-07-…save-disabled.png`, `t11-08-…three-rows-overview.png`, `t11-09-…row3-selected-readback.png`. Records: `t10-record1-runtime-commit.md`, `t11-records2-3-runtime-commit.md` | Each record had one Save (no retry, no ambiguous outcome, no identity lookup needed). Readbacks are Web Client collection reads after one Refresh per record. The T10 field mapping (Find Value In Collection preselection, inferred link) was reused for records 2 and 3 without re-running the Find dialog per input. |
| **AC-9** Runtime close and reopen readback (3 rows, 18 values) | **Supported at UI level, one session** (T12) | Checkpoint `t12-01-pre-close-clean-three-rows-checkpoint.png`; reopened overview `t12-02-reopened-refresh-three-rows-grid-overview.png`; row 2 detail `t12-03-reopened-row2-detail-fx-item-002.png`; row 3 detail `t12-04-reopened-row3-detail-fx-item-003.png`; readback table `t12-runtime-close-reopen-readback.md`; snapshots `evidence/playwright/page-2026-10-25T22-13-36-074Z.yml`, `…22-14-10-637Z.yml`, `…22-14-26-500Z.yml`, `…22-14-35-069Z.yml` | Three unstarred rows, distinct keys FX-ITEM-001/002/003, `(Object 1 of 3)`, Save disabled. All 18 values match exactly. Numeric: FX-ITEM-002 `8.00` < `10.00`; FX-ITEM-003 `0.00` < `5.00` (stored values only; no dashboard status or colour logic exists or is claimed). Hidden grid columns (GridLeft) were covered by the row-selected detail and the accessibility text. Not database-level, not cross-session, not replay. |
| **AC-10** Confinement and action audit | **Supported with qualifications** (this file) | §2 counts; §3 mutation inventory; §4 qualifications; §5 repository accounting; controller tables `harness-audit-T1.md` … `harness-audit-T11.md` (T12 table is controller-generated after this task) | The "zero prohibited application actions" statement holds for the recorded actions. It is not proof of absence of unrecorded side effects. The qualifications in §4 are not proven to be prohibited mutations, but they are not fully explained either. |

## 2. Reconciled action counts (T1–T12)

Counts are from the task records (`t*-…md`) and controller audits. Per-task T12 counts are in `t12-runtime-close-reopen-readback.md`.

| Action | Required (final) | Actual | Source |
|---|---|---|---|
| Wizard Finish | at most 1; exactly 1 if created | **1** (T3) | `t3-wizard-creation.md` |
| Designer ordinary Save | 0 or 1 | **1** (T6, Caption-only; operator-authorized, see AC-6) | `t6-caption-recovery-and-single-save.md` |
| Designer close / reopen of FX_InventoryEditor | 1 / 1 after creation | **1 / 1** (T7) | `t7-designer-close-reopen-readback.md` |
| Runtime successful record Saves | exactly 3 | **3** (T10: 1; T11: 2) | `t10-…`, `t11-…` |
| Runtime New | (not specified; one per record after the first) | **2** (T11) | `t11-records2-3-runtime-commit.md` |
| Runtime close / reopen of FX_InventoryEditor | 1 / 1 after data entry | **1 / 1** (T12) | `t12-runtime-close-reopen-readback.md` |
| Committed FX_InventoryItems records (UI level) | exactly 3 | **3** (FX-ITEM-001, -002, -003) | T10, T11, T12 |
| Runtime Refresh | (reconciled from records) | **5**: T9 1, T10 1, T11 2, T12 1 | per-task records |
| Select Form opens | (reconciled from records) | **4**: T1 1 (Cancel), T8 1 (Cancel), T9 1 (OK), T12 1 (OK) | `t1-preflight-gates.md`, `t8-…md`, `t9-…md`, T12 |
| Select Form OK activations | — | **2** (T9 and T12) | — |
| Portal navigation (tab 3) | operator-authorized, T9 | **1** (plus one `beforeunload` accepted) | `t9-runtime-open-zero-row-gate.md` |
| Vendor IdoProjects Form close, no save | operator-authorized, T2 | **1** | `t2-designer-isolation.md` |
| Caption typed / committed in Designer (unsaved) | — | Typed 2 (T5, T6); committed 2 (T5 wrong value, T6 correct); Enter 1 (T5) | `t5-…md`, `t6-…md` |
| Browser typing / fills / filters (`browser_type`) | — | **31** total (T1 5, T3 1, T5 1, T6 1, T8 2, T9 3, T10 6, T11 12); T12 0 | controller audits |
| Worker-authored browser JavaScript | 0 | **0** (all tasks) | each task record |
| Finish more than once; SQL; IDO or metadata change; FormSync; unload; deployment; vendor Form save | 0 | **0** identified | each task record |

Correction to the cumulative counts in `t11-records2-3-runtime-commit.md`: that file listed "Select Form open 2 (T8 cancelled, T9 OK)". The T1 Select Form open (cancelled) was omitted. The correct total is 4 opens (2 cancelled, 2 OK). The other T11 cumulative counts are unchanged, and T12 adds the runtime close/reopen and one Refresh.

## 3. Mutation inventory (Mongoose application objects, FX_ scope)

| Object | Change | Task | Evidence | Status |
|---|---|---|---|---|
| Form `FX_InventoryEditor` (User scope) | **Created** by one wizard Finish on existing IDO `FX_InventoryItems` (project `FX_HelloWorldProject01`) | T3 | `t3-01`…`t3-06`, `t3-wizard-creation.md` | Observed |
| Form `FX_InventoryEditor` Caption | **Set** from blank to `FX_InventoryEditor` and saved once (one ordinary Designer Save) | T5 (wrong unsaved value, not saved), T6 (correct value, saved) | `t6-03`, `t6-04`, `t7-05` | Observed. Save notification wording: see §4 |
| `FX_InventoryItems` rows | **Three inserted** through the FX_InventoryEditor runtime (FX-ITEM-001 T10; FX-ITEM-002 and FX-ITEM-003 T11), one Save each | T10, T11 | `t10-…`, `t11-…`, `t12-…` | Observed at UI level |
| Any other object (IDO, IDO project, SQL table, property class, validator, global object, script, handler, Form other than FX_InventoryEditor, Mock object, vendor Form) | **None identified** | — | task records | Not identified; not proven absent (see §4) |

Records not edited, deleted, or overwritten after commit: 0. Duplicate keys: 0. Fourth record: 0.

## 4. Qualifications (carried into acceptance review)

1. **AC-2 property types** are carried forward from the EXP-134 readback (operator decision, cycle 2). They were not re-read in EXP-135 through a permitted read-only surface.
2. **AC-6 Save exception.** The wizard left the Form clean. The single Caption-only Designer Save was operator-authorized. It is not a required step.
3. **T5 incorrect unsaved Caption.** The Caption was committed to the string-resource value `ApplyFullTextIndexScriptQuestion` (Enter), which made Save active. A Mongoose full-text-index prompt appeared ("The system has identified a script that will create a full-text index… Do you want to apply the script?"). It was **not clicked** and no script was applied. The corrected literal `FX_InventoryEditor` was committed in T6 before the only Save. The wrong value was never saved, but its origin and the prompt's disappearance by T6 are **not explained**.
4. **T6 save notification** `Form [FX_InventoryEditor] and global object(s) were saved.` The generic "global object(s)" wording alone does not prove an additional mutation. The included objects were not identified. **Unresolved.**
5. **T9 Portal navigation.** Operator-authorized. The three vendor system panels (Sql Tables, IDO Projects, IDOs) closed incidentally after a clean Save-state check. One `beforeunload` dialog (empty message) was accepted once. Its origin was not identified. No application save or discard prompt appeared.
6. **T2 vendor close.** The clean IdoProjects Designer Form was closed once without save (operator-authorized). Designer tabs 1 and 2 were not inspected by the worker.
7. **Select Form filter persistence.** The T12 reopen used the persisted filter `FX_InventoryEditor`. The dialog's row was not marked selected, so one click activated it. The filter was exact and returned one row.
8. **Placeholder inference (AC-3/AC-7).** Zero committed rows before insertion rests on the starred blank add-mode row after Refresh (screenshot star reading), not on a database count.
9. **Field mapping.** Records 2 and 3 used the T10 mapping (Find Value In Collection preselection, inferred focus link) without re-running the Find dialog for each input. The Refresh readbacks place every value in the expected column.
10. **Console.** The Web Client console showed **15 errors and 10 warnings** throughout the experiment. They were **not investigated**. They are not claimed to be defects or unrelated.
11. **Tool errors (no state change).** T5: 2 oversize outputs and 1 denied Grep on a tool-result file. T7 and T9: one invalid `browser_find` regex each. T1 and T4: missing-path Read/Grep. None changed application state.
12. **Stale list (T8).** The T8 Select Form result (FX_InventoryEditor not listed) was stale. T9 showed it listed after the Portal navigation. The cause is hypothesised, not proven.

## 5. Recovery accounting

| Event | Task | Recovery used | Result |
|---|---|---|---|
| Stale Designer/Select Form list (T8 not listed) | T8 | None in T8 (blocked) | Resolved by operator-authorized Portal navigation in T9 |
| Wrong Caption commit (T5) | T5 | None (stopped; no save) | Corrected to literal in T6 before the single Save |
| Session expiry | T1–T12 | **None** (no Session Expired modal; no sign-in page) | — |
| Ref-not-found errors | all | None observed in the task records | — |
| Fresh-snapshot recovery allowance | all | Not used for recovery in T12 (four planned snapshots) | — |
| Ambiguous Save outcome | T10, T11 | Not needed (every Save showed a settled disabled state) | — |
| Retried Finish, Save, New, or Refresh | all | **None** | — |
| Runtime close/reopen | T12 | Only the single planned close and reopen | Clean close; reopen to the same three rows |

## 6. Repository accounting

- **Pre-existing changes** (session-start `gitStatus`, not made by EXP-135): modified `tools/claude-harness/README.md`, `harness.config.example.json`, `src/cli.ts`, `src/config.ts`, `src/controller/handoff.ts`, `src/controller/machine.ts`, `src/testing/fakes.ts`; untracked `tools/claude-harness/briefs/EXP-119.brief.json`, `tools/claude-harness/src/usage.ts`, `tools/claude-harness/test/session-policy.test.ts`, `tools/claude-harness/test/usage.test.ts`. These were **not touched** by any EXP-135 task.
- **EXP-135 files (untracked at session start, created by the EXP-135 tasks):** `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md` and `evidence/EXP-135/` (all task files).
- **Written by T12:** `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md` (updated); `evidence/EXP-135/t12-01-pre-close-clean-three-rows-checkpoint.png`, `t12-02-reopened-refresh-three-rows-grid-overview.png`, `t12-03-reopened-row2-detail-fx-item-002.png`, `t12-04-reopened-row3-detail-fx-item-003.png`, `t12-runtime-close-reopen-readback.md`, `final-audit-acceptance-matrix.md`.
- **Tool-generated, not worker-authored:** Playwright MCP writes automatic snapshots and console logs under `evidence/playwright/` (for example `page-2026-10-25T22-13-36-074Z.yml`, `console-2026-10-25T22-13-20-493Z.log`). These are outside `evidence/EXP-135/`. The session-start git status did not list `evidence/playwright/`. Whether it is ignored is for operator Git review to confirm.
- **Not written:** AGENTS.md, recipes (none promoted), EXP-130, EXP-134, EXP-041-R3, EXP-042-R3, other experiment records, harness implementation (`tools/`), memory, environment files.
- **Operator Git review at outcome is authoritative** for repository state. The worker did not run git or shell commands.

## 7. Overall result

- **Creation, definition, and Designer recovery:** observed (T3–T7), with the AC-6 Save qualification.
- **Runtime empty state and three exact commits:** observed at UI level (T9–T11), with the placeholder-inference limitation.
- **Runtime close/reopen readback of 3 rows and 18 values:** observed at UI level, one session (T12).
- **Open items for operator disposition:** the AC-2 property-type carry-forward (or a separate read-only IDO schema readback); the "global object(s)" save-notification identity; the T5 full-text-index prompt origin; the T9 beforeunload origin; the console errors and warnings; whether `evidence/playwright/` should be ignored.
- **Not claimed:** database-level verification, cross-session durability, replay verification, dashboard or colour logic, recipe promotion, or acceptance of EXP-135.
