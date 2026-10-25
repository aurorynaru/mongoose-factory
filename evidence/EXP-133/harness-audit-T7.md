# controller-generated audit (not worker prose)

25 actions, 25 reads; prohibited-tool hits=6; errors=0; turns=68; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":14,"key":"End","result":"ok"},{"order":15,"key":"Enter","result":"ok"},{"order":16,"key":"Enter","result":"ok"},{"order":20,"key":"Enter","result":"ok"},{"order":22,"key":"Enter","result":"ok"},{"order":26,"key":"Enter","result":"ok"},{"order":30,"key":"Enter","result":"ok"},{"order":34,"key":"Enter","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":6}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\T3-script-language-summary.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-script-edit-summary.md | ok |
| 7 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Form Script menu item | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-01-script-editor-pre-edit-original-scaffold.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-01-script-editor-pre-edit-original-scaffold.png | ok |
| 13 | mcp__playwright__browser_click | element=Script Editor line 12 comment | ok |
| 14 | mcp__playwright__browser_press_key | key=End | ok |
| 15 | mcp__playwright__browser_press_key | key=Enter | ok |
| 16 | mcp__playwright__browser_press_key | key=Enter | ok |
| 17 | mcp__playwright__browser_type | element=Script Editor content textbox | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-02-script-editor-after-header-typed-pre-body.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-02-script-editor-after-header-typed-pre-body.png | ok |
| 20 | mcp__playwright__browser_press_key | key=Enter | ok |
| 21 | mcp__playwright__browser_type | element=Script Editor content textbox | ok |
| 22 | mcp__playwright__browser_press_key | key=Enter | ok |
| 23 | mcp__playwright__browser_type | element=Script Editor content textbox | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-03-script-editor-after-body-line1-if-line-pre-commit.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-03-script-editor-after-body-line1-if-line-pre-commit.png | ok |
| 26 | mcp__playwright__browser_press_key | key=Enter | ok |
| 27 | mcp__playwright__browser_type | element=Script Editor content textbox | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-04-script-editor-after-elseif-line-pre-enter.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-04-script-editor-after-elseif-line-pre-enter.png | ok |
| 30 | mcp__playwright__browser_press_key | key=Enter | ok |
| 31 | mcp__playwright__browser_type | element=Script Editor content textbox | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-05-script-editor-after-thisform-line-pre-enter.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-05-script-editor-after-thisform-line-pre-enter.png | ok |
| 34 | mcp__playwright__browser_press_key | key=Enter | ok |
| 35 | mcp__playwright__browser_type | element=Script Editor content textbox | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-06-script-editor-precommit-full-method-source-before-ok.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-06-script-editor-precommit-full-method-source-before-ok.png | ok |
| 38 | mcp__playwright__browser_click | element=Script Editor OK button | ok |
| 39 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Form Script menu item | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-07-script-editor-reopened-readonly-committed-source.png | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-07-script-editor-reopened-readonly-committed-source.png | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Compile Result Expand Panel button | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-08-script-editor-compile-result-expanded-after-ok-reopen.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-08-script-editor-compile-result-expanded-after-ok-reopen.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Errors tab | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-09-script-editor-compile-result-errors-tab-after-ok-reopen.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-09-script-editor-compile-result-errors-tab-after-ok-reopen.png | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Script Editor Cancel button | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=Properties Form tab | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t7-10-final-designer-dirty-after-script-cancel-visual-csharp.png | ok |
| 63 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t7-10-final-designer-dirty-after-script-cancel-visual-csharp.png | ok |
| 64 | Grep | (no key/element/filename argument) | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |
| 66 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |
| 67 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-133\T7-process-login-method-summary.md | ok |
| 68 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-133\T7-process-login-method-summary.md | ok |
| 69 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |
| 70 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |