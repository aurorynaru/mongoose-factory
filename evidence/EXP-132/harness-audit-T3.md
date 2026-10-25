# controller-generated audit (not worker prose)

15 actions, 27 reads; prohibited-tool hits=0; errors=1; turns=62; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#27 mcp__playwright__browser_snapshot: ### Error\nError: Ref e275 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T2-preflight-completion-summary.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T2-source-readback.md | ok |
| 4 | mcp__playwright__browser_tabs | action=list | ok |
| 5 | mcp__playwright__browser_tabs | action=select | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_tabs | action=select | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_tabs | action=select | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Blue pencil button in Form Properties toolbar (Script Editor) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Expand Panel button for Compile Result in Script Editor | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Errors tab in Script Editor Compile Result | ok |
| 20 | mcp__playwright__browser_take_screenshot | element=Script Editor dialog with Compile Result Errors tab; filename=evidence/EXP-132/t3-01-script-editor-compile-result-errors-readonly.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t3-01-script-editor-compile-result-errors-readonly.png | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Cancel button in Script Editor dialog | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Variables tab in Details panel | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e275 not found in the current page snapshot. Try capturing new snapshot. |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t3-02-designer-variables-pre-create-baseline.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t3-02-designer-variables-pre-create-baseline.png | ok |
| 31 | mcp__playwright__browser_click | element=Blue plus (Add) button in Details Variables toolbar (leftmost, not trash) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t3-03-after-variable-plus-click-pre-commit.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t3-03-after-variable-plus-click-pre-commit.png | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Cancel button in Form Variable dialog (no name entered; nothing committed) | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-06-global-objects-variable-dialog-snapshot.md | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-06-global-objects-variable-dialog-snapshot.md | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Edit menu in Designer top navigation | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Variable menu item under Edit | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t3-04-global-objects-variable-dialog-opened.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t3-04-global-objects-variable-dialog-opened.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Blue plus (Add) button in Global Objects Variables list toolbar (leftmost) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t3-05-global-objects-after-plus-click-precommit.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t3-05-global-objects-after-plus-click-precommit.png | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Cancel button in New variable name dialog (nothing committed) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Cancel button in Global Objects dialog (no changes; nothing committed) | ok |
| 55 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t3-06-designer-after-variable-stop-clean.png | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t3-06-designer-after-variable-stop-clean.png | ok |
| 58 | Grep | (no key/element/filename argument) | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 60 | Grep | (no key/element/filename argument) | ok |
| 61 | Grep | (no key/element/filename argument) | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\guides\user-control.md | ok |
| 63 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\guides\scripts.md | ok |
| 64 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T3-variable-creation-stop-summary.md | ok |
| 65 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 66 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |