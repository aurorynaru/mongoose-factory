# EXP-045 T4 — Label component and Caption dialog inspection (worker-authored; read-only; STOPPED)

Run `R-20261010-214137-Ia7F` · cycle 3 · task T4 · worker session `9f2fb920-cc07-4930-b468-a5c8910aab86` · task_message_id `c7252375-d1e9-4057-8b5b-9764dad69424`.

**Outcome: STOPPED before any Caption dialog.** The generated FX_UM label component could not be selected through a supported route in this session, so its Caption ellipsis dialog was not opened. Nothing was changed, committed or saved.

## 1. Starting state (fresh)

- Tab 0 Web Client: `Property Classes` runtime tab; no dialog. Not acted on.
- Tab 1 Designer (`designer/default.aspx?MGForm=FX_UMs`), selected:
  - Form tab `FX_UMs` selected; vendor `Property Classes` tab present, not selected.
  - Properties: Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`.
  - Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
  - Save `[disabled]`; Undo `[disabled]`; Regenerate Form `[disabled]`; no dialog.
- Screenshot: `t4-01-designer-FX_UMs-form-start-before-label-inspection.png`.

## 2. Canvas observations (read-only)

- Design surface: `FX_sUM*` label above `FX_sDescription:` label, each with a data-entry box to its right. The canvas labels display the **raw string IDs** as text.
- Left grid: one row (`1`), column headers `* FX_sUM` and `FX_sDescription`.
- The canvas labels are design-time components. Their captions were not inspected at this point.

## 3. Identification attempts

| # | Action | Result | Evidence |
|---|---|---|---|
| I1 | Click the canvas label text (ref `e293`, `FX_sUM:`) | **Timeout** after 5 s: the locator resolved to `mgimagelabel-4445-textEl` (tool log shows `data-mgcompnamevalue="FX_UMStatic"`), but the click was **intercepted** by the design adorner `compadorner-4483` ("intercepts pointer events"). Not selected. | Tool error text (no screenshot) |
| R1 | Fresh untargeted snapshot (recovery allowance 1 of 1) | Same refs; Designer clean | snapshot |
| C1 | Expand the bottom **Details** panel (`Expand Panel` `e316`) | Panel opened. Tabs: Collections, Components, Event Handlers, Variables, Design View Size. Collections shows `Primary Collection: FX_UMs` | `t4-02-details-panel-expanded-component-tree.png` |
| C2 | Click the **Components** tab (`e478`) | Tree of `Pane (00)` and `Pane (01)` with columns Name, Type, Data Source, Pane, Container, Tab, Event to generate, Component Class, Enabled When | `t4-03-details-components-tab-list.png` |
| C3 | Click the `Pane (00)` row (`e614`) | Row **selected**, not expanded. Properties panel still shows the Form | `t4-04-details-components-pane00-expanded.png` |
| C4 | Press ArrowRight | Focus moved to the Type cell; the pane **did not expand** | `t4-05-details-components-pane00-after-arrowright.png` |

Recovery and corrected-inspection allowance (one each) is now used. The brief stops after this. The Components tree did not expand with the supported keyboard or pointer route, so no component row for `FX_UM` or `FX_Description` was reached.

**Not used:** Event Handlers, Variables, Design View Size, the Components-toolbar delete (trash) control, the expand-all control, and any canvas coordinate click. A coordinate click would be a last-resort route that the adorner would likely intercept in the same way.

## 4. What is established and what is not

| Item | State |
|---|---|
| Designer identity: Name `FX_UMs`, User version, User scope, Save disabled | **observed** (`t4-01`) |
| Primary Collection `FX_UMs` in the Details Collections tab | **observed** (`t4-02`) |
| FX_UM label component identity (`FX_UMStatic`, from the tool's error log only) | **unresolved**: it came from the failed locator's log, not from a selection or Properties view. Not used as proof |
| The FX_UM label component is selected and its Caption property shown | **not established** |
| The FX_UM Caption ellipsis dialog: string ID, literal value, resource selection, existence of `FX_sUM` | **not inspected** (no dialog opened) |
| The FX_Description label component and its Caption dialog | **not inspected** |
| Whether `FX_sUM` or `FX_sDescription` exists, or would be created | **unresolved** |
| Whether any existing `FX_sUM` value conflicts with `Unit of Measure` | **unresolved** (no value read) |

**Important:** the raw-ID text on the labels does **not** establish that the resources are absent. The brief forbids inferring absence from it, and this T4 did not infer it.

## 5. Mutations and commits

- Caption dialog opened: **0**.
- Caption value, string ID or resource changed: **0**.
- Designer Save: **0**. Save remains disabled.
- Form close or reopen: **0**.
- Wizard or Finish: **0** (not used in T4).
- No value entered anywhere. No Caption-dialog commit control pressed.

## 6. Operation counts (T4)

| Operation | Count |
|---|---|
| Save / Finish / Form creation | **0 / 0 / 0** |
| Caption dialog opened | **0** |
| String or Caption value changed | **0** |
| Designer close or reopen | **0 / 0** |
| Interaction failures (timeouts) | **1** (I1, label click intercepted by adorner) |
| Fresh recovery snapshots | **1 of 1** |
| Corrected visible inspections | **1 of 1** (Details panel route, C1 to C4) |
| Screenshots (worker-saved PNG) | **5** (`t4-01` to `t4-05`) |
| Tab selects | **1** (to Designer; the first select attempt returned "Tab 1 not found", succeeded on retry after a fresh tab listing) |
| Finds (read-only) | **4** |
| Prompts or confirmations answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |
| Login, logout, refresh, restart, FormSync, cache unload, Regenerate Form | **0** |

## 7. Final browser state (last verified)

- Tab 1 Designer (selected): `FX_UMs` Form tab; User scope; Save and Undo disabled; no dialog. The Details panel is expanded at the bottom, with the Components tab open and the `Pane (00)` row selected. The Properties panel shows the Form.
- Tab 0 Web Client: `Property Classes` runtime tab; untouched in T4.
- No browser-native dialog. No unsaved-change prompt.

## 8. Screenshots (T4)

| File | Shows | Does not prove |
|---|---|---|
| `t4-01-designer-FX_UMs-form-start-before-label-inspection.png` | Designer `FX_UMs`: Form properties (Name `FX_UMs`, User version, Default, Normal, Is Master True); canvas labels `FX_sUM*` / `FX_sDescription:` with raw-ID text; Save greyed; User scope | The label component identity or its Caption value |
| `t4-02-details-panel-expanded-component-tree.png` | Details panel expanded; Collections tab `Primary Collection: FX_UMs`; tabs Collections / Components / Event Handlers / Variables / Design View Size | The component list |
| `t4-03-details-components-tab-list.png` | Components tab: `Pane (00)` and `Pane (01)` rows (collapsed); column headers | Any component row |
| `t4-04-details-components-pane00-expanded.png` | `Pane (00)` row selected (not expanded); Properties still the Form | Expansion (it did not expand) |
| `t4-05-details-components-pane00-after-arrowright.png` | Focus on the Type cell of `Pane (00)`; still collapsed | Any component row |

## 9. Open items for the next authorisation

1. **Select the FX_UM label component by a supported route** (the canvas click is intercepted by the adorner; the Components tree did not expand with ArrowRight). Options for the coordinator: a supported expand control on the Components tree, or a designer-selection route of the operator's choice.
2. Then open its Caption ellipsis dialog (read-only) and record the string ID, literal value, resource selection and whether `FX_sUM` exists.
3. Repeat for the FX_Description label (`FX_sDescription`, required value `Description`).
4. Any conflicting existing value blocks the commit and must be reviewed by the operator.
