<!-- harness-context reviewed: true -->
<!-- updated by autopilot after EXP-021 (R-20261006-004825-suU5); specialist findings verdict: supports; 2026-10-06T02:01:11.011Z -->
<!-- FINALIZED after EXP-021 (R-20261006-004825-suU5). Authoritative coordinator outcome: ACCEPTED observation. AC-1..AC-8 supported by completed worker reports; AC-9 independently reconciled after the T9 interruption and T10/T11 shell loops. Specialist review verdict: supports, with evidence-wording corrections incorporated. Static component Caption recovery across ordinary close/reopen is observed at UI level only; no replay-verified promotion. The EXP-021 record text saying AWAITING COORDINATOR ACCEPTANCE / harness paused is historical pre-acceptance state and is superseded by this final outcome. --> <!-- EXP-010-R3 remains BLOCKED/non-accepted: AC-1..AC-7 passed; AC-8 exactly-one inventory proof unresolved because Session Expired invalidated the final Select Form read. --> <!-- EXP-017 remains BLOCKED at its rendered exact-name prerequisite; View/Generate was not tested. -->

# 1. Project and workflow

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

# 2. Environment facts that matter

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
-   Hidden/off-screen Ext controls can remain in the DOM. DOM/accessibility state does **not** by itself prove rendered UI state or what Mongoose will process.
-   EXP-017 observed disagreement between off-screen accessibility/HTML View state and the rendered Save selection. Generate was never reached.
-   Direct cold ?MGForm=... navigation has been unreliable.
-   Bare portal-root navigation has produced HTTP 403 Missing Authentication Token.
-   Designer recent-forms and Select Form are tested navigation/reopen paths.
-   Closing a clean Designer Form tab can produce no prompt.
-   A session-expired Select Form result is invalid inventory evidence.
-   EXP-010-R3 showed that Designer can remain usable through Save→close→reopen while the separate Web Client later reports **Session Expired**. This does not prove continuity of Portal authentication, Web Client, IDO Runtime or backend Designer sessions.
-   EXP-021 began with the Web Client session expired while the Designer still showed prior state. Because no target mutation had begun and the experiment permitted establishment, Session Expired → OK → config-group Sign In → OK was performed **before mutation** and disclosed. No authentication/session establishment occurred after the first target mutation.
-   Pre-mutation establishment being acceptable in EXP-021 does not retroactively make EXP-010-R2 acceptable; that run explicitly prohibited deliberate post-start reauthentication/session establishment.

Documented/current-product guidance indicates that **ordinary Form close is cache-preserving**: Mongoose can retain the Form and associated global objects in memory after close, and reopening can use locally cached state. Exact equivalence of adjacent/current documentation to build 2026.09.08 remains **unverified**.

Therefore **close-only is intentionally a weak persistence boundary**. Recovery across it cannot distinguish Forms-database readback from reconstruction using retained in-memory Form/global-object state.

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
-   **weak persistence boundary** = ordinary close/reopen; compatible with cache reuse.
-   **new Web Designer client instance** = newly launched/rendered Designer tab/window only; not proof of a new backend/session boundary.

## Documented Form-variable baseline

Adjacent 2026.08/2026.10 documentation is the product-level baseline for 2026.09.08; exact build equivalence remains **unverified**.

Documented behavior indicates:

-   Global=False, Persistent=True is supported.
-   **Persistent** governs runtime value lifetime.
-   **Global** governs visibility/scope.
-   Form-level/global and persistent/temporary are independent attributes.
-   An explicitly designed Form-variable definition is Form metadata.
-   Current FormSync documentation can represent persistent Form variables under structures such as PersistentVariables().
-   Some nonpersistent variables can be created automatically when referenced and therefore do not necessarily imply a separately pre-created design-time definition.

Current lifecycle observations:

-   Caption + form/global-object unload: **replay-verified**.
-   Description + form/global-object unload: **replay-verified**.
-   Description + ordinary close/reopen: **replay-verified**.
-   Description + newly launched Designer: **replay-verified at UI-recovery level only**.
-   Form-level Caption + ordinary close/reopen: **observed only**.
-   **Static component Caption + ordinary close/reopen: observed only by EXP-021.**
-   Persistent=True variable immediately after Save: **observed visible**, serialization unproven.
-   Persistent=True variable after ordinary close/reopen: EXP-014 **observed absent**.
-   FormSync Script generation for one exact selected User-scoped customized Form: **replay-verified by EXP-016 + EXP-016-R2**.
-   Specific Output=View visible display behavior remains **unverified**.

Generated FormSync SQL is customization-definition SQL that can subsequently be executed against a destination Forms database. Generation was non-mutating to the inspected Source Form, but the SQL itself is executable and not intrinsically read-only.

# 3. Decisions and rules established so far

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
-   Cropped/truncated text does not visibly prove its complete string merely because accessibility exposes the full value.
-   Verify customized-object identity using **Name + ScopeType + ScopeName**.
-   Version identity and storage/serialization provenance are separate.
-   Do not generalize across metadata classes, scopes or lifecycle boundaries.
-   Treat internal request paths, Ext IDs/stores, model IDs, numeric ScopeType values and generated SQL layout as implementation details.
-   Do not manipulate hidden controls or preferences/cache state merely to force a pass.
-   Ordinary close/reopen does not prove Forms-database durability or cache eviction.
-   Form Caption, Description, Static Caption, Button Caption and Form-variable definitions are separate metadata classes.
-   **Persistent is a runtime-value-lifetime property, not proof of design-time definition persistence.**
-   Immediate post-Save UI visibility is insufficient proof of variable serialization.
-   No reusable Form-variable creation/persistence recipe has been promoted.
-   FormSync Script and Pseudo Code are different representations.
-   Generic SQL such as DELETE FROM Variables WHERE FormID = @FormID does **not** prove a specific named variable exists or was serialized.
-   Positive serialization evidence must contain variable-specific identity/data.
-   Negative serialization evidence first requires proving the representation exposes a known-present variable.
-   A session-expired/recovery-obstructed Select Form result proves neither absence nor cardinality.
-   **One creation operation is not the same as final inventory cardinality.**
-   One component-creation action plus one visible component does not automatically establish complete component cardinality when hidden/off-screen components have not been excluded.
-   A property-edit trace establishes recorded deliberate mutations, not a complete metadata diff; framework-managed Wizard/Save changes must not be silently excluded.
-   Failed audit/recovery tooling must not trigger blind replay of commands that may already have side effects. Preserve partial results and use only permitted inspection/reconciliation.
-   An independent trace/repository reconciliation supports action counts and repository confinement, but does not substitute for inspection of screenshot pixels when visual semantics are an acceptance criterion.
-   If a required acceptance criterion is unresolved, semantic success may remain observed/corroborating evidence but cannot promote the run.
-   A single accepted experiment establishes **observed**, not replay-verified, behavior.

Experiment status:

-   **EXP-005-R2:** blocked.
-   **EXP-006 + R2:** Caption + unload — replay-verified.
-   **EXP-007 + R2:** Description + unload — replay-verified.
-   **EXP-008 + R2:** Description + close/reopen — replay-verified.
-   **EXP-009 + R2:** Description + new Designer — replay-verified at UI-recovery level.
-   **EXP-010:** Form Caption + close/reopen — observed.
-   **EXP-010-R2:** blocked/non-accepted due prohibited reauthentication; corroborating only.
-   **EXP-010-R3:** blocked/non-accepted; AC-1..AC-7 PASS, AC-8 inventory unresolved due Session Expired.
-   **EXP-011:** blocked at preflight.
-   **EXP-012:** blocked after variable creation, before Save.
-   **EXP-013:** blocked/non-accepted; immediate post-Save variable visibility observed.
-   **EXP-014:** blocked because post-reopen variable recovery failed.
-   **EXP-015:** blocked before intended serialization investigation completed.
-   **EXP-016:** FormSync Script-generation route observed.
-   **EXP-016-R2:** Script-generation route replay-verified; Output=View semantics unresolved.
-   **EXP-017:** blocked at rendered exact-name prerequisite; View/Generate not tested.
-   **EXP-018:** blocked at wizard-selection prerequisite.
-   **EXP-019:** fresh-dialog Classic + Build from Scratch sequence observed accepted.
-   **EXP-019-R2:** fresh-dialog/rendered-dropdown/single-OK prefix replay-verified.
-   **EXP-020:** blocked during Button Caption editing before Save/close/reopen.
-   **EXP-021:** **accepted observation** — one execution observed Static Caption recovery across one ordinary Save→Form-tab close→recent-forms reopen; AC-1..AC-8 supported and AC-9 independently reconciled; **not replay-verified**.

# 4. Lessons learned and pitfalls per experiment

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

**EXP-020:** Button Caption literal entry was not reliably established. The property editor behaved as a string-resource combobox and the controlled literal did not remain exact. No persistence boundary was tested.

**EXP-010-R3:** Caption recovery through AC-7 succeeded, but final exactly-one inventory proof was invalidated by Session Expired. Decisive blocker evidence:

-   evidence/EXP-010-R3/32-t10-select-form-filter-lab13-one-row.png — filtered Select Form state with overlapping Session Expired; zero rows are invalid inventory evidence.
-   evidence/EXP-010-R3/33-t10-blocker-session-expired-prompt.png — Session Expired prompt left untouched.

**EXP-021 — Static Caption Recovery Across Ordinary Close/Reopen**

At preflight, FX\_StaticCaptionLab01 had **no matching row on the tested live Select Form Name-filter surface**, case-insensitively, with an FX\_ positive control. This is UI-level target-absence evidence only; it is not a direct physical Forms-database inventory proof.

