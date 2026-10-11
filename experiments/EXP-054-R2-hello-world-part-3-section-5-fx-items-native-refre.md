# EXP-054-R2 — Hello World Part 3 Section 5: FX_Items Native Refresh Button and Event Diagnostics (replay)

**Status (after T8, cycle 7): final audit complete. All 12 acceptance checks are evidence-supported with the limits in `evidence/EXP-054-R2/T8-final-acceptance-and-repository-confinement-audit.md` §9; repository confinement holds on the audit rows. Recommended outcome: accepted, classification observed only (operator decision). No browser calls were made in T8. Corrections to earlier worker statements are listed in T8 §7–§8 (T7 snapshot filename; T7 VarValue comparison; T4 counts and `t4-04` description; T1 non-browser read error; T2 flagged `browser_type` rows).**

Previous status (after T7, cycle 6): the controlled test is COMPLETE. One Diagnostic Log clear (verified visibly empty), one FX_RefreshButton activation, 16 FormEvent rows captured verbatim (StdFormRefresh and StdFormRefreshCompleted both appear), and General > Enabled restored from ON to OFF through one native OK. Independent 32-option readback matches the T1 baseline. Browser work for the experiment is finished; the final acceptance review remains. Same-session UI evidence only.**

Acceptance matrix (after T7):

| AC | Status | Evidence (file / what it proves) | Limit |
| --- | --- | --- | --- |
| AC-1 Read-only preflight | Supported with limits | T1 report Parts A–G; `t1-01`, `t1-02`, `t1-06`, `t1-12`; T2–T7 gates | Identity is displayed text, not a credential check |
| AC-2 Component inventory and layout | Supported with limits | T1 Part B; T2 §2 (binding resolved: `FormCollectionGrid` Primary Collection Grid / `objects`); `t1-05` | `C(<Static>)` caption meaning unresolved; Static Captions not re-read individually after save |
| AC-3 Before-Save configuration | Supported with limits | T2 §4–§5 (Name, literal Caption, Primary read back after re-select); `t2-04`, `t2-09`, `t2-13`, `t2-14`, `t2-17`; T3 §2 pre-save gate | Caption mis-target (resource list opened, no selection) disclosed in T2 §6 |
| AC-4 One ordinary Save | Supported with limits | T3 §3–§4; toast "Form [FX_Items] and global object(s) were saved."; `t3-02`, `t3-03`; post-save snapshot | Toast phrase "global object(s)" not interpreted |
| AC-5 Close and recent-forms reopen | Supported with limits (same session) | T4 §2–§4; `t4-02`, `t4-03`, `t4-05`, `t4-06`; Button Name, Caption, Type, Primary, 13 rows + 2 roots unchanged | `Event to generate` cell blank before close, `StdFormRefresh` after reopen (unexplained); not a cross-session claim |
| AC-6 Clean runtime closure and one Select Form opening | Supported with limits | T5 §1–§5; `t5-01`–`t5-06`; one Open, one OK; immediate and settled match | `Object 1 of 3` is the product indicator, not an independent count |
| AC-7 32-option baseline; Enabled ON; readback | Supported with limits | T6 §2–§4 (baseline 32/32 matched T1; one label click; one OK; readback Enabled ON, other 31 unchanged); `t6-02`–`t6-11` | Client-side values; same session |
| AC-8 One clear; one activation | Supported | T7 §2–§3; `t7-03`, `t7-04` (zero rows after one Clear); one activation; no other click on FX_Refresh | Clear identified by tooltip read through accessibility `find`; tooltip not in screenshot |
| AC-9 Event sequence after the activation | Supported with limits | `T7-diagnostic-sequence-verbatim-after-single-FX_Refresh-activation.md` (16 rows verbatim, timestamps 07:08:00.855 and .949, handler counts 0). `StdFormRefresh` (start and result) and `StdFormRefreshCompleted` (start and result) both appear | Attribution by timing and name only; no EventHandler rows; no date displayed; rows 7–16 accessibility-only |
| AC-10 Immediate and settled post-click state | Supported with limits | T7 §3, §7; `t7-05`, `t7-07`, `t7-17`; three records unchanged; Save disabled; no prompt | `Object 1 of 3` not visible in the final frame after the preference dialog closed |
| AC-11 Restoration to OFF; 32-option readback | Supported | T7 §4–§5; `t7-09`–`t7-15`; one native OK; readback Enabled OFF, other 31 match T1 (Events ON, Include ON, Value Changed ON) | Same session; client-side values |

AC-12 reconciliation (worker-reported; the harness computes repository confinement itself):
- New Button: 1 (T2 placement; T2–T3 configuration; one Name, one Caption, one Primary).
- Designer Save: 1 (T3).
- Designer close and reopen: 1 and 1 (T4).
- Clean inherited runtime closure: 1 (T5).
- Controlled runtime opening: 1 (T5).
- Diagnostic Log clear: 1 (T7).
- FX_RefreshButton activation: 1 (T7).
- Runtime mutations: 0. Extra collection loads or manual refreshes: 0.
- Diagnostics: General Enabled OFF to ON (T6, one OK), then ON to OFF (T7, one OK). Net: restored to OFF; 32-option readback verified in T7.

Recorded disclosures: a Caption ref-click that opened the string-resource list (T2, closed by Escape, no selection); a stale-ref click that landed on the Infor logo (T4, no effect); the Diagnostic Log grew by 20 `VarValue` rows when the restoration dialog was opened with Enabled ON (T7, unexplained, after the activation interval); and the EXP-053-style timing question was not triggered because FormEvent rows appeared.

**Status history.** After T6, cycle 5: T6 COMPLETE. Diagnostics General > Enabled changed OFF to ON through one native OK; independent readback of all 32 options on four tabs: Enabled ON, the other 31 match the T1 baseline. Enabled is intentionally LEFT ON for the next controlled test; restoration to OFF is outstanding. FX_Items runtime open and clean; Diagnostic Log holds the 36 inherited rows (not cleared); FX_RefreshButton not clicked. Not accepted. AC-8 to AC-12 not tested.**

Earlier status (after T5, cycle 4): T5 COMPLETE. The inherited FX_Items runtime tab was closed once (clean gate, no prompt); the saved FX_Items Form was opened once through Select Form. Immediate and settled states show the FX_Refresh button rendered, the three original records with unchanged values, status `Description (Object 1 of 3)`, and Save disabled. The Diagnostic Log holds the 36 inherited rows, uncleared. Diagnostics are still OFF (untouched). Not accepted. AC-7 to AC-12 not tested.**

- T1 (cycle 0): read-only preflight complete (see T1 section below).
- T2 (cycle 1): binding baseline resolved; one PushButton placed; Name, literal Caption, and Primary Event set and read back; preservation checked. Not saved.
- T3 (cycle 2): pre-save gate passed (Name `FX_RefreshButton`, Type PushButton, Caption `FX_Refresh`, Primary `StdFormRefresh`, Initial Command `Refresh`, components unchanged). One Designer Save click; toast "Form [FX_Items] and global object(s) were saved." Post-save: Save/Undo/Redo disabled; the same Button values and preservation checks match.

Date: 2026-10-11. Mode: LEARNING MODE. Editing scope: User. Target Form `FX_Items` (User version for `anton.ramos@3mworks.com.ph`). Planned artifact (not created): one PushButton `FX_RefreshButton`, literal Caption `FX_Refresh`, Primary Event `StdFormRefresh`. Evidence directory: `evidence/EXP-054-R2/`.

Predecessors:
- `experiments/EXP-054-hello-world-part-3-section-5-fx-items-native-refre.md` — BLOCKED before any mutation (tab-selection order in fresh worker tasks; operator outcome 2026-10-11). Its T1 baselines (`evidence/EXP-054/t1-02`, `t1-03`..`t1-06`) were read as references only; this replay re-established its own preflight.
- `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` — accepted with limits; Diagnostics restored to Enabled OFF; Events / Event Handler Include / Value Changed ON baseline.
- Transcript: `docs/mongoose/transcripts/hello-world-pt3.md` section 5 (04:23–05:00, lines 185–195).

## Run identity

- Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 0, task T1.
- Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`; task_message_id `d47437af-0feb-41ac-b1f1-7fb1c7835cf7`.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Designer tab 0 (`MGForm=FX_Items`); Web Client tab 1 (portal `favoriteContext=FX_Items`).

## Scope and authority

- Authorized by the approved replay brief (commit `393e85c`): one PushButton; Name, literal Caption, Primary Event on that Button only; one ordinary Designer Save; one Designer close and reopen; one runtime closure of the inherited tab; one Open > Select Form; temporary Diagnostics General > Enabled OFF → ON with restoration to OFF; one Diagnostic Log clear; one `FX_RefreshButton` activation.
- **The bounded instruction for this task authorized T1 only (read-only preflight).** T1 performed none of the mutations above.

## T1 — what was done and found (observed)

Full evidence: `evidence/EXP-054-R2/T1-preflight-component-and-diagnostics-baseline-report.md`.

- **Identities and tabs:** tab list first (tab 0 Designer `MGForm=FX_Items` current; tab 1 Web Client). Selects of tab 1 and tab 0 succeeded on the first attempt after the list. Designer scope bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Web Client identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in challenge; no portal banner; no dialog.
- **Designer:** clean (Save, Regenerate, Undo, Redo disabled). Form: Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Form Type `Normal`; Is Master `True`; **Initial Command `Refresh`**.
- **Component inventory (pre-change):** 13 component rows plus two container roots. `FormCollectionGrid` (Grid) with four `GridColumn` children (Captions `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`) in Pane (00); Pane (01) holds `FX_ItemStatic`, `FX_ItemEdit`, `FX_DescriptionStatic`, `FX_DescriptionEdit`, `FX_CostStatic`, `FX_CostEdit`, `FX_UMStatic`, `FX_UMCombobox` (tabs 5–12). **`FX_RefreshButton` absent.** Every Primary, Data Change, Lose Focus, and Gain Focus value read was blank.
- **Layout:** a free area inside the Form border below Unit of Measure (approx. x 360–800, y 290–470 CSS px). Proposed only; not verified by a placement.
- **Runtime:** inherited `FX_Items` tab open and clean (Save disabled), three records (`dumbbell / 45 pound iron / 45.00 / EA`; `eggs / cage free / 6.99 / DZ`; `guitar / natural acoustic / 129.99 / EA`). Not closed.
- **Diagnostics (32 options, pre-change):** General Enabled OFF; System Information OFF; Security OFF. Form: Events ON; Event Handler Include ON; Value Changed ON; other 13 Form boxes OFF. IDO Collections 7 OFF. Others 6 OFF. Three ON in total. Read by screenshot and accessibility; no option clicked; dialog closed with Close Window (no OK).
- **Diagnostic Log (inherited, not EXP-054-R2):** 36 rows (20 EXP-053 `FormEvent (FX_Items)` at 05:22:07.945 / .976; 16 EXP-053 `VarValue` at 05:25:20.269–.285). Counted 36 before and after the preference dialog opened and closed. Not cleared.
- **Mutations in T1:** none. No Button, property edit, Save, preference change, OK, log clear, runtime action, or record change.

## Acceptance status (T1 scope)

| AC | Status after T1 | Basis / limit |
| --- | --- | --- |
| AC-1 Read-only preflight | **Supported** (with limits) | Report Part A and G; `t1-01`, `t1-02`, `t1-06`, `t1-12`. Identity is displayed text, not a credential check. Recipes and EXP-027 / EXP-036 lessons reviewed (report A5). |
| AC-2 Component inventory and layout baseline | **Supported** (with limits) | Report Part B1–B5; `t1-05`. Limits: `FormCollectionGrid` Data Source (`objects` in grid, blank in Properties in EXP-054); Edit / ComboBox captions `C(<paired Static>)` unresolved; some Drag / Drop values not read (marked). |
| AC-7 (pre-change only) | **Baseline recorded** | Report Part C; `t1-07` to `t1-10`; accessibility files listed in report Part F. Enabled change, OK, and read-back not performed (not in T1). |
| AC-3 to AC-6, AC-8 to AC-12 | Not tested | Outside the T1 instruction. |

## Browser-call and error summary (T1)

- Tab operations: 1 list, 2 selects (both successful).
- Snapshots: 3 untargeted (one saved to file at worker request). Finds: 3.
- Clicks: 23 (Designer 16, all view-state; Web Client 7, read-only dialog navigation and Close Window).
- Screenshots: 12 (`t1-01` to `t1-12`).
- Browser errors: none. One non-browser Read error (T8 correction): the experiment record was read before this task had created it (controller audit T1 row 4); no effect on any state. Recovery attempts: none. Ref-not-found: none.
- Mutations: 0. Prompts accepted: 0. Typing: 0. Browser evaluate or run-code: 0.

## Unresolved findings and carry-forwards

- `FormCollectionGrid` Data Source: grid shows `objects`; Properties Data Source value not re-read in this replay. **unresolved.**
- Edit and ComboBox Captions `C(<paired Static>)`: meaning not established. **unresolved.**
- Whether the native Events interface supports the Primary picker and `StdFormRefresh` on this Form: **not tested** (no picker opened in T1).
- Cause of the EXP-054 T2 Form-tab click timeouts (`Tab 0 not found` and a timed-out click): not reproduced in T1. **unresolved.**
- Preference navigation with Enabled OFF added no log rows (observed twice across EXP-054 T1 and this T1). Cause not established.

## Knowledge state (final, after T1)

| Finding | State |
| --- | --- |
| Designer FX_Items, User scope, clean (Save disabled), 13 component rows plus 2 pane roots, no Button | observed (T1; single session) |
| Initial Command `Refresh` | observed (T1; Form tab read and screenshot `t1-02`) |
| Runtime FX_Items three records, Save disabled | observed (T1) |
| Diagnostics 32-option pre-change baseline: General Enabled OFF; Form Events ON; Event Handler Include ON; Value Changed ON; others OFF | observed (T1; client-side, single session) |
| Inherited Diagnostic Log: 36 rows (EXP-053) | observed; not EXP-054-R2 evidence |
| Tab select order rule (list before select) | observed in EXP-054 and this T1 |
| Button placement, Name, Caption, Primary Event, Save, reopen, runtime behaviour, event sequence, restoration | **not tested** |
| Replay, causation, persistence, server-side trace completeness | not tested; **not claimed** |
| Replay-verified findings | none |

## T2 — binding baseline, one Button, configuration, unsaved stop (cycle 1)

Full report: `evidence/EXP-054-R2/T2-button-placement-and-configuration-unsaved-report.md`. Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `7f20fed4-1229-4085-a227-14e61d0e568a`.

- **Baseline resolved (view only):** `FormCollectionGrid` Data Source Binding Type `Primary Collection Grid`, Binding `objects`. The T1 blank was a collapsed child group. Edit and ComboBox Captions read `C(<paired Static>)` (for example `FX_ItemEdit` = `C(FX_ItemStatic)`); their meaning is **unresolved**.
- **Placement (one):** Toolbox `Button` row armed; one canvas click at (400, 320) in the free area below Unit of Measure. Result: `button1_USER` (PushButton, Pane 1, Tab 0). Existing components unmoved.
- **Name (committed):** `FX_RefreshButton` (inline editor, Enter). Read back after re-select.
- **Caption (committed):** literal `FX_Refresh` typed into the editable combobox after a coordinate double-click on the text portion, then Enter. Read back after re-select; canvas face shows `FX_Refresh`.
- **Caption error (disclosed):** an accessibility-ref double-click resolved to the dropdown arrow and opened the string-resource list. One Escape closed it; nothing was selected; caption was empty before the corrected entry.
- **Primary (committed):** `StdFormRefresh`, chosen from the built-in list by exact accessibility match (not `StdFormRefreshCompleted`/`Current`). Read back after re-select.
- **Preservation (before Save):** 13 original components, 2 roots, bindings, Form Initial Command `Refresh`, Form Name/Version/Form Type/Is Master all unchanged vs T1. Only one row added.
- **Not done (by design):** no Designer Save, no close or reopen, no runtime action, no Diagnostics change, no log clear, no Button activation.
- **Counts:** tab list 1; explicit snapshots 3; ref clicks 8; coordinate clicks 6; mouse moves 2; wheel 4; typing 2; keypresses 3; finds 1; screenshots 18 calls (17 files; `t2-14` overwritten once). Controller audit (T8): the two `browser_type` rows (Name and Caption entries) are flagged by the controller; they are the required native text entries into the inline editors, not evaluate or run-code.
- **Classification:** observed only.

**Next:** the single ordinary Designer Save (AC-4), only on operator authorization. The unsaved Designer session holds the only copy of the configuration.

## T8 — final evidence-backed acceptance and repository-confinement audit (cycle 7)

Full audit: `evidence/EXP-054-R2/T8-final-acceptance-and-repository-confinement-audit.md`. Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `aa7369f8-d874-4884-8a2b-03a73dd03d95`. **No browser calls** (Glob, Read, Grep, Write, Edit only).

- **Action reconciliation (controller row tables):** 1 new PushButton (T2); Name, literal Caption, and Primary committed (T2); 1 ordinary Designer Save (T3 row 16, the only Save click in all audits); 1 Designer close and 1 recent-forms reopen (T4 rows 7, 13, 15); 1 clean inherited runtime closure and 1 controlled Select Form opening (T5 rows 7, 12, 15, 18); 1 Diagnostics General Enabled ON change and 1 OK (T6 rows 30, 35); 1 Diagnostic Log clear (T7 row 15); 1 FX_RefreshButton activation (T7 row 24); 1 Diagnostics restoration to OFF and 1 OK (T7 rows 44, 47). Zero manual refreshes, F4, Filter-in-Place, Get More Rows, New, Delete, extra loads, runtime data mutations, evaluate or run-code, or dialogs accepted. Browser rows: T1 44, T2 48, T3 11, T4 26, T5 15, T6 31, T7 38 (213 total).
- **Diagnostic sequence (T7, verified against the raw snapshot):** 16 FormEvent rows, all `FX_Items`, in this order: StdFormRefresh (start); StdFormGetBoundValues (start, result); StdObjectRefresh (start, result); StdObjectSelectCurrentCompleted (start, result); StdObjectRefreshCompleted (start, result); StdFormLoadBoundValues (start); StdFormLoadDerivedValues (start, result); StdFormLoadBoundValues (result); StdFormRefreshCompleted (start, result); StdFormRefresh (result). Timestamps 07:08:00.855 (rows 1–5) and 07:08:00.949 (rows 6–16). Every result row reports `num handlers for event 0, num executed 0`. No EventHandler rows. StdFormRefresh and StdFormRefreshCompleted both appear.
- **Three separate populations, not mixed:** 36 inherited pre-clear rows (not attributed, removed by the clear); 16 post-activation FormEvent rows; 20 VarValue rows at 07:08:44.703 from the restoration dialog opening (outside the activation interval).
- **Diagnostics (final readback, 32 options):** 32 of 32 match T1 (Enabled OFF; Events, Event Handler Include, Value Changed ON; other 28 OFF). Checked count 3.
- **Disclosed recoveries, verified not to cause unauthorized mutation:** T2 Caption mis-target (resource list opened, Escape, no selection, literal `FX_Refresh` committed); T4 stale-ref click on the Designer "Powered by Infor" logo (view-only intent, no mutation; FX_Items tab, Save disabled, no dialog after).
- **Corrections recorded in this task:** (1) T7 first snapshot filename (on disk: `t7-snapshot-00-pre-clear-fresh-runtime.md`; content is the Designer tab); (2) the T7 comparison of the VarValue rows with T6 was wrong (the T6 readback opening was Enabled ON and added none), so the Enabled state does not explain the pattern; (3) T4 counts (1 mouse move, 1 wheel; 8 screenshot calls, 6 files) and `t4-04` captured three times under one name (the saved file is the third capture, not the Collections tab); (4) T1 non-browser Read error before the record existed; (5) T2 flagged `browser_type` rows noted.
- **AC-1 to AC-12:** all supported with limits (matrix in the T8 audit §9). AC-12 is supported after these corrections.
- **Repository confinement:** every audited Write or Edit targets `experiments/EXP-054-R2-…md` or `evidence/EXP-054-R2/`. No read or write under `tools/`, `briefs/`, AGENTS.md, recipes, other experiments, or memory. Controller files `harness-audit-T1..T7.md` are not worker-authored. `evidence/playwright/` is tool-generated and gitignored. Git was not run (no shell); the harness diff is authoritative.
- **Recommended outcome:** accepted, classification observed only, with the limits in the T8 audit §11.
- **Tools used in this task:** non-browser tools only (Glob, Read, Grep, Write for the T8 audit, Edit for this record and the T8 audit). Browser calls: 0. Exact per-tool totals are not restated here; the audit rows and the T8 report are the record.
- **Classification:** observed only.

## T7 — controlled clear, one activation, restoration to OFF (cycle 6)

Full reports: `evidence/EXP-054-R2/T7-controlled-clear-activation-and-diagnostics-restoration-report.md` (actions, counts, readback) and `evidence/EXP-054-R2/T7-diagnostic-sequence-verbatim-after-single-FX_Refresh-activation.md` (verbatim rows; interpretation separate). Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `a7c4b0be-cdf1-42f2-b1cd-5fce40cd8256`.

- **Gate:** tab list, Web Client select, fresh snapshot. Runtime FX_Items open; Save disabled; three records; FX_Refresh rendered; no prompt.
- **Part A (clear, one):** the DevTools X control (tooltip `Clear`, read via accessibility `find` while hovered) clicked once. Grid visibly empty; accessibility shows zero rows. Inherited 36 rows documented as pre-test and not attributed.
- **Part B (activation, one):** FX_Refresh clicked once. Immediate and settled (3 s, no action): 16 FormEvent rows, all `FX_Items`, timestamps 07:08:00.855 (5 rows) and 07:08:00.949 (11 rows). `StdFormRefresh` appears (start row 1; result row 16). `StdFormRefreshCompleted` appears (start row 14; result row 15). No EventHandler rows. Every result row: `num handlers for event 0, num executed 0`. Records unchanged; Save disabled; status `FX_Refresh (Object 1 of 3)` after the click.
- **Part C (restore, one OK):** View > User Preferences > Diagnostics. General Enabled ON to OFF by label click; one native OK; dialog closed without prompt. Readback on four tabs: Enabled OFF; System Information and Security OFF; Form Events, Event Handler Include, Value Changed ON; the other 28 OFF. Closed with Close Window (no OK).
- **Unexplained log rows:** the Part C dialog opening (before the OK, Enabled still ON) added 20 `VarValue` rows at 07:08:44.703. The readback added none. These are not FormEvent rows and are outside the activation interval. **Correction (T8):** the earlier comparison with T6 was wrong. T6's first opening was Enabled OFF (36 rows after the OK; no count was taken right after that opening), and T6's readback opening was Enabled **ON** and added no rows (36 before and after). EXP-053 T5's opening with Enabled ON added 16 rows. The Enabled state therefore does not explain the pattern. Cause unresolved.
- **Final runtime check:** Save disabled; three records; FX_Refresh rendered. The status line was blank after the dialog closed (the `Object 1 of 3` indicator not visible in that frame).
- **Counts:** tab list 1; tab select 1; explicit snapshots 7; finds 1; hover 1; clicks 14 (Clear 1; activation 1; restoration 5 incl. OK 1; readback 7 incl. Close Window 1); wait 1; screenshots 12. Log clears 1; activations 1; runtime openings 0 (this task); Designer saves 0 (this task); manual refresh 0; runtime mutations 0; preference changes 1; OK 1.
- **Classification:** observed only.

## Repository changes (T7)

- Updated: this record (status; acceptance matrix; T7 section).
- Written: `evidence/EXP-054-R2/T7-controlled-clear-activation-and-diagnostics-restoration-report.md`; `evidence/EXP-054-R2/T7-diagnostic-sequence-verbatim-after-single-FX_Refresh-activation.md`.
- Written: `evidence/EXP-054-R2/t7-01`, `t7-02`, `t7-03`, `t7-05`, `t7-07`, `t7-09`, `t7-10`, `t7-12`, `t7-13`, `t7-14`, `t7-15`, `t7-17` PNGs.
- Written (browser-generated, saved at worker request): `evidence/EXP-054-R2/t7-snapshot-00-pre-clear-fresh-runtime.md` (name corrected in T8; the snapshot is of the Designer tab, tab 0), `t7-snapshot-01-pre-clear-fresh-web-client-runtime.md`, `t7-04-cleared-log-baseline-accessibility-snapshot.md`, `t7-06-settled-after-3s-accessibility-snapshot-runtime-and-log.md`, `t7-08-restoration-preferences-General-tab-before-change-fresh.md`, `t7-11-readback-fresh-Diagnostics-General-tab.md`, `t7-16-final-preservation-runtime-and-log-after-restoration.md`.
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): T7 accessibility snapshots and console logs.

## T6 — Diagnostics General > Enabled OFF to ON, one OK, 32-option readback (cycle 5)

Full report: `evidence/EXP-054-R2/T6-diagnostics-enable-and-32-option-verification-report.md`. Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `0c3c9d8d-39b5-4a9c-b620-bd2d52514f2c`.

- **Pre-change baseline:** all 32 options read before any change and matched T1 (General Enabled OFF, System Information OFF, Security OFF; Form Events ON, Event Handler Include ON, Value Changed ON, other 13 OFF; IDO Collections 7 OFF; Others 6 OFF).
- **Change (one):** General > Enabled, label click, OFF to ON. No other checkbox touched.
- **Commit (one):** native OK. Dialog closed; no prompt or error; runtime intact.
- **Readback (independent, second dialog opening):** Enabled ON; other 31 options match T1 on all four tabs. Closed with Close Window (no OK).
- **Runtime after change:** FX_Items open; three records; Save disabled; FX_Refresh rendered; no edit.
- **Log:** 36 inherited rows, unchanged before and after the OK and readback. Not cleared; none attributed to this test. No new preference-navigation rows were observed (EXP-053 T5 saw rows in a comparable step; cause unresolved).
- **Deviation from the replay brief's end-of-testing rule (intentional):** Enabled stays ON per this task's bounded instruction; restoration to OFF is outstanding and is the highest-priority next action.
- **Counts:** tab list 1; tab select 1; snapshots 1; clicks 16; screenshots 12; dialog openings 2; preference changes 1; OK 1; Close Window 1; log clears 0; Button activations 0; runtime mutations 0.
- **Classification:** observed only.

## Repository changes (T6)

- Updated: this record (status; T6 section).
- Written: `evidence/EXP-054-R2/T6-diagnostics-enable-and-32-option-verification-report.md`.
- Written: `evidence/EXP-054-R2/t6-01` to `t6-12` PNGs.
- Written (browser-generated, saved at worker request): `evidence/EXP-054-R2/t6-snapshot-00-pre-diagnostics-fresh-runtime.md`.
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): T6 accessibility snapshots and console logs.

## T5 — inherited runtime closure and one controlled Select Form opening (cycle 4)

Full report: `evidence/EXP-054-R2/T5-runtime-closure-and-controlled-single-opening-report.md`. Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `f1a0209b-59d4-4749-a925-c6169e7fd72f`.

- **Gate (before closure):** tab list, then Web Client tab selected (index 1). Fresh snapshot: FX_Items runtime tab selected; Save and Get More Rows disabled; identity bar DEM; no dialog or prompt; records `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`.
- **Closure (one):** native `Close Panel FX_Items`. Tab absent afterwards; no prompt; authenticated (identity bar unchanged); inherited log intact.
- **Open (one):** toolbar Open → Select Form (filter `FX_Items`; one row Caption `FX_Items` / Name `FX_Items`, selected by one click) → OK (once).
- **Immediate and settled (no action, 3 s wait):** `FX_Refresh` button rendered (accessibility `button "FX_Refresh"` in the FX_Items panel); three records with original visible values; status `Description (Object 1 of 3)`; Save and Get More Rows disabled. The Description field had form focus with its text highlighted at open (no typing performed; matches the EXP-053 observation).
- **Log:** 36 timestamped rows before and after the open (the open added none). Inherited rows not cleared or attributed to this test.
- **Counts:** tab list 1; tab select 1; explicit snapshots 2; finds 1; clicks 4 (close 1, Open 1, row 1, OK 1); wait 1; screenshots 5. Runtime closes 1; controlled openings 1; manual refresh 0; Button activations 0; log clears 0; runtime mutations 0; Diagnostics changes 0; Designer actions 0.
- **Classification:** observed only.

**Next:** the Diagnostics task (General > Enabled ON through User Preferences, log clear, one Button activation, restoration), only on operator authorization.

## Repository changes (T5)

- Updated: this record (status; T5 section).
- Written: `evidence/EXP-054-R2/T5-runtime-closure-and-controlled-single-opening-report.md`.
- Written: `evidence/EXP-054-R2/t5-01`, `t5-02`, `t5-03`, `t5-04`, `t5-06` PNGs.
- Written (browser-generated, saved at worker request): `evidence/EXP-054-R2/t5-snapshot-00-pre-closure-fresh-runtime.md`, `t5-05-immediate-accessibility-snapshot-runtime.md`.
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): five accessibility snapshots and one console log from T5.

## T4 — clean Designer close and recent-forms reopen verification (cycle 3)

Full report: `evidence/EXP-054-R2/T4-designer-close-and-recent-forms-reopen-verification-report.md`. Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `848bb786-b46d-4ed3-822e-62952710fd94`.

- **Pre-close gate:** tab list first; FX_Items Form tab selected with its close control; Save and Undo disabled; User scope; Initial Command `Refresh`; one `FX_RefreshButton` row.
- **Close (one):** native Form-tab close control (`closable FX_Items`). Tab absent afterwards; canvas empty; no prompt; Save disabled.
- **Reopen (one):** Form menu → recent-forms entry `FX_Items` (one such entry in the list). URL returned to `MGForm=FX_Items`.
- **Reopened identity (observed):** Name `FX_Items`; ScopeType `User`; ScopeName `anton.ramos@3mworks.com.ph`; Version `User version for user anton.ramos@3mworks.com.ph`; Form Type `Normal`; Is Master `True`; Initial Command `Refresh`; Save disabled.
- **Reopened components (observed):** 13 original rows + 2 pane roots + one `FX_RefreshButton` (PushButton, Pane 1, Tab 0). Same types, data sources, panes, containers, and tabs as T1–T3. Button Name `FX_RefreshButton`; Caption `FX_Refresh`; Type `PushButton`; Primary `StdFormRefresh`; Binding Type `None`.
- **New observation:** the Components grid `Event to generate` cell for FX_RefreshButton was blank in T2–T3 and reads `StdFormRefresh` after reopen. Primary itself was `StdFormRefresh` both times. Cause **unresolved**; observed only.
- **Disclosed error:** one click on a stale Component-tab ref landed on the "Powered by Infor" logo. No visible effect; no new tab; Save still disabled (checked by one fresh snapshot). Not a Form change.
- **Counts (corrected in T8):** tab list 1; explicit snapshots 3; clicks 8 (close 1, Form menu 1, recent-forms entry 1, plus view-only expand/tab/row clicks, and 1 stale-ref error click); finds 4; **1 mouse move and 1 wheel**; **screenshot calls 8 (6 distinct files; `t4-04` was captured three times under one filename, so the saved file is the third capture: Components grid with Pane (00) rows, not the Collections tab described above)**. Browser rows 26 (audit T4). Designer Save 0; runtime, Diagnostics, log, and Button activation 0; property edits 0.
- **Classification:** observed only; same session.

**Next:** the runtime closure of the inherited FX_Items tab and the controlled Select Form opening (AC-6), only on operator authorization.

## Repository changes (T4)

- Updated: this record (status; T4 section).
- Written: `evidence/EXP-054-R2/T4-designer-close-and-recent-forms-reopen-verification-report.md`.
- Written: `evidence/EXP-054-R2/t4-01` to `t4-06` PNGs.
- Written (browser-generated, saved at worker request): `evidence/EXP-054-R2/t4-snapshot-00-pre-close-fresh-designer.md`, `t4-snapshot-01-post-close-fresh-before-reopen.md`, `t4-snapshot-02-recovery-after-stale-ref-click.md`.
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): eight accessibility snapshots from T4.

## T3 — pre-save gate, one ordinary Designer Save, post-save verification (cycle 2)

Full report: `evidence/EXP-054-R2/T3-ordinary-save-and-post-save-verification-report.md`. Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `ca93545b-1c6e-43e2-afac-93a58d774e05`.

- **Gate (before the click):** tab list first; Designer tab 0 current, User scope, Save enabled, no prompt. Button `FX_RefreshButton (Button)`: Name `FX_RefreshButton`; Caption `FX_Refresh` (literal); Type `PushButton`; Primary `StdFormRefresh`; Binding Type `None`; Tab 0 (unchanged). Form Initial Command `Refresh`. Components: 13 original rows, two roots, and one new row, as in T2.
- **Save (one):** single click on the Designer toolbar Save. Immediate outcome: toast title `Save`, text `Form [FX_Items] and global object(s) were saved.` No error, no dialog, no retry.
- **Post-save (observed):** Save, Regenerate Form, Undo, and Redo disabled (clean). Scope bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Form Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, Form Type `Normal`, Is Master `True`, Initial Command `Refresh`. The Button's Name, Caption, Type, and Primary read back as before the Save. The 13 original rows, two roots, and their bindings match T1/T2.
- **Limits:** Caption and Events of the 13 original rows were not re-read individually after Save (no edit was made to them). Persistence beyond this open session is untested.
- **Counts:** tab list 1; explicit snapshots 2; clicks 4 (row selection, Component tab, **Save 1**, Form tab); screenshots 3; property edits 0; close or reopen 0; runtime, Diagnostics, log, and activation 0.
- **Classification:** observed only.

## Repository changes (T3)

- Updated: this record (status; T3 section).
- Written: `evidence/EXP-054-R2/T3-ordinary-save-and-post-save-verification-report.md`.
- Written: `evidence/EXP-054-R2/t3-01-pre-save-FX_RefreshButton-properties-readback.png`, `t3-02-immediate-after-single-Save-outcome.png`, `t3-03-post-save-Form-tab-Initial-Command-Refresh-clean.png`.
- Written (browser-generated, saved at worker request): `evidence/EXP-054-R2/t3-snapshot-00-pre-save-fresh-designer.md`, `t3-snapshot-01-post-save-fresh-designer.md`.
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): four accessibility snapshots from T3.

## Repository changes (T2)

- Updated: this record (status; T2 section).
- Written: `evidence/EXP-054-R2/T2-button-placement-and-configuration-unsaved-report.md`.
- Written: `evidence/EXP-054-R2/t2-01` to `t2-17` PNGs.
- Written (browser-generated, saved at worker request): `evidence/EXP-054-R2/t2-snapshot-00-fresh-start-designer.md`, `t2-snapshot-caption-editor-check.md`, `t2-snapshot-preservation-check-before-save-NOT-SAVED.md`.
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): accessibility snapshots from T2 (about 17 files) and the T1 console log.

## Repository changes (T1)

- Written: `experiments/EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md` (this record).
- Written: `evidence/EXP-054-R2/T1-preflight-component-and-diagnostics-baseline-report.md`.
- Written: `evidence/EXP-054-R2/t1-01` to `t1-12` PNGs; `evidence/EXP-054-R2/t1-snapshot-FX_ItemStatic-selected-before-expand-all.md` (browser-generated snapshot saved at worker request).
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): accessibility snapshots and one console log for the T1 window (listed in the report Part F).
- Not modified: AGENTS.md, recipes, other experiments, `tools/`, any EXP-054 or EXP-053 evidence, Mongoose application artifacts.

## Next (superseded by T8)

Superseded: this T1-era section is historical. The experiment is complete through T7, and T8 is the final audit (`evidence/EXP-054-R2/T8-final-acceptance-and-repository-confinement-audit.md`). The only remaining decision is the operator's acceptance. T1 was the entire bounded instruction at the time. Mutation tasks (Button placement, Save, Designer close and reopen, runtime closure, controlled opening, Diagnostics enable, log clear, Button activation, restoration read-back) are not authorized by this task. The next step, if the operator approves, is the T2 Button placement and property configuration, starting with one fresh tab list, a Designer selection, and one fresh snapshot.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-144135-Rh6I: completed/accepted at cycle 8, 8 of 12 worker tasks, no pauses). Observed only, not replay-verified. This replay supersedes the blocked EXP-054.

Created, for later cleanup:
- **User-scope Form `FX_Items`:** one PushButton **`FX_RefreshButton`**.
  - Caption: the literal `FX_Refresh` (no string resource).
  - Event > Primary: `StdFormRefresh`.
  - Pane 1, Tab 0, Binding Type None.
  - The button went through one Designer Save and one close/reopen.
- The 13 existing components and Initial Command = Refresh are unchanged.

Transient state:
- Diagnostics General > Enabled was turned on, then off again. A read-back matched all 32 options to the T1 baseline.
- The Diagnostic Log was cleared once.
- No data changed.

Operator screenshot review:
- `t4-06`: the reopened Designer, in User scope, shows Properties `FX_RefreshButton (Button)`: Name FX_RefreshButton, Caption FX_Refresh, Type PushButton. In the Components grid, its row reads PushButton, Pane 1, Tab 0, Event to generate `StdFormRefresh`. The FX_Refresh button is drawn below Unit of Measure.
- `t7-07`: the runtime FX_Items after one FX_Refresh click. Three rows; status "FX_Refresh (Object 1 of 3)". The log starts at 07:08:00.855 with `StdFormRefresh, starting processing`, then StdFormGetBoundValues, StdObjectRefresh, and StdObjectSelectCurrentCompleted. Every row shows "num handlers for event 0".
- `t7-12`: the reopened preferences show General > Enabled unchecked.

Learned (observed):
1. **Placing a button:** arm the Toolbox Button row, then click once on free canvas. The result is a `button1_USER` PushButton, and existing components don't move. Rename it through Properties > Name.
2. **Primary Event:** the button's Events > Primary drop-down offers the standard events, and `StdFormRefresh` can be selected there. The value can be read back by reselecting the component. The Components grid column "Event to generate" shows the same value, but it was blank before Save and close/reopen and filled after reopen. The cause is unresolved.
3. **Click sequence:** a click on a button whose Primary is StdFormRefresh logs 16 FormEvent rows: StdFormRefresh → GetBoundValues → StdObjectRefresh → SelectCurrentCompleted → StdObjectRefreshCompleted → LoadBoundValues/LoadDerivedValues → **StdFormRefreshCompleted** → StdFormRefresh(result). This is the open-time sequence from EXP-053 without StdFormPredisplay and StdFormInitCompleted. It gives the hook point for section 6: a handler on StdFormRefreshCompleted.
4. **Caption trap:** in the Caption cell, a click by accessibility ref can land on the drop-down arrow and open the string-resource list. Escape closes it without making a choice. Double-click the text area of the cell instead.
5. **Tab rule works:** list before select made every select succeed on the first attempt. This confirms the EXP-054 operator diagnosis.

Limits:
- Same session, UI level only.
- About 20 `VarValue` rows appeared when the preferences dialog was opened with Enabled on. Their cause is unexplained; they came after the activation interval.

Next: Part 3 section 6, a Prompt handler on StdFormRefreshCompleted.
