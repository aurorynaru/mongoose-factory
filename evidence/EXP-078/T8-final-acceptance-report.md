# EXP-078 — T8 final acceptance report

Run `R-20261013-232454-0utz` · cycle 7 · task T8 (documentation only) · worker session `1122cb1c-7223-42b5-96b0-2be8986df1ce` · task_message_id `d7ebff73-75ba-4fdd-9814-1318a2666486` · run date 2026-10-13 (per brief).

**Zero browser calls. Zero Mongoose changes.** No Designer, Save, Check In, Undo, unload, FormSync, deployment, regeneration, SQL, script or evaluate action was taken in T8.

---

## 1. Verdict

**Recommendation: ACCEPTED AS OBSERVED.** AC-1 to AC-8 are each supported by cited evidence at the same-session UI and accessibility level. The qualifications in §9 and §10 apply. Nothing here is database durability, generated-SQL correctness or replay verification. The acceptance decision is the coordinator's and the operator's.

| AC | Status | Principal evidence |
|---|---|---|
| AC-1 | Supported | `t1-01` to `t1-04`; T1 harness rows 11–37 |
| AC-2 | Supported | `t2-01`, `t2-02`; T2 harness rows 8–14 |
| AC-3 | Supported | `t3-01`, `t3-02`; T3 harness rows 4–31 |
| AC-4 | Supported | `t4-01`, `t5-01` (before Finish); T4 rows 4–18; T5 rows 4–19 |
| AC-5 | Supported | `t4-02`, `t5-02`, `t5-03`; T4 and T5 readbacks |
| AC-6 | Supported (same session) | `t6-01` to `t6-04`; T6 harness rows 6–22 |
| AC-7 | Supported (same session) | `t7-01` to `t7-03`; T7 harness rows 6–33 |
| AC-8 | Supported by this report | §§2–8 of this file; EXP-078 record T8 section |

---

## 2. Sources reviewed in T8

- EXP-078 record, all sections T1–T7 (written in this session; T8 verified its cited paths and counts rather than re-reading every paragraph).
- Harness audits `evidence/EXP-078/harness-audit-T1.md` to `harness-audit-T7.md` (controller-generated; read in full). Header tallies and row-level tallies were recounted.
- All 20 screenshots cited by the record exist (checked in T8 before writing this report). Each was viewed with the Read tool in its own task (harness Read rows) except `t6-03`, which has no Read row in the T6 audit and was first viewed in T8. Re-viewed in T8: `t4-02`, `t5-02`, `t5-03`, `t6-01`, `t6-03`.
- Not read in T8: `tools/` (not readable by brief), secrets (none read), AGENTS.md (read in T1), the Hello World Part 5 transcript (read in T1).

---

## 3. Cited evidence paths (all exist)

| File | Viewed | Shows (as inspected) | Does not prove |
|---|---|---|---|
| `t1-01-pre-f4-idos-fx-orders-criterion.png` | T1 | IDO Name `FX_Orders`; echo row; status `Filter in Place`; Tables sub-tab empty | the single-row query result (no post-F4 capture) |
| `t1-02-baseline-properties-inventory.png` | T1 | identity header (Revision 2; 10/13/2026; Locked By blank; Check Out enabled); property rows 1–8 | rows 9–11; right-hand flag columns |
| `t1-03-baseline-properties-inventory-scrolled-end.png` | T1 | rows 4–11, last row InWorkflow; identity header | right-hand columns beyond Read Only |
| `t1-04-baseline-tables-view.png` | T1 | one Tables row: FX_Orders / fxords / Primary Base / Inner; identity header | database state |
| `t2-01-pre-checkout-idos-fx-orders-identity-checked-in.png` | T2 | identity; Check Out enabled; Locked By blank; one Tables row | — |
| `t2-02-checkout-result-settled-locked-by-operator.png` | T2 | row checkbox checked; Locked By operator (clipped); Revision 2; Check In and Undo Check Out enabled; status `Check Out (IDOs 1 of 1)` | full Locked By value (clipped) |
| `t3-01-ido-table-wizard-before-ok.png` | T3 | wizard tab: IDO Name FX_Orders; Table Name FX_HelloWorld01; Alias fxcus; Secondary; Left Outer; builder FX_Code = FX_Orders (fxords) . FX_CustomerID; join text `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; OK and Cancel | that OK committed the join (see `t3-02`) |
| `t3-02-tables-view-after-ok-two-entries.png` | T3 | two Tables rows (FX_HelloWorld01 / fxcus / Secondary / Left Outer / join; FX_Orders / fxords / Primary Base / Inner); status `New Table (IDOs 1 of 1)`; Revision 2 | persistence; SQL |
| `t4-01-new-property-wizard-FX_CusName-before-finish.png` | T4 | Bind To `fxcus.FX_Label`; Property Name `FX_CusName`; Property Class blank; String; 100; nvarchar | stored binding |
| `t4-02-post-finish-properties-inventory-FX_CusName.png` | T4 (re-viewed T8) | status `New Property (IDOs 1 of 1)`; Save greyed; row 2 FX_CusName, column FX_Label, String, 100, nvarchar (clipped), Read Only checked; checkout controls | right-hand columns beyond Read Only |
| `t5-01-new-property-wizard-FX_CusAddress-before-finish.png` | T5 | Bind To `fxcus.FX_Address`; Property Name `FX_CusAddress`; Property Class blank; String; 150; nvarchar | stored binding |
| `t5-02-post-finish-properties-inventory-top-rows-1-8.png` | T5 (re-viewed T8) | rows 1–8; FX_CusName row 2 (Read Only checked); identity Revision 2; Check In and Undo Check Out enabled; **status `P&roperties`** | — (see correction C3, §9) |
| `t5-03-post-finish-properties-inventory-scrolled-rows-6-13.png` | T5 (re-viewed T8) | rows 6–13; FX_CusAddress row 11 (Sequence 10; FX_Address; String; 150; nvarchar clipped; Read Only checked); NoteExistsFlag 10; InWorkflow 11; **status `P&roperties`** | Read Only Record column beyond the image |
| `t6-01-pre-f4-recovery-idos-fx-orders-criterion.png` | T6 (re-viewed T8) | reopened IDOs: IDO Name `FX_Orders`; echo row; status `Filter in Place`; Tables sub-tab empty before the query | the query result |
| `t6-02-recovered-tables-view-two-entries-join.png` | T6 | identity (Revision 2; Locked By operator; Check In enabled); two Tables rows with the join; status `Description (IDOs 1 of 1)` | database state; the Description focus is a caption only |
| `t6-03-recovered-properties-inventory-rows-1-8.png` | no Read row in T6; first viewed T8 | rows 1–8; FX_CusName row 2 (Read Only checked); identity Revision 2; Check In enabled | rows 9–13 |
| `t6-04-recovered-properties-inventory-scrolled-rows-6-13.png` | T6 | rows 6–13; FX_CusAddress row 11 (Read Only checked) | right-hand columns beyond the image |
| `t7-01-runtime-pre-f4-filter-in-place-blank-criteria.png` | T7 | runtime FX_Orders; status `Filter in Place`; criteria blank; Save greyed | the query result |
| `t7-02-runtime-post-f4-two-records-save-disabled.png` | T7 | record 1 detail: 1 / FX001 / dumbbell / 2; status `Customer ID (Object 1 of 2)`; Save greyed | record 2 data cells (clipped in the grid) |
| `t7-03-runtime-record-2-FX002-eggs-count-1.png` | T7 | record 2 detail: 2 / FX002 / eggs / 1; status `(Object 2 of 2)`; Save greyed | persistence |

All 20 files are worker-authored PNGs. The harness audits are controller-generated (§8).

---

## 4. Baseline (T1) versus final inventory

Baseline is the T1 readback (11 rows). Final is the T5 post-Finish readback, which the T6 recovered readback matched row for row. Read Only, Required and Read Only Record flags are as read in the accessibility readback and the visible columns (see the T1 and T2 records for column mapping).

| Row | Property | Baseline seq (T1) | Final seq (T5/T6) | Property Class | Property Type | Column (table alias) | Data type / length / column type | Read Only | Required | Read Only Record | Change |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber (fxords) | class-bound | no | yes | no | none |
| 2 | FX_CusName | — | **2** | (blank) | Bound to Column | **FX_Label (fxcus)** | **String / 100 / nvarchar** | **yes** | no | no | **added (T4)** |
| 3 | FX_CustomerID | 2 | 2 | FX_CustomerID | Bound to Column | FX_CustomerID (fxords) | class-bound | no | yes | no | none |
| 4 | FX_Item | 3 | 3 | FX_Item | Bound to Column | FX_Item (fxords) | class-bound; length 50 | no | yes | no | none |
| 5 | FX_Count | 4 | 4 | (blank) | Bound to Column | FX_Count (fxords) | Long Integer / int | no | no | no | none |
| 6 | CreatedBy | 5 | 5 | (blank) | Bound to Column | CreatedBy | String / 128 / UsernameType | yes | no | no | none |
| 7 | UpdatedBy | 6 | 6 | (blank) | Bound to Column | UpdatedBy | String / 128 / UsernameType | yes | no | no | none |
| 8 | CreateDate | 7 | 7 | (blank) | Bound to Column | CreateDate | Date / CurrentDateType | yes | no | no | none |
| 9 | RecordDate | 8 | 8 | (blank) | Bound to Column | RecordDate | Date / CurrentDateType | yes | no | no | none |
| 10 | RowPointer | 9 | 9 | (blank) | Bound to Column | RowPointer | GUID / RowPointerType | yes | no | no | none |
| 11 | **FX_CusAddress** | — | **10** | (blank) | Bound to Column | **FX_Address (fxcus)** | **String / 150 / nvarchar** | **yes** | no | no | **added (T5)** |
| 12 | NoteExistsFlag | 10 | 10 | (blank) | Bound to Column | NoteExistsFlag | Byte / FlagNyType | no | no | no | none |
| 13 | InWorkflow | 11 | 11 | (blank) | Bound to Column | InWorkflow | Byte / FlagNyType | no | no | yes | none |

Rows are shown in display order (sorted by sequence, with the two added rows interleaved). The eleven originals keep their baseline sequence values, names, classes, property types, columns, key sequences, data types, lengths, column types and flags. Pseudo Key and Upper Case were unchecked/blank on every row.

Sequence duplicates in the final state: `2` (FX_CusName and FX_CustomerID) and `10` (FX_CusAddress and NoteExistsFlag). Observed, not judged (§9, item O1).

Recovered (T6) inventory: identical to the final T5 inventory for all 13 rows (T6 record, "Baseline versus recovered" table).

### Tables comparison

| Point in time | Entries | Detail |
|---|---|---|
| Baseline (T1) | 1 | FX_Orders / fxords / Primary Base / Inner / Join Text blank |
| After wizard OK (T3) | 2 | FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Orders / fxords / Primary Base / Inner |
| After both properties (T5) | 2 | same as above |
| Recovered (T6) | 2 | same as above; join text identical |

---

## 5. Per-AC reconciliation

### AC-1 — Sources reviewed; session usable; fresh IDOs Form; one visible-criterion query; identity, Tables and inventory; absences — **SUPPORTED**

- Sources: AGENTS.md (T1 row 1), Part 5 transcript (row 5), EXP-066-R2 (6), EXP-075 (7), EXP-061 (8), EXP-071-R2 (9; full read completed in T2, harness T2 rows 1, 3–5), EXP-073 (10; full read completed in T2, row 2). Read-only before any browser action (rows 1–10 precede row 11).
- Session: usable; no expiry, sign-in page, portal banner or dialog observed; re-login 0.
- Fresh IDOs Form: a clean IDOs tab (identity FX_HelloWorld01, not FX_Orders) was closed through its Form-tab control (row 16) and reopened through Form > Open > Select Form (rows 18–28).
- Criterion: `FX_Orders` typed once (row 30), committed with Tab (row 31), captured before F4 in `t1-01`; F4 once (row 34).
- Result: one FX_Orders row. The single-row status (`Extends (IDOs 1 of 1)`) is recorded from the T1 accessibility readback (row 36). No dedicated post-F4 screenshot exists.
- Identity: project FX_HelloWorldProject01; Revision Num 2; Revision Date 10/13/2026; Locked By blank (checked in); Access As G6R; Label `oFX_Orders` (`t1-02`, `t1-04`).
- Tables: one entry, FX_Orders / fxords / Primary Base / Inner (`t1-04`).
- Inventory: 11 rows (`t1-02` rows 1–8; `t1-03` rows 4–11).
- Absence: FX_CusName, FX_CusAddress and any fxcus entry absent (11-row inventory; one Tables row).
- Limitations: no dedicated post-F4 screenshot; snapshot targeted/untargeted split not verifiable from the harness (§9, O2).

### AC-2 — Exactly one Check Out, with response, Locked By and revision — **SUPPORTED**

- Gate before mutation (`t2-01`): checked in; Locked By blank; Check Out enabled; Revision 2; Tables one row.
- One Check Out click (harness T2 row 11, the only Check Out row in the audit). No dialog, confirmation or error text.
- After (`t2-02`, T2 settled readback): row checkbox checked; Locked By the operator account (value clipped in the image, full value from the accessibility placeholder); Revision Num 2 (unchanged); Check In and Undo Check Out enabled; status `Check Out (IDOs 1 of 1)`; Save disabled.
- Check In 0; Undo Check Out 0; no retry.
- Limitations: Locked By clipped; same session.

### AC-3 — One IDO Table Wizard: FX_HelloWorld01 (Tab-committed), alias fxcus, Secondary, Left Outer, join; one OK; two Tables entries — **SUPPORTED**

- Table Name: `FX_HelloWorld01` typed once (T3 row 6), committed with one Tab (row 7). Readback `FX_HelloWorld01`; no message (row 8 snapshot). No Enter key (none in the audit). The wizard's own Table Name combobox was never picked from its list.
- Table Alias: `fxcus` typed once (row 9), one Tab (row 10).
- Table Type `Secondary` and Join Type `Left Outer` were kept at their defaults.
- Builder: First Column `FX_Code` (rows 12–14); builder Table Name `FX_Orders (fxords)` (rows 16–18); second Column `FX_CustomerID` (rows 20–22); builder Add once (row 24). Join text recorded verbatim: `fxcus.[FX_Code] = fxords.[FX_CustomerID]`. The typed-join fallback was not used.
- Pre-OK inspection: `t3-01`.
- OK once (row 28). Response: no dialog, alert or message; the wizard tab closed; the IDOs tab returned; status `New Table (IDOs 1 of 1)`. The status token counts IDOs, not tables.
- Tables after OK: exactly two entries (`t3-02`), as in the §4 table.
- Limitations: the "dialog before OK" evidence is the wizard view in `t3-01`. Server validity and generated SQL not observed.

### AC-4 — Two Bound New Property wizards, one Finish each — **SUPPORTED**

| Property | Wizard before Finish | Bind To (visible option) | Name (one plain fill) | Property Class | Shown Data Type / Length / SQL type | Finish (rows) | Response |
|---|---|---|---|---|---|---|---|
| FX_CusName | `t4-01` | `fxcus.FX_Label` (T4 row 12) | `FX_CusName` (row 14) | blank | String / 100 / nvarchar | row 18 (once) | no message; wizard closed; status `New Property (IDOs 1 of 1)` |
| FX_CusAddress | `t5-01` | `fxcus.FX_Address` (T5 row 13) | `FX_CusAddress` (row 15) | blank | String / 150 / nvarchar | row 19 (once) | no message; wizard closed; status `New Property (IDOs 1 of 1)` (accessibility readback) |

- New Property wizard opened once per property (T4 row 6; T5 row 7). Page 1 Bound (default). Next once to page 2 (T4 row 8; T5 row 9).
- Types were wizard-populated after binding (Inherit checkboxes disabled); Property Class blank; no label field offered; no string created.
- No Escape in any list. No conversion or consequential prompt.
- Limitations: wizard-populated types, not class-inherited; stored binding not read from the database.

### AC-5 — Clean Form; two new properties with recorded bindings, types and Read Only; 11 originals unchanged; checked out to the operator — **SUPPORTED**

- Save: **0 used** (budget 0 of 1). The Form was clean after each Finish (toolbar Save disabled per readbacks; `t4-02` and `t5-02/03` show Save greyed).
- Properties: 13 rows (§4). Two added: FX_CusName (Bound to `fxcus.FX_Label`; String 100 nvarchar; Read Only checked) and FX_CusAddress (Bound to `fxcus.FX_Address`; String 150 nvarchar; Read Only checked). Neither has a Property Class.
- Eleven originals unchanged against T1 (§4).
- Checked out to the operator: Locked By operator; Check In and Undo Check Out enabled (`t4-02`, `t5-02`, `t5-03`); Revision Num 2 and Revision Date 10/13/2026 unchanged.
- Evidence: `t4-02` (post first Finish), `t5-02` and `t5-03` (post second Finish, rows 1–13).
- Limitations: Read Only Record column beyond the images (accessibility readback); the sequence duplicates (§9, O1); status correction C3 (§9).

### AC-6 — Clean IDOs closed once more and reopened once more; one visible-criterion query recovers FX_Orders with two Tables entries and the join; inventory equal to baseline plus the two properties — **SUPPORTED (same session)**

- Gate (T6 pre-close): clean; checked out; 13 rows; two Tables entries with the join.
- Close (row 7, Close Panel IDOs): no dialog-handling row in the audit.
- Reopen (rows 9–16: Form menu; Form > Open; row `IDOs / IdoCollections`; OK). Reopened in Filter in Place (verified in the status bar; not toggled).
- Criterion `FX_Orders` typed once (row 18), committed with Tab (row 19); `t6-01` before F4; F4 once (row 22).
- Result: one FX_Orders record, status `Description (IDOs 1 of 1)`. Project FX_HelloWorldProject01; Revision 2; Revision Date 10/13/2026; checked out to the operator; Save disabled (`t6-02`).
- Tables: two entries with the join `fxcus.[FX_Code] = fxords.[FX_CustomerID]` (`t6-02`).
- Inventory: 13 rows matching the T5 readback row for row (`t6-03` rows 1–8; `t6-04` rows 6–13).
- Limitations: same-session UI recovery only. The status caption `Description` reflects focus after F4; no value was typed into it.

### AC-7 — Runtime Form after one close/reopen and one blank-criteria query: exactly 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1; Save disabled; nothing changed — **SUPPORTED (same session)**

- Pre-close state (T7 step 3, untargeted snapshot; not a query): runtime Form active with two records visible; Save disabled.
- Close once (row 6, Close Panel FX_Orders): no prompt.
- Reopen once (rows 8–18): Form > Open; filter `FX_Orders`; the dialog's only row `FX_Orders` / `FX_Orders` verified before OK. Reopen state: add-mode placeholder (Order Number 3; Count 1; blank Customer ID and Item); Filter in Place **not** active; Save disabled.
- Filter in Place activated once through the toolbar (row 20); criteria verified blank (`t7-01`, row 23 screenshot).
- One F4 (row 24). Two records. Status `Customer ID (Object 1 of 2)`. Save disabled. FiP off after the query.
- Record 1 (`t7-02`): 1 / FX001 / dumbbell / 2.
- Record 2 (`t7-03`): reached by one read-only row-header click (row 30). 2 / FX002 / eggs / 1; status `(Object 2 of 2)`.
- Returned to record 1 by one row-header click (row 33); `(Object 1 of 2)`.
- No field typed in any record; no Save; no record created, saved or deleted. The only typed entry was the Select Form filter.
- Limitations: record 2 was read by navigation (the grid clips its cells in the image); the placeholder 3 was displayed before the query and removed by it; same session; no database read.

### AC-8 — Final report: decisive evidence for AC-1 to AC-7; complete audit with exact counts; baseline and recovered inventories; worker-written-file inventory; final state — **SUPPORTED by this report**

- Decisive evidence: §5 (AC-1 to AC-7) with the paths in §3.
- Audit with exact counts: §6 (reconciled to the controller audits).
- Baseline and recovered inventories: §4.
- Worker-written-file inventory: §8.
- Final state: §11.
- Unresolved discrepancies are stated, not reconciled silently: §9.

---

## 6. Action counts (reconciled to harness audits)

Harness audit rows are used for each count. Harness `Read`, `Glob`, `Grep`, `Write` and `Edit` rows are file-tool calls and are not counted as browser calls.

### Per task (worker tallies, each checked against harness rows)

| Task | Interactive actions (harness "actions") | Reads (harness "reads") | Harness errors | Flagged `browser_type` |
|---|---|---|---|---|
| T1 | 16 | 18 | 2 (1 browser ref-not-found; 1 non-browser Read before record creation) | 2 |
| T2 | 2 | 6 | 0 | 0 |
| T3 | 14 | 15 | 1 (non-browser Edit; retried) | 2 |
| T4 | 8 | 11 | 0 | 1 |
| T5 | 11 | 14 | 0 | 1 |
| T6 | 13 | 17 | 0 | 1 |
| T7 | 13 | 19 | 0 | 1 |
| **Total** | **77** | **100** | | **8** |

Total browser calls: 77 actions + 100 reads = **177**.

### Cumulative exact counts (T1–T7)

| Category | Count | Source (harness rows) | Brief expectation | Status |
|---|---|---|---|---|
| Check Out | **1** | T2 row 11 | 0 or 1 | matches |
| Check In | **0** | none | 0 | matches |
| Undo Check Out | **0** | none | 0 | matches |
| New Table | **1** | T3 row 4 | 1 | matches |
| Table wizard OK | **1** | T3 row 28 | 1 | matches |
| Builder Add | **1** | T3 row 24 | (builder) | matches |
| Typed join-text fallback | **0** | none | 0 | matches |
| New Property wizards opened | **2** | T4 row 6; T5 row 7 | 2 | matches |
| Finish | **2** | T4 row 18; T5 row 19 | 2 | matches |
| Save | **0** | no Save row in T1–T7 | 0 or 1 | matches (budget 0 of 1 used) |
| IDOs Form close / reopen pairs | **2** | T1 rows 16 and 26–28; T6 rows 7 and 14–16 | 2 | matches |
| IDOs target F4 queries | **2** | T1 row 34; T6 row 22 | 2 | matches |
| Runtime FX_Orders close / reopen | **1 / 1** | T7 row 6; rows 10–18 | 1 / 1 | matches |
| Runtime blank-criteria F4 | **1** | T7 row 24 (FiP activation row 20) | 1 | matches |
| Designer actions | **0** | no Designer row; tab selects recorded by the worker as index 1 | 0 | matches (index recorded by worker only; §9, O6) |
| Unloads / cache / FormSync / deployment / regeneration | **0** | none | 0 | matches |
| Re-logins | **0** | no sign-in event in any row | 0 | matches |
| Strings, property classes, SQL objects, Forms, runtime records changed | **0** | no such action; typed fields only (§9, O5) | 0 | matches |
| Record edits / creates / deletes (runtime) | **0** | none | 0 | matches |

### Browser-call category totals (worker tallies, reconciled to the 77 + 100 harness totals)

| Category | Count | Note |
|---|---|---|
| Element clicks | 47 | 77 actions = clicks 47 + typed 8 + key presses 9 + mouse moves 3 + wheels 3 + tab selects 7 |
| Typed entries (succeeded / refused) | 8 / 0 | Table Name; Table Alias; Property Name ×2; IDO Name criterion ×2; Select Form filter ×2 |
| Key presses | 9 | Tab 6; F4 3; Enter 0; Escape 0 |
| Mouse moves / wheel | 3 / 3 | view-only scrolls (T1, T5, T6) |
| Tab lists / selects | 7 / 7 | one list and one select per task |
| Snapshots | 55 | 31 recorded as untargeted; 24 as targeted (1 ref-not-found in T1). Split not verifiable (§9, O2) |
| Finds | 14 | |
| Screenshots | 20 | the 20 cited PNGs |
| Waits | **4** | T1 1; T2 1; T6 1; T7 1 (corrected here; §9, C1) |
| Reads total | 100 | 7 tab lists + 55 snapshots + 14 finds + 20 screenshots + 4 waits = 100, equal to the harness read total |

Dialogs answered: 3 (Select Form OK in T1, T6 and T7). Native browser dialogs: 0. Portal banner dismissals: 0. Ref-not-found: 1 (T1, recovered with one fresh snapshot; no mutation followed). Timeouts: 0.

Per-task check of IDOs close/reopen: T1 closed the clean tab for FX_HelloWorld01 (a pre-existing tab from an earlier task) and reopened IDOs for FX_Orders. That counts as the first pair; the harness rows cannot name which IDO the closed tab showed (§9, O7).

---

## 7. Baseline and recovered comparison (summary)

| Item | Baseline (T1) | Post-change (T5) | Recovered (T6) | Equal to baseline plus join and two properties? |
|---|---|---|---|---|
| IDO | FX_Orders | FX_Orders | FX_Orders | yes |
| Project | FX_HelloWorldProject01 | same | same | yes |
| Revision Num / Date | 2 / 10/13/2026 | 2 / 10/13/2026 | 2 / 10/13/2026 | yes (unchanged across Finishes, close and reopen) |
| Checkout | checked in | checked out to operator | checked out to operator | yes (the one Check Out is the only change) |
| Tables | 1 entry | 2 entries + join | 2 entries + join | yes |
| Properties | 11 | 13 (+FX_CusName, +FX_CusAddress) | 13 | yes |
| Save | disabled | disabled (0 Saves) | disabled | yes |

---

## 8. Worker-written-file inventory

### Worker-authored (this experiment's authorised paths)

| File | Action | Task |
|---|---|---|
| `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` | created (T1); edited (T2–T8) | T1–T8 |
| `evidence/EXP-078/t1-01-pre-f4-idos-fx-orders-criterion.png` | created | T1 |
| `evidence/EXP-078/t1-02-baseline-properties-inventory.png` | created | T1 |
| `evidence/EXP-078/t1-03-baseline-properties-inventory-scrolled-end.png` | created | T1 |
| `evidence/EXP-078/t1-04-baseline-tables-view.png` | created | T1 |
| `evidence/EXP-078/t2-01-pre-checkout-idos-fx-orders-identity-checked-in.png` | created | T2 |
| `evidence/EXP-078/t2-02-checkout-result-settled-locked-by-operator.png` | created | T2 |
| `evidence/EXP-078/t3-01-ido-table-wizard-before-ok.png` | created | T3 |
| `evidence/EXP-078/t3-02-tables-view-after-ok-two-entries.png` | created | T3 |
| `evidence/EXP-078/t4-01-new-property-wizard-FX_CusName-before-finish.png` | created | T4 |
| `evidence/EXP-078/t4-02-post-finish-properties-inventory-FX_CusName.png` | created | T4 |
| `evidence/EXP-078/t5-01-new-property-wizard-FX_CusAddress-before-finish.png` | created | T5 |
| `evidence/EXP-078/t5-02-post-finish-properties-inventory-top-rows-1-8.png` | created | T5 |
| `evidence/EXP-078/t5-03-post-finish-properties-inventory-scrolled-rows-6-13.png` | created | T5 |
| `evidence/EXP-078/t6-01-pre-f4-recovery-idos-fx-orders-criterion.png` | created | T6 |
| `evidence/EXP-078/t6-02-recovered-tables-view-two-entries-join.png` | created | T6 |
| `evidence/EXP-078/t6-03-recovered-properties-inventory-rows-1-8.png` | created | T6 |
| `evidence/EXP-078/t6-04-recovered-properties-inventory-scrolled-rows-6-13.png` | created | T6 |
| `evidence/EXP-078/t7-01-runtime-pre-f4-filter-in-place-blank-criteria.png` | created | T7 |
| `evidence/EXP-078/t7-02-runtime-post-f4-two-records-save-disabled.png` | created | T7 |
| `evidence/EXP-078/t7-03-runtime-record-2-FX002-eggs-count-1.png` | created | T7 |
| `evidence/EXP-078/T8-final-acceptance-report.md` | created | T8 |

Totals: 1 record (created once, edited in T2–T8), 1 report (this file), and 20 PNGs. Worker-authored files total 22; the record was edited, not recreated, in each later task.

### Harness and tool-generated (not worker-authored)

- `evidence/EXP-078/harness-audit-T1.md` through `harness-audit-T7.md` (7 controller-generated audits, read in T8).
- Playwright MCP snapshot and console files under `evidence\playwright\` with timestamps between 15:03 and 15:55 on 2026-10-13 (about 90 files matched a Glob in T8). Per-file attribution to this run's tasks was not verified, so no count is asserted. These are tool-written, not worker-authored.

### Repository confinement

Worker inventory above: only the EXP-078 record and `evidence/EXP-078/` files were written by this worker. No file under `tools/`, AGENTS.md, tutorial sources, recipes, other experiments' records or other evidence directories was written. The harness and operator git review are authoritative for repository confinement.

---

## 9. Unresolved audit discrepancies and observations (not reconciled silently)

**Corrections made in T8 (recorded here, not silently):**

- **C1 — waits.** The T7 cumulative table stated waits as 3. The correct total is **4** (T1 1, T2 1, T6 1, T7 1). The harness read total of 100 requires 4. Root cause: the T2 wait is missing from every cumulative waits row from T3 onward (T3 total should be 2, T4 2, T5 2, T6 3, T7 4). The T2 table is correct. The record's tables are left as written; this correction governs and is repeated in the record's T8 section.
- **C2 — T1 harness note.** The header tally "16 actions, 18 reads" is consistent with the rows when actions = clicks + typed + keys + mouse + tab select, and reads = snapshots + finds + tab list + screenshots + waits. No change needed; recorded for transparency.
- **C3 — T5 screenshot status.** The T5 record described `t5-02` and `t5-03` as showing status `New Property (IDOs 1 of 1)`. Both images show status **`P&roperties`** (bottom left), because the Properties sub-tab click changed the focus caption. The `New Property (IDOs 1 of 1)` status is the post-Finish accessibility readback, not a property of those two images. `t4-02` does show `New Property (IDOs 1 of 1)`.

**Observations and open items:**

- **O1 — duplicate sequence values.** FX_CusName (2) shares sequence 2 with FX_CustomerID; FX_CusAddress (10) shares sequence 10 with NoteExistsFlag. The baseline had no duplicates. Whether this is intended, and what the sequence means for the IDO, is unresolved. No value was edited.
- **O2 — snapshot target split.** Every harness snapshot row shows "(no key/element/filename argument)", so the controller cannot distinguish targeted from untargeted snapshots (T1 row 38, a targeted ref-not-found, also appears this way). The worker's 31 untargeted and 24 targeted tallies are recorded but not verifiable from the controller rows. The total of 55 snapshots is verified.
- **O3 — runtime reopen initial state.** The IDOs Form reopened in Filter in Place (T1 and T6). The FX_Orders runtime reopened in add mode, not in Filter in Place (T7). The cause is not established.
- **O4 — runtime placeholder.** On the T7 reopen the runtime showed an add-mode placeholder with Order Number 3 (not saved). The EXP-078 record (T2 knowledge state) cites EXP-073 T5 for the same displayed value on reopen. The source of the value (database next value or client default) is unresolved. The query removed it.
- **O5 — flagged typed entries.** The harness flags 8 `browser_type` calls as "prohibited-tool hits" (T1 2, T3 2, T4 1, T5 1, T6 1, T7 1). All 8 were the brief's authorised typed fields: Table Name, Table Alias, Property Name (×2), IDO Name criterion (×2, T1 and T6), and Select Form filter (×2, T1 and T7). No evaluate, run-code, script, console or network call was made (the harness lists none). The flag is a classification, not a violation found in the rows.
- **O6 — tab index.** Harness tab-select rows do not record the index. The worker records index 1 (Web Client) in every task and never selected or snapshotted the Designer tab. This is a worker statement, not a controller-verified fact.
- **O7 — closed IDOs tab identity (T1).** The T1 close (row 16) was of a clean IDOs tab that showed FX_HelloWorld01, not FX_Orders. The controller row does not name the IDO. The worker's T1 readback is the only identity evidence.
- **O8 — non-browser tool errors.** T1: a Read of the EXP-078 record before it existed (harness row 4). T3: a documentation Edit whose old string was not found, retried successfully (harness row 33). Neither touched Mongoose. The T3 record did not mention the failed Edit; this report does.
- **O9 — Revision Date.** Revision Date reads 10/13/2026 in every readback of this run. The EXP-078 record (T1 and T2 knowledge states) cites EXP-071-R2 T7 (Revision Num 1, Revision Date 10/13/2026) and resolves that the EXP-071-R2 T8 check-in changed only Revision Num. That resolution is the record's inference, not verified in T8.
- **O10 — status token counts.** Status tokens such as `New Table (IDOs 1 of 1)` and `New Property (IDOs 1 of 1)` count the IDO collection, not the number of tables or properties.
- **O11 — non-visible values.** Locked By is clipped in the screenshots; full values come from the accessibility placeholder and the operator's identity bar. The operator value is not reproduced in this report.
- **O12 — Filter in Place on the IDOs reopen in T6.** T6 verified the status bar (`Filter in Place`) and did not toggle it. The T6 record says so.

---

## 10. Qualifications carried into the verdict

- All evidence is same-session UI and accessibility level. Same-session close and reopen is a weak persistence boundary. It does not establish database durability, the stored binding, generated SQL, server-side validity of the join, or the value stored for FX_Count's default.
- Save was never used (budget 0 of 1). Finish and OK were not followed by Save; persistence rests on the same-session close and reopen only (T6, T7).
- No replay was performed, and none is claimed.
- Records 1 and 2 of the runtime were read through the grid and detail pane; record 2's grid cells are clipped in the image.

---

## 11. Final state (as reported by T7; not re-inspected in T8)

- Web Client tab 1 is the selected tab. Tab 0 (Web Designer) was never selected or snapshotted.
- **FX_Orders runtime Form:** open, active, clean (Save disabled), Filter in Place off, record 1 current (`Customer ID (Object 1 of 2)`), values 1 / FX001 / dumbbell / 2.
- **Recovered IDOs Form:** open behind the runtime, clean, FX_Orders checked out to the operator, Revision Num 2, Revision Date 10/13/2026, 13 property rows, two Tables entries with the join.
- No dialog open. No unsaved change. No pending wizard.

---

## 12. Knowledge state

| Finding | State |
|---|---|
| FX_Orders (project FX_HelloWorldProject01) is a single IDO at Revision 2, checked in, with one Tables entry and 11 properties at baseline | **observed** (T1; same session) |
| The one Check Out sets Locked By to the operator and leaves Revision 2 | **observed** (T2) |
| The secondary join FX_HelloWorld01 / fxcus with `fxcus.[FX_Code] = fxords.[FX_CustomerID]` is accepted by one OK | **observed** (T3; client readback) |
| Bound properties FX_CusName (fxcus.FX_Label; String 100 nvarchar) and FX_CusAddress (fxcus.FX_Address; String 150 nvarchar) are added with one Finish each and no class | **observed** (T4, T5) |
| Both new properties are Read Only (checked) and the 11 originals are unchanged | **observed** (T4, T5, T6) |
| Same-session close and reopen of IDOs recovers the join, the two properties and the checkout | **observed** (T6); same-session UI only |
| Blank-criteria runtime query in Filter in Place returns exactly 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1 with Save disabled and no edit | **observed** (T7); same session |
| Duplicate sequence values 2 and 10 | **observed**; intent **unresolved** |
| Runtime add-mode placeholder (Order Number 3) on reopen | **observed**; source **unresolved** |
| Filter in Place initial-state difference between IDOs and runtime reopen | **observed**; cause **unresolved** |
| Database persistence, generated SQL, server-side join validity, durability, replay | **not established / not claimed** |

---

## 13. Recommendation

**ACCEPTED AS OBSERVED.** AC-1 to AC-8 are supported at the same-session UI and accessibility level, with the qualifications in §10 and the open items in §9 (O1, O3, O4, O2 and O7 in particular). No acceptance check failed or is pending.

The coordinator should decide: (a) whether the duplicate sequence values (O1) need an operator decision before FX_Items work in EXP-079; (b) whether the runtime placeholder and Filter in Place differences (O3, O4) warrant a separate read-only observation task; and (c) whether the harness snapshot split (O2) should be fixed in the controller's argument logging.
