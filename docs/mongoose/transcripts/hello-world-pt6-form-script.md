# Hello World Part 6: form script shown in the video (operator-supplied)

Source: a screenshot of the tutorial video's form script editor (about 01:27-01:58), supplied by the operator on 2026-10-15:
`hello-world-pt6-form-script.png`. The transcription below is verbatim. Line 1 and the left edge of the line numbers are cropped in the
screenshot. Knowledge state: **unverified** (tutorial code, not yet run in this tenant).

```vb
Option Strict On

Imports System
Imports Microsoft.VisualBasic
Imports Mongoose.IDO.Protocol
Imports Mongoose.Scripting


Namespace Mongoose.FormScripts
Public Class CPROrders
Inherits FormScript

   Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)
      Dim OrderTotal As Decimal
      OrderTotal = CDec(OrderCount) * CDec(ItemCost)

      ThisForm.PrimaryIDOCollection.SetCurrentObjectPropertyPlusModifyRefresh("DerOrderTotal",OrderTotal.ToString())

   End Sub

End Class
End Namespace
```

## FX_ adaptation for this tenant (proposed, unverified)

- Property `DerOrderTotal` becomes `FX_DerOrderTotal`. It is the derived property `FX_Count * FX_ItmsCost` on FX_Orders and has been Read Only since EXP-081.
- The class name `CPROrders` is presumably generated from the tutorial's Form name. Use whatever class name the FX_Orders editor generates; EXP-093 records it. Do not rename the class by hand unless the editor requires it.
- Only the method body (`CalcOrderTotal`) is the tutorial's own code. Keep the editor's generated header (Option, Imports, Namespace, Class, Inherits) as found.
- Event handler parameters (narrated): `P(FX_Count),P(FX_ItmsCost)`, in the order OrderCount, ItemCost.

## Open questions for EXP-094

1. Does `SetCurrentObjectPropertyPlusModifyRefresh` write a Read Only derived property on the client side?
2. When Item changes, does the FX_Item component class (EXP-091) update FX_ItmsCost before this event reads it?
3. `CDec` of a blank value throws an exception. Order rows always have Count and Cost, but an add-mode placeholder row may not.
