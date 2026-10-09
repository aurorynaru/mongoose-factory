# EXP-035 — T5 notes: single tested ordinary Cancel, single tested reopen, post-reopen observation (NO final Cancel)

Run R-20261009-204056-HY76, cycle 5, task T5. worker_session_id d2542b8f-3084-40fb-9b36-4ac05475c28b; task_message_id 437e308a-268b-4707-959b-88d35b094b9e.

## §A Pre-Cancel verification (fresh untargeted snapshot, no control touched)

Snapshot taken at T5 start (no earlier refs used). Dialog `dialog "Select Form" [ref=f1e77]` OPEN. Current refs had shifted from T4 (the table/row are now `f1e94`/`f1e96`; textbox `f1e106`; Filter By combobox `f1e112`; checkboxes `f1e116`/`f1e121`; Cancel `f1e127`; OK `f1e125`).
- textbox: `FX_ComponentRecoveryLab02` (exact accessibility value). Focus marker `[active]` present from T4 state; not changed by T5.
- Filter By: `combobox [ref=f1e112]: Name`.
- Case Sensitive `f1e116`: no checked marker (unchecked). Starts With `f1e121`: no checked marker (unchecked).
- Grid: one table `f1e94` → one rowgroup `f1e95` → one row `f1e96` → gridcells `FX_ComponentRecoveryLab02` (`f1e97`) and `FX_ComponentRecoveryLab02` (`f1e99`).
- No sign-in, configuration, unexpected dialog, or session change.
- Result: positive state INTACT → proceed to the tested Cancel.

## §B Tested Cancel (exactly ONE)

1. `browser_click` on `Cancel` in Select Form, ref `f1e127` (current ref from the §A snapshot). Playwright path: `iframe[...].contentFrame().getByRole('button', {name:'Cancel'}).click()`. Returned without error. Not retried.
2. Closure check (read-only `browser_find "Select Form"`): **No matches found.**
3. Fresh untargeted snapshot saved to `evidence/EXP-035/t5-02-post-cancel-closure-snapshot.md`. Read via grep: no `dialog "Select Form"` node; identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` present; Explorer tree present; toolbar `Open` enabled (`[active] f1e23`); Save disabled; single tab `Mongoose` selected.
- Cancel result: dialog closed on the first attempt; Web Client usable. No OK/Enter, no dialog X, no toolbar Close, no Escape were used.

## §C Tested reopen (exactly ONE)

1. `browser_click` on the ordinary toolbar `Open`, ref `f1e23` (from the §B closure snapshot). Playwright path: `getByLabel('Open')` in the Web Client iframe. Returned without error. Not retried.
2. Postcondition (read-only `browser_find "Select Form"`): ONE match — `dialog "Select Form" [ref=f1e77]` displayed in the Web Client iframe.
- No retry of Open. No second Open. No authentication, navigation, new tab, or setting change.

## §D Settle and post-reopen observation (no typing, no clicks on the dialog, no settings change)

- `browser_wait_for` 3 s (wait only).
- Untargeted snapshot saved: `evidence/EXP-035/t5-03-post-reopen-settled-snapshot.md`. Read via a line read of the dialog subtree.
- Screenshot saved: `evidence/EXP-035/t5-04-post-reopen-viewport.png` (inspected; see §F).

Observed post-reopen values (accessibility):
- textbox `[active] [ref=f1e106]`: `FX_ComponentRecoveryLab02` — complete accessible value, exact.
- Filter By `combobox [ref=f1e112]`: `Name`.
- Case Sensitive `checkbox [ref=f1e116]`: no checked marker → unchecked.
- Starts With `checkbox [ref=f1e121]`: no checked marker → unchecked.
- Grid: one table `f1e94` → one rowgroup `f1e95` → one row `f1e96` → gridcells `FX_ComponentRecoveryLab02` (`f1e97`) and `FX_ComponentRecoveryLab02` (`f1e99`). Rendered row count = 1 (observed in the settled snapshot).
- OK `f1e125`, Cancel `f1e127`, Help `f1e129`: present, unpressed.

## §E Comparison with the T4 pre-Cancel positive control (observed, per property)

| Property | T4 pre-Cancel (observed) | T5 post-reopen (observed) | Result |
|---|---|---|---|
| Textbox contents | `FX_ComponentRecoveryLab02` | `FX_ComponentRecoveryLab02` | retained (as observed in the accessibility value) |
| Filter By | `Name` | `Name` | retained |
| Case Sensitive | unchecked | unchecked | retained |
| Starts With | unchecked | unchecked | retained |
| Rendered rows | 1 row, both cells `FX_ComponentRecoveryLab02` | 1 row, both cells `FX_ComponentRecoveryLab02` | retained (row count and cell text match) |

- Every property matched the pre-Cancel value. Nothing was reset or partly retained, based on the observed rendered and accessibility state.
- Limitation: the Case Sensitive and Starts With states are read from the absence of a checked marker in the accessibility tree and from the screenshot. Neither control was toggled. The screenshot shows both boxes empty.
- The textbox was not clicked, typed in, or edited. The accessibility tree marks it `[active]`, and the screenshot shows its text highlighted as selected. This highlight appeared on reopen with no action by the worker. It is recorded as a rendered observation; no inference is drawn about why it appears.
- Interpretation is limited to the rendered UI state across this single Cancel/reopen boundary. No inference about database, cache, persistence, serialization, server refresh, or internal UI mechanism is drawn.

## §F Decisive evidence inspected

- `t4-03-pre-cancel-settled-viewport.png` (T4, prior task; pre-Cancel reference): one row `FX_ComponentRecoveryLab02` in both columns; Filter field scrolled to show `…ComponentRecoveryLab02` (leading characters cut off); Filter By `Name`; checkboxes empty.
- `t5-04-post-reopen-viewport.png` (T5, inspected): dialog reopened over the Web Client (identity bar and DEM badge visible); exactly one row `FX_ComponentRecoveryLab02` in both columns; Filter field shows `…ComponentRecoveryLab02` with its text highlighted as selected (the field's focus/selection state, not a typed change); Filter By `Name`; Case Sensitive and Starts With empty; OK/Cancel/Help unpressed.
  - PROVES: the reopened dialog displays the same visible row, Filter By, and checkbox boxes as the pre-Cancel capture; scope intact.
  - DOES NOT PROVE: the leading characters of the textbox (cut off by the field width; the exact value comes from the accessibility line); that the row count is the whole result set beyond what is rendered; anything about a database, cache, or refresh mechanism.
- `t5-03-post-reopen-settled-snapshot.md` is the authoritative source for the exact textbox value, Filter By, checkbox states, and row count.

## §G Recovery allowance

- Used **0** / remaining **1** (shared fresh untargeted snapshot + one corrected visible inspection, across all EXP-035 tasks). No stale-ref error, no timeout, no ambiguous read in T5. Planned snapshots (§A, §B closure, §D settle) and the screenshot were evidence captures, not recovery, and are not relabelled as recovery.

## §H Cumulative counts (experiment-wide, through T5)

- Initial Open: **1** (T2). Tested Cancel: **1** (T5 §B). Tested reopen: **1** (T5 §C). Final ordinary Cancel: **0** (not performed; reserved, not used in T5).
- Printable key operations: **25** (T4; all success). Ctrl+a: 1, Backspace: 1 (T3).
- Filter By changes: 1 (T3, Caption → Name). Checkbox toggles: 0 across the run. Textbox clicks: 1 (T3 focus).
- Enter/OK: 0. Row click/activation: 0. `browser_type`/fill/paste/bulk: 0. JavaScript/evaluate/run-code: 0. Authentication/navigation/tab closure/session replacement: 0.
- In T5 itself: Cancel 1, Open 1, dialog-control interactions 0, printable keys 0, Enter/OK 0, row interaction 0.
- Recovery allowance: **0 used / 1 remaining**.

## §I End state

Select Form OPEN in its observed post-reopen state (textbox `FX_ComponentRecoveryLab02`, Filter By `Name`, both checkboxes unchecked, one row). No final Cancel performed; no further Open. The dialog is left open as the brief requires.
