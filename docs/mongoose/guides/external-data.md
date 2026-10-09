# Non-Mongoose and external data in Mongoose applications

> Guide: Infor Mongoose Core Extensibility Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147698869.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About non-Mongoose data used in Mongoose-based applications

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147698869.html

You can incorporate data from a non-Mongoose source; for example, a legacy application that is being converted to a Mongoose base. However, certain schema elements required by Mongoose often do not exist in the non-Mongoose data source, as described in this topic.

To incorporate these data sources into your Mongoose-based application, you must create views that provide the schema elements required by Mongoose.

For the procedure, see [Including Data from an External Database into a Mongoose Application](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147699212.html).

**Note:**  Currently, only SQL Server, Oracle, DB2, Postgres, and Progress data sources can be linked to Mongoose applications.

### Unicode support

Mongoose application databases are designed to support Unicode, but other data sources might not support Unicode. To avoid improper scanning of indexes in the non-Mongoose data sources, you might need to set the **Non unicode literal** process default in the Mongoose-based application.

### Optimistic locking

Mongoose databases use the RecordDate property to provide optimistic locking. In many cases, however, the non-Mongoose data source does not have a RecordDate property. So, one of the major problems with using non-Mongoose data sources is the coordination of optimistic locking. Both the **IDO Linked Databases** form and the **IDO Linked Tables** form provide options to specify a column to be used for optimistic locking in the non-Mongoose data source.

This specification can include these options:

- Allowing Mongoose to identify whether a RecordDate column exists in the non-Mongoose data source.
- Designating a default column on the **IDO Linked Databases** form. This is the name of a column that is normally used for optimistic locking by the non-Mongoose tables, if such a column exists.
- Designating a column for optimistic locking on the **IDO Linked Tables** form.

If none of these options exist, the literal string "NODATE" is designated as the RecordDate value. Because this literal string is applied to any access of the non-Mongoose data source, no optimistic locking occurs.

### About the Mongoose view

The created Mongoose view over the non-Mongoose data source includes the columns from the data source plus these additional columns, required by Mongoose for processing:

- **RecordDate** is used for optimistic locking in Mongoose. The system maps whatever column you have assigned in the non-Mongoose table to use for optimistic locking to this column, as described previously. During run-time, Mongoose checks to see if this value has been modified elsewhere since the data was first queried, before your modifications.
- **RowPointer** is required to be a value that is unique for the entire table.  For "outrigger" data sources, this value is derived by concatenating the primary key values from each row in the external table.

After this view is created, you can create IDOs and forms. You can also perform read and write operations on the linked database table like any other Mongoose database table. One exception is that you cannot use the non-Mongoose database and tables for any event action where the workflow must be suspended.

## Including data from a different SQL database into your application

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147699040.html

To incorporate data from a non-Mongoose linked SQL Server database into a Mongoose-based application, you must specify information about the other database, using the **IDO Linked Database** form and the **IDO Linked Tables** form.

**Note:** To link to a non-Unicode database, use the **Process Defaults** form to set the **Non Unicode Literal** process default. This helps ensure that the database indexes are scanned and accessed properly when performing queries.

1. Open the **IDO Linked Database** form and specify these values: 

   Link Database

   Specify the name that is to identify the database in the application. This is an internal designation only and need not be the same as the actual database name.

   Database Name

   Specify the name of the SQL Server database to which you want to link. If this database resides in the same location as the Mongoose databases, you can provide just the name of the database. If this database resides in a location other than the Mongoose databases, you must also provide the location of the database. Use this format: `databaseServer`.`databaseName`

   **Note:** The database administrator must first create a linked server relationship using the SQL Server configuration tools.

   Optimistic Lock Column Name

   Optionally, specify the name of a column that might be available for optimistic locking in the non-Mongoose database. If no specific column is designated on the **IDO Linked Tables** form, this value is used as the default optimistic lock setting.
2. Save your changes.
3. Open the **IDO Linked Tables** form to verify and, if necessary, adjust the column settings for the non-Mongoose table: 

   - Verify that the columns listed in the **Column Name** column match those of the non-Mongoose table.
   - Optionally, rename the **View Column Names** as you want them to display in your Mongoose application.
   - Verify that the primary keys for the non-Mongoose table are correct. Modify the choices for keys as required.
   - Optionally, select the column to use for optimistic locking in the non-Mongoose database.

     When the conditions listed here exist, Mongoose designates the NODATE literal string for the **RecordDate** value, and no optimistic locking is performed:

     - No **RecordDate** column exists in the non-Mongoose table.
     - The column specified in the **Optimistic Lock Column Name** field of the **IDO Linked Databases** form does not exist in the non-Mongoose table.
     - No column is designated for optimistic locking on the **IDO Linked Tables** form.
4. To create the Mongoose view, click **Create View**. 

   Mongoose creates a view that includes the columns from the linked table, along with columns and values for these properties:
   - **RecordDate**: Used for optimistic locking
   - **RowPointer**: Required to be a value that is unique for the entire table
   - **AddMongooseFields**: With a literal value of **1**, which is used internally

You can now use the linked database and tables in the same way that you use any database created within Mongoose. You can create IDOs and forms, and perform read-write operations on them like any other Mongoose database. However, you cannot use the non-Mongoose SQL database and tables for any event action where the workflow must be suspended.

## Including data from an external database into a Mongoose-based application

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147699212.html

Mongoose-based applications can communicate with external databases hosted on various types of servers, through the IDO layer. To set up communication, use these steps:

**Note:** To link to a non-Unicode database, use the **Process Defaults** form to set the **Non Unicode Literal** process default. This ensures that the database indexes are scanned and accessed properly when performing queries.

1. In the **Outrigger Profiles** form, create a profile for the database that has these specifications: 

   **Note:** This step is not necessary for a SQL Server database hosted on the same server as the Mongoose database, or for a SQL Server database hosted on a linked server.

   Profile Name

   (Required) Provide a name for the outrigger (external) database.

   Database Type

   (Required) Select the type of outrigger database to connect to.

   Server

   (Required for most, but not all database types) Specify the name of the server on which the outrigger database exists.

   Data Source

   - If you selected **DB2** for the **Database Type**, specify the schema name.
   - If you selected **Oracle** for the **Database Type**, with the **Direct** option set to **False**, specify the Oracle service name as defined in the `tnsnames`.ora file.
   - If you selected **Oracle** for the **Database Type**, with the **Direct** option set to **True**, specify the Oracle server's IP address or DNS name. For additional options, see the notes at the end of this topic.
   - If you selected **Postgres**, **Progress**, **Redshift**, or **SQL Server** for the **Database Type**, specify the database name.

   Query Timeout

   (Optional) Specify the amount of time, in seconds, that your application is to wait for responses to a query from the outrigger database. If you leave this field blank, the query does not time out.

   User/Password

   (Required) Provide the login credentials to be used to access the outrigger database.
2. Optionally, to test the connection to the outrigger database, click **Test Connection**.
3. In the **IDO Linked Databases** form, create a new linked database record with these values: 

   Link Database

   Specify the name that is to identify the database in Mongoose. This is an internal designation only and need not be the same as the actual database name.

   Profile Name

   Specify the profile created in Step 1\.

   For a SQL Server database hosted on the same server as the Mongoose database, or for a SQL Server database hosted on a linked server, leave this field blank.

   Database Type

   This field defaults to the database type selected in Step 1, or, if the **Profile Name** is blank, **SQL Server**.

   Database Name

   For a SQL Server database hosted on the same server as the Mongoose database, specify the name of the database to which you want to link.

   For a SQL Server database hosted on a linked server, you must also provide the name of the server using this format: `databaseServer`.`databaseName`.

   Optimistic Lock Column Name

   Optionally, specify the name of a column for optimistic locking that is present in some or all tables in the non-Mongoose database. If no specific column is designated on the **IDO Linked Tables** form, this value is used as the default optimistic lock setting.
