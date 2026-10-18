# controller-generated audit (not worker prose)

31 actions, 27 reads; prohibited-tool hits=1; errors=3; turns=65; key string "FX_sCustomerID" [exact match]; exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticSignIn","StaticImage1","StaticCustID2","EditCustID","ButtonSignIn2","FX_sSignIn","FX_sCustomerID","FX_Header","FX_BlueButton","FX_CustomerSignIn.png","Customer ID"]

Key sequence: [{"order":22,"key":"Tab","result":"ok"},{"order":30,"key":"F","result":"ok"},{"order":31,"key":"X","result":"ok"},{"order":32,"key":"_","result":"ok"},{"order":33,"key":"s","result":"ok"},{"order":34,"key":"C","result":"ok"},{"order":35,"key":"u","result":"ok"},{"order":36,"key":"s","result":"ok"},{"order":37,"key":"t","result":"ok"},{"order":38,"key":"o","result":"ok"},{"order":39,"key":"m","result":"ok"},{"order":40,"key":"e","result":"ok"},{"order":41,"key":"r","result":"ok"},{"order":42,"key":"I","result":"ok"},{"order":43,"key":"D","result":"ok"},{"order":66,"key":"Tab","result":"ok"}]

Spelled strings: [{"text":"FX_sCustomerID","orders":[30,31,32,33,34,35,36,37,38,39,40,41,42,43],"allOk":true,"exactMatch":true,"matchingValues":["FX_sCustomerID"]}]

Flagged tool usage: {"browser_type":1}

Errors: ["#49 mcp__playwright__browser_click: ### Error\nError: Ref e1158 not found in the current page snapshot. Try capturing new snapshot.","#58 mcp__playwright__browser_click: ### Error\nError: Ref e1712 not found in the current page snapshot. Try capturing new snapshot.","Terminal success: You've hit your session limit · resets 5am (Asia/Singapore)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 6 | mcp__playwright__browser_tabs | action=list | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Expand button of Components grid | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Static row in Toolbox Framework Components | ok |
| 13 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-01-staticcustid2-placed-after-staticimage1-tree-and-canvas.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-01-staticcustid2-placed-after-staticimage1-tree-and-canvas.png | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Name value cell of static1_USER in Properties | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_type | element=Name value textbox of static1_USER in Properties | ok |
| 22 | mcp__playwright__browser_press_key | key=Tab | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Save button in Designer toolbar | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-02-save-1-after-step-a-staticcustid2-named.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-02-save-1-after-step-a-staticcustid2-named.png | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Caption value cell in Properties for StaticCustID2 | ok |
| 30 | mcp__playwright__browser_press_key | key=F | ok |
| 31 | mcp__playwright__browser_press_key | key=X | ok |
| 32 | mcp__playwright__browser_press_key | key=_ | ok |
| 33 | mcp__playwright__browser_press_key | key=s | ok |
| 34 | mcp__playwright__browser_press_key | key=C | ok |
| 35 | mcp__playwright__browser_press_key | key=u | ok |
| 36 | mcp__playwright__browser_press_key | key=s | ok |
| 37 | mcp__playwright__browser_press_key | key=t | ok |
| 38 | mcp__playwright__browser_press_key | key=o | ok |
| 39 | mcp__playwright__browser_press_key | key=m | ok |
| 40 | mcp__playwright__browser_press_key | key=e | ok |
| 41 | mcp__playwright__browser_press_key | key=r | ok |
| 42 | mcp__playwright__browser_press_key | key=I | ok |
| 43 | mcp__playwright__browser_press_key | key=D | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-03-caption-list-typed-FX_sCustomerID-before-description-click.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-03-caption-list-typed-FX_sCustomerID-before-description-click.png | ok |
| 46 | mcp__playwright__browser_click | element=Description row label in Properties | ok |
| 47 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=Save button in Designer toolbar | error: ### Error Error: Ref e1158 not found in the current page snapshot. Try capturing new snapshot. |
| 50 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=Save button in Designer toolbar | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-04-save-2-after-step-b-caption-fx_scustomerid.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-04-save-2-after-step-b-caption-fx_scustomerid.png | ok |
| 54 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=Justification value cell for StaticCustID2 | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-05-justification-list-open.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-05-justification-list-open.png | ok |
| 58 | mcp__playwright__browser_click | element=Justification value arrow for StaticCustID2 | error: ### Error Error: Ref e1712 not found in the current page snapshot. Try capturing new snapshot. |
| 59 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=Justification combobox arrow for StaticCustID2 | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-05-justification-list-open.png | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-05-justification-list-open.png | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_click | element=Center option in Justification list | ok |
| 66 | mcp__playwright__browser_press_key | key=Tab | ok |
| 67 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=No Colon value arrow in Specific Attributes for StaticCustID2 | ok |