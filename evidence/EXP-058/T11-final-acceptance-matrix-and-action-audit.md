# EXP-058 T11 — final acceptance matrix, cumulative action audit, and repository-confinement findings

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 12, task T11.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `f73faffb-dc61-439d-bee9-54c6bb63e851`.
Date: 2026-10-11. Documentation-only task. **Zero browser calls, zero Designer or runtime interactions, zero metadata changes.** Sources: this record, the T1–T10 reports, the snapshots and screenshots under `evidence/EXP-058/`, and the controller-generated `harness-audit-T1.md` … `harness-audit-T10.md` (read-only).

## 0. Recommended outcome

**BLOCKED (not accepted), exact unsatisfied check: AC-11, repository-confinement component.** The worker cannot demonstrate repository-level confinement (no shell; `git status` cannot be run here). The harness computes it, and the harness diff was not available to this worker. This is the same condition that held EXP-057 at its T9 audit until an operator-approved attachment was supplied.

Every experimental check AC-1 to AC-10 is substantiated by existing evidence, with the limits in §2. The AC-11 reconciliation of runtime and Designer counts is substantiated by the controller audits (§3). Classification is **observed**, never replay_verified.

If the harness confinement diff shows only the EXP-058 record and `evidence/EXP-058/` as worker-authored, with the disclosed controller audits, ignored captures, and pre-existing `tools/learning-harness/` changes separated out, the coordinator may move the outcome to **accepted (observed)**. That decision is the coordinator's or operator's; this worker does not make it.

Two conditions the coordinator should confirm (neither is claimed as satisfied by this worker alone):
1. **The cycle-8 AC-4 amendment.** The worker received only the summary in the T7 bounded instruction, not the full operator text. The amendment's effect as applied is recorded in §4.
2. **The T10 AC-10 identity inference.** The runtime value box has no accessible name; its identity as FX_VarTestEdit is inferred (§2, AC-8/AC-10).

## 1. Evidence index (decisive paths)

| Stage | Report | Decisive snapshots and screenshots |
| --- | --- | --- |
| T1 baseline | `T1-preflight-baseline-report.md` | `t1-snapshot-00`, `-01`, `-02`, `-03` … `-17`, `-19` … `-25`; `t1-01`, `t1-02`, `t1-08`, `t1-09`, `t1-10` |
| T2 pane and grid | `T2-baseline-completion-report.md` | `t2-snapshot-00` … `-06`; `t2-01` … `t2-07` |
| T3 Prompt move | `T3-sequence0-prompt-migration-report.md` | `t3-snapshot-00` … `-07`; `t3-01` … `t3-06` |
| T4 Set Values move | `T4-sequence1-set-values-migration-and-pre-save-grouping-report.md` | `t4-snapshot-00` … `-10`; `t4-01` … `t4-07` |
| T5 Primary change | `T5-fx-refreshbutton-primary-change-report.md` | `t5-snapshot-00` … `-07`; `t5-01` … `t5-05` |
| T6 pre-Save AC-4 audit | `T6-pre-save-AC4-readonly-audit-report.md` | `t6-snapshot-00` … `-07`; `t6-01`, `t6-02` |
| T7 Save | `T7-single-designer-save-and-immediate-post-save-matrix-report.md` | `t7-snapshot-00` … `-13`; `t7-01` … `t7-04` |
| T8 close, reopen, AC-6 | `T8-designer-close-reopen-and-AC6-recovery-verification-report.md` | `t8-snapshot-00` … `-28`; `t8-01`, `t8-02` |
| T9 runtime close and open | `T9-runtime-close-open-and-initial-state-verification-report.md` | `t9-snapshot-00` … `-05`; `t9-01` … `t9-03` |
| T10 activation and prompt | `T10-single-fx-refresh-activation-and-postcondition-report.md` | `t10-snapshot-00` … `-03`; `t10-01` … `t10-03` |

Controller audits (not worker-authored): `harness-audit-T1.md` … `harness-audit-T10.md`.

## 2. AC-1 to AC-11 matrix

| AC | Result | Decisive evidence | Limitations |
| --- | --- | --- | --- |
| **AC-1** Read-only preflight: inherited Designer and runtime tabs, usable session, exact identity (Name FX_Items; User; ScopeName `anton.ramos@3mworks.com.ph`), clean Save-disabled state, no challenge or error dialog. Screenshots and snapshots saved. Tutorial Section 8 and its agent boundary reviewed. | **Supported, with limits** | T1 §3; `t1-snapshot-00`, `t1-snapshot-26`; `t1-01`, `t1-08`. Tutorial Section 8 and boundary (lines 228–243, boundary line 243): recorded in T1 §1. Designer re-confirmed at T2, T7, T8 and T10 start. | (a) **Process ordering:** the objective asked for EXP-055, EXP-056 and EXP-057 to be reviewed before any browser operation. T1 read EXP-057 in full and EXP-056 T10 in part, but read the EXP-055 record and its T1 and T5 reports only in T2, after T1's browser operations. (b) The Designer console showed 3 errors at T1 (source unidentified). |
| **AC-2** Complete pre-mutation baseline: one StdFormRefreshCompleted group with two enabled actions (seq 0 Prompt with Hello World and OK; seq 1 Set Values with `SETVARVALUES(FX_VarTest=P(FX_Description))`); Initial Command Refresh; 17 entries and exposed properties; FX_RefreshButton Primary StdFormRefresh; FX_VarTestEdit binds `variables.FX_VarTest`; FX_VarTest Form - Temporary; no FX_Test handler. | **Supported, with limits** | T1 §4; `t1-snapshot-02` (17 treeitems), `t1-snapshot-01` (grid of two handler rows; Prompt readback `t1-snapshot-19` and `t1-snapshot-20`; Set Values readback `t1-snapshot-22` and `t1-snapshot-23`); FX_RefreshButton `t1-snapshot-03`; FX_DescriptionEdit `t1-snapshot-04`; FX_VarTestEdit `t1-snapshot-05`; FX_VarTest `t1-snapshot-25`. Pane (00) and (01): unavailable, documented in T2 §4 (`t2-snapshot-02`, `t2-snapshot-03`; `t2-01`, `t2-02`). Grid screenshots `t1-10` (lower rows only) and `t2-03` to `t2-07`. | Pane (00) and (01) expose no Component-tab properties in this UI; recorded as unavailable, not inferred. `t1-10` shows only lower grid rows; the full 17 are in the snapshots. |
| **AC-3** Before Save: exactly the original seq 0 Prompt and seq 1 Set Values in one FX_Test group, original parameters, order, and enabled states; exactly two handler actions; no StdFormRefreshCompleted; intermediate and final grids show actual movement; picker offer vs native entry recorded. | **Supported, with limits** | T3 §0, §4–6; `t3-snapshot-03` (picker lists only `Std*`, no FX_ option), `t3-03`; `t3-snapshot-04` and `t3-04` (typed value before commit); `t3-snapshot-05` and `t3-05` (FX_Test group appears, StdFormRefreshCompleted keeps Set Values only); `t3-snapshot-07` (Prompt readback under FX_Test, `Disabled false`). T4 §3–5; `t4-snapshot-02` (picker lists `FX_Test` first, line 400), `t4-02`; `t4-snapshot-03`, `t4-03`; `t4-snapshot-04` and `t4-04` (StdFormRefreshCompleted header gone; grep finds no match); `t4-snapshot-05`, `t4-05` (Prompt dialog: Hello World, OK only); `t4-snapshot-08`, `t4-06` (Set Values dialog: `FX_VarTest=P(FX_Description)`); `t4-snapshot-10`, `t4-07`. | Entry route: **typed editable entry + Tab commit** in both moves. The controller flagged one `browser_type` per move as a prohibited-tool hit (§3). The brief required the editable entry, so the worker treats the flag as a classification to review, not a prohibited action. Parameter readbacks came through accessibility text and dialog text, not pixels; icon and Default Button are visual only. Picker offer: not offered in T3; offered but not used in T4. |
| **AC-4** Before Save: FX_RefreshButton Events > Primary = FX_Test; other button properties match AC-2; 17-component inventory, FX_VarTestEdit binding and geometry, FX_DescriptionEdit binding, FX_VarTest definition, Initial Command, unrelated Form properties unchanged; discrepancies recorded. | **Supported under the cycle-8 amendment, with the discrepancy recorded** | Primary: T5 §2–4; `t5-snapshot-02` (pre-change `StdFormRefresh`, line 907), `t5-snapshot-05` (`FX_Test`, line 907), `t5-05`. Comparison: T6 §5 (field-by-field), `t6-snapshot-01`, `t6-snapshot-02`, `t6-snapshot-06`, `t6-snapshot-07`; conflict in `t6-01`. Discrepancy: grid "Event to generate" `StdFormRefresh` at T5, T6 and T7 (`t5-snapshot-06` line 518; `t6-snapshot-01` line 518; `t7-snapshot-05` line 511). | **Original AC-4 text alone was not met at T6** because the grid column (`StdFormRefresh`) conflicted with Primary (`FX_Test`). The cycle-8 amendment, as summarised in the T7 instruction, excludes the grid value from the pre-Save comparison and requires it to equal FX_Test after reopen (§4). The worker did not see the full amendment text. Pane properties unavailable (documented). |
| **AC-5** Exactly one native Designer Save succeeds; Designer clean, Save disabled, no error dialog; post-Save readback: single FX_Test group with both actions, no StdFormRefreshCompleted, Primary FX_Test, unchanged comparison properties; Save result and clean-state screenshot. | **Supported, with limits** | T7 §0–4; Save result native text `Form [FX_Items] and global object(s) were saved.` in `t7-snapshot-07` (line 1141), with Save, Regenerate, Undo, Redo disabled (lines 10–55); clean-state screenshot `t7-03`; post-Save handler readback `t7-snapshot-08` (lines 298–310; grep finds no StdFormRefreshCompleted); Primary `t7-snapshot-13` (line 861); FX_VarTest `t7-snapshot-10`; Initial Command `t7-snapshot-09`. Controller: `harness-audit-T7.md` row 32 (one Save click). | The toast is in the accessibility tree; **it is not visible in `t7-03`** or `t7-04`. The SaveChanges response body was not captured. Post-Save reads of the other 16 components were made after the reopen (T8), not immediately after the Save. The grid "Event to generate" still read `StdFormRefresh` immediately after the Save (excluded by the amendment; resolved at T8). |
| **AC-6** Clean Designer tab closed once; reopen by recent-forms (one retry and one fallback allowed); recovered Form retains FX_Test actions, sequence and parameters, Primary FX_Test, 17 components, FX_VarTest, Initial Command, Save disabled; all routes and counts recorded; observed UI recovery only. | **Supported, with limits** | T8 §2–7; controller `harness-audit-T8.md` row 4 (close, one click), row 8 (Form menu), row 11 (recent-forms `FX_Items`, attempt 1; no further menu or Open rows). Snapshots: `t8-snapshot-01` (tablist empty), `t8-snapshot-03` (FX_Items open, Save disabled, User footer), `t8-01`; post-reopen checks `t8-snapshot-06` (17 rows; FX_RefreshButton `FX_Test`), `t8-snapshot-07` (Primary line 907), `t8-02`, `t8-snapshot-08` and `-09` (one FX_Test group, seq 0 and seq 1 `false`, original summaries), `t8-snapshot-10` to `-12` (FX_VarTest), `t8-snapshot-13` (Form properties), `t8-snapshot-14` to `-28` (components). | Observed UI recovery in one browser session, not database durability. Parameter dialogs were **not reopened** after reopen; parameter fidelity is confirmed from the summary strings only. Pane (00) and (01) were not re-read. The mechanism by which the grid "Event to generate" value changed to `FX_Test` on reopen is unresolved. |
| **AC-7** Inherited runtime tab closed once; FX_Items opened once via Open > Select Form; settled Form loads three original records with unchanged values; no Hello World prompt on opening; route, rendered Form, selected record, Save disabled, and settled snapshots captured before any FX_Refresh. | **Supported, with limits** | T9 §2–5; controller `harness-audit-T9.md` row 10 (close), row 14 (Open), row 19 (Select Form row), row 23 (OK). Snapshots `t9-snapshot-00` (inherited: eggs current, value `45 pound iron`), `t9-snapshot-01` (tablist empty), `t9-snapshot-02` (Select Form dialog, one FX_Items row), `t9-snapshot-03` (row active), `t9-snapshot-04` (immediate, no alertdialog), `t9-snapshot-05` (settled, three records, dumbbell `Object 1 of 3`, Save disabled, lines 148–168, 478). Screenshots `t9-01`, `t9-02`, `t9-03`. | The opening-time observation window is short: immediate, then one 4-second wait. A prompt appearing after that window would not be detected. It is not established whether the runtime loaded metadata from the server or from a cache (cache work is out of scope). The "Initial Command Refresh behaviour" is observed only as the absence of a prompt. |
| **AC-8** After opening and before FX_Refresh, the value box corresponding by position and Designer binding to FX_VarTestEdit is visibly empty, no error; screenshot and accessibility readback; lack of a runtime accessible name qualified. | **Supported (passed on its written criterion), with identity inferred** | T9 §6; `t9-snapshot-05` line 171 (`textbox` with no value and no accessible name); `t9-03` (empty box beside FX_Refresh). T10 pre-activation: `t10-snapshot-01` line 171, `t10-01`. | The runtime textbox has **no accessible name**. Its identity as FX_VarTestEdit is inferred from its position right of FX_Refresh, the Designer binding and geometry recorded in T1 and T2, and its being the only unnamed Edit. Its emptiness is observed directly. |
| **AC-9** Exactly one FX_Refresh activation produces exactly one Hello World prompt on FX_Items; screenshot and snapshot of text, Form title, OK response captured before one authorised dismissal. | **Supported: PASSED** | T10 §3–4; controller `harness-audit-T10.md` row 9 (one click on FX_Refresh), row 10 (immediate snapshot), row 15 (one OK click). `t10-snapshot-02` lines 478 (status `FX_Refresh (Object 1 of 3)`), 482 (`alertdialog "Infor Mongoose Application Development Framework - FX_Items"`), 483 (`Hello World`), 484–485 (single `OK`). Screenshot `t10-02` shows the same. | The Form title is taken from the dialog title, which contains the Form name and the application name; no separate Form-title element was read. The information icon is visual only. The console at that time showed 0 errors. |
| **AC-10** After one authorised dismissal, the FX_VarTestEdit-associated value equals the selected row's actual FX_Description character-for-character; dumbbell expected `45 pound iron`; records unchanged; runtime Save disabled; comparison captured in one evidence sequence. | **Supported: PASSED (observed comparison)** | T10 §4–5; `t10-snapshot-03`: selected Item `dumbbell` (line 175), FX_Description `45 pound iron` (line 179), value box `45 pound iron` (line 171), records unchanged (lines 151–168), Save disabled (line 59). Screenshot `t10-03` shows value box and Description together, Save greyed, dumbbell current. Controller row 15 (one OK). | **Equality passed** on the accessibility strings. The value box identity is inferred (AC-8). Hidden whitespace beyond the accessibility string **cannot be independently excluded**. The **producing action was not isolated** (the Prompt and Set Values actions both sit under FX_Test). Empty before activation and populated after is observed in this session only. The inherited value `45 pound iron` seen at T9 before the close was stale and is not used. |
| **AC-11** Reconciliation of the cumulative audit; full matrix; repository confinement. | **Reconciliation supported; repository confinement NOT demonstrated (unsatisfied check)** | §3 below (controller audit reconciliation); §5 (confinement findings). | Repository-level confinement cannot be shown from the worker session. The harness diff is required. |

## 3. Cumulative audit reconciliation (AC-11)

### 3.1 Required against observed

| Item | Required | Observed | Source |
| --- | --- | --- | --- |
| Handler Event association migrations | exactly 2 | **2**: seq 0 Prompt (T3, typed entry + Tab); seq 1 Set Values (T4, typed entry + Tab) | T3 and T4 reports; `harness-audit-T3.md` rows 24, 29; `harness-audit-T4.md` rows 16, 21 |
| FX_RefreshButton Primary change | exactly 1 | **1**: picker option `FX_Test` clicked, then Tab commit (T5) | T5 §3–4; `harness-audit-T5.md` rows 24, 31 |
| Designer Save | exactly 1 | **1**: toolbar Save click (T7) | T7 §3; `harness-audit-T7.md` row 32 |
| Ordinary Designer Form-tab close | exactly 1 | **1** (T8) | T8 §2; `harness-audit-T8.md` row 4 |
| Recent-forms reopen, first attempt | 1 successful | **1 attempt; succeeded** (T8) | T8 §3; `harness-audit-T8.md` rows 8, 11; `t8-snapshot-03` |
| Designer reopen retries or fallbacks | 0 | **0** (no second menu route, no Designer Open toolbar) | `harness-audit-T8.md` (no further menu or Open rows) |
| Inherited runtime closure | exactly 1 | **1** (T9) | T9 §3; `harness-audit-T9.md` row 10 |
| Runtime opening via Open > Select Form | exactly 1 | **1**: toolbar Open, Select Form row, OK (T9) | T9 §4; `harness-audit-T9.md` rows 14, 19, 23 |
| Opening-time Hello World prompts | 0 | **0** within the observed window (immediate; settled after about 4 s) | T9 §5; `t9-snapshot-04`, `t9-snapshot-05` |
| FX_Refresh activation | exactly 1 | **1** (T10) | T10 §3; `harness-audit-T10.md` row 9 |
| Refresh-triggered Hello World prompt | exactly 1 | **1** (`alertdialog`, OK only) | `t10-snapshot-02` |
| OK dismissal | at most 1 | **1** | `harness-audit-T10.md` row 15; `t10-snapshot-03` |
| Business-data modifications | 0 | **0** (no runtime typing, edits or Save in any audit) | Audits T9 and T10 contain no `browser_type`, `browser_press_key` or Save |
| Runtime Saves | 0 | **0** (the only Save click in any audit is T7, in the Designer) | `harness-audit-T7.md` row 32 |
| Extra FX_Refresh activations | 0 | **0** | `harness-audit-T10.md` |
| Regenerate Form, Undo, Redo | 0 | **0** (none clicked in any audit) | grep over all `harness-audit-T*.md` |
| Unintended click on a metadata control | 0 | **0**. One view-state Details collapse (T7) and one unintended read of the Designer tab at T10 start, both recorded (§6) | T7 §3; T10 §1 |

### 3.2 Controller audit headers (for each task)

| Task | Controller "actions" (interaction calls) | Controller "reads" | Controller "prohibited-tool hits" | Controller "errors" |
| --- | --- | --- | --- | --- |
| T1 | 30 | 40 | 0 | 1 (a `Read` of the record before it existed; harmless) |
| T2 | 11 | 15 | 0 | 0 |
| T3 | 7 | 15 | **1** (`browser_type`, the brief-required editable Event entry) | 0 |
| T4 | 10 | 19 | **1** (`browser_type`, same classification) | 1 (a `Grep` with an unsupported lookahead; harmless) |
| T5 | 7 | 14 | 0 | 0 |
| T6 | 21 | 11 | 0 | 0 |
| T7 | 12 | 19 | 0 | 0 |
| T8 | 28 | 32 | 0 | 0 |
| T9 | 5 | 12 | 0 | 0 |
| T10 | 3 | 9 | 0 | 0 |
| **Total** | **134** | **186** | **2** (both `browser_type`) | **2** (both harmless non-browser errors) |

Controller "actions" are the interaction calls (clicks, selects, typing, key presses, mouse moves, wheel). Snapshots, screenshots, `Grep`, `Read`, `Write` and `Edit` are counted as reads, and the `browser_wait_for` in T9 is not in the controller count. The worker's own counts agree with these headers task by task (for example T8: 28 clicks; T6: 21 clicks; T5: 6 clicks and 1 Tab; T1: 27 clicks and 3 tab selects).

Cumulative interaction-call breakdown: clicks 118; tab selects 5 (T1: 3; T9: 1; T10: 1); mouse moves 1 and wheel 5 (T2 grid scroll); typed entries 2 (T3, T4); Tab key commits 3 (T3, T4, T5). Sum 134.

Snapshot files saved under `evidence/EXP-058/`: 124 (T1 29, T2 7, T3 8, T4 11, T5 8, T6 8, T7 14, T8 29, T9 6, T10 4). Screenshot files: 49 (T1 10, T2 7, T3 6, T4 7, T5 5, T6 2, T7 4, T8 2, T9 3, T10 3). These are worker self-counts from file listings. The file listings and the controller reads are consistent with them.

### 3.3 Prohibited-tool flags

The controller flagged the two `browser_type` calls as "prohibited-tool hits" (T3, T4). The brief required entry into the editable Event combobox, and the worker used no script, evaluate or run-code route. The controller's classification is recorded as it stands for coordinator review; this worker does not overrule it.

## 4. The cycle-8 AC-4 amendment and the grid/Primary discrepancy

- **Original discrepancy (pre-Save, through T5, T6, T7).** The Components grid "Event to generate" cell for FX_RefreshButton read `StdFormRefresh` (`t5-snapshot-06` line 518; `t6-snapshot-01` line 518; `t7-snapshot-05` line 511), while the native Events > Primary read `FX_Test` (`t5-snapshot-05` line 907; `t6-snapshot-02` line 907; `t7-snapshot-06` line 907). Visible evidence in T6 showed that the two values are displayed under different labels in different places, that the Properties panel has no "Event to generate" row, and that the cell did not refresh through a Details-tab round trip or a reselect. The worker did not assume either explanation.
- **Amendment (as received in the T7 instruction).** The amended pre-Save gate accepted the native Primary `FX_Test`, excluded the grid value from the pre-Save comparison, and required the grid value to equal `FX_Test` after the close and reopen. The worker has the summary, not the operator's full text.
- **Mandatory post-reopen confirmation (T8 §5).** After the Designer close and reopen, the grid "Event to generate" for FX_RefreshButton read **`FX_Test`** (`t8-snapshot-06` line 518; row summary line 511 `FX_RefreshButton PushButton 1 0 FX_Test`), and the native Components > Events > Primary read **`FX_Test`** (`t8-snapshot-07` line 907). Screenshot `t8-02` shows the grid value; the Primary value is outside its frame and rests on the accessibility readback.
- **Resolution status.** The discrepancy is **resolved by visible evidence after reopen**. Its mechanism is **not established**. The UI does not show whether the grid column was a stale display until the reopen or a separate stored attribute. Same-property versus distinct-field is unresolved. Whether the reopen reflects backend persistence is not claimed.

## 5. Repository confinement findings (AC-11)

**Limit first:** the worker has no shell and did not run `git status`. Bash is disabled. Confinement at repository level is computed by the harness from before and after Git state, and that diff was not available here. The statements below rely only on the controller audits and the worker's own file list.

### 5.1 Worker-authored writes (from the controller audits, `Write` and `Edit` rows)

- `experiments/EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md` (created T1; edited T2–T11).
- `evidence/EXP-058/T1-preflight-baseline-report.md` through `evidence/EXP-058/T10-single-fx-refresh-activation-and-postcondition-report.md` (T1–T10 reports; each written once and edited in place).
- `evidence/EXP-058/T11-final-acceptance-matrix-and-action-audit.md` (this file).
- No write or edit targeted any other path. The audits show no changes to `AGENTS.md`, `docs/`, `tools/`, recipes, environment records, or any other experiment's record or evidence.

### 5.2 Worker-directed browser captures under `evidence/EXP-058/`

- Accessibility snapshots and screenshots (`t1-…` to `t10-…`) were written by the browser tool at worker-supplied `filename` paths under `evidence/EXP-058/`. They are worker-directed artefacts inside the evidence directory.

### 5.3 Controller-generated files (not worker-authored)

- `evidence/EXP-058/harness-audit-T1.md` … `harness-audit-T10.md`. These are written by the controller and are disclosed here as such.

### 5.4 Automatic ignored captures (not worker-authored)

- `evidence/playwright/` (gitignored). The browser tool auto-saved a page snapshot (`page-…yml`) and console log (`console-…log`) for many calls across T1–T10, including the snapshots this worker read by grep. These are numerous; they were not individually enumerated. They are disclosed as ignored, tool-generated captures.

### 5.5 Pre-existing repository changes (not made by this worker)

- The session-start git status (in the conversation context) listed these modified files before any EXP-058 work: `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. This worker did not touch any of them (no audit row references them).
- Recent commits in that status context include `23aebe1` (approved EXP-058 brief) and `9da2507` (draft EXP-058 brief). These are prior, not worker-authored.

### 5.6 Unverified repository-level conditions (limitations)

- Whether any tracked file outside the listed paths changed during the run is **not verified** by this worker.
- Whether `git status` now matches the pre-run list plus the EXP-058 record and `evidence/EXP-058/` is **not verified** by this worker.

## 6. Unexpected states and harmless deviations (recorded)

1. **T7 Details-panel collapse.** A click intended for the Event Handlers tab was reported by the tool as `#tool-5000` and collapsed the Details panel. Restored by a view-only expand (ref `e1041`). Confirmed unchanged handler grid. No metadata change (T7 §3; `harness-audit-T7.md` row 5).
2. **T10 unintended Designer read.** The first snapshot of the task was taken while the Designer tab was still current. It was read-only; the tab was then selected and no action taken from the Designer read (T10 §1; `harness-audit-T10.md` row 2).
3. **T1 process ordering.** EXP-055 was reviewed in full only at T2, after T1's browser operations (AC-1 limit (a)).
4. **Designer console.** 3 errors at T1, 4 errors from T2 onward (the first Pane selection). Source not identified; no diagnostics were used.
5. **Pane (00) and (01)** expose no Component-tab properties in this UI (T2). Documented, not inferred.
6. **Picker versus typed entry.** `FX_Test` was not offered by the Prompt's Event picker in T3 but was offered in T4 (Set Values) and in the Primary picker in T5. The reason the offer changed is unresolved. The typed route was used for both handler moves, and the picker-click plus Tab route for the Primary change. The Primary picker click alone did not commit; the Tab press did.
7. **Regenerate Form.** Its toolbar button was shown enabled in the dirty state (T6). It was not clicked (`harness-audit` files contain no Regenerate call).
8. **Post-reopen parameter dialogs** were not reopened in T8; the summary strings were verified.
9. **Save toast** is in the accessibility tree but not visible in the screenshots; the SaveChanges response body was not captured.
10. **Harmless controller errors:** a `Read` of the record before it existed (T1) and a `Grep` with an unsupported lookahead (T4).

## 7. Knowledge classifications

| Finding | Classification |
| --- | --- |
| Both handler Event associations moved by typed editable entry plus Tab commit, with a pre-Save grouping of one FX_Test group holding two enabled original actions | **observed** (single session; pre-Save) |
| The typed-entry-plus-Tab commit route used for the three Event-value commits (T3, T4, T5) | **candidate_procedure** (observed three times in one session; not repeated across sessions; not verified) |
| Event picker offered `FX_Test` in T4 and in the Primary picker (T5), not in T3 | **observed**; cause **unresolved** |
| Single native Designer Save succeeded (native text; Save disabled afterward) | **observed** (Designer session; not a durability claim) |
| Pre-Save grid "Event to generate" `StdFormRefresh` versus native Primary `FX_Test` | **observed**; resolved after reopen by visible evidence; mechanism **unresolved** |
| Post-reopen grid and Primary both `FX_Test`; handler group intact; 15 non-Pane components, FX_VarTest, Initial Command and Form properties match the baseline | **observed** (single session; UI recovery, not database durability) |
| Runtime opening produced no Hello World prompt within the observed window | **observed** (window short; longer-delay prompt not excluded) |
| Runtime value box empty before activation and `45 pound iron` after one activation | **observed** (values); component identity **inferred** |
| One FX_Refresh activation produced one Hello World prompt (FX_Items title, OK only) and one OK dismissal | **observed** (single session) |
| The runtime value came from the FX_Test-bound Set Values action specifically | **unresolved** (not isolated) |
| Whether the runtime loaded post-Save metadata rather than cached metadata | **unresolved** (not tested; cache work out of scope) |
| Replay-verified findings | **none**. No replay claim is made for any finding. |

## 8. Final browser state (from T10)

- **Web Client (tab 1, the runtime):** the FX_Items Form is open and settled. Current record dumbbell (`Object 1 of 3`); Description `45 pound iron`; Cost `45.00`; UoM `EA`; the unnamed value box beside FX_Refresh reads `45 pound iron`. Records unchanged (eggs `cage free`, guitar `natural acoustic`). Save disabled. No dialog open. The single FX_Refresh activation and the single OK dismissal are used (budget exhausted). The runtime tab was not closed or reopened in T10 (`t10-snapshot-03`, `t10-03`).
- **Designer (tab 0):** last acted on in T8 and T9. At the start of T10 it was clean: Save, Regenerate Form, Undo and Redo disabled; FX_Items heading; User footer `anton.ramos@3mworks.com.ph`; no dialog (`t10-snapshot-00`). It was not interacted with in T10 beyond the unintended read. The Designer console showed 4 errors at that read.
- Neither tab shows an open dialog or unsaved-change prompt.

## 9. Documentation changes (T11)

- Created: `evidence/EXP-058/T11-final-acceptance-matrix-and-action-audit.md` (this file).
- Updated: `experiments/EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md` (status line and a T11 section). No other experiment record, AGENTS.md, recipe, tutorial source, environment record or prior evidence was changed.
