# EXP-056 T5 — Path A: sequence-1 Set Values assignment committed; unsaved checkpoint (no Save)

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 7, task T5.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `4e65e639-3f50-4729-a55b-5a73df09b8b4`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

**Outcome: Path A completed once. Sequence 1 now carries one Set Values assignment, `FX_VarTest=P(FX_Description)`, and the handler summary reads `SETVARVALUES(FX_VarTest=P(FX_Description))`. The Designer is dirty (Save enabled) and was not saved. A Form-variable definition named FX_VarTest is absent at this checkpoint. No Edit component, no Save, no close/reopen, no runtime action.**

## 0. Operator adaptation (recorded explicitly)

- The brief's proposed expression was `P(Description)`. The operator authorised **`P(FX_Description)`** for this run.
- Reason (from T1 evidence, `T1-preflight-report.md` §4): the Edit component that displays Description is `FX_DescriptionEdit`, whose Binding Type is `Property` and Binding is `object.FX_Description`. The IDO property is `FX_Description`, not `Description`.
- The adapted expression was entered only after the Target was verified, and it was read back in both fields before OK. It was not substituted silently.

## 1. Gate (passed before any edit)

- `browser_tabs list` (before any select) → tab 0 Designer, tab 1 Web Client. `browser_tabs select 0` succeeded.
- Fresh snapshot `t5-snapshot-00-fresh-designer-pathA-start.md`: FX_Items; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save enabled (T4 dirty state).
- Event Handlers (after one tab click, `t5-snapshot-01`): one `StdFormRefreshCompleted` group; row 0 sequence `0`, Prompt, Disabled `false`, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (unchanged); row 1 sequence `1`, Set Values, Disabled `false`, Response Parameters blank. No dialog.
- Stop conditions checked: identity correct, handler structure as expected, no conflicting FX_VarTest assignment (list empty). No stop triggered.

## 2. Path A actions (in order)

| # | Action | Result (observed) |
| --- | --- | --- |
| 1 | Click Event Handlers tab | Handler grid shown (`t5-snapshot-01`) |
| 2 | Click row 1 sequence cell (`e1409`) | Row 1 selected; property tree Type = Set Values (`t5-snapshot-02`) |
| 3 | Click Parameters "Open Edit Property Dialog" (`e1523`) | Event Handler Parameters dialog opened (`t5-snapshot-03`) |
| 4 | Click Edit Set Values Variables `...` (`e1623`) | "Edit Set Variable Values" list opened, **empty** (`t5-snapshot-04`) |
| 5 | Click list **New** (`e1662`) | "Edit Set Variable Value Pair" opened; Target combobox empty and focused (`t5-snapshot-05`) |
| 6 | Type `FX_VarTest` into Target (`e1686`), no dropdown item selected | Target text entered |
| 7 | Press **Tab** once | **Target retained `FX_VarTest`** (accessibility `combobox [ref=e1686]: FX_VarTest`; screenshot `t5-01`). Value empty. (`t5-snapshot-06`) |
| 8 | Type `P(FX_Description)` into Value (`e1696`) | Value entered |
| 9 | Read back before OK | Target `FX_VarTest`; Value `P(FX_Description)` (`t5-snapshot-07`; screenshot `t5-02`) |
| 10 | Click pair **OK** (`e1700`) once | Pair dialog closed; list shows **one** row `FX_VarTest=P(FX_Description)` (`t5-snapshot-08`) |
| 11 | Screenshot of the list before parent OK | One row, no other rows (`t5-03`) |
| 12 | Click list **OK** (`e1670`) once | List closed; Parameters Variables field reads `FX_VarTest=P(FX_Description)` (`t5-snapshot-09`) |
| 13 | Click Parameters **OK** (`e1648`) once | Parameters dialog closed. Row 1 Response Parameters now `SETVARVALUES(FX_VarTest=P(FX_Description))` (`t5-snapshot-10`, `t5-04`) |
| 14 | Click sequence 0 row cell (`e1715`) | Sequence 0 selected; Type Prompt; Parameters summary unchanged (`t5-snapshot-11`) |
| 15 | Click sequence 0 Parameters Open Edit Property Dialog (`e1903`) | Read-only readback: Message Text `Hello World`; Caption not individually read here (see §5); OK the only checked response; Default OK (`t5-snapshot-12`) |
| 16 | Click Parameters **Cancel** (`e2167`) | Dialog closed, no change (`t5-snapshot-13`) |
| 17 | Click Variables tab (`e358`) | Variables list shown (`t5-snapshot-14`) |
| 18 | Type `VarTest` into Variables filter (`e370`), Enter | No rows (`t5-snapshot-15`) |
| 19 | Clear filter (empty text), Enter | Filter cleared; screenshot `t5-05` |

Not done (by instruction): no second assignment, no second Target entry, no Edit placed, no Save, no close/reopen, no runtime, no FX_VarTest created through another route, no existing component changed, no Delete/Undo.

## 3. Pre-Save checkpoint state (observed)

| Item | Observed |
| --- | --- |
| Save | **Enabled** (dirty). Not clicked. |
| Handler group | One `StdFormRefreshCompleted` group |
| Row 0 | Sequence 0; Prompt; Disabled false; `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; Parameters readback Message Text `Hello World`, OK only checked |
| Row 1 | Sequence 1; **Set Values**; Disabled false; Response Parameters `SETVARVALUES(FX_VarTest=P(FX_Description))` |
| Set Values assignment (AC-4 assignment half) | One row `FX_VarTest=P(FX_Description)` in the parent list before OK; committed to Parameters |
| Form-variable definition FX_VarTest (AC-4 definition half, `t5-05`) | **Absent**: Form category `InitialCommand` only; `VarTest` filter returned no rows |
| Dialogs | None open |
| Scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |

## 4. Interpretation (kept separate from observations)

- The assignment row and the Form-variable definition are different objects. The row exists in the handler's Set Values Parameters (the target name appears as text inside the assignment). No Form variable named FX_VarTest appears in the Variables collection. The Set Values assignment therefore does not create or prove a Form-variable definition.
- The Target combobox accepted the typed name `FX_VarTest` and retained it after Tab. Whether Mongoose validated FX_VarTest as an existing variable, or stored it as a plain target name, is not established by the UI alone. The Variables tab shows no such definition.
- The expression `P(FX_Description)` was accepted by the dialog and appears in the committed summary. The dialog provided no syntax validation message. Whether it evaluates to the Description value at runtime is not established until the runtime check.

## 5. Limits

1. Sequence 0 Caption was not individually read. The Prompt readback was limited to Message Text, Caption (not separately recorded), icon, responses and default, which matched T4/T1 values in the summary.
2. The Target combobox could not be shown to contain FX_VarTest in its dropdown list (it is not an existing variable). The dropdown was not reopened in T5, to avoid a second Target interaction.
3. The Variables filter result rests on the same filter behaviour that T2 checked with a positive control (`Initial` → `InitialCommand`). T5 did not repeat the positive control.
4. Expression evaluation at runtime is unverified.
5. The `browser_tabs` lists in the run log showed one Designer tab and one Web Client tab throughout.

## 6. Action counts (T5)

- Tab lists 1; tab selects 1 (tab 0, succeeded).
- Fresh snapshots: 16 (`t5-snapshot-00` to `-15`).
- Screenshots: 5 (`t5-01` to `t5-05`).
- Clicks: **12** (Event Handlers tab 1; row 1 select 1; Parameters open 1; Variables ellipsis 1; list New 1; pair OK 1; list OK 1; Parameters OK 1; row 0 select 1; sequence 0 Parameters open 1; sequence 0 Parameters Cancel 1; Variables tab 1).
- Typing: 4 (Target `FX_VarTest`; Value `P(FX_Description)`; filter `VarTest`; filter cleared).
- Key presses: 3 (Tab 1 after Target; Enter 2 for filter apply/clear).
- Set Values assignment rows committed: **1**. Set Values Type changes in T5: 0 (T4 set it).
- Parameters OK: 1. Parameters Cancel: 1 (sequence 0, read-only).
- Designer Save: 0. Regenerate Form: 0. Designer close/reopen: 0.
- Edit components placed: 0. Form variables created: 0.
- Runtime open/close/activation: 0. FX_RefreshButton clicks: 0. Runtime data edits: 0.
- Diagnostics, User Preferences, Diagnostic Log, FormSync, cache unload, SQL, scripts, reauthentication: 0.
- Console: the same two Designer `adorner` TypeErrors seen earlier; not investigated.

## 7. Evidence files (T5)

- Screenshots (`evidence/EXP-056/`):
  - `t5-01-target-entered-after-tab.png`: Pair dialog after Tab; Target shows `FX_VarTest`, Value empty. Proves the retained Target. Does not prove the Target is a Form variable.
  - `t5-02-pair-readback-target-FX_VarTest-value-P-FX_Description-before-ok.png`: Pair dialog before OK; Target `FX_VarTest`, Value `P(FX_Description)`. Proves both committed field texts before OK.
  - `t5-03-assignment-list-one-row-before-parent-ok.png`: Edit Set Variable Values list with one row `FX_VarTest=P(FX_Description)`. Proves one assignment row before parent OK.
  - `t5-04-committed-handler-summary-two-actions-unsaved.png`: Event Handlers after commit; row 0 Prompt summary; row 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`; Save icon active; no dialog. Proves the committed two-action state (unsaved).
  - `t5-05-variables-definition-checkpoint-absent-unsaved.png`: Variables tab, Form category `InitialCommand` only. Proves the definition is absent at this checkpoint. Global rows partly out of view.
- Accessibility snapshots: `t5-snapshot-00` … `t5-snapshot-15` (16 files, `evidence/EXP-056/`).
- Tool-generated snapshots (gitignored, `evidence/playwright/`): cited by name in §2.

## 8. Acceptance status after T5

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Supported (re-verified) | `t5-snapshot-00`; User footer; Save enabled (dirty, expected) |
| AC-2 | Supported with limits (T1) | 16-row baseline; FX_VarTest and FX_VarTestEdit absent before T5 |
| AC-3 | **Supported with the operator-authorised adaptation** (`P(FX_Description)` instead of `P(Description)`) | Two ordered actions: sequence 0 Prompt unchanged; sequence 1 Set Values with `FX_VarTest=P(FX_Description)` (`t5-04`, `t5-snapshot-10`). AC-3 is about the handler's actions only. Runtime correctness of the expression is not yet tested (later step). |
| AC-4 | **Supported** (pre-Save, separately captured) | Variables collection: FX_VarTest definition **absent** (`t5-05`, `t5-snapshot-14`, `t5-snapshot-15`). Set Values Parameters: one assignment row `FX_VarTest=P(FX_Description)` (`t5-03`). Captured as separate observations. |
| AC-5 to AC-12 | Not tested (Edit placement, Save, reopen, runtime are later steps) | — |

## 9. Repository writes (T5)

- `evidence/EXP-056/T5-report.md` (created)
- `evidence/EXP-056/t5-01…t5-05` PNG files and `t5-snapshot-00…15` markdown files (created)
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: status line and T5 section)
- No other repository files written.

## 10. Current state and next step

- The Designer is unsaved and dirty. Save is enabled. No dialog is open. The Variables tab is showing. Sequence 0 is selected.
- Next permitted action, per the brief (not started): place `FX_VarTestEdit` (Edit, Binding Type Variable, Binding FX_VarTest) in a later bounded task, then verify the two-action handler before one ordinary Save.
- The unsaved state must be preserved; it must not be discarded.
