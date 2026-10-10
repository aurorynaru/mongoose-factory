# EXP-049 — T16 IDO recovery from the already-reopened IDOs Form (same-session ordinary close/reopen)

Run: R-20261011-020822-9Eej, cycle 19, task T16 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).

**Result: the recovery query succeeded. From the already-reopened IDOs Form, one fresh exact-name Filter-in-Place query for `FX_Items` (one FiP transition, one criterion entry, one F4) returned exactly one record: IDO `FX_Items`, Project `FX_HelloWorldProject01`, Table `FX_Items` with alias `fxitms` (Primary Base), Revision 2, Label/Caption `oFX_Items`, and the checked-in indicators (row checkbox cleared, Locked By blank, Check Out offered, Undo Check Out disabled). The IDO Properties view showed the four business properties and seven system rows; full detail was read for FX_Item only. This is observed same-session ordinary Form close/reopen evidence. It is NOT replay_verified, NOT a database-level test, and NOT an independent check of persistence beyond this client session.** No check-in, checkout, Save, New, Delete, Refresh, property change, or SQL-table action was performed.

## Initial mode (observed before any click)
- Reopened IDOs Form, tab selected. The grid showed the unfiltered IDO list (`IDOs 1 of 361`) starting with `ABDataServices`; the detail was populated for **ABDataServices** (Project `AppBuilder`, Revision 5, Access Core, Tables `ABDataServices | ds`). So `ABDataServices` was a **loaded IDO record**, not a criterion (`T16-00` snapshot; `T16-01` screenshot).
- The IDO Name field was a grey, record-view field; the grid had no criteria row; Save was disabled; no dialog.
- The Filter in Place toolbar control was present (`f1e34`). The earlier stale-ref click on the disabled System Notes button (`f1e38`) from T15 was not repeated.
- Mode determination: **record view, not criteria mode.** So one FiP transition was authorised and performed.

## Single FiP transition and editable-criteria proof
- Filter in Place clicked **once** (`f1e34`). Post-transition fresh snapshot (`T16-02`) before any typing:
  - a blank criteria row appeared under the column headers (empty gridcells, no loaded record);
  - the **IDO Name textbox** was the active element and the accessibility snapshot listed **no readonly or aria-readonly attribute** for it (a text-level observation of the snapshot, not a runtime property read; in T15 this field had been `CollectionNameEdit`, readonly; it is now a different element `f1e1549`);
  - the detail Revision, Project and Locked By values were cleared (criteria state, not a loaded record);
  - Save disabled; no dialog.
- The combined indicators (criteria row, editable active IDO Name textbox, cleared record detail, FiP active) were treated as criteria mode. The Filter in Place toolbar click alone was **not** used as the evidence.
- Editable criteria proof: the `FX_Items` fill was accepted (no timeout, no refusal).

## Query (one criterion, one F4)
- Criterion: IDO Name `FX_Items` entered once (`browser_type` into `f1e1549`). Committed with Tab. `find` confirmed `row "FX_Items"` in the criteria row and the IDO Name textbox value `FX_Items`.
- Pre-F4 screenshot: `T16-03-idos-criterion-FX_Items-before-F4.png` — IDOs tab shows the filter icon; status bar "Filter in Place"; IDO Name `FX_Items`; criteria row shows `FX_Items` with empty checkbox and blank detail. (Criteria echo, not a record.)
- F4 pressed **once**; wait 2 s; fresh settled snapshot `T16-04-fresh-snapshot-after-F4-settled.yml` and screenshot `T16-05-idos-FX_Items-after-F4-settled.png`.
- Settled result: `IDOs 1 of 1`, one row `FX_Items | 10/10/2026 | 2`.

## Recovered values (settled, same Form)
| Field | Recovered value | Pre-Finish / post-creation baseline (T12) | Match |
| --- | --- | --- | --- |
| IDO Name | FX_Items | FX_Items | Yes |
| Project Name | FX_HelloWorldProject01 | FX_HelloWorldProject01 | Yes |
| Table Alias (Tables sub-grid) | fxitms (table FX_Items, Primary Base, Inner) | fxitms | Yes |
| Revision Num | 2 | 1 before T14 check-in; 2 after (T14) | Yes (post-check-in value preserved) |
| Revision Date | 10/10/2026 | 10/10/2026 | Yes |
| Label String ID / Caption | oFX_Items / oFX_Items | oFX_Items / oFX_Items | Yes |
| Access As | G6R | G6R | Yes |
| Description | blank | blank | Yes |
| Extends | blank | blank | Yes |
| Locked By | blank | operator before check-in; blank after (T14) | Yes (cleared) |
| Row checkbox | not checked | checked before check-in; not checked after (T14) | Yes |
| Check Out | enabled (offered) | Check In offered before check-in; Check Out after (T14) | Yes |
| Undo Check Out | disabled | disabled throughout | Yes (unexplained, unchanged) |

Checked-in state verification: the row checkbox (`checkbox not checked`, grid row), the blank Locked By textbox, and the offered Check Out control (enabled) were used. Undo Check Out (disabled) was **not** used as the evidence.

## Four business properties (IDO Properties, read-only)
- The IDO Properties view was opened once from the Properties button of the recovered IDO (`f1e1679`). Its title shows `Properties 1 of 11`.
- **11 property rows listed:** FX_Item, FX_Description, FX_Cost, FX_UM (business, rows 1–4) and CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow (framework, rows 5–11). The business rows are distinct from the seven framework rows.
- **FX_Item (row 1), full detail read:** IDO FX_Items; Column Table Alias `fxitms` (table FX_Items); Property Type Bound to Column; Column Name FX_Item; Property Class **FX_ItemBase**; Sequence 1; Pseudo Key unchecked; Data Type String; Length 20; Column Data Type nvarchar; Required **checked**; Label String ID FX_sItem. Screenshot `T16-06-ido-properties-recovered-rows.png`.
- **FX_Description (row 2):** row values in the accessibility snapshot only (`String 150 nvarchar`, label `FX_sDescription`, Required unchecked, Bound to Column, alias fxitms). Its detail view was not opened in T16.
- **FX_Cost (row 3):** the row shows the name, IDO FX_Items, property class FX_Cost and column FX_Cost in the grid; its detail (Decimal, 18, 2, default 0, decimal, FX_sCost) was **not re-read** in T16. The T12 detail reading stands as the earlier baseline.
- **FX_UM (row 4):** the row shows the name, class FX_UM and column FX_UM in the grid; its detail and the domain relationship (FX_UMs / FX_UM / FX_Description) were **not re-read** in T16. The T12 reading stands as the earlier baseline.
- **Not claimed:** the four business definitions were not re-verified field by field in T16 beyond FX_Item. The FX_UM domain relationship is not re-observed in this run.

## Counts (T16)
| Action | Count |
| --- | --- |
| Filter in Place clicks (IDOs) | **1** (`f1e34`, one authorised transition from record view to criteria) |
| Stale-ref clicks | 0 (the T15 stale ref was not used) |
| Criterion entries (fill) | 1 (`FX_Items`) |
| Tab commits | 1 |
| F4 runs | **1** |
| Recovery queries (distinct, fresh) | **1** |
| Pre-F4 screenshots | 1 (`T16-03`) |
| Settled screenshots | 1 (`T16-05`) (plus `T16-06` on Properties) |
| Properties button clicks | 1 (`f1e1679`) |
| Fresh snapshots | 3 (`T16-00`, `T16-02`, `T16-04`) (after the initial mode, after the FiP transition, after F4) |
| Browser refs not found | 1 (`f1e1801`, stale; not retried; fresh snapshot taken) |
| Check In / Check Out / Undo Check Out | 0 / 0 / 0 |
| Save / New / Delete / Refresh | 0 / 0 / 0 / 0 |
| Form close or reopen in T16 | 0 (the IDOs Form was not closed or reopened again) |
| Sql Tables / Sql Columns actions | 0 (AC-11 not attempted) |
| Property class, string, SQL or column edits | 0 |
| Wizard, Finish, Create Form | 0 |
| Direct SQL, browser evaluate, metadata unload, cache reset | 0 |

## Acceptance conclusions (T16)
- **AC-10 (IDO recovery after ordinary close and reopen):** **supported at same-session ordinary Form close/reopen level.** The reopened IDOs Form was clean (Save disabled, no unexpected prompt); one fresh exact-name query returned FX_Items with the same project and alias as the post-creation baseline, the revision preserved at 2 after the check-in, and the checked-in indicators (cleared checkbox, blank Locked By, Check Out offered). The four property definitions were confirmed for FX_Item in detail and by row for FX_Description, FX_Cost and FX_UM; the FX_Cost and FX_UM detail and the FX_UM domain relationship were **not** re-read in T16 and are carried from the T12 baseline. Qualified as same-session UI-level evidence; NOT replay_verified; NOT a database-level or cross-session test.
- **AC-8 (conditional check-in):** the checked-in state is **again observed** after the reopen (cleared checkbox, blank Locked By, Check Out offered). This is consistent with the single T14 check-in and does not add a second lifecycle action.
- **AC-11 (SQL recovery):** not attempted (reserved; SQL Tables and SQL Columns were not closed or reopened in T16).
- **AC-12:** partial; see counts.

## Explicit inferences and unresolved items
1. **Why the criteria field was read-only in T15 and editable in T16.** T15 saw `CollectionNameEdit` (readonly) on the reopened Form in record view. In T16, after a single FiP transition from record view, the IDO Name textbox was editable. The specialist consultation reference (R-20261011-020822-9Eej-C2) was **not available** in the files I could read; any explanation of this difference is an **inference only**, not proven product behaviour. Recorded as unresolved.
2. **Undo Check Out disabled** on the recovered and checked-in record remains **unexplained** (not interpreted here).
3. **FX_Cost and FX_UM field detail and the FX_UM domain relationship** were not re-read in T16 (carried from T12, `T12-created-ido-verification.md`).
4. **The retained `ABDataServices` record** appears as a loaded record in the initial record view; it is an unrelated pre-existing IDO and was not changed.
5. The IDO Properties child tab is open after this read. It was not closed (the brief did not authorise a close).

## Evidence files written in T16
- `evidence/EXP-049/T16-ido-reopen-recovery.md` (this file)
- `evidence/EXP-049/T16-00-fresh-snapshot-initial-mode.yml` (initial mode, record view, ABDataServices loaded)
- `evidence/EXP-049/T16-01-initial-mode-before-any-click.png` (record view; 361 IDOs; ABDataServices detail; no criteria row)
- `evidence/EXP-049/T16-02-fresh-snapshot-after-single-FiP-before-typing.yml` (criteria mode proof: criteria row, editable IDO Name textbox)
- `evidence/EXP-049/T16-03-idos-criterion-FX_Items-before-F4.png` (pre-F4 criterion, filter icon, status "Filter in Place")
- `evidence/EXP-049/T16-04-fresh-snapshot-after-F4-settled.yml` (settled record)
- `evidence/EXP-049/T16-05-idos-FX_Items-after-F4-settled.png` (settled FX_Items: revision 2, project, alias, checked-in indicators)
- `evidence/EXP-049/T16-06-ido-properties-recovered-rows.png` (IDO Properties: 11 rows; FX_Item detail)
- Tool snapshots `evidence/playwright/page-2026-10-10T19-08-*` and `page-2026-10-10T19-09-*` (not worker-written) and console logs.

## Next permitted action
Coordinator review. Pending: (a) SQL Tables and SQL Columns same-session close/reopen and one fresh exact-name query (AC-11, reserved); (b) a field-by-field re-read of FX_Cost and FX_UM detail and the FX_UM domain relationship on the reopened IDO Properties view, if wanted; (c) closing the IDO Properties child tab (not authorised in T16); (d) the unexplained Undo Check Out state and the read-only criteria field difference between T15 and T16.
