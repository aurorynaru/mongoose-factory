# EXP-071-R2 — T11 final acceptance report (documentation only)

- Experiment: EXP-071-R2 — Hello World Part 4 Section 11a: FX_Orders SQL table and IDO via the Maintenance wizard (replay with visible absence criteria).
- Task: T11, cycle 11, task_message_id `249567ec-032c-4c12-8ef6-23f8675ce121`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: documentation-only final acceptance review. **Zero browser calls. Zero Mongoose changes.** No shell, no git, no Bash.
- Record: `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md`. Reordered in T11 (T9 now precedes T10); T11 section appended.
- Findings are **observed only**. Nothing in this report is `replay_verified`, and no database durability is claimed. Same-session UI recovery is not database persistence.

---

## 1. Recommendation

**ACCEPTED-as-observed, at same-session UI level only**, with the qualifications in section 4 and the decisions in section 9.

Reasons:
- Every acceptance check (AC-1 to AC-8) has decisive screenshot or ledger evidence at UI level.
- The mutation counts agree across the worker records and the controller ledgers: one Finish, one Create Form "No", zero unloads, one Check In, zero wizard cancels, and zero edits to existing objects.
- The one open data question is a recorded observed difference, not a failed check. FX_Count's SQL default is blank while the IDO default is 1. The brief made the SQL default conditional, and it is recorded and not repaired (see AC-6).
- The count discrepancies (section 5) affect only non-mutating counters (coordinate clicks, the snapshot target split, the Sql Columns open count, and a ref-not-found label). None of them changes an acceptance outcome.
- The T1 sequencing deviation (section 3) is disclosed. It does not change the T1 gate evidence, but it is a process deviation the operator should accept or reject explicitly.

This is **not** a replay verification. Procedure status is `candidate_procedure` (see section 8).

---

## 2. Sources reviewed

| Source | Use in T11 |
| --- | --- |
| `AGENTS.md` | Standing rules (LEARNING MODE; FX_ scope; evidence and knowledge-trust rules); read in T1 |
| `docs/mongoose/transcripts/hello-world-pt4.md` Section 11 (lines 255–285 region) and the Orders schema quick reference (lines 333–344) | Read in **T2**, after T1 browser interaction (see section 3) |
| `experiments/EXP-071-…md` (record and final blocked report) | Read in T1 and T2; gate failure and read-only criteria context |
| `experiments/EXP-049-…md` | Wizard route, read-only Table Name, grid-editor rule, check-in, SQL Columns verification; read in T1 |
| `experiments/EXP-070-…md` | Three property class values (FX_OrderNumBase, FX_CustomerID, FX_Item); read in T1 |
| `experiments/EXP-044-…md` | Consulted as needed only (not required for T11) |
| `evidence/EXP-071-R2/harness-audit-T1.md` … `harness-audit-T10.md` | All ten controller ledgers read in T11 (T1 to T5 before a context compaction; T6 to T10 after it) |
| R2 record (`experiments/EXP-071-R2-…md`) | Full read of T9 and T10; heading order checked; T11 section written |
| Screenshots cited in section 4 | Viewed directly (listed in section 4) |
| `evidence/EXP-071/t1-07…` and `t1-10…` | Viewed directly (positive controls; carried from EXP-071) |

Note on the EXP-071 record references: the prior run's record and its T2 blocked report were read for the gate context. Their paths are under `experiments/` and `evidence/EXP-071/`. This report does not restate them.

---

## 3. Sequencing deviation (disclosed)

- **Required:** the transcript (Section 11) and the other listed sources were to be read before browser interaction.
- **Observed:** the T1 ledger (`evidence/EXP-071-R2/harness-audit-T1.md`) shows reads of AGENTS.md, the EXP-071 record, EXP-049 and EXP-070. It shows **no read of the transcript**. T1 had 13 element clicks, 4 fills and 6 keys before the transcript was first read in T2 (ledger row 1).
- **Assessment:**
  - The T1 operations were the gate steps the brief itself defined: IDOs and Sql Tables close/reopen, and exact-name queries with pre-F4 captures.
  - The transcript's Section 11 wizard steps were first applied in T2 and later.
  - The deviation is procedural. It is not claimed as compliant, and it does not validate T1 retroactively.
  - The T1 gate evidence (section 4, AC-1) is still valid as observed evidence. It is not weakened by the transcript timing, because the gate was defined by the brief, not by the transcript.
- **Operator decision:** accept or reject this deviation for the replay record.

---

## 4. Acceptance matrix (AC-1 to AC-8)

Screenshot paths are relative to `evidence/EXP-071-R2/` unless shown otherwise. Status key: **Supported** = decisive evidence at UI level in this session; **Supported with qualification** = supported, with a stated limit that the operator must accept.

Viewing note: the screenshots listed as "viewed" were opened and inspected in T11. Captures marked "record" or "not re-viewed" (for example `r2-47`, `r2-53`, `r2-54`, `r2-58`, `r2-59`, `r2-61`, `r2-63`, `r2-64`, and the EXP-071 `t1-00`, `t1-01`, `t1-03`, `t1-05`) are cited from the R2 record or the EXP-071 record and were not re-opened in T11.

### AC-1 — Sources reviewed; session usable; IDOs and Sql Tables closed clean and reopened fresh once each; criterion visible before F4 and zero data rows after; EXP-071 positive controls cited

**Status: Supported with qualification (T1 pre-creation gate).**

| Evidence | Visible content (viewed in T11) | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-05-idos-FX_Orders-criterion-before-F4.png` | IDOs in Filter in Place; IDO Name `FX_Orders` in the criterion field; echo row `FX_Orders` with blank detail; status `Filter in Place` | The IDO criterion was visible before F4 | The result |
| `r2-06-idos-FX_Orders-settled-after-F4.png` | IDOs grid empty after F4; detail blank; status `Filter in Place` | Zero data rows for IDO FX_Orders before creation (same session) | Database-level absence |
| `r2-08-sqltables-FX_Orders-criterion-before-F4.png` | Sql Tables; Table Name `FX_Orders` in the criterion field; echo row `FX_Orders`; status `Filter in Place` | The Sql Tables criterion was visible before F4 | The result |
| `r2-09-sqltables-FX_Orders-settled-after-F4.png` | Sql Tables grid shows only the add-mode placeholder (blue star; blank Table Name and Schema); status `Multi-Site (SQL Tables 1 of 1)` | Zero data rows for dbo.FX_Orders before creation (same session), with the placeholder excluded | Database-level absence |
| Positive control: `evidence/EXP-071/t1-07-collision-IDOs-positive-control-FX_Items-settled.png` | IDOs; FX_Items one record; Project FX_HelloWorldProject01; Revision 2; status `Description (IDOs 1 of 1)` | The IDO query path returns a known record (carried from EXP-071) | — |
| Positive control: `evidence/EXP-071/t1-10-collision-SqlTables-positive-control-FX_Items-settled.png` | Sql Tables; dbo.FX_Items; PK_FX_Items (FX_Item); IX_FX_Items_RowPointer | The Sql Tables query path returns a known table (carried from EXP-071) | — |

- Session: the same authenticated session; no re-login (re-login count 0); the IDOs and Sql Tables Forms were closed clean and reopened once each in the pre-gate pair.
- **Qualifications:**
  1. The `r2-09` count of one is the **add-mode placeholder row**, not a data row. It is treated as zero data rows, as the T1 record states. The placeholder is not inventory.
  2. `r2-06` still shows the `Filter in Place` status line. This is the expected state for an empty FiP result.
  3. The T10 captures (`r2-59`, `r2-61`) are **post-creation recovery** captures. They are not substitutes for the T1 absence evidence, and they are not cited as AC-1 proof.
  4. The positive controls are carried from EXP-071 and were not re-run in R2.

### AC-2 — Dependency gate carried over from EXP-071 T1 (FX_HelloWorldProject01 and the three property classes with their EXP-070 values); nothing changed

**Status: Supported (carried over; cited, not re-viewed in T11).**

- EXP-071 evidence cited: `evidence/EXP-071/t1-05` (FX_HelloWorldProject01 settled); `t1-00` (FX_OrderNumBase browse baseline); `t1-01` (FX_CustomerID settled); `t1-03` (FX_Item loaded settled). The EXP-071 T1 record reports AC-2 as passed.
- Values carried from EXP-070 (recorded in the R2 record, section "Carried from EXP-071 T1"):
  - FX_OrderNumBase: Long Integer; default `AUTONUMBER()`; Column Data Type `int`; `FX_sOrderNumber`; Justify Right.
  - FX_CustomerID: String 30; nvarchar; `FX_sCustomerID`; domain FX_HelloWorld01 / FX_Code / FX_Label.
  - FX_Item: base FX_ItemBase; String 20; nvarchar; `FX_sItem`; domain FX_Items / FX_Item / FX_Description.
- Nothing changed: the R2 counts show zero changes to classes, projects, strings and existing IDOs or tables (section 6).
- **Qualification:** the EXP-071 control screenshots were not re-viewed in T11; they are cited from the EXP-071 record. Note that `t1-07` shows the IDO FX_Items checked out (Locked By populated, Check In offered) at the time of the EXP-071 control. This is a **pre-existing** state, not an R2 action. It is recorded as an observation and was not acted on.

### AC-3 — Wizard route and header; Table Name read-only and empty; the Property Class lookup lists the three classes (or the single contingency unload is recorded)

**Status: Supported.**

| Evidence | Visible content (viewed in T11) | Proves |
| --- | --- | --- |
| `r2-14-wizard-header-identity-set.png` | Data Maintenance Wizard; IDO Name `FX_Orders`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxords`; Form Type MultiView; Form Layout GridLeft; Device Default; Site Split unchecked; Table Name greyed and empty; View Name greyed and empty | The header identity and read-only empty Table Name |
| `r2-17-wizard-property-class-lookup-after-F2-FX_-filter.png` | Class list open on row 1: FX_Cost, FX_CustomerID, FX_Item, FX_ItemBase, FX_OrderNumBase, FX_Picture, FX_UM, FX_UMBase | The three required classes are listed (FX_CustomerID, FX_Item, FX_OrderNumBase) |

- Route: Designer, New Form Definition > New Data > Maintenance (EXP-049 route) (`r2-11`, `r2-12`, `r2-13` per the T2 record).
- Unloads: **0**. The contingency unload was not needed because all three classes were listed.
- **Qualification:** `r2-17` shows FX_Cost as the highlighted first item in the open list. The combobox text at that moment is the list highlight, not a committed value. The later Escape committed FX_Cost to row 1 (T2 deviation, corrected in T3; see section 7).

### AC-4 — Exactly four properties in order with specified classes, values and flags; inherited values and any SQL Column Data Type recorded

**Status: Supported with qualification.**

| Row | Name | Property Class | Data Type / Length | Key / Required | Label String ID | Default | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_OrderNumber | FX_OrderNumBase | Long Integer; SQL type `int` | Primary Key ✓; Required ✓ | FX_sOrderNumber | AUTONUMBER() | `r2-21`, `r2-22`; `r2-44` (IDO Properties readback, row 1) |
| 2 | FX_CustomerID | FX_CustomerID | String 30; SQL type `nvarchar` (class-supplied) | Required ✓ | FX_sCustomerID | (blank) | `r2-23`; `r2-25` |
| 3 | FX_Item | FX_Item | String 50 (overridden from 20); SQL type `nvarchar` | Required ✓ | FX_sItem | (blank) | `r2-24`; `r2-25` |
| 4 | FX_Count | (none) | Long Integer; SQL type `int` | Required ☐ | FX_sCount | 1 | `r2-25`; `r2-47` (T7 readback row 4) |

- Four-row grid before Finish: `r2-25-t4-four-row-grid-before-finish-not-invoked.png` shows Name, Required, Label String ID and Default Value for rows 1–4 (viewed in T11): FX_OrderNumber ✓ / FX_sOrderNumber / AUTONUMBER(); FX_CustomerID ✓ / FX_sCustomerID / blank; FX_Item ✓ / FX_sItem / blank; FX_Count ☐ / FX_sCount / 1. Finish is greyed on page 1.
- Row 1 correction (T2 to T3): the Escape keypress in T2 committed FX_Cost to row 1; inherited residue remained after the class was cleared. The T3 explicit click on FX_OrderNumBase replaced the residue (Long Integer, int, FX_sOrderNumber, AUTONUMBER(); blank Length and Precision). Verified in `r2-21` and `r2-44`.
- SQL Column Data Type: the wizard showed class-supplied SQL Data Types per row. No separate SQL Column Data Type was required beyond the class values. The SQL readback (section AC-6) confirms `int` for FX_OrderNumber and `nvarchar` for FX_CustomerID and FX_Item.
- **Qualifications:**
  1. FX_Count has **no property class** (`(none)` in `r2-50`). The brief did not require one.
  2. The FX_sCount Label String ID value was **entered as typed**. Whether the string resource exists was **not verified** in R2. The brief excluded string creation. This is an open item (section 9).
  3. Label and Default of the IDO properties were read in T7 (`r2-44` to `r2-47`). They were not re-read after the T10 reopen (section 7).

### AC-5 — One Finish with completion message; one "No" to Create Form; no Form created

**Status: Supported.**

- `r2-33` (pre-Finish page-2 state) → single Finish (ledger T6 row 7) → `r2-34-t6-create-form-prompt-after-single-Finish.png`: alertdialog "Create Form — Do you want to create a form for FX_Orders?" with Yes (focus outline) and No.
- Single "No" (ledger T6 row 11) → `r2-35-t6-completion-table-and-ido-created-after-No.png`: wizard message **"Table and IDO created."**; the wizard remained open with Close enabled.
- **Qualification:** "No Form created" rests on the "No" answer and on the absence of any Form-creation action in the ledgers. The Designer Form list was not read for FX_Orders in R2, so this is not a separate Form readback.

### AC-6 — FX_Orders readback in the IDOs Form and dbo.FX_Orders readback in SQL Columns; check-in performed once or not needed

**Status: Supported with qualification (the FX_Count default and nullability difference).**

IDO readback (T7 and T8):

| Item | Observed | Evidence |
| --- | --- | --- |
| IDO identity | FX_Orders; Project FX_HelloWorldProject01; Label and Caption `oFX_Orders`; Access G6R | `r2-50` (T8 settled) |
| Table | FX_Orders; Alias `fxords`; Table Type Primary Base; Join Inner | `r2-60` (T10 recovery, Tables tab) |
| Properties | Four bound rows in order, as in AC-4; Key Sequence 1 on FX_OrderNumber; Required ✓ on rows 1–3 and ☐ on row 4; Length 50 on FX_Item | `r2-50` (Properties grid); `r2-44`–`r2-47` (T7 detail views) |
| Count default | Default Value `1` (IDO) | `r2-47` (T7) |
| Revision and lock | Revision 2; Revision Date 10/13/2026; Locked By blank; Check Out offered; Undo Check Out greyed | `r2-50` |

Check-in: one native Check In (ledger T8 row 9) changed the Revision from 1 to 2 and cleared Locked By. An informational notice ("Source control integration is currently disabled… will not be checked in to source control") was acknowledged once with OK (ledger T8 row 13). `r2-48` (pre-check-in, checked out), `r2-49` (notice), `r2-50` (settled, checked in).

SQL readback (T9):

| Column | Type / length | Nullable | Primary key | Default | Evidence |
| --- | --- | --- | --- | --- | --- |
| Table | dbo.FX_Orders; PK_FX_Orders (FX_OrderNumber); IX_FX_Orders_RowPointer | — | — | — | `r2-53` (one row, settled) |
| FX_OrderNumber | int; length blank | not nullable | yes; Key Sequence 1 | blank | `r2-54` (row 1 detail) |
| FX_CustomerID | nvarchar; 30 | not nullable | no | blank | `r2-55` |
| FX_Item | nvarchar; 50 | not nullable | no | blank | `r2-56` |
| FX_Count | int | **nullable (checked)** | no | **blank** | `r2-57` |
| Framework 5–11 | CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow | not read | not read | not read | `r2-54` (names only) |

- **Qualifications:**
  1. **FX_Count SQL default blank vs IDO default 1.** The brief's expectation was "default 1 if the SQL interface exposes it". The SQL Default Value field is exposed and blank. This is an observed IDO-to-SQL difference (the same pattern EXP-049 recorded for FX_Cost). It is recorded, not repaired, and **needs an operator decision**. If the operator reads the brief as requiring the default to reach SQL, AC-6 is partially met on that point.
  2. **FX_Count nullability** is nullable. The brief did not state it. It is recorded, not judged.
  3. Framework column **types** were not read (names only).
  4. IDO Label and Default were read in T7 only (section 7).

### AC-7 — IDOs and Sql Tables closed once more and reopened once more after creation; one exact-name query per object matching its readback

**Status: Supported at same-session UI level.**

| Object | Reopen | Criterion before F4 | Settled result | Matches readback? |
| --- | --- | --- | --- | --- |
| IDOs | `r2-58-t10-idos-reopened-fresh-filter-in-place-before-criterion.png` (fresh, Filter in Place) | `r2-59-t10-idos-FX_Orders-criterion-before-F4-recovery.png` | `r2-60-t10-idos-FX_Orders-settled-after-F4-recovery.png`: one record FX_Orders; project FX_HelloWorldProject01; alias fxords; Revision 2; Locked By blank; Check Out offered | Yes (T8 `r2-50`) |
| Sql Tables | fresh Filter in Place (T10 record, after Select Form and the caution OK) | `r2-61-t10-sqltables-FX_Orders-criterion-before-F4-recovery.png` | `r2-62-t10-sqltables-FX_Orders-settled-after-F4-recovery.png`: one row FX_Orders, schema dbo; PK_FX_Orders; IX_FX_Orders_RowPointer; status Multi-Site (SQL Tables 1 of 1) | Yes (T9 `r2-53`) |

- Close and reopen counts: IDOs 2 closes and 2 reopens (pre-gate pair plus recovery pair); Sql Tables 2 and 2. Within the brief's budget.
- Recovery queries: one per object (ledger T10 rows 26 to 30 for IDOs; rows 56 to 60 for Sql Tables).
- Child views: Sql Columns (opened T9 and T10, closed T10) and IDO Properties (opened T7, closed T10) were closed clean; these closes are reported separately from the parent budgets.
- Recovery columns: `r2-63` (FX_Item: nvarchar; 50; Is Nullable unchecked; PK unchecked; default blank) and `r2-64` (FX_Count: int; Is Nullable checked; PK unchecked; default blank) match T9.
- **Qualifications:** this is same-session UI recovery. It is **not** a database-level or cross-session persistence check and **not** replay verification. The IDO Label String ID and Default were not re-read in T10.

### AC-8 — Final report gives decisive evidence for AC-1 to AC-7; complete action audit with exact counts; worker-written file inventory; final state

**Status: Supported with recorded discrepancies.** The counts are reconciled in section 5, and the discrepancies are flagged rather than silently changed. This report and the R2 record T11 section are the complete audit. The inventory is in section 6. The final state is in section 10.

---

## 5. Cumulative counts (T1 to T10, reconciled; T11 adds zero browser actions)

Worker-recorded values are the cumulative figures in the R2 record. Ledger values are the controller ledger rows. Where they differ, both are shown. The record is not edited in place for these figures; corrections are recorded in the R2 record T11 section.

| Operation | Worker cumulative | Ledger / reconciled | Status |
| --- | --- | --- | --- |
| **Finish** | 1 | 1 (T6 row 7) | Match |
| **Create Form prompt: Yes / No** | 0 / 1 | 0 / 1 (T6 row 11) | Match |
| **Wizard Next** | 1 | 1 (T5 row 26) | Match |
| Wizard openings / wizard Close | 1 / 1 | 1 / 1 (T7 row 5 for Close) | Match |
| Designer toolbar `New` (wizard launch) | 1 | Per T2 record | Match (not a creation) |
| **Unloads** (Unload All Global Form Objects / Web Client / FormSync / deployment) | 0 / 0 / 0 / 0 | No unload call in any ledger | Match |
| **Native Check In** | 1 | 1 (T8 row 9) | Match |
| Check-in confirmations | 0 | 0 | Match |
| Informational notice OK | 1 | 1 (T8 row 13) | Match |
| **IDOs Form close / reopen** | 2 / 2 | T1 pre-gate pair; T10 close at ledger row 10; T10 reopen at rows 12 to 22 | Match |
| **Sql Tables Form close / reopen** | 2 / 2 | T1 pre-gate pair; T10 rows 39 and 41 to 50 | Match |
| Child-view closes, Sql Columns / IDO Properties | 2 / 1 | T10 rows 4 and 76 (Sql Columns); row 8 (IDO Properties) | Match |
| **Child-view opens, Sql Columns** | **1 in the T10 cumulative column** | **2** (T9 row 18; T10 row 64) | **DISCREPANCY — corrected to 2 in this report and in the R2 record T11 section; T10 text left unchanged** |
| Child-view opens, IDO Properties | 1 | 1 (T7 row 38) | Match |
| **Recovery queries (AC-7)** | 2 | 2 (T10 rows 26 to 30; rows 56 to 60) | Match |
| Post-creation readback queries | 2 | 2 (T7 row 21; T9 row 14) | Match |
| Absence queries (FiP exact name, pre-gate) | 2 | 2 (T1; r2-05 to r2-09) | Match |
| **Element clicks (successful / failed)** | 83 / 1 | 83 / 1 (per-task sums: T1 13, T2 8, T3 4, T4 16, T5 1, T6 2, T7 9, T8 3, T9 6, T10 21; failed: T4 Ref e2995) | Match |
| **Coordinate clicks (`mouse_click_xy`)** | 7 / 0 | **8** (T5 rows 7, 10, 11, 14, 15, 18, 21 = 7; T7 row 29 = 1) | **DISCREPANCY — flagged, not changed.** The T5 record states 6 coordinate clicks; the ledger shows 7 |
| `browser_type` fills (succeeded / refused) | 20 / 0 | 20 (T1 4; T2 4; T4 6; T7 1; T9 1; T10 4) | Match |
| Key presses | 33 | 33 (T1 6; T2 7; T3 3; T4 7; T7 2; T9 2; T10 6) | Match |
| Waits | 1 | Per record | Not independently verified |
| `browser_tabs` list / select | 10 / 11 | Select count corrected at T7 from 2 to 1 (ledger row 7). T6 to T10 ledger-verified; T1 to T5 per prior pass | Match after the recorded T7 correction |
| Snapshots, untargeted / targeted (successful) | 7 / 31 | Ledger rows for T9 (rows 3, 33) and T10 (rows 3, 68) record no target argument | **Split unverifiable from the ledger — flagged** |
| **Targeted snapshots failed (ref not found)** | 2 | **1** (T7 row 8, Ref f1e102 — a snapshot). The T4 failure (Ref e2995) was an **element click**, not a snapshot | **DISCREPANCY — label only, flagged.** Correct split: snapshot failures 1, click failures 1; total ref-not-found 2 |
| `browser_find` calls | 108 | T9 = 7 and T10 = 28 ledger-verified; T1 to T8 per worker tally | Partly verified |
| Screenshots | 65 | 65 PNG files `r2-00` to `r2-64` | Match |
| In-page dialogs answered | 9 | T10 = 3 (rows 22, 50, 52) ledger-verified; T1 to T9 = 6 per worker tally | Partly verified |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | 0 (no session-expiry procedure run) | Match |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 (no edit or Save into existing objects in any ledger) | Match |
| Strings created | 0 | 0 | Match |
| Browser JavaScript, console, network, direct SQL | 0 | 0 | Match |
| Records created or edited in FX_Orders | 0 | 0 | Match |

**Controller header summaries do not reproduce from the rows.** The ledger headers for T8 ("4 actions, 9 reads"), T9 ("10 actions, 17 reads") and T10 ("32 actions, 38 reads") disagree with their own row lists. The row-level tallies are: T8 8 action-type rows and 10 read-type rows; T9 18 and 18; T10 40 and 39. This report uses the row-level tallies. The header inconsistency is flagged as a controller-ledger issue.

Reconciliation notes:
- The discrepancies above do not change any acceptance result. The mutation counts (Finish, No, unloads, check-ins, closes, reopens) match across sources.
- The "7 coordinate clicks" in the worker cumulative is 6 (T5 as recorded) plus 1 (T7). The ledger gives 8. Which figure is right can be settled only by the operator reviewing the T5 record against the ledger, so both are reported.

---

## 6. Worker-written file inventory (with file classification)

**A. Worker-written (authored in the R2 task sequence; in scope)**

| File | Action | Notes |
| --- | --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | Created in T1; edited T2 to T10; **edited in T11** (T9 moved ahead of T10; T11 section appended; one T11 action-count line corrected) | The experiment record |
| `evidence/EXP-071-R2/r2-00-…` to `r2-64-…` (65 PNG files) | Created by the worker through the screenshot tool, in the task sequence T1 to T10 | Evidence screenshots |
| `evidence/EXP-071-R2/T11-final-acceptance-report.md` | Created in **T11** | This report |

**B. Controller-generated (not worker-authored)**

| File | Notes |
| --- | --- |
| `evidence/EXP-071-R2/harness-audit-T1.md` … `harness-audit-T10.md` (10 files) | Controller-generated native-call ledgers. They record attempted tool calls and native results, not rendered-state proof. Their header summaries disagree with their rows for T8, T9 and T10 (section 5). |

**C. Tool-generated (MCP tool output, not authored by the worker)**

| Path | Notes |
| --- | --- |
| `evidence/playwright/` (snapshot `.yml` and console `.log` files) | Written by the MCP browser tool during the R2 tasks. Examples cited in the T9 and T10 records (for example `page-2026-10-13T07-06-23-550Z.yml`, `console-2026-10-13T07-06-17-883Z.log`). A complete enumeration was not performed in T11. |

**D. Outside the repository**

| Path | Notes |
| --- | --- |
| Session tool-results directory (a saved T4 token-limit snapshot file) | Outside the repository. A Grep read was permission-denied. Its content was not read. |

**E. Not written in R2 (prior run)**

| Path | Notes |
| --- | --- |
| `evidence/EXP-071/` (t1-00 to t1-13 PNGs; `harness-audit-T1.md`; `harness-audit-T2.md`; `T2-final-blocked-report.md`) | From the EXP-071 prior run. Read only in R2 (cited as positive controls and gate context). Not modified by R2. |

**Confinement.** This T11 task wrote two repository files: the R2 record (edits) and this report (created). The harness computes repository confinement from before/after Git state and the evidence diff. Operator git review is authoritative. The worker did not run git.

---

## 7. Limitations and process deviations

1. **T1 sequencing deviation** (section 3): transcript first read in T2, after T1 browser interaction.
2. **T2 Escape commit:** Escape committed FX_Cost to row 1 Property Class. Clearing the class left inherited residue (Decimal, decimal, Length 18, Precision 2, FX_sCost, Default 0). Corrected in T3 by an explicit click on FX_OrderNumBase. Cause of the Escape commit **not established** (observed in one run).
3. **T3 record Edit failure:** a worker record edit reported "String to replace not found" and was retried with a corrected anchor. It did not affect Mongoose.
4. **T4 stale ref:** a click on Ref e2995 failed with "Ref not found". A fresh untargeted snapshot exceeded the token limit; its saved file was permission-denied for Grep (outside the repository). Recovered with a targeted find and click.
5. **T5 coordinate clicks:** the grid's horizontal scroll arrows and track have no accessible name. The worker used coordinate clicks (ledger rows 7, 10, 11, 14, 15, 18, 21; the T5 record states six). The count discrepancy is in section 5.
6. **T7 stale ref:** a targeted snapshot after a tab switch failed on Ref f1e102. Recovered with one untargeted snapshot and a tab click.
7. **T7 first coordinate click** landed on the scroll thumb with no effect (`r2-42` unchanged; ledger row 29).
8. **FX_sCount** Label String ID resource: **unresolved**. The wizard accepted the typed value. Whether the string exists was not verified, and string creation was out of scope.
9. **FX_Count SQL default and nullability** differ from the IDO default (1) and the brief's expectations (section AC-6). Not repaired.
10. **Mongoose-native check-in vs external source control:** the one Check In changed the Revision from 1 to 2 in Mongoose. The source-control notice states that integration is disabled and nothing was checked in to external source control. No external source-control action was taken.
11. **IDO Label String ID and Default** were read in T7 only. Not re-read after the T10 reopen (the IDO Properties view was closed in T10 and not reopened).
12. **SQL framework columns 5–11** were named, not read for types.
13. **Same-session UI only:** no database durability, cross-session persistence or replay verification is claimed.
14. **Pre-existing FX_Items checked-out state** in the EXP-071 control (`t1-07`): an observation only; not an R2 action.
15. **Open views** at the end of T10: IDOs and Sql Tables Forms remain open (clean; Filter in Place). Sql Columns and IDO Properties were closed in T10.

---

## 8. Knowledge state (per finding)

| Finding | State |
| --- | --- |
| IDO FX_Orders and dbo.FX_Orders absent before creation (criterion visible before F4; zero data rows after) | **observed** (UI, same session) |
| Positive controls return known records (IDO FX_Items; dbo.FX_Items) | **observed** (carried from EXP-071) |
| Wizard header and the three classes listed in the Property Class lookup | **observed** |
| Row 1 Escape commit and its correction | **observed** (one run; cause unresolved) |
| Four properties configured with the specified classes, values and flags | **observed** |
| Single Finish and single No; "Table and IDO created." | **observed** |
| Mongoose-native check-in changed the Revision 1 to 2 | **observed** |
| IDO and SQL readbacks match the wizard configuration (except FX_Count SQL default and nullability) | **observed** |
| FX_Count SQL default blank vs IDO default 1 | **observed**; intent **unresolved** |
| FX_sCount string existence | **unverified** |
| Same-session recovery matches the readbacks | **observed** (UI, same session) |
| Wizard route and sequence for FX_ maintenance (New Form Definition > New Data > Maintenance) | **candidate_procedure**: one R2 run plus the EXP-049 route; repeatability not established |
| Database durability, cross-session persistence, replay verification | **not claimed** |

---

## 9. Open questions and operator decisions

1. **FX_Count SQL default (blank) and nullability (nullable)** against the IDO default (1). Accept as observed (EXP-049 precedent), or direct a separate authorised step. No repair was made.
2. **FX_sCount** string existence: verify separately, or accept that it is unverified for this replay.
3. **T1 sequencing deviation:** accept or reject for the replay record.
4. **Count discrepancies** (section 5): confirm the T5 coordinate-click figure (6 record vs 7 ledger) and the snapshot target split, or accept the reconciliation.
5. **IDO Label and Default** re-read: accept the T7 read, or direct a separate read.
6. **Open views:** keep or close the IDOs and Sql Tables Forms in a later task.
7. This report does not start EXP-072 (the FX_Orders Form). Its readiness depends on the decisions above.

---

## 10. Final state (end of T10; no browser action in T11)

- Designer (tab 0): the wizard was closed by native Close in T7; the Designer shows no dialog and Save disabled.
- Web Client, IDOs Form (tab): reopened in Filter in Place; criterion `FX_Orders`; one record; FX_Orders Revision 2, checked in (Check Out offered); Save disabled.
- Web Client, Sql Tables Form (tab): Filter in Place; criterion `FX_Orders`; one row dbo.FX_Orders; Save disabled.
- Sql Columns and IDO Properties child views: closed (T10).
- No dialog open; no unsaved change observed at the last recorded state.
- Objects created in R2: the IDO FX_Orders (project FX_HelloWorldProject01, alias fxords, four properties) and the SQL table dbo.FX_Orders (PK_FX_Orders, IX_FX_Orders_RowPointer, four business columns plus framework columns). Both are observed at UI level in this session only.
- No Form was created for FX_Orders. No record was created or edited in FX_Orders.

---

## 11. Action counts (T11 only)

| Operation | T11 |
| --- | --- |
| Browser calls (any browser MCP tool) | **0** |
| Mongoose changes (Finish, Create Form, check-in, unload, save, close, reopen, edit) | **0** |
| Repository writes | 6 record edits (T9 removal from the end; T9 reinsertion before T10; T11 section append; one snapshot-row label fix; two T11 count-line fixes) and 1 report created |
| Image reads (read-only) | 15 (`r2-05`, `r2-06`, `r2-08`, `r2-09`, `r2-14`, `r2-17`, `r2-25`, `r2-34`, `r2-35`, `r2-44`, `r2-50`, `r2-60`, `r2-62`; EXP-071 `t1-07`, `t1-10`) |
| Failed reads | 4 (guessed file names; corrected with Glob) |
| Glob / Grep | 3 / 2 in this part of T11 |
| Shell, git, scripts, browser JavaScript | **0** |
