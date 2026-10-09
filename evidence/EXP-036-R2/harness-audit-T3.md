# controller-generated audit (not worker prose)

14 actions, 26 reads; prohibited-tool hits=0; errors=2; turns=48; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab02","FX_SingleButton02","Factory Test Button"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#1 mcp__playwright__browser_tabs: ### Error\nError: Tab 1 not found","#7 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=e300')\u001b[22m\n\u001b[2m    - locator resolved to <div id=\"mginfoconexpandable-1245-trigger-picker\" class=\"x-form-trigger x-form-trigger-default x-form-arrow-trigger x-form-arrow-trigger-default \"></div>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    2 × waiting for element to be visible, enabled and stable\u001b[22m\n\u001b[2m      - element is visible, enabled and stable\u001b[22m\n\u001b[2m      - s… (3105 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=select | error: ### Error Error: Tab 1 not found |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=New toolbar button (New Form Definition) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Category dropdown trigger | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=e300')[22m [2m    - locator resolved to <div id="mginfoconexpandable-1245-trigger-picker" class="x-form-trigger x-form-trigger-default x-form-arrow-trigger x-form-arrow-trigger-default "></div>[22m [2m  - attempting click action[22m [2m    2 × waiting for element to be visible, enabled and stable[22m [2m      - element is visible, enabled and stable[22m [2m      - s… (3105 chars) |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t3-01-category-click-timeout-viewport.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t3-01-category-click-timeout-viewport.png | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=OK on Form Wizard Selection exception message box | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t3-02-wizard-selection-after-message-dismissed-viewport.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t3-02-wizard-selection-after-message-dismissed-viewport.png | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Category dropdown trigger (corrected attempt) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Category option Classic (rendered) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Wizard dropdown trigger | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Wizard option Build from Scratch (rendered) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t3-03-wizard-choices-before-ok-viewport.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t3-03-wizard-choices-before-ok-viewport.png | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Form Wizard Selection OK (once) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t3-04-wizard-page1-after-ok-viewport.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t3-04-wizard-page1-after-ok-viewport.png | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=OK on Error dialog (Unable to load form WSFormWizardClassicBuildFromScratch) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t3-05-after-error-dismissed-viewport.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t3-05-after-error-dismissed-viewport.png | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_tabs | action=select | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Open toolbar button (Select Form inventory check, read-only) | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t3-06-select-form-inventory-check-viewport.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t3-06-select-form-inventory-check-viewport.png | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Select Form Cancel (once) | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t3-creation-attempt-notes.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-R2-clean-replay-single-button-caption-recovery.md | ok |
| 49 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-R2-clean-replay-single-button-caption-recovery.md | ok |