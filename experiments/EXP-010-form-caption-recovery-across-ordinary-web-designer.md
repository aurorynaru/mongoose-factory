# EXP-010 — Form Caption Recovery Across Ordinary Web Designer Close/Reopen (FX_FormPropertyLab11)

Status: **COMPLETE — all tasks T1–T6 done; all acceptance checks AC-1 … AC-10 PASS.** `FX_FormPropertyLab11` (User scope) created via the verified recipe with Save Template unchecked; store 646→647, `FX_` 15→16, exactly one target; Caption changed to exactly `Form Property Caption Close Only` and persisted by exactly one ordinary Save to a demonstrably clean state; all other comparison properties equal to the T2 baseline; target closed via its ordinary Form-tab × with **no unsaved-change prompt** (AC-6); then deliberately reopened via the supported **Form-menu recent-forms** path (no direct URL, no reload, no dialog) and the Caption **recovered unchanged** with every comparison property equal to the T2 baseline and the target clean (AC-7/AC-8); final read-only audit (T6) re-confirmed the target open/clean with all properties intact, proved exactly one case-insensitive target (647 total / 16 `FX_`), established the controlled-action audit (one Save, no unload, no User Preferences) and the worktree confinement (record + `evidence/EXP-010/` only). The end-to-end Caption-recovery finding is classified **`observed`** (single controlled execution; not a replay). Target left **open and clean**. Preflight proved editing scope is **User** and the target was **absent** (exact + case-insensitive) in the 646-record Select Form store before the mutation.
Date: 2026-10-02
Mode: LEARNING MODE — first execution of the Form-**Caption**-recovery-across-**ordinary-Web-Designer-Form-tab-close/reopen** procedure on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab11`.
Run: `R-20261002-234238-Dv2r` (cycle 1, task T1), started 2026-10-02 23:42:38.

## Objective

Create exactly one new User-scope classic BuildFromScratch Form named `FX_FormPropertyLab11` using the verified basic-form recipe, record its untouched Form-property baseline, change only its Form-level Caption to the literal value `Form Property Caption Close Only`, ordinary-save exactly once to a demonstrably clean state, close the target through its ordinary Web Designer Form-tab close control, deliberately reopen the exact same User-scoped version through a previously verified supported Designer reopen path (Form-menu recent forms or Select Form), and verify that the Caption recovers unchanged while all recorded comparison properties remain equal to baseline. The result may establish only **UI-level Caption recovery across this ordinary Form-tab close/reopen boundary** within the same Web Designer client instance and the same authenticated Web Client session; it must not be classified as proof of Forms-database provenance, Form/global-object cache eviction, IDO-metadata unloading or non-unloading, or any stronger lifecycle/session boundary.

In scope: read-only preflight confirming editing scope is User and `FX_FormPropertyLab11` is absent; create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab11` using `recipes/forms/create-basic-form.md` with Save Template unchecked; record untouched baseline values for Name, Caption, Description, Version, Device Type, Form Type, Is Master, ScopeType, and ScopeName; change only Form-level Caption to exactly `Form Property Caption Close Only`; exactly one ordinary Designer Save to a demonstrably clean state; close the target via its ordinary Form-tab close control; reopen the exact same User-scoped version through a previously verified supported Designer path (Form-menu recent forms or Select Form, explicitly selecting the intended record if Select Form is used); verify the reopened version by Name + ScopeType + ScopeName and compare Caption plus every recorded baseline property; capture screenshots and read-only diagnostics under `evidence/EXP-010/`; update only this record.

Out of scope: replaying or repairing EXP-005-R2 or satisfying its disabled-preference prerequisite; any claim about whether `Unload IDO Metadata With Forms` is enabled, disabled, effective, or triggered during this experiment; proving or inferring IDO-metadata unloading or non-unloading, Form/global-object cache eviction, Forms-database storage provenance, or backend/session behavior; invoking `Form > Definition > Unload All Global Form Objects` or any other deliberate cache/metadata-clear command; opening, changing, or saving User Preferences; closing the whole Web Designer browser tab/window, launching a new Designer tab/window, logout/login, deliberate reauthentication, browser restart, or OS restart; Description edits, variables, components, collections, bindings, handlers, scripts, validators, data sources, IDO definitions, localized Strings, or FormSync operations; Site, Group, or Vendor Default scope; modification of any existing `FX_FormPropertyLab01` through `FX_FormPropertyLab10` artifact or any non-`FX_` artifact; creation or modification of reusable recipes, `AGENTS.md`, environment files, or other experiment records; direct database changes, undocumented APIs, unsupported internal session manipulation, or direct cold `?MGForm=` target navigation.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Web Client iframe title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`).
- Browser state at preflight start (inspected first; **no login performed — session already authenticated**): three tabs:
  - Tab 0: **Mongoose Web Client (portal)**, signed in — **no form open** (no form tabs); toolbar **clean** (Open `mgtoolbarbutton-1101` enabled; Save `mgtoolbarbutton-1102` disabled; Designer split `mgtoolbarbutton-1126` enabled); **no** visible Ext windows; **no** `portal-notification` banner; **no login/password form** (authenticated portal shell rendered). Web Client iframe name `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. Portal page URL carries the leftover `favoriteContext=WSFormRuntimeBuilderSelection` param from a prior session (display-only; no form tab exists for it). (evidence `02`.)
  - Tab 1: **stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (empty title) — the long-standing leftover of the EXP-006 T8 SLO-recovery navigation; unchanged. Not a Designer tab.
  - Tab 2: **Web Designer tab open** at `WSWebClient/designer/Default.aspx?…&MGForm=FX_FormPropertyLab10` — `FX_FormPropertyLab10` was **left open and clean** by EXP-009-R2 (final state) and was not closed at the end of that experiment. Read-only inspection in this preflight: **one form tab** — `FX_FormPropertyLab10` (**active** per URL). Status bar `[ ScopeType: User / ScopeName: <username> ]` (ScopeName masked by the secrets layer in tool output; the signed-in user is `anton.ramos@3mworks.com.ph` per `environments/current-environment.md`). Toolbar **clean** (Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` disabled; New `mgtoolbarbutton-1088` enabled); **no visible windows**. Active form's property store (`formpropertygrid-1135`): Name `FX_FormPropertyLab10`, Description `Form Property Description New Designer Client Replay` (the EXP-009-R2 customized value), Caption empty, Version `User version for user <username>`, Device Type `Default`, Form Type `Normal`, Is Master `True` — **consistent with the EXP-009-R2 final state**. **Not touched** in this preflight. (evidence `01`.)
- **Target form `FX_FormPropertyLab11` does NOT exist** — full Select Form store scan (646 records) found 0 exact and 0 case-insensitive matches in both the Name (`mgdata`) and Caption (`text`) fields, 0 near-miss; UI filter searches in both case modes returned 0 rows; positive control 10 rows (method and evidence below).
- Existing `FX_` forms (**exactly 15**, store indices in `mgdata` order): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab10` (282, Caption empty — Name fallback), `FX_FormPropertyLab09` (283, Caption empty — Name fallback), `FX_FormPropertyLab08` (284, Caption empty — Name fallback), `FX_FormPropertyLab07` (285, Caption empty — Name fallback), `FX_FormPropertyLab06` (286, Caption empty — Name fallback), `FX_FormPropertyLab05` (287, Caption empty — Name fallback), `FX_ComponentLab02` (288), `FX_ComponentLab01` (289), `FX_FormPropertyLab02` (317, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04` (318, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03` (319, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (320, Caption `Form Property Lab`).
- Form-count reconciliation: **646 total / 15 `FX_` / 0 target** — **identical** to the EXP-009-R2 final audit (646 / 15, same 15 names, same store indices 279–289 / 317–320). No growth, no deletions, no unexplained artifacts between experiments.
- No Mongoose artifact was created, modified, or deleted during this preflight. No User Preference was opened, changed, or saved (per the T1 instruction, User Preferences was **not opened at all** in this preflight). No unload command was invoked. No form was opened from the Select Form dialog. No Designer was launched or closed. No Designer mutation was performed. Editing scope unchanged (User).

## Preflight method (T1)

1. Inspected repository state and references: `AGENTS.md`, `recipes/forms/create-basic-form.md` (status **verified**), `environments/current-environment.md`, and the EXP-009 / EXP-009-R2 records (read-only references; not modified). Worktree is a git repository (branch `exp/EXP-010`, HEAD `56b3c8f`); starting-state audit below.
2. Inspected current browser state (3 tabs as above) — **no login performed** (session already authenticated). Screenshot of the Designer tab (evidence `01`) and of the Web Client (evidence `02`).
3. Confirmed Web Client iframe state programmatically (title = config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no login form; no visible windows; no form tabs; Save disabled; no `portal-notification`).
4. In the Web Client, clicked **Open** (`mgtoolbarbutton-1101`, native Playwright click) → **Select Form** dialog (window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147` — **identical IDs to the EXP-009 / EXP-009-R2 sessions**). The dialog opened with an **empty** filter → full store **646 records** (evidence `03`).
5. **Target-absence proof (store-level, authoritative):** scanned the entire Select Form store (all **646** records): field `mgdata` (Name) — **0 exact** matches for `FX_FormPropertyLab11`, **0 case-insensitive** matches (`toLowerCase()` comparison); field `text` (Caption) — **0 exact**, **0 case-insensitive**. Near-miss scan for `formpropertylab11` (case-insensitive substring, Name and Caption) matched **0** records.
6. **Target-absence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab11` into the Filter field (real key events, Case Sensitive **off**) → store reloaded to **0 records** (evidence `04`).
7. **Target-absence proof (UI-level, case-sensitive):** toggled **Case Sensitive on** via the checkbox's own `onBoxClick()` handler (`getValue()` false→true verified after the toggle), cleared and re-typed `FX_FormPropertyLab11` → **0 records** (evidence `05`).
8. **Positive control (UI-level, case-sensitive):** cleared and typed `FX_FormPropertyLab` (same mode) → exactly **10 rows**: `FX_FormPropertyLab10`, `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — proves the filter mechanism works and that only the 01–10 variants exist (evidence `06`).
9. **Visual inventory:** cleared and typed `FX_` → exactly **15 rows** rendered in the grid (evidence `07`).
10. Restored the dialog to its original state: Case Sensitive back **off** (`onBoxClick()` again, verified `getValue()=false`), filter cleared via real key events → full store restored, **646 records**, Starts With verified off (`inputEl.dom.checked = false`); closed the dialog with **Cancel** (`button-1150`, native click). Verified the Web Client returned to its original state: no visible windows, Save disabled (evidence `08`).
11. **Editing-lane check (read-only):** the Designer tab (tab 2) is in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`) with a clean toolbar and `FX_FormPropertyLab10` active — suitable for a later User-scope creation in the existing session (no scope re-prompt expected, per EXP-009/EXP-009-R2).
12. Audited the worktree starting state (git status/log + mtime audit, see below). Console: only pre-existing benign entries (yggdrasil analytics 401 telemetry retries and the "Cannot track a view for an untracked application" analytics assertion — unrelated to Mongoose functionality).

## T1 requirement-to-evidence mapping

| # | T1 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect AGENTS.md, recipe, EXP-009/EXP-009-R2 records as references (no modification) | **DONE** — all read; none modified | this file |
| 2 | Inspect current browser/page state; record existing Web Client and Web Designer tabs/windows/client instances with stable observable evidence | **RECORDED** — 3 tabs (Web Client authenticated; stray dead portal-root tab; Designer tab with 1 form tab, `FX_FormPropertyLab10` active, User scope, clean) | tab list; evidence `01`, `02` |
| 3 | No login/logout/SLO/browser-restart/new auth session; no Designer close/launch; no unload; no User Preferences open/save; no Form mutation | **HONORED** — none performed | this file; browser state unchanged |
| 4 | Prove current editing scope is User | **PROVEN** — Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (read-only; no scope dialog, no scope switch) | evidence `01`; preflight facts |
| 5 | Prove `FX_FormPropertyLab11` absent (exact + case-insensitive) by supported UI/store evidence | **PROVEN** — store scan 646 records: 0/0 Name, 0/0 Caption (exact + CI), 0 near-miss; UI filter 0 rows case-insensitive; 0 rows case-sensitive; positive control 10 rows | evidence `03`–`07`; table below |
| 6 | Capture read-only Form inventory baseline sufficient to detect earlier `FX_` changes | **RECORDED** — 646 total / 15 `FX_` / 0 target, full 15-name list with Captions and store indices; identical to EXP-009-R2 final audit | evidence `07`; preflight facts |
| 7 | Capture initial repository/worktree baseline (AC-10) | **CAPTURED** — git branch `exp/EXP-010`, HEAD `56b3c8f`, worktree status + mtime audit | "Repository / worktree starting state (T1)" below |
| 8 | Create `evidence/EXP-010/` and the EXP-010 record; do not create `FX_FormPropertyLab11` | **DONE** — screenshots `01`–`08`; this record; target NOT created | this file; `evidence/EXP-010/` |

## Target-absence evidence — pre-mutation absence of `FX_FormPropertyLab11`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store (Name) | Store scan of all 646 records, field `mgdata`, `=== 'FX_FormPropertyLab11'` | **0 matches** |
| Case-insensitive, whole store (Name) | Store scan, `mgdata.toLowerCase() === 'fx_formpropertylab11'` | **0 matches** |
| Exact / case-insensitive, whole store (Caption) | Store scan, field `text`, exact and `toLowerCase()` | **0 / 0 matches** |
| Near-miss scan | Case-insensitive substring `formpropertylab11` in Name and Caption | **0 matches** |
| UI filter, case-insensitive (Case Sensitive off) | Dialog filter `FX_FormPropertyLab11` | **0 rows** (evidence `04`) |
| UI filter, case-sensitive (Case Sensitive on) | Dialog filter `FX_FormPropertyLab11` | **0 rows** (evidence `05`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` (case-sensitive) | **10 rows**: `FX_FormPropertyLab10`, `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` (evidence `06`) |
| Visual, full `FX_` inventory | Dialog filter `FX_` | exactly 15 `FX_` rows, no `FX_FormPropertyLab11` (evidence `07`) |

**Counts: total forms = 646; `FX_` forms = 15; target `FX_FormPropertyLab11` = 0.**

Case-insensitive matching was explicitly accounted for in multiple independent ways (store-level `toLowerCase` scan on both Name and Caption, UI filter with Case Sensitive off, and the positive control), not by a single exact-case filter.

**Name/Caption ambiguity:** the store scan distinguished the Name field (`mgdata`) from the Caption field (`text`) per record. No record carries a Caption resembling the target (case-insensitive Caption scan = 0). The Name-fallback Captions in the target family are `FX_FormPropertyLab10`/`09`/`08`/`07`/`06`/`05` (Caption empty → store `text` shows the Name) — all different Names, none confusable with `FX_FormPropertyLab11` under exact or case-insensitive matching. No ambiguity exists for the target.

## Repository / worktree starting state (T1)

- Worktree **is** a git repository: branch **`exp/EXP-010`**, HEAD **`56b3c8f`** (`Merge EXP-009-R2 (accepted)`); recent history: `57e88f6 EXP-009-R2: accepted`, `583f6ba Merge EXP-009 (accepted)`, `cd6db77 EXP-009: accepted`, `638c4c3 Update factory README`, `40371d9 Merge ChatGPT composer readback fix`.
- **Run boundary:** this run (`R-20261002-234238-Dv2r`) started at **2026-10-02 23:42:38**.
- **Worktree status at preflight start:** **clean** — `git status --porcelain` empty before this preflight wrote anything; after the preflight the only entry is `?? evidence/EXP-010/` (created by this preflight). No modified tracked files.
- **New in this preflight (T1 window, 2026-10-02 ~23:43–23:55):** only `evidence/EXP-010/01…08` (8 screenshots) and this record file.
- **Most recent prior content:** `experiments/EXP-009-R2-clean-replay-form-description-recovery-across-new-.md` (mtime 2026-10-02 23:42:33 — its finalization, committed as `57e88f6`) and `evidence/EXP-009-R2/*` (last 10/2).
- **NOT modified by this preflight (all predate the run):** `AGENTS.md` (9/30 02:12), `opencode.json` (9/30 02:23), `README.md` (10/2 22:54 — harness-committed as `638c4c3`), `environments/current-environment.md` (9/30), every file under `recipes/` (9/30, including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` (≤ 10/2 23:42:33). `claims/` empty (pre-existing).
- **Conclusion:** worktree starting state is clean for EXP-010 purposes; no recipe, environment, AGENTS.md, or prior experiment file was modified by this preflight.

## Observations

- **Session already authenticated** — the Web Client portal tab shows the signed-in user icon, the DEM badge, and the loaded Mongoose app (no login form anywhere); no login/logout/SLO was performed or needed.
- **The Designer tab carries over the full EXP-009-R2 end state**: one form tab (`FX_FormPropertyLab10`) active and clean, its Description still `Form Property Description New Designer Client Replay` (the EXP-009-R2 customized value, re-read from the property store). It is a leftover of the prior experiment and must not be modified by later tasks.
- **Select Form dialog control IDs are identical to the EXP-009 / EXP-009-R2 sessions** (window `ext-comp-1135`, grid `grid-1136`, filter `textfield-1143`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147`, Cancel `button-1150`) — the Web Client iframe was not reloaded since those experiments.
- **Filter store reload is driven by real input events** (re-confirmed): `page.keyboard.type()` / Delete reloaded the store each time; no programmatic `setValue` was used.
- **Case Sensitive checkbox (`mgDlgCbx-1146`)**: the component's own `onBoxClick()` handler toggled it consistently in both directions (`getValue()` false→true→false, verified after each toggle) — re-confirms the long-standing finding that `onBoxClick()` is the reliable toggle path.
- **Starts With checkbox (`mgDlgCbx-1147`)**: authoritative state read via `inputEl.dom.checked` (`false`) — re-confirms the long-standing note that `getValue()` is unreliable for this control.
- **Property store `formpropertygrid-1135`** (same component id as the EXP-009/EXP-009-R2 sessions — the Designer page was not reloaded): the store's root nodes are a flat mix of group nodes (`Design`, `Appearance`, `Behavior`, `Help`, `Layout`) and their expanded leaf records (`Design.Name`, `Design.Description`, …) — 12 root nodes total for the active form. Leaf records carry full untruncated `value`s (the grid cells visually truncate). `disp` values on group nodes carry a leading space (`" Design"`); match on `propId`.
- **Console:** only pre-existing benign entries — repeated yggdrasil analytics 401 telemetry retries (ending in "Stopping after 10 failed attempts") and the yggdrasil "Cannot track a view for an untracked application" assertion. Nothing Mongoose-functional.
- **Tab 1** remains the stray dead bare-portal-root tab (long-standing EXP-006 T8 leftover); no navigation to it was performed.
- No Mongoose artifact was created, modified, or deleted; no User Preference was opened, changed, or saved; no unload was invoked; no form was opened from the dialog; the Select Form dialog was left in a clean state (filter empty, both checkboxes off) and closed via Cancel.

## Evidence (under `evidence/EXP-010/`)

- `01-preflight-designer-state.png` — Designer tab at preflight start: `?MGForm=FX_FormPropertyLab10` (EXP-009-R2 leftover, active, clean), Properties Design group (Name `FX_FormPropertyL…`, Description `Form Property Des…`, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`), status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean (Save/Regenerate disabled).
- `02-preflight-webclient-state.png` — Web Client at preflight start: signed in (user icon top-right, DEM badge), no form open, toolbar clean (Save disabled), no notification banner, no dialogs.
- `03-preflight-select-form-full-list.png` — Select Form dialog opened with an empty filter → full store (646 records).
- `04-select-form-filter-lab11-case-insensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab11`, Case Sensitive **unchecked** → grid empty (0 records).
- `05-select-form-filter-lab11-case-sensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab11`, Case Sensitive **checked** → grid empty (0 records).
- `06-select-form-filter-lab-prefix-ten-rows.png` — Select Form dialog, Filter `FX_FormPropertyLab` (positive control, case-sensitive) → exactly 10 rows: `FX_FormPropertyLab10`, `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_FormPropertyLab02` (Caption `Form Property Lab Replay`), `FX_FormPropertyLab04` (Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03` (Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (Caption `Form Property Lab`).
- `07-select-form-fx-inventory-fifteen-rows.png` — Select Form dialog, Filter `FX_` → exactly 15 `FX_` rows: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab10`, `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — **no `FX_FormPropertyLab11`**.
- `08-webclient-after-dialog-close.png` — Web Client after Cancel: original state restored (no form tabs, no dialogs, Save disabled).

## Recipe availability for the next task

`recipes/forms/create-basic-form.md` (status **verified** — EXP-002 + EXP-002-R2, persistence verified across full page reload in both) is the creation path for `FX_FormPropertyLab11`: Web Client Designer split button (`mgtoolbarbutton-1126`) → Designer tab → **New** (`mgtoolbarbutton-1088`) → Form Wizard Selection (New Form / Category **Classic** / Wizard **BuildFromScratch**) → wizard page 1 Name `FX_FormPropertyLab11` (other defaults untouched) → Next → final step **uncheck "Save Template"** → Finish → "Process Completed Successfully" → OK (Finish persists immediately; Save disabled = clean). Session-specific control IDs from EXP-009-R2 (wizard window `formwizard-1408`, expeditor `expeditor-1468`, Name combo `mgcombo-1475`, Save Template `ext-comp-1707`, success dialog `ext-comp-1009` with OK at `button-1013`) may drift — resolve at runtime. Known pitfalls: synthetic DOM clicks do not drive Ext window buttons (use native Playwright clicks); the wizard is a single scrollable page in this build; "Save Template" is checked by default (authoritative state = `getValue()`; reliable toggle = `onBoxClick()`); the Name field is an editable combo (`forceSelection:false`); the Form Wizard Selection dialog is xtype `formwizard` (not an Ext `window`). **Designer lane note:** the Designer tab is already open in User scope with `FX_FormPropertyLab10` (active) loaded — a new form can be created in this existing session (per EXP-009/EXP-009-R2, no scope re-prompt appears when the session scope is already established); the open `FX_FormPropertyLab10` form must not be modified.

## Knowledge state (as of T1)

- `FX_FormPropertyLab11` absent (exact and case-insensitive) in the 646-record Select Form store (Name **and** Caption fields), in both UI filter modes, and in the near-miss scan: **observed** (T1, multiple independent methods + positive control).
- Select Form store count 646 and `FX_` count 15, reconciled against the EXP-009-R2 final audit (646 / 15, identical set and indices): **observed** (re-confirmed).
- Designer editing scope is **User** for the signed-in user (status bar, read-only): **observed** (T1).
- The existing Web Designer client instance (tab 2) carries the EXP-009-R2 end state unchanged: 1 form tab (`FX_FormPropertyLab10`), active and clean with Description `Form Property Description New Designer Client Replay`, scope User, clean toolbar: **observed** (T1).
- The existing authenticated Web Client session (tab 0) is live and usable (no login required; no form open; clean toolbar): **observed** (T1).
- The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure is **unverified** until this experiment (and a later independent replay) completes. Related context: the EXP-008 close-only-reopen **Description** procedure is `replay_verified` (EXP-008 + EXP-008-R2); the EXP-009 new-Designer-client-instance **Description** procedure is `replay_verified` (EXP-009 + EXP-009-R2); the EXP-006 literal-Form-Caption persistence procedure is `replay_verified` (EXP-006 + EXP-006-R2). The EXP-010 combination (Caption + ordinary same-instance Form-tab close/reopen) is a distinct procedure and must not be assumed equivalent to any of them.

## Open questions / blockers

- None blocking for T1/T2. Preflight items satisfied; the target was created at T2 and is open and clean.
- `FX_FormPropertyLab10` (EXP-009-R2 leftover) and `FX_FormPropertyLab11` (created at T2) are both open in the Designer tab; later tasks must not modify `FX_FormPropertyLab10`, and the Form-menu recent list will contain both (the target is expected to be the first recent entry after T3's Save).
- The supported reopen path for the later reopen task will be re-observed at that time: the Form-menu recent-forms entry (verified in EXP-008-R2 T6, EXP-009 T6, EXP-009-R2 T1.5) or Select Form with an explicit row selection (verified in `recipes/forms/create-basic-form.md` Verification). It will not be assumed without re-observation.
- The `Unload IDO Metadata With Forms` preference was **not** inspected in this preflight (the T1 instruction prohibits opening User Preferences); no claim about it is made or needed for this experiment.

## T1 — Stopped here (per instruction, after the read-only preflight)

Did **not** create `FX_FormPropertyLab11` or any other Form; did **not** edit any Form property; did **not** invoke `Unload All Global Form Objects` or any other unload; did **not** open, change, or Save any User Preference; did **not** modify any existing FX_ Form or non-`FX_` artifact; did **not** log in/out, trigger SLO, restart the browser, or establish a new authentication session; did **not** close or launch any Designer tab/window; did **not** switch scope. **Next task (T2):** using `recipes/forms/create-basic-form.md` exactly as the verified procedure, create exactly one new classic BuildFromScratch Form `FX_FormPropertyLab11` in User scope (Save Template unchecked); record its exact scoped identity and the full pre-Caption baseline (Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, Is Master); prove exactly one target exists (store 646→647, `FX_` 15→16). Do NOT edit Caption, do NOT change Description or any other property, do NOT change User Preferences, do NOT close the target, do NOT invoke any unload.

## T2 — Creation of `FX_FormPropertyLab11` + untouched baseline (2026-10-02)

Coordinator instruction (T2): create exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab11` using `recipes/forms/create-basic-form.md` (Save Template unchecked), after re-checking that editing scope is User and the target is still absent (stop without mutation if either guard fails); verify 646→647 total, 15→16 `FX_`, exactly one target; prove the exact scoped version (Name + ScopeType + ScopeName); record the untouched pre-Caption baseline (Caption must still be empty); prove the Designer is clean after the creation workflow and that no earlier `FX_` Form was edited. Do not edit Caption, do not Save for the Caption change, do not close the target, do not close/relaunch the Designer, do not invoke any unload, do not open/change/save User Preferences.

### T2.1 — Guards re-verified first (no mutation)

- Browser tabs at T2 start (fresh conversation; state inspected before any action): Tab 0 = Web Client (authenticated; no form open; Save disabled; no visible windows); Tab 1 = the same stray dead bare-portal-root tab as T1 (unchanged); Tab 2 (current) = Designer tab with `?MGForm=FX_FormPropertyLab10` (left open/clean by EXP-009-R2 T1.6).
- **Guard 1 — scope (PASS):** Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (read-only); toolbar clean (Save `mgtoolbarbutton-1085` / Regenerate `mgtoolbarbutton-1086` disabled; New `mgtoolbarbutton-1088` enabled); no visible windows; single form tab `FX_FormPropertyLab10` present and untouched (property store re-read: Name `FX_FormPropertyLab10`, Description `Form Property Description New Designer Client Replay`, Caption empty — identical to the T1/EXP-009-R2 state).
- **Guard 2 — target absence (PASS):** Web Client Select Form dialog opened (empty filter, as left by T1) → full store **646 records**; **0 exact and 0 case-insensitive** matches for `FX_FormPropertyLab11` in Name and Caption; 0 near-miss; the same 15 `FX_` forms as T1 (indices 279–289, 317–320). Target still absent immediately before the mutation. (evidence `09`.) Dialog closed via Cancel; Web Client verified clean.

### T2.2 — Creation method (per `recipes/forms/create-basic-form.md`)

1. Switched to the Designer tab (tab 2) — already open in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`), clean toolbar, `FX_FormPropertyLab10` active. No new Designer session was needed; **no "Identify Your Editing Scope" dialog appeared** (session scope already established for the signed-in user — same as EXP-009/EXP-009-R2 T2).
2. Designer toolbar **New** (`mgtoolbarbutton-1088`) — native Playwright click → **"Form Wizard Selection"** dialog (window `formwizard-1408` — xtype `formwizard`, not an Ext `window`; **same numeric ID as the EXP-009-R2 session** — the Designer page was not reloaded). (evidence `10`.)
3. Radio **New Form** already checked (default; `mgradio-1417` inputValue `0` checked, `mgradio-1418` inputValue `1` unchecked). Category combo (`mginfoconexpandable-1426`, 7 categories) → **Classic** selected via `combo.select(record)`; Wizard combo (`mginfoconexpandable-1431`) then loaded the 7 Classic wizards (BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile) → **BuildFromScratch** selected via `combo.select(record)`. (evidence `10`.)
4. OK (`mgformbutton-1434`, native click) → **"Form Wizard - Build From Scratch"** (expeditor `expeditor-1468`, **same ID as EXP-009-R2**). Page-1 values verified: Name (editable combo `mgcombo-1475`) set to **`FX_FormPropertyLab11`** via `setValue`; all other defaults left untouched — Form Type `BuildFromScratch` (`mgcombo-1489`), Form Layout `GridLeft` (`mgcombo-1494`), Device Type `Default` (`mgcombo-1499`), Data Source empty (`mgcombo-1504`), Query Form empty, Comments empty. (evidence `11`.)
5. **Next** (`mgformbutton-1711`, native click) → Next became **disabled**, **Finish** (`mgformbutton-1712`) became **enabled**, Back enabled (single scrollable page, as in EXP-009/EXP-009-R2 T2).
6. **Save Template** checkbox (`ext-comp-1707`) was **checked by default** (`getValue()=true`); toggled **off** via its own handler `onBoxClick()` → `getValue()=false` (verified after the toggle). (evidence `12`.)
7. **Finish** (`mgformbutton-1712`, native click) → **"Process Completed Successfully"** dialog (`ext-comp-1009`, body text `Process Completed Successfully`) → **OK** (`button-1013`, native Playwright click). (evidence `13`.)
8. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab11`; form tab **`FX_FormPropertyLab11`** appeared (2nd form tab) and is selected; the `FX_FormPropertyLab10` tab **remains present and untouched**; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `14`.)

### T2.3 — Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store:
- **Total records = 647** (646 + 1 — exactly +1; **no template artifact** created, consistent with Save Template being unchecked).
- **Exactly 1 exact match** for `FX_FormPropertyLab11` (store index 282, record `{mgdata:"FX_FormPropertyLab11", text:"FX_FormPropertyLab11", id:"extModel214-5164"}`); case-insensitive matches = 1 (the same record); Caption-field exact/case-insensitive matches = 1/1 (the same record, Caption empty → Name fallback); near-miss = 1 (the same record). **Distinct matching records = 1.**
- `FX_`-prefixed forms now number **16**: `FX_VariableLab01`(279), `FX_TestBlank02`(280), `FX_TestBlank01`(281), **`FX_FormPropertyLab11`(282)**, `FX_FormPropertyLab10`(283), `FX_FormPropertyLab09`(284), `FX_FormPropertyLab08`(285), `FX_FormPropertyLab07`(286), `FX_FormPropertyLab06`(287), `FX_FormPropertyLab05`(288), `FX_ComponentLab02`(289), `FX_ComponentLab01`(290), `FX_FormPropertyLab02`(318, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04`(319, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03`(320, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01`(321, Caption `Form Property Lab`). The pre-existing 15 shifted only in list order/indices; no other artifact added or removed.
- UI confirmation: filtered the dialog to `FX_FormPropertyLab11` → **exactly 1 row** (Caption column shows the Name fallback because Caption is empty); filtered `FX_` → **exactly 16 rows**. (evidence `16`, `17`.)
- Dialog closed via Cancel (filter cleared first; 647 records, Case Sensitive off, Starts With off); Web Client verified clean (no windows, Save disabled).

### T2.4 — Exact User-scope identity + full pre-Caption baseline (recorded BEFORE any property change)

Read read-only from the loaded Designer property grid store `formpropertygrid-1135` (the grid cell visually truncates Name/Version but the store holds the full values):

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab11` | yes |
| **Caption** | *(empty)* | no |
| **Description** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |
| **ScopeType** | `User` | — (status bar) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | — (status bar) |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: <username> ]` (evidence `14`, `15`; the live status-bar value is masked by the secrets layer in tool output; the ScopeName is the signed-in user per `environments/current-environment.md`); the Designer session was already in User scope at T2 start (no scope dialog was re-prompted because the session scope was established earlier for the signed-in user).

**Key baseline fact for the persistence check:** the freshly created form's **Caption is empty** (recorded from the store, not assumed) — the later change to the literal `Form Property Caption Close Only` will be an unambiguous empty→literal transition. (Description is also empty and will remain an unchanged comparison property.)

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### T2.5 — Post-creation cleanliness + no-earlier-FX_-edit proof

- **Designer clean after the creation workflow:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; no dirty-state indicator; URL `?MGForm=FX_FormPropertyLab11`; active form tab `FX_FormPropertyLab11`. (evidence `14`, `15`.)
- **No earlier `FX_` Form was edited:** the pre-existing `FX_FormPropertyLab10` tab remains present and untouched (re-read at T2 end: still active-adjacent, its property store values unchanged from T1); the toolbar (which reflects the active form and would be enabled by any unsaved edit) is clean; the post-creation inventory shows all 15 pre-existing `FX_` forms still present with their same Captions (no rename/delete); the only delta in the entire 647-record store is the single new `FX_FormPropertyLab11` record.

### T2.6 — T2 evidence (under `evidence/EXP-010/`)

- `09-t2-pre-mutation-absence-recheck.png` — Select Form dialog, full list (646 records, filter empty) at the pre-mutation re-check.
- `10-t2-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch** (New Form radio checked).
- `11-t2-wizard-name-entered.png` — Build From Scratch wizard: Name `FX_FormPropertyLab11`, other defaults (BuildFromScratch / GridLeft / Default / empty).
- `12-t2-wizard-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked** (was checked by default).
- `13-t2-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `14-t2-form-created-loaded-clean.png` — New form `FX_FormPropertyLab11` loaded in the Designer (`?MGForm=FX_FormPropertyLab11`), form tab selected (2nd of 2), `FX_FormPropertyLab10` tab still present, toolbar clean.
- `15-t2-baseline-properties-design-group.png` — Designer Properties, Design group: Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: <username> ]`.
- `16-t2-select-form-lab11-exists-one.png` — Select Form dialog filtered to `FX_FormPropertyLab11` → exactly 1 row (store total 647).
- `17-t2-select-form-fx-inventory-sixteen-rows.png` — Select Form dialog, Filter `FX_` → exactly 16 `FX_` rows including `FX_FormPropertyLab11`.

### T2.7 — T2 observations / corrections

- **The Form Wizard Selection dialog is xtype `formwizard`, not an Ext `window`** (re-confirmed): locate it by `ComponentQuery.query('formwizard')` or by title; it does not appear in the visible-`window` list.
- **Wizard numeric IDs did NOT drift from the EXP-009-R2 session** (`formwizard-1408`, `mginfoconexpandable-1426/1431`, `mgformbutton-1434`, `expeditor-1468`, `mgcombo-1475/1489/1494/1504`, `mgformbutton-1710/1711/1712`, `ext-comp-1707`, success `ext-comp-1009`, OK `button-1013`) — the Designer page was not reloaded between experiments, so IDs were stable; still resolved at runtime, never assumed.
- **The Designer URL drops `MGForm=` while the wizard is open** and restores `?MGForm=<new form>` after Finish+OK; the previously loaded form tab (`FX_FormPropertyLab10`) is not affected by the wizard flow (re-confirmed).
- **Select Form client-side record ids are session-local** (e.g., `FX_FormPropertyLab11` = `extModel214-5164` this session) — Name + scope is the persistent identity (re-confirmed).
- **Synthetic `setValue` on the wizard Name combo worked** (editable combo, `forceSelection:false`); `combo.select(record)` worked for Category/Wizard (re-confirmed).
- **Save Template is checked by default**; reliable toggle = `onBoxClick()` (re-confirmed).
- **The property grid `formpropertygrid-1135`** (same component id as the EXP-009/EXP-009-R2 sessions — the Designer page was not reloaded) reflects the newly active form tab; its root nodes are a flat mix of group nodes and their expanded Design leaf records (12 roots: 4 groups + 8 Design leaves); match groups on `propId` (group `disp` values carry a leading space).
- No User Preference was inspected or changed; no unload was invoked; no form other than the new `FX_FormPropertyLab11` was created, modified, or deleted; `FX_FormPropertyLab01…10` and all non-`FX_` artifacts untouched; editing scope stayed **User** throughout.

### T2.8 — T2 knowledge-state updates

- `FX_FormPropertyLab11` **exists, exactly one**, User scope, ScopeName `anton.ramos@3mworks.com.ph`, created via the verified recipe with Save Template unchecked; store 646→647, `FX_` 15→16; baseline Caption **empty**, Description **empty**: **observed** (T2).
- Full pre-Caption baseline (Name/Caption(empty)/Description(empty)/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName) as tabled in T2.4: **observed** (T2).
- The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure remains **unverified** (creation + baseline only so far).

### T2.9 — Stopped here (per instruction, after creation + baseline)

Did **not** change the Caption or any other Form property; did **not** touch `FX_FormPropertyLab10` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command; did **not** close the target; did **not** close or relaunch the Designer. The target `FX_FormPropertyLab11` is **left open and clean** for the next task. **Next task (T3):** change **only** the Form-level Caption to `Form Property Caption Close Only`, ordinary Designer Save exactly once, and prove the Designer returns to a clean state with the Caption retained.

## T3 — Caption edit + ordinary Save (2026-10-02)

Coordinator instruction (T3): on the already-open `FX_FormPropertyLab11`, first re-read and verify the guard state (Name, ScopeType, ScopeName, Caption empty, Description empty, Version/Device Type/Form Type/Is Master equal to the T2 baseline, Designer clean); if any guard differs, stop without mutation. Then edit **only** the Form-level Caption to exactly `Form Property Caption Close Only` using the previously supported property-grid interaction, commit, and perform **exactly one** ordinary Designer Save (no Regenerate Form, no second Save). After Save, prove the Designer is demonstrably clean and re-read all comparison properties (Caption must equal the exact literal; every other property must equal the T2 baseline). Do not close the target, do not close/relaunch the Designer, do not invoke any unload, do not open/change/save User Preferences, do not edit any other property or earlier FX_ artifact.

### T3.1 — Guard re-read (read-only; PASS — identical to T2 baseline)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab11` — **unchanged since T2** (no reload, no scope re-prompt).
- **Loaded target** exactly `FX_FormPropertyLab11` (URL + property store `Name` + active form tab — three agreeing surfaces).
- **Scope** `[ ScopeType: User / ScopeName: <username> ]` (status bar; the live value is masked by the secrets layer in tool output, the ScopeName is the signed-in user per `environments/current-environment.md`).
- **Baseline (all equal to T2.4):** Name `FX_FormPropertyLab11`, Caption **empty**, Description **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Cleanliness:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; both form tabs present (`FX_FormPropertyLab10` untouched + target active).
- **Guard PASS** — no mutation performed until the edit. (evidence `18`.)

### T3.2 — Caption edit (supported Designer property editor)

1. Located the Caption value cell in the property grid `formpropertygrid-1135`: the cell with `data-mgcompname="Design.Caption"` at viewport (870,219) 139×24 — **same cell position family as the EXP-009 T3 Description cell** (one row lower, since Caption is the 3rd Design property).
2. **Double-click** the value cell (native Playwright `mouse.dblclick` at cell center (939.5,231)) → the grid's inline editor opened and was **focused** (`mg-gc-combo2141-inputEl`, an `x-form-text` at the cell position, `x-form-focus` class — a combo-type editor, distinct from the Description editor `textfield-1139-inputEl` used in EXP-009).
3. Typed exactly `Form Property Caption Close Only`, then **Enter** to commit.
4. Post-commit store read: `Caption = "Form Property Caption Close Only"`; **all other Design properties unchanged** (Name, Description empty, Version, Device Type, Form Type, Is Master identical to baseline). Toolbar Save/Regenerate **enabled** (dirty state) — expected after an edit. (evidence `19`.)

### T3.3 — Ordinary Designer Save (exactly one)

- Clicked the toolbar **Save** button (`mgtoolbarbutton-1085`, native Playwright click) — the ordinary Designer Save; **no Regenerate Form**, no menu, no wizard, no unload, **no second Save**.
- Result: **no dialog or window** appeared; toolbar Save and Regenerate returned to **disabled** — the Designer is **clean** again. No error, no confirmation prompt. (evidence `20`.)

### T3.4 — Post-Save verification (all comparison properties re-read)

| Property | T2 baseline | Post-Save (T3) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab11` | `FX_FormPropertyLab11` | ✓ |
| **Caption** | *(empty)* | **`Form Property Caption Close Only`** | ✓ (changed as intended, exact literal — verified character-for-character from the store) |
| **Description** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Caption equals exactly `Form Property Caption Close Only`** (verified character-for-character from the property store, not assumed).
- **All other comparison properties remain equal to the T2 baseline.**
- **Designer is clean:** Save/Regenerate disabled, no visible windows, URL still `?MGForm=FX_FormPropertyLab11`, both form tabs present (`FX_FormPropertyLab10` untouched).
- **Visible UI confirmation:** the target's Form-tab label changed from `FX_FormPropertyLab11` to **`Form Property Caption Close Only`** — the Designer tab strip displays the Caption when one is set (Name fallback only when Caption is empty), an independent visible corroboration that the Caption took effect.
- The target is **left open and clean** (not closed, not reopened).

### T3.5 — T3 evidence (under `evidence/EXP-010/`)

- `18-t3-pre-mutation-guard-pass.png` — Designer before the edit: clean, `?MGForm=FX_FormPropertyLab11`, status bar `[ ScopeType: User / ScopeName: <username> ]`, Properties Design group with Caption empty.
- `19-t3-caption-edited-dirty.png` — After the Caption edit and Enter: Caption cell shows `Form Property Caption Close Only`; toolbar Save/Regenerate enabled (dirty).
- `20-t3-after-save-clean-caption-persisted.png` — After the ordinary Save: toolbar clean (Save/Regenerate disabled), Caption cell still shows `Form Property Caption Close Only`, form tab label now shows the Caption, no dialogs.

### T3.6 — T3 observations / corrections

- **The supported property editor for the Form-level Caption is the inline grid editor** in `formpropertygrid`: double-click the value cell (`data-mgcompname="Design.Caption"`) → an `x-form-text` editor (`mg-gc-combo2141-inputEl` this session — a combo-type input, unlike the Description editor `textfield-1139-inputEl`) opens focused in the cell → type → **Enter** commits to the store. No separate dialog or panel is required for a single-line property like Caption.
- **The Designer Form-tab label reflects the Caption when set** (Name fallback only when Caption is empty) — after the Save, the tab strip shows `Form Property Caption Close Only` for the target while the property store `Name` remains `FX_FormPropertyLab11`. This is a useful visible indicator for later close/reopen verification.
- **Editing a property immediately enables the toolbar Save/Regenerate** (dirty indicator); a successful ordinary Save returns them to disabled (clean) with **no confirmation dialog** in this environment (re-confirmed from EXP-009 T3).
- **The ordinary Save produced no visible confirmation and no error**; cleanliness is proven by the toolbar state (Save/Regenerate disabled) plus the store re-read, not by the absence of an error alone.
- **Only the Caption changed**; every other comparison property is byte-identical to the T2 baseline after the Save.
- No User Preference was inspected or changed; no unload was invoked; no other Form property was edited; `FX_FormPropertyLab10` and all other FX_/non-FX_ artifacts untouched; editing scope stayed **User** throughout; the target was **not** closed or reopened.

### T3.7 — T3 knowledge-state updates

- `FX_FormPropertyLab11` Caption is now exactly `Form Property Caption Close Only`, persisted by exactly one ordinary Designer Save, with the Designer demonstrably clean and all other comparison properties equal to the T2 baseline: **observed** (T3).
- The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure remains **unverified** (creation + baseline + Caption edit/Save only so far; the close/reopen/recovery-verification steps are still pending).

### T3.8 — Stopped here (per instruction, after the Caption edit + ordinary Save)

Did **not** close the target; did **not** close or relaunch the Designer; did **not** invoke `Unload All Global Form Objects` or any other unload; did **not** open, change, or Save any User Preference; did **not** edit any property other than the Caption; did **not** touch `FX_FormPropertyLab10` (still open, clean); did **not** use Regenerate Form; performed **exactly one** ordinary Save. The target `FX_FormPropertyLab11` is **left open and clean** for the next task. **Next task (T4):** close `FX_FormPropertyLab11` using its ordinary Web Designer Form-tab close control (no unload), then deliberately reopen the exact same User-scoped version through a previously verified supported Designer path (Form-menu recent forms or Select Form with explicit record selection), and verify the Caption + all baseline properties recover unchanged.

## T4 — Ordinary Form-tab close of the target (2026-10-02)

Coordinator instruction (T4): re-read `FX_FormPropertyLab11` and verify it is the exact User-scope target, clean, with Caption = `Form Property Caption Close Only` and all comparison properties equal to the T2 baseline; then dismiss **only** the target Form document using its ordinary internal Form-tab × control (do not dismiss `FX_FormPropertyLab10`); do **not** reopen the target during this task; observe whether any unsaved-change prompt appears (AC-5 requires none, because the target is clean); prove the target is no longer among the open Form documents while the workspace remains running and usable; verify `FX_FormPropertyLab10` remains present and untouched; capture AC-5 evidence (pre-action clean target + post-action state with the target absent); record explicitly that no User Preferences were opened/changed and no explicit unload/cache-clear was invoked.

### T4.1 — Guard re-read (read-only; PASS — identical to the T3 post-Save state)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab11` — **unchanged since T3** (no reload, no scope re-prompt).
- **Loaded target** exactly `FX_FormPropertyLab11` (URL + property store `Name` + active form tab label `Form Property Caption Close Only` — three agreeing surfaces).
- **Scope** `[ ScopeType: User / ScopeName: <username> ]` (status bar).
- **All comparison properties equal to the T2 baseline:** Name `FX_FormPropertyLab11`, Caption **`Form Property Caption Close Only`** (exact literal, character-for-character from the store), Description **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows**; two form tabs present (`FX_FormPropertyLab10` + target active).
- **Guard PASS** — no mutation performed until the close. (evidence `21`.)

### T4.2 — Ordinary Form-tab close (the only mutation in T4)

- The Designer form-tab strip uses `x-tab` elements with `mg-form-tab-panel-bar-tab` (the `.x-tab-strip-item` class from the EXP-009 session no longer matches in this session's markup). The target tab is `tab-2008` (an `A` element, classes include `x-tab-closable x-tab-active`, label `Form Property Caption Close Only`); its ordinary close control is `tab-2008-closeEl` (class `x-tab-close-btn`, viewport (688,68) 26×31). The other closable form tab `tab-1383` (`FX_FormPropertyLab10`, close control `tab-1383-closeEl` at (459,68)) was **identified and deliberately left untouched**.
- Clicked `tab-2008-closeEl` once (native Playwright click) — the ordinary internal Form-tab × control. No menu, no keyboard shortcut, no unload command, no browser-level action.
- **Unsaved-change prompt: NONE.** Immediately after the click, the visible-window query returned **zero** visible windows — no "unsaved changes" / discard / confirm dialog of any kind appeared, consistent with AC-5 (the target was clean).
- **Result:** the target form tab `tab-2008` was removed from the form-tab strip; `FX_FormPropertyLab10` (`tab-1383`) became the sole and active form tab; the Designer page URL updated in place to `?MGForm=FX_FormPropertyLab10` (same Designer document, no page reload, no new tab/window); toolbar Save/Regenerate remained **disabled** (clean); status bar still `[ ScopeType: User / ScopeName: <username> ]`. (evidence `22`.)

### T4.3 — Post-close verification

- **Target absent from open Form documents:** the form-tab strip contains exactly one form tab — `FX_FormPropertyLab10` (`tab-1383`, active). No tab, panel, or store entry references `FX_FormPropertyLab11` as an open document.
- **Workspace running and usable:** the Designer page remains loaded and interactive (same browser tab, same session); the URL now reflects the remaining open form; the toolbar, property grid, and status bar all render normally; no error state.
- **`FX_FormPropertyLab10` present and untouched:** re-read via the property grid — Name `FX_FormPropertyLab10`, Description `Form Property Description New Designer Client Replay` (its own EXP-009-R2 value, unchanged), Caption **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`; toolbar clean; no visible windows.
- **No User Preferences were opened, changed, or saved** in T4.
- **No explicit unload / cache-clear / metadata command was invoked** in T4 (no `Unload All Global Form Objects`, no Form > Definition action, no preference-driven unload).
- The target `FX_FormPropertyLab11` was **not reopened** during T4 and is **left not open** for the subsequent deliberate-reopen task.

### T4.4 — T4 evidence (under `evidence/EXP-010/`)

- `21-t4-pre-close-guard-pass.png` — Designer before the close: target tab active with Caption label, Properties Design group showing Caption `Form Property Caption Close Only`, toolbar clean, `FX_FormPropertyLab10` tab present.
- `22-t4-target-form-tab-closed.png` — After the × click: form-tab strip shows only `FX_FormPropertyLab10` (active); Properties grid shows the Lab10 baseline; toolbar clean; no dialogs; URL `?MGForm=FX_FormPropertyLab10`.

### T4.5 — T4 observations / corrections

- **Closing a clean Form document via its ordinary Form-tab × produces no prompt and no dialog** in this environment — the tab is removed silently and the remaining form tab becomes active (re-confirmed for a second form after EXP-009 T4).
- **The Designer form-tab strip markup differs between sessions:** EXP-009's `.x-tab-strip-item` selector matched then; in this session the tabs are plain `.x-tab` elements carrying `mg-form-tab-panel-bar-tab`, with the close control as a child `.x-tab-close-btn` (`tab-NNNN-closeEl`). Locator strategy: match the tab by its visible label, then click its own `closeEl` — never a fixed coordinate.
- **Closing the last-but-one form tab does not close the Designer:** the Designer document stays open with the remaining form; the URL `MGForm=` parameter follows the newly active form.
- **No stronger lifecycle claim is made:** T4 proves only that the ordinary Form-tab close removed the target document from the open set without a prompt; it says nothing about Forms-database provenance, Form/global-object cache eviction, or IDO-metadata unloading.

### T4.6 — T4 knowledge-state updates

- Ordinary Form-tab × close of a **clean** `FX_FormPropertyLab11` removed it from the open Form documents with **no unsaved-change prompt**, no dialog, and no unload, while the workspace stayed running and `FX_FormPropertyLab10` remained present and untouched: **observed** (T4).
- The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure remains **unverified** (creation + baseline + Caption edit/Save + close done; the deliberate reopen + recovery-verification steps are still pending).

### T4.7 — Stopped here (per instruction, after the ordinary Form-tab close)

Did **not** reopen `FX_FormPropertyLab11`; did **not** close or relaunch the Designer; did **not** dismiss `FX_FormPropertyLab10`; did **not** invoke `Unload All Global Form Objects` or any other unload/cache-clear/metadata command; did **not** open, change, or Save any User Preference; did **not** edit or Save any Form; did **not** create any Form; did **not** log out/in or restart anything. The target `FX_FormPropertyLab11` is **left not open** for the next task. **Next task (T5):** deliberately reopen the exact same User-scoped `FX_FormPropertyLab11` through a previously verified supported Designer path (Form-menu recent forms, or Select Form with explicit record selection) and verify the Caption + all baseline properties recover unchanged.

## T5 — Deliberate reopen + Caption/baseline recovery verification (2026-10-02)

Coordinator instruction (T5): verify the T4 postcondition state (workspace active, target not open, `FX_FormPropertyLab10` present and untouched); deliberately reopen `FX_FormPropertyLab11` through a previously verified supported Designer path (prefer the Form-menu recent-forms entry if the exact target is clearly identifiable; otherwise Select Form with explicit record selection; no direct target-URL navigation); prove the scoped identity is exactly Name=`FX_FormPropertyLab11`, ScopeType=`User`, ScopeName=`anton.ramos@3mworks.com.ph`; perform a read-only comparison against the T2 baseline (Caption must equal `Form Property Caption Close Only`; Description empty; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; Name/ScopeType/ScopeName unchanged); prove the reopened target is clean (no pending unsaved state or dialog); make no edits and no Save/write action; capture AC-7/AC-8 evidence; record that no preference UI or explicit unload/cache-clear command was used; leave the target open and clean for the final audit.

### T5.1 — T4 postcondition re-verification (read-only; PASS)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab10` — **unchanged since T4** (no reload, no scope re-prompt).
- **Target not open:** the form-tab strip contained exactly one form tab — `FX_FormPropertyLab10` (`tab-1383`, active). No tab, panel, or store entry referenced `FX_FormPropertyLab11` as an open document.
- **`FX_FormPropertyLab10` present and untouched:** property grid re-read — Name `FX_FormPropertyLab10`, Description `Form Property Description New Designer Client Replay` (its own EXP-009-R2 value), Caption **empty**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Workspace running and usable:** toolbar clean (Save/Regenerate disabled), status bar `[ ScopeType: User / ScopeName: <username> ]`, no visible windows.
- **T4 postcondition PASS** — no mutation performed until the reopen. (evidence `23`.)

### T5.2 — Deliberate reopen via the supported Form-menu recent-forms path

- Opened the Designer **Form** menu (top menu bar: Form / Edit / View / Help). The menu's recent-forms section listed, in order: **`FX_FormPropertyLab11`** (exact target, clearly identifiable by Name) and `FX_FormPropertyLab10`. (evidence `24`.)
- Clicked the **`FX_FormPropertyLab11`** recent-forms menu item once (native Playwright click on `#menuitem-1073-itemEl`). **No direct target-URL navigation was used** — the Designer document was not reloaded; the URL `MGForm=` parameter followed the newly active form in place.
- **Result:** the target reopened as a new form tab `tab-2186` (label `Form Property Caption Close Only` — the tab strip displays the Caption when set), becoming the active form; `FX_FormPropertyLab10` (`tab-1383`) remained present and inactive; the Designer page stayed loaded (same browser tab, same session); no dialog, no prompt, no error. (evidence `25`.)

### T5.3 — Scoped identity + read-only baseline comparison (reopened target)

**Scoped identity (all three surfaces agree):**

| Identity field | Expected | Observed (reopened) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab11` | `FX_FormPropertyLab11` (property store `Design.Name`) | ✓ |
| **ScopeType** | `User` | `User` (status bar) | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` (status bar; live value masked by the secrets layer in tool output) | ✓ |

**Read-only comparison against the T2 baseline (no edits, no Save):**

| Property | T2 baseline | Reopened (T5) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab11` | `FX_FormPropertyLab11` | ✓ |
| **Caption** | *(empty)* → changed in T3 to `Form Property Caption Close Only` | **`Form Property Caption Close Only`** | ✓ **recovered unchanged** (exact literal, character-for-character from the property store) |
| **Description** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **The Caption `Form Property Caption Close Only` recovered unchanged across the ordinary Form-tab close/reopen boundary** — this is the core AC-7/AC-8 semantic postcondition of EXP-010.
- **Every other comparison property remains equal to the T2 baseline.**
- **The reopened target is clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows/dialogs**; no pending unsaved state.
- **No edits were made and no Save or other write action was performed** in T5 (read-only verification only).
- **No User Preferences were opened, changed, or saved** in T5; **no explicit unload / cache-clear / metadata command was invoked** (no `Unload All Global Form Objects`, no Form > Definition action, no preference-driven unload).
- `FX_FormPropertyLab10` remains present and untouched (still an open, inactive form tab).

### T5.4 — T5 evidence (under `evidence/EXP-010/`)

- `23-t5-pre-reopen-state.png` — Designer before the reopen: single form tab `FX_FormPropertyLab10` (active), Properties grid showing the Lab10 baseline, toolbar clean, no dialogs.
- `24-t5-form-menu-recent-forms.png` — The Form menu open, recent-forms section showing `FX_FormPropertyLab11` (exact target) and `FX_FormPropertyLab10`.
- `25-t5-reopened-caption-recovered-clean.png` — After the reopen: two form tabs (`FX_FormPropertyLab10` inactive + target active, tab label `Form Property Caption Close Only`); Properties Design group showing Caption `Form Property Caption Close Only`, Name `FX_FormPropertyLab11`, Description empty; toolbar clean (Save/Regenerate disabled); no dialogs; URL `?MGForm=FX_FormPropertyLab11`.

### T5.5 — T5 observations / corrections

- **The Form-menu recent-forms path is a supported, previously verified Designer reopen path** (also used in EXP-009/EXP-009-R2): the recently opened Forms appear as menu items under the Form menu; clicking the exact target reopens it in the same Designer document without a page reload, without a direct URL, and without any dialog.
- **The reopened target's form tab carries a fresh tab id** (`tab-2186`, versus the pre-close `tab-2008`) — the tab is re-created on reopen, but the underlying scoped Form identity (Name + ScopeType + ScopeName) and all Design properties are the same.
- **Caption recovery is a UI-level observation only:** T5 proves the Caption value is present and unchanged in the reopened Designer document. It does **not** prove Forms-database provenance, Form/global-object cache eviction, or IDO-metadata unloading/non-unloading; no such claim is made.
- **The tab-strip label shows the Caption** (`Form Property Caption Close Only`) for the reopened target, independently corroborating the Caption's presence at the UI level.
- **No unsaved state, no dialog, no prompt** accompanied the reopen; the Designer returned to a clean state with the target active.

### T5.6 — T5 knowledge-state updates

- The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure is now **observed** end-to-end (creation + baseline + Caption edit/one Save + ordinary close + deliberate reopen via Form-menu recent forms + Caption/baseline recovery verification). It is **not yet verified** (a single successful execution; repeatable execution + persistence verification across an independent session would be required to promote it to verified).
- The Form-menu recent-forms entry is a **supported, previously verified Designer reopen path** that reopens a scoped Form in the same Designer document without a page reload, direct URL, or dialog: **observed** (re-confirmed in T5).
- The reopened target's Caption `Form Property Caption Close Only` and all comparison properties equal the T2 baseline / T3 post-Save state: **observed** (T5).

### T5.7 — Stopped here (per instruction, after the deliberate reopen + recovery verification)

Did **not** edit or Save any Form; did **not** create any Form; did **not** invoke `Unload All Global Form Objects` or any other unload/cache-clear/metadata command; did **not** open, change, or Save any User Preference; did **not** modify `FX_FormPropertyLab10` (still open, inactive, untouched); did **not** close or relaunch the Designer; did **not** log out/in or restart anything; did **not** use a direct target-URL navigation. The target `FX_FormPropertyLab11` is **left open and clean** (active form tab `tab-2186`, URL `?MGForm=FX_FormPropertyLab11`) for the final audit.

## T6 — Final read-only audit (2026-10-02)

Coordinator instruction (T6): perform the final read-only audit for EXP-010 only. Make no Mongoose writes. Re-read the currently open `FX_FormPropertyLab11` and verify it remains clean with Name=`FX_FormPropertyLab11`, Caption=`Form Property Caption Close Only`, Description empty, Version=`User version for user anton.ramos@3mworks.com.ph`, Device Type=`Default`, Form Type=`Normal`, Is Master=`True`, ScopeType=`User`, ScopeName=`anton.ramos@3mworks.com.ph`. Using a supported read-only Form inventory check, prove exactly one case-insensitive `FX_FormPropertyLab11` record exists and record the final total and `FX_` counts. Audit the complete EXP-010 controlled-action record and evidence to establish that after the single ordinary Save in T3 there was no additional Save or other Form write; no explicit `Unload All Global Form Objects` or other deliberate metadata/cache-clear command was invoked anywhere in EXP-010; and no User Preferences surface was opened, changed, or saved (a record-based action audit only — no claim about automatic IDO-metadata behavior). Audit the repository/worktree against the T1 baseline and prove EXP-010-attributable changes are confined to this record + `evidence/EXP-010/`; identify any unrelated controller/runtime changes separately. Capture any additional read-only screenshots/diagnostics under `evidence/EXP-010/`. Update only this record with the final audit, complete AC-1…AC-10 table, evidence mapping, result, and knowledge classification (the end-to-end Caption-recovery finding is classified no higher than `observed`, because this is not a replay). Leave the target open and clean.

### T6.1 — Re-read of the currently open target (read-only; PASS — clean, all properties intact)

- Tabs (same session; state persisted): Tab 0 Web Client clean; Tab 1 stray dead portal-root tab (unchanged); Tab 2 (current) Designer `?MGForm=FX_FormPropertyLab11` — **unchanged since T5** (no reload, no scope re-prompt).
- **Loaded target** exactly `FX_FormPropertyLab11` (URL + property store `Design.Name` + active form tab label `Form Property Caption Close Only` — three agreeing surfaces).
- **Scoped identity:** ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph` (status bar `[ ScopeType: User / ScopeName: <username> ]`; live value masked by the secrets layer in tool output).
- **All comparison properties intact (re-read from the property store `formpropertygrid-1135`):**

| Property | Expected (T2 baseline / T3 post-Save) | Observed (T6) | Match |
|---|---|---|---|
| **Name** | `FX_FormPropertyLab11` | `FX_FormPropertyLab11` | ✓ |
| **Caption** | `Form Property Caption Close Only` | `Form Property Caption Close Only` | ✓ (exact literal, character-for-character) |
| **Description** | *(empty)* | *(empty)* | ✓ |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| **Device Type** | `Default` | `Default` | ✓ |
| **Form Type** | `Normal` | `Normal` | ✓ |
| **Is Master** | `True` | `True` | ✓ |
| **ScopeType** | `User` | `User` | ✓ |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ |

- **Clean:** toolbar Save (`mgtoolbarbutton-1085`) and Regenerate (`mgtoolbarbutton-1086`) both **disabled**; **no visible windows/dialogs**; no pending unsaved state.
- **Open:** active form tab `tab-2186` (label `Form Property Caption Close Only`); `FX_FormPropertyLab10` (`tab-1383`) present and inactive. (evidence `28`.)

### T6.2 — Read-only Form inventory check (supported Select Form dialog; exactly one target)

- Switched to the Web Client (Tab 0), confirmed clean (Open enabled, Save disabled, no form tabs, no windows), and opened the **Select Form** dialog (`ext-comp-1135`, grid `grid-1136`) via the Open button (`mgtoolbarbutton-1101`, native click).
- **Store-level scan (authoritative):** full store = **647 records**. For `FX_FormPropertyLab11`: Name field (`mgdata`) exact = **1**, case-insensitive = **1**; Caption field (`text`) exact = **1**, case-insensitive = **1**; near-miss (case-insensitive substring) = **1** — all the **same single record** `{mgdata:"FX_FormPropertyLab11", text:"FX_FormPropertyLab11", id:"extModel214-5164"}`. **Distinct matching records = 1.**
- **`FX_`-prefixed forms = 16** (the 15 pre-existing + the new target): `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, **`FX_FormPropertyLab11`**, `FX_FormPropertyLab10`, `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01`.
- **UI-level confirmation:** filter `FX_FormPropertyLab11` → **exactly 1 row** (evidence `26`); filter `FX_` → **exactly 16 rows** (evidence `27`).
- **Final counts: total forms = 647; `FX_` forms = 16; target `FX_FormPropertyLab11` = exactly 1.**
- **Observation (no mechanism claim):** in the Select Form dialog the target's **Caption column shows the Name fallback** (`FX_FormPropertyLab11`), whereas the Designer property grid (the authoritative form definition) shows the Caption as `Form Property Caption Close Only`. This matches the known observed projection divergence recorded in EXP-006-R2 (the Web Client form-list projection shows the Name fallback while the persisted form definition shows the Caption). Forms with a Caption set in earlier sessions (e.g. `FX_FormPropertyLab02` → `Form Property Lab Replay`) do show their Caption in the same column. **No claim is made about the mechanism** (cache, projection refresh, or otherwise); the Caption's persistence is established by the Designer property grid, not by this list projection.
- Dialog restored to its original state (filter cleared, Case Sensitive off, Starts With off, 647 records) and closed via **Cancel** (`button-1150`); the Web Client returned to a clean state (no windows, Save disabled, no form tabs).

### T6.3 — Controlled-action audit (record-based; no Mongoose writes)

A full read of this record (T1–T5) plus targeted content scans establishes the following for the **entire EXP-010 run**:

- **After the single ordinary Save in T3, there was no additional Save or other Form write.** The only Save in the run is T3.3 ("Clicked the toolbar **Save** button … the ordinary Designer Save; **no Regenerate Form**, no menu, no wizard, no unload, **no second Save**"); T3.8 records "performed **exactly one** ordinary Save." T4 and T5 are explicitly read-only with respect to writes: T4.7 "did **not** edit or Save any Form"; T5.3 "No edits were made and no Save or other write action was performed in T5 (read-only verification only)"; T5.7 "did **not** edit or Save any Form." No Regenerate Form was performed in any task.
- **No explicit `Unload All Global Form Objects` or other deliberate metadata/cache-clear command was invoked anywhere in EXP-010.** Every occurrence of the unload/cache-clear terminology in this record is in a "did **not** invoke" or out-of-scope context (T1.131, T3.8/290, T4.3/318, T4.7/340, T5.3/388, T5.7/413, and the Objective/out-of-scope statements). The `Form > Definition` menu (which contains the prohibited unload) was **never opened** in any task.
- **No User Preferences surface was opened, changed, or saved in any task.** T1.131 "did **not** open, change, or Save any User Preference"; T2.7 "No User Preference was inspected or changed"; T3.6 "No User Preference was inspected or changed"; T4.3 "No User Preferences were opened, changed, or saved in T4"; T5.3 "No User Preferences were opened, changed, or saved in T5"; T5.7 "did **not** open, change, or Save any User Preference."
- **This is a record-based action audit only.** It makes **no claim about automatic IDO-metadata behavior** (loading, unloading, caching, or eviction). The `Unload IDO Metadata With Forms` preference was **not** inspected in this experiment (opening User Preferences was prohibited); no claim about it is made or needed.

### T6.4 — Repository / worktree audit against the T1 baseline

- **`git status --porcelain`** (branch `exp/EXP-010`, HEAD `56b3c8f` — unchanged from the T1 baseline) shows **exactly two entries**, both untracked and both EXP-010-attributable:
  - `?? evidence/EXP-010/` (25 screenshots, `01`–`25`, all with mtimes inside the run window 2026-10-02 23:45 → 2026-10-03 00:14)
  - `?? experiments/EXP-010-form-caption-recovery-across-ordinary-web-designer.md` (this record)
- **No modified tracked files** (no `M` entries) and **no other untracked files** — i.e., **no unrelated controller/runtime changes** are present in the worktree.
- **Key file mtimes all predate the run start (2026-10-02 23:42:38):** `AGENTS.md` (9/30 02:12), `opencode.json` (9/30 02:23), `README.md` (10/2 22:54), `environments/current-environment.md` (9/30 14:41), `recipes/forms/create-basic-form.md` (9/30 15:35).
- **Other experiment records:** the most recent other than this one is `EXP-009-R2-…` (mtime 10/2 23:42:33 — its finalization, committed as `57e88f6`, 5 s before the run start); no other experiment record was modified.
- **Conclusion:** EXP-010-attributable changes are **confined to** `experiments/EXP-010-form-caption-recovery-across-ordinary-web-designer.md` and `evidence/EXP-010/`. No recipe, environment file, `AGENTS.md`, other experiment record, or unrelated project file was modified. **No unrelated controller/runtime changes were found** to report separately.

### T6.5 — T6 evidence (under `evidence/EXP-010/`)

- `26-t6-select-form-lab11-exactly-one.png` — Select Form dialog filtered to `FX_FormPropertyLab11` → exactly 1 row (the target; Caption column shows the Name fallback).
- `27-t6-select-form-fx-inventory-sixteen.png` — Select Form dialog filtered to `FX_` → exactly 16 `FX_` rows including `FX_FormPropertyLab11`.
- `28-t6-final-target-open-clean.png` — Final Designer state: target open and clean (active tab label `Form Property Caption Close Only`; Properties Design group showing Caption `Form Property Caption Close Only`, Name `FX_FormPropertyLab11`, Description empty; toolbar clean; `FX_FormPropertyLab10` tab present; no dialogs).

### T6.6 — Complete AC-1 … AC-10 table (final)

| AC | Requirement | Result | Task | Evidence |
|---|---|---|---|---|
| **AC-1** | Read-only preflight confirming editing scope is **User** and `FX_FormPropertyLab11` is **absent** (exact + case-insensitive) | **PASS** — scope User (status bar); target absent: store scan 646 records 0/0 Name + 0/0 Caption (exact + CI), 0 near-miss; UI filter 0 rows both case modes; positive control 10 rows | T1 | `01`–`08`; target-absence table |
| **AC-2** | Create **exactly one** new User-scope classic BuildFromScratch Form `FX_FormPropertyLab11` via the verified recipe, **Save Template unchecked** | **PASS** — exactly one created; store 646→647, `FX_` 15→16; Save Template `getValue()` true→false; no template artifact | T2 | `09`–`17` |
| **AC-3** | Record the **untouched baseline** (Name, Caption, Description, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) | **PASS** — full baseline recorded (Caption empty, Description empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`) | T2.4 | `14`, `15`; T2.4 table |
| **AC-4** | Change **only** the Form-level Caption to exactly `Form Property Caption Close Only` | **PASS** — Caption empty→`Form Property Caption Close Only` (char-for-char) via the inline grid editor; all other properties unchanged | T3.2 | `18`, `19` |
| **AC-5** | Perform **exactly one** ordinary Designer Save after the Caption edit and prove the Designer returns to a **clean** state | **PASS** — exactly one ordinary Save (no Regenerate, no second Save); Save/Regenerate disabled (clean); Caption retained. (This clean state is what makes the subsequent close, AC-6, prompt-free — the coordinator's T4 "AC-5 requires no such prompt" refers to this corollary.) | T3.3 | `20`; T3.4 table |
| **AC-6** | Close **only** `FX_FormPropertyLab11` through its ordinary Designer Form-tab close control | **PASS** — ordinary Form-tab × close (`tab-2008-closeEl`); **no unsaved-change prompt** (target was clean per AC-5); target removed from the open set; workspace stayed running; `FX_FormPropertyLab10` untouched | T4.2 | `21`, `22` |
| **AC-7** | Reopen `FX_FormPropertyLab11` through a **previously verified supported Designer path** | **PASS** — reopened via the **Form-menu recent-forms** entry (exact target clearly identifiable); no direct URL, no page reload, no dialog | T5.2 | `23`, `24`, `25` |
| **AC-8** | Verify the reopened version by **Name + ScopeType + ScopeName** and compare **Caption + every recorded baseline property** | **PASS** — scoped identity Name `FX_FormPropertyLab11` / ScopeType `User` / ScopeName `anton.ramos@3mworks.com.ph`; Caption **recovered unchanged** = `Form Property Caption Close Only`; all other comparison properties equal the T2 baseline; target clean | T5.3 | `25`; T5.3 tables |
| **AC-9** | Capture screenshots and read-only diagnostics under `evidence/EXP-010/` proving the semantic postconditions | **PASS** — 28 screenshots (`01`–`28`) covering preflight, creation, baseline, Caption edit/Save, close, reopen, recovery, and the final audit | T1–T6 | `01`–`28` |
| **AC-10** | Update **only** the EXP-010 record and its evidence directory (worktree confined) | **PASS** — `git status` shows only `?? evidence/EXP-010/` + `?? experiments/EXP-010-…md`; no modified tracked files; no unrelated controller/runtime changes; all key files/other records predate the run | T6.4 | git status; mtime audit |

**All ten acceptance checks (AC-1 … AC-10) are fully evidenced and PASS.**

### T6.7 — Result + knowledge classification

- **Result: EXP-010 is COMPLETE.** A new User-scope classic BuildFromScratch Form `FX_FormPropertyLab11` was created (exactly one), its untouched baseline recorded, its Form-level Caption changed to exactly `Form Property Caption Close Only` and persisted by exactly one ordinary Save to a demonstrably clean state, the target closed through its ordinary Form-tab close control with no unsaved-change prompt, and the exact same User-scoped version deliberately reopened through the supported Form-menu recent-forms path. The Caption **recovered unchanged** and every recorded comparison property remained equal to the T2 baseline across the ordinary Form-tab close/reopen boundary, with the target left clean.
- **Scope of the claim (explicit non-claims):** this establishes **only UI-level Caption recovery across this ordinary Form-tab close/reopen boundary** within the same Web Designer client instance and the same authenticated Web Client session. It is **not** classified as proof of Forms-database provenance, Form/global-object cache eviction, IDO-metadata unloading or non-unloading, or any stronger lifecycle/session boundary. No such claim is made.
- **Knowledge classification:**
  - The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure (creation + baseline + Caption edit/one ordinary Save + ordinary Form-tab close + deliberate reopen via Form-menu recent forms + Caption/baseline recovery verification) is **`observed`** — a single successful controlled execution. It is **not** promoted to `replay_verified` / `verified`, because this is **not a replay** (no independent second execution on a new target has been performed). Promotion requires a later clean independent replay.
  - The Form-menu recent-forms entry as a **supported Designer reopen path** (reopens a scoped Form in the same Designer document without a page reload, direct URL, or dialog): **`observed`** (re-confirmed in T5).
  - The Select Form store final counts (647 total / 16 `FX_` / exactly one `FX_FormPropertyLab11`) and the target's clean, Caption-intact final state: **`observed`** (T6).
  - The Web Client Select Form Caption-column Name-fallback projection for the target (vs the Designer's authoritative Caption): **`observed`** (T6; mechanism not claimed; consistent with the EXP-006-R2 divergence).

### T6.8 — Stopped here (final audit complete)

T6 made **no Mongoose writes**: no Form was edited or Saved, no Form was created, no User Preference was opened/changed/Saved, no unload/cache-clear/metadata command was invoked, no scope was changed, no logout/login, no new Designer instance, and no other project file was modified. The only actions were read-only browser inspections (property-store reads, Select Form inventory opened and closed via Cancel), read-only git/mtime audits, and capture of three read-only screenshots (`26`–`28`). The target `FX_FormPropertyLab11` is **left open and clean** (active form tab `tab-2186`, URL `?MGForm=FX_FormPropertyLab11`, Caption `Form Property Caption Close Only`, all comparison properties intact, toolbar clean, no dialogs). **EXP-010 is complete; every acceptance check AC-1 … AC-10 is fully evidenced.**