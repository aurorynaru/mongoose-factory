# EXP-016-R2 — Clean Replay: FormSync Script Saved-Form Representation (FX_FormVariableLab05)

Status: **REPLAY COMPLETE — AC-1..AC-7 SUPPORTED (read-only).** A fresh worker execution independently reproduced the EXP-016 T12 FormSync **Script** (Output=View) saved-Form representation path on the existing User-scoped `FX_FormVariableLab05`. Runtime FormSync was configured with the intended DEM configuration as Source (and Target), Filter Configuration=Source was explicit, Scope Type=User with the User filter set to the current user, the object list was narrowed to exactly one verified `FX_FormVariableLab05` row (Inc checked, all others unchecked, User/Group Name visibly verified before Inc), and Script Generate produced a read-only saved-Form definition representation that identifies the Form by Name + ScopeType=3 (User) + ScopeName and contains the same class of variable-related metadata handling (`DELETE FROM Variables WHERE FormID = @FormID`). **No Mongoose artifact was created, modified, deleted, Saved, Regenerated, or executed; no Form variable touched; no database apply performed.**
Date: 2026-10-05
Mode: LEARNING MODE — clean replay (strictly read-only; no mutation).
Run: replay of EXP-016 (T12 Script path), proposed after run R-20261004-094134-Cn9j.
Record: `experiments/EXP-016-R2-clean-replay-formsync-script-saved-form-representa.md`

## Objective

Independently reproduce the EXP-016 saved-Form representation path: on the existing factory-owned User-scope Form `FX_FormVariableLab05`, use the supported Runtime FormSync **Script** utility (Output=View) to generate a read-only saved-Form definition representation. Select the intended configuration as Source, explicitly use Filter Configuration=Source, constrain/verify the exact User/ScopeName and Form identity, include exactly the intended scoped Form row, and generate the Script. Capture evidence that the representation identifies the intended Form and visibly contains the same class of variable-related metadata handling observed in EXP-016. Remain strictly non-mutating; do **not** interpret generic Variables/FormID handling as proof that any specific Form variable was serialized.

## Starting state / preflight facts (2026-10-05, read-only)

- Environment: Mongoose Web Client **2026.09.08** (FormSync header in generated script confirms `FormSync 2026.09.08`), Portal shell **2026.09.00**, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Web Client iframe `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`; portal app `https://mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87`.
- Browser state at replay start (inspected first): live Mongoose Web Client session with the Web Client UI shell loaded (user badge + config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` + toolbar + Explorer). Session confirmed live, not re-established. No credential value read, printed, logged, or screenshotted.
- Repository/worktree baseline: branch **`exp/EXP-016-R2`**, HEAD **`e74c52d`** (`Merge EXP-016 (blocked)`); recent history: `43904f5 EXP-016: blocked`, `837d149 Adjust Strata output and compaction budgets`. `git status --porcelain` showed only `?? evidence/EXP-016-R2/` before this replay wrote anything.

## Session establishment / confirmation (read-only)

The inherited Web Client session was already live (Select Form inventory surface present; user badge + config group visible). It was **confirmed**, not re-established. No credential placeholder was needed. All confirmation steps occurred before any FormSync inspection.

**Net result:** live Mongoose session confirmed; no credential value exposed.

## Replay procedure (read-only, step-by-step)

1. **Preflight (evidence `00`):** Web Client live; user badge + config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` visible.
2. **Target identity (evidence `01`):** Select Form with **Filter By=Name**, filter text `FX_FormVariableLab05` → **exactly one row** (Name=`FX_FormVariableLab05`). Form opened read-only via the supported Select Form OK path; URL gained `favoriteContext=FX_FormVariableLab05`.
3. **Runtime FormSync (evidence `02`):** Opened FormSync via the supported runtime route (Form menu → FormSync; URL `favoriteContext=FormSync`). Selected **Source** configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` and **Target** configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; accepted with OK.
4. **Filter utility (evidence `03`):** Filter tab active with **Filter Configuration = Source** (combobox `ddlFirstConfig` showing `Source`), **Scope Type = User**, and the **User** combobox set to the current user (`<username>`). Clicked **Refresh List** → Custom Objects grid populated with User-scope objects including `FX_FormVariableLab05` (Object Type=Form, Scope Type=User).
5. **Single-row isolation (evidence `04`):** Clicked **Deselect All** (all Inc checkboxes cleared), then clicked the Inc checkbox of the `FX_FormVariableLab05` row exactly once. Post-state verified: **exactly one Inc-checked row** (`FX_FormVariableLab05`, Form, User); all other rows Inc-unchecked. The row's **User/Group Name** cell was visibly verified as the current user (`<username>`) **before** Inc was selected (grid rowgroup `f3e2811` ↔ User/Group Name rowgroup `f3e2568` [selected], same row index).
6. **Script tab (evidence `05`):** Switched to the **Script** utility tab. Its **Generate button was ENABLED** (contrast: EXP-016 T12 observed the Pseudo Code Generate persistently disabled; not re-attempted here, out of scope). Set **Output = View** (the View radio is rendered at `left:-9000px` in this FormSync instance — a Mongoose off-screen radio rendering quirk; set programmatically on the actual control `#mgradio-1474-inputEl` (`rbScriptDisplay`), verified `checked=true`, `Save` radio `#mgradio-1473-inputEl` `checked=false`). Clicked **Generate** → confirmation dialog **"Do you want to generate a SQL script containing definitions of the listed customized objects?"** → accepted **Yes**.
7. **Representation capture:** The utility delivered the generated script as a **downloaded archive** `FS_20261005_102224.zip` (Playwright download event), containing `FS_20261005_102224.SQL` and `FS_20261005_102224_LIC.SQL`. Extracted into `evidence/EXP-016-R2/script/` as the authoritative representation artifact.

## Generated representation — key facts (verbatim from `evidence/EXP-016-R2/script/FS_20261005_102224.SQL`)

- Header: `SQL Script generated by FormSync 2026.09.08 as of 10/5/2026 10:39 AM`; `Source Configuration: CYANWILDLION_DEM_MON_App_0`; `Objects scripted: Form: FX_FormVariableLab05`.
- **Form identity (AC-3):** resolved by `SELECT @FormID = Forms.ID FROM Forms WHERE [Name] = N'FX_FormVariableLab05' AND [ScopeType] = 3 AND [ScopeName] = N'<username>'`; re-inserted with `INSERT INTO [Forms] ( … ) VALUES ( 3, N'<username>', … N'FX_FormVariableLab05', … )`. Name=`FX_FormVariableLab05`, ScopeType=`3` (User), ScopeName=`<username>` — the intended scoped Form.
- **Variable-related metadata handling (AC-4 class):** DELETE block for the Form includes **`DELETE FROM Variables WHERE FormID = @FormID`** — the same class of variable-related Forms-database metadata handling observed in EXP-016 T12.
- **License companion (`FS_20261005_102224_LIC.SQL`):** `ModuleMembers` DELETE/INSERT entries for `FX_FormVariableLab05` under `CustomerForms` / `MGUserCreatedForms` and `TenantManagement`; contains the informational line `** APPLY THIS SCRIPT TO THE TARGET APPLICATION DATABASE **` — **no apply action was invoked** (Output=View; the archive is the utility's own output artifact).

## Requirement-to-evidence mapping

| # | Requirement | Result | Evidence |
|---|---|---|---|
| AC-1 | Live supported session + User editing scope before inspection; no credential exposure | **PASS** | `00-preflight-webclient-live.png`; badge/config group; User scope via Filter Scope Type=User + User combobox + grid User/Group Name |
| AC-2 | Exactly the intended Form selected: Name + ScopeType=User + exact ScopeName; included row's User/Group Name visibly verified before Inc | **PASS** | `01-select-form-filter-name-exact-one-opened.png` (exactly one Name row); `04-filter-only-fxformvariablelab05-included.png` (row User/Group Name = current user verified before Inc) |
| AC-3 | Runtime FormSync with intended configuration as Source + Filter Configuration explicitly Source + list narrowed to FX_FormVariableLab05 | **PASS** | `02-formsync-source-target-dem-selected.png`, `03-filter-source-user-scope-list-refreshed.png` |
| AC-4 | After Refresh List + Deselect All, exactly one verified scoped row included, no other object included | **PASS** | `04-filter-only-fxformvariablelab05-included.png` (exactly one Inc-checked row; all others unchecked) |
| AC-5 | Script Output=View generates visible representation identifying FX_FormVariableLab05 + scoped identity + variable-related metadata handling of same semantic class as EXP-016; generic handling explicitly insufficient for specific-variable proof | **PASS** | `05-script-generate-view-zip-downloaded.png` + `evidence/EXP-016-R2/script/FS_20261005_102224.SQL` (Name/ScopeType=3/ScopeName + `DELETE FROM Variables WHERE FormID = @FormID`) |
| AC-6 | Controlled-action audit: no mutation/Save/Regenerate/runtime/cache/preference/FormSync apply/SQL apply/direct-SQL/internal-API evidence | **PASS** | audit below |
| AC-7 | Repository audit: changes confined to this record + `evidence/EXP-016-R2/` | **PASS** | `git status --porcelain` → only `?? evidence/EXP-016-R2/` + this record; HEAD `e74c52d` unchanged |

## Observations

- The EXP-016 T12 Script path **reproduces cleanly** on a fresh worker execution: Runtime FormSync → Source/Target DEM config → Filter Configuration=Source → Scope Type=User + User filter → Refresh List → Deselect All → single Inc → Script Output=View → Generate → Yes.
- **Script Generate is enabled** in this fresh runtime instance (the Pseudo Code Generate disabled-state from EXP-016 T12 was not re-attempted; out of scope).
- **Output=View quirk (new, observed):** in this FormSync instance the View/Save radios are rendered off-screen (`left:-9000px`), so a normal click cannot reach them; the View radio was set on the actual control programmatically (`#mgradio-1474-inputEl`, `rbScriptDisplay`, `checked=true`) before Generate. Save remained unchecked.
- **Delivery quirk (new, observed):** with Output=View, this instance delivered the generated script as a **downloaded zip** (`FS_20261005_102224.zip`) rather than rendering it in an on-screen textbox (EXP-016 T12 evidence `37` described an on-screen View textbox). The downloaded archive is the utility's own output; no file was written to the Mongoose database and no apply action was invoked.
- **Variable-metadata class match:** `DELETE FROM Variables WHERE FormID = @FormID` matches the EXP-016 class. **Explicitly insufficient:** this generic Variables/FormID statement does **not** prove any specific `FX_FormVariableLab05` variable exists or was serialized; no variable name/value was searched for; absence of a variable name was not treated as negative evidence.
- **No Mongoose artifact was created, modified, or deleted; no Form/variable touched; no Save/Save As/Regenerate; no runtime execution/preview; no Unload/ClearCache/metadata unload; no User Preference change; no FormSync Import/Synchronize/Copy/Delete; no SQL applied to any database.**

## Evidence (under `evidence/EXP-016-R2/`)

- `00-preflight-webclient-live.png` — Web Client live (preflight).
- `01-select-form-filter-name-exact-one-opened.png` — Select Form Filter By=Name `FX_FormVariableLab05`: exactly one row; Form opened.
- `02-formsync-source-target-dem-selected.png` — Runtime FormSync with Source/Target = `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- `03-filter-source-user-scope-list-refreshed.png` — Filter Configuration=Source, Scope Type=User, User filter set, list refreshed.
- `04-filter-only-fxformvariablelab05-included.png` — exactly one Inc-checked row (`FX_FormVariableLab05`, Form, User); all others unchecked.
- `05-script-generate-view-zip-downloaded.png` — post-Generate state (zip delivered).
- `script/FS_20261005_102224.SQL` — generated saved-Form definition representation (the authoritative artifact).
- `script/FS_20261005_102224_LIC.SQL` — license companion (informational; not applied).

## Knowledge state (as of this replay)

- "Runtime FormSync Script (Output=View) on a fresh instance generates a read-only saved-Form definition representation identifying the target Form (Name/ScopeType=3/ScopeName) and containing `DELETE FROM Variables WHERE FormID = @FormID`" — **observed** (this replay; combined with EXP-016 T12 = two independent executions, but persistence/repeat contract not yet established → not promoted to `verified`).
- "View/Save radios rendered off-screen (`left:-9000px`) in this FormSync instance; View set programmatically on the actual control" — **observed** (single instance; not generalized).
- "Output=View delivered as a downloaded zip in this instance" — **observed** (single instance; EXP-016 T12 rendered on-screen — delivery mode may vary; not generalized).
- "Generic Variables/FormID statements are insufficient to prove any specific variable exists/was serialized" — **recorded constraint** (brief rule; carried through).

## Open questions / notes

- Delivery-mode difference (zip download vs on-screen textbox) between EXP-016 T12 and this replay: **unverified** whether instance-dependent, session-dependent, or version-dependent; not investigated (out of scope).
- Pseudo Code Generate enable condition: not re-attempted (out of scope per brief).
- This replay does **not** resolve EXP-014/EXP-015 variable serialization; it only re-establishes the representation-generation procedure.

## Prohibited-action audit (AC-6)

- No login/reauth/logout/reload-as-tested-boundary/browser restart; session confirmed live, not re-established.
- No Form/variable created/edited/renamed/deleted; no Form property edited; no Caption/Description/component/collection/binding/validator/handler/script/data-source change.
- No Save / Save As / Regenerate Form; no second save mechanism.
- No runtime execution/preview of `FX_FormVariableLab05`.
- No `Unload All Global Form Objects` / ClearCache / metadata unload / cache-clear; no User Preference opened/changed/saved.
- No FormSync Import / Synchronize / Copy / Delete invoked; no generated SQL applied to any target database (Output=View; license `APPLY` line informational only).
- No direct database query / internal API / reverse-engineered payload / Ext internal store / network payload body used as evidence (the SQL is the utility's own generated output artifact).
- No credential value read/printed/exposed/screenshotted (ScopeName rendered `<username>` in this record).
- No non-`FX_` Mongoose artifact modified. **AC-6 PASS.**

## Repository / worktree audit (AC-7)

- Branch `exp/EXP-016-R2`; HEAD `e74c52d` unchanged by this replay.
- `git status --porcelain` after replay: only `?? evidence/EXP-016-R2/` + this record file.
- Not modified: `AGENTS.md`, `environments/current-environment.md`, every `recipes/` file, `tools/`, all other `experiments/EXP-00x-*.md` / `evidence/EXP-00x*/` files, all pre-existing `FX_` and non-`FX_` Mongoose artifacts.
- **AC-7 PASS.**

## T2 — Read-only post-abort state reconciliation (harness cycle 1) — state unchanged

**Browser state inspected first (read-only, no clicks):** URL `.../c51080bc-...?favoriteContext=FormSync&LogicalId=lid%3A%2F%2Finfor.mongoose.mongoose`; Portal "Mongoose" tab selected, DEM badge, user badge + config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Web Client navigation `Explorer | Form | Actions | Edit | View | Window | Help`; toolbar **Save disabled** (clean). Console 0 errors / 1 warning.

**Visible FormSync state (exact):**
- **Web Client/FormSync open and usable:** yes — FormSync panel tab **selected** (tabpanel present); `FX_FormVariableLab05` panel tab present but not selected.
- **Configuration selection persists:** the utilities tab bar (Filter / Delete / Save List / Copy / Script / Export / Import / Compare / Pseudo Code / Licenses) is rendered — this only appears after the Source/Target configuration selection was accepted (OK) earlier this session; the Filter combobox reads **`Source`** (Filter Configuration=Source explicit).
- **Active utility tab:** **Script** (selected). Script tab fields: "Generate separate script per object" unchecked; "Include object list in script header" checked; Filename `FS_20261005_102224.SQL`; "Script form license" checked; Filename `FS_20261005_102224_LIC.SQL`; **Generate button present/enabled**; **Output: View radio checked**, Save radio unchecked; "Preserve locked by" unchecked.
- **Filter state (persists across utility-tab switch):** Scope Type=**User**; User filter = current user; Custom Objects grid populated (Refresh List result from earlier retained). No Form-name filter textbox was used; narrowing was by Scope Type/User + single-row Inc selection.
- **Target row:** `FX_FormVariableLab05` **visibly present** (Object Type=Form, Scope Type=User); its **User/Group Name** cell visibly = current user (`<username>`, rowgroup `f3e2568` [selected]); **Inc = checked**; Del = unchecked.
- **Other rows:** all other grid rows Inc-unchecked (verified across the full grid) — exactly one included row.
- **Script/View output already exists:** the Script tab shows the prior Generate's filename fields (`FS_20261005_102224.SQL` / `_LIC.SQL`) and the earlier Generate delivered `FS_20261005_102224.zip` (extracted under `evidence/EXP-016-R2/script/`); no new output was produced this cycle.

**Repository (read-only audit):** branch `exp/EXP-016-R2`; HEAD `e74c52d` unchanged; `git status --porcelain` → only `?? evidence/EXP-016-R2/` + this record. Evidence dir now contains `00`–`06` screenshots + `script/FS_20261005_102224.SQL` + `script/FS_20261005_102224_LIC.SQL`.

**Prohibited-action audit (T2):** No click of Inc / Deselect All / Include All / Refresh List / Script / Generate / Save / Regenerate / Import / Synchronize / Copy / Delete; no runtime execute; no preferences/cache/unload; no Ext store/internal API/network payload/direct-SQL used as evidence. UI/application state left unchanged. **AC-6 clean; AC-7 PASS.**

**New this cycle (T2):** `evidence/EXP-016-R2/06-t2-post-abort-reconciliation-formsync-script-view.png`. **Knowledge state (T2):** "FormSync session state (config selection, Filter Configuration=Source, Scope Type=User, single Inc row, Script tab Output=View) persists across utility-tab switches within the live session" — **observed**. Next bounded action can be chosen safely from this unchanged state.

## T3 — Bounded supported-UI AC-3 verification (harness cycle 2) — no value changes

**Procedure:** Switched Script → **Filter** tab (read-only tab navigation only), captured the AC-3 fields, switched back **Script** tab, verified state unchanged. No Refresh List, no Deselect All, no Inc change, no filter/config/output change, no Generate.

**Direct AC-3 evidence (visible UI, Filter tab):**
- Filter Configuration combobox (`f3e733`) displays **`Source`** — explicit.
- Configuration textbox (`f3e739`) displays **`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`** — the intended DEM configuration selected as Source.
- Scope Type combobox (`f3e748`) = **User**; User combobox (`f3e979`) = current user (`<username>`).
- Custom Objects grid remained populated; `FX_FormVariableLab05` row present (Form, User).

**Return-to-Script verification (unchanged):** Script tab re-selected; **Output: View radio checked** (DOM check: the only checked radio in the frame is `mgradio-1474-inputEl` = View; Save unchecked); filenames still `FS_20261005_102224.SQL` / `FS_20261005_102224_LIC.SQL`; Generate present/enabled. Grid re-inspected via accessibility tree: **exactly one Inc-checked row** = `FX_FormVariableLab05` (Form, User); all other rows Inc-unchecked. Session state **not reset** by the tab switches.

**Prohibited-action audit (T3):** Only tab-switch clicks (Filter, Script) performed; no Inc/Deselect/Refresh/Generate/Save/Import/Synchronize/Copy/Delete; no runtime execute; no preferences/cache/unload; no Ext store/internal API/network payload/direct-DB evidence (the DOM radio check is a visible-control state read, not payload evidence). **AC-6 clean.**

**New this cycle (T3):** `evidence/EXP-016-R2/07-t3-ac3-filter-configuration-source-dem-selected.png`, `evidence/EXP-016-R2/08-t3-script-state-restored-view-single-inc.png`. **Knowledge state (T3):** "Filter tab visibly exposes Filter Configuration=Source + DEM configuration textbox; Script tab state (Output=View, single Inc row) survives utility-tab round-trip" — **observed**. AC-3 direct visible evidence now captured: **SUPPORTED**.

## T4 — One bounded Generate from the unchanged Script state (harness cycle 3) — second representation captured

**Pre-action state verified unchanged (from T3):** Script tab selected; Output=View checked (Save unchecked); filenames `FS_20261005_102224.SQL` / `FS_20261005_102224_LIC.SQL`; exactly one Inc-checked row (`FX_FormVariableLab05`, Form, User). No Source/Filter Configuration/filter/scope/Inc/filename/output change was made before the action.

**Action:** Exactly one click on **Generate** → confirmation dialog **"Do you want to generate a SQL script containing definitions of the listed customized objects?"** → **Yes** → utility delivered `FS_20261005_102224.zip` (Playwright download event), extracted to `evidence/EXP-016-R2/script-t4/`.

**Fresh representation verification (`script-t4/FS_20261005_102224.SQL`):**
- Header timestamp **10/5/2026 10:52 AM** — distinct from the earlier 10:39 AM capture: this is a **fresh second generation**, not a stale artifact.
- **Form identity:** `Forms WHERE [Name] = N'FX_FormVariableLab05' AND [ScopeType] = 3 AND [ScopeName] = N'<username>'`; `INSERT INTO [Forms] ... VALUES ( 3, N'<username>', ... N'FX_FormVariableLab05', ... )` — Name + ScopeType=3 (User) + ScopeName identify the intended scoped Form.
- **Variable-related metadata handling (same semantic class as EXP-016):** `DELETE FROM Variables WHERE FormID = @FormID` present in the Form's DELETE block.
- **Explicit insufficiency statement:** the generic `Variables`/`FormID` metadata handling **does NOT prove any specific Form variable exists or was serialized**; no controlled variable name/value was searched for; absence of a variable name was not treated as evidence; generated table/column/layout details are not promoted as stable contracts.

**Post-state:** Script tab state unchanged (Output=View still checked, single Inc row retained); no further actions performed.

**Prohibited-action audit (T4):** Only Generate + Yes (the single bounded generation). No Save/Save As/Regenerate; no Form/variable mutation; no runtime execute; no Unload/ClearCache/preferences; no FormSync Import/Synchronize/Copy/Delete; no SQL applied to any database (Output=View; license `APPLY` line informational only); no Ext store/internal API/network payload/direct-DB evidence. **AC-6 clean.**

**New this cycle (T4):** `evidence/EXP-016-R2/09-t4-generate2-view-representation-delivered.png`, `evidence/EXP-016-R2/script-t4/FS_20261005_102224.SQL`, `evidence/EXP-016-R2/script-t4/FS_20261005_102224_LIC.SQL`. **Knowledge state (T4):** "FormSync Script (Output=View) Generate produces the scoped-Form representation with `DELETE FROM Variables WHERE FormID = @FormID` repeatably (two independent generations in this replay session, plus EXP-016 T12)" — **observed**; procedure now at **replay_verified** for representation generation within this environment/session (persistence across sessions not claimed). AC-5 SUPPORTED with explicit insufficiency caveat recorded.

## T5 — Final read-only acceptance audit (harness cycle 4) — AC-1..AC-7 table

**AC-1 evidence identification (pre-FormSync inspection):** `evidence/EXP-016-R2/00-preflight-webclient-live.png` (Web Client live, user badge + config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, captured **before** any FormSync inspection) and `01-select-form-filter-name-exact-one-opened.png` (server-backed Select Form inventory, also pre-FormSync). User editing scope: the replay's scope evidence is the FormSync Filter **Scope Type=User** combobox + User filter + grid User/Group Name column (`03`, `04`, `07`) plus the target row's ScopeType=User. **Honest limitation:** unlike EXP-016 (which had a Designer "Identify Your Editing Scope" dialog screenshot), this replay has **no dedicated scope-dialog screenshot**; scope is evidenced via the FormSync scope controls and row identity. No credential value was exposed in any evidence (user identifiers are Playwright-secret placeholders; the record renders ScopeName as `<username>`).

**AC-6 audit (actions/record/evidence):** Across T1–T4 the factory performed only: Select Form filter/open (read-only), FormSync open, Source/Target configuration selection + OK, Filter tab browse (Scope Type/User set), Refresh List, Deselect All, one Inc selection, Script tab switch, Output=View selection, two Generate+Yes (Output=View), tab switches, screenshots, and record/evidence writes. **No** Form/variable creation/edit/rename/delete/Save/Save As/Regenerate; **no** runtime execution/preview; **no** Unload All Global Form Objects/ClearCache/metadata unload/cache-clear; **no** User Preference change; **no** FormSync Import/Synchronize/Copy/Delete; **no** SQL applied to any database (Output=View; license `APPLY` line informational only); **no** direct database query. **Ext-store distinction:** the EXP-016 record contains an earlier **rejected** approach (reading the Select Form ExtJS store) that was explicitly **not** used as authoritative evidence; in EXP-016-R2 no Ext store/internal API/network payload was used as authoritative evidence — the radio-state DOM reads (T2/T3) are visible-control state checks, and the authoritative saved-definition evidence is the utility's own generated output artifact (`script/`, `script-t4/`). **AC-6 PASS.**

**AC-7 repository audit (final):** branch `exp/EXP-016-R2`; HEAD `e74c52d` unchanged; `git status --porcelain` → only `?? evidence/EXP-016-R2/` + this record; `git status --porcelain -- environments recipes tools AGENTS.md README.md opencode.json .gitignore` → **empty** (no tracked-file changes anywhere outside the two experiment-attributable paths). Evidence dir contains exactly: screenshots `00`–`09`, `script/FS_20261005_102224.SQL` + `_LIC.SQL`, `script-t4/FS_20261005_102224.SQL` + `_LIC.SQL`. No recipe, environment, AGENTS.md, unrelated experiment record, or Mongoose artifact modified. **AC-7 PASS.**

**Final acceptance table (AC-1..AC-7):**

| AC | Result | Exact evidence paths |
|---|---|---|
| AC-1 Live session + User scope before inspection; no credential exposure | **PASS (with noted limitation)** | `evidence/EXP-016-R2/00-preflight-webclient-live.png`, `01-select-form-filter-name-exact-one-opened.png` (pre-FormSync); scope via `03-filter-source-user-scope-list-refreshed.png`, `04-filter-only-fxformvariablelab05-included.png`, `07-t3-ac3-filter-configuration-source-dem-selected.png` (Scope Type=User + User/Group Name); no dedicated scope-dialog screenshot in this replay |
| AC-2 Exactly the intended Form: Name + ScopeType=User + exact ScopeName; row User/Group Name verified before Inc | **PASS** | `01-select-form-filter-name-exact-one-opened.png` (exactly one Name row); `04-filter-only-fxformvariablelab05-included.png` (row User/Group Name = current user verified before Inc; Scope Type=User) |
| AC-3 Runtime FormSync, intended config as Source, Filter Configuration explicitly Source, list narrowed | **PASS** | `02-formsync-source-target-dem-selected.png`, `07-t3-ac3-filter-configuration-source-dem-selected.png` (combobox `Source` + textbox `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), `03-filter-source-user-scope-list-refreshed.png` |
| AC-4 After Refresh List + Deselect All, exactly one verified scoped row included, none other | **PASS** | `04-filter-only-fxformvariablelab05-included.png`, `08-t3-script-state-restored-view-single-inc.png` (single Inc row across full grid) |
| AC-5 Script Output=View generates representation identifying FX_FormVariableLab05 + scoped identity + variable-related metadata class; generic handling explicitly insufficient | **PASS** | `evidence/EXP-016-R2/script/FS_20261005_102224.SQL` (10:39 AM capture), `evidence/EXP-016-R2/script-t4/FS_20261005_102224.SQL` (10:52 AM fresh capture): `Forms WHERE [Name] = N'FX_FormVariableLab05' AND [ScopeType] = 3 AND [ScopeName] = N'<username>'` + `DELETE FROM Variables WHERE FormID = @FormID`. **Explicit:** generic Variables/FormID handling does NOT prove any specific Form variable exists or was serialized |
| AC-6 Controlled-action audit (no prohibited mutation/apply/internal-API evidence) | **PASS** | This record (T1–T5 controlled-action audits); no prohibited action invoked; Ext-store distinction recorded above |
| AC-7 Repository audit (changes confined to record + evidence/EXP-016-R2/) | **PASS** | `git status --porcelain` (only the two experiment-attributable paths), `git status --porcelain -- environments recipes tools AGENTS.md README.md opencode.json .gitignore` empty, HEAD `e74c52d` unchanged |

**Net outcome:** EXP-016-R2 **PASSES AC-1..AC-7** (AC-1 with the documented scope-dialog limitation). The EXP-016 FormSync Script (Output=View) saved-Form representation path is **replay_verified** within this environment/session: two independent generations (10:39 AM and 10:52 AM) both identify `FX_FormVariableLab05` (Name/ScopeType=3/User/ScopeName) and contain `DELETE FROM Variables WHERE FormID = @FormID`, with the explicit caveat that this generic metadata handling proves nothing about any specific variable. No Mongoose artifact was mutated; no database apply performed.

**New this cycle (T5):** no new evidence files (audit textual note only). **AC-1..AC-7 PASS.**

## Outcome — Replay complete

EXP-016-R2 **PASSES AC-1..AC-7.** The EXP-016 FormSync Script (Output=View) saved-Form representation path **independently reproduced** on a fresh worker execution: the generated representation identifies `FX_FormVariableLab05` (Name, ScopeType=3/User, ScopeName) and contains the same class of variable-related metadata handling (`DELETE FROM Variables WHERE FormID = @FormID`). Generic metadata handling is explicitly recorded as insufficient to prove any specific variable exists. **No Mongoose artifact was mutated; no database apply performed.**
