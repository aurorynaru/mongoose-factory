# controller-generated audit (not worker prose)

8 actions, 14 reads; prohibited-tool hits=0; errors=1; turns=37; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","Hello World","StdFormRefreshCompleted"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#27 Grep: Search failed — ripgrep rejected the pattern, glob, or file type without searching:\nrg: regex parse error:\n    (?:option \"(?!Std)|option \"FX_|option \"[^S])\n               ^^^\nerror: look-around, including look-ahead and look-behind, is not supported\n\nConsider enabling PCRE2 with the --pcre2 flag, which can handle backreferences\nand look-around."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t2-snapshot-00-fresh-designer-start.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Properties tab "Form" | ok |
| 7 | mcp__playwright__browser_click | element=Details tab "Event Handlers" | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t2-01-form-context-event-handlers-empty-before-new.png | ok |
| 9 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t2-snapshot-01-form-event-handlers-before-new.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-01-form-context-event-handlers-empty-before-new.png | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-snapshot-01-form-event-handlers-before-new.md | ok |
| 13 | mcp__playwright__browser_hover | element=Event Handlers toolbar leftmost blue + button | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t2-02-plus-control-hover-identity.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-02-plus-control-hover-identity.png | ok |
| 16 | mcp__playwright__browser_click | element=Event Handlers toolbar "New" (+) button | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t2-03-after-single-new-click-dialog-state.png | ok |
| 18 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t2-snapshot-02-after-single-new-click-dialog.md | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-03-after-single-new-click-dialog-state.png | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-snapshot-02-after-single-new-click-dialog.md | ok |
| 22 | mcp__playwright__browser_click | element=Event Handler dialog Name combobox dropdown arrow | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t2-04-event-handler-name-dropdown-options-open.png | ok |
| 24 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t2-snapshot-03-name-dropdown-options-open.md | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-04-event-handler-name-dropdown-options-open.png | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | Grep | (no key/element/filename argument) | error: Search failed — ripgrep rejected the pattern, glob, or file type without searching: rg: regex parse error:     (?:option "(?!Std)\|option "FX_\|option "[^S])                ^^^ error: look-around, including look-ahead and look-behind, is not supported  Consider enabling PCRE2 with the --pcre2 flag, which can handle backreferences and look-around. |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-snapshot-03-name-dropdown-options-open.md | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-snapshot-03-name-dropdown-options-open.md | ok |
| 31 | mcp__playwright__browser_click | element=Event Handler dialog Name combobox dropdown arrow (collapse, no selection) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t2-05-after-dropdown-collapsed-no-selection.png | ok |
| 33 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t2-snapshot-04-after-dropdown-collapsed-dialog.md | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-05-after-dropdown-collapsed-no-selection.png | ok |
| 35 | Grep | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Event Handler dialog Cancel button | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t2-06-after-single-cancel-designer-state.png | ok |
| 38 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t2-snapshot-05-after-single-cancel-designer-state.md | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-06-after-single-cancel-designer-state.png | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t2-snapshot-05-after-single-cancel-designer-state.md | ok |
| 43 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-055\T2-new-handler-dialog-inspection-report.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md | ok |