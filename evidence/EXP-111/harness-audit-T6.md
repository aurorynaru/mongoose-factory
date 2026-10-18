# controller-generated audit (not worker prose)

23 actions, 39 reads; prohibited-tool hits=2; errors=3; turns=76; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticSignIn","StaticImage1","StaticCustID2","EditCustID","ButtonSignIn2","FX_sSignIn","FX_sCustomerID","FX_Header","FX_BlueButton","FX_CustomerSignIn.png","Customer ID"]

Key sequence: [{"order":46,"key":"Tab","result":"ok"},{"order":56,"key":"Tab","result":"ok"},{"order":63,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#37 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1284 not found in the current page snapshot. Try capturing new snapshot.","#57 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1284 not found in the current page snapshot. Try capturing new snapshot.","#66 mcp__playwright__browser_snapshot: ### Error\nError: Ref e11 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Expand Panel button of Details | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-06-resume-state-readonly-after-usage-limit.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-06-resume-state-readonly-after-usage-limit.png | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Components tab in Details | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-07-components-tree-after-usage-limit-readonly.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-07-components-tree-after-usage-limit-readonly.png | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Expand button of Components grid | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-07-components-tree-after-usage-limit-readonly.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-07-components-tree-after-usage-limit-readonly.png | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=StaticCustID2 row in Components tree | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-08-staticcustid2-selected-properties-readonly.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-08-staticcustid2-selected-properties-readonly.png | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Appearance group row in Properties | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-09-staticcustid2-appearance-expanded-readonly.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-09-staticcustid2-appearance-expanded-readonly.png | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Miscellaneous group row in Properties | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Specific Attributes sub-group row in Properties | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=No Colon value arrow in Specific Attributes for StaticCustID2 | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=True option in No Colon list | ok |
| 34 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Description row label in Properties | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1284 not found in the current page snapshot. Try capturing new snapshot. |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=Justification value cell for StaticCustID2 | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Justification combobox arrow for StaticCustID2 | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Center option in Justification list | ok |
| 46 | mcp__playwright__browser_press_key | key=Tab | ok |
| 47 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Layout group row in Properties | ok |
| 49 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Size row in Properties Layout | ok |
| 51 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Width value cell in Size | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_type | element=Width value textbox in Size | ok |
| 56 | mcp__playwright__browser_press_key | key=Tab | ok |
| 57 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1284 not found in the current page snapshot. Try capturing new snapshot. |
| 58 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_click | element=Height value cell in Size | ok |
| 60 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_type | element=Height value textbox in Size | ok |
| 63 | mcp__playwright__browser_press_key | key=Tab | ok |
| 64 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-10-staticcustid2-size-20-1_5-before-save-3.png | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-10-staticcustid2-size-20-1_5-before-save-3.png | ok |
| 66 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e11 not found in the current page snapshot. Try capturing new snapshot. |
| 67 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_click | element=Save button in Designer toolbar | ok |
| 69 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t3a-11-save-3-after-step-c-staticcustid2-properties.png | ok |
| 70 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t3a-11-save-3-after-step-c-staticcustid2-properties.png | ok |
| 71 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 72 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 73 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 74 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 75 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 76 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |