# controller-generated audit (not worker prose)

20 actions, 19 reads; prohibited-tool hits=4; errors=0; turns=68; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticHeader","FX_sCustomerPortal","Customer Portal","FX_WhiteHeader","40","1.5","2,0,0,0"]

Key sequence: [{"order":24,"key":"Tab","result":"ok"},{"order":32,"key":"Tab","result":"ok"},{"order":38,"key":"Control+a","result":"ok"},{"order":41,"key":"Tab","result":"ok"},{"order":57,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\recipes\components\add-component-from-toolbox.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\recipes\components\configure-basic-component.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md | ok |
| 9 | mcp__playwright__browser_tabs | action=list | ok |
| 10 | mcp__playwright__browser_tabs | action=select | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-gate-01-designer-start-before-placement.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-gate-01-designer-start-before-placement.png | ok |
| 14 | mcp__playwright__browser_click | element=Static row in Toolbox Framework Components | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-01-toolbox-static-selected.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-01-toolbox-static-selected.png | ok |
| 17 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-02-canvas-after-placement-click.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-02-canvas-after-placement-click.png | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Design Name value cell of static1_USER in Properties | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_type | element=Name inline editor textbox for static1_USER | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-03-name-StaticHeader-after-entry.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-03-name-StaticHeader-after-entry.png | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Design Caption value cell in Properties for StaticHeader | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-16T05-44-47-551Z.yml | ok |
| 31 | mcp__playwright__browser_type | element=Caption combobox editor for StaticHeader | ok |
| 32 | mcp__playwright__browser_press_key | key=Tab | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-04-caption-FX_sCustomerPortal-after-entry.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-04-caption-FX_sCustomerPortal-after-entry.png | ok |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Caption value cell (combobox) for StaticHeader | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 39 | mcp__playwright__browser_type | element=Caption combobox editor for StaticHeader | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_press_key | key=Tab | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-05-caption-FX_sCustomerPortal-correction-after-tab.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-05-caption-FX_sCustomerPortal-correction-after-tab.png | ok |
| 44 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t2-snapshot-after-caption-correction.yml | ok |
| 45 | Grep | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Caption row ellipsis button for StaticHeader | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-06-caption-ellipsis-creation-prompt.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-06-caption-ellipsis-creation-prompt.png | ok |
| 49 | Grep | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Yes button in String creation prompt | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-07-string-editor-before-value.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-07-string-editor-before-value.png | ok |
| 53 | Grep | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=String Value cell in String editor | ok |
| 55 | Grep | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_type | element=String Value editor textbox in String dialog | ok |
| 57 | mcp__playwright__browser_press_key | key=Tab | ok |
| 58 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t2-snapshot-string-editor-after-value.yml | ok |
| 59 | Grep | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-08-string-editor-value-customer-portal-before-ok.png | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-08-string-editor-value-customer-portal-before-ok.png | ok |
| 62 | mcp__playwright__browser_click | element=OK button in String editor | ok |
| 63 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-09-after-string-OK-dialog-closed.png | ok |
| 64 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-09-after-string-OK-dialog-closed.png | ok |
| 65 | Grep | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_click | element=Designer toolbar Save button | ok |
| 67 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t2-10-designer-save-response.png | ok |
| 68 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t2-10-designer-save-response.png | ok |
| 69 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t2-snapshot-after-save.yml | ok |
| 70 | Grep | (no key/element/filename argument) | ok |
| 71 | Grep | (no key/element/filename argument) | ok |
| 72 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 73 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 74 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 75 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 76 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 77 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 78 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 79 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 80 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 81 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 82 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |