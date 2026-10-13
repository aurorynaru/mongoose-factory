# EXP-075 — Hello World Part 5 Prerequisite B: add the bound FX_Address property to IDO FX_HelloWorld01

**Current status (after T6, 2026-10-13; final documentation and acceptance review complete; zero browser calls in T6):** Recommendation to the operator: **ACCEPTED AS OBSERVED** (UI level; same session; not replay-verified; no database durability claimed), subject to the operator accepting the four conditions in `evidence/EXP-075/T6-final-acceptance-report.md` §9.1: (a) the unidentified page-2 text area, which is why the label omission rests on the absence of a caption; (b) partial source reads for AC-1; (c) Upper Case blank semantics (unresolved, no acceptance effect); (d) harness-generated tool files under `evidence\playwright\` outside the EXP-075 path, for operator git review. All eight acceptance checks are supported by the evidence in that report (matrix in §2). Final state as last observed: FX_HelloWorld01 checked out to the operator (T4 direct; not re-read after the T5 tab switch); recovered IDOs Form clean (T4); runtime Form clean with two records, Save disabled (T5). Revision 2 / 10/10/2026 unchanged. Cumulative browser calls T1–T5: 132 (tab lists 5, tab selects 5, snapshots 12, finds 30, clicks 27, typed 4, keys 5, mouse 5, wheel 9, waits 5, screenshots 25); Check Out 1; wizard 1; Finish 1; Save 0; IDOs close/reopen pairs 2; target queries 2; runtime Refresh 1; Check In 0; Undo 0; re-login 0; Designer 0; unloads 0. Worker-written files: 31 (1 record, 5 reports, 25 screenshots). Corrections recorded in T6 §7: T2 mouse moves 1 (not 2); T4 finds 4 (not 5).

**Earlier status (after T5, 2026-10-13; AC-7 runtime verification complete; final AC-8 report NOT finalized):** One ordinary toolbar Refresh of the existing FX_HelloWorld01 runtime Form (no new instance). Before Refresh: status `(Object 1 of 2)`, Save disabled, two records. After Refresh and a 3-second settle: status `(Object 1 of 2)`, Save disabled, exactly two rows, `Factory test one` / `FX001` and `Factory test two` / `FX002` (record 2 confirmed by accessibility readback; the grid is clipped in images). No field edit, Save, record change, checkout change or IDOs action in T5. The recovered IDOs Form (T4) was left clean and FX_HelloWorld01 stays checked out to the operator. Report: `evidence/EXP-075/T5-report.md`. Classification: observed only (same-session UI); not database durability; not replay_verified. Separate audit events noted for reconciliation: (1) the T4 Select Form mis-click (Filter By list opened, value unchanged, closed by selecting the current value); (2) one failed T4 documentation Edit (old string not found; no change written; corrected by a follow-up Edit). Budgets used: Check Out 1/1; wizard 1/1; Finish 1/1; Save 0 (one conditional unused); IDOs close/reopen 2/2; target queries 2/2; runtime Refresh 1/1.

**Earlier status (after T4, 2026-10-13; IDOs recovery pair and AC-6 verification complete; runtime Refresh NOT started):** The IDOs Form was closed once (clean; no prompt) and reopened once through Form > Open > Select Form (`IDOs / IdoCollections`); it opened already in Filter in Place (inherited; not toggled). One visible-criterion query (criterion captured before F4; one F4) returned exactly one FX_HelloWorld01 IDO: project FX_HelloWorldProject01; base table FX_HelloWorld01 / alias fxhw / Primary Base / Inner; Revision Num 2; Revision Date 10/10/2026; Locked By the operator; Check In and Undo Check Out enabled (still checked out); Save disabled. The Properties grid has exactly ten rows: the nine baseline rows match T1–T3 on every readable field and flag; row 10 is FX_Address (Bound to Column; column FX_Address; String 150; nvarchar; Key Sequence 0; Property Class blank; flags unchecked). The wizard offered no Label String ID, so no label is set. One recorded deviation: a mis-targeted click opened the Filter By dropdown in the Select Form dialog; it was closed by selecting its current value Name (no change), and OK was then pressed once. Report: `evidence/EXP-075/T4-report.md`. Classification: observed only (same-session UI recovery); not database durability; not replay_verified. Remaining: the runtime FX_HelloWorld01 Refresh (AC-7) and the final AC-8 report. Budgets used: Check Out 1/1; wizard 1/1; Finish 1/1; Save 0 (one conditional unused); IDOs close/reopen 2/2; target queries 2/2; runtime Refresh 0/1.

**Earlier status (after T3, 2026-10-13; one New Property wizard and one Finish; no Save needed; recovery NOT started):** The single New Property wizard created one new Bound property `FX_Address` on FX_HelloWorld01 (project FX_HelloWorldProject01, base table FX_HelloWorld01, alias fxhw). Bind To was selected from the lookup as `fxhw.FX_Address` (one of ten `fxhw.` entries). Property Name `FX_Address` (wizard pre-populated; one plain fill performed with the same value). Property Class blank. The wizard offered no Label String ID field, so no label was set. Pre-Finish the wizard showed Data Type String, Length 150, Column Data Type nvarchar (wizard-populated after binding, not inherited from a class). One Finish: no dialog or text; the wizard closed; status `New Property (IDOs 1 of 1)`. The Form is clean (toolbar Save disabled), so no Save was performed. Post-Finish the Properties grid has ten rows: the nine baseline rows are unchanged on every readable field, and row 10 is FX_Address (Bound to Column, column FX_Address, String, 150, nvarchar). FX_HelloWorld01 stays checked out to the operator (Check In enabled; Revision 2 / 10/10/2026). Report: `evidence/EXP-075/T3-report.md`. Classification: observed only (UI level, same session); not replay_verified; no database durability claimed. Remaining budgets: one IDOs close/reopen pair, one target query, one runtime Refresh (all for the next task).

**Earlier status (after T2, 2026-10-13; one Check Out of FX_HelloWorld01; wizard NOT started):** Check Out succeeded once (cycle 1, task `7131023e-7db9-479e-bc8a-55b19bc079d1`). Before the click the target was re-confirmed in the open IDOs Form (FX_HelloWorld01, project FX_HelloWorldProject01, base table FX_HelloWorld01 / alias fxhw, Revision 2, Locked By blank, Check Out enabled, Save disabled, nine properties, FX_Address absent case-insensitively). The click produced no dialog or text; afterwards Locked By is the operator username (matches the identity bar), Check In and Undo Check Out are enabled, Revision 2 / 10/10/2026 is unchanged, status `Check Out (IDOs 1 of 1)`, Save disabled, and all nine properties are unchanged. The Properties grid headers are now resolved (Read Only, Required, Upper Case, Pseudo Key, Read Only Record; see the T2 section). Upper Case shows no value on any row. FX_HelloWorld01 stays checked out. Report: `evidence/EXP-075/T2-report.md`. Classification: observed only (UI level, same session); not replay_verified. Remaining budgets: one wizard, one Finish, at most one Save, one IDOs close/reopen pair, one target query, one runtime Refresh.

**Earlier status (after T1, 2026-10-13; read-only preflight and baseline; stopped before Check Out):** AC-1 and AC-2 observed at UI level. The fresh IDOs Form was reopened through Form > Open > Select Form. Exactly one FX_HelloWorld01 IDO was retrieved by a visible-criterion Filter in Place query (criterion captured before F4). Identity: project FX_HelloWorldProject01, base table FX_HelloWorld01, alias fxhw, Primary Base, Inner; Revision Num 2, Revision Date 10/10/2026; Locked By blank; **checked in** (Check Out enabled, Undo Check Out disabled). The complete property inventory is nine rows (FX_Code, FX_Label and seven system properties). **FX_Address is absent**, case-insensitively. **Zero Check Out, zero wizard, zero Finish, zero Save.** The IDOs Form is open, clean and left at the baseline. FX_HelloWorld01 stays checked in. Classification: **observed only (UI level, same session); not replay_verified; no database durability claimed.**

Next permitted step (not started; requires the next authorized task): one Check Out of FX_HelloWorld01, then the single New Property wizard, the single Finish, and the recovery pair (AC-3 to AC-8) as the brief specifies.

## Run identity and provenance

- Run `R-20261013-195311-rvhR`, experiment EXP-075, cycle 0, task **T1** (read-only preflight, baseline and stop before Check Out). Worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`; task_message_id `876fd389-3a9c-4700-9767-074fda2ce97e`.
- Date 2026-10-13. Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Forms only; the IDO and its property are tenant-wide).
- Brief commits (session-start git log, not re-verified; no shell): `e2f615e` (draft brief), `bf9fc5f` (approved brief).
- Predecessor: EXP-074 (accepted as observed) created the nullable column `dbo.FX_HelloWorld01.FX_Address` (nvarchar 150, Column Id 11). EXP-075 adds only the IDO property.
- This record did not exist at the start of T1 (glob `experiments/EXP-075*` returned no files). It was created by the T1 worker at the brief's path.
- Identity bar observed: operator account `anton.ramos@3mworks.com.ph` | `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (DEM configuration).

## Objective (T1 scope)

Retrieve exactly one IDO `FX_HelloWorld01` in the IDO Collections runtime Form (titled IDOs) through a fresh Form opened by Select Form; record its identity, revision, checkout state and complete property inventory; prove `FX_Address` absent (case-insensitive). **Stop before Check Out.** No Check Out, wizard, Finish, Save, New, Delete, check-in, Designer action, unload, cache, FormSync, deployment, runtime Refresh or string, class, SQL or Form change.

## Sources reviewed (before browser interaction)

- `AGENTS.md`: full (LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation and recovery; evidence capture).
- `docs/mongoose/transcripts/hello-world-pt1.md`, Section 6 (lines 94–106): `Address` is String, length **150**; the label string ID is narrated as `s Address` (spoken transcription only; `FX_sAddress` is the brief's adapted identifier and is created later through the Form caption, not in this experiment).
- `docs/mongoose/transcripts/hello-world-pt5.md`, header, "How an agent should use this file" (lines 1–21), Part 5 goals (lines 22–32), prerequisites table (lines 34–45), and Section 1 and Section 2 (lines 78–110). Context only: the tutorial's Site Default scope, unprefixed `Orders` / `Customer` / `Items` names, and the joined-property steps are **not** approved here. Section 2 step 5 (joined Address label `s address`) is the source of the tutorial's label, not an instruction for this task.
- `experiments/EXP-074-hello-world-part-5-prereq-a-fx-address-column.md`: lines 1–488 (status header, run history, T1 baseline, T2 and T3 readbacks). The FX_Address column facts (nvarchar, length 150, nullable, Column Id 11) come from the header and T6 status, which state them as observed. Lines 489–1203 (T4 onward) were not read in this session. Relevant observation carried into this task: the reopened Form can inherit Filter in Place mode (EXP-074 T6 incident).
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: full. Route: IDOs runtime Form via Open > Select Form (`IdoCollections`, row `IDOs / IdoCollections`); exact-name query; Check Out without a confirmation text; New Property wizard (Bound default; Bind To lookup `alias.column`; Property Name; Property Class; inherited types); Finish with no displayed text; Save stays disabled. Learned: adding a property does not change the revision number; Check Out changes Locked By only.
- `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md`: lines 1–537 (current status, collision gate T1, T2 wizard). Relevant: the reopened IDOs Form opens already in Filter in Place; the IDO Name criterion is typed and committed with Tab, captured before F4; the Select Form filter updates only after Tab.
- `experiments/EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md`: lines 1–505 (status, T1 collision checks, T8 page 1 and 2, and the start of T12). Relevant: the FX_HelloWorld01 IDO identity (project FX_HelloWorldProject01, alias fxhw, Access As G6R); the nine-property inventory: FX_Code String 30 (key, required), FX_Label String 100, seven system properties; the checked-in state after EXP-040 T12 (Revision 2, Locked By empty). Lines 506–1256 (T9–T11 and the rest of T12) were not read in this session.
- `evidence/EXP-071-R2/` and `evidence/EXP-061/`: not opened (screenshots not needed for the baseline).
- `tools/` was not read or written.

## Browser preflight (AC-1)

| Item | Observed | Evidence |
| --- | --- | --- |
| Tab list (before the first select) | Tab 0: Web Designer (`mode=designer`, `MGForm=FX_Orders`), not selected or acted on. Tab 1: Mongoose Web Client (`favoriteContext=FX_HelloWorld01`, the runtime FX_HelloWorld01 Form active). | `browser_tabs` list (tool output) |
| Tab selected | Tab 1 (Mongoose Web Client). Tab 0 not selected, clicked or captured. | `browser_tabs` select (tool output) |
| Session | Usable. No "Session Expired" modal, no Infor sign-in page, no portal notification banner, no native dialog. Re-login count 0. | Start snapshot (untargeted) |
| Open Form tabs at start | FX_Items, Property Classes, IDO Projects, IDOs (clean, showing FX_Orders, Save disabled, status `P&roperties`), FX_Orders, Sql Tables, Sql Columns, FX_HelloWorld01 (runtime, active; rows FX001 / Factory test one and FX002 / Factory test two; status `(Object 1 of 2)`; Save disabled). | Start snapshot; `t1-01` |
| IDOs tab cleanliness | Clean: Save disabled; no dialog; no Filter in Place mode (status `P&roperties`; FiP icon absent on the tab); no pending edit. Showed FX_Orders (not the target). | `t1-01` |
| FX_HelloWorld01 runtime tab | Left untouched (not selected or acted on after the start snapshot). Its two rows were seen in the start snapshot only; not re-verified in T1. | Start snapshot |

## Fresh IDOs Form (AC-1)

1. The clean IDOs Form was closed once through its Form-tab control (`Close Panel IDOs`). Result: the IDOs tab was removed; no prompt; the runtime FX_HelloWorld01 tab became active. Fresh snapshot: Save disabled, no dialog.
2. Form > Open was clicked, then its Open item. The **Select Form** dialog opened with its Filter pre-filled as `FX_HelloWorld01` (retained from an earlier use) and listed one row (Caption and Name `FX_HelloWorld01`, the runtime Form). The Filter was replaced by one fill with `IdoCollections`, committed with Tab, which listed two rows: `G6RIdoCollectionSearch` and `IDOs / IdoCollections`.
3. The row `IDOs / IdoCollections` was selected by one click (highlighted in `t1-02`). OK was clicked once. Result: `favoriteContext=IdoCollections`; a new IDOs tab was active; no dialog.
4. Status bar read `Filter in Place` (ref `f1e195`). The Form had opened already in Filter in Place mode (EXP-071-R2 and EXP-074 pattern). **FiP was not clicked.**
5. IDO Name criterion (the active textbox) received `FX_HelloWorld01` by one fill, committed with Tab. Pre-F4 capture `t1-03` (criterion visible; echo row `FX_HelloWorld01`; status `Filter in Place`; Save disabled; no dialog).

## Target identity and baseline (AC-2)

### Query (one visible-criterion query)

- F4 pressed once (criterion captured in `t1-03` before the press). Three-second settle.
- Status bar: `Extends (IDOs 1 of 1)`. Grid: **exactly one row**, IDO Name `FX_HelloWorld01`, row checkbox unchecked. (The status-bar text is the record-position field, not a mode.)

### Identity and state (post-F4; `t1-04`, snapshot readback)

| Field | Observed |
| --- | --- |
| IDO Name | `FX_HelloWorld01` |
| Project Name | `FX_HelloWorldProject01` |
| Base table (Tables sub-tab) | `FX_HelloWorld01`, alias `fxhw`, Table Type `Primary Base`, Join Type `Inner` (one table row) |
| Revision Num | **2** |
| Revision Date | **10/10/2026** |
| Locked By | **blank** |
| Check Out / Undo Check Out | **Check Out enabled; Undo Check Out disabled** (checked in) |
| Row checkbox | unchecked |
| Access As | `G6R` |
| Label String ID / Caption | `oFX_HelloWorld01` / `oFX_HelloWorld01` |
| Extends / Description / Ext Class | blank |
| Save | disabled (clean) |

The checked-in state, Revision 2 and Revision Date 10/10/2026 match the EXP-040 T12 post-check-in readback (Revision Num 2; Locked By empty). Consistent with that record; this is a UI readback only.

### Complete property inventory (Properties sub-tab, nine rows)

Read from the Properties grid snapshot (`page-2026-10-13T11-54-53-786Z.yml`) and screenshots `t1-05` (rows 1–8) and `t1-06` (scrolled to the end; row 9, and no row 10). Property Type is `Bound to Column` on every row. Property Class is blank on every row.

| # | Property Name | Sequence | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Code | 1 | FX_Code | 1 | String | 30 | nvarchar | unchecked | **checked** |
| 2 | FX_Label | 2 | FX_Label | 0 | String | 100 | nvarchar | unchecked | unchecked |
| 3 | CreatedBy | 3 | CreatedBy | 0 | String | 128 | UsernameType | **checked** | unchecked |
| 4 | UpdatedBy | 4 | UpdatedBy | 0 | String | 128 | UsernameType | **checked** | unchecked |
| 5 | CreateDate | 5 | CreateDate | 0 | Date | (blank) | CurrentDateType | **checked** | unchecked |
| 6 | RecordDate | 6 | RecordDate | 0 | Date | (blank) | CurrentDateType | **checked** | unchecked |
| 7 | RowPointer | 7 | RowPointer | 0 | GUID | (blank) | RowPointerType | **checked** | unchecked |
| 8 | NoteExistsFlag | 8 | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked |
| 9 | InWorkflow | 9 | InWorkflow | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked |

- Read Only and Required are read from the visible grid columns in `t1-05`/`t1-06`. The snapshot shows a fourth checkbox per row (its column is not visually identified in T1): it is checked only on `CreatedBy`, `UpdatedBy`, `CreateDate`, `RecordDate`, `RowPointer` (checked), and on `InWorkflow` (checked); it is unchecked on FX_Code, FX_Label and NoteExistsFlag. Its column header is unresolved (not in the brief's expected list); recorded as observed.
- The Upper Case and Pseudo Key checkboxes were not separately verified visually in T1.
- The nine rows match the EXP-040 T12 description (FX_Code String 30 key and required; FX_Label String 100; seven system properties).

### FX_Address absence (AC-2, case-insensitive)

- Exact comparison: `FX_Address` is not among the nine names.
- Case-insensitive comparison: a case-insensitive search of the Properties snapshot for `address` returned **zero matches** (`(?i)address`, `page-2026-10-13T11-54-53-786Z.yml`). No name equals or contains `address` in any case.
- Visible grid check: rows 1–9 (`t1-05`, `t1-06`) show no row with an address-like name; no tenth row exists after scroll to the end.
- **Finding: `FX_Address` does not exist as an IDO property of FX_HelloWorld01 (baseline, before Check Out).** Creating it is authorized by the brief in a later task, once the Check Out and wizard prerequisites are met.

## Decisive evidence per file (what each image shows and does not prove)

| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-075/t1-01-idos-tab-clean-before-close.png` | The old IDOs tab (FX_Orders, one row); Save disabled; status `P&roperties`; operator account and DEM configuration in the identity bar; no dialog. | That FX_HelloWorld01 is the target (the record shown is FX_Orders). Anything about the runtime tab. |
| `evidence/EXP-075/t1-02-select-form-dialog-idos-row-selected.png` | Select Form dialog: Filter `IdoCollections`, Filter By Name; two rows; `IDOs / IdoCollections` highlighted; OK, Cancel and Help. | That OK committed the Form (the post-OK state is in `t1-04`). |
| `evidence/EXP-075/t1-03-pre-f4-idos-fx-helloworld01-criterion-visible.png` | Fresh IDOs Form (Filter in Place): IDO Name criterion `FX_HelloWorld01`; echo row; status `Filter in Place`; Save disabled; operator account in identity bar. | That F4 returns one row (see `t1-04`). |
| `evidence/EXP-075/t1-04-post-f4-idos-one-fx-helloworld01-identity.png` | **Decisive identity:** one IDO row FX_HelloWorld01; Project FX_HelloWorldProject01; Revision Num 2; Revision Date 10/10/2026; Locked By blank; Check Out enabled and Undo Check Out greyed; Access As G6R; Tables sub-tab FX_HelloWorld01 / fxhw / Primary Base / Inner; status `Extends (IDOs 1 of 1)`; Save disabled. | Property inventory beyond the Tables sub-tab (see `t1-05`, `t1-06`). Database catalogue. |
| `evidence/EXP-075/t1-05-baseline-properties-inventory.png` | Properties sub-tab for FX_HelloWorld01: rows 1–8 (FX_Code … NoteExistsFlag) with Property Name, Sequence, Property Class (blank), Property Type (Bound to Column), Column Name, Key Sequence, Data Type, Length, Column Type, Read Only, Required. | Row 9 (InWorkflow) and the grid's right-hand columns (see the snapshot and `t1-06`). |
| `evidence/EXP-075/t1-06-baseline-properties-inventory-scrolled-end.png` | Same grid scrolled to the end: rows 2–9 with InWorkflow as the last row (row 9); the vertical scroll is at its bottom. | Columns to the right of Required (Upper Case, Pseudo Key and the Read Only Record column are not visually verified). |

## Acceptance checks (T1)

| AC | Status (T1) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Established (observed, UI level).** Sources reviewed; session usable; a fresh IDOs Form opened through Form > Open > Select Form (`IdoCollections`, row `IDOs / IdoCollections`, OK). | `t1-01`, `t1-02`, `t1-03`, `t1-04` | Filter pre-filled from an earlier use and replaced; the Form inherited Filter in Place. Same session only. |
| AC-2 | **Established (observed, UI level).** One visible-criterion query (criterion `t1-03`, before F4) returned exactly one FX_HelloWorld01 row (`t1-04`); project, base table and alias, Revision, Locked By, checkout state and the complete nine-row inventory recorded (`t1-05`, `t1-06`); `FX_Address` absent (case-insensitive). | `t1-03` to `t1-06`; snapshot text | UI-level inventory (not a catalogue or database query). Upper Case and Pseudo Key columns not visually verified. |
| AC-3 | **Not started.** Stopped before Check Out by the T1 instruction. | — | Next task. |
| AC-4 to AC-8 | **Not started.** | — | Later tasks. |

## Action audit (T1; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Designer (tab 0) not selected. |
| `browser_snapshot` (untargeted) | 3 | Start; after the IDOs close; after the reopen. No targeted snapshot. Tool-written snapshot files were also read (see inventory). |
| `browser_find` (read-only) | 3 | `Select Form` (no match, before the menu was open); `Select Form` (dialog found); `IdoCollections` (two rows). |
| `browser_click` | 7 | (1) IDOs tab heading (view only); (2) Close Panel IDOs (close); (3) Form menu; (4) Form menu item Open; (5) Select Form row IDOs / IdoCollections; (6) Select Form OK (open); (7) Properties sub-tab (view only). |
| `browser_type` | 2 | (1) Select Form filter `IdoCollections` (one fill); (2) IDO Name criterion `FX_HelloWorld01` (one fill). |
| Key presses | 3 | Tab (Select Form filter commit) ×1; Tab (IDO Name commit) ×1; F4 (the single target query) ×1. |
| Escape presses | **0** | None. |
| Waits | 1 | 3 seconds, after F4. |
| Mouse moves / wheel | 1 / 1 | Mouse move to the Properties grid and one wheel scroll (deltaY +600) for viewing the bottom row. View only. |
| Screenshots (`browser_take_screenshot`) | 6 | `t1-01` to `t1-06`. |
| Select Form opened / OK / Cancel | 1 / 1 / 0 | OK counts as an in-page dialog answered (not a confirmation). |
| IDOs Form close / reopen | **1 / 1** | Close (clean, no prompt); reopen through Select Form. Cumulative close/reopen pairs for the brief: 1 of 2. |
| Target F4 queries (FX_HelloWorld01) | **1** | Cumulative target queries: 1 of 2. |
| Filter in Place clicks | **0** | Not clicked (the Form opened already in FiP). |
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** | Stopped before Check Out. |
| **New Property wizard / Finish** | **0 / 0** | None. |
| **Save (toolbar or other)** | **0** | None. |
| New / Delete (object or record) | 0 / 0 | None. |
| Runtime Refresh / runtime edits / runtime opens | 0 / 0 / 0 | Runtime FX_HelloWorld01 tab not acted on in T1. |
| Strings, property classes, SQL objects, Forms, records, IDO or property changes | **0 / 0 / 0 / 0 / 0 / 0** | None. |
| Designer actions | **0** | Tab 0 not selected, clicked or captured. |
| Unload, cache, FormSync, deployment, regeneration | **0** | None. |
| Re-login (session-expiry procedure) | **0** | Session stayed usable. |
| Browser evaluate / run-code / JavaScript authored by the worker | **0** | None. (The tool's "Ran Playwright code" wrappers contain tool-generated DOM-ID locators; the worker wrote no script.) |
| Console or network reads (`browser_console_messages`, `browser_network_requests`) | **0** | Not called. |
| Direct URL navigation / browser refresh / restart | **0 / 0 / 0** | None. |
| Ref-not-found errors / recovery snapshots / timeouts | **0 / 0 / 0** | None. |
| Dialogs answered | 1 | Select Form OK. No caution alert appeared (the Sql Tables caution does not apply to IDOs). |
| Portal banner dismissals | 0 | None visible. |

## Worker-written-file inventory (T1)

Written by this worker in T1:

- `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md` (created; this record).
- `evidence/EXP-075/t1-01-idos-tab-clean-before-close.png`
- `evidence/EXP-075/t1-02-select-form-dialog-idos-row-selected.png`
- `evidence/EXP-075/t1-03-pre-f4-idos-fx-helloworld01-criterion-visible.png`
- `evidence/EXP-075/t1-04-post-f4-idos-one-fx-helloworld01-identity.png`
- `evidence/EXP-075/t1-05-baseline-properties-inventory.png`
- `evidence/EXP-075/t1-06-baseline-properties-inventory-scrolled-end.png`

Tool-generated, not worker-authored: Playwright MCP snapshot and console files under `evidence\playwright\` written by the harness on browser events (for example `page-2026-10-13T11-53-32-804Z.yml`, `page-2026-10-13T11-53-50-720Z.yml`, `page-2026-10-13T11-53-57-188Z.yml`, `page-2026-10-13T11-54-36-904Z.yml`, `page-2026-10-13T11-54-53-786Z.yml`, and `console-2026-10-13T11-53-24-*.log`). The worker read five of these snapshot files (read only). They are not EXP-075 evidence.

No other file was written, edited or deleted in T1. The brief's repository confinement is supported by this inventory; the operator's git review is authoritative.

## Final state (end of T1)

- Mongoose Web Client tab (tab 1) selected. Web Designer tab (tab 0) untouched.
- Active: the IDOs Form (`favoriteContext=IdoCollections`), a fresh instance opened through Select Form. It shows FX_HelloWorld01 (one row), status `Extends (IDOs 1 of 1)`, Properties sub-tab selected. **Clean: Save disabled.** The query was run in Filter in Place mode (criterion FX_HelloWorld01 typed before F4); the post-query mode was not separately verified in T1.
- **FX_HelloWorld01 is checked in** (Locked By blank; Check Out enabled). It was not checked out in T1. Revision Num 2, Revision Date 10/10/2026.
- The runtime FX_HelloWorld01 tab and the other inherited tabs (FX_Items, Property Classes, IDO Projects, FX_Orders, Sql Tables, Sql Columns) are open and untouched.
- No dialog open; no browser-native prompt; no unsaved change.

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Select Form row `IDOs / IdoCollections` opens a fresh IDOs Form after the filter is committed with Tab | **observed** (one run) |
| A reopened IDOs Form opens already in Filter in Place mode | **observed** (one run; consistent with EXP-071-R2 and EXP-074) |
| Visible-criterion query returns one FX_HelloWorld01 IDO (project FX_HelloWorldProject01; base table FX_HelloWorld01, alias fxhw, Primary Base, Inner; Revision 2, 10/10/2026; Locked By blank; checked in) | **observed** (one run; UI level) |
| Baseline property inventory: nine rows (FX_Code, FX_Label and seven system properties), all Bound to Column, no Property Class | **observed** (one run; UI level) |
| `FX_Address` absent from the IDO (case-insensitive) | **observed** (one run; UI level) |
| Fourth per-row checkbox (column header unresolved), Upper Case and Pseudo Key columns | **unresolved** (not visually verified) |
| Check Out, wizard, Finish, Save, recovery, runtime records | **not performed** (later tasks) |
| Any replay or procedure status | **not claimed** (not replay_verified) |

## Open questions and blockers

1. **No blockers in T1.**
2. **Resolved in T2 (correction).** The per-row checkboxes map to Read Only, Required, Pseudo Key and Read Only Record (Upper Case is a blank cell). The checks on CreatedBy … RowPointer are in the Read Only column, and the check on InWorkflow is in Read Only Record. See the T2 section. Upper Case has no value on any row; its meaning is unresolved.
3. The Select Form filter was pre-filled with `FX_HelloWorld01` from an earlier use. Observed; not a blocker.
4. The runtime FX_HelloWorld01 Form's two records were seen at the start only; the brief's runtime Refresh check belongs to the final step.

---

## T2 — one Check Out of FX_HelloWorld01 (cycle 1; wizard NOT started)

Full report: `evidence/EXP-075/T2-report.md`. Task message `7131023e-7db9-479e-bc8a-55b19bc079d1`, worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.

- **Gate (fresh, read-only):** tab list (1); tab 1 selected; fresh snapshot: IDOs Form open and clean (Save disabled; status `P&roperties`, not FiP). Identity: IDO Name `FX_HelloWorld01`; project `FX_HelloWorldProject01`; Tables sub-tab one row `FX_HelloWorld01` / `fxhw` / `Primary Base` / `Inner`; Revision 2 / 10/10/2026; Locked By blank; Check Out enabled. Nine properties, FX_Address absent (`/address/i` on the page: no match). Ownership unambiguous; checkout permitted.
- **Header resolution (view only):** Properties grid scrolled horizontally. Per-row checkboxes are Read Only, Required, Pseudo Key and Read Only Record; Upper Case is a blank cell with no value on any row. Pseudo Key is unchecked on all nine rows. Read Only Record is checked only on InWorkflow. The T1 note on the unresolved checkbox is corrected (see T1 open question 2). Evidence `t2-01`, `t2-02`.
- **Check Out (1 of 1):** one click on `Check Out`. Native response: no dialog, no confirmation text, no error. No retry.
- **Settled (3 s; `t2-03`):** Locked By the operator username (matches the identity bar; clipped in the image); row checkbox checked; Check In and Undo Check Out enabled; Check Out greyed; Revision 2 / 10/10/2026 unchanged; status `Check Out (IDOs 1 of 1)`; toolbar Save disabled; no dialog. Nine properties unchanged.
- **Counts (T2):** Check Out 1; check-in 0; undo 0; wizard 0; Finish 0; Save 0; IDOs close/reopen 0; target F4 0; runtime 0; Escape 0; typed 0; key presses 0; clicks 3; finds 7; untargeted snapshots 1; screenshots 3; mouse 2; wheel 2; waits 1; dialogs answered 0; re-login 0; designer 0; unloads 0.
- **Cumulative (T1–T2):** Check Out 1; wizard 0 (budget 1 left); Finish 0 (budget 1 left); Save 0 (conditional budget 1 left); IDOs close/reopen 1/1 (one pair left); target queries 1 (one left); runtime Refresh 0 (one left); select form opens 1; strings, classes, SQL, Forms, records 0; Designer 0; unloads 0; re-login 0.
- **Written files (T2):** `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md` (edited); `evidence/EXP-075/T2-report.md` (created); `evidence/EXP-075/t2-01-pre-checkout-properties-right-columns-upper-case-pseudo-key.png`, `t2-02-pre-checkout-properties-row1-fx-code-right-columns.png`, `t2-03-checkout-result-settled-locked-by-operator.png` (created). Harness-written snapshot files under `evidence\playwright\` are not worker-authored and were not read.
- **Limits:** UI level, same session; no database read; checkout state read from Locked By and enabled controls; Locked By clipped in the image (full value from the accessibility tree); Upper Case meaning unresolved; the Tables sub-tab readback is find-only (not screenshotted).
- **Next permitted step (not started):** the New Property wizard, once (Bound; Bind To `fxhw.FX_Address`; Property Name `FX_Address`; no class; label `FX_sAddress` if offered), with the type gate before one Finish. This needs a separate task.

---

## T3 — New Property wizard (once) and one Finish: FX_Address created (cycle 2; recovery NOT started)

Full report: `evidence/EXP-075/T3-report.md`. Task message `12c39aa0-e069-4ee6-b369-9f6d180f00e3`, worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.

- **Gates (fresh, read-only):** tab list (1); tab 1 selected; fresh snapshot: IDOs Form, FX_HelloWorld01, project FX_HelloWorldProject01, Revision 2, Locked By the operator, Check In enabled, Save disabled, nine properties, `/address/i` no match. Tables sub-tab readback: `FX_HelloWorld01` / `fxhw` / `Primary Base` / `Inner`. No second Check Out. Evidence `t3-01`.
- **Wizard (1 of 1):** New Property clicked once (`IdoPropertyWizard`). Page 1: IDO Name `FX_HelloWorld01`; Bound active (default retained); Finish disabled. Evidence `t3-02`. Next clicked once. Page 2: all attribute fields blank; no Label String ID field offered (find for "Label": none). Evidence `t3-03`.
- **Bind To:** lookup opened once; ten `fxhw.` entries, one `fxhw.FX_Address`; option selected by click (no Escape). Readback `fxhw.FX_Address`.
- **Property Name:** pre-populated `FX_Address` by the wizard after binding; one plain fill with `FX_Address`. Property Class blank.
- **Types (wizard-populated after binding; no class):** Data Type `String`; Length `150`; Column Data Type `nvarchar`; Decimal blank; Inherit checkboxes disabled. Gates met. Evidence `t3-04` (decisive pre-Finish gate).
- **Label:** not offered by the wizard; left unset. The unlabelled text area at the bottom of page 2 was left empty; its identity is not established.
- **Finish (1 of 1):** clicked once. Native response: no dialog, no alert, no text; the wizard closed; IDOs tab active; status `New Property (IDOs 1 of 1)`. Evidence `t3-05`.
- **Post-Finish inventory:** ten rows. Row 10 `FX_Address`: seq 10; Bound to Column; Column Name FX_Address; Key Sequence 0; String; 150; nvarchar; flags unchecked; Property Class blank. Rows 1–9 match T2 on every readable field (rows 1–2 right-hand flags from accessibility rows). Evidence `t3-06`.
- **Save:** none (Form clean after Finish; toolbar Save disabled). Checkout state unchanged: Locked By the operator; Check In enabled; Revision 2 / 10/10/2026.
- **Counts (T3):** wizard 1; Finish 1; Save 0; Check Out 0; close/reopen 0; target F4 0; runtime 0; clicks 7; finds 14; typed 1; key presses 0; Escape 0; snapshots 2; screenshots 6; mouse 1; wheel 1; waits 1; dialogs answered 0; re-login 0; designer 0; unloads 0; strings/classes/SQL/Forms/records 0.
- **Cumulative (T1–T3):** Check Out 1; wizard 1; Finish 1; Save 0 (conditional, 1 unused); IDOs close/reopen 1 pair (1 left); target F4 queries 1 (1 left); runtime Refresh 0 (1 left); Select Form opens 1; tab lists 3; clicks 17; typed 3; key presses 3; Escape 0; untargeted snapshots 6; finds 24; screenshots 15; strings/classes/SQL/Forms/records 0; Designer 0; unloads 0; re-login 0.
- **Written files (T3):** `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md` (edited); `evidence/EXP-075/T3-report.md` (created); `evidence/EXP-075/t3-01` … `t3-06` PNGs (created). Harness snapshot files under `evidence\playwright\` are not worker-authored and were not read.
- **Limits:** UI level, same session; no database read; Finish response has no displayed text; label not offered; alias not in the post-Finish grid (binding readback taken before Finish); data types wizard-populated (no class); the page-2 unlabelled text area not identified; Locked By from the accessibility placeholder and the identity bar.
- **Next permitted step (performed in T4; see the T4 section).**

---

## T4 — IDOs recovery pair and AC-6 verification (cycle 3; runtime Refresh NOT started)

Full report: `evidence/EXP-075/T4-report.md`. Task message `0fb29e69-d684-4680-a526-1e99396b625d`, worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.

- **Gates (fresh, read-only):** tab list (1); tab 1 selected; IDOs Form clean (Save disabled); FX_HelloWorld01 checked out to the operator (Check In enabled); no dialog; ten properties including exactly one FX_Address.
- **Close (1 of 1):** `Close Panel IDOs` clicked once. Clean; no prompt; runtime FX_HelloWorld01 tab active.
- **Reopen (1 of 1):** Form > Open > Select Form; the dialog's Filter already read `IdoCollections`; row `IDOs / IdoCollections` selected; OK pressed once. Status bar on reopen: `Filter in Place` (inherited; not toggled).
- **Deviation (recorded):** one click intended for the Select Form OK used a ref not read from a snapshot (f1e1071). It opened the Filter By combobox list in the dialog (value stayed `Name`). Escape was not used. The list was closed by selecting its current value `Name` (no change); a fresh read gave the OK ref; OK was pressed once. Recovery used one fresh untargeted snapshot and one corrected visible inspection (`t4-02`).
- **Query (one F4):** IDO Name criterion `FX_HelloWorld01` (one fill; Tab). Pre-F4 capture `t4-03`. F4 once. Result `t4-04`: one row FX_HelloWorld01; Revision 2 / 10/10/2026; Locked By operator; Check In and Undo Check Out enabled; Save disabled; Tables `FX_HelloWorld01 / fxhw / Primary Base / Inner`.
- **Inventory (ten rows):** rows 1–9 match T1–T3 on every readable field and flag. Row 10 `FX_Address`: seq 10; Bound to Column; column FX_Address; Key Sequence 0; String; 150; nvarchar; Property Class blank; Read Only, Required, Pseudo Key and Read Only Record unchecked. Screenshots `t4-05`, `t4-06`, `t4-07`. Case-insensitive address search: only the one row.
- **Label:** not offered by the wizard; not in the grid; unset.
- **Counts (T4):** close 1; reopen 1; Select Form OK 1; target F4 1; Check Out 0; Check In 0; Undo 0; wizard 0; Finish 0; Save 0; runtime 0; clicks 8 (one mis-target); finds 5; untargeted snapshots 4; typed 1; Tab 1; F4 1; Escape 0; screenshots 7; mouse 1; wheel 3; waits 1; designer 0; unloads 0; re-login 0.
- **Cumulative (T1–T4):** Check Out 1; wizard 1; Finish 1; Save 0; IDOs close/reopen 2 pairs; target F4 queries 2; runtime Refresh 0 (1 left); select form opens 2; dialogs answered 2; tab lists 4; clicks 25; typed 4; key presses 5; Escape 0; untargeted snapshots 10; finds 29; screenshots 22; strings, classes, SQL, Forms, records 0; Designer 0; unloads 0; re-login 0.
- **Written files (T4):** this record (edited); `evidence/EXP-075/T4-report.md` (created); `evidence/EXP-075/t4-01` … `t4-07` PNGs (created). Harness snapshot files under `evidence\playwright\` are not worker-authored (one was read with Grep).
- **Limits:** same-session UI recovery only; not database durability; not replay verification; Locked By is the accessibility placeholder (clipped in images); label unset and not offered.
- **Next permitted step (performed in T5; see the T5 section).**

---

## T5 — AC-7 runtime verification (cycle 4; AC-8 NOT finalized)

Full report: `evidence/EXP-075/T5-report.md`. Task message `1ec0b4ae-b96d-431d-9737-72d188a67373`, worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.

- **Gates:** tab list (1) before the select; tab 1 selected; fresh snapshot: session usable, no modal, sign-in page, banner or dialog. The recovered IDOs Form (T4) remained open as a background tab, not acted on.
- **Runtime identity (view only):** the existing `FX_HelloWorld01` Form-tab selected (no new instance). Tabpanel `FX_HelloWorld01`; status `(Object 1 of 2)`; toolbar Save disabled; two records (`Factory test one` / `FX001`; `Factory test two` / `FX002`). Evidence `t5-01`.
- **Refresh (1 of 1):** toolbar Refresh clicked once. No dialog, error or prompt. Settled after 3 s. Status `(Object 1 of 2)`; Save disabled; exactly two rows (`Factory test one` / `FX001`; `Factory test two` / `FX002`); detail pane record 1 `Factory test one` / `FX001`. Evidence `t5-02`.
- **Visual limit:** the grid is narrow and clipped; record 2 is confirmed by accessibility readback. One read-only horizontal wheel scroll (+300) and its reversal (−300) were made to look for the record text; the scroll revealed only numeric row-number columns (`t5-03`, scrolled state). No record changed.
- **Edits / Save / records:** field edits 0; Save 0; record create or delete 0; checkout change 0; IDOs close or reopen 0; target queries 0; wizard 0; Finish 0.
- **Counts (T5):** tab list 1; select 1; untargeted snapshots 2; finds 2; clicks 2 (Form-tab view; Refresh 1); mouse moves 1; wheel 2; waits 1; screenshots 3; typed 0; keys 0; Escape 0; dialogs answered 0; designer 0; unloads 0; re-login 0.
- **Cumulative (T1–T5):** Check Out 1; wizard 1; Finish 1; Save 0 (one conditional unused); IDOs close/reopen 2 pairs; target F4 queries 2; runtime Refresh 1; select form opens 2; dialogs answered 2; tab lists 5; tab selects 5; clicks 27; typed 4; key presses 5; Escape 0; untargeted snapshots 12; finds 31; screenshots 25; mouse moves 6; wheel 9; waits 5; strings, classes, SQL, Forms, records 0; Designer 0; unloads 0; re-login 0.
- **Separate audit events for final reconciliation:** (1) the T4 Select Form mis-click (Filter By list opened, value unchanged, closed by selecting its current value; then OK once). (2) One failed T4 documentation Edit: the `old_string` (`**Earlier status (after T3, 2026-10-13; one Check Out`) was not found in the record; the tool returned an error and wrote nothing; the header was corrected by a follow-up Edit. A grep confirms one `Current status (after T4` line, one `## T4 —` section and one `Earlier status (after T3` line.
- **Written files (T5):** this record (edited); `evidence/EXP-075/T5-report.md` (created); `evidence/EXP-075/t5-01`, `t5-02`, `t5-03` PNGs (created). Harness snapshot files under `evidence\playwright\` are not worker-authored and were not read as evidence.
- **Limits:** same-session UI only; not database durability; not replay verification; record 2 readable from accessibility only; the IDOs background tab not re-read after the tab switch.
- **Next step (performed in T6; see the T6 section):** the final acceptance report.

---

## T6 — final documentation and acceptance review (zero browser calls)

Full report: `evidence/EXP-075/T6-final-acceptance-report.md`. Task message `cbe16a21-a944-430c-9ee4-d86d08822e54`, worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.

- **Browser calls in T6:** zero. No Mongoose change. Non-browser reads: Glob of `evidence/EXP-075/**`; Read of this record, the five controller audits (`harness-audit-T1.md` to `T5.md`) and the T2–T5 reports.
- **Verdict:** recommended **ACCEPTED AS OBSERVED**, subject to the operator accepting the conditions in T6 §9.1 (page-2 text area and label omission; partial source reads for AC-1; Upper Case blank semantics; harness files under `evidence\playwright\`). All eight acceptance checks are supported (T6 §2).
- **Reconciliation to the controller audits:** the browser-call total is 132 (T1 29; T2 20; T3 35; T4 33; T5 15), matching the per-category counts once the corrections below are applied.
- **Corrections (T6 §7):** T2 mouse moves 1 (the T2 report said 2; wheel 2 is correct); T4 `browser_find` 4 (the T4 report said 5); cumulative mouse moves 5 and finds 30 (T5 report said 6 and 31). Also: the T1 record's "five snapshot files read" and the T4 report's "one" are superseded (controller: T1 one Read and seven Grep; T4 two files via three Grep). The T5 claim that the runtime grid scroll was restored is not visually confirmed (accessibility readback only).
- **Separate audit events:** (1) the T4 Select Form mis-targeted click (Filter By combobox body; value unchanged; closed by selecting its current value; OK pressed once); (2) the T4 failed documentation Edit (old string not found; no write; corrected by a follow-up Edit). Both recorded in T6 §7.1–7.2.
- **Final state (as last observed):** FX_HelloWorld01 checked out to the operator (T4; not re-read in T5); recovered IDOs Form clean (T4); runtime Form clean with two records, Save disabled (T5); Revision 2 / 10/10/2026.
- **Written files (T6):** `evidence/EXP-075/T6-final-acceptance-report.md` (created); this record (edited). Controller-generated audits are not worker-written. Complete T1–T6 inventory: T6 §6.
- **Limitations:** same-session UI only; not database durability; not replay verification; record 2 supported by accessibility readback only; the wizard's page-2 text area is unidentified.
- **Next step (not performed):** the operator's decision on the recommendation. No further browser work is needed to make it. A separate, authorized read-only task would be needed only if the operator wants the page-2 text area identified.

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 5 prerequisite B is complete. The operator decided acceptance and the T4 deviation; auto-accept was not renewed for Part 5.

- Run R-20261013-195311-rvhR completed as accepted after 6 worker tasks, with no pauses.
- Changed, for later cleanup (tenant-wide, AGENTS.md FX_ scope extension):
  - **IDO `FX_HelloWorld01`:** now **checked out to the operator**, after one Check Out with no confirmation text. Revision 2, 10/10/2026, unchanged. It stays checked out.
  - **New Bound property `FX_Address`** (Sequence 10):
    - Bound to column FX_Address (Bind To fxhw.FX_Address).
    - String 150, Column Type nvarchar, no property class, all flags unchecked.
    - Created by one New Property wizard and one Finish; no Save was needed.
  - The 9 original properties (FX_Code, FX_Label and 7 system properties) are unchanged.
- **Label:** the wizard offers no Label String ID field, so FX_Address has no label. The Address caption will use the string FX_sAddress on the Form (step C). An IDO-level label would need a separate property edit, which is not planned.
- Screenshots viewed by the operator assistant:
  - `t3-04`: wizard page 2: Bind To fxhw.FX_Address, Property Name FX_Address, Property Class blank, Data Type String, Length 150, Column Data Type nvarchar. Inherit is unchecked; Finish is enabled.
  - `t4-04`: after the recovery reopen and one visible-criterion query: FX_HelloWorld01 in FX_HelloWorldProject01, Revision 2, Locked By the operator, Check In and Undo Check Out enabled, and Tables FX_HelloWorld01 / fxhw / Primary Base / Inner.
  - `t4-06`: the recovered Properties grid, rows 3-10. Row 10 is FX_Address: Bound to Column FX_Address, String 150, nvarc…, with no flags set.
  - `t5-02`: the FX_HelloWorld01 runtime after one Refresh: two rows, FX001 / Factory test one shown, "(Object 1 of 2)", Save disabled.
- Operator decision: **T4 deviation accepted.** A stale-ref click in the Select Form dialog opened the Filter By dropdown. It was closed by re-selecting its current value, Name, with no change, and then OK was pressed with a current ref.
- Counts:
  - Check Out 1; wizard 1; Finish 1; Save 0;
  - IDOs close/reopen pairs 2; target queries 2; runtime Refresh 1;
  - string, class, SQL, Form and record changes 0; Designer actions 0; unloads 0; re-logins 0.
- Findings (observed):
  1. **Property without a class:** the New Property wizard fills Data Type, Length and Column Data Type from the bound column (String / 150 / nvarchar). The Inherit checkboxes are then disabled.
  2. **No label field:** the wizard offers no Label String ID field; the label is set elsewhere.
  3. **Check Out:** shows no confirmation and leaves the revision unchanged. This is the second observation, after EXP-061.
- Confinement (git status): only `evidence/EXP-075/` and this record were written by the run.
- Next: prerequisite C. Add an Address field to the User-scope FX_HelloWorld01 Form in the Web Designer: a static and an edit bound to FX_Address, with the caption string FX_sAddress = Address.
  - The tutorial makes it a Multi-Line Edit.
  - The Designer may not offer FX_Address until the metadata is reloaded. Whether an unload is needed, and whether the operator authorizes it, is decided in that brief.
