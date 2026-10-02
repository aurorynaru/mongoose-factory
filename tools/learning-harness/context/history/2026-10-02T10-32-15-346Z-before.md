<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-007-R2 (R-20261002-135829-sjDK); specialist findings verdict: supports; 2026-10-02T08:52:10.685Z -->
<!-- finalized after specialist review of EXP-007-R2 (R-20261002-135829-sjDK); all AC-1…AC-10 passed; literal User-scope Form Description persistence across the tested unload sequence is replay\_verified; specialist verdict: supports; 2026-10-02 -->

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
-   Designer **Form** menu has been a reliable reopen path.
-   Closing a clean Designer Form tab may produce no prompt and may fall back to another loaded Form.
-   User Preferences checkboxes are Ext controls using div\[role=checkbox\].
-   Designer View preferences and Web Client User Preferences expose different UI/pages.
-   The exact 2026.09.08 command observed is:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

-   Successful deliberate unloads have been accompanied by successful /DesignerSession/ClearCache traffic. This is diagnostic browser evidence only; the endpoint is not a supported automation contract and does not define the command’s complete semantics or system-wide scope.

The current user has **Unload IDO Metadata With Forms** enabled. EXP-005-R2, EXP-006/R2, EXP-007 and EXP-007-R2 observed it enabled. Successful experiments left it unchanged.

Product documentation supports that closing a Form can leave the Form and associated global Form objects in memory. Therefore ordinary close/reopen is not necessarily a complete Form/global-object memory boundary.

The safer product wording for **Unload All Global Form Objects** is: the command unloads/clears in-memory Form and global-Form-object information. When the relevant preference is enabled, applicable Mongoose contexts can also discard IDO metadata. It is not evidence of arbitrary application/server cache invalidation.

Current documentation describes at least two relevant IDO-metadata behaviors:

-   Web Client help describes **Unload IDO Metadata With Forms** unloading IDO metadata when Forms are closed.
-   Development/cache documentation also ties the option to explicit **Unload All Global Form Objects** behavior.

These descriptions are not necessarily contradictory; they may describe two applicable unload conditions or client/context-specific behavior. Exact **2026.09.08** sequencing remains **unverified** until close-only versus explicit-unload behavior is isolated. Future trigger experiments must record which client surface performs each action.

“Global Form Objects” does not imply tenant-wide, server-wide or all-user invalidation. Current product guidance around IDO metadata is scoped to the relevant/current configuration or local development context.

Literal User-scope **Caption** persistence through the tested unload sequence is replay-verified by EXP-006 + EXP-006-R2.

Literal User-scope **Description** persistence through the same tested sequence is replay-verified by EXP-007 + EXP-007-R2.

These results prove that the values were recoverable after the exercised save/unload/reopen workflow. They do **not** prove which durable storage layer supplied the values or directly prove a Forms-database row.

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
-   Independent Designer reopen is a practical UI persistence test, not direct database-row proof.
-   Editing permission and editing scope are separate concepts.
-   Identify customized Form versions by **Form name + ScopeType + ScopeName**.
-   Treat specialist/documentation guidance as candidate knowledge for exact environment behavior until browser evidence establishes it.
-   Do not generalize beyond the environment, property/component type, scope and workflow actually replayed.
-   Save semantics must be learned experimentally.
-   After editing Form metadata, ordinary-save to clean before applying the experiment’s required unload/reopen boundary.
-   Do not invent undocumented APIs, direct DB edits or metadata hacks.
-   In Select Form, explicitly select the intended row.
-   If an experiment defines a prerequisite, obey it even if another path might work.
-   Do not change Unload IDO Metadata With Forms merely to satisfy an experiment unless separately approved.
-   Treat **Unload All Global Form Objects** as unloading in-memory Form/global-object information within the documented/exercised context, not as proof of system-wide cache invalidation.
-   For future **scope-switching / Site Developer impersonation** experiments, changing editing scope requires a deliberate Form/global-object unload boundary before trusting that the newly selected scoped versions are being used.
-   EXP-005-R2 remains historically blocked; later successful experiments do not retroactively change its result.
-   **EXP-006 + EXP-006-R2 replay-verify literal User-scope Caption persistence across the tested unload workflow.**
-   **EXP-007 + EXP-007-R2 replay-verify literal User-scope Description persistence across that workflow.**
-   Caption and Description are separate metadata fields. Evidence for either does not establish special persistence semantics or a general “Form metadata persists” rule.
-   Other Form attributes and subordinate objects—collections, variables, components, handlers, bindings, localized/translatable Strings, etc.—require their own evidence.
-   No reusable Description-specific recipe has been created; Description persistence is a replay-verified experimental capability, not a promoted recipe file.
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

Persistent=False concerns lifetime/persistence of the **variable value**, not whether an explicitly created Designer variable definition is permitted to exist. Documentation also allows runtime auto-created nonpersistent variables when referenced; that is a different case and does not explain disappearance of a variable deliberately created in the Designer Details panel.

The behavior may indicate a Web Designer/version-specific defect or limitation, but that classification is **unverified**. Obtain Infor confirmation or a documented current-Web-Designer persistence mechanism before calling it a product defect.

No variable recipe is verified.

**EXP-005 — Form Caption Persistence**

FX\_FormPropertyLab01 showed Caption recovery after ordinary Save + close/reopen. It did not deliberately unload in-memory Form/global-object information, so the result remained observed only.

**EXP-005-R2 — Caption replay**

Historically **BLOCKED** because its criteria required Unload IDO Metadata With Forms disabled while the environment had it enabled and changing it was prohibited. This was an experiment-isolation blocker, not an observed Caption failure.

**EXP-006 / EXP-006-R2 — Caption persistence across documented unload**

FX\_FormPropertyLab03, then clean replay FX\_FormPropertyLab04, changed Caption only, saved to clean, closed, confirmed the unload preference enabled without changing it, invoked **Unload All Global Form Objects** exactly once, then reopened the same User-scoped version.

Caption and comparison properties remained intact.

Result: **replay\_verified** for that exact workflow/environment lane.

**EXP-007 — Form Description persistence**

FX\_FormPropertyLab05 was created in User scope. Only Form-level Description was changed to:

```text
Form Property Description Lab
```

It was saved to clean, closed, the enabled preference was confirmed without mutation, the unload command was invoked exactly once, and the same scoped Form reopened with Description and comparison properties intact.

All acceptance checks passed, establishing an **observed** procedure.

**EXP-007-R2 — Clean replay: Form Description persistence**

Status: **COMPLETE — replay\_verified; AC-1…AC-10 PASS.**

A fresh worker proved FX\_FormPropertyLab06 absent, created exactly one new User-scope BuildFromScratch Form using the verified creation recipe, and recorded an untouched baseline.

Only Description was changed to:

```text
Form Property Description Lab Replay
```

One ordinary Designer Save returned clean. The target was closed. Unload IDO Metadata With Forms was visibly reconfirmed CHECKED/enabled through Web Client User Preferences and left unchanged.

Form → Definition → Unload All Global Form Objects was invoked exactly once. The exact same Form name + ScopeType=User + ScopeName reopened with Description intact and all comparison properties unchanged.

A final independent read-only reconciliation reconfirmed the postcondition, clean Designer state, single target instance and unchanged preference.

Therefore EXP-007’s literal User-scope Description procedure is **replay\_verified at the factory/harness level** for the exact tested workflow.

R2 pitfalls/findings:

-   Designer View preferences and Web Client User Preferences are different surfaces. Inspecting the former briefly caused a false conclusion that the visible Behavior preference was unavailable; later Web Client verification superseded that diagnosis.
-   Lingering menus caused an accidental Delete prompt on FX\_FormPropertyLab05; it was immediately cancelled and subsequent checks proved no deletion.
-   Operator-driven harness-tooling edits occurred during a review pause. They were not experiment-worker mutations. Experiment-attributable repository changes remained confined to the EXP-007-R2 record and evidence directory.
-   No Description recipe, environment file, AGENTS.md or unrelated experiment record was modified.

# 5\. Negative findings / blocked topics and why

**EXP-004 — Form Variable Fundamentals remains blocked/unresolved.**

The explicitly created temporary Form-variable definition repeatedly disappeared across all tested native save/reopen approaches.

Do not explain this away using runtime auto-creation semantics for nonpersistent variables; those are distinct from a variable explicitly created in Web Designer.

Do not work around EXP-004 using bindings, scripts, undocumented APIs, DB edits, Global=True, Persistent=True or manual metadata manipulation unless a new controlled experiment explicitly approves such a path.

Do not classify the behavior as a confirmed Mongoose defect until Infor support/documentation or a documented current-Web-Designer persistence mechanism establishes that conclusion.

**EXP-005-R2 remains historically blocked** because its own prerequisite could not be satisfied.

Other unresolved observations:

-   Web Client/GetAllForms-style data has differed from Caption later visible in Designer; projection/cache/display semantics remain **unverified**.
-   Exact 2026.09.08 IDO-metadata trigger behavior remains **unverified** until close-only versus explicit-unload behavior is isolated.
-   Direct cold Form navigation remains unreliable in this environment.
-   The EXP-007-R2 Designer-preferences “Behavior page unavailable” diagnosis was superseded by successful visible verification through Web Client User Preferences.

# 6\. Open questions and sensible next directions

Highest-priority unresolved product question: why an explicitly defined temporary Form variable created through the documented Web Designer Details → Variables surface disappears after all tested native save/reopen paths in Mongoose 2026.09.08.

Before calling that a defect, obtain either:

-   Infor confirmation, or
-   a documented current-Web-Designer mechanism showing how such a variable definition is expected to persist.

Caption and Description persistence are replay-verified only for the tested:

```text
User-scope classic BuildFromScratch
→ edit one literal Form property
→ ordinary Save to clean
→ close target
→ confirm Unload IDO Metadata With Forms enabled without changing it
→ Form > Definition > Unload All Global Form Objects once
→ reopen exact Form name + ScopeType + ScopeName
→ compare semantic postcondition
```

Future experiments may separately investigate:

-   another Form metadata property, one property at a time;
-   Site or Group scope;
-   scope switching / Site Developer impersonation, with an explicit unload boundary after the scope change;
-   localized/translatable Strings;
-   close-only versus explicit-unload IDO-metadata behavior, recording the client surface used for each action;
-   Web Client Form-list/Caption projection differences;
-   other cache/session boundaries;
-   different users, configurations, tenants or Mongoose releases.

Each is a separate generalization experiment. None is implied by the Caption or Description results already replay-verified.
