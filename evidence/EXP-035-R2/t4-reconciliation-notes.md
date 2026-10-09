# EXP-035-R2 — T4 notes: read-only reconciliation of interrupted T3 and current-state inspection

Run R-20261009-212412-Gcw7, experiment EXP-035-R2, cycle 4, task T4.
worker_session_id: 69ed601b-bbc3-4abd-8c53-6a6415410f36. task_message_id: d699bbed-2bc6-4a36-813a-f490f01baccd.
Prior worker sessions: 4adf1fa1-a207-43c1-8181-7b7a84722071 (T1–T3). No recovery allowance was reset by the session change.

## §A Repository reads (before any browser call in this task)

- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (record; read in full).
- `evidence/EXP-035-R2/t1-repository-review-notes.md` (read, first 60 lines; the review table and inherited-state comparison).
- `evidence/EXP-035-R2/t2-open-inherited-state-notes.md` (read in full).
- `evidence/EXP-035-R2/t2-02-dialog-open-inherited-snapshot.md` (read, dialog subtree).
- `evidence/EXP-035-R2/t3-action-audit-notes.md` (read in full; the T3 self-report).
- `evidence/EXP-035-R2/t3-02-settled-pre-cancel-snapshot.md` (read, dialog subtree).
- `evidence/EXP-035-R2/t3-03-settled-pre-cancel-dialog-viewport.png` (viewed as image).
- Not re-viewed in T4: `t2-01-preflight-webclient-viewport.png` and `t2-03-dialog-open-inherited-viewport.png` (both viewed and described in T2; not re-inspected here).
- `evidence/playwright/*2026-10-09*` tool-generated logs (listed; the 13:28–13:31 files read, see §B).

## §B Tool-generated artifacts from the T3 window (read-only corroboration)

The Playwright MCP tool wrote these files automatically. They are outside the permitted paths (disclosed in T3 §J; not authored or edited by the worker).

| Artifact (evidence/playwright/) | Time (UTC) | What it shows | What it does NOT show |
|---|---|---|---|
| `console-2026-10-09T13-28-14-315Z.log` | 13:28:14 | Page-load startup log only (no key or lifecycle entries) | Any action |
| `page-2026-10-09T13-28-23-941Z.yml` | 13:28:23 | T2 post-Open state: dialog open, Filter By `Caption`, textbox active and empty | — |
| `console-2026-10-09T13-30-34-806Z.log` | 13:30:34 | Page-load startup log only | Any action |
| `page-2026-10-09T13-30-38-403Z.yml` | 13:30:38 | Filter By combobox expanded; option `Name` `f1e427` listed; textbox not active, empty | Which click opened it |
| `page-2026-10-09T13-30-41-380Z.yml` | 13:30:41 | Filter By `Name` selected (combobox active); textbox not active and empty; both checkboxes without checked marker | — |
| `page-2026-10-09T13-30-45-403Z.yml` | 13:30:45 | Textbox `[active]` and empty; Filter By still `Name`; checkboxes without checked marker | Key presses (no key events logged) |
| `page-2026-10-09T13-31-18-429Z.yml` | 13:31:18 | Settled pre-Cancel state: textbox active with `FX_ComponentRecoveryLab02`; Filter By `Name`; both checkboxes unchecked; one table, one row, two gridcells `FX_ComponentRecoveryLab02` | Key-press count (see below) |

Corroboration of the saved file: `evidence/EXP-035-R2/t3-02-settled-pre-cancel-snapshot.md` has the same dialog subtree as the tool artifact `page-2026-10-09T13-31-18-429Z.yml` (same refs, e.g. textbox `f1e400`, table `f1e731`). The saved T3 snapshot is therefore consistent with the tool's own capture at that moment.

No tool artifact exists after 13:31:18 until this task's own capture (§C; console at 13:36:38). The tool does not write a file for every action (for example, the textbox focus click and the key presses left no file), so the absence of files is weak evidence that no action occurred after 13:31:18.

Nothing in the tool-generated logs records key presses, clicks or lifecycle calls. The 25 key-press results cannot be checked against any independent log.

## §C Planned current-state inspection (this task; read-only)

- Actions: one fresh untargeted `browser_snapshot` (saved as `evidence/EXP-035-R2/t4-01-current-state-snapshot.md`) and one viewport `browser_take_screenshot` (saved as `evidence/EXP-035-R2/t4-02-current-state-viewport.png`). No other browser call. No click, focus, key, type, select, Cancel, reopen, JavaScript or evaluate.
- These are planned read-only captures, not ambiguity recovery. They do not consume the recovery allowance.
- A console entry was written by the tool: `evidence/playwright/console-2026-10-09T13-36-38-105Z.log` (tool-generated; outside permitted paths; not read in detail, summary "0 errors, 2 warnings" from the snapshot header).

Snapshot (dialog subtree, lines 112–139 of the saved file):
- Dialog `Select Form` open (`dialog "Select Form" [ref=f1e77]`).
- Grid: ONE table → ONE rowgroup → ONE row → `gridcell "FX_ComponentRecoveryLab02"` (Caption) and `gridcell "FX_ComponentRecoveryLab02"` (Name).
- `textbox [active] [ref=f1e106]: FX_ComponentRecoveryLab02` (exact value from the accessibility line; focus inside dialog).
- `combobox [ref=f1e112]: Name`.
- `checkbox "Case Sensitive" [ref=f1e116]` and `checkbox "Starts With" [ref=f1e121]`: no checked marker (unchecked).
- OK `f1e125`, Cancel `f1e127`, Help `f1e129`: present, unpressed.
- Refs differ from the T3 snapshot (for example textbox `f1e400` in T3 and `f1e106` now). This is a re-numbering of the same visible state; no ref was used for any action.

Screenshot `t4-02-current-state-viewport.png` (viewed as image):
- SHOWS: identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge; Select Form dialog open over the Web Client; Filter field showing `…ComponentRecoveryLab02` (leading `FX_` clipped); Filter By `Name`; Case Sensitive and Starts With empty; one row `FX_ComponentRecoveryLab02` in Caption and Name; OK/Cancel/Help unpressed; no browser-native dialog visible.
- DOES NOT SHOW: the leading characters of the textbox (clipped); the rows outside the frame; any state outside the viewport. The exact textbox value comes from the accessibility line in §C, not the image.

## §D Reconciliation of T3 (what each source proves)

| T3 claim | Supported by | Proven? |
|---|---|---|
| Filter By changed Caption → Name | Tool artifacts 13:30:38 (dropdown expanded) and 13:30:41 (Name selected); current snapshot and screenshot (Name) | Yes, by rendered state at 13:30:41 and now |
| Case Sensitive and Starts With unchecked, never toggled | Accessibility markers in 13:30:41, 13:30:45, 13:31:18 artifacts and current snapshot; screenshot | Yes for the visible states. "Never toggled" is self-reported only; the T3 audit records 0 toggles. |
| Textbox focused before typing | Tool artifact 13:30:45 (`textbox [active]`, empty, Name still selected); T3 self-report of the focus click and `find` | Yes for the focus state at 13:30:45 (the click itself has no separate log) |
| Native `Control+a` and `Backspace` via `browser_press_key` | T3 self-report (tool wrapper `page.keyboard.press('Control+a')` and `'Backspace'`) | Self-report only. No independent log of key calls. |
| 25 of 25 printable single-character `browser_press_key` calls, in order, all successful | T3 self-report only. The final textbox value is exactly `FX_ComponentRecoveryLab02` (accessibility line, 13:31:18 artifact, current snapshot). The textbox was empty before the clear, so no residual text could remain. | Final text is consistent with exactly the 25 characters in order with no extra or missing characters. The count of tool calls and their individual success status are NOT independently verified. |
| Exactly one row, Name exact, settled before lifecycle | 13:31:18 artifact; `t3-02` snapshot; `t3-03` screenshot; current snapshot and screenshot (unchanged) | Yes, as rendered state at 13:31:18 and still rendered now |
| No Cancel, no reopen, no Open, no OK, no Enter, no row interaction (T3) | T3 self-report only. Current state is consistent with the pre-Cancel state. The dialog is open, and no artifact after 13:31:18 shows a lifecycle action. | Not independently proven. The current UI cannot by itself exclude a Cancel + reopen after 13:31:18, and a reopen would show a retained value the same way. |
| Recovery allowance not consumed in T3 | T3 self-report (0/1 and 0/1); no "Ref not found" or timeout in the audit; no artifact of an error | Self-report only |

Clear-step attribution: not established. The textbox was already empty before `Control+a` and `Backspace`, so the clear's effect cannot be separated from the empty starting state (T3 §G-1, unchanged).

## §E Counters (from evidence, not inferred from UI contents)

| Counter | Evidence | Count |
|---|---|---|
| Initial Open | T2 self-report with tool artifact `page-…13-28-23` (dialog open after a single toolbar Open; tooltip "Open" in the T2 post-Open snapshot). No artifact shows a second Open. | 1/1 (consumed in T2) |
| Tested Cancel | T3 self-report 0; no artifact; current state consistent with no Cancel | 0/1 (self-reported; not disproven) |
| Tested reopen | T3 self-report 0; no artifact | 0/1 (self-reported; not disproven) |
| Final ordinary Cancel | T3 self-report 0; not performed in T4 | 0/1 |
| Printable key operations | T3 self-report 25 success; 27 `press_key` total including Control+a and Backspace; no independent log | 25 claimed; not independently verified |
| Filter By changes | Tool artifacts 13:30:38 → 13:30:41 show Caption → Name | 1 (verified in rendered state) |
| Checkbox toggles | T3 self-report 0; end state unchecked | 0 claimed; visible state unchecked |
| Enter / OK / row interaction / typing / JavaScript / bulk entry | T3 self-report 0 | 0 claimed |

## §F Recovery allowance (EXP-035-R2, shared; not reset by session change)

- Fresh untargeted snapshot: **0 used / 1 remaining** (T4 snapshot counted as a planned capture, not recovery).
- Corrected visible inspection: **0 used / 1 remaining**.
- T3 consumed neither (self-report). T4 had no ref error, timeout, or ambiguous read.

## §G Acceptance mapping (assumption; flagged)

The approved brief is not readable by the worker, and the record does not number its acceptance checks. The mapping used here is an assumption for the coordinator to confirm:
- AC-2 = exact positive-control state (one row, Name exact) established before lifecycle testing. Current evidence: established as rendered state at 13:31:18 and now. Sufficient for the state. The key-sequence count (25) rests on self-report only.
- AC-3 = lifecycle sequence and counter integrity (one initial Open, one tested Cancel, one tested reopen, at most one final Cancel, no extra lifecycle). Current evidence: the T3 self-report is the only direct statement of the lifecycle counts before T4. Insufficient to close AC-3 for the interrupted T3 window; lifecycle has not yet been tested in this experiment.

## §H Unresolved

1. Whether the 25 key-press calls were 25 separate successful `browser_press_key` calls (no independent log; the final text is consistent with them).
2. Whether any lifecycle action occurred between 13:31:18 and the interrupted T3 end (13:34:26): not disproven, no artifact shows one.
3. Clear-step effect (textbox empty before clear).
4. Checkbox "never toggled" (self-report plus end-state markers).
5. Tool-generated files under `evidence/playwright/` are outside the permitted paths (compliance limitation, disclosed in T3 §J and repeated here).
6. The inherited-state variation across runs (EXP-035-R2 record §F of t1 notes; cause not established).

## §I Next permitted action

The tested Cancel → reopen (lifecycle) is NOT performed in T4 and is not authorized by this reconciliation. A separate dispatch must decide whether the lifecycle proceeds. If it does, it must start with a fresh untargeted snapshot, perform exactly one ordinary Cancel and one ordinary reopen with no typing or setting change, and capture post-reopen evidence. Do not retype `FX_ComponentRecoveryLab02`.

## §J Files written in T4

- `evidence/EXP-035-R2/t4-reconciliation-notes.md` (this file; created by the worker)
- `evidence/EXP-035-R2/t4-01-current-state-snapshot.md` (written by the browser snapshot call with a file name)
- `evidence/EXP-035-R2/t4-02-current-state-viewport.png` (written by the screenshot call with a file name)
- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (updated: T4 reconciliation section, counters, status)
- `evidence/playwright/console-2026-10-09T13-36-38-105Z.log` (tool-generated, not worker-authored; outside permitted paths)
