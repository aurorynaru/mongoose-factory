# EXP-060 — Hello World Part 4 Section 2: Create and recover FX_Picture binary IDO property class

**Current status (after T6, 2026-10-11): T6 COMPLETE (documentation-only final audit; zero browser calls). AC-1 to AC-7 supported (observed, UI and accessibility level). AC-8 supported with stated limits (controller audits and worker inventory; no database read; git review reserved for the operator). AC-9 documentation complete in `evidence/EXP-060/T6-final-report.md`. No outcome declared; for coordinator adjudication. Classification: observed only; not replay_verified.**

Earlier status (after T5, 2026-10-11): T5 COMPLETE (one native post-reopen Filter in Place query for literal FX_Picture; one matching record; field-by-field recovery verification). AC-1 to AC-7 supported (observed, UI and accessibility level). AC-7: exactly one record (`1 of 1`); Binary, -1, varbinary, PNG and blank Base Class, Domain IDO Name, Domain Property, Domain List Properties and Label String ID match the AC-3 baseline; Save disabled; Locked By = operator (same as T3). Checked-out status is interpreted from enabled Check In and Undo Check Out controls (no labelled status field). AC-8 (cumulative audit) and AC-9 (final report) NOT STARTED; final outcome reserved for a separate coordinator task.** Classification: **observed only; not replay_verified.**

Earlier status (after T4, 2026-10-11): T4 COMPLETE (one clean close of the Property Classes tab; one native reopen via Open > Select Form; no query). AC-1 to AC-6 supported (observed, UI level). AC-6: clean close with no prompt, tab absent; reopened Form usable, heading Property Classes, Save disabled, no dialog. The reopened view is Filter in Place with blank criteria and does NOT show FX_Picture; persistence is not yet established. AC-7 (the single recovery query) NOT STARTED; AC-8 and AC-9 NOT STARTED.** Classification: **observed only; not replay_verified.** Earlier status (after T3): AC-1 to AC-5 supported.

Earlier status (after T3, 2026-10-11): T3 COMPLETE (one ordinary toolbar Save; settled state; checkout observation). AC-1 to AC-5 supported (observed, UI and accessibility level). AC-4: Save invoked once, disabled afterwards, no warning, error or confirmation text displayed. AC-5: Locked By shows the operator; Check In and Undo Check Out enabled after Save (checked-out status is an interpretation of the enabled controls, not a labelled status). AC-6 to AC-9 NOT STARTED (no close, reopen or recovery yet).** Classification: **observed only; not replay_verified.** Earlier status (after T2): AC-1 to AC-3 supported. (after T1): AC-1 and AC-2 supported.

Pre-creation finding: no property class named `FX_Picture` appears in the Property Classes runtime Form after one exact-name Filter in Place query (zero data rows). The Form is open, clean, Save disabled, and no record is selected. New has **not** been invoked.

## Run identity

- Run `R-20261011-215916-hvC7`, cycle 0, task T1. Worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`; task_message_id `7f3efe37-76d8-48be-b4ec-fc699739ef8b`.
- Date 2026-10-11 (system date). Mode LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User.
- Brief commits: `74ce19e` (draft, operator guards added), `d3c06d8` (approved).
- Identity bar observed: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- **Record creation disclosure:** this record did not exist at the start of T1. The Glob for `experiments/EXP-060*` returned no files. It was created by the T1 worker.
- Evidence directory `evidence/EXP-060/`. T1 report and action audit: `evidence/EXP-060/T1-report.md`.

## Objective (from the brief)

Using the operator-prepared Web Client, open IDO Property Classes through Open > Select Form. Verify through one exact-name query that `FX_Picture` does not exist. If absent, create exactly one property class: Data Type Binary, Length -1, Column Data Type `varbinary` (through the native F2 lookup), Binary Format PNG; Base Class, Domain and Label String ID blank. Verify, then one ordinary toolbar Save. Observe checkout ownership without changing it. Close the clean Form once, reopen once through Open > Select Form, and perform one recovery query. Classify as observed only.

**Out of scope (summary):** any change to `dbo.FX_Items` or its `FX_Picture` column; any other property class; IDO, Form definition, Web Designer, domain, Base Class, Label String ID or string resource changes; binary upload or image display; checkout management (check-in, check-out, undo); the tutorial's "Unload [All] Global Form Objects"; FormSync, deployment or direct SQL; browser-level diagnostics; authentication changes; any further EXP-059 work.

## Sources reviewed (T1)

- `AGENTS.md`: full. Relevant rules: FX_ prefix; one small controlled operation per step; verify before Save; close/reopen; evidence under `evidence/<experiment-id>/`; no reload, navigation or close/reopen as recovery unless permitted.
- `docs/mongoose/transcripts/hello-world-pt4.md`, Section 2 (lines 105–117, "Define a reusable Picture property class — 01:32–02:13"). Narrated steps: open IDO Property Classes; exit Filter in Place; create a class; Data Type Binary, Length -1, Column Data Type Var Binary; Binary Format PNG; Save; close; **Unload [All] Global Form Objects as narrated**. The tutorial's Section 2 unload step is **not authorized** by the brief and is not part of this experiment. The file's boundary note (line 117) says class creation and explicit unload are separate operations.
- `experiments/EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md`: Select Form route (filter `PropertyClass` → `Property Classes` / `IdoPropertyClasses`); zero-row Filter in Place gate leaves a blue-star placeholder; saved classes read as checked out to the operator (Check In and Undo Check Out enabled); asterisk meaning unresolved.
- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: F2 lookup pattern (click Column Data Type Open, type a prefix slowly, one F2, click the single filtered option, one Tab, read back the grid); Binary and numeric fields verified before Save; one shared toolbar Save; Save disabled and the pending stars cleared afterwards; checkout buttons enabled on the saved record; recovery by one Filter in Place query after a close and reopen.
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md`: accepted with limits (AC-8 waived). `dbo.FX_Items.FX_Picture` exists as `varbinary`, Length -1, nullable, Column Id 13. The Select Form list refreshes only after a key event. The informational SQL Tables caution alert is OK-only. A browser console read in EXP-059 was an AC-8 failure, so no console read is made in EXP-060. The inherited `Sql Tables` and `Sql Columns` tabs remain open.

## Repository starting state (operator-provided session-start git status; not re-verified; no shell)

- Branch `claude-harness`; main branch `main`; git user `aurorynaru`.
- Pre-existing modifications (**not EXP-060 work; untouched by the T1 worker**): `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`.
- EXP-060 documentation written in T1 (listed in the Documentation changes section below).

## T1 — read-only preparation and pre-creation absence query (AC-1, AC-2)

### Start state (AC-1)

- Web Client tab selected after one tab list and one select. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in or configuration screen. No portal banner.
- Inherited active Form: FX_Items runtime (from EXP-059), Save disabled, no dialog. The Designer tab (tab 0) was not acted on.

### Open (native route)

- Toolbar Open → Select Form → filter `PropertyClass` → one End key press (list refresh) → row `Property Classes` / `IdoPropertyClasses` → OK once.
- Result: Property Classes tab active; heading `Property Classes`; URL `favoriteContext=IdoPropertyClasses`; status `Filter in Place`; blank criteria; Save disabled; **New disabled** (Filter in Place state; New became enabled only after the zero-row query); Check In and Undo Check Out disabled; no dialog. Evidence: `t1-01`, `t1-02`, `t1-05`.

### Pre-creation absence query (AC-2)

- One Filter in Place query: Class Name `FX_Picture` (literal), other criteria blank, one F4, wait 2 s.
- Result: **zero data rows**; one blue-star add-mode placeholder (Class Name blank; red asterisk on the label and the `* Class Name` header); status `Base Class (IDO Property Classes 1 of 1)`; Save disabled; no dialog. Evidence: `t1-03` (criteria), `t1-04` (settled), `t1-05` (accessibility).
- Finding: **no property class named `FX_Picture` exists** in the displayed result. Creation is permitted by this gate; it is **not performed in T1**.

## Next permitted step (NOT started; requires separate authorization)

T2 (a separate authorized task): one native **New**; configure Class Name `FX_Picture`; Data Type `Binary`; Length `-1`; Column Data Type `varbinary` through the F2 lookup (click the Column Data Type Open trigger; type a prefix, e.g. `varb`, slowly; one F2; click the single filtered option only if it is exactly `varbinary`; one Tab; read back); Binary Format `PNG`; verify Base Class, Domain and Label String ID blank; capture the pre-Save configuration; then stop before Save. A later task would perform the single ordinary toolbar Save.

Before that New, the T2 task must confirm that the zero-row placeholder does not become a saved or pending record. Save is disabled, so none is pending now.

## T2 — one native New; FX_Picture configured; pre-Save verification (cycle 1; AC-3 supported; Save NOT invoked)

Full report: `evidence/EXP-060/T2-report.md`. Task message `1ebf0350-0f50-440a-b95e-463c08f48563`, worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`.

- **Gate (fresh):** tab list (1); select tab 1 (first attempt); Property Classes active; Save disabled; no dialog. T1 placeholder (blue star, Class Name blank, status `Base Class (IDO Property Classes 1 of 1)`) still present. The pre-creation query was not repeated.
- **New (1 of 1):** toolbar New. The grid stayed at **one** row (`1 of 1`); the placeholder became the add-mode record; Save became enabled. Interpretation (inference, not a database read): New reused the add-mode record and did not add a second one.
- **Configuration (native controls):** Class Name `FX_Picture`; Data Type `Binary`; Length `-1`; Column Data Type `varbinary` via the F2 lookup (prefix `varb` typed key by key; one F2; **one** filtered option `varbinary`; clicked once; committed value read back in the combobox and grid); Binary Format `PNG` (options JPEG, PNG, TIFF; PNG clicked once; committed).
- **Blank optional fields (verified):** Base Class, Domain IDO Name, Domain Property, Domain List Properties, and Label String ID are all empty in the accessibility readback and the grid.
- **AC-3 pre-Save readback:** all required values match; blank fields blank. Evidence: `t2-02` (F2 lookup), `t2-03` (accessibility), `t2-04` (visual).
- **Save:** not invoked. Save is enabled and left pending for coordinator review.
- **Counts:** New 1; Save 0; close/reopen 0; queries after T1 0; F2 1; text entries 3; clicks 7; Tab 4; other keys 1; snapshots 1 untargeted + 1 targeted; `browser_find` 12; screenshots 4; accessibility files 1; checkout actions 0; diagnostics 0; JavaScript 0; dialogs 0.
- **Unexpected responses:** (1) New reused the placeholder row rather than adding one (see above); (2) the Column Data Type combobox showed `varbinary` as autocomplete text before the click, so the committed value was confirmed only after the click; (3) Tab after Binary Format moved focus to Date Format (empty, not typed); (4) Check In and Undo Check Out remain disabled on the unsaved record, so no checkout reading exists yet.
- **Next (not authorized in T2):** the single ordinary toolbar Save (AC-4), then checkout observation (AC-5), close and reopen (AC-6), and recovery (AC-7).

## T3 — one ordinary toolbar Save; settled state; checkout observation (cycle 2; AC-4 and AC-5 supported; close and reopen NOT performed)

Full report: `evidence/EXP-060/T3-report.md`. Task message `b844e46a-e0ae-45b7-aafd-ef45b2a4e059`, worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`.

- **Gate (fresh, no mutation):** tab list (1); select tab 1 (first attempt); Property Classes active; one pending FX_Picture row; Class Name `FX_Picture`; Data Type `Binary`; Length `-1`; Column Data Type `varbinary`; Binary Format `PNG`; Base Class, Domain IDO Name, Domain Property, Domain List Properties and Label String ID blank; Save enabled; no dialog. All gates passed.
- **Save (1 of 1):** one click on the toolbar Save (`f1e28`). No retry. No error returned.
- **Immediate:** Save disabled; pending star removed from the row; `* Class Name` header asterisk removed. Status unchanged (`Date Format (IDO Property Classes 1 of 1)`). No dialog. **No native response text** (regex find for saved, success, error, warning, confirm, unsaved, changes, alert, message matched only the DevTools panel's own column header and tab names).
- **Settled (2 s):** Save `[disabled]`; one data row `FX_Picture`; all configured values retained (Binary, -1, varbinary, PNG); the three Domain comboboxes, Base Class and Label String ID blank; Revision No `1`, Revision Date `10/11/2026`, Locked By `anton.ramos@3mworks.com.ph`, Access As `G6R` unchanged.
- **Checkout observation (AC-5):** Check In and Undo Check Out changed from disabled (unsaved) to **enabled** after Save. Locked By shows the operator identity (`anton.ramos@3mworks.com.ph`, clipped visually). Identity bar: `anton.ramos@3mworks.com.ph`. **Owner: observed as the operator.** **Checked-out status: an interpretation** of the enabled controls (the same pattern EXP-047-R2 and EXP-048 recorded); the Form has no labelled checked-out status. No check-in, check-out or undo action was performed.
- **Counts (T3):** Save 1; New 0; close or reopen 0; queries 0; F2 0; checkout actions 0; diagnostics 0; JavaScript 0; dialogs answered 0; ref-not-found or timeouts 0; snapshots 2; finds 3; PNG screenshots 4; wheel 2 (view only); pointer move 1; wait 1.
- **Cumulative (T1–T3):** New 1; Save 1; pre-creation query 1; recovery query 0; close 0; reopen 0; F2 1.
- **Unexpected or limiting:** the first wheel event did not scroll the Form (a pointer move and second wheel did). The "one row, `1 of 1`" result is consistent with New having reused the add-mode record, which is still an inference (no database read).
- **Next (not authorized in T3):** AC-6 close of the clean Property Classes tab once, then one reopen through Open > Select Form; AC-7 one FilterInPlace query for `FX_Picture`; AC-8 and AC-9 audit and final report.

## T4 — one clean close of the Property Classes tab; one native reopen; no query (cycle 3; AC-6 supported; AC-7 NOT started)

Full report: `evidence/EXP-060/T4-report.md`. Task message `d4485948-9342-4829-8de3-b318cbc0d547`, worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`.

- **Gate (fresh):** tab list (1); select tab 1 (first attempt); Property Classes active; Save disabled; saved FX_Picture row with Binary, -1, varbinary, PNG; Base Class, Domain fields and Label String ID empty; Check In and Undo Check Out enabled; Locked By operator; no dialog.
- **Close (1 of 1):** one click on `Close Panel Property Classes`. No unsaved-changes prompt; no dialog; tab absent. The platform displayed the inherited FX_Items runtime (not acted on). Sql Tables and Sql Columns remain open and untouched.
- **Reopen (1 of 1):** toolbar Open > Select Form (filter `PropertyClass` retained) > row `Property Classes` / `IdoPropertyClasses` (active) > OK. URL `favoriteContext=IdoPropertyClasses`; heading `Property Classes` (selected); Save disabled; New disabled (Filter in Place state); no dialog; no authentication challenge.
- **Reopened view (not persistence evidence):** Filter in Place mode, blank criteria, one blank placeholder row; no record shown. Check In and Undo Check Out disabled because no record is selected. The brief's rule applies: persistence is not inferred from this blank view.
- **Counts (T4):** close 1; reopen 1; query 0; New 0; Save 0; F2 0; checkout actions 0; diagnostics 0; JavaScript 0; dialogs answered 0; ref-not-found 0; timeouts 0. PNG screenshots 3; accessibility snapshots 3 (plus one targeted dialog snapshot).
- **Cumulative (T1–T4):** New 1; Save 1; pre-creation query 1; post-reopen recovery query 0; close 1; reopen 1; F2 1.
- **Next (not authorized in T4):** AC-7, one Filter in Place query for literal `FX_Picture` after the reopen, then the full readback and field comparison with the AC-3 baseline; checkout state recorded from that record. Then AC-8 and AC-9.

## T5 — one native post-reopen recovery query; recovered configuration and ownership (cycle 4; AC-7 supported; AC-8 and AC-9 NOT started)

Full report: `evidence/EXP-060/T5-report.md`. Task message `19fde098-4b2f-4ffa-9a69-0a1a2523e8da`, worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`.

- **Gate (fresh):** tab list (1); select tab 1 (first attempt); Property Classes active; Filter in Place; criteria blank; Save disabled; no dialog.
- **Criterion:** `FX_Picture` typed into Class Name; one Tab; pre-F4 capture shows the criterion and echo row.
- **Query (1 of 1):** one F4; 2 s settle. Result: **one data row** `FX_Picture`; status `1 of 1`; no duplicate; no placeholder.
- **Recovered readback (accessibility):** Class Name `FX_Picture`; Data Type `Binary`; Length `-1`; Column Data Type `varbinary`; Binary Format `PNG`; Base Class, Description, Decimal Position, Default Value, Label String ID, Domain IDO Name, Domain Property, Domain List Properties and Domain Additional Settings all empty. Revision No `1`; Revision Date `10/11/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`.
- **AC-7 comparison (T2 pre-Save vs T3 post-Save vs T5 recovered):** every specified attribute and blank optional field matches; only the expected pending-to-saved changes differ (Save enabled to disabled; star removed).
- **Ownership:** Locked By is directly readable and equals the operator (T3 and T5). Check In and Undo Check Out are enabled (T3 and T5). **No labelled checked-out status field exists**; checked-out status is an interpretation of the enabled controls. Not independently verified.
- **Counts (T5):** recovery query 1; New 0; Save 0; close 0; reopen 0; F2 0; typed 1; Tab 1; clicks 0; checkout actions 0; diagnostics 0; JavaScript 0; dialogs answered 0; ref-not-found 0; timeouts 0. PNG screenshots 4; snapshots 2 (saved).
- **Observed:** New is enabled in the Filter in Place state after the query (as in T1); not invoked.
- **Cumulative (T1–T5):** New 1; Save 1; pre-creation query 1; post-reopen recovery query 1; close 1; reopen 1; F2 1; checkout actions 0.
- **Limits:** the persistence shown is UI-level in the same session (no database read); checkout status is interpreted; Locked By clipped visually (full value from accessibility); the T5 scroll was view-only.
- **Next (not authorized in T5):** coordinator review; final audit consolidation (AC-8) and final outcome (AC-9) in a separate task.

## T6 — final audit and acceptance documentation (cycle 5; documentation only; zero browser calls)

Full report: `evidence/EXP-060/T6-final-report.md`. Task message `919e37f4-b0c7-4916-82db-73e1a1b509a6`, worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`.

- **Scope:** read the T1–T5 reports, this record, and the controller audits `evidence/EXP-060/harness-audit-T1.md` to `harness-audit-T5.md`. No browser call, no Mongoose action, no query.
- **Cumulative controller totals (T1–T5):** 41 interaction actions (9, 16, 5, 5, 6); 71 reads; 0 errors; 0 exact mismatches; 6 flagged `browser_type` calls.
- **Required counts (audit-verified):** New 1 (T2); Save 1 (T3); pre-creation query 1 (T1); post-reopen recovery query 1 (T5); clean Form close 1 (T4); reopen 1 (T4); F2 varbinary lookup 1 (T2). Checkout-control activations 0. Unload, FormSync, cache, Designer, console, network, JavaScript: 0.
- **`browser_type` flags (T1: 2; T2: 3; T5: 1):** all six are native text entry into fields the brief required (Select Form filter, `FX_Picture` criteria, `FX_Picture` name, `-1` length, `varb` prefix). Reviewed in T6 §4 and treated as permitted entry, not violations. Coordinator to confirm.
- **Native Save response:** none displayed. The Form became clean (Save disabled; pending indicators cleared).
- **Field comparison:** T2 pre-Save, T3 post-Save and T5 recovered match the AC-3 baseline field for field (T6 §3). Domain Additional Settings was not read in T3.
- **Ownership:** Locked By directly observed as `anton.ramos@3mworks.com.ph` (matches the operator). Checked-out status is interpreted from enabled Check In and Undo Check Out; no labelled status field exists.
- **Limitations:** UI-level and same-session persistence only; no database read; checkout status interpreted; New reuse inferred; the T1 absence result is display-level without a same-session positive control.
- **Next:** coordinator review and adjudication of AC-5 wording, AC-8 confinement, and the `browser_type` reading. The outcome is not declared here.

## Acceptance status (cumulative; final at T6; see `evidence/EXP-060/T6-final-report.md` §1)

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported (observed, UI level)** | `t1-01`, `t1-02`, `t1-05`; `evidence/EXP-060/T1-report.md` §1–2 | Designer scope and "Site Developer" context not visible |
| AC-2 | **Supported (observed, UI level)** | `t1-03`, `t1-04`, `t1-05`; report §3 | Display-level; case variants not typed (brief allows one query); no same-session positive control |
| AC-3 | **Supported (observed, UI and accessibility level; pre-Save; T2)** | `t2-02`, `t2-03`, `t2-04`; `evidence/EXP-060/T2-report.md` §3–4 | Pre-Save only; New-record identity inferred from the one-row grid and `1 of 1` counter |
| AC-4 | **Supported (observed, UI and accessibility level; T3)** | `t3-02` (immediate), `t3-03` (settled accessibility), `t3-05` (settled visual); `evidence/EXP-060/T3-report.md` §2–3 | No native success or confirmation text; success inferred from disabled Save and cleared pending indicators; no database read |
| AC-5 | **Supported at the observed level (T3)** | `t3-03`, `t3-05`; report §4 | Ownership observed (Locked By = operator); checked-out status interpreted from enabled Check In and Undo Check Out (no labelled status) |
| AC-6 | **Supported (observed, UI level; T4)**: one clean close (no prompt; tab absent); one reopen via Open > Select Form; heading `Property Classes`; Save disabled; no dialog or challenge | `t4-01`, `t4-02`, `t4-04`; `t4-00`, `t4-03`, `t4-05`; `evidence/EXP-060/T4-report.md` §2–4 | Reopened view is blank Filter in Place; it does not establish persistence (AC-7 pending) |
| AC-7 | **Supported (observed, UI and accessibility level; T5)**: one Filter in Place query (`FX_Picture`); one matching record (`1 of 1`); recovered Binary, -1, varbinary, PNG and blank Base Class, Domain IDO Name, Domain Property, Domain List Properties and Label String ID match AC-3 field for field; Save disabled; Locked By operator (matches T3); Check In and Undo Check Out enabled | `t5-02`, `t5-03`, `t5-04`, `t5-05`; `evidence/EXP-060/T5-report.md` §4–5 | Same-session UI persistence; no database read; checked-out status interpreted from enabled controls (no labelled field) |
| AC-8 | **Supported with stated limits (T6)**: controller audits `harness-audit-T1`–`T5` show New 1, Save 1, pre-creation query 1, recovery query 1, close 1, reopen 1, F2 1; no checkout, unload, diagnostic, script or Designer action; no Write or Edit outside this record and `evidence/EXP-060/` | `evidence/EXP-060/T6-final-report.md` §2, §4, §7 | Confinement rests on audits and the worker inventory; no database read; git review reserved for the operator |
| AC-9 | **Documentation complete (T6)**; outcome classification observed only | `evidence/EXP-060/T6-final-report.md` (all sections) | Depends on AC-8 limits; no replay, durability, IDO-integration or PNG-runtime claim |

## Operation counts (T1 only; cumulative counts in `evidence/EXP-060/T6-final-report.md` §2)

| Operation | Count |
| --- | --- |
| **Pre-creation query (F4)** | **1** |
| **New** | **0** |
| **Save** | **0** |
| Form close / reopen | 0 / 0 (the single Property Classes open is the initial open, not a reopen) |
| Checkout, check-in, undo checkout | 0 |
| Browser diagnostics (console, network), JavaScript | 0 |
| Designer, unload, FormSync, cache, SQL | 0 |
| Dialogs answered | 0 |
| Ref-not-found errors / timeouts | 0 / 0 |

## Documentation changes (T1)

- `experiments/EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md`: created (this record).
- `evidence/EXP-060/T1-report.md`: created (action audit, evidence index, acceptance matrix, limits).
- `evidence/EXP-060/t1-01-webclient-initial-state.png`, `t1-02-property-classes-opened-via-select-form.png`, `t1-03-precreation-criteria-FX_Picture-before-query.png`, `t1-04-precreation-query-FX_Picture-settled.png`: created (screenshots).
- `evidence/EXP-060/t1-05-precreation-zero-result-accessibility.yml`: created (accessibility snapshot).
- No other repository file was written by the T1 worker. `tools/` was not read.

## Knowledge state

| Finding | State |
| --- | --- |
| Select Form route opens IDO Property Classes (`IdoPropertyClasses`) with no challenge, after a filter key refresh | **observed** (one run) |
| `FX_Picture` absent in the Property Classes exact-name Filter in Place query (zero data rows) | **observed** (one run; UI level) |
| Zero-row query leaves a blue-star add-mode placeholder with Save disabled | **observed** (one run; consistent with EXP-047-R2 and EXP-048) |
| Creation, field configuration, F2 varbinary selection, Save, checkout ownership, close/reopen, recovery | **not performed** (T2 onward) |
| Replay or procedure status | **not claimed** (not replay_verified) |

## Open questions and blockers

1. No next browser step remains in this experiment. T6 is the final audit; coordinator adjudication is pending (`evidence/EXP-060/T6-final-report.md` §10).
2. Case-insensitive coverage for `FX_Picture` is by inference only (same as EXP-048 and EXP-047-R2).
3. The inherited `Sql Tables` and `Sql Columns` tabs (from EXP-059) and the Designer tab are still present; the operator may decide their disposition. No action was taken.
4. **Checkout indicator (for AC-5):** in `t1-02` and `t1-04` the Check In and Undo Check Out buttons render light blue, while the accessibility tree reports them `[disabled]`. EXP-047-R2 described checked-out buttons as solid blue. The pre-creation state has no selected record, so this is not a checkout reading. AC-5 must rely on the accessibility state of the saved record, not the colour.
5. No blockers in T1.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-215916-hvC7: completed/accepted at cycle 6, no pauses). Observed only, not replay-verified.
- **Confinement** (operator git review): the only new paths are this record and `evidence/EXP-060/`. This is the first run under the new coordinator confinement rule, and it caused no pause.

Created, for later cleanup (**tenant-wide**, authorized by the AGENTS.md FX_ scope extension):
- **Property class `FX_Picture`:**
  - Data Type Binary, Length -1, Column Data Type varbinary (F2 lookup), Binary Format PNG.
  - Base Class, Description, Decimal Position, Default Value, Label String ID and the Domain fields are all blank.
  - Revision 1 (10/11/2026), **checked out to the operator** (Locked By the operator; Check In and Undo Check Out enabled and untouched).
- An exact pre-creation query proved it did not exist before.
- It went through one Save, then a close and reopen through Select Form, then one exact-name recovery query.
- **Not run:** the tutorial's "Unload All Global Form Objects" (operator decision).

Operator screenshot review:
- `t5-03`: after the reopen and the query FX_Picture, the Property Classes runtime has exactly one row, `FX_Picture` ("IDO Property Classes 1 of 1"). It shows Revision No 1, Locked By the operator, Base Class blank, `*Data Type` Binary, `*Length` -1, and Check In and Undo Check Out enabled.
- `t5-05`: the same record scrolled: `*Column Data Type` varbinary, `*Binary Format` PNG. Label String ID, Domain IDO Name, Domain Property and Domain List Properties are blank; Required and Read Only are unchecked.

Learned (observed):
1. **Binary property classes:** a Binary class shows a mandatory Binary Format field in its Formatting group (PNG offered). Like Data Type, Length and Column Data Type, it gets the local-value asterisk once set.
2. **Repeatable procedure:** the EXP-048 property-class procedure (New, fields, F2 lookup for Column Data Type, one Save, created checked out) carried over unchanged to a Binary class. This is the third independent execution of the procedure (EXP-047-R2, EXP-048, EXP-060), so it is a candidate recipe.

Limits:
- UI level only.
- No database read.
- FX_Picture is now the fifth FX_ class still checked out (FX_UMBase, FX_UM, FX_ItemBase, FX_Cost, FX_Picture).

Next: Part 4 section 3. Publish FX_Picture as a bound property of the FX_Items IDO, mapped to the column dbo.FX_Items.FX_Picture with property class FX_Picture. The FX_Items IDO is checked in (EXP-049), so this needs an IDO checkout. That is an IDO lifecycle action, which needs explicit authorization in the brief.
