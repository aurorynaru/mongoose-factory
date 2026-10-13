# controller-generated audit (not worker prose)

6 actions, 9 reads; prohibited-tool hits=1; errors=1; turns=19; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX001","FX002","1 Factory Street","2 Factory Street"]

Key sequence: [{"order":14,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#4 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e164')\u001b[22m\n\u001b[2m    - locator resolved to <td tabindex=\"-1\" id=\"ext-18406\" role=\"gridcell\" data-columnid=\"gc_108_gd0_gc1\" class=\" x-grid-cell x-grid-td x-grid-cell-gc_108_gd0_gc1 x-grid-cell-first x-unselectable\">…</td>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    - waiting for element to be visible, enabled and stable\u001b[22m\n\u001b[2m    - element is visible, enabled and sta… (6146 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Grid row 1 'Factory test one' (FX001) in FX_HelloWorld01 runtime | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e164')[22m [2m    - locator resolved to <td tabindex="-1" id="ext-18406" role="gridcell" data-columnid="gc_108_gd0_gc1" class=" x-grid-cell x-grid-td x-grid-cell-gc_108_gd0_gc1 x-grid-cell-first x-unselectable">…</td>[22m [2m  - attempting click action[22m [2m    - waiting for element to be visible, enabled and stable[22m [2m    - element is visible, enabled and sta… (6146 chars) |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-077\T2-01-after-row1-click-timeout-state-inspection.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-077\T2-01-after-row1-click-timeout-state-inspection.png | ok |
| 8 | mcp__playwright__browser_click | element=Row header '1' (FX001 row) in FX_HelloWorld01 runtime grid | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-077\T2-02-fx001-current-before-address-focus.png | ok |
| 11 | mcp__playwright__browser_click | element=Address multi-line field (FX_AddressEdit) in FX_HelloWorld01 runtime for FX001 | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_type | element=Address multi-line field (FX_AddressEdit) in FX_HelloWorld01 runtime for FX001 | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-077\T2-03-fx001-address-1-factory-street-after-fill-and-tab.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-077\T2-03-fx001-address-1-factory-street-after-fill-and-tab.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |
| 19 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |
| 20 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |
| 21 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |
| 22 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |