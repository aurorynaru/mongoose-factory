# controller-generated audit (not worker prose)

13 actions, 14 reads; prohibited-tool hits=1; errors=0; turns=31; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","d*",">5","DZ"]

Key sequence: [{"order":7,"key":"Control+a","result":"ok"},{"order":8,"key":"Delete","result":"ok"},{"order":10,"key":"Tab","result":"ok"},{"order":20,"key":"Tab","result":"ok"},{"order":26,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button, one click to enter criteria mode | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Item criteria textbox in Filter in Place mode (inherited d*) | ok |
| 7 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 8 | mcp__playwright__browser_press_key | key=Delete | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_press_key | key=Tab | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Unit of Measure combobox Open trigger (list open to read mapping) | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=DZ \| Dozen option in Unit of Measure list | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Cost criteria textbox in Filter in Place mode | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_type | element=Cost criteria textbox in Filter in Place mode (literal >5, single attempt) | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_press_key | key=Tab | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-052/t6-01-FiP-criteria-before-execute-Cost-gt5-UM-DZ-Item-cleared.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-052\t6-01-FiP-criteria-before-execute-Cost-gt5-UM-DZ-Item-cleared.png | ok |
| 24 | mcp__playwright__browser_click | element=Description criteria textbox (focus move only, blank, no typing) before F4 | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_press_key | key=F4 | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-052/t6-02-FiP-Cost-gt5-UM-DZ-settled-result-eggs.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-052\t6-02-FiP-Cost-gt5-UM-DZ-settled-result-eggs.png | ok |
| 30 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-052\T6-filter-in-place-cost-gt5-dz-report.md | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 34 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |