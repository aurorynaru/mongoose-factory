# controller-generated audit (not worker prose)

3 actions, 7 reads; prohibited-tool hits=0; errors=0; turns=13; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX001","FX002","1 Factory Street","2 Factory Street"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-077\T4-00-pre-save-dirty-state-check-before-single-save.png | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-077\T4-00-pre-save-dirty-state-check-before-single-save.png | ok |
| 6 | mcp__playwright__browser_click | element=Save toolbar button (FX_HelloWorld01 runtime) - single click | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-077\T4-01-post-single-save-fx001-state.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-077\T4-01-post-single-save-fx001-state.png | ok |
| 10 | mcp__playwright__browser_click | element=Row header '2' (FX002 row) in FX_HelloWorld01 runtime grid | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-077\T4-02-post-save-fx002-current-address-2-factory-street.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-077\T4-02-post-save-fx002-current-address-2-factory-street.png | ok |
| 14 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |
| 15 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-077-hello-world-part-5-prereq-d-fx-address-values.md | ok |