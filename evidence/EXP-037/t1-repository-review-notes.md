# EXP-037 — T1 repository-only review notes

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 0 · Task T1
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `dca24844-a9d8-4859-a73a-e8863d24c34c`)
Browser tool calls: **0**. Mongoose interaction: **none**. Repository writes by this task: this file and `experiments/EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md` only.

Sources read: `AGENTS.md`; `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md`; `experiments/EXP-036-R2-clean-replay-single-button-caption-recovery.md`; `recipes/forms/create-basic-form.md`; `recipes/components/add-component-from-toolbox.md`; `recipes/components/configure-basic-component.md`; `docs/mongoose/transcripts/hello-world-pt3.md`; `docs/mongoose/transcripts/raw/raw-hello-world-pt3.txt` (grep only, for Prompt/Primary/message wording); `docs/mongoose/guides/form-events.md`; `docs/mongoose/guides/form-event-response-types.md`; `docs/mongoose/guides/web-designer.md` (Details panel, lines 20–45); `evidence/EXP-036/t11-13-button-selected-snapshot.md` (Designer accessibility tree, read for baseline values).

---

## 1. Path reconciliation (brief reference → actual repository path)

| Brief reference | Actual path | Status |
|---|---|---|
| AGENTS.md | `AGENTS.md` (repository root) | Confirmed |
| EXP-036 | `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md`; evidence `evidence/EXP-036/` | Confirmed |
| EXP-036-R2 | `experiments/EXP-036-R2-clean-replay-single-button-caption-recovery.md`; evidence `evidence/EXP-036-R2/` | Confirmed |
| Component recipes | `recipes/components/add-component-from-toolbox.md`, `recipes/components/configure-basic-component.md` (plus `recipes/forms/create-basic-form.md`) | Confirmed; all read |
| Part 3 transcript | `docs/mongoose/transcripts/hello-world-pt3.md` | Confirmed |
| Raw Part 3 transcript | `docs/mongoose/transcripts/raw/raw-hello-world-pt3.txt` | **Corrected.** Brief said `transcripts/raw/…`; there is no top-level `transcripts/` folder. |
| Form events guide | `docs/mongoose/guides/form-events.md` | Confirmed |
| Response types guide | `docs/mongoose/guides/form-event-response-types.md` | Confirmed |
| Web Designer guide | `docs/mongoose/guides/web-designer.md` | Additional; Details panel tabs read |
| EXP-037 record | `experiments/EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md` | **Did not exist.** Created by this task. |
| EXP-037 evidence | `evidence/EXP-037/` | **Did not exist.** Created by this task. |

---

## 2. Documented Web Designer workflow (reconciled)

### 2.1 Event Handlers in the Web Designer — `form-events.md` lines 102–120

1. With the form open in the Web Designer, expand the **Form Details** panel.
2. Select the **Event Handlers** tab. The left panel lists the form's handlers (searchable, expandable). The right panel is the handler editor.
3. To add a handler, click **New** (plus). "Provide a name for the handler when prompted," then configure the handler action in the right panel.
4. Each handler action is configured individually. To display a sequenced action, select its sequence number in the expanded area.
5. Repeat for each new action. To delete, each sequenced action must be deleted individually.

Handlers are **form-specific** and not shared across forms (`form-events.md` line 47).

**Reconciled reading for the brief's "one custom event with one action":** a handler named `FX_ButtonPromptEvent01` with one sequenced action (Type Prompt) under Form Details > Event Handlers.

### 2.2 Custom form events — `form-events.md` lines 85–89

A custom form event can be created in three ways: (a) naming an event in a component's event property, for example a push button's **Primary** event (Component property sheet, **Events** button); (b) a handler with the **Generate Event** response type; (c) a script. The brief uses route (a) together with a handler named for the same event. Both are compatible with the docs.

### 2.3 Order of operations

- The brief orders handler first, then Primary. The Part 3 transcript also creates the handler first and then changes Primary to `Test` (transcript steps 7–8, lines 228–243).
- The docs do not state whether a Primary name must already have a handler. Recommended order: handler first, then Primary (avoids a Primary name that points at no handler).

### 2.4 Form events vs Application Event System

- `form-events.md` lines 17 and 23 and `form-event-response-types.md` lines 84–90 state that the Application Event System is separate: it uses **Generate Application Event** and definitions on the Events form.
- `FX_ButtonPromptEvent01` is a **form event**, defined on the form. It must not be created through the Application Event System, and Generate Application Event is prohibited by the brief.

---

## 3. Prompt response type — what is and is not documented locally

### 3.1 Documented (`form-event-response-types.md` lines 197–207)

- The Prompt response type "allows developers to prompt users for actions without writing code."
- The Prompt handler is **asynchronous**: the chain is not suspended; the prompt is displayed after the event chain that runs it completes.
- "You can associate a form event name with each response option." The associated event is generated only when a user selects that response.
- If several Prompt handlers run in one chain, only the last prompt is displayed.
- Enum value: Prompt (48) per the guide's list (`form-event-response-types.md` is the list source, `form-events.md` line 173).

### 3.2 NOT documented locally (gap)

- The name of the message parameter.
- The default response options (for example whether a single OK exists by default).
- Whether a response with no associated event is valid.
- The Parameters editor layout.

### 3.3 Only source for the message field: the Part 3 transcript

- `hello-world-pt3.md` step 6 (lines 197–207): Type = Prompt; open the **Parameters** ellipsis; enter `Hello World` under **Message Text**; confirm.
- Raw transcript lines 60–61: "select the ellipsis next to the parameters field … type in hello world under the message text field and hit ok."
- The transcript is speech-to-text. `hello-world-pt3.md` line 294 says "Do not infer labels from voice transcription." The labels "Parameters" and "Message Text" are therefore **unverified**.

### 3.4 Consequence for the brief

- The brief asks for "supported parameters described in the local guide." The local guide does not describe the Prompt message parameter. This cannot be fully met from the repository.
- The brief also says: if the supported editor requires incompatible configuration, stop. Recommended procedure: open the Parameters editor, record its exact field labels and any response rows before typing, enter only `Factory Test Prompt` into the message field, and leave responses at the editor's default if a single dismissible OK exists with no associated event. If the editor forces an associated event, extra responses, or an unexpected mode, stop before OK and record the state.

---

## 4. Part 3 transcript — what it supports and what it does not

**Narrated only (not verified in this environment):**
- Event Handlers > New, event = Standard Form Refresh Completed, Type = Prompt, Message Text = `Hello World` (steps 5–6).
- Button Events section > Primary Event set to a named event (steps 5 and 8). The transcript says "change our primary event to test," which suggests typing a name. The control type (free text or dropdown) is **unknown**.
- Changing a handler's event name moves it to the new custom event (step 8). This is an illustration, not an invitation to edit a shared form.
- Save, then reopen (step 8).

**Not supported by the transcript:** exact labels; the Primary-event editor's behaviour for custom names; Save timing around the first handler (the transcript does not narrate a Save after creating it, `hello-world-pt3.md` line 310); the Prompt response buttons; runtime behaviour.

**Not replicated (out of factory scope):** the tutorial uses Site Default scope and unprefixed `Items`. `hello-world-pt3.md` lines 16, 149 and 312 prohibit this for the factory.

---

## 5. Baseline from EXP-036 (exact identities and observed values)

Source: `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md` (T7, T10, T11, T12) and `evidence/EXP-036/t11-13-button-selected-snapshot.md`.

| Item | EXP-036 observation | Evidence |
|---|---|---|
| Form | `FX_SingleButtonLab01`, created Classic / BuildFromScratch, Save Template unchecked, one Finish | EXP-036 T5–T7; `evidence/EXP-036/t7-04-form-created-snapshot.md` |
| Scope | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t11-13` line 417 |
| Form Version | `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True | EXP-036 T7; `t11-06-post-reopen-snapshot.md` |
| Button | Exactly one native child under `Pane (00)` | `t11-13` lines 264–265 (Components grid row) |
| Button Name | `FX_SingleButton01` | `t11-13` line 314 (property grid) |
| Button Caption | `Factory Test Button` (literal vs string-resource representation **unresolved**) | `t11-13` line 330 |
| Button Type | Grid `PushButton`; Properties header `FX_SingleButton01 (Button)`; From Device Master True | `t11-13` lines 284, 341, 350 |
| Components row columns | Pane `0`, Tab `0`; **"Event to generate" cell empty** | `t11-13` lines 264–275 (cell at line 271) |
| Events group | Present in the Component property tree, **collapsed**; Primary value **never read** | `t11-13` lines 377–379 |
| Event Handlers | **Never opened** in EXP-036; handler inventory unknown | `t11-13` line 222 (tab exists) |
| Last save | One ordinary Save, `Success: true`; body "Form [FX_SingleButtonLab01] and global object(s) were saved." | EXP-036 T10; `t10-08-after-save-snapshot.md` |

**Baseline gaps for EXP-037 (must be checked before mutation):**
- Event Handlers list: whether any handler already exists, and whether `FX_ButtonPromptEvent01` exists.
- Button Events > Primary value: expected to be empty. The "Event to generate" column being blank is an indirect indication only, not proof.
- Form-level Layout: EXP-036 recorded `GridLeft` only on wizard page 1 (`t5-08`), not as a Form property read after creation. The brief's "expected Form layout" can only be confirmed against the Form properties at preflight.

**Inherited Designer state:** EXP-036-R2 T2 found no Designer tab open and no `FX_SingleButtonLab01`. EXP-036-R2 T4 left a Designer open with no Form. EXP-037 must therefore inspect the tab and Form state at start. Do not assume `FX_SingleButtonLab01` is open.

---

## 6. Environment risks

1. **Designer metadata load error (same day).** EXP-036-R2 (2026-10-10) was blocked when the Classic / BuildFromScratch wizard failed with a `ComponentFlags` enum error (`BREADCRUMB_SHOW_TITLE`, and `BREADCRUMB_DETAIL_ONLY` in an info box). The portal footer read 2026.10.01, whereas the recipes record Mongoose 2026.09.08. Cause is **unresolved**. EXP-037 must treat the same kind of error during the Event Handlers editor, the Parameters dialog, or the Events property as a stop condition. `FX_SingleButtonLab01` itself loaded in EXP-036 on 2026-10-09.
2. **Caption/Name editor precedents.** EXP-036 needed a corrected attempt for Save Template (T5) and mis-hit the Caption resource arrow (T9). The Primary-event editor may behave similarly. Use one fresh snapshot to confirm the editor is active and no list is open before typing, then one entry.
3. **Coordinate clicks not needed.** The Button already exists, so no canvas placement is required. The `browser_mouse_click_xy` prerequisite from EXP-036 does not apply.
4. **Recovery allowance.** EXP-037 has its own allowance: one fresh untargeted snapshot and one corrected visible inspection. Do not spend it on planned reads.
5. **Runtime (optional).** The Prompt is asynchronous and shows after the chain completes (`form-event-response-types.md` lines 203–207). Runtime checks must not click the Button more than once.

---

## 7. Choices I recommend (coordinator may redirect)

1. **Handler first, then Primary**, matching the brief order and the Part 3 narration.
2. **Handler name**: `FX_ButtonPromptEvent01` typed exactly at the New prompt.
3. **Sequence**: accept the editor default; record the sequence number observed.
4. **Prompt editor**: stop before OK if the editor forces an associated event, extra response rows, or a non-literal message field.
5. **Primary entry**: one typed entry of `FX_ButtonPromptEvent01` after a fresh snapshot confirms the Primary editor is active with no dropdown list open. If a dropdown of standard events appears, do not select from it. Stop and record.
6. **Pre-Save evidence**: Event Handlers list (name, sequence, Type Prompt, message), Primary value, and Button Name / Caption / Type / Layout, all read before the one Save.
7. **Runtime check**: optional. If performed, use the ordinary Web Client Select Form route (`recipes/forms/create-basic-form.md` verification step 3: double-click the target row, since OK activates the selected row). Click the Button once, capture the Prompt, dismiss with its OK.

---

## 8. Planned evidence matrix (T1 plan; nothing captured in T1)

Planned files are under `evidence/EXP-037/`. Acceptance-check IDs are unavailable: the brief does not number its acceptance checks in the material this worker can read. The coordinator should map them.

| ID | Milestone | Planned file(s) | Proves | Does not prove |
|---|---|---|---|---|
| P0 | Tab identity | `p0-tab-list-and-snapshot.md` | Which Designer/Web Client tabs are selected | Form identity |
| P1 | Designer state | `p1-designer-initial.png`, `p1-designer-snapshot.md` | User scope bar; clean/dirty; no dialog | Which Form is open |
| P2 | Target open | `p2-form-open-snapshot.md`, `p2-form-open.png` | Heading `FX_SingleButtonLab01`; scope; Version; Save disabled | Persistence |
| B1 | Component baseline | `b1-components-baseline-snapshot.md`, `b1-button-selected.png` | One Button `FX_SingleButton01`, Caption, Type `PushButton`, `(Button)` header | Layout beyond Pane (00) |
| B2 | Event Handlers baseline | `b2-event-handlers-before-snapshot.md` | Whether any handler exists; `FX_ButtonPromptEvent01` absent | Database absence |
| B3 | Primary baseline | `b3-events-group-before-snapshot.md` | Primary value blank, or stop | Behaviour of blank Primary |
| M1 | Handler creation | `m1-handler-new-name-snapshot.md` | Name `FX_ButtonPromptEvent01` accepted | Final configuration |
| M2 | Prompt configuration | `m2-prompt-parameters-before-ok.md`, `m2-prompt-parameters-before-ok.png` | Type Prompt; message `Factory Test Prompt`; response rows | Runtime text |
| M3 | Handler committed | `m3-handler-list-after-ok-snapshot.md`, `.png` | One handler, one sequenced action, Type Prompt | Persistence |
| M4 | Primary assignment | `m4-primary-assigned-snapshot.md`, `.png` | Primary = `FX_ButtonPromptEvent01`; Name/Caption/Type unchanged | Persistence |
| M5 | Pre-Save | `m5-pre-save-snapshot.md`, `m5-pre-save.png` | All edits committed (no inline editor active) | Server state |
| S1 | Save | `s1-after-save-snapshot.md`, `s1-after-save.png`; network `SaveChanges` count | Exactly one POST; `Success: true`; Save disabled | Durability |
| R1 | Post-Save reinspection | `r1-post-save-snapshot.md` | Handler, Primary, Button unchanged | Persistence after reopen |
| C1 | Close | `c1-after-close.png` | Form tab gone; no unsaved-changes prompt | Server state |
| O1 | Reopen | `o1-reopen-snapshot.md`, `o1-reopen.png` | Same Form via Form-menu recent list; Save disabled | Cache source |
| V1 | Recovery verification | `v1-recovered-snapshot.md`, `v1-recovered.png` | Handler name, sequence, Type Prompt, message, Primary, Button identity and Caption | Literal vs resource Caption; durability |
| RT1 | Runtime (optional) | `rt1-prompt-open.png`, `rt1-prompt-dismissed-snapshot.md` | Prompt text and single OK response, after one click | Business effect |
| A1 | Final audit | `a1-final-readonly-snapshot.md` | Final stable state | — |

---

## 9. Explicit non-claims for this review

- No Mongoose behaviour is observed. Every workflow statement above is documentation or narration until a browser step proves it.
- The Prompt message parameter label is unverified (transcript-only).
- Primary-event editor behaviour for custom names is unobserved.
- Caption representation (literal vs resource) remains unresolved, as in EXP-036.
- Durability, cache eviction, and server serialization are not claimed by any close/reopen.

## 10. Open items for coordinator review

1. Confirm the reconciled raw-transcript path (`docs/mongoose/transcripts/raw/…`).
2. Confirm that the Prompt message parameter can be verified only from the live editor, since the local guide does not describe it.
3. Confirm the handler-first order (section 7.1).
4. Confirm acceptance-check IDs, which the worker cannot read from the brief.
5. Confirm whether EXP-037 should run runtime RT1 if the Designer recovery check passes.
