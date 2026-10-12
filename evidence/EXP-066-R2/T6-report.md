# EXP-066-R2 — T6 report: AC-5 only: IDO Collections closed once, reopened once through Form > Open > Select Form; one exact-name F4 query; post-reopen verification (observed only)

- Run `R-20261012-234530-k6cU`, cycle 5, task **T6**. Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `cea96483-c910-46a9-9e4b-8a7e955c53d8`.
- Browser evidence timestamps 2026-10-12T16:04–16:06 (tool names). LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- Record: `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- **Outcome: AC-5 SUPPORTED (observed; UI and accessibility level).** The IDOs Form was closed once with its own tab-close control and reopened once through Form > Open > Select Form (`IDOs / IdoCollections`). One exact-name query for FX_Items returned exactly one IDO. After reopen the identity, the 13-property inventory (including FX_UMsDescription), the two-entry Tables inventory with the join, and the checkout state (Locked By the operator; Check In and Undo Check Out enabled) all match the T4/T5 readbacks. **No change was made.** The runtime FX_Items Form was not closed, reopened or interacted with (AC-6 not executed).

## 1. Tabs and pre-close gate

- Tab list (read-only), before the first tab selection: tab 0 = Web Designer (`designer/default.aspx?MGForm=FX_Items`), shown **current**; tab 1 = Web Client (`favoriteContext=IdoCollections`).
- Tab 0 was **not acted on**: not selected, not clicked, not typed, not screenshotted.
- Tab 1 selected once (succeeded). Fresh untargeted snapshot.
- Pre-close gate (snapshot; `t6-01`, viewed):

| Check | Observed |
|---|---|
| Active Form | IDOs tab for FX_Items (tabs: FX_Items runtime, IDOs) |
| Save (toolbar) | **disabled** (clean) |
| Dialog / wizard | none open; no unsaved-change prompt |
| IDO Name / Revision | `FX_Items` / Revision Num `2`, Revision Date `10/10/2026` |
| Project | `FX_HelloWorldProject01` |
| Locked By / checkout | `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled |
| Properties | 13 rows (FX_UMsDescription at row 3; FX_Picture at row 13) |

Gate passed. No stop condition.

## 2. Close the IDOs Form (one invocation)

- One click on the IDOs tab's `Close Panel IDOs` control (its own Form-tab close). Not retried.
- Clean close: **no unsaved-change prompt, no dialog**. The IDOs tab was removed. The active tab became the **FX_Items runtime** Form (`favoriteContext=FX_Items`; Object 1 of 3; dumbbell / 45 pound iron / 45.00 / EA; toolbar Save disabled). Not acted on (`t6-02`, viewed).
- The runtime tab was **not** closed.

## 3. Reopen IDO Collections (one route)

- Form menu clicked (1). The Form menu showed `Open`, `Close and Save Changes` and further items. The **Close and Save Changes** item was **not** clicked.
- `Open` clicked (1). Submenu opened (`t6-03`).
- `Select Form` dialog (`t6-03`, viewed): filter pre-filled `IdoCollections`; rows `G6RIdoCollectionSearch` and **`IDOs` / `IdoCollections`** (selected/highlighted); buttons OK, Cancel, Help.
- OK clicked (1). Dialog closed (in-form dialog answered: 1). URL became `favoriteContext=IdoCollections`.
- Reopened IDOs Form, settle 3 s, `t6-04` (viewed): the form opened in **Filter in Place** mode with blank criteria (status `Filter in Place`; IDO Name criterion focused and empty). **No record was shown at this point. This was not treated as a result.** Save disabled. The blank Check Out button shown here is the empty-criteria state, not a checkout action.

## 4. Exact-name query (one F4)

- The IDO Name criterion was filled with `FX_Items` (one typed entry).
- **F4 (1 of 1)** pressed once. Settled after 3 s; `t6-05` (viewed).
- Result: status **`Description (IDOs 1 of 1)`**; **one row** (`FX_Items`, `IDOs 1 of 1`).
- The first F4 of this reopen was not needed; the reopened form was already in Filter in Place with empty criteria, and the single F4 executed the query. **No second F4 was pressed.** The brief's stop rule about a first F4 that only enters Filter in Place did not apply: the one F4 produced a result.

## 5. Post-reopen identity, checkout and revision (AC-5)

Readback (accessibility after the query; `t6-05`, `t6-06`):

| Field | Observed |
|---|---|
| IDO Name | `FX_Items` |
| Project Name | `FX_HelloWorldProject01` |
| Base table / alias / table type | per Tables readback: `FX_Items` / `fxitms` / `Primary Base` |
| Revision Num | `2` (matches T1 and T5) |
| Revision Date | `10/10/2026` (matches) |
| Locked By | `anton.ramos@3mworks.com.ph` (full value from accessibility; clipped on screen) |
| Checkout state | Checked out to the operator: **Check In** and **Undo Check Out** present and enabled |
| Access As / Label / Caption | `G6R` / `oFX_Items` / `oFX_Items` |
| Toolbar Save | **disabled** (clean) |
| Status after query | `Description (IDOs 1 of 1)` |

Note: the Description textbox received focus after the query settled. **No text was typed into it.**

## 6. Property inventory after reopen (13 rows; compared with T1 and T5 baselines)

Accessibility readback (Properties sub-tab; view only; `t6-06` rows 1–8, `t6-07` rows 6–13):

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

Comparison:
- **Count: 13** = original 12 + exactly one `FX_UMsDescription`. **Exactly one** FX_UMsDescription row.
- **FX_UMsDescription**: Property Type **Bound to Column**; Column Name **FX_Description**; String; Length **50**; Column Type **nvarchar**; **blank Property Class**. Sequence observed as **2** (not edited; same number as FX_Description, as recorded in T5).
- **12 originals unchanged** against the T1 baseline and the T5 post-Finish readback: names, sequences, classes, property types, column names, key sequences, data types, lengths and column types all match. FX_Description still 150 / nvarchar; FX_Picture still class FX_Picture / Binary / varbinary (sequence 12, displayed row 13).
- **The grid does not show the `fxum` alias** for FX_UMsDescription. The Column Name column reads `FX_Description`, which is the same column name the base `FX_Description` uses. The association to the joined `fxum` table therefore rests on: the pre-Finish Bind To readback `fxum.FX_Description` (T4, T5 gate) and the persisted Tables join `fxum` (below). See §8.

Screenshots: `t6-06` (rows 1–8 incl. row 3 FX_UMsDescription), `t6-07` (rows 6–13 incl. FX_Picture row 13).

## 7. Tables inventory after reopen (AC-5)

Accessibility readback (Tables sub-tab; view only; `t6-08`, viewed):

| # | Table Name | Table Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_Items | fxitms | Primary Base | Inner | (blank) |
| 2 | FX_UMs | fxum | Secondary | Left Outer | `fxum.[FX_UM] = fxitms.[FX_UM]` |

- Exactly these two rows; no other entry. Status line showed `Ta&bles` / `Tables` (view only).
- Matches the AC-2 readback (T3) and the T5 post-Finish Tables view.

## 8. Alias limitation (stated expressly)

- **A native read-only property-detail surface that visibly provides the joined-table alias was NOT found in this step.** The post-reopen Properties grid exposes only the Column Name (`FX_Description`). Selecting a property row to open its detail was **not** done (it would be a row interaction outside the brief's view-only scope).
- Therefore the post-reopen grid does **not** independently expose `fxum` for FX_UMsDescription. The association `FX_UMsDescription` → `fxum.FX_Description` rests on the earlier wizard evidence (T4 §6–8; T5 §1 Bind To readback `fxum.FX_Description`) together with the persisted Tables join entry for `fxum` (§7).
- This does not prove the saved binding in the database.

## 9. Cumulative confirmations at close/reopen

- IDO Collections closed **1** time; reopened **1** time (Select Form OK 1; in-form dialog answered 1).
- Exact-name F4 queries after reopen: **1**. Result: one matching IDO.
- No change was made after reopen: no Save, no wizard, no New Property, no New Table, no builder Add, no Finish, no Check In, no Undo Check Out, no runtime action.

## 10. Action audit (T6, exact counts)

| Action | T6 count | Notes |
|---|---|---|
| Browser tab list (read-only) | 1 | before the first tab selection; tab 0 reported current |
| Browser tab select | 1 | tab 1 (Web Client); succeeded |
| Browser snapshot calls (explicit) | 5 | pre-close gate; post-close; after reopen; after F4 (refs); post-scroll accessibility readback |
| Finds | 3 | `Open` (Form menu); `Select Form`; `OK` (dialog) |
| Clicks | 6 | `Close Panel IDOs` (1); Form menu (1); `Open` menu item (1); Select Form `OK` (1); Properties sub-tab (1); Tables sub-tab (1) |
| Typed entries | 1 | `FX_Items` into the IDO Name criterion (one entry) |
| Key presses | 1 | F4 (one) |
| Enter / Tab key presses | 0 / 0 | — |
| Mouse moves | 1 | over the property grid before scrolling |
| Mouse wheel | 1 | +300 (grid scroll only) |
| Waits | 7 | 2 s after close; 2 s after Open; 3 s after OK; 3 s after F4; 2 s after Properties; 2 s after scroll; 2 s after Tables |
| Screenshot calls | 8 | `t6-01` to `t6-08` |
| Dialogs answered | 1 | Select Form OK (in-form dialog; counted, not a confirmation) |
| Ref-not-found / timeouts | 0 / 0 | — |
| Fresh-snapshot recovery allowance used | 0 | — |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 | — |
| Direct URL navigation, refresh, restart, reauthentication | 0 | — |
| **IDO Collections close** | **1** | own Form-tab close (`Close Panel IDOs`); clean |
| **IDO Collections reopen** | **1** | Form > Open > Select Form (`IDOs / IdoCollections`) |
| Finish / Save / New Property / New Table / builder Add / wizard OK | 0 | — |
| Check-in / Undo Check Out / second checkout | 0 / 0 / 0 | — |
| Runtime FX_Items Form close / reopen / interaction | 0 / 0 / 0 | not touched (AC-6 pending) |
| Web Designer actions | 0 | tab 0 listed as current only |
| Unload / cache / FormSync / deployment / regeneration | 0 | — |

Total explicit browser calls (T6): tab list 1; tab select 1; snapshots 5; finds 3; clicks 6; type 1; key press 1; mouse move 1; wheel 1; waits 7; screenshots 8 = **35**.

### Cumulative (T1–T6), exact

| Action | T1 | T2 | T3 | T4 | T5 | T6 | Total |
|---|---|---|---|---|---|---|---|
| New Table invoked | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Table Name Tab commit | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Table Alias Tab commit | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Builder Add | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Typed join text | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Wizard OK (table) | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Table entries added | 0 | 0 | 1 | 0 | 0 | 0 | **1** (FX_UMs / fxum) |
| New Property wizard invoked | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Finish | 0 | 0 | 0 | 0 | 1 | 0 | **1** |
| Save | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Properties added | 0 | 0 | 0 | 0 | 1 | 0 | **1** (FX_UMsDescription) |
| Check-in / undo checkout | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| IDO Collections close / reopen | 0 | 0 | 0 | 0 | 0 | 1 / 1 | **1 / 1** |
| Runtime close / reopen | 0 | 0 | 0 | 0 | 0 | 0 | **0 / 0** |
| Unload / cache / FormSync / deployment | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Explicit browser calls | 20 | 17 | 38 | 25 | 20 | 35 | **155** |

## 11. Worker-written file inventory (cumulative, T1–T6)

- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created at T1; updated at T2–T6).
- `evidence/EXP-066-R2/T1-report.md`, `T2-report.md`, `T3-report.md`, `T4-report.md`, `T5-report.md`, `T6-report.md` (this file).
- Screenshots:
  - T1: `t1-01-webclient-initial-state-idos-reused.png`; `t1-02-idos-FX_Items-after-f4-settled.png` (misnamed: Filter in Place state); `t1-03-idos-FX_Items-query-settled-identity-tables.png` (misnamed: identity and rows 1–8); `t1-04-ido-tables-baseline-one-entry.png`; `t1-05-final-state-idos-checked-out-save-disabled.png`.
  - T2: `t2-01-pre-new-table-tables-view-one-entry.png`; `t2-02-new-table-wizard-opened-blank-defaults.png`; `t2-03-table-name-typed-before-tab.png`; `t2-04-table-name-after-tab-commit.png`.
  - T3: `t3-01-wizard-precheck-before-alias.png`; `t3-02-alias-fxum-after-tab.png`; `t3-03-builder-first-column-list-open.png`; `t3-04-builder-table-name-list-open.png`; `t3-05-builder-second-column-list-open.png`; `t3-06-wizard-builder-configured-before-add.png`; `t3-07-join-text-after-builder-add.png`; `t3-08-tables-view-after-ok.png`.
  - T4: `t4-01-tables-panel-two-entries-before-close.png`; `t4-02-new-property-wizard-page1-initial.png`; `t4-03-wizard-page2-initial-before-bind.png`; `t4-04-bind-to-list-open.png`; `t4-05-bind-to-fxum-committed-autofill-before-rename.png`; `t4-06-wizard-configured-before-finish.png`.
  - T5: `t5-01-wizard-page2-pre-finish-config.png`; `t5-02-finish-immediate-response-idos-tab.png`; `t5-03-post-finish-tables-subtab.png`; `t5-04-post-finish-property-inventory-rows-9-13.png` (file name says 9–13; view showed rows 6–13); `t5-05-post-finish-property-inventory-rows-1-5-new-row.png` (view showed rows 1–8).
  - T6: `t6-01-pre-close-idos-clean-13-properties-checked-out.png`; `t6-02-post-close-idos-tab-closed-runtime-tab-active.png`; `t6-03-form-open-submenu-before-select-form.png`; `t6-04-idos-reopened-via-select-form-initial.png`; `t6-05-idos-exact-query-f4-settled.png`; `t6-06-reopened-properties-upper-rows-1-8.png`; `t6-07-reopened-properties-lower-rows-6-13.png`; `t6-08-reopened-tables-inventory-two-entries.png`.
- Tool-written (not worker-authored; outside the EXP-066-R2 path; reported in tool outputs): `evidence/playwright/` files from this task, including `console-2026-10-12T16-04-25-764Z.log` and page snapshots `page-2026-10-12T16-04-32-827Z.yml` through `page-2026-10-12T16-05-44-109Z.yml` (the full set is not enumerated). The harness and the operator's git review are authoritative.

## 12. Decisive evidence (what each T6 screenshot proves and does not)

- **`t6-01`** (pre-close; viewed): proves the clean IDOs Form for FX_Items, Revision 2 / 10/10/2026, Locked By the operator, Check In enabled, Save disabled, rows 1–8 incl. row 3 FX_UMsDescription. Does not show rows 9–13 (see `t6-07`) or the Tables view.
- **`t6-02`** (after the IDOs close; viewed): proves the IDOs tab is gone and the FX_Items runtime Form is the only Form (Object 1 of 3; Save disabled). No dialog. Does not prove reopen.
- **`t6-03`** (Select Form dialog; viewed): proves the route dialog with the `IDOs / IdoCollections` row highlighted and filter `IdoCollections`. Does not prove the reopened form.
- **`t6-04`** (reopened, before query; viewed): proves the form opened in Filter in Place with blank criteria and Save disabled. Does not show a record (not a result).
- **`t6-05`** (after one F4; viewed): proves status `Description (IDOs 1 of 1)`; one FX_Items row; project FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By the operator; Check In and Undo Check Out enabled; the Tables sub-tab shows the two rows with the join. Does not show the property inventory (see `t6-06`, `t6-07`).
- **`t6-06`** (reopened Properties rows 1–8; viewed): proves FX_UMsDescription at row 3 (Bound to Column; FX_Description; String; 50; nvarchar) among the originals; sequence 2 shown. Does not show rows 9–13 or the alias.
- **`t6-07`** (reopened Properties rows 6–13; viewed): proves rows 6–13 incl. FX_Picture at row 13 (Binary, varbinary, class FX_Picture). Total 13 with `t6-06`.
- **`t6-08`** (reopened Tables; viewed): proves exactly two entries: FX_Items / fxitms / Primary Base / Inner and FX_UMs / fxum / Secondary / Left Outer, join `fxum.[FX_UM] = fxitms.[FX_UM]`. Does not prove database state.

Limitations of the screenshots: UI and accessibility level; the reopened grid does not show the `fxum` alias; Locked By clipped on screen (full value from accessibility); no database read.

## 13. Acceptance status (T6)

- **AC-5: SUPPORTED (observed; UI and accessibility level).**
  - IDO Collections closed once (own control; clean; no prompt) and reopened once (Form > Open > Select Form; `IDOs / IdoCollections`).
  - One exact-name F4 query (after one typed `FX_Items`): one matching IDO.
  - Tables view matches AC-2 (two entries, join text `fxum.[FX_UM] = fxitms.[FX_UM]`).
  - Property inventory with FX_UMsDescription matches AC-4 (13 rows; the added row Bound to Column, FX_Description, String 50 nvarchar, no class; the 12 originals unchanged).
  - Checkout state matches AC-4 (Locked By the operator; Check In and Undo Check Out enabled); revision 2 / 10/10/2026 unchanged.
  - Limits: the grid does not show the `fxum` alias; the association is carried by the earlier wizard evidence and the Tables join; persistence is observed through the UI close/reopen only, not a database read.
- AC-1, AC-2, AC-3, AC-4: supported (T1–T5); re-verified in T6 at the UI level.
- AC-6: **not executed** (runtime Form not closed or reopened; this step was AC-5 only).
- AC-7: no other change in T6 (see §10).
- AC-8: partial (T1–T6 audits and inventories recorded; the final report is reserved for the completion of AC-6).

## 14. Blockers and open questions

- **No blocker in T6.** The reopen route worked; the first F4 after the query-criterion entry produced a settled result; no dialog or challenge appeared.
- Open: whether the saved binding is `fxum.FX_Description` at the persistence level. The grid does not show the alias; a read-only property-detail readback would be needed. Not established here.
- Open: the shared sequence 2 (FX_UMsDescription and FX_Description). Observed; intent unresolved; not edited.
- Open: the Length 50 for the joined column versus 150 for the base column. Observed; not checked against SQL.
- Open: AC-6 (runtime close and reopen; dumbbell, eggs, guitar; Form clean). Not part of this step.

## 15. Final UI state

- Tab 1 (Web Client) selected. The active tab is **IDOs** for FX_Items (reopened), on the **Tables** sub-tab. Revision 2; Locked By the operator; Check In and Undo Check Out enabled; Save **disabled**; no wizard; no dialog; no unsaved-change prompt. The Form is clean and open, as the brief requires.
- The FX_Items runtime tab (inherited instance; Object 1 of 3) is **still open and was not acted on**.
- Tab 0 (Web Designer): not acted on.
- No browser-native dialog.

## 16. Next permitted step

AC-6 (a separate authorised step): close the FX_Items runtime Form once and reopen it once through Form > Open > Select Form; verify dumbbell, eggs and guitar load and the Form is clean; make no record edits. Not performed in T6. Any alias-level persistence check would need a read-only property-detail readback, which requires a separate instruction.
