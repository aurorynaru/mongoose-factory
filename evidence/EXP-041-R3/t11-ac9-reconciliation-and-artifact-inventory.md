# EXP-041-R3 T11 — AC-9 reconciliation: artifact inventory, count reconciliation, repository audit

Date: 2026-10-10. Run R-20261010-154641-QsiV · EXP-041-R3 · cycle 12 · task T11.
Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `e646ca79-121d-47f6-af07-e178f3bf1d70`.
Scope: documentation and evidence reconciliation only. No browser tool, no Mongoose interaction, no Save, no reopen, no runtime close, no Finish.
The matrix, counts and status are in `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` (section "T11 — AC-9 consolidation"). This file holds the detail behind them.

## 1. Controller audit files and their reconciliation

Controller-generated files: `evidence/EXP-041-R3/harness-audit-T1.md` … `harness-audit-T10.md` (10 files). The worker did not write these. Each file has a summary header and a row table. The header counts do **not** reconcile to the row tables in several files, so this reconciliation uses the row tables for every count below.

| Audit | Header summary (as written) | Row-table rows | Flagged `browser_type` rows | Error rows | Consistent? |
|---|---|---|---|---|---|
| T1 | 50 actions, 28 reads, turns=101 | 121 | 4 (Select Form key entries) | 1 (Read of record path before it existed) | **No** (header 50 vs 121 rows) |
| T2 | 0 actions, 0 reads | 22 (Glob, Read, Grep, Write, Edit) | 0 | 0 | **No** (header reports no actions; rows show reads and writes) |
| T3 | 10 actions, 18 reads | 42 | 1 (Name plain fill, step b) | 0 | **No** (header 10 vs 42 rows) |
| T4 | 3 actions, 12 reads | 23 | 0 | 0 | **No** |
| T5 | 5 actions, 14 reads | 32 | 0 | 1 (stale ref `e563`) | **No** |
| T6 | 7 actions, 15 reads | 28 | 1 (Select Form key entry) | 0 | **No** |
| T7 | 10 actions, 18 reads | 34 | 2 (Select Form key entries) | 0 | **No** |
| T8 | 7 actions, 13 reads | 31 | 0 | 1 (no-op Edit on the record; no state change) | **No** |
| T9 | 7 actions, 16 reads | 33 | 1 (Select Form key entry) | 1 (no-op Edit on the record; no state change) | **No** |
| T10 | 1 action, 3 reads | 9 | 0 | 0 | **No** |

Conclusion: the controller header summaries are internally inconsistent with their own row tables, so they are not used. Row tables were counted directly. Where a worker-recorded count and the row table disagree, the total below is marked uncertain.

Flagged `browser_type` total: 9 rows (T1 4, T3 1, T6 1, T7 2, T9 1). All 9 are permitted: 8 are key-event entries into the Select Form filter (step e) and 1 is the plain fill of the wizard Name (step b). No `browser_type` reached any other field.

## 2. Lifecycle and gate counts reconciled to the row tables

| Operation | Count | Source (audit row) | Certainty |
|---|---|---|---|
| Wizard Finish | **1** | T5 row 7 | Reconciled |
| Finish retry | 0 | — | Reconciled (no second Finish row) |
| Completion-alert OK | 1 | T5 row 12 | Reconciled |
| Designer ordinary Save | **0** | no Save row in T1–T10 | Reconciled |
| Web Client Save | 0 | no row | Reconciled |
| Form-tab close (ordinary) | **1** | T8 row 9 | Reconciled |
| Reopen via Form menu recent item | **1** | T8 row 14 | Reconciled |
| Runtime Form open | **1** | T9 row 21 (OK on the selected row) | Reconciled |
| Runtime typing or record actions | 0 | T9 and T10 rows (no typing, click on inputs or record action) | Reconciled |
| Application data rows edited or saved | 0 | no row | Reconciled |
| Wizard route OK (builder selection) | **1** | T3 row 23 | Reconciled |
| Wizard builder changes | 0 | — | Reconciled |
| Wizard Next clicks | **3** | T3 row 33 (page 1→2); T4 rows 6 (2→3) and 10 (3→final) | Reconciled |
| Save Template label clicks | 1 (unchecked) | T4 row 14 | Reconciled |
| Name plain fill | 1 | T3 row 26 | Reconciled |
| Data Source option chosen | 1 | T3 row 30 | Reconciled |
| Select Form filter entries (key events) | **8** | T1 (4 rows), T6 (1), T7 (2), T9 (1) | Reconciled |
| Positive-control entries (`SqlTables`) | 2 | T1 row 23; T7 row 13 | Reconciled |
| Target entries (`FX_HelloWorld01` exact) | 4 | T1, T6, T7 row 19, T9 | Reconciled |
| Substring entries (`HelloWorld`) | 1 | T1 | Reconciled |
| Select Form OK | 1 | T9 row 21 | Reconciled |
| Select Form Cancel | 3 | T1 row 45; T6 row 22; T7 row 24 | Reconciled |
| Web Client Open toolbar clicks | 4 | T1 row 18; T6 row 10; T7 row 7; T9 row 9 | Reconciled |
| Designer New clicks | 2 | T1 (route cancelled), T3 row 11 | Reconciled for T3; T1 from the T1 record |
| Wizard discard confirmation answered Yes | 1 | T1 row 10 (R3 T1; operator disposition 1) | Reconciled |
| Route-dialog Cancel | 1 | T1 row 107 | Reconciled |
| Recovery snapshots (fresh, after a stale ref) | **1** (allowance consumed) | T5 rows 22–23 | Reconciled |
| Corrected inspections | 0 | — | Reconciled |
| Tool errors (total) | 4 | T1 row 2; T5 row 22; T8 row 28; T9 row 30 | Reconciled. None changed application state. |

Note on the Web Client Open count: each of the four Open clicks is a named row in the audit tables (T1 row 18, T6 row 10, T7 row 7, T9 row 9), so the total of 4 is reconciled to those rows.

Designer tab selects, snapshot totals, screenshot totals per task, and Designer read-only clicks are **uncertain**. They were counted in the worker records, and the audit row tables do not reproduce those counts exactly (for example, the T1 worker record counts 34 Designer clicks and the T1 row table was not recounted row by row in T11). Do not cite these totals without a fresh count.

## 3. Artifact inventory

### 3a. Worker-authored Markdown (repo-relative, `evidence/EXP-041-R3/`)

- `t1-gate-select-form-dialog-snapshots.md` (T1 gate snapshot excerpts)
- `t1-route-category-wizard-inventory.md` (T1 route, categories and wizards)
- `t2-documentation-and-evidence-audit.md` (T2 audit)
- `t3-wizard-preflight-inventory.md` (T3 page 1 and page 2)
- `t4-wizard-pages-2-to-final-inventory.md` (T4 page 2 to final)
- `t5-finish-result-and-form-readonly-inspection.md` (T5 Finish and read-only inspection)
- `t6-prefinal-baseline-and-select-form-inventory.md` (T6 baseline and zero-row check)
- `t7-post-creation-select-form-verification.md` (T7 two-query check)
- `t8-ac7-close-reopen-persistence-verification.md` (T8 close and reopen)
- `t9-ac8-web-client-runtime-open-observation.md` (T9 runtime open)
- `t10-ac8-runtime-recheck-and-strict-verdict.md` (T10 recheck and verdict)
- `t11-ac9-reconciliation-and-artifact-inventory.md` (this file)

Worker-authored Markdown total: 12 files (including this one).

### 3b. Worker-authored PNG screenshots (repo-relative, `evidence/EXP-041-R3/`): 32 files

| Task | Files |
|---|---|
| T1 (8) | `t1-01-webclient-initial-state.png`, `t1-02-positive-control-sqltables-settled.png`, `t1-03-target-FX_HelloWorld01-exact-settled-zero-rows.png`, `t1-04-target-HelloWorld-substring-settled-zero-rows.png`, `t1-05-control-testblank-lowercase-infix-settled.png`, `t1-06-designer-help-about-site-developer-user-scope.png`, `t1-07-classic-wizard-list-labels-read-no-selection.png`, `t1-08-designer-clean-after-route-cancel-user-scope.png` |
| T3 (4) | `t3-01-wizard-selection-classic-multiview-before-ok.png`, `t3-02-multiview-page1-initial-defaults.png`, `t3-03-multiview-page1-name-and-data-source-before-next.png`, `t3-04-multiview-page2-after-next-properties-primary-collection.png` |
| T4 (4) | `t4-01-initial-state-page2-properties-primary-collection.png`, `t4-02-page3-after-next-1-property-attributes.png`, `t4-03-final-page-save-template-checked-before-uncheck.png`, `t4-04-final-page-save-template-after-label-click-unchecked.png` |
| T5 (4) | `t5-01-pre-finish-final-page-save-template-unchecked-finish-enabled.png`, `t5-02-after-single-finish-completion-alert.png`, `t5-03-post-finish-form-open-designer-clean-user-scope.png`, `t5-04-components-tab-expanded-readonly-inspection.png` |
| T6 (2) | `t6-01-designer-prebaseline-form-open-clean-user-scope.png`, `t6-02-select-form-FX_HelloWorld01-exact-settled-result.png` |
| T7 (3) | `t7-01-select-form-open-settings-before-queries-leftover-row-at-open.png`, `t7-02-positive-control-SqlTables-settled-two-rows.png`, `t7-03-target-FX_HelloWorld01-exact-settled-one-row.png` |
| T8 (3) | `t8-01-pre-close-form-open-clean-user-scope-primary-collection.png`, `t8-02-after-single-close-no-form-tab-no-dialog.png`, `t8-03-after-single-reopen-components-expanded-readonly.png` |
| T9 (3) | `t9-01-select-form-open-leftover-filter-before-reentry.png`, `t9-02-select-form-target-fresh-settled-one-row.png`, `t9-03-web-client-runtime-FX_HelloWorld01-initial-state-after-single-open.png` |
| T10 (1) | `t10-01-runtime-recheck-FX_HelloWorld01-readonly-no-interaction.png` |

Note: the T2 Read of T1 PNGs and T9 image reads are views, not new files.

### 3c. Controller-generated files (not worker-authored)

- `harness-audit-T1.md` … `harness-audit-T10.md` (10 files).

### 3d. Tool-generated browser output (gitignored; not worker-authored)

- `evidence/playwright/` holds accessibility snapshots and console logs written by the browser tool on each call (several per task). They were read as evidence sources in T5–T10 and are cited by name in the task files. They are not enumerated here.

## 4. Repository-confinement audit (worker-visible)

- Worker-written repository files in this run: the experiment record `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` (created in T1; edited in T1–T11), and the files listed in §3a and §3b under `evidence/EXP-041-R3/`.
- Not written by the worker: `experiments/EXP-040-…`, `experiments/EXP-041-…md`, `experiments/EXP-041-R2-…md`, `experiments/EXP-036-…`, `experiments/EXP-039-…`, `recipes/…`, `AGENTS.md`, `tools/`, `docs/…`, memory files, or any other experiment file. These were read only.
- Failed edits: two no-op `Edit` calls on the record (T8 and T9) returned "No changes to make". They changed nothing.
- Git-level verification was not run by the worker (Bash is disabled in this session). The harness computes confinement from the before and after Git state.

## 5. Tool errors and recovery accounting

| # | Task | Tool error | Recovery | State effect |
|---|---|---|---|---|
| 1 | T1 | Read of `experiments/EXP-041-R3-…md` before it existed (controller row 2) | Record created in T1 | None |
| 2 | T5 | `browser_snapshot` "Ref e563 not found" after a targeted snapshot | One fresh untargeted snapshot (the single permitted recovery; allowance then exhausted) | None |
| 3 | T8 | `Edit` no-op "No changes to make" (record) | Edit retried with real content | None |
| 4 | T9 | `Edit` no-op "No changes to make" (record) | Edit retried with real content | None |

Stale-reference allowance: used once (T5). No later task used a recovery sequence. T7–T10 had no recovery snapshot and no corrected inspection.

## 6. Final browser state (from T10's last observation; T11 did not touch the browser)

- Designer tab: `FX_HelloWorld01` open and clean (Save disabled, Undo disabled), `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, URL `?MGForm=FX_HelloWorld01`.
- Web Client tab: `FX_HelloWorld01` runtime tab open, with two blank inputs (one with a required marker), a blank grid row marked with a blue new-row star, Save disabled, no dialog, no browser prompt. No data was entered or saved in the runtime.
- The runtime tab has **not** been closed. Its blank add-mode draft has **not** been discarded. Both need an operator decision.
