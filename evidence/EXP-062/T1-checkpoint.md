# EXP-062 T1 checkpoint (in progress; read-only; zero mutations)

Worker session 9b0b9fe4-1d91-4845-af41-7213db776f76; task_message_id fa975f76-19c0-4e4a-bbd4-c47d334fd337; run R-20261011-231213-E1AR, cycle 0, task T1.

## Browser actions so far (cumulative)
1. tabs list (read-only) -> tab 0 Designer (FX_Items, MGForm=FX_Items) current; tab 1 Web Client (favoriteContext=FX_Items).
2. fresh untargeted snapshot of tab 0 (snapshot 1): Save, Regenerate, Undo, Redo disabled; one Form tab "FX_Items".
3. screenshot attempt 1 -> TimeoutError (waiting for fonts). Retry 2 -> TimeoutError.
4. tabs select index 0 (tab 0 already current; select issued after list; succeeded).
5. screenshot attempt 3 -> saved `t1-01-designer-initial-identity-scope-save-disabled.png` (viewed; shows FX_Items tab, Save greyed, footer User scope).
6. click Properties panel "Form" tab (view only) -> snapshot saved `evidence/playwright/page-2026-10-11T15-13-11-696Z.yml`.

## Form-level baseline (Form tab, read from snapshot)
- Name `FX_Items`; Caption blank; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`.
- Theme Class blank; Background Color blank; Foreground `#000000`; Background Image blank; Icon blank.
- Initial Command `Refresh`; Script Language `Visual Basic`; Close Box `True`; Minimize/Maximize Box `True`; Filter Form blank; Enable Advanced Filter `False`.
- Help blank; Help Context ID `-1`; Help File Name blank.
- Splitter `Vertical`; Splitter Position `11`; Pane 0 Scroll Bars `Never`; Pane 1 Scroll Bars `As Needed`; Unit `Char`; Size `69; 21`; Synchronize FlexLayout attributes `True`.
- Footer: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

## Components grid (from snapshot 1; 17 entries; matches EXP-058 inventory)
| Name | Type | Data Source | Pane | Container | Tab | Event to generate (grid) |
| Pane (00) | container | | | | | |
| FormCollectionGrid | Grid | | 0 | | 0 | |
| FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | |
| FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | |
| FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | |
| FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | |
| Pane (01) | container | | | | | |
| FX_ItemStatic | Static | | 1 | | 5 | |
| FX_ItemEdit | Edit | object.FX_Item | 1 | | 6 | |
| FX_DescriptionStatic | Static | | 1 | | 7 | |
| FX_DescriptionEdit | Edit | object.FX_Description | 1 | | 8 | |
| FX_CostStatic | Static | | 1 | | 9 | |
| FX_CostEdit | Edit | object.FX_Cost | 1 | | 10 | |
| FX_UMStatic | Static | | 1 | | 11 | |
| FX_UMCombobox | ComboBox | object.FX_UM | 1 | | 12 | |
| FX_RefreshButton | PushButton | (blank) | 1 | | 0 | FX_Test |
| FX_VarTestEdit | Edit | variables.FX_VarTest | 1 | | 0 | (blank) |

## Per-component readbacks (Component tab; each from the snapshot written by the row click; values as read)
- FX_RefreshButton (PushButton; snapshot `page-2026-10-11T15-13-34-430Z.yml`): Caption literal `FX_Refresh` (not a string ID; Caption ellipsis button present); Binding Type None; Binding blank; Data Source blank; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Tab Order 0; Primary (authoritative Events row) `FX_Test`; Data Change, Lose Focus, Gain Focus blank; Drag From 0 events, Drop On 0 events; Required False; Read-Only False; Hidden False; Theme Class blank; Foreground `#000000`; Right-Click Menu blank.
- FX_ItemStatic (Static; `page-2026-10-11T15-13-56-702Z.yml`): Caption `FX_sItem` (string ID); Binding Type None; Binding blank; Data Source blank; Size `20; 1`; Location `1; 3`; Tab Order 5; Primary blank; Required False; Hidden False; Read-Only False; Unit Char.
- FX_ItemEdit (Edit; `page-2026-10-11T15-14-04-275Z.yml`): Caption `C(FX_ItemStatic)`; Binding Type Property; Binding `object.FX_Item`; Size `37.05; 2`; Location `1; 23.75`; Tab 6; Primary/Data Change/Lose Focus/Gain Focus blank; Required False; Hidden False.
- FX_DescriptionStatic (Static; `page-2026-10-11T15-14-10-904Z.yml`): Caption `FX_sDescription`; Binding Type None; Size `20; 1`; Location `3.25; 3`; Tab 7; Primary blank; Required False.
- FX_DescriptionEdit (Edit; `page-2026-10-11T15-14-15-355Z.yml`): Caption `C(FX_DescriptionStatic)`; Binding Type Property; Binding `object.FX_Description`; Size `37.05; 2`; Location `3.25; 23.75`; Tab 8; Required False.
- FX_CostStatic (Static; `page-2026-10-11T15-14-20-050Z.yml`): Caption `FX_sCost`; Binding Type None; Size `20; 1`; Location `5.5; 3`; Tab 9; Required False.
- FX_CostEdit (Edit; `page-2026-10-11T15-14-24-446Z.yml`): Caption `C(FX_CostStatic)`; Binding Type Property; Binding `object.FX_Cost`; Size `37.05; 2`; Location `5.5; 23.75`; Tab 10; Required False.
- FX_UMStatic (Static; `page-2026-10-11T15-14-28-978Z.yml`): Caption `FX_sUM`; Binding Type None; Size `20; 1`; Location `7.75; 3`; Tab 11; Required False.
- FX_UMCombobox (EnhancedCombo, Type ComboBox; `page-2026-10-11T15-14-33-548Z.yml`): Caption `C(FX_UMStatic)`; Binding Type Property; Binding `object.FX_UM`; Size `37.25; 2.15`; Location `7.75; 23.75`; Tab 12; Required False.
- Note: the four Static captions FX_sItem/FX_sDescription/FX_sCost/FX_sUM are string IDs and the Edit captions are C(<paired Static>) — consistent with EXP-058 readbacks.

## FX_VarTestEdit (selected; Component tab; read from screenshot t1-01 and snapshot 1)
Name FX_VarTestEdit; Type Edit; From Device Master True; Caption blank; Theme Class blank; Foreground #000000; Read-Only/Disable False; Tab Read-Only Field False; Hidden False; No Tab Stop False; Auto Complete False; Right-Click Menu blank; Enabled When/Visible When/Required When blank; Binding Type Variable; Binding `variables.FX_VarTest`; Required False; Location `12.7222222222222; 30.25`; Size `37.05; 2`; Tab Order `0`; Unit Char; Primary/Data Change/Lose Focus/Gain Focus blank; Drag From/Drop On 0 events; Data Source row blank (as EXP-058 observed; grid shows variables.FX_VarTest).
