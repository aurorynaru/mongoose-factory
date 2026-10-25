# EXP-134 T15 checkpoint (paired close/reopen persistence check for the IDO and Sql Tables; NO check-in; NO Finish; NO Save)

Run R-20261026-031627-MXfT · cycle 21 · task T15 · worker session `0ff294ac-6504-443b-813c-3b9d84ef4cd8` · task_message_id `eb133f64-3440-4e3a-a672-52747316ec80`. Date 2026-10-26 (tool-written snapshot and console names use UTC 2026-10-25T20:47–20:52).

## Result

- **AC-8 PASSED at UI level** (qualified: a single pre-close and post-reopen pair per Form; no independent database query). Both maintenance Forms closed through their native Close Panel controls with no unsaved-change prompt, were reopened through Open → Select Form, and returned the exact-name rows with values matching the pre-close baseline.
- Identity and configuration were verified at the start: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No Session Expired modal, sign-in form or portal navigation occurred.
- Check-in, Check Out, Undo Check Out, Save, Finish, Add Row, Delete, wizard launch, record creation and SQL execution: **0 each**.

## Preflight (before any close)

| Gate | Observed | Evidence |
|---|---|---|
| Tab list (read-only), then select tab 3 | Tab 3 = Web Client `Mongoose`; select succeeded on the first attempt | tool output |
| Fresh snapshot | Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no modal; IDOs panel active | snapshot `evidence/playwright/page-2026-10-25T20-47-…` (tool-written); inline snapshot |
| IDO pre-close state | Row FX_InventoryItems; Revision Num 2; Revision Date 10/25/2026; Locked By blank; Check Out enabled; Undo Check Out disabled; Save disabled; no dialog | inline snapshot; `t15-01` |
| Sql Tables pre-close state | One row FX_InventoryItems / dbo / Multi-Site unchecked; constraints PK_FX_InventoryItems and IX_FX_InventoryItems_RowPointer; Save disabled | `t15-02` |
| Sql Columns pre-close state | Status `SQL Columns 6 of 13`; detail FX_Location (Column Id 7, nvarchar, Length 100); Save disabled; no visible unsaved edit | `t15-03` |

## Pre-close baseline (IDO, Tables sub-grid, Properties)

| Item | Value | Evidence |
|---|---|---|
| Project | FX_HelloWorldProject01 | `t15-01` |
| Tables sub-grid | FX_InventoryItems / fxinv / Primary Base / Inner (one row) | `t15-01` |
| Label String ID / Caption | oFX_InventoryItems / oFX_InventoryItems | inline snapshot |
| Access As | G6R | inline snapshot |
| Properties (13 rows) | FX_Item seq 1, Key Sequence 1, Required checked, String 50, nvarchar; FX_Description 2 String 255; FX_Warehouse 3 String 100; FX_QuantityOnHand 4 Decimal 12, decimal; FX_ReorderLevel 5 Decimal 12, decimal; FX_Location 6 String 100; rows 7–13 framework (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow); Property Class blank on all business rows | inline snapshot (accessibility text, read at task start; no pre-close screenshot of the Properties grid was taken in T15) |

## Close actions (ordinary, once each)

| Step | Action | Result | Evidence |
|---|---|---|---|
| Sql Columns Close Panel (preparatory) | Clicked once (`f1e106`) | Panel closed; find shows no Sql Columns panel; no prompt; Save disabled before the click | `t15-03` (state before close); `page-2026-10-25T20-48-45-962Z.yml` (tool) |
| IDOs Close Panel (maintenance Form close 1) | Clicked once (`f1e100`) | Panel closed; find shows the IDOs panel absent; no unsaved-change or save/discard prompt | find output; tool snapshot `…20-48-54-214Z.yml` |
| Sql Tables Close Panel (maintenance Form close 2) | Clicked once (`f1e103`) | Panel closed; find shows only IDO Projects remaining; no prompt | `t15-04`; tool snapshot `…20-48-58-563Z.yml` |

## Reopen and post-reopen readback

