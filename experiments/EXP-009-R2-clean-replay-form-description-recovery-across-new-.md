# EXP-009-R2 — Clean Replay: Form Description Recovery Across New Web Designer Client Instance (FX_FormPropertyLab10)

Status: **COMPLETE — clean independent replay of EXP-009 on a new target Form; AC-1…AC-10 all PASS; procedure now `replay_verified`.** `FX_FormPropertyLab10` (User scope) created, its Form-level Description set to `Form Property Description New Designer Client Replay`, and recovered unchanged across a newly launched Web Designer client instance within the same authenticated Web Client session (**UI-level recovery only**; no server-session / database-persistence / cache-eviction / IDO-metadata-unloading claim). Final state: exactly one target (646 total / 15 `FX_`); `FX_FormPropertyLab10` left open and clean in the newly launched Designer; repository changes confined to this record + `evidence/EXP-009-R2/`.
Date: 2026-10-02
Mode: LEARNING MODE — **independent clean replay** of the EXP-009 procedure (Description-recovery-across-**new-Web-Designer-client-instance**) on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab10`.
Run: `R-20261002-225512-23P8` (cycle 0, task T1), started 2026-10-02 22:55:12. Cycle 1, task T2 = strictly read-only reconciliation + final audit (AC-7/AC-8/AC-9 explicit mapping, AC-10 completion), no Mongoose mutation.

## Objective

Independently replay the EXP-009 procedure end-to-end on a new target: create exactly one new User-scope classic BuildFromScratch Form named `FX_FormPropertyLab10` using the verified basic-form recipe, record its untouched Form-property baseline, change only its Form-level Description to the literal value `Form Property Description New Designer Client Replay`, ordinary-save once to a demonstrably clean state, close the target Form normally, then close the entire existing Web Designer browser tab/window/client instance without invoking `Unload All Global Form Objects`. From the still-authenticated Web Client, launch a newly rendered Web Designer tab/window/client instance through the supported UI path, prove the target is not already inherited/open in the new instance, deliberately reopen the exact same User-scoped Form version, and verify that Description and all recorded comparison properties recover unchanged. The result may establish only UI-level recovery across this new Designer client-instance boundary within the same authenticated Web Client session; it must not be classified as proof of a new server-side Designer session, Forms-database persistence, cache eviction, or IDO-metadata unloading.

In scope: read-only preflight confirming editing scope is User and `FX_FormPropertyLab10` is absent; create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab10` using `recipes/forms/create-basic-form.md` with Save Template unchecked; record untouched baseline values for Description, Caption, Version, Device Type, Form Type, Is Master, ScopeType, and ScopeName; change only Form-level Description to exactly `Form Property Description New Designer Client Replay`; exactly one ordinary Designer Save to a demonstrably clean state; close the target via its ordinary Form-tab close control; close the entire existing Web Designer tab/window/client instance after the target is saved, clean, and closed; keep the existing authenticated Web Client open (no logout, no new authentication session); launch a newly rendered Web Designer tab/window/client instance from the existing authenticated Web Client via the already-established supported UI path; prove by browser evidence that the old Designer tab/window is gone and a new one is present; verify the new Designer does not already contain `FX_FormPropertyLab10` as an inherited/open Form tab before deliberately reopening it; reopen through the Designer Form menu and verify the exact scoped version by Name + ScopeType + ScopeName; compare recovered Description and all recorded baseline properties; capture screenshots and browser-state evidence under `evidence/EXP-009-R2/`; update only this record.

Out of scope: proving or inferring a distinct server-side Designer session, Mongoose web-session identity, or backend session topology; logout/login, SLO, browser restart, OS restart, or any new authentication session; proving a Forms-database row, durable storage provenance, or any storage boundary stronger than the tested new Web Designer client instance; inferring Form/global-object cache eviction or IDO-metadata unloading; invoking `Form > Definition > Unload All Global Form Objects` or any global-object/metadata-clearing command; changing or saving `Unload IDO Metadata With Forms` or any other User Preference; Caption edits, variables, components, collections, bindings, handlers, scripts, validators, data sources, IDO definitions, localized Strings, or FormSync operations; Site, Group, or Vendor Default scope; modification of `FX_FormPropertyLab01` through `FX_FormPropertyLab09` or any non-`FX_` artifact; creation or modification of reusable recipes, `AGENTS.md`, environment files, or other experiment records; direct database changes, undocumented APIs, unsupported internal session identifiers, direct cold target-Form URLs, or metadata hacks.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Web Client iframe title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`).
- Browser state at preflight start (inspected first; **no login performed — session already authenticated**): three tabs:
  - Tab 0: **Mongoose Web Client (portal)**, signed in — **no form open** (no form tabs); toolbar **clean** (Save `mgtoolbarbutton-1102` disabled; Open `mgtoolbarbutton-1101` and Designer split `mgtoolbarbutton-1126` enabled); **no** visible Ext windows; **no** `portal-notification` banner. Web Client iframe runtime URL `WSWebClient/WSWebForm.aspx?…&configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM…`. (evidence `02`.)
  - Tab 1: **stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (empty title) — the long-standing leftover of the EXP-006 T8 SLO-recovery navigation; unchanged. Not a Designer tab.
  - Tab 2: **Web Designer tab open** at `WSWebClient/designer/Default.aspx?…&MGForm=FX_FormPropertyLab09` — `FX_FormPropertyLab09` was **left open and clean** by EXP-009 T6/T7 (final state) and was not closed at the end of that experiment. Read-only inspection in this preflight: **two form tabs** — `FX_FormPropertyLab09` (leftover from EXP-009, **active** per URL) and no others (the earlier Lab04–Lab08 leftovers were not present in this Designer instance). Status bar `[ ScopeType: User / ScopeName: <username> ]` (ScopeName masked by the secrets layer in tool output; the signed-in user is `anton.ramos@3mworks.com.ph` per `environments/current-environment.md`). Toolbar **clean** (Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` disabled; New `mgtoolbarbutton-1088` enabled); **no visible windows**. (evidence `01`.)
- **Target form `FX_FormPropertyLab10` does NOT exist** — full Select Form store scan (645 records) found 0 exact and 0 case-insensitive matches in both the Name (`mgdata`) and Caption (`text`) fields, 0 near-miss; UI filter searches in both case modes returned 0 rows; positive control 9 rows (method and evidence below).
- Existing `FX_` forms (**exactly 14**): `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01`.
- Form-count reconciliation: **645 total / 14 `FX_` / 0 target** — exactly the EXP-009 T7 final audit values (644+1 / 13+1, `FX_FormPropertyLab09` added at EXP-009 T2). No growth, no deletions, no unexplained artifacts between experiments.
- No Mongoose artifact was created, modified, or deleted during this preflight. No User Preference was opened, changed, or saved. No unload command was invoked. No form was opened from the Select Form dialog. No Designer was launched or closed. No Designer mutation was performed. Editing scope unchanged (User).

## Preflight method (T1)

1. Inspected repository state and references: `AGENTS.md`, `recipes/forms/create-basic-form.md` (status **verified**), `environments/current-environment.md`, and the EXP-009 record (read-only references; not modified). Worktree is a git repository (branch `exp/EXP-009-R2`); starting-state audit below.
2. Inspected current browser state (3 tabs as above) — **no login performed** (session already authenticated). Screenshot of the Designer tab (evidence `01`) and of the Web Client (evidence `02`).
3. Confirmed Web Client iframe state programmatically (title = config group `G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM_DEFAULT`; no visible windows; no form tabs; Save disabled; no `portal-notification`).
4. In the Web Client, clicked **Open** (`mgtoolbarbutton-1101`, native Playwright click) → **Select Form** dialog (window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147` — **identical IDs to the EXP-009 session**). The dialog opened with an **empty** filter → full store **645 records** (evidence `03`).
5. **Target-absence proof (store-level, authoritative):** scanned the entire Select Form store (all **645** records): field `mgdata` (Name) — **0 exact** matches for `FX_FormPropertyLab10`, **0 case-insensitive** matches; field `text` (Caption) — **0 exact**, **0 case-insensitive**. Near-miss scan for `formpropertylab10` (case-insensitive substring, Name and Caption) matched **0** records.
6. **Target-absence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab10` into the Filter field (real key events, Case Sensitive **off**) → store reloaded to **0 records** (evidence `04`).
7. **Target-absence proof (UI-level, case-sensitive):** toggled **Case Sensitive on**, cleared and re-typed `FX_FormPropertyLab10` → **0 records** (evidence `05`).
8. **Positive control (UI-level):** cleared and typed `FX_FormPropertyLab` → exactly **9 rows**: `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — proves the filter mechanism works and that only the 01–09 variants exist (evidence `06`).
9. **Visual inventory:** cleared and typed `FX_` → exactly **14 rows** rendered in the grid (evidence `07`).
10. Restored the dialog to its original state: Case Sensitive back **off**, filter cleared via real key events → full store restored, **645 records**, Starts With verified off; closed the dialog with **Cancel** (native click). Verified the Web Client returned to its original state: no visible windows, Save disabled (evidence `08`).
11. **Editing-lane check (read-only):** the Designer tab (tab 2) is in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`) with a clean toolbar and `FX_FormPropertyLab09` active — suitable for a User-scope creation in the existing session (no scope re-prompt expected, per EXP-009).
12. Audited the worktree starting state (git status, see below).

## Target-absence evidence — pre-mutation absence of `FX_FormPropertyLab10`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store (Name) | Store scan of all 645 records, field `mgdata`, `=== 'FX_FormPropertyLab10'` | **0 matches** |
| Case-insensitive, whole store (Name) | Store scan, `mgdata.toLowerCase()` comparison | **0 matches** |
| Exact / case-insensitive, whole store (Caption) | Store scan, field `text`, exact and `toLowerCase()` | **0 / 0 matches** |
| Near-miss scan | Case-insensitive substring `formpropertylab10` in Name and Caption | **0 matches** |
| UI filter, case-insensitive (Case Sensitive off) | Dialog filter `FX_FormPropertyLab10` | **0 rows** (evidence `04`) |
| UI filter, case-sensitive (Case Sensitive on) | Dialog filter `FX_FormPropertyLab10` | **0 rows** (evidence `05`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` | **9 rows**: `FX_FormPropertyLab09`…`FX_FormPropertyLab01` (evidence `06`) |
| Visual, full `FX_` inventory | Dialog filter `FX_` | exactly 14 `FX_` rows, no `FX_FormPropertyLab10` (evidence `07`) |

**Counts: total forms = 645; `FX_` forms = 14; target `FX_FormPropertyLab10` = 0.**

## Repository / worktree starting state (T1)

- Worktree **is** a git repository: branch **`exp/EXP-009-R2`**; worktree **clean** at preflight start (`git status --porcelain` empty; no untracked, no modified).
- **Run boundary:** this run (`R-20261002-225512-23P8`) started at **2026-10-02 22:55:12**.
- **Not modified before this run:** `AGENTS.md`, `opencode.json`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), `environments/current-environment.md`, and all `experiments/EXP-00x-*.md` records (including the EXP-009 record, unchanged).

## T1.1 — Creation of `FX_FormPropertyLab10` + untouched baseline

### Guards re-verified first (no mutation)

- **Guard 1 — scope (PASS):** Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (read-only); toolbar clean (Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` disabled; New `mgtoolbarbutton-1088` enabled); no visible windows; single form tab `FX_FormPropertyLab09` (EXP-009 leftover) present and untouched.
- **Guard 2 — target absence (PASS):** the preflight store scan above (645 records, 0/0/0, both UI filter modes 0 rows) was performed immediately before the mutation in the same session.

### Creation method (per `recipes/forms/create-basic-form.md`)

1. Switched to the Designer tab (tab 2) — already open in **User scope**, clean toolbar, `FX_FormPropertyLab09` active. **No "Identify Your Editing Scope" dialog appeared** (session scope already established for the signed-in user — same as EXP-009 T2).
2. Designer toolbar **New** (`mgtoolbarbutton-1088`) — native Playwright click → **"Form Wizard Selection"** dialog (window `formwizard-1408` — xtype `formwizard`, not an Ext `window`; numeric ID drifted from the EXP-009 session, as expected). (evidence `09`.)
3. Radio **New Form** already checked (default). Category combo (`mginfoconexpandable-1426`) → **Classic** selected; Wizard combo (`mginfoconexpandable-1431`) → **BuildFromScratch** selected. (evidence `10`.)
4. OK (`mgformbutton-1434`, native click) → **"Form Wizard - Build From Scratch"** (expeditor `expeditor-1468`). Page-1 values verified: Name (editable combo `mgcombo-1475`) set to **`FX_FormPropertyLab10`**; all other defaults left untouched — Form Type `BuildFromScratch` (`mgcombo-1489`), Form Layout `GridLeft` (`mgcombo-1494`), Device Type `Default` (`mgcombo-1499`), Data Source empty (`mgcombo-1504`). (evidence `11`.)
5. **Next** (`mgformbutton-1711`, native click) → Next became **disabled**, **Finish** (`mgformbutton-1712`) became **enabled** (single scrollable page, as in EXP-009 T2).
6. **Save Template** checkbox (`ext-comp-1707`) was **checked by default**; toggled **off** via its own handler `onBoxClick()`. (evidence `12`.)
7. **Finish** (`mgformbutton-1712`, native click) → **"Process Completed Successfully"** dialog (`ext-comp-1009`) → **OK** (`button-1013`, native Playwright click). (evidence `13`.)
8. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab10`; form tab **`FX_FormPropertyLab10`** appeared (2nd tab) and is selected; the `FX_FormPropertyLab09` tab **remains present and untouched**; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `14`.)

### Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store:
- **Total records = 646** (645 + 1 — exactly +1; **no template artifact** created, consistent with Save Template being unchecked).
- **Exactly 1 exact match** for `FX_FormPropertyLab10` (store index 282, record `{mgdata:"FX_FormPropertyLab10", text:"FX_FormPropertyLab10", id:"extModel214-4517"}`); case-insensitive matches = 1 (the same record); near-miss = 1 (the same record). **Distinct matching records = 1.**
- `FX_`-prefixed forms now number **15**: the 14 pre-existing plus **`FX_FormPropertyLab10`** (index 282). No other artifact added or removed.
- UI confirmation: filtered the dialog to `FX_FormPropertyLab10` → **exactly 1 row** (evidence `16`); filtered `FX_` → **exactly 15 rows** (evidence `17`).
- Dialog closed via Cancel (filter cleared first; 646 records, Case Sensitive off, Starts With off); Web Client verified clean (no windows).

### Exact User-scope identity + full pre-Description baseline (recorded BEFORE any property change)

Read read-only from the loaded Designer property grid store `formpropertygrid-1135`:

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab10` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |
| **ScopeType** | `User` | — (status bar) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | — (status bar) |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (evidence `15`; the live status-bar value is masked by the secrets layer in tool output; the ScopeName is the signed-in user per `environments/current-environment.md`).

**Key baseline fact for the persistence check:** the freshly created form's **Description is empty** (recorded from the store, not assumed) — the later change to the literal `Form Property Description New Designer Client Replay` is an unambiguous empty→literal transition. (Caption is also empty and remains an unchanged comparison property.)

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### Post-creation cleanliness + no-earlier-FX_-edit proof

- **Designer clean after the creation workflow:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; no dirty-state indicator; URL `?MGForm=FX_FormPropertyLab10`; active form tab `FX_FormPropertyLab10`. (evidence `14`, `15`.)
- **No earlier `FX_` Form was edited:** the pre-existing `FX_FormPropertyLab09` tab remains present and untouched; the toolbar (which reflects the active form and would be enabled by any unsaved edit) is clean; the post-creation inventory shows all 14 pre-existing `FX_` forms still present (no rename/delete); the only delta in the entire 646-record store is the single new `FX_FormPropertyLab10` record.

## T1.2 — Description edit + ordinary Save

### Guard re-read (read-only; PASS — identical to the baseline above)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab10`.
- **Loaded target** exactly `FX_FormPropertyLab10` (URL + property store `Name` + active form tab — three agreeing surfaces).
- **Scope** `[ ScopeType: User / ScopeName: <username> ]` (status bar).
- **Baseline (all equal to the T1.1 baseline):** Name `FX_FormPropertyLab10`, Description **empty**, Caption **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Cleanliness:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; both form tabs present (`FX_FormPropertyLab09` untouched + target active).
- **Guard PASS** — no mutation performed until the edit.

### Description edit (supported Designer property editor)

1. Located the Description value cell in the property grid `formpropertygrid-1135`: the cell with `data-mgcompname="Design.Description"` at viewport (870,195) 139×23 — **same cell position as EXP-009 T3**.
2. **Double-click** the value cell (native Playwright `mouse.dblclick` at cell center (939.5,206.5)) → the grid's inline editor opened and was **focused** (`textfield-1139-inputEl`, an `x-form-text` at the cell position — same component id as EXP-009 T3).
3. Typed exactly `Form Property Description New Designer Client Replay`, then **Enter** to commit.
4. Post-commit store read: `Description = "Form Property Description New Designer Client Replay"`; **all other Design properties unchanged** (Name, Caption empty, Version, Device Type, Form Type, Is Master identical to baseline). Toolbar Save/Regenerate **enabled** (dirty state) — expected after an edit. (evidence `18`.)

### Ordinary Designer Save (exactly one)

- Clicked the toolbar **Save** button (`mgtoolbarbutton-1085`, native Playwright click) — the ordinary Designer Save; **no Regenerate Form**, no menu, no wizard, no unload, **no second Save**.
- Result: **no dialog or window** appeared; toolbar Save and Regenerate returned to **disabled** — the Designer is **clean** again. No error, no confirmation prompt. (evidence `19`.)

### Post-Save verification (all comparison properties re-read)

| Property | Baseline (T1.1) | Post-Save | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab10` | `FX_FormPropertyLab10` | ✓ |
| **Description** | *(empty)* | **`Form Property Description New Designer Client Replay`** | ✓ (changed as intended, exact literal — verified character-for-character from the store) |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Description equals exactly `Form Property Description New Designer Client Replay`** (verified character-for-character from the property store, not assumed).
- **All other comparison properties remain equal to the baseline.**
- **Designer is clean:** Save/Regenerate disabled, no visible windows, URL still `?MGForm=FX_FormPropertyLab10`, both form tabs present (`FX_FormPropertyLab09` untouched).

## T1.3 — Close target Form + close entire existing Designer tab

### Guard re-read (read-only; PASS — identical to post-Save state)

- **Browser inventory (pre-close):** 3 tabs — Tab 0 Web Client (authenticated portal, `Mongoose`), Tab 1 stray dead bare-portal-root tab, Tab 2 (current) **Designer** at `WSWebClient/designer/Default.aspx?...&MGForm=FX_FormPropertyLab10`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`.
- **Loaded target** exactly `FX_FormPropertyLab10` (URL + property store `Name` + active form tab — three agreeing surfaces).
- **Scope** `[ ScopeType: User / ScopeName: <username> ]` (status bar).
- **Baseline (all equal to T1.1/T1.2):** Name `FX_FormPropertyLab10`, Description **`Form Property Description New Designer Client Replay`** (exact literal), Caption **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Cleanliness:** toolbar Save / Regenerate both **disabled**; **no visible windows**; 2 form tabs present (`FX_FormPropertyLab09` + target active).
- **Guard PASS** — no mutation performed until the close.

### Action audit (no global-object clear before this boundary)

- Since T1.1 creation, the **only** Designer interactions performed were: property-grid reads, the T1.2 Description cell double-click + type + Enter, exactly one ordinary toolbar Save, and (T1.3) the Form-tab close below.
- **`Unload All Global Form Objects` was NOT invoked** at any point (no Form > Definition menu, no unload command, no metadata-clear command). No User Preference was opened, changed, or Saved.
- This boundary (Form close + Designer tab close) is therefore entered **without** any explicit global-object/metadata clear command having been issued.

### Close `FX_FormPropertyLab10` (ordinary Form-tab close control only)

- Located the target Form tab's close control: the `.x-tab-close-btn` inside the active `FX_FormPropertyLab10` tab (`tab-2008-closeEl`) at viewport (688,68) 26×31.
- Native Playwright click on that close button (the ordinary Designer Form-tab close control; **no** unload, **no** menu, **no** confirmation-driven path).
- **No unsaved-change prompt appeared** — no dialog asked to save/discard. Treated **only as corroboration** of the already-proven cleanliness (not as the primary proof).
- Result: the `FX_FormPropertyLab10` Form tab is **gone**; the remaining form tab is unchanged (`FX_FormPropertyLab09`, which became active); Designer toolbar returned to clean (Save/Regenerate disabled); URL tail became `?MGForm=FX_FormPropertyLab09`. (evidence `20`.)
- **No other `FX_` Form changed** — the `FX_FormPropertyLab09` tab remains present and untouched.

### Close the entire existing Web Designer tab (normal browser tab close)

- Closed browser **tab index 2** (the Designer) via the normal browser/tab close mechanism (Playwright tab close). No unload, no logout, no SLO, no browser restart, no new authenticated session.
- **After closure, browser inventory:** 2 tabs — Tab 0 Web Client (authenticated portal, `Mongoose`) and Tab 1 stray dead bare-portal-root tab. **The Designer tab is gone.**
- **The original authenticated Web Client (Tab 0) remains open and authenticated:** URL is the portal (not a login page), title `Mongoose`, **no login/password form present**, and the authenticated portal shell is rendered. (evidence `21`.)
- A replacement Designer was **not** launched at this point.

## T1.4 — Launch a newly rendered Web Designer from the authenticated Web Client

### Pre-launch browser inventory (read-only; old Designer absent, Web Client present)

- **2 tabs:** Tab 0 (current) Web Client (authenticated portal, `Mongoose`); Tab 1 stray dead bare-portal-root tab. **No Designer tab present** (the prior Designer tab was closed at T1.3 and remains absent). (evidence `21`.)
- Web Client confirmed open and authenticated (portal shell, no login form).

### Re-observed the supported Designer launch control (not assumed)

- In the Web Client frame (`WSWebClient/WSWebForm.aspx`), re-observed the toolbar. Two adjacent "Designer" controls exist:
  - `mgtoolbarbutton-1125` — the **main Designer button**, whose flow offers only Runtime Builder categories (per the verified recipe pitfall and EXP-009 T5).
  - `mgtoolbarbutton-1126` — the **Designer split button**, which per the verified recipe (`recipes/forms/create-basic-form.md` step 1) opens the Web Designer in a **new tab** at `WSWebClient/designer/Default.aspx`.
- **Correct control:** `mgtoolbarbutton-1126` (the Designer split button) is the supported launch control for the Web Designer tab (re-observed this session; matches the verified recipe and EXP-009 T5). No first-attempt error occurred in this replay.

### Launch the Web Designer (supported UI route; no cold navigation)

- Clicked `mgtoolbarbutton-1126` (Designer split button) in the Web Client frame (native Playwright click via frame locator). **No direct `?MGForm=` URL, no cold navigation.**
- A **new browser tab (index 2)** opened at `WSWebClient/designer/Default.aspx` with title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` and **no `MGForm` param** (no form loaded) — a fresh Designer client instance. (evidence `22`.)
- The "Identify Your Editing Scope" dialog (`impersonate-1214`) appeared in the new Designer (Scope combo `combo-1216` value `3` = **User**; User combo `combo-1218` = the signed-in user). Per the verified recipe (step 1), **User scope was confirmed (OK** via `button-1220**)** — this is the normal launch flow, **not** a User Preference change and **not** a new authentication session (the user was already authenticated). (evidence `22` → `23`.)

### New Designer initial state (no inherited target tab; clean; User scope)

- **Browser inventory after launch (3 tabs):** Tab 0 Web Client (still open, authenticated); Tab 1 stray dead portal-root tab; **Tab 2 (current) = the NEW Web Designer** at `designer/Default.aspx` (no `MGForm`). The prior Designer tab (closed at T1.3) was **absent immediately before launch** and is **not** this tab — the new tab was created by the launch action. (evidence `22`, `23`.)
- **No open Form tabs:** the Designer's tab strip shows only its panel tabs (`Components`, `Collections`, `Form`, `Component`); **`FX_FormPropertyLab10` is NOT present as an inherited/open Form tab** (and no other `FX_` Form tab is present). (evidence `23`.)
- **Clean initial state:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) **disabled**; **no visible windows**; empty design surface; empty Properties panel. (evidence `23`.)
- **Editing scope:** status bar `[ ScopeType: User / ScopeName: <username> ]` — **User** scope (the required scope). (evidence `23`.)

## T1.5 — Reopen in the new Designer + recovery verification

### Guard re-read (read-only; PASS)

- **Browser inventory:** 3 tabs — Tab 0 Web Client (authenticated portal, still open); Tab 1 stray dead portal-root tab; Tab 2 (current) **the T1.4 new Designer** at `designer/Default.aspx` with **no `MGForm` param** (fresh instance).
- **No `FX_FormPropertyLab10` tab open** (form-tab list empty; only the Designer's panel tabs `Components`/`Collections`/`Form`/`Component`).
- **Scope** `[ ScopeType: User / ScopeName: <username> ]` (status bar).
- **Clean:** toolbar Save / Regenerate disabled; **no visible windows**.
- **Guard PASS.**

### Reopen `FX_FormPropertyLab10` via the supported Designer Form menu (no cold URL)

- Opened the Designer **Form** menu. The menu shows `Definition` (NOT opened — it contains the prohibited unload command), `Sign Out`, and the **recent-forms list**, whose first entry is **`FX_FormPropertyLab10`** (`menuitem-1073`), followed by `FX_FormPropertyLab09`, `Runtime Builder Selection`, `FX_FormPropertyLab08`…`FX_FormPropertyLab03`, `Form Property Lab`.
- Clicked the recent-forms entry **`FX_FormPropertyLab10`** (native Playwright click). **No direct `?MGForm=` cold navigation was used** — the form was reopened through the supported Form-menu recent-entry path (the same supported path as EXP-009 T6).
- The Designer loaded the form: URL became `…&MGForm=FX_FormPropertyLab10`; the form tab **`FX_FormPropertyLab10`** appeared and is active. (evidence `24`.)

### Post-reopen verification (exact scoped version + all comparison properties, read-only)

| Property | Baseline (T1.1) | Recovered (T1.5, new Designer instance) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab10` | `FX_FormPropertyLab10` | ✓ |
| **Description** | *(changed in T1.2 to the literal)* | **`Form Property Description New Designer Client Replay`** (exact literal, character-for-character from the property store) | ✓ **recovered** |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Exact scoped version proven:** Name = `FX_FormPropertyLab10`, ScopeType = `User`, ScopeName = `anton.ramos@3mworks.com.ph` (status bar `[ ScopeType: User / ScopeName: <username> ]`).
- **Description recovered exactly** as `Form Property Description New Designer Client Replay` after crossing the new-Designer-client-instance boundary.
- **Designer clean after reopen:** Save/Regenerate disabled, no visible windows, URL `?MGForm=FX_FormPropertyLab10`, single form tab `FX_FormPropertyLab10` active. (evidence `24`.)

## T1.6 — Final read-only audit

### Re-read the currently open `FX_FormPropertyLab10` (read-only; clean + unchanged)

- **Browser inventory (at final-audit start):** 3 tabs — Tab 0 Web Client (authenticated portal, still open); Tab 1 stray dead bare-portal-root tab; Tab 2 the T1.4/T1.5 new Designer at `designer/Default.aspx?...&MGForm=FX_FormPropertyLab10` (the target is open).
- **Loaded target** exactly `FX_FormPropertyLab10` (URL `?MGForm=FX_FormPropertyLab10` + property store `Name` + active form tab — three agreeing surfaces).
- **All comparison properties re-read (read-only from the property store `formpropertygrid-1135` + status bar) — identical to T1.5/T1.1** (table in T1.5 stands; re-confirmed at audit time).
- **Clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; single form tab `FX_FormPropertyLab10` active.
- **No Mongoose mutation performed** — the target remains open and clean, exactly as left by T1.5.

### Read-only Form inventory (exactly one target; 646 / 15; all pre-existing FX_ present)

- Re-opened the Web Client **Select Form** dialog (read-only; filter empty on open) → full store **646 records**.
- **Store-level scan (authoritative), all 646 records:**
  - **Exact match** for `FX_FormPropertyLab10` (Name field `mgdata`): **exactly 1** (store index 282, `id: extModel214-4517`).
  - **Case-insensitive match**: **exactly 1** (the same record).
  - **Near-miss** (case-insensitive substring `formpropertylab10`): **exactly 1** (the same record) — no other near-miss.
  - **`FX_`-prefixed forms: exactly 15.**
- **UI-level corroboration:** typed `FX_FormPropertyLab10` into the dialog filter (real key events) → **exactly 1 row** rendered (`FX_FormPropertyLab10`). (evidence `25`.)
- **The 15 `FX_` forms (all 14 pre-existing from the preflight baseline + the 1 new target):** `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, **`FX_FormPropertyLab10`** (new, T1.1), `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01`.
- **All 14 pre-existing `FX_` forms from the preflight baseline remain present** (same names; no rename/delete). **No experiment-attributable modification:** the complete EXP-009-R2 action record establishes that the **only** Designer mutations were the creation of `FX_FormPropertyLab10` (T1.1) and the edit of its Description + one ordinary Save (T1.2); **no other Form was ever opened for editing or Saved** in this experiment. The pre-existing `FX_FormPropertyLab09` tab (old Designer) was left untouched; in the new Designer (T1.4/T1.5) no other form was opened.
- **No independently explainable external change** was observed: total 646 and `FX_` 15 are exactly the post-creation values (645+1 / 14+1); no growth, deletion, or unexplained artifact.
- Dialog closed via **Cancel** (filter cleared first; 646 records, Case Sensitive off, Starts With off); Web Client verified clean (no windows). **No Form was opened from the dialog; no mutation.**

### Action-record reconciliation (no global-object clear; no User Preference Save)

| Phase | `Unload All Global Form Objects` / any global-object/metadata-clear command | User Preference opened/changed/Saved |
|---|---|---|
| Preflight | **NOT invoked** (no Form > Definition, no unload, no metadata-clear) | **NOT opened at all** |
| T1.1 (creation) | **NOT invoked** | **NOT inspected/changed/Saved** |
| T1.2 (Description edit + Save) | **NOT invoked** | **NOT inspected/changed/Saved** |
| T1.3 (close target + close Designer tab) | **NOT invoked** (action audit: no Form > Definition menu, no unload, no metadata-clear) | **NOT opened/changed/Saved** |
| T1.4 (launch new Designer) | **NOT invoked** | **NOT opened/changed/Saved** (the launch-time "Identify Your Editing Scope" confirmation is the normal launch flow, not a User Preference change) |
| T1.5 (reopen + recovery) | **NOT invoked** (the `Definition` submenu was never opened) | **NOT opened/changed/Saved** |
| T1.6 (final audit) | **NOT invoked** (read-only) | **NOT opened/changed/Saved** |

**Conclusion:** across the entire EXP-009-R2 run, **no explicit global-Form-object clear command** (`Unload All Global Form Objects` or any metadata-clear) **was invoked**, and **no User Preference was opened, changed, or Saved**. The `Form > Definition` menu (which contains the prohibited unload) was **never opened** in any phase.

### Repository / worktree audit (T1 baseline → now)

- **Git branch:** `exp/EXP-009-R2` (unchanged since preflight).
- **`git status --porcelain` (at final audit):**
  - `?? evidence/EXP-009-R2/` — **EXP-009-R2-attributable** (25 screenshots, `01`–`25`).
  - `?? experiments/EXP-009-R2-clean-replay-form-description-recovery-across-new-.md` — **EXP-009-R2-attributable** (this record).
  - No modified tracked files; no other untracked files.
- **EXP-009-R2-attributable changes are confined to exactly two paths:** this record and `evidence/EXP-009-R2/` (25 files).
- **NOT modified by this experiment (verified via `git status` — all clean):** `AGENTS.md`, `opencode.json`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), `environments/current-environment.md`, and every other `experiments/EXP-00x-*.md` record (including the EXP-009 record). `claims/` remains empty.
- **Conclusion:** all EXP-009-R2-attributable changes are confined to the EXP-009-R2 record + `evidence/EXP-009-R2/`. No recipe, environment file, AGENTS.md, other experiment record, or unrelated project file was changed by this experiment.

## Full AC-1 through AC-10 evidence table (replay of the EXP-009 acceptance criteria)

| AC | Requirement (abridged) | Result | Evidence |
|---|---|---|---|
| **AC-1** | Preflight proves editing scope is User and `FX_FormPropertyLab10` absent (exact + case-insensitive) before any mutation | **PASS** | Preflight: scope User (status bar); store scan 645 records 0/0 Name + 0/0 Caption (exact+CI), 0 near-miss; UI filter 0 rows both case modes; positive control 9 rows. evidence `01`–`07` |
| **AC-2** | Exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab10` created via the verified recipe; no unrelated Form creation/modification | **PASS** | T1.1: created via `recipes/forms/create-basic-form.md` (Save Template unchecked); store 645→646, `FX_` 14→15, exactly 1 target; all 14 pre-existing FX_ untouched. evidence `09`–`17` |
| **AC-3** | Untouched baseline recorded before the Description edit (Description empty at this point) | **PASS** | T1.1: Name/Description(empty)/Caption(empty)/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName recorded from the store before any edit. evidence `14`, `15` |
| **AC-4** | Only Description changed to the exact literal; exactly one ordinary Save; Designer clean; all comparison properties = AC-3 baseline | **PASS** | T1.2: Description → `Form Property Description New Designer Client Replay` (char-for-char); exactly one ordinary Save; Save/Regenerate disabled (clean); all other properties = baseline. evidence `18`, `19` |
| **AC-5** | Target closed via ordinary Form-tab close after the clean Save state; no-prompt = corroboration only; `Unload All Global Form Objects` not invoked before the boundary | **PASS** | T1.3: clean guard PASS + `tab-2008-closeEl` close (no prompt) + action audit (no unload). evidence `20` |
| **AC-6** | Existing Designer tab/window/client instance closed after target clean+closed; authenticated Web Client remained open; no logout/SLO/restart/preference mutation/server-session claim | **PASS** | T1.3: closed tab index 2 via normal browser tab close; Web Client still authenticated (no login form). evidence `21` |
| **AC-7** | A newly launched Designer tab/client instance created from the authenticated Web Client via a supported UI route (not cold `?MGForm=`); distinguished from the prior closed tab; target NOT present as an inherited/open tab before reopen; proves only a new client instance (not a new backend/web session) | **PASS** | T1.4: launched via Designer split button `mgtoolbarbutton-1126` (no cold URL); new tab at `designer/Default.aspx` (no `MGForm`), prior tab absent before launch; no form tabs (no inherited target); User scope. evidence `22`, `23` |
| **AC-8** | After deliberate reopen in the new Designer, the loaded target is the same scoped version (Name + ScopeType + ScopeName = AC-3 baseline) | **PASS** | T1.5: reopen via Form-menu recent entry `menuitem-1073` (no cold URL); Name `FX_FormPropertyLab10`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`. evidence `24` |
| **AC-9** | Post-reopen: Description = exact literal; all comparison properties = AC-3 baseline; Designer clean; classified only as UI-level recovery across a new Designer client instance within the same authenticated Web Client session (no server-session/DB-persistence/cache-eviction/metadata-unload claim) | **PASS** | T1.5: Description = `Form Property Description New Designer Client Replay` (char-for-char); all properties = baseline; clean. Limited classification applied. evidence `24` |
| **AC-10** | Final read-only audit: exactly one target; no earlier FX_ modified; no global-object unload or User Preference Save; repo changes confined to this record + `evidence/EXP-009-R2/`; no recipe/environment/AGENTS.md/other-experiment modification | **PASS** | T1.6: target clean+unchanged; exactly 1 target, 646/15, all 14 pre-existing FX_ present, no experiment-attributable modification; no unload, no User Preference Save; repo confined to record + evidence. evidence `25` |

**All ten acceptance checks (AC-1 … AC-10) PASS.**

## Result + knowledge classification

- **Result:** EXP-009-R2 is **COMPLETE**. The EXP-009 procedure was independently replayed end-to-end on a new target Form `FX_FormPropertyLab10`: created via the verified recipe, Description set to exactly `Form Property Description New Designer Client Replay`, ordinary-saved once to a clean state, closed normally, the entire prior Web Designer tab/client instance closed (without any global-object/metadata-clear command), a newly rendered Web Designer tab/client instance launched from the still-authenticated Web Client via the supported UI route, the exact same User-scoped Form version deliberately reopened, and the Description + all recorded comparison properties **recovered unchanged** across the new-Designer-client-instance boundary.
- **Knowledge state:** the **Description-recovery-across-new-Designer-client-instance** procedure is now **`replay_verified`** — it has been executed twice independently (EXP-009 on `FX_FormPropertyLab09`, observed; EXP-009-R2 on `FX_FormPropertyLab10`, this clean replay), with AC-1…AC-10 PASS in both and persistence verified in both (close/reopen + final read-only inventory). Per AGENTS.md, a procedure becomes verified only after repeatable execution and persistence verification — both conditions are now met.
- **Limited knowledge classification (the only permitted claim):** this establishes **UI-level recovery of the User-scope Form Description and baseline properties across a newly launched Web Designer tab/window/client instance within the same authenticated Web Client session.** It is **NOT** proof of a new server-side Designer session, Forms-database persistence, cache eviction, IDO-metadata unloading, or backend-session recreation. No such stronger claim is made or supported by this evidence.
- **No reusable recipe is promoted or modified** (per task instruction; `recipes/forms/create-basic-form.md` remains as-is, status **verified**).

## Observations / corrections (replay-specific)

- **The replay was clean end-to-end with no first-attempt errors** (EXP-009 T5 had a first-attempt error clicking the main Designer button `mgtoolbarbutton-1125` → Runtime Builder Selection flow; in this replay the split button `mgtoolbarbutton-1126` was re-observed and clicked directly).
- **The Form-menu recent-forms list is populated in the newly launched Designer** (it lists `FX_FormPropertyLab10` first, then `FX_FormPropertyLab09`, `Runtime Builder Selection`, Lab08…Lab03, `Form Property Lab`) even though the new instance inherited no open Form tabs — the recent list is a user-level recent list, not an inherited open-tab state. The supported reopen path (Form menu → recent entry) works in the new instance exactly as in EXP-009 T6.
- **The inline property editor component id is stable across Designer instances** (`textfield-1139-inputEl` for the Description cell, same cell position (870,195) 139×23 as EXP-009 T3) — the property grid re-renders per form but the editor component id did not drift between the old and new Designer instances in this run.
- **Wizard numeric IDs drifted as expected** (`formwizard-1408`, `mginfoconexpandable-1426/1431`, `mgformbutton-1434`, `expeditor-1468`, `mgcombo-1475/1489/1494/1499/1504`, `mgformbutton-1711/1712`, `ext-comp-1707`, success `ext-comp-1009`, OK `button-1013`) — resolve at runtime, never assume.
- **Select Form dialog control IDs were identical to the EXP-009 session** (window `ext-comp-1135`, grid `grid-1136`, filter `textfield-1143`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147`) — the Web Client iframe was not reloaded between experiments.
- **The `Definition` submenu (containing `Unload All Global Form Objects`) was NOT opened** at any point; no unload command was invoked.
- **The ordinary Save produced no visible confirmation and no error**; cleanliness is proven by the toolbar state (Save/Regenerate disabled) plus the store re-read, not by the absence of an error alone.
- **Closing a clean Form tab produced no unsaved-change prompt**; the tab simply disappeared and focus moved to the remaining tab (`FX_FormPropertyLab09`).
- **Closing the Designer browser tab is a normal browser tab close**; it did not log out, did not SLO, did not restart the browser, and did not affect the still-open authenticated Web Client (Tab 0) — which remained on the portal with no login form.
- No User Preference was inspected or changed; no unload was invoked; no Form other than the new `FX_FormPropertyLab10` was created, modified, or deleted; `FX_FormPropertyLab01…09` and all non-`FX_` artifacts untouched; editing scope stayed **User** throughout.

## Evidence (under `evidence/EXP-009-R2/`)

- `01-preflight-designer-state.png` — Designer tab at preflight start: `?MGForm=FX_FormPropertyLab09` (EXP-009 leftover, active, clean), Properties Design group, status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean.
- `02-preflight-webclient-state.png` — Web Client at preflight start: signed in, no form open, toolbar clean, no notification banner, no dialogs.
- `03-preflight-select-form-full-list.png` — Select Form dialog opened with an empty filter → full store (645 records).
- `04-select-form-filter-lab10-case-insensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab10`, Case Sensitive **unchecked** → grid empty (0 records).
- `05-select-form-filter-lab10-case-sensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab10`, Case Sensitive **checked** → grid empty (0 records).
- `06-select-form-filter-lab-prefix-nine-rows.png` — Select Form dialog, Filter `FX_FormPropertyLab` (positive control) → exactly 9 rows: `FX_FormPropertyLab09`…`FX_FormPropertyLab01`.
- `07-select-form-fx-inventory-fourteen-rows.png` — Select Form dialog, Filter `FX_` → exactly 14 `FX_` rows — **no `FX_FormPropertyLab10`**.
- `08-webclient-after-dialog-close.png` — Web Client after Cancel: original state restored (no form tabs, no dialogs, Save disabled).
- `09-t2-wizard-selection-default.png` — Form Wizard Selection dialog (New Form radio checked; Category/Wizard defaults).
- `10-t2-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch**.
- `11-t2-wizard-name-entered.png` — Build From Scratch wizard: Name `FX_FormPropertyLab10`, other defaults (BuildFromScratch / GridLeft / Default / empty).
- `12-t2-wizard-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked**.
- `13-t2-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `14-t2-form-created-loaded-clean.png` — New form `FX_FormPropertyLab10` loaded in the Designer (`?MGForm=FX_FormPropertyLab10`), form tab selected, `FX_FormPropertyLab09` tab still present, toolbar clean.
- `15-t2-baseline-properties-design-group.png` — Designer Properties, Design group: Name `FX_FormPropertyLab10`, Description empty, Caption empty, Version `User version for user <username>`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: <username> ]`.
- `16-t2-select-form-lab10-exists-one.png` — Select Form dialog filtered to `FX_FormPropertyLab10` → exactly 1 row (store total 646).
- `17-t2-select-form-fx-inventory-fifteen-rows.png` — Select Form dialog, Filter `FX_` → exactly 15 `FX_` rows including `FX_FormPropertyLab10`.
- `18-t3-description-edited-dirty.png` — After the Description edit and Enter: Description cell shows `Form Property Description New Designer Client Replay`; toolbar Save/Regenerate enabled (dirty).
- `19-t3-after-save-clean-description-persisted.png` — After the ordinary Save: toolbar clean (Save/Regenerate disabled), Description cell still shows the literal, no dialogs.
- `20-t4-target-form-tab-closed.png` — After the Form-tab close: `FX_FormPropertyLab10` tab gone, `FX_FormPropertyLab09` tab unchanged (now active), toolbar clean, no unsaved-change prompt.
- `21-t4-designer-tab-closed-webclient-still-authenticated.png` — After the Designer tab close: only the Web Client (+ stray dead tab) remain; Web Client shows the authenticated portal shell (no login form).
- `22-t5-new-designer-launched-scope-dialog.png` — After clicking the Designer split button: NEW Designer tab opened; "Identify Your Editing Scope" dialog (Scope: User) in the new Designer.
- `23-t5-new-designer-no-inherited-target.png` — New Designer after scope confirmation: clean initial state, no form tabs (no inherited `FX_FormPropertyLab10`), empty surface, User scope, toolbar clean.
- `24-t6-reopened-form-description-recovered.png` — After reopen via the Form-menu recent entry: `FX_FormPropertyLab10` tab active; Properties Design group (Name, Description `Form Property Description New Designer Client Replay`, Caption empty, Version, Device Type `Default`, Form Type `Normal`, Is Master `True`); status bar `[ ScopeType: User / ScopeName: <username> ]`; toolbar clean.
- `25-t7-final-inventory-one-target.png` — Final read-only audit: Select Form dialog filtered to `FX_FormPropertyLab10` → exactly 1 row (store total 646, 15 `FX_`).

## Final Mongoose state (left unchanged)

- `FX_FormPropertyLab10` is **open and clean** in the newly launched Web Designer (Tab 2); the authenticated Web Client (Tab 0) remains open; the stray dead portal-root tab (Tab 1) is unchanged. Exactly one `FX_FormPropertyLab10` exists (646 total / 15 `FX_`).
- `FX_FormPropertyLab09` (EXP-009 leftover) was closed together with the old Designer tab at T1.3 (its Form tab was not individually closed; the browser-tab close ended the entire old Designer client instance). It remains **saved and intact** in the store (present in the final inventory; its Description `Form Property Description New Designer Client` from EXP-009 T3 was not modified in this experiment).

## T2 — Strictly read-only reconciliation + final audit (AC-7/AC-8/AC-9 explicit mapping, AC-10 completion) (2026-10-02)

Coordinator instruction (T2, cycle 1): perform a **strictly read-only** reconciliation and final audit. No Mongoose mutation, no Save, no preference change, no unload command, no closing/reopening of additional forms, no other experiment. Inspect the current browser state plus evidence `23`, `24`, `25` and this record; explicitly establish whether AC-7, AC-8, AC-9 are fully supported; complete AC-10's read-only final audit; update only this record if documentation reconciliation is needed; report exact baseline/reopened values, exact repository audit result, any discrepancy, and evidence paths per AC. Do not classify `replay_verified` unless all AC-1…AC-10 are demonstrably supported.

### T2.1 — Live browser inventory (read-only, at reconciliation time)

- **3 tabs:** Tab 0 (current at inspection) Web Client (authenticated portal, `Mongoose`); Tab 1 stray dead bare-portal-root tab (unchanged); Tab 2 the T1.4/T1.5 **new Designer** at `WSWebClient/designer/Default.aspx?...&MGForm=FX_FormPropertyLab10`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` — the target is open.
- **Web Client (Tab 0) confirmed open and authenticated:** portal shell rendered, **no login/password form**, **no visible Ext windows**, Save (`mgtoolbarbutton-1102`) disabled (clean).
- **No logout/login/SLO/browser restart/new authentication session** was performed at any point in T2 (read-only task).

### T2.2 — Visual inspection of evidence `23`, `24`, `25`

- **`23-t5-new-designer-no-inherited-target.png`:** new Designer in its initial state — **no Form tabs** (only the Properties panel tabs `Form`/`Component`), empty design surface, empty Properties panel, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, toolbar clean (Save/Regenerate disabled). Corroborates: no inherited `FX_FormPropertyLab10` tab, User scope, clean.
- **`24-t6-reopened-form-description-recovered.png`:** `FX_FormPropertyLab10` Form tab active (closable); Properties Design group: Name `FX_FormPropertyL…`, Description `Form Property Des…`, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean. Corroborates: deliberate reopen with recovered properties, User scope, clean.
- **`25-t7-final-inventory-one-target.png`:** Web Client Select Form dialog, Filter `FX_FormPropertyLab10` (Filter By: Caption & Name; Case Sensitive **off**; Starts With **off**) → **exactly 1 row** (Caption `FX_FormPropertyLab10`, Name `FX_FormPropertyLab10`). Corroborates: exactly one target.

### T2.3 — Live re-read of the open target (read-only; AC-9 values intact)

Re-read from the new Designer (Tab 2) property store `formpropertygrid-1135` + status bar:

| Property | AC-3 baseline (T1.1) | Live re-read (T2) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab10` | `FX_FormPropertyLab10` | ✓ |
| **Description** | *(empty → changed in T1.2 to the literal)* | **`Form Property Description New Designer Client Replay`** (exact literal, character-for-character from the store) | ✓ |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; New (`mgtoolbarbutton-1088`) enabled; **no visible windows**; single Form tab `FX_FormPropertyLab10` active; URL `?MGForm=FX_FormPropertyLab10`.
- **No Mongoose mutation performed in T2** — the target remains open and clean, exactly as left by T1.5/T1.6.

### T2.4 — Live read-only Form inventory (exactly one target; 646 / 15)

- Re-opened the Web Client **Select Form** dialog (read-only; filter empty on open) → full store **646 records**.
- **Store-level scan (authoritative), all 646 records:** exact match for `FX_FormPropertyLab10` (Name field `mgdata`) = **exactly 1** (store index 282, `id: extModel214-4517`); case-insensitive match = **exactly 1** (same record); near-miss (case-insensitive substring `formpropertylab10`) = **exactly 1** (same record); **`FX_`-prefixed forms = exactly 15** (same 15 names as T1.6: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab10`, `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01`).
- **UI-level corroboration:** typed `FX_FormPropertyLab10` into the dialog filter (real key events) → **exactly 1 row** (`FX_FormPropertyLab10`).
- Dialog restored (filter cleared; Case Sensitive off; Starts With off; 646 records) and closed via **Cancel**; Web Client verified clean (no visible windows, Save disabled). **No Form was opened from the dialog; no mutation.**

### T2.5 — Explicit AC-7 / AC-8 / AC-9 reconciliation

**AC-7 — newly launched Designer, distinguished from the prior closed Designer, no inherited target, no backend-session claim: FULLY SUPPORTED.**
- **Prior Designer absent before launch:** pre-launch browser inventory was exactly 2 tabs (Web Client + stray dead portal-root tab), **no Designer tab** (T1.4; evidence `21`).
- **Supported UI route, no cold navigation:** launched via the Web Client Designer split button `mgtoolbarbutton-1126` (re-observed, not assumed); **no direct `?MGForm=` URL, no cold navigation** (T1.4).
- **New tab created by the launch action:** a new browser tab (index 2) opened at `designer/Default.aspx` with **no `MGForm` param** and title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` (evidence `22`).
- **Distinguished from the prior closed Designer without backend-session claims:** the prior Designer tab no longer existed in the browser inventory immediately before launch, and the new tab is a distinct browser tab created by the launch action (before/after page inventory). Observable URL fact: the new Designer tab's URL carries the **same `inforSessionId` parameter suffix** (`…~47e0e129-e5d8-4900-b635-ef63d7b1c881`) as the prior Designer tab's URL — consistent with launch from the **same authenticated Web Client session**; the record makes **no claim** of a new server-side Designer session, Mongoose application session, IDO Runtime session, or JavaScript-runtime boundary. The only claim is a **new client instance = a new browser tab** (evidence `21`, `22`, `23`).
- **Target NOT inherited/open before reopen:** the new Designer's tab strip showed only its panel tabs (`Components`, `Collections`, `Form`, `Component`) — **no `FX_FormPropertyLab10` Form tab and no other `FX_` Form tab** (evidence `23`; re-confirmed read-only at the T1.5 guard and visually at T2.2).

**AC-8 — deliberate supported-UI reopen; exact scoped identity: FULLY SUPPORTED.**
- **Deliberate reopen via supported UI (no cold URL):** Designer **Form** menu → recent-forms entry `FX_FormPropertyLab10` (`menuitem-1073`), native Playwright click; the `Definition` submenu (containing the prohibited unload) was **never opened** (T1.5; evidence `24`).
- **Exact identity:** Name = `FX_FormPropertyLab10` (URL `?MGForm=FX_FormPropertyLab10` + property store `Name` + active Form tab — three agreeing surfaces); ScopeType = `User`; ScopeName = `anton.ramos@3mworks.com.ph` (status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`) — **equal to the AC-3/T1.1 baseline** (T1.5; live re-confirmed at T2.3).

**AC-9 — recovered Description + all comparison properties; clean; limited classification: FULLY SUPPORTED.**
- **Description = exactly `Form Property Description New Designer Client Replay`** (character-for-character from the property store; live re-confirmed at T2.3).
- **Caption (empty), Version (`User version for user anton.ramos@3mworks.com.ph`), Device Type (`Default`), Form Type (`Normal`), Is Master (`True`), ScopeType (`User`), ScopeName (`anton.ramos@3mworks.com.ph`) each equal the AC-3/T1.1 baseline** (T1.5 table; live re-confirmed at T2.3).
- **Designer clean after reopen:** Save/Regenerate disabled, no visible windows (T1.5; live re-confirmed at T2.3).
- **Limited classification applied:** UI-level recovery across a newly launched Web Designer tab/window/client instance within the same authenticated Web Client session only — **no** server-session / Forms-database-persistence / cache-eviction / IDO-metadata-unloading / backend-session-recreation claim (T1.5, T2.5).

### T2.6 — AC-10 completion (live re-verification)

- **Exactly one `FX_FormPropertyLab10` exists:** T2.4 live store scan (646 total / 15 `FX_` / exactly 1 target, index 282, `extModel214-4517`) + UI filter (1 row) + evidence `25`.
- **Target remains open and clean with AC-9 values intact:** T2.3 (all nine comparison properties = baseline/literal; Save/Regenerate disabled; no windows).
- **No explicit `Unload All Global Form Objects` / global-object unload or User Preference Save:** the T1.6 action-record reconciliation table covers all T1 phases (none invoked); **T2 itself performed no Mongoose mutation at all** (read-only: browser inspection, property-store reads, Select Form dialog opened and closed via Cancel, git audit). The `Form > Definition` menu was never opened in any phase.
- **Repository/worktree audit (exact result at T2):**
  - Branch: `exp/EXP-009-R2`.
  - `git status --porcelain`: exactly two untracked paths — `?? evidence/EXP-009-R2/` (25 files, `01`–`25`) and `?? experiments/EXP-009-R2-clean-replay-form-description-recovery-across-new-.md` (this record). **No modified tracked files** (`git diff` empty); **no other untracked files**.
  - **EXP-009-R2-attributable changes are confined to exactly these two paths.** No recipe, environment file, `AGENTS.md`, other experiment record, or unrelated project file was changed by this experiment (all clean per `git status`).

### T2.7 — Discrepancies

- **None.** The live browser state, the evidence files (`23`, `24`, `25`), the T1 record sections, and the repository audit are mutually consistent. No fact required by AC-7, AC-8, AC-9, or AC-10 is unproven.

### T2.8 — Classification confirmation (not a new classification)

- T2 does **not** assign a new classification. It confirms that **all of AC-1 through AC-10 are demonstrably supported** (T1 record + evidence `01`–`25` + T2 live read-only re-verification), so the record's existing **`replay_verified`** classification for the Description-recovery-across-new-Designer-client-instance procedure (EXP-009 observed + EXP-009-R2 clean replay) **stands**, with the limited UI-level claim scope only.

### T2.9 — Stopped here (read-only reconciliation complete)

**No Mongoose mutations were made in T2.** No Save, no preference change, no unload command, no form closed/reopened beyond the read-only Select Form dialog (opened for inventory, closed via Cancel), no other experiment started. `FX_FormPropertyLab10` is **left open and clean** in the newly launched Designer (Tab 2); the authenticated Web Client (Tab 0) remains open; the stray dead portal-root tab (Tab 1) is unchanged.

## HARNESS REPORT

```
HARNESS REPORT
run_id: R-20261002-225512-23P8
experiment_id: EXP-009-R2
cycle_id: 0
task: T1
target: FX_FormPropertyLab10
description_literal: Form Property Description New Designer Client Replay
status: COMPLETE
acceptance: AC-1 PASS, AC-2 PASS, AC-3 PASS, AC-4 PASS, AC-5 PASS, AC-6 PASS, AC-7 PASS, AC-8 PASS, AC-9 PASS, AC-10 PASS (10/10)
classification: replay_verified (procedure: Description-recovery-across-new-Designer-client-instance; EXP-009 observed + EXP-009-R2 clean replay, both AC-1..AC-10 PASS, persistence verified)
claim_scope: UI-level recovery across a newly launched Web Designer tab/window/client instance within the same authenticated Web Client session ONLY (no server-session / DB-persistence / cache-eviction / IDO-metadata-unload / backend-session-recreation claim)
inventory_final: 646 total / 15 FX_ / exactly 1 FX_FormPropertyLab10 (store index 282, id extModel214-4517)
mutations: create FX_FormPropertyLab10 (User scope, Classic BuildFromScratch, Save Template unchecked); Description edit (empty -> literal); exactly one ordinary Designer Save; ordinary Form-tab close; old Designer browser-tab close; new Designer launch via mgtoolbarbutton-1126; scope-dialog OK (normal launch flow); Form-menu recent-entry reopen
prohibited_actions: none invoked (no Unload All Global Form Objects / metadata-clear; no User Preference opened/changed/Saved; no logout/SLO/browser restart/new auth session; no cold ?MGForm= navigation; no Regenerate Form; no second Save)
evidence: evidence/EXP-009-R2/01..25 (25 screenshots)
record: experiments/EXP-009-R2-clean-replay-form-description-recovery-across-new-.md
repository: branch exp/EXP-009-R2; changes confined to this record + evidence/EXP-009-R2/ (no recipe/environment/AGENTS.md/other-experiment modification)
final_state: FX_FormPropertyLab10 open and clean in the new Designer (Tab 2); Web Client (Tab 0) open and authenticated; stray dead portal-root tab (Tab 1) unchanged
discrepancies: none
```