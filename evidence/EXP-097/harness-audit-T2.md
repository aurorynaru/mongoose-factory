# controller-generated audit (not worker prose)

9 actions, 17 reads; prohibited-tool hits=1; errors=1; turns=28; key string "t" [not an exact_value (informational)]; exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_OrdersChart","FX_Orders","Classic","Grid Only","Refresh","FX001","FX002"]

Key sequence: [{"order":10,"key":"Control+a","result":"ok"},{"order":15,"key":"Backspace","result":"ok"},{"order":17,"key":"t","result":"ok"}]

Spelled strings: [{"text":"t","orders":[17],"allOk":true,"exactMatch":null,"matchingValues":[]}]

Flagged tool usage: {"browser_type":1}

Errors: ["#2 mcp__playwright__browser_snapshot: ### Error\nError: Ref e3 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e3 not found in the current page snapshot. Try capturing new snapshot. |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Web Client menu bar Form button | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Form menu Open item (opens Select Form) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 11 | mcp__playwright__browser_type | element=Select Form filter textbox | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 16 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_press_key | key=t | ok |
| 18 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-097/runtime-01-select-form-filtered-fx-orderschart-row.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-097\runtime-01-select-form-filtered-fx-orderschart-row.png | ok |
| 22 | mcp__playwright__browser_click | element=Select Form row FX_OrdersChart (Caption cell) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-097/runtime-02-fx-orderschart-open-two-rows-no-f4.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-097\runtime-02-fx-orderschart-open-two-rows-no-f4.png | ok |
| 26 | mcp__playwright__browser_click | element=Runtime FX_OrdersChart Close Panel button (close once) | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-097/runtime-03-closed-clean-final-state.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-097\runtime-03-closed-clean-final-state.png | ok |
| 30 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-097-hello-world-part-6-section-5-fx-orderschart-grid-only-form.md | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-097-hello-world-part-6-section-5-fx-orderschart-grid-only-form.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-097-hello-world-part-6-section-5-fx-orderschart-grid-only-form.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-097-hello-world-part-6-section-5-fx-orderschart-grid-only-form.md | ok |