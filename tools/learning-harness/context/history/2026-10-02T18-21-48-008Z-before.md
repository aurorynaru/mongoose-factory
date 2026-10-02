<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-010 (R-20261002-234238-Dv2r); specialist findings verdict: supports; 2026-10-02T16:35:41.941Z -->
<!-- finalized after specialist review of accepted EXP-010 (R-20261002-234238-Dv2r); specialist verdict: supports; 2026-10-03 --> <!-- EXP-009 + EXP-009-R2 establish replay-verified UI-level Description recovery across a newly launched Web Designer tab/window within the same continuously usable authenticated Web Client UI context. Storage provenance, cache eviction, IDO-metadata unloading, authentication-session identity, and backend/server-session identity remain unverified. --> <!-- EXP-010 establishes observed UI-level Caption recovery across ordinary Web Designer Form-tab close/reopen. It is not replay-verified; a clean independent replay is still required. -->

# 1\. Project and workflow

The project is an autonomous **Infor Mongoose factory** being built in C:\\AI\\mongoose-factory. Its long-term goal is to take a natural-language request, optionally with reference images, and reliably build Mongoose Forms/portal-related artifacts using browser automation and a growing body of verified procedures and recipes.

There are three roles:

-   **Coordinator (ChatGPT):** selects the next bounded experiment, reviews worker evidence, decides when specialist consultation is needed, and controls knowledge promotion from candidate → observed → replay-verified.
-   **OpenCode worker:** operates Mongoose through Playwright MCP, records experiment/evidence artifacts, and must remain within approved experiment scope.
-   **Infor Mongoose specialist GPT:** supplies Mongoose-domain guidance for new concepts or unexplained behavior. Its advice is candidate guidance until browser evidence establishes behavior in the target environment.

Preferred learning pattern:

```text
specialist guidance if needed
→ controlled EXP-N browser experiment
→ observed procedure if successful
→ fresh OpenCode session
→ EXP-N-R2 clean replay
→ replay-verified only if semantic postconditions reproduce
```

The **observed → replay-verified** distinction is a factory/harness quality rule, not an Infor-defined validation level.

A replay stopped because one of its own prerequisites cannot be satisfied is **blocked**, not evidence that the underlying procedure failed.

“Fresh worker context” / “independent execution” means independent at the harness/OpenCode-session level. It does not imply replication across another user, tenant, configuration, environment, product version, browser process, authentication state, Mongoose application session, IDO Runtime session or server-side Designer session unless those boundaries are explicitly tested.

The harness/controller automates this coordination. Future coordinator replies must follow its protocol and experiment boundaries.

# 2\. Environment facts that matter

Current proven environment:

-   Mongoose Web Client / Web Designer / application DB / Form definitions DB: **2026.09.08**
-   Infor OS Portal: **2026.09.00**
-   Tenant observed: **G6R8LJ9Q4E8C2Z8Y\_DEM**
-   Demo configuration: **G6R8LJ9Q4E8C2Z8Y\_MONGOOSE\_DEM\_DEFAULT**
-   Editing permission: **Site Developer**
-   Factory experiments currently use explicitly confirmed **User-scope** versions.
-   For factory reopen verification, the intended scoped Form version is distinguished by **Form name + ScopeType + ScopeName**. This aligns with documented FormSync version-identification semantics; do not assume every Mongoose subsystem exposes version identity using exactly this tuple.
-   User, Group and Site represent customized versions; Vendor is the non-customized/base version in the documented version model.
-   Current learning lane is classic **BuildFromScratch** Forms.
-   Browser automation uses Playwright MCP through OpenCode.

Environment/browser observations, not generic Mongoose contracts:

-   Web Client normally runs inside the Portal iframe; Web Designer opens separately.
-   Numeric Ext JS IDs drift between sessions.
-   Synthetic DOM clicks can fail to trigger Ext handlers; native Playwright interactions have been more reliable.
-   Hidden Ext windows/components can remain cached off-screen; DOM existence does not prove visible UI.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer **Form-menu recent-forms** and **Select Form** are tested reopen paths.
-   The Form-menu recent-forms list is a documented product feature; EXP-010 additionally observed it successfully reopening the target without reload, direct URL navigation or a Select Form dialog.
-   Closing a clean Designer Form tab can produce no prompt and may expose another already-loaded Form.
-   User Preferences checkboxes are Ext controls using div\[role=checkbox\].
-   Designer View preferences and Web Client User Preferences are different surfaces.
-   Frame-scoped locators/native element interaction are safer than raw-coordinate interaction inside the Portal iframe.

The exact explicit-unload command observed in 2026.09.08 is:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unload experiments were accompanied by successful /DesignerSession/ClearCache traffic. This is **diagnostic only**, not a supported automation contract or proof of complete command semantics.

The user's **Unload IDO Metadata With Forms** preference was observed enabled in EXP-005-R2, EXP-006/R2, EXP-007/R2 and EXP-008/R2-related checks. Successful experiments left it unchanged. EXP-009-R2 and EXP-010 did not open/change/Save User Preferences; its actual state during those experiments was **not independently verified**.

Current Infor documentation supports these general facts:

-   Closing a Form can leave the Form and associated global Form objects in memory; ordinary close/reopen is therefore a **weak persistence boundary**, not inherently a Form/global-object cache-eviction test.
-   **Unload All Global Form Objects** clears Form/global-object information from memory.
-   User Preferences documentation says **Unload IDO Metadata With Forms** causes IDO metadata to unload when Forms are closed.
-   Other cache/development documentation associates the option with IDO-metadata clearing when **Unload All Global Form Objects** is performed.
-   Those formulations do not prove the exact cache semantics of a **2026.09.08 Web Designer Form-tab ×** action.
-   Form/global-object cache and IDO-metadata cache are distinct concepts.
-   After changing Site Developer editing scope/impersonation, Forms/global objects should be cleared before trusting displayed scoped versions.

Documentation is principally adjacent **2026.x/2026.10** material, not identical to tested **2026.09.08**. Exact target-version UI/lifecycle behavior requires target-environment evidence.

Product architecture describes Forms/components and customized UI-object versions as stored in the **Forms Database**. This means the logical Forms metadata repository role; experiments have not established a particular physical SQL database, row or write path responsible for recovery.

For factory terminology, **close-only** means:

```text
ordinary Web Designer Form-tab close/reopen
with NO explicit
Form → Definition → Unload All Global Form Objects
```

It does **not** mean that no IDO-metadata unloading or internal cache processing occurred.

For factory terminology, **new Web Designer client instance** means only a **newly launched/rendered Web Designer browser tab/window after the old Designer tab/window was closed**. It does not prove a new JavaScript runtime, authentication context, Mongoose application session, IDO Runtime session or server-side Designer session.

Current recovery results:

-   User-scope **Caption** recovery through the tested explicit-unload sequence — **replay-verified**, EXP-006 + EXP-006-R2.
-   User-scope **Description** recovery through explicit unload — **replay-verified**, EXP-007 + EXP-007-R2.
-   User-scope **Description** recovery across ordinary Designer Form-tab close/reopen without explicit global-object unload — **replay-verified**, EXP-008 + EXP-008-R2.
-   User-scope **Description** recovery across a newly launched Designer from the still-usable authenticated Web Client — **replay-verified at the UI-recovery level**, EXP-009 + EXP-009-R2.
-   User-scope **Caption** recovery across ordinary Designer Form-tab close/reopen without explicit global-object unload — **observed only**, EXP-010. A clean independent replay is required for replay-verified status.

EXP-009/R2 crossed a different/broader browser-UI lifecycle boundary than EXP-008/R2 but did not establish a stronger persistence, cache or backend-session boundary.

EXP-010 occurred **within the same continuously usable authenticated Web Client UI context**, without deliberate logout/login or replacement of the Web Client UI and without launching a new Designer. It did **not** instrument authentication-token/session identity, Mongoose application-session identity, IDO Runtime session identity or backend Designer-session identity.

# 3\. Decisions and rules established so far

Permanent factory knowledge follows:

```text
candidate guidance
→ observed
→ replay-verified
```

Core rules:

-   Modify only factory-owned FX\_ artifacts; never alter unrelated/non-FX\_ artifacts.
-   Never weaken security or expose credentials.
-   Keep each experiment limited to one new capability.
-   Read current state before retrying; never blindly repeat a mutation after interruption.
-   Record blockers, failures and corrections as well as successes.
-   Evidence should prove semantic state transitions, not every click.
-   A screenshot proves only the visual state rendered at that moment.
-   Editing permission and editing scope are separate concepts.
-   For scoped reopen checks, verify **Name + ScopeType + ScopeName**.
-   Version identity and storage provenance are different questions.
-   Treat specialist/documentation guidance as candidate knowledge for exact target behavior until target-environment evidence establishes it.
-   Do not generalize beyond the environment, property/object class, scope and lifecycle boundary actually replayed.
-   Save semantics must be learned experimentally.
-   After editing Form metadata, ordinary-save to clean before applying the experiment's close/unload/reopen boundary.
-   Do not invent undocumented APIs, direct DB edits or metadata hacks.
-   In Select Form, explicitly select the intended row.
-   If an experiment defines a prerequisite, obey it even if another route might work.
-   Do not change **Unload IDO Metadata With Forms** merely to satisfy an experiment unless separately approved.
-   Treat Form/global-object cache and IDO-metadata cache as separate acceptance dimensions.
-   Treat ordinary Form-tab close/reopen as a weak UI/persistence boundary; even replay verification across it does not establish durable-storage provenance or cache eviction.
-   Network signatures such as /DesignerSession/ClearCache are diagnostic only.
-   Whether an **explicit** unload command was invoked can be established by the controlled-action record; a network signature is unnecessary.
-   **Absence of an explicit unload/metadata-clear command does not prove absence of IDO-metadata unloading.**
-   If isolating a Designer-close boundary from IDO-metadata behavior, control or explicitly verify relevant preference state.
-   Distinguish Web Client Form close, Web Designer Form-tab close, whole Designer tab/window lifecycle, and explicit global-object unload.
-   A newly launched Designer does not establish new authentication, application, IDO Runtime or backend/server sessions without independent instrumentation.
-   After Site Developer scope/impersonation changes, explicitly clear Forms/global objects before trusting displayed scoped versions.
-   Caption and Description are separate metadata fields; neither establishes a general “all Form metadata recovers” rule.
-   Other Form attributes and subordinate objects require separate evidence.
-   No reusable Description-recovery or Caption-recovery lifecycle recipe has been promoted from these property experiments.
-   Ext IDs, store indexes, model IDs, internal request paths and component structures are diagnostic observations, not durable recipe dependencies.
-   Reuse existing evidence when it proves an acceptance check rather than performing redundant mutations.
-   If Web Client list data and Designer properties disagree, record the difference without inferring stale data, fallback behavior or failed recovery unless the projection contract is known.
-   **Do not assume visible MRU/recent-forms text is always the internal Form name.** Mongoose has a Display Captions in Most Recently Used forms list preference that can alter MRU presentation; verify scoped identity after opening rather than relying solely on displayed MRU text.
-   Repository audits must distinguish experiment-attributable changes from harness/runtime/operator tooling changes.

Established experiment status:

-   **EXP-005-R2:** historically blocked.
-   **EXP-006 + R2:** Caption + explicit unload — **replay-verified**.
-   **EXP-007 + R2:** Description + explicit unload — **replay-verified**.
-   **EXP-008 + R2:** Description + ordinary Designer Form-tab close/reopen — **replay-verified**.
-   **EXP-009 + R2:** Description + newly launched Designer within the same continuously usable authenticated Web Client UI context — **replay-verified at UI-recovery level only**.
-   **EXP-010:** Caption + ordinary Designer Form-tab close/reopen — **observed only**; all AC-1…AC-10 passed, but no independent replay has yet occurred.

Current naming conventions:

```text
Forms:       FX_<Purpose>
Components:  FX_<SemanticPurpose><MongooseType>
Variables:   FX_<Purpose>Var   (candidate from EXP-004; no verified variable recipe)
```

# 4\. Lessons learned and pitfalls per experiment

**EXP-001 — Environment fingerprint**

Established browser architecture, versions, User-scope behavior and core navigation. Editing permission and editing scope are distinct.

**EXP-002 / EXP-002-R2 — Basic Form creation**

Verified recipes/forms/create-basic-form.md:

```text
Web Designer
→ New
→ New Form
→ Classic
→ BuildFromScratch
→ wizard
→ Save Template unchecked
→ Finish
```

Finish persisted the blank Form immediately; R2 reproduced creation in a fresh worker context. Pitfalls: wrong-row activation, portal notifications, drifting Ext IDs and synthetic-click failures.

**EXP-003 / EXP-003-R2 — Component Fundamentals**

Verified:

-   recipes/components/add-component-from-toolbox.md
-   recipes/components/configure-basic-component.md

Verified component types: Static, Edit and Button. Generated IDs/codes/internal traffic are not selector/schema contracts.

**EXP-004 — Form Variable Fundamentals**

Details → Variables is the tested Form-variable path. FX\_TestValueVar, with Global=False, Persistent=False, Value=Seed-A, disappeared after ordinary Save **2/2** and Regenerate Form **1/1**: **3/3 failures**. Persistent=False concerns variable-value lifetime/storage and does not explain disappearance of the design-time definition. Cause remains **unverified**; no variable recipe is verified.

**EXP-005 / EXP-005-R2 — Caption close/reopen**

EXP-005 observed Caption recovery after ordinary Save + close/reopen. EXP-005-R2 was **BLOCKED** because its isolation criteria required **Unload IDO Metadata With Forms** disabled while it was enabled and changing it was prohibited. This was an isolation blocker, not a Caption failure.

**EXP-006 / EXP-006-R2 — Caption across explicit unload**

FX\_FormPropertyLab03 / 04; Caption-only edits; ordinary Save-to-clean; preference confirmed enabled; **Unload All Global Form Objects** invoked once; exact User-scoped reopen recovered Caption and comparison properties. **Replay-verified**. Does not prove storage provenance or general metadata persistence.

**EXP-007 / EXP-007-R2 — Description across explicit unload**

FX\_FormPropertyLab05 / 06; Description-only edits through the same explicit-unload boundary; Description and comparison properties recovered. **Replay-verified**. A lingering menu once triggered a Delete prompt on Lab05; it was cancelled and no deletion occurred. No Description recipe promoted.

**EXP-008 / EXP-008-R2 — Description across ordinary Designer close/reopen**

FX\_FormPropertyLab07 / 08; Save-to-clean → ordinary Form-tab close → no explicit global-object unload → supported reopen of exact User-scoped version. Description recovery **replay-verified**. This remains a weak persistence boundary and makes no claim about cache eviction, IDO behavior or database provenance.

**EXP-009 / EXP-009-R2 — Description across newly launched Designer**

FX\_FormPropertyLab09 / 10; old Designer closed, authenticated Web Client UI retained, new Designer launched, exact scoped Form deliberately reopened. Description recovered in both runs. **Replay-verified only for this UI-level boundary.** No server-session, authentication-session, Forms-database, cache or IDO-unload conclusion.

**EXP-010 — Caption across ordinary Designer close/reopen**

FX\_FormPropertyLab11 was absent preflight, then created exactly once as a User-scope classic BuildFromScratch Form. Caption alone was changed to Form Property Caption Close Only, followed by exactly one ordinary Save to clean.

The target closed through its ordinary Form-tab × with **no unsaved-change prompt**, then deliberately reopened through the supported **Form-menu recent-forms** path without reload, direct URL navigation or dialog. The same User-scoped version was verified using **Name + ScopeType + ScopeName**. Caption recovered unchanged and every recorded comparison property matched baseline. Final inventory showed 647 total Forms, 16 FX\_ Forms and exactly one case-insensitive FX\_FormPropertyLab11. The target was left open and clean.

All AC-1…AC-10 passed. The end-to-end finding is **observed**, not replay-verified, because only one controlled execution has occurred.

EXP-010 deliberately did **not** open/change User Preferences, invoke explicit unload/cache-clear commands, close the whole Designer browser tab/window, log out/in, launch another Designer, or claim Forms-database/cache/IDO/session semantics.

A presentation difference was also observed: **Select Form displayed the Form Name rather than the edited Caption in the observed presentation**, while the Designer Form properties showed Caption=Form Property Caption Close Only. A specific **“Name fallback” mechanism is unverified** and must not be promoted without a dedicated check. Likewise, the Designer Form-properties value proves the Form-level Caption value but does not imply every other Mongoose projection must display it identically.

# 5\. Negative findings / blocked topics and why

-   **EXP-004 remains unresolved.** The explicit temporary Form-variable definition disappeared across every tested native persistence path. Do not work around this with bindings, scripts, undocumented APIs, DB changes, Global=True or Persistent=True unless separately approved; do not classify it as a confirmed product defect without stronger evidence.
-   **EXP-005-R2 remains historically blocked** by its own isolation prerequisite.
-   Recovered Caption/Description storage row, write path and Forms-database provenance remain **unverified**.
-   Whether ordinary **Web Designer Form-tab ×** close triggers IDO-metadata unloading, including through **Unload IDO Metadata With Forms**, remains **unverified**.
-   Generic documentation referring to Forms being closed does not establish exact Web Designer tab-X cache semantics in 2026.09.08.
-   Whole-Designer shutdown cache effects and whether EXP-009/R2 created a new server-side Designer/application/IDO Runtime session remain **unverified**.
-   Authentication/token/session identity across EXP-009/R2 and EXP-010 was not instrumented.
-   Logout/login, newly authenticated Web Client, browser restart and OS restart recovery remain **unverified**.
-   Site, Group and Vendor Default behavior remains **unverified**.
-   Other Form metadata and subordinate object classes remain **unverified**.
-   Select Form Caption/Name presentation behavior is descriptive only; the algorithm or fallback mechanism remains **unverified**.
-   MRU/recent-forms visible text must not be treated as an invariant Form-name selector because preference-controlled Caption display exists.
-   Exact 2026.09.08 cache and IDO-metadata trigger semantics remain **unverified**.
-   EXP-010 adds evidence for Caption close-only recovery but does not resolve any cache/storage/session question.

# 6\. Open questions and sensible next directions

The most direct next promotion step is a clean **EXP-010-R2** on one new User-scope FX\_ Form:

```text
new target
→ record untouched baseline
→ Caption-only edit
→ exactly one ordinary Save-to-clean
→ ordinary Web Designer Form-tab close
→ NO explicit global-object unload
→ deliberate supported reopen
→ verify Name + ScopeType + ScopeName
→ compare Caption + all baseline properties
```

Passing would promote only **Caption recovery across the same ordinary same-Designer Form-tab close/reopen UI boundary** to replay-verified under the harness quality model. Because ordinary close/reopen is a weak Mongoose persistence boundary, even EXP-010-R2 would **not** establish cache eviction, IDO-cache behavior, Forms-database provenance, authentication/session durability, browser-restart durability or other scopes.

Other sensible directions, each separately bounded:

-   Resolve EXP-004 variable-definition persistence before creating any variable recipe.
-   Investigate **Unload IDO Metadata With Forms** trigger semantics only if needed, with preference state controlled/verified.
-   Test logout/new authentication, browser restart or stronger lifecycle boundaries separately.
-   Test additional metadata properties individually rather than generalizing from Caption/Description.
-   Test Site/Group scopes only in separately approved experiments.
-   Investigate Select Form Caption/Name presentation only where automation requires a defined projection contract.
-   If recent-forms becomes a durable automation dependency, account for the MRU Caption-display preference and continue verifying the opened Form by scoped identity.
-   Promote reusable recovery recipes only when the intended boundary, semantic postconditions and automation value are clear.

Current reusable recipes:

```text
recipes/forms/create-basic-form.md
recipes/components/add-component-from-toolbox.md
recipes/components/configure-basic-component.md
```

Current knowledge state:

| Capability | State |
| --- | --- |
| Basic Form creation | replay-verified |
| Static/Edit/Button component fundamentals | replay-verified |
| Temporary explicit Form variable creation | unresolved / blocked |
| Caption + explicit unload recovery | replay-verified |
| Description + explicit unload recovery | replay-verified |
| Description + ordinary Form-tab close/reopen | replay-verified |
| Description + newly launched Designer | replay-verified at UI-recovery level |
| Caption + ordinary Form-tab close/reopen | **observed only — EXP-010** |
| Select Form Caption/Name presentation mechanism | unverified |
| IDO-metadata trigger semantics | unverified |
| Internal cache/storage provenance | unverified |
| Stronger auth/browser/server boundaries | unverified |
| Other scopes/properties/object classes | unverified |
