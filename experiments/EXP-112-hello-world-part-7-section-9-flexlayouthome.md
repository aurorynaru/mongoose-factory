# EXP-112: Hello World Part 7 Section 9: FlexLayoutHome in the homepage region

Status: **T1 to T5 recorded, 2026-10-18. The run is complete as briefed; findings are observed only; not unconditionally accepted.** T1 (read-only gate and carried EXP-111 readback). T2 (placement, name, one Designer Save). T3 (attributes dialog: Type VerticalBox, regions header and spacer, OK, one Designer Save). T4 (grid, spacer2 and buttons; OK; one Designer Save). T5 (same-session close and reopen readback, one Cancel, final audit).
Environment: Mongoose Web Designer, configuration group G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT, editing scope User (anton.ramos@3mworks.com.ph).
Form: FX_CustomerPortal (User scope). No other Form is touched.
Brief source: `docs/mongoose/transcripts/hello-world-pt7.md` lines 241-255 (Section 9) and lines 492-504 (15:24-16:54).

## Goal (from the brief)

Build Hello World Part 7 Section 9 on FX_CustomerPortal: a nested FlexLayout **FlexLayoutHome** in FlexLayoutMain > Region03: homepage, Type VerticalBox, with five regions in order: header (4 FormUnit, Horizontal, Middle, Center), spacer (1 FormUnit), grid (2 Flex, Fill), spacer2 (1 FormUnit), buttons (1 Flex, Fill).

Task plan: T1 read-only gate and carried readback (this task); T2 place and name FlexLayoutHome (one Save); T3 Type VerticalBox plus header and spacer regions (dialog OK, one Save); T4 grid, spacer2 and buttons (dialog OK, one Save); T5 close and reopen readback and final audit.

## Sources read (T1, before any browser action)

- `AGENTS.md` (repository root; learning mode).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 241-255 (Section 9) and lines 492-504 (15:24-16:54).
- `recipes/components/add-component-from-toolbox.md` (full).
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- Outcome (operator) sections only: `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` lines 1309-1342; `experiments/EXP-109-hello-world-part-7-section-6b-fx-customer-portal-main-regions.md` lines 760-776; `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` lines 383-402. Their section headings were located with a heading-only search first (see Deviations).
- This record did not exist before T1 (the first read returned "File does not exist"); it was created in T1.

Nothing else was read: no other experiment record, no Section 10 or later.

## T1 gate

### Browser tabs and session

- Tab list (read-only, before the first selection): tab 0 = Mongoose Designer, `MGForm=FX_CustomerPortal`, `mode=designer`; tab 1 = Mongoose page at the Infor OS portal URL (`mingle-portal.se1.inforcloudsuite.com/.../c51080bc-...`).
- Tab 0 selected and used for the Designer. Tab 1 selected once for a read-only session check (find only, no click, no screenshot, no snapshot), then tab 0 selected again.
- Session: no session-expiry modal, logout card or sign-in page seen in tab 0 (the Designer shows the normal Form) or tab 1 (a find for `session|sign in|sign-in|logout|logged out|expired|CloudIdentities` returned no match). No re-login was needed.

### Designer state

- Title bar: `FX_CustomerPortal`. Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Form open and clean: toolbar `Save` [disabled] and `Regenerate Form` [disabled] (find, `t1` gate).
- No dialog open. The Components tab is active under Details.
- Console error count shown by the browser tool (Designer page, baseline, first inline snapshot of T1 before any click): **2 errors, 0 warnings**. The count was read again after each T1 click and at the end of T1: 2 each time (see the action audit). Console messages themselves were not read.

### Components tree (view only, read from find and inline snapshot)

Root `flexlayoutPane_FX_CustomerPortal` (FlexLayout):

- Region00: header
  - FlexLayoutHeader (FlexLayout, Index 0, Target flexlayoutPane_FX_CustomerPortal)
    - Region00: header: StaticHeader (Static)
    - Region01: user: StaticCustIcon (Static), StaticCustID (Static)
- Region01: main
  - FlexLayoutMain (FlexLayout)
    - Region00: menu: ButtonSignIn, ButtonHome, ButtonCart (PushButton)
    - Region01: spacer1: (no components)
    - Region02: signinpage: StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2 (in this order)
    - **Region03: homepage: (no components). Expected: none. Matches.**
    - Region04: cartpage: (no components)
    - Region05: spacer2: (no components)
- Region02: footer
  - FlexLayoutFooter (FlexLayout)
    - Region00: UNKNOWN0 (no components; already present, as noted in the brief)

Result: the regions and components match the brief's expected tree. Region03: homepage is empty. Nothing was found to stop the run.

Screenshot `evidence/EXP-112/t1-gate-designer-tree-canvas.png` shows the Designer with the Components tree scrolled to Region02: signinpage, the canvas (header, menu buttons, sign-in page components and the footer strip, with the homepage column between the sign-in and cart columns) and the Properties panel for StaticImage1. It proves the identity, scope (status bar), Form (title bar) and the signinpage rows. It does not show Region03 in the tree (that region is checked by the find output above) and it does not prove the saved state, only what is loaded in the same session.

### Carried EXP-111 readback (T1, selection only)

Each component was selected by its Components row (a click on the row; no edits). Values are as displayed in the Properties panel.

| Component | Property (group) | Expected (EXP-111) | Displayed (T1) | Result | Screenshot |
| --- | --- | --- | --- | --- | --- |
| ButtonSignIn2 | Caption | FX_sSignIn | FX_sSignIn | match | `t1-carried-buttonsignin2-properties.png` |
| ButtonSignIn2 | Theme Class (Appearance) | FX_BlueButton | FX_BlueButton | match | `t1-carried-buttonsignin2-properties.png` |
| EditCustID | Justification (Appearance) | Center | Center | match | `t1-carried-editcustid-properties.png` |
| EditCustID | Binding Type (Data Source) | None | None | match | `t1-carried-editcustid-binding-type.png` |
| StaticCustID2 | No Colon (Miscellaneous > Specific Attributes) | True | True | match | `t1-carried-staticcustid2-no-colon.png` |
| StaticImage1 | Bitmap File Name (Appearance) | starts FX_CustomerSignI (full value not shown) | `FX_CustomerSignI` (truncated by the column width) | match by prefix | `t1-carried-staticimage1-bitmap.png` (also `t1-gate-designer-tree-canvas.png`) |

Additional values seen in the same screenshots (not required by the brief, recorded for the next gate): StaticCustID2 Caption FX_sCustomerID, Justification Center, Size 20; 1.5, Flex Attributes Index 2 Target sig...; ButtonSignIn2 Type PushButton, Size not read; EditCustID Type Edit.

No value differed from its expected value. No repair was made (out of scope).

Limit: StaticImage1 Bitmap File Name was read from a truncated display; the full name (`FX_CustomerSignIn.png`) was not read, as the brief requires (no resize, hover or list open). Per the brief, a prefix match is sufficient.

## Evidence files (T1)

Screenshots in `evidence/EXP-112/` (the browser tool saves screenshots with the named file):

- `t1-gate-designer-tree-canvas.png`: FX_CustomerPortal Designer, User scope, Components tree at Region02: signinpage, canvas, StaticImage1 Properties. Proves: Form, scope, the signinpage components. Does not prove: Region03 (checked by find text), the saved state.
- `t1-carried-buttonsignin2-properties.png`: ButtonSignIn2 Properties, Caption FX_sSignIn, Theme Class FX_BlueButton. Proves the two values as displayed in the same session.
- `t1-carried-editcustid-properties.png`: EditCustID Properties, Justification Center (Binding Type is below the visible area).
- `t1-carried-editcustid-binding-type.png`: EditCustID Properties after a view-only wheel scroll, Data Source group, Binding Type None.
- `t1-carried-staticcustid2-no-colon.png`: StaticCustID2 Properties after the view-only wheel scroll to Miscellaneous > Specific Attributes, No Colon True. This file was written twice (see Deviations); the second capture is the one kept.
- `t1-carried-staticimage1-bitmap.png`: StaticImage1 Properties, Bitmap File Name `FX_CustomerSignI` (truncated).

## Action audit (T1)

Counts are exact for T1. The cumulative T1 + T2 table is in the T2 section below.

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | before the first selection |
| Tab select | 3 | tab 0 (start), tab 1 (session check), tab 0 (return) |
| Snapshot, untargeted | 1 | too large to inline; the tool saved it to a file outside the repository (not read); no refs were taken from it |
| Snapshot, targeted (Components panel) | 2 | the first one (before any click) gives the refs; the second (final) gives the console count |
| Find (read-only) | 5 | tree rows; component rows; Save; tab 1 session text; Save and dialog check |
| Click, Components row (selection only) | 4 | ButtonSignIn2, EditCustID, StaticCustID2, StaticImage1 |
| Mouse move (pointer only) | 2 | to the Properties panel before each wheel |
| Mouse wheel (view only) | 3 | 600 and 1400 scroll Properties; 800 scrolled the Components tree (see Deviations) |
| Screenshot | 7 | 6 files kept; one name written twice |
| Toolbox selection | 0 | |
| Placement click (canvas) | 0 | |
| Coordinate click (adorner) | 0 | |
| Undo | 0 | |
| Dialog open (OK / Cancel) | 0 / 0 | |
| Region add | 0 | |
| Field entry or correction | 0 / 0 | |
| List open | 0 | |
| Designer Save | 0 | |
| Form close / reopen | 0 / 0 | |
| Re-login | 0 | |
| Server-event error | 0 | |
| "Ref not found" | 0 | |
| Drag, Regenerate Form, Delete Form Definition | 0 | |
| Console count (tool output) | 2 errors, 0 warnings | at the baseline snapshot, after each of the 4 clicks, and at the end: 2 each time |

## Console error counts (T1)

- Baseline (before any click, targeted snapshot): 2 errors, 0 warnings.
- After click ButtonSignIn2: 2. After click EditCustID: 2. After click StaticCustID2: 2. After click StaticImage1: 2.
- End of T1 (targeted snapshot): 2 errors, 0 warnings.
- The tab-list output reported a tool-written console log for tab 1 (`evidence/playwright/console-2026-10-18T07-58-52-664Z.log`, lines 1-29). That is the portal page's log, not the Designer count; it was not read. The Designer count stayed at 2.

## Deviations (T1)

1. The first untargeted snapshot was too large to inline (56 KB); the tool saved it to a file outside the repository. It was not read or searched. The tree was then read through find output and targeted snapshots (`ref e304`, Components panel).
2. Three Outcome sections were located by a heading search (`^#+ .*Outcome`) limited to the three records named by the brief, before the sections were read in full. Only the Outcome sections were read.
3. The first wheel scroll (800) was aimed at the Properties panel, but the pointer had moved over the Components tree during the previous click. The tree scrolled (view only), and the Region02: footer row showed a light highlight. The Properties header still read StaticCustID2 (Static) at that point and the next click was made on StaticImage1 by its row. No edit was made.
4. The StaticCustID2 screenshot was written twice under the same name; the first capture (before the Properties scroll) was overwritten by the second, which shows No Colon True. The first capture is not kept.
5. Tab 1 was checked with find only (no screenshot, no inline snapshot).

## Worker-written file inventory (T1)

- `experiments/EXP-112-hello-world-part-7-section-9-flexlayouthome.md` (created in T1).
- `evidence/EXP-112/t1-gate-designer-tree-canvas.png`
- `evidence/EXP-112/t1-carried-buttonsignin2-properties.png`
- `evidence/EXP-112/t1-carried-editcustid-properties.png`
- `evidence/EXP-112/t1-carried-editcustid-binding-type.png`
- `evidence/EXP-112/t1-carried-staticcustid2-no-colon.png`
- `evidence/EXP-112/t1-carried-staticimage1-bitmap.png`

The browser tool also wrote its own snapshot and console files under `evidence/playwright/` (tool-written, not worker-written; not read): `page-2026-10-18T07-59-28-963Z.yml`, `page-2026-10-18T07-59-35-111Z.yml`, `page-2026-10-18T07-59-49-254Z.yml`, `page-2026-10-18T08-00-11-521Z.yml`, and console logs `console-2026-10-18T07-58-52-663Z.log` and `console-2026-10-18T07-58-52-664Z.log`.

## T2 (placement, name, one Designer Save), 2026-10-18

Sources: `AGENTS.md` re-read; this record's T2 part read. Nothing else was read (no other record, no Section 10 or later, no transcript, no console messages).

### Start state and gate

- Tabs listed (read-only) before the first selection: tab 0 = Designer (`MGForm=FX_CustomerPortal`, `mode=designer`), tab 1 = portal page. Tab 0 selected once. The tab tool's event line for tab 1 pointed to a tool-written console log (`evidence/playwright/console-2026-10-18T08-03-21-139Z.log`); it was not read.
- Session: the Designer showed the normal Form. No session-expiry modal, logout card or sign-in page was seen; no re-login was needed.
- Starting console count (tool output, first action of T2): **2 errors, 0 warnings** (the T1 baseline).
- Form: title `FX_CustomerPortal`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save disabled; Regenerate Form disabled; Undo disabled; no dialog open.
- Components tree (targeted read of the Components grid, current task): under Region03: homepage the next row is Region04: cartpage, so **no component is under Region03: homepage** (same as T1). Other regions and components are unchanged from T1 (menu, spacer1, signinpage with five components, cartpage empty, spacer2 empty, FlexLayoutFooter with Region00: UNKNOWN0).

### Placement

- Toolbox: one click on the **FlexLayout** row (ref from the current snapshot). Console after the click: 2.
- Canvas: one **coordinate click at (777, 380)** inside the homepage column (the column runs from the divider at about x 669 to the divider at about x 886; the click was at its middle, away from dividers and adorner icons). Console after the click: 2. This is the one allowed coordinate click for placement.
- Placement result (observed): the new component is `flexLayout1_USER` (Type FlexLayout, Container FlexLayoutMain, Pane 0, Tab 0). In the Components tree it is the only child of Region03: homepage, and its one auto region is `Region00: UNKNO...` (UNKNOWN0). Region04: cartpage follows at the region level.
- Undo: not used (0). A misplaced component did not occur.
- Screenshot `evidence/EXP-112/t2-placement-canvas-after-click.png`: shows the tree (Region03: homepage, flexLayout1_USER, Region00: UNKNO..., Region04: cartpage), the canvas and the Properties panel (flexLayout1_USER (FlexLayout), Name flexLayout1_USER, Type FlexLayout, From Device Master True). The Save and Undo icons are enabled (dirty). Proves: placement under Region03 by tree and canvas in this session. Does not prove: the full auto-region name (truncated), the saved state, or whether the component fills the column.

### Defaults (recorded before the rename)

From the Properties tree (targeted read of the Properties grid; values as text) and screenshots `t2-placement-defaults-properties.png` and `t2-placement-defaults-layout.png`:

- Name: `flexLayout1_USER`.
- Type: FlexLayout; From Device Master: True.
- Layout: Unit `Char`; Size `29.4237288135593; 34.2222222222222` (the screenshot shows only the first value, truncated).
- Flex Attributes: `Type: HorizontalBox Regions: - 00: UNKNOWN0 Index: 3 Target: homepage`. This matches the expected Index 3, Target homepage. The screenshot shows only `Type: HorizontalBo…`; the Index and Target text came from the snapshot text.
- Fill: not verified. The canvas shows only the adorner icons at the top of the homepage column; no outline of the full column is visible. The homepage region's Orientation Fill was not re-read in this task.

### Rename and verification

- Name: one click on the Name value (ref from the current Properties snapshot) opened the editor (textbox, active). One plain fill with `FlexLayoutHome` (browser type, one entry), then one **Tab** key press. Corrections: 0.
- Console after the entry and after Tab: 2.
- Verified in the Components tree (targeted read of the grid, after the Tab): the row `FlexLayoutHome FlexLayout 0 FlexLayoutMain 0` sits between Region03: homepage and Region00: UNKNOWN0, followed by Region04: cartpage. The Name is correct in the tree.
- The Properties header still read `flexLayout1_USER (FlexLayout)` after the rename and the Save (the header lag predicted by EXP-105). The Properties Name row read `FlexLayoutHome` after the Save (`t2-save-response.png`).

### Designer Save (exactly one)

- Save: one click on the Save button (ref from the current untargeted snapshot). Console after the click: 2.
- Response: the standard Designer toast reads **"Form [FX_CustomerPortal] and global object(s) were saved."** The wording is the standard Designer toast (EXP-105 finding 5). No global object was created or edited by this worker in T2; the message is recorded as the response.
- Save state after: disabled (`find` for Save returned `button "Save" [disabled]`). The Save icon is greyed in `t2-save-response.png`.
- Screenshot `evidence/EXP-112/t2-save-response.png`: the toast, the Components tree with FlexLayoutHome under Region03: homepage with its Region00 child (cut off) and Region04: cartpage, and the Properties Name row `FlexLayoutHome`. Proves: the Save response and the Save state in this session. Does not prove: persistence across a reopen (that is T5), or database durability.

### Not performed (by design)

No dialog was opened (T3 opens the attributes dialog). No region attribute, Type, Auto Size or Margin was touched. No Undo, no drag, no Regenerate, no Delete Form Definition, no list opened, no close or reopen, no re-login.

### T2 deviations (recorded as they happened)

1. **Reference errors (3):** `Ref not found` x3. The first two came from refs carried over from T1 (`e304` and `e923`); I used them without a current-task snapshot, which the brief does not allow. The third came from a targeted read (`e304`) that replaced the scope of the earlier snapshot, so `e66` was no longer in it. Each error was followed by one fresh untargeted snapshot before any reference was used again. Recovery snapshots: 3.
2. **Scoped targeted reads:** a targeted snapshot returns references only for its own subtree. After each targeted read I took a fresh untargeted snapshot before using refs from other subtrees.
3. **Persisted snapshot (one):** the first fresh untargeted snapshot exceeded the inline limit and was saved by the tool to a file outside the repository (not read, not searched). Later untargeted snapshots were taken with `depth` 4 (inline).
4. **Extra defaults screenshots:** two screenshots of the defaults (`t2-placement-defaults-properties.png`, `t2-placement-defaults-layout.png`) were taken in addition to the placement and Save screenshots the brief names. Each shows only part of the Size and Flex Attributes values, so the full text came from snapshot text.
5. **Mouse:** one pointer move and three wheel scrolls of the Properties panel (view only; 800, 400, then -2000 to restore the top). No click on the panel.

### Worker-written file inventory (T2)

- `experiments/EXP-112-hello-world-part-7-section-9-flexlayouthome.md` (updated in T2)
- `evidence/EXP-112/t2-placement-canvas-after-click.png`
- `evidence/EXP-112/t2-placement-defaults-properties.png`
- `evidence/EXP-112/t2-placement-defaults-layout.png`
- `evidence/EXP-112/t2-save-response.png`

Tool-written, not worker-written, not read: `evidence/playwright/page-2026-10-18T08-04-04-842Z.yml`, `…08-04-08-323Z.yml`, `…08-04-44-975Z.yml`, `…08-05-01-683Z.yml`, and `evidence/playwright/console-2026-10-18T08-03-21-139Z.log`. One persisted untargeted snapshot was written by the tool to a location outside the repository (not read).

### Cumulative browser action audit (T1 + T2)

| Action | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Tab list | 1 | 1 | 2 |
| Tab select | 3 | 1 | 4 |
| Snapshot, untargeted (fresh) | 1 | 9 | 10 |
| Snapshot, targeted | 2 | 9 | 11 |
| Snapshot calls total (errors in brackets) | 3 | 18 (3) | 21 (3) |
| Ref not found | 0 | 3 | 3 |
| Find (read-only) | 5 | 1 | 6 |
| Click, Components row (selection only) | 4 | 0 | 4 |
| Click, Toolbox FlexLayout row | 0 | 1 | 1 |
| Coordinate click, placement (canvas) | 0 | 1 | 1 |
| Coordinate click, adorner | 0 | 0 | 0 |
| Click, Properties Name value (to open the editor) | 0 | 1 | 1 |
| Text entries (Name fill) | 0 | 1 | 1 |
| Corrections | 0 | 0 | 0 |
| Tab key (commit) | 0 | 1 | 1 |
| Undo | 0 | 0 | 0 |
| Dialog opens (OK / Cancel) | 0 / 0 | 0 / 0 | 0 / 0 |
| Region adds | 0 | 0 | 0 |
| List opens | 0 | 0 | 0 |
| Designer Saves (click count; response) | 0 | 1 (1 success toast) | 1 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 |
| Re-logins | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 |
| Mouse moves | 2 | 1 | 3 |
| Mouse wheel (view only) | 3 | 3 | 6 |
| Screenshots | 7 | 4 | 11 |
| Drags, Regenerate, Delete Form Definition, Check Out / In | 0 | 0 | 0 |

Console error count (tool output): start 2 errors, 0 warnings; 2 after each action in which the output showed it (the Toolbox click, the placement click, the Name editor, the Tab, the Save and the final read); end 2. No rise at any point, so the stop rule did not trigger.

## T3 (dialog: Type, header and spacer; OK; one Designer Save), 2026-10-18

Sources: `AGENTS.md` re-read; this record's T3 part (the Next section) read. Nothing else was read (no other record, no transcript, no Section 10 or later, no console messages).

### Start state and gate

- Tabs listed (read-only) before the first selection: tab 0 = Designer (`MGForm=FX_CustomerPortal`), tab 1 = portal page. Tab 0 selected once. The tab tool's event line pointed to a tool-written log (`evidence/playwright/console-2026-10-18T08-08-25-034Z.log`); it was not read.
- Session: the Designer showed the Form normally; no session-expiry, logout or sign-in text was seen. Tab 1 was not checked in this task. No re-login.
- Starting console count (tool output): **2 errors, 0 warnings**.
- Form: title `FX_CustomerPortal`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save disabled; Regenerate Form disabled; Undo disabled; no dialog open.
- Tree (targeted read of the Components grid): Region03: homepage → **FlexLayoutHome** (FlexLayout, Container FlexLayoutMain, Pane 0) → Region00: UNKNOWN0; Region04: cartpage follows. The other regions and components match T1 and T2.

### Selection and opening the attributes dialog

- Selected FlexLayoutHome by its Components row (click on the reference from this task's tree snapshot). Selection only. Console 2.
- Adorner identification: a read-only find for the tooltip text "Edit FlexLayout Attributes" returned no match (the tooltip text is not in the accessibility tree). A screenshot (`t3-flexlayouthome-selected-adorners.png`) showed five adorner icons at the top of the homepage column (about x 681, 703, 725, 747, 768; y 185). Three icons were hovered (read only) so that the tool reported each DOM id: the reference `e297` = `#compaddadorner-2497` (add-component adorner; not used); `e296` = `#RemoveFlexRegionAdorner-2495` (not used); `e294` = `#flexlayouteditadorner-2490` (**Edit FlexLayout Attributes**; used).
- Clicked `e294` by its reference from this task's canvas snapshot. **Coordinate clicks: 0.** Console 2.
- The dialog titled "FlexLayout" opened (`t3-dialog-at-open.png`). **Starting state (observed):** Type `HorizontalBox`; Auto Size `False`; Region Index `3` (not changed); Margin blank (not changed); Regions grid: one row, index 0, ID `UNKNOWN0`, Length `1 Flex`. The dialog has Type, Auto Size and a Regions grid, so it is the FlexLayout attributes dialog, not a component dialog. This matches the expected starting state.
- Region 0's Orientation, Alignment and Pack were not visible until a region was selected. They were read after the Type change: Horizontal, Top, Start. This matches the expected defaults.

### Type

- Clicked the Type row (selection; the value editor opened showing `HorizontalBox`; `t3-type-row-selected.png`).
- Clicked the Type combobox list arrow: the list opened with `HorizontalBox` and `VerticalBox` (`t3-type-list-open.png`). The option references appeared only in a targeted snapshot of the listbox (not in the full tree). Clicked `VerticalBox`.
- **Result: Type = VerticalBox** (dialog snapshot: the combobox and the Type row both read VerticalBox). Corrections: 0.

### Region index 0: header

- Selected the row index 0 in the Regions grid. Defaults read: ID `UNKNOWN0`; Length `1`; Unit `Flex`; Orientation `Horizontal`; Alignment `Top`; Pack `Start`.
- **Unit:** the arrow opened the list (FormUnit, Flex); clicked `FormUnit`. Result: `FormUnit`.
- **Length:** the first click on the value cell did not open an editor (it only activated the cell). The second click opened the textbox. Plain fill `4`, then Tab. Result: `4` (the grid shows `4 FormUnit`).
- **ID:** the click on the value cell opened the textbox. Plain fill `header`, then Tab. Result: `header`.
- **Orientation:** the value was already `Horizontal`. No list was opened and no change was made (the planned value is displayed).
- **Alignment:** the arrow opened the list (Top, Middle, Stretch); clicked `Middle`. Result: `Middle`.
- **Pack:** the first arrow click did not open the list (it only activated the cell). The second click opened it (Start, Center, End); clicked `Center`. Result: `Center`.
- Region 0 after entry (snapshot text): ID `header`, Length `4`, Unit `FormUnit`, Orientation `Horizontal`, Alignment `Middle`, Pack `Center`. The Regions grid shows `0 header 4 FormUnit`.
- Corrections: 0.

### Regions add and region index 1: spacer

- Clicked the Regions add (+) button once. The grid then had two rows: `0 header 4 FormUnit` and `1 UNKNOWN1_USER 1 Flex`. Exactly one row was added.
- Selected row 1. Defaults read: ID `UNKNOWN1_USER`; Length `1`; Unit `Flex`; Orientation `Horizontal`; Alignment `Top`; Pack `Start`.
- **Unit:** the arrow opened the list; clicked `FormUnit`. Result: `FormUnit`.
- **ID:** the first click on the value cell did not open the editor. The second click opened it. Plain fill `spacer`, then Tab. Result: `spacer`.
- Length `1`, Orientation `Horizontal`, Alignment `Top`, Pack `Start`: the defaults, left unchanged (as planned).
- Observed: the Minimum and Maximum Length rows were still listed in the properties snapshot taken right after the Unit change for row 1. For row 0 they had dropped out after the Length edit. Not investigated.

### Before OK

- Screenshot `t3-regions-grid-before-ok.png`: Type `VerticalBox`; Auto Size `False`; Region Index `3`; Margin blank; Regions grid rows `0 header 4 FormUnit` and `1 spacer 1 FormUnit`; row 1 properties ID `spacer`, Length `1`, Unit `FormUnit`, Orientation `Horizontal`, Alignment `Top`, Pack `Start`.
- Limit: row 0 was not selected in that screenshot, so its Horizontal / Middle / Center values are not visible in it. They are read from the snapshot text recorded above.

### OK and Designer Save (one each)

- **OK** clicked once (`e1620`). Message: none seen; the dialog closed. Screenshot `t3-after-ok-before-save.png` shows the canvas with no dialog, Save enabled, and the Properties panel showing the Form. Console 2.
- Post-OK canvas (observed, not yet interpreted): a dashed outline appears in the homepage column at about y 245–263, between the upper and lower homepage area. The cause is not established; check at T5.
- **Designer Save** clicked once (`e15`). **Response:** toast "Form [FX_CustomerPortal] and global object(s) were saved." (`t3-save-response.png`). **Save state after:** disabled (find). Console 2 after the click and at the end of the task.
- The Components tree was collapsed to `Pane (00)` after the save (view state only; no Form change is implied).

### Stale references

- One "Ref not found" error: a targeted read of the dialog (`e1470`) was attempted after a targeted read of the Properties tree had replaced the scope. One fresh untargeted snapshot (depth 7) was taken, and references from it were used from then on.

### Discrepancy note (T2 qualification, carried from the coordinator's instruction)

The controller audit counted **four** stale-reference errors in T2. The worker's T2 record lists **three** (targeted `e304` at the start, targeted `e923` carried from T1, and targeted `e66` after a targeted read). Not reconciled: no speculative reconciliation and no extra browser action was taken to resolve it. The T2 worker count stays three. T3 adds one.

### T3 counts (exact)

- Clicks: 24 in total: adorner `e294` 1; FlexLayoutHome row 1; Type row 1; list arrows that opened a list 5 (Type, Unit row 0, Alignment, Pack, Unit row 1); list options picked 5 (`VerticalBox`, `FormUnit` row 0, `Middle`, `Center`, `FormUnit` row 1); Regions grid row selections 2; cell or arrow clicks that opened an editor 3 (Length row 0, ID row 0, ID row 1); cell or arrow clicks that did not open an editor or list 3 (Length row 0 first click, Pack arrow first click, ID row 1 first click); Regions add 1; OK 1; Save 1.
- Hovers (read only, adorner identification): 3. Finds: 2 (tooltip search, Save state).
- Text entries: 3 (`4`, `header`, `spacer`). Tab key presses: 3. Corrections: 0 for every field.
- Undo: 0. Coordinate clicks: 0. Dialog opens: 1. Dialog Cancel: 0. Region adds: 1 (grid checked after the click: two rows). List opens: 5. Designer Saves: 1 (toast response recorded). Form closes or reopens: 0. Re-logins: 0. Server-event errors: 0. Drags, Regenerate Form, Delete Form Definition: 0.
- Snapshots: 31 calls (6 untargeted, 25 targeted); 1 error ("Ref not found"). Screenshots: 7.
- Mouse wheel: 0. Mouse moves: 0.
- Console error count: 2 errors, 0 warnings at the start, after each action, and at the end. No rise, so the stop rule did not apply.

### Cumulative browser action audit (T1 + T2 + T3)

| Action | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 3 |
| Tab select | 3 | 1 | 1 | 5 |
| Snapshot, untargeted | 1 | 9 | 6 | 16 |
| Snapshot, targeted | 2 | 9 | 25 | 36 |
| Snapshot calls total (errors in brackets) | 3 (0) | 18 (3) | 31 (1) | 52 (4) |
| Ref not found | 0 | 3 | 1 | 4 |
| Find (read only) | 5 | 1 | 2 | 8 |
| Hover (adorner identification) | 0 | 0 | 3 | 3 |
| Click, Components row (selection) | 4 | 0 | 1 | 5 |
| Click, Toolbox FlexLayout row | 0 | 1 | 0 | 1 |
| Coordinate click, placement (canvas) | 0 | 1 | 0 | 1 |
| Click, adorner (by reference) | 0 | 0 | 1 | 1 |
| Coordinate click, adorner | 0 | 0 | 0 | 0 |
| Click, Properties Name value | 0 | 1 | 0 | 1 |
| Click, Type row | 0 | 0 | 1 | 1 |
| Click, Regions grid row | 0 | 0 | 2 | 2 |
| Click, cell or arrow with no editor or list | 0 | 0 | 3 | 3 |
| Text entries | 0 | 1 | 3 | 4 |
| Tab key | 0 | 1 | 3 | 4 |
| Corrections | 0 | 0 | 0 | 0 |
| Undo | 0 | 0 | 0 | 0 |
| Dialog opens | 0 | 0 | 1 | 1 |
| Dialog OK / Cancel | 0 / 0 | 0 / 0 | 1 / 0 | 1 / 0 |
| Region adds | 0 | 0 | 1 | 1 |
| List opens | 0 | 0 | 5 | 5 |
| List options picked | 0 | 0 | 5 | 5 |
| Designer Saves | 0 | 1 | 1 | 2 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Mouse moves | 2 | 1 | 0 | 3 |
| Mouse wheel (view only) | 3 | 3 | 0 | 6 |
| Screenshots | 7 | 4 | 7 | 18 |
| Drags, Regenerate, Delete Form Definition, checkout actions | 0 | 0 | 0 | 0 |

Console error count (tool output): 2 errors, 0 warnings at every checkpoint in T1, T2 and T3, including the end of T3. No rise.

### Worker-written file inventory (T3)

- `experiments/EXP-112-hello-world-part-7-section-9-flexlayouthome.md` (updated in T3).
- `evidence/EXP-112/t3-flexlayouthome-selected-adorners.png` (extra: selected component and adorner strip)
- `evidence/EXP-112/t3-dialog-at-open.png` (dialog at open: starting state)
- `evidence/EXP-112/t3-type-row-selected.png` (extra: Type editor open, HorizontalBox)
- `evidence/EXP-112/t3-type-list-open.png` (extra: Type list open with both options)
- `evidence/EXP-112/t3-regions-grid-before-ok.png` (Regions grid with two rows before OK)
- `evidence/EXP-112/t3-after-ok-before-save.png` (extra: canvas after OK, dialog closed, Save enabled)
- `evidence/EXP-112/t3-save-response.png` (Save toast and Save state)

Tool-written, not worker-written, not read: the snapshot files under `evidence/playwright/` from `page-2026-10-18T08-08-31-658Z.yml` to `page-2026-10-18T08-11-23-485Z.yml` (the tool wrote one per action that returned a snapshot), and the console log `evidence/playwright/console-2026-10-18T08-08-25-034Z.log`. The count of these files was not checked.

## T4 (grid, spacer2 and buttons; OK; one Designer Save), 2026-10-18

Sources: `AGENTS.md` re-read; this record's T4 part (the Next section) read. Nothing else was read (no other record, no transcript, no Section 10 or later, no console messages).

### Start state and gate

- Tabs listed (read-only) before the first selection: tab 0 = Designer (`MGForm=FX_CustomerPortal`), tab 1 = portal page. Tab 0 selected once. The tool's event line pointed to `evidence/playwright/console-2026-10-18T08-14-58-181Z.log`; not read.
- Session: no session-expiry, logout or sign-in text in the Designer. No re-login.
- Starting console count (tool output): **2 errors, 0 warnings**.
- Form: `FX_CustomerPortal`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save disabled; Regenerate Form disabled; Undo disabled; no dialog.
- Components tree (after one view-only Expand, see below): Region03: homepage → FlexLayoutHome (FlexLayout, Container FlexLayoutMain) → Region00: header, Region01: spacer; Region04: cartpage follows. Other regions and components as in T1 to T3.
- The Components tree was collapsed to `Pane (00)` on arrival (the view state left after T3's Save). One click on the Expand control (view only) expanded it. This is a view change, not a Form change.

### Selection and dialog

- Selected FlexLayoutHome by its Components row. Selection only.
- Identified the Edit FlexLayout Attributes adorner by DOM id: hovering the canvas icons (read only) reported `flexlayouteditadorner-2655` for the leftmost icon (reference `e1328` in the snapshot taken in this task). Clicked it by reference. **Coordinate clicks: 0.**
- The dialog opened and showed Type, Auto Size and a Regions grid (not a component dialog).
- **Starting state (observed, as read):** Type `VerticalBox`; Auto Size `False`; Region Index `3` (unchanged); Margin blank (unchanged). Regions grid: index 0 `header` 4 FormUnit; index 1 `spacer` 1 FormUnit. This matches the expected state (header 4 FormUnit, spacer 1 FormUnit).
- Region values read without editing (selection only):
  - Index 0 `header`: Length 4; Unit FormUnit; Orientation Horizontal; Alignment Middle; Pack Center (Properties text, snapshot read).
  - Index 1 `spacer`: ID spacer; Length 1; Unit FormUnit; Orientation Horizontal; Alignment Top; Pack Start. Matches the expected defaults.
- Starting state recorded and matched, so the task continued (no Cancel).

### Regions add (one click at a time, grid checked after each)

- Add 1: grid went from 2 to 3 rows (new row 2 `UNKNOWN2_USER`, 1 Flex, Horizontal, Top, Start). Auto-selected.
- Add 2: 3 to 4 rows (row 3 `UNKNOWN3_USER`).
- Add 3: 4 to 5 rows (row 4 `UNKNOWN4_USER`).
- Exactly one row per click; no unexpected count.

### Index 2: grid

- Selected row 2 (`UNKNOWN2_USER`) before editing.
- **Orientation:** arrow opened the list (Fill, Horizontal, Vertical); clicked `Fill`. Result: `Fill`. After the commit, Alignment and Pack disappeared for this row (as the brief predicted for Fill).
- **Length:** the first click only activated the cell; the second click opened the textbox; plain fill `2`, Tab. Result: `2`.
- **ID:** clicked the value cell (editor opened); plain fill `grid`, Tab. Result: `grid`.
- **Unit:** left as the default `Flex` (planned Flex; no entry).
- Row 2 confirmed (Properties text): ID grid; Length 2; Unit Flex; Orientation Fill.

### Index 3: spacer2

- Selected row 3 (`UNKNOWN3_USER`) before editing.
- **Unit:** arrow opened the list (FormUnit, Flex); clicked `FormUnit`. Result: `FormUnit`. The Minimum and Maximum Length rows disappeared (as the brief predicted for FormUnit).
- **ID:** the first click activated the cell; the second click opened the textbox; plain fill `spacer2`, Tab. Result: `spacer2`.
- **Length:** left at the default `1` (planned 1; no entry).
- Orientation Horizontal, Alignment Top, Pack Start: defaults left unchanged (as planned).
- Row 3 confirmed (Properties text): ID spacer2; Length 1; Unit FormUnit; Orientation Horizontal; Alignment Top; Pack Start.

### Index 4: buttons

- Selected row 4 (`UNKNOWN4_USER`) before editing.
- **Orientation:** arrow opened the list (Fill, Horizontal, Vertical); clicked `Fill`. Result: `Fill`. Alignment and Pack disappeared after the commit.
- **ID:** the first click activated the cell; the second click opened the textbox; plain fill `buttons`, Tab. Result: `buttons`.
- **Length:** left at the default `1` (planned 1; no entry).
- **Unit:** left at the default `Flex` (planned Flex; no entry).
- Row 4 confirmed (Properties text): ID buttons; Length 1; Unit Flex; Orientation Fill.

### Before OK

- Screenshot `t4-regions-grid-five-rows-before-ok.png`: the dialog with Type `VerticalBox`, Auto Size `False`, Region Index `3`, Margin blank; the Regions grid with five rows: `0 header 4 FormUnit`, `1 spacer 1 FormUnit`, `2 grid 2 Flex`, `3 spacer2 1 FormUnit`, `4 buttons 1 Flex`; row 4 properties (ID buttons, Length 1, Unit Flex, Orientation Fill) on the right of the dialog.
- Limit: rows 0 to 3 are not all visible in one properties view; their values come from the Properties text read recorded above and from the grid cells in the screenshot.

### OK and Designer Save (one each)

- **OK** clicked once (`e2215`). No message seen; the dialog closed. Console 2 after OK.
- **Designer Save** clicked once. **Response:** toast "Form [FX_CustomerPortal] and global object(s) were saved." (`t4-save-response.png`). **Save state after:** disabled (find). Console 2 after the click and at the end of the task. No dialog and no prompt open afterwards.
- The Save response and Save state are the only evidence of the save; reopen (T5) is the persistence check.

### Stale references

- Six "Ref not found" errors in T4: four from snapshot-level reads (targeted `e2149`, `e2169`, `e2129` and `e2169`) and two from click attempts (`e309` on the Components Expand control; `e2162` on the spacer row). Each was followed by one fresh untargeted snapshot before any new reference was used (six recovery snapshots, operator ruling).

### T4 counts (exact, from the T4 call sequence)

- Browser clicks: 28 in total. Breakdown: Components Expand (view) 1 (plus 1 failed attempt); FlexLayoutHome row 1; adorner 1; Regions grid rows selected 5 (plus 1 failed attempt); region adds 3; list arrows that opened a list 3; list options picked 3; activation clicks with no editor opened 3; editor-opening clicks 4; OK 1; Save 1.
- Hovers (read only, adorner identification): 1.
- Text entries: 4 (`2`, `grid`, `spacer2`, `buttons`). Tab key presses: 4 (one after each entry). Corrections: 0.
- Undo: 0. Coordinate clicks: 0. Dialog opens: 1. Dialog OK: 1. Dialog Cancel: 0. Region adds: 3. List opens: 3. List options picked: 3. Designer Saves: 1 (success toast recorded). Form closes or reopens: 0. Re-logins: 0. Server-event errors: 0. Drags, Regenerate Form, Delete Form Definition, checkout actions: 0.
- Tab list: 1; Tab select: 1 (tab 0).
- Snapshots: 45 calls (13 untargeted; 32 targeted, of which 4 returned "Ref not found"). Finds: 1 (Save state). Mouse moves: 0. Mouse wheel: 0.
- Screenshots: 2 (`t4-regions-grid-five-rows-before-ok.png`, `t4-save-response.png`).
- Console error count (tool output): 2 errors, 0 warnings at the start, after each action, and at the end. No rise, so the stop rule did not apply.

### Cumulative browser action audit (T1 + T2 + T3 + T4)

| Action | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 1 | 4 |
| Tab select | 3 | 1 | 1 | 1 | 6 |
| Snapshot, untargeted | 1 | 9 | 6 | 13 | 29 |
| Snapshot, targeted | 2 | 9 | 25 | 32 | 68 |
| Snapshot calls total (errors in brackets) | 3 (0) | 18 (3) | 31 (1) | 45 (4) | 97 (8) |
| Ref not found (snapshot-level plus click-level) | 0 | 3 | 1 | 6 | 10 |
| Find (read only) | 5 | 1 | 2 | 1 | 9 |
| Hover (adorner identification) | 0 | 0 | 3 | 1 | 4 |
| Click, Components row (selection) | 4 | 0 | 1 | 1 | 6 |
| Click, Components Expand (view only) | 0 | 0 | 0 | 1 | 1 |
| Click, Toolbox FlexLayout row | 0 | 1 | 0 | 0 | 1 |
| Coordinate click, placement (canvas) | 0 | 1 | 0 | 0 | 1 |
| Click, adorner by reference | 0 | 0 | 1 | 1 | 2 |
| Coordinate click, adorner | 0 | 0 | 0 | 0 | 0 |
| Click, Properties Name value | 0 | 1 | 0 | 0 | 1 |
| Click, Type row | 0 | 0 | 1 | 0 | 1 |
| Click, Regions grid row | 0 | 0 | 2 | 5 | 7 |
| Click, cell or arrow with no editor or list opened | 0 | 0 | 3 | 3 | 6 |
| Click, editor-opening cell | 0 | 0 | 0 | 4 | 4 |
| Click, list arrow that opened a list | 0 | 0 | 5 | 3 | 8 |
| Click, region add (+) | 0 | 0 | 1 | 3 | 4 |
| Text entries | 0 | 1 | 3 | 4 | 8 |
| Tab key | 0 | 1 | 3 | 4 | 8 |
| Corrections | 0 | 0 | 0 | 0 | 0 |
| Undo | 0 | 0 | 0 | 0 | 0 |
| Dialog opens | 0 | 0 | 1 | 1 | 2 |
| Dialog OK / Cancel | 0 / 0 | 0 / 0 | 1 / 0 | 1 / 0 | 2 / 0 |
| List options picked | 0 | 0 | 5 | 3 | 8 |
| Designer Saves | 0 | 1 | 1 | 1 | 3 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 | 0 |
| Mouse moves | 2 | 1 | 0 | 0 | 3 |
| Mouse wheel (view only) | 3 | 3 | 0 | 0 | 6 |
| Screenshots | 7 | 4 | 7 | 2 | 20 |
| Drags, Regenerate, Delete Form Definition, checkout actions | 0 | 0 | 0 | 0 | 0 |

Console error count (tool output): 2 errors, 0 warnings at every checkpoint in T1 to T4, including the end of T4. No rise.

Note on the counts: the table comes from the T4 call sequence as recorded during the task. Snapshot and click totals were not machine-checked by a second source; the operator's controller audit is authoritative if the two differ.

### Worker-written file inventory (T4)

- `experiments/EXP-112-hello-world-part-7-section-9-flexlayouthome.md` (updated in T4).
- `evidence/EXP-112/t4-regions-grid-five-rows-before-ok.png` (dialog with five-row Regions grid before OK).
- `evidence/EXP-112/t4-save-response.png` (Save toast and Save state).

Tool-written, not worker-written, not read: the snapshot files under `evidence/playwright/` with timestamps `2026-10-18T08-15-07` to `08-18-16` (the tool wrote one per action that returned a snapshot), and the console log `evidence/playwright/console-2026-10-18T08-14-58-181Z.log`. The count of these files was not checked.

### Deviations (T4)

1. Six "Ref not found" errors (see Stale references); each followed by one fresh untargeted snapshot.
2. The first Expand click failed on a stale reference; the tree was expanded after one fresh snapshot.
3. Several clicks on a value cell only activated the cell; the editor or list opened on the next click. These were not corrections: the value was entered only once.
4. For the Unit list of index 3 the first arrow click opened the list directly; the record reads it as one list open.
5. The brief's expected post-add defaults (UNKNOWN<n>_USER, 1 Flex, Horizontal, Top, Start) were observed for each added row.
6. The T2 controller-versus-worker stale-reference discrepancy (controller 4 vs worker 3) is retained, not reconciled. The T3 count (one error) is not part of that discrepancy.

### Discrepancy note (retained)

The controller's T2 audit counted four stale-reference errors; the worker's T2 record lists three. Not reconciled (no speculative reconciliation, no extra browser action).

## T5 (same-session close and reopen readback; five-row grid check; one Cancel; final audit), 2026-10-18

Sources: `AGENTS.md` and this record's T5 part (the Next section) were read at the start of T5. This record was read again only to write this section. Nothing else was read in T5: no other experiment record, no transcript, no console message contents, no tool-written snapshot or console file, and no Section 10 or later material.

T5 was split across a context compaction. The first part of T5 (tab check, close, reopen, tree readback, dialog readback up to row 2) is recorded from carried notes and is not machine-verified. Exact counts are given only for the second part, labelled "this part". Unknown counts from the first part are marked n/r.

### Start state and gate

- Tab 0 is the Designer (`MGForm=FX_CustomerPortal`, `mode=designer`); tab 1 is the portal page. The tab selection in the first part is n/r. In this part tab 0 was already the current tab and no tab action was taken.
- Session: no session-expiry modal, logout card or sign-in page was seen. No re-login.
- Console count: **2 errors, 0 warnings** (carried notes: the same count throughout the first part; this part's first snapshot also 2).
- Form before the close: `FX_CustomerPortal`, status bar `ScopeType: User`, Save disabled, no dialog or prompt open.

### Close and reopen (first part, carried)

- **Close:** one click on the Form-tab close control (`closable FX_CustomerPortal`). Its first reference was "Ref not found". One fresh depth-4 untargeted snapshot was taken, and the new reference was clicked once.
- **Save prompt:** none appeared. The Form was clean, so there is no prompt text to record. No Yes or No was answered.
- **Reopen:** once, through the Form menu recent-forms entry for `FX_CustomerPortal`. Select Form OK was not used. The reopened tab carries `MGForm=FX_CustomerPortal` in its URL. Save disabled after the reopen.

### Components tree after the reopen (carried readback, snapshot text)

- The tree before the close and the tree after the reopen have the same structure.
- Region03: homepage contains **FlexLayoutHome** (FlexLayout, Container FlexLayoutMain) as its only child, with Region00: header, Region01: spacer, Region02: grid, Region03: spacer2 and Region04: buttons, in that order. Region04: cartpage follows.
- Everything else matches T1: FlexLayoutMain Region00: menu (ButtonSignIn, ButtonHome, ButtonCart), Region01: spacer1 (empty), Region02: signinpage (StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2), Region04: cartpage (empty), Region05: spacer2 (empty). Header and footer are unchanged; the footer's Region00: UNKNOWN0 is present.
- The homepage rows were read from snapshot text only. No screenshot shows them (see Evidence).

### FlexLayoutHome attributes dialog (read only)

- Opened by the **Edit FlexLayout Attributes** adorner (reference `e2613`, `flexlayouteditadorner-3277`) after FlexLayoutHome was selected by its Components row (first part). The adorner was clicked by reference. No coordinate click is recorded for T5.
- Dialog title `FlexLayout`. The dialog shows Type, Auto Size and the Regions grid (not a component dialog).
- Top of the dialog (observed): **Type VerticalBox**; **Auto Size False**; **Region Index 3**; Margin blank (not changed).
- Regions grid, five rows (the grid text and the screenshot agree):

| Index | ID | Length | Unit | Orientation | Alignment | Pack | Read in |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | header | 4 | FormUnit | Horizontal | Middle | Center | first part (carried Properties text) |
| 1 | spacer | 1 | FormUnit | Horizontal | Top | Start | first part (carried Properties text) |
| 2 | grid | 2 | Flex | Fill | hidden | hidden | first part (carried Properties text) |
| 3 | spacer2 | 1 | FormUnit | Horizontal | Top | Start | this part (Properties tree, ref `e3509`) |
| 4 | buttons | 1 | Flex | Fill | hidden | hidden | this part (Properties tree, ref `e3509`) |

- Alignment and Pack are hidden for the two Fill regions (index 2 and index 4). Their stored values are not displayed, so they are neither confirmed nor invented here.
- Rows were selected by their grid row references only. No list was opened, no field was edited and no value was changed.

### Canvas, homepage column (observed)

- In the reopened canvas screenshot (`t5-reopened-canvas-and-tree.png`, carried) a dashed outline is visible in the homepage column at about y 245 to 263. This is the same band that appeared after T3's OK.
- The cause of the outline is not established. It spans only that band. The screenshot does not show the five regions, so it does not establish that the homepage column is filled. Fill was not inferred from Index, Target or Orientation.

### Cancel (this part)

- The dialog was closed with **one Cancel**, clicked by its reference from the snapshot taken in this part (`e3529`). No OK was clicked and no Save was invoked.
- After Cancel: no dialog open; toolbar Save disabled; Regenerate Form disabled; Undo disabled; Form tab selected; console **2 errors, 0 warnings**.

### Console error counts

- First part (carried): 2 errors, 0 warnings throughout.
- This part: 2 errors, 0 warnings at the start, after row 3, after row 4 (the click that followed one failed reference), after the Regions grid screenshot, after Cancel, and at the end. No rise, so the stop rule did not apply. Console messages were not read.

### Evidence (T5)

- `evidence/EXP-112/t5-reopened-canvas-and-tree.png` (first part, carried): the reopened Designer with the title `FX_CustomerPortal`, User scope, Save disabled, the canvas and the top of the Components tree. **Proves:** Form identity, scope and clean state after the reopen, in this browser session. **Does not prove:** the homepage rows or the five regions (they are not in the image; the row values come from snapshot text), or any saved state beyond this session.
- `evidence/EXP-112/t5-reopened-tree-homepage-rows.png` (first part, carried): written twice under this name; the second capture overwrote the first. The kept file shows the **signinpage** rows, not the homepage rows, so it does **not** show FlexLayoutHome. The name does not match the content. The file was kept (not deleted), and no further browser action was taken to re-capture it, because the brief's stop point had been reached.
- `evidence/EXP-112/t5-regions-grid-five-rows.png` (this part): element capture of the Regions grid in the open dialog, before Cancel. Read by the worker: five rows, `0 header 4 FormUnit`, `1 spacer 1 FormUnit`, `2 grid 2 Flex`, `3 spacer2 1 FormUnit`, `4 buttons 1 Flex`, with row 4 selected. **Proves:** the five IDs, lengths, units and their order in the dialog after the reopen. **Does not prove:** Orientation, Alignment or Pack (they are in the Properties text, not in this image), Type or Auto Size, or any saved state beyond this session.

### Stale references and deviations (T5)

1. **This part:** two "Ref not found" events. (a) A click on row 4 (`e3474`) after the row-3 selection: one fresh untargeted snapshot (depth 7) was taken; then one targeted read of the grid (`e3434`) for current row references; then the row-4 click succeeded. (b) The grid screenshot (`e3434`): one fresh untargeted snapshot (depth 6) was taken; the screenshot then succeeded on the new reference.
2. **First part (carried, not machine-verified):** "Ref not found" on the Form-tab close control (`e247`), on the Components Expand control, on the FlexLayoutHome tree reference, on two region-row references (`e3447` after the row-0 selection, `e3456` after the row-1 selection) and on the grid reference (`e3434`) after a Properties read; and one targeted read of `e3434` at the end of that part. Each was followed by one fresh untargeted snapshot.
3. **First part (carried):** one untargeted snapshot at depth 10 exceeded the inline limit and was saved by the tool to a file outside the repository. It was not read. Later snapshots used depth 6 or less.
4. **First part (carried):** the Components tree wheel scroll overshot twice. This is a view change only; no edit was made.
5. **First part (carried):** the homepage-rows screenshot name was reused (see Evidence).
6. The brief asked for one Cancel and no Save. One Cancel was clicked. No Save was invoked in T5.

### Discrepancy notes (retained, not reconciled)

- **T2 (carried from the coordinator's instruction):** the controller audit counted **four** stale-reference errors in T2. The worker's T2 record lists **three**. Not reconciled.
- **T4 (carried from the coordinator's instruction):** the controller audit reports **6 stale references against 7 total tool errors**. The worker's T4 record lists 6 "Ref not found" events (4 snapshot-level and 2 click-level, as recorded in T4) and the 4 snapshot-call errors counted within the T4 snapshot total. Not reconciled.

### T5 action counts

**This part (exact, from the call sequence of this part):**

- Browser clicks: 4 attempted. Succeeded 3 (region row 3; region row 4; Cancel). Failed 1 ("Ref not found" on row 4, `e3474`).
- Snapshots: 7 calls, no snapshot-level error. Untargeted 4 (depth 6, depth 7, depth 6, depth 3). Targeted 3 (Properties read after row 3; grid read `e3434`; Properties read after row 4).
- Screenshots: 2 calls. Saved 1 (`t5-regions-grid-five-rows.png`). Failed 1 ("Ref not found" on `e3434`).
- "Ref not found": 2 (1 click, 1 screenshot). Fresh untargeted snapshots taken after them: 2.
- Dialog: opens 0; Cancel 1; OK 0.
- Region-row selections 2 (rows 3 and 4). Region adds 0. Text entries 0. Tab keys 0. Corrections 0. List opens 0. List options picked 0.
- Designer Saves 0. Undo 0. Coordinate clicks 0. Mouse moves 0. Mouse wheel 0. Finds 0. Tab list 0. Tab select 0.
- Form close 0; Form reopen 0. Re-logins 0. Server-event errors 0. Drags, Regenerate Form, Delete Form Definition, checkout actions 0.
- Read tool calls (not browser): 2 (the saved Regions grid image, and this record for writing).

**First part (carried from notes; not exact; not machine-verified):**

- Form close 1 (after one "Ref not found"). Form reopen 1 (recent-forms entry). Tab list and tab select: n/r.
- Clicks: FlexLayoutHome Components row 1 (after one "Ref not found"); Components Expand 1 (after one "Ref not found"); adorner 1 (by reference); region-row selections 3 (rows 0 to 2); click-level "Ref not found" 5 (`e247`, Expand, FlexLayoutHome row, `e3447`, `e3456`). Total clicks: n/r.
- Snapshot-level "Ref not found": 2 (the grid read `e3434` after a Properties read, and the targeted read `e3434` at the end of that part). The carried notes may count one grid event twice; this cannot be resolved from the notes.
- Snapshots: n/r (includes one depth-10 untargeted snapshot that overflowed and was not read).
- Mouse wheel 2 (view only). Mouse moves n/r.
- Screenshots: 3 successful calls (the canvas-and-tree image 1; the homepage-rows name 2).
- Dialog opens 1 (adorner). Dialog OK 0. Coordinate clicks 0 (none recorded).
- Console 2 errors, 0 warnings throughout (carried).

**Total "Ref not found" for T5:** 9 listed (7 carried, 2 this part).

### Acceptance checks (T5 evidence matrix; observed only)

- **AC-1** (sources, session, User scope, clean Form, tree, baseline, carried readback): supported. Evidence: `t1-gate-designer-tree-canvas.png` and the `t1-carried-*.png` files (T1); the T1 tree text; the T5 reopen tree text (carried). Limits: the "Region03 empty" check in T1 is from find and snapshot text, not a screenshot. Readbacks are from this browser session.
- **AC-2** (T2 placement, name and one Save; T3 and T4 dialog starting state, values, one-at-a-time region adds, OK once and one Save each, console counts, corrections): supported as observed. Evidence: `t2-placement-canvas-after-click.png`, `t2-save-response.png`, `t3-dialog-at-open.png`, `t3-regions-grid-before-ok.png`, `t3-save-response.png`, `t4-regions-grid-five-rows-before-ok.png`, `t4-save-response.png`. Limits: T3 region 0 values come from snapshot text (no screenshot with row 0 selected); Save state from find; no field correction was needed (activation clicks are recorded as deviations, not corrections).
- **AC-3** (after one close and reopen: Region03 with five regions in order; dialog Type VerticalBox and the planned values; other components unchanged; Form open and clean): supported for the same browser session. Evidence: `t5-regions-grid-five-rows.png` (five rows) and `t5-reopened-canvas-and-tree.png` (Form identity, scope, clean). Values for all five rows come from Properties snapshot text, not from a screenshot. **Limits:** the homepage tree rows have no matching screenshot; "other components unchanged" rests on the carried tree readback; the close and reopen were in one browser session, so this is **not** cross-session, database-level or replay durability.
- **AC-4** (no other component, region or Form changed; no global object; no Theme Class, binding or event; no Regenerate; no drag; Undo at most once; no runtime action; no unload; no checkout action; User scope only; no task-boundary overrun): observed from the action audits. Undo 0; drags 0; Regenerate Form 0; Delete Form Definition 0; checkout actions 0; no runtime action; no unload; no Theme Class, binding or event field was opened in T2 to T5. The scope status bar read User in each task. T5 stopped at the T5 boundary and Section 10 was not started. Limit: this is the worker's record; the operator's git review is authoritative.
- **AC-5** (final audit with decisive evidence, exact counts, file inventories, cleanup inventory and final state): this section and the tables below. **Partial:** exact counts exist for T1 to T4 and for the second part of T5. The first part of T5 is carried from notes with n/r entries, so the cumulative totals below are lower bounds where marked.

### Findings (observed only)

- **F-1 (observed):** FlexLayoutHome was placed in Region03: homepage as its only child (T2), named FlexLayoutHome, and saved (T2 Save toast).
- **F-2 (observed):** T3 and T4 each set the dialog values, clicked OK once and saved once, with the Save toast "Form [FX_CustomerPortal] and global object(s) were saved."
- **F-3 (observed):** after the same-session close and reopen (T5), the dialog shows Type VerticalBox, Auto Size False, Region Index 3 and five regions in order, with the planned ID, Length, Unit and Orientation for every row. Header is Middle and Center; spacer and spacer2 keep the default Top and Start.
- **F-4 (observed, unresolved):** for the two Fill regions (grid, buttons), Alignment and Pack are hidden in the Properties panel. Their stored values are not displayed and are not verified.
- **F-5 (observed, unresolved):** a dashed outline is visible in the homepage column at about y 245 to 263, after T3's OK and in the reopened canvas. Its meaning is not established, and region fill is not visually established.
- **F-6 (observed):** Minimum Length and Maximum Length rows appear and disappear with the Unit value (FormUnit hides them; Flex shows them), as T3 and T4 recorded. Not investigated further.
- **F-7 (observed):** "Ref not found" events recurred in T2, T3, T4 and T5. Cumulative count: 19 (10 in T1 to T4; 9 in T5; see the table).
- **F-8 (observed):** the T5 homepage-rows screenshot name does not match its content (signinpage rows). The homepage rows have no screenshot.
- **F-9 (observed):** the Form was closed once and reopened once with no save prompt (the Form was clean).

Knowledge state: F-1 to F-3 and F-6 to F-9 are **observed**. F-4 and F-5 are **unresolved**. No finding is **candidate_procedure** or **replay_verified**, and none is claimed as durable beyond this browser session.

### Cumulative browser action audit (T1 to T5)

T1 to T4 are exact (see the T1 to T4 tables above). T5 has two columns: the first part (carried, not exact, n/r where unknown) and this part (exact).

| Action | T1 to T4 | T5 first part (carried) | T5 this part (exact) | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list | 4 | n/r | 0 | 4 + n/r |
| Tab select | 6 | n/r | 0 | 6 + n/r |
| Snapshot, untargeted | 29 | n/r (includes 1 depth-10 overflow) | 4 | 33 + n/r |
| Snapshot, targeted | 68 | n/r | 3 | 71 + n/r |
| "Ref not found" (click, snapshot, screenshot) | 10 | 7 (5 click, 2 snapshot) | 2 (1 click, 1 screenshot) | 19 |
| Find (read only) | 9 | n/r | 0 | 9 + n/r |
| Hover (adorner identification) | 4 | 0 | 0 | 4 |
| Click, Components row (selection) | 6 | 1 | 0 | 7 |
| Click, Components Expand (view only) | 1 | 1 | 0 | 2 |
| Click, Form-tab close control | 0 | 1 | 0 | 1 |
| Click, Form menu recent-forms entry (reopen) | 0 | 1 (menu-open click n/r) | 0 | 1 + n/r |
| Click, adorner by reference | 2 | 1 | 0 | 3 |
| Coordinate click, placement (canvas) | 1 | 0 | 0 | 1 |
| Coordinate click, adorner | 0 | 0 | 0 | 0 |
| Click, Regions grid row (selection) | 7 | 3 | 2 | 12 |
| Click, cell or arrow with no editor or list | 6 | n/r | 0 | 6 + n/r |
| Click, editor-opening cell | 4 | n/r | 0 | 4 + n/r |
| Click, list arrow that opened a list | 8 | 0 | 0 | 8 |
| Click, region add (+) | 4 | 0 | 0 | 4 |
| Click, Properties Name value | 1 | 0 | 0 | 1 |
| Click, Type row | 1 | 0 | 0 | 1 |
| Text entries | 8 | 0 | 0 | 8 |
| Tab key | 8 | 0 | 0 | 8 |
| Corrections | 0 | 0 | 0 | 0 |
| Undo | 0 | 0 | 0 | 0 |
| Dialog opens | 2 | 1 | 0 | 3 |
| Dialog OK | 2 | 0 | 0 | 2 |
| Dialog Cancel | 0 | 0 | 1 | 1 |
| List options picked | 8 | 0 | 0 | 8 |
| Designer Saves | 3 | 0 | 0 | 3 |
| Form closes | 0 | 1 | 0 | 1 |
| Form reopens | 0 | 1 | 0 | 1 |
| Re-logins | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Mouse moves | 3 | n/r | 0 | 3 + n/r |
| Mouse wheel (view only) | 6 | 2 | 0 | 8 |
| Screenshots (successful calls; files kept) | 20 (19 files) | 3 (2 files) | 1 (1 file) | 24 (22 files) |

Console error count (tool output): 2 errors, 0 warnings at every checkpoint in T1 to T5, including the end of T5. No rise.

### Worker-written file inventory (cumulative, T1 to T5)

- `experiments/EXP-112-hello-world-part-7-section-9-flexlayouthome.md` (created in T1; updated in T2, T3, T4 and T5).
- `evidence/EXP-112/` (22 PNG files; T1 6, T2 4, T3 7, T4 2, T5 3):
  - T1: `t1-gate-designer-tree-canvas.png`, `t1-carried-buttonsignin2-properties.png`, `t1-carried-editcustid-properties.png`, `t1-carried-editcustid-binding-type.png`, `t1-carried-staticcustid2-no-colon.png`, `t1-carried-staticimage1-bitmap.png`.
  - T2: `t2-placement-canvas-after-click.png`, `t2-placement-defaults-properties.png`, `t2-placement-defaults-layout.png`, `t2-save-response.png`.
  - T3: `t3-flexlayouthome-selected-adorners.png`, `t3-dialog-at-open.png`, `t3-type-row-selected.png`, `t3-type-list-open.png`, `t3-regions-grid-before-ok.png`, `t3-after-ok-before-save.png`, `t3-save-response.png`.
  - T4: `t4-regions-grid-five-rows-before-ok.png`, `t4-save-response.png`.
  - T5: `t5-reopened-canvas-and-tree.png`, `t5-reopened-tree-homepage-rows.png` (misnamed; shows signinpage rows), `t5-regions-grid-five-rows.png`.
- Tool-written, not worker-written, not read: the snapshot and console files under `evidence/playwright/` written by the browser tool for each task (for T5 this includes `console-2026-10-18T08-22-04-844Z.log` and the `page-2026-10-18T08-22-*` to `08-25-*` snapshot files). The count of these files was not checked. One depth-10 untargeted snapshot from T5 was saved by the tool to a location outside the repository and was not read.

### Cleanup inventory (final, T5)

Created by the worker in this experiment, all User scope on FX_CustomerPortal. Nothing was removed in this run (cleanup is recorded, not performed):

- **FlexLayoutHome** (FlexLayout, Container FlexLayoutMain, Pane 0, Index 3, Target homepage, Type **VerticalBox**, Auto Size False) in Region03: homepage. Its auto region Region00: UNKNOWN0 was replaced by the five planned regions in T3 and T4 (the auto region is not separately listed).
- **Region00: header** (4 FormUnit, Horizontal, Middle, Center).
- **Region01: spacer** (1 FormUnit, Horizontal, Top, Start).
- **Region02: grid** (2 Flex, Orientation Fill; Alignment and Pack hidden for Fill, stored values not displayed).
- **Region03: spacer2** (1 FormUnit, Horizontal, Top, Start).
- **Region04: buttons** (1 Flex, Orientation Fill; Alignment and Pack hidden for Fill).

No other object was created or changed. No global object was created or changed by the worker. No Theme Class, binding or event was set.

### Final state (end of T5)

- Tab 0 (Designer): `FX_CustomerPortal`, User scope, open and clean (Save disabled, Regenerate Form disabled, Undo disabled), no dialog, no list, no editor and no prompt open. The Components tree is expanded (view state).
- FlexLayoutHome in Region03: homepage with Type VerticalBox, Auto Size False, Region Index 3, and five regions in order: Region00 header (4 FormUnit, Horizontal, Middle, Center); Region01 spacer (1 FormUnit, Horizontal, Top, Start); Region02 grid (2 Flex, Fill); Region03 spacer2 (1 FormUnit, Horizontal, Top, Start); Region04 buttons (1 Flex, Fill). Read back in the reopened dialog in the same browser session. Not verified across sessions or in the database.
- Console: 2 errors, 0 warnings (unchanged from the baseline).
- Tab 1 (portal page): not changed in T5 (no action on it in this part).

## Cleanup inventory

Created so far (User scope, FX_CustomerPortal), all under **FlexLayoutHome** (FlexLayout, Container FlexLayoutMain, Index 3, Target homepage, Type **VerticalBox**) in Region03: homepage:

- **Region00: header** (4 FormUnit, Horizontal, Middle, Center).
- **Region01: spacer** (1 FormUnit, Horizontal, Top, Start).
- **Region02: grid** (2 Flex, Orientation Fill; Alignment and Pack hidden for Fill, stored values not displayed).
- **Region03: spacer2** (1 FormUnit, Horizontal, Top, Start).
- **Region04: buttons** (1 Flex, Orientation Fill; Alignment and Pack hidden for Fill).

Values are as displayed before OK in T4 and as read in the dialog after entry; they are not re-read after the save (T5 is the persistence readback). No other object was created or changed by the worker. No global object was created or changed by the worker.

## Final state (end of T1)

- Tab 0 (Designer): FX_CustomerPortal, User scope, open and clean (Save and Regenerate Form disabled), no dialog open, Components tab active, ButtonSignIn2 not selected (StaticImage1 remains the last row selected by the final click, which is selection only), console 2 errors, 0 warnings.
- Tab 1 (portal page): left as it was.
- No prompt, dialog, menu or unsaved change open.

## Final state (end of T3)

- Tab 0 (Designer): FX_CustomerPortal, User scope, clean (Save disabled after the one T3 Designer Save), no dialog, no list and no editor open. The Components tree is collapsed to Pane (00) (view state).
- FlexLayoutHome in Region03: homepage: Type VerticalBox (read in the dialog before OK; not re-read after the save; to be read back in T5); regions Region00: header (4 FormUnit, Horizontal, Middle, Center) and Region01: spacer (1 FormUnit, Horizontal, Top, Start). Two of five regions are in place.
- Console: 2 errors, 0 warnings (unchanged from the baseline).
- Tab 1 (portal page): not changed in T3.

## Final state (end of T4)

- Tab 0 (Designer): FX_CustomerPortal, User scope, clean (Save disabled after the one T4 Designer Save), no dialog, no list and no editor open. The Components tree is expanded (view state).
- FlexLayoutHome in Region03: homepage: Type VerticalBox (read in the dialog before OK; to be read back in T5), five regions in order: Region00 header (4 FormUnit, Horizontal, Middle, Center); Region01 spacer (1 FormUnit, Horizontal, Top, Start); Region02 grid (2 Flex, Fill); Region03 spacer2 (1 FormUnit, Horizontal, Top, Start); Region04 buttons (1 Flex, Fill). All values as displayed before OK and in the dialog after entry; not re-read after the save.
- Console: 2 errors, 0 warnings (unchanged from the baseline).
- Tab 1 (portal page): not changed.

## Next (none within this brief)

T1 to T5 of this brief are complete. Section 10 and later (Flex Layout Buttons, Static Home, Grid Items and their binding), Regenerate Form and any repair of an EXP-111 value are out of scope and were not started. The dashed outline in the homepage column (a T3 observation, to be checked in T5) still appears on the reopened canvas; its meaning is not established (F-5). The operator decides the next step.

## Outcome

T1 to T5 are recorded (2026-10-18). The run is complete as briefed, with observed findings only. It is **not** unconditionally accepted.

- T1: gate and carried EXP-111 readback recorded; Region03: homepage empty; no Mongoose change.
- T2: FlexLayoutHome placed as the only child of Region03: homepage, named, one Designer Save (toast read "Form [FX_CustomerPortal] and global object(s) were saved.").
- T3: Type VerticalBox; regions header and spacer; OK once; one Designer Save.
- T4: regions grid, spacer2 and buttons; five regions before OK; OK once; one Designer Save.
- T5: same-session close and reopen, no save prompt; five regions and values read back (dialog Type VerticalBox, Auto Size False, Region Index 3); one Cancel; no Save; Form open and clean; final audit written.

Limits: persistence is shown only within one browser session (no cross-session, database or replay claim). The homepage tree rows have no matching screenshot. Alignment and Pack for the Fill regions are not displayed. The homepage dashed outline is unexplained. The first part of T5 is carried from notes, so its counts are not exact (n/r). Discrepancies (T2 controller 4 vs worker 3; T4 controller 6 stale references vs 7 total tool errors) are retained and not reconciled.

## Outcome (operator, 2026-10-18)

Accepted (observed), with qualifications. **Hello World Part 7 Section 9 is complete: FlexLayoutMain > Region03: homepage of FX_CustomerPortal (User scope) holds FlexLayoutHome (Type VerticalBox, Auto Size False, Region Index 3) with regions header (4 FormUnit, Horizontal, Middle, Center), spacer (1 FormUnit, defaults Horizontal, Top, Start), grid (2 Flex, Fill), spacer2 (1 FormUnit, defaults) and buttons (1 Flex, Fill), read back in its attributes dialog after an ordinary close and reopen.** Run R-20261018-155838-VqiJ (5 worker tasks, no pause before the disposition).

- Changed, for later cleanup (User-scope Form FX_CustomerPortal): new FlexLayout FlexLayoutHome in Region03: homepage; its auto region UNKNOWN0 renamed header; four regions added one at a time. Three Designer Saves (T2, T3, T4), each with the standard toast; dialog OK twice (T3, T4); Cancel once (T5). No global object, no Theme Class, binding or event, no Regenerate, no Undo, no correction.
- **Carried EXP-111 readback (T1): all four matched.** ButtonSignIn2 Caption FX_sSignIn and Theme Class FX_BlueButton; EditCustID Justification Center and Binding Type None; StaticCustID2 No Colon True; StaticImage1 Bitmap File Name shown as the prefix FX_CustomerSignI (accepted by the brief: unique in the library, EXP-101). This closes the EXP-111 qualification.
- Screenshots viewed by the operator assistant: `t5-regions-grid-five-rows` (after reopen: 0 header 4 FormUnit, 1 spacer 1 FormUnit, 2 grid 2 Flex, 3 spacer2 1 FormUnit, 4 buttons 1 Flex); `t5-reopened-canvas-and-tree` (FX_CustomerPortal, User scope, Save disabled; homepage column with two dashed bands).
- **F-5 settled (operator):** the dashed bands in the homepage column are FlexLayoutHome's region dividers: about 70 px from the column top (header, 4 FormUnit) and about 18 px below it (spacer, 1 FormUnit); the Flex regions fill the rest. The canvas therefore shows the VerticalBox layout.
- Console (operator assistant, tool-written logs `evidence/playwright/console-2026-10-18T07-58*` to `T08-22*`): only the baseline "unload" permissions-policy errors; no HTTP 4xx/5xx, no GenerateServerEvent failure, no TypeError. The worker's count stayed at 2 throughout.
- Findings (observed):
  1. A FlexLayout placed in a Fill region gets Flex Attributes Index 3 Target homepage and one auto region UNKNOWN0 (as EXP-105 and EXP-108).
  2. Fill regions hide Alignment and Pack; FormUnit hides Minimum and Maximum Length (confirms EXP-109).
  3. The Edit FlexLayout Attributes adorner was reachable by reference (`flexlayouteditadorner-...`) in T5; no coordinate click was needed for it there.
  4. Targeted snapshots invalidate references outside their subtree; refs carried across tasks are always stale ("Ref not found" 19 times in the run, each recovered with a fresh untargeted snapshot).
- Qualifications accepted by the operator: same-session close and reopen (as in every earlier Part 7 experiment); the overwritten `t5-reopened-tree-homepage-rows.png` shows signinpage rows (homepage rows from snapshot text and the T5 grid); hidden Alignment and Pack for the Fill regions; T2 refs carried from T1 used before a fresh snapshot (recovered); unreconciled stale-reference counts (T2 controller 4 vs worker 3; T4 6 vs 7 tool errors); T5 first-part counts as lower bounds after compaction; two overwritten screenshots; three persisted oversized snapshots outside the repository, not read.
- Confinement (git status): only `evidence/EXP-112/` and this record were written by the run in the repository.
- Cleanup inventory (Section 9): FlexLayout FlexLayoutHome and its five regions on FX_CustomerPortal (User scope).
- Next: Hello World Part 7 Section 10 (16:54-17:59): FlexLayoutButtons in FlexLayoutHome's buttons region, with regions count (1 Flex, Horizontal, Top, End), spacer (1 FormUnit) and cart (1 Flex, Horizontal, Top, Start).

