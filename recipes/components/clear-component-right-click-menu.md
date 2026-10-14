# Recipe: Clear a Component's Right-Click Menu so It Inherits the Extension's Menu

Status: **observed** in one run on two comboboxes (EXP-086), with one Save, a Designer close/reopen and a runtime check of both Details drill-downs. The same inheritance was seen for FX_UMCombobox (EXP-069-R4). There has been no independent replay.
Category: components (Form-level change, User scope)
Source experiments: Outcome section of `experiments/EXP-086-…md` (with `EXP-069-R4`)

## Purpose

A component-level Right-Click Menu of `StdDefault` overrides the property class extension. At runtime the menu then shows only `Help`. Clearing the component value lets it inherit `StdDetailsAddFind`, which gives Add..., Details..., Find... and Help.

## Preconditions

- The property class extension exists with Right-Click Menu `StdDetailsAddFind` (`../global-objects/create-property-class-extension.md`).
- The Designer is live, in **User** scope and clean. The component shows Right-Click Menu `StdDefault` under Behavior.

## Steps

1. Select the component (Details > Components row, or the canvas).
2. Select the **Right-Click Menu** value, press **Delete**, then press **Tab**. The cell reads blank.
3. Repeat for any other component.
4. **Save** once. The toast reads `Form [<Form>] and global object(s) were saved.`
5. **Persistence:** close the Form with its Form-tab × and reopen it from recent forms. The cells still read blank.
6. **Runtime:** close and reopen the runtime Form, then Filter in Place with blank criteria and F4. Right-click the field: the menu shows `Add...`, `Details...`, `Find...`, `Help`. **Details** opens the target Form in a **new tab**, filtered to the current value (Object 1 of 1). Dismiss menus with Escape.

## Known pitfalls

- **No unload is needed.** One Designer Save plus a runtime close/reopen was enough.
- Attributing the menu to the extension is consistent with the evidence but was not isolated separately.

## Evidence

EXP-086: `t4-04` (runtime Item menu with Add/Details/Find/Help), `t5-03` (Details opens FX_Items on dumbbell), `t5-06` (Details opens FX_HelloWorld01 on FX001).
