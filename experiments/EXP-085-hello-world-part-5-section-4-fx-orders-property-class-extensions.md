# EXP-085 — Hello World Part 5 Section 4: FX_Item and FX_CustomerID property-class extensions for drill-downs from FX_Orders

**Status (T7, 2026-10-14; cycle 6; documentation only, zero browser calls, zero Mongoose changes): FINAL ACCEPTANCE AUDIT COMPLETE. RECOMMENDATION: ACCEPTED AS OBSERVED** (same-browser-session Designer UI observations), with two stated conditions: FX_UM is recorded as present and not edited by the worker (field-level equality **not** established), and no database durability, server persistence, runtime drill-down behaviour or replay verification is claimed. AC-1, AC-2, AC-3 and AC-4 pass (AC-1 with two disclosed gaps); AC-5 passes for items 1–4 and is partial for "FX_UM unchanged"; AC-6 data reconciles with the harness logs. Counts reconcile: 257 browser calls, 56 screenshots, 2 extensions created, 2 Yes answers, 2 ellipsis clicks, 2 OKs, 8 Tab commits, 0 corrections, 3/3 Global Objects open/Cancel, 1/1 Designer Save, 1/1 close/reopen, 0 component, runtime or checkout actions, 0 re-logins. The T6 FX_CustomerID four-field frame is `t6-10` (its filename is misleading: it shows four values); the T6 Name/Version frame is `t6-09` (plus `t6-08` accessibility). Full report: `evidence/EXP-085/T7-final-acceptance-report.md`. Final Designer state (last observed in T6): FX_Orders, `ScopeType: User`, Save and Undo disabled, no dialog. Details: section "T7" at the end of this record.

**Status (T6, 2026-10-14; cycle 5): CLEAN CLOSE AND REOPEN OF FX_Orders COMPLETE (one close, one reopen); POST-REOPEN READBACK: ALL EIGHT VALUES MATCH THE EXPECTED VALUES; BOTH COMBOBOXES UNCHANGED FROM PREFLIGHT.** The Form was clean before the close (Save and Undo disabled, `ScopeType: User`, no dialog); the close through the Form-tab control raised **no** discard prompt; the reopen through the Form menu recent-forms entry `FX_Orders` loaded the Form clean (User scope, no dialog). Global Objects readback after reopen: FX_Item (Name `FX_Item`, User version, Add/Details `FX_Items`, Find `FX_Items`, Property `FX_Item`, Right-Click `StdDetailsAddFind`) and FX_CustomerID (Name `FX_CustomerID`, User version, Add/Details `FX_HelloWorld01`, Find `FX_HelloWorld01`, Property `FX_Code`, Right-Click `StdDetailsAddFind`); FX_UM still listed (not selected, not edited); ONE Cancel. Components after reopen: FX_ItemCombobox (binding `object.FX_Item`, Inheritance `FX_Item`, Add/Details/Find/Property blank, Right-Click `StdDefault`) and FX_CustomerIDCombobox (binding `object.FX_CustomerID`, Inheritance `FX_CustomerID`, Add/Details/Find/Property blank, Right-Click `StdDefault`) — **unchanged from preflight**. **Designer Save budget: 1 of 1 consumed in T5; NOT invoked again in T6.** Final state: FX_Orders open, clean (Save and Undo disabled), `ScopeType: User`, no dialog. These are observed readbacks in one reopened client session; they are **not** database durability, runtime behaviour or replay verification. Details: section "T6" at the end of this record.

**Status (T5, 2026-10-14; cycle 4): THE ONE DESIGNER SAVE WAS INVOKED ONCE.** Pre-Save: FX_Orders open, `ScopeType: User`, Save **enabled**, Undo disabled, no dialog; the T4 readback recorded both extensions with all four expected values and no correction. Native toolbar Save (floppy icon, not Regenerate Form) clicked **once**. **Native response, verbatim:** toast titled `Save`, text `Global object(s) were saved.` (with a Close control; no error; no alert). After the response: Save **disabled**, Undo disabled, Regenerate Form disabled, FX_Orders still open, `ScopeType: User`, no dialog; the toast cleared by itself within about 4 seconds. **Designer Save budget consumed (1 of 1); no retry.** Close/reopen, Global Objects readbacks and component checks are **not** done in T5 (they are the next task). Observed only; the Save response is a UI acknowledgement, not independent database durability. Details: section "T5" at the end of this record.

**Status (T4, 2026-10-14; cycle 3): PRE-SAVE READBACK OF BOTH EXTENSIONS COMPLETE (read-only).** One Designer Edit > Property Class Extension (Global Objects) opened; FX_Item and FX_CustomerID each selected and read; FX_UM confirmed present and not edited; ONE Cancel closed the dialog. Per-extension comparison against the expected values: **all eight values match** (FX_Item: `FX_Items` / `FX_Items` / `FX_Item` / `StdDetailsAddFind`; FX_CustomerID: `FX_HelloWorld01` / `FX_HelloWorld01` / `FX_Code` / `StdDetailsAddFind`; Name and User version match for both). No correction needed or made. **Designer Save NOT pressed** (Save still enabled, Undo disabled, `ScopeType: User`, no dialog after Cancel). No extension ellipsis, no creation prompt, no field change, no close/reopen, no component or runtime action. These are pre-Save readbacks in the same client session; they are **not** evidence of storage or persistence. Classification: **observed only. Not replay_verified.** Details: section "T4" at the end of this record.

**Status (T3, 2026-10-14; cycle 2): FX_CustomerID PROPERTY CLASS EXTENSION CREATED ONCE.** One ellipsis click on FX_CustomerIDCombobox's Edit Property Class Extension; ONE Yes to the exact prompt `Property Class Extension FX_CustomerID does not exist. Create it?`; four fields set and each committed with one Tab (Add/Details Form `FX_HelloWorld01`, Find Form `FX_HelloWorld01`, Property `FX_Code` (empty list, typed then Tab), Right-Click Menu `StdDefault` replaced by `StdDetailsAddFind`); Name `FX_CustomerID` and User version verified before OK; all four visible before ONE dialog OK. Native response to the OK: no alert, no error text; the dialog closed. The Designer stays **dirty** (Save enabled, Undo disabled, `ScopeType: User`). **Designer Save NOT invoked; no readback, correction, close/reopen or runtime action in T3.** Component-level values unchanged (FX_CustomerIDCombobox Right-Click Menu still `StdDefault`). Classification: **observed only. Not replay_verified; no storage or persistence claimed.** Details: section "T3" at the end of this record.

**Status (T2, 2026-10-14; cycle 1): FX_Item PROPERTY CLASS EXTENSION CREATED ONCE.** One ellipsis click on FX_ItemCombobox's Edit Property Class Extension; ONE Yes to the exact prompt `Property Class Extension FX_Item does not exist. Create it?`; four fields set and each committed with one Tab (Add/Details Form `FX_Items`, Find Form `FX_Items`, Property `FX_Item`, Right-Click Menu `StdDetailsAddFind`); all four visible before ONE dialog OK. Native response to the OK: no alert, no error text; the dialog closed; the Designer toolbar **Save became enabled** (the Designer is dirty). **Designer Save NOT invoked; FX_CustomerID NOT started; no readback in T2** (those are later tasks). Component-level values unchanged (FX_ItemCombobox Right-Click Menu still `StdDefault`). Classification: **observed only. Not replay_verified.** Details: section "T2" at the end of this record.

**Status (T1, 2026-10-14; read-only preflight and gates): PREFLIGHT COMPLETE. STOPPED before the first Edit Property Class Extension ellipsis click, as the T1 instruction required.** No extension created, no prompt answered, no field set, no Designer Save, no component change. AC-1 supported (with limits). AC-2 to AC-5 **NOT RUN** (creation of FX_Item, creation of FX_CustomerID, Designer Save and readbacks, and close/reopen are for later tasks). Classification: **observed only. Not replay_verified.**

Run identity: run `R-20261014-133538-PdTc`, experiment EXP-085, cycle 0, task T1, task_message_id `1b39e0f5-2cdd-457e-9469-4999f94db6ef`, worker session `a11950eb-dcb4-409d-8d31-8c71e3eeead3`. Date 2026-10-14. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (tab title). Editing scope User. Mode LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Evidence directory `evidence/EXP-085/`.

Record creation disclosure: `experiments/EXP-085-…md` did not exist before this task (a Read of that path returned "does not exist"; the repository holds only the brief commits `7087ed6` draft and `fe16ec7` approved). This worker created the record in T1.

## Why this experiment (from the brief)

The tutorial (`docs/mongoose/transcripts/hello-world-pt5.md`, Section 4, 05:05–06:32) configures the Orders form's Item and Customer ID combo boxes with property-class extensions (Add/Details and Find forms, Property, Standard Details Add Find right-click menu) so the fields drill down to their detail forms. This experiment adapts that to FX_ names in User scope: the tutorial's Site Default scope is **not** authorized. Expected end state after the later tasks: extension `FX_Item` (Add/Details and Find `FX_Items`, Property `FX_Item`, Right-Click Menu `StdDetailsAddFind`) and extension `FX_CustomerID` (Add/Details and Find `FX_HelloWorld01`, Property `FX_Code`, Right-Click Menu `StdDetailsAddFind`). Component-level menus are NOT changed here (Section 5 step 8, EXP-086).

## Sources reviewed (T1, before any browser interaction)

| Source | Extent of read | Applied lesson |
| --- | --- | --- |
| `AGENTS.md` | Read in full (238 lines). | FX_ scope extension; User editing scope; evidence rules; recovery rules; knowledge states. |
| `docs/mongoose/transcripts/hello-world-pt5.md`, Section 4 (lines 135–149, 05:05–06:32) | Read in full. Trust: **unverified** tutorial transcript. | Narrated steps 1–7. Step 1 (Site Default) is not authorized. Boundary (line 149): a property-class extension propagates to other consumers of the class, so it is a scope-wide metadata change (the brief's Item and Customer ID extensions are tenant-wide metadata and were approved as such). |
| `docs/mongoose/guides/web-designer.md`, "Creating a Property Class Extension object" (lines 277–289) | Read (steps 2–7 seen through a targeted search). Trust: **unverified** documentation. | Route: Edit > Property Class Extension; step 7 says OK saves. |
| `experiments/EXP-069-R2-…right-click.md` | Status header (lines 1–25), T10 (lines 365–424), final T11 (lines 352–363), T4 (lines 1340–1389), and the T11 outcome (lines 1620–1652). T3 read only through its status line and a targeted search (line 1478). Other sections not read. | (a) The creation prompt is `Property Class Extension FX_UM does not exist. Create it?`, answered Yes once; (b) the Property list was empty and the value was entered by typing into the combobox (role `combobox`, not the read-only description textarea), then committed; (c) the extension Right-Click Menu set in the T4 dialog was **lost** (blank on the T10 readback after Save 1, Save 2 and reopen) — the working hypothesis is that OK was pressed while the combobox still had focus, which is **unverified**. |
| `experiments/EXP-069-R4-…right-click.md` | Status header (lines 1–21) and the file through line 518 (T1, T2 including the Global Objects route, and T3 up to its outcome). T4 onward not read. | The Edit > Property Class Extension route opens a **"Global Objects"** dialog (Property Class Extensions list, Properties pane, OK / Cancel / Help), not a separate editor. Right-Click Menu chosen from its dropdown, committed with one Tab, text visible before OK; Global Objects OK closed the dialog with no parent dialog and made Save enabled (observed). The R4 record reports the committed `StdDetailsAddFind` persisted after Save 1 and a close/reopen (its T7). |
| `experiments/EXP-070-…orders-property-classes.md` | **Targeted search only** (not a full read). | FX_CustomerID class domain: Domain IDO Name `FX_HelloWorld01`, Domain Property `FX_Code` (T2 readback). FX_Item class exists (it is the Inheritance class of FX_ItemCombobox, confirmed in this task). |
| `experiments/EXP-084-…picture-display.md` | **Targeted search only** (not a full read). | FX_Orders components relevant here: FX_ItemCombobox (Binding `object.FX_Item`, pane 1, tab 20) and FX_CustomerIDCombobox (Binding `object.FX_CustomerID`, pane 1, tab 14). Both confirmed live in this task. |

**Partial-read limitation:** the lessons from the unread parts of the EXP-069-R2, EXP-069-R4, EXP-070 and EXP-084 records were not applied. The Designer state in this task was verified live, so the preflight does not depend on those unread parts.

## Session and tab handling

- Tab list (first browser call of the task, before any selection): tab 0 = Designer (`designer/default.aspx`, `mode=designer`, `MGForm=FX_Orders`, current); tab 1 = Web Client (`favoriteContext=IdoProperties`). Tab 0 selected (succeeded; issued in the same block as the opening snapshot, a read-only call). Tab 1 was **not** selected in T1.
- Session usable throughout. No "Session Expired" modal, no sign-in page, no portal notification banner, no unsaved-change prompt, no browser-native dialog. **Re-login count 0.**
- Console counts at snapshots: "2 errors, 0 warnings" on the Designer page (not inspected; out of scope).

## AC-1 — Gates (Designer, FX_Orders, extension list, combobox values)

### Designer identity and scope (gate-01)

| Item | Observed |
| --- | --- |
| Form | `FX_Orders` (tab `selected`, heading `FX_Orders`, Designer tab 0 `MGForm=FX_Orders`) |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator user> ]` (name not copied here) |
| Clean | Toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`; no alertdialog or in-page dialog |
| Selected component at start | `FX_ItmsPictureGridCol (GridColumn)` (left from EXP-084; selection only) |

**Deviation D1 (disclosed):** the brief says to open FX_Orders once through the Form menu recent-forms entry (or Select Form). FX_Orders was **already** the open, clean, User-scoped Designer Form on arrival (left by the previous task), so no second open was performed. Identity and scope were established from the open tab and the footer. The later close/reopen (for AC-5) uses the Form menu recent-forms entry as the brief requires.

### Extension list (Edit > Property Class Extension, read-only; gate-02, gate-03 series)

Route: Designer top-menu `Edit` (one click) > `Property Class Extension` (one click). Opened **once**, closed with its **Cancel** control (one click). Dialog title `Global Objects`; list heading `Property Class Extensions` (alphabetical; scrollable); Properties pane on the right (empty until an extension is selected; no extension was selected in T1); buttons OK / Cancel / Help.

| Check | Observed |
| --- | --- |
| FX_UM present (positive control) | **Present.** In the list between `FldName` and `G6RUM` (gate-03 `FX_UM-positive-control`). |
| FX_Item present? | **Absent.** Alphabetically it would sit between `FldName` and `FX_UM`; no such row (gate-03 `around-FX`, `FX_UM-positive-control`). |
| FX_CustomerID present? | **Absent.** It would sit between `FX_Item` and `FX_UM`; no such row (same captures). |
| Other FX_ rows | In the slices viewed (E–F and the FX_UM region), `FX_UM` is the only FX_ row. Targeted `find` "FX_Item" and "FX_CustomerID" matched only component-grid rows, not extension rows. The full list was not enumerated row by row. |

Limitations: the list is the client's view of the metadata; it does not prove database state. The list was read by scrolling and visual inspection of the slices shown, not by a complete enumeration of all rows.

Note on the list search box: typing `FX_` into the list's search textbox did **not** filter the list (no Enter was pressed, because Enter in a dialog could activate its default OK). The box was cleared to empty (fill with empty text) before Cancel. This is a view action only.

### Combobox readbacks (component level, read-only; gate-04 to gate-06)

Selection: one click on each combobox's row in the Details > Components grid (view state; no property was changed). Expanding the Behavior, Add/Details and Find Form and Inheritance groups used one chevron click each (view state).

| Field | FX_ItemCombobox | FX_CustomerIDCombobox |
| --- | --- | --- |
| Properties header | `FX_ItemCombobox (Combobox)` (Name `FX_ItemCombobox`; Caption `C(FX_ItemStatic)`; Type ComboBox; From Device Master True) | `FX_CustomerIDCombobox (Combobox)` (Name `FX_CustomerIDCombobox`; Caption truncated in the frame as `C(FX_CustomerIDS…`; Type ComboBox; From Device Master True) |
| Components row | ComboBox, `object.FX_Item`, pane 1, tab 20 | ComboBox, `object.FX_CustomerID`, pane 1, tab 14 |
| Data Source: Binding Type / Binding | `Property` / `object.FX_Item` | `Property` / `object.FX_CustomerID` |
| **Inheritance: View Attributes Inherited From Property** | **`FX_Item`** (as expected) | **`FX_CustomerID`** (as expected) |
| **Inheritance: Edit Property Class Extension For Property Class** | **`FX_Item`** (ellipsis present; cut off at the pane's bottom edge in the screenshot, read by accessibility) | **`FX_CustomerID`** (ellipsis present) |
| Inheritance: Set Class From | `This Component's Attribute` | `This Component's Attribute` |
| Inheritance: Component Class; Component Class Parameters | blank | blank |
| **Behavior → Add/Details Form** (component) | **blank** | **blank** |
| **Behavior → Find Form** (component) | **blank** | **blank** |
| **Behavior → Property** (component) | **blank** | **blank** (screenshot `gate-06-…selected-properties`) |
| **Behavior → Right-Click Menu** (component) | **`StdDefault`** | **`StdDefault`** |
| Behavior → Drag Image; Enabled When; Required When; Theme Class When; Visible When | blank | not re-read in full (blank in the frame) |

Stop gate: **passed.** Neither extension already exists (FX_Item and FX_CustomerID absent from the list), and both comboboxes show the expected property classes (`FX_Item`, `FX_CustomerID`). No creation was performed.

The component-level Right-Click Menu of both comboboxes is `StdDefault` (not blank). The later tasks must not change it (it is the component-level override that the tutorial's Part 4 lesson warns about; Section 5 step 8, EXP-086). Recorded here as the preflight baseline for the AC-5 comparison.

### Screenshots (gates)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-085/gate-01-designer-fx-orders-start-state.png` | FX_Orders heading; Save and Undo greyed; footer `ScopeType: User`; FX_ItmsPictureGridCol selected (Properties). | Form identity, User scope, clean toolbar at start. | The Components rows below the frame; any extension state. |
| `evidence/EXP-085/gate-02-extension-list-before-selection.png` | Global Objects dialog open over the Designer; Property Class Extensions list (AccessAs … CustomerID visible); Properties pane empty; OK, Cancel, Help. Captured in the same block as the menu-item click (read-only screenshot; disclosed). | The dialog layout and that no extension is selected. | FX_ rows (below the visible list). |
| `evidence/EXP-085/gate-03-extension-list-filtered-FX.png` | Search box shows `FX_` but the list is **not** filtered (view filter did not apply). | That typing into the search box did not change the list. | Anything about the extensions. |
| `evidence/EXP-085/gate-03-extension-list-scrolled-to-FX.png` | List scrolled to the I–M region (no FX_ row in view). | Only view scroll. | FX rows (not in view). |
| `evidence/EXP-085/gate-03-extension-list-around-FX.png` | List at E–F: `…FieldName`, then `FX_UM` (partly visible at the bottom edge). | No `FX_Item`/`FX_CustomerID` between `FldName` and `FX_UM` in this view. | The complete list (only the E–F slice is shown). |
| `evidence/EXP-085/gate-03-extension-list-FX_UM-positive-control.png` | List shows `FldName`, `FX_UM`, `G6RUM`, `GenericInt`; Properties pane empty (no extension selected). The `Filter` row highlight is most likely mouse hover at the pointer position (inference; not confirmed). | Positive control: `FX_UM` present; no `FX_Item` or `FX_CustomerID` in the list; no extension selected. | Database state; the extension's field values (not opened). |
| `evidence/EXP-085/gate-04-FX_ItemCombobox-properties-before-expand.png` | `FX_ItemCombobox (Combobox)`; Binding Type `Property`; Binding `object.FX_Item`; Behavior collapsed; FX_ItemCombobox row selected in Components. | Identity and binding of FX_ItemCombobox. | Behavior and Inheritance children. |
| `evidence/EXP-085/gate-04-FX_ItemCombobox-behavior-expanded.png` | Behavior expanded: Add/Details and Find Form (collapsed), New and Copy (collapsed), Dynamic Enabling (collapsed), **Right-Click Menu `StdDefault`**, Drag Image blank. | The component-level Right-Click Menu `StdDefault`. | The Add/Details children (collapsed in this frame). |
| `evidence/EXP-085/gate-04-FX_ItemCombobox-addfind-expanded.png` | Add/Details and Find Form expanded: **Add/Details Form blank, Find Form blank, Property blank**; Right-Click Menu `StdDefault`. | The three blank component-level values and `StdDefault`. | The extension (not opened). |
| `evidence/EXP-085/gate-05-FX_ItemCombobox-inheritance-before-expand.png` | Properties scrolled to Events/Help/Inheritance (Inheritance collapsed). | Scroll position only. | Inheritance values. |
| `evidence/EXP-085/gate-05-FX_ItemCombobox-inheritance-expanded.png` | Inheritance expanded: Set Class From `This Component's …`; View Attributes Inherited From Property `FX_Item`; Edit Property Class … `FX_Item` (cut off at the bottom edge). | Inheritance property class `FX_Item` for FX_ItemCombobox. | The full Edit Property Class Extension row (read by accessibility; `find` returned `FX_Item`). |
| `evidence/EXP-085/gate-06-FX_CustomerIDCombobox-selected-properties.png` | `FX_CustomerIDCombobox (Combobox)`; Binding `object.FX_CustomerID`; Add/Details Form, Find Form, Property blank; Right-Click Menu `StdDefault`. | Identity; the blank component-level Add/Details, Find and Property values; `StdDefault`. | The Inheritance rows (below the frame in this image). |
| `evidence/EXP-085/gate-06-FX_CustomerIDCombobox-inheritance-before-expand.png` | **File name says "before-expand", but the Inheritance group was already expanded** (its state persisted from FX_ItemCombobox). Shows Binding `object.FX_CustomerI…`; Set Class From `This Component's …`; View Attributes Inherited From Property `FX_CustomerID`; Edit Property Class … `FX_CustomerID` (cut off). | Inheritance property class `FX_CustomerID` for FX_CustomerIDCombobox. | The full Edit row (read by accessibility: `FX_CustomerID`). The file name is misleading and is recorded as such. |

## Action audit (T1, exact counts)

Browser calls: **53** (cumulative for T1; this task's total).

| Category | Count | Notes |
| --- | --- | --- |
| Tab lists | 1 | Before the first selection. |
| Tab selects | 1 | Tab 0 (succeeded). Tab 1 never selected. |
| Untargeted snapshots | 1 | Opening snapshot (saved by the tool; not read as a file; the Read of that file was denied, so all later readbacks used live `find`). |
| Finds (`browser_find`, read-only) | 18 | Includes the targeted and regex finds for the menu, the extension list, the search box, the combobox rows and the Inheritance/Behavior values. |
| Screenshots | 13 | `gate-01` to `gate-06` series (13 PNG files; see the table above). All succeeded. |
| Element clicks (ref) | 6 | (1) Designer `Edit` menu; (2) `Property Class Extension` menu item (opened Global Objects); (3) list search textbox (focus only); (4) Global Objects `Cancel`; (5) `FX_ItemCombobox` row in Components; (6) `FX_CustomerIDCombobox` row in Components. |
| Coordinate clicks | 3 | View-only group chevrons: Behavior (1585,351); Add/Details and Find Form (1596,519); Inheritance (1586,697). |
| Typed text | 1 | `FX_` into the Global Objects list search box (view filter; did not filter; no Enter). |
| Fill (clear) | 1 | Same search box set to empty text before Cancel. |
| Mouse moves | 3 | (760,500) over the list; (1700,560) over the Properties pane twice. |
| Mouse wheel | 5 | View-only scrolls: list (0,1000), (0,−500), (0,100); Properties pane (0,600) twice. |
| Key presses | 0 | — |
| Dialog OK clicks | 0 | — |
| Dialog Cancel clicks | 1 | Global Objects (no change). |
| Browser errors / timeouts | 0 | No ref-not-found error; no recovery snapshot used. |
| Fresh-snapshot recovery allowance used | 0 | — |
| Same-block pairs | Two pairs were issued in one block: (1) tab select 0 with the opening snapshot (the snapshot is read-only); (2) the Edit > Property Class Extension menu-item click with the gate-02 screenshot (read-only). No two browser actions were issued in parallel. Disclosed in the Session section and the gate-02 row. |
| Browser JavaScript / evaluate / console / network inspection | 0 | — |

**Mongoose mutations and lifecycle (T1), exact:**
- Extensions created: **0**. Creation prompts answered (Yes): **0**. Extension ellipsis clicks (Edit Property Class Extension on a combobox): **0**. Extension dialogs opened: **0**. Extension field changes: **0**. Extension OK clicks: **0**.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Designer unloads: **0**. Web Client unloads: **0**.
- Component or property changes: **0** (combobox selection and group expansion are view state only).
- Runtime (tab 1) actions: **0**. Runtime right-clicks: **0**. Runtime Save: **0**. Record edits: **0**.
- Details / Add / Find chosen: **0 / 0 / 0**.
- Checkout, check-in, undo-checkout: **0**. Cache unload, FormSync, deployment, regeneration: **0**.
- Re-logins: **0**. Session-expiry procedure: **not invoked** (no expiry observed).

## Worker-written file inventory (T1)

- `experiments/EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md` (created: this record).
- `evidence/EXP-085/gate-01-designer-fx-orders-start-state.png`
- `evidence/EXP-085/gate-02-extension-list-before-selection.png`
- `evidence/EXP-085/gate-03-extension-list-filtered-FX.png`
- `evidence/EXP-085/gate-03-extension-list-scrolled-to-FX.png`
- `evidence/EXP-085/gate-03-extension-list-around-FX.png`
- `evidence/EXP-085/gate-03-extension-list-FX_UM-positive-control.png`
- `evidence/EXP-085/gate-04-FX_ItemCombobox-properties-before-expand.png`
- `evidence/EXP-085/gate-04-FX_ItemCombobox-behavior-expanded.png`
- `evidence/EXP-085/gate-04-FX_ItemCombobox-addfind-expanded.png`
- `evidence/EXP-085/gate-05-FX_ItemCombobox-inheritance-before-expand.png`
- `evidence/EXP-085/gate-05-FX_ItemCombobox-inheritance-expanded.png`
- `evidence/EXP-085/gate-06-FX_CustomerIDCombobox-selected-properties.png`
- `evidence/EXP-085/gate-06-FX_CustomerIDCombobox-inheritance-before-expand.png`

Total worker-written repository files (T1): **14** (1 record, 13 evidence PNGs). The browser tool wrote its own snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-14T05-36-30-042Z.yml`, `console-2026-10-14T05-36-05-428Z.log`); those were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

## Acceptance (T1)

| AC | T1 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported with limits.** Sources reviewed (partial reads of EXP-069-R2, EXP-069-R4, EXP-070 and EXP-084 disclosed). Session usable. Designer FX_Orders, User scope, clean. Extension list shows FX_UM and no FX_Item or FX_CustomerID. FX_ItemCombobox and FX_CustomerIDCombobox show Inheritance `FX_Item` and `FX_CustomerID`. Component-level Behavior recorded (Add/Details, Find, Property blank; Right-Click Menu `StdDefault` on both). | gate-01 (identity, scope, clean); gate-02, gate-03 series (list, FX_UM present, no FX_Item/FX_CustomerID); gate-04 to gate-06 (combobox values) | Extension list is the client UI view, not a database read. FX_Orders not re-opened (D1). Full Inheritance row for both comboboxes read by accessibility (cut off in the screenshots). |
| AC-2 | **NOT RUN** (FX_Item creation is the next task). | — | — |
| AC-3 | **NOT RUN** (FX_CustomerID creation is a later task). | — | — |
| AC-4 | **NOT RUN.** | — | — |
| AC-5 | **NOT RUN.** (Preflight component values recorded as the baseline for the later comparison: both Right-Click Menus `StdDefault`; Add/Details, Find and Property blank.) | — | — |
| AC-6 | This record (T1 portion). | Audit and inventory above | — |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| FX_Orders is open in the Designer, User scope, clean, at the start of the task | **observed** (one run, T1; gate-01) |
| In the list slices viewed, FX_UM is present and FX_Item and FX_CustomerID are absent | **observed** (one run, T1; gate-03 series; UI list view; full list not enumerated) |
| Database state of the extensions (absent or present) | **unresolved** (the list is a UI view; no database read) |
| FX_ItemCombobox: Binding `object.FX_Item`; Inheritance `FX_Item`; component Add/Details, Find, Property blank; Right-Click Menu `StdDefault` | **observed** (one run, T1; gate-04, gate-05) |
| FX_CustomerIDCombobox: Binding `object.FX_CustomerID`; Inheritance `FX_CustomerID`; component Add/Details, Find, Property blank; Right-Click Menu `StdDefault` | **observed** (one run, T1; gate-06) |
| Edit > Property Class Extension opens a "Global Objects" dialog (Property Class Extensions list + Properties pane; OK/Cancel/Help) | **observed** (one run in EXP-069-R4 T2 and one run in this task T1) |
| The list search box does not filter the list when text is typed (no Enter pressed) | **observed** (one run, T1; gate-03 `filtered-FX`) |
| Tutorial Section 4 narrated steps (Items/Customers forms, Property = Item/ID, right-click menu) | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |
| The FX_Item and FX_CustomerID class domains (EXP-070) | **unverified** here (targeted search of EXP-070 only; not re-read live in T1) |

## Deviations and limits (T1)

- **D1:** FX_Orders was already open; not re-opened through the recent-forms entry (see the AC-1 section).
- **D2:** Two same-block pairs: (1) tab select 0 with the opening snapshot; (2) the Edit menu-item click with the gate-02 screenshot. The paired calls were a read-only snapshot and a read-only screenshot; no two actions ran in parallel. Disclosed in the action audit.
- **D3:** The gate-06 screenshot named "inheritance-before-expand" shows the Inheritance group already expanded. The filename is misleading; the values are from accessibility and the image.
- **D4:** The Global Objects list search box was typed into (`FX_`) as a view filter; it did not filter and was cleared before Cancel. The text was never a property or extension value.
- **D5:** Partial reads of EXP-069-R2 (T3 only by status line and targeted search), EXP-069-R4 (T4 onward not read), EXP-070 and EXP-084 (targeted searches only). The unread parts were not applied.
- **D6:** One Read of a persisted snapshot file (a tool-result JSON) was denied by the harness. The worker did not retry or work around it; all later readbacks used live `browser_find`.

## Next permitted action (requires the coordinator's authorization for the next task)

1. **T2 (FX_Item):** from the open FX_Orders Designer, select FX_ItemCombobox, expand Inheritance, click the Edit Property Class Extension ellipsis **once**. Expected prompt: `Property Class Extension FX_Item does not exist. Create it?` Answer **Yes once**. In the dialog, set Add/Details Form `FX_Items`, Find Form `FX_Items` (choose from the lists), Property `FX_Item` (if the list is empty, type the exact name into the combobox and Tab), Right-Click Menu `StdDetailsAddFind` (choose the dropdown value and Tab). Verify all four committed before one OK. Record the response and Save state. If the editor opens without the prompt, or the prompt names another class, record and stop.
2. T3 (FX_CustomerID) the same way, with `FX_HelloWorld01`, `FX_HelloWorld01`, `FX_Code`, `StdDetailsAddFind`.
3. T4 readback, one Designer Save, the close/reopen, and the reopened readbacks (AC-4 and AC-5).

Classification for all T1 findings: **observed only, NOT replay_verified.**

---

## T2 — FX_Item property-class extension created through FX_ItemCombobox: one ellipsis click, one Yes, four committed values, ONE OK; Designer dirty; Save NOT invoked (cycle 1)

Task T2 (bounded instruction: create only the User-scoped FX_Item extension through FX_ItemCombobox; capture the prompt; Yes once only if the prompt reads exactly `Property Class Extension FX_Item does not exist. Create it?`; set and Tab-commit each field; verify four values; ONE OK; no Designer Save, no component change, no runtime, no FX_CustomerID). Run `R-20261014-133538-PdTc`, experiment EXP-085, cycle 1, task_message_id `191e812a-9afa-4cea-8ebe-879b1e94a6c8`, worker session `a11950eb-dcb4-409d-8d31-8c71e3eeead3`. Date 2026-10-14.

### Sources reviewed (T2, completed before any browser mutation)

| Source | Extent read in T2 | Lesson applied |
| --- | --- | --- |
| `experiments/EXP-069-R2-…right-click.md` T3 (lines 1464–1513) | Read in full. | The existence check is one ellipsis click; the prompt is an in-page alertdialog with **Yes** focused; the creation dialog (titled `Property Class Extension`) has OK and Help, and its groups start collapsed (the Add/Details and Find group sits under Behavior). |
| `experiments/EXP-069-R2-…right-click.md` T4 and T10 outcome | T4 (lines 1340–1389) and T10 (lines 365–424) read in T1; T11 outcome (lines 352–363, 1620–1652) read in T1. | Field entry routes: the Form lists open from the arrow cell; the Property list may be empty and is then typed into the active combobox (`combobox` role, not the description textarea). The lost Right-Click Menu was not committed before OK; this task presses Tab after every field and before OK. |
| `experiments/EXP-069-R4-…right-click.md` outcome (lines 1379–1411) and T8 (lines 1332–1378) | Read in full. | Global Objects route; Tab commits; OK closes with no parent dialog; the outcome notes "Edit an existing property class extension through Designer Edit > Property Class Extension" and "Commit dropdown values with Tab before OK". The Global Objects dialog has New, Copy and Delete buttons on its list; none was clicked. |
| `experiments/EXP-070-…orders-property-classes.md` (FX_Item class configuration, around line 378) | Targeted read. | Class domain for FX_Item: Domain IDO Name `FX_Items`, Domain Property `FX_Item` (list property `FX_Description`); the FX_CustomerID class domain is `FX_HelloWorld01` / `FX_Code`. |
| `experiments/EXP-084-…picture-display.md` (status header, lines 1–18) | Read in full. | Its final status (accepted as observed, same-session) and the Designer state at its end (FX_Orders, User scope, 30 components). Not otherwise relevant to the extension. |
| `docs/mongoose/guides/web-designer.md` "Creating a Property Class Extension object" | Read in T1. | Route: Edit > Property Class Extension; step 7 says OK saves (documentation, unverified here). |
| `AGENTS.md`, tutorial Section 4 | Read in T1. | Unchanged. |

### Starting state (fresh; verified before any action)

- Tab list (first browser call, before any selection): tab 0 Designer (`mode=designer`, `MGForm=FX_Orders`, current); tab 1 Web Client (not selected in T2). Tab 0 selected (succeeded).
- Fresh untargeted snapshot `evidence/EXP-085/t2-00-designer-fresh-snapshot-start.yml`; find: tab `FX_Orders` selected; footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save `[disabled]`, Undo `[disabled]`, Regenerate Form `[disabled]`; no alertdialog and no in-page dialog. **Clean and User scope.**
- Components grid: FX_ItemCombobox row (`ComboBox`, `object.FX_Item`, pane 1, tab 20) selected by one click (view state; no property changed).
- Inheritance (after one view scroll of the Properties pane): View Attributes Inherited From Property `FX_Item`; Edit Property Class Extension For Property Class `FX_Item` with its ellipsis (accessibility button `e2709`). Component-level Right-Click Menu `StdDefault`; Add/Details Form, Find Form and Property blank. **Expected values confirmed.**
- Existence gate: the brief's stop gate (extension already exists) is evaluated by the ellipsis click itself: if the extension existed the editor would open without the prompt. The prompt naming `FX_Item` was the observed result (see below). The T1 Global Objects list check (FX_Item absent) was not repeated in T2.

### Creation prompt (ONE ellipsis click; ONE Yes)

- Ellipsis `e2709` clicked **once**. Immediate result: in-page alertdialog, text verbatim **`Property Class Extension FX_Item does not exist. Create it?`**; buttons `Yes` (focused) and `No`. The exact prompt matched the brief's text; the class named is FX_Item.
- Screenshot `t2-03-creation-prompt-FX_Item.png` taken **before** the answer.
- **ONE click on Yes** (`e2942`). No timeout alert. The `Property Class Extension` dialog opened (Name `FX_Item`; Version `User version for user <operator>`; Design group expanded; Appearance, Behavior, Data Source, Events, Help, Layout, Miscellaneous and Report collapsed; buttons **OK** and **Help** only, no Cancel).

### Field entries (each committed with one Tab; verified before the next field)

| Field | Route (refs from fresh dialog snapshots) | Committed value after Tab | Evidence |
| --- | --- | --- | --- |
| Behavior → Add/Details and Find Form group | Behavior chevron (view) then group chevron (view) | group expanded; Add/Details Form, Find Form, Property, Right-Click Menu rows visible | `t2-05`, `t2-07` |
| Add/Details Form | arrow cell `e3267` (one click) → option `FX_Items` `e3890` (one click) → **Tab** | `FX_Items` | `t2-08` (list open), `t2-09` (after Tab) |
| Find Form | arrow cell `e3280` (one click) → option `FX_Items` `e5807` (one click) → **Tab** | `FX_Items` | `t2-11` (after Tab) |
| Property | arrow cell `e3293` (one click; the list opened **empty**, the same condition as EXP-069-R2 T4) → typed exact text `FX_Item` into the active combobox `e7142` (one type) → **Tab** | `FX_Item` (non-editing) | `t2-13` (empty list), `t2-14` (after Tab) |
| Right-Click Menu | arrow cell `e3197` (one click) → option `StdDetailsAddFind` `e7177` (one click; exact cell, not `StdDetailsAddFindSearch` or `StdDetailsAddFindSearchAction`) → **Tab** | `StdDetailsAddFind` | `t2-16` (all four before OK) |

- The Add/Details Form list offered `AccessAs` … through `FX_HelloWorld01`, `FX_Items`, `FX_Orders` (alphabetical); the `FX_Items` option was found by a narrow search (`"FX_Items"`). A broader search (`listbox|option`) returned an output too large to read; it had no effect (read-only).
- Pre-OK check (`t2-16`, snapshot `t2-15`): Add/Details Form `FX_Items`; Find Form `FX_Items`; Property `FX_Item`; Right-Click Menu `StdDetailsAddFind`; no list open; Name `FX_Item`; Version `User version for user <operator>` (from the `t2-04` snapshot; the user name is not copied).

### ONE OK

- ONE click on the dialog **OK** (`e2981`), after the four committed values were verified and no field was in editing state.
- **Native response: no alert, no error text, no toast text visible; the dialog closed** (`t2-17`; find for alertdialog and `dialog "` returned none).
- **Designer toolbar Save: ENABLED** (the Designer is dirty). Regenerate Form enabled. **Undo: disabled.** Footer `ScopeType: User`. FX_Orders Form still selected (tab `FX_Orders`).
- Component-level check after OK (find): FX_ItemCombobox Right-Click Menu still `StdDefault` (unchanged).
- **Save NOT invoked** (per brief). Designer close/reopen not performed. The runtime was not opened. FX_CustomerID not started.
- **Not established by T2:** whether the OK committed the four values to the stored definition (the dirty state shows the Designer has unsaved changes; persistence and the stored values are for the T3/T4 readbacks after the single Save); whether the Right-Click Menu survives the OK (the EXP-069-R2 loss point was never resolved).

### Deviations and notes (T2)

- **N1:** The Global Objects list was not re-opened in T2 to re-verify the absence of FX_Item. The ellipsis click's prompt (which names FX_Item as nonexistent) served as the existence gate, as the brief's gate allows.
- **N2:** The creation editor (opened by Yes) is titled `Property Class Extension` and has **OK and Help only, no Cancel**. This differs from the Global Objects dialog (which has OK, Cancel, Help). Observed; relevant to any later dismissal.
- **N3:** The Property list was empty on opening (as EXP-069-R2 T4). Typing the exact name into the active combobox and pressing Tab committed it; this is the brief's documented fallback.
- **N4:** The Add/Details Form and Find Form lists were opened from the arrow cells with one click each (an arrow-cell click opens the list; a row click only selects).
- **N5:** The Behavior and Add/Details group expansions and the Properties scrolls were view state only.
- **N6:** The T2 screenshot filenames follow the step order. `t2-04-pce-dialog-after-yes.png` shows the Design group with Name `FX_Item`; the Behavior and Add/Details groups are expanded only in later captures.
- **N7:** A snapshot file was written by the tool for `t2-00`, `t2-04`, `t2-06`, `t2-10`, `t2-12` and `t2-15` (the `filename` parameter). Other snapshots were returned inline.

### Browser action audit (T2, exact; 60 calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t2-00` | Designer FX_Orders; Save and Undo disabled |
| 4 | `browser_find` regex (ScopeType/Save/Undo/alertdialog) | User scope; Save disabled; no dialog |
| 5 | `browser_find` "FX_ItemCombobox" | Components row `e1092` |
| 6 | `browser_click` `e1092` (FX_ItemCombobox row) | Row selected (view state) |
| 7 | `browser_find` regex (Inheritance and Behavior labels) | Right-Click Menu `StdDefault`; View Attributes and Edit Property Class Extension `FX_Item` |
| 8 | `browser_find` "Open Edit Property" | No match (ellipsis is in a cell; located next) |
| 9 | `browser_take_screenshot` `t2-01` | Identity; Behavior expanded |
| 10 | `browser_mouse_move_xy` (1700,560) | Pointer over Properties (view) |
| 11 | `browser_mouse_wheel` (0,900) | Properties scrolled to Inheritance (view) |
| 12 | `browser_take_screenshot` `t2-02` | Inheritance visible |
| 13 | `browser_find` regex "Edit Property Class Extension For Property Class" | Row found; cell with ellipsis |
| 14 | `browser_snapshot` target `e2699` | Ellipsis button `e2709` |
| 15 | `browser_click` `e2709` (ellipsis, **once**) | Prompt appeared |
| 16 | `browser_find` regex (alertdialog/does not exist/Create/Yes/Timeout) | Exact prompt text; Yes `e2942` |
| 17 | `browser_take_screenshot` `t2-03` (prompt, before answer) | Prompt visible |
| 18 | `browser_click` `e2942` (Yes, **once**) | Property Class Extension dialog opened; no timeout |
| 19 | `browser_find` regex (dialog contents) | Name FX_Item; Version User version; OK and Help |
| 20 | `browser_snapshot` target `e2946` saved `t2-04` | Dialog tree read |
| 21 | `browser_take_screenshot` `t2-04` | Design group; Name FX_Item |
| 22 | `browser_mouse_click_xy` (777,443) Behavior chevron | Behavior expanded (view) |
| 23 | `browser_take_screenshot` `t2-05` | Behavior groups visible |
| 24 | `browser_mouse_click_xy` (787,587) Add/Details and Find chevron | Group expanded (view) |
| 25 | `browser_snapshot` target `e2946` saved `t2-06` | Add/Details, Find, Property, Right-Click rows present |
| 26 | `browser_take_screenshot` `t2-07` | Four rows visible, blank |
| 27 | `browser_click` `e3267` (Add/Details arrow cell) | List opened (commit not yet) |
| 28 | `browser_find` regex "listbox\|option" | Output too large to read (no effect; read-only) |
| 29 | `browser_take_screenshot` `t2-08` | Add/Details list open |
| 30 | `browser_find` regex "FX_Items" | Option `e3890` |
| 31 | `browser_click` `e3890` (FX_Items option, **once**) | Add/Details Form set in the field |
| 32 | `browser_press_key` Tab (**once**) | Committed |
| 33 | `browser_take_screenshot` `t2-09` | Add/Details `FX_Items` |
| 34 | `browser_snapshot` target `e2946` saved `t2-10` | Dialog after Add/Details commit |
| 35 | `browser_find` text "Find Form Open Edit Property Dialog" | Find Form arrow `e3280` |
| 36 | `browser_click` `e3280` (Find Form arrow cell) | List opened |
| 37 | `browser_find` regex "FX_Items" | Option `e5807` |
| 38 | `browser_click` `e5807` (FX_Items option, **once**) | Find Form set |
| 39 | `browser_press_key` Tab (**once**) | Committed |
| 40 | `browser_mouse_move_xy` (950,520) | Pointer over dialog (view) |
| 41 | `browser_mouse_wheel` (0,200) | Dialog pane scrolled to Property (view) |
| 42 | `browser_take_screenshot` `t2-11` | Add/Details `FX_Items`, Find `FX_Items`; Property blank |
| 43 | `browser_snapshot` target `e2946` saved `t2-12` | Property arrow `e3293` |
| 44 | `browser_click` `e3293` (Property arrow cell) | List opened **empty** |
| 45 | `browser_take_screenshot` `t2-13` | Empty Property list |
| 46 | `browser_find` regex "combobox [expanded]" | Active combobox `e7142` |
| 47 | `browser_type` `e7142` "FX_Item" | Text entered into Property combobox |
| 48 | `browser_press_key` Tab (**once**) | Committed as `FX_Item` |
| 49 | `browser_take_screenshot` `t2-14` | Property `FX_Item`, non-editing |
| 50 | `browser_snapshot` target `e2946` saved `t2-15` | Property committed text `FX_Item` |
| 51 | `browser_click` `e3197` (Right-Click Menu arrow cell) | List opened |
| 52 | `browser_find` "StdDetailsAddFind" | Exact option, separate from Search variants |
| 53 | `browser_click` `e7177` (StdDetailsAddFind option, **once**) | Right-Click Menu set |
| 54 | `browser_press_key` Tab (**once**) | Committed `StdDetailsAddFind` |
| 55 | `browser_take_screenshot` `t2-16` | All four committed; no list open (pre-OK) |
| 56 | `browser_find` text "OK" | OK `e2981` |
| 57 | `browser_click` `e2981` (dialog OK, **once**) | Dialog closed; no alert |
| 58 | `browser_take_screenshot` `t2-17` | No dialog; Save enabled; User scope |
| 59 | `browser_find` regex (alertdialog/Save/Undo/ScopeType) | Save enabled; Undo disabled; no dialog |
| 60 | `browser_find` regex "Right-Click Menu\|StdDefault" | Component value `StdDefault` (unchanged) |

**T2 counts (exact):** browser calls **60**. Tab lists **1**; tab selects **1** (succeeded). Snapshots **7** (1 untargeted: `t2-00`; 6 targeted/dialog: `e2699`, `e2946` ×5). Finds **16** (one returned an output too large to read; no effect). Screenshots **13** (`t2-01` to `t2-17`; all succeeded). Element clicks (by ref) **11** (row `e1092`; ellipsis `e2709`; Yes `e2942`; Add/Details arrow `e3267`; option `e3890`; Find arrow `e3280`; option `e5807`; Property arrow `e3293`; Right-Click arrow `e3197`; option `e7177`; OK `e2981`). Coordinate clicks **2** (view chevrons). Mouse moves **2**. Mouse wheel **2** (view). Typed text **1** (`FX_Item` into the Property combobox). Key presses **4** (Tab ×4, each a commit). Dialog Cancel **0**. Browser errors or timeouts **0**. Ref-not-found errors **0**. Fresh-snapshot recovery used **0**. Parallel browser actions **0**.

**Mongoose mutations and lifecycle (T2), exact:**
- Extensions created: **1** (FX_Item, User version). Creation prompts answered Yes: **1** (exact text). Extension ellipsis clicks: **1**. Extension dialog OK clicks: **1**. Extension field entries committed: **4** (Add/Details Form, Find Form, Property, Right-Click Menu), each with one Tab; contingency corrections **0**.
- Designer Saves: **0** (Save enabled after the OK; not pressed). Designer close/reopen **0 / 0**. Designer unloads **0**. Web Client unloads **0**.
- Component or property changes: **0** (the extension dialog's values are extension fields; the component-level FX_ItemCombobox values were read after the OK and are unchanged).
- Runtime (tab 1) actions **0**. Runtime right-clicks **0**. Runtime Save **0**.
- Details / Add / Find chosen **0 / 0 / 0**. FX_UM extension touched **0**. FX_CustomerID extension touched **0**.
- Checkout, check-in, undo-checkout **0**. Cache unload, FormSync, deployment, regeneration **0**.
- Re-logins **0**. Session-expiry procedure **not invoked** (no expiry observed).
- Dialogs open at the end of T2: **none**. Browser-native dialogs: **none**.

### Cumulative counts (T1 + T2)

| Item | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Browser calls | 53 | 60 | **113** |
| Screenshots | 13 | 13 | **26** |
| Extensions created (FX_Item / FX_CustomerID) | 0 | 1 (FX_Item) | **1 / 2 planned** |
| Creation prompts answered Yes | 0 | 1 | **1** (limit 2) |
| Extension dialog OK clicks | 0 | 1 | **1** |
| Contingency corrections | 0 | 0 | **0** |
| Designer Save | 0 | 0 | **0** (limit 1) |
| Designer close / reopen | 0 / 0 | 0 / 0 | **0 / 0** (limit 1 each) |
| Component changes | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | **0** |
| Re-logins | 0 | 0 | **0** |

### Worker-written file inventory (T2)

- `experiments/EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md` (updated: T2 status line and this T2 section; the file was created in T1).
- `evidence/EXP-085/t2-00-designer-fresh-snapshot-start.yml`
- `evidence/EXP-085/t2-04-pce-dialog-after-yes-snapshot.yml`
- `evidence/EXP-085/t2-06-pce-dialog-addfind-expanded-snapshot.yml`
- `evidence/EXP-085/t2-10-pce-dialog-after-addform-commit-snapshot.yml`
- `evidence/EXP-085/t2-12-pce-dialog-after-findform-commit-snapshot.yml`
- `evidence/EXP-085/t2-15-pce-dialog-after-property-commit-snapshot.yml`
- `evidence/EXP-085/t2-01-FX_ItemCombobox-inheritance-before-ellipsis.png`
- `evidence/EXP-085/t2-02-FX_ItemCombobox-inheritance-ellipsis-visible.png`
- `evidence/EXP-085/t2-03-creation-prompt-FX_Item.png`
- `evidence/EXP-085/t2-04-pce-dialog-after-yes.png`
- `evidence/EXP-085/t2-05-pce-dialog-behavior-expanded.png`
- `evidence/EXP-085/t2-07-pce-dialog-addfind-rows-before-entry.png`
- `evidence/EXP-085/t2-08-add-details-form-list-open.png`
- `evidence/EXP-085/t2-09-after-add-details-form-tab-commit.png`
- `evidence/EXP-085/t2-11-pce-dialog-after-findform-commit-scrolled.png`
- `evidence/EXP-085/t2-13-property-list-after-open.png`
- `evidence/EXP-085/t2-14-property-typed-FX_Item-after-tab.png`
- `evidence/EXP-085/t2-16-pce-dialog-all-four-committed-before-OK.png`
- `evidence/EXP-085/t2-17-after-FX_Item-OK-response.png`

T2 worker-written: 1 record update, 6 snapshot files, 13 screenshots. The browser tool's own logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Screenshot evidence (T2; what each shows and does not prove)

- `t2-03-creation-prompt-FX_Item.png`: the in-page prompt with the exact text `Property Class Extension FX_Item does not exist. Create it?`, Yes (focused) and No, over the Property Class Extension dialog and the FX_Orders Designer with the FX_ItemCombobox Inheritance visible. **Proves** the prompt text and the class named, before the answer. **Does not prove** that the answer created a stored object.
- `t2-04-pce-dialog-after-yes.png`: the creation dialog after Yes: Name `FX_Item`; Version `User version for user …`; OK and Help only. **Proves** the dialog opened and its identity. **Does not prove** the Add/Details, Find, Property or Right-Click values (the groups are collapsed in this frame).
- `t2-08-add-details-form-list-open.png`: the Add/Details Form list open (AccessAs … ApplicationSchemaColumnsMetadata visible; FX_Items off-screen; the option was found by accessibility). **Proves** the list route works. **Does not prove** the chosen value.
- `t2-09-after-add-details-form-tab-commit.png`: Add/Details Form `FX_Items` with no list open after Tab. **Proves** the committed text for that field.
- `t2-13-property-list-after-open.png`: the Property list opened with no options (empty listbox; arrow up). **Proves** the empty-list condition on this run. **Does not prove** why the list is empty.
- `t2-14-property-typed-FX_Item-after-tab.png`: Property `FX_Item` after Tab (no list open; the arrow down). **Proves** the committed text for Property. **Does not prove** persistence.
- `t2-16-pce-dialog-all-four-committed-before-OK.png`: Add/Details Form `FX_Items`; Find Form `FX_Items`; Property `FX_Item`; Right-Click Menu `StdDetailsAddFind`; no list open; OK and Help. **Proves** the four committed values visible before OK. **Does not prove** the Name and Version rows (scrolled out of this frame; read in `t2-04` and the snapshots) or any stored state.
- `t2-17-after-FX_Item-OK-response.png`: the dialog closed; the Designer toolbar Save icon active; Undo greyed; FX_ItemCombobox Inheritance `FX_Item`; footer `ScopeType: User`. **Proves** the dialog closed and the Designer is dirty. **Does not prove** the stored values; no toast text is visible in this frame.

### Acceptance (T2)

| AC | T2 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-2 | **Supported (UI level, one run).** One ellipsis click on FX_ItemCombobox; one Yes to the exact prompt for FX_Item; Add/Details Form `FX_Items`, Find Form `FX_Items`, Property `FX_Item`, Right-Click Menu `StdDetailsAddFind`, each committed with one Tab and visible before one OK. | `t2-03` (prompt, before answer); `t2-16` (four values before OK); `t2-09`, `t2-11`, `t2-14` (per-field commits); `t2-17` (after OK) | Stored state not read (readback is T3/T4). The `t2-16` frame does not show the Name and Version rows (see `t2-04`). |
| AC-1 | Carried from T1; re-checked at T2 start (Designer FX_Orders, User scope, clean; FX_ItemCombobox Inheritance `FX_Item`; component Behavior values). | `t2-00` (snapshot file); find results | — |
| AC-3 to AC-6 | **NOT RUN** (FX_CustomerID creation, the single Designer Save, the readbacks and close/reopen are later tasks). | — | — |

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| The creation prompt for FX_Item is `Property Class Extension FX_Item does not exist. Create it?` with Yes focused | **observed** (one run, T2; `t2-03`) |
| Yes opens a `Property Class Extension` editor with Name `FX_Item` and no timeout alert | **observed** (one run, T2; `t2-04`) |
| The creation editor has OK and Help only (no Cancel) | **observed** (one run, T2; `t2-04`, `t2-16`) |
| The Property list is empty when opened for FX_Item; typing the exact class name into the active combobox and pressing Tab commits `FX_Item` | **observed** (one run, T2; `t2-13`, `t2-14`) |
| Right-Click Menu lists `StdDetailsAddFind` separately from the Search variants; the exact option was chosen | **observed** (one run, T2; `t2-16`) |
| OK closes the creation editor with no alert and makes the Designer toolbar Save enabled | **observed** (one run, T2; `t2-17`) |
| The FX_ItemCombobox component-level Right-Click Menu remains `StdDefault` after OK | **observed** (one run, T2; find after OK) |
| Whether FX_Item's four values are stored (persisted) | **unresolved** (requires the T3/T4 readback after the single Designer Save) |
| Whether the Right-Click Menu survives OK and Save (the EXP-069-R2 loss) | **unresolved** |
| Cause of the empty Property list | **unresolved** (the same condition as EXP-069-R2 T4) |

### Open questions and next permitted action

1. **Designer is DIRTY (Save enabled), open, User scope; no dialog open.** The brief forbids Save in T2 and forbids closing a dirty Form without approval. The coordinator must decide the ordering: FX_CustomerID creation (the next task) then one Save and the readbacks, per the brief's sequence.
2. **Next permitted action (needs the coordinator's authorization for the next task):** FX_CustomerIDCombobox: select it, verify Inheritance `FX_CustomerID`, one ellipsis click, one Yes to `Property Class Extension FX_CustomerID does not exist. Create it?`, Add/Details Form `FX_HelloWorld01`, Find Form `FX_HelloWorld01`, Property `FX_Code` (empty list expected: type it, Tab), Right-Click Menu `StdDetailsAddFind` (Tab), pre-OK screenshot, one OK.
3. Classification for all T2 findings: **observed only, NOT replay_verified.**

---

## T3 — FX_CustomerID property-class extension created through FX_CustomerIDCombobox: one ellipsis click, one Yes, four committed values, ONE OK; Designer dirty; Save NOT invoked (cycle 2)

Task T3 (bounded instruction: create ONLY the User-scoped FX_CustomerID extension through FX_CustomerIDCombobox; preserve the dirty FX_Orders Designer and the unsaved FX_Item extension; capture the prompt; Yes once only if it reads exactly `Property Class Extension FX_CustomerID does not exist. Create it?`; commit each field with one Tab; verify four values; ONE OK; no Designer Save, no readback, no correction, no close/reopen, no component or runtime action). Run `R-20261014-133538-PdTc`, experiment EXP-085, cycle 2, task_message_id `b2742aa1-50b7-4ba7-9e08-fea4065d09c7`, worker session `a11950eb-dcb4-409d-8d31-8c71e3eeead3`. Date 2026-10-14.

### Sources reviewed (T3)

- EXP-070 (`experiments/EXP-070-…orders-property-classes.md`, targeted read, lines 14, 40–45, 211, 243–244, 261–262, 355): FX_CustomerID class domain: Domain IDO Name `FX_HelloWorld01` (project `FX_HelloWorldProject01`), Domain Property `FX_Code`, Domain List Properties `FX_Label`. **Establishes Property `FX_Code` for the extension.** Trust: observed in EXP-070 (one run); targeted read only.
- Others (EXP-069-R2 T3/T4/T10, EXP-069-R4 T8 and outcome, EXP-084 status, AGENTS.md, web-designer.md, tutorial Section 4) were read in T1/T2 and are unchanged; the T2 lessons were applied.

### Starting state (fresh; verified before any action)

- Tab list (first browser call, before selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client (not touched). Tab 0 selected (succeeded).
- Fresh snapshot `evidence/EXP-085/t3-00-designer-fresh-snapshot-start.yml`; find: FX_Orders tab selected; footer `ScopeType: User`; **toolbar Save ENABLED (the Designer is dirty, as left by T2 — expected)**; Undo disabled; no alertdialog and no in-page dialog.
- Components grid: FX_CustomerIDCombobox row (`ComboBox`, `object.FX_CustomerID`, pane 1, tab 14) selected by one click (view state).
- Gate values (find and `t3-01`/`t3-02`): binding `object.FX_CustomerID`; View Attributes Inherited From Property `FX_CustomerID`; Edit Property Class Extension For Property Class `FX_CustomerID` (ellipsis `e2713`); component Right-Click Menu `StdDefault`. **Expected values confirmed.**
- The T1 Global Objects check (FX_CustomerID absent) was not repeated. The creation prompt naming FX_CustomerID is the existence gate, as in T2 (N1 of T2).

### Creation prompt (ONE ellipsis click; ONE Yes)

- Ellipsis `e2713` clicked **once**. Immediate result: alertdialog, text verbatim **`Property Class Extension FX_CustomerID does not exist. Create it?`**; buttons `Yes` (focused) and `No`. Matches the brief's required text; the class named is FX_CustomerID.
- Screenshot `t3-03-creation-prompt-FX_CustomerID.png` taken **before** the answer.
- **ONE click on Yes** (`e2946`). No timeout alert. The `Property Class Extension` dialog opened.

### Field entries (each committed with one Tab; verified before the next)

| Field | Route (fresh refs) | Committed value after Tab | Evidence |
| --- | --- | --- | --- |
| Name / Version (Design) | Read from the snapshot after Yes | Name `FX_CustomerID`; Version `User version for user …` (username not copied) | `t3-04` (YAML), `t3-05` (screenshot) |
| Add/Details and Find Form group | Already expanded in this dialog (state from T2; no expansion click in T3) | rows visible | `t3-05` |
| Add/Details Form | arrow `e3126` (one click) → option `FX_HelloWorld01` `e3887` (one click) → **Tab** | `FX_HelloWorld01` | `t3-06` |
| Find Form | arrow `e3139` (one click) → option `FX_HelloWorld01` `e5804` (one click) → **Tab** | `FX_HelloWorld01` | `t3-08` |
| Property | arrow `e3152` (one click; list opened **empty**) → typed exact `FX_Code` into the active combobox `e7140` (one type) → **Tab** | `FX_Code` (non-editing) | `t3-10` |
| Right-Click Menu | arrow `e3181` (one click) → option `StdDetailsAddFind` `e7176` (one click; the exact cell, not `StdDetailsAddFindSearch` `e7178`) → **Tab** | `StdDetailsAddFind` | `t3-12` |

- Before the Property entry, the Add/Details and Find Form values were checked after scrolling (`t3-08`, snapshot `t3-09`): both `FX_HelloWorld01`.
- Pre-OK check: `t3-12` shows Add/Details Form `FX_HelloWorld01`, Find Form `FX_HelloWorld01`, Property `FX_Code`, Right-Click Menu `StdDetailsAddFind`, no list open, OK and Help. Name and Version were verified from the snapshot `t3-11` (Name gridcell `FX_CustomerID`; Version `User version for user …`) because they are scrolled out of the `t3-12` frame.
- The Property list was empty (same condition as T2 and EXP-069-R2 T4); the brief's fallback (type the exact name and Tab) was used.

### ONE OK

- ONE click on the dialog **OK** (`e2985`), after the four committed values and Name/Version were verified and no field was in editing state.
- **Native response: no alert, no error text, no toast visible; the dialog closed** (`t3-13`; find for alertdialog and `dialog "` returned none).
- **Designer toolbar Save: ENABLED** (dirty; not pressed). Regenerate Form enabled. **Undo: disabled.** Footer `ScopeType: User`. FX_Orders tab still selected.
- Component-level check after OK (find): FX_CustomerIDCombobox Right-Click Menu still `StdDefault` (unchanged).
- **Designer Save NOT invoked**, no Global Objects readback, no correction, no Designer close/reopen, no runtime action, FX_Item not re-opened, FX_UM untouched.
- **Not established by T3:** storage or persistence of either extension (the Designer is dirty; the readbacks come after the single Save in the next task); whether the four FX_CustomerID values are stored.

### Deviations and notes (T3)

- **N1:** The Add/Details and Find Form groups were already expanded in the creation dialog (view state carried from T2), so no expansion clicks were needed in T3. Behavior likewise.
- **N2:** The creation editor has OK and Help only (no Cancel), as in T2.
- **N3:** The Name and Version were verified from the accessibility snapshot after the Property entry, not from the final frame, because they were scrolled out.
- **N4:** The Global Objects list was not re-opened in T3 (the prompt served as the existence gate, as in T2).
- **N5:** Snapshot files written by the tool for `t3-00`, `t3-04`, `t3-07`, `t3-09`, `t3-11`. Other snapshots were returned inline.

### Browser action audit (T3, exact; 48 calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t3-00` | Designer FX_Orders; Save enabled (dirty); Undo disabled; User scope |
| 4 | `browser_find` regex (alertdialog/Save/Undo/ScopeType) | Same; no dialog |
| 5 | `browser_find` "FX_CustomerIDCombobox" | Row `e946` |
| 6 | `browser_click` `e946` (row) | Row selected (view) |
| 7 | `browser_find` regex (Inheritance/Behavior labels) | Binding `object.FX_CustomerID`; Inheritance `FX_CustomerID`; Right-Click `StdDefault`; ellipsis row `e2703` |
| 8 | `browser_snapshot` target `e2703` | Ellipsis `e2713` |
| 9 | `browser_take_screenshot` `t3-01` | Identity; Right-Click `StdDefault`; Save enabled |
| 10 | `browser_mouse_move_xy` (1700,560) | View |
| 11 | `browser_mouse_wheel` (0,900) | Properties scrolled to Inheritance (view) |
| 12 | `browser_take_screenshot` `t3-02` | Inheritance `FX_CustomerID` visible |
| 13 | `browser_click` `e2713` (ellipsis, **once**) | Prompt appeared |
| 14 | `browser_find` regex (alertdialog/does not exist/Create/Yes/Timeout) | Exact prompt; Yes `e2946` |
| 15 | `browser_take_screenshot` `t3-03` (prompt before answer) | Prompt visible |
| 16 | `browser_click` `e2946` (Yes, **once**) | Dialog opened; no timeout |
| 17 | `browser_snapshot` target `e2950` saved `t3-04` | Name FX_CustomerID; Version User version |
| 18 | `browser_take_screenshot` `t3-05` | Design and Behavior groups visible; Name `FX_CustomerID` |
| 19 | `browser_click` `e3126` (Add/Details arrow cell) | List opened |
| 20 | `browser_find` "FX_HelloWorld01" | Option `e3887` |
| 21 | `browser_click` `e3887` (option, **once**) | Add/Details set |
| 22 | `browser_press_key` Tab (**once**) | Committed |
| 23 | `browser_take_screenshot` `t3-06` | Add/Details `FX_HelloWorld01` |
| 24 | `browser_snapshot` target `e2950` saved `t3-07` | Refs for Find Form |
| 25 | `browser_click` `e3139` (Find arrow cell) | List opened |
| 26 | `browser_find` "FX_HelloWorld01" | Option `e5804` |
| 27 | `browser_click` `e5804` (option, **once**) | Find Form set |
| 28 | `browser_press_key` Tab (**once**) | Committed |
| 29 | `browser_take_screenshot` `t3-08` | Find Form `FX_HelloWorld01` |
| 30 | `browser_mouse_move_xy` (950,520) | View |
| 31 | `browser_mouse_wheel` (0,200) | Dialog pane scrolled to Property (view) |
| 32 | `browser_snapshot` target `e2950` saved `t3-09` | Property arrow `e3152` |
| 33 | `browser_click` `e3152` (Property arrow cell) | List opened **empty** |
| 34 | `browser_find` regex "combobox [expanded]" | Active combobox `e7140` |
| 35 | `browser_type` `e7140` "FX_Code" | Text entered into the Property combobox |
| 36 | `browser_press_key` Tab (**once**) | Committed `FX_Code` |
| 37 | `browser_take_screenshot` `t3-10` | Property `FX_Code`, non-editing |
| 38 | `browser_snapshot` target `e2950` saved `t3-11` | Property committed; Name and Version read |
| 39 | `browser_click` `e3181` (Right-Click arrow cell) | List opened |
| 40 | `browser_find` "StdDetailsAddFind" | Exact option `e7176`; Search variant `e7178` |
| 41 | `browser_click` `e7176` (StdDetailsAddFind, **once**) | Right-Click Menu set |
| 42 | `browser_press_key` Tab (**once**) | Committed |
| 43 | `browser_take_screenshot` `t3-12` | All four committed before OK |
| 44 | `browser_find` "OK" | OK `e2985` |
| 45 | `browser_click` `e2985` (dialog OK, **once**) | Dialog closed; no alert |
| 46 | `browser_take_screenshot` `t3-13` | No dialog; Save enabled; User scope |
| 47 | `browser_find` regex (alertdialog/Save/Undo/ScopeType/Regenerate) | Save enabled; Undo disabled; no dialog |
| 48 | `browser_find` regex "Right-Click Menu\|StdDefault" | Component value `StdDefault` (unchanged) |

**T3 counts (exact):** browser calls **48**. Tab lists **1**; tab selects **1** (succeeded). Snapshots **6** (1 untargeted `t3-00`; 5 dialog/targeted: `e2703`, `e2950` ×4). Finds **11** (read-only). Screenshots **9** (`t3-01`, `t3-02`, `t3-03`, `t3-05`, `t3-06`, `t3-08`, `t3-10`, `t3-12`, `t3-13`; all succeeded). Ref clicks **11** (row `e946`; ellipsis `e2713`; Yes `e2946`; Add arrow `e3126`; option `e3887`; Find arrow `e3139`; option `e5804`; Property arrow `e3152`; Right-Click arrow `e3181`; option `e7176`; OK `e2985`). Mouse moves **2**; mouse wheel **2** (view). Typed text **1** (`FX_Code`). Tab key presses **4** (one per field). Dialog Cancel **0**. Errors or timeouts **0**. Ref-not-found **0**. Fresh-snapshot recovery **0**. Parallel browser actions **0**.

**Mongoose mutations and lifecycle (T3), exact:**
- Extensions created: **1** (FX_CustomerID, User version). Creation prompts answered Yes: **1** (exact text). Extension ellipsis clicks: **1**. Extension dialog OK clicks: **1**. Field commits with Tab: **4**. Contingency corrections: **0**.
- Designer Saves: **0** (Save enabled after OK; not pressed). Designer close/reopen **0 / 0**. Designer unloads **0**. Web Client unloads **0**.
- Component or property changes: **0**.
- Runtime actions **0**. Runtime right-clicks **0**. Runtime Save **0**.
- Details / Add / Find chosen **0 / 0 / 0**. FX_UM extension touched **0**. FX_Item extension touched **0** (not reopened).
- Checkout, check-in, undo-checkout **0**. Cache unload, FormSync, deployment, regeneration **0**.
- Re-logins **0**. Session-expiry procedure **not invoked**.
- Dialogs open at the end of T3: **none**. Browser-native dialogs: **none**.

### Cumulative counts (T1 + T2 + T3)

| Item | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Browser calls | 53 | 60 | 48 | **161** |
| Screenshots | 13 | 13 | 9 | **35** |
| Extensions created | 0 | 1 (FX_Item) | 1 (FX_CustomerID) | **2 of 2** |
| Creation prompts answered Yes | 0 | 1 | 1 | **2** (limit 2) |
| Extension dialog OK clicks | 0 | 1 | 1 | **2** |
| Field commits with Tab (extension fields) | 0 | 4 | 4 | **8** |
| Contingency corrections | 0 | 0 | 0 | **0** |
| Designer Save | 0 | 0 | 0 | **0** (limit 1; still to be performed) |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** (limit 1 each) |
| Component changes | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T3)

- `experiments/EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md` (updated: T3 status line and this T3 section).
- `evidence/EXP-085/t3-00-designer-fresh-snapshot-start.yml`
- `evidence/EXP-085/t3-04-pce-dialog-after-yes-snapshot.yml`
- `evidence/EXP-085/t3-07-pce-dialog-after-addform-commit-snapshot.yml`
- `evidence/EXP-085/t3-09-pce-dialog-after-findform-commit-snapshot.yml`
- `evidence/EXP-085/t3-11-pce-dialog-after-property-commit-snapshot.yml`
- `evidence/EXP-085/t3-01-FX_CustomerIDCombobox-inheritance-gate.png`
- `evidence/EXP-085/t3-02-FX_CustomerIDCombobox-inheritance-ellipsis-visible.png`
- `evidence/EXP-085/t3-03-creation-prompt-FX_CustomerID.png`
- `evidence/EXP-085/t3-05-pce-dialog-after-yes-layout.png`
- `evidence/EXP-085/t3-06-addform-FX_HelloWorld01-after-tab.png`
- `evidence/EXP-085/t3-08-findform-FX_HelloWorld01-after-tab.png`
- `evidence/EXP-085/t3-10-property-FX_Code-after-tab.png`
- `evidence/EXP-085/t3-12-pce-dialog-all-four-committed-before-OK.png`
- `evidence/EXP-085/t3-13-after-FX_CustomerID-OK-response.png`

T3 worker-written: 1 record update, 5 snapshot files, 9 screenshots. The browser tool's logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

Cumulative worker-written repository files (T1–T3): record 1 (created T1, updated T2 and T3); T1 evidence 13 PNG; T2 evidence 6 YAML + 13 PNG; T3 evidence 5 YAML + 9 PNG. Total evidence files 46 (13+19+14), plus the record.

### Screenshot evidence (T3; what each shows and does not prove)

- `t3-01-FX_CustomerIDCombobox-inheritance-gate.png`: FX_CustomerIDCombobox selected; Behavior Add/Details, Find, Property blank; Right-Click Menu `StdDefault`; Save enabled (dirty); footer `ScopeType: User`. **Proves** the pre-creation identity and component values. **Does not prove** the Inheritance rows (below the frame).
- `t3-02-…-ellipsis-visible.png`: Inheritance visible: View Attributes `FX_CustomerID`; Edit Property Class `FX_CustomerID` (ellipsis at the row's right, cut at the pane edge). **Proves** the inheritance class before the ellipsis click. **Does not prove** the stored extension.
- `t3-03-creation-prompt-FX_CustomerID.png`: the in-page prompt with the exact text and Yes/No, before the answer. **Proves** the prompt text and class. **Does not prove** creation.
- `t3-05-pce-dialog-after-yes-layout.png`: the creation dialog after Yes: Name `FX_CustomerID`; Version `User version for user …`; Behavior and Add/Details and Find groups expanded; Add/Details Form and Find Form blank. **Proves** the dialog identity before entry. **Does not prove** stored state.
- `t3-06-addform-FX_HelloWorld01-after-tab.png`: Add/Details Form `FX_HelloWorld01`, no list open. **Proves** the committed text. 
- `t3-08-findform-FX_HelloWorld01-after-tab.png`: Add/Details `FX_HelloWorld01`; Find Form `FX_HelloWorld01`; Property below the frame. **Proves** two committed values. **Does not prove** Property.
- `t3-10-property-FX_Code-after-tab.png`: Add/Details and Find `FX_HelloWorld01`; Property `FX_Code` committed; Right-Click Menu blank in this frame. **Proves** the committed Property text. **Does not prove** the Right-Click value (set in the next step).
- `t3-12-pce-dialog-all-four-committed-before-OK.png`: Add/Details `FX_HelloWorld01`; Find `FX_HelloWorld01`; Property `FX_Code`; Right-Click Menu `StdDetailsAddFind`; no list open; OK and Help. **Proves** the four committed values before OK. **Does not prove** Name and Version in this frame (read from `t3-11`) or any stored state.
- `t3-13-after-FX_CustomerID-OK-response.png`: the dialog closed; Save enabled; Undo greyed; FX_CustomerIDCombobox Inheritance `FX_CustomerID`; footer `ScopeType: User`. **Proves** the dialog closed and the Designer is dirty. **Does not prove** persistence; no toast text visible.

### Acceptance (T3)

| AC | T3 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-3 | **Supported (UI level, one run).** One ellipsis click on FX_CustomerIDCombobox; one Yes to the exact prompt for FX_CustomerID; Add/Details Form `FX_HelloWorld01`, Find Form `FX_HelloWorld01`, Property `FX_Code`, Right-Click Menu `StdDetailsAddFind`, each committed with one Tab and visible before one OK. | `t3-03` (prompt, before answer); `t3-12` (four values before OK); `t3-11` (Name and Version); `t3-06`, `t3-08`, `t3-10` (per-field commits); `t3-13` (after OK) | Stored state not read (readback is in the next task after the single Save). |
| AC-1 | Carried from T1/T2; re-checked at T3 start (FX_Orders, User scope, dirty; FX_CustomerIDCombobox binding, Inheritance and Behavior values). | `t3-00` (snapshot), `t3-01`, `t3-02` | — |
| AC-2 | Carried from T2 (FX_Item created; OK; Designer dirty). Not re-verified in T3. | T2 `t2-03`, `t2-16`, `t2-17` | Stored state pending. |
| AC-4, AC-5, AC-6 | **NOT RUN** (the Edit > Property Class Extension readback, the single Designer Save, close/reopen and reopened readbacks are the next task). | — | — |

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| The creation prompt for FX_CustomerID is `Property Class Extension FX_CustomerID does not exist. Create it?` with Yes focused | **observed** (one run, T3; `t3-03`) |
| Yes opens the `Property Class Extension` editor with Name `FX_CustomerID` and no timeout | **observed** (one run, T3; `t3-05`) |
| Add/Details and Find lists offer `FX_HelloWorld01` (and `FX_Items`); the chosen value commits with one Tab | **observed** (one run, T3; `t3-06`, `t3-08`) |
| The Property list is empty for FX_CustomerID; typing the exact `FX_Code` and Tab commits it | **observed** (one run, T3; `t3-10`) |
| The Right-Click Menu list offers `StdDetailsAddFind` distinct from `StdDetailsAddFindSearch`; the exact option was chosen and committed | **observed** (one run, T3; `t3-12`) |
| OK closes the creation editor with no alert; the Designer toolbar Save is enabled | **observed** (one run, T3; `t3-13`) |
| FX_CustomerIDCombobox component-level Right-Click Menu remains `StdDefault` after OK | **observed** (one run, T3; find after OK) |
| Whether the FX_CustomerID values are stored (persisted) | **unresolved** (requires the readback after the single Designer Save) |
| Whether the four values survive the Save and the close/reopen | **unresolved** |
| Cause of the empty Property list (for both extensions) | **unresolved** |

### Open questions and next permitted action

1. **Designer is DIRTY (Save enabled), open, User scope; no dialog open.** Both extensions have been created through OK; the Save is the next step.
2. **Next permitted action (needs the coordinator's authorization for the next task):** Edit > Property Class Extension (Global Objects) readback of FX_Item and FX_CustomerID (all four fields each), Cancel; then the single native toolbar Save (record the verbatim response, or record Save disabled if it is not enabled); then the single Form-tab close and recent-forms reopen; then the readbacks (AC-4, AC-5) and component Behavior values for both comboboxes.
3. The correction contingency applies only if a field reads blank or wrong after the readback; it is not needed by the T3 observations (the OK response and the pre-OK values were correct).
4. Classification for all T3 findings: **observed only, NOT replay_verified; no storage or persistence claimed.**

---

## T4 — Pre-Save readback of FX_Item and FX_CustomerID in Global Objects; one Cancel; Designer dirty, Save NOT pressed (cycle 3)

Task T4 (bounded instruction: read-only readback only. Confirm identity, User scope and Save state; open Designer Edit > Property Class Extension once; select FX_Item and FX_CustomerID in the same dialog without change; record Name, version/scope, Add/Details Form, Find Form, Property and Right-Click Menu of each; confirm FX_UM present without editing; close with Cancel once; no Designer Save, no close/reopen, no ellipsis, no prompt, no field change, no checkout, no runtime). Run `R-20261014-133538-PdTc`, experiment EXP-085, cycle 3, task_message_id `dbc1e313-8f0d-4b53-8b10-047fb85236db`, worker session `a11950eb-dcb4-409d-8d31-8c71e3eeead3`. Date 2026-10-14.

### Sources

The sources were reviewed in T1–T3 and were not re-read in T4 (the T4 instruction is a readback; no new source applies). The EXP-069-R4 Global Objects route, Cancel behaviour and Tab-commit lessons were applied (no editing was done, so no commit was needed).

### Starting state (fresh; verified before any action)

- Tab list (first browser call, before selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client (not touched). Tab 0 selected (succeeded).
- Fresh snapshot `evidence/EXP-085/t4-00-designer-fresh-snapshot-start.yml`; find: FX_Orders tab selected; footer `ScopeType: User`; **toolbar Save enabled (dirty, as left by T2/T3)**; Undo disabled; Regenerate Form enabled; no alertdialog and no in-page dialog. Screenshot `t4-01`.
- The Components row for FX_CustomerIDCombobox was the selection carried from T3 (view state; not changed).

### Opening the dialog (once) and the extension list

- Designer top-menu `Edit` (one click, `e5`) > `Property Class Extension` (one click, `e2199`). Dialog `Global Objects` opened (screenshot `t4-02`). No extension ellipsis, no creation prompt.
- Property Class Extensions list (accessibility, `t4-03`): `FX_CustomerID` (row `e2439`), `FX_Item` (row `e2444`), `FX_UM` (row `e2449`) all present. **FX_UM present** (positive control); FX_Item and FX_CustomerID present (expected after T2 and T3).

### FX_Item readback (selected by its name cell; nothing changed)

Accessibility readback `t4-05` (`evidence/EXP-085/t4-05-FX_Item-selected-properties-snapshot.yml`) and screenshots `t4-04`, `t4-06`:

| Field | Expected (brief) | Read in this readback | Match |
| --- | --- | --- | --- |
| Name | `FX_Item` | `FX_Item` | yes |
| Version (scope) | User | `User version for user …` (username not copied) | yes |
| Add/Details Form | `FX_Items` | `FX_Items` | yes |
| Find Form | `FX_Items` | `FX_Items` | yes |
| Property | `FX_Item` | `FX_Item` | yes |
| Right-Click Menu | `StdDetailsAddFind` | `StdDetailsAddFind` | yes |

`t4-06` shows Add/Details Form `FX_Items`, Find Form `FX_Items`, Property `FX_Item`, Right-Click Menu `StdDetailsAddFind` in one frame (the Name and Version rows are scrolled out; read in `t4-05`).

### FX_CustomerID readback (selected by its name cell in the same dialog; nothing changed)

Accessibility readback `t4-07` (`evidence/EXP-085/t4-07-FX_CustomerID-selected-properties-snapshot.yml`) and screenshots `t4-08`, `t4-09`:

| Field | Expected (brief) | Read in this readback | Match |
| --- | --- | --- | --- |
| Name | `FX_CustomerID` | `FX_CustomerID` | yes |
| Version (scope) | User | `User version for user …` (username not copied) | yes |
| Add/Details Form | `FX_HelloWorld01` | `FX_HelloWorld01` | yes |
| Find Form | `FX_HelloWorld01` | `FX_HelloWorld01` | yes |
| Property | `FX_Code` | `FX_Code` | yes |
| Right-Click Menu | `StdDetailsAddFind` | `StdDetailsAddFind` | yes |

`t4-09` (`…-scrolled-four-fields.png`) shows Add/Details Form `FX_HelloWorld01`, Find Form `FX_HelloWorld01`, Property `FX_Code`, Right-Click Menu `StdDetailsAddFind` in one frame; `t4-08` shows Name `FX_CustomerID` and Add/Details Form. `t4-09-…-scrolled-three-fields.png` is an intermediate capture in which the wheel scrolled the extension list instead of the Properties pane (see deviation N1).

### Per-extension four-field comparison

| Extension | Add/Details Form | Find Form | Property | Right-Click Menu | Name / scope |
| --- | --- | --- | --- | --- | --- |
| FX_Item | `FX_Items` (expected `FX_Items`) ✔ | `FX_Items` (expected `FX_Items`) ✔ | `FX_Item` (expected `FX_Item`) ✔ | `StdDetailsAddFind` (expected `StdDetailsAddFind`) ✔ | `FX_Item`; User version ✔ |
| FX_CustomerID | `FX_HelloWorld01` (expected `FX_HelloWorld01`) ✔ | `FX_HelloWorld01` (expected `FX_HelloWorld01`) ✔ | `FX_Code` (expected `FX_Code`) ✔ | `StdDetailsAddFind` (expected `StdDetailsAddFind`) ✔ | `FX_CustomerID`; User version ✔ |

No blank or wrong value was found, so the correction contingency was **not** used (correct: T4 does not correct).

### Cancel (ONE) and post-Cancel state

- One click on the Global Objects **Cancel** (`e2531`, found by a fresh targeted find). **Native response: no alert, no error text; the dialog closed.** Screenshot `t4-10`.
- Post-Cancel find: no alertdialog and no `dialog` node; `ScopeType: User`; FX_Orders tab selected.
- **Save: ENABLED (not pressed; the Designer is still dirty).** **Undo: disabled.** Regenerate Form enabled (not clicked).
- Component values not re-read in T4 (not in the T4 instruction); the T3 post-OK check (FX_CustomerIDCombobox Right-Click Menu `StdDefault`) and the T2 post-OK check (FX_ItemCombobox `StdDefault`) stand as the last observations.

### Deviations and notes (T4)

- **N1:** The first wheel after selecting FX_CustomerID scrolled the **extension list** (the pointer was not moved over the Properties pane). View-only; FX_CustomerID stayed selected and no value changed. Corrected by moving the pointer over the Properties pane and scrolling again (`t4-09-…-scrolled-four-fields.png`).
- **N2:** Two broad `browser_find` calls (`text "Edit"`, 29 matches; `text "FX_CustomerID"`, 15 matches) returned very large outputs that were not needed; they had no effect (read-only). Targeted finds were used afterwards.
- **N3:** The Name and Version values appear in the accessibility snapshot with the operator name placeholder; the username is not copied into this record.
- **N4:** No ref-not-found error occurred; no recovery snapshot was needed.

### Browser action audit (T4, exact; 31 calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t4-00` | Designer FX_Orders; Save enabled; User scope |
| 4 | `browser_find` regex (alertdialog/Save/Undo/ScopeType/tab) | Same; no dialog |
| 5 | `browser_take_screenshot` `t4-01` | Start state |
| 6 | `browser_find` text "Edit" | Broad output (29 matches); no effect (N2) |
| 7 | `browser_click` `e5` (Designer Edit menu) | Menu opened |
| 8 | `browser_find` text "Property Class Extension" | Menu item `e2199` |
| 9 | `browser_click` `e2199` (Property Class Extension, **once**) | Global Objects opened |
| 10 | `browser_find` regex `dialog "Global Objects"` | Dialog `e2226` |
| 11 | `browser_take_screenshot` `t4-02` | Dialog opened |
| 12 | `browser_snapshot` target `e2226` saved `t4-03` | List: FX_CustomerID, FX_Item, FX_UM present |
| 13 | `browser_click` `e2444` (FX_Item name cell) | FX_Item selected |
| 14 | `browser_take_screenshot` `t4-04` | FX_Item Name, Version, Add/Details `FX_Items` |
| 15 | `browser_snapshot` target `e2226` saved `t4-05` | FX_Item four fields read |
| 16 | `browser_mouse_move_xy` (1150,520) | Pointer over Properties (view) |
| 17 | `browser_mouse_wheel` (0,200) | Properties pane scrolled (view) |
| 18 | `browser_take_screenshot` `t4-06` | FX_Item four fields in one frame |
| 19 | `browser_find` text "FX_CustomerID" | Row `e2439` |
| 20 | `browser_click` `e2439` (FX_CustomerID name cell) | FX_CustomerID selected |
| 21 | `browser_snapshot` target `e2226` saved `t4-07` | FX_CustomerID four fields read |
| 22 | `browser_take_screenshot` `t4-08` | FX_CustomerID Name and Add/Details |
| 23 | `browser_mouse_wheel` (0,200) | Scrolled the **list** instead (N1; view only) |
| 24 | `browser_take_screenshot` `t4-09-…-scrolled-three-fields` | Intermediate; not decisive |
| 25 | `browser_mouse_move_xy` (1150,540) | Pointer over Properties (view) |
| 26 | `browser_mouse_wheel` (0,200) | Properties scrolled |
| 27 | `browser_take_screenshot` `t4-09-…-scrolled-four-fields` | FX_CustomerID four fields in one frame |
| 28 | `browser_find` regex `button "Cancel"` | Cancel `e2531` |
| 29 | `browser_click` `e2531` (Global Objects Cancel, **once**) | Dialog closed; no alert |
| 30 | `browser_find` regex (alertdialog/dialog/Save/Undo/Regenerate/ScopeType) | No dialog; Save enabled; Undo disabled; User |
| 31 | `browser_take_screenshot` `t4-10` | Post-Cancel state |

**T4 counts (exact):** browser calls **31**. Tab lists **1**; tab selects **1** (succeeded). Snapshots **4** (1 untargeted `t4-00`; 3 dialog-targeted `e2226`: `t4-03`, `t4-05`, `t4-07`). Finds **7** (read-only; two broad). Screenshots **8** (`t4-01`, `t4-02`, `t4-04`, `t4-06`, `t4-08`, `t4-09` two captions, `t4-10`; all succeeded). Element clicks **5** (Edit menu 1; Property Class Extension item 1; FX_Item name cell 1; FX_CustomerID name cell 1; Cancel 1). Mouse moves **2**. Mouse wheel **3** (view only; one scrolled the list, N1). Typed text **0**. Tab key presses **0**. Ellipsis clicks **0**. OK clicks **0**. Errors or timeouts **0**. Ref-not-found **0**. Fresh-snapshot recovery **0**. Parallel browser actions **0**.

**Mongoose mutations and lifecycle (T4), exact:**
- Extensions created **0**. Creation prompts answered **0**. Extension ellipsis clicks **0**. Extension dialog OK clicks **0**. Extension field changes **0**. Contingency corrections **0**. New / Copy / Delete used **0**.
- Global Objects Cancel clicks **1** (no change).
- Designer Saves **0** (Save remained enabled; not pressed). Designer close / reopen **0 / 0**. Designer unloads **0**. Web Client unloads **0**.
- Component or property changes **0**. Runtime actions **0**. Runtime right-clicks **0**. Runtime Save **0**.
- FX_UM extension touched **0** (present and only viewed in the list).
- Checkout, check-in, undo-checkout **0**. Cache unload, FormSync, deployment, regeneration **0**.
- Re-logins **0**. Session-expiry procedure **not invoked**. Dialogs open at the end of T4: **none**. Browser-native dialogs: **none**.

### Cumulative browser and mutation audit (T1–T4)

| Item | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Browser calls | 53 | 60 | 48 | 31 | **192** |
| Screenshots | 13 | 13 | 9 | 8 | **43** |
| Extensions created | 0 | 1 (FX_Item) | 1 (FX_CustomerID) | 0 | **2** |
| Creation prompts answered Yes | 0 | 1 | 1 | 0 | **2** |
| Extension ellipsis clicks | 0 | 1 | 1 | 0 | **2** |
| Extension dialog OK clicks | 0 | 1 | 1 | 0 | **2** |
| Extension field commits (Tab) | 0 | 4 | 4 | 0 | **8** |
| Contingency corrections | 0 | 0 | 0 | 0 | **0** |
| Global Objects opened | 1 | 0 | 0 | 1 | **2** |
| Global Objects Cancel | 1 | 0 | 0 | 1 | **2** |
| Designer Save | 0 | 0 | 0 | 0 | **0** (limit 1; still to be performed) |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** (limit 1 each; still to be performed) |
| Component changes | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T4)

- `experiments/EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md` (updated: T4 status line and this T4 section).
- `evidence/EXP-085/t4-00-designer-fresh-snapshot-start.yml`
- `evidence/EXP-085/t4-03-global-objects-dialog-snapshot.yml`
- `evidence/EXP-085/t4-05-FX_Item-selected-properties-snapshot.yml`
- `evidence/EXP-085/t4-07-FX_CustomerID-selected-properties-snapshot.yml`
- `evidence/EXP-085/t4-01-designer-start-state-before-readback.png`
- `evidence/EXP-085/t4-02-global-objects-dialog-opened.png`
- `evidence/EXP-085/t4-04-FX_Item-selected-global-objects-screen.png`
- `evidence/EXP-085/t4-06-FX_Item-readback-four-fields.png`
- `evidence/EXP-085/t4-08-FX_CustomerID-readback-four-fields.png`
- `evidence/EXP-085/t4-09-FX_CustomerID-readback-scrolled-three-fields.png` (intermediate; wheel scrolled the list)
- `evidence/EXP-085/t4-09-FX_CustomerID-readback-scrolled-four-fields.png`
- `evidence/EXP-085/t4-10-after-global-objects-cancel-state.png`

T4 worker-written: 1 record update, 4 snapshot files, 8 screenshots. Cumulative evidence (T1–T4): 43 PNG + 15 YAML = **58 evidence files**, plus the record. The browser tool's logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Screenshot evidence (T4; what each shows and does not prove)

- `t4-02-global-objects-dialog-opened.png`: the Global Objects dialog over the Designer (FX_Orders; User scope footer); the list heading and the Properties pane. **Proves** the route opened. **Does not prove** the extension values (no row selected in this frame).
- `t4-04-FX_Item-selected-global-objects-screen.png`: FX_Item selected in the list; Name `FX_Item`; Version `User version for user …`; Add/Details Form `FX_Items`. Find, Property and Right-Click rows below the frame. **Proves** the selection and three of the values. **Does not prove** Find, Property or Right-Click (see `t4-06`).
- `t4-06-FX_Item-readback-four-fields.png`: FX_Item Add/Details Form `FX_Items`, Find Form `FX_Items`, Property `FX_Item`, Right-Click Menu `StdDetailsAddFind`; FX_UM row visible in the list. **Proves** the four values in one frame. **Does not prove** Name and Version in this frame (read in `t4-05`) or the stored state.
- `t4-08-FX_CustomerID-readback-four-fields.png`: FX_CustomerID selected; Name `FX_CustomerID`; Version `User version …`; Add/Details Form `FX_HelloWorld01`. **Proves** Name, Version and Add/Details. **Does not prove** Find, Property or Right-Click (see `t4-09`).
- `t4-09-FX_CustomerID-readback-scrolled-four-fields.png`: FX_CustomerID Add/Details Form `FX_HelloWorld01`, Find Form `FX_HelloWorld01`, Property `FX_Code`, Right-Click Menu `StdDetailsAddFind`. **Proves** the four values in one frame. **Does not prove** Name and Version in this frame (read in `t4-07`) or the stored state.
- `t4-09-…-scrolled-three-fields.png`: list scrolled, Properties top; not decisive (N1).
- `t4-10-after-global-objects-cancel-state.png`: dialog closed; Designer FX_Orders; Save enabled, Undo greyed; `ScopeType: User`. **Proves** the post-Cancel state. **Does not prove** persistence.

### Acceptance (T4)

| AC | T4 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Re-confirmed for T4.** Sources reviewed in T1–T3; session usable; Designer FX_Orders, User scope, dirty (not the "clean" state of T1; the dirty state is the expected result of the T2 and T3 OKs); extension list shows FX_UM, FX_Item and FX_CustomerID present (the expected absence of FX_Item and FX_CustomerID applied before creation in T1; both now exist from T2 and T3). | `t4-00`, `t4-01`, `t4-02`, `t4-03` | Component Behavior values were not re-read in T4. |
| AC-2 | Carried from T2 (prompt, four values before OK, OK). Re-read in T4: FX_Item four fields match. | `t4-05`, `t4-06` (T2 prompt and pre-OK evidence unchanged) | Pre-Save readback in the same session; not storage. |
| AC-3 | Carried from T3. Re-read in T4: FX_CustomerID four fields match. | `t4-07`, `t4-09` (T3 prompt and pre-OK evidence unchanged) | Pre-Save readback in the same session; not storage. |
| AC-4 | **PARTLY**: the readback of all eight values is recorded (pre-Save, in this session). **NOT complete**: the single Designer Save (with its native response) and the post-Save readback are the next task. | `t4-05`–`t4-09` | No Save yet. |
| AC-5 | **NOT RUN** (Form close/reopen and reopened readback are later). FX_UM unchanged in T4 (present, not edited). | `t4-03`, `t4-09` (FX_UM row) | — |
| AC-6 | Partial (this section and the cumulative audit). | Audit above | Final report not due until after the Save and reopen. |

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| The Global Objects list shows FX_CustomerID, FX_Item and FX_UM after the T2 and T3 OKs (in this client session) | **observed** (one run, T4; `t4-03`) |
| FX_Item (Global Objects readback, pre-Save): Name `FX_Item`; User version; Add/Details `FX_Items`; Find `FX_Items`; Property `FX_Item`; Right-Click `StdDetailsAddFind` | **observed** (one run, T4; `t4-05`, `t4-06`) |
| FX_CustomerID (Global Objects readback, pre-Save): Name `FX_CustomerID`; User version; Add/Details `FX_HelloWorld01`; Find `FX_HelloWorld01`; Property `FX_Code`; Right-Click `StdDetailsAddFind` | **observed** (one run, T4; `t4-07`, `t4-09`) |
| Cancel closes the Global Objects dialog with no alert and leaves the Designer dirty (Save enabled) | **observed** (one run, T4; `t4-10`) |
| Whether the eight values are stored (persisted) | **unresolved** (requires the single Designer Save and the reopen readback) |
| Whether the values survive Save and close/reopen | **unresolved** |
| The EXP-069-R2 Right-Click Menu loss (whether it recurs here) | **unresolved** (not yet checked after a Save) |

### Open questions and next permitted action

1. **Designer is DIRTY (Save enabled), open, User scope; no dialog open.** Both readbacks match. The next permitted step is the single native toolbar Save (record its native response verbatim), then the single Form-tab close and recent-forms reopen, then the readbacks (AC-4 and AC-5) and the component Behavior values. This needs the coordinator's authorization for that task.
2. No blocker. No correction was required.
3. Classification for all T4 findings: **observed only, NOT replay_verified; no storage or persistence claimed.**

---

## T5 — The single native Designer Save of FX_Orders; native response recorded verbatim; Save and Undo disabled afterwards; Form open and clean; no close/reopen (cycle 4)

Task T5 (bounded instruction: one native toolbar Save only if visibly enabled; record the native response verbatim; screenshot after; no retry; no close/reopen; no Global Objects readback; no extension, component or runtime action; no checkout). Run `R-20261014-133538-PdTc`, experiment EXP-085, cycle 4, task_message_id `f5612267-91c8-44fc-906b-995634f9349e`, worker session `a11950eb-dcb4-409d-8d31-8c71e3eeead3`. Date 2026-10-14.

### Starting state (fresh; verified before any action)

- Tab list (first browser call, before selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client (not touched). Tab 0 selected (succeeded).
- Fresh snapshot `evidence/EXP-085/t5-00-designer-fresh-snapshot-pre-save.yml`; find: FX_Orders tab `[selected]`; footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save **enabled** (`button "Save"` without `[disabled]`); Undo `[disabled]`; Regenerate Form enabled (not to be touched); no alertdialog and no `dialog` node. Screenshot `t5-01-pre-save-state.png`.
- Identity of the Save control: the toolbar, left to right, is Open (folder), **Save (floppy, enabled)**, Regenerate Form (circular arrow), a separator, New. The top-toolbar trash icon is Delete Form Definition (not touched). The chosen control is the floppy icon named `Save` (ref `e16`), the only Save-named button.
- T4 record check: the T4 section records FX_Item (`FX_Items`, `FX_Items`, `FX_Item`, `StdDetailsAddFind`) and FX_CustomerID (`FX_HelloWorld01`, `FX_HelloWorld01`, `FX_Code`, `StdDetailsAddFind`), both User version, with no correction. Verified against the T4 section text.

### The Save (ONE invocation)

- ONE click on the native toolbar Save (`e16`, named `Save`; not Regenerate Form `e18`, not the trash icon). No retry.
- **Native response (verbatim):** toast titled `Save`, body text `Global object(s) were saved.`, with a Close control (`t5-02`, and find `Global object(s) were saved.`). No error text, no alert, no confirmation prompt. (EXP-084's Save toast named the Form: `Form [FX_Orders] and global object(s) were saved.` The T5 toast does **not** name the Form; the difference is observed, not explained.)
- The toolbar tooltip `Save` was visible at the moment of the response (hover).

### Post-Save state (observed)

- Immediately after the response (`t5-02`; find): toolbar **Save `[disabled]`**; **Undo `[disabled]`**; Redo disabled; **Regenerate Form `[disabled]`**; FX_Orders tab still open and selected; footer `ScopeType: User`; no alertdialog and no in-page dialog. The toast was visible at the top right of the viewport.
- After a 4-second wait (find): the toast is no longer in the accessibility tree; Save, Undo and scope unchanged; no dialog. **No prompt was left open.**
- Dirty indication: none visible (Save disabled).

### Deviations and notes (T5)

- **N1:** The Save was clicked by the element named `Save` via the tool's locator (`#ext-element-958`); the ref was `e16` from a fresh find in the same state. No recovery was needed.
- **N2:** The toast's wording differs from EXP-084's (no Form name in T5). Recorded as observed.
- **N3:** Two read-only finds and one screenshot were issued in one block after the Save (not parallel browser mutations).

### Browser action audit (T5, exact; 10 calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t5-00` | FX_Orders; Save enabled; Undo disabled; User scope |
| 4 | `browser_find` regex (alertdialog/dialog/Save/Undo/Regenerate/ScopeType/tab) | Save enabled (no `[disabled]`); Undo disabled; no dialog |
| 5 | `browser_take_screenshot` `t5-01` | Pre-save state |
| 6 | `browser_click` `e16` (native Save, **once**) | Toast `Save` / `Global object(s) were saved.` |
| 7 | `browser_take_screenshot` `t5-02` | Toast visible; Save, Undo, Regenerate disabled |
| 8 | `browser_find` regex (post-save) | Save disabled; Undo disabled; Regenerate disabled; toast text; no dialog |
| 9 | `browser_wait_for` 4 s | Waited (read-only) |
| 10 | `browser_find` regex (post-wait) | Toast gone; Save and Undo disabled; User scope; no dialog |

**T5 counts (exact):** browser calls **10**. Tab lists **1**; tab selects **1** (succeeded). Snapshots **1** (untargeted). Finds **4** (read-only). Screenshots **2** (`t5-01`, `t5-02`; both succeeded). Element clicks **1** (the Save; **the only mutating call**). Waits **1** (4 s). Typed text **0**; key presses **0**; wheel **0**; mouse moves **0**; ellipsis clicks **0**; OK clicks **0**; Cancel clicks **0**; Global Objects opened **0**. Errors or timeouts **0**. Ref-not-found **0**. Fresh-snapshot recovery **0**. Parallel browser mutations **0**.

**Mongoose mutations and lifecycle (T5), exact:**
- **Designer Saves: 1** (native toolbar Save, invoked once; the one-Save budget is consumed; no retry). Save-enabled before invocation: yes. Save-disabled after: yes.
- Designer close / reopen **0 / 0** (still to be performed). Designer unloads **0**. Web Client unloads **0**.
- Extensions created **0**; creation prompts **0**; extension ellipsis clicks **0**; extension dialog OKs **0**; extension field changes **0**; contingency corrections **0**.
- Component or property changes **0**. Runtime actions **0**. Runtime right-clicks **0**. Runtime Save **0**.
- Checkout, check-in, undo-checkout **0**. Cache unload, FormSync, deployment, regeneration **0** (Regenerate Form not clicked).
- Re-logins **0**. Session-expiry procedure **not invoked**. Dialogs open at the end of T5: **none**.

### Cumulative browser and mutation audit (T1–T5)

| Item | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 53 | 60 | 48 | 31 | 10 | **202** |
| Screenshots | 13 | 13 | 9 | 8 | 2 | **45** |
| Extensions created | 0 | 1 (FX_Item) | 1 (FX_CustomerID) | 0 | 0 | **2** |
| Creation prompts answered Yes | 0 | 1 | 1 | 0 | 0 | **2** |
| Extension ellipsis clicks | 0 | 1 | 1 | 0 | 0 | **2** |
| Extension dialog OK clicks | 0 | 1 | 1 | 0 | 0 | **2** |
| Extension field commits (Tab) | 0 | 4 | 4 | 0 | 0 | **8** |
| Contingency corrections | 0 | 0 | 0 | 0 | 0 | **0** |
| Global Objects opened / Cancel | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | **2 / 2** |
| Designer Save | 0 | 0 | 0 | 0 | 1 | **1** (limit 1; **consumed**) |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** (limit 1 each; still to be performed) |
| Component changes | 0 | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T5)

- `experiments/EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md` (updated: T5 status line and this T5 section).
- `evidence/EXP-085/t5-00-designer-fresh-snapshot-pre-save.yml`
- `evidence/EXP-085/t5-01-pre-save-state.png`
- `evidence/EXP-085/t5-02-post-save-response-state.png`

T5 worker-written: 1 record update, 1 snapshot file, 2 screenshots. Cumulative evidence (T1–T5): 45 PNG and 16 YAML = **61 evidence files**, plus the record. The browser tool's logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Screenshot evidence (T5; what each shows and does not prove)

- `t5-01-pre-save-state.png`: FX_Orders heading; the toolbar with the enabled Save icon (floppy, second icon) and the Regenerate icon beside it; Undo greyed; FX_CustomerIDCombobox selected with its Inheritance `FX_CustomerID`; footer `ScopeType: User`. **Proves** the pre-Save identity, scope, the enabled Save, and the control layout. **Does not prove** the stored extension values (readback was in T4).
- `t5-02-post-save-response-state.png`: the top-right toast `Save` / `Global object(s) were saved.`; the Save icon greyed; Undo greyed; Regenerate greyed; FX_Orders open; footer `ScopeType: User`. **Proves** the verbatim native response and the post-Save toolbar state in this frame. **Does not prove** persistence in the database or on the server (the response is a UI acknowledgement).

### Acceptance (T5)

| AC | T5 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-4 | **Save part supported (one run).** Exactly one native Designer Save; native response recorded verbatim; Save disabled afterwards. The readback of all eight values was recorded in T4 (pre-Save); the post-Save readback is not yet taken. | `t5-01` (enabled before), `t5-02` (response and disabled after) | The post-Save Global Objects readback is outstanding; it is not a Save. |
| AC-5 | **NOT RUN** (close, reopen and reopened readbacks are the next task). FX_UM was not touched in T5. | — | — |
| AC-1 to AC-3 | Carried from T1–T4. | T1–T4 evidence | — |
| AC-6 | Partial (this section and the cumulative audit). | Audit above | The final report follows the close/reopen. |

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| The native toolbar Save was enabled before the click and is the floppy icon (not Regenerate Form) | **observed** (one run, T5; `t5-01`) |
| Native response after one click: toast `Save` / `Global object(s) were saved.` (no error, no prompt) | **observed** (one run, T5; `t5-02`) |
| The toast text does not name the Form (EXP-084 toast named FX_Orders) | **observed** (one run each; cause not established) |
| After Save: Save, Undo and Regenerate Form disabled; FX_Orders open; User scope; no dialog | **observed** (one run, T5; `t5-02` and the post-wait find) |
| The toast clears by itself within about 4 seconds | **observed** (one run, T5) |
| Whether the saved values are persisted on the server or in the database | **unresolved** (this is UI-level acknowledgement only; the reopen readback is the next check, and even that is same-session) |
| Whether FX_Item and FX_CustomerID read back identically after close/reopen | **unresolved** (next task) |

### Open questions and next permitted action

1. **Designer Save budget consumed (1 of 1).** The Form is clean (Save disabled), open, User scope; no dialog open. No further Save may be made.
2. **Next permitted action (needs the coordinator's authorization for the next task):** close the clean FX_Orders Designer Form once through its Form-tab control; reopen it once through the Form menu recent-forms entry; then Edit > Property Class Extension (Global Objects) readback of FX_Item and FX_CustomerID (all four fields each), closing with Cancel; then the two comboboxes' component-level Behavior values (AC-5).
3. No blocker. The Save result is observed; persistence is not claimed.
4. Classification for all T5 findings: **observed only, NOT replay_verified; no database durability claimed.**

---

## T6 — Clean close and reopen of FX_Orders (once each); post-reopen readback of both extensions; component Behavior compared with preflight; no Save, no mutation (cycle 5)

Task T6 (bounded instruction: list tabs; verify the pre-close state is clean; close FX_Orders once through its Form-tab control (a discard prompt would be recorded and not approved); reopen once through the Form menu recent-forms entry; read the eight extension values through Edit > Property Class Extension once, then Cancel; compare the two comboboxes' component values with the T1 preflight; no Save, no extension or component change, no runtime, no checkout). Run `R-20261014-133538-PdTc`, experiment EXP-085, cycle 5, task_message_id `a5bf1bba-7683-45e0-b084-2def8e61ca13`, worker session `a11950eb-dcb4-409d-8d31-8c71e3eeead3`. Date 2026-10-14.

### Starting state (fresh; verified before any action)

- Tab list (first call, before selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client (not touched). Tab 0 selected (succeeded).
- Fresh snapshot `evidence/EXP-085/t6-00-designer-fresh-snapshot-pre-close.yml`; finds: FX_Orders tab `[selected]`; footer `ScopeType: User`; **toolbar Save `[disabled]`, Undo `[disabled]`, Regenerate Form `[disabled]`**; no alertdialog and no `dialog` node. Screenshot `t6-01-pre-close-state.png`. **Clean; the close precondition is met.**

### Close (ONE) — Form-tab control

- ONE click on the Form-tab close control `closable FX_Orders` (`e247`). **Response: no discard or unsaved-changes prompt; no dialog; the FX_Orders tab disappeared and the canvas was empty** (`t6-02`; find for alertdialog / prompt / discard / unsaved returned none). Nothing was approved or discarded.

### Reopen (ONE) — Form menu recent-forms entry

- Form menu (`e3`, one click) listed, among others, a recent-forms entry `FX_Orders` (`e2204`); one click on it. The Select Form dialog was **not** used (the recent-forms route was available).
- **Result:** the Designer loaded FX_Orders again (tab `FX_Orders` `[selected]`; URL carries `MGForm=FX_Orders`); footer `ScopeType: User`; **toolbar Save `[disabled]`, Undo `[disabled]`, Regenerate Form `[disabled]`**; no alertdialog and no `dialog` node. The Properties panel shows the Form level (Name `FX_Orders`, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`). Screenshot `t6-03-reopened-fx-orders-state.png`. (A hidden tabpanel carrying an "Empty Property Description Field" textbox is part of the collapsed Properties panel, not an open dialog; the screenshot shows no dialog.)

### Read-only extension readback (Edit > Property Class Extension; one open; one Cancel)

- Designer top-menu `Edit` (`e5`, one click) > `Property Class Extension` (`e2584`, one click) opened the `Global Objects` dialog. List (accessibility `t6-04`): `FX_CustomerID` (`e2824`), `FX_Item` (`e2829`), `FX_UM` (`e2834`) present.
- FX_Item selected by its name cell (one click; no change). Accessibility `t6-05`; screenshots `t6-06` (Name, Version, Add/Details at top) and `t6-07` (Add/Details, Find, Property, Right-Click in one frame).
- FX_CustomerID selected by its name cell in the same dialog (one click; no change). Accessibility `t6-08`; screenshots `t6-09` (Name, Version, Add/Details) and `t6-10` (Add/Details, Find, Property, Right-Click in one frame).
- **FX_UM**: present in the list in `t6-04`, `t6-05`, `t6-08`, `t6-07` and `t6-09` (the row is visible in the list in these captures). **Not selected and not edited** in T6 (no field of FX_UM was read in T6).
- ONE Cancel (`e2916`) closed the dialog. **Response: no alert; the dialog closed** (find: no dialog node; footer `ScopeType: User`).

### Eight-value expected-versus-observed comparison (post-reopen readback; four fields per extension plus Name and Version, so twelve observations; retitled in T7)

| # | Extension | Field | Expected | Observed (after reopen) | Source | Match |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | Name | `FX_Item` | `FX_Item` | `t6-05` (accessibility), `t6-06` | yes |
| 2 | FX_Item | Version / scope | User version | `User version for user …` (username not copied) | `t6-05`, `t6-06` | yes |
| 3 | FX_Item | Add/Details Form | `FX_Items` | `FX_Items` | `t6-05`, `t6-06`, `t6-07` | yes |
| 4 | FX_Item | Find Form | `FX_Items` | `FX_Items` | `t6-05`, `t6-07` | yes |
| 5 | FX_Item | Property | `FX_Item` | `FX_Item` | `t6-05`, `t6-07` | yes |
| 6 | FX_Item | Right-Click Menu | `StdDetailsAddFind` | `StdDetailsAddFind` | `t6-05`, `t6-07` | yes |
| 7 | FX_CustomerID | Name | `FX_CustomerID` | `FX_CustomerID` | `t6-08`, `t6-09` | yes |
| 8 | FX_CustomerID | Version / scope | User version | `User version for user …` | `t6-08`, `t6-09` | yes |
| 9 | FX_CustomerID | Add/Details Form | `FX_HelloWorld01` | `FX_HelloWorld01` | `t6-08`, `t6-09`, `t6-10` | yes |
| 10 | FX_CustomerID | Find Form | `FX_HelloWorld01` | `FX_HelloWorld01` | `t6-08`, `t6-10` | yes |
| 11 | FX_CustomerID | Property | `FX_Code` | `FX_Code` | `t6-08`, `t6-10` | yes |
| 12 | FX_CustomerID | Right-Click Menu | `StdDetailsAddFind` | `StdDetailsAddFind` | `t6-08`, `t6-10` | yes |

(The brief's "eight values" are the four fields of each extension; Name and Version were read in addition, so the table lists twelve observations. All twelve match.)

**Evidence limitation (the brief asks for this distinction):** the T6 readback supports (a) the continued **presence** of FX_UM in the list and (b) that the worker did not select or edit FX_UM; it does **not** establish field-by-field equality of FX_UM with any earlier state (no FX_UM field was read in T6, and no pre-T6 FX_UM field readback is recorded in this experiment). No claim of complete field-by-field equality is made for FX_UM.

**Other limitation:** the four values are read in a Global Objects dialog in one reopened client session. Storage, persistence on the server or in the database, and the runtime effect are **not** established by T6.

### Component Behavior before and after (T1 preflight versus post-reopen)

| Component | Field | Preflight (T1, 2026-10-14) | After reopen (T6) | Unchanged? |
| --- | --- | --- | --- | --- |
| FX_ItemCombobox | Data Source Binding Type / Binding | `Property` / `object.FX_Item` | `Property` / `object.FX_Item` | yes |
| FX_ItemCombobox | Inheritance: View Attributes / Edit Property Class Extension | `FX_Item` / `FX_Item` | `FX_Item` / `FX_Item` | yes |
| FX_ItemCombobox | Behavior → Add/Details Form | blank | blank | yes |
| FX_ItemCombobox | Behavior → Find Form | blank | blank | yes |
| FX_ItemCombobox | Behavior → Property | blank | blank | yes |
| FX_ItemCombobox | Behavior → Right-Click Menu | `StdDefault` | `StdDefault` | yes |
| FX_CustomerIDCombobox | Data Source Binding Type / Binding | `Property` / `object.FX_CustomerID` | `Property` / `object.FX_CustomerID` | yes |
| FX_CustomerIDCombobox | Inheritance: View Attributes / Edit Property Class Extension | `FX_CustomerID` / `FX_CustomerID` | `FX_CustomerID` / `FX_CustomerID` | yes |
| FX_CustomerIDCombobox | Behavior → Add/Details Form | blank | blank | yes |
| FX_CustomerIDCombobox | Behavior → Find Form | blank | blank | yes |
| FX_CustomerIDCombobox | Behavior → Property | blank | blank | yes |
| FX_CustomerIDCombobox | Behavior → Right-Click Menu | `StdDefault` | `StdDefault` | yes |

Read method: after the reopen the Details panel was expanded (view), the Components tab selected (view), and the Pane (01) node expanded (view). FX_ItemCombobox was selected by its tree row, then FX_CustomerIDCombobox. Inheritance and Behavior values were read by accessibility; screenshots `t6-13` (FX_ItemCombobox Behavior frame) and `t6-14` (FX_CustomerIDCombobox Behavior frame, with Inheritance read by accessibility). The Inheritance rows lie below the screenshot frame and are recorded from the accessibility tree.

**Deviation / note:** the FX_ItemCombobox Inheritance rows were read by accessibility only (the frame `t6-13` does not show them). No component property was changed; the component Right-Click Menu was **not** touched.

### Designer state at the end of T6

- FX_Orders open in the Designer tab, `ScopeType: User`, **Save `[disabled]`, Undo `[disabled]`, Regenerate Form `[disabled]`**, Components tab selected, no dialog open (final find). Clean.
- Runtime (tab 1): not selected, not touched in T6.
- Dialogs open at the end of T6: **none**. Browser-native dialogs: **none**.

### Browser action audit (T6, exact; 55 calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, `t6-00` | FX_Orders; Save and Undo disabled; User |
| 4 | `browser_find` regex (alertdialog/Save/Undo/Regenerate/ScopeType) | Clean; no dialog |
| 5 | `browser_take_screenshot` `t6-01` | Pre-close clean state |
| 6 | `browser_click` `e247` (Form-tab close, **once**) | Tab closed; no prompt |
| 7 | `browser_take_screenshot` `t6-02` | Canvas empty; no dialog |
| 8 | `browser_find` regex (prompt/discard/unsaved/FX_Orders/ScopeType) | No prompt; no tab |
| 9 | `browser_find` regex (Form / Open / Recent / Select Form) | Form button `e3` |
| 10 | `browser_click` `e3` (Form menu) | Menu open |
| 11 | `browser_find` regex (menuitem/FX_Orders) | Recent-forms entry `FX_Orders` `e2204` |
| 12 | `browser_click` `e2204` (recent-forms FX_Orders, **once**) | FX_Orders reopened |
| 13 | `browser_find` regex (dialog/Save/Undo/ScopeType/tab) | Clean; User; no dialog |
| 14 | `browser_take_screenshot` `t6-03` | Reopened state |
| 15 | `browser_find` regex `button "Edit"` | Edit `e5` |
| 16 | `browser_click` `e5` (Edit menu) | Menu open |
| 17 | `browser_find` "Property Class Extension" | Menu item `e2584` |
| 18 | `browser_click` `e2584` (Property Class Extension, **once**) | Global Objects opened |
| 19 | `browser_find` regex `dialog "Global Objects"` | Dialog `e2611` |
| 20 | `browser_snapshot` target `e2611` saved `t6-04` | List: FX_CustomerID, FX_Item, FX_UM |
| 21 | `browser_click` `e2829` (FX_Item name cell, selection only) | FX_Item selected |
| 22 | `browser_snapshot` target `e2611` saved `t6-05` | FX_Item eight-field readback (accessibility) |
| 23 | `browser_take_screenshot` `t6-06` | Name FX_Item; Version; Add/Details FX_Items |
| 24 | `browser_mouse_move_xy` (1150,520) | Pointer over Properties (view) |
| 25 | `browser_mouse_wheel` (0,200) | Properties scrolled (view) |
| 26 | `browser_take_screenshot` `t6-07` | FX_Item Add/Details, Find, Property, Right-Click in one frame |
| 27 | `browser_click` `e2824` (FX_CustomerID name cell, selection only) | FX_CustomerID selected |
| 28 | `browser_snapshot` target `e2611` saved `t6-08` | FX_CustomerID eight-field readback (accessibility) |
| 29 | `browser_take_screenshot` `t6-09` | Name FX_CustomerID; Version; Add/Details FX_HelloWorld01 |
| 30 | `browser_mouse_move_xy` (1150,540) | Pointer over Properties (view) |
| 31 | `browser_mouse_wheel` (0,200) | Properties scrolled (view) |
| 32 | `browser_take_screenshot` `t6-10` | FX_CustomerID Add/Details, Find, Property and Right-Click all in one frame (corrected in T7; the filename says "three-fields" but the frame shows four) |
| 33 | `browser_find` regex `button "Cancel"` | Cancel `e2916` |
| 34 | `browser_click` `e2916` (Global Objects Cancel, **once**) | Dialog closed; no alert |
| 35 | `browser_find` regex (alertdialog/dialog/Save/Undo/Regenerate/ScopeType) | Clean; no dialog |
| 36 | `browser_click` `e2438` (Details Expand Panel; view) | Details expanded |
| 37 | `browser_find` "Components" tab | Tab `e3639` |
| 38 | `browser_click` `e3639` (Components tab; view) | Components tab |
| 39 | `browser_find` "FX_ItemCombobox" | No match (Pane (01) collapsed) |
| 40 | `browser_take_screenshot` `t6-11` | Pane (00)/(01) collapsed |
| 41 | `browser_find` "Pane (01)" | Tree row `e3800` |
| 42 | `browser_click` `e3800` (Pane (01) row; **selected, not expanded**) | Row selected |
| 43 | `browser_find` regex (FX_ItemCombobox / FX_CustomerIDCombobox ComboBox) | Not yet visible |
| 44 | `browser_take_screenshot` `t6-12` | Pane (01) selected, collapsed |
| 45 | `browser_mouse_click_xy` (273,763) (Pane (01) chevron; view) | Pane expanded (corrected attempt) |
| 46 | `browser_find` regex (ComboBox rows) | Both combobox rows `e4052` (FX_ItemCombobox) and `e3902` (FX_CustomerIDCombobox) |
| 47 | `browser_click` `e4052` (FX_ItemCombobox, selection only) | FX_ItemCombobox selected |
| 48 | `browser_find` regex (Inheritance and Behavior labels) | Binding `object.FX_Item`; Inheritance `FX_Item`; Right-Click `StdDefault`; Add/Details and Find blank |
| 49 | `browser_find` "Property" | Property blank |
| 50 | `browser_take_screenshot` `t6-13` | FX_ItemCombobox Behavior frame |
| 51 | `browser_find` "FX_CustomerIDCombobox" | Row `e3902` |
| 52 | `browser_click` `e3902` (FX_CustomerIDCombobox, selection only) | FX_CustomerIDCombobox selected |
| 53 | `browser_find` regex (Inheritance/Behavior labels) | Binding `object.FX_CustomerID`; Inheritance `FX_CustomerID`; Right-Click `StdDefault` |
| 54 | `browser_take_screenshot` `t6-14` | FX_CustomerIDCombobox Behavior frame |
| 55 | `browser_find` regex (final state: Save/Undo/Regenerate/ScopeType/tab) | Clean; User; no dialog |

**T6 counts (exact):** browser calls **55**. Tab lists **1**; tab selects **1** (succeeded). Snapshots **4** (1 untargeted `t6-00`; 3 targeted to the dialog: `t6-04`, `t6-05`, `t6-08`). Finds **20** (read-only). Screenshots **11** (`t6-01`, `t6-02`, `t6-03`, `t6-06`, `t6-07`, `t6-09`, `t6-10`, `t6-11`, `t6-12`, `t6-13`, `t6-14`; all succeeded). Element clicks by ref **13** (`e247` close; `e3` Form menu; `e2204` recent-forms; `e5` Edit; `e2584` Property Class Extension; `e2829` FX_Item cell; `e2824` FX_CustomerID cell; `e2916` Cancel; `e2438` Details expand; `e3639` Components tab; `e3800` Pane (01) row; `e4052` FX_ItemCombobox; `e3902` FX_CustomerIDCombobox). Coordinate clicks **1** (Pane (01) chevron, view). Mouse moves **2** (view). Mouse wheel **2** (view). Typed text **0**. Key presses **0**. Waits **0**. Ellipsis clicks **0**. OK clicks **0**. Save clicks **0**. Regenerate Form clicks **0**. Delete (trash) clicks **0**. Errors or timeouts **0**. Ref-not-found errors **0**. Fresh-snapshot recovery used **0**. Parallel browser mutations **0**. Runtime actions **0**. Checkout actions **0**.

**Browser-level note:** the Pane (01) row click selected the row without expanding it (as with earlier group rows); one chevron click (view) then expanded it. This is the one corrected attempt in T6; no fresh untargeted snapshot was needed.

### Close, reopen and Save counts (T6)

- Form-tab close **1** (no prompt). Form-menu recent-forms reopen **1** (no Select Form dialog). Designer close / reopen **T6: 1 / 1**.
- Designer Saves in T6: **0**. Designer Saves cumulative: **1 of 1 (consumed in T5; not invoked again)**.
- Global Objects opened **1**; Cancel **1**; extension OKs **0**; ellipsis clicks **0**; creation prompts **0**; extension field changes **0**.
- Component or property changes **0** (the Details, Components and Pane expansions and the component row selections are view state).
- Designer unloads **0**. Web Client unloads **0**. FormSync, deployment, regeneration **0**.
- Checkout, check-in, undo-checkout **0**. Re-logins **0**. Session-expiry procedure **not invoked**.

### Cumulative browser and mutation audit (T1–T6)

| Item | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 53 | 60 | 48 | 31 | 10 | 55 | **257** |
| Screenshots | 13 | 13 | 9 | 8 | 2 | 11 | **56** |
| Extensions created | 0 | 1 (FX_Item) | 1 (FX_CustomerID) | 0 | 0 | 0 | **2** |
| Creation prompts answered Yes | 0 | 1 | 1 | 0 | 0 | 0 | **2** |
| Extension ellipsis clicks | 0 | 1 | 1 | 0 | 0 | 0 | **2** |
| Extension dialog OK clicks | 0 | 1 | 1 | 0 | 0 | 0 | **2** |
| Extension field commits (Tab) | 0 | 4 | 4 | 0 | 0 | 0 | **8** |
| Contingency corrections | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Global Objects opened / Cancel | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | 1 / 1 | **3 / 3** |
| Designer Save | 0 | 0 | 0 | 0 | 1 | 0 | **1** (limit 1; **consumed; not repeated**) |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** (limit 1 each; **complete**) |
| Component changes | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T6)

- `experiments/EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md` (updated: T6 status line and this T6 section).
- `evidence/EXP-085/t6-00-designer-fresh-snapshot-pre-close.yml`
- `evidence/EXP-085/t6-04-global-objects-after-reopen-snapshot.yml`
- `evidence/EXP-085/t6-05-FX_Item-selected-after-reopen-snapshot.yml`
- `evidence/EXP-085/t6-08-FX_CustomerID-selected-after-reopen-snapshot.yml`
- `evidence/EXP-085/t6-01-pre-close-state.png`
- `evidence/EXP-085/t6-02-after-form-close-state.png`
- `evidence/EXP-085/t6-03-reopened-fx-orders-state.png`
- `evidence/EXP-085/t6-06-FX_Item-top-name-version-after-reopen.png`
- `evidence/EXP-085/t6-07-FX_Item-four-fields-after-reopen.png`
- `evidence/EXP-085/t6-09-FX_CustomerID-four-fields-after-reopen.png`
- `evidence/EXP-085/t6-10-FX_CustomerID-scrolled-three-fields-after-reopen.png`
- `evidence/EXP-085/t6-11-components-grid-after-details-expand.png`
- `evidence/EXP-085/t6-12-pane01-after-click.png`
- `evidence/EXP-085/t6-13-FX_ItemCombobox-after-reopen-properties.png`
- `evidence/EXP-085/t6-14-FX_CustomerIDCombobox-after-reopen-properties.png`

T6 worker-written: 1 record update, 4 snapshot files, 11 screenshots. Cumulative evidence (T1–T6): 56 PNG and 20 YAML = **76 evidence files**, plus the record. The browser tool's logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Screenshot evidence (T6; what each shows and does not prove)

- `t6-01-pre-close-state.png`: FX_Orders, the clean toolbar (Save and Undo greyed), footer `ScopeType: User`, FX_CustomerIDCombobox selected (view). **Proves** the pre-close clean identity and scope. **Does not prove** the stored values.
- `t6-02-after-form-close-state.png`: the Designer canvas after the close; no FX_Orders tab; no prompt. **Proves** the close completed without a discard prompt. **Does not prove** the stored state.
- `t6-03-reopened-fx-orders-state.png`: FX_Orders reopened; Form-level Properties (Name `FX_Orders`, User version); Save and Undo greyed; footer `ScopeType: User`; no dialog. **Proves** reopened identity, scope and the clean toolbar. **Does not prove** the extension values (readback in `t6-06`–`t6-10`).
- `t6-06-FX_Item-top-name-version-after-reopen.png`: Global Objects with FX_Item selected; Name `FX_Item`; Version `User version for us…`; Add/Details Form `FX_Items`; FX_UM in the list. **Proves** Name, Version and Add/Details for FX_Item, and FX_UM presence. **Does not prove** Find, Property or Right-Click in this frame (see `t6-07`).
- `t6-07-FX_Item-four-fields-after-reopen.png`: FX_Item Add/Details Form `FX_Items`, Find Form `FX_Items`, Property `FX_Item`, Right-Click Menu `StdDetailsAddFind`. **Proves** these four values in one frame. **Does not prove** Name and Version in this frame (read in `t6-05`).
- `t6-09-FX_CustomerID-four-fields-after-reopen.png`: FX_CustomerID Name `FX_CustomerID`; Version `User version …`; Add/Details Form `FX_HelloWorld01`. **Proves** these three values. **Does not prove** Find, Property or Right-Click (see `t6-10`).
- `t6-10-FX_CustomerID-scrolled-three-fields-after-reopen.png`: FX_CustomerID Add/Details `FX_HelloWorld01`, Find `FX_HelloWorld01`, Property `FX_Code`, Right-Click `StdDetailsAddFind`; FX_UM row visible in the list. **Proves** the four values in one frame and FX_UM's presence. **Does not prove** Name and Version in this frame (read in `t6-08`).
- `t6-11-components-grid-after-details-expand.png`: Details expanded; Components tab; Pane (00) and (01) collapsed. **Proves** the Components grid state before the pane expansion. **Does not prove** the combobox values.
- `t6-12-pane01-after-click.png`: the Pane (01) row selected, not expanded (the first click). **Proves** the row selection state. **Does not prove** the combobox rows.
- `t6-13-FX_ItemCombobox-after-reopen-properties.png`: FX_ItemCombobox; Binding `object.FX_Item`; Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault`; Save and Undo greyed; footer `ScopeType: User`. **Proves** the Behavior values in the frame. **Does not prove** the Inheritance rows (below the frame; read by accessibility).
- `t6-14-FX_CustomerIDCombobox-after-reopen-properties.png`: FX_CustomerIDCombobox; Binding `object.FX_CustomerID`; Add/Details, Find and Property blank; Right-Click Menu `StdDefault`. **Proves** the Behavior values in the frame. **Does not prove** the Inheritance rows (read by accessibility: `FX_CustomerID`).

### Acceptance (T6)

| AC | T6 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1; re-confirmed for T6 (Designer clean, User scope before close; FX_UM listed; both combobox classes and Behavior values read). | `t6-01`, `t6-08`, `t6-13`, `t6-14` | — |
| AC-2 | Carried from T2; the FX_Item readback after reopen matches (four fields and Name/Version). | `t6-05`, `t6-06`, `t6-07` | Same-session readback; not storage proof. |
| AC-3 | Carried from T3; the FX_CustomerID readback after reopen matches. | `t6-08`, `t6-09`, `t6-10` | Same-session readback; not storage proof. |
| AC-4 | **Save part complete (one Save in T5; not repeated).** Readback of all eight values after the Save and the reopen matches. | T5 `t5-01`, `t5-02`; T6 `t6-05`–`t6-10` | The response was a UI toast; persistence is not claimed. |
| AC-5 | **Supported at the observed UI level (one run).** Clean close (no prompt) and one reopen via the recent-forms entry; reopened readback shows all eight values; both comboboxes' component Behavior values unchanged from preflight; FX_UM present and not edited. | `t6-02`, `t6-03`, `t6-07`, `t6-10`, `t6-13`, `t6-14` | FX_UM field-by-field equality not established (presence and no-edit only). Same session. |
| AC-6 | **Final report data complete for the run** (this section, the cumulative audit, the inventory and the final state). | Audit tables above | Findings are observed only. |

### Knowledge state (T6)

| Finding | State |
| --- | --- |
| Closing FX_Orders from its Form tab on a clean Form raised no discard prompt | **observed** (one run, T6; `t6-02`) |
| The Form menu recent-forms entry `FX_Orders` reopens the Form clean in User scope, with no dialog | **observed** (one run, T6; `t6-03`) |
| After the close and reopen, FX_Item reads Name `FX_Item`, User version, `FX_Items`, `FX_Items`, `FX_Item`, `StdDetailsAddFind` | **observed** (one run, T6; `t6-05`–`t6-07`) |
| After the close and reopen, FX_CustomerID reads Name `FX_CustomerID`, User version, `FX_HelloWorld01`, `FX_HelloWorld01`, `FX_Code`, `StdDetailsAddFind` | **observed** (one run, T6; `t6-08`–`t6-10`) |
| FX_UM remains in the extension list and was not selected or edited in T6 | **observed** (one run, T6; `t6-04`, `t6-07`, `t6-10`) |
| FX_UM field-by-field equality with any earlier state | **unresolved** (not read in T6; not claimed) |
| Component Behavior of FX_ItemCombobox and FX_CustomerIDCombobox after reopen equals the T1 preflight (bindings, Inheritance, blank Add/Details, Find and Property, Right-Click `StdDefault`) | **observed** (one run, T6; `t6-13`, `t6-14` and accessibility) |
| Whether the extension values are stored on the server or in the database | **unresolved** (same-session readback only; not claimed) |
| Whether the Right-Click Menu of the extensions persists independently of the client session (the EXP-069-R2 loss pattern) | **unresolved** (the reopen was in the same browser session) |
| Whether the component-level Right-Click Menu inherits the extension (runtime) | **unresolved** (runtime is Section 5 step 8, EXP-086; not run) |

### Open questions and next permitted action

1. **Final state: FX_Orders open, clean (Save and Undo disabled), `ScopeType: User`, no dialog.** The one-Save budget is consumed; no further Save is permitted in this experiment's scope.
2. **Evidence limitations:** all readbacks are same-session UI readbacks. No database durability, no independent-session persistence, no runtime behaviour and no replay verification is claimed. FX_UM is checked for presence and absence of editing only.
3. **Next steps (outside T6; need the coordinator's direction):** Section 5 step 8 (EXP-086) for component-level right-click menus and the runtime drill-down test are out of scope for EXP-085 and are **not** started. Any correction decision belongs to the coordinator; none was needed in T6 (all values matched).
4. No blocker.
5. Classification for all T6 findings: **observed only, NOT replay_verified; no database durability, runtime behaviour or replay verification claimed.**

---

## T7 — Documentation-only final acceptance audit (cycle 6): zero browser calls; zero Mongoose changes

Task T7 (bounded instruction: no browser calls; review this record, the T1–T6 evidence, the saved screenshots and snapshots, and the harness audit files; write `evidence/EXP-085/T7-final-acceptance-report.md`; update only this record; reconcile counts and inventories; give a recommendation). Run `R-20261014-133538-PdTc`, cycle 6, task_message_id `8884edc5-2078-4f49-9b2e-802cc546a221`, worker session `a11950eb-dcb4-409d-8d31-8c71e3eeead3`. Date 2026-10-14.

### What T7 checked

- **Browser calls in T7: 0.** Local reads only: Glob of `evidence/EXP-085/`; Read of two saved screenshots (`t6-10`, `t6-09`); Grep of the six harness audit files and of the T6 snapshot files for the cited lines.
- **Harness audit counts (Grep):** browser calls per task T1 53, T2 60, T3 48, T4 31, T5 10, T6 55 (total 257); screenshot calls 13, 13, 9, 8, 2, 11 (total 56). The mutating calls in the harness logs match the worker counts (see the report §5.2).
- **Inventory (Glob):** 56 PNG and 20 YAML in `evidence/EXP-085/`, matching the worker counts; 6 harness audit files (harness-written, excluded); this T7 report (worker-written).

### T6 FX_CustomerID four-field reconciliation (image inspected)

- `t6-10-FX_CustomerID-scrolled-three-fields-after-reopen.png` **shows all four** values (Add/Details `FX_HelloWorld01`, Find `FX_HelloWorld01`, Property `FX_Code`, Right-Click `StdDetailsAddFind`). Its filename is misleading.
- `t6-09-FX_CustomerID-four-fields-after-reopen.png` **shows Name, Version and Add/Details** (Find cut off). Its filename is also misleading.
- The accessibility snapshot `t6-08-…yml` contains all six FX_CustomerID lines in one file (Name, Version, Add/Details, Find, Property, Right-Click).
- Corrections made in this record: audit row 32 (now states all four in `t6-10`) and the T6 comparison table title (now twelve observations: four per extension plus Name and Version). Filenames were not renamed.

### Before and after close/reopen

- All eight extension fields (and Name and Version) match between the pre-Save readback (T4) and the post-reopen readback (T6). The Save occurred between them. No readback was taken between Save and close.
- Component Behavior and binding: T1 (before creation) and T6 (after reopen) match for both comboboxes. The T6 Inheritance and Binding values were read through find output and are not saved as files; T1 has image evidence.

### FX_UM

- Present in every list reading (T1 gate-03 positive-control image; T4 and T6 accessibility). Not selected or edited by the worker in any task. **No FX_UM field was read in any task, so field-level equality is not established.** The record must not say "FX_UM unchanged" without that qualifier.

### Native Save acknowledgement (verbatim, T5)

`Save` / `Global object(s) were saved.` (toast with a Close control; no error; no prompt; cleared within about four seconds). Note: EXP-084's toast named the Form; this one does not.

### Acceptance (T7 summary; detail in the report)

| AC | Recommendation |
| --- | --- |
| AC-1 | Pass, with two disclosed gaps (FX_Orders not re-opened in T1; list absence checked in rendered slices, corroborated by the creation prompts). |
| AC-2 | Pass. |
| AC-3 | Pass. |
| AC-4 | Pass (note: the first readback after the Save is the post-reopen readback in T6). |
| AC-5 | Partial: items 1–4 pass; "FX_UM unchanged" supported only as presence and no worker edit. |
| AC-6 | Pass, subject to the AC-5 FX_UM condition. |

### Inventory

- Worker-written in `evidence/EXP-085/`: 56 PNG, 20 YAML, and `T7-final-acceptance-report.md`. Worker-written repository total: **78** (with the record). Harness audit files (6) and browser-tool logs under `evidence/playwright/` are excluded.

### Final FX_Orders Designer state (last observed in T6; not re-observed in T7)

Designer tab 0, FX_Orders, `ScopeType: User`, Save disabled, Undo disabled, Regenerate Form disabled, no dialog open.

### Recommendation for coordinator review

**ACCEPTED AS OBSERVED**, with the FX_UM field-level equality condition stated. If the operator requires that equality, the status would be **pending** (not BLOCKED): no attempted step failed; one check was not performed.

### Knowledge state (T7)

| Finding | State |
| --- | --- |
| Both extensions created with the exact prompts, four committed values and one OK each | **observed** |
| Single native Save acknowledgement `Save` / `Global object(s) were saved.` | **observed** |
| Eight values match pre-Save and post-reopen | **observed** (same session) |
| Component Behavior and binding unchanged T1 → T6 | **observed** |
| FX_UM present and not edited by the worker; field equality | present/not-edited **observed**; field equality **unresolved** |
| Server or database persistence; runtime drill-down; replay | **unresolved / not claimed** |

### Documentation changes in T7

- This record: T7 status line (top), audit row 32 correction, comparison-table retitle, this T7 section.
- `evidence/EXP-085/T7-final-acceptance-report.md` (new).

### Worker-written file inventory (T7)

- `evidence/EXP-085/T7-final-acceptance-report.md` (created in T7).
- `experiments/EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md` (updated in T7).

No screenshots or snapshots were written in T7.

### Browser action audit (T7, exact)

Browser calls **0**; Mongoose mutations **0**; extensions created **0**; creation prompts **0**; extension ellipsis clicks **0**; extension OKs **0**; Tab commits **0**; contingency corrections **0**; Global Objects opens **0**; Designer Saves **0**; Form close/reopen **0**; component mutations **0**; runtime actions **0**; checkout actions **0**; re-logins **0**.

### Cumulative audit (T1–T7)

Browser calls **257**; screenshots **56**; extensions created **2**; creation prompts answered Yes **2**; extension ellipsis clicks **2**; extension OKs **2**; Tab commits **8**; contingency corrections **0**; Global Objects opened and cancelled **3 / 3**; Designer Saves **1 of 1**; Form close / reopen **1 / 1**; component mutations **0**; runtime actions **0**; checkout actions **0**; re-logins **0**.

### Open items for the coordinator (not started)

1. Optional read-only FX_UM field readback, if the operator wants AC-5 "FX_UM unchanged" at field level (a separate bounded task).
2. Section 5 step 8 (EXP-086): not started.

Classification for all T7 findings: **observed only; no database durability, server persistence, runtime drill-down behaviour or replay verification claimed.**

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 4 is complete. The operator decided acceptance.

- Run R-20261014-133538-PdTc completed as accepted after 7 worker tasks.
- The operator approved two pauses:
  1. The T1 Grep denial. It was on the worker's own tool-result file outside the repo; it was harmless and not worked around.
  2. The scope flag on the coordinator's T7 line "Do not start EXP-086".
- Created, for later cleanup (User version, through the combobox Inheritance > Edit Property Class Extension ellipsis, one Yes each to "Property Class Extension <class> does not exist. Create it?"):

  | Property Class Extension | Created through | Add/Details Form | Find Form | Property | Right-Click Menu |
  |---|---|---|---|---|---|
  | `FX_Item` | FX_ItemCombobox | `FX_Items` | `FX_Items` | `FX_Item` | `StdDetailsAddFind` |
  | `FX_CustomerID` | FX_CustomerIDCombobox | `FX_HelloWorld01` | `FX_HelloWorld01` | `FX_Code` | `StdDetailsAddFind` |

  One Designer Save: "Global object(s) were saved."
- Screenshots viewed by the operator assistant:
  - `gate-03`: the alphabetical Global Objects list runs FldName → FX_UM → G6RUM, so neither extension existed before.
  - `gate-04`: FX_ItemCombobox component Behavior has Add/Details Form, Find Form and Property blank, and Right-Click Menu `StdDefault`.
  - `t3-12`: the FX_CustomerID dialog before OK shows FX_HelloWorld01, FX_HelloWorld01, FX_Code and StdDetailsAddFind as committed text.
  - `t6-07`: after the Designer close/reopen, the list shows FldName, FX_CustomerID, FX_Item, FX_UM. FX_Item shows FX_Items, FX_Items, FX_Item and StdDetailsAddFind.
  - `t6-10`: after the reopen, all four FX_CustomerID values.
  - `t6-09`: FX_CustomerID Name and "User version for user …".
  - The `t6-09` and `t6-10` filenames are swapped relative to their content. T7 reconciled this, and the filenames are not to be relied on.
- Accepted gaps:
  1. FX_UM is still listed and was not edited, but its field values were not re-read.
  2. T1 found FX_Orders already open and did not reopen it through recent forms. T6 used that route.
  3. The extension list was checked by its rendered slices. The alphabetical position and the "does not exist" prompts corroborate the absence.
- Flagged `browser_type` calls:
  - the Property field in each dialog (FX_Item, FX_Code), whose lists were empty, as the brief allows;
  - one view-only typed filter in the extension list (T1), not applied.
- Counts:
  - extensions created 2, Yes answers 2, extension OKs 2, Tab commits 8, contingency corrections 0;
  - Global Objects opened/cancelled 3/3;
  - Designer Save 1, Designer close/reopen 1;
  - component changes 0, runtime actions 0, checkout actions 0, unloads 0, re-logins 0.
- Findings (observed):
  1. **Creating an extension through the inline editor works when every field is committed with Tab before OK.** This includes the Right-Click Menu, which EXP-069-R2 lost without Tab.
  2. **The Property list is empty in a new extension dialog,** so the name is typed and then committed with Tab.
  3. **Extensions created in the inline editor appear at once in Edit > Property Class Extension** (Global Objects) and survive the Save and the Designer close/reopen.
  4. **The comboboxes keep their component-level `StdDefault` Right-Click Menu.** Per EXP-069-R2 this overrides the extension at runtime until it is cleared.
- Limits: same-session Designer UI evidence only. No runtime drill-down yet.
- Confinement (git status): only `evidence/EXP-085/` and this record were written by the run.
- Next: EXP-086 (Part 5 section 5 step 8). Clear the component-level Right-Click Menu of both comboboxes, save, then check the runtime menus and one Details drill-down each.
