# EXP-133 T7 - FX_ProcessLogin Visual C# method (Script Editor commit, no Designer Save)

Harness header: `run_id=R-20261025-234739-gn7q`, `experiment_id=EXP-133`, `cycle_id=6`, `task=T7`, `worker_session_id=97a755e8-7059-4e09-9aed-b979333c260a`, `task_message_id=30483ed8-a6d3-4e90-8403-1bec702babd4`.

## 1. Outcome

- **One public method added** to the FX_LoginPortal Form Script: `public string FX_ProcessLogin(string username, string password)`, inserted between the existing `// Methods go here` comment block and the class closing brace. Nothing else in the scaffold changed.
- **Committed once** with the Script Editor's OK (in-session commit, not the experiment's Designer Form Save).
- **Designer Form Save: 0.** Form close/reopen: 0. Runtime open: 0. Sign in: 0.
- The Form is **dirty and unsaved**: the Designer Save button is enabled (accessibility, no `[disabled]`), and the unsaved state is not cleared.
- The Script Editor was reopened once read-only (Edit > Form Script), its source and Compile Result read, and closed with **Cancel** (no change made).

## 2. Gates (before any edit)

| Gate | Observation | Evidence |
| --- | --- | --- |
| Active tab | `FX_LoginPortal` selected (tab list, then select index 0) | fresh snapshot |
| Scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot; `t7-01` |
| Script Language | `Visual C#` (Form Properties, read at end of task) | `t7-10` |
| Save | enabled (dirty, carried over from T6) | snapshot |
| Designer console | 2 errors / 0 warnings | footer on every read |
| Dialogs | none open at start | snapshot |
| `FX_BridgeTest` | second tab left open, not selected, not touched | tab list |

## 3. Pre-edit scaffold (captured before any typing; `t7-01`)

Original Form Script, 16 lines, read from the Script Editor dialog:

```csharp
using System;
using Mongoose.IDO.Protocol;
using Mongoose.Scripting;

namespace Mongoose.FormScripts
{
    public class FX_LoginPortal : FormScript
    {

        //
        // Methods go here
        //

    }
}
```

No existing `FX_ProcessLogin` and no other method. Compile Result collapsed.

## 4. Edit route

1. Edit > Form Script (menu item found by `find`).
2. Caret placed at the end of line 12 (`//`), End pressed.
3. Enter twice (blank line 13, then header line 14).
4. Method typed with slow key events, one statement per line, without leading indentation (the editor auto-indents). The editor auto-closed the header's `{` as `{}` on the same line; Enter between the braces produced the body line and moved the closing `}` down. No closing brace was typed by hand for the method.
5. Six type actions and seven Enter presses in total. Screenshots taken after the header, after the `if` line, after the `else if` line, and after the `ThisForm` line (`t7-02` to `t7-05`) confirmed no stray or duplicate braces and no suggestion list open before each Enter.

## 5. Committed source (pre-OK capture `t7-06`; reopened read-only `t7-07`)

Lines 14 to 20 are the new method; lines 1 to 12 and 22 to 23 are the unchanged scaffold (the class and namespace closers moved to lines 22 and 23).

```csharp
        public string FX_ProcessLogin(string username, string password) {
            string code = "received";
            if (username == null || password == null) { code = "missing"; }
            else if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password)) { code = "empty"; }
            ThisForm.Variables("FX_vLoginResult").Value = code;
            return code;
        }
```

Line-level behaviour (source structure, not runtime):

- Either argument `null` (checked first): `code` = `"missing"`.
- Otherwise either argument blank after trimming (`string.IsNullOrWhiteSpace` also covers whitespace-only and empty): `code` = `"empty"`.
- Otherwise `code` remains `"received"`.
- `ThisForm.Variables("FX_vLoginResult").Value` is assigned the same `code` value, and `return code;` returns exactly that value.
- Neither `username` nor `password` is assigned to a variable, returned, logged or displayed. Both appear only inside the `null` / blank tests.

Brace balance: method `{`/`}` on lines 14 and 20; the class closes on line 22 and the namespace on line 23. The reopened readback (`t7-07`) matches the pre-OK capture.

## 6. Compile Result

- Reopened read-only (`t7-08`): Output tab blank.
- Errors tab (`t7-09`): column headers `Line`, `Column`, `Error` only, **no rows**.
- Recorded only as an empty grid. It is **not** proof that the method compiles. It was observed after the OK commit and reopen, so it reflects the editor's post-commit status, but compile success remains unresolved.
- No compile, regeneration, Save or other operation was started to obtain it.

## 7. Designer state after the commit (read-only checks)

- `find "UserCtrl"`: only the existing `User Control Name` expression `V(UserCtrl_userControl1_USER)` (unchanged). No new UserCtrl variable visible.
- `find "Form - "`: no match. Variables root shows only `Global - Persistent` and `Global - Temporary` (`t7-10`).
- `Save` button: present, not `[disabled]`.
- Canvas (`t7-10`): one UserControl placeholder on Pane (00). The Components grid was not re-read in T7.
- Form Properties (`t7-10`): Name `FX_LoginPortal`, Version `User version for us...`, Device Type `Default`, Form Type `Normal`, Is Master `True`, Script Language `Visual C#`.
- Console 2 errors / 0 warnings on every footer read. No dialog open at the end.

## 8. Action ledger (T7)

- Tab list 1; tab select 1 (index 0).
- Clicks 10: Edit x2, Form Script menu x2, line 12, Script Editor OK, Expand Compile Result, Errors tab, Cancel, Properties Form tab.
- Key presses 8: End x1, Enter x7.
- Typed text 6: header, `string code`, `if`, `else if`, `ThisForm`, `return`.
- Reads: snapshots 3 (start, after the Form Script open, post-OK); finds 11; screenshots 10 (`t7-01` to `t7-10`).
- Browser JavaScript, evaluate or run-code written by the worker: 0 (`### Ran Playwright code` blocks are tool-generated).
- Recovery allowance used: 0. No "Ref not found" error occurred.
- Ordinary Designer Form Save: 0. Form close/reopen: 0. Runtime open: 0. Sign in: 0.
- Script Editor opened twice (once to edit, once read-only); these are in-page dialogs, not Form close/reopen.

## 9. Files written (T7)

- `evidence/EXP-133/t7-01-script-editor-pre-edit-original-scaffold.png`: original 16-line scaffold, Visual C#, User scope. Proves the displayed pre-edit source only.
- `evidence/EXP-133/t7-02-script-editor-after-header-typed-pre-body.png`: header typed; auto-closed `{}` on one line. Proves the auto-close behaviour, not the final body.
- `evidence/EXP-133/t7-03-script-editor-after-body-line1-if-line-pre-commit.png`: `string code` and `if` lines, method closer auto-placed. Proves the intermediate structure.
- `evidence/EXP-133/t7-04-script-editor-after-elseif-line-pre-enter.png`: `else if` line, no suggestion list. Proves the state before the next Enter.
- `evidence/EXP-133/t7-05-script-editor-after-thisform-line-pre-enter.png`: `ThisForm.Variables(...)` line. Proves the state before the `return` line.
- `evidence/EXP-133/t7-06-script-editor-precommit-full-method-source-before-ok.png`: the full method before OK. Proves the source as typed (pre-commit).
- `evidence/EXP-133/t7-07-script-editor-reopened-readonly-committed-source.png`: the reopened, committed source. Proves the in-session committed source as displayed; not cross-session persistence.
- `evidence/EXP-133/t7-08-script-editor-compile-result-expanded-after-ok-reopen.png`: Compile Result expanded; Output blank.
- `evidence/EXP-133/t7-09-script-editor-compile-result-errors-tab-after-ok-reopen.png`: Errors grid, headers only, no rows. Proves an empty grid only.
- `evidence/EXP-133/t7-10-final-designer-dirty-after-script-cancel-visual-csharp.png`: Designer after the Cancel; User scope; Visual C#; Variables root without new categories; no dialog. Proves the dirty state as displayed; Save is confirmed by accessibility, not by its colour.
- `evidence/EXP-133/T7-process-login-method-summary.md`: this file.
- Tool-written, disclosed (not authored by the worker): `evidence/playwright/page-2026-10-25T16-*.yml` snapshot files and `evidence/playwright/console-2026-10-25T16-19-13-496Z.log` from the tab listing.

## 10. Acceptance (T7 scope)

- **AC-7:** source readback met in-session: one public string `FX_ProcessLogin(string username, string password)`; assigns and returns only `missing`, `empty` or `received`; neither argument is assigned, persisted, returned or logged; full method and unchanged scaffold captured (`t7-06`, `t7-07`); Errors grid recorded as an empty grid only (`t7-09`). Compile success **not** claimed.
- **AC-4:** partly. The method's `FX_vLoginResult` assignment and return are committed in-session (source-structure). The `app.js` invocation and callback were not touched in T7.
- **AC-2, AC-3, AC-5, AC-6:** not re-verified in T7 beyond the reads listed in section 7; T1 to T6 evidence stands.
- **AC-8 to AC-10:** not started (no Designer Save, close/reopen, runtime or Sign in in T7).

## 11. Limitations and open items

- The method was committed to the in-session Form Script only. Persistence after the single ordinary Designer Save is **unresolved** (next task).
- Compile success is **unresolved**: the Errors grid is empty but was not established as a compile result for the committed text.
- Whether the Global `FX_vLoginResult` is the storage resolved by `ThisForm.Variables` and `WSForm.getVarValue` is **unresolved** and outside this experiment's scope.
- **Operator disposition still required before the ordinary Designer Save:** the stale UserCtrl variables (`UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER`) may be generated by the next Save (EXP-131 T9 precedent). Not evaluated in T7 because no Save was performed. The brief's stop rule applies; this instruction does not grant that disposition.
- Method design choice (disclosed): a local variable `code` holds the value before both assignment and return; this is equivalent to the literal rules in the brief.
- `IsNullOrWhiteSpace` covers null and whitespace-only inputs; the `null` check comes first so that `missing` takes precedence over `empty`, as the brief requires.
- No invalid-input test, runtime test, real credential or authentication behaviour is claimed or exercised.

## 12. Knowledge state (T7)

- Edit > Form Script route and Script Editor OK commit without a Designer Save: **observed** (second execution; first was EXP-132 T5).
- Typing a balanced method through the Script Editor with auto-close (header `{}` on one line, Enter between the braces, single-line `if` blocks): **observed** in one execution, no stray or duplicate braces in readback; **candidate_procedure**.
- Committed method source readback (in-session): **observed**.
- Compile success of the method: **unresolved** (empty Errors grid recorded only).
- Generated UserCtrl variables after the Save: **unresolved** (not reached).
- Persistence after the ordinary Save and close/reopen: **unresolved** (next task).
- Global `FX_vLoginResult` resolution by `ThisForm.Variables` / `WSForm.getVarValue`: **unresolved**, out of scope.
- Runtime round trip, replay, real authentication, cross-session durability: **not claimed**.

## 13. Designer state at the T7 boundary

- `FX_LoginPortal` active tab (User scope `anton.ramos@3mworks.com.ph`, Visual C#), dirty, **Save enabled, not clicked**.
- No dialog open; console 2 errors / 0 warnings.
- `FX_BridgeTest` open in the second tab, untouched.
