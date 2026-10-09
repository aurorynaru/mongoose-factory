# Form event handler response types

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vnp1710886896856.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Add entry to the Audit Log response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vnp1710886896856.html

The **Add entry to the Audit Log** response type creates an entry in the Audit Log table.

Use the event **Parameters** field to specify the entry to be added.

To view or create types of entries for use in the Audit Log, use the **Audit Log Types** form.

You can view these entries and their associated information on the **Audit Log** form.

## Binary Value Action response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/xmy1710888054296.html

Use the **Binary Value Action** event handler response type to perform a binary action (import, export, view, or delete) on a binary language object (BLOB), often an image. This response type can be used only on forms that are bound to an IDO collection.

You must specify these **Parameters**:

- The action to perform
- The component that the binary object is bound to
- Possibly, a file name (when using the **Export** action)

## Collection processing response types

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023308.html

A form event handler that uses one of the collection processing response types performs actions on a specific collection. When you define one of these response types, you must specify the collection.

| Response type | Description |
| --- | --- |
| Collection Copy | This response type creates a new item in the specified collection and initializes it to the value currently in the components that are bound to it. This action is equivalent to the user initiating a Copy action when the specified collection is the current one. |
| Collection Delete | This response type marks the current item of the specified collection for deletion. This action is equivalent to the user initiating a Delete action when the specified collection is current. |
| Collection Init with Auto Insert Row | This response type initializes a collection and inserts a new item in the autoinsert row. |
| Collection Make Current | This response type makes the specified collection the current collection. |
| Collection Navigate | This response type navigates the specified collection. You must specify which navigation action to take (Next, Previous, Last, or First). This action is equivalent to the user initiating a Next, Previous, Last or First action when the specified collection is current. |
| Collection New | This response type initializes a new item in the specified collection and makes it the current item. This action is equivalent to the user initiating a New action when the specified collection is current. |
| Collection Notes | This response type initiates a Class Notes (Notes for All) action for the specified collection. This action is equivalent to the user intiiating a Class Notes (Notes for All) action when the specified collection is current. |
| Collection Notes for Current | This response type initiates a Notes (Notes for Current) action for the current item in the specified collection. This action is equivalent to the user initiating a Notes (Notes for Current) action when the specified collection is current. |
| Collection Refresh | This response type refreshes the specified collection. This action is equivalent to the user initiating a Refresh action when the specified collection is current. |
| Collection Refresh Current | This response type refreshes the current item of the specified collection. This action is equivalent to the user initiating a Refresh Current action when the specified collection is current. |
| Collection Save | This response type saves the specified collection. This action is equivalent to the user initiating a Save action when the specified collection is current. |
| Collection Validate | This response type validates the specified collection. If a validation error occurs, the collection and component focus is brought to the component with the validation error. |

## Conditional Action response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/nnz1710540509607.html

A handler of the **Conditional Action** response type is used to respond to situations in which the handler must take different actions, depending on the result of a conditional evaluation.

A conditional action includes an action to be taken, a condition that must exist, and a value to use for the action. Event handlers of the type Conditional Action and certain component attributes must use a specific syntax as described in the topic "[Conditional action syntax](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148049687.html)".

We recommend that you use the **Edit Set of Conditional Actions** dialog box from the appropriate field in the properties dialog box to guide you through the creation of conditional actions, as described in that topic.

## Execute EXE or other program response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023370.html

Event handlers with an **Execute Exe or other program** response type are used to execute any command string that can be run from the Windows Run prompt. This response type is useful for launching other desktop programs.

**Note:**  This response type does not work in the web client.

To open a document associated with an application, enter the document path in the parameter of the event handler. You need not specify the application path.

## Form Script Method response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/tys1710908251574.html

The **Form Script Method** response type calls and executes a predefined form script.

You can create form scripts in the designer. To launch the stem (a sort of template) for form script code, open the designer, on the **Form** properties sheet, click the Edit Form Script icon in the top left of the tab. This launches the Mongoose **Script Editor** (web client)/**Edit Form Script** dialog box (Windows client), You can use the script editor to create or edit the form script.

## Generate Application Event response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023511.html

A form event handler with the **Generate Application Event** response type generates an event in the Application Event System. Only custom events, defined on the **Events** form, can be generated.

**Note:** This response type is used only for application events and their handlers. For form events, use the [Generate event response type](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023589.html).

Be aware that the Application Event System is distinct from the form event system. The response type [Generate Event](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023589.html) generates a form event, and you define handlers for that event in the **Form** properties sheet. The response type **Generate Application Event** generates an event in the multi-tiered, application-wide system, and you define handlers separately in that system.

## Generate event response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023589.html

Event handlers with a **Generate event** response type are used to generate either a standard form event or a custom form event. The failure or success status of the generated event becomes the status of the generating event handler.

**Note:** This response type is used only for form events and their handlers. For events generated by the Application Event System, use the [Generate Application Event response type](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023511.html).

## Get Location From Browser response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023667.html

The **Get Location From Browser** response type requests the location information from the browser and then triggers the StdWebLocationInfoReceived event. Once the location is received from the browser, or an error occurs, the StdWebLocationInfoReceived event is triggered. This is done asynchronously.

**Note:** This response type is used only with the web client.

## Goto Explorer Folder response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/winstudio/winstudioeditmode/dialogs_edit_mode/edit_audit_log_entry.html

Use the **Goto Explorer Folder** response type to navigate to a specific Explorer objects folder within a root (**Master**, **Public**, **User**, or **MyFolders**) folder.

## Goto Form Page response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023729.html

Event handlers with a **Goto Form Page** response type are used to select a form page and make it the currently active page. You must specify the name of the form page to activate.

## Goto Form response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/swd1710814169344.html

Event handlers with a **Goto Form** response type are used to open a form and make it the currently active. You must specify the name of the form to launch. Once the target form opens, the originating form closes.

## Goto URL response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/fup1710815116173.html

An event handler of the **Goto URL** response type directs focus of the application to a URL.

In typical use, the **Goto URL** event handler opens a web page specified by URL in a browser. If the current form is running in Microsoft Internet Explorer, the **Goto URL** event handler launches another instance of the browser and navigates to the URL. Otherwise, the event handler launches the system default browser and navigates to the URL.

Depending on the URL type, **Goto URL** can initiate a file transfer, or it can open an email program or a news reader.

In the web client, users might need to enable pop-ups in their browsers in order to use this feature.

## Inline Script response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023807.html

Event handlers with an **Inline Script** response type allow you to place the text of a short script into the **Parms** field on the **Event Handler Properties** properties sheet.

**Note:** You can use the **Inline Script** response type only if the entered script (including parameters) is less than 1,500 characters. If your script has more than 1,500 characters, use the **Run Script** response type that accesses application objects and data through the scripting API.

A return value of zero (0) from the script indicates it was successful. A return of a non-zero value indicates failure.

## Invoke User Control response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023885.html

An event handler with the **Invoke User Control** response type calls into a .NET WinForms user control and/or web control that is hosted as a [user control component](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148028518.html) on a form. This response type calls the **Invoke** method of the control, which is part of the **IWinStudioUserControl** interface and must be implemented in the user control code.

**Note:** This event handler response type does not work in the web client and is now deprecated.

## Load Collection response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148023947.html

The **Load Collection** response type provides the ability to query an IIDO collection and output the return results to properties, variables, or components on the form. This functions much like the InCollection validator, except that you can control when the query happens by generating an event for this type of handler.

When using the **Load Collection** response type, keep these thoughts in mind:

- You must, at least, specify the IDO collection on which you want to perform the query.
- The query is automatically capped at 2, because only the first row is accessible or usable. For cases in which you need a specific number of rows to be returned to the client, you must define a collection on the form and bind it to a grid or other components.
- You can specify that the query is to clear the output targets if no rows are returned.
- You can specify that the output targets do not require validation before navigating or saving the results.
- You can specify a filter to be applied on the records being queried.

## Method Call response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024025.html

Event handlers with a **Method Call** response type allow the use of IDO methods to handle the event.

To define a **Method Call** response type, you must specify the name of the IDO that contains the method, the method name, and any parameters required by the method. You can specify literal, property, variable, and component values as parameters.

Event handlers with a **Method Call** response type can output values to properties, variables, or components. To do this, specify the appropriate property, variable, or component name for the method's output parameters. You must also specify the **Output** attribute for each output parameter.

Methods indicate failure by generating a return code greater than 4\. Return codes 1 through 4 are reserved for warnings. If a method returns a code of 1 through 4, the application displays the error message with the word "Warning" prefixed. To indicate success, the method returns a code of zero (0).

## Print Preview response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024103.html

Event handlers with a **Print Preview** response type are used to generate a preview of a report rather than a printout of a report. This response type submits a job to the Task Manager batch processing facility.

**Note:** Although it is possible to use this response type, we recommend an alternate method of creating a print preview in Mongoose-based applications. Our recommendation is that you use the Runtime Builder functionality to specify a Form Builder report form. In this case, you can automatically create a report form and a report criteria with a **Preview** button.

**Print Preview** takes two parameters:

- `TASKNAME(name)`, where `name` is the name of a task defined on the **Background Tasks Definition** form
- `TASKPARMS(parameters)`, where `parameters` are typically the current values of variable-bound components on the form

For more information, see the online help for the Task Manager service.

## Prompt response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024166.html

The **Prompt** response type allows developers to prompt users for actions without writing code.

The **Prompt** event handler is asynchronous, so if it appears in a chain of events, that chain is not suspended while waiting for the user's response.  The prompt is displayed after the event chain that runs the **Prompt** event handler is completed.

You can associate a form event name with each response option.  When a user selects a response, the event associated with that button is generated in the calling form.

If multiple **Prompt** event handlers are run in the course of a single event chain, only the last prompt is displayed.

## Run Background Task response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024244.html

Use event handlers with a **Run Background Task** response type to submit a job to the Infor TaskMan batch processing facility. To define a background task response, you must specify the task name and a comma-delimited list of parameters.

## Run Form response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/acj1710808974727.html

The **Run Form** response type launches a specified form in a separate window or tab.

The current form continues to run and to be available to the user.

## Run Form as Linked Child response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/yqf1710809327001.html

The **Run Form as Linked Child** response type is similar to the **Run Form** response type. The primary difference is that this response type manages the parent-child relationship defined between the two forms. Typically, the data presented in the child form is related to data presented in the current IDO item presented on the parent form. When the parent form is navigated, the child form is automatically refreshed.

The **Run Form as Linked Child** response type takes several special parameters. First, you must specify the **Linkby** parameter. The parameter consists of pairs of properties, one from the parent form and one from the child form, that are used to filter the child form. The **Linkby** specification determines these behaviors:

- The child form is populated by those IDO items for which properties match the values of the parent form properties. The filter is reset and the child form is refreshed every time the parent form is navigated.
- The application automatically propagates the parent properties to the corresponding child properties for any new items saved from the child form.
- Child form components that are bound to linked properties are made read-only.

The **Run Form as Linked Child** response type allows variables to be set in the child form every time the parent form is navigated. Specify the variables you want to set on the child form as the target variables. For each target variable, specify the value you want to assign to it. This value specification can include the standard substitution keywords and can reference properties, components, and variables from the parent form.

The **Run Form as Linked Child** response type takes a parameter to refresh the current item on the parent form any time the child form's primary collection is saved. To cause this behavior, select the **Reload After Child Save** parameter. Use the parameter in cases in which saving the child form might cause data in the parent form's current item to become obsolete.

## Run Form as Modal Child response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/joc1710810167735.html

The **Run Form as Modal Child** launches a specified form in a modal child relationship to the parent form.

With modal forms, the user is not able to interact with the original (parent) form until the modal child target form is closed. At that time, control returns to the original form.

The **Run Form as Modal Child** response type allows you to use the **OK/Cancel Optional** parameter. Normally, the application displays the **OK** or **Cancel** prompt when users close the modal child form. The **OK/Cancel Optional** parameter eliminates this prompt. When users close the modal form, it closes and indicates that the user exited the child form without executing a Cancel action or an OK action. The WinStudio API exposes this information during the generation of the standard form event StdFormCalledFormReturned.

## Run Form to Retrieve Filter response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/stb1710810878521.html

The **Run Form to Retrieve Filter** response type runs a query form for the current form.

When the query form exits, its filter criteria are returned to the current form.

## Run Script response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024306.html

Event handlers with a **Run Script** response type allow the use of scripts to handle the event. To define a **Run Script** event handler, you must specify the name of the script to run and a comma-delimited list of parameters to pass to the script. You can specify literal, property, variable, and component values as parameters.

Inside the script, access parameters by using the `GetParameter()` function. `GetParameter(0)` returns the first parameter value; `GetParameter(1)` returns the second parameter value; and so on.

Scripts can also access application objects and data through the scripting API.

Within a global script, the ReturnValue can be set to **0** to indicate success or a non-zero value to indicate failure.

## Send Web Container Message response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024384.html

Event handlers with the **Send Web Container Message** response type are used to allow communication between the main client application web frame and any child web frames. Specify the message type and the JSON message that describe the information to be passed from the main frame to the child.

## Set Values response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024447.html

Event handlers with the **Set Values** response type are used to set values in variables, properties, and/or components.

You can specify any number of variable-value, property-value, or component-value pairs. Specify the name of the variable, property, or component as the target and specify an expression as the value. The value expression can include the standard substitution keywords and can reference the values of properties, components, and variables.

## Timer response type

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024525.html

Use the **Timer** response type to start and stop a timer attached to a form. To start the timer as soon as a form launches, use this response type with a StdFormPreDisplay event.

You can use timers to check and refresh collections automatically, or to perform other tasks that must be attended to automatically on a periodic basis.

This response type has two possible parameters:

- An `ACTION` (either `Start` or `Stop`)
- An `INTERVAL`, representing the amount of time that is to pass between "ticks" of the timer, in milliseconds.

  **Note:** For forms used in the web client, the minimum valid value is 5000 (milliseconds). Values less than this are automatically treated as 5000 in the web client.

  See [Edit Timer Actions dialog box](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/winstudio/winstudioeditmode/dialogs_edit_mode/edit_timer_actions_dialog_box.html).

You can set the `INTERVAL` only if the `ACTION` is `Start`. To change the interval, you must stop and restart the timer.

Timers must be used in conjunction with a [StdFormTimerTick](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148067127.html) event. Each time the timer "ticks", it triggers this event.

**Note:** When the form closes, the timer stops automatically for that form. In the web client, the timer also stops whenever the form that uses it loses the focus.
