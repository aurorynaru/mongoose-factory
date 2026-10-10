# controller-generated audit (not worker prose)

21 actions, 33 reads; prohibited-tool hits=2; errors=0; turns=61; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_UMs","FX_sItem","FX_sCost","Item","Cost"]

Key sequence: [{"order":42,"key":"Control+a","result":"ok"},{"order":49,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t7-01-pre-close-clean-state-FX_Items-selected.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t7-01-pre-close-clean-state-FX_Items-selected.png | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=FX_Items Form tab native close control (closable FX_Items, once) | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t7-02-closed-state-FX_Items-tab-absent.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t7-02-closed-state-FX_Items-tab-absent.png | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Designer Form menu | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Form menu recent-forms entry FX_Items (once) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t7-03-reopened-FX_Items-identity-scope-clean.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t7-03-reopened-FX_Items-identity-scope-clean.png | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Details panel Expand Panel control | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Details Components tab | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Components grid Expand button (once) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t7-04-reopened-components-tree-expanded.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t7-04-reopened-components-tree-expanded.png | ok |
| 26 | mcp__playwright__browser_click | element=Components row FX_ItemStatic (name cell, read-only select) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Components row FX_DescriptionStatic (name cell, read-only select) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Components row FX_CostStatic (name cell, read-only select) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Components row FX_UMStatic (name cell, read-only select) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t7-05-reopened-FX_UMStatic-caption-FX_sUM-readonly.png | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t7-05-reopened-FX_UMStatic-caption-FX_sUM-readonly.png | ok |
| 37 | mcp__playwright__browser_click | element=Designer Edit menu | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=Edit menu String item | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 42 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 43 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 44 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sItem (read-only select) | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 49 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 50 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 51 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sCost (read-only select) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t7-06-reopen-Edit-String-readonly-FX_sCost-value-Cost.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t7-06-reopen-Edit-String-readonly-FX_sCost-value-Cost.png | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=Global Objects Cancel button (no changes) | ok |
| 58 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t7-07-final-state-after-readonly-verification.png | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T7-close-reopen-report.md | ok |
| 61 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T7-close-reopen-report.md | ok |
| 62 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T7-close-reopen-report.md | ok |
| 63 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 64 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |