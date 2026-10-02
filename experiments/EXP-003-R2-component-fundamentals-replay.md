# EXP-003-R2 — Component Fundamentals: Clean Replay

Status: complete
Date: 2026-09-30
Mode: LEARNING MODE — one controlled mutation (creation of `FX_ComponentLab02` + three native components on it, User scope). No other artifact was created, modified, or deleted. `FX_TestBlank01` / `FX_TestBlank02` / `FX_ComponentLab01` were not touched.

## Objective

A **clean verification replay** of the EXP-003 component procedure, executed on a fresh session using **only the durable factory recipes** (no memory of the original run), to confirm the procedure reproduces on a fresh form `FX_ComponentLab02` and to promote the two component recipes from `observed` to `verified` if unchanged.

Target form `FX_ComponentLab02` (Build-from-Scratch, User scope) with exactly three native, non-data-bound components:

- `FX_TitleStatic` — **Static** (label), Caption `Component Fundamentals`
- `FX_ValueEdit` — **Edit**, unbound
- `FX_TestButton` — **Button**, Caption `Test`, **no** event handler

Out of scope (per task): IDO/collection, data binding, variables, event handlers, scripts, validators, Property/Component Classes, string resources, subforms, layout containers, Explorer entries, Portal behavior.

## Starting state

- Environment confirmed matching EXP-002 / EXP-002-R2 / EXP-003: Mongoose Web Client/DB **2026.09.08**, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Portal **2026.09.00**, user `anton.ramos@3mworks.com.ph`, role **Site Developer**, scope badge DEM.
- Editing scope confirmed **User** for `anton.ramos@3mworks.com.ph` (editing-scope dialog, not inferred from role).
- Existence check: `FX_ComponentLab02` did **not** exist (Select Form grid `grid-1141` scan, **634** records; only `FX_TestBlank01`, `FX_TestBlank02`, `FX_ComponentLab01` among `FX_*`).
- `FX_ComponentLab02` was created first via the **verified** `recipes/forms/create-basic-form.md` procedure (BuildFromScratch, Classic, Save Template unchecked) — "Process Completed Successfully". The form opened in the Web Designer with the Save button disabled (clean state).

## Method (replayed from recipes only)

1. Created `FX_ComponentLab02` (verified `create-basic-form.md`) — blank form in the designer.
2. **Placed a Static** per `add-component-from-toolbox.md`: clicked **Static** in the Toolbox, single-clicked the canvas. Generated name `static1_USER` (itemId `lb0`).
3. **Configured** it per `configure-basic-component.md`: Properties grid → **Name** → `FX_TitleStatic`, **Caption** → `Component Fundamentals` (double-click value cell → type → Enter).
4. **Placed an Edit** (Toolbox → Edit → canvas click); generated name `edit1_USER` (itemId `ed1`); renamed to `FX_ValueEdit`. Left unbound.
5. **Placed a Button** (Toolbox → Button → canvas click); generated name `button1_USER` (itemId `bt2`); renamed to `FX_TestButton`; set **Caption** → `Test`. Added **no** event handler.
6. **Saved** (toolbar Save, native click).
7. **Crossed the session boundary**: full designer page reload, then reopened the form from the designer **Form** menu.
8. Verified the three persisted components' metadata in the designer model (`allComponents`).
9. **Runtime check**: opened `FX_ComponentLab02` in the Web Client (Form → Open → Select Form → double-click row), confirmed all three components render; confirmed identity via Help → About This Form.
10. Captured evidence under `evidence/EXP-003-R2/`.

## Observations

### Procedure reproduced without recovery
- Every step of both recipes executed as written on the first attempt. **No recovery, no retry, no deviation in the procedure itself.** The only substitutions were in *verification technique* (store-scan + native double-click to open the form at runtime, rather than the Caption→Name filter switch), which is a more reliable equivalent, not a procedure change.

### Generated-name determinism (confirmed)
- The generated names were **identical to EXP-003**: `static1_USER` / `edit1_USER` / `button1_USER`, with the **same itemIds** `lb0` / `ed1` / `bt2`. The per-type counter is deterministic (first-of-each-type = `1`), and the itemId assignment is stable across forms and sessions. This resolves an EXP-003 unknown.

### Default size determinism (confirmed)
- Default sizes were **identical to EXP-003**: Static 160×18, Edit 296×36, Button 114×34. Default **positions** differ (they follow the click point): this run `lb0` (142,99), `ed1` (142,199), `bt2` (142,299) vs EXP-003 (142,199)/(142,299)/(142,380). Size is deterministic; position is click-dependent, as the recipe states.

### Component data model (confirmed)
- Same as EXP-003: `formpaneldesigner-<n>.allComponents[<itemId>]._privateFields.compDef` → `cn`, `ctrl`, `id`, `L/T/W/H`, `text`, `bind`, `albl`. Unbound components carry `bind = { Type: 2, ColID: "FM", Name: <itemId> }`.

### Server events (confirmed)
- Placement fired `newcomp` with the **same typeCodes** as EXP-003: Static `[0,0,0,0,142,99,null,"Static"]`, Edit `[1,0,0,0,142,199,null,"Edit"]`, Button `[8,0,0,0,142,299,null,"Button"]`.
- Each Name/Caption commit fired `updcompprop` with `eventSource: <itemId>` and `eventArgs: ["Design.<Prop>", <value>]`.
- **Save** (`mgtoolbarbutton-1085`, native click) POSTed `DesignerSession/SaveChanges` with body `{ formId: 150 }` only; the Save button then became **disabled** (clean state). `formId` 150 is the server id for `FX_ComponentLab02`.

### Persistence / rediscovery (confirmed)
- After a **full designer page reload**, the `?MGForm=` param was dropped and the designer settled empty. The form was reopened via the designer **Form** menu (lists `FX_ComponentLab02` above `FX_ComponentLab01`) → editing-scope dialog (User) → OK.
- On reopen, the designer reused surface id `formpaneldesigner-1382` (the **same** id EXP-003's reopened form got, though the original creation session had used `formpaneldesigner-1826`) — reconfirming that numeric Ext IDs drift between sessions and must be resolved at runtime.
- All three components persisted with correct metadata (see Verification below).

### Runtime (confirmed)
- Opened in the Web Client via **Form → Open** → Select Form dialog (store now **635** records = 634 + new form). The row was located by store scan and opened with a **native double-click** (more reliable than the Caption→Name filter switch used in EXP-003).
- All three components rendered: label `Component Fundamentals:` (trailing colon), an empty Edit textbox, and a `Test` button.
- **Help → About This Form**: Form Name `FX_ComponentLab02`; Version `User for user anton.ramos@3mworks.com.ph`; Original Caption `FX_ComponentLab02` (Name fallback, form Caption empty); no parent form; primary collection; no permanent/user/Ido filters.

### Deviations from the recipes (recorded, none change the procedure)
1. **Properties-grid header does not always update immediately on rename.** The recipe (`configure-basic-component.md`, Verification #2) states the header `<name> (<Type>)` updates right away. In this run the header textbox kept showing the stale generated name (e.g. `edit1_USER (Edit)`) even though the grid **store row** had already updated to `FX_ValueEdit`. The header appears to refresh on reselection, not on commit. This is a display-timing nuance, not a procedure failure — the authoritative state (store + server) was correct.
2. **Button `Design.Type` grid value is `PushButton`, model `ctrl` is `button`.** The Properties grid displays the type as `PushButton` for a button, while the model `ctrl` field is `button` (and the Toolbox row is `Button`). Three different labels for the same control; the recipe's "Type" refers to the grid display. No action needed, but worth noting when matching type strings.
3. **`AGENTS.md` is actually named `AGENTS..md`** (double dot) in this workspace. Environment quirk, not a procedure issue.

### Failures and corrections (observed)
1. **Synthetic DOM click does not open the Select Form dialog.** A synthetic `el.dom.click()` on the Open toolbar button (`mgtoolbarbutton-1101`) created the window object but left it **parked at y=-10000 with an empty store** (not loaded). A **native** Playwright locator click opened it correctly (y=314, 635 records). Consistent with the standing finding that synthetic DOM events do not drive Ext handlers.
2. **`?MGForm=` param is not a reliable opener on a cold designer load** (reconfirmed from EXP-003); the designer **Form** menu is the reliable opener.

## Verification

### Designer metadata after reload (authoritative)
Read from `Ext.getCmp('formpaneldesigner-1382').allComponents[<itemId>]._privateFields.compDef`:

| itemId | cn (Name) | ctrl (Type) | L,T | W×H | text (displayed) | bind |
|--------|-----------|-------------|-----|-----|------------------|------|
| `lb0`  | `FX_TitleStatic` | `label`  | 142,99  | 160×18 | `Component Fundamentals:` | `{Type:2, ColID:"FM", Name:"lb0"}` (unbound) |
| `ed1`  | `FX_ValueEdit`   | `edit`   | 142,199 | 296×36 | `` (empty)          | `{Type:2, ColID:"FM", Name:"ed1"}` (unbound) |
| `bt2`  | `FX_TestButton`  | `button` | 142,299 | 114×34 | `Test`              | `{Type:2, ColID:"FM", Name:"bt2"}` (unbound) |

- **Exactly 3 components** — no duplicates, nothing unexpected.
- **Event handlers: 0** (`eventhandlerlist` store count 0) — `FX_TestButton` has no handler, as required.
- Form properties: Name `FX_ComponentLab02`, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.

### Runtime
- All three components render in the Web Client (label with trailing colon, empty Edit, `Test` button).
- About This Form confirms the expected User version and identity.

## Evidence

Screenshots under `evidence/EXP-003-R2/`:
- `01-webclient-initial-state.png` — Web Client initial state.
- `02-about-versions.png` — About (Mongoose 2026.09.08 / Portal 2026.09.00).
- `03-select-form-existence-check.png` — Select Form before creation (no `FX_ComponentLab02`, 634 records).
- `04-editing-scope-dialog.png` — Identify Your Editing Scope (User / anton.ramos@3mworks.com.ph).
- `05-form-wizard-selection.png` — Form Wizard Selection (New Form / Classic / BuildFromScratch).
- `06-build-from-scratch-selected.png` — BuildFromScratch selected.
- `07-save-template-unchecked.png` — Save Template unchecked.
- `08-blank-form-in-designer.png` — Blank form in the designer (Save disabled).
- `09-static-placed-generated-name.png` — Static placed, generated name `static1_USER`.
- `10-titlestatic-name-caption-set.png` — `FX_TitleStatic` Name + Caption set.
- `11-all-three-components-placed.png` — All three components on the canvas.
- `12-form-saved-clean-state.png` — After Save (Save disabled, clean state).
- `13-reopened-persisted-components.png` — Reopened after reload; three components persisted.
- `14-runtime-webclient-three-components.png` — Runtime in Web Client (label, edit, Test button).
- `15-about-this-form.png` — About This Form (name + User version).

Playwright snapshots/console logs: `evidence/playwright/page-*.yml`, `console-*.log`.

## Comparison to EXP-003 (replay fidelity)

| Aspect | EXP-003 | EXP-003-R2 | Match |
|--------|---------|------------|-------|
| Generated names | `static1_USER`/`edit1_USER`/`button1_USER` | identical | ✅ |
| ItemIds | `lb0`/`ed1`/`bt2` | identical | ✅ |
| Default sizes | 160×18 / 296×36 / 114×34 | identical | ✅ |
| `newcomp` typeCodes | 0 / 1 / 8 | identical | ✅ |
| Unbound bind | `{Type:2, ColID:"FM", Name:<id>}` | identical | ✅ |
| Label trailing colon | yes | yes | ✅ |
| Persistence across reload | yes | yes | ✅ |
| Runtime render (3 comps) | yes | yes | ✅ |
| About This Form (User version) | yes | yes | ✅ |
| Positions | click-dependent | click-dependent (differ) | ✅ (expected) |

The procedure reproduced **materially unchanged**. The only differences were cosmetic/verification-technique (header update timing, `PushButton` vs `button` type label, store-scan open instead of filter switch) — none of which alter the steps.

## Risks / caveats

- A property-grid edit is **streamed to the server immediately** on commit (Enter); there is no local "pending" state to lose, and no grid-level undo of the server-side change.
- The generated `_USER` names are overwritten the moment you rename; if you skip renaming, the form keeps `static1_USER`/`edit1_USER`/`button1_USER`.
- Label captions render with a trailing colon; an exact no-colon string for a Static is a separate, unverified concern.
- The `?MGForm=` URL param should not be relied on to open a form in a cold designer session; use the designer **Form** menu.
- Numeric Ext IDs drift between sessions; resolve surfaces/grids at runtime by xtype/role.

## Unknowns

- The full set of `newcomp` `typeCode` values (only Static 0, Edit 1, Button 8 observed in both runs).
- Whether the trailing colon on label captions is configurable (site setting / property) or fixed.
- Whether the per-type generated-name counter resets per-form or is global (both runs used first-of-each-type on a fresh form, so per-form vs global is not yet disambiguated).

## Result

`FX_ComponentLab02` was created and populated with three native, non-data-bound components — `FX_TitleStatic` (Static, Caption `Component Fundamentals`), `FX_ValueEdit` (Edit, unbound), `FX_TestButton` (Button, Caption `Test`, no handler) — and **persistence was verified across a full page reload**: all three survived with correct names, types, positions, sizes, and captions, exactly 3 components with 0 event handlers, and all three render at runtime in the Web Client.

The EXP-003 procedure **reproduced cleanly with no recovery**, using only the durable recipes. Generated names, itemIds, default sizes, `newcomp` typeCodes, and the unbound bind shape were all **deterministic and identical** to EXP-003.

Knowledge states:
- Component placement + property editing + persistence behavior: **verified** (two independent successful executions — EXP-003 and this clean replay — with persistence verified by reload/reopen + runtime render in both). The two component recipes are promoted to **verified**.
- No **superseded** items.

Recipes promoted (status: **verified**):
- `recipes/components/add-component-from-toolbox.md`
- `recipes/components/configure-basic-component.md`

Next (suggested, not done): disambiguate the generated-name counter scope (per-form vs global) by placing a second Static on an existing form; confirm whether the label trailing colon is configurable.