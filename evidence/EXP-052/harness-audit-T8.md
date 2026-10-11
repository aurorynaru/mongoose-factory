# controller-generated audit (not worker prose)

4 actions, 9 reads; prohibited-tool hits=0; errors=0; turns=21; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","d*",">5","DZ"]

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
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-052/t8-01-designer-pre-close-clean-initial-command-refresh.png | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-052\t8-01-designer-pre-close-clean-initial-command-refresh.png | ok |
| 6 | mcp__playwright__browser_click | element=closable FX_Items Designer Form tab close control (the one permitted Designer close in T8) | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-052/t8-02-designer-closed-fx-items-tab-absent-no-prompt.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-052\t8-02-designer-closed-fx-items-tab-absent-no-prompt.png | ok |
| 10 | mcp__playwright__browser_click | element=Form menu in Designer navigation (to reach recent-forms entry) | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-052/t8-03-designer-form-menu-open-before-reopen-readonly.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-052\t8-03-designer-form-menu-open-before-reopen-readonly.png | ok |
| 14 | mcp__playwright__browser_click | element=FX_Items recent-forms entry in Designer Form menu (verified visually; one reopen) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-052/t8-04-designer-recovered-FX_Items-initial-command-refresh-save-disabled.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-052\t8-04-designer-recovered-FX_Items-initial-command-refresh-save-disabled.png | ok |
| 18 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-052\T8-designer-close-and-reopen-initial-command-persistence-report.md | ok |
| 19 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-052\T8-designer-close-and-reopen-initial-command-persistence-report.md | ok |
| 20 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-052\T8-designer-close-and-reopen-initial-command-persistence-report.md | ok |
| 21 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-052\T8-designer-close-and-reopen-initial-command-persistence-report.md | ok |
| 22 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 23 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 24 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |
| 25 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md | ok |