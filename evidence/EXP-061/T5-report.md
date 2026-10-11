# EXP-061 — T5 report (cycle 4): ordinary IDO Collections close, native reopen, recovery query, property-recovery comparison

**Status: T5 COMPLETE. The clean IDO Collections internal tab was closed once with no unsaved-changes prompt. IDO Collections was reopened once through Open > Select Form. One exact-name query returned exactly one `FX_Items` IDO (project FX_HelloWorldProject01; base table FX_Items, alias fxitms, Primary Base). The recovered property inventory has 12 rows: the 11 original properties are identical to the T1 baseline, and exactly one added row is `FX_Picture` (Bound to Column, column FX_Picture, class FX_Picture, Binary, varbinary). FX_Items remains checked out to `anton.ramos@3mworks.com.ph`, and Save is disabled.** Classification: **observed only; not replay_verified.** Same-session UI recovery only; no database read, no independent session, no cache check.

Run `R-20261011-223208-4y9y`, cycle 4, task **T5**. Worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`; task_message_id `8627cc71-afaa-49c5-a014-617389dddb04`. Date 2026-10-11. Editing scope User.

---

## 1. Pre-close prerequisites (reviewed before any browser action)

- Reviewed `T1-report.md`, `T4-report.md`, `t1-snapshot-03-idos-FX_Items-properties-tab.yml` (T1 baseline, 11 rows) and `t4-snapshot-02-after-finish-settled.yml` (T4 post-Finish, 12 rows).
- Tab list (read-only): tab 0 Designer (not acted on); tab 1 Web Client (`favoriteContext=IdoCollections`). Tab 1 selected on the first attempt.
- Fresh untargeted snapshot `t5-snapshot-00-pre-close-fresh.yml`:

| Prerequisite | Observed | Result |
| --- | --- | --- |
| IDO Collections internal tab active | `IDOs` tab selected; IDO Name `FX_Items` (`IDOs 1 of 1` from status `New Property (IDOs 1 of 1)`) | Pass |
| Target project | Project Name `FX_HelloWorldProject01` | Pass |
| Wizard closed | no `IDO Property Wizard` tab; no wizard in the tree | Pass |
| Save | toolbar Save disabled | Pass |
| Checkout ownership | Locked By `anton.ramos@3mworks.com.ph` (equals identity-bar operator); Check In and Undo Check Out enabled | Pass |
| Revision | Revision Num `2`; Revision Date `10/10/2026` | Recorded |
| Property inventory | 12 rows; row 12 `FX_Picture` (Bound to Column, column FX_Picture, class FX_Picture, Binary, varbinary); rows 1–11 as T1 | Pass |
| Dialogs | none | Pass |

Evidence: `t5-01-pre-close-clean-state-idos-12-rows.png` (IDO header: FX_Items; Project FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By operator (clipped); Check In and Undo Check Out enabled; Save disabled; status `New Property (IDOs 1 of 1)`). Limit: the DevTools pane covers the property grid, so the 12-row proof is the accessibility snapshot `t5-snapshot-00`.

**Prerequisite result: all passed. The close was permitted.**

## 2. Close (count: 1)

- **Action:** one click on the native `Close Panel IDOs` control in the Form tab strip (`f1e111`, from the fresh snapshot). No retry.
- **Immediate result:** the IDOs tab was removed from the tab strip. The page moved to the inherited Property Classes context (`favoriteContext=IdoPropertyClasses`) and that tab became active. **No unsaved-changes prompt, no dialog, no confirmation** (`browser_find` "dialog": no matches).
- **Remaining tabs (unchanged):** Sql Tables, Sql Columns, FX_Items, Property Classes; Save disabled.
- Evidence: `t5-snapshot-01-after-close-immediate.yml` (IDOs absent from the tablist; Property Classes selected; Save disabled).

Close result: **clean close; no prompt.**

## 3. Reopen (count: 1)

- **Open (toolbar):** one click on `Open` (`f1e25`). The Select Form dialog opened with the filter already `IdoCollections` (no typing).
- **Row:** `IDOs / IdoCollections` (`f1e2142`) activated (verified active in a dialog-targeted snapshot). The other row `G6RIdoCollectionSearch` was not selected.
- **OK:** one click (`f1e2170`). Result: `favoriteContext=IdoCollections`; IDOs tab active; Save disabled; no dialog; no authentication challenge.
- Evidence: `t5-snapshot-02-reopened-initial-state.yml`. The reopened Form opened in Filter in Place mode with a blank IDO Name criteria field and a placeholder row.

## 4. Recovery query (count: 1)

- One entry: `FX_Items` typed into the IDO Name criteria field (`f1e2271`, one type action; criteria field was blank before entry). Screenshot before F4: `t5-02-reopened-criterion-FX_Items-before-F4.png`.
- One F4; 3 s settle.
- **Result:** one row, `FX_Items` (grid row `FX_Items anton.ramos@3mworks.com.ph 10/10/2026 2`). Status `Description (IDOs 1 of 1)` (the status text reflects the focused field; the one-row count is the authoritative match). Evidence: `t5-snapshot-03-recovery-query-settled.yml`.

## 5. Recovered identity, ownership and revision (AC-7)

| Field | Value (recovered, accessibility) | Pre-close (T5 §1) | T1 baseline | Result |
| --- | --- | --- | --- | --- |
| IDO Name | `FX_Items` | `FX_Items` | `FX_Items` | Same |
| Project Name | `FX_HelloWorldProject01` | same | same | Same |
| Base table (Tables sub-grid) | `FX_Items`, alias `fxitms`, Table Type `Primary Base`, Join Type `Inner` | not read pre-close | same (T1) | Recovered; matches T1 |
| Revision Num | `2` | `2` | `2` | Same |
| Revision Date | `10/10/2026` | `10/10/2026` | `10/10/2026` | Same |
| Locked By (full) | `anton.ramos@3mworks.com.ph` | same | blank (T1, pre-checkout) | Operator owner, as expected after T2 |
| Check In | enabled | enabled | — | Checked out |
| Undo Check Out | enabled | enabled | — | Checked out |
| Save | disabled | disabled | disabled | Clean |
| Access As | `G6R` | `G6R` | `G6R` | Same |
| Label String ID / Caption | `oFX_Items` / `oFX_Items` | same | same | Same |

Evidence: `t5-03-recovered-idos-identity-checkout-properties-tab.png` (identity bar operator; FX_Items; Project FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By operator (clipped); Check In and Undo Check Out enabled; Save disabled; status bar text). The image does not show the property grid (covered by DevTools); the accessibility snapshot is the inventory source.

**Ownership:** the IDO is checked out to the authenticated operator after recovery, as required by AC-7.

## 6. Recovered property inventory — complete readback (AC-7)

Source: in-form `Properties` tab (tablist sub-tab, `f1e2420`; **not** the toolbar `Properties` button, which was not pressed). Accessibility snapshot `t5-snapshot-04-recovered-properties-tab.yml`. **Cardinality: 12 rows.**

| # | Property Name | Seq | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Upper Case | Pseudo Key | Read Only Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | 1 | FX_ItemBase | Bound to Column | FX_Item | 1 | blank | blank | blank | ☐ | ☑ | ☐ | ☐ | — |
| 2 | FX_Description | 2 | (none) | Bound to Column | FX_Description | 0 | String | 150 | nvarchar | ☐ | ☐ | ☐ | ☐ | — |
| 3 | FX_Cost | 3 | FX_Cost | Bound to Column | FX_Cost | 0 | blank | blank | blank | ☐ | ☐ | ☐ | ☐ | — |
| 4 | FX_UM | 4 | FX_UM | Bound to Column | FX_UM | 0 | blank | blank | blank | ☐ | ☐ | ☐ | ☐ | — |
| 5 | CreatedBy | 5 | (none) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | ☑ | ☐ | ☐ | ☐ | — |
| 6 | UpdatedBy | 6 | (none) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | ☑ | ☐ | ☐ | ☐ | — |
| 7 | CreateDate | 7 | (none) | Bound to Column | CreateDate | 0 | Date | blank | CurrentDateType | ☑ | ☐ | ☐ | ☐ | — |
| 8 | RecordDate | 8 | (none) | Bound to Column | RecordDate | 0 | Date | blank | CurrentDateType | ☑ | ☐ | ☐ | ☐ | — |
| 9 | RowPointer | 9 | (none) | Bound to Column | RowPointer | 0 | GUID | blank | RowPointerType | ☑ | ☐ | ☐ | ☐ | — |
| 10 | NoteExistsFlag | 10 | (none) | Bound to Column | NoteExistsFlag | 0 | Byte | blank | FlagNyType | ☐ | ☐ | ☐ | ☐ | — |
| 11 | InWorkflow | 11 | (none) | Bound to Column | InWorkflow | 0 | Byte | blank | FlagNyType | ☐ | ☐ | ☐ | ☑ | — |
| **12** | **FX_Picture** | **12** | **FX_Picture** | **Bound to Column** | **FX_Picture** | **0** | **Binary** | **blank** | **varbinary** | ☐ | ☐ | ☐ | ☐ | — |

*Checkbox columns: each row exposes four checkbox states (in DOM order) and one empty cell. The header mapping (Read Only, Required, Upper Case, Pseudo Key) is an inference from header order; only Required for FX_Item was confirmed in T1. The Read Only Record column (last header) has no checkbox exposed in these rows, so its cell shows "—".* Raw checkbox states per row are identical to T1 and T4 (see §7).

## 7. Field-by-field comparison: recovered (T5) vs T1 baseline vs T4 post-Finish

**Method:** each recovered row's accessibility text string (name, sequence, class, property type, column, value, key sequence, data type, length, column type, and all checkbox states) was compared with the T1 baseline row (`t1-snapshot-03`) and with the T4 post-Finish row (`t4-snapshot-02`).

| Row | Property | T1 baseline string | T4 post-Finish string | T5 recovered string | Equal (T1 vs T5) | Equal (T4 vs T5) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | `FX_Item 1 FX_ItemBase Bound to Column FX_Item 1 [ ] [x] [ ] [ ]` | identical | identical | Yes | Yes |
| 2 | FX_Description | `FX_Description 2 Bound to Column FX_Description 0 String 150 nvarchar [ ] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 3 | FX_Cost | `FX_Cost 3 FX_Cost Bound to Column FX_Cost 0 [ ] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 4 | FX_UM | `FX_UM 4 FX_UM Bound to Column FX_UM 0 [ ] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 5 | CreatedBy | `CreatedBy 5 Bound to Column CreatedBy 0 String 128 UsernameType [x] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 6 | UpdatedBy | `UpdatedBy 6 … String 128 UsernameType [x] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 7 | CreateDate | `CreateDate 7 … Date CurrentDateType [x] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 8 | RecordDate | `RecordDate 8 … Date CurrentDateType [x] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 9 | RowPointer | `RowPointer 9 … GUID RowPointerType [x] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 10 | NoteExistsFlag | `NoteExistsFlag 10 … Byte FlagNyType [ ] [ ] [ ] [ ]` | identical | identical | Yes | Yes |
| 11 | InWorkflow | `InWorkflow 11 … Byte FlagNyType [ ] [ ] [ ] [x]` | identical | identical | Yes | Yes |
| 12 | FX_Picture | **absent (count 11)** | `FX_Picture 12 FX_Picture Bound to Column FX_Picture 0 Binary varbinary [ ] [ ] [ ] [ ]` | identical | No (added, expected) | Yes |

**Result:**
- **11 original properties: unchanged.** Names, sequence, class, property type, column, key sequence, data type, length, column type and every readable checkbox state match the T1 baseline on all 11 rows. No property removed, reordered, or changed.
- **Exactly one addition:** row 12, `FX_Picture`, property type **Bound to Column**, column **FX_Picture**, class **FX_Picture**. No Derived, no duplicate, no second FX_Picture row, no property-level change to the original 11.
- **Recovered inventory = baseline + one FX_Picture**: **yes** (12 = 11 + 1). Field-by-field identical to the T4 post-Finish readback on all 12 rows.

## 8. Binary / varbinary visibility after reopen (inherited vs visible)

- **Visible after reopen (accessibility, row 12):** Data Type `Binary`; Column Type `varbinary`; Property Class `FX_Picture`; Property Type `Bound to Column`; Column Name `FX_Picture`.
- **Not visible in the grid:** Length (blank for row 12), Decimal, and the class attributes (Binary Format PNG, Length -1). The grid shows the class-bound rows (FX_Item, FX_Cost, FX_UM) with blank Data Type/Length as well, so blanks on class-bound rows are a grid property of this view, not a regression.
- **Inherited in the wizard (T3/T4):** Data Type `Binary`, Length `-1`, Column Data Type `varbinary`. The wizard showed Length `-1`; the reopened grid did not show it. **Length -1 is therefore wizard-observed (T3/T4), not reopen-observed.**
- The reopened FX_Picture row shows Data Type `Binary` and Column Type `varbinary` in the grid. Distinguish: Data Type and Column Type are visible after reopen; Length is not.

## 9. Counts and action audit (T5)

| Action | Count | Detail |
| --- | --- | --- |
| IDO Collections internal tab close | **1** | `Close Panel IDOs` (`f1e111`); clean; no prompt |
| Reopen through Open > Select Form | **1** | toolbar Open (1), filter already `IdoCollections`, row `IDOs / IdoCollections` (1 click), OK (1) |
| Post-reopen exact-name query (F4) | **1** | `FX_Items` typed (1 type action), F4 (1 key), 3 s settle |
| In-form Properties tab selection | 1 | view-only tablist sub-tab `f1e2420`; toolbar Properties button **not** pressed |
| Wizard initiation | 0 | none (cumulative 1, from T3) |
| Finish | 0 | none (cumulative 1, from T4) |
| Toolbar Save | 0 | none (cumulative 0) |
| Checkout / check-in / undo checkout | 0 / 0 / 0 | none |
| New / Delete | 0 / 0 | none |
| Separate Properties maintenance Form opened | 0 | none |
| Runtime FX_Items Form interaction | 0 | none (not opened) |
| Cache / unload / FormSync / Designer | 0 | none |
| Dialogs answered | 1 | Select Form OK during the reopen (in-form Mongoose dialog). No alert, prompt or unsaved-changes dialog appeared at close (`browser_find` "dialog" after close: no matches). *Corrected in T6; the original T5 entry said 0.* |
| Ref-not-found / timeouts | 0 / 0 | none |
| JavaScript / run-code / console / network | 0 | none |
| Fresh-snapshot recoveries | 0 | none needed |

**Browser calls (T5):** clicks 5 (close `Close Panel IDOs`; toolbar Open; Select Form row; Select Form OK; in-form Properties tab); typed 1 (`FX_Items`); keys 1 (F4); waits 1 (3 s); tab list 1; tab select 1; `browser_find` 2 (`dialog` after close; `Select Form` before the reopen); targeted dialog snapshots 2 (`f1e2115`, before and after the row selection); untargeted snapshots 5 (`t5-snapshot-00` to `-04`); screenshots 3 (`t5-01`, `t5-02` pre-F4 criterion, `t5-03`). The tool-generated `page-*.yml` files are not counted as worker snapshots.

**Cumulative (T1–T5):**

| Operation | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Form opened (Select Form) | 1 | 0 | 0 | 0 | 1 (reopen) | **2** |
| IDO Collections close | 0 | 0 | 0 | 0 | 1 | **1** |
| Exact-name IDO query (F4) | 1 | 0 | 0 | 0 | 1 | **2** (1 initial, 1 post-reopen) |
| Property-class prerequisite query | 1 | 0 | 0 | 0 | 0 | 1 |
| Checkout (Check Out) | 0 | 1 | 0 | 0 | 0 | **1** |
| Check-in / undo checkout | 0 | 0 | 0 | 0 | 0 | 0 |
| New Property wizard initiation | 0 | 0 | 1 | 0 | 0 | **1** |
| Finish | 0 | 0 | 0 | 1 | 0 | **1** |
| Toolbar Save | 0 | 0 | 0 | 0 | 0 | **0** |
| Post-reopen recovery query | 0 | 0 | 0 | 0 | 1 | **1** |
| Runtime FX_Items Form opened | 0 | 0 | 0 | 0 | 0 | 0 |
| Dialogs answered | 1 | 0 | 0 | 0 | 0 | 1 (T1 Select Form OK) |

Note on the "Select Form" counts: the brief's AC-9 wording counts "one IDO Collections close, one reopen, and one post-reopen recovery query." The T1 initial open through Select Form is counted separately as the initial open (not a reopen). The table above lists it under "Form opened" for completeness.

## 10. Evidence limitations and observations

1. **Checkbox mapping:** the recovered row strings show four checkbox states per row (DOM order), the same as T1 and T4. The header mapping is inferred for everything except Required on FX_Item. The Read Only Record column has no exposed checkbox.
2. **Length not visible for FX_Picture after reopen:** wizard-observed (T3/T4) only.
3. **Status text:** the status bar reads `Description (IDOs 1 of 1)` after the query, which names the focused field, not the Form state. The one-row count is the authoritative match.
4. **Revision unchanged:** Revision Num 2 and Revision Date 10/10/2026 are the same before close, after reopen, and at T1. The mechanism is not established (see T4 §8).
5. **Same-session UI recovery:** the reopen and query happened in the same browser session. This does not establish database persistence, cross-session recovery, or cache state.
6. **DevTools pane:** it covers the lower property grid in screenshots, so the inventory proof is the accessibility snapshot `t5-snapshot-04`, not a screenshot.
7. **Lookup-dependent fields:** the wizard's Property Name `FX_Picture` (populated after the Bind To selection, not typed) is now visible as a stored property name after the reopen. This supports the Property Name being a committed value at UI level. It does not prove persistence beyond the session.
8. The inherited Sql Tables, Sql Columns, FX_Items runtime and Property Classes tabs were not acted on.

## 11. Acceptance status (after T5)

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 – AC-4 | Supported (observed) — T1, T2 | T1 and T2 reports | As recorded |
| AC-5 | Supported (observed, UI and accessibility) — T4 | T4 report | Length -1 wizard-only |
| AC-6 | Supported (observed, UI level) — T4 | T4 report | — |
| **AC-7** | **Supported (observed, UI and accessibility level; T5)**: one clean close with no prompt; one native reopen through Open > Select Form; one post-reopen exact-name query returns one `FX_Items`; project FX_HelloWorldProject01; base table FX_Items (fxitms, Primary Base); recovered inventory = baseline + exactly one Bound FX_Picture (column FX_Picture; class FX_Picture); 11 originals unchanged field by field; checked out to the operator; Save disabled | `t5-01`, `t5-02`, `t5-03`; `t5-snapshot-00`, `-01`, `-02`, `-03`, `-04`; §2–7 | Same-session UI; Length -1 not in reopened grid; no database read; checkout interpreted from Locked By and enabled controls |
| AC-8 | Not started (runtime FX_Items Form, separate task) | — | — |
| AC-9 | Partially (cumulative audit in §9; final audit pending) | §9 | — |
| AC-10 | Not started (final report) | — | — |

## 12. Written-file inventory (T5)

- `evidence/EXP-061/T5-report.md` — created (this report).
- `evidence/EXP-061/t5-01-pre-close-clean-state-idos-12-rows.png` — created.
- `evidence/EXP-061/t5-02-reopened-criterion-FX_Items-before-F4.png` — created.
- `evidence/EXP-061/t5-03-recovered-idos-identity-checkout-properties-tab.png` — created.
- `evidence/EXP-061/t5-snapshot-00-pre-close-fresh.yml`, `t5-snapshot-01-after-close-immediate.yml`, `t5-snapshot-02-reopened-initial-state.yml`, `t5-snapshot-03-recovery-query-settled.yml`, `t5-snapshot-04-recovered-properties-tab.yml` — created (accessibility snapshots written at the worker's request).
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md` — updated (T5 status and section, AC-7 row, next step, documentation list).
- Tool-generated (not worker-authored): `evidence\playwright\page-*.yml` and `console-*.log` written automatically on each action. The worker did not read the console logs.

No other repository file was written by T5. `tools/`, `AGENTS.md`, tutorial sources and prior experiment records were not touched.

## 13. Next permitted action (NOT started; requires separate authorization)

The recovered IDO Collections Form is open, clean (Save disabled), and in the IDOs tab with the in-form Properties sub-tab selected. The inherited Sql Tables, Sql Columns, FX_Items runtime and Property Classes tabs are untouched. The next independently authorized step is the read-only runtime verification of the FX_Items Form (three pre-existing records; AC-8), which should be authorized separately. No further mutation, Save, checkout, or wizard action is permitted in this experiment at this point.
