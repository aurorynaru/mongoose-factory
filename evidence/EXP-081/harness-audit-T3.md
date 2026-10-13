# controller-generated audit (not worker prose)

7 actions, 18 reads; prohibited-tool hits=0; errors=0; turns=30; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CusAddress","FX_DerOrderTotal","FX_CusName","FX_ItmsDescription","FX_sAddress","FX_sOrderTotal","FX_sCustomerName","FX_sItemDescription"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t3-01-pre-save-gate-dirty-idoproperties-five-changes-no-modal.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t3-01-pre-save-gate-dirty-idoproperties-five-changes-no-modal.png | ok |
| 8 | mcp__playwright__browser_click | element=toolbar Save button (single ordinary Save of the IDO Properties Form) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t3-02-save-immediate-response-after-single-save.png | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t3-02-save-immediate-response-after-single-save.png | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=IDO Properties grid row 3 Property Name cell FX_CusName (row navigation, read-only revisit after Save) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t3-03-post-save-readback-row3-FX_CusName-sCustomerName-readonly.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t3-03-post-save-readback-row3-FX_CusName-sCustomerName-readonly.png | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=IDO Properties grid row 5 Property Name cell FX_ItmsDescription (row navigation, read-only revisit after Save) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t3-04-post-save-readback-row5-FX_ItmsDescription-sItemDescription-readonly.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t3-04-post-save-readback-row5-FX_ItmsDescription-sItemDescription-readonly.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=IDO Properties grid row 14 Property Name cell FX_CusAddress (row navigation, read-only revisit after Save) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t3-05-post-save-readback-row14-FX_CusAddress-sAddress-readonly.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t3-05-post-save-readback-row14-FX_CusAddress-sAddress-readonly.png | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=IDO Properties grid row 1 Property Name cell FX_DerOrderTotal (row navigation, read-only revisit after Save) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t3-06-post-save-readback-row1-FX_DerOrderTotal-sOrderTotal-readonly-checked.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t3-06-post-save-readback-row1-FX_DerOrderTotal-sOrderTotal-readonly-checked.png | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=IDOs tab heading (view-only tab switch to read the parent checkout state after Save) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t3-07-post-save-parent-idos-form-fx-orders-checkout-state.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t3-07-post-save-parent-idos-form-fx-orders-checkout-state.png | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |
| 34 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |