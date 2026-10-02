<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-008-R2 (R-20261002-183841-C5B6); specialist findings verdict: supports; 2026-10-02T11:23:47.869Z -->
<!-- finalized after specialist review of accepted EXP-008-R2 (R-20261002-183841-C5B6); specialist verdict: supports; EXP-008 ordinary Web Designer close/reopen Description recovery is replay-verified; no reusable recipe promoted; 2026-10-02 -->

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

“Fresh worker context” / “independent execution” means independent at the harness/OpenCode-session level. It does not imply replication across another user, tenant, configuration, environment, product version, browser process or Mongoose session unless those boundaries are explicitly part of the experiment.

The harness/controller automates this coordination. Future coordinator replies must follow its protocol and experiment boundaries.

# 2\. Environment facts that matter

Current proven environment:

-   Mongoose Web Client / Web Designer / application DB / Form definitions DB: **2026.09.08**
    
-   Infor OS Portal: **2026.09.00**
    
-   Tenant observed: **G6R8LJ9Q4E8C2Z8Y\_DEM**
    
-   Demo configuration: **G6R8LJ9Q4E8C2Z8Y\_MONGOOSE\_DEM\_DEFAULT**
    
-   Editing permission: **Site Developer**
    
-   Factory experiments currently use explicitly confirmed **User-scope** versions.
    
-   A Form/global-object **version** is distinguished by **Form name + ScopeType + ScopeName**. User, Group and Site are customized versions; Vendor Default is the uncustomized/base version. Name alone is therefore insufficient to prove that the intended scoped version reopened.
    
-   Current learning lane is classic **BuildFromScratch** Forms.
    
-   Browser automation uses Playwright MCP through OpenCode.
    

Environment/browser observations, not generic Mongoose contracts:

-   Web Client normally runs inside the Portal iframe; Web Designer opens separately.
    
-   Numeric Ext JS IDs drift between sessions.
    
-   Synthetic DOM clicks can fail to trigger Ext handlers; native Playwright interactions have been more reliable.
    
-   Hidden Ext windows/components can exist, so DOM existence does not prove visible UI.
    
-   Direct cold `?MGForm=...` navigation has been unreliable.
    
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
    
-   Designer **Form** menu has been a reliable tested reopen path, including recent-forms entries.
    
-   Closing a clean Designer Form tab may produce no prompt and may fall back to another loaded Form.
    
-   User Preferences checkboxes are Ext controls using `div[role=checkbox]`.
    
-   Designer View preferences and Web Client User Preferences are different surfaces.
    
-   Frame-scoped locators/native element interaction are safer than raw-coordinate interaction inside the Portal iframe.
    

The exact command observed in the target 2026.09.08 environment is:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unload experiments were accompanied by successful `/DesignerSession/ClearCache` traffic. That traffic is **diagnostic only** and is not a supported automation contract or proof of complete command semantics.

The current user has **Unload IDO Metadata With Forms** enabled. EXP-005-R2, EXP-006/R2, EXP-007/R2, EXP-008 and EXP-008-R2 observed it enabled. Successful experiments left it unchanged.

Current Infor documentation supports these general product facts:

-   Closing a Form can leave the Form and associated global Form objects in memory, so ordinary close/reopen is not inherently a complete Form/global-object cache boundary.
    
-   **Unload All Global Form Objects** clears Form/global-object information from memory and, with the relevant preference, can also clear IDO metadata.
    
-   Web Client documentation describes **Unload IDO Metadata With Forms** as forcing IDO metadata to unload when Forms close.
    
-   Separate development/cache documentation also associates that preference with explicit global-object unloading.
    
-   Form/global-object cache and IDO metadata cache are distinct concepts even where a preference can couple their unloading.
    
-   After Site Developer editing-scope/impersonation changes, Forms/global objects should be cleared from memory before trusting that versions corresponding to the new editing scope are displayed.
    

Exact **Web Designer 2026.09.08** behavior remains authoritative from target-environment evidence where adjacent 2026.x documentation differs. In particular, do not assume that Web Designer Form-tab close is semantically identical to the Web Client Form close described in User Preferences documentation.

For factory terminology, **close-only** means:

```text
ordinary Web Designer Form close/reopen
with NO explicit
Form → Definition → Unload All Global Form Objects
```

It does **not** mean that no internal IDO-metadata or cache processing occurred.

Current recovery results:

-   Literal User-scope **Caption** recovery through the tested explicit-unload sequence is **replay-verified** by EXP-006 + EXP-006-R2.
    
-   Literal User-scope **Description** recovery through the tested explicit-unload sequence is **replay-verified** by EXP-007 + EXP-007-R2.
    
-   Literal User-scope **Description recovery across ordinary Web Designer close/reopen without explicit global-object unload** is **replay-verified** by EXP-008 + EXP-008-R2.
    

These establish recovery after the exact workflows exercised. They do **not** identify storage provenance, prove a Forms-database row, prove cache eviction, or establish IDO-metadata unloading.

EXP-008/R2 also did **not** cross a new Designer/browser process or authentication/session boundary. Its result is same-environment recovery across an ordinary Form-tab close/reopen.

# 3\. Decisions and rules established so far

Permanent factory knowledge follows:

```text
candidate guidance
→ observed
→ replay-verified
```

Core rules:

-   Modify only factory-owned `FX_` artifacts.
    
-   Never alter unrelated/non-`FX_` artifacts.
    
-   Never weaken security or expose credentials.
    
-   Keep each experiment limited to one new capability.
    
-   Read current state before retrying; never blindly repeat a mutation after interruption.
    
-   Record blockers, failures and corrections as well as successes.
    
-   Evidence should prove semantic state transitions, not every click.
    
-   A screenshot proves only the visual state rendered at that moment.
    
-   Independent Designer reopen is a practical UI recovery check, not direct database-row proof.
    
-   Editing permission and editing scope are separate concepts.
    
-   Identify a scoped Form/global-object version by **name + ScopeType + ScopeName**.
    
-   Version identity and storage provenance are different questions.
    
-   Treat specialist/documentation guidance as candidate knowledge for exact target-environment behavior until browser evidence establishes it.
    
-   Prefer target-environment evidence for precise Web Designer wording/behavior where no exact 2026.09.08 documentation snapshot is available.
    
-   Do not generalize beyond the environment, property/component type, scope and boundary actually replayed.
    
-   Save semantics must be learned experimentally.
    
-   After editing Form metadata, ordinary-save to clean before applying the experiment’s required close/unload/reopen boundary.
    
-   Do not invent undocumented APIs, direct DB edits or metadata hacks.
    
-   In Select Form, explicitly select the intended row.
    
-   If an experiment defines a prerequisite, obey it even if another path might work.
    
-   Do not change **Unload IDO Metadata With Forms** merely to satisfy an experiment unless separately approved.
    
-   Treat Form/global-object cache state and IDO-metadata cache state as separate acceptance dimensions.
    
-   Treat **Unload All Global Form Objects** as a documented Form/global-object memory operation, not arbitrary tenant-wide/server-wide invalidation.
    
-   Network signatures such as `/DesignerSession/ClearCache` are diagnostic only.
    
-   Whether the explicit unload command was invoked can be established by the controlled experiment record; a particular network signature is not required.
    
-   Distinguish Web Client Form close, Web Designer Form-tab close and explicit global-object unload.
    
-   After editing-scope/impersonation changes, clear Forms/global objects before trusting displayed scoped versions.
    
-   EXP-005-R2 remains historically blocked.
    
-   **EXP-006 + R2:** Caption recovery across explicit unload is replay-verified.
    
-   **EXP-007 + R2:** Description recovery across explicit unload is replay-verified.
    
-   **EXP-008 + R2:** Description recovery across ordinary Web Designer close/reopen with no explicit global-object unload is replay-verified.
    
-   EXP-008/R2 proves **repeatable recovery only**. It does not establish durable Forms-database persistence or a stronger storage/cache boundary.
    
-   Because the unload preference remained enabled, EXP-008/R2 does not isolate whether that preference acted during Designer Form-tab close.
    
-   A stronger independent-reload claim requires an explicitly tested stronger boundary, such as a new Designer/browser session or another supported fresh-session condition.
    
-   Caption and Description are separate metadata fields; neither establishes a general “all Form metadata recovers” rule.
    
-   Other Form attributes and subordinate objects—collections, variables, components, handlers, bindings, localized/translatable Strings, etc.—require their own evidence.
    
-   No reusable Description-specific **recovery** recipe has been created or promoted.
    
-   Ext IDs, store indexes, model IDs, internal request paths and component structures are diagnostic observations, not durable recipe dependencies.
    
-   Reuse existing evidence when it already proves an acceptance check rather than performing redundant mutations.
    
-   If Web Client list data and Designer properties disagree, record the observed difference without inferring stale data, fallback behavior or failed recovery unless the projection contract is known.
    
-   Repository audits must distinguish **experiment-attributable changes** from harness/runtime/operator tooling changes. Git-based worktree/history evidence is preferred when available.
    

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

The browser-tested Web Designer path used was:

```text
Details
→ Variables
```

Current documentation supports a Variables dialog for creating/editing Form and global variables.

In the EXP-004 target-environment observation, **Edit → Variable led to Global Objects rather than the intended tested Form-variable creation surface**. Treat this strictly as an environment/browser observation: adjacent 2026.08 documentation describes Edit → Variable as opening the Variables dialog, so the discrepancy may be version-, surface-, state- or environment-specific **(unverified)**.

An explicitly defined temporary Form variable `FX_TestValueVar` with Global=False, Persistent=False, Value=`Seed-A` disappeared after all tested save/reopen approaches: ordinary Form Save **2/2** and Regenerate Form **1/1**, for **3/3 failures**.

The Persistent attribute controls the lifetime/storage of the **variable value**: a temporary/nonpersistent value exists while the Form is open, whereas persistent values can survive executions. Persistent=False does **not** by itself explain disappearance of an explicitly created design-time variable definition from the Variables UI after Save. That behavior remains unexplained.

Potential causes to isolate in a future focused experiment include Persistent=False, lack of reference/binding, Variables UI path, regeneration, Form type, or a Web Designer/version-specific defect. All remain **unverified**.

No variable recipe is verified.

**EXP-005 / EXP-005-R2 — Caption close/reopen**

EXP-005 observed Caption recovery after ordinary Save + close/reopen.

EXP-005-R2 was **BLOCKED** because its criteria required **Unload IDO Metadata With Forms** disabled while the environment had it enabled and changing it was prohibited. This was an experiment-isolation blocker, not a Caption failure.

**EXP-006 / EXP-006-R2 — Caption across explicit unload**

`FX_FormPropertyLab03`, then replay `FX_FormPropertyLab04`, changed Caption only, saved clean, closed, confirmed the unload preference enabled, invoked **Unload All Global Form Objects** exactly once, and reopened the same User-scoped version.

Caption and comparison properties recovered unchanged.

Result: **replay\_verified** for that exact workflow/environment lane.

**EXP-007 / EXP-007-R2 — Description across explicit unload**

`FX_FormPropertyLab05`, followed by replay `FX_FormPropertyLab06`, changed only Form-level Description, ordinary-saved to clean, closed, confirmed the preference enabled, invoked **Unload All Global Form Objects** exactly once, then reopened the exact same User-scoped version.

Description and comparison properties recovered unchanged.

Result: **replay\_verified** for that exact explicit-unload workflow.

Pitfalls/findings included:

-   Designer View preferences and Web Client User Preferences are different surfaces.
    
-   A lingering menu caused an accidental Delete prompt on `FX_FormPropertyLab05`; it was cancelled and subsequent checks proved no deletion.
    
-   Operator-driven harness-tooling edits were not experiment-worker mutations.
    
-   No Description recipe, environment file, `AGENTS.md` or unrelated experiment record was modified.
    

**EXP-008 / EXP-008-R2 — Description across ordinary Web Designer close/reopen**

EXP-008 used `FX_FormPropertyLab07` and observed exact Description recovery after one ordinary Designer Save, Web Designer Form-tab close and reopen through **Form → recent-forms**, with no explicit global-object unload.

EXP-008-R2 independently replayed the same semantic procedure on newly created User-scope `FX_FormPropertyLab08`.

Only Description was changed to:

```text
Form Property Description Close Only Replay
```

Exactly one ordinary Designer Save returned Designer to a clean state.

The Form was closed using its ordinary Web Designer Form-tab close control. `**Form → Definition → Unload All Global Form Objects**` **was never invoked.**

The same scoped version was reopened through the supported Designer Form-menu path. Identity was established by:

```text
Name      = FX_FormPropertyLab08
ScopeType = User
ScopeName = same User as baseline
```

The Description recovered character-for-character. Caption, Version, Device Type, Form Type and Is Master remained unchanged, and Designer was clean.

The **Unload IDO Metadata With Forms** preference was CHECKED before/finally, remained unchanged, and User Preferences was closed without Save.

Final inventory was **644 Forms / 13** `**FX_**` **Forms / exactly one** `**FX_FormPropertyLab08**`.

The authoritative post-write Git audit established that experiment-attributable repository changes were confined to the EXP-008-R2 experiment record and evidence directory. Harness-runtime changes under `tools/learning-harness/**` were runtime/operator tooling, not experiment knowledge changes. An earlier “not a git repository” observation was superseded: reconciliation confirmed the worktree was a Git repository on branch `exp/EXP-008-R2`, HEAD `10322fa`.

No reusable recipe was created or modified.

Result: **EXP-008 + EXP-008-R2 replay-verify Description recovery across the exact ordinary Web Designer close/reopen workflow tested.**

The result does **not** establish:

-   durable Forms-database persistence or storage provenance;
    
-   Form/global-object cache eviction;
    
-   IDO-metadata unloading;
    
-   whether the enabled unload preference acted during Designer tab close;
    
-   equivalence between Web Client Form close and Web Designer Form-tab close;
    
-   survival across a new Designer/browser process, logout/login or other fresh-session boundary;
    
-   recovery semantics for Caption, variables, components or other object/property types.
    

**Negative findings / limits**

-   Ordinary close/reopen is not proven to be a complete Form/global-object memory boundary.
    
-   Form/global-object cache state and IDO-metadata cache state must not be conflated.
    
-   ClearCache-style traffic is diagnostic and cannot establish complete cache semantics.
    
-   Scoped-version identity does not reveal the storage layer from which the value was recovered.
    
-   No Description-specific reusable recovery recipe has been promoted.
    
-   EXP-004 variable-definition disappearance remains unresolved.
    

**Open questions**

-   What storage/memory layer supplied the recovered Description after ordinary Web Designer close/reopen? **(unverified)**
    
-   Does Web Designer Form-tab close honor **Unload IDO Metadata With Forms** with the same semantics documented for Web Client Form close? **(unverified)**
    
-   Would the same Description recover after a deliberately stronger boundary such as a fresh Designer/browser session or supported login/session reset? **(unverified)**
    
-   Can Form/global-object cache unloading and IDO-metadata unloading be independently demonstrated in the target Web Designer environment? **(unverified)**
    
-   Which additional Form-level attributes reproduce across ordinary close/reopen versus explicit global-object unload? **(unverified)**
    
-   Why did explicitly defined temporary Form variables disappear after all EXP-004 save/reopen paths, and which variable property/UI condition controls that behavior? **(unverified)**
    
-   Whether the replay-verified close-only Description procedure should eventually become a reusable recovery recipe remains a future promotion decision.
