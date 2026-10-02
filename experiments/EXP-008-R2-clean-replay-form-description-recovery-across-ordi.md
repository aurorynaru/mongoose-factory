# EXP-008-R2 — Clean Replay: Form Description Recovery Across Ordinary Web Designer Close/Reopen (FX_FormPropertyLab08)

Status: **COMPLETE — all acceptance criteria AC-1 … AC-10 PASS; result classified `replay_verified` for the EXP-008 close-only-reopen procedure (second independent execution), with the explicit non-claims that this does NOT establish durable Forms-database persistence, cache eviction, or IDO-metadata unloading. No reusable recipe promoted or modified.** Single bounded worker task (T1) executed the full semantic sequence in one pass: preflight → preference read → create → baseline → Description edit → ordinary Save → close → reopen → recovery verification → final read-only audit.
Date: 2026-10-02
Mode: LEARNING MODE — clean independent replay of EXP-008 (`experiments/EXP-008-form-description-persistence-across-close-only-reo.md`) on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab08`.
Run: `R-20261002-183841-C5B6` (cycle 0, task T1), started 2026-10-02 18:38:41.

## Objective

In a fresh worker context, create exactly one new User-scope classic BuildFromScratch Form named `FX_FormPropertyLab08` using the verified basic-form recipe, record its untouched Form-property baseline, change only its Form-level Description to the literal value `Form Property Description Close Only Replay`, ordinary-save to a demonstrably clean Designer state, close the target using the ordinary Web Designer Form-tab close control, do not invoke `Form > Definition > Unload All Global Form Objects`, reopen the exact same customized version using the supported Designer Form-menu path, and verify that Description and all recorded comparison properties recover unchanged. Confirm the current `Unload IDO Metadata With Forms` preference state read-only and leave it unchanged. Network observations recorded diagnostically only; not used to infer cache or IDO-metadata semantics.

In scope: read-only preflight proving current editing scope is User and `FX_FormPropertyLab08` is absent; read-only confirmation of the `Unload IDO Metadata With Forms` preference through the supported visible Web Client User Preferences route (no change/Save); create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab08` using `recipes/forms/create-basic-form.md` with Save Template unchecked; record the untouched baseline (Description, Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) before editing; change only Form-level Description to exactly `Form Property Description Close Only Replay`; exactly one ordinary Designer Save to a demonstrably clean state; close via the ordinary Form-tab close control; reopen via the supported Designer Form-menu path without any global-Form-object unload; verify the reopened version by Form name + ScopeType + ScopeName and compare Description plus all baseline properties; record diagnostic request/response observations around close and reopen; write evidence only under `evidence/EXP-008-R2/` and update only this record.

Out of scope: proving durable Forms-database persistence or identifying the storage layer; IDO-metadata trigger semantics, cache semantics, or equivalence between Web Client Form close and Web Designer Form-tab close; invoking `Form > Definition > Unload All Global Form Objects`; changing `Unload IDO Metadata With Forms` or any other User Preference; Caption edits; Form variables or any EXP-004 workaround; components, collections, bindings, event handlers, scripts, validators, data sources, IDO definitions, or localized Strings; Site/Group/Vendor Default or scope-switching experiments; direct database changes, undocumented APIs, metadata hacks; creation or modification of reusable recipes; modification of `FX_FormPropertyLab07` or any earlier experiment artifact; modification of any non-`FX_` Mongoose artifact.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Web Client iframe title).
- Browser state at start (inspected first; **no login performed — session already authenticated**): three tabs:
  - Tab 0: Mongoose Web Client (portal), signed in; **no form open**; toolbar **clean** (Save `mgtoolbarbutton-1102` disabled); **no** visible Ext windows; no `portal-notification` banner. URL carries the leftover `favoriteContext=UserPreferences` param from the EXP-008 T7 preference reads (display-only).
  - Tab 1: the same **stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (long-standing leftover of the EXP-006 T8 SLO-recovery navigation; untouched, not re-verified).
  - Tab 2: **Web Designer tab** at `WSWebClient/designer/Default.aspx?…&MGForm=FX_FormPropertyLab07` — `FX_FormPropertyLab07` was **left open and clean** by EXP-008 T7 (final audit) and was not closed at the end of that experiment. Read-only inspection: 4 form tabs — `Form Property Lab Coupled Unload Replay` (= `FX_FormPropertyLab04`), `FX_FormPropertyLab05`, `FX_FormPropertyLab06`, `FX_FormPropertyLab07` (active per URL); toolbar **clean** (Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` disabled); no visible windows; status bar `[ ScopeType: User / ScopeName: <username> ]`; property grid `formpropertygrid-1135` showed Lab07's Design group (Description `Form Property Description Close Only` — the EXP-008 customized value — Caption empty, Version `User version for user <user>`, Device Type `Default`, Form Type `Normal`, Is Master `True`). **None was touched** in this preflight. (evidence `01`.)
- **Target form `FX_FormPropertyLab08` does NOT exist** — full Select Form store scan (643 records): 0 exact and 0 case-insensitive matches in both Name (`mgdata`) and Caption (`text`); 0 near-miss (`formpropertylab08` substring); UI filter searches 0 rows in both case modes; positive control 7 rows. (Method and evidence below.)
- Existing `FX_` forms (**exactly 12**, store indices in `mgdata` order): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab07` (282), `FX_FormPropertyLab06` (283), `FX_FormPropertyLab05` (284), `FX_ComponentLab02` (285), `FX_ComponentLab01` (286), `FX_FormPropertyLab02` (315), `FX_FormPropertyLab04` (316), `FX_FormPropertyLab03` (317), `FX_FormPropertyLab01` (318).
- Form-count reconciliation: 643 total / 12 `FX_` — **identical** to the EXP-008 T7 final audit (643 / 12, same 12 names, same indices 279–286 / 315–318). No growth, no deletions, no unexplained artifacts between experiments.
- **`Unload IDO Metadata With Forms` preference: read CHECKED/enabled** in this preflight (T1.5 below) — `checked: true`, `getValue(): true`, `disabled: false`, `hidden: false`, on-screen rect `{x:770, y:119, w:320, h:27}` (component `ext-comp-3927` on this load; numeric id drifts per load). Read-only; no change, no Save. **Preference gate: PASS.**
- No Mongoose artifact was created, modified, or deleted during the preflight. No User Preference was changed or saved. No unload command was invoked. No form was opened from the Select Form dialog. No Designer mutation was performed. Editing scope unchanged (User).

## Preflight method (T1)

1. Inspected repository state and the original EXP-008 record (status `observed`, all AC-1…AC-10 PASS) plus `recipes/forms/create-basic-form.md` (status **verified**) and `environments/current-environment.md`.
2. Inspected current browser state (3 tabs as above) — **no login performed** (session already authenticated). Screenshot of the Designer tab (evidence `01`) and of the Web Client (evidence `02`).
3. Confirmed Web Client iframe state programmatically (title = config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no visible windows; no form tabs; Save disabled).
4. In the Web Client, clicked **Open** (`mgtoolbarbutton-1101`, native Playwright click) → **Select Form** dialog (window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147` — **identical IDs to the EXP-008 session**). The dialog reopened with an **empty** filter (as left by EXP-008 T7) → full store **643 records**.
5. **Target-absence proof (store-level, authoritative):** scanned the entire Select Form store (all **643** records): field `mgdata` (Name) — **0 exact**, **0 case-insensitive**; field `text` (Caption) — **0 exact**, **0 case-insensitive**; near-miss substring `formpropertylab08` (case-insensitive, Name and Caption) — **0**.
6. **Target-absence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab08` into the Filter field (real key events, Case Sensitive **off**) → **0 records** (evidence `04`).
7. **Target-absence proof (UI-level, case-sensitive):** toggled **Case Sensitive on** via the checkbox's own `onBoxClick()` handler (`getValue()` false→true verified), cleared and re-typed `FX_FormPropertyLab08` → **0 records** (evidence `05`).
8. **Positive control (UI-level, case-sensitive):** cleared and typed `FX_FormPropertyLab` → exactly **7 rows**: `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — proves the filter mechanism works and that only the 01–07 variants exist (evidence `06`).
9. **Visual inventory:** cleared and typed `FX_` → exactly **12 rows** (evidence `07`).
10. Restored the dialog to its original state (Case Sensitive back **off**, filter cleared → 643 records, Starts With verified off) and closed via **Cancel** (`button-1150`, native click). Web Client verified clean (no visible windows, Save disabled). (evidence `08`.)
11. **Editing-lane check (read-only):** the Designer tab (tab 2) was already in **User scope** with a clean toolbar and `FX_FormPropertyLab07` active — suitable for a User-scope creation in the existing session (no scope re-prompt expected).
12. **Preference gate (read-only):** in the Web Client, opened **Form > User Preferences** (native Playwright click on the Form menu button `mgmenubutton-1023`, then native click on the `User Preferences` menu item `#menuitem-1043-itemEl` — the same supported route as EXP-008 T1/T7) → the User Preferences workspace view opened. Read the checkbox with boxLabel **`Unload IDO Metadata With Forms`** (component `ext-comp-3927`): **CHECKED** (`checked: true`, `getValue(): true`, `disabled: false`, `hidden: false`, on-screen rect `{x:770, y:119, w:320, h:27}` — genuinely rendered, same on-screen position as EXP-008 T1/T7). (evidence `09`, `10`.) **No toggle, no change to any other preference, no Save/OK.** Closed the view via its tab close (×) button — **not** OK/Save; **no "save changes?" prompt appeared**; workspace returned to normal (no tabs, no windows, Save disabled). (evidence `11`.)
13. Audited the worktree starting state by mtime (see "Repository / worktree starting state" below). Console: 0 errors / 0 warnings at the end of the run.

## T1 requirement-to-evidence mapping

| # | T1 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Prove current Designer editing scope is User | **PROVEN** — Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (ScopeName masked by the secrets layer; the signed-in user is `anton.ramos@3mworks.com.ph` per `environments/current-environment.md`); read-only, no scope dialog, no scope switch | evidence `01`; preflight facts |
| 2 | Prove `FX_FormPropertyLab08` absent (exact + case-insensitive) by supported UI/store evidence | **PROVEN** — store scan 643 records: 0/0 Name, 0/0 Caption (exact + CI), 0 near-miss; UI filter 0 rows case-insensitive; 0 rows case-sensitive; positive control 7 rows | evidence `04`–`07`; table below |
| 3 | Record total `FX_` inventory count and target count | **RECORDED** — 643 total / 12 `FX_` / 0 target (identical to EXP-008 T7 final audit) | evidence `07`; preflight facts |
| 4 | Capture repository/worktree baseline | **CAPTURED** — mtime audit; run boundary 18:38:41; latest pre-existing content = EXP-008 record (10/2, its T7 finalization) | "Repository / worktree starting state" below |
| 5 | Read `Unload IDO Metadata With Forms` via the supported visible surface, without change/Save | **PROVEN** — visibly rendered (non-zero rect) and **CHECKED/enabled** via Web Client `Form > User Preferences`; closed via tab × without Save; no save prompt | evidence `09`–`11`; T1.12 |
| 6 | Capture screenshots/log evidence under `evidence/EXP-008-R2/` and update only the EXP-008-R2 record | **DONE** — screenshots `01`–`32`; only this record + `evidence/EXP-008-R2/` written | this file; `evidence/EXP-008-R2/` |

## Target-absence evidence — pre-mutation absence of `FX_FormPropertyLab08`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store (Name) | Store scan of all 643 records, field `mgdata`, `=== 'FX_FormPropertyLab08'` | **0 matches** |
| Case-insensitive, whole store (Name) | Store scan, `mgdata.toLowerCase() === 'fx_formpropertylab08'` | **0 matches** |
| Exact / case-insensitive, whole store (Caption) | Store scan, field `text`, exact and `toLowerCase()` | **0 / 0 matches** |
| Near-miss scan | Case-insensitive substring `formpropertylab07`→`formpropertylab08` in Name and Caption | **0 matches** |
| UI filter, case-insensitive (Case Sensitive off) | Dialog filter `FX_FormPropertyLab08` | **0 rows** (evidence `04`) |
| UI filter, case-sensitive (Case Sensitive on) | Dialog filter `FX_FormPropertyLab08` | **0 rows** (evidence `05`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` (case-sensitive) | **7 rows**: `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` (evidence `06`) |
| Visual, full `FX_` inventory | Dialog filter `FX_` | exactly 12 `FX_` rows, no `FX_FormPropertyLab08` (evidence `07`) |

**Counts: total forms = 643; `FX_` forms = 12; target `FX_FormPropertyLab08` = 0.**

Case-insensitive matching was explicitly accounted for in multiple independent ways (store-level `toLowerCase` scan on both Name and Caption, UI filter with Case Sensitive off, and the positive control).

**Name/Caption ambiguity:** the store scan distinguished the Name field (`mgdata`) from the Caption field (`text`) per record. No record carries a Caption resembling the target (case-insensitive Caption scan = 0). The only Name-fallback Captions in the target family are `FX_FormPropertyLab07` and `FX_FormPropertyLab06` (Caption empty → store `text` shows the Name), which are different Names and cannot be confused with `FX_FormPropertyLab08` under either exact or case-insensitive matching.

## Repository / worktree starting state (T1)

- Worktree is **not** a git repository; audit by file modification time. *(Superseded by R2 below: the worktree **is** a git repository — branch `exp/EXP-008-R2`, HEAD `10322fa`. The mtime audit was re-confirmed and is superseded by the authoritative git-based audit in R2.)*
- **Run boundary:** this run (`R-20261002-183841-C5B6`) started at **2026-10-02 18:38:41**.
- **Most recent prior content:** `experiments/EXP-008-form-description-persistence-across-close-only-reo.md` (its T7 finalization, 10/2) and `evidence/EXP-008/*` (last 10/2).
- **NOT modified before this run (all predate it):** `AGENTS.md`, `opencode.json`, `environments/current-environment.md`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` records. `claims/` empty (pre-existing).
- `evidence/playwright/` = auto-generated Playwright snapshot/console artifacts (shared across experiments); `tools/learning-harness/` = harness runtime (briefs/context written by the harness at run start) — neither is EXP-008-R2 knowledge content.

## T2 — Creation of `FX_FormPropertyLab08` + untouched baseline

### T2.1 — Guards re-verified first (no mutation)

- Browser tabs at T2 start (same session; state inspected before any action): Tab 0 = Web Client (authenticated; no form open; Save disabled; no visible windows); Tab 1 = the same stray dead bare-portal-root tab (unchanged); Tab 2 (current) = Designer tab with `?MGForm=FX_FormPropertyLab07` (left open/clean by EXP-008 T7).
- **Guard 1 — scope (PASS):** Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (read-only); toolbar clean (Save/Regenerate disabled); no visible windows; form tabs Lab04/Lab05/Lab06/Lab07 all present and untouched.
- **Guard 2 — target absence (PASS):** the T1 preflight store scan (643 records, 0 matches in all four modes + 0 near-miss) was performed immediately before the mutation in the same session; no intervening form creation occurred. Target absent immediately before the mutation.

### T2.2 — Creation method (per `recipes/forms/create-basic-form.md`)

1. Switched to the Designer tab (tab 2) — already open in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`), clean toolbar, `FX_FormPropertyLab07` active. No new Designer session was needed; **no "Identify Your Editing Scope" dialog appeared** (session scope already established for the signed-in user — same as EXP-008 T2).
2. Designer toolbar **New** (`mgtoolbarbutton-1088`) — native Playwright click → **"Form Wizard Selection"** dialog (window `formwizard-5175` — xtype `formwizard`, not an Ext `window`; numeric ID drifted from EXP-008 T2's `formwizard-4398`, as expected). (evidence `13`.)
3. Radio **New Form** already checked (default; `mgradio-5184` checked). Category combo (`mginfoconexpandable-5193`, store field `CategoryName`) → **Classic** selected via `combo.select(record)` (categories: Classic, ExtDatasource, Flex, FormBuilder, IDS, NewData, REST); Wizard combo (`mginfoconexpandable-5198`, store field `WizardName`) then loaded the 7 Classic wizards (BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile) → **BuildFromScratch** selected via `combo.select(record)`. (evidence `14`.)
4. OK (`mgformbutton-5201`, native click) → **"Form Wizard - Build From Scratch"** (expeditor `expeditor-5224`). Page-1 values verified: Name (editable combo `mgcombo-5231`) set to **`FX_FormPropertyLab08`** via `setValue`; all other defaults left untouched — Form Type `BuildFromScratch` (`mgcombo-5245`), Form Layout `GridLeft` (`mgcombo-5250`), Device Type `Default` (`mgcombo-5255`), Data Source empty (`mgcombo-5260`), Query Form / Comments empty (`mgedit-5265` / `mgedit-5270`). (evidence `15`.)
5. **Next** (`mgformbutton-5467`, native click) → Next became **disabled**, **Finish** (`mgformbutton-5468`) became **enabled** (single scrollable page, as in EXP-008 T2).
6. **Save Template** checkbox (`ext-comp-5463`) was **checked by default** (`getValue()=true`); toggled **off** via its own handler `onBoxClick()` → `getValue()=false`. (evidence `16`.)
7. **Finish** (`mgformbutton-5468`, native click) → **"Process Completed Successfully"** dialog (`ext-comp-1009`, message text `Process Completed Successfully`) → **OK** (native click on the dialog's OK button element `#button-1013`). (evidence `17`.)
8. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab08`; form tab **`FX_FormPropertyLab08`** appeared (5th tab) and is selected; the `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, and `FX_FormPropertyLab04` (`Form Property Lab Coupled Unload Replay`) tabs **remain present and untouched**; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `18`.)

### T2.3 — Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store:
- **Total records = 644** (643 + 1 — exactly +1; **no template artifact** created, consistent with Save Template being unchecked).
- **Exactly 1 exact match** for `FX_FormPropertyLab08` (store index 282, record `{mgdata:"FX_FormPropertyLab08", text:"FX_FormPropertyLab08", id:"extModel214-3226"}`); case-insensitive matches = 1 (the same record); Caption-field exact/case-insensitive matches = 1/1 (the same record, Caption empty → Name fallback). **Distinct matching records = 1.**
- `FX_`-prefixed forms now number **13**: `FX_VariableLab01`(279), `FX_TestBlank02`(280), `FX_TestBlank01`(281), **`FX_FormPropertyLab08`(282)**, `FX_FormPropertyLab07`(283), `FX_FormPropertyLab06`(284), `FX_FormPropertyLab05`(285), `FX_ComponentLab02`(286), `FX_ComponentLab01`(287), `FX_FormPropertyLab02`(315), `FX_FormPropertyLab04`(316), `FX_FormPropertyLab03`(317), `FX_FormPropertyLab01`(318). The pre-existing 12 shifted only in list order/indices; no other artifact added or removed.
- UI confirmation: filtered the dialog to `FX_FormPropertyLab08` → **exactly 1 row** (Caption column shows the Name fallback because Caption is empty); filtered `FX_` → **exactly 13 rows**. (evidence `20`, `21`.)
- Dialog closed via Cancel (native click); filter cleared first (644 records); Web Client verified clean (no windows, Save disabled).

### T2.4 — Exact User-scope identity + full pre-Description baseline (recorded BEFORE any property change)

Read read-only from the loaded Designer property grid store `formpropertygrid-1135` (the grid cell visually truncates Name/Version but the store holds the full values):

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab08` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |
| **ScopeType** | `User` | — (status bar) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | — (status bar) |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `18`, `19`; the live status-bar value is masked by the secrets layer; the ScopeName is the signed-in user per `environments/current-environment.md`). The Designer session was already in User scope at T2 start (no scope dialog was re-prompted because the session scope was established earlier for the signed-in user).

**Key baseline fact for the persistence check:** the freshly created form's **Description is empty** (recorded from the store, not assumed) — the later change to the literal `Form Property Description Close Only Replay` is an unambiguous empty→literal transition. (Caption is also empty and remains an unchanged comparison property.)

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### T2.5 — T2 evidence (under `evidence/EXP-008-R2/`)

- `13-t2-wizard-selection-default.png` — Form Wizard Selection dialog (New Form radio checked; Category/Wizard empty).
- `14-t2-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch**.
- `15-t2-wizard-name-entered.png` — Build From Scratch wizard: Name `FX_FormPropertyLab08`, other defaults (BuildFromScratch / GridLeft / Default / empty).
- `16-t2-wizard-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked**.
- `17-t2-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `18-t2-form-created-loaded-clean.png` — New form `FX_FormPropertyLab08` loaded in the Designer (`?MGForm=FX_FormPropertyLab08`), form tab selected (5th of 5), Lab04/05/06/07 tabs still present, toolbar clean.
- `19-t2-baseline-properties-design-group.png` — Designer Properties, Design group: Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- `20-t2-select-form-lab08-exists-one.png` — Select Form dialog filtered to `FX_FormPropertyLab08` → exactly 1 row (store total 644).
- `21-t2-select-form-fx-inventory-thirteen-rows.png` — Select Form dialog, Filter `FX_` → exactly 13 `FX_` rows including `FX_FormPropertyLab08`.

### T2.6 — T2 observations / corrections

- **The Form Wizard Selection dialog is xtype `formwizard`, not an Ext `window`** (re-confirmed): `Ext.ComponentQuery.query('window')` does not find it; locate it by `ComponentQuery.query('formwizard')` or by title.
- **Wizard store field names:** Category combo store field = `CategoryName`; Wizard combo store field = `WizardName` (store loads only after a Category is selected) (re-confirmed).
- **The Designer URL drops `MGForm=` while the wizard is open** and restores `?MGForm=<new form>` after Finish+OK; the previously loaded form tabs (Lab04/05/06/07) are not affected by the wizard flow (re-confirmed).
- **Select Form client-side record ids are session-local** (e.g., `FX_FormPropertyLab08` = `extModel214-3226` this session) — Name + scope is the persistent identity (re-confirmed).
- **Synthetic `setValue` on the wizard Name combo worked** (editable combo, `forceSelection:false`); `combo.select(record)` worked for Category/Wizard (re-confirmed from EXP-008 T2).
- **Save Template is checked by default**; reliable toggle = `onBoxClick()` (re-confirmed).
- **The success dialog's OK button is not reachable via the window component's `buttons` map** in this build (the shared dialog `ext-comp-1009` carries multiple button sets — OK/Yes/No/Cancel — and `w.buttons` did not contain the active OK); the reliable path is a native Playwright click on the DOM button element (`#button-1013` this load).
- **The property grid is xtype `formpropertygrid`** (id `formpropertygrid-1135` in this session — same id as the EXP-008 session, since the Designer page was not reloaded); its store is a tree-shaped store whose root records carry `propId`/`disp`/`value`/`ro` plus a nested `properties` array. **Note:** the `disp` values carry a **leading space** (e.g. `" Design"`) — match on `propId` (e.g. `propId === 'Design'`) or trim `disp`; an exact `disp === 'Design'` match fails. The grid reflects the **active** form tab. `Ext.ComponentManager.each` does not iterate in this build (use `ComponentQuery.query('*')` or `Ext.getCmp`).
- **The `mgcombo` xtype is the wizard field combo** — `ComponentQuery.query('combo')` finds nothing in the wizard; query `'mgcombo'` instead (re-confirmed from EXP-008 T2, where the same fields were found by id).
- No User Preference was inspected or changed in T2; no unload was invoked; no form other than the new `FX_FormPropertyLab08` was created, modified, or deleted; `FX_FormPropertyLab01…07` and all non-`FX_` artifacts untouched; editing scope stayed **User** throughout.

## T4 — Description edit + ordinary Save

### T4.1 — Guard re-read (read-only; PASS — identical to T2 baseline)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab08`.
- **Loaded target** exactly `FX_FormPropertyLab08` (URL + property store `Name` + active form tab).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
- **Cleanliness:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; no visible windows.
- **Baseline (all equal to T2.4):** Name `FX_FormPropertyLab08`, Description **empty**, Caption **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Guard PASS** — no mutation performed until the edit. (evidence `22`.)

### T4.2 — Description edit (supported Designer property editor)

1. Located the Description value cell in the property grid `formpropertygrid-1135`: the row whose tree-column label is `Description`, value cell in column `pgvaluecolumn-1138` (cell `data-mgcompname="Design.Description"`), at viewport (870,195) 139×23 — **same cell position as EXP-008 T4**.
2. **Double-click** the value cell (native Playwright `mouse.dblclick` at cell center) → the grid's inline editor opened and was **focused** (`textfield-1139-inputEl`, an `x-form-text` at the cell position — same component id as EXP-008 T4).
3. Typed exactly `Form Property Description Close Only Replay`, then **Enter** to commit.
   - **Automation note (correction):** one intermediate automation pass timed out on a locator click while the inline editor was in the process of closing (Playwright reported "element is not visible" across retries); the subsequent state-first re-read found the edit **already committed** to the store (Description = the exact literal; Save/Regenerate enabled = dirty). The committed state was verified from the store before proceeding — no second edit was performed, and no property other than Description was touched.
4. Post-commit store read: `Description = "Form Property Description Close Only Replay"`; **all other Design properties unchanged** (Name, Caption empty, Version, Device Type, Form Type, Is Master identical to baseline). Toolbar Save/Regenerate **enabled** (dirty state) — expected after an edit. (evidence `23`.)

### T4.3 — Ordinary Designer Save (exactly one)

- Clicked the toolbar **Save** button (`mgtoolbarbutton-1085`, native Playwright click) — the ordinary Designer Save; no menu, no wizard, no unload.
- Result: **no dialog or window** appeared; toolbar Save and Regenerate returned to **disabled** — the Designer is **clean** again. No error, no confirmation prompt. (evidence `24`.)

### T4.4 — Post-Save verification (all comparison values re-read)

| Property | T2 baseline | Post-Save (T4) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab08` | `FX_FormPropertyLab08` | ✓ |
| **Description** | *(empty)* | **`Form Property Description Close Only Replay`** | ✓ (changed as intended, exact literal — verified character-for-character from the store) |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Description equals exactly `Form Property Description Close Only Replay`** (verified character-for-character from the property store, not assumed).
- **All other comparison properties remain equal to the T2 baseline.**
- **Designer is clean:** Save/Regenerate disabled, no visible windows, URL still `?MGForm=FX_FormPropertyLab08`, all 5 form tabs present (Lab04/05/06/07 untouched).
- The target is **left open and clean** (not closed, not reopened).

### T4.5 — T4 evidence (under `evidence/EXP-008-R2/`)

- `22-t4-pre-mutation-guard-pass.png` — Designer before the edit: clean, `?MGForm=FX_FormPropertyLab08`, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Properties Design group with Description empty.
- `23-t4-description-edited-dirty.png` — After the Description edit and Enter: Description cell shows `Form Property Description Close Only Replay`; toolbar Save/Regenerate enabled (dirty).
- `24-t4-after-save-clean-description-persisted.png` — After the ordinary Save: toolbar clean (Save/Regenerate disabled), Description cell still shows `Form Property Description Close Only Replay`, no dialogs.

### T4.6 — T4 observations / corrections

- **The supported property editor for a Form-level property is the inline grid editor** in `formpropertygrid`: double-click the value cell (column `pgvaluecolumn-1138`) of the property row → an `x-form-text` editor (`textfield-1139-inputEl` this session) opens focused in the cell → type → **Enter** commits to the store. No separate dialog or panel is required for a single-line property like Description (re-confirmed from EXP-008 T4).
- **Editing a property immediately enables the toolbar Save/Regenerate** (dirty indicator); a successful ordinary Save returns them to disabled (clean) with **no confirmation dialog** in this environment (re-confirmed).
- **The ordinary Save produced no visible confirmation and no error**; cleanliness is proven by the toolbar state (Save/Regenerate disabled) plus the store re-read, not by the absence of an error alone.
- **Only the Description changed**; every other comparison property is byte-identical to the T2 baseline after the Save.
- No User Preference was inspected or changed; no unload was invoked; no other Form property was edited; `FX_FormPropertyLab04/05/06/07` and all other FX_/non-FX_ artifacts untouched; editing scope stayed **User** throughout; the target was **not** closed or reopened.

## T5 — Close (Form-tab close control) + no-unload audit

### T5.1 — Guard re-read (read-only; PASS — identical to T4 post-Save state)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab08`.
- **Loaded target** exactly `FX_FormPropertyLab08` (URL + property store `Name` + active form tab).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
- **Cleanliness:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; no visible windows.
- **Description** exactly `Form Property Description Close Only Replay`; **all T2 comparison properties unchanged**.
- **Guard PASS** — no mutation performed until the close. (evidence `25`.)

### T5.2 — Task-local diagnostic network baseline (no API, no semantics)

- A task-local in-page diagnostic hook (passive observer of `XMLHttpRequest.open` and `fetch`, recording `{t, kind, method, url}` into `window.__netLog`) was **already active** in this Designer page (installed during the EXP-008 T5 close step; the Designer page was not reloaded since). Baseline snapshot: `window.__netLog.length = 19` at `t0 = 1790938304902` (page idle; the 19 pre-existing entries cover the EXP-008 tail + this run's wizard/save round-trips and are excluded from the close-window analysis). This is a **passive observer only** — it does not call, synthesize, or treat any endpoint as an API, and no cache/IDO semantics are inferred from it.

### T5.3 — Close `FX_FormPropertyLab08` normally (supported UI)

- Located the `FX_FormPropertyLab08` form tab and its **tab close button** (`.x-tab-close-btn`, viewport (688,68) 26×31 — same position as EXP-008 T5).
- **Single native Playwright click** on the tab close button (the supported "close this form tab" affordance) — no menu, no wizard, no unload command.
- Post-close read (after 2.5 s settle):
  - **`FX_FormPropertyLab08` tab is GONE** — form tabs now exactly `Form Property Lab Coupled Unload Replay` (Lab04), `FX_FormPropertyLab05`, `FX_FormPropertyLab06`, `FX_FormPropertyLab07`.
  - **URL changed** from `?MGForm=FX_FormPropertyLab08` to `?MGForm=FX_FormPropertyLab07` (Designer moved to the remaining adjacent tab; Lab07 now active).
  - **No visible windows** — **no unsaved-change prompt**, no dialog, no error.
  - **No mutation:** `FX_FormPropertyLab04`/`05`/`06`/`07` all still present and untouched; editing scope still **User** (`[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`); toolbar clean (Save/Regenerate disabled).
  - (evidence `26`.)

### T5.4 — Diagnostic network observation around the close (evidence only)

- Full task-local network log since baseline: **exactly 2 requests**, both `POST ../Designer/Form/GenerateServerEvent` (at Δt ≈ 15.7 s and 15.8 s after baseline — i.e., coincident with the close action). These are the ordinary Designer server-event round-trips for the close operation.
- **ClearCache-style requests observed around the close: NONE.** A case-insensitive filter for `clearcache` / `clear_cache` / `clear-cache` / `unload` / `globalform` / `global_form` over the since-baseline log returned **0 matches**.
- Recorded **as diagnostic evidence only** — no endpoint is treated as a supported API contract and no IDO-metadata or system-wide cache semantics are inferred. (The absence of a ClearCache-style request around this ordinary close is noted as an observation, not a claim about internal cache behavior.)

### T5.5 — No-unload audit: no explicit global-form-object unload invoked at any point in EXP-008-R2

Three independent, read-only audits were performed (no reopen, no mutation):

1. **Record audit:** every unload mention in this record is either (a) a **prohibition** in the Objective/In-scope/Out-of-scope text, (b) a **read-only** reference to the `Unload IDO Metadata With Forms` *preference* (read CHECKED in T1 and re-read in T7, never changed), or (c) an explicit **"did not open Form > Definition" / "did not invoke any unload command"** statement. **No EXP-008-R2 step invoked `Form > Definition > Unload All Global Form Objects`.** The Designer `Form` menu was opened **only** for the T6 reopen (recent-forms entry); its `Definition` submenu was **not opened and not used**.
2. **Network audit** (task-local log, T5.4): **no** ClearCache/unload-style request occurred in the close window (only 2 ordinary `GenerateServerEvent` POSTs). No unload marker was observed.
3. **Current Designer state audit** (read-only): **no menus open**, no visible windows, Designer clean (Save/Regenerate disabled), target closed, `FX_FormPropertyLab04`/`05`/`06`/`07` intact, scope still **User**. The `Form > Definition` menu was not opened and no unload command is in an activated state.

**Conclusion: no explicit global-form-object unload command has been invoked at any point in EXP-008-R2.** `FX_FormPropertyLab08` is left **CLOSED**.

### T5.6 — T5 evidence (under `evidence/EXP-008-R2/`)

- `25-t5-pre-close-guard-pass.png` — Designer before the close: clean, `?MGForm=FX_FormPropertyLab08`, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Description `Form Property Description Close Only Replay`, 5 form tabs (Lab08 active).
- `26-t5-after-close-target-closed-clean.png` — After the close: `?MGForm=FX_FormPropertyLab07`, `FX_FormPropertyLab08` tab gone (4 form tabs remain: Lab04/05/06/07), no visible windows, toolbar clean.

### T5.7 — T5 observations / corrections

- **The supported close affordance is the form tab's own close button** (`.x-tab-close-btn` inside the tab element); a single click closes the form tab. For a **clean** form (no unsaved changes) the close is immediate — **no unsaved-change prompt** appears. (Re-observed; consistent with EXP-008 T5 and EXP-007-R2 T5.)
- **After closing the active tab, the Designer auto-selects a remaining adjacent tab** and updates the URL `MGForm=` accordingly (here → `FX_FormPropertyLab07`). The closed form's tab is removed from the tab strip (re-confirmed).
- **An ordinary close of a clean form produced no ClearCache-style request** in this task-local observation (only 2 `GenerateServerEvent` POSTs). Recorded as diagnostic evidence only; **no** IDO-metadata or cache semantics inferred. (Same pattern as EXP-008 T5.)
- **The task-local in-page XHR/fetch hook persists across tasks on an un-reloaded Designer page** — it was installed during EXP-008 T5 and was still active for this replay; a fresh baseline snapshot (length marker) delimits the close window.
- No User Preference was inspected or changed; no unload was invoked; no Form was edited or Saved; `FX_FormPropertyLab04/05/06/07` untouched; editing scope stayed **User** throughout; the target was **not** reopened.

## T6 — Reopen (Designer Form menu) + recovery verification

### T6.1 — Pre-reopen state reconfirmation (read-only; PASS)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab07` (the remaining active tab after the T5 close).
- **`FX_FormPropertyLab08` is NOT open** — form tabs exactly `Form Property Lab Coupled Unload Replay` (Lab04), `FX_FormPropertyLab05`, `FX_FormPropertyLab06`, `FX_FormPropertyLab07`; `lab08Open = false`.
- **Designer clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; no visible windows; scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Task-local network hook still active; fresh baseline marker: `window.__netLog.length = 21` (the two T5 close `GenerateServerEvent` POSTs).
- (evidence `27`.)

### T6.2 — Reopen `FX_FormPropertyLab08` via the supported Designer UI path (no unload, no edit, no Save)

- **Supported path (same as EXP-008 T6 / EXP-007-R2 T8):** the Designer **`Form` menu → recent-forms entry**. Opened the Designer **Form** menu (top menu bar; the menu button is Ext component `button-1020` with `menu: menu-1021`) → menu `menu-1021` opened, showing (top→bottom): `Definition` (submenu — **not opened, not used**), `Sign Out`, then the **recent-forms list**: **`FX_FormPropertyLab08`** (`menuitem-1073` — same id as EXP-008 T6), `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `Form Property Lab Coupled Unload Replay`, `FX_FormPropertyLab03`, `Form Property Lab`, `FX_FormPropertyLab02`, `FX_VariableLab01`, `FX_ComponentLab01`. (evidence `28`.)
  - **Automation note (correction):** plain `page.mouse.click` on the Form menu button did not open the menu in two attempts; a `mouse.move` → `mouse.down` → `mouse.up` sequence on the button opened it. (Menu visibility was verified via the menu component's computed `visibility: visible`, since parked Ext menus retain positive bounding rects in the DOM.)
- **Single native click** on the **`FX_FormPropertyLab08`** recent-forms entry (`menuitem-1073`, at (1,113) 275×30) — the supported reopen affordance. **No** `Form > Definition` submenu was opened; **no** `Unload All Global Form Objects` was invoked; **no** property was edited; **no** Save was performed.
- Post-reopen read (after 3 s settle):
  - **URL** `?MGForm=FX_FormPropertyLab08` (Designer loaded the target).
  - **Form tab `FX_FormPropertyLab08` re-appeared** (5th of 5 tabs; Lab04/05/06/07 still present and untouched) and is selected.
  - **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
  - **Designer clean:** toolbar Save/Regenerate **disabled**; **no visible windows**; no error, no dialog, no prompt.
  - Property grid `formpropertygrid-1135` reflects the reopened active form.
  - (evidence `29`.)

### T6.3 — Recovery verification (identity + all comparison properties re-read)

**Identity (same baseline version):**
- **Form name** = `FX_FormPropertyLab08` (URL + property store `Name` + active tab — three agreeing surfaces).
- **ScopeType** = `User` (status bar).
- **ScopeName** = `anton.ramos@3mworks.com.ph` (status bar; the same ScopeName recorded in the T2 baseline).

**All comparison properties re-read from the property store `formpropertygrid-1135` (Design group):**

| Property | T2 baseline / T4 value | Reopened (T6) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab08` | `FX_FormPropertyLab08` | ✓ |
| **Description** | `Form Property Description Close Only Replay` (set in T4) | **`Form Property Description Close Only Replay`** | ✓ **recovered unchanged** (character-for-character from the store) |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Description equals exactly `Form Property Description Close Only Replay`** (verified character-for-character from the property store after the close-only reopen — **the core EXP-008-R2 result**).
- **All other comparison properties are equal to the T2 baseline.**
- **Designer is clean** (Save/Regenerate disabled, no windows, no error).
- The target is **left open and clean** for the final audit (not closed again).

### T6.4 — Diagnostic network observation around the reopen (evidence only)

- Task-local network log since the T6.1 baseline (length marker 21): **exactly 2 requests**:
  1. `POST ../Designer/Form/GetFormDesigner` — the reopen's form-definition fetch round-trip.
  2. `POST ../Designer/Form/GenerateServerEvent` — the ordinary Designer server-event round-trip.
- **ClearCache-style requests observed around the reopen: NONE.** A case-insensitive filter for `clearcache` / `clear_cache` / `clear-cache` / `unload` / `globalform` / `global_form` over the since-baseline log returned **0 matches**.
- Recorded **as diagnostic evidence only** — no endpoint is treated as a supported API contract and no IDO-metadata or system-wide cache semantics are inferred. (The absence of a ClearCache-style request around this close-only reopen is noted as an observation, not a claim about internal cache behavior.)

### T6.5 — T6 evidence (under `evidence/EXP-008-R2/`)

- `27-t6-pre-reopen-lab08-closed-clean.png` — Designer before the reopen: `?MGForm=FX_FormPropertyLab07`, `FX_FormPropertyLab08` not open (4 form tabs), toolbar clean, no windows.
- `28-t6-form-menu-recent-forms-lab08.png` — Designer **Form** menu open: `Definition` (submenu, unused), `Sign Out`, and the recent-forms list with **`FX_FormPropertyLab08`** at the top of the form entries.
- `29-t6-reopened-description-persisted-clean.png` — After the reopen: `?MGForm=FX_FormPropertyLab08`, form tab selected (5 tabs), toolbar clean, Properties Design group showing Description `Form Property Description Close Only Replay`, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T6.6 — T6 observations / corrections

- **The supported reopen path is the Designer `Form` menu → recent-forms entry** (the same path used in EXP-008 T6 and EXP-007-R2 T8). The recent-forms list is populated with the session's recently opened forms; clicking the target's entry reopens it in a new form tab. The `Definition` submenu (which contains `Unload All Global Form Objects`) sits above the recent-forms list but was **not** opened or used (re-confirmed).
- **The close-only reopen recovered the customized Description unchanged** — `Form Property Description Close Only Replay` persisted across a normal close + normal reopen with **no** `Unload All Global Form Objects` invocation and **no** ClearCache-style request observed. This is the primary EXP-008-R2 acceptance result.
- **The reopen issued exactly one `GetFormDesigner` fetch** (the form-definition load) plus one ordinary `GenerateServerEvent`; no ClearCache-style request. (Diagnostic-only; no cache/IDO semantics inferred.)
- **The property grid `formpropertygrid-1135` is reused** across the close/reopen (same component id); it reflects the newly active form tab (re-confirmed).
- **The Form menu button (`button-1020`) needed a `mouse.move`+`down`+`up` sequence** to open its menu in this session; plain clicks did not. Parked Ext menus keep positive bounding rects in the DOM — verify menu openness via computed `visibility` (or a screenshot), not rect alone.
- No User Preference was inspected or changed; no unload was invoked; no Form was edited or Saved; `FX_FormPropertyLab04/05/06/07` untouched; editing scope stayed **User** throughout.

## T7 — Final read-only audit + result classification

### T7.1 — Target still open, clean, persisted values intact (read-only)

- Tabs (same session; state persisted): Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab08`.
- **`FX_FormPropertyLab08` is OPEN** (active form tab; 5 tabs: Lab04/05/06/07/08) and **clean** (toolbar Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` both **disabled**; no visible windows; no error; no menus open).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
- **Persisted values re-read from the property store `formpropertygrid-1135` (Design group):**

| Property | T2 baseline / T4 value | Final (T7) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab08` | `FX_FormPropertyLab08` | ✓ |
| **Description** | `Form Property Description Close Only Replay` (set in T4) | **`Form Property Description Close Only Replay`** | ✓ **exact** |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- (evidence `29` re-verified in T7.1; no new screenshot needed — state re-read programmatically and identical.)

### T7.2 — Exactly one target + final inventory (supported Select Form store, read-only)

- Web Client **Select Form** dialog opened (empty filter) → full store scanned:
  - **Total = 644**; **`FX_` forms = 13**; **exactly 1 `FX_FormPropertyLab08`** (store index 282, record `{mgdata:"FX_FormPropertyLab08", text:"FX_FormPropertyLab08", id:"extModel214-3226"}`; Name exact = 1, Name CI = 1, Caption exact = 1, Caption CI = 1 — all the same single record).
  - **Final counts: 644 total / 13 `FX_` / 1 target** (unchanged from T2/T3-equivalent).
- Dialog closed via Cancel; Web Client verified clean (no windows, Save disabled). (evidence `30`.)

### T7.3 — `Unload IDO Metadata With Forms` re-read (same supported visible surface as T1; no change/Save)

- Web Client **Form > User Preferences** (`#mgmenubutton-1023` → `#menuitem-1043-itemEl`) → User Preferences workspace view (the same supported visible route as T1).
- Checkbox with boxLabel **`Unload IDO Metadata With Forms`** (component `ext-comp-4202` this load; numeric id drifts per load, boxLabel is the stable identity): **CHECKED** (`checked: true`, `getValue(): true`, `disabled: false`, `hidden: false`, on-screen rect `{x:770, y:119, w:320, h:27}` — genuinely rendered, same on-screen position as T1). **State unchanged from T1 (CHECKED/enabled).**
- **No toggle, no change to any other preference, no Save/OK.** Closed the view via its tab close (×) button (Playwright locator click) — **not** OK/Save; **no "save changes?" prompt appeared**; workspace returned to normal (no tabs, no windows, Save disabled → **no unsaved preference state**). (evidence `31`, `32`.)

### T7.4 — No explicit global-form-object unload was performed during EXP-008-R2 (re-audit)

- **Record re-audit:** the only unload mentions in this record are prohibitions, read-only `Unload IDO Metadata With Forms` *preference* references (T1/T7, never changed), and explicit "did not open Form > Definition / did not invoke any unload command" statements (T2/T4/T5/T6). **No EXP-008-R2 step invoked `Form > Definition > Unload All Global Form Objects`.**
- **Network re-audit** (task-local passive logs, T5 close + T6 reopen): no ClearCache/unload-style request in either window (only ordinary `GenerateServerEvent` / `GetFormDesigner` round-trips).
- **Current-state re-audit** (T7.1): no menus open, Designer clean, `Form > Definition` never opened in this experiment.
- **Conclusion: no explicit global-form-object unload command was performed at any point in EXP-008-R2.**

### T7.5 — Repository/worktree change confinement (read-only mtime audit)

- Worktree is **not** a git repository; audit by file modification time relative to the run boundary **2026-10-02 18:38:41**. *(Superseded by R2 below: the worktree **is** a git repository — branch `exp/EXP-008-R2`, HEAD `10322fa`. The git-based audit in R2 is authoritative and reaches the same confinement conclusion.)*
- **EXP-008-R2 knowledge-content files modified in-window — ONLY:**
  - `experiments/EXP-008-R2-clean-replay-form-description-recovery-across-ordi.md` (this record).
  - `evidence/EXP-008-R2/01…32` (30 screenshots; numbers 03 and 12 unused — no remembered-filter state was observed at preflight and the pre-mutation absence re-check was folded into the T1 preflight scan).
- **Distinguished as NOT EXP-008-R2 knowledge content (in-window mtimes are tooling/harness side effects, not experiment mutations):**
  - `tools/learning-harness/**` (harness runtime: briefs, coordinator/worker messages, transcripts, `events.jsonl`, `harness.sqlite`) — managed by the harness, operator-driven.
  - `evidence/playwright/page-*.yml` / console logs — auto-generated Playwright MCP artifacts, shared across experiments.
- **NOT modified (all predate the run start):** `AGENTS.md`, `opencode.json`, `environments/current-environment.md`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` records (newest pre-existing = `EXP-008-…md`). `claims/` empty (pre-existing).
- **Conclusion: repository/worktree changes attributable to this run are confined to `experiments/EXP-008-R2-…md` + `evidence/EXP-008-R2/`.** No recipe, environment, AGENTS.md, or other-experiment file was modified; no reusable recipe was promoted or created.

### T7.6 — T7 evidence (under `evidence/EXP-008-R2/`)

- `30-t7-final-select-form-644-13-1.png` — Select Form dialog, full list (644 records, filter empty); `FX_FormPropertyLab08` present once among the 13 `FX_` forms.
- `31-t7-user-prefs-unload-ido-metadata-checked-final.png` — User Preferences view: **`Unload IDO Metadata With Forms` visibly rendered and CHECKED** (read-only; no change made).
- `32-t7-webclient-after-prefs-closed-clean.png` — Web Client after closing User Preferences via tab × (no Save): no tabs, no windows, Save disabled (no unsaved state).

### T7.7 — T7 observations / corrections

- **The final audit is fully read-only**: no Mongoose artifact was created, modified, deleted, saved, closed, reopened, or unloaded; no User Preference was changed or saved; no scope switch.
- **The `Unload IDO Metadata With Forms` preference is unchanged** (CHECKED/enabled, same on-screen rect as T1) and the preferences surface was closed without Save (no unsaved state) — consistent with T1.
- **Preference checkbox first-read timing (correction):** the first read immediately after opening the User Preferences view returned a stale mid-render state (`hidden: true`, `disabled: true`, `checked: false`, zero rect); a re-read a few seconds later (and the T7 re-read) returned the stable rendered state (`hidden: false`, `disabled: false`, `checked: true`, non-zero rect at the same on-screen position as EXP-008 T1/T7). Lesson: after opening the User Preferences view, wait for the render to settle before reading the checkbox state.
- **The close-only-reopen recovery was reproduced on a second, independent form** (`FX_FormPropertyLab08`, literal `…Close Only Replay`) in a fresh worker context, with the same semantic sequence, the same supported close/reopen affordances, and the same diagnostic network pattern (2× `GenerateServerEvent` around the close; `GetFormDesigner` + `GenerateServerEvent` around the reopen; 0 ClearCache-style requests in both windows).

## Acceptance table (final)

| AC | Requirement | Task | Result | Evidence |
|---|---|---|---|---|
| AC-1 | Read-only preflight: current User editing scope proven **User**; `FX_FormPropertyLab08` proven **absent** (exact + CI, store + UI) | T1 | **PASS** | `01`–`08`; T1 |
| AC-2 | Read-only confirmation of `Unload IDO Metadata With Forms` state (**CHECKED/enabled**), not changed | T1 | **PASS** | `09`–`11`; T1.12 |
| AC-3 | Create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab08` (Save Template unchecked) + record untouched baseline; prove exactly one (643→644, `FX_` 12→13) | T2 | **PASS** | `13`–`21`; T2 |
| AC-4 | Change **only** Form-level Description to exactly `Form Property Description Close Only Replay`; one ordinary Save to a demonstrably clean state; all comparison properties unchanged | T4 | **PASS** | `22`–`24`; T4 |
| AC-5 | Close `FX_FormPropertyLab08` normally (no unsaved-change prompt, no mutation) | T5 | **PASS** | `25`–`26`; T5 |
| AC-6 | **Do not** invoke `Form > Definition > Unload All Global Form Objects` (at any point) | T5 (audit) | **PASS** | T5.5; T7.4 |
| AC-7 | Reopen the exact same customized version by Form name + ScopeType + ScopeName (no unload) | T6 | **PASS** | `27`–`29`; T6 |
| AC-8 | Verify Description + all recorded comparison properties recovered unchanged after the close-only reopen | T6 | **PASS** | `29`; T6.3 |
| AC-9 | Final read-only audit: target still open/clean with values intact; exactly one target (644/13/1); preference unchanged (read-only, closed without Save); no unload performed | T7 | **PASS** | `30`–`32`; T7.1–T7.4 |
| AC-10 | Repository/worktree changes confined to the EXP-008-R2 record + `evidence/EXP-008-R2/`; no recipe/environment/AGENTS.md/other-experiment change; no recipe promoted | T7 | **PASS** | T7.5 (mtime audit) |

**All acceptance criteria AC-1 … AC-10 are satisfied.**

## Result classification

- **Classification: `replay_verified`** for the EXP-008 **Description-persistence-across-close-only-reopen** procedure — this clean independent replay (second execution, new form `FX_FormPropertyLab08`, new literal `Form Property Description Close Only Replay`, fresh worker context) reproduced the EXP-008 result end-to-end with all AC-1…AC-10 PASS. Per the coordinator instruction, this success is treated **only as replay verification of repeatable recovery** — it does **not** establish durable storage persistence, cache eviction, or IDO-metadata unloading, and **no reusable recipe is promoted or modified**.
- **What this replay shows:** the literal User-scope Form-level Description value `Form Property Description Close Only Replay` on `FX_FormPropertyLab08` **recovered unchanged across this specific ordinary close/reopen path** (normal form-tab close → Designer `Form`-menu recent-forms reopen), with **no** `Form > Definition > Unload All Global Form Objects` invocation and **no** ClearCache-style request observed around the close or the reopen. All recorded comparison properties (Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) also recovered unchanged. The procedure is now reproducible across two independent executions (EXP-008 on `FX_FormPropertyLab07` / `Form Property Description Close Only`; EXP-008-R2 on `FX_FormPropertyLab08` / `Form Property Description Close Only Replay`).
- **What this does NOT establish (explicit non-claims):**
  - It does **not** establish durable Forms-database persistence or identify the storage layer that supplied the recovered Description.
  - It does **not** establish IDO-metadata trigger behavior (whether/why any IDO metadata is or is not unloaded on an ordinary close).
  - It does **not** establish internal cache semantics (the absence of a ClearCache-style request is a diagnostic observation, not a claim about any cache mechanism).
  - It does **not** establish equivalence between Web Client Form close and Web Designer Form-tab close.
  - It does **not** generalize to other Form properties, other scopes (Site/Group/Vendor Default), other users, other tenants, or other Mongoose releases.
- **Knowledge state:** the EXP-008 **Description-persistence-across-close-only-reopen** procedure is **replay_verified** (two independent complete executions: EXP-008 + EXP-008-R2, both with recovery verified). No reusable recipe is promoted from this replay.

## Knowledge state (final)

- `FX_FormPropertyLab08` **exists, exactly one**, User scope, ScopeName `anton.ramos@3mworks.com.ph`, created via the verified recipe with Save Template unchecked; store 643→644, `FX_` 12→13; baseline Description **empty**, Caption **empty**: **observed** (T2).
- Full pre-Description baseline (Name/Description/Caption/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName) as tabled in T2.4: **observed** (T2).
- The Form-level **Description can be edited via the inline property-grid editor** (double-click value cell → type → Enter) and **persists across an ordinary Designer Save** with all other comparison properties unchanged: **replay_verified** (EXP-008 T4 + EXP-008-R2 T4).
- `FX_FormPropertyLab08` now has Description = `Form Property Description Close Only Replay` (User scope, ScopeName `anton.ramos@3mworks.com.ph`), saved, closed, reopened, and **left open and clean**: **observed** (T4–T7).
- **The close-only-reopen recovery is repeatable:** the customized Description recovered unchanged across an ordinary form-tab close + Designer Form-menu recent-forms reopen, with all comparison properties unchanged, in **two independent executions** (EXP-008 + EXP-008-R2): **replay_verified** (the core result of this replay).
- **No ClearCache-style request** was observed around the ordinary close (2× `GenerateServerEvent`) or the close-only reopen (`GetFormDesigner` + `GenerateServerEvent`) in either execution: **observed** (T5/T6, diagnostic-only; no cache/IDO semantics inferred).
- **No explicit global-form-object unload command was invoked at any point in EXP-008-R2** (record + network + current-state audit): **observed** (T5.5, T7.4).
- `Unload IDO Metadata With Forms` preference is **CHECKED/enabled** for this user — re-verified read-only in T1 and T7 via the supported visible Web Client `Form > User Preferences` route; **left unchanged**: **observed** (re-confirmed; preference gate PASS both times).
- Supported visible route for the preference: Web Client `Form > User Preferences` (`#menuitem-1043-itemEl`) → workspace view (checkbox visibly rendered at the same on-screen position as EXP-008 T1/T7); the preference component's numeric id drifts per load (`ext-comp-3927` T1, `ext-comp-4202` T7 this run); the boxLabel is the stable identity; **wait for the render to settle before reading the checkbox** (stale mid-render first read observed): **observed** (re-confirmed + new timing correction).
- The Designer **Form menu → recent-forms entry** is the supported reopen path; the `Definition` submenu (containing `Unload All Global Form Objects`) can be avoided entirely; the Form menu button (`button-1020`) may need a `mouse.move`+`down`+`up` sequence to open in this session; parked Ext menus keep positive DOM rects — verify via computed `visibility`: **observed** (T6).
- The ordinary form-tab close of a **clean** form is immediate (no unsaved-change prompt); the Designer auto-selects a remaining adjacent tab and updates `MGForm=`: **observed** (re-confirmed; consistent with EXP-008 T5 / EXP-007-R2 T5).
- The task-local in-page XHR/fetch hook persists across tasks on an un-reloaded Designer page; use a length-marker baseline to delimit each action window: **observed** (T5/T6).
- The property grid `formpropertygrid` tree store: `disp` values carry a leading space (match on `propId` or trim); the grid reflects the active form tab and is reused across close/reopen; `Ext.ComponentManager.each` does not iterate: **observed** (re-confirmed + new leading-space correction).
- The success dialog `ext-comp-1009` OK button is not in the window component's `buttons` map; click the DOM button element (`#button-1013` this load): **observed** (T2).
- The Select Form dialog remembers its filter across close/reopen within the same Web Client session; in this run it reopened **empty** (as left by EXP-008 T7): **observed** (re-confirmed).
- Filter store reload requires real input events; `onBoxClick()` is the reliable Case Sensitive toggle; re-read control state before/after each toggle in this persistent session: **observed** (re-confirmed).
- The EXP-008 **Description-persistence-across-close-only-reopen** procedure is **replay_verified** (EXP-008 + EXP-008-R2). It remains distinct from the EXP-007 coupled-unload procedure (`replay_verified` there as well); the two are not assumed equivalent.

## Open questions / blockers

- None blocking. All ten acceptance criteria PASS; the experiment is complete.
- `FX_FormPropertyLab08` is left **open and clean** in the Designer tab (alongside the Lab04/05/06/07 leftovers from EXP-006-R2/EXP-007/EXP-007-R2/EXP-008); future tasks must not modify them and should account for them in the Designer's recent-forms list.
- Whether any ClearCache-style request is observed around the close/reopen sequence remains **diagnostic-only** (none observed in either execution); no cache or IDO-metadata semantics are claimed or open for this experiment.
- Durable Forms-database persistence and the storage layer behind the recovered Description remain **out of scope and unclaimed** by design.

## Reconciliation — coordinator cycle 2 (run `R-20261002-183841-C5B6`)

This section is a **documentation-only** reconciliation performed in a fresh worker context (cycle 2) after the T1–T7 record was written. It performs **no Mongoose mutation**, creates **no new Mongoose evidence**, and changes **only this record**. It (R1) re-establishes the no-unload result from the record's action history — **not** from network signatures, (R2) runs a fresh git-based worktree audit, and (R3) reconciles the already-captured final evidence.

### R1 — No-unload audit (record-based; not from network signatures)

**Audit basis:** the EXP-008-R2 action history in this record, from experiment start (T1 preflight) through the completed reopen (T6) and final audit (T7) — every statement referencing an unload, the `Form` menu, or the `Definition` submenu. Network observations are deliberately **excluded** as the basis (per the coordinator instruction); they are referenced only as corroborating context already recorded in T5.5/T7.4.

**Finding — every unload reference in the record is one of:**
1. A **prohibition** in the Objective / In-scope / Out-of-scope text ("do not invoke `Form > Definition > Unload All Global Form Objects`").
2. A **read-only reference to the `Unload IDO Metadata With Forms` *preference*** (T1.12, T7.3) — a User Preference checkbox read CHECKED and never changed; this is **not** the unload command.
3. An **explicit negative statement** that no unload was invoked and the `Form > Definition` submenu was not opened (T2.6, T4.6, T5.5, T5.7, T6.2, T6.6, T7.4).

**The only `Form`-menu usage in the entire experiment** was the T6 reopen, which opened the Designer `Form` menu and clicked the **recent-forms entry** `FX_FormPropertyLab08` (`menuitem-1073`). The `Definition` submenu (the only location of `Unload All Global Form Objects`) sits above the recent-forms list and was **explicitly not opened and not used** (T6.2, T6.6). No other menu path that could reach an unload command was exercised.

**Result: `Form > Definition > Unload All Global Form Objects` was NEVER invoked at any point in EXP-008-R2.** This is established from the record's action history (the explicit per-task negative statements + the fact that the sole `Form`-menu use was the recent-forms reopen with the `Definition` submenu never opened), **not** from network signatures. **AC-6 re-confirmed.**

### R2 — Fresh git-based worktree audit (supersedes the mtime audit)

**Correction / supersession:** the T1 preflight ("Repository / worktree starting state") and T7.5 state that the worktree "is **not** a git repository." That statement is **incorrect** and is **superseded** by this fresh audit: the worktree **is** a git repository.

**Fresh git audit (run now, after the record was written):**
- Toplevel `C:/AI/mongoose-factory`; **branch `exp/EXP-008-R2`**; **HEAD `10322fa`** (`harness: context/briefs update`).
- `git status --porcelain` → **exactly two untracked paths and nothing else**:
  - `?? evidence/EXP-008-R2/`
  - `?? experiments/EXP-008-R2-clean-replay-form-description-recovery-across-ordi.md`
- `git diff --cached --name-only` (staged) → **empty**; `git diff --name-only` (unstaged tracked) → **empty**. No tracked file was staged or modified.
- Committed changes since the initial import (`7d832a6`) are **only** under `tools/learning-harness/**` (commits `813e779`, `10322fa`: `briefs/EXP-008-R2.brief.json`, `context/coordinator-context.md`, `history/…-before.md`, `src/git.ts`, `test/git.test.ts`) — **harness runtime, operator-driven, not experiment knowledge content**.
- `.gitignore` excludes `evidence/playwright/`, `tools/learning-harness/data|node_modules|dist|`, `harness.config.json`, and all secrets — so Playwright snapshots and harness runtime state are outside the tracked worktree by design.

**Result — confinement proven (authoritative, git-based):** the only uncommitted worktree changes are the two allowed EXP-008-R2 paths (`experiments/EXP-008-R2-…md` + `evidence/EXP-008-R2/`); no tracked file was modified or staged; the only committed delta since import is harness runtime under `tools/learning-harness/**`. **No recipe, environment, `AGENTS.md`, other-experiment, or non-`FX_` file was modified; no reusable recipe was promoted or created.** This git-based proof **supersedes and confirms** the earlier mtime-based audit (T7.5). **AC-10 re-confirmed.**

### R3 — Final-evidence reconciliation (existing evidence; no new Mongoose evidence created)

Reconciled against the already-captured screenshots (read-only; existing evidence was sufficient — **no new Mongoose evidence was created**):

- **User Preference (AC-2 value, closed without Save):**
  - `31-t7-user-prefs-unload-ido-metadata-checked-final.png` — User Preferences (Behavior): **`Unload IDO Metadata With Forms` visibly CHECKED** (blue check) — equals the AC-2 value (CHECKED/enabled), unchanged from T1.
  - `32-t7-webclient-after-prefs-closed-clean.png` — Web Client after closing User Preferences via its tab × (not OK/Save): no tabs, no windows, toolbar Save disabled → **no unsaved preference state**. Confirmed.
- **Reopened Form identity + recovery (core result):**
  - `29-t6-reopened-description-persisted-clean.png` — Designer, `FX_FormPropertyLab08` active (5th of 5 form tabs); Properties/Design: Name `FX_FormPropertyL…`, Description `Form Property Des…`, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar Save disabled (clean).
  - Full store-verified values (character-for-character, per T6.3/T7.1): **Name = `FX_FormPropertyLab08`**, **Description = `Form Property Description Close Only Replay`** (exact), **ScopeType = `User`**, **ScopeName = `anton.ramos@3mworks.com.ph`** (same as the T2 baseline), Caption empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True` — **all comparison properties unchanged**; **Designer clean**. Confirmed.
- **Final inventory:** `30-t7-final-select-form-644-13-1.png` — Select Form dialog open (empty filter, full list; Case Sensitive off, Starts With off) — the visual basis for the store scan **644 total / 13 `FX_` / 1 `FX_FormPropertyLab08`** (T7.2). Confirmed.

### R4 — Reconciliation conclusion

- **No-unload (R1):** `Form > Definition > Unload All Global Form Objects` was **never invoked** in EXP-008-R2 (record-based; **AC-6 re-confirmed**).
- **Worktree confinement (R2):** experiment-attributable changes are confined to `experiments/EXP-008-R2-…md` + `evidence/EXP-008-R2/` (git-based; **AC-10 re-confirmed**). The earlier "not a git repository" statement is **superseded** — the worktree **is** a git repository (branch `exp/EXP-008-R2`, HEAD `10322fa`).
- **Final evidence (R3):** the already-captured evidence confirms the preference is CHECKED (= AC-2) and was closed without Save, and the reopened `FX_FormPropertyLab08` has the exact Description with all comparison properties unchanged and a clean Designer. Existing evidence was sufficient; **no new Mongoose evidence was created**.
- **No Mongoose mutation** was performed in this reconciliation; **only this record** was changed (documentation-only). The experiment result is unchanged: **all AC-1…AC-10 PASS; `replay_verified`.**

## T1 — Stopped here (experiment complete)

Did **not** modify any Mongoose artifact other than creating `FX_FormPropertyLab08` and editing its Description (the two authorized mutations); did **not** change or Save any User Preference; did **not** invoke any unload command; did **not** edit Caption or any other Form property; did **not** touch `FX_FormPropertyLab01…07` or any non-`FX_` artifact; did **not** switch scope; did **not** promote or modify any reusable recipe. `FX_FormPropertyLab08` is left **open and clean**. **EXP-008-R2 is COMPLETE** (all AC-1…AC-10 PASS; result classified `replay_verified` for the close-only-reopen procedure, with the explicit non-claims above).