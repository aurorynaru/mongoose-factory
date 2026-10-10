# controller-generated audit (not worker prose)

10 actions, 12 reads; prohibited-tool hits=2; errors=0; turns=31; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_ItemBase","FX_HelloWorldProject01","fxitms","FX_sDescription","FX_sItem","FX_sCost"]

Key sequence: [{"order":8,"key":"Control+a","result":"ok"},{"order":10,"key":"Tab","result":"ok"},{"order":13,"key":"F4","result":"ok"},{"order":20,"key":"Tab","result":"ok"},{"order":23,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T4-sqltables-state-checkpoint.md | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Filter in Place toolbar button (Sql Tables) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T18-25-18-650Z.yml | ok |
| 8 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 9 | mcp__playwright__browser_type | element=Table Name criteria combobox (Filter in Place, Sql Tables) | ok |
| 10 | mcp__playwright__browser_press_key | key=Tab | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T5-01-sqltables-positive-control-criterion-FX_HelloWorld01-before-F4.png | ok |
| 13 | mcp__playwright__browser_press_key | key=F4 | ok |
| 14 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T18-25-42-126Z.yml | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T5-02-sqltables-positive-control-FX_HelloWorld01-after-F4-settled.png | ok |
| 17 | mcp__playwright__browser_click | element=Filter in Place toolbar button (Sql Tables, fresh operation) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_type | element=Table Name criteria combobox (Filter in Place, Sql Tables, target) | ok |
| 20 | mcp__playwright__browser_press_key | key=Tab | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T5-03-sqltables-target-criterion-FX_Items-before-F4.png | ok |
| 23 | mcp__playwright__browser_press_key | key=F4 | ok |
| 24 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T18-26-03-123Z.yml | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T5-04-sqltables-target-FX_Items-after-F4-settled.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T5-04-sqltables-target-FX_Items-after-F4-settled.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T5-02-sqltables-positive-control-FX_HelloWorld01-after-F4-settled.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T5-01-sqltables-positive-control-criterion-FX_HelloWorld01-before-F4.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T5-03-sqltables-target-criterion-FX_Items-before-F4.png | ok |
| 31 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T5-sqltables-collision-gate.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T5-sqltables-collision-gate.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T5-sqltables-collision-gate.md | ok |