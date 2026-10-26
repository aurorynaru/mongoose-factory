# EXP-137 T3 — read-only IDO and IDO Projects preflight (AC-1 remaining components)

Run `R-20261026-104057-G85J` · task T3 · cycle 4 · worker session `64f89e30-1693-44d7-bb85-89832dc84651` · task_message_id `31216d95-1283-45e7-9f56-fccb7c2f3c3c`.
Scope: READ-ONLY. No wizard launch or Finish, no Create Form answer, no artifact creation, no Save, no record save, no check-in or check-out, no metadata unload, no Mongoose object change, no Property Class, no Escape press.

## Outcome

- **IDOs absence of `FX_LoginUsers`: observed** (lowercase target `fx_loginusers` → zero rows; uppercase positive control `FX_InventoryItems` → one genuine IDO row, Project `FX_HelloWorldProject01`). The lowercase case-insensitive positive control was established in T1 (`fx_inventoryitems` → `FX_InventoryItems`).
- **Direct IDO Projects existence of `FX_HelloWorldProject01`: observed** (IDO Projects Form, one genuine row, Description `Factory Hello World test project`, Access As `G6R`). This replaces the T1 indirect inference from the IDO's Project Name.
- **Sql Tables case-insensitive check: still not run.** Only the exact-case T2 check exists. No Sql Tables query was repeated in T3.
- **Save state:** Save disabled at every capture. No dialog open at the end.
- AC-4 (Create Form safety gate) unchanged: **blocked**. No wizard was entered.

## Starting state (fresh untargeted snapshot)

- Account header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Sql Tables panel selected (tab `f1e102` / panel `f1e105`), empty starred add-mode placeholder row, status `Table Name (SQL Tables 1 of 1)`, Save disabled, no dialog open.
- Nested grid Table Name combobox active (`f1e157`); Attributes combobox not used.
- IDOs panel tab present (`f1e99`).

## Operations (T3, in order)

1. Fresh snapshot (read-only). Start state recorded above.
2. Click IDOs panel tab `f1e99` (panel navigation only; no save).
3. Fresh snapshot: IDOs panel in normal (non-FiP) mode, empty grid, status `Extends`, Save disabled.
4. Click FiP toolbar button `f1e39` (Filter in Place on). Snapshot showed a **stale** criterion `fx_loginusers` from T1 in the active IDO Name criteria field (`f1e322`) and criteria row (`f1e539`). The data grid was empty. This prior value was not treated as a measured result.
5. Type `FX_InventoryItems` into the active IDO Name criteria textbox `f1e322` (replacing the stale value). Tab (commit).
6. Fresh snapshot: criteria row `f1e556` shows `FX_InventoryItems`. Screenshot `t3-01` (pre-F4).
7. F4 (positive control, one query).
8. Screenshot `t3-02` and fresh snapshot: one genuine row `FX_InventoryItems`, Revision Num 2, Revision Date 10/25/2026, Project Name `FX_HelloWorldProject01`, Label String ID and Caption `oFX_InventoryItems`, Access As `G6R`; Table Name `FX_InventoryItems`, Alias `fxinv`, Primary Base, Inner. Status `Extends (IDOs 1 of 1)`. Save disabled. Detail fields populated with the existing record; not edited.
9. Click FiP toolbar button `f1e39` again (Filter in Place re-entry, visible UI route). Fresh snapshot: IDO Name criteria field active and still showing `FX_InventoryItems`.
10. Type `fx_loginusers` into the same active IDO Name criteria field `f1e322`. Tab (commit).
11. Fresh snapshot: criteria row `f1e627` shows `fx_loginusers`. Screenshot `t3-03` (pre-F4).
12. F4 (target query, one query).
13. Screenshot `t3-04` and fresh snapshot: IDO grid empty (no genuine row), IDO Name criteria field blank after settle, detail fields greyed, status `Filter in Place`, Save disabled.
14. Click toolbar Open `f1e25` (opens the Select Form dialog; read-only list).
15. Fresh snapshot: Select Form dialog `f1e628`; Filter textbox `f1e664` active, prefilled `SqlTables` from an earlier session.
16. Type `Project` into the dialog Filter textbox `f1e664` (replacing `SqlTables`). Tab (filter commit; the grid did not refresh before Tab).
17. Screenshot `t3-05`; find confirmed one row `IDO Projects` / `IdoProjects`.
18. Click the `IDO Projects` row `f1e692` (select); fresh snapshot confirmed the row active.
19. Click OK `f1e683` once. The `IDO Projects` Form opened in a new Web Client tab (`favoriteContext=IdoProjects`); this is an ordinary read-only Form open.
20. Fresh snapshot: IDO Projects panel in Filter in Place mode; Project Name criteria field `f1e762` active and empty; grid showed no genuine row.
21. Type `FX_HelloWorldProject01` into the active Project Name criteria field `f1e762`. Tab (commit; focus moved to Description).
22. Fresh snapshot and screenshot `t3-06` (pre-F4): Project Name `FX_HelloWorldProject01` committed, criteria row shows the value, `Filter in Place`.
23. F4 (one query).
24. Screenshot `t3-07` and fresh snapshot: one genuine row `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`; status `Description (IDO Projects 1 of 1)`; Save disabled. The Description field holds keyboard focus with its existing text selected; **no text was typed into it.**

## Counts

- Browser mutating-class actions: 17 (IDOs tab click 1; FiP click 2; text entries 4, including the Select Form filter; Tab 4; F4 3; Open click 1; row click 1; OK click 1; this count excludes read-only snapshots, finds and screenshots).
  - Note: the 4 typed actions were: IDO Name `FX_InventoryItems`, IDO Name `fx_loginusers`, Select Form filter `Project`, Project Name `FX_HelloWorldProject01`.
- Fresh snapshots: 12 (read-only).
- Screenshots: 7 (`t3-01` to `t3-07`).
- Browser tab selects (browser tabs): 0.
- Coordinate clicks: 0. Escape presses: 0. Save: 0. New / New IDO / New Table / New Property / New Method / Delete / Check Out / Undo Check Out / Replace: 0.
- Wizard launch or Finish: 0. Create Form answer: 0. Check-in / check-out: 0. Metadata unload, FormSync, deployment: 0.
- Runtime Form open or record Save: 0. Session recovery / sign-in / credential entry: 0.
- Console: `21 errors, 10 warnings` on every snapshot; unchanged from T1 and T2. No new error class was observed.

## Decisive observations

- `t3-01` (pre-F4, positive control): `IDO Name: FX_InventoryItems` in the criteria field; criteria row shows `FX_InventoryItems`; status `Filter in Place`. Proves the criterion was committed before the query. Does not prove a result.
- `t3-02` (post-F4, positive control): one genuine IDO row `FX_InventoryItems`, Project `FX_HelloWorldProject01`, Revision 2, Table alias `fxinv`. Proves the query mechanism returns a genuine existing IDO and that the IDO sits in project `FX_HelloWorldProject01`. Does not prove anything about `FX_LoginUsers`.
- `t3-03` (pre-F4, target): `fx_loginusers` in the criteria field and criteria row; status `Filter in Place`. Proves the lowercase target criterion was committed before the query.
- `t3-04` (post-F4, target): the IDO grid is empty; the criteria field is blank after settle; status `Filter in Place`; Save disabled. Proves zero genuine IDO rows matched `fx_loginusers`. Does not show the criterion after F4 (the field clears on settle; the criterion is shown in `t3-03`).
- `t3-05` (Select Form filtered): one row `IDO Projects` / `IdoProjects`. Proves the Form list contains one IDO Projects Form. Does not prove the IDO Projects Form's data.
- `t3-06` (pre-F4, IDO Projects): `Project Name: FX_HelloWorldProject01` committed; status `Filter in Place`. Proves the project criterion was committed before the query.
- `t3-07` (post-F4, IDO Projects): one genuine row `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`; status `Description (IDO Projects 1 of 1)`. Proves the project exists directly in the IDO Projects Form with that name. Does not prove the project's internal ID or any membership beyond the name.

## Stale-state note

At the start of T3, the IDOs FiP criteria field still held `fx_loginusers` from the T1 session, with an empty grid. This was not a measured result. It was replaced by the positive control `FX_InventoryItems` before the target query, so the T3 results above do not rely on it.

## Limitations

1. The target `fx_loginusers` IDO result is observed in this view; it is not verified against the database.
2. The criterion value is not visible after F4 in the IDO or IDO Projects views (the field clears on settle); it is visible before F4 in `t3-03` and `t3-06`.
3. The IDO positive control used the uppercase name `FX_InventoryItems`. The case-insensitive positive control for IDOs is the T1 lowercase run (`fx_inventoryitems` → `FX_InventoryItems`), not repeated in T3.
4. The Sql Tables lowercase case-insensitive check was not run in T2 or T3.
5. The IDO Projects Form tab is now open with the Description field focused. No value was typed. A later task should not type into that tab without re-snapshotting.
6. `worker_tool_policy.deny_browser_javascript` cannot be verified or set by the worker. The `Ran Playwright code` blocks are MCP wrapper output; the worker authored no JavaScript.
7. Git confinement and source hashes are pending operator review (Bash disabled).

## Screenshot files (under `evidence/EXP-137/`)

- `t3-01-idos-criterion-fx-inventoryitems-pre-f4.png`
- `t3-02-idos-fx-inventoryitems-post-f4.png`
- `t3-03-idos-criterion-fx-loginusers-lowercase-pre-f4.png`
- `t3-04-idos-fx-loginusers-lowercase-post-f4.png`
- `t3-05-select-form-project-filter.png`
- `t3-06-idoprojects-criterion-fx-helloworldproject01-pre-f4.png`
- `t3-07-idoprojects-fx-helloworldproject01-post-f4.png`

Tool-written snapshot files under `evidence/playwright/` (not curated) were also produced by the MCP wrapper.

## Acceptance mapping (T3)

- AC-1 IDOs component: **observed** (lowercase target zero rows with the criterion captured before F4; positive control in the same view; case-insensitive positive control from T1).
- AC-1 IDO Projects / project existence: **observed** (direct IDO Projects row `FX_HelloWorldProject01`). Replaces the T1 indirect inference.
- AC-1 Sql Tables case-insensitive check: **not run** (only the T2 exact-case check exists). AC-1 is therefore not fully closed.
- AC-1 Select Form: T1 result stands (exact and lowercase absence with case-insensitive positive control).
- AC-4: **blocked**, unchanged. No wizard was opened.
- AC-2 through AC-12: not evaluated in T3.

## Knowledge state

- IDOs criteria route (FiP → type criteria in the active IDO Name field → Tab → F4) with a criterion echo before F4: **observed** in two cycles. Not replay-verified.
- Stale criterion carry-over into a fresh FiP session: **observed** (the T1 `fx_loginusers` value persisted into T3's FiP field; the grid showed no row).
- Select Form filter, Tab-committed then row select and OK: **observed**.
- IDO Projects Form via Select Form and FiP criteria route: **observed**.
- `FX_HelloWorldProject01` exists in IDO Projects with description and Access As `G6R`: **observed**.
- Create Form generated-Form name and User scope: **unresolved** (AC-4 blocked).

## Open questions

1. AC-4 decision remains with the operator: accept the IDO-name inference for the Create Form contract, or keep the Yes unanswered.
2. Sql Tables lowercase case-insensitive check with its positive control: still not run; needed for AC-1 closure.
3. Whether the operator wants the IDO Projects tab closed before the next task.
