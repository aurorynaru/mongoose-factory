# controller-generated audit (not worker prose)

10 actions, 24 reads; prohibited-tool hits=2; errors=0; turns=54; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","FX_ButtonPromptEvent01","Factory Test Prompt","Factory Test Button"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-01-preflight-snapshot.md | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-02-designer-selected-snapshot.md | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-02-designer-selected-snapshot.md | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-03-pre-new-handler-viewport.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-03-pre-new-handler-viewport.png | ok |
| 9 | mcp__playwright__browser_click | element=New (plus) button in Event Handlers toolbar of Details panel | ok |
| 10 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-04-after-new-click-snapshot.md | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-05-after-new-click-viewport.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-05-after-new-click-viewport.png | ok |
| 13 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-06-event-handler-dialog-snapshot.md | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_type | element=Name combobox in Event Handler dialog | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-07-name-entered-viewport.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-07-name-entered-viewport.png | ok |
| 18 | mcp__playwright__browser_click | element=OK button in Event Handler dialog | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-08-after-ok-snapshot.md | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-08-after-ok-snapshot.md | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-09-handler-created-response-empty-viewport.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-09-handler-created-response-empty-viewport.png | ok |
| 24 | mcp__playwright__browser_click | element=Expand button in handler editor (right pane) toolbar | ok |
| 25 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-10-handler-expanded-snapshot.md | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-10-handler-expanded-snapshot.md | ok |
| 28 | mcp__playwright__browser_click | element=Response Type dropdown value in handler editor Response group | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-11-response-type-dropdown-viewport.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-11-response-type-dropdown-viewport.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Prompt option in Response Type list | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-12-response-type-prompt-selected-viewport.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-12-response-type-prompt-selected-viewport.png | ok |
| 35 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-13-prompt-type-snapshot.md | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=Open Edit Property Dialog ellipsis for Parameters in handler editor | ok |
| 38 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-14-parameters-dialog-snapshot.md | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-15-after-parameters-click-viewport.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-15-after-parameters-click-viewport.png | ok |
| 41 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-16-prompt-params-dialog-snapshot.md | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_type | element=Message Text textbox in Event Handler Parameters dialog | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-17-message-entered-viewport.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-17-message-entered-viewport.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=OK button in Event Handler Parameters dialog | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t5-18-after-params-ok-viewport.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-18-after-params-ok-viewport.png | ok |
| 51 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t5-19-pre-save-handler-state-snapshot.md | ok |
| 52 | Grep | (no key/element/filename argument) | ok |
| 53 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t5-handler-configuration-notes.md | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |
| 55 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |