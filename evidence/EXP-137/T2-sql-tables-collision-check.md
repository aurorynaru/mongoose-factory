# EXP-137 T2 — read-only Sql Tables collision check (AC-1 Sql Tables component)

Run `R-20261026-104057-G85J` · task T2 · cycle 3 · worker session `64f89e30-1693-44d7-bb85-89832dc84651` · task_message_id `42acdc7d-a6fb-4bd7-a1d0-a026e219d7ed`.
Scope: READ-ONLY Sql Tables collision check only. No wizard launch or Finish, no Create Form answer, no artifact creation, no Save, no record save, no check-in, no metadata unload, no Mongoose object change.

## Outcome

**Sql Tables absence check for `FX_LoginUsers`: observed, with a working positive control (qualified).**
- Positive control `FX_InventoryItems` returned one genuine dbo table row (with its PK and index constraints).
- Target `FX_LoginUsers` returned zero genuine rows; only the empty starred add-mode placeholder row remained.
- The lowercase case-insensitive query `fx_loginusers` was NOT run (optional in the bounded instruction; the principal queries succeeded and the UI was unambiguous, but it was not needed for this pass). Case-insensitive Sql Tables absence is therefore not established by this task.

AC-1 overall stays open: the IDOs absence result remains qualified from T1, project existence `FX_HelloWorldProject01` remains indirect (from the IDO Project Name), and the Create Form gate (AC-4) is unchanged.

## Pre-check gates (fresh snapshot, untargeted)

| Gate | Observed |
|---|---|
| Tab list before any select | Tab 0 `Mongoose` (current, selected); Tab 1 Designer. No tab select was needed or performed. |
| Sql Tables panel selected | Tab `Sql Tables` `[selected]` in the Web Client (`f1e94`) |
| Filter in Place active | Funnel icon on the `Sql Tables` tab; status-bar text `Filter in Place`; Table Name criteria row present |
| Save disabled | `Save` `[disabled]` (`f1e28`) |
| Dialogs open | None |
| Target editor | Nested grid Table Name combobox `f1e149` `[active]` in the criteria row (not the Attributes `Table Name:` combobox `f1e221`) |
| Account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |

## Operations (T2, in order)

1. Tab list (read-only).
2. Fresh untargeted snapshot (read-only) — gates above.
3. Screenshot `t2-00-sql-tables-pre-criteria-state.png` (state before typing).
4. Type `FX_InventoryItems` into nested grid combobox `f1e149` (criteria, not saved).
5. Tab (commit criterion; focus moved to Schema).
6. Fresh snapshot (read-only): criterion committed in row `f1e243`.
7. Screenshot `t2-01-sql-tables-criterion-fx-inventoryitems-pre-f4.png`.
8. F4 (one query for the positive control).
9. Screenshot `t2-02-sql-tables-fx-inventoryitems-post-f4.png` and fresh snapshot (read-only).
10. FiP toolbar button `f1e33` clicked once to re-enter Filter in Place (visible UI route). A fresh snapshot followed (read-only): empty criteria row present; nested combobox still displayed the prior `FX_InventoryItems` value.
11. Type `FX_LoginUsers` into the same nested combobox `f1e149` (replaces prior value; criteria, not saved).
12. Tab (commit criterion; focus moved to Schema).
13. Fresh snapshot (read-only): criterion committed in row `f1e342`; Attributes mirror also reads `FX_LoginUsers` (mirror only, not used).
14. Screenshot `t2-03-sql-tables-criterion-fx-loginusers-pre-f4.png`.
15. F4 (one query for the target).
16. Screenshot `t2-04-sql-tables-fx-loginusers-post-f4.png` and fresh snapshot (read-only).
17. Browser console error export (read-only): `t2-console-errors-after-sql-tables-check.txt`.

Counts: browser mutating-class actions (criteria entry, Tab, FiP toggle, F4) = 7 (type 2, Tab 2, FiP click 1, F4 2). Fresh snapshots = 6 (read-only). Screenshots = 5. Tab selects = 0. Coordinate clicks = 0. Escape presses = 0. Save = 0. New / Delete / Update Current Table / Columns / Constraint actions = 0. Wizard launch / Finish = 0. Create Form answer = 0. Check-in / check-out = 0. Runtime Form open / Save = 0. Session recovery = 0. Sign-in / credential entry = 0. Metadata unload / FormSync / deployment = 0.

## Decisive observations

- **Positive control (`t2-02`)**: one genuine row, grid Table Name `FX_InventoryItems`, Schema `dbo`, Multi-Site unchecked; Attributes Schema `dbo` (read-only grey), Table Name `FX_InventoryItems`; constraints `PK_FX_InventoryItems` (Primary Key, Unique, Clustered, description `FX_Item`) and `IX_FX_InventoryItems_RowPointer` (Index, Unique, description `RowPointer`); status bar `Schema (SQL Tables 1 of 1)`. Proves: the grid executes filter-in-place queries and returns a genuine dbo row for an existing FX_ table. Does not prove: anything about FX_LoginUsers.
- **Target absence (`t2-04`)**: after F4 for `FX_LoginUsers`, the grid shows only the empty starred add-mode placeholder row (`★ 1`) with blank Table Name and blank Schema; required markers on Table Name and Schema; Columns…, Update Current Table, New Constraint… and Modify Constraint… disabled; Attributes Table Name combobox empty; status bar `Table Name (SQL Tables 1 of 1)`. Proves: zero genuine Sql Tables rows matched the criterion `FX_LoginUsers` in this view. Does not prove: the criterion value after F4 (the criteria row has cleared; the pre-F4 criterion is shown in `t2-03`), nor a case-insensitive result, nor any database-side state beyond this view.
- **Pre-F4 criterion (`t2-03`)**: criteria cell shows `FX_LoginUsers`; Attributes mirror `FX_LoginUsers`; `Filter in Place` status. Proves the committed criterion before the query.
- **Pre-F4 positive-control criterion (`t2-01`)**: criteria cell shows `FX_InventoryItems`; focus moved to Schema by Tab; `Filter in Place`.

## Console

- Console error count at start of T2: 21 errors, 10 warnings. After T2: 21 errors (same count). Error export `t2-console-errors-after-sql-tables-check.txt` lists 21 `[ERROR] Permissions policy violation: unload is not allowed in this document` messages from Mongoose/WSWebClient scripts (environment noise, pre-existing; not related to these actions). No new error class appeared.

## Limitations

1. Case-insensitive Sql Tables check (`fx_loginusers`) was not run; the case-insensitive Sql Tables positive control was not run either.
2. The zero-row result is established only by the settled Sql Tables grid after F4 (placeholder row, no genuine row). The absence is observed in this UI view; it is not independently verified against the database.
3. The target criterion value is not visible after F4 (criteria row cleared on settle). It is visible before F4 in `t2-03`.
4. The FiP click returned a snapshot file reference rather than a rendered snapshot; a fresh snapshot was taken immediately afterward (read-only) before any further action.
5. The `### Ran Playwright code` blocks in tool output are MCP wrapper-generated strings; the worker authored no JavaScript. `worker_tool_policy.deny_browser_javascript` cannot be verified or set by the worker; operator to verify the flag.
6. The Attributes `Table Name:` combobox mirrors the grid's current criterion; it was observed, not used.

## Screenshot files (under `evidence/EXP-137/`)

- `t2-00-sql-tables-pre-criteria-state.png` — pre-criteria: account header, Sql Tables panel selected, funnel icon, `Filter in Place`, Table Name criteria combobox active, Save greyed. Proves the pre-mutation state of the panel. Does not prove any absence result.
- `t2-01-sql-tables-criterion-fx-inventoryitems-pre-f4.png` — `FX_InventoryItems` in the criteria cell before F4. Proves the positive-control criterion was committed.
- `t2-02-sql-tables-fx-inventoryitems-post-f4.png` — genuine dbo row `FX_InventoryItems` with PK and index constraints. Proves the positive control returned a genuine row.
- `t2-03-sql-tables-criterion-fx-loginusers-pre-f4.png` — `FX_LoginUsers` in the criteria cell before F4. Proves the target criterion was committed.
- `t2-04-sql-tables-fx-loginusers-post-f4.png` — only the empty starred placeholder row; no genuine row. Proves zero genuine Sql Tables rows matched in this view.
- `t2-console-errors-after-sql-tables-check.txt` — console error export; 21 pre-existing permissions-policy errors.

Tool-written snapshot files under `evidence/playwright/` (not curated) were also produced by the MCP wrapper.

## Acceptance mapping (T2)

- AC-1 Sql Tables component: **observed, qualified** (positive control and target absence in the same view; lowercase case-insensitive check not run). AC-1 overall still open (IDOs qualified from T1; project membership indirect; no supported IDO Projects view opened).
- AC-4: **unchanged, blocked** — Create Form Yes remains unauthorized; no wizard was opened in T2.
- AC-2 through AC-12: not evaluated in T2.

## Knowledge state

- Sql Tables nested grid combobox criteria route (type into the active criteria-row combobox, Tab, F4): **observed** in this task (two successful cycles: positive control and target). Not replay-verified.
- Filter in Place re-entry through the toolbar FiP button, with the prior criterion still displayed in the nested combobox before replacement: **observed**.
- Sql Tables absence `FX_LoginUsers` (case-sensitive exact criterion, positive control present): **observed, qualified**.
- Sql Tables case-insensitive absence: **unresolved** (not run).

## Open questions

1. Whether the operator wants the optional lowercase `fx_loginusers` Sql Tables query and its positive control in a follow-up read-only pass.
2. The AC-4 Create Form contract decision remains with the operator (IDO-name inference vs. keeping Yes unanswered).
3. IDOs absence check remains qualified from T1 (criterion echo after F4 not captured); no IDOs query was run in T2.
