# controller-generated audit (not worker prose)

11 actions, 17 reads; prohibited-tool hits=0; errors=1; turns=47; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":27,"key":"ArrowRight","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: ["#5 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\assets\FX_Login\FX_LoginPortal.cs.txt | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-133-minimal-fx-loginportal-with-client-validation-and-.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Glob | (no key/element/filename argument) | ok |
| 11 | Glob | (no key/element/filename argument) | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t15-csharp-form-script-method-installation.md | ok |
| 13 | mcp__playwright__browser_tabs | action=list | ok |
| 14 | mcp__playwright__browser_tabs | action=select | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Form menu button in Designer toolbar | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=FX_LoginPortal menu item in Form recent list | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-26T15-38-14-665Z.yml | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t1-01-designer-fx-loginportal-opened-user-scope-before-behavior.png | ok |
| 23 | mcp__playwright__browser_click | element=Behavior property group in Form Properties | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-26T15-38-29-262Z.yml | ok |
| 27 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t1-02-behavior-group-after-arrowright-readonly.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t1-02-behavior-group-after-arrowright-readonly.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=Properties toolbar expand-all button | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t1-03-fx-loginportal-behavior-script-language-visual-csharp.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t1-03-fx-loginportal-behavior-script-language-visual-csharp.png | ok |
| 37 | mcp__playwright__browser_tabs | action=select | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t1-04-webclient-account-header-and-session-state-readonly.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t1-04-webclient-account-header-and-session-state-readonly.png | ok |
| 40 | mcp__playwright__browser_tabs | action=select | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Edit menu in Designer top menu bar | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Form Script menu item in Edit menu | ok |
| 45 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t1-05-form-script-editor-readonly-precompare-fx-loginportal.png | ok |
| 46 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t1-05-form-script-editor-readonly-precompare-fx-loginportal.png | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=Cancel button in Script Editor | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t1-06-after-form-script-cancel-designer-clean.png | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t1-06-after-form-script-cancel-designer-clean.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t1-01-designer-fx-loginportal-opened-user-scope-before-behavior.png | ok |
| 53 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-138\T1-preflight-summary.md | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-138\T1-preflight-summary.md | ok |
| 55 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |