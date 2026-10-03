<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-010-R2 (R-20261003-003850-ldL7); specialist findings verdict: supports; 2026-10-02T18:28:04.187Z -->
<!-- finalized after specialist review of EXP-010-R2 (R-20261003-003850-ldL7); specialist verdict: supports; 2026-10-03 --> <!-- EXP-009 + EXP-009-R2 establish replay-verified UI-level Description recovery across a newly launched Web Designer tab/window within the same continuously usable authenticated Web Client UI context. Storage provenance, cache eviction, IDO-metadata unloading, authentication-session identity, and backend/server-session identity remain unverified. --> <!-- EXP-010 establishes observed UI-level Caption recovery across ordinary Web Designer Form-tab close/reopen. EXP-010-R2 reproduced the semantic Caption behavior but is BLOCKED/non-accepted and cannot supply replay verification because an after-run-start Mongoose Sign In/OK session-establishment action violated the experiment's no-login/no-deliberate-reauthentication prohibition. -->

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

A replay stopped because one of its own prerequisites or prohibitions cannot be satisfied is **blocked**, not evidence that the underlying procedure failed.

A semantically successful execution that violates a global experiment prohibition is **non-accepted** and cannot promote knowledge to replay-verified.

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
-   For factory reopen verification, the intended customized Form version is distinguished by **Form name + ScopeType + ScopeName**. This is appropriate for the tested factory/FormSync-style identity check; do not treat the tuple as a universal primary key for every Mongoose subsystem.
-   User, Group and Site are customized versions; Vendor Default is the base/vendor version. Documented precedence is User → Group → Site → Vendor.
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
-   EXP-010 and blocked EXP-010-R2 both observed recent-forms reopening the intended target without direct cold URL navigation.
-   Closing a clean Designer Form tab can produce no prompt.
-   Designer View preferences and Web Client User Preferences are different surfaces.
-   Frame-scoped locators/native element interaction are safer than raw-coordinate interaction inside the Portal iframe.
-   EXP-010-R2 encountered a Designer-session-expiry condition after run start. A no-credential Mongoose Sign In/OK action restored access, but that action counted as deliberate session establishment/reauthentication under the harness acceptance rule and invalidated the replay.

The exact explicit-unload command observed in 2026.09.08 is:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unload experiments were accompanied by successful /DesignerSession/ClearCache traffic. This is **diagnostic browser/network evidence only**, not a supported automation/API contract.

The user's **Unload IDO Metadata With Forms** preference was observed enabled in EXP-005-R2, EXP-006/R2, EXP-007/R2 and EXP-008/R2-related checks. EXP-009-R2, EXP-010 and EXP-010-R2 did not independently establish its actual state.

Current adjacent Infor documentation gives two relevant formulations for that preference:

-   Web Client preference documentation says IDO metadata unloads **when Forms are closed**.
-   Development/cache documentation associates the option with discarding IDO metadata when **Unload All Global Form Objects** is performed.

These formulations do not establish the exact behavior of a **2026.09.08 Web Designer Form-tab ×** action. Therefore EXP-008/010 close-only experiments must not be treated as isolated from IDO-metadata unloading when preference state is enabled or unknown.

Other relevant documented facts:

-   Closed Forms/global objects can remain in memory and later be reopened from cache.
-   **Unload All Global Form Objects** removes cached Form/global-object information and can also clear IDO metadata when the relevant preference is enabled.
-   Form/global-object cache and IDO-metadata cache are distinct concepts.
-   After changing Site Developer editing scope/impersonation, previously loaded Forms can represent the prior scope; clear Forms/global objects before trusting the newly displayed scoped version.

Documentation is principally adjacent **2026.x/2026.10** material, not identical to tested **2026.09.08**. Exact target-version behavior requires target-environment evidence.

Product architecture describes Forms/global objects and customized versions as residing in the **Forms Database**. For factory purposes this means the logical Forms metadata repository; it does not imply a physically separate SQL database. Experiments have not established a particular physical database, row or write path responsible for recovery.

For factory terminology, **close-only** means:

```text
ordinary Web Designer Form-tab close/reopen
with NO explicit
Form → Definition → Unload All Global Form Objects
```

It does **not** mean no automatic IDO-metadata unloading or other internal cache processing occurred.

For factory terminology, ordinary close/reopen is called a **weak persistence boundary**. This is harness terminology, not a Mongoose storage/durability guarantee.

For factory terminology, **new Web Designer client instance** means only a newly launched/rendered Designer browser tab/window after the old Designer tab/window was closed. It does not prove a new JavaScript runtime, authentication context, Mongoose application session, IDO Runtime session or server-side Designer session.

Current recovery results:

-   **Caption + explicit unload:** replay-verified, EXP-006 + EXP-006-R2.
-   **Description + explicit unload:** replay-verified, EXP-007 + EXP-007-R2.
-   **Description + ordinary Designer Form-tab close/reopen:** replay-verified, EXP-008 + EXP-008-R2.
-   **Description + newly launched Designer from still-usable authenticated Web Client:** replay-verified at UI-recovery level, EXP-009 + EXP-009-R2.
-   **Caption + ordinary Designer Form-tab close/reopen:** observed only, EXP-010. EXP-010-R2 supplies corroborating observation but **not replay verification**.

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
-   A screenshot proves only the rendered state at that moment.
-   Editing permission and editing scope are separate concepts.
-   For scoped reopen checks, verify **Name + ScopeType + ScopeName**.
-   Version identity and storage provenance are different questions.
-   Treat specialist/documentation guidance as candidate knowledge for exact target behavior until target-environment evidence establishes it.
-   Do not generalize beyond the environment, property/object class, scope and lifecycle boundary actually replayed.
-   After editing Form metadata, ordinary-save to clean before applying the experiment's close/unload/reopen boundary.
-   Do not invent undocumented APIs, direct DB edits or metadata hacks.
-   If an experiment defines a prerequisite or prohibition, obey it even if another route appears technically harmless.
-   A post-start login, Sign In/OK session establishment or equivalent deliberate reauthentication invalidates a run whose scope prohibits it, even if no credentials are entered and later semantic checks succeed.
-   Re-verifying guards after an environmental interruption does not retroactively restore run compliance.
-   Do not change **Unload IDO Metadata With Forms** merely to satisfy an experiment unless separately approved.
-   Form/global-object cache and IDO-metadata cache are separate acceptance dimensions.
-   Ordinary Form-tab close/reopen is a weak harness UI/recovery boundary; even replay verification across it does not establish durable-storage provenance or cache eviction.
-   Absence of an explicit unload command does not prove absence of automatic/internal IDO-metadata unloading.
-   If an experiment intends to prove anything about IDO-cache behavior, preference state must be an explicit precondition and instrumentation must distinguish Form/global-object unloading from IDO-metadata unloading.
-   Distinguish Web Client Form close, Designer Form-tab close, whole Designer tab/window lifecycle, explicit global-object unload, and authentication/session-establishment events.
-   A newly opened Designer does not establish a new authentication, application, IDO Runtime or backend/server session without independent evidence.
-   Stronger session-boundary experiments require an observable session identifier, explicit logout/login or session replacement, or equivalent server-side evidence; UI continuity alone is insufficient.
-   Caption and Description are separate metadata fields; neither proves that all Form metadata recovers.
-   Other Form attributes and subordinate objects require separate evidence.
-   No reusable Description-recovery or Caption-recovery lifecycle recipe has been promoted.
-   Ext IDs, store indexes, model IDs, internal request paths and component structures are diagnostic observations, not durable recipe dependencies.
-   Do not assume visible MRU/recent-forms text is always the internal Form name; verify scoped identity after opening.
-   Repository audits must distinguish experiment-attributable changes from harness/runtime/operator tooling changes.

Established experiment status:

-   **EXP-005-R2:** blocked.
-   **EXP-006 + R2:** Caption + explicit unload — **replay-verified**.
-   **EXP-007 + R2:** Description + explicit unload — **replay-verified**.
-   **EXP-008 + R2:** Description + ordinary Designer Form-tab close/reopen — **replay-verified**.
-   **EXP-009 + R2:** Description + newly launched Designer — **replay-verified at UI-recovery level only**.
-   **EXP-010:** Caption + ordinary Designer Form-tab close/reopen — **observed only**.
-   **EXP-010-R2:** **BLOCKED/non-accepted**; semantic Caption recovery reproduced, but the Sign In/OK session-establishment action violated the no-login/no-deliberate-reauthentication prohibition.

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

Finish persisted the blank Form immediately; R2 reproduced creation independently.

**EXP-003 / EXP-003-R2 — Component Fundamentals**

Verified component add/configure procedures for Static, Edit and Button. Generated IDs/codes/internal traffic are not contracts.

**EXP-004 — Form Variable Fundamentals**

Details → Variables is the tested design-time path. The tested definition FX\_TestValueVar used **Global=False, Persistent=False, Value=Seed-A**. Its **design-time definition disappeared** after ordinary Save **2/2** and Regenerate Form **1/1**: **3/3 observations**.

This does **not** establish generic “Form-variable persistence failure.” Mongoose distinguishes the existence/definition of a variable from the lifetime of its runtime value, and supports both temporary/nonpersistent and persistent variables. The precise unresolved issue is:

**design-time Form-variable definition retention/save behavior for the tested Global=False, Persistent=False variable.**

No conclusion has been established about:

-   Persistent=True, Global=False definition retention,
-   persistent variable runtime-value retention across executions,
-   documented temporary-variable runtime-value loss on Form close.

No variable recipe is verified.

**EXP-005 / EXP-005-R2 — Caption close/reopen**

EXP-005 observed Caption recovery. R2 was blocked because its isolation criteria required the IDO-metadata preference disabled while it was enabled and changing it was prohibited. This was not a Caption failure.

**EXP-006 / EXP-006-R2 — Caption across explicit unload**

Caption-only edit → Save-to-clean → explicit unload → exact User-scoped reopen recovered Caption and comparison properties. **Replay-verified**.

**EXP-007 / EXP-007-R2 — Description across explicit unload**

Description-only equivalent reproduced. **Replay-verified**. One accidental Delete prompt from lingering menu state was cancelled; no deletion occurred.

**EXP-008 / EXP-008-R2 — Description across ordinary close/reopen**

Description recovery after Save-to-clean → ordinary Form-tab close → supported reopen reproduced independently. **Replay-verified** for this weak UI boundary only. IDO-cache behavior was not isolated.

**EXP-009 / EXP-009-R2 — Description across newly launched Designer**

Description recovered after closing the Designer tab/window and launching a new Designer from the still-usable authenticated Web Client. **Replay-verified at UI-recovery level only**. Authentication/backend/cache/session boundaries remain unproven.

**EXP-010 — Caption across ordinary close/reopen**

FX\_FormPropertyLab11; Caption-only edit; one Save-to-clean; ordinary Form-tab close; recent-forms reopen; exact User-scoped identity and comparison properties recovered. All AC-1…AC-10 passed. **Observed only**, pending a valid clean replay.

**EXP-010-R2 — attempted clean Caption replay**

FX\_FormPropertyLab12 was proven absent, created exactly once, given an untouched baseline, changed only in Caption, saved once to clean, closed normally without an unsaved-change prompt, reopened through recent forms, and recovered the Caption unchanged with comparison properties equal to baseline.

However, an expired Designer session was re-established after run start using Mongoose Sign In/OK. The operator ruled this a violation of the global no-login/no-deliberate-reauthentication prohibition. AC-5 and AC-9 therefore fail on run-compliance grounds. The run is **BLOCKED/non-accepted**.

Its successful mutation/save/close/reopen result is retained only as **corroborating observed evidence**, not replay verification. This blocked classification is a **harness acceptance decision**, not a claim that Mongoose Caption recovery failed.

# 5\. Negative findings / blocked topics and why

-   **Form-variable design-time definition retention remains unresolved** for the tested Global=False, Persistent=False variable.
-   EXP-004 does **not** establish behavior for Persistent=True definitions or persistent runtime values.
-   **EXP-005-R2 remains blocked**, not failed.
-   **EXP-010-R2 remains blocked because of experiment compliance**, not because Caption recovery failed.
-   Credential-free/SSO-backed Sign In/OK can still count as deliberate session establishment for a run that prohibits reauthentication.
-   No experiment proves the physical storage row/write path responsible for recovered Form metadata.
-   Ordinary Form close/reopen does not prove Form/global-object cache eviction.
-   No close-only experiment proves IDO metadata did or did not unload.
-   EXP-009/R2 does not prove a new auth session, Mongoose application session, IDO Runtime session, backend Designer session or JavaScript runtime.
-   Logout/login, browser restart, OS restart and stronger server/session boundaries remain untested.
-   Site, Group and Vendor-scope equivalents remain unverified.
-   Caption/Description results do not generalize to other Form properties, components, variables, bindings, handlers, validators, scripts, collections or object classes.
-   No reusable lifecycle recovery recipe has been promoted from EXP-006–EXP-010.

# 6\. Open questions and sensible next directions

Highest-priority unresolved items:

1.  **Caption close-only replay:** run a compliant independent replay of EXP-010 with the required authenticated/session state already valid before run start and no post-start login, Sign In/OK session establishment or deliberate reauthentication.
    
2.  **Form-variable definition behavior:** separately test whether a Global=False, Persistent=True variable **definition** survives Designer Save/Regenerate. Do not mix this with runtime-value lifetime testing.
    
3.  **Form-variable runtime semantics:** after definition retention is understood, separately test:
    
    -   whether a persistent Form variable's **value** survives close/reopen/execution boundaries as documented;
    -   whether a temporary/nonpersistent Form variable's **runtime value** disappears on the documented lifecycle boundary.
    
    Keep definition existence and runtime-value lifetime as separate acceptance questions.
    
4.  **IDO-metadata semantics:** if IDO-cache behavior matters, explicitly establish **Unload IDO Metadata With Forms** preference state as a precondition and instrument IDO-metadata unloading separately from Form/global-object unloading. Current EXP-008/010 recovery experiments do not answer this.
    
5.  **Storage/cache provenance:** determine separately if stronger proof is actually required. Current UI-recovery results do not establish physical storage provenance or cache eviction.
    
6.  **Stronger lifecycle boundaries:** any future claim about a fresh authentication, Mongoose application, IDO Runtime or server-side Designer session needs an observable session identifier, explicit session replacement/logout-login, or equivalent server-side evidence.
    
7.  **Additional metadata/scopes/object classes:** test one property, scope or object type at a time; do not generalize Caption/Description findings.
    

Current knowledge state:

| Capability / question | Status |
| --- | --- |
| Basic User-scope BuildFromScratch Form creation | **replay-verified** |
| Static/Edit/Button component fundamentals | **replay-verified** |
| Design-time Form-variable definition retention for tested Global=False/Persistent=False variable | **unresolved** |
| Persistent=True Form-variable definition retention | **unverified** |
| Persistent Form-variable runtime-value lifetime | **unverified** |
| Temporary Form-variable runtime-value lifecycle | **unverified in target environment** |
| Caption recovery after explicit unload | **replay-verified** |
| Description recovery after explicit unload | **replay-verified** |
| Description recovery after ordinary Form-tab close/reopen | **replay-verified** |
| Description recovery after newly launched Designer UI | **replay-verified at UI-recovery level** |
| Caption recovery after ordinary Form-tab close/reopen | **observed only — EXP-010; EXP-010-R2 corroborates but is blocked** |
| Physical Forms-database/write provenance | **unverified** |
| Form/global-object cache eviction on ordinary close | **unverified** |
| IDO-metadata unload/non-unload on ordinary Designer close | **unverified** |
| Authentication/application/IDO Runtime/backend session boundaries | **unverified** |
| Other scopes, Form properties and subordinate object classes | **unverified** |
