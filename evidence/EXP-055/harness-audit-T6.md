# controller-generated audit (not worker prose)

28 actions, 41 reads; prohibited-tool hits=0; errors=0; turns=68; key string (none); exact mismatches=0

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
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-00-pre-close-fresh-designer.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-01-pre-close-clean-designer.png | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-01-pre-close-clean-designer.png | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Details tab "Event Handlers" (pre-close view) | ok |
| 11 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-01-pre-close-event-handlers.md | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Form tab close control "closable FX_Items" (single Designer close) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-02-immediate-after-single-close.png | ok |
| 16 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-02-after-single-close.md | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-02-immediate-after-single-close.png | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | Grep | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Designer top menu "Form" | ok |
| 21 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-03-form-menu-open.md | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-03-form-menu-open-recent-list.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-snapshot-03-form-menu-open.md | ok |
| 25 | mcp__playwright__browser_click | element=Form menu recent-forms entry "FX_Items" (single reopen) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-04-immediate-after-single-reopen.png | ok |
| 27 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-04-immediate-after-reopen.md | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-04-immediate-after-single-reopen.png | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Details panel "Expand Panel" (view only) | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-05-details-expanded-after-reopen.md | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-snapshot-05-details-expanded-after-reopen.md | ok |
| 34 | mcp__playwright__browser_click | element=Details tab "Event Handlers" (view only, after reopen) | ok |
| 35 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-06-event-handlers-after-reopen.md | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-05-event-handlers-recovered-after-reopen.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-snapshot-06-event-handlers-after-reopen.md | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-05-event-handlers-recovered-after-reopen.png | ok |
| 40 | mcp__playwright__browser_click | element=Event Handlers group row "StdFormRefreshCompleted" (view-only expand) | ok |
| 41 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-07-handler-group-expanded-after-reopen.md | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-06-handler-group-expanded-after-reopen.png | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-06-handler-group-expanded-after-reopen.png | ok |
| 45 | mcp__playwright__browser_click | element=Event Handlers action row Prompt cell (selection only) | ok |
| 46 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-08-action-row-selected-after-reopen.md | ok |
| 47 | Grep | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Parameters "Open Edit Property Dialog" (read-only readback after reopen) | ok |
| 49 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-09-parameters-readback-after-reopen.md | ok |
| 50 | Grep | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-07-parameters-readback-after-reopen-icon-and-default-button.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-07-parameters-readback-after-reopen-icon-and-default-button.png | ok |
| 53 | mcp__playwright__browser_click | element=Event Handler Parameters dialog Cancel (readback close, no commit) | ok |
| 54 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-10-after-readback-cancel-after-reopen.md | ok |
| 55 | Grep | (no key/element/filename argument) | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-snapshot-10-after-readback-cancel-after-reopen.md | ok |
| 57 | mcp__playwright__browser_click | element=Details tab "Components" (view only, after reopen) | ok |
| 58 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-11-components-after-reopen.md | ok |
| 59 | Grep | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-08-components-grid-after-reopen.png | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-08-components-grid-after-reopen.png | ok |
| 62 | Grep | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=Components grid "Expand" button (view only) | ok |
| 64 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-12-components-expanded-after-reopen.md | ok |
| 65 | Grep | (no key/element/filename argument) | ok |
| 66 | Grep | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Components grid row FX_RefreshButton (selection only, after reopen) | ok |
| 68 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-13-fx-refreshbutton-properties-after-reopen.md | ok |
| 69 | Grep | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-09-fx-refreshbutton-properties-after-reopen.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-09-fx-refreshbutton-properties-after-reopen.png | ok |
| 72 | Grep | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_click | element=Components grid row FX_ItemStatic (selection only, after reopen) | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_click | element=Components grid row FX_ItemEdit (selection only) | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_click | element=Components grid row FX_DescriptionStatic (selection only) | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_click | element=Components grid row FX_DescriptionEdit (selection only) | ok |
| 80 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_click | element=Components grid row FX_CostStatic (selection only) | ok |
| 82 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 83 | mcp__playwright__browser_click | element=Components grid row FX_CostEdit (selection only) | ok |
| 84 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_click | element=Components grid row FX_UMStatic (selection only) | ok |
| 86 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 87 | mcp__playwright__browser_click | element=Components grid row FX_UMCombobox (selection only) | ok |
| 88 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 89 | mcp__playwright__browser_click | element=Components grid row FX_ItemGridCol (selection only) | ok |
| 90 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 91 | mcp__playwright__browser_click | element=Components grid row FX_DescriptionGridCol (selection only) | ok |
| 92 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_click | element=Components grid row FX_CostGridCol (selection only) | ok |
| 94 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_click | element=Components grid row FX_UMGridCol (selection only) | ok |
| 96 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 97 | mcp__playwright__browser_click | element=Components grid row FormCollectionGrid (selection only) | ok |
| 98 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 99 | Grep | (no key/element/filename argument) | ok |
| 100 | mcp__playwright__browser_click | element=Properties tab "Form" (view only) | ok |
| 101 | mcp__playwright__browser_snapshot | filename=evidence/EXP-055/t6-snapshot-14-form-properties-after-reopen.md | ok |
| 102 | Grep | (no key/element/filename argument) | ok |
| 103 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-snapshot-14-form-properties-after-reopen.md | ok |
| 104 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-055/t6-10-final-clean-state-after-reopen.png | ok |
| 105 | Grep | (no key/element/filename argument) | ok |
| 106 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-055\t6-10-final-clean-state-after-reopen.png | ok |
| 107 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-055\T6-designer-close-and-recent-forms-reopen-recovery-report.md | ok |
| 108 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md | ok |
| 109 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md | ok |