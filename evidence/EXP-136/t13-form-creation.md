# EXP-136 T13 - Form `FX_InventoryDashboard` creation (one wizard Finish; Caption and Script Language set in Properties; no Designer Save)

Run R-20261026-062909-9GoC, cycle 18, task T13. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User (`anton.ramos@3mworks.com.ph`), configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Scope of this task

- One Form creation: Designer toolbar New > Form Wizard Selection (New Form, Classic, BuildFromScratch) > wizard page 1 (Name) > Next > page 2 (Save Template unchecked) > Finish > "Process Completed Successfully" OK.
- One Form-only Caption commit (retype, then label-cell blur; no Enter).
- One Form-only Script Language correction (Visual Basic default changed to Visual C#, then label-cell blur). Authorized by brief step 8 as the minimum Form property adjustment.
- No Designer Save, Form close or reopen, component, Form Script method, variable, Web User Control Asset, Portal reload, runtime open, Refresh activation, browser JavaScript, Enter key press, credential action, or session recovery.
- Not touched: `FX_vInventoryJson` (T11), `FX_Inventory/index.html` (T12), existing Forms, FX_InventoryItems, mock artifacts.

## 2. Preconditions observed before the mutation

| Check | Observed result |
| --- | --- |
| Tabs (list) | Tab 0 = Web Client portal (`favoriteContext=FX_InventoryEditor`). Tab 1 = Designer, `designer/Default.aspx`, page title with `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, URL `configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM`. |
| Selected tab | Tab 1 (Designer) selected after the list; fresh untargeted snapshot taken. |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. |
| Form loaded | None (empty canvas, Properties Form tab). |
| Save state | **Enabled** (inherited pending state from T11 and T12; not clicked). Undo and Redo disabled. |
| Dialogs / prompts | None open. No session-expiry, sign-in or server-event error text. Console `2 errors, 0 warnings`. |
| Collision | Select Form was not re-run in T13. The T6 zero-row absence result for `FX_InventoryDashboard` (accepted at operator level) is carried. The creation below did not report a duplicate-name error. |

## 3. Creation sequence (each step once; none repeated)

| Step | Action | Observed result | Evidence |
| --- | --- | --- | --- |
| C1 | Click the Designer toolbar "New" (New Form Definition) | Form Wizard Selection dialog opened; no save or discard prompt. | snapshot |
| C2 | Click radio "New Form" (already selected) and the Category arrow; choose `Classic` | Category shows `Classic`. | snapshot |
| C3 | Open the Wizard list; choose `Build from Scratch` (tooltip "Plain form without defined components") | Wizard combobox shows `BuildFromScratch`. | `t13-form-wizard-selection-classic-buildfromscratch-precommit.png` (Classic, BuildFromScratch, New Form selected) |
| C4 | Click OK (once) | Wizard page 1 "Form Wizard - Build From Scratch". | snapshot |
| C5 | Type `FX_InventoryDashboard` into Name (no Enter) | Name shows `FX_InventoryDashboard`. Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source blank, Query Form blank, Comments blank. Finish disabled, Next enabled. | `t13-wizard-page1-name-FX_InventoryDashboard-precommit.png` |
| C6 | Click Next (once) | Page 2: checkbox "Save Template" shown **checked**. | snapshot |
| C7 | Click the "Save Template" label (once) | Checkbox now **unchecked** (no `checked` state in the snapshot). Finish enabled. | `t13-wizard-page2-save-template-unchecked-precommit.png` (checkbox clear) |
| C8 | Click Finish (once) | Alert "Process Completed Successfully" with OK. The Designer URL gained `MGForm=FX_InventoryDashboard`, and the new Form opened as the active tab (heading `FX_InventoryDashboard`). | snapshot |
| C9 | Click the alert OK (once) | Alert closed. | snapshot |

Creation attempts: **1** (one wizard Finish). No retries. No second Form.

## 4. Post-Finish identity (observed, same session)

| Property | Observed value (Properties grid) |
| --- | --- |
| Tab heading | `FX_InventoryDashboard` |
| Name | `FX_InventoryDashboard` (tree gridcell text) |
| Version | `User version for user anton.ramos@3mworks.com.ph` |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Device Type | `Default` |
| Form Type | `Normal` (the wizard was BuildFromScratch; the Designer shows Normal, as EXP-135 also recorded for a MultiView wizard) |
| Is Master | `True` |
| Caption (before T13 edit) | blank |
| Canvas | Empty (no components). |
| Save state | **Disabled** immediately after Finish and OK (see section 7). |

Evidence: `t13-form-created-postfinish-properties-caption-blank.png` (viewport: Name, Version, Form Type Normal, Is Master True, Caption blank, scope footer, empty canvas).

## 5. Caption correction (EXP-135 procedure; no Enter)

| Step | Action | Observed result |
| --- | --- | --- |
| K1 | Click the Caption value cell (one click; the Playwright call used a generic arrow-cell locator) | An inline Caption combobox opened with the string-resource dropdown (first entry `ApplyFullTextIndexScriptQuestion`, then `CatalogNotExistNotice`, etc.). Screenshot confirms it is the Caption editor, not another property. `t13-caption-value-cell-clicked-precommit.png`. |
| K2 | Type `FX_InventoryDashboard` into the combobox (fill; no Enter, no list pick) | Field shows the typed value (clipped to `...ventoryDashboard`); list still open. `t13-caption-retyped-uncommitted.png`. |
| K3 | Click the Caption label cell (treeitem `Caption`) to blur | Caption row shows `FX_InventoryDasht` (clipped in the column). The Save and Undo toolbar buttons became enabled. |
| K4 | Read back by text search (no click) | Caption gridcell text: **`FX_InventoryDashboard`** (exact). Not an EXP-135 string-resource value. `t13-caption-after-label-blur-readback.png` (viewport). |

Enter presses in T13: **0**. Caption commit count: **1**.

## 6. Script Language correction (one Form-property change)

| Step | Action | Observed result |
| --- | --- | --- |
| L1 | Expand the Behavior group (click its label; then the Properties toolbar "Expand all" control, one click) | The Script Language row became visible: `Visual Basic` (the default). `t13-script-language-default-visual-basic-precommit.png` shows `Script Language  Visual Basic`. |
| L2 | Open the Script Language combobox and choose `Visual C#` (one click) | Combobox displays `Visual C#` (active). |
| L3 | Click the Script Language label cell to blur | Row shows `Visual C#`; the description pane reads `Script Language`. `t13-script-language-visual-csharp-after-blur.png` (`Script Language  Visual C#`). |

Script Language correction count: **1**. Enter presses: **0**.

## 7. Designer state and Save observations (unresolved)

- **Save enabled before creation** (inherited pending state from T11 and T12).
- **Save disabled immediately after Finish and OK** (snapshot after C9; toolbar `Save [disabled]`, Undo disabled). This is an unexplained change. Possible causes that were **not** verified: Finish persisted or cleared the inherited T11/T12 pending state; or the Designer reset its dirty flag when the new Form opened. The UI does not distinguish these.
- **Save enabled again** after the Caption blur (K3) and remained enabled after the Script Language blur (L3). The Caption and Script Language are therefore pending Form-property changes in the Designer. Neither is confirmed as persisted. The Designer Save was **not** clicked (correct for this stage).
- Consequence for later stages: the eventual Save (stage AC-8) will also carry any remaining T11/T12 pending state, if it still exists. AC-9 must check persistence of the Form, the Caption, the Script Language and the variable/asset (T11/T12) after close and reopen.

## 8. Acceptance evidence (T13 scope)

| AC | T13 status | Reason |
| --- | --- | --- |
| AC-1 | carried (operator-accepted); not re-checked | T6 zero-row Select Form absence for `FX_InventoryDashboard` (carried). Not repeated in T13. |
| AC-2 | carried (operator-verified hashes) | Not re-read in T13. Hashes not recomputed. |
| AC-3 | carried (same-session; T11) | Unchanged. |
| AC-4 | operator-accepted qualified (carried) | Unchanged. |
| AC-5 | **passed for the in-session Designer state, qualified** | Name `FX_InventoryDashboard`; scope User and Version `User version for user anton.ramos@3mworks.com.ph`; Caption `FX_InventoryDashboard` (exact text); Script Language `Visual C#`; Save Template unchecked on wizard page 2 before Finish (screenshot). Qualifications: Caption and Script Language are unsaved pending changes until the Save stage; the Designer shows Form Type `Normal`, not `BuildFromScratch`; "exactly one" was not re-checked by a Select Form list in T13. Persistence is AC-8/AC-9. |
| AC-6 to AC-8 | not evaluated | No component, script or Designer Save in T13. |
| AC-9 | pending | Requires the later close and fresh-Designer readback. |
| AC-10 to AC-13 | not evaluated | Later stages. |

## 9. Mutation and browser ledger (T13)

- Form creations: **1** (wizard Finish). Wizard OK 1; Next 1; Save Template label click 1; Finish 1; alert OK 1.
- Form Caption commits: **1** (retype then label blur). Caption value-cell opens: 1 (not a commit).
- Form Script Language changes: **1** (Visual Basic to Visual C#, label blur).
- Designer Saves: **0**. Form close or reopen: **0** (the Designer opened the new Form automatically after Finish; this is not a close or reopen).
- Components, Form Script methods, variables, Web User Control Assets: **0**.
- Portal reloads: **0**. Refresh activations: **0**. Enter key presses: **0**. Browser JavaScript: **0**. Credentials typed or read: **0**. Session recovery: **0**. Prompts accepted: **0**. Ref-not-found errors: **0**.
- Browser calls (approximate): tab list 1; tab select 1; snapshots about 10 (one untargeted at the start, one untargeted after Finish, the rest targeted); finds about 12; clicks 18 (C1 to C9 plus K1, K3, L1, L2, L3 and the Behavior and Expand-all controls); types 2 (Name, Caption); screenshots 10 (see section 10).

## 10. Evidence files (under `evidence/EXP-136/`)

| File | What it shows | What it does NOT show |
| --- | --- | --- |
| `t13-form-wizard-selection-classic-buildfromscratch-precommit.png` | Form Wizard Selection: New Form selected, Category Classic, Wizard BuildFromScratch, OK/Cancel. | Whether OK created anything (no post-OK capture of the wizard). |
| `t13-wizard-page1-name-FX_InventoryDashboard-precommit.png` | Wizard page 1: Name `FX_InventoryDashboard`, Form Type BuildFromScratch, Layout GridLeft, Device Default, Data Source blank, Finish disabled. | The creation outcome. |
| `t13-wizard-page2-save-template-unchecked-precommit.png` | Page 2: Save Template checkbox clear; Finish enabled. | The outcome of Finish (the Finish result is in the next capture). |
| `t13-form-created-postfinish-properties-caption-blank.png` | After Finish and OK: Designer tab `FX_InventoryDashboard`; Name, Version (User), Device Default, Form Type Normal, Is Master True, Caption blank, empty canvas, scope footer User. | Save state in the screenshot is not decisive (the snapshot shows it disabled). Script Language is not in this view. |
| `t13-caption-value-cell-clicked-precommit.png` | Caption inline combobox open with the string-resource list. | The committed value (not yet committed). |
| `t13-caption-retyped-uncommitted.png` | Typed text in the Caption editor (clipped), list open. | The committed value. |
| `t13-caption-after-label-blur-readback.png` | Caption shows `FX_InventoryDasht` (clipped); Save and Undo enabled. | The full text (read by text search: `FX_InventoryDashboard`). |
| `t13-behavior-group-expanded-script-language-search.png` | Behavior row selected (before Expand all); the Script Language row is not yet visible here. | Script Language value. |
| `t13-script-language-default-visual-basic-precommit.png` | Behavior group expanded: Script Language `Visual Basic` (default); Save enabled. | The corrected value. |
| `t13-script-language-visual-csharp-after-blur.png` | Script Language `Visual C#` after the label blur; Save enabled. | Persistence (not saved). |

Read-back limitation: the snapshot taken while the Caption dropdown was open was about 770,000 characters (the string-resource list) and was saved to a tool-results file. A read of that file was denied by the environment, so no text readback from it is claimed. Values were verified with targeted text searches and viewport screenshots.

## 11. Warnings and unexplained items (no cause invented)

- **Save state changed from enabled (T11/T12 pending) to disabled after Finish, then enabled again after the Caption commit.** Cause not established (section 7).
- The Caption value cell opens the same string-resource combobox recorded in EXP-135 T5; no resource value was selected (the typed literal was committed by the label blur).
- The Form Type displays `Normal` after a BuildFromScratch wizard (observed; not explained).
- Console counter `2 errors, 0 warnings` on the Designer tab throughout the stage (no new error text observed in the UI).

## 12. Next permitted action (coordinator decision)

- The Designer is open on `FX_InventoryDashboard` (User scope), with Caption and Script Language set in-session and **Save enabled (pending; not clicked)**. No dialog is open.
- Stage C (FX_InventoryControl UserControl placement, Use Web Control, Control URL) and stage D (Form Script method) are **not** authorized by T13.
- The Designer Save (stage AC-8) and the close and reopen (AC-9) require a separate coordinator decision.
