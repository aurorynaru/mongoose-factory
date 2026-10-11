# EXP-052 T10 — Final documentation and AC-10 to AC-12 audit (cycle 9)

Run `R-20261011-122156-AVGD`, task T10, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `d71c10fc-ff98-4cb3-8bf8-37104c758163`. Date 2026-10-11. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Scope of T10:** documentation and audit only. No browser, Web Client, Designer, product UI, or database action. `tools/` was not read. No query, Refresh, Save, close, reopen, or edit was performed.

**Result:** AC-10, AC-11, and AC-12 are supported with limits. No acceptance check failed. EXP-052 reaches the same-session UI-observation level (see section 7 for the coordinator recommendation).

## 1. T9 documentation gap check

- The T9 header, AC-9 matrix row, and open-items line are present in the record. The T9 failed edit (`String to replace not found in file`, controller audit `harness-audit-T9.md` row 25) was the worker's own wrong string. The text used "afterward"; the record said "after opening". A grep then an exact edit (row 27) succeeded. No record content was lost.
- The T9 insertion left a duplicate `AC-10 to AC-12 | Not performed` row. It is corrected in the record's final matrix.
- The T9 report's find count and snapshot count were rechecked against the T9 audit table: finds 5, snapshots 4, clicks 3, screenshots 2, waits 1, tab selects 1, tab list 1. These match.

## 2. Cumulative operation reconciliation

Source: the row tables of the controller audits `harness-audit-T1.md` to `harness-audit-T9.md` (controller-generated, not worker prose), cross-checked against the worker reports. The audit files' summary headers use a different tally and were not used.

| Operation | Count | Task(s) | Audit evidence |
| --- | --- | --- | --- |
| Runtime clean close (`Close Panel FX_Items`) | 2 | T3, T7 | T3 row 4 (T3 audit), T7 row 4 |
| Runtime opening (Open > Select Form > OK) | 2 | T3 baseline (Initial Command blank); T9 final (`Refresh`) | T3 rows 7, 10, 12; T9 rows 6, 9, 11 |
| Toolbar Refresh (runtime, `f1e35` / native) | 1 | T4 | T4 audit: one Refresh click |
| Filter-in-Place entries (toolbar FiP) | 2 | T5, T6 | T5 row 4; T6 row 4 |
| Query executions (F4) | 2 | T5 (Item `d*`), T6 (Cost `>5` + DZ) | key sequence F4 in T5 and T6 audits only |
| Literal `>5` Cost entries | 1 | T6 | T6 audit: one `browser_type` on the Cost criteria, element `literal >5, single attempt` |
| Alternate Cost syntaxes | 0 | — | no other Cost entry in any audit |
| Third query | 0 | — | no F4 or FiP after T6 |
| Initial Command list opened | 2 | T2 (read-only, closed with Escape, no selection); T7 (for the change) | T2 row 26; T7 row 10 |
| Initial Command selection (`Refresh`) | 1 | T7 | T7 row 13 (`Refresh option in Initial Command list`); this is a Designer property option, not toolbar Refresh |
| Initial Command commit | 1 | T7 | T7 row 17 (one Tab key press) |
| Designer toolbar Save | 1 | T7, no retry | T7 row 21 (only Save click in any audit) |
| Designer Form close (`closable FX_Items`) | 1 | T8 | T8 row 6 |
| Designer Form reopen (Form menu recent-forms `FX_Items`) | 1 | T8 | T8 row 14 |
| Collection loads after the final runtime opening | 0 | T9 | T9 audit rows 11–27: no Refresh, F4, FiP, Get More Rows, or query |
| Runtime edit, add, Save, Delete, New | 0 | all | no such clicks in any audit; the only Delete was a keyboard key in a criteria text field (see section 3) |
| Get More Rows | 0 | all | none |
| Scope changes, unload acceptances, authentication challenges | 0 | all | the T2 scope dialog was confirmed with its own OK on the unchanged User scope; no unload warning appeared |

Reconciled against the stated plan: two runtime closes, two openings, one manual Refresh, two FiP entries, two F4 executions, one literal `>5` attempt, zero alternate syntax, zero third query, one Initial Command selection and commit, one Designer Save with no retry, one Designer close, one Designer reopen, zero post-opening collection loads. The counts match the plan.

## 3. Errors, timeouts, recoveries, prompts, and flagged calls

| Event | Task | Source | Classification and disposition |
| --- | --- | --- | --- |
| Screenshot timeout (5000 ms; log: taking screenshot, fonts loaded). No file written | T1 | `harness-audit-T1.md` row 13 | Environment timing. The retry succeeded (`t1-02`, `t1-03`). One occurrence. |
| Ref `e461` not found after the Initial Command list closed (targeted snapshot of the Properties tabpanel) | T2 | `harness-audit-T2.md` row 34 | Browser reference failure. The corrected inspection was one fresh untargeted snapshot (row 35), which confirmed the state. Within the one-allowance rule. No mutation was attempted. |
| Edit: `String to replace not found` | T9 | `harness-audit-T9.md` row 25 | Worker documentation error (wrong string). Corrected by grep (row 26) and an exact edit (row 27). No product effect. |
| `browser_type` flagged by the controller ("prohibited-tool hits=1") | T5 (Item `d*`), T6 (Cost `>5`) | `harness-audit-T5.md`, `harness-audit-T6.md` | The brief authorized the native criteria entry. The tool filled the whole field (Playwright fill), not keystrokes. The field was in Filter-in-Place criteria mode, not runtime edit or add mode. The flag is an audit classification; disposition is for the coordinator. |
| Keyboard `Control+a`, `Delete`, `Tab` in the Item criteria text field | T6 | `harness-audit-T6.md` rows 7, 8, 10 | Cleared the inherited Item criterion. `Delete` is the keyboard key in a text input, not the toolbar Delete command. No record was deleted. |
| Keyboard `ArrowRight` in the Designer Properties tree; `Escape` in the Initial Command list | T2 | `harness-audit-T2.md` rows 18, 31 | ArrowRight did not expand Behavior (no effect). Escape closed the list with no selection. |
| Click on `Refresh` in the Designer Initial Command list | T7 | `harness-audit-T7.md` row 13 | The intended Designer property change, not the toolbar Refresh. The toolbar Refresh count is 1 (T4 only). |
| Tab key press after Initial Command selection | T7 | row 17 | Committed the editor. Focus moved to the adjacent cell; no value changed. |
| Wait 3 s | T7, T9 | rows 24 (T7), 14 (T9) | Settling time only. No input. |
| Read-only `find` of `Refresh` in the Designer Properties tree | T2, T9 | T2 row 27; T9 row 3 | Read-only. Not a click. |
| Designer canvas preview differs after reopen (empty grey inputs, no starred row) | T8 | `t8-04` vs `t8-01` | Unexplained. Properties values are unchanged. Not a prompt or error. |
| Save notification names `global object(s)` | T7 | `t7-04` | Observed wording. See section 4. |

No unexpected prompt, dialog, authentication challenge, portal banner, or unsaved-change warning appeared in any task. The only dialogs were the T2 scope dialog (confirmed with its own OK on the unchanged User scope) and the Select Form dialogs used for the runtime openings. No Mongoose alert appeared.

## 4. AC-11 — preservation and repository confinement

**Intended change confirmed.** The only Designer property change in EXP-052 is the FX_Items Form-level Initial Command (blank → `Refresh`, T7). Every other Designer property was read before and after the change and matched the T2 baseline (`t2-02`, `t7-01`, `t7-05`, `t8-04`). No Designer property other than Initial Command was edited in any audit row.

**Save wording.** The T7 native notification is `Form [FX_Items] and global object(s) were saved.` The "global object(s)" wording is the product's notification text. It is not proof that other global objects changed. Before the change, the Designer Save and Undo buttons were disabled from T2 through T7 pre-mutation (`t2-02`, `t7-01`), so the Designer showed no pending edit. The Save became enabled only after the Initial Command commit (`t7-03`). This is an inference from visible Save state. The worker did not read global-object state directly, so additional global-object persistence is not proven either way.

**No other object touched (action audit).** Across all nine audits, the only Mongoose navigation clicks were: the FX_Items recent-forms entry (T2, T8, labelled `FX_Items`), the Designer Form-tab close (T8), and the runtime tab close and Open (T3, T7, T9). The Form menu items `Definition`, `Sign Out`, `Sql Tables`, `IDOs`, `Property Classes`, `Export/Import Strings`, `IDO Projects`, `FX_UMs`, `FX_HelloWorld01`, `Data Maintenance Wizard`, and `Runtime Builder Selection` were not clicked in any audit. No View, Edit, or Help menu item was clicked. No User Preferences, diagnostics, check-in, check-out, Undo Check Out, FormSync, metadata unload, cache reset, or deployment control was clicked.

**FX_UMs.** The Unit of Measure list opened in T6 is the runtime criteria combobox populated from the FX_UM domain. It was read and one option (`DZ`) was selected as a criterion. The FX_UMs Form was not opened, edited, or saved. No FX_UMs reference data changed.

**No runtime data mutation.** No runtime business-field value was edited. No record was added, deleted, or saved. The three records were present throughout (T1, T4, T5 through T9 observations). The T6 Cost criterion `>5` and UM criterion `DZ` were query criteria, not record values.

**Repository baseline (disclosed limitation).** No `git status` or diff was run. Bash is disabled. `.git` reads were denied in the prior experiments (EXP-050 T9, EXP-051 T9), and T10 did not retry them. The harness computes repository confinement from its before and after Git state, which is authoritative. The worker's own repository reads were: `AGENTS.md`, the EXP-050 and EXP-051 records, the transcript `hello-world-pt3.md`, the EXP-042-R3 and EXP-046 records (targeted greps), and directory listings (Glob). `tools/` content was not read.

**Worker-authored files (EXP-052).**
- Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (created in T1; edited in T1–T10).
- Reports (`evidence/EXP-052/`): `T1-preflight-report.md`, `T2-designer-identity-and-initial-command-options-report.md`, `T3-runtime-add-mode-baseline-report.md`, `T4-refresh-three-record-verification-report.md`, `T5-filter-in-place-item-d-star-report.md`, `T6-filter-in-place-cost-gt5-dz-report.md`, `T7-initial-command-refresh-mutation-and-designer-save-report.md`, `T8-designer-close-and-reopen-initial-command-persistence-report.md`, `T9-final-runtime-open-automatic-load-report.md`, and this file `T10-final-audit-report.md`.
- Screenshots (26 PNG, `evidence/EXP-052/`): `t1-02`, `t1-03`; `t2-01` to `t2-06`; `t3-01`, `t3-02`; `t4-01`; `t5-01`, `t5-02`; `t6-01`, `t6-02`; `t7-01` to `t7-05`; `t8-01` to `t8-04`; `t9-01`, `t9-02`. Each was re-read after capture.
- Worker corrections in T10: `T3-runtime-add-mode-baseline-report.md` (screenshots 3 → 2) and `T7-initial-command-refresh-mutation-and-designer-save-report.md` (content snapshots 8 → 7).

**Controller-generated (not worker-authored).** `evidence/EXP-052/harness-audit-T1.md` to `harness-audit-T9.md` (9 files).

**Tool-generated browser files outside `evidence/EXP-052/` (disclosed).** The browser tool wrote 39 files to `evidence/playwright/` with timestamps in this run's window (2026-10-11T04-22-09 to 04-40-00): 9 console logs and 30 page snapshot YAML files. They were attributed by timestamp; their content was not inspected. The worker did not write them. The task reports cite the specific files they used (T1 to T9).

**Confinement verdict (worker view).** Worker writes were limited to the EXP-052 experiment record and `evidence/EXP-052/`. No write occurred under `tools/`, `AGENTS.md`, `recipes/`, another experiment's record, or any non-FX_ artifact. The harness's before and after diff remains the authoritative confinement check.

## 5. AC-12 — findings and classification

All successful findings are **observed** (same session, UI level). None is `replay_verified`. No cross-session, database-durability, or replay claim is made.

| Finding | Evidence | Classification |
| --- | --- | --- |
| Designer Form-menu recent-forms `FX_Items` reopens the User-scoped Form (Name, Version, status bar) | T2 `t2-02`; T8 `t8-04` | observed |
| Initial Command options: `Refresh`, `Filter`, `FilterInPlace`, `Add`, `Event <eventname>` | T2 `t2-05`; T7 `t7-02` (same five) | observed |
| Initial Command blank before the change; `Refresh` after commit and Save; recovered after Designer close and reopen | T2 `t2-04`; T7 `t7-01`, `t7-05`; T8 `t8-04` | observed |
| Toolbar Refresh on the Add-mode instance loads three records (dumbbell, eggs, guitar) | T4 `t4-01`; accessibility | observed |
| Filter-in-Place Item `d*` (others blank) returns one unstarred `dumbbell / 45 pound iron / 45.00 / EA` | T5 `t5-01`, `t5-02` | observed |
| Filter-in-Place Cost `>5` with UM `DZ` (Item cleared) returns one unstarred `eggs / cage free / 6.99 / DZ` | T6 `t6-01`, `t6-02` | observed (combined criteria only) |
| Native UM list pairs code `DZ` with description `Dozen` | T6 list read (`find`, accessibility) | observed (UI pairing; not a stored-code check) |
| Runtime opening after the saved `Refresh` shows three records immediately and after 3 s, with no collection load | T9 `t9-01`, `t9-02`; accessibility | observed |
| Runtime opening with blank Initial Command showed no saved rows (placeholder only) | T3 `t3-02` | observed |
| Cost displays with two decimal places (`45.00`, `6.99`, `129.99`) | T4, T9 accessibility | observed |

## 6. Evidence path verification

Every cited path in the experiment record and task reports was checked for existence by directory listing (Glob) in T10. All exist:
- Screenshots: all 26 under `evidence/EXP-052/` listed above.
- Reports: all 9 task reports plus this file.
- Browser-tool files cited by the task reports (`evidence/playwright/console-2026-10-11T04-22-09-366Z.log` through `page-2026-10-11T04-40-00-110Z.yml`): all exist in the listing.
- Controller audits `harness-audit-T1.md` to `T9.md`: exist.

No image was described from its filename. No screenshot was re-read in T10. Screenshot content cited in this audit comes from the task-time reads recorded in the T1 to T9 reports, and from the accessibility text saved there.

## 7. Limits and recommendation

**Unresolved limits (carried into the record).**
1. The greater-than operator was not isolated. The `>5` result was observed only in the combined criteria with DZ. No DZ-only or `>5`-only query was run (the brief forbade a third query).
2. The causal effect of Initial Command on the automatic load was not isolated. The support is the T3 blank-opening versus T9 `Refresh`-opening sequence in one session.
3. The default value of Initial Command is not established. The pre-change value was blank.
4. The design-time canvas preview difference after reopen (T8) is unexplained. Properties are unchanged.
5. The stored code `DZ` was not independently verified. The mapping is the native UI pairing `DZ`/`Dozen`.
6. The row star is read from screenshots. The accessibility tree exposes row numbers only.
7. In some screenshots the eggs and guitar cells are clipped. Their values come from accessibility text.
8. The FX_Items Form-menu entry was identified by screenshot, because its menu items have no accessible names.
9. The Version string is visually truncated; accessibility text was used.
10. The absence of the EXP-050 Designer tab set (`Property Classes`, `FX_Items`) at T1 has no established cause.
11. The Save notification names global objects. Global-object state was not read directly.
12. No database read was made. No cross-session test was run. Database durability and replay are not claimed.
13. The cause of the three-row runtime state inherited at T1 is not established.

**Recommendation to the coordinator (AC-1 to AC-11 supported with limits; no failed check).** EXP-052 qualifies for **accepted with limits at the same-session UI-observation level**, subject to the coordinator's adjudication of:
- the controller's `browser_type` flags on T5 and T6 (authorized criteria entry; section 3);
- the greater-than isolation and the causal-link limits (items 1 and 2), which are documented as unresolved rather than as failures;
- the classification of all findings as observed only.

Coordinator review is requested. No further experiment is started, and no further browser action is taken.
