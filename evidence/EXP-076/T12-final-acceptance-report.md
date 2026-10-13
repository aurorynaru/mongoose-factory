# EXP-076 — Final acceptance report (T12)

Run `R-20261013-202602-8bAy`, experiment EXP-076, cycle 12, task **T12** (final authorized worker task).
Worker session `cff16803-d0e5-4c23-af1b-b6704853f60f`; task_message_id `754e7925-ba08-4519-9a51-f70c21de1654`.
Date 2026-10-13. Editing scope User. Target Form FX_HelloWorld01 (User scope, operator footer).

Companion record: `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (T1–T11 sections).

## 1. Recommendation

**ACCEPTED AS OBSERVED**, with the limits in §6. Every acceptance condition has decisive observed support in the UI, at the level of same-session observation and one observed close/reopen recovery. Nothing here is replay_verified, and no cross-session or database durability is claimed. The operator should review the limits in §6 (notably the FX002 baseline source and the unproven multi-line DOM property) before treating this as final.

## 2. Chronological outcome, T1–T12

| Task | Outcome (observed) | Key evidence |
| --- | --- | --- |
| T1 | Designer opened FX_HelloWorld01 (User, clean). Baseline recorded: four original Pane (01) components, Form 69; 21. Target rectangles computed: FX_AddressStatic 5.5; 3 (20; 1), FX_AddressEdit 5.5; 23.75 (37.05; 4). FX_AddressStatic, FX_AddressEdit and FX_sAddress absent. FX_Orders closed once (clean). | `t1-01`–`t1-10` |
| T2 | Binding gate: one Edit dropped (`edit1_USER`), renamed, Binding Type Property. Picker did **not** offer `object.FX_Address` (list ends …FX_Code, FX_Label…). Picker closed by its arrow, no selection. | `t2-01`–`t2-08` |
| T3 | Conditional branch: FX_HelloWorld01 closed once; save prompt `Form FX_HelloWorld01 has changed` answered **No** once (discarded only the unsaved FX_AddressEdit). Preference `Unload IDO Metadata With Forms` read **checked**, closed with Close Window (no change). Runtime FX_HelloWorld01 open and clean. | `t3-01`–`t3-06` |
| T4 | Runtime FX_HelloWorld01 closed once (clean, no prompt). Web Client `Form > Definition > Unload All Global Form Objects` invoked once (silent). Designer FX_Items closed once (clean) and `Form > Definition > Unload All Global Form Objects` invoked once with no Form open (silent). | `t4-01`–`t4-08` |
| T5 | FX_HelloWorld01 reopened once (User). New Edit dropped and renamed FX_AddressEdit; picker **offered** `object.FX_Address`; selected. | `t5-01`–`t5-04` |
| T6 | FX_AddressEdit configured: Type MultilineEdit, Binding Type Property, Binding object.FX_Address, Size 37.05; 4, Location 5.5; 23.75. | `t6-01`–`t6-07` |
| T7 | FX_AddressStatic dropped (third and last Toolbox drop), renamed; Type Static, Size 20; 1, Location 5.5; 3. Caption still blank. | `t7-01`–`t7-06` |
| T8 | Caption ellipsis on blank Caption raised the native alert `No object name given.` (dismissed with OK once). No string created. | `t8-01`–`t8-05` |
| T9 | Caption value cell on blank Caption raised the same alert (dismissed with OK once). The Caption textbox that became active was the Property Description field (not typed). No string created. | `t9-01`–`t9-04` |
| T10 | Operator-authorized corrected Caption route: first Caption click landed on the dropdown arrow (list opened; closed by the same arrow, no selection). Caption combobox then positively identified as `[active]`, `FX_sAddress` typed and Tab-committed. Ellipsis → exact prompt `String FX_sAddress does not exist. Create it?` → **Yes** once → String Value `Address` typed, Tab-committed, verified → **OK** once. Edit > String readback `FX_sAddress` = `Address`; Cancel. Form dirty, unsaved. | `t10-01`–`t10-27` |
| T11 | Single native Designer **Save** (silent response; Save and Undo disabled afterward). Clean close once (no prompt). Reopen once (toolbar Open, Select Form). All Address components and the string read back identically to pre-Save values. | `t11-01`–`t11-16` |
| T12 | Runtime FX_HelloWorld01 opened once (Form > Open > Select Form); one toolbar Refresh; FX001 and FX002 inspected by read-only record navigation. Address field visible (caption `Address:`, bordered multi-line-sized box, empty) for both records. Form clean (Save disabled). Left open and clean. | `t12-01`–`t12-06` |

## 3. Acceptance matrix (AC-1 to AC-8)

| AC | Condition | Status | Decisive evidence (exact paths) | Observation and limits |
| --- | --- | --- | --- | --- |
| AC-1 | Sources reviewed; session usable; Designer FX_HelloWorld01 User-scoped and clean; baseline component list and geometry recorded; FX_AddressStatic, FX_AddressEdit, FX_sAddress absent; target rectangles free and inside the Form | **Supported** | Identity and clean: `t1-03`, `t11-08`. Baseline list and readbacks: record T1 "Baseline" section; `t1-04`, `t1-05`, `t1-06`. Absence: `t1-07`, `t1-08`, `t1-09` (Edit > String filters `Address` and `FX_s`). Target rectangles: record T1 "Placement rule and target rectangles". Session usable at T12 start: `t12-01`. | Baseline geometry is accessibility readback, and the screenshots `t1-06` and `t1-10` show the Layout group only partly. The Strings view has no scope column. Same session only. |
| AC-2 | Binding picker of the new FX_AddressEdit offers FX_Address; conditional unload pair if needed (preference checked and unchanged; one Web Client and one Designer unload; labels recorded; Form reopened in User scope) | **Supported (after the conditional pair)** | Gate not offered: `t2-06`, `t2-07`. Preference read checked: `t3-05`. Web Client label `Form > Definition > Unload All Global Form Objects`: `t4-05` (menu), `t4-06` (after click). Designer label of the same name: `t4-07`, `t4-08`. Reopen: `t5-01`. Offered on re-check: `t5-03`; selected `t5-04`. | The unload responses were silent; server-side completion is not observable. Preference is not changed by the worker (one read, closed by Close Window). |
| AC-3 | FX_AddressEdit: Edit, Type Multi-Line Edit, Binding Type Property, Binding FX_Address, Location 5.5; 23.75, Size 37.05; 4 | **Supported** | Pre-Save: `t11-03` (Name, Type), `t11-04` (Size 37.05; 4 and Location 5.5; 23.75 visible; Binding is not visible in this image and comes from the find output). Post-reopen: `t11-13` (Name, Type); geometry and binding from accessibility readbacks (Binding Type Property; Binding object.FX_Address; Size 37.05; 4; Location 5.5; 23.75). Canvas: `t6-07`, `t10-20`, `t11-01`. | After reopen, Size, Location and Binding for FX_AddressEdit are not visible in any screenshot; the values come from readbacks. Multi-line is recorded as the Designer Type `MultilineEdit`. |
| AC-4 | FX_AddressStatic: Static, Location 5.5; 3, Size 20; 1; Caption FX_sAddress; exactly one new string FX_sAddress = Address created through the ellipsis with one Yes and value committed before OK; Edit > String readback | **Supported** | Prompt: `t10-10`. Value before OK: `t10-14`. After OK: `t10-15`. Readback: `t10-18`. Post-reopen readback: `t11-15`. Caption and geometry: `t11-02` (Name, Caption, Type), `t11-14` (Name, Caption, Type; Size and Location not visible on the image), readbacks in T11 record. | Persistence beyond the observed close/reopen is not claimed. In `t11-14` the Size and Location rows are below the visible area. |
| AC-5 | Exactly one Designer Save with the native response verbatim; Save disabled afterward; no other component changed | **Supported** | Save count 1 (harness T11 audit, one `Designer top-toolbar Save` click). Native response verbatim: **no message, dialog or error text appeared**; the control state changed to disabled. Post-Save: `t11-05`. Other components: grid rows unchanged vs pre-Save (`t11-01` visible; post-reopen rows from the find output in the T11 record, `t11-12` captured). | The response was silent, so no message text can be quoted. The original components' numeric geometry was last read in T1/T2 (not re-read after T10/T11). |
| AC-6 | Clean Designer Form closed once and reopened once; both components present with the same names, Type, geometry, Caption and binding | **Supported** | Close without prompt: `t11-06`. Reopen identity and clean state: `t11-08`. Grid rows after reopen (all six Pane 1 rows and the two GridColumns): find output in the T11 record; `t11-12` captured (not visually re-read in T12). FX_AddressEdit after reopen: `t11-13`. FX_AddressStatic after reopen: `t11-14`. String after reopen: `t11-15`. Final clean state: `t11-16`. | Observed close/reopen recovery only. Visible Size and Location for FX_AddressStatic are not in an image (accessibility readback). |
| AC-7 | Runtime FX_HelloWorld01 closed once if open, reopened once, refreshed once; for FX001 and FX002 the Code and Label values unchanged and the Address field shown (caption Address, multi-line, empty); no record edits; Form clean | **Supported, with the baseline and multi-line limits in §6** | Runtime open identity (pre-Refresh): `t12-04` (Address box blank, "(Object 1 of 1)"). Refresh and FX001: `t12-05` (Label `Factory test one`, Code `FX001`, Address box empty, caption `Address:`, "(Object 1 of 2)"). FX002: `t12-06` (Label `Factory test two`, Code `FX002`, Address box empty, caption `Address:`, "(Object 2 of 2)"). Clean: Save disabled in the find after the record navigation (T12 action 27). Record edits 0. | FX001 baseline matches the T3 observation (`t3-04`, `t3-06`) and the T4 observation (`t4-03`). FX002 baseline is not same-session: it matches earlier experiment observations (EXP-042-R3 and EXP-043; see §6). "Multi-line" is inferred from the box size and the Designer type; the runtime accessibility node is a plain textbox with no multiline attribute. |
| AC-8 | Final report with decisive evidence for AC-1 to AC-7, exact action audit reconciled to harness audits, worker-written-file inventory, final state | **Supported by this report** | §4 (audit), §5 (inventory), §7 (final state). | Harness audit `harness-audit-T12.md` was not present at the time of writing; T12 counts are the worker's own reconstruction. |

## 4. Cumulative browser-action audit (reconciled)

### 4.1 Harness audits used

`evidence/EXP-076/harness-audit-T1.md` through `harness-audit-T11.md` (controller-generated; they list attempted tool calls and results). Each line of the counts below was taken from the audit files with Grep counts, not from worker memory. `harness-audit-T12.md` was not available.

Counts from the harness audits, T1–T11 (number of matching tool-call lines):

| Tool | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | Total T1–T11 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| browser_click | 18 | 12 | 5 | 8 | 13 | 9 | 7 | 4 | 4 | 12 | 16 | **108** |
| browser_find | 24 | 29 | 7 | 12 | 22 | 25 | 20 | 10 | 6 | 21 | 33 | **209** |
| browser_take_screenshot | 13 | 8 | 6 | 8 | 4 | 9 | 6 | 5 | 4 | 27 | 16 | **106** |
| browser_type | 4 | 1 | 0 | 0 | 1 | 4 | 5 | 0 | 0 | 3 | 1 | **19** |
| browser_press_key | 4 | 1 | 0 | 0 | 2 | 5 | 5 | 0 | 0 | 2 | 0 | **19** |
| browser_tabs (list + select) | 2 | 2 | 3 | 5 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | **25** |
| Coordinate or drag calls | 0 | 1 (drag) | 0 | 0 | 1 (drag) | 0 | 1 (drag) | 0 | 0 | 0 | 0 | 3 drags |

Harness audit summary lines (line 3 of each file): errors T1 2, T3 1, T7 1; prohibited-tool hits T1 4, T2 1, T3 0, T4 0, T5 1, T6 4, T7 5, T8 0, T9 0, T10 3, T11 1. These are flagged tool-name hits and are not state effects; the flagged counts include browser_type and drag calls the brief permitted.

### 4.2 Reconciliation against the worker records

Corrections found while reconciling (the harness counts are authoritative):

- **T9 clicks:** the T9 record said 5 browser clicks; the harness shows 4.
- **T9 alerts:** the T9 record said 2 alerts dismissed. The harness shows one alert OK click in T9. The second value-cell click in T9 did not raise an alert (as the T9 narrative already states). Total `No object name given.` alerts across T8 and T9 is 2; dismissed with OK once each.
- **T11 finds:** the T11 record said 32 read-only finds; the harness shows 33.
- **T6 screenshots:** the harness shows 9 screenshot calls; the T6 record lists 7 files (`t6-01` to `t6-07`). The two extra calls are not recorded as overwrites.

These corrections are written into the companion record (T12 section).

### 4.3 T12 counts (worker reconstruction; harness audit not yet available)

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first select. |
| Tab select | 1 | Index 1 (Web Client). Tab 0 (Designer) was not selected or changed. |
| Explicit snapshot | 2 | One before the select (Designer), one after (Web Client). |
| Browser find (read-only) | 9 | Including the post-open Save check. |
| Browser click (ref) | 6 | Form menu (1); Form > Open (2); Select Form row (3); Select Form OK (4); runtime toolbar Refresh (5); record 2 row header (6). |
| Typed entries | 1 | Select Form Filter `FX_HelloWorld01` (not into the runtime Form). |
| Key presses | 1 Tab (Filter commit); 0 Escape; 0 Enter | |
| Screenshots | 6 | `t12-01` to `t12-06`. |
| Mouse moves / wheel | 0 / 0 | |
| Waits, JavaScript, console, network, navigation, refresh, restart | 0 | |
| Runtime open (Form > Open > Select Form) | 1 | |
| Runtime close | 0 | |
| Runtime Refresh | 1 | Toolbar Refresh, once. |
| Runtime record edits; runtime Save | 0 / 0 | |
| Designer Save | 0 | |
| Designer close / reopen | 0 / 0 | |
| Toolbox drops | 0 | |
| Unloads | 0 | |
| Strings created or edited | 0 | |
| Preference reads or changes | 0 / 0 | |
| Re-logins | 0 | No Session Expired modal or sign-in page appeared. |
| Recovery snapshots, ref-not-found, timeouts | 0 | |

### 4.4 Cumulative totals to report (EXP-076 across T1–T12)

| Item | Count | Source |
| --- | --- | --- |
| Toolbox drops | **3** (T2 Edit, discarded by the T3 No; T5 Edit, kept as FX_AddressEdit; T7 Static, kept as FX_AddressStatic) | harness T2, T5, T7 drag calls; records |
| Web Client unload | **1** (T4) | harness T4 line 45 |
| Designer unload | **1** (T4) | harness T4 line 57 |
| Authorized save-prompt No | **1** (T3) | harness T3 line 30 |
| Yes answers to the string prompt | **1** (T10) | harness T10 line 45 |
| FX_sAddress strings created | **1** (T10) | T10 readbacks |
| Native Designer Saves | **1** (T11) | harness T11 line 42 |
| Designer close/reopen pairs, by purpose | **Setup:** FX_Orders close (T1, other Form, clean). **Conditional-unload discard:** FX_HelloWorld01 close with No (T3), reopen (T5, post-unload binding check). **Pre-Save:** FX_Items close (T4, before the Web Client unload; clean). **Clean close and reopen:** FX_HelloWorld01 (T11, after the single Save). | records; harness T1, T3, T4, T5, T11 |
| Runtime FX_HelloWorld01 close | **1** (T4, clean, no prompt) | record T4; harness not checked for this line |
| Runtime FX_HelloWorld01 open by worker | **1** (T12, Form > Open > Select Form) | T12 counts |
| Runtime Refresh | **1** (T12) | T12 counts |
| Runtime record edits | **0** | all tasks |
| Preference changes | **0** (one read-only check in T3) | T3 |
| Re-logins | **0** | no session-expiry event in any harness audit |
| Alerts dismissed | **2** (T8 one; T9 one) | harness T8 line 44, T9 line 32 |
| Caption list openings (T10 deviation) | **1** (closed by the same arrow; no selection) | T10 record |
| Designer Save responses | silent (T11) | `t11-05` |

Runtime-open observation: when the runtime FX_HelloWorld01 was opened in T12, its tab was absent from the Web Client tab list (closed in T4), so the single open in T12 is the only worker open in EXP-076. The runtime was already open at T3 (before T3 read it); its opening is not part of the EXP-076 worker tasks recorded here.

## 5. Worker-written-file inventory (T1–T12)

Repo-relative. The harness computes repository confinement from before/after Git state; operator git review is authoritative. The controller-generated `harness-audit-T*.md` files and the browser tool's `evidence/playwright/` snapshot and console files are not listed here as worker-authored.

**Experiment record (created T1, edited T1–T12):**
- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md`

**Final report (T12):**
- `evidence/EXP-076/T12-final-acceptance-report.md` (this file)

**Screenshots, by task (count):**
- T1 (10): `evidence/EXP-076/t1-01-…` through `t1-10-…`
- T2 (8): `t2-01-…` through `t2-08-…`
- T3 (6): `t3-01-…` through `t3-06-…`
- T4 (8): `t4-01-…` through `t4-08-…`
- T5 (4): `t5-01-…` through `t5-04-…`
- T6 (7 files): `t6-01-…` through `t6-07-…`
- T7 (6): `t7-01-…` through `t7-06-…`
- T8 (5): `t8-01-…` through `t8-05-…`
- T9 (4): `t9-01-…` through `t9-04-…`
- T10 (27): `t10-01-…` through `t10-27-…`
- T11 (16): `t11-01-…` through `t11-16-…`
- T12 (6): `t12-01-webclient-state-before-runtime-open.png`, `t12-02-form-menu-open-submenu-before-select-form.png`, `t12-03-select-form-filter-fx_helloworld01-committed-before-row.png`, `t12-04-runtime-fx_helloworld01-opened-identity-before-refresh.png`, `t12-05-runtime-after-single-refresh-state.png`, `t12-06-runtime-record-2-navigated-fx002-address-presentation.png`

Full names are in each task's section of the companion record (the "Worker-written-file inventory" subsections). Harness-visible totals: 106 screenshot calls T1–T11 (harness) plus 6 in T12.

Note: the T6 record lists 7 files for 9 screenshot calls; the T1 record notes that `t1-08` was overwritten four times. The file list above is what the records name.

## 6. Limits and open items (for operator review)

1. **Same-session and close/reopen evidence only.** Nothing here is replay_verified. No cross-session or database durability is claimed. The runtime display in T12 is observed after the T11 Save and close/reopen in this session.
2. **FX002 baseline is not same-session.** The T12 values `Factory test two` / `FX002` match earlier observations: EXP-042-R3 (2026-10-10, accepted with limits) and the grid of EXP-043 (2026-10-11, `FX002/Factory test two`). No worker task read FX002 earlier in EXP-076, and T3 explicitly did not re-read record 2. The claim "unchanged" for FX002 therefore rests on those earlier observations and on zero worker record edits.
3. **FX001 baseline** matches the T3 observation (`t3-04`, `t3-06`: `Factory test one` / `FX001`) and the T4 observation (`t4-03`). Those are same-experiment observations before any worker runtime edit.
4. **"Multi-line" is not DOM-proven.** The runtime Address box is visibly taller than the single-line Label and Code fields (about 72 px against about 36 px in `t12-05`). The Designer type recorded at T6/T10/T11 is `MultilineEdit`. The runtime accessibility node for the Address box is a plain textbox without a multiline attribute (find output in T12), so the runtime multi-line property rests on the visible size and the Designer type.
5. **Caption text.** The runtime shows `Address:` with a colon. The Code and Label fields show a bare `:` with blank captions, so the colon matches the form's caption style. The caption string value itself is `Address` (T10/T11 readback).
6. **Pre-Refresh display.** Before the one Refresh, the runtime showed `(Object 1 of 1)` and blank fields (`t12-04`); after the Refresh it showed `(Object 1 of 2)` with values (`t12-05`). The cause was not investigated.
7. **Silent native responses.** The Designer Save (T11) and the two unloads (T4) returned no visible message. Their effects are inferred from the control states and the observed reopen, not from a server response.
8. **Undo `[disabled]` after the string dialog (T10).** Observed; cause not established. The Save in T11 cleared the dirty state.
9. **Original components' numeric geometry** (FX_LabelStatic, FX_LabelEdit, FX_CodeStatic, FX_CodeEdit) was last read in T1/T2 and not re-read after T10/T11; T11 compared only their grid rows (type, data source, pane, tab).
10. **Scope of the Strings view.** The Edit > String view shows no scope column, so scope-complete absence of other strings is not shown.
11. **Harness T12 audit** was not available when this report was written. The T12 counts are the worker's own reconstruction.
12. **Runtime Form left open and clean** on the Web Client (record 2 current, `(Object 2 of 2)`). The Designer tab FX_HelloWorld01 was not touched in T12 and remains open, clean, unselected at the end.
13. **Record corrections** (§4.2): T9 clicks 4 (not 5); T9 alerts 1 (not 2; 2 total with T8); T11 finds 33 (not 32); T6 screenshot calls 9 (7 files listed).

## 7. Notes on the T8–T10 Caption sequence

- The single `Caption` deviation (T10 arrow click) did not change any value: the list was closed without selection, and the Caption was committed only after the combobox was confirmed `[active]`.
- The `No object name given.` alert (T8, T9) did not recur once the Caption was set before the ellipsis. The causal link is a **candidate_procedure** from one run, not replay-verified.

## 8. Final state (end of T12)

- **Web Client tab (tab 1):** selected. Runtime FX_HelloWorld01 open, clean (Save disabled), record 2 of 2 current (FX002), no dialog, no open list. The Address box is empty for both records; no field was clicked into for entry.
- **Designer tab (tab 0):** FX_HelloWorld01, User scope, clean (Save and Undo disabled at T12 start), not acted on in T12, open but not selected.
- **Strings:** `FX_sAddress` = `Address` (created once; unchanged in T12).
- **Records:** zero runtime record edits; zero runtime Save.
- **Preferences:** unchanged.
- **Sessions:** the session stayed usable throughout T12; no re-login.
- **Dialogs:** none open in either tab.

## 9. Knowledge state

| Finding | State |
| --- | --- |
| Gate: Binding picker did not offer FX_Address before the pair; offered after the pair and reopen | observed (one run each) |
| Conditional pair: preference read checked; one Web Client and one Designer unload; both silent | observed |
| FX_AddressEdit and FX_AddressStatic configuration and readbacks before Save, and after reopen | observed |
| Exact prompt and one Yes for the string; value committed before OK; readback FX_sAddress = Address | observed |
| One native Designer Save (silent); clean close without prompt; reopen identity and components | observed (close/reopen recovery only) |
| Runtime FX001 and FX002 display: Address box visible, caption `Address:`, empty | observed |
| Runtime Code and Label values unchanged for FX001 and FX002 | observed relative to the T3/T4 (FX001) and earlier-experiment (FX002) observations; not same-session for FX002 |
| Runtime Address box is multi-line | candidate_procedure (visible size and Designer type); not DOM-proven |
| Persistence beyond the observed close/reopen; database durability | unresolved (not tested) |
| Cause of the blank-then-populated runtime display before Refresh | unresolved |
| Cause of the Undo `[disabled]` change after the string dialog (T10) | unresolved |

## 10. Open questions and blockers

- **No blocker** in T12. All runtime steps were completed within the brief.
- **Operator decision:** review the limits in §6, especially 2 (FX002 baseline source) and 4 (multi-line presentation), and accept or request a follow-up. This is outside the authorized worker-task budget (T12 is final). No further worker task is requested or started.
