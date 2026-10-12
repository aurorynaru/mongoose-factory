# EXP-066 — T3 final report: BLOCKED at AC-2 (documentation finalization; no browser calls)

- Run `R-20261012-233011-OefG`, cycle 2, task **T3**. Worker session `a642fdcf-6e38-4c1c-a214-edc2810b8bdb`; task_message_id `756ecfde-3452-434c-a4f0-76928febd18c`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- **Conclusion: EXP-066 is BLOCKED at AC-2.** The Section 7 join `fxum.FX_UM = fxitms.FX_UM` was not configured or confirmed. The New Property wizard, Finish, Save, IDO close/reopen and runtime check (AC-3 to AC-6) were not executed. No application change was observed.
- T3 made **zero browser calls** and **zero application changes**. Its only writes are this report and the EXP-066 record.
- Record: `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- Sources read for this report: `evidence/EXP-066/T1-report.md`, `evidence/EXP-066/T2-report.md`, the EXP-066 record, and the controller audits `evidence/EXP-066/harness-audit-T1.md` and `evidence/EXP-066/harness-audit-T2.md`.

## 1. Acceptance checks

| AC | Result | Decisive evidence | Limits |
|---|---|---|---|
| **AC-1** | **PASSED (observed; UI and accessibility level)**. Sources reviewed; session usable (no sign-in or configuration challenge); IDO Collections open via Select Form (`IDOs / IdoCollections`); one exact-name F4 match for `FX_Items`; project `FX_HelloWorldProject01`; base table `FX_Items`, alias `fxitms`, Primary Base; Revision Num 2, Revision Date 10/10/2026; Locked By `anton.ramos@3mworks.com.ph` (checked out to the operator; Check In and Undo Check Out enabled); 12 properties including FX_Picture (row 12); Tables inventory one entry (FX_Items, fxitms, Primary Base, Inner); `FX_UMsDescription` absent; no fxum entry. | `t1-01` (inherited runtime tab, context only); `t1-03` (identity, Tables, status `IDOs 1 of 1`); `t1-04` (rows 1–8) and `t1-05` (rows 5–12); `t2-01` (pre-change re-check, rows 5–12); `t2-02` (Tables baseline) | Locked By is truncated on screen (full value from accessibility text); checkout is read from Locked By and enabled controls; no database read; class-bound Data Type / Length blank in the grid |
| **AC-2** | **FAILED.** The one permitted New Table invocation opened the IDO Table Wizard. The dialog defaults were recorded (Table Type **Secondary**, Join Type **Left Outer**). `FX_UMs` was typed into Table Name but was **not selected**; the visible lookup list reached **FrtForms** with no `FX_UMs` option visible. Add and OK were **not** invoked. The wizard was cancelled. The Tables view still lists one entry. The join `fxum.FX_UM = fxitms.FX_UM` was not entered and no alias `fxum` was set. | `t2-03` (wizard before entry: blank Table Name and Alias, Secondary, Left Outer, blank join row, Join Text, OK/Cancel); `t2-04` (typed `FX_UMs`, list open); `t2-04b` (after scroll); `t2-04c` (visible inspection: list ends at FrtForms); `t2-05` (Tables view after Cancel: one entry) | No "dialog-before-Add" capture with a confirmed table, alias or join exists, because the required selection never occurred. The FX_UMs SQL table's existence and whether the lookup is complete are **unresolved** (see §6). |
| **AC-3** | **NOT EXECUTED.** No New Property wizard, Bind To, property name or Finish. | none | Not applicable |
| **AC-4** | **NOT EXECUTED.** No property was added. `t2-06` shows the pre-change 12-property state after the failed attempt, not a post-Finish state. | `t2-06` (state only) | Not an AC-4 post-change inventory |
| **AC-5** | **NOT EXECUTED.** No IDO Collections close or reopen; no post-reopen F4 query. | none | Not applicable |
| **AC-6** | **NOT EXECUTED.** The FX_Items runtime Form was not closed or reopened. The inherited runtime tab remains open and was not re-verified in T2 or T3. The T1 screenshot `t1-01` shows that inherited tab (dumbbell record in view), which is context only, not AC-6 evidence. | `t1-01` (context only) | Not an AC-6 verification |
| **AC-7** | **Supported for the audited actions (no other change observed).** No other IDO, property, table entry, checkout, SQL, Form, preference or Designer change was observed; no unload, cache, FormSync or deployment action. Audit in §3 and §4. | the audits in §3–4; `t2-05` | UI-level only; no database read; the typed `FX_UMs` text was discarded by Cancel, and this is evidenced only by the post-Cancel Tables view and wizard closure, not a database check |
| **AC-8** | **PARTIAL.** This report gives the complete action audit with exact reconciled counts (§3), the worker-written and tool-generated file inventories (§5), and the final state (§7). Decisive evidence for AC-2 is recorded and AC-2 failed. AC-3 to AC-6 could not be evidenced because they were not executed. | §3, §5, §7 | The experiment does not complete; it is BLOCKED |

## 2. Required T2 facts (exact)

- **Single New Table invocation:** 1 (T2). No second invocation or retry.
- **Wizard defaults before entry (verbatim):** IDO Name `FX_Items` (read-only); Table Name\* blank; Table Alias\* blank; **Table Type\* `Secondary`**; **Join Type\* `Left Outer`**; join row `[Column Name] = [Table Name] [Column Name] [Add]`; Join Text\* blank; OK / Cancel. Join Type was kept at its default, which is not `Inner`. The existing primary row shows Join Type `Inner`.
- **Table selection:** `FX_UMs` was typed into the Table Name combobox (1 type action). The combobox displayed the typed text, but the list did not filter and began at `ABDataServices`. After scrolling, the list ends at `FrtForms`. **`FX_UMs` was typed but not selected.** The on-screen list and the listbox accessibility snapshot showed no `FX_UMs` option. A find for `FX_UMs` returned no match.
- **Escape (1)** closed the list with no selection. **Enter was not pressed.**
- **Add:** 0. **OK:** 0. **Wizard Cancel:** 1 (no table entry created).
- **Native responses:** none to record. Neither Add nor OK was invoked, so no native response exists for either. The Cancel produced no confirmation or error text in the visible state.

## 3. Reconciled browser action audit (T1 + T2)

Counts are reconciled from the T1 and T2 reports and cross-checked against the controller audits `harness-audit-T1.md` (57 entries) and `harness-audit-T2.md` (56 entries). The per-type counts agree between the worker reports and the controller audits. The controller's summary "actions" totals (13 and 11) use a definition not stated in the audits, so they are not reproduced here.

| Browser call type | T1 | T2 | Total |
|---|---|---|---|
| tab list | 1 | 1 | 2 |
| tab select | 1 | 1 | 2 |
| snapshot, untargeted | 2 | 6 | 8 |
| snapshot, targeted | 1 | 1 | 2 |
| find | 3 | 2 | 5 |
| click | 5 | 5 | 10 |
| type | 2 | 1 | 3 |
| press key | 2 | 1 | 3 |
| mouse move | 1 | 1 | 2 |
| mouse wheel | 2 | 2 | 4 |
| wait | 1 | 0 | 1 |
| screenshot (calls) | 6 | 8 | 14 |
| **All browser calls** | **27** | **29** | **56** |
| Other browser tools (evaluate, run-code, console, network, navigate, select option, drag, dialog handling, file upload, close, resize, emulate media) | 0 | 0 | 0 |

**Screenshot files:** 13 unique PNGs (T1: five, with `t1-05` captured twice; T2: eight). Call count 14 = 13 unique files + one re-capture of `t1-05`.

**Lifecycle, mutation and scope counts (T1 + T2):**

| Item | T1 | T2 | Total |
|---|---|---|---|
| IDO Collections opened via Form > Open > Select Form | 1 | 0 | 1 |
| Exact-name F4 query for FX_Items | 1 | 0 | 1 |
| **New Table invoked** | 0 | **1** | **1** |
| Add | 0 | 0 | 0 |
| OK (table wizard) | 0 | 0 | 0 |
| IDO Table Wizard Cancel | 0 | 1 | 1 |
| Table entries added (FX_UMs or other) | 0 | 0 | 0 |
| Properties added | 0 | 0 | 0 |
| New Property wizard | 0 | 0 | 0 |
| Finish | 0 | 0 | 0 |
| Save (ordinary) | 0 | 0 | 0 |
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| IDO Collections close / reopen | 0 / 0 | 0 / 0 | 0 / 0 |
| IDO Tables sub-view opened / closed | 0 / 0 | 1 / 1 | 1 / 1 |
| Runtime FX_Items Form open / close / reopen / interaction | 0 | 0 | 0 |
| Unload / cache / FormSync / deployment | 0 | 0 | 0 |
| Web Designer actions (tab 0 listed only; never selected) | 0 | 0 | 0 |
| Browser JavaScript, console or network inspection (worker) | 0 | 0 | 0 |
| Dialogs answered | 1 (Select Form OK) | 0 | 1 |
| Checkout-management actions | 0 | 0 | 0 |
| Application changes observed | 0 | 0 | 0 |

**Typed entries:** 3 total. T1: `IdoCollections` (Select Form filter); `FX_Items` (IDO Name criteria). T2: `FX_UMs` (Table Name combobox; not committed; discarded by Cancel).

**Keys:** 3 total. T1: End (refresh the Select Form grid), F4 (query). T2: Escape (close the lookup list).

**Controller-flagged `browser_type` calls:** T1 2 and T2 1, as reported by `harness-audit-T1.md` and `harness-audit-T2.md`. These are native text entries into the Select Form filter, the IDO Name criterion, and the Table Name combobox. The EXP-061 precedent treated similar entries as permitted native input. Adjudication remains with the coordinator.

**Controller audit errors:** T1 audit #2 was a Read of the EXP-066 record before it existed (no effect). T2 audit #49 was an Edit whose anchor string was not found; the file was not changed by that call, and the edit was re-issued with the correct anchor (audit #50). No other errors were recorded.

## 4. Worker-written document edits (for the record)

- T1: the record was created; two corrections followed (provenance wording; mouse-move counts).
- T2: eight successful record edits (status; T2 section; acceptance rows; cumulative counts; knowledge state; open questions; next step and inventory; cumulative counts row) and one failed edit with no effect; two edits to `T2-report.md`.
- T3: this report; one record update (status, acceptance rows, T3 section, inventory).

## 5. File inventory

**Worker-written in this experiment (repo-relative):**
- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created T1; updated T2 and T3).
- `evidence/EXP-066/T1-report.md` (created T1).
- `evidence/EXP-066/T2-report.md` (created T2).
- `evidence/EXP-066/T3-final-blocked-report.md` (created T3; this file).
- `evidence/EXP-066/t1-01-webclient-initial-state.png`; `t1-02-idos-opened-via-select-form-initial.png`; `t1-03-idos-FX_Items-query-settled-identity-tables.png`; `t1-04-idos-FX_Items-properties-baseline-12.png`; `t1-05-idos-FX_Items-properties-baseline-rows-9-12.png` (T1; five PNGs).
- `evidence/EXP-066/t2-01-pre-change-idos-FX_Items-checked-out-properties-baseline-12.png`; `t2-02-pre-new-table-baseline-tables-view-one-entry.png`; `t2-03-new-table-wizard-opened-blank-defaults.png`; `t2-04-new-table-table-name-list-open.png`; `t2-04b-table-name-list-after-scroll.png`; `t2-04c-table-name-list-visible-inspection.png`; `t2-05-post-cancel-tables-view-still-one-entry.png`; `t2-06-final-state-idos-checked-out-save-disabled.png` (T2; eight PNGs).

Total worker-written: 4 documents and 13 PNGs (17 files).

**Controller-generated (not worker-written; in the EXP-066 path):** `evidence/EXP-066/harness-audit-T1.md`, `evidence/EXP-066/harness-audit-T2.md`.

**Tool-generated (not worker-written; outside the EXP-066 path; for confinement review):** `evidence/playwright/` files from this run's window. T1 (8): `console-2026-10-12T15-30-24-542Z.log`, `console-2026-10-12T15-30-24-543Z.log`, `page-2026-10-12T15-30-33-437Z.yml`, `page-2026-10-12T15-30-40-132Z.yml`, `page-2026-10-12T15-30-51-380Z.yml`, `page-2026-10-12T15-30-58-033Z.yml`, `page-2026-10-12T15-31-08-399Z.yml`, `page-2026-10-12T15-31-20-957Z.yml`. T2 (6): `console-2026-10-12T15-34-22-849Z.log`, `page-2026-10-12T15-34-36-465Z.yml`, `page-2026-10-12T15-34-42-777Z.yml`, `page-2026-10-12T15-34-52-587Z.yml`, `page-2026-10-12T15-35-41-408Z.yml`, `page-2026-10-12T15-35-50-471Z.yml`. Total 14. Not every snapshot call produced a file; the rest were returned inline.

**Repository confinement:** the worker-written and controller-generated files above are the EXP-066 paths. The tool-generated `evidence/playwright/` files are outside them. The session-start git state listed `?? assets/`, which this worker did not write. **Operator git review is authoritative** for confinement.

## 6. Open questions and unresolved items (observed only; not replay-verified)

1. **Does a SQL table named `FX_UMs` exist in this tenant?** Unresolved. The Form menu lists an entry `FX_UMs`, but that entry is a Form, not evidence of the SQL table. **This report does not claim that FX_UMs is absent from the tenant.**
2. **Is the wizard's Table Name lookup complete?** Unresolved. The visible list and the accessibility tree both reached FrtForms, and the typed `FX_UMs` did not filter the list. Whether the lookup is virtualized or excludes the name is not established.
3. **The join text and any generated SQL:** not created or observed. The join direction, cardinality and null semantics remain unverified (as the tutorial source itself notes).
4. **Saved spelling of `UMsDescription`:** the transcript gives no saved spelling; the brief fixes `FX_UMsDescription`. Not verified.
5. **Inherited FX_Items runtime tab:** remains open and was not re-verified in T2 or T3. Its provenance was not established in T1.
6. **Class-bound Data Type / Length blank in the grid** for FX_Item, FX_Cost and FX_UM: not re-verified.

## 7. Final state (after T3; observed at the end of T2; T3 made no browser calls)

- Tab 0 (Web Designer, `…designer/default.aspx?MGForm=FX_Items`): untouched; never selected in T1–T3.
- Tab 1 (Web Client): selected. Tabs present: `FX_Items` (inherited runtime Form; not acted on since T1) and `IDOs` (IDO Collections, FX_Items, Properties sub-tab selected).
- IDOs state: Revision Num 2; Revision Date 10/10/2026; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; Save disabled; 12 properties (FX_Picture at row 12); Tables view not open (closed in T2).
- The IDO Table Wizard was cancelled and closed. The IDO Tables sub-view was closed. No dialog or unsaved-change prompt remains. No Form was closed or reopened in T2 or T3.

## 8. Decisive-evidence summary

- AC-1: `t1-03`, `t1-04`, `t1-05`, `t2-01`, `t2-02` (identity, property and Tables inventory). Supports the baseline at UI level only.
- AC-2 (failed): `t2-03` (defaults before entry), `t2-04`, `t2-04b`, `t2-04c` (list reached FrtForms; no FX_UMs option visible), `t2-05` (one table entry after Cancel). These show what was observed and what was not. They do not establish that `FX_UMs` is absent from the tenant.
- AC-7: the audits in §3 and §4, plus `t2-05`.
- AC-3 to AC-6: not executed; no evidence exists for them, and none is claimed.

## 9. Knowledge state

| Finding | State |
|---|---|
| FX_Items: one exact-name match, checked out to the operator, revision 2, 12 properties including FX_Picture, one Tables entry (fxitms, Primary Base), FX_UMsDescription absent | **observed** (one run; UI level) |
| IDO Tables button opens a separate IDO Tables tab with one entry | **observed** (one run) |
| New Table opens the IDO Table Wizard with Table Type `Secondary` and Join Type `Left Outer` as defaults | **observed** (one run) |
| Typed `FX_UMs` in the Table Name combobox did not filter the lookup, and no `FX_UMs` option was visible up to the list end (FrtForms) | **observed** (one run; server presence unresolved) |
| Wizard Cancel discards the unconfirmed entry; one table entry remains | **observed** (one run; UI level; no database read) |
| Whether SQL table `FX_UMs` exists; whether the lookup is complete | **unresolved** |
| Join creation, property addition, Finish, Save, IDO close/reopen, runtime records | **not performed** |
| Any replay or procedure status | **not claimed**; nothing is replay_verified |

## 10. Outcome

**BLOCKED at AC-2.** Any further SQL-table inspection (for example, a read-only check of the Sql Tables Form) or any renewed New Table or join attempt requires a **separate operator-approved scope**. Under this experiment's brief no further New Table invocation is permitted, and the subsequent steps (Add, OK, the New Property wizard, Finish, Save, IDO close/reopen and the runtime check) remain unexecuted.
