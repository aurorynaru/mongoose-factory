# Working with collections

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/hkd1710463091518.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Working with collections

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/hkd1710463091518.html

Most forms in your Mongoose-based application deal with one or more collections of data known as "IDO collections". There is usually at least a primary collection and the form might also use a secondary collection or a subcolleciton.

The topics in this group all deal with the various aspects and requirements of working with IDO collections.

## About forms with collections

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148020905.html

A form's definition can include zero, one, or multiple IDO collections. Most forms include at least one IDO collection.

The first IDO specified for a form returns the primary collection. Additional IDOs return secondary collections or subcollections. Both primary collections and secondary collections are considered "top-level" collections. Both top-level collections can also use [subcollections](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148157588.html).

### About the current collection

At runtime, a collection becomes the "current collection" when the user clicks on a component that is bound to it, or when an event handler, code, or other internal logic makes it the current collection. When a collection becomes the current collection, then the toolbar and events refer to that collection.

### About the primary collection

The primary collection is the first collection defined (if any). It is distinct from other types of collections in these ways:

- A form can be defined with an **Initial Command** that executes when the form is launched. This initial command for a form applies only to the primary collection. For example, if the initial command for a form is **Refresh**, then, when the form opens, a query is run to return and display the contents of the primary collection.

  **Note:** To accomplish the same results for a secondary collection, you must use some form of logic—for instance, event handlers, or form scripts.
- Unbound components are validated upon navigation of the primary collection.

  Components bound to collections are, as a matter of course, validated when the collection to which they are bound is navigated or saved. For unbound or variable-bound components, though, the primary collection provides that functionality.

  Similarly, when the user puts focus on an unbound component, the primary collection becomes the current collection.
- The linked parent/child form mechanism is restricted to primary collections in certain respects.
- The scripting APIs have a shortcut to this collection: ThisForm.PrimaryCollection

  For secondary collections and subcollections, the APIs are slightly more complex.

### About secondary collections

Optionally, forms can include one or more secondary collections. As top-level collections, they function much like primary collections, with the exception of the differences noted in the previous section.

Secondary collections are useful when you need to create a form that works with multiple collections, and when some of those do not have parent-child relationships characteristic of subcollections. Since it is easier to implement forms with subcollections than forms with secondary collections, you should use secondary collections only in those cases where subcollections will not work.

### About subcollections

Subcollections contain "child data"; that is, data that is related to "parent data" in a top-level collection, and linked by specifying one ore more `parent property=child property` clauses.

For each parent collection row that the user has "visited" since the last time the parent collection was refreshed, the application caches the the subcollection rows ("child data") automatically. This data is sent to the application server, then, whenever the parent collection is saved.

**Note:** By contrast, even though it is possible to implement a parent/child relationship between top-level collections (for example, primary \> secondary) by filtering one by the values of another, users will need to proactively save changes to the "child" data when navigating the parent collection.

### A word about parent/child collections

A Mongoose-based application supports two cases of parent/child collections:

- Subcollections within a single form
- Linked parent/child forms

In both cases, a LinkBy expression is used to construct a filter for querying the child collection, based on the current values of properties in the parent collection.

Also in both cases, when the parent collection is refreshed, navigated, or saved, the default behavior is to requery the child collection.

### Collection-level commit and the IDO Request Interface

One of the more unique features of the Mongoose UI model, which provides significant end-user productivity but also significant internal complexity, is the collection-level-commit model. This means that rows in a collection can have a status of modified, deleted, or new, and the user can continue to navigate rows, updating, inserting, deleting, and sorting, before finally saving the collection.

The IDO Request Interface UpdateCollection verb accepts an arbitrary number of rows, marked for insert, update, or delete, potentially nested with child collection rows, and then, by default, processes all this together in a single transaction. This means that end-users can treat such data much like a spreadsheet, sorting and mass-updating values, without being forced to commit each row before moving to another (row-level commit).

## About forms with subcollections

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148021046.html

A subcollection is a 'child' collection whose records (rows) are associated with and dependent on the items in the 'parent' (primary) collection. Subcollections are considered the primary mechanisms for defining hierarchical, parent-child data relationships on forms. Subcollections implement one-to-many relationships between collections.

To implement a form with a subcollection, you must bind a grid component to a subcollection property. This property is defined in the parent IDO as a child IDO that is filtered from the parent IDO. You can bind individual properties of the subcollection to grid columns or other form components.

When using subcollections, keep these limitations in mind:

- You can only have one level of subcollections (that is, parent-child collections). In other words, a subcollection cannot in turn have its own subcollection.
- Subcollections must be bound to Grid components.

  This is in contrast to top-level collections that can be bound at the form level, and not necessarily to any one (type of) component.

Examples of system forms that use subcollections include the **Users** form, the **Background Task History** form, and the **Event Handlers** form.

## About collection attributes/properties

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/bgp1614901558305.html

All collections used on a form have their own attributes that can, for the most part, be defined or altered using the **Collections** tab for the form in the Web Designer (web client) or in Design Mode (Windows client).

The tables in this topic list and describe the attributes/properties that can be used to define collections on forms and determine their capabilities and behaviors:

- The IDO name specifies the data source for the collection. This specification allows the framework to implement refresh (query), insert, update, and delete operations without requiring any further information from the developer, because the IDO request interface generically provides these operations for all IDOs.
- Optionally, a collection definition can override any of these operations using custom load method specifications.

Unless specified otherwise, all attributes/properties apply to both primary and secondary collections.

- Attribute name · Description/Comments
- **Attribute name:** **Collection** · **Description/Comments:** This property specifies the source of a collection of data for a form. The value of the property must be the name of an IDO.
- **Attribute name:** **Base Table and Alias**  · **Description/Comments:** This read-only field displays the name of the primary table and its alias for the IDO named in the **Collection** field.
- **Attribute name:** **Collection Name** · **Description/Comments:** This property is a translatable string or literal value that identifies the collection in error messages and menu options. The name should be appropriate for the end user.
- **Attribute name:** **Custom Load Method**  · **Description/Comments:** Use this property when you want to specify an IDO method as an alternative for loading or manipulating data in the collection. This property should be specified only if the standard default method of loading the collection is inadequate. This specification is usually required only in very advanced applications.
- **Attribute name:** **Method Parameters**  · **Description/Comments:** Use this property to specify any parameters that must be passed to a custom load method. Parameters may include literal values, properties, variables, or component values.
- **Attribute name:** **Read Mode** · **Description/Comments:** Use this property to specify the isolation level for transactions when loading a collection. This setting overrides the default value for the **Collection Read Mode** as set on the **Process Defaults** form. The override applies only to the collection for which it is specified.

  This property permits or prevents "dirty reads".

  - A setting of UNCOMMITTED implements "dirty reads", in which no shared locks are issued and no exclusive locks are honored. It is possible to read uncommitted data; values can be changed and rows can appear or disappear in the collection before the end of the transaction. The setting corresponds to the Transact-SQL statement SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED.
  - A setting of COMMITTED specifies that shared locks are held while data is being read to avoid dirty reads, but the data can be changed before the end of the transaction. The setting corresponds to the Transact-SQL statement SET TRANSACTION ISOLATION LEVEL READ COMMITTED.

### Other options for collections

Collection specifications can also be modified in other ways, including the way standard operations are handled, and how data in those collections are handled.

These tables list and describe the **Options** attributes/properties:

Each of these operations can be set in the designer; altered at runtime by means of API calls from form scripting; and/or overridden by security rules.

Table 1\. Standard Operations attributes/properties

- Attribute name · Description/Comments
- **Attribute name:** **Navigate** · **Description/Comments:** Use this property to specify whether the user can use shortcut keys or the **Actions** menu to navigate to the first, next, previous, and last rows of the collection.
  - **True**: Navigation is enabled.
  - **False**: Navigation is disabled.
- **Attribute name:** **Refresh** · **Description/Comments:** Use this property to specify whether the user can requery the data in the collection.
- **Attribute name:** **Filter** · **Description/Comments:** Use this property to specify whether the user can set filter criteria for data being queried in the collection.
- **Attribute name:** **New/Copy** · **Description/Comments:** Use this property to specify whether the user can create new rows or copy rows in the collection.
- **Attribute name:** **Save** · **Description/Comments:** Use this property to specify whether the user can save changes made to data in the collection.
- **Attribute name:** **Delete** · **Description/Comments:** Use this property to specify whether the user can delete data from the collection.
- **Attribute name:** **Notes** · **Description/Comments:** Use this property to specify whether the user can attach notes to rows in the collection.
- **Attribute name:** **Graph** · **Description/Comments:** Use this property to specify whether the user can generate an ad hoc graph of the data in the collection.
- **Attribute name:** **Spreadsheet Disabled** · **Description/Comments:** Use this property to specify whether the user can export the contents of the collection to a spreadsheet, such as Microsoft Excel (or any other application capable of reading CSV-formatted spreadsheets).

  This property cannot be used for subcollections.

Table 2\. Advanced Options attributes/properties

- Attribute name · Description/Comments
- **Attribute name:** **Record Cap Override/Page Size** · **Description/Comments:** Use this property to specify a maximum record cap for list sources of type IDO Collection and IDO Method, collections/subcollections, and tree definitions.

  **Note:** This setting is subject to any system-wide caps that might be in effect.

  If no other value is specified, this field defaults to the system default setting (200).
- **Attribute name:** **Enable Paging** · **Description/Comments:** Use this property to enable pagination of records displayed for a primary collection or a subcollection.

  When this property is set to **True**, you must specify the number of records to be displayed per page in the **Record Cap Override/Page Size** property field.
- **Attribute name:** **Operate As Primary** · **Description/Comments:** Use this property to designate a collection other than the primary collection to be associated with unbound or variable-bound components that are normally associated with the form's primary collection. This would typically be set to **True** only for secondary collections or subcollections.

  For instance, variable-bound components are re-initialized when the user inserts a new row into the primary collection. This property allows you to designate another collection, perhaps a secondary collection, to be associated with these components.
- **Attribute name:** **Reload After Save** · **Description/Comments:** Use this property to determine whether the collection is to be refreshed after each save operation.
- **Attribute name:** **Reload After Child Save** · **Description/Comments:** Use this property to specify whether the parent collection is to be refreshed after a child subcollection is saved.
- **Attribute name:** **Defer Refresh Until Visible** · **Description/Comments:** Use this property to specify whether a collection or subcollection is to be populated before it becomes visible to the user.

  Deferral is especially useful in cases where subcollections or secondary collections are displayed on notebook tabs. If this property is set to **True**, the collection is not queried until the user selects the tab that contains it.
- **Attribute name:** **Save One Row Per Transaction** · **Description/Comments:** Use this property to specify whether to save each modified row in a separate transaction.

  For more detailed information, see [Save One Row Per Transaction property](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/winstudio/winstudioeditmode/properties/coll_save_one_trans_per_row_prop.html).

  The property applies only to primary and secondary collections.
- **Attribute name:** **Load/Save Overrides** · **Description/Comments:** Use this property to specify custom procedures for update, insert, delete, and post-query processing.

  To specify which type of operation is to be handled by custom processing in the IDO instead of by a standard operation on the collection, click the ellipsis (•••) button, which opens the **Edit Middleware Load/Update Overrides** dialog box.
- **Attribute name:** **Update Locking** · **Description/Comments:** Use this property to select which column-locking option is to be used during an IDO item update.

  For more detailed information, see [Update Locking property](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/winstudio/winstudioeditmode/properties/coll_update_locking_prop.html).

Table 3\. Collection Selection attributes/properties

- Attribute name · Description/Comments
- **Attribute name:** **Permanent Filter Expression** · **Description/Comments:** Use this property to specify a permanent filter to be applied to the collection for a form. Ad hoc filter specifications set by a filter form or Filter-In-Place are added to this filter when querying the collection.

  A **Permanent Filter Expression** value is a SQL WHERE clause without "WHERE" (for example, `username <> 'service'`).

  **Note:** Use the **Edit Permanent Filter**  dialog box to create or edit permanent filter expressions. This dialog box opens when you click the ellipsis (•••) button next to the field.

  Expressions can reference the values of components, variables, or properties on other collections, by means of substitution keywords, etc. These use Boolean AND filtering with any end-user filtering or security rules for row-level filtering.
- **Attribute name:** **Optional Filters** · **Description/Comments:** Use the Optional Filters property to specify optional filters to be applied when querying IDO collections.

  These filters are applied to the IDO query only when there is a value supplied here. Optional filters are excluded from the query when this field value is blank.

  Optional filters are stored in the data source as in this example:

  ```
  FILTEROPTS(FILTEROPT(…),FILTEROPT(…))
  FILTEROPT(PROP(…)OPER(…)EOD())
  ```

  **Note:** Use the **Edit Optional Filters** dialog box to create or edit optional filters. This dialog box opens when you click the ellipsis (•••) button next to the field.
- **Attribute name:** **Distinct** · **Description/Comments:** Use this property to remove duplicate records from returned data.

  As with other properties, this attribute effects the SQL code that the IDO Runtime service generates for IDO LoadCollection actions.

  **Caution:** If you remove duplicates, the data cannot be reliably updated. This option should only be used with read-only data.
- **Attribute name:** **Order By** · **Description/Comments:** Use this property to specify IDO properties by which a collection is sorted.

  An **Order By** setting is a comma-delimited list of IDO property names. The default order is ascending. You can specify the order of any of the properties by adding either **desc** (descending) or **asc** (ascending) after the property name.

  Expressions can reference the values of components, variables, or properties on other collections, by means of substitution keywords, etc. These use Boolean AND filtering with any end-user filtering or security rules for row-level filtering.

## Binding collections to a form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148021186.html

The act of adding an IDO collection to a form automatically binds the collection to the form. Most forms have IDO collections bound to them at the time the form is created.

If a form has no bound IDO collection, the first IDO collection that you add automatically becomes the [primary collection](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148153860.html).

You can also add other IDO collections to a form that is already bound to a primary collection. These [secondary collections](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148156605.html) can be used as [subcollections](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148157588.html).

Once added, you can remove any secondary collection from a form. You cannot remove a primary collection.

When working with forms and collections, you can:

- Add an IDO collection to a form
- Edit IDO collection specifications
- Remove a secondary IDO collection from a form

## Binding of components

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/bew1615180408286.html

Binding of collection data most commonly takes place at the form level. However, individual components can also be bound to properties in a collection.

There are two types of component binding in Mongoose-based forms:

- Scalar binding: This is the binding of a single property value of the current row of the collection.
- Collection binding: This is the binding of all property values of a collection to a grid component or other component type that allows the display of any or all property values in an IDO collection. This type of binding typically allows the user to navigate the collection.

The binding of components is accomplished in the designer, on the **Component** properties sheet, under **Data Source \> Binding**. When looking at the **Binding** specification for a given component in the **Component** property sheet, the "object" or "objects" part of the binding refers to a particular collection, as in these examples:

- **object.`property`** refers to a scalar binding to the designated property (`property`) of the primary collection (`object`).
- **object`n.property`** refers to a scalar binding to the designated property (`property`) of a designated secondary collection (`objectn`, where '`n`' refers to the number of the designated secondary collection).
- **objects** refers to the binding of the entire primary collection.
- **objects`n`** refers to the binding of the entire secondary collection (where '`n`' refers to the number of the designated secondary collection).
- **object.`subcol.property`** refers to a scalar binding of a designated property (`property`) in a subcollection (`subcol`).

## Saving one row per transaction

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148021436.html

With primary and secondary collections, you can instruct the application to save each modified row (IDO item) in a separate transaction. When the user executes the save operation on the collection, the application loops through modified rows, executing a "Save Current" operation for each row. If the save succeeds, the application moves to the next row. If it fails, the application stops and presents an error message. The previous rows remain committed.

In the default behavior, all modified rows are sent to be processed within a single transaction, which is rolled back if there is a failure.

**Note:** If your form design requires that all modified rows be committed as a unit, with processing on the unit before and/or after a save operation, saving rows in separate transactions might not be appropriate: In a case like that, if an error occurs on a row, some rows might be committed and others not committed.

## Enabling pagination on a primary collection

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mod1589530987187.html

You can enable pagination, or control of the number of records to be displayed, for the records of a primary collection.

1. Open the form that you want to configure or modify in the designer.
2. Add these page control components: 

   - Page number field, for example: Page 1 out of 28
   - Current page field
   - Previous button
   - Go to page button
   - Next button
3. In the **Behavior** section of the **Form** properties sheet, provide this information: 

   Initial Command

   Select **Refresh**.

   Script Language

   Select **Visual C#**.
4. Right-click on the form, and then select **Form Script**.
5. Add the form script for the page controls. 

   See the sample form script.
6. Add these events for each button: 

   | Button | Event |
   | --- | --- |
   | Previous | GotoPrevPage |
   | Go to page | GotoPage |
   | Next | GotoNextPage |
7. On the **Collections** tab of the **Form** properties sheet, select the primary collection.
8. In the **Advanced Options** section of the **Options** group, provide this information: 

   Record Cap Override/Page Size

   Specify the record cap or the page size of the selected collection.

   Enable Paging

   Select **True**.
9. Click **Save**.
10. Refresh the IDO metadata cache.
11. Test the form.

Example of form script code for the page control components:

```
using System;
using Mongoose.IDO.Protocol;
using Mongoose.Scripting;
using Mongoose.Core.Common;
using System.Diagnostics;

namespace Mongoose.FormScripts
{
   public class TestSinglePage : FormScript
   {
      /// <summary>
      /// Triggered when Go to Page button (Primary Collection) is clicked
      /// </summary>
      public void GotoCurrentPage()
      {
         int pageNum = ThisForm.Variables( "CurrentPageVar" ).GetValue<int>();
         ThisForm.PrimaryIDOCollection.GotoPage( pageNum );
         DisplayCurrentPage( pageNum );
      }

      /// <summary>
      /// Triggered when Go to Next button (Primary Collection) is clicked
      /// </summary>
      public void GotoNextPage()
      {
         int pageNum = ThisForm.Variables( "CurrentPageVar" ).GetValue<int>();
         int maxNumPage = ThisForm.PrimaryIDOCollection.GetNumPages();
         int nextPage = pageNum >= maxNumPage ? maxNumPage : pageNum + 1;

         // Do not proceed if requesting the same page number
         if ( pageNum == nextPage )
            return;

         ThisForm.PrimaryIDOCollection.GotoPage( nextPage );
         DisplayCurrentPage( nextPage );
      }

      /// <summary>
      /// Triggered when Previous button (Primary Collection) is clicked
      /// </summary>
      public void GotoPreviousPage()
      {
         int pageNum = ThisForm.Variables( "CurrentPageVar" ).GetValue<int>();
         int prevPage = pageNum <= 1 ? 1 : pageNum - 1;

         // Do not proceed if requesting the same page number
         if ( pageNum == prevPage )
            return;

         ThisForm.PrimaryIDOCollection.GotoPage( prevPage );
         DisplayCurrentPage( prevPage );
      }

      /// <summary>
      /// Fills up Paging Info, and the Current page of Primary Collection
      /// </summary>
      /// <param name="pageNum"></param>
      public void DisplayCurrentPage( int pageNum )
      {
         ThisForm.Components["CurrentPageEdit"].Value = string.Format( "Page {0} out of {1}", pageNum.ToString(), ThisForm.PrimaryIDOCollection.GetNumPages().ToString() );
         ThisForm.Variables( "CurrentPageVar" ).SetValue( pageNum.ToString() );
      }

      #region SubCollection

      /// <summary>
      /// Triggered when Go to Page button (SubCollection) is clicked
      /// </summary>
      public void GotoCurrentPageSub()
      {
         int pageNum = ThisForm.Variables( "CurrentPageSubVar" ).GetValue<int>();
         ThisForm.PrimaryIDOCollection.GetSubCollection( "Properties", 0 ).GotoPage( pageNum );
         DisplayCurrentPageSub( pageNum );
      }

      /// <summary>
      /// Triggered when Next button (SubCollection) is clicked
      /// </summary>
      public void GotoNextPageSub()
      {
         int pageNum = ThisForm.Variables( "CurrentPageSubVar" ).GetValue<int>();
         int maxNumPage = ThisForm.PrimaryIDOCollection.GetSubCollection( "Properties", 0 ).GetNumPages();
         int nextPage = pageNum >= maxNumPage ? maxNumPage : pageNum + 1;
         ThisForm.PrimaryIDOCollection.GetSubCollection( "Properties", 0 ).GotoPage( nextPage );
         DisplayCurrentPageSub( nextPage );
      }

      /// <summary>
      /// Triggered when Prev button (SubCollection) is clicked
      /// </summary>
      public void GotoPreviousPageSub()
      {
         int pageNum = ThisForm.Variables( "CurrentPageSubVar" ).GetValue<int>();
         int prevPage = pageNum <= 1 ? 1 : pageNum - 1;
         ThisForm.PrimaryIDOCollection.GetSubCollection( "Properties", 0 ).GotoPage( prevPage );
         DisplayCurrentPageSub( prevPage );
      }

      /// <summary>
      /// Fills up Paging Info, and the Current page of Subcollection
      /// </summary>
      public void DisplayCurrentPageSub( int pageNum )
      {
         ThisForm.Components["CurrentPageEditSub"].Value = string.Format( "Page {0} out of {1}",
                                                               pageNum.ToString(),
                                                               ThisForm.PrimaryIDOCollection.GetSubCollection( "Properties", 0 ).GetNumPages().ToString() );
         ThisForm.Components["PageNumberEditSub"].Value = pageNum.ToString();
      }
      #endregion
   }
}
```

## Enabling pagination on a subcollection

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/dqp1589534854150.html

You can enable pagination, or control of the number of records to be displayed, for the records of a subcollection.

1. Open the form that you want to configure or modify in the designer (Web Designer in the web client, Design Mode in the Windows client.
2. Add these page control components: 

   - Page number field, for example: Page 1 out of 28
   - Current page field
   - Previous button
   - Go to page button
   - Next button
3. Select the grid component where the subcollection is the data source.
4. In the **Data Source** group of the **Component** properties sheet, select the **Binding** property, and then click the ellipses (•••) button.
5. In the **Type** field of the **Edit Component Data Binding** group, select **Subcollection Grid**.
6. Click **Edit**.
7. In the **Advanced Options** field of the **Edit Collection Specification for Subcollection** section, perform these steps: 
   1. Specify the **Record Cap Override** value.
   2. Select the **Enable Paging?** option.
   3. Click **Set LinkBy**.
   4. In the **Parent Property** and **Child Property** fields of the **Edit LinkBy Specification** section, select **CollectionName**.
   5. Click **Add**.
   6. Click **OK**.
8. Click **OK** twice.
9. Add the events for each button: 

   | Button | Event |
   | --- | --- |
   | Previous | GotoPrevPageSub |
   | Go to page | GotoPageSub |
   | Next | GotoNextPageSub |
10. Click **Save**.
11. Refresh the IDO metadata cache.
12. Test the form.

## About refreshing collections

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148021576.html

The filter specification for a collection can reference a property, a component, or a variable. The application creates a dependency between the collection and the property, component, or variable referenced in the filter specification. (A dependency is created as long as the filter does not specify a property on the collection itself.) When the value of the property, component, or variable is changed, the dependency triggers a refresh of the collection automatically.

For example, suppose you want the primary collection on a form to be refreshed whenever the user changes the value of a combo box that is bound to a variable. If you reference that variable in the filter of the primary collection, then the application creates a dependency so that the primary collection will be refreshed whenever the variable's value changes. (To reference a variable in the filter of the primary collection, use the  FILTERPERM keyword.)

In cases where one collection should be refreshed because of changes in another collection, you can set up a collection-subcollection relationship. The built-in functionality of subcollections causes them to be refreshed automatically as often as necessary. Whenever possible, use subcollections to handle refreshing multiple collections. Doing so minimizes form complexity and keeps behaviors consistent across your application.

In rare cases, you might need to create a form that works with multiple collections that do not have the straightforward parent-child relationships characteristic of subcollections. In these situations, you can set up a primary collection and one or more secondary collections. To refresh the primary collection based on a changed property in a secondary collection, you can generate a data-changed event on the component bound to that property and then create event handlers of the type Collection Refresh to trigger the refresh of the primary collection.

## Query form filters

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148021639.html

A filter is a set of criteria for retrieving a collection from an IDO (Intelligent Data Object). You create a filter for an IDO by creating a query form associated with the IDO. Afterwards, you can use the query form to create additional filters for the same IDO. Filters must contain primary criteria (required properties with operators and values in an AND relation). They can also contain additional criteria (optional properties with operators and values in an AND or an OR relation).

## Creating a query form filter

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148021717.html

You can create a filter for an IDO collection, using a query form.

1. Open the query form associated with the IDO you want to filter.
2. Enter your criteria. 

   Filters must contain at least one **Primary Criteria**. **Additional Criteria** are optional.
3. From the **Objects** menu, select **Filter \> Save**.
4. At the prompt, specify a name for the filter.

## Editing a query form filter

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148021841.html

**Note:**  All fields in the **Identification** section of this dialog box are read-only. The data in this section is set at the time the filter is created and cannot later be changed.

1. With any query form open in the designer (Web Designer or Design Mode), from the **Edit** menu, select **Filter \> Edit**.
2. In the **Select Filter** dialog box, select the filter you want to edit, and then click **OK**.
3. Optionally, add properties to the filter. For each property, take these actions: 
   1. From the **All Available Properties** field, select a property.
   2. Click **Add To Additional**. 

      This adds the property to the list of **Additional Criteria Properties**.

      **Note:**  You cannot add to, modify, or remove from the list of **Primary Criteria Properties**. To change these, you must re-create the query form using the **Form Wizard**.
4. Optionally, remove properties from the list of **Additional Criteria Properties**. For each property, take these actions: 
   1. Select the property to remove in the list of properties.
   2. Click **Remove**.
5. Optionally, adjust the label, the list source, or other attributes of the property. For each property you want to modify, take these actions: 
   1. Select the property you want to modify from the list of properties.
   2. Click **Attributes**.
   3. Use the **Edit Property Attributes for Filter** dialog box to modify the property's attributes.
   4. Click **OK**.
6. Click **OK**.

## Tip: Create filters that prompt users for value input

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148022013.html

If you enter a question mark (?) on a query form, the application can prompt you to select or enter a value for the property.

To enable this functionality in filters, specify a question mark for the property value when you create the filter on the query form. Then save and name the filter as normal.
