# EXP-054-R2 — T1 read-only preflight, component baseline, and Diagnostics 32-option baseline

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 0, task T1.
Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `d47437af-0feb-41ac-b1f1-7fb1c7835cf7`.
Date 2026-10-11. Mode: LEARNING MODE. Editing scope: User. Target Form `FX_Items` (User version).

**T1 was strictly read-only.** No FX_RefreshButton was placed; no component property was edited; no Designer Save; no Designer close or reopen; no FX_Items runtime close or open; no Diagnostic Log clear; no Diagnostics option changed and no OK pressed; no record changed; no runtime action.
Only view-state actions were taken: Properties tab switches, component row selections, the Components-grid and Properties expand-all view controls, menu navigation, dialog tab navigation, and one Close Window (dialog discarded without applying anything).

Classification: **observed only** (single session, rendered UI and accessibility evidence). No replay, persistence, or causal claim.

---

## Part A — Preflight (AC-1)

### A1. Identities, tabs, and authentication

| Item | Observed (visible) | Evidence |
| --- | --- | --- |
| Tab list (first browser action of the task) | 0 = Designer, `MGForm=FX_Items` (current); 1 = portal `Mongoose`, `favoriteContext=FX_Items` | tabs list result (inline) |
| Tab selects in T1 | `select 1` (Web Client) and `select 0` (Designer, restored at end). Both succeeded on first attempt after the list. No `Tab N not found`. | inline results |
| Designer identity | Title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`; heading `FX_Items`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t1-01`, `t1-02`, `t1-12`; snapshot `evidence/playwright/page-2026-10-11T06-42-02-501Z.yml` |
| Web Client identity | Identity button `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; DEM badge | `t1-06`, `t1-11` |
| Authentication challenge | None. No sign-in or configuration screen. No credential was read, typed, or displayed. | all screenshots |
| Portal notification banner | None visible on either tab; no dismissal needed | snapshot of tab 1 (inline) |
| Browser-native dialog or unsaved prompt | None on either tab | snapshots |

### A2. Designer FX_Items Form state (tab 0)

| Check | Observed |
| --- | --- |
| Save / Regenerate / Undo / Redo | Save disabled; Regenerate disabled; Undo and Redo disabled. **Clean.** (`t1-01`; find result at end of T1: `Save [disabled]`) |
| Form tab (Properties > Form) | Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph` (truncated on screen as `User version for us...`; full text from accessibility); Device Type `Default`; Form Type `Normal`; Is Master `True`; Caption blank |
| **Initial Command** | **`Refresh`** (accessibility `gridcell "Refresh"`; screenshot `t1-02` shows `Initial Command  Refresh`) |
| Other Form properties (accessibility) | Script Language `Visual Basic`; Close Box `True`; Minimize/Maximize Box `True`; Filter Form blank; Enable Advanced Filter `False`; Help Context ID `-1`; Splitter `Vertical`; Splitter Position `11`; Pane 0 Scroll Bars `Never` |
| Dialogs | None |

Evidence: `evidence/EXP-054-R2/t1-01-designer-preflight-FX_Items-clean-before-any-click.png` (Designer, Save greyed, User scope bar, Components grid with 13 rows and two pane roots, Properties on Component tab showing `FX_UMGridCol`). `evidence/EXP-054-R2/t1-02-designer-form-tab-properties-Initial-Command-Refresh-readonly.png` (Form tab: Name `FX_Items`, Version `User version for us...`, Initial Command `Refresh`, Save greyed, User scope bar).

### A3. Web Client runtime state (tab 1)

| Check | Observed |
| --- | --- |
| Runtime tab | `FX_Items` tab selected; close control `Close Panel FX_Items`. Inherited from EXP-053/EXP-054; **not closed** in T1. |
| Records (accessibility) | 3 rows: `dumbbell / 45 pound iron / 45.00 / EA` (row 1, current), `eggs / cage free / 6.99 / DZ` (row 2), `guitar / natural acoustic / 129.99 / EA` (row 3) |
| Visible fields | Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA` |
| Save / Get More Rows | Save **disabled**; Get More Rows disabled |
| Record-count label | Not visible in the viewport frame; not read |
| DevTools | Panel open, Log Messages tab selected, **not cleared** (see Part C4) |

Evidence: `evidence/EXP-054-R2/t1-06-webclient-runtime-FX_Items-preflight-before-preferences.png` (three rows, first-record values, Save greyed, identity bar, DevTools Log Messages showing the inherited FormEvent rows).

### A4. Gate result (AC-1)

Authenticated DEM Web Client; User-scoped FX_Items Designer with Initial Command `Refresh`; clean Designer (Save disabled); clean runtime (Save disabled, no prompt); no authentication challenge. **AC-1 preflight gate passed.**

### A5. Procedure review (before any browser mutation; none occurred)

Read: `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt3.md` section 4 (lines 168–183) and section 5 (lines 185–195; 04:23–05:00); `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (accepted with limits; baseline, T4 sequence, T5 restoration, operator outcome); `experiments/EXP-054-hello-world-part-3-section-5-fx-items-native-refre.md` (blocked; operator outcome: tab-select rule); `recipes/components/add-component-from-toolbox.md` (verified: Toolbox row arms the drop, canvas click places; `PushButton` grid Type label; `newcomp` typeCode 8; default Button size 114×34); `recipes/components/configure-basic-component.md` (verified: Name/Caption via `updcompprop`; commit with Enter; Save via toolbar; use a literal caption, not the resource picker); `experiments/EXP-036-R2-clean-replay-single-button-caption-recovery.md` (lessons: Caption left-text double-click opens the editable combobox; the dropdown arrow opens the string-resource list; Enter commits; `PushButton` grid Type; checkbox input clicks intercepted by display span, label click works); `experiments/EXP-027-R2-clean-replay-button-component-recovery-in-a-self-contained-desi.md` (lessons: one canvas click after the Toolbox Button arm creates exactly one Button; Name edit; `PushButton` Type; checkbox display-span interception; reopened Button is not auto-selected).

Carried-forward lessons for the later Button task (not executed in T1):
- Arm the Toolbox `Button` row, then one canvas click in the free area; do not click the canvas without arming.
- Set Name via the Properties Name row; set Caption to a literal `FX_Refresh` (left text area, not the dropdown arrow); commit with Enter.
- Events > Primary has a picker control at the right of the value cell (see Part B5). The picker and Primary value were **not** opened in T1.

---

## Part B — Pre-change Designer component inventory (AC-2)

### B1. Components grid (Details > Components, expanded; view only)

Columns: Name | Type | Data Source | Pane | Container | Tab | Event to generate. The `Event to generate` column is blank for all rows.

| Tab | Name | Type (grid) | Data Source (grid) | Pane | Container | Caption (Properties) |
| --- | --- | --- | --- | --- | --- | --- |
| root | Pane (00) | (container) | | | | |
| 0 | FormCollectionGrid | Grid | objects | 0 | | (blank) |
| 1 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | `FX_sItem` |
| 2 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | `FX_sDescription` |
| 3 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | `FX_sCost` |
| 4 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | `FX_sUM` |
| root | Pane (01) | (container) | | | | |
| 5 | FX_ItemStatic | Static | (blank) | 1 | | `FX_sItem` |
| 6 | FX_ItemEdit | Edit | object.FX_Item | 1 | | `C(FX_ItemStatic)` |
| 7 | FX_DescriptionStatic | Static | (blank) | 1 | | `FX_sDescription` |
| 8 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | | `C(FX_DescriptionStatic)` |
| 9 | FX_CostStatic | Static | (blank) | 1 | | `FX_sCost` |
| 10 | FX_CostEdit | Edit | object.FX_Cost | 1 | | `C(FX_CostStatic)` |
| 11 | FX_UMStatic | Static | (blank) | 1 | | `FX_sUM` |
| 12 | FX_UMCombobox | ComboBox | object.FX_UM | 1 | | `C(FX_UMStatic)` |

Total: **13 component rows** plus **2 container roots** (Pane (00), Pane (01)). Tabs 0–12 are contiguous.

Type labels per the Properties `Type` row: GridColumn ×4; Grid ×1; Static ×4; Edit ×3; ComboBox ×1 (Properties header model class `EnhancedCombo`). Each row's Properties header read `<Name> (<Type>)` consistent with this table.

Ambiguities carried forward (not resolved in T1):
- `FormCollectionGrid` Data Source is `objects` in the grid but the Properties Data Source value was not re-read in this replay (EXP-054 T1 recorded it as blank).
- Edit and ComboBox Captions read `C(<paired Static>)`; their meaning is not established.
- `FX_sItem`-style values are string-resource identifiers as displayed; whether the stored value is a key or literal is not distinguishable from the display (EXP-036 limitation).

### B2. Events values (Properties > Component > Events group; view only)

The Events group does not expand on a single click of its row (the row only selects). It was expanded for the whole component by the Properties expand-all control (plus icon; tooltip `Expand`). After that, the group children were readable for each row below.

| Component | Primary | Data Change | Lose Focus | Gain Focus | Drag From Events | Drop On Events |
| --- | --- | --- | --- | --- | --- | --- |
| FX_ItemStatic | blank | blank | blank | blank | 0 event(s) | 0 event(s) |
| FX_ItemEdit | blank | blank | blank | blank | 0 event(s) | 0 event(s) |
| FX_DescriptionStatic | blank | blank | blank | blank | 0 event(s) | (not read) |
| FX_DescriptionEdit | blank | blank | blank | blank | (not read) | (not read) |
| FX_CostStatic | blank | blank | blank | blank | 0 event(s) | (not read) |
| FX_CostEdit | blank | blank | blank | blank | (not read) | (not read) |
| FX_UMStatic | blank | blank | blank | blank | 0 event(s) | (not read) |
| FX_UMCombobox | blank | blank | blank | (not read) | (not read) | (not read) |
| FormCollectionGrid | blank | blank | blank | blank | 0 event(s) | (not read) |
| FX_ItemGridCol | blank | blank | blank | blank | 0 event(s) | 0 event(s) |
| FX_DescriptionGridCol | blank | blank | blank | blank | (not read) | (not read) |
| FX_CostGridCol | blank | blank | blank | blank | (not read) | (not read) |
| FX_UMGridCol | blank | blank | blank | blank | (not read) | (not read) |

Reading: every Primary, Data Change, Lose Focus, and Gain Focus value that was read is blank (no Event assigned). "(not read)" means the accessibility node was not inspected in T1; it is not asserted as blank or non-blank. Drag From and Drop On were read only where marked with a count. The Primary row shows a picker button at the right of its value cell.

Note on `Event to generate` (Components grid column): blank for all 13 rows (observed in B1).

### B3. Duplicate and absence checks (AC-2)

- `FX_RefreshButton`: **absent.** The pre-change Components tree (`evidence/playwright/page-2026-10-11T06-42-02-501Z.yml`) contains the 13 rows above and no `RefreshButton`, `PushButton`, or Button-type row under the Form panes. A grep for `RefreshButton|PushButton|Button [` matches only the Toolbox item `treeitem "Button" [ref=e91]`.
- No duplicate Name exists among the 13 rows.
- Toolbox row `Button` present under Framework Components (`treeitem "Button"`).

### B4. Layout baseline and permitted placement area (no placement in T1)

Evidence: `evidence/EXP-054-R2/t1-05-designer-component-grid-and-layout-baseline-before-any-change.png` (Designer canvas with the four label/field pairs, the pane-0 grid header `Item`, the Form border, and the Components grid top showing Pane (00) with the four GridColumns and `FX_UMGridCol` selected; Save greyed). Layout reading from the screenshot (CSS px, viewport at this window size, approximate):
- Form canvas frame (red border): x ≈ 259–811, y ≈ 100–480.
- Pane (00) grid: x ≈ 259–345.
- Pane (01) labels x ≈ 380–543; Edit/ComboBox boxes x ≈ 548–810.
- Rows: Item y ≈ 118–155; Description y ≈ 158–195; Cost y ≈ 200–236; Unit of Measure y ≈ 241–280.
- **Free area inside the Form border, below Unit of Measure:** x ≈ 360–800, y ≈ 290–470. A default 114×34 Button with top-left near (400, 320) would occupy about (400–514, 320–354) and touch no existing component. This is **proposed only**; it is not verified by a placement and was not used in T1.

### B5. Supported Button configuration surface identified (no change made)

- Details > Components tab (grid with Name, Type, Pane, Tab, Event to generate, Component Class) — supports selecting a row and reading Name/Type.
- Properties panel (Component tab) header selector shows `<Name> (<Type>)`; Design group rows Name, Caption (with an inline combobox and a dropdown arrow for string resources and an `Open Edit Property Dialog` button at the far right); Type (display label); Events group with Primary, Data Change, Lose Focus, Gain Focus, Drag From Events, Drop On Events, each with a picker control.
- Properties expand-all control (plus icon at the top-right of the Properties toolbar; tooltip `Expand`) and collapse-all control (minus icon beside it).

None of these controls was used to change a value in T1.

---

## Part C — Diagnostics baseline, 32 options (AC-7 pre-change evidence)

Opened once via View > User Preferences... (Web Client tab). Category `Diagnostics` selected from the listbox. Read on all four tabs: General, Form, IDO Collections, Others. **No checkbox was clicked.** Dialog closed with its `Close Window` control; **no OK** pressed.

Visible values from screenshots; checked state from accessibility `[checked]` attribute.

### C1. Full 32-option table (pre-change)

| # | Tab | Group (visual heading) | Option | Original | Accessibility snapshot / ref |
| --- | --- | --- | --- | --- | --- |
| 1 | General | — | **Enabled** | **OFF** (unchecked) | `page-2026-10-11T06-44-35-718Z.yml`, ref f1e890 |
| 2 | General | — | System Information | OFF | same file, f1e895 |
| 3 | General | — | Security | OFF | same file, f1e900 |
| 4 | Form | top level | Initialization | OFF | `06-44-45-681Z.yml`, f1e921 |
| 5 | Form | top level | **Events** | **ON** (checked) | same, f1e926 |
| 6 | Form | Call Details | Scripts | OFF | same, f1e931 |
| 7 | Form | Call Details | IDO Methods | OFF | same, f1e936 |
| 8 | Form | Call Details | Form Server | OFF | same, f1e941 |
| 9 | Form | Component | Initialization | OFF | same, f1e946 |
| 10 | Form | Component | To/From Source | OFF | same, f1e951 |
| 11 | Form | Component | List Building | OFF | same, f1e956 |
| 12 | Form | Component | To/From Control | OFF | same, f1e961 |
| 13 | Form | Component | User Interaction | OFF | same, f1e966 |
| 14 | Form | Component | Dependent Notification | OFF | same, f1e971 |
| 15 | Form | Event Handler | **Include** | **ON** (checked) | same, f1e976 |
| 16 | Form | Validator | Include | OFF | same, f1e981 |
| 17 | Form | Variable | Initialization | OFF | same, f1e986 |
| 18 | Form | Variable | **Value Changed** | **ON** (checked) | same, f1e991 |
| 19 | Form | Variable | Dependent Notification | OFF | same, f1e996 |
| 20 | IDO Collections | — | Initialization | OFF | `06-44-53-350Z.yml`, f1e1002 |
| 21 | IDO Collections | — | Commands | OFF | same, f1e1007 |
| 22 | IDO Collections | — | Update Overview | OFF | same, f1e1012 |
| 23 | IDO Collections | — | Load Overview | OFF | same, f1e1017 |
| 24 | IDO Collections | — | Update Values | OFF | same, f1e1022 |
| 25 | IDO Collections | — | Load Values | OFF | same, f1e1027 |
| 26 | IDO Collections | — | Dependent Notification | OFF | same, f1e1032 |
| 27 | Others | Interpreter | Overview | OFF | `06-44-58-803Z.yml`, f1e1041 |
| 28 | Others | Interpreter | Scripts | OFF | same, f1e1046 |
| 29 | Others | Interpreter | Components | OFF | same, f1e1051 |
| 30 | Others | Interpreter | Variables | OFF | same, f1e1056 |
| 31 | Others | Interpreter | Properties | OFF | same, f1e1061 |
| 32 | Others | Interpreter | Others | OFF | same, f1e1066 |

Count check: General 3 + Form 16 + IDO Collections 7 + Others 6 = **32**. Checked = **3** (Form > Events; Form > Event Handler > Include; Form > Variable > Value Changed). General > Enabled OFF. This matches the expected baseline (Enabled OFF; Events ON; Event Handler Include ON; Value Changed ON; other 28 OFF) and the EXP-053 final restored state.

Form-group mapping note: the accessibility tree repeats names (`Initialization` ×3, `Dependent Notification` ×2, `Include` ×2). Group assignments above use the visual headings in `t1-08` and the accessibility order; the 16-box count and the three checked states agree with both sources.

### C2. Evidence (screenshots and accessibility)

| File | Shows | Does not show |
| --- | --- | --- |
| `evidence/EXP-054-R2/t1-07-diagnostics-baseline-General-tab-before-any-change.png` | General: Enabled, System Information, Security all unchecked; Diagnostics category selected; identity bar; DevTools behind | Other tabs |
| `evidence/EXP-054-R2/t1-08-diagnostics-baseline-Form-tab-before-any-change.png` | Form: group headings; Events ON; Event Handler Include ON; Value Changed ON; others OFF | IDO, Others |
| `evidence/EXP-054-R2/t1-09-diagnostics-baseline-IDO-Collections-tab-before-any-change.png` | IDO Collections: seven boxes, all unchecked | Others |
| `evidence/EXP-054-R2/t1-10-diagnostics-baseline-Others-tab-before-any-change.png` | Others (Interpreter): six boxes, all unchecked | Other tabs |
| Accessibility (tool-generated, gitignored): `evidence/playwright/page-2026-10-11T06-44-35-718Z.yml` (General), `06-44-45-681Z.yml` (Form), `06-44-53-350Z.yml` (IDO), `06-44-58-803Z.yml` (Others) | Checked attributes and refs | Visual grouping |

### C3. Close

`Close Window` (dialog X, ref f1e724) clicked once; no OK; no option clicked. Post-close state: no dialog; Web Client runtime FX_Items unchanged (three rows; Save disabled) (`t1-11`). Screenshot `t1-11` shows the runtime frame with the dialog gone and the `New` tooltip visible only as a hover tooltip; no New action was taken (three rows remain).

### C4. Diagnostic Log: inherited content (not EXP-054 evidence)

The Log Messages grid (DevTools panel, Web Client tab) was **not cleared** in T1. Counted by timestamp in the accessibility snapshot: **36 rows** before the preference dialog opened and **36 rows** after it closed (`06-44-22-870Z.yml` and `06-45-08-638Z.yml`), so the preference open and close added no rows while Enabled was OFF.

- **20 rows** `FormEvent (FX_Items): …` at `05:22:07.945` (9 rows) and `05:22:07.976` (11 rows). Names in order: StdFormPredisplay (start, result), StdFormInitCompleted (start, result), StdFormRefresh (start), StdFormGetBoundValues (start, result), StdObjectRefresh (start, result), StdObjectSelectCurrentCompleted (start, result), StdObjectRefreshCompleted (start, result), StdFormLoadBoundValues (start), StdFormLoadDerivedValues (start, result), StdFormLoadBoundValues (result), StdFormRefreshCompleted (start, result), StdFormRefresh (result). Each result row reads `num handlers for event 0, num executed 0, default handler ignored False`. These are the EXP-053 T4 rows.
- **16 rows** `VarValue (StdCurFormPage / StdLastFormPage): …` at `05:25:20.269`–`05:25:20.285`. These are the EXP-053 T5 preference-navigation rows.

**Attribution: none of the 36 rows belongs to EXP-054-R2.** They must not be counted as Button-activation evidence. The single authorized clear in the controlled step will remove them.

---

## Part D — Deviations, errors, and ambiguities

1. **No browser errors in T1.** No tab-not-found, no click timeout, no screenshot timeout, no ref-not-found. Recovery allowance: unused.
2. **Events group did not expand on a single row click** (the row selected, children did not appear). Recovered with the Properties expand-all control (view-only), as the EXP-037 notes describe. Expansion persisted across later component selections.
3. **Expand-all also expanded Appearance and Behavior groups** (view state only; no values changed).
4. **Events values of the Drag/Drop rows** were not read for every component (marked "(not read)" in B2).
5. **Screenshot `t1-05` is cropped to the Components grid top**; Pane (01) grid rows are not visible in that frame. The accessibility snapshot `06-43-*` files show them.
6. **Form Version display truncated** on screen (`User version for us...`); the full text is in the accessibility tree.
7. **Designer tab selection order:** a browser_tabs list was the first browser action of this task; the Web Client select and the Designer select afterward succeeded.
8. Unresolved carry-forwards: `FormCollectionGrid` Data Source (grid `objects` vs property blank); Edit/ComboBox `C(…)` captions; cause of the Form-tab click timeouts in EXP-054 T2 (not reproduced in T1).

---

## Part E — Counts (T1 browser calls, worker-reported)

| Type | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | first browser action of the task |
| Tab select | 2 | index 1 (Web Client) and index 0 (Designer, restored); both succeeded |
| Untargeted snapshots (`browser_snapshot`) | 3 | start (Designer); Web Client after the tab select; one saved to file (`t1-snapshot-FX_ItemStatic-selected-before-expand-all.md`) |
| Finds | 3 | "Caption"; "Events" (component Properties); "Save" (Designer, end of T1) |
| Clicks | 23 | Designer 16: Form tab 1; component-row selections 13 (8 Pane (01) controls, FormCollectionGrid, 4 GridColumns); Events row (selection only) 1; Properties expand-all (view) 1. Web Client 7: View 1; User Preferences... 1; Diagnostics category 1; Form, IDO Collections, Others dialog tabs 3; Close Window 1 |
| Screenshots | 12 saved | `t1-01` … `t1-12` (all viewed) |
| Mutations | 0 | no Button; no property edit; no Save; no preference change or OK; no log clear; no runtime open/close/action; no record change |
| Prompts or dialogs accepted | 0 | |
| Typing / key presses | 0 | |
| Browser evaluate / run-code | 0 | |
| Authentication actions | 0 | |

---

## Part F — Evidence files

Worker-authored, under `evidence/EXP-054-R2/`:
- `T1-preflight-component-and-diagnostics-baseline-report.md` (this report)
- `t1-01-designer-preflight-FX_Items-clean-before-any-click.png` — Designer clean (Save greyed), User scope bar, 13-row grid, Properties on Component tab. Does not show Form properties.
- `t1-02-designer-form-tab-properties-Initial-Command-Refresh-readonly.png` — Form tab: Initial Command `Refresh`, Name `FX_Items`, Version truncated, Save greyed. Does not show the full Version text.
- `t1-03-component-FX_ItemStatic-selected-Events-probe.png` — Static selected; Events row selected but collapsed.
- `t1-04-FX_ItemStatic-component-properties-after-expand-all.png` — expand-all applied; Events children below the visible fold.
- `t1-05-designer-component-grid-and-layout-baseline-before-any-change.png` — canvas layout (free area below Unit of Measure) and Components grid top; FX_UMGridCol selected; Save greyed.
- `t1-06-webclient-runtime-FX_Items-preflight-before-preferences.png` — runtime three rows, first record values, Save greyed, identity bar, DevTools Log Messages with inherited rows.
- `t1-07-diagnostics-baseline-General-tab-before-any-change.png` — General: Enabled, System Information, Security unchecked.
- `t1-08-diagnostics-baseline-Form-tab-before-any-change.png` — Form: Events, Include (Event Handler), Value Changed checked; others unchecked.
- `t1-09-diagnostics-baseline-IDO-Collections-tab-before-any-change.png` — IDO Collections: seven unchecked.
- `t1-10-diagnostics-baseline-Others-tab-before-any-change.png` — Others: six unchecked.
- `t1-11-webclient-after-preferences-closed-no-change.png` — dialog closed; runtime three rows unchanged; DevTools 36 rows.
- `t1-12-designer-FX_Items-end-of-T1-clean-Save-disabled.png` — Designer end of T1: clean, User scope, Save greyed.
- `t1-snapshot-FX_ItemStatic-selected-before-expand-all.md` — browser-generated accessibility snapshot saved at worker request (classified as browser-generated, not a worker finding).

Tool-generated (not worker-authored, gitignored `evidence/playwright/`): accessibility snapshots `page-2026-10-11T06-42-02-501Z.yml`, `06-42-18-844Z`, `06-42-27-789Z`, `06-42-44-305Z`, `06-42-59-424Z`, `06-43-10-828Z`, `06-43-17-034Z`, `06-43-21-338Z`, `06-43-25-499Z`, `06-43-29-726Z`, `06-43-34-044Z`, `06-43-40-280Z`, `06-43-46-106Z`, `06-43-54-650Z`, `06-43-59-218Z`, `06-44-03-823Z`, `06-44-22-870Z`, `06-44-29-195Z`, `06-44-35-718Z`, `06-44-45-681Z`, `06-44-53-350Z`, `06-44-58-803Z`, `06-45-08-638Z` (all `.yml`); console log `console-2026-10-11T06-41-51-952Z.log`.

Experiment record initialized: `experiments/EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md`.

---

## Part G — Acceptance status for T1 scope

| AC | T1 status | Basis |
| --- | --- | --- |
| AC-1 Read-only preflight | **Supported** | Part A; `t1-01`, `t1-02`, `t1-06`, `t1-12`; snapshots listed in Part F; procedure review A5 |
| AC-2 Component inventory and layout baseline | **Supported with limits** | Part B1–B5; `t1-05`; absence check B3; Events values with stated "(not read)" gaps (B2); Data Source and `C(…)` caption ambiguities carried forward |
| AC-7 (pre-change part only) | **Pre-change 32-option baseline recorded**; the temporary change, OK, and read-back were not performed (not in T1) | Part C1–C3; `t1-07` to `t1-10` |
| AC-3 to AC-6, AC-8 to AC-12 | Not applicable to T1 (no mutation, save, reopen, log clear, activation, or restoration performed or authorized in T1) | — |
