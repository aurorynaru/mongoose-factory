# controller-generated audit (not worker prose)

38 actions, 47 reads; prohibited-tool hits=8; errors=3; turns=114; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01"]

Key sequence: [{"order":29,"key":"Control+a","result":"ok"},{"order":30,"key":"Backspace","result":"ok"},{"order":35,"key":"Control+a","result":"ok"},{"order":39,"key":"Control+a","result":"ok"},{"order":46,"key":"Control+a","result":"ok"},{"order":54,"key":"Control+a","result":"ok"},{"order":92,"key":"Control+a","result":"ok"},{"order":102,"key":"Escape","result":"ok"},{"order":105,"key":"Escape","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":8}

Errors: ["#2 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory.","#3 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory.","#47 mcp__playwright__browser_type: PreToolUse:mcp__playwright__browser_type hook error: Exact value required: FX_HelloWorld01. Preserve its spelling and case."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-ido-creation.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\forms\create-basic-form.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt1.md | ok |
| 8 | mcp__playwright__browser_tabs | action=list | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-01-preflight-web-client-idos-clean.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-01-preflight-web-client-idos-clean.png | ok |
| 12 | mcp__playwright__browser_click | element=Open toolbar button (Select Form) | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-02-select-form-initial-filter-by-caption-unnarrowed.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-02-select-form-initial-filter-by-caption-unnarrowed.png | ok |
| 17 | mcp__playwright__browser_click | element=Filter By dropdown arrow (Select Form) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Filter By option "Name" | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-03-select-form-filter-by-name-set.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-03-select-form-filter-by-name-set.png | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-04-select-form-positive-control-sqltables-name-filter.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-04-select-form-positive-control-sqltables-name-filter.png | ok |
| 26 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 29 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 30 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 31 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-05-select-form-positive-control-sqltables-slowly.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-05-select-form-positive-control-sqltables-slowly.png | ok |
| 34 | mcp__playwright__browser_snapshot | filename=evidence/EXP-041/t1-06-positive-control-sqltables-snapshot.md | ok |
| 35 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 36 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-07-positive-control-lowercase-sqltables-case-insensitive.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-07-positive-control-lowercase-sqltables-case-insensitive.png | ok |
| 39 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 40 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-08-target-FX_HelloWorld01-exact-name-filter-result.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-08-target-FX_HelloWorld01-exact-name-filter-result.png | ok |
| 43 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_snapshot | filename=evidence/EXP-041/t1-09-target-FX_HelloWorld01-exact-snapshot.md | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-09-target-FX_HelloWorld01-exact-snapshot.md | ok |
| 46 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 47 | mcp__playwright__browser_type | element=Select Form Filter textbox | error: PreToolUse:mcp__playwright__browser_type hook error: Exact value required: FX_HelloWorld01. Preserve its spelling and case. |
| 48 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-10-helloworld-contains-case-insensitive-near-collision-check.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-10-helloworld-contains-case-insensitive-near-collision-check.png | ok |
| 51 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_snapshot | filename=evidence/EXP-041/t1-11-helloworld-contains-snapshot.md | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-11-helloworld-contains-snapshot.md | ok |
| 54 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 55 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 56 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_snapshot | filename=evidence/EXP-041/t1-12-user-scope-positive-control-FX_TestBlank01-snapshot.md | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-12-user-scope-positive-control-FX_TestBlank01-snapshot.md | ok |
| 59 | mcp__playwright__browser_click | element=Select Form Cancel button | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-13-after-select-form-cancel-clean-state.png | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-13-after-select-form-cancel-clean-state.png | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_hover | element=Designer split toolbar button (second Designer control) | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-14-designer-toolbar-tooltip-hover.png | ok |
| 66 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-14-designer-toolbar-tooltip-hover.png | ok |
| 67 | mcp__playwright__browser_click | element=Open designer in a new window (second Designer toolbar control) | ok |
| 68 | mcp__playwright__browser_tabs | action=select | ok |
| 69 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-15-designer-identify-editing-scope-dialog.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-15-designer-identify-editing-scope-dialog.png | ok |
| 72 | mcp__playwright__browser_click | element=Identify Your Editing Scope OK button | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-16-designer-after-scope-ok-state-shows-idocollections-context.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-16-designer-after-scope-ok-state-shows-idocollections-context.png | ok |
| 75 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=Designer top-bar Help menu | ok |
| 77 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_click | element=Help menu item About | ok |
| 79 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-17-designer-help-about-site-developer-check.png | ok |
| 80 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-17-designer-help-about-site-developer-check.png | ok |
| 81 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 82 | mcp__playwright__browser_click | element=About dialog OK button | ok |
| 83 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 84 | mcp__playwright__browser_click | element=closable IDOs Form-tab close control (IdoCollections system Form, clean) | ok |
| 85 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-18-designer-after-idocollections-close-clean-no-form.png | ok |
| 86 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-18-designer-after-idocollections-close-clean-no-form.png | ok |
| 87 | mcp__playwright__browser_tabs | action=select | ok |
| 88 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 89 | mcp__playwright__browser_click | element=Open toolbar button (Select Form) | ok |
| 90 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 91 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 92 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 93 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 94 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_snapshot | filename=evidence/EXP-041/t1-19-infix-positive-control-TestBlank-snapshot.md | ok |
| 96 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-19-infix-positive-control-TestBlank-snapshot.md | ok |
| 97 | mcp__playwright__browser_click | element=Select Form Cancel button | ok |
| 98 | mcp__playwright__browser_tabs | action=select | ok |
| 99 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 100 | mcp__playwright__browser_click | element=Designer top-bar Form menu | ok |
| 101 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 102 | mcp__playwright__browser_press_key | key=Escape | ok |
| 103 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-20-designer-final-clean-no-form-open-after-menu-dismiss.png | ok |
| 104 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-20-designer-final-clean-no-form-open-after-menu-dismiss.png | ok |
| 105 | mcp__playwright__browser_press_key | key=Escape | ok |
| 106 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 107 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-21-designer-final-clean-state-menu-closed.png | ok |
| 108 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-21-designer-final-clean-state-menu-closed.png | ok |
| 109 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 110 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-22-designer-final-clean-state-after-menu-dismiss-click.png | ok |
| 111 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-22-designer-final-clean-state-after-menu-dismiss-click.png | ok |
| 112 | mcp__playwright__browser_tabs | action=select | ok |
| 113 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-041/t1-23-web-client-final-clean-idos-after-selectform-cancel.png | ok |
| 114 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-041\t1-23-web-client-final-clean-idos-after-selectform-cancel.png | ok |
| 115 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 116 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 117 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 118 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 119 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 120 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 121 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 122 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 123 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 124 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md | ok |
| 125 | Glob | (no key/element/filename argument) | ok |