# EXP-051 T4 — Two-row unsaved staging: New once, guitar draft entered and verified (AC-6 only; cycle 4)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 4, task T4. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b76c00`, task_message_id `557c58d7-4e1d-4c75-ad50-1bcbcf828bd3`. Date 2026-10-11.

Scope (bounded instruction): AC-6 only. Confirm the inherited dumbbell draft; one focus move to settle the combobox; one toolbar New; gate check; enter guitar; verify. No eggs, no second New, no Save, no query, no close or reopen, no Designer action, no cleanup.

## Outcome

**AC-6 PASS (observed, same session, UI level).** The guitar draft was entered through the native Web Client Form and verified in the grid and the inputs before any final submission:
- Row 1: `dumbbell` / `45 pound iron` / `45.00` / `EA`, starred (unsaved).
- Row 2 (current): `guitar` / `natural acoustic` / `129.99` / `EA`, starred (unsaved).
- Status count token `(Object 2 of 2)` (the caption prefix changed to `Description` after the final focus move; the token is unchanged).
- Save enabled. No alert, prompt, authentication challenge, or dialog. No Save, query, close, or reopen was invoked.

**Database persistence: NOT verified.** Both rows are unsaved UI state. Nothing in T4 reads the database.

## Preflight gate (before New)

- Web Client tab selected (see note on the first select attempt below). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_Items tab and tabpanel selected.
- Row 1 `dumbbell` / `45 pound iron` / `45.00` / `EA` (`f1e143`–`f1e150`), star visible in `t4-01`.
- Inputs: Item `dumbbell`; Description `45 pound iron`; Cost `45.00`; Unit of Measure combobox `EA`.
- Save enabled (`button "Save" [ref=f1e28]`, no `disabled`). Status `Unit of Measure (Object 1 of 1)`. No dialog.
- The Designer tab was not selected or touched. Its inherited scope dialog is unchanged.
- One ordinary focus move (click on Description, `f1e170`) settled the active combobox editor. Post-move: four dumbbell values intact, Save enabled, no dialog, status `Description (Object 1 of 1)`.

## Action: one toolbar New

- One click on `New` (`f1e31`, label verified). No retry.
- Immediately captured (snapshot, then `t4-02`) before typing:
  - Two grid rows: `gridcell "1"` (`f1e203`) and `gridcell "2"` (`f1e208`). Both starred in `t4-02`.
  - Row 1 `dumbbell` / `45 pound iron` / `45.00` / `EA` (unchanged).
  - Row 2 blank with `row "0.00"` (`f1e213`); the only pre-filled value is Cost `0.00` (the permitted add-mode default).
  - Inputs: Item (`f1e161`) empty and `[active]`; Description empty; Cost `0.00`; Unit of Measure empty.
  - Status `Item (Object 2 of 2)` (token `(Object 2 of 2)`, caption prefix `Item` expected).
  - Save enabled; no alert, prompt, or dialog. Tooltip `New`.
- Gate: all conditions met, so entry proceeded.

## Guitar entry (in order; each checked by find before the next)

| # | Field | Action | Observed |
| --- | --- | --- | --- |
| 1 | FX_Item (`f1e161`) | fill `guitar` | input `guitar` (`[active]`); status `Item (Object 2 of 2)` |
| 2 | FX_Description (`f1e170`) | fill `natural acoustic` | input `natural acoustic` (`[active]`) |
| 3 | FX_Cost (`f1e179`) | fill `129.99` (replaced `0.00`) | input `129.99` (`[active]`); grid row 2 now shows `guitar`, `natural acoustic`, `129.99` committed |
| 4 | FX_UM combobox (`f1e189` Open) | Open (one click) | list: `DZ | Dozen`, `EA | Each` (`f1e244`–`f1e249`) |
| 5 | EA / Each option (`f1e237`) | one click (native dropdown; no typing) | combobox `EA`; grid row 2 UM cell `EA` (`f1e241`); list closed on selection |
| 6 | Open toggle (`f1e189`) | one click | the list reopened (EA still selected; this toggle was not needed — see note) |
| 7 | Open toggle (`f1e189`) | one click | list closed; combobox `[active]` `EA` |
| 8 | FX_Description (`f1e170`) | one ordinary focus move (click, no typing) | Description `[active]` with text selected; status `Description (Object 2 of 2)` |

Note on steps 5–7: the EA click closed the list on selection (in T3 it had stayed open). My first toggle therefore reopened it; a second toggle closed it. The selected value stayed EA throughout. No Escape was used.

## Final verified state (after step 8; snapshot `t4-05` and accessibility)

Grid (accessibility, full text):
| Row | Star | Item | Description | Cost | Unit of Measure |
| --- | --- | --- | --- | --- | --- |
| 1 | yes (`t4-05`) | `dumbbell` (`f1e144`) | `45 pound iron` (`f1e146`) | `45.00` (`f1e148`) | `EA` (`f1e150`) |
| 2 (current) | yes (`t4-05`) | `guitar` (`f1e225`) | `natural acoustic` (`f1e227`) | `129.99` (`f1e229`) | `EA` (`f1e241`) |

Inputs (current draft = row 2): Item `guitar` (`f1e161`); Description `natural acoustic` (`f1e170`, `[active]`, text selected by the focus move); Cost `129.99` (`f1e179`); Unit of Measure `EA` (`f1e188`, not active).

Status: `Description (Object 2 of 2)` (`f1e195`). Count token `(Object 2 of 2)`.
Save: enabled (`button "Save" [ref=f1e28]`, no `disabled`). Dialogs: none.

All eight business values are retained: dumbbell / 45 pound iron / 45.00 / EA and guitar / natural acoustic / 129.99 / EA.

## Automatic-save, implicit-commit, and prompt audit

- No alert, prompt, confirmation, validation message, or authentication challenge appeared at any step.
- No Save was invoked. The Save button remained enabled throughout (not disabled, which would have indicated a commit).
- The grid rows changed as each field was committed, which is the native pending-row behaviour; the star remained on both rows (no row lost its star).
- Step 8 is an ordinary focus move between fields of the same row, not a navigation to another record.
- No row or count change beyond the intended second row.

## Evidence files (T4)

- `evidence/EXP-051/t4-01-baseline-pre-new-dumbbell-EA-unsaved.png`: before New. Shows the starred dumbbell row with `45 pound iron`, `45.00`, `EA`, identity bar, FX_Items tab, Save icon enabled, status `Unit of Measure (Object 1 of 1)`. Does not show the database; the grid's Description and Cost columns are clipped by the narrow grid in the image (full text from the accessibility snapshot).
- `evidence/EXP-051/t4-02-after-one-New-two-rows-before-guitar.png`: immediately after New, before typing. Shows two starred rows (row 1 dumbbell clipped, row 2 blank and current), inputs blank except Cost `0.00`, status `Item (Object 2 of 2)`, Save enabled, tooltip `New`, no dialog. Proves the gate state visually; row 1's values are from the accessibility tree.
- `evidence/EXP-051/t4-03-guitar-EA-selected-dropdown-state-check.png`: after the EA click and the first toggle. Shows the list reopened with EA highlighted, input `EA`, inputs `guitar` / `natural acoustic` / `129.99`, status `Unit of Measure (Object 2 of 2)`. This is the state the first toggle produced; it documents the reopen.
- `evidence/EXP-051/t4-04-guitar-draft-four-values-EA-dropdown-closed.png`: after the second toggle. Shows the four guitar values in one draft (`guitar`, `natural acoustic`, `129.99`, `EA`), dropdown closed, both rows starred (row 2 current), status `Unit of Measure (Object 2 of 2)`. Proves the four-value draft visually; does not prove database state.
- `evidence/EXP-051/t4-05-final-two-unsaved-rows-guitar-settled.png`: final T4 state after the Description focus move. Shows two starred rows, the four guitar values, Description text selected (focus), status `Description (Object 2 of 2)`, Save enabled, no dialog. Proves the final staged state visually; the grid's row 1 text is clipped and taken from the accessibility snapshot.
- `evidence/EXP-051/T4-guitar-draft-and-two-unsaved-rows-report.md`: this report.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console files (for example `page-2026-10-11T03-50-27-365Z.yml` after New, `page-2026-10-11T03-50-55-938Z.yml` after the toggle, `console-2026-10-11T03-50-12-681Z.log`).

## Operation counts (T4)

| Operation | Count |
| --- | --- |
| Toolbar New clicks | **1** |
| Toolbar Save clicks | **0** |
| Collection queries (Refresh, F4, FiP, Get More Rows) | 0 |
| Field fills (`browser_type`) | 3 (`guitar`, `natural acoustic`, `129.99`) |
| Native combobox option selections | 1 (EA, `f1e237`) |
| Typed text into the combobox | 0 |
| Escape presses | 0 |
| Combobox Open clicks | 3 (open; reopen by first toggle; close by second toggle) |
| Ordinary focus-move clicks into Description | 2 (`f1e170`, pre-New and post-guitar) |
| Total browser clicks (excluding tab selects) | 7 (focus, New, Open, EA, Open, Open, focus) |
| Tab selects | 2 calls (1 error; 1 success) |
| Tab list | 1 |
| Snapshots | 7 Web Client plus 1 Designer (read-only) |
| Screenshots (worker-requested PNG) | 5 (`t4-01` to `t4-05`) |
| Browser `find` calls | 4 (`guitar`, `natural acoustic`, `129.99`, `EA`) |
| Eggs entries | 0 |
| Second New | 0 |
| Close / reopen | 0 / 0 |
| Designer edits; Designer dialog touched | 0; 0 |
| Dialogs or prompts answered | 0 |
| Ref not found | 0 |
| Timeouts | 0 |
| Recovery snapshots after a ref failure | 0 |
| Tab-select error | 1 (`Tab 1 not found` on the first attempt; not a ref failure; a tab list and a second select succeeded; no action was taken on the failed attempt) |
| Portal banner dismissals | 0 (none visible) |
| JavaScript, evaluate, run-code, SQL, API | 0 |
| Authentication, session, or browser change | 0 |

## Limitations and uncertainties

1. **Persistence unverified.** Both rows are unsaved, starred UI state. No database read was made. The T2 BX Save's effect on the database is still unknown.
2. **Commit of each field.** The grid rows show each committed value, and the native pending-row state was maintained. The commit is evidenced by the grid cells in the accessibility tree; no Save was used to confirm it (Save is not authorized in T4).
3. **Star state** is read from the screenshots; the accessibility tree does not expose the star.
4. **Row 1 clipping** in the screenshots: row 1's Description and Cost cells are clipped in the narrow grid; the values come from the accessibility snapshot.
5. **Toggle and reopen.** The list reopened once after the EA selection (see note in the steps table); this was my action and did not change the value.

## Stop state

- Web Client tab current; FX_Items runtime open; two starred unsaved rows; Save enabled; no dialog or prompt.
- Description field is active with its text selected (from the focus move). No typing has been done after the selection.
- Designer tab untouched; its inherited scope dialog unchanged.
- Next permitted action (coordinator): eggs entry (AC-7) and the single successful Save (AC-8). Nothing further is authorized in T4.
