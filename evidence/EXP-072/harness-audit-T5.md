# controller-generated audit (not worker prose)

14 actions, 34 reads; prohibited-tool hits=0; errors=0; turns=45; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_OrderNumber","FX_CustomerID","FX_Item","FX_Count","FX_sOrderNumber","FX_sCustomerID","FX_sCount","FX_sItem","Order Number","Customer ID","Count"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-072/t5-00-fresh-snapshot-designer-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-01-designer-preflight-start.png | ok |
| 6 | mcp__playwright__browser_click | element=Designer Form menu (single open) | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-02-form-menu-open-recent-forms-visible.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t5-02-form-menu-open-recent-forms-visible.png | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Designer Select Form Cancel (opened by mistake; not OK) | ok |
| 12 | mcp__playwright__browser_click | element=Designer menu-bar Form menu button | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-03-form-menu-open-recent-forms-visible.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t5-03-form-menu-open-recent-forms-visible.png | ok |
| 16 | mcp__playwright__browser_click | element=Form menu recent-forms entry FX_Orders (single click) | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-04-designer-FX_Orders-recovered-identity-scope-clean.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t5-04-designer-FX_Orders-recovered-identity-scope-clean.png | ok |
| 20 | mcp__playwright__browser_click | element=placeholder (not used) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-05-after-unintended-design-button-click-check.png | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t5-05-after-unintended-design-button-click-check.png | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Designer Select Form Cancel (accidental open; not OK) | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Details panel Expand Panel button | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-06-details-panel-expanded-components-tab.png | ok |
| 31 | mcp__playwright__browser_click | element=Details Components tab | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-07-details-components-tab-readonly.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t5-07-details-components-tab-readonly.png | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Components grid Expand (read-only tree expand) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-08-components-grid-expanded-readonly.png | ok |
| 39 | mcp__playwright__browser_click | element=Components row FX_OrderNumberStatic (read-only select) | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-09-FX_OrderNumberStatic-selected-caption-readonly.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t5-09-FX_OrderNumberStatic-selected-caption-readonly.png | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Components row FX_CustomerIDStatic (read-only select) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-10-FX_CustomerIDStatic-selected-caption-readonly.png | ok |
| 47 | mcp__playwright__browser_click | element=Components row FX_ItemStatic (read-only select) | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-11-FX_ItemStatic-selected-caption-readonly.png | ok |
| 50 | mcp__playwright__browser_click | element=Components row FX_CountStatic (read-only select) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-12-FX_CountStatic-selected-caption-readonly.png | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t5-13-final-state-FX_Orders-open-clean-readonly.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t5-13-final-state-FX_Orders-open-clean-readonly.png | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 57 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 58 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 59 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 60 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |