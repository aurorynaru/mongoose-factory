# controller-generated audit (not worker prose)

9 actions, 16 reads; prohibited-tool hits=1; errors=0; turns=33; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorldProject01","Factory Hello World test project"]

Key sequence: [{"order":26,"key":"Tab","result":"ok"},{"order":29,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_fill_form":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/19-t5-pre-close-saved-record-baseline.png | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-039/t5-pre-close-snapshot.yml | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\19-t5-pre-close-saved-record-baseline.png | ok |
| 5 | mcp__playwright__browser_click | element=Close Panel IDO Projects (ordinary tab close control) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/20-t5-after-single-close-ido-projects.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\20-t5-after-single-close-ido-projects.png | ok |
| 9 | mcp__playwright__browser_click | element=toolbar Open button (opens Select Form) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Select Form row: IDO Projects / IdoProjects | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Select Form OK button (opens IdoProjects) | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Filter in Place toolbar button (FiP) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/22-t5-reopened-fip-mode-before-criteria.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\22-t5-reopened-fip-mode-before-criteria.png | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-039/t5-reopened-pre-criteria-snapshot.yml | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Filter in Place toolbar button (FiP) - corrected attempt to enter query mode | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/23-t5-reopened-fip-query-mode-corrected.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\23-t5-reopened-fip-query-mode-corrected.png | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_fill_form | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_press_key | key=Tab | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/24-t5-exact-name-criteria-entered-before-f4.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\24-t5-exact-name-criteria-entered-before-f4.png | ok |
| 29 | mcp__playwright__browser_press_key | key=F4 | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/25-t5-recovered-f4-result.png | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-039/t5-recovered-query-snapshot.yml | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\25-t5-recovered-f4-result.png | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | Grep | (no key/element/filename argument) | ok |
| 35 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-039\t1-evidence-index.md | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 37 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |