# Using the Web Designer

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/wik1708998460833.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Using the Web Designer

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/wik1708998460833.html

The Web Designer is the design environment for the web client. Whether you are creating an application, a form, a global object, or other application elements, the Web Designer is where this is accomplished.

## About the Web Designer

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/fem1496284600424.html

The Infor Mongoose Web Designer is a web client application designed to perform many of the same functions as Design Mode in the Windows ("smart") client. The Web Designer provides a limited means for form and application developers to create and modify both forms and global objects from the web client. The Web Designer is designed to look and behave much like its Design Mode counterpart.

The Web Designer can be used to create and modify both forms and global objects, although it is slightly more limited than the Windows client Design Mode. For example:

- You cannot use Diagram components on forms.
- There are no debugging capabilities in the built-in Script Editor, which is the only scripting tool available in the Web Designer.
- The Web Designer does not include the Object Viewer. Many of the Object Viewer’s functions, however, are still available in other parts of the Web Designer.

The Web Designer has the Toolbox and Form/Component property sheets that look and perform much like they do in Design Mode. While the Web Designer does not include the Object Viewer, much of the same functionality of the Object Viewer is available from a new **Details** panel. This **Details** panel includes these primary areas of functionality, displayed on separate tabs:

- **Collections** – The **Collections** options that are on the **Form** property sheet in Design Mode have been moved to this tab in the **Details** panel. The functionality within this tab is identical.
- **Components** – This tab presents a grid view of the components on a form, similar to the Object Viewer. This display is read-only, but it allows you to view selected properties/attributes of multiple components at once. To modify the properties/attributes of a given component, you must use the **Component** property sheet.

  In addition, when you select a component in the **Components** tab, it becomes automatically selected in both the form design workspace and in the **Component** properties sheet.
- **Event Handlers** – This tab displays information about any form event handlers defined for the form.

  The left side of the display is a list of the form event handlers. Each of these can be expanded to view basic information about the event handler.

  The right side of the display shows more detailed information about a selected event handler. You can use this right pane to create event handlers and to modify event handler properties and attributes.
- **Variables** – This tab displays information about any variables defined for the application. Groups of variables are arranged by these criteria:
  - Persistent form variables
  - Temporary form variables
  - Persistent global variables
  - Temporary global variables

  The right side of the display shows more detailed information about a selected variable. You can use this right pane to create variables and to modify variable properties and attributes.
- **Design View Size** – This tab displays information about the size of the form design area. It also allows you to change the size of the form's design view. This enables you to increase the size of the form design area, usually so you can see any components that might be hidden in the area outside the form's normal viewing area.

  See [Changing the size of a form's viewing area](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/efg1588133564921.html).

## About the Web Designer toolbar

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/msh1571640457824.html

The Web Designer toolbar provides tools that help you:

- Align form components with respect to other components and to the design grid
- Resize components uniformly
- Adjust space between components uniformly
- Arrange components vertically or horizontally
- Undo and redo changes
- Launch the wizards that facilitate the creation of SQL tables, IDOs, and forms

Most options on the toolbar require you to select more than one component. To select multiple components, hold down CTRL, and then click each component.

Alignment options align selected components with whichever component has solid black squares for handles. After selecting all components to be aligned, click the one you want the others to align with. The handles of this component should be solid black, and all others should be black-outlined handles. The procedure for selecting components to be resized or spaced uniformly is similar.

| Icon tooltip | Description |
| --- | --- |
| New Form Definition | Launches the **Form Wizard Selection**, which allows you to create forms, either new or as extensions of existing forms. |
| Copy Form Definition | Opens the **Copy Form Definition** dialog box, which allows you to copy an existing form definition into a new form. |
| Delete Form Definition | Launches the **Select Form** dialog box, which allows you to select a form definition for deletion. |
| Align Left | Aligns all selected components so their left edges line up. |
| Align Center | Aligns all selected components so their horizontal centers line up. |
| Align Right | Aligns all selected components so their right edges line up. |
| Align Top | Aligns all selected components so their top edges line up. |
| Align Middle | Aligns all selected components so their vertical middles line up. |
| Align Bottom | Aligns all selected components so their bottom edges line up. |
| Make Same Width | Resizes all selected components so they are the same width. |
| Make Same Height | Resizes all selected components so they are the same height. |
| Make Same Size | Resizes all selected components so they are the same size. |
| Space Horizontally | Moves selected components so they are evenly spaced within the horizontal boundaries. This option uses the left edge of the leftmost component and the right edge of the rightmost component as the horizontal boundaries. It moves only the inner components, leaving the outer two components where they are. This option works only when three or more components are selected. |
| Space Vertically | Moves selected components so they are evenly spaced within the vertical boundaries. This option uses the top edge of the topmost component and the bottom edge of the bottommost component as the vertical boundaries. It moves only the inner components, leaving the outer two components where they are. This option works only when three or more components are selected. |
| Undo | Undoes the previous design action. To undo multiple actions, click this button repeatedly. |
| Redo | Repeats a design action that has been undone. To redo multiple actions, click this button repeatedly. |

## Use of the Web Designer

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/gdq1496286152826.html

This group of topics provides procedures for the most common tasks you can perform with the Infor Mongoose Web Designer.

- [Launching the Web Designer](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/sxs1496286631314.html)
- [Modifying an existing form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/emh1496287167894.html)
- [Creating a form in the Web Designer](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/xul1496288205534.html)
- [Creating a form by extension](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/krx1502426037877.html)
- [Creating a bound component in the Web Designer](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/ina1496291804411.html)
- [Creating global objects in the Web Designer](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/oxw1496346301650.html)
- [Modifying global objects in the Web Designer](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/pht1496371163480.html)

## Launching the Web Designer

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/sxs1496286631314.html

To launch the Infor Mongoose Web Designer, you must first be logged in to the web client version of your Mongoose-based application.

1. In the web client menu bar, click the icon to open the Web Designer. 

   This icon looks like a paint brush. When you hover over it, the text “Open designer in a new window” displays.
2. Optionally, if you are logging in with editing permissions of Site Developer, specify the editing scope that you want to use. 

   If you ignore this step but later decide you want to change your editing scope, go to the **Form** menu and select **Definition \> Impersonate**.

The Web Designer opens in a new tab or window.

## Modifying an existing form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/emh1496287167894.html

**Note:** If you use a source control system, make sure you have the form checked out before you perform this procedure.

1. Launch the Web Designer.
2. In the Web Designer tab/window, open the form you want to modify.
3. Make whatever modifications you want to make. 

   Form modifications you can make include but are not limited to these:
   - Modify the form-level properties and attributes.
   - Add components.
   - Modify the properties and attributes of existing components.
   - Delete components.
4. Save your work.
5. Close the Web Designer tab/window.
6. In the regular web client tab/window, open the form and verify that your changes were made.

**Note:** You might need to unload global form objects to see the changes.

## Creating a form in the Web Designer

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/xul1496288205534.html

1. Launch the Web Designer.
2. In the Web Designer menu bar, click the New Form Definition icon. 

   This icon looks like a document with a plus sign in the center. When you hover over it, the text “New Form Definition” displays.

   The **New Form Definition** form opens to the **Form Wizard Selection** page.
3. Select the **New Form** option. 

   For the procedure to create a form that is an extension of an existing form, see [Creating a form by extension](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/krx1502426037877.html).
4. From the **Category** drop-down list, select one of these options: 

   - **Classic** \- This option includes most of the standard Mongoose form types.
   - **IDS** \- This option launches a wizard that allows you to create a form based entirely on the IDS layout and IDS controls.
   - **NewData** \- This option launches a wizard that allows you to create IDOs and tables, optionally along with a form.

     **Note:** This wizard is used to create only MultiView, Grid Only, or Detail Only forms.
5. From the **Wizard** drop-down list, select the type of form you want to create.
6. Click **OK**.

What happens from this point on depends on what type of form you are creating. Each type of form has its own wizard with its own procedure and its own topic.

See one of these help topics:

- [Creating a Build-from-Scratch form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/isi1501810350675.html)
- [Creating a Detail Only form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/dzs1501813525187.html)
- [Creating a Grid Only form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/bzz1501888862030.html)
- [Creating a MultiView form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/byx1502139639463.html)
- [Creating a Query form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/qiv1502150350648.html)
- [Creating a Report type form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/kun1502739068318.html)
- [Creating a Tile form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/hyx1502163010259.html)
- [Creating an IDS type form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/xxz1742360081147.html)
- [Creating a form with the Web Designer New Data Maintenance Wizard](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vol1502315746647.html)

## Creating a bound component in the Web Designer

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/ina1496291804411.html

This procedure assumes that you have already launched the Web Designer and have opened the form for which you want to create a bound component.

1. Add the type of component you want to bind to the form. 

   If the component already exists on the form, select it.
2. In the **Component** property sheet, select **Data Source \> Binding Type**.
3. From the **Binding Type** drop-down list, select the type of binding to use for the component.
4. Click the ellipsis (**…**) button for the **Binding** property.
5. Use the editor form for the specified **Binding Type** to specify the properties and attributes for the component.
6. Save your work.

## Creating global objects in the Web Designer

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/oxw1496346301650.html

You can create any type of global object (except an image object) that is available in the Web Designer. The procedure to create each type of global object is slightly different, because each global object type has its own editor form.

Image objects cannot be created in the Web Designer, but they can be imported.

- [Creating a Background Color object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/dds1496348939665.html)
- [Creating a Component Class object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/tlj1496349619879.html)
- [Importing an Image object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/fou1496360378991.html)
- [Creating a Property Class Extension object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vgb1496360908513.html)
- [Creating a Script object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/sgm1496361233787.html)
- [Creating a Shortcut Menu object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/uoy1496361680193.html)
- [Creating a String object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/wyy1496368191904.html)
- [Creating a Theme object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/tgj1556505418020.html)
- [Creating a Validator object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/cdm1496369868126.html)
- [Creating a Variable object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/bql1496370234576.html)
- [Creating a Web User Control Asset object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/tub1496370558234.html)

## Creating a Background Color object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/dds1496348939665.html

To ensure consistency and "same-look-and-feel" across a variety of forms and components, you can create and apply a set of "Background Color" global objects for the forms and components in your application. These color definition objects are created and maintained using the **Edit Color** dialog box. Once created, these color definition objects are available for use in both forms and components.

**Note:** To adjust a color definition object without affecting the definition itself, apply the object to the form or component and then adjust it in the form or component property sheet (at which point it becomes a custom or modified definition). This procedure assumes that you already have at least one background color definition object created and available in the system.

To create a color definition object:

1. With no form open, go into Design Mode. 

   In the web client, this launches the Web Designer page.
2. From the **Edit** menu, select **Background Color**.
3. In the **Edit Color** dialog box, click **New**.
4. In the **Name** field, type the name for the Background Color object.
5. Click **OK**. 

   The new color object displays in the color object list, prefixed (automatically) with "gbgc\_".
6. If the new color object is not selected, select it.
7. From the **Style** drop-down list, select whether the Background Color object is to be a solid color (**Color**), a graduated blend between two colors (**Gradient**), or completely transparent/no color (**None**).
8. If you selected **Color** or **Gradient**, use the first input field to the right of the **Color** field to specify the basic color in standard RGB format. 

   For example, to specify solid red as the background color, you would enter **255,0,0**.

   The **Color** field and **Preview** panel both display the basic color.
9. Optionally, in the second input field to the right of the **Color** field, specify an alpha (transparency) setting between **0** and **255**. 

   The **Preview** panel changes to display the color with transparency setting.
10. If you selected **Gradient** as the **Style**, specify the secondary color settings in the RGB and alpha fields, the same as you did for the basic color.
11. If you selected **Gradient** as the **Style**, from the **Direction** drop-down list, select what direction you want to display the gradient transition.
12. To save the new background color object, click **OK**.

The system creates and saves the background color definition. If it has already been specified anywhere in the application, it is automatically applied.

## Creating a Component Class object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/tlj1496349619879.html

1. Launch the Web Designer.
2. Select **Edit** \> **Component Class**.
3. In the lower left corner of the **Component Classes** editor, click the New (**\+**) button.
4. In the **Name** field of the **New** form, specify a name for the new Component Class object.
5. Click **OK**. 

   The new Component Class name displays in the list on the left panel, and the **Properties** panel on the right displays the property sheet for the new Component Class object.
6. In the property sheet, specify the properties and attributes to be used by the new Component Class object.
7. Click **OK**.

## Importing an Image object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/fou1496360378991.html

Using the **Images** form, you can import image files from another source to Mongoose. When you import an image file, you can either add it to the list of existing image files or replace a file that has already been imported.

To import an image file for use within Mongoose:

1. Launch the Web Designer.
2. From the **Global Objects** menu, select **Image**.
3. Perform one of these actions: 

   - To add a new file to the set of available image files, click **New**.
   - To replace an existing image file, select the file you want to replace, and then click **Import**.
4. In the **Get Image for...** form, perform one of these actions: 

   - Click **Select File** and use the **Open** dialog box to select the file to import.
   - From another window, drag and drop the file to import onto the outlined space.
5. Click **Upload**.
6. In the **Images** form, click **OK**.

## Creating a Property Class Extension object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vgb1496360908513.html

1. In the web client, launch the Web Designer.
2. Select **Edit \> Property Class Extension**.
3. In the lower left corner of the **Property Class Extensions** editor, click the New (**\+**) button.
4. In the **Name** field of the **New** form, specify a name for the new Property Class Extension object.
5. Click **OK**. 

   The new Property Class Extension name displays in the list on the left panel, and the **Properties** panel on the right displays the property sheet for the new Property Class Extension object.
6. In the property sheet, specify the properties and attributes to be used by the new Property Class Extension object.
7. To save the Property Class Extension as a new object, click **OK**.

## Creating a Script object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/sgm1496361233787.html

1. Launch the Web Designer.
2. Select **Edit** \> **Script**.
3. Click the New (**\+**) button.
4. In the **Name** field of the **New** form, specify a name for the new Script object.
5. Click **OK**. 

   The new Script name displays in the list on the left panel, and the **Properties** panel on the right displays the property sheet for the new Script object.
6. From the **Script Language** drop-down list specify whether the script is to be in **Visual C#** or **Visual Basic**.
7. To write the script, click the ellipsis (**…**) button next to the **Name** field.
8. Use the **Script Editor** to write your script code.
9. Click **Compile Result**.
10. If necessary, correct any errors and recompile.
11. To save your script, click **OK**.
12. In the **Scripts** editor, click **OK**.

## Creating a Shortcut Menu object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/uoy1496361680193.html

1. Launch the Web Designer.
2. Select **Edit** \> **Shortcut Menu**.
3. Click the New (**\+**) button.
4. Specify a name for the new Shortcut Menu object in the **Name** field.
5. Click **OK**. 

   The new Shortcut Menu name displays in the list on the left panel, and the **Properties** panel on the right displays the property sheet for the new Shortcut Menu object.
6. In the **Properties** panel, click the New (**\+**) button.
7. Specify a caption for the shortcut menu item in the **Caption** field.

   This caption determines how the menu item displays on the shortcut menu.

   We recommend the use of translatable strings for these captions.
8. From the **Event To Generate** drop-down list, select the event to be generated when the user selects this menu item.
9. Repeat Steps 6–8 for each additional menu item to be on the menu.
10. Click **OK**.

## Creating a String object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/wyy1496368191904.html

1. Launch the Web Designer.
2. Select **Edit** \> **String**.
3. Click the New (**\+**) button.
4. In the **Name** field, specify a name for the new String object. 

   We recommend that you create the String object as a translatable string, using the standard Mongoose string-naming guidelines.
5. Click **OK**. 

   The new String name displays in the list on the left panel, and the **Properties** panel on the right displays the property sheet for the new String object.
6. In the **Properties** panel, click **Design**.
7. Optionally, modify the **String Value** as you want it to appear when the string object is used.
8. Optionally (but recommended), add a **Description** of the string object. 

   This description should indicate what the string object is intended to be used for. This helps you and others (such as translators) to know how to use (or translate) the string object correctly.
9. Click **OK**.

The system adds the new string object to the Strings table. It can now be used as any other string global object.

## Creating a Theme object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/tgj1556505418020.html

To create a theme:

1. Launch the Web Designer.
2. Select **Edit** \> **Theme**.
3. In the lower left corner of the **Themes** editor, click the New (**\+**) button.
4. In the **Name** field of the **New** form, specify a name for the new theme.
5. Click **OK**. 

   The new theme displays in the list on the left panel, and the **Properties** panel on the right displays the property sheet for the new theme.
6. In the property sheet, specify the application-level theme settings:

   - Explorer style
   - Required field indicator
   - Group box style
   - Notebook style
   - Button animation
   - Default pinned explorer folder

   Use the drop-down lists to specify the desired attributes.
7. Click the **Edit** button.
8. In the **Edit Styles** dialog box, select the UI element that you want to modify and use the categories and attributes to:

   - Specify or add a font
   - Specify or delete the font size
   - Specify the font style
   - Change font and background colors
   - Show or hide toolbar buttons
   - Add a form or component type theme class
   - Delete a theme class
9. Click **OK** twice.
10. Click **Save**.
11. Close the Web Designer.

To see the changes made on the Theme Editor, you must return to the web client to ensure that the theme is selected, then log out and log in again to the web client.
