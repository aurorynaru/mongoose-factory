# controller-generated audit (not worker prose)

6 actions, 9 reads; prohibited-tool hits=1; errors=0; turns=16; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX001","FX002","1 Factory Street","2 Factory Street"]

Key sequence: [{"order":10,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Row header '2' (FX002 row) in FX_HelloWorld01 runtime grid | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Address multi-line field (FX_AddressEdit) in FX_HelloWorld01 runtime for FX002 | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_type | element=Address multi-line field (FX_AddressEdit) in FX_HelloWorld01 runtime for FX002 | ok |
| 10 | mcp__playwright__browser_press_key | key=Tab | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-077\T3-01-fx002-address-2-factory-street-after-fill-and-tab-presave.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-077\T3-01-fx002-address-2-factory-street-after-fill-and-tab-presave.png | ok |
| 14 | mcp__playwright__browser_click | element=Row header '1' (FX001 row) in FX_HelloWorld01 runtime grid | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-077\T3-02-presave-both-rows-recheck-fx001-1-factory-street-status-1-of-2.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-077\T3-02-presave-both-rows-recheck-fx001-1-factory-street-status-1-of-2.png | ok |
| 18 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |
| 19 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |