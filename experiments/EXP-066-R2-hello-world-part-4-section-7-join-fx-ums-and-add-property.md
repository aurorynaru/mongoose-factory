# EXP-066-R2 — Hello World Part 4 Section 7: join FX_UMs to the FX_Items IDO and add the FX_UMsDescription property (replay with a Tab-committed Table Name)

**Current status (after T8, documentation only; 2026-10-13): T8 COMPLETE. Final acceptance audit: all eight acceptance checks are supported (AC-1 to AC-8), with qualifications. Recommended disposition: ACCEPTED as observed, with qualifications; not replay_verified; not database durability.** The T8 audit reconciled every count against the controller harness-audit tables T1–T7. Two corrections were made: the T7 explicit browser-call total is **38** (not 40), and the cumulative total is **193** (not 195). Corrected T7 breakdown: snapshots 6, finds 3, clicks 8, type 2 (1 failed), key 1, waits 8, screenshots 8. The T7 report file itself still carries the uncorrected figures; the corrected figures are recorded here and in `evidence/EXP-066-R2/T8-final-acceptance-report.md` §2b. Final acceptance report: `evidence/EXP-066-R2/T8-final-acceptance-report.md`. No browser action in T8; the final UI state is the T7 final state (runtime Form open, clean, Object 1 of 3; IDOs Form open behind it, clean). The Section 7 unload remains deferred to Section 8.

**Earlier status (after T7, 2026-10-12): T7 COMPLETE. AC-6 SUPPORTED (observed; UI and accessibility level).** The FX_Items runtime Form was closed once (clean; no prompt) and reopened once through Form > Open > Select Form; the single `FX_Items` / `FX_Items` row was confirmed before OK. The Form loaded its data directly (`Object 1 of 3`, dumbbell / 45 pound iron / 45.00 / EA). Records 2 (eggs / cage free / 6.99 / DZ; `Object 2 of 3`) and 3 (guitar / natural acoustic / 129.99 / EA; `Object 3 of 3`) were loaded by ordinary row-cell navigation, and the Form was returned to record 1. Save stayed disabled throughout; no dirty indicator; no record field was edited; no runtime Save. The runtime and IDOs Forms are both left open and clean. AC-7 and AC-8 are reserved for a separate documentation-only task. Full T7 report: `evidence/EXP-066-R2/T7-report.md`. Classification: observed only; not replay_verified; not database durability.

**Earlier status (after T6): T6 COMPLETE. AC-5 SUPPORTED (observed; UI and accessibility level).** The IDOs Form for FX_Items was closed once (own tab-close control; clean; no prompt) and reopened once through Form > Open > Select Form (`IDOs / IdoCollections`). One typed exact name and one F4 returned `Description (IDOs 1 of 1)` with one FX_Items row. After reopen: project FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By the operator; Check In and Undo Check Out enabled; Save disabled. The 13-property inventory matches T5 field for field (12 originals unchanged; one FX_UMsDescription, Bound to Column, FX_Description, String 50, nvarchar, no class, sequence 2). The Tables view shows exactly FX_Items/fxitms/Primary Base/Inner and FX_UMs/fxum/Secondary/Left Outer with `fxum.[FX_UM] = fxitms.[FX_UM]`. The grid does not show the `fxum` alias; that association rests on the T4/T5 wizard readback and the persisted join. The reopened IDOs Form is left clean and open. AC-6 NOT EXECUTED (runtime Form not touched). Full T6 report: `evidence/EXP-066-R2/T6-report.md`. Classification: observed only; not replay_verified; not database durability.

**Earlier status (after T5, 2026-10-12): T5 COMPLETE. Finish was invoked ONCE: the wizard closed with no message or dialog; exactly one property `FX_UMsDescription` was added (Bound to Column; column `FX_Description`; String; Length 50; nvarchar; no class; sequence 2). The Properties inventory now has 13 rows: the 12 originals unchanged in readback, plus the one new row. Save was disabled after Finish; Save count 0. Revision 2 (10/10/2026) unchanged; checked out to the operator. AC-3 SUPPORTED and AC-4 SUPPORTED for the visible inventory (observed, UI and accessibility level). IDO Collections was NOT closed or reopened; AC-5 and AC-6 NOT EXECUTED.** Full T5 report: `evidence/EXP-066-R2/T5-report.md`. Classification: observed only; not replay_verified.

**Earlier status (after T4): T4 COMPLETE. The New Property wizard for FX_Items was configured and left open on page 2 (Finish not invoked).** Full T4 report: `evidence/EXP-066-R2/T4-report.md`.

**Earlier status (after T3): T3 COMPLETE. AC-2 SUPPORTED (observed; UI and accessibility level).** Table Name `FX_UMs` committed by one Tab (T2); Table Alias `fxum` committed by one Tab; Table Type Secondary and Join Type Left Outer kept; join built with the builder (`FX_UM` = `FX_Items (fxitms)` . `FX_UM`) by one builder Add, giving join text `fxum.[FX_UM] = fxitms.[FX_UM]`; one wizard OK (native response: no text; wizard closed). The Tables view now lists **two** entries: FX_Items (fxitms, Primary Base, Inner) and FX_UMs (fxum, Secondary, Left Outer, with the join); status `(IDO Tables 1 of 2)`. **No property has been added. New Property, Finish, Save, IDO Collections close/reopen and runtime checks were NOT performed.** AC-3 to AC-8 NOT EXECUTED. Full T3 report: `evidence/EXP-066-R2/T3-report.md`. Classification: observed only; not replay_verified.

**Earlier status (after T2): T2 COMPLETE (New Table opened once; Table Name `FX_UMs` committed by one Tab with readback `FX_UMs` and no validation message observed). Full T2 report: `evidence/EXP-066-R2/T2-report.md`.**

**Earlier status (after T1, 2026-10-12): T1 COMPLETE (read-only preflight and baseline; AC-1 supported, observed UI and accessibility level). No change has been made to FX_Items.** Full T1 report: `evidence/EXP-066-R2/T1-report.md`.

## Run identity

- Run `R-20261012-234530-k6cU`, cycle 0, task **T1** (read-only preflight). Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `ee071bad-2d82-4347-a022-f74adb37f66b`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Form work); the IDO and property are tenant-wide.
- Brief commits (session-start git status): `47b914a` (draft), `b8c5139` (approved).
- Identity bar observed: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Record provenance: this record did not exist at the start of T1 (glob `experiments/EXP-066-R2*` returned none). Created by the T1 worker at the path named in the brief.
- Evidence directory: `evidence/EXP-066-R2/`.

## Objective (from the brief)

Replay of EXP-066, which was blocked at AC-2 before any change: the IDO Table Wizard's Table Name lookup lists only its first page of SQL tables (ending at `FrtForms`), so `FX_UMs` could not be selected, and the typed value was not committed. Follow `docs/mongoose/transcripts/hello-world-pt4.md` Section 7 (07:29–09:18), adapted to FX_ names, in the IDO Collections runtime Form:

1. For the FX_Items IDO (base table `FX_Items`, alias `fxitms`; checked out to the operator since EXP-061), open its Tables view and add the `FX_UMs` table once with alias `fxum` and join condition `fxum.FX_UM = fxitms.FX_UM`.
2. Run the New Property wizard once: Bound (default), bind to the `FX_Description` column of the joined `fxum` table, name the property `FX_UMsDescription`. Finish once.
3. Verify the IDO lists the join and exactly one added property; close and reopen IDO Collections once; confirm the three FX_Items runtime records still load. The tutorial's unload is deferred to the Section 8 experiment.

**Tutorial mapping (source precision):** tutorial `UMs` table → `FX_UMs` (alias `fxum`); tutorial `UMs.UM = Items.UM` → `fxum.FX_UM = fxitms.FX_UM`; tutorial `UMsDescription` → `FX_UMsDescription` (the transcript does not give the saved spelling; the brief fixes the name). The transcript does not show the join direction, cardinality, null semantics or generated SQL.

**Out of scope (summary):** any change to other IDOs, to existing FX_Items properties or to the base table; any table other than FX_UMs; any property other than FX_UMsDescription; check-in, undo checkout or any other checkout action; SQL, class, string, Form, theme or preference changes; unload, cache, FormSync, deployment or regeneration; runtime record changes or runtime Save; Web Designer actions; browser JavaScript, console or network inspection; direct URL navigation; refresh or restart.

## Sources reviewed (T1)

