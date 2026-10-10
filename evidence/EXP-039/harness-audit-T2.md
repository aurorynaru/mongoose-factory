# controller-generated audit (not worker prose)

4 actions, 7 reads; prohibited-tool hits=1; errors=0; turns=16; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorldProject01","Factory Hello World test project"]

Key sequence: [{"order":9,"key":"Tab","result":"ok"},{"order":12,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_fill_form":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/10-t2-baseline-start-placeholder-before-fip.png | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\10-t2-baseline-start-placeholder-before-fip.png | ok |
| 4 | mcp__playwright__browser_click | element=Filter in Place toolbar button (FiP) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/11-t2-fip-query-mode-entered.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\11-t2-fip-query-mode-entered.png | ok |
| 8 | mcp__playwright__browser_fill_form | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_press_key | key=Tab | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/12-t2-sdtest-criteria-entered-before-f4.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\12-t2-sdtest-criteria-entered-before-f4.png | ok |
| 12 | mcp__playwright__browser_press_key | key=F4 | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/13-t2-sdtest-f4-saved-record-baseline.png | ok |
| 14 | mcp__playwright__browser_snapshot | filename=evidence/EXP-039/t2-baseline-sdtest-snapshot.yml | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\13-t2-sdtest-f4-saved-record-baseline.png | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-039\t1-evidence-index.md | ok |
| 18 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 19 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |