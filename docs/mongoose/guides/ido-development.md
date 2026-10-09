# Adding and editing IDOs, properties and methods

> Guide: Infor Mongoose Core Extensibility Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147700039.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Adding an IDO

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147700039.html

An IDO (Intelligent Data Object) provides a set of properties and methods. It also responds to requests from the IDO request interface (LoadCollection, UpdateCollection, and Invoke).

You can add IDOs to your IDO project using this procedure:

1. Open either the **IDO Projects** form or **IDOs** form, and click **New IDO**.
2. In the first page of the **IDO Wizard**, provide this information: 

   Project Name

   (Required) Select the IDO project to which the IDO is to belong

   Primary Base Table

   (Required unless extending) Select the table or view that is to be used to store the values for the properties of the new IDO. To be selectable, the table must already exist in the IDO project.

   **Note:** Use this option only if you are creating a completely new IDO. To create an IDO that is an extension of an existing IDO, use the **Extends** option.

   IDO Name

   (Required) This is the name to assign to the new IDO. This name must be unique in the Objects Database (or its equivalent in the All-in-One database).

   This field is automatically populated when you select the **Primary Base Table**, but you can change it.

   Description

   (Optional) Provide a brief description of the intended use for the new IDO.

   Label String ID

   (Optional) Select a translatable string to use for the label on the IDO.

   If there is a string associated with the **Primary Base Table** you selected, this field is automatically populated with a recommended string, but you can change it.

   Access As

   This read-only field displays the Access As identifier that is to be associated with the new IDO. This field should display the Access As identifier for your development environment.

   Table Alias

   (Required) Provide a unique, valid SQL identifier for this IDO table. This alias is usually an abbreviated version of the table name.

   This identifier is used to reference the table in join specifications and in generated SQL.

   Extends

   (Optional) To create an IDO that is an extension of an existing IDO, select the IDO you want to extend.

   If you select this option, the **Primary Base Table** field and the **Table Alias** field are both disabled.

   Extend And Replace

   (Optional) To have the extended IDO replace the base IDO at runtime, select this option.
3. Click **Next**. 

   **Note:**  If you specify a value for the **Extends** option, page 2 of the wizard is not used and the **Next** button is disabled. In this case, click **Finish**.
4. In the second page of the wizard, create bound properties for this IDO that are based on columns in the primary base table in the Application Database. 

   By default, all of the columns in the primary base table are included as properties in the IDO.

   - To remove a column and omit it as a property, clear the **Inc** check box for that column.
   - To change a property name, specify the new name in the **Property Name** field for that property.
   - To make changes to all property names at one time, click **Massage Property Names**, which opens the **Massage Options** form.
5. Click **Finish**.

The IDO is created and, if you are using source control, it is automatically checked out to you. Before it is accessible for general use, you must check it in.

## Setting advanced IDO attributes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147700210.html

The advanced attributes of an IDO include its primary key properties, and other options.

Primary keys reflect the primary key properties of the IDO's base table in the application or external database. The system automatically detects primary key properties, except for IDOs that are based on SQL views. The order of the IDO's primary key properties should match the order used in the application's underlying database table. This order determines the default sort order for the IDO, which might be overridden in the application or elsewhere.

1. On the **IDOs** form, select the IDO to edit.
2. If necessary, check out the IDO.
3. Click **Advanced Attributes**. 

   In the **Advanced IDO Attributes** form, the **IDO Properties** list shows the properties of the IDO that can be designated as primary keys. The **Primary Keys** list indicates the designated primary keys detected by the system and their sort order.
4. Optionally, perform any of these actions: 

   - Add primary keys: Select a property and click **Add**.
   - Set the sort order for the primary keys: Use the **Up** and **Down** buttons.
   - Remove primary keys: Select a primary key and click **Remove**.
5. Optionally, select (or clear) the **Quote Table Aliases** option. 

   This option controls whether appropriate quoting is applied to table aliases during SQL generation for the tables in this IDO.

   To protect table aliases that represent SQL keywords or reserved words in the query language of the server hosting the table’s database, select this option.

   If you selected all table aliases to avoid duplicating SQL keywords, you can clear this option.
6. To save your changes and close the **Advanced IDO Attributes** dialog box, click **OK**.
7. In the **IDOs** form, save the IDO record.

Remember to check the IDO back in. Your changes do not become operative until you check them in.

## Editing an IDO

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147700382.html

After you make changes in the Application Database—for example, modification of tables or stored procedures—you must update any IDO that is associated with the changed tables or stored procedures.

1. In the **IDOs** form, select the IDO to edit.
2. If necessary, check out the IDO.
3. You can make many required changes directly on the **IDOs** form. 

   **Note:** You might also want or need to open the **IDO Tables** form, the **IDO Properties** form, or the **IDO Methods** form, and make any necessary adjustments there.

    For example, you must update derived, subcollection, and unbound properties manually.
4. Save your changes.

Remember to check the IDO back in. Your changes do not become operative until you check them in.

## Canceling or undoing changes to IDOs

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147700553.html

After you check out an IDO and change it, you can cancel your changes before you check it back into the Objects Database.

This is the procedure:

1. With the **IDOs** form open, select the IDO that has been checked out.
2. Click **Undo Check Out**.

You might have to refresh or close the form to see your changes.

## Deleting an IDO

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147700725.html

Deleting an IDO removes all the methods and properties associated with it in the Objects Database.

You can delete an IDO only if you have first checked it out. To check out the IDO, you can use the **IDOs** form or **Form Control**.

**Note:** You cannot delete an IDO that has an Access As identifier that is different from yours.

1. On the **IDOs** form, select the IDO to delete.
2. Click the trash can icon in the toolbar. 

   When prompted, click **OK**.
3. Save your changes.

## IDO deletion rules

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147700897.html

You can define rules that govern what happens when you (or another individual) attempt to delete an IDO. These rules identify this information:

- The IDO properties in this IDO that are referenced by another IDO
- The name of the IDO that is referencing the IDO properties in this IDO
- The properties on the referencing IDO that correspond to the referenced properties in this IDO

For each rule, you can specify one of these actions to take when one or more records match the rule definition for deletion:

- **Restrict:** Aborts the deletion and displays a message indicating that the delete operation is not allowed

  For example: "Cannot delete record. At least one sales order exists for this customer."

  **Note:**  For **Restrict** actions, you must specify translatable application message strings to be substituted in the delete operation.
- **Cascade**: Allows the deletion but first deletes any referencing records (subcollections)
- **Remove**: Allows the deletion but sets the referencing properties to NULL

Optionally, provide this information:

- Specify the translatable message (**Message Object Name**) to display to the end user if the IDO deletion is prevented.
- Supply a filter (**Filter**) to further restrict the rows to which the delete policy applies.

## About IDO properties

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147703127.html

IDO properties can be of four different types.

### Bound properties

Bound properties are persistent properties whose values are stored in an Application Database table. This is the most common type of property.

### Derived properties

Derived properties are properties whose values are derived from SQL expressions. You can use derived properties to calculate values, to execute subqueries, or to call SQL functions.

### Unbound properties

Unbound properties are properties whose values are not stored in a database table and consequently are not persistent. Use this type of property to pass temporary values from a form to an IDO. This data can be used by a custom insert, update, or delete method.

### Subcollection properties

A subcollection property is a property that specifies a child IDO that is filtered from a parent IDO. A subcollection is the child IDO whose returned collection is associated with, and dependent on, the objects returned in the primary collection belonging to the parent IDO. Subcollections are the principal mechanisms for defining hierarchical or parent-child data relationships. Use subcollections to implement one-to-many relationships between IDOs.

The typical implementation of order lines in a business application is a good example of a subcollection. Each order returns a collection of order lines. The system would define the order lines as a subcollection of the Orders IDO.

Note that order lines are dependent on orders; that is, order lines cannot exist independently of their parent orders. However, this is not a requirement of subcollections in general. For instance, you might define a collection of customers as a subcollection of the collection of account managers. Each account manager has a set of customers that he or she deals with. Customers can exist totally independently of their account managers. It should be possible, for instance, to move a set of customers to a new account manager and delete their old account manager from the system.

Subcollections can also be used to implement recursive data structures. A good example of this is a typical implementation of a product structure or bill of materials. A product structure record typically includes a reference to a set of child entities that are themselves product structure records. In this case, you could define a Product-Structures IDO with a subcollection of product structures.

To define a subcollection, you must first define the collection class that characterizes the child IDO. Then you must establish the relationship between the new child IDO and the parent IDO by creating a subcollection property on the parent. In the case of orders and order lines, you would define an Orders collection and an OrderLines collection. Then you would define the relationship between the two by defining a subcollection property on the Orders IDO.

## Adding a property to an IDO

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147703205.html

You can add properties to IDOs only if you have first checked out the IDO for which you want to create the property. Use the **IDOs** form to check out the IDO. Once the IDO has been checked out, you can click the **New Property** button on either the **IDOs** form or the **IDO Properties** form to launch the **IDO Property Wizard**.

1. In the **IDOs** form or the **IDO Properties**, select the IDO you want to create the property for, and click **New Property**.
2. On the first page of the wizard, select the type of binding to use for the new property. 

   For information about these binding options, see [About IDO properties](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147703127.html).
3. Click **Next**.
4. Set the attributes for the type of property you selected: 

   - For **Bound** properties, see [Attributes for Bound properties](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lbu1652416222734.html).
   - For **Derived** properties, see [Attributes for Derived properties](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/ite1652416330362.html).
   - For **Unbound** properties, see [Attributes for Unbound properties](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/frz1652416386734.html).
   - For **Subcollection** properties, see [Attributes for Subcollection properties](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/yxz1652416435201.html).
5. When you are finished setting the property attributes, click **Finish**.

The **IDO Property Wizard** creates the property with the attributes you have specified and adds it to the list of properties for the IDO.

You can further define the applicable attributes of the new property using the **IDO Properties** form. \[Reminder: Context-sensitive help is available for all fields/options on that form.\]

Remember to check the IDO back in. Your changes do not become operative until you check them in.

## Editing an IDO property

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147703283.html

You can edit the IDO property for any table in the IDO. For example, you should edit bound properties after the table column bound to the property is modified in the application database.

**Note:** You can edit IDO properties only if you have first checked out the IDO that has the properties.

1. In the **IDOs** form, select the IDO that has the property you want to edit.
2. If necessary, check the IDO out.
3. Click **Properties**.
4. In the **IDO Properties** form, select the property you want to edit and make your changes.

   For details about the various fields and options, see the context-sensitive help.
5. Save your changes and close the **IDO Properties** form.

When you return to the **IDOs** form, your changes should now be reflected in the **Properties** tab grid. You might need to refresh the form to see your changes.

Remember to check the IDO back in. Your changes do not become operative until you check them in.

## Adding or editing validators for an IDO property or property class

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147703361.html

You can add, edit, or change the order of validators for an IDO property or property class.

1. Access the **Edit Validators** form, by clicking the ellipses (•••) button to the right of the **Validators** field in either the **IDO Properties** form or the **Property Classes** form. 

   **Note:**  Any validators you define here are executed by the IDO Runtime Service during a collection Save operation. These validators are also inherited by any component on a form that is bound to this property or to a property derived from that class.
2. On the first (main) page of the form, to add a new validator, click **Add**. To edit an existing validator, click **Edit**. 

   If you click **Add** here, you go to the **Select Validator Type** page. The rest of this procedure assumes that you selected the **Add** option.

   If you click **Edit**, the page you go to is the correct one for that validator. For the options available on that page, see the topic for that page.
3. On the **Select Validator Type** page, select the type of validator to add, and then click **Next**. 

   The correct page for the type you select displays.

   For the specific options available with each option, see these topics:

   - **In Inline List**: See [Edit Validators, Set Properties From Inline List page](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147705046.html).
   - **In IDO Collection**: See [Edit Validators, In Collection Validator page](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147704547.html).
   - **IDO Method**: See [Edit Validators, Select Validator Type page](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147704875.html).
4. When you are finished making your specifications, click **OK**. 

   This returns you to the first page of the **Edit Validators** form.
5. Optionally, if you have multiple validators, you can rearrange the order in which the validators execute, using the **Move Up** and **Move Down** buttons.
6. To save your work, close this form, and return any validator definitions to the parent form, click **OK**.

## Creating an inline list

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147703424.html

**Note:**  This topic applies to the creation of inline lists to use in conjunction with IDO properties and property classes.

An inline list is a set of "hard-wired" values for a property that can be applied to a component. Such a list is typically used when the number of values to appear in a combo box or other display is limited and the values will be constant and unchanging.

1. On the **IDO Properties** form or the **Property Classes** form, click the ellipses button (•••) to the right of the **Inline List** field.
2. In the **Edit Inline List** form, determine the size of your inline list by adding rows and/or columns. 

   You can add any number of rows or columns, but for inline lists, it is usually a good idea to keep the number small. You should decide before creating the list exactly how many rows and how many columns your list needs to have.
3. Populate the rows and columns in the grid with values. 

   The values in the grid cells can be any combination of literal values and translatable strings.
4. In the **Column For Value** field, specify by column number which column is to provide the values to any components that use this IDO property or property class.
5. In the **Display Columns** field, specify by column number which columns are to have their values displayed when the list is used. 

   If you want to display multiple columns, separate the column numbers with commas.

Be aware that, although you can use translatable strings in these lists, the IDO Runtime Service cannot access the string IDs. You can, however, resolve the string IDs at the user interface level.

For example, suppose you want to create an inline list with this information:

- A set of four severity levels: **Low**, **Medium**, **High**, and **Severe**
- A translatable string value for each level: **sLow**, **sMedium**, **sHigh**, **sSevere**
- A numerical value for each severity level, so that the list items can be presented in the correct order, regardless of alphabetization or translation concerns

In this case, you would require two columns, one for the translatable strings and the other for the numeric values. You would require four rows, one for each severity level.

Then, in the **Column For Value** field, you would want to specify the numeric column as the value for the component using this property to use in creating the list in the correct order.

And finally, in the **Display Columns** field, you would want to specify the column containing the strings as the values to display when the list is actually presented in the UI.

When you click **OK** in the **Edit Inline List** form, then, this metadata would be created and displayed in the **Inline List** field:

```
ENTRIES(sLow\0,sMedium\1,sHigh\2,sSevere\3) DISPLAY(1) VALUE(2)
```

## About IDO methods

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147702675.html

IDOs (Intelligent Data Objects) can use two kinds of methods: standard methods and custom methods.

### Standard methods

All IDOs implement the methods LoadCollection, UpdateCollection, GetPropertyInfo, and Invoke.

- LoadCollection retrieves a collection of rows from the database.
- UpdateCollection takes a set of rows marked for insert, update, or delete, and executes the appropriate SQL code on the database.
- GetPropertyInfo returns detailed information about the properties supported by the IDO.
- Invoke executes a custom method.

### Custom Methods

Custom methods are defined by the developer. You can define custom methods that are implemented in Transact-SQL. Transact-SQL is the preferred programming language because it is easier to use for most of these tasks and because the IDO forms provide useful facilities for defining methods based on these procedures.

There are two kinds of methods based on Transact-SQL stored procedures:

- Methods based on stored procedures without a result set
- Methods based on stored procedures with a result set

A stored procedure that does not return a result set can have both input parameters and output parameters, but it does not select data to be returned to the caller.

You can use a method that returns a result set to the caller (a list of values) to populate collections. A typical use is to populate drop-down list boxes in forms. You can also bind forms to these returned sets.

## About IDO extension classes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147702784.html

An IDO extension class is a .NET class that allows developers to extend the functionality of an existing IDO by adding methods and event handlers. IDO extension classes are compiled into a .NET class library assembly and stored in the IDO metadata Objects Database. The IDO runtime loads these assemblies on demand and calls methods and event handlers in the extension classes in response to IDO requests.

An extension class is short-lived: It is created at the start of a request and disposed of immediately when the response is completed. Therefore, no state should be stored in an extension class.

Any public class in an IDO extension class assembly can be identified as the extension class for an IDO in the IDO metadata Objects Database. IDO extension class assemblies are .NET framework class libraries that are created using any of the .NET languages.

**Note:** For the list of currently supported .NET class libraries, see the Infor Mongoose Installation Guide.

## Transactions and IDO methods

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147702847.html

IDO methods can be run within the context of a transaction. To reduce transactional overhead and blocking, you can set a method to run without a transaction.

Methods that do not update data in the database can likely be run without a transaction. A method that runs a long time in a transaction, potentially blocking other transactions, may perform better if it is run without a transaction. You can control the size of individual transactions by starting them and committing or rolling them back within a stored procedure.

To set a method to run within a transaction, select the **Transactional** check box on the **IDO Methods** form. At runtime, the method starts a transaction before the stored procedure is called.

To set a method to run without a transaction, clear the **Transactional** check box. The method does not start a transaction before the stored procedure is called.

## Adding a method to an IDO

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147702925.html

An IDO method is either based on a stored procedure in the application database or is an extension class method. When customizing your application, you might need to add your own methods to an IDO.

You can add methods to IDOs only if you have first checked out the IDO for which you want to create the method. Use the **IDOs** form to check out the IDO. Once the IDO has been checked out, you can click the **New Method** button on either the **IDOs** form or the **IDO Methods** form to launch the **IDO Method Wizard**.

1. In the **IDO Method Wizard** form, make these selections: 

   Method Type

   Select the type of procedure being called by this method. You can specify a method that either does or does not return a result set.

   Stored Procedure

   Select the stored procedure to add. This is the stored procedure on which the method is based.

   **Note:** If you selected a **Stored Procedure** option as the **Method Type**, this field is required. If you selected an **Extension Class** option, this field is disabled.

   Method Name

   Enter the method to add. The method name must be unique to the IDO.

   **Note:** If you selected a **Stored Procedure** option as the **Method Type**, this field is automatically populated with the name of the stored procedure as well. You can change it if you want. If you selected an **Extension Class** option, you must provide the name of the method. In this case, the name you provide here must match exactly the name of the method as provided in the extension class code.

   Transactional

   If the method should be run as a transaction, select this option. Otherwise, leave it cleared.
2. Click **OK**.
3. Refresh the **IDOs** form.

The new method is added to the IDO. After you refresh, the method displays in the **Methods** tab.

Remember to check the IDO back in. Your changes do not become operative until you check them in.

## Editing an IDO method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147702987.html

After you modify a stored procedure in the application database, any method that is associated with the stored procedure must be updated to reflect the changes.

To accomplish this, use this procedure:

1. Open the **IDOs** form and select the IDO you want to edit.
2. If necessary, click **Check Out**.
3. Click **Methods**.
4. In the **IDO Methods** form, select the method you want to edit.
5. Use the avaialble fields to make your changes. 

   For detailed information about specific fields or options, see the context-sensitive help.
6. Save your changes and close the **IDO Methods** form.

When you return to the **IDOs** form, your changes should now be reflected in the **Methods** tab grid. You might need to refresh the form to see your changes.

Remember to check the IDO back in. Your changes do not become operative until you check them in.

## Deleting a method or property from an IDO

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147703065.html

You can delete a method or property associated with an IDO.

1. Open the **IDOs** form, and select the IDO you want to modify.
2. Click **Check Out**. 

   If you are working in a new IDO that has not yet been checked in, skip this step.
3. Depending on whether you want to delete a method or a property, click either **Methods** or **Properties**.
4. Select the method or property to delete.
5. From the **Actions** menu, select **Delete**.
6. Save your changes.
