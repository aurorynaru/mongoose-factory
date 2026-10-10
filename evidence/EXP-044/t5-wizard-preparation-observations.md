# EXP-044 T5 — Clean SQL Tables closure and New Data Maintenance wizard preparation: observations

Date: 2026-10-10. Task T5 (task_message_id `283e4c81-e665-4fe6-bf31-2084ae919ba9`, cycle 5). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single session, UI level). Not replay_verified.

**Result: SQL Tables Form tab closed cleanly with no prompt. The Designer's New Form Definition route opened the Data Maintenance wizard (Category NewData, Wizard Maintenance). Page 1 is prepared: IDO Name `FX_UMs`, IDO Project Name `FX_HelloWorldProject01` (selected from the visible lookup), Table Alias `fxum`. The field grid row 1 is the blank starred placeholder and was NOT deleted or configured. The wizard is left open. No Next, no field configuration, no Finish, no Save, no lifecycle action.**

## 1. Preflight

| Item | Observed |
| --- | --- |
| Tab 0 `Mongoose` (Web Client) | Current at start. Runtime tabs: `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables` (selected). URL `favoriteContext=SqlTables`. |
| Sql Tables state | Grid row 1 starred and blank; `* Table Name` / `* Schema` required headers; Columns…, Update Current Table, New Constraint, Modify Constraint disabled; toolbar Save `[disabled]`; status `Table Name (SQL Tables 1 of 1)`. No dialog. (Matches T4 `t4-06`.) |
| Tab 1 Designer | Current after selection. Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Form `Property Classes` (vendor `IdoPropertyClasses`) in design view. Toolbar Save `[disabled]`, Undo `[disabled]`. Not edited. |
| Dialogs / banners | None (find: no dialog, alertdialog, portal-notification, unsaved, Save changes). |

## 2. Sql Tables closure

| Step | Observed | Evidence |
| --- | --- | --- |
| Fresh snapshot of the tablist (`f1e91`, depth 4) | Tab `Sql Tables` selected (`f1e102`); close control `Close Panel Sql Tables` `f1e104` (label verified in the snapshot). | snapshot |
| Click `f1e104`, once | Returned with no error. URL changed from `favoriteContext=SqlTables` to `favoriteContext=IdoCollections`. | tab listing |
| Post-click find (`Close Panel`, dialog, alertdialog, Save changes, unsaved, discard, validation) | Tabs now `FX_HelloWorld01`, `Property Classes`, `IDOs` (selected). **Sql Tables tab removed.** **No save-changes, discard, validation, or confirmation prompt.** | find; `t5-01` |

**Placeholder disposition.** The unsaved add-mode placeholder from the `FX_UMs` query (T4) was not saved, typed into, or discarded by any worker action. Its disappearance with the tab is consistent with an implicit discard on close. No prompt was offered, and no save occurred (no Save click; Save was disabled before close). This is observed as "removed with the tab, no prompt"; the mechanism is not proven.

Screenshot `t5-01-after-sqltables-tab-close-click.png`: shows the tabs `FX_HelloWorld01`, `Property Classes`, `IDOs` (selected); the Sql Tables tab absent; no dialog. Proves the tab removal. Does not prove that no server-side record was created (no database read).

## 3. Designer route to New Data Maintenance

| Step | Observed | Evidence |
| --- | --- | --- |
| Select Designer tab (index 1), snapshot (depth 3) | Designer in User scope; `Property Classes` design view; Save disabled, Undo disabled | snapshot |
| Designer toolbar `New` `e19` (tool id `#ext-element-33`), once | Form Wizard Selection dialog appeared (`e1559`): New Form radio active; Category and Wizard empty; OK `e1591` (verified label), Cancel `e1593`, Help `e1595`. | snapshot `e1559` |
| Category trigger `e1576`; option `New Data` `e1657` | Category combobox reads `NewData`. | find |
| Wizard trigger `e1584`; option `Maintenance` `e1682` | Wizard combobox reads `Maintenance`. | snapshot `e1559` (labels verified) |
| OK `e1591` (verified label), once | Data Maintenance Wizard dialog (`e1706`) opened on page 1. | snapshot `e1706` |

**Note on refs.** The earlier snapshot ref `e1739` (T1 wizard) was used as a target in one snapshot call and returned an unrelated element (the wizard's `textbox` at that position). This was a stale-ref target, not a tool error. The correct dialog ref `e1706` was then identified by `find` "Data Maintenance Wizard" and verified by a targeted snapshot before any action on the wizard.

## 4. Page 1 preparation (values verified after each commit)

| Field | Ref | Action | Visible value after commit (verified by snapshot) |
| --- | --- | --- | --- |
| IDO Name | `e1740` | one plain fill `FX_UMs`, then one Tab | **`FX_UMs`** (textbox `e1740`) |
| Table Alias | `e1755` | one plain fill `fxum`, then one Tab | **`fxum`** (textbox `e1755`) |
| IDO Project Name | combobox `e1747` | Open `e1748` (lookup), then visible option `FX_HelloWorldProject01` `e1910` (cell), then one Tab | **`FX_HelloWorldProject01`** (combobox `e1747`) |

### IDO Project Name lookup — exact result

- Lookup opened by the visible Open button `e1748`. The listbox `e1905` contained 14 options. The option `FX_HelloWorldProject01` (`e1910`) was marked `[selected]` on open, and was then clicked explicitly.
- Full option list (in order): `FX_HelloWorldProject01` (selected), `HelloWorld`, `HelloWorld_Kael`, `HelloWorld_Test`, `Hi world`, `LearnMongoose`, `Market ePortal`, `Mockup`, `MyPortal`, `ReceivingPortal`, `SamplePortal`, `SDTest`, `SMRVendorPortal`, `UsrW4Integration`.
- Identity: the option displays the name `FX_HelloWorldProject01` exactly. Its description and Access As were not shown in this lookup, so the EXP-039 identity (description `Factory Hello World test project`, Access As `G6R`) is cited, not re-read here.
- Selection availability: **available and selectable** (the option was offered and the explicit click plus Tab left the combobox at `FX_HelloWorldProject01`).

### Page 1 values not changed

- Site Split unchecked; Table Name and View Name disabled and empty (not used).
- Form Type `MultiView`; Form Layout `GridLeft`; Device Type `Default` (defaults, not changed).

## 5. Field grid (initial state, NOT configured)

- Name grid: row 1 blank with star (`★1`) in the screenshot; Name cell empty. Snapshot: row `1` with empty gridcell (`e1811`).
- Property grid: row 1 empty; Primary Key and Required checkboxes not checked.
- Buttons: Add Row, Delete Row, Delete All Rows, Get Database Schema, Add Subcollection present; Move Up/Down present.
- The row 1 placeholder was **not** deleted, edited, or configured. The brief forbids field changes in T5.

Screenshot `t5-02-wizard-page1-prepared-FX_UMs-fxum-FX_HelloWorldProject01.png`: shows IDO Name `FX_UMs`, IDO Project Name `FX_HelloWorldProject01`, Table Alias `fxum` (focused), MultiView / GridLeft / Default, the field grid row 1 blank with the star, Back disabled, Next enabled, Finish disabled, Cancel enabled. Proves the page 1 values and the placeholder state at the time of capture. Does not prove any value committed to the server, and does not prove the collision-free state beyond T2b/T4.

## 6. Final checks

- `find` for alertdialog, "Are you sure", Save changes, portal-notification: none. Only the Data Maintenance Wizard dialog (`e1706`) is open.
- Designer status bar still `ScopeType: User`.

## 7. Operation counts (T5)

| Operation | Count |
| --- | --- |
| Sql Tables tab close | **1** (no prompt) |
| Save / Finish / Create Form / New (object) | **0 / 0 / 0 / 0** (Designer toolbar New was used only to open the wizard selection, not to create an object) |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Field-grid edits, Add Row, Delete Row | **0 / 0 / 0** |
| Wizard Next / Back / Finish | **0 / 0 / 0** |
| Designer Form edits or saves | **0** (vendor `IdoPropertyClasses` untouched) |
| Form Wizard Selection OK | **1** |
| Plain fills (wizard values) | **2** (IDO Name, Table Alias) |
| Tab commits | **3** (IDO Name, Table Alias, IDO Project Name) |
| Lookup open (Project) | **1** |
| Lookup option selections | **1** (`FX_HelloWorldProject01`) |
| Tab-strip selections (browser navigation) | **1** (Designer tab) |
| Dropdown triggers and options (Category, Wizard) | **4** clicks |
| Screenshots | **2** (`t5-01`, `t5-02`) |
| Errors | **0** (no Ref-not-found, no timeout, no hook denial) |
| Recovery snapshots | **0 of 1** used |
| Corrected visible inspections | **0 of 1** used |
| Prompts answered | **0** (the Sql Tables close produced no prompt) |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

## 8. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t5-01-after-sqltables-tab-close-click.png` | Tabs `FX_HelloWorld01`, `Property Classes`, `IDOs` (selected); no Sql Tables tab; no dialog | Sql Tables Form tab removed; no prompt | Server-side state of the placeholder |
| `t5-02-wizard-page1-prepared-FX_UMs-fxum-FX_HelloWorldProject01.png` | Data Maintenance Wizard page 1: IDO Name `FX_UMs`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxum`; field row 1 blank with star; Finish disabled | **The three intended page-1 values are displayed after their commits; the placeholder state of field row 1; the wizard is open** | Field configuration (not started); any committed object |

## 9. Final browser state (last verified)

- Tab 0 (Mongoose / Web Client): `IDOs` Form selected (`favoriteContext=IdoCollections`); runtime tabs `FX_HelloWorld01`, `Property Classes`. The Data Maintenance Wizard dialog is open on page 1, prepared as above. Finish disabled; Next enabled and **not pressed**.
- Tab 1 (Designer, User scope): `IdoPropertyClasses` design view, unchanged, Save disabled. The wizard is open over it.
- No prompt, no browser-native dialog, no portal banner at the last check.
