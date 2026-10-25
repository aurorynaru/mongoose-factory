# EXP-135 T2 — Designer isolation (worker-authored)

Run `R-20261026-051803-zOUZ` · cycle 2 · task T2 · worker session `affb961f-8cd1-434c-90c8-e3b993b1da6a` · task_message_id `1d189e2f-b4b3-43aa-b162-77501f19eadb`.
Scope of this task: Designer isolation only. No wizard, no Finish, no Designer Save, no IDO inspection through vendor Forms, no runtime record, no other application mutation.

## Operator authorization applied

Bounded T2 instruction (coordinator/operator, cycle 2): invoke the Designer's ordinary Form close exactly once, targeting only the loaded vendor IdoProjects Form, when Save is visibly disabled or the Form is demonstrably clean. Do not edit, Save, Revert, or Delete it. Do not close any other Form. Preserve the other Designer tabs (1, 2) and the Web Client tab (3).

## Pre-close state (tab 0, selected after a fresh tab list)

| Item | Observed |
|---|---|
| Tab | Designer tab 0, page title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` |
| Loaded Form | Tab `IDO Projects`; Properties Name `IdoProjects`; Caption `fIDOProjects`; Version `Vendor Default version`; Form Type `Normal`; Is Master `True` |
| Save | Disabled (snapshot `button "Save" [disabled]`; greyed toolbar icon in `t2-01`) |
| Footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Prompts / errors | None visible |
| Screenshot | `t2-01-designer-tab0-pre-close-idoprojects.png` |

## Route taken

Form-tab close control (the `×` / `closable IDO Projects` button on the single Form tab, snapshot ref from the same task). Invoked exactly once. No Form menu, no Delete, no Save, no Revert, no Edit menu probe.

Tool output for the click returned no error and no dialog. No save/discard prompt appeared in the post-click snapshot or screenshot.

## Post-close state (tab 0)

| Item | Observed |
|---|---|
| Form tablist | Empty (no Form tab) |
| Form canvas | Blank |
| Properties panel | Empty tree (no component/Form properties) |
| Save | Disabled (greyed toolbar icon) |
| Footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Prompts / errors | None visible |
| Screenshot | `t2-02-designer-tab0-post-close.png` |

## Other tabs

- Designer tabs 1 and 2: not selected, not inspected, not closed. Their Form contents remain unknown (T1 did not inspect them).
- Web Client tab 3: not selected, not interacted with.

## Proof and limits

- Proves: the vendor IdoProjects Form was removed from Designer tab 0 by one ordinary tab-close action, with no save prompt, and the tab now shows no Form, Save disabled, and User scope footer.
- Does not prove: the Designer's internal session state beyond what is rendered; that tabs 1 and 2 hold no non-FX_ Form; Designer liveness beyond the rendered responses (no Edit-menu probe was needed or run); that a later wizard-created Form will not share the session with another loaded Form.

## Action counts (T2)

- Designer Form close: 1 (vendor IdoProjects, tab 0 only).
- Designer Save / Revert / Delete / Copy / New / Regenerate: 0.
- Save or discard prompts selected: 0 (none appeared).
- Other Forms closed: 0. Vendor Forms opened or edited: 0.
- Wizard launch / Finish: 0. Form creation: 0.
- IDO/SQL/IDO project/property/global object changes: 0.
- Records inserted, edited, or deleted: 0.
- Metadata unload / FormSync / deployment / direct SQL: 0.
- Browser JavaScript / evaluate / run-code: 0 (denied tools not used).
- Session Expired modal or sign-in: 0. Credential entry: 0.
- Ref errors: 0. Timeouts: 0. Recovery snapshots: 0.
- Tab list: 1 (initial read-only). Tab select: 1 (tab 0). Snapshots: 2 (pre-close snapshot on tab 0 via tab-select page snapshot, post-close snapshot). Screenshots: 2. Designer Form-tab click: 1.

## Acceptance relevance

- Supports Designer isolation precondition for the next task (blank Designer tab 0 with User scope and Save disabled).
- Does not satisfy AC-2 property types (unchanged; still unresolved, see experiment record).
- AC-3 to AC-10 not evaluated in T2.
