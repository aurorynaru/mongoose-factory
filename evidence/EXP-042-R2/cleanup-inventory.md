# EXP-042-R2 cleanup inventory

Experiment: EXP-042-R2 — Hello World Part 1: Two Test Records (replay with status-bar count and Find-dialog field mapping)
Record: `experiments/EXP-042-R2-hello-world-part-1-two-test-records-replay.md`
Run: R-20261010-172951-fF5Z. Worker session `a0e85a52-8d24-4e90-84fe-09ea3345e22c`.
- Cycle 0, task T1 (task_message_id `f6bd5734-7d13-4422-a530-7757941530bf`): preflight, preference step, one Form open, AC-2 gate failed.
- Cycle 1, task T2 (task_message_id `2485c792-d301-4a2d-b920-b04a39bae118`): documentation finalization only. No browser calls.

Status (2026-10-10): **BLOCKED at AC-2 (status bar absent in the opened runtime; no complete read-only query was run). No data entry. No New. No Save. No row inserted. No data mutated. Nothing deleted. Rows to delete: 0.**

## Authorized target (for a later insertion task only)

| Item | Identity |
|---|---|
| SQL table | `dbo.FX_HelloWorld01` (factory-owned, FX_ prefix, schema dbo) |
| IDO | `FX_HelloWorld01` in project `FX_HelloWorldProject01` (Revision Num 2, Access As `G6R`, as read on the IDOs surface in T1) |
| Form (runtime only) | `FX_HelloWorld01`, User scope (`anton.ramos@3mworks.com.ph`), Primary Collection `FX_HelloWorld01` (EXP-041-R3 T5 Designer read; not re-read in this experiment) |
| Cleanup ownership | Factory test data that this experiment would create, if inserted. Cleanup is out of scope for EXP-042-R2 and was not performed. |

## Inserted-row register

| # | FX_Code | FX_Label | Table | IDO | Form | Inserted | Status |
|---|---|---|---|---|---|---|---|
| 1 | FX001 | Factory test one | `dbo.FX_HelloWorld01` | `FX_HelloWorld01` | `FX_HelloWorld01` (runtime) | **NOT INSERTED** | Planned only. Never staged, never saved. **Not a persisted cleanup target.** |
| 2 | FX002 | Factory test two | `dbo.FX_HelloWorld01` | `FX_HelloWorld01` | `FX_HelloWorld01` (runtime) | **NOT INSERTED** | Planned only. Never staged, never saved. **Not a persisted cleanup target.** |

- Rows to delete: **0**. Deletions performed: **none**. Save performed: **none**.
- Persisted rows in `dbo.FX_HelloWorld01` before entry: **unverified.** The status bar was absent, and no complete read-only query was run, so collection emptiness is not established. Zero matches for FX001 and FX002 are **not** recorded.

## Application-data and other changes made by this run

| Change | Type | Cleanup ownership | Reversibility |
|---|---|---|---|
| Display Status Bar (User Preferences > Layout) changed from unchecked to **checked** by a click on its visible label, confirmed with OK | User preference (the only authorized preference change) | Operator-reversible. **Remains checked (left on)** per the operator decision (2026-10-10). Not reverted in T2. | Uncheck in View > User Preferences > Layout, then OK. |

No other preference changed. No Form, IDO, IDO Project, SQL table, column, script, component or definition changed. No application table written.

## Runtime state left open (not a test record)

- The `FX_HelloWorld01` runtime tab was opened once in T1. At the last observation (`evidence/EXP-042-R2/t1-07-runtime-accessibility-snapshot-no-status-bar.md`) it showed one starred new-row placeholder, two empty unnamed inputs, Save disabled, and New and Delete enabled. It is an **untouched blank add-mode record, not saved, not a test record.**
- Operator closure is required through the ordinary Form-tab close control (with a fresh label check on any prompt). The worker did not close, save or discard it, and T2 did not touch it.

Evidence for the blocking gate: `evidence/EXP-042-R2/t1-06-runtime-opened-initial-status-bar-check.png` (viewed), `evidence/EXP-042-R2/t1-07-runtime-accessibility-snapshot-no-status-bar.md` (read in T2).
