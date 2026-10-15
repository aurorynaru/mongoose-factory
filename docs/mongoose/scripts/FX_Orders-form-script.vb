Option Explicit On
Option Strict On

Imports System
Imports Microsoft.VisualBasic
Imports Mongoose.IDO.Protocol
Imports Mongoose.Scripting


Namespace Mongoose.FormScripts
Public Class FX_Orders
Inherits FormScript

   Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)
      Dim OrderTotal As Decimal
      OrderTotal = CDec(OrderCount) * CDec(ItemCost)

      ThisForm.PrimaryIDOCollection.SetCurrentObjectPropertyPlusModifyRefresh("FX_DerOrderTotal",OrderTotal.ToString())

   End Sub

End Class
End Namespace
