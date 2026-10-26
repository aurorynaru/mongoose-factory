# EXP-137 T12 — post-creation IDO identity, checkout state and property readback (read-only except one FiP view toggle and one criterion query)

Run `R-20261026-104057-G85J` · task T12 · cycle 16 · worker session `da8e2d39-7e65-44f6-981a-3beb397e3809` · task_message_id `63e0f524-7a66-4a48-8238-9a269e853965` · 2026-10-26.

Scope of T12: IDO identity and checkout state only. No check-in, no check-out, no Save, no Finish, no Create Form answer, no Classic MultiView Form creation, no runtime open, no record insert, no SQL metadata verification, no Sql Tables query, no metadata unload, no FormSync, no edit of any IDO property.

## Outcome

- **IDO `FX_LoginUsers` exists in project `FX_HelloWorldProject01`: observed** (one genuine row after one criterion query; detail Project Name `FX_HelloWorldProject01`; Table Name `FX_LoginUsers`, Table Alias `fxlogin`, Primary Base, Inner).
- **Checkout state: CHECKED OUT** (observed from visible controls: row check indicator checked; `Check In` enabled; `Undo Check Out` disabled; `Locked By` populated with the operator account, masked in the accessibility tree and truncated to `anton.ramos@` in the screenshot). The worker did NOT press Check In or Check Out. Per the brief, the single check-in is pending coordinator review.
- **Property readback (IDO Properties sub-tab, read-only view): observed.** FX_Username (String, 50, Key Seq 1, Required checked), FX_PasswordHash (String, 64), FX_Role (String, 50), FX_Store (String, 50); Property Class blank on all four; Column Name equals Property Name; Column Type `nvarchar` on all four. Seven additional wizard-generated default properties are present (see below).
- **Physical SQL table and SQL column metadata: NOT verified in T12** (deferred to the coordinator's next task per the brief).

## Starting state (task start)

- Tab list read first (2 tabs). Tab 0 (Mongoose Web Client, `favoriteContext=IdoCollections`) selected on the first attempt.
- Fresh untargeted snapshot: account header and configuration visible in the screenshot `t12-00`: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Save disabled. No Session Expired modal, no sign-in page, no dialog, no portal banner.
- IDOs panel in normal mode at start: status `IDO Name (IDOs 1 of 368)`, first IDO `ABDataServices` shown in the detail, detail fields grey (not criteria-editable), grid with no criteria row. (`t12-00-webclient-idos-pre-filter-state.png`.)
- **Discrepancy recorded:** the accessibility tree reported the FiP toolbar button as `[active]` at task start, while the screenshot showed normal (non-FiP) mode. The worker did not treat the attribute as proof of FiP state and used the visual state.

## Operations (T12, in order)

1. `browser_tabs` list (read-only).
2. `browser_tabs` select tab 0 (succeeded first attempt).
3. Fresh untargeted snapshot (saved output too large for context; not read in full). Identity and Save state read from screenshot `t12-00`.
4. Screenshot `t12-00` (pre-filter state).
5. Read-only `find` queries (`Session Expired`, `Filter`, `Locked`, `FiP`, `IDO Name`, `criteria`) — no matches for `Session Expired` and `criteria`.
6. Scoped snapshot of grid `f1e101` (read-only; saved as `t12-01-idos-grid-scoped-snapshot.md`; lists the 65 rendered IDO rows of the unfiltered list, no target row).
7. Scoped snapshot of toolbar `f1e24` (read-only): FiP `[active]` attribute (see discrepancy above).
8. **FiP toolbar button `f1e35` clicked once** (Filter in Place ON). Verified visually after the click: IDOs title shows the filter icon, status `Filter in Place`, IDO Name detail field white and focused. Screenshot `t12-02`. This is a client view toggle, not a Mongoose object change.
9. Fresh `find` for the active editable field: `textbox "IDO Name:" [active] [ref=f1e1534]` (empty). Used this ref; it is the editable IDO Name criteria editor in FiP mode. (The read-only `CollectionNameEdit` from T7 was not targeted; its `data-mgcompnamevalue` attribute was not inspected because JavaScript is denied, so element identity rests on the editable behaviour and the accessibility name.)
10. **`browser_type` `FX_LoginUsers` into `f1e1534`** (succeeded; the criterion appeared in the field and in the criteria row).
11. **Tab once** to commit (focus moved to `Extends:`).
12. Screenshot `t12-03` — pre-F4 criterion capture (see decisive evidence).
13. **F4 once** (one query).
14. Screenshot `t12-04` — post-F4 result (see decisive evidence).
15. Fresh `find` readback of the detail fields and the row (read-only). Result list captured in the decisive observations.
16. **Click on the `Properties` sub-tab (`f1e1678`) once** — read-only panel switch inside the IDO detail (no cell, no edit control).
17. Screenshot `t12-05` — Properties sub-tab.
18. Scoped snapshot of the properties grid `f1e2000` (read-only; saved as `t12-06-idos-fx-loginusers-properties-grid-scoped-snapshot.md`).
19. Console warning-level export (read-only; `t12-07-console-warning-level-after-properties-readback.txt`).

**Not performed:** Check In, Check Out, Undo Check Out, Save, New IDO / New Table / New Property / New Method / New Data Rule, Delete, Finish, Create Form, Designer tab, runtime open, record insert, metadata unload, FormSync, Escape, Enter, coordinate clicks, typing into the Description field (focus was placed there by F4; no text entered), any edit of a property row, any click in the Tables or Properties grids.

## Decisive observations

### `t12-03-idos-criterion-fx-loginusers-pre-f4.png` (pre-F4)
- Header identity visible: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- IDOs title with filter icon; status `Filter in Place`; IDO Name criteria field shows `FX_LoginUsers`; criteria row shows `FX_LoginUsers`.
- Proves: the target criterion was committed before the query. Does not prove a result.

### `t12-04-idos-fx-loginusers-post-f4.png` (post-F4) — decisive IDO readback
- One grid row `FX_LoginUsers` with the check indicator ticked.
- IDO Name `FX_LoginUsers`; Project Name `FX_HelloWorldProject01`; Label String ID `oFX_LoginUsers`; Caption `oFX_LoginUsers`; Access As `G6R`; Revision Num `1`; Revision Date `10/26/2026`; Locked By `anton.ramos@…` (truncated).
- `Check In` button enabled (dark); `Undo Check Out` disabled (light).
- Tables tab: one row, Table Name `FX_LoginUsers`, Table Alias `fxlogin`, Table Type `Primary Base`, Join Type `Inner`.
- Status `Description (IDOs 1 of 1)`; Description field focused with no text entered; Save disabled.
- Accessibility readback (fresh `find`): `Locked By:` textbox value `SECRET_MONGOOSE_USERNAME` (masked by the harness; not read or recorded); `Label String ID` `oFX_LoginUsers`; `Access As` `G6R`; `Revision Num` `1`; `Revision Date` `10/26/2026`; Table row `FX_LoginUsers fxlogin Primary Base Inner`; `Check In` button present, `Undo Check Out` `[disabled]`.
- Proves: the IDO exists by this exact name in this project, linked to a table named `FX_LoginUsers` with alias `fxlogin`, and is checked out. Does not prove the physical SQL table exists (Sql Tables not queried in T12). Does not prove the checkout holder beyond the visible masked/truncated value.

### `t12-05-idos-fx-loginusers-properties-subtab-readonly.png` and scoped snapshot `t12-06` — property readback
Properties grid rows (Property Name, Seq, Property Class, Column Name, Key Seq, Data Type, Length, Column Type, Required):

| Seq | Property Name | Property Class | Column Name | Key Seq | Data Type | Length | Column Type | Required |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_Username | blank | FX_Username | 1 | String | 50 | nvarchar | checked |
| 2 | FX_PasswordHash | blank | FX_PasswordHash | 0 | String | 64 | nvarchar | not checked |
| 3 | FX_Role | blank | FX_Role | 0 | String | 50 | nvarchar | not checked |
| 4 | FX_Store | blank | FX_Store | 0 | String | 50 | nvarchar | not checked |
| 5 | CreatedBy | blank | CreatedBy | 0 | String | 128 | UsernameType | (Read Only checked) |
| 6 | UpdatedBy | blank | UpdatedBy | 0 | String | 128 | UsernameType | (Read Only checked) |
| 7 | CreateDate | blank | CreateDate | 0 | Date | — | CurrentDateType | (Read Only checked) |
| 8 | RecordDate | blank | RecordDate | 0 | Date | — | CurrentDateType | (Read Only checked) |
| 9 | RowPointer | blank | RowPointer | 0 | GUID | — | RowPointerType | (Read Only checked) |
| 10 | NoteExistsFlag | blank | NoteExistsFlag | 0 | Byte | — | FlagNyType | — |
| 11 | InWorkflow | blank | InWorkflow | 0 | Byte | — | FlagNyType | — |

- Rows 1–4 are the four configured properties. Their names, String types, lengths 50/64/50/50, FX_Username Key Seq 1 and Required, and blank Property Classes match the T10 committed page-1 readback and the intended configuration.
- Rows 5–11 are wizard-generated default audit/system properties. They were not added by the worker. They are recorded as observed; their presence is a disclosed departure from the "four configured properties only" expectation, not a worker-added extra.
- The `Required` column is the grid column with a checkbox at the position after Length/Column Type. In the accessibility row text, row 1 has checkboxes `not checked / checked / not checked / not checked`; rows 2–4 have all four `not checked`. Rows 5–9 have `Read Only` checked. Column header text is truncated in the screenshot (`Require`), so the identification is from column position and the row text, not from a full header label.
- The grid snapshot listed 11 rows. Whether further rows exist beyond row 11 was not independently confirmed (grid may render lazily); disclosed as a limitation.

### `t12-01-idos-grid-scoped-snapshot.md` (pre-filter)
- Lists the unfiltered IDO list (65 rendered rows, starting `ABDataServices`). Contains no `FX_LoginUsers` row. This is a pre-query state, not a result. It is not used as absence evidence.

## Console (read-only)

- Page snapshot counter at T12: `3 errors, 2 warnings`. The T11 record stated `2 errors, 0 warnings`. The difference of one is **not explained** by T12 actions.
- Warning-level export (`t12-07`): total 31 messages; the 3 errors are all `Permissions policy violation: unload is not allowed in this document` (Mongoose client scripts); the 2 warnings are an origin-trial notice and an `ApplicationUrlResolver` template-URL notice. No error mentions IDOs, the wizard, FX_LoginUsers or a save. No new error class was identified; the one-count increase is recorded as an unexplained counter difference.

## Counts (T12)

- Browser mutating-class actions taking effect: 4 — FiP toggle ON (1), criterion text entry (1), Tab commit (1), F4 query (1). Plus one Properties sub-tab click (panel navigation, 1). Total 5.
- Tab selects: 1 (succeeded first attempt).
- Check In / Check Out / Undo Check Out: 0 / 0 / 0.
- Save: 0. Finish: 0. Create Form Yes/No: 0/0. Classic Form creation: 0. Runtime open: 0. Record insert/save: 0.
- Metadata unload, FormSync, deployment: 0.
- Coordinate clicks: 0. Escape: 0. Enter: 0. Tab: 1 (commit only). Recovery attempts: 0. Session recovery: 0 (no expiry observed). Sign-in: 0.
- Fresh untargeted snapshots: 1 (task start). Scoped snapshots (read-only): 3 (`f1e101`, `f1e24`, `f1e2000`). `find` queries: 9 (read-only). Ref-not-found: 0. Timeouts: 0.
- Screenshots: 5 successful (`t12-00`, `t12-02`, `t12-03`, `t12-04`, `t12-05`); each inspected visually. Console export: 1.
- Tool-generated snapshot and console files were written by the MCP wrapper under `evidence/playwright/` (outside `evidence/EXP-137/`).
- Worker-authored browser JavaScript: 0. The `Ran Playwright code` blocks in tool outputs are MCP wrapper output. `worker_tool_policy.deny_browser_javascript` remains unverified by the worker.

## Acceptance mapping (T12)

- **AC-3 (creation identity, partial):** the IDO `FX_LoginUsers` and its table linkage `FX_LoginUsers` / `fxlogin` are observed by readback. The physical SQL table is not yet verified. AC-3 remains open until the SQL table readback.
- **AC-6 (checkout state): observed.** IDO located in `FX_HelloWorldProject01`; checkout state recorded as checked out (visible controls). No check-in performed. Single check-in pending coordinator review.
- **AC-7 (partial):** IDO metadata and the four property definitions are observed in the IDO readback, with Required and Primary Key status and String lengths. Sql Tables and Sql Columns readbacks are NOT performed; AC-7 is not passed.
- **AC-5, AC-8 to AC-10:** not evaluated in T12.

## Limitations

1. The IDO readback is UI-level; no database readback.
2. The masked `Locked By` value is not read by the worker; the operator-account attribution of the checkout rests on the header identity and the truncated visible `anton.ramos@…` text.
3. The IDO criteria element was identified by the accessibility name `IDO Name:` with `[active]` state and by its editable behaviour. Its `data-mgcompnamevalue` was not inspected (JavaScript denied).
4. The IDO list was not re-queried for case-insensitive confirmation of the IDO name beyond this exact-case query; the T3/T1 lowercase absence check predates the creation and is superseded by the present positive result.
5. The FiP accessibility attribute disagreed with the visual state at task start; the visual state was used. Disclosed.
6. FiP is left ON with the criterion `FX_LoginUsers` in place (client view state; not a Mongoose change). The Description field holds focus with no text entered.
7. Property grid: 11 rows observed in a single scoped snapshot; completeness beyond row 11 not independently confirmed.
8. Seven wizard-generated default properties are present on the IDO (rows 5–11). They were not requested by the brief; they are wizard output, not worker additions.
9. Console counter increased from 2 errors (T11) to 3 errors (T12) without an identified cause; all messages are the same vendor permissions-policy class.

## Screenshot and file inventory (under `evidence/EXP-137/`)

- `t12-00-webclient-idos-pre-filter-state.png` — pre-filter state; header identity; normal IDOs mode; Save disabled.
- `t12-01-idos-grid-scoped-snapshot.md` — scoped read-only snapshot of the unfiltered IDO list grid (no target row).
- `t12-02-idos-fip-after-toggle-pre-criterion.png` — FiP ON; IDO Name criteria field empty and focused.
- `t12-03-idos-criterion-fx-loginusers-pre-f4.png` — criterion `FX_LoginUsers` committed before F4.
- `t12-04-idos-fx-loginusers-post-f4.png` — one row `FX_LoginUsers`, Project `FX_HelloWorldProject01`, Table `FX_LoginUsers` / `fxlogin`, checked out (Check In enabled).
- `t12-05-idos-fx-loginusers-properties-subtab-readonly.png` — Properties sub-tab, four configured properties plus wizard defaults.
- `t12-06-idos-fx-loginusers-properties-grid-scoped-snapshot.md` — scoped snapshot listing 11 property rows.
- `t12-07-console-warning-level-after-properties-readback.txt` — console export; 3 permissions-policy errors, 2 warnings.
- `T12-post-creation-idos-verification.md` — this file.

Pre-existing evidence not modified: `T11-finish-and-create-form-no.md`, `t11-01`, `t11-02`.
