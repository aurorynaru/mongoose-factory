# controller-generated audit (not worker prose)

0 actions, 4 reads; prohibited-tool hits=0; errors=2; turns=10; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_ItemBase","FX_HelloWorldProject01","fxitms","FX_sDescription","FX_sItem","FX_sCost"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#7 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m","#8 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Glob | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\harness-audit-T1.md | ok |
| 5 | Glob | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T2-00-recovery-current-browser-state.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-049/T2-00-recovery-current-browser-state.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-24-final-webclient-state-after-T1.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-23-designer-scope-confirmed-IdoPropertyClasses-design-view.png | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-11-idos-target-FX_Items-after-F4-settled.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-19-sqltables-target-FX_Items-after-F4-settled.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-00-preflight-initial-state.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-09-idos-positive-control-FX_HelloWorld01-after-F4.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-16-sqltables-positive-control-FX_HelloWorld01-after-F4.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-21-idoprojects-FX_HelloWorldProject01-after-F4.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-12-sqltables-form-opened-initial.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-13-sqltables-after-caution-OK-pre-criteria.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-03-FX_ItemBase-after-F4-settled.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T1-05-FX_Cost-after-F4-settled.png | ok |
| 22 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-049\T2-recovery-inspection-checkpoint.md | ok |