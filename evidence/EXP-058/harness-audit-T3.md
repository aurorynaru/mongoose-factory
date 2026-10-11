# controller-generated audit (not worker prose)

7 actions, 15 reads; prohibited-tool hits=1; errors=0; turns=47; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Test"]

Key sequence: [{"order":29,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-058/t3-snapshot-00-designer-fresh-pre-migration.md | ok |
| 3 | Grep | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Details panel Event Handlers tab | ok |
| 5 | mcp__playwright__browser_snapshot | filename=evidence/EXP-058/t3-snapshot-01-event-handlers-grid-pre-migration.md | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-058/t3-01-pre-migration-handler-grid-one-group-two-actions.png | ok |
| 8 | mcp__playwright__browser_click | element=Event Handlers grid sequence 0 Prompt row | ok |
| 9 | mcp__playwright__browser_snapshot | filename=evidence/EXP-058/t3-snapshot-02-prompt-row-selected-properties-pre-change.md | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-snapshot-02-prompt-row-selected-properties-pre-change.md | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-058/t3-02-prompt-row-selected-event-StdFormRefreshCompleted-pre-change.png | ok |
| 13 | mcp__playwright__browser_click | element=Event To Handle Event value dropdown arrow for Prompt row | ok |
| 14 | mcp__playwright__browser_snapshot | filename=evidence/EXP-058/t3-snapshot-03-event-dropdown-open-options.md | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-snapshot-03-event-dropdown-open-options.md | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-058/t3-03-event-combobox-dropdown-open-no-FX_Test-offered.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-03-event-combobox-dropdown-open-no-FX_Test-offered.png | ok |
| 24 | mcp__playwright__browser_type | element=Event To Handle Event combobox (editable) for Prompt row | ok |
| 25 | mcp__playwright__browser_snapshot | filename=evidence/EXP-058/t3-snapshot-04-event-combobox-typed-FX_Test-before-commit.md | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-058/t3-04-intermediate-event-typed-FX_Test-before-commit.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-04-intermediate-event-typed-FX_Test-before-commit.png | ok |
| 29 | mcp__playwright__browser_press_key | key=Tab | ok |
| 30 | mcp__playwright__browser_snapshot | filename=evidence/EXP-058/t3-snapshot-05-after-tab-commit-event-state.md | ok |
| 31 | Grep | (no key/element/filename argument) | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-snapshot-05-after-tab-commit-event-state.md | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-058/t3-05-intermediate-after-prompt-event-commit-grid-FX_Test-group.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-05-intermediate-after-prompt-event-commit-grid-FX_Test-group.png | ok |
| 35 | Grep | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Event Handlers grid toolbar Expand (view only) | ok |
| 37 | mcp__playwright__browser_snapshot | filename=evidence/EXP-058/t3-snapshot-06-after-view-expand-grid-groups.md | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-snapshot-06-after-view-expand-grid-groups.md | ok |
| 39 | Grep | (no key/element/filename argument) | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-snapshot-06-after-view-expand-grid-groups.md | ok |
| 41 | mcp__playwright__browser_click | element=Event Handlers grid FX_Test group sequence 0 Prompt row (selection only) | ok |
| 42 | mcp__playwright__browser_snapshot | filename=evidence/EXP-058/t3-snapshot-07-prompt-row-under-FX_Test-selected-readback.md | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-058/t3-06-post-change-prompt-under-FX_Test-expanded-set-values-remains-under-StdFormRefreshCompleted.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-058\t3-06-post-change-prompt-under-FX_Test-expanded-set-values-remains-under-StdFormRefreshCompleted.png | ok |
| 46 | Grep | (no key/element/filename argument) | ok |
| 47 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-058\T3-sequence0-prompt-migration-report.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-058\T3-sequence0-prompt-migration-report.md | ok |
| 49 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-058\T3-sequence0-prompt-migration-report.md | ok |
| 50 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-058\T3-sequence0-prompt-migration-report.md | ok |
| 51 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md | ok |
| 52 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md | ok |