- `AGENTS.md` (task text; learning mode, FX_ scope, evidence and recovery rules).
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 7 (lines 192–207).
- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (full) and `evidence/EXP-066/T2-report.md` (full): the Table Name blocker and the wizard defaults (Table Type Secondary; Join Type Left Outer); `evidence/EXP-066/t2-03` viewed (wizard before entry: blank Table Name and Alias, Secondary, Left Outer, join builder row, join-text area, OK and Cancel).
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md` (full): IDO Collections route; one F4 exact-name query; Check Out before New Property; Bind To lookup lists `<alias>.<column>`; Finish commits immediately with Save disabled; a checkout does not change the revision.
- Not read: `tools/` (intentionally unreadable); no secrets file; no shell or git commands.

## Repository starting state (session-start git status; not re-verified; no shell)

- Branch `claude-harness`; main branch `main`; git user `aurorynaru`.
- Session-start status: `?? assets/` (untracked; not written by this worker).

## Baseline (T1; before any change)

| Item | Baseline value (observed) |
|---|---|
| IDO | `FX_Items` (one exact-name match after the query) |
| Project | `FX_HelloWorldProject01` |
| Base table / alias / table type | `FX_Items` / `fxitms` / Primary Base |
| Revision Num / Revision Date | `2` / `10/10/2026` |
| Checkout | Checked out to the operator: Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled |
| Save (toolbar) | disabled (clean) |
| Tables | 1 entry: FX_Items, alias fxitms, Primary Base, Join Type Inner, Join Text blank. **No fxum entry.** |
| Properties | 12, all Bound to Column: FX_Item (1, FX_ItemBase, key seq 1), FX_Description (2, String 150 nvarchar), FX_Cost (3, FX_Cost), FX_UM (4, FX_UM), CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow (5–11, framework), **FX_Picture (12, class FX_Picture, varbinary)** |
| `FX_UMsDescription` | **absent** |

Preconditions for a later change (brief): FX_Items checked out to the operator — **met**; neither target exists — **met**.

## T1 — read-only preflight and baseline (AC-1)

Full report: `evidence/EXP-066-R2/T1-report.md`.

- **Start:** tab list performed before the first tab selection (tab 0 Web Designer, not selected; tab 1 Web Client). Tab 1 selected once. The Web Client showed an inherited FX_Items runtime tab (inactive, not acted on) and an existing clean IDOs tab for FX_Items, which was **reused** (the brief allows a clean open IDO Collections Form). No Select Form dialog was used.
- **Exact-name query (AC-1):** the criterion `FX_Items` was focused and F4 was pressed; the first F4 entered **Filter in Place** (status `Filter in Place`, record fields blank, criterion retained; `t1-02`). One corrected F4 executed the query: status `Description (IDOs 1 of 1)`; one row FX_Items (`t1-03`). **Deviation recorded:** the brief says "one exact-name F4 query", but two F4 key presses were needed (one entered Filter in Place; one executed). See Open questions.
- **Tables inventory (AC-1):** the Tables button opened a separate IDO Tables tab (`favoriteContext=IdoTables`): one row FX_Items | fxitms | Primary Base | Inner; status `(IDO Tables 1 of 1)`; no fxum (`t1-04`). Panel closed once (clean).
- **Property inventory (AC-1):** 12 rows, FX_Picture at row 12 (`t1-01` rows 5–12; `t1-03` rows 1–8; accessibility readback of all 12).
- **Stop:** New Table was not opened; no change made.

## Acceptance status (cumulative; final after T8 — AC-1 to AC-8 all supported with qualifications)

| AC | Status | Evidence | Limits |
|---|---|---|---|
| AC-1 | **Supported (observed; UI and accessibility level)**: sources reviewed; session usable; one exact-name match for FX_Items (after the corrected F4); identity, revision 2 / 10/10/2026, checkout to the operator and Locked By recorded; 12 properties including FX_Picture; Tables inventory (fxitms, Primary Base); FX_UMsDescription and fxum absent | `t1-01`, `t1-02`, `t1-03`, `t1-04`, `t1-05`; `T1-report.md` §3–7 | Two F4 key presses (one Filter-in-Place entry); class-bound Data Type/Length blank in grid; Locked By clipped on screen (full value from accessibility); no database read |
| AC-2 | **SUPPORTED (T2 + T3; observed; UI and accessibility level)**: one New Table; Table Name `FX_UMs` committed with one Tab (readback `FX_UMs`, no validation message); Table Alias `fxum` committed with one Tab; Table Type Secondary and Join Type Left Outer kept; join built by the builder (one Add) and recorded verbatim as `fxum.[FX_UM] = fxitms.[FX_UM]`; every field recorded; one wizard OK, native response: no text, wizard closed; Tables view lists FX_Items (fxitms) and FX_UMs (fxum) only | `t2-02`, `t2-03`, `t2-04`; `t3-01`, `t3-02`, `t3-06`, `t3-07` (wizard before OK), `t3-08` (Tables after OK); `T2-report.md` §5–7; `T3-report.md` §1–5 | Server validity and generated SQL not observed; bracket quoting from the builder; persistence not yet tested (AC-5) |
| AC-3 | **SUPPORTED (T4 + T5; observed; UI and accessibility level)**: one New Property wizard (T4); Bound (default, unchanged); Bind To `fxum.FX_Description` committed (joined-column listing: 21 `alias.column` options, fxitms block then fxum block; alias prefix is the discriminator); Property Name `FX_UMsDescription` (one type; replaced the auto-filled `FX_Description`); Property Class blank (default); auto-filled String, Length 50, nvarchar recorded; **Finish once** (T5 gate passed; native response: no message, no dialog; wizard closed; status `New Property (IDOs 1 of 1)`); **Save count 0** (disabled after Finish) | `t4-02`–`t4-06` (configuration); `t5-01` (pre-Finish gate), `t5-02` (Finish result), `t5-05` (new row); `T4-report.md` §4–9; `T5-report.md` §1–2, §4 | Finish response carries no text; the grid shows the column but not the `fxum` alias (alias confirmed by the pre-Finish readback and the Tables join); Length 50 (fxum) vs 150 (fxitms) not checked against SQL |
| AC-4 | **SUPPORTED for the visible inventory (T5; observed)**: exactly one added property `FX_UMsDescription` (Bound to Column; column FX_Description; String; 50; nvarchar; no class; sequence 2 — same as FX_Description); the 12 originals unchanged in readback (13 rows total; FX_Picture still row 13, class FX_Picture, Binary, varbinary); IDO still checked out to the operator (Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled); revision 2 / 10/10/2026 (unchanged) | `t5-02`, `t5-04`, `t5-05` (inventory); `t5-03` (Tables, two entries); `T5-report.md` §3 | alias not visible in grid; sequence 2 shared with FX_Description (observed; not changed); checkbox mapping inferred; no database read |
| AC-5 | **SUPPORTED (T6; observed; UI and accessibility level)**: IDOs closed once (clean) and reopened once (Form > Open > Select Form; `IDOs / IdoCollections`); one exact-name F4 for FX_Items → `Description (IDOs 1 of 1)`, one row; project, base table, alias, Revision 2 / 10/10/2026, Locked By operator and Check In/Undo enabled match AC-4; 13-property inventory matches AC-4 (FX_UMsDescription Bound to Column, FX_Description, String, 50, nvarchar, no class; 12 originals unchanged); Tables match AC-2 (FX_Items/fxitms/Primary Base; FX_UMs/fxum/Secondary/Left Outer with join `fxum.[FX_UM] = fxitms.[FX_UM]`); Save disabled; reopened form left clean and open | `t6-01` (pre-close), `t6-02` (after close), `t6-03` (Select Form route), `t6-04` (reopened, Filter in Place, blank), `t6-05` (one F4 result), `t6-06`/`t6-07` (13 rows), `t6-08` (Tables); `T6-report.md` §1–7 | The grid does not expose the `fxum` alias for FX_UMsDescription (rests on T4/T5 wizard readback and the join); UI close/reopen only, no database read; the reopened Form started in Filter in Place (one F4 produced the result) |
| AC-6 | **SUPPORTED (T7; observed; UI and accessibility level)**: runtime Form closed once (clean; no prompt) and reopened once (Form > Open > Select Form; exact `FX_Items` / `FX_Items` row confirmed before OK); loaded directly at `Object 1 of 3`; record 2 `eggs / cage free / 6.99 / DZ` (`Object 2 of 3`) and record 3 `guitar / natural acoustic / 129.99 / EA` (`Object 3 of 3`) loaded by row-cell navigation; returned to record 1; Save disabled throughout; no dirty indicator; no record edit; no runtime Save; IDOs Form left open and clean | `t7-01` (baseline before close), `t7-02` (post-close), `t7-03`/`t7-04` (Select Form, exact row), `t7-05` (reopened record 1), `t7-06` (record 2), `t7-07` (record 3), `t7-08` (final, record 1); `T7-report.md` §2–7 | UI readback only; the record values match EXP-051/052/061 T6 readings but are not a database read; pictures not interpreted; surrogate identifiers not read; one stale-ref `browser_type` failure recovered with one fresh snapshot |
| AC-7 | **PASSED (T8; qualified)**: no other IDO, property, checkout, SQL, Form, preference or Designer change; no unload. One table entry (FX_UMs/fxum) and one property (FX_UMsDescription) added, both in scope. No check-in, undo or second checkout; no Save; no runtime edit | `T8-final-acceptance-report.md` §2c, §3–5; harness-audit-T1 to -T7 (all rows) | One read-only snapshot of the Designer page content (T3, while tab 0 was current; no action). T7 count correction (§2b of T8). Controller-flagged typed entries (six calls; five successful) were brief-authorised fields or the Select Form filter, not record edits |
| AC-8 | **PASSED (T8)**: final report gives decisive evidence for AC-1 to AC-6; complete audit with exact counts (one New Table; one Table Name Tab; one alias Tab; one builder Add; no typed join; one wizard OK; one table wizard; one Finish; zero Save; one IDO close/reopen; one runtime close/reopen; zero check-in; zero unload; zero Designer actions); worker file inventory (9 Markdown documents and 44 screenshots created; 3 modified files); final state | `T8-final-acceptance-report.md` §2–6, §8; this record (T8 section) | Total explicit browser calls **193** (controller-verified; corrected from 195). Repository confinement supported by worker and harness inventories; operator git review authoritative |

## Operation counts (T1)

| Operation | Count |
|---|---|
| Form opened (new) | 0 (existing clean IDOs tab reused) |
| Exact-name IDO query (F4 executing the query) | 1 (plus 1 F4 that entered Filter in Place, counted separately below) |
| F4 key presses | 2 (1 entered Filter in Place; 1 executed the query) |
| New Table / Add / OK (table) | 0 / 0 / 0 |
| New Property wizard / Finish / Save | 0 / 0 / 0 |
| Check Out / check-in / undo checkout | 0 / 0 / 0 |
| IDO Collections close / reopen | 0 / 0 |
| IDO Tables sub-view open / close | 1 / 1 (sub-view; not the IDO Collections lifecycle) |
| Runtime FX_Items Form open / close / reopen / interaction | 0 / 0 / 0 / 0 |
| Web Designer actions | 0 |
| Unload / cache / FormSync / deployment | 0 / 0 / 0 / 0 |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 |
| Dialogs answered | 0 |
| Browser tab list / tab select | 1 / 1 |
| Browser clicks / typed entries / key presses / mouse moves / wheel / waits | 3 / 0 / 2 / 0 / 0 / 4 |
| Untargeted / targeted snapshots / finds | 3 / 0 / 1 |
| Screenshot calls | 5 (`t1-01` to `t1-05`) |
| Total browser calls (T1) | 20 |

Full audit: `evidence/EXP-066-R2/T1-report.md` §8.

## Worker-written file inventory (T1)

- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created).
- `evidence/EXP-066-R2/T1-report.md` (created).
- `evidence/EXP-066-R2/t1-01-webclient-initial-state-idos-reused.png`; `t1-02-idos-FX_Items-after-f4-settled.png` (**name misleading**: shows the Filter-in-Place state); `t1-03-idos-FX_Items-query-settled-identity-tables.png` (**name misleading**: shows settled identity and rows 1–8; Tables are in `t1-04`); `t1-04-ido-tables-baseline-one-entry.png`; `t1-05-final-state-idos-checked-out-save-disabled.png` (all created).
- Tool-written (not worker-authored; outside the EXP-066-R2 path): `evidence/playwright/` files from this task (listed in `T1-report.md` §9). The harness and the operator's git review are authoritative.

## Documentation changes (T1)

- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`: created (this record).
- `evidence/EXP-066-R2/T1-report.md`: created.
- Screenshots `evidence/EXP-066-R2/t1-01` to `t1-05`: created.
- No other repository file was written by T1. `tools/`, AGENTS.md, the tutorial, the EXP-066 and EXP-061 records and their evidence were not written.

## Knowledge state

| Finding | State |
|---|---|
| IDOs tab for FX_Items reused clean; identity, revision 2, checkout to the operator, 12 properties (FX_Picture row 12), FX_UMsDescription absent, Tables = one entry (fxitms, no fxum) | **observed** (one run; UI and accessibility level) |
| First F4 with the IDO Name criterion focused enters **Filter in Place** (blank record fields; criterion retained); a second F4 executes the query to `Description (IDOs 1 of 1)` | **observed** (one run; T1); the reason is **unresolved** |
| Tables button opens a separate IDO Tables tab with one FX_Items row (fxitms, Primary Base, Inner) | **observed** (T1 and EXP-066 T2) |
| Wizard opens with Table Type Secondary and Join Type Left Outer; Table Name blank; empty builder and join text (T2) | **observed** (one run; T2) |
| Typed `FX_UMs` plus one Tab leaves the Table Name combobox showing `FX_UMs` after focus moves to Table Alias and a 2 s settle; no validation message seen (T2) | **observed** (one run; client readback only; server validity not established until OK) |
| Table Name readback after Tab stays `FX_UMs` (so the Tab-commit route holds at readback level) | **observed** (one run); **not replay_verified** |
| Builder join `fxum.[FX_UM] = fxitms.[FX_UM]` generated by one builder Add (Column FX_UM; Table FX_Items (fxitms); Column FX_UM) (T3) | **observed** (one run; T3) |
| One wizard OK with the join and alias set creates the FX_UMs / fxum table entry; the wizard closes with no native text (T3) | **observed** (one run; T3); server persistence **not** established |
| Tables view after OK lists two entries (FX_Items/fxitms/Primary Base/Inner; FX_UMs/fxum/Secondary/Left Outer with the join) (T3) | **observed** (one run; T3) |
| New Property wizard: Bound default; Bind To lists 21 `alias.column` options with joined `fxum.*` columns in a separate block after `fxitms.*` (T4) | **observed** (one run; T4) |
| Choosing `fxum.FX_Description` auto-fills Property Name `FX_Description`, Data Type String, Length 50 and Column Data Type nvarchar; Property Class stays blank (T4) | **observed** (one run; T4); the Length 50 (fxum) vs 150 (fxitms) difference is **unresolved** against SQL |
| Typing `FX_UMsDescription` replaces the auto-filled name (T4) | **observed** (one run; T4) |
| Finish on the configured wizard adds exactly one property `FX_UMsDescription` (Bound to Column; column FX_Description; String 50 nvarchar; no class; sequence 2), wizard closes with no native text, Save stays disabled (T5) | **observed** (one run; T5); the grid cannot show the `fxum` alias; server persistence **not** established until AC-5 |
| Post-Finish Properties inventory is 13 rows: the 12 originals unchanged in readback and the new row (T5) | **observed** (one run; T5; UI and accessibility level) |
| The new property shares sequence 2 with FX_Description (T5) | **observed** (one run); **unresolved** whether this is intended |
| IDO Collections close (own Form-tab control) and reopen (Form > Open > Select Form) recovers the IDO: one exact-name F4 returns one FX_Items row with the same identity, 13-property inventory and two-entry Tables (T6) | **observed** (one run; T6; UI and accessibility level); persistence beyond the UI session **not** established |
| The reopened IDOs Form opens in Filter in Place with blank criteria; one F4 after typing the exact name produces the result (T6) | **observed** (one run; T6) |
| The `fxum` alias for FX_UMsDescription is not shown in the Properties grid after reopen (T6) | **observed** (one run); the association rests on the wizard readback and the Tables join |
| Runtime FX_Items Form closed once and reopened once through Form > Open > Select Form (exact row `FX_Items`); loads directly at Object 1 of 3 with dumbbell; eggs (Object 2 of 3) and guitar (Object 3 of 3) load by row navigation; Save disabled; no dirty indicator (T7) | **observed** (one run; T7; UI and accessibility level); not a database read; **not** replay_verified |
| Runtime Form reopen recovery and record values after close/reopen match the documented values (EXP-051/052/061 T6) (T7) | **observed** (one run); database persistence **not** established |
| Replay or procedure status | **not claimed** (not replay_verified) |

## Open questions and blockers

1. **No blocker for T1.** AC-1 is supported.
2. **Unresolved (F4 behaviour):** whether the first F4 is the expected entry into criteria mode when the IDOs tab is already open. The EXP-061 route used a fresh Select Form open and one F4. A later task should decide whether to open IDO Collections fresh and run one F4 so the "one exact-name F4 query" count holds.
3. **Unresolved (table selection):** whether SQL table `FX_UMs` exists in the tenant, and whether the Table Name lookup is complete. The EXP-066 outcome states `dbo.FX_UMs` exists (EXP-044); not re-verified in T1. The replay must commit the typed Table Name with Tab and verify its readback (the brief's route) before entering the alias and the join.
4. The class-bound Data Type / Length / Column Type are blank in the grid (EXP-061 carry-over; not re-verified).
5. The inherited FX_Items runtime tab remains open and clean; to be closed and reopened only at the authorized point (AC-6).

## T2 — New Table opened once; Table Name committed by Tab; wizard left open (cycle 1; AC-2 partial)

Full report: `evidence/EXP-066-R2/T2-report.md`. Task message `13b4bb15-5250-46ae-870d-fbcea9e1d37f`, worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`.

- **Gate (fresh):** tab list (1) before the first selection; tab 1 selected (1); IDOs tab for FX_Items clean (Save disabled; Revision 2; Locked By operator; 12 properties incl. FX_Picture). Tab 0 (Web Designer) listed, not acted on.
- **Tables view (baseline):** one entry FX_Items | fxitms | Primary Base | Inner; status `(IDO Tables 1 of 1)` (`t2-01`).
- **New Table (1 of 1):** wizard opened; defaults before entry: IDO Name `FX_Items`; Table Name blank; Table Alias blank; Table Type `Secondary`; Join Type `Left Outer`; blank join builder and join text; OK / Cancel (`t2-02`).
- **Table Name (type 1, Tab 1):** `FX_UMs` entered once (single fill into the combobox); pre-Tab screenshot shows the value with no list open (`t2-03`). One Tab: focus moved to Table Alias; the combobox still reads **`FX_UMs`** after a 2 s settle; no validation or error text in the screenshot or finds; no list opened; no Enter (`t2-04`).
- **Commit verification:** the value survived the focus change and settle, not only the immediate post-type state. Server-side acceptance of `FX_UMs` as a table is **not** observable until OK.
- **Stop:** per the brief, Table Alias, Table Type, Join Type, join builder and join text were left untouched; Add, OK, Cancel, New Property, Finish, Save **not invoked**. Wizard left open.
- **Counts (T2):** New Table 1; Tab commit of Table Name 1; alias/join entries 0; Add 0; OK 0; Cancel 0; wizard 1 (open, not completed); table entries added 0; properties added 0; New Property 0; Finish 0; Save 0; check-out / check-in / undo 0; IDO Collections close / reopen 0; runtime 0; Designer actions 0; unload / cache / FormSync / deployment 0; JavaScript / console / network 0; Enter 0; list opens 0; dialogs 0. Browser calls: tab list 1, tab select 1, snapshot 1, finds 3, clicks 2, type 1, key press 1 (Tab), waits 3, screenshots 4 (17 explicit calls; five snapshots returned inside action results).
- **Cumulative (T1 + T2):** New Table 1; Tab commit 1; Add 0; OK 0; Save 0; Finish 0; New Property wizard 0; check-out / check-in / undo 0 / 0 / 0; IDO Collections close / reopen 0 / 0; runtime close / reopen 0 / 0; unload 0; Designer actions 0. T1 browser calls 20 (T1 report §8). T2 browser calls 17 explicit (above).
- **Worker-written files (T2):** `evidence/EXP-066-R2/T2-report.md`; `t2-01` to `t2-04` PNGs; this record (updated). Tool-written `evidence/playwright/` files are listed in `T2-report.md` §9.
- **Limits:** UI and accessibility level; client readback only; no database read; the wizard holds an uncommitted entry.

## T3 — alias, builder join, one wizard OK; Tables view lists FX_UMs (fxum) (cycle 2; AC-2 supported)

Full report: `evidence/EXP-066-R2/T3-report.md`. Task message `ab0e5fcb-8adc-4558-9f87-8bd4fde0d16b`, worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`.

- **Gate:** tab list (1) before the first selection. The first untargeted snapshot showed **tab 0 (Web Designer) as current**; it was read-only, nothing was clicked or typed on it, and the Web Client was then selected (tab 1, succeeded). Second snapshot: IDO Table Wizard open with Table Name `FX_UMs`, Table Alias empty, Secondary, Left Outer; no validation text (find: none).
- **Table Alias (type 1, Tab 1):** `fxum` entered once; Tab moved focus to Table Type; readback after 2 s: alias `fxum`, Table Name `FX_UMs`, Table Type `Secondary`, Join Type `Left Outer`. No message.
- **Join builder (builder values offered; no typed join):** first Column Name `FX_UM`; builder Table Name `FX_Items (fxitms)` (the only offered option); second Column Name `FX_UM` (FX_Picture also offered in that list). Configured state before Add: `t3-06`.
- **Add (1 of 1):** join text generated by the builder: **`fxum.[FX_UM] = fxitms.[FX_UM]`** (verbatim; the brackets are the builder's identifier quoting). `t3-07` shows the complete configured wizard with this join text before OK.
- **Wizard OK (1 of 1):** native response: no dialog, alert or text; the wizard closed and the IDO Tables context became active. Status `&New Table... (IDO Tables 1 of 2)`.
- **Tables view after OK (AC-2):** two rows: FX_Items | FX_Items | fxitms | Primary Base | Inner | (blank); **FX_UMs | FX_Items | fxum | Secondary | Left Outer | fxum.[FX_UM] = fxitms.[FX_UM]** (`t3-08`). Nothing else. Toolbar Save disabled.
- **Counts (T3):** New Table 0 (cumulative 1); Table Name Tab 0 (cumulative 1); Table Alias Tab 1; Table Alias typed 1; builder Add 1 (cumulative 1); typed join text 0; wizard OK 1 (cumulative 1); wizard Cancel 0; table entries added 1 (cumulative 1); properties added 0; New Property 0; Finish 0; Save 0; check-out / check-in / undo 0; IDO Collections close / reopen 0; runtime 0; Designer actions 0 (the tab 0 snapshot is not an action); unload / cache / FormSync / deployment 0; JavaScript / console / network 0; Enter 0; dialogs 0. Browser calls (explicit): tab list 1, tab select 1, snapshots 6, finds 6, clicks 8, type 1, key press 1, waits 6, screenshots 8 = **38**.
- **Cumulative (T1–T3):** New Table 1; Table Name Tab commit 1; builder Add 1; typed join 0; wizard OK 1; wizard 1; Finish 0; Save 0; table entries added 1 (FX_UMs / fxum); properties added 0; check-in / undo 0; IDO Collections close / reopen 0; runtime close / reopen 0; unload 0; Designer actions 0. Explicit browser calls: T1 20, T2 17, T3 38; total **75**.
- **Worker-written files (T3):** `evidence/EXP-066-R2/T3-report.md`; `t3-01` to `t3-08` PNGs; this record (updated). Tool-written `evidence/playwright/` files are outside this path (listed in `T3-report.md` §7).
- **Limits:** UI and accessibility level; the join and table are client-side readbacks; the wizard's OK response has no visible text; server validity, generated SQL and persistence are not established.

## T4 — New Property wizard configured on fxum.FX_Description; Finish NOT invoked (cycle 3; AC-3 partial)

Full report: `evidence/EXP-066-R2/T4-report.md`. Task message `f3c09858-102f-46d9-9475-9d44072f1ce9`, worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`.

- **Gate:** tab list (1) before the first selection; tab 0 (Web Designer) reported current, not acted on; tab 1 selected (1). Snapshot showed the IDO Tables sub-panel with two entries: FX_Items/fxitms/Primary Base/Inner and FX_UMs/fxum/Secondary/Left Outer with join `fxum.[FX_UM] = fxitms.[FX_UM]` (status `(IDO Tables 1 of 2)`; `t4-01`).
- **Close IDO Tables sub-panel (1):** its own panel-close control; clean; no prompt.
- **IDOs gate (fresh):** FX_Items; project FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By `anton.ramos@3mworks.com.ph` (Check In present); Save disabled; 12 properties (FX_Picture row 12); **FX_UMsDescription absent**.
- **New Property (1 of 1):** wizard page 1: Bound selected (default); Finish disabled on page 1; Back disabled; Next enabled (`t4-02`).
- **Next (1):** page 2 (`t4-03`): Bind To, Property Name, Property Class blank; Data Type and Column Data Type inherit unchecked; Finish enabled on page 2.
- **Bind To (committed):** the list offers 21 options in `alias.column` form: `fxitms.*` (12) first, then `fxum.*` (9); joined columns sit in the same flat list, distinguished only by the `fxum.` prefix. Selected `fxum.FX_Description` (one click). Readback `fxum.FX_Description` (`t4-04`, `t4-05`).
- **Auto-fill (observed, not typed):** Property Name `FX_Description`; Data Type String (Inherit disabled); Length 50; Column Data Type nvarchar (Inherit unchecked). Property Class blank.
- **Property Name (1 type):** `FX_UMsDescription` typed once; the auto-filled value was replaced; readback `FX_UMsDescription`.
- **Configured state before Finish (`t4-06`, viewed):** Bound; Bind To `fxum.FX_Description`; Property Name `FX_UMsDescription`; Property Class blank; String; Length 50; Decimal blank; nvarchar; Finish enabled and **not pressed**.
- **Counts (T4):** New Property 1; Next 1; Finish 0; Save 0; New Table 0; builder Add 0; wizard OK 0; table entries added 0; properties added 0; check-in / undo 0; IDO Collections close / reopen 0; runtime 0; Designer actions 0; unload / cache / FormSync / deployment 0; JavaScript / console / network 0; dialogs 0; Enter 0; Tab 0. Browser calls (explicit): tab list 1, tab select 1, snapshots 6, finds 1, clicks 5, type 1, waits 4, screenshots 6 = **25**.
- **Cumulative (T1–T4):** New Table 1; Table Name Tab 1; alias Tab 1; builder Add 1; typed join 0; wizard OK 1; table entries 1 (FX_UMs / fxum); New Property wizard 1; Finish 0; Save 0; properties added 0; check-in / undo 0; IDO close / reopen 0; runtime close / reopen 0; unload 0; Designer actions 0. Explicit browser calls: T1 20, T2 17, T3 38, T4 25; total **100**.
- **Worker-written files (T4):** `evidence/EXP-066-R2/T4-report.md`; `t4-01` to `t4-06` PNGs; this record (updated). Tool-written `evidence/playwright/` files are outside this path.
- **Limits:** UI and accessibility level; Length 50 is the wizard's readback; the Finish response and the server state are not yet observed.

## T5 — Finish once; post-change inventory verified; no Save needed (cycle 4; AC-3 and AC-4 supported)

Full report: `evidence/EXP-066-R2/T5-report.md`. Task message `b72df79e-fb0a-4eda-a218-8d38cb11f122`, worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`.

- **Gate:** tab list (1) before the first selection; tab 0 (Web Designer) reported current, not acted on; tab 1 selected (1). Snapshot of wizard page 2: Property Name `FX_UMsDescription`; Bind To `fxum.FX_Description`; Property Class blank; Data Type `String`; Length `50`; Column Data Type `nvarchar`; Finish enabled; Next disabled. Pre-Finish capture `t5-01`. All gates passed.
- **Finish (1 of 1):** native response: **no message, no dialog, no validation error**; the wizard tab closed itself; the IDOs tab became active; status `New Property (IDOs 1 of 1)` (`t5-02`). Not retried.
- **Post-Finish state:** toolbar Save **disabled** (no Save performed; Save count 0). Revision Num `2`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; project `FX_HelloWorldProject01`; base table/alias: `FX_Items` / `fxitms` (Primary Base, Tables sub-tab).
- **Tables (view-only sub-tab; `t5-03`):** two entries: FX_Items / fxitms / Primary Base / Inner; FX_UMs / fxum / Secondary / Left Outer / `fxum.[FX_UM] = fxitms.[FX_UM]`.
- **Properties (13 rows; `t5-02`, `t5-04`, `t5-05`):** the 12 originals match the T1 baseline (FX_Picture row 13, class FX_Picture, Binary, varbinary, sequence 12). The added row: `FX_UMsDescription`; sequence **2**; class blank; Bound to Column; column `FX_Description`; key seq 0; String; Length 50; Column Type nvarchar.
- **Observations (not changed):** the new property shares sequence 2 with FX_Description; the grid shows the column name, not the `fxum` alias. The alias binding is confirmed only by the pre-Finish readback and the Tables join.
- **Counts (T5):** Finish 1; Save 0; New Property 0 (wizard opened in T4); New Table 0; builder Add 0; wizard OK 0; properties added 1; table entries added 0; check-in / undo 0; IDO close/reopen 0; runtime 0; Designer 0; unload / cache / FormSync / deployment 0; JavaScript / console / network 0; dialogs 0. Browser calls (explicit): tab list 1, tab select 1, snapshots 2, finds 1, clicks 3 (Finish, Tables sub-tab, Properties sub-tab), mouse move 1, wheel 2, waits 4, screenshots 5 = **20**.
- **Cumulative (T1–T5):** New Table 1; Table Name Tab 1; alias Tab 1; builder Add 1; typed join 0; wizard OK 1; table entries 1 (FX_UMs / fxum); New Property wizard 1; Finish 1; Save 0; properties added 1 (FX_UMsDescription); check-in / undo 0; IDO close / reopen 0; runtime close / reopen 0; unload 0; Designer actions 0. Explicit browser calls: T1 20, T2 17, T3 38, T4 25, T5 20; total **120**.
- **Worker-written files (T5):** `evidence/EXP-066-R2/T5-report.md`; `t5-01` to `t5-05` PNGs; this record (updated). Tool-written `evidence/playwright/` files are outside this path (`T5-report.md` §8).
- **Limits:** UI and accessibility level; the Finish response has no visible text; no database read; SQL length and generated SQL not checked; persistence across close/reopen not yet tested (AC-5).

## T6 — AC-5: IDO Collections closed once and reopened once; one exact-name F4; post-reopen verification (cycle 5)

Full report: `evidence/EXP-066-R2/T6-report.md`. Task message `cea96483-c910-46a9-9e4b-8a7e955c53d8`, worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`.

- **Gate:** tab list (1) before the first selection; tab 0 (Web Designer) reported current, not acted on; tab 1 selected (1). Pre-close: IDOs tab for FX_Items, Save disabled, 13 properties, Revision 2, Locked By the operator, Check In enabled, no wizard or dialog (`t6-01`).
- **Close (1):** `Close Panel IDOs`, clean, no prompt. Active tab became the FX_Items runtime Form (Object 1 of 3; not acted on; not closed) (`t6-02`).
- **Reopen (1):** Form menu (1) → `Open` (1) → `Select Form` (`IDOs / IdoCollections` row highlighted, filter `IdoCollections`) → OK (1; in-form dialog answered). Reopened in **Filter in Place** with blank criteria (not treated as a result) (`t6-03`, `t6-04`). The Form menu's `Close and Save Changes` item was not clicked.
- **Query (1 typed entry; 1 F4):** `FX_Items` typed into the IDO Name criterion; one F4 → `Description (IDOs 1 of 1)`, one FX_Items row (`t6-05`). No second F4 (the brief's stop rule did not apply: the one F4 produced a result).
- **Identity (after reopen):** FX_Items; FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; Save disabled; Access As `G6R`.
- **Properties (13 rows; `t6-06` rows 1–8, `t6-07` rows 6–13; accessibility readback):** identical to the T5 post-Finish readback for all 13 rows. FX_UMsDescription (row 3): Bound to Column; Column FX_Description; String; 50; nvarchar; class blank; sequence 2. FX_Picture row 13 (class FX_Picture; Binary; varbinary). The 12 originals unchanged against T1.
- **Tables (`t6-08`):** two rows: FX_Items/fxitms/Primary Base/Inner; FX_UMs/fxum/Secondary/Left Outer/`fxum.[FX_UM] = fxitms.[FX_UM]`. Nothing else.
- **Alias limitation (stated):** no native read-only property-detail surface showing the joined alias was used (no row selection). The association `FX_UMsDescription` → `fxum.FX_Description` rests on the T4/T5 wizard readback and the persisted Tables join.
- **Counts (T6):** IDO Collections close 1; reopen 1; exact-name F4 query 1; Finish 0; Save 0; New Property 0; New Table 0; builder Add 0; wizard OK 0; properties added 0; check-in / undo 0; runtime close / reopen / interaction 0; Designer 0; unload / cache / FormSync / deployment 0; JavaScript / console / network 0; Enter 0; dialogs answered 1 (Select Form OK). Browser calls (explicit): tab list 1, tab select 1, snapshots 5, finds 3, clicks 6, type 1, key press 1 (F4), mouse move 1, wheel 1, waits 7, screenshots 8 = **35**.
- **Cumulative (T1–T6):** New Table 1; Table Name Tab 1; alias Tab 1; builder Add 1; typed join 0; wizard OK 1; table entries 1; New Property wizard 1; Finish 1; Save 0; properties added 1; check-in / undo 0; IDO close / reopen 1 / 1; runtime close / reopen 0 / 0; unload 0; Designer 0. Explicit browser calls: T1 20, T2 17, T3 38, T4 25, T5 20, T6 35; total **155**.
- **Worker-written files (T6):** `evidence/EXP-066-R2/T6-report.md`; `t6-01` to `t6-08` PNGs; this record (updated). Tool-written `evidence/playwright/` files are outside this path (`T6-report.md` §11).
- **Final UI state:** reopened IDOs form for FX_Items active on the Tables sub-tab; clean (Save disabled); open; no dialog; the FX_Items runtime tab still open and untouched.

## T7 — AC-6: runtime Form closed once and reopened once; dumbbell, eggs, guitar verified read-only (cycle 6)

Full report: `evidence/EXP-066-R2/T7-report.md`. Task message `9774f482-f054-4ea2-bd6f-5714b6e5a287`, worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`.

- **Gate:** tab list (1) before the first selection; tab 0 (Web Designer) reported current, not acted on; tab 1 selected (1). IDOs form clean (Save disabled; Revision 2; Locked By operator; Tables two entries); not acted on.
- **Runtime baseline:** the inherited FX_Items runtime tab selected by a click on its heading (view only); `Description (Object 1 of 3)`; Save disabled; dumbbell / 45 pound iron / 45.00 / EA (`t7-01`).
- **Close (1):** `Close Panel FX_Items` on the runtime tab; clean, no prompt; IDOs Form left open and clean (`t7-02`).
- **Reopen (1):** Form menu (1) → `Open` (1) → Select Form. The filter `IdoCollections` was changed to `FX_Items` (one type; the first attempt used a stale body ref and was rejected with no change; one fresh snapshot then the correct filter ref). One End key refreshed the list. The dialog showed exactly one row `FX_Items` / `FX_Items`; identity confirmed before OK (`t7-03`, `t7-04`). OK (1). Runtime tab active; URL `favoriteContext=FX_Items`.
- **Loaded directly (`t7-05`):** `Description (Object 1 of 3)`; dumbbell / 45 pound iron / 45.00 / EA; Save disabled; no Filter in Place state.
- **Record 2 (`t7-06`):** row-cell click (navigation only): `(Object 2 of 3)`; eggs / cage free / 6.99 / DZ.
- **Record 3 (`t7-07`):** row-cell click: `(Object 3 of 3)`; guitar / natural acoustic / 129.99 / EA.
- **Return to record 1 (`t7-08`):** row-cell click: `Description (Object 1 of 3)`; dumbbell. Save disabled; find for Save/dirty/unsaved returned only the disabled Save button.
- **Final state:** runtime Form open, clean, Object 1 of 3; IDOs Form open and clean. No dialog.
- **Counts (T7; corrected in T8 against the controller audit rows):** runtime close 1; runtime reopen 1; record navigation 3 (row-cell clicks; the Form-menu and Open clicks are counted in the clicks below); runtime record edits 0; runtime Save 0; IDO Save 0; New Table 0; New Property 0; Finish 0; builder Add 0; wizard OK 0; check-in / undo 0; IDO close / reopen 0; Designer 0; unload / cache / FormSync / deployment 0; JavaScript / console / network 0. Browser calls (explicit, corrected): tab list 1; tab select 1; snapshots **6** (was reported as 8); finds 3; clicks **8** (was reported as 9; the list has 8 clicks); type 2 (1 successful; 1 failed on a stale ref, no state change); key press 1 (End); waits **8** (was reported as 7); screenshots 8 = **38** (was reported as 40). Dialogs answered 1 (Select Form OK). Stale-ref recovery snapshot 1. The first `t7-01` screenshot read error (controller row 8) was a single transient failure; the same path succeeded on retry (row 10); the earlier attribution to the path form is withdrawn.
- **Cumulative (T1–T7, corrected):** New Table 1; Table Name Tab 1; alias Tab 1; builder Add 1; typed join 0; wizard OK 1; table entries 1 (FX_UMs / fxum); New Property wizard 1; Finish 1; IDO Save 0; properties added 1 (FX_UMsDescription); check-in / undo 0; IDO close / reopen 1 / 1; runtime close / reopen 1 / 1; runtime record edits 0; runtime Save 0; unload 0; Designer 0. Explicit browser calls: T1 20, T2 17, T3 38, T4 25, T5 20, T6 35, T7 38; total **193** (was reported as 195).
- **Worker-written files (T7):** `evidence/EXP-066-R2/T7-report.md`; `t7-01` to `t7-08` PNGs; this record (updated). Tool-written `evidence/playwright/` files are outside this path (`T7-report.md` §9).
- **Limits:** UI and accessibility level; record values are UI readbacks, not a database read; pictures not interpreted; surrogate identifiers not read.

## T8 — final acceptance audit (documentation only; zero browser calls; zero application changes)

Full report: `evidence/EXP-066-R2/T8-final-acceptance-report.md`. Task message `4ce321d2-e848-4e6a-9315-761f35defab1`, worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`.

- **Sources:** this record (read in full); harness-audit-T1 to -T7 (every row recounted); explicit-count lines of T1–T7 reports (searched).
- **Count reconciliation:** T1 20, T2 17, T3 38, T4 25, T5 20, T6 35 match the controller rows. **T7 is 38 by controller rows (worker-reported 40).** Corrected: snapshots 6 (not 8), clicks 8 (not 9), waits 8 (not 7). Cumulative **193** (not 195).
- **Controller-verified cumulative categories:** New Table 1; Table Name Tab 1; alias Tab 1; builder Add 1; typed join 0; wizard OK 1; table wizard 1; New Property 1; Finish 1; Save 0; IDO close/reopen 1/1; runtime close/reopen 1/1; runtime record edits 0; runtime Save 0; check-in / undo / second checkout 0; unload / cache / FormSync / deployment 0; Designer actions 0 (one read-only Designer-page snapshot in T3, row 2, while tab 0 was current); prohibited lifecycle operations 0.
- **Other reconciled items:** the T7 first screenshot-read error was a single transient failure (same path succeeded on retry); the T7 stale-ref `browser_type` failure changed nothing; the controller "prohibited-tool hits" for T2–T4 and T6–T7 are typed entries (Table Name, alias, Property Name, IDO Name criterion, Select Form filter), none of them record edits.
- **Files:** worker created 9 Markdown documents (this record and T1–T8 reports) and 44 screenshots; modified 3 files (this record repeatedly; `T2-report.md` once; `T4-report.md` once; `T7-report.md` six times, its totals still uncorrected); harness-generated 7 audit files (not worker-written); tool-written `evidence/playwright/` files outside the path (not enumerated). Operator git review is authoritative.
- **Acceptance:** AC-1 PASSED (qualified: two F4 presses); AC-2 PASSED (qualified: bracketed builder join; server validity not observed); AC-3 PASSED (qualified: Finish response has no text; Length 50 vs 150; alias not shown); AC-4 PASSED (qualified: duplicate Sequence 2; alias not shown); AC-5 PASSED (qualified: same-session UI close/reopen only; Filter in Place start); AC-6 PASSED (qualified: UI readback; pictures not interpreted); AC-7 PASSED (qualified: one read-only Designer snapshot; count correction); AC-8 PASSED (this section with corrected counts).
- **Recommendation: ACCEPTED as observed, with qualifications.** Not replay_verified; not database durability; generated SQL and the stored binding not established.
- **Qualifications carried forward (unresolved):** bracketed builder join; post-reopen grid does not show the `fxum` alias; duplicate Sequence 2 (intent unresolved); joined Length 50 vs base 150 (not checked against SQL); ordinary close/reopen is a weak persistence boundary; database-level durability and generated SQL unverified; server-side validity of FX_UMs not observed; Table Name lookup completeness not tested; first-F4 Filter-in-Place cause unresolved; checkbox-column mapping inferred; surrogate identifiers and picture contents not read.
- **Final state (from T7; no new browser inspection):** runtime FX_Items Form active, clean, Object 1 of 3 (dumbbell); IDOs Form open behind it, clean (Revision 2; Locked By operator; Check In and Undo Check Out enabled; Save disabled; 13 properties; Tables two entries with join). Tab 0 (Web Designer) not acted on. No dialog.
- **Worker-written files (T8):** `evidence/EXP-066-R2/T8-final-acceptance-report.md` (created); this record (modified).
- **Stop:** T8 is complete. No further browser action, mutation, lifecycle change or deferred operation is authorised or suggested.

## Next permitted step

**Current next step (after T8):** none in this experiment. The coordinator decides the disposition (recommended: ACCEPTED as observed, with qualifications). Optional follow-ups, each needing a separate authorised task: (a) a read-only SQL or property-detail check to resolve the qualifications in the T8 report §7 items 2, 4, 6, 7; (b) a correction to `T7-report.md` to the corrected totals (38 / 193). The Section 7 unload remains deferred to the Section 8 experiment and is not part of this experiment.

Earlier (T6) next-step text, superseded by T7:

**Earlier (T6) next step:** AC-6. Close the FX_Items runtime Form once (it is open and clean; Object 1 of 3) and reopen it once through Form > Open > Select Form (`FX_Items / FX_Items` row); verify dumbbell, eggs and guitar load and the Form is clean; make no record edits. Not authorised by T6; needs the next task. The reopened IDOs Form is clean and open and does not need to be closed for AC-6.

Earlier (T5) next-step text, superseded by T6:

**Earlier (T5) next step:** AC-5. Close the clean IDO Collections (IDOs) Form once, reopen it once through Form > Open > Select Form, run one exact-name F4 for FX_Items, and re-verify the Tables view (two entries), the 13-row property inventory with FX_UMsDescription, and the checkout state. Then AC-6 (close and reopen the FX_Items runtime Form once; dumbbell, eggs, guitar; the Form clean). Neither is authorised by T5; they need the next task. The IDO Collections Form must be clean before closing (it is clean now: Save disabled).

Earlier (T4) next-step text, superseded by T5:

**Earlier (T4) next step:** the New Property wizard for FX_UMsDescription is configured and open on page 2 (Finish enabled, not pressed). The next decision is Finish (one invocation), then one Save only if the Form is left dirty, then AC-4. A fresh snapshot must confirm the page-2 values in `T4-report.md` §9 before any Finish. No Finish, Save, IDO close/reopen or runtime action is authorised by T4.

Earlier (T3) next-step text, now superseded by T4:

**Earlier (T3) next step:** the join table entry exists (client readback). Not permitted without a new decision: the New Property wizard (AC-3), Finish, Save, the IDO Collections close/reopen (AC-5) and the runtime check (AC-6). The IDO Tables panel is open and clean; it was left open (the brief does not instruct closing it). A fresh snapshot is needed before any next step.

Earlier (T2) next-step text, now superseded by T3:

Not permitted without a new operator-approved task: opening New Table, entering the Table Name, Table Alias or join, Add, OK, the New Property wizard, Finish, Save, the IDO Collections close or reopen (AC-5), or the runtime check (AC-6). The next task (T2) should start with a fresh snapshot, confirm the IDOs tab and identity, and then follow the brief's Table Name route once.

## Outcome (operator, 2026-10-13)

Accepted. Hello World Part 4 section 7 is complete. Operator call under the standing authorization of 2026-10-11.

- Run R-20261012-234530-k6cU completed as accepted after 8 worker tasks, with no pauses.
- Screenshots viewed by the operator assistant:
  - `t3-07`: the IDO Table Wizard before OK shows:
    - Table Name `FX_UMs` (committed with Tab), Table Alias `fxum`, Table Type Secondary, Join Type Left Outer.
    - Builder `FX_UM` = `FX_Items (fxitms)` . `FX_UM`; after the builder Add, the join text reads `fxum.[FX_UM] = fxitms.[FX_UM]`.
  - `t6-08`: after the IDO Collections close/reopen, the FX_Items Tables view lists exactly two entries:
    - FX_Items, fxitms, Primary Base, Inner.
    - FX_UMs, fxum, Secondary, Left Outer, `fxum.[FX_UM] = fxitms.[FX_UM]`.
    - Revision 2; Locked By the operator; Check In and Undo Check Out offered (still checked out).
  - `t6-06`, `t6-07`: the reopened property inventory has 13 rows. Row 3 is `FX_UMsDescription`:
    - Sequence 2, Bound to Column `FX_Description`, String, length 50, nvarchar, Read Only checked.
    - Length 50 identifies the FX_UMs column; FX_Items' own FX_Description is 150.
    - The 12 original rows are unchanged, including FX_Picture.
- Confinement (git status): only `evidence/EXP-066-R2/` and this record were written by the run.
- Findings (observed):
  - The Table Name lookup lists only its first page. A typed table name is committed with Tab.
  - New secondary tables default to Left Outer.
  - The builder writes bracketed join text.
  - The New Property wizard lists the joined table's columns. The resulting joined property is Read Only and shares the sequence number of the base column with the same name.
  - Finish needed no separate Save.
  - The three runtime records still load after a runtime close/reopen.
- Not done here: no unload. The tutorial's unload is deferred to the section 8 experiment, where the Designer must offer FX_UMsDescription for binding.
