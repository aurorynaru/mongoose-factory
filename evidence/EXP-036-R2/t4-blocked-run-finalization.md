# EXP-036-R2 — T4 blocked-run finalization (repository only)

Worker session `83437d74-e00d-4527-9579-fbd0bf09b67e` · task_message_id `29bf1c6e-2caf-46a3-ac7f-371c7a7a93fb` · Run R-20261010-005147-a4PQ · Cycle 3 · Task T4

T4 made **no browser tool call** and **no Mongoose action**. It did not retry New, did not inspect Help/About, did not alter system Forms or preferences, did not launch a Designer, and did not authenticate. Its inputs are the experiment record, the T1–T3 notes and the T3 screenshots already captured.

**Outcome: BLOCKED.** Not accepted. Not replay_verified. The target Form `FX_SingleButtonLab02` was not created.

## 1. Precise blocker (observed)

Sequence (T3): New Form Definition → Form Wizard Selection (New Form; Category Classic; Wizard BuildFromScratch) → one OK → Error dialog.

Observed text of the Error dialog (`t3-04`, read from the accessibility tree):
- "Unable to load form WSFormWizardClassicBuildFromScratch."
- "Exception loading form definition for form WSFormWizardClassicBuildFromScratch: Error in IDO response payload: There is an error in XML document (1, 70979). Instance validation error: 'BREADCRUMB_SHOW_TITLE' is not a valid value for global::Mongoose.WinStudio.Enums.ComponentFlags."
- "Form [WSFormWizardClassicBuildFromScratch] is not defined as Runtime Builder. Use [Form Wizard Categories] form to define it as Builder. Classic => BuildFromScratch"
- "The form 'WSFormWizardClassicBuildFromScratch' was not found. It is either missing, or there is no version of the form that matches your current credentials."

Preceding observation (T3 step 5, `t3-01`): during the Category click, a Mongoose info box appeared over the wizard: "Exception loading PropertyClassExtension definition for System.Collections.Generic.List`1[System.String]: Error in IDO response payload ... 'BREADCRUMB_DETAIL_ONLY' is not a valid value for global::Mongoose.WinStudio.Enums.ComponentFlags." It was dismissed by OK. The first Category click had timed out at "visible, enabled and stable" because this box intercepted pointer events.

What is observed: the wizard page 1 never appeared. Name entry, Save Template, and Finish were never reached.

What is **not** established (unresolved hypotheses, none confirmed):
- **H1.** A Mongoose build or system-form definition-data mismatch affecting the `ComponentFlags` enum. Both errors cite the same enum, and the two definitions are different.
- **H2.** A version or visibility problem for the signed-in user's copy of the wizard system form. The error's own wording ("no version of the form that matches your current credentials") points this way. No evidence was collected either way.
- **H3.** A transient or session-dependent server state. Nothing was collected to test it.

Limits on the version evidence: the Web Client footer and the Designer URL both carry `2026.10.01` (portal version, `inforOSPortalVersion`). That is a portal version. It is **not** confirmation of the Mongoose Designer build. The Designer's build was not read: Help → About was not inspected in T3 or T4, as instructed. Predecessor records describe Mongoose 2026.09.08 (EXP-002-R2 read Help → About on 2026-09-30). A build mismatch is an unresolved hypothesis, not an established root cause.

## 2. Predecessor contrast (repository records, read in T4)

| Record | Date | Same wizard path? | Result |
|---|---|---|---|
| EXP-002-R2 | 2026-09-30 | Classic / BuildFromScratch | Finished; `FX_TestBlank02` created |
| EXP-014 | earlier | `runFormSpec=WSFormWizardClassicBuildFromScratch` in network log | Form creation via this spec |
| EXP-019-R2 | 2026-10-05 | Same Category / Wizard selection | Reached wizard page 1 (Name empty) |
| EXP-036 (run R-20261009-231134-1eF3) | 2026-10-09 | Same, same signed-in user | Page 1, Save Template unchecked, Finish, "Process Completed Successfully"; `FX_SingleButtonLab01` created (`evidence/EXP-036/t5-08`, `t7-03`, `t7-04`) |
| EXP-036-R2 T3 (this run) | 2026-10-10 (run-local) | Same selection | Load Error after one OK; no page 1 |

Reading: the same definition loaded and completed on earlier runs, including an earlier run on the same date and the same signed-in user. A permanent break of the definition is therefore not supported by the records. The difference between the earlier successful runs and this failed attempt is **not explained** by any record read here. This does not identify a cause.

## 3. Reconciled action counts (T1–T4, this experiment)

| Action | T1 | T2 | T3 | T4 | Total |
|---|---|---|---|---|---|
| Designer launch | 0 | 1 | 0 | 0 | **1 of 1** |
| New Form Definition | 0 | 0 | 1 | 0 | **1** |
| Form Wizard Selection OK | 0 | 0 | 1 | 0 | **1** (led to Error) |
| Wizard page 1 reached | 0 | 0 | 0 | 0 | **0** |
| Name entry | 0 | 0 | 0 | 0 | **0** |
| Next | 0 | 0 | 0 | 0 | **0** |
| Save Template label click / Space | 0 | 0 | 0 | 0 | **0 / 0** |
| Wizard Finish | 0 | 0 | 0 | 0 | **0** |
| Completed Form creations | 0 | 0 | 0 | 0 | **0** |
| Button placements | 0 | 0 | 0 | 0 | **0** |
| Property edits (Name, Caption) | 0 | 0 | 0 | 0 | **0** |
| Ordinary Designer Save after Button configuration | 0 | 0 | 0 | 0 | **0** |
| Target Form-tab close | 0 | 0 | 0 | 0 | **0** |
| Target Form reopen | 0 | 0 | 0 | 0 | **0** |
| Select Form open (Web Client) | 0 | 1 | 1 | 0 | 2 (both read-only, Name-filter route) |
| Select Form Cancel | 0 | 1 | 1 | 0 | 2 |
| Select Form OK / row activation | 0 | 0 | 0 | 0 | **0** |
| JavaScript / evaluate | 0 | 0 | 0 | 0 | **0** |
| Authentication / reauthentication | 0 | 0 | 0 | 0 | **0** |
| Unload / cold MGForm navigation | 0 | 0 | 0 | 0 | **0** |

Notes on counts:
- T2 action totals are in `evidence/EXP-036-R2/t2-preflight-notes.md` (Designer launch 1; Select Form open 1; Cancel 1; printable keys 45; banner close, which is portal chrome, 1). No T2 browser-call total is restated here.
- Message-box OK dismissals: T2 0 (the banner close was portal chrome, not a Mongoose message box); T3 2 (info box; Error).
- T3 browser actions: tab list 1; tab select failed 1 (`Tab 1 not found`) and retried 1 (success); tab select index 0 1; snapshots 2 (one planned start-of-task, one recovery); screenshots 6; clicks 9 (New; Category timed out; info-box OK; corrected Category; Classic option; Wizard trigger; Build from Scratch option; wizard OK; Error OK); Web Client Open 1; Select Form Cancel 1; read-only targeted finds about 15 (ref resolution and post-error checks).
- The Category click that timed out (T3 step 4) changed no state. Confirmed by `t3-02`, `t3-05` and `t3-06`.
- Two message boxes were dismissed by their OK (info box; Error). They are in-page Mongoose messages, not Form changes.
- The Select Form read-only inventory check in T3 was a post-error check. It was not one of the bounded T3 steps; it is disclosed here.

**Creation accounting, as the coordinator asked.** One New, one wizard-selection OK, zero Finish, zero completed Form creations, zero Button placements, zero property edits, zero post-configuration Saves, zero target closes, zero target reopens.

## 4. Recovery accounting (reconciled)

Allowance for the whole experiment: one additional fresh untargeted snapshot; one corrected visible inspection.

| Item | Status | Basis |
|---|---|---|
| Fresh untargeted snapshot (recovery) | **1 of 1 consumed** | T3 step 6: taken after the Category click timeout, before the intercepting info box was dismissed. |
| Corrected visible inspection | **1 of 1 consumed** | `t3-02`: visible wizard state after the info box was dismissed, before the single corrected Category click. |
| Planned start-of-task snapshot (T3 step 2) | not counted | Start-of-task read as the T3 instructions require. |
| Targeted finds | not counted | Used for ref resolution and post-error checks. None followed a "Ref ... not found" error. |
| Remaining uncertainty | **disclosed** | `t3-01` was a visible capture taken immediately after the timeout, before the fresh snapshot and before correction. The coordinator's note says two corrected inspections are not proven by `t3-01` and `t3-02` together. Under a strict reading `t3-01` is a second visible inspection, which would exceed the allowance by one. The worker reports this as possible, not settled. The coordinator decides. |

Remaining allowance after T3: fresh untargeted snapshot 0; corrected visible inspection 0 (or exceeded by one if `t3-01` is counted). No further recovery is authorized.

## 5. Post-error observations (supported, rendered UI only)

- **Designer clean** (`t3-05`, viewed): blank canvas; no Form tab; no dialog; Save and Regenerate disabled; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Targeted read-only finds for `Form Wizard`, `closable` and `FX_SingleButtonLab02` returned no matches in the Designer.
- **Select Form inventory** (`t3-06`, viewed): Filter textbox holds the inherited value `FX_SingleButtonLab02` (highlighted); Filter By = Name; Case Sensitive and Starts With unchecked; **zero data rows**. Find afterward for `FX_SingleButtonLab02` in the dialog returned no row children (T2 `t2-06`, the same check).
- **Positive control** was **not** repeated in T3. Its T2 result (`t2-05`, one row `FX_ComponentRecoveryLab02` with both cells matching, Filter By Name) is the control for this filter route.
- **Scope of this result:** the zero-row finding is a rendered Select Form result. It does **not** establish database-wide absence, inventory completeness or that no partial Form exists on the server.

## 6. Repository confinement audit (T1–T4)

Method: the worker cannot run `git` (Bash disabled). The harness computes confinement from before/after Git state and the evidence diff. The lists below are the worker's own record of what it wrote. They are not a Git result.

**Worker-authored repository files (this experiment only):**
- `experiments/EXP-036-R2-clean-replay-single-button-caption-recovery.md`: created T1; edited T2, T3, T4.
- `evidence/EXP-036-R2/t1-repository-review-notes.md`: T1.
- `evidence/EXP-036-R2/t2-preflight-notes.md`: T2.
- `evidence/EXP-036-R2/t3-creation-attempt-notes.md`: T3; corrected in T4 (three wording corrections).
- `evidence/EXP-036-R2/t4-blocked-run-finalization.md`: T4 (this file).

**Screenshots the worker requested at named paths (written by the browser screenshot tool; counted as worker evidence):**
- T2: `t2-01-preflight-webclient-viewport.png`, `t2-02-after-banner-close-viewport.png`, `t2-03-designer-settled-viewport.png`, `t2-04-select-form-opened-viewport.png`, `t2-05-positive-control-settled-viewport.png`, `t2-06-target-query-settled-viewport.png`, `t2-07-after-cancel-webclient-viewport.png`, `t2-08-designer-final-preflight-viewport.png` (8 files).
- T3: `t3-01-category-click-timeout-viewport.png`, `t3-02-wizard-selection-after-message-dismissed-viewport.png`, `t3-03-wizard-choices-before-ok-viewport.png`, `t3-04-wizard-page1-after-ok-viewport.png`, `t3-05-after-error-dismissed-viewport.png`, `t3-06-select-form-inventory-check-viewport.png` (6 files).

**Present in `evidence/EXP-036-R2/` but not written by this worker:**
- `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`. Provenance is by name only: they are harness audit files, following the EXP-036 precedent. This worker did not create or edit them.

**Browser-tool artifacts (gitignored; not worker-authored; not deleted):**
- In this run's browser window (T2–T3, approximately 16:54:30Z to 17:00:24Z UTC), 22 files under `evidence/playwright/`: 2 console logs and 20 page snapshots.
- Earlier files under `evidence/playwright/` timestamped 16:05Z to 16:16Z were written before this task's first browser call (T2 began at about 16:54:30Z). They are not attributed to this task.

**Other repository state:**
- No file outside `experiments/EXP-036-R2-clean-replay-single-button-caption-recovery.md` and `evidence/EXP-036-R2/` was written by this worker in T1–T4.
- Pre-existing unrelated modifications under `tools/learning-harness/` (listed at session start) were not touched by this worker.
- Limitation: no Git-level verification was performed. The worker cannot run `git` here. The harness result for confinement is the authoritative check.

## 7. Acceptance status (coordinator labels; the worker cannot read the verbatim brief)

The worker cannot read the approved brief's acceptance wording under `tools/`. The labels below follow the coordinator's T4 instruction, and for AC-4 to AC-9 the EXP-036 T13 labelling. The coordinator should confirm the mapping.

| AC | Status | Basis |
|---|---|---|
| AC-1 Session usable; no sign-in or configuration prompt; Designer in User scope; clean | **PASS** | T2 gates (`t2-02`, `t2-03`, `t2-08`); T3 post-error re-check (`t3-05` footer and clean state). Limit: the Designer's Mongoose build was not read. |
| AC-2 Target absent under a supported Select Form Name filter, with an observable positive control | **PASS** | T2 positive control `FX_ComponentRecoveryLab02` = one row (`t2-05`); target `FX_SingleButtonLab02` = zero rows (`t2-06`); T3 recheck zero rows (`t3-06`). Limit: rendered UI only; database absence not claimed; the positive control was not repeated in T3. |
| AC-3 Form created once: Classic / BuildFromScratch, Save Template unchecked, exact Name, User scope, clean, empty component baseline | **FAIL** | The wizard did not reach page 1 (`t3-04`). Finish 0. No Form created. |
| AC-4 One native Toolbox Button placed | **Unfulfilled** | Not attempted; prerequisite AC-3 failed. |
| AC-5 Name and Caption set; one ordinary Designer Save with clean return | **Unfulfilled** | Not attempted. |
| AC-6 Target Form closed by its Form-tab close control | **Unfulfilled** | Not attempted. |
| AC-7 Same Form reopened by a supported Designer path | **Unfulfilled** | Not attempted. |
| AC-8 Reopened component: exactly one Button; Name, Type and Caption recovered | **Unfulfilled** | Not attempted. |
| AC-9 Lifecycle counts and final read-only audit | **NOT MET** | The audit (sections 3 and 6) is complete and reconciled. The required lifecycle counts are zero: Form creation 0; placement 0; Name edit 0; Caption edit 0; Save 0; close 0; reopen 0. The audit does not stand in for them. |

## 8. Predecessor findings (preserved; not changed by this replay)

- EXP-027-R2: **replay_verified, scoped** (User scope; single native Button; Name and Type). Unchanged.
- EXP-036: **observed**, accepted per operator directive, not replay_verified. Unchanged. Its Caption and Save results are not confirmed by this run.
- EXP-019-R2: **replay_verified** for the Classic / BuildFromScratch selection prefix (2026-10-05). This run's OK did not reach wizard page 1, so the prefix was **not reproduced here**. Its status is unchanged.
- EXP-002-R2 and EXP-003-R2: **verified**. Unchanged.
- EXP-033-R4 and EXP-035-R2: **replay_verified**, rendered UI only. Unchanged. This run's Select Form observations are consistent with them and add no new status.

## 9. Last observed browser state

- **Designer tab** (index 1): clean; no Form open; no dialog; User scope footer. Last viewed: `t3-05`. Not touched in T4.
- **Web Client tab** (index 0): selected at the end of T3. The Select Form inventory dialog was closed by Cancel; `find "Select Form"` then returned no match. The last Select Form screenshot is `t3-06`. No screenshot was taken after the Cancel.
- No browser-native dialog is known to be open. No in-page Mongoose dialog is known to be open.

## 10. Open decisions and limitations for the coordinator

1. **Blocker disposition.** Abandon this experiment as blocked, or authorize one fresh New → Classic / BuildFromScratch attempt after the operator has checked the Form Wizard system form and the Mongoose Designer build (Help → About). Either way, no retry is made by this worker.
2. **Recovery allowance.** Decide whether `t3-01` counts as a second visible inspection (exceeding the allowance by one).
3. **Select Form route.** The T3 inventory check used the Web Client Open control after the failure. It was not one of the bounded T3 steps. Confirm whether it is acceptable.
4. **Acceptance numbering.** Confirm the AC-1 to AC-9 mapping in section 7.
5. **Version evidence.** The portal `2026.10.01` is not the Mongoose build. Build and system-form mismatch (H1) and user-version or visibility (H2) are unresolved. The earlier successful EXP-036 run on the same date and user argues against a standing break, but it does not explain the difference.
