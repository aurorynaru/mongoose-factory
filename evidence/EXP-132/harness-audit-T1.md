# controller-generated audit (not worker prose)

19 actions, 19 reads; prohibited-tool hits=5; errors=4; turns=61; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":33,"key":"End","result":"ok"},{"order":37,"key":"End","result":"ok"},{"order":50,"key":"End","result":"ok"},{"order":54,"key":"End","result":"ok"},{"order":57,"key":"Control+a","result":"ok"},{"order":61,"key":"Backspace","result":"ok"},{"order":65,"key":"Control+a","result":"ok"},{"order":66,"key":"Delete","result":"ok"},{"order":68,"key":"Escape","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":5}

Errors: ["#2 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory.","#5 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory.","#40 mcp__playwright__browser_click: ### Error\nError: Ref e5 not found in the current page snapshot. Try capturing new snapshot.","#67 mcp__playwright__browser_snapshot: ### Error\nError: Ref e659 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 3 | Glob | (no key/element/filename argument) | ok |
| 4 | Glob | (no key/element/filename argument) | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 6 | Glob | (no key/element/filename argument) | ok |
| 7 | Glob | (no key/element/filename argument) | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\T11-final-evidence-manifest.md | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-131-first-fx-web-user-control-to-form-script-bridge.md | ok |
| 10 | Glob | (no key/element/filename argument) | ok |
| 11 | Glob | (no key/element/filename argument) | ok |
| 12 | Glob | (no key/element/filename argument) | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockInventoryDashboard-form-script.cs.txt | ok |
| 14 | Glob | (no key/element/filename argument) | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-130\T2-designer-metadata-gaps.txt | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\assets\MockInventory_index.html.txt | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\t9-14-edit-browser-file-readonly-snapshot.md | ok |
| 18 | Glob | (no key/element/filename argument) | ok |
| 19 | Glob | (no key/element/filename argument) | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-131\T10-runtime-round-trip-summary.md | ok |
| 21 | mcp__playwright__browser_tabs | action=list | ok |
| 22 | mcp__playwright__browser_tabs | action=select | ok |
| 23 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-00-designer-fresh-preflight-snapshot.md | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-00-designer-fresh-preflight-snapshot.md | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-00-designer-fresh-preflight-snapshot.md | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t1-01-designer-baseline-identity-scope.png | ok |
| 28 | mcp__playwright__browser_console_messages | (no key/element/filename argument) | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-01-designer-baseline-identity-scope.png | ok |
| 30 | mcp__playwright__browser_type | element=Details Variables search textbox (left grid) | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-02-designer-variables-search-vEcho-readback.md | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-02-designer-variables-search-vEcho-readback.md | ok |
| 33 | mcp__playwright__browser_press_key | key=End | ok |
| 34 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-03-designer-variables-search-vEcho-after-key.md | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-03-designer-variables-search-vEcho-after-key.md | ok |
| 36 | mcp__playwright__browser_type | element=Details Variables search textbox (left grid) | ok |
| 37 | mcp__playwright__browser_press_key | key=End | ok |
| 38 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-04-designer-variables-search-positive-control-vInventoryJson.md | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-04-designer-variables-search-positive-control-vInventoryJson.md | ok |
| 40 | mcp__playwright__browser_click | element=Designer Edit menu | error: ### Error Error: Ref e5 not found in the current page snapshot. Try capturing new snapshot. |
| 41 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-05-designer-fresh-recovery-snapshot.md | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Designer Edit menu | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Edit menu Variable item | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-06-global-objects-variable-dialog-snapshot.md | ok |
| 48 | Grep | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_type | element=Global Objects list search textbox | ok |
| 50 | mcp__playwright__browser_press_key | key=End | ok |
| 51 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-07-global-objects-vEcho-search-after-end.md | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-07-global-objects-vEcho-search-after-end.md | ok |
| 53 | mcp__playwright__browser_type | element=Global Objects list search textbox | ok |
| 54 | mcp__playwright__browser_press_key | key=End | ok |
| 55 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-08-global-objects-positive-control-vInventoryJson.md | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-08-global-objects-positive-control-vInventoryJson.md | ok |
| 57 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 58 | mcp__playwright__browser_type | element=Global Objects list search textbox | ok |
| 59 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-09-global-objects-vEcho-slow-typed-readback.md | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-09-global-objects-vEcho-slow-typed-readback.md | ok |
| 61 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 62 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-10-global-objects-list-after-filter-cleared.md | ok |
| 63 | Grep | (no key/element/filename argument) | ok |
| 64 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-10-global-objects-list-after-filter-cleared.md | ok |
| 65 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 66 | mcp__playwright__browser_press_key | key=Delete | ok |
| 67 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t1-11-global-objects-list-window-1-cleared.md | error: ### Error Error: Ref e659 not found in the current page snapshot. Try capturing new snapshot. |
| 68 | mcp__playwright__browser_press_key | key=Escape | ok |
| 69 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t1-12-designer-state-after-stop-escape.png | ok |
| 70 | mcp__playwright__browser_console_messages | (no key/element/filename argument) | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-12-designer-state-after-stop-escape.png | ok |
| 72 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t1-13-designer-after-global-objects-cancel-coordinate.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t1-13-designer-after-global-objects-cancel-coordinate.png | ok |
| 75 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T1-preflight-summary.md | ok |
| 76 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T1-preflight-summary.md | ok |
| 77 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |