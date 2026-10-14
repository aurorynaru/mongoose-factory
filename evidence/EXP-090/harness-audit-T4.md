# controller-generated audit (not worker prose)

10 actions, 20 reads; prohibited-tool hits=0; errors=1; turns=40; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Item","In Collection","FX_Items","FX_Description","FX_Cost","%1","%2","mIsNotAValid"]

Key sequence: [{"order":10,"key":"Tab","result":"ok"},{"order":27,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: ["#38 Edit: <tool_use_error>String to replace not found in file.\nString: `FX_Item` highlighted in the list; OK focused; Parameters dialog behind (Property textbox still empty at this frame).</tool_use_error>"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t4-00-designer-fresh-snapshot-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t4-01-gate-inherited-parameters-IDO-SetProp-before-Property.png | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=In Collection Only Property ellipsis button | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=FX_Item option in Property of FX_Items picker | ok |
| 10 | mcp__playwright__browser_press_key | key=Tab | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t4-02-InCollectionOnly-Property-FX_Item-before-picker-OK.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t4-02-InCollectionOnly-Property-FX_Item-before-picker-OK.png | ok |
| 14 | mcp__playwright__browser_click | element=OK button of Property of FX_Items to Use picker | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t4-03-parameters-complete-before-Parameters-OK.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t4-03-parameters-complete-before-Parameters-OK.png | ok |
| 18 | mcp__playwright__browser_click | element=OK button of Edit In Collection Validator Parameters | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t4-04-global-objects-property-sheet-after-Parameters-OK-before-ErrorMessage.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t4-04-global-objects-property-sheet-after-Parameters-OK-before-ErrorMessage.png | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Error Message dropdown arrow in Global Objects property sheet | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=mIsNotAValid option (exact, not the %1 variant) | ok |
| 27 | mcp__playwright__browser_press_key | key=Tab | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t4-05-ErrorMessage-mIsNotAValid-after-Tab-before-GlobalObjects-OK.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t4-05-ErrorMessage-mIsNotAValid-after-Tab-before-GlobalObjects-OK.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=OK button of Global Objects dialog | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-090\t4-06-after-GlobalObjects-OK-Save-enabled-no-dialog.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-090\t4-06-after-GlobalObjects-OK-Save-enabled-no-dialog.png | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md | ok |
| 37 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md | error: <tool_use_error>String to replace not found in file. String: `FX_Item` highlighted in the list; OK focused; Parameters dialog behind (Property textbox still empty at this frame).</tool_use_error> |
| 39 | Grep | (no key/element/filename argument) | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md | ok |