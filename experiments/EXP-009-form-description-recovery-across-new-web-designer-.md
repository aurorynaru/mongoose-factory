# EXP-009 — Form Description Recovery Across New Web Designer Client Instance (FX_FormPropertyLab09)

Status: **COMPLETE — all tasks T1–T7 done; AC-1…AC-10 all PASS (observed); NOT `replay_verified` (no independent replay); no recipe promoted.** `FX_FormPropertyLab09` (User scope) created, its Form-level Description set to `Form Property Description New Designer Client`, and recovered unchanged across a newly launched Web Designer client instance within the same authenticated Web Client session (**UI-level recovery only**; no server-session / database-persistence / cache-eviction / IDO-metadata-unloading claim). Final state: exactly one target (645 total / 14 `FX_`); `FX_FormPropertyLab09` left open and clean in the newly launched Designer; repository changes confined to this record + `evidence/EXP-009/` (the pre-existing `README.md` formatting change is not EXP-009-attributable).
Date: 2026-10-02
Mode: LEARNING MODE — first execution of the Form-Description-recovery-across-**new-Web-Designer-client-instance** procedure on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab09`.
Run: `R-20261002-213117-Vpba` (cycle 1, task T1), started 2026-10-02 21:31:17.

## Objective

Create exactly one new User-scope classic BuildFromScratch Form named `FX_FormPropertyLab09` using the verified basic-form recipe, record its untouched Form-property baseline, change only its Form-level Description to the literal value `Form Property Description New Designer Client`, ordinary-save once to a demonstrably clean state, close the target Form normally, then close the entire existing Web Designer browser tab/window/client instance without invoking `Unload All Global Form Objects`. From the still-authenticated Web Client, launch a newly rendered Web Designer tab/window/client instance through the supported UI path, reopen the exact same User-scoped Form version, and verify that Description and all recorded comparison properties recover unchanged. The result may establish only UI-level recovery across this new Designer client-instance boundary within the same authenticated Web Client session; it must not be classified as proof of a new server-side Designer session, Forms-database persistence, cache eviction, or IDO-metadata unloading.

In scope: read-only preflight confirming editing scope is User and `FX_FormPropertyLab09` is absent; create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab09` using `recipes/forms/create-basic-form.md` with Save Template unchecked; record untouched baseline values for Description, Caption, Version, Device Type, Form Type, Is Master, ScopeType, and ScopeName; change only Form-level Description to exactly `Form Property Description New Designer Client`; exactly one ordinary Designer Save to a demonstrably clean state; close the target via its ordinary Form-tab close control; close the entire existing Web Designer tab/window/client instance after the target is saved, clean, and closed; keep the existing authenticated Web Client open (no logout, no new authentication session); launch a newly rendered Web Designer tab/window/client instance from the existing authenticated Web Client via an already-established supported UI path; prove by browser evidence that the old Designer tab/window is gone and a new one is present; verify the new Designer does not already contain `FX_FormPropertyLab09` as an inherited/open Form tab before deliberately reopening it; reopen through the Designer Form menu or Select Form UI and verify the exact scoped version by Name + ScopeType + ScopeName; compare recovered Description and all recorded baseline properties; capture screenshots and browser-state evidence under `evidence/EXP-009/`; update only this record.

Out of scope: proving or inferring a distinct server-side Designer session, Mongoose web-session identity, or backend session topology; logout/login, SLO, browser restart, OS restart, or any new authentication session; proving a Forms-database row, durable storage provenance, or any storage boundary stronger than the tested new Web Designer client instance; inferring Form/global-object cache eviction or IDO-metadata unloading; testing whether `Unload IDO Metadata With Forms` caused any effect during Form close or Designer client shutdown; invoking `Form > Definition > Unload All Global Form Objects`; changing or saving `Unload IDO Metadata With Forms` or any other User Preference; Caption edits, variables, components, collections, bindings, handlers, scripts, validators, data sources, IDO definitions, localized Strings, or FormSync operations; Site, Group, or Vendor Default scope; modification of `FX_FormPropertyLab01` through `FX_FormPropertyLab08`; creation or modification of reusable recipes; direct database changes, undocumented APIs, unsupported internal session identifiers, direct cold target-Form URLs, or metadata hacks.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Web Client iframe title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`).
- Browser state at preflight start (inspected first; **no login performed — session already authenticated**): three tabs:
  - Tab 0: **Mongoose Web Client (portal)**, signed in — user icon present in the portal top bar (value masked by the secrets layer, not read or printed); **no form open** (no form tabs); toolbar **clean** (Open `mgtoolbarbutton-1101` enabled; Save `mgtoolbarbutton-1102` disabled; Designer split `mgtoolbarbutton-1126` enabled); **no** visible Ext windows; **no** `portal-notification` banner. Web Client iframe name `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`, runtime URL `WSWebClient/WSWebForm.aspx?…&configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM…`. Portal workspace tabs: **System Administrator**, **Mongoose** (selected), **User Settings** (long-standing display-only leftover from EXP-007-R2 T5.9 exploration; untouched in this preflight). Portal page URL carries the leftover `favoriteContext=UserPreferences` param from prior preference reads (display-only; no form tab exists for it).
  - Tab 1: **stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (empty title) — the long-standing leftover of the EXP-006 T8 SLO-recovery navigation; **not re-verified in this preflight** (no navigation performed). Not a Designer tab.
  - Tab 2: **Web Designer tab open** at `WSWebClient/designer/Default.aspx?…&MGForm=FX_FormPropertyLab08` — `FX_FormPropertyLab08` was **left open and clean** by EXP-008-R2 T7 (final audit) and was not closed at the end of that experiment. Read-only inspection in this preflight: **five form tabs** — `Form Property Lab Coupled Unload Replay` (= `FX_FormPropertyLab04`, leftover from EXP-006-R2/EXP-007), `FX_FormPropertyLab05` (leftover from EXP-007), `FX_FormPropertyLab06` (leftover from EXP-007-R2), `FX_FormPropertyLab07` (leftover from EXP-008), and `FX_FormPropertyLab08` (**active** per URL). Status bar `[ ScopeType: User / ScopeName: <username> ]` (ScopeName masked by the secrets layer in tool output; the signed-in user is `anton.ramos@3mworks.com.ph` per `environments/current-environment.md`). Toolbar **clean** (Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` disabled; New `mgtoolbarbutton-1088` enabled); **no visible windows**. Active form's property store (`formpropertygrid-1135`, formId **148**) Design group: Name `FX_FormPropertyLab08`, Description `Form Property Description Close Only Replay` (the EXP-008-R2 customized value), Caption empty, Version `User version for user <username>`, Device Type `Default`, Form Type `Normal`, Is Master `True` — **consistent with the EXP-008-R2 T7 final state**. **None was touched** in this preflight. (evidence `01`.)
- **Target form `FX_FormPropertyLab09` does NOT exist** — full Select Form store scan (644 records) found 0 exact and 0 case-insensitive matches in both the Name (`mgdata`) and Caption (`text`) fields, 0 near-miss; UI filter searches in both case modes returned 0 rows; positive control 8 rows (method and evidence below).
- Existing `FX_` forms (**exactly 13**, store indices in `mgdata` order): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab08` (282, Caption empty — Name fallback), `FX_FormPropertyLab07` (283, Caption empty — Name fallback), `FX_FormPropertyLab06` (284, Caption empty — Name fallback), `FX_FormPropertyLab05` (285, Caption empty — Name fallback), `FX_ComponentLab02` (286), `FX_ComponentLab01` (287), `FX_FormPropertyLab02` (315, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04` (316, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03` (317, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (318, Caption `Form Property Lab`).
- Form-count reconciliation: **644 total / 13 `FX_` / 0 target** — **identical** to the EXP-008-R2 T7 final audit (644 / 13, same 13 names, same store indices 279–287 / 315–318). No growth, no deletions, no unexplained artifacts between experiments.
- No Mongoose artifact was created, modified, or deleted during this preflight. No User Preference was opened, changed, or saved (per the T1 instruction, User Preferences was **not opened at all** in this preflight). No unload command was invoked. No form was opened from the Select Form dialog. No Designer was launched or closed. No Designer mutation was performed. Editing scope unchanged (User).

## Preflight method (T1)

1. Inspected repository state and references: `AGENTS.md`, `recipes/forms/create-basic-form.md` (status **verified**), `environments/current-environment.md`, and the EXP-008 / EXP-008-R2 records (read-only references; not modified). Worktree is a git repository (branch `exp/EXP-009`, HEAD `18e2d0d`); starting-state audit below.
2. Inspected current browser state (3 tabs as above) — **no login performed** (session already authenticated). Screenshot of the Designer tab (evidence `01`) and of the Web Client (evidence `02`).
3. Confirmed Web Client iframe state programmatically (title = config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no visible windows; no form tabs; Save disabled; no `portal-notification`).
4. In the Web Client, clicked **Open** (`mgtoolbarbutton-1101`, native Playwright click) → **Select Form** dialog (window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147` — **identical IDs to the EXP-008 / EXP-008-R2 sessions**). The dialog opened with an **empty** filter (as left by EXP-008-R2 T7) → full store **644 records** (evidence `03`).
5. **Target-absence proof (store-level, authoritative):** scanned the entire Select Form store (all **644** records): field `mgdata` (Name) — **0 exact** matches for `FX_FormPropertyLab09`, **0 case-insensitive** matches (`toLowerCase()` comparison); field `text` (Caption) — **0 exact**, **0 case-insensitive**. Near-miss scan for `formpropertylab09` (case-insensitive substring, Name and Caption) matched **0** records.
6. **Target-absence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab09` into the Filter field (real key events, Case Sensitive **off**) → store reloaded to **0 records** (evidence `04`).
7. **Target-absence proof (UI-level, case-sensitive):** toggled **Case Sensitive on** via the checkbox's own `onBoxClick()` handler (`getValue()` false→true verified after the toggle), cleared and re-typed `FX_FormPropertyLab09` → **0 records** (evidence `05`).
8. **Positive control (UI-level, case-sensitive):** cleared and typed `FX_FormPropertyLab` (same mode) → exactly **8 rows**: `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — proves the filter mechanism works and that only the 01–08 variants exist (evidence `06`).
9. **Visual inventory:** cleared and typed `FX_` → exactly **13 rows** rendered in the grid (evidence `07`).
10. Restored the dialog to its original state: Case Sensitive back **off** (`onBoxClick()` again, verified `getValue()=false`), filter cleared via real key events → full store restored, **644 records**, Starts With verified off (`inputEl.dom.checked = false`); closed the dialog with **Cancel** (`button-1150`, native click). Verified the Web Client returned to its original state: no visible windows, Save disabled (evidence `08`).
11. **Editing-lane check (read-only):** the Designer tab (tab 2) is in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`) with a clean toolbar and `FX_FormPropertyLab08` active — suitable for a later User-scope creation in the existing session (no scope re-prompt expected, per EXP-008/EXP-008-R2).
12. Audited the worktree starting state (git status/log + mtime audit, see below). Console: only pre-existing benign entries (yggdrasil analytics 401 telemetry retries and the portal Content Catalog "Template URL missing for view Home" warning — unrelated to Mongoose functionality).

## T1 requirement-to-evidence mapping

| # | T1 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect AGENTS.md, recipe, EXP-008/EXP-008-R2 records as references (no modification) | **DONE** — all read; none modified | this file |
| 2 | Inspect current browser/page state; record existing Web Client and Web Designer tabs/windows/client instances with stable observable evidence | **RECORDED** — 3 tabs (Web Client authenticated; stray dead portal-root tab; Designer tab with 5 form tabs, `FX_FormPropertyLab08` active, User scope, clean) | tab list; evidence `01`, `02` |
| 3 | No login/logout/SLO/browser-restart/new auth session; no Designer close/launch; no unload; no User Preferences open/save; no Form mutation | **HONORED** — none performed | this file; browser state unchanged |
| 4 | Prove current editing scope is User | **PROVEN** — Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (read-only; no scope dialog, no scope switch) | evidence `01`; preflight facts |
| 5 | Prove `FX_FormPropertyLab09` absent (exact + case-insensitive) by supported UI/store evidence | **PROVEN** — store scan 644 records: 0/0 Name, 0/0 Caption (exact + CI), 0 near-miss; UI filter 0 rows case-insensitive; 0 rows case-sensitive; positive control 8 rows | evidence `03`–`07`; table below |
| 6 | Capture read-only Form inventory baseline sufficient to detect earlier `FX_` changes | **RECORDED** — 644 total / 13 `FX_` / 0 target, full 13-name list with Captions and store indices; identical to EXP-008-R2 T7 final audit | evidence `07`; preflight facts |
| 7 | Capture initial repository/worktree baseline (AC-10) | **CAPTURED** — git branch `exp/EXP-009`, HEAD `18e2d0d`, worktree status + mtime audit | "Repository / worktree starting state" below |
| 8 | Create `evidence/EXP-009/` and the EXP-009 record; do not create `FX_FormPropertyLab09` | **DONE** — screenshots `01`–`08`; this record; target NOT created | this file; `evidence/EXP-009/` |

## Target-absence evidence — pre-mutation absence of `FX_FormPropertyLab09`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store (Name) | Store scan of all 644 records, field `mgdata`, `=== 'FX_FormPropertyLab09'` | **0 matches** |
| Case-insensitive, whole store (Name) | Store scan, `mgdata.toLowerCase() === 'fx_formpropertylab09'` | **0 matches** |
| Exact / case-insensitive, whole store (Caption) | Store scan, field `text`, exact and `toLowerCase()` | **0 / 0 matches** |
| Near-miss scan | Case-insensitive substring `formpropertylab09` in Name and Caption | **0 matches** |
| UI filter, case-insensitive (Case Sensitive off) | Dialog filter `FX_FormPropertyLab09` | **0 rows** (evidence `04`) |
| UI filter, case-sensitive (Case Sensitive on) | Dialog filter `FX_FormPropertyLab09` | **0 rows** (evidence `05`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` (case-sensitive) | **8 rows**: `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` (evidence `06`) |
| Visual, full `FX_` inventory | Dialog filter `FX_` | exactly 13 `FX_` rows, no `FX_FormPropertyLab09` (evidence `07`) |

**Counts: total forms = 644; `FX_` forms = 13; target `FX_FormPropertyLab09` = 0.**

Case-insensitive matching was explicitly accounted for in multiple independent ways (store-level `toLowerCase` scan on both Name and Caption, UI filter with Case Sensitive off, and the positive control), not by a single exact-case filter.

**Name/Caption ambiguity:** the store scan distinguished the Name field (`mgdata`) from the Caption field (`text`) per record. No record carries a Caption resembling the target (case-insensitive Caption scan = 0). The Name-fallback Captions in the target family are `FX_FormPropertyLab08`/`07`/`06`/`05` (Caption empty → store `text` shows the Name) — all different Names, none confusable with `FX_FormPropertyLab09` under exact or case-insensitive matching. No ambiguity exists for the target.

## Repository / worktree starting state (T1)

- Worktree **is** a git repository: branch **`exp/EXP-009`**, HEAD **`18e2d0d1e83a61310a6ff51a614e47ff1ee6cc36`** (`harness: context/briefs update`); recent history: `8e4cabe Merge EXP-008-R2 (accepted)`, `69465c7 EXP-008-R2: accepted`, `10322fa harness: context/briefs update`, `813e779 harness: commit pending context/brief updates before branching`, `7d832a6 Initial import`.
- **Run boundary:** this run (`R-20261002-213117-Vpba`) started at **2026-10-02 21:31:17**.
- **Worktree status at preflight start:** `M README.md` (pre-existing, formatting-only change — Markdown table re-alignment and LF→CRLF; **not made by this run**) and `?? evidence/EXP-009/` (created by this preflight).
- **New in this preflight (T1 window, 2026-10-02 ~21:33–21:40):** only `evidence/EXP-009/01…08` (8 screenshots) and this record file.
- **Most recent prior content:** `experiments/EXP-008-R2-clean-replay-form-description-recovery-across-ordi.md` (mtime 2026-10-02 19:24:05 — its finalization; unchanged since) and `evidence/EXP-008-R2/*` (last 10/2).
- **NOT modified by this preflight (all predate the run):** `AGENTS.md` (9/30 02:12), `opencode.json` (9/30 02:23), `environments/current-environment.md` (9/30), every file under `recipes/` (9/30, including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` (≤ 10/2 19:24:05). `claims/` empty (pre-existing).
- `evidence/playwright/` = auto-generated Playwright snapshot/console artifacts (shared across experiments); `tools/learning-harness/` = harness runtime (briefs/context written by the harness at run start) — neither is EXP-009 knowledge content.
- **Conclusion:** worktree starting state is clean for EXP-009 purposes; no recipe, environment, AGENTS.md, or prior experiment file was modified by this preflight.

## Observations

- **Session already authenticated** — the Web Client portal tab shows the signed-in user icon, the DEM badge, and the loaded Mongoose app (no login form anywhere); no login/logout/SLO was performed or needed.
- **The Designer tab carries over the full EXP-008-R2 end state**: five form tabs (Lab04/05/06/07/08) with `FX_FormPropertyLab08` active and clean, its Description still `Form Property Description Close Only Replay` (the EXP-008-R2 customized value, re-read from the property store). All five are leftovers of earlier experiments and must not be modified by later tasks.
- **Select Form dialog control IDs are identical to the EXP-008 / EXP-008-R2 sessions** (window `ext-comp-1135`, grid `grid-1136`, filter `textfield-1143`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147`, Cancel `button-1150`) — the Web Client iframe was not reloaded since those experiments.
- **Filter store reload is driven by real input events** (re-confirmed): `page.keyboard.type()` / Delete reloaded the store each time; no programmatic `setValue` was used.
- **Case Sensitive checkbox (`mgDlgCbx-1146`)**: the component's own `onBoxClick()` handler toggled it consistently in both directions (`getValue()` false→true→false, verified after each toggle) — re-confirms the long-standing finding that `onBoxClick()` is the reliable toggle path.
- **Starts With checkbox (`mgDlgCbx-1147`)**: authoritative state read via `inputEl.dom.checked` (`false`) — re-confirms the EXP-007-R2/EXP-008 note that `getValue()` is unreliable for this control.
- **Property store `formpropertygrid-1135`** (same component id as the EXP-008/EXP-008-R2 sessions — the Designer page was not reloaded): the store's root nodes are a flat mix of group nodes (`Design`, `Appearance`, `Behavior`, `Help`, `Layout`) and their expanded leaf records (`Design.Name`, `Design.Description`, …) — 12 root nodes total for the active form (formId 148). Leaf records carry full untruncated `value`s (the grid cells visually truncate). `disp` values on group nodes carry a leading space (`" Design"`); match on `propId`.
- **Console:** only pre-existing benign entries — repeated yggdrasil analytics 401 telemetry retries (ending in "Stopping after 10 failed attempts") and the portal Content Catalog "Template URL missing for view Home" warning. Nothing Mongoose-functional.
- **Tab 1** remains the stray dead bare-portal-root tab (long-standing EXP-006 T8 leftover); no navigation to it was performed.
- The portal **"User Settings"** tab remains open (display-only leftover from EXP-007-R2 T5.9 exploration; the general Infor profile, NOT the Mongoose preference); untouched in this preflight.
- No Mongoose artifact was created, modified, or deleted; no User Preference was opened, changed, or saved; no unload was invoked; no form was opened from the dialog; the Select Form dialog was left in a clean state (filter empty, both checkboxes off) and closed via Cancel.

## Evidence (under `evidence/EXP-009/`)

- `01-preflight-designer-state.png` — Designer tab at preflight start: `?MGForm=FX_FormPropertyLab08`, five form tabs (Lab04 caption / Lab05 / Lab06 / Lab07 / Lab08 active), Properties Design group (Name `FX_FormPropertyL…`, Description `Form Property Des…`, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`), status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, toolbar clean (Save/Regenerate disabled).
- `02-preflight-webclient-state.png` — Web Client at preflight start: signed in (user icon top-right, DEM badge), portal tabs System Administrator / Mongoose (selected) / User Settings, no form open, toolbar clean (Save disabled), no notification banner, no dialogs.
- `03-preflight-select-form-full-list.png` — Select Form dialog opened with an empty filter → full store (644 records).
- `04-select-form-filter-lab09-case-insensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab09`, Case Sensitive **unchecked** → grid empty (0 records).
- `05-select-form-filter-lab09-case-sensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab09`, Case Sensitive **checked** → grid empty (0 records).
- `06-select-form-filter-lab-prefix-eight-rows.png` — Select Form dialog, Filter `FX_FormPropertyLab` (positive control, case-sensitive) → exactly 8 rows: `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02` (Caption `Form Property Lab Replay`), `FX_FormPropertyLab04` (Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03` (Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (Caption `Form Property Lab`).
- `07-select-form-fx-inventory-thirteen-rows.png` — Select Form dialog, Filter `FX_` → exactly 13 `FX_` rows: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — **no `FX_FormPropertyLab09`**.
- `08-webclient-after-dialog-close.png` — Web Client after Cancel: original state restored (no form tabs, no dialogs, Save disabled).

## Recipe availability for the next task

`recipes/forms/create-basic-form.md` (status **verified** — EXP-002 + EXP-002-R2, persistence verified across full page reload in both) is the creation path for `FX_FormPropertyLab09`: Web Client Designer split button (`mgtoolbarbutton-1126`) → Designer tab → **New** (`mgtoolbarbutton-1088`) → Form Wizard Selection (New Form / Category **Classic** / Wizard **BuildFromScratch**) → wizard page 1 Name `FX_FormPropertyLab09` (other defaults untouched) → Next → final step **uncheck "Save Template"** → Finish → "Process Completed Successfully" → OK (Finish persists immediately; Save disabled = clean). Session-specific control IDs from EXP-008-R2 T2 (wizard window `formwizard-5175`, expeditor `expeditor-5224`, Name combo `mgcombo-5231`, Save Template `ext-comp-5463`, success dialog `ext-comp-1009` with OK at `#button-1013`) may drift — resolve at runtime. Known pitfalls: synthetic DOM clicks do not drive Ext window buttons (use native Playwright clicks); the wizard is a single scrollable page in this build; "Save Template" is checked by default (authoritative state = `getValue()`; reliable toggle = `onBoxClick()`); the Name field is an editable combo (`forceSelection:false`); the Form Wizard Selection dialog is xtype `formwizard` (not an Ext `window`). **Designer lane note:** the Designer tab is already open in User scope with `FX_FormPropertyLab08` (active), `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, and `FX_FormPropertyLab04` loaded — a new form can be created in this existing session (per EXP-008/EXP-008-R2, no scope re-prompt appears when the session scope is already established); the five open forms must not be modified.

## Knowledge state (as of T1)

- `FX_FormPropertyLab09` absent (exact and case-insensitive) in the 644-record Select Form store (Name **and** Caption fields), in both UI filter modes, and in the near-miss scan: **observed** (T1, multiple independent methods + positive control).
- Select Form store count 644 and `FX_` count 13, reconciled against the EXP-008-R2 T7 final audit (644 / 13, identical set and indices): **observed** (re-confirmed).
- Designer editing scope is **User** for the signed-in user (status bar, read-only): **observed** (T1).
- The existing Web Designer client instance (tab 2) carries the EXP-008-R2 end state unchanged: 5 form tabs (Lab04/05/06/07/08), `FX_FormPropertyLab08` active and clean with Description `Form Property Description Close Only Replay`, scope User, clean toolbar: **observed** (T1).
- The existing authenticated Web Client session (tab 0) is live and usable (no login required; no form open; clean toolbar): **observed** (T1).
- The EXP-009 **Description-recovery-across-new-Designer-client-instance** procedure is **unverified** until this experiment (and a later independent replay) completes. The related EXP-008 close-only-reopen procedure is `replay_verified` (EXP-008 + EXP-008-R2) — referenced for context only; the new-Designer-client-instance variant is a distinct procedure and must not be assumed equivalent.
- Whether closing the entire Designer tab/window and launching a new one from the still-authenticated Web Client yields a clean new Designer client instance (no inherited form tabs) is **open** — to be tested in the later close/launch task; no server-session or cache semantics will be inferred from the result.

## Open questions / blockers

- None blocking for T1. All preflight items are satisfied; the session is authenticated, scope is User, the target is provably absent, and the inventory baseline is captured.
- `FX_FormPropertyLab04`/`05`/`06`/`07`/`08` remain open in the Designer tab from earlier experiments; later tasks must not modify them and should account for them in the Designer's Form-menu recent list.
- The exact supported UI path for launching a **newly rendered** Web Designer tab/window/client instance from the existing authenticated Web Client (and whether the Web Client Designer split button `mgtoolbarbutton-1126` is the already-established supported path for this purpose) will be re-observed in the launch task; it will not be assumed without re-observation.
- The `Unload IDO Metadata With Forms` preference was **not** inspected in this preflight (the T1 instruction prohibits opening User Preferences); if a later task requires the preference gate, it must be read read-only via the supported visible Web Client `Form > User Preferences` route at that time.

## T1 — Stopped here (per instruction, after the read-only preflight)

Did **not** create `FX_FormPropertyLab09` or any other Form; did **not** edit any Form property; did **not** invoke `Unload All Global Form Objects` or any other unload; did **not** open, change, or Save any User Preference; did **not** modify any existing FX_ Form or non-`FX_` artifact; did **not** log in/out, trigger SLO, restart the browser, or establish a new authentication session; did **not** close or launch any Designer tab/window; did **not** switch scope. **Next task (T2):** using `recipes/forms/create-basic-form.md` exactly as the verified procedure, create exactly one new classic BuildFromScratch Form `FX_FormPropertyLab09` in User scope (Save Template unchecked); record its exact scoped identity and the full pre-Description baseline (Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, Is Master); prove exactly one target exists (store 644→645, `FX_` 13→14). Do NOT edit Description, do NOT change Caption or any other property, do NOT change User Preferences, do NOT close the target, do NOT invoke any unload.

## T2 — Creation of `FX_FormPropertyLab09` + untouched baseline (2026-10-02)

Coordinator instruction (T2): create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab09` using `recipes/forms/create-basic-form.md` (Save Template unchecked), after re-checking that editing scope is User and the target is still absent (stop without mutation if either guard fails); verify 644→645 total, 13→14 `FX_`, exactly one target; prove the exact scoped version (Name + ScopeType + ScopeName); record the untouched pre-Description baseline (Description must still be empty); prove the Designer is clean after the creation workflow and that no earlier `FX_` Form was edited. Do not edit Description, do not Save for the Description change, do not close the target, do not close/relaunch the Designer, do not invoke any unload, do not open/change/save User Preferences.

### T2.1 — Guards re-verified first (no mutation)

- Browser tabs at T2 start (fresh conversation; state inspected before any action): Tab 0 = Web Client (authenticated; no form open; Save disabled; no visible windows); Tab 1 = the same stray dead bare-portal-root tab as T1 (unchanged); Tab 2 (current) = Designer tab with `?MGForm=FX_FormPropertyLab08` (left open/clean by EXP-008-R2 T7).
- **Guard 1 — scope (PASS):** Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (read-only); toolbar clean (Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` disabled; New `mgtoolbarbutton-1088` enabled); no visible windows; five form tabs present and untouched: `Form Property Lab Coupled Unload Replay` (Lab04), `FX_FormPropertyLab05`, `FX_FormPropertyLab06`, `FX_FormPropertyLab07`, `FX_FormPropertyLab08` (active).
- **Guard 2 — target absence (PASS):** Web Client Select Form dialog opened (empty filter, as left by T1) → full store **644 records**; **0 exact and 0 case-insensitive** matches for `FX_FormPropertyLab09` in Name and Caption; 0 near-miss; the same 13 `FX_` forms as T1 (indices 279–287, 315–318). Target still absent immediately before the mutation. (evidence `09`.) Dialog closed via Cancel; Web Client verified clean.

### T2.2 — Creation method (per `recipes/forms/create-basic-form.md`)

1. Switched to the Designer tab (tab 2) — already open in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`), clean toolbar, `FX_FormPropertyLab08` active. No new Designer session was needed; **no "Identify Your Editing Scope" dialog appeared** (session scope already established for the signed-in user — same as EXP-008/EXP-008-R2 T2).
2. Designer toolbar **New** (`mgtoolbarbutton-1088`) — native Playwright click → **"Form Wizard Selection"** dialog (window `formwizard-5952` — xtype `formwizard`, not an Ext `window`; numeric ID drifted from EXP-008-R2 T2's `formwizard-5175`, as expected). (evidence `10`.)
3. Radio **New Form** already checked (default; `mgradio-5961` value `true`, `mgradio-5962` value `false`). Category combo (`mginfoconexpandable-5970`, store field `CategoryName`, 7 categories) → **Classic** selected via `combo.select(record)`; Wizard combo (`mginfoconexpandable-5975`, store field `WizardName`) then loaded the 7 Classic wizards (BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile) → **BuildFromScratch** selected via `combo.select(record)`. (evidence `11`.)
4. OK (`mgformbutton-5978`, native click) → **"Form Wizard - Build From Scratch"** (expeditor `expeditor-6001`). Page-1 values verified: Name (editable combo `mgcombo-6008`) set to **`FX_FormPropertyLab09`** via `setValue`; all other defaults left untouched — Form Type `BuildFromScratch` (`mgcombo-6022`), Form Layout `GridLeft` (`mgcombo-6027`), Device Type `Default` (`mgcombo-6032`), Data Source empty (`mgcombo-6037`). (evidence `12`.)
5. **Next** (`mgformbutton-6244`, native click) → Next became **disabled**, **Finish** (`mgformbutton-6245`) became **enabled** (single scrollable page, as in EXP-008/EXP-008-R2 T2).
6. **Save Template** checkbox (`ext-comp-6240`) was **checked by default** (`getValue()=true`); toggled **off** via its own handler `onBoxClick()` → `getValue()=false`. (evidence `13`.)
7. **Finish** (`mgformbutton-6245`, native click) → **"Process Completed Successfully"** dialog (`ext-comp-1009`, body text `Process Completed Successfully`) → **OK** (native Playwright click on the dialog's visible OK button element). (evidence `14`.)
8. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab09`; form tab **`FX_FormPropertyLab09`** appeared (6th tab) and is selected; the `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, and `FX_FormPropertyLab04` (`Form Property Lab Coupled Unload Replay`) tabs **remain present and untouched**; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `15`.)

### T2.3 — Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store:
- **Total records = 645** (644 + 1 — exactly +1; **no template artifact** created, consistent with Save Template being unchecked).
- **Exactly 1 exact match** for `FX_FormPropertyLab09` (store index 282, record `{mgdata:"FX_FormPropertyLab09", text:"FX_FormPropertyLab09", id:"extModel214-3871"}`); case-insensitive matches = 1 (the same record); Caption-field exact/case-insensitive matches = 1/1 (the same record, Caption empty → Name fallback). **Distinct matching records = 1.**
- `FX_`-prefixed forms now number **14**: `FX_VariableLab01`(279), `FX_TestBlank02`(280), `FX_TestBlank01`(281), **`FX_FormPropertyLab09`(282)**, `FX_FormPropertyLab08`(283), `FX_FormPropertyLab07`(284), `FX_FormPropertyLab06`(285), `FX_FormPropertyLab05`(286), `FX_ComponentLab02`(287), `FX_ComponentLab01`(288), `FX_FormPropertyLab02`(316, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04`(317, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03`(318, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01`(319, Caption `Form Property Lab`). The pre-existing 13 shifted only in list order/indices; no other artifact added or removed.
- UI confirmation: filtered the dialog to `FX_FormPropertyLab09` → **exactly 1 row** (Caption column shows the Name fallback because Caption is empty); filtered `FX_` → **exactly 14 rows**. (evidence `17`, `18`.)
- Dialog closed via Cancel (native click); filter cleared first (645 records, Case Sensitive off, Starts With off); Web Client verified clean (no windows, Save disabled).

### T2.4 — Exact User-scope identity + full pre-Description baseline (recorded BEFORE any property change)

Read read-only from the loaded Designer property grid store `formpropertygrid-1135` (the grid cell visually truncates Name/Version but the store holds the full values):

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab09` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |
| **ScopeType** | `User` | — (status bar) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | — (status bar) |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `15`, `16`; the live status-bar value is masked by the secrets layer in tool output; the ScopeName is the signed-in user per `environments/current-environment.md`); the Designer session was already in User scope at T2 start (no scope dialog was re-prompted because the session scope was established earlier for the signed-in user).

**Key baseline fact for the persistence check:** the freshly created form's **Description is empty** (recorded from the store, not assumed) — the later change to the literal `Form Property Description New Designer Client` will be an unambiguous empty→literal transition. (Caption is also empty and will remain an unchanged comparison property.)

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### T2.5 — Post-creation cleanliness + no-earlier-FX_-edit proof

- **Designer clean after the creation workflow:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; no dirty-state indicator; URL `?MGForm=FX_FormPropertyLab09`; active form tab `FX_FormPropertyLab09`. (evidence `15`, `16`.)
- **No earlier `FX_` Form was edited:** all five pre-existing form tabs (`FX_FormPropertyLab04` caption / `FX_FormPropertyLab05` / `FX_FormPropertyLab06` / `FX_FormPropertyLab07` / `FX_FormPropertyLab08`) remain present and untouched; the toolbar (which reflects the active form and would be enabled by any unsaved edit) is clean; the post-creation inventory shows all 13 pre-existing `FX_` forms still present with their same Captions (no rename/delete); the only delta in the entire 645-record store is the single new `FX_FormPropertyLab09` record.

### T2.6 — T2 evidence (under `evidence/EXP-009/`)

- `09-t2-pre-mutation-absence-recheck.png` — Select Form dialog, full list (644 records, filter empty) at the pre-mutation re-check.
- `10-t2-wizard-selection-default.png` — Form Wizard Selection dialog (New Form radio checked; Category/Wizard empty).
- `11-t2-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch**.
- `12-t2-wizard-name-entered.png` — Build From Scratch wizard: Name `FX_FormPropertyLab09`, other defaults (BuildFromScratch / GridLeft / Default / empty).
- `13-t2-wizard-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked**.
- `14-t2-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `15-t2-form-created-loaded-clean.png` — New form `FX_FormPropertyLab09` loaded in the Designer (`?MGForm=FX_FormPropertyLab09`), form tab selected (6th of 6), Lab04/05/06/07/08 tabs still present, toolbar clean.
- `16-t2-baseline-properties-design-group.png` — Designer Properties, Design group: Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- `17-t2-select-form-lab09-exists-one.png` — Select Form dialog filtered to `FX_FormPropertyLab09` → exactly 1 row (store total 645).
- `18-t2-select-form-fx-inventory-fourteen-rows.png` — Select Form dialog, Filter `FX_` → exactly 14 `FX_` rows including `FX_FormPropertyLab09`.

### T2.7 — T2 observations / corrections

- **The Form Wizard Selection dialog is xtype `formwizard`, not an Ext `window`** (re-confirmed): locate it by `ComponentQuery.query('formwizard')` or by title.
- **Wizard combo stores:** the Category/Wizard `mginfoconexpandable` combos expose their records via `store.data.items` with `r.data.CategoryName` / `r.data.WizardName` (the store's `fields` array is null in this build — read `r.data` directly); `combo.select(record)` works for both (re-confirmed).
- **Wizard field IDs this session:** Name `mgcombo-6008`, Form Type `mgcombo-6022`, Form Layout `mgcombo-6027`, Device Type `mgcombo-6032`, Data Source `mgcombo-6037`; navigation buttons Back/Next/Finish/Cancel = `mgformbutton-6243/6244/6245/6246`; Save Template checkbox `ext-comp-6240`; success dialog `ext-comp-1009`. All numeric IDs drifted from the EXP-008-R2 session, as expected.
- **The Designer URL drops `MGForm=` while the wizard is open** and restores `?MGForm=<new form>` after Finish+OK; the previously loaded form tabs (Lab04/05/06/07/08) are not affected by the wizard flow (re-confirmed).
- **Select Form client-side record ids are session-local** (e.g., `FX_FormPropertyLab09` = `extModel214-3871` this session) — Name + scope is the persistent identity (re-confirmed).
- **Synthetic `setValue` on the wizard Name combo worked** (editable combo, `forceSelection:false`); `combo.select(record)` worked for Category/Wizard (re-confirmed).
- **Save Template is checked by default**; reliable toggle = `onBoxClick()` (re-confirmed).
- **The property grid `formpropertygrid-1135`** (same component id as the EXP-008/EXP-008-R2 sessions — the Designer page was not reloaded) reflects the newly active form tab; its root nodes are a flat mix of group nodes and their expanded Design leaf records (12 roots: 4 groups + 8 Design leaves); match groups on `propId` (group `disp` values carry a leading space).
- No User Preference was inspected or changed; no unload was invoked; no form other than the new `FX_FormPropertyLab09` was created, modified, or deleted; `FX_FormPropertyLab01…08` and all non-`FX_` artifacts untouched; editing scope stayed **User** throughout.

### T2.8 — T2 knowledge-state updates

- `FX_FormPropertyLab09` **exists, exactly one**, User scope, ScopeName `anton.ramos@3mworks.com.ph`, created via the verified recipe with Save Template unchecked; store 644→645, `FX_` 13→14; baseline Description **empty**, Caption **empty**: **observed** (T2).
- Full pre-Description baseline (Name/Description/Caption/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName) as tabled in T2.4: **observed** (T2).
- The EXP-009 **Description-recovery-across-new-Designer-client-instance** procedure remains **unverified** (creation + baseline only so far).

### T2.9 — Stopped here (per instruction, after creation + baseline)

Did **not** change the Description or any other Form property; did **not** touch `FX_FormPropertyLab04`/`05`/`06`/`07`/`08` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command; did **not** close the target; did **not** close or relaunch the Designer. The target `FX_FormPropertyLab09` is **left open and clean** for the next task. **Next task (T3):** change **only** the Form-level Description to `Form Property Description New Designer Client`, ordinary Designer Save, and prove the Designer returns to a clean state with the Description retained.

## T3 — Description edit + ordinary Save (2026-10-02)

Coordinator instruction (T3): on the already-open `FX_FormPropertyLab09`, first re-read and verify the guard state (Name, ScopeType, ScopeName, Description empty, Caption empty, Version/Device Type/Form Type/Is Master equal to the T2 baseline, Designer clean); if any guard differs, stop without mutation. Then edit **only** the Form-level Description to exactly `Form Property Description New Designer Client` using the previously supported property-grid interaction, commit, and perform **exactly one** ordinary Designer Save (no Regenerate Form, no second Save). After Save, prove the Designer is demonstrably clean and re-read all comparison properties (Description must equal the exact literal; every other property must equal the T2 baseline). Do not close the target, do not close/relaunch the Designer, do not invoke any unload, do not open/change/save User Preferences, do not edit any other property or earlier FX_ artifact.

### T3.1 — Guard re-read (read-only; PASS — identical to T2 baseline)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab09` — **unchanged since T2** (no reload, no scope re-prompt).
- **Loaded target** exactly `FX_FormPropertyLab09` (URL + property store `Name` + active form tab — three agreeing surfaces).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar; the live value is masked by the secrets layer in tool output, the ScopeName is the signed-in user per `environments/current-environment.md`).
- **Baseline (all equal to T2.4):** Name `FX_FormPropertyLab09`, Description **empty**, Caption **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Cleanliness:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; all 6 form tabs present (Lab04/05/06/07/08 untouched + target active).
- **Guard PASS** — no mutation performed until the edit. (evidence `19`.)

### T3.2 — Description edit (supported Designer property editor)

1. Located the Description value cell in the property grid `formpropertygrid-1135`: the cell with `data-mgcompname="Design.Description"` at viewport (870,195) 139×23 — **same cell position as EXP-008-R2 T4**.
2. **Double-click** the value cell (native Playwright `mouse.dblclick` at cell center (939.5,206.5)) → the grid's inline editor opened and was **focused** (`textfield-1139-inputEl`, an `x-form-text` at the cell position — same component id as EXP-008-R2 T4).
3. Typed exactly `Form Property Description New Designer Client`, then **Enter** to commit.
4. Post-commit store read: `Description = "Form Property Description New Designer Client"`; **all other Design properties unchanged** (Name, Caption empty, Version, Device Type, Form Type, Is Master identical to baseline). Toolbar Save/Regenerate **enabled** (dirty state) — expected after an edit. (evidence `20`.)

### T3.3 — Ordinary Designer Save (exactly one)

- Clicked the toolbar **Save** button (`mgtoolbarbutton-1085`, native Playwright click) — the ordinary Designer Save; **no Regenerate Form**, no menu, no wizard, no unload, **no second Save**.
- Result: **no dialog or window** appeared; toolbar Save and Regenerate returned to **disabled** — the Designer is **clean** again. No error, no confirmation prompt. (evidence `21`.)

### T3.4 — Post-Save verification (all comparison properties re-read)

| Property | T2 baseline | Post-Save (T3) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab09` | `FX_FormPropertyLab09` | ✓ |
| **Description** | *(empty)* | **`Form Property Description New Designer Client`** | ✓ (changed as intended, exact literal — verified character-for-character from the store) |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Description equals exactly `Form Property Description New Designer Client`** (verified character-for-character from the property store, not assumed).
- **All other comparison properties remain equal to the T2 baseline.**
- **Designer is clean:** Save/Regenerate disabled, no visible windows, URL still `?MGForm=FX_FormPropertyLab09`, all 6 form tabs present (Lab04/05/06/07/08 untouched).
- The target is **left open and clean** (not closed, not reopened).

### T3.5 — T3 evidence (under `evidence/EXP-009/`)

- `19-t3-pre-mutation-guard-pass.png` — Designer before the edit: clean, `?MGForm=FX_FormPropertyLab09`, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Properties Design group with Description empty.
- `20-t3-description-edited-dirty.png` — After the Description edit and Enter: Description cell shows `Form Property Description New Designer Client`; toolbar Save/Regenerate enabled (dirty).
- `21-t3-after-save-clean-description-persisted.png` — After the ordinary Save: toolbar clean (Save/Regenerate disabled), Description cell still shows `Form Property Description New Designer Client`, no dialogs.

### T3.6 — T3 observations / corrections

- **The supported property editor for a Form-level property is the inline grid editor** in `formpropertygrid`: double-click the value cell (`data-mgcompname="Design.Description"`) → an `x-form-text` editor (`textfield-1139-inputEl` this session) opens focused in the cell → type → **Enter** commits to the store. No separate dialog or panel is required for a single-line property like Description (re-confirmed from EXP-008-R2 T4).
- **Editing a property immediately enables the toolbar Save/Regenerate** (dirty indicator); a successful ordinary Save returns them to disabled (clean) with **no confirmation dialog** in this environment (re-confirmed).
- **The ordinary Save produced no visible confirmation and no error**; cleanliness is proven by the toolbar state (Save/Regenerate disabled) plus the store re-read, not by the absence of an error alone.
- **Only the Description changed**; every other comparison property is byte-identical to the T2 baseline after the Save.
- No User Preference was inspected or changed; no unload was invoked; no other Form property was edited; `FX_FormPropertyLab04/05/06/07/08` and all other FX_/non-FX_ artifacts untouched; editing scope stayed **User** throughout; the target was **not** closed or reopened.

### T3.7 — T3 knowledge-state updates

- `FX_FormPropertyLab09` Description is now exactly `Form Property Description New Designer Client`, persisted by exactly one ordinary Designer Save, with the Designer demonstrably clean and all other comparison properties equal to the T2 baseline: **observed** (T3).
- The EXP-009 **Description-recovery-across-new-Designer-client-instance** procedure remains **unverified** (creation + baseline + Description edit/Save only so far; the close / Designer-client-instance-boundary / reopen / recovery-verification steps are still pending).

### T3.8 — Stopped here (per instruction, after the Description edit + ordinary Save)

Did **not** close the target; did **not** close or relaunch the Designer; did **not** invoke `Unload All Global Form Objects` or any other unload; did **not** open, change, or Save any User Preference; did **not** edit any property other than the Description; did **not** touch `FX_FormPropertyLab04`/`05`/`06`/`07`/`08` (still open, clean); did **not** use Regenerate Form; performed **exactly one** ordinary Save. The target `FX_FormPropertyLab09` is **left open and clean** for the next task. **Next task (T4):** close `FX_FormPropertyLab09` using its ordinary Web Designer Form-tab close control (no unload), then close the entire existing Web Designer tab/window/client instance, launch a newly rendered Web Designer instance from the still-authenticated Web Client via the supported UI path, verify the new instance does not already contain the target as an inherited/open tab, reopen the exact scoped version, and verify Description + all baseline properties recover unchanged.

## T4 — Close target Form + close entire existing Designer tab (2026-10-02)

Coordinator instruction (T4): re-read `FX_FormPropertyLab09` and verify Name, ScopeType, ScopeName, Description (exact literal), all other comparison properties equal to the T2 baseline, and Designer clean; if any guard fails, stop. Capture pre-close evidence including the browser tab/page inventory identifying the current Designer client instance. Close `FX_FormPropertyLab09` using **only** its ordinary Designer Form-tab close control; record whether any unsaved-change prompt appears (if none, treat only as corroboration of cleanliness). Verify the target Form tab is gone and no other `FX_` Form changed. Maintain an explicit action audit that no explicit global-object clear command was invoked before this boundary. After the target is confirmed closed, close the **entire existing Web Designer browser tab/window/client instance** using the normal browser/tab close mechanism. Do **not** launch a replacement Designer yet. Prove with browser-state evidence that the old Designer tab/window is gone while the original authenticated Web Client remains open and authenticated. Do not log out, trigger SLO, restart the browser, establish a new authenticated session, open/change/save User Preferences, invoke any global-object or metadata-clearing command, navigate directly to the target Form, or modify any Form or project artifact except the EXP-009 record/evidence. Leave the authenticated Web Client open for the next task.

### T4.1 — Guard re-read (read-only; PASS — identical to T3 post-Save state)

- **Browser inventory (pre-close):** 3 tabs — Tab 0 Web Client (authenticated portal, `Mongoose`), Tab 1 stray dead bare-portal-root tab, Tab 2 (current) **Designer** at `WSWebClient/designer/Default.aspx?...&MGForm=FX_FormPropertyLab09`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. This identifies the current Designer client instance (tab index 2, that URL + title).
- **Loaded target** exactly `FX_FormPropertyLab09` (URL + property store `Name` + active form tab — three agreeing surfaces).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar; live value masked by the secrets layer, ScopeName = signed-in user per `environments/current-environment.md`).
- **Baseline (all equal to T2/T3):** Name `FX_FormPropertyLab09`, Description **`Form Property Description New Designer Client`** (exact literal), Caption **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Cleanliness:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; 6 form tabs present (Lab04/05/06/07/08 + target active).
- **Guard PASS** — no mutation performed until the close. (evidence `22`.)

### T4.2 — Action audit (no global-object clear before this boundary)

- Since T2 creation, the **only** Designer interactions performed were: property-grid reads, the T3 Description cell double-click + type + Enter, exactly one ordinary toolbar Save, and (T4) the Form-tab close below.
- **`Unload All Global Form Objects` was NOT invoked** at any point (no Form > Definition menu, no unload command, no metadata-clear command). No User Preference was opened, changed, or Saved. No `Unload IDO Metadata With Forms` was touched.
- This boundary (Form close + Designer tab close) is therefore entered **without** any explicit global-object/metadata clear command having been issued.

### T4.3 — Close `FX_FormPropertyLab09` (ordinary Form-tab close control only)

- Located the target Form tab's close control: the `.x-tab-close-btn` inside the active `FX_FormPropertyLab09` tab, at viewport (701, 83.5).
- Native Playwright click on that close button (the ordinary Designer Form-tab close control; **no** unload, **no** menu, **no** confirmation-driven path).
- **No unsaved-change prompt appeared** — no dialog asked to save/discard. Treated **only as corroboration** of the already-proven cleanliness (not as the primary proof).
- Result: the `FX_FormPropertyLab09` Form tab is **gone**; the remaining 5 Form tabs are unchanged (`Form Property Lab Coupled Unload Replay`, `FX_FormPropertyLab05`, `FX_FormPropertyLab06`, `FX_FormPropertyLab07`, `FX_FormPropertyLab08`); the active tab became `FX_FormPropertyLab08`; Designer toolbar returned to clean (Save/Regenerate disabled); URL tail became `?MGForm=FX_FormPropertyLab08`. (evidence `23`.)
- **No other `FX_` Form changed** — all five remaining tabs present and untouched.

### T4.4 — Close the entire existing Web Designer tab (normal browser tab close)

- Closed browser **tab index 2** (the Designer) via the normal browser/tab close mechanism (Playwright tab close). No unload, no logout, no SLO, no browser restart, no new authenticated session.
- **After closure, browser inventory:** 2 tabs — Tab 0 Web Client (authenticated portal, `Mongoose`) and Tab 1 stray dead bare-portal-root tab. **The Designer tab is gone.**
- **The original authenticated Web Client (Tab 0) remains open and authenticated:** URL is the portal (not a login page), title `Mongoose`, **no login/password form present**, and the authenticated portal shell is rendered (Home / System Administrator / Mongoose / User Settings / Tabs menu / DEM Health / Notifications). (evidence `24`.)
- A replacement Designer was **not** launched (per instruction).

### T4.5 — T4 evidence (under `evidence/EXP-009/`)

- `22-t4-pre-close-guard-pass.png` — Designer before any close: clean, `?MGForm=FX_FormPropertyLab09`, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Properties Design group with Description = `Form Property Description New Designer Client`.
- `23-t4-target-form-tab-closed.png` — After the Form-tab close: `FX_FormPropertyLab09` tab gone, 5 remaining FX_ tabs unchanged, active tab `FX_FormPropertyLab08`, toolbar clean, no unsaved-change prompt.
- `24-t4-designer-tab-closed-webclient-still-authenticated.png` — After the Designer tab close: only the Web Client (+ stray dead tab) remain; Web Client shows the authenticated portal shell (no login form).

### T4.6 — T4 observations / corrections

- **Closing a clean Form tab produced no unsaved-change prompt**; the tab simply disappeared and focus moved to the next tab (`FX_FormPropertyLab08`). Consistent with the toolbar already being clean (Save/Regenerate disabled) before the close.
- **Closing the Designer browser tab is a normal browser tab close**; it did not log out, did not SLO, did not restart the browser, and did not affect the still-open authenticated Web Client (Tab 0) — which remained on the portal with no login form.
- **The Designer client instance is identified by its browser tab** (index 2, `WSWebClient/designer/Default.aspx?...&MGForm=...`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`); after the close, that tab no longer exists in the browser inventory.
- **No global-object/metadata clear command was invoked** before or during this boundary (action audit T4.2).

### T4.7 — T4 knowledge-state updates

- `FX_FormPropertyLab09` **closed** via its ordinary Form-tab close control with **no unsaved-change prompt**; all other `FX_` Forms unchanged: **observed** (T4).
- The **entire existing Web Designer tab (client instance) is closed** via a normal browser tab close, while the **original authenticated Web Client remains open and authenticated** (no logout/SLO/browser restart/new session): **observed** (T4).
- No explicit global-object/metadata clear command was invoked before this boundary (action audit): **observed** (T4).
- The EXP-009 **Description-recovery-across-new-Designer-client-instance** procedure remains **unverified** (creation + baseline + Description edit/Save + target close + Designer-tab close done; the launch-new-Designer-instance / verify-no-inherited-tab / reopen / recovery-verification steps are still pending).

### T4.8 — Stopped here (per instruction, after closing the target Form and the entire existing Designer tab)

Did **not** launch a replacement Designer; did **not** log out, trigger SLO, restart the browser, or establish a new authenticated session; did **not** open, change, or Save any User Preference; did **not** invoke `Unload All Global Form Objects` or any global-object/metadata-clearing command; did **not** navigate directly to the target Form; did **not** modify any Form or project artifact except the EXP-009 record/evidence. The **authenticated Web Client (Tab 0) is left open** for the next task. **Next task (T5):** from the still-authenticated Web Client, launch a **newly rendered** Web Designer tab/window/client instance through the supported UI path; verify the new instance does **not** already contain `FX_FormPropertyLab09` as an inherited/open Form tab; reopen the exact same User-scoped Form version (verify Name + ScopeType + ScopeName); and verify Description + all recorded baseline properties recover unchanged across the new Designer client-instance boundary.

## T4R — Read-only reconciliation of T4 (AC-5 / AC-6) (2026-10-02)

Coordinator instruction (T4R): perform T4R **only** as a read-only reconciliation; make **no** Mongoose mutations. Inspect the current browser/page inventory, the EXP-009 record's T4 section, and evidence files `22`–`24`. Confirm: (a) `FX_FormPropertyLab09` was closed via its ordinary Form-tab close control after the clean guard state; (b) whether any unsaved-change prompt appeared; (c) whether the record/action audit establishes that no explicit global-object clear command or User Preference Save occurred before the boundary; (d) whether the entire prior Web Designer tab/window/client instance was then closed; (e) whether the original authenticated Web Client remained open and authenticated afterward. Confirm the old Designer tab/window is currently absent and do **not** launch a replacement Designer yet. If the record/evidence is insufficient for any required fact, state exactly which fact is unproven rather than inferring it. Update only the EXP-009 record if a reconciliation note is needed. Report explicit AC-5 and AC-6 evidence mappings.

### T4R.1 — Live browser inventory (read-only, at reconciliation time)

- **2 tabs:** Tab 0 (current) Web Client (authenticated portal, `Mongoose`); Tab 1 stray dead bare-portal-root tab. **No Designer tab present.**
- **Web Client (Tab 0) confirmed open and authenticated:** portal shell rendered (Home / System Administrator / Mongoose / User Settings / Tabs menu / DEM Health / Notifications), **no login/password form**, not a login URL.
- **No replacement Designer was launched** (per instruction).

### T4R.2 — Fact-by-fact reconciliation (record + evidence `22`–`24` + live)

| # | Required fact | Verdict | Basis |
|---|---|---|---|
| 1 | `FX_FormPropertyLab09` closed via ordinary Form-tab close control **after** the clean guard state | **CONFIRMED** | T4.1 (guard PASS, clean) + T4.3 (`.x-tab-close-btn` at (701,83.5)); evidence `22` (6 tabs, clean, Description set) → `23` (5 tabs, target gone) |
| 2 | Any unsaved-change prompt appeared? | **NONE** (recorded only as corroboration of cleanliness, not persistence proof) | T4.3; evidence `23` (no dialog) |
| 3 | No explicit global-object clear command or User Preference Save before the boundary | **CONFIRMED** (record action audit) | T4.2 (action audit: `Unload All Global Form Objects` not invoked; no User Preference opened/changed/Saved; `Unload IDO Metadata With Forms` untouched) |
| 4 | Entire prior Web Designer tab/window/client instance closed | **CONFIRMED** | T4.4 (closed tab index 2 via normal browser tab close); live inventory (no Designer tab) |
| 5 | Original authenticated Web Client remained open and authenticated | **CONFIRMED** | T4.4; evidence `24`; live check (portal shell, no login form) |
| 6 | Old Designer tab/window currently absent | **CONFIRMED** | Live browser inventory (only Web Client + stray dead tab) |

**No required fact is unproven.** All six facts are established by the record, evidence `22`–`24`, and the live read-only browser inspection.

### T4R.3 — AC-5 evidence mapping

- **AC-5** — "FX_FormPropertyLab09 was closed through its ordinary Form-tab close control after the clean Save state; absence of an unsaved-change prompt recorded only as corroboration of cleanliness; the record establishes `Form > Definition > Unload All Global Form Objects` was not invoked before the client-instance boundary." → **PASS**
  - Clean Save state before close: T4.1 (evidence `22`).
  - Ordinary Form-tab close control: T4.3 (evidence `23`).
  - No unsaved-change prompt (corroboration only): T4.3 (evidence `23`).
  - No `Unload All Global Form Objects` before the boundary: T4.2 action audit.

### T4R.4 — AC-6 evidence mapping

- **AC-6** — "Browser evidence proves the existing Web Designer tab/window/client instance was actually closed after the target was already clean and closed, while the authenticated Web Client remained open; no logout, SLO, browser restart, User Preference mutation, or claim of server-side session termination." → **PASS**
  - Designer tab/window/client instance closed after target clean+closed: T4.4 (evidence `24`).
  - Authenticated Web Client remained open: T4.4 (evidence `24`) + live check (portal shell, no login form).
  - No logout/SLO/browser restart/User Preference mutation/server-session claim: T4.4 + T4.8 (explicit negative statements; no such claim made).

### T4R.5 — T4R knowledge-state updates

- **AC-5** (ordinary Form-tab close after clean Save state; no-prompt = corroboration only; no `Unload All Global Form Objects` before the boundary): **observed** (reconciled read-only at T4R; original T4).
- **AC-6** (Designer tab/window/client instance closed; authenticated Web Client remained open; no logout/SLO/restart/preference mutation/server-session claim): **observed** (reconciled read-only at T4R; original T4).
- Old Designer tab/window currently **absent**; authenticated Web Client **open and authenticated** (live at T4R): **observed**.
- The EXP-009 **Description-recovery-across-new-Designer-client-instance** procedure remains **unverified** (AC-7/AC-8/AC-9 pending: launch new Designer instance / verify no inherited tab / reopen / recovery verification).

### T4R.6 — Stopped here (read-only reconciliation complete)

**No Mongoose mutations were made.** No replacement Designer was launched; no logout/SLO/browser restart/new session; no User Preference opened/changed/Saved; no global-object/metadata-clearing command invoked; no direct navigation to the target Form; no Form modified. The **authenticated Web Client (Tab 0) is left open** for the next task. **Next task (T5):** from the still-authenticated Web Client, launch a **newly rendered** Web Designer tab/window/client instance through the supported UI path (**AC-7**); verify the new instance does **not** already contain `FX_FormPropertyLab09` as an inherited/open Form tab; reopen the exact same User-scoped Form version (**AC-8**); and verify Description + all recorded baseline properties recover unchanged (**AC-9**).

## T5 — Launch a newly rendered Web Designer from the authenticated Web Client (2026-10-02)

Coordinator instruction (T5): from the currently open authenticated Web Client, launch a newly rendered Web Designer tab/window/client instance using the already-established supported Web Client UI route. Before launch, capture/read the browser page inventory showing the old Designer remains absent and the authenticated Web Client is present. Re-observe the supported Designer launch control in the Web Client UI rather than assuming its current numeric component ID, then use that UI control to launch Designer. Do not use any direct target-Form URL or cold navigation. After launch, capture browser-state evidence that a new Designer tab/window/client instance now exists in addition to the still-open Web Client, and distinguish it from the prior closed Designer using before/after page inventory and the fact that the prior Designer was absent immediately before launch. In the newly launched Designer, inspect the visible open Form tabs and verify `FX_FormPropertyLab09` is NOT already present as an inherited/open Form tab before any deliberate reopen. Record the new Designer's initial clean state and current editing scope if visible/readable without mutation. Do not reopen `FX_FormPropertyLab09` yet, do not edit or save any Form, do not open/change/save User Preferences, do not invoke any global-object or metadata-clearing command, do not log out or establish a new authentication session, and do not modify any project artifact except `evidence/EXP-009/` and this record. Leave the newly launched Designer open in its initial state for the next task.

### T5.1 — Pre-launch browser inventory (read-only; old Designer absent, Web Client present)

- **2 tabs:** Tab 0 (current) Web Client (authenticated portal, `Mongoose`); Tab 1 stray dead bare-portal-root tab. **No Designer tab present** (the prior Designer tab was closed at T4 and remains absent). (evidence `25`.)
- Web Client confirmed open and authenticated (portal shell, no login form).

### T5.2 — Re-observed the supported Designer launch control (not assumed)

- In the Web Client frame (`WSWebClient/WSWebForm.aspx`), re-observed the toolbar. Two adjacent "Designer" controls exist:
  - `mgtoolbarbutton-1125` (icon "Designer", no title) at frame (676,36) — the **main Designer button**, whose flow offers only Runtime Builder categories (ExtDatasource/FormBuilder/REST) per the recipe pitfall.
  - `mgtoolbarbutton-1126` (title "Designer") at frame (710,36) — the **Designer split button**, which per the verified recipe (`recipes/forms/create-basic-form.md` step 1) opens the Web Designer in a **new tab** at `WSWebClient/designer/default.aspx`.
- **First attempt (correction):** clicking `mgtoolbarbutton-1125` (the main button) triggered "Identify Your Editing Scope" (User) → a **"Runtime Builder Selection"** dialog (Category / Runtime Builder dropdowns) — the Runtime Builder flow, **not** the Web Designer. That dialog was **cancelled** (no selection made, no mutation). (evidence `26`, `27`, `28`.)
- **Correct control:** `mgtoolbarbutton-1126` (the Designer split button) is the supported launch control for the Web Designer tab.

### T5.3 — Launch the Web Designer (supported UI route; no cold navigation)

- Clicked `mgtoolbarbutton-1126` (Designer split button) in the Web Client frame (native Playwright click via frame locator). **No direct `?MGForm=` URL, no cold navigation.**
- A **new browser tab (index 2)** opened at `WSWebClient/designer/Default.aspx` with title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` and **no `MGForm` param** (no form loaded) — a fresh Designer client instance. (evidence `29`.)
- The "Identify Your Editing Scope" dialog appeared in the new Designer (Scope: **User**, User: `anton.ramos@3mworks.com.ph`). Per the verified recipe (step 1), **User scope was confirmed (OK)** — this is the normal launch flow, **not** a User Preference change and **not** a new authentication session (the user was already authenticated). (evidence `29` → `30`.)

### T5.4 — New Designer initial state (no inherited target tab; clean; User scope)

- **Browser inventory after launch (3 tabs):** Tab 0 Web Client (still open, authenticated); Tab 1 stray dead portal-root tab; **Tab 2 (current) = the NEW Web Designer** at `designer/Default.aspx` (no `MGForm`). The prior Designer tab (closed at T4) was **absent immediately before launch** and is **not** this tab — the new tab was created by the launch action. (evidence `29`, `30`.)
- **No open Form tabs:** the Designer's tab strip shows only its panel tabs (`Components`, `Collections`, `Form`, `Component`); **`FX_FormPropertyLab09` is NOT present as an inherited/open Form tab** (and no other `FX_` Form tab is present). (evidence `30`.)
- **Clean initial state:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) **disabled**; New (`mgtoolbarbutton-1088`) enabled; **no visible windows**; empty design surface; empty Properties panel. (evidence `30`.)
- **Editing scope:** status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` — **User** scope (the required scope). (evidence `30`.)

### T5.5 — T5 evidence (under `evidence/EXP-009/`)

- `25-t5-pre-launch-webclient-designer-absent.png` — Pre-launch: Web Client only (+ stray dead tab); no Designer tab.
- `26-t5-after-designer-click-state.png` — After clicking the main Designer button (`1125`): "Identify Your Editing Scope" dialog (User).
- `27-t5-after-scope-ok-designer-loading.png` — After scope OK on the main-button flow: "Runtime Builder Selection" dialog (the wrong flow — cancelled).
- `28-t5-after-rbs-cancel-toolbar.png` — After cancelling the RBS dialog: Web Client back to normal toolbar.
- `29-t5-new-designer-launched-scope-dialog.png` — After clicking the Designer split button (`1126`): NEW Designer tab opened; "Identify Your Editing Scope" dialog (Scope: User) in the new Designer.
- `30-t5-new-designer-clean-initial-state.png` — New Designer after scope confirmation: clean initial state, no form tabs, empty surface, User scope, toolbar clean.

### T5.6 — T5 observations / corrections

- **The Web Client has two adjacent "Designer" controls with different behaviors:** the main button (`mgtoolbarbutton-1125`) leads to the **Runtime Builder Selection** flow (categories ExtDatasource/FormBuilder/REST), while the **Designer split button (`mgtoolbarbutton-1126`)** opens the **Web Designer** in a new tab. The supported route for launching the Web Designer tab is the **split button `mgtoolbarbutton-1126`** (re-observed this session; matches the verified recipe). (evidence `26`–`30`.)
- **The newly launched Designer is a distinct, fresh client instance:** it opened as a new browser tab at `designer/Default.aspx` with **no `MGForm` param** and **no inherited Form tabs** — confirming it did not inherit the prior (closed) Designer's open forms. (evidence `29`, `30`.)
- **Confirming the editing scope (User) on launch is the normal flow** and is not a User Preference change or a new authentication session. (evidence `29` → `30`.)
- **No direct `?MGForm=` navigation or cold target-Form URL was used** to establish the new Designer instance.

### T5.7 — T5 knowledge-state updates

- A **newly rendered Web Designer tab/client instance** was launched from the still-authenticated Web Client via the supported Designer split button (`mgtoolbarbutton-1126`), distinct from the prior closed Designer (absent before launch), with the Web Client still open: **observed** (T5; AC-7 launch portion).
- The new Designer **does not contain `FX_FormPropertyLab09` as an inherited/open Form tab** (no form tabs at all; no `MGForm` param): **observed** (T5; AC-7 no-inherited-tab portion).
- New Designer **initial clean state** (no form open, toolbar clean, no windows) and **editing scope User**: **observed** (T5).
- The EXP-009 **Description-recovery-across-new-Designer-client-instance** procedure remains **unverified** (AC-7 launch + no-inherited-tab done; AC-8 reopen + AC-9 recovery verification still pending).

### T5.8 — Stopped here (per instruction, after launching the new Designer and recording its initial state)

Did **not** reopen `FX_FormPropertyLab09`; did **not** edit or Save any Form; did **not** open/change/Save any User Preference; did **not** invoke any global-object/metadata-clearing command; did **not** log out or establish a new authentication session; did **not** use any direct `?MGForm=`/cold target-Form navigation; did **not** modify any project artifact except `evidence/EXP-009/` and this record. The **newly launched Web Designer (Tab 2) is left open in its clean initial state** (no form open, User scope) for the next task. **Next task (T6):** in the newly launched Designer, reopen `FX_FormPropertyLab09` through the Designer Form menu or Select Form UI and verify the exact scoped version by Name + ScopeType + ScopeName (**AC-8**); then compare the recovered Description + all recorded baseline properties (**AC-9**).

## T6 — Reopen in the new Designer + recovery verification (AC-8 / AC-9) (2026-10-02)

Coordinator instruction (T6): in the newly launched Web Designer (T5), first verify the guard state (this is the T5 new Designer; no `FX_FormPropertyLab09` tab open; scope User; Designer clean; Web Client still open). Then deliberately reopen `FX_FormPropertyLab09` via the Designer Form menu or Select Form UI (no direct cold URL). After load, prove the exact scoped version (Name + ScopeType + ScopeName = T2 baseline) and re-read all comparison properties without editing (Description must equal exactly `Form Property Description New Designer Client`; Caption/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName must each equal the T2 baseline). Prove the Designer is clean after reopen. Update this record with explicit AC-8/AC-9 mappings and the limited classification (UI-level recovery across a newly launched Web Designer client instance within the same authenticated Web Client session only — NOT proof of a new server-side Designer session, database persistence, cache eviction, metadata unloading, or backend-session recreation). Do not edit/Save the Form, invoke any unload, touch User Preferences, log out/new session, or modify any earlier FX_ artifact/recipe/environment/AGENTS.md/other experiment. Leave `FX_FormPropertyLab09` open and clean for the final audit.

### T6.1 — Guard re-read (read-only; PASS)

- **Browser inventory:** 3 tabs — Tab 0 Web Client (authenticated portal, still open); Tab 1 stray dead portal-root tab; Tab 2 (current) **the T5 new Designer** at `designer/Default.aspx` with **no `MGForm` param** (fresh instance). (evidence `31`.)
- **No `FX_FormPropertyLab09` tab open** (form-tab list empty; only the Designer's panel tabs `Components`/`Collections`/`Form`/`Component`).
- **Scope** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar).
- **Clean:** toolbar Save (`mgtoolbarbutton-1085`) / Regenerate (`mgtoolbarbutton-1086`) disabled; New (`mgtoolbarbutton-1088`) enabled; **no visible windows**.
- **Guard PASS.**

### T6.2 — Reopen `FX_FormPropertyLab09` via the supported Designer Form menu (no cold URL)

- Opened the Designer **Form** menu (`button-1020`). The menu shows `Definition` (NOT opened — it contains the prohibited unload command), `Sign Out`, `Runtime Builder Selection`, and the **recent-forms list**, whose first entry is **`FX_FormPropertyLab09`** (`menuitem-1074`), followed by `FX_FormPropertyLab08`…`FX_FormPropertyLab02`, `Form Property Lab`. (evidence `32`.)
- Clicked the recent-forms entry **`FX_FormPropertyLab09`** (native Playwright click). **No direct `?MGForm=` cold navigation was used** — the form was reopened through the supported Form-menu recent-entry path (the same supported path as EXP-008-R2 T6).
- The Designer loaded the form: URL became `…&MGForm=FX_FormPropertyLab09`; the form tab **`FX_FormPropertyLab09`** appeared and is active. (evidence `33`.)

### T6.3 — Post-reopen verification (exact scoped version + all comparison properties, read-only)

| Property | T2 baseline | Recovered (T6, new Designer instance) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab09` | `FX_FormPropertyLab09` | ✓ |
| **Description** | *(changed in T3 to the literal)* | **`Form Property Description New Designer Client`** (exact literal, character-for-character from the property store) | ✓ **recovered** |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Exact scoped version proven:** Name = `FX_FormPropertyLab09`, ScopeType = `User`, ScopeName = `anton.ramos@3mworks.com.ph` (status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`).
- **Description recovered exactly** as `Form Property Description New Designer Client` after crossing the new-Designer-client-instance boundary.
- **Designer clean after reopen:** Save/Regenerate disabled, no visible windows, URL `?MGForm=FX_FormPropertyLab09`, single form tab `FX_FormPropertyLab09` active. (evidence `33`.)

### T6.4 — T6 evidence (under `evidence/EXP-009/`)

- `31-t6-pre-reopen-new-designer-clean.png` — New Designer before reopen: clean, no form tabs, no `MGForm` param, User scope.
- `32-t6-form-menu-recent-list-target-visible.png` — Designer Form menu open; recent-forms list with `FX_FormPropertyLab09` as the first entry (Definition submenu NOT opened).
- `33-t6-reopened-form-properties-recovered.png` — After reopen: `FX_FormPropertyLab09` tab active; Properties Design group (Name `FX_FormPropertyL…`, Description `Form Property Des…`, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`); status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean.

### T6.5 — AC-8 / AC-9 evidence mappings

- **AC-8** — "After deliberate reopen in the newly launched Designer client instance, evidence proves the loaded target is the same scoped version by Name=`FX_FormPropertyLab09`, ScopeType=`User`, and ScopeName equal to the AC-3 baseline." → **PASS**
  - Deliberate reopen in the newly launched (T5) Designer via the supported Form-menu recent-entry path (no cold URL): T6.2 (evidence `32` → `33`).
  - Name = `FX_FormPropertyLab09` (property store + form tab + URL): T6.3 (evidence `33`).
  - ScopeType = `User`, ScopeName = `anton.ramos@3mworks.com.ph` (= AC-3/T2 baseline): T6.3 status bar (evidence `33`).
- **AC-9** — "Post-reopen evidence proves Description equals exactly `Form Property Description New Designer Client`, every recorded comparison property equals the AC-3 baseline, and Designer is clean. The allowed classification is recovery across a newly launched Web Designer tab/window/client instance within the same authenticated Web Client session only." → **PASS**
  - Description = exactly `Form Property Description New Designer Client` (character-for-character from the store): T6.3 (evidence `33`).
  - Caption/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName each equal the AC-3/T2 baseline: T6.3 table (evidence `33`).
  - Designer clean after reopen (Save/Regenerate disabled, no windows): T6.3 (evidence `33`).
  - **Limited classification:** this establishes **UI-level recovery across a newly launched Web Designer tab/window/client instance within the same authenticated Web Client session only**. It is **NOT** proof of a new server-side Designer session, Forms-database persistence, cache eviction, IDO-metadata unloading, or backend-session recreation.

### T6.6 — T6 observations / corrections

- **The Form-menu recent-forms list is populated in the newly launched Designer** (it lists `FX_FormPropertyLab09` first, then Lab08…Lab02, `Form Property Lab`) even though the new instance inherited no open Form tabs — the recent list is a user-level recent list, not an inherited open-tab state. The supported reopen path (Form menu → recent entry) works in the new instance exactly as in EXP-008-R2 T6.
- **The Description and all baseline properties recovered unchanged** across the new-Designer-client-instance boundary (close of the old Designer tab at T4 → launch of a new Designer tab at T5 → reopen at T6), within the same authenticated Web Client session.
- **The `Definition` submenu (containing `Unload All Global Form Objects`) was NOT opened** at any point in T6; no unload command was invoked.
- No Form was edited or Saved; no User Preference was opened/changed/Saved; no logout/SLO/new session; no cold `?MGForm=` navigation; no earlier FX_ artifact, recipe, environment file, AGENTS.md, or other experiment was modified.

### T6.7 — T6 knowledge-state updates

- **AC-8** (deliberate reopen in the newly launched Designer via the supported Form-menu recent-entry path; exact scoped version Name + ScopeType + ScopeName = T2 baseline): **observed** (T6).
- **AC-9** (Description recovered exactly; all comparison properties equal the T2 baseline; Designer clean after reopen): **observed** (T6).
- **Limited classification (allowed):** UI-level recovery of the User-scope `FX_FormPropertyLab09` Description + baseline properties across a **newly launched Web Designer tab/window/client instance within the same authenticated Web Client session**. No server-session, database-persistence, cache-eviction, IDO-metadata-unloading, or backend-session-recreation claim is made or supported by this evidence.
- The EXP-009 **Description-recovery-across-new-Designer-client-instance** procedure is now **observed** (single controlled execution; AC-1…AC-9 all PASS to date). It is **not yet `replay_verified`** (no independent second execution) and no reusable recipe is promoted. AC-10 (final read-only audit) remains pending.

### T6.8 — Stopped here (per instruction, after reopen + recovery verification)

Did **not** edit or Save the Form; did **not** invoke `Unload All Global Form Objects` or any global-object/metadata-clearing command (the `Definition` submenu was never opened); did **not** open/change/Save any User Preference; did **not** log out, trigger SLO, restart the browser, or establish a new authentication session; did **not** use any direct cold `?MGForm=` navigation; did **not** modify any earlier FX_ artifact, recipe, environment file, AGENTS.md, or other experiment. `FX_FormPropertyLab09` is **left open and clean** in the newly launched Designer (Tab 2) for the final audit. **Next task (T7):** final read-only audit (AC-10) — prove exactly one `FX_FormPropertyLab09` exists, no earlier FX_ artifact was modified, no explicit global-Form-object unload or User Preference Save occurred, and repository changes are confined to this record + `evidence/EXP-009/`.

## T7 — Final read-only audit + acceptance reconciliation (AC-10) (2026-10-02)

Coordinator instruction (T7): perform T7 **only** — final read-only AC-10 audit and acceptance reconciliation. Make **no** Mongoose mutations. (1) Re-read the currently open `FX_FormPropertyLab09` and confirm it is still clean and that Name, Description, Caption, Version, Device Type, Form Type, Is Master, ScopeType, and ScopeName remain exactly as established in T6/T2. (2) Use read-only Form inventory checks to prove exactly one `FX_FormPropertyLab09` exists by exact and case-insensitive name checks, that total inventory remains 645 with 14 `FX_` Forms (unless an independently explainable external change is observed), and that all pre-existing `FX_` Forms from the T1/T2 baseline remain present with no experiment-attributable modification. (3) Reconcile the complete experiment action record to confirm no explicit global-object clear command and no User Preference Save occurred during EXP-009. (4) Audit the repository/worktree from the T1 baseline through now: distinguish the pre-existing `README.md` change from EXP-009-attributable changes, and prove EXP-009-attributable changes are confined to this record + `evidence/EXP-009/`; confirm no recipe, environment file, AGENTS.md, other experiment record, or unrelated project file was changed by this experiment. (5) Update only this record with the final audit, full AC-1 through AC-10 evidence table, result, and limited knowledge classification. Do not promote any finding to `replay_verified` and do not modify any reusable recipe. Leave Mongoose state unchanged and report any discrepancy instead of repairing it.

### T7.1 — Re-read the currently open `FX_FormPropertyLab09` (read-only; clean + unchanged)

- **Browser inventory (at T7 start, fresh conversation; inspected first):** 3 tabs — Tab 0 Web Client (authenticated portal, still open); Tab 1 stray dead bare-portal-root tab; Tab 2 (current) the T5/T6 new Designer at `designer/Default.aspx?...&MGForm=FX_FormPropertyLab09` (the target is open). (evidence `34`.)
- **Loaded target** exactly `FX_FormPropertyLab09` (URL `?MGForm=FX_FormPropertyLab09` + property store `Name` + active form tab — three agreeing surfaces).
- **All comparison properties re-read (read-only from the property store `formpropertygrid-1135` + status bar) — identical to T6/T2:**

| Property | T2/T6 value | T7 re-read | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab09` | `FX_FormPropertyLab09` | ✓ |
| **Description** | `Form Property Description New Designer Client` | `Form Property Description New Designer Client` | ✓ |
| **Caption** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; New (`mgtoolbarbutton-1088`) enabled; **no visible windows**; single form tab `FX_FormPropertyLab09` active. (evidence `34`.)
- **No Mongoose mutation performed** — the target remains open and clean, exactly as left by T6.

### T7.2 — Read-only Form inventory (exactly one target; 645 / 14; all pre-existing FX_ present)

- Re-opened the Web Client **Select Form** dialog (read-only; filter empty on open) → full store **645 records** (evidence `35`).
- **Store-level scan (authoritative), all 645 records:**
  - **Exact match** for `FX_FormPropertyLab09` (Name field `mgdata`): **exactly 1**.
  - **Case-insensitive match** (`toLowerCase() === 'fx_formpropertylab09'`): **exactly 1** (the same record).
  - **Near-miss** (case-insensitive substring `lab09`): **exactly 1** (the same record) — no other near-miss.
  - **`FX_`-prefixed forms: exactly 14.**
- **UI-level corroboration:** typed `FX_FormPropertyLab09` into the dialog filter (real key events) → **exactly 1 row** rendered (`FX_FormPropertyLab09`). (evidence `35`.)
- **The 14 `FX_` forms (all 13 pre-existing from the T1/T2 baseline + the 1 new target):** `FX_ComponentLab01`, `FX_ComponentLab02`, `FX_FormPropertyLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab03`, `FX_FormPropertyLab04`, `FX_FormPropertyLab05`, `FX_FormPropertyLab06`, `FX_FormPropertyLab07`, `FX_FormPropertyLab08`, **`FX_FormPropertyLab09`** (new, T2), `FX_TestBlank01`, `FX_TestBlank02`, `FX_VariableLab01`.
- **All 13 pre-existing `FX_` forms from the T1/T2 baseline remain present** (same names; no rename/delete). **No experiment-attributable modification:** the complete EXP-009 action record (T2.7, T3.6, T4.2, T6.6) establishes that the **only** Designer mutations were the creation of `FX_FormPropertyLab09` (T2) and the edit of its Description + one ordinary Save (T3); **no other Form was ever opened for editing or Saved** in this experiment. The pre-existing `FX_` forms were never opened/edited in the new Designer (T5/T6); in the old Designer (T1–T4) the five leftover tabs (Lab04/05/06/07/08) were left untouched (action audit).
- **No independently explainable external change** was observed: total 645 and `FX_` 14 are exactly the T2 post-creation values (644+1 / 13+1); no growth, deletion, or unexplained artifact.
- Dialog closed via **Cancel** (filter cleared first); Web Client verified clean (no windows, Save disabled). **No Form was opened from the dialog; no mutation.**

### T7.3 — Action-record reconciliation (no global-object clear; no User Preference Save)

Reconciled the complete EXP-009 action record (T1 → T6) for the two prohibited categories:

| Task | `Unload All Global Form Objects` / any global-object/metadata-clear command | User Preference opened/changed/Saved |
|---|---|---|
| T1 (preflight) | **NOT invoked** (no Form > Definition, no unload, no metadata-clear) | **NOT opened at all** (T1 instruction prohibited it) |
| T2 (creation) | **NOT invoked** | **NOT inspected/changed/Saved** |
| T3 (Description edit + Save) | **NOT invoked** | **NOT inspected/changed/Saved** |
| T4 (close target + close Designer tab) | **NOT invoked** (T4.2 action audit: no Form > Definition menu, no unload, no metadata-clear; `Unload IDO Metadata With Forms` untouched) | **NOT opened/changed/Saved** |
| T4R (reconciliation) | **CONFIRMED not invoked** (read-only) | **CONFIRMED not opened/changed/Saved** |
| T5 (launch new Designer) | **NOT invoked** | **NOT opened/changed/Saved** (the launch-time "Identify Your Editing Scope" confirmation is the normal launch flow, not a User Preference change) |
| T6 (reopen + recovery) | **NOT invoked** (the `Definition` submenu was never opened) | **NOT opened/changed/Saved** |

**Conclusion:** across the entire EXP-009 run, **no explicit global-Form-object clear command** (`Unload All Global Form Objects` or any metadata-clear) **was invoked**, and **no User Preference was opened, changed, or Saved**. The `Form > Definition` menu (which contains the prohibited unload) was **never opened** in any task.

### T7.4 — Repository / worktree audit (T1 baseline → now)

- **Git branch:** `exp/EXP-009` (unchanged since T1).
- **`git status --porcelain` (at T7):**
  - ` M README.md` — **pre-existing** formatting-only change (Markdown table column re-alignment + LF→CRLF), **present at the T1 baseline** (recorded in "Repository / worktree starting state (T1)") and **NOT made by EXP-009**. Not EXP-009-attributable.
  - `?? evidence/EXP-009/` — **EXP-009-attributable** (35 screenshots, `01`–`35`).
  - `?? experiments/EXP-009-form-description-recovery-across-new-web-designer-.md` — **EXP-009-attributable** (this record).
- **EXP-009-attributable changes are confined to exactly two paths:** this record (`experiments/EXP-009-form-description-recovery-across-new-web-designer-.md`) and `evidence/EXP-009/` (35 files). No other untracked or modified file is EXP-009-attributable.
- **NOT modified by this experiment (verified via `git status` on each path — all clean):** `AGENTS.md`, `opencode.json`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), `environments/current-environment.md`, and every other `experiments/EXP-00x-*.md` record. `claims/` remains empty.
- **Conclusion:** the only tracked modification (`README.md`) is the pre-existing, non-EXP-009 formatting change; all EXP-009-attributable changes are confined to the EXP-009 record + `evidence/EXP-009/`. No recipe, environment file, AGENTS.md, other experiment record, or unrelated project file was changed by this experiment.

### T7.5 — Full AC-1 through AC-10 evidence table

| AC | Requirement (abridged) | Result | Evidence |
|---|---|---|---|
| **AC-1** | Preflight proves editing scope is User and `FX_FormPropertyLab09` absent (exact + case-insensitive) before any mutation | **PASS** | T1: scope User (status bar); store scan 644 records 0/0 Name + 0/0 Caption (exact+CI), 0 near-miss; UI filter 0 rows both case modes; positive control 8 rows. evidence `01`–`07` |
| **AC-2** | Exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab09` created via the verified recipe; no unrelated Form creation/modification | **PASS** | T2: created via `recipes/forms/create-basic-form.md` (Save Template unchecked); store 644→645, `FX_` 13→14, exactly 1 target; all 13 pre-existing FX_ untouched. evidence `09`–`18` |
| **AC-3** | Untouched baseline recorded before the Description edit (Description empty at this point) | **PASS** | T2.4: Name/Description(empty)/Caption(empty)/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName recorded from the store before any edit. evidence `15`, `16` |
| **AC-4** | Only Description changed to the exact literal; exactly one ordinary Save; Designer clean; all comparison properties = AC-3 baseline | **PASS** | T3: Description → `Form Property Description New Designer Client` (char-for-char); exactly one ordinary Save; Save/Regenerate disabled (clean); all other properties = baseline. evidence `19`–`21` |
| **AC-5** | Target closed via ordinary Form-tab close after the clean Save state; no-prompt = corroboration only; `Unload All Global Form Objects` not invoked before the boundary | **PASS** | T4.1 (clean guard) + T4.3 (`.x-tab-close-btn` close, no prompt) + T4.2 (action audit: no unload). evidence `22`, `23` |
| **AC-6** | Existing Designer tab/window/client instance closed after target clean+closed; authenticated Web Client remained open; no logout/SLO/restart/preference mutation/server-session claim | **PASS** | T4.4 (closed tab index 2; Web Client still authenticated, no login form). evidence `24` |
| **AC-7** | A newly launched Designer tab/client instance created from the authenticated Web Client via a supported UI route (not cold `?MGForm=`); distinguished from the prior closed tab; target NOT present as an inherited/open tab before reopen; proves only a new client instance (not a new backend/web session) | **PASS** | T5: launched via Designer split button `mgtoolbarbutton-1126` (no cold URL); new tab at `designer/Default.aspx` (no `MGForm`), prior tab absent before launch; no form tabs (no inherited target); User scope. evidence `25`–`30` |
| **AC-8** | After deliberate reopen in the new Designer, the loaded target is the same scoped version (Name + ScopeType + ScopeName = AC-3 baseline) | **PASS** | T6.2 (reopen via Form-menu recent entry, no cold URL) + T6.3 (Name `FX_FormPropertyLab09`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`). evidence `32`, `33` |
| **AC-9** | Post-reopen: Description = exact literal; all comparison properties = AC-3 baseline; Designer clean; classified only as UI-level recovery across a new Designer client instance within the same authenticated Web Client session (no server-session/DB-persistence/cache-eviction/metadata-unload claim) | **PASS** | T6.3: Description = `Form Property Description New Designer Client` (char-for-char); all properties = baseline; clean. Limited classification applied. evidence `33` |
| **AC-10** | Final read-only audit: exactly one target; no earlier FX_ modified; no global-object unload or User Preference Save; repo changes confined to this record + `evidence/EXP-009/`; no recipe/environment/AGENTS.md/other-experiment modification | **PASS** | T7.1 (target clean+unchanged); T7.2 (exactly 1 target, 645/14, all 13 pre-existing FX_ present, no experiment-attributable modification); T7.3 (no unload, no User Preference Save); T7.4 (repo confined to record + evidence). evidence `34`, `35` |

**All ten acceptance checks (AC-1 … AC-10) PASS.**

### T7.6 — Result + limited knowledge classification

- **Result:** EXP-009 is **COMPLETE**. A new User-scope classic BuildFromScratch Form `FX_FormPropertyLab09` was created, its Form-level Description set to exactly `Form Property Description New Designer Client`, ordinary-saved once to a clean state, closed normally, and the entire prior Web Designer tab/client instance was closed (without any global-object/metadata-clear command). A newly rendered Web Designer tab/client instance was then launched from the still-authenticated Web Client via the supported UI route, the exact same User-scoped Form version was reopened, and the Description + all recorded comparison properties **recovered unchanged** across the new-Designer-client-instance boundary.
- **Limited knowledge classification (the only permitted claim):** this establishes **UI-level recovery of the User-scope `FX_FormPropertyLab09` Description and baseline properties across a newly launched Web Designer tab/window/client instance within the same authenticated Web Client session.** It is **NOT** proof of a new server-side Designer session, Forms-database persistence, cache eviction, IDO-metadata unloading, or backend-session recreation. No such stronger claim is made or supported by this evidence.
- **Knowledge state:** the EXP-009 **Description-recovery-across-new-Designer-client-instance** procedure is **observed** (a single controlled execution; AC-1…AC-10 all PASS). It is **NOT `replay_verified`** (no independent second execution / clean replay was performed) and **no reusable recipe is promoted or modified**. Per instruction, no finding is promoted to `replay_verified`.
- **Final Mongoose state (left unchanged):** `FX_FormPropertyLab09` is **open and clean** in the newly launched Web Designer (Tab 2); the authenticated Web Client (Tab 0) remains open; the stray dead portal-root tab (Tab 1) is unchanged. Exactly one `FX_FormPropertyLab09` exists (645 total / 14 `FX_`).

### T7.7 — Stopped here (final; experiment complete)

Did **not** make any Mongoose mutation in T7 (read-only audit only); did **not** edit or Save any Form; did **not** invoke `Unload All Global Form Objects` or any global-object/metadata-clearing command; did **not** open, change, or Save any User Preference; did **not** log out, trigger SLO, restart the browser, or establish a new authentication session; did **not** promote any finding to `replay_verified`; did **not** modify any reusable recipe, environment file, AGENTS.md, other experiment record, or unrelated project file. **No discrepancy was found** that required reporting or repair. `FX_FormPropertyLab09` is **left open and clean** in the newly launched Designer. **EXP-009 is complete.**

### T7.8 — T9 continuation confirmation (read-only; no mutation)

Coordinator instruction (T9): continue and complete T7 **only** as a read-only final audit; make **no** Mongoose mutation; treat the already-completed authoritative store scan as sufficient for the inventory fact; if the UI filter corroboration is still unfinished, either complete it read-only or explicitly record it as unnecessary corroboration rather than risking extra interaction; close any Select Form dialog cleanly without changing data; finish the remaining AC-10 work (action-record reconciliation; repository/worktree audit vs the T1 baseline separating the pre-existing `README.md` change from EXP-009-attributable changes; confinement proof); update only this record; do not promote any finding to `replay_verified`; report any discrepancy instead of repairing it.

- **Select Form dialog state (verified read-only):** **NO Select Form dialog is open.** The dialog window `ext-comp-1135` (and its grid `grid-1136`) is a cached Ext component parked off-screen (`top: -10000`, computed `visibility: hidden`); `Ext.ComponentManager` reports **no shown windows**. This is the normal post-Cancel state left by T7.2 — **there was nothing to close and no data was changed.**
- **UI filter corroboration:** already **complete** in T7.2 (typed `FX_FormPropertyLab09` into the dialog filter via real key events → exactly 1 row; evidence `35`). No re-interaction was needed or performed; the authoritative store scan (T7.2) stands as the inventory fact.
- **Form state (re-verified read-only):** `FX_FormPropertyLab09` still **open and clean** in the newly launched Designer (Tab 2) — Save/Regenerate disabled, no visible windows, single form tab active. Web Client (Tab 0) clean (Save disabled, no visible windows).
- **Repository/worktree (re-verified vs T1 baseline):** `git status --porcelain` unchanged from T7.4 — only ` M README.md` (pre-existing, non-EXP-009 formatting change), `?? evidence/EXP-009/` (35 files), `?? experiments/EXP-009-form-description-recovery-across-new-web-designer-.md`. No untracked file outside EXP-009; no tracked modification other than `README.md`. EXP-009-attributable changes remain **confined to the record + `evidence/EXP-009/`**; no recipe, environment file, AGENTS.md, other experiment record, or unrelated project file was modified.
- **Action-record reconciliation:** unchanged from T7.3 — **no explicit global-object clear command** and **no User Preference Save** at any point in EXP-009; the `Form > Definition` menu was never opened.
- **No discrepancy found.** T7 (AC-10) remains **complete**; AC-1…AC-10 all **PASS (observed)**; no finding promoted to `replay_verified`. `FX_FormPropertyLab09` is **left open and clean** in the newly launched Designer. **EXP-009 is complete.**