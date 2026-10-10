# controller-generated audit (not worker prose)

8 actions, 20 reads; prohibited-tool hits=0; errors=0; turns=47; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","FX_ButtonPromptEvent01","Factory Test Prompt","Factory Test Button"]

Key sequence: [{"order":34,"key":"Enter","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-01-preflight-snapshot.md | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-02-designer-selected-snapshot.md | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t6-03-preflight-viewport.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-03-preflight-viewport.png | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Components tab in Details panel | ok |
| 10 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-04-components-tab-snapshot.md | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=FX_SingleButton01 treeitem in Components grid | ok |
| 13 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-05-button-selected-snapshot.md | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t6-06-button-selected-viewport.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-06-button-selected-viewport.png | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Component tab at bottom of Properties panel | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-07-component-properties-snapshot.md | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-07-component-properties-snapshot.md | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t6-08-primary-before-edit-viewport.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-08-primary-before-edit-viewport.png | ok |
| 24 | mcp__playwright__browser_click | element=Primary value picker arrow in Events group of Button properties | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t6-09-primary-picker-open-viewport.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-09-primary-picker-open-viewport.png | ok |
| 27 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-10-primary-picker-open-snapshot.md | ok |
| 28 | Grep | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=FX_ButtonPromptEvent01 option in Primary event picker list | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t6-11-primary-after-select-viewport.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-11-primary-after-select-viewport.png | ok |
| 32 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-12-primary-after-select-snapshot.md | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_press_key | key=Enter | ok |
| 35 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-13-primary-after-enter-snapshot.md | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t6-14-primary-committed-viewport.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-14-primary-committed-viewport.png | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Event Handlers tab in Details panel | ok |
| 41 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t6-15-event-handlers-recheck-snapshot.md | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-15-event-handlers-recheck-snapshot.md | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t6-16-event-handlers-recheck-viewport.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-16-event-handlers-recheck-viewport.png | ok |
| 46 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t6-primary-assignment-notes.md | ok |
| 47 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |