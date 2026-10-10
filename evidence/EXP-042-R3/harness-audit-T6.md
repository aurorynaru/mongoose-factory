# controller-generated audit (not worker prose)

4 actions, 4 reads; prohibited-tool hits=2; errors=0; turns=10; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX001","FX002","Factory test one","Factory test two"]

Key sequence: [{"order":3,"key":"Tab","result":"ok"},{"order":6,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_type | element=Lower blank runtime input, red required marker, mapped to FX_Code (operator-accepted), record 2 | ok |
| 3 | mcp__playwright__browser_press_key | key=Tab | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_type | element=Upper blank runtime input, no required marker, mapped to FX_Label (operator-accepted), record 2 | ok |
| 6 | mcp__playwright__browser_press_key | key=Tab | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R3/t6-01-both-records-staged-unsaved-no-save-clicked.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\t6-01-both-records-staged-unsaved-no-save-clicked.png | ok |
| 10 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-R3-hello-world-part-1-two-test-records-replay.md | ok |
| 11 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-R3-hello-world-part-1-two-test-records-replay.md | ok |
| 12 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\cleanup-inventory.md | ok |
| 13 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\cleanup-inventory.md | ok |
| 14 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\cleanup-inventory.md | ok |