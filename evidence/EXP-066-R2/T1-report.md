# EXP-066-R2 — T1 report: read-only preflight and baseline (AC-1); stopped before New Table

- Run `R-20261012-234530-k6cU`, cycle 0, task **T1**. Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `ee071bad-2d82-4347-a022-f74adb37f66b`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- Record: `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- **Outcome: AC-1 supported (observed, UI and accessibility level).** Target IDO `FX_Items` is one exact-name match, checked out to the operator, Revision 2 (10/10/2026); 12 properties including FX_Picture; Tables inventory is one entry (FX_Items, fxitms, Primary Base); `FX_UMsDescription` and an fxum table entry are absent. Both brief preconditions for a later change hold (checked out to the operator; neither target exists). **No change was made. New Table was not opened.**

## 1. Sources reviewed (before browser interaction)

- `AGENTS.md` (in the task text; learning mode, FX_ scope extension, evidence and recovery rules).
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 7 (lines 192–207): New Table, alias, join `UMs.UM = Items.UM`, Add and OK, Bound New Property using the joined Description column, prefixed name, Finish, then close and unload (the unload is deferred to Section 8 by the brief). Source precision noted there: the saved spelling of `UMsDescription` and the join direction, cardinality and generated SQL are not given.
- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` and `evidence/EXP-066/T2-report.md` (full): the Table Name lookup blocker (the list visibly ends at `FrtForms`; typed `FX_UMs` was not committed); IDO Table Wizard defaults (Table Type Secondary, Join Type Left Outer). The operator's outcome note (EXP-066 record, "Outcome") says the lookup loads only its first page and the replay must commit the typed Table Name with Tab; this T1 did not test that.
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md` (full): IDO Collections route (Select Form, `IDOs / IdoCollections`), one F4 exact-name query, Check Out before New Property, the Bind To lookup listing `<alias>.<column>`, Finish commits immediately with Save disabled, checkout leaves the revision unchanged. Its T1 and T5 reports were not re-read in this task.
- Not read: `tools/` (intentionally unreadable); no secrets file; no git commands (no shell). The repository starting state is taken from the session-start git status supplied in the task context: branch `claude-harness`, `?? assets/`, brief commits `47b914a` (draft) and `b8c5139` (approved).

## 2. Browser tabs and selected Form

- Tab list performed **before** the first tab selection (read-only):
  - tab 0 = Web Designer (`designer/default.aspx?MGForm=FX_Items`). Not selected, not screenshotted, not acted on.
  - tab 1 = Web Client (`favoriteContext=IdoCollections`).
- Tab 1 selected once; succeeded.
- Starting Web Client state (fresh untargeted snapshot): the inherited **FX_Items runtime** tab (inactive, not acted on) and an **IDOs** tab active for `FX_Items` in the Properties sub-tab. The Form was clean (toolbar Save disabled). No dialog, no banner, no sign-in challenge.
- Route: **reused the clean open IDOs tab** (the brief allows reuse of a clean open IDO Collections Form). **Form > Open > Select Form was not used**, so no Select Form dialog was answered this task.

## 3. Identity, checkout and revision (AC-1)

Evidence: `t1-01` (pre-query), `t1-03` (settled identity); snapshot readback.

| Field | Value (verbatim) |
|---|---|
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Grid | one row `FX_Items`; status **`Description (IDOs 1 of 1)`** after the query settled |
| IDO Name | `FX_Items` |
| Project Name | `FX_HelloWorldProject01` |
| Base table / alias / table type | `FX_Items` / `fxitms` / Primary Base (from the Tables view, §5) |
| Revision Num / Revision Date | `2` / `10/10/2026` |
| Locked By | `anton.ramos@3mworks.com.ph` (full value from the accessibility tree; clipped on screen) |
| Checkout state | Checked out to the operator: **Check In enabled, Undo Check Out enabled** |
| Access As / Label String ID / Caption | `G6R` / `oFX_Items` / `oFX_Items` |
| Toolbar Save | **disabled** (clean) |

Checkout matches the brief's precondition (checked out to the operator since EXP-061). The revision is 2 and unchanged from EXP-061 T4/T5.

## 4. Property inventory (AC-1): 12 rows, FX_UMsDescription absent

Evidence: `t1-01` (rows 5–12, pre-query), `t1-03` (rows 1–8, settled); the accessibility readback of the full 12-row grid (settled).

| Seq | Property Name | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | FX_ItemBase | Bound to Column | FX_Item | 1 | (blank) | (blank) | (blank) |
| 2 | FX_Description | (none) | Bound to Column | FX_Description | 0 | String | 150 | nvarchar |
| 3 | FX_Cost | FX_Cost | Bound to Column | FX_Cost | 0 | (blank) | (blank) | (blank) |
| 4 | FX_UM | FX_UM | Bound to Column | FX_UM | 0 | (blank) | (blank) | (blank) |
| 5 | CreatedBy | (none) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType |
| 6 | UpdatedBy | (none) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType |
| 7 | CreateDate | (none) | Bound to Column | CreateDate | 0 | Date | (blank) | CurrentDateType |
| 8 | RecordDate | (none) | Bound to Column | RecordDate | 0 | Date | (blank) | CurrentDateType |
| 9 | RowPointer | (none) | Bound to Column | RowPointer | 0 | GUID | (blank) | RowPointerType |
| 10 | NoteExistsFlag | (none) | Bound to Column | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType |
| 11 | InWorkflow | (none) | Bound to Column | InWorkflow | 0 | Byte | (blank) | FlagNyType |
| 12 | **FX_Picture** | **FX_Picture** | Bound to Column | FX_Picture | 0 | Binary | (blank) | varbinary |

- Count: **12** (including FX_Picture at row 12). No Derived rows.
- `FX_UMsDescription`: **absent** (no row, no name match in the grid).
- Class-bound rows (FX_Item, FX_Cost, FX_UM) show blank Data Type / Length / Column Type in this grid, as recorded in EXP-061; not re-verified here.

## 5. Tables inventory (AC-1): one entry, no fxum

Evidence: `t1-04` (Tables view, before close).

- Opened with the IDOs form's **Tables** button; it opened a separate **IDO Tables** tab (`favoriteContext=IdoTables`), as EXP-066 T2 observed.
- One row: IDO Name `FX_Items`; Table Name `FX_Items`; Table Alias `fxitms`; Table Type `Primary Base`; Join Type `Inner`; Join Text blank. Status `(IDO Tables 1 of 1)`.
- **No fxum entry**; no FX_UMs row.
- The panel was closed once with `Close Panel IDO Tables` (clean; no prompt); the IDOs tab became active again.

## 6. Query and recovery (one corrected attempt)

This section is the one place where the run deviated from a single clean F4, recorded verbatim.

1. The IDO Name criterion textbox (already holding `FX_Items`) was clicked (one click), then **F4 (key press 1)**. Result: the form did **not** show the settled record. It showed `Filter in Place` in the status bar and the tab's filter icon; the record fields were blank; the IDO Name criterion `FX_Items` remained, selected and focused; the grid row was unchecked. Fresh untargeted snapshot (count 1 of the fresh-snapshot allowance) and visual inspection `t1-02` confirmed this state. **Interpretation (observed, not established):** the first F4 entered Filter-in-Place criteria entry with the criterion retained, rather than executing the query.
2. **Corrected attempt:** with focus still in the IDO Name criterion and the value still `FX_Items`, **F4 (key press 2)** was pressed once; 3 s wait; visual inspection `t1-03`; fresh untargeted snapshot. Result: status `Description (IDOs 1 of 1)`; the record fields show FX_Items as above; Save disabled.
3. **Caveat for the record:** the brief says "one exact-name F4 query". Two F4 key presses were made: the first entered Filter-in-Place (no result), the second executed the query. The experiment record counts this honestly. A later task should decide whether a single F4 query is the expected route when the IDOs tab is already open.

The Description textbox received focus after the query settled (highlighted). **No text was typed into it.**

## 7. Acceptance AC-1 (this task)

- Sources reviewed: yes (§1).
- Session usable: yes (tab 1 Web Client; no sign-in, no challenge).
- IDO Collections open with one exact-name match for FX_Items: yes (after the corrected F4).
- Identity, revision (2 / 10/10/2026), checkout (to the operator) and Locked By recorded: yes (§3).
- Property inventory (12 including FX_Picture) and Tables inventory (FX_Items, fxitms, Primary Base) recorded: yes (§4, §5).
- FX_UMsDescription absent and no fxum table entry: yes (§4, §5).
- Evidence: `t1-01` (pre-query identity and rows 5–12), `t1-03` (settled identity, rows 1–8), `t1-04` (Tables), `t1-05` (final state).
- Limits: UI and accessibility level only; no database or SQL read; the revision and checkout are read from the header fields and the Locked By / enabled-control state.

## 8. Cumulative browser action audit (T1, exact counts)

| Action | Count | Notes |
|---|---|---|
| Browser tab list | 1 | before the first tab selection |
| Browser tab select | 1 | tab 1 (Web Client); succeeded |
| Untargeted browser snapshots | 3 | start; after the first F4; settled readback |
| Targeted snapshots | 0 | — |
| Finds | 1 | `Close Panel IDO Tables` ref lookup (read-only) |
| Clicks | 3 | IDO Name criterion textbox (focus); `Tables` button; `Close Panel IDO Tables` |
| Typed entries | 0 | — |
| Key presses | 2 | F4 (entered Filter-in-Place; corrected attempt) and F4 (executed the query) |
| Mouse moves / mouse wheel | 0 / 0 | — |
| Waits | 4 | 3 s, 3 s, 3 s, 2 s |
| Screenshot calls | 5 | `t1-01`, `t1-02`, `t1-03`, `t1-04`, `t1-05` (one call each) |
| Dialogs answered | 0 | Select Form not used |
| Ref-not-found / timeouts | 0 / 0 | — |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 | — |
| Direct URL navigation, refresh, restart, reauthentication | 0 | — |
| Form opened (new) | 0 | the existing clean IDOs tab was reused |
| IDO Tables sub-view opened / closed | 1 / 1 | a sub-view, not the IDO Collections lifecycle |
| **New Table** | **0** | not opened |
| **Add / OK (table wizard)** | **0 / 0** | — |
| Table entries added | 0 | — |
| New Property wizard / Finish | 0 / 0 | — |
| Save | 0 | — |
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | — |
| IDO Collections close / reopen | 0 / 0 | — |
| Runtime FX_Items Form open / close / reopen / interaction | 0 / 0 / 0 / 0 | the inherited runtime tab not acted on |
| Web Designer actions | 0 | tab 0 listed only; never selected |
| Unload / cache / FormSync / deployment / regeneration | 0 | — |
| Changes to any object | 0 | read-only |

Total browser calls for T1: **20** (tab list 1, tab select 1, snapshots 3, find 1, clicks 3, key presses 2, waits 4, screenshots 5).

## 9. Worker-written file inventory (T1)

- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created).
- `evidence/EXP-066-R2/T1-report.md` (created; this file).
- `evidence/EXP-066-R2/t1-01-webclient-initial-state-idos-reused.png` (created).
- `evidence/EXP-066-R2/t1-02-idos-FX_Items-after-f4-settled.png` (created). **Filename is misleading:** it shows the Filter-in-Place state after the first F4 (not a settled query). Not renamed (no shell; the name is kept as written).
- `evidence/EXP-066-R2/t1-03-idos-FX_Items-query-settled-identity-tables.png` (created). **Filename is misleading:** it shows the settled identity and property rows 1–8; the Tables inventory is in `t1-04`.
- `evidence/EXP-066-R2/t1-04-ido-tables-baseline-one-entry.png` (created).
- `evidence/EXP-066-R2/t1-05-final-state-idos-checked-out-save-disabled.png` (created).
- Tool-written (not worker-authored; outside the EXP-066-R2 path): `evidence/playwright/` files produced by the browser tool during this task, observed in tool outputs: `console-2026-10-12T15-45-44-325Z.log`, `page-2026-10-12T15-46-04-541Z.yml`, `page-2026-10-12T15-46-09-834Z.yml`, `page-2026-10-12T15-46-17-393Z.yml`, `page-2026-10-12T15-46-41-827Z.yml`, `page-2026-10-12T15-46-52-204Z.yml`, `page-2026-10-12T15-46-55-481Z.yml`, `page-2026-10-12T15-47-04-812Z.yml`. The list may be incomplete; the harness and the operator's git review are authoritative.

## 10. Decisive evidence per screenshot (what each proves and does not prove)

- **`t1-01`** (pre-query, IDOs tab, rows 5–12 visible): proves the starting identity (IDO `FX_Items`, project `FX_HelloWorldProject01`, Revision 2 / 10/10/2026, Locked By the operator, Check In enabled, Save disabled, row 12 FX_Picture). Does **not** show rows 1–4, the Tables view, or the database.
- **`t1-02`** (after the first F4): proves the Filter-in-Place state (status `Filter in Place`, blank record fields, criterion `FX_Items` retained). Does **not** prove the query result; the settled result is `t1-03`.
- **`t1-03`** (settled query): proves status `Description (IDOs 1 of 1)`; one FX_Items identity; project, revision, Locked By and checkout; property rows 1–8 (FX_Item, FX_Description, FX_Cost, FX_UM, CreatedBy, UpdatedBy, CreateDate, RecordDate). Does **not** show rows 9–12 (those are in the accessibility readback in §4), nor the Tables view.
- **`t1-04`** (IDO Tables): proves one Tables row (FX_Items, fxitms, Primary Base, Join Type Inner, Join Text blank; status `(IDO Tables 1 of 1)`), i.e. no fxum entry. Does **not** prove the SQL table set or the server's list of tables.
- **`t1-05`** (final state): proves the IDOs tab is active and clean (Revision 2, Locked By the operator, Check In enabled, Save disabled), no dialog. Does **not** prove the database state.

## 11. Blockers and open questions

- **No blocker for AC-1.** The one anomaly is the first F4 entering Filter-in-Place (§6); it was resolved by one corrected F4, within the brief's recovery allowance.
- Open (not resolved here): whether the first F4 is the expected entry into criteria mode when the IDOs tab is already open. A later task should decide whether to use a single F4 from the normal record view (the EXP-061 route opened the form and queried with one F4).
- Open (carried from EXP-066): whether SQL table `FX_UMs` exists in the tenant; the Table Name lookup's completeness. Not checked here. The operator's EXP-066 outcome says `dbo.FX_UMs` exists (EXP-044); not re-verified in T1.
- The inherited FX_Items runtime tab is still open and clean; not acted on.

## 12. Next permitted step

Stop here (T1 is read-only). A separate, operator-approved task (T2) may open New Table once, commit `FX_UMs` with Tab (the brief's route), set alias `fxum`, enter the join `fxum.FX_UM = fxitms.FX_UM`, and click OK once. No such step has been taken in T1.
