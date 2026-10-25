# controller-generated audit (not worker prose)

25 actions, 44 reads; prohibited-tool hits=1; errors=0; turns=77; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":35,"key":"ArrowRight","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T2-source-readback.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T4-variable-creation-summary.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T5-script-edit-summary.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\assets\MockInventory_index.html.txt | ok |
| 7 | mcp__playwright__browser_tabs | action=list | ok |
| 8 | mcp__playwright__browser_tabs | action=select | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_tabs | action=select | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Designer top navigation Edit button | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Edit menu item Form Script | ok |
| 15 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/T6-01-script-editor-readonly-snapshot.md | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T6-01-script-editor-readonly-source-pre-errors.png | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T6-01-script-editor-readonly-source-pre-errors.png | ok |
| 19 | mcp__playwright__browser_click | element=Compile Result Expand Panel button | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Compile Result Errors tab | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T6-02-script-editor-compile-result-errors-post-T5-readonly.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T6-02-script-editor-compile-result-errors-post-T5-readonly.png | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Script Editor Cancel button | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\harness-audit-T2.md | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Designer top navigation Edit button | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Edit menu item Web User Control Assets | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=FX_Bridge folder tree item in Global Objects Web Assets | ok |
| 35 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=index.html tree item under FX_Bridge in Global Objects | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Content row Open Edit Property Dialog button for FX_Bridge/index.html | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T6-03-edit-browser-file-index-html-original-baseline.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T6-03-edit-browser-file-index-html-original-baseline.png | ok |
| 44 | mcp__playwright__browser_type | element=Edit Browser File textbox for FX_Bridge/index.html | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T6-04-edit-browser-file-index-html-revised-precommit.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T6-04-edit-browser-file-index-html-revised-precommit.png | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=Edit Browser File dialog OK button (FX_Bridge/index.html) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Content row Open Edit Property Dialog button (reopen read-only) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T6-05-edit-browser-file-index-html-reopened-readonly-after-OK.png | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_click | element=Edit Browser File Cancel button (read-only reopen exit) | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_click | element=Global Objects dialog OK button (parent dialog finalization after asset OK, T4 precedent) | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_click | element=Details panel Components tab | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=FX_BridgeControl component row in Components grid (selection only) | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_click | element=Properties panel Component tab | ok |
| 67 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_click | element=User Control Name Open Edit Property Dialog button (read-only) | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T6-06-fxbridgecontrol-user-control-references-readonly-after-asset-commit.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T6-06-fxbridgecontrol-user-control-references-readonly-after-asset-commit.png | ok |
| 72 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_click | element=Edit User Control References Cancel button (read-only) | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/T6-07-designer-final-after-asset-commit-readonly.png | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T6-07-designer-final-after-asset-commit-readonly.png | ok |
| 77 | mcp__playwright__browser_tabs | action=list | ok |
| 78 | mcp__playwright__browser_tabs | action=select | ok |
| 79 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_tabs | action=select | ok |
| 82 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 83 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 84 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T6-html-readback.md | ok |
| 85 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T6-asset-edit-summary.md | ok |
| 86 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 87 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |