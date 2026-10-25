# EXP-134 T14 checkpoint (conditional single IDO check-in of FX_InventoryItems; no Finish; no Save)

Run R-20261026-031627-MXfT · cycle 19 · task T14 · worker session `3efa7704-1855-4d0e-bbfa-f4a0382cf245` · task_message_id `4e28e7b5-f839-4177-9167-d5d8ac4d1b03`. Date 2026-10-26 (tool-written snapshot and console names use UTC 2026-10-25T20:42–20:43).

## Result

- **Check In count: 1** (one successful native Check In on the IDO `FX_InventoryItems`). No Undo Check Out, no Check Out, no Save, no Finish, no Form creation, no SQL edit.
- Pre-check-in state: IDO checked out, Locked By `anton.ramos@3mworks.com.ph`, Check In enabled, Undo Check Out disabled, Revision Num `1`.
- Native result: one informational notice, "Source control integration is currently disabled in the current configuration. The item will not be checked in to source control." Its single OK was clicked once. The same notice appeared in EXP-040 T12.
- Post-check-in state (fresh readback after the notice): Revision Num `2`, Revision Date `10/25/2026`, Locked By **empty**, Check Out **enabled**, Undo Check Out disabled, status `Check Out (IDOs 1 of 1)`, row checkbox unchecked, Save disabled, no dialog.
- Project `FX_HelloWorldProject01`, Access As `G6R`, Label String ID and Caption `oFX_InventoryItems`, unchanged.
- The six FX_ business properties and the framework rows remain on the Properties sub-tab (see Properties readback below).

## Preflight (before any mutation)

| Gate | Observed | Evidence |
|---|---|---|
| Tab list (read-only) before the first select | 4 tabs: 0, 1 and 2 Designer (not selected); 3 Web Client `Mongoose` (current) | tool output |
| Tab 3 selection | Succeeded on the first select after the list | tool output |
| Identity and configuration | Header button `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t14-00-idos-panel-fresh-snapshot.yml` (ref `f1e22`); `t14-01` |
| Session / modal check | No Session Expired modal, no sign-in form, no alertdialog (read-only `find`) | `find` output |
| Panel state at start | Sql Columns was the active panel (Save disabled; Column Name combobox focused but unchanged; no pending edit). Switched to the **IDOs** panel by one click on its tab heading (read-only panel selection). Sql Columns and Sql Tables were NOT closed | `evidence/playwright/page-2026-10-25T20-42-38-602Z.yml` |
| IDO exact row | One row `FX_InventoryItems`, Locked By `anton.ramos@3mworks.com.ph`, Revision Date `10/25/2026`, Revision Num `1`; the row checkbox is checked (checked out) | `t14-00-idos-panel-fresh-snapshot.yml` (row `f1e803`); `t14-01` |
| Project, base table, alias | Project `FX_HelloWorldProject01`; Properties panel and T12/T13 Tables readback as recorded (the Tables sub-tab was not re-read in T14) | `t14-01`; T12 record |
| Checkout controls | Check In **enabled** (blue), Undo Check Out **disabled** (grey), Save disabled | `t14-01` |
| Unsaved edits | None. Description field empty; Save disabled; no pending field edit | `t14-01` |
| Console (before action) | 14 errors, 10 warnings (unchanged). The console log for this task has one 401 from `yggdrasil.inforcloudservices.com/yggdrasil/security/refresh` (the recurring endpoint from T12/T13) and two INFO `getSSOToken: Token expired` lines | `evidence/playwright/console-2026-10-25T20-42-30-282Z.log` (grep) |

**Mutation-time authentication judgement (recorded):** the 401 and the INFO token-expiry lines are the same recurring pattern from T12/T13. No visible session invalidity was present: no modal, no sign-in form, the account and configuration were readable, and the IDO row, its Locked By value and its checkout controls were loaded and responsive. None of the brief's stop conditions (visibly invalid session, unverifiable account, ambiguous authorization) was met. The single Check In was therefore performed. The 401 cause remains **unresolved**.

## Check-in action

| Step | Observation | Evidence |
|---|---|---|
| Check In (one click, `f1e959`, IDO `FX_InventoryItems`) | Completed without timeout or stale-reference error. Count **1** | tool output; `evidence/playwright/page-2026-10-25T20-43-07-662Z.yml` |
| Immediate result (find, read-only) | An `alertdialog` "Infor Mongoose Application Development Framework - IDOs" with the text "Source control integration is currently disabled in the current configuration. The item will not be checked in to source control." and one OK button. The Check Out button appeared enabled and Undo Check Out disabled (grey) | `find` output (accessibility text only; no screenshot was taken of this notice) |
| Notice OK (one click, `f1e2221`) | Dismissed. No Save, scope, overwrite, discard or vendor-Form prompt appeared | `evidence/playwright/page-2026-10-25T20-43-14-463Z.yml` |

The notice is consistent with the authorised check-in: Mongoose recorded the IDO check-in (revision incremented and Locked By cleared), and the notice states only that the item was not checked in to **source control**, which is disabled in this configuration. It was not a second action and was not repeated.

## Post-check-in readback (after the notice; no further action)

| Field | Pre-check-in (`t14-01`) | Post-check-in (`t14-02`) |
|---|---|---|
| IDO Name | `FX_InventoryItems` | `FX_InventoryItems` |
| Project Name | `FX_HelloWorldProject01` | `FX_HelloWorldProject01` |
| Revision Num | `1` | **`2`** |
| Revision Date | `10/25/2026` | `10/25/2026` |
| Locked By | `anton.ramos@3mworks.com.ph` | **empty** |
| Access As | `G6R` | `G6R` |
| Check In | enabled | **not shown** (the button is replaced by Check Out) |
| Check Out | not shown | **enabled** |
| Undo Check Out | disabled | disabled |
| Row checkbox | checked (checked out) | **unchecked** |
| Status bar | `P&roperties` (pre-check-in screenshot) | `Check Out (IDOs 1 of 1)` |
| Save | disabled | disabled |
| Dialog | none | none |

**Interpretation:** the IDO is settled in the checked-in state at UI level. The change in Revision Num from 1 to 2, the empty Locked By and the swapped Check Out control are the observed effects. They are not independent database-level evidence.

## Properties readback (not edited)

The Properties sub-tab was still displayed after the check-in. It shows FX_Item (sequence 1, Key Sequence 1, Required checked), FX_Description (String 255), FX_Warehouse (String 100), FX_QuantityOnHand (Decimal 12), FX_ReorderLevel (Decimal 12) and FX_Location (String 100), with the framework rows CreatedBy and UpdatedBy below. The Length and Decimal Precision for rows 4 and 5 are as recorded in T12 and T13. Rows 7 to 13 were not scrolled into view in T14. No edit was made.

## Screenshots and snapshots (worker-written)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-134/t14-00-idos-panel-fresh-snapshot.yml` | Fresh accessibility snapshot of the IDOs panel before the check-in: identity header, IDO row, Locked By `anton.ramos@3mworks.com.ph`, Revision Num 1, Check In enabled, Undo disabled | Visual layout (use `t14-01`) |
| `evidence/EXP-134/t14-01-idos-pre-checkin-checkout-state.png` | Pre-check-in: header identity `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDO Name `FX_InventoryItems`; Project `FX_HelloWorldProject01`; Revision Num 1; Locked By (truncated `anton.ramos@:` in the field, full text in `t14-00`); **Check In enabled (blue)**; Undo Check Out disabled; Save greyed; Properties rows 1 to 8 (six FX_ rows) | The Check In click itself; the database |
| `evidence/EXP-134/t14-02-post-checkin-fresh-snapshot.yml` | Post-check-in accessibility snapshot: Revision Num 2, Locked By empty, Check Out button present, Undo disabled, status `Check Out (IDOs 1 of 1)`, no alertdialog | Visual layout (use `t14-02` PNG) |
| `evidence/EXP-134/t14-02-post-checkin-idos-checked-in-state.png` | Post-check-in: Revision Num 2, Locked By empty, **Check Out enabled (blue, focused)**, Undo Check Out disabled, status `Check Out (IDOs 1 of 1)`, Save greyed, no dialog, Properties rows 1 to 8 with the same six FX_ rows | The source-control state; the database; cross-session durability |

The native notice itself was not captured as a PNG (dismissed before capture); it is recorded from the accessibility text of the `find` output only.

## Tool-written browser files (not worker-authored)

- `evidence/playwright/console-2026-10-25T20-42-30-282Z.log`, `…-284Z.log` (console logs for the tab-list events)
- `evidence/playwright/page-2026-10-25T20-42-38-602Z.yml` (panel selection), `…20-43-07-662Z.yml` (Check In click), `…20-43-14-463Z.yml` (notice OK)

## Acceptance matrix (T14 scope)

| AC | Status | Basis |
|---|---|---|
| AC-1 | Re-observed (identity, configuration, IDO exact row, no modal) | `t14-00`, `t14-01` |
| AC-5 | Retained from T12; the six FX_ property rows were still visible after the check-in (Properties sub-tab, UI only; no full re-audit) | `t14-01`, `t14-02` |
| AC-6 | Unchanged from T13 (SUPPORTED at Mongoose SQL-metadata UI level; qualified). Not re-read in T14 | T13 record |
| **AC-7** | **PASSED (UI level; qualified).** Checked out before (Locked By `anton.ramos@3mworks.com.ph`, Check In enabled). Exactly one successful Check In. Post-state: Revision Num 1→2, Locked By empty, Check Out enabled, Undo disabled, project `FX_HelloWorldProject01`. **Qualifier:** the native notice states source-control integration is disabled, so the Mongoose checkout was released but no source-control check-in occurred. | `t14-00`, `t14-01`, `t14-02`; find output |
| AC-8 | **Not performed** (reserved for T15 per the brief). No close or reopen of the IDOs or Sql Tables Forms in T14 | — |
| AC-9 (T14 portion) | **PASSED.** One Check In; zero duplicate check-ins; zero Finish; zero Save; zero Undo / Check Out; zero Form creation; zero SQL edit or execution; zero inventory record or editor Form; zero metadata unload, FormSync or generated script; zero non-FX_ mutation | Action audit below |
| AC-10 (T14 portion) | Evidence written (this checkpoint; `t14-00`–`t14-02`; experiment record update). The repository change inventory is for the final audit (T15) | — |

## Action audit (T14)

| Operation | Count |
|---|---|
| Tab list / tab select | 1 / 1 (tab 3, first attempt) |
| Panel selection (IDOs tab heading, read-only navigation) | 1 |
| Fresh snapshots (inline untargeted) | 1 (inline, start) plus 1 saved (`t14-00`) plus 1 saved post-check-in (`t14-02`) |
| Screenshots (worker-saved) | 2 (`t14-01`, `t14-02`) |
| Read-only `find` (dialog and state checks) | 2 (pre-check-in; immediate post-click) |
| **Check In** | **1** |
| Notice OK | 1 |
| **Undo Check Out / Check Out** | **0 / 0** |
| **Finish** | **0** |
| Save / New / Delete / Refresh / FiP / Get More Rows | 0 each |
| Criterion entries / F4 | 0 / 0 (no FiP query was needed; the row was current and matched) |
| Close or reopen of IDOs, Sql Tables or Sql Columns | 0 |
| Form creation / Create Form response | 0 |
| Property edits; Property Class lookup; Label String ID edits | 0 |
| Record creation; inventory editor Form; metadata unload; FormSync; generated script; direct SQL | 0 |
| Browser JavaScript / evaluate / run-code (worker-authored) | 0 |
| Ref-not-found / timeouts | 0 / 0 |
| Fresh-snapshot recovery allowance used | 0 |
| Session Expired / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Designer tabs 0–2 | Not selected or touched |
| Non-FX_ artifact mutation | 0 |

## Browser errors and console

- Page metadata before and after the check-in: `Console: 14 errors, 10 warnings` (unchanged). No new error-level entry was reported after the check-in.
- The recurring 401 from `yggdrasil.inforcloudservices.com/yggdrasil/security/refresh` (recorded in T12 and T13) and the two INFO `getSSOToken: Token expired` lines were read from the task's console log before the Check In. Their cause remains **unresolved**. No session modal or sign-in appeared before, during or after the check-in.

## Final browser state

- Tab 3: Web Client, IDOs panel active. IDO `FX_InventoryItems` row shown with Revision Num 2, Locked By empty, Check Out enabled, Undo Check Out disabled, status `Check Out (IDOs 1 of 1)`, Save disabled. No dialog open, no unsaved-change prompt.
- Sql Columns and Sql Tables panels remain open (not touched in T14).
- Tabs 0 to 2 were not selected or touched.

## Next permitted action (separate authorisation required)

1. **AC-8 paired close/reopen (T15):** close and reopen the IDOs and Sql Tables Forms normally, with an exact-name readback before and after each close. The pre-close baseline for the IDO is now the T14 post-check-in state (Revision 2, Locked By empty, Check Out enabled) and the T12/T13 property and table readbacks. The Sql Tables baseline is the T13 persisted row and constraints.
2. **AC-10 final audit (T15 or later):** the final acceptance matrix and the repository change inventory.
