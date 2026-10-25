# controller-generated audit (not worker prose)

37 actions, 59 reads; prohibited-tool hits=4; errors=0; turns=119; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":29,"key":"ArrowRight","result":"ok"},{"order":58,"key":"ArrowRight","result":"ok"},{"order":63,"key":"ArrowRight","result":"ok"},{"order":91,"key":"ArrowRight","result":"ok"},{"order":104,"key":"ArrowRight","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\guides\user-control.md | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Edit menu in Designer top menu bar | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Web User Control Assets menu item under Edit | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-00-web-user-control-assets-dialog-before-create.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-00-web-user-control-assets-dialog-before-create.png | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Global Objects dialog + (New) toolbar button, leftmost of the three | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_type | element=New asset Name textbox | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-01-new-asset-name-fx-login-index-html-before-ok.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-01-new-asset-name-fx-login-index-html-before-ok.png | ok |
| 20 | mcp__playwright__browser_click | element=New dialog OK button | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-02-after-new-fx-login-index-html-ok-asset-tree.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-02-after-new-fx-login-index-html-ok-asset-tree.png | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=FX_Login folder treeitem in Web Assets tree | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-03-fx-login-folder-selected-children-check.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-03-fx-login-folder-selected-children-check.png | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-04-fx-login-folder-expanded-children.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-04-fx-login-folder-expanded-children.png | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=index.html treeitem under FX_Login in Web Assets tree | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-05-fx-login-index-html-properties-before-edit.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-05-fx-login-index-html-properties-before-edit.png | ok |
| 37 | mcp__playwright__browser_click | element=Open Edit Property Dialog button on Content row for index.html | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-06-fx-login-index-html-edit-browser-file-template-before-fill.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-06-fx-login-index-html-edit-browser-file-template-before-fill.png | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_type | element=Edit Browser File content textbox for FX_Login/index.html | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-07-fx-login-index-html-precommit-source-before-ok.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-07-fx-login-index-html-precommit-source-before-ok.png | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Edit Browser File OK button | ok |
| 47 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Global Objects dialog + (New) toolbar button | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_type | element=New asset Name textbox | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-08-new-asset-name-fx-login-script-app-js-before-ok.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-08-new-asset-name-fx-login-script-app-js-before-ok.png | ok |
| 53 | mcp__playwright__browser_click | element=New dialog OK button for FX_Login/script/app.js | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-09-after-new-fx-login-script-app-js-ok-tree.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-09-after-new-fx-login-script-app-js-ok-tree.png | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=FX_Login folder treeitem in Web Assets tree | ok |
| 58 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-10-fx-login-expanded-after-app-js-create.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-10-fx-login-expanded-after-app-js-create.png | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_click | element=script folder treeitem under FX_Login | ok |
| 63 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 64 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-11-fx-login-script-folder-expanded-app-js.png | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-11-fx-login-script-folder-expanded-app-js.png | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=app.js treeitem under FX_Login/script | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=Open Edit Property Dialog button for app.js Content | ok |
| 70 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-12-fx-login-app-js-initial-scaffold-before-fill.png | ok |
| 73 | mcp__playwright__browser_type | element=Edit Browser File content textbox for FX_Login/script/app.js | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-13-fx-login-app-js-precommit-source-before-ok.png | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-13-fx-login-app-js-precommit-source-before-ok.png | ok |
| 77 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_click | element=Edit Browser File OK button for FX_Login/script/app.js | ok |
| 79 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-14-after-app-js-edit-browser-file-ok-before-parent-ok.png | ok |
| 80 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-14-after-app-js-edit-browser-file-ok-before-parent-ok.png | ok |
| 81 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 82 | mcp__playwright__browser_click | element=Global Objects dialog OK button (parent commit) | ok |
| 83 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-15-after-parent-global-objects-ok-designer-state.png | ok |
| 84 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-15-after-parent-global-objects-ok-designer-state.png | ok |
| 85 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 86 | mcp__playwright__browser_click | element=Edit menu in Designer top menu bar | ok |
| 87 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_click | element=Web User Control Assets menu item under Edit | ok |
| 89 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 90 | mcp__playwright__browser_click | element=FX_Login folder treeitem in reopened Web Assets tree | ok |
| 91 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 92 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_click | element=index.html treeitem under FX_Login (reopened tree) | ok |
| 94 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_click | element=Open Edit Property Dialog button for reopened index.html Content | ok |
| 96 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 97 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 98 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-16-readback-index-html-after-parent-ok-reopen.png | ok |
| 99 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-16-readback-index-html-after-parent-ok-reopen.png | ok |
| 100 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 101 | mcp__playwright__browser_click | element=Edit Browser File Cancel button for index.html (read-only view) | ok |
| 102 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 103 | mcp__playwright__browser_click | element=script folder treeitem under FX_Login (reopened tree) | ok |
| 104 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 105 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 106 | mcp__playwright__browser_click | element=app.js treeitem under FX_Login/script (reopened tree) | ok |
| 107 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 108 | mcp__playwright__browser_click | element=Open Edit Property Dialog button for reopened app.js Content | ok |
| 109 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 110 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-17-readback-app-js-after-parent-ok-reopen.png | ok |
| 111 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-17-readback-app-js-after-parent-ok-reopen.png | ok |
| 112 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 113 | mcp__playwright__browser_click | element=Edit Browser File Cancel button for app.js (read-only view) | ok |
| 114 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 115 | mcp__playwright__browser_click | element=Global Objects dialog Cancel (read-only close after reopen) | ok |
| 116 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t4-18-designer-final-after-asset-readback-save-state.png | ok |
| 117 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 118 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t4-18-designer-final-after-asset-readback-save-state.png | ok |
| 119 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\console-2026-10-25T16-03-09-777Z.log | ok |
| 120 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-133\T4-web-user-control-assets-summary.md | ok |
| 121 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-133\T4-web-user-control-assets-summary.md | ok |
| 122 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-133\T4-web-user-control-assets-summary.md | ok |
| 123 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |