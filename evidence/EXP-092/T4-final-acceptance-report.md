# EXP-092 — T4 final acceptance report (documentation-only audit)

Experiment: EXP-092 — Hello World Part 5 section 13: FX_Item runtime test on FX_Orders (detail combobox and grid column; unsaved, discarded)
Record: `experiments/EXP-092-hello-world-part-5-section-13-fx-item-runtime-test.md`
Run: R-20261014-234410-teAm · cycle 3 · task T4 · worker session 8d00c9fd-3a4f-4db5-bdfe-d598fbf368af · task message be08bc34-22d6-43f0-8cf4-610c5899bd05
Scope of T4: documentation audit only. **Zero browser calls. Zero Mongoose changes.**

## 1. Recommendation

**ACCEPTED AS OBSERVED.** All five acceptance checks (AC-1 to AC-5) are supported by the recorded evidence, with the limitations in section 6. Findings are observed only. Nothing here is replay-verified, cross-session durable, or database-durable.

## 2. Reconciled browser-call counts

Source: the controller audits `evidence/EXP-092/harness-audit-T1.md` (22 browser rows), `harness-audit-T2.md` (34), `harness-audit-T3.md` (42). These match the worker's ledgers after the corrections below.

| Operation | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 3 |
| Tab select | 2 | 1 | 1 | 4 |
| Snapshot | 6 | 10 | 13 | 29 |
| Find | 3 | 6 | 6 | 15 |
| Screenshot | 3 | 5 | 7 | 15 |
| Click | 6 | 10 | 12 | 28 |
| Key press (F4) | 1 | 1 | 1 | 3 |
| Splitter drag | 0 | 0 | 1 | 1 |
| Type | 0 | 0 | 0 | 0 |
| **Total** | **22** | **34** | **42** | **98** |

Confirmed: T2 performed **six** `browser_find` calls, not five. The sixth is the "natural acoustic" find that locates the detail drop-down rows (controller T2 row 7). Therefore T2 = 34 and cumulative T1+T2+T3 = 98. The record's earlier values (T2 find 5, T2 total 33, cumulative find 14, cumulative total 97) were wrong and have been corrected in the record.

Cross-check of the controller header tallies: T1 "9 actions, 13 reads"; T2 "12 actions, 22 reads"; T3 "15 actions, 27 reads". These match clicks + F4 + tab selects + drag (actions) and snapshots + screenshots + finds + tab lists (reads).

Non-browser tool calls (controller audit; not browser calls): 35 in total (Glob 2, Grep 2, Read 24, Write 1, Edit 6). The Write created the record in T1 and the Edits updated only the record.

## 3. Reconciled lifecycle totals

| Item | Count | Where it is evidenced |
| --- | --- | --- |
| Runtime opens | 3 | T1 row 25; T2 row 24; T3 row 32 (Select Form OK) |
| Runtime closes | 3 | T2 row 13 (Discard 1); T3 row 21 (Discard 2); T3 row 47 (final clean close) |
| F4 | 3 | T1 row 29; T2 row 28; T3 row 36 |
| Detail drop-down opens | 1 | T2 row 4 |
| Grid drop-down opens | 1 | T3 row 12 |
| Eggs choices, detail | 1 | T2 row 9 |
| Eggs choices, grid | 1 | T3 row 17 |
| Splitter drags | 1 | T3 row 6 (coordinate-based) |
| Prompts answered No | 2 | T2 row 17; T3 row 25 |
| Prompts answered Yes | 0 | no Yes click in any task |
| Runtime Saves | 0 | no Save click in any task |
| Designer Saves | 0 | no Designer click in any task |
| Web Client unloads | 0 | none |
| Designer unloads | 0 | none |
| Checkout actions | 0 | none |
| Typed runtime values | 0 | no `browser_type` call in any task |
| Re-logins | 0 | no sign-in or session-expiry action |
| Row-number clicks | 6 | T1 rows 33, 36; T2 rows 32, 37; T3 rows 40, 44 |
| Grid cell edits | 1 | order 1 Item cell only (T3 rows 10, 12, 17) |

## 4. Save-prompt texts (both discard cycles)

Exact text in both cycles: **"Do you want to save your changes to primary collection?"**

- Discard 1 (T2): screenshot `evidence/EXP-092/discard1-save-prompt.png` (viewed before answering; Yes focused, No and Cancel present). Answered **No** once. No other prompt.
- Discard 2 (T3): screenshot `evidence/EXP-092/discard2-save-prompt.png` (viewed before answering; same layout). Answered **No** once. No other prompt (no grid or splitter layout prompt).

## 5. Worker-written file inventory (reconciled)

Worker-authored, EXP-092 paths (17 files):
- `experiments/EXP-092-hello-world-part-5-section-13-fx-item-runtime-test.md` (created T1; updated T2, T3, T4)
- `evidence/EXP-092/T4-final-acceptance-report.md` (this file; created T4)
- `evidence/EXP-092/designer-gate.png`
- `evidence/EXP-092/runtime-baseline-order1.png`
- `evidence/EXP-092/runtime-baseline-order2.png`
- `evidence/EXP-092/detail-item-dropdown-open.png`
- `evidence/EXP-092/detail-after-eggs-choice.png`
- `evidence/EXP-092/discard1-save-prompt.png`
- `evidence/EXP-092/reopen1-order1.png`
- `evidence/EXP-092/reopen1-order2.png`
- `evidence/EXP-092/splitter-before.png`
- `evidence/EXP-092/splitter-after.png`
- `evidence/EXP-092/grid-item-dropdown-open.png`
- `evidence/EXP-092/grid-after-eggs-choice.png`
- `evidence/EXP-092/discard2-save-prompt.png`
- `evidence/EXP-092/reopen2-order1.png`
- `evidence/EXP-092/reopen2-order2.png`

Controller-generated, in `evidence/EXP-092/` (not worker-authored): `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`.

Playwright MCP tool-side files (generated automatically after browser actions; not worker-authored; outside the EXP-092 paths; Glob confirmed each exists in `evidence/playwright/`):
- 29 page snapshots: T1 six (`…2026-10-14T15-44-51-164Z`, `15-44-56-644Z`, `15-45-03-657Z`, `15-45-09-781Z`, `15-45-28-219Z`, `15-45-35-294Z`); T2 ten (`15-48-18-729Z`, `15-48-29-077Z`, `15-48-38-659Z`, `15-48-45-561Z`, `15-48-49-848Z`, `15-48-52-828Z`, `15-48-59-590Z`, `15-49-03-185Z`, `15-49-14-093Z`, `15-49-23-531Z`); T3 thirteen (`15-52-11-628Z`, `15-52-18-760Z`, `15-52-22-850Z`, `15-52-30-629Z`, `15-52-39-649Z`, `15-52-45-533Z`, `15-52-48-620Z`, `15-52-51-438Z`, `15-52-55-944Z`, `15-52-59-545Z`, `15-53-10-354Z`, `15-53-16-786Z`, `15-53-22-891Z`).
- 5 console files: T1 `console-2026-10-14T15-44-29-858Z.log` and `…859Z.log`; T2 `…15-48-13-962Z.log` and `…963Z.log`; T3 `…15-52-03-131Z.log` only. (An earlier reference in the record to a T3 `…963Z.log` was incorrect and has been corrected.)
- Console files from 15:07 to 15:25 are from other runs and are excluded.

No other files were written by the worker. No Git commands were run (no shell access). Operator git review remains authoritative for repository confinement.

## 6. Evidence review and limitations

- **AC-1** — Designer FX_Orders in User scope, clean, with Component Class FX_Item. `designer-gate.png` shows the User scope status bar, Save and Undo disabled, and FX_ItemGridCol = FX_Item in the Components grid and Properties. **Limitation:** FX_ItemCombobox = FX_Item comes from the accessibility snapshot only; its row is below the visible grid area. Runtime baseline: `runtime-baseline-order1.png` and `runtime-baseline-order2.png` show both orders' values (FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00; FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99). **Limitation:** the grid was collapsed; only the Order Number header start was visible. **Supported.**
- **AC-2** — `detail-item-dropdown-open.png` shows the drop-down columns Item and Item Description (Cost not displayed) and rows dumbbell / eggs / guitar. `detail-after-eggs-choice.png` shows Item Description cage free, Cost 6.99, Count 2 and Order Total 90.00 with Save enabled, before any Save. `discard1-save-prompt.png` shows the exact prompt. `reopen1-order1.png` and `reopen1-order2.png` show both orders unchanged. **Limitations:** Order Total is observed only (90.00, not recalculated); the effect of No is shown by the reopen, not by the prompt. **Supported.**
- **AC-3** — `splitter-before.png` and `splitter-after.png` record the layout before and after one drag (coordinate-based; the handle has no accessibility ref). `grid-item-dropdown-open.png` shows the grid drop-down columns and rows. `grid-after-eggs-choice.png` visibly shows cage free and 6.99 in the order 1 grid row before Save. `discard2-save-prompt.png` shows the exact prompt. `reopen2-order1.png` and `reopen2-order2.png` show both orders unchanged; the widened layout did not persist. **Limitations:** grid Count (2) and Order Total (90.00) were not on screen and were read from the accessibility tree only; the drag was coordinate-based. **Supported.**
- **AC-4** — The controller audits show zero `browser_type` calls, zero Save, Yes, Designer or unload clicks, one splitter drag, one grid edit (the order 1 Item cell), and no column resize, reorder or hide. The final close (T3 row 47) was followed by a find and a snapshot showing no open Form. **Limitation:** the Designer was not re-inspected in T4; its last observation is from T1. **Supported.**
- **AC-5** — This report, the reconciled audit in the record, and the file inventory above.

Limitations for all tasks: same-session UI observations only; no replay verification; no cross-session durability; no database durability; the drag was coordinate-based; the recipe `recipes/components/apply-component-class.md` stays at "candidate for verified" (any promotion is an operator decision).

## 7. Final state

- Web Client: `FX_Orders` runtime Form **closed** and clean at the end of T3. No prompt, menu, dialog or unsaved change is open.
- Designer: `FX_Orders` clean and User scope as last observed at T1. No Designer click or dialog appears in T2 or T3. Not re-inspected in T4.
- Session: no expiry, sign-in or re-login in T1–T4.

## 8. Changes made in T4

- `experiments/EXP-092-hello-world-part-5-section-13-fx-item-runtime-test.md`: corrected T2 find (5 → 6) and total (33 → 34); corrected cumulative find (14 → 15) and total (97 → 98); corrected the T3 console notice; updated the status line; added the T4 section.
- `evidence/EXP-092/T4-final-acceptance-report.md`: created (this file).
