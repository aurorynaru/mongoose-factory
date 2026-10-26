# controller-generated audit (not worker prose)

16 actions, 20 reads; prohibited-tool hits=1; errors=2; turns=51; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":23,"key":"Control+a","result":"ok"},{"order":27,"key":"Control+Home","result":"ok"},{"order":39,"key":"Control+End","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#31 mcp__playwright__browser_click: ### Error\nError: Ref e2617 not found in the current page snapshot. Try capturing new snapshot.","#41 mcp__playwright__browser_click: ### Error\nError: Ref e4927 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\assets\FX_Login\FX_LoginPortal.flat.cs.txt | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\assets\FX_Login\FX_LoginPortal.cs.txt | ok |
| 10 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 11 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 12 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-138\T4-source-check.md | ok |
| 13 | mcp__playwright__browser_tabs | action=list | ok |
| 14 | mcp__playwright__browser_tabs | action=select | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-138\t4-01-designer-gate-pre-fill-fx-loginportal-save-enabled.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t4-01-designer-gate-pre-fill-fx-loginportal-save-enabled.png | ok |
| 18 | mcp__playwright__browser_click | element=Edit menu in Designer menu bar | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Form Script menu item | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Script Editor content textbox | ok |
| 23 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_type | element=Script Editor content textbox (after Ctrl+A) | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_press_key | key=Control+Home | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-138\t4-02-script-editor-after-flat-fill-precommit-top-lines-1-10.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t4-02-script-editor-after-flat-fill-precommit-top-lines-1-10.png | ok |
| 31 | mcp__playwright__browser_click | element=Script Editor OK button | error: ### Error Error: Ref e2617 not found in the current page snapshot. Try capturing new snapshot. |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=Script Editor OK button | ok |
| 34 | mcp__playwright__browser_click | element=Edit menu in Designer menu bar | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Form Script menu item | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_press_key | key=Control+End | ok |
| 40 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Compile Result Expand Panel button | error: ### Error Error: Ref e4927 not found in the current page snapshot. Try capturing new snapshot. |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Compile Result Expand Panel button | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-138\t4-03-script-editor-reopen-readonly-after-ok-compile-result-expanded.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t4-03-script-editor-reopen-readonly-after-ok-compile-result-expanded.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=Errors tab in Compile Result | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-138\t4-04-reopen-compile-result-errors-tab-after-ok.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t4-04-reopen-compile-result-errors-tab-after-ok.png | ok |
| 50 | mcp__playwright__browser_click | element=Script Editor Cancel button | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-138\t4-05-after-readonly-cancel-designer-state-save-enabled-undo-disabled.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t4-05-after-readonly-cancel-designer-state-save-enabled-undo-disabled.png | ok |
| 54 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-138\T4-install-summary.md | ok |
| 55 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |