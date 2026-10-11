# EXP-059 — T2 Columns > New (one), FX_Picture configuration, unsaved inspection

Run `R-20261011-203230-bdYw`, cycle 1, task T2. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `890234b4-5676-4f1a-84ba-0dd9c7340634`. Date 2026-10-11. Classification: **observed only**.

**Outcome: AC-3 NOT established.** One new unsaved row `FX_Picture` exists under `dbo.FX_Items`, but its Data Type is blank, Length is not set, and Is Nullable is unchecked. The required VarBinary / Var Binary type could not be selected from the rendered Data Type list. Save was not invoked. The work stopped at the pre-Save state as the brief requires.

## 1. Pre-mutation gate (read-only)

- Tab list (1) at start. The first snapshot was taken on tab 0 (Designer, `MGForm=FX_Items`) because it was the listed current tab. That was a read-only capture; nothing was clicked on it (`t2-snapshot-00-start.md`).
- Tab select (1) → tab 1 (Mongoose Web Client). Fresh snapshot `t2-snapshot-01-webclient-start.md`; screenshot `t2-01-start-sqlcolumns-state.png`.
- State at gate: identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tabs `FX_Items` (inherited, not acted on), `Sql Tables`, `Sql Columns` (selected); Sql Columns status `SQL Columns 3 of 11`; Save disabled; no dialog; 11 rows; selected row 3 FX_Cost (T1 end state).
- Baseline reconfirmed against the T1 inventory (`evidence/EXP-059/T1-baseline-report.md` §5): 11 rows FX_Item, FX_Description, FX_Cost, FX_UM, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow; FX_Picture absent (no row with that name). Gate passed; mutation was permitted.

## 2. Columns > New (exactly once)

- Toolbar **New** (`f1e29`, label `New`) clicked once on the active Sql Columns form.
- Immediate result (`t2-snapshot-02-after-new-once.md`, `t2-02-after-new-once.png`): one new row 4 with a blue star; grid rows now 12; status `Column Name (SQL Columns 4 of 12)`; Save **enabled** (dirty); Column Name empty; Schema `dbo`; Table Name `FX_Items`; Column Id empty; Data Type empty; Is Nullable unchecked; Length grey (not editable yet); no validation message; no dialog.
- The new row was inserted at display position 4 (between FX_Cost and FX_UM). The original rows kept their order and values; only the row numbers after row 3 shifted.
- New clicked **once**. No retry.

## 3. Column Name (native, detail pane)

- Typed `FX_Picture` into the detail Column Name combobox (`f1e588`), Tab once.
- Result (`t2-snapshot-03-name-entered.md`): grid row 4 reads `FX_Picture`; detail Column Name reads `FX_Picture`; Schema `dbo`; Table Name `FX_Items`; focus moved to Data Type.

## 4. Data Type (native selector) — blocker

- Clicking the Data Type combobox itself (`f1e629`) did not open its list. The field was focused and empty.
- A read-only find located an adjacent native **Open** trigger (`f1e630`). Clicked once. The list opened (`t2-snapshot-05-datatype-list-after-open.md`, `t2-04-datatype-list-after-open.png`). It is an alphabetical listbox of SQL/Mongoose data types (`ABIdType`, `ABThemeType`, `AccessAsType`, ... ). Listed entries include a lowercase `binary` option (found in the first rendered window, `find` "Binary").
- No entry matching `VarBinary`, `Var Binary`, or `varbinary` was rendered in any window. Checked by case-insensitive regex after each scroll step (`find`, four reads, none matched):
  - scroll 3000 → section `E` (`t2-05`, snapshot 06);
  - scroll 9000 → section `F/G` (`t2-06`, snapshot 07);
  - scroll 20000 → no change (`t2-07`, snapshot 08; scrollbar thumb at bottom);
  - wait 2 s, scroll 5000 → no change; regex still no match.
  - Conclusion: the rendered list ends at `GenericKeyType` in this window; the `v` section did not load. The cause (truncated or lazily loaded list, or a different option label) is **not established**.
- One further attempt: typed `varbin` into the open Data Type combobox (`f1e629`, slow typing). The list did **not** filter (`t2-08-datatype-typed-varbin.png`); the typed text was uncommitted.
- Escape (once) closed the list (`t2-09-after-escape.png`), leaving the text `varbin` in the field. Ctrl+A then Delete cleared it (`t2-10-datatype-cleared.png`, snapshot 11). Data Type is now **empty** again (the post-New state).
- Not done (deliberately): no guessed type name was committed; no `binary` or other option was chosen; no Length or Is Nullable entry; no Tab commit of Data Type.

Per the brief ("Do not guess if the data-type selector or property semantics are ambiguous"; "If the native operation ... leaves an ambiguous state, stop"), the configuration stopped here.

## 5. Baseline comparison (11 original columns, read after the New and name entry)

Horizontal view scroll (view only, `t2-snapshot-12-readback-after-hscroll.md`, `t2-11-readback-after-hscroll.png`). Grid rows read from the accessibility tree:

| Column (display row) | Data Type | System Type | Length | Decimal | Default | Is Nullable | PK | Matches T1 baseline |
|---|---|---|---|---|---|---|---|---|
| FX_Item (1) | nvarchar | nvarchar | 20 | — | blank | No | Yes | yes |
| FX_Description (2) | nvarchar | nvarchar | 150 | — | blank | Yes | No | yes |
| FX_Cost (3) | decimal | decimal | 18 | 2 | blank | Yes | No | yes |
| FX_Picture (4, NEW) | (blank) | (blank) | (not set) | — | blank | No (unset) | No | n/a — new |
| FX_UM (5) | nvarchar | nvarchar | 10 | — | blank | Yes | No | yes |
| CreatedBy (6) | UsernameType | nvarchar | 128 | — | suser_sname() | No | No | yes |
| UpdatedBy (7) | UsernameType | nvarchar | 128 | — | suser_sname() | No | No | yes |
| CreateDate (8) | CurrentDateType | datetime | — | — | getdate() | No | No | yes |
| RecordDate (9) | CurrentDateType | datetime | — | — | getdate() | No | No | yes |
| RowPointer (10) | RowPointerType | uniqueidentifier | — | — | newid() | No | No | yes |
| NoteExistsFlag (11) | FlagNyType | tinyint | — | — | (0) | No | No | yes |
| InWorkflow (12) | FlagNyType | tinyint | — | — | (0) | No | No | yes |

- Is Nullable checkboxes in the screenshot (`t2-11`): row 1 unchecked; rows 2, 3, 5 checked; new row 4 unchecked; rows 6–12 unchecked. This matches T1 for all 11 original rows (FX_UM, displayed at row 5, is checked).
- Result: all 11 original rows match the T1 baseline. Only addition: the one row FX_Picture. Grid shows 12 rows (`of 12`).
- Length and Decimal of the original rows were read from the grid cells (`t2-snapshot-12`). The Length values and the Is Nullable checkboxes for the original rows match T1.

## 6. Final state at stop

- Active Form: `Sql Columns` (child tab, selected). Parent tab `Sql Tables` present (clean). Inherited `FX_Items` runtime tab present (not acted on).
- Selected row: row 4 `FX_Picture` (blue star, new, unsaved).
- Dirty/clean: **dirty**. Save **enabled**. No unsaved-change prompt has been raised (no close attempted).
- Data Type: blank. Length: not set (grey). Is Nullable: unchecked. Validation message: none visible. Dialog: none.
- Status bar: `Column Name (SQL Columns 4 of 12)`; the Data Type status change to `Data Type (SQL Columns 4 of 12)` after the blank entry.
- No Save, no second New, no close, no reopen, no runtime FX_Items open, no IDO/Form change, no record change, no DDL.

## 7. Action counts (T2, cumulative for this task)

| Category | Count |
|---|---|
| Tab lists | 1 |
| Tab selects | 1 (tab 1; succeeded after the list) |
| Columns > New (toolbar New) | **1** (successful) |
| Save | **0** |
| Clicks (New; Data Type combobox; Data Type Open) | 3 |
| Typed entries | 2 (`FX_Picture` into Column Name; `varbin` into Data Type, uncommitted, then cleared) |
| Key presses | 4 (Tab after name; Escape; Ctrl+A; Delete) |
| Mouse moves | 2 |
| Mouse wheel | 5 (four list scrolls; one view-only grid horizontal scroll) |
| Waits | 1 (2 s) |
| Finds (read-only) | 7 |
| Snapshots | 13 (`t2-snapshot-00` to `-12`) — `t2-snapshot-00` was taken on the Designer tab (tab 0) before the select; read-only |
| Screenshots | 11 (`t2-01` to `t2-11`) |
| Dialogs opened / answered | 0 / 0 |
| Failed or ineffective actions | 3: Data Type combobox click did not open the list; typed `varbin` did not filter; list scrolling did not reach `v` entries |
| Ref-not-found errors | 0 |
| Timeouts | 0 |
| Fresh-snapshot recovery | 0 of 1 used (not needed; no ref failure) |
| Corrected inspection | 0 of 1 used |
| Browser evaluate / run-code | 0 (the wrapper's generated Playwright code strings appear in results; no evaluate tool was invoked) |
| Generated SQL/DDL seen or run | 0 |
| Business-record, IDO, Form, or property change | 0 |
| Console errors | 1 (the same count as at T1 start; source not investigated) |

## 8. Acceptance matrix (T2 scope)

| AC | T2 status | Evidence | Limits |
|---|---|---|---|
| AC-1 (carried from T1) | Established (T1) | `t1-*` files; `T1-baseline-report.md` §3 | Not re-run in T2 beyond the start gate |
| AC-2 (carried from T1) | Established (T1); re-confirmed at T2 gate | `t2-snapshot-01`, `t2-01`; §1 above | UI-level inventory, not catalogue |
| **AC-3** | **NOT established** | Row 4 FX_Picture exists, name readback (`t2-03`, `t2-snapshot-03`, `t2-snapshot-12`); Data Type blank (`t2-10`, `t2-snapshot-11`); Length not set; Is Nullable unchecked; all 11 originals unchanged (§5) | The VarBinary / Var Binary type could not be selected; Length -1 and Is Nullable not set; the four-attribute readback required by AC-3 cannot be completed |
| AC-4 – AC-9 | Not started | — | Save and later steps are out of T2 scope |

## 9. Open questions and blockers

1. **Data Type list.** The rendered Data Type list did not show a `VarBinary` / `Var Binary` entry in the scrolled windows reached (ended at `GenericKeyType`; `binary` and `bit` are present near the top). Whether the list is truncated, lazily loaded beyond a limit, or labels the type differently is **unresolved**. Possible next steps for a later authorized task: (a) a different native route to the list (for example keyboard navigation of the open list, or the Sql Tables `SQL Data Types...` control, which was not tried); (b) the operator confirms the exact native label to use. No route was attempted beyond those listed here.
2. **Pending state.** The FX_Picture row is unsaved and incomplete. It must be completed (Data Type, Length -1, Is Nullable) or discarded by the operator's chosen route before any Save. A Refresh or close with an unsaved change will raise a save-changes prompt (seen in EXP-040 T11); it was not used in T2.
3. **Display position.** The new row was inserted at position 4, not at the end. The brief does not address display order; the readback in AC-6 should compare by column name, not row position.
4. **Console error count** remains 1; not investigated (out of scope).
5. Repository confinement: no shell; this T2 wrote only the files listed in §10.

## 10. Files written by this worker in T2

- `evidence/EXP-059/T2-add-column-unsaved-report.md` (this report)
- `evidence/EXP-059/t2-snapshot-00-start.md` … `t2-snapshot-12-readback-after-hscroll.md` (13 files)
- `evidence/EXP-059/t2-01-start-sqlcolumns-state.png` … `t2-11-readback-after-hscroll.png` (11 files)
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md` (updated: T2 section)

Tool-generated (browser wrapper, not worker-authored): `evidence/playwright/page-*.yml` and `evidence/playwright/console-*.log`.

## 11. Next permitted action

Operator/coordinator decision needed before any further browser action. The pending row must be resolved (Data Type selected natively, or otherwise handled by the operator). No Save, no second New, and no close of the Sql Columns child tab are authorized by T2. The ordinary Sql Columns close is not authorized in T2 (per the bounded instruction).
