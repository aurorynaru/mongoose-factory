# EXP-067-R2 — T3 report: Designer close, one Designer Unload All Global Form Objects, controlled FX_Items reopen

Run `R-20261013-011002-lSgL`, cycle 2, task T3. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `c7265483-a12a-4ad7-a786-39776b7dc68b`. Date 2026-10-13. Editing scope User.

**Outcome: the clean FX_Items Designer Form was closed once (no prompt); the Designer `Unload All Global Form Objects` was invoked exactly once with no Form open (no visible response); FX_Items was reopened once through the Designer toolbar Open button and Select Form. Identity, User scope, clean state and the 17-component baseline were re-verified, and the target area is free. No binding picker was opened, no component was dropped or edited, and no Save was invoked. Web Client not operated on.** The binding gate (FX_UMsDescription in the picker) is **not yet performed** (next task).

## 1. Preconditions (fresh, before any close)

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, current); tab 1 = Web Client (`favoriteContext=UserPreferences`).
- Tab 0 selected (after the list). Fresh untargeted snapshot: Designer tab heading `FX_Items` (tab `closable FX_Items`); Name `FX_Items`; Version `User version for user …`; Form Type Normal; Is Master True; Size `69; 21`; Unit `Char`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar **Save disabled**, **Regenerate Form disabled**, **Undo disabled**, **Redo disabled**. No dialog. Not dirty.
- Components grid (tree already expanded at task start): 17 rows; same as T1 and T2.

## 2. Designer close (count 1)

- Clicked the native Form-tab close control (`closable FX_Items`) once. **No unsaved-changes prompt** appeared (none in the snapshot or screenshot).
- Post-close: tab list empty (no Form tab; `tablist` has no children); toolbar Save and Undo disabled; Properties empty; canvas empty (`t3-01`).
- Evidence: `t3-01-designer-fx_items-closed-no-prompt.png` (viewed: empty canvas, empty Properties, no dialog, footer User scope).

## 3. Unload menu label (re-observed with the Form closed)

- Path: Form (menu) → Definition (submenu, hover). The Form menu with no Form open lists `Definition` and `Sign Out` (and recent forms).
- Definition submenu, observed: `Design`, `Revert Form Definition`, `Regenerate Form` (disabled), `Regenerate Form from Cache` (disabled), `Site Developer Impersonation`, **`Unload All Global Form Objects`**, `New`, `Copy`, `Delete`.
- Label used: **`Unload All Global Form Objects`**. The `Delete` item in this submenu was **not** clicked. Evidence: `t3-02-designer-definition-submenu-unload-label-form-closed.png` (viewed; label and disabled Regenerate items visible; no Form open).

## 4. Designer unload (count 1; exactly one invocation)

- One click on `Unload All Global Form Objects` (menu item e1294). **Not retried.** No other unload, cache, FormSync or regeneration action.
- **Visible response (verbatim): none.** The menu closed. No dialog, alert, message or confirmation appeared. The post-invocation snapshot (find for the label) returned no match, consistent with the menu closing.
- Post-invocation state: Designer with no Form open; canvas empty; Save and Undo disabled. Evidence: `t3-03-designer-after-unload-invoked-visible-response.png` (viewed; no dialog; no Form tab; Save/Undo greyed).
- Limitation: silent completion; the server-side unload is not observable here.

## 5. Reopen FX_Items (count 1, via toolbar Open and Select Form)

- Designer toolbar first button (folder icon, accessible name `Design`; `mgtoolbarbutton-1084`) was clicked once. The hover beforehand showed no tooltip. The result was a **`Select Form`** dialog, so the control behaves as the Open button. Label discrepancy noted (§8).
- Select Form dialog: one row, Caption `FX_Items`, Name `FX_Items`; filter `FX_Items`; Case Sensitive and Starts With unchecked. The row was clicked once and **OK** clicked once (dialog closed).
- The dialog does not show Scope or Version, so scope was confirmed afterwards from the reopened Form's footer and Version (below).

## 6. Post-reopen verification (fresh snapshots and accessibility readbacks)

| Check | Result (observed) |
| --- | --- |
| Identity | Tab heading `FX_Items`; Name `FX_Items`; Version `User version for user …`; Form Type `Normal`; Is Master `True`; URL `MGForm=FX_Items` |
| User scope | Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (screenshot; the accessibility snapshot shows the name as a secret placeholder) |
| Clean | Toolbar **Save disabled**; Regenerate Form disabled; **Undo disabled**; Redo disabled; no dialog |
| Form Size / Unit | `69; 21` / `Char` (unchanged) |
| Component list (Components grid, expanded) | **17 rows**: Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_PictureStatic; FX_RefreshButton; FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox (grep of the saved accessibility file for row lines) |
| `FX_UMsDescriptionStatic` / `FX_UMsDescriptionEdit` | **Absent** (no matching row in the component list) |
| FX_UMCombobox | Location `7.75; 23.75`; Size `37.25; 2.15` (unchanged) |
| FX_PictureStatic | Location `10.5; 21.5`; Size `20; 9` (unchanged) |
| FX_RefreshButton | Location `12.1666666666667; 5.25`; Size `14.25; 1.89`; Caption `FX_sImport` (unchanged) |
| Target area | Free (no component in rows 10.5–14.39 columns 42.5–54.5 other than the absent new components); inside the declared Form (bottom 14.39 < 21; right 54.5 < 69). **Unchanged from T1.** |

Evidence: `t3-04-designer-reopened-fx_items-identity-user-scope-baseline.png` (viewed: FX_Items heading; Design and Components grid with FX_RefreshButton selected; Properties showing FX_RefreshButton with Caption `FX_sImport` and Theme Class `FX_BlueButton`; footer User scope with anton.ramos@3mworks.com.ph; Save and Undo greyed; canvas with the Import button and picture region).

## 7. Counts

**T3 explicit browser calls: 41.** Breakdown:

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 1 |
| Snapshots | 4 (3 untargeted; 1 targeted to the Select Form dialog) |
| Finds | 17 |
| Clicks | 12 (Form-tab close; Form menu; Unload item; Open toolbar button; Select Form row; OK; Details Expand Panel; Components tab; Components Expand; FX_UMCombobox row; FX_PictureStatic row; FX_RefreshButton row) |
| Hovers | 2 (Definition submenu; toolbar Open button) |
| Screenshots | 4 (`t3-01` to `t3-04`) |
| Typed entries, key presses, waits, wheel | 0 |

**Cumulative T1 + T2 + T3 explicit browser calls: 109** (T1 53 + T2 15 + T3 41). Cumulative: tab lists 4; tab selects 5; snapshots 11; finds 43; clicks 30; hovers 3; screenshots 13.

| Operation (cumulative T1 – T3) | Count |
| --- | --- |
| Preference reads | 1 (T1; checked; unchanged; not re-read in T2 or T3) |
| Preference changes | 0 |
| **Web Client `Unload All Global Form Objects`** | **1** (T2; no visible response) |
| **Designer `Unload All Global Form Objects`** | **1** (T3; no visible response; Form closed) |
| Designer close (pre-change) | 1 (T3; clean; no prompt) |
| Designer reopen (pre-change) | 1 (T3; via toolbar Open and Select Form) |
| Designer Form open from recent-forms (T1 baseline) | 1 |
| Designer Save | 0 |
| Designer Save after the T3 reopen | 0 (no Save performed) |
| Toolbox drops | 0 |
| Component add / delete / rename / property change | 0 / 0 / 0 / 0 |
| Runtime Form close / reopen | 0 / 0 |
| Record edits / runtime Save | 0 / 0 |
| Check-in / undo checkout | 0 / 0 |
| Browser JavaScript, console, network inspection | 0 |
| Direct URL navigation / refresh / restart / session re-login | 0 / 0 / 0 / 0 |
| Dialogs answered | 2 in T3 (Select Form row + OK, which is the reopen route); 1 in T1 (Designer scope OK) |

## 8. Deviations and observations

1. **Toolbar control label.** The first Designer toolbar button (folder icon) has the accessible name `Design` in the snapshot (`button "Design"` inside the button). Clicking it produced the Select Form dialog. Its identity as the Open button is inferred from the icon and the result, not from a tooltip (the hover showed none).
2. **Designer Form menu with no Form open** lists `Definition` and `Sign Out` plus the recent forms; it has no `Open` item.
3. **Definition submenu** (Form closed) also lists `Delete`, `Revert Form Definition` and `New`. None was clicked. The top-toolbar trash icon (`Delete Form Definition`) was not clicked.
4. **Select Form dialog** shows Caption and Name only; scope and version were confirmed from the reopened Form instead.
5. The accessibility readback of the reopened Form masks ScopeName with the secret placeholder; the screenshot shows the actual footer text.

## 9. Worker-written file inventory (T3)

- `evidence/EXP-067-R2/T3-designer-unload-report.md` (created; this file).
- `evidence/EXP-067-R2/t3-01-designer-fx_items-closed-no-prompt.png` (created).
- `evidence/EXP-067-R2/t3-02-designer-definition-submenu-unload-label-form-closed.png` (created).
- `evidence/EXP-067-R2/t3-03-designer-after-unload-invoked-visible-response.png` (created).
- `evidence/EXP-067-R2/t3-04-designer-reopened-fx_items-identity-user-scope-baseline.png` (created).
- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (updated: status, §15 T3, inventory, knowledge state, next step).
- Cumulative from T1 and T2: `evidence/EXP-067-R2/T1-preflight-report.md`; `T2-webclient-unload-report.md`; `t1-01` … `t1-06`; `t2-01` … `t2-03`.
- Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files from this task (timestamps 2026-10-12T17:20–17:22 UTC), including `page-2026-10-12T17-20-09-609Z.yml` through `page-2026-10-12T17-22-18-157Z.yml`, and console logs. Not read in full; the component rows were read from `page-2026-10-12T17-21-37-302Z.yml` by grep. The harness and operator git review are authoritative.

## 10. Final state

- **Designer:** tab 0, `FX_Items` open, **User scope** (ScopeName anton.ramos@3mworks.com.ph), **clean** (Save and Undo disabled), baseline 17 components unchanged, the two new components absent, Details panel expanded on the Components tab, FX_RefreshButton selected in the grid (view-only). **No dialog open. No prompt.** The Form has not been changed since reopen. The Designer unload is **done** (count 1); it must **not** be repeated.
- **Web Client:** tab 1, Explorer, no runtime Form, no dialog. Not operated on in T3. Preference unchanged (T1 reading).
- **Next step (not authorized in T3):** the binding gate. Open the binding picker of a new Edit through the supported Designer route and confirm `FX_UMsDescription` is offered. If it is missing or ambiguous, stop blocked without committing anything and without a second unload. Then the Static, Edit, one Save, the close/reopen and the runtime check.
