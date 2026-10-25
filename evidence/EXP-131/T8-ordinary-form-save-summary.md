# EXP-131 T8 - One ordinary Designer Form Save of FX_BridgeTest (no close/reopen, no runtime) (2026-10-25)

Harness header: `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=9`, `task=T8`. Bounded instruction: confirm the T7 preflight (FX_BridgeTest selected, User scope, Visual C#, Pane (00) plus one FX_BridgeControl, Save enabled, no dialog, console 2 errors / 0 warnings); activate the ordinary Designer top-toolbar Save exactly once; read back Save/Undo, identity, scope, components and console; stop with FX_BridgeTest open. No configuration change, no Form Script or asset reopen, no generated-variable edit, no Regenerate, no close/reopen, no runtime.

## 1. Inputs read before action

- `evidence/EXP-131/T7-user-control-component-summary.md`, `evidence/EXP-131/T6-web-user-control-asset-summary.md`, `evidence/EXP-131/T5-form-script-fx-echo-summary.md` (state carried into T8).
- `recipes/components/configure-basic-component.md` (section on the toolbar Save: `mgtoolbarbutton-1085`, POST `DesignerSession/SaveChanges` with `{ formId }`, disables Save; native click required).
- `recipes/forms/create-basic-form.md` (Save persistence notes; read-only grep, not re-read end to end).
- The brief's recipe path `recipes/forms/*save*` does not exist; the Save procedure was located in the configure-basic-component recipe above.
- `UserControl.js` was NOT opened or inspected.

## 2. Pre-save gate (fresh snapshot, read-only)

| Check | Readback | Result |
| --- | --- | --- |
| Tab | Tab list read first, then tab 0 selected; `tab [selected]` heading `FX_BridgeTest` (`evidence/EXP-131/t8-00-designer-fresh-preflight-snapshot.md`) | Matches |
| Form identity | Properties Name `FX_BridgeTest` | Matches |
| Version | Find readback: `User version for user anton.ramos@3mworks.com.ph` | Matches T2-T7 |
| Scope | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | User (same ScopeName as T1-T7 records) |
| Script Language | Form tab, find readback: `Visual C#` | Matches T4-T5 |
| Components | Components tab, find readback: `Pane (00)` and one `FX_BridgeControl` row, Type `UserControl`, Pane 0, Tab 0 | Exactly one UserControl plus Pane (00) |
| Save / Undo | `button "Save" [ref=e16]` with no `[disabled]`; Undo enabled | Enabled, as expected |
| Dialogs | none open | Clean |
| Console | Designer `2 errors, 0 warnings` | Baseline |

Gate result: passed. The Form's Save button was not disabled, and no Form configuration was changed during the preflight.

## 3. Save (actions in order)

1. Designer top-toolbar **Save** (`button "Save"`, ref e16 from the fresh find; the tool's `Ran Playwright code` targeted `#mgtoolbarbutton-1085-btnEl`). **One** click. Tool response: `ok`, no error, no dialog reported.
   - Not clicked: Regenerate Form (ref e19), Delete (top toolbar, ref e29), Undo, Redo.
2. No separate command followed.

## 4. Application response and read-back (after Save)

- **Application response:** no toast, alert, error message or dialog was visible in the post-Save snapshot (`evidence/EXP-131/t8-01-after-save-snapshot.md`) or the screenshot (`t8-02`). The only text change was the hover tooltip `Save`, which is the cursor residue from the click.
- **Save button:** `button "Save" [disabled] [ref=e15]` (the toolbar wrapper ref changed from e15/e16 across snapshots; the disabled state is on the same Save control).
- **Undo:** `button "Undo" [disabled]`. **Redo:** `button "Redo" [disabled]`.
- **Regenerate Form:** `button "Regenerate Form" [disabled]`. It was enabled before the Save and disabled after it. This change is observed; its cause is not established, and no regeneration was invoked.
- **Form identity:** tab `FX_BridgeTest` selected; Properties Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph` (read by find after Save).
- **Scope:** status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- **Script Language:** `Visual C#` (screenshot `t8-02`).
- **Components:** `Pane (00)` > `FX_BridgeControl` (UserControl; Pane 0; Tab 0) (screenshot `t8-02`).
- **Dialogs:** none open. The page's `alert` nodes are the same empty containers as before the Save, with no text.
- **Console:** `2 errors, 0 warnings` at every reading (start, after the Components tab click, after the Form tab click, after Save, after the screenshot). No increase; stop rule not triggered.

## 5. Interpretation (what this does and does not show)

- The disabled Save, Undo and Redo states are consistent with a completed save of the pending Form changes (Form Script, asset reference, UserControl). The recipe identifies the Save button's disabled state as the clean-state indicator.
- **Not established by T8:**
  - Compilation of the `FX_Echo` C# method: no compile error was visible, but the compile result was not inspected (the Compile Result panel was not opened, per the brief). Status **unresolved**.
  - Whether the UserControl's `User Control Name` expression (`V(UserCtrl_userControl1_USER)`) was re-keyed or regenerated: not read in T8 (the brief forbids editing or reading generated variables beyond the defined readbacks). Status **unresolved**.
  - Whether the Web User Control Asset content is stored in the database: not established. No reopen was performed.
  - Persistence across close/reopen: not tested in T8 (next task).
  - `WSForm.invoke` contract, callback behavior and runtime output: not tested.

## 6. Actions and reads (T8, exact)

- **Browser actions: 4** (tab select 1; clicks 3: Designer Details `Components` tab 1, Form properties tab 1, top-toolbar Save 1). All returned ok; none timed out. Reconciliation: 1 + 3 = 4. Key presses 0; text entries 0.
- **Browser reads: 10** (tab list 1; snapshots 2 (`t8-00`, `t8-01`); finds 6 (`Pane (00)`; `FX_BridgeControl|UserControl`; `Script Language`; `button "(Save|Undo)"`; post-Save `button "(Save|Undo|Redo)"|alert|dialog|toast|disabled`; `User version for`); screenshots 1 (`t8-02`)). Reconciliation: 1 + 2 + 6 + 1 = 10.
- **Designer Save: 1** (single click). Undo: 0. Redo: 0. Delete (top toolbar): 0. Regenerate Form: 0. Check In/Out: 0. Close/reopen: 0. Runtime open: 0. Form Script reopen: 0. Asset editor reopen: 0.
- **Recovery allowance:** not used in T8; no failed action, no "Ref not found", no timeout. The allowance remains exhausted since T2.
- **Browser JavaScript / evaluate / run-code written by the worker: 0.** The `Ran Playwright code` blocks are generated by the MCP tool per action.
- **Shared `UserControl.js`:** not read or inspected.
- **Mock/FX_InventoryPrototype01 objects:** not touched.

## 7. Console comparison

- Designer counter: `2 errors, 0 warnings` at all T8 readings (unchanged from the T1-T7 baseline).
- Tool-written log `evidence/playwright/console-2026-10-25T13-19-15-482Z.log` (created at the T8 tab listing; cumulative for the Web Client session; new entries reported at lines 1-2). Not like-for-like with the Designer counter. Not copied into this evidence (it may contain a sign-on identifier line).

## 8. Evidence files (T8)

- `evidence/EXP-131/t8-00-designer-fresh-preflight-snapshot.md`: fresh accessibility snapshot before Save. Proves tab identity, Name, Version, User scope, the Save-enabled state and the clean console. The Script Language (`Visual C#`) and component inventory readbacks come from the read-only finds in section 2 (not saved as files). Does not prove any content of the Form Script or asset.
- `evidence/EXP-131/t8-01-after-save-snapshot.md`: fresh accessibility snapshot after Save. Proves Save, Undo and Redo disabled; no dialog text; console 2/0. Does not prove compilation, storage or persistence.
- `evidence/EXP-131/t8-02-designer-after-save-clean.png`: screenshot after Save. Shows FX_BridgeTest tab and Name; Save and Undo icons greyed; Version truncated (`User version for us...`; full text in the find readback); Script Language `Visual C#`; Components `Pane (00)` > `FX_BridgeControl` (UserControl); status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no dialog. Proves the post-Save clean state and the component inventory as displayed. Does not prove the saved definition's contents, compilation, or the asset.
- Tool-generated automatic artifacts (not worker-named): `evidence/playwright/page-2026-10-25T13-19-34-130Z.yml`, `evidence/playwright/page-2026-10-25T13-19-40-859Z.yml`, `evidence/playwright/page-2026-10-25T13-19-49-040Z.yml`, `evidence/playwright/console-2026-10-25T13-19-15-482Z.log`.

## 9. Acceptance (T8 view)

- **AC-1:** unchanged; the T8 preflight re-established the Designer state (User scope, FX_BridgeTest, Visual C#, clean console). The account-isolation gate was not re-run in T8 (its evidence is T1).
- **AC-2:** supported: `t8-02` and the post-Save readbacks identify FX_BridgeTest (Name, User version, User scope) with no unsaved state (Save disabled) and no unrelated Form action.
- **AC-3:** unchanged from T6; the asset was not reopened in T8.
- **AC-4:** partial. Exactly one `FX_BridgeControl` (UserControl) plus Pane (00) is visible after Save (`t8-02`). The UserControl reference and the `FX_Echo` method were not re-read in T8 (the brief forbids reopening them here).
- **AC-5:** partial. The ordinary Form Save was performed once, with the successful application response (no visible error; Save disabled). The close/reopen readback, asset-editor readback and persistence claim are **not reached** (next task).
- **AC-6:** not reached (no runtime).
- **AC-7:** partial. No dialog open; Save, Undo and Redo disabled; FX_BridgeTest open as the brief requires (runtime not opened).
- **AC-8:** accounting in section 6; the final manifest comes after the close/reopen and runtime steps.

## 10. Created-artifact inventory (update to T7)

1. Form `FX_BridgeTest` (User scope, classic BuildFromScratch) (T2). Open; **saved in T8**.
2. Form Script method `FX_Echo` in the `FX_BridgeTest` C# class (T5). Saved as part of the Form in T8 (compilation not verified).
3. Web User Control Asset `FX_Bridge/index.html` with folder `FX_Bridge` (T6). Committed in the asset editor; its persistence **not established** by T8 (not reopened).
4. UserControl component `FX_BridgeControl` on `FX_BridgeTest` (T7), with reference `FX_Bridge/index.html`. Saved as part of the Form in T8. Its `User Control Name` expression still reads `V(UserCtrl_userControl1_USER)` (not edited).
- Not created: runtime Form; any SQL, IDO, global or other non-FX_ object. Unchecked: whether a Save Template artifact was created at T2.

## 11. Limitations and unresolved items

- The Save application response is observed only as the disabled Save/Undo/Redo state and the absence of a visible message. No toast or alert was captured; no compile output was read.
- The `Regenerate Form` button changed from enabled to disabled across the Save; the cause is not established.
- The generated-variable re-keying (`UserCtrl_userControl1_USER` to `FX_BridgeControl`) is unresolved.
- Persistence across close/reopen and the asset content after reopen are untested (next task).
- The WSForm.invoke contract and runtime behavior remain unverified (candidate only).
- The ScopeName `anton.ramos@3mworks.com.ph` matches the T1-T7 records; the T8 preflight did not re-run the account-isolation gate.
