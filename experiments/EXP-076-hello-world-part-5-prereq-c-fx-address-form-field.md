# EXP-076 — Hello World Part 5 Prerequisite C: add the Address field (FX_AddressStatic, Multi-Line FX_AddressEdit, Caption FX_sAddress) to the User-scoped FX_HelloWorld01 Form

**Current status (after T12, 2026-10-13; FINAL WORKER TASK COMPLETE. Runtime verified as observed: the runtime FX_HelloWorld01 Form was opened once, refreshed once and left open and clean; for FX001 (Label `Factory test one`, Code `FX001`) and FX002 (Label `Factory test two`, Code `FX002`) the Address field is shown with caption `Address:`, a multi-line-sized box and an empty value. Recommendation: ACCEPTED AS OBSERVED, with the limits in `evidence/EXP-076/T12-final-acceptance-report.md` §6 (FX002 baseline is from earlier experiments, not same-session; multi-line is not DOM-proven; same-session and close/reopen evidence only). Cumulative: Designer Save 1; Toolbox drops 3; Web Client unload 1; Designer unload 1; FX_sAddress strings created 1; runtime record edits 0; preference changes 0; re-logins 0. Authorized worker-task budget exhausted; no further worker task requested.)**

**Earlier status (after T11, 2026-10-13; AC-5 and AC-6 SATISFIED as observed for the Designer: ONE native Designer Save invoked (silent response; Save and Undo disabled afterwards); the clean Form closed once with no prompt and reopened once in User scope; all Address components, Caption, Type, Location/Size, Binding and the string `FX_sAddress` = `Address` read back identically after reopen. Designer Save count 1. Runtime (AC-7) NOT yet performed: the next and final worker task is the runtime close/reopen, Refresh and FX001/FX002 readbacks (see the T11 section). Toolbox drops 3 cumulative; strings created 1; unloads Web Client 1, Designer 1 (not repeated); runtime edits 0; re-logins 0.)**

**Earlier status (after T10, 2026-10-13; AC-4 SATISFIED as observed, Designer UNSAVED: Caption FX_AddressStatic = `FX_sAddress` committed with Tab before the ellipsis; the exact prompt `String FX_sAddress does not exist. Create it?` answered Yes once; String Value replaced with `Address`, committed with Tab, then OK once; Edit > String readback Name `FX_sAddress`, String Value `Address`; Form DIRTY (Save enabled; Undo now disabled); Designer Save count 0; close/reopen 0; unloads Web Client 1, Designer 1 (cumulative, not repeated); Toolbox drops 3 cumulative; strings created 1; `No object name given.` did NOT recur; re-logins 0. Next step (separate task): the single Designer Save, close/reopen and runtime check (see the T10 section).)**

**Earlier status (after T9, 2026-10-13; STILL BLOCKED at the Caption step (FX_sAddress NOT created): the Caption value cell of FX_AddressStatic raises the alert `No object name given.` (OK only) whenever the Caption is blank (T8 once; T9 once more on the value cell); the alert was dismissed with OK each time; the Caption identifier was NOT entered (the Caption textbox that became active is the Property Description field, not the Caption editor); no string dialog appeared; no string created; Caption still blank; Form DIRTY (Save and Undo enabled); Designer Save count 0; unloads Web Client 1, Designer 1; Toolbox drops 3 cumulative). See the T9 section. A human decision is needed before the Caption step can proceed.

**Earlier status (after T8, 2026-10-13; BLOCKED at the Caption step: the Caption ellipsis on FX_AddressStatic produced an unexpected alert `No object name given.` (OK only), not the required `String FX_sAddress does not exist. Create it?` prompt; the alert was dismissed with OK once; no string was created or changed; Caption still blank; FX_sAddress NOT created; Form DIRTY (Save and Undo enabled); Designer Save count 0; unloads Web Client 1, Designer 1; Toolbox drops 3 cumulative):** The next step needs the operator's decision on how the Caption editor should be opened (see the T8 section). Nothing else was changed.

**Earlier status (after T7, 2026-10-13; FX_AddressStatic ADDED and configured, unsaved: Name `FX_AddressStatic`, Type Static, Size `20; 1`, Location `5.5; 3`, Caption blank (not yet set); FX_AddressEdit re-read unchanged (MultilineEdit; Binding Type Property; Binding object.FX_Address; Size 37.05; 4; Location 5.5; 23.75); Form DIRTY (Save and Undo enabled); Designer Save count 0; FX_sAddress NOT created; unloads Web Client 1, Designer 1 (not repeated); Toolbox drops 3 cumulative (T2 Edit discarded by the T3 No; T5 Edit kept; T7 Static kept)):** The next step (separate task): set Caption FX_sAddress through the Caption ellipsis (the single Yes to the exact prompt; value `Address` committed with Tab before OK), verify in Edit > String, then the single Designer Save, close/reopen and the runtime check. See the T7 section.

**Earlier status (after T6, 2026-10-13; FX_AddressEdit CONFIGURED, unsaved: Type `MultilineEdit` (the native option label; see T6), Binding Type `Property`, Binding `object.FX_Address`, Size `37.05; 4`, Location `5.5; 23.75`; Form DIRTY (Save and Undo enabled); Designer Save count 0; FX_AddressStatic NOT added; FX_sAddress NOT created; unloads Web Client 1, Designer 1 (not repeated); Toolbox drops 2 cumulative (T2 discarded by the T3 No; T5 kept)):** AC-3 is observed for the Edit configuration (readbacks in the T6 section). Next step (separate task): the FX_AddressStatic drop, its Location `5.5; 3` and Size `20; 1`, the FX_sAddress string through the Caption ellipsis, the single Designer Save, close/reopen, and the runtime check.

**Earlier status (after T5, 2026-10-13; AC-2 SATISFIED for the post-unload branch: FX_HelloWorld01 reopened once in User scope (clean at reopen); one new Edit dropped and renamed FX_AddressEdit; Binding Type Property; the Binding picker OFFERED `object.FX_Address`; selected once; readback Binding `object.FX_Address`, Binding Type `Property`; Form left DIRTY with Save enabled; Save count 0; no other change; Type, geometry and FX_AddressStatic NOT yet configured):** The Toolbox drop count is now 2 (T2 Edit discarded by the single No in T3; T5 Edit kept as FX_AddressEdit). Unloads remain Web Client 1, Designer 1 (T4; not repeated). The next step (separate task): configure FX_AddressEdit (Type Multi-Line Edit; Location 5.5;23.75; Size 37.05;4), then the FX_AddressStatic drop and the string FX_sAddress, then the single Designer Save, close/reopen and runtime check. See the T5 section.

**Earlier status (after T4, 2026-10-13; the conditional unload pair is COMPLETE: Web Client unload 1, Designer unload 1, each invoked once with the visible label recorded; FX_HelloWorld01 NOT reopened; binding gate NOT re-run; AC-2 remains open until the reopen and the picker check; zero Save; zero component changes):** The Designer has no Form open (FX_Items was closed once after a confirmed clean check; no save prompt). The runtime FX_HelloWorld01 was closed once (clean; no prompt). Preference `Unload IDO Metadata With Forms` was read as checked in T3 and was not changed in T4. Next permitted step (separate task): reopen FX_HelloWorld01 in User scope, drop one new Edit, rename, and repeat the binding check (see the T4 section).

**Earlier status (after T3, 2026-10-13; conditional-unload preparation only; zero unloads; zero Save; FX_HelloWorld01 closed once with the expected save prompt answered No once (discarding only the unsaved FX_AddressEdit); preference `Unload IDO Metadata With Forms` read as checked and unchanged; runtime FX_HelloWorld01 open and clean, not closed):** Both unload counts remain **0**. The Designer no longer has FX_HelloWorld01 open; FX_Items is the only Designer tab (clean, not acted on). The next step (a separate task) is the unload pair itself, per T3's stop point (see the T3 section).

**Earlier status (after T2, 2026-10-13; binding gate only; zero unloads; zero Save; FX_Address NOT offered by the Binding picker of the new Edit `FX_AddressEdit`; conditional unload NOT performed in T2):** One Toolbox Edit was dropped, renamed FX_AddressEdit and set to Binding Type Property (the Binding then auto-assigned `object._ItemId`). The native picker lists the full property set (`object._ItemId` … `object.UDFDateTime2`, scrollable) and **does not list `object.FX_Address`**; the picker was closed with its visible arrow control (no selection; no Escape). The Form is dirty, with the unsaved FX_AddressEdit as the only pending change. The four baseline components were re-read and are unchanged. Classification: **observed only (UI level, same session); not replay_verified.** Next permitted step (separate task): the conditional EXP-067-R2 unload pair, per the brief's branch (close the Form, answer No once to its save prompt, preference read, one Web Client and one Designer unload, reopen, re-drop and recheck).

**Earlier status (after T1, 2026-10-13; read-only baseline and gates; zero Toolbox drops; zero unloads; stopped before the first Toolbox drop as the T1 instruction requires):** Baseline recorded; the four existing Form components and the Form geometry are read; FX_AddressStatic, FX_AddressEdit and FX_sAddress are proven absent; both target rectangles are computed and are free and inside the Form. **The binding gate (the Binding picker of a new Edit offering FX_Address) has NOT been performed.** Its result, and whether the conditional EXP-067-R2 unload pair is needed, is for the next task. Classification: **observed only (UI level, same session); not replay_verified.** Next permitted step: the binding gate (one Toolbox Edit drop, then the picker check), as the brief specifies.

## Run identity

- Run `R-20261013-202602-8bAy`, experiment EXP-076, cycle 0, task **T1** (read-only baseline; stop before the first Toolbox drop). Worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`; task_message_id `c3813131-7968-4722-adc7-880b8395abc8`.
- Date 2026-10-13. Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope **User** (Forms only). The FX_Address IDO property (EXP-075) is tenant-wide and is not changed here.
- Brief commits (session-start git log, not re-verified; no shell): `046eea5` (approved brief), `172c19d` (draft brief).
- Predecessors: EXP-074 (column `FX_Address`, nvarchar 150); EXP-075 (IDO property `FX_Address`, String 150, Bound to Column; accepted as observed); EXP-041-R3 (Form `FX_HelloWorld01`, User scope, created on IDO `FX_HelloWorld01`); EXP-067-R2 (unload sequence, binding gate, Toolbox drop and geometry model).
- This record did not exist at the start of T1 (the Read of `experiments/EXP-076-...md` returned "does not exist"). It was created by the T1 worker at the brief's path.
- Identity bar and status bar: Mongoose DEM configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Designer footer `[ ScopeType: User / ScopeName: <operator> ]`. (The harness masks the operator name in tool output; it is not recorded here.)

## Objective (T1 scope)

Open FX_HelloWorld01 in the Designer (User scope, clean), record the component list and geometry, compute both target rectangles, and prove the three names absent. **Stop before the first Toolbox drop.** No Toolbox drop, binding gate, unload, close/reopen of FX_HelloWorld01, Save, string creation, component or property change, runtime open, or record edit in T1.

## Sources reviewed (before the first browser action)

- `AGENTS.md` (as supplied in the task; LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation and recovery; evidence capture).
- `docs/mongoose/transcripts/hello-world-pt1.md`, Section 8 (lines 124–140: Multi-Line Edit; "change its Type to Multi-Line Edit"), Section 10 (lines 142–152: Caption ellipsis, "Confirm creation of the string value, accept the default Address text or choose custom text, then OK and Save"), and the spoken label string ID `s Address` (lines 106, 146; spoken transcription only; FX_sAddress is the brief's adapted identifier). Trust: unverified transcript.
- `docs/mongoose/transcripts/hello-world-pt5.md`, header and Section 1–2 (lines 76–111): Part 5 joins Orders to Customer and Items; the Address property and label `s address` appear in Section 2 step 5. Context only: the tutorial's Site Default scope, unprefixed names and joined-property steps are **not** approved here.
- `experiments/EXP-075-...md` (full): FX_Address IDO property; "the Designer may not offer FX_Address until the metadata is reloaded" (its Next note).
- `experiments/EXP-041-R3-...md` (lines 1–447 of 940): FX_HelloWorld01 Form created in User scope; Select Form filter behaviour (key-event entry narrowed the list; one plain fill was used for Name in the wizard).
- `experiments/EXP-067-R2-...md` (lines 1–360 of 502): the unload sequence (§6a/§6b: Web Client Form > Definition > Unload All Global Form Objects; Designer Form > Definition > Unload All Global Form Objects with the Form closed); the preference gate (View > User Preferences > Behavior > `Unload IDO Metadata With Forms`, read only, Close Window); the binding picker behaviour (one Edit drop, the picker lists the property set under Binding Type Property; Escape was used on a ComboBox picker in EXP-067-R2 T4, and the brief now forbids Escape for pickers); the Toolbox drop geometry model (x = 355 + 8.0–8.1 × column; y = 100 + 18.1 × row).
- `experiments/EXP-062-R4-...md` (targeted grep): Layout fields (Location = row; column; Size = width; height); a Toolbox drop creates an oversized default that must be set explicitly.
- `experiments/EXP-050-...md` (targeted grep): Caption ellipsis; prompt "String FX_sItem does not exist. Create it?"; default String Value; plain fill and Tab commit before OK; verification in Edit > String.
- `experiments/EXP-072-...md` (targeted grep): Form menu recent-forms route and the toolbar Open route to Select Form; Select Form OK opens a row.

Not read: `tools/` (intentionally unreadable); the secrets file; no shell or git commands.

## Browser preflight (AC-1)

| Item | Observed | Evidence |
| --- | --- | --- |
| Tab list (before the first select) | Tab 0: Web Designer (`mode=designer`, `MGForm=FX_Orders`, current). Tab 1: Mongoose Web Client (`favoriteContext=FX_HelloWorld01`). | tool output of `browser_tabs` list |
| Tab selected | Tab 0 (Designer), selected after the list; a fresh untargeted snapshot followed. Tab 1 not selected, clicked or captured. | `browser_tabs` select (tool output) |
| Session | Usable. No Session Expired modal, no Infor sign-in page, no portal notification banner, no native dialog at start. Re-login count 0. | start snapshot; `t1-01` |
| Open Form tabs at start | FX_Items (background, not selected at start) and FX_Orders (active, Save disabled). | `t1-01` |
| FX_Orders clean check | Save disabled (read-only find); Undo greyed in `t1-01`; no dialog. | find `Save`; `t1-01` |

## Designer open route (AC-1)

1. FX_Orders (the active, clean Form) was closed once through its Form-tab control (`closable FX_Orders`). No prompt. The Designer then showed FX_Items as the active tab.
2. FX_HelloWorld01 was opened once through the toolbar Open button (accessible name `Design`, folder icon) and Select Form. The Select Form dialog opened with its Filter pre-filled `FX_Orders` (stale, from an earlier use; shown in `t1-02`). The Filter was replaced by one plain fill with `FX_HelloWorld01` and committed with Tab; the grid then showed one row (Caption `FX_HelloWorld01`, Name `FX_HelloWorld01`). That row was selected by one click; OK was pressed once (`t1-02`; the dialog has no further text).
3. Verified after OK (`t1-03`): Name `FX_HelloWorld01`; Version `User version for us…`; Device Type Default; Form Type Normal; Is Master True; footer `ScopeType: User`; Save and Undo disabled; no dialog. The Designer tab set has FX_Items and FX_HelloWorld01.

Deviation note: the Form menu recent-forms route was not needed (the toolbar Open route opened the Form).

## Baseline (AC-1)

### Component list (Details > Components, Pane (00) and Pane (01) expanded; 7 rows)

| Pane | Name | Type | Data Source | Tab |
| --- | --- | --- | --- | --- |
| 00 | FormCollectionGrid | Grid | objects | 0 |
| 00 | FX_LabelGridCol | GridColumn | object.FX_Label | 1 |
| 00 | FX_CodeGridCol | GridColumn | object.FX_Code | 2 |
| 01 | FX_LabelStatic | Static | — | 3 |
| 01 | FX_LabelEdit | Edit | object.FX_Label | 4 |
| 01 | FX_CodeStatic | Static | — | 5 |
| 01 | FX_CodeEdit | Edit | object.FX_Code | 6 |

Source: the expanded Components tree (saved snapshot `evidence\playwright\page-2026-10-13T12-28-24-203Z.yml`, read by Grep and Read; the last row is FX_CodeEdit, with no further rows). Screenshot `t1-05` shows the four Pane (01) rows in the grid.

**Absence proof (AC-1):** FX_AddressStatic and FX_AddressEdit are not among the seven rows above.

### Geometry (Properties > Component > Layout; UI format: Location = Top; Left (row; column); Size = Width; Height; units Char)

| Component | Location (row; column) | Size (width; height) | Notes |
| --- | --- | --- | --- |
| FX_LabelStatic | 1; 3 | 20; 1 | Caption not read (no change needed) |
| FX_LabelEdit | 1; 23.75 | 37.05; 2 | Type Edit; Binding Type Property; Binding `object.FX_Label`; Caption readback `C(FX_LabelStatic)` (see Observations) |
| FX_CodeStatic | 3.25; 3 | 20; 1 | Type Static; Caption blank (`t1-05`: the Caption dropdown is empty) |
| FX_CodeEdit | 3.25; 23.75 | 37.05; 2 | Type Edit; Binding Type Property; Binding `object.FX_Code`; Caption readback `C(FX_CodeStatic)` |
| Form (FX_HelloWorld01) | — | 69; 21 (Unit Char) | Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; Pane 1 Scroll Bars As Needed; Synchronize FlexLayout True (`t1-06`, `t1-10`) |

Evidence: the four component readbacks are from the Designer accessibility tree (Properties panel, after one selection per row; saved snapshots `page-2026-10-13T12-28-40-770Z.yml` (FX_LabelStatic), `12-29-09-028Z.yml` (FX_LabelEdit), `12-29-21-233Z.yml` (FX_CodeStatic), `12-29-45-626Z.yml` (FX_CodeEdit)); the Form size readback is from `page-2026-10-13T12-30-42-843Z.yml` and `t1-08`/`t1-09` (Form Layout visible). Screenshots `t1-05` and `t1-06` show the Components rows and the Layout group.

**Canvas check (view only):** the four baseline components sit at the left of Pane 1 with the labels at x ≈ 380–545 and the edits at x ≈ 548–810 (clipped at the right of the visible canvas). Labels have no visible caption text (Code and Label captions are out of scope). The area below row ≈ 5.3 (y ≈ 200 on the canvas) is empty (`t1-10`).

## Placement rule and target rectangles (AC-1)

**Row spacing** = FX_CodeEdit row − FX_LabelEdit row = 3.25 − 1 = **2.25**.

| Target | Derivation (rule) | Location (row; column) | Size (width; height) | Rectangle (rows × columns) |
| --- | --- | --- | --- | --- |
| FX_AddressStatic | Column and size of FX_CodeStatic; one row spacing below it | 3.25 + 2.25 = **5.5**; **3** | **20; 1** | rows 5.5–6.5; columns 3–23 |
| FX_AddressEdit | Column and width of FX_CodeEdit; one row spacing below it; height 4 | 3.25 + 2.25 = **5.5**; **23.75** | **37.05; 4** | rows 5.5–9.5; columns 23.75–60.8 |

**Overlap check (against the four existing components and each other):**

| Existing component | Extent (rows; columns) | FX_AddressStatic (5.5–6.5; 3–23) | FX_AddressEdit (5.5–9.5; 23.75–60.8) |
| --- | --- | --- | --- |
| FX_LabelStatic | 1–2; 3–23 | no (rows) | no (rows and columns) |
| FX_LabelEdit | 1–3; 23.75–60.8 | no (rows) | no (rows) |
| FX_CodeStatic | 3.25–4.25; 3–23 | no (rows; gap 1.25) | no (rows and columns) |
| FX_CodeEdit | 3.25–5.25; 23.75–60.8 | no (columns: 23 < 23.75) | no (rows; gap 0.25) |

Between the two targets: columns 23 < 23.75, so no overlap. **Free: yes. Overlap: none.**

**Form bounds (Form 69 × 21):** FX_AddressStatic bottom 6.5 < 21, right 23 < 69. FX_AddressEdit bottom 9.5 < 21, right 60.8 < 69. **Inside the Form: yes.**

**Result: the brief's stop rule (overlap or exceeding the Form) is not triggered.** Both rectangles are free and inside the Form.

Limitation (observed, not a rule failure): the visible canvas clips Pane 1 at about column 56 (x ≈ 810). The baseline FX_CodeEdit and FX_LabelEdit (right edge 60.8) are already clipped the same way, so FX_AddressEdit (same column and width) will look the same on the canvas. The numeric rectangle is inside the Form.

## Absence proofs (AC-1)

- **FX_AddressStatic and FX_AddressEdit:** absent from the seven-row component list (above). The Pane (01) rows are exactly FX_LabelStatic, FX_LabelEdit, FX_CodeStatic and FX_CodeEdit.
- **FX_sAddress:** absent from Edit > String (Global Objects, Strings list), read after the Strings filter was committed:
  - Filter `Address` (key events; Ctrl+a then slow typing): 12 rows, all containing `Address` (`mEventDescriptionTaskEmailAddress`, `mEventDescriptionTaskEmailAddressF`, `mEventDescriptionTaskProfileEmailAddress`, `mEventDescriptionTaskProfileEmailAddressF`, `sAddress`, `sE-&mailAddress`, `sE-mailAddress`, `sE-mailTypeAddress`, `sExternalNotificationsEmailAddress`, `sExternalPromptsEmailAddress`, `sPrimaryEmailAddress`, `sReplyToEmailAddress`). No `FX_sAddress`. Evidence `t1-08` (final filtered state).
  - Filter `FX_s` (key events): 8 rows: `FX_sCost`, `FX_sCount`, `FX_sCustomerID`, `FX_sDescription`, `FX_sImport`, `FX_sItem`, `FX_sOrderNumber`, `FX_sUM`. **No `FX_sAddress`.** Evidence `t1-09`.
  - Dialog closed with **Cancel** (not Escape); no string was edited, created or selected.

## Binding gate (NOT performed in T1)

Not started. The brief's gate (one Toolbox Edit drop, rename to FX_AddressEdit, Binding Type Property, open the picker and check for FX_Address) is the first step of the next task. No Toolbox drop has been made. The conditional unload pair is therefore **not** used (unloads 0).

## Acceptance checks (T1)

| AC | Status (T1) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Established (observed, UI level).** Sources reviewed; session usable; FX_HelloWorld01 open in the Designer with Name FX_HelloWorld01, User scope and Save disabled; component list and geometry of FX_LabelStatic, FX_LabelEdit, FX_CodeStatic, FX_CodeEdit and the Form recorded; FX_AddressStatic, FX_AddressEdit and FX_sAddress absent; both target rectangles computed, free and inside the Form. | `t1-01`, `t1-03` (identity); `t1-04`, `t1-05` (component list and geometry); `t1-06` (Layout, Form size); `t1-08`, `t1-09` (absences); `t1-10` (clean final state) | The Strings view has no scope column (scope-complete absence is not shown). Accessibility readbacks for geometry (screenshots show the rows, not every Layout value). Same session only. |
| AC-2 | **Not started.** | — | Binding gate is the next task. |
| AC-3 to AC-8 | **Not started.** | — | Later tasks. |

## Observations (observed only)

1. **Form-tab close of FX_Orders:** no unsaved-changes prompt (clean Form).
2. **Toolbar Open → Select Form:** the Filter was pre-filled with the stale value `FX_Orders`. One plain fill with `FX_HelloWorld01` and a Tab commit narrowed the grid to one row (observed; one run).
3. **Details tree expand:** selecting the `Layout` treeitem did not expand its rows; a single coordinate click on its expand chevron (x 1586, y 423) did (observed; one run). Coordinate clicks are a last resort; this one was used because no semantic expander ref was offered.
4. **Global Objects Strings filter (observed; one run):** one plain fill followed by Tab did **not** narrow the list (focus moved into the list). Clicking the box, Ctrl+a, and then slow key-event typing did narrow it; the narrowed list was already visible in the screenshot taken right after the typing (no settle wait needed).
5. **Existing non-FX_ string `sAddress`:** present in the Strings list (observed). The brief's string is `FX_sAddress`; `sAddress` was not read further, edited or used, and it is not a substitute for the brief's string. Open question for the coordinator (see below).
6. **Caption readbacks (unresolved meaning):** the Caption row of the Edits reads `C(FX_LabelStatic)` (FX_LabelEdit) and `C(FX_CodeStatic)` (FX_CodeEdit); the Static FX_CodeStatic Caption reads blank (`t1-05`). The brief's Caption rule applies to FX_AddressStatic only. Interpretation of the `C(...)` form is unresolved.
7. **Stale Components selection:** after the first component row, selections moved the Properties panel to each row; no change was made to any component.

## Action audit (T1; exact counts, cumulative for this task)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 0 (Designer), after the list. |
| `browser_snapshot` (untargeted) | 1 | Start. Later state came from find, screenshot and saved tree files. |
| `browser_find` (read-only) | 24 | Includes 1 call that errored (both `text` and `regex` given; no state effect). |
| `browser_click` (ref or element) | 18 | (1) FX_Orders Form-tab close; (2) toolbar Open (`Design`); (3) Select Form row; (4) Select Form OK; (5) Details Expand Panel; (6) Components tab; (7) Components Expand; (8)–(11) four component rows; (12) Form tab; (13) Layout treeitem; (14) Edit menu; (15) Edit > String; (16) Strings filter box (first); (17) Strings filter box (second); (18) Global Objects Cancel. |
| Coordinate mouse click | 1 | Layout chevron (x 1586, y 423). |
| `browser_type` | 4 | (1) Select Form filter `FX_HelloWorld01` (one fill); (2) Strings filter `Address` (one fill; did not narrow); (3) Strings filter `Address` (slow key events); (4) Strings filter `FX_s` (slow key events). |
| Key presses | 4 | Tab ×2 (Select Form filter commit; Strings filter focus); Control+a ×2 (before each slow Strings entry). |
| Escape presses | **0** | None. |
| Waits | 1 | 2 seconds (Strings filter settle). |
| Screenshots (calls) | 13 | Ten files (`t1-01` to `t1-10`). `t1-08` was written 4 times (see inventory); the final file shows the filtered state. |
| Mouse moves / wheel | 0 / 0 | None. |
| Toolbox drops | **0** | Stopped before the first drop. |
| Binding picker openings | **0** | Not reached. |
| Unloads (Web Client / Designer) | **0 / 0** | None. |
| Preference reads / changes | **0 / 0** | Not read (not needed before the gate). |
| Designer Save | **0** | Save disabled throughout. |
| Form close / reopen (FX_HelloWorld01) | **0 / 0** | FX_Orders closed (a different Form, once). |
| Form open (FX_HelloWorld01) | 1 | Toolbar Open and Select Form OK, once. |
| Strings created, edited or overwritten | **0** | Dialog only; Cancel. |
| Components added, deleted, moved or changed | **0** | None. |
| Record edits / runtime open or Refresh | **0 / 0 / 0** | None. |
| Checkout, check-in, undo | **0** | None. |
| Cache, FormSync, deployment, regeneration | **0** | None. |
| Re-login (session-expiry procedure) | **0** | Session stayed usable. |
| Browser JavaScript / evaluate / run-code (worker-authored) | **0** | None. (Tool output contains tool-generated code wrappers only.) |
| Console or network reads | **0** | Not called. |
| Direct URL navigation / refresh / restart | **0 / 0 / 0** | None. |
| Ref-not-found errors / fresh recovery snapshots | **0 / 0** | No stale-ref error occurred. |
| Timeouts | **0** | None. |
| Dialogs answered (in-page) | 1 | Select Form OK. Global Objects closed by Cancel. No native dialog. |
| Portal banner dismissals | 0 | None visible. |

## Worker-written-file inventory (T1)

Written by this worker in T1:

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (created; this record).
- `evidence/EXP-076/t1-01-designer-start-state-before-form-close.png` (FX_Orders active, clean; FX_Items tab).
- `evidence/EXP-076/t1-02-select-form-dialog-opened-from-toolbar-open.png` (Select Form, Filter `FX_Orders` before replacement, one row `FX_Orders`).
- `evidence/EXP-076/t1-03-fx_helloworld01-designer-opened-identity-user-scope-clean.png` (FX_HelloWorld01 open; identity; User scope; clean).
- `evidence/EXP-076/t1-04-components-tab-before-expand.png` (Components tab; Pane (00) and Pane (01) collapsed).
- `evidence/EXP-076/t1-05-baseline-fx_codestatic-properties-caption-check.png` (four Pane (01) rows; FX_CodeStatic selected; Caption blank).
- `evidence/EXP-076/t1-06-form-properties-layout-readback.png` (Form tab; Layout group selected, not yet expanded; Size row not visible).
- `evidence/EXP-076/t1-07-edit-string-view-fx_saddress-absent.png` (Global Objects, Strings unfiltered).
- `evidence/EXP-076/t1-08-edit-string-view-filter-address-no-fx_saddress.png` (Strings filter `Address`, filtered; Form Layout visible: Size 69; 21, Unit Char). **Overwritten 4 times in this task** (after the first fill, after Tab, after the 2-second wait, after the slow typing); the file on disk is the final filtered state. The three unfiltered states were not kept.
- `evidence/EXP-076/t1-09-edit-string-view-filter-fx_s-list-no-fx_saddress.png` (Strings filter `FX_s`; 8 rows; no FX_sAddress).
- `evidence/EXP-076/t1-10-final-clean-state-after-string-cancel.png` (Designer clean after Cancel; Layout expanded; Size 69; 21; Save disabled).

Tool-generated, not worker-authored (outside this path): `evidence/playwright/` snapshot and console files written by the harness on browser events (for example `page-2026-10-13T12-28-24-203Z.yml`, `page-2026-10-13T12-29-45-626Z.yml`, `page-2026-10-13T12-34-44-771Z.yml`). The worker read four of these with Grep and Read (read only). They are not EXP-076 evidence.

No other file was written, edited or deleted in T1.

## Final state (end of T1)

- Mongoose Designer tab (tab 0) selected. Form **FX_HelloWorld01**, User scope (footer), **clean** (Save and Undo disabled), Name `FX_HelloWorld01`. Form Size 69; 21 (Unit Char).
- Components: the seven rows above, unchanged.
- The Global Objects dialog is closed (Cancel). No dialog open; no unsaved change; no native dialog.
- Background Designer tab **FX_Items** is still open (not selected, not acted on; its clean state was not verified in T1).
- Web Client tab (tab 1) untouched; the runtime FX_HelloWorld01 Form there is not acted on.
- Unloads 0; preference unchanged (not read).

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Designer opened FX_HelloWorld01 through the toolbar Open and Select Form (one plain fill and a Tab commit narrowed the grid to one row) | **observed** (one run) |
| FX_HelloWorld01 identity: Name, User scope, clean, Version User, Device Type Default, Form Type Normal, Is Master True | **observed** (one run; `t1-03`) |
| Baseline component list (grid + two columns + four Pane (01) components) | **observed** (one run; accessibility) |
| Baseline geometry: FX_LabelStatic 1;3 / 20;1; FX_LabelEdit 1;23.75 / 37.05;2; FX_CodeStatic 3.25;3 / 20;1; FX_CodeEdit 3.25;23.75 / 37.05;2; Form 69;21 Char | **observed** (one run; accessibility readbacks) |
| Row spacing 2.25; target rectangles FX_AddressStatic 5.5;3 (20;1) and FX_AddressEdit 5.5;23.75 (37.05;4); both free and inside the Form | **observed** (computed from the readbacks; the stop rule is not triggered) |
| FX_AddressStatic, FX_AddressEdit and FX_sAddress absent (Strings filters `Address` and `FX_s`) | **observed** (one run; UI level) |
| Strings filter: one plain fill plus Tab did not narrow; slow key-event entry after Ctrl+a did | **observed** (one run) |
| Existing non-FX_ string `sAddress` exists | **observed** (name only; not read further) |
| Caption readbacks `C(FX_LabelStatic)` and `C(FX_CodeStatic)` on the Edits | **unresolved** (meaning not established) |
| Binding picker offers FX_Address | **unresolved** (gate not performed) |
| Any replay or procedure status | **not claimed** (not replay_verified) |

## Open questions and blockers

1. **No blocker in T1.**
2. **Binding gate (next task):** the picker check and, only if FX_Address is missing, the conditional EXP-067-R2 unload pair. Nothing in T1 decides this.
3. **FX_Items background tab:** the brief asked to close "another Form (for example FX_Orders)" once. FX_Orders was closed. FX_Items remained open (clean as far as the earlier screenshot shows; not verified in T1). The coordinator should confirm whether FX_Items should also have been closed before the next step.
4. **Existing `sAddress` string:** a non-FX_ string named `sAddress` exists in this tenant. The brief uses FX_sAddress only; the existing string was not used or changed. The coordinator may want to confirm that FX_sAddress (not `sAddress`) is the intended string.
5. **Caption `C(...)` readback:** unresolved (see Observations 6).
6. **Canvas clip:** the visible canvas clips Pane 1 near column 56; the baseline edits extend to column 60.8. This is cosmetic for the check but should be noted when the new Edit is verified visually.

---

## T2 — binding gate only (cycle 1; FX_Address NOT offered; conditional unload NOT performed)

Task message `5160510d-da1e-41ed-86df-55be9bb27f34`, worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`. Run `R-20261013-202602-8bAy`, cycle 1, task T2. Bounded instruction: first binding gate only.

### Gate and identity (before any change)

- Tab list (1) before the first select; tab 0 (Designer) selected; untargeted snapshot: Designer tab FX_HelloWorld01 current; FX_Items background tab present; Name `FX_HelloWorld01`; Version `User version for user …`; footer `ScopeType: User / ScopeName: <operator>`; toolbar Save and Undo disabled; no dialog. Evidence `t2-01`.
- Session usable: no modal, no sign-in page, no portal banner. Re-login 0.
- FX_Items background tab not selected, closed or changed.

### Steps (in order)

1. One Toolbox drag: `Edit` item (76, 443) to the free canvas point (600, 380) (below the four baseline components; the Form outline is about x 358–810, y 100–478). Result: `edit1_USER` created (Type Edit; Pane 1; Tab 0; Save and Undo enabled, dirty). Drop geometry (readback): Location `15.5; 30.25`; Size `75; 21.1111111111111`. `t2-02`.
2. Rename: Name editor activated by one click on the value cell; one fill `FX_AddressEdit`; one Tab. Readback: Properties Name `FX_AddressEdit`; Components grid `FX_AddressEdit` Edit, Pane 1, Tab 0. `t2-03`.
3. Binding Type: value cell clicked (opened the combobox; `t2-04`); arrow opened the list; option `Property` selected by one click. Readback: Binding Type `Property`. Side effect (observed): the Binding auto-assigned `object._ItemId` (same as EXP-067-R2 T5).
4. Binding picker: the Binding cell was selected by the first click on its arrow; a second click on the arrow opened the list (`t2-05` shows the selected cell; `t2-06` shows the open list).
5. Gate result: the open list is sorted and begins `object._ItemId`, `object._ItemWarnings`, `object.CreateDate`, `object.CreatedBy`, **then `object.FX_Code`** (no `object.FX_Address` between `CreatedBy` and `FX_Code`, where it would sort). The accessibility option list also lists `object.FX_Code`, `object.FX_Label`, `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, `object.RowPointer`, `object.UDFDateTime1` … `object.UpdatedBy`. A text search for `FX_Address` in the page returned only the component name `FX_AddressEdit` and the Name field (no option). **Result: FX_Address NOT offered.**
6. Picker closed with its visible arrow control (the combobox trigger). **No option was selected. Escape was not pressed.** Binding readback after close: `object._ItemId` (unchanged). `t2-07`.
7. Dialog check: no dialog. Designer Save enabled (dirty, expected). Save not pressed.

### Conditional unload: NOT performed in T2

Per the T2 instruction, the picker did not offer FX_Address, but the conditional unload is a separate later step. Nothing else was done: no Designer close, no save-prompt answer, no preference read, no Web Client unload, no Designer unload, no reopen, no second drop. The Form is therefore dirty with the unsaved `FX_AddressEdit` as the only pending change (`t2-08`).

### Post-gate read-only checks (no change)

- FX_AddressEdit reselected (view only): Binding Type `Property`; Binding `object._ItemId`. The Components grid shows FX_AddressEdit with a blank Data Source column (the grid value appears to lag the editor; observed, not explained).
- Baseline components re-read (view only; rows selected one at a time; no edit): FX_LabelStatic Location `1; 3`, Size `20; 1`; FX_LabelEdit `1; 23.75`, `37.05; 2`; FX_CodeStatic `3.25; 3`, `20; 1`; FX_CodeEdit `3.25; 23.75`, `37.05; 2`. All match T1.
- Form-level Size and Layout not re-read in T2 (no change; T1 value `69; 21` Char stands).
- Visual limit: the component Location and Size rows are not visible in the screenshots (they lie below the visible Properties area); the readbacks are accessibility values.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed (identity, clean-before-drop, baseline readbacks) | `t2-01`; accessibility readbacks in this section | Geometry screenshots do not show the Location/Size rows; readbacks are accessibility values. |
| AC-2 | **Gate result: FX_Address NOT offered** by the picker of the new Edit. Conditional unload pair **not performed** (deferred). AC-2 is therefore **not satisfied** and remains open. | `t2-06` (picker open: list shows `object.CreatedBy` then `object.FX_Code`; no FX_Address); `t2-07` (picker closed, Binding unchanged) | The list may not be scrolled to its end; alphabetical placement makes the absence conclusive for this ordering only. |
| AC-3 to AC-8 | Not started (Type, Location, Size, Binding FX_Address, FX_AddressStatic, string, Save, reopen, runtime all outstanding) | — | — |

### Action audit (T2; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 0 (Designer). |
| `browser_snapshot` (untargeted) | 1 | Start. |
| `browser_find` (read-only) | 27 | Includes the gate searches for `object.`/`listbox`/`option` and `FX_Address`; the geometry and Save checks. No errored call. |
| `browser_click` (ref) | 12 | Name cell (1); Binding Type value (1); Binding Type arrow (1); Property option (1); Binding picker cell (1); Binding picker arrow, second (1); picker visible arrow close (1); component row selections (4 on baseline; 1 on FX_AddressEdit). |
| Toolbox drag (mouse) | 1 | `edit1_USER` drop (one drop). |
| `browser_type` | 1 | Name `FX_AddressEdit` (one fill). |
| Key presses | 1 | Tab (Name commit). Escape **0**. |
| Waits | 0 | None. |
| Screenshots | 8 | `t2-01` to `t2-08`. |
| Toolbox drops | **1** | Edit only. No Static drop. |
| Components added | **1** | `FX_AddressEdit` (renamed `edit1_USER`). |
| Binding picker openings | **1** | Gate; closed without selection. |
| Binding selections | **0** | None. |
| Unloads (Web Client / Designer) | **0 / 0** | Not performed (gate: not offered; conditional branch deferred). |
| Preference reads / changes | **0 / 0** | Not read (not needed in T2). |
| Designer Save | **0** | Not pressed. |
| Form close / reopen (FX_HelloWorld01) | **0 / 0** | None. |
| Strings created or edited | **0** | None. |
| Existing components changed or moved | **0** | Four baseline components selected for read-only readback only. |
| FX_Items background Form | **0** | Not selected, changed or closed. |
| Runtime open / Refresh / record edits | **0 / 0 / 0** | None. |
| Checkout, cache, FormSync, deployment | **0** | None. |
| Re-login | **0** | Session usable. |
| Browser JavaScript / console / network | **0** | None (no worker-authored script). |
| Direct navigation / refresh / restart | **0 / 0 / 0** | None. |
| Ref-not-found / fresh recovery snapshots / timeouts | **0 / 0 / 0** | None. |
| Dialogs answered | **0** | No dialog appeared. |

Cumulative T1 + T2 (for AC-8 later): T1 browser calls were counted in the T1 audit above (tab lists 1, selects 1, snapshots 1, finds 24, clicks 18, coordinate click 1, types 4, keys 4, waits 1, screenshots 13). T1 Toolbox drops 0, unloads 0, Designer Save 0, Form open 1, FX_Orders close 1.

### Worker-written-file inventory (T2)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T2 section).
- `evidence/EXP-076/t2-01-gate-start-designer-identity-clean.png`
- `evidence/EXP-076/t2-02-after-edit-drop-new-component-selected.png`
- `evidence/EXP-076/t2-03-edit1-user-name-cell-activated-before-rename.png`
- `evidence/EXP-076/t2-04-binding-type-dropdown-opened-before-property.png`
- `evidence/EXP-076/t2-05-binding-cell-selected-after-property-autoassign.png`
- `evidence/EXP-076/t2-06-binding-picker-open-fx_address-not-offered.png`
- `evidence/EXP-076/t2-07-binding-picker-closed-no-selection-unsaved-edit.png`
- `evidence/EXP-076/t2-08-final-state-unsaved-fx_addressedit-binding-readback.png`

No other file was written. Tool-generated `evidence\playwright\` snapshot and console files were written by the harness and were not read in T2.

### Final state (end of T2)

- Designer tab (tab 0) selected. FX_HelloWorld01, User scope, **dirty** (Save enabled; Undo enabled). Pending change: the unsaved `FX_AddressEdit` (Type Edit; Pane 1; Tab 0; Name `FX_AddressEdit`; Binding Type `Property`; Binding `object._ItemId`; Location and Size still the drop default `15.5; 30.25` and `75; 21.1111111111111`).
- FX_AddressEdit selected in the Properties panel. No dialog open. No picker open.
- Background FX_Items tab untouched.
- No unload, no Save, no string, no reopen, no runtime action.

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| The Binding picker of a new Edit, under Binding Type `Property`, lists the full sorted property set but **does not list `object.FX_Address`** (single run; no unload had been performed in EXP-076 before this gate) | **observed** (one run) |
| Changing Binding Type to `Property` auto-assigns `object._ItemId` | **observed** (repeats EXP-067-R2 T5) |
| Picker closed by its visible arrow control without a selection (no Escape) | **observed** |
| Baseline geometry re-read: FX_LabelStatic `1; 3`/`20; 1`; FX_LabelEdit `1; 23.75`/`37.05; 2`; FX_CodeStatic `3.25; 3`/`20; 1`; FX_CodeEdit `3.25; 23.75`/`37.05; 2` | **observed** (accessibility; same as T1) |
| Whether the conditional unload pair makes FX_Address offered | **unresolved** (the pair is deferred to the next task) |
| Grid Data Source blank for FX_AddressEdit while the editor shows `object._ItemId` | **unresolved** (observed; not explained) |

### Open questions and blockers (T2)

1. **AC-2 is not satisfied:** the picker did not offer FX_Address. Per the brief, the conditional unload pair is the next step (in a separate task). It is not performed in T2.
2. **Pending dirty state:** the Form stays dirty with the unsaved FX_AddressEdit. The conditional-unload branch's save-prompt answer (No) is the approved discard, and it discards only that drop.
3. **Auto-assigned binding:** the new Edit's Binding is `object._ItemId` (not `FX_Address`). The next step must set Binding to FX_Address (only after the picker offers it).
4. **FX_sAddress vs existing `sAddress`:** unchanged. The intended resource is `FX_sAddress`; the existing non-FX_ `sAddress` was not read or used. The `C(...)` Caption expressions were not investigated (per the T2 instruction).
5. **Blocker:** none in T2 apart from the gate result above.

---

## T3 — conditional-unload preparation (cycle 2; stopped before either unload; both unload counts 0)

Task message `1d4fed22-f422-4d70-ab89-96b8cc9d4ed6`, worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`. Run `R-20261013-202602-8bAy`, cycle 2, task T3. Bounded instruction: prepare the conditional unload; stop before either unload; no reopen, no added component, no string, no Save, no refresh, no runtime change.

### Gate (before any change)

- Tab list (2) before the first select. Tab 0 (Designer) selected. Untargeted snapshot: FX_HelloWorld01 is the selected Designer tab; FX_Items is the background tab; footer `ScopeType: User`; Save and Undo **enabled** (dirty); no dialog.
- Designer Components list (screenshot `t3-01`): FX_LabelStatic (Pane 1, Tab 3), FX_LabelEdit (Pane 1, Tab 4), FX_CodeStatic (Pane 1, Tab 5), FX_CodeEdit (Pane 1, Tab 6), FX_AddressEdit (Pane 1, Tab 0). The only addition relative to the baseline is FX_AddressEdit; the Properties panel shows FX_AddressEdit (Edit).
- Session usable: no modal, sign-in page or banner. Re-login 0.

### Designer close and save prompt (answered once)

1. FX_HelloWorld01 Form-tab close control (`closable FX_HelloWorld01`) clicked once.
2. The save prompt appeared (alertdialog; screenshot `t3-02`). Verbatim text:
   - Title: `Infor Mongoose Application Development Framework - FX_HelloWorld01`
   - Body line 1: `Form FX_HelloWorld01 has changed`
   - Body line 2: `Do you want to save the form definition?`
   - Buttons: `Yes` (default focus), `No`, `Cancel`.
3. **The prompt was the expected one** and the sole discarded change is the unsaved FX_AddressEdit (confirmed by the Components list in `t3-01`). **No** answered once (button click, not Enter). Yes was not pressed. Cancel was not pressed.
4. Result (screenshot `t3-03`): no dialog; FX_HelloWorld01 closed; the Designer tab list contains only **FX_Items**, active, Save and Undo **disabled**, footer `ScopeType: User`. The FX_Items tab became the active tab as a consequence of the close; it was not selected, clicked or changed by the worker.

Observed: no Save was performed; the Form was **not** saved (the save prompt was answered No, so FX_AddressEdit was discarded, as the brief's approved single discard).

### Web Client preference reading (read-only)

1. Tab list was already taken in this task; tab 1 (Web Client) selected. Fresh screenshot `t3-04`: the Explorer view, the runtime `FX_HelloWorld01` tab active (status `(Object 1 of 2)` at that time; rows `Factory test one` / FX001 and a second row), Save disabled.
2. View menu (one click) → `User Preferences...` (one click). Behavior page.
3. Read (accessibility and screenshot `t3-05`): `Unload IDO Metadata With Forms` = **[checked]**. The other Behavior checkboxes were not touched (Display Captions in Most Recently Used forms list [checked]; Disable Form Aliases For Session [unchecked]; others as shown).
4. Closed with the dialog's `Close Window` control (title-bar close; the dialog has no Cancel). **OK was not pressed.** No preference changed.
5. After close (screenshot `t3-06`): the runtime `FX_HelloWorld01` tab is still active. Its status bar now reads `Show Configuration Name On Caption (Object 1 of 1)` (it previously read `(Object 1 of 2)`); this appears to be focus-related text in the status bar after the preference dialog closed. Not investigated further (observed only).

### Runtime FX_HelloWorld01 (read-only; not closed)

- Open: yes (the active `FX_HelloWorld01` tab, `t3-04` and `t3-06`).
- Clean: toolbar Save **disabled** (accessibility, and the Save icon is greyed in `t3-06`).
- Records visible: record 1 shows `Factory test one` in the upper field and `FX001` in the lower field (the field-to-column mapping is inferred from the layout, not read back). Record 2 not re-read in T3.
- Not closed (the brief: "do not close it yet"). The runtime close belongs to the unload branch (close the clean runtime Form before the Web Client unload).

### Unload status

- Web Client `Form > Definition > Unload All Global Form Objects`: **not invoked**. Count **0**.
- Designer `Form > Definition > Unload All Global Form Objects`: **not invoked**. Count **0**. (The menu was not opened.)
- The unload menu labels were **not** captured in T3 (not needed before a decision; the brief's stop point is before either unload). The labels recorded in EXP-067-R2 (Web Client: `Form > Definition > Unload All Global Form Objects`; Designer: same label with the Form closed) are unverified here.

### Acceptance checks (T3)

| AC | T3 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Unchanged from T1 (baseline and absences) | `t1-*`, `t2-*` | — |
| AC-2 | **Not satisfied.** Binding gate still shows FX_Address not offered (T2). The conditional pair is still NOT performed; its preparation (Form close with No; preference read as checked) is complete in T3. | `t2-06`, `t2-07`; T3 `t3-02`, `t3-03`, `t3-05` | The unload pair is the next task. |
| AC-3 to AC-8 | Not started | — | — |

### Action audit (T3; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 2 | Index 0 (Designer); index 1 (Web Client). |
| `browser_snapshot` (untargeted) | 2 | Depth 6 (Designer start); depth 4 (Web Client). |
| `browser_find` (read-only) | 7 | Save-prompt detection; tab/dialog check after No; View menu locate; User Preferences locate; checkbox locate; Close Window locate; runtime Save check. |
| `browser_click` | 5 | (1) FX_HelloWorld01 Form-tab close; (2) save prompt **No**; (3) Web Client View menu; (4) User Preferences...; (5) preferences Close Window. |
| Typed entries / key presses / Escape | 0 / 0 / 0 | None. |
| Waits / mouse / wheel | 0 / 0 / 0 | None. |
| Screenshots | 6 | `t3-01` to `t3-06`. |
| Save-prompt answers | **1** | No (once). Yes 0. Cancel 0. |
| Designer Form close / reopen | **1 / 0** | FX_HelloWorld01 closed once; not reopened. FX_Orders was closed in T1 (not T3). |
| Unloads (Web Client / Designer) | **0 / 0** | Not invoked. |
| Preference reads / changes | **1 / 0** | Read as checked; closed by Close Window; no change. |
| Designer Save | **0** | None. |
| Toolbox drops / components added / components changed | **0 / 0 / 0** | None in T3. |
| Strings created or edited | **0** | None. |
| Runtime close / reopen / Refresh / record edits | **0 / 0 / 0 / 0** | Runtime FX_HelloWorld01 left open and clean. |
| Re-login | **0** | Session usable. |
| JavaScript / console / network | **0** | None. |
| Direct navigation / refresh / restart | **0 / 0 / 0** | None. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | None. |
| Dialogs answered | **1** | Save prompt (No). The preferences dialog was closed (not an answer). |

Cumulative calls across the task: 23 (tab lists 1; selects 2; snapshots 2; finds 7; clicks 5; screenshots 6).

### Worker-written-file inventory (T3)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T3 section).
- `evidence/EXP-076/t3-01-pre-close-dirty-fx_helloworld01-sole-unsaved-fx_addressedit.png`
- `evidence/EXP-076/t3-02-save-prompt-form-fx_helloworld01-has-changed.png`
- `evidence/EXP-076/t3-03-after-no-fx_helloworld01-closed-fx_items-background-state.png`
- `evidence/EXP-076/t3-04-webclient-state-before-preference-read.png`
- `evidence/EXP-076/t3-05-user-preferences-unload-ido-metadata-checked-read-only.png`
- `evidence/EXP-076/t3-06-after-preferences-close-window-webclient-runtime-state.png`

No other file was written. Harness snapshot and console files under `evidence\playwright\` were written by the tool and were not read in T3.

### Final state (end of T3)

- **Designer:** FX_HelloWorld01 **closed** (not reopened; its unsaved FX_AddressEdit drop was discarded by No). The only open Designer Form is **FX_Items** (active; Save and Undo disabled; User scope; not changed by the worker). No dialog.
- **Web Client:** tab 1 selected; the runtime **FX_HelloWorld01** Form is open, active and clean (Save disabled). No dialog. The User Preferences dialog is closed (Close Window; not OK).
- **Preference:** `Unload IDO Metadata With Forms` = checked (unchanged).
- **Unloads:** Web Client 0; Designer 0.

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| Closing FX_HelloWorld01 (User scope, dirty, sole unsaved change FX_AddressEdit) raised the save prompt `Form FX_HelloWorld01 has changed` / `Do you want to save the form definition?` with Yes (default), No, Cancel | **observed** (one run; `t3-02`) |
| Answering No discards the unsaved drop; the Designer then has no FX_HelloWorld01 tab and FX_Items becomes active (Save disabled) | **observed** (one run; `t3-03`) |
| `Unload IDO Metadata With Forms` reads checked in the Web Client User Preferences Behavior page, closed by Close Window without change | **observed** (one run; `t3-05`) |
| Runtime FX_HelloWorld01 is open, active and clean (Save disabled) before any unload | **observed** (one run; `t3-04`, `t3-06`) |
| Status-bar text changed from `(Object 1 of 2)` to `Show Configuration Name On Caption (Object 1 of 1)` after the preference dialog closed | **observed**; cause **unresolved** |
| Whether the Designer unload is accepted with FX_Items open (the brief says "with the Designer Form closed"; EXP-067-R2 invoked it with no Form open) | **unresolved** |

### Open questions and next step (T3)

1. **Next step (separate task; not performed in T3):** the conditional EXP-067-R2 pair: close the clean runtime FX_HelloWorld01 Form once; invoke the Web Client `Form > Definition > Unload All Global Form Objects` once (record its label with a screenshot); then, with FX_HelloWorld01 closed in the Designer, invoke the Designer `Form > Definition > Unload All Global Form Objects` once (record its label). Then reopen FX_HelloWorld01 (User scope), drop one new Edit, rename, and repeat the binding check.
2. **Designer unload with FX_Items open:** the brief asks for the Designer unload "with the Designer Form closed". FX_Items is still open as the background Designer Form, and the brief forbids closing it here. The next task must decide whether the Designer unload is still valid with FX_Items open, or whether the operator approves closing FX_Items once first. (EXP-067-R2 invoked the Designer unload with no Form open.)
3. **Runtime FX_HelloWorld01** is open and clean; it must be closed once before the Web Client unload (per EXP-067-R2).
4. **Blocker:** none in T3.

---

## T4 — conditional EXP-067-R2 unload pair (cycle 3; Web Client 1, Designer 1; FX_HelloWorld01 NOT reopened)

Task message `d202a7f5-668e-4f79-9269-efa998e5b15a`, worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`. Run `R-20261013-202602-8bAy`, cycle 3, task T4. Bounded instruction: execute only the authorized unload pair; stop before reopening FX_HelloWorld01.

### Sequence and observations

1. **Tab list** (1) before the first select. Tab 0 (Designer, FX_Items) selected. Screenshot `t4-01`: FX_Items the sole Designer Form, Name FX_Items, User scope, Save and Undo **disabled** (clean), no dialog.
2. **FX_Items close (1):** the Form-tab control `closable FX_Items` clicked once, after the clean check. **No save prompt appeared.** Afterwards: the Designer tab list is empty, no dialog, Save disabled (`t4-02`; the URL lost its `MGForm` parameter).
3. **Designer state before the Web Client unload:** no Form open; no dialog; footer `ScopeType: User`.
4. **Tab list** (2) before the second select; Tab 1 (Web Client) selected. Runtime `FX_HelloWorld01` tab selected and clean: toolbar Save **disabled**; two records visible (`Factory test one` / `FX001` in the upper and lower fields; record 2 not re-read). Screenshot `t4-03`.
5. **Runtime FX_HelloWorld01 close (1):** the `Close Panel FX_HelloWorld01` control clicked once. **No save prompt appeared.** The runtime tab is gone from the tab list. The IDOs tab (an existing Web Client tab, showing the FX_HelloWorld01 IDO, checked out to the operator) became the active tab. Screenshot `t4-04`. (The IDO tab was not changed.)
6. **Web Client Form > Definition** (menu opened by one click on `Form`; `Definition` opened its submenu by one click). The submenu's visible items: `Designer`, `Runtime Builder...`, **`Unload All Global Form Objects`**, `Site Developer Impersonation` (`t4-05`, captured before the invocation).
7. **Web Client unload (1 of 1):** `Unload All Global Form Objects` clicked once. **Immediate native response: none** (the menu closed; no dialog, alert or message; `t4-06`). Not retried.
8. **Designer tab selected** (Tab 0). Designer tab list empty (no Form open); Save disabled; no dialog (`find`).
9. **Designer Form > Definition** (Form menu clicked once; `Definition` opened its submenu by one click). The submenu's visible items: `Design`, `Revert Form Definition`, `Regenerate Form`, `Regenerate Form from Cache`, `Site Developer Impersonation`, **`Unload All Global Form Objects`**, `New`, `Copy`, `Delete` (`t4-07`, captured before the invocation). Only the Unload item was clicked; `Delete`, `Regenerate Form` and `Regenerate Form from Cache` were not clicked.
10. **Designer unload (1 of 1):** `Unload All Global Form Objects` clicked once. **Immediate native response: none** (the menu closed; no dialog; `t4-08`). Not retried.
11. **Final read-only check:** no dialog; Designer Save disabled; no Form tab (the tab list is empty).

### Unload results (AC-2 precondition)

| Item | Result |
| --- | --- |
| Preference `Unload IDO Metadata With Forms` | Read as **checked** in T3 (`t3-05`); not re-read or changed in T4 |
| Web Client `Form > Definition > Unload All Global Form Objects` | Invoked **once** (count 1). Label recorded (`t4-05`). Immediate response: none (silent) (`t4-06`) |
| Designer `Form > Definition > Unload All Global Form Objects` | Invoked **once** (count 1), with no Designer Form open. Label recorded (`t4-07`). Immediate response: none (silent) (`t4-08`) |
| Server-side completion | Not observable (silent UI; same limit as EXP-067-R2) |

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Unchanged from T1/T2 | `t1-*`, `t2-*` | — |
| AC-2 | **Partially satisfied.** The unload pair is performed (Web Client 1; Designer 1) with the preference reading (T3) and the labels recorded. **Not yet satisfied:** the required reopen of FX_HelloWorld01 in User scope and the re-run binding picker check have not occurred. | `t3-05`, `t4-05`, `t4-06`, `t4-07`, `t4-08` | Reopen and picker check are the next task. |
| AC-3 to AC-8 | Not started (AC-7 runtime work remains) | — | — |

### Action audit (T4; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 2 | Before the first select; before the Web Client select. |
| `browser_tabs` select | 3 | Designer (start); Web Client; Designer (final). |
| `browser_snapshot` (explicit tool call) | 0 | Read-only checks used `find` and screenshots. |
| `browser_find` (read-only) | 12 | Start Designer check; dialog check after the FX_Items close; Web Client runtime check; post-runtime-close check; `Form` (Web Client); `Definition`; `Unload All Global Form Objects`; Designer tab check; `Form` (Designer); `Definition` (Designer); `Unload All Global Form Objects` (Designer); final check. |
| `browser_click` | 8 | (1) FX_Items close; (2) runtime `Close Panel FX_HelloWorld01`; (3) Web Client `Form` menu; (4) Web Client `Definition` (submenu open); (5) **Web Client unload (invoked once)**; (6) Designer `Form` menu; (7) Designer `Definition` (submenu open); (8) **Designer unload (invoked once)**. |
| Save-prompt answers | **0** | No save or discard prompt appeared on either close or unload. |
| Typed entries / key presses / Escape | 0 / 0 / 0 | None. |
| Waits / mouse / wheel | 0 / 0 / 0 | None. |
| Screenshots | 8 | `t4-01` to `t4-08`. |
| **Web Client unloads** | **1** | Invoked once; not repeated. |
| **Designer unloads** | **1** | Invoked once; not repeated. |
| Designer Form close (FX_Items, other Form) | 1 | FX_Items (clean), not FX_HelloWorld01. |
| Runtime FX_HelloWorld01 close | 1 | Clean; no prompt. |
| Reopen of FX_HelloWorld01 (Designer or runtime) | 0 | Not performed (next task). |
| Preference reads / changes | 0 / 0 | Not in T4 (T3 read stands). |
| Toolbox drops / components added or changed | 0 / 0 / 0 | None. |
| Strings created or edited | 0 | None. |
| Designer Save | 0 | None. |
| Runtime Refresh / record edits / runtime Save | 0 / 0 / 0 | None. |
| Re-login | 0 | Session usable. |
| JavaScript / console / network | 0 | None. |
| Direct navigation / refresh / restart | 0 / 0 / 0 | None. |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | None. |
| Dialogs answered | 0 | None appeared. |

Cumulative counts for AC-8 (T1–T4): Toolbox drops 1 (T2 Edit); Toolbox drop of Static 0; strings 0; Designer Save 0; unloads Web Client 1 and Designer 1; Designer close of FX_HelloWorld01 1 (T3, answered No once); FX_Orders close 1 (T1); FX_Items close 1 (T4); runtime FX_HelloWorld01 close 1 (T4); reopen 0; runtime reopen 0; Refresh 0; record edits 0; re-login 0.

### Worker-written-file inventory (T4)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T4 section).
- `evidence/EXP-076/t4-01-designer-start-fx_items-sole-form-before-close.png`
- `evidence/EXP-076/t4-02-designer-after-fx_items-close-no-form-no-dialog.png`
- `evidence/EXP-076/t4-03-webclient-runtime-fx_helloworld01-open-clean-before-close.png`
- `evidence/EXP-076/t4-04-webclient-after-runtime-fx_helloworld01-close-no-prompt.png`
- `evidence/EXP-076/t4-05-webclient-form-definition-menu-unload-label-before-click.png`
- `evidence/EXP-076/t4-06-webclient-after-unload-all-global-form-objects-single-click.png`
- `evidence/EXP-076/t4-07-designer-form-definition-menu-unload-label-before-click.png`
- `evidence/EXP-076/t4-08-designer-after-unload-all-global-form-objects-single-click.png`

No other file was written. Harness snapshot and console files under `evidence\playwright\` were written by the tool.

### Final state (end of T4)

- **Designer:** no Form open (tab list empty); no dialog; Save disabled; footer User scope. FX_HelloWorld01 is closed and was **not** reopened. FX_Items was closed (clean).
- **Web Client:** tab 1 selected; the runtime FX_HelloWorld01 tab is **closed**; the existing IDOs tab is active (unchanged; checked out to the operator, as before). No dialog.
- **Preference:** unchanged (checked).
- **Unloads:** Web Client 1; Designer 1. Neither is to be repeated.
- **Components, strings, records:** unchanged.

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| FX_Items (clean, sole Designer Form) closes via its Form-tab control without a prompt | **observed** (one run; `t4-02`) |
| Web Client runtime FX_HelloWorld01 (clean) closes via `Close Panel` without a prompt | **observed** (one run; `t4-04`) |
| Web Client `Form > Definition` submenu label `Unload All Global Form Objects` (among Designer, Runtime Builder..., Site Developer Impersonation) | **observed** (one run; `t4-05`) |
| Designer `Form > Definition` submenu label `Unload All Global Form Objects` (among Design, Revert Form Definition, Regenerate Form, Regenerate Form from Cache, Site Developer Impersonation, New, Copy, Delete) | **observed** (one run; `t4-07`) |
| Both unloads return no visible response | **observed** (UI only; server-side completion not observed) |
| Whether the unload takes effect for the next Designer open (binding picker) | **unresolved** (checked in the next task) |

### Open questions and next step (T4)

1. **Next step (separate task):** reopen FX_HelloWorld01 once (User scope; toolbar Open and Select Form), verify the clean state, drop one new Edit, rename it FX_AddressEdit, set Binding Type Property, and repeat the binding picker check. Per the brief: if FX_Address is still missing, stop blocked without a second unload.
2. The Designer unload was invoked with no Designer Form open, as the brief and EXP-067-R2 specify. This resolves the T3 question on whether FX_Items should be closed first (it was closed, with the operator-permitted step).
3. **Blocker:** none in T4.

---

## T5 — post-unload Designer reopen and FX_Address binding gate (cycle 4; AC-2 satisfied; Form left dirty)

Task message `42098329-00b2-46bc-9047-2a8e4f379228`, worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`. Run `R-20261013-202602-8bAy`, cycle 4, task T5. Bounded instruction: reopen FX_HelloWorld01 and perform the binding gate only; no Type, geometry, Static, string, Save, runtime or checkout action.

### Sequence and observations

1. **Tab list** (1) before the first select; Tab 0 (Designer) selected. Untargeted snapshot: no Form tab open (Designer tab list empty); Save and Undo **disabled**; no dialog.
2. **Reopen (1):** toolbar Open (accessible `Design`) clicked once. Select Form opened with its Filter pre-filled `FX_HelloWorld01` and one row (Caption and Name `FX_HelloWorld01`). Row clicked once; OK clicked once. Result: MGForm `FX_HelloWorld01`.
3. **Identity (`t5-01`):** tab `FX_HelloWorld01` (only Designer Form); Name `FX_HelloWorld01`; Version `User version for user …`; Device Type Default; Form Type Normal; Is Master True; Form Size `69; 21` (Unit Char); footer `ScopeType: User / ScopeName: <operator>`; Save and Undo **disabled** (clean at reopen); no dialog.
4. **Component list (Components grid expanded; saved snapshot `page-2026-10-13T13-00-32-099Z.yml`, read by Grep):** Pane (00): FormCollectionGrid (grid); FX_LabelGridCol (`object.FX_Label`, tab 1); FX_CodeGridCol (`object.FX_Code`, tab 2). Pane (01): FX_LabelStatic (Static, tab 3); FX_LabelEdit (Edit, `object.FX_Label`, tab 4); FX_CodeStatic (Static, tab 5); FX_CodeEdit (Edit, `object.FX_Code`, tab 6). **FX_AddressStatic and FX_AddressEdit absent** before the drop (the T3 discard removed the earlier drop, as the reopen shows). Geometry was not re-read in T5 (the T2 readbacks stand: FX_LabelStatic 1;3 / 20;1; FX_LabelEdit 1;23.75 / 37.05;2; FX_CodeStatic 3.25;3 / 20;1; FX_CodeEdit 3.25;23.75 / 37.05;2; Form 69;21 Char).
5. **Toolbox drop (1 of 1 in T5):** one drag from the Toolbox `Edit` item (76, 443) to the empty canvas point (600, 380). Result: `edit1_USER` (Edit; Pane 1; Tab 0) created and selected; Save and Undo enabled (dirty). `t5-02`.
6. **Rename:** Name value cell clicked (activates the editor; `edit1_USER` selected); one fill `FX_AddressEdit`; one Tab. Readback: Properties Name `FX_AddressEdit`; Components grid `FX_AddressEdit` (Edit; Pane 1; Tab 0).
7. **Binding Type:** the value cell clicked (combobox opened with `None`); the arrow opened the list; option `Property` clicked once. Readback: Binding Type `Property`. As in T2 and EXP-067-R2 T5, the Binding auto-assigned `object._ItemId`.
8. **Binding picker (opened once after two arrow clicks; the first click only selected the cell):** the open list (sorted) shows `object._ItemId`, `object._ItemWarnings`, `object.CreateDate`, `object.CreatedBy`, **`object.FX_Address`**, `object.FX_Code`, `object.FX_Label`, `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, `object.RowPointer`, `object.UDFDateTime1` … `object.UpdatedBy`. `t5-03` captured before selection.
9. **Selection (1):** the option `object.FX_Address` clicked once. The list closed; the combobox read `object.FX_Address`.
10. **Commit (1 Tab):** the value committed by one Tab (EXP-067-R2 observed a binding value reaches the grid only after focus leaves the editor). Readback: Binding `object.FX_Address`; Binding Type `Property`; Components grid row `FX_AddressEdit`; Save enabled (dirty). `t5-04`.
11. **Final read-only check:** no dialog; Save **enabled**; Undo enabled. The Form stays dirty; FX_AddressEdit is the only change (Name, Binding Type and Binding set; Type, Location and Size not yet configured; the drop default Location `15.5; 30.25` and Size `75; 21.1111111111111` remain).

### Observations (observed only)

- **FX_Address offered (one run):** the Binding picker of the new Edit, under Binding Type `Property`, lists `object.FX_Address`. This differs from the T2 picker, which did not list it. The change is after the EXP-067-R2 unload pair (Web Client 1, Designer 1, performed in T4 after the T3 discard), consistent with the unload taking effect for the reopened Designer. **Causation is not established by one run** (the record does not show a before/after diff of the picker list under the same Form state beyond this).
- **Stale header:** the Properties header still reads `edit1_USER (Edit)` after the rename, while the Name field and Components grid read FX_AddressEdit. Observed; not explained (the same class of stale label was noted in EXP-067-R2 T6).
- **Components grid Data Source blank for FX_AddressEdit** after the Binding readback (the editor reads `object.FX_Address`). Same observation as T2; not explained.
- No dialog appeared at any point.

### Acceptance checks (T5)

| AC | T5 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed at reopen (identity, User scope, clean at reopen, component list, FX_AddressStatic and FX_AddressEdit absent before the drop) | `t5-01`; Components grep | Geometry not re-read in T5 (T2 readbacks stand). |
| AC-2 | **SATISFIED** for the post-unload branch: picker offers `object.FX_Address`; selected once; readback `object.FX_Address`; unloads Web Client 1 and Designer 1 (T4; labels recorded in T4, preference read as checked in T3); FX_HelloWorld01 reopened in User scope (T5). | `t5-03` (picker offering FX_Address), `t5-04` (readback) | The preference and menu-label screenshots are in T3 (`t3-05`) and T4 (`t4-05`, `t4-07`). The unload's server-side effect is not observed directly; the picker result is the observed evidence. |
| AC-3 | **Partial.** Binding Type `Property` and Binding `object.FX_Address` set and read back. Type (Multi-Line Edit), Location `5.5; 23.75`, Size `37.05; 4` NOT yet set (out of T5 scope). | `t5-02`, `t5-04` | Remaining readbacks in the next task. |
| AC-4 to AC-8 | Not started | — | — |

### Target rectangles (unchanged; computed in T1)

- FX_AddressStatic: Location `5.5; 3`; Size `20; 1`; rows 5.5–6.5; columns 3–23 (free; inside the Form 69 × 21).
- FX_AddressEdit: Location `5.5; 23.75`; Size `37.05; 4`; rows 5.5–9.5; columns 23.75–60.8 (free; inside the Form).

### Action audit (T5; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 0 (Designer). |
| `browser_snapshot` (explicit tool call) | 1 | Start (Designer). |
| `browser_find` (read-only) | 22 | Select Form (1); Select Form details (1); OK (1); Components (2); Expand Panel (1); Expand (1); Pane (01) (1); row regex (1); FX_CodeEdit (1); edit1_USER (1); active textbox (1); FX_AddressEdit (1); Binding Type (1); combobox (1); Property (1); Binding (1); combobox after cell (1); options (1); FX_Address (1); Save/dialog check (1); Binding readback (2). |
| `browser_click` | 13 | (1) toolbar Open; (2) Select Form row; (3) OK; (4) Details Expand Panel; (5) Components tab; (6) Components Expand; (7) Name value cell; (8) Binding Type value cell; (9) Binding Type arrow; (10) Property option; (11) Binding cell (first click, cell selected); (12) Binding arrow (second click, list opened); (13) option `object.FX_Address`. |
| Toolbox drag (mouse) | 1 | One Edit drop. |
| `browser_type` | 1 | Name `FX_AddressEdit` (one fill). |
| Key presses | 2 | Tab (Name commit); Tab (binding commit). Escape **0**. |
| Screenshots | 4 | `t5-01` to `t5-04`. |
| Waits | 0 | None. |

Counts were reconstructed from this task's call sequence (the harness did not expose a per-call log); the find count is the least certain of these.

### Cumulative counts (T1–T5; for AC-8)

- Toolbox drops: **2** (T2 Edit discarded by the single No in T3; T5 Edit kept as FX_AddressEdit). Static drops 0.
- Discard prompts answered: 1 (No, T3). Yes 0. Cancel 0.
- Unloads: **Web Client 1; Designer 1** (T4). Neither repeated in T5.
- Designer Form close/reopen pairs: FX_HelloWorld01 close (T3, No) and reopen (T5) = **1 pair**. Other Designer closes: FX_Orders (T1), FX_Items (T4).
- Strings created: 0. Designer Save: 0. Runtime close/reopen/Refresh: runtime FX_HelloWorld01 closed once (T4); reopen 0; Refresh 0.
- Component changes to existing components: 0. Record edits: 0. Re-login: 0. Preference changes: 0.

### Worker-written-file inventory (T5)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T5 section).
- `evidence/EXP-076/t5-01-designer-reopened-fx_helloworld01-identity-clean-before-components.png`
- `evidence/EXP-076/t5-02-after-single-edit-drop-new-edit-selected.png`
- `evidence/EXP-076/t5-03-binding-picker-open-object-fx_address-offered-before-select.png`
- `evidence/EXP-076/t5-04-after-select-binding-object-fx_address-readback-form-dirty.png`

No other file was written. Harness snapshot and console files under `evidence\playwright\` were written by the tool; the Components snapshot `page-2026-10-13T13-00-32-099Z.yml` was read with Grep.

### Final state (end of T5)

- **Designer:** FX_HelloWorld01 open (only Designer Form), User scope, **dirty** (Save and Undo enabled). Pending changes: FX_AddressEdit (Name `FX_AddressEdit`; Type Edit (not yet Multi-Line); Binding Type `Property`; Binding `object.FX_Address`; Location and Size still the drop default).
- **Web Client:** unchanged since T4 (runtime FX_HelloWorld01 closed; IDOs tab active). Not touched in T5.
- **Unloads:** Web Client 1; Designer 1. **Save:** 0. No dialog open.

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| After the EXP-067-R2 unload pair and a reopen in User scope, the Binding picker of a new Edit (Binding Type Property) offers `object.FX_Address` | **observed** (one run; `t5-03`) |
| Selecting `object.FX_Address` and committing with Tab reads back Binding `object.FX_Address`, Binding Type `Property` | **observed** (one run; `t5-04`) |
| The unload pair caused the change in the picker (versus the T2 picker, which did not offer it) | **unresolved** (not isolated by one run; the T2 and T5 picker lists differ only after the unload) |
| Properties header shows `edit1_USER (Edit)` after rename; Components grid Data Source blank for the new Edit | **observed**; cause unresolved |
| Reopen restored the baseline components (FX_LabelStatic, FX_LabelEdit, FX_CodeStatic, FX_CodeEdit, grid) and the Form Size `69; 21` | **observed** (one run; accessibility; Form clean at reopen) |

### Open questions and next step (T5)

1. **Next (separate task):** configure FX_AddressEdit (Type Multi-Line Edit; Location `5.5; 23.75`; Size `37.05; 4`; readbacks), then drop FX_AddressStatic once, set Location `5.5; 3` and Size `20; 1`, create `FX_sAddress` through the Caption ellipsis (one Yes to the exact prompt; value Address committed with Tab before OK), verify in Edit > String, then one Designer Save, close/reopen, runtime check.
2. **Blocker:** none in T5. AC-2 is satisfied; the rest of the flow is not started.
3. The Properties-header label and blank Data Source are unexplained observations to keep in view.

---

## T6 — configure the unsaved FX_AddressEdit (cycle 5; Edit configured; Form dirty; no Save)

Task message `fe980740-4bf8-4554-99d9-3512ab3d36da`, worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`. Run `R-20261013-202602-8bAy`, cycle 5, task T6. Bounded instruction: configure only the existing unsaved FX_AddressEdit; no FX_AddressStatic, no string, no Save, no unload, no Toolbox drop, no runtime action.

### Gate (before any change)

- Tab list (2) before the first select; Tab 0 (Designer) selected; untargeted snapshot: FX_HelloWorld01 the only Designer Form; footer `ScopeType: User`; Save and Undo **enabled** (dirty); no dialog.
- Name `FX_AddressEdit` (`find`; `t6-01`); Binding Type `Property`; Binding `object.FX_Address`; Components grid row `FX_AddressEdit` (Edit; Pane 1; Tab 0). The Properties header still read `edit1_USER (Edit)` at the gate; per the brief this was not treated as a failed rename.
- The four baseline components remain (FX_LabelStatic, FX_LabelEdit, FX_CodeStatic, FX_CodeEdit) with FX_AddressEdit as the only addition.

### Sequence and readbacks

1. **Type** (Properties Type value cell clicked once; combobox arrow clicked once). The native list contains **`MultilineEdit`** (no space and no hyphen) at the Multi-Line Edit position; the Toolbox item is labelled `MultiLineEdit`. The brief named "Multi-Line Edit" as the exact native option; no option with that exact text exists. The option `MultilineEdit` was selected once, as the matching native type (a naming difference, recorded here rather than treated as a blocker). Tab committed once. **Readback: Type `MultilineEdit`** (`t6-02`).
2. **Size (Width first):** the Layout group was reached by scrolling the Properties panel (mouse wheel 600, then 1200; `t6-03`). Size row selected once, then its expander clicked (coordinate, once) to show Width, Height and Lock Size. Width value cell clicked; editor filled `37.05`; Tab committed. **Readback: Width `37.05`.** Height value cell clicked; editor filled `4`; Tab committed. **Readback: Height `4`; Size `37.05; 4`; Lock Size `False`** (`t6-04`, `t6-05`).
3. **Location:** the Location row selected once, then its expander clicked (coordinate, once) to show Top, Left and Lock Position. Top value cell clicked; editor filled `5.5`; Tab committed. Left value cell clicked; editor filled `23.75`; Tab committed. **Readback: Top `5.5`; Left `23.75`; Location `5.5; 23.75`** (`t6-06`).
4. **Final readback (read-only):** Name `FX_AddressEdit`; Type `MultilineEdit`; Binding Type `Property`; Binding `object.FX_Address`; Size `37.05; 4`; Location `5.5; 23.75` (`t6-07`). Form dirty: Save enabled, Undo enabled; no dialog.

Note on the Properties header: at the start of T6 it read `edit1_USER (Edit)`; after the geometry commits it read `FX_AddressEdit (Edit)` (`t6-05`, `t6-06`, `t6-07`). The header refresh is observed only.

### Placement check (target rectangle; computed in T1)

- FX_AddressEdit: Location `5.5; 23.75`; Size `37.05; 4`; rows 5.5–9.5; columns 23.75–60.8. Inside the Form 69 × 21. Free of the four existing components (T1 overlap table): FX_CodeEdit rows 3.25–5.25 end above row 5.5 (gap 0.25); no column overlap with the labels.
- **Canvas (`t6-07`):** the edit now starts directly below FX_CodeEdit (top edge at about y 199 on the canvas, below the Code edit's bottom at about y 195) and spans about four rows down to about y 272. Its left edge aligns with the Code edit column (about x 548). The right side is clipped at the visible canvas edge (about x 810), as the baseline edits are; the numeric rectangle is inside the Form. **Visual limit:** clipping prevents a full-width visual check, so the placement is supported by the numeric readbacks plus the canvas position.
- No existing component changed: the four baseline components were not selected or edited in T6; the Components list shows the same four Pane 01 rows and FX_AddressEdit.

### Acceptance checks (T6)

| AC | T6 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed at the gate (identity; dirty; components) | `t6-01` | Baseline geometry for the four existing components not re-read in T6 (T2 readbacks stand). |
| AC-2 | Satisfied in T5 (unchanged) | T5 `t5-03`, `t5-04` | — |
| AC-3 | **Satisfied, observed:** Edit; Type `MultilineEdit`; Binding Type `Property`; Binding `object.FX_Address`; Location `5.5; 23.75`; Size `37.05; 4` (height 4), each read back after commit. Form NOT saved. | `t6-02` (Type), `t6-04` (Size), `t6-06` (Location), `t6-07` (final, canvas) | Saved state not yet verified (no Save). Type name differs from the brief's wording (`MultilineEdit`). Canvas clipped at the right edge. |
| AC-4 to AC-8 | Not started | — | — |

### Action audit (T6; exact counts; reconstructed from the call sequence)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 0 (Designer). |
| `browser_snapshot` (explicit) | 1 | Gate (depth 4). |
| `browser_find` (read-only) | 25 | Gate identity; Type; Type combobox (×3); Layout; Size (×3); Width (×2); Height; Location; Location chevron check; Top (×2); Left (×2); readbacks; Save/dialog check. (Least certain count.) |
| `browser_click` (ref) | 9 | Type value cell; Type arrow; `MultilineEdit` option; Size row; Width value; Height value; Location row; Top value; Left value. |
| `browser_click` (coordinate) | 2 | Size expander (x 1596, y 591); Location expander (x 1596, y 687). |
| Mouse wheel | 2 | deltaY 600 and 1200 (Properties scroll). |
| `browser_type` | 4 | `37.05`; `4`; `5.5`; `23.75` (one plain fill each). |
| Key presses | 5 | Tab ×5 (Type, Width, Height, Top, Left commits). Escape **0**. |
| Waits | 0 | None. |
| Screenshots | 7 | `t6-01` to `t6-07`. |
| Toolbox drops | **0** | None in T6. |
| Components added / existing components changed | **0 / 0** | FX_AddressEdit configured only. |
| Unloads (Web Client / Designer) | **0 / 0** in T6 | Cumulative 1 / 1 (T4). |
| Designer Save | **0** | Not pressed. |
| Designer Form close / reopen | **0 / 0** | None. |
| Strings created or edited | **0** | None. |
| Preference reads / changes | **0 / 0** | None. |
| Runtime open / close / Refresh / record edits | **0 / 0 / 0 / 0** | None. |
| Dialogs answered | **0** | None appeared. |
| Re-login | **0** | Session usable. |
| JavaScript / console / network / direct navigation | **0** | None. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | None. |

### Cumulative counts (T1–T6; for AC-8)

- Toolbox drops: **2** (Edit, T2, discarded by the T3 No; Edit, T5, kept as FX_AddressEdit). Static drops 0.
- Discard prompts answered: 1 (No, T3). Yes 0. Cancel 0.
- Unloads: **Web Client 1; Designer 1** (T4). Never repeated.
- Designer Form close/reopen: FX_HelloWorld01 close (T3) and reopen (T5) = 1 pair. Other Designer closes: FX_Orders (T1), FX_Items (T4).
- Strings created: 0. Designer Save: 0. Runtime close (T4) 1; reopen 0; Refresh 0.
- Existing-component changes: 0. Record edits: 0. Re-login: 0. Preference changes: 0.

### Worker-written-file inventory (T6)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T6 section).
- `evidence/EXP-076/t6-01-pre-change-dirty-fx_addressedit-name-binding-readback.png`
- `evidence/EXP-076/t6-02-type-set-multilineedit-readback-layout-visible.png`
- `evidence/EXP-076/t6-03-properties-scrolled-to-layout-group-before-size.png`
- `evidence/EXP-076/t6-04-size-row-expanded-or-not-visible-check.png`
- `evidence/EXP-076/t6-05-size-set-37-05-by-4-location-row-before-location-edit.png`
- `evidence/EXP-076/t6-06-location-expand-check.png`
- `evidence/EXP-076/t6-07-fx_addressedit-geometry-committed-canvas-placement.png`

No other file was written. Harness snapshot and console files under `evidence\playwright\` were written by the tool.

### Final state (end of T6)

- **Designer:** FX_HelloWorld01 open (only Designer Form), User scope, **dirty** (Save and Undo enabled). FX_AddressEdit configured as above (unsaved). No dialog open. The Properties panel shows FX_AddressEdit (Edit) with Layout expanded.
- **Web Client:** untouched in T6 (runtime FX_HelloWorld01 closed in T4; IDOs tab active).
- **Unloads:** Web Client 1; Designer 1. **Save:** 0.

### Knowledge state (T6)

| Finding | State |
| --- | --- |
| Type list offers the native option `MultilineEdit` (spelled without a space or hyphen) for the Multi-Line Edit type | **observed** (one run; `t6-02`) |
| Setting Type to `MultilineEdit` and committing with Tab reads back `MultilineEdit` | **observed** (one run) |
| Size and Location are set through their expanded Width/Height and Top/Left children; each commit reads back | **observed** (one run; `t6-04`, `t6-06`) |
| The Properties header changes from `edit1_USER` to `FX_AddressEdit` after the geometry commits | **observed**; cause unresolved (the rename had already shown FX_AddressEdit in the Name field) |
| Canvas places the edit under FX_CodeEdit at about the target column (visual, clipped at the right edge) | **observed** (one run; visual limit) |
| The configured values persist after a Designer Save and reopen | **unresolved** (not yet saved) |

### Open questions and next step (T6)

1. **Next (separate task):** drop FX_AddressStatic once; rename; Location `5.5; 3`; Size `20; 1`; Caption `FX_sAddress` through the Caption ellipsis (one Yes to the exact prompt; value `Address` committed with Tab before OK); Edit > String readback (cancel); then the single Designer Save, close/reopen and the runtime check.
2. **Type naming:** the brief says "Multi-Line Edit"; the native option is `MultilineEdit`. Operator review requested to confirm this is the intended type (the Toolbox item is `MultiLineEdit`).
3. **Blocker:** none in T6.

---

## T7 — add and configure FX_AddressStatic (cycle 6; Static added; caption and string NOT done; Form dirty)

Task message `4f92c1c5-2ce2-45bc-ab34-226238238476`, worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`. Run `R-20261013-202602-8bAy`, cycle 6, task T7. Bounded instruction: add and configure only FX_AddressStatic (Name, Size, Location); no Caption, no string, no Save, no unload, no runtime action.

### Gate (before any change)

- Tab list (1) before the first select; Tab 0 (Designer) selected; untargeted snapshot: FX_HelloWorld01 the only Designer Form; footer `ScopeType: User`; Save and Undo **enabled** (dirty); no dialog (`t7-01`).
- FX_AddressEdit re-read: Name `FX_AddressEdit`; Type `MultilineEdit`; Binding Type `Property`; Binding `object.FX_Address`; Size `37.05; 4`; Location `5.5; 23.75` (unchanged from T6).
- FX_AddressStatic **absent** before the drop (Components grid: FX_LabelStatic, FX_LabelEdit, FX_CodeStatic, FX_CodeEdit, FX_AddressEdit).

### Sequence and readbacks

1. **Toolbox drop (1 of 1 in T7):** one drag from the Toolbox `Static` item (81, 788) to the free canvas point (450, 400) (below the Address edit's band; not on any component). Result: `static1_USER` (Static; Pane 1; Tab 0) created and selected (`t7-02`). The Components grid also showed FX_AddressEdit with Type `MultilineEdit` and Data Source `object.FX_Address` at this point (see Observations).
2. **Name:** Name value cell clicked (editor activated); `FX_AddressStatic` filled once; Tab once. **Readback: Name `FX_AddressStatic`** in the Properties field and the Components grid (`t7-03`). The Properties header still read `static1_USER (Static)` immediately after the commit (stale header; same pattern as T5/T6).
3. **Size (Width, then Height; the Size group was already expanded):** Width value clicked; `20` filled; Tab. Height value clicked; `1` filled; Tab. **Readback: Width `20`; Height `1`; Size `20; 1`; Lock Size `False`** (`t7-04`, `t7-05`).
4. **Location (Top, then Left):** Top value clicked; `5.5` filled; Tab. Left value clicked; `3` filled; Tab. **Readback: Top `5.5`; Left `3`; Location `5.5; 3`** (`t7-05`).
5. **Reselect verification (view only):** FX_AddressStatic reselected from its Components row. Readbacks: Name `FX_AddressStatic`; Type `Static`; Size `20; 1`; Location `5.5; 3`; Caption **blank** (accessibility Caption value cell empty); Binding Type `None` (expected for a Static).
6. **Re-read of FX_AddressEdit (view only):** Name `FX_AddressEdit`; Type `MultilineEdit`; Binding Type `Property`; Binding `object.FX_Address`; Size `37.05; 4`; Location `5.5; 23.75` (unchanged).
7. **Canvas (`t7-06`):** FX_AddressStatic sits as a dotted empty box at the left of the Address row (x about 380–545, y about 199–218), with FX_AddressEdit to its right (x about 548–810, y about 199–272, selected). Both are in the target band (rows 5.5–6.5 and 5.5–9.5). The right side of the edit is clipped at the visible canvas edge, as before. The four baseline components are unchanged in name and position on the canvas (FX_CodeStatic and FX_CodeEdit rows at about y 158–197).
8. **Final read-only check:** Save and Undo enabled (dirty); no dialog.

### Placement check (computed in T1; not changed)

- FX_AddressStatic target: Location `5.5; 3`; Size `20; 1`; rows 5.5–6.5; columns 3–23. Readback matches exactly.
- FX_AddressEdit target: Location `5.5; 23.75`; Size `37.05; 4`; rows 5.5–9.5; columns 23.75–60.8. Readback matches exactly.
- The two rectangles do not overlap (Static columns end at 23; Edit columns start at 23.75). Neither overlaps FX_CodeStatic (rows 3.25–4.25) or FX_CodeEdit (rows 3.25–5.25, columns 23.75–60.8; no row overlap with the Static at 5.5). Both lie inside the Form (69 × 21).
- Visual limit: the canvas clips the right side of the Edit; the placement is supported by the numeric readbacks and the canvas position.

### Observations (observed only)

- **Components grid Data Source for FX_AddressEdit:** after the T7 Static drop, the grid showed `object.FX_Address` for FX_AddressEdit (the T5 and T6 grid showed a blank Data Source). The cause is not established; it is recorded as observed. The Binding readback in the Properties panel was `object.FX_Address` throughout.
- **Stale Properties header:** after the Static rename, the header read `static1_USER (Static)` (not refreshed until a later selection). Same class of observation as T5/T6.
- The Static's Caption is blank and was not edited (out of T7 scope).

### Acceptance checks (T7)

| AC | T7 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed at the gate (identity; dirty; components; FX_AddressStatic absent before the drop) | `t7-01` | The FX_sAddress absence was proven in T1; not re-proven in T7. |
| AC-2 | Satisfied in T5 (unchanged) | T5 `t5-03`, `t5-04` | — |
| AC-3 | Satisfied as observed in T6; re-read unchanged in T7 | `t6-02`, `t6-04`, `t6-06`, `t6-07`; T7 `t7-05`, `t7-06` | Not saved. |
| AC-4 | **Partial.** FX_AddressStatic added once; Type Static; Name, Size `20; 1` and Location `5.5; 3` read back (`t7-03`, `t7-05`). **Caption FX_sAddress and the string NOT done** (next task). | `t7-03`, `t7-05`, `t7-06` | Caption and string pending. |
| AC-5 to AC-8 | Not started | — | — |

### Action audit (T7; exact counts; reconstructed from the call sequence)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 0 (Designer). |
| `browser_snapshot` (explicit) | 1 | Gate (depth 4). |
| `browser_find` (read-only) | 20 | Gate and component list; `static1_USER`; textbox active (×4); FX_AddressStatic (×3); Size; Width; Height; Left; Location (×2); regex checks (×4); FX_AddressEdit (×2); dialog/Save check. (Least certain count.) |
| `browser_click` (ref) | 7 | Name value; Width value; Height value; Top value; Left value; reselect FX_AddressStatic; reselect FX_AddressEdit. |
| Toolbox drag (mouse) | 1 | One Static drop. |
| `browser_type` | 5 | `FX_AddressStatic`; `20`; `1`; `5.5`; `3` (one plain fill each). |
| Key presses | 5 | Tab ×5 (Name, Width, Height, Top, Left commits). Escape **0**. |
| Mouse move / wheel | 1 / 1 | Move to the Properties panel; wheel deltaY 1800 (Layout view). |
| Coordinate clicks | 0 | None. |
| Waits | 0 | None. |
| Screenshots | 6 | `t7-01` to `t7-06`. |
| Toolbox drops (T7) | **1** | Static only. |
| Components added (T7) | **1** | FX_AddressStatic. |
| Existing components changed | **0** | None (view-only reselection of FX_AddressEdit and FX_AddressStatic). |
| Caption edits / Caption ellipsis / string dialogs | **0 / 0 / 0** | Not in T7. |
| Designer Save | **0** | Not pressed. |
| Designer Form close / reopen | **0 / 0** | None. |
| Unloads (Web Client / Designer) in T7 | **0 / 0** | Cumulative 1 / 1 (T4). |
| Dialogs answered | **0** | None appeared. |
| Preference reads / changes | **0 / 0** | None. |
| Runtime open / close / Refresh / record edits | **0 / 0 / 0 / 0** | None. |
| Re-login | **0** | Session usable. |
| JavaScript / console / network / direct navigation | **0** | None. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | None. |
| Escape in pickers | **0** | None. |

### Cumulative counts (T1–T7; for AC-8)

- Toolbox drops: **3** (T2 Edit, discarded by the single No in T3; T5 Edit, kept as FX_AddressEdit; T7 Static, kept as FX_AddressStatic).
- Discard prompts answered: 1 (No, T3). Yes 0. Cancel 0.
- Unloads: **Web Client 1; Designer 1** (T4). Never repeated.
- Designer Form close/reopen: FX_HelloWorld01 close (T3) and reopen (T5) = 1 pair. Other Designer closes: FX_Orders (T1), FX_Items (T4).
- Strings created: **0**. Designer Save: **0**. Runtime close (T4) 1; reopen 0; Refresh 0.
- Existing-component changes: 0. Record edits: 0. Re-login: 0. Preference changes: 0.

### Worker-written-file inventory (T7)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T7 section).
- `evidence/EXP-076/t7-01-initial-state-dirty-fx_addressedit-configured-no-addressstatic.png`
- `evidence/EXP-076/t7-02-after-single-static-drop-new-static-selected.png`
- `evidence/EXP-076/t7-03-committed-name-fx_addressstatic-properties-layout-before-size.png`
- `evidence/EXP-076/t7-04-layout-group-visible-before-size-edit.png`
- `evidence/EXP-076/t7-05-expanded-location-size-readbacks-fx_addressstatic.png`
- `evidence/EXP-076/t7-06-canvas-both-address-components-target-rectangles.png`

No other file was written. Harness snapshot and console files under `evidence\playwright\` were written by the tool.

### Final state (end of T7)

- **Designer:** FX_HelloWorld01 open (only Designer Form), User scope, **dirty** (Save and Undo enabled). Pending changes: FX_AddressEdit (configured, T6) and FX_AddressStatic (Name, Size, Location; Caption blank). No dialog open.
- **Web Client:** untouched in T7.
- **Unloads:** Web Client 1; Designer 1. **Save:** 0. **Strings:** 0.

### Knowledge state (T7)

| Finding | State |
| --- | --- |
| Toolbox Static drop creates `static1_USER` (Static; Pane 1; Tab 0); rename to FX_AddressStatic commits | **observed** (one run; `t7-02`, `t7-03`) |
| Static Size `20; 1` and Location `5.5; 3` set through expanded Width/Height and Top/Left; reselection reads back the same | **observed** (one run; `t7-05`) |
| Static Caption is blank before the caption step | **observed** |
| FX_AddressEdit geometry and binding unchanged after the Static work | **observed** (one run) |
| Components grid Data Source for FX_AddressEdit showed `object.FX_Address` after the Static drop (previously blank) | **observed**; cause **unresolved** |
| Canvas places FX_AddressStatic left of FX_AddressEdit in the target band | **observed** (visual; clipped at right) |
| FX_sAddress creation, Save, close/reopen, runtime | **not performed** (later tasks) |

### Open questions and next step (T7)

1. **Next (separate task):** Caption FX_sAddress via the Caption ellipsis, one Yes to the exact prompt, value `Address` committed with Tab before OK, Edit > String readback (cancel); then the single Designer Save, close/reopen and the runtime check.
2. **Blocker:** none in T7.

---

## T8 — FX_AddressStatic Caption and FX_sAddress string: BLOCKED at the Caption ellipsis (cycle 7)

Task message `d122c893-f588-44c1-8107-796968313547`, worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`. Run `R-20261013-202602-8bAy`, cycle 7, task T8. Bounded instruction: set the FX_AddressStatic Caption to FX_sAddress and create the string through the Caption ellipsis, only if the exact prompt appears.

### Gate (before any change)

- Tab list (1) before the first select; Tab 0 (Designer) selected; untargeted snapshot (depth 4): FX_HelloWorld01 the only Designer Form; User scope; Save and Undo **enabled** (dirty); no dialog (`t8-01`).
- FX_AddressStatic: Name `FX_AddressStatic`; Type `Static`; Location `5.5; 3`; Size `20; 1`; Caption blank (`find`; `t8-02`).
- FX_AddressEdit: Type `MultilineEdit`; Binding Type `Property`; Binding `object.FX_Address`; Size `37.05; 4`; Location `5.5; 23.75` (unchanged).
- Four original components and the grid present (Components grid: FX_LabelStatic, FX_LabelEdit, FX_CodeStatic, FX_CodeEdit; grid column rows as before).

### Sequence

1. FX_AddressStatic selected (Components row, one click). Properties header read `FX_AddressStatic (Static)` (`t8-02`).
2. The Caption value cell clicked once (activated; `t8-03`). The cell shows a combobox with a dropdown arrow; the Caption ellipsis is the separate button in the Caption row (accessible control, one `button` in the row).
3. **Caption ellipsis clicked once.** The EXP-050 expected prompt `String FX_sAddress does not exist. Create it?` **did NOT appear**. Instead a native alert appeared: title `Infor Mongoose Application Development Framework`; text **`No object name given.`**; one button `OK` (`t8-04`).
4. The alert was dismissed with its OK button once (no string dialog, no Yes, no No). No string was created, edited or overwritten. No text was entered.
5. **Corrected inspection (the brief's one permitted):** no dialog remains (`find`); the Caption value cell is still empty (`find`; `t8-05`); Save and Undo enabled; the Form dirty; FX_AddressStatic still selected.

### Interpretation (observed; not resolved)

- The alert's text indicates the Caption editor opened without a caption identifier to act on. The EXP-050 record shows the Caption ellipsis producing `String <ID> does not exist. Create it?` after an identifier had been set in the Caption field (`FX_sItem`, `FX_sCost` in that run). In T8 the Caption value was blank when the ellipsis was clicked, and the brief's procedure does not describe setting the Caption identifier first, because the brief's step set `Caption FX_sAddress` and then created the string.
- Setting `FX_sAddress` into the Caption combobox was **not** done in T8: the brief says "set Caption FX_sAddress and create the string through the Caption ellipsis", but the instruction for this task said to locate the Caption property and follow the EXP-050 ellipsis procedure, and the prompt-gate rule says to stop when the prompt differs. Setting the identifier would have been a further mutation that the brief's stop rule did not authorize without the expected prompt. This is the decision point the operator should review.
- No inference is made about the cause of the alert beyond the observed text.

### Acceptance checks (T8)

| AC | T8 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed at the gate | `t8-01`, `t8-02` | — |
| AC-2 | Satisfied in T5 (unchanged) | T5 `t5-03`, `t5-04` | — |
| AC-3 | Satisfied as observed in T6; re-read unchanged in T8 | T6 `t6-02`, `t6-04`, `t6-06`, `t6-07`; T8 `t8-01` | Not saved. |
| AC-4 | **NOT satisfied.** FX_AddressStatic Name, Type, Size and Location are set (T7); Caption FX_sAddress NOT set; FX_sAddress NOT created. Expected prompt not observed. | `t8-03`, `t8-04`, `t8-05` | Blocked; see the interpretation above. |
| AC-5 to AC-8 | Not started | — | — |

### String prompt and value evidence

- Expected prompt (`String FX_sAddress does not exist. Create it?`): **not observed.**
- Observed alert: `No object name given.` (OK only). Screenshot `t8-04`.
- String value before OK: **not applicable** (no string dialog opened).
- Edit > String readback: **not performed** (no string created; the brief's readback follows the creation).
- String confirmations (Yes) answered: **0**. OK in a string dialog: **0**.

### Action audit (T8; exact counts; reconstructed from the call sequence)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 0 (Designer). |
| `browser_snapshot` (explicit) | 3 | Gate (depth 4); FX_AddressEdit/Static target snapshot (depth 6, e617); caption-state snapshot (depth 8, e617). |
| `browser_find` (read-only) | 9 | Gate (1); Caption and Edit Property Dialog (2, one found none); caption combobox (1); alert check (1); Caption re-read (1); post-OK caption check (1); dialog/Save check (2). |
| `browser_click` (ref) | 4 | (1) FX_AddressStatic Components row; (2) Caption value cell; (3) Caption ellipsis (`Open Edit Property Dialog`, one click); (4) alert OK. |
| Typed entries | 0 | None. |
| Key presses / Escape | 0 / 0 | None. |
| Screenshots | 6 | `t8-01` to `t8-05`; a sixth not used (see inventory). |
| Waits / mouse / wheel | 0 / 0 / 0 | None. |
| String prompts seen | **0** (expected) | The expected prompt did not appear. |
| Unexpected alerts seen | **1** | `No object name given.`, dismissed with OK once. |
| String creations | **0** | None. |
| String Value edits / commits | **0 / 0** | None. |
| Caption edits | **0** | Not changed (blank). |
| Designer Save | **0** | Not pressed. |
| Toolbox drops (T8) | **0** | None. |
| Components added / changed | **0 / 0** | None. |
| Designer Form close / reopen | **0 / 0** | None. |
| Unloads (Web Client / Designer) in T8 | **0 / 0** | Cumulative 1 / 1. |
| Preference reads / changes | **0 / 0** | None. |
| Runtime open / close / Refresh / record edits | **0 / 0 / 0 / 0** | None. |
| Re-login | **0** | Session usable. |
| JavaScript / console / network / direct navigation | **0** | None. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | None. |

### Cumulative counts (T1–T8; for AC-8)

- Toolbox drops: **3** (T2 Edit, discarded by the single No in T3; T5 Edit, kept as FX_AddressEdit; T7 Static, kept as FX_AddressStatic).
- Discard prompts answered: 1 (No, T3). Yes 0. Cancel 0.
- Unloads: **Web Client 1; Designer 1** (T4). Never repeated.
- Designer Form close/reopen: 1 pair (T3 close, T5 reopen). Other Designer closes: FX_Orders (T1), FX_Items (T4).
- Strings created: **0**. Designer Save: **0**. Runtime close (T4) 1; reopen 0; Refresh 0.
- Existing-component changes: 0. Record edits: 0. Re-login: 0. Preference changes: 0.

### Worker-written-file inventory (T8)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T8 section).
- `evidence/EXP-076/t8-01-initial-state-dirty-before-caption-work.png`
- `evidence/EXP-076/t8-02-fx_addressstatic-selected-caption-row-before-ellipsis.png`
- `evidence/EXP-076/t8-03-caption-cell-activated-before-ellipsis.png`
- `evidence/EXP-076/t8-04-unexpected-alert-no-object-name-given-caption-ellipsis.png`
- `evidence/EXP-076/t8-05-after-alert-ok-caption-state-check.png`

No other file was written. Harness snapshot and console files under `evidence\playwright\` were written by the tool.

### Final state (end of T8)

- **Designer:** FX_HelloWorld01 open (only Designer Form), User scope, **dirty** (Save and Undo enabled). FX_AddressEdit configured (T6); FX_AddressStatic named, sized and located (T7); FX_AddressStatic Caption blank. No dialog open.
- **Strings:** unchanged; FX_sAddress absent.
- **Web Client:** untouched in T8.
- **Unloads:** Web Client 1; Designer 1. **Save:** 0.

### Knowledge state (T8)

| Finding | State |
| --- | --- |
| Clicking the Static's Caption ellipsis (with Caption blank) produced the alert `No object name given.` (OK only) instead of the EXP-050 `String <ID> does not exist. Create it?` prompt | **observed** (one run; `t8-04`) |
| Dismissing that alert with OK changed nothing (Caption still blank; no string; Form dirty) | **observed** (one run; `t8-05`) |
| The Caption ellipsis requires a Caption identifier to be set first (EXP-050 pattern) | **unresolved** (not tested; not authorized by T8) |
| FX_sAddress creation, Designer Save, close/reopen, runtime | **not performed** |

### Open questions and blocker (T8)

1. **Blocker (AC-4):** the expected string prompt did not appear. Operator decision needed: whether to set the Caption identifier `FX_sAddress` in the Caption field before opening the ellipsis (the EXP-050 pattern), which the brief's wording implies but the T8 instruction did not authorize without the expected prompt, or another route.
2. No string, Caption, Save or other change was made after the unexpected alert. The Form remains dirty and must not be discarded without operator approval.
3. Next task (after the decision): the Caption and string step, then the single Designer Save, close/reopen, and the runtime check.

---

## T9 — FX_sAddress caption and string: STILL BLOCKED at the Caption step (cycle 8)

Task message `d5293492-72e2-420c-9a4c-9c2098195677`, worker session `165bdbff-4485-4eb8-a7c9-3cd3fe68a3c9`. Run `R-20261013-202602-8bAy`, cycle 8, task T9. Bounded instruction: enter the Caption identifier FX_sAddress with the corrected sequence, and create the string only on the exact expected prompt.

### Gate (before any change)

- Tab list (1) before the first select; Tab 0 (Designer) selected; untargeted snapshot (depth 4): FX_HelloWorld01 the only Designer Form; User scope; Save and Undo **enabled** (dirty); no dialog (`t9-01`).
- FX_AddressStatic: Name `FX_AddressStatic`; Type Static; Size `20; 1`; Location `5.5; 3`; Caption blank.
- FX_AddressEdit: Type `MultilineEdit`; Binding Type Property; Binding `object.FX_Address` (unchanged; Components grid row `FX_AddressEdit MultilineEdit object.FX_Address 1 0`).

### Sequence and observations

1. **Caption value cell clicked once** (FX_AddressStatic selected). **Result: the alert `No object name given.` (OK only)** appeared again (`t9-02`). Same alert as T8; so the alert follows the Caption value cell as well as the Caption ellipsis, with Caption blank.
2. **Alert dismissed with OK once** (the alert's own control). No string dialog, no Yes, no No.
3. **Fresh untargeted snapshot (1)** and **corrected visible inspection (1)** (`t9-03`): no dialog; FX_AddressStatic selected; Caption blank; Form dirty; the "Open Edit Property Dialog" tooltip on the Caption ellipsis.
4. **Caption editor attempt (one corrected click):** the Caption textbox that became active is the **Property Description field** at the bottom of the Properties panel (not the Caption value editor). I did **not** type into it.
5. **Caption value cell clicked once more** (`t9-04`): no alert appeared this time; no combobox became active; the Properties tree had scrolled, leaving the Caption row out of view; my click left focus on the read-only Free-Form Data Type row. Nothing was typed.
6. **Final read-only checks:** no dialog; Save and Undo enabled; no reference to `FX_sAddress` anywhere in the page.

### Why I stopped

- The brief allows one fresh untargeted snapshot and one corrected visible inspection before stopping. Both were used.
- The expected prompt `String FX_sAddress does not exist. Create it?` has not appeared in T8 or T9.
- The Caption identifier could not be entered safely: the active editor was the wrong control, and the Caption value cell still raises `No object name given.` whenever the Caption is blank. Any further attempt would be an uncertain creation or entry action, which the brief prohibits repeating.
- No string was created, no existing string was touched, no Save was pressed, and the Form remains dirty.

### Acceptance checks (T9)

| AC | T9 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed at the gate | `t9-01` | — |
| AC-2 | Satisfied in T5 (unchanged) | T5 `t5-03`, `t5-04` | — |
| AC-3 | Satisfied as observed in T6; re-read unchanged in T9 | T6 `t6-02`, `t6-04`, `t6-06`, `t6-07`; T9 `t9-01` | Not saved. |
| AC-4 | **NOT satisfied.** Static Name, Type, Size and Location set (T7). Caption `FX_sAddress` NOT set; the string FX_sAddress NOT created; the expected prompt NOT observed in T8 or T9. | `t9-02`, `t9-03`, `t9-04` | Blocked (see above). |
| AC-5 to AC-8 | Not started | — | — |

### String prompt and value evidence

- Expected prompt `String FX_sAddress does not exist. Create it?`: **not observed** (T8 and T9).
- Alert seen twice: `No object name given.` (OK only). Screenshots `t8-04` and `t9-02`.
- String value before OK: **not applicable** (no string dialog opened).
- Edit > String readback: **not performed** (no string created).
- Yes answers 0; OK in string dialogs 0; string creations 0.

### Action audit (T9; exact counts; reconstructed from the call sequence)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 0 (Designer). |
| `browser_snapshot` (explicit) | 2 | Gate (depth 4); fresh untargeted inspection after the first alert (depth 3). |
| `browser_find` (read-only) | 8 | Gate (1); alert locate (1); post-alert (1); Caption textbox active check (1); alert re-check after value-cell click (1); alert/dialog check (1); final Save/dialog/sAddress check (1); Caption/alert re-check (1). |
| `browser_click` (ref) | 5 | (1) Caption value cell (first); (2) alert OK; (3) Caption textbox in the Description area (not typed); (4) Caption value cell (second). Plus one Components row? No: no Components click in T9. |
| Typed entries | 0 | None. |
| Key presses / Escape | 0 / 0 | None. |
| Screenshots | 5 | `t9-01` to `t9-04` plus the T9 gate; see the inventory. |
| Waits / mouse / wheel | 0 / 0 / 0 | None. |
| Alerts dismissed | **2** | Both `No object name given.`, each with OK once. |
| String prompts seen (expected) | **0** | — |
| String creations / Yes answers | **0 / 0** | — |
| Caption edits | **0** | Caption still blank. |
| Designer Save | **0** | Not pressed. |
| Toolbox drops (T9) | **0** | Cumulative 3. |
| Components added / changed | **0 / 0** | None. |
| Designer Form close / reopen | **0 / 0** | None. |
| Unloads (Web Client / Designer) in T9 | **0 / 0** | Cumulative 1 / 1. |
| Preference reads / changes | **0 / 0** | None. |
| Runtime open / close / Refresh / record edits | **0 / 0 / 0 / 0** | None. |
| Re-login | **0** | Session usable. |
| JavaScript / console / network / direct navigation | **0** | None. |
| Ref-not-found / timeouts | **0 / 0** | None. |

### Cumulative counts (T1–T9; for AC-8)

- Toolbox drops: **3** (T2 Edit, discarded by the single No in T3; T5 Edit, kept as FX_AddressEdit; T7 Static, kept as FX_AddressStatic).
- Discard prompts answered: 1 (No, T3). Yes 0. Cancel 0.
- Unloads: **Web Client 1; Designer 1** (T4). Never repeated.
- Designer Form close/reopen: 1 pair (T3 close, T5 reopen). Other Designer closes: FX_Orders (T1), FX_Items (T4).
- Strings created: **0**. Designer Save: **0**. Runtime close (T4) 1; reopen 0; Refresh 0.
- Existing-component changes: 0. Record edits: 0. Re-login: 0. Preference changes: 0.

### Worker-written-file inventory (T9)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T9 section).
- `evidence/EXP-076/t9-01-gate-dirty-static-selected-caption-blank.png`
- `evidence/EXP-076/t9-02-caption-value-cell-clicked-editor-state.png` (shows the `No object name given.` alert)
- `evidence/EXP-076/t9-03-after-alert-ok-caption-blank-ellipsis-visible.png`
- `evidence/EXP-076/t9-04-caption-state-after-value-cell-retry-no-string.png`

No other file was written. Harness snapshot and console files under `evidence\playwright\` were written by the tool.

### Final state (end of T9)

- **Designer:** FX_HelloWorld01 open (only Designer Form), User scope, **dirty** (Save and Undo enabled). FX_AddressEdit configured (T6); FX_AddressStatic named, sized and located (T7); Caption blank. No dialog open.
- **Strings:** unchanged; FX_sAddress absent.
- **Web Client:** untouched in T9.
- **Unloads:** Web Client 1; Designer 1. **Save:** 0.

### Knowledge state (T9)

| Finding | State |
| --- | --- |
| The Caption value cell (with Caption blank) raises the alert `No object name given.` (OK only), reproduced in T8 and T9 | **observed** (two runs; `t8-04`, `t9-02`) |
| The Caption ellipsis (with Caption blank) raises the same alert (T8) | **observed** (one run; `t8-04`) |
| The expected prompt `String FX_sAddress does not exist. Create it?` has not appeared | **observed** (two runs; not seen) |
| Typing the identifier into the Caption editor is possible only in the Caption value combobox, which the T9 attempts did not reach | **unresolved** |
| The Property Description textbox became active on a Caption click in T9 | **observed**; cause unresolved |
| FX_sAddress creation, Designer Save, close/reopen, runtime | **not performed** |

### Open questions and blocker (T9)

1. **Blocker (AC-4), decision needed:** the Caption editor blocks with `No object name given.` when the Caption is blank, and the expected string prompt has not appeared in two attempts. The operator should decide the route: (a) a supervised step on the Caption combobox itself (type the identifier `FX_sAddress` into the value combobox, then Tab), which this task did not reach safely; (b) a different route the operator names; or (c) stop the Caption step and leave FX_AddressStatic captionless for the operator's review.
2. The Form stays dirty. Do not discard it without operator approval.
3. No other blocker.

---

## T10 — operator-authorized Caption procedure (EXP-062-R4 T4 route): FX_sAddress Caption and string created; Designer UNSAVED (cycle 10)

Task message `5458c861-ffdc-4e97-b8be-dfbd7aa6427e`, worker session `cff16803-d0e5-4c23-af1b-b6704853f60f` (new worker session; the T1–T9 browser state was inherited, not reset). Run `R-20261013-202602-8bAy`, cycle 10, task T10. Bounded instruction: Caption `FX_sAddress` on FX_AddressStatic, then the exact string prompt once, String Value `Address`, Tab commit, OK once, Edit > String readback, Cancel. No Designer Save, no close/reopen, no Toolbox drop, no unload, no runtime action.

### Sources read before the first browser action

- `evidence/EXP-062-R4/T4-fx-simport-string-and-caption-assignment-report.md` (rows 4–7 of §3: Caption value click → combobox `[active]`; type into the Caption combobox; Tab commit; ellipsis → Yes → String dialog → value Tab → OK).
- This record, T8 and T9 sections (the `No object name given.` alert on a blank Caption; the Property Description textbox became active in T9).

### Gate (before any change; read-only)

| Check | Result | Evidence |
| --- | --- | --- |
| Tab list before the first select | 2 tabs; tab 0 Designer (current), tab 1 Web Client | `browser_tabs` list |
| Tab select | Tab 0 (Designer), after the list | `browser_tabs` select |
| Fresh untargeted snapshot (depth 6) | Designer tab FX_HelloWorld01 selected; footer `ScopeType: User / ScopeName: <operator>`; Save and Undo enabled (dirty); no dialog; FX_AddressStatic selected | snapshot (in transcript) |
| Visible gate | FX_AddressStatic (Static), Size `20; 1`, Location `5.5; 3`, Caption blank; grid rows `FX_AddressEdit MultilineEdit object.FX_Address 1 0` and `FX_AddressStatic Static 1 0` | `t10-01` |
| FX_AddressEdit gate | Type MultilineEdit; Binding Type Property; Binding object.FX_Address (grid row, `t10-01`) | `t10-01` |

### Sequence and native responses (in order)

| # | Action | Native response | Result |
| --- | --- | --- | --- |
| 1 | Scroll the Properties panel up (mouse wheel, pointer over the grid first, then over the Properties list; view only) | First wheel had no effect; after pointer move, the panel scrolled | Caption row visible at top of the Design group (`t10-04`) |
| 2 | Read-only find `Caption` | 1 match: treeitem `Caption`, value cell with generic `e686` (`cursor=pointer`) | Ref located |
| 3 | **Click `e686` (intended: the Caption value text area)** | **Deviation:** the generated code targeted `.mg-arrow-cell-icon`, i.e. the dropdown ARROW, not the text area. The read-only Caption string-ID list OPENED (no item selected) | `t10-05` (list open) |
| 4 | Read-only find `Caption` | 48 matches: combobox `[expanded] [active]` with the string-ID listbox | Caption combobox positively identified as the active editor |
| 5 | Close the list by clicking the SAME visible arrow toggle (mouse click at x 1842, y 255; coordinate click, not Escape) | List closed; Caption blank; combobox focused | `t10-06` |
| 6 | Read-only find regex `combobox` | `combobox [active]` (not expanded) `e1528`; arrow `e16829` | Caption combobox active, no list |
| 7 | **Click `e1528`** (the Caption combobox editor; its centre is the value text area, not the arrow) | Combobox focused; blank; no list | `t10-07` (edit state) |
| 8 | Type `FX_sAddress` into the active Caption combobox (one fill, not committed) | Combobox reads `FX_sAddress`; no list | `t10-08` |
| 9 | Tab (once) | Caption committed: Properties Caption `FX_sAddress`; canvas shows the raw ID on FX_AddressStatic; focus moved to the adjacent ellipsis (not activated) | `t10-09` |
| 10 | Read-only find: `Open Edit Property Dialog` (0); regex button (0); `e689|e1528|e1511` (2) | `e689` = the ellipsis button in the active Caption cell | Ellipsis ref located |
| 11 | **Click the Caption ellipsis `e689`, once** | Native alert `String FX_sAddress does not exist. Create it?` with buttons Yes (default focus) and No; a String dialog is already open BEHIND the alert | `t10-10` (exact prompt; no `No object name given.`) |
| 12 | **Click Yes `e16835`, once** (no Enter) | Alert closed; String dialog in front: Name `FX_sAddress`; String Value prefilled `FX_s Address`; Version `User version for user an…` | `t10-11` (prefill, before edit) |
| 13 | Click the String Value cell `e16903` | Textbox active; prefill selected | `t10-12` |
| 14 | Type `Address` into the active String Value textbox `e16931` (one fill; not committed) | Textbox reads `Address` | `t10-13` |
| 15 | Tab (once) | String Value committed: `Address`; no edit mode | `t10-14` (pre-OK evidence) |
| 16 | **Click OK `e16874`, once** | String dialog closed; no further prompt | `t10-15` |
| 17 | Click the Edit menu `e5`; find `String` (1); click `Edit > String` `e16977` | Global Objects dialog; Strings list unfiltered | `t10-16` |
| 18 | Type `FX_sAddress` into the Strings filter `e17007` (slowly) | One row: `FX_sAddress` (rendered red) | `t10-17` |
| 19 | Click the row `e17308` (single click; selection only) | Properties of the string: Name `FX_sAddress`; String Value `Address`; Description blank; Version `User version for user an…` | `t10-18` (readback) |
| 20 | Click Cancel `e17300` (not Escape, not OK) | Global Objects closed; no dialog | `t10-19` |

### Readbacks after the change (no component modified in T10 beyond the Caption)

| Item | Readback | Evidence |
| --- | --- | --- |
| FX_AddressStatic Name / Type / Caption | `FX_AddressStatic` / Static / `FX_sAddress` | `t10-26` |
| FX_AddressStatic Size / Location (Unit Char) | Size `20; 1` (Width 20; Height 1); Location `5.5; 3` (Top 5.5; Left 3) | `t10-27` |
| FX_AddressEdit Name / Type | `FX_AddressEdit` / MultilineEdit | `t10-20` |
| FX_AddressEdit Binding Type / Binding | Property / `object.FX_Address` | `t10-22` |
| FX_AddressEdit Size / Location (Unit Char) | Size `37.05; 4` (Width 37.05; Height 4); Location `5.5; 23.75` (Top 5.5; Left 23.75) | `t10-25` |
| FX_AddressEdit Inheritance › View Attributes Inherited from | `FX_Address` (observed; not otherwise examined) | `t10-25` |
| String FX_sAddress (Edit > String) | Name `FX_sAddress`; String Value `Address` | `t10-18` |
| Canvas | FX_AddressStatic shows the raw ID `FX_sAddress` (right-justified) on row 5.5; FX_AddressEdit multi-line box below it, same column, no visible overlap | `t10-09`, `t10-20` |
| Form state | Save control has no disabled marker (dirty); **Undo now `[disabled]`** (it was enabled before the string dialog). No dialog open | read-only finds; `t10-19` |

Other components: Components grid rows for FX_LabelStatic, FX_LabelEdit, FX_CodeStatic, FX_CodeEdit are unchanged in position and Tab (rows 3–6, Pane 1) in `t10-19`; numeric readbacks of those four were not repeated in T10 (not needed for the authorized change).

### Acceptance checks (T10)

| AC | T10 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed at the gate (identity, User scope, dirty, FX_AddressStatic geometry, FX_AddressEdit binding) | `t10-01` | — |
| AC-3 | Re-read unchanged (Type, Binding, Size 37.05; 4, Location 5.5; 23.75; FX_AddressStatic 20; 1 at 5.5; 3) | `t10-20`, `t10-22`, `t10-25`, `t10-26`, `t10-27` | Not saved. |
| AC-4 | **Satisfied as observed (not saved):** Caption `FX_sAddress` committed; the exact prompt appeared; one Yes; String Value `Address` committed with Tab before OK; OK once; Edit > String readback `FX_sAddress` = `Address` | `t10-07`–`t10-09` (Caption), `t10-10` (prompt), `t10-11`–`t10-14` (prompt, prefill, typed, committed), `t10-15` (after OK), `t10-16`–`t10-18` (readback) | Persistence after Save not verified (no Save). Cross-session durability not claimed. |
| AC-5 | **Not performed** (no Designer Save in T10, by instruction) | — | Pending the next task. |
| AC-6 to AC-8 | Not started in T10 | — | — |

### Deviation and correction (T10)

- Step 3: the first Caption click landed on the dropdown ARROW (the `.mg-arrow-cell-icon` in the Caption value cell), not the text area, and opened the read-only string list. No item was selected and nothing was typed while the list was open. Closed by clicking the same arrow toggle (step 5, a coordinate click), not Escape. Verified by screenshot `t10-06` and find (step 6). The Caption text area was then clicked through the combobox editor ref (step 7) and verified as `[active]` before typing (`t10-07`).
- This is recorded as an action-control click, not a blocker. The `No object name given.` alert did NOT appear in T10 (Caption was set before the ellipsis).

### Observations (observed only)

1. With the Caption committed first (`FX_sAddress`), the ellipsis produced the expected prompt `String FX_sAddress does not exist. Create it?` (Yes/No) and the String dialog opened behind it (one run). In T8 and T9 the ellipsis and the value cell produced `No object name given.` with Caption blank. Causal link (commit before ellipsis) is **candidate** (one run; the order was the only change).
2. The String dialog's default prefill was `FX_s Address` (the EXP-062-R4 T4 prefill was `FX_s Import`); replaced by typing `Address` and committed with Tab before OK (`t10-14`).
3. After the string dialog closed, the Designer toolbar Undo control reads `[disabled]` while Save has no disabled marker. Not investigated further (observed only; cause unresolved).
4. The Global Objects Strings row for `FX_sAddress` is rendered in red text (`t10-17`, `t10-18`). Meaning not established (not claimed as unsaved).
5. Mouse-wheel scrolling of the Properties panel works only with the pointer over the panel (two wheel calls had no effect when the pointer was elsewhere).
6. `t10-21` shows the top of the Properties panel (the wheel had not yet reached the panel); it is not a Layout readback. The Layout and Binding readbacks are in `t10-22`–`t10-25` and `t10-27`.

### Action audit (T10; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 0 (Designer), after the list. |
| `browser_snapshot` (explicit, untargeted) | 1 | Gate (depth 6). No recovery snapshot used. |
| `browser_find` (read-only) | 21 | Two finds returned 0 matches (`Open Edit Property Dialog`; a regex for an unnamed button); no find errored. |
| `browser_click` (ref) | 12 | e686 (arrow; deviation), e1528 (Caption editor), e689 (ellipsis), e16835 (Yes), e16903 (String Value cell), e16874 (OK), e5 (Edit menu), e16977 (Edit > String), e17308 (string row, selection), e17300 (Cancel), e565 (FX_AddressEdit row, selection), e590 (FX_AddressStatic row, selection). |
| Coordinate click | 1 | Caption arrow toggle at x 1842, y 255 (closed the list; no selection). |
| `browser_type` | 3 | (1) Caption `FX_sAddress` (combobox); (2) String Value `Address`; (3) Strings filter `FX_sAddress` (slow). |
| Key presses: Tab / Escape / Enter | 2 / 0 / 0 | Tab: Caption commit; String Value commit. |
| Mouse moves / wheel | 3 / 9 | Moves are pointer positioning only; wheel calls are view scrolls. |
| Screenshots | 27 | `t10-01` to `t10-27`. |
| Waits / JS / console / network / navigation / refresh | 0 | None. |
| Caption assignments | 1 | FX_AddressStatic Caption `FX_sAddress`. |
| Caption list opened / closed without selection | 1 / 1 | Deviation (step 3). No Escape. |
| Alerts seen / dismissed | 0 / 0 | `No object name given.` did not recur. |
| String prompts seen / Yes answered | 1 / 1 | Exact text. No No. |
| Strings created | **1** | `FX_sAddress` = `Address`. No other string created or edited. |
| String dialog OK | 1 | After the Tab commit of the value. |
| Global Objects Cancel | 1 | After the readback. |
| Toolbox drops / components added / deleted | 0 / 0 / 0 | None in T10. |
| Existing components changed | 0 | Only FX_AddressStatic Caption (the authorized change). |
| Designer Save | **0** | Not pressed. |
| Form close / reopen | 0 / 0 | None. |
| Top-toolbar Delete Form Definition / grid trash clicks | 0 / 0 | None. |
| Unloads in T10 (cumulative Web Client 1; Designer 1) | 0 | Not repeated. |
| Runtime open/close/Refresh; record edits | 0 | None. |
| Preference reads / changes | 0 / 0 | None. |
| Re-login | 0 | Session usable throughout. |
| Recovery snapshots / ref-not-found / timeouts | 0 / 0 / 0 | None. |

### Worker-written-file inventory (T10)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T10 section).
- `evidence/EXP-076/t10-01-gate-dirty-fx_addressstatic-selected-caption-blank-before-edit.png`
- `evidence/EXP-076/t10-02-after-properties-scroll-up-caption-row-location.png`
- `evidence/EXP-076/t10-03-properties-scrolled-up-caption-search.png`
- `evidence/EXP-076/t10-04-properties-top-caption-row-visible-check.png`
- `evidence/EXP-076/t10-05-after-caption-value-click-state-check.png` (the list opened by the arrow click)
- `evidence/EXP-076/t10-06-after-arrow-toggle-list-closed-caption-state.png`
- `evidence/EXP-076/t10-07-caption-text-area-clicked-edit-mode-before-typing.png`
- `evidence/EXP-076/t10-08-caption-typed-fx_saddress-before-tab-commit.png`
- `evidence/EXP-076/t10-09-caption-committed-fx_saddress-after-tab-readback.png`
- `evidence/EXP-076/t10-10-after-caption-ellipsis-click-prompt-state.png`
- `evidence/EXP-076/t10-11-string-dialog-after-yes-initial-value-before-edit.png`
- `evidence/EXP-076/t10-12-string-value-cell-clicked-editor-state-before-typing.png`
- `evidence/EXP-076/t10-13-string-value-typed-address-before-tab-commit.png`
- `evidence/EXP-076/t10-14-string-value-address-committed-before-ok-pre-ok-evidence.png`
- `evidence/EXP-076/t10-15-after-string-ok-caption-fx_saddress-canvas-state.png`
- `evidence/EXP-076/t10-16-edit-string-view-opened-before-filter.png`
- `evidence/EXP-076/t10-17-edit-string-view-filter-fx_saddress-readback.png`
- `evidence/EXP-076/t10-18-edit-string-readback-fx_saddress-string-value-address.png`
- `evidence/EXP-076/t10-19-after-global-objects-cancel-designer-state.png`
- `evidence/EXP-076/t10-20-recheck-fx_addressedit-selected-properties-top.png`
- `evidence/EXP-076/t10-21-recheck-fx_addressedit-binding-and-layout-readback.png` (top of panel; not decisive)
- `evidence/EXP-076/t10-22-recheck-fx_addressedit-data-source-scrolled.png`
- `evidence/EXP-076/t10-23-recheck-fx_addressedit-layout-size-location-readback.png` (mid-panel; Binding only visible)
- `evidence/EXP-076/t10-24-recheck-fx_addressedit-layout-group-readback.png` (top again)
- `evidence/EXP-076/t10-25-recheck-fx_addressedit-layout-size-location-bottom.png`
- `evidence/EXP-076/t10-26-recheck-fx_addressstatic-layout-caption-binding-readback.png`
- `evidence/EXP-076/t10-27-recheck-fx_addressstatic-layout-size-location-readback.png`

Tool-generated, not worker-authored: accessibility snapshot and console files under `evidence/playwright/` (written by the browser tool on each action). Not read as evidence.

### Final state (end of T10)

- **Designer:** FX_HelloWorld01 open (the only Designer Form), Name `FX_HelloWorld01`, User scope, **DIRTY and UNSAVED** (Save control enabled; Undo `[disabled]`). FX_AddressStatic: Caption `FX_sAddress`, Static, Size 20; 1, Location 5.5; 3. FX_AddressEdit: MultilineEdit, Binding object.FX_Address, Size 37.05; 4, Location 5.5; 23.75. No dialog open; no list open; no picker open.
- **Strings:** `FX_sAddress` = `Address`, created once in the open Designer session (unsaved with the Form).
- **Web Client:** untouched in T10 (runtime FX_HelloWorld01 closed in T4; not opened in T10).
- **Unloads (cumulative):** Web Client 1, Designer 1. **Designer Save:** 0. **Re-login:** 0. **Record edits:** 0.

### Knowledge state (T10)

| Finding | State |
| --- | --- |
| Caption value text area click can land on the dropdown arrow (opens the string list); the combobox `[active]` state is reached after closing that list by the same arrow and clicking the combobox editor | **observed** (one run; `t10-05`–`t10-07`) |
| Typing `FX_sAddress` into the active Caption combobox and Tab commits it (canvas shows the raw ID) | **observed** (one run; `t10-08`, `t10-09`) |
| The ellipsis, with Caption set to `FX_sAddress`, shows `String FX_sAddress does not exist. Create it?` (Yes/No); Yes opens the String dialog (prefill `FX_s Address`) | **observed** (one run; `t10-10`, `t10-11`) |
| String Value `Address` committed with Tab before OK, OK once, Edit > String shows `FX_sAddress` = `Address` | **observed** (one run; `t10-14`, `t10-15`, `t10-18`) |
| `No object name given.` on a blank Caption (T8, T9) did not recur once the Caption was set first | **observed** (one run); causal link **candidate_procedure** (not replay-verified) |
| Undo `[disabled]` after the string dialog | **observed**; cause **unresolved** |
| Persistence of the string and Caption after Designer Save and close/reopen | **unresolved** (not performed) |

### Open questions and next step (T10)

1. **Next permitted action (separate task; not performed in T10):** exactly one Designer Save through the native toolbar Save (record the native response verbatim), then close the clean FX_HelloWorld01 Designer Form once and reopen it once (toolbar Open and Select Form, or the Form menu recent-forms entry), verify both components' names, Type, geometry, Caption and binding, then the runtime check for FX001 and FX002 (AC-5 to AC-7).
2. The Form stays dirty and unsaved. Do not discard it without operator approval.
3. No blocker in T10. Caption and string steps completed; the single deviation (arrow click) is recorded above.

---

## T11 — the single Designer Save, clean close/reopen and recovery readback (cycle 11)

Task message `99cebcaf-722e-4513-9bae-cacafdc826d9`, worker session `cff16803-d0e5-4c23-af1b-b6704853f60f`. Run `R-20261013-202602-8bAy`, cycle 11, task T11. Bounded instruction: one native Designer Save; clean close once; reopen once; readback only. No second Save, unload, Toolbox drop, string creation, modification, runtime opening, Refresh or record edit.

### Pre-Save gate (read-only; before the Save)

| Check | Result | Evidence |
| --- | --- | --- |
| Tab list before any action | 2 tabs; tab 0 Designer (current), tab 1 Web Client. No tab select was needed (tab 0 already current and verified by fresh snapshot). | `browser_tabs` list |
| Identity | Designer tab `FX_HelloWorld01`; footer `ScopeType: User / ScopeName: <operator>`; Form properties Name `FX_HelloWorld01` after reopen (pre-Save identity from the same tab) | `t11-01`, snapshot |
| Dirty state | Save enabled; Undo enabled; no dialog; no open list (`dialog`/`listbox expanded`/`combobox expanded` finds: none) | `t11-01`; find |
| FX_AddressStatic | Name `FX_AddressStatic`; Type Static; Caption `FX_sAddress`; Size `20; 1`; Location `5.5; 3` | `t11-01`, `t11-02` |
| FX_AddressEdit | Name `FX_AddressEdit`; Type MultilineEdit; Binding Type Property; Binding `object.FX_Address`; Size `37.05; 4`; Location `5.5; 23.75` | `t11-03`, `t11-04`; finds |
| Original components (grid rows; accessibility) | FX_LabelStatic Static 1 3; FX_LabelEdit Edit object.FX_Label 1 4; FX_CodeStatic Static 1 5; FX_CodeEdit Edit object.FX_Code 1 6 (Pane 1). Matches the T1 baseline (type, data source, pane, tab). | find on the grid |

Geometry of the four original components was NOT re-read in T11 (their numeric Layout values were last read in T1 and T2; no T10 or T11 action selected or changed them). This is a stated limit.

### Native Save (exactly one)

- Invoked once: the Designer top-toolbar **Save** (native), one click.
- Native response: **no message, dialog or error text appeared** (tool output and `t11-05` show none). Save became disabled and Undo became disabled. Read verbatim: no response text; the control state changed.
- Post-Save check: Save `[disabled]`; Undo `[disabled]`; no dialog (`t11-05`).
- Save count T11: **1**. Cumulative Designer Save count: **1**.

### Close and reopen (each once)

1. Form-tab close `closable FX_HelloWorld01` (once). **No save or discard prompt appeared** (`t11-06`: the Designer empty; Save and Undo disabled).
2. Toolbar Open (accessible name `Design`) once, then Select Form. The Filter was prefilled `FX_HelloWorld01` with one row; the row was selected once; OK once (`t11-07`). No Form-menu route was needed.
3. Reopened (`t11-08`): Name `FX_HelloWorld01`; footer `ScopeType: User / ScopeName: <operator>`; Save and Undo disabled; no dialog; the canvas shows the new Address field (the caption now renders as `Address`, not the raw ID `FX_sAddress` seen before the Save).
4. Details panel was collapsed after reopen; expanded (view toggle), then the Components tab selected (view). Pane (00) and Pane (01) were expanded with the grid's Expand button (view only; `t11-09`–`t11-12`).

### Post-reopen readback (exact values compared with pre-Save)

| Component | Post-reopen grid row | Properties readback | Pre-Save value | Match |
| --- | --- | --- | --- | --- |
| FX_LabelGridCol / FX_CodeGridCol (Pane 00) | GridColumn `object.FX_Label` (col 1) / `object.FX_Code` (col 2) | not re-selected | — | presence only (`t11-12`) |
| FX_LabelStatic | Static, Pane 1, Tab 3 | not re-selected | Static 1 3 | presence and grid row match |
| FX_LabelEdit | Edit `object.FX_Label`, Pane 1, Tab 4 | not re-selected | same | grid row match |
| FX_CodeStatic | Static, Pane 1, Tab 5 | not re-selected | same | grid row match |
| FX_CodeEdit | Edit `object.FX_Code`, Pane 1, Tab 6 | not re-selected | same | grid row match |
| FX_AddressEdit | MultilineEdit, `object.FX_Address`, Pane 1, Tab 0 | Name `FX_AddressEdit`; Type MultilineEdit; Binding Type `Property`; Binding `object.FX_Address`; Size `37.05; 4` (Width 37.05; Height 4); Location `5.5; 23.75` (Top 5.5; Left 23.75) | identical | **yes** (`t11-13`) |
| FX_AddressStatic | Static, Pane 1, Tab 0 | Name `FX_AddressStatic`; Type Static; Caption `FX_sAddress`; Binding Type `None` (Static; expected); Size `20; 1`; Location `5.5; 3` | identical | **yes** (`t11-14`) |

### String readback after reopen (read-only)

- Edit > String (once); Strings filter `FX_sAddress` (slow entry; one row `FX_sAddress`); row selected once; Properties: Name `FX_sAddress`, String Value `Address`, Description blank, Version `User version for user <operator>` (`t11-15`).
- Closed with **Cancel** (not OK, not Escape).

### Final state (end of T11)

- Designer: FX_HelloWorld01 open (reopened), User scope, **clean** (Save and Undo disabled), no dialog, no open list. Details expanded (view toggle). FX_AddressStatic selected.
- Web Client tab untouched; the runtime FX_HelloWorld01 was NOT opened or refreshed in T11 (closed in T4; not reopened).
- Unloads (cumulative): Web Client 1, Designer 1. Toolbox drops (cumulative): 3. Strings created (cumulative): 1. Runtime edits: 0. Re-logins: 0.

### Acceptance checks (T11)

| AC | T11 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed at the gate (identity, User scope, dirty, component states) | `t11-01`–`t11-04` | Original component geometry not re-read in T11. |
| AC-3 | Re-read before Save and after reopen: identical. Geometry before Save is visible in `t11-04`; after reopen the geometry values are accessibility readbacks (`t11-13` shows Name and Type only). | `t11-03`, `t11-04`, `t11-13`; find output | — |
| AC-4 | String readback after reopen: `FX_sAddress` = `Address`; Caption `FX_sAddress` persisted through reopen | `t11-14`, `t11-15` | Persistence beyond the observed close/reopen is not claimed. |
| AC-5 | **Satisfied as observed:** exactly one native Save; silent response; Save disabled afterwards; no other component changed | `t11-05` (post-Save); Save count 1 | The Save response was silent; no message text to quote. |
| AC-6 | **Satisfied as observed:** clean Form closed once (no prompt), reopened once in User scope; both components present with the same name, Type, geometry, Caption and binding | `t11-06`, `t11-08`, `t11-12`, `t11-13`, `t11-14`; geometry for both components from accessibility readbacks (find output) | Observed close/reopen recovery only. The Size and Location rows of FX_AddressStatic are not visible in any T11 screenshot. |
| AC-7 | **Not performed in T11** (runtime is the next and final task) | — | — |
| AC-8 | Partial: cumulative counts recorded here; final report pending the runtime task | this section | — |

### Action audit (T11; exact counts; reconstructed from the call sequence)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before any action. |
| `browser_tabs` select | 0 | Tab 0 already current; the snapshot verified it. |
| `browser_snapshot` (explicit) | 1 | Gate (depth 6). No recovery snapshot used. |
| `browser_find` (read-only) | 33 | No errored call. Includes the pre-Save dialog/list checks, the post-Save check, the reopen checks, and the string filter and readback checks. (The harness audit `harness-audit-T11.md` shows 33; this cell previously said 32.) |
| `browser_click` (ref) | 16 | FX_AddressEdit row (pre-Save; selection); **Save (native, once)**; FX_HelloWorld01 Form-tab close (once); toolbar Open (`Design`, once); Select Form row; Select Form OK (once); Details Expand Panel; Components tab; Pane (01) treeitem (selection; did not expand); Components Expand (all panes); FX_AddressEdit row (post-reopen selection); FX_AddressStatic row (selection); Edit menu; Edit > String; FX_sAddress row (selection); Global Objects Cancel. |
| `browser_type` | 1 | Strings filter `FX_sAddress`, slow entry (read-only filter). No Designer text typed. |
| Key presses (Tab/Escape/Enter) | 0 / 0 / 0 | None. |
| Mouse moves / wheel | 2 / 2 | Pointer positioning and Properties scroll only (pre-Save). |
| Screenshots | 16 | `t11-01` to `t11-16`. |
| Waits / JS / console / network / navigation / refresh | 0 | None. |
| **Designer Save** | **1** | Native toolbar, once; silent response. |
| Designer Form close / reopen | 1 / 1 | Clean close; reopen in User scope. |
| Unload (Web Client / Designer) in T11 | 0 / 0 | Cumulative 1 / 1, not repeated. |
| Toolbox drops in T11 | 0 | Cumulative 3. |
| Components added / deleted / changed | 0 / 0 / 0 | None. |
| String created / edited | 0 / 0 | Readback only (cumulative created 1, from T10). |
| Save-prompt or discard answers | 0 | None appeared (close was clean). |
| Top-toolbar Delete Form Definition / grid trash clicks | 0 / 0 | None. |
| Runtime open/close/Refresh; record edits | 0 | None. |
| Preference reads / changes | 0 / 0 | None. |
| Re-login | 0 | Session usable throughout. |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | None. |

### Worker-written-file inventory (T11)

- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T11 section).
- `evidence/EXP-076/t11-01-pre-save-dirty-identity-both-address-components-in-grid.png`
- `evidence/EXP-076/t11-02-pre-save-fx_addressstatic-name-type-caption-readback.png`
- `evidence/EXP-076/t11-03-pre-save-fx_addressedit-name-type-readback.png`
- `evidence/EXP-076/t11-04-pre-save-fx_addressedit-layout-size-location-binding-readback.png`
- `evidence/EXP-076/t11-05-after-single-native-save-clean-state-check.png`
- `evidence/EXP-076/t11-06-after-single-form-tab-close-no-prompt-state.png`
- `evidence/EXP-076/t11-07-select-form-dialog-after-toolbar-open.png`
- `evidence/EXP-076/t11-08-reopened-fx_helloworld01-identity-user-scope-clean.png`
- `evidence/EXP-076/t11-09-reopened-components-grid-expanded-all-rows.png` (Collections tab; not decisive for components)
- `evidence/EXP-076/t11-10-reopened-components-tab-rows-visible.png` (panes collapsed; not decisive)
- `evidence/EXP-076/t11-11-pane01-expand-attempt-state.png` (Pane (01) selected, not expanded)
- `evidence/EXP-076/t11-12-reopened-components-expanded-grid-rows.png`
- `evidence/EXP-076/t11-13-reopened-fx_addressedit-name-type-readback.png`
- `evidence/EXP-076/t11-14-reopened-fx_addressstatic-caption-type-geometry-readback.png` (shows Name, Caption and Type; the Size and Location rows are below the visible Properties area, so the geometry values for this step are accessibility readbacks, not visible in this image)
- `evidence/EXP-076/t11-15-reopened-edit-string-fx_saddress-value-address-readback.png`
- `evidence/EXP-076/t11-16-final-state-after-string-cancel-save-disabled-no-dialog.png`

Tool-generated, not worker-authored: accessibility snapshot and console files under `evidence/playwright/` (written by the browser tool on each action). Not read as evidence.

### Observations (observed only)

1. The native Designer Save returned no message or dialog; Save and Undo became disabled.
2. The Form closed cleanly (no prompt) and reopened with all Address components and the string intact.
3. After reopen the Address caption renders as `Address` on the canvas (T10's pre-Save canvas showed the raw ID `FX_sAddress`). Cause not investigated (observed only).
4. The Details panel reopened collapsed and on the Collections tab; the Pane (00)/(01) trees were collapsed until the grid's Expand button was used.
5. The FX_AddressStatic Binding Type reads `None` (a Static has no binding; expected).

### Open questions and next step (T11)

1. **Next and final worker task (not performed in T11):** runtime. Close the clean runtime FX_HelloWorld01 Form once if open; reopen once via Form > Open > Select Form; one toolbar Refresh; for FX001 and FX002 record the Code and Label values and the Address field (caption Address, multi-line, empty). No record edits.
2. Persistence beyond the observed close/reopen is not claimed.
3. No blocker in T11.

---

## T12 — runtime verification and final acceptance (cycle 12; FINAL WORKER TASK)

Task message `754e7925-ba08-4519-9a51-f70c21de1654`, worker session `cff16803-d0e5-4c23-af1b-b6704853f60f`. Full report: `evidence/EXP-076/T12-final-acceptance-report.md` (AC-1 to AC-8 matrix, chronological T1–T12 outcome, reconciled audit, file inventory, limits).

### Actions (summary)

1. Tab list (before any select); Designer tab 0 verified (FX_HelloWorld01, User, clean, no dialog).
2. Tab select to the Web Client (tab 1). The runtime FX_HelloWorld01 tab was absent (closed in T4); the IDOs tab was the active Web Client tab.
3. Form menu → Open → Select Form. Filter `IdoCollections` replaced by `FX_HelloWorld01` (one fill) and committed with Tab; one row selected; OK once. Runtime FX_HelloWorld01 opened (identity `FX_HelloWorld01`; Save disabled).
4. One toolbar Refresh (runtime). Status changed from `(Object 1 of 1)` with blank fields to `(Object 1 of 2)` with values.
5. Record 1 (FX001) inspected: Label `Factory test one`, Code `FX001`, Address caption `Address:`, bordered multi-line-sized box, empty.
6. Record 2 (FX002) navigated by one click on the row-number cell (read-only navigation): `(Object 2 of 2)`; Label `Factory test two`, Code `FX002`, Address caption `Address:`, empty.
7. Clean check after navigation: Save disabled; no dialog.

### Results against the T12 conditions

| Condition | Result |
| --- | --- |
| Designer FX_HelloWorld01 preserved, clean; no Designer Save | Yes (not acted on in T12; no Designer Save) |
| Runtime not open at start (T4 close) | Confirmed: no runtime FX_HelloWorld01 tab in the Web Client tab list; opened once |
| Identity and clean state | `FX_HelloWorld01` title; Save disabled (`t12-04`, `t12-05`, `t12-06`) |
| One toolbar Refresh | Yes (`t12-05`) |
| FX001 and FX002 Code and Label | FX001 `Factory test one` / `FX001`; FX002 `Factory test two` / `FX002`. Matches earlier observations (see §6 of the report; FX002 baseline is from earlier experiments) |
| Address field caption, multi-line-sized, empty | Caption `Address:`; box visibly taller than single-line fields; empty for both records. Multi-line property not DOM-proven |
| No record edits; no runtime Save; no value entered | Yes (clicks were only on the Refresh, the row-number cell, and the Select Form controls) |

### Corrections found while reconciling (harness audits are authoritative)

- T9 browser clicks were **4** (the T9 action table said 5).
- T9 alerts dismissed were **1** (the T9 action table said 2). Total `No object name given.` alerts across T8 and T9 is **2** (one each).
- T11 browser finds were **33** (corrected in the T11 table above).
- T6 screenshot calls were **9** while the T6 inventory lists 7 files.

### Observations (observed only)

1. Before the Refresh the runtime showed blank fields and `(Object 1 of 1)`; after one Refresh it showed both records (`(Object 1 of 2)`). Cause not investigated.
2. The Address field has the same visual presentation for FX001 and FX002: caption `Address:`, empty, a box taller than the Label/Code fields.
3. The runtime Address textbox has no multiline attribute in the accessibility snapshot; the multi-line presentation is inferred from the box size and the Designer type `MultilineEdit`.

### Acceptance (observed)

AC-1 to AC-6 are supported as recorded in §3 of the report. AC-7 is supported with the limits in report §6. AC-8 is this section and the report. Recommendation: **ACCEPTED AS OBSERVED**, subject to operator review of the limits.

### Worker-written-file inventory (T12)

- `evidence/EXP-076/t12-01-webclient-state-before-runtime-open.png`
- `evidence/EXP-076/t12-02-form-menu-open-submenu-before-select-form.png`
- `evidence/EXP-076/t12-03-select-form-filter-fx_helloworld01-committed-before-row.png`
- `evidence/EXP-076/t12-04-runtime-fx_helloworld01-opened-identity-before-refresh.png`
- `evidence/EXP-076/t12-05-runtime-after-single-refresh-state.png`
- `evidence/EXP-076/t12-06-runtime-record-2-navigated-fx002-address-presentation.png`
- `evidence/EXP-076/T12-final-acceptance-report.md`
- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (edited: status paragraph and this T12 section; the T11 find-count cell corrected)

Tool-generated, not worker-authored: browser snapshot and console files under `evidence/playwright/`.

### Final state (end of T12)

- Web Client tab (tab 1) selected; runtime FX_HelloWorld01 open, clean, record 2 of 2 current; no dialog.
- Designer tab (tab 0) open with FX_HelloWorld01, User, clean; not acted on.
- No second Save, unload, Toolbox drop, string creation, record edit, preference change, or re-login in T12.

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 5 prerequisite C is complete. The operator made every decision in this run (auto-accept was not renewed for Part 5).

- Run R-20261013-202602-8bAy completed as accepted after 12 worker tasks, with one operator pause (T9).
- Changed, for later cleanup:
  - **Form `FX_HelloWorld01`** (User scope) gained two components:

    | Component | Type | Settings | Size | Location |
    |---|---|---|---|---|
    | `FX_AddressEdit` | MultilineEdit | Binding Type Property, Binding `object.FX_Address` | 37.05; 4 | 5.5; 23.75 |
    | `FX_AddressStatic` | Static | Caption `FX_sAddress` | 20; 1 | 5.5; 3 |

    Both sit one row spacing below the Code field. Existing components are unchanged.
  - **String `FX_sAddress` = `Address`** (tenant-wide, User version).
  - Tenant-wide: one Web Client and one Designer Unload All Global Form Objects. These ran under the operator's conditional authorization, because the first binding check did not offer FX_Address.
- Operator decisions during the run:
  1. **Conditional unload branch (authorized in the brief).** The T2 binding picker lacked FX_Address. The unsaved first Edit was discarded with the single approved No (T3), the unload pair ran once (T4), and the T5 binding picker then offered `object.FX_Address`.
  2. **T9 pause, caption.** The Caption ellipsis and value action raised "No object name given." while the Caption was blank (T8 and T9; each dismissed with OK; also seen in EXP-010-R3). The operator authorized the EXP-062-R4 route:
     1. Put the Caption value into edit mode and type FX_sAddress.
     2. Press Tab and verify the readback.
     3. Click the ellipsis and answer Yes once to "String FX_sAddress does not exist. Create it?".
     4. Set the value to Address, press Tab, then OK.

     The brief had omitted the type-first step. That was the operator assistant's error.
  3. **T10 slip, accepted.** The Caption dropdown was opened once with its arrow and closed with the same arrow, with no selection.
- Screenshots viewed by the operator assistant:
  - `t10-14`: the String dialog before OK: Name FX_sAddress, String Value Address, a User version, Designer scope User.
  - `t11-14`: after the Save and the Designer close/reopen, FX_AddressStatic has Caption FX_sAddress (the canvas shows "Address"). The Components grid lists FX_AddressEdit MultilineEdit object.FX_Address and FX_AddressStatic Static. Save is disabled.
  - `t12-05`: the runtime after one Refresh: FX001 / Factory test one, an empty taller "Address:" box, "(Object 1 of 2)".
  - `t12-06`: the same for FX002 / Factory test two, "(Object 2 of 2)".
- Counts:
  - Unloads: Web Client 1, Designer 1.
  - Approved discard: 1.
  - Toolbox drops: 3 (one discarded).
  - Strings created: 1.
  - Designer Saves: 1, with no visible message.
  - Designer close/reopen: 1 post-Save pair, plus the discard close and reopen.
  - Runtime: 1 open and 1 Refresh.
  - Record edits 0; preference changes 0; re-logins 0.
- Findings (observed):
  1. **A new IDO property needs the unload pair** before the Designer binding picker offers it. This is the second observation, after EXP-067-R2.
  2. **A blank Caption cannot open the string dialog.** Its ellipsis or value action raises "No object name given.". Type the string ID into the Caption combobox and commit it with Tab first; the ellipsis then raises the create prompt. This is the second observation, after EXP-062-R4.
  3. **The Edit Type option is labelled `MultilineEdit`.** At runtime it renders as a taller plain textbox; no multiline attribute is visible in the accessibility tree.
  4. **The Designer Save and the unloads show no message.**
- Limits:
  - The FX002 values are compared with earlier experiments, not with an earlier read in this run.
  - The multi-line rendering rests on the Designer Type and the box height.
- Confinement (git status): only `evidence/EXP-076/` and this record were written by the run.
- Next: prerequisite D. Enter address values for FX001 and FX002 through the runtime FX_HelloWorld01 Form, with one Save and a close/reopen check.
