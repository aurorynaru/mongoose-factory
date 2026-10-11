# EXP-056 T4 — sequence-1 Set Values type committed; FX_VarTest assignment NOT committed; unsaved checkpoint

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 4, task T4.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `0c417301-9a99-48b5-a43c-aba7910b8df3`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

**Outcome: stopped at the unsaved checkpoint. Partial mutation: sequence 1's Response Type is now Set Values. The FX_VarTest assignment was NOT committed, because the Set Values Variables workflow does not offer a way to name or create FX_VarTest. The Form-variable definition is absent. Save is enabled (dirty). No Save, no Edit, no close/reopen, no runtime action.**

## 1. Gate (passed)

- `browser_tabs list` → tab 0 Designer, tab 1 Web Client. `browser_tabs select 0` succeeded.
- Fresh snapshot `t4-snapshot-00-fresh-designer-t3-checkpoint.md`: FX_Items; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save **enabled**; one `StdFormRefreshCompleted` group; row 0 sequence 0, Prompt, false, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; row 1 sequence 1, Response Type blank, no dialog open. Matches the T3 checkpoint.

## 2. Actions on the existing sequence-1 action (in order)

| # | Action | Result (observed) |
| --- | --- | --- |
| 1 | Click sequence cell of row 1 (`e413`) | Row 1 selected; property tree shows Sequence `1`. |
| 2 | Click Response Type dropdown on the property tree (`e515`) | Type list opened (alphabetical, `Add Breadcrumb` … `Collection Refresh`) (`t4-01`). |
| 3 | Click option `Set Values` (`e1390`, found in fresh snapshot `t4-snapshot-02`) | Property-tree Type = **Set Values**. Grid row 1 Response Type column then read **Set Values** (`t4-02`, `t4-snapshot-12`). |
| 4 | Click Parameters "Open Edit Property Dialog" (`e527`) | "Event Handler Parameters" dialog: General (Error Message, Success Message, Only When Current Collection Is `<all collections>`, Only When Platform Is, Keep, Ignore Failure, Message as Toast?, Disabled) and **Edit Set Values** (Variables `...`, Components `...`, Properties `...`, "Do not mark output targets modified?") (`t4-03`, `t4-snapshot-04`). |
| 5 | Click Variables `...` (`e1485`) | "Edit Set Variable Values" list dialog: **empty** list; buttons Up, New, Edit, Delete, Down, OK, Cancel, Help (`t4-04`, `t4-snapshot-05`). Empty list = no existing Set Values variable assignment on this action. |
| 6 | Click **New** (`e1524`) | "Edit Set Variable Value Pair" dialog: **Target** combobox (empty, with `...` and an Open button) and **Value** textbox (with `...`); OK, Cancel, Help (`t4-05`, `t4-snapshot-06`). **No variable-name entry field.** |
| 7 | Click Target `...` (`e1551`) | No picker dialog appeared; screenshot and snapshot unchanged (`t4-06`, `t4-snapshot-07`). Not interpreted further. |
| 8 | Click Target dropdown **Open** (`e1549`) | Dropdown list of existing targets: `InitialCommand` first (Form category), then `AccessAs`, `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `FarmEnableExtensionBundle`, `FarmEnforcePrefixFromAccessAs`, `gbgc_bg`, `gbgc_GradientTest1-3`, `IncludeBadgeStatusVar`, `IsDiagnosticsTimerElapsed`, … (`t4-07`, `t4-snapshot-08`). **No `FX_VarTest` entry.** |
| 9 | Press **Escape** (1 key press) | Dropdown collapsed; Target still empty; nothing selected (`t4-snapshot-09`). |
| 10 | Click Value-pair **Cancel** (`e1564`) | Pair dialog closed; nothing committed (`t4-08`, `t4-snapshot-10`). |
| 11 | Click Edit Set Variable Values **Cancel** (`e1534`) | List dialog closed; list was empty (`t4-snapshot-11`). |
| 12 | Click Event Handler Parameters **Cancel** (`e1512`) | Parameters dialog closed; Type remained **Set Values** (`t4-09`, `t4-snapshot-12`). |
| 13 | Click Variables tab (`e356`) | Variables list shown: `Form - Persistent` = `InitialCommand` only (`t4-10`, `t4-snapshot-13`). |

Nothing was typed into any field. No pair, no assignment, no variable, and no Edit was committed by any action.

## 3. Checkpoint state (observed)

| Item | Observed |
| --- | --- |
| Save | **Enabled** (`t4-snapshot-12` line 11) — unsaved; not clicked |
| Handler group | One `StdFormRefreshCompleted` group |
| Row 0 | Sequence 0; Prompt; false; `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` — unchanged |
| Row 1 | Sequence 1; **Response Type = Set Values**; Disabled false; Response Parameters **blank** (no assignment) |
| Row 1 Parameters | Parameters property cell blank; Edit in-line Script blank |
| Form-variable definition FX_VarTest | **Absent** (Variables tab, `Form - Persistent` = `InitialCommand` only; T2 filter with positive control also absent) |
| Set Values assignment (FX_VarTest = P(Description)) | **Absent** (Edit Set Variable Values list empty) |
| Dialogs | None open |
| Expression `P(Description)` | **Not entered; syntax not verified** |

## 4. Why the workflow stopped

The bounded instruction says: if the interface does not allow a unambiguous target, stop without speculative correction. The observed interface:
- The Set Values "Variables > New" workflow opens a **Target** combobox, not a name dialog. Its options are only **existing** variables. FX_VarTest is not among them.
- The Target field is a combobox with a picker `...` that showed no visible result, so it is not clear whether a new variable can be named there.
- Creating FX_VarTest would therefore require a Form-variable creation path outside this workflow (Details > Variables > New, the EXP-004 path). The brief forbids recreating a definition outside the prescribed workflow, and it does not authorize that path. Typing an unlisted name into Target was not tested, because it would be a guess and could write an unvalidated target.

So the expression and property selection could not be verified, and no assignment was committed.

## 5. Acceptance status after T4

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Supported (re-verified) | `t4-snapshot-00`; User footer; Save enabled (T3 dirty state); one group; row 0 unchanged |
| AC-2 | Supported with limits (T1; re-checked) | 16-row baseline in `T1-preflight-report.md`; FX_VarTest absent; no FX_VarTestEdit |
| AC-3 | **Not established** | Sequence 1 Response Type = Set Values, but **no FX_VarTest assignment**; `P(Description)` not entered or verified. Sequence 0 unchanged. |
| AC-4 | **Partly observed; not established** | Form-variable definition observed **absent** (`t4-10`); Set Values assignment observed **absent** (empty list `t4-04`, blank Parameters `t4-snapshot-12`). Distinct capture done; no value exists to expose. |
| AC-5 to AC-12 | Not tested | Outside T4 |

## 6. Action counts (T4)

- Tab lists 1; tab selects 1 (tab 0, succeeded).
- Fresh snapshots: 14 (`t4-snapshot-00` … `-13`).
- Screenshots: 10 (`t4-01` … `t4-10`). Plus `t4-09` after the final Cancel.
- Successful clicks: **12** (row select 1; Type dropdown 1; Set Values option 1; Parameters ellipsis 1; Variables ellipsis 1; Variables New 1; Target ellipsis 1; Target Open 1; Value-pair Cancel 1; list Cancel 1; Parameters Cancel 1; Variables tab 1). Each is one row of the §2 table.
- Key presses: 1 (Escape, dropdown collapse; no selection).
- Typing: 0. Hover: 0. Right-click: 0.
- Response Type set: **1** (sequence 1 only, to Set Values).
- Parameters dialog opened: 1 (cancelled, no change).
- Set Values assignment rows committed: **0**.
- Variable definitions created: **0**. Edit components placed: **0**.
- Handler groups added: 0. Sequence-0 changes: 0. Existing actions deleted or copied: 0.
- Designer Save: 0. Regenerate Form: 0. Designer close/reopen: 0.
- Runtime open/close/activation: 0. FX_RefreshButton clicks: 0. Runtime data edits: 0.
- Diagnostics, User Preferences, Diagnostic Log, FormSync, cache unload, SQL, scripts, reauthentication: 0.

## 7. Evidence files (T4)

- `t4-snapshot-00-fresh-designer-t3-checkpoint.md` — gate; Save enabled; sequence-0 and sequence-1 rows before edit.
- `t4-01-sequence1-type-dropdown-opened.png` — Type list open; Set Values not yet visible. Shows the list; does not show a selection.
- `t4-02-after-set-values-selected-response-type.png` — Type = Set Values in the property tree; grid row 1 Response Type column blank in this frame (later readback shows `Set Values`). Shows the selection, not the committed grid value.
- `t4-03-set-values-parameters-dialog-opened.png` — Event Handler Parameters with empty Variables/Components/Properties fields.
- `t4-04-set-values-variables-picker-opened.png` — Edit Set Variable Values, empty list.
- `t4-05-variable-new-dialog-opened.png` — Edit Set Variable Value Pair: Target combobox and Value textbox; no name field.
- `t4-06-target-ellipsis-picker-opened.png` — Target `...` clicked; no picker visible (limit).
- `t4-07-target-combobox-open-dropdown.png` — Target dropdown open; `InitialCommand` first; no FX_VarTest in the visible part (list continues below; the rest was not scrolled).
- `t4-08-after-value-pair-cancel.png` — pair dialog closed; list dialog still open.
- `t4-09-after-parameters-cancel-checkpoint.png` — final Event Handlers checkpoint: row 0 Prompt; row 1 Set Values; Parameters blank; Save icon active.
- `t4-10-variables-tab-definition-absent-checkpoint.png` — Variables tab: Form category `InitialCommand` only.
- Snapshots `t4-snapshot-01` … `-13`.

Limits: the Target dropdown was not scrolled, so FX_VarTest's absence from the full list rests on the first portion plus the T2 filter. The `t4-09` screenshot shows the grid's Response Type as `Set Values`, but the Parameters cell is blank.

## 8. Operator decision needed

The Set Values workflow cannot create or name FX_VarTest. Options (the worker has not chosen one):
1. Create the Form variable `FX_VarTest` first through **Details > Variables > New** (the EXP-004 path: Name dialog, then Persistent set to False, Value property). Then return to Set Values > Variables > New, select FX_VarTest in Target, and enter `P(Description)` in Value after verifying the syntax. This is a different creation path from the brief's stated workflow; the operator must authorise it.
2. Type `FX_VarTest` into the Target combobox directly, if the combobox accepts a new name. This was not tested, and typing an unlisted target may write an unvalidated name, so it needs approval.
3. Stop the Set Values assignment here and leave the sequence-1 action as Set Values with empty Parameters (not acceptable for AC-3).

The unsaved state must be preserved until the operator decides. Do not discard it.

## 9. Repository writes (T4)

- `evidence/EXP-056/T4-report.md` (created)
- `evidence/EXP-056/t4-01…t4-10` PNG files and `t4-snapshot-00…13` markdown files (created)
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: status line and T4 section)
- No other repository files written.
