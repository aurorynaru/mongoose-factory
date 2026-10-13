# controller-generated audit (not worker prose)

15 actions, 17 reads; prohibited-tool hits=2; errors=2; turns=44; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_DerOrderTotal","FX_Cost","FX_Count","FX_ItmsCost","FX_Count * FX_ItmsCost"]

Key sequence: [{"order":24,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#14 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e1172')\u001b[22m\n\u001b[2m    - locator resolved to <input type=\"radio\" tabindex=\"0\" hidefocus=\"true\" data-ref=\"inputEl\" autocomplete=\"off\" aria-checked=\"false\" name=\"PropertyTypeVar\" id=\"mgradio-1427-inputEl\" componentid=\"mgradio-1427\" aria-labelledby=\"mgradio-1427-boxLabelEl\" data-mgcompnamevalue=\"DerivedRadioButton\" class=\"x-form-field x-form-radio x-form-radio-default x-form-cb … (1546 chars)","#34 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e1266')\u001b[22m\n\u001b[2m    - locator resolved to <input type=\"button\" role=\"checkbox\" hidefocus=\"true\" data-ref=\"inputEl\" autocomplete=\"off\" aria-hidden=\"false\" aria-checked=\"true\" id=\"ext-comp-1449-inputEl\" componentid=\"ext-comp-1449\" aria-labelledby=\"ext-comp-1449-boxLabelEl\" data-mgcompnamevalue=\"InheritExpressionCheckBox\" class=\"x-form-field x-form-checkbox x-form-checkbox-de… (2000 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Grep | (no key/element/filename argument) | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_tabs | action=list | ok |
| 8 | mcp__playwright__browser_tabs | action=select | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=New Property button in IDOs Form | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-01-wizard-page1-bound-default-before-derived.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-01-wizard-page1-bound-default-before-derived.png | ok |
| 14 | mcp__playwright__browser_click | element=Derived radio button on IDO Property Wizard page 1 | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e1172')[22m [2m    - locator resolved to <input type="radio" tabindex="0" hidefocus="true" data-ref="inputEl" autocomplete="off" aria-checked="false" name="PropertyTypeVar" id="mgradio-1427-inputEl" componentid="mgradio-1427" aria-labelledby="mgradio-1427-boxLabelEl" data-mgcompnamevalue="DerivedRadioButton" class="x-form-field x-form-radio x-form-radio-default x-form-cb … (1546 chars) |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Derived label text on IDO Property Wizard page 1 | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Next button on IDO Property Wizard | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-02-wizard-page2-derived-before-any-entry.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-02-wizard-page2-derived-before-any-entry.png | ok |
| 22 | mcp__playwright__browser_click | element=Property Name textbox on wizard page 2 | ok |
| 23 | mcp__playwright__browser_type | element=Property Name textbox on wizard page 2 | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-03-committed-property-name-no-prompt.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-03-committed-property-name-no-prompt.png | ok |
| 28 | mcp__playwright__browser_click | element=Open button for Property Class lookup | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=FX_Cost option in Property Class lookup list | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-04-class-fx-cost-selected-inherited-types.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-04-class-fx-cost-selected-inherited-types.png | ok |
| 34 | mcp__playwright__browser_click | element=Inherit from Property Class checkbox in Expression section | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e1266')[22m [2m    - locator resolved to <input type="button" role="checkbox" hidefocus="true" data-ref="inputEl" autocomplete="off" aria-hidden="false" aria-checked="true" id="ext-comp-1449-inputEl" componentid="ext-comp-1449" aria-labelledby="ext-comp-1449-boxLabelEl" data-mgcompnamevalue="InheritExpressionCheckBox" class="x-form-field x-form-checkbox x-form-checkbox-de… (2000 chars) |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Inherit from Property Class label text in Expression section | ok |
| 37 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Expression text area on wizard page 2 | ok |
| 39 | mcp__playwright__browser_type | element=Expression text area on wizard page 2 | ok |
| 40 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-05-configured-wizard-before-finish-not-pressed.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080-R3\t3-05-configured-wizard-before-finish-not-pressed.png | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |