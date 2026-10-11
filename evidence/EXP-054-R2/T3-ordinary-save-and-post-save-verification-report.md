# EXP-054-R2 — T3 pre-save gate, one ordinary Designer Save, and post-save verification

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 2, task T3.
Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `ca93545b-1c6e-43e2-afac-93a58d774e05`.
Date 2026-10-11. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items` (User version). Button `FX_RefreshButton`.

**Result: one ordinary Designer Save was executed and completed without any visible error or prompt. Post-save verification passed for every check listed below. The Designer is left open and clean (Save disabled). The Designer was NOT closed or reopened; the runtime, Diagnostics, log, and Button were NOT touched.**

Classification: **observed only** (single session; rendered UI and accessibility). Persistence beyond this open Designer session is not verified in T3; that is the next task's reopen check.

---

## 1. Tab state and gate (first browser actions)

- `browser_tabs list` was the first browser action (tab 0 = Designer `MGForm=FX_Items`, current; tab 1 = Web Client `favoriteContext=FX_Items`). Tab 1 was not selected.
- Fresh untargeted snapshot `evidence/EXP-054-R2/t3-snapshot-00-pre-save-fresh-designer.md`:
  - Form tab `FX_Items` selected; Save **enabled** (dirty, not `[disabled]`); Undo enabled.
  - Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
  - No dialog, no browser prompt, no portal banner, no unsaved-change prompt from another source.
  - Components tree: `Pane (00)` > `FormCollectionGrid` (Grid, objects, 0, Tab 0) > four GridColumns; `Pane (01)` > eight controls (Tabs 5–12); `FX_RefreshButton` (PushButton, Pane 1, Tab 0). Exactly one `FX_RefreshButton` row.
  - Form tab (accessibility, read before the Button header was selected): Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Form Type `Normal`; Is Master `True`; **Initial Command `Refresh`**.

## 2. Pre-save configuration gate (verified before the Save click)

Read through the Properties panel for the selected `FX_RefreshButton` (view-only selection of its Components row, then the Component tab):

| Property | Pre-save value (accessibility) | Screenshot |
| --- | --- | --- |
| Header | `FX_RefreshButton (Button)` | `t3-01` |
| Name | `FX_RefreshButton` | `t3-01` |
| Caption | literal `FX_Refresh` (accessibility `gridcell "FX_Refresh"`) | `t3-01` |
| Type | `PushButton` | `t3-01` |
| Events > Primary | `StdFormRefresh` | `t3-01` (Primary row) |
| Data Source > Binding Type / Binding | `None` / blank (unbound, default) | `t3-01` |
| Tab (Components grid) | `0` (not changed; per instruction) | `t3-snapshot-00` |

Gate result: all three requested properties matched the T2-verified values. The Button's Tab value was not edited. Nothing was changed before the Save click.

Preservation gate (pre-save, against the T1/T2 baseline): the Components rows in `t3-snapshot-00` list the same 13 component rows, the two pane roots, and the new row, with the same Types, Data Sources, Panes, Containers, and Tabs as T1 and T2 (`FormCollectionGrid` Grid / objects / 0 / 0; four GridColumns `object.FX_Item`, `object.FX_Description`, `object.FX_Cost`, `object.FX_UM` at Tabs 1–4; `FX_ItemStatic`…`FX_UMCombobox` at Tabs 5–12 with bindings `object.FX_Item`…`object.FX_UM` on Edit/ComboBox). Initial Command `Refresh`. Gate passed.

## 3. The single ordinary Designer Save

- Action: one native click on the Designer toolbar **Save** button (accessibility `button "Save" [ref=e16]`, enabled before the click). One click only; no retry.
- Immediate outcome (`evidence/EXP-054-R2/t3-02-immediate-after-single-Save-outcome.png`):
  - A native notification toast appeared at the top right: title **`Save`**, body **`Form [FX_Items] and global object(s) were saved.`** (verbatim).
  - No error message, no dialog, no confirmation prompt.
  - Save toolbar button greyed (disabled); Undo and Redo greyed.
  - Tooltip `Save` visible on the toolbar (hover only).
- Post-save accessibility snapshot `evidence/EXP-054-R2/t3-snapshot-01-post-save-fresh-designer.md`: `button "Save" [disabled]`; `button "Regenerate Form" [disabled]`; `button "Undo" [disabled]`; `button "Redo" [disabled]`.

Reading of "global object(s) were saved": the toast text is the product's message verbatim. It says global objects were saved as well; this worker did not inspect which global objects that refers to, and does not interpret it further.

Save count: **1** (one ordinary Save click; no retry; no alternate save path such as Regenerate or a keyboard shortcut).

## 4. Post-save verification (independent, read-only)

| Check | Post-save observed value | Pre-save value | Match | Evidence |
| --- | --- | --- | --- | --- |
| Designer clean | Save, Regenerate, Undo, Redo all disabled | Save enabled | changed as expected | `t3-02`; `t3-snapshot-01` |
| Scope | `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | same | yes | `t3-03` (status bar) |
| Form Name / Version / Form Type / Is Master | `FX_Items` / `User version for user anton.ramos@3mworks.com.ph` / `Normal` / `True` | same | yes | `t3-snapshot-01` lines 549–588; `t3-03` |
| **Initial Command** | **`Refresh`** | `Refresh` | yes | `t3-03` (Behavior > Initial Command `Refresh`) |
| Other Form properties (visible) | Script Language `Visual Basic`; Close Box `True`; Min/Max `True`; Advanced Filter `False`; Help Context ID `-1`; Splitter `Vertical`; Splitter Position `11`; Pane 0 Scroll Bars `Never` | same as T1 | yes (visible rows) | `t3-03` |
| Exactly one new Button | one `FX_RefreshButton` row, PushButton, Pane 1, Tab 0 | same | yes | `t3-snapshot-01` line 508 |
| Button Name | `FX_RefreshButton` | same | yes | `t3-snapshot-01` line 554 |
| Button Caption | literal `FX_Refresh` (not a resource) | same | yes | `t3-snapshot-01` line 566 |
| Button Type | `PushButton` | same | yes | `t3-snapshot-01` line 576 |
| Button Primary | `StdFormRefresh` | same | yes | `t3-snapshot-01` lines 840–843 |
| Button Binding | `None` / blank | same | yes | pre-save read; post-save header and Components row unchanged |
| `FormCollectionGrid` | Grid / objects / Pane 0 / Tab 0; Binding Type `Primary Collection Grid`, Binding `objects` (T2 read) | same | yes (Components row) | `t3-snapshot-01` line 312 |
| Four GridColumns | `FX_ItemGridCol` object.FX_Item 1; `FX_DescriptionGridCol` object.FX_Description 2; `FX_CostGridCol` object.FX_Cost 3; `FX_UMGridCol` object.FX_UM 4 (all Pane 0, container FormCollectionGrid) | same | yes | `t3-snapshot-01` lines 326–368 |
| Pane (01) controls (8) | `FX_ItemStatic` Static 5; `FX_ItemEdit` Edit object.FX_Item 6; `FX_DescriptionStatic` Static 7; `FX_DescriptionEdit` Edit object.FX_Description 8; `FX_CostStatic` Static 9; `FX_CostEdit` Edit object.FX_Cost 10; `FX_UMStatic` Static 11; `FX_UMCombobox` ComboBox object.FX_UM 12 (all Pane 1) | same | yes | `t3-snapshot-01` lines 396–494 |
| Component count | 13 original rows + 2 pane roots + 1 new Button | 13 + 2 + 1 | yes | `t3-snapshot-01` |
| Layout | Button at the same visual position (about x 400–514, y 320–354); existing controls visually unchanged | same | yes (visual) | `t3-03` |

Not re-read individually in T3: the Caption and Events values of the 13 original rows. No edit was made to any of them in T1, T2, or T3, and the Components-grid values above are unchanged. Stated as a limit, not as observed.

## 5. Errors, deviations, and recovery

- **No browser errors in T3.** No tab-not-found, no click timeout, no ref-not-found, no screenshot timeout.
- The Components row click on `FX_RefreshButton` and the Component tab click were view-only selections; they did not change any value.
- The Properties panel stayed on the Form tab after the row selection, so one Component-tab click was needed to read the Button. Recorded as a view-state step.
- The Save notification toast is a transient product message, not a prompt; it did not require any action.
- No recovery snapshot or corrected inspection was needed. The recovery allowance was not used in T3.

## 6. Counts (T3 browser calls, worker-reported)

| Type | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | first browser action |
| Tab select | 0 | Designer already current |
| Explicit `browser_snapshot` | 2 | `t3-snapshot-00-pre-save-fresh-designer.md`; `t3-snapshot-01-post-save-fresh-designer.md` (each action also returned its own tool-generated snapshot, not counted here) |
| Finds | 1 | Component tab lookup |
| Clicks | 4 | `FX_RefreshButton` Components row (selection); Component tab (view); **Save (1)**; Form tab (view) |
| Screenshots | 3 | `t3-01`, `t3-02`, `t3-03` (all viewed) |
| Typing / keypresses | 0 | |
| Property edits | 0 | |
| **Designer Save clicks** | **1** | |
| Designer close / reopen | 0 | |
| Runtime actions | 0 | |
| Diagnostics changes | 0 | |
| Log clears | 0 | |
| Button activations | 0 | |
| Browser evaluate / run-code | 0 | |
| Authentication actions | 0 | |
| Prompts or dialogs accepted | 0 | |

## 7. Evidence files (T3)

Worker-authored, under `evidence/EXP-054-R2/`:
- `T3-ordinary-save-and-post-save-verification-report.md` (this report)
- `t3-01-pre-save-FX_RefreshButton-properties-readback.png` — Button header `FX_RefreshButton (Button)`; Events > Primary `StdFormRefresh`; Data Source Binding Type `None`; Components row `FX_RefreshButton PushButton 1 0`. Does not show Name or Caption rows (scrolled above the visible area). The pre-save Save-enabled state is from `t3-snapshot-00` (Save button without `[disabled]`), not from this screenshot.
- `t3-02-immediate-after-single-Save-outcome.png` — Save toast "Form [FX_Items] and global object(s) were saved."; Save and Undo greyed. Does not show the server response itself.
- `t3-03-post-save-Form-tab-Initial-Command-Refresh-clean.png` — Form tab: Name `FX_Items`, Version, Form Type, Is Master, Initial Command `Refresh`, Splitter Vertical 11, Save/Undo greyed, User scope bar, Button rendered as `FX_Refresh`. Does not show Caption/Primary of the Button (Component tab not active in this frame).

Browser-generated (saved at worker request; classified as browser-generated, not worker findings):
- `t3-snapshot-00-pre-save-fresh-designer.md`
- `t3-snapshot-01-post-save-fresh-designer.md`

Tool-generated (gitignored `evidence/playwright/`): accessibility snapshots `page-2026-10-11T06-54-25-179Z.yml`, `06-54-35-463Z.yml`, `06-54-46-083Z.yml`, `06-55-01-829Z.yml`.

## 8. Acceptance status (T3 scope)

| AC | T3 status | Basis |
| --- | --- | --- |
| AC-3 (before Save) | **Re-confirmed** (gate §2) | Name, Caption, Type, Primary, Initial Command, components unchanged before the Save click |
| AC-4 | **Supported with limits** | Exactly one ordinary Save click; native outcome: toast "Form [FX_Items] and global object(s) were saved."; Designer clean with Save disabled; Button and preservation checks match pre-save values (§4). Limit: Caption and Events of the 13 original rows not individually re-read after Save (no edit made). |
| AC-5 to AC-12 | **Not tested in T3** (close/reopen, runtime, Diagnostics, log, activation, restoration, final audit) | — |

## 9. Unresolved

- Whether the Save persisted server-side beyond this open session: **not tested** (requires the later close and reopen).
- The meaning of the toast phrase "global object(s)": **unresolved**; reported verbatim.
- `C(<Static>)` caption semantics: **unresolved** (carried from T2).
- Tab `0` of the new Button: **not changed** per instruction; significance **unresolved**.

## 10. Next permitted step (requires the operator)

The Designer Form is open and clean. The next step, if authorized, is one ordinary close of the clean FX_Items Designer tab, then one recent-forms reopen with the AC-5 checks. No such action was performed in T3.
