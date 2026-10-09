# EXP-036-R2 — T1 repository-only review notes

Run: R-20261010-005147-a4PQ · Cycle 0 · Task T1
Worker session: `83437d74-e00d-4527-9579-fbd0bf09b67e` · task_message_id `f45b1c8a-680d-4bc1-a1ad-7c32298f86f0`
Browser tool calls in T1: **0**. No tab listing, snapshot, screenshot, click, key, navigation, console, network or evaluate.
Mongoose interaction in T1: **none**.
Worker identity freshness: grep of `experiments/` and `evidence/` for `83437d74` and `f45b1c8a` returned no matches before this record was written.

## A. Sources read (repository only)

| Source | Recorded status | What it contributes |
|---|---|---|
| `AGENTS.md` (repo root) | authoritative | LEARNING MODE; `FX_` artifacts only; coordinate clicks last resort; one fresh snapshot + one corrected inspection per recovery; evidence rules. |
| `experiments/EXP-002-R2-create-basic-form-replay.md` | verified (replay of EXP-002) | Classic / BuildFromScratch creation path; Save Template default checked, unchecked on page 2; Finish persists immediately; scope dialog shows User; Select Form existence check via store scan. |
| `experiments/EXP-003-R2-component-fundamentals-replay.md` | verified | Toolbox Button placement by canvas click; generated name `button1_USER`, itemId `bt2`, default size 114×34; Button grid Type shown as `PushButton` while model `ctrl` is `button`; Caption via double-click value cell + Enter; Save POSTs `DesignerSession/SaveChanges` `{formId}`. |
| `experiments/EXP-019-R2-clean-replay-fresh-dialog-classic-wizard-selection.md` | replay_verified (prefix) | Fresh New → Form Wizard Selection; Category Classic and Wizard BuildFromScratch chosen by rendered option clicks, no typing; one OK. Also records an inherited wizard page must be cancelled first if present (Cancel → Yes). |
| `experiments/EXP-027-button-component-recovery-in-a-self-contained-desi.md` (original) | observed, single run | Button Name + Type recovery across Save, Form-tab close and Form-menu recent-forms reopen. |
| `experiments/EXP-027-R2-clean-replay-button-component-recovery-in-a-self-c.md` | replay_verified (scoped; User scope, single native Button, Name+Type only) | Closest precedent for this lifecycle. Lessons: Save Template checkbox display span intercepted pointer events (corrected click needed); inline Name editor needed a corrected attempt; after reopen the component is NOT auto-selected (one selection click needed); selector header lags after rename; Type label `PushButton`. Its placement used a `run_code_unsafe` `page.mouse.click`, which this brief does not permit — use `browser_mouse_click_xy` instead. |
| `experiments/EXP-033-R4-clean-replay-select-form-native-keyboard-filter-re.md` | replay_verified (rendered UI only) | Select Form Name-filter path: Filter By dropdown → Name; Ctrl+a + Backspace; one `press_key` per character; settled grid rows. Rendered-UI only; no database-absence claim. |
| `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` | replay_verified (rendered UI only, per coordinator decision recorded in its T9) | Retention of Select Form filter across one Cancel/reopen; AC-2 call-level acceptance was operator-attested, not worker-inspected. Confirms the same positive-control string. |
| `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md` | observed, single run; accepted per operator directive; not replay_verified | Direct predecessor of this replay (different names). Full ordered lifecycle and every deviation. See §B. |
| `recipes/forms/create-basic-form.md` | verified | Creation procedure (see EXP-002-R2). Known pitfall: synthetic DOM clicks do not drive Ext window buttons; use native clicks. |
| `recipes/components/add-component-from-toolbox.md` | verified | Arm Toolbox row, then canvas click; generated name pattern; "Synthetic DOM clicks do not drive Ext handlers". Its line 41 cites `mouse.click` at coordinates — that is the run-code route and is not the route this brief permits. |
| `recipes/components/configure-basic-component.md` | verified | Name and Caption via Properties grid value cell + Enter; header `<name> (<Type>)` may lag; Caption cell can be a string-resource combobox — type the literal and press Enter, do not pick a resource. |

Repo-level note: `AGENTS.md` is the file in the repository root named `AGENTS.md` in this checkout; earlier records noted a double-dot name in their workspace.

## B. Lessons from EXP-036 (the direct predecessor) that change the replay plan

Evidence file: `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md`, and its evidence under `evidence/EXP-036/`.

1. **Caption double-click on the value cell can land on the picker arrow.** EXP-036 T9: a ref-based double-click on the Caption value cell (`e644`) hit `.mg-arrow-cell-icon`, opening the string-resource key list (`t9-09-after-caption-dblclick-viewport.png`). Escape closed it with no selection. EXP-036 T10 then double-clicked by coordinate on the left portion of the value cell, left of the arrow (about x 1740 of the 1842 arrow position). That produced a `combobox [active]` with no list (`t10-03`, `t10-04`). The brief's step (d) says "double-click the value cell, not the picker", so the coordinate approach needs an explicit decision (see the record's open decisions).
2. **A stray key press without a verified focused editor.** EXP-036 T9 sent one `F` press while the Caption cell was active but not an editable textbox. The screenshot (`t9-13-caption-first-char-viewport.png`) showed no character, and the destination was unobserved. Do not send key presses until the editor is confirmed `[active]` by a fresh snapshot.
3. **Save Template uncheck.** EXP-036 T5: a click on the checkbox input was intercepted by its display span (`ext-comp-…-displayEl`) and the step stopped. EXP-036 T6: one click on the visible label text `Save Template` unchecked it (`t6-02`, `t6-03`). This is now standard procedure (b) in the brief.
4. **Type label.** EXP-036 recorded the grid Type as `PushButton` at every milestone (`t9-03`, `t11-13`, `t12-01`). The Properties header reads `<Name> (Button)`. The brief's (f) says to record PushButton and not treat it as a mismatch.
5. **Reopen does not auto-select the component.** EXP-036 T11 and EXP-027 T8 both needed one component-selection click after reopen (`t11-13`). This is a non-mutating selection, and it is planned as a counted step, not a recovery step.
6. **Recovery allowance.** EXP-036 consumed its whole allowance in T3 (fresh snapshot 1/1, corrected inspection 1/1). The R2 brief gives this experiment its own allowance of one fresh untargeted snapshot and one corrected visible inspection. Planned captures and snapshots do not count against it.
7. **Designer state carried in.** EXP-036 finished with its Designer tab open on `FX_SingleButtonLab01` (clean, Save disabled). The R2 preflight will probably find that Designer. Its Form `FX_SingleButtonLab01` must not be touched, and a second Form tab may be opened alongside it, as EXP-027 did.
8. **Placement coordinates were environment-specific.** EXP-036 placed at (450, 250) inside a grid roughly x 259–1222, y 101–825 (`t9-02`). Coordinates must be chosen from a fresh screenshot of the R2 Designer, not copied.
9. **Operator-stated tool-server restart.** EXP-036 T9 recorded an operator statement that only the Playwright MCP tool server was restarted to enable `browser_mouse_click_xy`. The worker did not observe that restart. In this T1 task, `browser_mouse_click_xy` appears in the worker's tool list. Availability should be confirmed in the preflight task by inspecting the tool list only, with no test click.

## C. Decisive evidence paths (EXP-036 unless stated; each path verified to exist)

| Milestone | Path | What it shows | What it does not show |
|---|---|---|---|
| Designer in User scope, clean, empty canvas | `evidence/EXP-036/t2-08-designer-settled-viewport.png`; `evidence/EXP-036/t2-07-designer-settled-snapshot.md` | Designer open; User scope; Save disabled | Any Form identity |
| Select Form positive control, one row | `evidence/EXP-036/t3-07-positive-control-settled-snapshot.md`; `evidence/EXP-036/t3-08-positive-control-settled-viewport.png` | `FX_ComponentRecoveryLab02` single row under Name filter | Database inventory |
| Select Form target zero rows | `evidence/EXP-036/t3-09-target-query-settled-snapshot.md` | Zero rows for `FX_SingleButtonLab01` | Database absence (rendered UI only) |
| Form creation dialog path | `evidence/EXP-036/t5-03-before-create-wizard-selection.png`; `evidence/EXP-036/t5-07-wizard-selection-before-ok-snapshot.md` | New Form, Classic, BuildFromScratch selected | Creation outcome |
| Save Template label click unchecked | `evidence/EXP-036/t6-02-after-label-click-snapshot.md`; `evidence/EXP-036/t6-03-after-label-click-viewport.png` | Checkbox without `[checked]`; box visibly empty | Artifact state |
| Form created, clean, empty baseline | `evidence/EXP-036/t7-05-form-created-viewport.png`; `evidence/EXP-036/t7-08-components-baseline-viewport.png` | Heading, Properties, User scope, Save greyed; Components shows only `Pane (00)` | Other Forms |
| Button placed exactly once | `evidence/EXP-036/t9-03-after-placement-click-viewport.png`; `evidence/EXP-036/t9-04-after-placement-snapshot.md` | One button on canvas; Components grid one child; Type `PushButton` | — |
| Name committed via Enter | `evidence/EXP-036/t9-07-after-name-commit-viewport.png` | Name in grid and Components row | — |
| Caption: dropdown mis-hit (negative) | `evidence/EXP-036/t9-09-after-caption-dblclick-viewport.png`; `evidence/EXP-036/t9-10-caption-dropdown-open-snapshot.md` | Resource-key list opened by value-cell double-click | — |
| Caption: coordinate double-click, then literal commit | `evidence/EXP-036/t10-03-after-caption-dblclick-viewport.png`; `evidence/EXP-036/t10-04-after-caption-dblclick-snapshot.md`; `evidence/EXP-036/t10-05-post-caption-commit-viewport.png` | Caption editor `combobox [active]`, then `Factory Test Button` committed | Whether the stored value is literal or a resource key (unresolved) |
| One ordinary Save | `evidence/EXP-036/t10-07-after-save-viewport.png`; `evidence/EXP-036/t10-08-after-save-snapshot.md` | Save disabled; save toast | Server internals |
| Form-tab close | `evidence/EXP-036/t11-03-after-close-viewport.png`; `evidence/EXP-036/t11-04-after-close-snapshot.md` | No Form tab; no prompt | — |
| Recent-forms reopen | `evidence/EXP-036/t11-05-form-menu-open-snapshot.md`; `evidence/EXP-036/t11-07-post-reopen-viewport.png` | Form-menu entry clicked; canvas shows captioned button | — |
| Recovered Name, Type, Caption, exactly one child | `evidence/EXP-036/t11-12-components-expanded-viewport.png`; `evidence/EXP-036/t11-14-button-selected-property-grid-viewport.png`; `evidence/EXP-036/t11-13-button-selected-snapshot.md` | One child `FX_SingleButton01`/`PushButton`; Caption `Factory Test Button` | Literal-vs-resource storage |
| Predecessor SaveChanges response | `evidence/EXP-036/t10-08-after-save-snapshot.md` (and `harness-audit-T10.md`) | Save response `Success: true` per the record | — |

Screenshots were **not opened in T1**. Descriptions above come from the EXP-036 record and its snapshot files. Each decisive image must be inspected by the worker in the R2 run before it is cited.

## D. Evidence captured for this replay so far

- None in T1 (no browser calls).

## E. Limitations of the reviewed evidence

- EXP-036 is a single run and is `observed`, not `replay_verified`. EXP-027 is `replay_verified` only for Name and Type, not Caption.
- Caption recovery is not verified by any `replay_verified` record. Literal-vs-resource storage is unresolved in EXP-036.
- Select Form absence is rendered UI evidence only. Database absence, durability, cache eviction, metadata unloading and server serialization are not established by any reviewed record.
- EXP-036 relied on operator-stated MCP restart and an operator-authorized coordinate Caption double-click. Those are not standard procedure in the brief unless the coordinator approves them.
- The worker could not open the brief text itself (`tools/` is out of bounds). The step list used here is the one in the task message.

## F. Proposed ordered action sequence (copied into the experiment record)

See `experiments/EXP-036-R2-clean-replay-single-button-caption-recovery.md`, section "Proposed ordered action sequence".
