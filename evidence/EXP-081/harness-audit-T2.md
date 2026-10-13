# controller-generated audit (not worker prose)

22 actions, 29 reads; prohibited-tool hits=4; errors=2; turns=66; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CusAddress","FX_DerOrderTotal","FX_CusName","FX_ItmsDescription","FX_sAddress","FX_sOrderTotal","FX_sCustomerName","FX_sItemDescription"]

Key sequence: [{"order":17,"key":"Tab","result":"ok"},{"order":26,"key":"Control+a","result":"ok"},{"order":28,"key":"Tab","result":"ok"},{"order":38,"key":"Tab","result":"ok"},{"order":48,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: ["#56 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e2621')\u001b[22m\n\u001b[2m    - locator resolved to <input type=\"button\" role=\"checkbox\" hidefocus=\"true\" data-ref=\"inputEl\" autocomplete=\"off\" aria-checked=\"false\" aria-disabled=\"false\" id=\"ext-comp-2160-inputEl\" componentid=\"ext-comp-2160\" data-mgcompnamevalue=\"IsReadOnlyDetail\" aria-labelledby=\"ext-comp-2160-boxLabelEl\" class=\"x-form-field x-form-checkbox x-form-checkbox-default … (1994 chars)","#58 Grep: Permission to read C:\\Users\\juara\\.claude\\projects\\C--AI-mongoose-factory\\67b6c280-9a13-48bd-88ff-0b393b3fe095\\tool-results\\toolu_01BEiiuH8AANwmz5V7BfF4wh.json has been denied."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-01-pre-edit-gate-idoproperties-FX_CusAddress-clean.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-01-pre-edit-gate-idoproperties-FX_CusAddress-clean.png | ok |
| 7 | mcp__playwright__browser_click | element=IDOs tab heading (parent Form view, read-only tab switch) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-02-parent-idos-form-fx-orders-checked-out-clean.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-02-parent-idos-form-fx-orders-checked-out-clean.png | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=IDO Properties tab heading (return to edit Form; view-only tab switch) | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-03-idoproperties-row14-FX_CusAddress-identity-before-edit.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-03-idoproperties-row14-FX_CusAddress-identity-before-edit.png | ok |
| 15 | mcp__playwright__browser_click | element=Label String ID combobox field on FX_CusAddress (IDO Properties detail) | ok |
| 16 | mcp__playwright__browser_type | element=Label String ID combobox field on FX_CusAddress | ok |
| 17 | mcp__playwright__browser_press_key | key=Tab | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-04-after-entry1-FX_CusAddress-FX_sAddress-committed-readback.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-04-after-entry1-FX_CusAddress-FX_sAddress-committed-readback.png | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=IDO Properties grid row 1 Property Name cell FX_DerOrderTotal (make row current) | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-05-entry2-before-edit-FX_DerOrderTotal-identity-FX_sCost-displayed.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-05-entry2-before-edit-FX_DerOrderTotal-identity-FX_sCost-displayed.png | ok |
| 25 | mcp__playwright__browser_click | element=Label String ID combobox field on FX_DerOrderTotal (existing value FX_sCost) | ok |
| 26 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 27 | mcp__playwright__browser_type | element=Label String ID combobox field on FX_DerOrderTotal (text selected) | ok |
| 28 | mcp__playwright__browser_press_key | key=Tab | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-06-after-entry2-FX_DerOrderTotal-FX_sOrderTotal-committed-readback.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-06-after-entry2-FX_DerOrderTotal-FX_sOrderTotal-committed-readback.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=IDO Properties grid row 3 Property Name cell FX_CusName (make row current) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-07-entry3-before-edit-FX_CusName-identity-LSID-blank.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-07-entry3-before-edit-FX_CusName-identity-LSID-blank.png | ok |
| 36 | mcp__playwright__browser_click | element=Label String ID combobox field on FX_CusName (blank) | ok |
| 37 | mcp__playwright__browser_type | element=Label String ID combobox field on FX_CusName | ok |
| 38 | mcp__playwright__browser_press_key | key=Tab | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-08-after-entry3-FX_CusName-FX_sCustomerName-committed-readback.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-08-after-entry3-FX_CusName-FX_sCustomerName-committed-readback.png | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=IDO Properties grid row 5 Property Name cell FX_ItmsDescription (make row current) | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-09-entry4-before-edit-FX_ItmsDescription-identity-LSID-blank.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-09-entry4-before-edit-FX_ItmsDescription-identity-LSID-blank.png | ok |
| 46 | mcp__playwright__browser_click | element=Label String ID combobox field on FX_ItmsDescription (blank) | ok |
| 47 | mcp__playwright__browser_type | element=Label String ID combobox field on FX_ItmsDescription | ok |
| 48 | mcp__playwright__browser_press_key | key=Tab | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-10-after-entry4-FX_ItmsDescription-FX_sItemDescription-committed-readback.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-10-after-entry4-FX_ItmsDescription-FX_sItemDescription-committed-readback.png | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=IDO Properties grid row 1 Property Name cell FX_DerOrderTotal (make row current for Read Only tick) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-11-entry5-before-tick-FX_DerOrderTotal-identity-ReadOnly-unchecked.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-11-entry5-before-tick-FX_DerOrderTotal-identity-ReadOnly-unchecked.png | ok |
| 56 | mcp__playwright__browser_click | element=Read Only checkbox (Formatting group) on FX_DerOrderTotal | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e2621')[22m [2m    - locator resolved to <input type="button" role="checkbox" hidefocus="true" data-ref="inputEl" autocomplete="off" aria-checked="false" aria-disabled="false" id="ext-comp-2160-inputEl" componentid="ext-comp-2160" data-mgcompnamevalue="IsReadOnlyDetail" aria-labelledby="ext-comp-2160-boxLabelEl" class="x-form-field x-form-checkbox x-form-checkbox-default … (1994 chars) |
| 57 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 58 | Grep | (no key/element/filename argument) | error: Permission to read C:\Users\juara\.claude\projects\C--AI-mongoose-factory\67b6c280-9a13-48bd-88ff-0b393b3fe095\tool-results\toolu_01BEiiuH8AANwmz5V7BfF4wh.json has been denied. |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=Read Only label text (Formatting group) on FX_DerOrderTotal (corrected attempt) | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-081/t2-12-entry5-after-tick-FX_DerOrderTotal-ReadOnly-verify.png | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-081\t2-12-entry5-after-tick-FX_DerOrderTotal-ReadOnly-verify.png | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |
| 66 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |
| 67 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |