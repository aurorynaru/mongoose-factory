# controller-generated audit (not worker prose)

13 actions, 14 reads; prohibited-tool hits=1; errors=0; turns=45; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_ItemBase","FX_HelloWorldProject01","fxitms","FX_sDescription","FX_sItem","FX_sCost"]

Key sequence: [{"order":10,"key":"Tab","result":"ok"},{"order":13,"key":"Tab","result":"ok"},{"order":21,"key":"Tab","result":"ok"},{"order":27,"key":"Tab","result":"ok"},{"order":30,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T9-wizard-four-property-precommit.md | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T10-00-fresh-snapshot-start.yml | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-00-fresh-snapshot-start.yml | ok |
| 6 | mcp__playwright__browser_click | element=Property Class lookup Open button (row 3 active editor) | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Property Class option FX_Cost | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_press_key | key=Tab | ok |
| 11 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T10-01-snapshot-after-row3-class-committed.yml | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-01-snapshot-after-row3-class-committed.yml | ok |
| 13 | mcp__playwright__browser_press_key | key=Tab | ok |
| 14 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T10-02-snapshot-after-row3-datatype-committed.yml | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-02-snapshot-after-row3-datatype-committed.yml | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Add Row button (Data Maintenance Wizard) | ok |
| 19 | Grep | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_type | element=Property Name textbox, property row 4 | ok |
| 21 | mcp__playwright__browser_press_key | key=Tab | ok |
| 22 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T10-03-snapshot-after-row4-name.yml | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-03-snapshot-after-row4-name.yml | ok |
| 24 | mcp__playwright__browser_click | element=Property Class lookup Open button (row 4 active editor) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Property Class option FX_UM | ok |
| 27 | mcp__playwright__browser_press_key | key=Tab | ok |
| 28 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T10-04-snapshot-after-row4-class.yml | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-04-snapshot-after-row4-class.yml | ok |
| 30 | mcp__playwright__browser_press_key | key=Tab | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T10-05-snapshot-final-four-rows-precommit.yml | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-05-snapshot-final-four-rows-precommit.yml | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T10-06-wizard-four-rows-precommit-left-columns.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-06-wizard-four-rows-precommit-left-columns.png | ok |
| 35 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T10-07-wizard-four-rows-precommit-scrolled-left-columns.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-07-wizard-four-rows-precommit-scrolled-left-columns.png | ok |
| 38 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T10-08-wizard-four-rows-after-scroll-arrow.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-08-wizard-four-rows-after-scroll-arrow.png | ok |
| 41 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T10-09-snapshot-final-verification.yml | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-09-snapshot-final-verification.yml | ok |
| 43 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-four-property-precommit-verification.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T10-four-property-precommit-verification.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |