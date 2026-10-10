# EXP-042 cleanup inventory

Experiment: EXP-042 — Hello World Part 1: Two Test Records Through the Web Client Runtime
Record: `experiments/EXP-042-hello-world-part-1-two-test-records-through-the-we.md`
Final status (T4, 2026-10-10): **BLOCKED. No rows inserted. No application data mutated. Nothing deleted. Rows to delete: 0.**

Blocking reason: AC-2 failed (no supported observation established zero persisted records; the starred new-row placeholder is not proof) and AC-3 failed (neither runtime input was identified as FX_Code or FX_Label). No Save was performed, so no row can exist from this experiment.

## Authorized target (for a later insertion task only)

| Item | Identity |
|---|---|
| SQL table | `dbo.FX_HelloWorld01` (factory-owned, FX_ prefix) |
| IDO | `FX_HelloWorld01` in project `FX_HelloWorldProject01` (EXP-040 T12 identity; IDOs tab read in T2 showed Revision 2, Access As `G6R`) |
| Form (runtime only) | `FX_HelloWorld01`, User scope, Primary Collection `FX_HelloWorld01` (EXP-041-R3 T5 Designer read; not re-read in EXP-042, because no Designer tab was available) |
| Cleanup ownership | Factory test data that EXP-042 would create. Cleanup is out of scope for EXP-042. |

## Inserted-row register

| # | FX_Code | FX_Label | Table | IDO | Form | Inserted | Status |
|---|---|---|---|---|---|---|---|
| 1 | FX001 | Factory test one | `dbo.FX_HelloWorld01` | `FX_HelloWorld01` | `FX_HelloWorld01` (runtime) | **NOT INSERTED** | Planned only. Never staged, never saved. |
| 2 | FX002 | Factory test two | `dbo.FX_HelloWorld01` | `FX_HelloWorld01` | `FX_HelloWorld01` (runtime) | **NOT INSERTED** | Planned only. Never staged, never saved. |

- Rows to delete: **0**.
- Deletions performed: **none**.
- Persisted rows in `dbo.FX_HelloWorld01` before entry: **not proven** (AC-2 failed). No FX001 or FX002 match was established either way.
- The runtime Form tab from EXP-042 T2 remains open with an untouched blank new-row placeholder. It is not a test record and has not been saved. Operator closure is required (see the record's final browser state).

Evidence for the blocking gates: `evidence/EXP-042/t2-02-runtime-after-fip-f4-empty-criteria-settled.png`, `evidence/EXP-042/t2-03-runtime-after-supported-refresh-settled.png`, `evidence/EXP-042/t3-01-runtime-status-bar-accessibility-check.md`.
