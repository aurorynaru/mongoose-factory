# EXP-131 T2 - FX_BridgeTest Form creation (2026-10-25)

Harness header: `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=2`, `task=T2`. Bounded instruction: source review, then one User-scoped BuildFromScratch Form `FX_BridgeTest`; no component, no asset, no Form Script edit, no bridge attempt, no runtime test, no close/reopen, no extra Form Save. Form left open for the next task.

Source review (before any browser action): `evidence/EXP-131/T2-source-review.md`.

## 1. Pre-mutation gates (re-checked at T2 start)

| Gate | Readback (quoted) | Result |
| --- | --- | --- |
| Designer clean, no Form open | URL has no `MGForm` parameter; Form tab absent; `button "Save" [disabled]`, `button "Regenerate Form" [disabled]`, `button "Undo" [disabled]`, `button "Redo" [disabled]` | Clean |
| User scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | User |
| Account identity (Web Client header) | `button "anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT"` | Same account as T1 |
| Console baseline | Designer `Console: 2 errors, 0 warnings`; Web Client `Console: 3 errors, 10 warnings` | Unchanged from T1 |
| Target Form absent | Select Form (Web Client toolbar Open), Filter `FX_Bridge`, End pressed: the grid has no rows (`grid [ref=f1e104]` empty). Dialog closed with Cancel; `find "Select Form"` then returned `No matches found` | Absent (filtered view, same method as T1) |

Account ownership: the coordinator handoff records that the operator confirmed `anton.ramos@3mworks.com.ph` is the operator's own account. Not re-established by the worker.

## 2. Creation workflow (recipe `recipes/forms/create-basic-form.md`, Steps 1-5)

