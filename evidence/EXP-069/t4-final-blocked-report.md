# EXP-069 — Final acceptance report (T4): BLOCKED at AC-2

Documentation-only task. **Zero browser calls and zero Mongoose changes in T4.** Written 2026-10-13 by worker session `9b6675af-961a-4d99-b436-098306e3be82`, task_message_id `48407e03-cbdd-4beb-a5a1-e5b2a22a2bfd`, run `R-20261013-111338-eWf3`, cycle 3.

Record: `experiments/EXP-069-hello-world-part-4-section-9-um-property-class-extension-right-click.md`.

## 1. Outcome

- **Status: BLOCKED at AC-2.** The FX_UM property class extension was **not** shown to exist or not exist. Its creation result is **unresolved**.
- The one creation action taken was a single **Yes** press on the existing prompt `Property Class Extension FX_UM does not exist. Create it?` (T3). The response was the in-page alert `Timeout expired waiting for response.`, not the Property Class Extension dialog. The alert was acknowledged once with OK. Nothing was confirmed.
- Not claimed: that the extension was created; that it was not created; that its Behavior fields are set; that the component-level Right-Click Menu behaves as the tutorial says.
- Classification of all findings: **observed or unresolved only. Not replay_verified.**

## 2. Acceptance matrix

| AC | Status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** | **Supported only to the extent established by T1 and T2.** Session usable (no expiry, no re-login). FX_Items open in the Designer, User scope, clean. FX_UMCombobox binding, Inheritance and Behavior values recorded. Baseline runtime right-click recorded (one item, `Help`). | Designer: `t1-01`, `t1-03`, `t2-01`, `t2-03`, `t2-04`, `t2-00` (YML). Runtime: `t1-04`, `t1-05`. | Source review was partial: EXP-045 (lines 1–394 of 1589, plus outcome and learned items), EXP-048 (lines 1–572 of 1142, plus outcome), EXP-068-R2 (lines 1–232 of 653, plus outcome). `hello-world-pt4.md` Section 9 was read in full. Behavior groups "New and Copy Operations" and "Dynamic Enabling and Disabling" were collapsed and **not read**, so "all Behavior values" is not complete. The Escape key did not close the runtime menu (see §6). |
| **AC-2** | **FAILED / not met.** Prompt recorded verbatim; one Yes press; no extension dialog; no field set; no OK-confirmation; no scope recorded. | `t2-06` (prompt), `t3-00` (YML, prompt verbatim), `t3-01` (timeout alert), `t3-03` (Designer after OK). | The creation result is unresolved. The Designer offers no read-only way to see whether an FX_UM extension now exists (the Inheritance row shows only the class `FX_UM`). Re-opening the ellipsis was forbidden by the T3 brief. |
| **AC-3** | **Not attempted.** Designer Save 1 not performed; runtime check 1 not performed. | — | Blocked behind AC-2. |
| **AC-4** | **Not attempted.** Override step not reached (its condition needs check 1). Contingency unload: **0**. | — | Blocked behind AC-2. |
| **AC-5** | **Not attempted.** No Details/Add/Find menu was observed; drill-down count 0; FX_UMs Form not opened. | — | Blocked behind AC-2. |
| **AC-6** | **Not attempted.** Designer close/reopen 0; extension settings not verified (none confirmed). Final component-level Right-Click Menu last read as `StdDefault` (T3), unchanged. | `t3-00`/`t3-03` context only. | Blocked behind AC-2. |
| **AC-7** | **Supported for zero unrelated observed changes; cannot exclude an effect on the extension store.** No other component, property, class, record or object was changed by any observed action. No Designer or Web Client unload. No Add or Find. No runtime Save. No dialog or menu left open at the end (see §5). | Audit §3; `t3-03`. | The one Yes press may have created or partly written an FX_UM extension. That cannot be checked without re-invoking the ellipsis (forbidden in T3–T4). |
| **AC-8** | **Documentation completed to the extent possible; result recorded as BLOCKED.** Counts reconciled (§3); inheritance observation (§4); inventory (§7); final state (§5). | This report; the EXP-069 record. | — |

## 3. Browser-action audit (reconciled)

Sources: the worker's own per-task audits in the record (T1, T2, T3) and the controller-generated `evidence/EXP-069/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`. The controller headers ("10 actions, 16 reads"; "6 actions, 9 reads"; "3 actions, 6 reads") use a different categorisation. The totals below come from counting the tool-call rows in each controller table, and they match the worker counts.

| Task | Browser calls | Breakdown |
| --- | --- | --- |
| T1 | **26** | tab lists 1; tab selects 2; snapshots 3; screenshots 9 calls (8 succeeded, 1 timed out); finds 3; element clicks 2 (1 timed out, not executed; 1 right-click executed); coordinate clicks 3 (canvas select; group chevron; blank-area dismissal); text entry 1 (Components filter); Escape key presses 2 |
| T2 | **15** | tab list 1; tab select 1; snapshots 2; screenshots 5; mouse wheels 3 (1 no-op); mouse move 1; element clicks 1 (the Inheritance ellipsis); finds 1 |
| T3 | **9** | tab list 1; tab select 1; snapshots 2; **screenshots 2** (`t3-01`, `t3-03`; corrected from "3" in the T3 record); element clicks 2 (Yes once; alert OK once); finds 1 |
| **Cumulative** | **50** | tab lists 3; tab selects 4; snapshots 7; screenshots 16 calls (15 succeeded, 1 timed out); finds 5; element clicks 5 attempted (4 executed, 1 timed out); coordinate clicks 3; mouse wheels 3; mouse move 1; text entries 1; key presses 2 |

**Mutations and lifecycle (cumulative, T1–T4):**

| Item | Count | Note |
| --- | --- | --- |
| Creation prompt accepted (Yes) | **1** | Response: timeout alert, not the extension dialog |
| Timeout alert acknowledged (OK) | **1** | Acknowledgment only; not a confirmation |
| Extensions confirmed | **0** | — |
| Extension fields set (Add Details Form, Find Form, Property, Right-Click Menu) | **0** | — |
| Inheritance ellipsis activations | **1** | T2 only; not repeated |
| Designer Save | **0** | Save 1 and Save 2 not performed |
| Web Client unload (Unload All Global Form Objects) | **0** | Contingency not reached |
| Designer unload | **0** | — |
| Designer close / reopen | **0 / 0** | — |
| Runtime close / reopen | **0 / 0** | — |
| Runtime right-click on the UM combobox | **1** | T1 baseline only; menu `Help` |
| Runtime Escape key presses | **2** | Neither dismissed the menu |
| Runtime blank-area click (dismissal) | **1** | No menu item chosen |
| Details / Add / Find chosen | **0 / 0 / 0** | — |
| Runtime Save; record edits | **0; 0** | — |
| Checkout, check-in or undo-checkout actions | **0** | — |
| Re-login | **0** | — |
| Browser JavaScript, console or network inspection | **0** | Tool-generated code is not worker-authored |

Flagged usage recorded by the controller audit: one `browser_type` (the Components search-box filter in T1; a view filter, not a Form property).

## 4. Inheritance observation (negative and positive)

- **Observed baseline (negative condition, before any extension):** FX_UMCombobox has a component-level Right-Click Menu of `StdDefault` and blank Add/Details Form, Find Form and Property. At runtime, the UM combobox right-click shows only `Help`; no Details, Add or Find item appears.
- **Positive condition:** not observed. No extension was confirmed, so no runtime check after an extension was possible.
- **The tutorial's absence-then-presence test** (configure the extension, see the menu absent because of the component override, clear the component value, see the menu present) was **not reached**.
- The baseline agrees with the tutorial's description of the component-level override, but it does not test the inheritance lesson.

## 5. Final state (as of the end of T3; T4 made no browser calls)

- **Tab 0 (Designer):** FX_Items, footer `ScopeType: User`, Form clean (Save and Undo disabled), **no open dialog**. FX_UMCombobox selected in the Components list; Properties header `FX_UMCombobox (EnhancedCombo)`. Inheritance: Set Class From `This Component's Attribute`; View Attributes Inherited From Property `FX_UM`; Edit Property Class Extension For Property Class `FX_UM`. Right-Click Menu `StdDefault` (re-read in T3). The Components search box still holds the view filter `FX_UMCombobox`. The Properties pane is scrolled to the Inheritance area (view state).
- **Unresolved extension state:** whether an FX_UM property class extension now exists is **unknown**. The Yes press was not followed by the expected dialog.
- **Tab 1 (Web Client):** not selected in T2–T4. Last observed state (T1, `t1-08`): runtime FX_Items open, clean, record 1 of 3 (dumbbell), `EA`, no menu open.
- **Open dialogs:** none in the Designer; none in the Web Client. No browser-native dialog. No unsaved change.

## 6. Deviations and observations (observed only)

1. Designer element click on the FX_UMCombobox Components row timed out at "visible, enabled and stable" (T1; not executed). A subsequent screenshot also timed out. An explicit tab select of the Designer tab preceded a working screenshot. Cause not established.
2. Runtime Escape did not dismiss the context menu (two presses); a blank-area click did (T1). Cause not established.
3. The first mouse wheel (T2) did not scroll the Properties pane because the pointer was not over it; a corrected move and wheel worked.
4. The Yes press on the creation prompt (T3) returned `Timeout expired waiting for response.` (an in-page alert). The same alert text appeared in EXP-045 after a No press. Whether the Yes press reached the server, and whether any extension was created, is **unresolved**. EXP-045 gives no evidence for the effect of Yes.
5. One no-op Edit call in the T3 record (a worker-side text edit with identical old and new strings; no file change, no Mongoose effect). Recorded as an error in the T3 harness audit.

## 7. Worker-written file inventory (T1–T4)

**Repository files written by the worker:**

- `experiments/EXP-069-hello-world-part-4-section-9-um-property-class-extension-right-click.md` — created T1; updated T2, T3 and T4.
- `evidence/EXP-069/t4-final-blocked-report.md` — this report (T4).

**Evidence screenshots (PNG, worker-requested; 15 successful captures):**

- T1: `t1-01-designer-fx_items-clean-user-scope-before-select.png`; `t1-02-designer-after-canvas-select-attempt.png`; `t1-03-fx_umcombobox-baseline-behavior-properties.png`; `t1-04-runtime-fx_items-before-baseline-right-click.png`; `t1-05-runtime-um-combobox-baseline-right-click-menu.png`; `t1-06-runtime-after-escape-baseline-menu-dismissed.png`; `t1-07-runtime-after-second-escape-menu-state.png`; `t1-08-runtime-after-blank-click-menu-dismissed.png`.
- T2: `t2-01-designer-fx_umcombobox-behavior-group-before-extension.png`; `t2-02-designer-fx_umcombobox-inheritance-and-data-source-after-scroll.png`; `t2-03-designer-fx_umcombobox-inheritance-and-data-source-corrected-scroll.png`; `t2-04-designer-fx_umcombobox-inheritance-group-visible.png`; `t2-06-extension-prompt-after-single-ellipsis-click.png`.
- T3: `t3-01-after-single-yes-extension-dialog-state.png`; `t3-03-after-timeout-alert-ok-designer-state.png`.

**Accessibility snapshot files (YML, worker-requested; 4 files):**

- `t2-00-designer-fresh-snapshot.yml`; `t2-05-designer-pre-ellipsis-fresh-snapshot.yml`; `t3-00-designer-fresh-snapshot-before-yes.yml`; `t3-02-fresh-snapshot-after-yes-timeout-alert.yml`.

**Controller-generated (not worker-written):** `evidence/EXP-069/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`.

**Tool-generated logs (not worker-authored):** the snapshot and console logs under `evidence/playwright/` produced by the browser tool, including `page-2026-10-13T03-14-43-259Z.yml`, `page-2026-10-13T03-15-06-867Z.yml`, `page-2026-10-13T03-15-58-290Z.yml`, `page-2026-10-13T03-19-13-828Z.yml`, `page-2026-10-13T03-21-37-917Z.yml` and `page-2026-10-13T03-21-55-482Z.yml`. The worker read some of them for accessibility readbacks.

**Repository confinement:** the worker did not run git. The harness computes confinement from before/after Git state and the evidence diff, and the operator's git review is authoritative. No file outside the EXP-069 paths was written by the worker. Nothing in `AGENTS.md`, tutorial sources, other experiment records, recipes or `tools/` was edited.

## 8. Decisive-evidence summary

- **Designer identity, scope and clean state:** `t1-01`, `t2-01`, `t3-03`. These show FX_Items, the User scope footer, and Save greyed. They do **not** show the saved (database) state.
- **Prompt, verbatim:** `t2-06` (visual) and `t3-00` (YML). `t3-00` gives the exact text read by the accessibility tree. `t2-06` supports the visual state.
- **Response to Yes:** `t3-01` and `t3-02`. These show the timeout alert and the disappearance of the extension dialog. They do **not** show whether any extension was created.
- **Designer after acknowledgment:** `t3-03`. It shows no dialog and Save greyed. It does **not** show the extension state.
- **Baseline runtime menu:** `t1-05`. It shows `Help` only. It does **not** prove the full definition of the menu.

## 9. Unresolved items and open decisions

1. **Creation result (AC-2):** unresolved. Required before any further EXP-069 step: an operator decision on how the extension's existence will be determined. The T3 record lists the options (the brief forbids re-invoking the ellipsis or pressing Yes again without a new authorization).
2. **FX_UM checkout state:** EXP-048 records FX_UM as still checked out to the operator. Whether that affects creation or confirmation was not tested.
3. **Escape behaviour** on the runtime context menu, and the Designer first-click timeout (§6): observed, causes not established.
4. **Behavior groups not read:** "New and Copy Operations" and "Dynamic Enabling and Disabling" on FX_UMCombobox.
5. **Console counters** (Designer 3 errors; Web Client 7 errors, 3 warnings) were observed in the tab headers and not read.

## 10. Classification

All findings are **observed** (single run, 2026-10-13) or **unresolved**. None is replay_verified. No cross-session durability is claimed. No other experiment is proposed or started here.
