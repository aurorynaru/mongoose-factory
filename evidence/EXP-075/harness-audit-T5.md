# controller-generated audit (not worker prose)

6 actions, 9 reads; prohibited-tool hits=0; errors=0; turns=20; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_Address","FX_sAddress","fxhw.FX_Address","FX_Code","FX_Label"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=FX_HelloWorld01 runtime Form-tab heading (view only; select the existing instance) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t5-01-runtime-pre-refresh-identity-save-disabled.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t5-01-runtime-pre-refresh-identity-save-disabled.png | ok |
| 9 | mcp__playwright__browser_click | element=Refresh toolbar button (runtime FX_HelloWorld01 Form) - the one permitted Refresh | ok |
| 10 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t5-02-runtime-post-refresh-two-records-save-disabled.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t5-02-runtime-post-refresh-two-records-save-disabled.png | ok |
| 14 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t5-03-runtime-two-records-grid-scrolled-readonly.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t5-03-runtime-two-records-grid-scrolled-readonly.png | ok |
| 18 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-075\T5-report.md | ok |
| 22 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | ok |
| 23 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | ok |