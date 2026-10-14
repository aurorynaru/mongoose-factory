# controller-generated audit (not worker prose)

5 actions, 13 reads; prohibited-tool hits=0; errors=0; turns=19; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_CustomerID","In Collection","FX_HelloWorld01","FX_Code","FX_Label","FX_Address","%1","%2","mIsNotAValid"]

Key sequence: [{"order":14,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-087/t4-00-start-fresh-snapshot.yml | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t4-01-property-sheet-before-ErrorMessage.png | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-087\t4-01-property-sheet-before-ErrorMessage.png | ok |
| 8 | mcp__playwright__browser_click | element=Error Message dropdown trigger in Global Objects property sheet | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t4-02-error-message-dropdown-open.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-087\t4-02-error-message-dropdown-open.png | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=mIsNotAValid option in Error Message list | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t4-03-error-message-mIsNotAValid-after-Tab.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-087\t4-03-error-message-mIsNotAValid-after-Tab.png | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=OK button of Global Objects dialog | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-087/t4-04-after-GlobalObjects-OK-save-state.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-087\t4-04-after-GlobalObjects-OK-save-state.png | ok |
| 23 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md | ok |
| 24 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md | ok |
| 25 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md | ok |