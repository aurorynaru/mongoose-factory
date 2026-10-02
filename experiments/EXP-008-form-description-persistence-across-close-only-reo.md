# EXP-008 — Form Description Persistence Across Close-Only Reopen (FX_FormPropertyLab07)

Status: **COMPLETE — all acceptance criteria AC-1 … AC-10 PASS; result classified `observed` (single controlled execution; not `replay_verified`; no reusable recipe promoted).** T1 (read-only preflight): scope **User** proven; `FX_FormPropertyLab07` proven absent (0/0/0/0 store + both UI filter modes + 6-row positive control); inventory **642 / 11 `FX_` / 0 target**; worktree baseline captured; `Unload IDO Metadata With Forms` read **CHECKED/enabled** via the supported visible route without change/Save; screenshots `01`–`11`. T2 (creation + baseline): exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab07` created via the verified recipe (Save Template unchecked); store 642→643, `FX_` 11→12, exactly one target (single record `extModel214-2582` at index 282); full pre-Description baseline recorded (Description **empty**, Caption empty, Version `User version for user <user>`, Device Type `Default`, Form Type `Normal`, Is Master `True`, ScopeType `User`); target left **open and clean**; `FX_FormPropertyLab04/05/06` untouched; no unload invoked. T3 (read-only AC-3 reconciliation): loaded target confirmed exactly `FX_FormPropertyLab07`, clean, exactly one target, inventory **643 / 12 `FX_` / 1 target**, baseline re-read identical to T2; screenshots `22`–`23`. T4 (AC-4): **only** the Form-level Description changed from empty to exactly `Form Property Description Close Only` via the supported inline property-grid editor; exactly one ordinary Designer Save (no dialog, no error); post-Save Designer **clean** and **all comparison values re-verified** equal to the AC-3 baseline; target left **open and clean**; screenshots `24`–`26`. T5 (AC-5 + AC-6): `FX_FormPropertyLab07` **closed normally** via its supported form-tab close button (single click) — tab removed, URL moved to `?MGForm=FX_FormPropertyLab06`, **no unsaved-change prompt**, **no mutation**; **no ClearCache-style request** around the close (only 2 ordinary `GenerateServerEvent`); **AC-6 audit** confirms **no explicit global-form-object unload was invoked at any point in EXP-008**; target left **CLOSED**; screenshots `27`–`28`. T6 (AC-7 + AC-8): `FX_FormPropertyLab07` **reopened** via the supported Designer **`Form` menu → recent-forms entry** (no unload, no edit, no Save); loaded identity is the same AC-3 version (Name `FX_FormPropertyLab07`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`); **Description recovered exactly `Form Property Description Close Only`** and **all** comparison properties recovered unchanged; Designer **clean**; **no ClearCache-style request** around the reopen (only `GetFormDesigner` + `GenerateServerEvent`); target left **OPEN and clean**; screenshots `29`–`31`. T7 (AC-9 + AC-10 final read-only audit): target still open/clean with all persisted values intact (Description exact); exactly one target (**643 / 12 `FX_` / 1**); `Unload IDO Metadata With Forms` re-read **CHECKED/enabled** (unchanged from T1) via the same supported visible surface and closed without Save (no unsaved state); **no explicit global-form-object unload performed** (record + network + state re-audit); repository/worktree changes **confined to this record + `evidence/EXP-008/`** (mtime audit; no recipe/environment/AGENTS.md/other-experiment change; no recipe promoted); screenshots `32`–`35`. **Result = `observed`:** this single execution shows literal User-scope Description recovery across this specific ordinary close/reopen path only; it does NOT establish IDO-metadata trigger behavior, internal cache semantics, Forms-database persistence, behavior of other Form properties/scopes, or replay verification.
Date: 2026-10-02
Mode: LEARNING MODE — first execution of the Form-Description-persistence-across-**close-only-reopen** procedure on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab07`.
Run: `R-20261002-165426-GuWm` (cycle 1 T1, cycle 2 T2, cycle 3 T3, cycle 4 T4, cycle 6 T5, cycle 7 T6, cycle 8 T7), started 2026-10-02 16:54:26.

## Objective

Create one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab07` using the verified basic-form recipe, record its untouched Form-property baseline, change only its Form-level Description to the literal value `Form Property Description Close Only`, ordinary-save to a demonstrably clean Designer state, close the target Form, **do not** invoke `Form > Definition > Unload All Global Form Objects`, reopen the exact same customized Form version identified by Form name + ScopeType + ScopeName, and verify that Description plus all recorded comparison properties are recovered unchanged. Also record, as diagnostic evidence only, whether any ClearCache-style request is observed around the close/reopen sequence, without inferring IDO-metadata or system-wide cache semantics.

In scope: read-only preflight of the current User editing scope and target absence; read-only confirmation of the current `Unload IDO Metadata With Forms` preference state (must not be changed); create exactly one new User-scope classic BuildFromScratch Form named `FX_FormPropertyLab07` using the existing verified basic-form recipe; record baseline Form properties before editing Description; change only Form-level Description to `Form Property Description Close Only`; perform one ordinary Designer Save and verify the Designer returns clean; close `FX_FormPropertyLab07` normally; reopen it **without** invoking `Unload All Global Form Objects`; verify the reopened version by Form name + ScopeType + ScopeName; capture screenshots and relevant response/network observations under `evidence/EXP-008/`; update only the EXP-008 experiment record and its evidence directory.

Out of scope: Form variables or any workaround for EXP-004; Caption edits; components, collections, bindings, event handlers, scripts, validators, data sources, or IDO definitions; Site, Group, Vendor Default, or scope-switching experiments; changing `Unload IDO Metadata With Forms` or any other User Preference; invoking `Unload All Global Form Objects`; claiming that close-only behavior proves IDO-metadata unloading or any specific internal cache mechanism; direct database edits, undocumented APIs, metadata hacks, or manual backend changes; creation or modification of reusable recipes; modification of any non-`FX_` Mongoose artifact.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Web Client iframe title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`).
- Browser state at preflight start (inspected first; **no login performed — session already authenticated**): three tabs:
  - Tab 0: Mongoose Web Client (portal), signed in — user badge present (value masked by the secrets layer, not read or printed); **no form open** (no form tabs); toolbar **clean** (Save `mgtoolbarbutton-1102` disabled; New/Delete/Refresh also disabled); **no** visible Ext windows; **no** `portal-notification` banner. URL carries the leftover `favoriteContext=UserPreferences` param from prior EXP-007-R2 User-Preferences reads (display-only; no form tab exists for it). Portal workspace tabs: System Administrator, Mongoose (selected), **User Settings** (long-standing display-only leftover from EXP-007-R2 T5.9 exploration; untouched in this preflight).
  - Tab 1: **stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (empty title) — the long-standing leftover of the EXP-006 T8 SLO-recovery navigation; **not re-verified in this preflight** (no navigation performed). Not a Designer tab.
  - Tab 2: **Web Designer tab open** at `WSWebClient/designer/Default.aspx?…&MGForm=FX_FormPropertyLab06` — `FX_FormPropertyLab06` was **left open and clean** by EXP-007-R2 T8/T10 (post-unload reopen + final audit) and was not closed at the end of that experiment. Read-only inspection in this preflight: status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar **clean** (Save/Regenerate/Undo/Redo disabled), no visible windows. Three form tabs present: `Form Property Lab Coupled Unload Replay` (= `FX_FormPropertyLab04`, leftover from EXP-006-R2/EXP-007), `FX_FormPropertyLab05` (leftover from EXP-007), and `FX_FormPropertyLab06` (active per URL; Description `Form Property Description Lab Replay` visible in the Design properties panel). **None was touched** in this preflight.
- **Target form `FX_FormPropertyLab07` does NOT exist** — full Select Form store scan (642 records) found 0 exact and 0 case-insensitive matches in both the Name (`mgdata`) and Caption (`text`) fields; UI filter searches in both case modes returned 0 rows (method and evidence below).
- Existing `FX_` forms (**exactly 11**, store indices in `mgdata` order): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab06` (282, Caption empty — store `text` shows the Name fallback), `FX_FormPropertyLab05` (283, Caption empty — Name fallback), `FX_ComponentLab02` (284), `FX_ComponentLab01` (285), `FX_FormPropertyLab02` (313, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04` (314, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03` (315, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (316, Caption `Form Property Lab`).
- Form-count reconciliation: 642 total / 11 `FX_` — **identical** to the EXP-007-R2 T10 final audit (642 / 11, same 11 names, same store indices 279–285 / 313–316). No growth, no deletions, no unexplained artifacts.
- **`Unload IDO Metadata With Forms` preference: read CHECKED/enabled in this preflight** (T1.5 below) — `checked: true`, `getValue(): true`, `disabled: false`, `hidden: false`, visibly rendered with on-screen rect `{x:770, y:119, w:320, h:27}` (component `ext-comp-3377` on this load; numeric id drifts per load). Read-only; no change, no Save. **Preference gate: PASS.**
- No Mongoose artifact was created, modified, or deleted during this preflight. No User Preference was changed or saved. No unload command was invoked. No form was opened from the Select Form dialog. No Designer mutation was performed. Editing scope unchanged (User).

## Preflight method (T1)

1. Inspected repository state: `experiments/` (latest record `EXP-007-R2-…md`, mtime 16:45:17 — its T11 finalization; before this run's 16:54:26 start), `recipes/forms/create-basic-form.md` (status **verified**), `environments/current-environment.md`. Worktree is not a git repository; starting-state audit by file mtime (see below).
2. Inspected current browser state (3 tabs as above) — **no login performed** (session already authenticated). Screenshot of the Designer tab (evidence `01`) and of the Web Client (evidence `02`).
3. Confirmed Web Client iframe state programmatically (title = config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; user badge present; no visible windows; no form tabs; Save disabled).
4. In the Web Client, clicked **Open** (`mgtoolbarbutton-1101`, native Playwright click) → **Select Form** dialog (window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Filter By combo `combo-1145`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147` — **identical IDs to the EXP-007-R2 session**). The dialog reopened with the **remembered filter `FX_`** (left by the EXP-007-R2 T10 inventory filter) → store showed **11 records** (evidence `03`).
5. Cleared the filter through the UI (focus `#textfield-1143-inputEl`, triple-click, Delete — real key events) → store reloaded to the full list, **642 records**.
6. **Target-absence proof (store-level, authoritative):** scanned the entire Select Form store (all **642** records): field `mgdata` (Name) — **0 exact** matches for `FX_FormPropertyLab07`, **0 case-insensitive** matches (`toLowerCase()` comparison); field `text` (Caption) — **0 exact**, **0 case-insensitive**. Enumerated all 11 `FX_`-prefixed records (indices above); near-miss scan for `formpropertylab07` (case-insensitive substring, Name and Caption) matched **0** records.
7. **Target-absence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab07` into the Filter field (Filter By = Caption & Name / internal value `both`, Case Sensitive **off**, real key events) → store reloaded to **0 records** (evidence `04`).
8. **Target-absence proof (UI-level, case-sensitive):** toggled **Case Sensitive on** via the checkbox's own `onBoxClick()` handler (`getValue()` false→true verified after the toggle), cleared and re-typed `FX_FormPropertyLab07` → **0 records** (evidence `05`).
9. **Positive control (UI-level, case-sensitive):** cleared and typed `FX_FormPropertyLab` (same mode) → exactly **6 rows**: `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — proves the filter mechanism works and that only the 01–06 variants exist (evidence `06`).
10. **Visual inventory:** cleared and typed `FX_` → exactly **11 rows** rendered in the grid (evidence `07`).
11. Restored the dialog to its original state: Case Sensitive back **off** (`onBoxClick()` again, verified `getValue()=false`), filter cleared via real key events → full store restored, **642 records**, Starts With verified off (`inputEl.dom.checked = false`); closed the dialog with **Cancel** (`button-1150`, native click). Verified the Web Client returned to its original state: no visible windows, Save disabled (evidence `08`).
12. **Editing-lane check (read-only):** switched to the Designer tab (tab 2) and read its state without interaction: status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean (Save/Regenerate/Undo/Redo disabled), no visible windows, `FX_FormPropertyLab06` active (`?MGForm=FX_FormPropertyLab06`) with the `FX_FormPropertyLab05` and `FX_FormPropertyLab04` tabs also present (all leftovers from EXP-007/EXP-007-R2/EXP-006-R2; untouched). The lane is **suitable for a later User-scope creation** (scope already User for the signed-in user).
13. **Preference gate (read-only):** in the Web Client, opened **Form > User Preferences** (native Playwright click on the Form menu button, then native click on the `User Preferences` menu item `#menuitem-1043-itemEl` — the same supported route as EXP-007-R2 T1/T5.9/T10) → the User Preferences workspace view opened on the **Behavior** page. Read the checkbox with boxLabel **`Unload IDO Metadata With Forms`** (component `ext-comp-3377`): **CHECKED** (`checked: true`, `getValue(): true`, `disabled: false`, `hidden: false`, on-screen rect `{x:770, y:119, w:320, h:27}` — genuinely rendered, not a hidden/stale component). (evidence `09`, `10`.) **No toggle, no change to any other preference, no Save/OK.** Closed the view via its tab close (×) button — **not** OK/Save; **no "save changes?" prompt appeared**; workspace returned to normal (no tabs, no windows, Save disabled). (evidence `11`.)
14. Audited the worktree starting state by mtime (see below). Console: 0 errors / 1 warning (pre-existing benign portal Content Catalog warning, unrelated to Mongoose).

## T1 requirement-to-evidence mapping

| # | T1 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Prove current Designer editing scope is User | **PROVEN** — Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (ScopeName masked by the secrets layer; the signed-in user is `anton.ramos@3mworks.com.ph` per `environments/current-environment.md`); read-only, no scope dialog, no scope switch | evidence `01`; T1.12 |
| 2 | Prove `FX_FormPropertyLab07` absent (exact + case-insensitive) by supported UI/store evidence | **PROVEN** — store scan 642 records: 0/0 Name, 0/0 Caption (exact + CI); UI filter 0 rows case-insensitive; 0 rows case-sensitive; positive control 6 rows; near-miss scan 0 | evidence `03`–`07`; table below |
| 3 | Record total `FX_` inventory count and target count | **RECORDED** — 642 total / 11 `FX_` / 0 target (identical to EXP-007-R2 T10 final audit) | evidence `07`; T1.6 |
| 4 | Capture repository/worktree baseline | **CAPTURED** — mtime audit; run boundary 16:54:26; latest pre-existing content = EXP-007-R2 record (16:45:17); all protected files predate the run | "Repository / worktree starting state" below |
| 5 | Read `Unload IDO Metadata With Forms` via the supported visible surface, without change/Save | **PROVEN** — visibly rendered (non-zero rect) and **CHECKED/enabled** via Web Client `Form > User Preferences` → Behavior page; closed via tab × without Save; no save prompt | evidence `09`–`11`; T1.13 |
| 6 | Capture screenshots/log evidence under `evidence/EXP-008/` and update only the EXP-008 record | **DONE** — screenshots `01`–`11`; only this record + `evidence/EXP-008/` written | this file; `evidence/EXP-008/` |

## Target-absence evidence — pre-mutation absence of `FX_FormPropertyLab07`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store (Name) | Store scan of all 642 records, field `mgdata`, `=== 'FX_FormPropertyLab07'` | **0 matches** |
| Case-insensitive, whole store (Name) | Store scan, `mgdata.toLowerCase() === 'fx_formpropertylab07'` | **0 matches** |
| Exact / case-insensitive, whole store (Caption) | Store scan, field `text`, exact and `toLowerCase()` | **0 / 0 matches** |
| Near-miss scan | Case-insensitive substring `formpropertylab07` in Name and Caption | **0 matches** |
| UI filter, case-insensitive (Case Sensitive off, Filter By Caption & Name) | Dialog filter `FX_FormPropertyLab07` | **0 rows** (evidence `04`) |
| UI filter, case-sensitive (Case Sensitive on, Filter By Caption & Name) | Dialog filter `FX_FormPropertyLab07` | **0 rows** (evidence `05`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` (case-sensitive) | **6 rows**: `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` (evidence `06`) |
| Visual, full `FX_` inventory | Dialog filter `FX_` | exactly 11 `FX_` rows, no `FX_FormPropertyLab07` (evidence `07`) |

**Counts: total forms = 642; `FX_` forms = 11; target `FX_FormPropertyLab07` = 0.**

Case-insensitive matching was explicitly accounted for in multiple independent ways (store-level `toLowerCase` scan on both Name and Caption, UI filter with Case Sensitive off, and the positive control), not relied on a single exact-case filter.

**Name/Caption ambiguity:** the store scan distinguished the Name field (`mgdata`) from the Caption field (`text`) per record. No record carries a Caption resembling the target (case-insensitive Caption scan = 0). The only Name-fallback Captions in the target family are `FX_FormPropertyLab06` and `FX_FormPropertyLab05` (Caption empty → store `text` shows the Name), which are different Names and cannot be confused with `FX_FormPropertyLab07` under either exact or case-insensitive matching. No ambiguity exists for the target.

## Repository / worktree starting state (T1)

- Worktree is **not** a git repository; audit by file modification time.
- **Run boundary:** this run (`R-20261002-165426-GuWm`) started at **2026-10-02 16:54:26**.
- **New in this preflight (T1 window, 2026-10-02 ~16:56–17:05):** only `evidence/EXP-008/01…11` (11 screenshots) and this record file.
- **Most recent prior content:** `experiments/EXP-007-R2-clean-replay-form-description-persistence-across-p.md` (mtime 2026-10-02 16:45:17 — its T11 finalization; unchanged since) and `evidence/EXP-007-R2/*` (last 14:53:55).
- **NOT modified (all predate the run start):** `AGENTS.md` (9/30), `opencode.json` (9/30), `environments/current-environment.md` (9/30), every file under `recipes/` (9/30, including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` (≤ 10/2 16:45:17). `claims/` is empty (pre-existing).
- `evidence/playwright/` = auto-generated Playwright snapshot/console artifacts (shared across experiments); `tools/learning-harness/` = harness runtime (briefs/context written by the harness at run start) — neither is EXP-008 knowledge content.
- **Conclusion:** worktree starting state is clean; no recipe, environment, or AGENTS.md file was modified by this preflight.

## Observations

- **Select Form dialog reopened with the remembered filter `FX_`** (left by the EXP-007-R2 T10 inventory scan) → 11 records initially; cleared via real key events → full store 642. Re-confirms the long-standing finding that the dialog remembers its filter across close/reopen within the same Web Client session.
- **Filter store reload is driven by real input events** (re-confirmed): `page.keyboard.type()` / Delete reloaded the store each time; no programmatic `setValue` was used.
- **Case Sensitive checkbox (`mgDlgCbx-1146`)**: the component's own `onBoxClick()` handler toggled it consistently in both directions (`getValue()` false→true→false, verified after each toggle) — re-confirms the EXP-006/EXP-007 finding that `onBoxClick()` is the reliable toggle path.
- **State-first discipline caught a stale toggle:** one interrupted script run had toggled Case Sensitive ON before erroring out; the next pass re-read the checkbox state first, detected the drift, and corrected it. Lesson (re-confirmed): always re-read control state before and after each toggle in this persistent session.
- **Starts With checkbox (`mgDlgCbx-1147`)**: `getValue()` returns undefined in this build; the authoritative state is `inputEl.dom.checked` (`false` here) — re-confirms the EXP-007-R2 T1 note.
- Select Form dialog control IDs this session: window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Filter By combo `combo-1145` (value `both` = Caption & Name), checkboxes `mgDlgCbx-1146` (Case Sensitive) / `mgDlgCbx-1147` (Starts With), buttons OK `button-1149` / Cancel `button-1150` — **identical to the EXP-007-R2 session**.
- **User Preferences route re-confirmed:** the Web Client **Form** menu still contains **User Preferences** (`#menuitem-1043-itemEl` — same ID as EXP-007-R2 T1/T5.9/T10) and opens the full-width workspace tab on the **Behavior** page where `Unload IDO Metadata With Forms` is **visibly rendered** (non-zero on-screen rect). The preference component's numeric id drifted again (`ext-comp-3377` this load vs `ext-comp-2551` in EXP-007-R2 T1, `ext-comp-2827` in T5.9, `ext-comp-3102` in T10); the boxLabel is the stable identity.
- **`FX_FormPropertyLab06`, `FX_FormPropertyLab05`, and `FX_FormPropertyLab04` remain open in the Designer tab** (leftovers from EXP-007-R2 / EXP-007 / EXP-006-R2; all clean). Later tasks must not modify them and should account for them in the Designer's Form-menu recent list.
- The portal **"User Settings"** tab remains open (display-only leftover from EXP-007-R2 T5.9 exploration; the general Infor profile, NOT the Mongoose preference); untouched in this preflight.
- Tab 1 remains a stray dead bare-portal-root tab (per EXP-006-R2, a 403 "Missing Authentication Token" leftover); no navigation to it was performed in this preflight.
- Console: 0 errors / 1 warning (pre-existing benign portal Content Catalog "Template URL missing for view Home" warning — unrelated to Mongoose).
- No Mongoose artifact was created, modified, or deleted; no User Preference was changed or saved; no unload was invoked; no form was opened from the dialog; the Select Form dialog was left in a clean state (filter empty, both checkboxes off) and closed via Cancel.

## Evidence (under `evidence/EXP-008/`)

- `01-preflight-designer-state.png` — Designer tab at preflight start: `FX_FormPropertyLab06` active (`?MGForm=FX_FormPropertyLab06`), three form tabs (Lab04/Lab05/Lab06), Design properties visible (Description `Form Property Description Lab Replay`), status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean (Save/Regenerate/Undo/Redo disabled).
- `02-preflight-webclient-state.png` — Web Client at preflight start: signed in (user badge visible), no form open, toolbar clean (Save/New/Delete disabled), no notification banner, no dialogs.
- `03-preflight-select-form-remembered-filter.png` — Select Form dialog reopened with the remembered `FX_` filter (Filter By Caption & Name) → 11 records.
- `04-select-form-filter-lab07-case-insensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab07`, Filter By Caption & Name, Case Sensitive **unchecked** → grid empty (0 records).
- `05-select-form-filter-lab07-case-sensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab07`, Case Sensitive **checked** → grid empty (0 records).
- `06-select-form-filter-lab-prefix-six-rows.png` — Select Form dialog, Filter `FX_FormPropertyLab` (positive control, case-sensitive) → exactly 6 rows: `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02` (Caption `Form Property Lab Replay`), `FX_FormPropertyLab04` (Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03` (Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (Caption `Form Property Lab`).
- `07-select-form-fx-inventory-eleven-rows.png` — Select Form dialog, Filter `FX_` → exactly 11 `FX_` rows: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — **no `FX_FormPropertyLab07`**.
- `08-webclient-after-dialog-close.png` — Web Client after Cancel: original state restored (no form tabs, no dialogs, Save disabled).
- `09-form-menu-user-preferences-item.png` — Web Client `Form` menu open showing **User Preferences** (the supported path).
- `10-user-prefs-unload-ido-metadata-checked.png` — User Preferences view (Behavior page): **`Unload IDO Metadata With Forms` visibly rendered and CHECKED** (read-only; no change made).
- `11-webclient-after-prefs-closed.png` — Web Client after closing User Preferences without mutation: empty workspace, Save disabled, no dialogs (no unsaved mutation).

## Recipe availability for the next task

`recipes/forms/create-basic-form.md` (status **verified** — EXP-002 + EXP-002-R2, persistence verified across full page reload in both) is the creation path for `FX_FormPropertyLab07`: Web Client Designer split button (`mgtoolbarbutton-1126`) → Designer tab → **New** (`mgtoolbarbutton-1088`) → Form Wizard Selection (New Form / Category **Classic** / Wizard **BuildFromScratch**) → wizard page 1 Name `FX_FormPropertyLab07` (other defaults untouched) → Next → final step **uncheck "Save Template"** → Finish → "Process Completed Successfully" → OK (Finish persists immediately; Save disabled = clean). Session-specific control IDs from EXP-007-R2 T2 (wizard window `formwizard-2802`, expeditor `expeditor-2851`, Name combo `mgcombo-2858`, Save Template `ext-comp-3090`, success dialog `ext-comp-1009`) may drift — resolve at runtime. Known pitfalls: synthetic DOM clicks do not drive Ext window buttons (use native Playwright clicks); the wizard is a single scrollable page in this build; "Save Template" is checked by default (authoritative state = `aria-checked`/`getValue()`; reliable toggle = `onBoxClick()`); the Name field is an editable combo (`forceSelection:false`). **Designer lane note:** the Designer tab is already open in User scope with `FX_FormPropertyLab06` (active), `FX_FormPropertyLab05`, and `FX_FormPropertyLab04` loaded — a new form can be created in this existing session (per EXP-007-R2 T2, no scope re-prompt appears when the session scope is already established); the three open forms must not be modified.

## Knowledge state (as of T1)

- `FX_FormPropertyLab07` absent (exact and case-insensitive) in the 642-record Select Form store (Name **and** Caption fields), and in both UI filter modes: **observed** (T1, multiple independent methods + positive control).
- Select Form store count 642 and `FX_` count 11, reconciled against the EXP-007-R2 T10 final audit (642 / 11, identical set and indices): **observed** (re-confirmed).
- Designer editing scope is **User** for the signed-in user (status bar, read-only): **observed** (T1).
- `Unload IDO Metadata With Forms` preference is **CHECKED/enabled** for this user — re-verified read-only in this preflight via the supported visible Web Client `Form > User Preferences` → Behavior page route (`checked:true` / `getValue():true` / not disabled / non-zero on-screen rect); **left unchanged**: **observed** (re-confirmed; preference gate PASS).
- Supported visible route for the preference: Web Client `Form > User Preferences` (`#menuitem-1043-itemEl`) → workspace tab → Behavior page (checkbox visibly rendered); distinct from the Designer's `View > User Preferences` floating dialog (hidden checkbox): **observed** (re-confirmed; EXP-007-R2 T5.9/T10).
- Select Form dialog remembers its filter across close/reopen within the same Web Client session: **observed** (re-confirmed).
- Filter store reload requires real input events; `onBoxClick()` is the reliable Case Sensitive toggle; re-read control state before/after each toggle in this persistent session: **observed** (re-confirmed; stale-toggle incident caught and corrected).
- Starts With checkbox `getValue()` returns undefined; authoritative state = `inputEl.dom.checked`/`aria-checked`: **observed** (re-confirmed).
- Designer tab is open in **User scope** (clean toolbar) with `FX_FormPropertyLab06` + `FX_FormPropertyLab05` + `FX_FormPropertyLab04` still loaded from EXP-007-R2/EXP-007/EXP-006-R2; the lane is suitable for a later User-scope creation: **observed** (new).
- The EXP-008 **Description-persistence-across-close-only-reopen** procedure is **unverified** until this experiment (and a later independent replay) completes. The related EXP-007 Description-persistence-across-verified-coupled-unload procedure is `replay_verified` (EXP-007 + EXP-007-R2) — referenced for context only; the close-only variant is a distinct procedure and must not be assumed equivalent.
- Whether an ordinary Form close triggers any IDO-metadata unloading (e.g., a `ClearCache`-style request) is **open** — to be recorded as diagnostic evidence only during the close/reopen task, with no IDO-metadata or system-wide cache semantics inferred.

## Open questions / blockers

- None blocking for T1. All six preflight items are satisfied; the preference gate **PASSES** (CHECKED/enabled, read-only, visibly rendered).
- `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, and `FX_FormPropertyLab04` remain open in the Designer tab from EXP-007-R2/EXP-007/EXP-006-R2; later tasks must not modify them and should account for them in the Designer's recent-forms list.
- Whether any ClearCache-style request is observed around the close/reopen sequence is **open** (diagnostic-only; belongs to the close/reopen task; no cache semantics will be inferred).
- The exact close affordance and reopen path for the target will be re-observed in the Designer UI at that time (EXP-007-R2 T5/T8 used the form-tab × close button and the Designer `Form`-menu recent-forms entry respectively; neither will be assumed without re-observation).

## T1 — Stopped here (per instruction, after the read-only preflight)

Did **not** create `FX_FormPropertyLab07` or any other Form; did **not** edit any Form property; did **not** invoke `Unload All Global Form Objects` or any other unload; did **not** change or Save any User Preference; did **not** modify any existing FX_ Form or non-`FX_` artifact; did **not** switch scope. **Next task (T2):** using `recipes/forms/create-basic-form.md` exactly as the verified procedure, create exactly one new classic BuildFromScratch Form `FX_FormPropertyLab07` in User scope (Save Template unchecked); record its exact scoped identity and the full pre-Description baseline (Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, Is Master); prove exactly one target exists (store 642→643, `FX_` 11→12). Do NOT edit Description, do NOT change Caption or any other property, do NOT change User Preferences, do NOT close the target, do NOT invoke any unload.

## T2 — Creation of `FX_FormPropertyLab07` + untouched baseline (2026-10-02)

Coordinator instruction (AC-3): first re-read the current Designer state and confirm editing scope is still User and `FX_FormPropertyLab07` is still absent; if either guard fails, stop without mutation. Then use the verified `recipes/forms/create-basic-form.md` procedure to create exactly one classic BuildFromScratch User-scope Form named `FX_FormPropertyLab07` (Save Template unchecked). Do not edit Description or any other Form property after creation. Prove exactly one `FX_FormPropertyLab07` exists using supported UI/store evidence and record its untouched Form-property baseline (Description, Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName). Record the post-create total inventory and `FX_` count so the single-record delta is observable. Leave the new target open in a clean Designer state.

### T2.1 — Guards re-verified first (no mutation)

- Browser tabs at T2 start (fresh conversation; state inspected before any action): Tab 0 = Web Client (authenticated; no form open; Save disabled; no visible windows); Tab 1 = the same stray dead bare-portal-root tab as T1 (unchanged); Tab 2 (current) = Designer tab with `?MGForm=FX_FormPropertyLab06` (left open/clean by EXP-007-R2).
- **Guard 1 — scope (PASS):** Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (read-only); toolbar clean (Save/Regenerate disabled); no visible windows; form tabs `Form Property Lab Coupled Unload Replay` (Lab04), `FX_FormPropertyLab05`, `FX_FormPropertyLab06` all present and untouched.
- **Guard 2 — target absence (PASS):** Web Client Select Form dialog reopened with an **empty** filter (as left by T1) → full store **642 records**; **0 exact and 0 case-insensitive** matches for `FX_FormPropertyLab07` in Name and Caption; the same 11 `FX_` forms as T1 (indices 279–285, 313–316). Target still absent immediately before the mutation. (evidence `12`.) Dialog closed via Cancel; Web Client verified clean.

### T2.2 — Creation method (per `recipes/forms/create-basic-form.md`)

1. Switched to the Designer tab (tab 2) — already open in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`), clean toolbar, `FX_FormPropertyLab06` active. No new Designer session was needed; no scope re-prompt appeared (session scope already established for the signed-in user).
2. Designer toolbar **New** (`mgtoolbarbutton-1088`) — native Playwright click → **"Form Wizard Selection"** dialog (window `formwizard-4398` — xtype `formwizard`, not an Ext `window`; numeric ID drifted from EXP-007-R2 T2's `formwizard-2802`, as expected). (evidence `13`.)
3. Radio **New Form** already checked (default; `mgradio-4407` checked, `mgradio-4408` unchecked). Category combo (`mginfoconexpandable-4416`, store field `CategoryName`) → **Classic** selected via `combo.select(record)`; Wizard combo (`mginfoconexpandable-4421`, store field `WizardName`) then loaded the 7 Classic wizards (BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile) → **BuildFromScratch** selected via `combo.select(record)`. (evidence `14`.)
4. OK (`mgformbutton-4424`, native click) → **"Form Wizard - Build From Scratch"** (expeditor `expeditor-4447`). Page-1 values verified: Name (editable combo `mgcombo-4454`) set to **`FX_FormPropertyLab07`** via `setValue`; all other defaults left untouched — Form Type `BuildFromScratch` (`mgcombo-4468`), Form Layout `GridLeft` (`mgcombo-4473`), Device Type `Default` (`mgcombo-4478`), Data Source empty (`mgcombo-4483`), Query Form empty (`mgedit-4488`), Comments empty (`mgedit-4493`). (evidence `15`.)
5. **Next** (`mgformbutton-4690`, native click) → Next became **disabled**, **Finish** (`mgformbutton-4691`) became **enabled** (single scrollable page, as in EXP-007-R2 T2).
6. **Save Template** checkbox (`ext-comp-4686`) was **checked by default** (`getValue()=true`); toggled **off** via its own handler `onBoxClick()` → `getValue()=false`. (evidence `16`.)
7. **Finish** (`mgformbutton-4691`, native click) → **"Process Completed Successfully"** dialog (`ext-comp-1009`, message text `Process Completed Successfully`) → **OK** (native click). (evidence `17`.)
8. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab07`; form tab **`FX_FormPropertyLab07`** appeared (4th tab) and is selected; the `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, and `FX_FormPropertyLab04` (`Form Property Lab Coupled Unload Replay`) tabs **remain present and untouched**; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `18`.)

### T2.3 — Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store:
- **Total records = 643** (642 + 1 — exactly +1; **no template artifact** created, consistent with Save Template being unchecked).
- **Exactly 1 exact match** for `FX_FormPropertyLab07` (store index 282, record `{mgdata:"FX_FormPropertyLab07", text:"FX_FormPropertyLab07", id:"extModel214-2582"}`); case-insensitive matches = 1 (the same record); Caption-field exact/case-insensitive matches = 1/1 (the same record, Caption empty → Name fallback). **Distinct matching records = 1.**
- `FX_`-prefixed forms now number **12**: `FX_VariableLab01`(279), `FX_TestBlank02`(280), `FX_TestBlank01`(281), **`FX_FormPropertyLab07`(282)**, `FX_FormPropertyLab06`(283), `FX_FormPropertyLab05`(284), `FX_ComponentLab02`(285), `FX_ComponentLab01`(286), `FX_FormPropertyLab02`(314, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04`(315, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03`(316, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01`(317, Caption `Form Property Lab`). The pre-existing 11 shifted only in list order/indices; no other artifact added or removed.
- UI confirmation: filtered the dialog to `FX_FormPropertyLab07` → **exactly 1 row** (Caption column shows the Name fallback because Caption is empty); filtered `FX_` → **exactly 12 rows**. (evidence `20`, `21`.)
- Dialog closed via Cancel (native click); filter cleared first (643 records); Web Client verified clean (no windows, Save disabled).

### T2.4 — Exact User-scope identity + full pre-Description baseline (recorded BEFORE any property change)

Read read-only from the loaded Designer property grid store `formpropertygrid-1135` (session formId **130**; the grid cell visually truncates Name/Version but the store holds the full values):

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab07` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `18`, `19`; the live status-bar value is masked by the secrets layer, the ScopeName is the signed-in user per `environments/current-environment.md`); the Designer session was already in User scope at T2 start (no scope dialog was re-prompted because the session scope was established earlier for the signed-in user).

**Key baseline fact for the persistence check:** the freshly created form's **Description is empty** (recorded from the store, not assumed) — the later change to the literal `Form Property Description Close Only` will be an unambiguous empty→literal transition. (Caption is also empty and will remain an unchanged comparison property.)

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### T2.5 — T2 evidence (under `evidence/EXP-008/`)

- `12-t2-pre-mutation-absence-recheck.png` — Select Form dialog, full list (642 records, filter empty) at the pre-mutation re-check.
- `13-t2-wizard-selection-default.png` — Form Wizard Selection dialog (New Form radio checked; Category/Wizard empty).
- `14-t2-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch**.
- `15-t2-wizard-name-entered.png` — Build From Scratch wizard: Name `FX_FormPropertyLab07`, other defaults (BuildFromScratch / GridLeft / Default / empty).
- `16-t2-wizard-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked**.
- `17-t2-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `18-t2-form-created-loaded-clean.png` — New form `FX_FormPropertyLab07` loaded in the Designer (`?MGForm=FX_FormPropertyLab07`), form tab selected, `FX_FormPropertyLab06`/`FX_FormPropertyLab05`/`FX_FormPropertyLab04` tabs still present, toolbar clean.
- `19-t2-baseline-properties-design-group.png` — Designer Properties, Design group: Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- `20-t2-select-form-lab07-exists-one.png` — Select Form dialog filtered to `FX_FormPropertyLab07` → exactly 1 row (store total 643).
- `21-t2-select-form-fx-inventory-twelve-rows.png` — Select Form dialog, Filter `FX_` → exactly 12 `FX_` rows including `FX_FormPropertyLab07`.

### T2.6 — T2 observations / corrections

- **The Form Wizard Selection dialog is xtype `formwizard`, not an Ext `window`** (re-confirmed): `Ext.ComponentQuery.query('window')` does not find it; locate it by `ComponentQuery.query('formwizard')` or by title.
- **Wizard store field names:** Category combo store field = `CategoryName`; Wizard combo store field = `WizardName` (store loads only after a Category is selected) (re-confirmed).
- **The Designer URL drops `MGForm=` while the wizard is open** and restores `?MGForm=<new form>` after Finish+OK; the previously loaded form tabs (`FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab04`) are not affected by the wizard flow (re-confirmed).
- **Select Form client-side record ids are session-local** (e.g., `FX_FormPropertyLab07` = `extModel214-2582` this session) — Name + scope is the persistent identity (re-confirmed).
- **Form-list projection:** in this post-creation store load, `FX_FormPropertyLab07`'s `text` field shows the Name fallback (empty Caption), consistent with EXP-007/EXP-007-R2.
- **Synthetic `setValue` on the wizard Name combo worked** (editable combo, `forceSelection:false`); `combo.select(record)` worked for Category/Wizard (re-confirmed from EXP-007-R2 T2).
- **Save Template is checked by default**; reliable toggle = `onBoxClick()` (re-confirmed).
- **The form property grid is xtype `formpropertygrid`** (id `formpropertygrid-1135` in this session) — it is **not** found by `ComponentQuery.query('grid')` or `query('tree')`; its store is a tree-shaped store whose root records carry `propId`/`disp`/`value`/`ro` plus a nested `properties` array (Design children: Name, Description, Caption, Version, Device Type, Form Type, Is Master). The grid reflects the **active** form tab. `Ext.ComponentManager.each` does not iterate in this build (use `ComponentQuery.query('*')` or `Ext.getCmp`).
- No User Preference was inspected or changed; no unload was invoked; no form other than the new `FX_FormPropertyLab07` was created, modified, or deleted; `FX_FormPropertyLab01/02/03/04/05/06` and all non-`FX_` artifacts untouched; editing scope stayed **User** throughout.

### T2.7 — T2 knowledge-state updates

- `FX_FormPropertyLab07` **exists, exactly one**, User scope, ScopeName `anton.ramos@3mworks.com.ph`, created via the verified recipe with Save Template unchecked; store 642→643, `FX_` 11→12; baseline Description **empty**, Caption **empty**: **observed** (T2).
- Full pre-Description baseline (Name/Description/Caption/Version/Device Type/Form Type/Is Master) as tabled in T2.4: **observed** (T2).
- `formpropertygrid` xtype (not `grid`/`tree`), tree-shaped store with nested `properties`, reflects the active form tab; `Ext.ComponentManager.each` does not iterate: **observed** (new, T2).
- `Unload IDO Metadata With Forms` preference: **not inspected in T2** (out of scope for this step); re-verified CHECKED in T1 of this experiment — no further re-read required before the close/reopen steps unless the coordinator asks.
- The EXP-008 **Description-persistence-across-close-only-reopen** procedure remains **unverified** (creation + baseline only so far).

### T2.8 — Stopped here (per instruction, after creation + baseline)

Did **not** change the Description or any other Form property; did **not** touch `FX_FormPropertyLab04`/`05`/`06` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command. **Next task (T3):** change **only** the Form-level Description to `Form Property Description Close Only`, ordinary Designer Save, and prove the Designer returns to a clean state with the Description retained.

## T3 — Read-only AC-3 reconciliation (cycle 3, 2026-10-02)

Coordinator instruction: perform **only a read-only AC-3 reconciliation** on the currently open clean `FX_FormPropertyLab07`. Do **not** edit Description or any other Form property and do **not** Save. Re-read and record the target's complete untouched AC-3 baseline (Description, Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName). Confirm the loaded target is exactly `FX_FormPropertyLab07`, remains clean, and exactly one target still exists; reconcile the post-create inventory as 643 total / 12 `FX_` / 1 target if still true. Capture only the minimum additional evidence; update only this record. Do not begin AC-4.

### T3.1 — State inspection before any action (fresh conversation; browser state persisted)

- Tabs: Tab 0 = Web Client (authenticated, no form open, Save disabled, no visible windows); Tab 1 = the same stray dead bare-portal-root tab (unchanged since T1); Tab 2 (current) = Designer tab, URL `…&MGForm=FX_FormPropertyLab07` — **unchanged since T2** (no reload, no scope re-prompt).

### T3.2 — Loaded target + clean-state confirmation (Designer, read-only)

- **Loaded target is exactly `FX_FormPropertyLab07`** — three independent surfaces agree: (a) Designer URL `MGForm=FX_FormPropertyLab07`; (b) property store `formpropertygrid-1135` Design group `Name = FX_FormPropertyLab07` (read-only); (c) active form tab `FX_FormPropertyLab07` (4th of 4 tabs; `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, and `Form Property Lab Coupled Unload Replay` (Lab04) still present and untouched).
- **Remains clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; no dirty-state indicator. (evidence `22`.)

### T3.3 — Complete untouched AC-3 baseline (re-read, read-only)

From the property store `formpropertygrid-1135` (Design group) + Designer status bar:

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab07` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |
| **ScopeType** | `User` | — (status bar) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | — (status bar) |

**Identity surface:** Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (the live value is masked by the secrets layer in tool output; the ScopeName is the signed-in user per `environments/current-environment.md`). **ScopeType = User** confirmed; the exact current ScopeName is the signed-in user `anton.ramos@3mworks.com.ph`.

**Reconciliation vs T2 baseline:** every value is **identical** to the T2.4 baseline — Description still **empty**, Caption still **empty**, Version/Device Type/Form Type/Is Master unchanged. No property drifted between T2 and T3.

### T3.4 — Exactly-one + inventory reconciliation (Web Client Select Form store, read-only)

Re-opened the Select Form dialog (empty filter, as left by T2) and scanned the full store:
- **Total = 643** (unchanged from T2).
- **Exactly 1 match** for `FX_FormPropertyLab07` — store index 282, record `{mgdata:"FX_FormPropertyLab07", text:"FX_FormPropertyLab07", id:"extModel214-2582"}` (the **same** session record id as T2); case-insensitive = 1 (same record); Caption-field exact/case-insensitive = 1/1 (same record, Caption empty → Name fallback). **Distinct matching records = 1.**
- **`FX_` forms = 12** — identical set and indices to T2 (279–286, 314–317); no artifact added or removed.
- **Post-create inventory reconciles as 643 total / 12 `FX_` / 1 target — still true.** (evidence `23`.)
- Dialog closed via Cancel; Web Client verified clean (no visible windows, Save disabled).

### T3.5 — T3 evidence (under `evidence/EXP-008/`)

- `22-t3-designer-clean-baseline-reconciled.png` — Designer: `?MGForm=FX_FormPropertyLab07`, form tab selected, 4 form tabs present, toolbar clean, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Properties Design group (Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`).
- `23-t3-select-form-inventory-643-12-1.png` — Select Form dialog, full list (643 records, filter empty); `FX_FormPropertyLab07` present once among the 12 `FX_` forms.

### T3.6 — T3 observations / corrections

- **No drift:** the open, clean `FX_FormPropertyLab07` is byte-for-byte identical in its recorded properties to the T2 baseline across the T2→T3 interval (no background save, no property change, no inventory change). This confirms the form is stably persisted and clean and is a safe, verified starting point for the Description edit (AC-4).
- **The property store `formpropertygrid-1135` persists across the T2→T3 interval** (same component id, same formId context) — the Designer tab was not reloaded; no need to re-locate the grid.
- No User Preference was inspected or changed; no unload was invoked; no Form property was edited; no Save was performed; `FX_FormPropertyLab04/05/06` and all other FX_/non-FX_ artifacts untouched; editing scope stayed **User** throughout.

### T3.7 — T3 knowledge-state updates

- `FX_FormPropertyLab07` loaded target is exactly `FX_FormPropertyLab07`, remains **clean**, and **exactly one** such target exists (643 / 12 / 1): **observed** (T3, re-confirmed).
- Complete untouched AC-3 baseline (Description empty, Caption empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`): **observed** (T3, re-confirmed; identical to T2).
- The form is a stable, clean, verified starting point for the Description edit: **observed** (T3).
- The EXP-008 **Description-persistence-across-close-only-reopen** procedure remains **unverified** (creation + baseline + reconciliation only so far; no Description edit, Save, close, or reopen performed yet).

### T3.8 — Stopped here (per instruction, read-only reconciliation only)

Did **not** change the Description or any other Form property; did **not** Save; did **not** touch `FX_FormPropertyLab04`/`05`/`06` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command; did **not** switch scope; did **not** begin AC-4. **Next task (AC-4):** change **only** the Form-level Description to `Form Property Description Close Only`, ordinary Designer Save, and prove the Designer returns to a clean state with the Description retained.

## T4 — AC-4: Description edit + ordinary Save (cycle 4, 2026-10-02)

Coordinator instruction: perform **only** AC-4 on the currently open clean `FX_FormPropertyLab07`. First re-read the target identity and the full AC-3 baseline as a guard; if the loaded Form, User scope, ScopeName, cleanliness, or any baseline comparison property differs from T3, stop without mutation and report. Then change **only** the Form-level Description from its baseline empty value to exactly `Form Property Description Close Only` using the supported Designer property editor. Do not edit Caption or any other property. Perform exactly one ordinary Designer Save. After Save, prove the Designer is clean and re-read all comparison values: Description must equal exactly `Form Property Description Close Only`; Caption, Version, Device Type, Form Type, Is Master, ScopeType, and ScopeName must remain equal to the AC-3 baseline. Capture the relevant Save/network response only as ordinary save evidence, not as a cache-semantic claim. Leave `FX_FormPropertyLab07` open and clean. Do not close or reopen the target yet.

### T4.1 — Guard re-read (read-only; PASS — identical to T3)

- Tabs (fresh conversation; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab07`.
- **Loaded target** exactly `FX_FormPropertyLab07` (URL + property store `Name` + active form tab).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
- **Cleanliness:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; no visible windows.
- **Baseline (all equal to T3):** Name `FX_FormPropertyLab07`, Description **empty**, Caption **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Guard PASS** — no mutation performed until this point. (evidence `24`.)

### T4.2 — Description edit (supported Designer property editor)

1. Located the Description value cell in the property grid `formpropertygrid-1135`: the row whose tree-column label is `Description`, value cell in column `pgvaluecolumn-1138` (cell `ext-8292`, `data-mgcompname="Design.Description"`), at viewport (870,195) 139×23.
2. **Double-click** the value cell (native Playwright `mouse.dblclick` at cell center) → the grid's inline editor opened and was **focused** (`textfield-1139-inputEl`, an `x-form-text` at the cell position).
3. Typed exactly `Form Property Description Close Only` (verified the editor's `.value` before commit), then **Enter** to commit.
4. Post-commit store read: `Description = "Form Property Description Close Only"`; **all other Design properties unchanged** (Name, Caption empty, Version, Device Type, Form Type, Is Master identical to baseline). Toolbar Save/Regenerate became **enabled** (dirty state) — expected after an edit. (evidence `25`.)

### T4.3 — Ordinary Designer Save (exactly one)

- Clicked the toolbar **Save** button (`mgtoolbarbutton-1085`, native Playwright click) — the ordinary Designer Save; no menu, no wizard, no unload.
- Result: **no dialog or window** appeared; toolbar Save and Regenerate returned to **disabled** — the Designer is **clean** again. No error, no confirmation prompt. (evidence `26`.)

### T4.4 — Post-Save verification (all comparison values re-read)

| Property | AC-3 baseline (T3) | Post-Save (T4) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab07` | `FX_FormPropertyLab07` | ✓ |
| **Description** | *(empty)* | **`Form Property Description Close Only`** | ✓ (changed as intended, exact literal) |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Description equals exactly `Form Property Description Close Only`** (verified character-for-character from the property store, not assumed).
- **All other comparison properties remain equal to the AC-3 baseline.**
- **Designer is clean:** Save/Regenerate disabled, no visible windows, URL still `?MGForm=FX_FormPropertyLab07`, all 4 form tabs present (Lab04/05/06 untouched).
- The target is **left open and clean** (not closed, not reopened).

### T4.5 — T4 evidence (under `evidence/EXP-008/`)

- `24-t4-pre-mutation-guard-pass.png` — Designer before the edit: clean, `?MGForm=FX_FormPropertyLab07`, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Properties Design group with Description empty.
- `25-t4-description-edited-dirty.png` — After the Description edit and Enter: Description cell shows `Form Property Description Close Only`; toolbar Save/Regenerate enabled (dirty).
- `26-t4-after-save-clean-description-persisted.png` — After the ordinary Save: toolbar clean (Save/Regenerate disabled), Description cell still shows `Form Property Description Close Only`, no dialogs.

### T4.6 — T4 observations / corrections

- **The supported property editor for a Form-level property is the inline grid editor** in `formpropertygrid`: double-click the value cell (column `pgvaluecolumn-1138`) of the property row → an `x-form-text` editor (`textfield-1139-inputEl` this session) opens focused in the cell → type → **Enter** commits to the store. No separate dialog or panel is required for a single-line property like Description.
- **Editing a property immediately enables the toolbar Save/Regenerate** (dirty indicator); a successful ordinary Save returns them to disabled (clean) with **no confirmation dialog** in this environment.
- **The ordinary Save produced no visible confirmation and no error**; cleanliness is proven by the toolbar state (Save/Regenerate disabled) plus the store re-read, not by the absence of an error alone.
- **Only the Description changed**; every other comparison property is byte-identical to the AC-3 baseline after the Save.
- No User Preference was inspected or changed; no unload was invoked; no other Form property was edited; `FX_FormPropertyLab04/05/06` and all other FX_/non-FX_ artifacts untouched; editing scope stayed **User** throughout; the target was **not** closed or reopened.

### T4.7 — T4 knowledge-state updates

- The Form-level **Description can be edited via the inline property-grid editor** (double-click value cell → type → Enter) and **persists across an ordinary Designer Save** with all other comparison properties unchanged: **observed** (T4, single execution — not yet a verified/replayable procedure).
- `FX_FormPropertyLab07` now has Description = `Form Property Description Close Only` (User scope, ScopeName `anton.ramos@3mworks.com.ph`), saved and clean: **observed** (T4).
- The EXP-008 **Description-persistence-across-close-only-reopen** procedure remains **unverified** (edit + Save done; the close-only reopen + recovery verification is the remaining step).

### T4.8 — Stopped here (per instruction, after edit + Save + verification)

Did **not** close or reopen the target; did **not** touch `FX_FormPropertyLab04`/`05`/`06` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command; did **not** switch scope. **Next task (AC-5):** close `FX_FormPropertyLab07` normally (without `Unload All Global Form Objects`), reopen the exact same customized version by Form name + ScopeType + ScopeName, and verify Description plus all comparison properties are recovered unchanged; record any ClearCache-style request as diagnostic evidence only.

## T5 — AC-5 (close) + AC-6 (no-unload audit) (cycle 6, 2026-10-02)

Coordinator instruction: perform **only** AC-5 and AC-6. First re-read `FX_FormPropertyLab07` and verify it is the exact User-scope target, clean, with Description exactly `Form Property Description Close Only` and all AC-3 comparison properties unchanged; if any guard fails, stop without closing and report. Establish a task-local diagnostic network/request baseline sufficient to notice any ClearCache-style request around the close, but do not call or treat any endpoint as an API and do not infer cache or IDO semantics. Then close `FX_FormPropertyLab07` normally from its clean Designer form tab using the supported UI. Prove the target is no longer open and that no unsaved-change prompt or mutation occurred. Record any new ClearCache-style request observed around the close as diagnostic evidence only, including whether none occurred. Before any reopen, audit the EXP-008 record/evidence and current Designer state to explicitly establish that no explicit global-form-object unload command has been invoked at any point in EXP-008. Do not invoke any global-form-object unload command. **Leave `FX_FormPropertyLab07` CLOSED at the end of this task.** Do not reopen Lab07 yet.

### T5.1 — Guard re-read (read-only; PASS — identical to T4 post-Save state)

- Tabs (fresh conversation; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab07`.
- **Loaded target** exactly `FX_FormPropertyLab07` (URL + property store `Name` + active form tab).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
- **Cleanliness:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; no visible windows.
- **Description** exactly `Form Property Description Close Only`; **all AC-3 comparison properties unchanged** (Name `FX_FormPropertyLab07`, Caption empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`).
- **Guard PASS** — no mutation performed until the close. (evidence `27`.)

### T5.2 — Task-local diagnostic network baseline (no API, no semantics)

- Installed an in-page diagnostic hook (task-local) that records every `XMLHttpRequest.open` and `fetch` call as `{t, kind, method, url}` into `window.__netLog`. This is a **passive observer only** — it does not call, synthesize, or treat any endpoint as an API, and no cache/IDO semantics are inferred from it.
- Baseline snapshot: `window.__netLog.length = 0` at `t0 = 1790932970868` (page idle; no requests captured since hook install).

### T5.3 — Close `FX_FormPropertyLab07` normally (supported UI)

- Located the `FX_FormPropertyLab07` form tab (`tab-4985`) and its **tab close button** (`.x-tab-close-btn`, viewport (688,68) 26×31).
- **Single native Playwright click** on the tab close button (the supported "close this form tab" affordance) — no menu, no wizard, no unload command.
- Post-close read (after 2.5 s settle):
  - **`FX_FormPropertyLab07` tab is GONE** — form tabs now exactly `Form Property Lab Coupled Unload Replay` (Lab04), `FX_FormPropertyLab05`, `FX_FormPropertyLab06`.
  - **URL changed** from `?MGForm=FX_FormPropertyLab07` to `?MGForm=FX_FormPropertyLab06` (Designer moved to the remaining adjacent tab; Lab06 now active).
  - **No visible windows** — **no unsaved-change prompt**, no dialog, no error.
  - **No mutation:** `FX_FormPropertyLab04`/`05`/`06` all still present and untouched; editing scope still **User** (`[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`); toolbar clean (Save/Regenerate disabled).
  - (evidence `28`.)

### T5.4 — Diagnostic network observation around the close (evidence only)

- Full task-local network log since baseline: **exactly 2 requests**, both `POST ../Designer/Form/GenerateServerEvent` (at Δt ≈ 21.9 s and 21.99 s after baseline — i.e., coincident with the close action). These are the ordinary Designer server-event round-trips for the close operation.
- **ClearCache-style requests observed around the close: NONE.** A case-insensitive filter for `clearcache` / `clear_cache` / `clear-cache` / `unload` / `globalform` / `global_form` over the since-baseline log returned **0 matches**.
- Recorded **as diagnostic evidence only** — no endpoint is treated as a supported API contract and no IDO-metadata or system-wide cache semantics are inferred. (The absence of a ClearCache-style request around this ordinary close is noted as an observation, not a claim about internal cache behavior.)

### T5.5 — AC-6 audit: no explicit global-form-object unload invoked at any point in EXP-008

Three independent, read-only audits were performed (no reopen, no mutation):

1. **Record audit** (grep of `experiments/EXP-008-*.md` for `unload` / `Unload All Global Form Objects` / `ClearCache`): every mention in the EXP-008 record is either (a) a **prohibition** in the Objective/In-scope/Out-of-scope/Prohibited text, (b) a **read-only** reference to the `Unload IDO Metadata With Forms` *preference* (read CHECKED in T1, never changed), or (c) an explicit **"did not open Form > Definition" / "did not invoke any unload command"** statement in the T1, T2, T3, and T4 stop-here sections. **No EXP-008 task invoked `Form > Definition > Unload All Global Form Objects`.** (The only actual unload invocations surfaced by the grep belong to **EXP-007 / EXP-007-R2**, a different experiment, and are not part of EXP-008.)
2. **Network audit** (task-local log, T5.4): **no** ClearCache/unload-style request occurred in the close window (only 2 ordinary `GenerateServerEvent` POSTs). No unload marker was observed.
3. **Current Designer state audit** (read-only): **no menus open** (`openMenus = []`), no visible windows, Designer clean (Save/Regenerate disabled), target closed, `FX_FormPropertyLab04`/`05`/`06` intact, scope still **User**. The `Form > Definition` menu was not opened and no unload command is in an activated state.

**AC-6 conclusion: no explicit global-form-object unload command has been invoked at any point in EXP-008.** `FX_FormPropertyLab07` is left **CLOSED**.

### T5.6 — T5 evidence (under `evidence/EXP-008/`)

- `27-t5-pre-close-guard-pass.png` — Designer before the close: clean, `?MGForm=FX_FormPropertyLab07`, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Description `Form Property Description Close Only`, 4 form tabs (Lab07 active).
- `28-t5-after-close-target-closed-clean.png` — After the close: `?MGForm=FX_FormPropertyLab06`, `FX_FormPropertyLab07` tab gone (3 form tabs remain: Lab04/05/06), no visible windows, toolbar clean.

### T5.7 — T5 observations / corrections

- **The supported close affordance is the form tab's own close button** (`.x-tab-close-btn` inside the tab element); a single click closes the form tab. For a **clean** form (no unsaved changes) the close is immediate — **no unsaved-change prompt** appears. (Re-observed; consistent with EXP-007-R2 T5.)
- **After closing the active tab, the Designer auto-selects a remaining adjacent tab** and updates the URL `MGForm=` accordingly (here → `FX_FormPropertyLab06`). The closed form's tab is removed from the tab strip.
- **An ordinary close of a clean form produced no ClearCache-style request** in this task-local observation (only 2 `GenerateServerEvent` POSTs). Recorded as diagnostic evidence only; **no** IDO-metadata or cache semantics inferred. (Contrast: EXP-007-R2 noted historical ClearCache requests tied to earlier save/close operations in that longer session — not observed here around this close.)
- **The task-local in-page XHR/fetch hook is a reliable passive observer** for noticing request URLs around a UI action within a single persistent Designer page (no page reload). It captured both close round-trips and would have surfaced any ClearCache-style URL.
- No User Preference was inspected or changed; no unload was invoked; no Form was edited or Saved; `FX_FormPropertyLab04`/`05`/`06` untouched; editing scope stayed **User** throughout; the target was **not** reopened.

### T5.8 — T5 knowledge-state updates

- `FX_FormPropertyLab07` is **closed** (tab removed, URL moved to `FX_FormPropertyLab06`), closed **normally** via the supported tab close button with **no unsaved-change prompt** and **no mutation**: **observed** (T5).
- **No ClearCache-style request** was observed around the ordinary close of a clean form (only 2 `GenerateServerEvent` POSTs): **observed** (T5, diagnostic-only; no cache/IDO semantics inferred).
- **No explicit global-form-object unload command was invoked at any point in EXP-008** (record + network + current-state audit): **observed** (T5, AC-6).
- The EXP-008 **Description-persistence-across-close-only-reopen** procedure remains **unverified** (close done; the reopen + recovery verification is the remaining step).

### T5.9 — Stopped here (per instruction, target left CLOSED)

Did **not** reopen `FX_FormPropertyLab07`; did **not** touch `FX_FormPropertyLab04`/`05`/`06` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command; did **not** edit or Save any Form; did **not** switch scope. `FX_FormPropertyLab07` is **CLOSED**. **Next task (AC-7):** reopen the exact same customized version by Form name + ScopeType + ScopeName (`FX_FormPropertyLab07`, User, `anton.ramos@3mworks.com.ph`) **without** invoking `Unload All Global Form Objects`, and verify Description plus all comparison properties are recovered unchanged; record any ClearCache-style request as diagnostic evidence only.

## T6 — AC-7 (reopen) + AC-8 (recovery verification) (cycle 7, 2026-10-02)

Coordinator instruction: perform **only** AC-7 and AC-8. Begin from the current state with `FX_FormPropertyLab07` closed. Reconfirm that Lab07 is not currently open and that the Designer is clean. Then reopen exactly `FX_FormPropertyLab07` through a supported Designer UI path already observed in this environment, without invoking any global-form-object unload action and without editing or saving anything. After reopen, prove the loaded customized version is the same AC-3 identity by Form name, ScopeType=`User`, and the same ScopeName recorded in AC-3. Re-read the Form properties and prove Description equals exactly `Form Property Description Close Only`; Caption, Version, Device Type, Form Type, Is Master, ScopeType, and ScopeName must all equal the AC-3 baseline; prove the Designer is clean. Capture any passive network/request observations around the reopen only as diagnostic evidence and do not infer cache or IDO semantics. Leave `FX_FormPropertyLab07` open and clean for the final audit. Do not perform the final AC-9 audit yet.

### T6.1 — Pre-reopen state reconfirmation (read-only; PASS)

- Tabs (fresh conversation; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab06` (the remaining active tab after the T5 close).
- **`FX_FormPropertyLab07` is NOT open** — form tabs exactly `Form Property Lab Coupled Unload Replay` (Lab04), `FX_FormPropertyLab05`, `FX_FormPropertyLab06`; `lab07Open = false`.
- **Designer clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; no visible windows; scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Task-local network hook (installed in T5) still active; fresh baseline snapshot: `window.__netLog.length = 2` (the two T5 close `GenerateServerEvent` POSTs) at `t0 = 1790933210231`.
- (evidence `29`.)

### T6.2 — Reopen `FX_FormPropertyLab07` via the supported Designer UI path (no unload, no edit, no Save)

- **Supported path (already observed in this environment — EXP-007-R2 T8):** the Designer **`Form` menu → recent-forms entry**. Opened the Designer **Form** menu (top menu bar, native click at (34,17)) → menu `menu-1021` opened, showing (top→bottom): `Definition` (submenu — **not opened, not used**), `Sign Out`, then the **recent-forms list**: **`FX_FormPropertyLab07`** (`menuitem-1073`), `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `Form Property Lab Coupled Unload Replay`, `FX_FormPropertyLab03`, `Form Property Lab`, `FX_FormPropertyLab02`, `FX_VariableLab01`, `FX_ComponentLab02`, `FX_ComponentLab01`. (evidence `30`.)
- **Single native click** on the **`FX_FormPropertyLab07`** recent-forms entry (`menuitem-1073`, at (1,113) 275×30) — the supported reopen affordance. **No** `Form > Definition` submenu was opened; **no** `Unload All Global Form Objects` was invoked; **no** property was edited; **no** Save was performed.
- Post-reopen read (after 3 s settle):
  - **URL** `?MGForm=FX_FormPropertyLab07` (Designer loaded the target).
  - **Form tab `FX_FormPropertyLab07` re-appeared** (4th of 4 tabs; Lab04/05/06 still present and untouched) and is selected.
  - **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
  - **Designer clean:** toolbar Save/Regenerate **disabled**; **no visible windows**; no error, no dialog, no prompt.
  - Property grid `formpropertygrid-1135` reflects the reopened active form.
  - (evidence `31`.)

### T6.3 — AC-8 recovery verification (identity + all comparison properties re-read)

**Identity (same AC-3 version):**
- **Form name** = `FX_FormPropertyLab07` (URL + property store `Name` + active tab — three agreeing surfaces).
- **ScopeType** = `User` (status bar).
- **ScopeName** = `anton.ramos@3mworks.com.ph` (status bar; the same ScopeName recorded in AC-3).

**All comparison properties re-read from the property store `formpropertygrid-1135` (Design group):**

| Property | AC-3 baseline | Reopened (T6) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab07` | `FX_FormPropertyLab07` | ✓ |
| **Description** | `Form Property Description Close Only` (set in AC-4) | **`Form Property Description Close Only`** | ✓ **recovered unchanged** |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Description equals exactly `Form Property Description Close Only`** (verified character-for-character from the property store after the close-only reopen — **the core EXP-008 result**).
- **All other comparison properties are equal to the AC-3 baseline.**
- **Designer is clean** (Save/Regenerate disabled, no windows, no error).
- The target is **left open and clean** for the final audit (not closed again).

### T6.4 — Diagnostic network observation around the reopen (evidence only)

- Task-local network log since the T6.1 baseline: **exactly 2 requests**:
  1. `POST ../Designer/Form/GetFormDesigner` (Δt ≈ 67.2 s after baseline) — the reopen's form-definition fetch round-trip.
  2. `POST ../Designer/Form/GenerateServerEvent` (Δt ≈ 69.4 s) — the ordinary Designer server-event round-trip.
- **ClearCache-style requests observed around the reopen: NONE.** A case-insensitive filter for `clearcache` / `clear_cache` / `clear-cache` / `unload` / `globalform` / `global_form` over the since-baseline log returned **0 matches**.
- Recorded **as diagnostic evidence only** — no endpoint is treated as a supported API contract and no IDO-metadata or system-wide cache semantics are inferred. (The absence of a ClearCache-style request around this close-only reopen is noted as an observation, not a claim about internal cache behavior.)

### T6.5 — T6 evidence (under `evidence/EXP-008/`)

- `29-t6-pre-reopen-lab07-closed-clean.png` — Designer before the reopen: `?MGForm=FX_FormPropertyLab06`, `FX_FormPropertyLab07` not open (3 form tabs), toolbar clean, no windows.
- `30-t6-form-menu-recent-forms-lab07.png` — Designer **Form** menu open: `Definition` (submenu, unused), `Sign Out`, and the recent-forms list with **`FX_FormPropertyLab07`** at the top of the form entries.
- `31-t6-reopened-description-persisted-clean.png` — After the reopen: `?MGForm=FX_FormPropertyLab07`, form tab selected (4 tabs), toolbar clean, Properties Design group showing Description `Form Property Description Close Only`, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T6.6 — T6 observations / corrections

- **The supported reopen path is the Designer `Form` menu → recent-forms entry** (the same path used in EXP-007-R2 T8). The recent-forms list is populated with the session's recently opened forms; clicking the target's entry reopens it in a new form tab. The `Definition` submenu (which contains `Unload All Global Form Objects`) sits above the recent-forms list but was **not** opened or used.
- **The close-only reopen recovered the customized Description unchanged** — `Form Property Description Close Only` persisted across a normal close + normal reopen with **no** `Unload All Global Form Objects` invocation and **no** ClearCache-style request observed. This is the primary EXP-008 acceptance result (AC-7/AC-8).
- **The reopen issued exactly one `GetFormDesigner` fetch** (the form-definition load) plus one ordinary `GenerateServerEvent`; no ClearCache-style request. (Diagnostic-only; no cache/IDO semantics inferred.)
- **The property grid `formpropertygrid-1135` is reused** across the close/reopen (same component id); it reflects the newly active form tab.
- No User Preference was inspected or changed; no unload was invoked; no Form was edited or Saved; `FX_FormPropertyLab04`/`05`/`06` untouched; editing scope stayed **User** throughout.

### T6.7 — T6 knowledge-state updates

- `FX_FormPropertyLab07` **reopened** via the supported Designer `Form`-menu recent-forms entry (no unload, no edit, no Save); loaded identity is the same AC-3 version (Name `FX_FormPropertyLab07`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`): **observed** (T6).
- **Description `Form Property Description Close Only` persisted across a close-only reopen** (no `Unload All Global Form Objects`), with **all** comparison properties (Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) recovered unchanged: **observed** (T6, single execution — the core EXP-008 result; not yet a replayed/verified procedure).
- **No ClearCache-style request** was observed around the close-only reopen (only `GetFormDesigner` + `GenerateServerEvent`): **observed** (T6, diagnostic-only; no cache/IDO semantics inferred).
- The EXP-008 **Description-persistence-across-close-only-reopen** procedure is now **observed** (single complete execution: create → baseline → Description edit → Save → close → reopen → recovery verified). Promotion to **replay_verified** requires a later independent replay; it is **not** yet `replay_verified`, and no reusable recipe is promoted from this first execution.

### T6.8 — Stopped here (per instruction, target left OPEN and clean for the final audit)

Did **not** close the target again; did **not** touch `FX_FormPropertyLab04`/`05`/`06` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command; did **not** edit or Save any Form; did **not** switch scope; did **not** perform the final AC-9 audit. `FX_FormPropertyLab07` is **OPEN and clean**. **Next task (AC-9):** final read-only audit — target uniqueness (exactly one `FX_FormPropertyLab07`), Designer clean state, `Unload IDO Metadata With Forms` preference unchanged (read-only), and repository-scope audit (changes confined to the EXP-008 record + `evidence/EXP-008/`).

## T7 — AC-9 + AC-10 final read-only audit + result classification (cycle 8, 2026-10-02)

Coordinator instruction: perform the **final EXP-008 read-only audit for AC-9 and AC-10 only**. Do not mutate any Mongoose artifact. Verify `FX_FormPropertyLab07` is still open and clean and its persisted values remain (Description exactly `Form Property Description Close Only`; Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName equal the AC-3 baseline). Using the supported Select Form UI/store path, prove exactly one `FX_FormPropertyLab07` exists and record the final total/`FX_`/target counts. Re-read `Unload IDO Metadata With Forms` through the same supported visible Web Client User Preferences surface used in T1, record its current state, and close the preferences surface without changing or saving anything. Re-audit the EXP-008 record/evidence to establish that no explicit global-form-object unload command was performed during this experiment. Audit repository/worktree changes attributable to this run and prove they are confined to `experiments/EXP-008-…md` plus `evidence/EXP-008/`. Then finalize the acceptance table and result classification: if AC-1 through AC-9 all remain satisfied, classify the result **only as `observed`** and state explicitly that this single execution shows literal User-scope Description recovery across this specific ordinary close/reopen path only; it does not establish IDO-metadata trigger behavior, internal cache semantics, Forms-database persistence, behavior of other Form properties/scopes, or replay verification. Do not promote or modify any reusable recipe.

### T7.1 — AC-9(a): target still open, clean, persisted values intact (read-only)

- Tabs (fresh conversation; state persisted): Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab07`.
- **`FX_FormPropertyLab07` is OPEN** (active form tab; 4 tabs: Lab04/05/06/07) and **clean** (toolbar Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` both **disabled**; no visible windows; no error).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
- **Persisted values re-read from the property store `formpropertygrid-1135` (Design group):**

| Property | AC-3 baseline / AC-4 value | Final (T7) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab07` | `FX_FormPropertyLab07` | ✓ |
| **Description** | `Form Property Description Close Only` (set in AC-4) | **`Form Property Description Close Only`** | ✓ **exact** |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- (evidence `32`.)

### T7.2 — AC-9(b): exactly one target + final inventory (supported Select Form store)

- Web Client **Select Form** dialog opened (empty filter) → full store scanned:
  - **Total = 643**; **`FX_` forms = 12**; **exactly 1 `FX_FormPropertyLab07`** (store index 282, record `{mgdata:"FX_FormPropertyLab07", text:"FX_FormPropertyLab07", id:"extModel214-2582"}`; Name exact = 1, Name CI = 1, Caption exact = 1, Caption CI = 1 — all the same single record).
  - **Final counts: 643 total / 12 `FX_` / 1 target** (unchanged from T2/T3/T5).
- Dialog closed via Cancel; Web Client verified clean (no windows, Save disabled). (evidence `33`.)

### T7.3 — AC-9(c): `Unload IDO Metadata With Forms` re-read (same supported visible surface as T1; no change/Save)

- Web Client **Form > User Preferences** (`#mgmenubutton-1023` → `#menuitem-1043-itemEl`) → User Preferences workspace tab → **Behavior** page (the same supported visible route as T1).
- Checkbox with boxLabel **`Unload IDO Metadata With Forms`** (component `ext-comp-3652` this load; numeric id drifts per load, boxLabel is the stable identity): **CHECKED** (`checked: true`, `getValue(): true`, `disabled: false`, `hidden: false`, on-screen rect `{x:770, y:119, w:320, h:27}` — genuinely rendered, same on-screen position as T1). **State unchanged from T1 (CHECKED/enabled).**
- **No toggle, no change to any other preference, no Save/OK.** Closed the view via its tab close (×) button (Playwright locator click) — **not** OK/Save; **no "save changes?" prompt appeared**; workspace returned to normal (no tabs, no windows, Save disabled → **no unsaved preference state**). (evidence `34`, `35`.)

### T7.4 — AC-9(d): no explicit global-form-object unload was performed during EXP-008 (re-audit)

- **Record re-audit** (grep of `experiments/EXP-008-*.md` for unload-invocation patterns): the only match in the EXP-008 record is the T5.5 audit statement itself ("No EXP-008 task invoked `Form > Definition > Unload All Global Form Objects`"). Every other unload mention in the record is a prohibition, a read-only `Unload IDO Metadata With Forms` *preference* reference, or a "did not open Form > Definition / did not invoke any unload command" stop-here statement (T1–T6). **The only actual `Unload All Global Form Objects` invocations in the repository belong to EXP-005-R2 / EXP-006 / EXP-006-R2 / EXP-007 / EXP-007-R2 — different experiments, not EXP-008.**
- **Network re-audit** (task-local passive logs, T5 close + T6 reopen): no ClearCache/unload-style request in either window (only ordinary `GenerateServerEvent` / `GetFormDesigner` round-trips).
- **Current-state re-audit** (T7.1): no menus open, Designer clean, `Form > Definition` never opened in this experiment.
- **AC-9(d) conclusion: no explicit global-form-object unload command was performed at any point in EXP-008.**

### T7.5 — AC-10: repository/worktree change confinement (read-only mtime audit)

- Worktree is **not** a git repository; audit by file modification time relative to the run boundary **2026-10-02 16:54:26**.
- **EXP-008 knowledge-content files modified in-window — ONLY:**
  - `experiments/EXP-008-form-description-persistence-across-close-only-reo.md` (this record).
  - `evidence/EXP-008/01…35` (35 screenshots).
- **Distinguished as NOT EXP-008 knowledge content (in-window mtimes are tooling/harness side effects, not experiment mutations):**
  - `tools/learning-harness/**` (harness runtime: briefs, coordinator/worker messages, transcripts, `events.jsonl`, `harness.sqlite`) — managed by the harness, operator-driven.
  - `evidence/playwright/page-*.yml` — auto-generated Playwright MCP snapshot artifacts, shared across experiments.
- **NOT modified (all predate the run start):** `AGENTS.md`, `opencode.json`, `environments/current-environment.md`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` records (newest pre-existing = `EXP-007-R2-…md`, mtime 16:45:17). `claims/` empty (pre-existing).
- **AC-10 conclusion: repository/worktree changes attributable to this run are confined to `experiments/EXP-008-…md` + `evidence/EXP-008/`.** No recipe, environment, AGENTS.md, or other-experiment file was modified; no reusable recipe was promoted or created.

### T7.6 — T7 evidence (under `evidence/EXP-008/`)

- `32-t7-final-designer-open-clean-values-intact.png` — Designer: `?MGForm=FX_FormPropertyLab07`, form tab selected (4 tabs), toolbar clean, Properties Design group (Description `Form Property Description Close Only`, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`), status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- `33-t7-final-select-form-643-12-1.png` — Select Form dialog, full list (643 records, filter empty); `FX_FormPropertyLab07` present once among the 12 `FX_` forms.
- `34-t7-user-prefs-unload-ido-metadata-checked-final.png` — User Preferences (Behavior page): **`Unload IDO Metadata With Forms` visibly rendered and CHECKED** (read-only; no change made).
- `35-t7-webclient-after-prefs-closed-clean.png` — Web Client after closing User Preferences via tab × (no Save): no tabs, no windows, Save disabled (no unsaved state).

### T7.7 — T7 observations / corrections

- **The final audit is fully read-only**: no Mongoose artifact was created, modified, deleted, saved, closed, reopened, or unloaded; no User Preference was changed or saved; no scope switch.
- **The `Unload IDO Metadata With Forms` preference is unchanged** (CHECKED/enabled, same on-screen rect as T1) and the preferences surface was closed without Save (no unsaved state) — consistent with T1.
- **Iframe coordinate note (correction carried from T7.3):** the Web Client runs in an iframe; `page.mouse.click` with iframe-relative `getBoundingClientRect()` coordinates clicks the wrong spot. The reliable method is a Playwright locator within the frame (`frame.evaluateHandle(...)` → `elementHandle.click()`), which was used to close the User Preferences tab. (The earlier T7.3 raw-coordinate click missed for this reason and was corrected.)
- **The close-only-reopen recovery is real and reproducible-in-principle but single-execution**: this is one controlled execution on one form in one scope; it is `observed`, not `replay_verified`.

## Acceptance table (final)

| AC | Requirement | Task | Result | Evidence |
|---|---|---|---|---|
| AC-1 | Read-only preflight: current User editing scope proven **User**; `FX_FormPropertyLab07` proven **absent** (exact + CI, store + UI) | T1 | **PASS** | `01`–`08`; T1 |
| AC-2 | Read-only confirmation of `Unload IDO Metadata With Forms` state (**CHECKED/enabled**), not changed | T1 | **PASS** | `09`–`11`; T1.13 |
| AC-3 | Create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab07` (Save Template unchecked) + record untouched baseline; prove exactly one (642→643, `FX_` 11→12) | T2 | **PASS** | `12`–`21`; T2 |
| AC-4 | Change **only** Form-level Description to exactly `Form Property Description Close Only`; one ordinary Save to a demonstrably clean state; all comparison properties unchanged | T4 | **PASS** | `24`–`26`; T4 |
| AC-5 | Close `FX_FormPropertyLab07` normally (no unsaved-change prompt, no mutation) | T5 | **PASS** | `27`–`28`; T5 |
| AC-6 | **Do not** invoke `Form > Definition > Unload All Global Form Objects` (at any point) | T5 (audit) | **PASS** | T5.5; T7.4 |
| AC-7 | Reopen the exact same customized version by Form name + ScopeType + ScopeName (no unload) | T6 | **PASS** | `29`–`31`; T6 |
| AC-8 | Verify Description + all recorded comparison properties recovered unchanged after the close-only reopen | T6 | **PASS** | `31`; T6.3 |
| AC-9 | Final read-only audit: target still open/clean with values intact; exactly one target (643/12/1); preference unchanged (read-only, closed without Save); no unload performed | T7 | **PASS** | `32`–`35`; T7.1–T7.4 |
| AC-10 | Repository/worktree changes confined to the EXP-008 record + `evidence/EXP-008/`; no recipe/environment/AGENTS.md/other-experiment change; no recipe promoted | T7 | **PASS** | T7.5 (mtime audit) |

**All acceptance criteria AC-1 … AC-10 are satisfied.**

## Result classification

- **Classification: `observed`** (single controlled execution). Per the coordinator instruction, this is classified **only as `observed`** — not `replay_verified`, and no reusable recipe is promoted or modified.
- **What this single execution shows:** the literal User-scope Form-level Description value `Form Property Description Close Only` on `FX_FormPropertyLab07` **recovered unchanged across this specific ordinary close/reopen path** (normal form-tab close → Designer `Form`-menu recent-forms reopen), with **no** `Form > Definition > Unload All Global Form Objects` invocation and **no** ClearCache-style request observed around the close or the reopen. All recorded comparison properties (Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) also recovered unchanged.
- **What this does NOT establish (explicit non-claims):**
  - It does **not** establish IDO-metadata trigger behavior (whether/why any IDO metadata is or is not unloaded on an ordinary close).
  - It does **not** establish internal cache semantics (the absence of a ClearCache-style request is a diagnostic observation, not a claim about any cache mechanism).
  - It does **not** establish Forms-database persistence guarantees beyond this observed session/tenant/release.
  - It does **not** generalize to other Form properties, other scopes (Site/Group/Vendor Default), other users, other tenants, or other Mongoose releases.
  - It is **not** a replay verification — a later independent replay would be required to promote this to `replay_verified`.
- **Knowledge state:** the EXP-008 **Description-persistence-across-close-only-reopen** procedure is **observed** (single complete execution: create → baseline → Description edit → ordinary Save → close → reopen → recovery verified → final audit). No reusable recipe is promoted from this first execution.

## T7 — Stopped here (experiment final audit complete)

Did **not** mutate any Mongoose artifact; did **not** change or Save any User Preference; did **not** invoke any unload command; did **not** edit or Save any Form; did **not** switch scope; did **not** promote or modify any reusable recipe. `FX_FormPropertyLab07` is left **open and clean**. **EXP-008 is COMPLETE** (all AC-1…AC-10 PASS; result classified `observed`).