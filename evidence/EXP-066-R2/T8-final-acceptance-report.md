# EXP-066-R2 — T8 final acceptance report (documentation only; zero browser calls; zero application changes)

- Run `R-20261012-234530-k6cU`, cycle 7, task **T8**. Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `4ce321d2-e848-4e6a-9315-761f35defab1`.
- Date of this report: 2026-10-13 (system date at writing). Browser evidence is dated 2026-10-12 (T1–T7).
- Record: `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- **Browser calls in T8: 0. Application changes in T8: 0. No Designer, runtime, IDO, checkout, unload, cache, FormSync or deployment action.**

## 1. Method and sources

- Read in full: the experiment record (`experiments/EXP-066-R2-...md`, 285 lines); the seven controller-generated audits `evidence/EXP-066-R2/harness-audit-T1.md` to `harness-audit-T7.md` (each row enumerated and recounted).
- Searched and checked: the explicit-count lines of `T1-report.md` to `T7-report.md` (by search, not full re-read), and the T7 audit-count lines.
- Not re-inspected: the application (no browser calls), and the screenshots (no re-view in T8; each capture's content is as recorded in the task reports and the earlier viewed readings).
- Not read: `tools/` (intentionally unreadable); no secrets; no shell or git access.

The controller audits are the independent counts. Where a worker-reported count differs from a controller row, this report uses the controller row.

## 2. Count reconciliation (controller rows vs worker-reported totals)

### 2a. Browser calls per task

| Task | Tab list | Tab select | Snapshots | Finds | Clicks | Type | Key | Mouse move / wheel | Waits | Screenshots | **Total (controller)** | Worker-reported | Match |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | 1 | 1 | 3 | 1 | 3 | 0 | 2 | 0 / 0 | 4 | 5 | **20** | 20 | yes |
| T2 | 1 | 1 | 1 | 3 | 2 | 1 | 1 | 0 / 0 | 3 | 4 | **17** | 17 | yes |
| T3 | 1 | 1 | 6 | 6 | 8 | 1 | 1 | 0 / 0 | 6 | 8 | **38** | 38 | yes |
| T4 | 1 | 1 | 6 | 1 | 5 | 1 | 0 | 0 / 0 | 4 | 6 | **25** | 25 | yes |
| T5 | 1 | 1 | 2 | 1 | 3 | 0 | 0 | 1 / 2 | 4 | 5 | **20** | 20 | yes |
| T6 | 1 | 1 | 5 | 3 | 6 | 1 | 1 | 1 / 1 | 7 | 8 | **35** | 35 | yes |
| T7 | 1 | 1 | **6** | **3** | **8** | 2 (1 failed) | 1 | 0 / 0 | **8** | 8 | **38** | **40** | **NO** |

Cumulative T1–T7 by controller rows: **193** (not 195). Per-category cumulative: tab list 7; tab select 7; snapshots 29; finds 18; clicks 35; type 6 (5 successful, 1 failed); key presses 6 (F4 ×3, Tab ×2, End ×1); mouse moves 2; wheel 3; waits 36; screenshots 44. Sum: 7+7+29+18+35+6+6+2+3+36+44 = 193.

### 2b. Discrepancies found and resolved in this report

| Item | Worker-reported (T7 report and record) | Controller row evidence | Resolution |
|---|---|---|---|
| T7 explicit snapshots | 8 | 6 (rows 3, 6, 22, 33, 38, 43) | **6** used. The T7 report's "snapshots 8" was an over-count of tool-returned snapshots, which are not separate calls. |
| T7 clicks | 9 (its list enumerates 8; the 9th was "stale-ref attempt not a click") | 8 (rows 4, 11, 15, 17, 29, 34, 39, 44) | **8** used. The 9th had no basis; the failed call was a `browser_type`, not a click. |
| T7 waits | 7 | 8 (rows 5, 12, 18, 25, 30, 35, 40, 45) | **8** used. The T7 report omitted the 2 s wait after the Form > Open click. |
| T7 total | 40 | 38 | **38** used. |
| T7 cumulative (explicit) | 195 | 193 | **193** used. |
| T7 first screenshot read failure | Attributed to "absolute path form" | Row 8: `Read` on the absolute path failed ("File does not exist"); row 9 Glob confirmed the file; row 10 `Read` on the same absolute path succeeded | Cause not established. The attribution in the T7 report is withdrawn; the failure was a single transient read error after a successful save. |
| T7 stale-ref type failure | Rejected on `f1e1` (body), no state change | Row 21: error, locator resolved to `<body>`, no state change | Consistent. Corrected type on `f1e754` at row 23 succeeded. |
| T7 controller flag | "prohibited-tool hits=2" | Two `browser_type` rows (21 failed, 23 ok) | The controller flag is a classification of typed entries, not a brief violation. The typed text was the Select Form filter (`FX_Items`), a dialog field, not a record field. |
| T3 snapshot on Designer tab | Disclosed (T3 report §1): snapshot #1 taken while tab 0 was current | Row 2: `browser_snapshot` before the tab-select at row 3 | Confirmed. Read-only accessibility read of the Designer page content; no click, typing or screenshot on it. Counted as one snapshot (T3 total 38 matches). Recorded as a read of a non-selected tab, not a Designer action. |
| Controller header line (e.g. T7 "12 actions, 26 reads") | — | Header classification does not reproduce from the table rows | Not used. Counts in this report come from the table rows. |
| T2 "five snapshots returned inside action results" | Worker-reported | Not enumerated in the controller table | Not counted in any total; treated as unverified and immaterial to the explicit total. |

No other discrepancy was found in T1–T6.

### 2c. Mutation and lifecycle operations (controller rows)

| Operation | Per-task (controller row) | Cumulative |
|---|---|---|
| New Table invoked | T2 row 9 (1) | **1** |
| Table Name Tab commit | T2 row 17 (1) | **1** |
| Table Alias Tab commit | T3 row 9 (1) | **1** |
| Builder Add | T3 row 38 (1) | **1** |
| Typed join text | none | **0** |
| Wizard OK (table wizard) | T3 row 43 (1) | **1** |
| Wizard Cancel | none | **0** |
| Table entries added | T3 (FX_UMs / fxum) | **1** |
| New Property wizard invoked | T4 row 8 (1) | **1** |
| Property wizard Next (navigation) | T4 row 13 (1) | 1 (navigation; not a commit) |
| Finish | T5 row 6 (1) | **1** |
| Save (IDO or runtime) | none (no Save click or key in any task) | **0** |
| Properties added | T5 (FX_UMsDescription) | **1** |
| IDO Collections close | T6 row 6 (1) | **1** |
| IDO Collections reopen | T6 rows 11, 13, 19 (Form menu, Open, Select Form OK) | **1** |
| Exact-name F4 queries producing a result | T1 rows 18, 24 (2 presses; first entered Filter in Place); T6 row 25 (1) | T1: 1 result from 2 presses; T6: 1 result from 1 press |
| Runtime FX_Items close | T7 row 11 (1) | **1** |
| Runtime FX_Items reopen | T7 rows 15, 17, 29 (Form menu, Open, Select Form OK) | **1** |
| Runtime record edits | none | **0** |
| Runtime Save | none | **0** |
| Check-in / undo checkout / second checkout | none | **0 / 0 / 0** |
| Designer actions | none (no Designer click, typing or screenshot) | **0** |
| Designer-page read | T3 row 2 (one read-only snapshot taken while tab 0 was current) | 1 read (not an action) |
| Unload / cache / FormSync / deployment / regeneration | none | **0** |
| Dialogs answered | T6 row 19 (Select Form OK), T7 row 29 (Select Form OK) | **2** (T6 and T7 reports each said 1, consistent) |
| IDO Tables sub-panel opened / closed | opened T1 row 29 and T2 row 4; closed T1 row 34 and T4 row 6 | opened 2 / closed 2 |
| Prohibited lifecycle operations (more than one New Table, Finish, or Save; any retry of an uncertain mutation) | none | **0** |

## 3. Worker-written and harness-written file inventory (T1–T8)

### 3a. Repository files written by the worker

| File | Created or modified | By task |
|---|---|---|
| `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` | **Created** (T1 controller row 38); **modified** (T2–T7 controller edits; T8 edits) | T1–T8 |
| `evidence/EXP-066-R2/T1-report.md` | **Created** (T1 row 37) | T1 |
| `evidence/EXP-066-R2/T2-report.md` | **Created** (T2 row 22); **modified** once (T2 row 23, typo correction in the outcome line) | T2 |
| `evidence/EXP-066-R2/T3-report.md` | **Created** (T3 row 48) | T3 |
| `evidence/EXP-066-R2/T4-report.md` | **Created** (T4 row 35); **modified** once (T4 row 36, one sentence corrected) | T4 |
| `evidence/EXP-066-R2/T5-report.md` | **Created** (T5 row 26) | T5 |
| `evidence/EXP-066-R2/T6-report.md` | **Created** (T6 row 44) | T6 |
| `evidence/EXP-066-R2/T7-report.md` | **Created** (T7 row 49); **modified** six times (T7 rows 50–55, audit-count edits made during T7). **The current T7 report still carries the uncorrected totals (clicks 9, snapshots 8, waits 7, total 40, cumulative 195).** The corrected figures are in §2 of this report and in the record. | T7 |
| `evidence/EXP-066-R2/T8-final-acceptance-report.md` | **Created** (T8; this file) | T8 |
| `evidence/EXP-066-R2/*.png` (44 screenshots: `t1-01`–`t1-05`, `t2-01`–`t2-04`, `t3-01`–`t3-08`, `t4-01`–`t4-06`, `t5-01`–`t5-05`, `t6-01`–`t6-08`, `t7-01`–`t7-08`) | **Created** by the browser screenshot tool at the worker's requested filenames | T1–T7 |

Created files (worker): 9 Markdown documents (the record, T1–T8 reports) plus 44 PNG screenshots = **53 files**. Modified files (worker): the record (repeated), `T2-report.md` (once), `T4-report.md` (once), `T7-report.md` (six edits).

### 3b. Files not written by the worker

- `evidence/EXP-066-R2/harness-audit-T1.md` to `harness-audit-T7.md` (7 files): controller-generated. Not worker-written.
- `evidence/playwright/*` (browser-tool console logs and page snapshots written during the runs): outside the EXP-066-R2 path, tool-written, and **not enumerated** in this report (the count is not reproducible from the available records). The harness and operator git review are authoritative.

## 4. Repository confinement

- Every controller Write or Edit row (T1–T7) targets a path inside `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` or `evidence/EXP-066-R2/`. No controller row writes to `tools/`, `AGENTS.md`, the tutorial, any earlier experiment record or any other repository path.
- The T1 read of earlier EXP-066 and EXP-061 records, and of `hello-world-pt4.md`, was read-only (controller rows 4–10 of harness-audit-T1).
- No shell, Bash, git or script was used by the worker (controller tables contain none).
- Repository confinement is supported by the worker and controller inventories above. **Operator git review is authoritative.**

## 5. Acceptance matrix

| AC | Status | Evidence (paths) | Observed facts | Limitations |
|---|---|---|---|---|
| **AC-1** Sources reviewed; session usable; one exact-name IDO for FX_Items; identity, revision, checkout (operator), Locked By recorded; 12-property inventory incl. FX_Picture; Tables inventory (fxitms, Primary Base); FX_UMsDescription and fxum absent | **PASSED (qualified)** | `t1-01`, `t1-02`, `t1-03`, `t1-04`, `t1-05`; `T1-report.md` §1–7; harness-audit-T1 rows 1–17 | Project FX_HelloWorldProject01; base FX_Items; alias fxitms; Primary Base; Revision 2 / 10/10/2026; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; 12 properties incl. FX_Picture (row 12); Tables = one entry; FX_UMsDescription absent; no fxum entry. Session usable; no sign-in challenge | **Qualification:** two F4 key presses (controller rows 18, 24). The first entered Filter in Place without a result; the second produced the single result. The brief's "one exact-name F4 query" was met in result, not in key count. `t1-02` is misnamed (shows Filter in Place). Class-bound Data Type/Length blank in grid. Locked By clipped on screen (full value from accessibility). UI only. |
| **AC-2** One New Table; Table Name `FX_UMs` committed by Tab (readback, no message); alias `fxum`; Secondary and Left Outer kept; join text expressing the equality, verbatim; every field recorded; one wizard OK with native response; Tables lists FX_Items and FX_UMs only | **PASSED (qualified)** | `t2-02`, `t2-03`, `t2-04` (Table Name commit); `t3-01`, `t3-02` (alias); `t3-06` (configured before Add); `t3-07` (complete, join text, before OK); `t3-08` (Tables after OK); `T2-report.md` §5–7; `T3-report.md` §1–5; harness-audit-T2 rows 9–19; harness-audit-T3 rows 8–45 | Table Name `FX_UMs` readback after Tab and 2 s settle; alias `fxum`; Secondary; Left Outer; builder join `fxum.[FX_UM] = fxitms.[FX_UM]` (builder Add, one click); OK click once; wizard closed with no native text; Tables shows FX_Items/fxitms/Primary Base/Inner and FX_UMs/fxum/Secondary/Left Outer/join | **Qualifications:** (i) the builder wrapped identifiers in square brackets, so the text is `fxum.[FX_UM] = fxitms.[FX_UM]`, not the unbracketed form in the brief; the equality is the same. (ii) Server validity of `FX_UMs` and generated SQL not observed; the OK acceptance is observed only as the wizard closing and the entry appearing in the Tables view. (iii) The original EXP-066 Table Name lookup-completeness question is not resolved (the Tab-committed route worked; the list's completeness was not tested). |
| **AC-3** One New Property wizard: Bound (default); Bind To the fxum FX_Description column; joined columns listing recorded; name FX_UMsDescription; other fields at recorded defaults; Finish once with native response; at most one Save | **PASSED (qualified)** | `t4-02` (page 1 Bound), `t4-03` (page 2 blank), `t4-04` (21-option Bind To list), `t4-05` (Bind To committed, pre-rename), `t4-06` (configured before Finish), `t5-01` (pre-Finish gate), `t5-02` (Finish result); `T4-report.md` §4–9; `T5-report.md` §1–2, §4; harness-audit-T4 rows 8–34; harness-audit-T5 rows 4–10 | Bound (default). Bind To options: fxitms block (12) then fxum block (9), distinguished by the `alias.` prefix only. Selected `fxum.FX_Description`. Property Name auto-filled `FX_Description`, replaced by typed `FX_UMsDescription`. Property Class blank. Auto-filled Data Type String (inherit disabled), Length 50, Column Data Type nvarchar (inherit unchecked). Finish once; native response: no message, no dialog, no validation error; wizard closed; status `New Property (IDOs 1 of 1)`. Save count 0 (disabled after Finish). | **Qualifications:** the Finish response has no visible text (the brief asked for it verbatim; the verbatim response is "none"). The grid does not show the `fxum` alias. Length 50 (joined) vs 150 (base) is the wizard readback, not checked against SQL. The Bound radio was set on page 1 (T4); page 2 has no separate binding control, so Bound was carried, not re-verified on page 2. |
| **AC-4** After Finish: exactly one added property FX_UMsDescription (Bound, fxum FX_Description); 12 originals unchanged; IDO checked out to operator; revision recorded | **PASSED (qualified)** | `t5-02` (IDOs after Finish; row 3 visible), `t5-04` (rows 6–13; FX_Picture row 13), `t5-05` (rows 1–8; row 3 new), `t5-03` (Tables); `T5-report.md` §3; harness-audit-T5 rows 8–24 | 13 rows. Original 12 match T1 baseline in every readback field (names, sequences, classes, property types, columns, key seq, data type, length, column type). New row: FX_UMsDescription, seq 2, class blank, Bound to Column, column FX_Description, key seq 0, String, 50, nvarchar. Checked out to operator (Check In, Undo Check Out enabled). Revision Num 2; Revision Date 10/10/2026 (unchanged). | **Qualifications:** the sequence of the new property is 2, the same as FX_Description (wizard-assigned; observed; not edited; intent unresolved). The grid does not show the `fxum` alias (the association rests on the pre-Finish readback and the Tables join). Checkbox-column mapping inferred from EXP-061. No database read. |
| **AC-5** IDO Collections closed once and reopened once; one exact-name F4; Tables view, property inventory with FX_UMsDescription, and checkout state match AC-2 and AC-4 | **PASSED (qualified)** | `t6-01` (pre-close, 13 rows, clean), `t6-02` (after close; runtime tab active), `t6-03` (Select Form route), `t6-04` (reopened, Filter in Place, blank), `t6-05` (after one F4: `Description (IDOs 1 of 1)`), `t6-06` (rows 1–8), `t6-07` (rows 6–13), `t6-08` (Tables); `T6-report.md` §1–7; harness-audit-T6 rows 6–43 | Close: `Close Panel IDOs`, clean, no prompt (controller row 6). Reopen: Form menu → Open → Select Form (`IDOs / IdoCollections`) → OK (rows 11, 13, 19). After one typed exact name and one F4: `Description (IDOs 1 of 1)`, one FX_Items row; project FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By operator; Check In and Undo Check Out enabled; Save disabled. 13 properties identical to T5 in every field. Tables: two entries and join `fxum.[FX_UM] = fxitms.[FX_UM]`. | **Qualifications:** the reopened Form opened in Filter in Place with blank criteria (not treated as a result); the one F4 produced the result. The grid does not expose the `fxum` alias. This is a same-session UI close/reopen only, which is a weak persistence boundary; it is not a database durability test. |
| **AC-6** Runtime Form closed once (if open) and reopened once; dumbbell, eggs, guitar load; Form clean; no record edits | **PASSED (qualified)** | `t7-01` (baseline Object 1 of 3), `t7-02` (post-close), `t7-03` / `t7-04` (Select Form; exact `FX_Items` / `FX_Items` row), `t7-05` (reopened, Object 1 of 3), `t7-06` (Object 2 of 3, eggs), `t7-07` (Object 3 of 3, guitar), `t7-08` (returned to Object 1 of 3); `T7-report.md` §2–7; harness-audit-T7 rows 4–48 | Close: `Close Panel FX_Items`, clean (row 11). Reopen: Form menu → Open → filter → End → OK (rows 15, 17, 21, 24, 29); exact row confirmed before OK. Loaded directly at Object 1 of 3 (no Filter in Place). Record 1 dumbbell / 45 pound iron / 45.00 / EA; record 2 eggs / cage free / 6.99 / DZ (Object 2 of 3); record 3 guitar / natural acoustic / 129.99 / EA (Object 3 of 3). Save disabled throughout; no dirty indicator. No record field edited; no runtime Save. | **Qualifications:** values are UI readbacks, not a database read. Surrogate identifiers not visible and not read. Pictures displayed but not interpreted. One `browser_type` on a stale ref was rejected with no change, then corrected (controller rows 21, 23). The `t7` Read error on the first screenshot read (controller row 8) was transient; the cause is not established. |
| **AC-7** No other change: no other IDO, property, table entry, checkout, SQL, Form, preference or Designer change; no unload | **PASSED (qualified)** | Audits harness-audit-T1 to -T7 (all rows); §2c above; §3–4 above | Table entries: one added (FX_UMs / fxum). Properties: one added (FX_UMsDescription). Checkouts: no check-in, undo, or second checkout in any task; the checkout is the operator's since EXP-061 (not a new action here). Save: none. Unload/cache/FormSync/deployment: none. Preferences, SQL, Form definitions, property classes, strings, themes: no change action. Designer: no action; one read-only snapshot of the Designer page content (T3 row 2) while tab 0 was current. Controller write/edit rows: all inside the two EXP-066-R2 paths. | **Qualifications:** the T3 read-only Designer snapshot (disclosed in T3; read, not acted on). The T7 count correction (§2b), which is a reporting correction and not a change to the application. Typed entries flagged by the controller (`browser_type`, six calls; five successful): the Table Name, alias, Property Name, IDO Name criterion and Select Form filter. Each was a brief-authorised field or a dialog filter, not a record edit. |
| **AC-8** Final report gives decisive evidence for AC-1–AC-6; complete action audit with exact counts (one New Table; one Table Name Tab; ≤1 builder Add or typed join; one wizard OK; one wizard; one Finish; ≤1 Save; one IDO close/reopen; one runtime close/reopen; zero check-in; zero unload; zero Designer actions); worker file inventory; final state | **PASSED** (this report, with the count corrections of §2b applied) | This file; `experiments/EXP-066-R2-...md` (T8 section); §2c, §3, §6 | New Table 1 (required: 1 ✓). Table Name Tab commit 1 (required: 1 ✓). Builder Add 1 (required: ≤1 ✓). Typed join 0 (✓). Wizard OK 1 (required: 1 ✓). Table wizard invocations 1 (✓). New Property wizard 1; Finish 1 (required: 1 ✓). Save 0 (required: ≤1 ✓). IDO Collections close/reopen 1/1 (✓). Runtime close/reopen 1/1 (✓). Check-in 0 (✓). Unload 0 (✓). Designer actions 0 (✓). | The total browser-call count for the run is **193** (controller-verified), not the 195 previously recorded. |

## 6. Per-task and cumulative counts (controller-verified; required list)

| Count | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | Cumulative |
|---|---|---|---|---|---|---|---|---|---|
| New Table | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | **1** |
| Table Name Tab commit | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | **1** |
| Table Alias Tab commit | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Builder Add | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Typed join text | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Wizard OK (table) | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| New Property wizard | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Finish | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Save (IDO or runtime) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| IDO Collections close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** |
| Runtime FX_Items close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | **1 / 1** |
| Runtime record edits | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout-management operations (check-in, undo, second checkout) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** (one read-only Designer-page snapshot in T3) |
| Prohibited lifecycle operations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Explicit browser calls | 20 | 17 | 38 | 25 | 20 | 35 | 38 (was 40) | 0 | **193 (was 195)** |

## 7. Qualifications to carry forward (not resolved)

1. **Builder-generated bracketed join.** The join text is `fxum.[FX_UM] = fxitms.[FX_UM]`. The brief's form is `fxum.FX_UM = fxitms.FX_UM`. The equality is the same; the square brackets come from the builder's identifier quoting. Observed; not replay-verified.
2. **Post-reopen grid does not expose the `fxum` alias.** The property association for FX_UMsDescription rests on the pre-Finish Bind To readback (`fxum.FX_Description`, T4/T5) and the persisted Tables join (T5/T6). No row-detail surface was used to show the alias after reopen.
3. **Duplicate Sequence 2.** FX_UMsDescription was assigned Sequence 2, the same as FX_Description. Observed; not edited; intent unresolved.
4. **Length 50 (joined) vs 150 (base).** The wizard's readback for `fxum.FX_Description` is Length 50; the base `fxitms.FX_Description` shows 150 in the grid. Not checked against the SQL column definition.
5. **Ordinary close/reopen is a weak persistence boundary.** Close and reopen were done within the same browser session. They show UI recovery only.
6. **Database durability and generated SQL are unverified.** No database or SQL read was made. The join's SQL effect and the property's stored binding are not established.
7. **Server-side validity of FX_UMs.** The OK click closed the wizard and the entry appears in the Tables view. Server validation and the generated SQL were not observed.
8. **Table Name lookup completeness.** The original EXP-066 blocker was a first-page list; the Tab-committed route worked. The completeness of the lookup list was not tested.
9. **First F4 behaviour.** In T1, the first F4 with the IDO Name criterion focused entered Filter in Place without a result; the second produced the result. The cause is unresolved. In T6 and T7, one F4 (or one filter + End + OK) gave the result.
10. **Checkbox-column mapping** in the Properties grid is inferred from EXP-061 (not asserted here).
11. **Surrogate identifiers, record picture contents** and any SQL-level record values were not read.

## 8. Final state (from the T7 final observation; no new browser inspection in T8)

- Web Client (tab 1) is the selected tab. The active Form is the **FX_Items runtime Form**, `Description (Object 1 of 3)`, record 1 dumbbell / 45 pound iron / 45.00 / EA. Save disabled; no dirty indicator; no dialog or unsaved-change prompt at the last observation (T7 find for Save/dirty/unsaved).
- The **IDOs Form** for FX_Items is open behind it, clean: Revision 2 (10/10/2026); Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; Save disabled; Tables: FX_Items/fxitms/Primary Base/Inner and FX_UMs/fxum/Secondary/Left Outer with join; Properties: 13 rows, FX_UMsDescription at row 3 (as of T6 readback; the T7 action did not change IDO state).
- Tab 0 (Web Designer): not selected in T5–T7; last acted-on state from T3 is a read-only snapshot only.
- The inherited FX_Items runtime tab that existed at T1 was closed and reopened in T7; the current runtime Form is the reopened instance.

## 9. Overall disposition

- **All eight acceptance checks are supported** (AC-1 to AC-8), each with qualifications listed in §5 and §7.
- **Recommendation: ACCEPTED as observed, with qualifications.** Not replay_verified. Not database durability. Generated SQL and the property's stored binding are not established.
- The count correction in §2b changes the recorded totals (T7 explicit calls 40 → 38; cumulative 195 → 193). It does not change any acceptance outcome.
- No failed or pending check. No deferred operation is recommended. The Section 7 unload remains deferred to the Section 8 experiment, as the brief states. Nothing in this report suggests executing it.

## 10. Knowledge state

| Finding | State |
|---|---|
| Table Name `FX_UMs` committed by one Tab; readback and no validation message at the client | observed (one run; T2; T3 pre-check) |
| Alias `fxum` committed by one Tab; Secondary and Left Outer kept | observed (one run; T3) |
| Builder join generates `fxum.[FX_UM] = fxitms.[FX_UM]` with one Add | observed (one run; T3) |
| One wizard OK creates the FX_UMs / fxum entry; native response: no text; wizard closes | observed (one run; T3) |
| Bind To lists 21 `alias.column` options (fxitms block then fxum block; prefix distinguishes) | observed (one run; T4) |
| Choosing `fxum.FX_Description` auto-fills name, String, 50, nvarchar; class blank | observed (one run; T4) |
| Finish adds exactly one bound property; no native text; Save stays disabled | observed (one run; T5) |
| Close/reopen of IDO Collections recovers identity, 13 properties and two Tables entries (UI session) | observed (one run; T6) |
| Runtime Form close/reopen recovers three records (Object 1–3 of 3) (UI session) | observed (one run; T7) |
| Joined Length 50 vs base 150; duplicate Sequence 2; alias not visible in grid | observed; **unresolved** against SQL / intent |
| First F4 entering Filter in Place (T1) | observed; **unresolved** cause |
| Server validity of FX_UMs; generated SQL; database durability; stored binding | **unresolved** (not observed) |
| Any finding as replay_verified | **not claimed** |

## 11. Open questions for the coordinator

1. Accept the record as ACCEPTED-observed-with-qualifications (recommended), or request a read-only SQL or property-detail check in a separate authorised task to close items 6–7 of §7.
2. Whether to keep the builder's bracket quoting or use a typed join in any future replay (not decided; not a blocker).
3. The T7 report still carries the uncorrected totals. The brief limited T8 to the experiment record. The operator may ask for a T7-report correction in a separate task; this report and the record carry the corrected figures.
