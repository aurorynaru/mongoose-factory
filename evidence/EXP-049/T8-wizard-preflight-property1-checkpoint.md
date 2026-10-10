# EXP-049 — T8 wizard preflight, identity, and property 1 checkpoint

Run: R-20261011-020822-9Eej, cycle 8, task T8 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
Scope: open the Data Maintenance wizard by the EXP-044 route; set the IDO identity values; configure property 1 only (FX_Item, FX_ItemBase, Primary Key, Required). **Not done:** properties 2 to 4, Finish, Next, Back, Save, Create Form response, New, Delete, check-in, check-out, Designer edit, close or reopen of any Form, Cancel. The wizard is **left open** for coordinator review (see Current state).

## Inputs read first
- `experiments/EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md` (T7 record, created in T7).
- `experiments/EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md`, the wizard route (Grep): Designer toolbar New → Form Wizard Selection (Category New Data, Wizard Maintenance) → OK → Data Maintenance Wizard. EXP-044 also records that Table Name and Site Split are not used on this page, and that Primary Key ticks Required.
- `T5-sqltables-collision-gate.md`, `T6-idos-collision-gate.md` (both gates passed at same-session UI level; the T6-01 note was resolved in T7).

## Pre-wizard state (observed)
- `browser_tabs list` at start: **tab 0 current** (Designer, `MGForm=IdoPropertyClasses`) — the fifth occurrence of the tab-0 reversion, cause unknown. Tab 1 (Web Client) was on the Export/Import Strings Form (left from T7).
- Fresh `browser_snapshot` of tab 0: Designer, IdoPropertyClasses design view, **Save `[disabled]`**, Regenerate Form disabled, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. No dialog, no unsaved-change indication.
- Identity bar of the Web Client (T7): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Site Developer capability: **not verified**.

## Wizard navigation (count and outcome)
| # | Action | Result |
| --- | --- | --- |
| 1 | Click Designer toolbar `New` (ref `e19`) | **Timeout** "waiting for element to be visible, enabled and stable" (element resolved to `button tabindex=-1 class=btn-icon`). No action. |
| 2 | Click Designer `New` wrapper (ref `e18`), one corrected attempt | **Timeout** (element resolved to `div role=button id=mgtoolbarbutton-1088`). No action. |
| 3 | `browser_tabs select index=0` (navigation only) | Tab 0 current. This is the step that resolved the timeouts: the Designer was not the foreground tab. |
| 4 | `find` "New" (targeted, read-only) | Refs unchanged (`e18`/`e19`). |
| 5 | Click Designer `New` (`e19`), corrected visible attempt | **Success.** Form Wizard Selection dialog opened (`New Form` radio active). |
| 6 | Click Category trigger (`e1577`) | Listbox opened. |
| 7 | Click option `New Data` (`e1659`) | Category reads `NewData`. |
| 8 | Click Wizard trigger (`e1585`) | Listbox opened. |
| 9 | Click option `Maintenance` (`e1684`) | Wizard reads `Maintenance` (description "Creating a table, IDO, and (optionally) form"). |
| 10 | Click `OK` (`e1592`), once | Data Maintenance Wizard opened on page 1 (`e1708`). |
| 11 | `type` IDO Name (`e1742`) = `FX_Items` | Accepted (`find` shows `FX_Items`). |
| 12 | `type` Table Name (`e1728`) = `FX_Items` | **Refused**: the element is `TableNameEdit`, `readonly`, not editable (the Site Split group is unchecked). Timed out after 5 s; **no text entered**. Not repeated. |
| 13 | `find` "FX_Items" (read) | Only the IDO Name field holds `FX_Items`; Table Name remains empty, as EXP-044 and EXP-040 recorded. |
| 14 | `type` Table Alias (`e1757`) = `fxitms` | Accepted (`find` shows `fxitms`). |
| 15 | Click Property Class cell, grid row 1 (`e1867`) | Cell became an active combobox (`e1913`) with an Open button (`e1914`). |
| 16 | Click Property Class `Open` (`e1914`) | Native lookup listbox opened. Visible rows include **FX_Cost** (`e2142`), **FX_ItemBase** (`e2144`), **FX_UM** (`e2146`). The list was not scrolled to the end. |
| 17 | Click option `FX_ItemBase` (`e2144`) | Combobox reads **FX_ItemBase**. |
| 18 | Click Primary Key checkbox (`e1877`) | Primary Key `[checked]`, and **Required also `[checked]`** (ticked automatically, as EXP-044 recorded). |
| 19 | Click Name cell, row 1 (`e1813`) | Active textbox (`e2338`). |
| 20 | `type` `FX_Item` into `e2338`, then `Tab` | Name cell reads `FX_Item`. |

- **Wizard opened:** 1. **Form Wizard Selection OK:** 1. **Finish:** 0 (button remains `[disabled]`). **Next / Back:** 0. **Cancel:** 0. **Create Form response:** 0. **Save:** 0. **New (wizard row or object):** 0 (the Designer `New` opened the wizard selection only). **Check in / check out:** 0. **Designer edits:** 0. **Browser evaluate / run-code:** 0 (tool logs show generated locator calls only).
- Plain text entries: IDO Name, Table Alias, Name (3). Refused entries: Table Name (1, no text entered). Lookup selections: 1 (FX_ItemBase).

## Identity values (verified before the property step)
| Field | Value | Verification | Qualification |
| --- | --- | --- | --- |
| IDO Name | `FX_Items` | Snapshot and `find` | Entered by this task. |
| IDO Project Name | `FX_HelloWorldProject01` | Pre-populated by the wizard; `find` shows it | **The project lookup was not opened and availability was not re-tested in T8.** The value is the wizard default, consistent with EXP-044. |
| SQL Table | `FX_Items` (derived) | Table Name is read-only with Site Split unchecked, empty | Not entered. The physical table name is determined by the wizard on Finish; **schema `dbo` is not visible on any page before Finish** and remains unverified. |
| Table Alias | `fxitms` | Snapshot and `find` | Entered by this task. |
| Form Type / Form Layout / Device Type | `MultiView` / `GridLeft` / `Default` | Read from the snapshot | Wizard defaults, left unchanged. The optional Create Form prompt is to be declined later; no FX_Items Form is created by this task. |

## Property 1 as staged (verified)
| Column | Value | Source |
| --- | --- | --- |
| Name | `FX_Item` | Typed into the locked-row Name cell (`e2338`). Grid cell reads `FX_Item`. |
| Property Class | `FX_ItemBase` | Native lookup selection; combobox reads `FX_ItemBase`. |
| Data Type | `String` | Inherited, displayed in the grid (not typed). |
| SQL Data Type | `nvarchar` | Inherited, displayed. |
| Property Length | `20` | Inherited, displayed. |
| Decimal Precision | blank | Not applicable to String; not set. |
| Primary Key | **checked** | Clicked once. |
| Required | **checked** | Ticked automatically by Primary Key (not clicked separately). |
| Label String ID | `FX_sItem` | Inherited, displayed. |
| Default Value | blank | Not set. |

Property class resolution: the native lookup listed FX_Cost, FX_ItemBase and FX_UM. The FX_ItemBase value matches the established definition (String / 20 / nvarchar / FX_sItem; see T1-03). Only the FX_ItemBase selection was made.

## Observations and limitations
1. **Name entry was initially missed.** The first screenshot (`T8-01`) shows the property row with an empty `Name` cell, the Primary Key and Required checked, and the Property Class scrolled out of view to the left. The accessibility tree reported the Property Class and PK/Required state but not the empty Name. The Name was then entered (`FX_Item`) and verified in the accessibility tree and in `T8-02`. This was a sequence correction within T8, not a failed mutation.
2. **Inherited values are displayed, not stored.** Length 20, nvarchar and FX_sItem come from the grid's display of FX_ItemBase. The stored values were not inspected.
3. **Table Name is not editable** on page 1 with Site Split unchecked, so the physical SQL name cannot be set on this page. The wizard derives it from the IDO name. The schema `dbo` and the physical table name `dbo.FX_Items` are **unverified until Finish and the native SQL Tables read**.
4. **Blue-star row:** the wizard property grid row carries a star (insertion marker) because it is a new row. This is the expected add-mode state for an unsaved wizard row.
5. **Tab-0 reversion** occurred at the start of T8 (fifth time). When the Designer tab was not selected, its toolbar `New` click timed out twice (refs were unchanged; the element was not the foreground tab). Selecting tab 0 resolved it.

## Acceptance-check status (after T8)
- **AC-1 (preflight):** supported for the Designer surface (Save disabled, User scope, no dialog, no pending change in the Designer). The Sql Tables placeholder and retained criterion were not inspected in T8 (per instruction left untouched). Site Developer capability: not verified.
- **AC-2 (collision gate):** supported at same-session UI level (T5 SQL, T6 IDO). Unchanged in T8.
- **AC-3 (dependencies):** unchanged from T7. FX_ItemBase String/20/nvarchar/FX_sItem is re-observed in the wizard row (consistent). FX_sDescription remains unverified.
- **AC-4 (wizard identity):** partly. Route and identity values are established on screen, but the screenshot of the identity page (before Finish) is not yet captured in a page-1 view without the property row obscuring it. `T8-02` shows Name, Class and Data Type; the identity block is visible in `T8-01`. Project is pre-populated, not selected through its lookup.
- **AC-5 (property configuration):** partial. Property 1 only, verified in the grid. Properties 2 to 4 not configured. The lookup visibly resolved the three classes in its list (FX_Cost, FX_ItemBase, FX_UM); FX_Cost and FX_UM were not selected.
- **AC-6 to AC-12:** not performed.

## Evidence
- `evidence/EXP-049/T8-01-wizard-page1-identity-and-property1-staged.png` — Data Maintenance Wizard page 1 with IDO Name `FX_Items`, IDO Project `FX_HelloWorldProject01`, Table Alias `fxitms`, MultiView/GridLeft/Default, Site Split unchecked, Table Name and View Name empty, Finish disabled. Property grid row: Name blank at this moment, Primary Key and Required checked, Label `FX_sItem` (partly visible). Shows the identity block and the PK/Required state; does **not** show the Name value (entered afterwards) or the Property Class (scrolled left).
- `evidence/EXP-049/T8-02-wizard-property1-verified-before-stop.png` — same wizard after the Name entry: property row Name `FX_Item`, Property Class combobox `FX_ItemBase` (selected text), Data Type `String`, SQL Data Type `nvarchar`. Shows Name and Class; Primary Key, Required and Label are scrolled out of this view and are verified in the accessibility tree instead. Finish disabled.
- `evidence/EXP-049/T8-snapshot-after-name-entry.yml` — saved accessibility snapshot after the Name entry: row `1` locked Name `FX_Item`; lower row `String / nvarchar / 20 / Primary Key checked / Required checked / FX_sItem`; Property Class combobox `FX_ItemBase`; Finish `[disabled]`, Next enabled (not pressed).
- Browser-tool snapshot files written by the tool (not the worker): `evidence/playwright/page-2026-10-10T18-35-20-503Z.yml` through `page-...18-37-03-446Z.yml`; console logs under `evidence/playwright/console-2026-10-10T18-3*.log`.

## Current state (for coordinator review)
- **The Data Maintenance Wizard is open** (in-page dialog, page 1) with IDO Name `FX_Items`, project `FX_HelloWorldProject01`, alias `fxitms`, and property 1 staged. Finish is disabled. Next is enabled and was **not** pressed.
- **Not cancelled on purpose.** Wizard Cancel raises a discard prompt (EXP-044), and the task asked for the wizard to stay as-is for review. The in-page dialog is therefore left open on the Designer tab (tab 0), which is the current tab.
- Web Client tab 1 remains on Export/Import Strings (unchanged in T8). The Sql Tables placeholder and retained criterion were not touched.
- No object has been created, saved, or checked in or out.

## Next permitted action
Coordinator review only. Before any further wizard step the coordinator must decide: (a) whether to continue to properties 2 to 4 in a new task, (b) whether the open wizard may remain staged, and (c) the earlier open decisions (the Sql Tables placeholder, the FX_sDescription lookup, and Site Developer capability). The Finish button must not be used until all four property rows are verified.
