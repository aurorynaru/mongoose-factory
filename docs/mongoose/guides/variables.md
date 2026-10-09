# Variables

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148044414.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About variables

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148044414.html

Forms use variables to communicate between themselves and to save environment information across form executions. Some variables are temporary. Persistent variables are loaded to and from disk. Variables can be global or associated with a particular form. Both temporary and persistent variables can be used by VB scripts. Components can be bound to variables.

For example, a global persistent variable can be used to store the ID of the last customer a user was interacting with, so that any forms that are subsequently launched can automatically navigate back to that customer.

| Variable attribute | Description |
| --- | --- |
| **Name** | For global variables, an internal name unique in the forms database. For form-level variables, an internal name unique to the form. |
| **Description** | A description of the variable. |
| **Value** | The value of the variable. You can use WinStudio keywords and their parameters to specify values. |
| **Persistent or Temporary** | The values of persistent variables are loaded to and from disk, so they are saved when the form closes. The values of temporary variables exist only while a form is open. |
| **Global or Form-level** | Variables that are global objects can be used by more than one form. Once the global attribute is set, it cannot be altered. Form-level variables are unique to one form. |

## Creating, copying, editing, or deleting variables

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148044570.html

To create, copy, edit, or delete a variable:

1. In Design Mode, from the **Edit** menu, select **Variable**. 

   The **Variables** dialog box lists all the global variables stored in the forms database and any form-level variables associated with the current form.
2. Perform one of these actions: 

   - To create a variable, click **New**.
   - To copy, edit, or delete a variable, select a variable name and click the appropriate button.
