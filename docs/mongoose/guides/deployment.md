# Deploying applications

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/kmv1717103579637.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Deploying applications

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/kmv1717103579637.html

Once you have finished with the development and customization of your Mongoose-based application, you can deploy your new or modified application for use by others.

## About application deployment

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/rym1487127502419.html

Application deployment is the process of packaging an application or applet you have developed and distributing it to your users. The deployment process for Mongoose-based applications involves these basic steps:

1. Convert the metadata objects associated with the application or applet into script files.
2. Place the script files in a distributable package.
3. Copy the package to the server where the application or applet is to be deployed.
4. Unpack the script files to the appropriate location.

### Cloud deployment versus on-premise deployment

Most Mongoose-based applications are designed for one of two types of deployment:

- Cloud apps, which are accessed primarily by means of a web browser
- On-premises apps, which operate on computers in the user's location

Cloud apps have certain restrictions that on-premises apps do not. For instance, on-premises apps can offer direct access to the databases used in a Mongoose-based application and can allow developers to run SQL scripts. Cloud apps offer neither of these capabilities.

### Two tools to do the job

Mongoose provides two tools to assist with the application deployment process:

- The **Mongoose Deployment Scripting Utility** (MDSU) \- This is a stand-alone utility that is used to create and package scripts for apps to be deployed either in an on-premises environment or in the cloud.

  The MDSU has options to create scripts in SQL format, and has an extensive variety of other options you can use to select and create only those scripts you want to deploy.

  The MDSU, however, has no options to actually deploy the app package once it has been created. App deployment of the zip package is done using the same tools and processes as for a regular update or upgrade.
- The **Deployment** form within Mongoose itself \- This form is designed primarily to create and package scripts for apps intended to run in the cloud. Because cloud apps and other apps cannot make use of SQL scripts, this form produces scripts only in XML format.

  This form is also used to deploy the XML package in the target environment.

## Creating a deployment package with the Deployment form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/cyz1487137837356.html

The **Deployment** form is used primarily to create deployable zip packages for Mongoose-based applications or applets, and to deploy the packages in the target systems.

**Note:** Deleting SQL columns between environments must be performed manually. This action is not included in the deployment packager process.

You can also use the **Deployment** form, in conjunction with the **Extension Bundles** form and the **CSP Namespaces** form, to modify, generate, download, and deploy extension bundles. See [About extension bundles](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/drq1663905110098.html) and [Deploying an extension bundle with the Deployment form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/gjl1663906323418.html).

**Note:** Before you create scripts for your application, ensure that you check in the IDOs so that the IDO metadata is stored in the objects database.

To create the zip package for an application or applet, select one of these options:

- **Export using AccessAs and Object Prefix**

  **Note:** Ensure that you know the Access As ID and the object prefix used for the tables and other metadata in the application or applet that you want to deploy.
- **Export using forms, selected items and referenced items**

  **Note:** The items include referenced objects, component classes, property class extensions, IDO collections, property classes, custom assemblies, application tables, user-defined data types, and IDO projects.

The selected script files are packaged into a zip file at the specified location.

To verify that the zip file are correctly created, perform these actions:

- Click **View Log** and examine the output log for the operation.
- Go to the designated output location and verify that the zip file is there and that it contains the expected script files.

## Creating scripts using Access As and Object Prefix

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/tgr1569470720417.html

Before you create scripts for your application, ensure that you check in the IDOs so that the IDO metadata is stored in the objects database.

**Note:** You can also add objects to extension bundles using Access As and Object Prefix values. See [About extension bundles](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/drq1663905110098.html) and [Adding objects to extension bundles using Access As and Object Prefix values](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/hnk1665025371878.html).

To create scripts using the Access As and Object Prefix values:

1. Open the **Deployment** form.
2. Click the **Export using AccessAs and Object Prefix** option.
3. In the **Export Applet** section, specify this information:

   Profile Name

   Specify the name the deployment profile.

   **Note:** You can have multiple deployment profiles for application or applet script packages.

   Access As

   Select the Access As value to use with your applet from these options:
   - To use an existing Access As value, select the value from the list.
   - To use a blank Access As value, select **(null)**.
   - To exclude Access As values from the filter criteria, select **(ignore)**.

   When creating a new record, this field is automatically populated with the default Access As value.

   Object Prefix

   Optionally, specify a prefix for the application or applet objects.

   Normally, this value is the same as the Access As value, but not necessarily.

   **Note:** The system uses both the Access As value and the Object Prefix value to filter for forms, component classes, scripts, strings, and so on. Objects database elements, such as IDO collections, property classes, custom load assemblies, message, and IDO projects are filtered as well. Finally, Application database schemas and user-defined data types (UDTs) are also filtered and included based on these values.

   Script Application Database

   To create scripts for database schemas, specifically for custom-created tables and all custom-created UDTs, select this check box.

   Script Forms Database

   To create scripts for all forms metadata and global objects, select this check box.

   Script Objects Database

   To create scripts for all Objects database elements, such as IDO definitions, IDO property classes, and IDO extension class assemblies, select this check box.

   This database also includes some metadata definitions found in the Application database that use the Access As attribute. This includes all customized Application Event System (AES) metadata and all customized Replication Document metadata.

   Include data

   To specify that any data in the app tables must be included in the scripts, select this check box.

   Scope

   Select the scope type:
   - **Vendor**: To create script files that are used by an application vendor, select this option.
   - **Site**: To create script files that are used by all users, select this option.

   Output

   Specify the location in which the zip package with the scripted files is to be created.

   Use the ellipsis (**…**) button to the right of this field to navigate to and select the location you want.

   **Note:** The ellipsis button is not available in the web client or in a partial trust situation. However, you can specify a file name for the created .zip file.
4. Click **Create Scripts**.

The system creates all the selected script files and packages them into a zip file at the specified location.

To verify that the zip file is correctly created, perform these actions:

- Click **View Log**, and examine the output log for the operation.
- Go to the designated output location and verify that the zip file is there and that it contains the expected script files.

## Creating scripts using forms and items

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/oyy1569486453761.html

Before you create scripts for your application, ensure that you check in the IDOs so that the IDO metadata is stored in the objects database.

**Note:** You can also add objects to extension bundles using forms, selected items, and referenced items. See [About extension bundles](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/drq1663905110098.html) and [Adding objects to extension bundles using forms, selected items, and referenced items](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/mbk1665025439941.html).

To create scripts using forms, selected items, and referenced items:

1. Open the **Deployment** form.
2. Click the **Export using forms, selected items and referenced items** option.
3. In the **Available Forms** section, specify this information:

   Filter

   To filter the list of available forms, specify a keyword.

   You can use the exact name of a form, or a partial text string as a filter keyword.

   Scope

   Select the scope type:
   - To create script files that are used by an application vendor, select **Vendor**.
   - To create script files that are used by all users, select **Site**.

   Refresh

   To display the filtered results in the bottom panel of the **Available Forms** section, click this button.
4. From the filtered results, select the forms that you want to deploy. 

   The selected forms are automatically added to the **Selected Forms** section.

   You can also perform these actions:
   - To clear the list of forms in the **Selected Forms** section, click **Reset**.
   - To select all the forms in the filtered results, click **Select All**.
   - To remove all the selected forms, from the current filtered results, in the **Selected Forms** section, click **Deselect All**.
5. Optionally, in the **Selected Forms** section, perform any of these actions:

   - To include in the scripts all user-defined data that were created using any of the selected forms, select **Include application data**.
   - To remove the forms that are not needed, click **Remove selected**.
   - To save the list of the selected forms into an XML file, click **Save**.
   - To load a list of selected forms from a previously saved XML file, click **Load**.
6. In the **Output** field, specify the location in which the zip package with the scripted files is to be created.

   Use the ellipsis (**…**) button to the right of this field to navigate to and select the location you want.

   **Note:** The ellipsis button is not available in the web client or in a partial trust situation. However, you can specify a file name for the created .zip file.
7. Optionally, to review the complete list of items that can be scripted and exclude the referenced items that are not needed, click **Preview**.
8. Click **Create Scripts**.

The system creates all the selected script files and packages them into a zip file at the specified location.

**Note:** If you are using the web client, then you will be asked where to save the .zip file. If a default downloads folder is set on your browser, then the .zip file is saved in that folder.

To verify that the zip file is correctly created, perform these actions:

- Click **View Log**, and examine the output log for the operation.
- Go to the designated output location and verify that the zip file is there and that it contains the expected script files.

## Deploying an application with the Deployment form

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/gna1487136066495.html

Once you have a deployable zip file created for an application or applet using the **Deployment** form, you can then deploy that app in the environment where you want to use it.

**Note:** This procedure applies to zip files created using the **Deployment** form. As such, it can be used only in a web or cloud environment. To deploy a package that includes SQL scripts and that is intended to be deployed in on-premises environment, see the online help for the Mongoose **Deployment Scripting Utility**.

You can also use the **Deployment** form, in conjunction with the **Extension Bundles** form and the **CSP Namespaces** form, to modify, generate, download, and deploy extension bundles. See [About extension bundles](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/drq1663905110098.html) and [Deploying an extension bundle with the Deployment form](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/gjl1663906323418.html).

Before you deploy the zip file, ensure that you check in the IDOs so that the IDO metadata is stored in the objects database.

To deploy the XML-scripted zip package:

1. Copy the zip file to the machine that is to be used to deploy the app.
2. Open the **Deployment** form.
3. In the **Deploy Applet** \> **Source File** field, specify the location of the zip file.

   In the web client, click **Import** to navigate to and select the zip file. In the Windows client, use the ellipses (•••) button to navigate to and select the zip file.

   **Note:** 
   - The ellipses button is not available in the web client or in a partial trust situation. However, you can use the **Import** button, or designate a path and file name for the file to import.
   - You cannot import files if you are working in a Software-as-a-Service (SaaS) environment.
4. Optionally, to convert the Access As identifier of the imported components to be the **Access As** value of the target environment, select the **Convert to local Access As** check box.

   **Note:** If the IDO project of the IDO to be imported has an **Access As** value different from the environment in which you are currently working, you cannot convert the **Access As** value of that IDO collection.
5. Click **Execute Scripts**.

The system unzips all the script files and inserts them into the appropriate locations on the server that hosts the current session.

To verify that the zip file is correctly deployed, perform these actions:

- Click **View Log**, and examine the output log for the operation.
- Launch the **IDO Projects** form and verify that the imported IDO project is displayed in the list of IDO projects.
