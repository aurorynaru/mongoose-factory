# Scripts

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148040187.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About scripts in Mongoose-based applications

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148040187.html

The Mongoose framework exposes a set of interfaces that provide programming support for most facilities within Mongoose-based applications. You can make use of these APIs by writing scripts that encapsulate code written in Microsoft Visual Basic or in C#.

In Mongoose, scripts can either be global objects or they can be specific to a validator, a form event handler, or a form.

- Validators are global objects that can incorporate scripts. You can incorporate a short script inside a validator's specifications by creating an Inline Script validator. In this case, the script is stored in the forms database as part of the validator global object. Or you can reference an external script by creating a Run Script validator. A script referenced by a Run Script validator is stored as a separate global object in the forms database and can be referenced elsewhere.
- Form event handlers are defined for specific forms and can incorporate scripts. You can incorporate a short script inside an event handler's specifications by creating an event handler with an Inline Script response type. In this case, the script is stored in the forms database as part of the event handler's portion of the form definition. Or you can reference an external script by creating an event handler with a Run Script response type. A script referenced by a Run Script response type is stored as a separate global object in the forms database and can be referenced elsewhere.
- Form scripts are scripts that are defined for particular forms and apply only to those forms. Form scripts are stored as part of the form definition in the forms database and cannot be referenced elsewhere.

### Script objects

Mongoose scripts utilize methods and properties associated with four basic kinds of objects:

- [WinStudio application object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148042137.html)
- [Form object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148042293.html)
- [Form component object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148042449.html)
- [IDO collection object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148042620.html)

In addition, Mongoose provides a property and two methods that are not associated with any of these objects:

- The **ThisForm** property can be used with both global scripts and form scripts.
- The **GetParameter** method and the **CountParameter** method are available only within global scripts.

### Procedures and parameters

All global scripts and inline scripts must contain at least one procedure of type **Sub** or **Function** with the procedure name of **Main**. No parameters can be passed to the **Main()** procedure as command arguments. A global script can have more than one procedure. Other procedures can be named by any valid Visual Basic or C# name.

Only the Main() procedure in any global script can be called from WinStudio. This is the procedure called when the script name is invoked from within Mongoose.

## About strong data types

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148040358.html

Beginning with version 6 of the (Mongoose) framework, the system accesses dates and numbers differently than it did with earlier versions. Specifically:

| In Framework Version 5 and earlier | In Framework Version 6 and later |
| --- | --- |
| Data from the middle tier was in the form of COM variants and so had inherent data type information. | Data is no longer in the form of COM variants, so in some cases, data no longer has inherent data type information. This is because all data is string, in internal format, and data type information comes only from metadata. |
| VBA code that manually manipulated IDOs used RSDAO, a COM API. | RSDAO is no longer used. The equivalent code uses the IDOProtocol framework classes available by means of the IDOClient property. |
| Custom middle-tier code used Visual Basic 6 APIs. | The IDOProtocol framework classes are used in place of the Visual Basic 6 APIs. |
| VBA performed some automatic data type conversions. | VB.NET requires that some of the data type conversion code must be changed to use explicit casts or variables declared with strong data types. |

For IDOProtocol development, use strongly typed variables for dates and numbers, and the GetValue or SetValue APIs to perform the correct locale-specific formatting. The Value property gets or sets a string, which uses an internal format. This is used only in rare cases.

In version 6 of the framework, each of the three objects exposed in the WinStudio API (components, IDO collection properties, and variables) has a set of APIs parallel to the functionality of the IDOProtocol's property and method parameter APIs:

- A read-write Value property that provides a string internal format, regardless of data type.
- A set of GetValue() and SetValue() accessors that support strong data type conversions from or to the internal format.

Parameters passed to WinStudio global scripts have a similar subset of read-only APIs:

- A read-only Value property that provides a string internal format, regardless of data type.
- A set of GetValue() accessors that support strong data type conversions from the internal format.

For sample scripts, see [Sample Scripts with APIs for Strong Data Types](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148260863.html).

## Referencing variables in WinStudio scripts

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148040514.html

Variables are mechanisms for storing data needed by WinStudio at run time. Global variables are available to all forms. Form variables are available only to the form for which they were defined.

Persistent variables maintain their values across executions of the form (for form variables) or WinStudio (for global variables). Temporary or nonpersistent variables do not have to be explicitly defined. WinStudio creates them automatically as they are referenced.

### Referencing a global variable

Global variables are accessed through the **Variables** property of the WinStudio **Application** object. Their values can be retrieved or set using the **Value** property of the **Application** object. The following code sets the value of the variable GlobalVariable to "New Value."

```

   '  Set GlobalVariable to "New Value"
   Application.Variables("GlobalVariable").Value = "New Value"
```

### Referencing a form variable

Form variables are accessed through the **Variables** property of the **Form** object. The following code assigns the value of one of the current form's variables to the variable strVariableValue.

```

   '  Assign the value of the current form's FormVariable
   '  to strVariableValue
   Dim strVariableValue as String
   strVariableValue = ThisForm.Variables("FormVariable").Value
```

## About script editing in the Web Designer using Visual Studio

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/atm1601017723754.html

Global and form scripts can be downloaded from the Web Designer and edited using Visual Studio. The main benefit of this is to provide the script developers who use the Web Designer the same experience and advantages that developers working in the Windows client have had for years. This includes these advantages:

- Compiling errors are cleaner in Visual Studio, appearing as a full list in its own section of the interface.
- Adding scripts into a downloaded solution, making multiple global and form scripts be viewed and revised at once.

## Configuring a script editor

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148040670.html

Windows client supports a built-in full-featured script editor; or, if Microsoft Visual Studio is installed on your client computer, you can choose to use  the Visual Studio IDE as a script editor.

1. Close any open forms.
2. From the **View** menu, select **User Preferences**.
3. Select the **Runtime Behaviors** tab.
4. Clear **Optimize Script Execution**. 

   **Note:** 
   - The check box is selected by default to improve load and compile time of scripts in Runtime Mode. To edit scripts in Design Mode, you must clear the box to prevent assembly-locking and memory penalties.
   - If a form is open when you change this setting, the setting reverts to its previous value.
5. Select the **Design Time** tab.
6. In the **Script Editor** group box, specify which script editor WinStudio is to use. 

   **Note:**  To select the **Visual Studio** option, you must already have Visual Studio installed and configured on your system.
7. Optionally, if you are using Visual Studio as your script editor, use the **Visual Studio Modeless** check box to specify whether you want to edit scripts modally or not (see [Editing or creating a script with Visual Studio](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148041653.html)).

## About the native script editor

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148040842.html

The built-in script editor (**Edit Form/Global Script** form) provides scripting functionality in the Windows client, along with support for compiling scripts and viewing compilation errors. This editor can be used to create either form scripts or global scripts, depending on how it is accessed. For more information, see  [**Edit Form/Global Script** dialog box](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/winstudio/winstudioeditmode/dialogs_edit_mode/edit_form_script_db.html).

**Note:** This topic applies only to the Windows client version of the script editor. For the web client version, see [Script Editor](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/winstudio/forms/web_designer/script_editor.html).

This script editor offers these features:

- Syntax highlighting
- A syntax parser that is useful with both C# and VB code
- Intellisense-like prompts to aid in writing the code
- Options to find references to form or global objects and insert them directly into the script

  See [Finding form/global object references and inserting them into scripts](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148252376.html).
- Debugging tools to aid in troubleshooting script errors

  See [About the native Script Editor debugging tools](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148041325.html).
- Tools to find and optionally replace specific strings in the existing code

  See [Finding and replacing code strings in scripts](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148252751.html).
- Miscellaneous options to control the compiling of script and the appearance of the code text in the editing frame

  See [About native script editor options](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148041154.html).
- Options to view and work with multiple sections of script using split editing windows.

  See [Using split windows for script editing](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148040998.html).
- Multiple script tabs

  The **Script** editing window can display multiple scripts, each accessed by means of a different tab at the top of the editing window:

  - The leftmost tab displays the script that is currently in-progress.
  - Any other tabs display only if the form is being developed as an extension of another form. In this case, the tab displays the base form scripts. These base form scripts are read-only.
