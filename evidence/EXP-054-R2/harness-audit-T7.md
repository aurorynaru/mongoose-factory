# controller-generated audit (not worker prose)

16 actions, 22 reads; prohibited-tool hits=0; errors=0; turns=56; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_RefreshButton","FX_Refresh","StdFormRefresh"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t7-snapshot-00-pre-clear-fresh-runtime.md | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t7-snapshot-01-pre-clear-fresh-web-client-runtime.md | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-snapshot-01-pre-clear-fresh-web-client-runtime.md | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-01-pre-clear-inherited-log-36-rows-runtime-clean.png | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_hover | element=DevTools toolbar X-shaped control (hover to read tooltip only) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-02-hover-DevTools-X-control-tooltip-before-clear.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-02-hover-DevTools-X-control-tooltip-before-clear.png | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=DevTools Clear control (X, tooltip 'Clear'): the one permitted log clear | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-03-post-single-clear-Log-Messages-visibly-empty-baseline.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-03-post-single-clear-Log-Messages-visibly-empty-baseline.png | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | Grep | (no key/element/filename argument) | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t7-04-cleared-log-baseline-accessibility-snapshot.md | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=FX_Refresh button (FX_RefreshButton) on FX_Items runtime: the single controlled activation | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-05-immediate-after-single-FX_Refresh-activation.png | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | Grep | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t7-06-settled-after-3s-accessibility-snapshot-runtime-and-log.md | ok |
| 31 | Grep | (no key/element/filename argument) | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-07-settled-after-3s-runtime-and-log-first-rows.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-07-settled-after-3s-runtime-and-log-first-rows.png | ok |
| 35 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\T7-diagnostic-sequence-verbatim-after-single-FX_Refresh-activation.md | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=View menu in Web Client menu bar (restoration) | ok |
| 38 | Grep | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=User Preferences... menu item (restoration) | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Diagnostics category option in User Preferences (restoration) | ok |
| 42 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t7-08-restoration-preferences-General-tab-before-change-fresh.md | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Enabled label on General tab (restoration ON to OFF) | ok |
| 45 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-09-restoration-General-Enabled-unchecked-before-OK.png | ok |
| 46 | Grep | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=OK button of User Preferences dialog (restoration, single commit) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-10-restoration-post-OK-dialog-closed-runtime-state.png | ok |
| 49 | Grep | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=View menu in Web Client menu bar (restoration readback) | ok |
| 51 | Grep | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=User Preferences... menu item (readback) | ok |
| 53 | Grep | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Diagnostics category option in User Preferences (readback) | ok |
| 55 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t7-11-readback-fresh-Diagnostics-General-tab.md | ok |
| 56 | Grep | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-12-readback-General-tab-Enabled-OFF.png | ok |
| 58 | mcp__playwright__browser_click | element=Form tab in Diagnostics preferences (readback) | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-13-readback-Form-tab-Events-Include-ValueChanged-ON.png | ok |
| 60 | Grep | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_click | element=IDO Collections tab in Diagnostics preferences (readback) | ok |
| 62 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-14-readback-IDO-Collections-tab-all-off.png | ok |
| 63 | Grep | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=Others tab in Diagnostics preferences (readback) | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-15-readback-Others-tab-all-off.png | ok |
| 66 | Grep | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Close Window button of User Preferences dialog (readback, no OK) | ok |
| 68 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t7-16-final-preservation-runtime-and-log-after-restoration.md | ok |
| 69 | Grep | (no key/element/filename argument) | ok |
| 70 | Grep | (no key/element/filename argument) | ok |
| 71 | Grep | (no key/element/filename argument) | ok |
| 72 | Grep | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t7-17-final-preservation-runtime-and-log-after-restoration.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-17-final-preservation-runtime-and-log-after-restoration.png | ok |
| 75 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\T7-controlled-clear-activation-and-diagnostics-restoration-report.md | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-05-immediate-after-single-FX_Refresh-activation.png | ok |
| 77 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-09-restoration-General-Enabled-unchecked-before-OK.png | ok |
| 78 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-12-readback-General-tab-Enabled-OFF.png | ok |
| 79 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-13-readback-Form-tab-Events-Include-ValueChanged-ON.png | ok |
| 80 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-14-readback-IDO-Collections-tab-all-off.png | ok |
| 81 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-15-readback-Others-tab-all-off.png | ok |
| 82 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t7-10-restoration-post-OK-dialog-closed-runtime-state.png | ok |
| 83 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\T7-controlled-clear-activation-and-diagnostics-restoration-report.md | ok |
| 84 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md | ok |
| 85 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md | ok |