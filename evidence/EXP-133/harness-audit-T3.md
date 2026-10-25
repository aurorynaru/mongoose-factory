# controller-generated audit (not worker prose)

5 actions, 12 reads; prohibited-tool hits=0; errors=0; turns=26; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

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
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t3-00-designer-before-script-language-change-fx-loginportal.png | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t3-00-designer-before-script-language-change-fx-loginportal.png | ok |
| 6 | mcp__playwright__browser_click | element=Script Language dropdown arrow in Form Properties | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t3-01-script-language-dropdown-options-open.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t3-01-script-language-dropdown-options-open.png | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Visual C# option cell in Script Language dropdown | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t3-02-after-visual-csharp-selection-designer-readback.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t3-02-after-visual-csharp-selection-designer-readback.png | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Event Handlers tab in Details panel | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t3-03-event-handlers-tab-after-language-change.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t3-03-event-handlers-tab-after-language-change.png | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Variables tab in Details panel | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t3-04-variables-tab-after-language-change.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t3-04-variables-tab-after-language-change.png | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |
| 25 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-133\T3-script-language-summary.md | ok |
| 26 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |