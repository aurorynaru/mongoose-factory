# EXP-051 T2 — Dumbbell draft with invalid unit BX; one toolbar Save (cycle 1)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 1, task T2. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b76c00`, task_message_id `3601117c-5cd1-4d55-88c4-5ef4a06c7dd5`. Date 2026-10-11.

## Outcome

**Native validation rejection observed.** One toolbar Save with the draft `dumbbell / 45 pound iron / 45.00 / BX` produced a native alert `BX is not a valid Unit of Measure`. The alert is still open (not dismissed, per the brief). The Save toolbar button is still enabled, the placeholder row is still starred, and the grid shows one row. This supports AC-4 (rejection). It is same-session UI evidence; it is not a database read.

**Possible persisted row: not established as absent or present.** The rejection text and the enabled Save button indicate the save did not complete. Nothing in the UI shows a second row or a committed state, but no database read has been made. Cleanup status: no row is confirmed persisted. If a row exists in the database, it would need separately authorized cleanup; none was performed.

**Stopped.** No correction to EA, no guitar or eggs entry, no second Save, no close, no reopen, no cleanup. The alert is in-page and open. The Designer tab was not acted on.

## Baseline check (before entry)

- Web Client (tab 1) selected; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_Items tab and tabpanel selected.
- One placeholder row (`gridcell "1"`), star visible in `t2-01`; Item, Description, Unit of Measure blank; Cost `0.00` (default); Save disabled; status `Unit of Measure (Object 1 of 1)`; no dialog; no banner.
- Consistent with T1's settled state (`t1-02`, `t1-04`). The brief's T1 gate result was not repeated (the empty-criteria query was not rerun, as instructed).
- Existing persisted FX_Items rows visible: none (one placeholder only).

## Entry (draft, in order)

| # | Field | Action | Observed after action |
| --- | --- | --- | --- |
| 1 | FX_Item (`f1e159`) | fill `dumbbell` | input `dumbbell`; status `Item (Object 1 of 1)`; grid not yet updated |
| 2 | FX_Description (`f1e168`) | fill `45 pound iron` | input `45 pound iron`; status `Description (Object 1 of 1)` |
| 3 | FX_Cost (`f1e177`) | fill `45.00` (replaced `0.00`) | input `45.00`; grid row shows `dumbbell`, `45 pound iron`, `45.00` committed; status `Cost (Object 1 of 1)` |
| 4 | FX_UM (`f1e186`, combobox) | fill `BX` | combobox input `BX` accepted as typed text; status `Unit of Measure (Object 1 of 1)`; grid Unit of Measure cell still empty (not committed); Save enabled |

- The combobox accepted `BX` as entered text (it was not refused at entry). The Unit of Measure cell was not committed to the grid before Save, so the row's UM value is not in the grid before Save.
- Pre-Save draft confirmed in `t2-02`: all four values visible in the same Form (Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, Unit of Measure `BX`).

## The one Save

- One click on the toolbar `Save` (`f1e28`, label verified `Save`). No retry.
- Immediate result (snapshot and `t2-03`):
  - Native alert `alertdialog "Infor Mongoose Application Development Framework - FX_Items"`, message **`BX is not a valid Unit of Measure`**, button `OK` (focused). Shown in `t2-03` (text readable).
  - Save remained enabled in the accessibility tree (`button "Save" [ref=f1e28] [cursor=pointer]`, no `disabled`).
  - Grid: one row (`gridcell "1"`) with `dumbbell`, `45 pound iron`, `45.00`, `BX` in the row cells; star visible on row 1 in `t2-03`.
  - Inputs unchanged: `dumbbell`, `45 pound iron`, `45.00`, `BX`.
  - Status `Unit of Measure (Object 1 of 1)`.
- Alert NOT dismissed. Left open for coordinator review (per T2 instruction).

## Interpretation (what the evidence does and does not support)

- Supported: a native message names BX as invalid; the Form still holds the draft; Save is still enabled; the row is still in the add-mode placeholder state (starred). These together support a rejection or a non-completed save.
- Not established: whether the rejection came from the domain validator (the message text suggests so) or from another check; the database state; whether an implicit commit occurred during Save; whether the row is persisted. The message is the native text, but the mechanism is not proven.
- The brief's expected message text was not assumed: the text above is the captured native text.

## Counts (T2)

| Operation | Count |
| --- | --- |
| Toolbar Save clicks | **1** |
| Save retries | 0 |
| BX entries | 1 (invalid, once) |
| Correction of BX to EA | 0 |
| Guitar / eggs entries | 0 |
| Dialogs dismissed or answered | 0 (native alert left open) |
| Close / reopen of FX_Items | 0 / 0 |
| New / Delete / Refresh / FiP / F4 | 0 / 0 / 0 / 0 |
| Designer edits; Designer actions | 0; 0 (Designer snapshot read only) |
| Field fills (`browser_type`) | 4 (FX_Item, FX_Description, FX_Cost, FX_UM) |
| Tab-selects | 1 (tab 1) |
| Tab list calls | 1 |
| Browser snapshots | 5 (Designer read-only 1; Web Client baseline 1; after Item 1; before Save 1; after Save 1) |
| Browser find calls | 2 (confirm Description and Cost text) |
| Screenshots (worker-requested PNG) | 3 (`t2-01`, `t2-02`, `t2-03`) |
| Ref not found / timeouts | 0 / 0 |
| Recovery snapshots | 0 |
| Portal banner dismissals | 0 (none visible) |
| JavaScript, evaluate, run-code, SQL, API | 0 |
| Authentication or session change | 0 |

Note: the first snapshot in T2 returned the Designer tab, which was the selected tab at that time. It was read only, and the Designer's in-page scope dialog (`Identify Your Editing Scope`) was not touched.

## Evidence files (T2)

- `evidence/EXP-051/t2-01-baseline-before-entry-placeholder.png`: baseline before entry. Proves identity bar, FX_Items tab, one starred placeholder row, Item and Description blank, Cost `0.00`, Unit of Measure blank, status `Unit of Measure (Object 1 of 1)`, Save disabled. Does not prove database content.
- `evidence/EXP-051/t2-02-invalid-draft-dumbbell-BX-before-save.png`: the pre-Save draft. Proves all four values together in the same Form (`dumbbell`, `45 pound iron`, `45.00`, `BX`), starred row 1, enabled Save, status `Unit of Measure (Object 1 of 1)`. Does not prove the grid row's Unit of Measure value (the grid is clipped in this image) and does not prove a commit.
- `evidence/EXP-051/t2-03-after-one-save-with-BX-result.png`: the native rejection. Proves the alert text `BX is not a valid Unit of Measure` with OK, the dimmed Form behind it, starred row 1, Form values unchanged, and the Save icon dimmed by the modal overlay. Does not prove the database state, or that Save was disabled (the accessibility tree shows it enabled).
- `evidence/EXP-051/t2-accessibility-excerpts.md`: accessibility excerpts for the baseline, pre-Save draft, and post-Save alert (refs and text).
- `evidence/EXP-051/T2-invalid-bx-save-report.md`: this report.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot files (for example `page-2026-10-11T03-44-28-568Z.yml`, the post-Save snapshot) and console logs written by the browser tool.

## Acceptance checks (T2 scope)

| AC | T2 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-1 | PASS (re-observed) | `t2-01`; baseline snapshot | Designer not re-read |
| AC-2 | Carried from T1 (not repeated, per instruction) | T1 `t1-02`; baseline consistent in `t2-01` | — |
| AC-3 | Carried from T1 (not repeated) | T1 `t1-03`, `t1-04` | Column headings not exposed |
| AC-4 | **PASS for the rejection evidence (native message and state)**. The draft was verified visually in `t2-02` before the one Save. | `t2-02`, `t2-03`, accessibility excerpts B and C | Same-session UI; the rejection mechanism and database state are not established |
| AC-5 to AC-12 | Not performed (T2 stop) | — | — |

## Uncertainties

1. The BX value was accepted as typed text in the combobox and not committed to the grid before Save. The grid's Unit of Measure cell was empty in the pre-Save snapshot. Whether a commit occurred during the Save click is not established.
2. The alert text is native; the source of the check (domain vs other) is not established.
3. A possible persisted row: none is observed in the UI, but no database or re-query read has been made. Not established as absent.
4. The alert is still open; the Form is in a pending, rejected-save state. The next step (dismissal, correction, or further action) needs coordinator authorization.

## Next permitted action

Coordinator decision: dismissal of the alert and the correction of BX to EA (AC-5), which the brief permits only after a proven rejection, plus the guitar and eggs entries and the one successful Save. T2 does not authorize these.
