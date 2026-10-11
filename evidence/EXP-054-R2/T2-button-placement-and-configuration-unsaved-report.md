# EXP-054-R2 — T2 binding baseline, one PushButton placement, Name/Caption/Primary configuration (UNSAVED)

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 1, task T2.
Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `7f20fed4-1229-4085-a227-14e61d0e568a`.
Date 2026-10-11. Mode: LEARNING MODE. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items` (User version). Button `FX_RefreshButton`.

**Result: STOPPED at the verified unsaved configuration.** One PushButton exists in the Designer's dirty session with Name `FX_RefreshButton`, literal Caption `FX_Refresh`, and Primary `StdFormRefresh`. **Designer Save was NOT clicked.** The Form was not closed or reopened. No runtime action, no Diagnostics change, no log clear, no Button activation.

Classification: **observed only** (single session, rendered UI and accessibility). Nothing is persisted; the unsaved state exists only in the open Designer session.

---

## 1. Tab state and preflight (first browser actions of T2)

- `browser_tabs list` was the first browser action (tab 0 = Designer `MGForm=FX_Items`, current; tab 1 = Web Client, `favoriteContext=FX_Items`).
- A fresh untargeted snapshot of tab 0 (`evidence/EXP-054-R2/t2-snapshot-00-fresh-start-designer.md`) showed: FX_Items tab selected; Save, Regenerate, Undo, Redo disabled (clean); status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; 13 component rows and two pane roots; no `RefreshButton`.
- No authentication challenge, portal banner, browser dialog, or unsaved prompt was present at the start of T2.
- Tab 1 was not selected in T2.

## 2. Binding and remaining component baseline (resolving the T1 carry-forwards)

Read through Details > Components and the Properties Component tab (view only).

| Item | Observed value (verbatim, native) | Evidence |
| --- | --- | --- |
| `FormCollectionGrid` > Data Source > **Binding Type** | `Primary Collection Grid` | snapshot `evidence/playwright/page-2026-10-11T06-49-01-937Z.yml` (lines ~766–771 region; Binding Type row) |
| `FormCollectionGrid` > Data Source > **Binding** | `objects` | same snapshot, Binding row |
| `FormCollectionGrid` Components row | Name `FormCollectionGrid`, Type `Grid`, Data Source `objects`, Pane `0`, Container blank, Tab `0` | snapshot `t2-snapshot-00`; `t2-16` |

Reading: the T1 blank Properties Data Source value was a collapsed child group, not a missing binding. This resolves the T1 carry-forward; it is an observed value, not an explanation of why the grid column reads `objects`.

| Edit / ComboBox Caption (Properties > Design > Caption) | Observed value | Evidence |
| --- | --- | --- |
| `FX_ItemEdit` (Edit) | `C(FX_ItemStatic)` | `t2-01-FX_ItemEdit-caption-C-expression-readonly.png` (Caption cell reads `C(FX_ItemStatic)`; Type `Edit`) |
| `FX_DescriptionEdit`, `FX_CostEdit` (Edit), `FX_UMCombobox` (ComboBox) | `C(FX_DescriptionStatic)`, `C(FX_CostStatic)`, `C(FX_UMStatic)` (T1 accessibility read) | T1 report B2; T2 snapshot reads |

Reading: the Edit and ComboBox Caption values name their paired Static. Their exact semantics (caption reference to the named component) are **not verified** by a native help source; I did not open the Caption dialog. Recorded as observed values only. This is the T2 carry-forward; it stays **unresolved** as to meaning.

Original component baseline (for the preservation comparison, from T1 and re-read in §5): 13 component rows, two pane roots; bindings `objects` (grid), `object.FX_Item`, `object.FX_Description`, `object.FX_Cost`, `object.FX_UM` (GridColumns and Edit/ComboBox); the four GridColumns with Captions `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`; Statics with Captions `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`; Events blank on every row read.

## 3. Placement (exactly one PushButton)

Native sequence (in order):
1. Toolbox row `Button` (accessibility `treeitem "Button"`) clicked once. Arm state confirmed visually (`t2-02-toolbox-Button-armed-before-canvas-click.png`: Button row highlighted; canvas free area empty; Save greyed).
2. One canvas click at viewport point (400, 320) with `browser_mouse_click_xy`. This is inside the Form border and below Unit of Measure (free area x 360–800, y 290–470).
3. Result (`t2-03-after-single-canvas-click-Button-placed-generated-name.png`): a blue PushButton appears at about (400–514, 320–354). Components grid adds `button1_USER`, Type `PushButton`, Pane `1`, Tab `0`. Properties header `button1_USER (Button)`; Type `PushButton`. Save enabled (dirty). No existing component moved or resized (the 13 rows and their positions visible in `t2-03` match `t1-05`).

Placement rule kept: placement was not confirmed by a second click; no second Button exists.

Observation (unresolved interpretation): the new Button's Tab value `0` equals FormCollectionGrid's Tab value `0`; the original Tab values 1–12 were not changed. I did not change tab order (out of scope).

## 4. Configuration of the new Button (through Details > Components and the Properties panel)

| Step | Native action | Observed result | Evidence |
| --- | --- | --- | --- |
| Name | Double-click on the Name value of `button1_USER` (Properties Name row); inline text editor opened (textbox active); typed `FX_RefreshButton` via the accessible textbox; Enter | Name `FX_RefreshButton`; Components row `FX_RefreshButton` / PushButton / Pane 1 / Tab 0; Properties Name `FX_RefreshButton` (selector header still `button1_USER`, the documented display lag) | `t2-04-after-Name-commit-FX_RefreshButton.png` |
| Caption (attempt 1, **error**) | Double-click on the Caption value via the accessibility ref for its text area; the tool resolved the click to `.mg-arrow-cell-icon` (the dropdown arrow). **The string-resource list opened** (`ApplyFullTextIndexScriptQuestion`, `CatalogNotExistNotice`, …). **No item was selected.** One Escape closed the list. | Caption empty after Escape (`t2-06-after-Escape-resource-list-closed-caption-state.png`) | `t2-05-caption-double-click-check-after-arrow-target.png`, `t2-06` |
| Caption (attempt 2) | Coordinate double-click on the left text portion of the Caption value at viewport (1745, 254), which is left of the arrow at about x 1841 (EXP-036 method). An editable white combobox opened with focus and no list (`t2-07`). Typed literal `FX_Refresh` into the active combobox (accessible `combobox [active]`) and verified before commit (`t2-08`). Enter committed. | Properties Caption `FX_Refresh`; canvas Button face shows `FX_Refresh`; Components grid unchanged (`t2-09`) | `t2-07`, `t2-08`, `t2-09` |
| Primary Event | Scrolled the Properties grid (view) so the Events group was visible (`t2-10`). Single click on the Primary dropdown arrow (1841, 577) opened the built-in event list (`t2-11`; list entries `StdAppLaunchInbox`, `StdAppLaunchTasks`, `StdCurCompAction`, …). Located the exact option `StdFormRefresh` via accessibility (it sits among `StdFormRefreshCompleted`, `StdFormRefreshCurrent`, `StdFormRefreshCurrentCompleted`, which were NOT chosen). Clicked that exact option once. | Primary field shows `StdFormRefresh` (`t2-12`) | `t2-11`, `t2-12` |
| Commit check for Primary | Re-read the stored value without changing anything: selected neighbouring Components row `FX_UMCombobox` (view), then re-selected `FX_RefreshButton`. The selector header refreshed to `FX_RefreshButton (Button)`; Name, Caption, Type read back correctly; after a scroll, Events > Primary read `StdFormRefresh`. | Read-back: Name `FX_RefreshButton`; Caption `FX_Refresh`; Type `PushButton`; Primary `StdFormRefresh`; Data Source Binding Type `None` (unbound, default) | `t2-13-reselected-FX_RefreshButton-committed-properties-readback.png`, `t2-14-reselected-FX_RefreshButton-Events-Primary-readback.png` |

Other Button properties were not edited (Data Change, Lose Focus, Gain Focus, Drag/Drop remain blank or `0 event(s)`; Data Source Binding Type `None`; Binding blank).

## 5. Preservation comparison before Save (all checks against T1 values)

| Check | T1 value | T2 value after configuration | Match |
| --- | --- | --- | --- |
| Component count | 13 rows + 2 roots | 14 rows (13 + FX_RefreshButton) + 2 roots | yes (one new row) |
| `FormCollectionGrid` Type / Data Source / Pane / Tab | Grid / objects / 0 / 0 | Grid / objects / 0 / 0 | yes |
| `FormCollectionGrid` Binding Type / Binding | (unresolved in T1) | Primary Collection Grid / objects | resolved, baseline |
| GridColumns (4): Name / Type / Data Source / Pane / Container / Tab | per T1 | per T1 (`FX_ItemGridCol` object.FX_Item 0 FormCollectionGrid 1; `FX_DescriptionGridCol` object.FX_Description 0 … 2; `FX_CostGridCol` object.FX_Cost 0 … 3; `FX_UMGridCol` object.FX_UM 0 … 4) | yes |
| Pane (01) rows (8): Name / Type / Data Source / Pane / Tab | per T1 (`FX_ItemStatic` Static 1 5 … `FX_UMCombobox` ComboBox object.FX_UM 1 12) | identical (snapshot `t2-snapshot-preservation-check-before-save-NOT-SAVED.md` rows e3989–e4164; `t2-15`) | yes |
| Captions of 4 GridColumns and 4 Statics | `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM` | not re-read individually in §5 (the 8 values were read in T1; no edit was made to any of those rows) | not re-read; no edit recorded |
| Edit / ComboBox Captions (`C(…)`) | `C(FX_ItemStatic)` etc. | `FX_ItemEdit` re-read as `C(FX_ItemStatic)` (`t2-01`) | yes (one re-read) |
| Form Name / Version / Form Type / Is Master | FX_Items / User version for anton.ramos… / Normal / True | identical (`t2-17`; accessibility `evidence/playwright/page-2026-10-11T06-51-54-404Z.yml`: Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, Form Type `Normal`, Is Master `True`) | yes |
| **Initial Command** | **Refresh** | **Refresh** (`t2-17-final-unsaved-state-Form-tab-Initial-Command-Refresh-NOT-SAVED.png`) | yes |
| Form Script Language / Close Box / Min-Max / Filter Form / Advanced Filter / Help Context ID / Splitter / Splitter Position / Pane 0 Scroll Bars | per T1 | visible in `t2-17` (Visual Basic, True, True, blank, False, -1, Vertical, 11, Never) | yes (visible rows) |
| Save button | disabled (clean) at start | enabled (dirty), **not clicked** | expected |

Layout reading: the new Button occupies approximately x 400–514, y 320–354 (CSS px), clear of all existing components (Unit of Measure bottom edge about y 280).

Not verified in T2: the Caption text of the Static and GridColumn rows (not re-read individually), Events of the other rows beyond those read in T1, and the Form's Splitter Position beyond the visible frame. None of these was edited.

## 6. Errors, deviations, and recovery (disclosed)

1. **Caption mis-target (error E-T2-1).** My attempt to double-click the Caption text area through its accessibility ref was executed by the tool at the dropdown-arrow element (`.mg-arrow-cell-icon`). Consequence: the string-resource list opened. Recovery: one Escape (closes the list without selection; no resource chosen); verified empty caption by screenshot (`t2-06`); corrected by a coordinate double-click on the left text portion (`t2-07`). No string resource was assigned; the final Caption is the typed literal `FX_Refresh`. Counted as a targeting error, not a ref-not-found failure. One fresh snapshot was taken as the caption-editor check (`t2-snapshot-caption-editor-check.md`).
2. **Events group not expanded by a plain row click** (also seen in T1): handled by scrolling the Properties grid (view). The earlier expand-all view control was not needed here because the Events group was visible after scrolling.
3. **Properties-grid scroll collapsed the Components `Pane (00)` tree node** (view state). Re-expanded by two view clicks (`Pane (00)` then `FormCollectionGrid`). Values unchanged; visible in `t2-16`.
4. **Pointer position for wheel scroll**: the first wheel scroll after the Primary commit check did not move the grid because the pointer was not over it; corrected by a mouse move onto the grid, then the wheel (no state change).
5. No browser errors: no tab-not-found, no click timeout, no ref-not-found, no screenshot timeout.

## 7. Counts (T2 browser calls, worker-reported)

| Type | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | first browser action |
| Tab select | 0 | Designer already current; no select needed |
| Explicit `browser_snapshot` calls | 3 | `t2-snapshot-00` (fresh start); `t2-snapshot-caption-editor-check.md`; `t2-snapshot-preservation-check-before-save-NOT-SAVED.md`. Every action also returned its own tool-generated snapshot file (in `evidence/playwright/`), not counted here. |
| Finds | 1 | `StdFormRefresh` option lookup (4 matches; the exact option `e19700` was used) |
| Ref-based clicks | 8 | Components rows: FormCollectionGrid, FX_ItemEdit, FX_UMCombobox, FX_RefreshButton (re-select); Toolbox `Button` row; Name value double-click; Caption double-click (mis-targeted to the arrow); Primary option `StdFormRefresh` |
| Coordinate clicks | 6 | canvas placement (400, 320); Caption left-text double-click (1745, 254); Primary dropdown arrow (1841, 577); Pane (00) expander (273, 740); FormCollectionGrid expander (293, 763); Properties Form tab (1600, 893) |
| Mouse moves | 2 | onto the Properties grid (1740, 600) and onto the Components grid (700, 790) before wheel scrolls |
| Wheel scrolls | 4 | +600 Properties (effective; Events visible); +600 Properties after re-select (no effect, pointer not over grid); +600 Properties after move (effective); −800 Components grid (effective; collapsed Pane (00)) |
| Typing | 2 | Name `FX_RefreshButton` (inline editor, `textbox` e3933); Caption `FX_Refresh` (combobox e4218) |
| Keypresses | 3 | Enter (Name commit); Escape (close resource list); Enter (Caption commit) |
| Screenshots | 18 calls, 17 files | `t2-01` … `t2-17`; `t2-14` was captured twice under the same filename, and the second capture (after the scroll fix) overwrote the first (the first showed the collapsed scroll state and is not retained). All saved files viewed. |
| Designer Saves | **0** | not clicked |
| Form close / reopen | 0 | |
| Runtime actions | 0 | |
| Diagnostics changes | 0 | |
| Log clears | 0 | |
| Button activations | 0 | |
| Browser evaluate / run-code | 0 | |
| Authentication actions | 0 | |

## 8. Evidence files (T2)

Worker-authored, under `evidence/EXP-054-R2/`:
- `T2-button-placement-and-configuration-unsaved-report.md` (this report)
- `t2-01-FX_ItemEdit-caption-C-expression-readonly.png` — Edit Caption `C(FX_ItemStatic)`, Type `Edit`, binding `object.FX_Item`. Does not show the Caption dialog meaning.
- `t2-02-toolbox-Button-armed-before-canvas-click.png` — Button row highlighted; canvas free area empty; Save greyed.
- `t2-03-after-single-canvas-click-Button-placed-generated-name.png` — new PushButton placed (`button1_USER`), Save enabled, existing components unmoved.
- `t2-04-after-Name-commit-FX_RefreshButton.png` — Name `FX_RefreshButton` in Properties and Components row.
- `t2-05-caption-double-click-check-after-arrow-target.png` — **the mis-targeted state**: string-resource list open. No resource selected. Shows the error, not a result.
- `t2-06-after-Escape-resource-list-closed-caption-state.png` — list closed; Caption empty.
- `t2-07-caption-left-text-double-click-state.png` — editable Caption combobox open, no list.
- `t2-08-caption-typed-FX_Refresh-before-Enter.png` — `FX_Refresh` typed, not yet committed.
- `t2-09-caption-FX_Refresh-committed-after-Enter.png` — committed; canvas face `FX_Refresh`.
- `t2-10-events-group-scrolled-into-view-before-primary-edit.png` — Events group visible; Primary empty; Data Source Binding Type `None`.
- `t2-11-primary-dropdown-opened-state.png` — built-in event list open (not yet chosen).
- `t2-12-primary-StdFormRefresh-selected-before-commit-check.png` — Primary shows `StdFormRefresh`.
- `t2-13-reselected-FX_RefreshButton-committed-properties-readback.png` — after re-select: Name, Caption, Type read back.
- `t2-14-reselected-FX_RefreshButton-Events-Primary-readback.png` — after re-select: Primary `StdFormRefresh`.
- `t2-15-preservation-components-grid-top-after-scroll-up.png` — Pane (01) rows; Pane (00) collapsed by scroll (see §6.3).
- `t2-16-preservation-components-grid-Pane00-after-reexpand.png` — Pane (00) and FormCollectionGrid rows visible after re-expansion.
- `t2-17-final-unsaved-state-Form-tab-Initial-Command-Refresh-NOT-SAVED.png` — Form tab: Name, Version, Form Type, Is Master, Initial Command `Refresh`, Splitter Vertical 11, Save icon enabled (dirty).

Browser-generated (saved at worker request by the browser tool; classified as browser-generated, not worker findings):
- `t2-snapshot-00-fresh-start-designer.md`
- `t2-snapshot-caption-editor-check.md`
- `t2-snapshot-preservation-check-before-save-NOT-SAVED.md`

Tool-generated (gitignored `evidence/playwright/`): accessibility snapshots `page-2026-10-11T06-49-01-937Z.yml` through `06-51-54-404Z.yml` (about 17 files), and one console log (`console-2026-10-11T06-41-51-952Z.log` from T1).

## 9. Acceptance status (T2 scope)

| AC | T2 status | Basis |
| --- | --- | --- |
| AC-1 | Not re-proved in T2 (T1 proof stands) | §1 fresh state: clean, User scope, Initial Command re-read at §5 |
| AC-2 | **Strengthened** | §2 resolves FormCollectionGrid binding and documents C(…) values; §3 confirms absence before placement |
| AC-3 | **Supported with limits** (before Save) | §4 Name / Caption / Primary committed and read back after re-select; one PushButton; §5 preservation. Limits: Caption error and recovery (§6.1); Caption and Static text not re-read individually. |
| AC-4 to AC-12 | **Not tested** (out of T2 scope: Save, close/reopen, runtime, Diagnostics, log, activation, restoration) | — |

## 10. Next permitted step (requires the operator)

The Designer is dirty with the verified unsaved configuration. The next step, if authorized, is the single ordinary Designer Save (AC-4), followed by the post-Save preservation check. Per the brief, no Save, close, reopen, runtime, Diagnostics, log, or Button activation was performed in T2.

Open question for the coordinator: the Designer session remains dirty (unsaved) at the end of T2 by design. Its state is recoverable only from this open session; if the session is lost, the Button must be recreated (no persistence exists yet).
