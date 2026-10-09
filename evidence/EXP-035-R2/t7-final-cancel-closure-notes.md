# EXP-035-R2 — T7 notes: final ordinary Cancel and closure verification

Run R-20261009-212412-Gcw7, experiment EXP-035-R2, cycle 10, task T7.
worker_session_id: 69ed601b-bbc3-4abd-8c53-6a6415410f36. task_message_id: 2db230b2-ae2b-403b-a745-7fa4f1051028.

## §A Pre-final-Cancel state (planned fresh snapshot; not recovery)

Capture: `evidence/EXP-035-R2/t7-01-pre-final-cancel-snapshot.md` (fresh untargeted snapshot). No screenshot was taken before the final Cancel (none was required by the brief).

| Item | Observed |
|---|---|
| Dialog | `dialog "Select Form" [ref=f1e77]` open |
| Textbox | `textbox [active] [ref=f1e106]: FX_ComponentRecoveryLab02` |
| Filter By | `combobox [ref=f1e112]: Name` |
| Case Sensitive / Starts With | `checkbox` without checked marker (both unchecked) |
| Rows | ONE table → ONE row; gridcells `FX_ComponentRecoveryLab02` (`f1e97`, `f1e99`) |
| Cancel control | `button "Cancel" [ref=f1e127]` |

Matches the T6 post-reopen state. Guard passed; proceeded.

## §B Final ordinary Cancel (exactly once)

- Action: `browser_click` on `button "Cancel"` `f1e127` (Select Form toolbar Cancel), exactly once.
- Result: returned without error. Page URL and title unchanged. Tool-generated snapshot: `evidence/playwright/page-2026-10-09T13-51-48-965Z.yml`.
- No retry. No other interaction with the dialog (no typing, focus, toggle, row, Enter, or OK).

## §C Closure verification (fresh, read-only)

- `evidence/EXP-035-R2/t7-02-post-final-cancel-snapshot.md` (fresh untargeted snapshot).
- `evidence/EXP-035-R2/t7-03-post-final-cancel-viewport.png` (viewport screenshot).

| Check | Observed | Result |
|---|---|---|
| Select Form dialog node | none in snapshot (no `dialog "Select Form"`, no textbox, no grid, no OK/Cancel/Help) | Closed |
| Toolbar Open | `button "Open" [active] [ref=f1e23]` present; focus returned to it | Web Client available |
| Save button | `[disabled]` | No unsaved-change indicator |
| Web Client chrome | identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, menus, toolbar, Explorer tree | Normal Web Client present |
| Browser-native dialog | none visible in the snapshot or viewport | None |

Screenshot `t7-03-post-final-cancel-viewport.png` (viewed): SHOWS the Web Client with the Explorer tree and toolbar and an empty main region, with no dialog visible. DOES NOT SHOW anything outside the viewport.

## §D Counters after T7

| Counter | Value |
|---|---|
| Initial Open | 1 (T2) |
| Tested Cancel | 1 (T6) |
| Tested reopen | 1 (T6) |
| Final Cancel | 1 (T7) |
| Additional reopen | 0 |

These match the expected accounting in the brief.

## §E Recovery allowance (shared; not reset by session change)

- Fresh untargeted snapshot: **0 used / 1 remaining**. The T7 pre-Cancel and post-Cancel snapshots were planned captures, not recovery.
- Corrected visible inspection: **0 used / 1 remaining**.
- No "Ref not found", timeout, stale-ref, or ambiguous read occurred in T7.

## §F Limitations

1. The final state is observed through a single rendered snapshot and viewport. It does not establish anything beyond the frame.
2. The Cancel control was the one in the fresh pre-Cancel snapshot (`f1e127`); the click's result is verified only by the post-Cancel snapshot, not by any server-side record.
3. Tool-generated files under `evidence/playwright/` (including `page-2026-10-09T13-51-44-778Z` / `13-51-48-965Z` and the console log) are outside permitted paths and were not authored by the worker.
4. The T3 operator-reported 44-call log and the worker's 39-call accounting remain unreconciled (five calls); this is for the final repository-only audit. No prohibited transcript path was inspected in T7.

## §G Files written in T7

- `evidence/EXP-035-R2/t7-final-cancel-closure-notes.md` (this file; created)
- `evidence/EXP-035-R2/t7-01-pre-final-cancel-snapshot.md` (snapshot call)
- `evidence/EXP-035-R2/t7-02-post-final-cancel-snapshot.md` (snapshot call)
- `evidence/EXP-035-R2/t7-03-post-final-cancel-viewport.png` (screenshot call)
- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (updated)
- Tool-generated, not worker-authored: `evidence/playwright/*2026-10-09T13-51-*`
