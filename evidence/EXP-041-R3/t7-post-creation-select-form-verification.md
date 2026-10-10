# EXP-041-R3 T7 — One controlled post-creation Select Form verification (read-only)

Date: 2026-10-10. Run R-20261010-154641-QsiV · EXP-041-R3 · cycle 8 · task T7.
Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `87393280-c160-48dd-aca1-a2d2468c54d0`.
Scope: two filter queries in one Select Form dialog (positive control, then target). No mutation, no Designer close or reopen, no runtime open, no Finish, no Save, no row activation.

## 1. Pre-check of the Designer (before the Web Client work)

- Saved T6 evidence reviewed (`t6-prefinal-baseline-and-select-form-inventory.md`): Name FX_HelloWorld01; Version User version for user anton.ramos@3mworks.com.ph; Form Type Normal (as rendered); Primary Collection FX_HelloWorld01. Components not re-inspected (per the brief).
- Designer tab, fresh finds: status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Form tab `FX_HelloWorld01` selected, closable; Save `[disabled]`.

## 2. Select Form — dialog settings at open (fresh snapshot)

- Opened from the Web Client toolbar Open control (`f1e25`, label "Open" verified in a fresh find; ID `#mgtoolbarbutton-1100`).
- Dialog ref `f1e841`. Filter By: **Name** (combobox `f1e876`). **Case Sensitive: unchecked** (`f1e880`). **Starts With: unchecked** (`f1e885`). No `[checked]` on either.
- The Filter textbox still held the T6 text `FX_HelloWorld01` at open.
- **Leftover observation (not a query result):** at open, before any T7 query, the grid already showed one row, `FX_HelloWorld01` / `FX_HelloWorld01` (grid `f1e856`, row `f1e860`–`f1e863` in that snapshot). This row was present when the dialog opened, with the T6 filter text still in place. It was not produced by a T7 query. Screenshot `t7-01-select-form-open-settings-before-queries-leftover-row-at-open.png`.
- Settings were already correct. No correction was needed. Ctrl+A and the key entry replaced the filter text in the next steps.

## 3. Query 1 — positive control `SqlTables` (passed)

| Step | Action | Result |
|---|---|---|
| 1 | Click Filter textbox (`f1e870`) | Focused. |
| 2 | Control+a | Text selected. |
| 3 | `browser_type` `SqlTables`, `slowly: true` (key events) | Textbox reads `SqlTables`. |
| 4 | Wait 2 s; fresh dialog snapshot | Grid: `Sql Tables` / `SqlTables` (`f1e898`/`f1e900`) and `Sql Tables Constraint` / `SqlTablesPrimaryKey` (`f1e905`/`f1e907`). **Two rows.** |

- Settings during the query: Filter By Name; Case Sensitive unchecked; Starts With unchecked.
- **Positive control: PASSED.** The filter is effective and the session is live.
- Evidence: `t7-02-positive-control-SqlTables-settled-two-rows.png` (taken after the settle).

## 4. Query 2 — target `FX_HelloWorld01` (one row returned)

| Step | Action | Result |
|---|---|---|
| 1 | Click Filter textbox (`f1e870`) | Focused. |
| 2 | Control+a | Text selected. |
| 3 | `browser_type` `FX_HelloWorld01`, `slowly: true` (key events) | Textbox reads `FX_HelloWorld01`. |
| 4 | Wait 2 s; fresh dialog snapshot | Grid `f1e856`: one row, `FX_HelloWorld01` (Caption, `f1e912`) / `FX_HelloWorld01` (Name, `f1e914`). **One row.** |

- Settings: Filter By Name; Case Sensitive unchecked; Starts With unchecked.
- Evidence: `t7-03-target-FX_HelloWorld01-exact-settled-one-row.png`.
- Rows that matched: **exactly one**. Its Caption and Name are both `FX_HelloWorld01`. No other row appeared, so no case-variant or additional match is visible in this result.
- No further query was run (no retry, no second settle, no substring search), per the brief.

## 5. Interpretation (visible inventory only)

