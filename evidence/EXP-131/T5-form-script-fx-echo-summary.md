# EXP-131 T5 - FX_Echo added to the FX_BridgeTest Form Script (editor OK, no Designer Save) (2026-10-25)

Harness header: `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=6`, `task=T5`. Bounded instruction: confirm FX_BridgeTest at User scope with Script Language `Visual C#` and unsaved Save/Undo; open the Form Script editor (no Designer Save first); inspect the full scaffold; if it is valid C# inside the FX_BridgeTest class, insert exactly one `FX_Echo` method, read back, commit through OK; no Designer Save, no asset, no component, no close/reopen, no runtime.

## 1. Inputs read before action

- `evidence/EXP-131/T4-script-language-csharp-change-summary.md` (T4 state).
- `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` (read-only C# reference: `namespace Mongoose.FormScripts`, `public class ... : FormScript`, method and helper layout).
- `experiments/EXP-093-...md`, `EXP-094-...md`: targeted greps (editor entry point, text entry, OK response, dirty-state behavior). Not read end to end.
- `experiments/EXP-095-...md`, `EXP-096-...md`: targeted greps only (Compile Result panel location, Designer state after Cancel). Not read end to end.
- `evidence/playwright/console-2026-10-25T13-00-01-795Z.log` (tool-written tab-list console entries; read).
- AGENTS.md and the EXP-093 to EXP-096 full procedures were not re-read in T5; the T5 gate used the procedure facts above.

Procedure facts carried into T5:
- Editor entry: the blue pencil at the top of the Properties toolbar (`#btnEditDownload`) opens the `Script Editor` dialog directly (EXP-093, EXP-094). Footer: OK, Cancel, Help, Download. Compile Result is a collapsed panel (EXP-095).
- Text entry: click the `Editor content` textbox, Control+A, then one fill with the full text (EXP-094; accepted there with leading-whitespace-only differences).
- OK gave no visible message in EXP-094 (dialog closed; no compile output shown).

## 2. Pre-edit gate (T5 start)

| Check | Readback | Result |
| --- | --- | --- |
| Tab | Tab 0 selected after a tab list; URL `MGForm=FX_BridgeTest` | Matches |
| Name / Version | `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph` (accessibility text, full value) | Matches T2-T4 |
| Scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | User |
| Script Language | `Visual C#` | Matches T4 |
| Save / Undo | Save and Undo enabled (`button "Save" [ref=e16]` with no `[disabled]`; Undo enabled); Redo disabled | Unsaved change present, as expected from T4 |
| Components | `Pane (00)` only | Unchanged |
| Console | Designer `2 errors, 0 warnings` | Baseline |
| Dialogs | none open | Clean |

Gate result: passed. No Designer Save was performed before the editor opened.

## 3. Scaffold inspection (before any edit)

Opened once with the pencil. Full scaffold read from the screenshot `t5-01` and the accessibility text (`evidence/playwright/page-2026-10-25T13-00-31-080Z.yml`, lines 446-520). Original content, 16 lines (blank lines not exposed by accessibility text):

```
1  using System;
2  using Mongoose.IDO.Protocol;
3  using Mongoose.Scripting;
4
5  namespace Mongoose.FormScripts
6  {
7      public class FX_BridgeTest : FormScript
8      {
9
10         //
11         // Methods go here
12         //
13
14     }
15 }
16
```

Verdict: clearly C#; namespace `Mongoose.FormScripts`; class `FX_BridgeTest : FormScript` (matches the Form Name); insertion point inside the class (after the comment block, before the class closing brace); no existing methods, no other Form's class. The gate passed, so editing proceeded.

Observation: the editor generated this C# scaffold on the first open after the unsaved Script Language change to `Visual C#`. Hypothesis that the scaffold is generated from the Script Language value is consistent with this single run but not isolated.

## 4. The edit (actions in order)

1. Pencil click (`e371`, `#btnEditDownload`): dialog `Script Editor` opened.
2. Click in the `Editor content` textbox (`e721`).
3. Control+A (selects all editor text).
4. One fill (`browser_type`, non-slow) with the full text: the original 16-line scaffold unchanged in its statements, plus one method placed after the comment block inside the class:

```
public string FX_Echo(string s)
{
    return "FX_ECHO:" + s;
}
```

No other method, no other class, no other `using` or namespace change. Corrections made: 0.

## 5. Read-back before OK

- Screenshot `t5-02` (19 lines): `using System;`, `using Mongoose.IDO.Protocol;`, `using Mongoose.Scripting;`, namespace and class declaration intact, `public string FX_Echo(string s)` on line 13, `return "FX_ECHO:" + s;` on line 15, braces closing method, class and namespace (lines 16-18), blank line 19.
- Accessibility find `FX_Echo` (targeted, read-only): one code-line node `public string FX_Echo(string s)`; one `return "FX_ECHO:" + s;` node; the textbox value (truncated in find output) begins with `// public string FX_Echo(string s)...`. Exactly one FX_Echo method is present.
- **Cosmetic deviation (recorded, not repaired):** the editor auto-indented on top of the leading whitespace in the fill. The screenshot shows progressively deeper indentation on lines 8-18 (for example, `return` at about column 20). Brace structure is balanced and correct; C# compilation does not depend on whitespace. No second fill was attempted (the brief prohibits repairs after unexpected editor behavior).

## 6. Commit (OK)

- OK click (`e734`), once. Response: the `Script Editor` dialog closed; no message, toast, alert or error dialog was visible; Compile Result was not expanded and no compile output was displayed. Screenshot `t5-03` and the post-OK snapshot (`evidence/playwright/page-2026-10-25T13-01-20-523Z.yml`) show no dialog.
- After OK, Designer: Script Language `Visual C#`; `Pane (00)` only; status bar `ScopeType: User`; Save and Undo enabled (the unsaved state); Redo disabled. Console 2 errors / 0 warnings.
- Designer Save: **not invoked** (per T5 instruction). Undo: 0. Enter: 0. Compile Result expand: 0. Editor reopen after OK: 0.

## 7. Actions and reads (T5, exact)

- **Browser actions: 6**, all returned ok, none timed out: tab select 1; clicks 3 (pencil `e371`; editor textbox `e721`; OK `e734`); key press 1 (Control+A); text fill 1 (full script).
- **Browser reads: 9**: tab list 1; fresh snapshot 1; screenshots 4 (`t5-00`, `t5-01`, `t5-02`, `t5-03`); finds 3 (`Script Editor`, `FX_Echo`, `OK`).
- **Recovery allowance:** not used. No "Ref not found" error occurred.
- **Browser JavaScript / evaluate / run-code written by the worker: 0.** The `Ran Playwright code` blocks are generated by the MCP tool for each action. Shared UserControl.js: not read.
- **Mongoose mutations in T5:** one Form Script text change to FX_BridgeTest (in-editor, committed by OK). No Designer Save, no asset, no component, no close/reopen, no runtime.

## 8. Console comparison

- Designer: `2 errors, 0 warnings` at start, after pencil click, after editor click, after the fill, after OK.
- Tool-written log `evidence/playwright/console-2026-10-25T13-00-01-795Z.log` (read): two `[ERROR]` lines, the same `Permissions policy violation: unload is not allowed` entries as the baseline. No increase; stop rule not triggered.

## 9. Evidence files (T5)

- `evidence/EXP-131/t5-00-designer-before-form-script-open.png`: Designer before the editor. Shows the FX_BridgeTest Name, Version (truncated `User version for us...`), Script Language `Visual C#`, Save and Undo enabled (blue/dark), `Pane (00)` only, status bar `ScopeType: User`. Proves identity, scope and the unsaved state. Does not prove the full Version text (truncated in the picture; full text is in the T4 accessibility readback) or any script content.
- `evidence/EXP-131/t5-01-form-script-editor-opened-before-edit.png`: the Script Editor with the 16-line C# scaffold (`using System; ... public class FX_BridgeTest : FormScript ... // Methods go here ...`), footer OK/Cancel/Help/Download, Compile Result collapsed. Proves the original scaffold and the C# language of the editor. Does not prove compile status or any content hidden below line 16.
- `evidence/EXP-131/t5-02-form-script-after-fx-echo-entry-before-ok.png`: the edited editor before OK: 19 lines, method `public string FX_Echo(string s)` with `return "FX_ECHO:" + s;`, braces balanced, cumulative indentation drift. Proves the entered text and its structure as displayed. Does not prove compile success or the committed value (the OK commit is not yet verified by reopening).
- `evidence/EXP-131/t5-03-designer-after-form-script-ok-before-save.png`: Designer after OK: editor closed, no dialog; Script Language `Visual C#`; Save and Undo enabled; Name FX_BridgeTest; status bar `ScopeType: User`. Proves the editor closed without a visible error and the Designer's unsaved state. Does not prove the script was stored, compiled, or persisted.
- Tool-written snapshots (not in `evidence/EXP-131/`): `evidence/playwright/page-2026-10-25T13-00-31-080Z.yml` (after pencil; scaffold accessibility text), `evidence/playwright/page-2026-10-25T13-00-57-316Z.yml` (after editor click), `evidence/playwright/page-2026-10-25T13-01-20-523Z.yml` (after OK; no dialog; Save and Undo enabled).

## 10. Acceptance (T5 view)

- **AC-4 (partial):** the C# editor shows exactly one `FX_Echo` method with signature `public string FX_Echo(string s)` and prefix-return `"FX_ECHO:" + s` (pre-OK read-back). Not yet verified after commit (no reopen). The bridge-component part of AC-4 (FX_BridgeControl) is not started.
- **AC-2 (unchanged):** identity and User scope visible; the Designer shows the intended unsaved state; no unrelated Form changed.
- **AC-7 (partial):** no dialog remains after OK; Designer is dirty by design until the single Save.
- **AC-5, AC-6, AC-8:** not reached in T5 (AC-8 accounting appears in the experiment record).

## 11. Limitations and unresolved items

- **Compile status: unresolved.** Compile Result was not expanded; OK showed no output. A compile error, if any, would be visible only in the Compile Result panel, which needs an editor reopen (not authorized in T5).
- **Persistence of the method: unresolved.** The method is in the editor buffer and the dialog closed. It is not stored until an ordinary Designer Save; reopen verification belongs to a later task.
- **Whitespace drift:** cosmetic; not repaired.
- **Dirty-on-open:** the T5 editor open happened while the Designer was already dirty from T4, so the EXP-093 dirty-on-open behavior cannot be isolated here.
- **Save sequence:** the brief allows one ordinary Designer Form Save after the Form configuration; the asset and UserControl steps are still pending, so the Save timing decision remains with the coordinator.
- **Global Objects route for the asset (T4 open item):** not checked in T5; out of T5 scope.
