# EXP-006-R2 — Clean Replay: Literal Form Caption Persistence Across Documented Coupled Unload (FX_FormPropertyLab04)

Status: **COMPLETE — replay_verified. T7 (final read-only audit) done: exactly one `FX_FormPropertyLab04` in the FX_ inventory (9 `FX_` forms of 640 total); persisted Caption `Form Property Lab Coupled Unload Replay` confirmed in the authoritative form definition (Designer); `Unload IDO Metadata With Forms` re-verified CHECKED/enabled with no unsaved User Preference mutation; worktree changes confined to this record + `evidence/EXP-006-R2/` (no recipe/environment/AGENTS.md changes). All acceptance checks AC-1…AC-9 PASS → the EXP-006 literal User-scope Caption persistence procedure across the documented coupled unload is **replay_verified** (second clean independent execution on `FX_FormPropertyLab04`). Observed divergence (mechanism NOT proven): the Web Client `GetAllForms` form-list projection shows the Name fallback for lab04 while the persisted form definition shows the Caption (the Caption IS persisted). Prior: T6 reopen + Caption persisted; T5 unload invoked exactly once (single `POST /DesignerSession/ClearCache` → 200 `{"Success":true}`); T4 close + preference gate PASS; T3 Caption saved clean; T2 form created (exactly one; store 639→640); T1 target proven absent.**
Date: 2026-10-02
Mode: LEARNING MODE — clean replay in a fresh worker context of the EXP-006 procedure on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab04`.
Purpose: Replay the EXP-006 literal-Caption coupled-unload procedure on a new form: create `FX_FormPropertyLab04` via the verified basic-form recipe, change only its literal Caption to `Form Property Lab Coupled Unload Replay`, ordinary-save to clean, close, read (not change) `Unload IDO Metadata With Forms` and require it CHECKED/enabled before proceeding, invoke the 2026.09.08 Form > Definition global-Form-object unload exactly once, reopen the same User-scope version, and verify Caption persistence + unchanged comparison properties. If the preference is not CHECKED before the unload, the replay stops as **BLOCKED** without changing it or invoking the unload.

## Objective

In a fresh worker context, reproduce the EXP-006 procedure on a new User-scope classic BuildFromScratch Form `FX_FormPropertyLab04`: prove the target does not already exist, create it using the verified basic-form recipe, record its exact User-scope identity and baseline comparison properties, change only its literal Caption to `Form Property Lab Coupled Unload Replay`, ordinary-save to a clean state, close the Form, read but do not change `Unload IDO Metadata With Forms` (require CHECKED/enabled before proceeding), invoke the actual 2026.09.08 Form > Definition global-Form-object unload command exactly once, reopen the exact same User-scope Form version, verify that the Caption persisted and comparison properties are unchanged, then perform a final read-only browser/repository audit.

In scope: read current browser and repository state before mutation; confirm `FX_FormPropertyLab04` does not already exist; create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab04` using `recipes/forms/create-basic-form.md`; record baseline Form name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, and Is Master before the Caption edit; change only the Form-level literal Caption to `Form Property Lab Coupled Unload Replay`; ordinary Designer Save with clean-state verification; close the Form through supported UI; read (not change) `Unload IDO Metadata With Forms` and prove it is CHECKED/enabled before any unload; if not CHECKED/enabled, stop as BLOCKED before invoking any unload; if CHECKED/enabled, invoke the actual Form > Definition global-Form-object unload exactly once (permitting its documented global/cache-wide side effects, including incidental IDO-metadata clearing from the existing enabled preference); reopen exactly `FX_FormPropertyLab04` (ScopeType=User, same ScopeName); compare persisted Caption and all recorded comparison properties against the pre-edit baseline; final read-only browser/repository audit with evidence under `evidence/EXP-006-R2/`; if every acceptance check passes, record the EXP-006 literal User-scope Caption persistence procedure across the coupled unload as replay-verified.

Out of scope: investigating whether ordinary Form close, explicit global-object unload, or both trigger IDO-metadata unloading; changing any User Preference (including `Unload IDO Metadata With Forms`); continuing or working around EXP-004 Form-variable persistence; editing `FX_FormPropertyLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, or any other existing Form; Translatable Strings, localization, multilingual Caption behavior, or string-resource creation; components, bindings, validators, event handlers, scripts, methods, expressions, data sources, or IDO configuration; changing any Form property other than Caption; changing editing scope away from User; direct database edits, undocumented APIs, manual metadata manipulation, or reverse-engineered internal events; using the unload operation as a save or persistence mechanism; testing a non-coupled unload if the preference is not CHECKED.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Web Client iframe title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`).
- Browser state at preflight start (inspected first; **no login performed — session already authenticated**): two tabs:
  - Tab 0: Mongoose Web Client (portal), signed in — user badge `<username> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Ext `userInfo` menu button; username value masked by the secrets layer, not read or printed). **No form open** (main area empty, no form tabs); toolbar **clean** (Save disabled); **no** `portal-notification` banner; **no** visible Ext windows. URL carries the leftover `favoriteContext=UserPreferences` param from EXP-006 T8 (display-only; no form tab exists for it).
  - Tab 1: **stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` → HTTP **403** `{"message":"Missing Authentication Token"}`. This is a leftover of the EXP-006 T8 SLO-recovery navigation attempts (direct portal-root navigation has no tenant/session context). It is **not** a Designer tab; **no Designer tab is currently open** at preflight start.
- **Target form `FX_FormPropertyLab04` does NOT exist** — Select Form full-store scan (639 records) found 0 exact and 0 case-insensitive matches; UI filter searches in both case modes returned 0 rows (method and AC-1 evidence below).
- Existing `FX_` forms (**exactly 8**, store indices in `mgdata` order): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_ComponentLab02` (282), `FX_ComponentLab01` (283), `FX_FormPropertyLab02` (311, Caption `Form Property Lab Replay`), `FX_FormPropertyLab03` (312, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (313, Caption `Form Property Lab`).
- Form-count reconciliation: 639 (EXP-006 T8 final audit) → **639 now** (no growth); the 8 `FX_` forms are exactly the EXP-006 T8 post-creation set (no additions, no deletions). Consistent; no unexplained artifacts.
- Known from EXP-006 (T5/T6/T8, **not re-inspected in this preflight** — re-inspection is a later task of this replay): the `Unload IDO Metadata With Forms` User Preference is **CHECKED (enabled)** for this user, and the exact 2026.09.08 unload command label under Form > Definition is **`Unload All Global Form Objects`**. Both findings are carried over as *observed in EXP-006* and must be re-verified read-only in this replay before the unload step; the preference must not be changed, and the label must be re-observed (not assumed) in this replay's UI.
- No Mongoose artifact was created, modified, or deleted during this preflight. No User Preference was inspected or changed. No unload command was invoked. No form was opened from the Select Form dialog. No Designer session was opened. Editing scope unchanged.

## Preflight method (T1)

1. Inspected repository state: `experiments/` (format references `EXP-006-…md`, `EXP-005-R2-…md`), `recipes/forms/create-basic-form.md` (read in full — status **verified**, two successful executions), `environments/current-environment.md`. Worktree is not a git repository; starting-state audit by file mtime (see below).
2. Inspected current browser state (2 tabs; Tab 0 = authenticated Web Client, Tab 1 = stray 403 portal-root tab) — **no login performed**. Screenshot of the Web Client (evidence `01`).
3. Confirmed Web Client iframe state programmatically (Ext present; title = config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; user badge present; no banner; no form tabs; Save disabled; no visible windows).
4. In the Web Client, clicked **Open** (native Playwright click on `mgtoolbarbutton-1101`) → **Select Form** dialog (window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Filter By combo `combo-1145`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147` — same IDs as the EXP-006 session).
5. Observed the dialog reopened with a **remembered filter** from EXP-006 T8 (Filter = `UserPreferences`, Filter By = **Name**/`mgdata`, Case Sensitive off, Starts With off) → store showed only **1 record** (`UserPreferences`). Screenshot `02`.
6. Cleared the filter through the UI (focus `textfield-1143` input, Ctrl+A, Delete — real key events) → store reloaded to the full list, **639 records**.
7. **AC-1 existence proof (store-level, authoritative):** scanned the entire Select Form store (all **639** records, field `mgdata`): **0 exact** matches for `FX_FormPropertyLab04`, **0 case-insensitive** matches (`toLowerCase()` comparison); enumerated all 8 `FX_`-prefixed records (indices above); near-miss scan for `formpropertylab` (case-insensitive substring) matched only `FX_FormPropertyLab02` (311), `FX_FormPropertyLab03` (312), `FX_FormPropertyLab01` (313).
8. **AC-1 existence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab04` into the Filter field (Filter By = Name, Case Sensitive **off**, real key events) → store reloaded to **0 records** (evidence `03`).
9. **Positive control (UI-level):** cleared and typed `FX_FormPropertyLab` (same mode) → exactly **3 rows**: `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — proves the filter mechanism works and that only the 01/02/03 variants exist (evidence `04`).
10. **UI-level case-sensitive check:** toggled **Case Sensitive on** via the checkbox's own `onBoxClick()` handler (the reliable path per EXP-006 T1; `aria-checked` went `false`→`true`, `getValue()`→`true`) and re-ran the `FX_FormPropertyLab04` filter → **0 records** (evidence `05`).
11. Restored the dialog to its original state: Case Sensitive back **off** (`onBoxClick()` again), filter cleared via real key events → full store restored, **639 records**, both checkboxes off.
12. **Visual inventory:** filtered `FX_` (Filter By = Name, real key events) → exactly **8 rows** rendered in the grid (evidence `06`); cleared the filter again (639 records) and closed the dialog with **Cancel** (native Playwright click). Verified the Web Client returned to its original state: no visible windows, Save disabled (evidence `07`).
13. Audited the worktree starting state by mtime (see below).

## AC-1 evidence — pre-mutation absence of `FX_FormPropertyLab04`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store | Store scan of all 639 records, field `mgdata`, `=== 'FX_FormPropertyLab04'` | **0 matches** |
| Case-insensitive, whole store | Store scan, `mgdata.toLowerCase() === 'fx_formpropertylab04'` | **0 matches** |
| UI filter, case-insensitive (Case Sensitive off, Filter By Name) | Dialog filter `FX_FormPropertyLab04` | **0 rows** (evidence `03`) |
| UI filter, case-sensitive (Case Sensitive on, Filter By Name) | Dialog filter `FX_FormPropertyLab04` | **0 rows** (evidence `05`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` | **3 rows**: `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` (evidence `04`) |
| Visual, full `FX_` inventory | Dialog filter `FX_` | exactly 8 `FX_` rows, no `FX_FormPropertyLab04` (evidence `06`) |

Case-insensitive matching was explicitly accounted for in three independent ways (store-level `toLowerCase` scan, UI filter with Case Sensitive off, and the positive control), not relied on a single exact-case filter.

## Repository / worktree starting state (T1)

- Worktree is **not** a git repository; audit by file modification time.
- **New in this preflight (T1 window, 2026-10-02 ~10:35–10:38):** only `evidence/EXP-006-R2/01…07` (7 screenshots) and this record file.
- **Most recent prior content:** `experiments/EXP-006-literal-form-caption-persistence-across-documented.md` (mtime 2026-10-02 10:22:33 — its T9 completion; unchanged since) and `evidence/EXP-006/*` (34 screenshots, last 10:14:05).
- **NOT modified (all predate the EXP-006 window, mtime 2026-09-30):** `AGENTS.md`, `opencode.json`, `environments/current-environment.md`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md`.
- `evidence/playwright/` = auto-generated Playwright snapshot artifacts (shared across experiments); `tools/learning-harness/` = harness runtime — neither is EXP-006-R2 knowledge content.
- **Conclusion:** worktree starting state is clean; no recipe, environment, or AGENTS.md file was modified by this preflight.

## Observations

- **Select Form dialog remembers its filter** across dialog close/reopen within the same Web Client session: it reopened with the EXP-006 T8 filter (`UserPreferences` / Name) still applied, showing 1 record (re-confirms the EXP-005-R2/EXP-006 T1 note). Cleared via real key events (focus, Ctrl+A, Delete); the store reloaded to 639.
- **Filter store reload is driven by real input events** (re-confirmed): `page.keyboard.type()` / Delete reloaded the store each time; no programmatic `setValue` was used.
- **Case Sensitive checkbox (`mgDlgCbx-1146`)**: the component's own `onBoxClick()` handler toggled it consistently in both directions (`aria-checked` false→true→false, `getValue()` true→false) — re-confirms the EXP-006 T1 finding that `onBoxClick()` is the reliable toggle path (the `inputEl` is covered by a `displayEl`).
- Select Form dialog control IDs this session: window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Filter By combo `combo-1145` (value `mgdata` = Name), checkboxes `mgDlgCbx-1146` (Case Sensitive) / `mgDlgCbx-1147` (Starts With) — **identical to the EXP-006 session**.
- `Ext.ComponentQuery.query('grid', { root: win })` returned nothing again (the `root` option does not filter as expected in this build); direct `Ext.getCmp('grid-1136')` worked. `grid.store.data` is not a plain array in this build — iterate with `grid.store.each(...)`.
- **Tab 1 is a dead 403 tab** (bare portal root, "Missing Authentication Token") — a leftover of the EXP-006 T8 SLO-recovery navigation; it holds no session state and no Designer. No Designer tab is open at preflight start; the Designer will be opened fresh in a later task (per the recipe, via the Web Client Designer split button, expecting the "Identify Your Editing Scope" dialog to confirm **User** scope).
- Console: 0 errors; 1 pre-existing benign portal warning (Content Catalog "Template URL missing for view Home", timestamped before this preflight) — unrelated to Mongoose.
- No Mongoose artifact was created, modified, or deleted; no User Preference was inspected or changed; no unload was invoked; no form was opened from the dialog; the Select Form dialog was left in its original state (filter empty, both checkboxes off) and closed via Cancel.

## Evidence (under `evidence/EXP-006-R2/`)

- `01-preflight-webclient-state.png` — Web Client at preflight start: signed in (user badge visible), no form open, toolbar clean (Save disabled), no notification banner, no dialogs.
- `02-preflight-select-form-remembered-filter.png` — Select Form dialog reopened with the remembered EXP-006 T8 filter (Filter `UserPreferences`, Filter By Name, both checkboxes off) → 1 record only.
- `03-select-form-filter-lab04-case-insensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab04`, Filter By Name, Case Sensitive **unchecked** → grid empty (0 records).
- `04-select-form-filter-lab-prefix-three-rows.png` — Select Form dialog, Filter `FX_FormPropertyLab` (positive control) → exactly 3 rows: `FX_FormPropertyLab02` (Caption `Form Property Lab Replay`), `FX_FormPropertyLab03` (Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (Caption `Form Property Lab`).
- `05-select-form-filter-lab04-case-sensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab04`, Case Sensitive **checked** → grid empty (0 records).
- `06-select-form-fx-inventory-eight-rows.png` — Select Form dialog, Filter `FX_` → exactly 8 `FX_` rows: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — **no `FX_FormPropertyLab04`**.
- `07-webclient-after-dialog-close.png` — Web Client after Cancel: original state restored (no form tabs, no dialogs, Save disabled).

## Recipe availability for the next task

`recipes/forms/create-basic-form.md` was read in full during this preflight: status **verified** (EXP-002 + EXP-002-R2, persistence verified across full page reload in both). Key steps for creating `FX_FormPropertyLab04`: Web Client Designer split button (`mgtoolbarbutton-1126`) → Designer tab → **New** (`mgtoolbarbutton-1088`) → Form Wizard Selection (New Form / Category **Classic** / Wizard **BuildFromScratch**) → wizard page 1 Name `FX_FormPropertyLab04` (other defaults untouched) → Next → final step **uncheck "Save Template"** → Finish → "Process Completed Successfully" → OK (Finish persists immediately; Save disabled = clean). Session-specific control IDs from EXP-006 T2 (wizard window `formwizard-1408`, expeditor `expeditor-1468`, Name combo `mgcombo-1475`, Save Template `ext-comp-1707`, success dialog `ext-comp-1009`) may drift — resolve at runtime. Known pitfalls: synthetic DOM clicks do not drive Ext window buttons (use native Playwright clicks); the wizard is a single scrollable page in this build; "Save Template" is checked by default (authoritative state = `aria-checked`/`getValue()`; reliable toggle = `onBoxClick()`); the Name field is an editable combo (`forceSelection:false`).

## Knowledge state (as of T1)

- `FX_FormPropertyLab04` absent (exact and case-insensitive) in the 639-record Select Form store, and in both UI filter modes: **observed** (T1, three independent methods + positive control).
- Select Form store count 639 and `FX_` count 8, reconciled against the EXP-006 T8 final audit (639 / 8): **observed** (re-confirmed).
- Select Form dialog remembers its filter across close/reopen within the same Web Client session: **observed** (re-confirmed).
- Filter store reload requires real input events; `onBoxClick()` is the reliable Case Sensitive toggle; `Ext.ComponentQuery` `root` option unreliable; `grid.store.each` is the iteration path: **observed** (re-confirmed).
- Tab 1 is a dead 403 portal-root leftover from EXP-006 T8 recovery; no Designer tab open at preflight start: **observed** (new).
- `Unload IDO Metadata With Forms` preference state: **carried over from EXP-006 (observed there in T5/T6/T8 as CHECKED) — to be re-verified read-only in a later task of this replay before the unload step; if not CHECKED/enabled, the replay stops as BLOCKED.**
- Exact unload command label in the 2026.09.08 Form > Definition UI: **carried over from EXP-006 T5/T6 (`Unload All Global Form Objects`, observed there) — to be re-observed in this replay's UI before invocation, not assumed.**
- The EXP-006 literal-Caption coupled-unload procedure itself: **observed** (single controlled execution in EXP-006) — this replay exists to attempt promotion to **replay-verified**.

## Open questions / blockers

- None blocking for T1.
- The `Unload IDO Metadata With Forms` preference is expected to remain **CHECKED** (EXP-006 T5/T6/T8 finding); it must be re-verified read-only in this replay before the unload step, and if it is not CHECKED/enabled the replay stops as **BLOCKED** (the preference will not be changed).
- The exact unload command label must be re-observed in this replay's Form > Definition UI before invocation (EXP-006 observed `Unload All Global Form Objects`; it will not be assumed).
- Whether ordinary Form close, the explicit unload, or both trigger IDO-metadata unloading is **out of scope** and will not be determined by this replay.

## T2 — Designer setup, form creation, and pre-Caption baseline (2026-10-02)

Coordinator instruction: from the current clean Web Client state, open the Web Designer through the supported UI, explicitly confirm editing scope is User, and follow `recipes/forms/create-basic-form.md` as written to create exactly one classic BuildFromScratch Form `FX_FormPropertyLab04` (no template, no other Form touched). Verify exactly one new target exists; record its User-scope identity and the complete pre-Caption baseline (Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, Is Master). Stop with the target otherwise unchanged: no Caption edit, no User Preferences, no unload.

### T2.1 — Inspected state first (no mutation)

- Browser tabs at T2 start (fresh conversation; state inspected before any action): Tab 0 = Mongoose Web Client (authenticated; user badge `<username> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no form open; Save disabled; no banner; no visible windows); Tab 1 = the same stray dead 403 portal-root tab as T1 (unchanged). **No Designer tab open.**
- **Pre-mutation re-check (Select Form, read-only):** full store **639 records**; **0 exact and 0 case-insensitive** matches for `FX_FormPropertyLab04`; the same 8 `FX_` forms as T1 (indices 279–283, 311–313). UI filter `FX_FormPropertyLab04` (Case Sensitive off) → **0 rows**. Target still absent immediately before the mutation. (evidence `08`, `09`.)

### T2.2 — Designer opened via supported UI; scope explicitly confirmed User

1. Web Client toolbar **Designer split button** (`mgtoolbarbutton-1126`) — native Playwright click → new browser tab (tab 2) at `WSWebClient/designer/Default.aspx` with the full portal session context (config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`).
   - *Deviation note (mechanic only, not a procedure change):* an earlier exploratory coordinate click had landed on the **Help** menu (opening `menu-1094`), which intercepted subsequent clicks; it was closed via the Ext API (`menu.hide()`) before the supported split-button click succeeded. No form or artifact was affected.
2. The Designer raised the **"Identify Your Editing Scope"** dialog. Read (not changed) its values: **Scope combo = `3` = `User`** (per the environment fingerprint mapping Site Default=1, User=3, Group=2), **User combo = the signed-in user** (value masked by the secrets layer). (evidence `10`.)
3. Clicked **OK** (native click) → dialog closed; Designer status bar shows **`[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`**; toolbar clean (Save/Regenerate Form/Undo/Redo all disabled). (evidence `11`.)

### T2.3 — Creation method (per `recipes/forms/create-basic-form.md`)

1. Designer toolbar **New** (`mgtoolbarbutton-1088`) — native Playwright click (a synthetic `el.dom.click()` did **not** open the dialog — the known Ext pitfall) → **"Form Wizard Selection"** dialog (window `formwizard-1227` — numeric ID drifted from EXP-006's `formwizard-1408`, as expected). (evidence `12`.)
2. Radio **New Form** already checked (default; `Extend Form` unchecked). Category combo (`mginfoconexpandable-1245`) → **Classic** (store: Classic, ExtDatasource, Flex, FormBuilder, IDS, NewData, REST) selected via `combo.select(record)`; Wizard combo (`mginfoconexpandable-1250`) then loaded the 7 Classic wizards (BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile) → **BuildFromScratch** selected via `combo.select(record)`. (evidence `13`.)
3. OK → **"Form Wizard - Build From Scratch"** (expeditor `expeditor-1287`). Page-1 values verified: Name (editable combo `mgcombo-1294`) set to **`FX_FormPropertyLab04`** via `setValue`; all other defaults left untouched — Form Type `BuildFromScratch` (`mgcombo-1308`), Form Layout `GridLeft` (`mgcombo-1313`), Device Type `Default` (`mgcombo-1318`), Data Source empty (`mgcombo-1323`), Query Form empty (`mgedit-1328`), Comments empty (`mgedit-1333`). (evidence `14`.)
4. **Next** (`mgformbutton-1530`) → Next became **disabled**, **Finish** (`mgformbutton-1531`) became **enabled** (single scrollable page, as in EXP-006 T2).
5. **Save Template** checkbox (`ext-comp-1526`) was **checked by default** (`aria-checked="true"`, `getValue()=true`); toggled **off** via its own handler `onBoxClick()` → `aria-checked="false"`, `getValue()=false`. (evidence `15`.)
6. **Finish** → **"Process Completed Successfully"** dialog (`ext-comp-1009`) → **OK** (native click). (evidence `16`.)
7. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab04`; form tab **`FX_FormPropertyLab04`** appeared and is selected; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `17`.)

### T2.4 — Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store:
- **Total records = 640** (639 + 1 — exactly +1; **no template artifact** created, consistent with Save Template being unchecked).
- **Exactly 1 exact match** for `FX_FormPropertyLab04` (store index 282, record `{mgdata:"FX_FormPropertyLab04", text:"FX_FormPropertyLab04", type:0, id:"extModel214-657"}`); case-insensitive matches = 1 (the same record).
- `FX_`-prefixed forms now number **9**: `FX_VariableLab01`(279), `FX_TestBlank02`(280), `FX_TestBlank01`(281), **`FX_FormPropertyLab04`(282)**, `FX_ComponentLab02`(283), `FX_ComponentLab01`(284), `FX_FormPropertyLab02`(312), `FX_FormPropertyLab03`(313), `FX_FormPropertyLab01`(314). (The pre-existing 01/02/03 shifted +1 in list order only; no artifact impact.)
- UI confirmation: filtered the dialog to `FX_FormPropertyLab04` → **exactly 1 row** (Caption column shows the Name fallback because Caption is empty). (evidence `18`.)
- Dialog closed via Cancel (native click); filter cleared first (640 records).

### T2.5 — Exact User-scope identity + full pre-Caption baseline (recorded BEFORE any Caption change)

Read read-only from the loaded Designer property grid store `formpropertygrid-1135` (session formId **74**; the grid cell visually truncates Name/Version but the store holds the full values):

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab04` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* — store `object.string`, expeditor `WSExpEdCaption` | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` (boolean) | yes |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `11`, `19`); confirmed at the "Identify Your Editing Scope" dialog (Scope combo value `3` = User) before OK.

**Key baseline fact for the persistence check:** the freshly created form's **Caption is empty** — the later change to the literal `Form Property Lab Coupled Unload Replay` will be an unambiguous empty→literal transition.

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### T2.6 — T2 evidence (under `evidence/EXP-006-R2/`)

- `08-t2-pre-mutation-absence-recheck.png` — Select Form dialog, full list (639 records, filter empty) at the pre-mutation re-check.
- `09-t2-pre-mutation-filter-lab04-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab04` (Case Sensitive off) → grid empty (0 records).
- `10-t2-designer-scope-dialog-user.png` — "Identify Your Editing Scope" dialog: Scope **User**, User = signed-in user (before OK).
- `11-t2-designer-user-scope-clean.png` — Designer after OK: no form loaded yet, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, toolbar clean.
- `12-t2-wizard-selection-default.png` — Form Wizard Selection dialog (New Form radio checked; Category/Wizard empty).
- `13-t2-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch**.
- `14-t2-wizard-name-entered.png` — Build From Scratch wizard: Name `FX_FormPropertyLab04`, other defaults (BuildFromScratch / GridLeft / Default / empty).
- `15-t2-wizard-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked**.
- `16-t2-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `17-t2-form-created-loaded-clean.png` — New form `FX_FormPropertyLab04` loaded in the Designer (`?MGForm=FX_FormPropertyLab04`), form tab selected, toolbar clean.
- `18-t2-select-form-lab04-exists-one.png` — Select Form dialog filtered to `FX_FormPropertyLab04` → exactly 1 row (store total 640).
- `19-t2-baseline-properties-design-group.png` — Designer Properties, Design group: Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T2.7 — T2 observations / corrections

- **Synthetic DOM clicks do not drive Ext toolbar/window buttons in this build** (re-confirmed): `el.dom.click()` on the New button did nothing; native Playwright clicks worked (Open, New, OK, Next, Finish, Cancel).
- **The Designer split button (`mgtoolbarbutton-1126`) opens the Web Designer in a new browser tab** carrying the full portal session context; a fresh Designer session re-prompts **"Identify Your Editing Scope"** (Scope pre-set to User for the signed-in user) — confirmed by explicit dialog read before OK.
- **Numeric Ext IDs drifted from the EXP-006 session** as expected: wizard window `formwizard-1227` (was `formwizard-1408`), expeditor `expeditor-1287` (was `expeditor-1468`), Name combo `mgcombo-1294` (was `mgcombo-1475`), Save Template `ext-comp-1526` (was `ext-comp-1707`), success dialog `ext-comp-1009` (same). Resolved at runtime by title/role.
- **Wizard combo selection via `combo.select(record)` worked cleanly** for both Category and Wizard (no tile-click needed this session); the Wizard store loads only after a Category is selected.
- **Save Template is checked by default**; authoritative state = `aria-checked`/`getValue()`; reliable toggle = `onBoxClick()` (re-confirmed from EXP-006 T2).
- **The "Build From Scratch" wizard is a single scrollable page** in this build: Next validates and disables itself, enabling Finish (re-confirmed).
- **The property grid is a tree store** (`formpropertygrid-1135`): top-level records are groups (`propId` e.g. `Design`) whose `properties` array holds the leaf property records with full (non-truncated) `value`s; `grid.store.fields` is null in this build — iterate with `grid.store.each` and read `record.data`.
- **`formId` is session-local** (74 here; 7/18 for the same-form reads in EXP-006) — not a persistent identity; Form Name + scope is the persistent identity (re-confirmed).
- The Version store value renders as `User version for user <username>` with the username masked by the secrets layer in tool output; the full literal (per the environment record and the status bar in evidence `19`) is `User version for user anton.ramos@3mworks.com.ph`.
- No User Preference was inspected or changed; no unload was invoked; no form other than the new `FX_FormPropertyLab04` was created, modified, or deleted; `FX_FormPropertyLab01/02/03` and all non-`FX_` artifacts untouched; editing scope stayed **User** throughout.

### T2.8 — T2 knowledge-state updates

- `FX_FormPropertyLab04` **exists, exactly one**, User scope, ScopeName `anton.ramos@3mworks.com.ph`, created via the verified recipe with Save Template unchecked; store 639→640; baseline Caption **empty**: **observed** (T2).
- Full pre-Caption baseline (Name/Description/Caption/Version/Device Type/Form Type/Is Master) as tabled in T2.5: **observed** (T2).
- Designer split button opens a fresh Designer tab with a full session context and re-prompts Identify-Your-Editing-Scope (Scope pre-set User): **observed** (re-confirmed; consistent with the recipe precondition).
- `combo.select(record)` selects the wizard Category/Wizard combos without tile clicks in this session: **observed** (new; complements the EXP-006 tile-click path).
- Property grid tree-store shape (`propId` groups + `properties` leaf array; `store.fields` null; iterate via `store.each`): **observed** (new, T2; refines EXP-006 T4/T7 notes).
- `Unload IDO Metadata With Forms` preference: **not inspected in T2** (out of scope for this step); still carried from EXP-006 (observed there as CHECKED) — to be re-verified read-only in T4 before the unload.
- Exact unload command label: **not opened in T2** (per instruction); still carried from EXP-006 T5/T6 (`Unload All Global Form Objects`) — to be re-observed in T4.

### T2.9 — Stopped here (per instruction, after creation + baseline)

Did **not** change the Caption or any other Form property; did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command. `FX_FormPropertyLab01`/`FX_FormPropertyLab02`/`FX_FormPropertyLab03` and all non-`FX_` artifacts untouched. **Next task (T3):** change **only** the Form-level literal Caption to `Form Property Lab Coupled Unload Replay`, ordinary Designer Save, and prove the Designer returns to a clean state with the Caption retained.

## T3 — Single-property Caption mutation + ordinary Save + clean-state proof (2026-10-02)

Coordinator instruction: on the already-open exact User-scope `FX_FormPropertyLab04`, first re-read the current baseline/identity (Name `FX_FormPropertyLab04`, ScopeType=User, same ScopeName, Caption still empty); change **only** the Form-level literal Caption to exactly `Form Property Lab Coupled Unload Replay` using the supported Designer Properties UI (no other property touched); perform the ordinary Designer Save through the supported UI and verify the Form returns to a clean state; re-read the comparison properties and record that only Caption differs from the T2 baseline. Stop with the target Form still open after the clean save — do NOT close it, do NOT open/change User Preferences, do NOT inspect or invoke the global unload.

### T3.1 — Pre-edit re-read (identity + baseline re-confirmed, no mutation)

Fresh conversation; browser state inspected first. Tab 2 (Designer, current) still on `FX_FormPropertyLab04` (`?MGForm=FX_FormPropertyLab04`); Tabs 0/1 unchanged (Web Client; stray 403 portal-root). Re-read from the loaded property grid store `formpropertygrid-1135` (formId **74**, same as T2):

| Property | Value at T3 start | vs T2 baseline |
|---|---|---|
| Name | `FX_FormPropertyLab04` | unchanged |
| Description | *(empty)* | unchanged |
| **Caption** | ***(empty)*** | unchanged (still empty — correct pre-condition) |
| Version | `User version for user anton.ramos@3mworks.com.ph` | unchanged |
| Device Type | `Default` | unchanged |
| Form Type | `Normal` | unchanged |
| Is Master | `True` | unchanged |

Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` — **ScopeType=User, same ScopeName** as T2. Toolbar clean (Save/Regenerate/Undo/Redo all disabled); no visible windows. (evidence `20`.)

### T3.2 — Single-property mutation: Caption only (supported Properties UI)

1. Located the Caption leaf row in the Properties tree grid (tree column cell `ext-1762` "Caption"; value cell `ext-1763`, column `pgvaluecolumn-1138`; cell carries `data-mgcompname="Design.Caption"`).
2. **Native double-click on the value cell** (`#ext-1763`) opened the **inline cell editor** (overlay `ext-comp-1852`, class `x-grid-cell-editor`; cell class gained `mg-underEdit`) containing the free-text combo **`mg-gc-combo1785`** (xtype `pgvaluecombobox`, `forceSelection: false`, `editable: true`) — the same editor family as EXP-006 T4 (`mg-gc-combo2141`); the numeric ID drifted as expected. (Note: the first double-click already opened the editor; a second double-click attempt timed out because the editor input was intercepting pointer events — i.e., the editor was already up.)
3. Focused the combo input (`#mg-gc-combo1785-inputEl`) with a native click and typed the literal via real key events: **`Form Property Lab Coupled Unload Replay`**. Verified combo `getValue()` = input value = exactly `Form Property Lab Coupled Unload Replay`. (evidence `21`.)
4. **Committed by blur** — native click on the row's non-editable label cell (`#ext-1762`); no list item selected (no Enter pressed). Editor closed (`mg-underEdit` gone); no window opened.
5. Post-commit store read: `Design.Caption = "Form Property Lab Coupled Unload Replay"`; `Design.Name` and `Design.Version` unchanged; **no other Form property touched**. Toolbar became **dirty**: Save=enabled, Regenerate Form=enabled, Undo=enabled, Redo=disabled — exactly the EXP-006 T4.3 pattern (one undoable change = the Caption edit).

### T3.3 — Ordinary Designer Save + clean-state proof

- Clicked the ordinary **Save** toolbar button (`mgtoolbarbutton-1085`) with a real click.
- After the server round-trip (~4 s wait), toolbar returned to **clean**: **Save=disabled, Regenerate Form=disabled, Undo=disabled, Redo=disabled**.
- **No modal/error window** appeared (no visible `window` components).
- Store re-read: Caption remains exactly `Form Property Lab Coupled Unload Replay`.
- Visual confirmation: the form **tab title changed from `FX_FormPropertyLab04` to `Form Property Lab Coupled Unload Replay`** (the Designer now uses the Caption as the tab display title — same cue as EXP-006 T4.4). (evidence `22`, `23`.)

### T3.4 — Post-save comparison vs T2 baseline (only Caption differs)

| Property | T2 baseline | Post-save (T3) | Result |
|---|---|---|---|
| Name | `FX_FormPropertyLab04` | `FX_FormPropertyLab04` | unchanged |
| Description | *(empty)* | *(empty)* | unchanged |
| **Caption** | *(empty)* | **`Form Property Lab Coupled Unload Replay`** | **changed (the only change)** |
| Version | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | unchanged |
| Device Type | `Default` | `Default` | unchanged |
| Form Type | `Normal` | `Normal` | unchanged |
| Is Master | `True` | `True` | unchanged |
| ScopeType / ScopeName | `User` / `anton.ramos@3mworks.com.ph` | `User` / `anton.ramos@3mworks.com.ph` (status bar) | unchanged |

**T3 result: PASS** — Caption changed to the exact literal via the supported Properties UI, ordinary Save completed, Designer clean, Caption retained, all other comparison properties unchanged.

### T3.5 — T3 evidence (under `evidence/EXP-006-R2/`)

- `20-t3-pre-edit-baseline-empty-caption.png` — Designer, `FX_FormPropertyLab04` active, Design group with Caption **empty**, Save disabled (clean), status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- `21-t3-caption-entered-pre-save.png` — Caption inline editor open with the combo input = `Form Property Lab Coupled Unload Replay` (pre-save, dirty).
- `22-t3-after-save-clean-tab-title-caption.png` — Post-save: form tab title now `Form Property Lab Coupled Unload Replay` (the Caption), toolbar clean (Save disabled).
- `23-t3-post-save-properties-comparison.png` — Properties panel Design group post-save: Name `FX_FormPropertyL…`, Description empty, Caption `Form Property Lab Coupled Unload Replay` (truncated display; full value per store read), Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`.

### T3.6 — T3 observations / corrections

- **The Caption value cell opens an INLINE cell editor on double-click** (overlay `x-grid-cell-editor` with a `pgvaluecombobox`), not a dialog window — re-confirmed consistent with EXP-006 T4. The editor input ID is session-local (`mg-gc-combo1785` this session vs `mg-gc-combo2141` in EXP-006).
- **A second double-click while the editor is open times out** (the editor input intercepts pointer events) — a useful "editor already open" signal; commit by blur (click a non-editable cell), never Enter (Enter could select a list item).
- The combo's store was empty/lazy at edit time (`getCount()=0`) — irrelevant: `forceSelection:false` + `editable:true` accepts the literal (re-confirmed from EXP-006 T4).
- Setting the Caption changes the Designer **form tab title** from the Form Name to the Caption (re-confirmed; visual persistence cue).
- Dirty→clean toolbar transition after ordinary Save matches EXP-006 T4.4 exactly (single undoable change; no modal).
- No User Preference was inspected or changed; Form > Definition not opened; no unload invoked; no other Form or artifact touched; editing scope stayed **User** throughout.

### T3.7 — T3 knowledge-state updates

- `FX_FormPropertyLab04` Caption = **`Form Property Lab Coupled Unload Replay`** (saved, clean, User scope, ScopeName `anton.ramos@3mworks.com.ph`); all other comparison properties unchanged vs T2: **observed** (T3).
- Caption editor = inline `pgvaluecombobox` cell editor (`forceSelection:false`, `editable:true`); commit by blur; literal accepted: **observed** (re-confirmed; EXP-006 T4 + this replay).
- Tab title switches from Form Name to Caption after a Caption save: **observed** (re-confirmed).
- `Unload IDO Metadata With Forms` preference: **not inspected in T3** (out of scope); still carried from EXP-006 (observed there as CHECKED) — to be re-verified read-only in T4 before the unload.
- Exact unload command label: **not opened in T3** (per instruction); still carried from EXP-006 T5/T6 (`Unload All Global Form Objects`) — to be re-observed in T4.

### T3.8 — Stopped here (per instruction, after clean save)

The target Form `FX_FormPropertyLab04` is **still open** in the Designer (clean state, Caption saved). Did **not** close the Form; did **not** open or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command; no other artifact or Form modified. **Next task (T4):** close `FX_FormPropertyLab04` via supported UI; read (NOT change) `Unload IDO Metadata With Forms` and prove it is CHECKED/enabled (else stop as BLOCKED); capture the exact Form > Definition unload command label without invoking it.

## T4 — Close target Form + `Unload IDO Metadata With Forms` preference gate (2026-10-02)

Coordinator instruction (task labeled T5 by the harness; corresponds to the close + preference-gate portion of the record's T4): from the currently open, clean, ordinarily saved exact User-scope `FX_FormPropertyLab04`, confirm the Form is still clean and Caption is exactly `Form Property Lab Coupled Unload Replay`; close that target Form through supported Designer UI (no property changes, no save prompted/needed); then in the Web Client open User Preferences through the supported UI and read `Unload IDO Metadata With Forms` **without changing it**. Evidence must prove: (1) the target Form was closed after the clean ordinary save; (2) the preference is CHECKED/enabled or not; (3) no User Preference mutation was made or left unsaved. If NOT CHECKED → stop as BLOCKED before any unload. If CHECKED → leave it unchanged, close User Preferences cleanly/read-only, update the record with the gate result, and stop. Do NOT inspect or invoke Form > Definition or any global-Form-object unload in this task; do NOT reopen the target Form.

### T4.1 — Pre-close confirmation (clean + Caption exact)

- Designer (tab 2) on `FX_FormPropertyLab04` (`?MGForm=FX_FormPropertyLab04`); toolbar **clean** (Save/Regenerate/Undo/Redo all disabled); no visible windows; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Store read: `Design.Caption = "Form Property Lab Coupled Unload Replay"` (exact); all other Design values identical to the T2/T3 baseline. Form tab title = the Caption.

### T4.2 — Closed `FX_FormPropertyLab04` via supported UI

- Clicked the form tab's **close** button (`.x-tab-close-btn` on the `Form Property Lab Coupled Unload Replay` tab) with a native click.
- Because the form was clean, **no confirmation dialog** appeared.
- Designer URL changed from `?…&MGForm=FX_FormPropertyLab04` to `?…` (**no `MGForm=` parameter**); the form tab is gone (only the panel tabs Components/Collections/Form/Component remain); toolbar clean; no visible windows. (evidence `24`.)

### T4.3 — Opened User Preferences via supported UI (Web Client)

- Switched to the Web Client (tab 0). Workspace was empty (no form open; Save disabled; the outer portal URL's `favoriteContext=UserPreferences` was a stale parameter from the EXP-006 session — no form was actually open).
- Opened the **Select Form** dialog (`ext-comp-1135`) via the Open toolbar button (`mgtoolbarbutton-1101`).
- Set **Filter By → "Caption & Name"** (combo `combo-1145`, internal value `both`) and typed `User Preferences` via real key events (`page.keyboard.type`) → grid reloaded to **exactly 1 match**: Name = `UserPreferences`, Caption = `User Preferences` (record `extModel214-1260`).
- Selected the row and clicked **OK** (`button-1149`, found via the ownerCt-chain walk — direct `ownerCt.id` match missed it) → the `UserPreferences` form opened (evidence `25`).

### T4.4 — Read (NOT changed) `Unload IDO Metadata With Forms`

- Located the checkbox among the form's 59 checkboxes by label text: row text exactly **`Unload IDO Metadata With Forms`** (component `ext-comp-1451`, inside the `User Preferences` form container `mgform-1442`).
- **Authoritative state: `checked: true`, `getValue(): true`, `aria-checked: "true"`, `disabled: false` → CHECKED (enabled).** (evidence `26` — the checkbox is visibly checked in the form's preference grid.)
- **No change was made** — the value was only read. The Web Client toolbar **Save remained disabled** both before and after the read (no unsaved changes).

### T4.5 — Closed User Preferences cleanly (read-only)

- Closed the `UserPreferences` form via its close control (deliberately **not** OK, to avoid any save).
- **No "Save changes"/unsaved dialog appeared.** Web Client workspace returned to empty; **Save disabled**; no visible windows. (evidence `27`.)
- **Gate result: PASS** — `Unload IDO Metadata With Forms` is **CHECKED/enabled** and was left **unchanged**; no User Preference mutation was made or left unsaved. Per the experiment rule, the replay **may proceed** to the global-Form-object unload step (next task).

### T4.6 — T4 evidence (under `evidence/EXP-006-R2/`)

- `24-t5-designer-after-close-no-form.png` — Designer after closing `FX_FormPropertyLab04`: no form tab, no `MGForm=` in the URL, toolbar clean, no windows (proves the target was closed after the clean ordinary save).
- `25-t5-user-prefs-form-open.png` — Web Client with the `UserPreferences` form open (opened via Select Form, Filter By = Caption & Name).
- `26-t5-unload-ido-metadata-with-forms-checked.png` — `UserPreferences` form: **`Unload IDO Metadata With Forms` CHECKED** (read-only; no change made).
- `27-t5-webclient-state-check.png` — Web Client after closing User Preferences: empty workspace, Save disabled, no dialogs (no unsaved mutation).

### T4.7 — T4 observations / corrections

- **The Select Form OK button must be found via the ownerCt-chain walk** (direct `ownerCt.id === window.id` matched nothing; the chain walk found `button-1149` OK / `button-1150` Cancel / `button-1151` Help): **observed** (re-confirmed pitfall).
- Filter By combo internal values: `mgdata`=Name, `text`=Caption, `both`=Caption & Name; setting via `combo.setValue('both')` + real key events in the filter box reloaded the store to exactly 1 match (re-confirmed from EXP-006 T5/T8).
- The `UserPreferences` form renders as a window-style form with OK/Help + a close control; closing via the close control (not OK) produced **no save prompt** because nothing was changed: **observed** (re-confirmed; consistent with EXP-006 T5.5).
- The stale `favoriteContext=UserPreferences` portal URL parameter (leftover from the EXP-006 session) does **not** mean a form is open — the workspace was empty until Select Form → OK: **observed** (new).
- No Form > Definition menu was opened; no unload command was inspected or invoked; the target Form was **not** reopened; no Form or User Preference was modified; editing scope stayed **User**.

### T4.8 — T4 knowledge-state updates

- `FX_FormPropertyLab04` **closed** after the clean ordinary save (no confirmation dialog; no `MGForm=` in the Designer URL): **observed** (T4).
- `Unload IDO Metadata With Forms` preference is **CHECKED (enabled)** for `anton.ramos@3mworks.com.ph` — re-verified read-only in this replay (`checked:true` / `getValue():true` / `aria-checked:"true"`); **left unchanged**: **observed** (re-confirmed in this replay; resolves the carried-over EXP-006 assumption for this replay).
- **Preference gate: PASS** — the replay is authorized to proceed to the global-Form-object unload step: **observed** (T4).
- Exact unload command label: **still not opened in this task** (per instruction); carried from EXP-006 T5/T6 (`Unload All Global Form Objects`) — to be re-observed in this replay's Form > Definition UI in the next task **before** invocation.

### T4.9 — Stopped here (per instruction, after the gate)

Did **not** open Form > Definition; did **not** inspect or invoke any global-Form-object unload command; did **not** reopen `FX_FormPropertyLab04`; did **not** change any User Preference or Form property. **Next task:** in the Designer, open Form > Definition, re-observe the exact unload command label (do not assume `Unload All Global Form Objects`), then invoke the documented global-Form-object unload **exactly once** (the preference gate is PASS), capturing evidence of invocation + result.

## T5 — Re-observe the unload label + invoke the global-Form-object unload exactly once (2026-10-02)

Coordinator instruction (task labeled T6 by the harness; corresponds to the record's T5): from the current state with `FX_FormPropertyLab04` closed and the preference gate already passed, use the supported Designer UI to open Form > Definition and inspect the available unload command without invoking anything else; capture evidence of the exact command label as rendered by this 2026.09.08 UI; verify it is the intended global-Form-object unload command (if not unambiguous, stop and report without invoking); if unambiguous, invoke that exact command **exactly once** through supported UI; capture the interaction/result and maintain an explicit worker action trace sufficient to establish it was invoked once in this replay (do NOT invoke a second time for confirmation). Do NOT reopen `FX_FormPropertyLab04`; do NOT change any User Preference or Form property; do NOT investigate whether close vs unload caused IDO-metadata clearing. Update the record with the observed label, the single invocation, evidence references, and that post-unload reopen/verification remains pending.

### T5.1 — Pre-invocation state (inspect first)

- Designer (tab 2, current): **no `MGForm=`** in the URL (target Form closed, per T4); no form tab (only panel tabs Components/Collections/Form/Component); no visible windows; no open menus; toolbar clean; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. The preference gate (T4) is PASS (`Unload IDO Metadata With Forms` CHECKED, unchanged).

### T5.2 — Opened Form > Definition; re-observed the exact unload label (NOT invoked yet)

- Clicked the **Form** menu-bar button (`button-1020`) → Form menu `menu-1021` opened (items: **Definition** `menuitem-1022` [has submenu], Sign Out, recent-forms list).
- Clicked **Definition** (`menuitem-1022`) → Definition submenu `menu-1023` opened. Items, in order:
  1. `Design` (`menuitem-1024`)
  2. `Revert Form Definition` (`menuitem-1025`)
  3. `Regenerate Form` (`menuitem-1026`, **disabled**)
  4. `Regenerate Form from Cache` (`menuitem-1027`, **disabled**)
  5. *(separator)*
  6. `Site Developer Impersonation` (`menuitem-1029`)
  7. **`Unload All Global Form Objects`** (`menuitem-1030`, **enabled**) ← the global-Form-object unload command
  8. *(separator)*
  9. `New` (`menuitem-1032`), `Copy` (`menuitem-1033`), `Delete` (`menuitem-1034`)
- **Exact visible label (2026.09.08 UI): `Unload All Global Form Objects`** — re-observed live in this replay (not assumed). It is the **only** unload-related item in the menu → **unambiguous**; it matches the documented EXP-006 T5/T6 command. (evidence `28`.)

### T5.3 — Invocation (exactly once) + definitive single-invocation trace

- Clicked **`Unload All Global Form Objects`** (`#menuitem-1030`) with a **single native Playwright click**. This is the **only** invocation in this replay.
- **Definitive single-invocation proof (network):** exactly **one** `POST https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/Designer/DesignerSession/ClearCache` occurred in the session (network request **#95**) → **HTTP 200**, `content-type: application/json`, response body **`{"Success":true}`** (request body `{"instanceId":null,"eventName":"","eventSource":"","eventArgs":[]}`). A filter for `ClearCache` across the whole network log returns **only** request #95 — i.e., the unload server call was made **exactly once**.
- **Completion was silent** (consistent with EXP-006 T6.4): **no confirmation dialog, no error dialog, no notification banner**; console **0 errors / 0 warnings**; the Definition/Form menus closed; the Designer returned to a clean state (no form loaded, toolbar clean). (evidence `29`, `30`.)
- **No second invocation** was performed for confirmation — the single `ClearCache` request + `{"Success":true}` is the proof.

### T5.4 — Post-invocation state

- Designer: **no `MGForm=`** (the target Form was **NOT** reopened); no form tab; no visible windows; no open menus; toolbar clean; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. (evidence `30`.)
- The incidental IDO-metadata clearing caused by the existing enabled `Unload IDO Metadata With Forms` preference is the expected, explicitly-permitted effect of this command. **Whether ordinary Form close vs this explicit unload triggers IDO-metadata unloading is out of scope and was NOT investigated.**

### T5.5 — T5 evidence (under `evidence/EXP-006-R2/`)

- `28-t6-form-definition-unload-label.png` — Form > Definition submenu with the exact label **`Unload All Global Form Objects`** (the item about to be invoked).
- `29-t6-post-click-state-check.png` — Immediately post-click: menus closed, Designer clean, no dialog (silent completion).
- `30-t6-after-unload-completed-clean.png` — Post-unload stable state: no form loaded, no windows, no menus, toolbar clean, scope User.
- **Captured response (not a file):** network request #95 `POST .../DesignerSession/ClearCache` → `200`, body `{"Success":true}` — the definitive single-invocation record.

### T5.6 — T5 observations / corrections

- **The Form menu-bar is a toolbar of buttons** (`button-1020` Form / `button-1038` Edit / `button-1062` View / `button-1068` Help), not Ext `menuitem` components — locate by visible text / button id, not `Ext.ComponentQuery.query('menuitem')` for the top level: **observed** (new, T5).
- **The unload command's server call is `POST /WSWebClient/Designer/DesignerSession/ClearCache`** returning `{"Success":true}` — a reliable, definitive marker that the command was invoked (and how many times): **observed** (new, T5). This is the recommended single-invocation proof for future replays.
- Invoking `Unload All Global Form Objects` completes **silently** (no confirmation/error/notification); menus close and the Designer stays clean: **observed** (re-confirmed; EXP-006 T6.4).
- Clicking the menu-item **root** element (`#menuitem-1030`) with a native Playwright click **did** fire the item (the `ClearCache` call confirms it) — the EXP-006 note about clicking `#menuitem-1030-itemEl` is not required; the root element works: **observed** (new, T5; refines EXP-006 T6.3).
- The Definition submenu item ids drifted slightly from EXP-006 (e.g. New/Copy/Delete `menuitem-1032/1033/1034` here) but the **unload item id `menuitem-1030` and label are identical** to EXP-006: **observed** (re-confirmed).
- No User Preference was changed; no Form property was changed; the target Form was **not** reopened; no second unload was invoked; the close-vs-unload IDO-trigger question was **not** investigated.

### T5.7 — T5 knowledge-state updates

- The global-Form-object unload command in the 2026.09.08 Designer is **`Unload All Global Form Objects`** (Form > Definition, `menuitem-1030`) — re-observed live in this replay (not assumed): **observed** (re-confirmed; resolves the carried-over label for this replay).
- The unload was **invoked exactly once** in this replay, proven by the single `ClearCache` request #95 → `{"Success":true}`: **observed** (T5).
- `POST /DesignerSession/ClearCache` → `{"Success":true}` is the definitive single-invocation marker for this command: **observed** (new, T5).
- Post-unload, the Designer is clean with no form loaded and the target was not reopened: **observed** (T5).
- **Post-unload reopen + Caption-persistence verification remains PENDING** (next task, T6).

### T5.8 — Stopped here (per instruction, after the single invocation)

Did **not** invoke the unload a second time; did **not** reopen `FX_FormPropertyLab04`; did **not** change any User Preference or Form property; did **not** investigate the close-vs-unload IDO-trigger question. **Next task (T6):** reopen exactly `FX_FormPropertyLab04` (ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) and verify the Caption `Form Property Lab Coupled Unload Replay` persisted and all comparison properties (Name, Description, Version, Device Type, Form Type, Is Master) are unchanged vs the T2/T3 baseline.

## T6 — Post-unload reopen + persistence verification (COMPLETE)

### T6.1 — Method

1. Designer state confirmed clean (no form loaded; no visible windows; console 0/0) after the T5 unload.
2. Opened the **Form** menu (toolbar button `button-1020`) → the menu's **recent-forms list** contained `FX_FormPropertyLab04` (`menuitem-1073`).
3. Native Playwright click on `menuitem-1073` → Designer reopened the exact User-scope version. **No scope re-prompt** (the User-scope version for the signed-in user is unambiguous).
4. Verified URL carries `?MGForm=FX_FormPropertyLab04`; Designer tab title = `Form Property Lab Coupled Unload Replay` (the Caption — tab shows Caption, not Name, consistent with T3).
5. Read-only property read via the property grid store (formId 79, session-local; grid `formpropertygrid-1135`, tree store iterated with `store.each`): Design group leaf records + scope bar.
6. Captured evidence `31` (Designer loaded) and `32` (property grid + scope bar); no mutation performed.

### T6.2 — Post-unload property comparison (vs T2/T3 baseline)

| Property | T2/T3 baseline (pre-unload) | Post-unload (T6) | Verdict |
|---|---|---|---|
| Name | `FX_FormPropertyLab04` | `FX_FormPropertyLab04` | unchanged |
| Description | `""` (empty) | `""` (empty) | unchanged |
| **Caption** | `Form Property Lab Coupled Unload Replay` (set in T3) | **`Form Property Lab Coupled Unload Replay`** | **PERSISTED** |
| Version | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | unchanged |
| Device Type | `Default` | `Default` | unchanged |
| Form Type | `Normal` | `Normal` | unchanged |
| Is Master | `True` | `True` | unchanged |
| ScopeType | `User` | `User` | unchanged |
| ScopeName | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | unchanged |

Clean-state proof: after reopen, the Designer toolbar is clean — Save (`mgtoolbarbutton-1085`), Regenerate (`mgtoolbarbutton-1086`), Undo (`mgtoolbarbutton-1106`), Redo (`mgtoolbarbutton-1107`) all **disabled**; no visible dialogs; console 0 errors / 0 warnings. The Form was **not** saved, modified, or closed-and-reopened again in this step.

### T6.3 — Findings & knowledge state

- **The literal User-scope Form Caption `Form Property Lab Coupled Unload Replay` persisted across the documented coupled unload** (`Unload All Global Form Objects` with `Unload IDO Metadata With Forms` CHECKED), with all comparison properties and the User scope identity unchanged: **replay_verified** (EXP-006 first observed it; this is the second, clean, independent execution on a new form `FX_FormPropertyLab04`).
- Reopen of a User-scope Form immediately after a global-Form-object unload succeeds via the Form menu recent-forms list with no scope re-prompt and no error: **observed** (T6).
- The Designer tab title displays the Caption (not the Name) once a Caption is set: **observed** (consistent with T3, re-confirmed T6).
- Post-unload, no incidental change to any other property of the target Form was observed: **observed** (T6).

### T6.4 — Stopped here (per instruction)

Did **not** invoke the unload again; did **not** change any User Preference; did **not** modify any Form property; did **not** perform the final inventory/repository audit. **Next task (T7):** final read-only browser/repository audit (exactly one target; preference unchanged; worktree confined to EXP-006-R2 artifacts), then finalize the acceptance table and Result.

## T7 — Final read-only browser/repository audit + acceptance table + Result (COMPLETE)

Coordinator instruction (task labeled T8 by the harness; corresponds to the record's T7): perform only the EXP-006-R2 final read-only audit and record finalization. Do not mutate any Mongoose Form or User Preference; do not invoke the unload again. In the Web Client, use supported read-only UI to inspect the current FX_ Form inventory; prove there is exactly one `FX_FormPropertyLab04`; capture the observed total FX_ count; show its persisted Caption `Form Property Lab Coupled Unload Replay` in the inventory; re-open/read User Preferences only as needed to verify `Unload IDO Metadata With Forms` remains CHECKED/enabled; audit the repository/worktree; reconcile the existing T7 evidence and record so AC-7 and AC-8 are explicit; finalize the experiment record; if AC-1 through AC-9 all pass, classify the procedure as `replay_verified`; capture final audit evidence under `evidence/EXP-006-R2/`; report the complete AC-1 through AC-10 evidence mapping.

### T7.1 — Method (read-only)

1. Confirmed the Web Client (tab 0) and Designer (tab 2) were in clean states; no form was open in the Web Client.
2. Opened the **Select Form** dialog (`ext-comp-1135`) via the Open toolbar button (`mgtoolbarbutton-1101`).
3. Cleared the remembered filter, then performed a **store-level scan** of the Select Form grid store (`grid-1136`, 640 records) and a live `fx_` filter (real key events) to enumerate the `FX_` inventory.
4. Inspected the **server's `GetAllForms` response** (network request #595, `POST /WSWebClient/FormsApi/GetAllForms`) to determine whether the Web Client inventory's Caption field was a client-side cache or a server-side index.
5. Re-read the **Designer form definition** (tab 2, property grid `formpropertygrid-1135`) for `FX_FormPropertyLab04` to authoritatively confirm the persisted Caption.
6. Re-opened **User Preferences** (Select Form → `UserPreferences` → OK) and read `Unload IDO Metadata With Forms` (read-only), then closed via the close control (not OK).
7. Audited the **repository/worktree** by file mtime to prove changes are confined to this record + `evidence/EXP-006-R2/`.
8. No Form or User Preference was mutated; the unload was **not** invoked again.

### T7.2 — FX_ inventory audit (Web Client, read-only)

- **Total Select Form records: 640.**
- **`FX_` forms: exactly 9** — `FX_ComponentLab01`, `FX_ComponentLab02`, `FX_FormPropertyLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, `FX_FormPropertyLab04`, `FX_TestBlank01`, `FX_TestBlank02`, `FX_VariableLab01`.
- **`FX_FormPropertyLab04`: exactly 1** (record `extModel214-657`). No duplicates, no near-misses.
- (evidence `33` — the 9 `FX_` rows in the Select Form grid after the `fx_` filter.)

### T7.3 — Persisted Caption: authoritative confirmation + observed form-list/definition divergence

- **Authoritative (Designer form definition):** the property grid for `FX_FormPropertyLab04` shows **`Design.Caption = Form Property Lab Coupled Unload Replay`** — the Caption **is persisted** on the exact same User-scope Form. (evidence `35` — final read-only evidence that the persisted literal Caption is visible on the target.)
- **Web Client form-list projection (`GetAllForms`):** the `GetAllForms` response (request #595) returns `{"mgdata":"FX_FormPropertyLab04","text":"FX_FormPropertyLab04",...}` for the target — i.e., the **Name fallback** in the form-list `text` field, NOT the Caption. (evidence `34` — the raw `GetAllForms` JSON; evidence `33` — the rendered 9-row `FX_` inventory. Together `33`+`34` prove the final observed FX_ inventory contains exactly one `FX_FormPropertyLab04`.)
- **Observed A/B pattern within the same `GetAllForms` response:**
  - `FX_FormPropertyLab01` → `text = Form Property Lab` (a real Caption)
  - `FX_FormPropertyLab02` → `text = Form Property Lab Replay` (a real Caption)
  - `FX_FormPropertyLab03` → `text = Form Property Lab Coupled Unload` (a real Caption)
  - `FX_FormPropertyLab04` → `text = FX_FormPropertyLab04` (**Name fallback** — the target, whose Caption was set this session in T3)
  - `FX_ComponentLab01/02`, `FX_TestBlank01/02`, `FX_VariableLab01` → Name fallback (no Caption was ever set on these — the fallback is the correct value, not a divergence)
- **Narrow finding (observed divergence; mechanism NOT proven):** there is an **observed divergence between the form-list metadata/projection (`GetAllForms`) and the persisted Form definition** for `FX_FormPropertyLab04`: the projection shows the Name fallback while the persisted definition shows the Caption. The A/B pattern (three `FX_FormPropertyLab01/02/03` forms project real Captions, while the this-session `FX_FormPropertyLab04` projects the Name fallback) is **consistent with** the form-list projection being refreshed at a session boundary rather than on a within-session Caption-only save — but **no specific cache/index mechanism is established as proven** by this replay. This divergence does **not** negate Caption persistence: the authoritative Form definition (evidence `35`) confirms the Caption is persisted. (A Sign Out / session-refresh experiment was explicitly **not** performed, per the coordinator, as it is optional and unnecessary for the acceptance criteria.)
- **AC-9 determination:** "the persisted Caption is visible" is satisfied by the authoritative Form definition (evidence `35`). The form-list/definition divergence is recorded narrowly as an observed projection difference (it does not negate Caption persistence).

### T7.4 — User Preferences re-verification (read-only)

- Re-opened `UserPreferences` (Select Form → `UserPreferences` → OK).
- **`Unload IDO Metadata With Forms`: `checked: true`, `getValue(): true`, `aria-checked: "true"`, `disabled: false` → CHECKED (enabled).** (evidence `36`.)
- **No unsaved User Preference mutation:** the Web Client toolbar **Save was disabled** both before and after the read (nothing changed). Closed via the close control (not OK); no save prompt. (evidence `37`.)

### T7.5 — Repository/worktree audit (confined; run-boundary proven)

- **Run boundary:** this run (`R-20261002-103246-mRo2`) started at **2026-10-02 10:32:46**. Confinement is proven by file mtime relative to that boundary.
- **Knowledge-content files modified AT/AFTER the run start — ONLY EXP-006-R2:** `experiments/EXP-006-R2-clean-replay-literal-form-caption-persistence-acro.md` (this record) and `evidence/EXP-006-R2/01…37` (evidence only). No other knowledge-content file has an mtime at/after the run start.
- **Unrelated knowledge files — every mtime PREDATES the run start (therefore NOT changed by this run):**
  - Unrelated experiment records: `experiments/EXP-006-...md` (10:22:33), `experiments/EXP-005-R2-...md` (12:14:58), and `EXP-005`/`EXP-004`/`EXP-003*`/`EXP-002*`/`EXP-001` records (all ≤ 10/1 or 9/30). Their `evidence/EXP-006/*` and `evidence/EXP-005-R2/*` screenshots were written by their own earlier runs (all before 10:32:46).
  - `recipes/*` (3 recipes; 9/30), `environments/current-environment.md` (9/30), `AGENTS.md` (9/30), `opencode.json` (9/30).
- **`tools/learning-harness/...`** (run data, messages, transcripts, `harness.sqlite*`, `briefs/EXP-006-R2.brief.json`) = harness runtime bookkeeping — **excluded** (not EXP-006-R2 knowledge content).
- **No pre-existing Caption-specific recipe exists** (only `recipes/forms/create-basic-form.md`, `recipes/components/configure-basic-component.md`, `recipes/components/add-component-from-toolbox.md`); the brief does not require promotion; therefore **no recipe was promoted or created**, and no unrelated documentation was created.
- **Conclusion: this run's knowledge-content changes are confined to `experiments/EXP-006-R2-...md` + `evidence/EXP-006-R2/`. Recipes, environments, AGENTS.md, opencode.json, and all unrelated experiment records were NOT changed by this run.**

### T7.6 — AC-7 / AC-8 explicit reconciliation (post-unload values)

AC-7 (reopen the exact same User-scope version; Caption still present) and AC-8 (all comparison properties unchanged) are satisfied by the T6 post-unload reopen + verification (evidence `31`, `32`):

| Property | Baseline (T2/T3, pre-unload) | Post-unload (T6) | AC-8 verdict |
|---|---|---|---|
| Name | `FX_FormPropertyLab04` | `FX_FormPropertyLab04` | unchanged |
| Description | `""` | `""` | unchanged |
| **Caption** | `Form Property Lab Coupled Unload Replay` | `Form Property Lab Coupled Unload Replay` | **PERSISTED (AC-7)** |
| Version | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | unchanged |
| Device Type | `Default` | `Default` | unchanged |
| Form Type | `Normal` | `Normal` | unchanged |
| Is Master | `True` | `True` | unchanged |
| ScopeType | `User` | `User` | unchanged |
| ScopeName | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | unchanged |

- **AC-7:** the exact same User-scope version (`ScopeType=User`, `ScopeName=anton.ramos@3mworks.com.ph`) was reopened via the Form menu recent-forms list with no scope re-prompt, and the Caption `Form Property Lab Coupled Unload Replay` is still present → **PASS**.
- **AC-8:** every comparison property (Name, Description, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) is unchanged vs the pre-unload baseline → **PASS**.

### T7.7 — Acceptance criteria (AC-1 … AC-10) evidence mapping

| AC | Requirement | Evidence | Verdict |
|---|---|---|---|
| AC-1 | Preflight proves the target does not exist (exact + case-insensitive) and records the FX_ inventory/count | T1: `01`–`07` (0 exact / 0 case-insensitive of 639; 8 `FX_` forms) | **PASS** |
| AC-2 | Exactly one new User-scope classic BuildFromScratch Form created via the recipe; ScopeType=User; intended ScopeName | T2: `08`–`19` (exactly one `FX_FormPropertyLab04`, `extModel214-657`; store 639→640; ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) | **PASS** |
| AC-3 | Pre-Caption-edit baseline recorded (Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, Is Master) | T2/T3: `19`, `20` (baseline: Caption `""`, Description `""`, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`) | **PASS** |
| AC-4 | Only the Caption mutated to `Form Property Lab Coupled Unload Replay`; ordinary Save → clean state | T3: `21`–`23` (Caption set via inline combo; ordinary Save; Save/Regen/Undo/Redo disabled after) | **PASS** |
| AC-5 | After close, before unload, `Unload IDO Metadata With Forms` is CHECKED/enabled (read-only) | T4: `24`–`27` (checkbox `checked:true`/`getValue():true`/`aria-checked:"true"`/`disabled:false`; Save disabled; no mutation) | **PASS** |
| AC-6 | After AC-5, the actual unload command label is captured and invoked exactly once | T5: `28`–`30` (label `Unload All Global Form Objects`; single `POST /DesignerSession/ClearCache` → 200 `{"Success":true}`) | **PASS** |
| AC-7 | After unload, the exact same User-scope version is reopened and the Caption is still `Form Property Lab Coupled Unload Replay` | T6: `31`–`32` (reopened via recent-forms `menuitem-1073`; Caption persisted) | **PASS** |
| AC-8 | Post-unload/reopen: Description, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName match the baseline | T6: `31`–`32` + T7.6 table (all unchanged) | **PASS** |
| AC-9 | Final read-only audit: exactly one target in the FX_ inventory; persisted Caption visible; preference CHECKED with no unsaved mutation; repo changes confined | T7: `33`–`37` (exactly one lab04 of 9 `FX_`/640; Caption persisted in form definition per `35`; preference CHECKED, Save disabled; worktree confined) — with documented caveat: observed form-list/definition divergence (`GetAllForms` projection shows the Name fallback for lab04; mechanism not proven) | **PASS** |
| AC-10 | The record explicitly classifies the result: if AC-1…AC-9 all pass → `replay_verified` | T7.8 (below) | **PASS** |

### T7.8 — Result + classification

- **All acceptance checks AC-1 through AC-9 PASS.**
- **Classification: `replay_verified`.** The EXP-006 literal User-scope Form Caption persistence procedure across the documented coupled unload (`Unload All Global Form Objects` with `Unload IDO Metadata With Forms` CHECKED) is now **replay-verified**: it has been executed cleanly and independently **twice** (EXP-006 on `FX_FormPropertyLab03`; this replay, EXP-006-R2, on `FX_FormPropertyLab04`), each time with Caption persistence and unchanged comparison properties confirmed.
- **Scope caveat (narrow):** this verifies **literal User-scope Form Caption persistence across the specific documented coupled unload** in this 2026.09.08 environment for the signed-in user. It does **not** establish broader Form-property, localization, cache-internals, or IDO-trigger semantics, and does not generalize to other Mongoose versions, other unload commands, or site/global-scope Forms.
- **Observed divergence (for the knowledge base; mechanism NOT proven):** the Web Client form-list projection (`GetAllForms`) showed the Name fallback for `FX_FormPropertyLab04` while the persisted Form definition showed the Caption — an observed divergence between form-list metadata/projection and the persisted definition. The A/B pattern is consistent with a session-boundary refresh of the projection, but **no specific cache/index mechanism is established as proven**. This does not affect the Caption-persistence result.