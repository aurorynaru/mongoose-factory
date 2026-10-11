# EXP-060 — T6 final report: acceptance matrix, cumulative audit, field comparison, ownership, inventory

- Run `R-20261011-215916-hvC7`, experiment EXP-060, cycle 5, task T6 (documentation-only final audit).
- Worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`; task_message_id `919e37f4-b0c7-4916-82db-73e1a1b509a6`.
- Date 2026-10-11 (system date). Editing scope User. Target `FX_Picture`.
- **Browser calls in T6: 0.** No Mongoose action, no tab selection, no screenshot, no snapshot, no query. T6 used only Glob, Grep, Read and file Write/Edit on the EXP-060 record and this directory.
- **Classification: observed only.** Not replay_verified. No claim of independent database durability, automatic IDO integration, or PNG runtime functionality.
- **Outcome for coordinator review (not declared here):** the operation sequence completed as briefed. AC-1 to AC-7 are supported at the observed, UI and accessibility level. AC-8 and AC-9 are supported with the limits in §1 and §8.

## 1. Acceptance matrix (AC-1 to AC-9)

Status key: **Supported (observed)** = a direct native observation exists for the check. **Supported (inferred)** = the check rests on an inference the record states. **Supported with limits** = supported, but a stated limit applies.

| AC | Status | Direct observations (exact evidence) | Inferred conclusions | Limitations |
| --- | --- | --- | --- | --- |
| **AC-1** Sources reviewed; repository start state; Web Client usable; Property Classes opens via native route without challenge | **Supported (observed)** | Sources read in T1: AGENTS.md (full); `docs/mongoose/transcripts/hello-world-pt4.md` lines 105–117 (Section 2); EXP-059 (full); EXP-048 (lines 1–572 of 1142); EXP-047-R2 and EXP-049 (Grep for targeted terms only). Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t1-01-webclient-initial-state.png`). Maintenance Form heading `Property Classes`, URL `favoriteContext=IdoPropertyClasses`, status `Filter in Place`, Save disabled, no dialog (`t1-02-property-classes-opened-via-select-form.png`; `t1-05-precreation-zero-result-accessibility.yml`). | Start state is the operator-provided session-start git status, not re-verified (no shell). | Designer scope (User) not visible on the runtime Form; "Site Developer" context not verified. EXP-048 was read only through line 572 of 1142; EXP-047-R2 and EXP-049 were searched for targeted terms, not read in full. The brief asked for these records to be read before browser use. |
| **AC-2** One exact-name pre-creation query for `FX_Picture`; zero matches; query and Form visible before New | **Supported (observed, display level)** | Query criterion `FX_Picture` before F4, echo row, other criteria blank (`t1-03-precreation-criteria-FX_Picture-before-query.png`). After one F4 and 2 s: **zero data rows**; one blue-star add-mode placeholder (Class Name blank); status `Base Class (IDO Property Classes 1 of 1)`; Save disabled; no dialog (`t1-04-precreation-query-FX_Picture-settled.png`). Accessibility: `* Class Name` column header, Save `[disabled]`, Check In and Undo Check Out `[disabled]` (`t1-05-precreation-zero-result-accessibility.yml`). | No property class named `FX_Picture` existed in the display before New. | Display-level result. No positive control in the same session (the brief allowed one query). Case variants not typed. The placeholder is inferred, from its Save-disabled state, not to be a saved record. |
| **AC-3** One unsaved class configured: Name `FX_Picture`, Binary, -1, varbinary, PNG; Base Class, Domain, Label String ID blank; each field committed and read back before Save | **Supported (observed, UI and accessibility level)** | One New (audit #6). Class Name `FX_Picture`; Data Type `Binary`; Length `-1`; Column Data Type `varbinary` (F2 lookup showed exactly one entry, `varbinary`, which was clicked once; committed in combobox and grid; `t2-02-column-data-type-varb-f2-lookup.png`); Binary Format `PNG` (options JPEG, PNG, TIFF; PNG clicked once). Pre-Save accessibility readback (`t2-03-pre-save-accessibility-tabpanel.yml`): all five values match; Base Class, Domain IDO Name, Domain Property, Domain List Properties and Label String ID have no value. Visual: `t2-04-pre-save-configuration-visual.png`. T3 gate re-check: `t3-00-pre-save-gate-accessibility.yml`, `t3-01-pre-save-gate-visual.png`. | New reused the single T1 placeholder row (one row, `1 of 1`, Save enabled); it did not add a second row. | The New-record identity is inferred from the one-row grid and counter; no database read. Blank fields are accessibility state, not stored values. Revision No, Revision Date, Locked By and Access As were populated by the system, not typed. |
| **AC-4** One ordinary toolbar Save after AC-3; Form clean; attributes visible; any native response captured verbatim | **Supported (observed); native response: none displayed** | One Save (audit #7, toolbar `Save`). Immediately after: Save `[disabled]`; pending star removed; `* Class Name` header asterisk removed; status unchanged (`t3-02-immediate-after-single-save.png`). Settled after 2 s: Save `[disabled]`; one data row `FX_Picture`; Binary, -1, varbinary, PNG retained; blanks retained (`t3-03-settled-after-save-accessibility.yml`; visual `t3-05-settled-after-save-top-checkout-visible-2.png`). No warning, error, confirmation or status text appeared (regex find in T3 matched only DevTools panel headers). | Success is inferred from the disabled Save, the cleared pending indicators and the retained values. | No success text was shown, so no response text can be quoted. No database read; durability not verified. Save was not repeated. |
| **AC-5** After Save, checkout status and ownership visibly recorded through the native Form; owner matches operator; no checkout action | **Supported (observed owner); checkout status interpreted** | Owner: `textbox "Locked By:"` = `anton.ramos@3mworks.com.ph` (`t3-03`; visible clipped in `t3-05`). Identity bar shows the same operator (`t3-01`, `t3-05`). Check In and Undo Check Out changed from `[disabled]` (unsaved, `t2-03`/`t3-00`) to enabled (`t3-03`, solid blue in `t3-05`). Re-read at T4 pre-close (`t4-00`, `t4-01`) and T5 (`t5-04`). | Target is checked out to the operator, because the owner matches and the checkout controls are enabled. | No labelled "checked out" or status field exists in the Form. The status is interpreted from control state, not verified. No check-in, check-out or undo control was activated (audit: no click on those controls in T1–T5). |
| **AC-6** Clean Property Classes Form closed exactly once with no prompt; reopened exactly once via Open > Select Form; reopened Form usable and clean | **Supported (observed, UI level)** | Close: one click on `Close Panel Property Classes` (audit T4 #7); no unsaved-changes prompt; no dialog; tab absent (`t4-01-pre-close-property-classes-tab.png`, `t4-02-post-close-tab-state.png`, `t4-03-post-close-accessibility.yml`). Reopen: toolbar Open → Select Form row `Property Classes` / `IdoPropertyClasses` → OK (audit T4 #14, #17, #19); URL `favoriteContext=IdoPropertyClasses`; heading `Property Classes` selected; Save `[disabled]`; New `[disabled]` (Filter in Place); no dialog or challenge (`t4-04-reopened-property-classes-via-select-form.png`, `t4-05-reopened-accessibility.yml`). | The close and reopen each took effect once. | The reopened view is blank Filter in Place with no record; it does not show persistence. Persistence was established only by T5's query (AC-7). The close and reopen are confirmed by visible state, not by a database or metadata read. |
| **AC-7** One post-reopen Filter in Place query for `FX_Picture`; one matching record; recovered configuration equals AC-3; checkout compared with AC-5; Save disabled | **Supported (observed, UI and accessibility level)** | One F4 (audit T5 #11) after `FX_Picture` was typed into Class Name (`t5-02-recovery-criterion-FX_Picture-before-f4.png`). Settled: one data row `FX_Picture`; status `1 of 1`; no duplicate or placeholder (`t5-03-recovery-settled-after-f4.png`). Full accessibility readback (`t5-04-recovered-accessibility.yml`). Scrolled visual (`t5-05-recovered-fields-scrolled-visual.png`). Save `[disabled]`. Locked By = operator (same as T3). Check In and Undo Check Out enabled. Field matrix in §3. | The recovered record is the one saved in T3. This is inferred from one matching row, the exact name, and identical system fields. | Same-session UI persistence; no database read. Checked-out status interpreted from control state. Base Class is outside the visual crop, but the accessibility readback covers it. |
| **AC-8** Cumulative audit proves the required counts; no other artifact modified; no checkout, unload, diagnostic, script or unauthorized action | **Supported with stated limits** | Controller audits `harness-audit-T1.md` to `harness-audit-T5.md` (all in `evidence/EXP-060/`): every task shows `errors=0`, `exact mismatches=0`, `Audit limitations: []`. Cumulative required counts (§2): New 1, Save 1, pre-creation query 1, recovery query 1, close 1, reopen 1, F2 1. No checkout-control, unload, Designer, FormSync, cache, SQL, console, network or JavaScript tool appears in any audit. Write and Edit calls in the audits target only `experiments/EXP-060-…md` and `evidence/EXP-060/`. | No other property class, IDO, SQL table, Form definition or business record was modified. This is inferred from the absence of any such call in the audits and the worker's own action logs. | Confinement is supported by the worker-written inventory (§7) and the controller audits, not by an independent check. No database or metadata read was made. The authoritative git review is reserved for the operator. The six `browser_type` flags are native text entry (§4); a flag is not treated as a violation. |
| **AC-9** Final report with decisive evidence for AC-1 to AC-8, field values, counts, Save behaviour, ownership, blockers, limitations, repository audit and final Form state; observed-only classification | **Documentation requirements met; outcome classification observed only** | This report (`T6-final-report.md`) plus the EXP-060 record. Decisive references are in §1. Field values in §3. Counts in §2. Save behaviour in §5. Ownership in §4. Close and reopen boundary in §6. Inventory in §7. Final state in §9. | The classification is observed-only. | AC-9's completeness depends on AC-8's limits. No replay, durability, IDO-integration or PNG-runtime claim is made. |

**Are AC-8 and AC-9 fully supported?** AC-9 is complete as documentation. AC-8 is supported on the controller audits and the worker's inventory, and it is limited because the "no other artifact modified" element rests on the absence of such calls rather than an independent check. I'd call AC-8 **supported with stated limits**, not fully independently verified. This is for the coordinator to adjudicate.

## 2. Cumulative action audit (T1–T5, controller audits)

### 2.1 Controller totals per task

| Task | Controller "actions" (incl. tab select) | Controller "reads" | Flagged `browser_type` | Errors | Exact mismatches |
| --- | --- | --- | --- | --- | --- |
| T1 | 9 | 19 | 2 | 0 | 0 |
| T2 | 16 | 19 | 3 | 0 | 0 |
| T3 | 5 | 11 | 0 | 0 | 0 |
| T4 | 5 | 12 | 0 | 0 | 0 |
| T5 | 6 | 10 | 1 | 0 | 0 |
| **Total** | **41** | **71** | **6** | **0** | **0** |

The controller's "actions" count excludes `browser_wait_for`, which I used three times (T1, T3, T5). The controller's reads count includes Read, Grep, Glob, snapshots, finds, screenshots and tab listings. My own per-task reports reconcile with these totals.

### 2.2 Required and interaction counts (cumulative)

| Operation | Count | Where (audit row) |
| --- | --- | --- |
| **New** (toolbar) | **1** | T2 #6 |
| **Save** (toolbar) | **1** | T3 #7 |
| **Pre-creation query** (F4, Class Name `FX_Picture`) | **1** | T1 #39 |
| **Post-reopen recovery query** (F4, Class Name `FX_Picture`) | **1** | T5 #11 |
| **Clean Form close** (`Close Panel Property Classes`) | **1** | T4 #7 |
| **Reopen** (toolbar Open → Select Form → row → OK) | **1** | T4 #14, #17, #19 |
| **F2 varbinary lookup** | **1** | T2 #23 |
| Checkout-management activations (Check In, Undo Check Out, check-out) | **0** | none in any audit |
| Unload, metadata or cache operations, FormSync | **0** | none |
| Designer open or Designer tab action | **0** | every tab select used index 1 (Web Client) |
| Browser console, network or other diagnostic calls | **0** | none in any audit (see §4 on tool-generated files) |
| JavaScript, evaluate or run-code | **0** | none in any audit |
| Dialogs answered | **0** | none appeared |
| Errors, ref-not-found, timeouts | **0** | audits: `errors=0` |

Notes on the counts:
- The Select Form route was used twice: once for the initial open (T1, with the End key refresh) and once for the reopen (T4). The reopen was the one permitted reopen; the T1 open was the initial open, not a reopen.
- The New count is one invocation. Whether it created one or reused the placeholder is inferred (§3). The T5 recovery query returned one `FX_Picture` row, which is consistent with one record.

### 2.3 Non-mutating interaction counts (cumulative)

| Interaction | Count | Source |
| --- | --- | --- |
| Clicks | 15 | T1 3 (Open, row, OK); T2 7 (New, Data Type Open, Binary, Column Data Type Open, varbinary, Binary Format Open, PNG); T3 1 (Save); T4 4 (close, Open, row, OK) |
| Typed text entries (`browser_type`) | 6 | T1 2; T2 3; T5 1 (see §4) |
| Key presses | 10 | T1 3 (End, Tab, F4); T2 5 (Tab ×4, F2); T5 2 (Tab, F4) |
| Mouse wheel (view only) | 3 | T3 2; T5 1 |
| Pointer move (view only) | 2 | T3 1; T5 1 |
| Tab lists / tab selects (index 1 only) | 5 / 5 | one each per task |
| Waits (2 s) | 3 | T1, T3, T5 |
| `browser_find` | 28 | T1 7; T2 12; T3 3; T4 4; T5 2 (reconciled to the audit rows) |

Find rows by audit: T1 rows 20, 23, 32, 33, 34, 43, 44 (7); T2 rows 9, 10, 13, 15, 17, 20, 26, 29, 31, 36, 37, 40 (12); T3 rows 8, 9, 23 (3); T4 rows 8, 9, 15, 18 (4); T5 rows 21, 22 (2). Total **28**.

## 3. Field-by-field comparison: T2 pre-Save, T3 post-Save, T5 recovered

Sources: T2 `t2-03-pre-save-accessibility-tabpanel.yml`; T3 `t3-03-settled-after-save-accessibility.yml`; T5 `t5-04-recovered-accessibility.yml`. Required values are the AC-3 baseline.

| Field | AC-3 required | T2 pre-Save | T3 post-Save | T5 recovered | Match |
| --- | --- | --- | --- | --- | --- |
| Class Name | `FX_Picture` | `FX_Picture` | `FX_Picture` | `FX_Picture` | Yes |
| Data Type | `Binary` | `Binary` | `Binary` | `Binary` | Yes |
| Length | `-1` | `-1` | `-1` | `-1` | Yes |
| Column Data Type | `varbinary` | `varbinary` | `varbinary` | `varbinary` | Yes |
| Binary Format | `PNG` | `PNG` | `PNG` | `PNG` | Yes |
| Base Class | blank | blank | blank | blank | Yes |
| Domain IDO Name | blank | blank | blank | blank | Yes |
| Domain Property | blank | blank | blank | blank | Yes |
| Domain List Properties | blank | blank | blank | blank | Yes |
| Label String ID | blank | blank | blank | blank | Yes |
| Description | not specified | blank | blank | blank | Yes |
| Decimal Position | not specified | blank | blank | blank | Yes |
| Default Value | not specified | blank | blank | blank | Yes |
| Domain Additional Settings | not specified | blank | not read in T3 | blank | Yes (T2 and T5) |
| Revision No | system | `1` | `1` | `1` | Yes |
| Revision Date | system | `10/11/2026` | `10/11/2026` | `10/11/2026` | Yes |
| Locked By | system | `anton.ramos@3mworks.com.ph` | same | same | Yes |
| Access As | system | `G6R` | `G6R` | `G6R` | Yes |
| Save | — | enabled (pending) | disabled | disabled | Expected change |
| Pending star / header asterisk | — | present / `* Class Name` | absent / `Class Name` | absent (T5 settled grid) | Expected change |

Result: **every specified attribute and every blank optional field matches the AC-3 baseline in both the T3 settled state and the T5 recovered state.** The only differences are the expected pending-to-saved changes. Domain Additional Settings was not read in T3; that gap is recorded, not inferred.

Interpretation (New reuse): the grid showed one row after New, and the T5 recovery returned one `FX_Picture` row. Both are consistent with one record. The database count is not read.

## 4. Flagged `browser_type` calls (audit detail reviewed)

The harness audits flag `browser_type` in T1, T2 and T5 (`Flagged tool usage: {"browser_type":N}`). Each audit row names the element and gives the exact value. The audit says flagged tools "may be allowed by other briefs" and that its output "records attempted tool calls and native results, not rendered-state proof or acceptance."

| Task | Audit row | Element | Typed value (per worker record) | Permitted native entry? |
| --- | --- | --- | --- | --- |
| T1 | 22 | Select Form Filter textbox | `PropertyClass` | Yes. Part of the required Open > Select Form route (filter the list, then one End key refresh). Not a property-class change. |
| T1 | 35 | Class Name criteria textbox | `FX_Picture` | Yes. The required literal exact-name pre-creation query (criterion, not a record change). |
| T2 | 11 | Class Name textbox | `FX_Picture` | Yes. Required configuration of the new record. |
| T2 | 18 | Length textbox | `-1` | Yes. Required configuration. |
| T2 | 22 | Column Data Type combobox | `varb` (typed slowly, prefix) | Yes. The EXP-048 F2 lookup procedure types a prefix; the single option `varbinary` was then chosen by click. |
| T5 | 7 | Class Name criteria textbox | `FX_Picture` | Yes. The required literal exact-name recovery query. |

Conclusion: **all six flagged calls are native text entry into rendered fields that the brief required.** Their values are `FX_Picture`, `-1`, `PropertyClass` and the prefix `varb`. None was a script, JavaScript, console, network or evaluate call, and none changed a property class, IDO, SQL object or Form definition. The audits contain no `key string` or `spelled strings` entries (both `[]`), and `exact mismatches=0`. The brief's prohibited list does not name `browser_type`. I therefore do **not** treat these flags as violations. I flag them for the coordinator to confirm the reading.

Limitation: the audit detail is available for T1, T2 and T5 (the flagged tasks), and it names the element and value. The audits do not record the full DOM or the text the browser actually held after each entry, so the exact committed text is taken from the native readbacks (`t2-03`, `t5-04`), not from the audit.

## 5. Native Save response and clean state (verbatim)

- **Native response text displayed after the single Save: none.** No status text, toast, warning, error, confirmation or dialog appeared. The status bar stayed `Date Format (IDO Property Classes 1 of 1)` before and after. A regex find across the Form (saved, success, error, warning, confirm, unsaved, changes, alert, message) matched only the DevTools panel's own column header (`Message`) and tab names, not any Save response.
- **Immediate state (`t3-02-immediate-after-single-save.png`):** Save greyed; pending star removed; `* Class Name` header asterisk removed.
- **Settled state (`t3-03`, `t3-05`):** Save `[disabled]`; one data row; all configured values retained; no dialog.
- **Form clean:** yes. The Form was clean through the T4 pre-close check (`t4-00`, `t4-01`), the close (`t4-02`) and the T5 query (`t5-04`).
- The brief's requirement "any native Save response captured verbatim" is met by an explicit statement: **no confirmation or response text appeared.**

## 6. Close and reopen boundary

| Item | Observation | Limitation |
| --- | --- | --- |
| Last pre-close state (T4) | Save `[disabled]`; saved row; Check In and Undo Check Out enabled; Locked By operator (`t4-00`, `t4-01`). | Pre-close state is read from the visible Form. |
| Close action | One click on `Close Panel Property Classes` (T4 #7). | — |
| Close result | No unsaved-changes prompt; no dialog; Property Classes tab absent (`t4-02`, `t4-03`). The platform then displayed the inherited FX_Items runtime, which was not acted on. | Absence of a prompt is a visible result. The platform's internal save state was not inspected. |
| Reopen action | Toolbar Open → Select Form → row `Property Classes` / `IdoPropertyClasses` → OK (T4 #14, #17, #19). | — |
| Reopened state | Heading `Property Classes`; URL `favoriteContext=IdoPropertyClasses`; Filter in Place with blank criteria; Save and New disabled; no dialog (`t4-04`, `t4-05`). | **The reopened view shows no record.** It does not show persistence. |
| Persistence evidence | Only the T5 recovery query, which returned one `FX_Picture` record with all attributes (§3). | Same-session UI evidence only. No database or metadata read. |

## 7. Repository confinement: written-file inventory and reconciliation

### 7.1 Worker-authored EXP-060 files (written by the T1–T6 workers)

| Path | Written by | Notes |
| --- | --- | --- |
| `experiments/EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md` | T1 (created); edited T2–T6 | The only experiment record. Edited for status, task sections and acceptance rows. |
| `evidence/EXP-060/T1-report.md` | T1 | Action audit; evidence index; acceptance matrix. |
| `evidence/EXP-060/T2-report.md` | T2 | Pre-Save verification. |
| `evidence/EXP-060/T3-report.md` | T3 | Save and checkout observation. |
| `evidence/EXP-060/T4-report.md` | T4 | Close and reopen. |
| `evidence/EXP-060/T5-report.md` | T5 | Recovery query and field matrix. |
| `evidence/EXP-060/T6-final-report.md` | T6 | This report. |
| `evidence/EXP-060/t1-01` … `t1-05` (4 PNG + 1 YML) | T1 | Screenshots and accessibility snapshot. |
| `evidence/EXP-060/t2-00`, `t2-01`, `t2-02`, `t2-04` (PNG); `t2-03` (YML) | T2 | |
| `evidence/EXP-060/t3-01`, `t3-02`, `t3-04`, `t3-05` (PNG); `t3-00`, `t3-03` (YML) | T3 | |
| `evidence/EXP-060/t4-01`, `t4-02`, `t4-04` (PNG); `t4-00`, `t4-03`, `t4-05` (YML) | T4 | |
| `evidence/EXP-060/t5-01`, `t5-02`, `t5-03`, `t5-05` (PNG); `t5-00`, `t5-04` (YML) | T5 | |

Totals: **19 PNG screenshots** (T1 4, T2 4, T3 4, T4 3, T5 4) and **9 accessibility YML snapshots** (T1 1, T2 1, T3 2, T4 3, T5 2), plus **6 Markdown reports** and **1 experiment record**. Together that is 28 worker-requested evidence files, plus the reports above.

### 7.2 Controller-generated files (not worker-authored)

- `evidence/EXP-060/harness-audit-T1.md` … `harness-audit-T5.md` (5 files). Each begins "controller-generated audit (not worker prose)". They were not written by the worker and were read only for this report.

### 7.3 Tool-generated files outside `evidence/EXP-060/` (not worker-authored)

- The Playwright tool writes page snapshots (`page-*.yml`) and console logs (`console-*.log`) to `evidence\playwright\`. The worker did not read the console logs, and did not inspect the console. Those files were referenced in tab-list and snapshot outputs.
- Files with timestamps 13:59–14:12 on 2026-10-11 (24 files: 5 console logs and 19 page snapshots) match this session's browser actions. This attribution is by timestamp and by the names shown in tool outputs. The contents were not opened.
- Files with timestamps 13:00–13:15 on 2026-10-11 (19 files) predate this experiment's first browser action (T1 tab list at 13:59:34). They are not attributed to EXP-060.
- The tool snapshot files are not EXP-060 evidence. The worker-requested snapshots are the `t*-…yml` files listed in §7.1.

### 7.4 Pre-existing repository changes (not EXP-060)

From the operator-provided session-start git status (not re-verified; no shell):
`tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. The worker did not touch these, and `tools/` was not read.

### 7.5 Reconciliation with the harness audits

- Every Write and Edit call in the T1–T5 controller audits targets either `experiments/EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md` or `evidence/EXP-060/`. No Write or Edit call targets any other path.
- Read and Grep calls outside this directory were for source review (AGENTS.md; `docs/mongoose/transcripts/hello-world-pt4.md`; EXP-047-R2, EXP-048, EXP-049 (T1 Grep only), EXP-059 records). They are reads, not writes.
- In T6 I ran a repository-wide Glob for `**/harness-audit-T*.md`. It listed harness-audit files for other experiments (EXP-036 to EXP-044 and their reruns). I did not open them. I did not read any path under `tools/`.
- The controller audits report no `browser_evaluate`, run-code, console or network call. The tool wrappers print generated Playwright code for each action; I supplied no code, and the audits record none as worker-supplied (`key string (none)`).
- Authoritative confinement is the operator's git review. The worker inventory above is supporting evidence only.

## 8. Limitations (consolidated)

1. **Persistence is UI-level and same-session.** The T5 recovery query shows the record after a close and reopen in this Mongoose session. No database, DDL or metadata read was performed. Durability is not established.
2. **Checked-out status is interpreted.** The Form shows no labelled status. The owner (Locked By) is directly observed. The "checked out" reading rests on enabled Check In and Undo Check Out controls, following the EXP-047-R2 and EXP-048 pattern.
3. **New reuse is inferred.** The one-row grid and the single recovered row are consistent with one record. No database count was read.
4. **Absence result is display-level.** The T1 query returned zero data rows on the displayed grid, with no same-session positive control, because the brief allowed one query.
5. **No native Save text.** The Form displayed none, so no response text is quoted. Success is inferred from the disabled Save and the cleared indicators.
6. **Blank fields are accessibility state.** Base Class, the Domain fields and Label String ID were read as having no value in the accessibility tree and the grid. Stored values were not inspected.
7. **Domain Additional Settings was not read in T3.** It was read in T2 and T5 (blank).
8. **The `browser_type` flags are interpreted, not adjudicated.** §4 explains the reading; the coordinator should confirm it.
9. **Tool-generated console and snapshot files exist** but were not read (§7.3). The tool output headers reported a console count (`1 errors, 2 warnings`) that was not inspected.
10. **The T4 dialog snapshot.** The T4 worker transcript used a dialog-scoped snapshot to read the Select Form list. The T4 audit records that call without an element or filename argument. The snapshot was not saved, and nothing in it changed the Form.
11. **Scroll and pointer actions were view-only.** They are recorded in §2.3 and do not change Form data.
12. **The current Form state was last observed at T5.** T6 made no browser call, so it was not re-observed. §9 gives the last observed state.

## 9. Final Web Client and Property Classes state (last observed at T5; not re-observed in T6)

- Web Client tab (index 1) was the selected tab. The Designer tab (index 0) was never selected in T1–T5 and was not acted on.
- Inherited EXP-059 tabs remain open and were not acted on: Sql Tables, Sql Columns and FX_Items (the FX_Items runtime was displayed by the platform after the T4 close).
- Property Classes tab (reopened in T4, active at T5): Filter in Place; Class Name criterion `FX_Picture`; one matching row `FX_Picture` (checked, not starred); status `Base Class (IDO Property Classes 1 of 1)`; **Save disabled**; New enabled (Filter in Place state; not invoked); Check In and Undo Check Out enabled; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Revision No `1`; Revision Date `10/11/2026`.
- No dialog and no in-page prompt at T5. No unsaved change. The Form has not been closed or reopened since T4, and no query has run since T5.
- The identity bar at T5 showed `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 10. Blockers and open questions for the coordinator

1. **No blockers.** Every brief step completed as briefed, and every acceptance check has an evidence reference.
2. **Adjudicate AC-5 wording.** Confirm that the enabled-control reading, with the owner read directly from Locked By, is acceptable for "checked out to the operator" given that no labelled status exists.
3. **Adjudicate AC-8 confinement.** Confirm that controller audits and the worker inventory are sufficient, pending the operator's git review.
4. **Confirm the `browser_type` reading** in §4 (six permitted native text entries; not treated as violations).
5. **Decide the inherited EXP-059 tabs** (Sql Tables, Sql Columns, FX_Items) and the Designer tab. No action was taken.
6. **Durability and runtime are out of scope.** Database durability, IDO integration and PNG runtime behaviour were not tested and must not be claimed from this experiment.

## 11. Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Select Form route opens IDO Property Classes (`IdoPropertyClasses`) with no challenge, after a filter key refresh | **observed** (one run per open; two opens) |
| `FX_Picture` absent in the exact-name Filter in Place query before New (zero data rows; display level) | **observed** (one run; UI level) |
| One toolbar New on the zero-row placeholder yields one editable record (no second row shown) | **observed** (grid); record identity **inferred** |
| F2 with prefix `varb` on Column Data Type yields one `varbinary` option, committed by click | **observed** (one run) |
| Binary Format `PNG` is one of JPEG, PNG, TIFF, committed by click | **observed** (one run) |
| Pre-Save configuration matches the AC-3 baseline; blank optional fields blank (accessibility state) | **observed** (one run; pre-Save; not stored values) |
| One ordinary toolbar Save: Save disabled afterwards; no native response text | **observed** (one run); success **inferred** |
| Owner shown in Locked By equals the operator | **observed** (one run; direct field) |
| Checked-out status (enabled Check In and Undo Check Out) | **interpreted** from controls; not a labelled field; not independently verified |
| Clean close (no prompt) and single native reopen | **observed** (one run each; UI level) |
| Post-reopen exact-name query returns one `FX_Picture` record with all attributes and blanks matching AC-3 | **observed** (one run; same-session UI) |
| Persistence beyond the UI session; database durability; DDL | **not performed; not claimed** |
| Automatic IDO integration of the class; PNG runtime or image display | **not performed; not claimed** |
| Replay of this procedure | **not claimed**; not replay_verified |

## 12. Final classification

**Observed only.** This experiment does not claim replay verification, independent database durability, automatic IDO integration, or PNG runtime functionality. The outcome is submitted to the coordinator for adjudication. It is not declared accepted, and no recipe is changed.
