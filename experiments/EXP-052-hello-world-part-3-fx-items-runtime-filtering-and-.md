# EXP-052 — Hello World Part 3: FX_Items Runtime Filtering and Initial Refresh

**Final status (after T10, cycle 9, documentation and AC-10 to AC-12 audit): EXP-052 is complete at the same-session UI-observation level. AC-1 to AC-12 are supported with limits and no check failed. Observed only; not replay_verified; no cross-session, database-durability, or replay claim. Accepted-with-limits at this level is recommended, subject to coordinator adjudication (see the T10 section).**

Superseded status (after T9, cycle 8, final runtime opening): AC-9 SUPPORTED WITH LIMITS. One native Open > Select Form > OK on the closed FX_Items runtime showed three unstarred saved records immediately on opening (`dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`), with status `Description (Object 1 of 3)` and Save disabled; the settled state (3 s, no action) is unchanged. No Refresh, F4, Filter-in-Place, Get More Rows, or other collection load followed the opening. Contrast: the T3 baseline opening (Initial Command blank) showed no saved rows. Same-session UI evidence only. AC-10 to AC-12 were not performed in T9. Report: `evidence/EXP-052/T9-final-runtime-open-automatic-load-report.md`.

Earlier status (after T8, cycle 7, Designer close and one reopen): AC-8 SUPPORTED WITH LIMITS. The clean FX_Items Designer Form tab was closed once (no prompt), and the same User-scoped Form was reopened once from the Form-menu recent-forms entry. Recovered: Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, status bar User scope, Initial Command `Refresh`, comparison properties unchanged, Save and Undo disabled. Same-session UI evidence only. STOPPED FOR COORDINATOR REVIEW BEFORE AC-9 (final runtime reopen).** Report: `evidence/EXP-052/T8-designer-close-and-reopen-initial-command-persistence-report.md`.

Earlier status (after T7, cycle 6, runtime close, Initial Command mutation, one Designer Save): INITIAL COMMAND CHANGED FROM BLANK TO `Refresh` AND SAVED ONCE (AC-7 supported with limits); DESIGNER CLEAN AFTER SAVE; STOPPED FOR COORDINATOR REVIEW BEFORE THE DESIGNER CLOSE/REOPEN.** One clean runtime close (eggs-only result, Save disabled, no prompt). Designer identity re-verified (Name `FX_Items`, User version for anton.ramos@3mworks.com.ph, status bar User scope). Initial Command: blank before; `Refresh` after commit (one native list selection, one Tab commit). Other comparison properties unchanged. One ordinary Designer Save: native notification `Form [FX_Items] and global object(s) were saved.`; afterwards Save and Undo disabled. Report: `evidence/EXP-052/T7-initial-command-refresh-mutation-and-designer-save-report.md`.

Earlier status (after T6, cycle 5, second Filter-in-Place test): THE COMBINED CRITERIA Cost `>5` AND UNIT OF MEASURE `DZ` WERE ACCEPTED AND RETURNED EXACTLY ONE ROW, `eggs / cage free / 6.99 / DZ` (AC-5 supported with limits); STOPPED FOR COORDINATOR REVIEW BEFORE THE DESIGNER PHASE.** The inherited Item `d*` was cleared through the native Item input (verified blank), `DZ` was selected from the native list (which pairs `DZ` with `Dozen`), `>5` was entered once and stayed visibly exact, and one F4 executed. Settled: one unstarred row, `Description (Object 1 of 1)`, Save disabled, no error. This verifies only the combined result in this session; the greater-than operator was not isolated. Report: `evidence/EXP-052/T6-filter-in-place-cost-gt5-dz-report.md`.

Earlier status (after T5, cycle 4): ONE FILTER-IN-PLACE QUERY WITH ITEM `d*` RETURNED EXACTLY ONE ROW (AC-4 supported with limits); STOPPED FOR COORDINATOR REVIEW BEFORE THE COST `>5` / DZ TEST. Criteria before execution: Item `d*`, Description, Cost, Unit of Measure blank (`t5-01`). Settled after one `F4`: one unstarred row `dumbbell / 45 pound iron / 45.00 / EA`, status `Description (Object 1 of 1)`, Save disabled, no error (`t5-02`). The Cost `>5` / DZ test was not run. Report: `evidence/EXP-052/T5-filter-in-place-item-d-star-report.md`.

Earlier status (after T4, cycle 3, one manual Refresh): THREE RECORDS LOADED BY ONE NATIVE REFRESH (AC-3 supported with limits); STOPPED FOR COORDINATOR REVIEW BEFORE ANY FILTER-IN-PLACE QUERY. The settled runtime shows three unstarred rows (`dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`; order dumbbell, eggs, guitar), status `Description (Object 1 of 3)`, Save disabled, no placeholder. One Refresh invoked; no repeat, no F4, no Filter-in-Place, no runtime edit or Save. Report: `evidence/EXP-052/T4-refresh-three-record-verification-report.md`.

Earlier status (after T3, cycle 2): RUNTIME ADD-MODE BASELINE OBSERVED (AC-2 supported with limits); STOPPED FOR COORDINATOR REVIEW BEFORE ANY QUERY. One clean native runtime close and one Open > Select Form reopen of FX_Items. Immediate state: one starred placeholder row, blank Item and Description, Cost `0.00`, blank Unit of Measure, Save disabled, status `Item (Object 1 of 1)`; no Refresh, F4, Filter-in-Place, or other query was run. Designer FX_Items remains open, clean, and unchanged (Initial Command blank). Report: `evidence/EXP-052/T3-runtime-add-mode-baseline-report.md`.

Earlier status (after T2, cycle 1): DESIGNER IDENTITY ESTABLISHED; INITIAL COMMAND BASELINE BLANK AND OPTIONS RECORDED; STOPPED FOR COORDINATOR REVIEW BEFORE ANY PROPERTY CHANGE. Designer Form `FX_Items` open (Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`), clean (Save and Undo disabled). Initial Command is blank (no visible value); its native list offers `Refresh`, `Filter`, `FilterInPlace`, `Add`, and `Event <eventname>`, with `Refresh` offered as the exact option. No Initial Command selection, property change, Save, Designer close, or runtime interaction was performed. The runtime baseline (AC-2), queries, Designer mutation, and runtime reopen (AC-9) have not been performed. Classification of all findings: observed only; not replay_verified. Reports: `evidence/EXP-052/T2-designer-identity-and-initial-command-options-report.md` (T2) and `evidence/EXP-052/T1-preflight-report.md` (T1).

Earlier status (after T1, cycle 0, read-only preflight): PARTIAL PREFLIGHT; STOPPED FOR COORDINATOR REVIEW BEFORE THE RUNTIME BASELINE. The inherited FX_Items runtime was visibly clean but already showed three loaded rows, not the Add-mode baseline. Full report: `evidence/EXP-052/T1-preflight-report.md`.

## Run identity and provenance

- Run `R-20261011-122156-AVGD`, experiment EXP-052, cycle 0, task T1. Worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `2288da86-0585-40b7-b421-564b140eae73`.
- Date 2026-10-11. Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar and Designer title).
- Target: Form `FX_Items`, User-scoped. Evidence directory `evidence/EXP-052/`.
- Predecessors read: `AGENTS.md`; `experiments/EXP-051-hello-world-part-2-fx-items-domain-validation-and-.md` (accepted with limits; three rows `dumbbell / 45 pound iron / 45.00 / EA`, `guitar / natural acoustic / 129.99 / EA`, `eggs / cage free / 6.99 / DZ`); `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (FX_Items User-scoped Classic Multi-View Form; Designer identity and runtime procedure); `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md` (empty-criteria Refresh gate; status-bar count rule; add mode counts the placeholder; reopen opens in add mode and rows load after Refresh); `experiments/EXP-046-hello-world-part-2-two-fx-ums-test-records-and-run.md` (one F4 with blank Filter-in-Place criteria; caption-prefix status text accepted as expected); `docs/mongoose/transcripts/hello-world-pt3.md` sections 1–3 (`[0:14]`–`[3:20]`). `tools/` was not read.

## Acceptance matrix (final, after T10; rows AC-1 to AC-9 as recorded at each task)

| AC | Final status | Basis | Limit |
| --- | --- | --- | --- |
| AC-1 Preflight | **Supported with limits** | DEM identity bar and Designer title `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (T1 `t1-02`, `t1-03`); T2 `t2-02` Designer identity; no sign-in or session challenge; no banner; Designer status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Inherited scope dialog resolved by OK once with User and anton.ramos unchanged. | Runtime User-scope version not visible in the Web Client. Form-level ScopeType/ScopeName inferred from the status bar and Version text. |
| AC-2 Add-mode baseline | **Supported with limits (T3)** | `t3-01` (closed; no prompt); `t3-02` (reopened: one starred row `1`, blank Item/Description/UM, Cost `0.00`, Save greyed, `Item (Object 1 of 1)`); T3 snapshot of the immediate state | Single session, UI only. Distinguishable from a persisted record by visible values and count, not by a database read. Star read from the screenshot; the accessibility tree shows only `gridcell "1"` and blanks. |
| AC-3 Manual Refresh and three records | **Supported with limits (T4)** | One toolbar Refresh (T4). `t4-01` (settled: three unstarred rows, `Description (Object 1 of 3)`, Save greyed, dumbbell detail inputs); accessibility text for all twelve business-field values (`dumbbell / 45 pound iron / 45.00 / EA`; `eggs / cage free / 6.99 / DZ`; `guitar / natural acoustic / 129.99 / EA`) | Single session, UI only; no database read. Eggs and guitar Description/Cost/UM are accessibility text only (grid columns clipped in `t4-01`). Count numerator is current-record position. |
| AC-4 Filter-in-Place Item `d*` | **Supported with limits (T5)** | `t5-01` (criteria before execution: Item `d*`, others blank, status `Filter in Place`); `t5-02` (settled: one unstarred row, dumbbell / 45 pound iron / 45.00 / EA, `Description (Object 1 of 1)`, Save greyed, no error); accessibility text for the four values | Single session, UI only; no database read. Query completion inferred from grid and mode exit (no completion indicator). Star read from the image. |
| AC-5 Cost `>5` with DZ | **Supported with limits (T6)** | `t6-01` (criteria before execute: Item blank, Description blank, Cost `>5`, UM `DZ`, status `Filter in Place`); `t6-02` (settled: one unstarred row `eggs / cage free / 6.99 / DZ`, `Description (Object 1 of 1)`, Save greyed, no error); native list pairing `DZ` / `Dozen`; accessibility text for the four values | Combined criteria only; the greater-than operator was not isolated (no DZ-only or `>5`-only query). Single session, UI only; no database read. The DZ/Dozen pairing is the UI's own; the stored code is shown as `DZ` in the result row. Query completion inferred. |
| AC-6 Designer baseline and options | **Supported with limits** | `t2-02` (identity), `t2-04` (expanded Behavior, Initial Command blank), `t2-05` (options list open), `t2-06` (list closed, value blank); T2 report baseline table | Blank value not explained (default not established). Option list read via accessibility and screenshot. `FilterInPlace` text differs from the transcript's `Filter-in-Place`. |
| AC-7 Initial Command to `Refresh`, one Save | **Supported with limits (T7)** | Pre-change `t7-01` (identity, blank Initial Command, Save/Undo greyed); `t7-02` (Refresh selected before commit); `t7-03` (after Tab commit: Save and Undo enabled, Initial Command `Refresh`); `t7-04` (native notification `Form [FX_Items] and global object(s) were saved.`); `t7-05` (settled: Save and Undo disabled, `Refresh`, identity and comparison properties unchanged). Accessibility comparison table in the T7 report. | Same session. The notification names global objects and the Form; no database read. Commit evidenced by Save enablement and the displayed value. Tab commit moved focus to the adjacent cell (no value change). Blank pre-change value not explained. |
| AC-8 Designer close and reopen | **Supported with limits (T8)** | Pre-close `t8-01` (identity, Initial Command `Refresh`, Save/Undo disabled, comparison properties); closed `t8-02` (tab absent, no prompt); menu `t8-03` (FX_Items entry verified visually); recovered `t8-04` (Name, User version, User status bar, `Refresh`, Save/Undo disabled); accessibility comparison table in the T8 report | Same session, UI only; no database read. Entry identified by screenshot (menu items unnamed). Design-time canvas preview differs after reopen (Properties values unchanged). |
| AC-9 Final runtime reopen and automatic load | **Supported with limits (T9)** | `t9-01` (immediate after Open > Select Form > OK: three unstarred rows numbered 1–3, dumbbell current, Save greyed, `Description (Object 1 of 3)`); `t9-02` (settled after 3 s, no action: same); accessibility text for all twelve values (matches immediate and settled); Cost `45.00`, `6.99`, `129.99` | Same session, UI only; no database read. Causal link to Initial Command `Refresh` inferred from the T3-vs-T9 sequence, not isolated. Eggs and guitar cells clipped in screenshots (accessibility used). Select Form row activation is part of the opening workflow. |
| AC-10 Action audit and reconciliation | **Supported with limits (T10)** | Section 2 of `evidence/EXP-052/T10-final-audit-report.md`; counts reconciled to the row tables of `harness-audit-T1` to `T9`; the T10 section below | Same session. Two controller-flagged `browser_type` calls (authorized criteria entry in T5 and T6). Keyboard `Delete` and `Control+a` in a criteria text field (T6), not the toolbar Delete. Worker count corrections recorded (T3 screenshots, T7 snapshots). |
| AC-11 Confinement and preservation | **Supported with limits (T10)** | Section 4 of the T10 audit report: worker-authored files, controller and tool-generated files, action audit showing no runtime data mutation, FX_UMs change, IDO/SQL/property-class/caption change, vendor Form edit, User Preferences change, check-in/out, or metadata unload | No `git status` or diff (Bash disabled; `.git` reads denied in EXP-050 and EXP-051). The harness before/after diff is authoritative. 39 browser-tool files under `evidence/playwright/` in the run window are disclosed. |
| AC-12 Final record and matrix | **Supported with limits (T10)** | This record: the T10 section (original vs recovered Initial Command, query criteria and results, automatic load, counts, final knowledge state, limits) and the rows above | Observed only; not replay_verified. Unresolved items listed in the T10 section. |

## T10 — Documentation finalization and AC-10 to AC-12 audit (cycle 9)

Full audit: `evidence/EXP-052/T10-final-audit-report.md`. Task message `d71c10fc-ff98-4cb3-8bf8-37104c758163`, worker session `80110901-51e5-401b-b67c-96501827c2d0`. Zero browser, Web Client, Designer, product, or database actions. `tools/` was not read.

- **T9 documentation check:** the T9 header, AC-9 row, and open-items line are present. The failed T9 edit was a worker string error ("afterward" versus the record's "after opening"); the grep-then-exact edit succeeded. T9's insertion left a duplicate `AC-10 to AC-12` row, now replaced by the three final rows.
- **Count corrections (from the controller row tables):** T3 screenshots 3 → 2 (the third was a Read); T7 content snapshots 8 → 7 (no separate post-Save snapshot). Corrected in the T3 and T7 reports and here.
- **Reconciled operations:** runtime closes 2 (T3, T7); runtime openings 2 (T3 baseline with blank Initial Command; T9 final with `Refresh`); toolbar Refresh 1 (T4); Filter-in-Place entries 2 (T5, T6); F4 query executions 2 (T5, T6); literal `>5` attempts 1 (T6); alternate Cost syntaxes 0; third query 0; Initial Command list opened 2 (T2 read-only, closed with Escape; T7 for the change); Initial Command selection and commit 1 (T7); Designer Save 1 (T7, no retry); Designer close 1 and reopen 1 (T8); collection loads after the final opening 0 (T9); runtime edit, add, Save, Delete, New, and Get More Rows 0.
- **Errors, timeouts, recoveries, and flags:** T1 screenshot timeout (5000 ms), no file written, retry succeeded (environment). T2 ref `e461` not found after the list closed; one fresh untargeted snapshot recovered it (within allowance; no mutation). T9 failed Edit (worker string error; no product effect). T5 and T6 `browser_type` calls flagged by the controller ("prohibited-tool hits=1"): authorized native criteria entry, applied as a whole-value fill, not runtime edit or add mode; disposition for the coordinator. T6 keyboard `Control+a`, `Delete`, and `Tab` in the Item criteria text input (inherited `d*` cleared; `Delete` is a text key, not the toolbar Delete). T2 ArrowRight (no effect) and Escape (no selection). The T7 `Refresh` option click is a Designer property choice, not the toolbar Refresh. No unexpected prompt, dialog, authentication challenge, or portal banner appeared in any task.
- **Original versus recovered Initial Command:** original blank (T2 `t2-04`, `t2-06`; T7 `t7-01`). Recovered `Refresh` (T7 `t7-03`, `t7-05`; T8 `t8-01`, `t8-04`; T9 pre-open read).
- **Query results (AC-4, AC-5):**
  - Filter-in-Place 1: criteria Item `d*`, others blank (`t5-01`). Result: one unstarred `dumbbell / 45 pound iron / 45.00 / EA`; `Description (Object 1 of 1)`; Save disabled; no error (`t5-02`).
  - Filter-in-Place 2: criteria Item blank, Description blank, Cost `>5`, UM `DZ` (`t6-01`). Result: one unstarred `eggs / cage free / 6.99 / DZ`; `Description (Object 1 of 1)`; Save disabled; no error (`t6-02`). The combined criteria were accepted. Greater-than alone was not isolated.
- **Automatic load (AC-9):** after the Designer recovery, one Open > Select Form > OK showed three unstarred records immediately and after 3 s: `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`. Status `Description (Object 1 of 3)`; Save disabled; Cost two decimals (`t9-01`, `t9-02`). The T3 opening with blank Initial Command showed no saved rows (`t3-02`).
- **AC-10 to AC-11:** the audit report sections 2 to 4 hold the reconciliation, anomaly table, and confinement evidence. The only intended change was FX_Items Form-level Initial Command. No runtime data mutation, FX_UMs change, IDO, SQL, property-class, or caption change, vendor Form edit, User Preferences change, check-in or check-out, or metadata unload appears in any audit row. The Save notification's "global object(s)" wording is not proof of other changes; Save was disabled before the Initial Command change. No `git status` was run (Bash disabled; `.git` reads denied in earlier experiments). 39 browser-tool files under `evidence/playwright/` in the run window are disclosed. Worker-authored files: this record, 10 reports (T1 to T10), 26 screenshots. Controller-generated: `harness-audit-T1` to `T9`.
- **Final knowledge state (all observed; none replay_verified):**

| Finding | State |
| --- | --- |
| Designer Form-menu recent-forms `FX_Items` reopens the User-scoped version | observed |
| Initial Command options: `Refresh`, `Filter`, `FilterInPlace`, `Add`, `Event <eventname>` | observed |
| Initial Command blank → `Refresh` (committed and saved); recovered after Designer close and reopen (same session) | observed |
| Toolbar Refresh on the Add-mode instance loads three records | observed |
| Filter-in-Place Item `d*` (others blank) returns one record, `dumbbell` | observed |
| Filter-in-Place Cost `>5` with UM `DZ` (Item cleared) returns one record, `eggs`; combined criteria only | observed |
| Native UM list pairs code `DZ` with `Dozen` | observed (UI pairing; stored code not separately verified) |
| Opening after the saved `Refresh` loads three records with no further action; the blank-Initial-Command opening loaded none | observed (causal link unresolved) |
| Cost displays with two decimal places | observed |
| Greater-than operator in isolation | unresolved (not tested) |
| Causal effect of Initial Command on the automatic load | unresolved (sequence only) |
| Default Initial Command value (the pre-change value was blank) | unresolved |
| Designer canvas preview difference after reopen (T8) | unresolved; Properties values unchanged |
| Database persistence; cross-session durability | not tested; not claimed |
| Replay | not claimed |

- **Acceptance status:** AC-1 to AC-12 supported with limits; no check failed. Recommendation: accepted-with-limits at the same-session UI-observation level, with coordinator adjudication requested for the two controller-flagged `browser_type` calls and the unresolved items above.
- **Stop:** coordinator review. No further browser action and no further experiment.

## T9 — Final runtime opening and automatic load, AC-9 (cycle 8)

Full report: `evidence/EXP-052/T9-final-runtime-open-automatic-load-report.md`. Task message `bf6e1e7c-4a52-48f1-a7e8-024a41f2bb96`, worker session `80110901-51e5-401b-b67c-96501827c2d0`.

- **Pre-open gate:** Designer (read-only find and snapshot): FX_Items User version open; Initial Command `Refresh`; Save and Undo disabled; User status bar; no dialog. Web Client: FX_Items runtime tab absent (closed in T7); toolbar disabled; no challenge.
- **Opening (once):** toolbar Open → Select Form (one row `FX_Items` / `FX_Items`) → row Name cell → OK.
- **Immediate state (`t9-01`):** three unstarred rows (numbers 1–3; row 1 current); dumbbell detail inputs (Description `45 pound iron` focused by the form); Cost `45.00`; UM `EA`; status `Description (Object 1 of 3)`; Save greyed. Accessibility: all twelve values for the three authorized keys.
- **Settled state (`t9-02`, after 3 s with no action):** unchanged; all twelve values re-read by read-only find.
- **Contrast with T3:** the T3 baseline opening (Initial Command blank) showed one placeholder and no saved rows. Initial Command is the only Designer-side change between the two openings in this session.
- **Counts:** runtime openings 1; post-opening collection loads 0 (Refresh 0, F4 0, FiP 0, Get More Rows 0, queries 0); runtime data mutations 0; Designer changes 0; Designer Save 0 (cumulative 1); scope changes 0; prompts 0; dialogs 0 (other than Select Form); clicks 3; finds 5; waits 1; content snapshots 4; screenshots 2; timeouts 0; ref-not-found 0.
- **Classification:** observed (same-session UI). Not replay_verified; not cross-session; not database durability.
- **Stop:** per the T9 instruction; coordinator review. AC-10 to AC-12 are for a later task.

## T8 — Designer Form close and one reopen; Initial Command recovery, AC-8 (cycle 7)

Full report: `evidence/EXP-052/T8-designer-close-and-reopen-initial-command-persistence-report.md`. Task message `eda39431-ba9f-4e97-a705-176adae526f1`, worker session `80110901-51e5-401b-b67c-96501827c2d0`.

- **Pre-close gate (tab 0, read-only):** Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; status bar User scope; Initial Command `Refresh`; Save and Undo disabled; comparison properties match T2/T7; no dialog. Screenshot `t8-01`.
- **Close (once):** the Form tab's `closable FX_Items` control. Tab removed; Designer URL lost `?MGForm=FX_Items`; Save and Undo disabled; no unsaved-change prompt (`t8-02`).
- **Reopen (once):** Form menu (`e3`) → screenshot `t8-03` verified the FX_Items entry (first entry after the separator) → recent-forms entry (`e736`). URL `?MGForm=FX_Items`; tab `FX_Items` selected.
- **Recovered state (`t8-04`):** Name `FX_Items`; Version User; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Initial Command `Refresh`; Script Language, Close Box, Min/Max, Filter Form, Enable Advanced Filter, Help Context ID, Splitter, panes, Unit, Size, Synchronize FlexLayout unchanged; Save and Undo disabled.
- **Observation:** the design-time canvas preview shows empty grey inputs and no starred row after reopen (before close it showed a starred placeholder and Cost `0.00`). Properties unchanged; cause not established.
- **Counts:** Designer close 1; Designer reopen 1; clicks 3 (close, Form menu, recent-forms); Initial Command edits 0; Designer Save 0 (cumulative 1); runtime interactions 0; Refresh 0 (cumulative 1); F4 0; FiP 0; queries 0; runtime Save and Delete 0; scope changes 0; unload acceptances 0; prompts 0; dialogs 0; timeouts 0; ref-not-found 0; content snapshots 4; screenshots 4; finds 0.
- **Classification:** observed (same-session UI recovery). Not replay_verified; not cross-session; not database durability.
- **Stop:** per the T8 instruction; coordinator review before AC-9.

## T7 — Runtime close, Initial Command to `Refresh`, one Designer Save, AC-7 (cycle 6)

Full report: `evidence/EXP-052/T7-initial-command-refresh-mutation-and-designer-save-report.md`. Task message `1f4630d6-c223-4ca9-9ee3-a331d9c52cc2`, worker session `80110901-51e5-401b-b67c-96501827c2d0`.

- **Runtime gate (tab 1):** eggs-only result (one unstarred row); status `Description (Object 1 of 1)`; Save disabled; Filter-in-Place exited; no dialog or challenge.
- **Runtime close (once):** `Close Panel FX_Items` (tab's own control). Tab removed; form toolbar disabled; no prompt (no screenshot of the closed state in T7; the post-close snapshot confirms tab removal).
- **Designer gate (tab 0):** Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo disabled; Initial Command blank; comparison properties match the T2 baseline (table in the T7 report). Screenshot `t7-01`.
- **Initial Command (one change):** dropdown opened once; scoped snapshot shows exactly `Refresh`, `Filter`, `FilterInPlace`, `Add`, `Event <eventname>`; `Refresh` selected once (`t7-02`); committed with one Tab (`t7-03`: Save and Undo enabled, value `Refresh`).
- **Designer Save (once):** toolbar Save, one click. Notification `Form [FX_Items] and global object(s) were saved.` (`t7-04`). Settled after 3 s: Save and Undo disabled; `Refresh`; identity and comparison properties unchanged; no dialog (`t7-05`).
- **Counts:** runtime close 1; Initial Command selection 1; Designer Save 1 (retries 0); Designer close 0; Designer reopen 0; runtime reopen 0; runtime query 0; Refresh 0 (cumulative 1); F4 0 (T7); FiP 0 (T7); runtime Save 0; Delete 0; New 0; scope changes 0; unload acceptances 0; clicks 4; key presses 1 (Tab); waits 1; content snapshots 7 (T10 correction); finds 1; screenshots 5; timeouts 0; ref-not-found 0; prompts 0.
- **Classification:** observed only; not replay_verified. Same-session UI evidence only.
- **Stop:** per the T7 instruction; coordinator review before the Designer close/reopen (AC-8).

## T6 — Second Filter-in-Place test: Cost `>5` with Unit of Measure DZ, AC-5 (cycle 5)

Full report: `evidence/EXP-052/T6-filter-in-place-cost-gt5-dz-report.md`. Task message `0bcc1832-e246-422b-b08f-50ae4d6157a2`, worker session `80110901-51e5-401b-b67c-96501827c2d0`.

- **Pre-test prerequisites (fresh snapshot, tab 1):** one unstarred `dumbbell` row from T5; status `Description (Object 1 of 1)`; Save disabled; FiP mode exited; no dialog or challenge.
- **Entry:** toolbar `FiP` once. The inherited Item criterion `d*` was present.
- **Clear Item:** focus the Item input, `Control+a`, `Delete`, `Tab` (commit). Item and criteria-row Item cell verified blank.
- **Unit of Measure:** native list opened once; `find` `Dozen` showed the option pairing `DZ` / `Dozen`; the `DZ | Dozen` option clicked once. Combobox and criteria row show `DZ`.
- **Cost:** focus the Cost input; `>5` entered once (single fill, not re-entered); `Tab` commit; criteria row `>5 DZ`. Description left blank.
- **Pre-execution (`t6-01`):** Item blank; Description blank; Cost `>5`; UM `DZ`; status `Filter in Place`; Save greyed.
- **Execution:** focus moved to Description (click only, no typing) so F4 would not act on the combobox; `F4` once.
- **Settled (`t6-02`):** one row, unstarred, `eggs / cage free / 6.99 / DZ`; status `Description (Object 1 of 1)`; Save disabled; no error or validation text; mode exited.
- **Counts:** FiP 1 (this task); clicks 6; key presses 5 (`Control+a` 1, `Delete` 1, `Tab` 2, `F4` 1); fill 1 (`>5`); content snapshots 9; finds 2; screenshots 2; Refresh 0 (cumulative 1); Get More Rows 0; New 0; Delete 0; runtime Save 0; runtime edits 0; Designer actions 0; alternate Cost syntax 0; third query 0; timeouts 0; ref-not-found 0.
- **Classification:** observed only; not replay_verified. The combined result is observed; greater-than filtering in isolation is not claimed.
- **Stop:** per the T6 instruction; coordinator review before the Designer phase.

## T5 — Filter-in-Place with Item `d*`, AC-4 (cycle 4)

Full report: `evidence/EXP-052/T5-filter-in-place-item-d-star-report.md`. Task message `9915f7bd-9a6a-4f79-9733-0c64548c2683`, worker session `80110901-51e5-401b-b67c-96501827c2d0`.

- **Pre-query prerequisites (fresh snapshot, tab 1):** three unstarred rows; status `Description (Object 1 of 3)`; Save disabled; no dialog or challenge.
- **Entry:** toolbar `Filter in Place` once. Status `Filter in Place`; criteria blank; grid placeholder only.
- **Criterion:** Item `d*` (one fill); Description, Cost, Unit of Measure blank. Criteria captured before execution (`t5-01`).
- **Execution:** `F4` once. Mode exited; grid settled.
- **Settled result (`t5-02`):** one row `1`, unstarred; `dumbbell / 45 pound iron / 45.00 / EA`; status `Description (Object 1 of 1)`; Save disabled; no error or alert.
- **Counts:** FiP 1; fill 1; F4 1; Cost criterion 0; DZ criterion 0; second query 0; Refresh 0 (cumulative 1 from T4); clicks 1; content snapshots 4; screenshots 2; Save 0; runtime edits 0; Designer actions 0; timeouts 0; ref-not-found 0.
- **Classification:** observed only; not replay_verified.
- **Stop:** per the T5 instruction; coordinator review before AC-5.

## T4 — One manual toolbar Refresh and three-record verification, AC-3 (cycle 3)

Full report: `evidence/EXP-052/T4-refresh-three-record-verification-report.md`. Task message `bd4e0f32-8a36-4569-a033-2ee62418b601`, worker session `80110901-51e5-401b-b67c-96501827c2d0`.

- **Pre-Refresh baseline (fresh snapshot, tab 1):** one row `1`, blank Item/Description/UM, Cost `0.00`, Save disabled, `Item (Object 1 of 1)`, no dialog or banner. Matches T3 (`t3-02`). One earlier read-only snapshot was taken while the Designer tab was still selected; no action on it.
- **Refresh (once):** toolbar `Refresh` (`f1e35`). No error or prompt.
- **Settled (`t4-01`):** three unstarred rows numbered 1–3; row 1 current. Accessibility values: row 1 `dumbbell / 45 pound iron / 45.00 / EA`; row 2 `eggs / cage free / 6.99 / DZ`; row 3 `guitar / natural acoustic / 129.99 / EA`. Dumbbell detail inputs (Item greyed, Description `45 pound iron` focused by the form, Cost `45.00`, UM `EA`). Status `Description (Object 1 of 3)`. Save disabled. No placeholder, no dialog.
- **Cost display:** two decimal places on all three rows (`45.00`, `6.99`, `129.99`).
- **Counts:** Refresh 1; F4 0; Filter-in-Place 0; Get More Rows 0; New 0; Delete 0; runtime Save 0; typing 0; row selections 0; Designer actions 0; scope changes 0; clicks 1; content snapshots 3; screenshots 1; tab select 1; finds 0; timeouts 0; ref-not-found 0.
- **Classification:** observed only; not replay_verified.
- **Stop:** per the T4 instruction; coordinator review before AC-4.

## T3 — Runtime Add-mode baseline, AC-2 (cycle 2)

Full report: `evidence/EXP-052/T3-runtime-add-mode-baseline-report.md`. Task message `56deef99-3c18-4cb8-afec-1d985637e0f2`, worker session `80110901-51e5-401b-b67c-96501827c2d0`.

- **Inherited runtime (fresh snapshot, tab 1, no action):** clean (Save disabled, no star, no dialog, no portal banner, no authentication challenge). Three rows loaded (`dumbbell`, `eggs`, `guitar`; guitar current), status `(Object 3 of 3)`. Same as T1.
- **Close (once):** the tab's own `Close Panel FX_Items` control. Tab removed; form toolbar disabled; no prompt (`t3-01`).
- **Reopen (once):** toolbar Open → Select Form (one row `FX_Items` / `FX_Items`) → row Name cell → OK.
- **Immediate state (before any query; `t3-02`):** one starred row `1` with blank cells (Cost `0.00`); Item focused and required, blank; Description blank; Cost `0.00`; Unit of Measure blank; Save disabled; status `Item (Object 1 of 1)`; no dialog. Distinguishable from a persisted record by the blank values and count; not a database read.
- **Counts:** runtime close 1; reopen 1 (Open 1, row select 1, OK 1); clicks 4; finds 2; content snapshots 4; screenshots 2 (T10 correction: the third image was re-read, not captured); tab select 1; Refresh 0; F4 0; FiP 0; queries 0; New 0; Delete 0; runtime Save 0; runtime edits 0; Designer actions 0; scope changes 0; timeouts 0; ref-not-found 0.
- **Classification:** observed only; not replay_verified.
- **Stop:** per the T3 instruction, no Refresh or query; coordinator review before AC-3.

## T2 — Designer identity and Initial Command read-only preflight (cycle 1)

Full report: `evidence/EXP-052/T2-designer-identity-and-initial-command-options-report.md`. Task message `1bd5a768-f1aa-4a2f-a195-3bd3b258bbb8`, worker session `80110901-51e5-401b-b67c-96501827c2d0`.

- **Scope dialog:** inherited `Identify Your Editing Scope` (Scope `User`, User `anton.ramos@3mworks.com.ph`, both preselected). Confirmed once with its own OK. No change, no Cancel, no unload warning.
- **Designer open:** Form menu → recent-forms entry `FX_Items` (one click). Designer URL `?MGForm=FX_Items`. Verified Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True; Caption blank; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo disabled (`t2-02`).
- **Initial Command baseline:** Behavior group expanded through the Properties panel Expand control after the row select and ArrowRight did not expand it. Initial Command value **blank** (`t2-04`). Comparison baseline recorded in the T2 report for AC-7.
- **Options (read-only, list opened once, closed by Escape, nothing selected; `t2-05`, `t2-06`):** `Refresh`, `Filter`, `FilterInPlace`, `Add`, `Event <eventname>`. The exact `Refresh` option is offered.
- **Counts:** clicks 6 (scope OK 1; Form menu 1; recent-forms 1; Behavior row 1; Properties Expand 1; dropdown open 1); key presses 2 (ArrowRight 1; Escape 1); finds 5; content snapshots 8; screenshots 6; ref-not-found 1 (recovered with one fresh untargeted snapshot, which also served as the corrected inspection); timeouts 0; Initial Command selections 0; property edits 0; Save 0; Designer close 0; Designer reopen 0; Refresh 0; F4 0; FiP 0; queries 0; New 0; Delete 0; runtime interactions 0; scope changes 0.
- **Classification:** observed only; not replay_verified.

## Inherited state (read-only, T1)

Web Client (tab 1, `favoriteContext=FX_Items`):
- Runtime tab `FX_Items` open and selected. Grid rows `1` `dumbbell / 45 pound iron / 45.00 / EA`, `2` `eggs / cage free / 6.99 / DZ`, `3` `guitar / natural acoustic / 129.99 / EA` (row 3 current, `[selected]`). Detail inputs show guitar; Item key greyed; Cost `129.99`; Unit of Measure `EA`.
- Status bar `(Object 3 of 3)`. Save disabled (`f1e28`). No starred or placeholder row in the screenshot. No dialog. No portal banner. Console 0 errors, 2 warnings.
- Interpretation: the three rows are already loaded in this runtime instance. The loading action (a Refresh, F4, or query before T1) is not established by T1 and is not inferred. The state resembles the EXP-051 T8 final-query result, but T1 did not verify it is the same instance.

Designer (tab 0):
- Canvas empty; no Form tab visible; Properties panel empty; Form tree empty; the `FX_Items` text is not present in the accessibility tree (`find` no matches).
- Modal `Identify Your Editing Scope` dialog open with Scope `User` and User `anton.ramos@3mworks.com.ph` (preselected). Untouched in T1.
- Toolbar Save and Undo disabled; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Interpretation: the Designer has no pending edit visible. The FX_Items Form's Designer identity and Initial Command baseline are not established yet.

## T1 — Read-only preflight (cycle 0)

Full report: `evidence/EXP-052/T1-preflight-report.md`.

- Actions in order: read AGENTS.md, EXP-051, EXP-050, EXP-042-R3 and EXP-046 (relevant excerpts), transcript sections 1–3; `browser_tabs` list; Designer snapshot (tab 0, read-only); Designer screenshot attempt 1, timed out at 5000 ms (`taking page screenshot`, fonts loaded); tab select 1 (Web Client); Web Client snapshot; screenshot `t1-02`; tab select 0 (Designer); `find` `FX_Items` in Designer (no matches); screenshot `t1-03`.
- Counts: tab selects 2; tab list 1; snapshots 2; screenshots 2 captured plus 1 timed out; find 1; clicks 0; key presses 0; typing 0; Refresh 0; F4 0; FiP 0; queries 0; Save 0; New 0; Delete 0; close or reopen 0; Designer edits 0; scope-dialog interactions 0; prompts answered 0; ref-not-found 0; portal banner dismissals 0.
- Decision: stopped before the runtime baseline, per the T1 instruction.

## Unresolved items and recommendation to the coordinator (T1; superseded by the unresolved limits in the T10 section)

1. **Designer identity (AC-1, AC-6).** No FX_Items Form is open in Designer, and the modal scope dialog blocks opening one. The brief allows resolving that dialog only by confirming the already-selected User scope in a later Designer task, and T1 forbade it. Recommendation: authorize, for the Designer phase, OK on the dialog with User and anton.ramos unchanged, then open the existing FX_Items User-scoped Form through Designer's native Open/Select Form, and verify Name, ScopeType, and ScopeName before any property action.
2. **Runtime baseline (AC-2).** The inherited FX_Items runtime shows three loaded rows and Save disabled. Recommendation: in the baseline task, close it once through the tab's own control only after confirming it is clean (no star, no dialog, Save disabled), then reopen once via Open > Select Form, then capture the Add-mode state before any query. This matches the brief's clean close/reopen requirement.
3. The Designer's prior EXP-050 Form tab (`Property Classes` and `FX_Items`) is absent now. Cause not established.
4. The first Designer screenshot attempt timed out. Retried after selecting the tab; succeeded. Environment-timing observation, one occurrence.

## Repository changes (T1)

- Written: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (this record).
- Written: `evidence/EXP-052/t1-02-webclient-inherited-runtime-FX_Items-state-readonly.png`, `evidence/EXP-052/t1-03-designer-inherited-scope-dialog-no-form-tab.png`, `evidence/EXP-052/T1-preflight-report.md`.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console files written by the browser tool during T1, including `evidence/playwright/console-2026-10-11T04-22-09-366Z.log`.
- Not written: any other repository file. No `tools/`, AGENTS.md, IDO, SQL, property class, FX_UMs, string, Form, recipe, or memory file was edited.

## Knowledge state (T1 table; superseded by the final knowledge state in the T10 section)

| Finding | State |
| --- | --- |
| Web Client FX_Items runtime open under the DEM identity; inherited state shows three rows, status `(Object 3 of 3)`, Save disabled, no dialog | observed (`t1-02`), single run |
| Designer: no Form open; User scope in status bar; scope dialog modal and inherited | observed (`t1-03`), single run |
| Designer Form identity Name=FX_Items (User) | **unresolved** in this session (carried from EXP-050 only) |
| Initial Command baseline and option list | **not captured** (requires an open Form in Designer) |
| Add-mode baseline (placeholder, count token) | **not captured** (requires a clean runtime close and reopen) |
| Replay | not claimed |

## Open items and blockers (after T2; updated through T10)

- Resolved in T2: the inherited scope dialog (confirmed once with OK on the unchanged User scope). The Designer Form identity is established.
- Resolved: the Initial Command change to `Refresh` was authorized and performed in T7 (AC-7).
- Done in T3: the runtime baseline (one clean close, one reopen, Add-mode capture) — AC-2 supported with limits. The runtime now shows the Add-mode placeholder, not the three-row state.
- Done in T4: AC-3 (one manual Refresh; three unstarred records verified with all twelve values; `Description (Object 1 of 3)`; Save disabled).
- Done in T5: AC-4 (one Filter-in-Place query with Item `d*`; one unstarred record `dumbbell / 45 pound iron / 45.00 / EA`; `Description (Object 1 of 1)`; Save disabled).
- Done in T6: AC-5 on the combined criteria (Item cleared; `DZ` selected; `>5` entered once; one F4; `eggs / cage free / 6.99 / DZ`, one unstarred row, `Description (Object 1 of 1)`, Save disabled). Greater-than filtering in isolation is not verified.
- Done in T7: runtime clean close (once); Initial Command blank → `Refresh` (one selection, one commit); one Designer Save (native notification; Save and Undo disabled afterward). AC-7 supported with limits.
- Done in T8: AC-8 supported with limits. One Designer Form close (no prompt) and one reopen from recent-forms. Recovered Initial Command `Refresh`; comparison properties unchanged; Save and Undo disabled.
- Done in T9: AC-9 supported with limits. One final runtime opening; three unstarred saved records appeared immediately and remained after 3 s with no action; no post-opening collection loads; no runtime data mutations.
- Done in T10: the audit (AC-10), repository confinement (AC-11), and final matrix (AC-12). Browser state after T9 (no browser action in T10): runtime FX_Items open with the three-row state; Designer FX_Items open, clean, Initial Command `Refresh`.
- Open question: the blank Initial Command value. The default is not established; T2 did not set or infer it.
- No authentication challenge, pending mutation, or unsafe transition was observed in T1 or T2.
- Browser end state after T9 (no browser action in T10): runtime FX_Items open with three unstarred rows; Designer FX_Items open, clean, Initial Command `Refresh`; no dialog.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-122156-AVGD, completed/accepted in cycle 10, no pauses). Observed only, not replay-verified.

Changed, for later cleanup:
- **User-scope Form `FX_Items`:** Form property Behavior > **Initial Command** changed from blank to **Refresh**. One Designer Save; recovered after a Designer close/reopen. No other property changed and no data changed.

Operator screenshot review:
- `t2-05`: the Initial Command list (read-only) offers exactly `Refresh`, `Filter`, `FilterInPlace`, `Add`, `Event <eventname>`. The baseline value is blank. The Designer shows User scope.
- `t6-02`: Filter in Place with Cost `>5` and Unit of Measure `DZ` returns one row: eggs / cage free / 6.99 / DZ, status "(Object 1 of 1)". The d* query (`t5-02`) returned dumbbell only.
- `t9-02`: after the Designer change, a single runtime open with no manual action shows three rows (dumbbell, eggs, guitar), the first row current, no add-mode placeholder, status "Description (Object 1 of 3)".

Learned (observed):
1. **Wildcard filter:** the Filter-in-Place text criterion `d*` acts as "starts with" (one match, dumbbell).
2. **Comparison filter:** a numeric criterion `>5` is accepted as "greater than". Criteria in different fields combine with AND (Cost >5 AND UM DZ gave eggs only).
3. **Initial Command options:** Refresh, Filter, FilterInPlace, Add, Event <eventname>. A blank value behaves as Add (the Form opens in add mode with a placeholder).
4. **Initial Command Refresh:** with Initial Command set to Refresh, the runtime Form loads the collection on open. There is no placeholder, and the status shows the persisted count "(Object 1 of 3)".
5. **Count-rule exception:** a Form with Initial Command = Refresh opens without the add-mode placeholder, so the EXP-042-R3 count rule does not apply to it on open. For later FX_Items emptiness or count gates, read the count directly.

Limits:
- Only the same session, at the UI level.
- The Save notification does not name the property.

Next (Part 3 section 4): form-event diagnostics. This needs User Preferences changes (Diagnostics Enable, Form > Events, Event Handler > Include) and clearing the diagnostic log, so it needs an operator decision. Then section 5: a Refresh button on FX_Items.