| Step | Action | Result | Evidence |
|---|---|---|---|
| IDOs reopen | Toolbar Open once → Select Form (IdoCollections typed, Tab, row, OK once) | Form opened in Filter in Place with blank criteria | `t15-05` (dialog, prefilled `SqlTables` before retyping), `t15-06` (fresh open) |
| IDO exact-name query | IDO Name criterion `FX_InventoryItems` typed once; Tab once; criterion captured; F4 once | Criterion visible before F4 (echo row); after F4 **one row**, status `Extends (IDOs 1 of 1)`, FiP icon removed | `t15-07` (before F4), `t15-08` (settled) |
| IDOs post-reopen header | Read from `t15-08` | Project FX_HelloWorldProject01; Revision Num 2; Revision Date 10/25/2026; Locked By blank; Access As G6R; Label String ID / Caption oFX_InventoryItems; Check Out enabled; Undo Check Out disabled | `t15-08` |
| IDOs post-reopen Tables | Read from `t15-08` | FX_InventoryItems / fxinv / Primary Base / Inner | `t15-08` |
| IDOs post-reopen Properties | Properties sub-tab clicked once (read-only) | Rows 1–8 visible and match: FX_Item seq 1, Key Sequence 1, Required checked; FX_Description 2 String 255; FX_Warehouse 3 String 100; FX_QuantityOnHand 4 Decimal 12 decimal; FX_ReorderLevel 5 Decimal 12 decimal; FX_Location 6 String 100; CreatedBy 7; UpdatedBy 8. Rows 12 and 13 (NoteExistsFlag, InWorkflow) confirmed present by find with the same flags. Rows 9–11 not re-read visually after reopen | `t15-09` |
| Sql Tables reopen | Toolbar Open once → Select Form (SqlTables typed, Tab, row, OK once) → caution alertdialog OK once | Form opened in Filter in Place with blank criteria row (no add-mode placeholder) | `t15-10` |
| Sql Tables exact-name query | Table Name criteria cell clicked once (activated), criterion `FX_InventoryItems` typed once in the grid combobox, Tab once, criterion captured, F4 once | Before F4: criterion in the grid cell, Schema criteria cell active and empty. After F4: **one row**, FX_InventoryItems / dbo / Multi-Site unchecked; status `Schema (SQL Tables 1 of 1)`; PK_FX_InventoryItems (Primary Key, FX_Item) and IX_FX_InventoryItems_RowPointer (Index, RowPointer); Save disabled | `t15-11` (before F4), `t15-12` (settled) |
| Sql Columns (opened from the reopened row, once: `Columns...`) | 13 rows; detail FX_Item: Column Id 2, nvarchar, Length 50, Is Nullable unchecked, Primary Key checked, Key Sequence 1, Schema dbo, Table FX_InventoryItems. Grid System Data Type / Length for rows 1–13: nvarchar 50, nvarchar 255, nvarchar 100, decimal 12, decimal 12, nvarchar 100, nvarchar 128, nvarchar 128, datetime, datetime, uniqueidentifier, tinyint, tinyint. Decimal Position: row 4 = 2, row 5 = 2, others blank. Defaults: rows 7–8 suser_sname(), rows 9–10 getdate(), row 11 newid(), rows 12–13 (0) | `t15-13` (detail, FX_Item); `t15-14` (first wheel, no visible scroll); `t15-15` (overshoot: Key Sequence and Definition); `t15-16` (Default Value and framework defaults); `t15-17` (Length, Decimal Position 2 on rows 4–5, Default Value) |
| Sql Columns close | Close Panel once (`f1e3304`) after the readback; no prompt; Save disabled | Panel closed | tool snapshot `page-2026-10-25T20-51-53-764Z.yml` |

Note: `t15-14`, `t15-15` and `t15-16` were also captured while the Sql Columns Column Name combobox held focus (text selected). No text was typed into it. The scroll attempts used the mouse wheel over the grid after a hover (no click). An earlier `mouse_move` at (400,275) and a later wheel were coordinate-based, and no row was selected by them.

## Persistence matrix (pre-close versus post-reopen)

| Item | PRE-CLOSE | POST-REOPEN | Verdict |
|---|---|---|---|
| IDO row (count) | 1 (FX_InventoryItems) | 1 (`Extends (IDOs 1 of 1)`) | Same |
| Project | FX_HelloWorldProject01 | FX_HelloWorldProject01 | Same |
| Revision Num / Date | 2 / 10/25/2026 | 2 / 10/25/2026 | Same |
| Locked By | blank | blank | Same |
| Check Out / Undo | enabled / disabled | enabled / disabled | Same |
| Label String ID / Caption / Access As | oFX_InventoryItems / oFX_InventoryItems / G6R | same | Same |
| Tables (base table, alias, type, join) | FX_InventoryItems / fxinv / Primary Base / Inner | same | Same |
| Properties rows 1–8 (names, sequence, key, required, type, length) | as baseline above | as read in `t15-09` | Same |
| Properties rows 9–11 | in pre-close snapshot | not re-read visually | Not re-verified |
| Properties rows 12–13 | in pre-close snapshot | present in DOM with the same flags | Same (find-based) |
| Sql Tables row (count) | 1 (FX_InventoryItems / dbo) | 1 (FX_InventoryItems / dbo) | Same |
| Sql constraints | PK_FX_InventoryItems (FX_Item); IX_FX_InventoryItems_RowPointer | same | Same |
| Sql Columns count | 13 (from T13; FX_Location detail at pre-close `t15-03`) | 13 | Same |
| Sql Columns business types and lengths | nvarchar 50 / 255 / 100; decimal 12 ×2; nvarchar 100 (T13) | same | Same |
| Decimal Position rows 4–5 | 2 (T13, accessibility text) | 2 (`t15-16`/`t15-17`) | Same |

## Acceptance matrix (T15 scope; final matrix reserved for T16)

| AC | Status | Basis |
|---|---|---|
| **AC-8** | **PASSED (UI level; qualified)**: both Forms closed by native Close Panel with no prompt; reopened through Open / Select Form; exact-name queries independently returned one row each; post-reopen values match the pre-close baseline. Qualifiers: one pair only; pre-close baseline is UI state in the same session; Properties rows 9–11 not re-read visually; no database-level verification | `t15-01`, `t15-02`, `t15-04`, `t15-06`, `t15-07`, `t15-08`, `t15-09`, `t15-10`, `t15-11`, `t15-12`, `t15-13` |
| AC-5 (re-observed) | Re-observed after reopen: project, base table, alias, six business properties with types, lengths, FX_Item key and Required. Precision not shown at IDO level (unchanged limitation) | `t15-08`, `t15-09` |
| AC-6 (re-observed) | Re-observed after reopen: dbo.FX_InventoryItems, 13 columns, business types and lengths, decimal positions 2, FX_Item key and not nullable. Still Mongoose UI metadata, not a database query | `t15-12`, `t15-13`, `t15-16`/`t15-17` |
| AC-7 (carried) | Not re-performed. Post-reopen Check Out is enabled and Undo disabled, consistent with the T14 post-check-in state. External source-control integration is disabled (notice recorded in T14) | `t15-08` |
| AC-9 (T15 portion) | Passed: no Finish, no check-in, no Save, no Undo / Check Out, no record or editor Form, no metadata unload, FormSync or generated script, no non-FX_ change | Action audit below |
| AC-10 (T15 portion) | Evidence written for this task (`T15-checkpoint.md`, `t15-01`–`t15-17`) and the experiment record updated. The final matrix and repository change inventory are reserved for T16 | — |

## Action audit (T15)

| Operation | Count |
|---|---|
| Tab list (explicit) / tab select | 1 / 1 (tab 3, first attempt) |
| Fresh untargeted snapshots (inline) | 1 |
| Targeted snapshots (read-only: dialog, filter, grid) | 5 |
| Panel-tab clicks (read-only navigation: IDOs Tables, IDOs Properties, Sql Tables, Sql Columns) | 4 |
| Close Panel actions | **4 total**: Sql Columns 2 (one before the reopens, one after the readback), IDOs 1, Sql Tables 1 |
| Toolbar Open | 2 (IDOs, Sql Tables) |
| Select Form opens / filter entries / OK | 2 / 2 (`IdoCollections`, `SqlTables`) / 2 |
| Caution alertdialog OK | 1 (informational; Sql Tables reopen) |
| Criterion entries | 2 (IDO Name `FX_InventoryItems`; Table Name `FX_InventoryItems`) |
| Tab keys | 4 (two filter commits; two criterion commits) |
| **F4** | **2** (one per exact-name query) |
| Columns… opens | 1 |
| Hover / mouse move / horizontal wheel | 1 / 1 / 4 (no row selected; one wheel had no visible effect) |
| Screenshots (worker-saved PNG) | 17 (`t15-01` to `t15-17`) |
| **Check In / Check Out / Undo Check Out** | **0 / 0 / 0** |
| **Finish / Create Form response** | **0 / 0** |
| Save / Revert / New / Delete / Refresh / Add Row / Update Current Table | 0 |
| Property or column edits; Property Class lookup; Label String ID edits | 0 |
| Record creation; inventory editor Form; metadata unload; FormSync; generated script; direct SQL | 0 |
| Browser JavaScript / evaluate / run-code / internal APIs (worker-authored) | 0 |
| Ref-not-found / timeouts | 0 / 0 |
| Fresh-snapshot recovery allowance used | 0 |
| Session Expired / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Designer tabs 0–2 | Not selected or touched |
| Non-FX_ artifact mutation | 0 |

## Session and console health (read-only)

- Page metadata at every snapshot in this task: `Console: 14 errors, 10 warnings` (unchanged from the T14 baseline).
- The tool-written console log for this task (`evidence/playwright/console-2026-10-25T20-47-58-555Z.log` to `…-557Z.log`) records, for the Web Client, the recurring `401` from `yggdrasil.inforcloudservices.com/yggdrasil/security/refresh` and two `getSSOToken: Token expired` INFO lines. These match the T12–T14 pattern.
- The same log also contains `400` errors from `…/WSWebClient/Designer/Form/GenerateServerEvent`, `GetFormDesigner` and `DesignerSession/GetEditMenuState`, and Permissions-Policy `unload` notices. The log does not tag entries to a tab. The stale Designer tabs (0–2) were not selected in T15, so these are recorded as **unattributed** and not as errors of the reopened Forms. The reopened Forms loaded and queried normally.
- No Session Expired dialog, sign-in form, login screen or identity change was observed. The exact-name queries stayed responsive.
- The 401 cause remains **unresolved**.

## Deviations and qualifications

1. **Sql Columns closed twice.** The first close (preparatory) happened before the reopen. The second close followed the post-reopen readback. The Sql Columns reopen was a freshness readback of the reopened row, not part of the AC-8 pair.
2. **Properties rows 9–11 not re-read visually after reopen.** Rows 12–13 were confirmed through the DOM only.
3. **Decimal Position** was re-read after the reopen using a horizontal wheel scroll (`t15-16`/`t15-17`). Two scroll attempts overshot and one had no effect. No row selection was made.
4. **Extends field** appeared white (editable) in the reopened Filter in Place view before the query, and greyed after F4. This is a FiP rendering difference, not a value change (blank before and after).
5. The **Sql Tables caution alert** was accepted once (known informational message). No other dialog appeared.

## Open items for T16 (not performed here)

1. Final cumulative action audit across T1–T15 (AC-9) and the final acceptance matrix (AC-1 to AC-10) with passed / failed / qualified status.
2. Repository change inventory (experiment-authored versus automatically written browser evidence versus pre-existing changes). Git confinement is subject to operator review.
3. Source-control integration is disabled in the configuration. The Mongoose checkout was released at UI level; no source-control check-in is claimed.
4. Decimal precision at the database catalogue level remains unverified (only Mongoose SQL-metadata UI readback).
5. Cause of the recurring 401 and token-expiry lines remains unresolved.

## Final browser state

- Tab 3: Web Client (`Mongoose`), identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Open panels: IDO Projects (untouched), IDOs (reopened; FX_InventoryItems row; Properties sub-tab active; Check Out enabled), Sql Tables (reopened; FX_InventoryItems row; Schema grid cell focused with `dbo`, not edited). Sql Columns closed.
- Save disabled on the visible Sql Tables and IDOs surfaces. No dialog open. No unsaved-change prompt.
- Tabs 0–2 were not selected or touched.

## Next permitted action

1. **T16:** final cumulative action audit and the final acceptance matrix (AC-1 to AC-10), plus the repository change inventory for operator review. No browser mutation is authorised for that step.
