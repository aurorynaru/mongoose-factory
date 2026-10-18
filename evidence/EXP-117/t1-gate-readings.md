# EXP-117 T1 gate readings (2026-10-18, task_message_id 4d0c2883-9429-4ee4-b24f-6877655a00fb)

Observed only. No value was changed, no Save was invoked, no Regenerate was clicked.
Source of every reading: inline or targeted accessibility snapshots, and the screenshots named below (`t1-NN-*.png`).

## Browser, session, scope

- Tabs (listed before the first selection): 0 = Designer (`designer/default.aspx?MGForm=FX_ItemsTile` at start); 1 = Web Client "Mongoose" (portal URL, `favoriteContext=FX_ItemsTile`).
- Tab 1 (Web Client) checked by snapshot: Mongoose Explorer shown; no Session Expired modal, no sign-in form, no "Logout Successful". Its page console read "2 errors, 2 warnings" (not acted on).
- Designer at start: FX_ItemsTile open and clean (Save disabled); ScopeType User, ScopeName = signed-in user; no dialog; console "2 errors, 0 warnings". No "Identify Your Editing Scope" dialog appeared.
- No session expiry, no server-event error, no re-login in T1.

## Form close and open

- FX_ItemsTile closed once through its tab close control. No save prompt appeared. Designer URL lost the `MGForm` parameter.
- Form menu recent-forms list (screenshot not taken; read from snapshot): FX_ItemsTile, FX_Items, FX_CustomerPortal, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01. Other menu rows present and not clicked: Definition, Sign Out, IDO Properties, IDOs.
- FX_CustomerPortal opened once from the recent-forms entry (URL now `MGForm=FX_CustomerPortal`). Save disabled; ScopeType User.
- Form properties: Name FX_CustomerPortal; Device Type Default; Form Type Flex; Unit Char; Size 120; 40; Synchronize FlexLayout attributes True.

## Details > Collections

- Primary Collection: FX_Orders
- Secondary Collection 2: FX_Items

## Details > Event Handlers (Form level), screenshot t1-14

- Table headers: Sequence, Response Type, Disabled, Response Parameters. No rows. Handler property grid (Event To Handle) empty. So no FX_SignInBtn handler exists yet.

## Details > Components (expanded all), tree as displayed

Pane (00)
- flexlayoutPane_FX_CustomerPortal (FlexLayout)
  - Region00: header > FlexLayoutHeader (FlexLayout) > Region00: header > StaticHeader; Region01: user > StaticCustIcon, StaticCustID (Static)
  - Region01: main > FlexLayoutMain (FlexLayout)
    - Region00: menu > ButtonSignIn, ButtonHome, ButtonCart (PushButton)
    - Region01: spacer1
    - Region02: signinpage > StaticSignIn, StaticImage1, StaticCustID2 (Static), EditCustID (Edit), ButtonSignIn2 (PushButton; Container FlexLayoutMain)
    - Region03: homepage > FlexLayoutHome (FlexLayout)
      - Region00: header > StaticHome (Static; Container FlexLayoutHome)
      - Region01: spacer
      - Region02: grid > GridItems (Grid; Data Source objects2; Container FlexLayoutHome) > gridColumn1_USER, gridColumn2_USER (GridColumn; Container GridItems)
      - Region03: spacer2
      - Region04: buttons > FlexLayoutButtons (FlexLayout) > Region00: count, Region01: spacer, Region02: cart, Region04: cartpage, Region05: spacer2 (nesting under FlexLayoutButtons as displayed)
  - Region02: footer > FlexLayoutFooter (FlexLayout)
  - Region00: UNKNOWN0

Matches the brief's EXP-114 acceptance for the two named items: GridItems (Grid) under FlexLayoutHome > Region02: grid with two GridColumns; ButtonSignIn2 under FlexLayoutMain > Region02: signinpage. The other rows are recorded as displayed; their earlier acceptance records were not read (scope rule).

Screenshot coverage: t1-01 shows only the GridItems part of the tree (Region01: spacer, Region02: grid, GridItems, gridColumn1/2). The full tree is recorded in the text read above, not in a screenshot.

## GridItems (Grid), Components row click did not switch Properties; Type cell did (t1-01)

- Name GridItems; Type Grid; From Device Master True; Description blank; Caption blank.
- Data Source: Binding Type "Secondary Collection Grid"; Binding "objects2".
- Layout: Unit Char; Size 29.4237288135593; 18.8333333333333; Width 29.423728813559322; Height 18.833333333333332; Lock Size False; Tab Order 0; Order blank; Flex Attributes "Index: 2 Target: grid".
- Miscellaneous group (expanded; t1-02). Rows in display order:
  - Extension Properties: button only (no value).
  - Specific Attributes (group, expanded), then:
    - Client Grid Pagination: None (list, see below)
    - Grid Button Height: 0
    - Group: False (list)
    - No Row Header: False (list)
    - No Scroll: False (list)
    - Stretch Columns: False (list)
    - Tile Form: blank (list)
    - Tile When: blank (list)
  - Free-Form Data Type (group, collapsed, not expanded)
  - The tree is flat; nesting cannot be read from indentation in this build, so the rows are recorded in display order.
- Tile Form is the row named "Tile Form". Tile When is the Miscellaneous row directly below it.

### List options (each opened view-only; none chosen)

| Row | Value before | Options as displayed | Closed by |
|---|---|---|---|
| Tile Form (t1-03) | blank | FX_ItemsTile; WSFormBuilderFormTypeTile; WSFormBuilderLayoutsTile; WSFormBuilderLayoutTypeTile; WSFormBuilderTemplateWidgetListTile; WSFormWizardCategoryTile; WSFormWizardTile; WSRuntimeBuilderFormTypeTile; WSRuntimeBuilderLayoutTypeTile (nine, list fully visible) | Description row click (t1-04: blank, no change) |
| Tile When (t1-05) | blank | Always; <n> (tile when width < n char units); Interpreted values (variables, keywords); Never | Escape (t1-06: blank, no change) after two intercepted description clicks |
| Client Grid Pagination (t1-07) | None | None (current); FullFeatured; NavigationButtons; NavPlusGetMoreRows; NavPlusPageSelector; NavPlusPageSelPlusGetMore; NavPlusRecordNumber; FullFeaturedOnTop; NavigationButtonsOnTop; NavPlusGetMoreRowsOnTop; NavPlusPageSelectorOnTop; NavPlusPageSelPlusGetMoreOnTop; further entries below the visible area (not read) | Escape (t1-08: None, no change) |
| Group (t1-09) | False | True; False (current) | Escape |
| No Row Header (t1-10) | False | True; False (current) | Escape |
| No Scroll (t1-11) | False | True; False (current) | Escape |
| Stretch Columns (t1-12) | False | True; False (current) | Escape (t1-13: all Miscellaneous lists closed, values unchanged) |

Tile When description (as displayed): "Grid changes to tile mode on this condition. String values of Always, Never or a numeric max-width value, may be entered directly, or use interpreted value syntax such as V(varName) and/or Substitution Keywords."
Tile Form description (as displayed): "Name of tile form to use, or an expression that evaluates to a tile form name".

Candidate for the tile setting (ambiguity item 3): the row directly below Tile Form is Tile When, and its list offers Always. It is the only row directly below Tile Form, so there is exactly one candidate. Label and options recorded here; the T2 change itself is not performed in T1.

## ButtonSignIn2 (Button), selected by its Type cell (t1-15)

- Name ButtonSignIn2 (signinpage, not the menu ButtonSignIn); Caption FX_sSignIn (string resource, untouched); Type PushButton; From Device Master True; Theme Class FX_BlueButton; Binding Type None; Binding blank; Size 20; 1.5; Flex Attributes "Index: 2 Target: signinpage".
- Events group (expanded by one coordinate click on its expander; t1-16 collapsed, t1-17 expanded):
  - Primary: blank (list arrow present, not opened)
  - Data Change: blank
  - Lose Focus: blank
  - Gain Focus: blank
  - Drag From Events: 0 event(s)
  - Drop On Events: 0 event(s)
  - Help, Inheritance: collapsed groups, not read further

## Designer state at end of T1

- FX_CustomerPortal active; toolbar read: Save disabled, Regenerate Form disabled, Undo and Redo disabled. Clean.
- No dialog, no list, no editor open. Details on the Components tab; Properties on ButtonSignIn2 with Events expanded (view state only).
- Designer console at end: 2 errors, 0 warnings (unchanged from the baseline).
