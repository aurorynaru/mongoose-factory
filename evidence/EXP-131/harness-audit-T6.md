# controller-generated audit (not worker prose)

24 actions, 22 reads; prohibited-tool hits=2; errors=1; turns=73; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":26,"key":"Tab","result":"ok"},{"order":37,"key":"ArrowRight","result":"ok"},{"order":50,"key":"Control+a","result":"ok"},{"order":68,"key":"ArrowRight","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#7 Grep: Path does not exist: C:\\AI\\mongoose-factory\\experiments\\EXP-128-mock-inventory-login-read-only-inspection.md. Note: your current working directory is C:\\AI\\mongoose-factory."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Glob | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\T2-source-review.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\assets\mocklogin_index.html.txt | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Grep | (no key/element/filename argument) | error: Path does not exist: C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-login-read-only-inspection.md. Note: your current working directory is C:\AI\mongoose-factory. |
| 8 | Glob | (no key/element/filename argument) | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_tabs | action=list | ok |
| 11 | mcp__playwright__browser_tabs | action=select | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\console-2026-10-25T13-05-20-878Z.log | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Web User Control Assets menu item | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-01-global-objects-web-assets-before-new.png | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-25T13-05-32-153Z.yml | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-01-global-objects-web-assets-before-new.png | ok |
| 21 | mcp__playwright__browser_click | element=Global Objects Web Assets add (+) button, leftmost bottom-left toolbar icon | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-02-web-assets-new-prompt-before-entry.png | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-02-web-assets-new-prompt-before-entry.png | ok |
| 25 | mcp__playwright__browser_type | element=Global Objects New prompt Name textbox | ok |
| 26 | mcp__playwright__browser_press_key | key=Tab | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-03-new-prompt-name-typed-before-ok.png | ok |
| 28 | Grep | (no key/element/filename argument) | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-03-new-prompt-name-typed-before-ok.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=New prompt OK button | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-04-after-new-ok-asset-tree-state.png | ok |
| 34 | Grep | (no key/element/filename argument) | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-04-after-new-ok-asset-tree-state.png | ok |
| 36 | mcp__playwright__browser_click | element=Web Assets tree row FX_Bridge folder | ok |
| 37 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-05-web-assets-fx-bridge-expanded-properties.png | ok |
| 39 | Grep | (no key/element/filename argument) | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-05-web-assets-fx-bridge-expanded-properties.png | ok |
| 41 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t6-snapshot-after-fx-bridge-expanded.yml | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Web Assets tree row index.html under FX_Bridge | ok |
| 44 | Grep | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Content row Open Edit Property Dialog button (index.html) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-06-edit-browser-file-index-html-empty-before-entry.png | ok |
| 47 | Grep | (no key/element/filename argument) | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-06-edit-browser-file-index-html-empty-before-entry.png | ok |
| 49 | mcp__playwright__browser_click | element=Edit Browser File content textbox (FX_Bridge/index.html) | ok |
| 50 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 51 | Grep | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_type | element=Edit Browser File content textbox (FX_Bridge/index.html) | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-07-edit-browser-file-index-html-bridge-content-before-ok.png | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-07-edit-browser-file-index-html-bridge-content-before-ok.png | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=Edit Browser File OK button (commit FX_Bridge/index.html content) | ok |
| 58 | Grep | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_click | element=Global Objects dialog OK button (asset commit) | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-08-after-global-objects-ok-designer-state.png | ok |
| 61 | Grep | (no key/element/filename argument) | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-08-after-global-objects-ok-designer-state.png | ok |
| 63 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_click | element=Web User Control Assets menu item | ok |
| 66 | Grep | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Web Assets tree row FX_Bridge folder (reopened dialog) | ok |
| 68 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 69 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t6-snapshot-reopened-asset-dialog-expanded.yml | ok |
| 70 | Grep | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_click | element=Web Assets tree row index.html under FX_Bridge (reopened dialog) | ok |
| 72 | Grep | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_click | element=Content row Open Edit Property Dialog button (reopened, read-only) | ok |
| 74 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-09-reopened-asset-readback-readonly.png | ok |
| 75 | Grep | (no key/element/filename argument) | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-09-reopened-asset-readback-readonly.png | ok |
| 77 | mcp__playwright__browser_click | element=Edit Browser File Cancel button (read-only close) | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_click | element=Global Objects dialog Cancel button (read-only close) | ok |
| 80 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-131/t6-10-final-designer-after-asset-cancel-clean-check.png | ok |
| 81 | Grep | (no key/element/filename argument) | ok |
| 82 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t6-10-final-designer-after-asset-cancel-clean-check.png | ok |
| 83 | mcp__playwright__browser_tabs | action=list | ok |
| 84 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-131\T6-web-user-control-asset-summary.md | ok |
| 85 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-131\T6-web-user-control-asset-summary.md | ok |
| 86 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-131-first-fx-web-user-control-to-form-script-bridge.md | ok |
| 87 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-131\T6-web-user-control-asset-summary.md | ok |
| 88 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-131-first-fx-web-user-control-to-form-script-bridge.md | ok |