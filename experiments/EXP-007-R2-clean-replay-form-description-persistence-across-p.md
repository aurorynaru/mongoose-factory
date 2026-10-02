# EXP-007-R2 — Clean Replay: Form Description Persistence Across Previously Verified Unload Sequence (FX_FormPropertyLab06)

Status: **COMPLETE — replay_verified (all acceptance checks AC-1…AC-10 PASS). T10 (final read-only audit) done: Designer clean + AC-8 values intact; inventory 642 total / 11 `FX_` / exactly one `FX_FormPropertyLab06` (exact + case-insensitive); `Unload IDO Metadata With Forms` re-read CHECKED/enabled and unchanged (closed without Save); repository changes confined to this record + `evidence/EXP-007-R2/` (no recipe/environment/AGENTS.md/other-experiment change). The EXP-007 Form-Description-persistence-across-the-verified-coupled-unload procedure is replay_verified (second independent clean execution on `FX_FormPropertyLab06`; no generalization beyond the tested environment/workflow).** T1 (read-only preflight), T2 (creation + untouched baseline), and T3 (Description edit + ordinary Save to clean) COMPLETE. T1: AC-1 fully PROVEN (target `FX_FormPropertyLab06` absent: 0 exact / 0 case-insensitive in Name and Caption, store- and UI-level); store 641 / `FX_` 10 / target 0; Designer scope confirmed **User**; `Unload IDO Metadata With Forms` read **CHECKED/enabled** (gate PASS, read-only, no preference mutation); repository baseline captured. T2: exactly one new User-scope classic BuildFromScratch Form `FX_FormPropertyLab06` created via the verified recipe (Save Template unchecked); store 641→642, `FX_` 10→11, exactly one target (UI + store); full pre-Description baseline recorded (Description **empty**, Caption empty, Version `User version for user <user>`, Device Type `Default`, Form Type `Normal`, Is Master `True`); `FX_FormPropertyLab04`/`FX_FormPropertyLab05` left untouched. T3: guard re-read PASS (exact target + baseline); **only** the Form-level Description changed to `Form Property Description Lab Replay` via the supported double-click cell editor (Enter to commit); one ordinary Designer Save (`DesignerSession/SaveChanges` → 200) returned the Designer to a demonstrably clean state (Save disabled, no dialog); post-Save re-read confirms Description = `Form Property Description Lab Replay` and every comparison property (Name/Caption/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName) equals the T2 baseline — **AC-4 fully satisfied**; `FX_FormPropertyLab06` left open and clean. T5 (close target + read preference gate) COMPLETE: target re-verified (exact User-scope version, clean, Description `Form Property Description Lab Replay`), closed via its form-tab × (no unsaved-change prompt; no longer open in Designer; `FX_FormPropertyLab04`/`FX_FormPropertyLab05` untouched); `Unload IDO Metadata With Forms` read **CHECKED/enabled** (`checked:true`/`getValue():true`, read-only, no change/Save) → **preference gate PASS**; User Preferences closed via × with no save prompt and no unsaved state. **Two findings:** (a) UI change — in this build the User Preferences dialog opens from the Designer **View** menu (not Form) and exposes only the **Designer** and **Form Metrics** pages; the **Behavior** page with the *visible* checkbox (T1/EXP-007 T4) is not reachable (checkbox is a hidden component) — value still authoritatively confirmed CHECKED; (b) a **near-miss** — lingering open menus caused an accidental **Delete** prompt on `FX_FormPropertyLab05`, immediately cancelled (No); recovery verification confirmed store 642 and all of Lab04/05/06 intact (no deletion). Unload NOT yet invoked. **AC-5 (visible preference gate) FULLY SATISFIED (cycle 7):** via the T1-supported Web Client `Form > User Preferences` route (Behavior page), `Unload IDO Metadata With Forms` was **visibly rendered** (non-zero rect `x:770,y:119,w:320,h:27`) and read **CHECKED/enabled** (`getValue():true`), closed without Save, no unsaved state; this **supersedes the T5.5 'not reachable' misdiagnosis** (that used the Designer `View` menu — a different floating-dialog UI). `FX_FormPropertyLab06` confirmed closed; `FX_FormPropertyLab04`/`05` confirmed open/clean/untouched. **AC-6 (single unload) FULLY SATISFIED (cycle 9):** preconditions verified (target closed, no prefs UI, Designer clean, Lab04/05 untouched); exact label `Unload All Global Form Objects` freshly re-observed under Designer `Form > Definition` (evidence `48`) and invoked **exactly once**; post-action clean (no error/toast, Designer clean, target still closed, evidence `49`); single new `ClearCache` #150 `{"Success":true}` (diagnostic corroboration only; historical #95/#116 from prior save/close). Target NOT reopened [at T7]; no preference change; Lab04/05 untouched. **AC-7/AC-8 (post-unload reopen + compare) FULLY SATISFIED (cycle 10):** reopened exactly `FX_FormPropertyLab06` via Designer `Form`-menu recent-forms entry (single click, no prompt; URL `MGForm=FX_FormPropertyLab06`); scoped identity PROVEN (ScopeType=`User`, ScopeName=`anton.ramos@3mworks.com.ph`); Design-store read (`formpropertygrid-1135`, formId 119) confirms Description = `Form Property Description Lab Replay` (PERSISTED across the coupled unload; empty at T2 baseline) and every comparison property (Name/Caption/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName) unchanged vs T2 baseline; Designer clean (Save/Regen/Undo/Redo disabled), console 0 errors; `FX_FormPropertyLab04`/`05` untouched; target left open and clean for final audit (evidence `50`). **T9 (read-only T8 reconciliation, cycle 11):** AC-7/AC-8 independently re-verified (fresh read-only snapshot identical to evidence `50` + Design-store re-read: Description exact match length 36, Caption empty, all comparison properties unchanged, Designer clean); **no discrepancy**; `FX_FormPropertyLab06` left open/clean.**
Date: 2026-10-02
Mode: LEARNING MODE — clean replay in a fresh worker context of the EXP-007 Description-persistence procedure on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab06`.
Purpose: Replay the EXP-007 Description-persistence procedure on a new form: create `FX_FormPropertyLab06` via the verified basic-form recipe, change only its Form-level Description to `Form Property Description Lab Replay`, ordinary-save to clean, close, read (not change) `Unload IDO Metadata With Forms` and require it CHECKED/enabled before proceeding, invoke `Form > Definition > Unload All Global Form Objects` exactly once, reopen the same User-scope version, and verify Description persistence + unchanged comparison properties. If every acceptance check passes, classify the EXP-007 Description-persistence procedure as **replay_verified** at the factory/harness level (no generalization beyond the tested environment and workflow). If the preference is not CHECKED before the unload, the replay stops as **BLOCKED** without changing it or invoking the unload.
Run: `R-20261002-135829-sjDK` (cycle 1 T1, cycle 2 T2, cycle 4 T3), started 2026-10-02 13:58:29.

## Objective

In a fresh worker context, prove that `FX_FormPropertyLab06` does not already exist, create exactly one new User-scope classic BuildFromScratch Form using the verified basic-form recipe, record its scoped identity and baseline Form properties, intentionally edit only the Form-level Description to `Form Property Description Lab Replay`, ordinary-save to a clean state, close the target, read but do not modify `Unload IDO Metadata With Forms` and continue only if it is CHECKED/enabled, invoke Form > Definition > Unload All Global Form Objects exactly once, then reopen the exact same Form Name + ScopeType=User + ScopeName version and verify that Description persisted while all recorded comparison properties remained unchanged. Finish with a read-only uniqueness, preference, and repository-scope audit. If every acceptance check passes, classify the EXP-007 Description-persistence procedure as replay_verified at the factory/harness level; do not generalize beyond the tested environment and workflow.

In scope: read current browser, Designer, Select Form, preference, and repository state before mutation; prove `FX_FormPropertyLab06` is absent (exact + case-insensitive) before creation; create exactly one new User-scope classic BuildFromScratch Form named `FX_FormPropertyLab06` using `recipes/forms/create-basic-form.md` with Save Template unchecked; record baseline Form Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, and Is Master before editing Description; edit only the Form-level Description to `Form Property Description Lab Replay` using the supported Designer property editor; ordinary Designer Save with clean-state proof; close the target through supported Designer UI; read (not change) `Unload IDO Metadata With Forms` and continue only if CHECKED/enabled; invoke `Form > Definition > Unload All Global Form Objects` exactly once; reopen exactly `FX_FormPropertyLab06` (ScopeType=User, same ScopeName); verify Description persistence and compare all recorded non-Description properties with baseline; record evidence under `evidence/EXP-007-R2/`; final read-only audit of target uniqueness, preference state, Designer clean state, and experiment-attributable repository changes.

Out of scope: any continuation, workaround, retest, or diagnosis of EXP-004 Form-variable persistence; Caption editing or Caption persistence testing beyond recording Caption as an unchanged comparison property; Translatable Strings, localization, multilingual behavior, or string-resource creation; testing Description behavior under any scope other than User; testing a different user, tenant, configuration, Mongoose release, cache boundary, or preference state; investigating whether ordinary Form close, explicit global-object unload, or both cause IDO metadata unloading; investigating `/DesignerSession/ClearCache` internals or treating that endpoint as a supported API contract; components, component placement or configuration, collections, bindings, validators, event handlers, scripts, methods, expressions, data sources, or IDO configuration; editing `FX_FormPropertyLab01`–`FX_FormPropertyLab05` or any other pre-existing Form; creating or modifying a reusable Description recipe during this replay; generalizing successful Caption or Description persistence to all Form metadata or subordinate objects.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Web Client iframe title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`).
- Browser state at preflight start (inspected first; **no login performed — session already authenticated**): three tabs:
  - Tab 0: Mongoose Web Client (portal), signed in — user badge present (value masked by the secrets layer, not read or printed); **no form open** (no form tabs); toolbar **clean** (Save `mgtoolbarbutton-1102` disabled); **no** visible Ext windows; **no** `portal-notification` banner. URL carries the leftover `favoriteContext=UserPreferences` param from the EXP-007 T4/T7 User-Preferences reads (display-only; no form tab exists for it).
  - Tab 1: **stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (empty title) — the long-standing leftover of the EXP-006 T8 SLO-recovery navigation; **not re-verified in this preflight** (no navigation performed). Not a Designer tab.
  - Tab 2: **Web Designer tab open** at `WSWebClient/designer/Default.aspx?…&MGForm=FX_FormPropertyLab05` — `FX_FormPropertyLab05` was **left open and clean** by EXP-007 T6/T7 (post-unload reopen + final audit) and was not closed at the end of that experiment. Read-only inspection in this preflight: status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar **clean** (Save/Regenerate/Undo/Redo disabled), no visible windows. Two form tabs present: `Form Property Lab Coupled Unload Replay` (= `FX_FormPropertyLab04`, also left open by EXP-006-R2/EXP-007) and `FX_FormPropertyLab05` (active per URL). **Neither was touched** in this preflight.
- **Target form `FX_FormPropertyLab06` does NOT exist** — full Select Form store scan (641 records) found 0 exact and 0 case-insensitive matches in both the Name (`mgdata`) and Caption (`text`) fields; UI filter searches in both case modes returned 0 rows (method and AC-1 evidence below).
- Existing `FX_` forms (**exactly 10**, store indices in `mgdata` order): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab05` (282, Caption empty — store `text` shows the Name fallback), `FX_ComponentLab02` (283), `FX_ComponentLab01` (284), `FX_FormPropertyLab02` (312, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04` (313, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03` (314, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (315, Caption `Form Property Lab`).
- Form-count reconciliation: 641 total / 10 `FX_` — **identical** to the EXP-007 T7 final audit (641 / 10, same 10 names, same store indices 279–284 / 312–315). No growth, no deletions, no unexplained artifacts.
- **`Unload IDO Metadata With Forms` preference: read CHECKED/enabled in this preflight** (T1.5 below) — `checked: true`, `getValue(): true`, `aria-checked: "true"`, `disabled: false` (component `ext-comp-2551` on this load; numeric id drifts per load). Read-only; no change, no Save. **Preference gate: PASS.**
- No Mongoose artifact was created, modified, or deleted during this preflight. No User Preference was changed or saved. No unload command was invoked. No form was opened from the Select Form dialog. No Designer mutation was performed. Editing scope unchanged (User).

## Preflight method (T1)

1. Inspected repository state: `experiments/` (latest record `EXP-007-form-description-persistence-across-verified-coupled-unload.md`, mtime 13:48:45 — its T7.9 finalization; before this run's 13:58:29 start), `recipes/forms/create-basic-form.md` (status **verified**), `environments/current-environment.md`. Worktree is not a git repository; starting-state audit by file mtime (see below).
2. Inspected current browser state (3 tabs as above) — **no login performed** (session already authenticated). Screenshot of the Web Client (evidence `01`).
3. Confirmed Web Client iframe state programmatically (title = config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; user badge present; no visible windows; no form tabs; Save disabled).
4. In the Web Client, clicked **Open** (`mgtoolbarbutton-1101`, native Playwright click) → **Select Form** dialog (window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Filter By combo `combo-1145`, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147` — **identical IDs to the EXP-007 session**). This time the dialog reopened with an **empty** filter (EXP-007 T7 had left it cleared) → full store, **641 records**. Screenshot `02`.
5. **AC-1 existence proof (store-level, authoritative):** scanned the entire Select Form store (all **641** records): field `mgdata` (Name) — **0 exact** matches for `FX_FormPropertyLab06`, **0 case-insensitive** matches (`toLowerCase()` comparison); field `text` (Caption) — **0 exact**, **0 case-insensitive**. Enumerated all 10 `FX_`-prefixed records (indices above); near-miss scan for `formpropertylab` (case-insensitive substring, Name and Caption) matched only the five known `FX_FormPropertyLab01/02/03/04/05` records.
6. **AC-1 existence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab06` into the Filter field (Filter By = Caption & Name / internal value `both`, Case Sensitive **off**, real key events) → store reloaded to **0 records** (evidence `03`).
7. **AC-1 existence proof (UI-level, case-sensitive):** toggled **Case Sensitive on** via the checkbox's own `onBoxClick()` handler (`getValue()` false→true, `aria-checked` true), cleared and re-typed `FX_FormPropertyLab06` → **0 records** (evidence `04`).
8. **Positive control (UI-level, case-sensitive):** cleared and typed `FX_FormPropertyLab` (same mode) → exactly **5 rows**: `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — proves the filter mechanism works and that only the 01–05 variants exist (evidence `05`).
9. **Visual inventory:** cleared and typed `FX_` → exactly **10 rows** rendered in the grid (evidence `06`).
10. Restored the dialog to its original state: Case Sensitive back **off** (`onBoxClick()` again), filter cleared via real key events → full store restored, **641 records**, both checkboxes off (Starts With verified off via `inputEl.checked`/`aria-checked`); closed the dialog with **Cancel** (`button-1150`, native click). Verified the Web Client returned to its original state: no visible windows, Save disabled (evidence `07`).
11. **Editing-lane check (read-only):** switched to the Designer tab (tab 2) and read its state without interaction: status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean (Save/Regenerate/Undo/Redo disabled), no visible windows, `FX_FormPropertyLab05` active (`?MGForm=FX_FormPropertyLab05`) with the `FX_FormPropertyLab04` tab also present (both leftovers from EXP-007/EXP-006-R2; untouched). The lane is **suitable for a later User-scope creation** (scope already User for the signed-in user). Screenshot `08`.
12. **Preference gate (read-only):** in the Web Client, opened **Form > User Preferences** (real mouse click on `mgmenubutton-1023`, then real mouse click on the `User Preferences` menu item `menuitem-1043`) → the User Preferences workspace view opened (workspace tab `tab-2715`, Behavior page). Read the checkbox with boxLabel **`Unload IDO Metadata With Forms`** (component `ext-comp-2551`): **CHECKED** (`checked: true`, `getValue(): true`, `aria-checked: "true"`, `disabled: false`). (evidence `09`, `10`.) **No toggle, no change to any other preference, no Save/OK.** Closed the view via its tab close (×) button — **not** OK/Save; **no "save changes?" prompt appeared**; workspace returned to normal (no tabs, no windows, Save disabled). (evidence `11`.)
13. Audited the worktree starting state by mtime (see below). Console: 0 errors / 1 warning (pre-existing benign portal Content Catalog warning, unrelated to Mongoose).

## AC-1 evidence — pre-mutation absence of `FX_FormPropertyLab06`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store (Name) | Store scan of all 641 records, field `mgdata`, `=== 'FX_FormPropertyLab06'` | **0 matches** |
| Case-insensitive, whole store (Name) | Store scan, `mgdata.toLowerCase() === 'fx_formpropertylab06'` | **0 matches** |
| Exact / case-insensitive, whole store (Caption) | Store scan, field `text`, exact and `toLowerCase()` | **0 / 0 matches** |
| UI filter, case-insensitive (Case Sensitive off, Filter By Caption & Name) | Dialog filter `FX_FormPropertyLab06` | **0 rows** (evidence `03`) |
| UI filter, case-sensitive (Case Sensitive on, Filter By Caption & Name) | Dialog filter `FX_FormPropertyLab06` | **0 rows** (evidence `04`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` (case-sensitive) | **5 rows**: `FX_FormPropertyLab05`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` (evidence `05`) |
| Visual, full `FX_` inventory | Dialog filter `FX_` | exactly 10 `FX_` rows, no `FX_FormPropertyLab06` (evidence `06`) |

**Counts: total forms = 641; `FX_` forms = 10; target `FX_FormPropertyLab06` = 0.**

Case-insensitive matching was explicitly accounted for in multiple independent ways (store-level `toLowerCase` scan on both Name and Caption, UI filter with Case Sensitive off, and the positive control), not relied on a single exact-case filter.

**Name/Caption ambiguity:** the store scan distinguished the Name field (`mgdata`) from the Caption field (`text`) per record. No record carries a Caption resembling the target (case-insensitive Caption scan = 0). The only Name-fallback Caption in the target family is `FX_FormPropertyLab05` (Caption empty → store `text` shows the Name), which is a different Name and cannot be confused with `FX_FormPropertyLab06` under either exact or case-insensitive matching. No ambiguity exists for the target.

## Repository / worktree starting state (T1)

- Worktree is **not** a git repository; audit by file modification time.
- **Run boundary:** this run (`R-20261002-135829-sjDK`) started at **2026-10-02 13:58:29**.
- **New in this preflight (T1 window, 2026-10-02 ~14:01–14:06):** only `evidence/EXP-007-R2/01…11` (11 screenshots) and this record file.
- **Most recent prior content:** `experiments/EXP-007-form-description-persistence-across-verified-coupled-unload.md` (mtime 2026-10-02 13:48:45 — its T7.9 finalization; unchanged since) and `evidence/EXP-007/*` (49 screenshots, last 13:30:34).
- **NOT modified (all predate the run start):** `AGENTS.md` (9/30), `opencode.json` (9/30), `environments/current-environment.md` (9/30), every file under `recipes/` (9/30, including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md` (≤ 10/2 13:48:45). `claims/` is empty (pre-existing).
- `evidence/playwright/` = auto-generated Playwright snapshot/console artifacts (shared across experiments); `tools/learning-harness/` = harness runtime — neither is EXP-007-R2 knowledge content.
- **Conclusion:** worktree starting state is clean; no recipe, environment, or AGENTS.md file was modified by this preflight.

## Observations

- **Select Form dialog reopened with an empty filter** (EXP-007 T7 had left it cleared) → full store 641 immediately; no remembered-filter clearing was needed this time (contrast with EXP-007 T1, which reopened with the remembered `User Preferences` filter).
- **Filter store reload is driven by real input events** (re-confirmed): `page.keyboard.type()` / Delete reloaded the store each time; no programmatic `setValue` was used.
- **Case Sensitive checkbox (`mgDlgCbx-1146`)**: the component's own `onBoxClick()` handler toggled it consistently in both directions (`getValue()` false→true→false) — re-confirms the EXP-006/EXP-007 finding that `onBoxClick()` is the reliable toggle path.
- **Starts With checkbox (`mgDlgCbx-1147`)**: `getValue()` returns `undefined` in this build; the authoritative state is `inputEl.dom.checked` / `aria-checked` (both `false` here). Minor refinement of the EXP-007 T1 note.
- Select Form dialog control IDs this session: window `ext-comp-1135`, grid `grid-1136`, filter text `textfield-1143`, Filter By combo `combo-1145` (value `both` = Caption & Name), checkboxes `mgDlgCbx-1146` (Case Sensitive) / `mgDlgCbx-1147` (Starts With), buttons OK `button-1149` / Cancel `button-1150` / Help `button-1151` — **identical to the EXP-007 session**.
- **Pitfall (new): `page.mouse.click` uses PAGE coordinates, not iframe coordinates.** The Web Client is a cross-origin iframe offset by (0, 40) in the page. Clicking at the Form-menu button's *iframe*-relative coordinates (428, 17) hit the **portal top bar** (the portal tab row) and switched the portal to the general **"User Settings" profile tab** (the Infor profile page — NOT the Mongoose preference). Recovered by clicking the **Mongoose** portal tab back (no data was affected; the portal "User Settings" tab remains open in the portal, as it had before this run). Corrected approach: page coordinates = iframe offset (0, 40) + iframe-relative coordinates. After the correction, `Form > User Preferences` opened cleanly.
- **User Preferences view** (Mongoose) opens as a full-width workspace tab (`tab-2715` this load) with category tabs (General, Form, IDO Collections, Others, Common, Components, User Preferences) on the Behavior page — consistent with EXP-007 T4. The target checkbox's numeric id drifted (`ext-comp-2551` here vs `ext-comp-2001` in EXP-007 T4); the boxLabel is the stable identity.
- **`FX_FormPropertyLab05` and `FX_FormPropertyLab04` remain open in the Designer tab** (leftovers from EXP-007 T6/T7 and EXP-006-R2 T6/T7 respectively; both clean). Later tasks must not modify them and should account for them in the Designer's Form-menu recent list.
- Tab 1 remains a stray dead bare-portal-root tab (per EXP-006-R2, a 403 "Missing Authentication Token" leftover); no navigation to it was performed in this preflight.
- Console: 0 errors / 1 warning (pre-existing benign portal Content Catalog "Template URL missing for view Home" warning — unrelated to Mongoose).
- No Mongoose artifact was created, modified, or deleted; no User Preference was changed or saved; no unload was invoked; no form was opened from the dialog; the Select Form dialog was left in its original state (filter empty, both checkboxes off) and closed via Cancel.

## Evidence (under `evidence/EXP-007-R2/`)

- `01-preflight-webclient-state.png` — Web Client at preflight start: signed in (user badge visible), no form open, toolbar clean (Save disabled), no notification banner, no dialogs.
- `02-preflight-select-form-dialog-open.png` — Select Form dialog open with empty filter, Filter By Caption & Name, both checkboxes off → full store (641 records).
- `03-select-form-filter-lab06-case-insensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab06`, Filter By Caption & Name, Case Sensitive **unchecked** → grid empty (0 records).
- `04-select-form-filter-lab06-case-sensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab06`, Case Sensitive **checked** → grid empty (0 records).
- `05-select-form-filter-lab-prefix-five-rows.png` — Select Form dialog, Filter `FX_FormPropertyLab` (positive control, case-sensitive) → exactly 5 rows: `FX_FormPropertyLab05`, `FX_FormPropertyLab02` (Caption `Form Property Lab Replay`), `FX_FormPropertyLab04` (Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03` (Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01` (Caption `Form Property Lab`).
- `06-select-form-fx-inventory-ten-rows.png` — Select Form dialog, Filter `FX_` → exactly 10 `FX_` rows: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01` — **no `FX_FormPropertyLab06`**.
- `07-webclient-after-dialog-close.png` — Web Client after Cancel: original state restored (no form tabs, no dialogs, Save disabled).
- `08-designer-user-scope-lab05-lab04-open.png` — Designer tab (tab 2): `FX_FormPropertyLab05` active (`?MGForm=FX_FormPropertyLab05`), `FX_FormPropertyLab04` tab also present (leftovers from EXP-007/EXP-006-R2), status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean.
- `09-form-menu-user-preferences-item.png` — Web Client `Form` menu open showing **User Preferences** (the supported path).
- `10-user-prefs-unload-ido-metadata-checked.png` — User Preferences view (Behavior page): **`Unload IDO Metadata With Forms` CHECKED** (read-only; no change made).
- `11-webclient-after-prefs-closed.png` — Web Client after closing User Preferences without mutation: empty workspace, Save disabled, no dialogs (no unsaved mutation).

## Recipe availability for the next task

`recipes/forms/create-basic-form.md` (status **verified** — EXP-002 + EXP-002-R2, persistence verified across full page reload in both) is the creation path for `FX_FormPropertyLab06`: Web Client Designer split button (`mgtoolbarbutton-1126`) → Designer tab → **New** (`mgtoolbarbutton-1088`) → Form Wizard Selection (New Form / Category **Classic** / Wizard **BuildFromScratch**) → wizard page 1 Name `FX_FormPropertyLab06` (other defaults untouched) → Next → final step **uncheck "Save Template"** → Finish → "Process Completed Successfully" → OK (Finish persists immediately; Save disabled = clean). Session-specific control IDs from EXP-007 T2 (wizard window `formwizard-2025`, expeditor `expeditor-2074`, Name combo `mgcombo-2081`, Save Template `ext-comp-2313`, success dialog `ext-comp-1009`) may drift — resolve at runtime. Known pitfalls: synthetic DOM clicks do not drive Ext window buttons (use native Playwright clicks); the wizard is a single scrollable page in this build; "Save Template" is checked by default (authoritative state = `aria-checked`/`getValue()`; reliable toggle = `onBoxClick()`); the Name field is an editable combo (`forceSelection:false`). **Designer lane note:** the Designer tab is already open in User scope with `FX_FormPropertyLab05` (active) and `FX_FormPropertyLab04` loaded — a new form can be created in this existing session (per EXP-007 T2, no scope re-prompt appears when the session scope is already established); the two open forms must not be modified.

## Knowledge state (as of T1)

- `FX_FormPropertyLab06` absent (exact and case-insensitive) in the 641-record Select Form store (Name **and** Caption fields), and in both UI filter modes: **observed** (T1, multiple independent methods + positive control). **AC-1 fully PROVEN.**
- Select Form store count 641 and `FX_` count 10, reconciled against the EXP-007 T7 final audit (641 / 10, identical set and indices): **observed** (re-confirmed).
- `Unload IDO Metadata With Forms` preference is **CHECKED/enabled** for this user — re-verified read-only in this replay (`checked:true` / `getValue():true` / `aria-checked:"true"` / not disabled); **left unchanged**: **observed** (re-confirmed in this replay; preference gate PASS).
- Supported path `Form > User Preferences` (Behavior page) for Mongoose user preferences; the portal "User Settings" tab is the general Infor profile, NOT the Mongoose preference: **observed** (re-confirmed; EXP-007 T4).
- `page.mouse.click` coordinates are page-relative; iframe content requires the iframe offset (0, 40) added — an iframe-relative click at y=17 hit the portal top bar and switched the portal tab: **observed** (new, T1; correction applied).
- Starts With checkbox `getValue()` returns undefined; authoritative state = `inputEl.checked`/`aria-checked`: **observed** (new, T1; minor refinement).
- Designer tab is open in **User scope** (clean toolbar) with `FX_FormPropertyLab05` + `FX_FormPropertyLab04` still loaded from EXP-007/EXP-006-R2; the lane is suitable for a later User-scope creation: **observed** (new).
- Exact unload command label in the 2026.09.08 Form > Definition UI: **not opened in this preflight** — carried over from EXP-007 T5 (`Unload All Global Form Objects`, observed there; invocation marker `POST /DesignerSession/ClearCache` → `{"Success":true}`); to be re-observed in this replay's UI before invocation, not assumed.
- The EXP-007 **Description**-persistence procedure across the verified coupled unload is `observed` (single original execution, EXP-007 T6/T7) — this replay exists to attempt promotion to **replay_verified**.
- The EXP-006/EXP-006-R2 **Caption**-persistence procedure across the coupled unload is `replay_verified` (separate experiment; referenced only for context).

## Open questions / blockers

- None blocking for T1. **AC-1 is fully proven** (target absent by all methods); the preference gate **PASSES** (CHECKED/enabled, read-only).
- The exact unload command label must be re-observed in this replay's Form > Definition UI before invocation (EXP-007 T5 observed `Unload All Global Form Objects`; it will not be assumed).
- `FX_FormPropertyLab05` and `FX_FormPropertyLab04` remain open in the Designer tab from EXP-007/EXP-006-R2; later tasks must not modify them and should account for them in the Designer's recent-forms list.
- Whether ordinary Form close, the explicit unload, or both trigger IDO-metadata unloading is **out of scope** and will not be determined by this replay.

## T1 — Stopped here (per instruction, after the read-only preflight)

Did **not** create `FX_FormPropertyLab06` or any other Form; did **not** edit any Form property; did **not** unload global objects; did **not** change or Save any User Preference; did **not** modify any existing Form or non-`FX_` artifact. **Next task (T2):** using `recipes/forms/create-basic-form.md` exactly as the verified procedure, create exactly one new classic BuildFromScratch Form `FX_FormPropertyLab06` in User scope (Save Template unchecked); record its exact scoped identity and the full pre-Description baseline (Name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, Is Master); prove exactly one target exists (store 641→642, `FX_` 10→11). Do NOT edit Description, do NOT change Caption or any other property, do NOT change User Preferences, do NOT close the target, do NOT invoke the unload.

## T2 — Creation of `FX_FormPropertyLab06` + untouched baseline (2026-10-02)

Coordinator instruction: create exactly one new User-scope classic BuildFromScratch Form named `FX_FormPropertyLab06` using `recipes/forms/create-basic-form.md`; do not modify or save `FX_FormPropertyLab04`, `FX_FormPropertyLab05`, or any other existing Form; leave `Save Template` unchecked; after Finish, verify creation with the observable Form inventory (expected total 641→642, `FX_` 10→11, exactly one exact/case-insensitive target); if counts or uniqueness differ, stop before any Description edit and report the discrepancy; with the target loaded, record and capture evidence for Form Name, ScopeType=`User`, ScopeName, Caption, Description, Version, Device Type, Form Type, and Is Master **before** changing Description or any other property (record the actual Description baseline rather than assuming it is empty); confirm the Designer is clean after creation and leave `FX_FormPropertyLab06` open and untouched.

### T2.1 — Inspected state first (no mutation)

- Browser tabs at T2 start (fresh conversation; state inspected before any action): Tab 0 = Mongoose Web Client (authenticated; no form open; Save disabled; no visible windows); Tab 1 = the same stray dead bare-portal-root tab as T1 (unchanged); Tab 2 = Designer tab with `?MGForm=FX_FormPropertyLab05` (left open/clean by EXP-007 T6/T7), the `FX_FormPropertyLab04` tab also present; status bar `[ ScopeType: User / ScopeName: <username> ]`; toolbar clean (Save/Regenerate/Undo/Redo all disabled); no visible windows.
- **Pre-mutation re-check (Select Form, read-only):** dialog reopened with an **empty** filter (as left by T1) → full store **641 records**; **0 exact and 0 case-insensitive** matches for `FX_FormPropertyLab06` in Name and Caption; the same 10 `FX_` forms as T1 (indices 279–284, 312–315). Target still absent immediately before the mutation. (evidence `12`.) Dialog closed via Cancel; Web Client verified clean.

### T2.2 — Creation method (per `recipes/forms/create-basic-form.md`)

1. Switched to the Designer tab (tab 2) — already open in **User scope** (`[ ScopeType: User / ScopeName: <username> ]`), clean toolbar, `FX_FormPropertyLab05` active. No new Designer session was needed; no scope re-prompt appeared (session scope already established for the signed-in user).
2. Designer toolbar **New** (`mgtoolbarbutton-1088`) — native Playwright click → **"Form Wizard Selection"** dialog (window `formwizard-2802` — xtype `formwizard`, not an Ext `window`; numeric ID drifted from EXP-007 T2's `formwizard-2025`, as expected). (evidence `13`.)
3. Radio **New Form** already checked (default; `Extend Form` unchecked). Category combo (`mginfoconexpandable-2820`, store field `CategoryName`: Classic, ExtDatasource, Flex, FormBuilder, IDS, NewData, REST) → **Classic** selected via `combo.select(record)`; Wizard combo (`mginfoconexpandable-2825`, store field `WizardName`) then loaded the 7 Classic wizards (BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile) → **BuildFromScratch** selected via `combo.select(record)`. (evidence `14`.)
4. OK (`mgformbutton-2828`, native click) → **"Form Wizard - Build From Scratch"** (expeditor `expeditor-2851`). Page-1 values verified: Name (editable combo `mgcombo-2858`) set to **`FX_FormPropertyLab06`** via `setValue`; all other defaults left untouched — Form Type `BuildFromScratch` (`mgcombo-2872`), Form Layout `GridLeft` (`mgcombo-2877`), Device Type `Default` (`mgcombo-2882`), Data Source empty (`mgcombo-2887`), Query Form/Comments empty. (evidence `15`.)
5. **Next** (`mgformbutton-3094`, native click) → Next became **disabled**, **Finish** (`mgformbutton-3095`) became **enabled** (single scrollable page, as in EXP-007 T2).
6. **Save Template** checkbox (`ext-comp-3090`) was **checked by default** (`getValue()=true`, `aria-checked="true"`); toggled **off** via its own handler `onBoxClick()` → `getValue()=false`, `aria-checked="false"`. (evidence `16`.)
7. **Finish** (`mgformbutton-3095`, native click) → **"Process Completed Successfully"** dialog (`ext-comp-1009`, message text `Process Completed Successfully`) → **OK** (`button-1013`, native click). (evidence `17`.)
8. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab06`; form tab **`FX_FormPropertyLab06`** appeared and is selected; the `FX_FormPropertyLab05` and `FX_FormPropertyLab04` (`Form Property Lab Coupled Unload Replay`) tabs **remain present and untouched**; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `18`.)

### T2.3 — Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store:
- **Total records = 642** (641 + 1 — exactly +1; **no template artifact** created, consistent with Save Template being unchecked).
- **Exactly 1 exact match** for `FX_FormPropertyLab06` (store index 282, record `{mgdata:"FX_FormPropertyLab06", text:"FX_FormPropertyLab06", id:"extModel214-1939"}`); case-insensitive matches = 1 (the same record); Caption-field exact/case-insensitive matches = 1/1 (the same record, Caption empty → Name fallback).
- `FX_`-prefixed forms now number **11**: `FX_VariableLab01`(279), `FX_TestBlank02`(280), `FX_TestBlank01`(281), **`FX_FormPropertyLab06`(282)**, `FX_FormPropertyLab05`(283), `FX_ComponentLab02`(284), `FX_ComponentLab01`(285), `FX_FormPropertyLab02`(313, Caption `Form Property Lab Replay`), `FX_FormPropertyLab04`(314, Caption `Form Property Lab Coupled Unload Replay`), `FX_FormPropertyLab03`(315, Caption `Form Property Lab Coupled Unload`), `FX_FormPropertyLab01`(316, Caption `Form Property Lab`). The pre-existing 10 shifted only in list order/indices; no other artifact added or removed.
- UI confirmation: filtered the dialog to `FX_FormPropertyLab06` → **exactly 1 row** (Caption column shows the Name fallback because Caption is empty); filtered `FX_` → **exactly 11 rows**. (evidence `19`, `20`.)
- Dialog closed via Cancel (native click); filter cleared first (642 records); Web Client verified clean (no windows, Save disabled).

### T2.4 — Exact User-scope identity + full pre-Description baseline (recorded BEFORE any property change)

Read read-only from the loaded Designer property grid store `formpropertygrid-1135` (session formId **106**; the grid cell visually truncates Name/Version but the store holds the full values):

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab06` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `18`, `21`); the Designer session was already in User scope at T2 start (no scope dialog was re-prompted because the session scope was established earlier for the signed-in user).

**Key baseline fact for the persistence check:** the freshly created form's **Description is empty** (recorded from the store, not assumed) — the later change to the literal `Form Property Description Lab Replay` will be an unambiguous empty→literal transition. (Caption is also empty and will remain an unchanged comparison property.)

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### T2.5 — T2 evidence (under `evidence/EXP-007-R2/`)

- `12-t2-pre-mutation-absence-recheck.png` — Select Form dialog, full list (641 records, filter empty) at the pre-mutation re-check.
- `13-t2-wizard-selection-default.png` — Form Wizard Selection dialog (New Form radio checked; Category/Wizard empty).
- `14-t2-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch**.
- `15-t2-wizard-name-entered.png` — Build From Scratch wizard: Name `FX_FormPropertyLab06`, other defaults (BuildFromScratch / GridLeft / Default / empty).
- `16-t2-wizard-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked**.
- `17-t2-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `18-t2-form-created-loaded-clean.png` — New form `FX_FormPropertyLab06` loaded in the Designer (`?MGForm=FX_FormPropertyLab06`), form tab selected, `FX_FormPropertyLab05`/`FX_FormPropertyLab04` tabs still present, toolbar clean.
- `19-t2-select-form-lab06-exists-one.png` — Select Form dialog filtered to `FX_FormPropertyLab06` → exactly 1 row (store total 642).
- `20-t2-select-form-fx-inventory-eleven-rows.png` — Select Form dialog, Filter `FX_` → exactly 11 `FX_` rows including `FX_FormPropertyLab06`.
- `21-t2-baseline-properties-design-group.png` — Designer Properties, Design group: Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T2.6 — T2 observations / corrections

- **The Form Wizard Selection dialog is xtype `formwizard`, not an Ext `window`** (re-confirmed): `Ext.ComponentQuery.query('window')` does not find it; locate it by `ComponentQuery.query('formwizard')` or by title.
- **Wizard store field names:** Category combo store field = `CategoryName`; Wizard combo store field = `WizardName` (store loads only after a Category is selected) (re-confirmed).
- **`store.data` is not a plain array in this build** (re-confirmed): `cat.store.data.map` threw; iterate with `store.each(...)`.
- **The Designer URL drops `MGForm=` while the wizard is open** and restores `?MGForm=<new form>` after Finish+OK; the previously loaded form tabs (`FX_FormPropertyLab05`, `FX_FormPropertyLab04`) are not affected by the wizard flow (re-confirmed).
- **Select Form client-side record ids are session-local** (e.g., `FX_FormPropertyLab06` = `extModel214-1939` this session) — Name + scope is the persistent identity (re-confirmed).
- **Form-list projection:** in this post-creation store load, `FX_FormPropertyLab05`'s `text` field again showed the Name fallback (empty Caption), while `FX_FormPropertyLab02/03/04/01` showed their real Captions — consistent with the EXP-007 T2 observation that the projection of empty-Caption forms falls back to Name.
- **Synthetic `setValue` on the wizard Name combo worked** (editable combo, `forceSelection:false`); `combo.select(record)` worked for Category/Wizard (re-confirmed from EXP-007 T2).
- **Save Template is checked by default**; reliable toggle = `onBoxClick()` (re-confirmed).
- No User Preference was inspected or changed; no unload was invoked; no form other than the new `FX_FormPropertyLab06` was created, modified, or deleted; `FX_FormPropertyLab01/02/03/04/05` and all non-`FX_` artifacts untouched; editing scope stayed **User** throughout.

### T2.7 — T2 knowledge-state updates

- `FX_FormPropertyLab06` **exists, exactly one**, User scope, ScopeName `anton.ramos@3mworks.com.ph`, created via the verified recipe with Save Template unchecked; store 641→642, `FX_` 10→11; baseline Description **empty**, Caption **empty**: **observed** (T2).
- Full pre-Description baseline (Name/Description/Caption/Version/Device Type/Form Type/Is Master) as tabled in T2.4: **observed** (T2).
- `formwizard` xtype invisible to `window` queries; wizard store fields `CategoryName`/`WizardName`; `store.data` not a plain array (use `store.each`); wizard-flow URL behavior; session-local Select Form record ids: **observed** (re-confirmed).
- `Unload IDO Metadata With Forms` preference: **not inspected in T2** (out of scope for this step); re-verified CHECKED in T1 of this replay — to be re-verified read-only in T4 before the unload.
- Exact unload command label: **not opened in T2** (per instruction); still carried from EXP-007 T5 (`Unload All Global Form Objects`) — to be re-observed in T5.

### T2.8 — Stopped here (per instruction, after creation + baseline)

Did **not** change the Description or any other Form property; did **not** touch `FX_FormPropertyLab04`/`FX_FormPropertyLab05` (still open, clean); did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command. **Next task (T3):** change **only** the Form-level Description to `Form Property Description Lab Replay`, ordinary Designer Save, and prove the Designer returns to a clean state with the Description retained.

## T3 — Description edit + ordinary Save to clean (2026-10-02)

Coordinator instruction: on the already-open `FX_FormPropertyLab06`, first re-read the target identity + baseline to guard against acting on the wrong Form (Name `FX_FormPropertyLab06`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph`, Description empty, Caption empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`, Designer clean); if materially different, stop before changing anything. Then, using the supported Designer Form property editor, change **only** the Form-level Description to exactly `Form Property Description Lab Replay` (do not edit Caption or any other property); capture evidence of the change + unchanged comparison properties; perform one ordinary Designer Save through the supported UI and prove the Designer returns to a demonstrably clean state; re-read Description + Caption + Version + Device Type + Form Type + Is Master + ScopeType + ScopeName after Save (Description must equal the literal, every comparison property must equal the T2 baseline); leave the form open and clean. Do not close it, do not touch User Preferences, do not invoke any unload, do not modify `FX_FormPropertyLab04`/`05`, do not create/modify any recipe or project-context file.

### T3.1 — Inspected state first (no mutation) + guard check

- Browser tabs at T3 start (fresh conversation; state inspected before any action): Tab 0 = Web Client (authenticated, no form open); Tab 1 = the same stray dead bare-portal tab; Tab 2 (current) = Designer, URL `…&MGForm=FX_FormPropertyLab06`.
- **Guard re-read (read-only, property grid store `formpropertygrid-1135`, session formId 106):** Name `FX_FormPropertyLab06`; **Description empty**; Caption empty; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`. Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Toolbar clean (Save/Regen/Undo/Redo all disabled); no visible windows; form tabs `Form Property Lab Coupled Unload Replay` (Lab04), `FX_FormPropertyLab05`, `FX_FormPropertyLab06` all present.
- **Guard result: PASS** — the exact target/scoped version and every baseline value match T2.2/T2.4 exactly. Proceeded to the edit. (evidence `22` = before-state screenshot.)

### T3.2 — How the Description value was changed (supported property editor)

- The property grid `formpropertygrid-1135` is **not** a standard Ext editable grid: the value column (`dataIndex:"value"`) has **no cell editor** and the grid has no cell-editor plugin. Editing is done by **double-clicking the value cell**, which opens a **floating single-line textfield editor** positioned over the cell.
- Description row = store index 2; value cell (col 1) center at viewport (939.5, 206.5) (Designer is top-level, no iframe offset). A first `dblclick` was confirmed to have opened the editor (a floating `textfield-1139` appeared at x=870,y=196 over the cell, focused, empty).
- Typed the exact value into the focused editor: cleared (`Ctrl+A`, `Delete`) then typed **`Form Property Description Lab Replay`** (keyboard, 15 ms/char). Editor `getValue()` = `Form Property Description Lab Replay`. (evidence `23`.)
- Committed with **Enter**. The editor closed; the grid store value for `Design.Description` became `Form Property Description Lab Replay`; all other Design values unchanged; the **Save toolbar button became enabled** (form now dirty). (evidence `24`.)
- **Only** the Description was changed — Caption and every other Form/component property were left untouched.

### T3.3 — Ordinary Save + clean-state proof

- Clicked the Designer toolbar **Save** button (`mgtoolbarbutton-1085`, native click at its center) — the supported ordinary Save.
- **Save result:** the toolbar **Save button returned to disabled** (along with Regenerate Form / Undo / Redo) and **no dialog/window** appeared — the Designer returned to a **demonstrably clean state**.
- **Server-side confirmation (diagnostic, not a contract):** the ordinary Save issued `POST /WSWebClient/Designer/DesignerSession/SaveChanges` → **HTTP 200** (request #134), preceded by a `GenerateServerEvent` (#133). Console: **0 errors / 0 warnings**. This ordinary Save did **not** trigger `ClearCache`/unload (the `ClearCache` calls earlier in the session, #95/#116, belong to the T2 wizard-Finish flow, not this Save).

### T3.4 — Post-Save property re-read (persistence + unchanged comparison properties)

Re-read read-only from the property grid store + status bar after the Save:

| Property | T2 baseline | Post-Save value | Match |
|---|---|---|---|
| **Description** | *(empty)* | **`Form Property Description Lab Replay`** | changed as intended (the one intended change) |
| Name | `FX_FormPropertyLab06` | `FX_FormPropertyLab06` | ✓ unchanged |
| Caption | *(empty)* | *(empty)* | ✓ unchanged |
| Version | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | ✓ unchanged |
| Device Type | `Default` | `Default` | ✓ unchanged |
| Form Type | `Normal` | `Normal` | ✓ unchanged |
| Is Master | `True` | `True` | ✓ unchanged |
| ScopeType | `User` | `User` | ✓ unchanged |
| ScopeName | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | ✓ unchanged |

**AC-4 is fully satisfied:** Description equals exactly `Form Property Description Lab Replay` after an ordinary Save to a clean state, and every recorded comparison property (Caption, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName, Name) equals the T2 baseline. (evidence `25`.)

### T3.5 — T3 evidence (under `evidence/EXP-007-R2/`)

- `22-t3-before-description-empty-clean.png` — Designer on `FX_FormPropertyLab06`, Design group, Description empty, clean toolbar (guard/before state).
- `23-t3-description-editor-typed.png` — Description value cell editor open with `Form Property Description Lab Replay` typed.
- `24-t3-description-committed-dirty-save-enabled.png` — After Enter: Description shows the new value in the grid; Save button enabled (dirty).
- `25-t3-after-save-clean-description-persisted.png` — After ordinary Save: Description `Form Property Description Lab Replay` retained; toolbar clean (Save disabled); status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T3.6 — T3 observations / corrections

- **The Designer property grid is not a standard Ext editable grid.** The value column has no `editor` and the grid has no cell-editor plugin; the supported edit path is **double-click the value cell → a floating single-line textfield editor opens over the cell → type → Enter to commit**. (The editor component id is session-local, e.g. `textfield-1139` this session.)
- A `dblclick` on the value cell is required to open the editor; the cell's inner `div` is `visibility:hidden` with `&nbsp;` when not editing (an empty value renders as a non-breaking space).
- Committing with **Enter** closes the editor, updates the grid store value, and marks the form **dirty** (Save button enables). An ordinary toolbar **Save** then persists (`DesignerSession/SaveChanges` → 200) and returns the toolbar to clean (Save disabled) with no confirmation dialog.
- The ordinary Save did **not** invoke `ClearCache`/unload — that is distinct from the wizard-Finish flow (which did issue `ClearCache` in T2).
- No User Preference was inspected or changed; no unload was invoked; `FX_FormPropertyLab04`/`FX_FormPropertyLab05` untouched (still open, clean); no other Form created/modified/deleted; editing scope stayed **User** throughout.

### T3.7 — T3 knowledge-state updates

- Designer property-grid edit mechanism (double-click value cell → floating textfield editor → Enter; value column has no Ext cell editor; ordinary Save → `DesignerSession/SaveChanges` 200 → clean): **observed** (T3).
- `FX_FormPropertyLab06` Description = `Form Property Description Lab Replay`, persisted across an ordinary Save to a clean state, with all comparison properties unchanged: **observed** (T3).
- `Unload IDO Metadata With Forms` preference: **not inspected in T3** (out of scope); re-verified CHECKED in T1 — to be re-verified read-only in T4 before the unload.
- Exact unload command label: **not opened in T3**; still carried from EXP-007 T5 (`Unload All Global Form Objects`) — to be re-observed in T5.

### T3.8 — Stopped here (per instruction, after Description edit + ordinary Save to clean)

Did **not** close `FX_FormPropertyLab06` (left **open and clean** for T4); did **not** open/change/Save any User Preference; did **not** open Form > Definition; did **not** invoke any unload command; did **not** modify `FX_FormPropertyLab04`/`FX_FormPropertyLab05`; did **not** create or modify any recipe or project-context file. **Next task (T4):** close `FX_FormPropertyLab06` through the supported Designer UI, then read (not change) `Unload IDO Metadata With Forms` and require it CHECKED/enabled before proceeding.

### T3.9 — Read-only T3 reconciliation (cycle 5, 2026-10-02)

A read-only reconciliation pass was performed (no Mongoose change, no new artifact): the four T3 evidence files (`22`–`25`) were re-inspected and the currently open Designer state was re-read without mutation.

- **Current Designer state (re-read, read-only):** URL `MGForm=FX_FormPropertyLab06`; Name `FX_FormPropertyLab06`; **Description `Form Property Description Lab Replay`**; Caption empty; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean (Save/Regen/Undo/Redo disabled); no visible windows; form tabs `Form Property Lab Coupled Unload Replay` (Lab04), `FX_FormPropertyLab05`, `FX_FormPropertyLab06` all present. **Matches the T3 post-Save state exactly — target is open and clean.**
- **Evidence integrity:** `22` (before: Description empty, clean toolbar, correct scope), `23` (editor open, value typed), `24` (committed, Save enabled/dirty), `25` (after Save: Description retained, Save disabled/clean) — all present and mutually consistent with the T3.1–T3.4 narrative.
- **AC-4 reconciliation: CONFIRMED, no discrepancy.** Each AC-4 element is proven by: (a) before-state target/scope/baseline + clean = T3.1 + evidence `22`; (b) only Description changed empty→`Form Property Description Lab Replay` = T3.2 + evidence `23`/`24`; (c) ordinary Save occurred = T3.3 (`DesignerSession/SaveChanges` → 200); (d) post-Save demonstrably clean = T3.3 + evidence `25`; (e) Description equals the required value = T3.4 + evidence `25`; (f) Caption/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName equal the T2 baseline = T3.4 table.
- No Mongoose artifact was created or modified; no Mongoose change was made during this reconciliation.

### T5 — Close target + read preference gate (2026-10-02)

**Coordinator instruction:** starting from the currently open, clean `FX_FormPropertyLab06`, first verify the target is still the exact User-scope version and remains clean with Description `Form Property Description Lab Replay`. Then close only `FX_FormPropertyLab06` through the supported Designer UI. Do not close, save, or otherwise alter `FX_FormPropertyLab04` or `FX_FormPropertyLab05`. Prove the target closed without an unsaved-change prompt and is no longer open in Designer. After the target is closed, open the supported User Preferences UI and read `Unload IDO Metadata With Forms` without changing anything. It must be CHECKED/enabled. Capture evidence of the checked state and close User Preferences without Save or mutation; prove there is no unsaved preference state.

*(Note: this pass is labeled "T5" in the coordinator instruction; it is the "next task (T4)" referenced in T3.8.)*

**T5.1 — Target re-verification (before close):**
- Re-read the open target: Name `FX_FormPropertyLab06`; **Description `Form Property Description Lab Replay`**; Caption empty; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean (Save/Regen/Undo/Redo disabled); no visible windows. Exact User-scope version, clean, Description correct. (evidence `26`.)

**T5.2 — Close target via supported Designer UI:**
- Closed `FX_FormPropertyLab06` by clicking the **close (×) button on its form tab** (`.x-tab-close-btn`) — the supported Designer close affordance.
- **No unsaved-change prompt appeared** (the form was clean after T3's ordinary Save).
- The Designer immediately switched to the remaining open form: URL became `?MGForm=FX_FormPropertyLab05`.
- `FX_FormPropertyLab04` and `FX_FormPropertyLab05` were **not** closed, saved, or otherwise altered.
- Target is no longer open in the Designer. (evidence `26`, `27`.)

**T5.3 — Preference gate: read `Unload IDO Metadata With Forms` (READ ONLY):**
- Opened the supported User Preferences UI: Designer **View** menu → **User Preferences...** (`menuitem-1064`) → `expeditor` dialog. (In this build the item is under **View**, not Form — see T5.5.)
- **READ ONLY** the target setting: the checkbox with boxLabel **`Unload IDO Metadata With Forms`** (component `ext-comp-3966`) is **CHECKED** (`checked: true`, `getValue(): true`). (evidence `42`.)
- No toggle, no change to any other preference, no Save/OK.

**T5.4 — Close User Preferences without Save; no unsaved state:**
- Closed the User Preferences dialog via its **× close button** (not OK/Save).
- **No "save changes?" prompt appeared** (no changes were made).
- No visible windows remain; **no unsaved preference state**. (evidence `44`.)

**T5.5 — UI-change finding: the visible "Behavior" page is not reachable in this build's dialog:**
- The current build's `View > User Preferences` dialog (`expeditor`) exposes only two left-nav pages: **Designer** (Show Hidden Components ✓, Enforce Strict Locking of Forms and Global Objects ✓, Visual Studio Downloaded Project Version: VS 2019 / VS 2022 [VS 2022 selected]) and **Form Metrics** (layout metrics; Common/Components sub-tabs). (evidence `42`, `43`.)
- The **"Behavior" page** with the category tabs (General, Form, IDO Collections, Others, Common, Components) and the **visible** `Unload IDO Metadata With Forms` checkbox — as captured in T1 evidence `10` and EXP-007 T4 — is **NOT reachable** in this build's dialog: the checkbox is a **hidden component** (`rect 0,0,0,0`) not rendered on any accessible page (verified across the Designer page, the Form Metrics page, and its Common/Components sub-tabs; the category-tab panel is present in the DOM but not on any active page).
- The preference value is nonetheless **authoritatively confirmed CHECKED** via the programmatic read (`checked: true`, `getValue(): true`). The gate is satisfied on the value, not on a visible checkbox render.
- **Menu-structure change:** in this build the item is under **View** (`menuitem-1064`), whereas T1/EXP-007 T4 recorded it under **Form** (`Form > User Preferences`). The Designer's **Form** menu in this build contains only Definition / Sign Out / [recent forms] (no User Preferences).

**T5.6 — NEAR-MISS INCIDENT (delete triggered, immediately cancelled; no deletion):**
- While navigating the Designer menus to reach User Preferences, a sequence of menu clicks — with **lingering open menus** (`menu-1021` Form, `menu-1023` Definition submenu, `menu-1063` View) still rendered in the DOM from a prior inspection — accidentally triggered the **Delete** action on `FX_FormPropertyLab05`, producing the confirmation dialog *"Are you sure you want to delete the definition for form FX_FormPropertyLab05?"*. (evidence `39`.)
- **Immediately clicked "No"** to CANCEL the delete. (evidence `40`.)
- **Recovery verification (read-only, Web Client Select Form store):** store count **642** (correct: 641 + 1 new form); **`FX_FormPropertyLab05` EXISTS** (count 1); **`FX_FormPropertyLab06` EXISTS** (count 1); `FX_FormPropertyLab04` (caption "Form Property Lab Coupled Unload Replay") EXISTS; `FX_FormPropertyLab01` (caption "Form Property Lab") EXISTS; filter empty. **No form was deleted; `FX_FormPropertyLab04`/`FX_FormPropertyLab05` were NOT altered.** (evidence `41`.)
- **Root cause / lesson:** the lingering open menus (not closed after a prior `page.evaluate` inspection) made subsequent menu-bar clicks land on stale menu items. Corrective practice: close/verify menu state before each menu-bar click; prefer the Ext API to trigger a specific menu item over blind coordinate clicks when the menu state is uncertain.

**T5.7 — Preference gate: PASS.**
- `Unload IDO Metadata With Forms` is **CHECKED/enabled** (`checked: true`) → the preference gate **PASSES** (not BLOCKED). Proceeding to the unload step is authorized (but was NOT performed in this pass, per instruction).

**T5.8 — Stopped here (per instruction, after close + preference read).**
- Did **NOT** invoke the unload (`Form > Definition > Unload All Global Form Objects`).
- Did **NOT** reopen the target.
- Did **NOT** modify `FX_FormPropertyLab04`/`FX_FormPropertyLab05` (verified intact, T5.6).
- Did **NOT** change or Save any User Preference (closed via ×, no save prompt, T5.4).
- Did **NOT** create or modify any recipe or project-context file.
- **Next task:** invoke `Form > Definition > Unload All Global Form Objects` exactly once, then reopen the exact same User-scope version (`FX_FormPropertyLab06`, ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) and verify Description persistence + unchanged comparison properties.

**T5 evidence files:**
- `26-t5-before-close-three-tabs-lab06-active.png` — target open, clean, Description correct, User scope; three tabs (Lab04/Lab05/Lab06) with Lab06 active (before close).
- `27-t5-after-close-lab06-gone-no-prompt.png` — after closing the target tab: no unsaved-change prompt; Lab06 gone; Designer switched to `FX_FormPropertyLab05`.
- `28`–`37` — (prior pass) menu-navigation captures while locating the User Preferences path (View menu item, prefs dialog, Web Client menu exploration).
- `38-webclient-settings-menu.png` — Web Client portal "User Settings" (profile) tab opened via the settings button (NOT the Mongoose preference — a dead end).
- `39-designer-state-check.png` — the accidental **delete-confirmation dialog** for `FX_FormPropertyLab05` (the near-miss).
- `40-designer-after-cancel-delete.png` — after clicking **No**: dialog gone, `FX_FormPropertyLab05` tab still present (not deleted).
- `41-select-form-store-642-intact.png` — Select Form dialog: store **642**, empty filter (recovery verification).
- `42-user-prefs-dialog-open.png` — User Preferences dialog open (Designer page): Show Hidden Components ✓, Enforce Strict Locking ✓, VS 2022.
- `43-form-metrics-page.png` — User Preferences dialog, Form Metrics page (layout metrics; Common/Components sub-tabs).
- `44-designer-after-prefs-closed-clean.png` — after closing User Preferences without Save: Designer clean, Lab04 + Lab05 tabs present, no dialogs.

**T5 knowledge-state updates:**
- `Unload IDO Metadata With Forms` preference is **CHECKED/enabled** for this user — re-verified read-only in this pass (`checked:true` / `getValue():true`); **left unchanged**: **observed** (re-confirmed; preference gate PASS).
- **UI change (new, observed):** in this build the Mongoose User Preferences dialog is opened from the Designer **View** menu (not Form) and exposes only the **Designer** and **Form Metrics** pages; the **Behavior** page with the visible `Unload IDO Metadata With Forms` checkbox (T1/EXP-007 T4) is **not reachable** — the checkbox is a hidden component. The preference value is still authoritatively readable via the programmatic read.
- **Pitfall (new, observed):** lingering open Designer menus (not closed after a `page.evaluate` inspection) can cause subsequent menu-bar clicks to land on stale menu items — in this pass it accidentally triggered a **Delete** on `FX_FormPropertyLab05` (immediately cancelled; no deletion). Close/verify menu state before each menu-bar click; prefer the Ext API to trigger a specific menu item when menu state is uncertain.

### T5.9 — AC-5 preference gate via the T1-supported VISIBLE route (cycle 7, 2026-10-02)

**Coordinator instruction:** Complete the remaining AC-5 preference gate only. First close any currently open Designer User Preferences dialog without saving or changing anything. Do not reopen `FX_FormPropertyLab06` and do not invoke any unload command. Use the EXP-007-R2 T1 record/evidence to reproduce the same supported Mongoose User Preferences path that visibly rendered `Unload IDO Metadata With Forms` in evidence `10`; inspect the existing T1 documentation before trying additional menus. The preference must be visibly rendered and read as CHECKED/enabled without mutation or Save. Do not treat a hidden/stale Ext component by itself as sufficient proof. Capture concise evidence of the visible checked preference and then close User Preferences without Save, proving there is no unsaved preference state. If the T1-supported visible route cannot be reproduced in the current state after following the recorded path, stop without unload and report exactly what prevented it; do not explore unrelated settings or menus further. Update only the EXP-007-R2 experiment record and evidence directory. Also confirm that `FX_FormPropertyLab06` remains closed and that `FX_FormPropertyLab04`/`05` remain untouched. Report whether AC-5 is now fully satisfied and give the exact evidence paths.

**T5.9.1 — Precondition check (no open prefs dialog; target closed):**
- Inspected current state first: the Designer (Tab 2) had **no** User Preferences dialog open (clean Designer; Lab04 + Lab05 tabs). The Web Client (Tab 0) was clean (no form open; Save/New/Delete disabled). `FX_FormPropertyLab06` was **not** open (no tab). Nothing needed closing. (evidence `47` for the Designer state.)

**T5.9.2 — Root-cause correction of the T5.5 misdiagnosis:**
- T5.5 had concluded the visible "Behavior" page was "not reachable" — but that conclusion was based on the **Designer's** `View > User Preferences` (a floating `expeditor` dialog exposing only the Designer/Form Metrics pages). That is a **different UI** from the T1-supported route.
- The T1 record (line 43) and evidence `09`/`10` show the supported route is the **Web Client's** `Form > User Preferences` (`menuitem-1043`), which opens a **full-width workspace tab on the Behavior page** where the checkbox is **visibly rendered**. T5 used the wrong menu (Designer **View**, not Web Client **Form**).

**T5.9.3 — Reproduce the T1-supported visible route (Web Client `Form > User Preferences`):**
- Switched to the Web Client (Tab 0). Opened the **Form** menu (`f11e10`) → it **contained User Preferences** (`f11e2731`, resolved to `#menuitem-1043-itemEl` — the **exact same menu-item ID as T1**). (This directly contradicts the T5 note that the Web Client Form menu "had no User Preferences" — that was a T5 misread of the *Designer's* Form menu.)
- Clicked **User Preferences** → the **User Preferences workspace tab** opened (tab `f11e2751`) on the **Behavior** page (left nav: Behavior / Layout / Event System / Diagnostics) — a full-width workspace view, **not** a floating dialog. (evidence `45`.)

**T5.9.4 — Preference visibly rendered and CHECKED (authoritative read):**
- The checkbox **`Unload IDO Metadata With Forms`** is **visibly rendered** in the right column of the Behavior page (blue checkmark) — screenshot evidence `45`.
- Authoritative programmatic read (Ext component `ext-comp-2827`, boxLabel `Unload IDO Metadata With Forms`): `getValue(): true`, `checked: true`, `disabled: false`, `hidden: false`, `visible: true`, **inputRect `{x:770, y:119, w:320, h:27}`** (non-zero → genuinely on-screen, **not** a hidden/stale component). **CHECKED/enabled.** No toggle, no change to any other preference, no Save/OK.

**T5.9.5 — Close User Preferences without Save; no unsaved state:**
- Closed via the tab **× (Close Panel)** button (`f11e2753`) — **not** OK/Save.
- **No "save changes?" prompt appeared** (no changes were made). The workspace returned to a clean state (empty main region; Save/New/Delete disabled; no dialogs/windows). (evidence `46`.)

**T5.9.6 — Target + neighbors confirmed (read-only):**
- `FX_FormPropertyLab06` **remains CLOSED** (no form tab in the Designer). (evidence `47`.)
- `FX_FormPropertyLab04` (caption "Form Property Lab Coupled Unload Replay") and `FX_FormPropertyLab05` **remain open and clean/untouched** (both tabs present; Designer Save/Regen/Undo/Redo all disabled = no unsaved changes; this pass only touched the Web Client's User Preferences). (evidence `47`.)

**T5.9.7 — AC-5: FULLY SATISFIED (visible route).**
- `Unload IDO Metadata With Forms` was **visibly rendered** (non-zero on-screen rect) and read **CHECKED/enabled** via the **T1-supported route** (Web Client `Form > User Preferences` → Behavior page), without mutation or Save; User Preferences closed without Save and with no unsaved state. **AC-5 PASS.**

**T5.9 evidence files:**
- `45-ac5-webclient-user-prefs-behavior-unload-checked.png` — Web Client User Preferences workspace tab, Behavior page: **`Unload IDO Metadata With Forms` visibly rendered and CHECKED** (right column, blue check).
- `46-ac5-webclient-after-prefs-closed-clean.png` — Web Client after closing User Preferences via × (no Save): clean workspace, no save prompt, no dialogs.
- `47-ac5-designer-lab06-closed-lab04-lab05-clean.png` — Designer: `FX_FormPropertyLab06` closed (no tab); `FX_FormPropertyLab04` + `FX_FormPropertyLab05` open and clean (Save disabled).

**T5.9 knowledge-state updates:**
- **Correction (supersedes T5.5):** the visible "Behavior" page with the `Unload IDO Metadata With Forms` checkbox **IS reachable** via the **Web Client's** `Form > User Preferences` (`menuitem-1043`) → full-width workspace tab → Behavior page. The T5.5 "not reachable" conclusion was a **misdiagnosis** caused by using the **Designer's** `View > User Preferences` (a different, floating `expeditor` dialog). The two are distinct UIs: Web Client `Form > User Preferences` (workspace tab, Behavior page, **visible** checkbox) vs. Designer `View > User Preferences` (floating dialog, Designer/Form Metrics pages, **hidden** checkbox). **observed** (re-confirmed, cycle 7).
- `Unload IDO Metadata With Forms` is **CHECKED/enabled** and **visibly rendered** on the Behavior page — re-confirmed read-only via the T1-supported visible route (`getValue():true`, non-zero rect `x:770,y:119,w:320,h:27`); **left unchanged**: **observed** (AC-5 PASS).
- **Pitfall (corrected):** do not conflate the Web Client's `Form > User Preferences` (workspace tab) with the Designer's `View > User Preferences` (floating dialog). For the AC-5 visible-checkbox requirement, use the **Web Client** route.

### T7 — Single global-Form-object unload (AC-6) (cycle 9, 2026-10-02)

**Coordinator instruction:** Perform T7 only for AC-6. Begin by verifying `FX_FormPropertyLab06` is still closed, no User Preferences UI is open, and the Designer is clean with only the pre-existing Lab04/Lab05 Forms open and untouched. In the Designer, open the supported `Form > Definition` menu and visibly re-observe the exact command label `Unload All Global Form Objects`; capture evidence before using it. Invoke `Form > Definition > Unload All Global Form Objects` exactly ONCE through the supported UI. Do not activate it a second time for verification. After the single invocation, wait for completion and prove no error dialog, toast, or other error state remains, the Designer is clean, and `FX_FormPropertyLab06` remains closed. Any naturally observed browser/network activity may be recorded only as diagnostic corroboration and must not be used as an alternate mechanism for the unload. Capture evidence under `evidence/EXP-007-R2/` and update only the EXP-007-R2 experiment record. Do not reopen `FX_FormPropertyLab06`, do not change or save preferences, and do not modify Lab04/Lab05. Report the freshly observed command label/path, proof that exactly one supported UI invocation occurred, the post-action clean/error state, any diagnostic corroboration that appeared naturally, evidence paths, and whether AC-6 is fully satisfied.

**T7.1 — Precondition verification (read-only):**
- `FX_FormPropertyLab06` **closed** (no form tab; tablist shows only Lab04 "Form Property Lab Coupled Unload Replay" + Lab05).
- **No User Preferences UI open** (normal Designer: toolbox/properties/tabs; no prefs dialog/tab).
- **Designer clean, only Lab04/Lab05 open & untouched** (Save/Regen/Undo/Redo all disabled; Lab05 properties normal; User scope `anton.ramos@3mworks.com.ph`).

**T7.2 — Re-observe the exact command label (read-only, before use):**
- Opened the Designer **Form** menu → **Definition** (submenu) → the Definition submenu visibly showed the exact command label **`Unload All Global Form Objects`** (menuitem `#menuitem-1030-itemEl`), alongside Revert Form Definition, Regenerate Form (disabled), Regenerate Form from Cache (disabled), Site Developer Impersonation, New, Copy, Delete. (evidence `48`.)
- **Freshly observed label/path: `Form > Definition > Unload All Global Form Objects`** (Designer). Consistent with the original EXP-007 T5 observation.

**T7.3 — Single invocation (exactly once):**
- Clicked **`Unload All Global Form Objects`** (`#menuitem-1030-itemEl`) **exactly once** (single real click). Did **not** re-open the menu or re-activate the item for verification.

**T7.4 — Post-action state (after waiting for completion):**
- **No error dialog, toast, or other error state** remained (normal Designer; no dialogs/toasts/errors). (evidence `49`.)
- **Designer clean** (Save/Regen/Undo/Redo all disabled; Lab05 properties normal). (evidence `49`.)
- **`FX_FormPropertyLab06` remains closed** (no form tab; tablist shows only Lab04 + Lab05). (evidence `49`.)

**T7.5 — Diagnostic corroboration (naturally observed network activity; NOT used as a mechanism):**
- The single invocation produced exactly **one new** `POST /DesignerSession/ClearCache` → **200**, request body `{"instanceId":95,"eventName":"","eventSource":"","eventArgs":[]}`, response **`{"Success":true}`** (request #150) — matching the original EXP-007 unload signature. Preceded by a `SaveChanges` `{"formId":106}` (#134) as part of the same operation.
- Two **earlier, historical** ClearCache requests exist in this persistent session from prior save/close operations (NOT additional unload invocations): #95 `{"instanceId":null}` (T3 Save pair) and #116 `{"instanceId":79}` (T5 close pair). These predate this task and are not attributable to the AC-6 invocation.
- The ClearCache request is recorded **only as diagnostic corroboration**; it was not called, replayed, synthesized, or used as an alternate mechanism for the unload.

**T7.6 — AC-6: FULLY SATISFIED.**
- Precondition verified (target closed, no prefs UI, Designer clean, Lab04/Lab05 untouched); the exact label `Unload All Global Form Objects` was freshly re-observed and captured before use; the command was invoked **exactly once** through the supported UI; post-action state is clean (no error/toast, Designer clean, target still closed); diagnostic corroboration (single new ClearCache #150, `{"Success":true}`) observed naturally. **AC-6 PASS.**

**T7.7 — Stopped here (per instruction, after the single unload).**
- Did **NOT** reopen `FX_FormPropertyLab06`.
- Did **NOT** change or Save any User Preference.
- Did **NOT** modify `FX_FormPropertyLab04`/`FX_FormPropertyLab05`.
- Did **NOT** invoke the unload a second time.
- Did **NOT** create/modify any recipe or project-context file.
- **Next task (T8/AC-7):** reopen exactly `FX_FormPropertyLab06` (ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) and verify Description persistence + unchanged comparison properties.

**T7 evidence files:**
- `48-ac6-form-definition-unload-label.png` — Designer `Form > Definition` submenu open showing the enabled **`Unload All Global Form Objects`** label (read-only label evidence, captured before use).
- `49-ac6-after-unload-clean-no-error.png` — after the single invocation: Designer clean (Save disabled), no error dialog/toast, `FX_FormPropertyLab06` closed (no tab), Lab04 + Lab05 present.

**T7 knowledge-state updates:**
- Exact 2026.09.08 unload command label `Unload All Global Form Objects` under Designer `Form > Definition`: **observed** (re-confirmed live in this replay, cycle 9; consistent with original EXP-007 T5).
- Single supported-UI invocation of the unload produces a `SaveChanges` + `ClearCache` (`{"Success":true}`) pair; the ClearCache is diagnostic corroboration only: **observed** (cycle 9).
- **Pitfall (re-confirmed):** this is a persistent browser session — `ClearCache` requests accumulate across tasks (historical #95/#116 from prior save/close operations). Attribute only the **new** request produced by the current invocation; do not count historical requests as additional invocations.

## T8 — Post-unload reopen + compare (AC-7 + AC-8) (cycle 10, 2026-10-02)

**Coordinator instruction:** Complete T8 (AC-7 + AC-8): reopen exactly `FX_FormPropertyLab06` (ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) after the single unload, verify the Description persisted as `Form Property Description Lab Replay` and all comparison properties are unchanged vs the T2 baseline, and leave it open and clean for the final audit. Do not edit or Save anything, do not change User Preferences, do not invoke the unload again, and do not modify `FX_FormPropertyLab04`/`05`.

**T8.1 — Pre-reopen state (read-only, no mutation):**
- Browser tabs (fresh conversation; inspected before any action): Tab 0 = Web Client (portal), Tab 1 = the same stray dead bare-portal tab, Tab 2 (current) = Designer.
- Confirmed (live read): `FX_FormPropertyLab06` **closed** (no form tab; tablist shows only Lab04 "Form Property Lab Coupled Unload Replay" + Lab05); **no User Preferences UI open**; **Designer clean** (Save/Regen/Undo/Redo all disabled); User scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

**T8.2 — Reopen path (supported UI):**
- **Reopen path: Designer `Form` menu → recent-forms entry `FX_FormPropertyLab06`** (the first recent-forms item in the Designer `Form` menu `menu-1021`, `#menuitem-1073-itemEl`). A single real click reopened the form. (Form-menu snapshot `page-2026-10-02T07-57-47-943Z.yml` — `FX_FormPropertyLab06` is the first recent-forms entry, above `FX_FormPropertyLab05`/Lab04/Lab03/etc.)
- After the click: URL became `?MGForm=FX_FormPropertyLab06`; the `FX_FormPropertyLab06` form tab appeared and became active; the `FX_FormPropertyLab05` and `FX_FormPropertyLab04` (`Form Property Lab Coupled Unload Replay`) tabs remained open (untouched); **no dialog/prompt** appeared. (evidence `50`.)

**T8.3 — Scoped identity of the loaded version (AC-7):**
- URL: `MGForm=FX_FormPropertyLab06` (verified programmatically).
- Status bar: **`[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`** — the loaded version is **ScopeType=`User`**, **ScopeName=`anton.ramos@3mworks.com.ph`**, matching the T2 baseline exactly.
- Form tab `FX_FormPropertyLab06` present and selected.
- **AC-7 PROVEN:** the exact same User-scope version (`FX_FormPropertyLab06`, ScopeType=User, ScopeName=`anton.ramos@3mworks.com.ph`) was reopened.

**T8.4 — Post-unload Form property read (reopened Designer / effective Form definition) (AC-8):**
Read from the reopened form's Design property store (`formpropertygrid-1135`, session formId **119**):

| Property | Post-unload value (reopened) | T2 baseline | Comparison |
|----------|------------------------------|-------------|------------|
| Name | `FX_FormPropertyLab06` | `FX_FormPropertyLab06` | unchanged |
| **Description** | **`Form Property Description Lab Replay`** | *(empty)* | **PERSISTED** (the T3 edit survived the coupled unload) |
| Caption | *(empty)* | *(empty)* | unchanged |
| Version | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | unchanged |
| Device Type | `Default` | `Default` | unchanged |
| Form Type | `Normal` | `Normal` | unchanged |
| Is Master | `True` | `True` | unchanged |
| ScopeType | `User` | `User` | unchanged |
| ScopeName | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | unchanged |

**Result: the Description `Form Property Description Lab Replay` persisted across the verified coupled unload, and every recorded comparison property is unchanged from the T2 baseline.** (evidence `50` — reopened form with the Design properties panel showing Description = `Form Property Des…`, Caption empty, Version/Device Type/Form Type/Is Master at baseline, User scope.)

**T8.5 — Post-reopen state (left open and clean):**
- `FX_FormPropertyLab06` is **open and clean**: Save/Regen/Undo/Redo all disabled (no unsaved changes), no visible windows/dialogs; `FX_FormPropertyLab04`/`FX_FormPropertyLab05` tabs still open/untouched; **console 0 errors / 0 warnings**. Left open for the final audit. Nothing was edited or Saved; no User Preference was changed; the unload was **not** invoked again; `FX_FormPropertyLab04`/`05` and all other Forms were untouched.

**T8.6 — AC-7 + AC-8: FULLY SATISFIED.**
- **AC-7 (reopen exact scoped version):** the exact `FX_FormPropertyLab06` (ScopeType=User, ScopeName=`anton.ramos@3mworks.com.ph`) was reopened via the supported Designer `Form`-menu recent-forms path (single click, no prompt; URL `MGForm=FX_FormPropertyLab06`). **PASS.**
- **AC-8 (Description persisted + comparison properties unchanged):** the reopened Design store shows Description = `Form Property Description Lab Replay` (persisted from the T3 edit across the coupled unload; was empty at the T2 baseline) and every comparison property (Name/Caption/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName) unchanged vs the T2 baseline. **PASS.**

**T8.7 — Stopped here (per instruction, after reopen + compare).**
- Left `FX_FormPropertyLab06` **open and clean** (no unsaved changes; Save/Regen/Undo/Redo disabled; no dialogs; console clean) for the final audit.
- Did **NOT** edit or Save anything; did **NOT** change User Preferences; did **NOT** invoke the unload again; did **NOT** modify `FX_FormPropertyLab04`/`05` or any other Form.
- **Next task (final audit):** read-only uniqueness, preference, and repository-scope audit; acceptance table; classification (replay_verified).

**T8 evidence files:**
- `50-t8-reopened-lab06-properties-description-persisted.png` — reopened `FX_FormPropertyLab06` (tab selected/active; URL `MGForm=FX_FormPropertyLab06`): Design properties Name `FX_FormPropertyL…`, **Description `Form Property Des…` (persisted)**, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean; Lab04 + Lab05 tabs present.

**T8 knowledge-state updates:**
- Description persistence across the verified coupled unload (closed → single unload with `Unload IDO Metadata With Forms` CHECKED → reopened same User scope): **observed** (T8) — the core acceptance result of this replay.
- All comparison properties unchanged after reopen: **observed** (T8).
- Reopen path Designer `Form` menu → recent-forms entry `FX_FormPropertyLab06` (single click, no prompt): **observed** (T8) — consistent with original EXP-007 T6.
- Reopening a clean form produces no unsaved-change state (toolbar stays disabled) and no console errors: **observed** (T8).

## T9 — Read-only T8 reconciliation (AC-7 + AC-8) (cycle 11, 2026-10-02)

**Coordinator instruction:** Perform a read-only T8 reconciliation only. Do not edit, Save, regenerate, close, or unload any Form, and do not open/change/save User Preferences. Inspect the existing T8 evidence `50`, the current record, and the currently loaded Designer state only as needed without changing anything. Determine and report whether the evidence proves AC-7 and AC-8 in full; state the exact reopen path, the evidence supporting each required value, and any discrepancy. Leave `FX_FormPropertyLab06` open and clean if currently open. Update only the record if needed; create no new Mongoose changes.

**T9.1 — Method (read-only, no mutation):**
- Re-inspected the existing T8 evidence `50-t8-reopened-lab06-properties-description-persisted.png`.
- Re-inspected the current record T8 section (T8.1–T8.7).
- Took a fresh read-only snapshot of the currently loaded Designer state (no interaction/mutation).
- Performed one read-only programmatic read of the Design property store (`formpropertygrid-1135`) to confirm the exact (non-truncated) values.
- No Form was edited/Saved/regenerated/closed/unloaded; no User Preference was opened/changed/Saved; no new Mongoose change was created.

**T9.2 — Current Designer state vs evidence `50` (match):**
- Fresh read-only snapshot: URL `MGForm=FX_FormPropertyLab06`; three form tabs (Lab04 "Form Property Lab Coupled Unload Replay", Lab05, **Lab06 selected**); Design properties Name `FX_FormPropertyLab06`, Description `Form Property Description Lab Replay`, Caption empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean (Save/Regen/Undo/Redo all disabled). **Identical to evidence `50`** — the form is still open and clean; nothing changed since T8.

**T9.3 — Definitive read-only value confirmation (Design store `formpropertygrid-1135`):**
- `Design.Name` = `FX_FormPropertyLab06`
- `Design.Description` = `Form Property Description Lab Replay` (**length 36; exact string match `true`** — no truncation/whitespace)
- `Design.Caption` = `""` (**empty**)
- `Design.Version` = `User version for user anton.ramos@3mworks.com.ph`
- `Design.DeviceType` = `Default`
- `Design.FormType` = `Normal`
- `Design.IsMaster` = `True`

**T9.4 — AC-7 + AC-8 reconciliation verdict:**
- **(1) Reopened after the single unload via a supported UI path — PROVEN.** Reopen path (T8.2): Designer `Form` menu → recent-forms entry `FX_FormPropertyLab06` (`#menuitem-1073-itemEl`), single real click, no prompt; occurred after the T7 single unload. Evidence: Form-menu snapshot `page-2026-10-02T07-57-47-943Z.yml` + evidence `50`.
- **(2) Exact scoped identity — PROVEN.** Form Name `FX_FormPropertyLab06` (URL `MGForm=FX_FormPropertyLab06` + `Design.Name` + selected tab); ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph` (status bar). Evidence `50` + fresh snapshot + store read.
- **(3) Description exactly `Form Property Description Lab Replay` — PROVEN.** Store read: exact string match `true`, length 36. Evidence `50` (visual) + T8.4 store read + T9.3 re-read.
- **(4) Comparison properties vs T2 baseline — PROVEN (all unchanged).** Caption empty; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; ScopeType `User`; ScopeName `anton.ramos@3mworks.com.ph`. Store read (T9.3) + evidence `50`.
- **(5) Designer clean after reopen — PROVEN.** Save/Regen/Undo/Redo all disabled; no dialogs; console 0 errors/0 warnings (T8). Fresh snapshot re-confirms clean.

**T9.5 — Discrepancies: NONE.** The T8 evidence and the current Designer state are mutually consistent and satisfy every AC-7/AC-8 element. No correction to the T8 record was required; this section documents the independent read-only re-verification.

**T9.6 — State left as-is:** `FX_FormPropertyLab06` remains **open and clean** (Save/Regen/Undo/Redo disabled; no dialogs; console clean); Lab04/Lab05 open/untouched. No Mongoose change was created; no preference was touched; no unload was invoked. **Next task (final audit):** read-only uniqueness, preference, and repository-scope audit; acceptance table; classification (replay_verified).

## T10 — Final read-only audit (AC-9 + AC-10) (cycle 12, 2026-10-02)

**Coordinator instruction:** Perform the final read-only audit for AC-9 and AC-10. Do NOT edit, Save, regenerate, close, unload, create, rename, or delete any Form or artifact; do not change or Save any User Preference. (1) Verify the current Designer is clean and the target still shows the AC-8 values. (2) Perform a read-only Form inventory audit (total count, `FX_` count, exactly one `FX_FormPropertyLab06` — exact and case-insensitive). (3) Re-read `Unload IDO Metadata With Forms` via the Web Client `Form > User Preferences` route (must be visibly CHECKED/enabled; make no change; close without Save). (4) Reconfirm the target Designer state is clean after the preference read. (5) Audit the repository and prove this run's changes are confined to the EXP-007-R2 record + `evidence/EXP-007-R2/` (aside from harness/Playwright runtime artifacts); report any deviation. (6) Reconcile AC-1…AC-9 in the record; if all pass, classify the procedure as `replay_verified` with an explicit claim limitation; write the AC-1…AC-10 table. Capture final-audit evidence under `evidence/EXP-007-R2/`.

**T10.1 — Method (read-only, no mutation):**
- No Form was edited/Saved/regenerated/closed/unloaded/created/renamed/deleted; no User Preference was changed or Saved; no unload was invoked. Every step below is a read-only inspection (snapshots, programmatic store reads, a read-only Select Form filter, and a read-only preference read closed without Save).
- `FX_FormPropertyLab06` was kept open and clean throughout; the read-only inventory/preference paths only temporarily changed visible focus in the Web Client, without modifying any Mongoose state.

**T10.2 — Designer clean + AC-8 values re-confirmed (Step 1):**
- Fresh read-only snapshot of the Designer (Tab 2): URL `MGForm=FX_FormPropertyLab06`; three form tabs (Lab04 "Form Property Lab Coupled Unload Replay", Lab05, **Lab06 selected**); Design properties Name `FX_FormPropertyLab06`, **Description `Form Property Description Lab Replay`**, Caption empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar **clean** (Save/Regenerate/Undo/Redo all disabled). **Identical to the T8/T9 state** — the target is still open and clean with the AC-8 values. (evidence `53`.)

**T10.3 — Read-only Form inventory audit (Step 2):**
- Opened the Web Client **Select Form** dialog (Open button) and scanned the full store programmatically (fields `mgdata`=Name, `text`=Caption):
  - **Total forms = 642** (T1 baseline 641 → exactly +1, consistent with exactly one new form).
  - **`FX_` forms = 11** (T1 baseline 10 → exactly +1): `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, **`FX_FormPropertyLab06`**, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02`, `FX_FormPropertyLab04`, `FX_FormPropertyLab03`, `FX_FormPropertyLab01`.
  - **Exactly one `FX_FormPropertyLab06`** (distinct record `extModel214-1939`): Name exact = **1**, Name case-insensitive = **1**, Caption exact = **1**, Caption case-insensitive = **1** (the single record's Caption is the Name fallback because Caption is empty). **Distinct matching records = 1.**
- Visual confirmation: filtered the dialog to `FX_` (Case Sensitive off, Starts With off, Filter By Caption & Name) → exactly **11 rows**, including exactly one `FX_FormPropertyLab06`. (evidence `51`.)
- Dialog closed via **Cancel** (no changes); Web Client verified clean (no windows, Save disabled).

**T10.4 — Preference re-read (Step 3):**
- Opened the Web Client **Form > User Preferences** (`menuitem-1043`) → User Preferences workspace tab → **Behavior** page (the T1/T5.9-supported visible route).
- The checkbox **`Unload IDO Metadata With Forms`** is **visibly rendered** and read **CHECKED/enabled**: authoritative programmatic read (Ext component `ext-comp-3102`, boxLabel `Unload IDO Metadata With Forms`) → `checked: true`, `getValue(): true`, `disabled: false`, `aria-checked: "true"`. **Unchanged** from T1/T5/T5.9. (evidence `52`.)
- **No toggle, no change to any other preference, no Save/OK.** Closed via the tab **× (Close Panel)** button — **not** OK/Save; **no "save changes?" prompt appeared**; workspace returned to a clean state (no tabs, no windows, Save disabled).

**T10.5 — Designer clean re-confirmed after the preference read (Step 4):**
- Switched back to the Designer (Tab 2) and re-verified (read-only): `FX_FormPropertyLab06` still open and **clean** (Save/Regenerate/Undo/Redo all disabled), still showing the AC-8 values (Name/Description/Caption/Version/Device Type/Form Type/Is Master + User scope) — the preference read (in the Web Client) did not affect the Designer. (evidence `53`.)

**T10.6 — Repository-scope audit (Step 5):**
- Audited the worktree by file modification time (the worktree is not a git repository).
- **Most recently modified files** are confined to: (a) the EXP-007-R2 record (`experiments/EXP-007-R2-…md`), (b) `evidence/EXP-007-R2/` (this cycle added `51`/`52`/`53`), and (c) harness/Playwright runtime artifacts (`tools/learning-harness/data/**`, `evidence/playwright/**`).
- **No protected file was modified:** the most recent non-allowed file is the original `experiments/EXP-007-form-description-persistence-across-verified-coupled-unload.md` (mtime 2026-10-02 1:48:45 PM — its T7.9 finalization, **predating** this run's 1:58:29 PM start). `AGENTS.md` (9/30), `opencode.json` (9/30), `environments/current-environment.md` (9/30), and every file under `recipes/` (9/30) all predate the run. No other `experiments/EXP-00x-*.md` was modified.
- **Conclusion: no deviation.** This run's changes are confined to the EXP-007-R2 record + `evidence/EXP-007-R2/` (plus harness/Playwright runtime artifacts).

**T10.7 — Acceptance criteria (AC-1 … AC-10) evidence mapping:**

| AC | Requirement | Result | Evidence / record section |
|---|---|---|---|
| AC-1 | `FX_FormPropertyLab06` proven absent before creation (exact + case-insensitive, store + UI, Name + Caption) | **PASS** | T1 (store scan 641, 0/0; UI filters both case modes; positive control) — `03`–`07` |
| AC-2 | Exactly one new User-scope classic BuildFromScratch Form created via the verified recipe (Save Template unchecked); store 641→642, `FX_` 10→11; no template artifact | **PASS** | T2 (evidence `12`–`21`) |
| AC-3 | Exact scoped identity (ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) + full pre-Description baseline recorded (Description empty, Caption empty, Version, Device Type, Form Type, Is Master) | **PASS** | T2 (evidence `18`, `21`; T2.4 table) |
| AC-4 | Only the Form-level Description changed empty → `Form Property Description Lab Replay`; ordinary Save to clean; all comparison properties unchanged | **PASS** | T3 (evidence `22`–`25`; T3.4 table) |
| AC-5 | Target closed via supported UI (no unsaved-change prompt; Lab04/05 untouched) + `Unload IDO Metadata With Forms` read CHECKED/enabled via the T1-supported visible route (no mutation/Save) | **PASS** | T5/T5.9 (evidence `26`–`27`, `45`–`47`) |
| AC-6 | `Unload All Global Form Objects` invoked **exactly once** via Form > Definition | **PASS** | T7 (evidence `48`–`49`; single new ClearCache #150 `{"Success":true}`) |
| AC-7 | Target reopened in the same User scope (ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) | **PASS** | T8 (evidence `50`) |
| AC-8 | Description persisted (`Form Property Description Lab Replay`) + all comparison properties unchanged vs the T2 baseline | **PASS** | T8/T9 (evidence `50`; T8.4 / T9.3 store reads) |
| AC-9 | Final read-only audit: exactly one target (642 total / 11 `FX_` / exactly one `FX_FormPropertyLab06`, exact + CI); `Unload IDO Metadata With Forms` still CHECKED with no mutation; Designer clean; repository changes confined to the record + `evidence/EXP-007-R2/` | **PASS** | T10 (evidence `51`–`53`; T10.2–T10.6) |
| AC-10 | Classification: with AC-1…AC-9 all passing, the EXP-007 Description-persistence procedure is classified `replay_verified` (factory/harness level) | **PASS** | T10.8 (below) |

**T10.8 — Classification (AC-10):**
- **All acceptance checks AC-1 through AC-9 PASS.** Every check is supported by the cited evidence and record sections.
- **Classification: `replay_verified`.** This is a second, independent, clean execution of the EXP-007 Form-Description-persistence-across-the-verified-coupled-unload procedure (original = EXP-007 on `FX_FormPropertyLab05`; this replay = EXP-007-R2 on `FX_FormPropertyLab06`), and it reproduced the result: the Form-level Description `Form Property Description Lab Replay` persisted across the single `Unload All Global Form Objects` invocation (with `Unload IDO Metadata With Forms` CHECKED), and every recorded comparison property remained unchanged.
- **Claim limitation (explicit, no generalization):** `replay_verified` applies **only** to this specific procedure in this specific environment and workflow — Mongoose Designer 2026.09.08 / Portal 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM`, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, **User** scope, the signed-in user `anton.ramos@3mworks.com.ph`, the Form-level **Description** property, and the specific coupled-unload sequence (close → single `Unload All Global Form Objects` with the preference CHECKED → reopen same User scope). It does **not** generalize to: other Form properties (e.g., Caption), other scopes (Configuration/System), other users/tenants/configurations, other Mongoose releases, other cache boundaries, or a different preference state. No reusable Description recipe was created or modified in this replay (per scope); the verified creation recipe `recipes/forms/create-basic-form.md` was used as-is and not modified.

**T10.9 — T10 evidence files (under `evidence/EXP-007-R2/`):**
- `51-t10-inventory-fx-filter.png` — Select Form dialog filtered to `FX_` → exactly 11 `FX_` rows, including exactly one `FX_FormPropertyLab06` (store total 642).
- `52-t10-preference-unload-checked.png` — Web Client User Preferences Behavior page: **`Unload IDO Metadata With Forms` visibly rendered and CHECKED** (unchanged; closed without Save).
- `53-t10-designer-clean-final.png` — Designer final state: `FX_FormPropertyLab06` open and clean (Save/Regen/Undo/Redo disabled), Description `Form Property Description Lab Replay`, all AC-8 values intact, User scope.

**T10.10 — Knowledge-state updates:**
- The EXP-007 Form-Description-persistence-across-the-verified-coupled-unload procedure is now **`replay_verified`** (second independent clean execution: EXP-007 original on `FX_FormPropertyLab05` + this replay on `FX_FormPropertyLab06`), within the explicit claim limitation in T10.8.
- Final inventory (642 total / 11 `FX_` / exactly one `FX_FormPropertyLab06`), preference still CHECKED/unchanged, Designer clean, and repository-scope confinement: **observed** (T10, read-only final audit).
- **Experiment complete.** All acceptance criteria (AC-1…AC-10) PASS. `FX_FormPropertyLab06` remains open and clean; `FX_FormPropertyLab04`/`FX_FormPropertyLab05` remain open and untouched; `Unload IDO Metadata With Forms` remains CHECKED/unchanged. No Mongoose mutation, preference change, or unload was performed in T10.

## T11 — Read-only T10 final-audit reconciliation (AC-9 + AC-10) (cycle 13, 2026-10-02)

**Coordinator instruction:** Perform a read-only T10 final-audit reconciliation only. Do not change/Save/regenerate/close/unload/create/rename/delete any Mongoose artifact, and do not change or Save User Preferences. Inspect the existing final-audit evidence `51`/`52`/`53`, the current record, and the repository/worktree state; re-read current browser state only if needed without changing anything. Determine whether AC-9 is fully proven and whether AC-10 is fully satisfied in the record. Report exact final counts, uniqueness result, preference state, clean-state result, repository-scope result, complete AC-1…AC-10 status with evidence paths, final classification, and any discrepancy. Update only the record if a documentation-only reconciliation note is needed; make no Mongoose changes and no changes to recipes, environment files, AGENTS.md, or project-context files.

**T11.1 — Method (read-only, no mutation):**
- No Mongoose artifact was changed/Saved/regenerated/closed/unloaded/created/renamed/deleted; no User Preference was changed or Saved; no unload was invoked. T11 is a read-only reconciliation: re-inspection of the existing T10 evidence (`51`/`52`/`53`), the record (T10 section + AC table + classification + status line), the repository/worktree (mtime audit), and one fresh read-only Designer snapshot.

**T11.2 — Re-inspected existing final-audit evidence (unchanged):**
- `51-t10-inventory-fx-filter.png` — Select Form dialog filtered to `FX_` (Filter By: Caption & Name; Case Sensitive off; Starts With off) → exactly **11 rows**, exactly one `FX_FormPropertyLab06`. Matches T10.3.
- `52-t10-preference-unload-checked.png` — Web Client User Preferences **Behavior** page: **`Unload IDO Metadata With Forms` visibly CHECKED** (`OK`/`Help` buttons present; the view was closed via the tab × without Save per T10.4). Matches T10.4.
- `53-t10-designer-clean-final.png` — Designer: `FX_FormPropertyLab06` open, Name/Description/Caption/Version/Device Type/Form Type/Is Master at AC-8 values, User scope, toolbar clean. Matches T10.2/T10.5.

**T11.3 — Fresh read-only Designer re-confirmation (live state, no change):**
- One fresh read-only snapshot of the current Designer (Tab 2, `MGForm=FX_FormPropertyLab06`): three tabs (Lab04 "Form Property Lab Coupled Unload Replay", Lab05, **Lab06 selected**); Design properties Name `FX_FormPropertyLab06`, **Description `Form Property Description Lab Replay`**, Caption empty, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar **clean** (Save / Regenerate Form / Undo / Redo all **disabled**). **Identical to the T8/T9/T10 state — no drift.** (evidence `54`.)

**T11.4 — AC-9 determination (fully proven):**
- **(a) Exactly one `FX_FormPropertyLab06` (exact + case-insensitive):** PROVEN. Evidence `51` (11 `FX_` rows, one target) + T10.3 store scan (Name exact=1, Name CI=1, Caption exact=1, Caption CI=1; distinct record `extModel214-1939`).
- **(b) Final total / `FX_` counts recorded:** PROVEN. 642 total (T1 baseline 641 → +1), 11 `FX_` (T1 baseline 10 → +1), recorded in T10.3.
- **(c) `Unload IDO Metadata With Forms` visibly CHECKED/enabled via the supported Web Client Behavior-page view, no mutation/Save:** PROVEN. Evidence `52` + T10.4 (closed via tab ×, no Save, no prompt).
- **(d) Target Designer state clean:** PROVEN. Evidence `53` + fresh T11.3 snapshot (Save/Regen/Undo/Redo disabled).
- **(e) Experiment-attributable repository changes confined to the record + `evidence/EXP-007-R2/` (aside from recognized harness/Playwright runtime artifacts):** PROVEN for the experiment/worker — see the T11.5 refinement below for a documentation correction to the T10.6 wording.
- **AC-9 verdict: PASS (fully proven).**

**T11.5 — Repository-scope REFINEMENT (documentation correction to T10.6; not an experiment-scope violation):**
- A stricter T11 mtime audit (allowing only `tools/learning-harness/data/**` as harness runtime, rather than all of `tools/learning-harness/**` as T10.6 implicitly did) surfaces additional files modified after the run start (1:58:29 PM) that T10.6 did not itemize:
  - `tools/learning-harness/src/protocol/validate.ts` (14:24:30), `src/controller/machine.ts` (14:24:45)
  - a full `tools/learning-harness/dist/**` TypeScript rebuild (14:24:55)
  - `tools/learning-harness/fixtures/scenarios/scenarios.json` (14:25:06)
  - `tools/learning-harness/node_modules/.vite/vitest/**/results.json` (14:26:00, a test run)
- **Characterization:** these are **harness-tooling changes (source edit → rebuild → fixtures → test)** made by the operator/tooling **during the cycle-3 operator review pause** (`events.jsonl`: `run.paused` 14:19:03 → `backend.ready`/`run.resumed` 14:26:34). They were **not made by the experiment worker** and are **not attributable to EXP-007-R2**; they are part of the harness tooling, not the experiment.
- **Impact on AC-9:** none. AC-9 concerns **experiment-attributable** changes, which remain confined to the EXP-007-R2 record + `evidence/EXP-007-R2/`. The T10.6 sentence "the most recent non-allowed file is the original EXP-007 record (1:48:45 PM)" is **refined** as follows: the most recent **experiment-attributable** file is the EXP-007-R2 record; the most recent **non-experiment** file is harness tooling (`tools/learning-harness/dist/**`, 14:24:55), which is operator tooling maintenance, not an experiment artifact. The protected knowledge files (`AGENTS.md`, `opencode.json`, `environments/current-environment.md`, all of `recipes/`, and all other `experiments/EXP-00x-*.md`) were **not** modified by this run.
- **Verdict: no experiment-scope deviation.** (T10.6's conclusion stands; its wording is refined for precision.)

**T11.6 — AC-10 determination (fully satisfied in the record):**
- **(a) AC-1…AC-9 all passed with evidence:** YES — T10.7 table (all PASS) with per-AC evidence paths.
- **(b) EXP-007 literal User-scope Form Description persistence procedure across this specific tested unload sequence classified `replay_verified` by this second independent harness/worker execution:** YES — T10.8 (original EXP-007 on `FX_FormPropertyLab05` + this replay on `FX_FormPropertyLab06`).
- **(c) Record explicitly states no generalization to other Form properties, scopes, users, tenants, configurations, cache mechanisms, or Mongoose versions:** YES — T10.8 claim limitation.
- **(d) No reusable Description recipe created or modified:** YES — T10.8 (the verified creation recipe `recipes/forms/create-basic-form.md` was used as-is and not modified; no Description recipe was created).
- **AC-10 verdict: PASS (fully satisfied).**

**T11.7 — Complete AC-1…AC-10 status (with evidence paths):**

| AC | Result | Evidence / record section |
|---|---|---|
| AC-1 | PASS | T1 — `03`–`07` |
| AC-2 | PASS | T2 — `12`–`21` |
| AC-3 | PASS | T2 — `18`, `21` |
| AC-4 | PASS | T3 — `22`–`25` |
| AC-5 | PASS | T5/T5.9 — `26`–`27`, `45`–`47` |
| AC-6 | PASS | T7 — `48`–`49` |
| AC-7 | PASS | T8 — `50` |
| AC-8 | PASS | T8/T9 — `50` |
| AC-9 | PASS | T10/T11 — `51`–`53` (+ T11.3 `54`); T10.2–T10.6, T11.3–T11.5 |
| AC-10 | PASS | T10.8 / T11.6 |

**T11.8 — Final classification and discrepancy:**
- **Final classification: `replay_verified`** (unchanged from T10.8; reaffirmed by this read-only reconciliation).
- **Discrepancy found and resolved:** T10.6's repository-scope wording was refined (T11.5) to separate experiment-attributable changes (confined to record + evidence) from operator harness-tooling changes (`tools/learning-harness/{src,dist,fixtures,node_modules}`, 14:24:30–14:26:00, during the cycle-3 review pause). This is a documentation correction, not an experiment-scope violation; AC-9 and AC-10 remain PASS.

**T11.9 — T11 evidence files (under `evidence/EXP-007-R2/`):**
- `54-t11-designer-clean-reconfirm.png` — fresh read-only Designer snapshot: `FX_FormPropertyLab06` open and clean (Save/Regen/Undo/Redo disabled), AC-8 values intact, User scope (no drift from T10).

**T11.10 — Knowledge-state updates:**
- AC-9 (final read-only audit) and AC-10 (classification): **replay_verified** (reaffirmed, T11 read-only reconciliation).
- Repository-scope refinement (harness tooling changes are operator-driven, not experiment-attributable): **observed** (T11 mtime audit + `events.jsonl` pause/resume correlation).
- **No Mongoose changes, no preference changes, no unloads, and no changes to recipes, environment files, AGENTS.md, or project-context files were made in T11.** `FX_FormPropertyLab06` remains open and clean; Lab04/Lab05 remain open and untouched; `Unload IDO Metadata With Forms` remains CHECKED/unchanged.