# EXP-056 T3 — sequence-1 row created on the existing handler; unsaved checkpoint (no Save)

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 3, task T3.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `b887c91d-3302-455a-bebe-fe1167396375`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

**Outcome: the New (+) route created one sequence-1 row inside the existing `StdFormRefreshCompleted` group. The row's Response Type is blank. The handler is unsaved (Save enabled). Stopped here, as instructed.** Not done: Set Values Type, Parameters, FX_VarTest definition, FX_VarTestEdit, Save, close/reopen, runtime.

## 1. Preconditions (passed before the New click)

- `browser_tabs list` (before any select) → tab 0 Designer, tab 1 Web Client.
- `browser_tabs select 0` succeeded.
- Fresh snapshot `t3-snapshot-00-fresh-designer-preconditions.md`:
  - Form heading and tab `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
  - Save, Regenerate Form disabled; Undo, Redo disabled.
  - Details tab `Event Handlers` selected.
  - One group `StdFormRefreshCompleted`; one row: sequence `0`, Response Type `Prompt`, Disabled `false`, Response Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
  - No sequence-1 row. No dialog open.
- Baseline screenshot `t3-01-pre-new-baseline-one-group-one-prompt-row.png` (one group, one Prompt row; Save greyed).

## 2. The New action (one click, then one dialog OK)

- New (+) clicked **once** (first button of the handler toolbar; tooltip `New` confirmed in T2).
- The "Event Handler" dialog opened. Fresh snapshot `t3-snapshot-01-after-new-click-dialog-open-name-check.md`: combobox `Name:` value exactly **`StdFormRefreshCompleted`**; buttons OK and Cancel. Name was **not changed**. Screenshot `t3-02-new-dialog-name-StdFormRefreshCompleted-before-ok.png`.
- OK clicked **once**.

## 3. Immediate result (before any further configuration)

Screenshot `t3-03-immediately-after-ok-handler-grid.png` and snapshot `t3-snapshot-02-immediately-after-ok-handler-grid.md`:

| Element | Observed |
| --- | --- |
| Handler groups | **One** `StdFormRefreshCompleted` group header (no duplicate group) |
| Row 0 | Sequence `0`; Response Type `Prompt`; Disabled `false`; Response Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. **Unchanged.** |
| Row 1 (new) | Sequence `1`; **Response Type blank**; Disabled `false`; Response Parameters blank. Selected; its Disabled cell has focus. |
| Row 1 property tree | Event `StdFormRefreshCompleted`; Sequence `1`; Disabled `False`; Response node expanded with **Type: no value shown** (empty dropdown cell); **Parameters: no value shown** (Open Edit Property Dialog button present); Edit in-line Script present. |
| Save | **Enabled** (dirty), as expected for an unsaved change |
| Regenerate Form, Undo | Regenerate disabled in snapshot; Undo disabled |
| Dialog | None open |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |

Expected result per the bounded instruction — one group, sequence 0 Prompt unchanged, a new sequence-1 action, Save enabled — is **established** for the grid structure. The Type of the new row is recorded as observed (blank), not assumed. The Parameters of the new row are blank.

Observed: the sequence-1 row is inside the same group visually (one group header in the screenshot); the snapshot places row 1 in a separate table element with no group header of its own. The screenshot is the decisive evidence for grouping.

## 4. Stop point

Per the instruction, nothing further was done:
- Response Type was **not** set (no dropdown opened or selected).
- Parameters were **not** opened.
- FX_VarTest was **not** created; the Variables tab was not touched.
- FX_VarTestEdit was **not** placed.
- Save was **not** clicked.
- The unsaved sequence-1 row is left as is. It is not deleted, undone, or corrected.

## 5. Acceptance status after T3

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Supported (re-verified) | `t3-snapshot-00`; footer; Save disabled; one group; one Prompt row |
| AC-2 | Supported with limits (T1; re-checked T2) | 16-row baseline in `T1-preflight-report.md`; FX_VarTest absent (T2 filter, positive control); no FX_VarTestEdit; no sequence-1 before T3 |
| AC-3 | **Partly established** | Two rows exist in one group; sequence 0 Prompt unchanged. **Sequence 1 Type is blank, not Set Values** and Parameters are blank. Full AC-3 is not met yet. |
| AC-4 | **Not established** | No Set Values assignment; FX_VarTest definition observed absent (T2). |
| AC-5 to AC-12 | Not tested | Outside T3 |

## 6. Action counts (T3)

- Tab lists 1 (before first select); tab selects 1 (tab 0, succeeded).
- Fresh snapshots: 3 (`t3-snapshot-00`, `-01`, `-02`). No recovery snapshot needed; no ref-not-found errors.
- Screenshots: 3 calls, 3 files (`t3-01`, `t3-02`, `t3-03`).
- Clicks: 2 successful — New (+) once; dialog OK once.
- Typing 0; key presses 0; hover 0; right-click 0.
- Dialog OK: 1. Dialog Cancel: 0. Dialog Name changed: 0.
- Response Type set: 0. Parameters opened: 0.
- Handler groups added: 0 (one group, unchanged count). Sequence-1 rows added: **1**.
- Set Values actions configured: 0. Variable definitions created: 0. Edit components placed: 0.
- Designer Save: 0. Regenerate Form: 0. Designer close/reopen: 0.
- Runtime open/close/activation: 0. FX_RefreshButton clicks: 0. Runtime data edits: 0.
- Diagnostics, User Preferences, Diagnostic Log, FormSync, cache unload, SQL, scripts, reauthentication: 0.

## 7. Evidence files (T3)

- `t3-01-pre-new-baseline-one-group-one-prompt-row.png` — before New. One group, one sequence-0 Prompt row, Save greyed, User footer. Does not show the dialog.
- `t3-02-new-dialog-name-StdFormRefreshCompleted-before-ok.png` — dialog open; Name `StdFormRefreshCompleted` before OK. Does not show the result of OK.
- `t3-03-immediately-after-ok-handler-grid.png` — after OK: one group header; row 0 Prompt; row 1 sequence 1, blank Response Type and Parameters; Save icon active; User footer. Does not show the Response Type dropdown contents (not opened).
- Snapshots: `t3-snapshot-00-fresh-designer-preconditions.md`, `t3-snapshot-01-after-new-click-dialog-open-name-check.md`, `t3-snapshot-02-immediately-after-ok-handler-grid.md`.
- Tool-generated snapshots (gitignored, `evidence/playwright/`): `page-2026-10-11T08-44-22-639Z.yml` (after New), `page-2026-10-11T08-44-30-572Z.yml` (after OK).

## 8. Interpretation and limits

- Proof: the New click, with the dialog Name read before OK, produced one new sequence-1 row in the existing group, with the sequence-0 row visibly unchanged. The grid and property tree are direct readbacks.
- Interpretation: the sequence-1 row is an action in the same handler, not a second handler. Grouping rests on the single group header in the screenshot and on the absence of a second group cell in the snapshot. A second rendering check would be the Components/Event Handlers reopen after Save, which is outside T3.
- Limit: the blank Response Type is read from the grid cell and the property cell. Its underlying value (for example `None` or an unset flag) is not visible and is not inferred.
- Limit: no Save has occurred, so this row exists only in the Designer session. It is not a persisted state.
- Limit: the Disabled cell of row 1 has keyboard focus (no key was pressed in T3); its value remains `false`.

## 9. Repository writes (T3)

- `evidence/EXP-056/T3-report.md` (this file; created)
- `evidence/EXP-056/t3-01…t3-03` PNG files and `t3-snapshot-00…02` markdown files (created)
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: status line and T3 section)
- No other repository files written.

## 10. Next permitted action (for coordinator)

Set row 1 Response Type to **Set Values** (its Type dropdown, one selection), then open the row's Parameters > Variables ellipsis > New for `FX_VarTest`, and read the `P(Description)` syntax and property selection in that native dialog. This is the next bounded task, not started here.
