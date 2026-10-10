# controller-generated audit (not worker prose)

8 actions, 16 reads; prohibited-tool hits=0; errors=2; turns=32; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX001","FX002","Factory test one","Factory test two"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#19 mcp__playwright__browser_click: ### Error\nError: Ref f1e14 not found in the current page snapshot. Try capturing new snapshot.","#25 mcp__playwright__browser_snapshot: ### Error\nError: Ref f1e191 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R3/t3-01-baseline-unchanged-runtime-object-1-of-1-no-banner.png | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-042-R3/t3-02-baseline-runtime-accessibility-snapshot.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\t3-01-baseline-unchanged-runtime-object-1-of-1-no-banner.png | ok |
| 5 | mcp__playwright__browser_click | element=runtime input 1 (upper, no required marker), click only, no typing | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Edit menu (Mongoose menu bar) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Find Value In Collection menu item (under Edit) | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R3/t3-03-input1-find-value-dialog-property-FX_Label-with-focused-input.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\t3-03-input1-find-value-dialog-property-FX_Label-with-focused-input.png | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Find dialog Cancel button (label verified) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=runtime input 2 (lower, red required marker), click only, no typing | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Edit menu (Mongoose menu bar) | error: ### Error Error: Ref f1e14 not found in the current page snapshot. Try capturing new snapshot. |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Edit menu (Mongoose menu bar) | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Find Value In Collection menu item (under Edit) | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref f1e191 not found in the current page snapshot. Try capturing new snapshot. |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R3/t3-04-input2-after-find-menu-click-state-readonly.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\t3-04-input2-after-find-menu-click-state-readonly.png | ok |
| 28 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-R3-hello-world-part-1-two-test-records-replay.md | ok |
| 29 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-R3-hello-world-part-1-two-test-records-replay.md | ok |
| 30 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-042-R3-hello-world-part-1-two-test-records-replay.md | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\cleanup-inventory.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R3\cleanup-inventory.md | ok |