# EXP-135 T9 — Portal navigation, runtime open, and authoritative zero-row gate

Run `R-20261026-051803-zOUZ` · cycle 12 · task T9 · worker session `1a629cda-63d0-4073-9d1d-fdd83a6bd23b` · task_message_id `5f90b5f7-fcdc-42e5-93ab-2eb8b189781b` · date 2026-10-26.

## Outcome

**Zero-row gate PASSED (observed, one session), with a stated limitation.** FX_InventoryEditor was listed by exact name after the authorized Portal navigation, opened once from Select Form, and refreshed once. The only grid row is the uncommitted add-mode placeholder (starred, blank). No committed record was returned. The Form is left open and clean in the Web Client tab 3. No New, field entry, Save, insertion, or runtime close/reopen was performed.

Correction to T8: the T8 Select Form list did not include FX_InventoryEditor. That list was stale. After a fresh Portal navigation and Mongoose launch, the same exact-name lookup lists the Form. The T8 cause hypothesis (client list loaded before creation) is consistent with this run. It is not separately proven.

## Pre-navigation gate (three system panels)

Preservation exception (operator): the three panels may close incidentally.

| Panel | Observation | Evidence |
|---|---|---|
| Sql Tables (initially selected) | Save and "Update Current Table" disabled; no dialog; FX_InventoryItems / dbo / PK_FX_InventoryItems | snapshot; `t9-01` |
| IDO Projects | Toolbar Save disabled; `find` for dialog/alert/unsaved/modified: no match | snapshot; find |
| IDOs | Toolbar Save disabled; no dialog; FX_InventoryItems selected under FX_HelloWorldProject01 | snapshot; find; `t9-01` |

All three were clean, so navigation was permitted. The IDOs screenshot incidentally shows the Properties grid for FX_InventoryItems (FX_Item String 50 key, FX_Description String 255, FX_Warehouse String 100, FX_QuantityOnHand Decimal 12, FX_ReorderLevel Decimal 12, FX_Location String 100, plus CreatedBy and UpdatedBy). The Length column shows 12, not 12,2, so the scale is not visible. This is incidental to the Save-state check and is recorded as a visible observation only; it is not a permitted surface reading.

Tab selections made for this check: IDO Projects, then IDOs (panel tab headings, selection only). No edit, save, or close of a vendor Form.

## Navigation and authentication

- Tab list, then tab 3 selected. Fresh snapshot before any action.
- Navigation: tab 3 navigated **once** to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (the operator-supplied Portal URL).
- A `beforeunload` dialog (empty message, generic leave-page) appeared. Accepted **once**. It was not an application save or discard prompt.
- Portal landed on System Administrator workspace. No sign-in page appeared. **No session-expiry recovery used.**
- Portal notification banner (DistributionIFSContactUs) dismissed. Caveat: the click targeted the banner's accessible button by name (`Close notification`), not a separately located × control. The URL did not change afterwards, so no "here" redirect was observed. Counted as one dismissal.
- Portal navigation search: opened the navigation menu once, typed `Mongoose` into Search menu (1 result, Applications > Mongoose OS), clicked the result once.
- Mongoose Web Client loaded in tab 3 (Page Title Mongoose). Header **`anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`** (fresh snapshot; `t9-04` shows the header). Usable session. The three system panels closed as the operator anticipated; no Form was loaded at that point.

## Select Form (exact-name gate)

- Opened once from the toolbar Open button. Stale filter `SqlTables` was present from earlier use.
- Positive control: filter `FX_HelloWorld01` (Name, Case Sensitive off, Starts With off). Result: **1 row** (FX_HelloWorld01 / FX_HelloWorld01). Lookup confirmed working.
- Target: filter `FX_InventoryEditor` (same options). Result: **1 row**, Caption `FX_InventoryEditor`, Name `FX_InventoryEditor`, row selected. Unambiguous single match. Captured in `t9-03` (dialog filter, one row, header identity).
- OK pressed **once**; the selected row was activated. No other row opened. No Form was opened from another row.

## Runtime open and zero-row retrieval

- Opened once. Identity: runtime tab heading `FX_InventoryEditor`; URL `favoriteContext=FX_InventoryEditor`; header account as above. Grid pane present with six column headers and six edit fields; status `(Object 1 of 1)`.
- Initial read (before Refresh): one starred row, blank cells, `(Object 1 of 1)`. This is the add-mode state documented in EXP-042-R3 (rows load only after Refresh).
- **One explicit Refresh (toolbar)**, then a fresh snapshot after a 3-second wait. Result: the same single starred row with all six cells blank; detail inputs blank; status `(Object 1 of 1)`; Save disabled.
- `t9-04` (screenshot) shows: header account; FX_InventoryEditor tab; one row with a blue star and number 1; six blank inputs with the required `*` on the first; status `(Object 1 of 1)`; Save greyed.

### Why this is zero committed rows (reasoning)

1. The starred row is the add-mode new-row placeholder. A committed row is not starred. EXP-042-R3 showed that after a Refresh with two committed rows, the starred placeholder disappeared and two unstarred rows loaded (`(Object 1 of 2)`).
2. No committed row would have a blank FX_Item: FX_Item is the String 50 primary key and Required (EXP-134). Every cell of the single row is blank.
3. The same display (one starred blank row, blank inputs, `(Object 1 of 1)`) is recorded in EXP-042-R3 as the zero-saved-row state for a Form on the same Refresh route.

### Limitations

- The starred-placeholder reading rests on the star in the screenshot and on the EXP-042-R3 precedent. The accessibility tree shows only `gridcell "1"` for the row indicator.
- The grid columns are collapsed to the row-indicator width in this layout (GridLeft). The six column headers exist in the accessibility tree, but no cell text is visible.
- Active filter: the Filter In Place (FiP) button is not shown as active in the snapshot. A filter was not explicitly inspected through Edit or Find. The Select Form path opened the Form without a filter; the Refresh was not a filtered retrieval, but this was not separately proven.
- The "(Object 1 of 1)" count is not interpreted as record count. EXP-042-R3 records that the count includes the placeholder in add mode.
- Single session. Not database-level verification. Not cross-session durability.

## Action counts (T9)

- Tab list 1 (read-only, before the first selection). Tab selects 1 (tab 3). Fresh snapshots: 8 (including Portal and runtime reads). Screenshots 3 (`t9-01`, `t9-03`, `t9-04`).
- Panel tab selections 2 (IDO Projects, IDOs). Panel Save-state checks 3.
- Navigation of tab 3: **1** (to the operator Portal URL).
- beforeunload dialog accepted: **1**.
- Authentication recovery: **0** (no sign-in page; no session-expiry modal).
- Portal banner dismissals: **1** (see caveat above).
- Portal menu search: 1 navigation-menu open; 1 search text entry; 1 result click (Mongoose OS).
- Select Form opens: **1**. Positive-control filter: 1. Target filter: 1. OK: **1**. Cancel: 0.
- Runtime Form opens: **1**. Refresh: **1**. Refresh-equivalent fresh unfiltered retrieval: 0 (only the one toolbar Refresh).
- New: **0**. Field edits: **0**. Runtime Saves: **0**. Record insertions: **0**. Runtime close: **0**. Runtime reopen: **0**.
- Designer tabs 0, 1, 2: **not selected, not inspected, not saved** (tab list only).
- Vendor, non-FX_, or Mock Form action: **0**. Finish or wizard: **0**. IDO, metadata, FormSync, unload, deployment, or SQL action: **0**.
- Worker-authored browser JavaScript: **0**. Browser evaluate or run-code calls by the worker: 0. Ref-not-found errors: 0. Fresh-snapshot recoveries: 0. Recovery inspections: 0.

## Acceptance (T9 scope)

- **AC-1** (identity, session, pre-navigation state): supported for the Web Client header after navigation. Designer User-scope footer not re-observed in T9 (observed in T7). The three-panel clean check passed before navigation.
- **AC-2** (collision and positive control): supported for this run. Positive control FX_HelloWorld01 returned 1 row. FX_InventoryEditor returned exactly 1 row. Note: this is presence, not absence. The IDO property check remains the T1/T3/T4 carry-forward plus the incidental IDOs-grid observation above; no separate read-only IDO schema readback was run in T9.
- **AC-3 / AC-7** (zero-row gate in runtime before insertion): **supported with limitation** (see reasoning and limitations). Runtime open 1, Refresh 1, placeholder-only grid, no committed row observed.
- **AC-8 to AC-10:** not evaluated (no insertion, no close/reopen, by T9 scope).

## Evidence files (this task)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-135/t9-01-pre-navigation-three-system-panels-clean.png` | IDOs panel (active at capture): FX_InventoryItems under FX_HelloWorldProject01, Properties grid; header account; Save disabled. Taken after the IDO Projects and IDOs Save checks | Panel state of IDO Projects and Sql Tables at capture (checked by find/snapshot, not in this image); schema scale (Length shows 12) |
| `evidence/EXP-135/t9-03-select-form-exact-fx-inventoryeditor-one-match.png` | Select Form: filter `FX_InventoryEditor`, Name, Case Sensitive off; one selected row FX_InventoryEditor / FX_InventoryEditor; header account | The runtime result; the Form's content |
| `evidence/EXP-135/t9-04-runtime-fx-inventoryeditor-after-refresh-zero-rows.png` | Runtime FX_InventoryEditor tab; header account; one starred blank row; six blank inputs; `(Object 1 of 1)`; Save greyed | That no record exists in the database; that the starred row is the placeholder beyond the reasoning above; the grid columns' text (collapsed) |
| `evidence/playwright/page-2026-10-25T21-57-*` snapshots | Accessibility text: positive control row, target row, runtime cell structure after Refresh | Database state |

Note: `t9-02` was not created (the dialog was captured as `t9-03` after the target filter, which was the decisive state).

## T8 supersession note

T8 (`t8-runtime-open-blocked-not-in-select-form.md`) recorded FX_InventoryEditor as absent from the Web Client Select Form list. T9 shows it present after a fresh Portal navigation and Mongoose launch. The T8 list was stale. T8's blocker is resolved by this run, under the operator's cycle-12 authorization. T8's evidence file is retained unchanged; this note records the supersession.

## Open questions and next action

1. The zero-row gate is passed with the placeholder reading and its limitations. If the operator wants a stronger read, the next step is a separately authorized, read-only filter or count check, not a New or Save.
2. T9 does not evaluate AC-8 (insertion). T10 (record 1) must not start without a fresh authorization, a fresh snapshot, and the runtime still showing FX_InventoryEditor clean with zero committed rows.
3. The IDO Projects and Sql Tables panels were closed by the navigation (operator exception). They were not reopened.
4. The Designer tab 0 (FX_InventoryEditor, clean from T7) and tabs 1 and 2 were not inspected in T9. Their state is carried from earlier tasks.
5. The beforeunload dialog's message was empty. It was accepted as the generic leave-page prompt. Its exact origin was not identified; no application save or discard prompt appeared.
