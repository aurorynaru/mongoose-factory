# controller-generated audit (not worker prose)

13 actions, 29 reads; prohibited-tool hits=2; errors=1; turns=57; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#4 Grep: Path does not exist: C:\\AI\\mongoose-factory\\experiments\\EXP-132-web-user-control-bridge-via-variable-readback-in-the-operator-s-own-account.md. Note: your current working directory is C:\\AI\\mongoose-factory."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | Grep | (no key/element/filename argument) | error: Path does not exist: C:\AI\mongoose-factory\experiments\EXP-132-web-user-control-bridge-via-variable-readback-in-the-operator-s-own-account.md. Note: your current working directory is C:\AI\mongoose-factory. |
| 5 | Glob | (no key/element/filename argument) | ok |
| 6 | Glob | (no key/element/filename argument) | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t1-10-global-objects-variables-dialog.md | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-00-designer-before-global-variable-fx-loginportal.png | ok |
| 13 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Variable menu item under Edit | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-01-global-objects-dialog-opened-from-edit-variable-readonly-state.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-01-global-objects-dialog-opened-from-edit-variable-readonly-state.png | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_type | element=Global Objects Variables search textbox | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-02-global-objects-search-loginresult-precreate-absence.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-02-global-objects-search-loginresult-precreate-absence.png | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Global Objects blue plus (New variable) button, leftmost bottom toolbar | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-03-new-global-object-dialog-precommit-name-only.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-03-new-global-object-dialog-precommit-name-only.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_type | element=New dialog Name textbox | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-04-new-dialog-name-fx-vloginresult-before-ok.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-04-new-dialog-name-fx-vloginresult-before-ok.png | ok |
| 33 | mcp__playwright__browser_click | element=New dialog OK button | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-05-after-new-ok-fx-vloginresult-in-global-dialog.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-05-after-new-ok-fx-vloginresult-in-global-dialog.png | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Global Objects parent dialog OK button (dialog-level commit, not Form Save) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-06-designer-after-parent-global-objects-ok-before-readonly-reopen.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-06-designer-after-parent-global-objects-ok-before-readonly-reopen.png | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Edit menu button in Designer menubar | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Variable menu item under Edit | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-07-global-objects-readonly-reopen-fx-vloginresult-list.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-07-global-objects-readonly-reopen-fx-vloginresult-list.png | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=FX_vLoginResult row in Global Objects variables list | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-08-global-objects-readonly-fx-vloginresult-properties.png | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-08-global-objects-readonly-fx-vloginresult-properties.png | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Global Objects Cancel button (read-only reopen close, no commit) | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_click | element=Global - Persistent group row in Designer Details Variables tree | ok |
| 57 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-133/t5-09-designer-details-variables-global-persistent-after-cancel.png | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-133\t5-09-designer-details-variables-global-persistent-after-cancel.png | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | Grep | (no key/element/filename argument) | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |
| 62 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-133\T5-global-variable-summary.md | ok |
| 63 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |