# Playbook: Portal / shell Forms (Flex Forms, FlexLayouts, regions, pages, navigation, tiles, cart)

Knowledge state: **observed**. The whole Hello World Part 7–8 customer portal (FX_CustomerPortal) was
built and walked through at runtime (EXP-102–127). Each step is a single accepted run, and none is
replay-verified.

Reference build: **FX_CustomerPortal** (User scope):
- Primary Collection FX_Orders, Secondary Collection 2 FX_Items.
- Root VerticalBox header / main / footer.
- The main region holds menu, signinpage, homepage and cartpage regions, switched by the `FX_Page` variable.
- Inspect it in the Designer before building a new portal and copy its structure.

## 0. Rules that kept portal builds safe
- **Save after every small step.** The Designer can silently fail server events (HTTP 400 on `Designer/Form/GenerateServerEvent`), and the next Save then fails (EXP-110).
  - A Caption commit that **doesn't enable Save** is a stop signal.
  - Check `read_console_messages`/network for 400s when in doubt.
- **At the first "The server event processing returned an error", stop.**
  - The Designer stays broken, even for a Form close, until it is **reloaded**.
  - Check the portal tab for "Logout Successful". An expired session redirects to SSO and fails with CORS (EXP-103, 116, 124).
  - Reloading discards unsaved changes.
- Accessibility snapshots of big Designer pages or open Caption lists can exceed tool limits (about 784k chars). Use **targeted snapshots** of the panel or dialog you need (EXP-110, 114).
- The canvas often doesn't repaint theme colours or images until a reopen. Verify by reopening, not by the canvas (EXP-107, 108).

## 1. Create the shell Form
Designer → New → Category **Flex** → Wizard **Basic** (EXP-102, 104):
- Page 1: Name, **Unit Char**, Comments.
- Page 2: Save Template (unchecked).
- Finish → one FlexLayout `flexlayoutPane_<Form>` with 3 regions (HorizontalBox, each 1 Flex Vertical).

**Where to click New (BLD-003):** the embedded portal Designer's **New** button can stay disabled
even in a clean state. Use the **standalone Designer** instead: in the portal Mongoose toolbar,
click the wrench button immediately left of the Help `?` icon (tooltip **"Open designer in a new
window"**, DOM id `#mgtoolbarbutton-1125`). It opens a standalone Designer tab where **New** is
enabled. Create the Flex form there.

### Flex Form for one full-width web page (operator procedure, 2026-10-30)
Use this for a Form that only hosts one web user control (a custom web app). It differs from the portal steps
above: Unit **Pixel** instead of Char, and one Fill region instead of three.

Knowledge state: **verified** (operator approved the upgrade, 2026-11-01): run twice with persistence and runtime
checks (BLD-015 `FX_ServiceDesk`, BLD-018 `FX_ServiceDeskLogin`). After step 6 still read back Unit, the region
count and Orientation, then Save and reopen.
Observed details (BLD-015): in the Category list, click the option row (the label sat behind a tile graphic); Basic
is the only Flex wizard; the wizard saves the Form itself (Save disabled on open). The FlexLayout adorner is
`.mg-adorner-edit-flexlayout`; the Regions toolbar icons are add, delete (trash), up, down (no labels). Reopen
showed Unit **Pixel** and one Flex/Fill region.

Pick every value in steps 1, 2, 3 and 6 by **clicking the dropdown and its item. Never type into it**
(`browser-and-session.md`).
1. Designer → New → Category **Flex**.
2. Wizard **Basic**.
3. Unit **Pixel**.
4. Click the Flex component (the FlexLayout), then its top-left adorner **Edit FlexLayout Attributes**.
5. In the Regions grid, delete index **1** and index **2**.
6. Click index **0** and set Orientation to **Fill**.

Then place the UserControl in region 0 and point it at the page (§3b, `web-user-controls.md`).

Choosing Pixel here at creation avoided the "Unit read-only and locked to Char" case in §3b (BLD-003): Unit read
back as Pixel after reopen in both builds.

The page's CSS **must have media queries**: the page has to adapt to whatever width the Form gives it.

Add collections in **Details › Collections**:
- **+** creates a Secondary entry and raises an OK-only "You must regen this form…" prompt.
- Set Collection = IDO; Primary is set the same way.
- Then **Regenerate Form**. It is enabled only while the form has unsaved changes. Save + reopen is equivalent (EXP-117).
- Collections are referred to as "primary collection" / `object` and "secondary collection N" / `objectN` (with Grid binding `objectsN`).

## 2. FlexLayout attributes and regions
- Select the FlexLayout in the Components grid. In the canvas adorner, the first icon is **"Edit FlexLayout Attributes"**. It opens the FlexLayout dialog: Attributes, the Regions grid (Index/ID/Length) with add/delete/up/down, Properties, Preview, Contained Components, OK/Cancel.
- Option names:
  - Type HorizontalBox / VerticalBox.
  - Unit **FormUnit** / Flex.
  - Orientation Fill / Horizontal / Vertical.
  - Alignment: Left/Center/Stretch for Vertical; Top/Middle/Stretch for Horizontal.
  - Pack Start/Center/End (EXP-103-R2, 109, 113).
- Fill hides Alignment/Pack, and FormUnit hides Min/Max Length.
- **+** appends `UNKNOWN<n>_USER` (1 Flex, Horizontal, Top, Start). Rename the ID in Properties.
- Example root: header (4 FormUnit Fill), main (1 Flex Fill), footer (2 FormUnit Fill) (EXP-103-R3).
- Many regions in one dialog can exhaust a turn budget. Split the work: OK + Save, then reopen the dialog.

## 3. Nested FlexLayouts and components in regions
- Toolbox **FlexLayout** + one canvas click inside a region creates `flexLayout1_USER` as a child, with one auto region `UNKNOWN0`. Rename it with one fill + Tab (EXP-105, 108, 112, 113).
  - The Properties header keeps the old name until a reopen.
- Toolbox Static/Edit/Button + click inside a region places the component there.
  - **Flex Attributes** shows `Index: n Target: <region>`.
  - A second component in the same region goes next to the first.
- Per-component Margin is set through the component's own "Edit FlexLayout Attributes" adorner (top-left inside its box; coordinate click) → a dialog with Region Index + Margin, e.g. `0,1,0,1` (EXP-106, 111).
- Property locations:
  - **Justification**: Appearance.
  - **Size**: Layout `W; H` summary. Double-click it to get the Width/Height sub-rows.
  - **No Colon**: Miscellaneous › Specific Attributes.
  - **Theme Class**: see look-and-feel.md.
  - **Bitmap File Name**: combobox of the image library; open the list, click the item, Tab.
- **Caption combobox trap:**
  - A plain fill + Tab commits the **first list item** (`ApplyFullTextIndexScriptQuestion`).
  - Instead, type the string ID key by key and leave by clicking another Properties row (e.g. Description). Then click the ellipsis to create the string (EXP-106, 110-R3).
- **Width trap:** a region can auto-stretch a new component's width (e.g. 29.559…). Re-entering the same displayed value doesn't register. Enter a different value (EXP-121, 122).
- **Behavior group** expands on a double-click (Read-Only/Disable, Hidden, No Tab Stop…).

## 3b. Host a Web User Control that fills the form (BLD-002, BLD-003)
To make a WUC (HTML/JS/CSS asset) fill a Flex form:
- Reduce the FlexLayout to a **single full-width region** (remove the extra regions in the
  FlexLayout dialog). Evidence pattern: BLD-002 ASN Portal, BLD-003 CS16.
- Place a **UserControl** component (Toolbox → UserControl + one canvas click). Rename it.
- Set its **User Control Name** (Miscellaneous › Specific Attributes) via the ellipsis →
  "Edit User Control References" → **Use Web Control** → **Control URL** = the WUC asset
  (e.g. `FX_CS16/index.html`). OK raises an OK-only "regen this form (save + reopen)" prompt.
- **Fill the region:**
  - If `Unit` is editable, set it to **Pixel** and size the control to the region (BLD-002 used
    `964×684`).
  - If `Unit` is **read-only and locked to `Char`** (observed in BLD-003), fill with Char units
    instead: measure the region in px, compute the Char values, and set **Size** `W; H`
    (e.g. region `889×724 px` → `120; 40` Char → `885×720 px`). Double-click the **Size** cell to
    expose the Width/Height sub-rows; set each and commit by clicking the next cell.
- Save, close, reopen; read back `Name`, `Size`, and `User Control Name` to confirm persistence.
- **Runtime:** open the form in the Web Client. The WUC iframe renders the asset; a nested
  `blob:` iframe (e.g. a blob-injected game) runs inside it. A WUC iframe does **not** block the
  engine from booting (download/unpack/run all worked in BLD-003); external relay failures are a
  separate, non-WUC issue.

## 4. Grids and tiles
- **Grid** in a region:
  - Binding Type **Secondary Collection Grid**: OK-only regen prompt → Binding ellipsis "Select Secondary Collection" → `objects2`.
  - **Primary Collection Grid** gives `objects` (EXP-114, 121).
- **Grid columns:** "Edit grid column(s)" icon (no accessible name until hovered) → Contained Components dialog → + New → rename → OK (EXP-122).
  - Binding Type Property auto-sets `object._ItemId`. Pick the real property.
- **Tile Form:**
  - Classic › **Tile** wizard: 4 pages; pick only the properties you need with `<<` then `>`; uncheck Save Template (label click).
  - Set the form size small (e.g. `40; 4`), then lay out the Statics: picture ImageOnly + No Colon, item, description, cost (EXP-115, 116).
- **Host the tiles:** grid **Tile Form** = the tile form, **Tile When** = Always. At runtime there is one tile per record (EXP-117, 118).
- A secondary collection doesn't load on open. Refresh it from a handler: Response **Collection Refresh**, collection "secondary collection 2" (`object2`).

## 5. Pages, variables, visibility, navigation
- **Page variable on open:** a handler on **StdFormPredisplay**, Set Values `SETVARVALUES(FX_Page=1)`. The variable auto-appears as Form - Temporary (EXP-123).
- **Region visibility:** region property **VisibleWhen** `#V(FX_Page) = "2"`, plus **Visible in Design Mode** True so you can still edit it.
  - Build it in the Edit Condition builder.
  - **Edit the existing blank clause.** Clicking New raises a CListBox::SetCurSel script error.
  - Value types: Literal / Variable Value / Component Value / Property Value. Type the variable name + Tab.
- **Menu buttons:**
  - Handlers FX_HomeBtn etc., each Set Values `SETVARVALUES(FX_Page=2)`.
  - Each button's Events › Primary is its handler.
  - Set Response Type through the lower Properties grid › Response › **Type** arrow (EXP-124).
- **Enabled When:** e.g. `#V(FX_CustomerID) <> ""`. It is stored as `Enabled:#C(<btn>), #V(FX_CustomerID) <> "", "True"` (EXP-125).
- **Bind to a variable:**
  - Binding Type Variable → "Edit Variable Binding" (Variable, Initial Value, Clear On Refresh).
  - Shows as `variables.FX_Count(INITIALVALUE(1))` (EXP-120, 124).
- **Sign-in button:** handler row 0 Collection Refresh `object2`, then row 1 Set Values `FX_Page=2`.

## 6. Add to cart / drag-drop / checkout (EXP-126, 127)
- `FX_SetNewCartEntry`: Set Values with Properties → `SETPROPVALUES(FX_Item=P(2.FX_Item),FX_Count=V(FX_Count),FX_CustomerID=V(FX_CustomerID))`.
  - `P(2.X)` is a secondary-collection property.
- `FX_AddToCart`:
  - row 0 Collection Make Current `object`;
  - row 1 Collection New `object`;
  - row 2 **Generate event** `FX_SetNewCartEntry( POST() )`.
- GridItems **Drag From Events** and ButtonAddToCart **Drop On Events** = FX_AddToCart.
- ButtonCheckout Primary = **StdFormSave**. It saves with no prompt; the row's star disappears.
- Playwright `browser_drag` works for tile drag-and-drop.

## 7. Runtime check
1. Open from the Web Client (Form → **Open** → Select Form dialog):
   - The filter box is pre-filled with the current form's name. Clear it, type the target name,
     and **wait for the grid to refresh** before selecting.
   - **Enter-trap (BLD-003):** pressing Enter in the filter box submits the dialog with the
     currently-selected row (often the pre-filled one), not the filtered result. Instead, click the
     target row, then click **OK**.
2. Walk each page: sign-in → home (tiles) → cart.
3. Verify the persisted rows through the data Form (FiP + F4).

- A re-login reopens the portal's favourite runtime Form and closes the Designer form.
- Idle runtime forms show "Session Expired"; OK reloads the page (EXP-125).
