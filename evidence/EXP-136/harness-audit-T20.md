# controller-generated audit (not worker prose)

16 actions, 21 reads; prohibited-tool hits=3; errors=1; turns=50; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":21,"key":"F5","result":"ok"},{"order":41,"key":"Control+a","result":"ok"},{"order":42,"key":"Backspace","result":"ok"},{"order":47,"key":"Control+a","result":"ok"},{"order":48,"key":"Backspace","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: ["#5 Grep: Path does not exist: C:\\AI\\mongoose-factory\\experiments\\EXP-130-*.md. Note: your current working directory is C:\\AI\\mongoose-factory."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t19-qualified-fresh-designer-ac9-readback.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | Grep | (no key/element/filename argument) | error: Path does not exist: C:\AI\mongoose-factory\experiments\EXP-130-*.md. Note: your current working directory is C:\AI\mongoose-factory. |
| 6 | Glob | (no key/element/filename argument) | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\recipes\forms\create-basic-form.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\assets\FX_Inventory\index.html | ok |
| 11 | mcp__playwright__browser_tabs | action=select | ok |
| 12 | mcp__playwright__browser_snapshot | filename=evidence/EXP-136/t20-designer-preflight-fresh-snapshot.yml | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-136/t20-designer-preflight-clean-state.png | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-designer-preflight-clean-state.png | ok |
| 16 | mcp__playwright__browser_tabs | action=select | ok |
| 17 | mcp__playwright__browser_snapshot | filename=evidence/EXP-136/t20-webclient-pre-reload-snapshot.yml | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-136/t20-webclient-pre-reload-state.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-webclient-pre-reload-state.png | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_press_key | key=F5 | ok |
| 22 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_network_requests | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_snapshot | filename=evidence/EXP-136/t20-webclient-post-reload-snapshot.yml | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-136/t20-webclient-post-reload-state.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-webclient-post-reload-state.png | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Open button in Web Client Form toolbar | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-136/t20-select-form-dialog-opened.png | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-136/t20-select-form-dialog-snapshot.yml | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-select-form-dialog-snapshot.yml | ok |
| 34 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 35 | mcp__playwright__browser_snapshot | filename=evidence/EXP-136/t20-select-form-filtered-snapshot.yml | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-136/t20-select-form-filter-FX_InventoryDashboard.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-select-form-filter-FX_InventoryDashboard.png | ok |
| 40 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 41 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 42 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 43 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-136/t20-select-form-filter-slow-type-FX_InventoryDashboard.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-select-form-filter-slow-type-FX_InventoryDashboard.png | ok |
| 46 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 47 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 48 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 49 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-136/t20-select-form-positive-control-filter-FX_Inventory.png | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-select-form-positive-control-filter-FX_Inventory.png | ok |
| 52 | Grep | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_click | element=Select Form dialog Cancel button | ok |
| 54 | mcp__playwright__browser_snapshot | filename=evidence/EXP-136/t20-webclient-after-select-form-cancel-snapshot.yml | ok |
| 55 | Grep | (no key/element/filename argument) | ok |
| 56 | Grep | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=Form menu button in Web Client toolbar | ok |
| 58 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-136/t20-webclient-form-menu-recent-list-readonly.png | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-webclient-form-menu-recent-list-readonly.png | ok |
| 60 | Grep | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_click | element=Form menu button in Web Client toolbar (dismiss) | ok |
| 62 | mcp__playwright__browser_console_messages | filename=evidence/EXP-136/t20-webclient-console-errors-readonly.log | ok |
| 63 | mcp__playwright__browser_snapshot | filename=evidence/EXP-136/t20-webclient-final-stable-snapshot.yml | ok |
| 64 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-webclient-console-errors-readonly.log | ok |
| 65 | Grep | (no key/element/filename argument) | ok |
| 66 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t20-portal-reload-runtime-dashboard-pre-refresh.md | ok |
| 67 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md | ok |
| 68 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md | ok |