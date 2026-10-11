# EXP-059 — T1 read-only prerequisite and baseline report

Run `R-20261011-203230-bdYw`, cycle 0, task T1. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `8252da17-360e-4a60-8b74-ca8fd9024c6c`. Date 2026-10-11. LEARNING MODE. Classification: **observed only**.

Scope of this report: T1 only (read-only prerequisite and baseline). No Columns > New, no property edit, no Save, no close or reopen of SQL Tables, no open of the FX_Items runtime Form, no Designer interaction.

## 1. Source review (before any browser action)

| Source | Read | Notes |
| --- | --- | --- |
| `AGENTS.md` | Full | FX_-prefixed SQL table/column scope extension (2026-10-10); tenant-wide objects; record every created object; evidence under `evidence/<EXP>/`. |
| `docs/mongoose/transcripts/hello-world-pt4.md` lines 89–104 (Section 1, 00:18–01:32) | Lines 1–90 and 89–104 | Narrated steps: open SQL Tables, accept an OK prompt (text not supplied), filter Table Name to Items, F4, Columns > New, Picture / Var Binary / Is Nullable checked / Length -1, Save and close. Tutorial boundary: schema changes need explicit authorization. Adapted here to `dbo.FX_Items` / `FX_Picture`. |
| `experiments/EXP-058-...md` | Full | Prior FX_Items Designer and runtime work. Relevant lesson: custom behaviour is observed through the native UI only; grid lag observed. No SQL-table precedent. |
| `experiments/EXP-051-...md` | Full | Runtime FX_Items record workflow; F4 query; close/reopen recovery pattern. Lesson: Filter in Place query, then F4; UI-level evidence only. |
| `experiments/EXP-049-...md` | Lines 1–302 of 356 | SQL Tables precedent: caution alert "Please be very careful using these forms" dismissed with OK (T17); criteria cell became a combobox after click (T17); Columns... opened Sql Columns read-only (T13, T17). Lines 303–356 (outcome section) not read. |
| `experiments/EXP-040-...md` | Lines 1–505 of 1256 | Key lesson (T10 incident): the Sql Tables **Attributes > Table Name** combobox is the record field, not a query field; query only through the grid's Filter in Place criteria row. Wizard/T8/T12 sections partly read (through the Sql Columns read in T11). Remaining lines not read. |
| `EXP-059` experiment record | Did not exist at T1 start (glob `experiments/EXP-059*` returned nothing; the brief path was not present). | Created by this T1 worker at the brief's path (see experiment record). |

## 2. Repository starting state

- Source: the session-start `gitStatus` snapshot supplied with this session (branch `claude-harness`). No shell was available to re-run `git status`; this is therefore a session-start snapshot, not a re-verified state.
- Pre-existing modifications (not EXP-059 changes; not touched by this worker): `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`.
- Recent commits at session start: `4da06c2 EXP-059: approved brief`, `ffd3c1c EXP-059: draft brief`.
- The `tools/` directory was not read (brief boundary).

## 3. Browser identity and gate (AC-1)

- Tab list (one, read-only): tab 0 = Designer `MGForm=FX_Items` (not touched); tab 1 = Mongoose Web Client (portal URL with `favoriteContext=FX_Items`).
- Tab select (one): tab 1 selected (succeeded after the list).
- Start snapshot `t1-snapshot-00-webclient-start.md` and screenshot `t1-01-webclient-start-state.png`:
  - Identity bar: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
  - Only the inherited `FX_Items` runtime tab was open (3 records: dumbbell, eggs, guitar; `FX_Refresh (Object 1 of 3)`; value box `45 pound iron`; Save disabled). No sign-in, configuration, or session challenge. No portal notification banner. No dialog.
  - Console at start: 0 errors, 2 warnings.
- Open > Select Form (native route):
  - Toolbar **Open** clicked once (`f1e25`). The Select Form dialog opened with its Filter prefilled `FX_Items` (one row: FX_Items / FX_Items). Snapshot `t1-snapshot-01-select-form-dialog.md`.
  - Filter textbox set to `SqlTables` (typed). The grid did **not** re-filter on the fill alone (`t1-snapshot-02-select-form-filtered.md`; 2 s wait and a find showed the same list). One **End** key press in the focused filter box refreshed the list (`t1-snapshot-03-select-form-after-end.md`): rows `Sql Tables / SqlTables` and `Sql Tables Constraint / SqlTablesPrimaryKey`.
  - Row `Sql Tables` (`SqlTables`, not the constraint row) clicked once; row active (`t1-snapshot-04-select-form-row-selected.md`). OK clicked once. Page context changed to `favoriteContext=SqlTables`.
- Opening prompt (captured before action; `t1-snapshot-05-sqltables-opening-immediate.md`, screenshot `t1-02-sqltables-opening-immediate.png`):
  - Title: `Sql Tables` (alertdialog; warning icon).
  - Exact text: **"Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms."**
  - Responses offered: one button, **OK** only.
  - Disposition: informational; no field changed; offers no save, delete, or conversion choice. Dismissed with OK once (`t1-snapshot-06-sqltables-after-caution-ok.md`). This matches the caution recorded as informational in EXP-049 T17 and EXP-040 T12.
- After dismissal: no dialog; Save disabled; no unsaved-change prompt. Sql Tables tab is the selected internal tab; the inherited FX_Items tab is still present (not acted on in T1).

**AC-1 status: established.** The Web Client SQL Tables maintenance Form opened through the native route without an authentication or session challenge. The single opening prompt was captured verbatim and dismissed after verification as informational.

## 4. Table target (AC-2, part 1)

- Filter in Place: no toolbar FiP click was used. The Sql Tables tab already showed the Filter in Place state (funnel icon beside the heading; status bar `Filter in Place`) after the caution was dismissed. The grid row 1 Table Name cell (`f1e802`) was clicked once; it became an editable grid combobox (`t1-snapshot-07-sqltables-criteria-cell-clicked.md`, `t1-03-sqltables-criteria-cell-clicked-pre-typing.png`).
- Criteria typed into that grid combobox (not into the Attributes Table Name combobox): `FX_Items`. Tab once (focus moved to the Schema criteria cell; nothing typed there). Pre-F4 state: `t1-snapshot-08-sqltables-criteria-FX_Items-before-F4.md`, `t1-04-sqltables-criteria-FX_Items-before-F4.png` (criteria row shows `FX_Items`; Schema cell empty; Save disabled).
- F4 pressed once. Settled state (`t1-snapshot-09-sqltables-after-F4-FX_Items.md`, `t1-05-sqltables-FX_Items-after-F4-settled.png`):
  - Status bar: `Schema (SQL Tables 1 of 1)`.
  - Grid: one record row — Table Name `FX_Items`, Schema `dbo`, Multi-Site unchecked.
  - Attributes: Schema `dbo`, Table Name `FX_Items`, Multi-Site unchecked.
  - Constraints: `PK_FX_Items` (Primary Key, Unique checked, Clustered checked, description `FX_Item`); `IX_FX_Items_RowPointer` (Index, Unique checked, Clustered unchecked, description `RowPointer`).
  - Update Current Table: disabled. Save: disabled. No dialog.
  - The Sql Tables heading lost the funnel icon once the query returned (the filter mode ended).

**Target finding:** exactly one `dbo.FX_Items` record was returned by the native query. The "1 of 1" count and the grid row identify the target. This is UI-level evidence from the Web Client, not a database-catalogue read.

## 5. Complete pre-change column inventory (AC-2, part 2)

Source: Sql Columns form opened once through the native **Columns...** button for the target (`t1-snapshot-10-sqlcolumns-baseline.md`, `t1-06-sqlcolumns-baseline-overview.png`). Status: `Column Name (SQL Columns 1 of 11)`. Schema `dbo` and Table `FX_Items` shown for all 11 rows in the grid.

The grid renders columns horizontally. Full cell values for rows 1–2 were present at the initial position; a horizontal scroll (view-only mouse wheel, two steps, `t1-snapshot-11-...md`, `t1-snapshot-12-sqlcolumns-after-hscroll-2.md`, `t1-07`, `t1-08`) exposed Data Type, Length, Decimal Position, Default Value, Is Nullable, Primary Key, Key Sequence, Is Computed for rows 1–11. Row 3 (FX_Cost) was also verified in its detail pane (`t1-snapshot-13-...md`, `t1-09-sqlcolumns-row3-FX_Cost-detail.png`: Column Id 4, decimal, Length 18, Decimal Position 2, Is Nullable checked, Primary Key unchecked, Default blank). The Is Nullable checkbox column in `t1-08` matches the grid for all 11 rows.

| # | Column Name | Data Type | System Data Type | Length | Decimal Position | Default Value | Is Nullable | Primary Key / Key Seq | Column Id (where read) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | nvarchar | nvarchar | 20 | — | blank | **No** | **Yes / 1** | 2 (detail) |
| 2 | FX_Description | nvarchar | nvarchar | 150 | — | blank | **Yes** | No | 3 (grid) |
| 3 | FX_Cost | decimal | decimal | 18 | 2 | blank | **Yes** | No | 4 (detail) |
| 4 | FX_UM | nvarchar | nvarchar | 10 | — | blank | **Yes** | No | not read in T1 |
| 5 | CreatedBy | UsernameType | nvarchar | 128 | — | `suser_sname()` | No | No | not read in T1 |
| 6 | UpdatedBy | UsernameType | nvarchar | 128 | — | `suser_sname()` | No | No | not read in T1 |
| 7 | CreateDate | CurrentDateType | datetime | — | — | `getdate()` | No | No | not read in T1 |
| 8 | RecordDate | CurrentDateType | datetime | — | — | `getdate()` | No | No | not read in T1 |
| 9 | RowPointer | RowPointerType | uniqueidentifier | — | — | `newid()` | No | No | not read in T1 |
| 10 | NoteExistsFlag | FlagNyType | tinyint | — | — | `(0)` | No | No | not read in T1 |
| 11 | InWorkflow | FlagNyType | tinyint | — | — | `(0)` | No | No | not read in T1 |

Notes on the inventory:
- "Is Nullable" for rows 1–11 reads from the grid checkbox column and is visually confirmed in `t1-08` (row 1 unchecked; rows 2–4 checked; rows 5–11 unchecked). Rows 1 and 3 are also confirmed in their detail panes (`t1-06`, `t1-09`).
- Key Sequence: only FX_Item is a primary key (sequence 1). PK_FX_Items is the table's primary key constraint.
- "Column Id" was not read for rows 4–11 in T1. It is not part of the T1 requirement (Name, Data Type, Length, Is Nullable) and is not needed for the AC-2 comparison; the AC-6 comparison in a later task should read it if it is to be compared.
- Length for FX_Cost is 18 with Decimal Position 2 (system type decimal).
- Eleven rows total; status `of 11` confirms no hidden row.

## 6. FX_Picture absence (AC-2, part 3)

- Exact comparison: none of the 11 Column Name values equals `FX_Picture`.
- Case-insensitive comparison: none of the 11 values equals `fx_picture` in any letter case, and none contains the substring `picture`.
- Conclusion: **FX_Picture does not exist** in `dbo.FX_Items` (observed in the Sql Columns UI, `t1-snapshot-10`, `t1-snapshot-12`).

**AC-2 status: established** (one target identified; complete 11-row inventory with Name, Data Type, Length, and Is Nullable; explicit absence finding).

## 7. Limits

1. The SQL Tables query is a Web Client Filter in Place query. Its match mode (exact or contains) is not shown by the UI. The query returned exactly one row, `FX_Items`, so the match was exact for this result, but the mode itself was not inspected.
2. The Sql Columns view is the Mongoose UI rendering, not a database-catalogue query. Physical SQL metadata is not independently verified.
3. The Select Form dialog was captured in accessibility snapshots only (no screenshot of that dialog).
4. Column Id was read for only three of the eleven columns (FX_Item, FX_Description, FX_Cost); not needed for T1 gating.
5. The Sql Columns grid horizontal scroll was done with a view-only mouse wheel over the grid (`mouse_move_xy` at 450,330; wheel deltaX 400, then 600). This is a coordinate-based view action; the rows and cell values were then read from the accessibility tree.
6. A console error count changed from 0 to 1 at the grid criteria-cell click (snapshot `t1-snapshot-07`). Its source was not investigated (browser-level diagnostics are out of scope).
7. The tool results contain wrapper-generated Playwright code strings. The worker did not invoke any browser evaluate or run-code tool.
8. Inherited FX_Items runtime tab remains open (not acted on; EXP-059 final-step close is for a later task).
9. The Sql Columns child tab is open (`Sql Columns`, child of the Sql Tables Form). Its ordinary close must be handled before the single Sql Tables tab close in the later AC-5 step (EXP-049 T17 closed Sql Columns first, then Sql Tables).

## 8. Action audit (T1, cumulative for this task)

| Category | Count | Detail |
| --- | --- | --- |
| Tab lists | 1 | `browser_tabs list` before the first select |
| Tab selects | 1 | Tab 1 (Web Client); succeeded after the list |
| Toolbar clicks / row clicks / dialog buttons (click actions) | 7 | Open (1); Select Form row (2); Select Form OK (3); caution OK (4); Table Name criteria cell (5); Columns... (6); Sql Columns row 3 header (7) |
| Typed entries | 2 | Select Form Filter = `SqlTables` (1); grid Table Name criteria = `FX_Items` (1). No Attributes combobox entry. No record field entry. |
| Key presses | 3 | End (refresh of Select Form list) (1); Tab (criteria commit) (1); F4 (query) (1) |
| Mouse move / wheel | 1 / 2 | View-only horizontal scroll of the Sql Columns grid |
| Waits | 1 | 2 seconds (Select Form list refresh check) |
| Find (read-only) | 1 | text `SqlTables` |
| Snapshots | 14 | `t1-snapshot-00` to `-13` |
| Screenshots | 9 | `t1-01` to `t1-09` |
| Forms opened | 2 | Sql Tables (Select Form OK; one open); Sql Columns (child, via Columns...; one open) |
| Forms closed | 0 | None |
| Dialogs opened / answered | 2 / 2 | Select Form (OK, 1); Sql Tables caution alertdialog (OK, 1). No other prompt. |
| Save | 0 | Save disabled at every observed state |
| Columns > New | 0 | Not performed (T1 stop point) |
| Column property edits | 0 | None |
| Constraint actions / Update Current Table | 0 | Update Current Table disabled |
| Record edits / business-record mutations | 0 | None |
| Runtime FX_Items open or close | 0 | Inherited tab not acted on |
| Failed or ineffective actions | 1 | The Select Form Filter fill (`SqlTables`) did not refresh the list on its own; resolved by one End key press. Not a ref failure. |
| Ref-not-found errors | 0 | None |
| Timeouts | 0 | None |
| Fresh-snapshot recovery used | 0 of 1 | Not needed |
| Corrected inspection used | 0 of 1 | Not needed |
| Browser evaluate / run-code | 0 | Denied and not used |
| Repository files written by this worker | see §10 | |

## 9. Acceptance matrix (T1 scope)

| AC | T1 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Established** | `t1-snapshot-00-webclient-start.md`, `t1-01-webclient-start-state.png` (identity bar, inherited FX_Items tab, no challenge); `t1-snapshot-05-sqltables-opening-immediate.md`, `t1-02-sqltables-opening-immediate.png` (exact caution text, OK only); `t1-snapshot-06-sqltables-after-caution-ok.md` (dismissed; Save disabled); this report §3 and §1 source review | Opening prompt is one caution alert; a later window (beyond the immediate snapshot) was not separately observed for other prompts. Source review of EXP-040 partial (see §1). |
| AC-2 | **Established** | Target: `t1-snapshot-09-sqltables-after-F4-FX_Items.md`, `t1-05-sqltables-FX_Items-after-F4-settled.png` (one row dbo.FX_Items; `1 of 1`). Inventory: `t1-snapshot-10`, `-11`, `-12`, `-13`; `t1-06`, `t1-07`, `t1-08`, `t1-09`. FX_Picture absence: §6 | UI-level inventory, not catalogue; Column Id partially read; match mode of Filter in Place not inspected |

## 10. Files written by this worker in T1

Written (new):
- `evidence/EXP-059/T1-baseline-report.md` (this report)
- `evidence/EXP-059/t1-snapshot-00-webclient-start.md` … `evidence/EXP-059/t1-snapshot-13-sqlcolumns-row3-FX_Cost-detail.md` (14 files)
- `evidence/EXP-059/t1-01-webclient-start-state.png` … `evidence/EXP-059/t1-09-sqlcolumns-row3-FX_Cost-detail.png` (9 files)
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md` (created: the experiment record named by the brief; T1 section)

Tool-generated (browser wrapper, not worker-authored): `evidence/playwright/page-*.yml` and `evidence/playwright/console-*.log` files written automatically by the browser tool during T1. Not counted as worker files.

## 11. Next permitted step (not started)

T1 stops here. No Columns > New has been performed. The next step, if authorized, is the single pre-Save configuration task: add FX_Picture (Var Binary, Length -1, Is Nullable checked) through Columns > New exactly once, then read back the unsaved row and the existing inventory before any Save. The Sql Columns child tab (open now) and the inherited FX_Items runtime tab remain in place.
