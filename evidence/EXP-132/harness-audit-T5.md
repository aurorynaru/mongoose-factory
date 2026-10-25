# controller-generated audit (not worker prose)

21 actions, 36 reads; prohibited-tool hits=1; errors=0; turns=71; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":22,"key":"Escape","result":"ok"},{"order":40,"key":"End","result":"ok"},{"order":41,"key":"Enter","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T2-source-readback.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T3-variable-creation-stop-summary.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T4-variable-creation-summary.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 6 | mcp__playwright__browser_tabs | action=list | ok |
| 7 | mcp__playwright__browser_tabs | action=select | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_tabs | action=select | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_console_messages | filename=evidence/EXP-132/T5-console-web-client-start.txt | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-console-web-client-start.txt | ok |
| 14 | mcp__playwright__browser_tabs | action=select | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Form menu button in Designer navigation | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_press_key | key=Escape | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Edit menu button in Designer navigation | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Edit menu button in Designer navigation | ok |
| 30 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 31 | Grep | (no key/element/filename argument) | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-23-form-script-editor-readonly-snapshot.md | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Form Script menu item in Edit menu | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-01-script-editor-pre-edit-original-source.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-01-script-editor-pre-edit-original-source.png | ok |
| 39 | mcp__playwright__browser_click | element=Opening brace of FX_Echo method line 14 in Script Editor | ok |
| 40 | mcp__playwright__browser_press_key | key=End | ok |
| 41 | mcp__playwright__browser_press_key | key=Enter | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-02-script-editor-after-caret-enter-pre-type.png | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-02-script-editor-after-caret-enter-pre-type.png | ok |
| 45 | mcp__playwright__browser_type | element=Editor content textbox in Script Editor | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-03-script-editor-revised-source-pre-commit.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-03-script-editor-revised-source-pre-commit.png | ok |
| 48 | mcp__playwright__browser_click | element=Script Editor code area (empty region below the text) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-04-script-editor-revised-source-after-suggest-dismiss.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-04-script-editor-revised-source-after-suggest-dismiss.png | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Expand Panel button for Compile Result in Script Editor | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-05-script-editor-compile-result-expanded-pre-ok.png | ok |
| 54 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-05-script-editor-compile-result-expanded-pre-ok.png | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_click | element=Errors tab in Compile Result | ok |
| 57 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-06-script-editor-compile-result-errors-tab-pre-ok.png | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-06-script-editor-compile-result-errors-tab-pre-ok.png | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=OK button in Script Editor (commits script to Designer, not Form Save) | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-07-designer-after-script-ok-save-state.png | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_click | element=Edit menu button in Designer navigation | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Form Script menu item in Edit menu | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-08-script-editor-reopened-readonly-after-ok.png | ok |
| 70 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-08-script-editor-reopened-readonly-after-ok.png | ok |
| 71 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_click | element=Cancel button in Script Editor (read-only close, no commit) | ok |
| 73 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T5-09-designer-final-after-script-readonly-cancel.png | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-09-designer-final-after-script-readonly-cancel.png | ok |
| 77 | mcp__playwright__browser_tabs | action=select | ok |
| 78 | mcp__playwright__browser_console_messages | filename=evidence/EXP-132/T5-console-web-client-end.txt | ok |
| 79 | Grep | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_tabs | action=select | ok |
| 81 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-07-designer-after-script-ok-save-state.png | ok |
| 82 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-script-edit-summary.md | ok |
| 83 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 84 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 85 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |