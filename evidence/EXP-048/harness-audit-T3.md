# controller-generated audit (not worker prose)

18 actions, 20 reads; prohibited-tool hits=6; errors=0; turns=45; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_ItemBase","FX_Cost","FX_sItem","FX_sCost","FX_UMBase","FX_UM"]

Key sequence: [{"order":11,"key":"Tab","result":"ok"},{"order":18,"key":"Tab","result":"ok"},{"order":21,"key":"Tab","result":"ok"},{"order":24,"key":"Tab","result":"ok"},{"order":28,"key":"F2","result":"ok"},{"order":33,"key":"Tab","result":"ok"},{"order":36,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":6}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T3-00-preflight-FX_ItemBase-pending-before-second-New.png | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T3-00-preflight-FX_ItemBase-pending-before-second-New.png | ok |
| 4 | mcp__playwright__browser_click | element=New toolbar button | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T3-01-after-second-New-both-rows-visible.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T3-01-after-second-New-both-rows-visible.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_type | element=Class Name textbox (row 3, new) | ok |
| 11 | mcp__playwright__browser_press_key | key=Tab | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Data Type Open button (row 3) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Decimal option in Data Type list | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_type | element=Length textbox (row 3) | ok |
| 18 | mcp__playwright__browser_press_key | key=Tab | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_type | element=Decimal Position textbox (row 3) | ok |
| 21 | mcp__playwright__browser_press_key | key=Tab | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_type | element=Default Value textbox (row 3) | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Column Data Type Open button (row 3) | ok |
| 27 | mcp__playwright__browser_type | element=Column Data Type combobox (row 3) | ok |
| 28 | mcp__playwright__browser_press_key | key=F2 | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T3-02-FX_Cost-column-data-type-decim-f2-lookup.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T3-02-FX_Cost-column-data-type-decim-f2-lookup.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=decimal option in Column Data Type list | ok |
| 33 | mcp__playwright__browser_press_key | key=Tab | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_type | element=Label String ID textbox (row 3) | ok |
| 36 | mcp__playwright__browser_press_key | key=Tab | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T3-03-both-rows-pending-FX_Cost-staged-pre-save.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T3-03-both-rows-pending-FX_Cost-staged-pre-save.png | ok |
| 39 | mcp__playwright__browser_snapshot | filename=evidence/EXP-048/T3-04-pre-save-accessibility-both-rows.yml | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T3-04-pre-save-accessibility-both-rows.yml | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_tabs | action=list | ok |
| 44 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t3-evidence-summary.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t3-evidence-summary.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t3-evidence-summary.md | ok |
| 47 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |