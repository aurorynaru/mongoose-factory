# EXP-137 T14 — read-only Sql Tables and Sql Columns verification of FX_LoginUsers

Run `R-20261026-104057-G85J` · task T14 · cycle 18 · worker session `cc9527b0-d1ff-44f6-8957-aded12b87de8` · task_message_id `7f0d55c8-8090-40e4-a1e7-d58b8a2fc5da`.
Scope: READ-ONLY Sql Tables and Sql Columns verification only. No Check In or Check Out, no Save, no wizard, no Create Form answer, no Classic MultiView Form, no runtime Form or record, no metadata unload, no FormSync, no direct SQL, no typing into any detail field.

## Outcome

**Physical table and column readback for FX_LoginUsers: observed (UI level, qualified).**
- Sql Tables genuine row: `FX_LoginUsers`, schema `dbo`, Multi-Site unchecked. Status `Table Name (SQL Tables 1 of 1)`.
- Sql Columns for `FX_LoginUsers` (schema `dbo`): 11 rows. The four business columns match the intended definitions (table below).
- Qualification: values are as displayed by the Mongoose Sql Tables and Sql Columns UI. The database catalogue was not queried, and no database-side verification was performed.

## Verification matrix (AC-7 surfaces)

| Column (ordinal, Column Id) | SQL type (Data Type / System Data Type) | Length | Is Nullable | Primary Key | Key Sequence | Expected | Result |
|---|---|---|---|---|---|---|---|
| FX_Username (1, Column Id 2) | nvarchar / nvarchar | 50 | unchecked | checked | 1 | nvarchar 50, PK, NOT NULL | Matches (t14-04) |
| FX_PasswordHash (2, Column Id 3) | nvarchar / nvarchar | 64 | checked | unchecked | (blank) | nvarchar 64, nullable | Matches (t14-05) |
| FX_Role (3, Column Id 4) | nvarchar / nvarchar | 50 | checked | unchecked | (blank) | nvarchar 50, nullable | Matches (t14-06) |
| FX_Store (4, Column Id 5) | nvarchar / nvarchar | 50 | checked | unchecked | (blank) | nvarchar 50, nullable | Matches (t14-07) |

Table-level constraints (Sql Tables Attributes/constraint grid, t14-03):
- `Primary Key` / `PK_FX_LoginUsers` — Unique checked, Clustered checked, description `FX_Username`.
- `Index` / `IX_FX_LoginUsers_RowPointer` — Unique checked, Clustered unchecked, description `RowPointer`.

Wizard-generated system columns (not manually added, not inspected individually in T14): `CreatedBy`, `UpdatedBy`, `CreateDate`, `RecordDate`, `RowPointer`, `NoteExistsFlag`, `InWorkflow` (rows 5–11 of the Sql Columns list, total 11).

## Interpretation and separation

- **Key/required status**: FX_Username shows Is Nullable unchecked and Primary Key checked on the Sql Columns side. This is the SQL-side key/not-null indicator. The IDO-side Required and Key Seq readback from T12 (`t12-05`) is separate evidence and was not re-read in T14.
- **Nullability of FX_PasswordHash, FX_Role and FX_Store**: Is Nullable is checked. This is consistent with the brief, which set Required only on FX_Username. It is not an error.
- **String lengths**: Sql Columns Length 50/64/50/50, matching the intended values exactly.
- **Raw UI values**: the Sql Columns UI displays the type as `nvarchar` and the length as a plain number. It does not show the collation or a bytes-vs-characters distinction; these are not claimed.
- **FX_PasswordHash row re-read**: performed in T14 (open item from T13). Its String 64 definition is now observed on the Sql Columns side.

## Operations (T14, in order)

1. Tab list (read-only): tab 0 Mongoose (Web Client, current), tab 1 Designer.
2. Tab 0 select (succeeded on first attempt after the list).
3. Fresh untargeted snapshot: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (masked username in the Web Client header element, as in prior tasks), IDOs panel with FX_LoginUsers row, Project FX_HelloWorldProject01, Check Out enabled (checked in), Save disabled, no dialog.
4. Form menu click (opens the menu; read-only).
5. Find `Select Form` returned nothing; a targeted snapshot of the Form menu showed the recent-forms list, including `Sql Tables`.
6. Click `Sql Tables` menu item (recent-forms route; URL favoriteContext=SqlTables). A one-time Mongoose caution alert (`Please be very careful using these forms…`) appeared.
7. Fresh untargeted snapshot. Caution alert OK clicked once (informational, same alert recorded in EXP-040).
8. Find to confirm the alert was gone (no match).
9. FiP toolbar button clicked once (f1e34). Result: the grid showed 200 unfiltered table rows (status `Table Name (SQL Tables 1 of 200)`), with no criteria row. This did not match the T2 and T4 state, so no criterion was typed. Recorded as an unexplained deviation (see Deviations).
10. Screenshot `t14-00` (read-only). Read: unfiltered 200-row grid, no criteria row.
11. Recovery 1: click on the FiP button (f1e34) returned `Ref f1e34 not found`. One fresh untargeted snapshot taken (allowance used).
12. Corrected FiP click (one attempt) on the fresh ref f1e34. Succeeded.
13. Screenshot `t14-01` (read-only). Read: FiP status visible in the status bar (`Filter in Place`) and the funnel icon on the Sql Tables tab; grid row 1 blank with empty Schema.
14. Targeted find and targeted snapshot of the grid (f1e498) (read-only) located the criteria row gridcell (f1e1651).
15. Click on the criteria gridcell (f1e1651) to activate its editor. A targeted snapshot then showed the active combobox f1e1665.
16. Type `FX_LoginUsers` into the criteria combobox f1e1665 (criteria only, not saved).
17. Tab once (commit criterion). Targeted snapshot: gridcell `FX_LoginUsers` committed (f1e1668); focus moved to the empty Schema criteria cell.
18. Screenshot `t14-02` (pre-F4, read-only). Read: criteria row `FX_LoginUsers`, FiP status, Attributes Table Name mirror `FX_LoginUsers`.
19. F4 once (target query). Settled.
20. Screenshot `t14-03` (post-F4, read-only). Read: one genuine row, see matrix.
21. Columns... button (f1e529) clicked once. Opened the Sql Columns view for FX_LoginUsers (URL favoriteContext=SqlColumns).
22. Screenshot `t14-04` (read-only). Read: 11 rows, FX_Username detail (see matrix).
23. Find `FX_PasswordHash`; click on its name gridcell (f1e1931) to select the row (read-only selection). Screenshot `t14-05`.
24. Find `FX_Role`; click its name gridcell (f1e1965). Screenshot `t14-06`.
25. Find `FX_Store`; click its name gridcell (f1e1974). Screenshot `t14-07`.

## Action accounting (T14)

- Browser state-changing actions: none. No Save, Check In, Check Out, Finish, Create Form answer, record insert, runtime open, metadata unload, FormSync, or wizard action.
- Typed text: 1 (`FX_LoginUsers` into the Sql Tables criteria combobox; criteria only, not saved).
- Clicks: Form menu 1; Sql Tables menu item 1; caution OK 1; FiP 2 (one unexplained first toggle, one corrected); criteria cell activation 1; Columns... 1; Sql Columns row selections 3 (FX_PasswordHash, FX_Role, FX_Store).
- Key presses: Tab 1 (criterion commit); F4 1 (query). Escape 0. Enter 0.
- Tab selects: 1 (tab 0), after one list.
- Recovery: 1 stale-ref error (`f1e34`), 1 fresh untargeted snapshot, 1 corrected attempt. No session expiry, no sign-in, no portal reload, no Designer tab touched.
- Screenshots: 8 successful (t14-00 to t14-07), all read.
- Read-only finds/snapshots: about 14 (includes targeted and untargeted).
- Coordinate clicks: 0. Browser JavaScript authored by the worker: 0 (wrapper-generated `Ran Playwright code` blocks only).

## Deviations and blockers

1. **Unexplained first FiP state (step 9).** After the first FiP click, the Sql Tables grid showed 200 unfiltered rows with no criteria row, and the status read `Table Name (SQL Tables 1 of 200)`. In T2 and T4 the FiP click produced a criteria row. The cause is not established. A second, corrected FiP click produced the expected state. Interpretation: the first click probably did not put the grid into FiP criteria mode in this freshly opened panel. This is an observation, not a diagnosis. The 200-row grid was read-only and nothing was edited.
2. **Stale FiP ref (step 11).** One `Ref not found` error, recovered through the allowed fresh snapshot and one corrected attempt. No state was lost.
3. **Criteria editor required a cell click (step 15).** In this view the criteria gridcell was not active after FiP. A click on the criteria gridcell activated its combobox (this is a grid-cell click, not a coordinate click).
4. **Enabled toolbar after the 200-row state.** At one snapshot (step 9–11) the New and Delete toolbar buttons read enabled, because a grid row was selected. Neither was clicked. Logged for awareness; no artifact was created or deleted.
5. **Detail-pane combobox focus.** At several points the Attributes Table Name and Schema detail comboboxes held focus. No text was typed into either.
6. `worker_tool_policy.deny_browser_javascript` cannot be verified or set by the worker. Operator to verify the flag.

## Limitations

- Sql Tables and Sql Columns readbacks are UI-level, not database catalogue reads.
- Only FX_Username, FX_PasswordHash, FX_Role and FX_Store were opened in Sql Columns. The seven wizard-generated system columns were listed, not individually read.
- Case-insensitive re-check of `fx_loginusers` in Sql Tables was not repeated in T14. The earlier T4 result stands.
- The FX_LoginUsers IDO-side Required and Key Seq was observed in T12 and not re-read in T14.
- The Sql Tables criterion value is visible only before F4 (`t14-02`); the settled grid shows the row, not the criterion.
- Same-session observation only. Not replay-verified. No database durability claim.

## Screenshots (under `evidence/EXP-137/`)

- `t14-00-sql-tables-after-fip-entry-pre-criterion.png` — Sql Tables after the first FiP click: 200 unfiltered rows, no criteria row, account header, Attributes detail showing ABDataServices. Proves the unexpected first state. Does not prove any criterion result.
- `t14-01-sql-tables-after-second-fip-click.png` — after the corrected FiP click: funnel icon on the Sql Tables tab, status `Filter in Place`, blank criteria row 1, detail fields empty. Proves FiP is on. Does not show a criterion.
- `t14-02-sql-tables-criterion-fx-loginusers-pre-f4.png` — criteria row reads `FX_LoginUsers` before F4; Attributes mirror `FX_LoginUsers`; Schema criteria focused; FiP status. Proves the committed criterion before the query.
- `t14-03-sql-tables-fx-loginusers-post-f4.png` — one genuine row `FX_LoginUsers` / `dbo` / Multi-Site unchecked; Attributes Schema `dbo`, Table Name `FX_LoginUsers`; constraints `PK_FX_LoginUsers` and `IX_FX_LoginUsers_RowPointer`; status `Table Name (SQL Tables 1 of 1)`. Proves the genuine physical table row in this view. Does not prove database-side state.
- `t14-04-sql-columns-fx-loginusers-opened-from-columns-button.png` — Sql Columns for `FX_LoginUsers` (Schema `dbo`, Table Name `FX_LoginUsers`): 11 rows; FX_Username detail (Column Id 2, nvarchar, length 50, Is Nullable unchecked, Primary Key checked, Key Sequence 1). Proves the first column definition.
- `t14-05-sql-columns-fx-passwordhash-row-selected.png` — FX_PasswordHash detail: Column Id 3, nvarchar, length 64, Is Nullable checked, Primary Key unchecked, Key Sequence blank.
- `t14-06-sql-columns-fx-role-row-selected.png` — FX_Role detail: Column Id 4, nvarchar, length 50, Is Nullable checked, Primary Key unchecked.
- `t14-07-sql-columns-fx-store-row-selected.png` — FX_Store detail: Column Id 5, nvarchar, length 50, Is Nullable checked, Primary Key unchecked.

Tool-written snapshot files under `evidence/playwright/` (not curated) were also produced by the MCP wrapper.

## Acceptance mapping (T14 contribution)

- **AC-7 (metadata readback)**: IDO side (T12/T13) plus physical table (t14-03) and Sql Columns (t14-04 to t14-07) now observed at UI level for the four business columns, with key/nullability and lengths separated. **Observed, qualified** (UI-level; no database catalogue read; system columns not individually read). AC-7 is a candidate for a full pass only after operator review.
- AC-3 (table creation): the physical table is now observed in Sql Tables (t14-03). The wizard's positive report (`Table and IDO created.`, t11-02) is supported by this readback. Still qualified by the UI-only evidence.
- AC-6, AC-4, AC-5, AC-8 to AC-12: not evaluated in T14. No Form, runtime or record action was performed.

## Knowledge state

- Sql Tables FiP route after opening Sql Tables from the Form menu recent-forms list: first FiP click produced the unfiltered 200-row grid with no criteria row; a corrected second FiP click produced the criteria row. **observed** (single occurrence). Not replay-verified.
- Sql Tables criterion route (click the criteria gridcell to activate the combobox, type, Tab, F4): **observed**.
- Sql Tables genuine row `FX_LoginUsers` / `dbo`, PK and index constraints: **observed** (UI).
- Sql Columns `FX_LoginUsers` definitions for the four business columns (nvarchar; 50/64/50/50; PK and not-null on FX_Username only): **observed** (UI).
- Database-side catalogue state: **unresolved** (not queried).

## Open items for coordinator review

- Confirm acceptance of the Sql Tables and Sql Columns readback before any Form step (Amendment A1 requires separate authorization for the Classic MultiView Form creation).
- The first FiP click's unfiltered state is unexplained (observation only).
- `worker_tool_policy.deny_browser_javascript` remains unverified by the worker.
