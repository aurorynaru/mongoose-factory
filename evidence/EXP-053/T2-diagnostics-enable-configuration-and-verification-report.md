# EXP-053 T2 — Diagnostics Enable configuration, OK, and read-only verification

Run `R-20261011-131100-lCZw`, experiment EXP-053, cycle 1, task T2. Worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`, task_message_id `4a47f68b-090f-4199-96c9-edbe0edad4db`. Date 2026-10-11. Target Form `FX_Items` (User-scoped). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

**Result: T2 complete. Exactly one Diagnostics option changed: General > Enabled, OFF → ON, confirmed with native OK. Read-only reopen verified all 32 Diagnostics options against the T1 baseline: only Enabled differs. Events and Event Handler Include were NOT clicked and remain ON.** The authorized change is still in place by design (the controlled log capture is a later task); restoration to the T1 original (Off) remains a required end-of-experiment step (AC-8). Nothing is cleaned up yet.

Classification: **observed only** (single session, UI and accessibility). Not replay_verified. No persistence, cross-session, or runtime-effect claim.

## 1. Pre-mutation confirmation against the T1 baseline

Fresh snapshot of the Web Client tab (selected, identity bar DEM configuration, runtime FX_Items open with three rows, Save greyed, no dialog or challenge). Diagnostics page reopened through View > User Preferences... > Diagnostics. Before any change:

| Check | Result | Evidence |
| --- | --- | --- |
| General: Enabled | unchecked (matches T1 OFF) | `t2-01`; snapshot |
| General: System Information, Security | unchecked (match T1) | `t2-01` |
| Form: Events | checked (matches T1 ON) | `t2-02`; snapshot |
| Form: Event Handler **Include** | checked (matches T1 ON). Accessibility ref f1e531 is the **Event Handler** Include (visually under the "Event Handler" heading, `t2-02`) | `t2-02` |
| Form: Validator Include | unchecked (matches T1 OFF); ref f1e536, under "Validator" | `t2-02` |
| Form: Value Changed (Variable) | checked (matches T1 ON; not authorized, preserved) | `t2-02` |
| Form: all other 12 options | unchecked (match T1) | snapshot |

Group associations were unambiguous: the only checked "Include" is the one under the Event Handler heading. The T1 group mapping was confirmed visually for the two authorized Form options. No discrepancy was found, so the mutation proceeded.

## 2. Mutation (one change, one attempt that did not execute, one corrected attempt)

1. Opened the General tab (tab click, no state change).
2. **Attempt 1 — native checkbox click on `Enabled` (ref f1e445): did NOT execute.** The browser tool timed out after 5000 ms at "visible, enabled and stable": the locator resolved to the ExtJS checkbox `input` (`data-mgcompnamevalue="DiagnosticsGeneralEnabledEdit"`, `aria-checked="false"`), but the overlay `span` (`ext-comp-1751-displayEl`) intercepted pointer events on every retry. Suspected environment/rendering blocker (overlay intercepting the checkbox input). No mutation occurred.
3. **Postcondition check (fresh untargeted snapshot, counted as the one fresh inspection):** `Enabled` still unchecked, no `[checked]`, all other General values unchanged. Confirmed no mutation had happened, so retry was permitted under the brief.
4. **Attempt 2 — corrected attempt: click on the visible `Enabled` label text (ref f1e447).** Executed once. Result: `Enabled` checked (`t2-03`); System Information and Security unchanged (unchecked). The accessibility tree also showed `Enabled [checked] [active]` (f1e445) before OK.
5. **Native OK (ref f1e429), once.** The dialog closed; the URL returned to `favoriteContext=FX_Items`; the runtime FX_Items was unchanged (`t2-08`).

Nothing else was clicked on Form, IDO Collections, or Others during the change. Events and Event Handler Include were not clicked.

## 3. Read-only verification after OK (reopened dialog, fresh)

Reopened via View > User Preferences... > Diagnostics. Dialog opened on General. Each tab read by snapshot and screenshot; no checkbox clicked; the dialog was closed with its Close Window (X) control, with no pending edit.

| Tab | Option | T1 original | T2 verified after OK | Changed? | Evidence |
| --- | --- | --- | --- | --- | --- |
| General | Enabled | Off | **On** (`[checked]`) | **Yes (intended)** | `t2-04`; snapshot f1e722 |
| General | System Information | Off | Off | No | snapshot f1e727 |
| General | Security | Off | Off | No | snapshot f1e732 |
| Form | Initialization (top) | Off | Off | No | `t2-05`; snapshot |
| Form | **Events** | **On** | **On** | No (not clicked) | `t2-05`; snapshot f1e758 |
| Form | Scripts | Off | Off | No | `t2-05` |
| Form | IDO Methods | Off | Off | No | `t2-05` |
| Form | Form Server | Off | Off | No | `t2-05` |
| Form | Component Initialization | Off | Off | No | `t2-05` |
| Form | List Building | Off | Off | No | `t2-05` |
| Form | To/From Source | Off | Off | No | `t2-05` |
| Form | To/From Control | Off | Off | No | `t2-05` |
| Form | User Interaction | Off | Off | No | `t2-05` |
| Form | Component Dependent Notification | Off | Off | No | `t2-05` |
| Form | **Event Handler Include** | **On** | **On** | No (not clicked) | `t2-05`; snapshot f1e808 |
| Form | Validator Include | Off | Off | No | `t2-05`; snapshot f1e813 |
| Form | Variable Initialization | Off | Off | No | `t2-05` |
| Form | Variable Value Changed | On | On | No (not authorized) | `t2-05`; snapshot f1e823 |
| Form | Variable Dependent Notification | Off | Off | No | `t2-05` |
| IDO Collections | Initialization, Commands, Update Overview, Load Overview, Update Values, Load Values, Dependent Notification (7) | all Off | all Off | No | `t2-06`; snapshot |
| Others | Interpreter: Overview, Scripts, Components, Variables, Properties, Others (6) | all Off | all Off | No | `t2-07`; snapshot |

Totals: 32 options compared. **Changed relative to T1: 1 (General > Enabled, Off → On). Unchanged: 31.** This matches the expected comparison in the brief (Enabled ON, Events ON, Event Handler Include ON, and all other 29 options unchanged).

## 4. Screenshots (worker-captured, each reviewed)

| File | What it shows | What it does NOT prove |
| --- | --- | --- |
| `evidence/EXP-053/t2-01-preflight-General-tab-before-T2-change.png` | Pre-change General tab: Enabled, System Information, Security all unchecked. | That the value persists beyond this session. |
| `evidence/EXP-053/t2-02-preflight-Form-tab-group-mapping-before-T2-change.png` | Pre-change Form tab: Events checked; Event Handler Include checked; Validator Include unchecked; Value Changed checked; others unchecked. | Runtime effect of any option. |
| `evidence/EXP-053/t2-03-after-corrected-label-click-Enabled-state.png` | Enabled checked; System Information and Security unchecked; dialog open; runtime dimmed behind. Status text `Enabled (Object 1 of 1)` is the dialog's focus indicator. | That OK was applied (OK was pressed afterwards; `t2-04` verifies). |
| `evidence/EXP-053/t2-04-verify-reopened-General-tab-Enabled-ON.png` | Reopened General tab: Enabled checked; System Information and Security unchecked. | Event emission (no log was opened). |
| `evidence/EXP-053/t2-05-verify-reopened-Form-tab-unchanged-from-T1.png` | Reopened Form tab: same 16-checkbox state as T1 (Events, Event Handler Include, Value Changed checked). | Any effect on logging. |
| `evidence/EXP-053/t2-06-verify-reopened-IDO-Collections-tab-unchanged-from-T1.png` | Reopened IDO Collections tab: all seven unchecked. | — |
| `evidence/EXP-053/t2-07-verify-reopened-Others-tab-unchanged-from-T1.png` | Reopened Others tab: Interpreter six unchecked. | — |
| `evidence/EXP-053/t2-08-final-state-dialog-closed-runtime-unchanged.png` | Dialog closed; runtime FX_Items with three rows, Save greyed, identity bar DEM. | Diagnostic log state (not opened). |

Accessibility evidence (snapshots) is in the Playwright tool output files listed in §6 and is summarized in §3.

## 5. Action audit (T2)

- Clicks: 15 attempted (View ×2, User Preferences ×2, Diagnostics ×2, Form tab ×2, General tab ×1, IDO Collections ×1, Others ×1, Enabled checkbox ×1 **timed out, not executed**, Enabled label ×1 **executed**, OK ×1, Close Window ×1). Effective clicks: 14.
- **Diagnostics preference mutations: 1** (Enabled OFF → ON via the label). Events and Event Handler Include clicks: 0.
- Diagnostics confirmations with OK: 1.
- Diagnostics read-only reopen: 1 (dialog closed with X; no OK on the verification reopen).
- Tab selects: 1 successful. One earlier `browser_tabs select index 1` returned "Tab 1 not found" (tool error, no action); one `list` confirmed both tabs; a retry succeeded.
- Snapshots: 10 explicit (3 untargeted: after tab retry, after Diagnostics opened, after the failed click; 7 targeted to the dialog or Web Client region). Tool outputs also generated automatic snapshot files for click and navigation actions; those are browser-tool files, not worker actions.
- Finds: 6 (before the change: `User Preferences`, `Diagnostics`, `Enabled`; during the reopen: `View`, `User Preferences`, `Diagnostics`). Read-only.
- Screenshots: 8 (`t2-01` to `t2-08`).
- Typing 0; key presses 0; Enter 0.
- Refresh 0; F4 0; Filter-in-Place 0; Get More Rows 0; New 0; Delete 0; runtime Save 0.
- Diagnostic Log opened 0; cleared 0.
- FX_Items opened 0; closed 0; reopened 0; runtime data mutations 0.
- Designer actions 0; Initial Command edits 0; Designer Save 0.
- Scope changes 0; reloads 0; reauthentications 0; browser restarts 0.
- Dialog prompts answered 0; alerts or confirmations accepted 0.
- Browser evaluate or run-code calls: 0. (The `Ran Playwright code` lines in tool output are the tool's own generated locator snippets for each UI action; the worker issued no script.)
- Timeouts: 1 (Attempt 1, the Enabled checkbox click). Ref-not-found: 0. Fresh-snapshot recovery allowance used: 1 of 1 (the untargeted snapshot after the timeout doubled as the postcondition check). Corrected visible attempts: 1 (the label click).

## 6. Browser-tool files (automatically generated; not worker-authored)

The browser tool wrote page snapshot and console files during T2 under `evidence/playwright/`, including `console-2026-10-11T05-14-51-116Z.log` and `page-2026-10-11T05-14-56-278Z.yml` through `page-2026-10-11T05-16-10-579Z.yml`. These are tool-generated and separately identified. They were not authored by the worker.

## 7. Limitations and discrepancies

- **Timed-out checkbox click (Attempt 1).** The `Enabled` checkbox input was intercepted by its ExtJS overlay span (`ext-comp-1751-displayEl`). The label click succeeded. This is a suspected environment/rendering blocker with the checkbox control in this dialog. It is recorded as a discrepancy, not a product finding. The corrected attempt was the label, which toggled the same checkbox state (`[checked]` confirmed).
- The `Enabled` label click is a different element from the checkbox input. Both affect the same ExtJS checkbox component (confirmed by `[checked]` on the checkbox itself after the click). Equivalence of the two input paths beyond this single observation is not established.
- Verification is UI-level only: the reopened dialog shows the saved client-side preference. Persistence across sessions or in the database is not tested.
- No log output was observed. Whether Enabled ON produces any log entries is unknown until the controlled capture.
- The "New" tooltip visible in one snapshot after the earlier runtime state is hover focus from the tool; no action was taken on New.

## 8. Final browser state

- Web Client: tab 1 selected; identity bar DEM configuration; URL `favoriteContext=FX_Items`; runtime FX_Items open with three rows (`dumbbell`, `eggs`, `guitar`), Save greyed; no dialog; no banner; no challenge. Not closed.
- Diagnostics: **Enabled ON (changed)**; Events ON and Event Handler Include ON (unchanged); the other 29 options unchanged from T1.
- Designer (tab 0): not touched in T2; FX_Items User-scoped, Initial Command `Refresh`, Save greyed (per T1).
- Stable: no open dialog, no unsaved-change prompt.

## 9. Next step and restoration obligation

- **Restoration obligation (AC-8):** Diagnostics Enabled must be returned to its T1 original **Off** at the end of the experiment, via the same native General tab and ordinary OK, and then read back. Events and Event Handler Include must remain ON unless the operator directs otherwise (they were never changed).
- **Next permitted action (not performed here):** the controlled log capture (clear log once, runtime close, one FX_Items opening) is a separate task; the coordinator should authorize it. Per the operator's refresh-before-apply note, if the log shows no Form event entries after the controlled opening, stop for review and do not refresh the browser.
- Stopped for coordinator review after T2 verification, per the T2 instruction.
