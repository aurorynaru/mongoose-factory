# controller-generated audit (not worker prose)

15 actions, 18 reads; prohibited-tool hits=1; errors=1; turns=47; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CusAddress","FX_DerOrderTotal","FX_CusName","FX_ItmsDescription","FX_sAddress","FX_sOrderTotal","FX_sCustomerName","FX_sItemDescription"]

Key sequence: [{"order":31,"key":"Tab","result":"ok"},{"order":34,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#3 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 4 | Glob | (no key/element/filename argument) | ok |
| 5 | Glob | (no key/element/filename argument) | ok |
| 6 | Glob | (no key/element/filename argument) | ok |
| 7 | Glob | (no key/element/filename argument) | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-070-hello-world-part-4-section-10-orders-property-classes.md | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt5.md | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_tabs | action=list | ok |
| 19 | mcp__playwright__browser_tabs | action=select | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Close Panel IDOs (Form-tab control of the clean IDOs tab) | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Form menu in the Mongoose toolbar | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Form menu item Open | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Select Form row IDOs / IdoCollections (gridcell IDOs) | ok |
| 28 | mcp__playwright__browser_click | element=Select Form dialog OK button | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_type | element=IDO Name criterion textbox (Filter in Place, IDOs Form) | ok |
| 31 | mcp__playwright__browser_press_key | key=Tab | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t1-01-pre-f4-idos-fx-orders-criterion.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t1-01-pre-f4-idos-fx-orders-criterion.png | ok |
| 34 | mcp__playwright__browser_press_key | key=F4 | ok |
| 35 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=in-form Properties sub-tab (tab, not the toolbar Properties button) | ok |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t1-02-baseline-properties-grid-17-rows-top.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t1-02-baseline-properties-grid-17-rows-top.png | ok |
| 41 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t1-03-route-check-properties-grid-scrolled-right.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t1-03-route-check-properties-grid-scrolled-right.png | ok |
| 44 | mcp__playwright__browser_click | element=blue Properties button (IDO Properties Form route, read action) | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t1-04-route-properties-button-form-idoproperties-detail.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t1-04-route-properties-button-form-idoproperties-detail.png | ok |
| 48 | mcp__playwright__browser_click | element=IDO Properties grid row 3 Property Name cell FX_CusName (row navigation for baseline read) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t1-05-baseline-FX_CusName-detail-label-and-read-only.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t1-05-baseline-FX_CusName-detail-label-and-read-only.png | ok |
| 51 | mcp__playwright__browser_click | element=IDO Properties grid row 5 Property Name cell FX_ItmsDescription (row navigation for baseline read) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t1-06-baseline-FX_ItmsDescription-detail-label-and-read-only.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t1-06-baseline-FX_ItmsDescription-detail-label-and-read-only.png | ok |
| 54 | mcp__playwright__browser_click | element=IDO Properties grid row 14 Property Name cell FX_CusAddress (row navigation for baseline read) | ok |
| 55 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t1-07-baseline-FX_CusAddress-detail-label-and-read-only.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t1-07-baseline-FX_CusAddress-detail-label-and-read-only.png | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |
| 59 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |
| 60 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |