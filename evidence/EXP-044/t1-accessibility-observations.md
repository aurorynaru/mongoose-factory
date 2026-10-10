# EXP-044 T1 — Accessibility and lookup observations

Date: 2026-10-10. Task T1 (read-only prerequisite gate). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single run, UI level). Not replay_verified.

## 1. Preflight (Web Client, before any Designer action)

Source: fresh untargeted snapshot at task start (Mongoose tab selected; page URL `...?favoriteContext=IdoPropertyClasses...`).

| Item | Observed (accessibility tree) |
| --- | --- |
| Browser tabs | Two portal tabs (`System Administrator`, `Mongoose`); `Mongoose` selected. Browser tab list at start: one `Mongoose` tab. |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (button `f1e22`) |
| Runtime Form tabs | `FX_HelloWorld01` (not selected) and `Property Classes` (selected, `f1e102`) |
| Property Classes Form | Grid row 1: Class Name `FX_UMBase`, Revision No `1`, Locked By `anton.ramos@3mworks.com.ph`, Revision Date `10/10/2026`, Access As `G6R`, Data Type `String`, Length `10`, Column Data Type `nvarchar`, Label String ID `FX_sUM`. Required / Read Only Record / Validate Immediately checkboxes not checked. |
| Lifecycle of FX_UMBase | `Check In` (`f1e506`) and `Undo Check Out` (`f1e508`) present and enabled; `Locked By` populated. FX_UMBase is still checked out, as left by EXP-043. Not acted on. |
| Save | Disabled (`f1e28` `[disabled]`) |
| Status bar | `Base Class (IDO Property Classes 1 of 1)` |
| Dialogs / banners | None. No `portal-notification` strip. No browser-native dialog. |
| Designer | Not open at start. Opened in T1 (see section 2). |

## 2. Designer route (T1)

| Step | Observed |
| --- | --- |
| Toolbar `Designer` buttons in the Web Client iframe | Two named `Designer` buttons: `f1e54` (contains `Designer` `f1e55`) and `f1e57` (`Designer` `f1e58`). |
| Hover `f1e54` | Tooltip `Runtime Builder...` (screenshot `t1-00-toolbar-designer-tooltip-probe.png`). Tool-reported id `#mgtoolbarbutton-1124`. |
| Hover `f1e57` and mouse probes at x=725 and x=690 (y=92) | No tooltip captured (`t1-00b`, `t1-00c`, `t1-00d`). Tooltip identity for `f1e57` **not established** by hover. |
| Click `f1e57` (tool-reported id `#mgtoolbarbutton-1125`), once | A new browser tab opened: `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` at `.../WSWebClient/designer/default.aspx`. Not the Runtime Builder dialog. |
| Designer `Identify Your Editing Scope` dialog | Scope combobox `User`; User combobox `anton.ramos@3mworks.com.ph`; buttons `OK` (`e305`), `Cancel` (`e307`), `Help` (`e309`). Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. |
| OK (`e305`), once | Designer loaded `?MGForm=IdoPropertyClasses` (auto-load of the Web Client's current Form, load-only). |
| Designer toolbar `New` (`e19`, tool id `#mgtoolbarbutton-1088`), once | Dialog `Form Wizard Selection`: radio `New Form` active; Category combobox empty; Wizard combobox empty; `Extend Form` radio; buttons `OK` (`e1624`), `Cancel` (`e1626`), `Help` (`e1628`). |
| Category option `New Data` (`e1690`) | Category combobox reads `NewData`. |
| Wizard option `Maintenance` (`e1715`) | Description: "Creating a table, IDO, and (optionally) form". Wizard combobox reads `Maintenance`. |
| OK (`e1624`), once | Dialog `Data Maintenance Wizard` (`e1739`) opened on page 1. |

## 3. Wizard page 1 (initial state, before any entry by T1)

Source: snapshot of dialog `e1739` and screenshot `t1-01-wizard-page1-initial-state.png`.

| Field | Observed |
| --- | --- |
| IDO Name | Empty (textbox, focused) |
| IDO Project Name | Combobox `FX_HelloWorldProject01` (pre-populated; not entered by T1; availability for selection **not** tested) |
| Table Alias | Empty |
| Form Type | `MultiView` |
| Form Layout | `GridLeft` |
| Device Type | `Default` |
| Site Split | Unchecked; Table Name and View Name disabled and empty |
| Field grid (Name) | Row 1 blank (new-row placeholder, star `★1` in screenshot) |
| Field grid (Property Class …) | Row 1 blank, Primary Key and Required unchecked |
| Buttons | `Back` disabled; `Next` enabled; `Finish` disabled; `Cancel` enabled; `Help` enabled. `Add Row`, `Delete Row`, `Delete All Rows`, `Get Database Schema`, `Add Subcollection` present. |

## 4. Property Class lookup (decisive observations)

Entry path: click row-1 `Property Class` cell (`e1898`, no value typed) → cell editor combobox `e1944` active, `Open` button `e1945` → click `Open` once.

### 4a. Unfiltered list, first page (snapshot taken while the listbox `e1947` was open)

The listbox (`e1947`) contained `option` rows whose cell text includes, in order: `AccessAs`, `AlphaKey`, `AlphaPrefix`, `Amount`, `AppModuleName`, … `FullObjectPath`, **`FX_UMBase`** (`cell "FX_UMBase" [ref=e2174]`), `G6RCost`, `G6RItemBase`, `G6RPiture`, `G6RUM`, `G6RUnitBase`, `GenericBigIntType`, … (ended at `MessageNumberBase` in the captured DOM segment, i.e. the list is paged; the full extent was not enumerated).

Screenshot `t1-02-property-class-lookup-open-after-recovery-inspection.png`: the listbox viewport shows `AccessAs` through `AssemblyReferences`. `FX_UMBase` is **not** in that viewport.

### 4b. Scrolled view (mouse over the listbox, wheel deltaY 2600)

Screenshot `t1-03-property-class-lookup-scrolled-to-FX_UMBase.png`: listbox viewport shows `FldNameBase`, `FlowAction`, `FlowType`, `FolderName`, `FontDescriptor`, `FormName`, `FullObjectPath` (grey highlight = pointer hover, not a selection; combobox still empty), **`FX_UMBase`** (row at approx. y=752), `G6RCost`, `G6RItemBase`, `G6RPiture`, `G6RUM`.

### 4c. Filter

A typed prefix filter (`FX_UM`) was **not** applied. The attempt to type into `e1944` returned `Ref e1944 not found` (see the recovery accounting in the record). Lookup criteria used: **none** (unfiltered, scrolled list).

### 4d. Selection (uncommitted)

One click at the `FX_UMBase` row (coordinates x=875, y=752, the visible row shown in `t1-03`). Screenshot `t1-04-property-class-after-FX_UMBase-click-uncommitted.png`:
- Row-1 Property Class editor displays `FX_UMBase` (text selected).
- Row-1 Data Type displays `String`.
- Row-1 SQL Data Type displays `nvarchar`.
- Length and Label String ID columns are off-screen right (not read in T1).
- Wizard buttons: `Next` enabled; `Finish` disabled; `Cancel` enabled.

The selection was never committed by Finish. Cancel discarded it.

## 5. Cancel (T1 wizard closed without Finish)

| Step | Observed |
| --- | --- |
| `find` "Cancel" | `Cancel` `e1933` (label verified in the same output) |
| Click `Cancel` (`e1933`), once | Confirmation alertdialog appeared (`e2359`, title `Infor Mongoose Application Development Framework - Data Maintenance Wizard`) |
| Fresh snapshot of `e2359` (before acting) | Text: `Are you sure you want to cancel? All data entered will be lost.` Buttons: `Yes` (`e2363`, active), `No` (`e2365`). |
| Click `Yes` (`e2363`), once | Wizard closed. |
| `find` "Data Maintenance" after Yes | No matches. |
| Screenshot `t1-06-final-designer-state-after-wizard-cancel.png` | Designer shows the `IdoPropertyClasses` Form in design view; no wizard; no dialog; `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save greyed. |

Decision recorded: `No` was not chosen. `Yes` was chosen because the Cancel was the authorized T1 action, and the only data at stake was this task's own uncommitted `FX_UMBase` selection. No object was created.

## 6. Limits of these observations

- The lookup was read as an unfiltered, paged list. Uniqueness of the `FX_UMBase` option was observed only in the segments shown (4a, 4b). Property Class Name is the key of the IDO Property Classes collection (EXP-043 observed the Class Name as greyed key in the Form), so the observed row is taken as the single entry for that name. This is an inference from EXP-043, not a full enumeration in T1.
- The decisive gate evidence is a visible option plus a selection showing `FX_UMBase`, `String`, `nvarchar`. Length 10 and Label String ID `FX_sUM` were not read in the wizard in T1 (they were off-screen right).
- No database read. No collision gate. No save.
