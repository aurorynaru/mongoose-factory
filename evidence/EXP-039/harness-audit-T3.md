# controller-generated audit (not worker prose)

5 actions, 8 reads; prohibited-tool hits=2; errors=0; turns=18; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorldProject01","Factory Hello World test project"]

Key sequence: [{"order":9,"key":"Tab","result":"ok"},{"order":12,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_fill_form":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/14-t3-baseline-sdtest-before-new.png | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\14-t3-baseline-sdtest-before-new.png | ok |
| 4 | mcp__playwright__browser_click | element=toolbar New button (ordinary IDO Projects New, not New IDO...) | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/15-t3-after-single-new-blank-record.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\15-t3-after-single-new-blank-record.png | ok |
| 8 | mcp__playwright__browser_fill_form | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_press_key | key=Tab | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_fill_form | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_press_key | key=Tab | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-039/16-t3-exact-name-and-description-entered-unsaved.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-039\16-t3-exact-name-and-description-entered-unsaved.png | ok |
| 16 | mcp__playwright__browser_snapshot | filename=evidence/EXP-039/t3-unsaved-new-record-snapshot.yml | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-039\t1-evidence-index.md | ok |
| 19 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |
| 20 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-039-single-fx-ido-project-creation-and-recovery.md | ok |