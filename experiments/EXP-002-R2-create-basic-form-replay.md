# EXP-002-R2 — Clean Replay: Create a Basic Build-from-Scratch Form (FX_TestBlank02)

Status: complete
Date: 2026-09-30
Mode: LEARNING MODE — one controlled mutation (creation of `FX_TestBlank02`, User scope). No other artifact was created, modified, or deleted.
Purpose: Determine whether the observed `create-basic-form` recipe from EXP-002 is repeatable without rediscovering the procedure through exploration.

## Recipe under test

`recipes/forms/create-basic-form.md` (status at start: **observed**, source EXP-002).

## Pre-mutation checks (all passed)

1. **AGENTS.md** read (file is named `AGENTS..md` in this workspace — double dot).
2. **Environment match** — confirmed via Web Client Help → About:
   - Infor Mongoose Application Development Framework **2026.09.08**; Application database **2026.09.08**; Form definitions database **2026.09.08**; Mongoose Web Client **2026.09.08**.
   - Connected via data configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
   - Portal shell footer: Infor OS Portal **2026.09.00 (20260724-165348, 20260724-164130, 1060, 1578, 726)**; scope badge **DEM**.
   - Matches `environments/current-environment.md` (fingerprinted 2026-09-30, EXP-002).
3. **Editing permission** — About dialog: "Currently logged in as anton.ramos@3mworks.com.ph, **Site Developer**, edits create user versions for user anton.ramos@3mworks.com.ph".
4. **User scope / intended user target** — "Identify Your Editing Scope" dialog (Web Designer): Scope combo value **3 = User**, User combo **anton.ramos@3mworks.com.ph**; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Scope confirmed by dialog value, not inferred from the Site Developer role.
5. **Existence check for `FX_TestBlank02`** — Select Form dialog grid store scan (`grid-1136`, tree-style store, form name in field `mgdata`): **632 records, zero `FX_TestBlank02`**; only `FX_TestBlank01` present (index 279, recId `extModel214-16` — identical to EXP-002's post-creation record). No conflict; proceeded.

## Steps that matched the recipe exactly

1. **Open Web Designer** via Designer split button `mgtoolbarbutton-1126` ("Open designer in a new window") in the Web Client iframe → new browser tab at `WSWebClient/designer/default.aspx`. (A form was loaded in the Web Client, so after the scope dialog the designer settled on `?MGForm=FX_TestBlank01` — consistent with the recipe's "no MGForm param when no form is loaded" note.)
2. **Scope dialog** appeared; confirmed **User** / anton.ramos@3mworks.com.ph; OK.
3. **New** (`mgtoolbarbutton-1088`, "New Form Definition") → **"Form Wizard Selection"** dialog (window `formwizard-1408`).
4. **Wizard selection**: radio **New Form** (already checked), Category **Classic**, Wizard **BuildFromScratch** → OK. (Category options observed: Classic, ExtDatasource, Flex, FormBuilder, IDS, NewData, REST; Classic wizards: BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile.)
5. **BuildFromScratch wizard** (container `expeditor-1468`):
   - Name `FX_TestBlank02` (editable combo `mgcombo-1475`)
   - Form Type `BuildFromScratch` (`mgcombo-1489`), Form Layout `GridLeft` (`mgcombo-1494`), Device Type `Default` (`mgcombo-1499`) — all defaults, untouched
   - Data Source empty (`mgcombo-1504`), Query Form empty (`mgedit-1509`), Comments empty (`mgedit-1514`)
   - **Next** → page 2: **"Save Template" checkbox checked by default** (`ext-comp-1707`) → **unchecked**
   - **Finish** → **"Process Completed Successfully"** (window `ext-comp-1009`, OK `button-1013` — same IDs as EXP-002) → OK
6. **Finish persisted immediately**: designer opened `?MGForm=FX_TestBlank02`; Save button `mgtoolbarbutton-1085` **disabled** (clean state). No separate save performed.
7. **Closed the Designer tab** — no prompt (clean state).
8. **Crossed the same session boundary as EXP-002**: full portal page reload (a `beforeunload` dialog appeared and was accepted; the `portal-notification` banner reappeared and was closed via its close button, exactly as documented).
9. **Independently rediscovered `FX_TestBlank02`**: Select Form store count **632 → 633**; `FX_TestBlank02` at index 279 (recId `extModel255-17`); scrolled virtualized grid (`gridview-1158`, rowHeight 23, `scrollTop = 279*23-100`); **double-clicked the row** (no OK button).
10. **Reopened in Web Client**: tab "FX_TestBlank02", URL `?favoriteContext=FX_TestBlank02`, no load errors.
11. **Help → About This Form**: Form Name **FX_TestBlank02**; Version **"User for user anton.ramos@3mworks.com.ph"**; Original Caption **FX_TestBlank02** (Name fallback, Caption empty); no parent form; current collection is primary collection; no permanent/user/Ido filters.
12. **Reopened the definition in the Web Designer** (Designer split button → scope dialog OK): URL `?MGForm=FX_TestBlank02`; Properties **Name FX_TestBlank02 / Version "User version for user anton.ramos@3mworks.com.ph" / Device Type Default / Form Type Normal / Is Master True / Caption empty**; Save disabled (clean state). Closed the designer tab without saving — no prompt.

## Steps that differed from the recipe

None in the creation procedure itself. Two verification/cleanup mechanics needed handling the recipe does not spell out:

1. **Closing the "About This Form" dialog.** The recipe says to confirm identity via Help → About This Form but not how to close it. A synthetic DOM click on its OK button (`ok.el.dom.click()`) did **not** close the window (the dialog's modal mask `ext-element-43` then intercepted all toolbar pointer events, blocking the Designer split button). Recovery: closed via Ext API `win.close()`.
2. **Designer scope dialog OK.** The same synthetic `el.dom.click()` failed on the "Identify Your Editing Scope" OK button in the designer; a **native Playwright click** on the OK button worked. (Consistent with the documented pitfall that synthetic DOM events do not drive Ext — previously noted for grid rows, now also observed for window buttons.)

## Recovery actions

- After the failed synthetic OK click left the About This Form window open (mask blocking the toolbar), state was inspected first (per AGENTS.md recovery rule): confirmed the visible window was the About dialog; closed it with `win.close()`; then the Designer split button click succeeded. No mutation was retried blindly; no artifact impact.
- No creation retry was needed: the single Finish click succeeded on the first attempt.

## Selector / control differences (session drift, as documented)

| Control | EXP-002 | EXP-002-R2 |
|---|---|---|
| Select Form grid | `grid-1136` (post-reload) | `grid-1136` (pre-create), `grid-1154` (post-reload) |
| Select Form grid view | `gridview-1140` | `gridview-1158` |
| Wizard container | `expeditor-1287` | `expeditor-1468` |
| Wizard Name combo | `mgcombo-1294` | `mgcombo-1475` |
| Wizard Form Type / Layout / Device / Data Source | `mgcombo-1308/1313/1318/1323` | `mgcombo-1489/1494/1499/1504` |
| Query Form / Comments | `mgedit-1328/1333` | `mgedit-1509/1514` |
| Save Template checkbox | (numeric, not recorded) | `ext-comp-1707` |
| Process Completed dialog / OK | `ext-comp-1009` / `button-1013` | `ext-comp-1009` / `button-1013` (stable) |
| Named toolbar IDs | `mgtoolbarbutton-1101/1125/1126`, `mgtoolbarbutton-1085/1088` | identical (stable) |

Stable across both runs: named component IDs (`mgtoolbarbutton-*`), the Process Completed dialog IDs, and all dialog titles/labels. Numeric IDs drifted as documented; all were resolved at runtime by container + role/text.

## Save / Finish behavior

- **Finish persists the form immediately** — confirmed again: after Finish → "Process Completed Successfully" → OK, the designer showed `?MGForm=FX_TestBlank02` with the Save button **disabled** (clean state). No separate Save step exists or was needed.
- Wizard navigation: page 1 (Name/Form Type/Layout/Device/Data Source/Query Form/Comments) has **Next** enabled and **Finish** disabled; page 2 (Save Template) has **Finish** enabled. The recipe's single "fill the wizard" step corresponds to these two pages.
- Closing the designer in clean state produced **no prompt** (both after creation and after the verification reopen).

## Persistence verification

- Pre-create store count: **632** (FX_TestBlank01 present, FX_TestBlank02 absent).
- Post-create, after full portal page reload (new session): store count **633**, exactly one new record — `FX_TestBlank02` (index 279). Count delta = +1, so **no template artifact** was created (Save Template unchecked) and nothing else changed.
- Form reopened in the Web Client (no errors) and in the Web Designer (definition loaded from server, Properties unchanged from creation time).
- `FX_TestBlank01` (EXP-002 artifact) was untouched: still present (index 280), and its designer Properties were identical to EXP-002 values when the designer first loaded it.

## Scope / version verification

- Creation scope: **User** for **anton.ramos@3mworks.com.ph** (scope dialog value 3 = User; status bar ScopeType: User).
- Runtime identity (About This Form): Version **"User for user anton.ramos@3mworks.com.ph"**.
- Designer identity: Version **"User version for user anton.ramos@3mworks.com.ph"**; Device Type Default; Form Type Normal; Is Master True; Caption empty.
- Matches the expected minimal Build-from-Scratch form and the EXP-002/FX_TestBlank01 values exactly.

## Evidence

Screenshots under `evidence/EXP-002-R2/`:
- `01-about-permission.png` — Web Client About (versions 2026.09.08, config group, Site Developer).
- `02-select-form-existence-check.png` — Select Form before creation (FX_TestBlank01 present, no FX_TestBlank02).
- `03-editing-scope-dialog.png` — Identify Your Editing Scope (User / anton.ramos@3mworks.com.ph).
- `04-form-wizard-selection.png` — Form Wizard Selection dialog (defaults).
- `05-build-from-scratch-selected.png` — New Form / Classic / BuildFromScratch selected.
- `06-build-from-scratch-wizard.png` — Wizard page 1 (Name FX_TestBlank02, Form Type BuildFromScratch, Layout GridLeft, Device Default, Data Source empty).
- `07-save-template-page.png` — Wizard page 2, Save Template unchecked.
- `08-process-completed.png` — "Process Completed Successfully".
- `09-form-created-in-designer.png` — FX_TestBlank02 in designer, Properties (Name/Version/Device/Form Type/Is Master), Save disabled.
- `10-select-form-rediscovery.png` — Select Form after reload (633 records).
- `11-reopened-form-runtime.png` — FX_TestBlank02 reopened in Web Client after reload.
- `12-about-this-form.png` — About This Form (name + User version for anton.ramos@3mworks.com.ph).
- `13-designer-reopen-properties.png` — Designer reload of the definition, Properties unchanged.

Playwright snapshots/console logs: `evidence/playwright/page-2026-09-30T07-*.yml` and `console-*.log`.

## Result

**Clean replay succeeded.** `FX_TestBlank02` was created by following `recipes/forms/create-basic-form.md` as written, with no rediscovery of the creation procedure and no recovery action affecting the mutation. All verification gates passed:

- persistence across a full page reload (632 → 633, exactly one new record),
- runtime identity/scope/version (About This Form),
- server-side definition reload in the Web Designer with unchanged minimal Properties,
- Save Template left unchecked (no template artifact; count delta +1).

The procedure is **materially the same** as EXP-002. Differences were limited to: (a) automation mechanics for closing Ext dialogs (synthetic DOM clicks do not trigger window button handlers — use native clicks or `win.close()`), and (b) the wizard's two-page structure (Save Template is on the page after Next), which the recipe's step 4 compresses into one step. Neither changes the procedure.

Knowledge states:
- Creation procedure + persistence behavior: **verified** (two successful executions — EXP-002 and EXP-002-R2 — with persistence verified across a session boundary in both).
- No **superseded** items.

Recipe updated: `recipes/forms/create-basic-form.md` status **observed → verified** (see its Verification/Promotion section).

Next (suggested, not done): EXP-003 — component experiment (out of scope for this replay; not started).