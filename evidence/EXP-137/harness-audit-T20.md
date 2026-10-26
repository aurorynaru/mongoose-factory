# controller-generated audit (not worker prose)

10 actions, 13 reads; prohibited-tool hits=2; errors=0; turns=32; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":16,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Grep | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Web Client toolbar "Open" button (Select Form) | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-137\t20-00-webclient-select-form-open-after-toolbar-open.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-26T14-57-28-440Z.yml | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t20-00-webclient-select-form-open-after-toolbar-open.png | ok |
| 10 | mcp__playwright__browser_type | element=Select Form Filter textbox (Filter By Name) | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-137\t20-01-select-form-fx-loginusers-filter-settled.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t20-01-select-form-fx-loginusers-filter-settled.png | ok |
| 15 | mcp__playwright__browser_click | element=Select Form Filter textbox (editable criterion) | ok |
| 16 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 17 | mcp__playwright__browser_type | element=Select Form Filter textbox (editable criterion) | ok |
| 18 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-137\t20-02-select-form-fx-loginusers-retyped-settled.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t20-02-select-form-fx-loginusers-retyped-settled.png | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Select Form dialog OK button (opens FX_LoginUsers runtime) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-137\t20-03-runtime-fx-loginusers-after-open-before-refresh.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t20-03-runtime-fx-loginusers-after-open-before-refresh.png | ok |
| 26 | mcp__playwright__browser_click | element=Web Client toolbar Refresh button (read-only collection reload) | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-137\t20-04-runtime-fx-loginusers-after-one-refresh.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t20-04-runtime-fx-loginusers-after-one-refresh.png | ok |
| 30 | mcp__playwright__browser_click | element=Web Client toolbar Filter in Place (FiP) button | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-137\t20-05-runtime-fip-on-before-criterion.png | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t20-05-runtime-fip-on-before-criterion.png | ok |
| 34 | mcp__playwright__browser_click | element=Web Client toolbar Filter in Place (FiP) button (toggle OFF, restore unfiltered view) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-137\t20-06-runtime-fip-off-unfiltered-state.png | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t20-06-runtime-fip-off-unfiltered-state.png | ok |
| 38 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-137\T20-runtime-preflight.md | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-137\T20-runtime-preflight.md | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 41 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |