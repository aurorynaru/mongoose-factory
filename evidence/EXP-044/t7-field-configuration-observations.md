# EXP-044 T7 — Two-field configuration in the open New Data Maintenance wizard (no Finish): observations

Date: 2026-10-10. Task T7 (task_message_id `7b05f2ef-ae17-4c73-97b3-e70b3c4d9420`, cycle 8). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single session, UI level). Not replay_verified.

**Result: The wizard is configured with exactly two user-defined field rows (`FX_UM` and `FX_Description`), with the values below verified in the accessibility tree and the screenshots. Finish was NOT pressed. Save, Create Form, check-in/out and every lifecycle action were NOT performed. The wizard is stopped open for coordinator review.**

Scope distinction (restated): the Designer editing scope is **User**. The `FX_UMs` IDO and SQL table that this wizard would create are **tenant-wide** metadata, not User-scoped Form versions.

## 1. Preflight (fresh state, read-only)

- The wizard is in the **Designer tab (tab 1)**, not the Web Client tab. Tab 1 selected; `find` and a targeted snapshot of dialog `e1559` confirmed `Data Maintenance Wizard`.
- Page 1: IDO Name `FX_UMs`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxum`; Form Type MultiView; Form Layout GridLeft; Device Type Default; Site Split unchecked; Table/View Name empty and disabled. Finish disabled; Next enabled; Back disabled.
- Field grid at start: one row, starred (★1), all cells blank (`t7-01`).
- Designer scope status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Vendor `IdoPropertyClasses` design view behind the wizard, unchanged.
- No dialog, prompt, or banner.

## 2. FX_UM (row 1) — configured

| Step | Action | Verified result |
| --- | --- | --- |
| Name | One plain fill `FX_UM` into the Name editor `e1670`, then one Tab | Name cell reads `FX_UM` (accessibility `gridcell "FX_UM"`). |
| Property Class | Focus moved to the Property Class editor; visible **Open** `e1773` clicked once. Lookup listbox `e1775` opened. Snapshot confirmed the option cell `FX_UMBase` (`e2002`) between `FullObjectPath` and `G6RCost`. Option cell clicked once; Tab. | Property Class cell reads **`FX_UMBase`**. The selection identity is the exact visible option text. |
| Inherited Data Type | — | **`String`** (accessibility `gridcell "String"`; screenshot `t7-02`). |
| Inherited SQL Data Type (Column Data Type) | — | **`nvarchar`** (`gridcell "nvarchar"`). The grid exposes this as "SQL Data Type". |
| Inherited Property Length | — | **`10`** (`gridcell "10"`). |
| Inherited Label String ID | — | **`FX_sUM`** (`gridcell "FX_sUM"`). |
| Primary Key | Clicked the Primary Key checkbox `e1733` once | **Checked** (`checkbox checked`, accessibility `e2198`). |
| Required | **Not clicked.** After the Primary Key click the Required checkbox showed **checked** (`checkbox checked`, `e2200`). | **Checked**, but its check was **not** set by a separate action. See §5. |

Screenshot evidence: `t7-02-FX_UM-property-class-FX_UMBase-selected-after-tab.png` (Name `FX_UM`, Property Class `FX_UMBase`, Data Type `String`, SQL Data Type `nvarchar`); `t7-03-after-primary-key-click-required-state-observed.png` (grid scrolled right: Primary Key and Required both checked for `FX_UM`, Label `FX_sUM` partly visible).

## 3. Add Row (exactly once) and FX_Description (row 2)

| Step | Action | Verified result |
| --- | --- | --- |
| Add Row | `Add Row` `e1636` clicked **once** (label verified by `find`) | A second row was created (numbered `2`, blank). |
| Name | One plain fill `FX_Description` into row 2's Name editor `e1670`, then one Tab | Name cell reads **`FX_Description`**. |
| Data Type | Clicked row 2 Data Type cell `e2221`; its combobox Open `e2194`; option `String` (`e2267`, exact label) clicked; Tab | Data Type reads **`String`**. |
| SQL Data Type | — | Set automatically to **`nvarchar`** (not an authored value). |
| Property Length | Clicked row 2 Property Length cell `e2225`; one plain fill `50` into the editor `e2290`; Tab | Property Length reads **`50`**. |
| Label String ID | Clicked row 2 Label cell `e2235`; editable combobox `e2305`: one plain fill `FX_sDescription` (a reference only); Tab | Label String ID reads **`FX_sDescription`**. No string resource was created. |
| Primary Key / Required | Not set (not required for FX_Description) | Both **unchecked** (`checkbox not checked`). |
| Property Class | Not set (not required by the brief for FX_Description) | Blank. |

Delete Row and Delete All Rows were **not** used.

## 4. Pre-Finish verification (fresh untargeted recovery snapshot, depth 12)

The snapshot was taken after a `Ref e1643 not found` error on the Name grid (see §6). Its result, verified from the accessibility tree:

| Item | Observed |
| --- | --- |
| Name grid rows | **Exactly two**: `row "1 FX_UM"` and `row "2 FX_Description"`. **No third row. No additional blank starred row.** |
| Property grid row 1 | `row "FX_UMBase String nvarchar 10 checkbox checked checkbox checked FX_sUM"` |
| Property grid row 2 | `row "String nvarchar 50 checkbox not checked checkbox not checked FX_sDescription"` |
| Wizard buttons | Back disabled; Next enabled (not pressed); **Finish disabled (not pressed)**; Cancel enabled |
| Page-1 values | IDO Name `FX_UMs`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxum`; MultiView / GridLeft / Default (unchanged) |
| Dialogs / prompts | None (find for alertdialog, "Are you sure", Save changes, portal banner, unsaved, validation: no match) |
| Designer scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |

Screenshot `t7-04-pre-finish-field-grid-two-rows-FX_UM-FX_Description.png` (grid scrolled right): Name `FX_UM` (`★1`) with Required checked and Label `FX_sUM`; Name `FX_Description` (`★2`) with Required unchecked and Label `FX_sDescription`; only these two rows. The Default Value editor of row 2 is open and empty (see §5). Proves the two-row cardinality and the Required/Label values for both rows. Does **not** show the Primary Key or Property Length columns (off-screen), which are shown by the accessibility snapshot and `t7-03`.

## 5. Limitations and observations that matter for AC-5

1. **Required on FX_UM was not set by a Required click.** Clicking Primary Key checked both Primary Key and Required for `FX_UM`. Whether Mongoose implies Required from Primary Key, or the Required column mirrors Primary Key in this session, is **unresolved**. The brief asked for Primary Key and Required through their own supported controls. I did not click Required, because a second click could toggle it off. The coordinator must decide whether this satisfies AC-5.
2. **The Default Value editor of row 2 is open** (an empty editor on the Default Value cell, `e2314`). No value was typed. Its open state is a grid editor, not a pending value. It was left in place (Escape or Tab would be another key action not in the brief). Expected to commit as blank.
3. **Row 1 is still starred**, as is row 2. Both are unsaved wizard rows, consistent with the pre-Finish state. The earlier T6 placeholder deletion ambiguity is unchanged: the single star-bearing row 1 is now the FX_UM row, so no separate blank row exists.
4. **Finish is disabled** on page 1 in this state, as on T5/T6. The brief asked to stop before Finish; I did not check whether Finish would be enabled after Next, because Next was not pressed.
5. The inherited Column Data Type shown by the grid is the "SQL Data Type" column (`nvarchar`). The wizard did not expose a separate "Column Data Type" control in the grid.

## 6. Errors and recovery accounting (T7)

| # | Event | Handling |
| --- | --- | --- |
| E1 | Snapshot of the Name grid `e1643` after the row 2 edits | **`Ref e1643 not found`** (the refs had moved). |
| R1 | Recovery: one fresh **untargeted** snapshot (depth 12) | Succeeded. Refs for the Name and property grids were taken from it. Recovery allowance used: **1 of 1**. |
| — | No further errors, timeouts, hook denials, or prompts. | — |

Corrected visible inspections: **0 of 1** used (the recovery snapshot itself served as the fresh inspection; the screenshot `t7-04` is a visual check).

## 7. Operation counts (T7)

| Operation | Count |
| --- | --- |
| Save / Finish / Create Form / object New | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Delete Row / Delete All Rows | **0 / 0** |
| Add Row | **1** (exactly once, for FX_Description) |
| Next / Back | **0 / 0** |
| Property Class lookup opened / option selected | **1 / 1** (`FX_UMBase`) |
| Plain fills (wizard text/editable) | **4** (`FX_UM`; `FX_Description`; `50`; `FX_sDescription`) |
| Tab commits | **6** (Name FX_UM; Property Class; Name FX_Description; Data Type; Length; Label) |
| Visible option selections (dropdown/lookup) | **2** (`FX_UMBase` from the Property Class lookup; `String` from the Data Type list) |
| Checkbox clicks | **1** (Primary Key on FX_UM only; Required not clicked) |
| Grid cell clicks (edit targets) | **5** |
| Dropdown triggers (Open) | **2** (Property Class; Data Type) |
| Screenshots | **4** (`t7-01` to `t7-04`) |
| Errors | **1** (`Ref e1643 not found`) |
| Recovery snapshots | **1 of 1** used |
| Corrected inspections | **0 of 1** used |
| Prompts answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

## 8. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t7-01-fresh-state-before-row1-configuration.png` | Wizard page 1, `FX_UMs` / `FX_HelloWorldProject01` / `fxum`; row 1 starred and blank; Finish disabled; ScopeType User | Starting state of the field grid | Field values |
| `t7-02-FX_UM-property-class-FX_UMBase-selected-after-tab.png` | Row 1: Name `FX_UM`, Property Class `FX_UMBase`, Data Type `String`, SQL Data Type `nvarchar` (Data Type editor open) | **AC-5 partial: FX_UM selects FX_UMBase; String and nvarchar shown** | Length, Label, and PK/Required (off-screen in this image) |
| `t7-03-after-primary-key-click-required-state-observed.png` | Grid scrolled right: row 1 Primary Key and Required checked; Label `FX_sUM` partly visible | **AC-5 partial: Primary Key and Required checked for FX_UM** | That Required was set by its own click (it was not) |
| `t7-04-pre-finish-field-grid-two-rows-FX_UM-FX_Description.png` | Two rows only: `FX_UM` (Required checked, `FX_sUM`) and `FX_Description` (Required unchecked, `FX_sDescription`); Finish disabled | **AC-4 cardinality (two user-defined rows, no extra row); Label values for both rows** | PK, Length, and Data Type columns (off-screen in this image; covered by the accessibility snapshot, §4) |

## 9. Last verified browser state

- Tab 1 (Designer, User scope): the **Data Maintenance Wizard is open** on page 1 (`FX_UMs`, `FX_HelloWorldProject01`, `fxum`), with the two field rows above. Finish disabled, Next enabled and not pressed, Back disabled. An empty open editor on row 2's Default Value cell. No dialog, no prompt, no banner.
- Tab 0 (Web Client, `IdoCollections`): not acted on in T7.
- Vendor `IdoPropertyClasses` design view behind the wizard: unchanged; Save disabled.
