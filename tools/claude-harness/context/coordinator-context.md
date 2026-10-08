<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-024-R2 (R-20261006-160452-YWtc); specialist findings verdict: objects; 2026-10-06T08:20:59.838Z -->
<!-- finalized after EXP-024-R2 specialist review (R-20261006-160452-YWtc); 2026-10-06 --> <!-- EXP-024-R2 is an ACCEPTED clean replay at browser-observation level. "Clean replay" here means fresh harness/OpenCode execution against an inherited browser/product state, not a fresh Portal/Web Client/Web Designer/backend session. It reproduced the EXP-024 browser outcome: a fresh populated Select Form dialog was opened and cancelled normally; the previously observed EXP-023 visible obstruction did not recur; one Playwright click on the correlated "Open designer in a new window" control completed without actionability/interception error; immediate controlled-browser enumeration still contained exactly the same retained Web Client and original Designer pages. The intended additional-Designer procedure remains unverified and is NOT replay-verified because the documented new-tab/window postcondition was not observed. Cause remains unresolved. -->

# 1\. Project and workflow

The project is an autonomous **Infor Mongoose factory** being built in C:\\AI\\mongoose-factory. Its long-term goal is to take a natural-language request, optionally with reference images, and reliably build Mongoose Forms/portal-related artifacts using browser automation and a growing body of verified procedures and recipes.

There are three roles:

-   **Coordinator (ChatGPT):** selects bounded experiments, reviews worker evidence, controls recovery and promotion.
-   **OpenCode worker:** operates Mongoose through Playwright MCP and records experiment/evidence artifacts.
-   **Infor Mongoose specialist GPT:** supplies domain guidance. Advice remains candidate guidance until target-environment evidence establishes it.

Preferred learning pattern:

```text
candidate/specialist guidance
→ controlled EXP-N browser experiment
→ observed procedure/result
→ fresh OpenCode session
→ clean replay
→ replay-verified only if all required semantic postconditions reproduce
```

The **observed → replay-verified** distinction is a factory quality rule, not an Infor-defined validation level.

A run stopped because prerequisites or prohibitions cannot be satisfied is **blocked**, not evidence that the underlying product behavior failed. A semantically successful execution that violates a global prohibition is **non-accepted**.

“Fresh worker context” establishes independence only at the harness/OpenCode-session level. It does not establish independence across browser, Portal authentication, Web Client, Web Designer backend, IDO Runtime, tenant, configuration or other product sessions unless explicitly tested. A factory “clean replay” may therefore inherit product/browser state unless the experiment explicitly requires fresh product sessions.

# 2\. Environment facts that matter

Current proven environment:

-   Mongoose Web Client / Web Designer / application DB / Form definitions DB: **2026.09.08**
-   Infor OS Portal: **2026.09.00**
-   Tenant: **G6R8LJ9Q4E8C2Z8Y\_DEM**
-   Configuration: **G6R8LJ9Q4E8C2Z8Y\_MONGOOSE\_DEM\_DEFAULT**
-   Editing permission: **Site Developer**
-   Factory experiments use explicitly confirmed **User scope** where required.
-   Exact customized Form identity uses **Form name + ScopeType + ScopeName**.
-   User, Group and Site are customized versions; Vendor Default is the base version.
-   Documented precedence: **User → Group → Site → Vendor Default**.
-   Current learning lane: classic **BuildFromScratch** Forms.
-   Browser automation uses Playwright MCP through OpenCode.

Environment/browser observations:

-   Web Client normally runs inside the Portal iframe; Web Designer opens separately.
-   Ext JS numeric IDs drift between sessions and are implementation details.
-   Native/frame-scoped Playwright interaction has generally been more reliable than synthetic DOM manipulation.
-   Hidden/off-screen Ext controls can remain in the DOM. DOM/accessibility presence alone does not prove rendered state or product processing.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer recent-forms and Select Form are tested navigation/reopen paths.
-   Closing a clean Designer Form tab can produce no prompt.
-   A session-expired Select Form result is invalid inventory evidence.
-   EXP-010-R3 showed Designer can remain usable while the separate Web Client reports **Session Expired**; this does not establish continuity of Portal authentication, Web Client, IDO Runtime or backend Designer sessions.
-   EXP-021 permitted session establishment before mutation; that does not retroactively validate runs that prohibited reauthentication.
-   EXP-023/024/R2 showed a rendered signed-in Web Client shell with no visible sign-in/session-establishment challenge. This is rendered-state evidence only; it does **not** establish authentication identity, continuity, or readiness of the application/IDO/Designer launch path.
-   EXP-024-R2 additionally showed a fresh Select Form dialog populate successfully. Its corresponding runform → 200 supports only that this Select Form request returned successfully at HTTP level; the populated dialog is the stronger semantic liveness evidence for that specific operation. Neither proves that the later Designer-launch command was processed.
-   The launch action should be identified semantically as **Open designer in a new window**. In the tested environment, the correlated control was the second rendered Designer-labeled control, with implementation ID mgtoolbarbutton-1126 and accessibility ref f14e39; neither identifier is a supported product contract.
-   EXP-023 observed an x-mask intercepting pointer events while Select Form was open. Specific causation by Select Form remains **unverified**.
-   EXP-024 closed its inherited Select Form dialog with ordinary **Cancel**. Afterwards the dialog was visibly gone, the launch surface rendered unobstructed, and a Playwright click on the launch control completed without the EXP-023 interception timeout.
-   EXP-024-R2 reproduced that browser-level sequence from a fresh worker/harness execution while **inheriting the same browser and original Designer state**. It is independent only at harness/OpenCode-session level.
-   In EXP-024-R2, a fresh Select Form dialog populated; Cancel removed the rendered dialog; the previously observed visible obstruction did not recur; the launch control appeared visible/enabled; and the one authorized Playwright click completed without actionability/interception error.
-   “Click dispatched” may be retained as harness shorthand only. It means the automation click completed without Playwright actionability/interception failure. It does **not** prove that a Mongoose handler ran, window.open executed, navigation occurred, a server request was generated, or any backend launch operation was processed.
-   Immediate browser enumeration after the EXP-024 and EXP-024-R2 clicks still contained exactly the same two pages in the **controlled Playwright browser context**: the retained Web Client and retained original Designer.
-   This does not prove that no popup was blocked before entering the controlled context, no other OS/browser process existed, no transient page appeared, no surface was briefly reused/focused, or no backend/client-side processing occurred.
-   No editing-scope dialog was observed in the inspected controlled pages after the EXP-024 or EXP-024-R2 launch clicks. Do **not** infer that such UI could not have appeared transiently, in another surface, or outside the controlled context.
-   Current Mongoose documentation describes **Open designer in a new window** as opening Web Designer in a new browser tab/window. EXP-024 and EXP-024-R2 therefore reproduced **non-production of that documented rendered UI result under the tested retained-Designer condition**.
-   The documentation reviewed does not establish special behavior when another Designer client is already retained, so these observations do **not** prove that Mongoose prohibits multiple Designers.
-   Exact applicability of adjacent/current 2026.x/2026.10 documentation to build 2026.09.08 remains **unverified**.
-   Equality of an observed inforSessionId URL parameter establishes only equality of that parameter value. It does not prove authentication-context continuity, application-session identity, IDO Runtime-session identity or backend Designer-session identity.

Current documentation indicates ordinary Form close can preserve Form/global-object state in memory. Exact applicability to 2026.09.08 remains **unverified**. Therefore ordinary close is a **weak persistence boundary**, not reliable database-readback proof.

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
-   **weak persistence boundary** = ordinary close/reopen; cached recovery remains possible.
-   **new Web Designer client instance** = newly rendered Designer page/window only; not proof of a new backend/session.
-   **additional Designer while retaining existing Designer** = no successful procedure established. EXP-024 and EXP-024-R2 both completed the authorized browser click without interception but did not enumerate the documented additional Designer page/window.

## Documented Form-variable baseline

Adjacent 2026.08/2026.10 documentation is the product-level baseline for 2026.09.08; exact build equivalence remains **unverified**.

Documented behavior indicates:

-   Global=False, Persistent=True is supported.
-   **Persistent** governs runtime value lifetime.
-   **Global** governs visibility/scope.
-   Form-level/global and persistent/temporary are independent.
-   An explicitly designed Form-variable definition is Form metadata.
-   FormSync representations can contain structures such as PersistentVariables().
-   Some nonpersistent variables can be created automatically when referenced.

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
-   Specific Output=View visible-display behavior remains **unverified**.

Generated FormSync SQL contains definitions for selected custom objects and is executable against a target Forms database. Generic generated SQL remains insufficient to prove serialization or existence of a particular named experimental variable.

# 3\. Decisions and rules established so far

Permanent progression:

```text
candidate guidance
→ observed
→ replay-verified
```

Core rules:

-   Modify only factory-owned FX\_ artifacts.
-   Never weaken security or expose credentials.
-   Keep each experiment limited to one new capability.
-   Read current state before retrying; never blindly repeat an action that may have side effects.
-   Record blockers, negative findings and corrections.
-   Evidence must prove semantic state transitions, not merely clicks, filenames or headings.
-   A screenshot proves only the pixels actually visible and inspected.
-   Keep rendered-visible evidence separate from accessibility/property evidence.
-   Verify scoped identity with **Name + ScopeType + ScopeName** when exact stored-version identity matters.
-   Current scope bar does not by itself prove identity of an already-loaded Form version.
-   Version identity and serialization/storage provenance are separate.
-   Do not generalize across metadata classes, scopes or lifecycle boundaries.
-   Treat request paths, Ext IDs/stores, numeric ScopeType values and generated SQL layout as implementation details.
-   Ordinary close/reopen does not prove Forms-database durability or cache eviction.
-   Form Caption, Description, Static Caption, Button Caption and Form-variable definitions are separate metadata classes.
-   **Persistent is a runtime-value-lifetime property, not proof of design-time definition persistence.**
-   Immediate post-Save UI visibility is insufficient proof of variable serialization.
-   Generic Variables/FormID SQL does **not** prove a particular named variable exists.
-   Positive serialization evidence must contain variable-specific identity/data.
-   Negative serialization evidence first requires proving the inspected representation exposes a known-present variable.
-   A session-expired/recovery-obstructed Select Form result proves neither absence nor cardinality.
-   Distinguish a **click attempt**, a Playwright click that **completed without actionability error**, and a proven **Mongoose command outcome**.
-   A visible/enabled control does not prove pointer-actionability through modal/mask state.
-   A Playwright click completing without interception does not prove the application's event handler ran or the advertised command result occurred.
-   After an ambiguous browser action, inspect and enumerate the postcondition before any authorized corrective interaction.
-   Page count/final screenshots do not prove absence of transient focus changes.
-   Browser page/window enumeration is scoped to the controlled browser context; do not treat it as proof of every OS/browser/backend state.
-   Never infer authentication or backend-session identity solely from rendered shell state or equality of inforSessionId.
-   When a corrected retry conflicts with an explicit no-retry prohibition, protocol compliance remains unresolved unless explicit authorization exists.
-   If a required acceptance criterion is unresolved, the run cannot be promoted.
-   Reproducing a negative/ambiguous observation does not turn an unsuccessful intended procedure into replay\_verified.

Browser checkpoint for launch/lifecycle experiments:

```text
enumerate controlled pages/windows first
→ capture rendered/dialog state
→ identify target command semantically
→ check visible/interception prerequisites
→ arm any authorized page/popup/console/network observation before the decisive click
→ perform only the authorized interaction
→ immediately enumerate pages/windows again
→ capture final rendered/accessibility/telemetry state
→ classify only what the evidence supports
```

Experiment status:

-   **EXP-005-R2:** blocked.
-   **EXP-006 + R2:** Caption + unload — replay-verified.
-   **EXP-007 + R2:** Description + unload — replay-verified.
-   **EXP-008 + R2:** Description + close/reopen — replay-verified.
-   **EXP-009 + R2:** Description + new Designer — replay-verified at UI-recovery level only.
-   **EXP-010:** Form Caption + close/reopen — observed.
-   **EXP-010-R2/R3:** blocked/non-accepted.
-   **EXP-011–015:** variable investigations blocked/incomplete; no serialization recipe.
-   **EXP-016/R2:** FormSync Script route replay-verified; View semantics unresolved.
-   **EXP-017:** blocked before rendered View/Generate prerequisite.
-   **EXP-018:** blocked at wizard-selection prerequisite.
-   **EXP-019/R2:** fresh-dialog Classic + Build from Scratch wizard prefix replay-verified.
-   **EXP-020:** blocked during Button Caption editing.
-   **EXP-021:** accepted observation — Static Caption recovered across Save→ordinary close→recent-forms reopen; not replay-verified.
-   **EXP-021-R2/R4:** blocked/non-accepted.
-   **EXP-022:** blocked/non-accepted.
-   **EXP-023:** **BLOCKED**; mask interception and recovery-policy uncertainty.
-   **EXP-024:** **ACCEPTED browser-level observation**; unobstructed Playwright click, no additional controlled Designer page enumerated.
-   **EXP-024-R2:** **ACCEPTED clean-replay browser observation**; fresh worker/harness execution inherited the browser/product state and reproduced the unobstructed-click/no-new-controlled-page result. Intended additional-Designer procedure remains **unverified**; no candidate\_procedure or replay\_verified promotion.

# 4\. Lessons learned and pitfalls per experiment

-   **EXP-002/R2:** basic classic BuildFromScratch Form creation is replay-verified.
-   **EXP-003/R2:** verified Static/Edit/Button component fundamentals; implementation IDs/events are diagnostic only.
-   **EXP-004:** FX\_TestValueVar disappeared after ordinary Save 2/2 and Regenerate 1/1. This is observed negative evidence, not a supported variable procedure.
-   **EXP-011–015:** variable retention/serialization remains unresolved. EXP-014 showed a Persistent=True variable visible immediately after Save but absent after ordinary close/reopen; immediate visibility did not prove serialization.
-   **EXP-016/R2:** FormSync **Script** generation is replay-verified for the tested exact scoped Form; generic generated SQL does not prove named-variable serialization.
-   **EXP-018/019/R2:** wizard selections are coupled; using a fresh dialog and explicitly selecting **Classic → Build from Scratch** became the verified prefix.
-   **EXP-020:** Button Caption lifecycle behavior remains unproven.
-   **EXP-021:** Static Caption recovered across the tested weak close/reopen boundary once; no accepted replay yet.
-   **EXP-023:** modal/mask state can make a rendered enabled-looking launch control non-actionable.
-   **EXP-024:** after ordinary Cancel, the previously observed obstruction did not recur; the Playwright click completed; the documented additional page/window was not enumerated.
-   **EXP-024-R2:** reproduced the same browser outcome from a fresh worker/harness execution while preserving inherited browser/Designer state. This strengthens confidence in the **reproducibility of the observed browser outcome**, not in success of the intended launch procedure.
-   EXP-024-R2's Select Form runform → 200 is request-level evidence only. The visible populated dialog is the stronger evidence that this particular Web Client operation was live.
-   There is currently **no launch-click-correlated telemetry** establishing whether the decisive click caused a popup lifecycle event, navigation, client-side exception, network request, or no observable event.
-   Popup blocking remains unresolved because controlled page enumeration alone cannot establish whether browser UI blocked a popup before it entered the automation context.

Decisive EXP-024-R2 evidence paths:

-   evidence/EXP-024-R2/01-designer-preflight.png
-   evidence/EXP-024-R2/snapshot-webclient-preflight.txt
-   evidence/EXP-024-R2/02-webclient-preflight.png
-   evidence/EXP-024-R2/snapshot-webclient-preflight-active.txt
-   evidence/EXP-024-R2/03-select-form-dialog-opened.png
-   evidence/EXP-024-R2/network-select-form-opening.txt
-   evidence/EXP-024-R2/find-cancel-ref.txt
-   evidence/EXP-024-R2/04-post-cancel-launch-surface.png
-   evidence/EXP-024-R2/snapshot-webclient-post-cancel.txt
-   evidence/EXP-024-R2/snapshot-webclient-prelaunch-fresh.txt
-   evidence/EXP-024-R2/05-after-launch-click-webclient.png
-   evidence/EXP-024-R2/snapshot-webclient-post-launch-click.txt
-   evidence/EXP-024-R2/06-final-audit-designer.png
-   evidence/EXP-024-R2/snapshot-designer-final-audit.txt
-   Record: experiments/EXP-024-R2-clean-replay-additional-designer-launch-from-live-.md

Evidence limits:

-   03-select-form-dialog-opened.png is the relevant image for manual verification of the populated dialog.
-   04-post-cancel-launch-surface.png is the relevant image for manual verification of the rendered pre-launch state.
-   05-after-launch-click-webclient.png and 06-final-audit-designer.png are relevant final rendered-state images but cannot establish transient focus/reuse history or browser-chrome popup-blocker state.
-   The specialist review did not independently inspect those image pixels; filenames and worker descriptions alone do not prove image contents.
-   Therefore retain claims supported jointly by inspected worker evidence/snapshots, but do not elevate image filenames themselves into proof.

# 5\. Negative findings and blocked topics

-   No reusable Form-variable creation/persistence recipe is promoted.
-   Persistent=True does not cure the unresolved variable-definition retention problem.
-   Button Caption close/reopen behavior remains unproven.
-   FormSync Output=View rendered semantics remain unproven.
-   Static Caption recovery has one accepted observation but no accepted replay.
-   No Colon-based Static experiment completed its lifecycle boundary.
-   Additional Designer creation **while retaining the existing Designer** has no successful observed procedure.
-   EXP-023's mask interception and EXP-024/024-R2's later unobstructed browser clicks are different observations; none proves Select Form was the sole causal mechanism.
-   EXP-024-R2 reproduced failure to obtain the documented new-tab/window UI result; it did **not** replay-verify an additional-Designer launch procedure.
-   The repeated same-two-controlled-pages result does **not** establish that no other Designer existed outside the controlled context or that Mongoose cannot support multiple Designer clients.
-   The absence of a visible authentication challenge plus successful Select Form liveness does **not** eliminate authentication/session state as a possible contributor to the launch failure.
-   Do not convert blocked lifecycle tests, generic generated SQL, hidden controls, filenames, HTTP status alone, or reproduced ambiguous outcomes into verified procedures.

# 6\. Open questions and next directions

-   Why did the unobstructed EXP-024 and EXP-024-R2 Playwright clicks fail to produce the documented additional Designer tab/window in the controlled context? Candidate explanations such as popup blocking, existing-Designer suppression/reuse, route behavior, transient popup activity, delayed/client-side processing, session state or backend handling remain **unverified hypotheses**.
-   Did either launch click cause any popup/page lifecycle event, navigation, console error, client-side handler activity or network request? **Unknown.**
-   A future bounded launch experiment should arm page/popup lifecycle observation **before** the one authorized click and preserve launch-click-correlated console/network telemetry. Absence of a network request alone would still not prove failure because a launch can be client-side.
-   If tooling permits, capture browser-level popup-blocking evidence. Normal Playwright page enumeration is insufficient to prove that the browser did not block a popup before it entered the controlled context.
-   EXP-009/R2 historically succeeded in opening a new Designer after a previous Designer had been closed. This is a useful experiment hypothesis only; it does **not** establish that closing an existing Designer is a prerequisite.
-   Can Static Caption close/reopen recovery be replay-verified with a clean prerequisite path?
-   What supported representation gives variable-specific serialization evidence for a known-present designed Form variable?
-   Can FormSync Output=View be proven through rendered UI without hidden-state inference?
-   What supported procedure reliably edits Button Caption and proves it across an approved lifecycle boundary?
-   For browser recovery, continue to preserve current state, enumerate before and immediately after the decisive action, avoid unauthorized retries, capture action-correlated telemetry when permitted, and classify ambiguous observations without inferring unsupported product behavior.
