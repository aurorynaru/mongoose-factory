# EXP-054-R2 — T4 clean Designer close, recent-forms reopen, and same-session recovery verification

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 3, task T4 (bounded instruction: Designer close/reopen verification only).
Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `848bb786-b46d-4ed3-822e-62952710fd94`.
Date 2026-10-11. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items` (User version). Button `FX_RefreshButton`.

**Result: Designer close (1) and recent-forms reopen (1) completed. The reopened Form is FX_Items, User scope, Save disabled, Initial Command `Refresh`, with exactly one `FX_RefreshButton` (PushButton, Caption `FX_Refresh`, Primary `StdFormRefresh`) and the original 13 component rows plus two pane roots unchanged against T1/T2/T3. No save, runtime, Diagnostics, log, or Button activation was performed. One stray click on a stale ref (the Infor logo, §5) was disclosed and had no visible effect.**

Classification: **observed only** (same browser session; rendered UI and accessibility). Not a cross-session persistence claim.

---

## 1. Tab state and pre-close gate

- `browser_tabs list` was the first browser action (tab 0 = Designer `MGForm=FX_Items`, current; tab 1 = Web Client). No tab select was needed; tab 1 was not touched.
- Fresh snapshot `t4-snapshot-00-pre-close-fresh-designer.md`:
  - Form tab `FX_Items` selected, with close control `button "closable FX_Items"` (ref `e247`).
  - Save `[disabled]`; Undo `[disabled]`. Clean.
  - Initial Command `Refresh`; Version `User version for user anton.ramos@3mworks.com.ph`; Name `FX_Items`.
  - One `FX_RefreshButton` row (PushButton, Pane 1, Tab 0); Form scope bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
  - No dialog, no unsaved prompt, no banner.
- Screenshot `t4-01-pre-close-clean-designer-FX_Items-User-scope.png`: FX_Items tab, Save and Undo greyed, Button rendered as `FX_Refresh`, Initial Command `Refresh`, scope bar User.

Gate: passed (clean, User-scoped, Save disabled, Initial Command `Refresh`, one Button row).

## 2. The one Designer close

- Action: one native click on the Form tab's close control (`closable FX_Items`, ref `e247`, from the fresh gate snapshot). Not the browser tab.
- Outcome (`t4-02-post-close-FX_Items-tab-absent-no-prompt.png`, snapshot `playwright/page-2026-10-11T06-57-04-326Z.yml`):
  - The FX_Items tab is **absent**: the tablist no longer contains a selected Form tab; the `closable FX_Items` control is gone.
  - Designer canvas empty; Properties panel empty.
  - Page URL changed from `…default.aspx?MGForm=FX_Items` to `…default.aspx` (no Form parameter).
  - **No unsaved-change prompt, no dialog.** Save `[disabled]`.
  - Scope bar still shows `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (Designer shell, no Form loaded).

Close count: **1**.

## 3. The one recent-forms reopen

- Fresh snapshot `t4-snapshot-01-post-close-fresh-before-reopen.md` (after close, before reopen): Form menu button `e3`.
- Action 1: click the **Form** menu. Menu items included, in order: `Definition`, `Sign Out`, then a list of recent forms: `FX_Items`, `Sql Tables`, `IDOs`, `Property Classes`, `Export/Import Strings`, `IDO Projects`, `FX_UMs`, `FX_HelloWorld01`, `Data Maintenance Wizard`, `Runtime Builder Selection` (accessibility `playwright/page-2026-10-11T06-57-15-451Z.yml`).
- Action 2: click the single **`FX_Items`** menu item (`e1219`) in the recent-forms list. Only one `FX_Items` entry exists in the list.
- Outcome: URL returned to `…default.aspx?MGForm=FX_Items`; FX_Items tab selected with close control `closable FX_Items`; Save `[disabled]`; scope bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- Screenshot `t4-03-reopened-FX_Items-Designer-via-Form-menu-recent-forms.png`: FX_Items heading; Name `FX_Items`; Version `User version for us...` (truncated on screen; full text below); Form Type `Normal`; Is Master `True`; **Initial Command `Refresh`**; Splitter Vertical 11; Save and Undo greyed; the Button rendered at the same position as `FX_Refresh`.

Reopen count: **1** (one Form-menu open, one recent-forms selection). No second reopen attempted.

Reopen note: the Details pane restored in a collapsed state, which is the same state as the T3 Designer before close (no change by the worker). It was expanded (view only) to read the Components grid (§4).

## 4. Post-reopen verification (independent)

### 4a. Identity, scope, and Form properties (accessibility `t4-snapshot-01` / `playwright/page-2026-10-11T06-57-22-477Z.yml`; screenshots `t4-03`, `t4-06`)

| Check | Post-reopen observed | Pre-close / T3 value | Match |
| --- | --- | --- | --- |
| Form Name | `FX_Items` | `FX_Items` | yes |
| ScopeType / ScopeName | `User` / `anton.ramos@3mworks.com.ph` | same | yes |
| Version | `User version for user anton.ramos@3mworks.com.ph` | same | yes |
| Form Type | `Normal` | `Normal` | yes |
| Is Master | `True` | `True` | yes |
| **Initial Command** | **`Refresh`** | `Refresh` | yes |
| Other Form properties (visible) | Device Type `Default`; Caption blank; Script Language `Visual Basic`; Close Box `True`; Min/Max `True`; Advanced Filter `False`; Help Context ID `-1`; Splitter `Vertical`; Splitter Position `11`; Pane 0 Scroll Bars `Never` | same as T1–T3 | yes (visible rows) |
| Save | `[disabled]` | disabled | yes |

### 4b. Components (Details > Components, expanded with the grid Expand control; view only) — `playwright/page-2026-10-11T06-57-45-197Z.yml`; screenshots `t4-04`, `t4-05`

| Row | Type | Data Source | Pane | Container | Tab | Compared with T3 |
| --- | --- | --- | --- | --- | --- | --- |
| Pane (00) | (container) | | | | | same |
| FormCollectionGrid | Grid | objects | 0 | | 0 | same |
| FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | same |
| FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | same |
| FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | same |
| FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | same |
| Pane (01) | (container) | | | | | same |
| FX_ItemStatic | Static | | 1 | | 5 | same |
| FX_ItemEdit | Edit | object.FX_Item | 1 | | 6 | same |
| FX_DescriptionStatic | Static | | 1 | | 7 | same |
| FX_DescriptionEdit | Edit | object.FX_Description | 1 | | 8 | same |
| FX_CostStatic | Static | | 1 | | 9 | same |
| FX_CostEdit | Edit | object.FX_Cost | 1 | | 10 | same |
| FX_UMStatic | Static | | 1 | | 11 | same |
| FX_UMCombobox | ComboBox | object.FX_UM | 1 | | 12 | same |
| **FX_RefreshButton** | **PushButton** | (blank; Binding Type `None`) | 1 | | 0 | added in T2; same row identity |

Count: 13 original rows + 2 pane roots + 1 Button = exactly one `FX_RefreshButton` (no duplicate). Compared with the T1/T2/T3 inventory: unchanged.

Not re-read individually in T4: the Caption and Events values of the 13 original rows (same limit as T3; no edit made to them in T1–T4). The Edit and ComboBox `C(<Static>)` captions were not re-read in T4 (the T2 read stands).

### 4c. Button properties after reopen (accessibility `t4-snapshot-02-recovery-after-stale-ref-click.md`; screenshot `t4-06`)

| Property | Post-reopen value | Pre-save / T3 value | Match |
| --- | --- | --- | --- |
| Header | `FX_RefreshButton (Button)` | same | yes |
| Name | `FX_RefreshButton` | `FX_RefreshButton` | yes |
| Caption | literal `FX_Refresh` (no resource marker) | `FX_Refresh` literal | yes |
| Type | `PushButton` | `PushButton` | yes |
| Events > Primary | `StdFormRefresh` | `StdFormRefresh` | yes |
| Data Source > Binding Type | `None` (Components/Properties) | `None` | yes |
| Components grid `Event to generate` | **`StdFormRefresh`** (row `FX_RefreshButton PushButton 1 0 StdFormRefresh`; screenshot `t4-05`, `t4-06`) | **blank** in T2 and T3 (`t3-01`, `t3-snapshot-01` row `FX_RefreshButton PushButton 1 0`) | **changed (new observation, see §6)** |

## 5. Errors, disclosed recovery, and deviations

1. **Stale-ref click (one, my error).** After the Components row selection of `FX_RefreshButton`, I clicked a Component-tab ref (`e1199`) taken from the earlier Designer snapshot. The ref had been reassigned after reopen and resolved to the **"Powered by Infor" logo** image. Consequence: none visible. The tab list stayed at two tabs; the post-click snapshot (`t4-snapshot-02-recovery-after-stale-ref-click.md`, my one fresh untargeted snapshot for this recovery) shows: FX_Items tab selected; Save `[disabled]`; no dialog; no new browser tab. The Properties panel was already on the Component tab (the row selection switched it). **No corrected inspection was needed**; the Button values were read from that fresh snapshot. Recovery budget used: 1 fresh snapshot; 0 corrected inspections.
2. **Details pane state (view only):** the Details pane was collapsed at reopen and expanded to read the Components grid; the Collections tab showed first, and the Components tab was then selected; the grid Expand control was used once. None of these change Form values.
3. **Components grid scroll:** one wheel scroll (+800) at the grid, view only.
4. No browser errors: no tab-not-found, no click timeout, no screenshot timeout.

## 6. New observation (observed only; not interpreted)

- In T2 and T3 (the same open Designer session, before close), the Components grid's `Event to generate` cell for `FX_RefreshButton` was **blank** (`t3-01`; T3 snapshot row `FX_RefreshButton PushButton 1 0`). After the close and recent-forms reopen, the same cell reads **`StdFormRefresh`** (`t4-05`; snapshot row text `… 1 0 StdFormRefresh`).
- The Properties Primary value read `StdFormRefresh` both before close (T2, T3) and after reopen (T4). So the Primary value itself did not change; only the grid column's display changed.
- Whether the column reflects the Primary event, is populated from the reloaded Form definition, or is a display refresh artifact is **not established** by this session. Recorded as an observed display change only. No other grid column of any row changed.

## 7. Counts (T4 browser calls, worker-reported)

| Type | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | first browser action |
| Tab select | 0 | Designer already current |
| Explicit `browser_snapshot` | 3 | `t4-snapshot-00` (pre-close gate); `t4-snapshot-01` (post-close, before reopen); `t4-snapshot-02` (recovery after stale-ref click). Each action also returned its own tool-generated snapshot, not counted here. |
| Finds | 4 | "Details" (expand control); "Components" (tab lookup); "Expand" (grid control); "FX_RefreshButton" (row lookup) |
| Clicks | 8 | pre-close gate: none (read-only); **Designer close (1)**; **Form menu (1)**; **FX_Items recent-forms entry (1)**; Details Expand Panel (1); Components tab (1); grid Expand (1); FX_RefreshButton row (1); **stale Component-tab ref → Infor logo (1, error)** |
| Mouse moves / wheel | 2 / 1 | grid scroll (+800) |
| Screenshots | 6 | `t4-01` … `t4-06`; all viewed |
| Designer Save | **0** | not clicked in T4 |
| Designer close | **1** | native Form-tab close control |
| Designer reopen | **1** | native Form menu → recent-forms `FX_Items` |
| Runtime actions | 0 | Web Client tab not selected |
| Diagnostics changes | 0 | |
| Log clears | 0 | |
| Button activations | 0 | |
| Property edits | 0 | |
| Browser evaluate / run-code | 0 | |
| Prompts or dialogs accepted | 0 | |

## 8. Evidence files (T4)

Worker-authored, under `evidence/EXP-054-R2/`:
- `T4-designer-close-and-recent-forms-reopen-verification-report.md` (this report)
- `t4-01-pre-close-clean-designer-FX_Items-User-scope.png` — clean pre-close: FX_Items tab with close control, Save/Undo greyed, Button rendered, Initial Command `Refresh`, User scope bar. Shows the tab about to be closed.
- `t4-02-post-close-FX_Items-tab-absent-no-prompt.png` — FX_Items tab removed; canvas empty; no prompt; Save greyed; scope bar shows the Designer shell. Does not show the recent-forms list.
- `t4-03-reopened-FX_Items-Designer-via-Form-menu-recent-forms.png` — reopened FX_Items: Name, Version (truncated), Form Type, Is Master, Initial Command `Refresh`, Save/Undo greyed, User scope bar, Button rendered. Does not show the Components rows (Details collapsed in this frame).
- `t4-04-reopened-Details-Components-grid-rows-and-Button.png` — Details expanded (Collections tab showing); Pane (00) and FormCollectionGrid rows visible; Save greyed. Does not show the Button row (below the visible area).
- `t4-05-reopened-Components-grid-Button-row-and-Event-column.png` — FX_RefreshButton row: PushButton, Pane 1, Tab 0, **Event to generate `StdFormRefresh`**. Does not show the Primary property (scrolled out).
- `t4-06-reopened-FX_RefreshButton-properties-Name-Caption-Type-Primary.png` — Button selected: header `FX_RefreshButton (Button)`; Name `FX_RefreshButton`; Caption `FX_Refresh`; Type `PushButton`; grid row event column `StdFormRefresh`. Primary row is below the visible area; its value is confirmed by the accessibility snapshot `t4-snapshot-02`.

Browser-generated, saved at worker request (classified as browser-generated, not worker findings):
- `t4-snapshot-00-pre-close-fresh-designer.md`
- `t4-snapshot-01-post-close-fresh-before-reopen.md`
- `t4-snapshot-02-recovery-after-stale-ref-click.md`

Tool-generated (gitignored `evidence/playwright/`): accessibility snapshots `page-2026-10-11T06-57-04-326Z.yml` (post-close), `06-57-15-451Z.yml` (Form menu open), `06-57-22-477Z.yml` (reopened), `06-57-31-235Z.yml` (Details expanded), `06-57-39-016Z.yml` (Components tab), `06-57-45-197Z.yml` (grid expanded), `06-58-01-369Z.yml` (row selected), `06-58-03-413Z.yml` (stale-ref click result).

## 9. Acceptance status (T4 scope)

| AC | T4 status | Basis |
| --- | --- | --- |
| AC-4 (post-save state, carried) | **Still supported with limits** | Save disabled at pre-close gate and after reopen (§1, §4a) |
| AC-5 | **Supported with limits (same-session UI only)** | Clean close, tab absent, no prompt (§2); one recent-forms reopen restores FX_Items, User scope, same version, one FX_RefreshButton with Type PushButton, Caption `FX_Refresh`, Primary `StdFormRefresh`; 13 original rows + 2 roots + 1 Button unchanged against T1/T2/T3 (§4). Limits: Caption/Events of 13 original rows not re-read individually after reopen; the `Event to generate` display change (§6) is unexplained; same session only. |
| AC-6 to AC-12 | **Not tested in T4** (runtime closure, Select Form, Diagnostics, log, activation, restoration, final audit) | out of T4 scope |

## 10. Unresolved

- The meaning of the `Event to generate` display change (§6): **unresolved**. Observed only.
- Whether the close and reopen persist across sessions or server reloads: **not tested** (same-session UI recovery only).
- `C(<Static>)` caption meaning, the toast phrase "global object(s)", and the Button's Tab value `0`: **unresolved** (carried from T2–T3).

## 11. Next permitted step (requires the operator)

The Designer is reopened and clean (Save disabled) with FX_Items open. The next step, if authorized, is the runtime closure of the inherited FX_Items tab and the controlled Select Form opening (AC-6). No runtime, Diagnostics, log, or Button action was performed in T4.
