# controller-generated audit (not worker prose)

28 actions, 34 reads; prohibited-tool hits=6; errors=1; turns=72; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_UMs","FX_sItem","FX_sCost","Item","Cost"]

Key sequence: [{"order":21,"key":"Control+a","result":"ok"},{"order":25,"key":"Tab","result":"ok"},{"order":37,"key":"Control+a","result":"ok"},{"order":45,"key":"Control+a","result":"ok"},{"order":53,"key":"Control+a","result":"ok"},{"order":60,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":6}

Errors: ["#22 mcp__playwright__browser_type: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=e1251')\u001b[22m\n\u001b[2m    - locator resolved to <textarea role=\"textbox\" autocomplete=\"off\" readonly=\"readonly\" id=\"textarea-4527-inputEl\" componentid=\"textarea-4527\" name=\"textarea-4527-inputEl\" aria-labelledby=\"textarea-4527-labelEl\" class=\"mg-property-description x-form-text x-form-text-default x-form-textarea\"></textarea>\u001b[22m\n\u001b[2m    - fill(\"Cost\")\u001b[22m\n\u001b[2m  - attempting fil… (1057 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-01-pre-mutation-pending-FX_sItem-state.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-01-pre-mutation-pending-FX_sItem-state.png | ok |
| 5 | mcp__playwright__browser_click | element=Components row FX_CostStatic (name cell) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-02-FX_CostStatic-selected-caption-FX_sCost-before-mutation.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-02-FX_CostStatic-selected-caption-FX_sCost-before-mutation.png | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Properties Caption ellipsis button (FX_CostStatic, once) | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-03-caption-prompt-String-FX_sCost-does-not-exist.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-03-caption-prompt-String-FX_sCost-does-not-exist.png | ok |
| 15 | mcp__playwright__browser_click | element=Prompt Yes button (single answer for FX_sCost) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-04-String-dialog-FX_sCost-default-value-before-edit.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-04-String-dialog-FX_sCost-default-value-before-edit.png | ok |
| 19 | mcp__playwright__browser_click | element=String dialog String Value cell (FX_sCost) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 22 | mcp__playwright__browser_type | element=String Value editor (active, FX_sCost) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=e1251')[22m [2m    - locator resolved to <textarea role="textbox" autocomplete="off" readonly="readonly" id="textarea-4527-inputEl" componentid="textarea-4527" name="textarea-4527-inputEl" aria-labelledby="textarea-4527-labelEl" class="mg-property-description x-form-text x-form-text-default x-form-textarea"></textarea>[22m [2m    - fill("Cost")[22m [2m  - attempting fil… (1057 chars) |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_type | element=String Value cell editor (active textbox, FX_sCost) | ok |
| 25 | mcp__playwright__browser_press_key | key=Tab | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-05-String-dialog-FX_sCost-value-Cost-committed-before-OK.png | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-05-String-dialog-FX_sCost-value-Cost-committed-before-OK.png | ok |
| 29 | mcp__playwright__browser_click | element=String dialog OK button (FX_sCost, once) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-06-after-String-OK-FX_sCost-designer-state.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-06-after-String-OK-FX_sCost-designer-state.png | ok |
| 32 | mcp__playwright__browser_click | element=Designer Edit menu | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Edit menu String item | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 37 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 38 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 39 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sCost | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-07-Edit-String-readonly-FX_sCost-value-Cost.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-07-Edit-String-readonly-FX_sCost-value-Cost.png | ok |
| 44 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 45 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 46 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 47 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sItem (read-only select) | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-08-Edit-String-readonly-FX_sItem-reconfirmed-Item.png | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-08-Edit-String-readonly-FX_sItem-reconfirmed-Item.png | ok |
| 52 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 53 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 54 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 55 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sDescription (read-only select) | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 60 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 61 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 62 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sUM (read-only select) | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Global Objects Cancel button (no changes) | ok |
| 68 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t5-09-final-designer-state-after-cancel-pending-changes.png | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t5-09-final-designer-state-after-cancel-pending-changes.png | ok |
| 71 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T5-FX_sCost-caption-report.md | ok |
| 72 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T5-FX_sCost-caption-report.md | ok |
| 73 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T5-FX_sCost-caption-report.md | ok |
| 74 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 75 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |