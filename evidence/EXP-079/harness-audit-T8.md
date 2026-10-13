# controller-generated audit (not worker prose)

12 actions, 10 reads; prohibited-tool hits=1; errors=0; turns=31; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_Items","fxitms","FX_ItmsDescription","FX_ItmsCost","FX_ItmsPicture","FX_Item","FX_Description","FX_Cost","FX_Picture"]

Key sequence: [{"order":15,"key":"Tab","result":"ok"},{"order":18,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Close Panel IDOs Form-tab control | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Form menu in Mongoose menu bar | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Form menu item Open | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Select Form dialog row IDOs / IdoCollections | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Select Form dialog OK button | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_type | element=IDO Name criterion textbox | ok |
| 15 | mcp__playwright__browser_press_key | key=Tab | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-079/t8-01-pre-f4-recovery-idos-fx-orders-criterion.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-079\t8-01-pre-f4-recovery-idos-fx-orders-criterion.png | ok |
| 18 | mcp__playwright__browser_press_key | key=F4 | ok |
| 19 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-079/t8-02-recovered-identity-and-tables-view.png | ok |
| 22 | mcp__playwright__browser_click | element=Properties sub-tab in IDOs form | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-079/t8-03-recovered-inventory-upper-rows-1-8.png | ok |
| 26 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-079/t8-04-recovered-inventory-lower-rows-9-16.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-079\t8-02-recovered-identity-and-tables-view.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-079\t8-03-recovered-inventory-upper-rows-1-8.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-079\t8-04-recovered-inventory-lower-rows-9-16.png | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md | ok |
| 34 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md | ok |