# EXP-113 — Hello World Part 7 Section 10: FlexLayoutButtons in FlexLayoutHome's buttons region (FX_CustomerPortal)

Status: **T1–T4 complete (cycle 4, task T4).** Build performed and read back in the same session: FlexLayoutButtons under FlexLayoutHome > Region04: buttons with count, spacer and cart. Ordinary close and reopen of FX_CustomerPortal done once; readback matched the plan. Final audit written in the T4 section below. Evidence is same-session UI only (no cross-session durability claim). Awaiting operator review.
Brief: approved draft (git commit `b17eb56`, "EXP-113: approved brief"; original draft `2dc4176`).
Run: `R-20261018-184829-wrpF`, cycle 0, task T1. Worker session `90def145-fe25-4b8e-8699-080a2ad7f56c`; task message `d7e094d4-0c60-48d8-a9fd-79c7cdd000f9`.
Editing scope: **User** (`ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, shown in the Designer status bar).
Target Form: `FX_CustomerPortal` (Designer tab 0, MGForm=FX_CustomerPortal).

## Objective

Build Hello World Part 7 Section 10 (tutorial 16:54–17:59, `docs/mongoose/transcripts/hello-world-pt7.md` lines 257–270 and 504–513) on `FX_CustomerPortal`: a nested FlexLayout **FlexLayoutButtons** in **FlexLayoutHome > Region04: buttons**, Type left at its default, with three regions:

| Region | Length / unit | Orientation | Align | Pack |
| --- | --- | --- | --- | --- |
| `count` | 1 Flex | Horizontal | Top | End |
| `spacer` | 1 FormUnit | (defaults) | — | — |
| `cart` | 1 Flex | Horizontal | Top | Start |

No count editor, add-to-cart button, drag/drop or cart logic (Part 8). Section 11 and later are out of scope.

## Sources reviewed (T1, before any browser interaction)

- `AGENTS.md` (repository file).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 257–270 (Section 10) and lines 504–513 (16:54–17:59).
- `recipes/components/add-component-from-toolbox.md`.
- `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections only: `experiments/EXP-112-hello-world-part-7-section-9-flexlayouthome.md` (line 785 onward), `experiments/EXP-109-hello-world-part-7-section-6b-fx-customer-portal-main-regions.md` (line 760 onward), `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` (line 383 onward).
- No other record was read. No Section 11 or later source was read.
- Note: this record did not exist at T1 start (the brief names it as the record to create or update). It was created in T1 from the brief.

## Starting state and gate (T1, AC-1)

- Browser tabs listed before any selection: tab 0 = Mongoose Designer, `FX_CustomerPortal` (`MGForm=FX_CustomerPortal`, current); tab 1 = Mongoose Web Client (portal URL). Tab 0 selected successfully after the list.
- Session: usable. No Session Expired modal, logout card or sign-in page in either tab. No re-login was performed.
- Scope: `ScopeType: User` (status bar, screenshot and snapshot).
- Form: `FX_CustomerPortal` is the only open tab, Form properties shown, **Save disabled** (snapshot `[disabled]`; grey Save icon in the screenshot). Undo and Redo disabled.
- Dialogs: none open.
- Console baseline (tool-output count): **2 errors, 0 warnings**. Unchanged after every T1 action where the count was shown (see the audit).
- Details panel: collapsed at start; expanded and set to the Components tab, and its grid expanded, by view-only toggles (no Form change).

### Components tree under FlexLayoutMain (read from the inline snapshot after the grid Expand)

Full depth-first tree (type, parent, container):

- `flexlayoutPane_FX_CustomerPortal` (FlexLayout, root)
  - `Region00: header`
    - `FlexLayoutHeader` (FlexLayout, root header region)
      - `Region00: header` → `StaticHeader` (Static)
      - `Region01: user` → `StaticCustIcon` (Static), `StaticCustID` (Static)
  - `Region01: main`
    - `FlexLayoutMain` (FlexLayout)
      - `Region00: menu` → `ButtonSignIn`, `ButtonHome`, `ButtonCart` (PushButton)
      - `Region01: spacer1` (empty)
      - `Region02: signinpage` → `StaticSignIn` (Static), `StaticImage1` (Static), `StaticCustID2` (Static), `EditCustID` (Edit), `ButtonSignIn2` (PushButton)
      - `Region03: homepage`
        - `FlexLayoutHome` (FlexLayout, Container FlexLayoutMain)
          - `Region00: header` — **no component**
          - `Region01: spacer` — **no component**
          - `Region02: grid` — **no component**
          - `Region03: spacer2` — **no component**
          - `Region04: buttons` — **no component**
      - `Region04: cartpage` (empty)
      - `Region05: spacer2` (empty)
  - `FlexLayoutFooter` (FlexLayout, root footer region)
    - `Region02: footer` ... `Region00: UNKNOWN0` (auto region, already present, as the brief notes)

Gate result: FlexLayoutHome has its five regions (header, spacer, grid, spacer2, buttons) and **no component under any of them**. The header, menu, signinpage, footer and FlexLayoutMain's six regions match the brief's expected tree. AC-1 tree condition met.

Evidence limit: the tree rows beyond the Designer grid viewport were read from snapshot text; the screenshot shows only the first rows.

## Buttons band on the canvas (AC-1)

- Unscrolled canvas (screenshot `t1-gate-tree-and-canvas.png`): the homepage column (viewport x ≈ 668–885) shows the header band (top, ≈ y 173–245), a dashed spacer band (≈ y 245–262), then the grid below. The buttons band is **below the visible canvas**; the canvas has a vertical scroll thumb and the FlexLayoutFooter band is off-screen.
- **A view-only scroll is needed.** One mouse-wheel scroll (deltaY 300, pointer at canvas point (760, 420)) moved the content about 224 px (the `Sign In` button in the signin column moved from y≈501 to y≈277).
- Scrolled canvas (screenshot `t1-gate-canvas-scrolled-buttons-band.png`): the homepage column shows a dashed spacer2 divider at ≈ y 377–395, then an **empty band at ≈ y 395–562, the buttons region**, above the teal FlexLayoutFooter band (≈ y 563–600). This is the lowest band of the homepage column, below the spacer2 divider, as the brief expects.
- The homepage column's dashed dividers are region dividers (EXP-112 finding); the buttons band has no divider inside it.

## Gate outcome

- AC-1 items: session usable (yes); User scope (yes); FX_CustomerPortal open and clean, Save disabled (yes); no dialog open (yes); FlexLayoutHome's five regions empty (yes); other regions and components as expected (yes); buttons band located and scroll need recorded (yes); baseline console count 2 (yes).
- No blocker. No change was made in T1.

## Action audit (cumulative through T1)

| Category | Count |
| --- | --- |
| Tab list / tab select | 1 / 1 |
| Browser snapshot calls (inline, untargeted except one) | 5 (one call used `target` e1, the root container, for the final read) |
| Clicks (view-only UI toggles, no Form change) | 3: Details "Expand Panel"; Components tab; Components grid "Expand" |
| Pointer move (hover, not a click) | 1 |
| View-only mouse-wheel scrolls | 1 |
| Screenshots | 2 (`t1-gate-tree-and-canvas.png`, `t1-gate-canvas-scrolled-buttons-band.png`) |
| Toolbox selections | 0 |
| Placement clicks / adorner coordinate clicks | 0 / 0 |
| Undo clicks | 0 |
| Dialog opens (OK / Cancel) | 0 (0 / 0) |
| Region adds / field entries / corrections | 0 / 0 / 0 |
| List opens | 0 |
| Designer Saves | 0 |
| Form closes / reopens | 0 / 0 |
| Dragging | 0 |
| Regenerate / Delete Form Definition / Select Form OK | 0 / 0 / 0 |
| Server-event errors | 0 |
| Session expiries / re-logins | 0 / 0 |
| Ref-not-found errors / fresh-snapshot recoveries | 0 / 0 |
| Browser evaluate / run-code calls by the worker | 0 |
| Console error count | 2 baseline; 2 after each action whose output showed the count (the last at the final snapshot, after the scroll). Rise: none. |

## Worker-written file inventory (T1)

- `experiments/EXP-113-hello-world-part-7-section-10-flexlayoutbuttons.md` (this record; created).
- `evidence/EXP-113/t1-gate-tree-and-canvas.png` (created).
- `evidence/EXP-113/t1-gate-canvas-scrolled-buttons-band.png` (created).

Tool-written (not worker-written; listed for the operator): the browser tool saved snapshot text to `evidence/playwright/page-2026-10-18T10-48-56-866Z.yml`, `page-2026-10-18T10-49-02-091Z.yml` and `page-2026-10-18T10-49-07-226Z.yml`, and a console log `evidence/playwright/console-2026-10-18T10-48-48-868Z.log`. The worker did not read the console log and did not Grep the snapshot files.

## Cleanup inventory (so far)

Nothing created in Mongoose yet. Cleanup inventory is empty at T1. When T2 places it, the inventory will be FlexLayoutButtons (new FlexLayout, User scope, FX_CustomerPortal) and its three regions.

## Final state (end of T1)

- Designer tab 0: FX_CustomerPortal, User scope, Save disabled, no dialog, no unsaved change.
- Details panel expanded (Components tab, grid expanded) and the canvas scrolled down (view state only, not Form state).
- Web Client tab 1: untouched.
- Console baseline 2 errors.
- Next permitted step: **T2 (placement)**. Not performed in T1. The next task must start with a fresh snapshot.

## Findings (observed, T1)

1. The Components grid's Expand button expands the whole tree (view only); the Details panel opened on the Collections tab, so the Components tab had to be selected.
2. The buttons region lies below the visible canvas in the initial scroll position; one 300-px wheel scroll brings it into view (about 224 px of content movement).
3. FlexLayoutHome's five regions are empty before T2, as the brief expects.

## Acceptance checks (T1 portion)

- AC-1: met for T1 (evidence: `t1-gate-tree-and-canvas.png` shows FX_CustomerPortal with ScopeType User, Save disabled, the tree panel and the canvas top; the tree rows under FlexLayoutHome are proven by the snapshot text, not the screenshot; `t1-gate-canvas-scrolled-buttons-band.png` shows the empty buttons band below the spacer2 divider).
- AC-2 to AC-5: not yet applicable (T2–T4 not run).

---

## T2 — placement, Name and one Designer Save (cycle 1, task T2)

Scope of this task: place FlexLayoutButtons, name it, perform one Designer Save. T3 was not begun.

### Starting check (T2, AC-1 recheck)

- Tab list (read-only) before selection: tab 0 = Designer for `FX_CustomerPortal`, tab 1 = Web Client. Tab 0 selected after the list.
- Fresh snapshot: FX_CustomerPortal, `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Save disabled, Undo and Redo disabled, no dialog or menu open, **console 2 errors, 0 warnings** (baseline unchanged from T1).
- Components tree: unchanged from T1. Region04: buttons had no child row (next row Region04: cartpage). Header, menu, signinpage, footer and FlexLayoutMain's regions matched T1.
- Canvas: the buttons band was still in view after T1's scroll. Screenshot `t2-pre-placement-canvas.png` shows the empty band inside the homepage column (x ≈ 670–884, y ≈ 395–562), below the spacer2 divider (y ≈ 377–395) and above the footer band.

### Placement

1. Toolbox: one click on the `FlexLayout` row (ref from the starting snapshot).
2. Canvas: one coordinate click at (777, 470), inside the buttons band and away from the dividers (x ≈ 669 and 885) and the spacer2 divider. This is the one placement click the brief allows. No drag.
3. Immediate check (untargeted snapshot, screenshot `t2-placement-flexlayoutbuttons-tree-and-canvas.png`):
   - A new row `flexLayout1_USER` (Type FlexLayout, Pane 0, Container FlexLayoutHome) sits directly under `Region04: buttons`, indented under it, with one child row `Region00: UNKNOWN0`. The next row is `Region04: cartpage`, at the FlexLayoutMain level.
   - It is the only child of Region04: buttons. No other component changed.
   - No Undo was needed or used.
4. Defaults read from Properties (snapshot text, plus screenshots `t2-placement-properties-layout-defaults.png`, `…-scrolled.png`, `…-layout-values.png`):
   - Name `flexLayout1_USER` (before rename); Type FlexLayout; From Device Master True.
   - Appearance: Theme Class blank; Foreground Color #000000; Background Color blank; Font and Justification blank.
   - Behavior: Read-Only/Disable False; Hidden False; Auto Complete False; Breadcrumb blank.
   - Layout: Unit `Char`; Size `30; 8.82352941176471`; Containment blank; Tab Order 0; Order blank.
   - **Flex Attributes: `Type: HorizontalBox Regions: - 00: UNKNOWN0 Index: 4 Target: buttons`** (snapshot text). Index 4 and Target buttons match the expected values. The screenshot shows only the truncated `Type: HorizontalBo…`.
   - Layout group was opened view-only (see Deviations); no Layout or Flex Attributes value was edited.
5. Fill of the band: the canvas shows a thin dashed FlexLayout outline with its adorner icons at the top of the buttons band (about x 670–885, y 395–416). The rest of the band (y ≈ 416–562) stays empty in the screenshot. **Observed: the new FlexLayout does not visibly fill the band.** Whether the Size value (30; 8.82…) should fill it is not settled by these observations.

### Name

1. Clicked the Name value cell in Properties (snapshot ref from the same task). The editor opened with `flexLayout1_USER`.
2. Plain fill `FlexLayoutButtons` (one text entry), then Tab.
3. Verified in the Components tree (not the Properties header): row `FlexLayoutButtons FlexLayout 0 FlexLayoutHome 0`, still under Region04: buttons with child `Region00: UNKNOWN0`. Properties Name row reads `FlexLayoutButtons`.
4. The Properties header combobox still read `flexLayout1_USER (FlexLayout)` after the rename, in the snapshot and in the save screenshot. This is the label lag already recorded in EXP-105, not a second name.
5. Corrections: 0.

### Designer Save (one)

- One click on the toolbar Save (ref from the same task's snapshot).
- Response (screenshot `t2-save-response.png`): toast `Save — Form [FX_CustomerPortal] and global object(s) were saved.` The same standard Designer Save toast as in EXP-105 and EXP-112.
- Save state after: toolbar Save disabled (targeted read `button "Save" [disabled]`; the screenshot shows the Save and Undo icons greyed). The Components tree still shows FlexLayoutButtons under Region04: buttons.
- Console after the Save click and at the post-Save read: **2 errors**. No rise, no server-event error, no retry.

### Console count record (T2)

- Baseline at T2 start: 2. Every tool-output reading that showed the count read 2 (Toolbox click, placement click, Layout click, expand-all click, Name value click, Name-editor snapshot, post-rename snapshot, Save click, post-Save snapshot).
- Tool outputs without a count line (ArrowRight, `browser_find`, mouse move, the three wheel scrolls, `browser_type` fill, Tab, and the screenshots): the next explicit reading after each was 2.

### T2 action audit (this task only)

| Category | T2 count |
| --- | --- |
| Tab list / tab select | 1 / 1 |
| Browser snapshot calls | 8 (7 untargeted inline; 1 targeted read with `target` e15 after the Save, no click) |
| Toolbox selections | 1 |
| Placement coordinate clicks | 1 (777, 470) |
| Adorner coordinate clicks | 0 |
| View-only clicks (Properties group and expand-all) | 2 (`Layout` treeitem; Properties toolbar expand-all) |
| Keyboard | 2 keypresses: ArrowRight (view, no effect); Tab (committed Name) |
| Name value click / text entries / corrections | 1 / 1 / 0 |
| Mouse moves (hover) | 1 |
| View-only wheel scrolls (Properties grid) | 3 (deltaY 600, 800, then −5000) |
| `browser_find` text searches (read only, no match) | 1 (`Flex Attributes`) |
| Designer Saves (with response) | 1 |
| Undo clicks | 0 |
| Dialog opens (OK / Cancel) | 0 / 0 |
| Region adds / list opens | 0 / 0 |
| Form closes / reopens | 0 / 0 |
| Dragging | 0 |
| Regenerate / Delete Form Definition / Select Form OK | 0 / 0 / 0 |
| Server-event errors / ref-not-found errors | 0 / 0 |
| Session expiries / re-logins | 0 / 0 |
| Browser evaluate / run-code calls by the worker | 0 |
| Screenshots | 6 (`t2-pre-placement-canvas`, `t2-placement-flexlayoutbuttons-tree-and-canvas`, `t2-placement-properties-layout-defaults`, `t2-placement-properties-layout-defaults-scrolled`, `t2-placement-properties-layout-values`, `t2-save-response`) |

### Cumulative browser action audit (T1 + T2)

| Category | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Tab list / tab select | 1 / 1 | 1 / 1 | 2 / 2 |
| Snapshot calls (untargeted / targeted) | 4 / 1 | 7 / 1 | 11 / 2 (13 total) |
| Toolbox selections | 0 | 1 | 1 |
| Placement coordinate clicks | 0 | 1 | 1 |
| Adorner coordinate clicks | 0 | 0 | 0 |
| View-only clicks | 3 | 2 | 5 |
| Mouse moves (hover) | 1 | 1 | 2 |
| View-only wheel scrolls | 1 | 3 | 4 |
| Keypresses | 0 | 2 | 2 |
| `browser_find` (read only) | 0 | 1 | 1 |
| Name value click / text entries / corrections | 0 / 0 / 0 | 1 / 1 / 0 | 1 / 1 / 0 |
| Designer Saves | 0 | 1 | 1 |
| Undo clicks | 0 | 0 | 0 |
| Dialog opens (OK / Cancel) | 0 (0 / 0) | 0 (0 / 0) | 0 (0 / 0) |
| Region adds / list opens | 0 / 0 | 0 / 0 | 0 / 0 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 |
| Dragging / Regenerate / Delete Form Definition | 0 | 0 | 0 |
| Server-event errors / ref-not-found / re-logins | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Screenshots | 2 | 6 | 8 |
| Console error count | 2 (baseline; no rise) | 2 (no rise) | 2 |

### Deviations (T2)

1. **Extra screenshots:** three of the six T2 screenshots (`…-defaults`, `…-defaults-scrolled`, `…-layout-values`) and the pre-placement canvas were taken to read the Layout values, which were not in the decisive set. The brief named placement and the Save response.
2. **Layout group expansion:** the Layout treeitem click only selected the group; ArrowRight only moved focus to the value cell; the Properties toolbar expand-all (view only) opened the groups. The Properties grid was then scrolled with the wheel to reach Layout. No value was changed.
3. **`browser_find` text search:** used once for `Flex Attributes` (no match). It was a read, not a click reference; the Layout values were then read from the inline snapshot.
4. **Targeted snapshot (`target` e15):** used once after the Save to read the Save state. No click followed.
5. **Console readings:** tool outputs for ArrowRight, find, mouse moves, wheel scrolls, `browser_type`, Tab and the screenshots carry no count line. Counts for those actions are the next explicit reading (2).
6. **Properties header lag:** the combobox kept `flexLayout1_USER (FlexLayout)` after the rename, as recorded in EXP-105. The tree and the Name row were used as the verification.

### Worker-written file inventory (cumulative through T2)

- `experiments/EXP-113-hello-world-part-7-section-10-flexlayoutbuttons.md` (created in T1; updated in T2).
- `evidence/EXP-113/t1-gate-tree-and-canvas.png` (T1).
- `evidence/EXP-113/t1-gate-canvas-scrolled-buttons-band.png` (T1).
- `evidence/EXP-113/t2-pre-placement-canvas.png` (T2).
- `evidence/EXP-113/t2-placement-flexlayoutbuttons-tree-and-canvas.png` (T2).
- `evidence/EXP-113/t2-placement-properties-layout-defaults.png` (T2).
- `evidence/EXP-113/t2-placement-properties-layout-defaults-scrolled.png` (T2).
- `evidence/EXP-113/t2-placement-properties-layout-values.png` (T2).
- `evidence/EXP-113/t2-save-response.png` (T2).

Tool-written (not worker-written): browser snapshot files under `evidence/playwright/` (for example `page-2026-10-18T10-52-15-671Z.yml`, `page-2026-10-18T10-54-27-995Z.yml`) and console logs (for example `console-2026-10-18T10-52-02-133Z.log`). The worker did not read the console logs and did not Grep the snapshot files.

### Cleanup inventory (cumulative through T2)

- Created in Mongoose so far: FlexLayoutButtons (new FlexLayout, User scope, FX_CustomerPortal, Region04: buttons, Flex Attributes Index 4 Target buttons) with its auto region **Region00: UNKNOWN0** (not yet renamed or configured).
- Expected in T3: regions count, spacer and cart (the brief's three regions) replacing or extending that auto region. Cleanup must cover FlexLayoutButtons and its three regions.
- No global object, Theme Class, binding, event, Form property or other component created or changed.

### Acceptance checks (T2 portion)

- **AC-1:** re-verified at T2 start (session usable; User scope; FX_CustomerPortal open and clean; FlexLayoutHome's five regions empty before placement; baseline console 2). Evidence: `t2-pre-placement-canvas.png` and the T1 gate screenshots.
- **AC-2 (T2 part):** met for placement, naming and the one Save.
  - Placed as the only child of FlexLayoutHome > Region04: buttons, with auto region UNKNOWN0 (observed in the Components tree and the placement screenshot).
  - Named FlexLayoutButtons (verified in the tree and the Properties Name row).
  - One Designer Save with its response (toast) and the Save state (disabled) recorded.
  - Evidence: `t2-placement-flexlayoutbuttons-tree-and-canvas.png`, `t2-save-response.png`.
- **AC-4 (T2 part):** no other component or region changed (tree compared with the starting snapshot); no Type, Theme Class, binding or event set; no dragging; no Undo; no dialog opened.
- **AC-3, AC-5:** not yet applicable (T3 and T4 not run).

### Findings (observed, T2)

1. **Placement:** Toolbox FlexLayout plus one canvas click in the empty buttons band creates `flexLayout1_USER` as the only child of Region04: buttons, with one auto region UNKNOWN0. Classification: observed.
2. **Defaults:** Unit Char; Size `30; 8.82352941176471`; Tab Order 0; Flex Attributes `Type: HorizontalBox … Index: 4 Target: buttons`. Classification: observed (snapshot text).
3. **Fill:** the new FlexLayout does not visibly fill the buttons band in the placement screenshot; only its outline and adorner occupy the top ~20 px. Classification: observed; the cause (Size versus Fill orientation) is unresolved.
4. **Rename:** plain fill plus Tab sets the Name; the Components tree shows the new name immediately; the Properties header combobox lags (as EXP-105). Classification: observed.
5. **Save:** the standard Designer Save toast appeared and Save became disabled. Classification: observed (same-session UI; not cross-session durability).

### Open questions and limits (T2)

- Whether the buttons band must fill (Orientation Fill) and whether this component's Size should change: not addressed in T2 (no Size edit is planned). For the operator to decide after T4.
- The Flex Attributes Index and Target were read from snapshot text; the editor was not opened in T2.
- Same-session observations only; no close/reopen yet (T4).

### Final state (end of T2)

- Designer tab 0: `FX_CustomerPortal`, User scope, Save disabled, no dialog, no menu, no list, no editor open, no unsaved change.
- The Properties panel shows FlexLayoutButtons (Layout and Appearance groups expanded, view state only); the Details panel shows the Components tab with the tree expanded; the canvas is scrolled to the buttons band.
- Console baseline: 2 errors.
- Next permitted step: **T3 (regions)** in a new task: fresh snapshot, then open FlexLayoutButtons' Edit FlexLayout Attributes through its canvas adorner (tooltip or `flexlayouteditadorner` id), record the starting state, and proceed as the brief's T3 section says. T3 was not started in T2.

---

## T3 — regions, OK and one Designer Save (cycle 2, task T3)

Scope of this task: configure the three regions in FlexLayoutButtons' attributes dialog, click OK once, one Designer Save. T4 (close/reopen readback and final audit) was not begun.

### Start check (T3, AC-1 recheck)

- Tab list (read-only) before selection: tab 0 = Designer for `FX_CustomerPortal`, tab 1 = Web Client. Tab 0 selected after the list.
- Fresh snapshot: FX_CustomerPortal, `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Save disabled, Undo and Redo disabled, no dialog or menu open, **console 2 errors, 0 warnings** (unchanged from T2).
- Components tree: Region04: buttons has one child, `FlexLayoutButtons` (FlexLayout, container FlexLayoutHome), with auto region `Region00: UNKNOWN0`. Region04: cartpage and Region05: spacer2 follow at FlexLayoutMain level. Header, menu, signinpage, footer and the other FlexLayoutHome regions unchanged.
- Expected start matched; no stop condition.

### Component selection and dialog opening

1. Click on the FlexLayoutButtons Components row (ref from the start snapshot). Console 2.
2. Adorner identification: a canvas hover at (681, 407) showed the tooltip **`Edit FlexLayout Attributes`** (read by a read-only `browser_find`; the tooltip ref was not used for a click). The adorner's snapshot reference was absent from the untargeted snapshots, so the coordinate route was used as the brief allows.
3. **Adorner coordinate click (1): (681, 407)**, the Edit FlexLayout Attributes icon. Console 2. The dialog opened.
4. Screenshot `t3-01-attributes-dialog-at-open.png` (dialog at open).

### Starting state of the dialog (recorded, matched expectation)

- Dialog title `FlexLayout` (`dialog "FlexLayout"`).
- Attributes / Design: **Type HorizontalBox**, **Auto Size False**, **Region Index 4**, Margin blank.
- Regions grid: one row, **index 0, ID UNKNOWN0, Length 1 Flex**. The Properties pane was empty (no region selected yet).
- Discrepancy from the expected start: none.

### Region 0 (count)

- Selected the row (click 1 on region row UNKNOWN0). Properties (as displayed): ID UNKNOWN0, Length 1, Unit Flex, Orientation Horizontal, Alignment Top, Pack Start (defaults verified, not re-entered).
- ID: opened editor, plain fill `count`, Tab. Grid row became `0 | count | 1 Flex`. Correction: 0.
- Pack: opened the value cell (editor), opened the combobox with its arrow (list open: **Start, Center, End**), clicked **End**. Verified in the next dialog read (combobox shows End) and in the pre-OK screenshot (Pack End with count selected). No Tab was used for Pack.

### Region 1 (spacer)

- Regions add (+) **click 1** → exactly one row added: `1 | UNKNOWN1_USER | 1 Flex` (checked before any edit; defaults 1 Flex, Horizontal, Top, Start).
- Selected the row (auto-selected after the add; the Properties showed UNKNOWN1_USER).
- ID: opened editor, plain fill `spacer`, Tab (**see deviation D1**: the fill and the Tab were issued in one block). Grid row `1 | spacer | 1 Flex`.
- Unit: opened the Unit list via its dropdown arrow; options **FormUnit, Flex**; clicked **FormUnit**; Tab committed it. Grid row `1 | spacer | 1 FormUnit`. The Min/Max Length rows disappeared for FormUnit, as the brief predicted.
- Remaining values as displayed after the Unit commit: Orientation Horizontal, Alignment Top, Pack Start (defaults, not re-entered). Correction: 0.

### Region 2 (cart)

- Regions add (+) **click 2** → exactly one row added: `2 | UNKNOWN2_USER | 1 Flex`. Three rows total.
- Selected the row. Properties as displayed: ID UNKNOWN2_USER, Length 1, Unit Flex, Orientation Horizontal, Alignment Top, Pack Start (defaults verified, not re-entered).
- ID: opened editor, plain fill `cart`, Tab. Grid row `2 | cart | 1 Flex`. Correction: 0.

### Regions grid before OK (verified, screenshot `t3-04-regions-grid-three-rows-before-ok.png`)

| Index | ID | Length | Unit | Orientation | Alignment | Pack |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | count | 1 | Flex | Horizontal | Top | **End** (shown with count selected) |
| 1 | spacer | 1 | FormUnit | Horizontal | Top | Start (from the dialog's Properties before OK; not in the screenshot) |
| 2 | cart | 1 | Flex | Horizontal | Top | Start (from the dialog's Properties before OK; not in the screenshot) |

Unchanged in the dialog: Type HorizontalBox; Auto Size False; Region Index 4; Margin blank. No region deleted, moved or reordered; no fourth region.

### OK and Designer Save

1. **OK clicked once** (no message observed in the dialog-closed snapshot or the Save screenshot; no OK message was captured as a separate screenshot). Console 2. The dialog closed and Save became enabled.
2. **Designer Save, exactly one** (toolbar Save). Response: toast `Save — Form [FX_CustomerPortal] and global object(s) were saved.` (screenshot `t3-05-save-response.png`). Console 2 after the click and at the post-Save read.
3. Save state after: `button "Save" [disabled]` (targeted/shallow snapshot), Save icon greyed in the screenshot. Dialog closed, no menu or list open.
4. Canvas after Save (shown in `t3-05-save-response.png`): the buttons band shows two thin vertical dashed dividers at about x 775–782 running from the band top (y ≈ 395) to the footer band (y ≈ 562), splitting the band into a left region (~x 670–775), a narrow middle region (the FormUnit spacer) and a right region (~x 782–885). The count and cart widths look equal (both Flex). **Observed only**; the mapping of the dividers to count / spacer / cart is an interpretation from the widths and the grid values.

### Console count record (T3)

- Baseline at T3 start: 2 errors.
- Every tool output that showed the count read **2** (row click, adorner hover/click, region rows, ID and Pack and Unit edits, each list open and pick, each Tab, each add, OK, Save, every post-action snapshot and screenshot).
- No rise, no server-event error, no stop condition.

### Deviations (T3)

- **D1 (browser action rule):** for the spacer ID I issued the `browser_type` (fill `spacer`) and the Tab key press in the same response block. The brief forbids parallel browser actions. The two calls ran sequentially in the tool layer and the result is correct (grid `spacer`), but the rule was not followed. Recorded as a procedural deviation with no observed effect.
- **Extra screenshots (3):** the brief named three (dialog at open, the three-row Regions grid before OK, the Save response). I also took `t3-pre-dialog-canvas-selected.png` (canvas and selection before the adorner click), `t3-02-pack-list-state-region0.png` (Pack editor state) and `t3-03-pack-list-open-check.png` (the open Pack list). These were used to confirm state and are listed in the inventory.
- **Targeted snapshots of the dialog (17):** the full untargeted snapshot was too large to return inline once (it was saved to a tool-results file under a denied directory; not read, not searched). From then on the dialog was read with targeted snapshots of its container (`dialog "FlexLayout"`, the Regions grid, and the Pack combobox container). The references used for clicks came from these in-task snapshots, not from find output.
- **List reachability:** the open Pack list's option rows were not in the root or dialog snapshot. A targeted snapshot of the combobox container exposed them (`listbox` with `option` cells). Options were then picked by click on the cell reference.
- **Region 1 Unit list:** clicked the Unit dropdown arrow directly (the cell trigger) rather than first opening the value editor. Equivalent result.
- **Find use:** three `browser_find` calls (`Edit FlexLayout Attributes`, a regex for Attributes/adorner/Edit Flex, and `Regions`) were read-only; the first two identified the tooltip, and `Regions` returned stale pre-dialog content.

### Action counts (T3 only)

| Category | T3 count |
| --- | --- |
| Tab list / tab select | 1 / 1 |
| Snapshot calls | 25 (8 untargeted: 6 full or depth-limited, incl. 1 oversized; 17 targeted to the dialog or its containers) |
| Finds (read-only) | 3 |
| Ref clicks (incl. list opens, option picks, region rows, OK, Save) | 16 |
| Coordinate clicks | 1 (adorner, (681, 407)) |
| Mouse moves (hover) | 1 |
| Wheel scrolls | 0 |
| Toolbox selections | 0 |
| Placement clicks | 0 |
| Undo clicks | 0 |
| Dialog opens / OK / Cancel | 1 / 1 / 0 |
| Region adds | 2 (one each; each verified) |
| Region row selections (clicks) | 3 (region 0, region 2, count row for the pre-OK screenshot) |
| Per-field entries: text / list picks | 3 text (ID count, ID spacer, ID cart) / 2 list picks (Pack End, Unit FormUnit) |
| List opens | 2 (Pack, Unit) |
| Corrections | 0 |
| Keypresses (Tab) | 4 (after count, spacer, FormUnit commit, cart) |
| Designer Saves (with response) | 1 |
| Form closes / reopens | 0 / 0 |
| Screenshots | 6 (3 prescribed + 3 extra: see deviations) |
| Server-event errors / ref-not-found / re-logins | 0 / 0 / 0 |
| Dragging / Regenerate / Delete Form Definition / Select Form OK | 0 / 0 / 0 |
| Browser evaluate / run-code calls by the worker | 0 |
| Console error count | 2 at every reading shown (no rise) |

### Cumulative browser action audit (T1 + T2 + T3)

| Category | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list / tab select | 1 / 1 | 1 / 1 | 1 / 1 | 3 / 3 |
| Snapshot calls (untargeted / targeted) | 4 / 1 | 7 / 1 | 8 / 17 | 19 / 19 (38) |
| Finds (read-only) | 0 | 1 | 3 | 4 |
| Toolbox selections | 0 | 1 | 0 | 1 |
| Placement coordinate clicks | 0 | 1 | 0 | 1 |
| Adorner coordinate clicks | 0 | 0 | 1 | 1 |
| View-only clicks | 3 | 2 | 0 | 5 |
| Ref clicks (edits, selections, OK, Save) | 0 | 1 (Name value) + 1 (Save) | 16 | 18 (incl. Name value and Save; excludes view-only and tab clicks) |
| Mouse moves (hover) | 1 | 1 | 1 | 3 |
| View-only wheel scrolls | 1 | 3 | 0 | 4 |
| Keypresses | 0 | 2 | 4 | 6 |
| Text entries (ID, Name) / corrections | 0 | 1 / 0 | 3 / 0 | 4 / 0 |
| List opens / list picks | 0 | 0 | 2 / 2 | 2 / 2 |
| Region adds | 0 | 0 | 2 | 2 |
| Dialog opens (OK / Cancel) | 0 (0 / 0) | 0 (0 / 0) | 1 (1 / 0) | 1 (1 / 0) |
| Designer Saves | 0 | 1 | 1 | 2 |
| Undo clicks | 0 | 0 | 0 | 0 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Dragging / Regenerate / Delete Form Definition | 0 | 0 | 0 | 0 |
| Server-event errors / ref-not-found / re-logins | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Screenshots | 2 | 6 | 6 | 14 |
| Console error count | 2 | 2 (no rise) | 2 (no rise) | 2 |

### Worker-written file inventory (cumulative through T3)

- `experiments/EXP-113-hello-world-part-7-section-10-flexlayoutbuttons.md` (created in T1; updated in T2 and T3).
- `evidence/EXP-113/t1-gate-tree-and-canvas.png` (T1).
- `evidence/EXP-113/t1-gate-canvas-scrolled-buttons-band.png` (T1).
- `evidence/EXP-113/t2-pre-placement-canvas.png` (T2).
- `evidence/EXP-113/t2-placement-flexlayoutbuttons-tree-and-canvas.png` (T2).
- `evidence/EXP-113/t2-placement-properties-layout-defaults.png` (T2).
- `evidence/EXP-113/t2-placement-properties-layout-defaults-scrolled.png` (T2).
- `evidence/EXP-113/t2-placement-properties-layout-values.png` (T2).
- `evidence/EXP-113/t2-save-response.png` (T2).
- `evidence/EXP-113/t3-pre-dialog-canvas-selected.png` (T3, extra).
- `evidence/EXP-113/t3-01-attributes-dialog-at-open.png` (T3).
- `evidence/EXP-113/t3-02-pack-list-state-region0.png` (T3, extra).
- `evidence/EXP-113/t3-03-pack-list-open-check.png` (T3, extra).
- `evidence/EXP-113/t3-04-regions-grid-three-rows-before-ok.png` (T3).
- `evidence/EXP-113/t3-05-save-response.png` (T3).

Tool-written (not worker-written): browser snapshot files under `evidence/playwright/` (for example `page-2026-10-18T11-01-50-998Z.yml`), console logs (for example `console-2026-10-18T10-57-42-034Z.log`), and one oversized snapshot saved under the tool-results directory (not read, not searched).

### Cleanup inventory (cumulative through T3)

- Created in Mongoose so far: **FlexLayoutButtons** (new FlexLayout, User scope, FX_CustomerPortal, Region04: buttons, Flex Attributes Index 4 Target buttons).
- Its regions: **count** (index 0; 1 Flex, Horizontal, Top, End), **spacer** (index 1; 1 FormUnit, Horizontal, Top, Start), **cart** (index 2; 1 Flex, Horizontal, Top, Start). The original auto region UNKNOWN0 was renamed to count (the dialog's ID change, not a deletion or add); UNKNOWN1_USER became spacer and UNKNOWN2_USER became cart. Cleanup must cover FlexLayoutButtons and its three regions.
- No global object, Theme Class, binding, event, Form property or other component created or changed.

### Acceptance checks (T3 portion)

- **AC-1:** re-verified at T3 start (User scope; FX_CustomerPortal open and clean; FlexLayoutHome's five regions and the other components unchanged, with only FlexLayoutButtons added under Region04: buttons; console 2). Evidence: the T3 start snapshot and `t3-pre-dialog-canvas-selected.png`.
- **AC-2 (T3 part):** met for the dialog path.
  - Starting state recorded and matched (Type HorizontalBox, Auto Size False, Region Index 4, one region 0 UNKNOWN0 1 Flex). Evidence: `t3-01-attributes-dialog-at-open.png`.
  - Type unchanged; Auto Size, Region Index and Margin unchanged.
  - Regions: count (1 Flex, Horizontal, Top, End), spacer (1 FormUnit, defaults), cart (1 Flex, Horizontal, Top, Start) each displayed after entry. Evidence: `t3-04-regions-grid-three-rows-before-ok.png`.
  - Region adds: one at a time, exactly one row each time (2 adds).
  - OK once, then one Designer Save with its toast response. Evidence: `t3-05-save-response.png`.
  - Console count 2 after every action; no rise, no server-event error.
  - Corrections: 0 (at most one allowed per field).
- **AC-3, AC-5:** not yet applicable (T4 readback and audit not run).
- **AC-4 (T3 part):** no other component, region or Form property changed; the outer FlexLayoutHome regions unchanged; no global object; no Type change; no Theme Class, binding or event; no drag; Undo not used; no runtime action; no unload; no checkout action. Task boundary respected: T4 not started.

### Findings (observed, T3)

1. The attributes dialog for a nested FlexLayout opens from its canvas adorner whose tooltip is `Edit FlexLayout Attributes` (confirmed by hover). Classification: observed.
2. The Regions add (+) appends one row per click with defaults UNKNOWN<n>_USER, 1 Flex, Horizontal, Top, Start. Classification: observed (2 adds).
3. Unit FormUnit hides Minimum Length and Maximum Length; the Properties rows for Orientation, Alignment and Pack remained. Classification: observed.
4. Pack list options are Start, Center, End; Unit list options are FormUnit, Flex (Flex is the default). Classification: observed.
5. After Save, the buttons band shows two dividers that split it into three regions (count, a narrow spacer and cart). Classification: observed; the mapping is an interpretation from widths and grid values.
6. The Properties header label behavior (EXP-105) recurs only as recorded in T2; the dialog Properties and the Regions grid were the verification sources.

### Open questions and limits (T3)

- The OK click produced no message that was captured; the post-OK snapshot and the Save screenshot show no dialog message, only the Save toast. Not separately evidenced.
- The spacer's Orientation / Alignment / Pack and the cart's Pack were read from the dialog's Properties (snapshot text) before OK, not from a screenshot. The count Pack End is in `t3-04`.
- The Regions grid after the Save and the reopen have not been re-read (T4).
- Same-session observations only; no close/reopen, no cross-session durability claimed (T4 scope).
- The Pack commit for count was verified by re-selecting the count row (the Properties showed End) rather than by a Tab, which is an observed difference from the ID and Unit commits.

### Final state (end of T3)

- Designer tab 0: `FX_CustomerPortal`, User scope, Save disabled, no dialog, no menu, no list, no editor open, no unsaved change.
- The Details panel shows the Components tab with the tree collapsed to `Pane (00)` after the Save (view state only).
- Canvas: the buttons band shows the three-region dividers.
- Console baseline: 2 errors.
- Next permitted step: **T4 (readback and audit)** in a new task: fresh snapshot; close the clean FX_CustomerPortal once through its Form-tab control (answer No to any save prompt and record its text); reopen once through the Form menu recent-forms entry; check the Components tree and FlexLayoutButtons' attributes dialog read-only (Cancel once); write the final audit. T4 was not started in T3.

---

## T4 — ordinary close and reopen readback, then the final audit (cycle 4, task T4)

Scope: one close and one reopen of FX_CustomerPortal, read-only readback of FlexLayoutButtons and its three regions, one read-only dialog open with Cancel, and this audit. No property was changed, no Designer Save was invoked, and no Undo, OK or region edit was made. Operator disposition (applied): T3 accepted with qualifications (D1 parallel spacer ID fill and Tab; denied read of a tool-results file; extra screenshots; targeted dialog snapshots). Those qualifications are preserved here.

### Start check (T4)

- Tab list (before selection): tab 0 = Designer for `FX_CustomerPortal`, tab 1 = Web Client. Tab 0 selected after the list.
- Fresh snapshot after the operator pause: FX_CustomerPortal, `ScopeType: User`, Save disabled, Undo and Redo disabled, no dialog or menu open, **console 2 errors, 0 warnings** (unchanged from T3). The Components tree had collapsed to `Pane (00)` during the pause; it was expanded by one view-only click on the grid's Expand.
- Tree after expansion (targeted snapshot of the grid): the Region04: buttons row is followed by `FlexLayoutButtons` (FlexLayout, container FlexLayoutHome, pane 0), then `Region00: count`, `Region01: spacer`, `Region02: cart`, and then `Region04: cartpage`. Region05: spacer2, the footer and its UNKNOWN0 are unchanged. Everything else matched T1–T3.
- Gate: met before the close.

### Close and reopen (one each)

1. **Close:** clicked the Form-tab close control (`closable FX_CustomerPortal`, from a fresh untargeted snapshot). The tab closed. **No save prompt appeared**: none is visible in the snapshot taken after the close, and the URL dropped `MGForm=FX_CustomerPortal`. Prompt text: none recorded (no prompt). Console 2.
2. **Reopen:** opened the Form menu, then clicked `FX_CustomerPortal` in the recent-forms list (menu read by a targeted snapshot of the menu). The Form reopened in User scope, Save disabled, no dialog open. Console 2. The first Form-menu click was the menu open; the second click was the recent-forms entry. Form Select OK was not used.
3. The reopened Form showed the Details panel collapsed. Expanded Details (view), switched to the Components tab (view), and expanded the tree (view).

### Readback of the tree after reopen (AC-3)

From the targeted snapshot of the Components panel after the reopen, and from the reopened canvas and tree screenshots:

- `Region03: homepage` > `FlexLayoutHome` (FlexLayout, pane 0, container FlexLayoutMain) with Region00: header, Region01: spacer, Region02: grid, Region03: spacer2 and **Region04: buttons**.
- **Region04: buttons > `FlexLayoutButtons`** (FlexLayout, pane 0, container **FlexLayoutHome**), with children **Region00: count**, **Region01: spacer**, **Region02: cart** in that order. Only these three children are listed under FlexLayoutButtons. Screenshot `t4-04-reopened-tree-buttons-rows-visible.png` shows this indentation: FlexLayoutButtons is indented under Region04: buttons, and the count, spacer and cart rows are indented one level below it. Region04: cartpage follows at the FlexLayoutMain level.
- Unchanged, compared with T1: the root flexlayoutPane_FX_CustomerPortal, FlexLayoutHeader and its Statics, FlexLayoutMain and its six regions (menu with three buttons, spacer1, signinpage with five components, homepage, cartpage, spacer2), the five FlexLayoutHome regions (only buttons gained children), and FlexLayoutFooter with Region00: UNKNOWN0.
- Limitation: the snapshot text lists the rows flat. The nesting is visible only in the screenshot (`t4-04`), and `t4-01`/`t4-03` show the buttons rows less clearly.

### Canvas readback of the buttons band (AC-3)

- Screenshot `t4-02-reopened-buttons-band-and-tree-rows.png` and `t4-03-reopened-tree-buttons-rows-and-canvas.png` (canvas scrolled 300 px by the wheel, view only): the buttons band (homepage column, below the spacer2 divider, about y 395–562) now shows **two thin vertical dashed dividers at about x 775–782**, running the full height of the band. They split the band into a left column (about x 670–775, roughly 105 px), a very narrow middle column (about 7 px, the FormUnit spacer) and a right column (about x 782–885, roughly 103 px). **Observed.** The mapping of the left column to count and the right to cart is an interpretation from the widths and the readback values (both Flex, equal widths; the narrow spacer is FormUnit). **Unresolved** only in the strict sense that no per-region outline was read.
- In T2 the freshly placed FlexLayout showed only a thin outline at the top of the band. After the T3 regions the three columns span the band height. The cause of this change is not established by these observations (Size was not changed; the regions' Orientation and Length drive the column layout). Not investigated further, per the brief.

### Attributes dialog readback (read-only, AC-3)

1. Selected FlexLayoutButtons by its Components row (treeitem click). The Designer kept the Form tab; the Properties panel still showed the Form. A second click on the row's Type cell switched the Designer to the component (Properties then showed `FlexLayoutButtons (FlexLayout)`, the Component tab selected, and the canvas adorner icons at the top of the buttons band). **Observed; see Findings.**
2. Hovered the first adorner icon at (681, 407). Read-only `browser_find` returned the tooltip **`Edit FlexLayout Attributes`**. No adorner reference was present in the snapshots, so the coordinate click was used. **Adorner coordinate click (T4): (681, 407), once.** The dialog `FlexLayout` opened.
3. Dialog-level values (targeted snapshot of the dialog, and `t4-07-readback-dialog-regions-grid.png`): **Type HorizontalBox**, **Auto Size False**, **Region Index 4**, **Margin blank** (unchanged). Regions grid: **0 count 1 Flex**, **1 spacer 1 FormUnit**, **2 cart 1 Flex** (three rows).
4. Each region was selected by clicking its ID cell (a selection only; no value edited, no list opened) and read from the Properties pane by a targeted snapshot of the dialog after each selection:

| Index | ID | Length | Unit | Orientation | Alignment | Pack | Min / Max Length rows |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | **count** | 1 | **Flex** | **Horizontal** | **Top** | **End** | shown (Flex unit) |
| 1 | **spacer** | 1 | **FormUnit** | **Horizontal** | **Top** | **Start** | hidden (FormUnit) |
| 2 | **cart** | 1 | **Flex** | **Horizontal** | **Top** | **Start** | shown (Flex unit) |

   Default Margin rows were present and blank for each region. **All values match the plan.** Values are as displayed in snapshot text (the screenshot shows only the grid and the empty Properties pane at dialog open), so these values are snapshot-text observations, not screenshot observations.
5. **Cancel clicked once** (`Cancel`, the read-only dialog). The dialog closed. Afterwards: Save disabled, no dialog, no menu, no list open. Console 2. **No Designer Save was invoked in T4.**

### Console and state

- Console error count was 2 at every reading shown in tool output (start, close, reopen menu, reopen, expand/tab clicks, tree, selection, adorner hover and click, dialog reads, region clicks, Cancel, the final snapshot). No rise. No server-event error. No stop condition met.
- Final: `FX_CustomerPortal` open in User scope (status bar `ScopeType: User`), Save disabled, no dialog, menu or list open, no unsaved change.

### Screenshots (T4, decisive set plus extras)

- `t4-01-reopened-canvas-and-tree.png`: after reopen, Components tree at the top (Pane/FlexLayoutHeader rows) and the canvas above the buttons band. **Does not show the buttons rows** (superseded by t4-04).
- `t4-02-reopened-buttons-band-and-tree-rows.png`: canvas scrolled to the buttons band (dividers visible); tree scrolled too far (footer rows). Shows the band, not the buttons tree rows.
- `t4-03-reopened-tree-buttons-rows-and-canvas.png`: canvas at the buttons band (dividers visible); tree shows Region04: buttons at its bottom edge, FlexLayoutButtons row just below the viewport. Partly shows the buttons rows.
- `t4-04-reopened-tree-buttons-rows-visible.png` (**decisive**, AC-3): tree shows `Region04: buttons` > `FlexLayoutButtons` (FlexLayout, FlexLayoutHome) > `Region00: co…`, `Region01: sp…`, `Region02: cart`, then `Region04: cartpage`. The canvas in this image also shows the buttons band with its dividers (x about 775–782, y about 395–562) above the teal footer band. Proves the tree nesting and the band dividers after reopen; does not prove region values.
- `t4-05-selected-buttons-adorner-check.png`: after the first treeitem click; Properties still show FX_CustomerPortal. Shows the selection gap described in Findings.
- `t4-06-selected-buttons-properties-and-adorner.png`: after the Type-cell click; Properties show `FlexLayoutButtons (FlexLayout)`, Name `FlexLayoutButtons`; adorner icons at (681, 407). Proves selection, not the dialog.
- `t4-07-readback-dialog-regions-grid.png` (**decisive**, AC-3): dialog at open: Type HorizontalBox, Auto Size False, Region Index 4, Margin blank; Regions grid rows 0 count 1 Flex, 1 spacer 1 FormUnit, 2 cart 1 Flex; Properties pane empty (no region selected at this moment). Region values come from the snapshot text above, not this image.
- Screenshot limitations: none of the T4 images shows the Pack or Orientation values of spacer or cart. Those are snapshot-text observations.

### Findings (T4, observed)

1. **Close and reopen:** the Form-tab close and the recent-forms reopen worked with no save prompt, because the Form had no unsaved change. The reopened Form carried all three regions with the planned values (same session).
2. **Dialog readback after reopen:** count Pack End; spacer FormUnit (Min/Max Length hidden); cart Pack Start. All other applicable values matched T3.
3. **Tree selection quirk:** clicking the FlexLayoutButtons treeitem highlighted the row but did not change the Designer's Properties panel (still the Form). A second click on the same row's Type cell changed the Designer selection. Classification: observed; cause not investigated.
4. **Targeted snapshot invalidates other refs:** a targeted snapshot of the Components grid made the Form-tab ref e244 "not found" (one `Ref not found`, recovered by one fresh untargeted snapshot). This repeats EXP-112 finding 4.
5. **Adorner identification:** the first buttons-band adorner's hover tooltip is `Edit FlexLayout Attributes`; the coordinate click at (681, 407) opened the attributes dialog. Adorner references were not present in untargeted snapshots (same as T3).
6. **Collapsed tree after pause:** the Components tree had collapsed during the operator pause and had to be expanded (view only) before the readback.
7. **Band dividers:** the buttons band shows three columns after the T3 regions (see the canvas readback above). The cause of the change from T2's thin outline is unresolved.

### Acceptance checks (final)

- **AC-1:** met. Sources reviewed at each task start (T1 full; T2–T4 continuation sources). Session usable in all tasks; no expiry, sign-in or logout card seen. User scope in every task (status bar). FX_CustomerPortal open and clean at T1 and T4 starts. FlexLayoutHome's five regions empty in T1 before placement; other components unchanged throughout (tree compared at T1, T2, T3 and T4). Buttons band located in T1 (below the spacer2 divider; one view-only scroll needed). Baseline console 2. Evidence: `t1-gate-tree-and-canvas.png`, `t1-gate-canvas-scrolled-buttons-band.png`.
- **AC-2:** met. T2: FlexLayoutButtons placed as the only child of Region04: buttons, with auto region UNKNOWN0; named FlexLayoutButtons (verified in the tree and the Name row); one Designer Save (toast). T3: dialog starting state recorded and matched; Type unchanged; regions count, spacer and cart each displayed after entry; two region adds, one row each; OK once; one Designer Save (toast); console 2 at every reading; corrections 0. Evidence: `t2-placement-flexlayoutbuttons-tree-and-canvas.png`, `t2-save-response.png`, `t3-01-attributes-dialog-at-open.png`, `t3-04-regions-grid-three-rows-before-ok.png`, `t3-05-save-response.png`. Qualifications: D1 (parallel spacer ID fill and Tab); the OK response is not separately captured (none seen in the Save screenshot or the snapshots); spacer and cart Orientation, Alignment and Pack are snapshot-text observations, now re-verified in T4 readback (snapshot text).
- **AC-3:** met for same-session readback. After one ordinary close (Form-tab control, no save prompt) and one reopen (recent-forms entry): FlexLayoutButtons is under Region04: buttons with Region00: count, Region01: spacer and Region02: cart in order; the attributes dialog shows the planned values (Type HorizontalBox, Auto Size False, Region Index 4; count 1 Flex Horizontal Top End; spacer 1 FormUnit Horizontal Top Start; cart 1 Flex Horizontal Top Start); other components unchanged; Form open and clean. Evidence: `t4-04-reopened-tree-buttons-rows-visible.png` (tree rows, decisive), `t4-07-readback-dialog-regions-grid.png` (regions grid, decisive), `t4-02` and `t4-03` (canvas band). Limit: same session only; no cross-session durability or replay claim.
- **AC-4:** met for the actions in this task and the whole run as recorded. No other component, region or Form property changed (tree compared with T1); no global object; no Type, Auto Size, Region Index or Margin change; no Theme Class, binding or event; no drag; Undo not used in any task; no runtime action; no unload; no checkout action; no FormSync or deployment; no Regenerate; no Select Form OK; User scope only; the task boundary respected (T4 stopped after the audit). Designer Saves across the run: 2 (T2 and T3), none in T1 or T4.
- **AC-5:** met as stated in the audit below. Counts are the worker's own in-context tallies; controller reconciliation was not available to the worker (see the audit notes).

### Cumulative browser action audit (T1–T4, exact worker counts)

| Category | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Tab list / tab select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 4 / 4 |
| Snapshot calls, untargeted / targeted | 4 / 1 | 7 / 1 | 8 / 17 | 10 / 8 | 29 / 27 (56) |
| Snapshot errors (`Ref not found`) | 0 | 0 | 0 | 1 | 1 |
| Finds (read-only `browser_find`) | 0 | 1 | 3 | 1 | 5 |
| Toolbox selections | 0 | 1 | 0 | 0 | 1 |
| Placement coordinate clicks | 0 | 1 | 0 | 0 | 1 |
| Adorner coordinate clicks | 0 | 0 | 1 | 1 | 2 |
| View-only ref clicks (expand, tab, Details, Layout, expand-all) | 3 | 2 | 0 | 4 | 9 |
| Ref clicks: selections, Name value, region rows, list opens, list picks, OK, Cancel, Save, Form menu, close, reopen | 0 | 2 (Name value, Save) | 16 | 9 | 27 |
| Total clicks (all kinds) | 3 | 6 | 17 | 14 | 40 |
| Mouse moves (hover) | 1 | 1 | 1 | 4 | 7 |
| Wheel scrolls, view only | 1 | 3 | 0 | 4 | 8 |
| Keypresses (Tab, ArrowRight) | 0 | 2 | 4 | 0 | 6 |
| Text entries (Name, ID) / corrections | 0 / 0 | 1 / 0 | 3 / 0 | 0 / 0 | 4 / 0 |
| Region adds | 0 | 0 | 2 | 0 | 2 |
| List opens / list picks | 0 | 0 | 2 / 2 | 0 | 2 / 2 |
| Dialog opens (OK / Cancel) | 0 (0 / 0) | 0 (0 / 0) | 1 (1 / 0) | 1 (0 / 1) | 2 (1 / 1) |
| Designer Saves (each with a toast) | 0 | 1 | 1 | 0 | 2 |
| Undo clicks | 0 | 0 | 0 | 0 | 0 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 1 / 1 |
| Save prompts seen (answered) | 0 | 0 | 0 | 0 (none) | 0 |
| Dragging / Regenerate / Delete Form Definition / Select Form OK | 0 | 0 | 0 | 0 | 0 |
| Server-event errors / re-logins / session expiries | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Browser evaluate / run-code calls by the worker | 0 | 0 | 0 | 0 | 0 |
| Screenshots | 2 | 6 | 6 | 7 | 21 |
| Console error count | 2 | 2 | 2 | 2 | 2 (no rise) |

Audit notes:
- Counts are the worker's in-context tallies from each task. T1–T3 totals were recorded in those tasks' own tables; T4 was tallied in this task. The controller's count is not available to the worker, so **no controller reconciliation is claimed**. Where the T2 tally shows "8 snapshots" and T3 shows "25", those are the worker's figures.
- The T2 and T3 "ref clicks" in the table are as listed in each task's table. The T2 "Ref clicks" count excludes the Toolbox selection and the placement click (both listed separately).
- Adorner coordinate clicks: two in total (T3 and T4), both at (681, 407) after confirming the tooltip `Edit FlexLayout Attributes` with a read-only find; no adorner reference existed in the snapshots at the time.
- The T4 "Ref clicks" count of 9 includes the Form menu open click and the recent-forms entry click (lifecycle, navigation-within-Designer), the close click (lifecycle), five selection clicks (treeitem, Type cell, three region ID cells), and Cancel.

### Worker-written file inventory (cumulative, T1–T4)

Record (`experiments/`):
- `experiments/EXP-113-hello-world-part-7-section-10-flexlayoutbuttons.md` (created in T1; updated in T2, T3 and T4).

Evidence (`evidence/EXP-113/`, 21 PNG files, all worker-written):
- T1: `t1-gate-tree-and-canvas.png`, `t1-gate-canvas-scrolled-buttons-band.png`.
- T2: `t2-pre-placement-canvas.png`, `t2-placement-flexlayoutbuttons-tree-and-canvas.png`, `t2-placement-properties-layout-defaults.png`, `t2-placement-properties-layout-defaults-scrolled.png`, `t2-placement-properties-layout-values.png`, `t2-save-response.png`.
- T3: `t3-pre-dialog-canvas-selected.png`, `t3-01-attributes-dialog-at-open.png`, `t3-02-pack-list-state-region0.png`, `t3-03-pack-list-open-check.png`, `t3-04-regions-grid-three-rows-before-ok.png`, `t3-05-save-response.png`.
- T4: `t4-01-reopened-canvas-and-tree.png`, `t4-02-reopened-buttons-band-and-tree-rows.png`, `t4-03-reopened-tree-buttons-rows-and-canvas.png`, `t4-04-reopened-tree-buttons-rows-visible.png`, `t4-05-selected-buttons-adorner-check.png`, `t4-06-selected-buttons-properties-and-adorner.png`, `t4-07-readback-dialog-regions-grid.png`.

Total worker-written files: **22** (1 record + 21 PNG). No other file written by the worker in this experiment. The worker did not edit any AGENTS.md, brief, tutorial, recipe or other experiment record.

Tool-written, not worker-written (for the operator): browser snapshot files under `evidence/playwright/` (for example `page-2026-10-18T11-37-34-669Z.yml`, `page-2026-10-18T11-35-18-774Z.yml`), console logs under `evidence/playwright/` (for example `console-2026-10-18T11-34-04-714Z.log`), and one oversized snapshot saved under the tool-results directory in T3, which the worker did not read or search (the same file was denied in T4 when the worker tried to read it).

Git confinement: the worker wrote only the paths above. Repository confinement is supported by this inventory and the harness inventory; operator git review is authoritative.

### Cleanup inventory (for the operator; not performed by the worker)

The experiment created one Mongoose artifact and its three regions. All are on FX_CustomerPortal, User scope:

1. **FlexLayoutButtons** (FlexLayout; Type HorizontalBox; Flex Attributes Index 4, Target buttons; Size `30; 8.82…`; Name set in T2). Located under FlexLayoutHome > Region04: buttons.
2. **count** (region index 0): 1 Flex, Horizontal, Top, End. Originally the auto region UNKNOWN0 (renamed in T3).
3. **spacer** (region index 1): 1 FormUnit, Horizontal, Top, Start. Added in T3 (UNKNOWN1_USER renamed).
4. **cart** (region index 2): 1 Flex, Horizontal, Top, Start. Added in T3 (UNKNOWN2_USER renamed).

Removal would be a component delete of FlexLayoutButtons (which takes its regions) through the Details > Components trash button after its confirmation, and then a Designer Save. No such action was taken in this experiment, and none is authorized by the brief.

No global object, Theme Class, binding, event, string, image, variable, IDO, SQL object or Form property was created or changed.

### Final state (end of T4)

- Designer tab 0: `FX_CustomerPortal` reopened once (recent-forms entry), User scope, **Save disabled**, **no dialog, menu, list or editor open**, no unsaved change.
- Details panel open on the Components tab with the tree expanded (view state only). Canvas scrolled to the buttons band (view state only). Properties panel shows the Form (Properties header is in Form mode after the Cancel).
- Console baseline: 2 errors, 0 warnings.
- Web Client tab 1: untouched.
- Designer Saves: 2 in the run (T2, T3). None in T4.
- **No further browser work is authorized by this brief.** The experiment's steps T1–T4 are complete.

### Deviations and qualifications (accepted and preserved)

- **D1 (T3):** the spacer ID fill and the Tab press were issued in one response block, which the brief forbids for browser actions. The result was correct. Accepted by the operator disposition.
- **Denied tool-results read (T3):** an oversized snapshot was saved to a tool-results file; a later attempt to read it was denied by the harness. Not read or searched by the worker. Accepted by the operator disposition.
- **Extra screenshots:** T3 (3 extra) and T4 (4 extra: `t4-01`, `t4-02`, `t4-05`, `t4-06`). Accepted.
- **Targeted dialog snapshots:** T3 (17 targeted) and T4 (8 targeted, including the one error). Accepted.
- **Ref e244 not found (T4):** after a targeted snapshot of the grid, the Form-tab ref was stale. Recovered with one fresh untargeted snapshot (the one allowed recovery in T4).
- **Coordinate adorner clicks (T3, T4):** used because no adorner reference existed in the snapshots; tooltip confirmed before each click.
- **Tree selection gap (T4):** a treeitem click did not switch the Designer selection; a Type-cell click did. Observed; no change to the Form resulted.
- **Region values read from snapshot text (T3 pre-OK; T4 readback):** spacer and cart Orientation, Alignment and Pack, and count's ID-to-Pack values in T4, are snapshot-text observations rather than screenshot observations. The screenshots do not show them.
- **OK response not captured (T3):** no separate OK message was seen in the snapshots or the Save screenshot. The Save toast is the only response captured.
- **Save state at T2/T3 ends:** the Save button was disabled after each Save (snapshot). Both Save toasts were captured.

### Knowledge state (per finding; observed only)

- Placement of a FlexLayout in the empty buttons band via the Toolbox row and one canvas click creates it as the only child of Region04: buttons with auto region UNKNOWN0 — **observed** (same session).
- The Flex Attributes of the placed FlexLayout read `Type: HorizontalBox … Index: 4 Target: buttons` — **observed** (snapshot text).
- The Regions add (+) appends one UNKNOWN<n>_USER row per click with defaults 1 Flex, Horizontal, Top, Start — **observed** (T3, two adds).
- Unit FormUnit hides Min/Max Length rows; Unit Flex shows them — **observed** (T3 and T4).
- Pack options Start, Center, End; Unit options FormUnit, Flex — **observed** (T3 list reads).
- The attributes dialog opens from the adorner whose tooltip is `Edit FlexLayout Attributes` — **observed** (T3, T4).
- Close (Form-tab control) and reopen (recent-forms entry) of the clean Form produce no save prompt and preserve the configured regions — **observed** (same session only). Not a cross-session durability or replay claim.
- Tree selection of a treeitem may not switch the Designer selection; a second click on the row did — **observed**, cause unresolved.
- Targeted snapshots invalidate refs outside their subtree (repeats EXP-112) — **observed**.
- Three region columns are visible on the buttons band after the T3 regions, with the mapping to count, spacer and cart interpreted from widths and values — **observed** for the columns; **unresolved** for the mapping and for the cause of the change from T2's thin outline.
- Whether the buttons band should fill (Orientation Fill) and whether Size `30; 8.82…` should change — **unresolved**; the brief kept Size unchanged and did not ask for a fix.

### Open questions for the operator (no action taken)

1. Accept the same-session close and reopen readback as AC-3 evidence, given that no cross-session durability was tested (the brief says this must not be claimed).
2. Decide whether the buttons band should fill and whether Size needs review in a later section; this is not in scope for EXP-113.
3. Reconcile the worker's action counts with the controller audit (the worker cannot see the controller's counts).
4. Decide the cleanup of FlexLayoutButtons and its three regions (see the cleanup inventory).

## Outcome (operator, 2026-10-18)

Accepted (observed), with qualifications. **Hello World Part 7 Section 10 is complete: FlexLayoutHome > Region04: buttons of FX_CustomerPortal (User scope) holds FlexLayoutButtons (Type HorizontalBox, unchanged default; Auto Size False; Region Index 4) with regions count (1 Flex, Horizontal, Top, End), spacer (1 FormUnit, Horizontal, Top, Start) and cart (1 Flex, Horizontal, Top, Start), read back in its attributes dialog after an ordinary close and reopen.** Run R-20261018-184829-wrpF (4 worker tasks).

- Changed, for later cleanup (User-scope Form FX_CustomerPortal): new FlexLayout FlexLayoutButtons in FlexLayoutHome's buttons region; its auto region UNKNOWN0 renamed count (Pack End); two regions added one at a time (spacer with Unit FormUnit; cart at defaults). Two Designer Saves (T2, T3), each with the standard toast; dialog OK once (T3), Cancel once (T4). No global object, no Type change, Theme Class, binding or event, no Regenerate, no Undo, no correction.
- Screenshots viewed by the operator assistant: `t4-04-reopened-tree-buttons-rows-visible` (after reopen: Region04: buttons > FlexLayoutButtons, container FlexLayoutHome > Region00: count, Region01: spacer, Region02: cart; canvas buttons band split by two dividers into left column, narrow spacer, right column); `t4-07-readback-dialog-regions-grid` (Type HorizontalBox, Auto Size False, Region Index 4; grid 0 count 1 Flex, 1 spacer 1 FormUnit, 2 cart 1 Flex).
- Console (operator assistant, tool-written logs `evidence/playwright/console-2026-10-18T10-48*` to `T11-34*`): only the baseline "unload" permissions-policy errors; no HTTP 4xx/5xx, no GenerateServerEvent failure, no TypeError. The worker's count stayed at 2 throughout.
- Findings (observed):
  1. A FlexLayout placed in FlexLayoutHome's buttons region gets Flex Attributes `Type: HorizontalBox Regions: 00: UNKNOWN0 Index: 4 Target: buttons` and Size 30; 8.82; before its regions were set it drew only a thin outline at the top of the band; after the three regions its columns span the band height.
  2. The canvas band shows the regions as columns of equal Flex width (count, cart) around a narrow FormUnit spacer, consistent with HorizontalBox.
  3. Pack options are Start, Center, End; Unit options FormUnit, Flex; a clicked list option committed without Tab (count Pack End), as did option click plus Tab (spacer Unit).
  4. After the reopen, one click on FlexLayoutButtons' Components row left Properties on the Form; a second click on the row's Type cell switched Properties to the component and showed its adorners.
  5. The open list's options were reachable only through a targeted snapshot of the combobox container.
- Operator rulings during the run: the T3 completed-with-denials pause (one denied Read of the worker's own tool-results file outside the repository, nothing read) was approved; the T3 parallel spacer ID fill and Tab was accepted as a procedural deviation with a verified result.
- Qualifications accepted by the operator: same-session close and reopen (as in every earlier Part 7 experiment); extra screenshots (T2 Layout defaults, T3 Pack list states, T4 selection checks); dialog region values partly from snapshot text; one view-only canvas scroll of 300 px; worker and controller counts accepted as recorded without further reconciliation.
- Out of scope, noted only: whether the buttons band or FlexLayoutButtons' Size needs review later.
- Confinement (git status): only `evidence/EXP-113/` and this record were written by the run in the repository.
- Cleanup inventory (Section 10): FlexLayout FlexLayoutButtons and its three regions on FX_CustomerPortal (User scope).
- Next: Hello World Part 7 Section 11 (17:59-18:55): Static StaticHome in FlexLayoutHome's header region (Caption FX_sHome, Theme Class FX_Header, Justification Center, Size 20; 1.5, No Colon True) and Grid GridItems in its grid region bound to the Items secondary collection; the narrated Regenerate Form needs explicit authorization.

