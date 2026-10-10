# controller-generated audit (not worker prose)

11 actions, 8 reads; prohibited-tool hits=2; errors=2; turns=36; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_ItemBase","FX_HelloWorldProject01","fxitms","FX_sDescription","FX_sItem","FX_sCost"]

Key sequence: [{"order":20,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#27 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e38')\u001b[22m\n\u001b[2m    - locator resolved to <div role=\"button\" tabindex=\"-1\" aria-disabled=\"true\" aria-label=\"System Notes\" id=\"mgtoolbarbutton-1118\" data-mgcompname=\"notesButton\" componentid=\"mgtoolbarbutton-1118\" class=\"x-btn mg-notes x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small x-item-disabled x-btn-disabled\">…</div>\u001b[22m\n\u001b[2m  - attempting click act… (1046 chars)","#32 mcp__playwright__browser_type: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e1084')\u001b[22m\n\u001b[2m    - locator resolved to <input size=\"1\" type=\"text\" tabindex=\"-1\" role=\"textbox\" maxlength=\"80\" data-ref=\"inputEl\" autocomplete=\"off\" readonly=\"readonly\" aria-readonly=\"true\" aria-required=\"false\" id=\"mgedit-3010-inputEl\" componentid=\"mgedit-3010\" name=\"mgedit-3010-inputEl\" aria-labelledby=\"mgedit-3010-labelEl\" data-mgcompnamevalue=\"CollectionNameEdit\" cl… (1170 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T14-fx-items-conditional-checkin.md | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T15-00-fresh-snapshot-precheck.yml | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Close Panel IDO Properties (native Form-tab close) | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Close Panel IDOs (native Form-tab close) | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T15-01-after-IDOs-and-IDOProperties-closed.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T15-01-after-IDOs-and-IDOProperties-closed.png | ok |
| 13 | mcp__playwright__browser_click | element=Open toolbar button (Select Form) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T19-03-14-561Z.yml | ok |
| 17 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 18 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T15-02-select-form-filtered-idocollections.yml | ok |
| 19 | Grep | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_press_key | key=Tab | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Select Form row IDOs / IdoCollections | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T19-03-33-895Z.yml | ok |
| 25 | mcp__playwright__browser_click | element=Select Form OK button (IDOs / IdoCollections selected) | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Filter in Place toolbar button (IDOs, reopened) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e38')[22m [2m    - locator resolved to <div role="button" tabindex="-1" aria-disabled="true" aria-label="System Notes" id="mgtoolbarbutton-1118" data-mgcompname="notesButton" componentid="mgtoolbarbutton-1118" class="x-btn mg-notes x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small x-item-disabled x-btn-disabled">…</div>[22m [2m  - attempting click act… (1046 chars) |
| 28 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T15-03-fresh-snapshot-after-timeout.yml | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Filter in Place toolbar button (IDOs, reopened, current ref) | ok |
| 31 | Grep | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_type | element=IDO Name criteria textbox (IDOs Filter in Place, reopened) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e1084')[22m [2m    - locator resolved to <input size="1" type="text" tabindex="-1" role="textbox" maxlength="80" data-ref="inputEl" autocomplete="off" readonly="readonly" aria-readonly="true" aria-required="false" id="mgedit-3010-inputEl" componentid="mgedit-3010" name="mgedit-3010-inputEl" aria-labelledby="mgedit-3010-labelEl" data-mgcompnamevalue="CollectionNameEdit" cl… (1170 chars) |
| 33 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T15-04-fresh-snapshot-corrected-inspection.yml | ok |
| 34 | Grep | (no key/element/filename argument) | ok |
| 35 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T15-ido-close-reopen-persistence.md | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T15-ido-close-reopen-persistence.md | ok |
| 37 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T15-ido-close-reopen-persistence.md | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |