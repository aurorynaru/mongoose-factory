# EXP-004 — Form Variable Fundamentals

Status: **blocked** (persistence failure — reproducible, 3/3 attempts across BOTH documented save paths: ordinary Save 2/2, Regenerate Form 1/1)
Date: 2026-09-30 (attempts 1–2), 2026-10-01 (attempt 3, Regenerate Form)
Mode: LEARNING MODE — controlled mutations only on factory-owned form `FX_VariableLab01` (User scope). No non-FX_ artifact was created, modified, or deleted. No global variable was created or left behind (the one created during the early Global-Objects probe was deleted in-session and the dialog was cancelled).

## Objective

Learn how to create a **Form-scoped variable** in the Mongoose Web Designer and verify that its definition metadata persists across a close/reopen boundary.

Target (per corrected guidance):

- Form: `FX_VariableLab01`
- Variable: `FX_TestValueVar`
- Semantics: `Global = False`, `Persistent = False` (i.e. a *Temporary Form Variable*), `Value = Seed-A` (the `Value` property is exposed by the native UI)
- Correct path: **Details panel → Variables tab** (NOT `Edit → Variable`, which opens *Global Objects*)
- Success postcondition: after Save + close/reopen, the variable reappears under the Form category with `Global=False`, `Persistent=False`, `Value=Seed-A`, exactly one instance, no new global objects.

Out of scope: runtime variable behavior, component bindings, scripts, events, IDOs/collections, validators, `Persistent=True` / `Global=True` variants, EXP-004-R2, EXP-005.

## Starting state

- Environment: Mongoose Web Client/DB **2026.09.08**, Portal **2026.09.00**, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, user `anton.ramos@3mworks.com.ph`, role **Site Developer**, editing scope **User**.
- `FX_VariableLab01` already existed (created earlier in this experiment series via the verified `recipes/forms/create-basic-form.md` procedure), blank, User version for `anton.ramos@3mworks.com.ph`.
- Early probe (before corrected guidance): `Edit → Variable` opens the **Global Objects** dialog; a test variable created there showed `General.Global` **read-only `True`** — confirming that path manages *global* objects, not form variables. Probe variable was deleted and the dialog cancelled (evidence 11, 12).

## Method

### Attempt 1 (session A)

1. Opened `FX_VariableLab01` in the Web Designer (form instance id 167).
2. Expanded the **Details** panel (collapsed by default; "Expand Panel" button). Tabs: Collections, Components, Event Handlers, **Variables**, Design View Size.
3. Opened **Details → Variables**. The list (`formvariablelist-1988`, store grouped by `category`) initially contained only:
   - `Global - Persistent` (47)
   - `Global - Temporary` (13)
   - 60 records total, all `global=true`.
4. Clicked **New** (bottom toolbar of the Variables grid) → dialog titled **"Form Variable"** with a single **Name** field. Entered `FX_TestValueVar`, OK.
5. Variable appeared under a new category **`Form - Persistent`** (default `Persistent=True`), selected automatically.
6. In the property grid (`formvariablepropertygrid-2004`, General group):
   - `Name` = `FX_TestValueVar` (editable)
   - `Description` = empty (editable)
   - `Value` = empty (editable; **double-click** the cell to open the inline editor — single click only selects)
   - `Persistent` = `True` (editable boolean combo) → changed to **`False`**
   - `Global` = `False` (**read-only**)
   - `Version` = `User version for user anton.ramos@3mworks.com.ph` (read-only)
   - Set `Value` = **`Seed-A`** (double-click cell → type → Tab).
7. Toolbar **Save** (enabled after edits) → `POST DesignerSession/SaveChanges` body `{"formId":167}` → `{"Success":true,"Message":"Form [FX_VariableLab01] and global object(s) were saved."}`; Save button returned to disabled (clean state).
8. **Persistence check**: closed the form tab (no unsaved-changes prompt) → reopened via designer **Form** menu (fresh `GetFormDesigner`, new instance 176) → Details → Variables.

### Attempt 2 (session B, clean retry)

Identical flow in a fresh designer session with **no** prior Global-Objects activity (to rule out cross-contamination from the early probe):

1. Reopened `FX_VariableLab01` (instance 176).
2. Details → Variables → **New** → `FX_TestValueVar` → OK (created under `Form - Persistent`).
3. Set `Persistent=False` (combo), `Value=Seed-A` (double-click inline editor, Tab). Property-grid store confirmed: `General.Value=Seed-A`, `General.Persistent=False`, `General.Global=False`.
4. **Save** → `SaveChanges` body `{"formId":176}` → same Success message.
5. Closed tab → reopened via Form menu (fresh load) → Details → Variables.

### Attempt 3 (session C — Regenerate Form path, 2026-10-01)

Per specialist consultation, tested the other documented native commit path: **Regenerate Form** (documented as saving changes, closing the form, and reopening it in the designer).

1. Fresh browser session; portal login; Mongoose app tab; Web Designer opened in a new tab (`designer/default.aspx`); "Identify Your Editing Scope" confirmed **User** scope for the signed-in user.
2. Opened the existing `FX_VariableLab01` via the designer **Form** menu (recent-forms list) — no recreation. (Note: direct navigation to `default.aspx?MGForm=FX_VariableLab01` loads the designer shell but drops the form; the Form-menu recent list is the reliable open path.)
3. Details → Variables pre-mutation check: `formvariablelist-1330` store = **53 records**, categories `Global - Persistent` (47) + `Global - Temporary` (6) only — **no Form category, no FX_TestValueVar** (confirmed absent before mutating).
4. **New** → `FX_TestValueVar` → OK. Created under `Form - Persistent` (default `Persistent=True`), auto-selected.
5. Property grid: `Persistent` combo → **False**; `Value` cell double-click → inline editor (`textfield-1350`) → typed `Seed-A` → Tab. Store confirmed `General.Value=Seed-A`, `General.Persistent=False`, `General.Global=False` (read-only), `Version=User version for user <user>`.
6. Screenshot `28-regenerate-before.png` (variable present, properties set, Save + Regenerate Form enabled).
7. Clicked **Regenerate Form** (toolbar button).
8. Network: **no `SaveChanges` call at all** — Regenerate issues `Form/GenerateServerEvent` `{"eventName":"regenform","instanceId":8}` → response `Success:true`, `Payload:[{action:"close",id:8},{action:"designform",runFormSpec:"FX_VariableLab01"}]` → fresh `GetFormDesigner` (new instance 11) → `forminit`.
9. Designer reopened the form (same user version; Save/Regenerate disabled = clean state).
10. Details → Variables immediately after reopen: fresh `formvariablelist-1533` store = **53 records**, `Global - Persistent` (47) + `Global - Temporary` (6) only — **no Form category, no FX_TestValueVar, exactly zero instances**. Screenshot `29-regenerate-after-variables-tab.png`.

## Observations

### UI structure (observed, consistent across all three sessions)

- The **Details → Variables** tab is the native form-variable editor. It has two panes:
  - Left: `formvariablelist` grid (Ext class `Designer.view.formvariables.FormVariableList`), store grouped by `category`, record fields `variableId`, `formId`, `category`, `global`, `persistent`, `fromBase`. Bottom toolbar: **New / Copy / Delete** (+ Expand/Collapse in the top toolbar).
  - Right: `formvariablepropertygrid` property grid (General group: Name, Description, Value, Persistent, Global, Version).
- Category names actually rendered: **`Form - Persistent`**, **`Form - Temporary`**, **`Global - Persistent`**, **`Global - Temporary`** (doc wording "Persistent Form Variables" does not match the UI).
- New variables default to **`Form - Persistent`** (`Persistent=True`); making one a *Temporary* form variable requires explicitly flipping `Persistent` to `False` in the property grid.
- `Global` is **read-only `False`** for variables created here (form-scoped), versus read-only `True` in the Global Objects dialog.
- The **New** dialog captures only the Name; all other properties are set in the property grid.
- The left list does **not** live-update when properties are edited in the grid (after setting `Persistent=False`, the list still showed the `Form - Persistent` group until reload) — the property grid holds the edit buffer; treat the grid store as authoritative for in-session state.

### Server event flow (observed)

- Clicking **New** fires `FormObject/GetObjectDesigner` with `{"objType":3,"task":2,"parentFormId":<instance>}` → returns a synthetic "Form Variable" object (`components: []` in every observation — this payload does **not** carry the variable list).
- Creation commit: `FormObject/GenerateServerEvent` `{"eventName":"close","eventArgs":["FX_TestValueVar"],"instanceId":<formvarObjInst>}` (a `forminit` for the new object instance precedes it).
- Selecting the variable: `Form/GenerateServerEvent` `{"eventName":"selformvar","eventSource":"FX_TestValueVar"}` → server responds with `loadformvarprops` containing the full property set (proves the **server session model** tracks the variable).
- Each property commit: `updformvarprop` with `eventArgs: ["General.Persistent","False"]` / `["General.Value","Seed-A"]`; server acknowledges with `updformvarprops` and enables Save (`save=e:undo=e`).
- **Save**: `SaveChanges` body is **only** `{"formId":<instance>}`; response `Success:true`, message `Form [FX_VariableLab01] and global object(s) were saved.`

### NEGATIVE FINDING — form variables do not persist (reproducible, 3/3 across both documented save paths)

After a successful commit + close + reopen, in **all three** attempts:

- Details → Variables shows **only** `Global - Persistent` (47) and `Global - Temporary` (13 in attempts 1–2; 6 in attempt 3 — the global set itself varies between sessions) — **no Form category, no `FX_TestValueVar`**.
- Fresh `formvariablelist` store: 60 records all global (attempt 1: `formvariablelist-2253`; attempt 2: `formvariablelist-2461`); 53 records all global (attempt 3: `formvariablelist-1533`).
- Fresh `GetFormDesigner` payload contains only `form` + `components` (no variables key) — same in the Regenerate reload (instance 11).
- Fresh `GetObjectDesigner` (objType=3) for the reloaded form returns an empty "Form Variable" object.
- Read-only check of the **Global Objects** dialog after the saves: same global objects (`objectlist-2539`), **no** `FX_TestValueVar` — so the variable was not persisted as a global object either, despite the save message mentioning "global object(s)".
- The reloaded form is the **same user version** (`User version for user anton.ramos@3mworks.com.ph`) as the one saved — version/scope drift is ruled out.
- **Attempt 3 detail**: the `regenform` event returned `Success:true` and the designer reopened the form cleanly — yet the variable was gone exactly as after ordinary Save. The two documented commit paths behave identically with respect to form-variable persistence.

Conclusion: in this environment (Mongoose 2026.09.08), a form variable created via Details → Variables → New is fully tracked in the designer **session** (server session model acknowledges creation and property updates) and **both** documented commit operations (ordinary Save via `SaveChanges`, and Regenerate Form via the `regenform` event) report success — but the variable is **not persisted to the repository** in either case. It is gone after the close/reopen boundary. No error is raised at any point; the failure is silent.

## Verification

| Check | Attempt 1 | Attempt 2 | Attempt 3 (Regenerate) |
|-------|-----------|-----------|------------------------|
| Variable created in-session (list + property grid) | ✅ | ✅ | ✅ |
| `Persistent=False`, `Value=Seed-A`, `Global=False` in property-grid store | ✅ | ✅ | ✅ |
| Server session tracks variable (`loadformvarprops` / `updformvarprop`) | ✅ | ✅ (events 241/244/245) | ✅ (events 83/85/88) |
| Commit reports success | ✅ `SaveChanges` (req 229, formId 167) | ✅ `SaveChanges` (req 246, formId 176) | ✅ `regenform` (req 89, instance 8) — **no SaveChanges call** |
| Save/Regenerate buttons disabled after commit (clean state) | ✅ | ✅ | ✅ |
| **Variable present after close/reopen** | ❌ absent | ❌ absent | ❌ absent |
| Form category present after reopen | ❌ | ❌ | ❌ |
| Variable in Global Objects after save | ❌ | ❌ | n/a (not checked; list store shows no FX_ record) |
| Global buckets unchanged | ✅ (47/13) | ✅ (47/13) | ✅ (47/6 — global set varies between sessions) |

The success postcondition **failed in all three attempts**; the failure is reproducible, silent, and now covers **both** documented native commit paths (ordinary Save and Regenerate Form).

## Evidence

Screenshots under `evidence/EXP-004/`:

- `11-variable-editor-global-objects.png` — `Edit → Variable` opens **Global Objects** (negative finding: not the form-variable path).
- `12-new-variable-global-readonly.png` — Global Objects new variable shows `Global` read-only `True`.
- `13-details-collapsed.png` — Details panel collapsed (default).
- `14-details-expanded-tabs.png` — Details expanded; Variables tab visible.
- `15-variables-tab.png` — Variables tab before creation (Global groups only).
- `16-form-variable-new-dialog.png` — "Form Variable" New dialog (Name only).
- `17-variable-created-form-persistent.png` — `FX_TestValueVar` created under `Form - Persistent`.
- `18-variable-properties-set.png` — Property grid: `Persistent=False`, `Value=Seed-A`, `Global=False`.
- `19-after-save.png` — After Save (Save disabled, clean state).
- `20-before-reopen.png` — Pre-close state (attempt 1).
- `21-getformdesigner-reload-response.json` — Fresh `GetFormDesigner` payload (no variables key).
- `22-getobjectdesigner-220-response.json` — "Form Variable" object payload (empty components).
- `23-reopened-variables-tab.png` — Reopened Variables tab: Global groups only, no Form category.
- `24-getobjectdesigner-fresh-response.json` — Fresh `GetObjectDesigner` (objType=3) after reload (empty).
- `25-retry-properties-set.png` — Attempt 2: properties set.
- `26-retry-after-save.png` — Attempt 2: after Save.
- `27-retry-reopened-variables-tab.png` — Attempt 2: reopened Variables tab (still Global groups only).
- `28-regenerate-before.png` — Attempt 3: before Regenerate (variable present under `Form - Persistent`, properties set, Save + Regenerate Form enabled).
- `29-regenerate-after-variables-tab.png` — Attempt 3: Variables tab after Regenerate reopened the form (Global groups only, no Form category, no `FX_TestValueVar`).
- `30-regenform-request-response.json` — `regenform` event request/response + surrounding event sequence (no `SaveChanges` in the session).
- `31-getformdesigner-post-regenerate.json` — Fresh `GetFormDesigner` payload after Regenerate (no variables key) + post-reload variable-list store summary.

Network evidence (request indices in the session log):

- Attempt 1: 220 `GetObjectDesigner {objType:3,task:2,parentFormId:167}`; 221 `forminit` (173); 222 `close ["FX_TestValueVar"]` (173, creation commit); 224 `selformvar` → `loadformvarprops`; 226 `updformvarprop General.Persistent=False`; 228 `updformvarprop General.Value=Seed-A`; 229 `SaveChanges {"formId":167}` → Success.
- Reload 1: 234 `GetFormDesigner` (no variables); 235 `forminit` (176).
- Attempt 2: 236 `GetObjectDesigner {objType:3,task:2,parentFormId:176}` (empty); 238 `close []` (178); 241 `close ["FX_TestValueVar"]` (179, creation commit); 244 `updformvarprop General.Persistent=False`; 245 `updformvarprop General.Value=Seed-A`; 246 `SaveChanges {"formId":176}` → Success.
- Reload 2: fresh `GetFormDesigner` + `forminit`; `formvariablelist-2461` count 60, no FX variables.
- Global Objects read-only check: `objectlist-2539` count 60, no `FX_TestValueVar`.
- Attempt 3 (2026-10-01, designer instance 8 → 11): 80 `GetObjectDesigner` (objType=3); 81 `forminit` (var object); 82 `close ["FX_TestValueVar"]` (creation commit); 83 `selformvar`; 84 `getproplist`; 85 `updformvarprop General.Persistent=False`; 88 `updformvarprop General.Value=Seed-A`; **89 `regenform` (instance 8) → `Success:true`, payload `[{close,id:8},{designform,FX_VariableLab01}]`**; 90 `GetFormDesigner` (instance 11, no variables key); 91 `forminit` (11). **No `SaveChanges` request occurred in this session.** Post-reload `formvariablelist-1533`: 53 records, Global categories only, no FX variables.

Playwright snapshots: `evidence/playwright/page-2026-09-30T14-43-*.yml` … `page-2026-09-30T15-24-*.yml`.

## Risks / caveats

- The save **succeeds silently** — no error, no warning, Save button goes clean. Anyone following the UI flow would believe the variable was saved. Do not treat "Save succeeded" as evidence of variable persistence in this environment.
- In-session, the variable behaves normally (selectable, editable, server-tracked); the loss is only visible after crossing the close/reopen boundary.
- The `SaveChanges` message "and global object(s) were saved" is generic wording; it did **not** imply the form variable was saved as a global object (verified absent from Global Objects).
- **Regenerate Form also succeeds silently**: the `regenform` event returns `Success:true` and the designer reopens the form in a clean state — exactly the same observable outcome as a successful save, yet the variable is gone. Do not treat "Regenerate completed" as evidence of variable persistence either.

## Unknowns

- ~~Whether a different commit mechanism (e.g., "Regenerate Form") persists the variable~~ — **resolved negative** (attempt 3): Regenerate Form (`regenform` event) also fails to persist; it is a distinct mechanism from `SaveChanges` (no `SaveChanges` call is made) but produces the identical persistence outcome.
- Whether this is a product defect in 2026.09.08 or an intended limitation. Both documented native commit paths now fail identically and silently, which strengthens the defect/environment-specific-issue hypothesis, but vendor confirmation is still required to classify it definitively.
- Whether the `close ["<varname>"]` event is the creation commit by design or a side effect of the New-dialog flow (naming inferred from consistent position in all attempts' event sequences).
- Whether `Value`/`Persistent`/`Description` on a form variable would persist if the creation itself persisted (untestable until the root cause is known).
- Whether other Mongoose versions persist form variables created this way.
- Why the global temporary bucket count differs between sessions (13 in attempts 1–2 vs 6 in attempt 3) — global objects appear to be session/tenant-state dependent; not relevant to the form-variable finding.

## Result

**Blocked.** The corrected path (Details → Variables → New) is real and functional *within a session*: it creates a form-scoped variable (`Global=False` read-only), exposes `Value`/`Persistent`/`Description` for editing, and streams every change to the server session. However, the variable **does not persist** across a close/reopen boundary — verified **three times (3/3)** across **both** documented native commit paths:

- Ordinary Save (`SaveChanges`): attempts 1–2, silent failure.
- Regenerate Form (`regenform` event, no `SaveChanges` call): attempt 3, identical silent failure.

In every case the variable is absent from the reloaded form's variable list, the `GetFormDesigner` payload, and (attempts 1–2) the Global Objects list, on the same user version. Per the specialist's decision rule, with no documented variable-specific commit mechanism found and both documented paths failing, this is classified as a **likely Mongoose 2026.09.08 Web Designer defect / environment-specific persistence failure**, pending vendor confirmation.

Knowledge states:

- Details → Variables tab structure, New dialog, property grid, category naming, default `Form - Persistent`: **observed** (three sessions).
- Form-variable creation + property editing within a session (server session tracking): **observed**.
- Form-variable persistence via ordinary form Save: **observed negative** (does not persist; reproducible 2/2; silent).
- Form-variable persistence via Regenerate Form: **observed negative** (does not persist; 1/1; silent; `regenform` is a distinct mechanism from `SaveChanges` with the same outcome).
- `Edit → Variable` = Global Objects (not the form-variable path): **observed** (negative finding retained).
- Regenerate Form semantics (save/close/reopen via `regenform` event, toolbar button enabled only with pending changes): **observed**.

**No recipe was written** (`recipes/variables/create-form-variable.md` intentionally not created): the procedure's persistence postcondition failed on every documented path, so it cannot be offered as a reusable procedure.

Suggested next steps (not done, require user direction):

1. Escalate to vendor/Infor support as a suspected 2026.09.08 Web Designer defect: form variables created via Details → Variables are silently dropped by both ordinary Save and Regenerate Form (evidence: this record + `evidence/EXP-004/`).
2. If vendor identifies a supported commit mechanism (e.g., a dedicated object save, a different scope, or a version fix), re-run a controlled attempt and re-verify persistence before writing any recipe.
3. Only after a successful persistence verification should `recipes/variables/create-form-variable.md` be written (status `observed`).