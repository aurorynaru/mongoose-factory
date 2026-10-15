# controller-generated audit (not worker prose)

17 actions, 25 reads; prohibited-tool hits=2; errors=1; turns=46; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_CustomerPortal","FX_Orders","FX_Items","Flex","Basic","Character"]

Key sequence: [{"order":12,"key":"Control+a","result":"ok"},{"order":18,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#34 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1000 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-102/t4-01-gate-pre-close-FX_CustomerPortal-clean-user-scope.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-102\t4-01-gate-pre-close-FX_CustomerPortal-clean-user-scope.png | ok |
| 5 | mcp__playwright__browser_click | element=FX_CustomerPortal Form-tab close control (closable FX_CustomerPortal) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-102/t4-02-post-close-immediate-state.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-102\t4-02-post-close-immediate-state.png | ok |
| 9 | mcp__playwright__browser_click | element=Toolbar first button (Open, Select Form) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 12 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 13 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 14 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-102/t4-03-select-form-filter-FX_CustomerPortal-zero-rows-after-reopen-attempt.png | ok |
| 17 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 18 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 19 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 20 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Select Form dialog Cancel button | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Form menu button | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Form menu recent-forms entry FX_CustomerPortal | ok |
| 27 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-102/t4-04-reopened-FX_CustomerPortal-properties-save-state.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-102\t4-04-reopened-FX_CustomerPortal-properties-save-state.png | ok |
| 31 | mcp__playwright__browser_click | element=Details pane Expand Panel button | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=Details pane Components tab | ok |
| 34 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1000 not found in the current page snapshot. Try capturing new snapshot. |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Components grid Expand button | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-102/t4-05-reopened-components-tree-flexlayout-and-regions.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-102\t4-05-reopened-components-tree-flexlayout-and-regions.png | ok |
| 39 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Details pane Collections tab | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Primary Collection row in Collections tree | ok |
| 43 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Secondary Collection row in Collections tree | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-102/t4-06-reopened-collections-FX_Orders-FX_Items-secondary-selected-readback.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-102\t4-06-reopened-collections-FX_Orders-FX_Items-secondary-selected-readback.png | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md | ok |
| 49 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md | ok |
| 50 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md | ok |