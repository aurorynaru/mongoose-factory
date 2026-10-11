# EXP-054-R2 — T8 final evidence-backed acceptance and repository-confinement audit

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 7, task T8.
Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `aa7369f8-d874-4884-8a2b-03a73dd03d95`.
Date 2026-10-11. Editing scope: User. Target Form `FX_Items` (User version). Button `FX_RefreshButton`.

**Scope of this task: audit only.** No browser calls were made in T8 (tools used: Glob, Read, Grep, Write, Edit). No Designer, runtime, preference, log, or Button action was taken. The clean runtime (three records, FX_Refresh rendered, Save disabled) and the restored preferences (General Enabled OFF) were left untouched.

## 0. Result

- **All 12 acceptance checks are evidence-supported** with the limits listed in §9. None failed.
- **Repository confinement holds on the evidence available:** every Write or Edit recorded by the controller audits targets `experiments/EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md` or `evidence/EXP-054-R2/`. No read or write under `tools/`, `briefs/`, or memory appears in any audit. (This worker has no shell, so git status could not be run here; the harness's before/after diff remains authoritative.)
- **Recommended outcome: accepted, classification observed only.** Same browser session only; not replay-verified; no cross-session persistence, isolated causation, or server-side trace completeness is claimed.
- **Documentation discrepancies found and corrected in the experiment record in this task** (§7). None changes an acceptance check's proof, but two of them corrected statements that were wrong (a T7 comparison and a T4 screenshot description).

## 1. Evidence existence and content verification

Each decisive file was checked by existence (Glob) and by content (Read or Grep), not by filename alone.

| Check | Method | Result |
| --- | --- | --- |
| Verbatim T7 sequence file exists and states 16 rows | Read `T7-diagnostic-sequence-verbatim-…md` (Part A table, rows 1–16) | present; 16 rows |
| Raw activation snapshot has exactly 16 FormEvent rows, in the same order | Grep `FormEvent (FX_Items)` in `evidence/playwright/page-2026-10-11T07-08-01-119Z.yml` → 16; Grep `-o "Event name …"` returned 16 lines (file lines 229–334) with names in the order listed in §3 | matches the sequence file exactly |
| Timestamps and handler-count fields | Grep `07:08:00.855|07:08:00.949|num handlers for event 0` → 24 = 16 timestamps + 8 result rows | matches (5 rows at .855; 11 rows at .949; 8 result rows report `num handlers for event 0`) |
| No EventHandler rows; no non-zero handler or executed counts | Grep `EventHandler|num handlers for event [1-9]|num executed [1-9]` across all `evidence/playwright/*2026-10-11T07-0*` snapshots | 0 matches (the matches seen in the first pass were my own report wording, not log rows; re-checked on raw files only) |
| Post-restoration snapshot holds 16 FormEvent rows plus 20 VarValue rows | Grep in `t7-16-…md` → FormEvent 16; VarValue 20 | 36 total |
| The 20 VarValue rows are the restoration-dialog opening | Grep `07:08:44.703` in `evidence/playwright/page-2026-10-11T07-09-04-370Z.yml` → 20 | matches |
| Pre-clear inherited rows | Grep `gridcell "\d\d:\d\d:\d\d\.\d+"` in `t7-snapshot-01-pre-clear-fresh-web-client-runtime.md` → 36 | matches |
| Three records and Save disabled (post-restoration) | Grep `t7-16-…md`: `dumbbell`/`45.00`, `eggs`/`6.99`, `guitar`/`129.99`; `button "Save" [disabled]` | matches |
| Final restored Diagnostics values | Grep `checkbox "…" [checked]` in raw readback snapshots `page-2026-10-11T07-09-12-857Z.yml` (General), `07-09-18-315Z.yml` (Form), `07-09-24-144Z.yml` (IDO), `07-09-29-052Z.yml` (Others) | General: 0 checked; Form: exactly 3 checked (Events, Include, Value Changed); IDO: 0 checked; Others: 0 checked |
| Checkbox totals per tab | Form 16 checkbox lines; IDO 7; Others 6; General 3 | 32 total, as at T1 |
| Pre-restoration state (ON) | `page-2026-10-11T07-08-44-953Z.yml` and `t7-08-…md`: Enabled `[checked]` | matches the T6 readback |
| Exactly one FX_RefreshButton row in reopen and runtime-period Designer snapshots | Grep `row "FX_RefreshButton` in `page-2026-10-11T06-*` and `07-*` snapshots: 1 match per file | one row each |
| Harness audits reconcile with the worker counts | Row tables in `harness-audit-T1`, `T2`, `T4`, `T7`; row counts for T3, T5, T6 | matches per task (§2) |
| Screenshots opened in this audit | Only `t4-04` (Read in T8; §7 E6). All other PNGs were viewed in the task that created them (their reports say so) and are cited here by path, not re-described | `t4-04` content differs from the T4 report's description (corrected in §7 E6) |

Worker-authored evidence file count (verified present): T1–T7 reports (7), the T7 sequence file (1), the T8 audit (this file), 67 PNG screenshots (T1 12, T2 17, T3 3, T4 6, T5 5, T6 12, T7 12), and 19 worker-requested accessibility snapshot `.md` files (T1 1, T2 3, T3 2, T4 3, T5 2, T6 1, T7 7). Controller-generated: `harness-audit-T1.md` to `harness-audit-T7.md` (7). These are not worker-authored.

## 2. Action reconciliation

Source: controller row tables (`harness-audit-T1` to `T7`) and worker-reported counts. Browser rows per task: T1 44, T2 48, T3 11, T4 26, T5 15, T6 31, T7 38. Each equals the worker-reported total for that task. (The controller summary headers, such as "25 actions, 19 reads", use a classification that cannot be reproduced from the rows; the row tables are used here.)

| Required item | Expected | Verified | Audit row(s) |
| --- | --- | --- | --- |
| New PushButton placed | 1 | 1 (`button1_USER`, Toolbox Button armed, one canvas click at 400,320) | T2 rows 12, 15 |
| Name committed | 1 | 1 (`FX_RefreshButton`, Enter) | T2 rows 19, 21, 22 |
| Caption committed (literal) | 1 | 1 (`FX_Refresh`, Enter; one Escape closed an opened resource list with nothing selected) | T2 rows 26, 29, 38, 41 |
| Primary committed | 1 | 1 (`StdFormRefresh`, exact option) | T2 row 53 |
| Designer Save | exactly 1 | 1 | T3 row 16 (only Save click in all audits) |
| Designer close | 1 | 1 (native Form-tab control) | T4 row 7 |
| Recent-forms reopen | 1 | 1 (Form menu then `FX_Items`) | T4 rows 13, 15 |
| Clean inherited runtime closure | 1 | 1 (`Close Panel FX_Items`) | T5 row 7 |
| Controlled runtime opening | 1 | 1 (toolbar Open, row select, OK) | T5 rows 12, 15, 18 |
| Diagnostics General Enabled OFF to ON | 1 change, 1 OK | 1 change (T6 row 30), 1 OK (T6 row 35) | T6 rows 30, 35 |
| Diagnostics readback (no OK) | — | 2 Close Window (T1 row 107 baseline; T6 row 57) | — |
| Diagnostic Log clear | exactly 1 | 1 | T7 row 15 |
| FX_RefreshButton activation | exactly 1 | 1 | T7 row 24 |
| Diagnostics Enabled ON to OFF restoration | 1 change, 1 OK | 1 change (T7 row 44), 1 OK (T7 row 47) | T7 rows 44, 47 |
| Restoration readback (no OK) | — | 1 Close Window | T7 row 67 |
| Manual refresh, F4, Filter-in-Place, Get More Rows, New, Delete, extra collection load | 0 | 0 (no matching element in any audit) | all audits |
| Runtime data mutation (typing, Save, edit) | 0 | 0 (the only typing rows are T2 rows 21 and 38, in the Designer Name and Caption editors) | T2 rows 21, 38 |
| Dialog accepted by browser prompt or handler | 0 | 0 (no handle_dialog calls) | all audits |
| Browser evaluate or run-code | 0 | 0 | all audits |

Worker-reported totals (all tasks): browser calls 44 + 48 + 11 + 26 + 15 + 31 + 38 = 213 (matches the Grep count of 213 browser rows across the seven audits).

## 3. Diagnostic sequence (T7): verbatim and partitioned

The Log Messages grid held three distinct populations during the session. They are not mixed:

| Population | Count | Timestamps | Message type | Relation to this test |
| --- | --- | --- | --- | --- |
| A. Inherited pre-clear rows (before T7 Part A) | 36 | 05:22:07.945 (9), 05:22:07.976 (11), 05:25:20.269–.285 (16) | 20 `FormEvent (FX_Items)`, 16 `VarValue` | EXP-053 rows; **not attributed** to this test; removed by the single clear |
| B. Post-activation FormEvent rows | **16** | 07:08:00.855 (5 rows), 07:08:00.949 (11 rows) | all `FormEvent (FX_Items)` | the activation interval (after the clear, after the single click, before any other operation in that interval) |
| C. VarValue rows during restoration | 20 | 07:08:44.703 (all 20) | `VarValue (StdCurFormPage)` / `VarValue (StdLastFormPage)` changes | opened by the restoration dialog (~44 s after activation); **not** part of the activation interval |

Population B, in display order (verbatim event names; raw file lines 229–334 of `page-2026-10-11T07-08-01-119Z.yml`):

1. `StdFormRefresh` — starting processing (07:08:00.855)
2. `StdFormGetBoundValues` — starting processing (07:08:00.855)
3. `StdFormGetBoundValues` — result 0, handlers 0, executed 0 (07:08:00.855)
4. `StdObjectRefresh` — starting processing (07:08:00.855)
5. `StdObjectRefresh` — result 0, handlers 0, executed 0 (07:08:00.855)
6. `StdObjectSelectCurrentCompleted` — starting processing (07:08:00.949)
7. `StdObjectSelectCurrentCompleted` — result 0, handlers 0, executed 0 (07:08:00.949)
8. `StdObjectRefreshCompleted` — starting processing (07:08:00.949)
9. `StdObjectRefreshCompleted` — result 0, handlers 0, executed 0 (07:08:00.949)
10. `StdFormLoadBoundValues` — starting processing (07:08:00.949)
11. `StdFormLoadDerivedValues` — starting processing (07:08:00.949)
12. `StdFormLoadDerivedValues` — result 0, handlers 0, executed 0 (07:08:00.949)
13. `StdFormLoadBoundValues` — result 0, handlers 0, executed 0 (07:08:00.949)
14. `StdFormRefreshCompleted` — starting processing (07:08:00.949)
15. `StdFormRefreshCompleted` — result 0, handlers 0, executed 0 (07:08:00.949)
16. `StdFormRefresh` — result 0, handlers 0, executed 0 (07:08:00.949)

Verified facts about population B:
- **Count: 16.** All `FormEvent (FX_Items)`. Source `WinStudio`; Type `Diagnostics`.
- **StdFormRefresh appears** (rows 1 and 16). **StdFormRefreshCompleted appears** (rows 14 and 15). Both are identified exactly as displayed; neither was inferred.
- **EventHandler rows: none.**
- **Handler counts: zero** on every result row; executed counts zero.
- **Message text not truncated** in the accessibility text.
- **Limits:** the grid showed rows 1–6 in the viewport (`t7-07`); rows 7–16 were read from the accessibility tree only. The timestamps carry milliseconds only; no date is displayed. Attribution to the click is by timing and FX_Items name only. No isolated causation is claimed. The EXP-053 preference-application timing limitation was **not** needed to explain any missing rows (FormEvent rows did appear).
- **Expected rows not present:** `StdFormPredisplay` and `StdFormInitCompleted` (the EXP-053 open sequence) do not appear. The Form was already open in this interval, so their absence is an observed difference, not an explanation.

## 4. Pre-clear and restoration counts (the separations required by the brief)

- **36 inherited rows** (population A) were documented in T7 Part A and not attributed. The clear removed them; the verified-empty grid is in `t7-03` and `t7-04` (zero timestamped rows).
- **16 FormEvent rows** (population B) are the post-activation sequence in §3.
- **20 VarValue rows** (population C) appeared when the restoration dialog was opened with General Enabled still ON. They are not FormEvent rows and are not part of the activation interval. **Unexplained** (see §6).

## 5. Final 32 Diagnostics values (T1 baseline versus final readback)

Final readback: `t7-11` (General, accessibility `t7-11-readback-fresh-Diagnostics-General-tab.md`), `t7-12`, `t7-13`, `t7-14`, `t7-15`; raw files `page-2026-10-11T07-09-12-857Z.yml`, `07-09-18-315Z.yml`, `07-09-24-144Z.yml`, `07-09-29-052Z.yml`.

| # | Tab | Option | T1 baseline | Final readback | Match |
| --- | --- | --- | --- | --- | --- |
| 1 | General | Enabled | OFF | OFF | yes |
| 2 | General | System Information | OFF | OFF | yes |
| 3 | General | Security | OFF | OFF | yes |
| 4 | Form | Initialization (top level) | OFF | OFF | yes |
| 5 | Form | Events | ON | ON | yes |
| 6 | Form | Scripts (Call Details) | OFF | OFF | yes |
| 7 | Form | IDO Methods | OFF | OFF | yes |
| 8 | Form | Form Server | OFF | OFF | yes |
| 9 | Form | Initialization (Component) | OFF | OFF | yes |
| 10 | Form | To/From Source | OFF | OFF | yes |
| 11 | Form | List Building | OFF | OFF | yes |
| 12 | Form | To/From Control | OFF | OFF | yes |
| 13 | Form | User Interaction | OFF | OFF | yes |
| 14 | Form | Dependent Notification (Component) | OFF | OFF | yes |
| 15 | Form | Event Handler Include | ON | ON | yes |
| 16 | Form | Validator Include | OFF | OFF | yes |
| 17 | Form | Variable Initialization | OFF | OFF | yes |
| 18 | Form | Variable Value Changed | ON | ON | yes |
| 19 | Form | Variable Dependent Notification | OFF | OFF | yes |
| 20 | IDO Collections | Initialization | OFF | OFF | yes |
| 21 | IDO Collections | Commands | OFF | OFF | yes |
| 22 | IDO Collections | Update Overview | OFF | OFF | yes |
| 23 | IDO Collections | Load Overview | OFF | OFF | yes |
| 24 | IDO Collections | Update Values | OFF | OFF | yes |
| 25 | IDO Collections | Load Values | OFF | OFF | yes |
| 26 | IDO Collections | Dependent Notification | OFF | OFF | yes |
| 27 | Others | Overview | OFF | OFF | yes |
| 28 | Others | Scripts | OFF | OFF | yes |
| 29 | Others | Components | OFF | OFF | yes |
| 30 | Others | Variables | OFF | OFF | yes |
| 31 | Others | Properties | OFF | OFF | yes |
| 32 | Others | Others | OFF | OFF | yes |

**32 of 32 match T1.** Checked count: 3 (Events, Include, Value Changed), as at baseline. Limits: these are client-side values read in the same session; the Form-group mapping of duplicate names (`Initialization` ×3, `Dependent Notification` ×2, `Include` ×2) follows the T1 screenshot mapping and the accessibility order.

## 6. Preserved records, runtime state, and unresolved observations

- **Three original records, values unchanged:** dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA (T5 `t5-05`, T7 `t7-snapshot-01`, `t7-06`, `t7-16`). Supported by accessibility text; visible in `t5-04`, `t7-07`, `t7-17`.
- **Native loaded-record indicator:** `Description (Object 1 of 3)` before the click; `FX_Refresh (Object 1 of 3)` after the activation (`t7-06` line 337, `t7-05`). **In the final frame the status line is blank** (`t7-17`; no `Object` text in `t7-16`). This is the product's indicator, not an independent database count, and it is not visible at the end. Unresolved as a final-frame display.
- **Save disabled** throughout the runtime period (`t5-05`, `t7-06`, `t7-16`).
- **Unresolved, retained:**
  1. **`Event to generate` display difference.** The FX_RefreshButton row's Event to generate cell was blank in the Designer before close (`t3-01`; `t3-snapshot-00` row `FX_RefreshButton PushButton 1 0`) and read `StdFormRefresh` after reopen (`t4-05`; `t4-snapshot-01`/`02`). The Primary property read `StdFormRefresh` both times. Cause not established.
  2. **Original component Caption and Events verification limits.** Captions of the 13 original rows were read in T1 and partly in T2; their Events were read in T1 (blank for the values read; some Drag/Drop and Gain Focus cells not read, marked in the T1 report). Neither the Captions nor the Events of the 13 original rows were re-read individually after Save (T3, T4) or after the activation. No edit was made to them in any task (audits show no component edit).
  3. **Button Tab value `0`.** The new Button reports Tab `0` (the same value as `FormCollectionGrid`); the original Tab values 1–12 were not changed. Whether a Tab value of 0 is a concern for later sections is not established.
  4. **`C(<Static>)` Edit and ComboBox captions.** Read as `C(FX_ItemStatic)` and so on; their meaning is not established.
  5. **Toast phrase `global object(s)`.** Reported verbatim; not interpreted.
  6. **VarValue rows.** The restoration opening with Enabled ON added 20 rows (T7). The T6 first opening (Enabled OFF) added none net (36 before and after the OK). The T6 readback opening (Enabled ON) added none (36 before and after). EXP-053 T5 recorded 16 rows on an opening with Enabled ON. **The Enabled state therefore does not explain the pattern consistently.** Cause unresolved. (This corrects the T7 report's comparison; see §7.)
  7. **Attribution of population B.** That the StdFormRefresh rows correspond to the Button's Primary Event is supported only by the name and by timing. Not established by the log text alone.

## 7. Disclosed errors, recoveries, and corrections (verified against the audits)

| # | Event | Evidence | Effect on state | Disposition |
| --- | --- | --- | --- | --- |
| E1 | T1: a non-browser Read of the experiment record before it existed (audit T1 row 4) | `harness-audit-T1.md` Errors | none | the T1 report and record said "Errors: none" under browser calls; the record is corrected to state this read error (§8) |
| E2 | T2: a ref-based double-click on the Caption text area resolved to the dropdown arrow and opened the string-resource list (audit T2 row 26) | `t2-05`, `t2-06` (caption empty after Escape), `t2-07`, `t2-09` (literal `FX_Refresh`) | none. Escape closed the list with no selection. The final Caption is the literal `FX_Refresh`; T3 `t3-snapshot-00` and T4 `t4-snapshot-01` show no resource marker | disclosed (T2 §6); audit confirms only Escape and then typing |
| E3 | T2: `browser_type` was flagged by the controller in two rows (21, 38) | `harness-audit-T2.md` "Flagged tool usage: browser_type 2" | none. These are the native typed entries into the inline Name and Caption editors that the brief required. Not evaluate, run-code, or injected script | reviewed; no prohibited tool was used |
| E4 | T2: `t2-14` captured twice under the same filename (audit T2 rows 63 and 67) | file exists once; the second capture overwrote the first | none; the first capture showed a collapsed scroll state | disclosed in T2 §7; not re-described as evidence |
| E5 | T4: a stale Component-tab ref (`e1199`) clicked the Designer "Powered by Infor" logo (audit T4 row 39) | `t4-snapshot-02-recovery-after-stale-ref-click.md` (FX_Items tab selected; Save disabled; no dialog; no new browser tab) | none visible; no Form change | disclosed (T4 §5); audit confirms the click was view-only in intent and no mutation followed |
| E6 | T4: `t4-04` was captured three times under one filename (audit T4 rows 22, 27, 31) | the file on disk is the **third** capture (Components grid, Pane (00) rows, FormCollectionGrid, Expand tooltip; Properties on Form tab; the Button row is below the visible area) | none | **correction:** the T4 report describes `t4-04` as "Details expanded (Collections tab showing)", which is the first capture and no longer exists; the on-disk description is recorded in the record (§8). `t4-05` and `t4-06` remain the decisive Button-row and property evidence |
| E7 | T4: counts stated as "mouse/wheel 2/1; screenshots 6" | audit T4 rows 33, 34 (1 mouse move, 1 wheel) and rows 5, 9, 17, 22, 27, 31, 35, 45 (8 screenshot calls, 6 distinct files) | none | **correction** in the record (§8) |
| E8 | T7: the T7 report and record named the first snapshot `t7-snapshot-00-pre-clear-fresh-designer.md` | Glob and audit T7 row 2: the file on disk is `t7-snapshot-00-pre-clear-fresh-runtime.md`; its content is the Designer tab (tab 0, FX_Items, Save disabled, `tab [selected]`) | none | **correction** in the record (§8). The T7 report's file list is not edited (not in the T8 update scope); this audit is the authoritative mapping |
| E9 | T7: the report compares the restoration-opening VarValue rows with "a comparable opening with Enabled OFF" in T6 | T6 readback opening was Enabled **ON** and added none (36 before and after); T6 first opening was Enabled OFF (count taken after OK, 36) | none | **correction** in the record (§8): the comparison is wrong; the Enabled state does not explain the pattern (§6.6) |
| E10 | Controller summaries (for example "16 actions, 22 reads") use a classification that does not reproduce from the row tables | rows reconcile to the worker counts (§2) | none | row tables used |
| E11 | No browser error, time-out, ref-not-found, dialog, or prompt occurred in T3–T7 | audits T3–T7 `errors=0`, `prohibited-tool hits=0` | none | — |

**No unauthorized mutation was found** in the two mis-target recoveries (E2 Caption, E5 stale-ref logo click). In both, the post-recovery snapshots or screenshots show the state unchanged except for the intended value.

## 8. Corrections applied to the experiment record in this task

The record (`experiments/EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md`) was updated, and only that record plus this report were changed in T8:
1. Status line updated to the T8 result (recommended outcome accepted, observed only); the T7 status is retained as history.
2. T1 error summary: a non-browser Read error (E1) added.
3. T2 counts: the controller's flagged `browser_type` rows (E3) noted.
4. T4 counts corrected: 1 mouse move and 1 wheel; screenshot calls 8 (6 distinct files); `t4-04` captured three times, saved file is the third capture (E6, E7).
5. T7 repository-changes list: `t7-snapshot-00-pre-clear-fresh-runtime.md` (E8).
6. T7 unexplained-rows bullet: the incorrect comparison replaced with the corrected statement (E9).
7. Stale T1 "Next" heading marked superseded.
8. T8 section added with the AC-1 to AC-12 matrix and the repository-confinement statement.

The T7 report (`T7-controlled-clear-activation-and-diagnostics-restoration-report.md`) and the T4 report (`T4-…md`) are **not** edited. Their incorrect statements are corrected in the record and in this report, so that no worker output is silently rewritten.

## 9. Acceptance matrix (AC-1 to AC-12)

| AC | Result | Exact evidence (existing paths) | Observed proof | Limits |
| --- | --- | --- | --- | --- |
| **AC-1** Read-only preflight; identity; Initial Command; clean states; reviewed recipes | **Supported** | `T1-preflight-component-and-diagnostics-baseline-report.md` Parts A and A5; `t1-01-…clean-before-any-click.png`; `t1-02-…Initial-Command-Refresh-readonly.png`; `t1-06-…preflight-before-preferences.png`; `t1-12-…end-of-T1-clean-Save-disabled.png`; `t1-snapshot-FX_ItemStatic-selected-before-expand-all.md` | Designer FX_Items, User scope (status bar `ScopeName: anton.ramos@3mworks.com.ph`), Save disabled, Initial Command `Refresh`; runtime three records, Save disabled; no sign-in or prompt; recipes and EXP-027/036 lessons listed in T1 A5 | identity is displayed text; the one T1 read error (E1) was not browser |
| **AC-2** Complete pre-change component inventory; FX_RefreshButton absent; placement area; configuration surface | **Supported with limits** | `T1-…report.md` Part B1–B5; `t1-05-designer-component-grid-and-layout-baseline-before-any-change.png`; `t1-03`, `t1-04`; `T2-…unsaved-report.md` §2 (binding resolved); `t2-snapshot-00-fresh-start-designer.md` | 13 rows + 2 roots; Types and Captions recorded; `FormCollectionGrid` binding `objects` / Primary Collection Grid; Events blank for values read; FX_RefreshButton absent in `page-2026-10-11T06-42-02-501Z.yml` | Some Drag/Drop and one Gain Focus cell not read (marked); `C(<Static>)` meaning unresolved |
| **AC-3** Before Save: one PushButton; Name, literal Caption, Primary=StdFormRefresh; committed; preservation | **Supported with limits** | `T2-…unsaved-report.md` §3–§5; `t2-03-…placed-generated-name.png`; `t2-04-…Name-commit-FX_RefreshButton.png`; `t2-09-…Caption-FX_Refresh-committed-after-Enter.png`; `t2-12-…StdFormRefresh-selected-before-commit-check.png`; `t2-13-…committed-properties-readback.png`; `t2-14-…Events-Primary-readback.png`; `t2-17-…NOT-SAVED.png`; `T3-…report.md` §2 pre-save gate; `t3-01-…properties-readback.png` | exactly one PushButton; Name, Caption (literal), Primary read back after re-select; 13 original rows, roots, Initial Command unchanged | caption mis-target (E2) disclosed; Caption/Events of the 13 original rows not re-read individually; Button Tab 0 (§6.3) |
| **AC-4** One ordinary Save; Designer clean; Save disabled; Button and preservation match | **Supported with limits** | `T3-…report.md` §3–§4; `t3-02-immediate-after-single-Save-outcome.png` (toast); `t3-03-post-save-Form-tab-Initial-Command-Refresh-clean.png`; `t3-snapshot-01-post-save-fresh-designer.md`; audit T3 row 16 (only Save click) | toast "Form [FX_Items] and global object(s) were saved."; Save, Regenerate, Undo, Redo disabled; Button values equal the pre-save readback | toast phrase not interpreted; persistence beyond the open session not tested here |
| **AC-5** Clean Form-tab close; one recent-forms reopen; same User-scoped version; Button and original components unchanged; Save disabled | **Supported with limits (same session)** | `T4-…report.md` §2–§4; `t4-01-…User-scope.png`; `t4-02-…tab-absent-no-prompt.png`; `t4-03-…recent-forms.png`; `t4-05-…Event-column.png`; `t4-06-…properties-Name-Caption-Type-Primary.png`; `t4-snapshot-00`, `01`, `02` (.md); audit T4 rows 7, 13, 15 | tab absent, no prompt; reopen identity `FX_Items`, `ScopeType=User`, `ScopeName`, Version, Form Type, Is Master, Initial Command `Refresh`; one FX_RefreshButton PushButton, Caption `FX_Refresh`, Primary `StdFormRefresh`; 13 rows and 2 roots unchanged | same session only; `Event to generate` display difference unresolved (§6.1); E5 and E6 disclosed; t4-04 description corrected (§8) |
| **AC-6** Clean inherited runtime closure; one Open > Select Form; FX_Refresh rendered; three records; count; Save disabled; no manual load | **Supported with limits** | `T5-…report.md` §1–§5; `t5-01-…clean-three-records.png`; `t5-02-…tab-absent-no-prompt.png`; `t5-03-…row-selected-before-OK.png`; `t5-04-…immediate-after-single-open.png`; `t5-05-immediate-accessibility-snapshot-runtime.md`; `t5-06-…settled-after-3s.png`; audit T5 rows 7, 12, 15, 18 | one closure; one Open, one row select, one OK; FX_Refresh rendered (`button "FX_Refresh"`); three records; status `Description (Object 1 of 3)`; Save disabled; no Refresh, F4, FiP, Get More Rows | status indicator is the product's, not a count; focus highlight on Description at open (no typing) |
| **AC-7** All 32 values before any Diagnostics mutation; General Enabled OFF to ON via native OK; readback of 32 with Form Events and Include ON | **Supported with limits** | baseline: `T6-…report.md` §2; `t6-02-…General-tab-before-any-change.png`, `t6-03-…Form-tab…`, `t6-04-…IDO…`, `t6-05-…Others…`; change `t6-06-…Enabled-after-label-click-before-OK.png`; OK `t6-07-…no-prompt-diagnostics-closed.png`; readback `t6-08`, `t6-09`, `t6-10`, `t6-11`; audit T6 rows 30, 35, 57 | baseline 32/32 matched T1; Enabled checked after one label click; one OK; readback Enabled ON; other 31 unchanged; Form Events and Include checked on screenshot | client-side values, same session; Form-group mapping uses accessibility order |
| **AC-8** Native log inspected; inherited rows distinguished; one Clear to visibly empty grid; exactly one FX_Refresh activation; no extra clears, clicks, openings, refreshes | **Supported** | `T7-…report.md` §1–§3; `t7-01-pre-clear-inherited-log-36-rows-runtime-clean.png`; `t7-02-hover-…tooltip-before-clear.png`; `t7-03-post-single-clear-Log-Messages-visibly-empty-baseline.png`; `t7-04-cleared-log-baseline-accessibility-snapshot.md`; `t7-05-immediate-after-single-FX_Refresh-activation.png`; audit T7 rows 11, 14, 15, 24 | 36 inherited rows counted (`t7-snapshot-01`); visibly empty grid after one Clear (`t7-03`; zero timestamped rows in `t7-04`); one FX_Refresh click (audit row 24); no other activation | Clear identified by tooltip read through accessibility `find` (`tooltip [ref=f1e684]: Clear`), not in the screenshot |
| **AC-9** Relevant FormEvent sequence after the one activation; verbatim; order; timestamps; handler counts; StdFormRefresh and StdFormRefreshCompleted identified | **Supported with limits** | `T7-diagnostic-sequence-verbatim-after-single-FX_Refresh-activation.md` Part A (16 rows) and Part B (interpretation); raw `evidence/playwright/page-2026-10-11T07-08-01-119Z.yml` (16 FormEvent rows, lines 229–334); settled `t7-06-…accessibility-snapshot-runtime-and-log.md`; `t7-07-…first-rows.png` (rows 1–6) | 16 rows verified (§3); StdFormRefresh (rows 1, 16) and StdFormRefreshCompleted (rows 14, 15) identified; timestamps .855 (5) and .949 (11); every result row handlers 0, executed 0; no EventHandler rows | attribution by timing and name only; rows 7–16 accessibility-only; milliseconds only; `StdFormPredisplay`/`StdFormInitCompleted` absent |
| **AC-10** Immediate and settled state: three records and values; loaded count; Save disabled; no unintended change or prompt | **Supported with limits** | `t7-05`, `t7-06-…settled-after-3s…md`, `t7-07`, `t7-10-…post-OK-dialog-closed-runtime-state.png`, `t7-16-…final-preservation…md`, `t7-17-…final-preservation…png` | three records unchanged; Save disabled; FX_Refresh rendered; `FX_Refresh (Object 1 of 3)` at settled state; no prompt | final frame status line blank (§6); no business-field edit found in audits |
| **AC-11** Restore General Enabled to OFF through native OK; separate readback of all 32; Form Events, Include, Value Changed ON | **Supported** | restoration `t7-09-…Enabled-unchecked-before-OK.png`, `t7-10-…post-OK…png`; readback `t7-11-…General-tab.md`, `t7-12-…General-tab-Enabled-OFF.png`, `t7-13-…Form-tab-Events-Include-ValueChanged-ON.png`, `t7-14-…IDO-Collections-tab-all-off.png`, `t7-15-…Others-tab-all-off.png`; raw `page-2026-10-11T07-09-12-857Z.yml` etc.; audit T7 rows 44, 47, 67 | one OK; 32 of 32 match T1 (§5): Enabled OFF; Events ON; Include ON; Value Changed ON; other 28 OFF | same session, client-side; the 20 VarValue rows (§6.6) |
| **AC-12** Final action and preservation audit reconciles all counts; record holds AC-1 to AC-11 matrix, event names, timestamps, order, paths, errors, preservation findings, confinement; findings observed only | **Supported** (after the record corrections in §8) | this report §2 (action reconciliation), §3 (sequence), §5 (32 values), §7 (errors), §10 (confinement); updated record `experiments/EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md` (AC matrix, T7/T8 sections, corrections) | reconciled: 1 Button; 1 Save; 1 close and 1 reopen; 1 clean runtime closure; 1 controlled opening; 1 clear; 1 activation; 0 runtime mutations; 0 manual refreshes or extra loads; Diagnostics 1 ON change, 1 OK, then 1 OFF restoration, 1 OK, readback 32/32 | observed only; no replay, causation, cross-session persistence, or server-side completeness claimed |

## 10. Repository confinement

Worker-authored files (this task and all earlier tasks, verified by the audit Write and Edit rows):
- Experiment record: `experiments/EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md` (created in T1; edited in T2–T8).
- Evidence directory `evidence/EXP-054-R2/` only: reports `T1-…md`, `T2-…md`, `T3-…md`, `T4-…md`, `T5-…md`, `T6-…md`, `T7-…md`, `T7-diagnostic-sequence-verbatim-…md`, and this `T8-final-acceptance-and-repository-confinement-audit.md`; 67 PNG screenshots; 19 worker-requested accessibility snapshot `.md` files.

Controller-generated (not worker-authored, present in the evidence directory): `harness-audit-T1.md` to `harness-audit-T7.md`.

Tool-generated, gitignored (not worker-authored): `evidence/playwright/` accessibility snapshots and console logs written automatically by the browser tool. Not enumerated in this audit (the count was not verified).

Confinement findings:
- **No Write or Edit outside `evidence/EXP-054-R2/` or the EXP-054-R2 experiment record** appears in any audit.
- **No read or write under `tools/`, `briefs/`, `AGENTS.md`, recipes, other experiments, or memory** appears in any audit. (T1 read `AGENTS.md`, the EXP-054 blocked record, EXP-053, and recipes as references, all permitted.)
- **Not modified by any worker task:** AGENTS.md, recipes, other experiment records, `tools/`, the EXP-054 and EXP-053 evidence directories, and Mongoose application artifacts. Note that the session-start git snapshot showed pre-existing modifications under `tools/learning-harness/` and `briefs/EXP-035.brief.json` that predate this worker's session; no T1–T8 audit row touches those paths.
- **Limitation:** this worker has no shell, so `git status` was not run. Confinement is inferred from the audit rows and the Glob listings. The harness's own before/after diff is authoritative.

## 11. Recommended outcome

**Accepted, classification observed only.** Basis: all 12 acceptance checks are evidence-supported (§9) with the limits listed; repository confinement holds on the audit evidence (§10); the disclosed errors had no unauthorized effect (§7); the final 32 Diagnostics values match T1 (§5); the clean runtime and restored preferences were left untouched by this task.

Limits the operator should carry with the acceptance: same-session evidence only; `Event to generate` display difference unexplained; the VarValue-row pattern unexplained; attribution of the FormEvent rows to the click by timing and name only; the final-frame status line blank; Button Tab 0 and the original component Caption/Events re-read limits. No replay verification is claimed.

## 12. Operator-facing items (not browser work)

- Decide whether to accept EXP-054-R2 as "accepted, observed only" with the limits above.
- Decide whether the `Event to generate` difference and the Button Tab `0` value need a follow-up experiment. Neither is in this experiment's scope.
- No browser work is requested or required for acceptance.
