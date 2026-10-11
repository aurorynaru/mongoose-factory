# EXP-051 — Hello World Part 2: FX_Items Domain Validation and Three Test Records

**Current status (after T9, cycle 9, final audit; documentation only): all twelve acceptance checks are supported at the same-session Web Client UI level; AC-11 reconciles; AC-12 is supported with the repository-audit limitation stated in the T9 section (no `git status` or diff could be run). The final accepted or blocked adjudication is left to the coordinator. Classification of every product finding: observed only, NOT replay_verified. Database persistence, validator implementation, and cross-session durability are NOT verified. Audit: `evidence/EXP-051/T9-final-audit.md`.**

Earlier status (after T8, cycle 8): AC-10 OBSERVED (same session, UI level). One final empty-criteria query (Filter in Place with blank criteria, then one F4) on the reopened FX_Items runtime returned exactly three loaded records: `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`. Status total `(Object 1 of 3)` after the query; no starred row; no placeholder; Save disabled; no dialog. These are records loaded by the same-session Web Client query, not an independent database read; database persistence and cross-session durability are NOT verified. AC-11 (audit) and AC-12 (confinement) and the completion decision remain for coordinator review. Classification: observed only; not replay_verified.**

Earlier status (after T7, cycle 7): AC-9 OBSERVED (same session, UI level). One ordinary FX_Items runtime Form-tab close (the tab's own control; no prompt) and one supported reopen (toolbar Open → Select Form row → OK). The reopened tab is FX_Items in the same DEM configuration and shows only the add-mode placeholder (`Item (Object 1 of 1)`, Save disabled); saved rows were not loaded. The final empty-criteria query (AC-10) is NOT yet run. Database persistence is NOT verified. Classification: observed only; not replay_verified.**

Earlier status (after T6, cycle 6): AC-8 OBSERVED (same session, UI level). One explicit toolbar Save of the three staged records returned without error; Save became disabled, the new-row stars cleared, no alert or prompt appeared, and the status read `Description (Object 3 of 3)`. Database persistence is NOT verified (no database read, no Refresh). The runtime close and reopen (AC-9) and the final empty-criteria query (AC-10) remain. Classification: observed only; not replay_verified.**

Earlier status (after T5, cycle 5): AC-7 PASS (observed, same session, UI level). One further toolbar New; three starred unsaved rows: dumbbell / 45 pound iron / 45.00 / EA, guitar / natural acoustic / 129.99 / EA, and eggs / cage free / 6.99 / DZ; status `Description (Object 3 of 3)`; Save enabled; no dialog. Database persistence is NOT verified (no Save, no database read). Stopped before any Save, Refresh, F4, close, reopen, or cleanup. The intended successful Save (AC-8), runtime close and reopen (AC-9), and final query (AC-10) remain. Classification: observed only; not replay_verified.**

Earlier status (after T4, cycle 4): AC-6 PASS (observed, same session, UI level). One toolbar New; two starred unsaved rows: row 1 dumbbell / 45 pound iron / 45.00 / EA and row 2 guitar / natural acoustic / 129.99 / EA; status `Description (Object 2 of 2)`; Save enabled; no dialog. Database persistence is NOT verified (no database read; no Save). Stopped before eggs, a second New, any Save, query, close, reopen, or cleanup. Classification: observed only; not replay_verified.**

Earlier status (after T3, cycle 2): AC-5 PASS (observed, same session). The BX alert was dismissed once; the dumbbell draft was corrected to EA through the native dropdown; FX_Item, FX_Description, and FX_Cost were retained. The draft is dirty and unsaved. Stopped before guitar, eggs, any further Save, close, reopen, or cleanup. Classification: observed only; not replay_verified.**

Earlier status (after T2, cycle 1): INVALID-UNIT SAVE REJECTED (observed); STOPPED AFTER ONE SAVE, ALERT LEFT OPEN. T2 entered one draft `dumbbell / 45 pound iron / 45.00 / BX` and invoked one toolbar Save. The native response was the alert `BX is not a valid Unit of Measure`. Save stayed enabled and the row stayed starred; no second row appeared. The alert was not dismissed. No EA correction, guitar, eggs, further Save, close, reopen, or cleanup was performed. No database read was made, so no row is confirmed absent or present. Classification: observed only; not replay_verified. Not yet established: the BX rejection's validator source and the persisted state. Remaining work (EA correction, guitar, eggs, one successful Save, close and reopen, final query) needs coordinator authorization.

Earlier status (after T1, cycle 0): PREFLIGHT AND GATES PASSED; NO DATA ENTERED; STOPPED BEFORE MUTATION. The empty-collection gate and the FX_UM list baseline both passed (observed, single session).

## Run identity and provenance

- Run `R-20261011-114105-Dh5t`, cycle 0, task T1. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b76c00`, task_message_id `08c63922-4b16-472b-9eb1-f803835aba13`.
- Date 2026-10-11. Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (FX_Items Form). The IDO, SQL table, property classes, and FX_UMs are tenant-wide and were not changed.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; identity `anton.ramos@3mworks.com.ph` (identity bar; not a credential).
- Prerequisites: EXP-050 (accepted with limits; FX_Items Classic Multi-View Form, captions FX_sItem / FX_sCost, FX_UM as ComboBox, Cost default `0.00` in add mode). EXP-049 (FX_Items IDO and SQL table). EXP-046 and EXP-042-R3 (empty-criteria gate and count rule). Hello World Part 2 transcript sections 8–9 (`docs/mongoose/transcripts/hello-world-pt2.md`).
- Evidence directory `evidence/EXP-051/`. The `tools/` directory was not read.

## Planned scope (from the brief)

Objective: establish a zero-record FX_Items collection and the FX_UM list baseline; then, in later authorized tasks, enter dumbbell / 45 pound iron / 45.00 with the invalid unit BX, attempt exactly one Save, correct to EA only if rejected, add guitar / natural acoustic / 129.99 / EA and eggs / cage free / 6.99 / DZ one at a time, perform one successful explicit Save, close and reopen once, and verify three rows with one empty-criteria query.

Out of scope (unchanged): Form, Designer, caption, IDO, property class, domain, SQL, FX_UMs, cleanup, check-in or check-out, FormSync, metadata unload, a fourth item, extra invalid-value tests, and any non-FX_ artifact.

## Acceptance checks — status after T1

| AC | Status after T1 | Basis | Limit |
| --- | --- | --- | --- |
| AC-1 Preflight | PASS (limited) | `t1-01`; Web Client identity bar; FX_Items tab; no dialog or banner; Designer status `User / anton.ramos@3mworks.com.ph` (first snapshot) | Form identity cited from EXP-050, not re-read in the Designer; Designer's pre-existing in-page scope dialog left open (see Open items) |
| AC-2 Empty-collection gate | **PASS** | `t1-02`: one FiP + one F4 with empty criteria (criteria read in the FiP snapshot); one starred row; Item / Description / Unit of Measure blank; Cost `0.00` default excluded; status `Item (Object 1 of 1)` (caption prefix expected) | UI observation, not a database read; FiP-mode criteria in snapshot only |
| AC-3 FX_UM list baseline | **PASS for rows; headings not exposed** | `t1-03` (open) and `t1-04` (after Escape): `DZ` / `Dozen`, `EA` / `Each`; no selection; input blank; Save disabled | Column headings not visible or exposed; description-column identity inferred from two-cell rows and EXP-050 IDO baseline (`FX_UMs / FX_UM / FX_Description`) |
| AC-4 to AC-12 | **Not performed** (T1 stop) | — | — |

## T1 — Preflight, empty gate, and FX_UM baseline (cycle 0)

Full report: `evidence/EXP-051/T1-preflight-empty-gate-and-domain-list-report.md`.

Actions (in order):
1. Read AGENTS.md, EXP-050 (accepted), EXP-042-R3 and EXP-046 (emptiness procedures), and transcript Part 2 sections 8–9.
2. Browser tab list; first snapshot of Designer (tab 0): User scope, pre-existing in-page scope dialog; no action.
3. Selected tab 1 (Web Client); snapshot and screenshot `t1-01`: FX_Items runtime, DEM identity, one starred blank row, Cost `0.00`, Save disabled, status `Item (Object 1 of 1)`.
4. Toolbar Filter in Place (one click); Filter-in-Place criteria blank (snapshot).
5. One F4: Filter-in-Place exited; settled state `t1-02`: one starred placeholder, blank inputs, `Item (Object 1 of 1)`, Save disabled.
6. Toolbar combobox Open (one click, read-only): two rows `DZ | Dozen`, `EA | Each` (`t1-03`).
7. One Escape: list closed; no selection; `t1-04`.

Counts: browser clicks 2 (FiP, combobox Open); key presses 2 (F4, Escape); tab select 1; Save 0; New 0; Refresh 0; Delete 0; typing or fills 0; option selections 0; close or reopen 0; Designer edits 0; prompts answered 0; ref errors or timeouts 0; screenshots 4; snapshots 7.

Interpretation (not proven by T1): the empty result is the Web Client's view of the FX_Items collection under the accepted count rule. It is not a database read. Whether the F4 executed a fresh unfiltered query is inferred from the criteria being blank in Filter-in-Place mode, the mode exit, and the settled placeholder (the same inference EXP-046 T2 recorded).

## Operator clarifications applied (from the brief)

- The status-bar caption prefix (for example `Item (Object 1 of 1)`, `Unit of Measure (Object 1 of 1)`) is expected and does not affect the gate. The count token in parentheses is what must match.
- The add-mode Cost default `0.00` is not a non-blank input for the gate.

## Records

- **Records observed in FX_Items:** none (placeholder only). No existing FX_Items record was loaded or found.
- **Records created, edited, or deleted in T1:** none.
- **FX_UMs rows:** not read in T1; not changed.
- **Objects created in Mongoose:** none.

## Open items and blockers

1. **T2 authorization needed.** Data entry (dumbbell with BX; one Save) requires coordinator authorization. T1 has not entered anything.
2. **Designer in-page dialog.** The Designer tab (tab 0) shows an open `Identify Your Editing Scope` dialog (User; anton.ramos@3mworks.com.ph). It was already open at the start of T1 and was not touched. Decide whether to dismiss it before the next task.
3. **FX_UM column headings.** Not exposed in the list; the description-column identity is an inference. An operator screenshot review may confirm it.
4. **Filter-in-Place criteria** were checked in the snapshot only; no screenshot captured in that mode.

## Repository changes (T1)

- Written: `experiments/EXP-051-hello-world-part-2-fx-items-domain-validation-and-.md` (this record).
- Written: `evidence/EXP-051/t1-01-webclient-preflight-initial-state.png`, `evidence/EXP-051/t1-02-empty-gate-after-one-FiP-F4-empty-criteria.png`, `evidence/EXP-051/t1-03-FX_UM-combobox-list-open-readonly.png`, `evidence/EXP-051/t1-04-FX_UM-list-dismissed-no-value-selected.png`, `evidence/EXP-051/preflight-tab-list-snapshot.md`, `evidence/EXP-051/T1-preflight-empty-gate-and-domain-list-report.md`.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console files written by the browser tool during T1.
- Not written: any other repository file. No `tools/`, AGENTS.md, IDO, SQL, property class, FX_UMs, string, Form, recipe, or memory file was edited.

## Knowledge state

| Finding | State |
| --- | --- |
| Web Client FX_Items runtime open under DEM identity (User-scoped Form per EXP-050) | observed (`t1-01`) |
| One FiP + F4 with blank criteria gives one starred placeholder, blank inputs, `(Object 1 of 1)` | observed (`t1-02`), single run |
| FX_UM list rows `DZ` / `Dozen` and `EA` / `Each` | observed (`t1-03`), single run |
| FX_UM list column headings | unresolved |
| Zero FX_Items records in the whole collection | observed under the count rule; not database-verified |
| Invalid-unit validation (BX rejection) | **not tested** (T2 not authorized) |
| Replay | not claimed |

## T2 — Dumbbell draft with invalid unit BX; one toolbar Save (cycle 1)

Full report: `evidence/EXP-051/T2-invalid-bx-save-report.md`. Accessibility excerpts: `evidence/EXP-051/t2-accessibility-excerpts.md`. Task message `3601117c-5cd1-4d55-88c4-5ef4a06c7dd5`, worker session `04dd92c6-18cf-45b0-9833-5f76e6b76c00`.

- **Baseline (fresh snapshot; Web Client tab selected):** one starred placeholder, Item / Description / Unit of Measure blank, Cost `0.00`, Save disabled, status `Unit of Measure (Object 1 of 1)`, no dialog (`t2-01`). Consistent with T1. The empty-criteria query was not repeated, as instructed.
- **Draft:** FX_Item `dumbbell`, FX_Description `45 pound iron`, FX_Cost `45.00` (replaced the `0.00` default), FX_UM `BX` typed into the combobox. The combobox accepted `BX` as entered text. The grid's Unit of Measure cell stayed empty (not committed) before Save. All four values are visible in one draft (`t2-02`).
- **One Save (toolbar `Save`, label verified, no retry):** native alert `alertdialog` `Infor Mongoose Application Development Framework - FX_Items`, text **`BX is not a valid Unit of Measure`**, button `OK` focused. The alert is still open; not dismissed (`t2-03`). Save remains enabled; the placeholder row remains starred; one grid row; inputs unchanged; status `Unit of Measure (Object 1 of 1)`.
- **Counts:** Save clicks 1; Save retries 0; BX entries 1; EA corrections 0; guitar or eggs 0; dialogs dismissed 0; close or reopen 0; Refresh, New, Delete, FiP, or F4 0; Designer edits 0. Browser snapshots 5, find 2, screenshots 3, field fills 4, tab selects 1, tab list 1. Ref-not-found 0; timeouts 0.
- **Acceptance (T2 scope):** AC-4 PASS for the rejection evidence (draft verified before Save; native message and state after Save). AC-1, AC-2, AC-3 carried from T1. AC-5 to AC-12 not performed.
- **Limits:** UI evidence in one session. The message's source (domain check or other) is not established. Whether the Save's implicit commit touched the database is unknown; no read was made. Any persisted row would need separately authorized cleanup. The Designer's in-page scope dialog was not touched.
- **Classification:** observed only; not replay_verified.

## T3 — Alert dismissed; FX_UM corrected BX → EA through the ComboBox (cycle 2)

Full report: `evidence/EXP-051/T3-correct-bx-to-ea-report.md`. Accessibility excerpts: `evidence/EXP-051/t3-accessibility-excerpts.md`. Task message `0d073bae-979b-402e-9d6c-6e66ba96d6d2`, worker session `04dd92c6-18cf-45b0-9833-5f76e6b76c00`.

- **Pre-action check (fresh Web Client snapshot):** alert still `BX is not a valid Unit of Measure`; draft `dumbbell / 45 pound iron / 45.00 / BX` retained; Save enabled; no other dialog (`t3-01`). The Designer tab was not acted on; one read-only find ran while the Designer was current and found nothing.
- **Alert dismissal:** OK clicked once. The alert closed; the draft stayed (`t3-03`).
- **Correction:** combobox Open, then the native `EA | Each` option clicked (no typing). The combobox showed `EA`; the grid's Unit of Measure cell for the dumbbell row read `EA` (accessibility). The dropdown was closed with the Open toggle, not Escape (`t3-02`, `t3-03`).
- **Retained values:** FX_Item `dumbbell`, FX_Description `45 pound iron`, FX_Cost `45.00`; FX_UM `EA` (`t3-03`).
- **State after T3:** status `Unit of Measure (Object 1 of 1)`; one starred row; Save enabled (dirty, not saved); no dialog, prompt, or banner.
- **Commit caveat:** the grid cell shows `EA`, but the combobox editor remains focused. No focus move or Save was used to confirm a commit. Whether the value is committed or only mirrored in the editor is not established. A Save would establish it; Save was not authorized in T3.
- **Counts:** alert OK 1; Save 0; Escape 0; typed text 0; combobox Open 2; option selection 1; guitar or eggs 0; close or reopen 0; New, Delete, Refresh, FiP, F4 0; repeated empty-criteria query 0; Designer edits 0. Web Client snapshots 5; finds 2; screenshots 3 (`t3-01` to `t3-03`). Ref-not-found 0; timeouts 0.
- **Acceptance (T3 scope):** AC-5 PASS (observed, same session): dismissal once; EA via ComboBox; FX_Item, FX_Description, FX_Cost retained; no second invalid-code Save. AC-6 to AC-12 not performed.
- **Limits:** same-session UI; no database read; the T2 Save's effect on the database remains unknown; commit established by the grid cell only.
- **Classification:** observed only; not replay_verified.

## T4 — Two-row unsaved staging; guitar draft entered and verified (AC-6) (cycle 4)

Full report: `evidence/EXP-051/T4-guitar-draft-and-two-unsaved-rows-report.md`. Task message `557c58d7-4e1d-4c75-ad50-1bcbcf828bd3`, worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`.

- **Preflight (fresh Web Client snapshot; Designer not touched):** row 1 `dumbbell / 45 pound iron / 45.00 / EA`, starred; Save enabled; status `Unit of Measure (Object 1 of 1)`; no dialog (`t4-01`). One ordinary focus move (click Description) settled the combobox editor; values intact, Save enabled, no prompt (status `Description (Object 1 of 1)`).
- **One New:** clicked once. Immediately captured: two starred rows (row 1 unchanged; row 2 blank and current with only Cost `0.00`); status `Item (Object 2 of 2)`; Save enabled; no dialog (`t4-02`). Gate passed.
- **Guitar draft:** FX_Item `guitar`, FX_Description `natural acoustic`, FX_Cost `129.99` (each filled and found in the grid row), FX_UM `EA` selected from the native dropdown (`EA | Each` option, not typed). The first toggle reopened the list after the selection had closed it; a second toggle closed it. No Escape (`t4-03`, `t4-04`).
- **Final verification:** two starred unsaved rows; row 2 `guitar / natural acoustic / 129.99 / EA` (accessibility, full text); row 1 unchanged; status `Description (Object 2 of 2)` after one ordinary focus move into Description with its text selected; Save enabled; no dialog (`t4-05`).
- **Counts:** New 1; Save 0; queries 0; fills 3; combobox option selection 1; typed text into the combobox 0; Escape 0; combobox Open clicks 3; focus-move clicks 2; browser clicks total 7; tab selects 2 (one `Tab 1 not found` error, not a ref failure, recovered by a tab list and a second select); snapshots 7 (+1 Designer read-only); screenshots 5; finds 4; close or reopen 0; Designer edits 0; eggs 0; dialogs answered 0; ref-not-found 0; timeouts 0.
- **Acceptance (T4 scope):** AC-6 PASS (observed, same session): the guitar draft's four values were visible in the same draft before any submission, with the starred state and count recorded. AC-7 to AC-12 not performed.
- **Persistence:** NOT verified. Both rows are unsaved UI state; no database read.
- **Limits:** star read from screenshots only; row 1 clipped in screenshots (accessibility text used); the EA commit is evidenced by the grid cell, not by a Save.
- **Classification:** observed only; not replay_verified.

## T5 — Eggs staged as the third pending row; no Save (AC-7) (cycle 5)

Full report: `evidence/EXP-051/T5-eggs-staged-three-pending-rows-report.md`. Task message `15008caa-1dd2-4359-8f35-73e842c5ebbb`, worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`.

- **Preflight:** tabs listed first; Web Client selected; fresh snapshot: two starred rows with the exact values, Description `[active]` with `natural acoustic`, status `Description (Object 2 of 2)`, Save enabled, no dialog (`t5-01`). Gate passed.
- **One New:** clicked once. Immediately captured (snapshot and `t5-02`): three starred rows; rows 1 and 2 unchanged; row 3 blank with only Cost `0.00`; status `Item (Object 3 of 3)`; Save enabled; no dialog. Gate passed.
- **Eggs draft:** FX_Item `eggs`, FX_Description `cage free`, FX_Cost `6.99` (typed; not the spoken `699`), FX_UM `DZ` selected from the native dropdown (`DZ | Dozen`; not typed). The list closed on selection; no toggle was needed. One ordinary focus move into Description to settle the combobox; no Save (`t5-03`).
- **Final verification:** three starred unsaved rows: row 1 `dumbbell / 45 pound iron / 45.00 / EA`; row 2 `guitar / natural acoustic / 129.99 / EA`; row 3 `eggs / cage free / 6.99 / DZ` (accessibility). Status `Description (Object 3 of 3)`; Save enabled; no dialog.
- **Cumulative reconciliation after T5:** invalid BX Save attempts 1 (T2); toolbar New 2 (T4, T5); intended successful Saves 0; runtime closes 0; runtime reopens 0; final empty-criteria queries 0; staged unsaved records 3 (dumbbell EA, guitar EA, eggs DZ); alert dismissals 1 (T3).
- **Counts (T5):** New 1; Save 0; fills 3; combobox option selection 1; combobox Open clicks 1; focus-move clicks 1; browser clicks 4; tab list 1; tab select 1; snapshots 5; screenshots 3; finds 3; Refresh, F4, FiP, Delete, Get More Rows 0; close or reopen 0; Designer edits 0; Designer dialog touched 0; dialogs answered 0; ref-not-found 0; timeouts 0; fourth row 0.
- **Acceptance (T5 scope):** AC-7 PASS (observed, same session): the eggs draft's four values were visible in the same draft before submission, and the three-row state was captured. AC-8 to AC-12 not performed.
- **Persistence:** NOT verified. All three rows are unsaved UI state. No database read; the T2 BX Save's database effect remains unknown.
- **Classification:** observed only; not replay_verified.

## T9 — Final acceptance matrix, reconciliation, and confinement audit (documentation only; cycle 9)

Full audit: `evidence/EXP-051/T9-final-audit.md`. Sources: this record, the T1–T8 reports and excerpts, the controller audits `evidence/EXP-051/harness-audit-T1.md` to `T8.md`, and a Glob inventory. No browser call, Form change, mutation, query, Save, close, reopen, or authentication was performed in T9. `tools/` was not read.

### Acceptance matrix (evidence-backed; no check FAILED)

| AC | Status | Key evidence (repo-relative) | Principal limitation |
| --- | --- | --- | --- |
| AC-1 Preflight | Supported with limits | `t1-01`, `t2-01`, `t8-01`; Designer scope text in `preflight-tab-list-snapshot.md` | Form version cited from EXP-050; Designer inherited dialog present before T1 |
| AC-2 Empty gate | Supported with limits | `t1-02` (one starred row; `Item (Object 1 of 1)`); `t2-01` | Blank criteria from FiP snapshot; UI only |
| AC-3 FX_UM list | Supported with limits | `t1-03` (`DZ \| Dozen`, `EA \| Each`); `t1-04` (dismissed, no selection) | Headings not exposed; FX_Description inferred from EXP-050; list opened 7 times (6 later for authorized selections) |
| AC-4 BX rejection | Supported with limits | `t2-02` (draft); `t2-03` (alert `BX is not a valid Unit of Measure`); T2 audit #17 | Validator source not established; BX persistence not read from a database |
| AC-5 EA correction | Supported with limits | `t3-01`, `t3-02`, `t3-03`; T3 audit #6, #10 | Commit evidenced by grid cell, not Save |
| AC-6 Guitar | Supported with limits | `t4-01`, `t4-02`, `t4-04`, `t4-05` | Stars from screenshots; row 1 clipped; two EA opens to settle |
| AC-7 Eggs | Supported with limits | `t5-01`, `t5-02`, `t5-03` | Rows 1–2 clipped; DZ commit from grid cell |
| AC-8 Save | Supported with limits | `t6-01`, `t6-02`, `t6-03`; T6 audit #6 | No success message in this UI; clean state inferred; no DB read |
| AC-9 Close and reopen | Supported with limits | `t7-01`, `t7-02`, `t7-03`; T7 audit #6, #10, #12, #14 | Same-session; reopen showed placeholder only |
| AC-10 Final query | Supported with limits | `t8-03`, `t8-04`; accessibility excerpt D (row 2, no image) | Query-loaded, same session; row 2 accessibility-only; not a database read |
| AC-11 Audit | Supported | Section below; T1–T8 audits | Tool-call counts, not rendered-state proof |
| AC-12 Confinement | Supported with limits | Section below; `T9-final-audit.md` §4–5 | Repository baseline not establishable (`.git` denied; Bash disabled) |

### Cumulative counts (controller audits reconciled)

- Initial empty-criteria query (T1): FiP 1, F4 1, separate from the final query.
- Invalid BX Save (T2): **1** (audit #17). Two `Edit` header errors on the T2 report were corrected in-session (disclosed).
- BX alert dismissal (T3): **1** (OK).
- Toolbar New (T4, T5): **2**.
- Intended successful toolbar Save (T6): **1**. **Total explicit Save clicks: 2** (no other Save in any audit).
- Runtime Form-tab close (T7): **1**. Runtime reopen (T7): **1** (Open, row activation, OK).
- Final empty-criteria query (T8): **1** (FiP #6, F4 #9).
- Refresh: 0. Delete: 0. Fourth item: 0. Designer action after T1: 0. Authentication or check-in or check-out: 0.
- Combobox Open clicks (all tasks): 7 (T1 1; T3 2; T4 3; T5 1). Option selections: 3 (EA T3; EA T4; DZ T5). Escape: 1 (T1, read-only baseline).
- Field fills: 10 (T2 4; T4 3; T5 3), all item codes dumbbell, guitar, or eggs; BX entered once.
- Tab-select error: 1 (T4, `Tab 1 not found`, recovered with a tab list and a successful select).
- Timeouts, ref-not-found, unexpected prompts, implicit commits observed as separate events: 0.

### Snapshot count corrections (earlier reports not edited)

- T3: report said 5 Web Client snapshots; audit shows 4.
- T4: report said 7 Web Client plus 1 Designer; audit shows 6 Web Client plus 1 Designer.

### Final query order and content (observed; not explained)

- The T8 query returned exactly three keys in the order dumbbell, eggs, guitar. Insertion order was dumbbell, guitar, eggs. The cause is not inferred.
- No BX row appeared in the final query. This is query-level, same-session evidence consistent with no persisted BX row. It is not proof of absence in the database.

### Preservation and repository confinement (AC-12)

- Action evidence shows no intentional change to FX_UMs records, IDO definitions, SQL structures, property classes, caption strings, vendor Forms, source control, or authentication. This is the action audit, not an independent backend read.
- Repository baseline: cannot be established. Bash is disabled; `.git` is access-denied. No `git status` or diff was run.
- Worker-authored files this run: this record (edited in T1–T9) plus 42 files under `evidence/EXP-051/` (28 PNG; 14 Markdown including `T9-final-audit.md`).
- Tool-generated files inside `evidence/EXP-051/`: `preflight-tab-list-snapshot.md` (browser snapshot tool) and 8 controller audits `harness-audit-T1.md` to `T8.md`.
- Tool-generated files outside `evidence/EXP-051/`: 35 files `evidence/playwright/*2026-10-11T03-41` to `03-59` (snapshot and console logs written by the browser tool).
- Unrelated pre-existing changes (session-start status, not re-verified now; not attributed to EXP-051; not changed): `tools/learning-harness/README.md`, `briefs/EXP-035.brief.json`, `harness.config.example.json`, `src/shadow/cli.ts`, `src/shadow/runner.ts`, `test/shadow.test.ts`.

### Unresolved limitations and open items for the coordinator

1. Accepted or blocked adjudication: coordinator.
2. Database state of the three valid records, and whether the rejected BX Save wrote a row: unresolved. A database read needs separate authorization.
3. Validator implementation (domain versus other) behind the BX message: unresolved.
4. Cleanup of the three valid records and of any BX row: not performed; needs separate authorization.
5. The Designer's `Identify Your Editing Scope` dialog was open before T1 and remains open; not touched by EXP-051. Coordinator decision.
6. Row 2 (eggs) verification in T8 is accessibility-only, with no dedicated screenshot. Retained limitation.
7. Cross-session persistence, database-level durability, and replay verification: not claimed.

### Knowledge state (T9)

| Finding | State |
| --- | --- |
| Invalid unit `BX` on Save shows the native alert `BX is not a valid Unit of Measure`; Save stays enabled | observed (single run) |
| Domain list shows `DZ \| Dozen` and `EA \| Each` (headings not exposed) | observed (single run) |
| Three valid records entered, saved (one explicit Save), closed, reopened, and loaded by one query (`dumbbell`, `eggs`, `guitar`) | observed, same session; not replay_verified |
| Database persistence of the three records; BX row persistence | unresolved |
| Validator implementation | unresolved |
| Replay | not claimed |

## T8 — Final empty-criteria query and three-record verification (AC-10) (cycle 8)

Full report: `evidence/EXP-051/T8-final-query-three-record-verification-report.md`. Accessibility excerpts: `evidence/EXP-051/t8-accessibility-excerpts.md`. Task message `1ba589ff-b9d5-42d3-8fe3-a9fba7158b2e`, worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`.

- **Pre-query baseline (fresh read-only):** Web Client selected; FX_Items reopened; one starred add-mode placeholder; Item and Description blank; Cost `0.00`; UM blank; `Item (Object 1 of 1)`; Save disabled; no dialog (`t8-01`). Gate passed.
- **Filter in Place (one click):** all four criteria inputs confirmed blank (accessibility and `t8-02`).
- **One F4:** FiP exited; grid populated with three unstarred rows; status `Description (Object 1 of 3)`; Save disabled; no dialog (`t8-03`). No second F4; no Refresh.
- **Row-by-row (read-only record selection via row headers):** row 1 `dumbbell / 45 pound iron / 45.00 / EA` (after F4; inputs); row 2 `eggs / cage free / 6.99 / DZ` (`(Object 2 of 3)`); row 3 `guitar / natural acoustic / 129.99 / EA` (`(Object 3 of 3)`, `t8-04`). Each row's grid values also matched in the accessibility tree.
- **Row order:** dumbbell, eggs, guitar. Insertion order was dumbbell, guitar, eggs. Cause not established.
- **Counts (T8):** FiP 1; F4 1 (the one final query); row-header selections 2; tab list 1; tab select 1; Web Client snapshots 5; screenshots 4 (`t8-01` to `t8-04`); Save 0; New 0; Refresh 0; Delete 0; close or reopen 0; typed text 0; data edits 0; Designer edits 0; dialogs answered 0; ref-not-found 0; timeouts 0.
- **Cumulative reconciliation:** rejected BX Save 1 (T2); intended successful Save 1 (T6; two explicit Saves in total); toolbar New 2 (T4, T5); runtime close 1 and reopen 1 (T7); final empty-criteria query 1 (T8).
- **Acceptance (T8 scope):** AC-10 observed (same session, UI level): exactly three loaded rows; no extra row; each row's four values match; native count captured. AC-11 and AC-12 are left for the coordinator audit.
- **Distinction:** these rows are query-loaded in the same Web Client session. This is not an independent database read, not cross-session persistence, and not database-level durability. The T2 BX Save's database effect is still unknown; it is not resolved by this query.
- **Classification:** observed only; not replay_verified.

## T7 — One runtime close and one reopen of FX_Items (AC-9) (cycle 7)

Full report: `evidence/EXP-051/T7-close-and-reopen-report.md`. Accessibility excerpts: `evidence/EXP-051/t7-accessibility-excerpts.md`. Task message `9419f654-e2c6-4f64-9b48-fcc3d5082ba2`, worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`.

- **Pre-close gate:** tab list; Web Client selected; FX_Items runtime with three rows, count `Description (Object 3 of 3)`, Save disabled, no star, no dialog (`t7-01`). Gate passed.
- **Close (once):** the FX_Items tab's own `Close Panel FX_Items` control (`f1e101`). The tab was removed from the tablist; Form toolbar disabled; no prompt, dialog, or authentication challenge (`t7-02`).
- **Reopen (once):** toolbar Open (`f1e25`) → Select Form (one row FX_Items / FX_Items; Name cell activated) → OK. Reopened tab `FX_Items` (same Caption/Name identity, DEM configuration). Immediate state: one starred add-mode placeholder, blank Item and Description, Cost `0.00`, status `Item (Object 1 of 1)`, Save disabled, **no saved rows loaded** (`t7-03`).
- **Procedure:** the path matches EXP-050 T8 and EXP-042-R3 cycle 11 as recorded there. The Form-menu recent-forms entry was not used. The Designer's scope dialog was not touched.
- **Counts:** close 1; reopen 1 (Open 1, row activation 1, OK 1); Save 0; New 0; Refresh, F4, FiP, Get More Rows 0; final empty-criteria query 0; typed text 0; dropdown actions 0; Designer edits 0; dialogs answered 0; ref-not-found 0; timeouts 0; tab list 1; tab select 1; Web Client snapshots 5; screenshots 3; finds 0.
- **Cumulative reconciliation:** BX rejected Save 1 (T2); intended successful Save 1 (T6; two explicit Saves in total with T2); toolbar New 2 (T4, T5); runtime close 1 (T7); runtime reopen 1 (T7); final empty-criteria query 0 (pending AC-10); alert dismissals 1 (T3).
- **Acceptance (T7 scope):** AC-9 observed (same session): one ordinary clean close removed FX_Items from the tab list; one supported reopen; same Form identity; no unexpected prompt or challenge. Reopen opened in add mode with the placeholder only, so the reopened state is not yet evidence of the three persisted records. AC-10 to AC-12 not performed in T7.
- **Distinction:** this is same-session Web Client recovery, not database-level durability or cross-session persistence. The three rows' persistence is to be checked by the AC-10 query.
- **Classification:** observed only; not replay_verified.

## T6 — One intended successful toolbar Save (AC-8) (cycle 6)

Full report: `evidence/EXP-051/T6-successful-save-report.md`. Accessibility excerpts: `evidence/EXP-051/t6-accessibility-excerpts.md`. Task message `f6a69a0c-ba34-43a1-b718-78a58375d96a`, worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`.

- **Pre-Save gate (read-only):** tabs listed; Web Client selected; three starred pending rows with the authorized values (row 1 `dumbbell / 45 pound iron / 45.00 / EA`; row 2 `guitar / natural acoustic / 129.99 / EA`; row 3 `eggs / cage free / 6.99 / DZ`); count `Description (Object 3 of 3)`; Save enabled; dropdown closed; no dialog (`t6-01`). Gate passed.
- **The Save:** toolbar Save clicked once (`f1e28`). No retry.
- **Immediate result (`t6-02`):** no error and no alert in the tree or screenshot. Save disabled. Stars cleared on all three rows (plain numbers 1–3). Grid header `Item` (asterisk gone). Item key input greyed. Values unchanged. Toolbar System Notes, Documents, and Send email became enabled. Status `Description (Object 3 of 3)`. No success toast displayed.
- **Settled (3 s, no action; `t6-03`):** unchanged; no alert (`find` "alert" → no matches).
- **Interpretation:** clean Form state consistent with an accepted save. Not database evidence. The post-Save count `(Object 3 of 3)` is read before any Refresh; EXP-042-R3 showed that post-Save and post-Refresh counts can differ, so the count after the reopen query is the check still to be made.
- **Counts:** intended Save 1; Save retries 0; New, Refresh, FiP, F4, Delete, Get More Rows 0; close or reopen 0; typed text 0; dropdown opens or selections 0; Escape 0; Designer edits 0; dialogs answered 0; ref-not-found 0; timeouts 0; tab list 1; tab select 1; Web Client snapshots 3; screenshots 3; finds 1; waits 1.
- **Cumulative reconciliation:** explicit Saves in total 2 (T2 BX rejected attempt; T6 intended success); intended successful Saves 1; toolbar New 2 (T4, T5); runtime closes 0; reopens 0; final empty-criteria queries 0; records in the clean state 3 (dumbbell EA, guitar EA, eggs DZ); alert dismissals 1 (T3).
- **Acceptance (T6 scope):** AC-8 observed (same session): one explicit Save, native result captured (no error, clean state, stars cleared, Save disabled). Implicit commits: none observed as separate events. AC-9 to AC-12 not performed.
- **Limits:** same-session UI; the Save outcome is inferred from the UI state, not from a success message (none is displayed); no database read; the T2 BX Save's database effect is unknown.
- **Classification:** observed only; not replay_verified.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-114105-Dh5t, completed/accepted in cycle 10). Observed only, not replay-verified. **This completes Hello World Part 2.**

Created, for later cleanup — rows in the factory-owned table `dbo.FX_Items`:

| Item | Description | Cost | UM |
|---|---|---|---|
| dumbbell | 45 pound iron | 45.00 | EA |
| guitar | natural acoustic | 129.99 | EA |
| eggs | cage free | 6.99 | DZ |

The eggs cost 6.99 was fixed by the operator; the transcript speaks it as "699". The rows were saved by one successful toolbar Save (T6) after one rejected Save (T2), and recovered after a runtime close/reopen and one empty-criteria query (T7–T8).

Operator screenshot review:
- `t1-03`: the FX_UM combo box list, open, shows exactly two rows, `DZ  Dozen` and `EA  Each`. These are the code and the FX_Description list column from the FX_UMs domain.
- `t2-03`: after one Save with FX_UM = BX, a Mongoose dialog reads "BX is not a valid Unit of Measure" (OK only). The draft row stays starred and unsaved.
- `t8-03`: after the reopen and query, three rows (dumbbell, eggs, guitar, in key order). dumbbell shows 45 pound iron / 45.00 / EA with the Item key greyed. Status "Description (Object 1 of 3)".

Operator decision during the run:
1. **Approved worker denial (T9):** one expected permission denial, a read of `.git/HEAD`, which is denied by design.

Learned (observed):
1. **Domain list:** a property class domain (Domain IDO FX_UMs, Domain Property FX_UM, Domain List Properties FX_Description) gives a runtime combo box listing the domain IDO's rows, code plus description, in key order.
2. **Domain validation on Save:** a value outside the domain is rejected at Save with "<value> is not a valid <property caption>" (here "BX is not a valid Unit of Measure"). The caption comes from the string resource (FX_sUM). Nothing is saved, and the draft row stays pending and correctable.
3. **Free typing allowed:** the combo box accepts typed values outside its list. Validation happens on Save, not on entry.
4. **Recovery after rejection:** after a rejected Save, correcting the value and adding more rows lets one later Save commit all rows together. Rows are listed by key after the reopen.
5. **Count rule confirmed:** the count rule held for a third Form. Status "(Object 3 of 3)" after the Save matched the three persisted rows.

Limits:
- Only the same session, at the UI level.
- No database read.
- The validator mechanism (where in the stack the check runs) is not established.

Part 2 cleanup inventory, tenant-wide unless noted:
- tables `dbo.FX_UMs` (EA, DZ rows) and `dbo.FX_Items` (3 rows);
- IDOs `FX_UMs` and `FX_Items`;
- property classes `FX_UMBase`, `FX_UM`, `FX_ItemBase`, `FX_Cost` (all still checked out to the operator);
- strings `FX_sUM`, `FX_sDescription`, `FX_sItem`, `FX_sCost`;
- User-scope Forms `FX_UMs` and `FX_Items`.