1. Designer toolbar `New` (`button "New"`, the recipe's `mgtoolbarbutton-1088`). Dialog `Form Wizard Selection`.
2. Radio `New Form`: the locator resolved to `aria-checked="true"`, and screenshot `t2-01` shows the New Form radio filled. The click itself timed out (see section 4) and was not repeated.
3. Category combobox: `Classic`. Wizard combobox: `BuildFromScratch` (list label `Build from Scratch`, "Plain form without defined components"). Readback in the wizard snapshot: `combobox [ref=e302]: Classic`, `combobox [active] [ref=e310]: BuildFromScratch`. OK.
4. Page 1 `Form Wizard - Build From Scratch`: Name `FX_BridgeTest`; Form Type `BuildFromScratch`; Form Layout `GridLeft`; Device Type `Default`; Data Source empty; Query Form empty; Comments empty. Next.
5. Page 2: `checkbox "Save Template" [checked]` on arrival. The unchecking click timed out (section 4). After one corrected label click, `find` showed `checkbox "Save Template" [active]` with no `[checked]`, and screenshot `t2-03` shows an empty checkbox. Finish.
6. Alert `alertdialog "Infor Mongoose Application Development Framework - Form Wizard - Build From Scratch"`: text `Process Completed Successfully`, button `OK`. OK clicked once. The Designer URL then gained `&MGForm=FX_BridgeTest`.

Response to the creation (Finish): `Process Completed Successfully` with OK only. No native Save toast was seen in the post-Finish snapshots; the Designer opened `FX_BridgeTest` with Save disabled (recipe Step 5: Finish persists immediately).

## 3. Post-creation readback (Designer, untargeted snapshot after OK, then Details expanded)

- Tab: `tab [selected] ... heading "FX_BridgeTest"`; close control `button "closable FX_BridgeTest"`.
- Properties (Form tab): `Name` = `FX_BridgeTest`; `Version` = `User version for user anton.ramos@3mworks.com.ph` (accessibility text; the screenshot shows the truncated `User version for us...`); `Device Type` = `Default`; `Form Type` = `Normal`; `Is Master` = `True`.
- Toolbar: `Save [disabled]`, `Regenerate Form [disabled]`, `Undo [disabled]`, `Redo [disabled]` (readback at the end, `find "Regenerate Form"`: both disabled).
- Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Details panel (expanded by a view-only `Expand Panel` click, then the Components tab): Components grid shows one row, `Pane (00)`, which is the Form's root pane, with no other component.
- Dialogs open at end: none (the Process Completed dialog closed with OK; no dialog in the final snapshot).
- Console after creation: Designer `2 errors, 0 warnings`.

## 4. Anomalies and recovery

- **A-1 (radio click, #a8):** `browser_click` on the New Form radio timed out at `element is outside of the viewport` after 5 s. The locator resolved to `input ... aria-checked="true"`. The screenshot taken afterwards (`t2-01`) shows the dialog fully inside the viewport and the radio already selected. The click was not repeated; the radio state was taken as already correct. Classification: spurious visibility timeout; no effect.
- **A-2 (checkbox click, #a16):** `browser_click` on `Save Template` checkbox timed out: `<span data-ref="displayEl" ...> intercepts pointer events` for the full 5 s. No effect.
- **Recovery:** one fresh untargeted snapshot (#38; checkbox still `[checked]`; refs unchanged; Designer behind the wizard clean) and one corrected attempt: click on the label text `Save Template` (#39), which unchecked it. This is the one corrected attempt of the recovery allowance; allowance used: fresh snapshot 1/1, corrected attempt 1/1.
- No "Ref not found" error occurred.

## 5. Browser-action accounting (T2)

- **Browser actions: 21.** 19 returned ok; 2 timed out with no effect (A-1 radio, A-2 checkbox).
  - Tab selects: 3 (tab 0, tab 1, tab 0). Tab list: 1 read, before the first selection.
  - Clicks: 14 (Open; Select Form Cancel; Designer New; Category arrow; Classic option; Wizard arrow; Build from Scratch option; wizard OK; Next; Save Template label; Finish; Process Completed OK; Details Expand Panel; Components tab). Plus the 2 timeouts above.
  - Key presses: 1 (End in the Select Form filter).
  - Type: 1 (Name `FX_BridgeTest` in the wizard Name combobox).
- **Browser reads: 30.** Tab list 1; snapshots 12 (including the 1 fresh recovery snapshot); finds 13; screenshots 4 (`t2-01` to `t2-04`).
- **Browser JavaScript / evaluate / run-code written by the worker: 0.** The `### Ran Playwright code` blocks in tool outputs are generated by the MCP tool for each action.
- **Save clicks: 0.** No Save, Regenerate, Delete, Check In/Out, Undo, Redo, Form Script or asset action. The top-toolbar `Delete` was not clicked.
- **Recovery allowance:** 1 of 1 fresh untargeted snapshot used; 1 corrected attempt used; stop rule not triggered.
- **Credentials typed, read or recorded: 0.** Tenant and session values appear only as `<secret>` placeholders in tool URLs.
- **Session expiry, sign-in, portal banner: none appeared.**

## 6. Console comparison

| Reading | Tab | Result |
| --- | --- | --- |
| T2 start | Designer | 2 errors / 0 warnings |
| T2 start | Web Client | 3 errors / 10 warnings |
| During Select Form re-check | Web Client | 3 errors / 10 warnings |
| After wizard creation | Designer | 2 errors / 0 warnings |
| Final | Designer | 2 errors / 0 warnings |

No rise in either tab. Stop rule not triggered.

## 7. Save and creation accounting

- Forms created: **1** (`FX_BridgeTest`, User scope, classic BuildFromScratch, Save Template unchecked).
- Designer Save invocations (ordinary toolbar Save): **0**. The creation itself was performed by the wizard Finish, per the recipe.
- Components added: **0**. Form Script edited: **0**. Assets created: **0**. UserControl components: **0**. Global objects: **0**.
- Close/reopen performed: **0** (the Form stays open for T3).

## 8. Acceptance (T2 view)

- **AC-1:** re-established at T2 start (section 1). Operator ownership confirmation is from the coordinator handoff, not re-established by the worker.
- **AC-2 (partial, this task):** met for the Form creation readback. `t2-04` shows the `FX_BridgeTest` tab, Name `FX_BridgeTest`, Device Type Default, Form Type Normal, Is Master True, and the status bar `ScopeType: User`. The Version field's full text is in the accessibility readback (`User version for user anton.ramos@3mworks.com.ph`); the screenshot shows it truncated. No unrelated Form created; Save disabled.
- **AC-3 to AC-8:** not started (T2 scope excludes asset, component, script, Save, close/reopen, runtime).

## 9. Limitations

- **Save Template unchecked: observed, not persisted-verified.** The checkbox state was read before Finish (`t2-03`). Whether a template artifact was created was not checked (no template inventory read in T2). Operator review of the object inventory is needed.
- **Script Language of FX_BridgeTest: not read.** The Behavior group was not expanded (a Designer-dirty risk was recorded in EXP-093 for view actions). It is the first item for T3 and must be read with a clean-state check after each step.
- **Version text:** accessibility readback, not visible in full in the screenshot.
- **Absence of FX_BridgeTest** was established by the Web Client filtered Select Form view (same method as T1); completeness of the inventory is not established by that method.
- **The Designer and Web Client have not been reloaded;** no database-level durability is claimed.
- **No native Save toast** was observed after Finish; the Process Completed alert text is the Finish response.

## 10. Files written (T2)

- `evidence/EXP-131/T2-source-review.md` (created T2)
- `evidence/EXP-131/T2-form-creation-summary.md` (this file)
- `evidence/EXP-131/t2-01-form-wizard-selection-before-category.png` (tool-written at worker filename)
- `evidence/EXP-131/t2-02-form-wizard-category-classic-wizard-dropdown.png`
- `evidence/EXP-131/t2-03-wizard-page2-save-template-unchecked.png`
- `evidence/EXP-131/t2-04-designer-form-created-clean-components.png`
- `experiments/EXP-131-first-fx-web-user-control-to-form-script-bridge.md` (T2 section appended; status line updated)
- Tool-written, outside `evidence/EXP-131/`: `evidence/playwright/page-2026-10-25T12-*.yml` (one per browser action or read with a file result) and `evidence/playwright/console-2026-10-25T12-*.log`.

## 11. Screenshot proof summary

- `t2-01-...`: the Form Wizard Selection dialog inside the viewport; New Form radio filled; Category and Wizard empty. Proves dialog state before Category. Does not prove the wizard values later selected.
- `t2-02-...`: Category `Classic`; Wizard drop-down open, listing `Build from Scratch` (first item). Proves the Wizard option list; does not prove the chosen value (readback from snapshot: `BuildFromScratch`).
- `t2-03-...`: wizard page 2 with `Save Template` checkbox empty (unchecked); Next disabled; Finish enabled. Proves the unchecked state at the time of the screenshot. Does not prove the template was not created.
- `t2-04-...`: Designer with `FX_BridgeTest` tab; Properties Name `FX_BridgeTest`, Device Type Default, Form Type Normal, Is Master True; Details Components grid shows only `Pane (00)`; toolbar Save and Undo greyed; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Proves the Form identity, the User scope, and the clean save state. Does not prove persistence after close/reopen, the Version text in full, or the Script Language.

## 12. Knowledge state (T2)

- Creation via Designer New > Form Wizard Selection (Classic, Build from Scratch) > Page 1 > Page 2 (Save Template unchecked) > Finish > `Process Completed Successfully` > OK: **observed** (one execution; the recipe is `verified` from EXP-002 and EXP-002-R2).
- Wizard radio click timeout (outside viewport) and checkbox click timeout (intercepted by `displayEl`): **observed** (one execution each); a label click unchecked the box: **observed** (one execution).
- Finish persists the Form and leaves it open with Save disabled: **observed** (consistent with EXP-002).
- The Form's Script Language value and whether it is C#: **unresolved** (not read).
- The `WSForm.invoke` contract: **unresolved** (not reached in T2).
