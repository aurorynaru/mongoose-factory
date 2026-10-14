# controller-generated audit (not worker prose)

3 actions, 10 reads; prohibited-tool hits=0; errors=1; turns=29; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_ItmsPictureStatic","FX_ItmsPictureEdit","object.FX_ItmsPicture","Static","Image Only"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#28 Edit: <tool_use_error>Found 2 matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance.\nString: Classification remains **observed only, NOT replay_verified**.</tool_use_error>"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-084/snapshot-t4-01-designer-pre-save-fresh.yml | ok |
| 3 | Grep | (no key/element/filename argument) | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_snapshot | filename=evidence/EXP-084/snapshot-t4-02-props-readonly-pre-save.yml | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\snapshot-t4-02-props-readonly-pre-save.yml | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\snapshot-t4-02-props-readonly-pre-save.yml | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t4-01-pre-save-configured-state-save-enabled.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t4-01-pre-save-configured-state-save-enabled.png | ok |
| 15 | mcp__playwright__browser_click | element=Designer toolbar Save button (single invocation) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t4-02-post-save-native-toast-form-saved-clean.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t4-02-post-save-native-toast-form-saved-clean.png | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-084/snapshot-t4-03-post-save-visible-state.yml | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-084/t4-03-post-save-properties-type-static-header-edit-label.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-084\t4-03-post-save-properties-type-static-header-edit-label.png | ok |
| 27 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md | ok |
| 28 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md | error: <tool_use_error>Found 2 matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance. String: Classification remains **observed only, NOT replay_verified**.</tool_use_error> |
| 29 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md | ok |