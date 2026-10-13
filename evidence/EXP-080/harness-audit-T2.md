# controller-generated audit (not worker prose)

5 actions, 10 reads; prohibited-tool hits=0; errors=1; turns=19; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_DerOrderTotal","FX_Cost","FX_Count","FX_ItmsCost","FX_Count * FX_ItmsCost"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#7 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e1175')\u001b[22m\n\u001b[2m    - locator resolved to <input type=\"radio\" tabindex=\"0\" hidefocus=\"true\" data-ref=\"inputEl\" autocomplete=\"off\" aria-checked=\"false\" name=\"PropertyTypeVar\" id=\"mgradio-2033-inputEl\" componentid=\"mgradio-2033\" aria-labelledby=\"mgradio-2033-boxLabelEl\" data-mgcompnamevalue=\"DerivedRadioButton\" class=\"x-form-field x-form-radio x-form-radio-default x-form-cb … (1546 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=New Property button (IDOs Form; the one wizard opening for T2) | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-080/t2-01-wizard-page1-before-derived-choice.png | ok |
| 7 | mcp__playwright__browser_click | element=Derived radio on wizard page 1 (the one choice for T2) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e1175')[22m [2m    - locator resolved to <input type="radio" tabindex="0" hidefocus="true" data-ref="inputEl" autocomplete="off" aria-checked="false" name="PropertyTypeVar" id="mgradio-2033-inputEl" componentid="mgradio-2033" aria-labelledby="mgradio-2033-boxLabelEl" data-mgcompnamevalue="DerivedRadioButton" class="x-form-field x-form-radio x-form-radio-default x-form-cb … (1546 chars) |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-080/t2-02-wizard-page1-derived-click-timeout-viewport.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080\t2-02-wizard-page1-derived-click-timeout-viewport.png | ok |
| 11 | mcp__playwright__browser_click | element=Derived label text on wizard page 1 (one corrected attempt) | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-080/t2-03-wizard-page1-derived-selected-before-next.png | ok |
| 14 | mcp__playwright__browser_click | element=Next > button on wizard page 1 (one required navigation) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-080/t2-04-wizard-page2-derived-before-any-entry.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080\t2-04-wizard-page2-derived-before-any-entry.png | ok |
| 18 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 19 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |