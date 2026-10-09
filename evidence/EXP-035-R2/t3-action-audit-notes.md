# EXP-035-R2 — T3 action audit: Filter By=Name, native clear, 25 native key operations, settled pre-Cancel capture

Run R-20261009-212412-Gcw7, cycle 3, task T3. worker_session_id 4adf1fa1-a207-43c1-8181-7b7a84722071. task_message_id 9cec1dc2-50f6-4334-8e32-dd6feffff8b8.
Starting state: T2 left Select Form OPEN at its inherited state (textbox empty; Filter By Caption; both checkboxes unchecked; 43 rows). No Cancel, reopen or Open was performed in T3.

## §A Fresh untargeted snapshot (start; current refs)

Planned start check, not recovery. Dialog `dialog "Select Form" [ref=f1e77]` OPEN; textbox `[active] [ref=f1e400]` EMPTY; Filter By `combobox [ref=f1e406]: Caption`; Case Sensitive `checkbox [ref=f1e410]` no checked marker; Starts With `checkbox [ref=f1e415]` no checked marker; Filter By trigger `[ref=f1e407]`; Cancel `[ref=f1e421]`; one browser tab. No T2 reference was reused.

## §B Filter By change (rendered control; read back)

| Step | Tool call | Ref | Outcome |
|---|---|---|---|
| B1 | `browser_click` Filter By trigger | `f1e407` (current, §A) | Success. Listbox opened. |
| B2 | `browser_find` `option "Name"` (planned current-ref read) | — | One match: `option "Name" [ref=f1e427]` inside `combobox [expanded] [active] [ref=f1e406]`. |
| B3 | `browser_click` option Name | `f1e427` (current, B2) | Success. |
| B4 | `browser_find` regex combobox/checkbox/textbox/gridcell (read-back) | — | `combobox [ref=f1e406]: Name`; Case Sensitive and Starts With present with no checked marker; textbox no longer `[active]` (focus had moved to the combobox). |

Checkbox toggles: **0**. Case Sensitive and Starts With were verified unchecked from their controls and not toggled.

## §C Textbox focus (current ref; verified)

| Step | Tool call | Ref | Outcome |
|---|---|---|---|
| C1 | `browser_click` Name-filter textbox | `f1e400` (current, §A; still the textbox ref in B4 read) | Success. No timeout, no retry. |
| C2 | `browser_find` `textbox [active]` | — | One match: `textbox [active] [ref=f1e400]` inside `dialog "Select Form" [ref=f1e77]`, empty. |

## §D Native clear (press_key only)

| # | Tool call | Key argument | Outcome |
|---|---|---|---|
| D1 | `browser_press_key` | `Control+a` | Success (`page.keyboard.press('Control+a')`). |
| D2 | `browser_press_key` | `Backspace` | Success (`page.keyboard.press('Backspace')`). |

No `browser_type`, fill, paste, clipboard, chord-as-text, or JavaScript was used. Post-clear state was NOT separately checked before typing (the textbox was already empty, so the clear's effect cannot be attributed; see §G).

## §E Printable-key operations (exactly 25; one `browser_press_key` per character; each awaited)

Required sequence: `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`. Count check: 25 characters in `FX_ComponentRecoveryLab02`.

| Pos | Key argument | Outcome | Pos | Key argument | Outcome |
|---|---|---|---|---|---|
| 1 | `F` | Success | 14 | `e` | Success |
| 2 | `X` | Success | 15 | `c` | Success |
| 3 | `_` | Success | 16 | `o` | Success |
| 4 | `C` | Success | 17 | `v` | Success |
| 5 | `o` | Success | 18 | `e` | Success |
| 6 | `m` | Success | 19 | `r` | Success |
| 7 | `p` | Success | 20 | `y` | Success |
| 8 | `o` | Success | 21 | `L` | Success |
| 9 | `n` | Success | 22 | `a` | Success |
| 10 | `e` | Success | 23 | `b` | Success (lowercase) |
| 11 | `n` | Success | 24 | `0` | Success |
| 12 | `t` | Success | 25 | `2` | Success |
| 13 | `R` | Success | | | |

Results: **25 of 25 successful**, in the required order, one call per character, each awaited before the next. Zero errored calls. Zero retries. Zero duplicates. Zero skips. No Enter and no OK.

## §F Settle and settled capture (pre-Cancel)

- `browser_wait_for` 3 seconds (wait only; no page action).
- `browser_snapshot` saved: `evidence/EXP-035-R2/t3-02-settled-pre-cancel-snapshot.md`.
- `browser_take_screenshot` saved: `evidence/EXP-035-R2/t3-03-settled-pre-cancel-dialog-viewport.png`.

Settled accessibility observations (from the saved snapshot; dialog subtree lines 112–138):
- `textbox [active] [ref=f1e400]: FX_ComponentRecoveryLab02` (exact value from the accessibility line).
- `combobox [ref=f1e406]: Name`.
- `checkbox "Case Sensitive" [ref=f1e410]`: no checked marker (unchecked).
- `checkbox "Starts With" [ref=f1e415]`: no checked marker (unchecked).
- Grid body: ONE `table [ref=f1e731]` → ONE `rowgroup [ref=f1e732]` → ONE `row [ref=f1e733]` → `gridcell "FX_ComponentRecoveryLab02" [ref=f1e734]` (Caption) and `gridcell "FX_ComponentRecoveryLab02" [ref=f1e736]` (Name).
- OK `f1e419`, Cancel `f1e421`, Help `f1e423`: present, unpressed.

Positive-control condition: **MET** — exactly one rendered row whose Name equals `FX_ComponentRecoveryLab02` exactly.

Screenshot `t3-03-settled-pre-cancel-dialog-viewport.png` (viewed as image):
- SHOWS: the Select Form dialog over the Web Client; identity bar and DEM badge visible; one row `FX_ComponentRecoveryLab02` in both Caption and Name columns; Filter By `Name`; Case Sensitive and Starts With empty; OK/Cancel/Help unpressed.
- DOES NOT SHOW: the leading characters of the textbox (the field shows `…ComponentRecoveryLab02`; `FX_` is clipped). The exact textbox value comes from the accessibility line above, not the image.

## §G Limitations

1. **Clear-step attribution:** the textbox was already empty before D1/D2. The effect of Control+a and Backspace on the textbox content cannot be separately observed. The clear is evidenced only by the successful key results and the exact final value.
2. **Key-event attribution:** the 25 results are the tool's success returns. The worker did not observe individual key events; the settled exact textbox value corroborates order and count.
3. **Row count in the settled state** is the snapshot's single table; the grid's full result count is not independently established beyond this rendering.
4. Checkbox states are from accessibility markers and the image; neither was toggled.

## §H Recovery allowance (shared across all EXP-035-R2 tasks)

- Fresh untargeted recovery snapshot: **0 used / 1 remaining**.
- Corrected visible inspection: **0 used / 1 remaining**.
- No "Ref ... not found", no "visible, enabled and stable" timeout, no stale ref, and no ambiguous read occurred in T3. The §A snapshot, the B2/B4/C2 finds, and the §F captures were planned current-reference, read-back, focus and settled-result evidence, not recovery.

## §I Action counts (T3)

- Initial Open: 0 this task (1/1 total from T2). Tested Cancel: 0/1. Tested reopen: 0/1. Final ordinary Cancel: 0/1.
- Browser actions: clicks 3 (Filter By trigger, option Name, textbox focus); `browser_press_key` 27 (Control+a ×1, Backspace ×1, printable ×25); `browser_wait_for` 1; snapshots 2 (§A start, §F settled — the §A snapshot is a planned start check; §F is saved); finds 3 (B2, B4, C2); screenshots 1; saved-file reads 2 (repository reads, not browser).
- Filter By changes: 1 (Caption → Name). Checkbox toggles: 0. Textbox content changes by the worker: the clear and the 25 keys only.
- `browser_type`, fill, paste, clipboard, JavaScript/evaluate/run-code, Enter, OK, row click/activation, Form/component action, auth, navigation, tab closure, dialog dismissal, unload, preference change: **0**.

## §J Browser-tool artifacts (compliance limitation)

The Playwright MCP tool automatically wrote snapshot and console logs under `evidence/playwright/` (e.g. `evidence\playwright\page-2026-10-09T13-30-34-806Z.yml` and the `console-2026-10-09T13-30-34-806Z.log` entry that the tool reported). These are outside the permitted paths. The worker did not intentionally create or modify them and did not attempt cleanup. Disclosed as a compliance limitation per the T3 instruction.

## §K State at end of T3

Select Form OPEN, textbox `FX_ComponentRecoveryLab02` (active), Filter By `Name`, both checkboxes unchecked, one settled row `FX_ComponentRecoveryLab02`. No Cancel, no reopen, no Open, no OK, no Enter, no row interaction. The positive-control state is ready for the lifecycle task; no lifecycle action has been taken.
