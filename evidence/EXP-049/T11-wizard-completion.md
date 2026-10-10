# EXP-049 — T11 controlled wizard completion (single Finish; Create Form declined)

Run: R-20261011-020822-9Eej, cycle 13, task T11 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).

**Result: the wizard reported "Table and IDO created." after exactly one Finish. The optional Create Form prompt was answered No exactly once. No FX_Items Form was created. Post-creation runtime verification has NOT been performed (out of T11 scope).** Creation is the wizard's own report only; it is not yet verified in the IDOs or SQL Tables/SQL Columns runtime Forms (AC-7, AC-9, AC-10, AC-11 pending).

## Counts (T11)
| Action | Count |
| --- | --- |
| Finish | **1** |
| Next | **1** (page 1 → last page 2; Next then disabled) |
| Back | 0 |
| Create Form response: No | **1** (the prompt was "Do you want to create a form for FX_Items?") |
| Create Form response: Yes | 0 |
| Cancel | 0 |
| Close (wizard) | 0 (wizard left open at its completion state) |
| Save | 0 |
| New | 0 |
| Delete / Delete Row | 0 |
| Check in / check out / Undo Check Out | 0 |
| Designer edits | 0 |
| Property class edits / lookups | 0 |
| Tab commits | 1 (row 4 SQL Data Type editor, value `nvarchar` unchanged, per instruction) |
| Browser evaluate / run-code | 0 |
| Tab selections | 0 |
| Screenshots (worker) | 2 (`T11-02`, `T11-03`) plus the completion state |
| Accessibility snapshots (worker YAML) | 2 (`T11-00`, `T11-01`); tool-saved snapshots after Next, Finish and No are in `evidence/playwright/` |

## Pre-Finish configuration (verified in T11 before Next and Finish)
Identity (page 1): IDO Name `FX_Items`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxitms`; Site Split **unchecked**; Table Name **empty and read-only** (derived on Finish, as the operator accepted); View Name empty; Form Type `MultiView`; Form Layout `GridLeft`; Device Type `Default` (unchanged defaults).

Business property rows (exactly four, in order; from `T11-00` and `T11-01`):
| # | Name | Property Class | Data Type | SQL Data Type | Property Length | Decimal Precision | Primary Key | Required | Label String ID | Default Value |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | FX_ItemBase | String | nvarchar | 20 | blank | checked | checked | FX_sItem | blank |
| 2 | FX_Description | none (by design) | String | nvarchar | 150 | blank | unchecked | unchecked | FX_sDescription | blank |
| 3 | FX_Cost | FX_Cost | Decimal | decimal | 18 | 2 | unchecked | unchecked | FX_sCost | 0 |
| 4 | FX_UM | FX_UM | String | nvarchar | 10 | blank | unchecked | unchecked | FX_sUM | blank |

No fifth business property. No relationship configured in the wizard grid. The row-4 SQL Data Type editor was committed with Tab (value unchanged, `nvarchar`); the subsequent focus landed in row 4's Property Length editor (value `10`, inherited, nothing typed), which was left active.

Qualifications carried forward:
- **FX_UM domain relationship** (Domain IDO FX_UMs, Domain Property FX_UM, Domain List Properties FX_Description) is **not exposed in the wizard grid**. It rests on the earlier property-class record (T1-24, T3). Not wizard-verified.
- **FX_sDescription** label resource existence is **independently unverified** (no read-only lookup was available in T7). The label was typed into the combobox.
- **Schema `dbo`** for the derived SQL table was not visible before Finish (operator-accepted). It must be read from SQL Tables after creation.
- **Page 2 (last page)** exposes only the Create Scripts checkbox (unchecked), an instruction line, and a disabled preview box. The IDO identity fields are not shown on page 2, so identity on the final stage was not re-observed; it was verified on page 1 immediately before Next, and Next does not alter the page-1 fields (as EXP-040 observed).

## Gate check before Finish
- AC-2 collision gates: both passed at same-session UI level (T5 SQL; T6 IDO). Re-checked as present through T11 (no FX_Items object was observed before creation).
- Property classes: FX_ItemBase, FX_Cost and FX_UM each resolved through the native lookup in the wizard (T8, T10); no conflict with the established definitions recorded in T1-00, T1-03, T1-05, T1-24, T3 and EXP-048.
- Identity and pre-Finish configuration: as above.
- Authorization: the coordinator instruction (T11) authorised Finish once if all gates were satisfied; the FX_sDescription resource check remained explicitly unverified and was carried as a qualification.

## Native results
1. **Next** (`e1847`, page 1 → page 2): advanced to the last page. No error, no validation text, no prompt. Next then `[disabled]`; Back, Finish enabled. Evidence: `evidence/playwright/page-2026-10-10T18-50-49-893Z.yml`; screenshot `T11-02-wizard-page2-last-page-before-finish.png`.
2. **Finish** (`e1849`), once: a **Create Form** alertdialog appeared with text **"Do you want to create a form for FX_Items?"** and buttons Yes (`e1880`, active) and No (`e1882`). Evidence: `evidence/playwright/page-2026-10-10T18-51-06-826Z.yml` (`Create Form` alertdialog present).
3. **No** (`e1882`), once: the alertdialog closed. The wizard showed the completion message **"Table and IDO created."** Back, Next and Finish `[disabled]`; a **Close** button (`e1884`) appeared; Create Scripts remains unchecked. Evidence: `evidence/playwright/page-2026-10-10T18-51-13-476Z.yml`; screenshot `T11-03-wizard-completion-after-create-form-no.png`.

No further prompt appeared. No unexpected prompt remained.

## Interpretation
- "Table and IDO created." is the wizard's own completion report. It is **not** verified against the SQL Tables, SQL Columns or IDOs runtime Forms. That is the next task (AC-7, AC-9, AC-10, AC-11). The EXP-040 precedent recorded the same limitation.
- Creation is therefore **observed at the wizard completion level only**. Physical table name `dbo.FX_Items`, columns, nullability, primary key and checkout state are **unresolved** until post-creation inspection.
- No checkout or check-in decision was made in T11 (the check-in is a post-creation step under AC-8).

## Unresolved fields and items
1. Physical table name and schema after Finish (`dbo.FX_Items` expected; unverified).
2. Checkout state of the new IDO FX_Items (unknown; the T11 brief defers the conditional check-in to the post-creation task).
3. FX_UM domain relationship as a wizard-level value (not exposed; earlier record only).
4. FX_sDescription label resource (unverified).
5. Inherited vs stored values (wizard display only).
6. Row-4 Property Length editor left active with inherited `10` (nothing typed); the wizard is still open on its completion state.
7. Site Developer capability (not verified).
8. At T11 start tab 0 (Designer, with the wizard) was already the current tab; no tab selection was needed or performed. No cause for the earlier reversions has been identified.

## Observed final state
- Wizard dialog open on the Designer tab (tab 0), completion state: "Table and IDO created.", Close enabled, Back/Next/Finish disabled, Create Scripts unchecked.
- Designer tab: Save state and checkout indication of the Designer were not re-read in T11.
- Web Client tab 1 (Export/Import Strings) unchanged in T11. Sql Tables placeholder and retained criterion **not touched**. IDOs and SQL Tables runtime Forms not opened in T11.

## Evidence files written in T11
- `evidence/EXP-049/T11-wizard-completion.md` (this file)
- `evidence/EXP-049/T11-00-fresh-snapshot-start.yml` (pre-Tab state; page 1 with four rows)
- `evidence/EXP-049/T11-01-snapshot-after-row4-sqltype-tab.yml` (after the row-4 SQL Data Type commit)
- `evidence/EXP-049/T11-02-wizard-page2-last-page-before-finish.png` (last page before Finish; Create Scripts unchecked; Finish enabled)
- `evidence/EXP-049/T11-03-wizard-completion-after-create-form-no.png` (completion: "Table and IDO created."; Close enabled)
- Tool-written snapshots `evidence/playwright/page-2026-10-10T18-50-49-893Z.yml` (after Next), `page-2026-10-10T18-51-06-826Z.yml` (after Finish, Create Form alert), `page-2026-10-10T18-51-13-476Z.yml` (after No, completion) and tab-selection console logs. These were written by the browser tool, not the worker.

## Next permitted action
A separately authorised post-creation task only: (a) inspect the IDOs runtime Form for FX_Items (AC-7, AC-8 checkout state, AC-10 recovery after one close and reopen), (b) inspect dbo.FX_Items in SQL Tables and SQL Columns (AC-9, AC-11). The wizard is still open at its completion state; the Close button has not been pressed, pending coordinator direction. Do not run further creation, Save, check-in or checkout without authorisation.
