# Component bindings

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/twf1717716552258.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About collection data bindings

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/twf1717716552258.html

The most common source of data values in a Mongoose-based application is an IDO collection. The data in an IDO collection can be bound to forms and/or components. The data to be bound can be the entire collection or single properties from the collection, depending on the form or component to which the data binding applies.

For more information about data bindings, see the topics in this section.

## Binding components to collections or properties

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148034805.html

These component types can all be bound to a collection or property:

- Edit
- MultiLineEdit
- List
- DropList
- ComboBox
- DateCombo
- CheckBox
- RadioButton
- Grid
- GridColumn
- Tree
- Gauge

### Binding grids to IDO collections

Grid components are bound to primary collections, to secondary collections, or to subcollections.

The collection bound to a grid is the collection that is displayed and maintained in the grid control. To bind a grid to a primary or secondary collection, you select the collection on the appropriate dialog box. To bind a grid to a subcollection, you must specify the parent collection and the subcollection property that references the subcollection. You must also specify the standard attributes for the subcollection.

### Binding components to properties

GridColumn components and other single-value components can be bound to individual properties from the collection that is bound to the form or grid. The component can then be used to display and/or manipulate the property value of the currently selected object (in the collection).

## Referencing collections bound to forms or grids

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148021498.html

The framework provides a shorthand notation for referencing IDO collections that are bound to a form or a grid. The form's primary collection is referred to as "objects". The form's first secondary collection is referred to as "objects2"; the form's second secondary collection is referred to as "objects3"; and so on.

This notation is also used to reference individual properties from these collections. A property on the primary collection is referenced as "object. `property_name`"; a property on the first secondary collection is referenced as "object2. `property_name`"; and so on.

Subcollections are referenced by a subcollection property of the parent collection. The parent collection is referenced using the notation mentioned already. For instance, a property in a subcollection of the form's primary collection would be referenced by "object.`subcollection_name.property_name`".

## Binding components to variables

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148034961.html

Variables are mechanisms for storing data needed by the framework at run time. Variables have two important attributes that control the life span of their values and their visibility:

| Variable attribute | Description |
| --- | --- |
| Global | A global variable is available to all forms in the application. A nonglobal variable (also called a form variable) is available only to the form for which it was created. |
| Persistent | Persistent variables maintain their values across executions of the form (for form variables) or the client application (for global variables). Nonpersistent variables do not have to be explicitly created. The framework creates them automatically as they are referenced. |

## Binding a component to a variable

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148035132.html

1. With a form open and in the designer (Web Designer in the web client, Design Mode in the Windows client), select a component.
2. On the **Component** properties sheet, click **Binding**, and then click the ellipsis (•••) button.
3. In the **Type** field, select **Variable**.
4. Click **Edit**.
5. In the **Variable** field, select the name of a variable.
6. Click **OK**.

## Setting data bindings for a component

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148035304.html

1. With a form and open and in the designer (Web Designer in the web client, Design Mode in the Windows client), select a component.
2. On the **Component** properties sheet, click **Binding**, and then click the ellipsis (•••) button.
3. In the **Type** field, select the type of binding you want to use. 

   Available data bindings vary with the type of component.
4. Click **Edit**.
5. Specify the desired binding attributes.
6. Click **OK**.
