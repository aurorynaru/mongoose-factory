# controller-generated audit (not worker prose)

18 actions, 21 reads; prohibited-tool hits=2; errors=2; turns=47; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UMs","FX_UM","FX_Description","FX_sUM","FX_sDescription","Unit of Measure"]

Key sequence: [{"order":19,"key":"Control+a","result":"ok"},{"order":21,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#1 mcp__playwright__browser_tabs: ### Error\nError: Tab 1 not found","#2 mcp__playwright__browser_tabs: ### Error\nError: Tab 1 not found"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=select | error: ### Error Error: Tab 1 not found |
| 2 | mcp__playwright__browser_tabs | action=select | error: ### Error Error: Tab 1 not found |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Components tab in the Details panel | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=FX_UMStatic row in Details > Components grid (Static, Pane 1, Tab 3) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Component tab at the bottom of the Properties panel | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-045/t12-01-pre-edit-FX_UMStatic-selected-Component-properties-Caption-FX_sUM.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t12-01-pre-edit-FX_UMStatic-selected-Component-properties-Caption-FX_sUM.png | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Caption ellipsis button (Open Edit Property Dialog) for FX_UMStatic | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=String Value cell in the String dialog (currently FX_s UM) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 20 | mcp__playwright__browser_type | element=Active String Value editing textbox in the String dialog (currently FX_s UM, selected) | ok |
| 21 | mcp__playwright__browser_press_key | key=Tab | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-045/t12-02-pre-OK-String-dialog-FX_sUM-cell-committed-Unit-of-Measure.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t12-02-pre-OK-String-dialog-FX_sUM-cell-committed-Unit-of-Measure.png | ok |
| 25 | mcp__playwright__browser_click | element=OK button of the String dialog (FX_sUM) | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Edit menu in the Designer top menu bar | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=String item in the Edit menu | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Strings list search textbox in the Global Objects dialog | ok |
| 33 | mcp__playwright__browser_type | element=Strings list search textbox in the Global Objects dialog | ok |
| 34 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=FX_sUM row in the Global Objects Strings list | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-045/t12-03-post-T12-Edit-String-FX_sUM-stored-value-Unit-of-Measure.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t12-03-post-T12-Edit-String-FX_sUM-stored-value-Unit-of-Measure.png | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Cancel button of the Global Objects dialog | ok |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t12-fx-sum-correction-observations.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t12-fx-sum-correction-observations.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t12-fx-sum-correction-observations.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-045\cleanup-inventory.md | ok |
| 47 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md | ok |