# EXP-066 — T2 report: New Table (FX_UMs) attempt; stopped before Add (Section 7 join not created)

- Run `R-20261012-233011-OefG`, cycle 1, task **T2**. Worker session `a642fdcf-6e38-4c1c-a214-edc2810b8bdb`; task_message_id `bf99e126-5929-4155-a580-aa35757ef363`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- **Outcome: BLOCKED at the table-selection step (AC-2 not supported).** New Table was invoked once and the IDO Table Wizard opened. The required table `FX_UMs` could not be selected unambiguously from the Table Name list, so per the brief **Add and OK were not invoked** and the wizard was cancelled. **No table entry, property, Save or other mutation was made.**
- Record: `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.

## 1. Sources reviewed (T2 start)

- `evidence/EXP-066/T1-report.md` (full) and the EXP-066 record (full). Baseline recorded there: FX_Items, fxitms, Primary Base, one Tables entry, 12 properties (FX_Picture row 12), FX_UMsDescription absent, checked out to `anton.ramos@3mworks.com.ph`, revision 2 (10/10/2026).
- The bounded T2 instruction (choose only FX_UMs; alias `fxum`; join `fxum.FX_UM = fxitms.FX_UM`; keep the default join type; stop without confirming if a control or value cannot be established unambiguously).

## 2. Browser tab handling

- Tab list performed first (read-only): tab 0 = Web Designer (`…designer/default.aspx?MGForm=FX_Items`), not selected and not acted on; tab 1 = Web Client (`favoriteContext=IdoCollections`).
- Tab 1 selected once (first select after the list; succeeded).

## 3. Pre-change gate (fresh snapshot, read-only)

- Web Client IDOs tab active (URL `favoriteContext=IdoCollections`); the in-form Properties sub-tab was selected, as the brief said.
- IDO `FX_Items`; Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled (checked out to the operator); Save disabled.
- Properties: 12 rows (FX_Item, FX_Description, FX_Cost, FX_UM, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow, FX_Picture). Unchanged from T1.
- Screenshot `t2-01-pre-change-idos-FX_Items-checked-out-properties-baseline-12.png` (verified by viewing): shows the identity bar, Revision Num 2, Revision Date 10/10/2026, Locked By (truncated on screen), Check In and Undo Check Out enabled, toolbar Save disabled, and property grid rows 5–12 (the grid was left scrolled from T1; row 12 FX_Picture visible). Rows 1–4 are not visible in this capture; they were verified in the snapshot above (and in T1's `t1-04`).

## 4. Tables view (baseline, before New Table)

- The **Tables** button in the IDOs form opened a separate **IDO Tables** tab (`favoriteContext=IdoTables`), not an in-form sub-view. Observed.
- Tables view baseline: one row — Table Name `FX_Items`, IDO Name `FX_Items`, Table Alias `fxitms`, Table Type `Primary Base`, Join Type `Inner`, Join Text blank. Status `(IDO Tables 1 of 1)`. Buttons: New Table..., EditTable..., Bind Properties....
- Screenshot `t2-02-pre-new-table-baseline-tables-view-one-entry.png`: shows the one row and the status line. Proves the baseline Tables inventory.

## 5. New Table wizard: dialog fields (verbatim, before any entry)

New Table... (one click) opened an **IDO Table Wizard** tab (`favoriteContext=IdoTableWizard`). Fields, as they appeared before any entry:

| Field (label as shown) | Required | Initial value shown | Control |
|---|---|---|---|
| IDO Name: | — | `FX_Items` | read-only textbox |
| Table Name: | * | blank | combobox with Open button (SQL table lookup) |
| Table Alias: | * | blank | textbox |
| Table Type: | * | **Secondary** | combobox with Open button |
| Join Type: | * | **Left Outer** | combobox with Open button |
| Join builder row: Column Name: `=` Table Name: Column Name: [Add] | — | blank | two columns of comboboxes and an Add button |
| Join Text: | * | blank | textbox (wide bordered area, below the builder) |
| OK / Cancel | — | — | buttons |

- **Default join type = `Left Outer`** (the dialog default; not Inner). The brief said to keep the default; it was not changed.
- Note: the existing primary row shows Join Type `Inner`; the wizard default for a new secondary table is `Left Outer`.
- Screenshot `t2-03-new-table-wizard-opened-blank-defaults.png` (verified by viewing): blank Table Name and Table Alias (red required markers), Table Type Secondary, Join Type Left Outer, a join row of three blank dropdowns with `=` and an Add button, a required empty join-text area, and OK/Cancel. The labels "Column Name:", "Table Name:" and "Join Text:" for the join row come from the accessibility tree; they are not visible on screen in this capture.

## 6. Table selection attempt (not established)

1. Table Name Open button (one click) opened the lookup list. The list is alphabetical (`ABDataServices` first) and contains SQL table names.
2. Typed `FX_UMs` into the Table Name combobox (one type action). The combobox then displayed `FX_UMs`, but the list did **not** filter: it still began at `ABDataServices`. Table Alias and Join Text stayed empty. Screenshot `t2-04-new-table-table-name-list-open.png`.
3. Mouse moved over the list (one move) and the list was scrolled (wheel 6000, then wheel 300). Screenshot `t2-04b-table-name-list-after-scroll.png` shows the list at its end (last visible entry `FrtForms`, scrollbar at the bottom).
4. One fresh visible inspection (screenshot `t2-04c-table-name-list-visible-inspection.png`): **no `FX_UMs` option is visible; the list ends at `FrtForms`.** A `browser_find` for `FX_UMs` returned no match in the option list. A targeted accessibility snapshot of the listbox returned the same top section (`ABDataServices` … `FrtForms`) and no `FX_` option. The accessibility tree may not expose the full (virtualized) list, so this is not proven to be absent from the server; but neither the visible list nor the accessibility tree offered an unambiguous `FX_UMs` option to select.
5. Escape (one key) closed the dropdown without choosing an item. The combobox kept the typed text `FX_UMs`, which is **not a confirmed selection**. No Enter key was pressed, because Enter with an open list could select the highlighted item (`ABDataServices`).

Per the brief ("If the required controls or values cannot be established unambiguously, stop without confirming"), the worker did **not** press Add or OK.

## 7. Cancel and state check

- The unconfirmed wizard was closed with its **Cancel** button (one click). No Add, no OK, no table entry was created. The typed `FX_UMs` text was discarded with the wizard; no IDO data was committed.
- Fresh snapshot after Cancel: back on the IDO Tables tab, status `(IDO Tables 1 of 1)`, one row (FX_Items, fxitms, Primary Base, Inner), Join Text blank. Screenshot `t2-05-post-cancel-tables-view-still-one-entry.png` shows this state.
- The IDO Tables view was then closed with its **Close Panel IDO Tables** button (one click). Clean (no changes; no prompt).
- Final parent state (grep of fresh snapshot): IDOs tab selected; Save disabled; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out present; Properties sub-tab selected. Screenshot `t2-06-final-state-idos-checked-out-save-disabled.png` shows the identity bar, revision 2 (10/10/2026), Locked By (truncated on screen), Check In and Undo Check Out enabled, toolbar Save disabled, and property rows 5–12 including row 12 FX_Picture.
- Status bar text in `t2-06` reads `&Tables (IDOs 1 of 1)`: this is the status text of the Tables button after its focus; it is not a changed state.
- Parent Form: **clean** (Save disabled). Not saved, not closed.

## 8. Blocker and open question

- **Blocker:** the Table Name lookup did not offer an `FX_UMs` option that could be selected unambiguously. Typed text was not confirmed as a selection, and the list visibly ends at `FrtForms`.
- **Open question (not checked in T2):** whether a SQL table named `FX_UMs` exists in this tenant. The Form menu in T1 listed a **Form** named `FX_UMs` (a Form, not a SQL table), so it does not establish the table. The coordinator should decide whether to verify the SQL table through the Sql Tables Form (a read-only check in a separate authorized task) before a further New Table attempt.
- **Open question:** whether the wizard's table lookup is a complete list (it appeared to contain only the earlier part of the alphabet in the accessibility tree). Not resolved in T2.
- No retry was made, consistent with the brief's "one fresh untargeted snapshot and one corrected visible inspection" limit.

## 9. Action audit (T2 only, exact counts)

| Action | Count |
|---|---|
| Browser tab list | 1 |
| Browser tab select | 1 (succeeded; tab 1) |
| Untargeted browser snapshots | 6 (after tab select; after Tables click; after New Table click; after typing; after Escape; after Cancel) |
| Targeted snapshot (listbox `f1e1213`) | 1 |
| Finds (browser_find) | 2 (`FX_UMs`: no match; `FX_`: matches on the tab title and the combobox value only) |
| Clicks | 5 (Tables button; New Table...; Table Name Open; Cancel; Close Panel IDO Tables) |
| Typed entries | 1 (`FX_UMs` into the Table Name combobox) |
| Key presses | 1 (Escape) |
| Mouse moves | 1 (over the lookup list) |
| Mouse wheel | 2 (6000 and 300; list scroll only) |
| Waits | 0 |
| Screenshot calls | 8 (t2-01, t2-02, t2-03, t2-04, t2-04b, t2-04c, t2-05, t2-06) |
| Dialogs answered | 0 |
| **New Table invoked** | **1** (wizard opened; not confirmed) |
| **Add** | **0** |
| **OK (wizard)** | **0** |
| Wizard Cancel | 1 (no table entry created) |
| Table entries added | 0 |
| New Property / wizard / Finish | 0 / 0 / 0 |
| Save | 0 |
| Check Out / check-in / undo checkout | 0 / 0 / 0 |
| IDO Collections close / reopen | 0 / 0 |
| Runtime FX_Items Form interaction | 0 |
| Web Designer actions | 0 (tab 0 listed only; never selected) |
| Unload / cache / FormSync / deployment | 0 |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 |
| Refresh, restart, navigation (direct URL) | 0 |

- Note: each browser tool result displays an auto-generated "Ran Playwright code" wrapper; these are the tool's outputs, not scripts written by the worker.

### Cumulative (T1 + T2)

| Action | T1 | T2 | Total |
|---|---|---|---|
| Tab select / list | 1 / 1 | 1 / 1 | 2 / 2 |
| IDO Collections opened (Select Form) | 1 | 0 | 1 |
| Exact-name F4 query | 1 | 0 | 1 |
| New Table invoked | 0 | 1 | **1** |
| Add | 0 | 0 | **0** |
| OK (table wizard) | 0 | 0 | **0** |
| New Property wizard / Finish | 0 / 0 | 0 / 0 | 0 / 0 |
| Save | 0 | 0 | 0 |
| Check Out / check-in / undo | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| IDO Collections close / reopen | 0 / 0 | 0 / 0 | 0 / 0 |
| Runtime interaction | 0 | 0 | 0 |
| Web Designer actions | 0 | 0 | 0 |
| Unload / cache / FormSync / deployment | 0 | 0 | 0 |

### Remaining budgets (brief limits)

- New Table: the one invocation was used. The brief says never to invoke New Table more than once or retry an uncertain one, so **no further New Table in this experiment without a new authorization.**
- Add: 1 unused; OK: 1 unused (both gated on New Table selection being resolved first).
- New Property wizard: 1 unused; Finish: 1 unused; ordinary Save: up to 1 (only if the Form is left dirty after Finish).
- IDO Collections close/reopen: 1 unused; runtime close/reopen: 1 unused.

## 10. Worker-written file inventory (T2)

- `evidence/EXP-066/T2-report.md` (created; this file).
- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (updated: status, T2 section, cumulative counts, open questions).
- `evidence/EXP-066/t2-01-pre-change-idos-FX_Items-checked-out-properties-baseline-12.png`
- `evidence/EXP-066/t2-02-pre-new-table-baseline-tables-view-one-entry.png`
- `evidence/EXP-066/t2-03-new-table-wizard-opened-blank-defaults.png`
- `evidence/EXP-066/t2-04-new-table-table-name-list-open.png`
- `evidence/EXP-066/t2-04b-table-name-list-after-scroll.png`
- `evidence/EXP-066/t2-04c-table-name-list-visible-inspection.png`
- `evidence/EXP-066/t2-05-post-cancel-tables-view-still-one-entry.png`
- `evidence/EXP-066/t2-06-final-state-idos-checked-out-save-disabled.png`
- Tool-written (not worker-authored; outside the EXP-066 path; for harness and operator confinement review): `evidence/playwright/console-2026-10-12T15-34-22-849Z.log`, `page-2026-10-12T15-34-36-465Z.yml`, `page-2026-10-12T15-34-42-777Z.yml`, `page-2026-10-12T15-34-52-587Z.yml`, `page-2026-10-12T15-35-41-408Z.yml`, `page-2026-10-12T15-35-50-471Z.yml`. Other snapshot outputs of this task were returned inline and may not have produced files.
- No other repository file was written by this worker.

## 11. Decisive evidence (T2)

- `t2-02` and `t2-05`: Tables view one entry (FX_Items, fxitms, Primary Base, Inner) before New Table and after Cancel. Supports "no table entry added" (AC-2 negative; AC-7). Does not prove server-side state beyond the UI.
- `t2-03`: wizard field inventory and default join type (Left Outer; Table Type Secondary). Supports the recorded dialog fields (AC-2 partial). Does not show the join text (not built).
- `t2-04`, `t2-04b`, `t2-04c`: the Table Name list (no FX_UMs visible; list ends at FrtForms). Supports the blocker. Does not prove FX_UMs is absent from the tenant.
- `t2-06`: parent IDOs state (checked out to the operator, revision 2, Save disabled, 12 properties visible in rows 5–12). Supports the clean parent state after T2. Does not prove the FX_Items base table or properties in the database.

## 12. Acceptance status after T2

- AC-1: supported (T1); unchanged.
- **AC-2: NOT supported.** New Table invoked once; the wizard opened and the dialog fields were recorded; FX_UMs could not be selected unambiguously; Add and OK were not invoked; the Tables view still lists only FX_Items (fxitms). Evidence: `t2-03`, `t2-04c`, `t2-05`.
- AC-3 to AC-6: not started.
- AC-7: no other change observed in T2 (see the audit).

## 13. Final browser state

- Tab 1 (Web Client) selected. IDOs tab (`IdoCollections`) active for FX_Items, Properties sub-tab selected. Save disabled. No dialog, no wizard, no Tables tab open.
- Tab 0 (Web Designer) untouched.
- The inherited `FX_Items` runtime tab remains open and was not acted on.
- No in-page dialog or unsaved-change prompt remains.
