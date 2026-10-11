# EXP-059 — T4 AC-4: one native SQL Tables Save of the FX_Picture column

Run `R-20261011-203230-bdYw`, cycle 4, task T4. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `c32606a1-9a6d-4553-8e5e-6e9e919ac6b7`. Date 2026-10-11. Classification: **observed only**.

**Outcome: AC-4 PASSED at the UI level.** One native Save was invoked once. Afterwards Save is disabled on the active Sql Columns form and on the parent Sql Tables tab, with no dialog and no error. The toolbar showed no success text, and no generated DDL was displayed. Save result is evidenced by the UI state change only (Save disabled; System Data Type populated). No close, reopen, `FX_Items` open, or second Save was performed.

## 1. Pre-Save gate (fresh, read-only)

- Tab list (1) → tab 1 (Mongoose Web Client) selected (1). Snapshot `t4-snapshot-00-start.md`; screenshot `t4-01-start-state.png`.
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Active tab: `Sql Columns` (selected). Parent `Sql Tables` and inherited `FX_Items` tabs present, not acted on.
- Status `Is Nullable (SQL Columns 4 of 12)`.
- Row 4 `FX_Picture dbo FX_Items varbinary -1 checkbox checked checkbox not checked checkbox not checked`: unsaved, one row only.
- Detail: Column Name `FX_Picture`; Schema `dbo`; Table Name `FX_Items`; Data Type `varbinary`; Is Nullable checked; Length `-1`; Primary Key unchecked (disabled); System Data Type blank; Column Id blank (both pre-Save).
- Save **enabled**. No dialog. No validation message. No listbox open.
- Original 11 rows re-read: match the T1 baseline (see §4).

**Ambiguity check (brief condition: stop if the Save is unclear):** The Mongoose toolbar has exactly one Save control (`button "Save"`, ref `f1e28`). It acts on the active Form; the active Form here is the Sql Columns child of the SQL Tables workflow. The Sql Tables tab is not a separate Save surface. No second Save control was visible. I treated the single toolbar Save as the ordinary native SQL Tables maintenance Save and proceeded. This is an interpretation, recorded as such; it is not independently verified.

## 2. Native Save (exactly once)

- Toolbar Save clicked once (`f1e28`, accessible label `Save`). Result: the click completed (no timeout, no error).
- No retry. No second Save.

## 3. Immediate and settled post-Save state

| Observation | Immediate (`t4-snapshot-01-immediate-after-save.md`, `t4-02-immediate-after-save.png`) | Settled after 3 s (`t4-snapshot-02-settled-after-save.md`, `t4-03-settled-after-save.png`) |
|---|---|---|
| Toolbar Save | **disabled** | **disabled** |
| Native confirmation text | **none visible** (no toast, status text, or alert) | none |
| Dialog | none | none |
| Status bar | `Is Nullable (SQL Columns 4 of 12)` | same |
| Row 4 | `FX_Picture dbo FX_Items varbinary varbinary -1 ...` (System Data Type now `varbinary`) | same |
| System Data Type | `varbinary` (populated) | `varbinary` |
| Column Id (detail) | blank | blank |
| Generated DDL / SQL | none displayed | none |

- The **System Data Type** populated to `varbinary` after Save. Column Id remained blank in the detail pane after Save (not populated by this UI state). The brief said not to assume either field must populate; this is an observation.
- Console at this point: 1 error — `Failed to load resource: 401 @ https://yggdrasil.inforcloudservices.com/yggdrasil/security/refresh` (read-only check, `console_messages`, level error). A count of 1 error was already present since T1 (console showed 0 errors at T1 start and 1 after the first Sql Tables criteria click). It is a portal security-refresh resource, not a Save response. Not investigated (browser-level diagnostics out of scope); it did not produce a dialog or Save change. Recorded as a limitation.

## 4. Post-Save inventory (12 rows) against the T1 baseline

From `t4-snapshot-02-settled-after-save.md`:

| # | Column | Data Type | System Type | Length | Is Nullable | PK | vs T1 |
|---|---|---|---|---|---|---|---|
| 1 | FX_Item | nvarchar | nvarchar | 20 | No | Yes | match |
| 2 | FX_Description | nvarchar | nvarchar | 150 | Yes | No | match |
| 3 | FX_Cost | decimal | decimal | 18 (scale 2) | Yes | No | match |
| 4 | **FX_Picture** | **varbinary** | **varbinary** | **-1** | **Yes** | No | new |
| 5 | FX_UM | nvarchar | nvarchar | 10 | Yes | No | match |
| 6 | CreatedBy | UsernameType | nvarchar | 128 | No | No | match |
| 7 | UpdatedBy | UsernameType | nvarchar | 128 | No | No | match |
| 8 | CreateDate | CurrentDateType | datetime | — | No | No | match |
| 9 | RecordDate | CurrentDateType | datetime | — | No | No | match |
| 10 | RowPointer | RowPointerType | uniqueidentifier | — | No | No | match |
| 11 | NoteExistsFlag | FlagNyType | tinyint | — | No | No | match |
| 12 | InWorkflow | FlagNyType | tinyint | — | No | No | match |

- All 11 original columns match the T1 baseline on Name, Data Type, Length, and Is Nullable. Count 12 = 11 + FX_Picture. No duplicate, no removal.
- Defaults shown on system columns unchanged (`suser_sname()`, `getdate()`, `newid()`, `(0)`).
- Display order: FX_Picture is at position 4, between FX_Cost and FX_UM (as in T2/T3).

## 5. Parent Sql Tables state (distinction from the Sql Columns child)

- One view-only tab selection (`f1e99`, the `Sql Tables` tab heading) after Save. Snapshot `t4-snapshot-03-parent-sqltables-tab-selected.md`; screenshot `t4-04-parent-sqltables-tab-selected.png`.
- Toolbar Save **disabled**. Sql Tables: Schema `dbo`; Table Name `FX_Items`; Multi-Site unchecked; grid `FX_Items | dbo`; status `&Columns... (SQL Tables 1 of 1)` (the leading `&` is a UI status-text artifact of the Columns... label, recorded as observed).
- Constraints unchanged: `PK_FX_Items` (Primary Key, description `FX_Item`); `IX_FX_Items_RowPointer` (Index, description `RowPointer`).
- Update Current Table: disabled. Dirty/clean: **clean**.
- Distinction: the child Sql Columns and the parent Sql Tables both show clean after one Save. No separate parent Save was invoked (none needed or performed).

## 6. Final state at stop

- Active Form now: **Sql Tables** (parent), clean, Save disabled, table `FX_Items` / `dbo`. Sql Columns child tab remains open and clean (its Save was disabled in the settled snapshot).
- Inherited FX_Items runtime tab: present, not acted on.
- No dialog, no unsaved-change prompt, no listbox open.
- Tab 1 (Web Client) selected; tab 0 (Designer) not touched.

## 7. Action audit (T4, cumulative)

| Category | Count |
|---|---|
| Tab lists | 1 |
| Tab selects | 1 (tab 1) |
| Native Save | **1** (successful at UI level) |
| Columns > New | 0 |
| Column edits / typed entries | 0 / 0 |
| Form close or reopen | 0 / 0 |
| Parent Sql Tables tab selection (view-only) | 1 |
| Successful clicks | 2 (Save; Sql Tables tab heading) |
| Waits | 1 (3 s settle) |
| Snapshots | 4 (`t4-snapshot-00` … `-03`) |
| Screenshots | 4 (`t4-01` … `-04`) |
| Console-error read | 1 (1 error; 401 portal refresh) |
| Failed actions / ref-not-found / timeouts | 0 / 0 / 0 |
| Fresh-snapshot recovery / corrected inspection used | 0 / 0 |
| Browser evaluate / run-code | 0 |
| Generated SQL/DDL seen or run | 0 seen; 0 run |
| IDO, Form-definition, property-class, business-record change | 0 |
| FX_Items runtime open | 0 |

## 8. Evidence files written in T4

- `evidence/EXP-059/T4-native-save-report.md` (this report)
- `evidence/EXP-059/t4-snapshot-00-start.md`, `t4-snapshot-01-immediate-after-save.md`, `t4-snapshot-02-settled-after-save.md`, `t4-snapshot-03-parent-sqltables-tab-selected.md`
- `evidence/EXP-059/t4-01-start-state.png`, `t4-02-immediate-after-save.png`, `t4-03-settled-after-save.png`, `t4-04-parent-sqltables-tab-selected.png`
- Decisive: `t4-02` (immediate: Save disabled, System Data Type `varbinary`, no toast/dialog); `t4-03` (settled; same state); `t4-04` (parent Sql Tables clean, FX_Items dbo, constraints).
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md` (updated: T4 section and status).

Tool-generated captures under `evidence/playwright/` are not worker files.

## 9. Acceptance (T4 scope)

- **AC-3** (carried): established by T3; re-confirmed at the T4 gate.
- **AC-4: PASSED (observed, UI level).** Exactly one native Save invoked after the pre-Save gate passed; Save disabled after; no error; no unexpected consequential confirmation; no generated DDL displayed; the observed system type populated. Limit: no success message was observed, so success is inferred from the disabled Save and populated System Data Type, not from a confirmation string. Database durability not verified.
- AC-5 to AC-9: not started (out of T4 scope).

## 10. Open items and recorded limitations

1. No native confirmation text was visible. If the operator requires explicit confirmation text, that is an observation gap, not a failure signal.
2. Column Id stayed blank in the detail pane after Save.
3. The 401 console message from the portal security-refresh resource: present since T1, not Save-related, not investigated.
4. Interpretation: the single toolbar Save was taken as the SQL Tables maintenance Save (see §1).
5. Generated DDL: none displayed; none was requested or run.
6. Repository confinement: no shell; files written are listed in §8.

## 11. Next permitted step

The Form is clean (Save disabled on both the child and parent). An ordinary close of the Sql Columns child tab, then an ordinary close of the Sql Tables tab, can be considered safely without an unsaved-change prompt, but the close/reopen (AC-5) is a separate authorized step and was **not** performed in T4.
