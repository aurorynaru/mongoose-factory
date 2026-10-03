<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-014 (R-20261003-215618-zZRS); specialist findings verdict: supports; 2026-10-03T14:46:53.433Z -->
<!-- finalized after specialist review of EXP-014 (R-20261003-215618-zZRS); specialist verdict: supports; 2026-10-03 --> <!-- EXP-014 establishes an observed negative UI-level result: a Global=False, Persistent=True Form-variable definition remained visible and unchanged in the current Designer immediately after a successful ordinary Save request, but the reopened User-scoped Form showed zero variables after one clean ordinary Designer Form-tab close/reopen in the same live session. This does NOT establish that the definition was serialized by Save. --> <!-- Documented Mongoose behavior supports Global=False, Persistent=True Form variables as a normal construct. Persistent governs runtime VALUE lifetime, not whether the design-time variable definition is saved as Form metadata. Therefore EXP-014 is an unresolved anomaly, not expected Persistent-variable behavior. --> <!-- EXP-014 is BLOCKED because AC-8 failed. The prescribed harness procedure executed end-to-end, but no variable recipe or product-level failure mechanism is proven. -->

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
→ observed procedure/result
→ fresh OpenCode session
→ EXP-N-R2 clean replay
→ replay-verified only if semantic postconditions reproduce
```

The **observed → replay-verified** distinction is a factory/harness quality rule, not an Infor-defined validation level.

A replay stopped because one of its own prerequisites or prohibitions cannot be satisfied is **blocked**, not evidence that the underlying product behavior failed.

A semantically successful execution that violates a global experiment prohibition is **non-accepted** and cannot promote knowledge to replay-verified.

A negative hypothesis result can also cause an experiment to be classified blocked when an acceptance criterion fails. EXP-014 is **BLOCKED because AC-8 failed**, even though the prescribed harness sequence itself executed end-to-end.

“Fresh worker context” / “independent execution” means independent at the harness/OpenCode-session level. It does not imply replication across another user, tenant, configuration, environment, product version, browser process, authentication state, Mongoose application session, IDO Runtime session or server-side Designer session unless explicitly tested.

# 2. Environment facts that matter

Current proven environment:

-   Mongoose Web Client / Web Designer / application DB / Form definitions DB: **2026.09.08**
-   Infor OS Portal: **2026.09.00**
-   Tenant observed: **G6R8LJ9Q4E8C2Z8Y\_DEM**
-   Demo configuration: **G6R8LJ9Q4E8C2Z8Y\_MONGOOSE\_DEM\_DEFAULT**
-   Editing permission: **Site Developer**
-   Factory experiments currently use explicitly confirmed **User-scope** versions.
-   For reopen verification, identify the intended customized Form using **Form name + ScopeType + ScopeName**. This is appropriate for the tested FormSync-style version identity check; it is not asserted as a universal primary key.
-   User, Group and Site are customized versions; Vendor Default is the base/vendor version. Documented precedence is **User → Group → Site → Vendor Default**.
-   Current learning lane is classic **BuildFromScratch** Forms.
-   Browser automation uses Playwright MCP through OpenCode.

Environment/browser observations:

-   Web Client normally runs inside the Portal iframe; Web Designer opens separately.
-   Numeric Ext JS IDs drift between sessions.
-   Synthetic DOM clicks can fail to trigger Ext handlers; native Playwright interactions have been more reliable.
-   Hidden Ext components can remain cached off-screen; DOM existence does not prove visible UI.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer **Form-menu recent-forms** and **Select Form** are tested reopen paths.
-   Closing a clean Designer Form tab can produce no prompt.
-   Frame-scoped locators/native element interaction are safer than raw-coordinate interaction inside the Portal iframe.
-   EXP-010-R2 showed that a post-start Sign In/OK action can restore access while still invalidating an experiment whose rules prohibit reauthentication.
-   EXP-014 established portal/Web Client/Designer sessions **before mutation**, then performed creation, Save, close and reopen without later login, Sign In/OK, deliberate reauthentication, browser restart or session replacement.

The explicit global-object unload command observed in 2026.09.08 is:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unload experiments were accompanied by /DesignerSession/ClearCache traffic. This is **diagnostic browser/network evidence only**, not a supported automation/API contract.

The **Unload IDO Metadata With Forms** preference was observed enabled in EXP-005-R2, EXP-006/R2, EXP-007/R2 and EXP-008/R2-related checks. Later close-only experiments did not independently establish its actual state.

Form/global-object cache and IDO-metadata cache are distinct concepts. For the EXP-014 missing-variable anomaly, **Form/global-object handling is the more directly relevant cache dimension** because the missing object is part of the Form definition. IDO-metadata unloading remains a separate diagnostic dimension and should not be assumed to explain the missing variable definition by itself.

For factory terminology:

-   **close-only** = ordinary Designer Form-tab close/reopen with no explicit Unload All Global Form Objects.
-   **weak persistence boundary** = ordinary close/reopen; this is harness terminology, not a storage/durability guarantee.
-   **new Web Designer client instance** = a newly launched/rendered Designer browser tab/window only; it does not prove a new authentication/application/IDO Runtime/backend session.

## Documented Form-variable baseline

Adjacent Infor 2026.08/2026.10 documentation is being used as the product-level baseline for the tested 2026.09.08 environment; exact implementation behavior in 2026.09.08 remains subject to browser evidence.

Documented behavior indicates:

-   Global=False, Persistent=True is a supported Form-variable configuration.
-   **Persistent** governs the lifetime of the variable's **runtime value**, including persistence across Form executions.
-   **Global** governs visibility/scope.
-   Persistent and temporary Form-variable **definitions are design-time Form metadata**; Persistent=True is not a switch that determines whether the definition itself belongs to the Form definition.
-   Persistent variable definitions appear in supported Form-definition representations such as PersistentVariables().

Therefore disappearance of an explicitly defined variable after Save or reopen is **anomalous relative to documented capability**. It must not be explained merely by Persistent=False, Persistent=True, or normal Form close semantics.

Current recovery/retention observations:

-   **Caption + explicit unload:** replay-verified, EXP-006 + R2.
-   **Description + explicit unload:** replay-verified, EXP-007 + R2.
-   **Description + ordinary close/reopen:** replay-verified, EXP-008 + R2.
-   **Description + newly launched Designer:** replay-verified at UI-recovery level only, EXP-009 + R2.
-   **Caption + ordinary close/reopen:** observed, EXP-010; EXP-010-R2 corroborated semantics but is non-accepted.
-   **Persistent=True variable immediately after ordinary Save:** EXP-013 and EXP-014 both observed the definition still visible and unchanged in the still-open Designer after a successful Save request. This **does not prove serialization/persistence into the saved Form definition**.
-   **Persistent=True variable after ordinary close/reopen:** EXP-014 observed **zero variables** after reopen.

# 3. Decisions and rules established so far

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
-   Read current state before retrying; never blindly repeat a mutation.
-   Record blockers, failures, negative findings and corrections.
-   Evidence should prove semantic state transitions, not every click.
-   A screenshot proves only rendered state at that moment.
-   Editing permission and editing scope are separate.
-   For scoped reopen checks, verify **Name + ScopeType + ScopeName**.
-   Version identity and storage provenance are different questions.
-   Do not generalize beyond the property/object class, scope and lifecycle boundary actually tested.
-   Treat internal request paths, Ext IDs, store indexes, model IDs and numeric codes as diagnostic observations only.
-   If an experiment defines a prerequisite or prohibition, obey it even if another route seems technically harmless.
-   A prohibited post-start login/Sign In/OK action invalidates that run even if semantic checks subsequently succeed.
-   Do not change preferences/cache settings merely to make an experiment pass unless separately approved.
-   Ordinary close/reopen does not prove database durability, cache eviction or storage provenance.
-   A newly launched Designer does not establish a new backend/session boundary without independent evidence.
-   Caption, Description and Form-variable definitions are separate metadata classes.
-   **Persistent is a runtime-value-lifetime property, not evidence of design-time definition persistence.**
-   Persistent=True versus Persistent=False observations must not be interpreted as proving causation by the Persistent setting without a controlled test.
-   Successful SaveChanges plus immediate client-side visibility is **not sufficient proof that a variable definition was serialized into the saved Form definition**.
-   Runtime variable-value semantics are distinct from design-time variable-definition retention.
-   No reusable Form-variable recipe has been promoted.
-   If cache behavior becomes the subject, prioritize Form/global-object cache instrumentation for variable-definition issues; instrument IDO metadata separately.
-   Repository audits must distinguish experiment-attributable changes from harness/runtime/operator tooling changes.

Established experiment status:

-   **EXP-005-R2:** blocked.
-   **EXP-006 + R2:** Caption + explicit unload — **replay-verified**.
-   **EXP-007 + R2:** Description + explicit unload — **replay-verified**.
-   **EXP-008 + R2:** Description + ordinary close/reopen — **replay-verified**.
-   **EXP-009 + R2:** Description + newly launched Designer — **replay-verified at UI-recovery level only**.
-   **EXP-010:** Caption + ordinary close/reopen — **observed only**.
-   **EXP-010-R2:** **BLOCKED/non-accepted** due prohibited post-start reauthentication.
-   **EXP-011:** **BLOCKED at preflight**; expired session, no mutation.
-   **EXP-012:** **BLOCKED after variable creation but before Save** due session expiry; retention unresolved.
-   **EXP-013:** **BLOCKED/non-accepted** because required post-creation live inventory proof became unavailable; immediate post-Save client-side visibility of the Persistent=True definition was nevertheless observed.
-   **EXP-014:** **BLOCKED because AC-8 failed**; the prescribed harness procedure executed end-to-end, but the variable definition was absent after close/reopen. Nothing from EXP-014 is replay-verified.

Naming conventions:

```text
Forms:       FX_<Purpose>
Components:  FX_<SemanticPurpose><MongooseType>
Variables:   FX_<Purpose>Var   (candidate convention; no verified variable recipe)
```

# 4. Lessons learned and pitfalls per experiment

**EXP-001 — Environment fingerprint**

Established architecture, versions, User-scope behavior and core navigation.

**EXP-002 / EXP-002-R2 — Basic Form creation**

Verified:

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

**EXP-003 / EXP-003-R2 — Component Fundamentals**

Static, Edit and Button add/configure procedures are replay-verified.

**EXP-004 — Form Variable Fundamentals**

Details → Variables is the tested design-time path. FX\_TestValueVar, Global=False, Persistent=False, Value=Seed-A, disappeared after ordinary Save **2/2** and Regenerate **1/1**: **3/3 observed negatives**.

This remains anomalous relative to documented Mongoose capability. Persistent=False means the runtime **value** is temporary; it does not explain why an explicitly defined design-time variable definition disappears after Save. No general variable-persistence conclusion is established.

**EXP-005 through EXP-010-R2 — Form metadata lifecycle**

Caption and Description recovery was progressively tested across ordinary close/reopen, explicit unload and newly launched Designer boundaries. These results must not be generalized to subordinate Form-variable definitions.

**EXP-011 — Persistent=True attempt 1**

Targeted FX\_FormVariableLab01 / FX\_PersistentTestVar. Blocked during preflight because the session expired. No Form or variable was created.

**EXP-012 — Persistent=True attempt 2**

FX\_FormVariableLab02 and exactly one FX\_PersistentRetentionVar (Global=False, Persistent=True, Value=Seed-Persist-B) were established, but session expiry occurred before the required ordinary Save. No retention conclusion.

**EXP-013 — Immediate Save isolation**

FX\_FormVariableLab03 / FX\_ImmediateSaveRetentionVar (Global=False, Persistent=True, Value=Seed-Save-C) remained visible and unchanged in the current Designer immediately after exactly one successful ordinary Save request. No close/reopen occurred. This **does not prove that Save serialized the definition**. The experiment remained blocked/non-accepted because required post-creation inventory proof became unavailable.

**EXP-014 — Persistent=True variable across ordinary close/reopen**

FX\_FormVariableLab04 was created exactly once at User scope. FX\_CloseReopenRetentionVar had baseline:

```text
Name:        FX_CloseReopenRetentionVar
Description: empty
Value:       Seed-Close-D
Persistent:  True
Global:      False
```

Exactly one ordinary Save request succeeded. The variable remained visible and unchanged in the still-open Designer immediately afterward.

The clean Form was then closed exactly once without a prompt and reopened exactly once through recent forms as the intended User-scoped Form.

After reopen:

-   Details → Variables contained **zero variable rows**.
-   Page-wide search found no FX\_CloseReopenRetentionVar.
-   Browser diagnostics for the reopened Form-definition load carried no variable payload.
-   The negative state persisted through the final read-only audit.
-   No repair, second Save, second reopen, reauthentication, preference action, global-object unload, cache-clear operation or runtime execution occurred.

This establishes only the following:

> In this execution, the variable definition was visible before Save and immediately after a successful Save request, but was not present in the reopened Designer UI after one ordinary close/reopen.

It does **not** establish whether the definition was ever serialized into the saved Form definition.

The behavior conflicts with documented Mongoose Form-variable capability and therefore remains an **unresolved anomaly**, with possible explanations including save/serialization behavior, Web Designer defect, release-specific behavior, Form/global-object caching, or an unobserved prerequisite. None of those explanations is yet proven.

# 5. Negative findings / blocked topics and why

-   EXP-004 observed explicitly defined Persistent=False variables disappearing after Save/Regenerate. This is anomalous, not expected temporary-runtime-value behavior.
-   EXP-013 and EXP-014 observed Persistent=True definitions remaining visible immediately after successful Save requests, but neither established serialization into saved Form metadata.
-   EXP-014 observed the Persistent=True definition absent after ordinary close/reopen.
-   The contrast between Persistent=False and Persistent=True observations does **not** establish causation by the Persistent flag.
-   EXP-011/012 were interrupted by session expiry and cannot support lifecycle conclusions.
-   EXP-013 did not meet all acceptance requirements.
-   EXP-014 is a single original negative close/reopen execution and is not replay-verified.
-   The fact that the reopen load diagnostics contained no variable payload is useful diagnostic evidence only; internal response shape/endpoints are not treated as supported Mongoose APIs.
-   No experiment establishes runtime persistent-variable value behavior.
-   No experiment yet establishes whether the EXP-014 ordinary Save actually serialized FX\_CloseReopenRetentionVar.
-   No experiment establishes physical Forms-store rows/write paths, database durability or cache eviction.
-   IDO-metadata unloading remains a separate dimension and is not currently the leading explanation for loss of a Form-variable definition.
-   No Form-variable lifecycle recipe is verified.

# 6. Open questions and sensible next directions

The central unresolved question is now:

**Did the ordinary Save actually serialize FX\_CloseReopenRetentionVar into the saved Form definition, or did the variable remain only in the current Designer state before disappearing at reload?**

Priority verification order:

1.  **Verify saved Form-definition serialization independently.** Use a supported independent representation of the Form definition—such as FormSync comparison/export/pseudo-code or another supported representation that exposes variable definitions—to determine whether FX\_CloseReopenRetentionVar exists after Save. A SaveChanges success response plus immediate Designer visibility is insufficient.
    
2.  **Run a read-only positive control in 2026.09.08.** Open a known existing Form that contains persistent Form variables and confirm that Details → Variables reloads them correctly. This can help distinguish a general Designer reload/display issue from a save-specific problem with factory-created variables.
    
3.  **Cleanly replay EXP-014 in a fresh worker context.** Reproduction would establish reproducibility of the anomaly. It would still not explain its cause or make the result consistent with documented expected behavior.
    
4.  **If cache investigation is needed, investigate Form/global-object cache first.** Establish and instrument that lifecycle directly. Keep IDO-metadata unloading separately instrumented rather than treating it as the primary metadata class for this failure.
    
5.  Keep **runtime value persistence** separate from **design-time definition serialization/recovery**. Runtime Persistent semantics should receive their own experiment only after design-time definition behavior is understood.
    

Current knowledge state:

| Capability / claim | State |
| --- | --- |
| Basic BuildFromScratch Form creation | replay-verified |
| Static/Edit/Button component fundamentals | replay-verified |
| Caption recovery across explicit unload | replay-verified |
| Description recovery across explicit unload | replay-verified |
| Description recovery across ordinary close/reopen | replay-verified |
| Description recovery across newly launched Designer | replay-verified at UI-recovery level |
| Caption recovery across ordinary close/reopen | observed only |
| Global=False, Persistent=True supported as Form-variable configuration | documented product baseline; exact 2026.09.08 implementation details remain subject to evidence |
| Persistent governs runtime value lifetime, not definition persistence | documented product baseline |
| Persistent=True variable visible unchanged immediately after successful ordinary Save | observed in EXP-013 and EXP-014 |
| Persistent=True variable actually serialized by those Saves | **unverified** |
| Persistent=True variable present after ordinary close/reopen | observed negative in EXP-014 only |
| Persistent=False explicit variable definition after Save | observed anomalous negative in EXP-004 |
| Known existing persistent-variable Form reload positive control | unverified |
| Runtime persistent-variable value behavior | unverified |
| Variable lifecycle recipe | unverified |
| Form/global-object cache role in variable anomaly | unverified |
| IDO-metadata role in variable anomaly | unverified; separate and lower-priority diagnostic dimension |
| Storage provenance / physical persistence path | unverified |
| Strong authentication/backend-session persistence | unverified |