A User-scope classic BuildFromScratch FX\_StaticCaptionLab01 was created. One Static component, FX\_StaticCaptionStatic, was created and visibly verified. Unless complete component inventory evidence is separately established, this does not claim that no other hidden/off-screen component could exist.

The Static's Caption was the only **recorded deliberate target-property mutation**, set to Static Caption Close Only; recorded non-Caption comparison properties remained equal. This is not a complete before/after Form-definition diff and does not exclude framework-managed metadata work performed by Wizard Finish or Save.

Exactly one recorded ordinary Designer Save was followed by one ordinary target Form-tab close and one Designer Form-menu recent-forms reopen. After reopen, the matching User-scoped Form/component state was present: scoped Form identity matched by Name + ScopeType + ScopeName, and a component with the same Name and equal recorded comparison properties was observed. This establishes UI-level matching state, not internal object-instance identity.

Post-reopen rendered canvas text showed Static Caption Close Only:. The exact **Caption property value** Static Caption Close Only was accessibility/property-grid-derived; it is not evidence of physical storage representation or Forms-database serialization. Static Caption and colon display are separate concerns in Mongoose, so the rendered trailing colon is only corroborating display evidence. If future evidence relies on the colon itself, the Static component's **No Colon** property should be recorded and compared explicitly.

EXP-021 therefore proves only **one accepted observation of UI-level Static Caption recovery across the tested weak close-only boundary**. It does not prove Forms-database durability, cache eviction, backend-session continuity, object-instance continuity, or Button/Edit behavior.

Evidence/audit paths:

-   experiments/EXP-021-static-caption-recovery-across-ordinary-close-reop.md
-   evidence/EXP-021/ — screenshots 01–24
-   evidence/EXP-021/19... — useful pre-Save Caption-state evidence; cropped property-grid text must remain labeled as cropped, with exact accessibility-derived values reported separately.
-   evidence/EXP-021/24... — decisive post-reopen Form/component/canvas-state evidence if independent pixel review is required.
-   evidence/EXP-021/17... and 18... — relevant if component-cardinality claims are later reconsidered; do not infer complete inventory unless the visible contents actually establish it.
-   evidence/EXP-021/independent-ac9-reconciliation.md — independently supports action-count and repository-confinement audit only; it did **not** independently inspect screenshot contents and therefore does not independently establish AC-3/AC-4/AC-8 visual semantics.

T9 was interrupted before an authoritative final report. The independent AC-9 reconciliation subsequently supported sequence/action counts and repository confinement. T10/T11 failed in shell-loop handling and supplied no additional Mongoose evidence. The record's earlier AWAITING COORDINATOR ACCEPTANCE status is historical; the authoritative final state is **ACCEPTED observation**.

# 5. Negative findings / blocked topics and why

-   **Form-variable definition retention remains unresolved.** UI disappearance does not establish serialization failure.
-   **Form Caption close/reopen remains not replay-verified.** EXP-010 is observed; R2 was non-accepted; R3 was blocked at its final inventory audit.
-   **Static Caption close/reopen is now observed but not replay-verified.** EXP-021 is one accepted execution only.
-   EXP-021 does not prove complete component inventory unless screenshots 17/18 or another approved surface establish that explicitly.
-   EXP-021's rendered trailing colon does not by itself prove the exact Caption property because colon display is separately controlled.
-   **Button Caption close/reopen remains untested.** EXP-020 blocked before Save.
-   **FormSync View behavior remains unverified.**
-   Session expiry/recovery remains a recurring experimental hazard.
-   No close-only experiment proves physical Forms-database durability, cache eviction, commit mechanics, IDO-metadata behavior or stronger backend/session independence.

# 6. Open questions and sensible next directions

1.  **Static Caption replay:** independently replay EXP-021 on a new FX\_ Form if repeatability at the **same weak cache-preserving close/reopen boundary** is desired. An EXP-021-R2 replay would not establish Forms-metadata/database retrieval by itself.
2.  **Static Caption stronger boundary:** if the goal becomes proving recovery after retained Form/global-object memory is removed, design a separate experiment crossing the documented **Unload All Global Form Objects** boundary. Do not fold that stronger question into the close-only replay.
3.  **Static display evidence:** explicitly capture/compare **No Colon** if the rendered trailing colon will be used as semantic corroboration.
4.  **Form Caption close/reopen:** a future compliant replay still needs the required final inventory audit without post-mutation session recovery.
5.  **Form-variable serialization:** establish a representation that demonstrably exposes a known-present saved variable, then obtain variable-specific evidence.
6.  **Button Caption editing:** first establish a small replayable exact-literal editing procedure before attempting persistence.
7.  **FormSync View:** test only with visibly rendered View selection and disabled Filename checkpoint before Generate.
8.  **Browser/session boundaries:** continue distinguishing Designer usability from Web Client/Portal authentication and backend/session state.
9.  Continue strengthening lifecycle tests one boundary and metadata class at a time; do not infer database durability, cache behavior, component cardinality, complete metadata diffs or cross-class behavior from ordinary close/reopen observations.
