# EXP-067-R2 — T4 report: read-only preliminary FX_UMsDescription binding-availability inspection (existing FX_UMCombobox)

Run `R-20261013-011002-lSgL`, cycle 3, task T4. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `f1db10e5-4d5f-46ef-8310-5115b05b405c`. Date 2026-10-13. Editing scope User.

**Outcome: `object.FX_UMsDescription` is offered by the Designer binding picker of the existing FX_UMCombobox (preliminary, read-only). The picker was dismissed with Escape without a commit. FX_UMCombobox Binding still reads `object.FX_UM`. Designer Save and Undo are disabled. No component was added, dropped, renamed or changed. No unload, close, reopen or Save was performed. AC-2 remains PENDING until the picker of the new FX_UMsDescriptionEdit confirms the entry.**

## 1. Preconditions (fresh)

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, **current**); tab 1 = Web Client (`favoriteContext=UserPreferences`). **No tab selection was needed**: tab 0 was already current, so no `tabs select` call was made in T4.
- Fresh untargeted snapshot: Designer tab heading `FX_Items` (closable); Name `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar **Save disabled**, **Regenerate Form disabled**, **Undo disabled**, **Redo disabled**; no dialog. Properties showed FX_RefreshButton (T3 selection, view state).
- Components grid tree expanded (17 rows as in T3).

## 2. Read-only steps

1. Selected the existing `FX_UMCombobox` row in the Components grid (selection only; no property change). Properties header `FX_UMCombobox (EnhancedCombo)`.
2. Read the Data Source group: **Binding Type `Property`**; **Binding `object.FX_UM`** (accessibility readback).
3. Opened the Binding dropdown once (its arrow trigger in the Binding row). No option was clicked.
4. Located the entries in the open listbox by accessibility find (read-only). Result (verbatim option cells, in the listbox order seen): `object.FX_UM` (**selected**), `object.FX_UMsDescription`, `object.InWorkflow`, … (the list continues below the visible area; the visible items above `object.FX_UM` were `object.FX_Picture`). Only one entry matches `FX_UMsDescription`; the prefix search `FX_UMs` returned only `object.FX_UM` and `object.FX_UMsDescription` inside the listbox (the other matches were the FX_UMStatic row and the Caption, outside the picker).
5. Captured the open picker (`t4-01`).
6. Dismissed the list with **Escape** (one key press; not a commit). Re-read Binding: `object.FX_UM` (unchanged; accessibility `gridcell [active] [selected]`). Captured `t4-02`.
7. Verified Save and Undo disabled; verified no dialog (find `dialog`: none).

No binding option was selected. No property value was typed or changed.

## 3. Evidence

- `t4-01-binding-picker-open-fx_umcombobox-existing-listing-fx_umsdescription.png` (viewed). Shows: the Properties panel with FX_UMCombobox (EnhancedCombo); Data Source; Binding Type `Property`; the Binding dropdown open with the list `object.FX_Picture`, `object.FX_UM` (highlighted as selected), **`object.FX_UMsDescription`**, `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, `object.RowPointer`, `object.UDFDateTime1` … `object.UDFDateTime5`; the Components grid with FX_UMCombobox selected; Save icon greyed. **Proves:** the entry `object.FX_UMsDescription` is visible in the native picker of the existing combobox; the picker is an IDO-property list with the `object.` prefix. **Does not prove:** the entries above `object.FX_Picture` or below `object.UDFDateTime5` (not scrolled; not read); whether the new Edit's picker shows the same list (AC-2 requires that); any commit.
- `t4-02-after-escape-binding-unchanged-save-undo-disabled.png` (viewed). Shows: picker closed; Binding `object.FX_UM` with its arrow; Save and Undo icons greyed; FX_UMCombobox still selected; footer User scope. **Proves:** the picker dismissed without a visible change and the Designer is clean. **Does not prove:** that the Binding readback is the stored value (the accessibility readback `object.FX_UM` is the stronger evidence, recorded above).

Accessibility readback of the entry (for the record): `option` → `cell "object.FX_UMsDescription"` in the open Binding combobox listbox (one match).

## 4. Assessment

- **Preliminary binding availability: observed.** `object.FX_UMsDescription` is offered by the Designer binding picker for an existing Designer component (the FX_UMCombobox Binding dropdown), after the T2 and T3 unloads. The entry was not checked in any picker before the unloads in this run (T1 did not open a binding picker), so the before/after change is not established here.
- **Limit:** this is the Binding picker of an existing ComboBox, not the Edit picker. The brief's binding gate (AC-2) requires the picker of the **new FX_UMsDescriptionEdit**, which does not exist yet. It remains **pending**.
- **Can the Edit gate proceed safely?** Yes, with one design point for the next task. The gate requires a new Edit (a Toolbox drop, which the brief counts as the first of the two drops). Opening that Edit's Binding picker happens **after** the drop, so the Designer becomes dirty before the gate is decided. If the entry were missing, the dropped Edit would have to be removed (Undo or the Components-grid trash button, after confirmation naming the exact component). Recommendation for the next task: drop the Edit, open its Binding picker, and if the entry is present, proceed; if absent, stop and remove the uncommitted Edit (as the brief's "stop before committing" requires) without a second unload. The next task should decide which removal route to use, since the brief does not name one.

## 5. Counts (T4)

**T4 explicit browser calls: 15.** Tab lists 1; tab selects 0; snapshots 2 (1 untargeted at start; 1 targeted to the Properties panel for refs); finds 7; clicks 2 (FX_UMCombobox row; Binding dropdown arrow); key presses 1 (Escape); screenshots 2 (`t4-01`, `t4-02`). No typed entries, waits or wheel.

**Cumulative T1 + T2 + T3 + T4: 124 explicit browser calls** (T1 53 + T2 15 + T3 41 + T4 15). Cumulative: tab lists 5; tab selects 5; snapshots 13; finds 50; clicks 32; hovers 3; key presses 1; screenshots 15.

| Operation (cumulative T1 – T4) | Count |
| --- | --- |
| Preference reads | 1 (T1; checked; unchanged; not re-read later) |
| Preference changes | 0 |
| **Web Client `Unload All Global Form Objects`** | **1** (T2) — unchanged |
| **Designer `Unload All Global Form Objects`** | **1** (T3) — unchanged |
| Designer close / reopen (pre-change) | 1 / 1 (T3) |
| Designer Save | 0 |
| Toolbox drops | 0 |
| Component add / delete / rename / property change | 0 / 0 / 0 / 0 (binding picker opened and dismissed; no commit) |
| Binding commits | 0 |
| Runtime close / reopen | 0 / 0 |
| Record edits / runtime Save | 0 / 0 |
| Check-in / undo checkout | 0 / 0 |
| Browser JavaScript, console, network | 0 |
| Direct URL / refresh / restart / session re-login | 0 / 0 / 0 / 0 |
| Dialogs answered | 2 (T3 Select Form row and OK); 1 (T1 Designer scope OK) |

## 6. Worker-written file inventory (T4)

- `evidence/EXP-067-R2/T4-binding-picker-readonly-report.md` (created; this file).
- `evidence/EXP-067-R2/t4-01-binding-picker-open-fx_umcombobox-existing-listing-fx_umsdescription.png` (created).
- `evidence/EXP-067-R2/t4-02-after-escape-binding-unchanged-save-undo-disabled.png` (created).
- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (updated: status, §18 T4, knowledge state, next step).
- Cumulative from T1–T3 (unchanged in T4): `T1-preflight-report.md`, `T2-webclient-unload-report.md`, `T3-designer-unload-report.md`; `t1-01` … `t1-06`; `t2-01` … `t2-03`; `t3-01` … `t3-04`.
- Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files from this task (timestamps 2026-10-12T17:25–17:26 UTC, including `page-2026-10-12T17-25-54-078Z.yml` and `page-2026-10-12T17-26-04-442Z.yml`, and console logs). Not read in full. The harness and operator git review are authoritative.

## 7. Final state

- **Designer:** tab 0, `FX_Items` open, User scope (ScopeName anton.ramos@3mworks.com.ph), **clean** (Save and Undo disabled), no dialog, binding picker closed. FX_UMCombobox selected (view state); its Binding `object.FX_UM` (unchanged). Baseline 17 components; FX_UMsDescriptionStatic and FX_UMsDescriptionEdit absent.
- **Web Client:** not operated on in T4 (tab 1 not selected).
- **Unloads:** Web Client 1; Designer 1. Neither repeated.
- **Next:** the binding gate on a new Edit (AC-2 pending). See §4.
