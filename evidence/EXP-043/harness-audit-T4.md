# controller-generated audit (not worker prose)

12 actions, 14 reads; prohibited-tool hits=3; errors=1; turns=34; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UMBase","FX_sUM"]

Key sequence: [{"order":12,"key":"Control+a","result":"ok"},{"order":13,"key":"Backspace","result":"ok"},{"order":24,"key":"Tab","result":"ok"},{"order":25,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: ["#22 mcp__playwright__browser_type: ### Error\nError: \"f1269\" does not match any elements."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-043\t4-01-pre-close-saved-FX_UMBase-baseline.png | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-043\t4-01-pre-close-saved-FX_UMBase-baseline.png | ok |
| 4 | mcp__playwright__browser_click | element=Close Panel Property Classes form-tab close control | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-043\t4-02-post-close-property-classes-tab-removed-no-prompt.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-043\t4-02-post-close-property-classes-tab-removed-no-prompt.png | ok |
| 8 | mcp__playwright__browser_click | element=Open toolbar button | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 12 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 13 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 14 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Select Form row Caption cell Property Classes | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Select Form OK button (verified label OK) | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-043\t4-03-reopened-property-classes-fip-mode-blank-criteria.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-043\t4-03-reopened-property-classes-fip-mode-blank-criteria.png | ok |
| 22 | mcp__playwright__browser_type | element=Class Name criteria textbox (reopened Property Classes, FiP mode) | error: ### Error Error: "f1269" does not match any elements. |
| 23 | mcp__playwright__browser_type | element=Class Name criteria textbox (reopened Property Classes, FiP mode) | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_press_key | key=F4 | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-043\t4-04-reopened-fip-exact-FX_UMBase-query-result.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-043\t4-04-reopened-fip-exact-FX_UMBase-query-result.png | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_tabs | action=list | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-043\cleanup-inventory.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-043\cleanup-inventory.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md | ok |
| 34 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md | ok |