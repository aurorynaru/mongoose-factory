# EXP-062-R2 — T7 operator-authorized FX_PictureStatic placement (stopped blocked after the authorized drop)

Run `R-20261011-233114-6TXk`, experiment EXP-062-R2, cycle 8, task **T7**.
Worker session `1a1726ce-7754-4c7b-81f9-602aedcce8ec`; task_message_id `617ac5c2-3d26-488f-8942-64aa27b3f91a`.
Date 2026-10-11 (operator authorization recorded as 2026-10-12 per the coordinator instruction). Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Prior reports: T4 (`T4-baseline-and-single-component-deletion.md`), T5 (`T5-caption-string-and-button.md`), T6 (`T6-picture-static-configuration.md`).

## 1. Outcome

- **Authorized placement attempt made once.** The Toolbox Static was dropped into the operator-approved free area (centre about x 700, y 348 in the T6 screen coordinates). The Designer **accepted** the drop: a new Static appeared, named by the Designer as `static1_USER` (Pane (01), Tab 0). Component count is now **17** (16 prior + the new Static; FX_VarTestEdit still absent).
- **Stopped blocked immediately after the drop, per the brief's stop rule.** The new Static's authoritative geometry is **Size `87.5; 19.3333333333333`, Location `13.7222222222222; 42.75`**. Standard Statics in this Form are `20; 1`. Its drawn outline runs past the right and bottom edges of the form canvas (`t7-04`, `t7-05`), so it is not "fully within the current Form canvas" and is not within the approved area (y about 330–365). The brief forbids resizing and any further mutation in this case.
- **Not done (stopped):** the new component was **not renamed** (still `static1_USER`), no binding set, No Colon not set, no FX_ImportPicture, no Primary change, no Save, no close, reopen, unload, or runtime action. No second drop.
- The new Static **remains in the open dirty session**. It was not deleted (deletion would be another mutation, which the brief does not authorize). Coordinator must decide: keep and re-place, delete (confirmation naming `static1_USER`), or accept the geometry.

## 2. Pre-drop gate (verified in this task)

| Check | Result | Evidence |
| --- | --- | --- |
| Tab list, Designer selected by index (list first) | Passed | `t7-snap-00` |
| Form identity FX_Items; ScopeType User; ScopeName anton.ramos@3mworks.com.ph | Passed (footer) | `t7-01` |
| Save enabled (dirty) | Passed | `t7-snap-00` (`button "Save"` not disabled); `t7-01` |
| No authentication challenge, no dialog | Passed | `alertdialog` find: none |
| 16 components before the drop; FX_VarTestEdit absent; FX_PictureStatic absent | Passed | `t7-snap-00` treeitems; count grep |
| FX_RefreshButton Caption `FX_sImport`, Binding Type None, Primary `FX_Test`, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`, Tab 0 | Passed (selection readback) | `t7-snap-00` readback; screenshot `t7-03` |
| FX_VarTest: Form - Temporary; Value `~LIT~()`; Persistent False; Global False | Carried from T5 (`t5-19`); not re-read in T7 | T5 §5 |
| FX_Test group: seq 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; seq 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`; both `false` | Passed | find readbacks; `t7-02` |
| Target free area inside the canvas (about x 600–800, y 330–365) | Passed (empty grid; canvas right/bottom edges at about x 810 and y 480) | `t7-03` |

## 3. The authorized placement attempt (one drop)

1. Toolbox `Static` at screen `(81, 788)` (highlighted in `t7-03`).
2. One mouse drag to the centre of the approved area `(700, 348)`. Action: `browser_mouse_drag_xy`.
3. Result (`t7-04`): a new Static `static1_USER` appeared in Pane (01), Tab 0, selected; Properties header `static1_USER (Static)`; Justification Right (Designer default).
4. Authoritative readbacks (`t7-snap-05`): Name `static1_USER`; Type Static; From Device Master True; Binding Type None; Binding blank; Justification Right; **Size `87.5; 19.3333333333333`; Location `13.7222222222222; 42.75`**; Tab Order 0.
5. Full inventory after expanding the tree (view only; `t7-snap-06`): 17 entries: Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_RefreshButton; FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; **static1_USER**. FX_VarTestEdit absent.

## 4. Why the stop rule applies

The brief: "If this new attempt … produces an ambiguous placement … stop blocked immediately without another attempt, Save, or other mutation." The placement is ambiguous against the approved bounds for these observed reasons:

- Size `87.5; 19.3` is far larger than a standard Static (`20; 1`). The drop did not give the component a standard size.
- Its Location `y 42.75` sits below the approved band; its drawn outline runs past the canvas's right and bottom edges (`t7-04`, `t7-05`), so it is not fully inside the canvas.
- The brief does not allow resizing or moving the component in T7 (no "other mutation" after an ambiguous placement).

I did not treat the drop as "successfully added". The component count rose to 17 as required, but the geometry does not meet the "fully within the canvas" condition. No rename, binding, or No Colon configuration was attempted on it.

## 5. Preservation checks (after the drop)

| Item | Result |
| --- | --- |
| Other 16 components (names and order) | Unchanged in the tree (`t7-snap-06`) |
| Existing component geometry | Not re-read per component in T7 (no edit was made to any existing component) |
| FX_RefreshButton Name / Caption / Primary / binding / geometry | Unchanged: `FX_sImport`, FX_Test, None, `14.25; 1.89`, `12.1666666666667; 5.25` (`t7-snap-00`; selection readback) |
| FX_sImport string value | Carried from T5 (`Import`, `t5-16`); not re-read in T7 |
| FX_VarTest | Carried from T5 (`t5-19`); not re-read after the drop |
| FX_Test two actions | Unchanged before the drop (`t7-02`); not re-read after the drop |
| FX_ImportPicture | Absent (not created) |

## 6. Action audit (cumulative, EXP-062-R2 through T7)

| Category | Count | Notes |
| --- | --- | --- |
| Web Client unloads | 1 | T2 only; not repeated |
| Designer unloads | 1 | T3 only; not repeated |
| Runtime FX_Items closes | 2 | T2 only |
| Designer FX_Items close / reopen (pre-mutation) | 1 / 1 | T3 only |
| **Designer Save** | **0** | Not invoked |
| Component deletions | 1 | FX_VarTestEdit (T4) |
| Form-level "Delete Form Definition" dialog | 1 opened, declined (No) | **T4 incident** (carried; Form intact) |
| Caption string created | 1 | `FX_sImport` (T5, Yes once to exact ID) |
| Caption string creation prompts declined | 1 | `FX_Refresh` (T5, No once) |
| Failed read-only text fill | 1 | **T5 incident** (refused, no change) |
| **Toolbox drags, T6 (historical)** | 1 | **T6 rejected drop** outside the form (no effect; retained in audit) |
| **Toolbox drags, T7 (authorized)** | 1 | **Accepted**; new Static `static1_USER` added; geometry ambiguous; stopped |
| Components added | 1 | `static1_USER` (T7; not renamed or configured) |
| Renames, bindings, No Colon, Primary, FX_ImportPicture, Caption change | 0 | None in T7 |
| Row / tab / group selections (view or selection) | about 6 | FX_RefreshButton row; Event Handlers; Components tab; `static1_USER` row (via drop) |
| Expand (Components grid, view) | 1 | Full inventory expand |
| Mouse drags total in T7 | 1 | The authorized attempt |
| Escape presses | 0 | |
| Preference change | 0 | |
| Business record, runtime, or IDO checkout action | 0 | |
| Navigation, reload, reauthentication, restart | 0 | |
| Browser JavaScript, console, or network inspection | 0 | |
| Tab list / select | 1 / 1 | Designer |
| Screenshots | 5 | `t7-01` … `t7-05` |
| Snapshot files saved at worker request | 3 | `t7-snap-00`, `t7-snap-05`, `t7-snap-06` |

## 7. Evidence written (T7)

| File | Visible | Does not prove |
| --- | --- | --- |
| `t7-01-start-designer-identity-scope-save-enabled.png` | FX_Items, User footer, Save enabled, 16 components, FX_ItemStatic selected in Properties | Persistence |
| `t7-02-pre-change-event-handlers-fx_test-two-actions.png` | Event Handlers tab showing FX_Test group with both original actions (Prompt seq 0, Set Values seq 1) | — |
| `t7-03-pre-placement-target-area-free-inside-canvas.png` | Free grid area right of FX_RefreshButton, below the input column; canvas edges visible; Toolbox Static at left | That the drop will be accepted |
| `t7-04-after-single-authorized-static-drop-attempt.png` | New Static `static1_USER` (Static) selected, outline extending to canvas edges; Components tree shows new row | Exact geometry (see `t7-snap-05` readback) |
| `t7-05-stopped-state-new-static-geometry-clipped-at-canvas-edge.png` | Stopped state: new Static outline clipped at canvas right and bottom; Save enabled; Components list expanded | Whether clipping affects saved geometry |

Snapshot files written at worker request under `evidence/EXP-062-R2/`: `t7-snap-00-start-fresh-designer.yml`, `t7-snap-05-after-drop-new-static-properties.yml`, `t7-snap-06-full-inventory-after-expand.yml`.

Tool-written, not requested (under `evidence/playwright/`): snapshot files `page-2026-10-11T16-16…` to `…16-17…` and `console-2026-10-11T16-16-16-064Z.log`. Gitignore status not verified; operator git review is authoritative.

## 8. Worker-written file inventory (T7)

- `evidence/EXP-062-R2/T7-picture-static-authorized-placement.md` (this file; created)
- `experiments/EXP-062-R2-hello-world-part-4-section-4-picture-import-ui.md` (updated: operator authorization recorded; status; T7 section; next step)
- PNG screenshots `evidence/EXP-062-R2/t7-01` … `t7-05` (created at worker request)
- Snapshot files listed in §7

No other repository file was written.

## 9. Current state (end of T7)

- Designer `FX_Items`, User scope footer, **Save enabled** (dirty), no dialog open.
- Components: 17 entries. FX_VarTestEdit absent. **`static1_USER` present** (Static, Pane 1, Tab 0, Size `87.5; 19.3333333333333`, Location `13.7222222222222; 42.75`, Binding None, not renamed, not configured). Properties panel shows `static1_USER (Static)`.
- FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test`, geometry unchanged.
- Three unsaved in-session changes now: FX_VarTestEdit deletion (T4), Caption assignment and string creation (T5), and the new Static `static1_USER` (T7).
- Web Client untouched (IDOs panel).

## 10. Knowledge state (T7)

| Finding | State |
| --- | --- |
| Toolbox Static drop into the operator-approved free area (about x 700, y 348) is accepted by the Designer | observed (one authorized attempt) |
| Accepted drop creates a Static named `static1_USER` with Size `87.5; 19.3333333333333` and Location `13.7222222222222; 42.75` (not the standard `20; 1`) | observed |
| The new Static's outline extends past the canvas right and bottom edges | observed (screenshot; geometry readback) |
| Component count after the drop is 17 (16 + 1) | observed |
| FX_PictureStatic naming, binding, No Colon True, FX_ImportPicture, Primary, Save | **not done** (stopped) |
| Raw FX_sImport display | Unchanged in T7; deferred to post-Save/reopen per instruction |
| Persistence of any change | **not claimed**; no Save |
| Replay or procedure status | not claimed; nothing replay_verified |

## 11. Open questions and blockers

1. **Blocker — geometry.** The new Static `static1_USER` is oversized (`87.5; 19.3`) and clipped at the canvas edges. Coordinator decision needed: (a) authorize a resize or move of this component to the approved area (a further mutation), (b) authorize deletion of `static1_USER` (confirmation naming it, via the Components-grid trash button) and a fresh attempt, or (c) accept the geometry as is and stop AC-6 as a documented deviation.
2. **Save decision.** Three unsaved changes remain (see §9).
3. **Prior incidents carried:** T4 declined Form-level delete; T5 declined FX_Refresh string prompt; T5 refused read-only fill; T6 rejected out-of-form drop (historical).
4. **Unverified:** whether the new Static's clipped geometry is saved as reported; whether the Designer renders `FX_sImport` as `Import` after Save or reopen.

Next permitted action: none in T7. Stop for coordinator review.
