# EXP-061 — Hello World Part 4 Section 3: Add and recover FX_Picture bound property on FX_Items IDO

**Current status (after T7, 2026-10-11): T7 COMPLETE (final consolidated report; documentation only; zero browser calls). Final report: `evidence/EXP-061/final-report.md`. All ten acceptance checks are supported by evidence in this run: AC-1 to AC-7 and AC-10 at observed UI and accessibility level, with the limits stated in the final report; AC-8 supported with identity matched on readable fields (surrogate identifiers not read); AC-9 supported with four controller-flagged `browser_type` calls for adjudication, 41 tool-written `evidence/playwright/` files outside the EXP-061 path, and the operator's git review authoritative. Mutations in this run: one FX_Items checkout, one New Property wizard initiation, one Finish, zero ordinary Saves, one IDO Collections close, one reopen, one post-reopen recovery query, one runtime open, zero runtime retrievals, zero check-ins, zero undo checkouts, zero business-record edits. Recovered inventory: 11 original properties unchanged plus exactly one Bound FX_Picture (column FX_Picture; class FX_Picture). IDO remains checked out to `anton.ramos@3mworks.com.ph`, revision 2 / 10/10/2026. Two FX_Items runtime tabs are open (one inherited from EXP-059, not re-verified). Proposed outcome: **accepted with limits, observed only, pending coordinator and operator review; not replay_verified.** Blockers: none for the observed scope; open items are listed in the final report §16.3.**

Earlier status (after T6, 2026-10-11): T6 COMPLETE (read-only runtime verification). The FX_Items runtime Form was opened once through Open > Select Form (filter FX_Items; one row; OK). Identity `FX_Items`. Three records loaded on opening with no retrieval action: dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA, matching the values documented in EXP-051 and EXP-052 (historical surrogate identifiers not visible or read; matched on readable fields). Status `Description (Object 1 of 3)`; toolbar Save disabled; no dialog; no edit. AC-8 supported (observed, UI and accessibility level). The IDO Collections form was re-read (view only) and remains checked out to `anton.ramos@3mworks.com.ph`, Save disabled, 12 properties including FX_Picture. Limitation: a second FX_Items tab is open (the inherited EXP-059 instance, not re-read). Final consolidated audit (AC-9) and closure (AC-10) are reserved for a separate task. Full report: `evidence/EXP-061/T6-report.md`. Classification: observed only; not replay_verified.**

Earlier status (after T5, 2026-10-11): T5 COMPLETE. One clean close of the IDOs tab (no prompt); one native reopen through Open > Select Form (`IDOs / IdoCollections`); one post-reopen exact-name query returned exactly one `FX_Items` (project FX_HelloWorldProject01; base table FX_Items, fxitms, Primary Base; revision 2, 10/10/2026). Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; Save disabled. The recovered inventory has 12 rows: the 11 originals are identical to the T1 baseline (and to the T4 post-Finish readback), and exactly one added row `FX_Picture` (Bound to Column; column FX_Picture; class FX_Picture; Binary; varbinary). AC-7 supported (observed, UI and accessibility level; same session). Length -1 is wizard-observed only (not in the reopened grid). The IDO Collections Form is left open and clean for the next authorized task. Full report: `evidence/EXP-061/T5-report.md`. Classification: observed only; not replay_verified.**

Earlier status (after T4, 2026-10-11): T4 COMPLETE. Finish was invoked exactly once after every pre-Finish gate passed. No error, warning or confirmation text was displayed; the wizard closed and the IDOs tab became active (status `New Property (IDOs 1 of 1)`). The Form is clean: toolbar Save disabled; no Save invoked. The Properties inventory now has 12 rows: the 11 original rows match the T1 baseline, and exactly one new row `FX_Picture` (Bound to Column; column FX_Picture; class FX_Picture; Binary; varbinary). FX_Items remains checked out to `anton.ramos@3mworks.com.ph` (Check In and Undo Check Out enabled). Revision Num 2 and Revision Date 10/10/2026 are unchanged in the header readback (unresolved; see T4 report §8). AC-5 and the pre-close portion of AC-6 supported (observed, UI and accessibility level). The IDO Collections tab is left open. Full report: `evidence/EXP-061/T4-report.md`. Classification: observed only; not replay_verified.**

Earlier status (after T3, 2026-10-11): T3 COMPLETE. The New Property wizard was initiated exactly once for FX_Items and configured through native controls: Bound retained; Bind To `fxitms.FX_Picture` committed; Property Name `FX_Picture`; Property Class `FX_Picture` committed; inherited Data Type `Binary`, Length `-1`, Column Data Type `varbinary` (no unexpected conversion indicated). Finish NOT invoked; toolbar Save NOT invoked (Save disabled); the wizard is left open on page 2 in the pre-Finish state for coordinator review. AC-5 pre-Finish portion supported (observed). Property Name was populated by the wizard after the Bind To selection and was not typed (see T3 report §5, §12). Full report: `evidence/EXP-061/T3-report.md`. Classification: observed only; not replay_verified.**

Earlier status (after T2, 2026-10-11): T2 COMPLETE. Exactly one native Check Out of FX_Items succeeded at UI level: Locked By `anton.ramos@3mworks.com.ph` (operator), Check In and Undo Check Out enabled, row checkbox checked, Revision Num 2 and Revision Date 10/10/2026 unchanged, Save disabled, no dialog or confirmation text. AC-4 supported (observed). No wizard, Finish, Save, close, reopen, check-in or undo checkout. AC-5 to AC-10 not started. Classification: observed only; not replay_verified. Full report: `evidence/EXP-061/T2-report.md`.**

Earlier status (after T1, 2026-10-11): T1 COMPLETE (read-only preflight; zero mutations). Identity of the `FX_Items` IDO confirmed (one row, `IDOs 1 of 1`; project `FX_HelloWorldProject01`; base table `FX_Items`, alias `fxitms`, Primary Base; revision 2). Baseline inventory recorded: **11 Bound properties**, no Derived; **`FX_Picture` absent**. `dbo.FX_Items.FX_Picture` visible as varbinary, Length -1, nullable, Column Id 13 (`SQL Columns 12 of 12`). Property class `FX_Picture` visible as one row (Binary, -1, varbinary, PNG). **FX_Items is checked in; the checkout prerequisite is not yet satisfied.** No checkout, wizard, Finish, Save, close or reopen was performed. Stopped for coordinator review before any change to FX_Items. AC-1 to AC-3 supported (observed, UI level). AC-4 pre-state observed. AC-5 to AC-10 not started. Classification: **observed only; not replay_verified.**

## Run identity

- Run `R-20261011-223208-4y9y`, cycle 0, task **T1** (read-only preflight). Worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`; task_message_id `11700932-1958-43f6-b89f-211f7fb4df1b`.
- Date 2026-10-11. Mode LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Form work only; the IDO and property are tenant-wide).
- Brief commits: `2861517` (draft, operator guards added), `0f44939` (approved).
- Identity bar observed: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- **Record provenance:** this record did not exist at the start of T1 (glob `experiments/EXP-061*` returned no files). It was created by the T1 worker at the path named in the brief's scope list. The brief's header line truncates the file name (`…-fx-pi.md`); the full name above is used.
- Evidence directory `evidence/EXP-061/`. T1 report and action audit: `evidence/EXP-061/T1-report.md`.

## Objective (from the brief)

Using the native Web Client, open IDO Collections through Open > Select Form; retrieve exactly `FX_Items`; record its project, base table, revision, checkout ownership and complete property inventory; prove `FX_Picture` absent; verify the `dbo.FX_Items.FX_Picture` column and the `FX_Picture` property class. If checked in, perform exactly one native checkout of FX_Items. Using the native New Property wizard, add exactly one Bound property `FX_Picture` bound to column `FX_Picture` with property class `FX_Picture`; verify the inherited types; Finish exactly once; at most one ordinary Save. Close the clean IDO Collections Form once, reopen once, query once, and prove the recovered inventory equals the baseline plus exactly one FX_Picture property. Confirm FX_Items remains checked out to the operator. Open the FX_Items runtime Form read-only and verify its three records.

**Out of scope (summary):** any change to `dbo.FX_Items` or its FX_Picture column; any change to the FX_Picture property class; more than one IDO property or any change to a pre-existing FX_Items property; any other IDO or project; Web Designer or Form definition changes; PNG upload, image or binary tests; check-in or undo checkout; unload, cache, FormSync; direct SQL; browser diagnostics; and any further work on EXP-059 or EXP-060.

## Sources reviewed (T1)

- `AGENTS.md`: full.
- `docs/mongoose/transcripts/hello-world-pt4.md`, Section 3 (lines 119–131). Narrated: IDO Collections filtered to Items with F4; New Property (Bound); Bind To the Picture column; name Picture; Picture class; verify inherited types; Finish; then "close the form and unload global form objects". **The unload step is not authorized and is not part of EXP-061.**
- `experiments/EXP-049-…` (lines 1–302 of 356): full identity and property baseline of FX_Items (11 properties; checked in at T14; the Properties button opened a separate Form tab at T12).
- `experiments/EXP-050-…` and `experiments/EXP-051-…`: **partial** (targeted search only; see the T1 report §1 for exactly what was read).
- `experiments/EXP-048-…`: **partial** (targeted search only; property-class procedure and the checkout indications of new property classes).
- `experiments/EXP-059-…`: full. The column was added and accepted with limits (AC-8 waived).
- `experiments/EXP-060-…`: full. The property class was created, saved, recovered and accepted with limits.

Not read: `tools/` (intentionally unreadable per the brief).

## Repository starting state (operator-provided session-start git status; not re-verified; no shell)

- Branch `claude-harness`; main branch `main`; git user `aurorynaru`.
- Pre-existing modifications (**not EXP-061 work; untouched by the T1 worker**): `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`.
- EXP-061 documentation written in T1 (see Documentation changes).

## T1 — read-only preflight (AC-1 to AC-3; AC-4 pre-state)

Full report: `evidence/EXP-061/T1-report.md`. Key findings:

- **Start (AC-1):** Web Client tab selected after one list and one select. Identity bar as above. No sign-in, session or configuration challenge; no portal banner. Inherited FX_Items runtime Form, Save disabled.
- **Open (native route):** toolbar Open → Select Form → filter `PropertyClass` replaced by `IdoCollections` → one End key → row **`IDOs` / `IdoCollections`** (the other row `G6RIdoCollectionSearch` was not selected) → OK once. Result: IDOs tab active; `favoriteContext=IdoCollections`; Save disabled; no dialog.
- **Exact-name query (AC-2):** one F4 for `FX_Items`; **one row, status `IDO Name (IDOs 1 of 1)`**. Header: project `FX_HelloWorldProject01`; base table `FX_Items`, alias `fxitms`, Primary Base; Revision Num `2`; Revision Date `10/10/2026`; Locked By blank; Label/Caption `oFX_Items`; Access As `G6R`; Save disabled; **checked in** (Check Out enabled, Undo Check Out disabled, row checkbox unchecked; matches the EXP-049 T14 post-check-in pattern).
- **Property inventory (AC-2):** in-form `Properties` tab: **11 rows, all Bound to Column, no Derived.** Business: FX_Item (seq 1; class FX_ItemBase; column FX_Item; key sequence 1), FX_Description (seq 2; no class; column FX_Description; String 150 nvarchar), FX_Cost (seq 3; class FX_Cost; column FX_Cost), FX_UM (seq 4; class FX_UM; column FX_UM). Framework: CreatedBy, UpdatedBy (String 128 UsernameType), CreateDate, RecordDate (Date CurrentDateType), RowPointer (GUID RowPointerType), NoteExistsFlag, InWorkflow (Byte FlagNyType). **`FX_Picture` absent.** Class-bound rows show blank Data Type/Length/Column Type in this grid (not re-verified; see T1 report §5). Checkbox header mapping inferred from DOM order; Required confirmed for FX_Item only.
- **SQL column (AC-3):** inherited Sql Tables record `FX_Items` (dbo, `1 of 1`) → Columns... (view) → **`SQL Columns 12 of 12`**; row 12 `FX_Picture`: Data Type `varbinary`; System Data Type `varbinary`; Length `-1`; Is Nullable checked; PK unchecked; **Column Id 13**. The 11 originals are present. Evidence: `t1-07-sqlcolumns-FX_Picture-row-13-readback.png`.
- **Property class (AC-3):** inherited Property Classes tab → Filter in Place → retained criterion `FX_Picture` (not typed by the worker) → one F4 → **one row `FX_Picture`, status `Base Class (IDO Property Classes 1 of 1)`**: Data Type Binary; Length -1; Column Data Type varbinary; Binary Format PNG; Base Class, Label String ID and Domain fields blank; Revision 1 (10/11/2026); Locked By operator; Check In and Undo Check Out enabled. Evidence: `t1-06-propertyclasses-FX_Picture-exact-query-settled.png`. **Wizard lookup not exercised** (only in a later task).
- **Checkout (AC-4 pre-state):** FX_Items checked in → a single native checkout will be needed in a later authorized task. **Zero checkout actions in T1.**

## Acceptance status (cumulative after T1; SUPERSEDED at T7 by the consolidated matrix in `evidence/EXP-061/final-report.md` §15)

Note for the reader at T7: the AC-5 row marked "pre-Finish portion" (T3) is superseded by the T4 row. The AC-9 and AC-10 rows below are superseded by the T7 matrix.

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported (observed)** | `t1-01`, `t1-02`; `t1-snapshot-01`; T1 report §1–4 | Heading is the tab label `IDOs` (route `IdoCollections`); server configuration beyond the identity bar not inspected |
| AC-2 | **Supported (observed, UI level)**: one `FX_Items`; project, base table, revision, checked-in state, 11-property inventory; FX_Picture absent | `t1-03`, `t1-04`, `t1-05`; `t1-snapshot-02`, `-03`; T1 report §4–5 | Class-bound Data Type/Length/Column Type blank in grid; checkbox header mapping inferred; FiP match mode not stated |
| AC-3 | **Supported (observed, UI level)** for the SQL column (varbinary, -1, nullable, Column Id 13) and the class (one FX_Picture row: Binary, -1, varbinary, PNG) | `t1-06`, `t1-07`; `t1-snapshot-05`, `-08`; T1 report §7–8 | Column via inherited Sql Tables record (not re-queried); class via retained criterion; wizard lookup not exercised; no database read |
| AC-4 | **Supported (observed, UI and accessibility level; T2)**: pre-state checked in; one native Check Out; Locked By operator; Check In and Undo Check Out enabled; no displayed confirmation or error; no other object checked out | `t2-01`, `t2-02`; `t2-snapshot-01`–`-03`; `evidence/EXP-061/T2-report.md` §2–5 | Checked-out status interpreted from Locked By and enabled controls; no database read; base table not re-read in T2 |
| AC-5 | **Pre-Finish portion supported (observed, UI and accessibility; T3)**: wizard initiated once; Bound retained; Bind To `fxitms.FX_Picture`; Property Name `FX_Picture`; Property Class `FX_Picture`; inherited Binary / -1 / varbinary; Finish count 0 | `t3-02`, `t3-05`, `t3-06`; `t3-snapshot-02`, `-07`; `evidence/EXP-061/T3-report.md` §2–7 | Property Name wizard-populated (not typed); Bound verified on page 1 only; Finish and its response not yet captured |
| AC-5 | **Supported (observed, UI and accessibility; T4)**: wizard initiated once; Bound retained; Bind To `fxitms.FX_Picture`; Property Name `FX_Picture`; Property Class `FX_Picture`; inherited Binary / -1 / varbinary; all values committed before Finish; Finish count 1; response: no displayed text | `t4-01`, `t4-snapshot-00`, `t4-snapshot-02`; `evidence/EXP-061/T4-report.md` §1–2 | Length -1 not in grid; no confirmation text offered |
| AC-6 | **Supported (observed, UI level; T4, pre-close)**: Form clean (Save disabled), no dialog or error; exactly one Bound FX_Picture property (column FX_Picture; class FX_Picture); 11 originals unchanged in readback; FX_Items checked out to the operator | `t4-02`, `t4-03`; `t4-snapshot-01`, `-02`; T4 report §3–4 | Revision Num 2 unchanged (unresolved); no database read; post-reopen confirmation (AC-7) pending |
| AC-7 | **Supported (observed, UI and accessibility level; T5)**: one clean close (no prompt); one native reopen through Open > Select Form; one post-reopen exact-name query → one `FX_Items` (FX_HelloWorldProject01; fxitms, Primary Base); revision 2 / 10/10/2026; Locked By operator; Check In and Undo Check Out enabled; Save disabled; recovered inventory = 11 originals identical to T1 + one Bound FX_Picture (column FX_Picture; class FX_Picture) | `t5-01`, `t5-02`, `t5-03`; `t5-snapshot-00` to `-04`; `evidence/EXP-061/T5-report.md` §2–7 | Same-session UI; Length -1 not in reopened grid (wizard-only); no database read; checkout interpreted from Locked By and enabled controls |
| AC-8 | **Supported (observed, UI and accessibility level; T6)**: runtime FX_Items Form opened once through Open > Select Form; identity `FX_Items`; three rows (dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA) with documented values; status `Object 1 of 3`; Save disabled; no dialog; no edit; no picture component, PNG or binary test | `t6-01`; `t6-snapshot-01`, `-03`; `evidence/EXP-061/T6-report.md` §3–5 | Identity by readable fields (surrogate IDs not read); documented values from EXP-051/052 (not a database read); second FX_Items tab open (inherited instance not re-read); same-session UI only |
| AC-9 – AC-10 | AC-9 cumulative audit: partially (T6 §7); final consolidated audit reserved. AC-10 final report reserved. | `T6-report.md` §7 | Final closure requires a separate task |

## Operation counts (T1 only)

| Operation | Count |
| --- | --- |
| Form opened (IDO Collections, Open > Select Form) | 1 |
| Exact-name IDO query (F4) | 1 |
| Property-class prerequisite query (F4, retained criterion) | 1 |
| Checkout / check-in / undo checkout | 0 / 0 / 0 |
| New Property wizard; Finish; Save; New; Delete | 0; 0; 0; 0; 0 |
| Form close; reopen | 0; 0 |
| Browser clicks / typed entries / keys / waits | 9 / 2 / 3 / 2 |
| JavaScript, run-code, browser console or network inspection (by worker) | 0 |
| Unload, cache, FormSync, Designer, direct SQL | 0 |
| Dialogs answered | 1 (Select Form OK; a Mongoose dialog) |

## Documentation changes (T1)

- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: created (this record).
- `evidence/EXP-061/T1-report.md`: created (T1 report, action audit, baseline matrix, limits).
- `evidence/EXP-061/t1-01-webclient-initial-state.png`; `t1-02-idos-opened-via-select-form-initial.png`; `t1-03-idos-criterion-FX_Items-before-F4.png`; `t1-04-idos-FX_Items-query-settled.png`; `t1-05-idos-FX_Items-properties-baseline-visual.png`; `t1-06-propertyclasses-FX_Picture-exact-query-settled.png`; `t1-07-sqlcolumns-FX_Picture-row-13-readback.png`: created (screenshots).
- `evidence/EXP-061/t1-snapshot-01-…yml` to `t1-snapshot-08-…yml`: created (accessibility snapshots written by the snapshot tool at the worker's request).
- No other repository file was written by the T1 worker. `tools/` was not read or written.

## Documentation changes (T2)

- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: updated (status line, T2 and T3 sections, AC-4 and AC-5 rows, next step).
- `evidence/EXP-061/T3-report.md`: created (wizard configuration report, action audit, written-file inventory, limits).
- `evidence/EXP-061/T6-report.md`: created (runtime open, three-record verification, ownership re-read, action audit, limits).
- `evidence/EXP-061/t6-01-runtime-fx-items-three-records-save-disabled.png`: created.
- `evidence/EXP-061/t6-snapshot-00` to `t6-snapshot-03` YAML: created (the decisive three-row readback is `t6-snapshot-01`).
- `evidence/EXP-061/T5-report.md`: corrected in T6 (Select Form OK counted under dialogs answered).
- `evidence/EXP-061/T5-report.md`: created (close, reopen, recovery query, 11-versus-12 comparison, action audit, limits).
- `evidence/EXP-061/t5-01`, `t5-02`, `t5-03` PNGs: created (pre-close clean state; pre-F4 criterion; recovered identity and ownership).
- `evidence/EXP-061/t5-snapshot-00` to `t5-snapshot-04` YAML: created (accessibility snapshots; the decisive inventory is `t5-snapshot-04`).
- `evidence/EXP-061/T4-report.md`: created (Finish report, post-Finish inventory, baseline comparison, action audit, limits).
- `evidence/EXP-061/t4-01` to `t4-03` PNGs: created (pre-Finish gate, immediate state, settled clean state).
- `evidence/EXP-061/t4-snapshot-00`, `-01`, `-02` YAML: created (accessibility snapshots; the decisive inventory is `t4-snapshot-02`).
- `evidence/EXP-061/t3-01` to `t3-06` PNGs: created (pre-wizard gate, page 1 Bound, page 2 blank, Bind To lookup, Bind To committed, pre-Finish configuration).
- `evidence/EXP-061/t3-snapshot-00-start-fresh.yml`, `t3-snapshot-02` to `t3-snapshot-07`: created (accessibility snapshots).
- `evidence/EXP-061/T2-report.md`: created (checkout report, action audit, written-file inventory, limits).
- `evidence/EXP-061/t2-01-before-checkout-idos-FX_Items-identity-ownership.png`; `t2-02-after-checkout-settled-idos-FX_Items-locked-by-operator.png`: created (screenshots).
- `evidence/EXP-061/t2-snapshot-00-start-fresh.yml`; `t2-snapshot-01-…`; `t2-snapshot-02-…`; `t2-snapshot-03-…`: created (accessibility snapshots).
- No other repository file was written by T2.

## Knowledge state

| Finding | State |
| --- | --- |
| Select Form row `IDOs / IdoCollections` opens the IDO Collections Form with no challenge | **observed** (one run) |
| Exact-name IDO query for `FX_Items` returns one row (project FX_HelloWorldProject01, revision 2, Locked By blank, checked in) | **observed** (one run; UI level) |
| 11 Bound properties; `FX_Picture` absent | **observed** (one run; UI level; class-bound Data Type/Length blank in grid) |
| `dbo.FX_Items.FX_Picture` varbinary, -1, nullable, Column Id 13 (12 columns) | **observed** (one run; UI level; no database read) |
| `FX_Picture` property class: one row; Binary, -1, varbinary, PNG; checked out to operator | **observed** (one run; UI level) |
| Property addition, checkout, Save, close/reopen, recovery, runtime records | **not performed** (T2 onward) |
| Replay or procedure status | **not claimed** (not replay_verified) |

## T2 — one native Check Out of FX_Items (cycle 1; AC-4 supported; wizard NOT started)

Full report: `evidence/EXP-061/T2-report.md`. Task message `80f153ae-7840-4281-9bfd-44d33a77fc57`, worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`.

- **Gates (fresh, read-only):** tab list (1); select tab 1 (first attempt); start snapshot showed Sql Columns active (as instructed); one click on the IDOs tab; IDO `FX_Items`, project `FX_HelloWorldProject01`, `IDOs 1 of 1`; Revision 2 / 10/10/2026; Locked By blank; Check Out enabled; Undo Check Out disabled; Save disabled; no dialog; no challenge. **Checked in; ownership unambiguous; checkout permitted.**
- **Check Out (1 of 1):** one click on the native `Check Out` button. No retry. No displayed confirmation, warning or error; no dialog.
- **Immediate and settled (3 s):** Locked By `anton.ramos@3mworks.com.ph` (matches the identity bar); row checkbox checked; Check In and Undo Check Out enabled; Save disabled; Revision Num 2 and Revision Date 10/10/2026 unchanged; status `Check Out (IDOs 1 of 1)`.
- **Base table:** not re-read in T2; carried from T1 (`FX_Items`, alias `fxitms`, Primary Base).
- **Counts (T2):** Check Out 1; check-in 0; undo checkout 0; wizard 0; Finish 0; Save 0; New 0; Delete 0; close 0; reopen 0; query 0; runtime interaction 0; typed 0; dialogs answered 0; ref-not-found 0; timeouts 0; JavaScript 0; console or network 0; untargeted snapshots 4; screenshots 2.
- **Cumulative (T1–T2):** Form opened 1; exact-name IDO query 1; property-class query 1; checkout 1; check-in 0; wizard 0; Finish 0; Save 0; close 0; reopen 0; dialogs answered 1 (Select Form OK, T1).
- **Limits:** UI-level, same-session; no database read; checkout status interpreted from Locked By and enabled controls (no labelled status field); checkout response had no displayed text; Locked By clipped in the image (full value from accessibility).

## T3 — New Property wizard configured; stopped before Finish (cycle 2; AC-5 pre-Finish portion supported)

Full report: `evidence/EXP-061/T3-report.md`. Task message `e718a12d-26f7-43bb-8823-0c6888d13cac`, worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`.

- **Gates (fresh, read-only):** tab list (1); select tab 1 (first attempt); IDOs tab selected; IDO `FX_Items`, project `FX_HelloWorldProject01`; Locked By operator; Check In and Undo Check Out enabled; Save disabled; Revision 2 / 10/10/2026; no challenge or dialog. In-form Properties tab re-read: **11 rows**, identical to the T1 baseline; `FX_Picture` absent.
- **Wizard initiation (1 of 1):** one click on New Property. Page 1: IDO Name `FX_Items` (read-only); binding radio **Bound active** (retained); Finish disabled.
- **Next (1):** one click to page 2 (non-committing).
- **Bind To (committed):** Open (1), then option `fxitms.FX_Picture` (1). Lookup had 12 entries, one `FX_Picture`. Committed readback `fxitms.FX_Picture`.
- **Property Name:** `FX_Picture`, populated by the wizard after the Bind To selection; not typed by the worker (uncertainty recorded).
- **Property Class (committed):** Open (1), then option `FX_Picture` (1). One `FX_Picture` in the lookup (look-alike `G6RPiture` not selected). Committed readback `FX_Picture`; inherit checkboxes checked.
- **Inherited types:** Data Type `Binary`; Length `-1`; Decimal blank; Column Data Type `varbinary`. Compatible with the SQL column `dbo.FX_Items.FX_Picture` (varbinary, -1; T1). No conversion or class substitution indicated.
- **Stop state:** wizard tab active on page 2; **Finish enabled and NOT pressed**; Back and Cancel enabled; Next disabled; toolbar Save disabled; no dialog. Wizard not cancelled or restarted.
- **Counts (T3):** wizard initiation **1**; Finish **0**; Save **0**; checkout / check-in / undo **0**; New / Delete **0**; close / reopen **0**; Select Form **0**; F4 **0**; typed entries **0**; runtime interaction **0**; clicks 6; Next 1; lookup opens 2; option selections 2; dialogs answered 0; ref-not-found 0; timeouts 0; JavaScript / run-code / console / network 0; untargeted snapshots 7; screenshots 6.
- **Cumulative (T1–T3):** Form opened 1; exact IDO query 1; property-class query 1; checkout 1; wizard initiation 1; Finish 0; Save 0; close 0; reopen 0; check-in / undo 0.
- **Limits:** UI-level, pre-Finish only; Property Name origin; Bound verified on page 1 only; page-1 accessibility mislabel (IDO Name read as `Property Name`); no database read.

## T4 — Finish invoked once; post-Finish inventory; Form clean (cycle 3; AC-5 and AC-6 pre-close supported)

Full report: `evidence/EXP-061/T4-report.md`. Task message `ecc2b5b8-ed1c-4d4d-bf1b-cc3f0ffa9c6f`, worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`.

- **Gate (one visible inspection, fresh):** wizard on page 2; Bind To `fxitms.FX_Picture`; Property Name `FX_Picture` as populated value text (not placeholder); Property Class `FX_Picture`; Data Type `Binary`; Length `-1`; Column Data Type `varbinary`; inherit checkboxes checked; Finish enabled; Next disabled; toolbar Save disabled. Bound retained from page 1 (not re-navigated). **All gates passed.**
- **Finish (1 of 1):** one click. **Response:** no dialog, alert or confirmation; no success, warning or error text displayed. Wizard closed; IDOs tab active; status `Check Out (IDOs 1 of 1)` changed to `New Property (IDOs 1 of 1)`. No retry.
- **Settled (3 s):** Save disabled (clean); no dialog; Revision Num 2 and Revision Date 10/10/2026 unchanged; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled.
- **Inventory (in-form Properties tab, accessibility):** **12 rows.** Original 11 match T1 (names, order, sequence, classes, property types, columns, key sequences, data types, lengths, column types, raw checkbox states). New row 12: `FX_Picture`, seq 12, class `FX_Picture`, Bound to Column, column `FX_Picture`, Binary, varbinary. No Derived type. Length -1 is not shown in the grid (wizard only).
- **Counts (T4):** Finish 1; wizard initiation 0; Save 0; checkout / check-in / undo 0; close 0; reopen 0; query 0; runtime 0; dialogs answered 0; ref-not-found 0; timeouts 0; JavaScript / console / network 0; untargeted snapshots 3; screenshots 3.
- **Cumulative (T1–T4):** Form opened 1; exact IDO query 1; property-class query 1; checkout 1; wizard initiation 1; Finish 1; Save 0; close 0; reopen 0; recovery query 0; check-in / undo 0; dialogs answered 1 (T1 Select Form OK).
- **Limits:** UI-level and same-session only; Finish response has no displayed text; Revision Num unchanged after property add (mechanism unresolved); Length not in grid; grid checkbox mapping by DOM order; no database read; the Form is left open.

## T5 — close, native reopen, recovery query, 11-versus-12 comparison (cycle 4; AC-7 supported)

Full report: `evidence/EXP-061/T5-report.md`. Task message `8627cc71-afaa-49c5-a014-617389dddb04`, worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`.

- **Pre-close gate (fresh):** IDOs tab active for FX_Items; project FX_HelloWorldProject01; wizard closed; Save disabled; Locked By operator; Check In and Undo Check Out enabled; Properties 12 rows (FX_Picture present); no dialog. Clean pre-close screenshot `t5-01`.
- **Close (1 of 1):** one click on `Close Panel IDOs`. **No unsaved-changes prompt; no dialog.** IDOs tab removed; inherited Property Classes tab became active (not acted on). Save disabled.
- **Reopen (1 of 1):** toolbar Open → Select Form (filter already `IdoCollections`) → row `IDOs / IdoCollections` → OK. `favoriteContext=IdoCollections`; Save disabled; no dialog; no challenge.
- **Recovery query (1 of 1):** `FX_Items` typed once into the IDO Name criteria; one F4; 3 s settle. **One row:** `FX_Items`, `IDOs 1 of 1`.
- **Recovered identity and ownership:** project `FX_HelloWorldProject01`; base table `FX_Items` (fxitms, Primary Base, Inner); Revision Num `2`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled (checked out); Save disabled; Access As `G6R`.
- **Recovered inventory (in-form Properties tab, accessibility, 12 rows):** rows 1–11 identical to the T1 baseline and to the T4 post-Finish readback (names, sequence, classes, property types, columns, key sequences, data types, lengths, column types, every checkbox state). Row 12 `FX_Picture`: seq 12; class FX_Picture; Bound to Column; column FX_Picture; key seq 0; Data Type Binary; Column Type varbinary; checkboxes all unchecked. **Recovered = baseline + exactly one FX_Picture.** No property removed, reordered or changed.
- **Inherited versus visible:** Data Type Binary and Column Type varbinary are visible after reopen. Length -1 and Binary Format PNG are not visible in the reopened grid; Length -1 is wizard-observed only (T3/T4).
- **Counts (T5):** close 1; reopen 1; recovery query 1; typed 1; F4 1; Properties tab selection 1 (view only); Finish 0; Save 0; wizard 0; checkout / check-in / undo 0; runtime Form 0; separate Properties maintenance Form 0; dialogs answered 0; ref-not-found 0; timeouts 0; JavaScript / console / network 0.
- **Cumulative (T1–T5):** Form opened 2 (initial plus reopen); close 1; reopen 1; IDO query (F4) 2 (initial plus post-reopen); property-class query 1; checkout 1; wizard initiation 1; Finish 1; Save 0; check-in / undo 0; recovery query 1; runtime Form 0.
- **Limits:** same-session UI recovery only; no database read; no cache check; no independent session; checkout status interpreted from Locked By and enabled controls; Length not in reopened grid; checkbox header mapping inferred.

## T6 — read-only FX_Items runtime verification (cycle 5; AC-8 supported)

Full report: `evidence/EXP-061/T6-report.md`. Task message `52879b86-7806-442d-a191-139721071c43`, worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`.

- **Provenance:** the three original records are documented in EXP-051 (T5 entry and T8 query: dumbbell, eggs, guitar) and EXP-052 (automatic load: `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`; `Object 1 of 3`). Surrogate identifiers were not visible in the runtime grid and were not read; identity is matched on readable fields.
- **Runtime open (1):** toolbar Open → Select Form (filter `IdoCollections` replaced with `FX_Items`, one type action; End once) → row `FX_Items / FX_Items` → OK once. Identity `FX_Items`; the form loaded its records on opening.
- **Retrieval (0):** no F4, Refresh or Get More Rows.
- **Three-record inventory:** rows 1–3 present (numbered 1, 2, 3); values match the documented records; status `Description (Object 1 of 3)`; no extra row or placeholder.
- **Clean state:** toolbar Save disabled; no star or pending indicator; no dialog. Description field has form focus (text highlighted); **no value typed or edited**.
- **IDO ownership re-read (view only):** IDOs tab selected once; Revision 2 / 10/10/2026; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; Save disabled; 12 properties including FX_Picture. Then the runtime tab reselected (view only). No IDO change.
- **Two FX_Items tabs:** the inherited EXP-059 instance (not acted on or re-read) and the newly opened instance are both present.
- **Counts (T6):** runtime open 1; retrieval 0; business-record edits 0; New / Delete / Save / Refresh 0; checkout / check-in / undo 0; IDO close / reopen 0; wizard / Finish 0; Select Form OK 1 (in-form dialog); typed 1; keys 1 (End); tab selections 2 (view only); clicks 5; untargeted snapshots 4; targeted dialog snapshots 3; screenshots 1; JavaScript / console / network 0.
- **Cumulative irreversible / lifecycle (T1–T6):** checkout 1; wizard 1; Finish 1; Save 0; check-in 0; undo 0; close 1; reopen 1; recovery query 1; runtime open 1; runtime retrieval 0; business edits 0.
- **Correction in T6:** the T5 report counted dialogs answered as 0; the Select Form OK during the T5 reopen was one in-form dialog. The T5 report is corrected.

## T7 — final consolidated report and acceptance matrix (cycle 6; documentation only; zero browser calls)

Full report: `evidence/EXP-061/final-report.md`. Task message `45e2c2aa-5842-4285-a7ce-2a9fe9059471`, worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`.

- **Sources:** the six controller audits `harness-audit-T1.md` to `harness-audit-T6.md` (read in full); this record; accessibility readbacks. The 11 original property rows in T1, T4 and T5 were extracted and are string-identical; the FX_Picture row appears only in T4 and T5. The T1–T6 reports were checked for counts and cited claims against the audits and snapshots, not re-read line by line.
- **Final acceptance (proposed):** AC-1 to AC-10 all supported by evidence (see the final report §15 for references and limits). Proposed outcome: **accepted with limits, observed only, pending coordinator and operator review; not replay_verified.**
- **Cumulative audit (per-row tables):** checkout 1; check-in 0; undo 0; wizard initiation 1; Finish 1; ordinary Save 0; IDO Collections close 1; reopen 1; post-reopen recovery query 1; runtime open 1; runtime retrieval 0; business-record edits 0; Select Form OK 3 (T1, T5, T6; ordinary dialogs, not confirmations); browser evaluate, run-code, console, network and tracing calls 0.
- **Controller-flagged `browser_type` calls:** 4 (T1 ×2, T5 ×1, T6 ×1), native text entry into required fields; flagged for coordinator adjudication. The T5 and T6 worker reports did not mention the flags.
- **Corrections recorded in the final report §16.2:** the T6 report's cumulative dialog line (superseded; correct total 3); the T5 checkbox note (the Read Only Record column is not supported as "no checkbox"; the header mapping remains inferred); the T1 find count (audit shows 2); the T3 failed record edit (audit row 45) not mentioned in the T3 report.
- **Written files at T7:** `evidence/EXP-061/final-report.md` (created); this record (updated). No other repository file was written.
- **Confinement:** 41 browser-tool files under `evidence/playwright/` (34 page snapshots, 7 console logs) fall within this run's time window (14:32:23 to 14:53:39) and are outside the EXP-061 path. They are tool-written, not worker-written, and need the operator's git review.
- **Final browser state:** last reported by T6; not re-inspected at T7. Two FX_Items runtime tabs open (one inherited from EXP-059, not re-verified; one opened in T6). IDO Collections clean and checked out to the operator. No dialog.

## Documentation changes (T7)

- `evidence/EXP-061/final-report.md`: created (final consolidated report, baseline and recovered inventories, audit, confinement, acceptance matrix, limits, corrections, recommendation).
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: updated (top status line, superseded acceptance-table note, this T7 section).
- No other file was written at T7. `T1-report.md` to `T6-report.md` were not edited.

## Next permitted step

No browser action is permitted within EXP-061. The coordinator and operator review `final-report.md` and this record, adjudicate the flagged calls and open items in final report §16.3, and decide the final outcome. Any additional verification (surrogate identifiers, a Length -1 readback, a fresh inspection of the inherited FX_Items tab, or closing a duplicate tab) needs a separate authorized task.

Earlier note (superseded by T6): The IDO Collections Form is open, clean and recovered; the read-only FX_Items runtime verification (AC-8, three records) was the next step under a separate authorization. No Save, checkout, wizard, or further close/reopen is permitted in this experiment at this point.

Earlier next-step note (superseded by T5): No Save is needed (Form clean). The next task is the persistence check: close the clean IDO Collections internal tab exactly once; reopen it exactly once through Open > Select Form (`IdoCollections`, row `IDOs / IdoCollections`); one post-reopen exact-name query for `FX_Items`; re-read identity, the complete 12-row inventory, the FX_Picture binding and class, revision, Locked By and checkout state; compare with the T1 baseline. Then open the FX_Items runtime Form once read-only (three records). Both need explicit authorization.

## Open questions and blockers

1. **No blockers in T1.**
2. Class-bound Data Type/Length/Column Type are blank in the IDO Properties grid. The wizard or a detail-pane read may show them; not required for T1.
3. Checkbox column mapping in the Properties grid is inferred from header order (Required confirmed only for FX_Item).
4. The IDOs `Properties` button (opens a separate IDO Properties Form tab per EXP-049) was not pressed. The coordinator should choose the post-change inventory surface, and count any extra tab in the close/reopen audit.
5. The inherited Sql Tables, Sql Columns, FX_Items runtime, and Property Classes tabs remain open and clean. The Designer tab (tab 0) was not acted on.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-223208-4y9y: completed/accepted at cycle 7, no pauses). Observed only, not replay-verified.
- **Confinement** (operator git review): the only new paths are this record and `evidence/EXP-061/`.
- **Flagged typing:** the four `browser_type` calls flagged by the controller were native text entry (the filter criterion and wizard fields), all within scope.

Changed, for later cleanup (**tenant-wide**, authorized by the AGENTS.md FX_ scope extension and the operator decision "continue, leave checked out"):
- **IDO `FX_Items`** (project FX_HelloWorldProject01, base table FX_Items alias `fxitms`) is now **checked out to the operator**. It was checked in after EXP-049; one Check Out was made, with no confirmation text. Revision 2, 10/10/2026, unchanged.
- **New Bound property `FX_Picture`:** Bind To `fxitms.FX_Picture`, Property Class `FX_Picture`, inheriting Data Type Binary, Length -1 and Column Data Type varbinary from the class. It was created by one New Property wizard and one Finish; no separate Save was needed.
- The 11 original Bound properties are unchanged.
- No Check In, no Undo Check Out and no unload. No Form, table, class or data change; the three runtime rows are unchanged (`t6-01`).

Operator screenshot review:
- `t3-06`: the IDO Property Wizard, Property Attributes page: Bind To `fxitms.FX_Picture`, Property Name `FX_Picture`, Property Class `FX_Picture`. Data Type and Column Data Type both have "Inherit from Property Class" checked, showing Binary, Length -1 and varbinary.
- `t5-03`: after the close/reopen, the IDOs runtime query returns exactly one row, FX_Items: Project FX_HelloWorldProject01, Revision Num 2, Locked By the operator, Check In and Undo Check Out enabled, Label String ID `oFX_Items`.

Learned (observed):
1. **Adding a property:** IDO Collections (the runtime form, titled "IDOs") → exact query → **Check Out** (required before New Property; no confirmation) → **New Property** → wizard page 1 (Bound is the default) → page 2: Bind To lookup (lists `<alias>.<column>`), Property Name, Property Class → **Finish**. Finish commits immediately; the toolbar Save stays disabled.
2. **Checked-out classes are usable:** a property class that is still checked out (FX_Picture, EXP-060) is offered in the wizard's Property Class lookup. Its Data Type and Column Data Type are inherited, which is confirmed by the "Inherit from Property Class" checkboxes. No unload was needed (second observation after EXP-049).
3. **Checkout leaves the revision alone:** a Check Out does not change the revision number or date. Locked By changes, and Check In / Undo Check Out become enabled.

Limits:
- UI level only.
- The runtime Form has not yet been shown to use FX_Picture (that is section 4).
- Whether the runtime needs the IDO checked in or the metadata reloaded before FX_Picture becomes visible is not yet known.

Next: Part 4 section 4. Add an image (picture) component bound to FX_Picture to the User-scope FX_Items Form, plus the tutorial's import event. Sections 4–5 import an image file, so the operator must supply a PNG or approve a generated test PNG.
