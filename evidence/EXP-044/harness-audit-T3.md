# controller-generated audit (not worker prose)

11 actions, 19 reads; prohibited-tool hits=3; errors=2; turns=35; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UMs","FX_UM","FX_UMBase","FX_Description","FX_sDescription","fxum","FX_HelloWorldProject01"]

Key sequence: [{"order":13,"key":"Tab","result":"ok"},{"order":17,"key":"F4","result":"ok"},{"order":25,"key":"Tab","result":"ok"},{"order":26,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: ["#4 mcp__playwright__browser_click: ### Error\nError: Ref f1e36 not found in the current page snapshot. Try capturing new snapshot.","#32 mcp__playwright__browser_type: PreToolUse:mcp__playwright__browser_type hook error: Exact value required: FX_UMs. Preserve its spelling and case."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Filter in Place toolbar button (wrapper, label Filter in Place) | error: ### Error Error: Ref f1e36 not found in the current page snapshot. Try capturing new snapshot. |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Filter in Place toolbar button (label Filter in Place, ref from current find) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t2b-01-idos-after-explicit-FiP-entry.png | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t2b-01-idos-after-explicit-FiP-entry.png | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_type | element=IDO Name criteria textbox (FiP mode, editable) - exact FX_UMs | ok |
| 13 | mcp__playwright__browser_press_key | key=Tab | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t2b-02-idos-FX_UMs-criterion-committed-before-F4.png | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t2b-02-idos-FX_UMs-criterion-committed-before-F4.png | ok |
| 17 | mcp__playwright__browser_press_key | key=F4 | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t2b-03-idos-FX_UMs-after-single-F4-settled.png | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t2b-03-idos-FX_UMs-after-single-F4-settled.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Filter in Place toolbar button (current ref f1e36) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_type | element=IDO Name criteria textbox (FiP mode) - same-session positive control FX_HelloWorld01 | ok |
| 25 | mcp__playwright__browser_press_key | key=Tab | ok |
| 26 | mcp__playwright__browser_press_key | key=F4 | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t2b-04-idos-same-session-positive-control-FX_HelloWorld01-after-F4.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t2b-04-idos-same-session-positive-control-FX_HelloWorld01-after-F4.png | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Filter in Place toolbar button (current ref f1e36) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_type | element=IDO Name criteria textbox (FiP mode) - case-insensitive variant fx_ums | error: PreToolUse:mcp__playwright__browser_type hook error: Exact value required: FX_UMs. Preserve its spelling and case. |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t2b-05-final-state-idos-fip-criteria-FX_HelloWorld01-no-dialog.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t2b-05-final-state-idos-fip-criteria-FX_HelloWorld01-no-dialog.png | ok |
| 36 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t2b-idos-collision-retry-observations.md | ok |
| 37 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-044\cleanup-inventory.md | ok |