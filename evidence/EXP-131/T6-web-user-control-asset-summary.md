# EXP-131 T6 - Web User Control Asset FX_Bridge/index.html created and authored (no Form Save, no UserControl, no runtime) (2026-10-25)

Harness header: `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=7`, `task=T6`. Bounded instruction: confirm FX_BridgeTest open at User scope and intentionally dirty; create exactly one Web User Control Asset FX_Bridge/index.html through Edit > Web User Control Assets; author the HTML with the UserControl.js reference, one button FX_BridgeButton, one output FX_BridgeOutput, and one WSForm.invoke('FX_Echo', 'bridge-probe', callback) attempt; commit only through the asset-editor OK controls; do not Form-Save, add a UserControl, run the runtime, or close/reopen the Form; stop at the T6 boundary. The recovery allowance was already exhausted (T2); no recovery was used.

## 1. Inputs read before action

- `evidence/EXP-131/T5-form-script-fx-echo-summary.md` (T5 state; FX_Echo committed through editor OK; Designer dirty).
- `evidence/EXP-131/T2-source-review.md` (asset route not observed in T2; D-1 to D-6).
- `evidence/EXP-128/assets/mocklogin_index.html.txt` (EXP-128 T7 copy: `../$app/scripts/UserControl.js` include, button and output precedent; not byte-exact).
- `recipes/global-objects/create-component-class.md` (Global Objects dialog pattern: leftmost `+` opens a New prompt; type name, Tab, OK; Global Objects OK commits).
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (Web Assets tree, Properties Content row "Open Edit Property Dialog", Edit Browser File dialog; New/Import/Delete/Copy never clicked there).
- `evidence/playwright/console-2026-10-25T13-05-20-878Z.log` (read; see section 6).
- `UserControl.js` was NOT opened or inspected.

## 2. Pre-mutation gates

| Check | Readback | Result |
| --- | --- | --- |
| Tab | Tab 0 selected after tab list; URL `MGForm=FX_BridgeTest` | Matches |
| Name / Version | `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph` (accessibility, from T4/T5) | Matches |
| Scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | User |
| Script Language | `Visual C#` | Matches T5 |
| Save / Undo | Save enabled (intended unsaved change); Undo enabled; Redo disabled | Dirty, as expected |
| Components | `Pane (00)` only | Unchanged |
| Dialogs | none open at start | Clean |
| Console | Designer `2 errors, 0 warnings` | Baseline |
| Asset absence | Edit > Web User Control Assets > Global Objects > Web Assets tree top level: `$app`, `mongoose`, `sohoComponents`, `sohoxi` (no `FX_Bridge`) | Absent; gate passed |

Note: the top-level tree differs from the EXP-128 Mock-owner account listing (which showed `MockInventory`, `mocklogin`, `custom` as well). This is recorded as an observed difference between accounts, not as a finding about the Mock app.

## 3. Creation and authoring (actions in order)

1. Designer Edit menu (`e5`), then the menu item Web User Control Assets (`e642`). Global Objects opened.
2. Add (+) icon, leftmost bottom-left toolbar of the Web Assets pane (`e689`). A **New** prompt with one `Name:` field, OK and Cancel appeared. Inspected (`t6-02`) before any entry.
3. Typed `FX_Bridge/index.html` into `Name:` (`e741`); Tab; read back (`t6-03`: Name `FX_Bridge/index.html`).
4. New OK (`e744`). Response: the New prompt closed; the Web Assets tree gained a top-level folder `FX_Bridge` (`t6-04`).
5. Expanded `FX_Bridge` (select, then ArrowRight). Child: `index.html` only (`t6-05`). Identity: folder `FX_Bridge` with child `index.html`, not a root file and not a doubled extension. Properties of the file: Name `FX_Bridge/index.html`, Content `text/html`.
6. Content row "Open Edit Property Dialog" (`e812`). **Edit Browser File** dialog: File `FX_Bridge/index.html`, Content Type `text/html`, with the Mongoose template as the initial content (`t6-06`): the `../$app/scripts/UserControl.js` include, an empty body.
7. Clicked into the content textbox (`e831`), Control+A (selection safeguard), then one full-text fill replacing the template with the candidate HTML below. The template's `UserControl.js` include is kept.
8. Readback before OK: screenshot `t6-07` and accessibility text (find `FX_BridgeOutput`, `e831`). Content matches the intended HTML.
9. Edit Browser File OK (`e847`). Response: the Edit Browser File dialog closed; Global Objects stayed open with `FX_Bridge` and `index.html` in the tree.
10. Global Objects OK (`e726`). Response: Global Objects closed; no message, toast, alert or error dialog visible (`t6-08`).
11. Same-session read-only retention check (see section 4).

