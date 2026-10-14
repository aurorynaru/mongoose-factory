# controller-generated audit (not worker prose)

25 actions, 34 reads; prohibited-tool hits=3; errors=0; turns=68; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Item","In Collection","FX_Items","FX_Description","FX_Cost","%1","%2","mIsNotAValid"]

Key sequence: [{"order":12,"key":"Tab","result":"ok"},{"order":26,"key":"Tab","result":"ok"},{"order":35,"key":"Tab","result":"ok"},{"order":37,"key":"Tab","result":"ok"},{"order":40,"key":"Tab","result":"ok"},{"order":47,"key":"Tab","result":"ok"},{"order":52,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-00-designer-fresh-snapshot-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-01-gate-inherited-parameters-dialog-before-IDO.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t3-01-gate-inherited-parameters-dialog-before-IDO.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=FX_Items option in IDO list | ok |
| 12 | mcp__playwright__browser_press_key | key=Tab | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-02-IDO-FX_Items-after-Tab.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t3-02-IDO-FX_Items-after-Tab.png | ok |
| 16 | mcp__playwright__browser_click | element=Set Prop/ Var/ Comp ellipsis button | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-03-SetProp-Edit-Set-Values-initial.png | ok |
| 20 | mcp__playwright__browser_click | element=Properties ellipsis in Edit Set Values dialog | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-04-SetProp-properties-list-initial-empty.png | ok |
| 23 | mcp__playwright__browser_click | element=New button in Edit Set Property Values list (output 1) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_type | element=Target combobox in Edit Set Property From List (output 1) | ok |
| 26 | mcp__playwright__browser_press_key | key=Tab | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-05-SetProp-output1-Target-%1-after-Tab.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t3-05-SetProp-output1-Target-%1-after-Tab.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Value combobox Open button (output 1) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=FX_Description option in Value list (output 1) | ok |
| 35 | mcp__playwright__browser_press_key | key=Tab | ok |
| 36 | mcp__playwright__browser_type | element=Target combobox in Edit Set Property From List (output 1) | ok |
| 37 | mcp__playwright__browser_press_key | key=Tab | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-06-SetProp-output1-Target-%1-Value-FX_Description-before-OK.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t3-06-SetProp-output1-Target-%1-Value-FX_Description-before-OK.png | ok |
| 40 | mcp__playwright__browser_press_key | key=Tab | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=OK button of Edit Set Property From List (output 1) | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=New button in Edit Set Property Values list (output 2) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_type | element=Target combobox in Edit Set Property From List (output 2) | ok |
| 47 | mcp__playwright__browser_press_key | key=Tab | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=Value combobox Open button (output 2) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=FX_Cost option in Value list (output 2) | ok |
| 52 | mcp__playwright__browser_press_key | key=Tab | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-07-SetProp-output2-Target-%2-Value-FX_Cost-before-OK.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t3-07-SetProp-output2-Target-%2-Value-FX_Cost-before-OK.png | ok |
| 56 | mcp__playwright__browser_click | element=OK button of Edit Set Property From List (output 2) | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-08-SetProp-properties-list-two-outputs-before-OK.png | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t3-08-SetProp-properties-list-two-outputs-before-OK.png | ok |
| 60 | mcp__playwright__browser_click | element=OK button of Edit Set Property Values list | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_click | element=OK button of Edit Set Values editor | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t3-09-parameters-after-SetProp-IDO-set-before-InCollectionOnly.png | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t3-09-parameters-after-SetProp-IDO-set-before-InCollectionOnly.png | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md | ok |
| 68 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md | ok |