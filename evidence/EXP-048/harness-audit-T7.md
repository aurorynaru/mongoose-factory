# controller-generated audit (not worker prose)

4 actions, 13 reads; prohibited-tool hits=1; errors=0; turns=21; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_ItemBase","FX_Cost","FX_sItem","FX_sCost","FX_UMBase","FX_UM"]

Key sequence: [{"order":9,"key":"Tab","result":"ok"},{"order":12,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T7-00-pre-state-FX_ItemBase-displayed-before-FiP.png | ok |
| 4 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T7-01-FiP-reentered-retained-FX_ItemBase-criterion.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T7-01-FiP-reentered-retained-FX_ItemBase-criterion.png | ok |
| 8 | mcp__playwright__browser_type | element=Class Name criteria textbox | ok |
| 9 | mcp__playwright__browser_press_key | key=Tab | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T7-02-criterion-FX_Cost-only-before-single-F4.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T7-02-criterion-FX_Cost-only-before-single-F4.png | ok |
| 12 | mcp__playwright__browser_press_key | key=F4 | ok |
| 13 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T7-03-settled-after-single-F4-FX_Cost.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T7-03-settled-after-single-F4-FX_Cost.png | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-048/T7-04-settled-FX_Cost-recovery-accessibility.yml | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T7-04-settled-FX_Cost-recovery-accessibility.yml | ok |
| 21 | mcp__playwright__browser_tabs | action=list | ok |
| 22 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t7-evidence-summary.md | ok |
| 23 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t7-evidence-summary.md | ok |
| 24 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t7-evidence-summary.md | ok |
| 25 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |
| 26 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |