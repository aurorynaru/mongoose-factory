# REST API Wizard and IDO from ION API Wizard

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/core/forms/wizard_forms/ido_from_ion_api_wizard.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## IDO from ION API Wizard

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/core/forms/wizard_forms/ido_from_ion_api_wizard.html

Use the **IDO from ION API Wizard** to create a Mongoose IDO, using an ION API as the source for the table and properties of the IDO.

Before you can use this wizard, you must first make sure that the default ION API server is set up for it. You must also be authorized to use Runtime Builder forms.

## About the IDO from ION API Wizard

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/sqx1608268153570.html

The **IDO from ION API Wizard** is used to generate IDOs and their properties from an ION API endpoint. This wizard also generates a custom load method and a standard method to invoke Get, Post, Put, and Delete actions from the API.

Essentially, the **IDO from ION API Wizard** works by connecting with an ION API that has Swagger documentation and using it to generate an IDO collection in Mongoose. The wizard uses the Swagger documentation to create the necessary input and output parameters for the IDO. The wizard also parses the response data from the ION API to generate and populate the rows and columns for the IDO table, using JSONPath expressions. The wizard supports the use of customer APIs or non-Infor-provisioned APIs.

After generating the IDO, the wizard checks it in to the Application Database automatically.

## Creating an IDO from an ION API

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/oqw1608268046048.html

You can create an IDO that uses an ION API or a customer-provided API to access a source of data. Use the **IDO from ION API Wizard** to connect with an ION API or a customer-provided API, using its Swagger documentation to define parameters and generate an IDO, complete with table and properties.

1. Open the **IDO from ION API Wizard** form: 

   **Note:** 
   - Before using this wizard, you must have an ION API server set up for it, using the **ION API Servers** form.
   - You must be authorized to use Runtime Builder forms to access and use this form.

   1. Launch the **Runtime Builder Selection** dialog box.
   2. From the **Category** drop-down list, select **External Data Source** (ExtDatasource).
   3. From the **Runtime Builder** drop-down list, select **IDO from ION API Wizard** (IDOFromIONAPIWizard).
   4. Click **OK**.
2. In the **IDO from ION API Wizard** form, make these settings: 

   Server ID

   From the drop-down list, select the server you want to use to connect with the ION API.

   Suite Context

   From the drop-down list, select the ION API suite that contains the API you want.

   Proxy Path

   If the API contains multiple endpoints, specify the proxy path to be used to locate the swagger documentation.

   **Note:** You can obtain the proxy path from the ION API endpoint itself, using the ION API app. For instructions on how to do that, consult the ION API app documentation.

   Select Method to Generate IDO

   From the drop-down list, select the method to create when generating the IDO. When applicable, this is the method that handles and processes the posting of data from the ION API.
3. Click **Next**. 

   The wizard proceeds to the **Get Input Parameters** page, which displays the input parameters for the specified endpoint.
4. At a minimum, provide values for any required parameters. 

   **Note:** Information about parameters, whether they are required or not, are derived from the swagger documentation provided for the API in the ION API app. You should be aware that, depending on the endpoint you are using, some parameters required by the API might not indicate as required by the endpoint; but they are still required for use by the IDO that is generated.

   Input parameters are not required upon generating the IDO properties. You have the option to set the initial value or not, then set the required fields during the implementation (runtime) before calling the ION API Invoke.

   Values for other parameters are optional, depending on what data you want and how you want to use them. Any values you provide are used to filter the data that is retrieved by the IDO. It is worth noting that you can change the filter value during the implementation (runtime) of the IDO, to filter the data from the API.
5. Click **Next**. 

   The wizard proceeds to the **Get Output Parameters** page, which displays the list of properties to be created as IDO properties that you selected.
6. Select the parameters you want to use as output parameters. 

   Typically, this is only the parameters required by the endpoint.

   To select all parameters in the list, use the **Select All** option.
7. Click **Next**.
8. On the **Add Post Method and Parameters** page, at a minimum, provide values for any parameters required for Post (Add) operations. 

   **Note:** 
   - If a parameter is of the **Type** "body", then you must obtain the JSON-formatted body template from the API endpoint, modify it, and paste it into the **Value** field.

     See [Getting body parameter formats for ION API-based IDOs](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mwv1608697723515.html).
   - If a selected parameter is required, the **Value** column cells all turn yellow (not just the cells for the required parameters), indicating that a value is required for the selected parameters. For parameters that are not required, the cells all turn white (including the cells for the required parameters). For this reason, you should make sure you know ahead of time which parameters are required by the API and which are not.

   Values for other parameters are optional, depending on your needs.
9. Click **Next**.
10. On the **Add Put Method and Parameters** page, at a minimum, provide values for any parameters required for Put (Update) operations. 

    **Note:** See the notes for Step 8\.
11. Click **Next**.
12. On the **Add Delete Method and Parameters** page, at a minimum, provide values for any parameters required for Delete operations. 

    **Note:** See the notes for Step 8\.
13. Click **Next**.
14. On the **Generate IDO** (final) page of the wizard, supply this information: 

    IDO Name

    Provide the name to assign to the newly generated IDO in Mongoose

    Project Name

    From the drop-down list, select the IDO project to which the generated IDO is to belong.

    Description

    Optionally, provide a description for internal use that can be used to identify the purpose and/or intendeed use of the new IDO.
15. Click **Finish**. 

    The wizard proceeds to generate the IDO, creating the appropriate properties and tables, and then to check in the newly generated IDO. If successful, the system displays a message to let you know that the IDO was generated successfully.
16. (Optional, but recommended) Use the **IDOs** form and related IDO forms to verify that the IDO exists and has the correct properties and methods.

The IDO can now be used much like any other IDO collection in your application.

**Note:** When using this IDO collection in a form, although it is no longer required, you can use the GetIONAPIData custom load method with it.

To do this, in Design Mode or the Web Designer, select the **Collections** property sheet, and then select **GetIONAPIData** as the **Custom Load Method** attribute value.

Depending on your implementation, you might also be able to use load/save override methods.

## REST API Wizard

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/core/forms/wizard_forms/rest_api_wizard.html

Use the **REST API Wizard** to create strongly typed APIs and, at the same time, generate Swagger documentation. These APIs can then be made available to the Mongoose REST API Version 2 set, using the Infor ION API app.

Before this wizard can be used, it must be designated as a Runtime Builder form. When setting this up on the **Form Wizard Categories** form, select these options:

- **Category**: **REST**
- **Wizard**: **APIGenerator**
- **Form**: **WSFormWizardRestApi**

See [Designating a form wizard as a Runtime Builder form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mergedprojects/core/forms/wizard_forms/wtz1519881475447.html).

## Using the REST API Wizard

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/jyn1581573276554.html

**Note:** Before you can use the **REST API Wizard**, you must first be authorized to use Runtime Builder forms. Also, if the **REST API Wizard** is not already designated as a Runtime Builder form, you must designate it as such before you can use it to create or modify the IDO with Swagger documentation.

1. Open the **REST API Wizard** form.
2. On the first page of the wizard, provide these specifications: 

   IDO Name

   From the drop-down list, select the IDO for which the REST API and the Swagger document are to be created.

   Document Description

   Optionally, provide a description that can be used to help understand the purpose of the Swagger document.

   Action

   From the drop-down list, select the type of action to be performed by the API.

   Operation ID

   Provide a name that can be used as a unique identifier for the API. This ID is used to access the API from the IDO Swagger document and/or in the ION API.

   This ID typically includes part of the IDO name and the operation being performed by the API (for example: GetLanguageIDPropertyInfo).

   Operation Description

   Optionally, provide a description for the API itself. This is typically a summary of what the API does or indicates its purpose.
3. Click **Next**. 

   What happens next depends on the type of action you are using for your API. For details of what happens for each type of action, see one of these topics:
   - [Creating an API for a Get Property Information operation](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vmn1583909569204.html)
   - [Creating an API for an Invoke Method operation](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lzb1583909896174.html)
   - [Creating an API for a Load Collection operation](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/suk1583910180286.html)
   - [Creating an API for an Update Collection operation](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/zox1583910621199.html)

   When you click **Next** for the last time, the wizard displays a summary of both the name of the IDO Swagger document and the base URL and filename of the REST API to be created. The generated path is comprised of the Swagger Collection documentation URL, the IDO Swagger document name, and the Operation ID.
4. Click **Finish**.

The **REST API Wizard** saves the information to create the REST API endpoint and the associated Swagger documentation. You can now use the **Object External APIs** form to view information about all the API endpoints created in your system and to see the data for each API. You can also use the **Object External API Endpoints** form to further define your API endpoint.

## Creating an API for a Get Property Information operation

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/vmn1583909569204.html

When creating an API for a Get Property Information operation, no additional information is needed. After you click **Next** on the first page of the **REST API Wizard**, the wizard takes you directly to the Finish page.

Return to the last step of [Using the REST API Wizard](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/jyn1581573276554.html).

## Creating an API for an Invoke Method operation

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lzb1583909896174.html

After you click **Next** on the first page of the **REST API Wizard** for an Invoke Method operation, the wizard displays a second page.

1. On this second page, provide this information: 

   IDO Method Name

   From the drop-down list, select the IDO method you want the API to invoke.

   When you select the method, the wizard automatically populates the **Parameters** grid with any parameters expected by the IDO method.

   Parameters

   Provide the values for any parameters on which you want the IDO method to operate.

   **Note:** Parameters with blank values are not ignored but get passed "as is".
2. Click **Next**. 

   Tthe wizard displays a summary of both the name of the IDO Swagger document and the base URL and filename of the REST API to be created.
3. Return to the last step of [Using the REST API Wizard](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/jyn1581573276554.html).

## Creating an API for a Load Collection operation

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/suk1583910180286.html

After you click **Next** on the first page of the **REST API Wizard** for a Load Collection operation, the wizard displays a second page. Make these settings:

1. From the list of **Available Properties**, select the properties to include in the operation. 

   Optionally, to include all properties in the operation, select the **Include All Properties** option.
2. Optionally, use the up and down buttons to reorder the **Properties To Include** list to your liking.
3. Click **Next**. 

   The next page offers options to specify filter criteria to limit the Load Collection operation.
4. Optionally, provide one or more of these filter criteria for the operation: 

   Filter

   Specify the filter criteria.

   This can be any valid SQL WHERE clause.

   Order By

   Specify one or more properties by which the collection is to be sorted.

   This parameter is a comma-delimited list of properties that specifies the order in which the result set should be sorted. To have a property sorted in descending order, use the DESC keyword after the property name.

   Record Cap

   To limit the number of returns, specify the number of records to return.

   This parameter specifies how many records are to be retrieved in each request. These are the valid values:
   - **-1**: This specifies that the system default record cap (200) is to be used.
   - **0**: This value specifies that all records are to be retrieved, regardless of any record cap settings.
   - Any other positive integer specifies the number of records that are to be retrieved.

     **Note:** This setting is subject to any system-wide record cap overrides that might be in effect.

   Bookmark

   Specify a bookmark ID.

   Bookmark IDs serve as a reference when you want to get to the next or previous records in a collection.

   Load Type

   This parameter is used for load collection paging. It is used in conjunction with the bookmark parameter.

   To use, specify one of these types:

   - FIRST
   - NEXT
   - PREV
   - LAST

   Post Query Command

   Specify one or more commands for the system to execute (server-side) for every record returned by a Load Collection action.

   District

   When set to **True**, this parameter specifies that a set of data that represents only distinct combinations of requested properties is to be returned.

   Read-Only

   When set to **True**, this parameter specifies that the return results are to be marked as "Read Only".
5. Optionally, to include a custom load method in the query, click Include Custom Load Method Parameters. 

   This action launches a modal page on which you can select the custom load method and provide the parameter values, if any, for that method.

   When yoou are finished with this page, to return to the previous page, click **Done**.
6. Click **Next**. 

   Tthe wizard displays a summary of both the name of the IDO Swagger document and the base URL and filename of the REST API to be created.
7. Return to the last step of [Using the REST API Wizard](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/jyn1581573276554.html).

## Creating an API for an Update Collection operation

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/zox1583910621199.html

After you click **Next** on the first page of the **REST API Wizard** for an Update Collection operation, the wizard displays a second page.

1. To define an update action for an item in the IDO, click **Add**. 

   The wizard adds a record to the grid.
2. To instruct the system to refresh the collection after the operation has completed, select the **Refresh After Update** option.
3. From the **Action** drop-down list, select the operation you want the API to perform. 

   These are the available options:
   - **Insert** \- Adds a specified record to the collection.
   - **Update** \- Makes a specified change to a designated record in the collection.
   - **Delete** \- Removes the designated record from the collection.

   If you select the **Insert** option, the wizard automatically creates the **Item ID**, based on the IDO. If you select the **Update** option or the **Delete** option, you must supply the **Item ID**.
4. If you selected **Update** or **Delete**, provide the **Item ID**, if required. 

   This is the typical format for the **Item ID**: `PBT=tableName tableAlias.DT=timestamp aa.ID=rowPointer`

   where:

   - `tableName` is the name of the IDO table.
   - `tableAlias` is the table alias, if any.
   - `timestamp` is
   - `rowPointer` is the pointer for the row for the specified item.
5. In the **Update Locking** field, specify the update locking mechanism for the item. 

   These are the supported options:
   - **Row** (default)
   - **Property**
6. To select properties to include and, optionally, to define for each item, click **Modify Properties**. 

   Clicking this link launches the **Update Item Properties** page in which you can select and define the properties you want.

   1. To add a property to include, click **Add**.
   2. From the **Property** drop-down list, select the property on which to perform the action.
   3. In the grid, specify these values for each property you want to update: 

      Property

      From the drop-down list, select the property for which you want to perform the operation.

      Value

      Provide the value of the property.

      Modified

      When selected, this option indicates that the property has been modified.

      Null

      When selected, this option indicates that the property has a null (empty) value.
   4. Optionally, rearrange the list of properties using the up and down arrows to the right of the grid.
   5. When you are finished selecting, defining, and ordering properties, to return to the **Update Items** page, click **Done**.
7. Click **Next**. 

   Tthe wizard displays a summary of both the name of the IDO Swagger document and the base URL and filename of the REST API to be created.
8. Return to the last step of [Using the REST API Wizard](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/jyn1581573276554.html).
