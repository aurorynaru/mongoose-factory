<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-009 (R-20261002-213117-Vpba); specialist findings verdict: supports; 2026-10-02T14:42:57.030Z -->
<!-- finalized after specialist review of accepted EXP-009 (R-20261002-213117-Vpba); specialist verdict: supports; EXP-009 new-Web-Designer-client-instance Description recovery is observed only, not replay-verified; no reusable recipe promoted; 2026-10-02 -->

# 1. Project and workflow

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

# 2. Environment facts that matter

Current proven environment:

-   Mongoose Web Client / Web Designer / application DB / Form definitions DB: **2026.09.08**
-   Infor OS Portal: **2026.09.00**
-   Tenant observed: **G6R8LJ9Q4E8C2Z8Y\_DEM**
-   Demo configuration: **G6R8LJ9Q4E8C2Z8Y\_MONGOOSE\_DEM\_DEFAULT**
-   Editing permission: **Site Developer**
-   Factory experiments currently use explicitly confirmed **User-scope** versions.
-   For factory reopen verification, the intended scoped Form version is distinguished by **Form name + ScopeType + ScopeName**. This aligns with Infor's documented FormSync version-identification model; it should not be assumed that every Mongoose subsystem necessarily exposes version identity using exactly this tuple.
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
-   Designer **Form** menu/recent-forms and Select Form are tested reopen paths.
-   Closing a clean Designer Form tab may produce no prompt and may expose another already-loaded Form.
-   User Preferences checkboxes are Ext controls using div\[role=checkbox\].
-   Designer View preferences and Web Client User Preferences are different surfaces.
-   Frame-scoped locators/native element interaction are safer than raw-coordinate interaction inside the Portal iframe.

The exact explicit-unload command observed in the target 2026.09.08 environment is:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unload experiments were accompanied by successful /DesignerSession/ClearCache traffic. That traffic is **diagnostic only** and is not a supported automation contract or proof of complete command semantics.

The current user's **Unload IDO Metadata With Forms** preference has been observed enabled in EXP-005-R2, EXP-006/R2, EXP-007/R2, EXP-008/R2 and related checks. Successful experiments left it unchanged. This enabled state is an environment/user observation, not a generic product default.

Current Infor documentation supports these general product facts:

-   Closing a Form can leave the Form and associated global Form objects in memory; ordinary close/reopen is therefore not inherently a complete Form/global-object cache boundary.
-   **Unload All Global Form Objects** clears Form/global-object information from memory.
-   Web Client documentation describes **Unload IDO Metadata With Forms** as causing IDO metadata to unload when Forms are closed.
-   Separate development/cache documentation states that executing **Unload All Global Form Objects** with that preference enabled also clears associated IDO metadata.
-   These are two documented triggers and should not be collapsed into a generic “close/unload activity” mechanism.
-   Form/global-object cache and IDO metadata cache are distinct concepts.
-   After changing Site Developer editing scope/impersonation, Forms/global objects should be cleared from memory before trusting that versions corresponding to the new scope are displayed.

Documentation-version caveat: current online supporting references are principally **Mongoose/CSI 2026.x/2026.10**, adjacent to but not identical with the tested **2026.09.08** environment. They support the architectural conclusions above, but exact 2026.09.08 Web Designer UI, lifecycle and session behavior remains authoritative only when established by target-environment evidence.

Product architecture states that Forms/components and customized UI-object versions are stored in the **Forms Database**. However, the browser experiments performed so far did not directly inspect or prove the particular database row, provenance, write path or storage record responsible for an observed recovery.

For factory terminology, **close-only** means:

```text
ordinary Web Designer Form-tab close/reopen
with NO explicit
Form → Definition → Unload All Global Form Objects
```

It does **not** mean that no internal IDO-metadata or cache processing occurred.

Current recovery results:

-   User-scope **Caption** recovery through the tested explicit-unload sequence is **replay-verified** by EXP-006 + EXP-006-R2.
-   User-scope **Description** recovery through the tested explicit-unload sequence is **replay-verified** by EXP-007 + EXP-007-R2.
-   User-scope **Description** recovery across ordinary Web Designer Form-tab close/reopen without explicit global-object unload is **replay-verified** by EXP-008 + EXP-008-R2.
-   User-scope **Description** recovery across closing the existing Designer browser tab/window/client instance and launching a newly rendered Designer while the existing authenticated Web Client remained open is **observed once** by EXP-009.

EXP-009 crossed a **different/broader browser-UI lifecycle boundary** than EXP-008/R2. It has not been shown to cross a stronger Mongoose persistence, cache or backend-session boundary.

During EXP-009, the existing authenticated Web Client remained open and no logout or new login was performed. This does **not** establish continuity of a particular authentication-session identifier, Mongoose application session, IDO Runtime session or server-side Designer session.

# 3. Decisions and rules established so far

Permanent factory knowledge follows:

```text
candidate guidance
→ observed
→ replay-verified
```

Core rules:

-   Modify only factory-owned FX\_ artifacts.
-   Never alter unrelated/non-FX\_ artifacts.
-   Never weaken security or expose credentials.
-   Keep each experiment limited to one new capability.
-   Read current state before retrying; never blindly repeat a mutation after interruption.
-   Record blockers, failures and corrections as well as successes.
-   Evidence should prove semantic state transitions, not every click.
-   A screenshot proves only the visual state rendered at that moment.
-   Editing permission and editing scope are separate concepts.
-   For factory scoped-reopen checks, verify **name + ScopeType + ScopeName**.
-   Version identity and storage provenance are different questions.
-   Treat specialist/documentation guidance as candidate knowledge for exact target-environment behavior until browser evidence establishes it.
-   Prefer target-environment evidence for precise Web Designer 2026.09.08 UI/lifecycle behavior.
-   Do not generalize beyond the environment, property/object class, scope and boundary actually replayed.
-   Save semantics must be learned experimentally.
-   After editing Form metadata, ordinary-save to clean before applying the experiment's close/unload/reopen boundary.
-   Do not invent undocumented APIs, direct DB edits or metadata hacks.
-   In Select Form, explicitly select the intended row.
-   If an experiment defines a prerequisite, obey it even if another path might work.
-   Do not change **Unload IDO Metadata With Forms** merely to satisfy an experiment unless separately approved.
-   Treat Form/global-object cache state and IDO-metadata cache state as separate acceptance dimensions.
-   Treat **Unload All Global Form Objects** as a documented Form/global-object memory operation, not arbitrary tenant-wide/server-wide invalidation.
-   Network signatures such as /DesignerSession/ClearCache are diagnostic only.
-   Whether an explicit unload command was invoked can be established by the controlled experiment record; a network signature is not required.
-   Distinguish Web Client Form close, Web Designer Form-tab close, whole Designer browser-window/client lifecycle, and explicit global-object unload.
-   A “new Designer” is not evidence of new JavaScript state, authentication state, Mongoose application session, IDO Runtime session or server-side Designer session unless that boundary is independently instrumented.
-   After Site Developer editing-scope/impersonation changes, explicitly clear Forms/global objects before trusting displayed scoped versions.
-   Caption and Description are separate metadata fields; neither proves a general “all Form metadata recovers” rule.
-   Other Form attributes and subordinate objects—collections, variables, components, handlers, bindings, localized/translatable Strings, etc.—require their own evidence.
-   No reusable Description-recovery recipe has been created or promoted.
-   Ext IDs, store indexes, model IDs, internal request paths and component structures are diagnostic observations, not durable recipe dependencies.
-   Reuse existing evidence when it already proves an acceptance check rather than performing redundant mutations.
-   If Web Client list data and Designer properties disagree, record the observed difference without inferring stale data, fallback behavior or failed recovery unless the projection contract is known.
-   Repository audits must distinguish experiment-attributable changes from harness/runtime/operator tooling changes.

Established experiment status:

-   **EXP-005-R2:** historically blocked.
-   **EXP-006 + R2:** Caption recovery across explicit unload is replay-verified.
-   **EXP-007 + R2:** Description recovery across explicit unload is replay-verified.
-   **EXP-008 + R2:** Description recovery across ordinary Designer Form-tab close/reopen with no explicit global-object unload is replay-verified.
-   **EXP-009:** Description recovery across a newly launched Designer browser/client instance, while the existing authenticated Web Client remained open and without logout/new login, is **observed only**.
-   **EXP-009-R2 is required** before that exact procedure can be promoted to replay-verified. Product documentation cannot substitute for this harness-level replay requirement.

Current naming conventions:

```text
Forms:       FX_<Purpose>
Components:  FX_<SemanticPurpose><MongooseType>
Variables:   FX_<Purpose>Var   (candidate from EXP-004; no verified variable recipe)
```

# 4. Lessons learned and pitfalls per experiment

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

Finish persisted the blank Form immediately; R2 reproduced creation in a fresh worker context.

Pitfalls included wrong-row activation, portal notifications, drifting Ext IDs and synthetic-click failures.

**EXP-003 / EXP-003-R2 — Component Fundamentals**

Verified:

-   recipes/components/add-component-from-toolbox.md
-   recipes/components/configure-basic-component.md

Verified component types: Static, Edit and Button.

Generated IDs, numeric component codes and internal traffic are not selector/schema contracts.

**EXP-004 — Form Variable Fundamentals**

The browser-tested path was:

```text
Details
→ Variables
```

An explicitly defined temporary Form variable FX\_TestValueVar with Global=False, Persistent=False, Value=Seed-A disappeared after ordinary Form Save **2/2** and Regenerate Form **1/1**, for **3/3 failures**.

Persistent=False governs variable-value lifetime/storage and does not by itself explain disappearance of an explicitly created design-time variable definition. The cause remains **unverified**. No variable recipe is verified.

**EXP-005 / EXP-005-R2 — Caption close/reopen**

EXP-005 observed Caption recovery after ordinary Save + close/reopen.

EXP-005-R2 was **BLOCKED** because its criteria required **Unload IDO Metadata With Forms** disabled while the environment had it enabled and changing it was prohibited. This was an experiment-isolation blocker, not a Caption failure.

**EXP-006 / EXP-006-R2 — Caption across explicit unload**

FX\_FormPropertyLab03, then replay FX\_FormPropertyLab04, changed Caption only, saved clean, closed, confirmed the preference enabled, invoked **Unload All Global Form Objects** exactly once, and reopened the same User-scoped version.

Result: **replay-verified** for that exact workflow/environment lane.

**EXP-007 / EXP-007-R2 — Description across explicit unload**

FX\_FormPropertyLab05, followed by replay FX\_FormPropertyLab06, changed only Form-level Description, ordinary-saved to clean, closed, confirmed the preference enabled, invoked **Unload All Global Form Objects** exactly once, and reopened the same User-scoped version.

Result: **replay-verified** for that exact explicit-unload workflow.

Pitfalls included a lingering menu causing an accidental Delete prompt on FX\_FormPropertyLab05; it was cancelled and subsequent checks proved no deletion.

**EXP-008 / EXP-008-R2 — Description across ordinary Web Designer close/reopen**

FX\_FormPropertyLab07 and replay FX\_FormPropertyLab08 established repeatable Description recovery after ordinary save-to-clean → Designer Form-tab close → **no explicit global-object unload** → supported reopen of the exact User-scoped version.

Result: **replay-verified** for that close-only workflow.

This does not establish cache eviction or independently prove the stored database record supplying recovery.

**EXP-009 — Description across new Web Designer client instance**

FX\_FormPropertyLab09 was created at User scope. Only Form-level Description was changed to:

```text
Form Property Description New Designer Client
```

It was ordinary-saved to clean, the target Form was normally closed, and the existing Web Designer browser tab/window/client instance was then closed. No explicit Unload All Global Form Objects was invoked. No User Preference was changed or saved.

The existing authenticated Web Client remained open; no logout or new login was performed. A newly rendered Designer tab/window/client instance was launched through the supported Web Client UI.

Before deliberate reopen, the new Designer did not already contain FX\_FormPropertyLab09 as an inherited/open Form tab. The exact same User-scoped version was then deliberately reopened, and Description plus the recorded comparison properties recovered unchanged.

Result: **observed**, AC-1…AC-10 PASS; **not replay-verified**.

This proves only the tested browser/UI recovery boundary. It does not prove a new authentication state, new Mongoose/IDO/server-side Designer session, Forms-database row, cache eviction or IDO-metadata unloading.

Final browser/repository observations:

-   exactly one FX\_FormPropertyLab09 was observed;
-   inventory was 645 Forms total / 14 FX\_;
-   target was left open and clean;
-   cached Select Form Ext components could remain off-screen while no dialog was visibly open;
-   experiment-attributable repository changes were confined to the EXP-009 record and evidence/EXP-009/;
-   the pre-existing README.md formatting change was not attributable to EXP-009;
-   no recipe was promoted.

# 5. Negative findings / blocked topics and why

**EXP-004 remains unresolved.** The explicit temporary Form-variable definition disappeared across every tested native persistence path. Do not work around it using bindings, scripts, undocumented APIs, DB changes, Global=True or Persistent=True unless separately approved. Do not classify it as a confirmed Mongoose defect without stronger evidence or Infor confirmation.

**EXP-005-R2 remains historically blocked** because its own prerequisite could not be satisfied.

Still unverified by experiment:

-   Which precise memory/storage path supplied recovered Caption/Description values.
-   The particular Forms Database row or stored-object provenance for the tested Forms, even though product architecture says saved customized Forms belong in the Forms Database.
-   Whether Web Designer Form-tab close honors **Unload IDO Metadata With Forms** identically to the documented Web Client Form-close behavior.
-   Whether closing a Designer browser/client instance causes Form/global-object or IDO-metadata cache eviction.
-   Whether EXP-009 created a new JavaScript runtime state, authentication session, Mongoose application session, IDO Runtime session or server-side Designer session.
-   Persistence across logout/new login, browser restart, OS restart, another user, configuration, tenant or product release.
-   Site, Group and Vendor behavior in this factory lane.
-   Other Form properties and subordinate-object classes.
-   Web Client/GetAllForms-style projection differences versus Designer properties.
-   Exact 2026.09.08 IDO-metadata trigger behavior where available documentation is adjacent 2026.x/2026.10 rather than an exact 2026.09.08 snapshot.

# 6. Open questions and sensible next directions

The direct harness-quality follow-up to EXP-009 is **EXP-009-R2**: a clean replay in a fresh worker context using one new FX\_ User-scope Form and the same tested browser-UI lifecycle boundary:

```text
Description-only edit
→ ordinary Save to clean
→ normal Form-tab close
→ close existing Designer browser tab/window/client
→ keep existing authenticated Web Client open
→ no logout/new login
→ no explicit global-object unload
→ launch newly rendered Designer through supported UI
→ prove target not already inherited/open
→ deliberately reopen exact scoped version
→ verify Description + comparison properties
```

Passing that replay would promote only this exact **new-Designer-client-instance browser/UI recovery procedure** to replay-verified.

If the actual question becomes **durable persistence across a materially stronger boundary**, another Designer-window replay is not the most discriminating test. A separately approved experiment using **logout/new authentication followed by exact scoped reopen** would test a stronger user-visible lifecycle boundary.

If the question instead becomes **storage provenance**, direct supported inspection of the relevant Forms Database representation would be a separate investigation. UI recovery alone should not be used to infer the particular stored record.

Other sensible directions remain:

-   determine supported Form-variable persistence behavior for EXP-004;
-   isolate **Unload IDO Metadata With Forms** trigger semantics;
-   compare additional Form metadata fields across close-only, explicit-unload and Designer-client-lifecycle boundaries;
-   test Site/Group/User scope changes only with explicit Forms/global-object clearing after changing Site Developer impersonation/editing scope;
-   investigate list/projection differences without assuming stale/cache behavior;
-   promote reusable recovery recipes only after their intended boundaries and semantic postconditions are replay-verified.

Current reusable verified recipes:

```text
recipes/forms/create-basic-form.md
recipes/components/add-component-from-toolbox.md
recipes/components/configure-basic-component.md
```

Current knowledge state:

```text
Basic Form creation                         replay-verified
Static/Edit/Button component fundamentals   replay-verified
Temporary explicit Form variable creation   unresolved
Caption + explicit unload recovery           replay-verified
Description + explicit unload recovery       replay-verified
Description + close-only Form reopen         replay-verified
Description + new Designer client lifecycle  observed only (EXP-009)
IDO-metadata trigger semantics               unverified
Specific cache/storage provenance            unverified
Auth/Mongoose/IDO/server-session boundaries  unverified
Other scopes/properties/object classes       unverified
```
