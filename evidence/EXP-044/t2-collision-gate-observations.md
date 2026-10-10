# EXP-044 T2 — Read-only FX_UMs collision gate: observations

Date: 2026-10-10. Task T2 (task_message_id `3e8d63d3-8ed9-474e-9eaf-5bc6730974f0`). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
Classification: **observed only** (single run, UI level). Not replay_verified.

**Result: IDO collision gate INCONCLUSIVE. SQL Tables gate NOT RUN. Creation gate NOT passed. Stopped without mutation.**

## 1. Preflight

| Item | Observed |
| --- | --- |
| Tabs at start | Tab 0 `Mongoose` (Web Client, selected). Tab 1 `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` (Designer, `.../WSWebClient/designer/default.aspx`). Designer tab left untouched. |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Runtime Form tabs | `FX_HelloWorld01` (2 saved rows in EXP-042; not selected) and `Property Classes` (selected; FX_UMBase row, checked out by the operator, Save disabled) |
| Dialogs / banners | None (`find` for dialog, alertdialog, portal-notification, unsaved prompts: no matches) |
| Designer scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (Designer tab, unchanged) |
| Initial obstruction | Web Client tab did not render on the first Open click; a tab reselect restored rendering (see §5) |

Screenshot `t2-00-preflight-webclient-after-tab-reselect.png`: Web Client `Property Classes` view with the FX_UMBase row, identity bar, Save greyed, no dialog. Shows the usable Web Client. Does not prove anything about IDO or SQL Tables collections.

## 2. Select Form navigation (IDOs)

| Step | Observed |
| --- | --- |
| Name of IDOs Form | `IdoCollections`, caption `IDOs` (EXP-040 record: "Double-click on `IDOs` (IdoCollections)") |
| Open toolbar (corrected attempt: inner button `f1e26`, id `#ext-element-55`) | Select Form dialog `f1e796` opened |
| Filter textbox (`f1e825`) | Prefilled `PropertyClass`. Click; Control+a; Backspace; `IdoCollections` typed with key events (`slowly`). |
| Result of the filter | Two rows: `G6RIdoCollectionSearch` / `G6RIdoCollectionSearch` (infix match) and **`IDOs` / `IdoCollections`** (`f1e860`/`f1e862`) |
| Row selected | `IDOs` Caption cell `f1e860` |
| OK (`f1e844`, label verified in the snapshot) | IDOs Form opened. URL `favoriteContext=IdoCollections`. Tab `IDOs` selected (`f1e864`). Status bar initially `Extends (IDOs 1 of 1)` at the positive control. |

Screenshot identity of the IDOs Form is confirmed in `t2-01` (tab label `IDOs`, Form fields `IDO Name`, `Project Name`, etc.).

## 3. IDOs collision gate

### 3a. Positive control: exact `FX_HelloWorld01`

| Step | Observed |
| --- | --- |
| Filter in Place state | Entered (status `Filter in Place`); IDO Name criteria textbox `f1e959` editable |
| Plain fill `FX_HelloWorld01`, then Tab, then F4 | **1 data row**: IDO Name `FX_HelloWorld01`; Description empty; Project Name `FX_HelloWorldProject01`; Revision Num 2; Access As `G6R`; Check Out enabled (checked in); Label String ID and Caption `oFX_HelloWorld01`; Table `FX_HelloWorld01`, alias `fxhw`, Table Type `Primary Base`, Join Inner. Status `Extends (IDOs 1 of 1)`. Save disabled. |

Evidence: `t2-01-idos-positive-control-FX_HelloWorld01-fip-f4.png`. Shows: the filter executed and returned exactly the known IDO (positive control **passed**). Does not show the absence of FX_UMs.

### 3b. Target: exact `FX_UMs` (first attempt)

| Step | Observed |
| --- | --- |
| Toolbar `Filter in Place` (`f1e38`), once | The Form returned to Filter-in-Place with the prior criteria `FX_HelloWorld01` selected (textbox editable). Evidence `t2-02-idos-fip-reentered-before-FX_UMs-query.png`. |
| Plain fill `FX_UMs` (`f1e959`), Tab, F4 | Executed without error. |
| Settled state (`t2-03-idos-exact-FX_UMs-fip-f4-result.png`) | **Zero data rows.** Grid column header `IDO Name` only. Fields greyed (record-view style). **No blank placeholder** (no starred row). Status bar `Filter in Place`. Focus on the `Extends` combobox. The IDO Name criteria textbox is now empty. |
| Fresh snapshot of the IDOs panel (`f1e867`) | Grid `f1e893`: no rows. `IDO Name:` field `f1e959` is a textbox with no value. `Extends` combobox active. Save disabled. No record. |

**Interpretation: inconclusive.** The zero-row result is not separable from a query that did not execute, because:
- the status bar stayed `Filter in Place` (not a row count such as `IDOs 0 of 0`);
- EXP-043 observed a zero-row Filter-in-Place query to leave a blank placeholder and keep its criteria, and neither occurred here;
- the criteria textbox was empty after the query, so the executed criteria cannot be read back;
- the brief states that an empty-looking grid is not proof of zero records.

### 3c. Corrected attempt on the target textbox (failed)

| Step | Observed |
| --- | --- |
| Click on `f1e959` (`mgedit-2007` / `CollectionNameEdit`) | Focus moved to the field; field outlined. Snapshot `page-2026-10-10T12-20-03-743Z.yml`. |
| Plain fill `FX_UMs` on `f1e959` | **Timed out**: `element is not editable`. Playwright reported the element as `readonly="readonly" aria-readonly="true"`, `data-mgcompnamevalue="CollectionNameEdit"`. **No text was entered.** |

This is the **same read-only record field** that EXP-040 T12 recorded as `CollectionNameEdit` (`mgedit-2644`). Its presence means the Form is showing a record-view state, not an editable criteria row, at that moment. The fill was refused, and nothing changed as a result.

### 3d. Final IDOs state (`t2-04-idos-final-state-after-unresolved-exact-query.png`)

- IDOs tab selected (`f1e864`); status bar `IDO Name` (focused label); grid empty; no record; Save greyed; no dialog; no placeholder.
- The FX_UMs IDO collision is **NOT** established as absent.

## 4. SQL Tables collision gate

**NOT RUN.** The brief requires a stop on an inconclusive IDO result before any further collision mutation or Finish. SQL Tables was not queried in T2, so no SQL Tables evidence is claimed. The EXP-040 correction (criteria only in the grid's criteria row, never in the Attributes `Table Name` combobox, which caused the T10 incident) was read before any action and is noted for any later SQL Tables step.

## 5. Interaction failures and recovery accounting

| # | Interaction | Error | Recovery / correction |
| --- | --- | --- | --- |
| E1 | Click toolbar `Open` `f1e25` (`mgtoolbarbutton-1100`) | `TimeoutError`: "waiting for element to be visible, enabled and stable" (the locator resolved). | Not repeated. Screenshot attempt `t2-00` also timed out ("waiting for fonts to load"). Tab 0 reselected (browser navigation). Screenshot `t2-00-preflight-webclient-after-tab-reselect.png` rendered. Suspected environment rendering problem (background-tab state after the Designer tab). |
| E2 | Screenshot after E1 | `TimeoutError` (fonts loaded, page not rendering). | Resolved by E1 recovery (tab reselect). |
| E3 | Click toolbar `Open` inner button `f1e26` (corrected attempt, same control) | None. Select Form opened. | Corrected attempt succeeded. |
| E4 | Fill `FX_UMs` on `f1e959` (after the Form returned to a record-view state) | `TimeoutError`: `element is not editable` (read-only `CollectionNameEdit`). | Not repeated. No text entered. Corrected visible inspection = the snapshot and screenshot in §3d. |

Recovery allowance used: one tab reselect and one screenshot (E1–E2 inspection), one corrected attempt (E3, succeeded), and one corrected visible inspection after E4 (§3c–3d). **No `Ref ... not found` error occurred in T2.** The brief's "fresh untargeted recovery snapshot" was not taken after E1, because E1 was a timeout on a resolved locator, not a stale ref. I used untargeted `find` queries for refs instead. This is a deviation to report.

Stop decision: the IDO gate is unresolved after the permitted corrected attempts. Under the brief's rule, T2 stops here; no further query, no SQL Tables query, and no mutation was attempted.

## 6. Operation counts (T2)

| Operation | Count |
| --- | --- |
| Save / New / Finish / Create Form | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| Property class or IDO edits | **0** |
| Wizard opened | **0** |
| Designer interaction | **0** (tab selected only for reading; not edited, not saved) |
| Select Form dialog OK (in-page dialog, not a prompt) | **1** (`IdoCollections`) |
| Form tab closes / reopens | **0 / 0** |
| Prompts or confirmations answered | **0** |
| Portal banner dismissals | **0** (none visible) |
| Filter-in-Place criteria executed (F4) | **2** (positive control `FX_HelloWorld01`; target `FX_UMs`) |
| Filter-in-Place toolbar clicks | **1** (`f1e38`, re-entry before the target query) |
| Browser action errors (timeouts) | **3** (E1, E2, E4) plus **0** ref-not-found |
| Corrected attempts | **1** (E3) |
| Tab selects (browser navigation) | **1** (tab 0 reselect after E1); tab listings **2** (start, after E3) |
| Screenshots | **5 successful** (`t2-00-…-tab-reselect`, `t2-01`, `t2-02`, `t2-03`, `t2-04`); **1 timed out** (E2, pre-reselect, no file written) |
| Snapshots | **several** (targeted and untargeted; saved under `evidence/playwright/` by the tool) |
| JavaScript / evaluate / run-code | **0** invoked by the worker |
| Login, logout, refresh, reload, restart | **0** |

Note: no screenshot count is exact beyond the listed files; the tool wrote additional `evidence/playwright/*.yml` snapshot files (tool-generated, not worker-authored).

## 7. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t2-00-preflight-webclient-after-tab-reselect.png` | Web Client, `Property Classes` Form, FX_UMBase row (checked out), identity bar, no dialog | The Web Client renders and is usable after tab reselect (E1 recovery) | Any collection state |
| `t2-01-idos-positive-control-FX_HelloWorld01-fip-f4.png` | IDOs Form tab; one row `FX_HelloWorld01` / project `FX_HelloWorldProject01`; table `FX_HelloWorld01` alias `fxhw` | **Positive control for the IDOs FiP exact query: the filter executes and returns a known row** | Absence of FX_UMs |
| `t2-02-idos-fip-reentered-before-FX_UMs-query.png` | FiP mode; criteria `FX_HelloWorld01` selected in IDO Name | FiP re-entry state before the target query | Query result |
| `t2-03-idos-exact-FX_UMs-fip-f4-result.png` | Zero data rows; greyed fields; no placeholder; status `Filter in Place`; criteria empty afterwards | Zero rows displayed after the target query | **That the query executed; that FX_UMs is absent** (inconclusive, §3b) |
| `t2-04-idos-final-state-after-unresolved-exact-query.png` | IDOs tab; no record; no dialog; status `IDO Name`; Save greyed | Stable end state; no dialog | Absence |

## 8. Gate verdict (IDOs)

- Positive control: **PASSED** (`FX_HelloWorld01` returned, one row, expected identity).
- Target `FX_UMs` exact query: **INCONCLUSIVE** (zero rows, no placeholder, no status count, criteria not readable afterwards; the field was read-only on a later attempt).
- Case-insensitive variant (`fx_ums`), prefix query (`FX_UM*`): **NOT RUN**.
- SQL Tables: **NOT RUN**.
- Creation gate: **NOT passed**. No Finish, no field configuration, no mutation.
