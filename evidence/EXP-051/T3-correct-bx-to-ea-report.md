# EXP-051 T3 — Dismiss the BX alert; correct FX_UM to EA through the ComboBox (cycle 2)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 2, task T3. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b76c00`, task_message_id `0d073bae-979b-402e-9d6c-6e66ba96d6d2`. Date 2026-10-11.

Scope (bounded instruction): AC-5 only. Dismiss the alert once; correct FX_UM from BX to EA through the native dropdown; verify the four values; stop. No Save, no guitar or eggs, no close or reopen, no repeat of the empty-criteria query, no cleanup, no Designer action.

## Outcome

**AC-5 PASS (observed, same session, UI level).**
- The BX alert was dismissed once (OK). The same dumbbell draft was retained (FX_Item `dumbbell`, FX_Description `45 pound iron`, FX_Cost `45.00`; none changed).
- FX_UM was changed to **EA** by opening the native dropdown and clicking the existing `EA | Each` option. No typing was used.
- The grid's Unit of Measure cell for the dumbbell row reads `EA` (accessibility `gridcell "EA"`), so the selection reached the row, not only the editor.
- The dropdown was closed with its own Open toggle (not Escape). The combobox shows `EA`.
- Save remained enabled. Status `Unit of Measure (Object 1 of 1)`. One starred placeholder row. No dialog, prompt, banner, or authentication challenge appeared.
- No Save was invoked. No automatic commit was observed as a separate event. Whether the grid cell's `EA` reflects a commit (versus the grid mirroring the active editor) is not separately established: no focus move or Save was used to confirm it, because the brief forbids Save and navigation.

## Pre-action check (fresh snapshot, Web Client tab selected)

- Alert still present with text exactly `BX is not a valid Unit of Measure`; `OK` button `f1e204`.
- Draft present: `dumbbell`, `45 pound iron`, `45.00`, `BX`. Save enabled. Status `Unit of Measure (Object 1 of 1)`.
- Screenshot `t3-01` taken before dismissal.
- The Designer tab was not selected, read, or touched in T3 (the first `browser_find` ran while the Designer was the current tab and found nothing; that was a read-only find, and the tab was then switched back to the Web Client).

## Actions (in order)

| # | Action | Result |
| --- | --- | --- |
| 1 | tabs list (read) | Designer current; Web Client tab 1 present |
| 2 | find `BX is not a valid Unit of Measure` (on the Designer tab, read) | no matches (wrong tab; no action taken) |
| 3 | select tab 1 (Web Client) | Web Client current |
| 4 | snapshot (fresh) | alert present; draft intact; Save enabled |
| 5 | screenshot `t3-01` (pre-dismissal) | alert, dimmed Form, draft, starred row |
| 6 | click OK (`f1e204`, once) | alert gone |
| 7 | snapshot | draft intact; combobox `[active]` with BX; Save enabled |
| 8 | click combobox Open (`f1e189`) | dropdown open with rows DZ / Dozen and EA / Each |
| 9 | snapshot and find `EA` (read) | listbox options confirmed (`f1e213` = EA) |
| 10 | click option EA (`f1e213`) | combobox EA; grid cell EA; dropdown still visibly open |
| 11 | snapshot; screenshot `t3-02` (dropdown open, EA highlighted) | evidence |
| 12 | click combobox Open (`f1e189`) to close (toggle; not Escape) | dropdown closed |
| 13 | snapshot; screenshot `t3-03` (after close) | final T3 state |

## Counts

| Operation | Count |
| --- | --- |
| Alert dismissals (OK) | **1** |
| Second invalid-code Save | 0 |
| Explicit toolbar Save clicks | **0** (T2's one Save is not repeated) |
| Combobox Open clicks | 2 (open; close toggle) |
| Option selections | 1 (EA, `f1e213`) |
| Typed text | 0 |
| Escape presses | 0 |
| Guitar / eggs entries | 0 |
| New / Delete / Refresh / FiP / F4 | 0 / 0 / 0 / 0 |
| Close / reopen of FX_Items | 0 / 0 |
| Empty-criteria query repeated | 0 |
| Designer edits; Designer dialogs answered | 0; 0 |
| Snapshots (Web Client) | 5 (steps 4, 7, 9 excluding find, 11, 13) |
| Browser finds | 2 (step 2 on Designer; step 9 `EA`) |
| Screenshots (worker-requested PNG) | 3 (`t3-01`, `t3-02`, `t3-03`) |
| Ref not found / timeouts / recovery snapshots | 0 / 0 / 0 |
| Portal banner dismissals | 0 (none visible) |
| JavaScript, evaluate, run-code, SQL, API | 0 |
| Authentication, session, or browser change | 0 |

## Evidence files (T3)

- `evidence/EXP-051/t3-01-pre-dismiss-alert-still-open-draft-retained.png`: before dismissal. Proves the alert text and the draft (`dumbbell`, `45 pound iron`, `45.00`, `BX`) in the same Form, starred row, enabled Save. Does not prove the database state.
- `evidence/EXP-051/t3-02-EA-selected-via-combobox-draft-state.png`: after the EA click, dropdown still open. Proves the EA option is highlighted and the combobox displays `EA`, with the three other values visible. Does not prove the dropdown was closed or that the commit is separate from the display.
- `evidence/EXP-051/t3-03-after-dropdown-closed-EA-committed-four-values.png`: final T3 state. Proves all four values in the one draft (`dumbbell`, `45 pound iron`, `45.00`, `EA`), the starred row, the status `Unit of Measure (Object 1 of 1)`, the dropdown closed, and the alert gone. Does not prove the Save state (the toolbar icon is small) or a database commit. The grid's Unit of Measure cell is clipped in the image; `gridcell "EA"` is evidenced in the accessibility tree only.
- `evidence/EXP-051/t3-accessibility-excerpts.md`: the refs and text for steps 4 to 13.
- `evidence/EXP-051/T3-correct-bx-to-ea-report.md`: this report.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console files written by the browser tool (for example `page-2026-10-11T03-46-35-824Z.yml`, `page-2026-10-11T03-46-51-898Z.yml`).

## Limitations and uncertainties

1. The commit of EA to the draft is evidenced by the grid cell's `EA` in the accessibility tree and by the status and Save state. No focus move or Save was used to confirm a commit, so whether the value is committed to the record or only mirrored in the active editor is not established. A Save would establish it, but Save is not authorized in T3.
2. The Save toolbar state after the EA change is taken from the snapshot (`button "Save"` without `disabled`); the image is too small to confirm the icon.
3. No database read. Whether the T2 Save wrote a row is unknown (see T2 report). Nothing in T3 can answer it.
4. Same-session UI evidence only. No claim of database durability or replay.

## Stop state

- The Web Client tab is the current tab, with the FX_Items runtime open and clean of dialogs. Save is enabled (dirty draft, not saved). The combobox editor is still `[active]`.
- Designer tab: not touched. Its inherited `Identify Your Editing Scope` dialog remains open (unchanged since T1).
- Next permitted action: coordinator authorization for guitar and eggs entry and one successful Save. The unsaved dumbbell draft must not be closed, reopened, or discarded before that.
