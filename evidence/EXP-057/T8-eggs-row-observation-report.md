# EXP-057 T8 — optional eggs-row selection observation (AC-9 observation; no refresh; no data change)

Run `R-20261011-172309-X5Gt`, experiment EXP-057, cycle 7. Task header `task=T8`; bounded instruction **eggs-row observation**. The bounded instruction was followed.
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `3b815f6d-e6c2-4de2-8300-c9a1471899ff`.
Date: 2026-10-11. Browser tab 1 (runtime) only. Tab 0 (Designer) not interacted with.

**Outcome: AC-9 observation recorded.** One native row-selection click on the eggs row made eggs the current row (`Object 2 of 3`). Its Description is `cage free`. The unnamed value box right of FX_Refresh **stayed `45 pound iron`** (dumbbell's value; not the selected row's Description, and not cleared, not an error). The three original records are unchanged and runtime Save is disabled. No refresh, no prompt, no dialog.

**Interpretation limit (per instruction):** this row observation does not show whether the preceding FX_Refresh re-evaluated `P(FX_Description)`, and it is not a pass/fail condition. The value box is inferred to be FX_VarTestEdit by position and the Designer definition only (no runtime name-level identification). The observation is that the box did not follow the row. Why is not established here (one possibility is that the value is only written on refresh, but that is untested).

## 1. Actions (in order)

| # | Action | Target | Result |
| --- | --- | --- | --- |
| 1 | `browser_tabs list` | all tabs | Tab 0 Designer; tab 1 runtime |
| 2 | `browser_tabs select 1` | runtime | Succeeded |
| 3 | Fresh snapshot `t8-snapshot-00` and screenshot `t8-01` (pre-selection) | runtime | dumbbell current (`Object 1 of 3`); Description `45 pound iron`; value box `45 pound iron`; Save disabled; no dialog |
| 4 | **Single native row-selection click on the eggs row Item cell (`f1e169`)** | collection grid row 2 | Completed without error. Not repeated. No double-click. No typing. |
| 5 | Fresh snapshot `t8-snapshot-01` and screenshot `t8-02` (immediate post-selection) | runtime | eggs current (`Object 2 of 3`); see section 3; no dialog |

Not done: FX_Refresh (0); any other row selection (0); typing into any field (0); any Save, Delete, New, or data change (0); Form open or close (0); Designer action (0); dismissal of any prompt or dialog (0 — none appeared).

## 2. Pre-selection state (`t8-snapshot-00`, `t8-01`)

| Item | Value |
| --- | --- |
| Form | FX_Items (tab selected) |
| Current row | dumbbell (grid row 1; `Object 1 of 3`) |
| Grid row 1 FX_Description | `45 pound iron` (`f1e160`) |
| Description field | `45 pound iron` (`f1e213`) |
| Value box right of FX_Refresh (unnamed) | `45 pound iron` (`f1e195`) |
| Save | disabled (`f1e28`) |
| Dialogs | none |

## 3. Post-selection state (`t8-snapshot-01`, `t8-02`)

| Item | Pre-selection | Post-selection | Changed? |
| --- | --- | --- | --- |
| Current row | dumbbell (row 1) | **eggs (row 2, `gridcell "eggs" [active] [selected]`, `f1e169`)** | Yes (selection only) |
| Status indicator | `FX_Refresh (Object 1 of 3)` | `Item (Object 2 of 3)` | Yes (focus moved to the Item field by the native selection) |
| Item field | `dumbbell` | `eggs` | Follows selection |
| Description field | `45 pound iron` | **`cage free`** | Follows selection |
| Cost field | `45.00` | `6.99` | Follows selection |
| Unit of Measure | `EA` | `DZ` | Follows selection |
| Selected row's FX_Description (grid `f1e171`) | `45 pound iron` (row 1) | `cage free` (row 2) | — |
| **Value box right of FX_Refresh (`f1e195`)** | `45 pound iron` | **`45 pound iron` (unchanged)** | **No** |
| Save | disabled | disabled | No |
| Dialogs | none | none | No |

Comparison of the optional-row question (exact, character-for-character):
- Displayed value box `45 pound iron` vs selected row (eggs) Description `cage free`: **not equal**.
- The value box is **unchanged**, not cleared, and shows no error.
- It is consistent with the value being independent of the current row at this moment (it did not follow the selection).

## 4. Original records and runtime Save (AC-9)

Post-selection grid (`t8-snapshot-01`):

| Row | Item | Description | Cost | Unit of Measure | Same as T1 / T3 / T4? |
| --- | --- | --- | --- | --- | --- |
| 1 | dumbbell | 45 pound iron | 45.00 | EA | Yes |
| 2 | eggs | cage free | 6.99 | DZ | Yes |
| 3 | guitar | natural acoustic | 129.99 | EA | Yes |

- Runtime Save: `[disabled]` (`f1e28`) before and after.
- No record was edited. The Item field is a read-only key field; it was not typed into.

## 5. Unexpected effects

None observed. No prompt, no dialog, no error message, no second window. The focus moved from the grid to the Item field, which is native behaviour after a row selection. No text was entered.

## 6. Counts (T8)

| Item | Count |
| --- | --- |
| Tab lists | 1 (before the first select) |
| Tab selects | 1 (tab 1; succeeded) |
| Row-selection clicks | 1 (eggs row; succeeded) |
| FX_Refresh clicks | **0** in this task (cumulative EXP-057: 1, from T4) |
| Prompt / OK dismissals | 0 in this task (cumulative: 2 prompts, 2 OK, from T3 and T4) |
| Runtime closures | 0 in this task (cumulative: 1, T3) |
| Runtime openings | 0 in this task (cumulative: 1, T3) |
| Designer Saves | 0 (cumulative: 0) |
| Metadata changes | 0 (cumulative: 0) |
| Business-data modifications | 0 (cumulative: 0) |
| Typing | 0 |
| Snapshots | 2 (`t8-snapshot-00`, `-01`) |
| Screenshots | 2 (`t8-01`, `t8-02`) |
| Browser-reference errors | 0 |

## 7. Acceptance (AC-9 scope)

| AC | Status | Basis |
| --- | --- | --- |
| AC-9 (records unchanged; runtime Save disabled; eggs-row optional: capture before/after Description and FX_VarTestEdit value; treat change, non-change or error as observation) | **Observed.** Records unchanged; Save disabled; eggs Description `cage free` captured before/after; value box unchanged at `45 pound iron` (non-change observed, not a pass/fail condition). | Sections 2–4; `t8-snapshot-00`, `-01`; `t8-01`, `t8-02` |
| AC-8 | Carried from T4 (passed on exact equality with the no-change limitation); not re-evaluated here | `T4-single-refresh-report.md` |
| AC-10 / AC-11 | Not finalized here (per instruction) | — |

## 8. Limitations

- The value box is an **inference** to be FX_VarTestEdit (position and Designer definition; the accessibility tree gives it no name).
- Single session, single row change. No polling for later changes beyond the immediate post-selection snapshot.
- The result is not interpreted as proof that the earlier refresh re-evaluated `P(FX_Description)`. This row observation is separate evidence and is not discriminating for that question by itself.
- Whether the value box is normally written only at refresh or at other events is not established by this task.

## 9. Final stable browser state

- Tab 1 (runtime): FX_Items Form open (the single opening from T3); **eggs is the current row**; Save disabled; no dialog; focus on the Item field (read-only, nothing typed).
- Tab 0 (Designer): unchanged from T2D (FX_Items open, Variables tab, filter cleared, Save disabled, no dialog).
- No browser-native dialog; no unsaved-change prompt.

## 10. Files written (T8)

- `evidence/EXP-057/T8-eggs-row-observation-report.md` (this report)
- Snapshots: `evidence/EXP-057/t8-snapshot-00-runtime-pre-eggs-selection-fresh.md`, `evidence/EXP-057/t8-snapshot-01-runtime-post-eggs-selection-fresh.md`
- Screenshots: `evidence/EXP-057/t8-01-runtime-pre-eggs-selection-dumbbell-current.png`, `evidence/EXP-057/t8-02-runtime-post-eggs-selection-immediate.png`
- Tool-generated (gitignored): `evidence/playwright/page-2026-10-11T09-43-23-017Z.yml`
- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md` (updated: status and T8 section)
