# Themes, web client pages only

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/thu1709156178502.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Themes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/thu1709156178502.html

In any Mongoose-based application, you can use themes to control the overall "look-and-feel" of the application. This can be a quick and relatively easy way to customize your application.

Theme options include these aspects:

- The layout of basic UI components, such as tabs, menus, and toolbars
- The use of background and foreground colors on forms, dialog boxes, menus, form components, and more
- The size, color, and type of fonts to be used in displaying forms, dialog boxes, and their various components

You can make adjustments to all these and more, using a wide array of options that are available through the **Theme** editing options in the Web Designer and the **Theme Editor** in the the Windows client.

## About themes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454147665141.html

At their most basic level, themes affect the look and feel of the application. You can create your own themes or use one of the two system themes that we provide.

**Note:** There are some differences in the way themes are handled in the web client. The web client recognizes theme settings related to the explorer, foreground colors, background colors, tabbed layout, and required field indicators. The web client does not recognize settings pertaining to the group boxes or notebook tabs. In the Infor OS Portal, Mongoose adapts to the Infor OS Portal theme that is mapped using the **Theme Color Mapping** form.

You can change the look of most components. The changes that are available for each component are different. To determine what can be changed, see the **Global Objects \- Themes** in the web client. You can also determine the explorer style, the group box style, the notebook style, the toolbar grouping, and whether there is a required field indicator.

### System themes

The application ships with these themes:

- **Infor**: Notable aspects include five menu choices in the menu bar and required fields that are identified with a red asterisk. This theme is the default theme.
- **Classic**: This theme provides the look and feel of legacy versions of the application. Required fields have a yellow background.
- **Light**: This theme is the re-branded Infor theme that provides a lighter look and feel for the user interface.
- **Dark**: This theme provides a darker look and feel for the user interface. This theme is a combination of the colors black for the background and white for the buttons, menus, texts, and labels.
- **High Contrast**: This theme uses a darker shade of black and a brighter shade of white to make the user interface easier to use in low-light environment and for users with photo sensitivity or contrast issues.

You can edit these themes, but you cannot delete them.

## Applying a theme in the web client

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/kqu1557467489556.html

Use themes to change the look and feel of your application environment.

1. Select **View** \> **User Preferences**.
2. Click the **Layout** tab.
3. Specify this information:

   Theme

   Select a theme from the list.

   Aside from the themes that are provided with the application, user-created themes, if available, also displays on the list.

   Update Existing View

   This option is selected by default. When selected, the theme is applied immediately. When cleared, you must refresh the browser to apply theme changes.

   Tabbed Form Layout

   This option is selected by default. When selected, forms are shown in tabbed form layout.

   When cleared, forms open as undocked floating items, also known as Multiple Document Interface (MDI) layout.

   Display Status Bar

   To display the status bar as a footer in the web browser, select this option.
4. Click **OK**.

## Editing themes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148011702.html

Your Mongoose-based application comes with a number of preset themes available. You can select one of these themes and use it 'as is', or you can select one and modify it to your liking. You can even, if you wish, create a totally new theme from scratch and use it to control your application's overall "look-and-feel".

In the web client, themes are edited using the Web Designer. From the **Edit** menu, select **Theme**. This opens the **Global Objects** dialog box, which you can use to edit or create your theme.

In the Windows client, use the **Theme Editor**. To do this, perform one of these actions:

- In Runtime Mode: From the **View** menu, select **User Preferences**. Select the **Runtime Layout** tab, and then select a theme to edit. Click **Edit**, and use the **Theme Editor** to make your changes.

  **Note:** This option is disabled for those with Vendor Developer editing permissions.
- In Design Mode: From the **Edit** menu, select **Theme**. This launches the **Theme Editor**, which you can then use to edit or create your theme.

## Using a theme editor

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/olb1709158579972.html

To edit or create a theme, you can use one of the two theme editors: In the web client the theme editor is the **Global Objects \- Theme** dialog box. In the Windows client, it is the **Theme Editor** dialog box.

Although the means to access these two theme editors is different, the function of each is essentially the same.

## Using the Global Objects - Theme editor

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/yag1554977787064.html

To edit or create themes in the web client, use the **Global Objects \- Theme** dialog box in the Web Designer.

**Note:** 

- Before you modify a theme, ensure that the theme is locked or checked out on your user account.
- For the procedure to edit or create themes in the Windows client, see [Using the Theme Editor dialog box](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148011873.html).

1. Launch the Web Designer.
2. Select **Edit** \> **Theme**.
3. In the left pane of the **Global Objects \- Themes** editor, select the theme that you want to modify.
4. In the right pane of the **Global Objects \- Themes** editor, click the **Design** button to modify application-level theme settings: 

   - Explorer style
   - Required field indicator
   - Group box style
   - Notebook style
   - Button animation
   - Mode
   - Default pinned explorer folder

   Use the drop-down lists to specify the desired attributes.
5. Click the **Edit** button.
6. In the **Edit Styles** dialog box, select the UI element that you want to modify and use the categories and attributes to:

   - Specify or add a font
   - Specify or delete the font size
   - Specify the font style
   - Change font and background colors
   - Change the required indicator color
   - Change the combined toolbar position
   - Show or hide toolbar buttons
   - Add a form or component type theme class
   - Delete a theme class
7. Click **OK** twice.
8. Click **Save**.
9. Close the Web Designer.

To see the changes made on the **Global Objects \- Themes**, you must return to the web client to ensure that the theme is selected, then log out and log in again to the web client.

## Changing theme colors

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/qvf1709178351296.html

Depending on which theme editor you use (the **Global Objects \- Theme** form in the web client or the **Theme Editor** in the Windows client), the procedure for changing colors of UI elements is simlar, but slightly different.

**Note:** Before you modify a theme, ensure that the theme is locked or checked out on your user account.

## Changing theme colors in the web client

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/cco1556777716664.html

In the web client, you can use the **Global Objects \- Themes** form to set the colors for fonts, backgrounds, and required field indicators. The procedure to change colors is the same for every color specification.

**Note:** Before you modify a theme, ensure that the theme is locked or checked out on your user account.

1. Launch the Web Designer.
2. Select **Edit** \> **Theme**.
3. In the left pane of the **Global Objects \- Themes** editor, select the theme that you want to modify.
4. Click **Design** and then click **Edit**.

   **Note:** The **Edit** button is at the same location as the **Design** button.
5. In the **Edit Styles** dialog box, select the UI element and category that you want to modify.
6. In the attributes pane where you can change the color, select the ellipses (**•••**) button.

   The color picker dialog box displays.
7. Select one of these options: 

   - **None**
   - **Solid**
   - **Base Color**

     **Note:** You can manage the base colors in the **Base Color** property.
   - **Gradient**

     **Note:** The **Gradient** option is not always available. If you select **Gradient**, the gradient stops are displayed in a grid view and the offset (position) of stops are represented as 0 to 100\.
8. For each color option, specify one of these color values: 

   - A standard RGBA color value
   - A hex color value (#AARRGGBB)
9. Click **OK** twice.
10. Click **Save**.

## Adding a theme class

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/ozh1709183141396.html

A theme class is a reusable set of attributes that can be associated with a theme's UI element. You can use a theme editor to create and add classes as desired to facilitate reuse of these sets of attributes.

Any theme classes you create become available for use with forms and components in the designer (Web Designer in the web client, Design Mode in the Windows client).

## Adding a theme class in the web client

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/afj1556777798085.html

In the web client, use the **Global Objects \- Themes** form to create and add theme classes for use with your application.

**Note:** Before you modify a theme, ensure that the theme is locked or checked out on your user account.

1. In the **Global Objects \- Themes** form, select the theme that you want to modify.
2. Click **Design** and then click **Edit**. 

   **Note:** The **Edit** button is at the same location as the **Design** button.
3. In the **Edit Styles** dialog box, select **Form** or a specific form component type.
4. In the **Class Name** field, specify the name for the theme class.
5. Click **Add**. 

   **Note:** 
   - The **Add** button is enabled only if **Form** or a specific form component type is selected.
   - If the theme class name is valid, the tree view of elements refreshes. You must return to the element where the theme class is added.
6. Specify the desired theme class attributes.
7. Click **OK** twice.
8. Click **Save**.

## Resetting theme attributes to their default values

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148012341.html

To reset any changed theme attribute value to its default value, perform this procedure:

1. Open the theme editor for your client.
2. Select the item in the tree pane that you want to revert to its default values.
3. Right-click the item and select **Reset** from the context menu.
