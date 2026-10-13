# EXP-075 — T6 final acceptance report (documentation and review only; zero browser calls)

Date 2026-10-13. Task message `cbe16a21-a944-430c-9ee4-d86d08822e54`; worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.
Run `R-20261013-195311-rvhR`, cycle 5, task T6. Experiment: Hello World Part 5 prerequisite B — add the bound `FX_Address` property to IDO `FX_HelloWorld01`.

**Scope of T6:** read the experiment record, the T2–T5 reports, the controller audits `harness-audit-T1.md` to `harness-audit-T5.md`, and the evidence directory listing. Write this report. Update the experiment record. **Zero browser calls, zero Mongoose changes.** Observed only.

## 1. Verdict

**Recommendation: ACCEPTED AS OBSERVED** (UI level, same session; not replay-verified; no database durability claimed), **subject to the operator accepting the four limitations in §9 that bear on the verdict**: (a) the unidentified page-2 text area in the property wizard, which is why the label omission rests on the absence of a caption; (b) the partial source reads for AC-1; (c) the two worker count corrections in §7, which change no state; (d) harness-generated tool files under `evidence\playwright\` outside the EXP-075 path, which need the operator's git review.

All eight acceptance checks are supported by the evidence listed below. No additional browser work is needed to make this recommendation. If the operator rejects condition (a), the precise missing evidence is an identification of the page-2 text area; that requires a separate, authorized read-only browser task and cannot be done in T6.

## 2. Acceptance matrix (AC-1 to AC-8)

Each row states what the decisive evidence proves and what it does not prove. "Accessibility readback" means the accessibility-tree text captured in the worker's tool output; it is not a screenshot.

| AC | Status | Decisive evidence (repo-relative) | What it proves | What it does not prove |
| --- | --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; fresh IDOs Form via Select Form | **Supported** (observed, same session) | T1 `evidence/EXP-075/t1-01-idos-tab-clean-before-close.png` (clean old IDOs tab; identity bar); `t1-02-select-form-dialog-idos-row-selected.png` (row `IDOs / IdoCollections` selected); `t1-04-post-f4-idos-one-fx-helloworld01-identity.png` (fresh IDOs Form showing FX_HelloWorld01). Session usable: T1 start snapshot and T5 fresh snapshot (no expiry modal, sign-in page, banner or dialog). | The fresh IDOs Form opened through Form > Open > Select Form in T1 (and again in T4). The session was usable at the start of T1 and T5. Sources listed in the record §Sources reviewed. | That every source was read in full (see §9, condition b). |
| **AC-2** One visible-criterion query before F4; project, base table/alias, Revision, Locked By, checkout state, complete inventory; FX_Address absent (case-insensitive) | **Supported** (observed, UI level) | Pre-F4: `t1-03-pre-f4-idos-fx-helloworld01-criterion-visible.png` (IDO Name `FX_HelloWorld01`, echo row, status `Filter in Place`, Save greyed). Result: `t1-04` (one row; project FX_HelloWorldProject01; Tables sub-tab `FX_HelloWorld01 / fxhw / Primary Base / Inner`; Revision Num 2; Revision Date 10/10/2026; Locked By blank; Check Out enabled). Inventory: `t1-05` (rows 1–8), `t1-06` (row 9 and end of grid). Absence: T1 snapshot `(?i)address` zero matches; T2 and T3 `/address/i` on the page zero matches. | One FX_HelloWorld01 row; identity, revision, checkout state and nine-row inventory as recorded; no address-like property before Finish. | Anything beyond the UI (no catalogue query). Upper Case blank semantics (§9, condition c). |
| **AC-3** Exactly one Check Out (or none if already the operator's) with response, Locked By and revision | **Supported** (observed, UI level) | Pre-state: `t2-01-pre-checkout-properties-right-columns-upper-case-pseudo-key.png` (Check Out enabled; Locked By blank; Revision 2 / 10/10/2026). Result: `t2-03-checkout-result-settled-locked-by-operator.png` (row checkbox checked; Check In and Undo Check Out enabled; Check Out greyed; Revision 2 / 10/10/2026 unchanged; Locked By text starting `anton.ramos@3m` visible; status `Check Out (IDOs 1 of 1)`; Save greyed). Controller T2 row 18: one click on Check Out. | Exactly one Check Out was invoked on an unlocked IDO; afterwards the IDO is locked to the operator's account and the revision is unchanged. The Locked By text in `t2-03` is the only visible identification of the owner. | That a server-side lock exists beyond the UI controls; the Check Out response (none displayed). |
| **AC-4** One New Property wizard: Bound; Bind To `fxhw.FX_Address` from the lookup; Property Name FX_Address; no class; label where offered; type String / 150 / nvarchar recorded; one Finish with native response | **Supported** (observed, UI level), with the label limitation in §9 (a) | Wizard page 1: `t3-02-wizard-page1-bound-default-ido-name.png` (Bound selected; Finish disabled). Page 2 before binding: `t3-03-wizard-page2-attributes-before-bind-to.png` (fields empty). Pre-Finish gate: `t3-04-wizard-page2-bind-to-and-property-name-set-types-readback.png` (Bind To `fxhw.FX_Address`; Property Name `FX_Address`; Property Class empty; Data Type `String`; Length `150`; Column Data Type `nvarchar`; Finish enabled). Finish result: `t3-05-finish-result-idos-form-after-wizard.png` (wizard closed; status `New Property (IDOs 1 of 1)`; Save greyed; no dialog). Controller T3: New Property once (row 13), Bind option once (row 26), one plain Property Name fill (row 28), Finish once (row 32). The lookup listed ten `fxhw.` entries with one `fxhw.FX_Address`. | The binding, name, class blank, type metadata shown by the wizard, and one Finish with no displayed response. | That the Finish response was a database write (inferred from the post-Finish inventory, §3). The label (see §4). |
| **AC-5** After Finish the Form is clean and exactly one new FX_Address property exists with binding, type and label; original properties unchanged | **Supported** (observed, UI level; no Save performed) | Clean: `t3-05` (Save greyed) and `t3-06-post-finish-properties-fx-address-row-and-original-nine.png` (row 10 `FX_Address`, Bound to Column, Column Name FX_Address, Key Sequence 0, String, 150, nvarchar, flags unchecked; rows 3–9 visible with flags; Save greyed). Full ten-row inventory with rows 1–2 right-hand flags: `t4-05`, `t4-06`, `t4-07` (T4, after the close/reopen). Accessibility readbacks in T3 and T4. | Exactly one new FX_Address; the nine baseline rows match T2 on every readable field and flag (including the right-hand columns in `t4-07`); the Form was clean. | Label (not offered; see §4). The database state. |
| **AC-6** Clean IDOs Form closed once more and reopened once more; one visible-criterion query recovers FX_HelloWorld01 with baseline plus FX_Address, checked out to the operator | **Supported** (observed, same-session UI recovery only) | Reopen: `t4-01-select-form-idos-row-selected-before-ok.png`; deviation recovery `t4-02-select-form-after-misclick-recovery-filter-by-name-before-ok.png`. Pre-F4 criterion: `t4-03-pre-f4-idos-fx-helloworld01-criterion-visible-recovery.png`. Recovered identity and checkout state: `t4-04-recovered-identity-checkout-state-after-f4.png` (one row FX_HelloWorld01; Revision 2 / 10/10/2026; Locked By operator; Check In and Undo Check Out enabled; Tables readback). Recovered inventory: `t4-05` (rows 1–8, left columns), `t4-06` (rows 3–10, right-hand flags; FX_Address row), `t4-07` (rows 1–8, right-hand flags). Controller T4: close once (row 4); reopen through Select Form (rows 6–19); one target F4 (row 25). | The IDOs Form closed and reopened once each; the recovered record and ten-row inventory equal baseline plus FX_Address; checkout to the operator observed on reopen. | Durability: the same browser session was used, so this is UI recovery only. The Locked By text is the accessibility placeholder (the screenshot shows the clipped prefix). |
| **AC-7** Runtime FX_HelloWorld01 after one Refresh shows exactly FX001 / Factory test one and FX002 / Factory test two; Save disabled; nothing changed | **Supported** (observed, UI level; record 2 by accessibility readback) | Pre-Refresh: `t5-01-runtime-pre-refresh-identity-save-disabled.png` (tab FX_HelloWorld01; Save greyed; status `(Object 1 of 2)`). Post-Refresh: `t5-02-runtime-post-refresh-two-records-save-disabled.png` (status `(Object 1 of 2)`; Save greyed; two rows; record 1 `Factory test one` / `FX001` legible in the detail pane). Record 2 **by accessibility readback**: gridcells `Factory test two` and `FX002` (T5 post-Refresh find; controller T5 row 11). Controller T5: one toolbar Refresh (row 9); no edit, Save, record change or new instance. | Exactly two records after one Refresh, with the expected names and codes; Save disabled; no edits. | Record 2's text in any screenshot. `t5-03` (scrolled) shows numeric columns only and is not decisive. Database state. |
| **AC-8** Final report: decisive evidence for AC-1 to AC-7; complete audit with exact counts; baseline and recovered inventories; worker-written-file inventory; final state | **Supported** by this report, with the count reconciliation in §7 | This report §2 (matrix), §3 (inventories), §5 (audit), §6 (file inventory), §7 (reconciliation), §8 (final state). | The final report contains the evidence and the reconciled counts the brief lists. | That the operator's git review confirms confinement (§9, condition d). |

## 3. Inventories

### 3.1 Baseline inventory (T1 and T2, before any mutation): nine properties

Source: T1 `t1-05`, `t1-06`; T2 `t2-01`, `t2-02`; accessibility readbacks in T1, T2 and T3. Every row is Bound to Column with no Property Class.

| # | Property | Seq | Column | Key Seq | Data Type | Length | Column Type | Read Only | Required | Upper Case | Pseudo Key | Read Only Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Code | 1 | FX_Code | 1 | String | 30 | nvarchar | no | **yes** | blank | no | no |
| 2 | FX_Label | 2 | FX_Label | 0 | String | 100 | nvarchar | no | no | blank | no | no |
| 3 | CreatedBy | 3 | CreatedBy | 0 | String | 128 | UsernameType | **yes** | no | blank | no | no |
| 4 | UpdatedBy | 4 | UpdatedBy | 0 | String | 128 | UsernameType | **yes** | no | blank | no | no |
| 5 | CreateDate | 5 | CreateDate | 0 | Date | (blank) | CurrentDateType | **yes** | no | blank | no | no |
| 6 | RecordDate | 6 | RecordDate | 0 | Date | (blank) | CurrentDateType | **yes** | no | blank | no | no |
| 7 | RowPointer | 7 | RowPointer | 0 | GUID | (blank) | RowPointerType | **yes** | no | blank | no | no |
| 8 | NoteExistsFlag | 8 | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType | no | no | blank | no | no |
| 9 | InWorkflow | 9 | InWorkflow | 0 | Byte | (blank) | FlagNyType | no | no | blank | no | **yes** |

Absence of FX_Address at baseline: T1 snapshot search `(?i)address` zero matches; T2 `/address/i` zero matches.

### 3.2 Recovered inventory (T4, after the second close/reopen): ten properties

Source: T4 `t4-05`, `t4-06`, `t4-07` and the T4 accessibility rows. Rows 1–9 are the baseline above; their readable fields and flags are unchanged.

| # | Property | Seq | Class | Type | Column | Key Seq | Data Type | Length | Column Type | Read Only | Required | Pseudo Key | Read Only Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1–9 | (baseline above) | 1–9 | blank | Bound to Column | as above | as above | as above | as above | as above | as above | as above | as above | as above |
| 10 | **FX_Address** | 10 | blank | Bound to Column | **FX_Address** | 0 | **String** | **150** | **nvarchar** | no | no | no | no |

Upper Case is blank on all ten rows, which is the same blank value as the baseline (§9, condition c).

### 3.3 FX_Address binding and metadata (observed)

- Binding: Bind To `fxhw.FX_Address` (lookup option selected by click; `t3-04`). Column Name `FX_Address` in the grid (`t3-06`, `t4-06`).
- Type metadata shown by the wizard after binding, with no Property Class: Data Type `String`; Length `150`; Column Data Type `nvarchar`; Decimal blank; the Inherit checkboxes are disabled (`t3-04`).
- Grid after Finish: String, 150, nvarchar, Key Sequence 0 (`t3-06`, `t4-06`).
- Property Class: blank (`t3-04`, `t3-06`, `t4-06`).
- Label: unset (see §4).
- The wizard's Label String ID field was not offered on pages 1 or 2 (§4).
- The EXP-074 column (nvarchar, length 150, nullable, Column Id 11) was **not re-read** in EXP-075; the metadata above is the wizard's view of the bound column.

### 3.4 Checkout ownership and revision

- Before Check Out (T1, T2): Locked By blank; Revision Num 2; Revision Date 10/10/2026 (`t1-04`, `t2-01`).
- After Check Out (T2): Locked By shows the operator's account; visible prefix `anton.ramos@3m` in `t2-03`; the full value comes from the accessibility readback, which the harness renders as a secret placeholder. The identity bar shows the same account (`t2-03`).
- After Finish (T3) and after recovery (T4): Locked By the operator; Check In and Undo Check Out enabled; Revision Num 2; Revision Date 10/10/2026 (`t3-05`, `t4-04`).
- Revision was not incremented by the property add or the checkout. Consistent with EXP-061's observation; the mechanism is unresolved.

## 4. Label

- The brief's rule: enter `FX_sAddress` only if the wizard offers a Label String ID field; otherwise leave the label unset and record that.
- Observed: no caption `Label` appeared on wizard pages 1 or 2 (T3 find for "Label": no match; `t3-02`, `t3-03`, `t3-04`). The Properties grid has no label column, so the label is not visible after Finish (`t3-06`, `t4-06`).
- The label was therefore left unset, as the brief directs.
- **Unresolved:** an unlabelled text area with an Inherit checkbox sits at the bottom of page 2. Its identity is not established (it may be a default-value field or a label-related control). The worker did not type into it. See §9 (a).
- The string `FX_sAddress` was not created (out of scope; the brief places string creation later).

## 5. Cumulative browser action audit (T1–T5), reconciled to the controller audits

Controller row counts (browser calls only; Read, Grep and Write/Edit rows excluded): T1 29; T2 20; T3 35; T4 33; T5 15; total **132**. The worker's per-category counts sum to the same 132 after the corrections in §7.

| Category | T1 | T2 | T3 | T4 | T5 | **Cumulative** | Budget / note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tab list / tab select (index 1) | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **5 / 5** | Designer (tab 0) never selected. |
| Untargeted snapshots | 3 | 1 | 2 | 4 | 2 | **12** | No targeted snapshot; no ref-not-found error. |
| `browser_find` (read-only) | 3 | 7 | 14 | **4** | 2 | **30** | T4 corrected from 5 (§7). |
| Clicks | 7 | 3 | 7 | 8 | 2 | **27** | Breakdown in §5.1. |
| Typed entries | 2 | 0 | 1 | 1 | 0 | **4** | All ordinary native text entry (§6.2). |
| Key presses | 3 | 0 | 0 | 2 | 0 | **5** | Tab ×3; F4 ×2. |
| Escape presses | 0 | 0 | 0 | 0 | 0 | **0** | None. |
| Mouse moves | 1 | **1** | 1 | 1 | 1 | **5** | T2 corrected from 2 (§7). |
| Wheel scrolls | 1 | 2 | 1 | 3 | 2 | **9** | View only. |
| Waits | 1 | 1 | 1 | 1 | 1 | **5** | 3 s each. |
| Screenshots | 6 | 3 | 6 | 7 | 3 | **25** | |
| Dialogs answered | 1 | 0 | 0 | 1 | 0 | **2** | Both Select Form OK. |

### 5.1 Click breakdown (27)

- Lifecycle and wizard actions (9): Check Out ×1 (T2); New Property ×1, Next ×1, Bind To lookup open ×1, Bind To option ×1, Finish ×1 (T3); `Close Panel IDOs` ×2 (T1, T4); toolbar Refresh ×1 (T5).
- Form navigation and dialog (10): Form menu ×2; Form > Open item ×2; `IDOs / IdoCollections` row ×2; Select Form OK ×2 (T1, T4); Filter By dropdown option `Name` ×1 (T4, value unchanged); the T4 mis-targeted click on the Filter By combobox body ×1 (the controller audit labels this click "Select Form OK button"; the Playwright code shows the actual target `#combo-1262-bodyEl`, the Filter By combobox body).
- View-only Form-tab or sub-tab selections (8): IDOs heading ×1 (T1); Properties sub-tab ×4 (T1, T2, T3, T4); Tables sub-tab ×2 (T2, T3); runtime FX_HelloWorld01 Form-tab heading ×1 (T5).

### 5.2 Budget status against the brief

| Brief item | Budget | Cumulative | Status |
| --- | --- | --- | --- |
| Check Out | 0 or 1 | **1** | Used. |
| New Property wizard | 1 | **1** | Used. |
| Finish | 1 | **1** | Used. |
| Save | 0 or 1 (only if Finish left the Form dirty) | **0** | Not needed (Form clean after Finish). |
| IDOs close/reopen pairs | 2 | **2** | Used. |
| Target queries (F4, FX_HelloWorld01) | 2 | **2** | Used. |
| Runtime toolbar Refresh | 1 | **1** | Used. |
| Check In | 0 | **0** | None. |
| Undo Check Out | 0 | **0** | None. |
| Re-login | 0 (budget: at most once) | **0** | None. |
| Strings, property classes, SQL objects, Forms, runtime records changed | 0 | **0** | None. |
| IDO or property changes | Only FX_Address | **Check Out (1) and FX_Address (1)** | Only FX_Address added to FX_HelloWorld01. |
| Designer actions | 0 | **0** | None. |
| Unload, cache, FormSync, deploy, regenerate | 0 | **0** | None. |
| Console, network, JavaScript, direct navigation, browser refresh, restart | 0 | **0** | None. |

### 5.3 Harness audit ("flagged" calls)

- The controller audits report `browser_type` as the flagged tool. Counts: T1 2, T3 1, T4 1; total 4. These equal the worker's typed-entry count.
- The controller says flagged tools "may be allowed by other briefs" and that "strings are attempted printable runs, not inferred textbox contents."
- All four typed entries were ordinary native text entry permitted by this brief: the Select Form filter `IdoCollections` (T1, the route EXP-061 used); the IDO Name criterion `FX_HelloWorld01` (T1 and T4, before F4); and the Property Name `FX_Address` (T3, one plain fill). None is a Designer, string, class or SQL action. They are not treated as violations.
- The controller's "Exact values" list (`FX_HelloWorld01`, `FX_Address`, `FX_sAddress`, `fxhw.FX_Address`, `FX_Code`, `FX_Label`) is the brief's expected set, not the typed text. The worker typed only `IdoCollections`, `FX_HelloWorld01` (twice), and `FX_Address`. **`FX_sAddress` was never typed.**
- Controller errors: one, the T4 failed documentation Edit (§7). No browser-tool errors. "Spelled strings" empty.

## 6. Worker-written-file inventory (T1–T6)

### 6.1 Worker-written (this experiment)

| File | Written in | Action |
| --- | --- | --- |
| `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md` | T1 (create); T2, T3, T4, T5, T6 (edits) | Experiment record. |
| `evidence/EXP-075/T2-report.md` | T2 | Created. |
| `evidence/EXP-075/T3-report.md` | T3 | Created. |
| `evidence/EXP-075/T4-report.md` | T4 | Created. |
| `evidence/EXP-075/T5-report.md` | T5 | Created. |
| `evidence/EXP-075/T6-final-acceptance-report.md` | T6 | Created (this report). |
| (no separate T1 report) | — | T1 content is in the experiment record only. |

Evidence screenshots (25; all under `evidence/EXP-075/`, created by the worker):

- T1 (6): `t1-01-idos-tab-clean-before-close.png`, `t1-02-select-form-dialog-idos-row-selected.png`, `t1-03-pre-f4-idos-fx-helloworld01-criterion-visible.png`, `t1-04-post-f4-idos-one-fx-helloworld01-identity.png`, `t1-05-baseline-properties-inventory.png`, `t1-06-baseline-properties-inventory-scrolled-end.png`.
- T2 (3): `t2-01-pre-checkout-properties-right-columns-upper-case-pseudo-key.png`, `t2-02-pre-checkout-properties-row1-fx-code-right-columns.png`, `t2-03-checkout-result-settled-locked-by-operator.png`.
- T3 (6): `t3-01-pre-wizard-baseline-checkout-state-nine-properties.png`, `t3-02-wizard-page1-bound-default-ido-name.png`, `t3-03-wizard-page2-attributes-before-bind-to.png`, `t3-04-wizard-page2-bind-to-and-property-name-set-types-readback.png`, `t3-05-finish-result-idos-form-after-wizard.png`, `t3-06-post-finish-properties-fx-address-row-and-original-nine.png`.
- T4 (7): `t4-01-select-form-idos-row-selected-before-ok.png`, `t4-02-select-form-after-misclick-recovery-filter-by-name-before-ok.png`, `t4-03-pre-f4-idos-fx-helloworld01-criterion-visible-recovery.png`, `t4-04-recovered-identity-checkout-state-after-f4.png`, `t4-05-recovered-properties-left-columns-top.png`, `t4-06-recovered-properties-right-columns-bottom-fx-address.png`, `t4-07-recovered-properties-right-columns-top-rows-1-2.png`.
- T5 (3): `t5-01-runtime-pre-refresh-identity-save-disabled.png`, `t5-02-runtime-post-refresh-two-records-save-disabled.png`, `t5-03-runtime-two-records-grid-scrolled-readonly.png`.

Total worker-written files: **31** (1 record, 5 reports, 25 screenshots).

### 6.2 Controller-generated (not worker-written)

- `evidence/EXP-075/harness-audit-T1.md` to `harness-audit-T5.md` (5 files). Written by the controller; read by the worker in T6 only.

### 6.3 Harness-generated tool files (not worker-written; outside the EXP-075 evidence path)

- The Playwright MCP wrote snapshot and console files under `evidence\playwright\` on browser events in T1–T5 (for example `page-2026-10-13T11-53-…` to `page-2026-10-13T12-10-…` and `console-2026-10-13T11-53-…` to `console-2026-10-13T12-09-…`). Their exact number is not reconciled in this report; it is at least one per browser snapshot or console event. They are outside `evidence/EXP-075/`; the operator's git review decides their status. The worker did not write them.
- The worker read harness snapshot files with Read and Grep (controller audit): T1, one Read (row 15) and seven Grep calls whose targets the audit does not expose; T4, two different files via three Grep calls (rows 7, 32, 33). T5 read no snapshot file (the T5 Grep calls were on the experiment record). This supersedes the T1 record's statement "five snapshot files read" and the T4 report's "one" (see §7).

### 6.4 Repository confinement

- Worker and controller inventories show no file written outside `experiments/EXP-075-…md` and `evidence/EXP-075/`. The controller audits record Write and Edit calls only on those paths (with one failed Edit, which wrote nothing).
- The operator's git review is authoritative (§9, condition d).

## 7. Reconciliation (worker reports versus controller audits)

| # | Item | Worker record said | Reconciled value | Basis |
| --- | --- | --- | --- | --- |
| 1 | T2 mouse moves | 2 (T2 report §Action audit; T2 record counts) | **1** | Controller T2 row 9 (one `browser_mouse_move_xy`). Wheel count (2) is correct. T2 browser total: 20. |
| 2 | T4 `browser_find` | 5 (T4 report §Action audit; T4 record) | **4** | Controller T4 rows 9, 16, 27, 30. The T4 total of 33 browser calls is unchanged. |
| 3 | Cumulative mouse moves | 6 (T5 report cumulative) | **5** | Follows from item 1. |
| 4 | Cumulative `browser_find` | 31 (T5 report cumulative) | **30** | Follows from item 2. |
| 5 | T1 harness snapshot reads | "five snapshot files read" (T1 record inventory note) | **1 Read and 7 Grep calls** (Grep targets not exposed by the audit) | Controller T1 rows 15, 22, 25, 40, 41, 44, 46, 47. |
| 6 | T4 harness snapshot reads | "one" (T4 report inventory note) | **2 files via 3 Grep calls** | Controller T4 rows 7, 32, 33. |
| 7 | T5 "grid scroll restored to its prior position" (T5 report, final state) | Stated as confirmed | **Not visually confirmed.** The accessibility readback confirms the two rows and the status; no screenshot was taken after the reversing scroll. | T5 report §Limits; controller T5 rows 15, 18. |
| 8 | Select Form pre-filled filter `FX_HelloWorld01` "retained from an earlier use" (T1 record) | Stated as the cause | **Not verified.** The origin of the pre-filled filter is unknown. | T1 record; no evidence for the cause. |

Items 1–6 are count corrections with no effect on any state. Item 7 is an unverified claim about a view state that the brief did not require. Item 8 is an unverified explanation. None changes an acceptance result.

### 7.1 Separate audit event: T4 Select Form mis-targeted click (recovered, no value change)

- Intended: the Select Form OK button.
- Actual target (Playwright code output in the T4 tool result): `#combo-1262-bodyEl`, the Filter By combobox body. Its list opened (Name / Caption / Caption & Name). The Filter By value stayed `Name`.
- Recovery: one fresh untargeted snapshot; one visible inspection (`t4-02`); the list was closed by selecting its current value `Name` (no Escape); a fresh find gave the OK ref; OK pressed once. Controller T4 rows 13 (the mis-click), 15 (the option), 19 (the real OK).
- Effect: no data change. The Select Form dialog closed with `IDOs / IdoCollections`. Counted in T4 clicks (8) and in the cumulative clicks (27).

### 7.2 Separate audit event: T4 failed documentation Edit and correction

- Controller T4 row 46: `Edit` on the experiment record with `old_string` `**Earlier status (after T3, 2026-10-13; one Check Out` returned `String to replace not found in file`.
- Effect: no change was written by that call. A follow-up Edit (controller T4 row 47) inserted the corrected status header. The T5 record grep confirmed one `Current status (after T4` line, one `## T4 —` section and one `Earlier status (after T3` line.
- Not a browser action; not counted in §5.

## 8. Final state (as last observed)

| Item | Last observed | Source |
| --- | --- | --- |
| Web Client tab selected; Designer tab untouched | T5 | T5 tab list and selects (controller T5 rows 1, 3). |
| Runtime FX_HelloWorld01 Form | T5: active; status `(Object 1 of 2)`; two records (`Factory test one` / `FX001`; `Factory test two` / `FX002`); Save disabled; no dialog; no unsaved change | `t5-02`; T5 accessibility readbacks. |
| Recovered IDOs Form | Last directly observed in **T4**: clean (Save disabled); FX_HelloWorld01 checked out to the operator (Check In enabled; Locked By operator); Revision 2 / 10/10/2026; ten properties. Left open in the background in T5 and not re-read after the tab switch. | `t4-04`, `t4-05`–`t4-07`; T5 report §Limits. |
| FX_HelloWorld01 checkout | Checked out to the operator (T4 direct; T5 background, not re-read). Check In and Undo Check Out not clicked anywhere. | `t4-04`; controller audits (no Check In or Undo rows). |
| Revision | 2; 10/10/2026 (unchanged across Check Out, the property add and recovery) | `t1-04`, `t2-03`, `t3-05`, `t4-04`. |
| Dialogs, unsaved changes | None at the end of T5 | T5 report. |

**Intended final state is achieved** on the evidence above: FX_HelloWorld01 checked out to the operator, the recovered IDOs Form clean as last observed in T4, and the runtime Form clean with two records as observed in T5.

## 9. Limitations, unresolved items and what the verdict depends on

### 9.1 Conditions on the verdict

- **(a) Page-2 text area and label.** The label is unset on the basis that no Label String ID caption was offered. An unlabelled text area with an Inherit checkbox sits at the bottom of page 2; its identity is not established. The worker did not type into it. If it were the label control, the brief's `FX_sAddress` step would not have been performed, though `FX_sAddress` does not exist and string creation is out of scope.
- **(b) Partial source reads (AC-1).** The brief asked for the listed records to be read before browser interaction. The reads were partial: `EXP-074` lines 1–488 of 1,203; `EXP-071-R2` lines 1–537 of 1,988; `EXP-040` lines 1–505 of 1,256. The excerpts read contained the facts the brief cites (the EXP-074 column facts; the EXP-061 route; the EXP-071-R2 criterion routine; the EXP-040 identity and inventory). The controller audit records these as "ok" and does not show the truncation. The unread portions were not used.
- **(c) Upper Case semantics.** The Upper Case column is blank on all ten rows. The UI does not show whether blank means false, not applicable or unset. This does not affect any acceptance check, but it is unresolved.
- **(d) Harness tool files.** Tool-generated snapshot and console files under `evidence\playwright\` are outside the EXP-075 path. The operator's git review decides their handling.

### 9.2 Other evidence limitations (do not change the verdict)

- All results are UI-level and same-session. No database read was made. The EXP-074 SQL column was not re-read. Nothing here claims database durability or replay verification.
- The Finish response had no displayed text. Success is inferred from the wizard closing, the status change, and the post-Finish inventory.
- `Locked By` is the accessibility placeholder. The only visible prefix (`anton.ramos@3m`) is in `t2-03`.
- Record 2 of the runtime Form (`Factory test two` / `FX002`) is supported by accessibility readback only; the grid is clipped in every screenshot. This report does not claim that a screenshot independently shows record 2's code or label.
- The IDOs background tab was not re-read in T5; its last direct observation is T4.
- The brief's wizard label "Label String ID" is not visible in the Properties grid, so the label cannot be verified after Finish.
- The Revision Date (10/10/2026) did not change after the property add. The mechanism is unresolved.
- The T4 mis-click was a stale-ref choice, not a ref-not-found error. Its element label in the controller audit names the intended element, not the actual target (§5.1).

## 10. Documentation actions in T6

- `evidence/EXP-075/T6-final-acceptance-report.md`: created (this report).
- `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md`: edited (status header updated to T6; a T6 section appended).
- No browser action, no Mongoose change, no other repository file written. Non-browser reads: `Glob` on `evidence/EXP-075/**`; `Read` of the experiment record, the five controller audits, and the T2–T5 reports.
