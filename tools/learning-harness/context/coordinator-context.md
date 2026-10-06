<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-023 (R-20261006-151910-W6Bn); specialist findings verdict: objects; 2026-10-06T07:33:22.008Z -->
<!-- finalized after EXP-023 specialist review (R-20261006-151910-W6Bn). EXP-023 remains BLOCKED. Two native click attempts are recorded; both reportedly failed before the Designer command received the pointer action. The experiment text is internally inconsistent about whether the second corrected click was an authorized recovery or a prohibited retry, so recovery-policy compliance is unresolved. No whole-run claim is made that no Designer appeared after attempt 2 because no final page/window enumeration after that attempt is identified in the supplied evidence. --> <!-- EXP-021 remains an ACCEPTED observation only: Static component Caption recovery across ordinary close/reopen was observed at UI level; no replay-verified promotion and no database/cache/backend-session claim. EXP-010-R3 remains BLOCKED/non-accepted because final inventory proof was invalidated by Session Expired. EXP-017 remains BLOCKED before View/Generate. -->

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
-   Factory experiments use explicitly confirmed **User-scope** editing when required.
-   For scoped Form-version identity checks, use **Form name + ScopeType + ScopeName**. A Designer status bar showing User scope establishes current editing scope, not by itself the exact stored version identity of every already-loaded Form.
-   User, Group and Site are customized versions; Vendor Default is the base/vendor version.
-   Documented precedence: **User → Group → Site → Vendor Default**.
-   Current learning lane: classic **BuildFromScratch** Forms.
-   Browser automation uses Playwright MCP through OpenCode.

Environment/browser observations:

-   Web Client normally runs inside the Portal iframe; Web Designer opens separately.
-   Numeric Ext JS IDs drift between sessions and are implementation details, not supported product contracts.
-   Native/frame-scoped Playwright interaction has generally been more reliable than synthetic/low-level DOM manipulation.
-   Hidden/off-screen Ext controls can remain in the DOM. DOM/accessibility state does **not** by itself prove rendered UI state or what Mongoose will process.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer recent-forms and Select Form are tested navigation/reopen paths.
-   Closing a clean Designer Form tab can produce no prompt.
-   A session-expired Select Form result is invalid inventory evidence.
-   EXP-010-R3 showed that Designer can remain usable while the separate Web Client later reports **Session Expired**. This does not prove continuity of Portal authentication, Web Client, IDO Runtime or backend Designer sessions.
-   EXP-021 permitted and used session establishment **before mutation**; this does not retroactively validate runs that prohibited reauthentication.
-   EXP-023 showed a Web Client UI that rendered an already-signed-in state; no login was performed during EXP-023. This does not by itself prove that a new server-backed request would have succeeded.
-   EXP-023 supported the narrow browser observation that **no rendered runtime Form/tab was visible in the Web Client** at the inspected preflight state. Hidden, cached or internal active-Form state was not established.
-   The second rendered Designer split control previously correlated with the successful launch route in EXP-009/R2 was present/enabled in EXP-023; in that browser state its implementation ID was mgtoolbarbutton-1126.
-   During EXP-023, an x-mask intercepted pointer events while the Select Form dialog was visible. Attribution of that mask specifically to the Select Form dialog is **plausible but unverified**.

Current documentation indicates that an ordinary Form close **can preserve Form/global-object state in memory** and reopening can use a locally cached version. Exact applicability of adjacent/current 2026.10 documentation to build 2026.09.08 remains **unverified**.

Therefore ordinary close is **not a reliable cache-eviction or database-readback boundary**. Factory terminology retains **weak persistence boundary** for close-only tests.

Explicit form/global-object unload route:

```text
Form
→ Definition
→ Unload All Global Form Objects
```

Successful deliberate unload experiments showed /DesignerSession/ClearCache traffic. This is diagnostic evidence, not a supported automation/API contract.

The **Unload IDO Metadata With Forms** preference was observed enabled earlier. Form/global-object memory and IDO-metadata cache remain distinct concepts.

Factory terminology:

-   **close-only** = ordinary Designer Form-tab close/reopen without explicit unload.
-   **weak persistence boundary** = ordinary close/reopen; compatible with retained cached state.
-   **new Web Designer client instance** = newly launched/rendered Designer page/window only; not proof of a new backend/session boundary.
-   **additional Designer while retaining existing Designer** = **unverified**; EXP-023 did not establish whether the launch command would create a new client or focus/reuse an existing one.

## Documented Form-variable baseline

Adjacent 2026.08/2026.10 documentation is the product-level baseline for 2026.09.08; exact build equivalence remains **unverified**.

Documented behavior indicates:

-   Global=False, Persistent=True is supported.
-   **Persistent** governs runtime value lifetime.
-   **Global** governs visibility/scope.
-   Form-level/global and persistent/temporary are independent attributes.
-   An explicitly designed Form-variable definition is Form metadata.
-   FormSync representations can contain structures such as PersistentVariables().
-   Some nonpersistent variables can be created automatically when referenced and therefore do not necessarily imply a separately pre-created design-time definition.

Current lifecycle observations:

-   Caption + form/global-object unload: **replay-verified**.
-   Description + form/global-object unload: **replay-verified**.
-   Description + ordinary close/reopen: **replay-verified**.
-   Description + newly launched Designer: **replay-verified at UI-recovery level only**.
-   Form-level Caption + ordinary close/reopen: **observed only**.
-   Static component Caption + ordinary close/reopen: **observed only by EXP-021**.
-   Persistent=True variable immediately after Save: **observed visible**, serialization unproven.
-   Persistent=True variable after ordinary close/reopen: EXP-014 **observed absent**.
-   FormSync Script generation for one exact selected User-scoped customized Form: **replay-verified by EXP-016 + EXP-016-R2**.
-   Specific Output=View visible display behavior remains **unverified**.
-   Additional-Designer launch with an existing Designer retained: **unverified / blocked in EXP-023**.

Generated FormSync SQL is customization-definition SQL that can subsequently be executed against a destination Forms database. Generation was non-mutating to the inspected Source Form, but the generated SQL itself is executable and not intrinsically read-only.

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
-   A screenshot proves only the pixels actually visible in it.
-   Keep rendered-visible evidence separate from accessibility/property evidence.
-   Verify customized-object identity using **Name + ScopeType + ScopeName** when exact scoped version identity matters.
-   Current editing scope does not by itself prove the scoped identity of an already-cached Form.
-   Version identity and storage/serialization provenance are separate.
-   Do not generalize across metadata classes, scopes or lifecycle boundaries.
-   Treat request paths, Ext IDs/stores, model IDs, numeric ScopeType values and generated SQL layout as implementation details.
-   Ordinary close/reopen does not prove Forms-database durability or cache eviction.
-   Form Caption, Description, Static Caption, Button Caption and Form-variable definitions are separate metadata classes.
-   **Persistent is a runtime-value-lifetime property, not proof of design-time definition persistence.**
-   Immediate post-Save UI visibility is insufficient proof of variable serialization.
-   No reusable Form-variable creation/persistence recipe has been promoted.
-   Generic Variables/FormID SQL does **not** prove a particular named variable exists or was serialized.
-   Positive serialization evidence must contain variable-specific identity/data.
-   Negative serialization evidence first requires proving that the inspected representation exposes a known-present variable.
-   A session-expired/recovery-obstructed Select Form result proves neither absence nor cardinality.
-   One creation operation is not the same as final inventory cardinality.
-   Failed tooling must not trigger blind replay of actions that might already have side effects.
-   After an interrupted or ambiguous browser action, inspect the postcondition before any authorized corrective interaction.
-   Distinguish **click attempts** from **successful command activation**.
-   A visible/enabled control is not proof it is pointer-actionable through a modal/mask state.
-   Failure to activate a command establishes nothing about what that command would have done.
-   When a corrected retry conflicts with an experiment's explicit no-retry prohibition, protocol compliance must be treated as unresolved unless authorization is explicitly documented.
-   A whole-run browser postcondition cannot be inferred from an earlier screenshot when another interaction occurred afterward.
-   If a required acceptance criterion is unresolved, the run cannot be promoted.
-   A single accepted experiment establishes **observed**, not replay-verified, behavior.

Experiment status:

-   **EXP-005-R2:** blocked.
-   **EXP-006 + R2:** Caption + unload — replay-verified.
-   **EXP-007 + R2:** Description + unload — replay-verified.
-   **EXP-008 + R2:** Description + close/reopen — replay-verified.
-   **EXP-009 + R2:** Description + new Designer — replay-verified at UI-recovery level.
-   **EXP-010:** Form Caption + close/reopen — observed.
-   **EXP-010-R2:** blocked/non-accepted due prohibited reauthentication.
-   **EXP-010-R3:** blocked/non-accepted; final inventory unresolved due Session Expired.
-   **EXP-011–015:** variable investigations blocked/incomplete; no serialization recipe.
-   **EXP-016:** FormSync Script route observed.
-   **EXP-016-R2:** Script route replay-verified; View semantics unresolved.
-   **EXP-017:** blocked before rendered View/Generate prerequisite.
-   **EXP-018:** blocked at wizard-selection prerequisite.
-   **EXP-019:** fresh-dialog Classic + Build from Scratch sequence observed.
-   **EXP-019-R2:** wizard prefix replay-verified.
-   **EXP-020:** blocked during Button Caption editing before persistence testing.
-   **EXP-021:** accepted observation — Static Caption recovered across one ordinary Save→close→recent-forms reopen; not replay-verified.
-   **EXP-023:** **BLOCKED**. Two native click attempts are recorded. Both reportedly encountered pointer interception before successful Designer command activation. Whether attempt 2 was an authorized corrected recovery or a violation of the no-retry prohibition is unresolved. No final browser page/window enumeration after attempt 2 is identified.

# 4\. Lessons learned and pitfalls per experiment

**EXP-001–003/R2:** environment fingerprint, BuildFromScratch creation and Static/Edit/Button fundamentals established verified foundations.

**EXP-004:** Details → Variables is the tested design-time path. FX\_TestValueVar disappeared after ordinary Save **2/2** and Regenerate **1/1**. Persistent=False causality is unproven.

**EXP-005–010:** Caption/Description lifecycle findings do not generalize to variables or component captions.

**EXP-011–015:** Persistent=True investigations showed immediate post-Save visibility in some executions but post-close/reopen absence in EXP-014. Serialization remains unresolved.

**EXP-016/R2:** exact User-scoped FormSync Script generation is replay-verified. Generic Variables/FormID handling does not establish a particular saved variable.

**EXP-017:** hidden/accessibility View state could not replace the required rendered prerequisite. View/Generate remained untested.

**EXP-018 / EXP-019 / EXP-019-R2:** replay-verified fresh-dialog wizard prefix:

```text
cancel inherited wizard if present
→ confirm normal discard prompt
→ open fresh Form Wizard Selection
→ select rendered Classic
→ select rendered Build from Scratch
→ one OK
→ first Build-from-Scratch page with Name empty
```

This proves the coupled sequence, not which constituent action caused success.

**EXP-020:** Button Caption literal entry was not reliably established. No persistence boundary was tested.

**EXP-010-R3:** Caption recovery progressed through its lifecycle checks, but final exactly-one inventory proof was invalidated by Session Expired.

-   evidence/EXP-010-R3/32-t10-select-form-filter-lab13-one-row.png — Select Form overlapped by Session Expired; displayed zero rows are invalid inventory evidence.
-   evidence/EXP-010-R3/33-t10-blocker-session-expired-prompt.png — Session Expired prompt left untouched.

**EXP-021:** one Static Caption was observed recovered unchanged across one ordinary close/reopen at UI level. This remains a weak-boundary observation, not proof of Forms-database durability, cache eviction or replay verification.

**EXP-023 — Additional Web Designer Launch While Retaining Existing Client**

Preflight showed a Web Client UI in an already-signed-in rendered state; no login was performed. The corrected Web Client capture supported that no **rendered** runtime Form/tab was visible. The inherited Designer visibly retained its existing tabs/state, and its current editing scope was visibly User; this status-bar evidence alone does not establish the stored scoped-version identity of each already-loaded Form.

Two native click attempts are recorded against the second Designer split control:

1.  **Attempt 1:** Playwright timed out with an x-mask intercepting pointer events. A subsequent inspection established that no new rendered Designer client was observed at that point.
2.  **Attempt 2:** described by the worker as a corrected click after a fresh snapshot; it also reportedly encountered pointer interception. The supplied record does **not** identify an equivalent final browser page/window enumeration after this attempt.

The experiment's own text simultaneously prohibited retry after error and described a corrected second attempt. Therefore whether attempt 2 was authorized recovery or a protocol violation is **unresolved**. In either case, neither click is evidenced as successfully activating the Mongoose Designer launch command.

Decisive evidence and limits:

-   evidence/EXP-023/04-webclient-no-form-open-corrected.png — inspected Web Client capture supporting the narrow claim that no rendered runtime Form/tab was visible. It does not exclude hidden/cached/internal Form state.
-   evidence/EXP-023/05-launch-attempt1-mask-interception.png — inspected visible state after attempt 1; supports no visible launch effect after that attempt. It does not prove the final state after attempt 2 and does not establish causal ownership of the mask.
-   evidence/EXP-023/01-preflight-designer-inherited-state.png — relevant pixel evidence for visible inherited Designer tabs/state and User editing-scope display.
-   evidence/EXP-023/03-webclient-select-form-dialog-preserved.png — supports the pre-existing Select Form dialog state.
-   evidence/EXP-023/02-preflight-webclient-no-form-open.png — **do not use for Web Client claims**; the experiment record identifies it as a defective Designer-frame capture.
-   evidence/EXP-023/snapshot-webclient-toolbar.txt and snapshot-webclient-toolbar-enabledstate.txt — accessibility evidence that the Designer controls were present/enabled; not proof of pointer actionability.
-   evidence/EXP-023/snapshot-webclient-runtimeformtabs.txt — supports absence of rendered runtime Form tabs at the inspected point; not hidden-state evidence.
-   evidence/EXP-023/snapshot-designer-tabs-toolbar.txt and snapshot-designer-statusbar.txt — support inherited rendered Designer state and current editing scope.

No Form was intentionally opened, closed, created, modified or saved; no login, unload, cache clear or client closure was performed by EXP-023. The experiment establishes no Caption recovery result, no additional-client capability, no backend-session independence and no persistence result.

# 5\. Negative findings / blocked topics and why

-   **Form variables:** immediate UI visibility has not established serialization; close/reopen loss remains unresolved. No verified variable-persistence procedure.
-   **Form Caption replay:** later attempts have been blocked/non-accepted; EXP-010 remains observed only.
-   **Static Caption:** EXP-021 remains observed only.
-   **Button Caption:** exact literal property entry was not established in EXP-020; lifecycle persistence was never reached.
-   **FormSync View:** rendered Output=View semantics remain unverified.
-   **Session expiry:** can invalidate inventory reads while a Designer still appears usable.
-   **EXP-017 hidden controls:** accessibility/DOM state cannot substitute for required rendered selection state.
-   **Additional Designer with existing Designer retained:** EXP-023 did not successfully activate the launch command, so new-client-versus-focus/reuse remains unknown.
-   **EXP-023 recovery compliance:** two click attempts occurred despite no-retry wording; whether attempt 2 was authorized is unresolved.
-   **EXP-023 final postcondition:** no final page/window enumeration after attempt 2 is identified, so “no new Designer client appeared during the entire run” is **not proven**.
-   **EXP-023 mask ownership:** Select Form was visible when x-mask intercepted pointer events, but causation/ownership remains **unverified**.
-   **Inherited EXP-021-R4 / EXP-022 property state:** preserved rather than resolved by EXP-023.

# 6\. Open questions and sensible next directions

-   Test, in a separately approved bounded experiment, whether the **Designer split-button UI command** can create a distinct additional rendered Designer while retaining the original.
-   A future experiment may explicitly permit closing the pre-existing Select Form inventory dialog before the one launch activation. This would be a new starting condition, not a continuation or retry of EXP-023.
-   Define browser/client-level distinctness before testing: for example, a newly enumerated browser page/window with a Designer URL plus independently rendered editing-scope UI. This would still **not** prove distinct Portal, authentication, IDO Runtime or Designer backend sessions.
-   Require explicit action-budget wording distinguishing one **click attempt** from one **successful command activation**, and specify whether a corrected locator/click is permitted after pointer interception.
-   After the final permitted interaction, always capture a final browser page/window enumeration when “new client versus no new client” is an acceptance criterion.
-   Static Caption still needs a clean independent replay before promotion from observed to replay-verified.
-   Form-variable work requires variable-specific serialization evidence before any persistence recipe can be promoted.
-   Keep lifecycle experiments one boundary at a time: ordinary close, explicit form/global-object unload, newly launched Designer, and stronger session/cache boundaries must remain distinct.
