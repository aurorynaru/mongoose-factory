# Working with components

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/aai1717101804884.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Working with components

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/aai1717101804884.html

Each form in a Mongoose-based application contains components that actually do the work for which the form is designed. Components include such things as buttons, editable fields, grids, and much more.

Components can be used to enter and display data, perform calculations, open other forms, and a wide variety of other actions. Individual components can be bound to data or not. They might be interactive or used for display purposes only. They can work in tandem with other components to process and produce new data. With the proper authorization and editing permissions, they can be added to forms or modified for custom use on a form. In certain cases, they can also be "hidden" so that they do not display on the form but work quietly in the background.

Bound components are typically configured to work with specific properties of an IDO (Intelligent Data Object) collection. The data used by a given component can also be manipulated using "events" and "event handlers", either at the form or the application level, using standard operations. And components can be formatted or customized to display or operate in a desired way.

For more information about components, see the other topics in this section of the help.

## Types of components

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024743.html

Mongoose-based applications support a wide variety of components for the presentation and manipulation of data in forms. These components are available for selection in the designer Toolbox (in both clients) and in the **Component** properties sheet, the **Design \> Type** property.

**Note:** To deselect all component types in the Toolbox, select the **Pointer** option.

This table names and describes each of the currently supported component types. If the **Type** property drop-down list names the component type differently, that name displays in parentheses ( ).

- Component Type · Description
- **Component Type:** Barcode · **Description:** A component that creates a barcode.

  See [About Barcode components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vcp1530611752762.html).
- **Component Type:** Browser

  (BrowserControl)

   · **Description:** A component that points to a URL or displays HTML code.

  See [About Browser components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024805.html).
- **Component Type:** Button

  (CancelPushButton, DefPushButton, PushButton)

   · **Description:** A component that creates a rectangular shape that the user can click to do something. Typically, it is used to initiate an action such as running a procedure or launching another form.

  See [About Button components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024883.html).
- **Component Type:** Calendar · **Description:** A component that creates a calendar, similar to the Outlook calendar.

  See [About Calendar components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148024946.html).
- **Component Type:** Chart

  (Graph)

   · **Description:** A component that is used to display a chart that visualizes the data.

  See [About Chart and Gauge components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025070.html).
- **Component Type:** CheckBox · **Description:** A component that has two states: selected (checked) and cleared (unchecked). This component is used for making choices where there are only two options, such as **Yes** and **No**.

  See [About CheckBox components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025351.html).
- **Component Type:** ComboBox · **Description:** A component that is a combination of edit box and drop-down list box components. The combo box allows the user to either type text directly into the component or to select from a drop-down list of values. Like the drop-down list box, the combo box displays the list only when the drop-down arrow button is clicked. Otherwise, it displays the currently selected item in the edit-box portion of the component.

  See [About List, DropList, and ComboBox components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026880.html).
- **Component Type:** DataView · **Description:** A component that displays queried data in a layout similar to an Excel spreadsheet.

  See [About DataView components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025414.html).
- **Component Type:** DateCombo · **Description:** A special kind of combo box for entering dates. When the drop-down arrow button is clicked, an interactive calendar displays, allowing the user to select a date. The user can also enter the date in the field, using the format `mm/dd/yyyy`.

  See [About DateCombo components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025476.html).
- **Component Type:** Diagram · **Description:** A component that allows event handler diagrams to display.

  See [About Diagram components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025554.html).
- **Component Type:** DropList · **Description:** A component that allows data to be displayed and selected from a drop-down list of values. Unlike the list box, the drop-down list displays the list only when the drop-down arrow button is clicked. Otherwise, it displays the currently selected item.

  See [About List, DropList, and ComboBox components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026880.html).
- **Component Type:** Edit · **Description:** A component used for the display and input of text by means of standard keyboards.

  See [About Edit and MultilineEdit components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025616.html).
- **Component Type:** FlexLayout · **Description:** A container type of component that allows flexible positioning of other components within it.

  See [About FlexLayout components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025694.html).
- **Component Type:** FormPage · **Description:** A container component used as an individual page of a multi-page form. This component is often used to implement wizard-style user interfaces.

  See [About FormPage components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025804.html).
- **Component Type:** Gauge

  (Graph)

   · **Description:** A component that is used to define a FusionCharts gauge.

  See [About Chart and Gauge components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025070.html).
- **Component Type:** Grid · **Description:** A container component that allows data to display and to be maintained in a tabular format.

  See [About Grid and GridColumn components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026209.html).
- **Component Type:** GridColumn · **Description:** A component that creates a column in a grid component.

  **Note:** This component is not available from the Toolbox; it can only be created using the **Edit Contained Components** dialog box. It can be edited in the **Edit Contained Components** dialog box or, after selecting it in the **Type** property field, in the **Component** properties sheet.

  See [About GridColumn components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026334.html).
- **Component Type:** GroupBox · **Description:** A labeled box that can be used to frame a group of related components. This is a container component.

  See [About GroupBox components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026615.html).
- **Component Type:** HyperLinkButton · **Description:** A specialized button component that allows you to create a "button" that looks and behaves like standard hyperlinked text.

  See [About HyperLinkButton components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026740.html).
- **Component Type:** Infocon · **Description:** A container component used to display tile forms in a variety of configurations.

  See [About Infocon components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026818.html).
- **Component Type:** List

  (ListBox)

   · **Description:** A component that allows data to be displayed and selected from a list of values.

  See [About List, DropList, and ComboBox components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026880.html).
- **Component Type:** MenuItem

  (ObjMenuItem)

   · **Description:** A specialized component that places an entry on the **Actions** menu.

  See [About MenuItem components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148026974.html).
- **Component Type:** MultiLineEdit · **Description:** A component that is used for the display and input of large blocks of text. The component wraps the text at word boundaries. Vertical scrolling is supported.

  See [About Edit and MultilineEdit components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148025616.html).
- **Component Type:** Notebook · **Description:** A container component that allows other components to be grouped together on tabs. Only the components on the currently selected tab are visible to the user. Notebooks are useful for grouping components and managing screen space. Notebook tabs can be grouped using the **Tab As Dropdown** property, when enabled, the tab headers are grouped into a single tab and is shown as a dropdown selection list of tabs.

  See [About Notebook and NotebookTab components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148027036.html).
- **Component Type:** NotebookTab · **Description:** A container component that creates an individual tab of a notebook component. This component can contain any number of other components and component types. Notebook tabs can be grouped using the Notebook property **Tab As Dropdown**, when enabled, Notebook tabs are grouped into a single tab and is shown as a dropdown selection list of tabs.

  **Note:** This component is not available from the Toolbox; it can only be created using the **Edit Contained Components** dialog box. It can be edited in the **Edit Contained Components** dialog box or, after selecting it in the **Design \> Type** property field, in the **Component** properties sheet.

  See [About Notebook and NotebookTab components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148027036.html).
- **Component Type:** RadioButton · **Description:** Radio (option) buttons are implemented in groups with each button representing a member of a set of mutually exclusive options. The user can select only one option in the group.

  See [About Option (RadioButton) Button components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148027535.html).
- **Component Type:** Static · **Description:** A component used for the display of read-only text, such as component labels. This component can also be used to display graphics images.

  See [About Static components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148027707.html).
- **Component Type:** SubForm · **Description:** 

  A container component that is used to display or load forms inside a parent form. A form can have any number of such containers.

  See [About SubForm components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/txl1544512412223.html).
- **Component Type:** ToolbarButton · **Description:** A specialized component that creates a button intended to appear on the toolbar.

  See [About ToolbarButton components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148027863.html).
- **Component Type:** Tree

  (TreeControl)

   · **Description:** A component that allows data to be displayed and selected in a tree structure built on parent-child relationships between properties in collections.

  See [About Tree components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148028034.html).
- **Component Type:** UserControl · **Description:** A component that acts as a container for a .NET user-created control.

  See [About User Control components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148028518.html).
- **Component Type:** VerticalGrid · **Description:** A container component that formats a collection's data in a two-column grid that displays property names in the left column and the property values in the right column.

  See [About VerticalGrid and VerticalGridElement components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148028690.html).
- **Component Type:** VerticalGridElement · **Description:** A specialized component that creates a single element for a vertical grid component. Each element represents a name-value pair for a single property of a collection record.

  **Note:** This component is not available from the Toolbox; it can only be created using the **Edit Contained Components** dialog box. It can be edited in the **Edit Contained Components** dialog box or, after selecting it, in the **Design \> Type** property field, in the **Component** properties sheet.

  See [About VerticalGrid and VerticalGridElement components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148028690.html).
- **Component Type:** User Components · **Description:** A collection of predefined options that are used to design and build forms.

  See [User Components](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/llz1717118899969.html).
- **Component Type:** Component Templates · **Description:** A set of combination components and child-components that has been saved as a template for local use.

## Framework Components

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/cur1717118354110.html

Framework Components are the standard basic set of components that form the basis of most Mongoose-based applications. They are selectable from the designer Toolbox. For the details of each Framework component, see the topics in this section of the help.
