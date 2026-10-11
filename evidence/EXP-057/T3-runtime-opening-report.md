# EXP-057 T3 — native Web Client runtime close, single opening, Hello World prompt, and initial FX_VarTestEdit observation (AC-6, AC-7)

Run `R-20261011-172309-X5Gt`, experiment EXP-057, cycle 5. The task header reads `task=T6`; the bounded instruction is **T3** (runtime close, one native opening, one OK, read-only observation). The bounded instruction was followed.
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `1b758db1-83c7-478c-b7e8-123ee443985b`.
Date: 2026-10-11. Browser tab 1 (Web Client runtime) for runtime actions. Tab 0 (Designer) was not interacted with in this task; its FX_Items Form remains open from T2D.

**Outcome: AC-6 observed; AC-7 observed and passed on exact equality.** The inherited runtime FX_Items tab was closed once. FX_Items was opened once through the runtime Open toolbar and its Select Form dialog. The automatic `Hello World` prompt appeared once and was dismissed with one OK. After dismissal, the displayed FX_VarTestEdit value `45 pound iron` equals the selected row's (dumbbell) FX_Description `45 pound iron` character-for-character. Caveat: the FX_VarTestEdit identity is inferred from its position and the absence of any other unlabelled Edit; the accessibility tree does not expose component names.

## 1. Actions performed (in order)

| # | Action | Target | Result |
| --- | --- | --- | --- |
| 1 | `browser_tabs list` | all tabs | Tab 0 Designer (current); tab 1 Mongoose portal runtime |
| 2 | `browser_tabs select 1` | runtime | Succeeded |
| 3 | Fresh snapshot `t6-snapshot-00` and screenshot `t6-01` (pre-close, before any interaction) | runtime | FX_Items tab selected; 3 records; FX_Refresh; Save disabled; no FX_VarTest component; no dialog |
| 4 | Click `Close Panel FX_Items` (ref `f1e101`) | inherited Form tab | **Closure 1 of 1.** Succeeded |
| 5 | Snapshot `t6-snapshot-01` and screenshot `t6-02` | runtime | Form tablist empty; no FX_Items heading; no dialog |
| 6 | Click runtime toolbar `Open` (ref `f1e25`) | runtime toolbar | **Opening attempt 1.** Succeeded (Select Form dialog appeared; the first snapshot was taken before it rendered) |
| 7 | Read-only `browser_find` "Select Form" | runtime | Dialog `Select Form` located |
| 8 | Fresh snapshot `t6-snapshot-03` and screenshot `t6-04` | Select Form dialog | Dialog shows one row: Caption `FX_Items`, Name `FX_Items`, highlighted; Filter `FX_Items`; Filter By Name; OK/Cancel/Help |
| 9 | Click dialog `OK` (ref `f1e733`) | Select Form dialog | **Runtime opening 1 of 1.** Succeeded |
| 10 | Snapshot `t6-snapshot-04` and screenshot `t6-05` — **captured before any prompt response** | runtime | One `alertdialog` "Infor Mongoose Application Development Framework - FX_Items", message `Hello World`, OK button |
| 11 | Click prompt `OK` (ref `f1e878`) | Hello World prompt | **Prompt dismissal 1 of 1.** Succeeded |
| 12 | Fresh snapshot `t6-snapshot-05` and screenshot `t6-06` | runtime | Post-OK state (AC-7 readback) |

Not done: FX_Refresh (0); any typing into a runtime field (0); any data edit, Save, Delete, or New (0); any selection of a row other than the automatic current row (0); any second prompt dismissal (0); any second opening (0); any Designer action (0).

## 2. Identity of the actual runtime Form (AC-6)

- Form tab after opening: `FX_Items` (selected; `tab [selected] … heading "FX_Items"`, `Close Panel FX_Items`), in the runtime iframe.
- Header identity: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Select Form dialog (`t6-snapshot-03`) listed exactly one entry, Caption `FX_Items` / Name `FX_Items`, before OK.
- Prompt title: `Infor Mongoose Application Development Framework - FX_Items` (the Form context in the prompt's own title).
- Status bar at opening: `(Object 1 of 3)`; after OK: `Description (Object 1 of 3)` (focus moved to the Description field by the native dismissal; no text typed).

## 3. Counts (AC-6, AC-10)

| Item | Budget | Used |
| --- | --- | --- |
| Inherited runtime tab closure | 1 | **1** (step 4) |
| Runtime opening through Open > Select Form | 1 | **1** (step 9); the toolbar Open click was step 6 (the single click that opened the dialog) |
| Automatic Hello World prompt observed | 1 expected | **1** (step 10) |
| Initial OK dismissal | 1 maximum | **1** (step 11) |
| Manual FX_Refresh activations | 0 in T3 | **0** |
| Runtime business-data modifications | 0 | **0** |
| Designer Saves | 0 | **0** (Designer not interacted with in T3) |
| Browser tab selections | — | 1 (tab 1) |
| Tab lists | — | 1 (before the first select) |
| Clicks (runtime) | — | 4 (close 1; toolbar Open 1; Select Form OK 1; prompt OK 1), all succeeded; timeouts 0 |
| Snapshots | — | 6 (`t6-snapshot-00` … `-05`) |
| Screenshots | — | 6 (`t6-01` … `t6-06`) |
| Read-only finds | — | 1 ("Select Form") |
| Typing | 0 | 0 |
| Browser-reference errors | — | 0 |

## 4. Initial FX_VarTestEdit observation and AC-7 comparison

**Before the OK response** (`t6-snapshot-04`, `t6-05`): the prompt covered the canvas. Behind it, a value box to the right of FX_Refresh displayed `45 pound i…` (partly obscured in the screenshot). In the accessibility tree this is an unnamed textbox (`f1e836`) with value `45 pound iron`. The grid row 1 shows `45 pound iron`; the Description field shows `45 pound iron`.

**After the single OK** (`t6-snapshot-05`, `t6-06`) — the AC-7 evidence sequence:

| Item | Observed value (accessibility text) | Source |
| --- | --- | --- |
| Currently selected item | `dumbbell` (grid row 1 selected; Item textbox `dumbbell`; status `Description (Object 1 of 3)`) | `f1e799` gridcell `dumbbell`; `f1e845` Item textbox |
| Selected row's FX_Description (grid) | `45 pound iron` | `f1e801` gridcell |
| Selected row's FX_Description (detail field) | `45 pound iron` | `f1e854` Description textbox |
| Displayed FX_VarTestEdit value | `45 pound iron` | `f1e836` unnamed textbox right of FX_Refresh |
| Comparison (FX_VarTestEdit vs selected Description) | **Exact equality** (`45 pound iron` = `45 pound iron`) | — |
| Expected per brief for dumbbell | `45 pound iron` | matches |

**AC-7 result: passed on exact equality**, subject to the identity caveat below. No blank value, no mismatch, no visible error, no missing component reported by the accessibility tree.

**Identity caveat (not established by name):** the accessibility tree exposes no name for `f1e836`. Its identity as FX_VarTestEdit rests on: (a) it is the only unlabelled textbox in the Form; (b) it sits to the right of FX_Refresh, where T2C's Location readback (`12.72; 30.25` in Designer units) places FX_VarTestEdit; (c) its value equals the Description of the current row. The screenshot shows the box at the place the Edit was designed. This is a strong inference, not a name-level confirmation.

## 5. Records and runtime Save state (AC-9 partial, T3 scope)

Post-OK grid (`t6-snapshot-05`):

| Row | Item | Description | Cost | Unit of Measure | Matches T1 (`t1-snapshot-01`) |
| --- | --- | --- | --- | --- | --- |
| 1 | dumbbell | 45 pound iron | 45.00 | EA | Yes |
| 2 | eggs | cage free | 6.99 | DZ | Yes |
| 3 | guitar | natural acoustic | 129.99 | EA | Yes |

- Save: `[disabled]` (`f1e28`).
- Status indicator: `(Object 1 of 3)` (after OK, the Description field is the focused control).
- Original 3 records visible and unchanged; no record was edited or saved.

## 6. Evidence limitations

- Single runtime session. Not a persistence, cross-session, or database claim.
- The FX_VarTestEdit identity is inferred (section 4), not named by the accessibility tree.
- The first Open snapshot (`t6-snapshot-02`) was taken before the Select Form dialog rendered; the fresh snapshot `t6-snapshot-03` is the valid dialog evidence. No second Open click was made.
- The post-OK screenshot shows the Description field focused with its text highlighted. This is native focus after dismissal. No text was typed; the highlight is not an edit.
- The pre-OK partial display of FX_VarTestEdit (`t6-05`) is covered by the prompt; it is supplementary.
- The DevTools log panel shows runtime FormEvent rows from 07:08 (earlier load). These rows are not from this T3 opening and were not analysed here.
- The "one prompt" statement rests on snapshots taken after OK; no separate poll for a second prompt was made beyond the post-OK snapshot.

## 7. Browser state at end of T3

- Tab 1 (runtime): FX_Items Form open (one instance, from this opening); no dialog; Save disabled; row 1 current; focus in Description. Preserved for the separate T4 single-refresh task (not performed here).
- Tab 0 (Designer): unchanged from T2D (FX_Items open, Variables tab, filter cleared, Save disabled, no dialog).

## 8. Acceptance

| AC | Status | Basis |
| --- | --- | --- |
| AC-6 (close once; open once through Open > Select Form; prompt before one OK; closure/opening/prompt counts) | **Supported (observed, single session)** | Sections 1–3; `t6-02` (closed), `t6-03`/`-04` (Select Form, one row), `t6-05` (prompt before response), `t6-06` (after OK) |
| AC-7 (displayed FX_VarTestEdit value and selected item's Description, exact equality) | **Passed on exact equality** (`45 pound iron` = `45 pound iron`, selected row dumbbell); FX_VarTestEdit identity inferred (caveat, section 4) | Section 4; `t6-snapshot-05` (`f1e836`, `f1e801`, `f1e854`) |
| AC-8 (one FX_Refresh activation; second prompt; re-read) | **Not started** (T4) | — |
| AC-9 (records unchanged; Save disabled; eggs-row optional) | **Partial**: records unchanged and Save disabled observed; eggs-row not selected (not in T3) | Section 5 |
| AC-10 (reconciliation) | **Partial**: T3 counts reconciled in section 3; full reconciliation after T4 | Section 3 |
| AC-11 (acceptance matrix; confinement) | Pending final report | — |

## 9. Remaining action budgets (for the T4 task)

- FX_Refresh activation: **1 remaining** (none used in T3). Its Hello World prompt: one OK dismissal.
- Runtime reopening: **0 remaining** for this run (the Form is already open; the brief allows one opening).
- Inherited runtime closure: **0 remaining** (used).
- Designer Saves: **0** (the brief prohibits Designer Save in EXP-057). None used.
- Eggs-row selection (optional): not performed; permitted without refresh.

## 10. Files written (T3)

- `evidence/EXP-057/T3-runtime-opening-report.md` (this report)
- Snapshots: `evidence/EXP-057/t6-snapshot-00-runtime-tab1-fresh-before-close.md`, `t6-snapshot-01-runtime-after-close-tab-state.md`, `t6-snapshot-02-select-form-dialog-open.md` (taken before the dialog rendered), `t6-snapshot-03-select-form-dialog-fresh.md`, `t6-snapshot-04-opening-prompt-captured-before-response.md`, `t6-snapshot-05-post-OK-runtime-state-fresh.md`
- Screenshots: `evidence/EXP-057/t6-01-runtime-before-close-inherited-fx-items.png`, `t6-02-runtime-after-single-close-form-tab-state.png`, `t6-03-after-runtime-open-click-select-form-check.png`, `t6-04-select-form-dialog-one-row-FX_Items-before-select.png`, `t6-05-opening-prompt-captured-before-response.png`, `t6-06-post-OK-runtime-state-fx-items-selected-record.png`
- Tool-generated (gitignored): `evidence/playwright/page-2026-10-11T09-37-*.yml`, `09-38-*.yml`, `09-38-51-666Z.yml` etc.
- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md` (updated: status and T3 section)
