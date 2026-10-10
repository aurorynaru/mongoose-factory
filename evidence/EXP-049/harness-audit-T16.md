# controller-generated audit (not worker prose)

7 actions, 10 reads; prohibited-tool hits=1; errors=1; turns=31; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_ItemBase","FX_HelloWorldProject01","fxitms","FX_sDescription","FX_sItem","FX_sCost"]

Key sequence: [{"order":17,"key":"Tab","result":"ok"},{"order":21,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#28 mcp__playwright__browser_click: ### Error\nError: Ref f1e1801 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T15-ido-close-reopen-persistence.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T16-00-fresh-snapshot-initial-mode.yml | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T16-01-initial-mode-before-any-click.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-01-initial-mode-before-any-click.png | ok |
| 10 | mcp__playwright__browser_click | element=Filter in Place toolbar button (IDOs, single authorized transition) | ok |
| 11 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T16-02-fresh-snapshot-after-single-FiP-before-typing.yml | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-02-fresh-snapshot-after-single-FiP-before-typing.yml | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-02-fresh-snapshot-after-single-FiP-before-typing.yml | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_type | element=IDO Name criteria textbox (IDOs, editable criteria mode after single FiP) | ok |
| 17 | mcp__playwright__browser_press_key | key=Tab | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T16-03-idos-criterion-FX_Items-before-F4.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-03-idos-criterion-FX_Items-before-F4.png | ok |
| 21 | mcp__playwright__browser_press_key | key=F4 | ok |
| 22 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_snapshot | filename=evidence/EXP-049/T16-04-fresh-snapshot-after-F4-settled.yml | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-04-fresh-snapshot-after-F4-settled.yml | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T16-05-idos-FX_Items-after-F4-settled.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-05-idos-FX_Items-after-F4-settled.png | ok |
| 28 | mcp__playwright__browser_click | element=Properties button (IDO detail, read-only view) | error: ### Error Error: Ref f1e1801 not found in the current page snapshot. Try capturing new snapshot. |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Properties button (IDO detail, read-only view) | ok |
| 31 | Grep | (no key/element/filename argument) | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T16-06-ido-properties-recovered-rows.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-06-ido-properties-recovered-rows.png | ok |
| 35 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-ido-reopen-recovery.md | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T16-ido-reopen-recovery.md | ok |
| 37 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |