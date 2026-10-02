<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-009-R2 (R-20261002-225512-23P8); specialist findings verdict: supports; 2026-10-02T15:38:09.694Z -->
<!-- finalized after specialist review of accepted EXP-009-R2 (R-20261002-225512-23P8); specialist verdict: supports; 2026-10-02 -->

<!-- EXP-009 + EXP-009-R2 establish replay-verified UI-level Description recovery across a newly launched Web Designer tab/window within the same continuously usable authenticated Web Client UI context. Storage provenance, cache eviction, IDO-metadata unloading, authentication-session identity, and backend/server-session identity remain unverified. -->

# 1\. Project and workflow

The project is an autonomous **Infor Mongoose factory** being built in `C:\AI\mongoose-factory`. Its long-term goal is to take a natural-language request, optionally with reference images, and reliably build Mongoose Forms/portal-related artifacts using browser automation and a growing body of verified procedures and recipes.

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
    
-   For factory reopen verification, the intended scoped Form version is distinguished by **Form name + ScopeType + ScopeName**. This aligns with Infor's documented FormSync version-identification model; it should not be assumed that every Mongoose subsystem necessarily exposes version identity using exactly this tuple.
    
-   User, Group and Site represent customized versions; Vendor is the non-customized/base version in the documented version model.
    
-   Current learning lane is classic **BuildFromScratch** Forms.
    
-   Browser automation uses Playwright MCP through OpenCode.
    

Environment/browser observations, not generic Mongoose contracts:

-   Web Client normally runs inside the Portal iframe; Web Designer opens separately.
    
-   Numeric Ext JS IDs drift between sessions.
    
-   Synthetic DOM clicks can fail to trigger Ext handlers; native Playwright interactions have been more reliable.
    
-   Hidden Ext windows/components can remain cached off-screen; DOM existence does not prove visible UI.
    
-   Direct cold `?MGForm=...` navigation has been unreliable.
    
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
    
-   Designer **Form** menu/recent-forms and Select Form are tested reopen paths.
    
-   Closing a clean Designer Form tab may produce no prompt and may expose another already-loaded Form.
    
-   User Preferences checkboxes are Ext controls using `div[role=checkbox]`.
    
-   Designer View preferences and Web Client User Preferences are different surfaces.
    
-   Frame-scoped locators/native element interaction are safer than raw-coordinate interaction inside the Portal iframe.
    

The exact explicit-unload command observed in the target 2026.09.08 environment is:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unload experiments were accompanied by successful `/DesignerSession/ClearCache` traffic. That traffic is **diagnostic only** and is not a supported automation contract or proof of complete command semantics.

The current user's **Unload IDO Metadata With Forms** preference was observed enabled in EXP-005-R2, EXP-006/R2, EXP-007/R2, EXP-008/R2 and related checks. Successful experiments left it unchanged. EXP-009-R2 did not open, change or Save User Preferences, so its actual state during EXP-009-R2 was **not independently verified**.

Current Infor documentation supports these general product facts:

-   Closing a Form can leave the Form and associated global Form objects in memory; ordinary close/reopen is therefore not inherently a complete Form/global-object cache boundary.
    
-   **Unload All Global Form Objects** clears Form/global-object information from memory.
    
-   **Unload IDO Metadata With Forms** is documented as causing IDO metadata to unload when Forms are closed.
    
-   With the relevant option enabled, documentation also associates **Unload All Global Form Objects** with clearing associated IDO metadata.
    
-   Form/global-object cache and IDO metadata cache are distinct concepts.
    
-   After changing Site Developer editing scope/impersonation, Forms/global objects should be cleared from memory before trusting displayed scoped versions.
    

Documentation-version caveat: supporting online documentation is principally **Mongoose/CSI 2026.x/2026.10**, adjacent to but not identical with the tested **2026.09.08** environment. Exact 2026.09.08 UI/lifecycle behavior remains authoritative only when established by target-environment evidence.

Product architecture describes Forms/components and customized UI-object versions as stored in the **Forms Database**. For factory purposes, this means the Mongoose Forms metadata repository/logical database role; it does not prove that Forms are deployed in a physically separate SQL database, because current deployments may use an all-in-one database. The experiments also did not directly prove the particular database row, write path or storage record responsible for recovery.

For factory terminology, **close-only** means:

```text
ordinary Web Designer Form-tab close/reopen
with NO explicit
Form → Definition → Unload All Global Form Objects
```

It does **not** mean that no IDO-metadata unloading or other internal cache processing occurred.

For factory terminology, **new Web Designer client instance** means only a **newly launched/rendered Web Designer browser tab/window after the old Designer tab/window was closed**. This is a harness UI-boundary term, not a Mongoose lifecycle/session claim. It does not by itself establish a new JavaScript runtime, authentication context, Mongoose application session, IDO Runtime session or server-side Designer session.

Current recovery results:

-   User-scope **Caption** recovery through the tested explicit-unload sequence is **replay-verified** by EXP-006 + EXP-006-R2.
    
-   User-scope **Description** recovery through the tested explicit-unload sequence is **replay-verified** by EXP-007 + EXP-007-R2.
    
-   User-scope **Description** recovery across ordinary Web Designer Form-tab close/reopen without explicit global-object unload is **replay-verified** by EXP-008 + EXP-008-R2.
    
-   User-scope **Description** recovery across closing the existing Designer tab/window and launching a newly rendered Designer tab/window from the still-usable authenticated Web Client is **replay-verified** by EXP-009 + EXP-009-R2.
    

EXP-009/R2 crossed a **different/broader browser-UI lifecycle boundary** than EXP-008/R2. It has not been shown to cross a stronger Mongoose persistence, cache or backend-session boundary.

During EXP-009/R2 there was **no user-visible logout, new login, or deliberate creation of a new authentication context**. The existing Web Client remained usable without a login challenge. Authentication/token/session continuity or recreation underneath that UI was not instrumented and remains **unverified**.

# 3\. Decisions and rules established so far

Permanent factory knowledge follows:

```text
candidate guidance
→ observed
→ replay-verified
```

Core rules:

-   Modify only factory-owned `FX_` artifacts; never alter unrelated/non-`FX_` artifacts.
    
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
    
-   Treat Form/global-object cache and IDO-metadata cache as separate acceptance dimensions.
    
-   Treat **Unload All Global Form Objects** as a documented Form/global-object memory operation, not arbitrary tenant-wide/server-wide invalidation.
    
-   Network signatures such as `/DesignerSession/ClearCache` are diagnostic only.
    
-   Whether an **explicit** unload command was invoked can be established by the controlled experiment action record; a network signature is not required.
    
-   **Absence of an explicit unload or metadata-clear command does not establish absence of IDO metadata unloading.** A Form close may itself trigger IDO metadata unloading when **Unload IDO Metadata With Forms** is effective.
    
-   If a future experiment intends to isolate the **Designer-close boundary itself from IDO-metadata behavior**, the preference state must be controlled or explicitly verified as part of that experiment.
    
-   Distinguish Web Client Form close, Web Designer Form-tab close, whole Designer tab/window lifecycle, and explicit global-object unload.
    
-   Prefer **“newly launched Web Designer tab/window”** as the product-neutral description. “Client instance” is only the harness-defined UI concept described above.
    
-   A newly launched Designer does not prove new JavaScript state, authentication state, Mongoose application session, IDO Runtime session or server-side Designer session unless those boundaries are independently instrumented.
    
-   After Site Developer editing-scope/impersonation changes, explicitly clear Forms/global objects before trusting displayed scoped versions.
    
-   Caption and Description are separate metadata fields; neither proves a general “all Form metadata recovers” rule.
    
-   Other Form attributes and subordinate objects—collections, variables, components, handlers, bindings, localized/translatable Strings, etc.—require their own evidence.
    
-   No reusable Description-recovery recipe has been created or promoted.
    
-   Ext IDs, store indexes, model IDs, internal request paths and component structures are diagnostic observations, not durable recipe dependencies.
    
-   Reuse existing evidence when it proves an acceptance check rather than performing redundant mutations.
    
-   If Web Client list data and Designer properties disagree, record the difference without inferring stale data, fallback behavior or failed recovery unless the projection contract is known.
    
-   Repository audits must distinguish experiment-attributable changes from harness/runtime/operator tooling changes.
    

Established experiment status:

-   **EXP-005-R2:** historically blocked.
    
-   **EXP-006 + R2:** Caption recovery across explicit unload — **replay-verified**.
    
-   **EXP-007 + R2:** Description recovery across explicit unload — **replay-verified**.
    
-   **EXP-008 + R2:** Description recovery across ordinary Designer Form-tab close/reopen without explicit global-object unload — **replay-verified**.
    
-   **EXP-009 + EXP-009-R2:** Description recovery across a newly launched Designer tab/window within the same continuously usable authenticated Web Client UI context — **replay-verified at the UI-recovery level only**.
    
-   EXP-009/R2 does **not** establish Forms-database persistence provenance, cache eviction, actual IDO-metadata unloading or non-unloading, authentication-session identity, or backend/server-session recreation.
    

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

Verified `recipes/forms/create-basic-form.md`:

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

-   `recipes/components/add-component-from-toolbox.md`
    
-   `recipes/components/configure-basic-component.md`
    

Verified component types: Static, Edit and Button.

Generated IDs, numeric component codes and internal traffic are not selector/schema contracts.

**EXP-004 — Form Variable Fundamentals**

Browser-tested path:

```text
Details
→ Variables
```

An explicitly defined temporary Form variable `FX_TestValueVar` with `Global=False`, `Persistent=False`, `Value=Seed-A` disappeared after ordinary Form Save **2/2** and Regenerate Form **1/1**, for **3/3 failures**.

`Persistent=False` governs variable-value lifetime/storage and does not by itself explain disappearance of the design-time variable definition. Cause remains **unverified**. No variable recipe is verified.

**EXP-005 / EXP-005-R2 — Caption close/reopen**

EXP-005 observed Caption recovery after ordinary Save + close/reopen.

EXP-005-R2 was **BLOCKED** because its criteria required **Unload IDO Metadata With Forms** disabled while the environment had it enabled and changing it was prohibited. This was an isolation blocker, not a Caption failure.

**EXP-006 / EXP-006-R2 — Caption across explicit unload**

`FX_FormPropertyLab03`, then replay `FX_FormPropertyLab04`, changed Caption only, saved clean, closed, confirmed the preference enabled, invoked **Unload All Global Form Objects** exactly once, and reopened the same User-scoped version.

Result: **replay-verified** for that exact workflow/environment lane.

**EXP-007 / EXP-007-R2 — Description across explicit unload**

`FX_FormPropertyLab05`, followed by replay `FX_FormPropertyLab06`, changed only Form-level Description, ordinary-saved to clean, closed, confirmed the preference enabled, invoked **Unload All Global Form Objects** exactly once, and reopened the same User-scoped version.

Result: **replay-verified** for that explicit-unload workflow.

A lingering menu once caused an accidental Delete prompt on Lab05; it was cancelled and subsequent checks proved no deletion.

**EXP-008 / EXP-008-R2 — Description across ordinary Web Designer close/reopen**

`FX_FormPropertyLab07` and replay `FX_FormPropertyLab08` established repeatable Description recovery after ordinary save-to-clean → Designer Form-tab close → **no explicit global-object unload** → supported reopen of the exact User-scoped version.

Result: **replay-verified** for that close-only workflow.

This does not establish cache eviction, absence/presence of IDO metadata unloading, or the database record supplying recovery.

**EXP-009 / EXP-009-R2 — Description across newly launched Web Designer tab/window**

EXP-009 observed the procedure on `FX_FormPropertyLab09`.

EXP-009-R2 independently replayed it on new User-scope classic BuildFromScratch Form `FX_FormPropertyLab10`. Only Form-level Description was changed, to:

```text
Form Property Description New Designer Client Replay
```

The Form was ordinary-saved exactly once to clean, normally closed, then the old Designer browser tab/window was closed. **No explicit** `**Unload All Global Form Objects**` **or other deliberate metadata-clear command was invoked.** User Preferences were not opened, changed or saved.

The Web Client remained continuously usable without a login challenge. No user-visible logout, new login or deliberate reauthentication was performed. Authentication/token/session identity beneath that UI was not instrumented.

A newly launched Designer tab/window was opened through the established Web Client UI path. Before deliberate reopen, the target was proven not already inherited/open there. The exact User-scoped Form was then reopened through the Designer Form menu. Description and the recorded comparison properties recovered unchanged, and the target remained clean.

All **AC-1…AC-10 passed**. Read-only T2 reconciliation found no discrepancies and confirmed exactly one `FX_FormPropertyLab10`. Experiment-attributable repository changes were confined to the EXP-009-R2 record and its 25 evidence files.

Result: the exact harness procedure for **Description recovery across a newly launched Web Designer tab/window** is now **replay-verified at the UI-recovery level**.

Claim limit: this proves reproducible recovery across that browser/UI sequence only. Forms-database storage provenance, Form/global-object cache eviction, actual IDO-metadata unloading or non-unloading, authentication-session continuity/recreation, and backend/server-session identity remain **unverified**.

No reusable Description-recovery recipe was promoted.

# 5\. Negative findings / blocked topics and why

-   **EXP-004 Form variables remain unresolved.** The variable definition disappeared across all three tested native persistence attempts. Root cause is **unverified**; do not create or promote a variable recipe from EXP-004.
    
-   **EXP-005-R2 remains historically blocked.** Its prerequisite conflicted with the observed enabled preference and the experiment prohibited changing it.
    
-   The exact storage row/write path responsible for Caption or Description recovery is **unverified**.
    
-   Whether ordinary Designer Form close caused IDO metadata unloading in EXP-008 or EXP-009/R2 is **unverified**.
    
-   Whether closing the entire Designer tab/window causes Form/global-object cache eviction, IDO-metadata unloading, or any stronger backend cleanup is **unverified**.
    
-   EXP-009/R2 do not prove a new Mongoose application session, IDO Runtime session, server-side Designer session or authentication session.
    
-   Whether a new Designer launch reused, refreshed, exchanged or created any underlying authentication/token artifact is **unverified**.
    
-   Durable recovery across user-visible logout/login, browser restart, OS restart or a deliberately new authentication context remains **unverified**.
    
-   Site-, Group- and Vendor-scope equivalents remain **unverified**.
    
-   Recovery behavior for properties/object classes other than the specifically tested Caption and Description cases remains **unverified**.
    
-   Web Client/Designer projection differences remain **unverified** where their mapping contract is unknown.
    
-   Exact 2026.09.08 IDO/cache trigger behavior beyond the deliberately tested UI procedures remains **unverified**.
    

# 6\. Open questions and sensible next directions

EXP-009-R2 is complete; no further replay is required to establish its current limited UI-recovery claim.

Useful independent learning directions remain:

-   Resolve **EXP-004 variable-definition persistence** before any variable recipe is promoted.
    
-   Isolate and test **IDO-metadata trigger semantics** only if a future capability requires that distinction. Any such experiment must explicitly verify or control **Unload IDO Metadata With Forms** if it intends to attribute behavior specifically to the Designer-close boundary.
    
-   Test a deliberately stronger lifecycle boundary—such as user-visible logout/new login, browser restart, or an intentionally new authentication context—only as a separately approved experiment. Such a test establishes a new boundary; it does not retroactively change the claim scope of EXP-009/R2.
    
-   Test additional Form metadata properties one at a time before generalizing Caption/Description results.
    
-   Test Site/Group or other scopes only as separate scoped experiments with explicit identity checks.
    
-   Investigate Web Client versus Designer projections only when a concrete factory capability depends on knowing their mapping.
    
-   Promote a reusable procedure to a recipe only when its intended automation value and semantic postconditions are clear; EXP-009/R2 established knowledge but did not authorize a Description-recovery recipe.
    

Current reusable verified recipes:

```text
recipes/forms/create-basic-form.md
recipes/components/add-component-from-toolbox.md
recipes/components/configure-basic-component.md
```

Current knowledge state:

```text
Basic BuildFromScratch Form creation                    replay-verified
Static/Edit/Button component fundamentals               replay-verified
Form Caption recovery across explicit unload            replay-verified
Form Description recovery across explicit unload        replay-verified
Form Description recovery across Form-tab close/reopen  replay-verified
Form Description recovery across new Designer tab/window replay-verified (UI recovery only)
Form-variable creation/persistence                      unresolved
Forms-database storage provenance                       unverified
Cache/IDO effects of Designer/Form close                unverified
Authentication-session identity across Designer launch  unverified
Backend/server-session boundary of new Designer         unverified
Logout/login/browser-restart recovery                   unverified
Other scopes / other metadata or object classes         unverified
```
