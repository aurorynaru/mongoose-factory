# EXP-066-R2 — T5 report: Finish (once) on the configured FX_UMsDescription property; post-change inventory verified; no Save needed

- Run `R-20261012-234530-k6cU`, cycle 4, task **T5**. Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `b72df79e-fb0a-4eda-a218-8d38cb11f122`.
- Run timestamps 2026-10-12T16:00–16:01 (browser-tool evidence names). LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- Record: `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- **Outcome: Finish succeeded (one invocation, no message, no dialog; the wizard closed itself). Exactly one property was added: `FX_UMsDescription`, Bound to Column, column `FX_Description`, on the joined `fxum` table. The 12 original properties are present and unchanged in visible readback. Save was disabled after Finish, so no Save was performed. IDO Collections was NOT closed or reopened (reserved for AC-5).**

## 1. Tabs and pre-Finish gate

- Tab list (read-only), before the first tab selection: tab 0 = Web Designer (`designer/default.aspx?MGForm=FX_Items`), shown as **current**; tab 1 = Web Client (`favoriteContext=IdoPropertyWizard`).
- Tab 0 was **not acted on**: no selection, click, typing, screenshot, or snapshot other than the list output.
- Tab 1 selected once (succeeded). One fresh untargeted snapshot of the **IDO Property Wizard, page 2**.
- Gate values (snapshot, verified against the brief):

| Field | Required | Observed (verbatim) | Result |
|---|---|---|---|
| Property Name | exactly `FX_UMsDescription` | `FX_UMsDescription` | pass |
| Bind To | exactly `fxum.FX_Description` | `fxum.FX_Description` | pass |
| Property Class | blank | blank | pass |
| Data Type | String | `String` (Inherit disabled) | pass |
| Length | 50 | `50` | pass |
| Column Data Type | nvarchar | `nvarchar` | pass |
| Finish | enabled | `Finish` enabled (not disabled) | pass |
| Next | disabled (page 2) | `Next >` disabled | expected |
| Bound | from T4 page 1 | T4 page 1 showed Bound selected; page 2 has no separate binding radio | carried from T4 |

- Pre-Finish capture: `t5-01-wizard-page2-pre-finish-config.png` (viewed; shows the values above, Finish enabled, Cancel enabled).
- All gates passed. No stop condition.

## 2. Finish (one invocation)

- **Finish (1 of 1):** one click on Finish. Not retried.
- **Native response (verbatim, observed):** no dialog, alert, confirmation, warning or error text appeared. The **IDO Property Wizard** tab closed by itself. The **IDOs** tab for FX_Items became active. The status line changed from the wizard state to `New Property (IDOs 1 of 1)`.
- Capture 3 s after the click: `t5-02-finish-immediate-response-idos-tab.png` (viewed). Shows the IDOs tab with the Properties grid. The grid now includes the new row `FX_UMsDescription`.
- Snapshot after Finish: the toolbar **Save is disabled**; no dirty indicator; no dialog; no unsaved-change prompt.

## 3. Post-change inventory (AC-4)

### 3a. Identity, revision, checkout (snapshot after Finish; screenshots `t5-02`, `t5-03`, `t5-05`)

| Field | Observed |
|---|---|
| IDO Name | `FX_Items` |
| Project Name | `FX_HelloWorldProject01` |
| Revision Num | `2` (unchanged from T1 baseline) |
| Revision Date | `10/10/2026` (unchanged) |
| Locked By | `anton.ramos@3mworks.com.ph` (full value from accessibility; clipped on screen) |
| Checkout state | Checked out to the operator: **Check In** and **Undo Check Out** present and enabled |
| Access As / Label String ID / Caption | `G6R` / `oFX_Items` / `oFX_Items` |
| Toolbar Save | **disabled** |

### 3b. Tables sub-tab (view only; `t5-03`, viewed)

Two rows, no others:

| # | Table Name | Table Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_Items | fxitms | Primary Base | Inner | (blank) |
| 2 | FX_UMs | fxum | Secondary | Left Outer | `fxum.[FX_UM] = fxitms.[FX_UM]` |

### 3c. Properties (13 rows; `t5-02` rows 1–8, `t5-04` rows 6–13, `t5-05` rows 1–8)

Accessibility readback of all 13 rows after Finish (sequence column, class, property type, column, key seq, data type, length, column type):

| Row | Property Name | Seq | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type |
|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | 1 | FX_ItemBase | Bound to Column | FX_Item | 1 | (blank) | (blank) | (blank) |
| 2 | FX_Description | 2 | (none) | Bound to Column | FX_Description | 0 | String | 150 | nvarchar |
| 3 | **FX_UMsDescription** | **2** | **(none)** | **Bound to Column** | **FX_Description** | 0 | **String** | **50** | **nvarchar** |
| 4 | FX_Cost | 3 | FX_Cost | Bound to Column | FX_Cost | 0 | (blank) | (blank) | (blank) |
| 5 | FX_UM | 4 | FX_UM | Bound to Column | FX_UM | 0 | (blank) | (blank) | (blank) |
| 6 | CreatedBy | 5 | (none) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType |
| 7 | UpdatedBy | 6 | (none) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType |
| 8 | CreateDate | 7 | (none) | Bound to Column | CreateDate | 0 | Date | (blank) | CurrentDateType |
| 9 | RecordDate | 8 | (none) | Bound to Column | RecordDate | 0 | Date | (blank) | CurrentDateType |
| 10 | RowPointer | 9 | (none) | Bound to Column | RowPointer | 0 | GUID | (blank) | RowPointerType |
| 11 | NoteExistsFlag | 10 | (none) | Bound to Column | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType |
| 12 | InWorkflow | 11 | (none) | Bound to Column | InWorkflow | 0 | Byte | (blank) | FlagNyType |
| 13 | FX_Picture | 12 | FX_Picture | Bound to Column | FX_Picture | 0 | Binary | (blank) | varbinary |

- **Count: 13** = the original 12 plus exactly one added row.
- **The original 12 (rows 1, 2, 4–13 in this table) match the T1 baseline** for name, sequence, property class, property type, column name, key sequence, data type, length and column type. FX_Description still reads Length 150 and nvarchar; FX_Picture is still class FX_Picture, Binary, varbinary, in row 13 (displayed number 13; sequence 12).
- **Exactly one added property:** `FX_UMsDescription`.
  - Property Type: **Bound to Column** (the default; the readback shows the type).
  - Binding: Column Name `FX_Description`. **The grid does not show the `fxum` alias**; the alias is confirmed by the pre-Finish readback `fxum.FX_Description` (T4 and §1 of this report) and by the Tables join `fxum` (§3b). This is a limitation of the grid, not a contradiction.
  - Property Class: **blank**.
  - Data Type: **String**; Length **50**; Column Data Type **nvarchar**.
  - Sequence: **2**, **the same sequence number as FX_Description (row 2)**. This is an observed fact: the wizard assigned sequence 2 to the new property, and the original FX_Description keeps sequence 2. The grid places the new row between FX_Description and FX_Cost. Not changed here; recorded for the operator.
- Visible checkbox columns (Read Only, Required, Upper Case, Pseudo Key): the new row shows its first checkbox checked, as CreatedBy/UpdatedBy/CreateDate do. The mapping of these checkboxes to column names is **inferred** (EXP-061 limit); not asserted.

Screenshots: `t5-02` (rows 1–8 immediately after Finish), `t5-05` (rows 1–8 after a scroll-back; the new row 3 clearly visible), `t5-04` (rows 6–13 with FX_Picture as the last row).

## 4. Save state

- Toolbar Save: **disabled** after Finish (t5-02 snapshot; t5-05 toolbar shows the Save icon greyed).
- **Save count: 0.** The brief permits one Save only if the Form is left dirty; it was not dirty.

## 5. View-only actions performed after Finish

- Clicked the in-form **Tables** sub-tab (view) and then the **Properties** sub-tab (view). Mouse moved once over the grid; wheel scrolled down (+300) and back up (−600). No row was selected, edited or typed into.

## 6. Stop state

- The IDOs tab for FX_Items is active and clean (Save disabled; no dialog; no unsaved-change prompt).
- No IDO Collections close or reopen (reserved for AC-5).
- No runtime action; no Designer action; no unload, cache, FormSync or deployment.
- No second New Property, New Table, builder Add, wizard OK or Finish.

## 7. Action audit (T5, exact counts)

| Action | T5 count | Notes |
|---|---|---|
| Browser tab list (read-only) | 1 | before the first tab selection; tab 0 reported current |
| Browser tab select | 1 | tab 1 (Web Client); succeeded |
| Snapshots (explicit calls) | 2 | gate (page 2 of wizard); after Finish |
| Finds | 1 | `Properties` (tab refs; read-only) |
| Clicks | 3 | Finish (1); Tables sub-tab (1); Properties sub-tab (1) |
| Typed entries | 0 | — |
| Key presses | 0 | — |
| Mouse moves | 1 | over the property grid before scrolling |
| Mouse wheel | 2 | +300 and −600 (grid scroll only) |
| Waits | 4 | 3 s after Finish; 2 s after Tables; 2 s after Properties+scroll; 2 s after scroll-back |
| Screenshot calls | 5 | `t5-01` to `t5-05` |
| Dialogs answered | 0 | none appeared |
| Ref-not-found / timeouts | 0 / 0 | — |
| Fresh-snapshot recovery allowance used | 0 | — |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 | — |
| Direct URL navigation, refresh, restart, reauthentication | 0 | — |
| **Finish** | **1** | one invocation; native response in §2 |
| **Save** | **0** | Save disabled after Finish; not needed |
| New Property wizard invoked | 0 (T5) | opened in T4 |
| New Table / builder Add / wizard OK | 0 / 0 / 0 (T5) | — |
| Properties added | 1 (FX_UMsDescription) | T5 Finish |
| Table entries added | 0 (T5) | the one table entry was added in T3 |
| Check-in / undo checkout / second checkout | 0 / 0 / 0 | — |
| IDO Collections close / reopen | 0 / 0 | reserved for AC-5 |
| Runtime FX_Items Form open / close / reopen / interaction | 0 / 0 / 0 / 0 | — |
| Web Designer actions | 0 | tab 0 listed as current only |
| Unload / cache / FormSync / deployment / regeneration | 0 | — |

Total explicit browser calls (T5): tab list 1; tab select 1; snapshots 2; finds 1; clicks 3; mouse move 1; wheel 2; waits 4; screenshots 5 = **20**.

### Cumulative (T1 + T2 + T3 + T4 + T5), exact

| Action | T1 | T2 | T3 | T4 | T5 | Total |
|---|---|---|---|---|---|---|
| New Table invoked | 0 | 1 | 0 | 0 | 0 | **1** |
| Table Name Tab commit | 0 | 1 | 0 | 0 | 0 | **1** |
| Table Alias Tab commit | 0 | 0 | 1 | 0 | 0 | **1** |
| Builder Add | 0 | 0 | 1 | 0 | 0 | **1** |
| Typed join text | 0 | 0 | 0 | 0 | 0 | **0** |
| Wizard OK (table) | 0 | 0 | 1 | 0 | 0 | **1** |
| Table entries added | 0 | 0 | 1 | 0 | 0 | **1** (FX_UMs / fxum) |
| New Property wizard invoked | 0 | 0 | 0 | 1 | 0 | **1** |
| Next (wizard page) | 0 | 0 | 0 | 1 | 0 | 1 (navigation) |
| Finish | 0 | 0 | 0 | 0 | 1 | **1** |
| Save | 0 | 0 | 0 | 0 | 0 | **0** |
| Properties added | 0 | 0 | 0 | 0 | 1 | **1** (FX_UMsDescription) |
| Check-in / undo checkout | 0 | 0 | 0 | 0 | 0 | **0** |
| IDO Collections close / reopen | 0 | 0 | 0 | 0 | 0 | **0 / 0** |
| Runtime close / reopen | 0 | 0 | 0 | 0 | 0 | **0 / 0** |
| Unload / cache / FormSync / deployment | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Explicit browser calls | 20 | 17 | 38 | 25 | 20 | **120** |

## 8. Worker-written file inventory (cumulative, T1–T5)

- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created at T1; updated at T2–T5).
- `evidence/EXP-066-R2/T1-report.md`, `T2-report.md`, `T3-report.md`, `T4-report.md`, `T5-report.md` (this file).
- Screenshots:
  - T1: `t1-01-webclient-initial-state-idos-reused.png`; `t1-02-idos-FX_Items-after-f4-settled.png` (misnamed: Filter in Place state); `t1-03-idos-FX_Items-query-settled-identity-tables.png` (misnamed: identity and rows 1–8); `t1-04-ido-tables-baseline-one-entry.png`; `t1-05-final-state-idos-checked-out-save-disabled.png`.
  - T2: `t2-01-pre-new-table-tables-view-one-entry.png`; `t2-02-new-table-wizard-opened-blank-defaults.png`; `t2-03-table-name-typed-before-tab.png`; `t2-04-table-name-after-tab-commit.png`.
  - T3: `t3-01-wizard-precheck-before-alias.png`; `t3-02-alias-fxum-after-tab.png`; `t3-03-builder-first-column-list-open.png`; `t3-04-builder-table-name-list-open.png`; `t3-05-builder-second-column-list-open.png`; `t3-06-wizard-builder-configured-before-add.png`; `t3-07-join-text-after-builder-add.png`; `t3-08-tables-view-after-ok.png`.
  - T4: `t4-01-tables-panel-two-entries-before-close.png`; `t4-02-new-property-wizard-page1-initial.png`; `t4-03-wizard-page2-initial-before-bind.png`; `t4-04-bind-to-list-open.png`; `t4-05-bind-to-fxum-committed-autofill-before-rename.png`; `t4-06-wizard-configured-before-finish.png`.
  - T5: `t5-01-wizard-page2-pre-finish-config.png`; `t5-02-finish-immediate-response-idos-tab.png`; `t5-03-post-finish-tables-subtab.png`; `t5-04-post-finish-property-inventory-rows-9-13.png`; `t5-05-post-finish-property-inventory-rows-1-5-new-row.png`.
- Tool-written (not worker-authored; outside the EXP-066-R2 path; reported in tool outputs): `evidence/playwright/` files from this task, including `console-2026-10-12T16-00-31-527Z.log` and `page-2026-10-12T16-00-39-740Z.yml` through `page-2026-10-12T16-01-23-484Z.yml`. The full set is not enumerated. The harness and the operator's git review are authoritative.

## 9. Decisive evidence (what each T5 screenshot proves and does not)

- **`t5-01`** (pre-Finish; viewed): proves page 2 with Bind To `fxum.FX_Description`, Property Name `FX_UMsDescription`, Property Class blank, String, Length 50, nvarchar, Finish enabled, Next disabled. Does not prove the property was added (no Finish yet).
- **`t5-02`** (3 s after Finish; viewed): proves the wizard closed; IDOs tab active; status `New Property (IDOs 1 of 1)`; toolbar Save greyed; rows 1–8 include row 3 `FX_UMsDescription` (Bound to Column, FX_Description, String, 50, nvarchar). Does not show rows 9–13 (see `t5-04`) or the alias binding (the grid shows the column name only).
- **`t5-03`** (Tables sub-tab; viewed): proves two Tables rows: FX_Items/fxitms/Primary Base/Inner and FX_UMs/fxum/Secondary/Left Outer with `fxum.[FX_UM] = fxitms.[FX_UM]`. Does not prove database state.
- **`t5-04`** (rows 6–13 after scroll; viewed): proves the bottom rows, ending with FX_Picture as the 13th row (class FX_Picture, Binary, varbinary); total 13. Does not show rows 1–5 (see `t5-05`).
- **`t5-05`** (rows 1–8 after scroll-back; viewed): proves the new row 3 sits among the originals with no class; header and identity fields (Revision 2, 10/10/2026; Locked By the operator; Check In and Undo Check Out enabled; project FX_HelloWorldProject01).

Limitations: UI and accessibility level; the new property's alias binding (`fxum`) is not shown in the post-Finish grid; the sequence 2 duplicate is a grid readback; no database read; checkbox column mapping inferred.

## 10. Acceptance status (T5)

- **AC-3: SUPPORTED (observed; UI and accessibility level).** One New Property wizard (T4); Bound (default, unchanged); Bind To `fxum.FX_Description` (readback, T4 and T5 gate); Property Name `FX_UMsDescription`; Property Class blank; other fields at their observed defaults (String, 50, nvarchar); **Finish once** with native response recorded (§2: no message, wizard closed); **Save count 0** (not needed).
  - Limits: the Finish response has no visible text; the grid does not show the alias.
- **AC-4: SUPPORTED for the visible inventory (observed).** Exactly one added property `FX_UMsDescription` (Bound to Column; column FX_Description; String; 50; nvarchar; no class); the 12 original properties unchanged in readback (§3c); IDO still checked out to the operator (§3a); revision 2 / 10/10/2026 recorded (unchanged).
  - Limits: the alias binding is not visible in the grid; sequence 2 shared with FX_Description.
- AC-1, AC-2: supported (T1, T2, T3; re-checked in the Tables readback §3b).
- AC-5: **not executed** (IDO Collections close/reopen reserved for the next authorised task).
- AC-6: **not executed** (runtime Form not touched).
- AC-7: no change beyond the one table entry (T3), the one property (T5), and the wizard navigation (T4); no unload.
- AC-8: partial (T1–T5 audits and inventories recorded; final report reserved).

## 11. Final UI state

- Tab 1 (Web Client) selected. The active tab is **IDOs** for FX_Items, on the **Properties** sub-tab, scrolled back to the top (rows 1–8 visible). Save disabled. Revision 2; Locked By the operator; Check In and Undo Check Out enabled; 13 property rows.
- The IDO Property Wizard tab is **closed** (it closed itself on Finish).
- No browser-native dialog; no unsaved-change prompt observed.
- Tab 0 (Web Designer): not acted on.
- The inherited FX_Items runtime tab: not acted on.

## 12. Next permitted step

AC-5: close the clean IDO Collections (IDOs) Form once and reopen it once through Form > Open > Select Form; one exact-name F4 query for FX_Items; re-verify the Tables view (two entries), the 13-row property inventory with FX_UMsDescription, and the checkout state. Then AC-6 (runtime close/reopen, three records) under the brief's rules. Neither has been performed; both need the next authorised task.
