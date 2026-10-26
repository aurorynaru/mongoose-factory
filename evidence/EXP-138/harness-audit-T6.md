# controller-generated audit (not worker prose)

13 actions, 27 reads; prohibited-tool hits=0; errors=1; turns=51; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":35,"key":"Control+End","result":"ok"},{"order":40,"key":"Control+Home","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: ["#5 Grep: Path does not exist: C:\\AI\\mongoose-factory\\experiments\\EXP-134-fx-loginportal-persistence.md. Note: your current working directory is C:\\AI\\mongoose-factory."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\assets\FX_Login\FX_LoginPortal.flat.cs.txt | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | Grep | (no key/element/filename argument) | error: Path does not exist: C:\AI\mongoose-factory\experiments\EXP-134-fx-loginportal-persistence.md. Note: your current working directory is C:\AI\mongoose-factory. |
| 6 | Glob | (no key/element/filename argument) | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Designer Form menu (FX_LoginPortal, User scope) | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-01-form-menu-open-before-close-readonly.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-01-form-menu-open-before-close-readonly.png | ok |
| 13 | mcp__playwright__browser_click | element=Designer Form menu toggle to dismiss menu | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-02-pre-close-gate-form-menu-dismissed-fx-loginportal-tab.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-02-pre-close-gate-form-menu-dismissed-fx-loginportal-tab.png | ok |
| 17 | mcp__playwright__browser_click | element=closable FX_LoginPortal tab close button (Designer Form tab, not browser tab) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-03-after-fx-loginportal-tab-close-state.png | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-03-after-fx-loginportal-tab-close-state.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Designer Form menu button (to open recent-forms list) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Form menu recent-list item FX_LoginPortal | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-04-after-reopen-from-recent-list-fx-loginportal-user-visual-csharp.png | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-04-after-reopen-from-recent-list-fx-loginportal-user-visual-csharp.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Designer Edit menu (FX_LoginPortal reopened, User scope) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Edit menu item Form Script (read-only inspection) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_snapshot | filename=evidence/EXP-138/t6-05-script-editor-readonly-accessibility-after-reopen.yml | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-05-script-editor-readonly-accessibility-after-reopen.yml | ok |
| 35 | mcp__playwright__browser_press_key | key=Control+End | ok |
| 36 | mcp__playwright__browser_snapshot | filename=evidence/EXP-138/t6-06-script-editor-readonly-accessibility-lines-35-43-after-ctrl-end.yml | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-07-script-editor-readonly-after-reopen-bottom-lines-12-43.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-07-script-editor-readonly-after-reopen-bottom-lines-12-43.png | ok |
| 40 | mcp__playwright__browser_press_key | key=Control+Home | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-08-script-editor-readonly-after-reopen-top-lines-1-11.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-08-script-editor-readonly-after-reopen-top-lines-1-11.png | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Script Editor Compile Result expand button (read-only reopen) | ok |
| 45 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-09-compile-result-expanded-after-reopen-readonly.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-09-compile-result-expanded-after-reopen-readonly.png | ok |
| 48 | mcp__playwright__browser_click | element=Script Editor Compile Result Errors tab (read-only) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-10-compile-result-errors-tab-after-reopen-readonly.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-10-compile-result-errors-tab-after-reopen-readonly.png | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Script Editor Cancel button (read-only reopen; not OK) | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t6-11-after-readonly-cancel-designer-clean-save-disabled.png | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t6-11-after-readonly-cancel-designer-clean-save-disabled.png | ok |
| 57 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-138\T6-persistence-readback-summary.md | ok |
| 58 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 59 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 60 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |