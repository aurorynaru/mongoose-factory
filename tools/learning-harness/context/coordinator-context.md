<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-016 (R-20261004-094134-Cn9j); specialist findings verdict: supports; 2026-10-05T10:16:56.535Z -->
<!-- finalized after specialist review of EXP-016 (R-20261004-094134-Cn9j); specialist verdict: supports --> <!-- EXP-016 final T12 acceptance audit supersedes the earlier interim “AC-4 blocked” state: AC-1 through AC-6 PASS. --> <!-- EXP-016 establishes an OBSERVED supported FormSync Script route for producing a Forms-database-oriented representation of a selected customized Form. It does NOT establish that any specific EXP-014/015 Form variable was serialized. Generic Variables/FormID handling in generated SQL is insufficient proof of an existing variable definition. -->

# 1\. Project and workflow

The project is an autonomous **Infor Mongoose factory** being built in C:\\AI\\mongoose-factory. Its long-term goal is to take a natural-language request, optionally with reference images, and reliably build Mongoose Forms/portal-related artifacts using browser automation and a growing body of verified procedures and recipes.

There are three roles:

-   **Coordinator (ChatGPT):** selects bounded experiments, reviews worker evidence, decides when specialist consultation is needed, and controls promotion from candidate → observed → replay-verified.
-   **OpenCode worker:** operates Mongoose through Playwright MCP, records experiment/evidence artifacts, and remains within approved scope.
-   **Infor Mongoose specialist GPT:** supplies domain guidance. Advice remains candidate guidance until target-environment browser evidence establishes it.

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

# 2\. Environment facts that matter

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
-   Synthetic DOM clicks may fail to invoke Ext handlers; native/frame-scoped Playwright interaction has been more reliable.
-   Hidden Ext components can remain cached off-screen; DOM existence does not prove visible UI.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer recent-forms and Select Form are tested reopen paths.
-   Closing a clean Designer Form tab can produce no prompt.
-   A post-start Sign In/OK action may restore access but invalidates experiments that prohibit reauthentication.
-   EXP-014 established Portal/Web Client/Designer sessions before mutation and then completed creation, Save, close and reopen without later reauthentication/session replacement.
-   In EXP-016, navigating away from FormSync reset its working state in that browser/session. This is an execution observation, not generalized product behavior.

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
-   Persistent and temporary Form-variable **definitions are design-time Form metadata**.
-   Current documentation shows persistent Form variables represented under structures such as PersistentVariables().

Therefore disappearance of an explicitly defined variable after Save/reopen remains anomalous relative to documented capability.

Current lifecycle observations:

-   Caption + explicit unload: **replay-verified**.
-   Description + explicit unload: **replay-verified**.
-   Description + ordinary close/reopen: **replay-verified**.
-   Description + newly launched Designer: **replay-verified at UI-recovery level only**.
-   Caption + ordinary close/reopen: **observed only**.
-   Persistent=True variable immediately after Save: EXP-013/014 **observed visible**, but serialization not proven.
-   Persistent=True variable after ordinary close/reopen: EXP-014 **observed absent**.
-   FormSync Script representation of a selected customized Form: EXP-016 **observed once**, not replay-verified.

FormSync SQL scripting is documented as generating definitions of customized objects from a selected **Source Forms database**. Therefore the logical provenance of the EXP-016 Script representation is Forms-database-oriented rather than merely current Designer client state. This does **not** prove independence from every backend/session/cache layer, nor does it prove the storage/serialization provenance of any specific variable.

# 3\. Decisions and rules established so far

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
-   Editing permission and editing scope are separate.
-   Verify scoped objects using **Name + ScopeType + ScopeName**.
-   Version identity and storage/serialization provenance are different questions.
-   Do not generalize across metadata classes, scopes or lifecycle boundaries.
-   Treat internal request paths, Ext IDs/stores, model IDs, numeric ScopeType values, generated SQL table/column names and statement layout as observed implementation details, not stable automation contracts.
-   If an experiment defines a prerequisite/prohibition, obey it even when another route appears harmless.
-   Do not change preferences/cache settings merely to force an experiment to pass.
-   Ordinary close/reopen does not prove physical database durability, cache eviction or commit boundaries.
-   Caption, Description and Form-variable definitions are separate metadata classes.
-   **Persistent is a runtime-value-lifetime property, not evidence of design-time definition persistence.**
-   Persistent=True versus Persistent=False observations must not be interpreted as causal without a controlled test.
-   Immediate client-side visibility after Save is insufficient proof that a variable definition was serialized.
-   Runtime-value semantics and variable-definition retention are separate.
-   No reusable Form-variable creation/persistence recipe has been promoted.
-   For variable-definition cache investigations, prioritize Form/global-object state; instrument IDO metadata separately.
-   FormSync Script and Pseudo Code are **alternative supported representations with different purposes/formats**; do not treat them as equivalent.
-   EXP-016 used Output=View as the **no-file, non-mutating output path**. View is an output destination, not a special source-Form persistence mode.
-   Generic generated-SQL handling of a metadata table such as Variables is **not proof that a specific variable exists**.
-   Positive serialization evidence for a controlled variable must contain variable-specific data, at minimum its controlled identity/name and preferably controlled value/definition fields.
-   Negative serialization evidence requires first establishing that the chosen representation and settings normally expose a known-present variable; absence of a name alone is otherwise inconclusive.
-   A FormSync Script procedure observed once remains **observed**, not replay-verified.

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
-   **EXP-015:** blocked before the intended independent serialization investigation completed.
-   **EXP-016:** **final AC-1 through AC-6 PASS; observed only.** Earlier “AC-4 blocked” text in the record was superseded by the final T12 result.

Naming conventions:

```text
Forms:       FX_<Purpose>
Components:  FX_<SemanticPurpose><MongooseType>
Variables:   FX_<Purpose>Var   (candidate convention)
```

# 4\. Lessons learned and pitfalls per experiment

**EXP-001 — Environment fingerprint**

Established architecture, versions, User scope and core navigation.

**EXP-002 / EXP-002-R2 — Basic Form creation**

BuildFromScratch Form creation is replay-verified.

**EXP-003 / EXP-003-R2 — Component fundamentals**

Static, Edit and Button procedures are replay-verified.

**EXP-004 — Form Variable Fundamentals**

Details → Variables is the tested design-time path. FX\_TestValueVar, Global=False, Persistent=False, Value=Seed-A disappeared after ordinary Save **2/2** and Regenerate **1/1**: three observed negatives.

This does not establish that Persistent=False causes definition loss.

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

Created FX\_FormVariableLab05 for a controlled saved-definition serialization investigation, but session loss prevented the intended independent representation check from completing. No serialization conclusion was established.

**EXP-016 — Supported Forms-database-oriented FormSync representation**

The final investigation found an observed supported route:

```text
Runtime FormSync
→ select the intended configuration as Source
→ Utilities
→ Filter
→ Configuration = Source
→ object type/form filters as required
→ Scope Type = User
→ select exact User/ScopeName where practical
   OR verify the returned row's User/Group Name explicitly
→ exact Form name
→ Refresh List
→ Deselect All
→ verify Name + ScopeType + ScopeName on the intended row
→ include exactly that row (Inc)
→ Script
→ Output = View
→ Generate
```

EXP-016's generated SQL visibly contained the recorded Form identity/scope information and implementation-level Variables/FormID references. This shows the Script representation includes variable-related Forms-database metadata handling, but **does not prove that FX\_FormVariableLab05 contained a saved variable definition**. A generic delete/reset/framework statement can exist without a corresponding source variable row.

The Pseudo Code Include UI visibly offered **Persistent Variables**, but Pseudo Code Generate remained disabled after the worker populated the visible controls it understood to be required. The cause is unknown; selection validation, permissions, object-path requirements, hidden state or another prerequisite remain possible.

Script and Pseudo Code should be treated as alternative supported representations with different purposes and inclusion/format behavior, not equivalent output.

The generated SQL's table names, columns, numeric scope codes and statement structure are observed representation details, **not durable factory contracts**. The reusable contract should remain the supported FormSync UI route plus semantic identity/evidence checks.

# 5\. Negative findings / blocked topics and why

-   EXP-004 variable definitions disappeared after Save/Regenerate in all tested executions.
-   EXP-011/012 were interrupted by session expiry.
-   EXP-013 did not satisfy every required acceptance proof.
-   EXP-014 showed post-reopen variable absence, while pre-close serialization remained unknown.
-   EXP-015 lost the required session before its serialization investigation could complete.
-   EXP-016 initially failed to locate a suitable representation through ordinary Form/Export surfaces; later FormSync investigation resolved that discovery blocker.
-   Form > Definition was observed as a submenu of actions, not a saved-definition metadata view.
-   Form > Export to File was observed as collection-data export, not a saved-Form definition export.
-   Pseudo Code Generate remained disabled in EXP-016; its cause remains unknown.
-   The generic Variables/FormID SQL references seen in EXP-016 are insufficient evidence for a specific saved variable.
-   No known-present controlled variable has yet established the exact variable-specific SQL pattern needed for reliable positive/negative serialization classification.
-   No runtime variable-value persistence experiment has succeeded.
-   No Form-variable creation/persistence lifecycle recipe is replay-verified.
-   Physical DB durability, transaction/commit boundaries and cache/backend-session independence remain unverified.
-   Specific EXP-014/015 variable storage/serialization provenance remains unverified.

# 6\. Open questions and sensible next directions

Primary unresolved question:

> Why can a supported Form-variable definition appear before and immediately after Save yet disappear after ordinary close/reopen?

The strongest next controlled experiment is:

```text
fresh controlled User-scoped Form/variable
→ Save once
→ before close, generate FormSync Script
→ prove variable-specific serialization using the controlled variable name
   and preferably controlled value/definition data
→ close/reopen normally
→ inspect Designer variable state
→ regenerate FormSync Script
→ compare pre-close and post-reopen representations
```

Before treating an absent variable name as proof of non-serialization, the experiment must establish a **known-present positive pattern** showing how a saved variable appears in Script output. Otherwise absence could be caused by representation/filtering settings rather than actual non-serialization.

The FormSync route should also be replayed in a fresh worker execution using:

```text
selected configuration as Source
→ Filter Configuration = Source
→ exact User scope/User where practical
→ exact Form
→ Refresh
→ Deselect All
→ verify Name + ScopeType + ScopeName
→ include exactly the intended row
→ Script
→ Output = View
→ Generate
```

Do not infer completeness from Scope Type = User alone; a blank User filter can return objects for multiple users, so exact User/ScopeName selection or row verification matters.

Still unresolved:

-   Whether EXP-014's variable was ever serialized.
-   Whether EXP-015's probe variable was serialized.
-   Whether variable loss occurs during Save/serialization or during Designer reconstruction/recovery.
-   What exact variable-definition statement/data pattern FormSync Script emits for a known-present variable.
-   Why Pseudo Code Generate remained disabled.
-   Whether the FormSync Script route reproduces in a fresh worker/session.
-   Runtime persistent-value behavior.
-   Effect of explicit global-object unload versus close-only for variables.
-   Stronger browser/auth/application/backend-session boundaries.
-   Behavior across other scopes/Form types.

Do not infer causation from Persistent=True versus Persistent=False without a controlled comparison.

# 7\. Current knowledge state

| Capability / finding | State |
| --- | --- |
| BuildFromScratch Form creation | **Replay-verified** |
| Static/Edit/Button fundamentals | **Replay-verified** |
| Caption + explicit unload | **Replay-verified** |
| Description + explicit unload | **Replay-verified** |
| Description + close/reopen | **Replay-verified** |
| Description + new Designer UI recovery | **Replay-verified, UI-level only** |
| Caption + close/reopen | **Observed** |
| Persistent=True variable visible immediately after Save | **Observed** |
| Persistent=True variable absent after close/reopen | **Observed negative, EXP-014 only** |
| Persistent=False variable retention after Save/Regenerate | **Observed negative, EXP-004 only** |
| FormSync Script generation for one selected customized Form | **Observed, EXP-016 only** |
| FormSync representation is logically Source-Forms-database-oriented | **Supported by documented product model; target route observed** |
| Filter Configuration=Source for SQL scripting | **Documented requirement / candidate reusable rule; replay pending** |
| Exact Name + ScopeType + ScopeName verification | **Established factory identity rule** |
| Pseudo Code UI offers Persistent Variables include category | **Observed, EXP-016 only** |
| Pseudo Code generation in target tenant | **Unresolved; Generate stayed disabled** |
| Generic Variables/FormID reference proves specific variable exists | **False / insufficient evidence** |
| Variable-specific Script serialization pattern | **Unverified** |
| Specific EXP-014/015 variable serialization | **Unverified** |
| Runtime variable-value persistence | **Unverified** |
| Reusable Form-variable lifecycle recipe | **Unverified** |
| Physical DB durability / commit / cache boundaries | **Unverified** |
| Strong backend/session-independent persistence | **Unverified** |
