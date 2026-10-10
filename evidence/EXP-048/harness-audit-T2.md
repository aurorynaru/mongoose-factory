# controller-generated audit (not worker prose)

14 actions, 15 reads; prohibited-tool hits=4; errors=0; turns=36; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_ItemBase","FX_Cost","FX_sItem","FX_sCost","FX_UMBase","FX_UM"]

Key sequence: [{"order":7,"key":"Tab","result":"ok"},{"order":14,"key":"Tab","result":"ok"},{"order":19,"key":"F2","result":"ok"},{"order":24,"key":"Tab","result":"ok"},{"order":27,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_click | element=New toolbar button | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T2-00-after-single-new-click-placeholder.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T2-00-after-single-new-click-placeholder.png | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_type | element=Class Name textbox | ok |
| 7 | mcp__playwright__browser_press_key | key=Tab | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Data Type Open button | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=String option in Data Type list | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_type | element=Length textbox | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Column Data Type Open button | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_type | element=Column Data Type combobox | ok |
| 19 | mcp__playwright__browser_press_key | key=F2 | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T2-01-column-data-type-nvar-f2-lookup.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T2-01-column-data-type-nvar-f2-lookup.png | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=nvarchar option in Column Data Type list | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_type | element=Label String ID textbox | ok |
| 27 | mcp__playwright__browser_press_key | key=Tab | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T2-02-FX_ItemBase-staged-pre-verification.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T2-02-FX_ItemBase-staged-pre-verification.png | ok |
| 30 | mcp__playwright__browser_snapshot | filename=evidence/EXP-048/T2-03-FX_ItemBase-pre-save-accessibility.yml | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T2-03-FX_ItemBase-pre-save-accessibility.yml | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t2-evidence-summary.md | ok |
| 35 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |