# EXP-045 — T5 component selection and read-only Caption inspection (cycle 5)

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 5 · task T5 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `d0ad50e9-ac38-4b33-9215-06fefa967c69`.
Date: 2026-10-10. Browser: Designer tab (`?MGForm=FX_UMs`), inherited from T3/T4. No login, no reload, no navigation, no save, no close/reopen.

## Outcome (short)

- **Component selection: PASS.** The FX_UM label component was identified in the Details > Components grid as `FX_UMStatic` (Type Static, Pane 1, Tab 3) and selected once. The Properties header reads `FX_UMStatic (Static)`.
- **Caption ellipsis dialog: opened once, STOPPED.** Opening it raised an in-page Mongoose alertdialog **"String FX_sUM does not exist. Create it?"** with **Yes** (focused) and **No**. This is a string-creation prompt, which the T5 brief classes as unexpected. Per the brief it was **not answered**. No Yes, No, OK, Cancel, value entry or commit was pressed.
- **FX_Description (FX_DescriptionStatic) label: NOT selected, NOT inspected.** Stopped after the unexpected prompt, as the brief requires.
- **Save and Undo: disabled** at the final read. The prompt is still open (the stop state is documented below).

## Starting state (fresh snapshot, before any T5 action)

| Item | Observed |
|---|---|
| Browser tab | Tab 1 Designer selected after one tab selection from Tab 0 (Web Client). Tab 0 was not acted on. |
| Form tab | `FX_UMs` tab selected; `Property Classes` (vendor) tab present, not selected. |
| Form identity | Properties (Form): Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True. |
| Scope | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (`t5-01`). |
| Save / Undo / Redo | Save disabled; Undo disabled; Redo disabled. |
| Dialog | None. |
| Details panel | Expanded; Components tab selected; `Pane (00)` and `Pane (01)` collapsed. |
| Console | Designer tab shows 1 error (pre-existing; not diagnosed). |

Evidence: `t5-01-designer-FX_UMs-start-save-undo-disabled-before-expand.png`.

## Step 1 — Components grid Expand (one click)

- Action: clicked the Components grid's own `Expand` toolbar button once (not ArrowRight, not the canvas).
- Result: no error. The fresh snapshot shows the tree expanded. The grid now lists the following rows (Name / Type / Data Source / Pane / Container / Tab):

| Name | Type | Data Source | Pane | Container | Tab | Identified as |
|---|---|---|---|---|---|---|
| Pane (00) | (pane) | | | | | container |
| FormCollectionGrid | Grid | objects | 0 | | 0 | the grid |
| FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 1 | grid column (not a label) |
| FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | grid column (not a label) |
| Pane (01) | (pane) | | | | | container |
| **FX_UMStatic** | **Static** | (blank) | 1 | (blank) | 3 | **FX_UM label** |
| FX_UMEdit | Edit | object.FX_UM | 1 | | 4 | FX_UM editor (not a label) |
| **FX_DescriptionStatic** | **Static** | (blank) | 1 | | 5 | **FX_Description label** |
| FX_DescriptionEdit | Edit | object.FX_Description | 1 | | 6 | FX_Description editor (not a label) |

Evidence: `t5-02-components-grid-expanded-FX_UMStatic-FX_DescriptionStatic-rows.png`. **Screenshot limit (checked):** the image shows the expanded tree down to `Pane (01)` with `FX_UMStatic` cut off at the bottom edge; `FX_DescriptionStatic` and the Edit rows are **not visible** in it. Pane (00) is still highlighted from T4 and the Properties panel shows the Form (`FX_UMs`, Caption blank). The full row list above comes from the accessibility snapshot, not from this image.

Identity note: the two label rows are unique in the grid. The label/editor pairs are distinguished by Type (Static vs Edit) and by the Edit rows being bound to `object.FX_UM` / `object.FX_Description`. A Static label has no Data Source, so the label's identity rests on its generated Name and Type, confirmed by the Properties header in step 2. The previously logged name `FX_UMStatic` from T4's failed locator log is now confirmed by a supported selection.

## Step 2 — select the FX_UM label row (one click)

- Action: clicked the `FX_UMStatic` tree row once (selection only).
- Fresh untargeted snapshot: the row is `[active]`. The Properties panel header textbox reads **`FX_UMStatic (Static)`**. Properties rows: Name `FX_UMStatic`; Description (blank); **Caption `FX_sUM`** (with a blue ellipsis button); Type `Static`; From Device Master `True`; then collapsed groups Appearance, Behavior, Data Source, Events, Help, Inheritance, Layout, Miscellaneous.
- The canvas highlights the `FX_sUM` label at the top of the design surface.
- Evidence: `t5-03-FX_UMStatic-selected-properties-header-caption-FX_sUM-before-dialog.png`. Screenshot checked: header `FX_UMStatic (Static)`, Name `FX_UMStatic`, Caption `FX_sUM`, Type `Static`, Components row highlighted. It does **not** show the string resource's existence or value.

Selection proof: **observed** (Properties header and Name row, plus the highlighted Components row).

## Step 3 — open the Caption ellipsis dialog for FX_UMStatic (one click; no commit)

- Action: clicked the Caption row's ellipsis button once (snapshot ref `e912`; the tool's generated code used a DOM id locator `#button-4549`, which is tool output, not a worker script).
- Result: **an alertdialog opened**, titled `Infor Mongoose Application Development Framework`, text **`String FX_sUM does not exist. Create it?`**, with buttons **Yes** (focused, `[active]`) and **No**.
- Behind the prompt, the in-page `String` dialog is open (heading `String`, sub-tab `Properties`, a search box and two icon buttons, an empty property area, and OK / Help at the bottom). Its values could not be read because the prompt is modal.
- Evidence: `t5-04-FX_UMStatic-caption-ellipsis-dialog-opened-read-only.png`. Screenshot checked: the alert text and Yes / No buttons are visible; the String dialog behind is mostly blank. The screenshot does **not** show a literal value or any existing `FX_sUM` value.

Identity established by this step: the ellipsis dialog targets string ID **`FX_sUM`** (matches the Caption property and the T1 finding that `FX_UMBase` carries Label String ID `FX_sUM`).

Existence established by this step: the Mongoose prompt states **`FX_sUM` does not exist**. This is an observed in-product message. It is not a database read, and no supported read-only string lookup exists (T1). Treat it as **observed, not independently verified**.

## Step 4 — stop and no further action

- The prompt is an unexpected string-creation prompt during a read-only step. Per the brief (`If ... an unexpected prompt appears ... STOP without mutation and report the blocker`), no further action was taken:
  - **Yes** not pressed (it would create `FX_sUM` before any literal value was entered and would be a tenant-wide string creation not authorized in T5).
  - **No** not pressed (answering an unexpected prompt requires coordinator review; the outcome of No on the String dialog state is not known).
  - The String dialog's OK/Help and the Caption value were not touched.
  - FX_Description label was not selected; `FX_sDescription` was not opened.
- Verified after the prompt (read-only finds): `Save` **disabled**; `Undo` **disabled**; the only dialog is the alertdialog above.

Evidence: `t5-04` (above). No further screenshot was needed because nothing else changed.

## Assessment against the T5 brief

| Item | Result |
|---|---|
| Expand exactly once | Done (1 click, no error). |
| Identify FX_UM label from Name / Type / Data Source columns | Done: `FX_UMStatic` (Static, Pane 1, Tab 3). |
| Select FX_UM label once and verify Properties header | Done: `FX_UMStatic (Static)`, Caption `FX_sUM`. |
| Open Caption ellipsis dialog once, read ID and value | Opened once. **ID `FX_sUM` shown. Value NOT read.** Prompt "does not exist. Create it?" blocked further reading. |
| Record existing-resource state | **Observed as "does not exist" by the prompt.** Not independently verified. |
| Close with ordinary Cancel if non-mutating | **Not done.** The String dialog behind the prompt shows only OK and Help (no Cancel) in `t5-04`; the modal prompt was not answered. |
| Repeat for FX_Description label | **Not done** (stop condition: unexpected prompt). |
| Commits, value edits, Save, close/reopen, runtime open | **None.** |

## Limitations

- The `String FX_sUM does not exist` message was produced by the product during an ellipsis click. It is not a database read and does not show the string-table state of `FX_sDescription`.
- The literal value of `FX_sUM` (if any) could not be seen, because the prompt blocks the String dialog.
- The grid's Static label rows have no Data Source; their identity depends on the generated Name and on the Properties header after selection.
- Single run. Not replay-verified.

## Blockers and decisions for the coordinator

1. **Unexpected prompt, unanswered.** `String FX_sUM does not exist. Create it?` (Yes / No) is open. The Designer's modal prompt is still on screen. Decide whether the next task should (a) answer **Yes** as the creation path (the String editor would then need the literal value `Unit of Measure`), (b) answer **No** and confirm the String dialog returns to a non-mutating state, or (c) leave it for another review. This is the brief's stop condition.
2. **FX_Description label** (`FX_DescriptionStatic`) has not been selected or inspected. The same ID-and-prompt check is needed for `FX_sDescription`.
3. **Close path.** The String dialog shows OK and Help only (no Cancel). Its non-mutating close path is therefore unverified; OK was not pressed because it may commit the string.
