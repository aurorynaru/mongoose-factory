# EXP-052 T3 — Runtime Add-mode baseline (AC-2), cycle 2

Run `R-20261011-122156-AVGD`, task T3, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `56deef99-3c18-4cb8-afec-1d985637e0f2`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: AC-2 supported with limits. One clean runtime close, one Select Form reopen, and the immediate state was captured before any Refresh, F4, query, or edit. The reopened FX_Items shows the Add-mode placeholder (one starred row, blank Item and Description, Cost `0.00`, blank Unit of Measure, Save disabled, status `Item (Object 1 of 1)`). Stopped for coordinator review; no Refresh, query, runtime edit, runtime Save or Delete, Designer change, or Designer close was performed.**

## Designer tab (left untouched)

Tab 0 was not selected or acted on in T3. Its last state (T2) remains: `FX_Items` Form open, User version, Initial Command blank, Save and Undo disabled, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.

## Inherited runtime inspection (fresh snapshot, tab 1 selected; no action)

- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; DEM badge; tab `FX_Items` selected (`f1e99`, close `f1e101`).
- No sign-in, configuration, or session challenge. No portal banner. No dialog. Console 0 errors, 2 warnings.
- Grid: three rows `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA` (guitar current); no starred row; no placeholder.
- Detail inputs: Item `guitar` (greyed key), Description `natural acoustic`, Cost `129.99`, Unit of Measure `EA`. Status `(Object 3 of 3)`. Save disabled.
- Same as the T1 state. Save disabled and no star, so no pending edit; judged demonstrably clean. Closed under the clean-state gate.

## Close (once)

- Action: click `Close Panel FX_Items` (`f1e101`), the tab's own close control. One click.
- Result (fresh snapshot): tab list empty; form toolbar disabled (Save, New, Delete, Refresh, FiP, Get More Rows, System Notes, Documents, Send email, Export To Excel, Help Current Form disabled); no dialog, no prompt, no unsaved-change warning.
- Screenshot `t3-01` (viewed): runtime area empty; no FX_Items tab; no prompt. Proves the Form tab was removed. It does not prove the saved data was unchanged (no database read; no data action was taken).

## Reopen (once) — Open > Select Form

- Action 1: toolbar `Open` (`f1e25`), one click. Result: Select Form dialog open, one row `FX_Items` / `FX_Items` (Caption / Name), filter textbox `FX_Items` (retained from earlier use), Filter By `Name`, Case Sensitive and Starts With unchecked.
- Action 2: one click on the row's Name cell (`f1e259`) to activate the row.
- Action 3: one click on OK (`f1e285`). Dialog closed; FX_Items tab reopened (`f1e292`, tab title `FX_Items`).
- No data, scope, or configuration was changed. The Designer was not touched.

## Immediate state (captured before any collection-loading action)

Fresh snapshot (no action preceded it other than the OK click) and screenshot `t3-02`:

| Element | Observed |
| --- | --- |
| Grid | one row, numbered `1`, blue star (per screenshot); all four cells blank except Cost `0.00` (`row "0.00"`, `gridcell "0.00"`). No other rows. |
| Item input | blank, focused, red required asterisk (`* Item`) |
| Description input | blank |
| Cost input | `0.00` (default) |
| Unit of Measure combobox | blank, with Open trigger |
| Save toolbar button | disabled (greyed in screenshot and accessibility) |
| Status bar | `Item (Object 1 of 1)` (caption prefix `Item` before the count token, as accepted in EXP-046 and EXP-051) |
| Dialogs / prompts | none |
| Portal banner | none |

Screenshot `t3-02` (viewed): shows the DEM identity bar, the `FX_Items` tab title, one grid row with a blue star and number `1`, blank Item (focused, required), blank Description, Cost `0.00`, blank Unit of Measure with dropdown, Save greyed, status `Item (Object 1 of 1)`. Proves the Add-mode state and count token; does not prove that the star reflects a new row rather than a persisted row (see distinguishability below).

## Is the state distinguishable from a persisted record?

Yes, on visible evidence. A persisted record would show its values in the grid and inputs (EXP-051 T8 and the T1 state both show three rows with values). Here the single row has blank Item and Description, the star, Save disabled, and the count `(Object 1 of 1)` (the add-mode count includes the uncommitted placeholder, per EXP-042-R3). The blank required Item input is consistent with the placeholder. This is interpretation from the UI, not a database read. The brief's stop condition (cannot distinguish from a persisted record) was not met.

## Non-events in T3

- Refresh 0; F4 0; Filter-in-Place 0; query 0; Get More Rows 0.
- New 0; Delete 0; runtime Save 0; typing into any runtime field 0; runtime edit or add mode entered 0 (the Item input is focused by the form, not by a worker keystroke).
- Designer actions 0 (tab 0 not selected); Initial Command untouched.
- Scope dialog interactions 0 (inherited dialog resolved in T2; not reopened).
- Timeouts 0; ref-not-found 0; prompts answered 0; portal banner dismissals 0.

## Counts (T3)

- Tab list 1; tab select 1 (to tab 1).
- Clicks 4: runtime close 1; Open 1; Select Form row 1; OK 1.
- Find 2 (`Select Form`; `OK`), both on the current frame, read-only.
- Content snapshots 4 (inherited runtime; closed state; Select Form dialog; immediate Add-mode state). Auto-generated snapshot files returned with several results are not counted as inspections.
- Screenshots 2: `t3-01` (closed) and `t3-02` (baseline). `t3-01` was re-read with Read afterward; that is not a third capture. (T10 audit correction: the earlier report said 3.)
- Runtime close 1; runtime reopen 1 (Open 1, row select 1, OK 1).
- Save 0; New 0; Delete 0; Refresh 0; F4 0; FiP 0; Get More Rows 0; queries 0.

## Reconciled lifecycle (so far)

| Lifecycle event | Count (EXP-052 to date) |
| --- | --- |
| Runtime close (clean, native control) | 1 (T3) |
| Runtime reopen (Open > Select Form) | 1 (T3) |
| Manual toolbar Refresh | 0 |
| Filter-in-Place query | 0 |
| Initial Command mutation | 0 |
| Designer Save | 0 |
| Designer close/reopen | 0 / 0 (the Designer Form has been open since T2) |
| Final runtime reopen | 0 (this T3 reopen is the baseline reopen, not the final one) |

## Limits

- Single session, UI level, accessibility text and screenshots. No database read. Same-session evidence only.
- Whether the reopened placeholder reflects a new-row placeholder versus a stale cached row is not separately established; the blank required Item and empty grid values and the count token are the basis.
- The Select Form filter textbox still contained `FX_Items` from an earlier use. Not changed by T3.
- The Item input received focus automatically on open; no worker keystroke was typed.

## Next permitted action (for coordinator review)

Per the T3 instruction, stop here. Next steps needing authorization:
1. Manual toolbar Refresh (AC-3) on this Add-mode reopened instance, exactly once, then the three-row verification.
2. Subsequent Filter-in-Place tests (AC-4, AC-5) per the Cost-syntax stop rule.
Designer phase (Initial Command change, one Save, close/reopen) and the final runtime reopen (AC-9) remain pending and are not authorized by this step.

## Files written by the worker (T3)

- `evidence/EXP-052/T3-runtime-add-mode-baseline-report.md` (this report)
- `evidence/EXP-052/t3-01-runtime-closed-once-no-prompt.png`
- `evidence/EXP-052/t3-02-runtime-reopened-add-mode-baseline-before-any-query.png`
- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (updated)

Tool-generated, not worker-authored: `evidence/playwright/` snapshot and console files written by the browser tool during T3, including `evidence/playwright/console-2026-10-11T04-27-22-685Z.log`, `page-2026-10-11T04-27-27-498Z.yml`, `page-2026-10-11T04-27-31-612Z.yml`, `page-2026-10-11T04-27-36-745Z.yml`, `page-2026-10-11T04-27-40-972Z.yml`.
