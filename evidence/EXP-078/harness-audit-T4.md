# controller-generated audit (not worker prose)

8 actions, 11 reads; prohibited-tool hits=1; errors=0; turns=23; key string (none); exact mismatches=0

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
| 4 | mcp__playwright__browser_click | element=Properties sub-tab of IDOs Form | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=New Property button (IDOs, FX_Orders) | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Next button (IDO Property Wizard) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Bind To Open button | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Bind To list option fxcus.FX_Label | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_type | element=Property Name textbox | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t4-01-new-property-wizard-FX_CusName-before-finish.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t4-01-new-property-wizard-FX_CusName-before-finish.png | ok |
| 18 | mcp__playwright__browser_click | element=Finish button (IDO Property Wizard, FX_CusName) | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t4-02-post-finish-properties-inventory-FX_CusName.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t4-02-post-finish-properties-inventory-FX_CusName.png | ok |
| 22 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 23 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 24 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |