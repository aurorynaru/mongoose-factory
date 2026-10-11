# EXP-061 — Final consolidated report: Hello World Part 4 Section 3 (bound FX_Picture property on FX_Items IDO)

**Outcome recommendation: OBSERVED. Proposed outcome: accepted with limits, pending coordinator and operator review. Not replay_verified.**

All ten acceptance checks have evidence in this run. Two checks (AC-8 and AC-9) are supported with stated limits: AC-8 identity was matched on readable fields, not on surrogate identifiers, and AC-9 confinement rests on worker inventories and controller audits, with the operator's git review authoritative. No acceptance requirement is unsupported. Nothing here claims database durability, cross-session recovery, cache invalidation, a persisted Length -1 readback, or PNG or runtime image functionality.

| Field | Value |
| --- | --- |
| Experiment | EXP-061 — Hello World Part 4 Section 3: add and recover FX_Picture bound property on FX_Items IDO |
| Run | `R-20261011-223208-4y9y` |
| Experiment record | `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md` |
| Date | 2026-10-11 |
| Mode | LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10); editing scope User |
| Operator identity | `anton.ramos@3mworks.com.ph` (identity bar `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) |
| Worker tasks | T1 (cycle 0), T2 (1), T3 (2), T4 (3), T5 (4), T6 (5), T7 (6, this report; zero browser calls) |
| Task messages | T1 `11700932-1958-43f6-b89f-211f7fb4df1b`; T2 `80f153ae-7840-4281-9bfd-44d33a77fc57`; T3 `e718a12d-26f7-43bb-8823-0c6888d13cac`; T4 `ecc2b5b8-ed1c-4d4d-bf1b-cc3f0ffa9c6f`; T5 `8627cc71-afaa-49c5-a014-617389dddb04`; T6 `52879b86-7806-442d-a191-139721071c43`; T7 `45e2c2aa-5842-4285-a7ce-2a9fe9059471` |
| Worker session | `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe` (all tasks) |

---

## 1. Scope of this report and how it was prepared

- T7 made **zero browser calls** and no Mongoose UI action.
- Sources read in T7: the six controller audits `harness-audit-T1.md` to `harness-audit-T6.md` in full; the EXP-061 record; the accessibility readbacks used in the inventory comparison; and a repository listing of `evidence/EXP-061/` and `evidence/playwright/`.
- **Re-verified in T7 by exact extraction:** the 11 original property rows in `t1-snapshot-03`, `t4-snapshot-02` and `t5-snapshot-04` are string-identical, and the FX_Picture row appears only in the last two. Results in §6.
- **Carried from T1–T6:** the other facts in this report come from the T1–T6 reports and snapshots written in this session. T7 checked their counts and cited claims against the controller audits and snapshots, not by re-reading every line of each report.
- Do not use this report as a fresh inspection. The final browser state (§12) is the state last reported by T6.

## 2. Starting repository state (operator-provided; not re-verified; no shell)

- Branch `claude-harness`; main branch `main`; git user `aurorynaru`.
- Pre-existing modifications, **not EXP-061 work and not touched by any worker** (operator-provided session-start status): `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`.
- Recent EXP-061 commits (operator-provided): `0f44939` (approved brief), `2861517` (draft brief, operator guards).
- `tools/` was never read or written by any worker.

## 3. Prerequisites

### 3.1 Target identity and absence of FX_Picture (AC-2)

- One exact-name query for `FX_Items` in IDO Collections (Filter in Place) returned **one row**, status `IDO Name (IDOs 1 of 1)`. Evidence: `t1-04-idos-FX_Items-query-settled.png`; `t1-snapshot-02`.
- Header: IDO Name `FX_Items`; **Project Name `FX_HelloWorldProject01`**; **base table `FX_Items`, alias `fxitms`, Table Type Primary Base, Join Inner** (Tables sub-grid); **Revision Num `2`; Revision Date `10/10/2026`**; Locked By blank at start; Access As `G6R`; Label String ID and Caption `oFX_Items`.
- Checkout state at start: **checked in** (Check Out enabled; Undo Check Out disabled; row checkbox unchecked). Save disabled.
- Baseline: **11 properties, all Bound to Column, no Derived**. **`FX_Picture` absent**, and no case or name variant of "picture" among the 11 names. Evidence: `t1-snapshot-03-idos-FX_Items-properties-tab.yml`; `t1-05-…baseline-visual.png` (partly covered by DevTools; the snapshot is the complete source).

### 3.2 SQL column `dbo.FX_Items.FX_Picture` (AC-3)

- Sql Columns view (from the inherited Sql Tables record, Columns... read-only): **`SQL Columns 12 of 12`**; schema `dbo`; table `FX_Items`.
- Row 12 `FX_Picture`: Data Type `varbinary`; System Data Type `varbinary`; **Length `-1`**; Is Nullable checked; Primary Key unchecked; **Column Id 13**. The 11 originals are present. Evidence: `t1-07-sqlcolumns-FX_Picture-row-13-readback.png`; `t1-snapshot-05`.
- **Corroboration (not EXP-059 title):** the wizard's Bind To lookup (T3) listed the table's columns as `fxitms.<column>`, including exactly one `fxitms.FX_Picture` among 12 entries. This is a native lookup on the base table, independent of the Sql Columns view. Evidence: `t3-04-bind-to-lookup-opened.png`; `t3-snapshot-04`.
- **Limitation:** the Sql Columns readback came from the inherited Sql Tables record, not a fresh query in EXP-061. The wizard lookup corroborates existence and name but not the type.

### 3.3 Property class `FX_Picture` (AC-3)

- Retained Property Classes criterion `FX_Picture` (not typed by a worker in this run); one F4. Result: **one row `FX_Picture`**, status `Base Class (IDO Property Classes 1 of 1)`. Data Type `Binary`; Length `-1`; Column Data Type `varbinary`; Binary Format `PNG`; Base Class, Label String ID and Domain fields blank; Revision 1 (10/11/2026); Locked By the operator. Evidence: `t1-06-propertyclasses-FX_Picture-exact-query-settled.png`; `t1-snapshot-08`.
- **Wizard lookup (T3):** the Property Class lookup held exactly one cell containing `Picture`, `FX_Picture`. A look-alike `G6RPiture` exists and was not selected. Evidence: `t3-snapshot-06-property-class-lookup-open-fresh.yml`.
- Compatibility: Binary, -1, varbinary and the column's varbinary, -1, nullable fields are the binary family the brief requires. **No unexpected conversion and no class substitution was observed.**

Prerequisites: **all passed**. No mutation was blocked.

## 4. Checkout (AC-4)

| Step | Evidence | Result |
| --- | --- | --- |
| Before (T2) | `t2-01-before-checkout-…png`; `t2-snapshot-01` | Checked in; Locked By blank; Check Out enabled; Undo Check Out disabled; Save disabled; no dialog. |
| Action (T2) | harness audit T2 row 11 | **One click on Check Out.** No retry. |
| Response (T2) | `t2-snapshot-02`, `t2-snapshot-03` | **No displayed confirmation, warning or error text.** The response is a state change: Locked By `anton.ramos@3mworks.com.ph`; row checkbox checked; Check In and Undo Check Out enabled; status `Check Out (IDOs 1 of 1)`. |
| Revision after checkout | `t2-snapshot-03` | Revision Num `2`, Revision Date `10/10/2026`, unchanged. |
| After (`t2-02`) | `t2-02-after-checkout-settled-idos-FX_Items-locked-by-operator.png` | Shows the checkbox, Check In and Undo enabled, Save disabled and the status. Locked By is clipped in the image; the full value is in `t2-snapshot-03`. |

- Checkout ownership was preserved through every later step: Locked By is the operator in T2, T3, T4, T5 (recovered) and T6 (re-read). Each readback is recorded in its task report.
- **Checkout status is interpreted** from the Locked By value and the enabled Check In and Undo Check Out controls. The form has no labelled checked-out field.
- No other object was checked out (no other checkout action in any audit).

## 5. Wizard configuration (AC-5)

- The New Property wizard was initiated **once** (T3, audit row 10). Page 1: IDO Name `FX_Items` read-only; **Bound** radio active (default, retained); Finish disabled.
- One permitted non-committing step (**Next**) to page 2.
- Lookups: Bind To (Open, then option `fxitms.FX_Picture`); Property Class (Open, then option `FX_Picture`). Every selection was a click on an option; **no value was typed** into any wizard field.

| Field | Committed value | How it was set | Evidence |
| --- | --- | --- | --- |
| Property Type | **Bound** | default; verified on page 1 | `t3-02`; `t3-snapshot-02` |
| Bind To | `fxitms.FX_Picture` | option click (one of 12 entries) | `t3-05`; `t3-snapshot-05` |
| Property Name | `FX_Picture` | **populated by the wizard after Bind To; not typed** | `t3-06`; `t3-snapshot-07`; T4 gate `t4-01` |
| Property Class | `FX_Picture` | option click (one match) | `t3-06`; `t3-snapshot-07` |
| Data Type | `Binary` | inherited from class | `t3-06`; `t4-01` |
| Length | `-1` | inherited from class | `t3-snapshot-07`; `t4-snapshot-00` (wizard only) |
| Decimal | blank | not applicable | `t3-06` |
| Column Data Type | `varbinary` | inherited from class | `t3-06`; `t4-01` |
| Inherit checkboxes | three checked | class inheritance | `t3-snapshot-07` |
| Finish | enabled before Finish | — | `t4-01`; `t4-snapshot-00` |

- **Pre-Finish gate (T4):** the wizard was still on page 2. One visible inspection confirmed each value as populated, committed text, not placeholder. Finish was enabled and Next disabled. All gates passed. Evidence: `t4-01-pre-finish-gate-visible-inspection.png`.
- **Property Name origin, now resolved in part:** the wizard filled in `FX_Picture` after Bind To, so it was not typed. The recovered inventory in T5 shows `FX_Picture` as a stored property name after reopen (§7), which supports a committed value at UI level.
- **Bound on page 2:** verified on page 1 only. Page 2 has no Property Type control. The recovered grid shows the new row as `Bound to Column`, which is consistent with Bound.

## 6. Finish and Save (AC-5, AC-6)

### 6.1 Finish

- **Finish was invoked exactly once** (T4, audit row 8). No retry.
- **Immediate native response (verbatim): no displayed text.** No dialog, alert, success, warning, error or confirmation appeared. `browser_find "dialog"` found none. The wizard closed, the page returned to the IDOs tab (`favoriteContext=IdoCollections`), and the status changed from `Check Out (IDOs 1 of 1)` to `New Property (IDOs 1 of 1)`. Evidence: `t4-snapshot-01`; `t4-02-after-finish-immediate-idos-state.png`.
- **Settled response (3 s):** unchanged; no dialog; Save disabled. Evidence: `t4-snapshot-02`; `t4-03-after-finish-settled-form-clean-save-disabled.png`.
- No unexpected consequential confirmation was offered, so none was approved.

### 6.2 Save

- **Zero ordinary toolbar Saves** were performed in any task. No audit row is a Save click. The Save control was disabled throughout: before Finish, immediately after Finish, after the reopen, and at the runtime check.
- The brief permitted one Save only if Finish left the Form dirty. It did not, so no Save was needed.

### 6.3 Clean state (AC-6)

- Save disabled; no pending-change or star indicator; no dialog; the Form was left open and clean (T4 settled, T5 pre-close and recovered).

## 7. Property inventory — baseline (11) versus recovered (12) (AC-6, AC-7)

### 7.1 Method

Each row's accessibility text was extracted from three snapshots: T1 `t1-snapshot-03` (baseline), T4 `t4-snapshot-02` (post-Finish) and T5 `t5-snapshot-04` (recovered after reopen). The extraction was re-checked in T7. Readable fields are: name, sequence, property class, property type, bound column, property value, key sequence, data type, length, column type, and four checkbox states in DOM order.

### 7.2 Baseline matrix (T1, 11 rows) and recovered matrix (T5, 12 rows)

| # | Property Name | Seq | Property Class | Property Type | Bound Column | Prop Value | Key Seq | Data Type | Length | Column Type | Checkboxes (DOM order, 4 states) | Baseline (T1) | Post-Finish (T4) | Recovered (T5) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | 1 | FX_ItemBase | Bound to Column | FX_Item | blank | 1 | blank | blank | blank | not · checked · not · not | present | identical | identical |
| 2 | FX_Description | 2 | blank | Bound to Column | FX_Description | blank | 0 | String | 150 | nvarchar | not · not · not · not | present | identical | identical |
| 3 | FX_Cost | 3 | FX_Cost | Bound to Column | FX_Cost | blank | 0 | blank | blank | blank | not · not · not · not | present | identical | identical |
| 4 | FX_UM | 4 | FX_UM | Bound to Column | FX_UM | blank | 0 | blank | blank | blank | not · not · not · not | present | identical | identical |
| 5 | CreatedBy | 5 | blank | Bound to Column | CreatedBy | blank | 0 | String | 128 | UsernameType | checked · not · not · not | present | identical | identical |
| 6 | UpdatedBy | 6 | blank | Bound to Column | UpdatedBy | blank | 0 | String | 128 | UsernameType | checked · not · not · not | present | identical | identical |
| 7 | CreateDate | 7 | blank | Bound to Column | CreateDate | blank | 0 | Date | blank | CurrentDateType | checked · not · not · not | present | identical | identical |
| 8 | RecordDate | 8 | blank | Bound to Column | RecordDate | blank | 0 | Date | blank | CurrentDateType | checked · not · not · not | present | identical | identical |
| 9 | RowPointer | 9 | blank | Bound to Column | RowPointer | blank | 0 | GUID | blank | RowPointerType | checked · not · not · not | present | identical | identical |
| 10 | NoteExistsFlag | 10 | blank | Bound to Column | NoteExistsFlag | blank | 0 | Byte | blank | FlagNyType | not · not · not · not | present | identical | identical |
| 11 | InWorkflow | 11 | blank | Bound to Column | InWorkflow | blank | 0 | Byte | blank | FlagNyType | not · not · not · checked | present | identical | identical |
| **12** | **FX_Picture** | **12** | **FX_Picture** | **Bound to Column** | **FX_Picture** | blank | **0** | **Binary** | **blank** | **varbinary** | not · not · not · not | **absent** | **added** | **added** (identical to T4) |

- **Count:** baseline 11; post-Finish 12; recovered 12.
- "blank" means the accessibility cell is empty. Blank Data Type and Length on class-bound rows (FX_Item, FX_Cost, FX_UM) is a property of this grid view, not a change. EXP-049 recorded Decimal 18 scale 2 for FX_Cost and String 20 for FX_Item in a different view; those values were not re-read here.
- Checkbox states are shown in DOM order (four states per row). Only the FX_Item Required state (second checkbox, checked) is confirmed against EXP-049.

### 7.3 Comparison

- **11 originals, field by field:** name, sequence, property class, property type, bound column, property value, key sequence, data type, length, column type, and all four checkbox states are identical in T1, T4 and T5 for every row. **No original property was added, removed, reordered or changed.**
- **Exactly one addition:** row 12, `FX_Picture`, Bound to Column, column `FX_Picture`, class `FX_Picture`. It is the only difference between the baseline and the recovered inventory, and no duplicate exists.
- **Recovered = baseline + exactly one Bound FX_Picture (column FX_Picture; class FX_Picture): yes.**

### 7.4 Checkbox-header mapping (inferred, not verified)

- Header order: Read Only, Required, Upper Case, Pseudo Key, Read Only Record.
- The FX_Item row structure shows four checkboxes and one empty cell. The empty cell sits between the second and third checkboxes. The DOM position of the other rows is not separately confirmed.
- **Only one mapping is confirmed:** the second checkbox is Required, which matches EXP-049 (Required checked on FX_Item).
- The remainder of the mapping is inferred from DOM position: checkbox 1 = Read Only; empty cell = Upper Case; checkbox 3 = Pseudo Key; checkbox 4 = Read Only Record. This is consistent with EXP-049 (Pseudo Key unchecked on business rows) but is not verified.
- **Correction:** the T5 report (§6 note and §10 item 1) says the Read Only Record column has no exposed checkbox. The DOM shows four checkboxes and one empty cell, so that statement is not supported. The mapping remains an inference.

### 7.5 Binary and varbinary visibility

- Visible after reopen (T5, row 12): Data Type `Binary`; Column Type `varbinary`; class `FX_Picture`; column `FX_Picture`; key sequence 0.
- **Not visible in the reopened grid:** Length (blank for row 12), Decimal, and class attributes (Binary Format PNG; class Length -1).
- **Length -1 was observed in the wizard only** (T3 `t3-snapshot-07`; T4 `t4-snapshot-00`). It was not re-read after reopen, and this report does not claim a persisted Length -1 readback.

## 8. Revision and ownership

| Stage | Revision Num | Revision Date | Locked By | Check In / Undo Check Out | Save |
| --- | --- | --- | --- | --- | --- |
| T1 start (checked in) | 2 | 10/10/2026 | blank | Check Out enabled / Undo disabled | disabled |
| T2 after checkout | 2 | 10/10/2026 | `anton.ramos@3mworks.com.ph` | enabled / enabled | disabled |
| T3 pre-wizard | 2 | 10/10/2026 | operator | enabled / enabled | disabled |
| T4 after Finish (settled) | 2 | 10/10/2026 | operator | enabled / enabled | disabled |
| T5 recovered after reopen | 2 | 10/10/2026 | operator | enabled / enabled | disabled |
| T6 runtime check (IDOs re-read) | 2 | 10/10/2026 | operator | enabled / enabled | disabled |

- **Revision did not change** across checkout, the property addition, close and reopen. The mechanism (whether a property add should bump the revision, or whether the header does not refresh) is **not established**. It is recorded as unresolved and does not affect the inventory result.
- The IDO remained checked out to the operator throughout. No check-in or undo checkout was performed.

## 9. Close, reopen and post-reopen query (AC-7)

- **Pre-close gate (T5):** IDOs tab active for FX_Items; project FX_HelloWorldProject01; wizard closed; Save disabled; 12 rows; no dialog. Screenshot `t5-01-pre-close-clean-state-idos-12-rows.png`.
- **Close (1 of 1):** one click on `Close Panel IDOs` (audit T5 row 10). **No unsaved-changes prompt and no dialog.** The IDOs tab was removed. Immediate state: `t5-snapshot-01-after-close-immediate.yml`.
- **Reopen (1 of 1):** toolbar Open (row 15), row `IDOs / IdoCollections` (row 18), OK (row 20). `favoriteContext=IdoCollections`; Save disabled; no dialog; no challenge. Initial state: `t5-snapshot-02`.
- **Post-reopen exact-name query (1 of 1):** `FX_Items` typed once into the IDO Name criteria (row 23); one F4 (row 25); 3 s settle. **One row, `FX_Items`, `IDOs 1 of 1`.** Evidence: `t5-02-reopened-criterion-FX_Items-before-F4.png`; `t5-snapshot-03`.
- **Recovered identity:** project `FX_HelloWorldProject01`; base table `FX_Items` (fxitms, Primary Base); Revision 2 / 10/10/2026; Locked By `anton.ramos@3mworks.com.ph`; checkout controls enabled; Save disabled. Evidence: `t5-03-recovered-idos-identity-checkout-properties-tab.png`; `t5-snapshot-03`.
- **Recovered inventory:** §7.
- **Limit:** the close, reopen and query were in the same browser session. This is UI-level recovery, not independent database persistence.

## 10. Runtime verification of the three pre-existing records (AC-8)

### 10.1 Provenance and identifier limit

- The three records are documented in EXP-051 (T5 entry and T8 empty-criteria query: dumbbell, eggs, guitar) and EXP-052 (automatic load: `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`, status `Description (Object 1 of 3)`).
- **Historical identity was established by matching readable fields** (Item, Description, Cost and Unit of Measure). The records' surrogate identifiers are not visible in the runtime grid and were **not read**. No identifier was invented. This is a limitation, not a verified row-identity match.

### 10.2 Open and retrieval

- **Runtime open (1):** toolbar Open → Select Form (filter changed from `IdoCollections` to `FX_Items`; End once) → row `FX_Items / FX_Items` → OK once. Identity `FX_Items`. The form loaded its records on open.
- **Retrieval (0):** no F4, Refresh or Get More Rows.

### 10.3 Result

- Three rows, numbered 1, 2 and 3. Item / Description / Cost / Unit of Measure: row 1 `dumbbell / 45 pound iron / 45.00 / EA`; row 2 `eggs / cage free / 6.99 / DZ`; row 3 `guitar / natural acoustic / 129.99 / EA`. Matches the documented values.
- Status `Description (Object 1 of 3)`. Toolbar Save **disabled**. No star, placeholder or pending indicator. No dialog. No business-record edit.
- Evidence: `t6-01-runtime-fx-items-three-records-save-disabled.png` (rows 1–3 numbered; detail on dumbbell; status; Save greyed; Item values for rows 2 and 3 clipped by the detail pane); `t6-snapshot-01-runtime-fx-items-after-open-settled.yml` (complete three-row readback); `t6-snapshot-03-runtime-final-state-settled.yml`.
- The Description field has form focus and its text is highlighted. **No value was typed or edited.**

### 10.4 Limits

- No picture component, PNG, binary test or image rendering was performed or is claimed.
- Two FX_Items runtime tabs are open (§11).

## 11. The two FX_Items runtime tabs

- **Tab A — inherited from EXP-059** (open at the start of EXP-061). Not closed, not acted on, and its clean state was **not verified** in any EXP-061 task.
- **Tab B — opened in T6** (the runtime open). It showed the three records and was left open and active at the end of T6.
- Neither tab was closed or modified. The brief permitted one open and no close, so the duplicate was left in place. A close would be a lifecycle action outside the T6 scope.
- The coordinator should decide whether to close one of them.

## 12. Final browser state (last reported by T6, not re-inspected)

Last reported by T6 (`t6-snapshot-03`). **T7 made no browser call, so this is not a fresh inspection.**

- Active top-level tab: the Mongoose Web Client (tab 1). Tab 0 (Web Designer, `MGForm=FX_Items`) was never acted on.
- Form tabs present: Sql Tables; Sql Columns; FX_Items (inherited, Tab A); Property Classes; IDOs (recovered IDO Collections, clean, Save disabled, checked out to the operator); FX_Items (runtime, Tab B, active, Save disabled, `Object 1 of 3`).
- No dialog. No wizard tab (the wizard closed at Finish). No unsaved change.
- IDO Collections is clean and checked out to the operator. The runtime form is clean.

## 13. Cumulative action audit (AC-9)

### 13.1 Per-task counts (from the per-row tables and controller audits)

| Action | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FX_Items checkout (Check Out click) | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Check-in | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Undo checkout | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| New Property wizard initiation | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Wizard Next (non-committing) | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| Wizard lookup opens / option picks | 0 | 0 | 2 / 2 | 0 | 0 | 0 | 2 / 2 |
| Finish | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Ordinary toolbar Save | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| New / Delete | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 0 |
| IDO Collections Form close | 0 | 0 | 0 | 0 | 1 | 0 | **1** |
| IDO Collections Form reopen (Select Form) | 0 | 0 | 0 | 0 | 1 | 0 | **1** |
| Post-reopen recovery query (F4) | 0 | 0 | 0 | 0 | 1 | 0 | **1** |
| IDO exact-name query (F4), initial | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| Property-class prerequisite query (F4) | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| FX_Items runtime Form open (Select Form) | 0 | 0 | 0 | 0 | 0 | 1 | **1** |
| Runtime retrieval (F4 / Refresh / Get More Rows) | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Business-record edit, insert or delete | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Select Form OK (ordinary dialog, see §13.3) | 1 | 0 | 0 | 0 | 1 | 1 | **3** |
| Dialogs that were a confirmation (approved) | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer, Form-definition edit | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Unload, cache, FormSync, deployment | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| JavaScript / run-code / console / network inspection (worker) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Separate Properties maintenance Form | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Controller-flagged `browser_type` calls are listed in §13.2, not in this table.

### 13.2 Controller-flagged calls and tool errors

- **`browser_type` calls (controller-flagged as "prohibited-tool hits"):** 4 in total. All were native text entry into fields the brief required: Select Form filter (T1, row 18), IDO Name criteria (T1, row 28), IDO Name criteria (T5, row 23), and Select Form filter (T6, row 11). The controller records these as flags. No browser evaluate, run-code, console, network or tracing call appears in any audit. **The worker reports for T1 mention the flagged calls; the T5 and T6 reports do not.** The coordinator should adjudicate the four calls.
- **Tool error:** one failed `Edit` on the experiment record in T3 (audit row 45, "String to replace not found"). It changed nothing, and the next edit (row 48) updated the record. The T3 report does not mention this error.
- **Browser tool errors:** none in any audit (`errors=0` for T1, T2, T4, T5 and T6).

### 13.3 Select Form OK accounting (not treated as consequential confirmations)

- Three Select Form OK actions occurred: **T1** (IDOs open), **T5** (IDOs reopen), **T6** (runtime open). Each was the ordinary OK on a Mongoose Select Form dialog, not an alert, prompt or confirmation.
- **Correction:** the T6 report §7 cumulative line says "dialogs answered 2 (T1, T6)". The correct total is **3** (T1, T5, T6). The T5 report was corrected in T6 to show one dialog for T5, which is right. The T6 cumulative line is not corrected in that file; this report supersedes it.

### 13.4 Controller header counts

- The controller headers give "actions" counts (T1 15, T2 3, T3 7, T4 2, T5 8, T6 8). These are not uniformly defined across tasks. This report uses the per-row tables instead, which the controller rows confirm for every lifecycle-critical action.

### 13.5 Prohibited operations

- **Zero** calls to browser evaluate or run-code, console, network or tracing tools.
- **Zero** check-in, undo checkout, unload, cache, FormSync, deployment, direct SQL, or Designer action.
- **Zero** ordinary Saves, zero business-record edits, zero picture or PNG operations.
- The only controller-flagged prohibited-tool hits are the four `browser_type` calls in §13.2.

## 14. Written-file inventory and repository confinement (AC-9)

### 14.1 Worker-written files (all under `evidence/EXP-061/` or the EXP-061 record)

- **Reports (worker-authored):** `T1-report.md`, `T2-report.md`, `T3-report.md`, `T4-report.md`, `T5-report.md`, `T6-report.md`, and this `final-report.md` (T7).
- **Experiment record (worker-authored, updated each task):** `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`.
- **Screenshots (PNG, worker-requested, tool-saved): 22** — T1 `t1-01` to `t1-07` (7); T2 `t2-01`, `t2-02` (2); T3 `t3-01` to `t3-06` (6); T4 `t4-01` to `t4-03` (3); T5 `t5-01` to `t5-03` (3); T6 `t6-01` (1).
- **Accessibility snapshots (YAML, worker-requested, tool-saved): 31** — T1 eight; T2 four; T3 seven; T4 three; T5 five; T6 four.
- **Controller-generated audits (not worker prose): 6** — `harness-audit-T1.md` to `harness-audit-T6.md`.

Total under `evidence/EXP-061/` before this report: 65 files (22 PNG, 31 YAML, 6 reports, 6 audits). This report makes 66.

### 14.2 Browser-tool files outside the EXP-061 path

- The browser tool writes page snapshots and console logs automatically into `evidence/playwright/`, which is **outside** the EXP-061 evidence path. The worker did not read the console logs and did not write these files.
- **Attributable by timestamp to this run** (the first EXP-061 tool event is 14:32:23 and the last is 14:53:39): **41 files** — **34 page snapshots** (`page-2026-10-11T14-…yml`) and **7 console logs** (`console-2026-10-11T14-….log`). Attribution is by timestamp only.
- The same folder holds earlier 2026-10-11 files from other activity that cannot be attributed to this run. The count above excludes them.
- **Confinement implication:** these 41 files are new tool-written artifacts under `evidence/playwright/`. The brief prohibits altering files outside the EXP-061 paths. The worker did not alter them, but they will appear in the operator's git review, so the operator should decide whether to commit, ignore or delete them.

### 14.3 Other confinement evidence

- Every write or edit in the six controller audits targets only `evidence/EXP-061/` or the EXP-061 record. `tools/`, `AGENTS.md`, tutorial sources, and the EXP-049, EXP-050, EXP-051, EXP-059 and EXP-060 records were not written. The EXP-059 and EXP-060 records and their evidence were read only.
- **Authoritative git review is reserved for the operator.** This inventory is worker-written and controller-audited. It is not a git diff.

## 15. Acceptance matrix (AC-1 to AC-10)

| AC | Status | Evidence (exact references) | Limits |
| --- | --- | --- | --- |
| **AC-1** | **Supported (observed)**: AGENTS.md, tutorial Section 3 (`hello-world-pt4.md` lines 119–131), EXP-049, EXP-050 (partial), EXP-051 (partial), EXP-059, EXP-060 and EXP-048 (partial) reviewed; repository state documented (§2); Web Client usable; IDO Collections opened through Open > Select Form with no authentication or session challenge | `T1-report.md` §1–4; `t1-01-webclient-initial-state.png`; `t1-02-idos-opened-via-select-form-initial.png`; `t1-snapshot-01`; harness-audit-T1 rows 11–24 | The maintenance heading is the tab label `IDOs` (route `IdoCollections`), not the words "IDO Collections"; EXP-050 and EXP-051 were read in targeted parts only; server configuration beyond the identity bar not inspected |
| **AC-2** | **Supported (observed, UI level)**: one `FX_Items` (`IDOs 1 of 1`); project FX_HelloWorldProject01; base table FX_Items (fxitms, Primary Base); revision 2 / 10/10/2026; Locked By blank; checked in; 11 Bound properties; FX_Picture absent | `t1-03`, `t1-04`, `t1-05`; `t1-snapshot-02`, `-03`; `T1-report.md` §4–5; §7.2 | Class-bound Data Type and Length blank in the grid; checkbox mapping inferred (§7.4); Filter in Place match mode not stated by the UI |
| **AC-3** | **Supported (observed, UI level)**: SQL column `dbo.FX_Items.FX_Picture` varbinary, Length -1, nullable, Column Id 13 (`SQL Columns 12 of 12`); Bind To lookup lists `fxitms.FX_Picture` (one entry of 12); class `FX_Picture` is one row (Binary, -1, varbinary, PNG) and unique in the wizard lookup | `t1-06`, `t1-07`; `t1-snapshot-05`, `-08`; `t3-04`, `t3-snapshot-04`, `-06`; `T1-report.md` §7–8; `T3-report.md` §4, §6 | Sql Columns readback from the inherited Sql Tables record (not a fresh query); no database read; the Bind To lookup corroborates existence and name, not the type |
| **AC-4** | **Supported (observed, UI and accessibility level)**: checked in before; exactly one native Check Out; no displayed response text; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; revision 2 unchanged; no other object checked out; no check-in or undo | `t2-01`, `t2-02`; `t2-snapshot-01`–`-03`; `T2-report.md` §2–5; harness-audit-T2 row 11 | Checked-out status interpreted from Locked By and enabled controls (no labelled field); no database read; response verbatim = no displayed text |
| **AC-5** | **Supported (observed, UI and accessibility level)**: wizard initiated once; Bound retained (page 1); Bind To `fxitms.FX_Picture` committed; Property Name `FX_Picture` (wizard-populated, not typed; recovered as stored name in T5); Property Class `FX_Picture` committed; inherited Binary / -1 / varbinary; pre-Finish gate passed; Finish count 1; response no displayed text | `t3-02`, `t3-05`, `t3-06`; `t3-snapshot-02`, `-07`; `t4-01`; `t4-snapshot-00`; `T3-report.md` §2–7; `T4-report.md` §1–2; harness-audit-T3 row 10, harness-audit-T4 row 8 | Bound verified on page 1 only; Length -1 visible in the wizard only; the Property Name origin is resolved only at UI level (stored name seen after reopen); no confirmation text was offered |
| **AC-6** | **Supported (observed, UI level)**: after Finish, Form clean (Save disabled), no displayed error or consequential confirmation; zero ordinary Saves; exactly one Bound FX_Picture (column FX_Picture; class FX_Picture); 11 originals identical to baseline field by field; checkout ownership preserved; revision 2 unchanged | `t4-02`, `t4-03`; `t4-snapshot-01`, `-02`; `T4-report.md` §3–4; §7.2–7.3 | Revision unchanged (unresolved mechanism); Length not in grid; no database read |
| **AC-7** | **Supported (observed, UI and accessibility level; same session)**: one clean close (no prompt); one native reopen via Open > Select Form; one post-reopen exact-name query → one `FX_Items`; recovered 12 rows = 11 originals identical + one Bound FX_Picture (column FX_Picture; class FX_Picture); Locked By operator; checkout controls enabled; Save disabled | `t5-01`, `t5-02`, `t5-03`; `t5-snapshot-00`–`-04`; `T5-report.md` §2–7; harness-audit-T5 rows 10, 15–20, 23–25 | Same-session UI recovery only; Length -1 not in reopened grid; no database read; checkout interpreted from controls; close evidence is the immediate snapshot, not a screenshot |
| **AC-8** | **Supported (observed, UI and accessibility level)**: runtime FX_Items Form opened once through Open > Select Form; identity `FX_Items`; three records (dumbbell, eggs, guitar) with the documented field values; status `Object 1 of 3`; Save disabled; no dialog; no business-record edit; no retrieval; no picture component, PNG or binary test | `t6-01`; `t6-snapshot-01`, `-03`; `T6-report.md` §3–5; harness-audit-T6 rows 8–16 | **Identity matched on readable fields; surrogate identifiers were not read**; documented values come from EXP-051 and EXP-052, not a database read; a second FX_Items tab (Tab A, inherited) is open and was not re-read |
| **AC-9** | **Supported with limits**: exactly one wizard initiation; one Finish; zero ordinary Saves; one authorized checkout; one close; one reopen; one post-reopen query; one runtime open; zero check-in, undo, unload, cache, FormSync, console or network calls; no additional IDO, property, SQL object, property class, Form definition or business record modified; all worker writes are inside the EXP-061 paths | §13 and §14; harness-audit-T1 to T6; worker inventories (§14.1) | **Four controller-flagged `browser_type` calls** (native text entry into required fields; coordinator to adjudicate); 41 tool-written files under `evidence/playwright/` outside the EXP-061 path (§14.2); authoritative git review reserved for the operator |
| **AC-10** | **Supported**: this report contains the evidence references for AC-1 to AC-9, the 11-property baseline and 12-property recovered inventories with field-by-field comparison, SQL and class prerequisites, wizard values, inherited types, Finish and Save responses, checkout ownership, exact action counts, the runtime three-record result, final browser state (§12), blockers (§16), and the repository audit (§14). Classification is observed only. Independent database durability, cross-session recovery, cache invalidation, replay verification and PNG runtime functionality are **not** claimed | this report §1–16; experiment record (T7 section) | Final outcome awaits coordinator and operator review; the `T6` cumulative dialog line is superseded (§13.3); the T5 checkbox note is corrected (§7.4) |

## 16. Limitations, unresolved items and blockers

### 16.1 Limitations (do not overstate)

1. **Same-session UI evidence only.** The close, reopen, query and runtime open were all in one browser session. No database read was made. Database durability, cross-session recovery and cache state are **not** established.
2. **Length -1 is not directly re-read after reopen.** It appeared in the wizard (T3, T4) and in the Sql Columns readback (Length -1 for the column). The recovered class-bound row shows a blank Length.
3. **Surrogate identifiers were not read.** The three runtime records were matched on readable fields and on the values documented in EXP-051 and EXP-052.
4. **Checkbox-header mapping is inferred.** Only the second checkbox (Required on FX_Item) is confirmed.
5. **Checkout status is interpreted** from the Locked By value and the enabled controls. No labelled status field exists.
6. **Revision unchanged.** Revision Num 2 and 10/10/2026 did not change across checkout, the property addition, close and reopen. The mechanism is unresolved.
7. **Column prerequisite is from an inherited view** (plus the wizard Bind To lookup). It is not a fresh query.
8. **Property Name origin.** The wizard populated `FX_Picture` after Bind To. The recovered grid shows it as a stored name, which supports a committed value at UI level only.
9. **Bound on page 2 not re-read.** The recovered grid shows `Bound to Column` for row 12.
10. **Duplicate runtime tabs.** Tab A (inherited EXP-059) was not re-read. Its clean state is **unverified**.
11. **Finish response had no displayed text.** Whether Mongoose logged a confirmation elsewhere is not established.
12. **Runtime image functionality is not tested or claimed.** No picture component exists, and no PNG was uploaded or rendered.
13. **Confinement** rests on worker inventories and controller audits. The 41 tool-written `evidence/playwright/` files are outside the EXP-061 path and need the operator's review.

### 16.2 Corrections identified in T7 review

| # | Where | Issue | Correction |
| --- | --- | --- | --- |
| C1 | T6 report §7 (cumulative line) | "dialogs answered 2 (T1, T6)" omits T5 | Correct total is 3 Select Form OK (T1, T5, T6); see §13.3 |
| C2 | T1 report (finds) | "finds 1" — the audit shows 2 `browser_find` calls (one after the report was written) | Minor; the audit is authoritative |
| C3 | T5 report §6 note and §10 item 1 | States the Read Only Record column has no exposed checkbox | Not supported: four checkboxes and one empty cell per row; mapping remains inferred (§7.4) |
| C4 | T3 report | Does not mention the failed record edit (audit row 45) | Recorded here (§13.2); no effect on repository content |
| C5 | T5 and T6 reports | Do not mention the controller-flagged `browser_type` calls (T1 does) | Recorded here (§13.2) |
| C6 | Controller headers | "actions" counts are not uniformly defined | Per-row tables are used (§13.4) |

### 16.3 Blockers

- **No blockers** for the observed scope. Every prerequisite gate passed, every mutation was performed once, and every verification step was completed.
- **Open items for the operator and coordinator (not blockers):**
  1. Adjudicate the four flagged `browser_type` calls (T1 ×2, T5 ×1, T6 ×1).
  2. Decide whether to close one of the two open FX_Items runtime tabs, and whether to verify Tab A's clean state.
  3. Review the 41 tool-written `evidence/playwright/` files for the git review.
  4. Decide whether the revision-unchanged observation needs a separate check.
  5. Decide whether a Length -1 readback on the recovered row is needed (currently unavailable in the grid).
  6. Decide whether surrogate identifiers should be read in a separate authorized step, to upgrade AC-8 from readable-field matching.

## 17. Recommendation

- **Observed.** Every acceptance check (AC-1 to AC-10) is supported by evidence in this run, with the limits in §15 and §16.1 stated.
- **Proposed outcome: accepted with limits, pending coordinator and operator review.** The record is not replay_verified. These observations come from one run in one session. Repeatability and cross-session persistence remain open questions for any later procedure.
- Do not promote this to a recipe or to replay_verified from this run alone (the brief forbids this).

## 18. Next permitted action

- No further browser action is permitted within EXP-061. T7 is documentation only.
- The operator or coordinator reviews this report and the record, adjudicates the items in §16.3, and decides the final outcome.
- Any additional verification (surrogate identifiers, a Length -1 readback, a fresh inspection of Tab A, or closing a duplicate tab) requires a separate authorized task.
