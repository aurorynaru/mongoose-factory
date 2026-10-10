# controller-generated audit (not worker prose)

12 actions, 27 reads; prohibited-tool hits=1; errors=1; turns=43; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX001","FX002","Factory test one","Factory test two"]

Key sequence: [{"order":39,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#24 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e1052')\u001b[22m\n\u001b[2m    - locator resolved to <input type=\"button\" role=\"checkbox\" hidefocus=\"true\" data-ref=\"inputEl\" autocomplete=\"off\" aria-hidden=\"false\" aria-checked=\"false\" aria-disabled=\"false\" id=\"ext-comp-3070-inputEl\" componentid=\"ext-comp-3070\" aria-labelledby=\"ext-comp-3070-boxLabelEl\" data-mgcompnamevalue=\"DisplayStatusBarCheckbox\" class=\"x-form-field x-form-check… (2084 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Glob | (no key/element/filename argument) | ok |
| 3 | Glob | (no key/element/filename argument) | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-042-hello-world-part-1-two-test-records-through-the-we.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-041-R3-hello-world-part-1-form-creation-replay.md | ok |
| 6 | Glob | (no key/element/filename argument) | ok |
| 7 | Glob | (no key/element/filename argument) | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-041-R3-hello-world-part-1-form-creation-replay.md | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-041-R3-hello-world-part-1-form-creation-replay.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt1.md | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042\cleanup-inventory.md | ok |
| 12 | mcp__playwright__browser_tabs | action=list | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R2/t1-01-preflight-no-runtime-no-designer-tab.png | ok |
| 15 | mcp__playwright__browser_click | element=View menu button | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=User Preferences... menu item | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Layout option in User Preferences listbox | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R2/t1-02-user-preferences-layout-status-bar-before.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R2\t1-02-user-preferences-layout-status-bar-before.png | ok |
| 24 | mcp__playwright__browser_click | element=Display Status Bar checkbox | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e1052')[22m [2m    - locator resolved to <input type="button" role="checkbox" hidefocus="true" data-ref="inputEl" autocomplete="off" aria-hidden="false" aria-checked="false" aria-disabled="false" id="ext-comp-3070-inputEl" componentid="ext-comp-3070" aria-labelledby="ext-comp-3070-boxLabelEl" data-mgcompnamevalue="DisplayStatusBarCheckbox" class="x-form-field x-form-check… (2084 chars) |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Display Status Bar visible label text | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R2/t1-03-user-preferences-display-status-bar-checked-before-ok.png | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=OK button in User Preferences dialog | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R2/t1-04-after-preference-ok-status-bar-state.png | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R2\t1-04-after-preference-ok-status-bar-state.png | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Open toolbar button (Select Form) | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 39 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 40 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 41 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R2/t1-05-select-form-fx-helloworld01-one-row-before-ok.png | ok |
| 45 | mcp__playwright__browser_click | element=FX_HelloWorld01 Name cell in Select Form grid | ok |
| 46 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=OK button in Select Form dialog | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-042-R2/t1-06-runtime-opened-initial-status-bar-check.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R2\t1-06-runtime-opened-initial-status-bar-check.png | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_snapshot | filename=evidence/EXP-042-R2/t1-07-runtime-accessibility-snapshot-no-status-bar.md | ok |
| 54 | Grep | (no key/element/filename argument) | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R2\t1-01-preflight-no-runtime-no-designer-tab.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R2\t1-03-user-preferences-display-status-bar-checked-before-ok.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R2\t1-05-select-form-fx-helloworld01-one-row-before-ok.png | ok |
| 58 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-042-R2-hello-world-part-1-two-test-records-replay.md | ok |
| 59 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-042-R2\cleanup-inventory.md | ok |