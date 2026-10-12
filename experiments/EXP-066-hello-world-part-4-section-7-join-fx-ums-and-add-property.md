# EXP-066 — Hello World Part 4 Section 7: join FX_UMs to the FX_Items IDO and add the FX_UMsDescription property

**Final status (after T3, 2026-10-12): EXPERIMENT BLOCKED at AC-2. Conclusion: BLOCKED; AC-3 to AC-6 not executed; no application change observed.** Final report: `evidence/EXP-066/T3-final-blocked-report.md`. T3 made no browser calls.

**Status before T3 (after T2, 2026-10-12): BLOCKED at the New Table table-selection step (AC-2 not supported). No change has been made to FX_Items.** T1 (read-only baseline) is complete: IDO `FX_Items` is one exact-name match, checked out to the operator, revision 2 (10/10/2026), with 12 properties including FX_Picture and one Tables entry (FX_Items, fxitms, Primary Base); `FX_UMsDescription` and an fxum table entry are absent. T2: New Table was invoked once and the IDO Table Wizard opened; the dialog defaults were recorded (Table Type `Secondary`, Join Type `Left Outer`). The wizard's Table Name list did not offer an `FX_UMs` option that could be selected unambiguously (the typed text `FX_UMs` was not confirmed). Per the brief, Add and OK were **not** invoked; the wizard was cancelled and the Tables view still lists only FX_Items (fxitms). Full reports: `evidence/EXP-066/T1-report.md`, `evidence/EXP-066/T2-report.md`. Classification: observed only; not replay_verified. Next permitted step: a coordinator decision on the open question in §Open questions (whether SQL table `FX_UMs` is present and selectable); no further New Table is permitted without new authorization.

## Run identity

- Run `R-20261012-233011-OefG`, cycle 0, task **T1** (read-only preflight). Worker session `a642fdcf-6e38-4c1c-a214-edc2810b8bdb`; task_message_id `2932afcb-04dd-4c01-bed2-5da71b8ba45e`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Form work); the IDO and property are tenant-wide.
- Brief commits (from session-start git state): `df3d68b` (draft), `ca93c35` (approved).
- Identity bar observed: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Record provenance: this record did not exist at the start of T1 (glob `experiments/EXP-066*` returned no files). It was created by the T1 worker at the path named in the brief.
- Evidence directory: `evidence/EXP-066/`. T1 report: `evidence/EXP-066/T1-report.md`.

## Objective (from the brief)

Follow `docs/mongoose/transcripts/hello-world-pt4.md` Section 7 (07:29–09:18), adapted to FX_ names, in the IDO Collections runtime Form. For the FX_Items IDO (base table FX_Items, alias fxitms; checked out to the operator since EXP-061): open its Tables view, add the FX_UMs table once with alias fxum and join condition `fxum.FX_UM = fxitms.FX_UM`, and confirm the join. Then run the New Property wizard once: keep Bound, bind to the FX_Description column of the joined fxum table, name the property `FX_UMsDescription`. Finish once. Verify the IDO lists the join and exactly one added property, close and reopen IDO Collections once, and confirm the three FX_Items runtime records still load. The tutorial's unload is deferred to the Section 8 experiment.

**Tutorial mapping (source precision):** tutorial `UMs` table → FX_UMs (alias `fxum`); tutorial `UMs.UM = Items.UM` → `fxum.FX_UM = fxitms.FX_UM`; tutorial `UMsDescription` → `FX_UMsDescription` (the transcript does not give the saved spelling; the brief fixes the name). The transcript does not show the join direction, cardinality, null semantics or generated SQL.

**Out of scope (summary):** any change to other IDOs, to existing FX_Items properties or to the base table; any table other than FX_UMs; any property other than FX_UMsDescription; check-in, undo checkout or any other checkout action; SQL, class, string, Form, theme or preference changes; unload, cache, FormSync, deployment or regeneration; runtime record changes or runtime Save; Web Designer actions; browser JavaScript, console or network inspection; direct URL navigation; refresh or restart.

## Sources reviewed (T1)

- `AGENTS.md`: full.
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 7 (lines 192–207): full.
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: full. Relevant precedent: the Select Form route (`IDOs / IdoCollections`); one F4 query; Check Out is required before New Property (no confirmation text); the wizard Bind To lookup lists `<alias>.<column>`; Finish commits immediately with Save disabled; a Check Out does not change the revision.
- `evidence/EXP-061/T1-report.md`: read for the route and checkout precedent (not re-verified in this run).
- Not read: `tools/` (intentionally unreadable). No secrets file read.

## Repository starting state (session-start git status; not re-verified; no shell)

- Branch `claude-harness`; main branch `main`; git user `aurorynaru`.
- Session-start status showed `?? assets/` (untracked; not written by this worker).
- EXP-066 documentation written in T1 (see Documentation changes).

## T1 — read-only preflight and baseline (AC-1)

Full report: `evidence/EXP-066/T1-report.md`.

- **Start (AC-1):** tab list performed before the first tab selection (tab 0 Web Designer, not selected; tab 1 Web Client). Tab 1 selected once. The Web Client showed an inherited FX_Items runtime Form (Save disabled; no dialog; no banner; no sign-in challenge).
- **Open (native route):** Form menu → Open → Select Form (filter `FX_Items` replaced with `IdoCollections`; one End key press to refresh the grid) → row `IDOs / IdoCollections` → OK once. Result: IDOs tab active; `favoriteContext=IdoCollections`; Save disabled; no dialog. Evidence: `t1-02`.
- **Exact-name query (AC-1):** one F4 for `FX_Items`; one row; status `Description (IDOs 1 of 1)`. Project `FX_HelloWorldProject01`; base table `FX_Items`; alias `fxitms`; Primary Base; Revision Num `2`; Revision Date `10/10/2026`; **Locked By `anton.ramos@3mworks.com.ph`** (checked out to the operator; Check In and Undo Check Out enabled); Save disabled. Evidence: `t1-03`.
- **Tables inventory (AC-1):** one row: FX_Items, fxitms, Primary Base, Inner. **No fxum entry.** Evidence: `t1-03`.
- **Property inventory (AC-1):** 12 rows, all Bound to Column: FX_Item (seq 1, class FX_ItemBase, key seq 1), FX_Description (seq 2, String 150, nvarchar), FX_Cost (seq 3, class FX_Cost), FX_UM (seq 4, class FX_UM), CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow (seq 5–11, framework columns), **FX_Picture (seq 12, class FX_Picture, column FX_Picture, Binary, varbinary)**. **`FX_UMsDescription` absent.** Evidence: `t1-04` (rows 1–8) and `t1-05` (rows 5–12 after scroll).
- **Stop:** stopped before New Table, as the brief instructs for T1. No change to FX_Items.

## Baseline (before any change; T1)

| Item | Baseline value |
|---|---|
| IDO | FX_Items (one exact-name match) |
| Project | FX_HelloWorldProject01 |
| Base table / alias / table type | FX_Items / fxitms / Primary Base |
| Revision Num / Revision Date | 2 / 10/10/2026 |
| Checkout | Checked out; Locked By `anton.ramos@3mworks.com.ph` |
| Tables | 1 entry (FX_Items, fxitms, Primary Base, Inner); no fxum |
| Properties | 12 (11 framework and business properties + FX_Picture) |
| FX_UMsDescription | absent |

## T2 — New Table invoked once; table not selectable; Add/OK not invoked; wizard cancelled (cycle 1; AC-2 NOT supported)

Full report: `evidence/EXP-066/T2-report.md`. Task message `bf99e126-5929-4155-a580-aa35757ef363`, worker session `a642fdcf-6e38-4c1c-a214-edc2810b8bdb`.

- **Gate (fresh):** tab list (1); tab 1 selected (1); IDOs tab for FX_Items; Revision 2; Locked By operator; Check In enabled; Save disabled; 12 properties. Clean.
- **Tables view (baseline):** the Tables button opened a separate **IDO Tables** tab (`favoriteContext=IdoTables`): one row FX_Items | FX_Items | fxitms | Primary Base | Inner; status `(IDO Tables 1 of 1)`. Evidence `t2-02`.
- **New Table (1 of 1):** the IDO Table Wizard opened. Recorded dialog fields (verbatim, before entry): IDO Name `FX_Items` (read-only); Table Name\* blank (SQL table lookup); Table Alias\* blank; Table Type\* **Secondary** (default); Join Type\* **Left Outer** (default; not Inner); join row: [Column Name] `=` [Table Name] [Column Name] [Add]; Join Text\* blank; OK / Cancel. Evidence `t2-03`.
- **Table selection (not established):** Table Name Open (1) listed SQL table names alphabetically from `ABDataServices`. Typed `FX_UMs` into the combobox (1): the combobox showed `FX_UMs` but the list did not filter. Scrolled the list (mouse move 1; wheel 6000 and 300). The list ends at `FrtForms`; **no `FX_UMs` option is visible** (screenshot `t2-04c`), and the listbox accessibility snapshot and a find for `FX_UMs` did not expose one. Escape (1) closed the list with no selection. Enter was deliberately not pressed.
- **Stop (brief rule):** Add and OK were **not** invoked. Wizard Cancel (1): no table entry created. Close Panel IDO Tables (1): view clean, no prompt.
- **Post-state (fresh snapshot and screenshot):** Tables view still one entry (`t2-05`); IDOs tab selected; Save disabled; Locked By operator; Check In and Undo Check Out present; Properties sub-tab; 12 rows, row 12 FX_Picture (`t2-06`). Parent Form clean; not saved or closed.
- **Counts (T2):** New Table 1; Add 0; OK 0; wizard Cancel 1; table entries added 0; properties added 0; Finish 0; wizard (New Property) 0; Save 0; checkout / check-in / undo 0; IDO close/reopen 0; runtime 0; Designer 0; unload 0; JavaScript / console / network 0. Clicks 5; typed 1; keys 1 (Escape); mouse moves 1; wheel 2; untargeted snapshots 6; targeted snapshot 1; finds 2; screenshots 8; dialogs answered 0.
- **Cumulative (T1 + T2):** New Table invoked **1**; Add **0**; OK **0**; Save **0**; Finish **0**; wizard **0**; checkout / check-in / undo **0**; IDO close / reopen **0**; runtime close / reopen **0**; unload **0**; Designer actions **0**.
- **Limits:** the table lookup's accessibility tree and the on-screen list both stopped at `FrtForms`; whether `FX_UMs` is absent from the server list, or simply not rendered, is not established. No SQL read. UI level only.

## Acceptance status (cumulative after T2)

| AC | Status | Evidence | Limits |
|---|---|---|---|
| AC-1 | **Supported (observed; UI and accessibility level)**: sources reviewed; session usable; one exact-name match; identity, revision, checkout and Locked By recorded; 12 properties including FX_Picture; Tables inventory (fxitms, Primary Base); FX_UMsDescription and fxum absent | `t1-01`, `t1-02`, `t1-03`, `t1-04`, `t1-05`; `T1-report.md` §2–6 | Class-bound Data Type / Length blank in grid; Locked By truncated on screen (full value via accessibility); no database read |
| AC-2 | **NOT supported (T2 blocked).** New Table invoked once; dialog fields and default join type (Left Outer) recorded; FX_UMs not selectable unambiguously; Add and OK not invoked; Tables view still one entry (fxitms) | `t2-02`, `t2-03`, `t2-04c`, `t2-05`; `T2-report.md` §4–7 | Selection could not be confirmed; join `fxum.FX_UM = fxitms.FX_UM` not entered; FX_UMs SQL table presence not verified |
| AC-3 to AC-6 | **NOT EXECUTED** (no New Property wizard, Finish, Save, IDO close/reopen or runtime check; the experiment is blocked at AC-2) | — | — |
| AC-7 | **Supported for T1–T3 audited actions** (no other IDO, property, table entry, checkout, SQL, Form, preference or Designer change; no unload) | Reconciled audit in `T3-final-blocked-report.md` §3–4 | Observed UI-level only; no database read |
| AC-8 | **PARTIAL** (T3 final report gives the reconciled audit, file inventory and final state; AC-3 to AC-6 not evidenced because not executed) | `T3-final-blocked-report.md` §1, §3, §5, §7 | Experiment BLOCKED |

## Operation counts (cumulative T1–T2)

| Operation | Count |
|---|---|
| Form opened (IDO Collections, Select Form) | 1 |
| Exact-name IDO query (F4) | 1 |
| New Table / Add / OK (table) | 1 / 0 / 0 (New Table invoked in T2; wizard cancelled, Cancel 1) |
| New Property wizard / Finish / Save | 0 / 0 / 0 |
| Check Out / check-in / undo checkout | 0 / 0 / 0 |
| Form close / reopen | 0 / 0 |
| Runtime FX_Items Form interaction | 0 |
| Web Designer actions | 0 |
| Unload / cache / FormSync / deployment | 0 / 0 / 0 / 0 |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 |
| Dialogs answered | 1 (Select Form OK; in-form Mongoose dialog) |
| Browser clicks / typed entries / keys / mouse moves / mouse wheel / waits (T1 + T2) | 10 / 3 / 3 / 2 / 4 / 1 (T1 5 / 2 / 2 / 1 / 2 / 1; T2 5 / 1 / 1 / 1 / 2 / 0) |
| Screenshots (calls) (T1 + T2) | 14 (T1: six calls, five unique files, `t1-05` written twice; T2: eight files) |
| Tab lists / tab selects (T1 + T2) | 2 / 2 |

Full cumulative audit lives in `evidence/EXP-066/T1-report.md` §8.

## Worker-written file inventory (T1)

- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created).
- `evidence/EXP-066/T1-report.md` (created).
- `evidence/EXP-066/t1-01-webclient-initial-state.png`; `t1-02-idos-opened-via-select-form-initial.png`; `t1-03-idos-FX_Items-query-settled-identity-tables.png`; `t1-04-idos-FX_Items-properties-baseline-12.png`; `t1-05-idos-FX_Items-properties-baseline-rows-9-12.png` (created).
- Tool-written (not worker-authored; outside the EXP-066 path): eight `evidence/playwright/` files from this window (two console logs, six page snapshots; listed in `T1-report.md` §9).

## Documentation changes (T1)

- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`: created (this record).
- `evidence/EXP-066/T1-report.md`: created.
- Screenshots `evidence/EXP-066/t1-01` to `t1-05`: created.
- No other repository file was written by T1. `tools/`, AGENTS.md, the tutorial and earlier experiment records were not written.

## Knowledge state

| Finding | State |
|---|---|
| Select Form row `IDOs / IdoCollections` opens IDO Collections with no challenge (second run; first run EXP-061) | **observed** (one run in this task) |
| Exact-name query for FX_Items returns one row (project FX_HelloWorldProject01, revision 2, Locked By operator) | **observed** (one run; UI level) |
| FX_Items checked out to the operator at the start of this task (since EXP-061) | **observed** (one run; UI level; no database read) |
| 12 properties incl. FX_Picture; FX_UMsDescription absent; Tables = one entry (fxitms) with no fxum | **observed** (one run; UI level) |
| Grid does not refresh the Select Form list until End is pressed after the filter changes | **observed** (one run) |
| IDO Tables button opens a separate IDO Tables tab (`favoriteContext=IdoTables`) with one row for FX_Items (fxitms, Primary Base, Inner) | **observed** (one run; T2) |
| New Table opens the IDO Table Wizard with Table Type `Secondary` and Join Type `Left Outer` as defaults (not Inner) | **observed** (one run; T2) |
| The wizard's Table Name lookup lists SQL table names alphabetically; a typed `FX_UMs` did not filter the list and no `FX_UMs` option was visible up to the list end (`FrtForms`) | **observed** (one run; T2; server presence not established) |
| Property wizard, Finish, Save, IDO close/reopen, runtime records | **not performed** (T2 stopped before Add) |
| Replay or procedure status | **not claimed** (not replay_verified) |

## Open questions and blockers

0. **Blocker (T2):** the IDO Table Wizard's Table Name lookup did not offer an `FX_UMs` option that could be selected unambiguously. The typed text was not a confirmed selection, so Add and OK were not invoked. Open: whether a SQL table `FX_UMs` exists in this tenant (the Form menu's `FX_UMs` entry is a Form, not evidence of the table), and whether the lookup is complete. Not checked in T2; needs coordinator direction (for example, a read-only Sql Tables check in a separate authorized task).
1. (T1) No blockers in T1.
2. The saved spelling of the tutorial's `UMsDescription` is not given by the transcript; the brief fixes `FX_UMsDescription`. The join direction, cardinality and generated SQL are not shown by the source and will not be claimed.
3. The inherited FX_Items runtime tab (provenance not established in this task) remains open and clean; to be closed and reopened only in the later task as the brief allows.
4. Class-bound Data Type / Length in the Properties grid remain blank for FX_Item, FX_Cost and FX_UM; not re-verified.

## Next permitted step

Not permitted without new authorization: a further New Table invocation (the one allowed invocation was used in T2), Add, OK, the New Property wizard (AC-3), Finish, Save, IDO close/reopen (AC-5) and the runtime check (AC-6). The coordinator decides whether to resolve the FX_UMs table question first, and whether to authorize a further New Table attempt.

## Worker-written file inventory (T2)

- `evidence/EXP-066/T2-report.md` (created).
- `evidence/EXP-066/t2-01-pre-change-idos-FX_Items-checked-out-properties-baseline-12.png`; `t2-02-pre-new-table-baseline-tables-view-one-entry.png`; `t2-03-new-table-wizard-opened-blank-defaults.png`; `t2-04-new-table-table-name-list-open.png`; `t2-04b-table-name-list-after-scroll.png`; `t2-04c-table-name-list-visible-inspection.png`; `t2-05-post-cancel-tables-view-still-one-entry.png`; `t2-06-final-state-idos-checked-out-save-disabled.png` (created).
- Tool-written (not worker-authored; outside the EXP-066 path): `evidence/playwright/` files `console-2026-10-12T15-34-22-849Z.log`, `page-2026-10-12T15-34-36-465Z.yml`, `page-2026-10-12T15-34-42-777Z.yml`, `page-2026-10-12T15-34-52-587Z.yml`, `page-2026-10-12T15-35-41-408Z.yml`, `page-2026-10-12T15-35-50-471Z.yml` (listed in `T2-report.md` §10).

## Documentation changes (T2)

- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`: updated (status, T2 section, acceptance rows, cumulative counts, knowledge state, open questions, next step, this inventory).
- `evidence/EXP-066/T2-report.md`: created.
- Screenshots `evidence/EXP-066/t2-01` to `t2-06` (eight files): created.
- No other repository file was written by T2.

## T3 — documentation finalization: BLOCKED at AC-2 (cycle 2; no browser calls)

Full report: `evidence/EXP-066/T3-final-blocked-report.md`. Task message `756ecfde-3452-434c-a4f0-76928febd18c`, worker session `a642fdcf-6e38-4c1c-a214-edc2810b8bdb`.

- **Browser calls at T3:** 0. **Application changes at T3:** 0.
- **Outcome:** AC-1 passed (observed, UI level). **AC-2 failed:** the one permitted New Table invocation opened the IDO Table Wizard; defaults Table Type `Secondary`, Join Type `Left Outer`; `FX_UMs` typed but not selected; the visible lookup reached FrtForms; Add and OK not invoked; wizard Cancel once. AC-3 to AC-6 not executed. AC-7 supported for the audited actions. AC-8 partial.
- **Reconciled cumulative browser calls (T1 + T2, per type):** tab list 2; tab select 2; snapshot untargeted 8; snapshot targeted 2; find 5; click 10; type 3; press key 3; mouse move 2; mouse wheel 4; wait 1; screenshot calls 14 (13 unique PNGs); **all browser calls 56** (T1 27; T2 29); other browser tools 0. These agree with the controller audits `harness-audit-T1.md` and `harness-audit-T2.md`.
- **Lifecycle and mutation counts (T1 + T2):** New Table invoked **1**; Add **0**; OK **0**; wizard Cancel **1**; table entries added **0**; properties added **0**; New Property wizard **0**; Finish **0**; Save **0**; check-out / check-in / undo **0 / 0 / 0**; IDO Collections close / reopen **0 / 0** (opened via Select Form once in T1); IDO Tables sub-view opened / closed **1 / 1**; runtime open / close / reopen **0**; unload / cache / FormSync / deployment **0**; Designer actions **0**; browser JavaScript, console, network **0**.
- **Final state:** tab 0 (Web Designer) untouched; tab 1 Web Client shows the inherited FX_Items runtime tab (not acted on) and the IDOs tab for FX_Items (Revision 2, Locked By operator, Check In enabled, Save disabled, 12 properties). No dialog or unsaved-change prompt.
- **Unresolved (not claimed either way):** whether SQL table `FX_UMs` exists; whether the Table Name lookup is complete. Neither FX_UMs absence nor database durability is claimed.
- **Further SQL-table inspection or a renewed join attempt requires a separate operator-approved scope.**

## Worker-written file inventory (T3)

- `evidence/EXP-066/T3-final-blocked-report.md` (created).
- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (updated: final status, AC-7 and AC-8 rows, this section).
- Controller-generated (not worker-written): `evidence/EXP-066/harness-audit-T1.md`, `evidence/EXP-066/harness-audit-T2.md`.
- Tool-generated `evidence/playwright/` files (14; outside the EXP-066 path; listed in `T3-final-blocked-report.md` §5).
- Totals across T1–T3 worker-written: 4 documents and 13 PNGs (17 files).

## Documentation changes (T3)

- `evidence/EXP-066/T3-final-blocked-report.md`: created.
- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`: updated (final status line, AC-7 and AC-8 rows, T3 section, this inventory).
- No other repository file was written by T3.

## Outcome (operator, 2026-10-12)

Blocked at AC-2, not accepted. Operator call under the standing authorization of 2026-10-11.

- Run R-20261012-233011-OefG completed as blocked after 3 worker tasks.
- Screenshots viewed by the operator assistant:
  - `t2-03`: the IDO Table Wizard (a Form tab, opened from the IDO Tables view's New Table...) shows:
    - IDO Name FX_Items; Table Name and Table Alias blank and required; Table Type Secondary; Join Type Left Outer.
    - A Join Conditions builder (Column Name dropdown, `=`, Table Name dropdown, Column Name dropdown, Add) above a required join-text area, then OK and Cancel.
  - `t2-04c`: the Table Name combobox shows the typed text `FX_UMs`. Its dropdown list visibly ends at `FrtForms` with the scrollbar at the bottom.
- Diagnosis: the lookup loads only its first page of SQL tables, alphabetical and case-insensitive, `ABDataServices` … `FrtForms`. `FX_UMs` sorts just after that page. Typing did not filter the list, and the worker pressed Escape instead of committing the typed value. The table itself exists (`dbo.FX_UMs`, EXP-044).
- No table entry, property, Save or other change was made. The wizard was cancelled. The IDO is clean and still checked out to the operator (Revision 2). The Tables view still has its one entry (FX_Items, fxitms, Primary Base, Inner).
- Confinement (git status): only `evidence/EXP-066/` and this record were written by the run.
- Next: replay EXP-066-R2. It commits the typed Table Name with Tab (the Mongoose combobox validation route) and verifies the readback before entering the alias and the join.
