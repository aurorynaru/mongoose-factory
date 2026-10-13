# EXP-073 T4 — Pre-Save verification, one toolbar Save, and post-Save readbacks (worker-transcribed)

Run: cycle 3, task T4. Date 2026-10-13. Web Client tab (tab 1) selected; Designer (tab 0) not interacted with. ONE toolbar Save invoked. No retry. No New. No close, reopen or recovery query. No field edited.
Snapshot files named below are written by the Playwright MCP tool (`evidence/playwright/`), not by the worker. Readbacks are transcribed from the accessibility tree.

## T4-S0 — Tab list and selection

- `browser_tabs` list before any selection: tab 0 Designer (current, URL `MGForm=FX_Orders`); tab 1 Mongoose (`favoriteContext=FX_Orders`).
- `browser_tabs` select tab 1: succeeded.

## T4-S1 — Pre-Save prerequisite snapshot (untargeted, inline)

| Prerequisite (bounded instruction) | Observed | Result |
| --- | --- | --- |
| FX_Orders open, dirty | Form tab `FX_Orders` selected; Save `button "Save" [ref=f1e28]` enabled | Met |
| Exactly two data rows | `row [ref=f1e163]`: `1` / `FX001` / `dumbbell` / `2`; `row [ref=f1e174]`: `2` / `FX002` / `eggs` / `1` | Met |
| Row one | Order Number `1`; FX001; dumbbell; Count `2` | Met |
| Row two | Order Number `2`; FX002; eggs; Count `1` (default) | Met |
| Order Numbers distinct and nonblank | `1` and `2` | Met |
| Dialogs / alerts / validation | none | Met |
| Status bar | `Count (Object 2 of 2)` | Met (focus-field prefix) |

All prerequisites matched, so the single Save was invoked.

## T4-S2 — The single toolbar Save (`button "Save"` f1e28, one click, no retry)

- Tool result: no error; no timeout; no dialog. Page URL unchanged (`favoriteContext=FX_Orders`).
- Tool-generated snapshot: `evidence/playwright/page-2026-10-13T09-23-55-844Z.yml`.
- Native response observed in the immediate state: **no alert, no toast, no message text, no validation text, no prompt.** The only change is the Save button state (below).

## T4-S3 — Immediate post-Save state (from `page-2026-10-13T09-23-55-844Z.yml`)

| Item | Readback |
| --- | --- |
| Save button | `button "Save" [disabled] [ref=f1e28]`, with `[active]` on the inner button; tooltip `Save` shown |
| Grid header | `columnheader "Order Number"` (**the required asterisk is gone**); `* Customer ID`; `* Item`; `Count` |
| Grid row 1 | `gridcell "1"` (f1e164), `"FX001"` (f1e166), `"dumbbell"` (f1e168), `"2"` (f1e170) |
| Grid row 2 | `gridcell "2"` (f1e175), `"FX002"` (f1e177), `"eggs"` (f1e179), `"1"` (f1e181) |
| Data rows | exactly two; no third row |
| Order Number textbox (current row 2) | `textbox "Order Number:" [ref=f1e192]: "2"` (no `[disabled]` or `[readonly]` attribute present in the tree) |
| Customer ID combobox | `FX002` |
| Item combobox | `eggs` |
| Count textbox | `"1"` |
| Status bar | `Count (Object 2 of 2)` |
| Dialogs | none |

Screenshot `evidence/EXP-073/save-immediate-after-one-save.png` (viewed): row headers `1` and `2` shown **without** stars; Save greyed; Order Number field shaded grey; status `Count (Object 2 of 2)`; Customer ID and Item asterisks still present.

## T4-S4 — Settled post-Save state (after `browser_wait_for` 3 s; `browser_find` "Order Number:"; snapshot `evidence/playwright/page-2026-10-13T09-24-10-173Z.yml`)

- Same as T4-S3: Save `[disabled]`; both grid rows `1`/`FX001`/`dumbbell`/`2` and `2`/`FX002`/`eggs`/`1`; status `Count (Object 2 of 2)`; no dialog; no alert.
- Screenshot `evidence/EXP-073/save-settled-both-rows.png` (viewed): row headers `1` and `2` without stars; Save greyed; status `Count (Object 2 of 2)`; Order Number field `2` shaded grey; Customer ID FX002; Item eggs; Count 1.

## T4-S5 — Row-one inspection (selection change only; no field edited)

- One click on the row-header gridcell `1` (f1e129). Tool snapshot `evidence/playwright/page-2026-10-13T09-24-21-199Z.yml`.
- Readback: `gridcell "1" [active] [selected] [ref=f1e129]`; Order Number textbox `"1"`; Customer ID combobox `FX001`; Item combobox `dumbbell`; Count textbox `"2"`; Save `[disabled]`; status `(Object 1 of 2)`.
- Screenshot `evidence/EXP-073/save-settled-row1-selected-inspection.png` (viewed): row 1 header current (outlined); Order Number `1` shaded grey; Customer ID FX001; Item dumbbell; Count 2; Save greyed; status `(Object 1 of 2)` (no caption prefix while the row is current).

## Observations

- Row-header stars: **gone** on both rows after Save (plain `1` and `2` in the screenshots). The accessibility tree does not expose stars, so this is screenshot-based.
- Save state: **disabled** immediately after Save and remains disabled on the settled snapshot and the row-one inspection.
- Order Number read-only state for saved rows: the textbox is shaded grey in every post-Save screenshot (rows 1 and 2), and the grid header asterisk is removed. The accessibility tree exposes **no** `readonly` or `disabled` attribute on the textbox. The read-only state is therefore inferred from the grey shading and the absent required marker; it is **not** confirmed by an accessibility property. No typing was attempted, as instructed.
- Status-bar count: `Count (Object 2 of 2)` with row two current; `(Object 1 of 2)` with row one current. The count token reads two rows.

## Displayed order numbers before and after Save (client-side values; not database readbacks)

| Row | Displayed before Save | Displayed after Save (grid) | Typed by worker |
| --- | --- | --- | --- |
| 1 | `1` | `1` | No |
| 2 | `2` | `2` | No |

These post-Save values are the Form's client-side display after the Save. They are not a database read and are not a recovery of persisted rows. Recovery is a later step and was not run.
