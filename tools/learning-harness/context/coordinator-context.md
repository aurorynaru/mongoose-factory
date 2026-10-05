<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-017 (R-20261005-193415-DfGB); specialist findings verdict: objects; 2026-10-05T12:11:13.303Z -->
<!-- finalized after specialist review of EXP-017 (R-20261005-193415-DfGB); specialist verdict: objects. EXP-017 final outcome: BLOCKED at AC-2 rendered exact-name prerequisite; View/Generate not tested. Exact target identity was available through accessibility/snapshot evidence but was not established through the experiment's required fully rendered evidence. -->

# 1. Project and workflow

The project is an autonomous **Infor Mongoose factory** being built in C:\\AI\\mongoose-factory. Its long-term goal is to take a natural-language request, optionally with reference images, and reliably build Mongoose Forms/portal-related artifacts using browser automation and a growing body of verified procedures and recipes.

There are three roles:

-   **Coordinator (ChatGPT):** selects bounded experiments, reviews worker evidence, decides when specialist consultation is needed, and controls promotion from candidate → observed → replay-verified.
-   **OpenCode worker:** operates Mongoose through Playwright MCP, records experiment/evidence artifacts, and remains within approved scope.
-   **Infor Mongoose specialist GPT:** supplies domain guidance. Advice remains candidate guidance until target-environment evidence establishes it.

Preferred learning pattern:

```text
specialist guidance if needed
→ controlled EXP-N browser experiment
→ observed procedure/result
→ fresh OpenCode session
→ EXP-N-R2 clean replay
→ replay-verified only if semantic postconditions reproduce
```

The **observed → replay-verified** distinction is a factory quality rule, not an Infor-defined validation level.

A run stopped because prerequisites or prohibitions cannot be satisfied is **blocked**, not evidence that the underlying product behavior failed. A semantically successful execution violating a global prohibition is **non-accepted**.

“Fresh worker context” means independent at the harness/OpenCode-session level. It does not establish independence across browser, authentication, application, IDO Runtime, backend, tenant, configuration or product sessions unless explicitly tested.

# 2. Environment facts that matter

Current proven environment:

-   Mongoose Web Client / Web Designer / application DB / Form definitions DB: **2026.09.08**
-   Infor OS Portal: **2026.09.00**
-   Tenant: **G6R8LJ9Q4E8C2Z8Y\_DEM**
-   Configuration: **G6R8LJ9Q4E8C2Z8Y\_MONGOOSE\_DEM\_DEFAULT**
-   Editing permission: **Site Developer**
-   Factory experiments use explicitly confirmed **User-scope** versions.
-   For tested scoped identity checks, use **Form name + ScopeType + ScopeName**.
-   User, Group and Site are customized versions; Vendor Default is the base/vendor version.
-   Documented precedence: **User → Group → Site → Vendor Default**.
-   Current learning lane: classic **BuildFromScratch** Forms.
-   Browser automation uses Playwright MCP through OpenCode.

Environment/browser observations:

-   Web Client normally runs in the Portal iframe; Web Designer opens separately.
-   Numeric Ext JS IDs drift between sessions.
-   Synthetic/low-level DOM manipulation may fail to invoke Ext handlers; native/frame-scoped Playwright interaction has generally been more reliable.
-   Hidden/off-screen Ext controls may remain in the DOM. DOM existence, accessibility checked state, or an HTML checked property does **not** by itself prove rendered UI state or the application state Mongoose would process.
-   In EXP-017, the underlying HTML/accessibility input associated with View was positioned off-screen at left:-9000px; worker-reported rendering showed Save selected while accessibility state reported View checked. This is an environment observation only. It does **not** establish which state FormSync would consume on Generate.
-   Whether the visible View affordance can be activated by a supported rendered interaction was **not established in EXP-017**, because the experiment stopped earlier at AC-2.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer recent-forms and Select Form are tested reopen paths.
-   Closing a clean Designer Form tab can produce no prompt.
-   A post-start Sign In/OK action may restore access but invalidates experiments that prohibit reauthentication.
-   EXP-014 completed creation, Save, close and reopen without later reauthentication/session replacement.
-   In EXP-016, navigating away from FormSync reset its working state in that browser/session. This is an execution observation, not generalized product behavior.
-   EXP-016-R2 and EXP-017 inherited live Web Client state; neither established a new authentication/application/backend session.

Explicit global-object unload route:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unload experiments showed /DesignerSession/ClearCache traffic; this is diagnostic evidence only, not a supported automation/API contract.

The **Unload IDO Metadata With Forms** preference was observed enabled in earlier experiments. Form/global-object cache and IDO-metadata cache remain distinct concepts.

Factory terminology:

-   **close-only** = ordinary Designer Form-tab close/reopen without explicit global-object unload.
-   **weak persistence boundary** = ordinary close/reopen; not a durability guarantee.
-   **new Web Designer client instance** = newly launched/rendered Designer tab/window only; not proof of a new backend/session boundary.

## Documented Form-variable baseline

Adjacent 2026.08/2026.10 Infor documentation is the product-level baseline for the tested 2026.09.08 environment; exact 2026.09.08 behavior remains subject to target-environment evidence.

Documented behavior indicates:

-   Global=False, Persistent=True is supported.
-   **Persistent** governs runtime **value** lifetime.
-   **Global** governs visibility/scope.
-   Form-level/global and persistent/temporary are independent attributes.
-   An **explicitly designed** Form-variable definition is Form metadata.
-   Current documentation shows persistent Form variables represented in Form definitions under structures such as PersistentVariables().
-   A temporary/nonpersistent runtime variable does **not necessarily require a separately pre-created design-time definition**; the framework can create some nonpersistent variables when referenced.

Therefore disappearance after Save/reopen of a variable that was **explicitly created as a Form definition** remains anomalous relative to documented capability, without implying that every temporary runtime variable must itself have persistent design-time metadata.

Current lifecycle observations:

-   Caption + explicit unload: **replay-verified**.
-   Description + explicit unload: **replay-verified**.
-   Description + ordinary close/reopen: **replay-verified**.
-   Description + newly launched Designer: **replay-verified at UI-recovery level only**.
-   Caption + ordinary close/reopen: **observed only**.
-   Persistent=True variable immediately after Save: EXP-013/014 **observed visible**, but serialization not proven.
-   Persistent=True variable after ordinary close/reopen: EXP-014 **observed absent**.
-   FormSync Script generation for one exact selected User-scoped customized Form: **replay-verified by EXP-016 + EXP-016-R2**.
-   Specific **Output=View → visible Form/temporary display page** behavior remains **unverified** in the target environment. EXP-017 did not reach View selection or Generate.

In the tested/export FormSync workflow, the selected **Source configuration** supplied the Forms-database definitions. Product FormSync also permits SQL-script generation against custom objects selected from a **Source or Target configuration**. The broader conclusion remains that generated definition scripts derive from Forms-database metadata rather than merely current Designer client state.

The generated SQL is executable customization-definition SQL. Generating it was non-mutating with respect to the inspected Source Form, but the SQL itself is not intrinsically read-only.

# 3. Decisions and rules established so far

Permanent knowledge progression:

```text
candidate guidance
→ observed
→ replay-verified
```

Core rules:

-   Modify only factory-owned FX\_ artifacts.
-   Never weaken security or expose credentials.
-   Keep each experiment limited to one new capability.
-   Read current state before retrying; never blindly repeat a mutation.
-   Record blockers, failures, negative findings and corrections.
-   Evidence should prove semantic state transitions, not every click.
-   A screenshot proves only rendered state at that moment.
-   Accessibility/DOM state and visibly rendered UI are separate evidence modalities when they disagree.
-   If an acceptance criterion explicitly requires **visible-rendered proof**, hidden DOM/accessibility text cannot silently substitute for it.
-   Editing permission and editing scope are separate.
-   Verify customized-object identity using **Name + ScopeType + ScopeName**.
-   Version identity and storage/serialization provenance are different questions.
-   Do not generalize across metadata classes, scopes or lifecycle boundaries.
-   Treat internal request paths, Ext IDs/stores, model IDs, numeric ScopeType values, generated SQL table/column names and statement layout as implementation details, not stable automation contracts.
-   If an experiment defines a prerequisite/prohibition, obey it even when another route appears harmless.
-   Do not manipulate hidden controls merely to force an experiment to pass.
-   Do not change preferences/cache settings merely to force an experiment to pass.
-   Ordinary close/reopen does not prove physical database durability, cache eviction or commit boundaries.
-   Caption, Description and Form-variable definitions are separate metadata classes.
-   **Persistent is a runtime-value-lifetime property, not proof of design-time definition persistence.**
-   Persistent=True versus Persistent=False observations must not be interpreted as causal without a controlled test.
-   Immediate client-side visibility after Save is insufficient proof that a variable definition was serialized.
-   Runtime-value semantics and variable-definition retention are separate.
-   No reusable Form-variable creation/persistence recipe has been promoted.
-   FormSync Script and Pseudo Code are alternative supported representations with different purposes/formats; do not treat them as equivalent.
-   FormSync **Script generation for an exact selected User-scoped Form** is replay-verified.
-   Do **not** promote EXP-016-R2's programmatically changed off-screen View input into proof that FormSync semantically processed View.
-   Current documentation distinguishes **Save** as file/download output and **View** as displaying output on a Form page/temporary display page. Target-environment behavior still requires evidence.
-   For a future View test, a stronger pre-Generate semantic checkpoint is: **View visibly selected + primary Filename control visibly disabled** before Generate.
-   A strong postcondition discriminator is: **View → visible Form/display page** versus **Save → downloadable/file output**, potentially bundled in a ZIP when multiple outputs are produced.
-   Generic generated SQL such as DELETE FROM Variables WHERE FormID = @FormID is **not proof that a specific named variable exists or was serialized**.
-   Positive serialization evidence must contain variable-specific data, at minimum its controlled identity/name and preferably definition/value fields.
-   Negative serialization evidence first requires establishing that the chosen representation/settings expose a known-present variable; absence alone is otherwise inconclusive.

Experiment status:

-   **EXP-005-R2:** blocked.
-   **EXP-006 + R2:** Caption + explicit unload — replay-verified.
-   **EXP-007 + R2:** Description + explicit unload — replay-verified.
-   **EXP-008 + R2:** Description + close/reopen — replay-verified.
-   **EXP-009 + R2:** Description + new Designer — replay-verified at UI-recovery level.
-   **EXP-010:** Caption + close/reopen — observed.
-   **EXP-010-R2:** blocked/non-accepted due prohibited reauthentication.
-   **EXP-011:** blocked at preflight.
-   **EXP-012:** blocked after variable creation, before Save.
-   **EXP-013:** blocked/non-accepted; immediate post-Save variable visibility nevertheless observed.
-   **EXP-014:** blocked because AC-8 failed; variable absent after reopen.
-   **EXP-015:** blocked before intended independent serialization investigation completed.
-   **EXP-016:** FormSync Script-generation route observed.
-   **EXP-016-R2:** Script-generation route replay-verified; Output=View semantics unresolved.
-   **EXP-017:** **BLOCKED — AC-2 rendered exact-name prerequisite not satisfied; View selection and Generate not tested.**

Naming conventions:

```text
Forms:       FX_<Purpose>
Components:  FX_<SemanticPurpose><MongooseType>
Variables:   FX_<Purpose>Var   (candidate convention)
```

# 4. Lessons learned and pitfalls per experiment

**EXP-001 — Environment fingerprint**

Established architecture, versions, User scope and core navigation.

**EXP-002 / EXP-002-R2 — Basic Form creation**

BuildFromScratch Form creation is replay-verified.

**EXP-003 / EXP-003-R2 — Component fundamentals**

Static, Edit and Button procedures are replay-verified.

**EXP-004 — Form Variable Fundamentals**

Details → Variables is the tested design-time path. FX\_TestValueVar, Global=False, Persistent=False, Value=Seed-A disappeared after ordinary Save **2/2** and Regenerate **1/1**: three observed negatives.

This does not establish Persistent=False as causal.

**EXP-005 through EXP-010-R2 — Form metadata lifecycle**

Caption/Description retention was progressively tested across ordinary close/reopen, explicit unload and newly launched Designer boundaries. These results must not be generalized to subordinate Form-variable definitions.

**EXP-011 / EXP-012**

Persistent=True investigations were interrupted by session expiry. EXP-012 created a Form and variable but never completed the required Save.

**EXP-013**

FX\_ImmediateSaveRetentionVar remained visible and unchanged immediately after one successful ordinary Save. Serialization was not established.

**EXP-014**

FX\_CloseReopenRetentionVar (Global=False, Persistent=True, Value=Seed-Close-D) remained visible immediately after Save but the reopened User-scoped Form contained **zero variables**.

This proves only UI-level non-recovery in that execution. It does not establish whether Save serialized the definition.

**EXP-015**

Created FX\_FormVariableLab05 for a controlled saved-definition serialization investigation, but session loss prevented the intended representation check from completing. No serialization conclusion was established.

**EXP-016 / EXP-016-R2 — FormSync SQL definition-script generation**

The reproduced route is:

```text
Runtime FormSync
→ select intended configuration
→ Filter
→ Filter Configuration = Source in the tested workflow
→ Scope Type = User
→ select/verify exact User/ScopeName
→ Refresh List
→ Deselect All
→ verify Name + ScopeType + ScopeName
→ include exactly the intended Form row
→ Script
→ Generate
```

EXP-016-R2 isolated one FX\_FormVariableLab05 version and generated SQL identifying the Form by name, ScopeType=3/User and ScopeName.

Authoritative captured SQL paths:

-   evidence/EXP-016-R2/script/FS\_20261005\_102224.SQL
-   evidence/EXP-016-R2/script-t4/FS\_20261005\_102224.SQL

The SQL was captured twice. Do not call these “two independent generations” unless separate Generate/download evidence or distinct generation metadata is preserved; both use the same filename.

DELETE FROM Variables WHERE FormID = @FormID proves only that generated Form-definition SQL generically handles variable-related metadata. It does **not** prove that FX\_FormVariableLab05 contained any particular saved variable.

EXP-016-R2's Generate produced a ZIP containing:

-   FS\_20261005\_102224.SQL
-   FS\_20261005\_102224\_LIC.SQL

That outcome is more consistent with documented Save/file-output behavior than documented View behavior, but it does **not** prove what Output state FormSync internally processed.

**EXP-017 — Visible FormSync View Output Semantics**

Final experiment status:

**BLOCKED — AC-2 rendered exact-name prerequisite not satisfied; View/Generate not tested.**

T1 historically established a live inherited FormSync session without reauthentication. Exact target identity was established through accessibility/snapshot evidence:

-   Name = FX\_FormVariableLab05
-   Object Type = Form
-   Scope Type = User
-   User/Group Name = current user

However, the experiment required the complete identity to be established through **visible-rendered evidence** before proceeding. The rendered Object Name cell remained truncated as FX\_FormVariabl...; therefore accessibility identity did not satisfy AC-2.

Worker-reported Script-tab rendering from:

-   evidence/EXP-017/00-preflight-formsync-live.png

was:

-   Script form license checked.
-   Generate enabled.
-   Save visibly selected.
-   View visibly unselected.
-   Accessibility state simultaneously reported View checked.
-   Underlying View input positioned off-screen at left:-9000px.

The image was not independently supplied to the specialist for direct inspection, so these remain **worker-reported browser observations**. They do not establish which Output state Mongoose application logic would consume.

Importantly, the off-screen native input does **not** prove that the visible View affordance cannot be activated. EXP-017 never performed that decisive supported rendered-selection test because it stopped at AC-2.

Rendered-row investigation:

-   evidence/EXP-017/04-hover-name-cell-tooltip-check.png
-   evidence/EXP-017/05-grid-hover-tooltip-check.png
-   evidence/EXP-017/06-hover-inc-cell-tooltip-check.png
-   evidence/EXP-017/07-hover-usergroup-cell-tooltip-check.png

No native tooltip was worker-reported for the **tested hovered cells in this FormSync instance/layout**. 04-hover-name-cell-tooltip-check.png must not be used as same-row target proof because its hover landed on the adjacent row. 06 and 07 were the corrected same-row checks.

Scrollbar evidence:

-   evidence/EXP-017/08-grid-container-scrollbar-check.png
-   evidence/EXP-017/09-grid-main-container-scrollbar-check.png

The worker reported no horizontal scrollbar visibly rendered in the **inspected containers in that state/layout**; only the relevant vertical scrollbar was visible. This is not a product-wide rule about FormSync grids.

A Playwright drag that failed to target the column-resizer is a **tooling limitation**, not a Mongoose finding.

Because the required complete rendered identity could not be established using the approved mechanisms, the experiment correctly stopped before touching Script Output controls or Generate.

# 5. Negative findings / blocked topics and why

-   Form-variable definition serialization remains unproven.
-   EXP-004 showed repeated disappearance of an explicitly designed temporary variable, but Persistent=False causality is unproven.
-   EXP-014 showed a Persistent=True definition absent after close/reopen, but whether Save serialized it remains unresolved.
-   EXP-011/012/015 were interrupted or blocked before decisive serialization evidence.
-   EXP-016/R2 generated Form-definition SQL, but generic Variables handling does not identify a controlled variable.
-   EXP-016-R2 did not prove Output=View semantics.
-   EXP-017 also did **not** prove or disprove Output=View semantics; it never selected View or invoked Generate.
-   EXP-017's AC-2 failure is a **factory evidence-condition failure**, not a demonstrated Mongoose product limitation.
-   EXP-017 establishes only that, in the inspected Web Client/grid state, the approved rendered mechanisms did not expose the complete target name.
-   The underlying View input being off-screen does not establish that the visible View affordance is unusable.
-   EXP-017's T1 Script form license state applies only to that inherited state and does not retroactively prove EXP-016-R2's Script-tab configuration.
-   No runtime-value persistence conclusion has been established.
-   Physical Forms-database durability, exact write paths, cache eviction, backend/session independence and stronger logout/restart boundaries remain unverified.
-   No reusable Form-variable persistence recipe exists.

# 6. Open questions and sensible next directions

1.  **Form-variable serialization:** obtain variable-specific saved-definition evidence without inferring from generic FormSync SQL.
2.  **Positive control:** prove that a chosen representation/settings combination exposes a known-present controlled variable before treating absence as negative serialization evidence.
3.  **FormSync View semantics:** perform a dedicated supported rendered test. Before Generate, require **View visibly selected + primary Filename visibly disabled**. After Generate, require a visible Form/display page rather than file/download output.
4.  **Rendered FormSync identity:** determine whether a supported rendered interaction can expose the complete **Name + ScopeType + ScopeName** tuple in this Web Client/grid presentation. EXP-017 ruled out only the approved mechanisms it actually tested.
5.  **Manual EXP-017 evidence audit:** before promoting the worker-reported rendering details further, directly inspect:
    -   evidence/EXP-017/00-preflight-formsync-live.png
    -   evidence/EXP-017/06-hover-inc-cell-tooltip-check.png
    -   evidence/EXP-017/07-hover-usergroup-cell-tooltip-check.png
    -   evidence/EXP-017/09-grid-main-container-scrollbar-check.png
6.  **Lifecycle boundaries:** stronger browser/application/backend/session boundaries remain to be tested separately from close-only Designer recovery.
7.  **Cache/IDO behavior:** explicit global-object unload and IDO-metadata unload remain separate mechanisms requiring controlled evidence.
8.  Continue expanding to additional metadata classes/scopes only without conflating unresolved Form-variable provenance with already replay-verified Form/component procedures.

# 7. Current knowledge state

| Capability / claim | State |
| --- | --- |
| Environment fingerprint / User-scope workflow | **observed** |
| BuildFromScratch Form creation | **replay-verified** |
| Static/Edit/Button component procedures | **replay-verified** |
| Caption + explicit unload | **replay-verified** |
| Description + explicit unload | **replay-verified** |
| Description + ordinary close/reopen | **replay-verified** |
| Description + new Designer recovery | **replay-verified at UI-recovery level** |
| Caption + ordinary close/reopen | **observed** |
| Explicit Form-variable creation through Details → Variables | **observed** |
| Persistent=True variable immediately visible after Save | **observed only** |
| Persistent=True variable absent after close/reopen | **observed negative; serialization unknown** |
| FormSync Script generation for exact selected User-scoped Form | **replay-verified** |
| Tested FormSync Source-workflow script derives from Forms-definition metadata | **observed/replay-supported** |
| FormSync may script selected custom objects from Source or Target configuration | **documented product behavior; target variants not experimentally generalized** |
| Specific Form variable serialized into generated representation | **unverified** |
| FormSync Output=View → visible Form/temporary display page in 2026.09.08 target | **unverified** |
| EXP-017 target exact identity via accessibility/snapshot | **observed** |
| EXP-017 target exact identity via required fully rendered evidence | **blocked / not established** |
| EXP-017 visible View activation | **not tested** |
| EXP-017 View/Generate behavior | **not tested** |
| EXP-017 tooltip result | **observed negative for tested cells/layout only; worker-reported visual evidence** |
| EXP-017 horizontal-scrollbar result | **observed negative for inspected containers/layout only; worker-reported visual evidence** |
| Form-variable persistence recipe | **not promoted** |
