<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-016-R2 (R-20261005-181911-K73K); specialist findings verdict: objects; 2026-10-05T11:30:53.364Z -->
<!-- finalized after specialist review of EXP-016-R2 (R-20261005-181911-K73K); specialist verdict: objects --> <!-- EXP-016-R2 independently reproduced FormSync Script generation for the selected User-scoped FX\_FormVariableLab05 in a fresh worker execution. The specific Output=View → visible temporary page semantic path is NOT replay-verified because the underlying View input was changed programmatically/off-screen and Generate produced a browser ZIP instead of cited visible View-page evidence. Generic Variables/FormID SQL remains insufficient proof of any specific Form-variable definition. -->

# 1\. Project and workflow

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
-   Synthetic/low-level DOM manipulation may fail to invoke Ext handlers; native/frame-scoped Playwright interaction has generally been more reliable.
-   Hidden/off-screen Ext controls may remain in the DOM. DOM existence or an HTML checked property does **not** by itself prove visible UI or processed application state.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer recent-forms and Select Form are tested reopen paths.
-   Closing a clean Designer Form tab can produce no prompt.
-   A post-start Sign In/OK action may restore access but invalidates experiments that prohibit reauthentication.
-   EXP-014 completed creation, Save, close and reopen without later reauthentication/session replacement.
-   In EXP-016, navigating away from FormSync reset its working state in that browser/session. This is an execution observation, not generalized product behavior.
-   EXP-016-R2 confirmed an inherited live Web Client session rather than establishing a new authentication/browser/application session. Its independence is therefore at fresh-worker level only.

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
-   FormSync Script generation for one selected User-scoped customized Form: **replay-verified by EXP-016 + EXP-016-R2**.
-   The specific **Output=View → visible temporary representation page** behavior remains **unverified in EXP-016-R2**.

FormSync SQL scripting is documented as generating definitions of customized objects from a selected **Source Forms database**. Its logical provenance is therefore Forms-database-oriented rather than merely current Designer client state. The generated artifact is an **executable customization-definition SQL script**; generation was non-mutating with respect to the inspected Source Form, but the SQL itself is not intrinsically read-only.

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
-   Treat internal request paths, Ext IDs/stores, model IDs, numeric ScopeType values, generated SQL table/column names and statement layout as implementation details, not stable automation contracts.
-   If an experiment defines a prerequisite/prohibition, obey it even when another route appears harmless.
-   Do not change preferences/cache settings merely to force an experiment to pass.
-   Ordinary close/reopen does not prove physical database durability, cache eviction or commit boundaries.
-   Caption, Description and Form-variable definitions are separate metadata classes.
-   **Persistent is a runtime-value-lifetime property, not evidence of design-time definition persistence.**
-   Persistent=True versus Persistent=False observations must not be interpreted as causal without a controlled test.
-   Immediate client-side visibility after Save is insufficient proof that a variable definition was serialized.
-   Runtime-value semantics and variable-definition retention are separate.
-   No reusable Form-variable creation/persistence recipe has been promoted.
-   FormSync Script and Pseudo Code are **alternative supported representations with different purposes/formats**; do not treat them as equivalent.
-   FormSync **Script generation for an exact selected User-scoped Form** is replay-verified.
-   Do **not** promote the EXP-016-R2 DOM observation View checked / Save unchecked into proof that FormSync semantically processed View mode. The View control was off-screen and changed programmatically.
-   Current documentation describes **View** as displaying generated output temporarily and **Save** as file output. In EXP-016-R2, the worker observed the underlying View input checked but Generate produced a browser-download ZIP. **The semantic reason is unresolved.**
-   The exact Script-tab configuration in EXP-016-R2 is incomplete because the visible/semantic state of **Script form license** was not recorded. The generated \_LIC.SQL file makes this relevant.
-   Generic generated-SQL handling such as DELETE FROM Variables WHERE FormID = @FormID is **not proof that a specific variable exists or was serialized**.
-   Positive serialization evidence for a controlled variable must contain variable-specific data, at minimum its controlled identity/name and preferably definition/value fields.
-   Negative serialization evidence requires first establishing that the selected representation/settings expose a known-present variable; absence of a name alone is otherwise inconclusive.

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
-   **EXP-016:** final investigation established an observed FormSync Script-generation route.
-   **EXP-016-R2:** worker record reports AC-1..AC-7 PASS, but specialist review found the AC-5 **Output=View visible-representation semantic claim insufficiently evidenced**. Accepted conclusion: **FormSync Script generation route replay-verified; Output=View destination semantics unresolved.**

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

The supported route now reproduced across original observation and clean replay is:

```text
Runtime FormSync
→ select intended configuration as Source
→ Utilities
→ Filter
→ Filter Configuration = Source
→ Scope Type = User
→ select exact User/ScopeName where practical
   OR verify returned row's User/Group Name explicitly
→ Refresh List
→ Deselect All
→ verify Name + ScopeType + ScopeName
→ include exactly the intended Form row
→ Script
→ Generate
```

EXP-016-R2 isolated exactly one FX\_FormVariableLab05 row and generated FormSync SQL identifying the Form by name, ScopeType=3/User and ScopeName.

Authoritative captured SQL paths:

-   evidence/EXP-016-R2/script/FS\_20261005\_102224.SQL
-   evidence/EXP-016-R2/script-t4/FS\_20261005\_102224.SQL

The SQL was **captured twice**. Do not call these “two independent generations” unless separate Generate/download evidence or distinct generation metadata is preserved; both captured files use the same filename.

The SQL contains DELETE FROM Variables WHERE FormID = @FormID. This proves that the generated definition script contains variable-related metadata handling, but **does not prove that FX\_FormVariableLab05 contained any specific saved Form variable**.

Relevant identity/filter evidence includes:

-   evidence/EXP-016-R2/03-filter-source-user-scope-list-refreshed.png
-   evidence/EXP-016-R2/04-filter-only-fxformvariablelab05-included.png
-   evidence/EXP-016-R2/07-t3-ac3-filter-configuration-source-dem-selected.png
-   evidence/EXP-016-R2/08-t3-script-state-restored-view-single-inc.png

However, 08-t3-script-state-restored-view-single-inc.png requires **manual visual inspection** before making any claim about rendered Script-tab Output state. The worker reported the actual HTML View input as checked and Save unchecked, but the View radio was positioned off-screen and changed programmatically. That is browser-DOM evidence, not proof the Ext application semantically processed View mode.

After Generate, Playwright received a ZIP containing:

-   FS\_20261005\_102224.SQL
-   FS\_20261005\_102224\_LIC.SQL

This outcome is more consistent with documented file-output behavior than with documented View behavior, but **do not infer that Save was actually selected**. Possible explanations include Ext/application-state mismatch, 2026.09.08 web-client behavior or another implementation detail.

The post-Generate screenshot numbered **09** in evidence/EXP-016-R2/ must be manually inspected to determine whether a temporary FormSync View page actually appeared. Its exact basename is unavailable in the supplied context and must not be invented.

The visible/semantic **Script form license** checkbox state was not recorded. Because \_LIC.SQL was generated, this is a missing part of the exact Script-tab configuration.

No Mongoose Form artifact was created, modified, Saved, Regenerated, executed or applied during EXP-016-R2. Generating the SQL was non-mutating with respect to the Source Form. The generated SQL itself is executable and could mutate a destination Forms database if later run.

# 5\. Negative findings / blocked topics and why

-   EXP-004 variable definitions disappeared after Save/Regenerate in all tested executions.
-   EXP-011/012 were interrupted by session expiry.
-   EXP-013 did not satisfy every required acceptance proof.
-   EXP-014 showed post-reopen variable absence while pre-close serialization remained unknown.
-   EXP-015 lost the required session before its serialization investigation completed.
-   EXP-016 initially failed to locate a suitable definition representation through ordinary Form/Export surfaces; later FormSync investigation resolved that discovery blocker.
-   Form > Definition was observed as an action submenu, not a saved-definition metadata view.
-   Form > Export to File was observed as collection-data export, not saved-Form definition export.
-   Pseudo Code Generate remained disabled in EXP-016; its cause remains unknown.
-   EXP-016-R2 did **not** establish documented Output=View semantics because no accepted evidence yet proves the temporary visible View page appeared.
-   The Script form license state in EXP-016-R2 is unresolved.
-   The generic Variables/FormID SQL references remain insufficient evidence for a specific saved variable.
-   No known-present controlled variable has yet established the exact variable-specific SQL pattern needed for reliable positive/negative serialization classification.
-   No runtime variable-value persistence experiment has succeeded.
-   No Form-variable creation/persistence lifecycle recipe is replay-verified.
-   Physical DB durability, transaction/commit boundaries, cache eviction and backend-session independence remain unverified.

# 6\. Open questions and sensible next directions

Primary unresolved product question:

> Why can a supported Form-variable definition appear before and immediately after Save yet disappear after ordinary close/reopen?

The FormSync **Script-generation** route itself has now reproduced in a fresh worker context, so another generic replay is unnecessary. However, the Output destination semantics from EXP-016-R2 require cleanup before claiming a verified Output=View procedure.

Required verification for the EXP-016-R2 evidence boundary:

1.  Manually inspect evidence/EXP-016-R2/08-t3-script-state-restored-view-single-inc.png for what is actually rendered on the Script tab.
2.  Manually inspect the post-Generate screenshot numbered 09 in evidence/EXP-016-R2/ and determine whether a temporary View page visibly appeared.
3.  Record the visible/semantic **Script form license** state.
4.  If retaining any claim of multiple independent Generate operations, preserve distinct Generate/download evidence or distinct generated metadata.

The highest-value subsequent controlled variable experiment is to establish **variable-specific serialization evidence**. After creation and Save of a fresh controlled variable, inspect the FormSync-generated definition script before close/reopen and compare that with later Designer recovery.

Positive serialization requires unmistakable variable-specific data. If a controlled name is absent, do **not** classify that alone as serialization failure until a known-present variable has demonstrated that this FormSync Script configuration normally emits that variable-specific information.

Still unresolved:

-   Whether EXP-014's variable was ever serialized.
-   Whether EXP-015's probe variable was serialized.
-   The variable-specific FormSync SQL pattern for a known-present Form variable.
-   Whether disappearance occurs during Save, reload/reconstruction, cache handling or another lifecycle stage.
-   Why FormSync Pseudo Code Generate remained disabled.
-   Exact Output=View behavior in this 2026.09.08 web-client execution.
-   Runtime-value persistence semantics in this environment.
-   Effects of explicit global-object unload versus close-only for variables.
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
| FormSync Script generation for exact selected User-scoped Form | **Replay-verified, EXP-016 + EXP-016-R2** |
| FormSync filtering/isolation to exact User-scoped target | **Replay-verified** |
| Generated SQL identifies target Form by Name + ScopeType + ScopeName | **Replay-verified** |
| Generated SQL contains generic Variables/FormID handling | **Replay-verified observation; not variable-specific proof** |
| Output=View → visible temporary page | **Unverified / unresolved in EXP-016-R2** |
| EXP-016-R2 DOM input reporting View checked / Save unchecked | **Observed DOM state only; semantic application state unresolved** |
| EXP-016-R2 Script form license state | **Unverified** |
| Two independent Script Generate executions in EXP-016-R2 | **Unverified; SQL only documented as captured twice** |
| Pseudo Code Persistent Variables category | **Observed UI surface; Generate unresolved** |
| Specific Form-variable serialization | **Unverified** |
| Runtime variable-value persistence | **Unverified** |
| Reusable Form-variable lifecycle recipe | **Unverified** |
| Storage provenance / DB durability / cache eviction | **Unverified** |
| Strong backend/session-independent persistence | **Unverified** |
