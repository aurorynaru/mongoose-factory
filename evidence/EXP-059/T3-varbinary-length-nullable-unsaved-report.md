# EXP-059 — T3 complete AC-3 on the existing unsaved FX_Picture row (Data Type, Length, Is Nullable)

Run `R-20261011-203230-bdYw`, cycle 3, task T3. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `985547f2-e02d-4c58-b2f9-ebf1cfe8e0ce`. Date 2026-10-11. Classification: **observed only**.

**Outcome: AC-3 PASSED (observed, UI level).** One unsaved row `FX_Picture` under `dbo.FX_Items` now has Data Type `varbinary`, Length `-1`, and Is Nullable checked. The 11 original columns match the T1 baseline. **Current state: DIRTY** (Save enabled). Save was NOT invoked. No New, close, reopen, SQL execution, or IDO/Form change was performed. AC-4 was not started.

## 1. Pre-entry gate (fresh, read-only)

- Tab list (1) → tab 1 (Mongoose Web Client) selected (1). Start snapshot `t3-snapshot-00-start.md`, screenshot `t3-01-start-state.png`.
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Active tab: `Sql Columns` (selected). Other tabs: `FX_Items` (inherited, untouched) and `Sql Tables` (untouched).
- Status `Data Type (SQL Columns 4 of 12)` at gate; row 4 `FX_Picture` (blue star); Column Name `FX_Picture`; Schema `dbo`; Table `FX_Items`; Data Type blank; Length grey (not set); Is Nullable unchecked.
- Save **enabled** (no disabled attribute). No dialog. No listbox open.
- Original 11 rows re-read against `T1-baseline-report.md` §5: all match (table in §5 below).

## 2. Data Type — wildcard procedure (single candidate)

Procedure applied as instructed (dropdown closed → focus Data Type text → enter `varb*` → click adjacent Open trigger once → select only an exact `varbinary` entry).

| Step | Action | Result |
|---|---|---|
| 1 | Typed `varb*` into the Data Type combobox (`f1e670`, dropdown closed), slowly | Field reads `varb*`; no list open (`t3-snapshot-01`, `t3-02-varb-typed-before-open.png`). |
| 2 | Click the adjacent Open trigger (`f1e671`) **once** | List opened, filtered to one entry (`t3-snapshot-02`, `t3-03-after-open-once-list.png`). |
| 3 | Read the list | Exactly one option: `varbinary` (accessibility `cell "varbinary"`; option ref `f1e1194`). No other option. |
| 4 | Select `varbinary` **once** (native option click) | Combobox shows `varbinary`; list closed; grid row 4 reads `varbinary`; System Data Type still blank; Length became an editable empty field (`t3-snapshot-03`, `t3-04-after-varbinary-select.png`). |
| 5 | Click Length textbox (`f1e695`) once, to move focus off Data Type | Combobox no longer active; grid row `varbinary` (committed); status `Length (SQL Columns 4 of 12)` (`t3-snapshot-04`, `t3-05-length-focused-datatype-committed.png`). |

- Data Type committed readback: combobox `varbinary`; grid row 4 `FX_Picture dbo FX_Items varbinary`.
- No substitution of `binary` or any other type. No F2 method, keyboard paging, extra scroll search, or SQL Data Types maintenance.
- Procedure classification: **observed only** (single run; the native list returned exactly one `varbinary` entry). Note the difference from T2: in T2 the list was already open and typing `varbin` did not filter; in T3 typing `varb*` happened with the dropdown closed, followed by one Open click. The mechanism (wildcard vs closed-state typing) is **not isolated**.

## 3. Length -1

- Length textbox (`f1e695`) was focused in §2 step 5. Typed `-1` (one entry), then Tab once.
- Readback: Length `-1`; grid row `FX_Picture dbo FX_Items varbinary -1` (`t3-snapshot-05-length-minus1-committed.md`, `t3-06-length-minus1-committed.png`).
- No rejection, validation message, or confirmation appeared.
- Focus moved to Default Value (empty). Default Value is blank and unchanged.

## 4. Is Nullable — one timed-out click, one corrected attempt

| Attempt | Target | Result |
|---|---|---|
| A (original) | Is Nullable checkbox `f1e674` | **Timeout** after 5000 ms: "waiting for locator ... element is visible, enabled and stable ... `<span data-ref="displayEl">` intercepts pointer events" (the checkbox's own display span). **No state change.** |
| Fresh snapshot (the one permitted) | `t3-snapshot-06-fresh-after-isnullable-timeout.md`, `t3-07-after-isnullable-timeout.png` | Is Nullable **unchecked** (grid row 4 `checkbox not checked`). Save enabled. No dialog. No validation message. |
| B (corrected attempt) | Visible label `Is Nullable` (`f1e676`, same checkbox) | Succeeded. Checkbox checked (one toggle). Grid row 4 `checkbox checked` (`t3-snapshot-07-after-isnullable-label-click.md`, `t3-08-after-isnullable-label-click.png`). |

- Net effect of the timeout: none (confirmed unchecked after it, then checked by the single label click). No duplicate toggle.
- Recovery used: 1 fresh snapshot + 1 corrected attempt (within the brief's allowance).

## 5. Complete post-entry readback and baseline comparison

Readback source: `t3-snapshot-07-after-isnullable-label-click.md` (grid rows and detail pane) and `t3-08-after-isnullable-label-click.png`.

Detail pane (FX_Picture, row 4): Column Name `FX_Picture`; Schema `dbo`; Table Name `FX_Items`; Data Type `varbinary`; Is Nullable **checked**; Length `-1`; Column Id blank (not assigned pre-Save); System Data Type blank; Decimal Position grey; Default Value blank; Primary Key unchecked (disabled); Is Computed unchecked.

Baseline comparison (grid rows, accessibility tree):

| # | Column | Data Type | System Type | Length | Dec | Default | Is Nullable | PK | vs T1 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | nvarchar | nvarchar | 20 | — | blank | No | Yes (seq 1) | match |
| 2 | FX_Description | nvarchar | nvarchar | 150 | — | blank | Yes | No | match |
| 3 | FX_Cost | decimal | decimal | 18 | 2 | blank | Yes | No | match |
| 4 | **FX_Picture (NEW)** | **varbinary** | (blank) | **-1** | — | blank | **Yes** | No | new |
| 5 | FX_UM | nvarchar | nvarchar | 10 | — | blank | Yes | No | match |
| 6 | CreatedBy | UsernameType | nvarchar | 128 | — | suser_sname() | No | No | match |
| 7 | UpdatedBy | UsernameType | nvarchar | 128 | — | suser_sname() | No | No | match |
| 8 | CreateDate | CurrentDateType | datetime | — | — | getdate() | No | No | match |
| 9 | RecordDate | CurrentDateType | datetime | — | — | getdate() | No | No | match |
| 10 | RowPointer | RowPointerType | uniqueidentifier | — | — | newid() | No | No | match |
| 11 | NoteExistsFlag | FlagNyType | tinyint | — | — | (0) | No | No | match |
| 12 | InWorkflow | FlagNyType | tinyint | — | — | (0) | No | No | match |

- Rows 1–3, 5–12 (the 11 original columns) match the T1 baseline on Name, Data Type, Length, and Is Nullable. Only addition: row 4 `FX_Picture`.
- Count: `SQL Columns 4 of 12` (12 rows). One and only one new unsaved row. No duplicate `FX_Picture`.
- Note: the grid display order places FX_Picture at position 4 (between FX_Cost and FX_UM). The brief's readback compares by name.

## 6. Observed state at stop

- Active Form: `Sql Columns` (child tab, selected). Parent `Sql Tables` clean; inherited `FX_Items` untouched.
- Selected row: row 4 `FX_Picture`.
- Dirty/clean: **DIRTY** — Save **enabled** (`button "Save"` without disabled). No validation message. No dialog. No listbox open.
- Status bar: `Is Nullable (SQL Columns 4 of 12)`.
- The Is Nullable checkbox currently holds focus.
- Observed, not changed: System Data Type stays blank and Column Id stays blank before Save. These fields are presumed to populate from the native Save; that is **not observed** yet.

## 7. Pre-Save gate assessment (AC-3)

| Requirement | Observed | Pass |
|---|---|---|
| Exactly one unsaved new column under dbo.FX_Items | one `FX_Picture` row; count 12; Schema dbo, Table FX_Items | yes |
| Name `FX_Picture` | detail + grid | yes |
| Data Type VarBinary or native Var Binary | `varbinary` (committed; grid + detail) | yes |
| Length `-1` | detail + grid | yes |
| Is Nullable checked | detail + grid (after the single label toggle) | yes |
| All existing columns unchanged | §5 table matches T1 | yes |
| No validation message, consequential confirmation, or auto-commit | none observed | yes |

**AC-3: PASSED (observed, UI level).** Limits: UI-level readback; the native grid/detail values, not stored metadata; the Data Type wildcard route is a single observed run.

## 8. Action audit (T3, cumulative for this task)

| Category | Count | Detail |
|---|---|---|
| Tab lists | 1 | before first select |
| Tab selects | 1 | tab 1 (Web Client) |
| Columns > New | **0** | not invoked (per instruction) |
| Save | **0** | not invoked |
| New / close / reopen of any Form | 0 | none |
| Successful clicks | 4 | Data Type Open trigger (1); varbinary option (1); Length textbox focus (1); Is Nullable label (1) |
| Failed clicks | 1 | Is Nullable checkbox `f1e674` — timeout, intercepted by display span; no effect |
| Typed entries | 2 | `varb*` into Data Type (dropdown closed); `-1` into Length (`fill`) |
| Key presses | 1 | Tab (after Length) |
| Snapshots | 8 | `t3-snapshot-00` … `-07` (one fresh snapshot after the timeout, counted as the recovery snapshot) |
| Screenshots | 8 | `t3-01` … `t3-08` |
| Finds / waits / wheel | 0 / 0 / 0 | none this task |
| Dialogs opened / answered | 0 / 0 | none |
| Ref-not-found | 0 | none |
| Timeouts | 1 | §4 attempt A; recovered by one fresh snapshot and one corrected attempt (label) |
| Browser evaluate / run-code | 0 | none invoked |
| Generated SQL/DDL seen or run | 0 | none displayed |
| Changes to IDO, Form, property class, business records | 0 | none |

## 9. Evidence files written in T3

- `evidence/EXP-059/T3-varbinary-length-nullable-unsaved-report.md` (this report)
- `evidence/EXP-059/t3-snapshot-00-start.md` … `t3-snapshot-07-after-isnullable-label-click.md` (8 files)
- `evidence/EXP-059/t3-01-start-state.png` … `t3-08-after-isnullable-label-click.png` (8 files)
- Decisive: `t3-08-after-isnullable-label-click.png` (detail shows Column Name FX_Picture, Schema dbo, Table FX_Items, Data Type varbinary, Is Nullable checked, Length -1, Save enabled, status 4 of 12; the detail header is partly clipped by the scroll position); `t3-snapshot-07-after-isnullable-label-click.md` (full grid readback); `t3-snapshot-02-after-open-once.md` (single `varbinary` option).
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md` (updated: T3 section and status).

Tool-generated browser captures under `evidence/playwright/` are not worker files.

## 10. Open items for the coordinator

1. **Save (AC-4) not started.** The next step is the single native Save, which needs authorization.
2. System Data Type and Column Id are blank pre-Save. They are expected to populate on Save; not observed.
3. The wildcard Data Type route is one observed run; mechanism (wildcard vs closed-state typing) not isolated. Classify as observed only; not verified.
4. The Is Nullable checkbox intercept (display span) is an environment-level stall observed once; not repeated.
5. Repository confinement: no shell. Files written are listed in §9.
