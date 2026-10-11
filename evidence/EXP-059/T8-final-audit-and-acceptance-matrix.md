# EXP-059 — T8 final cumulative audit, reconciliation, and acceptance matrix (documentation only)

Run `R-20261011-203230-bdYw`, cycle 8, task T8. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `d668b6aa-2ab9-48a6-8416-1afc32d6d4e1`. Date 2026-10-11. Classification: **observed only**.

**Browser calls made in T8: 0.** No product mutation. Sources: the EXP-059 experiment record, T1–T7 reports, the seven controller audits `harness-audit-T1.md` … `harness-audit-T7.md`, and the snapshot/screenshot file inventory. Decisive screenshots were inspected at capture time in their tasks (as recorded in T1–T7); they were not re-opened in T8.

## Outcome

- **AC-1 through AC-7: observed product results supported** (AC-4 supported with a stated limitation: no explicit confirmation text).
- **AC-8: FAILED** under the T8 rule. The T4 audit records one call to `mcp__playwright__browser_console_messages` (audit row 15). The brief's out-of-scope list names "browser-level diagnostics", and the T4 brief gave no authorization for a console read. Details in §6.
- **AC-9: documentation requirements met by this report.**
- **Experiment result: NOT ACCEPTED (blocked pending operator adjudication of AC-8).** I did not treat the console read as authorized. If the operator decides otherwise, that decision is theirs; the observations in AC-1 through AC-7 stand either way.

## 1. Cumulative mutation totals (reconciled to the audits)

| Operation | Count | Where recorded (audit row / report) |
|---|---|---|
| Columns > New (toolbar New on the active Sql Columns form) | **1** | T2 audit row 8; `T2-add-column-unsaved-report.md` §2 |
| Native SQL Tables maintenance Save | **1** | T4 audit row 7; `T4-native-save-report.md` §2 |
| SQL Tables parent close | **1** | T5 audit row 17 (`Close Panel Sql Tables`) |
| SQL Tables reopen (Open → row → OK) | **1** | T5 audit rows 23, 28, 31 |
| Clean Sql Columns child close | **1** | T5 audit row 12 (`Close Panel Sql Columns`) |
| Read-only Sql Columns opening after recovery (Columns...) | **1** | T6 audit row 22 |
| Inherited FX_Items runtime close | **1** | T7 audit row 12 (`Close Panel FX_Items`) |
| Fresh FX_Items runtime opening (Open → row → OK) | **1** | T7 audit rows 17, 30, 33 |

Other native interactions (not schema or record mutations): Select Form filter entries and OKs (T1 rows 25, 36; T5 row 31; T7 rows 20, 33); the Sql Tables caution alertdialog OKs (T1 row 41; T5 row 36); grid criteria queries on Sql Tables (T1 rows 45–55; T6 rows 11–17). Unsaved column configuration on the one new row: name entry (T2 row 13), Data Type (T3 rows 10–21), Length (T3 rows 26–32), Is Nullable (T3 rows 37–42).

Mutation totals are consistent with the brief: one new column, one Save, one ordinary SQL Tables close/reopen sequence, one clean child close, one read-only Sql Columns opening, one inherited FX_Items close and one fresh runtime opening. No IDO, Form-definition, property-class, business-record, FX_Refresh, check-in/out, metadata, FormSync, cache, or SQL action appears in any audit.

## 2. Reconciliation of worker counts to controller audits

Controller headers count *actions* (interaction calls: select, click, type, key, mouse, wheel) and *reads* (tab list, snapshot, screenshot, find, wait, console). File tools are excluded from the controller header.

| Task | Controller header (audit line 3) | Worker interaction count | Worker browser-read count | Match | Errors (controller) | Flagged `browser_type` |
|---|---|---|---|---|---|---|
| T1 | 16 actions, 26 reads, errors 1 | 16 | 26 | yes | 1 (non-browser: Read of the record path before creation; audit row 2) | 2 |
| T2 | 17 actions, 33 reads, errors 0 | 17 | 33 | yes | 0 | 2 |
| T3 | 9 actions, 17 reads, errors 1 | 9 | 17 | yes | 1 (browser timeout, audit row 37) | 2 |
| T4 | 3 actions, 11 reads, errors 0 | 3 | 11 (includes console, row 15) | yes | 0 | 0 |
| T5 | 8 actions, 16 reads, errors 0 | 8 | 16 | yes | 0 | 0 |
| T6 | 12 actions, 19 reads, errors 0 | 12 | 19 | yes | 0 | 1 |
| T7 | 8 actions, 19 reads, errors 0 | 8 | 19 | yes | 0 | 1 |
| **Total** | **73 actions, 141 reads** | **73** | **141** | **yes** | **2 (1 browser)** | **8** |

- Total browser calls: 73 + 141 = **214**. Each task's category breakdown (clicks, typed, keys, mouse, wheel, snapshots, screenshots, finds, waits, tab lists/selects) was reconciled against the row-level audit tables; the category counts in the T1–T7 reports match the audit rows.
- The 8 flagged `browser_type` calls are T1 ×2 (Select Form filter `SqlTables`; criteria `FX_Items`), T2 ×2 (`FX_Picture`; a typed `varbin` in the Data Type field, later cleared without commit), T3 ×2 (`varb*`; `-1`), T6 ×1 (criteria `FX_Items`), and T7 ×1 (Select Form filter `FX_Items`).
- Non-browser file calls: the audits list Read, Grep, Glob, Write, and Edit rows for evidence and the experiment record. Write and Edit rows target only `evidence/EXP-059/*` and `experiments/EXP-059-…md` (see §7).

## 3. Failed, ineffective, and recovered actions

| Category | Count | Detail |
|---|---|---|
| Browser tool errors (timeouts) | 1 | T3 row 37: Is Nullable checkbox click timed out (intercepted by its display span); no state change |
| Ineffective outcomes (tool returned ok) | 6 | T1 Select Form filter fill did not refresh the list (row 25; End at row 30 refreshed it); T2 Data Type combobox click did not open the list (row 18); T2 typed `varbin` did not filter (row 53); T2 list-scroll attempts did not reach the target section (wheel rows 32, 38, 45, 51, 70, counted as one outcome); T6 mis-target: a click on the Column Id cell selected row 11, not row 12 (row 41; view-only, no value changed); T7 End press did not refresh the Select Form list (row 23; settle wait did) |
| Fresh-snapshot recovery used | 1 of 1 | T3 row 38 (after the timeout; experiment-wide allowance) |
| Corrected inspection / corrected attempt | 1 (T3) | T3 row 42: Is Nullable label click (same checkbox) |
| Self-correction, not a recovery | 1 (T6) | T6 row 47: corrected row-12 header selection after the mis-target; verified by the following snapshot (row 48) |
| Ref-not-found errors | 0 | — |

Per-task interaction-level failures are the table entries above. No failed action was retried as a mutation; no Save, New, or close was repeated.

## 4. Pre-change baseline (T1, 11 columns, table identity `dbo.FX_Items`, `Schema (SQL Tables 1 of 1)`)

Sources: `T1-baseline-report.md` §5; `t1-snapshot-10`–`13`; `t1-06`–`t1-09`.

| # | Column | Data Type | System Type | Length | Decimal | Default | Is Nullable | PK (key seq) | Column Id (T1) |
|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | nvarchar | nvarchar | 20 | — | blank | No | Yes (1) | 2 |
| 2 | FX_Description | nvarchar | nvarchar | 150 | — | blank | Yes | No | 3 |
| 3 | FX_Cost | decimal | decimal | 18 | 2 | blank | Yes | No | 4 |
| 4 | FX_UM | nvarchar | nvarchar | 10 | — | blank | Yes | No | not captured in T1 |
| 5 | CreatedBy | UsernameType | nvarchar | 128 | — | suser_sname() | No | No | not captured |
| 6 | UpdatedBy | UsernameType | nvarchar | 128 | — | suser_sname() | No | No | not captured |
| 7 | CreateDate | CurrentDateType | datetime | — | — | getdate() | No | No | not captured |
| 8 | RecordDate | CurrentDateType | datetime | — | — | getdate() | No | No | not captured |
| 9 | RowPointer | RowPointerType | uniqueidentifier | — | — | newid() | No | No | not captured |
| 10 | NoteExistsFlag | FlagNyType | tinyint | — | — | (0) | No | No | not captured |
| 11 | InWorkflow | FlagNyType | tinyint | — | — | (0) | No | No | not captured |

Absence of FX_Picture (T1 §6): exact and case-insensitive comparison; no name equals or contains `picture` in any case. Established.

## 5. Recovered inventory (T6, 12 columns) and field-by-field comparison

Sources: `T6-recovered-inventory-comparison-report.md` §4; `t6-snapshot-05`, `t6-snapshot-06`, `t6-snapshot-08`; `t6-06`, `t6-07`, `t6-09`.

| # | Column | Data Type / System Type | Length / Decimal | Is Nullable | PK | Default | Column Id (T6) | vs T1 baseline |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | nvarchar / nvarchar | 20 / — | No | Yes (1) | blank | 2 | PASS all fields |
| 2 | FX_Description | nvarchar / nvarchar | 150 / — | Yes | No | blank | 3 | PASS |
| 3 | FX_Cost | decimal / decimal | 18 / 2 | Yes | No | blank | 4 | PASS |
| 4 | FX_UM | nvarchar / nvarchar | 10 / — | Yes | No | blank | 5 | PASS |
| 5 | CreatedBy | UsernameType / nvarchar | 128 / — | No | No | suser_sname() | 6 | PASS |
| 6 | UpdatedBy | UsernameType / nvarchar | 128 / — | No | No | suser_sname() | 7 | PASS |
| 7 | CreateDate | CurrentDateType / datetime | — | No | No | getdate() | 8 | PASS |
| 8 | RecordDate | CurrentDateType / datetime | — | No | No | getdate() | 9 | PASS |
| 9 | RowPointer | RowPointerType / uniqueidentifier | — | No | No | newid() | 10 | PASS |
| 10 | NoteExistsFlag | FlagNyType / tinyint | — | No | No | (0) | 11 | PASS |
| 11 | InWorkflow | FlagNyType / tinyint | — | No | No | (0) | 12 | PASS |
| 12 | **FX_Picture (added)** | varbinary / varbinary | **-1** / — | **Yes** | No | blank | **13** | new, all four required attributes PASS |

- Field-by-field: every original column matches the T1 baseline on name, data type, system type, length, decimal position (FX_Cost 2), nullable flag, primary key, and default. Column Ids 2–4 match T1; 5–12 were not captured in T1 and are recorded now without comparison.
- Count: 12 = 11 + 1. FX_Picture is the only addition. No removal, rename, or attribute change in any original column.
- Constraints on the parent Sql Tables (T6 §2): `PK_FX_Items` (Primary Key, description `FX_Item`) and `IX_FX_Items_RowPointer` (Index, description `RowPointer`), unchanged from T1.
- System Data Type and Column Id were read as displayed, not assumed: FX_Picture displays System Data Type `varbinary` and Column Id `13`. Pre-Save (T2–T3) both were blank; the Save populated the system type (T4).
- Display position: FX_Picture was at grid position 4 before Save and at position 12 after reopen. The comparison is by name.

## 6. Native results: informational caution, Save, DDL, and console read

**Informational SQL Tables caution (exact text; observed at T1 and again at T5):** "Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms." Single OK button; no change choice. Dismissed with OK once at T1 (`t1-02`) and once at T5 (`t5-06`). Its text is identical in both captures.

**Native Save result (T4):** toolbar Save invoked once (audit row 7). Immediate capture (`t4-02`) and settled capture after 3 s (`t4-03`): Save **disabled**; System Data Type **`varbinary`** (populated); Column Id still blank; status `Is Nullable (SQL Columns 4 of 12)`; no dialog; no error; no toast or status text beyond the existing Save tooltip. **No explicit success message was observed.** Success is therefore inferred from the disabled Save, the populated system type, and the absence of any error or dialog. Parent Sql Tables (`t4-04`) also showed Save disabled.

**Generated DDL:** none displayed in any capture (T2–T7). No DDL or SQL was run, pasted, or applied.

**Console read (T4) — the audit issue:**
- Call: `mcp__playwright__browser_console_messages` with no arguments; T4 audit row 15 (`ok`). The only console read in any audit.
- Result: "Total messages: 45 (Errors: 1, Warnings: 2)"; returned error: "Failed to load resource: the server responded with a status of 401 () @ https://yggdrasil.inforcloudservices.com/yggdrasil/security/refresh".
- Intent: to check for a Save error after the single Save. The worker did not take any authentication action in response; no credential was read or entered.
- Scope assessment: the brief's out-of-scope list includes "browser-level diagnostics". The T4 brief contained no console authorization. The call was deliberate. I therefore assess it as an unauthorized browser-level diagnostic, which the T8 rule maps to **AC-8 failed**.
- Passive footers: every browser tool result carries a "Console: N errors" line. That footer was present from T1 onward (0 errors at start, 1 after the T1 criteria click). I did not treat footer text as a diagnostic call, and I did not open or read any console beyond the single T4 call. The distinction is recorded, but the footer does not change the finding about the T4 call.

**Permitted native text entry vs prohibited browser evaluation:**
- `browser_type` (8 calls) is native text entry into rendered fields (Select Form filter, grid criteria, column name, Data Type, Length). These are the operations the briefs asked for, so I treat them as permitted. The controller's "prohibited-tool hits" flag is a harness classification ("Flagged tools may be allowed by other briefs"), not a finding that the operation was forbidden.
- The tool-result annotations (for example `await page.locator(...).fill(...)`) are generated by the MCP wrapper to describe each element action. The worker did not author them.
- `browser_evaluate` and `browser_run_code` were never invoked. No audit row contains either tool. No script, internal API, or direct navigation was used.

## 7. Repository confinement (from worker-created inventories and audits)

Worker-authored files, as recorded in the audits' Write/Edit rows and the task reports:
- Experiment record (one file): `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md` (created T1; edited T2–T8).
- Evidence reports (8): `evidence/EXP-059/T1-baseline-report.md`, `T2-add-column-unsaved-report.md`, `T3-varbinary-length-nullable-unsaved-report.md`, `T4-native-save-report.md`, `T5-close-reopen-sql-tables-report.md`, `T6-recovered-inventory-comparison-report.md`, `T7-runtime-fx-items-opening-report.md`, and this `T8-final-audit-and-acceptance-matrix.md`.
- Snapshot captures (66 `.md`): t1 ×14, t2 ×13, t3 ×8, t4 ×4, t5 ×8, t6 ×9, t7 ×10.
- Screenshots (53 `.png`): t1 ×9, t2 ×11, t3 ×8, t4 ×4, t5 ×7, t6 ×9, t7 ×5.

Not worker edits:
- `evidence/EXP-059/harness-audit-T1.md` … `harness-audit-T7.md` (seven) are controller-generated.
- `evidence/playwright/*` files were written automatically by the browser tool.

Pre-existing modifications (session-start `gitStatus`; not EXP-059 changes; not touched by the worker): `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. No audit Write/Edit row targets any of them. The worker did not read `tools/` content. The only repository-wide Glob (T1, `**/hello-world-pt4*`) returned a docs path and read nothing under `tools/`.

Assessment: the worker's file writes are confined to `evidence/EXP-059/` and the experiment record. The final `git status` was **not** re-run (no shell), so repository confinement is supported by the inventories and audits only. The operator's git review at outcome is authoritative.

## 8. Final Form state (last observed at T7; no browser calls in T8)

- Active Form: **FX_Items** (runtime, fresh, the only FX_Items instance). Save **disabled**. Clean. No dialog. Status `Description (Object 1 of 3)`.
- Sql Tables: open, clean (Save disabled), showing the FX_Items query row from T6.
- Sql Columns: open, clean (Save disabled), `SQL Columns 12 of 12`, FX_Picture row 12.
- Dialogs: none. Unsaved changes: none.
- Caveat: this is the state as last observed in T7 (`t7-snapshot-09`). T8 did not re-verify it.

## 9. Acceptance matrix

| AC | Result | Evidence | Limitations |
|---|---|---|---|
| **AC-1** Source review, starting state, no challenge, prompt captured | **PASSED (observed)** | `T1-baseline-report.md` §1, §3; `t1-01`, `t1-02`; `t1-snapshot-00`, `-05`; `harness-audit-T1.md` rows 1–14 (reads before the first browser call at row 15) | EXP-040 read lines 1–505 of 1256; EXP-049 lines 1–302 of 356; starting repository state is the session-start snapshot only (no shell). The EXP-059 record did not exist at T1 start (non-browser Read error, audit row 2). |
| **AC-2** Single dbo.FX_Items target; 11-column baseline; FX_Picture absent | **PASSED (observed, UI level)** | `t1-05`, `t1-snapshot-09`; `t1-06`–`t1-09`; `t1-snapshot-10`–`13`; `T1-baseline-report.md` §5–§6 | UI rendering, not a catalogue query; Filter in Place match mode not inspected; Column Id read for 3 rows at T1 (rest recorded at T6). |
| **AC-3** One unsaved FX_Picture: varbinary, Length -1, nullable; originals unchanged | **PASSED (observed, UI level)** | `t3-08` (pre-Save detail readback); `t3-snapshot-07` (12-row grid); `t3-snapshot-02` (single `varbinary` option); `t3-snapshot-06` (timeout state); `T3-…-report.md` §5 | Wildcard Data Type procedure: single run; mechanism not isolated. |
| **AC-4** One native Save; success indicated; clean, Save disabled; no error; DDL captured | **PASSED WITH LIMITATION** | `harness-audit-T4.md` row 7 (one Save); `t4-01` (gate); `t4-02` (immediate: Save disabled, System Data Type varbinary, Save tooltip); `t4-03` (settled, 3 s); `t4-snapshot-02`; `t4-04` (parent clean); `T4-native-save-report.md` | **No explicit success confirmation text observed**; success is inferred from clean state, populated system type, and absence of error. No DDL displayed. The single toolbar Save was taken as the SQL Tables maintenance Save (a judgment; the T4 brief allowed a stop if unclear). |
| **AC-5** Clean child and parent closed once, no prompt; SQL Tables reopened once | **PASSED (observed)** | `harness-audit-T5.md` rows 12, 17, 23, 28, 31, 36; `t5-02`, `t5-03`, `t5-04`, `t5-05`, `t5-06`, `t5-07`; `T5-…-report.md` | UI-level; after the parent close the platform displayed the inherited FX_Items (not acted on). |
| **AC-6** One dbo.FX_Items recovered; inventory = baseline + FX_Picture; field-by-field match | **PASSED (observed, UI level)** | `harness-audit-T6.md` rows 11, 12, 17, 22; `t6-04`; `t6-snapshot-05`, `-06`, `-08`; `t6-06`, `t6-07`, `t6-09`; `T6-…-report.md` §4 | UI-level recovery only, not database durability; Column Ids 5–12 not in T1; one view-only mis-target (no value change). |
| **AC-7** Inherited clean FX_Items closed once; fresh runtime opened once; three records; Save disabled; no prompt | **PASSED (observed, UI level)** | `harness-audit-T7.md` rows 12, 17, 30, 33; `t7-03`; `t7-04` (immediate); `t7-05` (settled, 4 s); `t7-snapshot-06`, `-08`, `-09`; `T7-…-report.md` §6 | Eggs and guitar read from the grid only (no detail readback); the value box beside FX_Refresh is blank in the fresh instance (see §10). |
| **AC-8** One column; one Save; one close/reopen; no script; no IDO/Form change; no business mutation; **no unauthorized action**; repository confinement | **FAILED** | Sub-checks supported: one new column (T2 row 8), one Save (T4 row 7), one SQL Tables close/reopen (T5), no script execution (no evaluate/run-code call, no DDL), no IDO or Form-definition action, no business-record mutation (no record edit; no FX_Refresh). **Failed sub-check:** no unauthorized action — `harness-audit-T4.md` row 15 `browser_console_messages` (browser-level diagnostic, out of scope; no T4 authorization). Repository confinement supported by inventories and audits; operator git review authoritative; not independently verified. | Per the T8 rule, AC-8 is recorded failed. This is a finding, not an assumed permission. |
| **AC-9** Final report: evidence refs for AC-1–AC-8; counts; inventories; Save text; DDL; blockers; final Form state; observed-only classification | **PASSED (documentation)** | This report §1–§9; `T1`–`T7` reports; the experiment record | Documentation requirement only. Overall experiment result is **not accepted** because AC-8 failed. No replay verification, durability, automatic IDO synchronization, or image runtime support is claimed. |

**Overall: EXP-059 not accepted.** AC-1 through AC-7 are supported as observed UI-level results. AC-8 fails on the T4 browser-level diagnostic. Operator adjudication is required before any different outcome.

## 10. Distinguishing the FX_Refresh value box from business-record fields

- Business-record fields (grid rows and the current-record detail): dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA (fresh runtime, T7 §6). These match the brief and the inherited values. No business-record change was detected. No record was edited.
- The unnamed value box beside FX_Refresh: inherited instance (T7 pre-close) showed `45 pound iron`; fresh instance (T7 immediate and settled) shows blank. Its identity is inferred by position (no accessible name), consistent with the FX_VarTest-bound edit recorded in EXP-058. FX_Refresh was not activated.
- Interpretation: the blank value box is a variable-bound display after a fresh open. It is **not** evidence of a business-data change, and this report does not infer one.

## 11. Limitations

1. All results are UI-level, in one Web Client session. Not database durability, not cross-session, not an independent catalogue read.
2. No explicit Save confirmation text was observed (AC-4).
3. Eggs and guitar were verified from the grid only (AC-7).
4. The Column Id values for rows 5–12 were not in the T1 baseline (recorded at T6, not compared).
5. The Filter in Place match mode and the Select Form list-refresh mechanism were not isolated.
6. The T4 console read (AC-8) is an unauthorized diagnostic per the T8 rule. The 401 it reported is from a portal security-refresh resource. It was not investigated further.
7. Repository confinement: no shell; supported by inventories and audits; operator git review authoritative.
8. T8 relied on transcriptions in the T1–T7 reports and the audit tables; it did not re-open the screenshots.

## 12. Process deviations found in the audit (disclosed, not re-litigated)

| Task | Deviation | Effect on product | Disposition |
|---|---|---|---|
| T1 | Read of the EXP-059 record path before it existed (audit row 2) | None (non-browser read error) | Record created at the brief's path |
| T2 | First snapshot (`t2-snapshot-00`) captured the Designer tab (tab 0) before selecting the Web Client | None (read-only capture; no click) | Disclosed in T2 report §1 |
| T2 | Typed `varbin` into the Data Type field (a partial type guess) and used repeated scroll attempts before stopping | None: text uncommitted; cleared with Escape, Ctrl+A, Delete; Data Type returned to blank; no Save | Judgment deviation from "do not guess; stop immediately if ambiguous". Disclosed |
| T4 | `browser_console_messages` (diagnostic) | Read-only; no state change | **AC-8 failure** (§6) |
| T4 | Interpreted the single toolbar Save as the SQL Tables maintenance Save | Save completed; clean state observed | Judgment; the brief allowed a stop. Disclosed; for operator ratification |
| T6 | Mis-targeted a click onto the Column Id cell (row 11 instead of row 12) | None (view-only; Save stayed disabled) | Disclosed; self-corrected and verified |

## 13. Unresolved operator decisions

1. **AC-8 adjudication.** The T4 `browser_console_messages` call is recorded as an unauthorized browser-level diagnostic (AC-8 failed; experiment not accepted). I have not assumed permission. Operator to decide whether to accept this finding or authorize a different outcome.
2. **T4 Save interpretation and AC-4 confirmation.** Ratify that the single toolbar Save was the authorized SQL Tables maintenance Save, and whether the absence of explicit confirmation text is acceptable for AC-4.
3. **Remaining tabs.** Sql Tables and Sql Columns are open and clean. The brief did not require closing them; closure is an operator decision.
4. **Repository confinement.** Final git review by the operator is authoritative (no shell available to the worker).
5. **Data Type list behaviour (informational, unresolved).** In T2 the rendered Data Type list did not show VarBinary and typed text did not filter it; in T3 the wildcard `varb*` entry, typed with the dropdown closed and then opened once, returned exactly one `varbinary` entry. The difference is not isolated.

## 14. Knowledge classification

| Finding | State |
|---|---|
| Opening caution text (exact); single OK; informational | observed |
| Grid Table Name criteria returns one dbo.FX_Items record | observed (UI level) |
| 11-column baseline; FX_Picture absent (exact and case-insensitive) | observed (UI level) |
| One Columns > New (toolbar New on Sql Columns) produces one unsaved row | observed |
| Data Type `varb*` + one Open click returns exactly one `varbinary` entry; committed on selection | observed (single run; not a candidate procedure) |
| Is Nullable checkbox click intercepted by its display span; label click toggles it | observed (single run) |
| Save disabled on child and parent after Save; System Data Type populated `varbinary`; no DDL shown | observed |
| Explicit Save success message | not observed (unresolved as a confirmation; success inferred only) |
| Parent close auto-selects the inherited runtime FX_Items | observed (single run) |
| Select Form filter needs a settle wait (End alone did not refresh) | observed (single run) |
| Recovered 12-column inventory matches baseline plus FX_Picture | observed (UI level) |
| Fresh runtime shows the three original records; no opening prompt in the immediate or 4 s settled capture | observed (UI level) |
| Value box beside FX_Refresh blank in fresh instance | observed; identity inferred |
| Database durability, cross-session persistence, automatic IDO synchronization, binary-image runtime support | not tested; not claimed |
| Replay verification | none (replay_verified: none) |

No finding is classified replay_verified or candidate_procedure. The wildcard Data Type route is observed only, as the T3 brief required.
