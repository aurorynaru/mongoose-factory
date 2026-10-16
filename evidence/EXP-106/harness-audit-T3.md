# controller-generated audit (not worker prose)

28 actions, 22 reads; prohibited-tool hits=3; errors=0; turns=98; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticHeader","FX_sCustomerPortal","Customer Portal","FX_WhiteHeader","40","1.5","2,0,0,0"]

Key sequence: [{"order":36,"key":"Tab","result":"ok"},{"order":46,"key":"Tab","result":"ok"},{"order":61,"key":"Tab","result":"ok"},{"order":69,"key":"Tab","result":"ok"},{"order":88,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\recipes\components\add-component-from-toolbox.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\recipes\components\configure-basic-component.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md | ok |
| 9 | mcp__playwright__browser_tabs | action=list | ok |
| 10 | mcp__playwright__browser_tabs | action=select | ok |
| 11 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-gate-start.yml | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Edit menu in Designer menu bar | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=String menu item under Edit | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_type | element=Strings filter textbox in Global Objects dialog | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-01-string-check-FX_sCustomerPortal-filter.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-01-string-check-FX_sCustomerPortal-filter.png | ok |
| 20 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-string-filter-one-row.yml | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=FX_sCustomerPortal row in Strings list of Global Objects dialog | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-02-string-check-FX_sCustomerPortal-value-read.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-02-string-check-FX_sCustomerPortal-value-read.png | ok |
| 25 | Grep | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Cancel button in Global Objects dialog | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=StaticHeader row in Details Components tree | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-16T05-50-03-628Z.yml | ok |
| 31 | mcp__playwright__browser_click | element=Theme Class dropdown trigger in Properties Appearance group for StaticHeader | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-03-theme-class-list-opened.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-03-theme-class-list-opened.png | ok |
| 34 | Grep | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=FX_WhiteHeader option in Theme Class list | ok |
| 36 | mcp__playwright__browser_press_key | key=Tab | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-04-theme-class-FX_WhiteHeader-after-tab.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-04-theme-class-FX_WhiteHeader-after-tab.png | ok |
| 39 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-after-theme-class.yml | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\t3-snapshot-after-theme-class.yml | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Justification dropdown trigger in Properties Appearance group for StaticHeader | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-16T05-50-33-119Z.yml | ok |
| 45 | mcp__playwright__browser_click | element=Left option in Justification list | ok |
| 46 | mcp__playwright__browser_press_key | key=Tab | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-05-justification-Left-after-tab.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-05-justification-Left-after-tab.png | ok |
| 49 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-after-justification.yml | ok |
| 50 | Grep | (no key/element/filename argument) | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\t3-snapshot-after-justification.yml | ok |
| 52 | mcp__playwright__browser_click | element=Size value cell (20; 1) in Properties Layout group for StaticHeader | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-06-size-cell-after-double-click.png | ok |
| 54 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-06-size-cell-after-double-click.png | ok |
| 55 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-size-expanded.yml | ok |
| 56 | Grep | (no key/element/filename argument) | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\t3-snapshot-size-expanded.yml | ok |
| 58 | mcp__playwright__browser_click | element=Width value cell (20) under Size in Properties for StaticHeader | ok |
| 59 | Grep | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_type | element=Width editor textbox in Properties for StaticHeader | ok |
| 61 | mcp__playwright__browser_press_key | key=Tab | ok |
| 62 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-07-width-40-after-tab.png | ok |
| 63 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-07-width-40-after-tab.png | ok |
| 64 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-after-width.yml | ok |
| 65 | Grep | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_click | element=Height value cell (1) under Size in Properties for StaticHeader | ok |
| 67 | Grep | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_type | element=Height editor textbox in Properties for StaticHeader | ok |
| 69 | mcp__playwright__browser_press_key | key=Tab | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-08-height-1.5-size-after-tab.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-08-height-1.5-size-after-tab.png | ok |
| 72 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-after-height.yml | ok |
| 73 | Grep | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-09-properties-scrolled-to-specific-attributes.png | ok |
| 77 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-09-properties-scrolled-to-specific-attributes.png | ok |
| 78 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-misc-visible.yml | ok |
| 79 | Grep | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_click | element=Specific Attributes group row in Properties Miscellaneous section for StaticHeader | ok |
| 81 | Grep | (no key/element/filename argument) | ok |
| 82 | mcp__playwright__browser_click | element=Specific Attributes group label in Properties for StaticHeader | ok |
| 83 | Grep | (no key/element/filename argument) | ok |
| 84 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-16T05-51-46-575Z.yml | ok |
| 85 | mcp__playwright__browser_click | element=No Colon dropdown trigger in Properties Specific Attributes for StaticHeader | ok |
| 86 | Grep | (no key/element/filename argument) | ok |
| 87 | mcp__playwright__browser_click | element=True option in No Colon list | ok |
| 88 | mcp__playwright__browser_press_key | key=Tab | ok |
| 89 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-10-no-colon-True-after-tab.png | ok |
| 90 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-10-no-colon-True-after-tab.png | ok |
| 91 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-before-save.yml | ok |
| 92 | Grep | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_click | element=Designer toolbar Save button | ok |
| 94 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-106/t3-11-designer-save-response.png | ok |
| 95 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-106\t3-11-designer-save-response.png | ok |
| 96 | mcp__playwright__browser_snapshot | filename=evidence/playwright/t3-snapshot-after-save.yml | ok |
| 97 | Grep | (no key/element/filename argument) | ok |
| 98 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 99 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 100 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 101 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 102 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 103 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 104 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 105 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 106 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |