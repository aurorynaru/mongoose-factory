# controller-generated audit (not worker prose)

10 actions, 13 reads; prohibited-tool hits=1; errors=1; turns=40; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","Factory Test Button"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#36 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=e571')\u001b[22m\n\u001b[2m    - locator resolved to <input type=\"button\" role=\"checkbox\" hidefocus=\"true\" data-ref=\"inputEl\" autocomplete=\"off\" aria-hidden=\"false\" aria-checked=\"true\" id=\"ext-comp-1526-inputEl\" componentid=\"ext-comp-1526\" aria-labelledby=\"ext-comp-1526-boxLabelEl\" data-mgcompnamevalue=\"SaveTemplateCheckBox\" class=\"x-form-field x-form-checkbox x-form-checkbox-default x-… (1992 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\recipes\forms\create-basic-form.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-002-R2-create-basic-form-replay.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-019-R2-clean-replay-fresh-dialog-classic-wizard-selection.md | ok |
| 6 | mcp__playwright__browser_tabs | action=select | ok |
| 7 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-01-designer-preflight-snapshot.md | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=New toolbar button (New Form Definition) | ok |
| 10 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-02-wizard-selection-dialog-snapshot.md | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t5-02-wizard-selection-dialog-snapshot.md | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t5-03-before-create-wizard-selection.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t5-03-before-create-wizard-selection.png | ok |
| 15 | mcp__playwright__browser_click | element=Category dropdown arrow (Form Wizard Selection) | ok |
| 16 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-04-category-dropdown-open-snapshot.md | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Classic option in Category listbox | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-05-category-classic-selected-snapshot.md | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Wizard dropdown arrow (Form Wizard Selection) | ok |
| 22 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-06-wizard-dropdown-open-snapshot.md | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Build from Scratch option in Wizard listbox | ok |
| 25 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-07-wizard-selection-before-ok-snapshot.md | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=OK button (Form Wizard Selection) | ok |
| 28 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-08-wizard-page1-after-ok-snapshot.md | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_type | element=Name combobox (Form Wizard - Build From Scratch) | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-09-wizard-page1-name-entered-snapshot.md | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t5-09-wizard-page1-name-entered-snapshot.md | ok |
| 33 | mcp__playwright__browser_click | element=Next button (wizard page 1) | ok |
| 34 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-10-wizard-page2-save-template-snapshot.md | ok |
| 35 | Grep | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Save Template checkbox (wizard page 2) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=e571')[22m [2m    - locator resolved to <input type="button" role="checkbox" hidefocus="true" data-ref="inputEl" autocomplete="off" aria-hidden="false" aria-checked="true" id="ext-comp-1526-inputEl" componentid="ext-comp-1526" aria-labelledby="ext-comp-1526-boxLabelEl" data-mgcompnamevalue="SaveTemplateCheckBox" class="x-form-field x-form-checkbox x-form-checkbox-default x-… (1992 chars) |
| 37 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t5-11-after-checkbox-intercept-snapshot.md | ok |
| 38 | Grep | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t5-12-blocked-save-template-page-viewport.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t5-12-blocked-save-template-page-viewport.png | ok |
| 41 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 42 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |