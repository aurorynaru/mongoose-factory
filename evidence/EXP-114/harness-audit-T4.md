# controller-generated audit (not worker prose)

28 actions, 41 reads; prohibited-tool hits=0; errors=1; turns=120; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticHome","GridItems","FX_sHome"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#9 mcp__playwright__browser_snapshot: ### Error\nError: Ref e244 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4a-start-before-close-state.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4a-start-before-close-state.png | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e244 not found in the current page snapshot. Try capturing new snapshot. |
| 10 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-recovery-untargeted-snapshot.yml | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-recovery-untargeted-snapshot.yml | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-recovery-untargeted-snapshot.yml | ok |
| 13 | mcp__playwright__browser_click | element=closable FX_CustomerPortal tab close control (Form-tab) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4b-after-form-tab-close.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4b-after-form-tab-close.png | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Form menu in Designer navigation | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4c-form-menu-open-recent-forms.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4c-form-menu-open-recent-forms.png | ok |
| 20 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-formmenu-untargeted-snapshot.yml | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=FX_CustomerPortal entry in Form menu recent forms | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4d-reopened-form-initial.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4d-reopened-form-initial.png | ok |
| 25 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-reopened-untargeted-snapshot.yml | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-reopened-untargeted-snapshot.yml | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-reopened-untargeted-snapshot.yml | ok |
| 28 | mcp__playwright__browser_click | element=Expand Panel button for Details panel | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4d-details-expanded-after-reopen.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4d-details-expanded-after-reopen.png | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-expanded-untargeted-snapshot.yml | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-expanded-untargeted-snapshot.yml | ok |
| 33 | mcp__playwright__browser_click | element=Components tab in Details panel | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4e-components-tab-after-reopen.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4e-components-tab-after-reopen.png | ok |
| 36 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-components-untargeted-snapshot.yml | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-components-untargeted-snapshot.yml | ok |
| 38 | mcp__playwright__browser_click | element=Expand button of Components tree (after reopen) | ok |
| 39 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-tree-expanded-untargeted-snapshot.yml | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tree-expanded-untargeted-snapshot.yml | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tree-expanded-untargeted-snapshot.yml | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tree-expanded-untargeted-snapshot.yml | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tree-expanded-untargeted-snapshot.yml | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4f-reopened-tree-both-new-rows-and-canvas.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4f-reopened-tree-both-new-rows-and-canvas.png | ok |
| 46 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4g-tree-scrolled-to-new-rows.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4g-tree-scrolled-to-new-rows.png | ok |
| 50 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4h-tree-scrolled-homepage-rows.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4h-tree-scrolled-homepage-rows.png | ok |
| 53 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4i-tree-scrolled-up-to-gridItems-row.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4i-tree-scrolled-up-to-gridItems-row.png | ok |
| 56 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4j-tree-both-new-rows-visible.png | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4j-tree-both-new-rows-visible.png | ok |
| 59 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-select-untargeted-snapshot.yml | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-select-untargeted-snapshot.yml | ok |
| 61 | mcp__playwright__browser_click | element=StaticHome row in Components tree (select to read properties) | ok |
| 62 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4k-staticHome-properties-after-reopen.png | ok |
| 63 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4k-staticHome-properties-after-reopen.png | ok |
| 64 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4l-staticHome-layout-and-nocolon-after-reopen.png | ok |
| 67 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4l-staticHome-layout-and-nocolon-after-reopen.png | ok |
| 68 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4m-staticHome-size-misc-after-reopen.png | ok |
| 70 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4m-staticHome-size-misc-after-reopen.png | ok |
| 71 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4n-staticHome-layout-size-after-reopen.png | ok |
| 73 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4n-staticHome-layout-size-after-reopen.png | ok |
| 74 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4o-staticHome-layout-misc-after-reopen.png | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4o-staticHome-layout-misc-after-reopen.png | ok |
| 77 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4p-staticHome-layout-misc-nocolon-after-reopen.png | ok |
| 79 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4p-staticHome-layout-misc-nocolon-after-reopen.png | ok |
| 80 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4q-staticHome-misc-specific-attributes-after-reopen.png | ok |
| 82 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4q-staticHome-misc-specific-attributes-after-reopen.png | ok |
| 83 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-select-untargeted-snapshot.yml | ok |
| 84 | mcp__playwright__browser_click | element=GridItems row in Components tree (select to read properties) | ok |
| 85 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4r-gridItems-properties-after-reopen.png | ok |
| 86 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4r-gridItems-properties-after-reopen.png | ok |
| 87 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4s-gridItems-properties-after-wait.png | ok |
| 89 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4s-gridItems-properties-after-wait.png | ok |
| 90 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-gridItems-reselect-untargeted-snapshot.yml | ok |
| 91 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-gridItems-reselect-untargeted-snapshot.yml | ok |
| 92 | mcp__playwright__browser_click | element=GridItems row in Components tree (second select attempt) | ok |
| 93 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4t-gridItems-properties-second-select.png | ok |
| 94 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4t-gridItems-properties-second-select.png | ok |
| 95 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-gridItems-reselect-untargeted-snapshot.yml | ok |
| 96 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-gridItems-reselect-untargeted-snapshot.yml | ok |
| 97 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-gridItems-reselect-untargeted-snapshot.yml | ok |
| 98 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-gridItems-reselect-untargeted-snapshot.yml | ok |
| 99 | mcp__playwright__browser_click | element=Form tab in Properties panel (view-only switch) | ok |
| 100 | mcp__playwright__browser_snapshot | filename=evidence/EXP-114/t4-tabswitch-untargeted-snapshot.yml | ok |
| 101 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tabswitch-untargeted-snapshot.yml | ok |
| 102 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tabswitch-untargeted-snapshot.yml | ok |
| 103 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tabswitch-untargeted-snapshot.yml | ok |
| 104 | mcp__playwright__browser_click | element=Component tab in Properties panel (view-only switch back) | ok |
| 105 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4u-gridItems-properties-after-tab-switch.png | ok |
| 106 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4u-gridItems-properties-after-tab-switch.png | ok |
| 107 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tabswitch-untargeted-snapshot.yml | ok |
| 108 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4-tabswitch-untargeted-snapshot.yml | ok |
| 109 | mcp__playwright__browser_click | element=GridItems row Type cell in Components tree (select to read properties) | ok |
| 110 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4v-gridItems-after-type-cell-click.png | ok |
| 111 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4v-gridItems-after-type-cell-click.png | ok |
| 112 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 113 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 114 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4w-gridItems-datasource-binding-after-reopen.png | ok |
| 115 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4w-gridItems-datasource-binding-after-reopen.png | ok |
| 116 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 117 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-114/t4x-gridItems-layout-size-after-reopen.png | ok |
| 118 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-114\t4x-gridItems-layout-size-after-reopen.png | ok |
| 119 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 120 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-114-hello-world-part-7-section-11-statichome-griditems.md | ok |
| 121 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-114-hello-world-part-7-section-11-statichome-griditems.md | ok |
| 122 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-114-hello-world-part-7-section-11-statichome-griditems.md | ok |