<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-024 (R-20261006-153736-D83j); specialist findings verdict: objects; 2026-10-06T07:59:27.474Z -->
<!-- finalized after EXP-024 specialist review (R-20261006-153736-D83j). EXP-024 is an ACCEPTED browser-level observation: after the pre-existing Select Form dialog was closed, the previously observed pointer interception/visible obstruction did not recur and one permitted "Open designer in a new window" click dispatched, but the controlled Playwright browser context did not enumerate a distinct additional Designer page/window afterward. Current Mongoose documentation says this command normally opens Web Designer in a new browser tab/window, so EXP-024 observed non-production of that documented UI result under the tested retained-Designer condition. Cause, transient focus/reuse, popup behavior, network/session outcome and backend state remain unresolved. EXP-023 remains BLOCKED. EXP-021 remains an accepted UI-level observation only. -->

# 1. Project and workflow

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

“Fresh worker context” establishes independence only at the harness/OpenCode-session level. It does not establish independence across browser, Portal authentication, Web Client, Web Designer backend, IDO Runtime, tenant, configuration or other product sessions unless explicitly tested.

# 2. Environment facts that matter

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
-   EXP-023/024 showed a rendered already-signed-in Web Client shell with no visible sign-in/session-establishment challenge. This does **not** prove that the relevant server-backed authentication/session state was valid when the launch request was attempted.
-   EXP-023 supported only that no **rendered** runtime Form/tab was visible in the inspected Web Client state.
-   The launch action should be identified semantically as **Open designer in a new window**. In the tested 2026.09.08 environment, the control correlated with that command was the second rendered Designer-labeled control and had Ext implementation ID mgtoolbarbutton-1126; neither its ordinal position nor Ext ID is a supported product contract.
-   EXP-023 observed an x-mask intercepting pointer events while Select Form was open. Specific causation by Select Form remained **unverified**.
-   EXP-024 closed Select Form through ordinary **Cancel**. Afterwards the dialog was visibly gone, the toolbar launch surface rendered unobstructed, the accessibility snapshot contained no Select Form dialog or reported Ext/mask node, and the target launch control was present/enabled.
-   This establishes that the **previously observed interception/visible obstruction did not recur**. It does not prove absence of every hidden overlay, mask or interception mechanism.
-   In that EXP-024 state, one native **Open designer in a new window** click dispatched without the timeout/pointer interception seen in EXP-023.
-   Immediate post-click enumeration and the T4 final audit still enumerated exactly the same two pages/windows in the **controlled Playwright browser context**: the Web Client and the retained original Designer. No distinct additional Designer page/window was observed there.
-   This browser enumeration does not exclude an unenumerated OS/browser process, blocked popup, transient/non-rendered launch state, or other state outside that Playwright context.
-   Final screenshots/snapshots can establish final rendered state only. They do **not** prove that no transient focus/reuse transition occurred.
-   No editing-scope dialog was observed after the EXP-024 launch click. No claim is made that such UI could not have appeared elsewhere or transiently.
-   Current Mongoose documentation describes **Open designer in a new window** as opening Web Designer in a new browser tab/window. Therefore EXP-024 observed **non-production of the documented UI result under the tested retained-Designer condition**. Documentation reviewed does not establish what should happen specifically when another Designer client is already retained.
-   Exact applicability of adjacent/current 2026.x/2026.10 documentation to build 2026.09.08 remains **unverified**.
-   Equality of an observed inforSessionId URL parameter between Designer URLs establishes only equality of that parameter value. It does **not** prove authentication-context continuity, Mongoose application-session identity, IDO Runtime-session identity or backend Designer-session identity.

Current documentation indicates ordinary Form close can preserve Form/global-object state in memory. Exact applicability to 2026.09.08 remains **unverified**.

Therefore ordinary close is a **weak persistence boundary**, not a reliable cache-eviction or database-readback boundary.

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
-   **additional Designer while retaining existing Designer** = no successful procedure established. EXP-024 produced an actionable dispatched launch click but no distinct additional Designer page/window in the controlled Playwright browser context; mechanism and broader product behavior remain **unverified**.

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

Generated FormSync SQL contains definitions for selected custom objects and is intended to be executed against a target Forms database. Generation was non-mutating to the inspected Source Form, but generated SQL is executable and not intrinsically read-only. Generic generated SQL remains insufficient to prove serialization of a particular named experimental variable.

# 3. Decisions and rules established so far

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
-   Distinguish a **click attempt**, a successfully **dispatched click**, and a proven **command outcome**.
-   A visible/enabled control does not prove pointer-actionability through modal/mask state.
-   A dispatched click does not prove its documented/advertised result occurred.
-   After an ambiguous browser action, inspect and enumerate the postcondition before any authorized corrective interaction.
-   Page count/final screenshots do not prove absence of transient focus changes.
-   Browser page/window enumeration is scoped to the controlled browser context; do not treat it as proof of every OS/browser or backend state.
-   Never infer authentication or backend-session identity solely from rendered shell state or equality of inforSessionId.
-   When a corrected retry conflicts with an explicit no-retry prohibition, protocol compliance remains unresolved unless explicit authorization exists.
-   If a required acceptance criterion is unresolved, the run cannot be promoted.
-   A single accepted experiment establishes **observed**, not replay-verified, behavior.

Browser checkpoint for launch/lifecycle experiments:

```text
enumerate controlled pages/windows first
→ capture rendered/dialog state
→ identify target command semantically
→ check for visible/interception prerequisites
→ perform only the authorized interaction
→ immediately enumerate pages/windows again
→ capture final rendered/accessibility state
→ classify only what the evidence supports
```

Experiment status:

-   **EXP-005-R2:** blocked.
-   **EXP-006 + R2:** Caption + unload — replay-verified.
-   **EXP-007 + R2:** Description + unload — replay-verified.
-   **EXP-008 + R2:** Description + close/reopen — replay-verified.
-   **EXP-009 + R2:** Description + new Designer — replay-verified at UI-recovery level only; identical inforSessionId parameter values do not establish broader session identity.
-   **EXP-010:** Form Caption + close/reopen — observed.
-   **EXP-010-R2:** blocked/non-accepted due prohibited reauthentication.
-   **EXP-010-R3:** blocked/non-accepted; final inventory invalidated by Session Expired.
-   **EXP-011–015:** variable investigations blocked/incomplete; no serialization recipe.
-   **EXP-016:** FormSync Script route observed.
-   **EXP-016-R2:** Script route replay-verified; View semantics unresolved.
-   **EXP-017:** blocked before rendered View/Generate prerequisite.
-   **EXP-018:** blocked at wizard-selection prerequisite.
-   **EXP-019:** fresh-dialog Classic + Build from Scratch sequence observed.
-   **EXP-019-R2:** wizard prefix replay-verified.
-   **EXP-020:** blocked during Button Caption editing before lifecycle test.
-   **EXP-021:** accepted observation — Static Caption recovered across Save→ordinary close→recent-forms reopen; not replay-verified.
-   **EXP-021-R2:** blocked/non-accepted at preflight; no qualifying replay.
-   **EXP-021-R4:** blocked before Caption mutation/lifecycle test; component rename prerequisite failed.
-   **EXP-022:** blocked/non-accepted; required No Colon baseline was not exposed on the permitted rendered property-grid surface.
-   **EXP-023:** **BLOCKED**; recorded launch attempts encountered mask interception. Recovery-policy compliance of the corrected attempt and final whole-run browser state remain unresolved.
-   **EXP-024:** **ACCEPTED browser-level observation**; after Select Form Cancel, the previous pointer interception/visible obstruction did not recur and one **Open designer in a new window** click dispatched, but the controlled Playwright browser context did not enumerate the documented new Designer tab/window afterward. Cause and focus/reuse history unresolved; not replay-verified.

# 4. Lessons learned and pitfalls per experiment

**EXP-001–003/R2:** environment fingerprint, BuildFromScratch creation and Static/Edit/Button fundamentals established verified foundations.

**EXP-004:** Details → Variables is the tested design-time path. FX\_TestValueVar disappeared after ordinary Save **2/2** and Regenerate **1/1**. Persistent=False causality is unproven.

**EXP-005–010:** Caption/Description lifecycle findings do not generalize to variables or component captions.

**EXP-011–015:** Persistent=True investigations showed immediate visibility in some executions but post-close/reopen absence in EXP-014. Serialization remains unresolved.

**EXP-016/R2:** exact User-scoped FormSync Script generation is replay-verified. Generic Variables/FormID handling does not establish a named saved variable.

**EXP-017:** hidden/accessibility View state could not replace the required rendered prerequisite.

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

**EXP-010-R3:** final inventory evidence was invalidated:

-   evidence/EXP-010-R3/32-t10-select-form-filter-lab13-one-row.png — Select Form overlapped by Session Expired; displayed zero rows are invalid evidence.
-   evidence/EXP-010-R3/33-t10-blocker-session-expired-prompt.png — Session Expired prompt left untouched.

**EXP-021:** Static Caption recovery was observed only across the weak close-only boundary.

**EXP-023:** a rendered enabled launch control was not pointer-actionable while the inherited mask state existed. Failure to activate it established nothing about the command's eventual launch behavior.

**EXP-024:** closing the inherited Select Form dialog via ordinary Cancel created a browser condition in which the EXP-023 pointer interception did not recur and the target launch click became actionable.

Decisive EXP-024 evidence recorded by the worker:

-   evidence/EXP-024/05-webclient-dialog-still-rendered.png — worker-inspected Select Form visibly present before close only.
-   evidence/EXP-024/06-webclient-dialog-closed-launch-surface-clear.png — worker-inspected dialog gone and toolbar launch surface visibly unobstructed. This does not prove absence of every invisible overlay.
-   evidence/EXP-024/snapshot-webclient-before-dialog-close.txt — accessibility baseline with Select Form dialog and Cancel control.
-   evidence/EXP-024/snapshot-webclient-after-dialog-close.txt — accessibility state with no reported Select Form/Ext-mask node and target control present/enabled.
-   evidence/EXP-024/snapshot-designer-unchanged-after-close.txt
-   evidence/EXP-024/07-designer-unchanged-after-close.png — support that the inspected rendered/accessibility Designer state was materially unchanged through the dialog close; no hidden/session/backend-state inference.
-   evidence/EXP-024/08-after-launch-click-webclient.png — worker-reported post-click rendered Web Client evidence. The rendered tooltip **Open designer in a new window** identifies the semantic command in this target environment; it does not prove the new window appeared.
-   evidence/EXP-024/09-final-audit-webclient.png
-   evidence/EXP-024/10-final-audit-designer.png
-   evidence/EXP-024/snapshot-webclient-final-audit.txt
-   evidence/EXP-024/snapshot-designer-final-audit.txt

The final enumeration supports only that the controlled Playwright browser context still contained the same enumerated Web Client and original Designer pages/windows and no distinct additional Designer page/window. Final screenshots/snapshots establish final visible/accessibility state, not focus history.

The EXP-024 PNG pixels were not independently available to the specialist consultation; visual statements above therefore remain worker-reported inspected observations unless those PNGs are separately manually reviewed. No network, console, popup-event or command-handler evidence from the single launch click has been established in the supplied context.

# 5. Negative findings and blocked topics

-   No reusable Form-variable creation/persistence recipe is promoted.
-   Persistent=True does not resolve the variable-definition retention question.
-   Button Caption close/reopen behavior remains unproven.
-   FormSync Output=View rendered semantics remain unproven.
-   Static Caption recovery has one accepted observation but no accepted replay.
-   No Colon-based Static experiment completed its lifecycle boundary.
-   No successful procedure has been established for creating an **additional Designer while retaining an existing Designer**.
-   EXP-024 is not absence of a product expectation: documentation says **Open designer in a new window** normally opens Web Designer in a new browser tab/window.
-   EXP-024 instead observed an **anomalous/non-produced documented launch result under the tested retained-Designer browser state**.
-   This does **not** prove Mongoose cannot support multiple Designer clients.
-   It also does not establish whether the click invoked window.open, whether a popup was blocked, whether a launch/network request failed, whether server/session state was invalid, whether an error occurred without rendered UI, or whether reuse/suppression logic applied.
-   EXP-023's interception and EXP-024's unobstructed dispatch are distinct observations; neither proves the Select Form dialog was the sole causal mechanism.
-   Do not turn blocked lifecycle tests, generic generated SQL, hidden controls, filenames or uninspected image contents into verified procedures.

# 6. Open questions and next directions

-   Why did the EXP-024 **Open designer in a new window** click dispatch but fail to produce the documented new Designer tab/window in the controlled Playwright browser context? Popup blocking, command-handler behavior, failed network/session request, suppression/reuse logic and other causes are all **unresolved**.
-   Did any transient focus/reuse transition occur after the click? **Unresolved** because no focus-specific telemetry is established.
-   If popup/window events, network responses or console evidence were already captured from the **same completed EXP-024 click**, they are the highest-value read-only diagnostics. If not, do not infer them retrospectively.
-   Does a clean controlled replay of the EXP-024 condition reproduce the same anomalous outcome? Not tested.
-   Is successful new-Designer creation dependent on first closing the existing Designer, as happened in EXP-009/R2? Historical correlation exists; causality is **unverified**.
-   Can Static Caption close/reopen recovery be replay-verified with a clean prerequisite path?
-   What representation gives variable-specific serialization evidence for a known-present designed Form variable?
-   Can FormSync Output=View be proven through rendered UI without hidden-state inference?
-   What supported procedure reliably edits Button Caption and proves it across an approved lifecycle boundary?

For future browser recovery, preserve state first, enumerate controlled pages/windows before and immediately after the decisive action, identify commands semantically rather than by transient Ext IDs, avoid unauthorized retries, distinguish final visible state from transient focus/history, and record ambiguous outcomes as ambiguous rather than inferring unsupported product or backend behavior.
