# EXP-044 T4 — Read-only SQL Tables collision gate for `FX_UMs`: observations

Date: 2026-10-10. Task T4 (task_message_id `c98a6ad6-6655-4e65-b615-042e8356e165`, cycle 4). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single session, UI level). Not replay_verified.

**Result: SQL Tables exact-name query for `FX_UMs`: observed absence (zero data rows; the displayed row is an unsaved add-mode placeholder). Positive control `FX_HelloWorld01` returned its real table row under the same procedure in the same session. Case-insensitive coverage NOT demonstrated (carried limitation). Gate verdict: supported with limitations. Creation NOT authorized (stop for coordinator review).**

## 1. Preflight

| Item | Observed |
| --- | --- |
| Tabs at start | Tab 0 `Mongoose` (Web Client, URL `favoriteContext=IdoCollections`, selected). Tab 1 Designer (`designer/default.aspx`, User scope), untouched. |
| Runtime Form tabs at start | `FX_HelloWorld01`, `Property Classes`, `IDOs` (selected). IDO Name criteria `FX_HelloWorld01` retained from T2b. |
| Dialogs / banners | None at start (`find` for dialog, alertdialog, portal-notification, unsaved: no matches). |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |

## 2. Navigation to SQL Tables (Select Form)

| Step | Observed |
| --- | --- |
| Toolbar Open inner button `f1e26` (current ref from `find`), once | Select Form dialog `f1e407` opened (filter prefilled `IdoCollections`). |
| Filter `f1e443`: click; Control+a; Backspace; type `SqlTables` with key events (`slowly`) | Two rows: **`Sql Tables` / `SqlTables`** (`f1e471`/`f1e473`) and `Sql Tables Constraint` / `SqlTablesPrimaryKey`. |
| Row Caption `f1e471`, then OK `f1e462` (label verified in the snapshot) | Form opened. URL `favoriteContext=SqlTables`. Tab `Sql Tables` selected (`f1e482`). |
| Caution alertdialog (informational, EXP-040 precedent) | Text: "Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms." Single button `OK` (`f1e618`). Fresh snapshot verified label `OK`. Clicked once. Not a save or discard prompt. |

Screenshot `t4-01-sqltables-opened-via-select-form-after-caution-ok.png`: SQL Tables tab selected in Filter in Place mode; grid row 1 blank; Attributes panel (Schema, Table Name, Multi-Site) visible at right; status `Filter in Place`. Shows the Form identity and mode. Does not show a query result.

## 3. Positive control: `FX_HelloWorld01` (grid criteria row only)

| Step | Observed |
| --- | --- |
| Click the grid criteria cell, row 1 Table Name `f1e526` | An active grid combobox editor appeared inside the grid (`combobox [active] f1e625`, inside grid `f1e521`). **The Attributes Table Name combo was not used.** |
| Plain fill `FX_HelloWorld01` into `f1e625`, then Tab | Criteria cell shows `FX_HelloWorld01`. The Attributes Table Name combo also displayed `FX_HelloWorld01` (it mirrors the current row, per `t4-02`). |
| Save state before F4 | `Save` `[disabled]` (`f1e28`). Not dirty. |
| Screenshot before F4 | `t4-02-sqltables-positive-control-criterion-committed-before-F4.png` |
| **F4, once** | **One data row**: Table Name `FX_HelloWorld01`, Schema `dbo`, Multi-Site unchecked, with constraints **`PK_FX_HelloWorld01`** (Primary Key, description `FX_Code`) and **`IX_FX_HelloWorld01_RowPointer`** (Index, `RowPointer`). **No star. Real record.** Status bar `Schema (SQL Tables 1 of 1)`. Columns... enabled. Save disabled. |

Screenshot `t4-03-sqltables-positive-control-FX_HelloWorld01-after-F4.png`. Proves: the grid criteria mechanism executes and returns a real table row with its constraints. Does not prove: absence of `FX_UMs`.

## 4. Re-entry of Filter in Place and the editable criteria editor

| Step | Observed |
| --- | --- |
| Toolbar `Filter in Place` `f1e32` (current ref from `find`), once | Criteria mode re-entered. Status bar `Filter in Place`. The grid criteria editor `f1e625` became active and retained `FX_HelloWorld01` (highlighted). |
| Verification screenshot | `t4-04-sqltables-fip-reentered-criteria-editor-state.png`: criteria row Table Name editor active (`FX_HelloWorld01` selected); Schema and Multi-Site blank criteria cells; status `Filter in Place`. The Attributes panel is white (editable). **Not used.** |

## 5. Target: exact `FX_UMs` (criteria row only)

| Step | Observed |
| --- | --- |
| Plain fill `FX_UMs` into the grid criteria editor `f1e625` | Succeeded (editor editable in criteria mode). |
| Tab (commit) | Criteria cell shows `FX_UMs`; focus moves to the criteria Schema cell. Attributes Table Name also shows `FX_UMs` (mirror). |
| Pre-execution state | `t4-05-sqltables-FX_UMs-criterion-committed-before-F4.png`: row 1 Table Name `FX_UMs` (criteria), status `Filter in Place`, Save **disabled** (`f1e28`). |
| **F4, once** | **Result: a starred row with blank Table Name and Schema** (add-mode placeholder), status bar `Table Name (SQL Tables 1 of 1)`. |
| Accessibility after F4 (`f1e504`) | Column headers `* Table Name`, `* Schema` (required markers). Row cells blank, first cell `[selected]`. Combobox `f1e625` active (placeholder's own Table Name editor). |
| Button states after F4 | `Columns...` **[disabled]**; `Update Current Table` **[disabled]**; `New Constraint...` **[disabled]**; `Modify Constraint...` **[disabled]**; `Save` **[disabled]**; `New` (toolbar) enabled. No constraint rows. |
| Screenshot | `t4-06-sqltables-FX_UMs-after-single-F4-settled.png` |

## 6. Distinguishing the placeholder from a data row

| Feature | Positive control `FX_HelloWorld01` (real row) | Target `FX_UMs` (after F4) |
| --- | --- | --- |
| Row star (new/unsaved marker) | none | **starred (★1)** |
| Table Name | `FX_HelloWorld01` | **blank** |
| Schema | `dbo` | **blank** (required marker) |
| Constraints panel | `PK_FX_HelloWorld01`, `IX_FX_HelloWorld01_RowPointer` | **empty** |
| Columns... button | enabled | **disabled** |
| Update Current Table | enabled | **disabled** |
| Status bar | `Schema (SQL Tables 1 of 1)` | `Table Name (SQL Tables 1 of 1)` |

**Interpretation.** The status count `1 of 1` does not separate the two results by itself, because the placeholder is counted. The star, blank required cells, and disabled Columns/Update/New Constraint buttons do separate them. The result is therefore **zero data rows** for `FX_UMs`, with one unsaved add-mode placeholder. This is consistent with EXP-043 and EXP-042-R3, which recorded a zero-row FiP query leaving an add-mode placeholder counted in the status bar.

## 7. What was not done

- No text was entered into the Attributes Table Name or Schema combos. Save remained disabled throughout. The placeholder was **not** typed into, saved, or discarded.
- The lowercase `fx_ums` variant was **not** run. It was hook-denied in T2b (`Exact value required: FX_UMs`). It is not retried in T4. Case-insensitive coverage is therefore not demonstrated for SQL Tables.
- No prefix query (`FX_UM*`) was run.

## 8. Errors and recovery accounting (T4)

- **Errors: 0.** No timeout, no ref-not-found, no hook denial in T4.
- Recovery snapshots: **0 of 1** used. Corrected visible inspections: **0 of 1** used. Refs were taken from current `find` and targeted snapshots before each action.

## 9. Operation counts (T4)

| Operation | Count |
| --- | --- |
| Save / New / Finish / Create Form | **0 / 0 / 0 / 0** (the "New" toolbar control was not clicked) |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Attributes or definition-field entries | **0** |
| Table or IDO definition edits | **0** |
| Wizard opened | **0** |
| Select Form dialog OK (in-page, not a prompt) | **1** (`SqlTables`) |
| Caution alert OK (informational) | **1** (verified label `OK` before clicking) |
| Form tab closes / reopens | **0 / 0** |
| Positive-control queries (F4) | **1** (`FX_HelloWorld01`, SQL Tables) |
| Target queries (F4) | **1** (`FX_UMs`, SQL Tables) |
| Plain fills executed (criteria) | **2** (`FX_HelloWorld01`; `FX_UMs`) |
| Tab commits | **2** |
| Filter in Place toolbar clicks | **1** (criteria re-entry) |
| Select Form Filter key sequences | **1** (Control+a, Backspace, type `SqlTables` slowly) |
| Screenshots | **6** (`t4-01` to `t4-06`) |
| Prompts or confirmations answered | **1** (informational caution OK) |
| Portal banner dismissals | **0** (none visible) |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

## 10. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t4-01-sqltables-opened-via-select-form-after-caution-ok.png` | SQL Tables tab selected; `Filter in Place`; blank grid row; Attributes visible | The Form opened through Select Form, in FiP mode | Any query result |
| `t4-02-sqltables-positive-control-criterion-committed-before-F4.png` | Grid criteria `FX_HelloWorld01` in row 1 Table Name; Save disabled | The positive-control criterion was committed in the grid before F4 | That F4 ran |
| `t4-03-sqltables-positive-control-FX_HelloWorld01-after-F4.png` | **One real row** `FX_HelloWorld01` / `dbo`, no star; constraints `PK_FX_HelloWorld01`, `IX_…`; status `Schema (SQL Tables 1 of 1)` | **AC-3 positive control: the grid filter executes and returns a real table row** | Absence of `FX_UMs` |
| `t4-04-sqltables-fip-reentered-criteria-editor-state.png` | FiP mode; grid criteria editor active; `FX_HelloWorld01` selected | The criteria editor is editable after explicit FiP re-entry | Any query result |
| `t4-05-sqltables-FX_UMs-criterion-committed-before-F4.png` | Grid criteria `FX_UMs`; `Filter in Place`; Save disabled | **The target criterion was committed before F4** | That F4 ran (see t4-06) |
| `t4-06-sqltables-FX_UMs-after-single-F4-settled.png` | **Starred blank placeholder** (no data row); `* Table Name`/`* Schema` required; status `Table Name (SQL Tables 1 of 1)`; Columns, Update, New Constraint disabled | **Zero data rows for `FX_UMs` after one F4; the only row is the unsaved add-mode placeholder** | Case-insensitive absence; that the placeholder is not a real table (star and disabled controls support this; not proof by a database read) |

## 11. Gate verdict (SQL Tables)

| Check | Verdict |
| --- | --- |
| Positive control `FX_HelloWorld01` (grid criteria, same session) | **Passed** (one real row, constraints shown) |
| Exact `FX_UMs` (criterion committed before F4) | **Zero data rows observed** (placeholder only) |
| Case-insensitive `fx_ums` | **Not demonstrated** (carried from T2b hook denial; not retried) |
| Prefix `FX_UM*` | Not run |
| Overall SQL Tables gate | **Observed absence, supported with limitations** |

## 12. Placeholder left in place (for coordinator awareness)

The Sql Tables tab currently shows the unsaved add-mode placeholder from the `FX_UMs` query. Save is disabled, so the placeholder is not a dirty table definition. It was **not** typed into, saved, or discarded. Closing the Form later, or running another criteria query, may raise a save or discard prompt. Any such prompt must be verified and answered by a later explicit decision, not automatically.

## 13. Final browser state (last verified)

- Tab 0 (Mongoose): `Sql Tables` tab selected (`favoriteContext=SqlTables`), Filter in Place mode, row 1 = unsaved blank placeholder, Save disabled, Columns/Update/New Constraint disabled. Other runtime tabs open: `FX_HelloWorld01`, `Property Classes`, `IDOs` (criteria `FX_HelloWorld01`, unchanged in T4).
- Tab 1 (Designer, `IdoPropertyClasses`, User scope): untouched.
- No dialog, no banner, no browser-native prompt at the time of `t4-06` and the final `find`.
