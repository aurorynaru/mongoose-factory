# EXP-051 T8 — Reopened FX_Items: one final empty-criteria query; three-record verification (AC-10; cycle 8)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 8, task T8. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`, task_message_id `1ba589ff-b9d5-42d3-8fe3-a9fba7158b2e`. Date 2026-10-11.

Scope (bounded instruction): AC-10 only. Pre-query baseline; Filter in Place once; blank criteria confirmed; F4 once; settled read; read-only row inspection. No Refresh, no second F4, no Save, no New, no Delete, no close or reopen, no Designer action, no data change, no cleanup.

## Outcome

**The single empty-criteria query returned exactly three FX_Items records, and each row's four business values match the authorized values (observed, same session, UI level).**

| Row (query order) | Item | Description | Cost (2 dp) | Unit of Measure | Star | Status when selected |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `dumbbell` | `45 pound iron` | `45.00` | `EA` | none | `Description (Object 1 of 3)` (after F4, current record 1) |
| 2 | `eggs` | `cage free` | `6.99` | `DZ` | none | `(Object 2 of 3)` (row 2 selected) |
| 3 | `guitar` | `natural acoustic` | `129.99` | `EA` | none | `(Object 3 of 3)` (row 3 selected) |

- Native loaded-record count: the status token `(Object 1 of 3)` reads a total of **3**. The grid shows exactly three rows, numbered 1, 2, 3. No additional row.
- No row carries a new-row star. No add-mode placeholder row is present (the Form is not in add mode after the query).
- Save: disabled. No error, no alert, no prompt, no authentication challenge, no unexpected dialog.

**Persisted-record status: query-loaded, not independently verified.** These are records returned by the same-session Web Client query. This is not a database read, not cross-session, and not database-level durability.

## Gate and baseline (before the query)

| Check | Observed |
| --- | --- |
| Web Client tab | selected (tab list, select 1) |
| Identity | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Form | tab `FX_Items` (heading `FX_Items`) |
| Grid | one row `gridcell "1"` with starred add-mode placeholder (star read from `t8-01`) |
| Inputs | Item blank (active), Description blank, Cost `0.00` (permitted default), Unit of Measure blank |
| Status | `Item (Object 1 of 1)` |
| Save | disabled |
| Dialog or prompt | none |

The baseline matched the T7 reopened state, so the query was permitted.

## Query (one FiP and one F4)

1. One click on toolbar `Filter in Place` (`f1e39`). Status `Filter in Place`; FiP active.
2. Criteria check (accessibility and `t8-02`): Item, Description, Cost, and Unit of Measure inputs are all blank. Stated explicitly: **all query criteria were empty** before the query ran.
3. One F4 keypress. FiP exited; the grid populated with three rows; the status settled at `Description (Object 1 of 3)`.
4. Settled read (`t8-03`): three unstarred rows; Save disabled; no dialog.

No second F4 and no Refresh were used.

## Row-by-row verification (read-only)

- Row 1 (after F4, current record): inputs `dumbbell` / `45 pound iron` / `45.00` / `EA` (`t8-03`). Grid row `dumbbell / 45 pound iron / 45.00 / EA` (accessibility).
- Row 2 (selected by its row header, read-only): inputs `eggs` / `cage free` / `6.99` / `DZ` (`t8-04` not taken for this row; accessibility snapshot section D in the excerpts file). Grid row `eggs / cage free / 6.99 / DZ`.
- Row 3 (selected by its row header, read-only): inputs `guitar` / `natural acoustic` / `129.99` / `EA` (`t8-04`). Grid row `guitar / natural acoustic / 129.99 / EA`.

Cost displays to two decimal places in every row (`45.00`, `6.99`, `129.99`).

Row order: dumbbell, eggs, guitar. The insertion order was dumbbell, guitar, eggs. The query order is not the insertion order. The cause (default sort, or none) is not established.

## Acceptance check AC-10

| Requirement | Result |
| --- | --- |
| One supported empty-criteria query | yes (FiP with blank criteria; one F4) |
| Exactly three loaded FX_Items rows | yes (three rows; status total 3) |
| No unexplained extra row | yes (no fourth row; no placeholder) |
| dumbbell / 45 pound iron / 45.00 / EA | yes (grid and inputs) |
| guitar / natural acoustic / 129.99 / EA | yes (grid and inputs, row 3) |
| eggs / cage free / 6.99 / DZ | yes (grid and inputs, row 2) |
| Native loaded-record count captured | yes (`(Object 1 of 3)` after F4; `(Object 2 of 3)` and `(Object 3 of 3)` on row selection) |
| Three row identities captured | yes (`t8-03`, `t8-04`; accessibility excerpts) |

AC-10 is **PASS (observed, same session, UI level)**.

## Distinguishing the evidence

- **Same-session Web Client recovery:** the reopened tab and the query were in the same browser session as the Save. The rows were returned by a Web Client query after a close and reopen in that session.
- **Query-loaded records:** the three rows are what the Web Client loaded from its collection query. This is the UI's view.
- **Not claimed:** cross-session persistence; database-level or independent database durability; replay verification; complete domain validation. No database or SQL read was made, and none was permitted.

## Evidence files (T8)

- `evidence/EXP-051/t8-01-pre-query-reopened-placeholder-baseline.png`: pre-query. Shows FX_Items tab, identity bar, starred add-mode placeholder, blank Item/Description/UM, Cost `0.00`, `Item (Object 1 of 1)`, Save greyed. Proves the baseline. Does not prove the database content.
- `evidence/EXP-051/t8-02-filter-in-place-blank-criteria-before-F4.png`: FiP mode before F4. Shows `Filter in Place` status, the FiP icon on the FX_Items tab, all criteria inputs blank, the New/Delete/Refresh buttons greyed. Proves the criteria are blank before the one query. Does not prove the query result.
- `evidence/EXP-051/t8-03-settled-after-one-F4-final-query-object-count.png`: settled after F4. Shows three numbered rows (1 dumbbell, 2 eggs, 3 guitar, first column clipped), no stars, `Description (Object 1 of 3)`, Save greyed, Item key greyed, the first record's inputs `dumbbell / 45 pound iron / 45.00 / EA`. Proves the three-row result and the count token visually. Does not prove the database; the Item column is clipped in the grid.
- `evidence/EXP-051/t8-04-row-3-selected-guitar-read-only-inspection.png`: row 3 selected. Shows `(Object 3 of 3)`, row 3 highlighted, inputs `guitar / natural acoustic / 129.99 / EA`, Item greyed. Proves the row-3 values and count. Does not prove row 2 by image (row 2 was verified by accessibility only; no image was taken for row 2).
- `evidence/EXP-051/t8-accessibility-excerpts.md`: refs and full text for the baseline, FiP criteria, post-F4 rows, and the row 2 and row 3 selections.
- `evidence/EXP-051/T8-final-query-three-record-verification-report.md`: this report.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console files (for example `page-2026-10-11T03-59-31-178Z.yml` after FiP, `page-2026-10-11T03-59-44-293Z.yml` after row 2, `page-2026-10-11T03-59-48-366Z.yml` after row 3, `console-2026-10-11T03-59-23-294Z.log`).

## Limitations

1. Same-session UI only; not a database read; not independent of the Web Client.
2. Stars are read from screenshots only; the accessibility tree does not show them. The settled screenshot `t8-03` shows no stars.
3. Row 2's values are from the accessibility tree and the status token; there is no screenshot of row 2 selected. Rows 1 and 3 have screenshots.
4. The first column of the grid is clipped in the screenshots; the values come from the tree.
5. The row order (dumbbell, eggs, guitar) differs from insertion order; the cause is not established.
6. The Description input in the settled state carries focus with its text selected (from the query result). No typing was performed after the query.

## Stop state

- Web Client tab current; FX_Items runtime reopened; query settled; three unstarred rows; Save disabled; no dialog, prompt, or authentication challenge.
- Row 3 is the current record; the grid row is selected; the Item input is greyed (read-only key).
- No edit mode entered; no data changed.
- Designer tab not touched; its inherited scope dialog unchanged.
- Final AC-11/AC-12 audit and the experiment completion decision are left for coordinator review.

## Cumulative reconciliation (after T8)

| Operation | Count | Where |
| --- | --- | --- |
| Rejected BX Save | 1 | T2 |
| Intended successful toolbar Save | 1 (two explicit Saves in total with T2) | T6 |
| Toolbar New | 2 | T4, T5 |
| Runtime Form-tab close | 1 | T7 |
| Runtime Form reopen | 1 | T7 |
| Final empty-criteria query (FiP + F4) | **1** | T8 |
| Alert dismissals | 1 | T3 |
