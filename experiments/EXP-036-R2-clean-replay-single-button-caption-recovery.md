# EXP-036-R2 — Clean Replay: Single Button Name/Caption Recovery Across Designer Save and Form Close/Reopen

Status: **T1 complete (repository-only review; zero browser calls). T2 complete (browser preflight; all gates pass; one Designer launch; no Form created, no Button placed, no Save, close or reopen). T3 BLOCKED before creation: the Classic / BuildFromScratch wizard failed to load after OK; Finish 0; no Form created; no partial Form in the Select Form inventory.** T4 (repository-only finalization) complete. **Outcome: BLOCKED** — not accepted, not replay_verified. Phase M not started. See §T4.
Date: 2026-10-10
Run: R-20261010-005147-a4PQ · Cycle 0 · Task T1
Mode: LEARNING MODE — clean replay of the EXP-036 lifecycle with new target names.
Worker identity: `83437d74-e00d-4527-9579-fbd0bf09b67e` (task_message_id `f45b1c8a-680d-4bc1-a1ad-7c32298f86f0`). Grep of `experiments/` and `evidence/` found no earlier record of either ID.
Editing scope: User (signed-in user, to be confirmed visibly in preflight).
Target identities: Form `FX_SingleButtonLab02`; Button Name `FX_SingleButton02`; Button Caption `Factory Test Button`.
Evidence directory: `evidence/EXP-036-R2/`.

## Objective

Determine whether one native Button's Name and Caption, set in the Web Designer and committed by one ordinary Designer Save, are recovered on the same User-scoped Form after an ordinary Form-tab close and a Designer Form-menu reopen.

Scope of the conclusion: **component-definition recovery across this Save and close/reopen sequence, as rendered in the Designer.** This experiment does not establish Forms-database durability, cache eviction, metadata unloading, or server-side serialization. Ordinary close/reopen does not prove them.

## Relationship to prior evidence

- **EXP-036** (observed, single run; accepted per operator directive; not replay_verified): direct predecessor with different names (`FX_SingleButtonLab01` / `FX_SingleButton01`). Its deviations are the main planning input here (§Lessons).
- **EXP-027-R2** (replay_verified, scoped to User scope, single native Button, Name and Type only): closest lifecycle precedent; does not test Caption.
- **EXP-003-R2** (verified): Toolbox Button placement, Name and Caption via Properties grid.
- **EXP-002-R2** (verified): Build-from-Scratch Form creation.
- **EXP-019-R2** (replay_verified): fresh-dialog Classic / BuildFromScratch selection prefix.
- **EXP-033-R4** and **EXP-035-R2** (replay_verified, rendered UI only): Select Form Name-filter absence check and positive-control retention.
- Full source list, lessons, and evidence paths: `evidence/EXP-036-R2/t1-repository-review-notes.md`.

## T1 — repository-only review (complete)

- Browser tool calls: **0**.
- Mongoose interaction: **none**.
- Sources read: `AGENTS.md`; EXP-002-R2; EXP-003-R2; EXP-019-R2; EXP-027 (original) and EXP-027-R2; EXP-033-R4; EXP-035-R2; EXP-036; `recipes/forms/create-basic-form.md`; `recipes/components/add-component-from-toolbox.md`; `recipes/components/configure-basic-component.md`.
- No prior record names `FX_SingleButtonLab02`, `FX_SingleButton02`, or the new Form. `FX_SingleButtonLab01` and `FX_SingleButton01` exist in EXP-036 and must not be touched. `FX_ComponentRecoveryLab02` (positive control) and `FX_ComponentRecoveryLab03` exist in EXP-027-R2.
- The EXP-036-R2 record file did not exist before T1. It was created in T1.

### Lessons from EXP-036 that change this plan

1. **Caption value-cell double-click can open the string-resource list.** EXP-036 T9 (ref-based double-click) landed on the picker arrow (`.mg-arrow-cell-icon`); Escape closed it with no selection. EXP-036 T10 double-clicked by coordinate on the value text area left of the arrow; this gave a `combobox [active]` with no list. Brief step (d) says "double-click the value cell, not the picker." This needs a coordinator decision (Decision 1).
2. **Do not send key presses without a confirmed editor.** EXP-036 T9 sent one `F` while the Caption cell was active but not an editable textbox. Its destination is unobserved, and the cell showed no character.
3. **Save Template: label click works.** EXP-036 T5: a checkbox-input click was intercepted by its display span. EXP-036 T6: one click on the label text unchecked it. Brief step (b) now uses the label.
4. **Type label is `PushButton`.** The Properties header shows `<Name> (Button)`. The grid row Type shows `PushButton` at every EXP-036 milestone. Record it as observed (brief step (f)).
5. **Component is not auto-selected after reopen.** EXP-036 T11 and EXP-027 T8 both needed one selection click on the Components row. This is planned as a counted, non-mutating step (M14).
6. **Recovery allowance is per experiment.** One fresh untargeted snapshot and one corrected visible inspection for the whole R2 run. Planned captures and state reads do not count.
7. **Existing Designer.** EXP-036 left a Designer tab open with `FX_SingleButtonLab01` (clean). Preflight will probably find it. Use it only if the scope is visibly User. Do not change that Form; a second Form tab can be opened next to it, as EXP-027-R2 did.
8. **Placement coordinates are environment-specific.** EXP-036 used (450, 250) in its grid. R2 coordinates must come from a fresh screenshot.
9. **Coordinate tool availability.** EXP-036 T9 recorded an operator-stated MCP tool-server restart, not observed by the worker, to enable `browser_mouse_click_xy`. The tool appears in this worker's tool list. Preflight should confirm it by inspecting the tool list only, with no test click.
10. **Route for placement.** EXP-027-R2 placed the Button with a `run_code_unsafe` `page.mouse.click`. That route is forbidden in this brief. Use `browser_mouse_click_xy` only.

## T2 — browser preflight (complete; details `evidence/EXP-036-R2/t2-preflight-notes.md`)

Worker session `83437d74-e00d-4527-9579-fbd0bf09b67e`, task_message_id `9fc869cc-9912-4154-8c2c-88caca84d467`.

| Gate | Result |
|---|---|
| `browser_mouse_click_xy` in tool inventory (no test click) | PASS (listing only) |
| Session usable; no sign-in or configuration prompt | PASS |
| Designer | None existed at start (one tab, Web Client). One permitted launch via the Web Client toolbar `Designer` control; one Designer tab after launch. |
| Designer scope and clean state | PASS: scope dialog Scope = User, User = anton.ramos@3mworks.com.ph, OK once; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate, Undo, Redo disabled; no Form tab; blank canvas |
| Inherited Forms | No Form tab open in the Designer; EXP-036's `FX_SingleButtonLab01` not present; nothing touched |
| Positive control `FX_ComponentRecoveryLab02` (Name filter, Case Sensitive and Starts With unchecked) | PASS: exactly one row, Caption and Name both `FX_ComponentRecoveryLab02`; textbox exact |
| Target `FX_SingleButtonLab02` (same filter settings) | PASS, rendered UI only: zero rows; textbox exact; case-insensitive filter, so zero exact and case-insensitive matches in the observed list. Database-wide absence not claimed. |
| Cancel of Select Form | PASS: one Cancel; no row activated; dialog closed |
| Designer after the Select Form step | PASS: still clean, scope User, no Form tab |

Decision: all preflight gates pass. Creation of `FX_SingleButtonLab02` is not blocked by identity or inventory results. Creation is not performed in T2.

Counts (T2): Designer launch 1 of 1; scope OK 1; Select Form open 1; Filter By change 1; Control+a 2; Backspace 2; printable keys 45 (positive control 25, target 20); Select Form row activation 0; Select Form OK 0; Select Form Cancel 1; banner close (portal chrome) 1; Form create 0; placement 0; property edit 0; Save 0; Regenerate 0; close 0; reopen 0; unload 0; cold MGForm navigation 0; JavaScript 0; authentication 0. Tab selects 3.

Recovery allowance: fresh untargeted snapshot **0/1 used**; corrected visible inspection **0/1 used**. No ref error, timeout or ambiguous read occurred.

Deviations recorded (process, not recovery):
- Two printable keys (`F`, `X`) of the positive control were sent as two calls in one batch, which breaks the one-browser-action-at-a-time rule. Both returned without error and the textbox text is exact.
- A portal notification banner covered the Web Client menu bar and Designer controls. It was closed through its own close control (portal chrome, not a Mongoose object), as the recipe precondition requires.
- Select Form was opened from the Web Client toolbar `Open` control, as in EXP-033-R4, EXP-035-R2 and EXP-036. The brief's step 4 wording says "from the Designer"; the coordinator should confirm this route.

Open state at end of T2: Web Client tab (index 0) with no dialog; Designer tab (index 1), selected, clean, User scope, no Form open. No Form was created, changed or closed.

Evidence (T2): `evidence/EXP-036-R2/t2-01` (banner obstruction, read), `t2-02` (banner closed), `t2-03` (Designer settled), `t2-04` (Select Form opened, Filter By Caption, empty), `t2-05` (positive control, one row), `t2-06` (target, zero rows), `t2-07` (after Cancel, no dialog), `t2-08` (Designer final, clean, User scope). Each was viewed in this task.

## T3 — Form creation attempt (BLOCKED before wizard page 1; no Form created)

Worker session `83437d74-e00d-4527-9579-fbd0bf09b67e`, task_message_id `23f57b7c-5c74-472d-a0ab-73b58a5dc41a`. Details: `evidence/EXP-036-R2/t3-creation-attempt-notes.md`.

**Outcome.** The New Form Definition wizard for Classic / BuildFromScratch did not load. The first attempt was OK on the Form Wizard Selection with Classic and BuildFromScratch committed. Result: a load Error: "Unable to load form WSFormWizardClassicBuildFromScratch ... 'BREADCRUMB_SHOW_TITLE' is not a valid value for global::Mongoose.WinStudio.Enums.ComponentFlags ... The form 'WSFormWizardClassicBuildFromScratch' was not found. It is either missing, or there is no version of the form that matches your current credentials." No wizard page 1 appeared.

Counts: New 1; wizard OK 1 (led to error); Name entry 0; Next 0; Save Template 0; Finish **0**; Form created **0**; placement 0; Save 0; close/reopen 0; Select Form inventory check 1 (read-only) with Cancel 1; message/error OK dismissals 2; unload 0; JavaScript 0; authentication 0.

Preceding issue. The first Category click (timeout at "visible, enabled and stable") was intercepted by a Mongoose info box, "Exception loading PropertyClassExtension definition ... 'BREADCRUMB_DETAIL_ONLY' is not a valid value for ComponentFlags." The box was dismissed by its OK. The Category click was then repeated once as the corrected attempt and succeeded.

Post-failure state. The Designer is clean: no Form tab, Save disabled, no dialog, User scope footer (`t3-05`). Select Form, checked read-only with the same Name filter (`FX_SingleButtonLab02`, Filter By Name, both checkboxes unchecked), shows zero rows (`t3-06`). This confirms no partial Form in the rendered inventory. It does not prove database absence.

Recovery allowance. Fresh untargeted snapshot 1 of 1 used. Corrected visible inspection: `t3-02` counts as the 1 allowed. `t3-01` (taken immediately after the timeout to identify the interceptor) may also count, which would make 2 against an allowance of 1. Reported as a possible exceedance for the coordinator.

Environment observation (not a cause). The Web Client portal footer reads 2026.10.01. The records describe Mongoose 2026.09.08 and portal 2026.09.00. Mongoose build was not checked (Help → About not opened). Two different definitions reported the same ComponentFlags enum-value error, which may point to a build and definition-data mismatch. Unverified.

Decision needed before any retry: whether to repeat New → Classic / BuildFromScratch once more (observed once in this session; not repeated), to have the coordinator or operator check the Form Wizard system form and Mongoose build, or to stop this experiment. No retry was made in T3.

## T4 — blocked-run finalization (repository only; no browser tool; no Mongoose action)

Worker session `83437d74-e00d-4527-9579-fbd0bf09b67e`, task_message_id `29bf1c6e-2caf-46a3-ac7f-371c7a7a93fb`. Full reconciliation, counts, audit and evidence matrix: `evidence/EXP-036-R2/t4-blocked-run-finalization.md`.

**Outcome: BLOCKED.** Not accepted. Not replay_verified. `FX_SingleButtonLab02` was not created.

**Blocker (observed).** After one Form Wizard Selection OK (Classic / BuildFromScratch), the Error dialog said: "Unable to load form WSFormWizardClassicBuildFromScratch ... 'BREADCRUMB_SHOW_TITLE' is not a valid value for global::Mongoose.WinStudio.Enums.ComponentFlags ... Form [WSFormWizardClassicBuildFromScratch] is not defined as Runtime Builder ... The form 'WSFormWizardClassicBuildFromScratch' was not found. It is either missing, or there is no version of the form that matches your current credentials." Wizard page 1 never appeared. An earlier info box over the wizard (during the timed-out Category click) reported the same enum error for a `PropertyClassExtension` definition (`BREADCRUMB_DETAIL_ONLY`).

**Cause: unresolved.** Hypotheses, none confirmed: (H1) a Mongoose build or definition-data mismatch on `ComponentFlags`; (H2) a version or visibility problem for the signed-in user's copy of the system form, which the "no version … matches your current credentials" wording suggests; (H3) a transient server state. Nothing collected tests them.

**Version evidence.** The portal `2026.10.01` in the footer and Designer URL is a portal version. It is **not** confirmation of the Mongoose Designer build. Help → About was not read, as instructed. A build mismatch is an unresolved hypothesis.

**Predecessor contrast.** The same wizard definition completed on EXP-002-R2 (2026-09-30), reached page 1 on EXP-019-R2 (2026-10-05), and completed on EXP-036 earlier on 2026-10-09 for the same user (`FX_SingleButtonLab01`). A standing break is not supported by the records. This failed attempt is not explained by them.

**Counts (reconciled).** New 1; wizard-selection OK 1; Finish 0; completed Form creations 0; Button placements 0; property edits 0; post-configuration Saves 0; target closes 0; target reopens 0; Designer launch 0 in T3 (1 of 1 cumulative, from T2); Select Form open 1 and Cancel 1 (read-only post-error inventory check); message-box OKs 2; JavaScript 0; authentication 0; unload 0; cold navigation 0.

**Recovery allowance.** Fresh untargeted snapshot **1 of 1 consumed** (T3 step 6). Corrected visible inspection **1 of 1 consumed** (`t3-02`, before the single corrected Category click). Disclosed uncertainty: `t3-01`, a visible capture taken right after the timeout and before correction, may count as a second inspection, which would exceed the allowance by one. Coordinator decision. No further recovery is authorized.

**Post-error state.** Designer clean, no Form open, User scope footer (`t3-05`). Select Form Name-filter check for `FX_SingleButtonLab02` shows zero rows (`t3-06`, with the T2 positive control `t2-05` as the control). This is rendered UI only. Database-wide absence is **not** claimed.

**Repository confinement.** Worker-authored: this record and `evidence/EXP-036-R2/` files for T1–T4 (notes, 14 requested screenshots, and `t4-blocked-run-finalization.md`). `harness-audit-T1/T2/T3.md` in that directory were not written by this worker. Gitignored `evidence/playwright/` artifacts from this run's window (22 files) are browser-tool output, not worker-authored, and were not deleted. No Git-level check was run (Bash disabled); the harness result is authoritative.

**Acceptance (coordinator labels; verbatim brief not readable by the worker).**

| AC | Result | Basis |
|---|---|---|
| AC-1 Session, Designer User scope, clean | **PASS** | T2 gates; T3 post-error footer (`t3-05`) |
| AC-2 Absence via Select Form with positive control | **PASS** | `t2-05` (control, one row); `t2-06` and `t3-06` (target, zero rows); rendered UI only |
| AC-3 Form created once (Classic / BuildFromScratch, Save Template unchecked, exact Name, User scope, clean, empty baseline) | **FAIL** | Wizard page 1 never appeared (`t3-04`); Finish 0; no Form created |
| AC-4 One native Toolbox Button | Unfulfilled | Not attempted (AC-3 failed) |
| AC-5 Name and Caption; one ordinary Save; clean return | Unfulfilled | Not attempted |
| AC-6 Form-tab close of the target | Unfulfilled | Not attempted |
| AC-7 Reopen the same Form via a Designer path | Unfulfilled | Not attempted |
| AC-8 Exactly one recovered Button: Name, Type, Caption | Unfulfilled | Not attempted |
| AC-9 Lifecycle counts and final audit | **NOT MET** | Audit complete and reconciled; required lifecycle counts all 0 (Form creation, placement, Name, Caption, Save, close, reopen) |

AC-4 to AC-9 follow the EXP-036 T13 labelling. The coordinator should confirm the mapping.

**Predecessor findings (unchanged by this replay).** EXP-027-R2 replay_verified (scoped); EXP-036 observed, not replay_verified; EXP-019-R2 replay_verified for the selection prefix, which was **not reproduced** in this run; EXP-002-R2 and EXP-003-R2 verified; EXP-033-R4 and EXP-035-R2 replay_verified for rendered UI.

**Last browser state.** Designer tab clean with no Form open, User scope, no dialog. Web Client tab selected, Select Form closed (`find` no match after Cancel). No browser-native or known in-page Mongoose dialog open. No browser action is authorized.

**Open decisions for the coordinator.** (1) Abandon as blocked, or authorize one fresh New attempt after the operator checks the wizard system form and the Mongoose build (Help → About). (2) Whether `t3-01` counts against the corrected-inspection allowance. (3) Whether the Web Client Open route used for the post-error inventory check was acceptable. (4) Confirm the AC mapping. No retry is made by this worker.

## Proposed ordered action sequence

Phase P (browser preflight) runs in its own task, separate from any mutation. Phase M begins only after Phase P's gates pass. Counts are planned maxima.

### Phase P — browser preflight (read-only except one optional Designer launch)

| Step | Action | Gate / postcondition | Counts |
|---|---|---|---|
| P0 | Fresh untargeted snapshot of the visible tab(s); tab list. Confirm `browser_mouse_click_xy` is in the tool list (listing only, no click). | One Mongoose tab, or a known Designer tab. Web Client identity bar shows the signed-in user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. **Stop** if a sign-in or configuration-selection screen appears. | snapshot (planned) |
| P1 | Find an existing usable Designer tab (URL `WSWebClient/designer/...`). Record its open Form tabs (expect `FX_SingleButtonLab01`, clean) and scope bar. Dismiss no banner unless it obstructs the Web Client. | Usable Designer in visible User scope; no inherited dialog; inherited Forms recorded and left untouched. If none is usable, go to P2. | — |
| P2 | Only if no usable Designer: one Designer split-button click from the unobstructed Web Client (`mgtoolbarbutton-1126` or its visible "Designer" control). Confirm "Identify Your Editing Scope": Scope = User, User = signed-in user, OK (native click, once). | Visible scope bar `[ ScopeType: User / ScopeName: ... ]`. **Stop** if scope is not visibly User. | 1 launch max |
| P3 | Web Client Open → Select Form. Set Filter By = Name (rendered option). Leave Case Sensitive and Starts With unchecked. | Filter By = Name; both checkboxes unchecked. | — |
| P4 | Positive control: focus the filter textbox (click, then verify `[active]` by fresh snapshot). Ctrl+a, Backspace (`press_key`); then one `press_key` per character of `FX_ComponentRecoveryLab02` (25 keys). Wait ~3 s; snapshot. | Exactly one row, Name `FX_ComponentRecoveryLab02`. If not, **stop**. | press_key 27 (including control keys) |
| P5 | Clear (Ctrl+a, Backspace), then one `press_key` per character of `FX_SingleButtonLab02` (20 keys: `F X _ S i n g l e B u t t o n L a b 0 2`). Wait ~3 s; snapshot. | Textbox exactly `FX_SingleButtonLab02`. **Zero rows** = absent. **Any row** (exact, case variant, prefix) = **stop, do not create**. | press_key 22 |
| P6 | Cancel the Select Form dialog once (not OK; OK activates a row). Verify closed. | Dialog closed; no row activated. | Cancel 1 |

Phase P gate: a usable User-scope Designer (P1 or P2); positive control returns exactly one row (P4); target returns zero rows with an exact textbox (P5); the coordinate tool is listed (P0). If any gate fails, stop and report. Do not create the Form.

### Phase M — mutation (separate task after Phase P passes)

| Step | Action | Postcondition / evidence | Counts |
|---|---|---|---|
| M1 | Designer → New. Form Wizard Selection: New Form; Category Classic (rendered option click); Wizard Build from Scratch (rendered option click); OK once. | First wizard page; Name empty. | New 1; OK 1 |
| M2 | Wizard page 1: Name `FX_SingleButtonLab02` (one entry). Defaults untouched (BuildFromScratch, GridLeft, Default, Data Source / Query / Comments empty). Next once. | Page 2 visible; Save Template checkbox visible. | Name 1; Next 1 |
| M3 | Page 2, step (b): click the visible label text `Save Template` once. Verify with snapshot that the checkbox has no `[checked]`. Only if still checked, focus it and press Space once. If still checked, stop without Finish. Then Finish once → "Process Completed Successfully" → OK once. | Designer shows `MGForm=FX_SingleButtonLab02`; Save disabled; heading `FX_SingleButtonLab02`. Screenshot before Finish. | Label click 1; Finish 1; OK 1 |
| M4 | Baseline (no edits): Form Properties Name, Version `User version for user ...`, Device Default, Form Type Normal, Is Master True; ScopeType and ScopeName visible; canvas empty; Components grid shows only the root row `Pane (00)`. The Details panel and Components tab may be opened as view-only controls. | Empty component baseline confirmed. Screenshot. | view clicks (not lifecycle) |
| M5 | Toolbox → `Button` row, one native click (arms the drop). | Button row highlighted; canvas unchanged; Save still disabled. | — |
| M6 | Step (c): choose an empty point inside the visible grid from a fresh screenshot of the selected R2 Designer tab. Exactly one `browser_mouse_click_xy`. Do not repeat it. Then verify exactly one Button by snapshot and screenshot. | Exactly one Button; Properties header `button1_USER (Button)`; Components grid one child; Save enabled. If the result is ambiguous, **stop**; do not repeat the click. | Placement 1 |
| M7 | Step (c)/(d) Name: double-click the Name value cell in the property grid; confirm the inline editor is active (fresh snapshot); enter `FX_SingleButton02`; press Enter. | Grid Name `FX_SingleButton02`; Components row name updated; Type `PushButton`. | Name edit 1 |
| M8 | Step (d) Caption: open the Caption value cell editor. Use the approach in Decision 1. Confirm by fresh snapshot that the Caption editor is `combobox [active]` with no resource list open. Enter the literal `Factory Test Button`; press Enter. If a resource list opens, select nothing and stop (Escape closes it). | Grid Caption `Factory Test Button`; no resource selected; no other key sent. | Caption edit 1 |
| M9 | Pre-Save evidence: selected Button's property grid (Name, Type, Caption) and rendered canvas with Form identity and scope visible. | Screenshots and snapshot. | — |
| M10 | Exactly one ordinary Designer Save (toolbar Save, native click). Then `browser_network_requests` filtered to `SaveChanges`: confirm one POST and its response body. | Save disabled; response `Success: true`. Toast may dismiss; do not rely on it. | Save 1 |
| M11 | Reinspect the saved Button (read-only): Name, Type, Caption. | Matches M7 and M8. | — |
| M12 | Close `FX_SingleButtonLab02` via its Form-tab close control (`closable FX_SingleButtonLab02`), once. Do not close the Designer client. Leave `FX_SingleButtonLab01` untouched. | Heading gone; no unsaved-change prompt; Designer open; no other Form tab closed. | Close 1 |
| M13 | Designer top bar → Form menu → recent-forms entry `FX_SingleButtonLab02`, once. No cold MGForm URL, no unload, no Select Form row activation. | Heading `FX_SingleButtonLab02`; Properties Name and Version; Save disabled; scope bar User. | Reopen 1 |
| M14 | Component inspection: expand the Components grid (view control). If the Button is not selected, one click on its Components row (selection only; no drag, no edit). Read Name, Type, Caption. Count children under `Pane (00)`. | Exactly one child; Name `FX_SingleButton02`; Type `PushButton`; Caption `Factory Test Button`; Save disabled. | Selection click 1 |
| M15 | Final read-only audit: lifecycle counts; no unrelated Form opened or changed; repository confinement. Optional: one Select Form exact-name check (Open → filter → count → Cancel) if the coordinator wants a live count. | Notes in this record and `evidence/EXP-036-R2/`. | optional |

Planned lifecycle counts (maximum): Form creation 1; component placement 1; Name edit 1; Caption edit 1; Save 1; close 1; reopen 1; Designer launch 0 or 1 (only if P2 applies). Recovery allowance for the whole experiment: fresh untargeted snapshot 1; corrected visible inspection 1.

## Acceptance mapping (proposed; coordinator to confirm)

| Brief requirement | Proposed evidence |
|---|---|
| Absent-name check with positive control (P4, P5) | Accessibility snapshot showing the exact textbox and row count. |
| Form created once, scope User, Save Template unchecked (M1–M3) | Wizard screenshots; Properties; status bar. |
| Clean baseline, empty component canvas before Button (M4) | Screenshot plus snapshot. |
| One Button, one Name, one Caption (M5–M8) | Property grid and canvas evidence. |
| Pre-Save property grid shows Type, Name, Caption, Form identity (M9) | Screenshot and snapshot. |
| One ordinary Save; clean return (M10) | `SaveChanges` count; Save disabled. |
| Close and reopen the same Form (M12–M13) | Tab/heading evidence; Form-menu route. |
| Recovered: exactly one Button, Name, Type, Caption (M14) | Post-reopen property grid; canvas and Components count. |
| Limits: no durability / cache / serialization claim | Stated in every conclusion. |

**Type reading.** The brief expects `Type=Button`. The grid displays `PushButton`; the Toolbox row is `Button`; the Properties header reads `(Button)`. Record the grid value as `PushButton` and the component type as Button, as EXP-036 T13 did.

## Open decisions for the coordinator (before Phase M)

1. **Caption entry mechanism.** Brief (d) says double-click the value cell, not the picker. EXP-036 T9 showed a ref-based double-click hits the picker arrow. EXP-036 T10 used a coordinate double-click on the left portion of the value cell, under operator authorization. Options: (a) authorize a coordinate double-click on the value text area, with a fresh snapshot confirming `combobox [active]` and no list before typing; or (b) stop at M8 if the ref-based double-click opens the list again. **Recommendation: (a).** Coordinate clicks are otherwise limited to placement in standard procedure (c).
2. **Recovery allowance.** The R2 brief allows one fresh snapshot and one corrected inspection. Planned checks (M4, M6, M8, M14 selection) must not be counted as recovery. A second corrected step is a stop.
3. **Coordinate tool.** Preflight confirms `browser_mouse_click_xy` by tool listing only. If it is absent, stop before the Form is created; a Form without a placeable Button would leave a partial artifact.
4. **Positive-control availability.** `FX_ComponentRecoveryLab02` is expected to exist (EXP-027-R2, EXP-036 T3). It must be reconfirmed live in P4. If it is absent, the coordinator should name a replacement read-only positive control.
5. **Existing Designer and open Form.** If preflight finds the EXP-036 Designer with `FX_SingleButtonLab01` open, the plan is to use that Designer and leave that Form untouched, rather than launch another. Confirm.
6. **Literal vs resource Caption.** The rendered display cannot distinguish a literal string from a resource whose text matches. This is recorded as a limitation, not tested.

## Explicit non-claims

- No claim of Forms-database durability, cache eviction, metadata unloading, or server-side serialization.
- No claim from absence in the rendered Select Form that the Form is absent from the database.
- No runtime Web Client Button execution, click behavior, or event testing.
- No claim that the reopened definition was served from the server rather than a client cache.

## Evidence (T1)

- `evidence/EXP-036-R2/t1-repository-review-notes.md` — written in T1 (review sources, lessons, decisive EXP-036 evidence paths and what each does not show).

No browser evidence exists yet for EXP-036-R2.

## Knowledge state (T1)

- Form creation via the Designer New → Classic / BuildFromScratch path: **verified** (EXP-002, EXP-002-R2; recipe verified).
- Toolbox Button placement, Name and Caption via property-grid edit: **verified** (EXP-003, EXP-003-R2; recipes verified). Caption verified for a Button there, not as a Button in a Save/reopen lifecycle.
- Button grid Type label `PushButton`: **observed** (EXP-003-R2, EXP-027-R2, EXP-036).
- Name-plus-Type recovery across one Save, close and Form-menu reopen: **replay_verified, scoped** (EXP-027-R2).
- Name-plus-Caption recovery across the same lifecycle: **observed** (EXP-036, single run; accepted per operator directive; not replay_verified).
- Caption coordinate double-click after the value-cell picker mis-hit: **observed** (EXP-036 T10).
- Select Form Name-filter absence check with positive control: **replay_verified** for rendered UI only (EXP-033-R4, EXP-035-R2).
- Reopen via the Designer Form menu recent-forms list: **observed** (EXP-027-R2, EXP-036 T11).
- Database durability, cache eviction, metadata unloading, server serialization: **unresolved / not inferred**.

## Result (T1)

Repository-only review complete. Zero browser calls. No Mongoose artifact was created, modified, or touched. The ordered Phase P and Phase M sequence is proposed above, with six coordinator decisions. Next action: dispatch Phase P (browser preflight) as its own task, after the coordinator resolves Decisions 1–6 or accepts the proposed defaults.
