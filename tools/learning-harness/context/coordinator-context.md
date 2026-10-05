<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-010-R3 (R-20261005-235851-rw3E); specialist findings verdict: supports; 2026-10-05T16:45:19.136Z -->
<!-- FINALIZED after specialist review of EXP-010-R3 (R-20261005-235851-rw3E). Specialist verdict: supports. Authoritative EXP-010-R3 outcome: BLOCKED / non-accepted — AC-1..AC-7 recorded PASS; AC-8 exactly-one inventory proof unresolved because Session Expired invalidated the final Select Form inventory read; no replay-verified promotion. --> <!-- The early EXP-010-R3 experiment-record header saying IN PROGRESS/preflight-only is stale and contradicted by the completed record. Treat the completed T10 outcome as authoritative. --> <!-- Prior EXP-017 specialist verdict remains objects: EXP-017 BLOCKED at AC-2 rendered exact-name prerequisite; View/Generate not tested. -->

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
→ clean replay
→ replay-verified only if all required semantic postconditions reproduce
```

The **observed → replay-verified** distinction is a factory quality rule, not an Infor-defined validation level.

A run stopped because prerequisites or prohibitions cannot be satisfied is **blocked**, not evidence that the underlying product behavior failed. A semantically successful execution that violates a global prohibition is **non-accepted**.

“Fresh worker context” establishes independence only at the harness/OpenCode-session level. It does not establish independence across browser, Portal authentication, Web Client, Web Designer backend, IDO Runtime, tenant, configuration or other product sessions unless explicitly tested.

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

-   Web Client normally runs inside the Portal iframe; Web Designer opens separately.
-   Numeric Ext JS IDs drift between sessions.
-   Native/frame-scoped Playwright interaction has generally been more reliable than synthetic/low-level DOM manipulation.
-   Hidden/off-screen Ext controls can remain in the DOM. DOM/accessibility state does **not** by itself prove rendered UI state or the application state Mongoose will process.
-   EXP-017 observed disagreement between the off-screen accessibility/HTML state associated with View and the rendered Save selection. Which state Generate would consume was not established because the experiment stopped before View/Generate.
-   Direct cold ?MGForm=... navigation has been unreliable in this environment.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer recent-forms and Select Form are tested navigation/reopen paths.
-   Closing a clean Designer Form tab can produce no prompt.
-   Post-start Sign In/OK can restore access but invalidates experiments that prohibit deliberate reauthentication.
-   EXP-014 completed creation, Save, close and reopen without later reauthentication/session replacement.
-   EXP-016 navigation away from FormSync reset its working state in that execution; do not generalize this as universal product behavior.
-   EXP-016-R2, EXP-017 and EXP-010-R3 inherited existing browser/application state; none established a new authentication, backend or IDO Runtime session.
-   EXP-010-R3 demonstrated that the **Designer browser/client context can remain usable through Save→close→reopen while the separate Web Client later reports Session Expired**. This does not establish continuity of the Portal authentication session, Web Client session, IDO Runtime session, or backend Designer session.

Documented/current-product guidance indicates that **ordinary Form close is cache-preserving**: Mongoose can retain the Form and associated global objects in memory after close, and reopening can use the locally cached version until those objects are removed from memory. Exact equivalence of adjacent/current documentation to build 2026.09.08 remains an assumption.

Therefore **close-only is intentionally a weak persistence boundary**. Recovery after ordinary close/reopen is compatible with cache reuse and cannot distinguish Forms-database readback from reconstruction using retained in-memory Form/global-object state.

Form/global-object memory unload route:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Despite the literal menu label, documented semantics are broader than “global objects only”: the command removes retained form/global-object memory state; when the relevant preference is enabled, IDO metadata can also be unloaded.

Successful deliberate unload experiments showed /DesignerSession/ClearCache traffic. This is diagnostic evidence, not a supported automation/API contract.

The **Unload IDO Metadata With Forms** preference was observed enabled in earlier experiments. Form/global-object memory and IDO-metadata cache remain distinct concepts.

Factory terminology:

-   **close-only** = ordinary Designer Form-tab close/reopen without explicit form/global-object memory unload.
-   **weak persistence boundary** = ordinary close/reopen; specifically compatible with local cache reuse.
-   **new Web Designer client instance** = newly launched/rendered Designer tab/window only; not proof of a new backend/session boundary.

## Documented Form-variable baseline

Adjacent 2026.08/2026.10 documentation is the product-level baseline for the tested 2026.09.08 environment; exact build equivalence remains **unverified**.

Documented behavior indicates:

-   Global=False, Persistent=True is supported.
-   **Persistent** governs runtime value lifetime.
-   **Global** governs visibility/scope.
-   Form-level/global and persistent/temporary are independent attributes.
-   An explicitly designed Form-variable definition is Form metadata.
-   Current FormSync documentation can represent persistent Form variables under structures such as PersistentVariables().
-   Some nonpersistent variables can be created automatically when referenced and therefore do not necessarily require a separately pre-created design-time definition.

Consequently, disappearance after Save/reopen of a variable explicitly created as Form metadata remains anomalous relative to documented capability, while **Persistent=True alone does not prove that a particular design-time definition was serialized**.

Current lifecycle observations:

-   Caption + form/global-object unload: **replay-verified**.
-   Description + form/global-object unload: **replay-verified**.
-   Description + ordinary close/reopen: **replay-verified**.
-   Description + newly launched Designer: **replay-verified at UI-recovery level only**.
-   Form-level Caption + ordinary close/reopen: **observed only**.
-   EXP-010-R3 reproduced the expected Caption recovery behavior through its recorded AC-7 but was blocked at AC-8 and therefore did **not** promote the procedure.
-   Persistent=True variable immediately after Save: **observed visible**, serialization unproven.
-   Persistent=True variable after ordinary close/reopen: EXP-014 **observed absent**.
-   FormSync Script generation for one exact selected User-scoped customized Form: **replay-verified by EXP-016 + EXP-016-R2**.
-   Specific Output=View → visible Form/temporary display-page behavior remains **unverified**.

In the tested FormSync workflow, Source configuration supplied the selected customized Form definitions. Current documentation describes generated SQL as customization-definition SQL that can subsequently be executed against a destination Forms database. Generating it was non-mutating to the inspected Source Form, but the SQL itself is executable and not intrinsically read-only.

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
-   Evidence must prove semantic state transitions, not merely clicks or filenames.
-   A screenshot proves only the pixels/rendered state actually visible in it.
-   Keep **rendered-visible evidence** separate from **accessibility-derived/property evidence**.
-   Cropped/truncated rendered text does not visibly prove its complete string merely because accessibility exposes the full value.
-   If an acceptance criterion explicitly requires fully rendered proof, accessibility/DOM evidence cannot silently substitute for it.
-   Editing permission and editing scope are separate.
-   Verify customized-object identity using **Name + ScopeType + ScopeName**.
-   Version identity and storage/serialization provenance are separate questions.
-   Do not generalize across metadata classes, scopes or lifecycle boundaries.
-   Treat internal request paths, Ext IDs/stores, model IDs, numeric ScopeType values, generated SQL table/column names and statement layout as implementation details.
-   If an experiment defines a prerequisite/prohibition, obey it even when another route appears harmless.
-   Do not manipulate hidden controls or change preferences/cache settings merely to force an experiment to pass.
-   Ordinary close/reopen does not prove physical Forms-database durability; documented cache retention gives a concrete alternative explanation for recovery.
-   Caption, Description, Button Caption and Form-variable definitions are separate metadata classes.
-   **Persistent is a runtime-value-lifetime property, not proof of design-time definition persistence.**
-   Immediate client-side visibility after Save is insufficient proof that a variable definition was serialized.
-   Runtime-value semantics and variable-definition retention are separate.
-   No reusable Form-variable creation/persistence recipe has been promoted.
-   FormSync Script and Pseudo Code are different representations; do not treat them as equivalent.
-   FormSync **Script generation for an exact selected User-scoped Form** is replay-verified.
-   Do not promote off-screen/programmatically changed FormSync controls into proof of rendered semantic selection.
-   Current documentation supports the future View checkpoint: **View visibly selected + Filename visibly disabled** before Generate.
-   Generic generated SQL such as DELETE FROM Variables WHERE FormID = @FormID does **not** prove that a specific named variable exists or was serialized.
-   Positive serialization evidence must contain variable-specific identity/data.
-   Negative serialization evidence first requires proving that the chosen representation exposes a known-present variable.
-   A session-expired/recovery-obstructed Select Form result is invalid inventory evidence; zero rows under that condition prove neither absence nor cardinality.
-   **One creation operation is not the same as final inventory cardinality.** “Created once” must not be rewritten as “exactly one matching scoped Form exists” unless inventory proves it.
-   If a required final acceptance criterion is unresolved, earlier semantic success can be retained as observed/corroborating evidence but cannot promote the run to replay-verified.

Experiment status:

-   **EXP-005-R2:** blocked.
-   **EXP-006 + R2:** Caption + form/global-object unload — replay-verified.
-   **EXP-007 + R2:** Description + form/global-object unload — replay-verified.
-   **EXP-008 + R2:** Description + close/reopen — replay-verified.
-   **EXP-009 + R2:** Description + new Designer — replay-verified at UI-recovery level.
-   **EXP-010:** Form Caption + close/reopen — observed.
-   **EXP-010-R2:** blocked/non-accepted due prohibited reauthentication; corroborating only.
-   **EXP-010-R3:** **BLOCKED/non-accepted — AC-1..AC-7 recorded PASS; AC-8 exactly-one inventory proof unresolved due Session Expired; no replay promotion.**
-   **EXP-011:** blocked at preflight.
-   **EXP-012:** blocked after variable creation, before Save.
-   **EXP-013:** blocked/non-accepted; immediate post-Save variable visibility nevertheless observed.
-   **EXP-014:** blocked because post-reopen variable recovery failed.
-   **EXP-015:** blocked before intended serialization investigation completed.
-   **EXP-016:** FormSync Script-generation route observed.
-   **EXP-016-R2:** Script-generation route replay-verified; Output=View semantics unresolved.
-   **EXP-017:** blocked at rendered exact-name prerequisite; View/Generate not tested.
-   **EXP-018:** blocked at wizard-selection prerequisite.
-   **EXP-019:** fresh-dialog rendered Classic + Build from Scratch sequence observed accepted.
-   **EXP-019-R2:** fresh-dialog/rendered-dropdown/single-OK prefix replay-verified.
-   **EXP-020:** blocked during Button Caption editing before Save/close/reopen; no Button Caption recovery conclusion.

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

Classic BuildFromScratch Form creation is replay-verified.

**EXP-003 / EXP-003-R2 — Component fundamentals**

Static, Edit and Button procedures are replay-verified.

**EXP-004 — Form Variable Fundamentals**

Details → Variables is the tested design-time path. FX\_TestValueVar, Global=False, Persistent=False, Value=Seed-A disappeared after ordinary Save **2/2** and Regenerate **1/1**. This does not establish Persistent=False as causal.

**EXP-005 through EXP-010 — Form metadata lifecycle**

Caption/Description retention was progressively tested across ordinary close/reopen, form/global-object memory unload and newly launched Designer boundaries. These findings do not generalize to subordinate variables or component captions.

**EXP-011 through EXP-015 — Variable investigations**

Persistent=True investigations established immediate post-Save UI visibility in some executions but UI-level non-recovery after close/reopen in EXP-014. Serialization remains unresolved.

**EXP-016 / EXP-016-R2 — FormSync SQL definition-script generation**

Replay-verified route:

```text
Runtime FormSync
→ intended configuration
→ Filter
→ Filter Configuration = Source in tested workflow
→ Scope Type = User
→ verify User/ScopeName
→ Refresh List
→ Deselect All
→ verify Name + ScopeType + ScopeName
→ include intended Form
→ Script
→ Generate
```

Authoritative captured SQL paths:

-   evidence/EXP-016-R2/script/FS\_20261005\_102224.SQL
-   evidence/EXP-016-R2/script-t4/FS\_20261005\_102224.SQL

Generic variable-table handling in these scripts proves only that the generated Form-definition SQL has variable-related logic. It does not prove that any particular named variable was present.

**EXP-017 — FormSync View investigation**

The experiment stopped before View selection/Generate because its rendered exact-name prerequisite was not satisfied. Hidden/accessibility state could not substitute for required rendered evidence.

**EXP-018 / EXP-019 / EXP-019-R2 — Wizard selection**

A successful replay-verified recovery prefix was established:

```text
cancel inherited wizard if present
→ confirm ordinary discard prompt
→ open fresh Form Wizard Selection
→ select rendered Classic
→ select rendered Build from Scratch
→ one OK
→ first Build-from-Scratch page with Name empty
```

The coupled sequence is proven; which constituent action caused earlier failures is not.

**EXP-020 — Button Caption**

Exact Button Caption entry was not reliably established before Save. No Button Caption close/reopen behavior was tested.

**EXP-010-R3 — Form Caption ordinary close/reopen replay**

Authoritative final status is **BLOCKED / non-accepted**, despite the stale preflight-only header near the top of its experiment record.

Observed sequence:

-   preflight case-insensitive Select Form filter showed FX\_FormPropertyLab13 absent, with a positive control;
-   one creation operation produced the intended visible User-scope classic BuildFromScratch target;
-   baseline properties were recorded;
-   Form-level Caption was changed to Form Property Caption Close Only Replay 2;
-   exactly one ordinary Designer Save was recorded;
-   target was closed through its ordinary Form-tab close;
-   target was reopened through the supported Designer Form-menu recent-forms path;
-   recovery occurred in the **same Web Designer client/browser context, with no deliberate reauthentication, Designer replacement or explicit session-replacement action observed before reopen**;
-   the worker recorded AC-1..AC-7 PASS;
-   the dedicated final exactly-one inventory proof in AC-8 could not complete because the Web Client reported Session Expired.

Do **not** describe this as proven continuity of the same authenticated Portal/Web Client session, IDO Runtime session or backend Designer session.

Do **not** describe AC-2 as proving “exactly one matching Form exists.” It proves one controlled creation operation and a visible target. Final inventory cardinality remains unresolved.

Evidence-modality caution for AC-3/4/7:

-   evidence/EXP-010-R3/17-baseline-properties-design-group.png reportedly truncates at least some full property strings in rendered fields; full values were also obtained through accessibility/property reads.
-   evidence/EXP-010-R3/24-t6-caption-input-typed.png reportedly shows only the tail of the Caption in the rendered input while accessibility exposed the full literal.
-   evidence/EXP-010-R3/25-t6-caption-committed-dirty.png reportedly has a truncated property-row value; another rendered location was reported to show the complete Caption.
-   Post-Save evidence item **27** and post-reopen evidence item **31** require manual image inspection if a future harness decision specifically demands fully rendered exact-value proof.
-   Therefore the record's AC-3/4/7 PASS classification is preserved as the worker's completed acceptance result, but **which exact values are proven through rendered pixels versus accessibility/property evidence remains partially unverified from the supplied review alone**.

Decisive AC-8 blocker evidence:

-   evidence/EXP-010-R3/32-t10-select-form-filter-lab13-one-row.png — Select Form filtered for FX\_FormPropertyLab13 with an overlapping Session Expired condition. The resulting zero-row grid is an invalid inventory read and proves neither absence nor exactly-one.
-   evidence/EXP-010-R3/33-t10-blocker-session-expired-prompt.png — Session Expired / “Your session has expired.” prompt. It was left untouched.

Repository audit passed: only the EXP-010-R3 record/evidence paths were untracked; no recipe, environment file, AGENTS.md, or prior experiment record was changed.

# 5\. Negative findings / blocked topics and why

-   **Form-variable definition retention remains unresolved.** UI disappearance does not establish serialization failure.
-   **Form Caption ordinary close/reopen is still not replay-verified.** EXP-010 is the accepted observation; EXP-010-R2 violated the reauthentication prohibition; EXP-010-R3 reproduced the semantic sequence but its required final inventory audit was invalidated by Session Expired.
-   **EXP-010-R3 postcondition inventory cardinality remains unresolved.** One creation action was performed, but the dedicated final exactly-one inventory check did not complete validly.
-   **EXP-010-R3 authentication/backend continuity is unproven.** The boundary established is same Designer client/browser context with no deliberate reauthentication or Designer replacement observed before reopen.
-   **EXP-010-R3 rendered-only proof for every exact baseline/comparison value remains partially unverified** without manual inspection of evidence 17, 27 and 31. Accessibility-derived exact values must remain identified as such.
-   **Button Caption close/reopen is untested.** EXP-020 blocked before Save.
-   **FormSync View behavior remains unverified.** EXP-017 stopped before View selection/Generate.
-   **Session expiry is a recurring experimental hazard.** Evidence obtained through an expired/recovery-obstructed Web Client state must not be treated as valid inventory evidence.
-   Ordinary close/reopen does not prove physical Forms-database durability; product documentation explicitly permits retained in-memory Form/global-object state after close.
-   No evidence yet establishes cache eviction, backend commit mechanics, IDO Runtime-session independence, or stronger authentication/session independence for the close-only observations.

# 6\. Open questions and sensible next directions

1.  **Form Caption close/reopen replay:** a future clean replay should reuse the successful semantic sequence but complete the final exactly-one inventory audit without session recovery. EXP-010-R3 must not be retroactively promoted.
    
2.  **Evidence modality for EXP-010-R3:** if rendered-only exactness matters to a future decision, manually inspect:
    
    -   evidence/EXP-010-R3/17-baseline-properties-design-group.png
    -   evidence item 27 from the same directory
    -   evidence item 31 from the same directory  
        Record explicitly which values are fully rendered versus accessibility-derived.
3.  **Form-variable serialization:** first establish a representation known to expose a controlled present variable, then look for variable-specific identity/data. Generic generated Variables SQL remains insufficient.
    
4.  **Button Caption editing:** establish a small replayable exact-literal editing procedure before attempting Save/close/reopen lifecycle testing.
    
5.  **FormSync View:** require the documented semantic precondition **View visibly selected + Filename visibly disabled** before Generate, then verify the expected visible Form/display-page result rather than file/download output.
    
6.  **Browser/session characterization:** continue distinguishing Designer client continuity from Portal/Web Client authentication, IDO Runtime and backend Designer-session continuity. A responsive Designer tab does not prove the separate Web Client inventory path remains authenticated.
    
7.  Continue testing one lifecycle boundary at a time. For close-only experiments, explicitly remember that documented Mongoose cache retention means successful recovery is compatible with cached state and is therefore weaker than an unload-backed or independently serialized readback result.