4. In the **Tables** grid, specify or select an existing table name in the external database. 

   Optionally, rename the **View Name** to avoid conflict with any tables or views in your Mongoose application or with other external tables being linked.
5. To enable the buttons on the form, save the table record.
6. Select the table and click **Columns**. 

   This opens the **IDO Linked Tables** form, with an empty **Columns** grid.
7. To connect to the database and create the default column information for the external table, click **Repopulate**. 

   The results can be adjusted by following these steps:

   1. Verify that the columns listed in the **Column Name** column match those of the external table.
   2. Optionally, rename the **View Column Names** as you want them to be shown in the **IDO Wizard** form.
   3. Verify that the primary keys for the external table are correct, as specified in the **Keys** column. Add or modify the choices for keys as necessary. 

      **Note:** Keys are not initialized for Redshift databases, so you must specify them manually.
   4. Optionally, select the column to use for optimistic locking in the external table. 

      When the conditions stated here exist, Mongoose designates the NODATE literal string for the **RecordDate** value, and thus no optimistic locking is performed:
      - No **RecordDate** column exists in the external table.
      - The column specified in the **Optimistic Lock Column Name** field of the **IDO Linked Databases** form does not exist in the external table.
      - No column is designated for optimistic locking on the **IDO Linked Tables** form.
8. To create a new view in the Mongoose database that defines the necessary columns and data types, click **Create View**. 

   The created view includes the columns from the external table, along with these columns and values:
   - **RecordDate**: Used for optimistic locking
   - **RowPointer**: Required to be a value that is unique for the entire table
9. Use the **IDO Wizard** form to create an IDO whose **Primary Base Table** is the **View Name** that is created. If applicable, the profile name is automatically populated.
10. Use the **Advanced IDO Attributes** form to ensure that the proper primary keys are selected in the correct order.
11. Save your work.

Notes about the process:

- The profile that is stored with an IDO definition is used to make an Application Database object within the IDO layer for read and write operations on the table, as well as for method calls to that database.
- As an alternative to building an IDO through the wizard, which allows basic read-write functionality to the external database, you can use **IDORuntime.Context.CreateOutriggerApplicationDB** in a custom program to provide direct access to the outrigger database.

  For a code sample that uses this assembly, see [Example: Custom Code to Communicate with an Outrigger Database](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147699383.html).
- For DB2 databases, a third-party driver package must be installed and configured. Contact Support for details.
- For Oracle and Progress databases, a license to a third-party driver package must be purchased. Contact Support for details.
- There are two modes for connecting to Oracle databases:
  - If the application server is the Oracle server or Oracle Client software is installed on the Application Server, in the **Options grid**, specify an option of **Direct** with a value of **False**; and in the **Data Source** field, specify the Oracle service name (SID).
  - Otherwise, in the **Options grid**, add an option of **Direct** with a value of **True**; and in the **Data Source** field, specify the Oracle server's IP address or DNS name. Finally, add an additional option of **SID** with a value of the Oracle service name on the Oracle server. You can also add an option of **Port** with the port number to connect to. The default value is **1521**. In this mode, you can perform write operations on a linked table in an Oracle database only through a configuration where the **Use Distributed Transactions (DTC)** option is cleared.
- You cannot use asynchronous event handlers when communicating with external databases.
- You cannot use the external database and tables for any event action where the workflow must be suspended.
- You cannot use User-Defined Fields (UDFs) when communicating with external databases.
- All external tables referenced in an IDO must exist in the same database.
- RowPointer and RecordDate properties are used by Mongoose but do not exist in external tables; so those IDO properties are derived, instead of pointing to base table columns.
- A called Oracle IDO method must be a function with a return type of **Integer**.
- Due to driver limitations, these data-types are not supported for linked tables in a Progress database: LVARBINARY, BLOB, LVARCHAR, CLOB, BINARY, VARBINARY, RECID, TINYINT, BIGINT.
- For Postgres databases, the BIT data-type is not supported, because IDO Properties have no equivalent data-type.
- Due to security requirements, you can perform read and write operations on a linked table in a DB2, Oracle, Postgres, or Progress database only through a configuration, where the **IDO Extension Classes Run In Partial Trust** option is cleared.
- Due to driver limitations, you can perform write operations on a linked table in a DB2 or Progress database only through a configuration, where the **Use Distributed Transactions (DTC)** option is cleared.

## Example: Custom code to communicate with an outrigger database

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147699383.html

This code sample uses a custom method, **IDORuntime.Context.CreateOutriggerApplicationDB** to provide direct access to an outrigger database. The database must first be linked to your Mongoose application as described in [Including data from an external database into a Mongoose-based application](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147699212.html).

```

      public int IdoLinkOtherDbColPopulateSp( string linkedDatabase, string tableName, string optimisticColumnName, byte databaseType, string profileName, string infobar )
      {
         int result = 0;
         if ( databaseType == 1 ) // SQL Server
         {
            if ( !DoSqlServerColumnsSp( linkedDatabase, tableName, infobar ) )
               return 16;
            else
               return 0;
         }
         
         if (!DeletePreviousColumns( linkedDatabase, tableName, infobar ) )
            return 16;
         using ( ApplicationDB db = IDORuntime.Context.CreateOutriggerApplicationDB( profileName ) )
         {
            IDbCommand cmd = db.Connection.CreateCommand();
            IDbDataParameter parm;
            
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = @"
SELECT
  cols.COLUMN_NAME  
 , cols.COLUMN_NAME As ViewColumnName
 , CASE WHEN DATA_TYPE IN ('VARCHAR', 'NVARCHAR', 'VARCHAR2', 'NVARCHAR2') THEN 1 ELSE 0 END AS IsCharacterColumn
 , CASE WHEN xx.TABLE_NAME IS NULL THEN 0 ELSE 1 END AS IsKeyColumn
, cols.DATA_TYPE
, CASE WHEN cols.DATA_PRECISION IS NULL THEN cols.DATA_LENGTH ELSE DATA_PRECISION END
, cols.DATA_SCALE
FROM user_tab_cols cols
LEFT OUTER JOIN (
select ucc.table_name, ucc.column_name
from user_constraints uc
inner join user_cons_columns ucc on
  ucc.table_name = uc.table_name
and ucc.constraint_name = uc.constraint_name
and uc.constraint_type = 'P'
 ) xx ON
xx.TABLE_NAME = cols.TABLE_NAME
AND xx.COLUMN_NAME = cols.COLUMN_NAME
WHERE cols.TABLE_NAME = :ptable
";
            parm = cmd.CreateParameter();
            parm.ParameterName = "ptable";
            parm.Value = tableName.ToUpper();
            cmd.Parameters.Add( parm );
            cmd.CommandType = CommandType.Text;
            cmd.Connection = db.Connection;
            IDataReader colReader = cmd.ExecuteReader();
            while (colReader.Read() )
            {
               string colName = colReader.GetString(0);
               string viewColName = colReader.GetString(1);
               byte isCharacter = colReader.GetByte(2);
               byte isKey = colReader.GetByte(3);
               byte isOptimisticLock = 0;
               string propertyDataType = colReader.GetString(4);
               int propertyLength = colReader.GetInt32(5);
               int? propertyScale = colReader.GetInt32(6);
               if ( colReader.IsDBNull(6) )
                  propertyScale = null;
               if ( optimisticColumnName == colName )
                  isOptimisticLock = 1;
               if (!InsertOneColumn( linkedDatabase, tableName, colName, viewColName, isCharacter, isKey, isOptimisticLock, propertyDataType, propertyLength, propertyScale, infobar ) )
               {
                  break;
               }
            }
         }
         return result;
      }
```
