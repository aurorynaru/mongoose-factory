# EXP-061 — T4 report (cycle 3): Finish invoked once; post-Finish inventory; Form clean

**Status: T4 COMPLETE. Finish invoked exactly once; no error or confirmation text displayed; the wizard closed. The Form is clean (Save disabled); no toolbar Save was invoked. The resulting Properties inventory shows 12 rows: the 11 original rows unchanged, plus exactly one `FX_Picture` row (Bound to Column, column `FX_Picture`, class `FX_Picture`).** AC-5 (full) and AC-6 (pre-close portion) supported (observed, UI and accessibility level). Classification: **observed only; not replay_verified.**

Run `R-20261011-223208-4y9y`, cycle 3, task **T4**. Worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`; task_message_id `ecc2b5b8-ed1c-4d4d-bf1b-cc3f0ffa9c6f`. Date 2026-10-11. Editing scope User.

---

## 1. Pre-Finish gate (one current visible inspection; no change to the wizard)

- Tab list (read-only): tab 0 Designer (not acted on); tab 1 Web Client (`favoriteContext=IdoPropertyWizard`). Select tab 1 on the first attempt.
- Fresh untargeted snapshot `t4-snapshot-00-start-fresh.yml`: `IDO Property Wizard` tab selected; wizard on page 2; Save disabled; no dialog.
- Accessibility readback (identical to T3 `t3-snapshot-07`):

| Field | Accessibility value | Visible (`t4-01`) | Gate |
| --- | --- | --- | --- |
| Bind To | `fxitms.FX_Picture` | `fxitms.FX_Picture` | Pass |
| Property Name | `FX_Picture` (textbox value, not placeholder) | `FX_Picture` in dark value text in an editable field | Pass |
| Property Class | `FX_Picture` (combobox value) | `FX_Picture` | Pass |
| Data Type | `Binary` | `Binary`, inherited (checkbox checked) | Pass |
| Length | `-1` | `-1`, inherited | Pass |
| Column Data Type | `varbinary` | `varbinary`, inherited (checkbox checked) | Pass |
| Inherit checkboxes | three, all checked | three checked | Pass |
| Finish | enabled | enabled | Pass |
| Next | disabled (last page) | disabled | Pass |
| Save (toolbar) | disabled | disabled | Pass |

- **Bound (page 1):** retained from T3 as instructed (not re-navigated). The property appears as `Bound to Column` in the post-Finish inventory, which is consistent with Bound.
- **Gate result: all passed.** No value differed, and Property Name was populated (not placeholder), so Finish was permitted.

Evidence: `t4-01-pre-finish-gate-visible-inspection.png` (shows the pre-Finish configuration: Bind To, Property Name, Property Class, Binary, -1, varbinary, inherited checkboxes, Finish enabled, Next disabled). What it proves: the values are visibly populated and committed at UI level. What it does not prove: the server-side commit, which the post-Finish inventory tests.

## 2. Finish (count: 1)

- **Action:** one click on the wizard's **Finish** button (`f1e191`, from the fresh gate snapshot). No retry. No other control activated.
- **Immediate response (tool returned without error):**
  - No dialog, alert or confirmation appeared. `browser_find` "dialog": no matches.
  - No success, warning or error text was displayed by the wizard or the Form.
  - The wizard tab closed. The page returned to `favoriteContext=IdoCollections`; the IDOs tab became active.
  - The status changed from `Check Out (IDOs 1 of 1)` to **`New Property (IDOs 1 of 1)`**.
- **Verbatim native response:** *no displayed text.* The observable response is the closing of the wizard and the change of status text to `New Property (IDOs 1 of 1)`. No confirmation was offered, so none was approved.
- Evidence: `t4-snapshot-01-after-finish-immediate.yml`; `t4-02-after-finish-immediate-idos-state.png`.

## 3. Post-Finish state (immediate and settled)

| Field | Before (T2/T3) | Immediate (T4) | Settled after 3 s (T4) |
| --- | --- | --- | --- |
| Save (toolbar) | disabled | disabled | disabled |
| Dialog | none | none | none |
| Revision Num | 2 | 2 | 2 |
| Revision Date | 10/10/2026 | 10/10/2026 | 10/10/2026 |
| Locked By | `anton.ramos@3mworks.com.ph` | same | same |
| Check In | enabled | enabled | enabled |
| Undo Check Out | enabled | enabled | enabled |
| Status text | `Check Out (IDOs 1 of 1)` | `New Property (IDOs 1 of 1)` | `New Property (IDOs 1 of 1)` |
| Properties sub-tab | — | selected | selected |

**Interpretation of Save state:** Save is disabled both immediately and after settling, and no pending-change indicator is visible in the header. The Form is therefore clean under the brief's test. **No toolbar Save was invoked** (the brief forbids an unnecessary Save).

**Revision observation:** Revision Num remains `2` and Revision Date remains `10/10/2026` after the property addition. Whether the Form's header simply does not refresh revision on property add, or the IDO revision is not changed by a property add, is **not established**. Recorded as an unresolved observation; it does not affect the property inventory.

Evidence: `t4-03-after-finish-settled-form-clean-save-disabled.png` (shows the IDO header: Revision Num 2, Revision Date 10/10/2026, Locked By operator (clipped), Check In and Undo Check Out enabled, Save disabled, status `New Property (IDOs 1 of 1)`). **Limit:** the Properties grid is covered by the DevTools pane in this image, so the inventory proof is the accessibility snapshot below, not the screenshot.

## 4. Post-Finish property inventory (in-form Properties tab; accessibility readback)

Source: `t4-snapshot-02-after-finish-settled.yml` (settled), and `t4-snapshot-01-after-finish-immediate.yml` (immediate; identical rows). **Cardinality: 12 rows** (was 11).

| # | Property Name | Seq | Property Class | Property Type | Column Name | Prop Value | Key Seq | Data Type | Length | Column Type | Raw checkbox states (DOM order) | Baseline (T1) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | 1 | FX_ItemBase | Bound to Column | FX_Item | blank | 1 | blank | blank | blank | `[ ] [x] [ ] [ ]` | **same** |
| 2 | FX_Description | 2 | (none) | Bound to Column | FX_Description | blank | 0 | String | 150 | nvarchar | `[ ] [ ] [ ] [ ]` | **same** |
| 3 | FX_Cost | 3 | FX_Cost | Bound to Column | FX_Cost | blank | 0 | blank | blank | blank | `[ ] [ ] [ ] [ ]` | **same** |
| 4 | FX_UM | 4 | FX_UM | Bound to Column | FX_UM | blank | 0 | blank | blank | blank | `[ ] [ ] [ ] [ ]` | **same** |
| 5 | CreatedBy | 5 | (none) | Bound to Column | CreatedBy | blank | 0 | String | 128 | UsernameType | `[x] [ ] [ ] [ ]` | **same** |
| 6 | UpdatedBy | 6 | (none) | Bound to Column | UpdatedBy | blank | 0 | String | 128 | UsernameType | `[x] [ ] [ ] [ ]` | **same** |
| 7 | CreateDate | 7 | (none) | Bound to Column | CreateDate | blank | 0 | Date | blank | CurrentDateType | `[x] [ ] [ ] [ ]` | **same** |
| 8 | RecordDate | 8 | (none) | Bound to Column | RecordDate | blank | 0 | Date | blank | CurrentDateType | `[x] [ ] [ ] [ ]` | **same** |
| 9 | RowPointer | 9 | (none) | Bound to Column | RowPointer | blank | 0 | GUID | blank | RowPointerType | `[x] [ ] [ ] [ ]` | **same** |
| 10 | NoteExistsFlag | 10 | (none) | Bound to Column | NoteExistsFlag | blank | 0 | Byte | blank | FlagNyType | `[ ] [ ] [ ] [ ]` | **same** |
| 11 | InWorkflow | 11 | (none) | Bound to Column | InWorkflow | blank | 0 | Byte | blank | FlagNyType | `[ ] [ ] [ ] [x]` | **same** |
| **12** | **FX_Picture** | **12** | **FX_Picture** | **Bound to Column** | **FX_Picture** | blank | **0** | **Binary** | blank | **varbinary** | `[ ] [ ] [ ] [ ]` | **added (new)** |

**Baseline comparison (AC-6, AC-7 precursor):**
- Original 11 rows: names, order, sequence numbers, property classes, property types, column names, key sequences, data types, lengths, column types and raw checkbox states all match the T1 baseline. No original row was added, removed or changed in the readback.
- Added: exactly one row, `FX_Picture` (12), Bound to Column, column `FX_Picture`, class `FX_Picture`.
- No Derived or other property type appears.
- "Blank" cells are as displayed in T1 (the grid does not show class-inherited Data Type or Length for class-bound rows in T1, and does not show Length `-1` for the new row).

**Limits of the inventory:** the raw checkbox states are mapped by DOM order, not by header; only the Required mapping for FX_Item was confirmed in T1. The new row's Length (-1) is not displayed in the grid; it was visible only in the wizard. The grid's Data Type and Column Type for class-bound rows are blank in the readback, so a change there would not be visible in this view.

Evidence: `t4-snapshot-02-after-finish-settled.yml` (decisive for the inventory). The screenshots `t4-02` and `t4-03` show only the header and the grid header; the rows are not visible in them.

## 5. Action audit (T4)

| # | Action | Target / detail | Result |
| --- | --- | --- | --- |
| 1 | browser_tabs list | read | Tab 0 Designer (not acted on); tab 1 Web Client |
| 2 | browser_tabs select 1 | Web Client | Succeeded (first attempt) |
| 3 | browser_snapshot (untargeted, fresh) | `t4-snapshot-00-start-fresh.yml` | Wizard page 2; all gate values present; Finish enabled |
| 4 | Grep / Read (local) | `t4-snapshot-00` | gate values confirmed |
| 5 | browser_take_screenshot | `t4-01-pre-finish-gate-visible-inspection.png` | visible gate (values populated, not placeholder) |
| 6 | browser_click | **Finish** (`f1e191`) | **the one Finish**; wizard closed; no dialog, no text |
| 7 | browser_find | "dialog" | no matches |
| 8 | browser_snapshot (untargeted, fresh) | `t4-snapshot-01-after-finish-immediate.yml` | IDOs active; 12 rows; Save disabled |
| 9 | browser_take_screenshot | `t4-02-after-finish-immediate-idos-state.png` | immediate header |
| 10 | browser_wait_for | 3 s | settle |
| 11 | browser_snapshot (untargeted, saved) | `t4-snapshot-02-after-finish-settled.yml` | settled: 12 rows; Save disabled; Locked By operator |
| 12 | browser_take_screenshot | `t4-03-after-finish-settled-form-clean-save-disabled.png` | settled header |

**Counts (T4):** Finish **1**; wizard initiation **0** (cumulative 1, from T3); toolbar Save **0**; checkout / check-in / undo checkout **0**; New **0**; Delete **0**; Form close **0**; reopen **0**; Select Form **0**; F4 query **0**; typed entries **0**; lookup selections **0**; runtime-record interaction **0**; dialogs answered **0**; ref-not-found **0**; timeouts **0**; JavaScript / run-code **0**; console or network inspection **0**; fresh-snapshot recoveries **0**; untargeted snapshots **3**; screenshots **3**; browser_find **1**; tab select **1**; tab list **1**; wait **1**.

Note on the Log Messages pane: the Mongoose DevTools pane was visible in the screenshots and is part of the rendered Form. The worker did not read or act on it, and it was not used as evidence.

**Cumulative (T1–T4):**

| Operation | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Form opened (Select Form) | 1 | 0 | 0 | 0 | 1 |
| Exact-name IDO query (F4) | 1 | 0 | 0 | 0 | 1 |
| Property-class prerequisite query | 1 | 0 | 0 | 0 | 1 |
| Checkout (Check Out) | 0 | 1 | 0 | 0 | **1** |
| Check-in / undo checkout | 0 | 0 | 0 | 0 | 0 |
| New Property wizard initiation | 0 | 0 | 1 | 0 | **1** |
| Finish | 0 | 0 | 0 | 1 | **1** |
| Toolbar Save | 0 | 0 | 0 | 0 | **0** |
| IDO Collections Form close | 0 | 0 | 0 | 0 | 0 |
| IDO Collections Form reopen | 0 | 0 | 0 | 0 | 0 |
| Post-reopen recovery query | 0 | 0 | 0 | 0 | 0 |
| Runtime FX_Items Form opened | 0 | 0 | 0 | 0 | 0 |
| Dialogs answered | 1 (Select Form OK) | 0 | 0 | 0 | 1 |

Irreversible or lifecycle actions to date: checkout 1; wizard initiation 1; Finish 1. Save 0; check-in 0; undo checkout 0; close 0; reopen 0.

## 6. Written-file inventory (T4)

- `evidence/EXP-061/T4-report.md` — created (this report).
- `evidence/EXP-061/t4-01-pre-finish-gate-visible-inspection.png` — created.
- `evidence/EXP-061/t4-02-after-finish-immediate-idos-state.png` — created.
- `evidence/EXP-061/t4-03-after-finish-settled-form-clean-save-disabled.png` — created.
- `evidence/EXP-061/t4-snapshot-00-start-fresh.yml`, `t4-snapshot-01-after-finish-immediate.yml`, `t4-snapshot-02-after-finish-settled.yml` — created (accessibility snapshots written at the worker's request).
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md` — updated (T4 status, T4 section, AC rows, next step, documentation list).
- Tool-generated (not worker-authored): `evidence\playwright\page-*.yml` and `console-*.log` written automatically on each action. The worker did not read the console logs.

No other repository file was written by T4. `tools/`, `AGENTS.md`, tutorial sources and prior experiment records were not touched.

## 7. Acceptance status (after T4)

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Supported (observed) — T1 | T1 report | — |
| AC-2 | Supported (observed, UI level) — T1; re-confirmed at T3 | T1 §4–5; T3 §1 | — |
| AC-3 | Supported (observed, UI level) — T1; lookups in T3 | T1 §7–8; T3 §4–6 | No database read |
| AC-4 | Supported (observed) — T2 | T2 report | Checkout interpreted from controls and Locked By |
| AC-5 | **Supported (observed, UI and accessibility)**: Bound; Bind To `fxitms.FX_Picture`; Property Name `FX_Picture`; Property Class `FX_Picture`; inherited Binary / -1 / varbinary; every selection committed before Finish; Finish count 1; verbatim response: no displayed text | `t4-01`, `t4-snapshot-00`, `t4-snapshot-02` | Length -1 not visible in the grid (wizard only); Finish response text absent (none offered) |
| AC-6 | **Supported (observed, UI level; post-Finish, pre-close)**: Form clean, Save disabled, no unresolved error or confirmation; exactly one Bound FX_Picture property (column FX_Picture; class FX_Picture); 11 originals unchanged in readback; FX_Items still checked out to the operator | `t4-02`, `t4-03`; `t4-snapshot-01`, `-02` | Revision Num 2 unchanged (see §3); Length not in grid; no database read |
| AC-7 – AC-10 | Not started (close, reopen, recovery query, runtime check, final audit) | — | — |

## 8. Unresolved uncertainty and limitations

1. **Finish response:** no text was displayed; the observable response is the wizard closing and the status change. Whether Mongoose recorded a confirmation elsewhere is not established.
2. **Revision unchanged:** Revision Num 2 and Revision Date 10/10/2026 did not change after the property addition in the header readback. The mechanism (header refresh versus no revision bump on property add) is not established.
3. **Length -1 not in grid:** the new row's Length is blank in the Properties grid. The -1 value was seen only in the wizard.
4. **Grid mapping:** raw checkbox states are DOM-ordered; not header-mapped beyond T1's Required check.
5. **Form not closed:** per the brief, the Form was left open regardless of Save state.
6. UI-level and same-session only. No database read, no cache-state check, no independent session recovery.

## 9. Next permitted action (NOT started; requires separate authorization)

Save is **not** needed (the Form is clean). The next step is the close-and-reopen persistence check (AC-7): close the clean IDO Collections internal Form tab exactly once (no unsaved-changes prompt expected), reopen it exactly once through Open > Select Form (`IdoCollections`, row `IDOs / IdoCollections`), then one post-reopen exact-name query for `FX_Items` and re-read of identity, the complete property inventory, revision, Locked By and checkout state. This needs explicit authorization. The IDO Collections tab remains open at this point.