- **The positive control passed in this session.** The filter narrowed the grid as expected, so an empty grid would have counted. Here the target did not return zero rows.
- **Uniqueness, within this visible result:** the exact-name query returned exactly one row. Case Sensitive was unchecked, so the query was not case-sensitive; no case-variant row was visible. This supports AC-5's "one visible FX_HelloWorld01 Form" claim **for this single read**.
- **Conflict with T6:** T6 returned **zero** rows for the same query, with the same settings, in the same worker session, after a settle of about 2 s plus about 3 s. T7 returns **one** row. The two results are not reconciled by any observation in this record. The Designer shows the Form open in both checks.
- **Why the difference is unexplained:** the leftover row at dialog open (§2) shows the grid already contained FX_HelloWorld01 when T7's dialog opened, which fits a list that was refreshed between T6 and T7. But no T7 observation establishes the cause. The T6 zero-row is therefore treated as an **unreproduced visibility discrepancy**, not as proof of absence and not as proof of presence.
- **Not established by T7:** the scope of the row (the dialog shows no scope column; the row's ScopeType and ScopeName are not displayed); absence in Site Default, Group or other users' scopes; the total store count; whether a second FX_HelloWorld01 exists in an inaccessible scope.

## 6. Dialog close

- Fresh dialog snapshot before the click: `f1e891` labelled **"Cancel"**; `f1e889` labelled "OK" (not used).
- Cancel (`f1e891`) clicked once. Post-Cancel snapshot: no Select Form dialog. No row was selected or activated. The Form was not opened from the results.
- The Web Client IDOs surface is unchanged: IDO `FX_HelloWorld01`, Project `FX_HelloWorldProject01`, Revision Num 2, Save `[disabled]`. (The IDO grid is not part of the Form check and was not edited.)

## 7. Designer end state

- Tab 0 selected: `…/designer/default.aspx?MGForm=FX_HelloWorld01`.
- Form tab `FX_HelloWorld01` selected (closable control present). Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Save `[disabled]`.
- No dialog, no alert, no unsaved-change prompt.

## 8. Operation counts (T7)

| Operation | Count |
|---|---|
| Select Form opened | 1 |
| Select Form filter queries | **2** (SqlTables; FX_HelloWorld01) |
| Filter entries (`browser_type`, `slowly: true`) | 2 |
| Control+a | 2 |
| Filter textbox clicks | 2 (one before each query) |
| Settle waits | 2 (2 s each) |
| Dialog-scoped snapshots | 4 (at open; after the control settle; after the target settle; before Cancel) plus 1 full post-Cancel snapshot |
| Select Form screenshots | 3 (`t7-01`, `t7-02`, `t7-03`) |
| Select Form row activation / OK | **0 / 0** |
| Select Form Cancel | 1 (verified label) |
| Designer Form close / reopen | **0 / 0** |
| Designer Save | **0** |
| Finish | **0** |
| Runtime Web Client Form open | **0** |
| Component or property edits | **0** |
| Stale-ref errors | 0 |
| Fresh recovery snapshots (for a failure) | 0 (none needed) |
| Corrected inspections | 0 |
| JavaScript / evaluate / run-code | 0 |
| Authentication / logout / session reset | 0 |

## 9. Evidence inventory (T7)

| File | Shows | Does not show |
|---|---|---|
| `t7-01-select-form-open-settings-before-queries-leftover-row-at-open.png` | Select Form at open: Filter By Name; both checkboxes unchecked; filter text `FX_HelloWorld01`; leftover row `FX_HelloWorld01` already in the grid. | Result of a T7 query (none yet). Scope of the row. |
| `t7-02-positive-control-SqlTables-settled-two-rows.png` | Positive control: two rows, `Sql Tables`/`SqlTables` and `Sql Tables Constraint`/`SqlTablesPrimaryKey`; textbox `SqlTables`; both checkboxes unchecked. | Scope of rows; store total. |
| `t7-03-target-FX_HelloWorld01-exact-settled-one-row.png` | Target query: textbox `FX_HelloWorld01`; one row `FX_HelloWorld01`/`FX_HelloWorld01`; both checkboxes unchecked. | Scope of the row; whether a second row exists outside the rendered window (none visible). |
| Snapshot files under `evidence/playwright/` (tool output, gitignored): `…08-15-58-043Z.yml` (after the Open click), `…08-16-04-259Z.yml` (after the textbox click), `…08-16-11-302Z.yml` (control settled), `…08-16-20-978Z.yml` (target settled), `…08-16-27-599Z.yml` (post-Cancel). The dialog-scoped snapshots in §§2–4 were returned inline and are not saved as separate files. | Accessibility states used in §§2–6. | — (tool output; not worker-authored evidence) |

## 10. Acceptance (T7)

- **AC-2 (post-creation, this check):** the positive control passed; the exact target returned one row. Reported for the visible inventory; the T1 pre-creation gate is unchanged.
- **AC-5 (uniqueness of the Form):** **supported by this single read** (one visible row for the exact name, Case Sensitive unchecked, no case-variant row visible). **Not confirmed as a stable result:** T6 returned zero rows in the same session with the same settings, and the difference has no explanation in this record. AC-5 remains **inconclusive** until the discrepancy is reproduced or explained.
- **AC-7 (close and reopen recovery): PENDING.** Not performed.
- **AC-8 (runtime open): PENDING.** Not performed.
- AC-1, AC-3, AC-4, AC-6, AC-9: unchanged by T7.
