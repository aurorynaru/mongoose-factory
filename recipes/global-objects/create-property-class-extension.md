# Recipe: Create (or Edit) a Property Class Extension for Drill-Down Menus

Status: **observed.** Creation through the component's inline editor ran for two extensions in one run (EXP-085: FX_Item, FX_CustomerID), each with one Save and a readback after a Designer close/reopen. Editing through Global Objects and the runtime Details drill-down were observed in EXP-069-R4 (FX_UM). There has been no independent replay.
Category: global-objects (tenant-wide; FX_ names only; User version)
Source experiments: Outcome sections of `experiments/EXP-085-…md` and `experiments/EXP-069-R4-…md`

## Purpose

Give every component bound to a property class the standard **Add / Details / Find** right-click menu, pointing at the class's maintenance Form.

## Preconditions

- The Designer is live, in **User** scope and clean, with a Form open that has a component whose **Inheritance** names the property class (e.g. FX_ItemCombobox → `FX_Item`).
- The extension is absent: it is missing from Edit > Property Class Extension at its alphabetical position. The list search box does **not** filter as you type.

## Steps (create)

1. Select the component. Under **Inheritance**, click **Edit Property Class Extension For Property Class (…)**.
2. The prompt reads `Property Class Extension <class> does not exist. Create it?`, with Yes focused. Click **Yes** once.
3. A **Property Class Extension** editor opens. It has **OK and Help only, no Cancel**; once open, you finish it.
   - **Add/Details Form:** choose from the list (e.g. `FX_Items`), then **Tab**.
   - **Find Form:** choose, then **Tab**.
   - **Property:** the list is **empty**, so type the exact property name (e.g. `FX_Item`), then **Tab**.
   - **Right-Click Menu:** choose the **exact** `StdDetailsAddFind`, not `StdDetailsAddFindSearch`, then **Tab**.
4. Click **OK** once. No alert appears, and Save is enabled. The component's own Right-Click Menu is still `StdDefault`.
5. **Readback:** Edit > Property Class Extension (Global Objects), select the extension, read the four values, then **Cancel**.
6. **Save** once. The toast reads `Global object(s) were saved.`
7. **Persistence:** close the Form with its Form-tab × and reopen it from recent forms. Repeat the readback.
8. To make the menu appear at runtime, clear the component-level menu: `../components/clear-component-right-click-menu.md`.

## Steps (edit an existing extension)

Use Designer **Edit > Property Class Extension** (Global Objects). Select the extension, change the fields, **Tab** each one, click OK, then Save. After a Save, the component's inline (…) editor is **read-only**, so edit through Global Objects.

## Known pitfalls

- **Tab before OK is mandatory.** EXP-069-R2 lost a Right-Click Menu that was chosen while the combobox still had focus.
- Screenshot filenames from EXP-085 T6 (`t6-09`, `t6-10`) are swapped relative to their content.
- Changes reach the runtime after a runtime Form close/reopen, with **no unload** (EXP-069-R4).

## Evidence

EXP-085: `t3-12` (FX_CustomerID editor before OK), `t6-07` (list and FX_Item values after reopen). EXP-069-R4: `t3-04`, `t6-02` (runtime menu), `t6-04` (Details opens FX_UMs).
