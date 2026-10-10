# controller-generated audit (not worker prose)

10 actions, 12 reads; prohibited-tool hits=2; errors=0; turns=30; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_ItemBase","FX_HelloWorldProject01","fxitms","FX_sDescription","FX_sItem","FX_sCost"]

Key sequence: [{"order":11,"key":"Tab","result":"ok"},{"order":14,"key":"F4","result":"ok"},{"order":22,"key":"Tab","result":"ok"},{"order":25,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T5-sqltables-collision-gate.md | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=IDOs runtime tab (select tab only) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T18-28-19-642Z.yml | ok |
| 7 | mcp__playwright__browser_click | element=Filter in Place toolbar button (IDOs) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T18-28-25-167Z.yml | ok |
| 10 | mcp__playwright__browser_type | element=IDO Name criteria textbox (IDOs Filter in Place, positive control) | ok |
| 11 | mcp__playwright__browser_press_key | key=Tab | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T6-01-idos-positive-control-criterion-FX_HelloWorld01-before-F4.png | ok |
| 14 | mcp__playwright__browser_press_key | key=F4 | ok |
| 15 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T18-28-50-277Z.yml | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T6-02-idos-positive-control-FX_HelloWorld01-after-F4-settled.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T18-28-50-277Z.yml | ok |
| 19 | mcp__playwright__browser_click | element=Filter in Place toolbar button (IDOs, fresh target operation) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_type | element=IDO Name criteria textbox (IDOs Filter in Place, target) | ok |
| 22 | mcp__playwright__browser_press_key | key=Tab | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T6-03-idos-target-criterion-FX_Items-before-F4.png | ok |
| 25 | mcp__playwright__browser_press_key | key=F4 | ok |
| 26 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T18-29-09-646Z.yml | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T6-04-idos-target-FX_Items-after-F4-settled.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T6-04-idos-target-FX_Items-after-F4-settled.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T6-03-idos-target-criterion-FX_Items-before-F4.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T6-02-idos-positive-control-FX_HelloWorld01-after-F4-settled.png | ok |
| 32 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T6-idos-collision-gate.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T6-idos-collision-gate.md | ok |
| 34 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T6-idos-collision-gate.md | ok |