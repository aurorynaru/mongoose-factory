# controller-generated audit (not worker prose)

6 actions, 10 reads; prohibited-tool hits=1; errors=0; turns=24; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Picture"]

Key sequence: [{"order":8,"key":"Tab","result":"ok"},{"order":11,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-060/t5-00-pre-query-accessibility.yml | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-060/t5-01-pre-query-blank-criteria.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-060\t5-01-pre-query-blank-criteria.png | ok |
| 7 | mcp__playwright__browser_type | element=Class Name criteria textbox | ok |
| 8 | mcp__playwright__browser_press_key | key=Tab | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-060/t5-02-recovery-criterion-FX_Picture-before-f4.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-060\t5-02-recovery-criterion-FX_Picture-before-f4.png | ok |
| 11 | mcp__playwright__browser_press_key | key=F4 | ok |
| 12 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-060/t5-03-recovery-settled-after-f4.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-060\t5-03-recovery-settled-after-f4.png | ok |
| 15 | mcp__playwright__browser_snapshot | filename=evidence/EXP-060/t5-04-recovered-accessibility.yml | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-060/t5-05-recovered-fields-scrolled-visual.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-060\t5-05-recovered-fields-scrolled-visual.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-060\T5-report.md | ok |
| 24 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md | ok |
| 25 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md | ok |
| 26 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md | ok |