# EXP-042 — Hello World Part 1: Two Test Records Through the Web Client Runtime

**Final outcome (T4, 2026-10-10): BLOCKED.** AC-2 failed (no supported observation established zero persisted records), AC-3 failed (neither runtime input identified as FX_Code or FX_Label), AC-1 incomplete, AC-4 to AC-8 not executed, AC-9 partial. No data entry, New, Save, record insertion, deletion or runtime close was performed by the worker. No observed data-entry or persistence success. Classification: **observed only, not replay_verified**. Details: "T4 — Final blocked-outcome documentation" below.

## Outcome (operator, 2026-10-10)

**Blocked before any data mutation** (run R-20261010-164731-Mlt6, completed/blocked in cycle 6). The worker was right to stop. Operator review of `evidence/EXP-042/t2-03-runtime-after-supported-refresh-settled.png`: the `FX_HelloWorld01` runtime tab shows two inputs with no caption text (each has a bare `:`), the red Required `*` is on the **second** input, and the grid holds only the starred new-row placeholder `1`. There is no status bar.

Operator diagnosis:
- **AC-3:** the runtime inputs are uncaptioned because the FX_HelloWorld01 IDO properties have no Label String IDs (left blank in EXP-040). Position and the asterisk cannot safely map FX_Code and FX_Label.
- **AC-2:** the Web Client status bar is off by default, so no count is rendered.

The external second opinion (unverified, Infor CloudSuite Assistant) named two documented routes:
- View > User Preferences > Layout > Display Status Bar, which shows the record count and current record;
- Edit > Find Value in Collection, which opens with the current field's bound property preselected in "In Property".

Both routes are candidates for a replay (EXP-042-R2).

Harness incident (no Mongoose effect): the first external request paused with `model_mismatch` because the custom GPT's new-chat menu labels GPT-6 as `6`. The ledger shows the request was never sent. The matcher was fixed in commit 71d43fc and the run resumed.

Status (after T3, 2026-10-10): **STOPPED at the AC-2 emptiness gate (failed under the current brief; T3 found no status bar or count). AC-3 not attempted. No data entry, New, Save, record insertion, deletion or runtime close.** The T2 summary below still applies for AC-1 and AC-3. Earlier T2 status: **STOPPED at the AC-3 field-identification gate. No data entry, no New, no Save, no record inserted, no runtime close.** T1 was blocked because the inherited EXP-041-R3 runtime draft was open; in T2 that draft was **absent** (operator closure). In T2 the worker opened `FX_HelloWorld01` once through Select Form and ran one empty-criteria FiP F4 plus one supported Refresh. The grid showed only the starred new-row placeholder, with no record count or empty-result indicator. **AC-1: PARTIAL** (identity and inherited-draft closure observed; Designer state and User-scope version not established). **AC-2: NOT PROVEN** (see T2). **AC-3: FAILED / BLOCKED** (runtime inputs have no accessible names; the Designer tab is absent, so bindings cannot be read). AC-4 to AC-9 are **not evaluated**. The `FX_HelloWorld01` runtime tab that T2 opened is still open with an untouched blank add-mode record (operator decision required). Classification: **observed only, not replay_verified** (no mutation has occurred).

Date: 2026-10-10
Run / task: T1 of the EXP-042 brief (R-20261010-164731-Mlt6, cycle 0). Worker session `7eef4e85-fa1f-4002-8dc9-1d233b52130a`. Task message `fc7806ef-a7da-4cf7-a6e1-b42a89b1d2c2`.
Mode: LEARNING MODE. FX_-only scope for the Hello World tutorial (AGENTS.md, 2026-10-10). Forms stay in User editing scope.
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar, `evidence/EXP-042/t1-01-…png`).
Evidence directory: `evidence/EXP-042/`.

## T4 — Final blocked-outcome documentation (2026-10-10)

Task: T4, cycle 5, run R-20261010-164731-Mlt6, worker session `7eef4e85-fa1f-4002-8dc9-1d233b52130a`, task_message_id `1f1486ef-9f8f-4f60-9555-c28898592e33`.
Scope: documentation only. **Browser calls in T4: 0.** No Mongoose state was changed. The T1 to T3 evidence was reconciled; nothing was re-observed.

**Outcome: BLOCKED.** No data-entry or persistence success was observed. No finding is replay_verified. Every observation is from one run.

### Final AC matrix (AC-1 to AC-9)

| AC | Final status | Basis (evidence) | Limit |
|---|---|---|---|
| AC-1 | **INCOMPLETE (not passed)** | Observed: DEM identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t1-01`, `t2-01`). The inherited EXP-041-R3 runtime draft was **absent** at T2 start (operator closure observed; T2 step 1). Select Form showed the single row `FX_HelloWorld01 / FX_HelloWorld01` (`t2-01`). | **Not established:** Designer clean state, Primary Collection and User-scope version. No Web Designer tab exists in the browser, and the worker did not launch the Designer. Select Form has no scope column. |
| AC-2 | **FAILED** | Empty-criteria FiP F4 (`t2-02`) and a supported Refresh (`t2-03`) each left one starred new-row placeholder with blank cells. No record count, no "of N" text and no empty-result indicator (`t3-01`, accessibility snapshot). No status bar. | The starred row is the new-row placeholder and is not proof of an empty collection. No positive control exists in this runtime. Grid column headers are blank, so cell text cannot be attributed to a field. FX001 and FX002 matches: none visible, but not established as a zero-match result. Gate closed; no entry. |
| AC-3 | **FAILED** | Both runtime inputs (`f1e955`, `f1e962` in T2; the same unnamed inputs in T3) have **no accessible name**, caption or field-name text. The Designer bindings (`FX_CodeEdit` → `object.FX_Code`; `FX_LabelEdit` → `object.FX_Label`, EXP-041-R3 T5) could not be re-read, because the Designer tab is absent. | FX_Code Required (checked) and FX_Label (not Required) were read on the IDO surface (`t2-01` background). That corroborates the IDO property only, not which runtime input is which. Position and the asterisk were not used. **No typing occurred.** |
| AC-4 | NOT EXECUTED (never passed) | No entry. | Not applicable without AC-2 and AC-3. |
| AC-5 | NOT EXECUTED (never passed) | No New action. | Not applicable without AC-2 and AC-3. |
| AC-6 | NOT EXECUTED (never passed) | No explicit Save. Save disabled in every captured state. | Not applicable without AC-2 and AC-3. |
| AC-7 | NOT EXECUTED (never passed) | No post-Save collection read. | Not applicable. |
| AC-8 | NOT EXECUTED (never passed) | No Form-tab close or reopen. | Not applicable. |
| AC-9 | **PARTIAL** | `evidence/EXP-042/cleanup-inventory.md` is reconciled: FX001 / Factory test one and FX002 / Factory test two are listed as **NOT INSERTED**, with zero rows to delete and no deletion. This record contains this matrix, the snapshot and screenshot references, the counts, the Save outcome, the confinement audit and the final browser state. | The "exactly the two inserted rows" requirement is **not met**, because no row was inserted. Nothing is claimed as inserted. |

### Starred placeholder versus persisted rows

- **New-row placeholder.** A grid row with a blue star in the row header (number `1`) and blank data cells. It was present before and after F4 and after Refresh, and it is in the Form's add-mode state. It is not a persisted record, and the brief excludes it as proof of emptiness.
- **Persisted rows.** Would appear as data rows with cell text. No data cell showed text in any read (`t2-02`, `t2-03`, T3 accessibility snapshot). That is consistent with no persisted rows, but it is not proof, because no positive control existed and the cells have no attributable headers. AC-2 therefore remains FAILED.

### Cumulative counts (EXP-042, T1 to T4)

| Operation | Count | Where |
|---|---|---|
| Runtime Form openings by EXP-042 | **1** | T2 (Select Form OK) |
| Select Form opens / OK / Cancel | 1 / 1 / 0 | T2 |
| Select Form filter entries (key events, `slowly: true`) | 1 (`FX_HelloWorld01`); Control+a: 1 | T2 |
| Plain fills (`browser_type` without `slowly`) | **0** | — |
| FiP toolbar clicks / F4 executions | 1 / 1 | T2 |
| Refresh | 1 | T2 |
| Explicit toolbar Save | **0** | — |
| New | **0** | — |
| Delete | **0** | — |
| Typed values into runtime fields | **0** | — |
| Records inserted / edited / deleted | **0 / 0 / 0** | — |
| Form-tab closes / reopens of the runtime Form | **0 / 0** | — |
| Recovery snapshots (fresh, untargeted) | **1 of 1 used** | T2, after `Ref f1e24 not found` |
| Corrected visible inspections | **0** | — |
| Designer launches | **0** (no Designer tab was available) | — |
| Dialogs or prompts responded to | **0** | — |
| JavaScript / evaluate / run-code | **0** | — |
| Authentication / session replacement | **0** | — |
| Browser calls in T4 | **0** | — |

Read-only calls not in the T2 table: one `browser_find` for "Select Form" (T2 audit order 9). It did not change state. It is recorded here as an omission in the T2 table.

### Errors and recovery accounting

1. **T1 documentation Edit failed.** The record Edit's `old_string` did not match the table row (it lacked the `|` cell syntax); the harness audit records it as an error (T1 audit row 18). No state effect. Corrected by re-issuing the Edit with the exact row text (T1 audit row 20). T1 also contained two inaccurate existence-check statements, which were corrected in the same T1 pass.
2. **T2 `browser_network_requests` argument error.** The filter regex was rejected as invalid (T2 audit row 21). It was read-only and had no state effect. Retried without a filter (row 22).
3. **T2 `Ref f1e24 not found`.** The toolbar ref used after the Refresh was stale (T2 audit row 33). Recovery: one fresh untargeted snapshot (row 34), which was the T2 recovery allowance. No corrected visible inspection was used. No state effect.
4. **Correction to T2 final-state text.** The T2 record said the FiP toggle was active. The last T2 snapshot (after the recovery snapshot) shows the FiP button without the `active` state. The post-F4 snapshot had shown it active. The current state is recorded in the final browser state below.

No timeouts, no `beforeunload` or browser-native dialog, no prompt, no validation or duplicate-key message, and no unexpected mutation occurred.

### Repository confinement audit

Worker-written files (repo-relative):
- `experiments/EXP-042-hello-world-part-1-two-test-records-through-the-we.md`: created in T1; edited in T2, T3 and T4.
- `evidence/EXP-042/cleanup-inventory.md`: created in T1; rewritten in T2; edited in T3; rewritten in T4.
- `evidence/EXP-042/t1-01-preflight-prior-runtime-draft-still-open.png` (screenshot, T1).
- `evidence/EXP-042/t2-01-select-form-fx-helloworld01-settled-one-row-before-ok.png`, `t2-02-runtime-after-fip-f4-empty-criteria-settled.png`, `t2-03-runtime-after-supported-refresh-settled.png` (screenshots, T2).
- `evidence/EXP-042/t3-01-runtime-status-bar-accessibility-check.md` (T3).

Harness-generated (not worker-authored): `evidence/EXP-042/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`. The T1 to T3 audit files were read in T4 and are the source for the error rows above.

Browser-tool output: the browser tool wrote snapshot and console files under `evidence\playwright\` during T1 to T3 (for example `page-2026-10-10T08-55-47-066Z.yml`, `console-2026-10-10T08-47-48-618Z.log`). Earlier records describe that directory as git-ignored tool output. **This worker did not verify that ignore rule.**

Unverified portion: no shell was available (Bash is disabled), so `git status` was not run. The harness computes repository confinement from before/after Git state. This list is the worker's self-audit and is not a Git result.

### Final browser state (last observed; T4 made no browser calls)

- Mongoose tab selected. It is the only tab in the browser. No Web Designer tab exists.
- Web Client tab strip: `IDO Projects`, `IDOs`, `Sql Tables` (open from earlier work, not interacted with in EXP-042 beyond the T2 read of the IDOs surface), and `FX_HelloWorld01` (selected).
- The `FX_HelloWorld01` runtime tab was **opened by EXP-042 T2**. It shows one new-row placeholder (blue star, number `1`) with blank cells, two empty and unnamed detail inputs, New and Delete enabled, Save **disabled**, Refresh active and FiP not active. No dialog, alert, browser-native prompt or unsaved-change prompt was present in the T3 snapshot.
- **Operator closure is required and was NOT performed by the worker.** The untouched blank placeholder must be closed through its ordinary Form-tab close control, with a fresh label check on any prompt. The worker did not discard, save or close it, because the brief forbids that.
- The inherited EXP-041-R3 draft was closed by the operator before T2 (observed).

### Open blockers (as recorded, without proposing procedures)

1. AC-2: no supported observation established zero persisted records in the runtime collection.
2. AC-3: neither runtime input could be identified as FX_Code or FX_Label, and the Designer bindings could not be re-read.
3. AC-1: Designer clean state, Primary Collection and User-scope version are unverified.
4. Operator closure of the T2 runtime tab (blank placeholder, Save disabled).
5. Standing items from earlier records: no scope column in Select Form; the EXP-041-R3 T6 and T7 zero-row and one-row results remain unexplained.

## T3 — AC-2 final read-only status-bar check (2026-10-10)

Task: T3, cycle 4, worker session `7eef4e85-fa1f-4002-8dc9-1d233b52130a`, task_message_id `2006fe8c-9b86-471c-a703-3a89f6a5d2d0`. Full note: `evidence/EXP-042/t3-01-runtime-status-bar-accessibility-check.md`.

- Inspected `t2-02` (viewed): the bottom edge shows only a scroll bar; no status-bar text and no count.
- One fresh accessibility snapshot of the open runtime tab: no status-bar node, no footer text, no record count or "of N" text. The only numeric text is the grid row header `1`, the new-row placeholder's star row.
- **AC-2: FAILED under the current brief.** No indicator proves zero persisted records; none proves a count. Per the T3 instruction, the Designer and field-identification routes were not attempted, and no preference was changed.
- No browser action changed application state. The runtime tab `FX_HelloWorld01` remains open and untouched (blank add-mode record). Save disabled. No typing, New, Save, insertion, deletion, close or reopen.
- The operator must close the runtime tab (T2 and T3 blank record) through its ordinary Form-tab close control before any new task.

## T2 — Read-only preflight and data-entry gates (2026-10-10)

Task: T2, cycle 2, run R-20261010-164731-Mlt6, worker session `7eef4e85-fa1f-4002-8dc9-1d233b52130a`, task_message_id `e7c457e3-f7ca-42b4-b3b1-dfd7254531e6`.
Scope: open `FX_HelloWorld01` once; establish zero persisted rows; establish the input-to-field mapping. No data entry, New, Save, insertion, deletion, Form close or second open.

### Gate outcome

| AC | T2 status | Basis |
|---|---|---|
| AC-1 | **PARTIAL** | Inherited runtime draft absent at T2 start (`t2-` snapshot; tab strip shows only `IDO Projects`, `IDOs`, `Sql Tables`). DEM identity bar unchanged. Form identity observed in Select Form (one row). **Not established:** Designer clean state (no Designer tab), User-scope version (no scope column; Designer unavailable), Primary Collection (Designer unavailable). |
| AC-2 | **NOT PROVEN** | One starred new-row placeholder remained after FiP F4 (empty criteria) and after Refresh. No record count or empty-result indicator is rendered. No positive control exists in this runtime. Grid column headers are blank, so cell text cannot be attributed to a field. The brief states that a starred blank row alone does not prove emptiness. |
| AC-3 | **FAILED (blocked)** | Both runtime inputs have no accessible name, caption or value label. The Designer tab is absent, so the component bindings (`FX_CodeEdit` → `object.FX_Code`; `FX_LabelEdit` → `object.FX_Label`, from EXP-041-R3 T5) cannot be re-read. The FX_Code Required property was read from the IDO surface (checked), but that corroborates only the IDO property, not which runtime input it is. Position and the asterisk were not used. **No typing occurred.** |

**Stop decision:** AC-2 and AC-3 both gate data entry. Neither passed. The worker stopped before any typing.

### Steps (in order)

| # | Action | Observed result | Evidence |
|---|---|---|---|
| 1 | Fresh untargeted snapshot | Mongoose tab selected; tab strip `IDO Projects`, `IDOs` (selected), `Sql Tables`; no `FX_HelloWorld01` tab. DEM identity bar present. | snapshot (in-session) |
| 2 | `browser_tabs` (list) | One tab only: `Mongoose`. No Web Designer tab. | — |
| 3 | Toolbar **Open** (`f1e25`, label "Open") | Select Form dialog opened with a leftover filter `FX_HelloWorld01`, one row (Caption `FX_HelloWorld01`, Name `FX_HelloWorld01`). Leftover state; not typed by T2. | dialog snapshot |
| 4 | Filter textbox click (`f1e870`); **Control+a**; **browser_type `FX_HelloWorld01` with `slowly: true`** (key events) | Filter reads `FX_HelloWorld01`; Filter By `Name`; Case Sensitive and Starts With unchecked; one row. | `t2-01` |
| 5 | Wait 2 s; dialog-scoped snapshot (`f1e841`) | One row: Caption `FX_HelloWorld01`, Name `FX_HelloWorld01` (`f1e898`/`f1e900`). OK label verified (`f1e889`). | dialog snapshot; `t2-01` |
| 6 | Select Form **OK** (`f1e889`) | Runtime tab `FX_HelloWorld01` opened once; URL `favoriteContext=FX_HelloWorld01`. | fresh snapshot after OK |
| 7 | FiP toolbar click (`f1e34`, label "FiP") | Criteria row appeared with blank criteria cells. | dialog-scoped snapshot |
| 8 | **F4** once (empty criteria) | Criteria row removed; grid shows one row numbered `1` with blank cells. | `t2-02` |
| 9 | Wait 2 s; snapshot | Same single row. | snapshot |
| 10 | **Refresh** once (`f1e31`, label "Refresh") | Same single row. No dialog. | `t2-03` |
| 11 | One fresh untargeted recovery snapshot (after `Ref f1e24 not found`, which followed the Refresh) | Save disabled; New enabled; Delete enabled; Refresh active; no dialog. Runtime tab `FX_HelloWorld01` selected; inputs `f1e955` and `f1e962` unnamed. | snapshot |

### AC-2 detail (zero-row gate)

- **Form identity for the query:** Select Form row `FX_HelloWorld01` (User-scope version not shown; see AC-1). The runtime tab heading `FX_HelloWorld01`.
- **Rendered after F4 and after Refresh:** one row, row header `1` with a blue new-row star (`t2-02`, `t2-03`), two blank data cells. The screenshot shows no text in the grid and no record count.
- **Why this does not establish emptiness:** (a) the only rendered row carries the new-row star, which the brief excludes as proof; (b) no positive control exists in this collection, because the gate is "zero rows" and no known row can be shown; (c) grid column headers are blank (`f1e915`, `f1e930`; one `*` header), so a populated row could not be attributed to FX_Code or FX_Label; (d) EXP-040 and EXP-041-R3 recorded blank or lagging grid renderings after queries.
- **FX001 / FX002 matches:** none visible. Not established as "zero matches", because cell text rendering is unproven.
- **Network evidence (not relied on):** the F4 and Refresh events were `fip`/`fiplv`. The F4 response carried a `setrow` entry with payload `3` that the worker cannot interpret as a row count or index. Reading unsupported endpoint payloads is not a permitted route, so this is not used for the gate.

### AC-3 detail (field mapping)

- Runtime inputs: `textbox` `f1e955` (active; preceded by generic `:` `f1e949`) and `textbox` `f1e962` (preceded by red `*` generic `f1e958` and `:` `f1e956`). **Neither has an accessible name.** No caption text, no field-name text, no mode text.
- Designer bindings (from EXP-041-R3 T5, not re-read in T2): `FX_CodeEdit` → `object.FX_Code`, `FX_LabelEdit` → `object.FX_Label`. The Designer tab is absent, so these cannot be corroborated in T2.
- Corroboration available: IDO `FX_HelloWorld01` property grid (IDOs tab, read only): `FX_Code` String 30, key sequence 1, **Required checked** (`f1e533`); `FX_Label` String 100, **Required unchecked** (`f1e570`). This corroborates the IDO property. It does not tell which rendered runtime input is which.
- **Mapping: not established.** The worker did not infer it from position, the asterisk, or the required marker.

### Operation counts (T2)

| Operation | Count |
|---|---|
| Runtime Form opens | **1** (Select Form OK, once) |
| Select Form opens | 1 (Open toolbar click; the dialog then showed a leftover filter `FX_HelloWorld01`, which was re-entered by the verified method; OK confirmed once) |
| Select Form filter entries (key events, `slowly: true`) | **1** (`FX_HelloWorld01`); Control+a **1** |
| Plain fills (`browser_type` without `slowly`) | **0** |
| FiP toolbar clicks | 1 |
| F4 executions | 1 (empty criteria) |
| Refresh | 1 |
| Settle waits (2 s) | 3 (after filter, after F4, after Refresh) |
| New / Save / Delete / Form close / reopen | **0 / 0 / 0 / 0 / 0** |
| Rows inserted / edited / deleted | **0 / 0 / 0** |
| Typing into runtime fields | **0** |
| Dialogs responded to | 0 (no alert, no save-changes prompt appeared) |
| Recovery snapshots | 1 of 1 used (after `Ref f1e24 not found`) |
| Corrected visible inspections | 0 |
| Network read calls (inspection only) | 6 (list 2, request/response reads 4; not used as evidence) |
| JavaScript / evaluate / run-code | 0 |
| Authentication / session change | 0 |

### Evidence (T2)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-042/t2-01-select-form-fx-helloworld01-settled-one-row-before-ok.png` | Select Form dialog with Filter `FX_HelloWorld01`, Filter By Name, both checkboxes unchecked, one row `FX_HelloWorld01 / FX_HelloWorld01`, OK and Cancel visible. Behind it, the IDOs surface shows IDO `FX_HelloWorld01` (Project `FX_HelloWorldProject01`) and the FX_Code Required checkbox checked. | The Form's User-scope version or scope (no column); Designer state; runtime input identity. |
| `evidence/EXP-042/t2-02-runtime-after-fip-f4-empty-criteria-settled.png` | Runtime tab `FX_HelloWorld01`: one row with blue new-row star, numbered `1`; two empty inputs (the lower with red `*`); Save greyed; identity bar DEM. | Persisted row count; that the query executed (network-only evidence); which input is which field. |
| `evidence/EXP-042/t2-03-runtime-after-supported-refresh-settled.png` | Same runtime state after the supported Refresh. No dialog. | As above. |
| `evidence/EXP-042/cleanup-inventory.md` | Two planned rows, not inserted. | Any row exists or was inserted. |

### Final browser state (after T2)

- Mongoose tab selected (only tab). Web Client: `FX_HelloWorld01` runtime tab **open** (opened by T2 once), untouched blank add-mode record, New and Delete enabled, Save disabled. (Corrected in T4: the FiP toggle was active only in the post-F4 snapshot; the final T2 snapshot shows it not active.) No dialog or unsaved-change prompt.
- `IDO Projects`, `IDOs` and `Sql Tables` tabs remain open as found. Not interacted with (the IDOs tab was read from its snapshot only).
- **Operator action required:** close the open `FX_HelloWorld01` runtime tab (T2's blank record) through its ordinary Form-tab close control, with a fresh label check on any prompt. The worker did not do this (T2 forbids a Form close).

### Acceptance matrix (T2)

| AC | Status | Evidence | Limit |
|---|---|---|---|
| AC-1 | PARTIAL | `t2-01`; T2 snapshots | Designer and User-scope version not established |
| AC-2 | NOT PROVEN | `t2-02`, `t2-03` | Single starred placeholder; no count; no positive control; unnamed grid columns |
| AC-3 | FAILED (blocked) | Snapshots `f1e955`/`f1e962`; IDO Required evidence in `t2-01` background | No Designer tab; inputs unnamed |
| AC-4 to AC-9 | Not evaluated | — | Stopped at AC-2/AC-3 gates; no data entry |

### Open questions and blockers (T2)

1. **Designer access (blocks AC-3).** The browser has no Web Designer tab. A supported route to the Designer is needed to read component bindings. The worker did not launch the Designer from the Web Client toolbar, because that would open a Designer flow beyond a read-only inspection.
2. **Runtime field identity (blocks AC-3).** Runtime inputs have no accessible names. A supported read-only route that exposes field names (or a Designer read) must be confirmed by the operator.
3. **Persisted-row gate (blocks AC-2).** The runtime collection shows only the new-row placeholder after F4 and Refresh, with no count. A supported emptiness indicator, or an operator-accepted gate method, is needed before data entry.
4. **Open T2 runtime draft.** Operator to close it (see final state).
5. Standing items from earlier records: no scope column in Select Form; the EXP-041-R3 T6 vs T7 zero-row/one-row conflict is unexplained.

## Target (documented before any mutation; AC-1)

| Item | Identity |
|---|---|
| Form | `FX_HelloWorld01`, User scope (`ScopeName` = `anton.ramos@3mworks.com.ph`), Primary Collection `FX_HelloWorld01` (EXP-041-R3 T5 Designer read, not re-read in T1) |
| IDO | `FX_HelloWorld01` in project `FX_HelloWorldProject01` (EXP-040 T12 identity; not re-read in T1) |
| SQL table | `dbo.FX_HelloWorld01`; `FX_Code` nvarchar(30) NOT NULL, primary key; `FX_Label` nvarchar(100) nullable (EXP-040 T12 status line and T12 Stage D) |
| Authorized records | (1) `FX_Code` = `FX001`, `FX_Label` = `Factory test one`; (2) `FX_Code` = `FX002`, `FX_Label` = `Factory test two` |
| Authorized mutation | Exactly two inserts into `dbo.FX_HelloWorld01` through the runtime Form, one explicit Save. **Not performed in T1.** |

## Sources read (T1)

- `AGENTS.md`: read in full before the first browser action.
- `docs/mongoose/transcripts/hello-world-pt1.md`, lines 270–277 (the 7:40–8:01 test-data passage): "open the form in runtime mode … the form should open in add mode since we don't have any data … enter in some test data … use the new button on the toolbar to add each record once … hit the save icon." The transcript does **not** specify values, record count or names (its own section 9 says so). Trust: unverified (speech-to-text).
- `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md`: lines 1–447 (outcome, T1 gate, T1–T3 records), the T4–T9 section headings and the T5 Designer component table (lines 553–602), and the T9–T10 runtime sections (lines 742–793). **Not read:** lines 448–552 (T4 detail) and lines 603–741 (T6–T8 detail).
- `evidence/EXP-041-R3/t10-ac8-runtime-recheck-and-strict-verdict.md`: read in full.
- `experiments/EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md`: lines 1–505 (outcome, T1 summary, T8, start of T12). The T12 detail for the table and IDO (lines 506–1256) was **not** read in T1; the table definition above comes from the T12 status line and the T12 summary at the top of the record, which EXP-040 wrote after reading it.
- **Not read in T1:** `evidence/EXP-041-R3/t9-ac8-…md` (the T10 record summarises it), `harness-audit-*.md`.

## AC-1 preflight — **NOT PASSED** (stop)

| Item | Evidence | Finding |
|---|---|---|
| Usable authenticated session | Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (snapshot ref `f1e22`; screenshot `t1-01`). Portal tab `Mongoose` selected. | Observed. No sign-in or configuration screen. |
| Browser tabs | `browser_tabs list`: one tab, `Mongoose`, URL with `favoriteContext=FX_HelloWorld01`. The portal bar shows a `System Administrator` tab and the `Mongoose` tab. | **No separate Web Designer tab is listed.** The Designer state (Form tab, Save, scope) therefore could **not** be re-read in T1. |
| Expected Form identity | The Web Client tab strip shows `IDO Projects`, `IDOs`, `Sql Tables` and `FX_HelloWorld01` (`f1e93`–`f1e105`). Tab panel `FX_HelloWorld01` (`f1e105`). | Observed: a form tab titled `FX_HelloWorld01` is open in the Web Client. |
| Clean Designer state | Not observable (no Designer tab listed). | **Not established.** |
| Leftover runtime draft | Snapshot `f1e102`–`f1e154`; screenshot `evidence/EXP-042/t1-01-preflight-prior-runtime-draft-still-open.png` (viewed). Grid row with a blue new-row star and the number `1`; two empty detail inputs (`f1e151`, `f1e158`) with no value; the lower one carries a red required `*`; Save `[disabled]` (`f1e28`); New and Delete enabled. No dialog or message. | **The EXP-041-R3 runtime draft is still open.** It matches the T9/T10 description (one untouched blank add-mode record). |

**Gate result:** the brief says: "Confirm that the prior EXP-041-R3 runtime tab and its untouched blank record have been closed by the operator. If still open, stop without discarding it or opening a duplicate runtime Form." The tab and the blank record are still open. **Stopped.** The draft was not closed, discarded, typed into, or saved. No second runtime Form was opened.

## AC-2 to AC-9 — not evaluated

- **AC-2 (zero-row gate):** not run. Running it requires the target collection, which requires opening a runtime Form (Select Form) and a Filter-in-Place query. Both were blocked by the open draft and by the one-open rule. A starred blank row would not prove emptiness in any case.
- **AC-3 (field mapping):** not run. The T10 record already shows that the two runtime inputs have **no accessible name**, no caption and no field label in the rendered UI. The mapping cannot be established by the read-only method the brief allows, so it remains open for the later task.
- **AC-4 to AC-8 (entry, New, Save, close/reopen):** not performed. No mutation has occurred.
- **AC-9 (cleanup inventory):** written as `evidence/EXP-042/cleanup-inventory.md`. It records **zero** inserted rows and the two authorized target rows as not inserted.

## Carry-forward finding (from EXP-041-R3 T10; not changed here)

- The runtime `FX_HelloWorld01` opened from the Web Client has two inputs with no accessible names and no visible field labels. Mapping `FX_Code` and `FX_Label` to them needs either an operator-authorized read-only method that exposes names without interacting with the data, or a different supported route. This is an open question for the operator, not a gap the worker can fill by guessing from position or the required asterisk.

## Operations (T1, in order)

| # | Operation | Result |
|---|---|---|
| 1 | Read `AGENTS.md`, the transcript lines 270–277, the EXP-041-R3 and EXP-040 sections listed above, and the EXP-041-R3 T10 record | Read-only. |
| 2 | Glob `experiments/EXP-04*` and `evidence/EXP-04*/**/*` (existence check; output capped at 100 files) | No `experiments/EXP-042-…` file was listed; the record was created by step 7. The evidence glob did not list `evidence/EXP-042/` within its capped output; the directory was created by step 5. |
| 3 | `browser_tabs` (list) | One tab (`Mongoose`, `favoriteContext=FX_HelloWorld01`). Read-only. |
| 4 | `browser_snapshot` (fresh, untargeted; no target) | Result as in the preflight table. Read-only. |
| 5 | Write `evidence/EXP-042/cleanup-inventory.md` | Created (no browser action). |
| 6 | `browser_take_screenshot` → `evidence/EXP-042/t1-01-preflight-prior-runtime-draft-still-open.png` | Saved; viewed with Read. Shows the open draft (see above). |
| 7 | Write this record | Created. |

No click, no key press, no typing, no `browser_fill_form`, no `browser_select_option`, no `browser_navigate`, no `browser_evaluate` / run-code, no Select Form, no Open, no New, no Save, no Refresh, no FiP, no Delete, no dialog response, no Designer launch.

## Operation counts (T1)

| Operation | Count |
|---|---|
| Browser mutations (clicks, typing, key presses, New, Save, Open, Select Form, Refresh, Delete, dialog responses) | **0** |
| Read-only browser calls (tab list 1, fresh snapshot 1, screenshot 1) | 3 |
| Runtime Form opens (Select Form OK or Open) | **0** |
| Select Form dialog opens or filter queries | **0** |
| Zero-row / collection queries | **0** |
| Rows inserted / edited / deleted | **0 / 0 / 0** |
| Save (explicit or toolbar) | **0** |
| Recovery snapshots / corrected inspections | 0 / 0 (no `Ref … not found` error occurred) |
| Timeouts | 0 |
| JavaScript / evaluate / run-code | 0 |
| Authentication, session replacement, logout | 0 |
| Repository files written | 2 (`experiments/EXP-042-…md`, `evidence/EXP-042/cleanup-inventory.md`) and 1 PNG (`evidence/EXP-042/t1-01-…png`) |

## Errors and recovery accounting

1. **Experiment record path did not exist.** `experiments/EXP-042-hello-world-part-1-two-test-records-through-the-we.md` was not listed by the experiments glob (which returned the EXP-040, EXP-041, EXP-041-R2 and EXP-041-R3 records). Created by this task. Not a Mongoose error.
2. **Evidence directory.** `evidence/EXP-042/` was created by the first Write (cleanup inventory). Not a Mongoose error.
3. **Designer tab absent.** No Web Designer tab appears in the browser tab list. This is an environment observation, not a fault the worker tried to repair (the brief forbids starting or restarting Chrome/MCP, and the tab list shows only one tab). Designer state is therefore unverified. This is disclosed as a limitation of AC-1.
4. No `Ref … not found`, no timeouts, no dialog, no unintended mutation.

## Final browser state (T1)

- Web Client tab selected (`Mongoose`, the only tab). The Web Client shows the form tab `FX_HelloWorld01` selected with the blank add-mode record from EXP-041-R3 T9. **Left open, untouched, as the brief requires.** Save disabled (top toolbar, `f1e28`). The Smart Panel is open at the right. No dialog, alert, `beforeunload` prompt or unsaved-change prompt.
- The `IDO Projects`, `IDOs` and `Sql Tables` surfaces are also open in the same client, left from EXP-040 and the earlier EXP-041-R3 work. Not touched in T1. Their Save state was not individually read (only the active tab's Save is shown in the snapshot).
- No in-page dialog is open.

## Acceptance matrix (T1)

| AC | T1 status | Evidence | Limit / reason |
|---|---|---|---|
| AC-1 | **NOT PASSED** | `t1-01` (screenshot), preflight snapshot | Leftover runtime draft still open (brief requires operator closure). Designer state not observable (no Designer tab). Configuration identity, Web Client session and the target identity from the records are observed. |
| AC-2 | Not evaluated | — | Requires a runtime open and a supported collection query; blocked by AC-1. |
| AC-3 | Not evaluated | — | No query and no typing; the runtime inputs had no accessible name in EXP-041-R3 T10 and still show none here. |
| AC-4 | Not evaluated | — | No entry. |
| AC-5 | Not evaluated | — | No New. |
| AC-6 | Not evaluated | — | No Save. |
| AC-7 | Not evaluated | — | No query. |
| AC-8 | Not evaluated | — | No close or reopen. |
| AC-9 | **PARTIAL** | `evidence/EXP-042/cleanup-inventory.md` | Inventory written with two **planned** rows, both marked not inserted. No deletion. |

## Evidence

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-042/t1-01-preflight-prior-runtime-draft-still-open.png` | Web Client: `FX_HelloWorld01` form tab selected, one blank add-mode row (blue star, number `1`), two empty inputs (lower carries red `*`), Save greyed, identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, leftover tabs `IDO Projects`, `IDOs`, `Sql Tables`. | Which input is `FX_Code` or `FX_Label` (no field names visible). Form scope or version. Designer state. Whether any persisted row exists. |
| `evidence/EXP-042/cleanup-inventory.md` | The two planned rows, the table and IDO identities, cleanup ownership, zero inserted. | That any row exists or was inserted. |

## Documentation changes (T1)

- Written: `experiments/EXP-042-hello-world-part-1-two-test-records-through-the-we.md` (this record; created).
- Written: `evidence/EXP-042/cleanup-inventory.md` (created).
- Written: `evidence/EXP-042/t1-01-preflight-prior-runtime-draft-still-open.png` (screenshot, tool-written).
- Not written: any other experiment, AGENTS.md, recipe, `tools/`, memory, docs or other repository file.

## Open questions and operator actions (required before any further EXP-042 task)

1. **Close the prior runtime draft (operator).** The `FX_HelloWorld01` runtime tab with one untouched blank add-mode record (from EXP-041-R3 T9) is still open in the Web Client. The operator should close it through its ordinary Form-tab close control and answer any save-changes prompt by a fresh label check. The worker did not do this (the brief forbids discarding the draft without operator action).
2. **Make the Designer tab available (operator, if the Designer state is needed).** The browser tab list shows no Web Designer tab. A later task that needs the Designer read (AC-1 Designer clean state, AC-3 binding corroboration) needs the Designer tab present, or the operator should confirm that a Designer read is not required.
3. **Field identification (AC-3) — operator decision.** The runtime inputs expose no names. The brief forbids guessing from position or the Required marker. The operator should decide which supported read-only method may be used for this (for example, a documented read-only field-name view), or accept a stop at AC-3.
4. **Collection emptiness (AC-2).** Still to be proven by a supported query after the open draft is closed. A starred blank row alone does not prove emptiness.
5. **Standing items from EXP-041-R3** (unchanged; not resolved here): the Select Form scope column is absent; the early T6 zero-row lookup versus later one-row results is unexplained; the portal footer version `2026.10.01` differs from the Designer About version.

## Next permitted action

No browser action is permitted until the operator decides on the T2 blockers (Designer access for AC-3; a supported field-identity route; an emptiness method for AC-2) and closes the T2 runtime draft. A later task must repeat AC-2 and AC-3 in its own session. No insertion may occur until both pass in that session.
