# EXP-036 — T2 Browser Preflight Notes

Run: R-20261009-231134-1eF3 · Experiment: EXP-036 · Cycle 1 · Task T2
Worker session: `4c394def-9633-44dd-970d-aec5624cf0f1` · task_message_id: `462cef0d-3151-4229-a63c-0f3043e90f4f`
Scope of T2: preflight only. No Select Form filtering, Form creation, Toolbox placement, property edit, Save, close, reopen, Cancel, or OK on any Form dialog.

## 1. Inherited state (before any action)

- Browser: one tab, index 0, `Mongoose` (portal), URL `.../G6R8LJ9Q4E8C2Z8Y_DEM/c51080bc-…`. No Designer tab. Portal tab strip also shows a `System Administrator` tab (not touched).
- Web Client: loaded and usable. Identity bar shows `anton.ramos@3mworks.com.ph` and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; DEM badge; menus Explorer / Form / Edit / View / Window / Help; toolbar Open enabled; Save, New, Delete, etc. disabled (clean).
- No sign-in screen. No configuration-selection prompt.
- Select Form dialog: closed.
- Form panel: none. Main area empty; no Form open in the Web Client.
- Explorer: four collapsed root folders (My Folders, Master Explorer, Public Folders, User Folders).
- Only visible overlay at start: portal notification banner `DistributionIFSContactUs group does not have any active users…`. It covered the Web Client menu bar, identity bar and top of the toolbar.

## 2. Actions in T2 (in order)

| # | Action | Result |
|---|---|---|
| 1 | `browser_tabs list` (read-only) | One tab: `Mongoose`. |
| 2 | Fresh untargeted snapshot (read-only) | Web Client state as in §1. |
| 3 | Viewport screenshot `t2-01` (read-only) | Banner visibly covers the Web Client menu/identity bar. |
| 4 | Click banner close control `Close notification` (portal banner, not Mongoose) — 1 click | Banner closed. This is the recipe's documented precondition (`portal-notification` banner intercepts pointer events). It is a portal UI notification, not a Mongoose object. |
| 5 | Viewport screenshot `t2-03` and boxed snapshot `t2-04` (read-only) | Web Client menu bar, identity bar, toolbar and Explorer tree fully visible. Designer split button at the toolbar's right side. |
| 6 | Click Web Client toolbar Designer split control `f1e39` — **1 Designer launch** | New tab 1 opened: `WSWebClient/designer/Default.aspx` (no `MGForm` parameter; no Form loaded). |
| 7 | Tab select index 1 (read-only, tab switch) | Designer tab current. |
| 8 | Fresh snapshot `t2-05` and viewport screenshot `t2-06` (read-only) | "Identify Your Editing Scope" dialog open: Scope = User; User = anton.ramos@3mworks.com.ph; OK / Cancel / Help. Blank canvas behind it. |
| 9 | Click dialog **OK** once (scope confirmation, the recipe's standard step) | Dialog closed. |
| 10 | Fresh snapshot `t2-07` and viewport screenshot `t2-08` (read-only) | Settled Designer (see §3). |

Counts: Designer launch **1** (of permitted 1). Mongoose mutations **0**. Select Form opens **0**. Form creates **0**. Components placed **0**. Property edits **0**. Saves **0**. Closes **0**. Reopens **0**. Cancels / OKs on Form dialogs **0**. JavaScript / evaluate **0**. Authentication actions **0**.
Recovery allowance: fresh untargeted snapshot used **0 / 1**; corrected visible inspection used **0 / 1**. No ref error, timeout, or ambiguous read occurred. Read-only snapshots and screenshots were planned captures, not recovery.

## 3. Designer settled state (observed in `t2-07` snapshot and `t2-08` screenshot)

- Scope: status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Form tabs: the Form-tab tablist is empty (no Form tab, no `closable` control).
- Canvas: blank; no Form loaded. Properties panel empty tree; tabs `Form` (selected) and `Component`.
- Design toolbar: Save **disabled**, Regenerate Form **disabled**, Undo **disabled**, Redo **disabled**, Align/Space/Size buttons disabled. Clean.
- Toolbox: Framework Components expanded; `Button` row present (`treeitem "Button"`).
- Dialogs: none other than the scope dialog (now closed). No browser-native dialog. No unsaved-change prompt.
- Page title: `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`.

## 4. Decisive evidence summary

| File | Shows | Does NOT show |
|---|---|---|
| `t2-01-preflight-webclient-viewport.png` | Banner covering Web Client top area (menu/identity bar hidden); Explorer tree; toolbar icons partly visible. | Designer; Forms inventory. |
| `t2-02-preflight-snapshot-boxes.md` | Pre-dismiss accessibility tree and boxes: Designer buttons present at toolbar right (`f1e36`/`f1e37`, `f1e39`/`f1e40`). | Which one is the split control by name (both labelled "Designer"). |
| `t2-03-preflight-after-banner-close.png` | Web Client menu bar, identity bar (signed-in user + config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), toolbar, Explorer; no dialog. An "Insights" tooltip is from the pointer after closing the banner (not dialog content). | Designer. |
| `t2-04-preflight-snapshot-after-banner-close.md` | Accessibility confirmation that Web Client menu/identity/toolbar are present and Save disabled; Designer buttons at `f1e39` (box 710,36) and `f1e37`/`f1e36` (box 676,36). | Designer content. |
| `t2-05-designer-snapshot-after-launch.md` | Designer accessibility tree at scope-dialog time: scope combobox User, user combobox anton.ramos, OK/Cancel/Help; blank canvas. | Settled state after OK. |
| `t2-06-designer-launch-viewport.png` | Designer tab with "Identify Your Editing Scope" dialog: Scope User; User anton.ramos@3mworks.com.ph; OK/Cancel/Help; blank canvas, Toolbox with Button row, Properties panel. | Post-OK state. |
| `t2-07-designer-settled-snapshot.md` | Settled Designer accessibility tree: no Form tab; Save/Regenerate/Undo/Redo disabled; scope bar User; no dialog. | Form inventory; Select Form contents. |
| `t2-08-designer-settled-viewport.png` | Settled Designer: blank canvas, no Form loaded, Properties empty, toolbar greyed (clean), scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, no dialog. | Whether `FX_SingleButtonLab01` or any other Form exists in the database (requires the Select Form check, T3). |

Limitations of T2 evidence:
- These captures show the Designer's visible state only. They do not prove Forms-database contents, Select Form inventory, or absence of `FX_SingleButtonLab01`. The absence check is the separate Select Form step (planned for T3).
- The launch relied on identifying the split control `f1e39` (rightmost of two "Designer" buttons). Its name is "Designer" for both controls. The split behaviour (new tab) was observed, which is consistent with the recipe's split control. It was not verified by name.
- The Web Client tab (index 0) was not re-inspected after the launch. Its last read was before the launch.

## 5. Disclosures

- Tool-generated files: the browser tool wrote `evidence/playwright/*.yml` and `evidence/playwright/console-*.log` automatically on each call (for example `evidence\playwright\console-2026-10-09T15-15-14-701Z.log`, `page-2026-10-09T15-16-44-181Z.yml`, `page-2026-10-09T15-16-57-627Z.yml`). These were not authored by the worker and are outside `evidence/EXP-036/`. They are gitignored. Not deleted.
- Tool wrapper code: action results include the tool's own generated `page.getByRole`/`getByLabel` code. The worker wrote no JavaScript and used no evaluate tool.
- The launch click's tool wrapper used the iframe's `getByLabel('Designer')` locator (tool-generated). The worker's action was a single native click on ref `f1e39`.

## 6. Knowledge state (T2)

- Usable Web Client, User identity, no sign-in / configuration prompt, Select Form closed, no Form open: **observed** (T2, this session).
- Portal notification banner obstructed the Web Client menu and identity bar until closed: **observed**; closing it is required before launch (recipe precondition, EXP-002-R2 / EXP-027).
- One ordinary Designer launch from the unobstructed Web Client opened a Designer tab with the scope dialog showing User: **observed** (T2).
- Designer after scope OK: blank canvas, no Form tab, clean toolbar, scope bar User: **observed** (T2).
- Target `FX_SingleButtonLab01` absence / positive control: **unresolved** (not in T2 scope; T3).
- Inherited already-open Forms: **none observed** (no Form tab; canvas blank).
