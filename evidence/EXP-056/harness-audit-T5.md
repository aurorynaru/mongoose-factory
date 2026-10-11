# controller-generated audit (not worker prose)

20 actions, 22 reads; prohibited-tool hits=4; errors=0; turns=57; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_VarTest","FX_VarTestEdit","P(Description)"]

Key sequence: [{"order":25,"key":"Tab","result":"ok"},{"order":66,"key":"Enter","result":"ok"},{"order":70,"key":"Enter","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\T4-report.md | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-00-fresh-designer-pathA-start.md | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-snapshot-00-fresh-designer-pathA-start.md | ok |
| 7 | mcp__playwright__browser_click | element=Event Handlers tab heading in Details panel | ok |
| 8 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-01-event-handlers-verify-before-pair.md | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-snapshot-01-event-handlers-verify-before-pair.md | ok |
| 11 | mcp__playwright__browser_click | element=Sequence 1 row cell in Event Handlers grid | ok |
| 12 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-02-row1-selected-parameters-ref.md | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Parameters Open Edit Property Dialog button | ok |
| 15 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-03-parameters-dialog-open.md | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Set Values Variables ellipsis button | ok |
| 18 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-04-variables-list-dialog.md | ok |
| 19 | Grep | (no key/element/filename argument) | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-snapshot-04-variables-list-dialog.md | ok |
| 21 | mcp__playwright__browser_click | element=Edit Set Variable Values New button | ok |
| 22 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-05-pair-dialog-open-empty-target.md | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_type | element=Edit Set Variable Value Pair Target combobox | ok |
| 25 | mcp__playwright__browser_press_key | key=Tab | ok |
| 26 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-06-target-after-tab-retained-value.md | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-056/t5-01-target-entered-after-tab.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-01-target-entered-after-tab.png | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_type | element=Edit Set Variable Value Pair Value textbox | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-07-pair-readback-before-ok.md | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-056/t5-02-pair-readback-target-FX_VarTest-value-P-FX_Description-before-ok.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-02-pair-readback-target-FX_VarTest-value-P-FX_Description-before-ok.png | ok |
| 34 | Grep | (no key/element/filename argument) | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-snapshot-07-pair-readback-before-ok.md | ok |
| 36 | mcp__playwright__browser_click | element=Edit Set Variable Value Pair OK button | ok |
| 37 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-08-after-pair-ok-list-row-check.md | ok |
| 38 | Grep | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-056/t5-03-assignment-list-one-row-before-parent-ok.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-03-assignment-list-one-row-before-parent-ok.png | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Edit Set Variable Values list OK button | ok |
| 43 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-09-after-list-ok-parameters-open.md | ok |
| 44 | Grep | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Event Handler Parameters OK button | ok |
| 46 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-10-after-parameters-ok-committed-summary.md | ok |
| 47 | Grep | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-056/t5-04-committed-handler-summary-two-actions-unsaved.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-04-committed-handler-summary-two-actions-unsaved.png | ok |
| 50 | Grep | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=Sequence 0 Prompt row cell in Event Handlers grid | ok |
| 52 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-11-sequence0-selected-readback.md | ok |
| 53 | Grep | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Sequence 0 Parameters Open Edit Property Dialog button | ok |
| 55 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-12-sequence0-parameters-readback-dialog.md | ok |
| 56 | Grep | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=Event Handler Parameters Cancel button | ok |
| 58 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-13-after-sequence0-parameters-cancel.md | ok |
| 59 | Grep | (no key/element/filename argument) | ok |
| 60 | Grep | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_click | element=Variables tab heading in Details panel | ok |
| 62 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-14-variables-definition-checkpoint.md | ok |
| 63 | Grep | (no key/element/filename argument) | ok |
| 64 | Grep | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_type | element=Variables list Search Properties textbox | ok |
| 66 | mcp__playwright__browser_press_key | key=Enter | ok |
| 67 | mcp__playwright__browser_snapshot | filename=evidence/EXP-056/t5-snapshot-15-variables-filter-VarTest-checkpoint.md | ok |
| 68 | Grep | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_type | element=Variables list Search Properties textbox | ok |
| 70 | mcp__playwright__browser_press_key | key=Enter | ok |
| 71 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-056/t5-05-variables-definition-checkpoint-absent-unsaved.png | ok |
| 72 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-056\t5-05-variables-definition-checkpoint-absent-unsaved.png | ok |
| 73 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-056\T5-report.md | ok |
| 74 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-056\T5-report.md | ok |
| 75 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-056-hello-world-part-3-section-7-set-values-and-variab.md | ok |
| 76 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-056-hello-world-part-3-section-7-set-values-and-variab.md | ok |