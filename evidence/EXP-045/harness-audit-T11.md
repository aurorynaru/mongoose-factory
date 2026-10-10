# controller-generated audit (not worker prose)

15 actions, 22 reads; prohibited-tool hits=2; errors=1; turns=46; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UMs","FX_UM","FX_Description","FX_sUM","FX_sDescription","Unit of Measure"]

Key sequence: [{"order":21,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#1 mcp__playwright__browser_tabs: ### Error\nError: Tab 1 not found"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=select | error: ### Error Error: Tab 1 not found |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Edit menu in the Designer top menu bar | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=String item in the Edit menu | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Strings list search textbox in the Global Objects dialog | ok |
| 11 | mcp__playwright__browser_type | element=Strings list search textbox in the Global Objects dialog | ok |
| 12 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-045/t11-01-Strings-filter-FX_sUM-settled-result.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t11-01-Strings-filter-FX_sUM-settled-result.png | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=FX_sUM row in the Global Objects Strings list | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-045/t11-02-FX_sUM-row-selected-Properties-String-Value-FX_s_UM-MISMATCH.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t11-02-FX_sUM-row-selected-Properties-String-Value-FX_s_UM-MISMATCH.png | ok |
| 20 | mcp__playwright__browser_click | element=Strings list search textbox in the Global Objects dialog | ok |
| 21 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 22 | mcp__playwright__browser_type | element=Strings list search textbox in the Global Objects dialog | ok |
| 23 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=FX_sDescription row in the Global Objects Strings list | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-045/t11-03-FX_sDescription-row-selected-Properties-String-Value-Description.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t11-03-FX_sDescription-row-selected-Properties-String-Value-Description.png | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Cancel button of the Global Objects dialog | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=FX_UMStatic row in Details > Components grid (Static, Pane 1, Tab 3) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-045/t11-04-FX_UMStatic-selected-Properties-header-and-Caption-FX_sUM.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t11-04-FX_UMStatic-selected-Properties-header-and-Caption-FX_sUM.png | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=Form tab at the bottom of the Properties panel | ok |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=Collections tab in the Details panel | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-045/t11-05-Form-properties-identity-and-Collections-tab-FX_UMs.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t11-05-Form-properties-identity-and-Collections-tab-FX_UMs.png | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-045\t11-verification-gate-observations.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-045\cleanup-inventory.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md | ok |