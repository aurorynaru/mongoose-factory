<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-008 (R-20261002-165426-GuWm); specialist findings verdict: supports; 2026-10-02T10:36:47.369Z -->
<!-- finalized after specialist review of EXP-008 (R-20261002-165426-GuWm); all AC-1…AC-10 passed; literal User-scope Form Description recovery across the tested ordinary Web Designer close/reopen path is observed, not replay\_verified; no reusable recipe promoted; specialist verdict: supports; 2026-10-02 -->

# 1\. Project and workflow

The project is an autonomous **Infor Mongoose factory** being built in C:\\AI\\mongoose-factory. Its long-term goal is to take a natural-language request, optionally with reference images, and reliably build Mongoose Forms/portal-related artifacts using browser automation and a growing body of verified procedures and recipes.

There are three roles:

-   **Coordinator (ChatGPT):** selects the next bounded experiment, reviews worker evidence, decides when specialist consultation is needed, and controls knowledge promotion from candidate → observed → replay-verified.
-   **OpenCode worker:** operates Mongoose through Playwright MCP, records experiment/evidence artifacts, and must remain within approved experiment scope.
-   **Infor Mongoose specialist GPT:** supplies Mongoose-domain guidance for new concepts or unexplained behavior. Its advice is candidate guidance until browser evidence establishes the behavior in the target environment.

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

“Fresh worker context” / “independent execution” means independent at the harness/OpenCode-session level. It does not imply replication across another user, tenant, configuration, environment or product version.

The harness/controller automates this coordination. Future coordinator replies must follow its protocol and experiment boundaries.

# 2\. Environment facts that matter

Current proven environment:

-   Mongoose Web Client / Web Designer / application DB / Form definitions DB: **2026.09.08**
-   Infor OS Portal: **2026.09.00**
-   Tenant observed: **G6R8LJ9Q4E8C2Z8Y\_DEM**
-   Demo configuration: **G6R8LJ9Q4E8C2Z8Y\_MONGOOSE\_DEM\_DEFAULT**
-   Editing permission: **Site Developer**
-   Factory experiments currently use explicitly confirmed **User-scope** versions.
-   FormSync product knowledge supports identifying a customized Form version by **Form name + ScopeType + ScopeName**. For User scope, ScopeName is the user name/user ID.
-   Vendor Default plus Site, Group and User customized versions can coexist; matching Form Name alone is insufficient proof that the intended customized version reopened.
-   Current learning lane is classic **BuildFromScratch** Forms.
-   Browser automation uses Playwright MCP through OpenCode.

Environment/browser observations, not generic Mongoose contracts:

-   Web Client normally runs inside the Portal iframe; Web Designer opens separately.
-   Numeric Ext JS IDs drift between sessions.
-   Synthetic DOM clicks can fail to trigger Ext handlers; native Playwright interactions have been more reliable.
-   Hidden Ext windows/components can exist, so DOM existence does not prove visible UI.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer **Form** menu has been a reliable reopen path, including the recent-forms path exercised in EXP-008.
-   Closing a clean Designer Form tab may produce no prompt and may fall back to another loaded Form.
-   User Preferences checkboxes are Ext controls using div\[role=checkbox\].
-   Designer View preferences and Web Client User Preferences expose different UI/pages.
-   Raw-coordinate interaction inside the Portal iframe can miss the intended control; frame-scoped Playwright locators/native element interaction are safer.
-   The exact 2026.09.08 command observed is:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unloads have been accompanied by successful /DesignerSession/ClearCache traffic. This is diagnostic browser evidence only; the endpoint is not a supported automation contract and does not define the command’s complete semantics or system-wide scope.

The current user has **Unload IDO Metadata With Forms** enabled. EXP-005-R2, EXP-006/R2, EXP-007/R2 and EXP-008 observed it enabled. Successful experiments left it unchanged.

Product documentation supports that closing a Form can leave the Form and associated global Form objects in memory. Therefore an ordinary close/reopen is **not** by itself a proven durable-storage or complete Form/global-object memory boundary.

Documentation describes client/context-specific IDO-metadata behaviors:

-   **Web Client User Preferences** documentation describes **Unload IDO Metadata With Forms** as unloading IDO metadata when Forms are closed.
-   Development/cache-oriented documentation also describes the preference in connection with explicit **Unload All Global Form Objects**, which can clear IDO metadata along with Form/global-object state.

These descriptions need not conflict because they describe different client/context paths. Exact **Web Designer 2026.09.08** behavior remains **unverified**.

In particular, do **not** assume that closing a Web Designer Form tab is semantically identical to the “Form close” event described in Web Client User Preferences documentation.

For factory terminology, **close-only** means:

```text
ordinary Form close/reopen
with NO explicit
Form → Definition → Unload All Global Form Objects
```

It does **not** mean that no IDO metadata or cache-related unloading occurred internally.

“Global Form Objects” does not imply tenant-wide, server-wide or all-user invalidation. Product documentation describes Form/global-object memory clearing and optional IDO-metadata-cache clearing, not arbitrary application/server cache invalidation.

Literal User-scope **Caption** recovery through the tested explicit-unload sequence is replay-verified by EXP-006 + EXP-006-R2.

Literal User-scope **Description** recovery through the tested explicit-unload sequence is replay-verified by EXP-007 + EXP-007-R2.

Literal User-scope **Description recovery across an ordinary Web Designer close/reopen without explicit global-object unload** is currently **observed once** by EXP-008.

These results prove recoverability after the exact workflows exercised. They do **not** prove which durable storage or memory layer supplied the recovered value, and they do not directly prove a Forms-database row.

# 3\. Decisions and rules established so far

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
-   A screenshot proves only that a visual state rendered at that moment.
-   Independent Designer reopen is a practical UI recovery/persistence check, not direct database-row proof.
-   Editing permission and editing scope are separate concepts.
-   Identify customized Form versions by **Form name + ScopeType + ScopeName**.
-   Treat specialist/documentation guidance as candidate knowledge for exact environment behavior until browser evidence establishes it.
-   Do not generalize beyond the environment, property/component type, scope and workflow actually replayed.
-   Save semantics must be learned experimentally.
-   After editing Form metadata, ordinary-save to clean before applying the experiment’s required close/unload/reopen boundary.
-   Do not invent undocumented APIs, direct DB edits or metadata hacks.
-   In Select Form, explicitly select the intended row.
-   If an experiment defines a prerequisite, obey it even if another path might work.
-   Do not change **Unload IDO Metadata With Forms** merely to satisfy an experiment unless separately approved.
-   Treat **Unload All Global Form Objects** as unloading Form/global-object information from the documented/exercised memory context, not as system-wide cache invalidation.
-   Presence or absence of /DesignerSession/ClearCache\-style traffic is diagnostic only.
-   Distinguish **Web Client Form close**, **Web Designer Form-tab close**, and **explicit Unload All Global Form Objects**. Do not assume identical IDO/cache effects.
-   After Site Developer editing-scope/impersonation changes, Forms/global objects must be cleared from memory before trusting that versions corresponding to the new editing scope are being displayed.
-   EXP-005-R2 remains historically blocked; later successful experiments do not retroactively change its result.
-   **EXP-006 + EXP-006-R2 replay-verify literal User-scope Caption recovery across the tested explicit-unload workflow.**
-   **EXP-007 + EXP-007-R2 replay-verify literal User-scope Description recovery across the tested explicit-unload workflow.**
-   **EXP-008 establishes only observed Description recovery across its tested ordinary Web Designer close/reopen path.**
-   An eventual EXP-008-R2 success could replay-verify **repeatable recovery only**. It would not establish durable Forms-database persistence or a stronger memory/storage boundary.
-   Caption and Description are separate metadata fields. Evidence for either does not establish a general “Form metadata persists” rule.
-   Other Form attributes and subordinate objects—collections, variables, components, handlers, bindings, localized/translatable Strings, etc.—require their own evidence.
-   No reusable Description-specific recovery/persistence recipe has been created.
-   Repeated Ext IDs, store indexes, model IDs, internal request paths and component structures are diagnostic observations, not durable recipe dependencies.
-   If existing evidence proves an acceptance check, reuse it rather than performing redundant mutations.
-   If Web Client list data and Designer properties disagree, record the observed difference without inferring stale data, fallback behavior or persistence failure unless the projection contract is known.
-   Repository audits must distinguish **experiment-attributable changes** from harness/runtime/operator tooling changes.

Current naming conventions:

```text
Forms:       FX_<Purpose>
Components:  FX_<SemanticPurpose><MongooseType>
Variables:   FX_<Purpose>Var   (candidate from EXP-004; no verified variable recipe)
```

# 4\. Lessons learned and pitfalls per experiment

**EXP-001 — Environment fingerprint**

Established browser architecture, version information, User-scope behavior and core Web Client/Web Designer navigation. Editing permission and scope are distinct.

**EXP-002 / EXP-002-R2 — Basic Form creation**

Verified recipes/forms/create-basic-form.md.

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

Pitfalls included wrong-row activation, portal notifications, drifting Ext IDs and synthetic click failures.

**EXP-003 / EXP-003-R2 — Component Fundamentals**

Verified:

-   recipes/components/add-component-from-toolbox.md
-   recipes/components/configure-basic-component.md

Verified component types: Static, Edit and Button.

Generated IDs, numeric component codes and internal traffic are not selector/schema contracts.

**EXP-004 — Form Variable Fundamentals**

The relevant Web Designer UI is:

```text
Details
→ Variables
```

Current product documentation supports the Details Variables tab as a place to view/create/edit Form and global variables.

Edit → Variable instead opens Global Objects and is not the tested Form-variable creation path.

An explicitly defined temporary Form variable FX\_TestValueVar with Global=False, Persistent=False, Value=Seed-A disappeared after all tested save/reopen approaches: ordinary Form Save **2/2** and Regenerate Form **1/1**, for **3/3 failures**.

Persistent=False concerns lifetime/persistence of the **variable value**, not whether an explicitly created Designer variable definition is permitted to exist. Runtime auto-created nonpersistent variables are a different case.

The behavior may indicate a Web Designer/version-specific defect or limitation, but that classification is **unverified**.

No variable recipe is verified.

**EXP-005 — Form Caption Recovery**

FX\_FormPropertyLab01 showed Caption recovery after ordinary Save + close/reopen. No deliberate Form/global-object unload boundary was applied, so the result remained observed only.

**EXP-005-R2 — Caption replay**

Historically **BLOCKED** because its criteria required **Unload IDO Metadata With Forms** disabled while the environment had it enabled and changing it was prohibited.

This was an experiment-isolation blocker, not a Caption failure.

**EXP-006 / EXP-006-R2 — Caption recovery across documented unload**

FX\_FormPropertyLab03, then clean replay FX\_FormPropertyLab04, changed Caption only, saved to clean, closed, confirmed the unload preference enabled without changing it, invoked **Unload All Global Form Objects** exactly once, then reopened the same User-scoped version.

Caption and comparison properties recovered unchanged.

Result: **replay\_verified** for that exact workflow/environment lane.

**EXP-007 / EXP-007-R2 — Description recovery across documented unload**

FX\_FormPropertyLab05, followed by clean replay FX\_FormPropertyLab06, changed only Form-level Description, ordinary-saved to clean, closed, confirmed the preference enabled, invoked **Unload All Global Form Objects** exactly once, then reopened the exact same User-scoped version.

Description and comparison properties recovered unchanged.

Result: **replay\_verified** for that exact explicit-unload workflow.

R2 pitfalls/findings:

-   Designer View preferences and Web Client User Preferences are different surfaces.
-   A lingering menu caused an accidental Delete prompt on FX\_FormPropertyLab05; it was cancelled and subsequent checks proved no deletion.
-   Operator-driven harness-tooling edits were not experiment-worker mutations.
-   No Description recipe, environment file, AGENTS.md or unrelated experiment record was modified.

**EXP-008 — Description recovery across ordinary Web Designer close/reopen**

The experiment title used “persistence across close-only reopen” as shorthand. The proven capability is more precisely **Description recovery across the tested ordinary Web Designer close/reopen path**; the experiment did not establish a durable-storage boundary.

Status: **COMPLETE — observed; AC-1…AC-10 PASS.**

A new User-scope classic BuildFromScratch Form FX\_FormPropertyLab07 was created using the verified creation recipe. Its untouched Description was empty and baseline comparison properties were recorded.

Only Form-level Description was changed to:

```text
Form Property Description Close Only
```

Exactly one ordinary Designer Save returned the Form to a clean state.

The target was then closed normally through its **Web Designer Form-tab close button**. No unsaved-change prompt occurred. **Unload All Global Form Objects was never explicitly invoked.**

The exact same customized version was reopened through:

```text
Designer
→ Form
→ recent-forms entry
```

Identity was verified by Form name + ScopeType=User + ScopeName.

Description recovered exactly, all recorded comparison properties remained unchanged, and Designer was clean.

No /DesignerSession/ClearCache\-style request was observed around the close or reopen; only ordinary Designer/event traffic was observed. This remains environment/browser evidence only and proves no internal cache or IDO semantics.

The enabled **Unload IDO Metadata With Forms** preference was verified before and after without modification.

Because Web Client documentation describes IDO metadata unloading when Forms are closed, but does not establish that a **Web Designer Form-tab close** follows the same exact implementation path, EXP-008 does not establish whether its Designer close caused IDO-metadata unloading.

Repository changes were confined to the EXP-008 record and evidence/EXP-008/; no recipe was promoted.

Result: **observed only**. A fresh replay could establish repeatability of this recovery procedure, but not durable-storage persistence.

# 5\. Negative findings / blocked topics and why

**EXP-004 — Form Variable Fundamentals remains blocked/unresolved.**

The explicitly created temporary Form-variable definition repeatedly disappeared across every tested native save/reopen approach.

Do not explain this using runtime auto-creation semantics for nonpersistent variables; that is a different case.

Do not work around EXP-004 using bindings, scripts, undocumented APIs, DB edits, Global=True, Persistent=True or manual metadata manipulation unless a new controlled experiment explicitly approves such a path.

Do not classify the behavior as a confirmed Mongoose defect until Infor support/documentation or a documented current-Web-Designer persistence mechanism establishes that conclusion.

**EXP-005-R2 remains historically blocked** because its own prerequisite could not be satisfied.

Other unresolved observations:

-   Web Client/GetAllForms-style data has differed from Caption later visible in Designer; projection/cache/display semantics remain **unverified**.
-   Exact **Web Designer 2026.09.08** IDO-metadata trigger behavior remains **unverified**.
-   Web Client Form close, Web Designer Form-tab close, and explicit **Unload All Global Form Objects** have not yet been isolated against one another.
-   EXP-008 proves Description recovery after the tested Designer close/reopen path with the preference enabled, but does **not** prove whether that Designer close triggered IDO-metadata unloading.
-   No /DesignerSession/ClearCache\-style request was observed during EXP-008 close/reopen; this does not prove that no relevant internal state changed.
-   The source of recovered Caption/Description values—memory, cache, Forms database or another supported layer—remains **unverified** unless the experiment crosses an appropriate stronger boundary.
-   Site, Group and Vendor Default behavior is untested.
-   Results do not generalize to other users, tenants, releases, Form properties or subordinate-object classes.
-   EXP-008 recovery is currently single-execution **observed**, not replay-verified.

# 6\. Open questions and sensible next directions

The strongest next controlled step is an **EXP-008-R2 clean replay** in a fresh worker context using one new FX\_ User-scope Form.

It should preserve the same isolation:

```text
create new User-scope BuildFromScratch Form
→ record untouched baseline
→ edit Description only
→ ordinary Save to clean
→ close via Web Designer Form-tab
→ DO NOT invoke Unload All Global Form Objects
→ leave Unload IDO Metadata With Forms unchanged
→ reopen exact Form name + ScopeType + ScopeName
→ verify Description and comparison values recovered
```

Passing that replay would promote only the **ordinary Web Designer close/reopen Description-recovery procedure** to replay-verified.

It would **not** establish:

-   durable Forms-database persistence,
-   a complete Form/global-object memory boundary,
-   IDO-metadata trigger semantics,
-   cache provenance,
-   equivalence between Web Client Form close and Web Designer Form-tab close.

A separate future trigger-isolation experiment should distinguish at least these three events independently:

```text
1. Web Client Form close
2. Web Designer Form-tab close
3. Form → Definition → Unload All Global Form Objects
```

For each path, record the preference state, exact client surface/action, semantic result and diagnostic traffic without treating internal request patterns as supported contracts.

EXP-004 should remain parked until authoritative guidance identifies a supported current-Web-Designer Form-variable persistence mechanism or Infor confirms the observed behavior.

Current reusable verified recipes remain:

```text
recipes/forms/create-basic-form.md
recipes/components/add-component-from-toolbox.md
recipes/components/configure-basic-component.md
```

Current knowledge state:

```text
Basic Form creation                           replay-verified
Static/Edit/Button component fundamentals     replay-verified
Temporary explicit Form variable creation     unresolved / blocked
Caption + explicit unload recovery            replay-verified
Description + explicit unload recovery        replay-verified
Description + Designer close/reopen recovery  observed once (EXP-008)
Web Client close IDO behavior in this env      unverified
Web Designer close IDO behavior                unverified
Explicit-unload vs close trigger semantics     unverified
Durable storage/cache provenance               unverified
Other scopes/properties/object classes         unverified
```

Future promotion must continue to require semantic evidence and a clean replay rather than extrapolation from adjacent successful experiments.
