# EXP-137 T4 — read-only Sql Tables case-insensitive collision check (AC-1 final Sql Tables component)

Run `R-20261026-104057-G85J` · task T4 · cycle 5 · worker session `fb4129ca-afd0-4959-bb51-37d15f8d4a87` · task_message_id `6149d931-c88d-4d3d-97fe-8c6e4cb2edf3`.
Scope: READ-ONLY Sql Tables case-insensitive collision check only. No wizard launch or Finish, no Create Form answer, no artifact creation, no Save, no record save, no check-in, no metadata unload, no Mongoose object change, no typing into any Designer or Form field.

## Outcome

**Sql Tables case-insensitive absence check for `FX_LoginUsers`: observed, with a working lowercase positive control in the same session (qualified: UI-level, not database-verified).**
- Lowercase positive control `fx_inventoryitems` returned one genuine row, Table Name `FX_InventoryItems`, Schema `dbo`. This establishes that a lowercase criterion matches an uppercase-named table in this view.
- Lowercase target `fx_loginusers` returned zero genuine rows. Only the empty starred add-mode placeholder row remained.
- No collision, no stale result, no enabled Save, no session-expiry condition and no unexpected dialog occurred.

## Pre-check gates (fresh snapshot, untargeted)

| Gate | Observed |
|---|---|
| Tab list | Not needed: tab 0 `Mongoose` was current and visible; no browser tab select was performed. |
| Account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (snapshot S1; re-read in every later snapshot and in `t4-00` to `t4-04`). |
| Starting panel | `IDO Projects` `[selected]` with `Description` textbox `[active]` (T3 state). Not typed into. |
| Save | `Save` `[disabled]` (S1). |
| Dialogs open | None (S1). |
| Console header | `21 errors, 10 warnings` (S1), unchanged on every later snapshot. |

## Operations (T4, in order)

1. Fresh untargeted snapshot S1 (read-only): gates above.
2. Click Mongoose panel tab `Sql Tables` (`f1e108`) (panel navigation within the Designer; not a browser tab select). Result: panel selected.
3. Fresh snapshot S2 (read-only): Sql Tables panel selected; grid shows only the empty add-mode placeholder row; no criteria row; Save disabled.
4. Screenshot `t4-00-sql-tables-pre-criteria-state.png` (read-only).
5. Click FiP toolbar button (`f1e39`) once to re-enter Filter in Place (T2 route). The click returned a file reference, not a rendered snapshot.
6. Fresh snapshot S3 (read-only): Filter in Place active; empty criteria row present; the nested Table Name combobox `f1e358` `[active]` still displayed the stale `FX_LoginUsers` value from T2. Attributes Table Name mirror also showed `FX_LoginUsers`. This value was replaced, not treated as a result.
7. Typed `fx_inventoryitems` into the nested grid combobox `f1e358` (criteria only, not saved). The stale `FX_LoginUsers` value was replaced.
8. Tab (commit criterion; focus moved to the Schema criteria cell).
9. Fresh snapshot S4 (read-only): criterion committed in gridcell `fx_inventoryitems` (`f1e363`); Attributes mirror `fx_inventoryitems`; Save disabled.
10. Screenshot `t4-01-sql-tables-criterion-fx-inventoryitems-lowercase-pre-f4.png` (read-only).
11. F4 once (positive-control query).
12. Fresh snapshot S5 (read-only): one genuine row (Schema `dbo`); Attributes `FX_InventoryItems`; constraints `PK_FX_InventoryItems` and `IX_FX_InventoryItems_Ro…`; Save disabled.
13. Screenshot `t4-02-sql-tables-fx-inventoryitems-lowercase-post-f4.png` (read-only).
14. Click FiP toolbar button (`f1e39`) once to re-enter Filter in Place for the target. Returned a file reference.
15. Fresh snapshot S6 (read-only): Filter in Place active; empty criteria row; nested combobox `f1e358` `[active]` displayed the prior `fx_inventoryitems` value (not a result).
16. Typed `fx_loginusers` into the nested combobox `f1e358` (criteria only, replaced the prior value).
17. Tab (commit criterion).
18. Fresh snapshot S7 (read-only): criterion committed in gridcell `fx_loginusers` (`f1e451`); Attributes mirror `fx_loginusers`; Save disabled.
19. Screenshot `t4-03-sql-tables-criterion-fx-loginusers-lowercase-pre-f4.png` (read-only).
20. F4 once (target query).
21. Fresh snapshot S8 (read-only): only the empty starred placeholder row (`f1e465`/`f1e466` blank, checkbox not checked); Attributes Table Name and Schema blank; Columns…, Update Current Table, New Constraint… and Modify Constraint… disabled; constraint grid empty; status `Table Name (SQL Tables 1 of 1)`; Save disabled.
22. Screenshot `t4-04-sql-tables-fx-loginusers-lowercase-post-f4.png` (read-only).

## Action accounting (T4)

- Mutating-class browser actions: 9 (Mongoose panel tab click 1, FiP 2, criteria text entries 2, Tab 2, F4 2). No parallel browser actions were issued.
- Fresh snapshots: 8 (S1 to S8). Snapshot-file returns after clicks (FiP ×2, Sql Tables tab ×1) were followed by fresh snapshots before any further use.
- Screenshots: 5 (`t4-00` to `t4-04`), all read-only.
- Browser tab selects: 0. Coordinate clicks: 0. Escape: 0. Enter: 0. Typing into any Form, Attributes or Designer field other than the two nested criteria entries: 0.
- Save: 0. Wizard launch or Finish: 0. Create Form answer: 0. Check-in or check-out: 0. Runtime Form open or Save: 0. Metadata unload, FormSync or deployment: 0. Session recovery or sign-in: 0.
- Recovery allowance used: 0 failed interactions; no corrected inspection was needed.

## Decisive observations

- **Positive control (`t4-02`)**: one genuine row. Table Name `FX_InventoryItems`, Schema `dbo`. Attributes Schema `dbo`, Table Name `FX_InventoryItems`, Multi-Site unchecked. Constraints: `Primary Key` / `PK_FX_InventoryItems` (Unique, Clustered, description `FX_Item`) and `Index` / `IX_FX_InventoryItems_Ro…` (Unique, description `RowPointer`). Status `Table Name (SQL Tables 1 of 1)`. Save greyed. **Proves**: a lowercase criterion `fx_inventoryitems` returns the uppercase-named table `FX_InventoryItems` in this view (case-insensitive matching is working). **Does not prove**: anything about `FX_LoginUsers`, the database collation, or database-side state. The Table Name cell is in grid edit display with its text selected; nothing was typed into it.
- **Target absence (`t4-04`)**: after F4 for `fx_loginusers`, the grid shows only the empty starred add-mode placeholder row (required markers on Table Name and Schema; blank cells), Attributes blank, constraint grid empty, Columns…, Update Current Table, New Constraint… and Modify Constraint… disabled. Status `Table Name (SQL Tables 1 of 1)`. Save greyed. **Proves**: zero genuine Sql Tables rows matched the lowercase criterion `fx_loginusers` in this view, in the same session as the working positive control. **Does not prove**: the criterion after F4 (the criteria row clears on settle; the pre-F4 value is shown in `t4-03`); a database-side result; or an absence outside this view. The status text `1 of 1` is the placeholder row, not a match count.
- **Pre-F4 target criterion (`t4-03`)**: criteria cell and Attributes mirror read `fx_loginusers`; Filter in Place status; funnel icon on the Sql Tables tab; Save greyed. **Proves** the committed lowercase criterion before the query.
- **Pre-F4 positive-control criterion (`t4-01`)**: criteria cell and Attributes mirror read `fx_inventoryitems`; Filter in Place status; funnel icon; Save greyed.
- **Pre-criteria state (`t4-00`)**: Sql Tables tab selected, account header, grid with only the empty placeholder row, no criteria row, no funnel icon, status `Table Name (SQL Tables 1 of 1)`, Save greyed. **Proves** the panel state and identity before the criterion. **Does not prove** any absence result.

## Console

- Console header `21 errors, 10 warnings` on S1 and on every later snapshot; unchanged. No new error class observed. The console error export was not re-run in T4 (not required by the bounded instruction).

## Limitations

1. The lowercase case-insensitive check is UI-level: it shows matching behavior in the Mongoose Sql Tables grid, not the database collation or metadata store.
2. The target criterion is visible only before F4 (`t4-03`); the settled grid does not echo it.
3. The Schema criteria cell was blank in both queries, so both queries spanned all schemas as displayed by the grid.
4. The Sql Tables grid is left with focus in the add-mode placeholder's Table Name combobox (blank, no edit). No keys were typed afterwards. A later task must not type into it without a fresh snapshot.
5. The `### Ran Playwright code` blocks in tool output are MCP wrapper-generated strings. The worker authored no JavaScript. `worker_tool_policy.deny_browser_javascript` cannot be verified or set by the worker; operator to verify the flag.
6. FiP toggling was performed twice; each toggle was verified by a fresh snapshot before any criterion entry. The Sql Tables tab, FiP state and criteria were not persisted outside the session.

## Screenshot files (under `evidence/EXP-137/`)

- `t4-00-sql-tables-pre-criteria-state.png`: Sql Tables panel, account header, empty placeholder row, no criteria row, Save greyed. Proves panel state and identity. Does not prove any absence result.
- `t4-01-sql-tables-criterion-fx-inventoryitems-lowercase-pre-f4.png`: lowercase positive-control criterion committed before F4. Proves the criterion was committed.
- `t4-02-sql-tables-fx-inventoryitems-lowercase-post-f4.png`: one genuine row `FX_InventoryItems` (schema `dbo`) with PK and index constraints. Proves case-insensitive matching in this view.
- `t4-03-sql-tables-criterion-fx-loginusers-lowercase-pre-f4.png`: lowercase target criterion committed before F4. Proves the target criterion was committed.
- `t4-04-sql-tables-fx-loginusers-lowercase-post-f4.png`: only the empty starred placeholder row; no genuine row. Proves zero genuine matches for `fx_loginusers` in this view.

Tool-written snapshot files under `evidence/playwright/` (not curated) were also produced by the MCP wrapper.

## Acceptance mapping (T4)

- **AC-1 Sql Tables component**: **observed, qualified**. Lowercase case-insensitive positive control and lowercase target absence were captured in the same session, with criteria captured before F4. Exact-case absence (T2) and lowercase absence (T4) both have a working positive control. Qualified because the result is UI-level and not database-verified.
- **AC-4**: **unchanged, blocked**. No Form-generation safety contract was established; Create Form Yes was not answered and no wizard was opened in T4.
- AC-2, AC-3, AC-5 to AC-12: not evaluated in T4.

## Knowledge state

- Sql Tables nested grid combobox criteria route (FiP, type, Tab, pre-F4 capture, F4), lowercase input: **observed** in T2 (exact case) and T4 (lowercase), two cycles each. Not replay-verified.
- Sql Tables case-insensitive matching (lowercase criterion returns uppercase-named `FX_InventoryItems` in the same view): **observed** (T4). Not database-verified.
- Sql Tables absence `FX_LoginUsers` (case-sensitive, T2) and `fx_loginusers` (lowercase, T4), each with a working positive control in the same session: **observed, qualified**.
- Stale criterion carried into a re-entered Filter in Place session (combobox shows the prior value until replaced): **observed** (T2, T3, T4).
- Create Form generated-Form name and User scope: **unresolved**, AC-4 blocked.

## Open questions

1. The operator must decide whether to accept the IDO-name inference for the Create Form contract, or keep Yes unanswered (AC-4 blocked).
2. IDO lowercase positive control and lowercase target were run in different tasks (T1 lowercase positive control with criterion not captured before F4; T3 lowercase target with criterion captured before F4, uppercase positive control in T3). A strict pairing would need one more read-only IDO pass; not run here (out of T4 scope).
3. The Sql Tables grid is left in a focused add-mode placeholder state; the next task should re-snapshot before any action.
4. `worker_tool_policy.deny_browser_javascript` cannot be verified by the worker; operator to verify.
5. Git confinement and source hashes remain pending operator review (Bash disabled).
