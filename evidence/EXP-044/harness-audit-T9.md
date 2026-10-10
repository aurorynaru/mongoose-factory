# controller-generated audit (not worker prose)

7 actions, 24 reads; prohibited-tool hits=1; errors=2; turns=42; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UMs","FX_UM","FX_UMBase","FX_Description","FX_sDescription","fxum","FX_HelloWorldProject01"]

Key sequence: [{"order":11,"key":"Tab","result":"ok"},{"order":14,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#3 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m","#20 mcp__playwright__browser_snapshot: ### Error\nError: Ref f1e351 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t9-01-webclient-state-before-FX_UMs-query.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t9-01-webclient-state-before-FX_UMs-query.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t9-01-webclient-state-before-FX_UMs-query.png | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_type | element=IDO Name criteria textbox (Filter in Place mode) - exact FX_UMs | ok |
| 11 | mcp__playwright__browser_press_key | key=Tab | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t9-02-idos-FX_UMs-criterion-committed-before-F4.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t9-02-idos-FX_UMs-criterion-committed-before-F4.png | ok |
| 14 | mcp__playwright__browser_press_key | key=F4 | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t9-03-idos-FX_UMs-after-single-F4-settled.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t9-03-idos-FX_UMs-after-single-F4-settled.png | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Properties sub-tab in IDO detail tablist | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref f1e351 not found in the current page snapshot. Try capturing new snapshot. |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t9-04-idos-properties-subtab-FX_UM-FX_Description.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t9-04-idos-properties-subtab-FX_UM-FX_Description.png | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=FX_UM Property Name cell in IDO Properties grid (row 1) - select for detail only | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t9-05-idos-FX_UM-property-row-selected-detail.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t9-05-idos-FX_UM-property-row-selected-detail.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t9-06-idos-properties-full-grid-FX_UM-blank-inherited-cells.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Tables sub-tab in IDO detail tablist | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t9-07-idos-tables-subtab-base-table-FX_UMs-fxum.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t9-07-idos-tables-subtab-base-table-FX_UMs-fxum.png | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_tabs | action=list | ok |
| 38 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t9-ido-inspection-observations.md | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 43 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-044\cleanup-inventory.md | ok |