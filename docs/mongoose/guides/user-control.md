# UserControl components and web user control APIs

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148028518.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About UserControl components

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148028518.html

A UserControl component is a container for a Web User Control that might or might not include a .NET assembly.

UserControl components are used to add custom user interface elements to forms. Mongoose supports these implementation options for developing user controls:

- To create a user control that functions in both the web client and the Windows client, create a Web User Control. This type of User Control is essentially an HTML page that is designed to function as part of the user interface. In this case, the UserControl component functions as a container for the Web User Control, which is an HTML page with its associated resources.

  **Note:** This is the only option we fully support at this time. The other options mentioned here are still supported for legacy user controls, but we do not encourage them for ongoing development.

  This option is created by selecting the **Use Web Control** option in the **Windows** section of the **Edit User Control Reference** dialog box and supplying a **Control URL** for the control implementation in the **Web** section.
- (Deprecated) If the target platform is the Windows client only, you can create a Windows user control based on the .NET System.Windows.Forms.UserControl class. This component does not render or function if the form is opened in the web client.
- (Deprecated) If the target platform is the web client only, you can create a web-based user control that works only in the web client. This is done by:
  - Clearing all fields and options in the **Windows** section of the **Edit Web User Control Reference** dialog box.
  - Specifying a **Control URL** in the **Web** section of the **Edit Web User Control Reference** dialog box; OR specifying a .NET assembly and an absolute or relative URL in that same section.

  This component does not render or function if the form is opened in the Windows client.
- (Deprecated) Finally, you can create both a Windows user control assembly and a web user control, which causes the framework to render one or the other, depending on the client. In this case, you must provide both a Windows **Assembly Name** and a **Control URL**. This use case is rare.

## Creating a UserControl component

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/kjb1475099684524.html

A UserControl component is a container for a Web User Control that might or might not include a .NET assembly. User Controls are used to add custom user interface elements to forms.

This topic presents the recommended basic process to create a user control. The specifics depend on the user control you are creating. There are other ways to create user controls that are not covered by this topic.

1. Create an HTML web page to host and display the user control. 

   See [Creating HTML web pages](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/hwg1656915696608.html).

   You can use any HTML-related assets. These assets can include JavaScript files, image files, CSS files, DLL assemblies, and so on.

   Optionally, organize all the assets to be imported into a single folder or directory.

   **Note:** You can reference scripts, style sheets, images, or any assets stored in another server. For example, to include the jQuery JavaScript library without importing it into Mongoose, you can use a URL reference such as this in your user control web page: **https://code.jquery.com/jquery-3.1.1.min.js**.
2. Import your HTML page and associated files or resources. 

   See [Importing Web User Control Assets](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/ejd1475209601163.html).
3. Open or create the form where you want to create your user control component.
4. Enter the designer.
5. In the Toolbox, select **Framework Components** \>  **UserControl**. 

   For IDS type forms, select **Components** \> **User Control**.
6. Drag the component to the form and drop it where you want the component to appear.

   **Note:** You can resize the UserControl component by clicking and dragging to size in most form types. If used in an IDS type of form, the component can be resized through the components' height and width property.
7. In the **Edit User Control References**, perform these steps: 
   1. Select the **Use Web Control** check box.
   2. In the **Control URL** field, select the HTML file that hosts your user control.
   3. Select the **Web User Control Asset** option.
   4. Click **OK**.
8. Perform the other steps required to integrate the user control with the data from the form. 

   This might include data binding, form scripting, or other steps to push and pull data between the form and the user control.

   For calls from the form to the user control, you can use the PostUserControlMessage scripting API or a form event handler with the response type Invoke User Control.

   For calls from the user control back to the form, you can use JavaScript API methods, such as WSForm.getCompValue, WSForm.setCompValue, WSForm.getVarValue, WSForm.setVarValue, WSForm.invoke, WSForm.generate, WSForm.subscribe, WSForm.UserControl.registerListener, MG.onReady, and MG.generateServerEvent.
9. Click **Save**.
10. Close the form.
11. Unload global objects.
12. Reopen the form.
13. Test the user control for correct operation.

## Managing Web User Control Assets

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/cdh1475264760240.html

Web User Control Assets are files and other resources used to create a Web User Control. Web User Controls are specialized user controls that you can create to perform a wide variety of user interface functions, both in the web client and in the Windows client.

Web User Control Assets are managed using the **Edit Web User Control Assets** dialog box, which is accessible from the **Edit** menu in the designer (Web Designer in the web client, Design Mode in the Windows client). In this dialog box, you can perform these tasks:

- Import assets used to implement Web User Controls.

  See [Importing Web User Control Assets](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/ejd1475209601163.html).
- Create HTML pages and other resources that can be used to host and display Web User Controls.

  The **New** option launches a built-in HTML editor, the **Edit Browser File** dialog box, with the basic HTML framework already created. Any text resource (HTML, JavaScript, CSS, XML, etc.) can be created or edited using this built-in editor. In addition, if the content type is an image type, this dialog box can be used to import or export those images.
- Edit HTML pages and other resources that can be used to host and display Web User Controls.

  The **Edit** option launches the **Edit Browser File** dialog box, already populated with the data for the selected asset.
- Delete a selected asset.
- Copy a selected asset, which you can then modify for your own purposes.

## Importing Web User Control Assets

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/ejd1475209601163.html

Web User Control Assets are files and other resources used to create a Web User Control. Web User Controls are specialized user controls that you can create to perform a wide variety of user interface functions, both in the web client and in the Windows client.

To import Web User Control assets:

1. In Mongoose, go into the designer (Web Designer in the web client, Design Mode in the Windows client).
2. From the **Edit** menu, select **Web User Control Assets**.
3. In the **Edit Web User Control Assets** dialog box, select the **Page Elements** tab.
4. Click **Import**.
5. In the **Import Files and Folders** dialog box, click **Source Folder** and use the **Browse For Folder** dialog box to navigate to the folder where your HTML file and assets are located. 

   **Note:** If your HTML file and associated resources are all located in a single folder (possibly with subfolders), you can import them all at once. Alternatively, you can use these steps to import each file or resource individually.
6. To return to the **Import Files and Folders** dialog box, click **OK**.
7. In the **Target Path** field, specify the folder where you want to import the HTML file and assets. You can do this in either of these ways: 

   - To import to an existing folder, select the folder/subfolder you want from the drop-down list.
   - To create a new base-level folder, type the folder/subfolder path directly in the **Target Path** field. Name the folder or use this format: `folder`/`subfolder`/`subfolder`...
8. Click **Add files**.
9. In the **Select files and folders to import** dialog box, use the check boxes to select the files/folders you want to import. 

   The **Action-Path** grid displays the selected files and the folder/file destinations.

   **Note:** If your HTML file and associated resources are all located in a single folder (possibly with subfolders), when you import that folder, the **Edit Web User Control** dialog box duplicates the folder/subfolder structure that the files had in the original location.
10. Click **OK**.
11. In the **Edit Web User Control Assets** dialog box, verify that the files/folders you selected have been imported to the correct location.
12. Click **OK**.

## About web user control APIs

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/isw1656986650120.html

This section describes the JavaScript API methods that are used for calls from the user control back to the form.

## MG.generateServerEvent method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/gao1656992191755.html

### Description

Use `MG.generateServerEvent` to send a message to the server-side assembly associated with this user control. This is similar to the `WSUserControl.generateServerEvent` method in previous versions.

### Syntax

```
MG.generateServerEvent(payload)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `payload` | Object | Specify a string or object that contains the data to be sent to the server-side assembly. |

## MG.onReady method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/jgu1656992026502.html

### Description

Use `MG.onReady` to register a function to be called when the containing form is initialized and ready for interactions. This is similar to the `WSUserControl.onReady` method in previous versions.

### Syntax

```
MG.onReady(callbackFn, scope)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `callbackFn` | Function | Specify this function to call when server-side assembly messages are received. |
| `scope` | Object | Optionally, specify the value of “this” used when the `callbackFn` function is executed. |

## WSForm.getCompValue method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lyl1656987107593.html

### Description

Use `WSForm.getCompValue` to retrieve the value of a component on the form.

### Syntax

```
WSForm.getCompValue(componentName, callbackFn)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `componentName` | String | Specify the name of a component on the current form. |
| `callbackFn` | Function | Specify this function to call when the value of the component has been retrieved. This function must define a single parameter which contains the component’s value. |

## WSForm.getVarValue method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/idw1656988097529.html

### Description

Use `WSForm.getVarValue` to retrieve the value of a form variable.

### Syntax

```
WSForm.getVarValue(variableName, callbackFn)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `variableName` | String | Specify the name of a form variable. |
| `callbackFn` | Function | Specify this function to call when the value of the variable has been retrieved. This function must define a single parameter which contains the variable’s value. |

## WSForm.generate method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/wyj1656989471472.html

### Description

Use `WSForm.generate` to generate a form event.

### Syntax

```
WSForm.generate(eventName, callbackFn, async)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `eventName` | String | Specify the name of an event to generate on the form. |
| `callbackFn` | Function | Optionally, specify this function to call when the event handlers have been executed, or when the event has been queued if `async` is set as true. |
| `async` | Boolean | Optionally, if set as true, PostEvent is generated asynchronously. |

## WSForm.invoke method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/saq1656988986816.html

### Description

Use `WSForm.invoke` to invoke a form script method.

### Syntax

```
WSForm.invoke(methodName, [parameter1[,...]], callbackFn)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `methodName` | String | Specify the name of a form script method to invoke. |
| `parameter<n>` | Any | Specify a list of method parameters corresponding to the form script method parameters. |
| `callbackFn` | Function | Optionally, specify this function to call when the method has been completed. |

## WSForm.setCompValue method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/veb1656987731919.html

### Description

Use `WSForm.setCompValue` to set the value of a component on the form.

### Syntax

```
WSForm.setCompValue(componentName, value, callbackFn)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `componentName` | String | Specify the name of a component on the current form. |
| `value` | String | Specify the new value to assign to the component. |
| `callbackFn` | Function | Optionally, specify this function to call when the value of the component has been set. |

## WSForm.setVarValue method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vml1656988446002.html

### Description

Use `WSForm.setVarValue` to set the value of a form variable.

### Syntax

```
WSForm.setVarValue(variableName, value, callbackFn)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `variableName` | String | Specify the name of a form variable. |
| `value` | String | Specify the new value to assign to the variable. |
| `callbackFn` | Function | Optionally, specify this function to call when the value of the variable has been set. |

## WSForm.subscribe method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/ety1656990584665.html

### Description

Use `WSForm.subscribe` to subscribe to form events.

### Syntax

```
WSForm.subscribe(eventName, eventHandler, callbackFn)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `eventName` | String | Specify the name of a form event to subscribe to. |
| `eventHandler` | Function | Optionally, specify this function to call when the specified event is generated on the form. This function is called with the name of the event as the only parameter. |
| `callbackFn` | Function | Optionally, specify this function to call when the subscription has been initialized. |

## WSForm.UserControl.registerListener method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/gix1656990873454.html

### Description

Use `WSForm.UserControl.registerListener` to register a function to receive messages from a server-side assembly, through the QueueClientResponse method. This method is similar to the `WSUserControl.registerCallback` method in previous versions.

### Syntax

```
WSForm.UserControl.registerListener(callbackFn, scope)
```

### Parameters

This table describes the method parameters.

| Name | Type | Description |
| --- | --- | --- |
| `callbackFn` | Function | Specify this function to call when server-side assembly messages are received. |
| `scope` | Object | Optionally, specify the value of “this” used when the `callbackFn` function is executed. |
