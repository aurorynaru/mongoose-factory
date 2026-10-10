# EXP-049 — T10 four-property pre-Finish verification

Run: R-20261011-020822-9Eej, cycle 12, task T10 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
**Result: all four business property rows are configured and visible in the open wizard. Finish was NOT invoked.** The wizard is left open and staged on the Designer tab (tab 0) for coordinator review before any Finish decision.

## Starting state (observed)
- Tab 0 (Designer, IdoPropertyClasses) was current; the open Data Maintenance Wizard was present (`T10-00-fresh-snapshot-start.yml`).
- Staged identity at start: IDO Name `FX_Items`; IDO Project `FX_HelloWorldProject01`; Table Alias `fxitms`; Site Split unchecked; Table Name empty and read-only; View Name empty.
- Rows at start: 3 (FX_Item / FX_ItemBase; FX_Description / no class; FX_Cost named with a blank, active Property Class editor, as left by T9).
- Finish `[disabled]`; Next enabled and not pressed; Back disabled.

## Actions in T10 (in order)
1. `browser_tabs list` (read): tab 0 current.
2. `browser_snapshot` tab 0 → `T10-00` (read). `Grep` and `Read` of the snapshot (read).
3. Click the row 3 active editor's own **Open** button (`e1803`). The editor was the one already active, so the grid cell was not clicked. Lookup opened. **No timeout.**
4. `find` FX_Cost (read): lookup listed FullObjectPath, FX_Cost (`e2051`), FX_ItemBase, ...
5. Click option **FX_Cost** (`e2051`). Combobox read `FX_Cost`. Snapshot `T10-01`.
6. `Tab` (commit class). Snapshot `T10-01`.
7. `Tab` (commit the Data Type editor, value `Decimal` supplied by the class, nothing typed). Snapshot `T10-02`.
8. `find` "Add Row" (read).
9. Click **Add Row** (`e1636`), once. Row 4 added; Name editor active (`e2290`). Snapshot tool-saved `page-...18-47-18-518Z.yml`.
10. `type` `FX_UM` into the row 4 Name editor (`e2290`). `Tab`. Snapshot `T10-03`.
11. Click the row 4 active class editor's **Open** button (`e1803`). **No timeout.** Lookup opened. `find` FX_UM (read): option list contained FX_ItemBase, **FX_UM** (`e2549`), FX_UMBase, G6RCost.
12. Click option **FX_UM** (`e2549`). Snapshot tool-saved `page-...18-47-32-511Z.yml`.
13. `Tab` (commit class). Snapshot `T10-04`.
14. `Tab` (commit Data Type editor, `String` from class). Snapshot `T10-05` (final four-row snapshot).
15. Screenshot `T10-06` (left/right columns as the grid stood; read).
16. `browser_mouse_wheel` deltaX −600 on the page (grid did not scroll; no change). Screenshot `T10-07` (read; same as T10-06).
17. `browser_mouse_click_xy` (846, 691) on the grid's horizontal scroll arrow, one attempt. Grid scrolled partly (Property Class column clipped). Screenshot `T10-08` (read).
18. Snapshot `T10-09` (final verification, read; `Grep`/`Read` of rows).

**No timeouts occurred in T10.** The row-1 overlay that stopped T9 did not recur; the row 3 editor was reached through its own Open control as instructed.

## Counts (T10)
| Category | Count |
| --- | --- |
| Property Class lookup opens (own Open control) | 2 (row 3, row 4) |
| Property Class selections | 2 (FX_Cost, FX_UM) |
| Add Row | 1 (row 4) |
| Name entries (typed) | 1 (`FX_UM`) |
| Tab commits | 5 |
| Scroll / screenshot-helper actions | 1 wheel (no effect), 1 scroll-arrow click |
| Screenshots saved (worker) | 3 (`T10-06`, `T10-07`, `T10-08`) |
| Snapshots saved (worker YAML) | 7 (`T10-00`, `01`, `02`, `03`, `04`, `05`, `09`) |
| Timeouts / intercepts | 0 |
| Finish | **0** |
| Next / Back | 0 / 0 (Next not pressed) |
| Cancel | 0 |
| Create Form response | 0 |
| Save | 0 |
| Check in / check out / Undo | 0 |
| Designer edits / property class edits | 0 |
| Tab selections | 0 |
| Close / reopen runtime Forms | 0 |
| Touches on Sql Tables placeholder / retained filters | 0 |
| Browser evaluate / run-code | 0 |

## Four-property verification (wizard, visible/accessibility values)
| # | Name | Property Class (wizard) | Data Type | SQL Data Type | Property Length | Decimal Precision | Primary Key | Required | Label String ID | Default Value | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `FX_Item` | `FX_ItemBase` | String | nvarchar | 20 | blank | **checked** | **checked** | `FX_sItem` | blank | **Matches spec.** |
| 2 | `FX_Description` | **none (intentional)** | String | nvarchar | 150 | blank | unchecked | unchecked | `FX_sDescription` | blank | **Matches spec** (no class by design). |
| 3 | `FX_Cost` | `FX_Cost` | Decimal | decimal | 18 | 2 | unchecked | unchecked | `FX_sCost` | `0` | **Matches established definition.** |
| 4 | `FX_UM` | `FX_UM` | String | nvarchar | 10 | blank | unchecked | unchecked | `FX_sUM` | blank | **Matches established definition** for the exposed fields; domain not exposed (see below). |

Business rows in the grid: **exactly 4**, in order (1 FX_Item, 2 FX_Description, 3 FX_Cost, 4 FX_UM). No fifth business property. No relationship configured in the wizard grid.

Note for row 2 and row 4: Decimal Precision and Default Value are blank. For row 4 (String) that is the expected absence of a precision or default.

## Metadata comparison: wizard-visible vs earlier property-class records
| Class | Wizard-visible in T10 | Earlier native property-class evidence (not re-read in T10) | Comparison |
| --- | --- | --- | --- |
| FX_ItemBase | String / 20 / nvarchar / FX_sItem (shown on selection, T8–T10 grid) | T1-03: String / 20 / nvarchar / FX_sItem; EXP-048 AC-8 | **Consistent.** Wizard shows these as inherited display; PK and Required are wizard-explicit (checked by the operator-approved step). |
| FX_Cost | Decimal / 18 / 2 / 0 / decimal / FX_sCost (class row, T10-01 and T10-02 snapshot) | T1-00, T1-05: Decimal / 18 / 2 / default 0 / decimal / FX_sCost; EXP-048 AC-9 | **Consistent.** Default `0` appears in the wizard grid. |
| FX_UM | String / 10 / nvarchar / FX_sUM (class row, T10-04 and T10-09) | T1-24 and T3 accessibility: String / 10 / nvarchar / FX_sUM; Base FX_UMBase; Domain IDO FX_UMs, Domain Property FX_UM, Domain List Properties FX_Description | **Consistent for displayed fields.** The domain relationship is **not a column** in the wizard property grid and is **not verified in the wizard**. Refer to the prior property-class record only; no new wizard verification is claimed. |
| FX_UMBase | Not selected | Not the selected class | Not used. Its inherited values flow into FX_UM only, as displayed. |

## Unexposed or unverified fields (qualified)
- **FX_UM domain relationship** (Domain IDO FX_UMs, Domain Property FX_UM, Domain List Properties FX_Description): **not exposed** in the wizard property grid. Supported only by the earlier property-class record (T1-24, T3). Qualified as "earlier record, not wizard-verified".
- **FX_sDescription** resource (label for property 2): typed into the label combobox; **the resource is not verified** (no read-only lookup was available in T7). Qualified.
- **Schema `dbo`** for the derived SQL table: not visible before Finish (operator-accepted). Unverified until after Finish.
- **Stored (not displayed) values**: inherited values are the wizard display; stored definitions were not inspected in T10.
- **Required on property 3 and 4**: unchecked in the grid. The grid does not show a separate "inherited Required" for those classes, so no class-level Required is claimed.

## Identity re-confirmed (not modified)
- IDO Name `FX_Items`; IDO Project `FX_HelloWorldProject01`; Table Alias `fxitms`; Site Split unchecked; Table Name empty and read-only (derived on Finish, as the operator clarified); View Name empty; Form Type `MultiView`; Form Layout `GridLeft`; Device Type `Default` (unchanged defaults).

## Active editor state (left as is)
- After the row 4 Data Type commit, focus moved to the **SQL Data Type** editor of row 4, displaying `nvarchar` (the class-derived value). Nothing was typed. It was left active to avoid another commit action. The wizard's Finish remains disabled.

## Evidence (paths and what each shows)
- `T10-00-fresh-snapshot-start.yml` — wizard open at T10 start; rows 1–3; row 3 class editor active and blank; Finish disabled.
- `T10-01-snapshot-after-row3-class-committed.yml` — row 3 class `FX_Cost`; Data Type editor `Decimal`; row values 18, 2, `FX_sCost`, `0`.
- `T10-02-snapshot-after-row3-datatype-committed.yml` — row 3 Data Type `Decimal`; SQL Data Type editor `decimal`.
- `T10-03-snapshot-after-row4-name.yml` — row 4 Name `FX_UM`; class editor active and blank.
- `T10-04-snapshot-after-row4-class.yml` — row 4 class `FX_UM`; row values nvarchar, 10, FX_sUM; Data Type editor `String`.
- `T10-05-snapshot-final-four-rows-precommit.yml` — all four rows with values (before the final verification read).
- `T10-09-snapshot-final-verification.yml` — final accessibility verification of all four rows and Finish state.
- `T10-06-wizard-four-rows-precommit-left-columns.png` — shows the **Name, Data Type and SQL Data Type** columns for all four rows (FX_Item/String/nvarchar; FX_Description/String/nvarchar; FX_Cost/Decimal/decimal; FX_UM/String/nvarchar with the SQL editor active). Shows the identity block (IDO Name `FX_Items`, project, alias, Site Split unchecked, empty Table Name). **Does not show** the Property Class, Length, Decimal Precision, Primary Key, Required, Label or Default columns (scrolled off to the left). Those are supported by the snapshots above.
- `T10-07-wizard-four-rows-precommit-scrolled-left-columns.png` — identical to T10-06 (the wheel scroll had no effect). Not a separate proof.
- `T10-08-wizard-four-rows-after-scroll-arrow.png` — after one scroll-arrow click, the Property Class column is partly visible (`emBase`, `ost`, `M` for rows 1, 3, 4; row 2 blank). **Clipped**; it shows that the class column is populated for rows 1, 3 and 4, but does not show the full class names. The full names are in the snapshots.
- Tool-saved browser snapshots under `evidence/playwright/page-2026-10-10T18-46-*.yml` and `page-2026-10-10T18-47-*.yml` (written by the tool, not the worker).

## Pre-Finish acceptance assessment (AC-5 and related)
- **AC-5 (property configuration):** **MET at the wizard grid level.** Exactly four intended business properties in order; the native Property Class lookup resolved FX_ItemBase (T8), FX_Cost (T10) and FX_UM (T10). Each specified value is verified in the grid. No unintended PK or Required flag on properties 3 or 4. No fifth property.
- **AC-5 qualification:** the FX_UM domain relationship (Domain Property FX_UM, Domain List Properties FX_Description, Domain IDO FX_UMs) **is not wizard-verified**; it rests on the earlier property-class record. The FX_sDescription label is typed, not resource-verified.
- **AC-4 (identity):** met for IDO Name, project, alias and Site Split; schema `dbo` is not visible before Finish, as the operator accepted.
- **AC-3 (dependencies):** FX_ItemBase, FX_Cost and FX_UM dependencies are consistent with their earlier records; FX_sDescription remains unverified.
- **AC-6 (single Finish):** **not performed** (the brief stops before Finish).
- **Assessment:** the four business properties are configured and visibly consistent with the established definitions. **The wizard is ready for a coordinator decision on Finish.** Finish has not been invoked. The residual items are the unexposed FX_UM domain relationship (earlier record only), the unverified FX_sDescription resource, and the derived SQL schema, which only the post-Finish SQL Tables check can verify.

## Limitations
- Inherited values are display values in the wizard; stored definitions were not inspected.
- Only the accessibility tree and screenshots of visible rows were used; the clipped left columns are verified in the tree, not in a full screenshot.
- The tab-0 current-tab state at T10 start matches earlier occurrences; no cause identified.

## Next permitted action
Coordinator review. Finish must not be invoked until the operator or coordinator authorizes it. Then (after Finish) the Create Form prompt is to be declined with No, the IDO and SQL table are verified (AC-7, AC-9), and any check-in is decided per AC-8. No further action was taken in T10.
