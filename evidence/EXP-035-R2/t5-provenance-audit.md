# EXP-035-R2 — T5 notes: repository-only provenance audit of the interrupted T3

Run R-20261009-212412-Gcw7, experiment EXP-035-R2, cycle 7, task T5.
worker_session_id: 69ed601b-bbc3-4abd-8c53-6a6415410f36. task_message_id: 28f89943-a410-4034-90a6-e5f4650499ff.

Browser calls in T5: **0**. No click, focus, key, type, find, snapshot, screenshot, Cancel, reopen, Open, OK, Enter, row interaction, JavaScript or navigation. The dialog was left open, unchanged, by T4.

## §A Raw interrupted-T3 transcript: NOT accessed

The brief asks for the raw T3 worker/tool transcript under `tools/claude-harness/claude-data/runs/R-20261009-212412-Gcw7/`. The standing worker boundaries state that `tools/` (including `briefs/`) is intentionally unreadable and must not be read. The brief's "if accessible through ordinary permitted read operations" does not override that boundary, so no read or search under `tools/` was attempted in T5.

Consequence: call-level evidence for `browser_press_key` invocations, their results, retries, and any Cancel/reopen/Enter/OK/row call during or after T3 is **unavailable to this worker**. Everything below is drawn from the T3 self-report, from tool-generated artifacts under `evidence/playwright/` (outside permitted paths; not authored by the worker), and from the saved T3/T4 captures.

## §B Sources inspected (repository reads only)

- `evidence/EXP-035-R2/t3-action-audit-notes.md` (T3 self-report, §A–§K).
- `evidence/EXP-035-R2/t3-02-settled-pre-cancel-snapshot.md` (saved T3 accessibility capture).
- `evidence/EXP-035-R2/t3-03-settled-pre-cancel-dialog-viewport.png` (viewed in T4).
- `evidence/EXP-035-R2/t4-01-current-state-snapshot.md` and `t4-02-current-state-viewport.png` (T4 read-only captures).
- `evidence/EXP-035-R2/t4-reconciliation-notes.md` (T4 reconciliation).
- `evidence/playwright/` tool artifacts with timestamps 2026-10-09T13-28 to 13-36 (listing; relevant files read in T4):
  - `console-…13-28-14…` and `console-…13-30-34…` (startup logs only; no action entries).
  - `page-…13-28-23-941Z.yml` (T2 post-Open: dialog open; Filter By `Caption`; textbox active and empty).
  - `page-…13-30-38-403Z.yml` (Filter By combobox expanded; option `Name` listed).
  - `page-…13-30-41-380Z.yml` (Filter By `Name` selected; textbox not active; empty).
  - `page-…13-30-45-403Z.yml` (textbox `[active]`, empty; Filter By `Name`).
  - `page-…13-31-18-429Z.yml` (settled: textbox `FX_ComponentRecoveryLab02`; one row; both checkboxes unchecked).
  - `console-…13-36-38-105Z.log` (T4; written after the T4 snapshot).
- Glob of `evidence/playwright/*2026-10-09T13-*`: the complete set of T3-window files. No artifact exists between `13-31-18` and `13-36-38`.

No artifact logs key presses. The Playwright tool wrote files after the three T3 clicks and the settled snapshot. It wrote none after the `browser_press_key` calls or the screenshot.

## §C Operation-by-operation evidence matrix

Source classes: **[TX]** raw tool-call record (unavailable); **[ART]** tool-generated page/console artifact with a timestamp; **[SELF]** T3 self-report only; **[CAP]** worker-saved capture; **[NOW]** current UI state (T4).

| # | Operation (T3) | Source(s) | Status |
|---|---|---|---|
| 1 | Filter By trigger click | [ART] `13-30-38` (listbox expanded); [SELF] | Corroborated at state level; call-level [TX] unavailable |
| 2 | Option `Name` click | [ART] `13-30-41` (`Name` selected, combobox active); [SELF] | Corroborated at state level; call-level [TX] unavailable |
| 3 | Textbox focus click | [ART] `13-30-45` (textbox `[active]`, empty); [SELF] `find` | Corroborated at state level; call-level [TX] unavailable |
| 4 | Read-back finds (B2, B4, C2) | [SELF] only (finds write no artifact) | Self-reported; no independent record |
| 5 | `browser_press_key` `Control+a` | [SELF]; no [ART]; [TX] unavailable | **Unresolved** (no independent record of the call or its result) |
| 6 | `browser_press_key` `Backspace` | [SELF]; no [ART]; [TX] unavailable | **Unresolved** (same) |
| 7 | 25 × `browser_press_key` single printable characters, order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` | [SELF] (25 rows, all "Success", table in `t3-action-audit-notes.md` §E); [CAP] final text `FX_ComponentRecoveryLab02` at `13-31-18`, in `t3-02`, and in `t4-01`; [TX] unavailable | **Unresolved at call level.** The T3 self-report lists the exact target in exact order, and the final text is exact. Neither proves the call count, the per-call success, or the input method. |
| 8 | Input method: no `browser_type`, fill, paste or chord-as-text | [SELF]; [CAP] no literal `Control+A` residue in the final text (the EXP-034 failure mode left that residue) | Supported by the absence of the known residue; not proven at call level |
| 9 | Any key call failed, retried, duplicated or omitted | [SELF] reports none; [CAP] final text exact | Self-reported zero. The exact final text rules out a net extra or missing character, but cannot rule out an errored call with no effect that was counted as success, or a call pattern that matches the same final text by a different route. **Unresolved** at call level. |
| 10 | Enter / OK / row interaction during T3 | [SELF] 0; [ART] none after `13-31-18`; [NOW] dialog still open with the settled state | Not contradicted. OK or Enter that dismissed the dialog would have left it closed. A Cancel and reopen would have left a similar state, so it is not excluded by [NOW] alone. |
| 11 | Cancel during T3 | [SELF] 0; no [ART] after `13-31-18`. The three prior clicks each produced an artifact, so a Cancel click would be expected to produce one too (inference, not proof) | **Not proven absent.** No evidence shows it occurred. |
| 12 | Reopen during T3 | [SELF] 0; no [ART] after `13-31-18` (inference as for row 11) | **Not proven absent**; no evidence shows it occurred |
| 13 | Initial Open (T2 counter) | [ART] `13-28-23` (post-Open dialog); [SELF] T2 single click | Supported: one Open evidenced; no second Open artifact |
| 14 | Recovery allowance unused in T3 | [SELF]; no error artifact | Self-reported |

## §D Ordering and time window

- Click-level order is established by artifacts: trigger (13:30:38) → option (13:30:41) → textbox focus (13:30:45) → settled snapshot (13:31:18).
- Between 13:30:45 and 13:31:18 the self-report places `Control+a`, `Backspace`, and the 25 key calls, then a 3-second wait. The self-report alone places the key calls in that window; no timestamp distinguishes them.
- The order of `Control+a` relative to `Backspace` and to the first printable key is **not** established by any independent record.
- Window 13:31:18 → 13:36:38: no artifact. The T3 self-report lists one screenshot in this window, which writes no page artifact. The interruption at 13:34:26 falls in this window. No artifact shows a Cancel, reopen, or other action.
- Full action order at call level: **cannot be established** from the available evidence.

## §E Counter status (from evidence)

| Counter | Evidence | Status |
|---|---|---|
| Initial Open | [ART] 13-28-23 + [SELF] T2 | 1/1 supported |
| Tested Cancel (pre-lifecycle) | [SELF] 0; no artifact | Not proven absent |
| Tested reopen (pre-lifecycle) | [SELF] 0; no artifact | Not proven absent |
| Final Cancel | not performed | 0/1 |
| Key calls (printable) | [SELF] 25 | Unresolved at call level |
| Control+a / Backspace | [SELF] 1 each | Unresolved at call level |

## §F AC-2 and pre-lifecycle counter integrity

- **AC-2, exact operation requirement** (exact single-character `browser_press_key` sequence, control keys via `browser_press_key`, no substitute input, settled single exact row before lifecycle): **UNRESOLVED.** The rendered end state is exact and the row is established ([ART] 13-31-18, [CAP], [NOW]). The call-level requirement cannot be verified: the raw transcript is out of bounds, and no independent record of the 27 key calls exists. This is not **FAILED**, since no evidence shows a deviation. It is not **PROVEN**, since the requirement is about calls, not the final text.
- **Pre-lifecycle counter integrity** (one Open; zero tested Cancel/reopen before the settled capture; no extra lifecycle): **UNRESOLVED.** The Open is supported. The absence of Cancel and reopen after the settled capture is not proven, although no evidence shows either.
- **Checkbox states**: observed unchecked in [ART] 13-30-41, 13-30-45, 13-31-18, [CAP] and [NOW]. "Never toggled" is [SELF] only, and no click on a checkbox appears in the artifact sequence, which is consistent with the self-report.

## §G Limitations

1. The raw transcript is out of bounds for this worker. A coordinator or operator with access to the run data would need to supply call-level records for rows 5–12.
2. The tool artifacts record page state after some actions, not every action. Key presses and finds write no artifact, so the artifacts cannot settle the key-call count.
3. The final text cannot distinguish 25 printable calls from other ways of producing the same text. The self-report is the only record of the method.
4. Artifacts under `evidence/playwright/` are outside permitted paths and were written by the tool, not by the worker (disclosed in T3 §J and T4).
5. The "no action after 13:31:18" finding rests on the absence of artifacts, and the inference that a Cancel click would produce one is not verified.

## §H Next permissible action

No browser action is permitted in T5, and none is taken. The coordinator must decide one of:
- (a) Supply the raw T3 call records through a route the worker is permitted to use, so rows 5–12 can be checked at call level. The worker must not read `tools/` on its own initiative.
- (b) Accept the T3 state on the basis of the self-report plus the artifacts above, with the call-level gaps recorded, and separately authorize the tested Cancel/reopen dispatch.
- (c) Treat AC-2's exact-operation requirement as not closed for this run, and decide whether a fresh replay in a new cycle is wanted, with per-call logging.

The tested lifecycle is not started by this audit and needs its own authorization.

## §I Files written in T5

- `evidence/EXP-035-R2/t5-provenance-audit.md` (this file; created by the worker)
- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (updated: T5 section, action-log row, status)
- No browser, `tools/`, or other repository path was read or written.
