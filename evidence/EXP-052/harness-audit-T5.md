# controller-generated audit (not worker prose)

4 actions, 7 reads; prohibited-tool hits=1; errors=0; turns=15; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","d*",">5","DZ"]

Key sequence: [{"order":10,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Filter in Place toolbar button (FiP), one click to enter criteria mode | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_type | element=Item criteria textbox in Filter in Place mode | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-052/t5-01-FiP-criteria-before-execute-Item-d-star-others-blank.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-052\t5-01-FiP-criteria-before-execute-Item-d-star-others-blank.png | ok |
| 10 | mcp__playwright__browser_press_key | key=F4 | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-052/t5-02-FiP-d-star-settled-result-one-row-dumbbell.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-052\t5-02-FiP-d-star-settled-result-one-row-dumbbell.png | ok |
| 14 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-052\T5-filter-in-place-item-d-star-report.md | ok |
| 15 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 16 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 17 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 18 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |