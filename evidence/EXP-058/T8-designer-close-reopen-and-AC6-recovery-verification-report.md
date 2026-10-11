# EXP-058 T8 — ordinary Designer close/reopen, mandatory post-reopen event check, and AC-6 recovery verification

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 9, task T8.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `97a71e09-58ee-4d7e-a4ee-0211450f630a`.
Date: 2026-10-11. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

## 0. Outcome

- **One clean Designer Form-tab close: done (1 of 1).** Tablist empty afterwards; no unsaved-change prompt; Save disabled.
- **One reopen, first route, succeeded (recent-forms entry, attempt 1 of 2).** No fresh-menu retry was needed. No Designer Open > Select Form fallback was used.
- **Mandatory post-reopen event check: PASSED.** Components grid "Event to generate" for FX_RefreshButton = `FX_Test` (`t8-snapshot-06` line 518; screenshot `t8-02`). Native Component Properties > Events > Primary = `FX_Test` (`t8-snapshot-07` line 907).
- **AC-6 recovery verification: PASSED** (observed UI recovery; not database durability). Every compared item is confirmed against T1/T2/T6/T7 except where stated in §6.
- **No Save, no metadata change, no runtime activity.** Designer is clean. The runtime tab was not touched.

## 1. Pre-close gate (fresh snapshot; read-only)

- `browser_tabs list` first; tab 0 current (Designer), tab 1 runtime (untouched).
- `t8-snapshot-00-designer-fresh-pre-close.md`: Save disabled (line 10); Regenerate Form disabled (line 12); Undo, Redo disabled (lines 52–55); no dialog; Form `FX_Items` tab (line 212); footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (line 1052); grid shows `FX_Test` cell (line 859).

## 2. Close: one attempt

- Clicked the FX_Items Form-tab native close control once (`closable FX_Items`, ref `e247`).
- `t8-snapshot-01-after-single-close.md`: tablist empty (line 210); Save disabled; no unsaved-change prompt; no dialog. Screenshot not taken at this step (state confirmed from snapshot).
- Attempts: close **1 of 1**.

## 3. Reopen: route attempts

| Attempt | Route | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Form menu (`e3`), then recent-forms entry `FX_Items` (`e1655`, `menuitem` in the open Form menu) | **Form opened.** FX_Items tab present (`t8-snapshot-03` line 212); footer User/anton.ramos (line 1140 in later snapshot; line 574 earlier); URL changed to `…default.aspx?MGForm=FX_Items` (the Designer's own response to the native menu action, as in EXP-057) | `t8-snapshot-02` (menu open), `t8-snapshot-03`, `t8-01` |
| 2 (fresh-menu retry) | — | **Not used** (attempt 1 succeeded) | — |
| Fallback (Designer Open > Select Form) | — | **Not used** | — |

- Route counts: recent-forms attempts **1 of 2** (retry 0 of 1); Designer Open fallback **0 of 1**. Close 1; reopen 1.
- Whether a Form opening completed: **yes** (the Form rendered: Name, Version, Form Type, Initial Command, layout, and the three-column grid header visible in `t8-01`).

## 4. Post-reopen identity (before the event check)

- `t8-01-after-recent-forms-reopen-attempt-1-fx-items-opened.png`: Name `FX_Items`; Version `User version for us…` (truncated on screen); Device Type Default; Form Type Normal; Is Master True; Initial Command `Refresh`; Splitter Vertical 11; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save greyed; no dialog. Details panel collapsed on reopen.
- Accessibility (`t8-snapshot-03` lines 210–212, 323, 1140): Save `[disabled]`; Version full value `User version for user anton.ramos@3mworks.com.ph`; no dialog.

## 5. MANDATORY post-reopen event check (operator-amended AC-4)

- Details panel expanded (view only; `t8-snapshot-04`). Components tab (view only; `t8-snapshot-05`). Grid tree expanded (view only; `t8-snapshot-06`).
- **Components grid "Event to generate" for FX_RefreshButton: `FX_Test`** (`t8-snapshot-06` line 511 row summary `FX_RefreshButton PushButton 1 0 FX_Test`; cell line 518 `FX_Test`).
- FX_RefreshButton row selected (selection only; `t8-snapshot-07`). Component tab active. **Native Properties > Events > Primary: `FX_Test`** (`t8-snapshot-07` line 907).
- Screenshot `t8-02-post-reopen-mandatory-check-grid-event-to-generate-and-primary-FX_Test.png`: the selected FX_RefreshButton row shows `FX_Test` in "Event to generate"; Save greyed; User footer. **Primary is outside the visible frame**; its evidence is the accessibility readback at line 907.
- **Result: both values equal `FX_Test`. The post-reopen check PASSED.** The earlier pre-Save grid discrepancy (`StdFormRefresh` through T5, T6, and T7) is **resolved by this visible evidence**. Interpretation: the grid column refreshed to the committed value after the close/reopen. This demonstrates the UI displays `FX_Test` after reopening the Form. It does not by itself prove backend persistence (see §8).

## 6. AC-6 recovery verification (read-only)

### 6.1 Handler grouping (`t8-snapshot-09`, Event Handlers, expanded view only)

| Check | Result |
| --- | --- |
| Exactly one `FX_Test` group | yes (line 298) |
| seq 0 Prompt, Disabled `false`, Hello World / OK summary | yes (lines 300–303: `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`) |
| seq 1 Set Values, Disabled `false`, summary | yes (lines 307–310: `SETVARVALUES(FX_VarTest=P(FX_Description))`) |
| Exactly two handler actions | yes |
| `StdFormRefreshCompleted` present | **no** (plain search: 0 matches) |
| Save | `[disabled]` (line 10) |

### 6.2 Native parameters (read-only dialogs)

Not reopened in T8. The brief asked for read-only parameter verification only where safely available. The Prompt and Set Values summaries above match the T1 and T4 dialog readbacks character for character. This is a limitation (§8).

### 6.3 Components: 17-entry inventory (`t8-snapshot-06`; grid rows)

| # | Name | Type | Data Source | Pane | Container | Tab | Event to generate | Match vs T1/T6 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | — | — | — | — | — | Same (row present) |
| 2 | FormCollectionGrid | Grid | objects | 0 | — | 0 | — | Same |
| 3 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | — | Same |
| 4 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | — | Same |
| 5 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | — | Same |
| 6 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | — | Same |
| 7 | Pane (01) | Pane | — | — | — | — | — | Same (row present) |
| 8 | FX_ItemStatic | Static | — | 1 | — | 5 | — | Same |
| 9 | FX_ItemEdit | Edit | object.FX_Item | 1 | — | 6 | — | Same |
| 10 | FX_DescriptionStatic | Static | — | 1 | — | 7 | — | Same |
| 11 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | — | 8 | — | Same |
| 12 | FX_CostStatic | Static | — | 1 | — | 9 | — | Same |
| 13 | FX_CostEdit | Edit | object.FX_Cost | 1 | — | 10 | — | Same |
| 14 | FX_UMStatic | Static | — | 1 | — | 11 | — | Same |
| 15 | FX_UMCombobox | ComboBox | object.FX_UM | 1 | — | 12 | — | Same |
| 16 | FX_RefreshButton | PushButton | — | 1 | — | 0 | **FX_Test** | Same except the event (now `FX_Test`, intended; see §5) |
| 17 | FX_VarTestEdit | Edit | variables.FX_VarTest | 1 | — | 0 | — | Same |

The 17-entry inventory is present with the same names, types, and Data Source values as T1 and T6.

### 6.4 Native component readbacks (15 non-Pane entries; view or selection only)

| Component | Caption | Binding Type / Binding | Size | Location | Tab Order | Events (Primary / Data Change / Lose Focus / Gain Focus) | Drag From / Drop On | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FormCollectionGrid | (blank) | Primary Collection Grid / `objects` | 11; 21 | 0; 0 | 0 | blank ×4 | 0 / 0 | Same |
| FX_ItemGridCol | `FX_sItem` | Property / `object.FX_Item` | 10; 0 | 0; 0 | 1 | blank ×4 | 0 / 0 | Same |
| FX_DescriptionGridCol | `FX_sDescription` | Property / `object.FX_Description` | 10; 0 | 0; 0 | 2 | blank ×4 | 0 / 0 | Same |
| FX_CostGridCol | `FX_sCost` | Property / `object.FX_Cost` | 10; 0 | 0; 0 | 3 | blank ×4 | 0 / 0 | Same |
| FX_UMGridCol | `FX_sUM` | Property / `object.FX_UM` | 10; 0 | 0; 0 | 4 | blank ×4 | 0 / 0 | Same |
| FX_ItemStatic | `FX_sItem` | None / blank | 20; 1 | 1; 3 | 5 | blank ×4 | 0 / 0 | Same |
| FX_ItemEdit | `C(FX_ItemStatic)` | Property / `object.FX_Item` | 37.05; 2 | 1; 23.75 | 6 | blank ×4 | 0 / 0 | Same |
| FX_DescriptionStatic | `FX_sDescription` | None / blank | 20; 1 | 3.25; 3 | 7 | blank ×4 | 0 / 0 | Same |
| **FX_DescriptionEdit** | `C(FX_DescriptionStatic)` | Property / **`object.FX_Description`** | 37.05; 2 | 3.25; 23.75 | 8 | blank ×4 | 0 / 0 | **Same** (binding and geometry confirmed) |
| FX_CostStatic | `FX_sCost` | None / blank | 20; 1 | 5.5; 3 | 9 | blank ×4 | 0 / 0 | Same |
| FX_CostEdit | `C(FX_CostStatic)` | Property / `object.FX_Cost` | 37.05; 2 | 5.5; 23.75 | 10 | blank ×4 | 0 / 0 | Same |
| FX_UMStatic | `FX_sUM` | None / blank | 20; 1 | 7.75; 3 | 11 | blank ×4 | 0 / 0 | Same |
| FX_UMCombobox | `C(FX_UMStatic)` | Property / `object.FX_UM` | 37.25; 2.15 | 7.75; 23.75 | 12 | blank ×4 | 0 / 0 | Same |
| **FX_RefreshButton** | `FX_Refresh` | None / blank | 14.25; 1.89 | 12.1666666666667; 5.25 | 0 | **Primary `FX_Test`** (intended); Data Change, Lose Focus, Gain Focus blank | 0 / 0 | Name, Caption, PushButton, Binding Type, Binding, Size, Location, Tab, Data Change/Lose/Gain, Drag/Drop **Same**; Primary changed (intended) |
| **FX_VarTestEdit** | blank | **Variable / `variables.FX_VarTest`** | 37.05; 2 | 12.7222222222222; 30.25 | 0 | blank ×4 | 0 / 0 | **Same** (binding and geometry confirmed) |

Evidence snapshots (saved in `evidence/EXP-058/`): FX_RefreshButton `t8-snapshot-07`; FX_DescriptionEdit `t8-snapshot-15`; FX_VarTestEdit `t8-snapshot-16`; FormCollectionGrid `t8-snapshot-17`; GridColumns `t8-snapshot-18` to `-21`; FX_ItemStatic `-22`; FX_ItemEdit `-23`; FX_DescriptionStatic `-24`; FX_CostStatic `-25`; FX_CostEdit `-26`; FX_UMStatic `-27`; FX_UMCombobox `-28`.

FX_VarTestEdit's Properties "Data Source" row is blank, as in T2 and T6. Its grid Data Source and its Binding both show `variables.FX_VarTest`. This is the same observation as before, not a new discrepancy.

### 6.5 Pane (00) and Pane (01)

Not re-read in T8. T2 (`t2-01`, `t2-02`) established that their Component-tab property tree is empty in this UI, so Binding, Location, Size, Tab Order, and events are **not exposed**. Documented as unavailable, not inferred.

### 6.6 Form-level (`t8-snapshot-13`; view only)

| Property | Value now | T1/T6 | Result |
| --- | --- | --- | --- |
| Name | `FX_Items` | same | Same |
| Version | `User version for user anton.ramos@3mworks.com.ph` | same | Same |
| Device Type / Form Type / Is Master | Default / Normal / True | same | Same |
| Foreground Color | `#000000` | same | Same |
| **Initial Command** | **`Refresh`** | `Refresh` | **Same** |
| Script Language | Visual Basic | same | Same |
| Close Box / Minimize-Maximize | True / True | same | Same |
| Enable Advanced Filter | False | False | Same |
| Help Context ID | -1 | -1 | Same |
| Splitter / Position | Vertical / 11 | same | Same |
| Pane 0 / Pane 1 Scroll Bars | Never / As Needed | same | Same |
| Unit / Size | Char / 69; 21 | same | Same |
| Synchronize FlexLayout | True | True | Same |
| Footer scope | `User / anton.ramos@3mworks.com.ph` | same | Same |

### 6.7 FX_VarTest definition (Variables tab, view and selection only; `t8-snapshot-11`, `-12`)

| Field | Value now | T1/T6 | Result |
| --- | --- | --- | --- |
| Category | Form - Temporary | same | Same |
| Name | `FX_VarTest` | same | Same |
| Value | `~LIT~()` | `~LIT~()` | Same |
| Persistent | False | False | Same |
| Global | False | False | Same |
| Form - Persistent | `InitialCommand` only | same | Same |

## 7. Action counts (T8)

| Action | Count |
| --- | --- |
| Tab lists | 1 (start) |
| Tab selects | 0 |
| **Form tab close** | **1** |
| **Form reopen attempts** | **1** (recent-forms, attempt 1; succeeded) |
| Fresh-menu retry | 0 (of 1 allowed) |
| Designer Open > Select Form fallback | 0 (of 1 allowed) |
| **Designer Save** | **0** |
| Metadata-changing actions | 0 |
| Regenerate, Undo, Redo | 0 |
| Component or variable edits | 0 |
| Runtime tab selection, click, activation, prompt, typing | 0 |
| Dialogs opened | 0 |
| Designer clicks, total (exact) | 28: Form-tab close 1; Form menu 1; recent-forms entry 1; Details expand 1; Components tab 2; grid Expand 1; FX_RefreshButton row 2; Event Handlers tab 1; handler grid Expand 1; Variables tab 1; Variables grid Expand 1; FX_VarTest row 1; Form tab 1; FX_DescriptionEdit row 1; FX_VarTestEdit row 1; 12 other non-Pane component rows |
| Snapshots saved to `evidence/EXP-058/` | 29 (`t8-snapshot-00` to `-28`) |
| Screenshots saved | 2 (`t8-01`, `t8-02`) |
| Typing / key presses | 0 / 0 |
| Ref-not-found errors | 0 |
| Fresh-snapshot recovery allowance used | 0 |

Tool-locator disclosures: the wrapper reported different locators for the Details expand (`getByRole('button', { name: 'Expand Panel' })` for ref `e1780`), the Form menu (`getByRole('button', { name: 'Form', exact: true })`, matching `e3`), the Event Handlers grid Expand (`#button-6223`, for ref `e3460`), and the Variables grid Expand (`#button-6263`, for ref `e3563`). Each resulting state was confirmed (the expanded Details panel, the open Form menu, the expanded grid, and the expanded Variables grid).

## 8. Limitations and what is NOT claimed

1. **Durability.** The reopen verifies the Designer UI session's recovered state after a close and reopen. It is not independent database or server-side durability. It does not prove that a second session, a cache-cold load, or the runtime sees the same metadata.
2. **Grid "Event to generate" resolution.** The grid changed from `StdFormRefresh` (pre-Save, through T7) to `FX_Test` after the close/reopen. The visible evidence does not explain the mechanism (refresh on reload, or a cache effect). The brief allows this only as "visible evidence", and no claim beyond that is made. Same-property vs distinct-field remains unresolved; the reopen result is consistent with them being the same committed value, but this is not established.
3. **Parameter dialogs** were not reopened in T8. Parameter text is verified through the Event Handlers summary strings only.
4. **Pane (00) and Pane (01)** are documented as unavailable from T2, not re-read here.
5. **The native Save toast** (T7) and the SaveChanges response body were not captured.
6. **Designer console** remains at 4 errors (source unidentified; no diagnostics used).
7. **Auto-captured accessibility snapshots** under `evidence/playwright/` (gitignored) were used by grep for some component readbacks; the same readbacks are also saved in `evidence/EXP-058/t8-snapshot-15` to `-28`.

## 9. Evidence files (T8)

Under `evidence/EXP-058/`:
- `T8-designer-close-reopen-and-AC6-recovery-verification-report.md` (this report).
- Snapshots `t8-snapshot-00` to `t8-snapshot-28` (29 files): pre-close (`-00`); after close (`-01`); menu open (`-02`); reopen attempt 1 (`-03`); Details expanded (`-04`); Components tab (`-05`); grid expanded (`-06`); FX_RefreshButton readback (`-07`); Event Handlers (`-08`, `-09`); Variables (`-10`, `-11`, `-12`); Form tab (`-13`); components refs (`-14`); component readbacks (`-15` to `-28`).
- Screenshots: `t8-01-after-recent-forms-reopen-attempt-1-fx-items-opened.png` (reopen state; Name, Version, footer, Save greyed; Details collapsed); `t8-02-post-reopen-mandatory-check-grid-event-to-generate-and-primary-FX_Test.png` (grid "Event to generate" `FX_Test` for the selected FX_RefreshButton row; Primary is out of frame).
- Experiment record: `experiments/EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md` (T8 section and status line).

No screenshot was taken of the Event Handlers grid or the Variables grid after reopen; those readbacks are in `t8-snapshot-09` and `t8-snapshot-11`/`-12`.

## 10. Acceptance status

| AC | Status after T8 | Basis |
| --- | --- | --- |
| AC-1 | Supported (carried from T1; re-confirmed pre-close) | `t8-snapshot-00`, T1 |
| AC-2 | Supported (carried from T1/T2; re-confirmed post-reopen) | §6.3 to §6.7 |
| AC-3 | Supported post-reopen: exactly one FX_Test group, two original actions in order, enabled; no StdFormRefreshCompleted | §6.1 (`t8-snapshot-09`) |
| AC-4 | Supported (amended gate): Primary `FX_Test` and grid "Event to generate" `FX_Test`; other comparisons match | §5, §6.3 to §6.7 |
| AC-5 | Supported with limits (carried from T7; re-confirmed as "Save disabled, clean" pre-close) | `t7-*`, `t8-snapshot-00` |
| **AC-6** | **PASSED** (observed UI recovery across ordinary close/reopen; not database durability). Route: recent-forms attempt 1 of 2; no retry; no fallback. | §3, §5, §6, §7 |
| AC-7 to AC-11 | **Not tested in T8** (runtime steps are the next authorized step) | — |

## 11. Designer state at end of T8

- The FX_Items User-scoped Form is open as the sole Form tab.
- Save, Regenerate Form, Undo, and Redo are disabled. The Designer is clean.
- No dialog. Details panel expanded on Components; FX_RefreshButton row selected; Properties on the Component tab. Grid expanded.
- Runtime tab not touched. Web Client tab not closed or reopened.

## 12. Knowledge state (T8)

| Finding | State |
| --- | --- |
| Ordinary Designer Form-tab close (one) left a clean Designer (Save disabled, no unsaved-change prompt) | observed (single session) |
| Recent-forms entry reopened FX_Items on the first attempt; Form rendered with the correct identity and scope | observed (single session) |
| Post-reopen "Event to generate" = `FX_Test` and native Primary = `FX_Test` for FX_RefreshButton | observed (single session); the earlier pre-Save discrepancy is resolved by this UI evidence; mechanism unresolved |
| Post-reopen handler grouping: one FX_Test group, two original enabled actions, no StdFormRefreshCompleted | observed (single session) |
| Post-reopen 15 non-Pane component readbacks, FX_VarTest definition, Initial Command, Form properties equal T1/T6 | observed (single session) |
| Pane (00)/(01) properties | not exposed (documented from T2; not re-read) |
| Parameter dialog readbacks after reopen | not performed (summary strings only) |
| Backend or database durability | **not claimed** |
| Replay-verified findings | none |

## 13. Next permitted step (NOT STARTED)

The runtime portion (close the inherited FX_Items Web Client tab once; open FX_Items once via Open > Select Form; verify the initial state with FX_VarTestEdit empty; activate FX_Refresh once; dismiss one prompt; compare). It needs a new authorization. No runtime action was taken in T8.
