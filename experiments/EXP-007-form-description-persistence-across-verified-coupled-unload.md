# EXP-007 — Form Description Persistence Across Verified Coupled Unload (FX_FormPropertyLab05)

Status: **COMPLETE — T1 (read-only preflight), T2 (creation + untouched baseline), T3 (Description edit + ordinary save to clean), T4 (close target + preference gate), T5 (single global-Form-object unload), T6 (post-unload reopen + compare), and T7 (final read-only browser/repository audit + acceptance) COMPLETE. All acceptance criteria (AC-1…AC-10) PASS; all EXP-007 findings classified no higher than `observed` (original execution, not a replay — no `replay_verified`).** T1: target proven absent (0 exact / 0 case-insensitive, store- and UI-level, Name and Caption fields); FX_ inventory = 9 of 640. T2: exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab05` created via the verified recipe (Save Template unchecked); store 640→641, FX_ 9→10, exactly one target (UI + store); full pre-Description baseline recorded (Description empty, Caption empty, Version `User version for user <user>`, Device Type `Default`, Form Type `Normal`, Is Master `True`); `FX_FormPropertyLab04` left untouched. T3: **only** the Form-level Description changed from empty → `Form Property Description Lab` via the supported inline property editor; ordinary Designer Save returned the Designer to a clean state; post-save re-read confirms Description = `Form Property Description Lab` and all comparison properties equal the T2 baseline. T4: `FX_FormPropertyLab05` closed via its Designer form-tab close button (no unsaved-change prompt; `FX_FormPropertyLab04` left open/untouched); `Unload IDO Metadata With Forms` read **CHECKED/enabled** via `Form > User Preferences` (Behavior) and the preferences UI was closed **without** any change/Save. **Preference gate PASSED.** T5: `Form > Definition > Unload All Global Form Objects` invoked **exactly once** (single real click); task-local ClearCache baseline was 1 historical request (#95) and exactly **one new** request (#116, POST, HTTP 200, body `{"instanceId":79,...}`, response `{"Success":true}`) followed — exactly one invocation; no error/dialog/toast remained; `FX_FormPropertyLab05` still closed; `FX_FormPropertyLab04` open/clean/untouched; console 0 errors. T6: `FX_FormPropertyLab05` reopened via `Form` menu recent-forms entry; loaded version proven **ScopeType=User / ScopeName=`anton.ramos@3mworks.com.ph`** (matches T2 baseline); **Description persisted = `Form Property Description Lab`**; all comparison properties unchanged (Caption empty, Version `User version for user <user>`, Device Type `Default`, Form Type `Normal`, Is Master `True`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`); Designer left open/clean; no edit/Save, no second unload, no preference change, `FX_FormPropertyLab04` untouched; console 0 errors. **Classification correction applied:** no EXP-007 finding is promoted above `observed` (this is an original execution, not a replay). **No later acceptance check has been performed or passed** — T7 (final read-only audit + acceptance table + classification) is PENDING.
Date: 2026-10-02
Mode: LEARNING MODE — first execution of the Description-persistence procedure on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab05`.
Run: `R-20261002-122012-MzML` (cycle 1 T1, cycle 2 T2, cycle 3 T3, cycle 4 T3-reconcile, cycle 5 T4, cycle 6 T5, cycle 7 T5-reconcile, cycle 8 T6, cycle 9 T7, cycle 10 T7-reconcile), started 2026-10-02 12:20:12.

## Objective

Create one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab05` using the verified basic-form recipe, record its exact scoped identity and baseline Form properties, intentionally edit **only** the Form-level Description to `Form Property Description Lab`, ordinary-save to a clean state, close the Form, read but do not change `Unload IDO Metadata With Forms` (require CHECKED/enabled), invoke `Form > Definition > Unload All Global Form Objects` exactly once, then reopen the exact same User-scope Form version and verify that Description persisted while the recorded comparison properties remained unchanged. Record browser and repository evidence without investigating cache internals or any unrelated Mongoose feature.

In scope: read current browser and repository state before any mutation; prove `FX_FormPropertyLab05` does not already exist (exact + case-insensitive); create exactly one new User-scope classic BuildFromScratch Form via `recipes/forms/create-basic-form.md`; record baseline Form Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, and Is Master before editing Description; edit only the Form-level Description to `Form Property Description Lab`; ordinary Designer Save with clean-state proof; close the Form through supported UI; read (not change) `Unload IDO Metadata With Forms` and continue only if CHECKED/enabled; invoke the observed 2026.09.08 `Form > Definition > Unload All Global Form Objects` command exactly once; reopen exactly `FX_FormPropertyLab05` (ScopeType=User, same ScopeName); verify Description persistence and compare recorded non-Description properties against baseline; save evidence under `evidence/EXP-007/`.

Out of scope: Form variables or any continuation/workaround of EXP-004; Caption persistence testing beyond recording Caption as an unchanged comparison property; Translatable Strings, localization, multilingual Description behavior, or string-resource creation; components, component placement, component property editing, bindings, validators, event handlers, scripts, methods, expressions, or data sources; IDO configuration or investigation of whether Form close, explicit unload, or both trigger IDO-metadata unloading; changing any User Preference; testing Site, Group, Vendor, or any editing scope other than User; editing `FX_FormPropertyLab01`–`FX_FormPropertyLab04` or any other existing Form; determining the internal implementation or system-wide scope of `/DesignerSession/ClearCache`; investigating GetAllForms/list projection semantics; creating or promoting a reusable Description recipe before this experiment is independently replayed.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Web Client iframe title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`).
- Browser state at preflight start (inspected first; **no login performed — session already authenticated**): three tabs:
  - Tab 0: Mongoose Web Client (portal), signed in — user badge `<username> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (username masked by the secrets layer, not read or printed). **No form open** (no form tabs); toolbar **clean** (Save `mgtoolbarbutton-1102` disabled); **no** visible Ext windows; **no** `portal-notification` banner. URL carries the leftover `favoriteContext=UserPreferences` param from the EXP-006-R2 T4/T7 User-Preferences reads (display-only; no form tab exists for it — re-confirms the EXP-006-R2 T4.7 finding).
  - Tab 1: **stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (empty title). Per EXP-006-R2 this is the 403 "Missing Authentication Token" leftover of the EXP-006 T8 SLO-recovery navigation; **not re-verified in this preflight** (no navigation performed). It is not a Designer tab.
  - Tab 2: **Web Designer tab still open** at `WSWebClient/designer/Default.aspx?…&MGForm=FX_FormPropertyLab04` — the `FX_FormPropertyLab04` form was **left open** by EXP-006-R2 T6/T7 (post-unload reopen + final audit) and was not closed at the end of that experiment. Read-only inspection in this preflight: status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar **clean** (Save/Regenerate/Undo/Redo all disabled), no visible windows, form tab titled `Form Property Lab Coupled Unload Replay` (the Caption). **Not touched** in this preflight.
- **Target form `FX_FormPropertyLab05` does NOT exist** — full Select Form store scan (640 records) found 0 exact and 0 case-insensitive matches in both the Name (`mgdata`) and Caption (`text`) fields; UI filter searches in both case modes returned 0 rows (method and AC-1 evidence below).
- Existing `FX_` forms (**exactly 9**, store indices in `mgdata` order): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab04` (282), `FX_ComponentLab02` (283), `FX_ComponentLab01` (284), `FX_FormPropertyLab02` (312, Caption `Form Property Lab Replay`), `FX_FormPropertyLab03` (313, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (314, Caption `Form Property Lab`).
- Form-count reconciliation: 640 total / 9 `FX_` — **identical** to the EXP-006-R2 T7 final audit (640 / 9, same 9 names, same record ids `extModel214-655…660` / `-1003…-1005`). No growth, no deletions, no unexplained artifacts.
- Known from EXP-006-R2 (T4/T5/T7, **not re-inspected in this preflight** — re-inspection belongs to later tasks of this experiment): the `Unload IDO Metadata With Forms` User Preference is **CHECKED (enabled)** for this user, and the exact 2026.09.08 unload command label under Form > Definition is **`Unload All Global Form Objects`** (invocation marker: single `POST /DesignerSession/ClearCache` → 200 `{"Success":true}`). Both findings are carried over as *observed in EXP-006-R2* and must be re-verified/re-observed read-only in this experiment before the unload step; the preference must not be changed, and the label must be re-observed (not assumed).
- No Mongoose artifact was created, modified, or deleted during this preflight. No User Preference was inspected or changed. No unload command was invoked. No form was opened from the Select Form dialog. No Designer mutation was performed. Editing scope unchanged (User).

## Preflight method (T1)

1. Inspected repository state: `experiments/` (latest record `EXP-006-R2-…md`, mtime 12:01:13 — before this run's 12:20:12 start), `recipes/forms/create-basic-form.md` (status **verified**), `environments/current-environment.md`. Worktree is not a git repository; starting-state audit by file mtime (see below).
2. Inspected current browser state (3 tabs as above) — **no login performed**. Screenshot of the Web Client (evidence `01`).
3. Confirmed Web Client iframe state programmatically (title = config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; user badge present; no visible windows; no form tabs; Save disabled).
4. In the Web Client, clicked **Open** (`mgtoolbarbutton-1101`, native Playwright click) → **Select Form** dialog (window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Filter By combo `combo-1145`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147` — **identical IDs to the EXP-006-R2 session**).
5. Observed the dialog reopened with a **remembered filter** from EXP-006-R2 T4/T7 (Filter = `User Preferences`, Filter By = **Caption & Name** / internal value `both`, Case Sensitive off, Starts With off) → store showed only **1 record** (`UserPreferences`). Screenshot `02`.
6. Cleared the filter through the UI (focus `#textfield-1143-inputEl`, Ctrl+A, Delete — real key events) → store reloaded to the full list, **640 records**.
7. **AC-1 existence proof (store-level, authoritative):** scanned the entire Select Form store (all **640** records): field `mgdata` (Name) — **0 exact** matches for `FX_FormPropertyLab05`, **0 case-insensitive** matches (`toLowerCase()` comparison); field `text` (Caption) — **0 exact**, **0 case-insensitive**. Enumerated all 9 `FX_`-prefixed records (indices above); near-miss scan for `formpropertylab` (case-insensitive substring) matched only `FX_FormPropertyLab04` (282), `FX_FormPropertyLab02` (312), `FX_FormPropertyLab03` (313), `FX_FormPropertyLab01` (314).
8. **AC-1 existence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab05` into the Filter field (Filter By = Caption & Name, Case Sensitive **off**, real key events) → store reloaded to **0 records** (evidence `03`).
9. **AC-1 existence proof (UI-level, case-sensitive):** toggled **Case Sensitive on** via the checkbox's own `onBoxClick()` handler (`getValue()` false→true), re-typed `FX_FormPropertyLab05` → **0 records** (evidence `04`).
10. **Positive control (UI-level, case-sensitive):** cleared and typed `FX_FormPropertyLab` (same mode) → exactly **4 rows**: `FX_FormPropertyLab04`, `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — proves the filter mechanism works and that only the 01/02/03/04 variants exist (evidence `05`).
11. **Visual inventory:** cleared and typed `FX_` → exactly **9 rows** rendered in the grid (evidence `06`).
12. Restored the dialog to its original state: Case Sensitive back **off** (`onBoxClick()` again), filter cleared via real key events → full store restored, **640 records**, both checkboxes off; closed the dialog with **Cancel** (`button-1150`, native click). Verified the Web Client returned to its original state: no visible windows, Save disabled (evidence `07`).
13. **Editing-lane check (read-only):** switched to the Designer tab (tab 2) and read its state without interaction: status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean (Save/Regenerate/Undo/Redo disabled), no visible windows, `FX_FormPropertyLab04` still loaded (leftover from EXP-006-R2; untouched). The lane is **suitable for a later User-scope creation** (scope already User for the signed-in user; a fresh Designer session would re-prompt "Identify Your Editing Scope" with Scope pre-set to User, per the recipe and EXP-006-R2 T2). Screenshot `08`.
14. Audited the worktree starting state by mtime (see below). Console: 0 errors / 0 warnings.

## AC-1 evidence — pre-mutation absence of `FX_FormPropertyLab05`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store (Name) | Store scan of all 640 records, field `mgdata`, `=== 'FX_FormPropertyLab05'` | **0 matches** |
| Case-insensitive, whole store (Name) | Store scan, `mgdata.toLowerCase() === 'fx_formpropertylab05'` | **0 matches** |
| Exact / case-insensitive, whole store (Caption) | Store scan, field `text`, exact and `toLowerCase()` | **0 / 0 matches** |
| UI filter, case-insensitive (Case Sensitive off, Filter By Caption & Name) | Dialog filter `FX_FormPropertyLab05` | **0 rows** (evidence `03`) |
| UI filter, case-sensitive (Case Sensitive on, Filter By Caption & Name) | Dialog filter `FX_FormPropertyLab05` | **0 rows** (evidence `04`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` (case-sensitive) | **4 rows**: `FX_FormPropertyLab04`, `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` (evidence `05`) |
| Visual, full `FX_` inventory | Dialog filter `FX_` | exactly 9 `FX_` rows, no `FX_FormPropertyLab05` (evidence `06`) |

Case-insensitive matching was explicitly accounted for in multiple independent ways (store-level `toLowerCase` scan on both Name and Caption, UI filter with Case Sensitive off, and the positive control), not relied on a single exact-case filter.

## Repository / worktree starting state (T1)

- Worktree is **not** a git repository; audit by file modification time.
- **Run boundary:** this run (`R-20261002-122012-MzML`) started at **2026-10-02 12:20:12**.
- **New in this preflight (T1 window, 2026-10-02 ~12:23–12:26):** only `evidence/EXP-007/01…08` (8 screenshots) and this record file.
- **Most recent prior content:** `experiments/EXP-006-R2-clean-replay-literal-form-caption-persistence-acro.md` (mtime 2026-10-02 12:01:13 — its T7 completion; unchanged since) and `evidence/EXP-006-R2/*` (37 screenshots, last 11:46:18).
- **NOT modified (all predate the run start):** `AGENTS.md` (9/30), `opencode.json` (9/30), `environments/current-environment.md` (9/30), every file under `recipes/` (9/30, including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` (≤ 10/2 12:01:13).
- `evidence/playwright/` = auto-generated Playwright snapshot artifacts (shared across experiments); `tools/learning-harness/` = harness runtime — neither is EXP-007 knowledge content.
- **Conclusion:** worktree starting state is clean; no recipe, environment, or AGENTS.md file was modified by this preflight.

## Observations

- **Select Form dialog remembers its filter** across dialog close/reopen within the same Web Client session: it reopened with the EXP-006-R2 T4/T7 filter (`User Preferences` / Caption & Name) still applied, showing 1 record (re-confirms the EXP-005-R2/EXP-006/EXP-006-R2 note). Cleared via real key events (focus, Ctrl+A, Delete); the store reloaded to 640.
- **Filter store reload is driven by real input events** (re-confirmed): `page.keyboard.type()` / Delete reloaded the store each time; no programmatic `setValue` was used.
- **Case Sensitive checkbox (`mgDlgCbx-1146`)**: the component's own `onBoxClick()` handler toggled it consistently in both directions (`getValue()` false→true→false) — re-confirms the EXP-006/EXP-006-R2 finding that `onBoxClick()` is the reliable toggle path.
- Select Form dialog control IDs this session: window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Filter By combo `combo-1145` (value `both` = Caption & Name), checkboxes `mgDlgCbx-1146` (Case Sensitive) / `mgDlgCbx-1147` (Starts With), buttons OK `button-1149` / Cancel `button-1150` / Help `button-1151` — **identical to the EXP-006-R2 session**.
- **`FX_FormPropertyLab04` is still open in the Designer tab** (left over from EXP-006-R2 T6/T7, which ended with the form reopened for the final audit and never closed). It is in a clean state (toolbar disabled) and was left untouched. A later task of this experiment may need to account for it (e.g., the Designer's Form-menu recent list will contain it); it must not be modified.
- Tab 1 remains a stray dead bare-portal-root tab (per EXP-006-R2, a 403 "Missing Authentication Token" leftover); no navigation to it was performed in this preflight.
- Console: 0 errors / 0 warnings.
- No Mongoose artifact was created, modified, or deleted; no User Preference was inspected or changed; no unload was invoked; no form was opened from the dialog; the Select Form dialog was left in its original state (filter empty, both checkboxes off) and closed via Cancel.

## Evidence (under `evidence/EXP-007/`)

- `01-preflight-webclient-state.png` — Web Client at preflight start: signed in (user badge visible), no form open, toolbar clean (Save disabled), no notification banner, no dialogs.
- `02-preflight-select-form-remembered-filter.png` — Select Form dialog reopened with the remembered EXP-006-R2 filter (Filter `User Preferences`, Filter By Caption & Name, both checkboxes off) → 1 record only.
- `03-select-form-filter-lab05-case-insensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab05`, Filter By Caption & Name, Case Sensitive **unchecked** → grid empty (0 records).
- `04-select-form-filter-lab05-case-sensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab05`, Case Sensitive **checked** → grid empty (0 records).
- `05-select-form-filter-lab-prefix-four-rows.png` — Select Form dialog, Filter `FX_FormPropertyLab` (positive control, case-sensitive) → exactly 4 rows: `FX_FormPropertyLab04`, `FX_FormPropertyLab02` (Caption `Form Property Lab Replay`), `FX_FormPropertyLab03` (Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (Caption `Form Property Lab`).
- `06-select-form-fx-inventory-nine-rows.png` — Select Form dialog, Filter `FX_` → exactly 9 `FX_` rows: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab04`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — **no `FX_FormPropertyLab05`**.
- `07-webclient-after-dialog-close.png` — Web Client after Cancel: original state restored (no form tabs, no dialogs, Save disabled).
- `08-designer-user-scope-context-lab04-open.png` — Designer tab (tab 2): `FX_FormPropertyLab04` still loaded (leftover from EXP-006-R2), status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean, form tab titled `Form Property Lab Coupled Unload Replay`.

## Recipe availability for the next task

`recipes/forms/create-basic-form.md` (status **verified** — EXP-002 + EXP-002-R2, persistence verified across full page reload in both) is the creation path for `FX_FormPropertyLab05`: Web Client Designer split button (`mgtoolbarbutton-1126`) → Designer tab → **New** (`mgtoolbarbutton-1088`) → Form Wizard Selection (New Form / Category **Classic** / Wizard **BuildFromScratch**) → wizard page 1 Name `FX_FormPropertyLab05` (other defaults untouched) → Next → final step **uncheck "Save Template"** → Finish → "Process Completed Successfully" → OK (Finish persists immediately; Save disabled = clean). Session-specific control IDs from EXP-006-R2 T2 (wizard window `formwizard-1227`, expeditor `expeditor-1287`, Name combo `mgcombo-1294`, Save Template `ext-comp-1526`, success dialog `ext-comp-1009`) may drift — resolve at runtime. Known pitfalls: synthetic DOM clicks do not drive Ext window buttons (use native Playwright clicks); the wizard is a single scrollable page in this build; "Save Template" is checked by default (authoritative state = `aria-checked`/`getValue()`; reliable toggle = `onBoxClick()`); the Name field is an editable combo (`forceSelection:false`).

## Knowledge state (as of T1)

- `FX_FormPropertyLab05` absent (exact and case-insensitive) in the 640-record Select Form store (Name **and** Caption fields), and in both UI filter modes: **observed** (T1, multiple independent methods + positive control).
- Select Form store count 640 and `FX_` count 9, reconciled against the EXP-006-R2 T7 final audit (640 / 9, identical set and record ids): **observed** (re-confirmed).
- Select Form dialog remembers its filter across close/reopen within the same Web Client session: **observed** (re-confirmed).
- Filter store reload requires real input events; `onBoxClick()` is the reliable Case Sensitive toggle: **observed** (re-confirmed).
- Designer tab is open in **User scope** (clean toolbar) with `FX_FormPropertyLab04` still loaded from EXP-006-R2 T6/T7; the lane is suitable for a later User-scope creation: **observed** (new).
- `Unload IDO Metadata With Forms` preference state: **not inspected in this preflight** (out of scope for T1) — carried over from EXP-006-R2 T4/T7 (observed there as CHECKED); to be re-verified read-only in this experiment before the unload step; if not CHECKED/enabled, the experiment stops as **BLOCKED** (the preference will not be changed).
- Exact unload command label in the 2026.09.08 Form > Definition UI: **not opened in this preflight** — carried over from EXP-006-R2 T5 (`Unload All Global Form Objects`, observed there; invocation marker `POST /DesignerSession/ClearCache` → `{"Success":true}`); to be re-observed in this experiment's UI before invocation, not assumed.
- The EXP-006/EXP-006-R2 **Caption**-persistence procedure across the coupled unload is `replay_verified`; the analogous **Description**-persistence procedure targeted by this experiment is **unverified** until this experiment (and a later independent replay) completes.

## Open questions / blockers

- None blocking for T1.
- The `Unload IDO Metadata With Forms` preference is expected to remain **CHECKED** (EXP-006-R2 T4/T7 finding); it must be re-verified read-only in this experiment before the unload step, and if it is not CHECKED/enabled the experiment stops as **BLOCKED** (the preference will not be changed).
- The exact unload command label must be re-observed in this experiment's Form > Definition UI before invocation (EXP-006-R2 observed `Unload All Global Form Objects`; it will not be assumed).
- `FX_FormPropertyLab04` remains open in the Designer tab from EXP-006-R2; later tasks must not modify it and should account for it in the Designer's recent-forms list.
- Whether ordinary Form close, the explicit unload, or both trigger IDO-metadata unloading is **out of scope** and will not be determined by this experiment.

## T2 — Creation of `FX_FormPropertyLab05` + untouched baseline (2026-10-02)

Coordinator instruction: using `recipes/forms/create-basic-form.md` exactly as the verified procedure, create exactly one new classic BuildFromScratch Form `FX_FormPropertyLab05` in User scope; do not edit/modify the already-open `FX_FormPropertyLab04`; after creation, establish/reopen the exact `FX_FormPropertyLab05` User-scope version and capture evidence proving Form Name, ScopeType=User, and the actual ScopeName; before changing Description or any other property, record the exact baseline for Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, and Is Master; capture Select Form/store evidence showing exactly one `FX_FormPropertyLab05` and that the FX_ inventory increased by exactly one from the T1 baseline. Do NOT edit Description, do NOT change Caption or any other property, do NOT change User Preferences, do NOT close the target, do NOT invoke the unload.

### T2.1 — Inspected state first (no mutation)

- Browser tabs at T2 start (fresh conversation; state inspected before any action): Tab 0 = Mongoose Web Client (authenticated; user badge `<username> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no form open; Save disabled; no visible windows); Tab 1 = the same stray dead bare-portal-root tab as T1 (unchanged); Tab 2 = Designer tab with `FX_FormPropertyLab04` still loaded (`?MGForm=FX_FormPropertyLab04`), User scope, clean toolbar.
- **Pre-mutation re-check (Select Form, read-only):** dialog reopened with an **empty** filter this time (the T1 session had left it cleared) → full store **640 records**; **0 exact and 0 case-insensitive** matches for `FX_FormPropertyLab05`; the same 9 `FX_` forms as T1 (indices 279–284, 312–314). UI filter `FX_FormPropertyLab05` (Case Sensitive off, Filter By Caption & Name) → **0 rows**. Target still absent immediately before the mutation. (evidence `09`, `10`.)

### T2.2 — Creation method (per `recipes/forms/create-basic-form.md`)

1. Switched to the Designer tab (tab 2) — already open in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`), clean toolbar, `FX_FormPropertyLab04` loaded. No new Designer session was needed; no scope re-prompt appeared (scope was already established for the signed-in user).
   - *State note:* the Form > Definition menus (`menu-1021`/`menu-1023`) reported visible bounding boxes but were actually `visibility:hidden`/`hidden:true` (parked, not open) — a size-only visibility check is a false positive in this build; `visibility`/`hidden` must be checked.
2. Designer toolbar **New** (`mgtoolbarbutton-1088`) — native Playwright click → **"Form Wizard Selection"** dialog (window `formwizard-2025` — xtype `formwizard`, **not** an Ext `window`, so `ComponentQuery.query('window')` does not find it; numeric ID drifted from EXP-006-R2's `formwizard-1227`, as expected). (evidence `11`.)
3. Radio **New Form** already checked (default; `Extend Form` unchecked). Category combo (`mginfoconexpandable-2043`, store field `CategoryName`: Classic, ExtDatasource, Flex, FormBuilder, IDS, NewData, REST) → **Classic** selected via `combo.select(record)`; Wizard combo (`mginfoconexpandable-2048`, store field `WizardName`) then loaded the 7 Classic wizards (BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile) → **BuildFromScratch** selected via `combo.select(record)`. (evidence `12`.)
4. OK (`mgformbutton-2051`, native click) → **"Form Wizard - Build From Scratch"** (expeditor `expeditor-2074`). Page-1 values verified: Name (editable combo `mgcombo-2081`) set to **`FX_FormPropertyLab05`** via `setValue`; all other defaults left untouched — Form Type `BuildFromScratch` (`mgcombo-2095`), Form Layout `GridLeft` (`mgcombo-2100`), Device Type `Default` (`mgcombo-2105`), Data Source empty (`mgcombo-2110`), Query Form empty (`mgedit-2115`), Comments empty (`mgedit-2120`). (evidence `13`.)
5. **Next** (`mgformbutton-2317`, native click) → Next became **disabled**, **Finish** (`mgformbutton-2318`) became **enabled** (single scrollable page, as in EXP-006-R2 T2).
6. **Save Template** checkbox (`ext-comp-2313`) was **checked by default** (`getValue()=true`); toggled **off** via its own handler `onBoxClick()` → `getValue()=false`. (evidence `14`.)
7. **Finish** (`mgformbutton-2318`, native click) → **"Process Completed Successfully"** dialog (`ext-comp-1009`, message text `Process Completed Successfully`) → **OK** (`button-1013`, native click). (evidence `15`.)
8. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab05`; form tab **`FX_FormPropertyLab05`** appeared and is selected; the `FX_FormPropertyLab04` tab (`Form Property Lab Coupled Unload Replay`) **remains present and untouched**; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `16`.)

### T2.3 — Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store:
- **Total records = 641** (640 + 1 — exactly +1; **no template artifact** created, consistent with Save Template being unchecked).
- **Exactly 1 exact match** for `FX_FormPropertyLab05` (store index 282, record `{mgdata:"FX_FormPropertyLab05", text:"FX_FormPropertyLab05", id:"extModel214-1297"}`); case-insensitive matches = 1 (the same record).
- `FX_`-prefixed forms now number **10**: `FX_VariableLab01`(279), `FX_TestBlank02`(280), `FX_TestBlank01`(281), **`FX_FormPropertyLab05`(282)**, `FX_ComponentLab02`(283), `FX_ComponentLab01`(284), `FX_FormPropertyLab02`(312, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04`(313, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03`(314, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01`(315, Caption `Form Property Lab`). The pre-existing 9 shifted only in list order/ids; no other artifact added or removed.
- UI confirmation: filtered the dialog to `FX_FormPropertyLab05` → **exactly 1 row** (Caption column shows the Name fallback because Caption is empty); filtered `FX_` → **exactly 10 rows**. (evidence `18`, `19`.)
- Dialog closed via Cancel (native click); filter cleared first (641 records).

### T2.4 — Exact User-scope identity + full pre-Description baseline (recorded BEFORE any property change)

Read read-only from the loaded Designer property grid store `formpropertygrid-1135` (session formId **90**; the grid cell visually truncates Name/Version but the store holds the full values):

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab05` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `16`, `17`); the Designer session was already in User scope at T2 start (no scope dialog was re-prompted because the session scope was established earlier for the signed-in user).

**Key baseline fact for the persistence check:** the freshly created form's **Description is empty** — the later change to the literal `Form Property Description Lab` will be an unambiguous empty→literal transition. (Caption is also empty and will remain an unchanged comparison property.)

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### T2.5 — T2 evidence (under `evidence/EXP-007/`)

- `09-t2-pre-mutation-absence-recheck.png` — Select Form dialog, full list (640 records, filter empty) at the pre-mutation re-check.
- `10-t2-pre-mutation-filter-lab05-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab05` (Case Sensitive off) → grid empty (0 records).
- `11-t2-wizard-selection-default.png` — Form Wizard Selection dialog (New Form radio checked; Category/Wizard empty).
- `12-t2-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch**.
- `13-t2-wizard-name-entered.png` — Build From Scratch wizard: Name `FX_FormPropertyLab05`, other defaults (BuildFromScratch / GridLeft / Default / empty).
- `14-t2-wizard-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked**.
- `15-t2-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `16-t2-form-created-loaded-clean.png` — New form `FX_FormPropertyLab05` loaded in the Designer (`?MGForm=FX_FormPropertyLab05`), form tab selected, `FX_FormPropertyLab04` tab still present, toolbar clean.
- `17-t2-baseline-properties-design-group.png` — Designer Properties, Design group: Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- `18-t2-select-form-lab05-exists-one.png` — Select Form dialog filtered to `FX_FormPropertyLab05` → exactly 1 row (store total 641).
- `19-t2-select-form-fx-inventory-ten-rows.png` — Select Form dialog, Filter `FX_` → exactly 10 `FX_` rows including `FX_FormPropertyLab05`.

### T2.6 — T2 observations / corrections

- **The Form Wizard Selection dialog is xtype `formwizard`, not an Ext `window`** — `Ext.ComponentQuery.query('window')` does not find it; locate it by title/`ComponentQuery.query('formwizard')` or by scanning visible components: **observed** (new, T2).
- **Wizard store field names:** Category combo store field = `CategoryName`; Wizard combo store field = `WizardName` (store loads only after a Category is selected): **observed** (new, T2; complements the EXP-006-R2 notes).
- **Menu visibility false positive:** parked Ext menus report non-zero bounding boxes with `display:block`; the reliable hidden check is `visibility:hidden` / `component.hidden === true`: **observed** (new, T2).
- **The Designer URL drops `MGForm=` while the wizard is open** and restores `?MGForm=<new form>` after Finish+OK; the previously loaded form tab (`FX_FormPropertyLab04`) is not affected by the wizard flow: **observed** (new, T2).
- **Select Form client-side record ids are session-local** (e.g., `FX_FormPropertyLab04` was `extModel214-657` in T1 and `extModel214-1645` in this post-creation scan) — Name + scope is the persistent identity (re-confirmed).
- **Form-list projection refresh:** in this post-creation store load, `FX_FormPropertyLab04`'s `text` field showed its real Caption (`Form Property Lab Coupled Unload Replay`) where the T1 load had shown the Name fallback — an observed projection difference on store reload; **no cache/index mechanism is inferred** (out of scope per the experiment boundaries).
- **Synthetic `setValue` on the wizard Name combo worked** (editable combo, `forceSelection:false`); `combo.select(record)` worked for Category/Wizard (re-confirmed from EXP-006-R2 T2).
- **Save Template is checked by default**; reliable toggle = `onBoxClick()` (re-confirmed).
- No User Preference was inspected or changed; no unload was invoked; no form other than the new `FX_FormPropertyLab05` was created, modified, or deleted; `FX_FormPropertyLab01/02/03/04` and all non-`FX_` artifacts untouched; editing scope stayed **User** throughout.

### T2.7 — T2 knowledge-state updates

- `FX_FormPropertyLab05` **exists, exactly one**, User scope, ScopeName `anton.ramos@3mworks.com.ph`, created via the verified recipe with Save Template unchecked; store 640→641, FX_ 9→10; baseline Description **empty**, Caption **empty**: **observed** (T2).
- Full pre-Description baseline (Name/Description/Caption/Version/Device Type/Form Type/Is Master) as tabled in T2.4: **observed** (T2).
- `formwizard` xtype is invisible to `window` queries; wizard store fields `CategoryName`/`WizardName`; parked-menu visibility check; wizard-flow URL behavior; session-local Select Form record ids: **observed** (new, T2).
- `Unload IDO Metadata With Forms` preference: **not inspected in T2** (out of scope for this step); still carried from EXP-006-R2 (observed there as CHECKED) — to be re-verified read-only in T4 before the unload.
- Exact unload command label: **not opened in T2** (per instruction); still carried from EXP-006-R2 T5 (`Unload All Global Form Objects`) — to be re-observed in T5.

### T2.8 — Stopped here (per instruction, after creation + baseline)

Did **not** change the Description or any other Form property; did **not** touch `FX_FormPropertyLab04` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command. **Next task (T3):** change **only** the Form-level Description to `Form Property Description Lab`, ordinary Designer Save, and prove the Designer returns to a clean state with the Description retained.

## T3 — Description edit + ordinary save to clean (2026-10-02)

Coordinator instruction: on the currently-open `FX_FormPropertyLab05`, first confirm the selected Form is exactly `FX_FormPropertyLab05` in User scope (ScopeName `anton.ramos@3mworks.com.ph`) and the Designer is clean; using the supported Form-properties UI, change **only** the Form-level Description from its empty baseline to exactly `Form Property Description Lab` (do not edit Caption or any other property; do not touch `FX_FormPropertyLab04`); capture evidence of the entered value and the unchanged comparison properties; invoke the ordinary Designer Save and prove the Designer returned to a clean state; after save, re-read the properties and verify Description = `Form Property Description Lab` while Caption, Version, Device Type, Form Type, Is Master, ScopeType, and ScopeName still equal the T2 baseline. Leave the Form open and clean. Do NOT close the Form, do NOT inspect/change User Preferences, do NOT invoke the unload.

### T3.1 — Inspected state first (no mutation)

- Browser tabs at T3 start (fresh conversation; inspected before any action): Tab 0 = Web Client (authenticated, clean), Tab 1 = the same stray dead bare-portal-root tab, Tab 2 (current) = Designer with `?MGForm=FX_FormPropertyLab05`.
- Confirmed the selected/loaded Form is exactly **`FX_FormPropertyLab05`** (URL `MGForm=FX_FormPropertyLab05`; form tab `FX_FormPropertyLab05` present and selected; the `FX_FormPropertyLab04` tab `Form Property Lab Coupled Unload Replay` still present and untouched).
- Scope: **`[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`** (status bar).
- Designer **clean** before the edit: Save/Regenerate Form/Undo/Redo all **disabled**; no visible windows.
- Re-read the pre-edit baseline from the property grid store (`formpropertygrid-1135`, session formId **90**, same as T2): Name `FX_FormPropertyLab05`, **Description empty**, Caption empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`. Pre-condition (empty Description) confirmed. (evidence `20`.)

### T3.2 — Edit method (supported Form-properties UI)

The Mongoose Form property grid edits a property through an **inline grid-cell editor** that opens when the property row is activated; the bottom **Details** panel (`tabpanel-1857`, "Form" tab) mirrors the selected property (label + value) but is not the commit surface.

1. Activated the **Description** row in the property grid → an inline editor appeared in the Description value cell: a text field `textfield-1139` (inside `ext-comp-1140`) at the Description row (y≈196). (The Details panel simultaneously showed the Description property with the placeholder `Empty Property Description Field`.)
2. Focused the inline editor and entered exactly **`Form Property Description Lab`** (real keyboard entry into `#textfield-1139-inputEl`).
3. Committed with **Enter** → the value committed to the grid store: `Design.Description` = `Form Property Description Lab`; the grid cell now displays `Form Property Des…`; the Designer became **dirty** (Save and Undo became **enabled**). (evidence `23`.)
   - *Correction / technique note:* an earlier attempt set the value via synthetic JS (`setValue`/`dispatchEvent`/`blur()` on the Details-panel textarea `textarea-1157`) — that did **not** commit to the store (Save stayed disabled, store stayed empty). The reliable commit path is the **inline grid-cell editor + real keyboard entry + Enter**. The Details-panel textarea reflects the property name/placeholder, not a committable value field. (evidence `21`, `22` document the non-committing intermediate states.)

### T3.3 — Ordinary Designer Save + clean-state proof

- Invoked the ordinary Designer **Save** (`mgtoolbarbutton-1085`, real click) — the normal save operation (no Regenerate, no unload).
- After save, the Designer returned to a **clean state**: Save, Regenerate Form, Undo, and Redo are all **disabled**; no visible windows; console **0 errors**. (evidence `24`.)

### T3.4 — Post-save re-read (verify only Description changed)

Re-read from the property grid store after save:

| Property | T2 baseline | After T3 save | Changed? |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab05` | `FX_FormPropertyLab05` | no |
| **Description** | *(empty)* | **`Form Property Description Lab`** | **yes (intended)** |
| **Caption** | *(empty)* | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | no |
| **Device Type** | `Default` | `Default` | no |
| **Form Type** | `Normal` | `Normal` | no |
| **Is Master** | `True` | `True` | no |
| **ScopeType** | `User` | `User` | no |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | no |

Only the Description differs from the T2 baseline, exactly as intended. The Form is left **open and clean** (not closed).

### T3.5 — T3 evidence (under `evidence/EXP-007/`)

- `20-t3-pre-edit-baseline-empty-description.png` — Designer on `FX_FormPropertyLab05`, User scope, clean toolbar, Description empty (pre-edit baseline).
- `21-t3-editor-open-not-committed.png` — intermediate state: Details-panel value entered via synthetic JS but **not** committed (grid cell still empty) — documents the non-working path.
- `22-t3-after-caption-row-click.png` — intermediate state while probing the edit model (Caption row selected) — documents the Details-panel/inline-editor distinction.
- `23-t3-description-entered-dirty.png` — Description grid cell shows `Form Property Des…` (committed via inline editor + Enter); Designer dirty (Save/Undo enabled); Caption/Version/Device Type/Form Type/Is Master unchanged.
- `24-t3-after-save-clean.png` — after ordinary Save: Description cell retains `Form Property Des…`, all comparison properties unchanged, toolbar clean (Save/Regen/Undo/Redo disabled), scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T3.6 — T3 observations / corrections

- **The reliable Description-edit commit path is the inline grid-cell editor + real keyboard entry + Enter.** Synthetic JS value-setting on the Details-panel textarea does not commit to the store (Save stays disabled, store unchanged): **observed** (new, T3; corrects the assumption that the Details-panel field is the committable editor).
- **The property grid opens an inline editor in the value cell when a property row is activated** (Description → text field `textfield-1139`; Caption → a combo, since Caption is a lookup field). The bottom Details panel mirrors the selected property (name + value/placeholder) but is not the commit surface: **observed** (new, T3).
- **Ordinary Designer Save returns the Designer to a clean state** (all of Save/Regen/Undo/Redo disabled) and persists the Description without a Regenerate: **observed** (T3).
- **Only the Description changed** across the edit+save; all recorded comparison properties (Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) are byte-identical to the T2 baseline: **observed** (T3).
- No Caption or other property was edited; `FX_FormPropertyLab04` untouched (still open, clean); no User Preference inspected or changed; Form > Definition not opened; no unload invoked; no variables/components/bindings/scripts created. Editing scope stayed **User** throughout.

### T3.7 — T3 knowledge-state updates

- `FX_FormPropertyLab05` Description is now **`Form Property Description Lab`**, ordinary-saved to a clean state, all comparison properties unchanged from T2 baseline: **observed** (T3).
- Inline grid-cell editor + real keyboard + Enter is the reliable property-edit commit path; Details-panel textarea is not committable via synthetic JS: **observed** (new, T3).
- `Unload IDO Metadata With Forms` preference: **not inspected in T3** (out of scope); still carried from EXP-006-R2 (observed there as CHECKED) — to be re-verified read-only in T4 before the unload.
- Exact unload command label: **not opened in T3** (per instruction); still carried from EXP-006-R2 T5 (`Unload All Global Form Objects`) — to be re-observed in T5.

### T3.8 — Stopped here (per instruction, after edit + save)

Left `FX_FormPropertyLab05` **open and clean** (Description = `Form Property Description Lab`). Did **not** close the Form; did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command. **Next task (T4):** close the target Form via supported UI; read (NOT change) `Unload IDO Metadata With Forms`; require CHECKED/enabled (else BLOCKED).

### T3.9 — T3 reconciliation (cycle 4, "Reconcile T3 ONLY" — read-only, no re-mutation)

Re-inspected the existing T3 artifacts (`evidence/EXP-007/20`–`24` + this T3 section) and performed one **read-only** live-state confirmation (no edit, no Save, no close, no preference change, no unload). All six required points are **PROVEN** by the existing artifacts and independently confirmed by the live read:

1. **Target exactly `FX_FormPropertyLab05`, User scope, same ScopeName** — PROVEN. Evidence `20`/`23`/`24` show the selected form tab `FX_FormPropertyLab05` and status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; T3.1 documents URL `MGForm=FX_FormPropertyLab05`. Live re-read: `MGForm=FX_FormPropertyLab05`, scope `User` / `anton.ramos@3mworks.com.ph`.
2. **Description alone changed empty → exactly `Form Property Description Lab`** — PROVEN. Evidence `20` (empty) → `23`/`24` (cell `Form Property Des…`); T3.4 store read records the full value `Form Property Description Lab`. Live store re-read: `Design.Description = "Form Property Description Lab"`.
3. **Caption and comparison properties not intentionally edited** — PROVEN. Caption empty in `20`/`23`/`24` and in the live read; T3.4 marks every comparison property "no" change. (The Caption row was *activated* during edit-model probing — evidence `22` — but no Caption value was committed; Caption is empty in `23`/`24` and live.)
4. **Ordinary Designer Save invoked after the Description change** — PROVEN. T3.3 documents the ordinary Save (`mgtoolbarbutton-1085`, real click); the dirty→clean transition (evidence `23`→`24`) corroborates.
5. **Designer returned to a clean state after Save** — PROVEN. Evidence `24` toolbar disabled; T3.3; live re-read: Save/Regen/Undo/Redo all disabled, no visible windows.
6. **Post-save properties match T2 baseline (Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) while Description = target** — PROVEN. T3.4 table (all "no" change except Description); live re-read: Caption `""`, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`, Description `Form Property Description Lab`.

**Live post-save property values (read-only re-read, cycle 4):** Name `FX_FormPropertyLab05`; Description `Form Property Description Lab`; Caption `""`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; ScopeType `User`; ScopeName `anton.ramos@3mworks.com.ph`. Both form tabs (`FX_FormPropertyLab05`, `FX_FormPropertyLab04`) still present; Designer clean.

**Reconciliation outcome:** no gap found; **no re-mutation performed** (Description edit and Save were NOT repeated). `FX_FormPropertyLab05` remains **open and clean** for T4.

## T4 — Close target + preference gate (2026-10-02)

Coordinator instruction: confirm `FX_FormPropertyLab05` is the selected User-scope target, clean, with Description = `Form Property Description Lab`; close **only** `FX_FormPropertyLab05` through supported Designer UI (do not touch `FX_FormPropertyLab04`); verify the target is no longer open and no unsaved-change prompt/mutation remains; in the Web Client open User Preferences via the supported UI path and **read only** `Unload IDO Metadata With Forms` (do not toggle/change/Save); if not CHECKED/enabled STOP as BLOCKED, else close/cancel the preferences UI without mutation. Do NOT invoke the unload, do NOT reopen the target.

### T4.1 — Inspected state first (no mutation)

- Browser tabs at T4 start (fresh conversation; inspected before any action): Tab 0 = Web Client (Mongoose workspace), Tab 1 = the same stray dead bare-portal-root tab, Tab 2 (current) = Designer with `?MGForm=FX_FormPropertyLab05`.
- Confirmed the selected/loaded Form is exactly **`FX_FormPropertyLab05`** (URL + selected form tab; `FX_FormPropertyLab04` tab `Form Property Lab Coupled Unload Replay` still present), scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Designer **clean** (Save/Regen/Undo/Redo all disabled, no windows), and **Description = `Form Property Description Lab`** (store re-read; Caption/Version/Device Type/Form Type/Is Master all at T2 baseline). Pre-condition for the close confirmed.

### T4.2 — Close `FX_FormPropertyLab05` (supported Designer UI)

- Closed the target by clicking the **close (×) button on the `FX_FormPropertyLab05` form tab** (`.x-tab-close-btn` on the `FX_FormPropertyLab05` tab) — the supported Designer close affordance. (evidence `25` pre-close, both tabs open.)
- **No unsaved-change prompt appeared** (the Form was clean after T3's ordinary Save). The Designer immediately switched to the remaining open form: URL became `?MGForm=FX_FormPropertyLab04`. (evidence `26`.)
- Post-close verification: `FX_FormPropertyLab05` tab **gone** (no longer in the tab strip, not in the URL); `FX_FormPropertyLab04` tab **still present and untouched** (now the active form, clean toolbar); **no visible windows/dialogs** (no unsaved-change prompt, no mutation). `FX_FormPropertyLab04` was not closed, edited, or otherwise touched.

### T4.3 — Preference gate: read `Unload IDO Metadata With Forms` (READ ONLY)

- Switched to the Web Client (Tab 0, Mongoose workspace). The workspace content is a **cross-origin iframe** (`mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/WSWebForm.aspx`), so the menu bar and dialogs are reached via the Playwright frame API.
- **Supported UI path:** `Form` menu → **`User Preferences`**. The `Form` menu (`menu-1024`, button `mgmenubutton-1023`) contains, in order: Open, Close and Save Changes, Close and Cancel Changes, Export to File, Device Types, ─, Definition, ─, Sign Out, ─, **User Preferences**, [recent forms], Runtime Builder Selection. (evidence `30`.)
- Clicking **User Preferences** opened the **User Preferences** view (a full-width workspace tab `tab-2165`, not a floating Ext window) on the **Behavior** page. (evidence `31`.)
- **READ ONLY** the target setting: the checkbox with boxLabel **`Unload IDO Metadata With Forms`** (component `ext-comp-2001`) is **CHECKED** (`checked: true`). (evidence `33`.) No toggle, no change to any other preference, no Save/OK.
- Other Behavior checkboxes observed for context (unchanged): Show Configuration Name On Caption ✓, Prompt to Save Grid Changes ✓, Prompt to Save Flex Layout Changes ✓, Include Grid Column Headers Copying to Clipboard ✓, Display Captions in Most Recently Used forms list ✓, Load/Replace form with extended form ✓; unchecked: Prompt to Save Form Splitter Changes, Prompt to Save DataView Layout Changes, Show All Forms in Forms List, Disable Form Aliases For Session, ENTER key behaves like TAB key.

### T4.4 — Preference gate result + close without mutation

- **`Unload IDO Metadata With Forms` is CHECKED/enabled → the preference gate PASSES** (not BLOCKED).
- Closed the User Preferences view **without mutation** by clicking its **Close Panel (×)** button (`tab-2165-closeEl`) — **not** OK/Save. No "save changes?" prompt appeared (no changes were made). The workspace returned to its normal state (Explorer + Form/Edit/View/Window/Help menus; no dialogs). (evidence `34`.)
- Final state: Designer (Tab 2) shows `FX_FormPropertyLab04` (open, clean, untouched); `FX_FormPropertyLab05` is closed; console **0 errors**. The system is left ready for the next task (the single unload).

### T4.5 — T4 evidence (under `evidence/EXP-007/`)

- `25-t5-pre-close-both-tabs-open.png` — Designer with both `FX_FormPropertyLab05` and `FX_FormPropertyLab04` tabs open (pre-close).
- `26-t5-after-close-lab05-gone-lab04-remains.png` — after close: `FX_FormPropertyLab05` tab gone, Designer on `FX_FormPropertyLab04`, no prompt.
- `27-t5-webclient-before-prefs.png` — Web Client (Mongoose workspace) before opening preferences.
- `28-t5-user-settings-profile.png` — the portal "User Settings" (Profile) — confirmed this is the general portal settings, NOT where the Mongoose preference lives.
- `29-t5-mongoose-workspace.png` — Mongoose workspace (Form/Edit/View/Window/Help menus).
- `30-t5-form-menu-user-preferences.png` — `Form` menu open showing **User Preferences** (the supported path).
- `31-t5-user-preferences-opened.png` — User Preferences view (Behavior page) opened.
- `32-t5-after-user-prefs-click.png` — User Preferences Behavior page (full view).
- `33-t5-unload-ido-metadata-checked.png` — **`Unload IDO Metadata With Forms` checkbox CHECKED** (the gate evidence).
- `34-t5-after-prefs-closed-clean.png` — after closing User Preferences without mutation; workspace back to normal.

### T4.6 — T4 observations / corrections

- **The Mongoose `User Preferences` is reached via `Form > User Preferences`** in the Web Client workspace (a `menu-1024` item), opening a full-width workspace tab (`tab-2165`) on the Behavior page — **not** via the portal "User Settings" (which is the general Infor profile/general/language settings). (evidence `28` vs `30`–`33`.) **observed** (new, T4).
- **The Mongoose workspace content is a cross-origin iframe** (`WSWebClient/WSWebForm.aspx`); its Ext menu bar/dialogs must be driven via the Playwright frame API (frame `mongoose_46_…`), and menu items require a **real mouse click** (synthetic `.click()` on the item DOM does not fire the Ext handler). **observed** (new, T4).
- **`Unload IDO Metadata With Forms` is CHECKED/enabled** in this environment (checkbox `ext-comp-2001`, `checked: true`) — re-verified read-only in this experiment (consistent with the EXP-006-R2 observation). **observed** (T4).
- **Closing a clean Designer form tab produces no unsaved-change prompt** and the Designer auto-switches to the next open form; the closed form's tab is removed from the strip. **observed** (T4).
- No preference was toggled or changed; no Save/OK was invoked on the preferences; `FX_FormPropertyLab04` untouched; the unload was **not** invoked; the target was **not** reopened. Editing scope stayed **User** throughout.

### T4.7 — T4 knowledge-state updates

- `FX_FormPropertyLab05` is **closed** (tab removed, not in URL); `FX_FormPropertyLab04` remains open/clean/untouched: **observed** (T4).
- `Unload IDO Metadata With Forms` = **CHECKED/enabled** (read-only re-verification in this experiment): **observed** (T4).
- Supported path `Form > User Preferences` (Behavior page) for Mongoose user preferences; cross-origin iframe + real-click requirement: **observed** (new, T4).
- **Preference gate: PASSED** (CHECKED/enabled) — the experiment may proceed to the single unload. **observed** (T4).
- Exact unload command label: **not opened in T4** (per instruction); still carried from EXP-006-R2 T5 (`Unload All Global Form Objects`) — to be re-observed in T5 before invocation.

### T4.8 — Stopped here (per instruction, after close + preference gate)

Left the system ready for the next task: `FX_FormPropertyLab05` closed; `FX_FormPropertyLab04` open/clean/untouched; `Unload IDO Metadata With Forms` confirmed CHECKED (gate passed); preferences UI closed without mutation. Did **not** invoke `Unload All Global Form Objects`; did **not** reopen `FX_FormPropertyLab05`; did **not** investigate cache/IDO trigger behavior. **Next task (T5):** re-observe the exact `Form > Definition` unload label; invoke the global-Form-object unload **exactly once** (single `ClearCache` request as the definitive marker).

## T5 — Single global-Form-object unload (2026-10-02)

Coordinator instruction: confirm `FX_FormPropertyLab05` remains closed, `FX_FormPropertyLab04` remains open/clean/untouched, and no User Preferences view is open; in the Designer open `Form > Definition` read-only first and capture evidence showing the actual command label `Unload All Global Form Objects`; establish a task-local network baseline for `/DesignerSession/ClearCache`; invoke `Unload All Global Form Objects` **exactly once** (never a second time); capture evidence of the invocation and the resulting single successful ClearCache request/response; verify no error/dialog remains and `FX_FormPropertyLab05` is still closed. Do NOT reopen `FX_FormPropertyLab05`, do NOT edit any Form, do NOT change User Preferences, do NOT investigate cache scope or IDO trigger behavior.

### T5.1 — Preconditions re-confirmed (read-only, no mutation)

- Browser tabs (fresh conversation; inspected before any action): Tab 0 = Web Client (Mongoose workspace), Tab 1 = the same stray dead bare-portal-root tab, Tab 2 (current) = Designer with `?MGForm=FX_FormPropertyLab04`.
- Confirmed (live read): `FX_FormPropertyLab05` **closed** (no form tab, not in URL); `FX_FormPropertyLab04` **open/clean/untouched** (tab `Form Property Lab Coupled Unload Replay` present; Save/Regen/Undo/Redo all disabled; no visible windows); **no User Preferences view open**. (evidence `35`.)

### T5.2 — Read-only observation of the exact command label

- The Designer (Tab 2) menu bar is **Form / Edit / View / Help** (Ext buttons, not a classic `menubar` component). The **Form** menu is `button-1020` → `menu-1021`.
- `Form > Definition` is a submenu: the **Definition** item (first item of `menu-1021`) owns submenu `menu-1023`.
- `menu-1023` (Definition) items, in order: `Design`, `Revert Form Definition`, `Regenerate Form` (disabled), `Regenerate Form from Cache` (disabled), ─, `Site Developer Impersonation`, **`Unload All Global Form Objects`** (enabled), ─, `New`, `Copy`, `Delete`.
- **Exact command label confirmed: `Unload All Global Form Objects`** under `Form > Definition`. (evidence `36` — Form menu open with Definition highlighted and the Definition submenu showing the enabled `Unload All Global Form Objects` item.)

### T5.3 — Task-local ClearCache baseline (before invocation)

- Filtered the task-local network log for `ClearCache` **before** invoking: exactly **1** historical request present — `#95 [POST] .../Designer/DesignerSession/ClearCache => [200]` (from earlier in the session, e.g. prior form activity). This is the baseline; the new invocation must produce exactly one additional request.

### T5.4 — Invoke `Unload All Global Form Objects` exactly once

- With the Definition submenu open, performed a **single real mouse click** on the `Unload All Global Form Objects` item (at its measured center). **No second click was made under any circumstance.**
- No dialog, confirmation prompt, or toast appeared on invocation.

### T5.5 — Post-invocation verification (exactly one new ClearCache request)

- Re-filtered the task-local network log for `ClearCache` **after** the invocation: exactly **2** requests total — the historical `#95` **plus exactly one new** request `#116`. **Delta = +1 → exactly one invocation.**
- New request `#116` details:
  - `POST https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/Designer/DesignerSession/ClearCache`
  - **HTTP 200**, type `xhr`, `content-type: application/json`, duration ~2420 ms.
  - **Request body:** `{"instanceId":79,"eventName":"","eventSource":"","eventArgs":[]}`
  - **Response body:** `{"Success":true}` (response `content-length: 16`).
- Post-invocation UI state (live read + evidence `37`): Designer back to normal (Form/Edit/View/Help menu bar, no open menus); `FX_FormPropertyLab05` **still closed** (no tab, not in URL); `FX_FormPropertyLab04` **open/clean/untouched** (Save/Regen/Undo/Redo all disabled); **no visible windows, no toast/notification, no error banner**; **console 0 errors / 0 warnings**.

### T5.6 — T5 evidence (under `evidence/EXP-007/`)

- `35-t6-designer-current-state.png` — Designer pre-menu state (FX_FormPropertyLab04 open/clean; FX_FormPropertyLab05 closed).
- `36-t6-form-definition-menu-unload-label.png` — `Form > Definition` submenu open showing the enabled **`Unload All Global Form Objects`** label (the read-only label evidence).
- `37-t6-after-unload-invocation-clean.png` — after the single invocation: Designer back to normal, no dialog/toast/error, FX_FormPropertyLab05 still closed.
- Network evidence (task-local, captured via the browser network log, not a file): baseline `#95` (pre) → `#95` + `#116` (post); `#116` = POST 200, request `{"instanceId":79,"eventName":"","eventSource":"","eventArgs":[]}`, response `{"Success":true}`.

### T5.7 — T5 observations / corrections

- **The Designer's menu bar is `Form / Edit / View / Help`** (Ext buttons: Form=`button-1020`/`menu-1021`, Edit=`button-1038`/`menu-1039`, View=`button-1062`/`menu-1063`, Help=`button-1068`/`menu-1069`) — **not** a classic Ext `menubar` component, so `Ext.ComponentQuery.query('menubar')` returns nothing; the menus are reached via `button[menu]` components. **observed** (new, T5).
- **`Unload All Global Form Objects` lives under `Form > Definition`** (Definition submenu `menu-1023`), and is **enabled** in this environment. The exact 2026.09.08 label is `Unload All Global Form Objects` (consistent with the EXP-006-R2 observation). **observed** (T5).
- **The unload maps to a single `POST /DesignerSession/ClearCache`** with body `{"instanceId":<n>,"eventName":"","eventSource":"","eventArgs":[]}` and response `{"Success":true}` (HTTP 200). One UI invocation → exactly one such request. **observed** (T5).
- **The unload produces no dialog, confirmation, toast, or console error**, and does not close/reopen any form; the Designer returns to its prior clean state. **observed** (T5).
- **`instanceId` in the ClearCache body was `79`** for this invocation (a session-local counter; not interpreted as cache scope). **observed** (T5).
- No Form was edited; `FX_FormPropertyLab05` was **not** reopened; no User Preference was changed; cache scope / IDO trigger behavior was **not** investigated; the unload was invoked **exactly once**.

### T5.8 — T5 knowledge-state updates

- Exact unload command label `Unload All Global Form Objects` under `Form > Definition` (Designer): **observed** (T5) — re-verified live in this experiment.
- Single UI invocation → exactly one `POST /DesignerSession/ClearCache` (200, `{"Success":true}`): **observed** (T5).
- `FX_FormPropertyLab05` still closed; `FX_FormPropertyLab04` open/clean/untouched; no error/dialog after unload: **observed** (T5).
- Description persistence across the coupled unload: **unverified** (target of T6 — reopen and compare).

### T5.9 — Stopped here (per instruction, after the single unload)

Left the system ready for the next task: `FX_FormPropertyLab05` closed; `FX_FormPropertyLab04` open/clean/untouched; the global-Form-object unload invoked **exactly once** (single new `ClearCache` `#116`, `{"Success":true}`); no error/dialog/toast; console clean. Did **not** reopen `FX_FormPropertyLab05`; did **not** edit any Form; did **not** change User Preferences; did **not** investigate cache scope or IDO trigger behavior. **Next task (T6):** reopen exactly `FX_FormPropertyLab05` (ScopeType=User, same ScopeName) and verify the Description persisted while the recorded comparison properties remain unchanged.

### T5.10 — Single-unload reconciliation (cycle 7, read-only; no mutation, no second unload)

Coordinator instruction: reconcile the single-unload step using **only** the existing artifacts (evidence `35`/`36`/`37`, this record, and the retained browser/network history) — no second unload, no reopen, no edit, no preference change. Re-verified each of the six required points against the retained artifacts:

| # | Required point | Verdict | Proven by |
|---|----------------|---------|-----------|
| 1 | Immediately before invocation `FX_FormPropertyLab05` closed and `FX_FormPropertyLab04` open/clean/untouched | **PROVEN** | evidence `35` (only the `Form Property Lab Coupled Unload Replay` = lab04 tab present; no lab05 tab; User scope) + T5.1 live read (`urlHasMGForm04=true`, `hasLab05Tab=false`, Save/Regen/Undo/Redo all disabled, no windows) |
| 2 | Visible 2026.09.08 command label was exactly `Unload All Global Form Objects` | **PROVEN** | evidence `36` (`Form > Definition` submenu showing the enabled `Unload All Global Form Objects` item) + T5.2 (`menu-1023` item list) |
| 3 | Task-local ClearCache baseline was 1 historical request before invocation | **PROVEN** | T5.3 (pre-invocation filter returned exactly 1 request, `#95`) + retained history now shows `#95` as the pre-existing request |
| 4 | Exactly one NEW `/DesignerSession/ClearCache` from this invocation → post count 2 total, +1 task-local | **PROVEN** | retained history shows exactly 2 total (`#95` + `#116`); T5.3→T5.5 document before=1 → after=2 (delta +1) |
| 5 | The new request completed successfully (method/status/response) | **PROVEN** | retained `#116`: `POST`, **HTTP 200**, xhr, `application/json`; request body `{"instanceId":79,"eventName":"","eventSource":"","eventArgs":[]}`; response body `{"Success":true}` (content-length 16) |
| 6 | Afterward no error/dialog and `FX_FormPropertyLab05` remained closed | **PROVEN** | evidence `37` (clean Designer, no dialog/toast) + T5.5 + re-verified now (no visible windows, no toasts, `hasLab05Tab=false`, console 0 errors/0 warnings) |

**Reconciliation result: all six points PROVEN by the existing artifacts — no gap.** The single invocation is established (before=1 `#95`, after=2 `#95`+`#116`, delta +1; `#116` = POST 200 `{"Success":true}`). No second unload was performed; no Form was reopened/edited; no User Preference was changed. **Before/after ClearCache counts: 1 → 2.**

**Knowledge-classification correction (cycle 8):** The single-unload finding (all six reconciled points) is classified **`observed`** — **NOT** `replay_verified`. This experiment is an **original execution, not a replay**, so **no EXP-007 finding may be promoted to `replay_verified`**. (The `replay_verified` label elsewhere in this record applies only to the separate EXP-006/EXP-006-R2 *Caption*-persistence procedure, which is a different experiment.) All EXP-007 findings are therefore classified **no higher than `observed`**.

## T6 — Post-unload reopen + compare (2026-10-02)

Coordinator instruction: without any further unload or preference change, reopen exactly `FX_FormPropertyLab05` through supported UI and prove the loaded version is ScopeType=`User` with ScopeName=`anton.ramos@3mworks.com.ph` (matching the T2 baseline); capture evidence of the reopened Designer/effective Form definition and read the Form properties; verify Description is exactly `Form Property Description Lab`; compare against the recorded T2 baseline and verify Caption remains empty, Version remains `User version for user anton.ramos@3mworks.com.ph`, Device Type=`Default`, Form Type=`Normal`, Is Master=`True`, ScopeType=`User`, ScopeName=`anton.ramos@3mworks.com.ph`. Do not edit or Save anything, do not change User Preferences, do not invoke the unload again, do not modify `FX_FormPropertyLab04` or any other Form. Leave `FX_FormPropertyLab05` open and clean for the later final audit.

### T6.1 — Pre-reopen state (read-only, no mutation)

- Browser tabs (fresh conversation; inspected before any action): Tab 0 = Web Client (Mongoose workspace), Tab 1 = the same stray dead bare-portal-root tab, Tab 2 (current) = Designer with `?MGForm=FX_FormPropertyLab04`.
- Confirmed (live read): `FX_FormPropertyLab05` **closed** (no form tab, not in URL); `FX_FormPropertyLab04` **open/clean/untouched** (Save/Regen/Undo/Redo all disabled, no windows); `FX_FormPropertyLab05` present in the `Form` menu recent-forms list. (evidence `38`.)

### T6.2 — Reopen path (supported UI)

- **Reopen path: `Form` menu → `FX_FormPropertyLab05`** (the recent-forms entry in the Designer `Form` menu `menu-1021`). A single real click on that item reopened the form. (evidence `39` — Form menu open with the `FX_FormPropertyLab05` recent item.)
- After the click: URL became `?MGForm=FX_FormPropertyLab05`; the `FX_FormPropertyLab05` form tab appeared and became active; `FX_FormPropertyLab04` tab remained open (untouched); **no dialog/prompt** appeared. (evidence `40`.)

### T6.3 — Scoped identity of the loaded version

- Status bar: **`[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`** — the loaded version is **ScopeType=`User`**, **ScopeName=`anton.ramos@3mworks.com.ph`**, matching the T2 baseline exactly. (evidence `40`, `41`.)

### T6.4 — Post-unload Form property read (reopened Designer / effective Form definition)

Read from the reopened form's Design property store (`formpropertygrid-1135`):

| Property | Post-unload value (reopened) | T2 baseline | Comparison |
|----------|------------------------------|-------------|------------|
| Name | `FX_FormPropertyLab05` | `FX_FormPropertyLab05` | unchanged |
| **Description** | **`Form Property Description Lab`** | *(empty)* | **PERSISTED** (the T3 edit survived the coupled unload) |
| Caption | *(empty)* | *(empty)* | unchanged |
| Version | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | unchanged |
| Device Type | `Default` | `Default` | unchanged |
| Form Type | `Normal` | `Normal` | unchanged |
| Is Master | `True` | `True` | unchanged |
| ScopeType | `User` | `User` | unchanged |
| ScopeName | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | unchanged |

**Result: the Description persisted across the verified coupled unload, and every recorded comparison property is unchanged from the T2 baseline.** (evidence `41` — reopened form with the Design properties panel showing Description = `Form Property Des…`, Caption empty, Version/Device Type/Form Type/Is Master at baseline, User scope.)

### T6.5 — Post-reopen state (left open and clean)

- `FX_FormPropertyLab05` is **open and clean**: Save/Regen/Undo/Redo all disabled (no unsaved changes), no visible windows/dialogs; `FX_FormPropertyLab04` tab still open/untouched; **console 0 errors / 0 warnings**. Left open for the later final audit (T7). Nothing was edited or Saved; no User Preference was changed; the unload was **not** invoked again; `FX_FormPropertyLab04` and all other Forms were untouched.

### T6.6 — T6 evidence (under `evidence/EXP-007/`)

- `38-t8-pre-reopen-lab04-open-lab05-closed.png` — pre-reopen: `FX_FormPropertyLab04` open/clean, `FX_FormPropertyLab05` closed.
- `39-t8-form-menu-reopen-lab05-item.png` — `Form` menu open showing the `FX_FormPropertyLab05` recent-forms entry (the reopen path).
- `40-t8-reopened-lab05-loaded.png` — after reopen: `FX_FormPropertyLab05` tab active (URL `MGForm=FX_FormPropertyLab05`), User scope.
- `41-t8-reopened-lab05-properties-description-persisted.png` — reopened form's Design properties: Description = `Form Property Des…` (persisted), Caption empty, Version/Device Type/Form Type/Is Master at baseline, User scope.

### T6.7 — T6 observations / corrections

- **The Description `Form Property Description Lab` persisted** in the reopened Designer/effective Form definition after the form was closed, the global-Form-object unload was invoked once (with `Unload IDO Metadata With Forms` CHECKED), and the form was reopened in the same User scope. Recorded as **persistence observed in the reopened Designer/effective Form definition** (per the no-durable-row-inference rule). **observed** (T6).
- **All recorded comparison properties (Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) are unchanged** from the T2 baseline after the reopen. **observed** (T6).
- **Reopen path:** `Form` menu → recent-forms entry `FX_FormPropertyLab05` (Designer `menu-1021`); a single click reopens the exact User-scope version with no prompt. **observed** (T6).
- Reopening a clean form produces **no unsaved-change state** (toolbar stays disabled) and **no console errors**. **observed** (T6).
- No edit/Save was performed; no User Preference was changed; the unload was **not** re-invoked; `FX_FormPropertyLab04` and all other Forms were untouched.

### T6.8 — T6 knowledge-state updates

- Description persistence across the verified coupled unload (closed → single unload with `Unload IDO Metadata With Forms` CHECKED → reopened same User scope): **observed** (T6) — the core acceptance result of this experiment.
- All comparison properties unchanged after reopen: **observed** (T6).
- Reopen path `Form` menu → recent-forms entry: **observed** (T6).
- **All EXP-007 findings remain classified no higher than `observed`** (original execution, not a replay).

### T6.9 — Stopped here (per instruction, after reopen + compare)

Left `FX_FormPropertyLab05` **open and clean** (no unsaved changes; Save/Regen/Undo/Redo disabled; no dialogs; console clean) for the later final audit; `FX_FormPropertyLab04` open/clean/untouched. Did **not** edit or Save anything; did **not** change User Preferences; did **not** invoke the unload again; did **not** modify `FX_FormPropertyLab04` or any other Form. **Next task (T7):** final read-only browser/repository audit; acceptance table; classification.

## T7 — Final read-only browser/repository audit + acceptance (2026-10-02)

Coordinator instruction: perform the final read-only audit (no mutation, no unload, no edit, no preference change). Verify the target Form is clean with the persisted Description; audit the Select Form store (total / `FX_` / exactly one target); re-read `Unload IDO Metadata With Forms` (must remain CHECKED); audit the repository/worktree to prove this run's changes are confined to the EXP-007 record + `evidence/EXP-007/`; write the AC-1…AC-10 acceptance table; classify all findings (no `replay_verified` for EXP-007).

### T7.1 — Target Form clean-state verification (read-only, no mutation)

- Browser tabs at T7 start (fresh conversation; inspected before any action): Tab 0 = Web Client (Mongoose workspace), Tab 1 = the same stray dead bare-portal-root tab, Tab 2 (current) = Designer with `?MGForm=FX_FormPropertyLab05` (left open/clean from T6).
- Confirmed (live read + evidence `42`): `FX_FormPropertyLab05` is **open and clean** — toolbar Save/Regen/Undo/Redo all **disabled**, no visible windows; the `FX_FormPropertyLab04` tab still present/untouched.
- Property re-read from the Design property store (`formpropertygrid-1135`):

| Property | Value (T7 re-read) | vs T2 baseline |
|---|---|---|
| Name | `FX_FormPropertyLab05` | unchanged |
| **Description** | **`Form Property Description Lab`** | **persisted** (was empty) |
| Caption | *(empty)* | unchanged |
| Version | `User version for user anton.ramos@3mworks.com.ph` | unchanged |
| Device Type | `Default` | unchanged |
| Form Type | `Normal` | unchanged |
| Is Master | `True` | unchanged |
| ScopeType | `User` | unchanged |
| ScopeName | `anton.ramos@3mworks.com.ph` | unchanged |

(evidence `42`.)

### T7.2 — Select Form store audit (read-only)

- Switched to the Web Client (Tab 0); opened the **Select Form** dialog (`Open` = `mgtoolbarbutton-1101`, real click). (evidence `43`.)
- **Full store scan:** total records = **641**; `FX_FormPropertyLab05` — **exactly 1 exact** and **1 case-insensitive** match (the same record); `FX_`-prefixed forms = **exactly 10**. (evidence `44`.)
- **UI filter `FX_FormPropertyLab05`** → **exactly 1 row**. (evidence `45`.)
- **UI filter `FX_`** → **exactly 10 rows**: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01`. (evidence `46`.)
- Closed the dialog via **Cancel** (real click); the Web Client returned to its normal state. (evidence `47`.)

### T7.3 — Preference re-read (read-only, no change)

- Re-opened **User Preferences** (`Form > User Preferences`, Behavior page) and re-read **`Unload IDO Metadata With Forms`**: **CHECKED** (`checked: true`). (Component id `ext-comp-2276` on this fresh load — the numeric id drifts per load, as expected; the label and its checked state are the stable identity.) (evidence `48`.)
- Closed the preferences view **without mutation** (Close Panel ×, not OK/Save); no save prompt. (evidence `49`.)
- Console: **0 errors / 1 warning** (the single warning is a benign framework notice, not an error).

### T7.4 — Repository / worktree audit (read-only)

- Worktree is **not** a git repository; audit by file modification time.
- **Run boundary:** `R-20261002-122012-MzML` started **2026-10-02 12:20:12**.
- **Intentional EXP-007 worker changes (this run) are confined to:**
  - `experiments/EXP-007-form-description-persistence-across-verified-coupled-unload.md` (this record)
  - `evidence/EXP-007/` (screenshots `01`–`49`)
- **NOT modified (all predate the run start, mtime 9/30/2026):** `AGENTS.md`, `opencode.json`, `environments/current-environment.md`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` records.
- **Other files with in-window mtimes are NOT EXP-007 experiment artifacts:**
  - `tools/learning-harness/**` — harness runtime (coordinator/worker messaging, transcripts, briefs, sqlite, autopilot, proposals); managed by the harness, not created by the worker as experiment content.
  - `evidence/playwright/**` — auto-generated Playwright MCP snapshot/console artifacts (a side effect of the browser-automation tooling), shared across experiments.
  - `experiments/EXP-006-R2-…md` — a **separate, earlier** experiment's record (its mtime falls in the window but it is not an EXP-007 artifact and was not modified by this run's worker actions).
- **Conclusion:** the EXP-007 experiment's own changes are confined to the record + `evidence/EXP-007/`; no recipe, environment, context, or AGENTS.md file was created or modified.

### T7.5 — T7 evidence (under `evidence/EXP-007/`)

- `42-t9-designer-lab05-clean-verified.png` — Designer on `FX_FormPropertyLab05`: open/clean (toolbar disabled), Description `Form Property Des…`, Caption empty, baseline properties, User scope.
- `43-t9-webclient-before-select-form.png` — Web Client before opening the Select Form dialog.
- `44-t9-select-form-dialog-open-641.png` — Select Form dialog open, full store (641 records).
- `45-t9-select-form-filter-lab05-one-row.png` — Select Form dialog filtered to `FX_FormPropertyLab05` → exactly 1 row.
- `46-t9-select-form-fx-inventory-ten-rows.png` — Select Form dialog filtered to `FX_` → exactly 10 rows.
- `47-t9-webclient-after-dialog-close.png` — Web Client after Cancel (dialog closed, normal state).
- `48-t9-user-prefs-unload-ido-metadata-checked.png` — User Preferences Behavior page: `Unload IDO Metadata With Forms` **CHECKED** (re-read).
- `49-t9-webclient-after-prefs-closed.png` — Web Client after closing User Preferences without mutation.

### T7.6 — Acceptance criteria (AC-1 … AC-10)

| AC | Criterion | Verdict | Proven by |
|---|---|---|---|
| AC-1 | `FX_FormPropertyLab05` proven absent before creation (exact + case-insensitive, store + UI) | **PASS** | T1 (evidence `03`–`06`; store scan 0/0) |
| AC-2 | Exactly one new User-scope classic BuildFromScratch Form created via the verified recipe; store 640→641, FX_ 9→10; no template artifact | **PASS** | T2 (evidence `11`–`19`) |
| AC-3 | Exact scoped identity recorded (ScopeType=User, ScopeName=`anton.ramos@3mworks.com.ph`) + full pre-Description baseline | **PASS** | T2.4 (evidence `16`–`17`) |
| AC-4 | Only the Form-level Description changed empty → `Form Property Description Lab`; ordinary Save to clean; all comparison properties unchanged | **PASS** | T3 (evidence `20`–`24`; T3.4 table) |
| AC-5 | Target closed via supported UI; no unsaved-change prompt; `FX_FormPropertyLab04` untouched | **PASS** | T4 (evidence `25`–`26`) |
| AC-6 | `Unload IDO Metadata With Forms` read CHECKED/enabled (gate PASSED); preferences closed without mutation | **PASS** | T4 (evidence `33`–`34`) |
| AC-7 | `Unload All Global Form Objects` invoked **exactly once** (single new `ClearCache` `#116`, POST 200 `{"Success":true}`); no error/dialog; target still closed | **PASS** | T5 (evidence `35`–`37`; T5.10 reconciliation) |
| AC-8 | Target reopened in the same User scope (ScopeType=User, same ScopeName) | **PASS** | T6 (evidence `38`–`40`) |
| AC-9 | **Final acceptance bundle:** (a) reopened Designer shows Description = `Form Property Description Lab` and all recorded comparison properties unchanged from the T2 baseline; (b) **final uniqueness** — exactly one `FX_FormPropertyLab05` (exact + case-insensitive), total form count **641**, `FX_` count **10**; (c) `Unload IDO Metadata With Forms` still **CHECKED** with **no preference mutation**; (d) **repository-scope confinement** — all EXP-007-run changes confined to the record + `evidence/EXP-007/` | **PASS** | (a) T6 (evidence `41`; T6.4 table) + T7.1 re-read (evidence `42`); (b) T7.2 store audit (evidence `43`–`47`); (c) T7.3 preference re-read (evidence `48`–`49`); (d) T7.4 repository audit (re-verified T7.9) |
| AC-10 | **Classification:** the Description-persistence result and **every** EXP-007 finding are classified **`observed` only** (no `replay_verified`); this was an **original execution, not a replay**; a **separate, independent clean replay** is required before any `replay_verified` promotion or a reusable Description recipe | **PASS** | T5.10 / T6.8 / T7.7 (all findings ≤ `observed`) |

**All ten acceptance criteria PASS.**

### T7.7 — Knowledge-state updates (final)

- **Core result — Description persistence across the verified coupled unload** (closed → single `Unload All Global Form Objects` with `Unload IDO Metadata With Forms` CHECKED → reopened same User scope): **observed** (T6, re-confirmed T7). Classified **`observed`**, NOT `replay_verified`.
- **All comparison properties unchanged** after the coupled unload + reopen: **observed** (T6/T7).
- **Single UI invocation → exactly one `POST /DesignerSession/ClearCache`** (200 `{"Success":true}`); no dialog/toast/error: **observed** (T5).
- **`Unload IDO Metadata With Forms` CHECKED** (re-verified read-only in T4 and T7): **observed**.
- **Select Form store 641 / FX_ 10 / exactly one target** after creation and through the final audit: **observed** (T2/T7).
- **Repository/worktree changes confined to the EXP-007 record + `evidence/EXP-007/`:** **observed** (T7.4).
- **Classification rule (final):** EXP-007 is an **original execution, not a replay**; therefore **no EXP-007 finding is promoted to `replay_verified`**. The Description-persistence procedure is **`observed`** (single execution + persistence verified) and becomes a candidate for a reusable recipe only after a **separate, independent clean replay** (out of scope for this experiment). The only `replay_verified` label in this record (the Knowledge-state note under the preflight) correctly refers to the separate EXP-006/EXP-006-R2 *Caption*-persistence procedure.

### T7.8 — Final state / handoff

- `FX_FormPropertyLab05` left **open and clean** (Description = `Form Property Description Lab`; no unsaved changes; toolbar disabled; no dialogs); `FX_FormPropertyLab04` open/clean/untouched. Console 0 errors / 1 warning.
- `Unload IDO Metadata With Forms` remains **CHECKED** (unchanged). No User Preference was modified at any point.
- No Form other than `FX_FormPropertyLab05` was created, modified, or deleted; no variables/components/bindings/scripts created; no non-`FX_` artifact touched; editing scope stayed **User** throughout.
- **Experiment complete.** All acceptance criteria (AC-1…AC-10) PASS. Findings classified no higher than `observed`.

### T7.9 — T10 reconciliation + finalization (cycle 10, read-only; no Mongoose mutation)

Coordinator instruction: reconcile and finalize EXP-007 only — no Form edits, no Save, no preference changes, no additional unload, no new recipe/context/environment changes. Inspect the existing T9 evidence (`42`–`49`), complete the repository/worktree audit, prove confinement, finalize the AC-1…AC-10 table, and report readiness for coordinator completion.

**Repository/worktree audit (re-verified, read-only; run boundary 2026-10-02 12:20:12):**

- **Confinement PROVEN.** Excluding harness runtime (`tools/learning-harness/**`), Playwright auto-snapshots (`evidence/playwright/**`, `.playwright-mcp/**`), and `node_modules`, the **only** files modified at/after the run start are:
  - `experiments/EXP-007-form-description-persistence-across-verified-coupled-unload.md` (this record)
  - `evidence/EXP-007/01…49` (49 screenshots)

  No other factory file was modified by this run.
- **Knowledge/context files NOT modified (all predate the run start, mtime 9/30/2026):** `AGENTS.md`, `opencode.json`, `environments/current-environment.md`, `recipes/forms/create-basic-form.md`, `recipes/components/configure-basic-component.md`, `recipes/components/add-component-from-toolbox.md`. The `claims/` directory is empty (pre-existing). No other `experiments/EXP-00x-*.md` record was modified by this run (the newest, `EXP-006-R2-…md`, is mtime 10/2 12:01:13 — **before** the 12:20:12 run start).
- **Distinguished as NOT experiment mutations:** `tools/learning-harness/**` (harness coordinator/worker messaging, transcripts, briefs, sqlite, autopilot, proposals — managed by the harness), `evidence/playwright/**` + `.playwright-mcp/**` (auto-generated Playwright MCP snapshot/console artifacts, a tooling side effect shared across experiments), and `experiments/EXP-006-R2-…md` (a separate, earlier experiment's record). Their in-window mtimes do **not** indicate EXP-007 mutation.
- **Conclusion:** all changes attributable to this EXP-007 run are confined to the record + `evidence/EXP-007/`; no recipe, environment, project-context, AGENTS.md, or other knowledge file was created or modified.

**AC table finalization:** AC-9 expanded to the full final-acceptance bundle (reopened Description + unchanged properties; final uniqueness exactly-one / 641 / FX_ 10; `Unload IDO Metadata With Forms` still CHECKED with no preference mutation; repository-scope confinement). AC-10 made explicit (Description-persistence result and every EXP-007 finding = `observed` only; not a replay; separate clean replay required before any `replay_verified` promotion or reusable Description recipe).

**Final verdict:** **AC-1 through AC-10 all PASS.** Every check is supported by the cited evidence and record sections. The experiment is **ready for coordinator completion** (no Mongoose mutation was performed in this reconciliation; `FX_FormPropertyLab05` remains open and clean; `Unload IDO Metadata With Forms` remains CHECKED/unchanged).