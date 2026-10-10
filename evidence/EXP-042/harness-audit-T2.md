# controller-generated audit (not worker prose)

12 actions, 20 reads; prohibited-tool hits=1; errors=2; turns=41; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX001","FX002","Factory test one","Factory test two"]

Key sequence: [{"order":6,"key":"Control+a","result":"ok"},{"order":16,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#21 mcp__playwright__browser_network_requests: ### Error\nInvalid arguments for tool \"browser_network_requests\":\n✖ Invalid regular expression\n  → at filter","#33 mcp__playwright__browser_snapshot: ### Error\nError: Ref f1e24 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_click | element=Open toolbar button | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 6 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 7 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 8 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-042\t2-01-select-form-fx-helloworld01-settled-one-row-before-ok.png | ok |
| 12 | mcp__playwright__browser_click | element=Select Form OK button | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=FiP Filter in Place toolbar button | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_press_key | key=F4 | ok |
| 17 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-042\t2-02-runtime-after-fip-f4-empty-criteria-settled.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042\t2-02-runtime-after-fip-f4-empty-criteria-settled.png | ok |
| 21 | mcp__playwright__browser_network_requests | (no key/element/filename argument) | error: ### Error Invalid arguments for tool "browser_network_requests": ✖ Invalid regular expression   → at filter |
| 22 | mcp__playwright__browser_network_requests | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Refresh toolbar button | ok |
| 29 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-042\t2-03-runtime-after-supported-refresh-settled.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042\t2-03-runtime-after-supported-refresh-settled.png | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref f1e24 not found in the current page snapshot. Try capturing new snapshot. |
| 34 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042\t2-01-select-form-fx-helloworld01-settled-one-row-before-ok.png | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-hello-world-part-1-two-test-records-through-the-we.md | ok |
| 37 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-hello-world-part-1-two-test-records-through-the-we.md | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-hello-world-part-1-two-test-records-through-the-we.md | ok |
| 39 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-042\cleanup-inventory.md | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-hello-world-part-1-two-test-records-through-the-we.md | ok |