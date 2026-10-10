# EXP-049 — T12 created-IDO verification (read-only; wizard closed; no check-in or checkout)

Run: R-20261011-020822-9Eej, cycle 14, task T12 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
**Result: the IDO FX_Items is visible in the native IDOs runtime Form as exactly one record, in project FX_HelloWorldProject01, alias fxitms, with four business properties bound to their intended classes. The IDO is shown as checked out to the operator. No check-in, checkout, Save, New, Delete, or edit was performed. SQL Tables and SQL Columns were NOT inspected (out of T12 scope).** This is observed same-session UI-level evidence only.

## Action counts (T12)
| Action | Count |
| --- | --- |
| Wizard Close (the wizard's own Close, completed state) | **1** (no discard prompt appeared) |
| Wizard Cancel / Finish / Next / Back | 0 / 0 / 0 / 0 |
| Create Form responses | 0 (none in T12; the single No was in T11) |
| Tab selection, Web Client (`browser_tabs select index=1`; navigation only) | 1 |
| IDOs runtime tab click (select tab only) | 1 |
| Read-only tab listings | 1 |
| Filter in Place opens | 1 (IDOs) |
| IDO Name criterion entries | 1 (`FX_Items`, replacing the retained T6 value of the same name) |
| Tab commits (criterion) | 1 |
| F4 query runs | 1 (exact-name query for FX_Items; one settled result) |
| Runtime Form opened | 1 (**IDO Properties**, via the IDOs Form's `Properties` button; a new tab; left open) |
| IDO property row selections (view only) | 2 (rows 3 FX_Cost and 4 FX_UM; no value changed) |
| Check In / Check Out / Undo Check Out | **0** |
| Save / New / Delete / Refresh / Close of a runtime Form | 0 / 0 / 0 / 0 |
| Text typed into any property or Form field | 0 (the only typed text was the IDO Name criterion) |
| Screenshots (worker) | 5 (`T12-02` to `T12-06`) |
| Accessibility snapshots (worker YAML) | 2 (`T12-00`, `T12-01`); tool snapshots also written |
| Browser evaluate / run-code | 0 |
| SQL Tables / SQL Columns inspection | **0** (out of scope) |

Distinct FX_Items queries in T12: **1** (the post-creation query). The T6 pre-creation query was not repeated.

## Wizard closure (verified)
- Pre-Close state: wizard dialog "Table and IDO created.", Back/Next/Finish `[disabled]`, Close `[enabled]`, no other dialog (`T12-00-fresh-snapshot-wizard-completed.yml`).
- Close pressed once. Post-Close snapshot (`page-...18-53-24-237Z.yml`): no wizard dialog, no alertdialog, no discard or Create Form prompt.

## Identity and scope
- Tab 1 (Mongoose / Web Client) selected. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Status bar `ScopeType: User`.
- The IDOs runtime tab was selected (`f1e94`) and the Form was the active IDOs Form before Filter in Place. Save `[disabled]`, New `[disabled]` in the IDOs toolbar before the query.

## Post-creation IDO query (single, exact name)
- Criterion: IDO Name `FX_Items` entered (fill) in the IDOs criteria textbox. The field already held `FX_Items` from the earlier T6 criterion; it was re-entered so the criterion is explicit (`T12-02-idos-criterion-FX_Items-before-F4.png`).
- F4 once. Settled result (`page-...18-53-49-932Z.yml`):
  - Grid: **one row** `FX_Items | (blank description) | anton.ramos@3mworks.com.ph | 10/10/2026 | 1`. Row number 1, checked checkbox (checked-out indicator).
  - Detail: IDO Name `FX_Items`; **Project Name `FX_HelloWorldProject01`**; Revision Num `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Label String ID `oFX_Items`; Caption `oFX_Items`; Extends blank; Description blank; Profile blank.
  - Tables sub-grid (screenshot `T12-03`): **one row** `FX_Items | fxitms | Primary Base | Inner`. Table name **FX_Items**, alias **fxitms**.
  - Status text (screenshot): `Description (IDOs 1 of 1)`. Save `[disabled]` in the toolbar.
- Result: exactly one FX_Items IDO returned, associated with FX_HelloWorldProject01 and alias fxitms. The IDO Name criterion showed a record here (not a placeholder): populated revision, project and locked-by values distinguish it from the T6 criteria echo.
- Qualification: the IDO Name criterion's match mode (exact or contains) is still not stated by the UI.

## Checkout-state indication (observed; not interpreted beyond the native display)
- The IDOs grid row checkbox for FX_Items is **checked** (unchecked for the earlier FX_HelloWorld01 record). Locked By is the operator. The detail shows **Check In enabled** and **Undo Check Out disabled**.
- Interpretation: the native display is consistent with the IDO being checked out to the operator (Check In is the applicable action; the row checkbox and Locked By agree). However, **Undo Check Out is disabled**, which is not the pattern recorded for the checked-out Property Classes (EXP-047-R2, EXP-048: Check In and Undo Check Out both enabled). That difference is **unexplained** and is recorded as a finding, not resolved.
- **No check-in was performed** in T12. Under AC-8 the check-in decision (one authorised check-in of FX_Items, if it is checked out) belongs to a separately authorised step; T12 did not authorise it.

## IDO property definitions (IDO Properties runtime Form, read-only)
The IDO Properties Form opened for FX_Items lists **11 properties**: the four business properties (rows 1–4) and seven system-generated properties (rows 5–11: CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow). Each row carries a checked checkbox in the first column; its meaning (for example, record or active indicator) is not established by the native UI and is not interpreted here.

| Seq | Property Name | Property Class | Column Table Alias | Property Type | Column Name | Data Type | Length | Decimal Position | Default | Column Data Type | Required | Pseudo Key | Label String ID | Domain IDO / Property / List | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | FX_ItemBase | fxitms (table FX_Items) | Bound to Column | FX_Item | String | 20 | blank | blank | nvarchar | **checked** | unchecked | FX_sItem | blank / blank / blank | Matches spec (PK is not an IDO flag here; see SQL). |
| 2 | FX_Description | (none) | fxitms | Bound to Column | FX_Description | String | 150 | blank | blank | nvarchar | unchecked | unchecked | FX_sDescription | blank / blank / blank | Matches spec (no class by design). |
| 3 | FX_Cost | FX_Cost | fxitms | Bound to Column | FX_Cost | Decimal | 18 | 2 | 0 | decimal | unchecked | unchecked | FX_sCost | blank / blank / blank | Matches spec. |
| 4 | FX_UM | FX_UM | fxitms | Bound to Column | FX_UM | String | 10 | blank | blank | nvarchar | unchecked | unchecked | FX_sUM | **FX_UMs / FX_UM / FX_Description** | Matches spec including the domain relationship. |

Sequence values: 1, 2, 3, 4 in that order. Property Type `Bound to Column` for all four. Seven system-generated properties are visibly distinct from the four business properties (rows 5–11 with system names, not in the specification).

Row values observed in: `T12-04-ido-properties-form-rows-after-open.png` (row 1 detail and the 11-row list), `T12-05-ido-properties-row3-FX_Cost-selected.png` (row 3 detail), `T12-06-ido-properties-row4-FX_UM-selected.png` (row 4 detail with domain fields). Accessibility rows for rows 1–4 in `page-...18-53-59-117Z.yml`.

## Inherited-versus-explicit display (wizard vs IDO)
- Row 1: wizard showed String / nvarchar / 20 / FX_sItem and PK+Required checked. The IDO shows the same String / nvarchar / 20 / FX_sItem and **Required checked**. The IDO has no separate Primary Key flag (it shows **Pseudo Key**, unchecked). Whether PK is held at the SQL level is for the SQL step.
- Row 3: wizard showed Decimal / decimal / 18 / 2 / 0 / FX_sCost. IDO matches.
- Row 4: wizard showed String / nvarchar / 10 / FX_sUM. The **domain relationship** (FX_UMs / FX_UM / FX_Description) was not exposed in the wizard grid; the IDO **does expose it**, so it is now observed on the created IDO. The Domain IDO value is the IDO-level property view, not a re-read of the FX_UM class definition.
- Values displayed in the IDO Properties Form are the stored IDO property definition as displayed; whether any value is inherited from the class at display time is not separately established.

## Acceptance-check status (T12)
- **AC-7 (IDO post-creation baseline):** **supported at same-session UI level.** Exactly one FX_Items record associated with FX_HelloWorldProject01 and alias fxitms (grid row, detail, Tables sub-grid). Four properties match the wizard definition and reference FX_ItemBase, FX_Cost and FX_UM (the FX_Description row has no class by design). Effective type, length, default, column type, labels and domain relationship were observed as displayed. The Form was in a settled state (Save disabled; no dirty indicator). Qualified: IDO-level display values, not independent stored metadata.
- **AC-8 (conditional check-in):** **pending.** The checkout indication is observed (row checkbox checked, Check In enabled, Locked By operator). Undo Check Out disabled is unexplained. No check-in performed. The decision to authorise one check-in is for a separately authorised step.
- **AC-10 (IDO recovery after ordinary close and reopen):** **not performed in T12** (the T12 brief required a single post-creation query before the separate close-and-reopen task). The query is a post-creation query, not a recovery.
- **AC-9 and AC-11 (SQL):** **not performed** (out of T12 scope).
- **AC-12 (audit):** partial; see counts above.

## Evidence files written in T12
- `evidence/EXP-049/T12-created-ido-verification.md` (this file)
- `evidence/EXP-049/T12-00-fresh-snapshot-wizard-completed.yml` (wizard completion state before Close)
- `evidence/EXP-049/T12-01-webclient-snapshot-after-select.yml` (Web Client after tab select; Export/Import Strings active)
- `evidence/EXP-049/T12-02-idos-criterion-FX_Items-before-F4.png` (criterion `FX_Items` in the IDO Name criterion; Save disabled)
- `evidence/EXP-049/T12-03-idos-FX_Items-after-F4-settled.png` (the settled IDOs result: row with checked checkbox; detail with project, revision, locked-by, label; Tables sub-grid FX_Items / fxitms / Primary Base / Inner; Check In enabled; Undo Check Out disabled)
- `evidence/EXP-049/T12-04-ido-properties-form-rows-after-open.png` (IDO Properties Form opened: 11 rows; row 1 detail FX_Item / FX_ItemBase / fxitms / Bound to Column / nvarchar / String 20 / Required checked / FX_sItem)
- `evidence/EXP-049/T12-05-ido-properties-row3-FX_Cost-selected.png` (row 3 detail: FX_Cost / Decimal / 18 / 2 / 0 / decimal / FX_sCost)
- `evidence/EXP-049/T12-06-ido-properties-row4-FX_UM-selected.png` (row 4 detail: FX_UM / String / 10 / nvarchar / FX_sUM / domain FX_UMs / FX_UM / FX_Description)
- Tool-written files (not worker-written): `evidence/playwright/page-2026-10-10T18-53-24-237Z.yml` (after wizard Close), `page-...18-53-32-776Z.yml` (IDOs tab), `page-...18-53-37-555Z.yml` (FiP open), `page-...18-53-49-932Z.yml` (settled), `page-...18-53-59-117Z.yml` (IDO Properties opened), `page-...18-54-20-562Z.yml` and `page-...18-54-27-306Z.yml` (row selections), and console logs.

## Pending items and unresolved findings (for coordinator)
1. **Undo Check Out disabled while Check In is enabled on FX_Items.** Not seen for the checked-out Property Classes. Unexplained; not resolved in T12. It bears on AC-8.
2. **IDO Properties runtime Form left open** as a new tab (opened from the IDOs Form's Properties button; a lifecycle event). The brief does not authorise closing it in T12, so it was left open. Its Property Name editor holds focus on row 4 (`FX_UM`, nothing typed).
3. **Wizard closed**: the wizard is no longer open; the Designer tab (tab 0) remains with its IdoPropertyClasses design view (opened in T1).
4. **Primary Key** is not an IDO-level flag in the IDO Properties Form (Pseudo Key is unchecked). The SQL primary-key designation is to be checked in the SQL step.
5. **The IDOs criterion is retained** (`FX_Items`) on the IDOs runtime tab; and the Sql Tables placeholder and retained criterion remain untouched (not inspected in T12).
6. **Match mode** of the IDO Name criterion (exact or contains) not stated by the UI.

## Next permitted action
Coordinator review. Pending authorisations: (a) SQL Tables and SQL Columns inspection of dbo.FX_Items (AC-9, AC-11); (b) the IDOs close-and-reopen recovery and one exact-name query (AC-10); (c) the conditional check-in decision for FX_Items (AC-8), noting the unexplained Undo Check Out state; (d) whether the IDO Properties tab should be closed. No check-in, checkout, Save, or further creation was performed in T12.
