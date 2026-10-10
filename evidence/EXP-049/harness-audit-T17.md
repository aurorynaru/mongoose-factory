# controller-generated audit (not worker prose)

16 actions, 15 reads; prohibited-tool hits=2; errors=0; turns=55; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_ItemBase","FX_HelloWorldProject01","fxitms","FX_sDescription","FX_sItem","FX_sCost"]

Key sequence: [{"order":18,"key":"Tab","result":"ok"},{"order":37,"key":"Tab","result":"ok"},{"order":40,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T13-created-sql-table-and-columns-verification.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T15-ido-close-reopen-persistence.md | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T17-00-fresh-snapshot-precheck.yml | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Close Panel Sql Columns (native Form-tab close, first) | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Close Panel Sql Tables (native Form-tab close, second) | ok |
| 12 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T17-01-fresh-snapshot-after-both-closed.yml | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Open toolbar button (Select Form) | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 18 | mcp__playwright__browser_press_key | key=Tab | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T17-02-select-form-filtered-SqlTables.yml | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-02-select-form-filtered-SqlTables.yml | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Select Form row Sql Tables / SqlTables | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Select Form OK button (Sql Tables / SqlTables selected) | ok |
| 26 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T17-03-fresh-snapshot-reopened-sqltables-mode.yml | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-03-fresh-snapshot-reopened-sqltables-mode.yml | ok |
| 29 | mcp__playwright__browser_click | element=Sql Tables caution alert OK (informational, known first-open notice) | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-10T19-12-29-289Z.yml | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T17-04-reopened-sqltables-mode-before-FiP.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-04-reopened-sqltables-mode-before-FiP.png | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=SQL Tables grid Table Name criteria cell (criteria row, FiP mode) | ok |
| 35 | Grep | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_type | element=SQL Tables grid Table Name criteria combobox (active, editable) | ok |
| 37 | mcp__playwright__browser_press_key | key=Tab | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T17-05-sqltables-criterion-FX_Items-before-F4.png | ok |
| 40 | mcp__playwright__browser_press_key | key=F4 | ok |
| 41 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T17-06-fresh-snapshot-after-F4-settled.yml | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T17-07-sqltables-FX_Items-after-F4-settled.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-07-sqltables-FX_Items-after-F4-settled.png | ok |
| 46 | Grep | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=Columns... button (reopened Sql Tables, single open) | ok |
| 48 | Grep | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T17-08-sqlcolumns-reopened-overview-FX_Item-detail.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-08-sqlcolumns-reopened-overview-FX_Item-detail.png | ok |
| 51 | Grep | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=SQL Columns row 3 FX_Cost (selection only) | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T17-09-sqlcolumn-FX_Cost-detail-reopened.png | ok |
| 54 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-09-sqlcolumn-FX_Cost-detail-reopened.png | ok |
| 55 | mcp__playwright__browser_click | element=SQL Columns row 4 FX_UM (selection only) | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T17-10-sqlcolumn-FX_UM-detail-reopened.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-10-sqlcolumn-FX_UM-detail-reopened.png | ok |
| 58 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-sql-close-reopen-persistence.md | ok |
| 59 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-sql-close-reopen-persistence.md | ok |
| 60 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T17-sql-close-reopen-persistence.md | ok |
| 61 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |
| 62 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |