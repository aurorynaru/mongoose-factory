# Playbook: Events, handlers, variables and form scripts

Knowledge state: **observed** (single accepted runs, same-session UI evidence). The Hello World Part 3
and Part 6 sequences are each complete end to end at runtime.

## See what events fire (diagnostics)
- Turn on View › User Preferences › Diagnostics › General › **Enabled**. It is the master switch, applies immediately and needs no refresh. Click the **label**, not the checkbox. Restore it afterwards.
- View › **Diagnostic Log** → Log Messages tab. Each row shows `FormEvent (<form>) <event> … num handlers for event N` (EXP-053).
- **Open sequence** with Initial Command = Refresh:

  ```
  StdFormPredisplay → StdFormInitCompleted → StdFormRefresh → StdFormGetBoundValues
    → StdObjectRefresh → StdObjectSelectCurrentCompleted → StdObjectRefreshCompleted
    → StdFormLoadBoundValues / LoadDerivedValues → **StdFormRefreshCompleted**
  ```

- A Refresh button runs the same sequence without the first two events (EXP-054-R2).

## Button that fires an event
1. Toolbox Button → click free canvas → rename it (`FX_…Button`) and set its Caption.
2. Set Properties › Events › **Primary** to an event name (e.g. `StdFormRefresh` or a custom `FX_…`).
   - Primary is authoritative before Save.
   - The Components-grid "Event to generate" column lags until Save + reopen (EXP-054-R2, 058).
3. Caption cell trap: an accessibility click can hit the string dropdown arrow. Double-click the cell's text area.

## Event handlers (Details › Event Handlers)
- **+** opens a dialog with a single field, the Name. Pick a standard `Std*` event, or **type a new name to create a custom event** (e.g. `FX_CalcOrderTotal`) (EXP-055, 058, 095).
- Then, in the Event To Handle property grid, set Response **Type** and click **Parameters …** to open Event Handler Parameters.
- Response types used successfully:

  | Type | Parameters summary | Source |
  |---|---|---|
  | Prompt | `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` | EXP-055 |
  | Set Values | `SETVARVALUES(FX_VarTest=P(FX_Description))` | EXP-056/057 |
  | Form Script Method | `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))` | EXP-095 |
  | Run Form / Set values / Generate event | used in portal work; see portal-shell.md | EXP-110–126 |

- The Parameters dialog's General tab holds: Error/Success Message, Only When Current Collection Is, Only When Platform Is, Keep, Ignore Failure, Message as Toast, Disabled. It also has Prompt When and "Stop event handlers if expression is true".
- Several actions on one event run in **sequence** order (0, 1, …).
- Changing an action's event **moves** it; it doesn't copy.
- Handlers on `StdFormRefreshCompleted` run on open and on every refresh. Put them on a **custom event** when they should run only on click (EXP-058).

## Variables
- Set Values with a **new target name** typed into the Target combobox and committed with Tab. After Save + reopen it auto-creates a **Form - Temporary** variable (Persistent False) (EXP-056, 057).
- Details › Variables › New definitions disappeared in early runs (EXP-004/014). Prefer the Set Values route.
- To bind an Edit to a variable, set Binding Type **Variable** and Binding to the variable name. It shows as `variables.FX_VarTest`.
- `SETVARVALUES` writes only when its event fires. Moving between rows does **not** update it.
- Page and global variables for portals are in portal-shell.md (EXP-123).

## Form script (VB.NET) + Data Change wiring (EXP-093–096)
1. Check Behavior › Script Language (Visual Basic by default).
2. Open the editor with the **blue pencil** at the top of the Properties panel ("Script Editor": OK, Cancel, Help, Download, plus a Compile Result panel).
   - On an empty script, opening and pressing Cancel leaves the Form **dirty**, because the template is generated. Close with **No** and reopen if you didn't mean to change it.
3. Enter the code in **one fill**, unindented, because the editor auto-indents every line. Then click OK.
   - Template: `docs/mongoose/scripts/FX_Orders-form-script.vb`:

   ```vb
   Namespace Mongoose.FormScripts
   Public Class <FormName>
   Inherits FormScript
      Public Sub CalcOrderTotal(OrderCount As String, ItemCost As String)
         Dim OrderTotal As Decimal = CDec(OrderCount) * CDec(ItemCost)
         ThisForm.PrimaryIDOCollection.SetCurrentObjectPropertyPlusModifyRefresh("FX_DerOrderTotal", OrderTotal.ToString())
      End Sub
   End Class
   End Namespace
   ```

4. Designer Save. Optionally expand Compile Result › Errors. Compile success has so far been inferred from runtime only.
5. Handler: `+` → name `FX_CalcOrderTotal` → Type **Form Script Method** → Parameters: pick the method and pass `P(<Property>)` arguments.
6. Wire **Events › Data Change** = handler on **both** the detail controls **and** the grid columns.
   - Detail wiring doesn't cover grid edits (EXP-096). Set grid columns through the Components grid + Properties.
7. Runtime test: change a value without saving and check the recalculation. Discard with close → "Do you want to save your changes to primary collection?" → **No**.

C# form scripts are used by the web-user-control bridge. See web-user-controls.md (`assets/FX_Inventory/FX_InventoryDashboard.cs.txt`, `assets/FX_Login/FX_LoginPortal.cs.txt`).

## Pitfalls
- Runtime prompts block everything. Expect the Prompt handlers you add (e.g. Hello World on every refresh) and dismiss them.
- Before Save, verify with Properties readback. After Save + reopen, verify with the Components grid and Event Handlers grid.
- `Console: N errors` in Designer headers is pre-existing noise and has not been investigated.