### Committed asset content (exact candidate HTML)

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=9" />
<script type="text/javascript" src="../$app/scripts/UserControl.js"></script>
</head>
<body>
<button type="button" id="FX_BridgeButton">FX Bridge Test</button>
<div id="FX_BridgeOutput"></div>
<script type="text/javascript">
document.getElementById("FX_BridgeButton").addEventListener("click", function () {
    WSForm.invoke("FX_Echo", "bridge-probe", function (result) {
        document.getElementById("FX_BridgeOutput").textContent = result;
    });
});
</script>
</body>
</html>
```

Shape checks (read from the readback, not runtime-verified): exactly one `<button>` (`FX_BridgeButton`); exactly one output element (`<div id="FX_BridgeOutput">`); dependency `../$app/scripts/UserControl.js` present once; one click handler; one `WSForm.invoke` call with method name `FX_Echo`, one string argument `bridge-probe`, and one callback writing `result` to `FX_BridgeOutput.textContent`. No authentication, no extra controls, no extra methods, no data access, no alternate invocation mechanism.

Candidate versus verified: the `WSForm.invoke` signature, the callback delivery of the return value, and the runtime behavior are **candidate behavior only**. They are not verified by this task.

## 4. Same-session retention (read-only)

- Reopened Edit > Web User Control Assets (menu `e5`, `e642`), expanded FX_Bridge (`e880`), selected index.html (`e945`), Open Edit Property Dialog (`e978`).
- Edit Browser File dialog: File `FX_Bridge/index.html`, Content Type `text/html`, content identical to the committed candidate (screenshot `t6-09`).
- Closed with Cancel on the Edit Browser File dialog (`e1015`) and Cancel on Global Objects (`e937`). No text typed, no OK, no change.
- Interpretation: the stored content was visible again in the same session after the dialog commit. This is a same-session UI boundary only. It is **not** database-level durability, and it does not show whether an ordinary Designer Save is needed for the asset to persist.

## 5. Save, dirty state and what was not done

- **Ordinary Designer Form Save: NOT performed** (per T6 boundary).
- Designer after both OK commits: Save **enabled** (the earlier unsaved Script Language and FX_Echo edits remain, plus the asset change); the main toolbar **Undo** was enabled after the Edit Browser File OK (snapshot `page-2026-10-25T13-07-32-269Z.yml`) and **disabled** after the Global Objects OK (snapshot `page-2026-10-25T13-07-39-951Z.yml`). The cause was not isolated.
- Whether committing the asset needed an additional Form Save: **not determined**. Save was already enabled before the asset work, so the asset commit's effect on persistence is unresolved. The coordinator should decide before any Save.
- Not done: UserControl component (none added; Components = `Pane (00)` only), runtime test, close, reopen, Form Script edit, Designer Save, Check In/Out, any non-FX_ object.

## 6. Console comparison

- Designer counter: `2 errors, 0 warnings` at every reading in T6 (start, after each click, after each OK, final).
- Tool-written log `evidence/playwright/console-2026-10-25T13-05-20-878Z.log` (read at T6 start): it is cumulative for the Web Client session, not Designer-only. It holds 5 `[ERROR]` lines, all `Permissions policy violation: unload is not allowed` (the same class as the Designer baseline), and 1 `[WARNING]` line for an origin-trial feature from the portal bootstrap. It also holds sign-on and startup entries, including a user-identifier line that was **not** copied into this evidence.
- The Designer counter (2/0) and this cumulative log are not like-for-like counts. Within T6 no new error type appeared, and the Designer counter did not rise. The end-of-task tab listing reported no new console entries.
- Stop rule not triggered.

## 7. Actions and reads (T6, exact)

- **Browser actions: 24**, all returned ok, none timed out:
  - tab select 1; clicks 17 (Edit x2, Web User Control Assets x2, + 1, New OK 1, FX_Bridge row x2, index.html row x2, Open Edit Property Dialog x2, content textbox 1, Edit Browser File OK 1, Global Objects OK 1, Edit Browser File Cancel 1, Global Objects Cancel 1); key presses 4 (Tab 1, ArrowRight 2, Control+A 1); text entries 2 (`Name:` 1, content fill 1).
  - Reconciliation: 1 + 17 + 4 + 2 = 24.
- **Browser reads: 21**: tab lists 2 (start, end); snapshots 2 (fresh start; after expansion); finds 7; screenshots 10 (`t6-01` to `t6-10`).
- **Recovery allowance:** not used (no "Ref not found", no timeout). The allowance remains exhausted from T2.
- **Browser JavaScript / evaluate / run-code written by the worker: 0.** The `### Ran Playwright code` blocks are generated by the MCP tool per action. The HTML's JavaScript is inside the permitted asset, not browser automation.
- **Designer Save: 0. Undo: 0. Redo: 0. Delete: 0. Regenerate: 0. Check In/Out: 0.**
- **Shared UserControl.js: not read or inspected.**
- **Mongoose objects created in T6: 1 Web User Control Asset** (`FX_Bridge/index.html`, with its top-level folder `FX_Bridge`, which the tree creates implicitly as the asset folder).

## 8. Evidence files (T6)

- `evidence/EXP-131/t6-01-global-objects-web-assets-before-new.png`: Global Objects Web Assets top level (`$app`, `mongoose`, `sohoComponents`, `sohoxi`); no FX_Bridge; Designer behind (FX_BridgeTest, Visual C#, User scope). Proves the absence gate. Does not prove the account identity beyond the status bar, or children of collapsed folders.
- `evidence/EXP-131/t6-02-web-assets-new-prompt-before-entry.png`: New prompt with one `Name:` field, empty and focused; OK and Cancel. Proves the supported creation control is present before entry. Does not prove the name is accepted.
- `evidence/EXP-131/t6-03-new-prompt-name-typed-before-ok.png`: `Name:` reads `FX_Bridge/index.html`. Proves the typed identity before OK. Does not prove the saved identity.
- `evidence/EXP-131/t6-04-after-new-ok-asset-tree-state.png`: after New OK; a top-level `FX_Bridge` folder appears; FX_BridgeTest still open, `Visual C#`, User scope; Undo greyed. Proves the folder exists. Does not show the child (collapsed here).
- `evidence/EXP-131/t6-05-web-assets-fx-bridge-expanded-properties.png`: `FX_Bridge` expanded with one child `index.html`. Proves folder plus child identity (not a root file, not a doubled extension). The Properties pane is empty because the folder is selected; the file's Properties are in the snapshot, not this image.
- `evidence/EXP-131/t6-06-edit-browser-file-index-html-empty-before-entry.png`: Edit Browser File, File `FX_Bridge/index.html`, Content Type `text/html`, template content with the `UserControl.js` include and an empty body. Proves the pre-entry template. Does not prove any candidate content.
- `evidence/EXP-131/t6-07-edit-browser-file-index-html-bridge-content-before-ok.png`: the full candidate HTML before OK, all lines visible (DOCTYPE through `</html>`). Proves the committed text as displayed. Does not prove the runtime behavior.
- `evidence/EXP-131/t6-08-after-global-objects-ok-designer-state.png`: Global Objects closed after OK; FX_BridgeTest, `Visual C#`, `Pane (00)`, User scope; Save icon active; Undo greyed; no dialog. Proves the closed dialog and the unsaved state. Does not prove the asset is persisted beyond this session.
- `evidence/EXP-131/t6-09-reopened-asset-readback-readonly.png`: reopened Edit Browser File for `FX_Bridge/index.html` showing the same content (read-only, cancelled). Proves same-session retention. Does not prove database durability.
- `evidence/EXP-131/t6-10-final-designer-after-asset-cancel-clean-check.png`: final Designer after both Cancels; FX_BridgeTest, `Visual C#`, `Pane (00)`, User scope; no dialog; Undo greyed; Save enabled by design (unsaved). Proves the clean dialog state and the intended dirty state. Does not prove a Save.
- Snapshot files outside the permitted location (**deviation**): `evidence/playwright/t6-snapshot-after-fx-bridge-expanded.yml` and `evidence/playwright/t6-snapshot-reopened-asset-dialog-expanded.yml` were written by this worker through the snapshot tool's `filename` parameter, which the brief limits to `evidence/EXP-131/`. Their content is the same kind of read-only accessibility text. The operator may remove them or accept them as harness evidence.
- Tool-generated automatic action-result snapshots (not worker-named): `evidence/playwright/page-2026-10-25T13-05-28-793Z.yml` through `page-2026-10-25T13-08-15-833Z.yml`.

## 9. Acceptance (T6 view)

- **AC-1:** unchanged from T1 (account identity, User scope, clean baseline, absence gate passed in section 2).
- **AC-2:** the Designer identifies FX_BridgeTest (Name, Version, User scope) and no unrelated Form was created (`t6-08`, `t6-10`). Unsaved state is present by design.
- **AC-3 (partial):** Web User Control Assets editor identifies `FX_Bridge/index.html` (tree, Properties Name `FX_Bridge/index.html`, Content `text/html`) and displays the dependency, one button, one output element and the candidate `WSForm.invoke` attempt (`t6-07`, `t6-09`). The candidate call is distinguished from verified runtime behavior: **not verified**.
- **AC-4:** not reached (no UserControl component in T6).
- **AC-5 (partial):** asset commit recorded (Edit Browser File OK, Global Objects OK); same-session retention observed (`t6-09`); **no ordinary Form Save** (held); no close/reopen. Not durability.
- **AC-6:** not reached (no runtime test).
- **AC-7 (partial):** no dialog open; Designer dirty by design; the worker-attributable unsaved changes remain until a Save is authorized.
- **AC-8:** accounting above; manifest deferred to the final record.

## 10. Created-artifact inventory (for possible operator-authorized cleanup)

1. Form `FX_BridgeTest`, User scope, classic BuildFromScratch (T2). Open, unsaved.
2. Form Script method `FX_Echo` in the `FX_BridgeTest` C# class (T5). Committed in the editor; part of the unsaved Form.
3. Web User Control Asset `FX_Bridge/index.html`, with top-level folder `FX_Bridge` (T6). Committed through Edit Browser File OK and Global Objects OK; persistence not confirmed.
- Not created: UserControl component `FX_BridgeControl`, runtime Form, any SQL/IDO/global object.
- Unchecked: whether a Save Template artifact was created at T2 (carried open item).

## 11. Limitations and unresolved items

- The `WSForm.invoke` contract, callback delivery, and runtime behavior are unverified (candidate only).
- Whether the asset persists without an ordinary Designer Form Save is unresolved.
- The Undo-state change after Global Objects OK is observed without a cause.
- The console comparison is between a Designer counter and a cumulative Web Client log; the like-for-like count is not established.
- The Designer remains dirty (Save enabled). No Save was performed.
