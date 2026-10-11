# controller-generated audit (not worker prose)

25 actions, 37 reads; prohibited-tool hits=0; errors=0; turns=62; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","Hello World","StdFormRefreshCompleted"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-00-pre-save-gate-start.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t5-01-pre-save-gate-start-designer.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t5-01-pre-save-gate-start-designer.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Details tab "Event Handlers" | ok |
| 9 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-01-event-handlers-pre-save-gate.md | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Parameters "Open Edit Property Dialog" button (read-only readback) | ok |
| 13 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-02-parameters-readback-pre-save.md | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t5-02-parameters-readback-pre-save.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t5-02-parameters-readback-pre-save.png | ok |
| 17 | mcp__playwright__browser_click | element=Event Handler Parameters dialog Cancel (readback close, no commit) | ok |
| 18 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-03-after-readback-cancel-pre-save.md | ok |
| 19 | Grep | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Details tab "Components" | ok |
| 21 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-04-components-grid-pre-save-preservation.md | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Components grid row FX_ItemStatic (selection only) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-05-FX_ItemStatic-properties.md | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t5-snapshot-05-FX_ItemStatic-properties.md | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t5-snapshot-05-FX_ItemStatic-properties.md | ok |
| 30 | mcp__playwright__browser_click | element=Components grid row FX_ItemEdit (selection only) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Components grid row FX_DescriptionStatic (selection only) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Components grid row FX_DescriptionEdit (selection only) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Components grid row FX_CostStatic (selection only) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Components grid row FX_CostEdit (selection only) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Components grid row FX_UMStatic (selection only) | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Components grid row FX_UMCombobox (selection only) | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Components grid row FormCollectionGrid (selection only) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Components grid row FX_ItemGridCol (selection only) | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Components grid row FX_DescriptionGridCol (selection only) | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Components grid row FX_CostGridCol (selection only) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Components grid row FX_UMGridCol (selection only) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=Properties tab "Form" | ok |
| 56 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-06-form-properties-pre-save.md | ok |
| 57 | Grep | (no key/element/filename argument) | ok |
| 58 | Grep | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t5-03-pre-save-form-context-gate-passed.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t5-03-pre-save-form-context-gate-passed.png | ok |
| 61 | mcp__playwright__browser_click | element=Designer toolbar Save button (the single permitted Save) | ok |
| 62 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t5-04-immediate-after-single-save.png | ok |
| 63 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-07-immediate-after-single-save.md | ok |
| 64 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t5-04-immediate-after-single-save.png | ok |
| 65 | Grep | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Details tab "Event Handlers" (post-Save readback) | ok |
| 68 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-08-post-save-event-handlers-readback.md | ok |
| 69 | Grep | (no key/element/filename argument) | ok |
| 70 | Grep | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_click | element=Parameters "Open Edit Property Dialog" button (post-Save readback) | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t5-05-post-save-parameters-readback-dialog.png | ok |
| 73 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-09-post-save-parameters-readback-dialog.md | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t5-05-post-save-parameters-readback-dialog.png | ok |
| 75 | Grep | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=Event Handler Parameters dialog Cancel (post-Save readback close, no commit) | ok |
| 77 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-10-post-save-after-readback-cancel.md | ok |
| 78 | Grep | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_click | element=Details tab "Components" (post-Save readback) | ok |
| 81 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-11-post-save-components-grid-readback.md | ok |
| 82 | Grep | (no key/element/filename argument) | ok |
| 83 | Grep | (no key/element/filename argument) | ok |
| 84 | Grep | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_click | element=Components grid row FX_RefreshButton (selection only, post-Save readback) | ok |
| 86 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t5-snapshot-12-post-save-fx-refreshbutton-properties.md | ok |
| 87 | Grep | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t5-06-post-save-fx-refreshbutton-components-readback.png | ok |
| 89 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t5-06-post-save-fx-refreshbutton-components-readback.png | ok |
| 90 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-055\T5-pre-save-gate-and-single-designer-save-report.md | ok |
| 91 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-055\T5-pre-save-gate-and-single-designer-save-report.md | ok |
| 92 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-055\T5-pre-save-gate-and-single-designer-save-report.md | ok |
| 93 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md | ok |
| 94 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md | ok |