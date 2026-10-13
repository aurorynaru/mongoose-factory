# controller-generated audit (not worker prose)

5 actions, 19 reads; prohibited-tool hits=0; errors=0; turns=31; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

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
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t8-01-initial-state-dirty-before-caption-work.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t8-01-initial-state-dirty-before-caption-work.png | ok |
| 7 | mcp__playwright__browser_click | element=Components tree row FX_AddressStatic (select) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t8-02-fx_addressstatic-selected-caption-row-before-ellipsis.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t8-02-fx_addressstatic-selected-caption-row-before-ellipsis.png | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Properties Caption value cell (blank) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t8-03-caption-cell-activated-before-ellipsis.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t8-03-caption-cell-activated-before-ellipsis.png | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Caption property ellipsis button (Open Edit Property Dialog) | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t8-04-unexpected-alert-no-object-name-given-caption-ellipsis.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t8-04-unexpected-alert-no-object-name-given-caption-ellipsis.png | ok |
| 24 | mcp__playwright__browser_click | element=Alert OK button (No object name given) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t8-05-after-alert-ok-caption-state-check.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t8-05-after-alert-ok-caption-state-check.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |