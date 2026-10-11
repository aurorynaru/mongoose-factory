# EXP-051 T7 — One ordinary runtime close and one supported reopen of FX_Items (AC-9; cycle 7)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 7, task T7. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`, task_message_id `9419f654-e2c6-4f64-9b48-fcc3d5082ba2`. Date 2026-10-11.

Scope (bounded instruction): AC-9 only. One clean Form-tab close; one reopen; the immediate state only. No query, no Refresh, no F4, no FiP, no Save, no New, no Delete, no data entry, no Designer action, no cleanup.

## Outcome

**AC-9 PASS (observed, same session, UI level).**
- Pre-close gate passed: FX_Items runtime, DEM identity, three records, count `Description (Object 3 of 3)`, Save disabled, no dialog, no unsaved-change prompt.
- Close: one click on the FX_Items tab's own native control `Close Panel FX_Items`. FX_Items removed from the open tab list; the Form toolbar became disabled; no prompt, dialog, or authentication challenge.
- Reopen: one toolbar Open, one Select Form row activation (Name cell), one OK. The reopened tab is `FX_Items` with the same Caption/Name identity, in the same DEM configuration.
- Immediate reopened state: one add-mode placeholder row with a star (screenshot), blank Item and Description, Cost `0.00`, status `Item (Object 1 of 1)`, Save disabled. **No saved rows were loaded.**

**Persistence NOT verified.** The reopen shows an add-mode placeholder, not the three rows. Whether the rows are stored is unknown from this state. The required final empty-criteria query is deliberately not run in T7 (per the brief). Same-session Web Client recovery is not database-level durability.

## Supported procedure used

- Close: the FX_Items tab's own `Close Panel FX_Items` control (EXP-050 T7 and EXP-042-R3 cycle 11 both used the tab's own close control). Not the Chrome browser-tab close.
- Reopen: toolbar Open → Select Form → activate the single matching row → OK. This is the workflow recorded in EXP-050 T8 (toolbar Open, Select Form OK) and EXP-042-R3 cycle 11 (toolbar Open, row Name cell, OK). The Form-menu recent-forms entry (EXP-050 T7) was not used.
- The Designer's inherited `Identify Your Editing Scope` dialog was not touched.

## Actions (in order)

| # | Action | Result |
| --- | --- | --- |
| 1 | tabs list | Designer tab 0; Web Client tab 1 |
| 2 | tabs select tab 1 | Web Client current (first select, no error) |
| 3 | snapshot (pre-close, fresh) | FX_Items tab selected; 3 rows; count `Description (Object 3 of 3)`; Save disabled; no dialog |
| 4 | screenshot `t7-01` | clean state, no stars, Save greyed |
| 5 | click `Close Panel FX_Items` (`f1e101`), once | tab closed; no prompt |
| 6 | snapshot | FX_Items absent from the tablist; Form toolbar disabled; no dialog |
| 7 | screenshot `t7-02` | empty Form area; tab gone |
| 8 | click toolbar `Open` (`f1e25`), once | Select Form dialog open; one row FX_Items / FX_Items |
| 9 | snapshot | dialog rows, filter `FX_Items`, OK `f1e285` |
| 10 | click row Name cell `f1e259`, once | row active |
| 11 | snapshot | row active; OK present |
| 12 | click OK `f1e285`, once | Select Form closed; FX_Items reopened |
| 13 | snapshot and screenshot `t7-03` | add-mode placeholder; `Item (Object 1 of 1)`; Save disabled |

## Counts (T7)

| Operation | Count |
| --- | --- |
| Runtime Form-tab close | **1** |
| Runtime Form reopen (Select Form OK) | **1** |
| Toolbar Open clicks | 1 |
| Select Form row activations | 1 |
| Select Form OK clicks | 1 |
| Select Form cancel | 0 |
| Save / New / Delete | 0 / 0 / 0 |
| Refresh / F4 / FiP / Get More Rows | 0 / 0 / 0 / 0 |
| Final empty-criteria query | **0** (deliberately not run) |
| Typed text / fills / Escape | 0 / 0 / 0 |
| Dropdown opens / selections | 0 / 0 |
| Designer edits; Designer dialog touched | 0; 0 |
| Tab list / tab select | 1 / 1 |
| Web Client snapshots | 5 (pre-close; after close; after Open; after row activation; after OK) |
| Screenshots | 3 (`t7-01` to `t7-03`) |
| Finds | 0 |
| Dialogs or prompts answered | 0 |
| Ref not found / timeouts / recovery snapshots | 0 / 0 / 0 |
| Portal banner dismissals | 0 (none visible) |
| JavaScript, evaluate, run-code, SQL, API | 0 |
| Authentication, session, or browser change | 0 |

## Cumulative reconciliation (after T7)

| Operation | Count | Where |
| --- | --- | --- |
| BX invalid Save attempt (rejected) | 1 | T2 |
| Intended successful toolbar Save | 1 (plus the T2 BX Save = 2 explicit Saves in total) | T6 |
| Toolbar New | 2 | T4, T5 |
| Runtime Form-tab close | **1** | T7 |
| Runtime Form reopen | **1** | T7 |
| Final empty-criteria query | **0** (remaining for the separate task) | — |
| Alert dismissals | 1 | T3 |

## Evidence files (T7)

- `evidence/EXP-051/t7-01-pre-close-clean-three-rows.png`: pre-close. Shows the FX_Items tab with the eggs draft in the inputs, Save greyed, `Description (Object 3 of 3)`, three rows with plain numbers (no stars), DEM identity bar, no dialog. Proves the clean pre-close gate visually. The grid values for rows 1–2 are clipped in the image and taken from the accessibility snapshot. Does not prove database content.
- `evidence/EXP-051/t7-02-after-close-FX_Items-tab-gone.png`: after the close. Shows no FX_Items tab, the Form toolbar greyed, the empty Form area, no status bar, no dialog. Proves the runtime tab was closed; does not prove database state.
- `evidence/EXP-051/t7-03-reopened-FX_Items-immediate-state-no-query.png`: after the reopen. Shows the FX_Items tab, one starred add-mode placeholder row (row 1), blank Item and Description, Cost `0.00`, status `Item (Object 1 of 1)`, Save greyed. Proves the reopen and the add-mode start. Does not prove that the three saved rows are stored or loaded (they are not shown in this state).
- `evidence/EXP-051/t7-accessibility-excerpts.md`: accessibility excerpts for the pre-close, post-close, Select Form, and reopened states.
- `evidence/EXP-051/T7-close-and-reopen-report.md`: this report.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console files (for example `page-2026-10-11T03-57-23-050Z.yml`, `page-2026-10-11T03-57-29-087Z.yml`, `page-2026-10-11T03-57-37-644Z.yml`).

## Limitations and uncertainties

1. **Persistence not verified.** The reopened Form shows only the add-mode placeholder. The three saved records have not been loaded or read. The final empty-criteria query (AC-10) is the next check, and it is separate.
2. **Same-session recovery only.** The close and reopen were in the same browser session. This is not cross-session persistence and not database-level durability.
3. **Form identity.** The reopened tab is `FX_Items` with the same Caption/Name identity as the Select Form row. The User scope and Version were not re-read in the Designer (the Designer was not touched).
4. **Star and clipped cells.** The placeholder star is read from the screenshot; the accessibility tree does not show it. Rows in the pre-close screenshot are clipped; their values come from the snapshot.
5. **Saved rows not visible in T7.** The add-mode start is consistent with EXP-042-R3 (the reopen opens in add mode and the rows load only after a Refresh). That is an observation of the open behaviour, not a failure.
6. **Procedure reference.** The reopen path was taken from EXP-050 T8 and EXP-042-R3 cycle 11, as recorded in those records; the Designer's scope dialog was not used.

## Stop state

- Web Client tab current; FX_Items runtime reopened (add-mode placeholder); Save disabled; no dialog, prompt, or authentication challenge; Select Form closed.
- No query has been run since the reopen. The Item input has focus (the placeholder row).
- Designer tab not touched; its inherited scope dialog is unchanged.
- Next permitted action (coordinator): one empty-criteria collection query (AC-10) to load and verify the three records. Not performed in T7.
