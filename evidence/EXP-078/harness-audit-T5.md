# controller-generated audit (not worker prose)

11 actions, 14 reads; prohibited-tool hits=1; errors=0; turns=31; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_HelloWorld01","fxcus","FX_CusName","FX_CusAddress","FX_Code","FX_CustomerID","FX_Label","FX_Address"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Tables sub-tab of IDOs Form | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=New Property button (IDOs, FX_Orders) | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Next button (IDO Property Wizard) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Bind To Open button | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Bind To list option fxcus.FX_Address | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_type | element=Property Name textbox | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t5-01-new-property-wizard-FX_CusAddress-before-finish.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t5-01-new-property-wizard-FX_CusAddress-before-finish.png | ok |
| 19 | mcp__playwright__browser_click | element=Finish button (IDO Property Wizard, FX_CusAddress) | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Properties sub-tab of IDOs Form | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t5-02-post-finish-properties-inventory-top-rows-1-8.png | ok |
| 24 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t5-03-post-finish-properties-inventory-scrolled-rows-6-13.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t5-03-post-finish-properties-inventory-scrolled-rows-6-13.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t5-02-post-finish-properties-inventory-top-rows-1-8.png | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |