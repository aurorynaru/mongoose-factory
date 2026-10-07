# EXP-027 — T1 Read-Only Preflight Notes (no mutation)

Run: R-20261007-165419-NP63, cycle 1, task T1. Date: 2026-10-07.
Strictly read-only preflight. No authentication, navigation to a target, session establishment, Designer launch, Form open/create/save/close/reopen, or component action was performed in this task.

## A. Supported procedures summarized from prior records (read before any mutation)

### A.1 Fresh-dialog Classic/BuildFromScratch selection (EXP-019-R2 — replay_verified)
Exact supported sequence to reach the first Build-from-Scratch wizard page:
1. In the Web Designer, one native click on toolbar **New** ("New Form Definition", `mgtoolbarbutton-1088`) → exactly one fresh **"Form Wizard Selection"** dialog opens (radio "New Form" active; Category + Wizard comboboxes empty).
2. One native click on the Category dropdown picker → rendered options list (Classic first) → one native click on the rendered **Classic** option (no typing into the combobox). Category shows "Classic".
3. One native click on the Wizard dropdown picker → rendered options (Build from Scratch first) → one native click on **"Build from Scratch"** ("Plain form without defined components"). Wizard combobox shows "BuildFromScratch".
4. Exactly one native click on the selection dialog **OK** → no rejection alert; first "Form Wizard - Build From Scratch" page appears with Name still empty.
- Cancel of an inherited wizard page is a two-step visible interaction (Cancel → "Are you sure... All data entered will be lost" Yes/No → Yes).
- Do NOT type into either dropdown; select from rendered options only. This is the ONLY path to Build-from-Scratch (the Web Client main Designer button flow offers only ExtDatasource/FormBuilder/REST).

### A.2 Basic-form creation (create-basic-form.md — verified) after wizard selection
- Wizard page 1: Name `<FX_...>`; Form Type `BuildFromScratch`; Form Layout `GridLeft`; Device Type `Default`; Data Source / Query Form / Comments empty → click **Next**.
- Page 2: **"Save Template" checked by default → uncheck it** (avoids a template artifact).
- **Finish** → "Process Completed Successfully" → OK. Finish persists the form immediately; designer opens `?MGForm=<name>` with Save disabled (clean). No separate save needed for creation.

### A.3 Native Button placement (add-component-from-toolbox.md — verified)
- Toolbox tree under "Framework Components": one native click on the **Button** row arms the drop.
- Single native click on an empty canvas spot places it; component becomes selected; Properties grid populates.
- Generated identity: itemId `bt2`, generated name `button1_USER` (deterministic first-of-type). Default Button size 114×34. Placement fires `newcomp` GenerateServerEvent, Button typeCode 8.
- Pitfalls: click canvas (not Toolbox) to place; use native Playwright clicks (synthetic DOM clicks do not drive Ext handlers); numeric Ext IDs drift — resolve at runtime. Placing makes the form dirty (Save enabled).

### A.4 Name-only edit (configure-basic-component.md — verified; Name step only)
- Select the component; Properties grid header shows `<current name> (<Type>)`.
- Name row: under **Design** group, `propId` `Design.Name`. **Double-click its value cell** → inline text editor → select-all, type new name → press **Enter**.
- Each Enter commits a `GenerateServerEvent` `updcompprop`, `eventSource:<itemId>`, args `["Design.Name","<value>"]`. Commit is immediate to SERVER; local `compDef` is a stale cache — do NOT verify via local compDef.
- Out-of-scope recipe steps to SKIP for EXP-027: Caption edit and any extra Save beyond the single required Designer Save. Header `<name> (<Type)>` may lag until reselection — verify from the grid value cell / store, not the header.

### A.5 Type-label distinction (from EXP-003/EXP-003-R2)
- Toolbox row label = **Button**; property-grid `Design.Type` display label = **PushButton**; model `ctrl` = `button`. Record the exact visible/property-grid Type label (expected PushButton) before close; match on model ctrl when programmatic.

## B. Controlled Playwright browser context enumeration (read-only)

- `browser_tabs list`: exactly **one** tab, index 0, current, URL `about:blank`, empty title.
- One fresh untargeted page snapshot: Page URL `about:blank`; accessibility tree empty (no document content).
- No live Mongoose Web Client document and no Web Designer document/tab is present in the controlled context.
- No visible Designer Form/dialog appears; therefore nothing is dirty to preserve in this context. No inherited Forms/tabs exist.
- No inference made about any browser process/window outside the controlled Playwright context.

## C. Decisive preflight state

**No usable live Mongoose workflow exists in the controlled Playwright browser context.** There is neither a usable Web Client nor a usable Designer; the single tab is `about:blank` with an empty accessibility tree.

Single next permitted pre-mutation action (NOT performed in this task, per instruction):
At most one previously documented supported Portal/Web Client session-establishment sequence (portal base URL in `environments/current-environment.md`; sign-in via configured secret placeholders only), followed by a Designer launch only if enumeration after that still shows no usable Designer — then prove server-backed liveness with a populated Select Form dialog, confirm User scope, and prove zero case-insensitive Name matches for `FX_ComponentRecoveryLab02` with a visible known-existing positive control, before any target mutation.

## D. T2 session-establishment + AC-1 guard results (read-only; no target mutation)

Established one live Web Client workflow in the controlled context from the single about:blank tab. Credentials submitted only as Playwright secret placeholders (never read/printed/logged/screenshotted). A Scheduled Maintenance alert appeared ("Mongoose is expected to undergo maintenance starting on 10/8/2026, 12:01:00 AM") and was left untouched.

Liveness/population guard (SELECT FORM):
- Grid `grid-1136` opened via Web Client toolbar Open; populated with Caption/Name columns.
- Store length reported 657 records; rendered rows include known-existing Forms (UserPreferences, User Defined Info, WSFormWizardNewDataXmlToIdo).

Target-absence guard (authoritative store query, recipe-documented API on grid-1136):
- Positive control: `store.findRecord('mgdata','UserPreferences')` → returned a record (mechanism works; row also visible in the grid).
- Target absence: `store.findRecord('mgdata','FX_ComponentRecoveryLab02')` → **null** (also null for candidate keys Name/formName/name) = zero case-insensitive Name matches.

Filter demonstration: Filter By dropdown set to Name (picker), Case Sensitive checkbox left visibly unchecked, Filter textbox typed with FX_ComponentRecoveryLab02. Per documented pitfall the filter textbox does NOT live-filter and OK activates a row — OK was NOT pressed (no system form opened/altered). Zero-match is established by the store query; screenshot 03 shows the rendered filter settings only.

Screenshots inspected for usable framing:
- `evidence/EXP-027/01-webclient-established.png` — live Web Client header (menu bar Explorer/Form/Edit/View/Window/Help; toolbar Open enabled, Save disabled=clean) + top-right identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Scheduled Maintenance alert visible bottom-right. Proves: Web Client is live/user-identified/clean, config group matches environment. Does NOT prove User editing scope dialog (that appears at Designer launch) nor target absence.
- `evidence/EXP-027/02-select-form-open.png` — Select Form dialog with populated grid (Caption/Name columns; rows incl. XML to IDO Wizard / WSFormWizardNewDataXmlToIdo, WSFormBuilderWidget* templates), Filter textbox empty, Filter By=Caption, Case Sensitive unchecked, Starts With unchecked. Proves: server-backed liveness via populated Select Form + visible control labels. Does NOT prove target absence (filter not yet applied).
- `evidence/EXP-027/03-select-form-name-filter-target.png` — same dialog with Filter textbox = "componentRecoveryLab02" (FX_ prefix scrolled off the field), **Filter By: Name**, **Case Sensitive unchecked**. Proves: the Name-filter settings for the guard were applied. Does NOT prove zero live grid rows (filter textbox does not live-filter; absence is proven by the store query).
- `evidence/EXP-027/04-webclient-clean-scope-badge.png` — duplicate of 03 (same frame); no additional information.

End-of-T2 controlled-page state: one Mongoose portal tab, live Web Client with open Select Form dialog (Filter By=Name, target text in Filter textbox, Case Sensitive unchecked), grid populated, Save disabled (clean). No Designer tab present yet. Next permitted action: launch exactly one Web Designer (permitted since no usable Designer exists in the controlled context), then confirm User editing scope via the "Identify Your Editing Scope" dialog and proceed to AC-2 creation.
