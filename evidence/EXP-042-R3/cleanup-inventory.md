# EXP-042-R3 cleanup inventory

Experiment: EXP-042-R3 — Hello World Part 1: Two Test Records Through the Web Client Runtime (replay after operator browser refresh)
Record: `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md`
Status as of: cycle 14 (T11 operator-approved documentation update, task `8903d7af-2f4c-4c5e-a462-65ac4540d60c`, worker session `e6ddc4c2-95ad-45b5-bc6f-6d5878f42386`), 2026-10-10. Experiment disposition: **ACCEPTED WITH LIMITS**; classification **observed only, NOT replay_verified**.

## Summary

- Exactly two test rows were inserted by one explicit runtime toolbar Save (cycle 9, task `0788dc02-cda5-45ac-94be-bcbe28f0ac0d`): FX001 / Factory test one and FX002 / Factory test two.
- The Save completed once. It was not retried, and no second Save was performed.
- Both rows were recovered by a post-Save Refresh (cycle 10, task `ff7d9829-2041-42fc-b267-513d2b2ed08d`) and by a post-reopen Refresh after one ordinary Form close and one reopen (cycle 11, task `7ff8ff2d-c0d4-44c5-9bb7-c634ebccb0bb`). Both recoveries were in the same session.
- **Database-level persistence is NOT independently verified.** The evidence is the Web Client UI only. Cross-session recovery was not tested.
- **No cleanup was performed.** No rows were deleted or edited after Save. Cleanup ownership is retained for the operator, and any removal needs a separately authorized, FX_-scoped task.
- Rows to delete in this experiment: **0**. Deletions performed: **none**.

## Cleanup target identity

| Item | Identity |
|---|---|
| Table | `dbo.FX_HelloWorld01` (schema `dbo`, factory-owned, FX_ prefix) |
| IDO | `FX_HelloWorld01` in project `FX_HelloWorldProject01` (Revision 2, as cited from EXP-041-R3 T1 AC-1; not re-read in this experiment) |
| Runtime Form | `FX_HelloWorld01`, User scope (`anton.ramos@3mworks.com.ph`), Primary Collection `FX_HelloWorld01` (EXP-041-R3 T5 Designer read; not re-read in this experiment) |
| Columns | `FX_Code` String 30, key 1, required; `FX_Label` String 100, nullable (EXP-041-R3 T1 AC-1; read-only reference) |
| Cleanup ownership | Retained by the operator. These are factory test data created by EXP-042-R3 in the demo tenant. Cleanup is out of scope for this experiment and was not performed. |

## Inserted-row register

| # | FX_Code | FX_Label | Table | IDO | Form (runtime) | Insert path | Evidence (Web Client UI level, same session) | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | FX001 | Factory test one | `dbo.FX_HelloWorld01` | `FX_HelloWorld01` | `FX_HelloWorld01` | One explicit runtime toolbar Save (cycle 9). Staged in cycles 6–8. | Post-Save UI `t7-01` (cycle 9); post-Save Refresh `t8-01` (cycle 10); post-reopen Refresh `t9-04` (cycle 11) | Inserted per the Web Client UI. Recovered after Refresh and after ordinary close/reopen (same session). **Not database-verified. Not deleted. Cleanup retained for the operator.** |
| 2 | FX002 | Factory test two | `dbo.FX_HelloWorld01` | `FX_HelloWorld01` | `FX_HelloWorld01` | Same Save as row 1. Staged in cycle 8. | Same as row 1 | Inserted per the Web Client UI. Recovered after Refresh and after ordinary close/reopen (same session). **Not database-verified. Not deleted. Cleanup retained for the operator.** |

- Rows inserted by this experiment: **2** (per the Web Client UI). Rows awaiting an operator cleanup decision: **2**.
- Other rows observed in the collection after Save: **none**. The post-Save and post-reopen Refresh reads each returned exactly these two rows.
- Rows inserted outside `dbo.FX_HelloWorld01`: **none**.

## Pre-entry state

- Persisted rows before entry: **zero**, under the operator-amended AC-2 rule (2026-10-10). Cycle 2 ran one Refresh; the settled grid showed one starred new-row placeholder, both inputs blank, and status `(Object 1 of 1)` (`evidence/EXP-042-R3/t2-03-runtime-after-one-refresh-query-settled-status-bar.png`). This is a single-session observation, not a database count.

## Application-data and other changes made by this experiment

- Only the two rows above. No Form, IDO, IDO Project, SQL table, column, script, component or definition changed. No application table other than `dbo.FX_HelloWorld01` written. No User Preferences opened; no preference changed.

## Runtime state (not a test record)

- At the end of cycle 11 the runtime `FX_HelloWorld01` was open, with the two rows, Save disabled, and status `(Object 1 of 2)`. It is not a test record and holds no unsaved changes. Cycle 14 made no browser calls, so this is the last observed state.
- An inherited blank runtime tab found at cycle 0 was closed by the operator between cycles 0 and 2 (operator-reported; the worker did not observe the close). The worker did not discard or close any runtime record.

## Evidence

- Cycle 0: `t1-01-preflight-fx-helloworld01-runtime-tab-open-stop.png`, `t1-02-preflight-runtime-accessibility-snapshot.md`.
- Cycle 2: `t2-01` to `t2-04` (PNG).
- Cycle 4: `t3-01` to `t3-04` (PNG), `t3-02-baseline-runtime-accessibility-snapshot.md`. `t3-03` and `t3-04` show the Find Property preselections; neither shows the focused input (operator waived that requirement, cycle 14).
- Cycle 6: `t4-01-post-cancel-find-dialog-closed-baseline-object-1-of-1.png`, `t4-02-record1-staged-FX001-Factory-test-one-unsaved.png`.
- Cycle 7: `t5-01-pre-new-record1-staged-starred-save-enabled.png`, `t5-02-post-new-click-record1-retained-record2-blank-settled.png`.
- Cycle 8: `t6-01-both-records-staged-unsaved-no-save-clicked.png`.
- Cycle 9: `t7-01-post-save-runtime-state-after-single-save-click.png` (grey lower FX_Code input visible after Save).
- Cycle 10: `t8-01-post-refresh-complete-collection-read-after-save.png`.
- Cycle 11: `t9-01-post-form-tab-close-no-prompt.png`, `t9-02-select-form-fx-helloworld01-row-active-before-ok.png`, `t9-03-reopened-runtime-before-query-add-mode-placeholder.png`, `t9-04-post-reopen-refresh-complete-collection-read.png`.
- Controller audits: `harness-audit-T1.md` to `harness-audit-T9.md`.
