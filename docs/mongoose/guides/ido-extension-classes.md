# IDO extension classes and code samples

> Guide: Infor Mongoose IDO Development Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/rgo1498807097869.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/rgo1498807097869.html, https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/fct1498807111784.html, https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/rjl1498807123328.html

## IDO extension classes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/rgo1498807097869.html

[NOT RETRIEVED: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/rgo1498807097869.html — Article body is empty]

## About IDO extension classes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/xkc1498807110552.html

An IDO extension class is a .NET class that allows developers to extend the functionality of an existing IDO by adding methods and event handlers. IDO extension classes are compiled into a .NET class library assembly and stored in the IDO metadata database. The IDO runtime service loads these assemblies on demand and calls methods and event handlers in the extension classes in response to IDO requests.

An extension class is short-lived; it is created at the start of a request and disposed of immediately when the response is completed. Therefore, no state should be stored in an extension class.

Any public class in an IDO extension class assembly can be identified as the extension class for an IDO in the IDO metadata database.

If the entry point IDO method is marked as **Transactional**, then all IDO calls and direct database calls are wrapped in the same transaction within the context of that method. UpdateCollection and LoadCollection requests are always executed in a transaction, with the exception that a caller can specify on UpdateCollection that each row be executed in its own transaction. There is no way to submit multiple IDO requests from outside the IDO runtime and combine those into a single transaction, but within a single request the developer has full control over the transaction scope.

IDO extension class assemblies are .NET Framework class libraries that are created using any of the .NET languages.

## Creating an IDO extension class project

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/tum1542959505467.html

1. Open Visual Studio.
2. From the **File** menu, select **New** \> **Project**.
3. In the **New Project** dialog box, perform these steps:
   1. Select the desired language.
   2. On the **Templates** \> **Visual Basic** tab, select the AssemblyInfo.cs template.
   3. Specify a name and location for your project.
   4. Click **OK**.

   A **Class1.cs** file is created.
4. In the **Solution Explorer** window, right-click the file and select **Remove**.
5. From the **Project** menu, select **Add Reference**.
6. In the **Reference Manager** dialog box, perform these steps: 
   1. Click the **Browse** tab and navigate to your application's installation directory.
   2. Add references to these assemblies:

      - IDOCore.dll
      - IDOBase.dll
      - IDOProtocol.dll
      - MGShared.dll
      - WSEnums.dll
   3. Click **OK**.
7. From the **Project** menu, select **Add New Item**.
8. In the **Add New Item** dialog box, perform these steps: 
   1. In the **Installed** \> **Common Items** tab, select **Code File**.
   2. In the **Name** field, specify AssemblyInfo.cs.
   3. Click **Add**.
9. Open the new AssemblyInfo.cs source file and add this assembly attribute: 

   ```
   [Assembly: Mongoose.IDO.IDOExtensionClassAssembly("assembly-name")] 
   ```

Substitute a meaningful name for the `assembly-name` parameter. You can specify any name, but typically, the name of the IDO project associated with the classes in this assembly is used. When this class library is imported to the **IDO Extension Class Assemblies** form, the name you specify here becomes the name of the assembly.

**Caution:** If you add a reference to another assembly from your IDO extension class assembly, the referenced assembly must also be imported as another custom assembly. When .NET tries to locate the referenced assembly, the IDO runtime service searches the database for a matching assembly and loads it on demand.

## Importing an IDO extension class assembly

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/ksp1542704447136.html

1. Open the **IDO Extension Class Assemblies** form and execute Filter-In-Place.
2. Initiate a new assembly record.
3. In the **Assembly Name** field, specify the name of the assembly.
4. Click **Import Assembly**.
5. Use the **Import Binary Data From File** dialog box to specify the directory path and filename of the assembly. 

   **Note:** The assembly must be in DLL format.
6. Click **Save**. 

   **Note:** After the import, the **Assembly File Version** field automatically displays the version information extracted from the DLL.
7. Optionally, test the assembly.
8. Click **Check In**.

To link the custom assembly to the IDO, use the **IDOs** form. To link the IDO to the methods in the extension class, use the **IDO Methods** form.

## Creating, extending, and replacing an IDO extension class assembly

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/dfz1542704837029.html

1. Open the **IDO Extension Class Assemblies** form and execute Filter-In-Place.
2. Initiate a new record.
3. Provide this information: 

   Assembly Name

   Provide a name for the new assembly.

   Assembly Type

   Select **Build From Source**.

   Language

   Select **C#** or **VB.NET**.

   References

   Specify a comma-delimited list of assembly references that are required to build the assembly.

   **Note:** This information can be either the names of other IDO extension class assemblies or the .NET assembly file name in DLL format. This field defaults to the minimum set of required assembly references.
4. Click **Save**.
5. Click **Source Code**.
6. On the **IDO Extension Class Source Code** form, perform these steps: 
   1. Initiate a new record.
   2. Provide a name for the assembly file to be generated. 

      **Note:** When you provide the name, the application, the source code Edit field defaults to a skeleton IDO extension class. This information is only a suggested value and can be modified or replaced as desired.
   3. Click **Code Editor**. 

      **Note:** This form is an enhanced editor that includes color syntax highlighting and automatic indenting.
   4. On the **Code Editor** form, modify the generated source code as needed. 

      **Note:** The source code can be either **C#** or **VB.NET** depending on the **Language** that you defined on the **IDO Extension Class Assemblies** form.
   5. Click **OK**.
   6. Save your work and close the **IDO Extension Class Source Code** form.
7. On the **IDO Extension Class Assemblies** form, click **Build Assembly**. 

   When the system is finished building the assembly, a success message displays.
8. On both the **IDO Extension Class Source Code** form and the **IDO Extension Class Assemblies** form, click **Check In**.

To link the custom assembly to the IDO, use the **IDOs** form. To link the IDO to the methods in the extension class, use the **IDO Methods** form.

## Implementing an IDO extension class

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/fct1498807111784.html

[NOT RETRIEVED: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/fct1498807111784.html — Article body is empty]

## Mongoose.IDO.IIDOExtensionClass interface

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/yjb1498807112174.html

In order for an extension class to access the calling user's context (session information, databases, and so forth), the extension class must implement the IIDOExtensionClass interface in the Mongoose.IDO namespace.

```
public interface IIDOExtensionClass 
{ 
      void SetContext(Mongoose.IDO.IIDOExtensionClassContext context); 
} 
```

## Mongoose.IDO.IIDOExtensionClassContext interface

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/kaj1498807112549.html

The SetContext method is called once when the extension class is created, passing a reference to the IIDOExtensionClassContext interface for accessing the calling user's context.

```
public interface IIDOExtensionClassContext 
{ 
   Mongoose.IDO.IVirtualIDO IDO { get; } 
   Mongoose.IDO.IIDOCommandHelper Commands { get; } 
} 
```

The framework provides a class named Mongoose.IDO.ExtensionClass that is intended to be used as the base class for most typical IDO extension classes. This class provides a default implementation of the IIDOExtensionClass interface and provides a number of methods to facilitate calling methods, loading and updating collections, and other common tasks, which are described elsewhere.

## Declaration of an IDO extension class for an IDO

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/xsb1498807112954.html

When declaring an IDO extension class, you can add the optional **IDOExtensionClass** attribute, in order to facilitate adding the necessary IDO metadata to associate an extension class with an IDO. This sample code shows how to associate an extension class with the SLJobMats IDO.

```
[IDOExtensionClass("SLJobtMats")] 
public class SLJobtMats : IDOExtensionClass 
{ 
   // ...Implementation goes here... 
} 
```

It is generally a good idea to import some common framework namespaces to make your code less verbose and more clear, and to enable the **Explicit** and **Strict** VB compiler options.

## IDO extension class starter template

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/usi1498807113344.html

This sample code can be used as a template for creating new IDO extension classes.

```
using Mongoose.IDO; 
using Mongoose.IDO.Protocol; 
using Mongoose.IDO.DataAccess; 
using Mongoose.Core.Common; 

[IDOExtensionClass("class-name")] 
public class class-name : IDOExtensionClass 
{ 
   // optionally override the SetContext method 
   // public override void SetContext( 
   //  IIDOExtensionClassContext context ) 
   // { 
   // call base class implementation 
   // base.SetContext(context); 
   // 
   // Add event handlers here, for example:
   // context.IDO.PostLoadCollection += 
   // new IDOEventHandler( IDO_PostLoadCollection ); 
   // } 
   // ...Implementation goes here... 
} 
```

## Adding methods

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/zvr1498807113719.html

To call a method on an IDO extension class, the method must be declared as public and it must also be defined in the IDO metadata as a hand-coded method.

A hand-coded method can be either a standard method, which is a **Function** with zero or more input/output parameters and returns an integer; or a custom load method, which is a **Function** with zero or more parameters and returns an instance of either an IDataReader or a DataTable. For information about these, see the .NET Framework documentation.

When implementing a hand-coded method that is callable through the IDO runtime, you could add the optional **IDOMethod** attribute, which can be used in the future to facilitate adding the necessary IDO metadata to make the method accessible.

### Sample standard method call

For example, the declaration of a standard method might look like this Function declaration:

```
[IDOMethod(MethodFlags.None, "Infobar")] 
public int DoWork(string SessionID, long TransNum, ref string Infobar) 
{ 
   // ...Implementation goes here... 
} 
```

## IDOMethod parameters

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/xvk1498807114093.html

The IDOMethod attribute takes two optional parameters: `flags` and `messageParm`.

### Flags

The `flags` parameter is used for one or more of the values defined by the **MethodFlags** enumeration. This table shows the **MethodFlags** values:

| MethodFlags value | Description |
| --- | --- |
| None | Standard method call. |
| CustomLoad | Custom load method. |
| RequiresTransaction | Method runs in the context of a transaction. |

### MessageParm

The `messageParm` parameter must be a string. It is used for the name of the parameter that is used to return messages to the caller (Infobar). The parameter that is identified must be declared as a **String** type and passed by reference.

Remember that these attributes are not used at runtime. They might be used in the future to facilitate adding and synchronizing the IDO metadata for an extension class and its methods when an assembly is imported.

## Including filters in custom load methods to load collections

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/xao1498807114467.html

When a custom load method is used to load a collection, the system does not automatically apply the filters defined for an IDO. This means that you must explicitly implement any filtering within the custom method. Before you implement a custom load method, you should be very familiar with the IDO definition.

If the method defines a specifically-named parameter, the system passes the currently active filter to the method. For methods that are hand-coded in .NET, this parameter must be named **IdoFilter** and it must be of type **String**. For stored procedure methods, this parameter must be named **@IdoFilter** and it must be of type **nvarchar(max)**. This must be the last parameter listed for the method.

However, when you specify method parameters in the IDO metadata—that is, by using the development forms **IDOs**, **IDO Methods**, and **IDO Method Parameters**—or in Design mode, you must not provide this filter parameter. It is an implicit parameter that the system satisfies if it exists; however, if the parameter does not exist, the method still works. There is no logical value that can be specified in the IDO metadata or in Design Mode for the filter parameter, since it varies, depending on who is logged in, which groups they are members of, and so on.

The filter that is passed is a fully-parsed, valid SQL filter. The filter can be appended with a conjunction to the WHERE clause of a query, or the filter by itself can be the entire clause for the query. However, since the filter can refer to any table referenced in the IDO definition, you must make sure that any tables referenced in the filter are present in the query.

## Getting more rows in a custom load method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/brg1498807114889.html

To include the Get More Rows functionality in a custom load method, you must create a bookmarking algorithm. The framework provides and receives relevant information for bookmarking, using these variables:

- `EnableBookmark`: This is set to either **True** or **False**, depending on whether the load request wants to apply bunching. If the variable is set to **False**, the custom load method is expected to ignore bunching.
- `Bookmark`: This is the bookmark value. It is blank for an initial load type, and contains values for bookmarks (which the algorithm must create) for subsequent load calls. A bookmark must uniquely identify a set of rows, referred to as a **bunch**.
- `LoadType`: This is set to **First**, **Last**, **Next**, or **Prev**. **First** and **Last** are initial load types: When a collection initially loads, a bookmark is not needed and the framework expects either the first or the last bunch to be returned. **Next** and **Prev** are used on subsequent loads with a bookmark, and the framework expects the bunch either after or before the bunch identified by the bookmark. For the **Last** and **Prev** load types (essentially, browsing backward through the collection), the returned rows are expected to be sorted in reverse order.
- `RecordCap`: This is the maximum number of rows the framework expects to be returned for a single bunch.

  **Note:**  The method is expected to return one extra row (RecordCap\+1 rows, total), if it is available. The framework uses this information to determine whether there are more rows available to be queried for the next bunch. The bookmark is still expected to identify uniquely the set of rows that will be returned to the user. The extra row is not considered part of the set.

After the custom load method constructs the set of rows to return, it is expected that it will update the `Bookmark` variable with a unique value that represents the set of rows it is returning.

Custom load methods that are implemented as stored procedures receive these variables through the use of process variables (see [Process variables](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/ngn1498807115279.html)). Before it calls into a custom load method, the framework creates these variables from the load request that generated the call. Upon return, the framework checks the process variable called `Bookmark` for the new bookmark. Custom load methods that are implemented as hand-coded methods have access to the load-request structure, which contains these variables as properties of the request.

### Bookmarking algorithms

Although you must create the bookmarking algorithm for your custom load method, we provide some examples:

- **Example 1:** If you have a collection with a unique, consecutive integer row number property, your bookmark could be a single number, and the custom load method sorts the collection by that property and returns the top RecordCap\+1 rows for a load type of **First**, setting the bookmark to the number of the second-to-last row. Loads of type **Next** return RecordCap\+1 rows, where the RowNumber value is greater than bookmark. The method performs similarly for load types **Last** and **Prev**, except that it sorts in reverse order and the RowNumber value is less than bookmark.

  The algorithm must have special cases for an empty result set, and for a single row being returned.
- **Example 2:** The algorithm the framework uses for standard loads is more complicated, since it must work with any possible collection, combination of properties being loaded, and so on. The bookmark is an XML fragment with this schema:

  ```
  <B>
     <P><p>ColumnName1</p><p>ColumnName2</p>…</P>
     <D><f>DescendingFlag1(true or false)</f><f>Flag2</f>…</D>
     <F><v>FirstRowValue1</v><v>FirstRowValue2</v>…</F>
     <L><v>LastRowValue1</v><v>LastRowValue2</v>…
  </B>
  ```

  This XML fragment is combined with the `<RecordCap>` and `<LoadType>` elements in the request. The framework fills the bookmark with the data necessary to uniquely describe the set of rows that it just retrieved. It uses either the RowPointer column, or a set of columns that make up a unique key, together with a descending flag for each column, and the values of those columns in the first and last rows of the set.
- **Example 3:** This is a working example of a simple custom load method that supports forward-only batching. This is for an IDO that has these properties:
  - ID (int)
  - Last (string)
  - First (string)
  - Grade (int)

  **Note:** This example is for forward-only batching, not bidirectional batching.

  ```
        // 
        // Sample custom load method supporting forward-only bookmark navigation
        // 
        private static readonly (int id, string last, string first, int grade)[] STUDENTS = new [] 
        {
           (112, "Smith",   "Bob",   9),
           (123, "Jones",   "Tim",   12),
           (391, "Adams",   "John",  8),
           (407, "Stark",   "Tony",  12),
           (512, "Tell",    "Bill",  8),
           (663, "Parker",  "Peter", 9),
           (798, "Brooks",  "Mel",   12),
           (812, "Allen",   "Tim",   9),
           (162, "Bird",    "Larry", 9),
           (332, "Baggins", "Frodo", 12)
        };

        [IDOMethod( MethodFlags.CustomLoad )]
        public DataTable LoadStudentsByGrade()
        {
           var dt = new DataTable();
           var request = this.Context.Request as LoadCollectionRequestData;
           var recordCap = IDORuntime.DefaultRecordCap;
           var rows = default( IEnumerable<(int id, string last, string first, int grade)> );
           var bookmarkId = -1;

           dt.Columns.AddRange( new[] 
           {
              new DataColumn( "ID",      typeof(int) ),
              new DataColumn( "Last",    typeof(string) ),
              new DataColumn( "First",   typeof(string) ),
              new DataColumn( "Grade",   typeof(int) )
           } );

           if ( request.RecordCap != -1 )
              recordCap = request.RecordCap;

           rows = STUDENTS.OrderBy( s => s.grade )
                          .ThenBy( s => s.id );

           // uncapped queries are incompatible with bookmarks
           if ( (recordCap != 0) && request.EnableBookmark )
           {
              recordCap++;   // add one row to enable "More Rows"
              if ( request.LoadType == LoadCollectionType.Next )
              {
                 if ( int.TryParse( request.Bookmark, out int bookmark ) )
                    bookmarkId = bookmark;
              }
              else if ( request.LoadType != LoadCollectionType.First )
                 throw new Exception( "This method does not support bidirectional bookmarks" );

              if ( bookmarkId > 0 )
                 rows = rows.SkipWhile( s => s.id != bookmarkId );

              rows = rows.Take( recordCap );
           }

           foreach ( var student in rows )
              dt.Rows.Add( student.id, student.last, student.first, student.grade );

           if ( recordCap != 0 )
           {
              // set the bookmark for the next call if not finished
              if ( (recordCap != 0) && request.EnableBookmark && (dt.Rows.Count == recordCap) )
                 request.Bookmark = dt.Rows[dt.Rows.Count - 1][ "ID" ].ToString();
              else
                 request.Bookmark = int.MaxValue.ToString();
           }

           return dt;
        }
  ```

## IDO events

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/irn1498807115669.html

When an IDO is processing a LoadCollection or UpdateCollection request, it fires several events. An IDO extension class can add its own event handlers to these events to get control when these events are fired.

This table lists and describes the available events:

| Event | Description |
| --- | --- |
| PreLoadCollection | Fires when a LoadCollection request is received |
| PostLoadCollection | Fires after a LoadCollection request has been processed |
| PreUpdateCollection | Fires when an UpdateCollection request is received |
| PostUpdateCollection | Fires after an UpdateCollection request has been processed |
| PreItemInsert | Fires when an insert item request is received |
| PostItemInsert | Fires after an insert item request has been processed |
| PreItemUpdate | Fires when an update item request is received |
| PostItemUpdate | Fires after an update item request has been processed |
| PreItemDelete | Fires when a delete item request is received |
| PostItemDelete | Fires after a delete item request has been processed |
| PreInvokeMethod | Fires when an invoke IDO method request is received |
| PostInvokeMethod | Fires after an invoke IDO method request has been processed |
| Initialized | Fires after a create an IDO instance request has been processed |
| Disposing | Fires when a dispose an IDO instance request is received |

## Adding an IDO event handler

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/arm1498807116043.html

IDO event handler methods should be declared as private methods in your IDO extension class. These methods should use the same signature as this example:

```
private void HandlePreLoadCollection( object sender, IDOEventArgs args)
```

These IDO events are available on the IDO property of the IIDOExtensionClassContext interface. To add your handler to an IDO event, you must override the IDOExtensionClass.SetContext method in your IDO extension class and use the AddHandler keyword as shown in this example:

```
public override void SetContext(IIDOExtensionClassContext context) 
{ 
   // Call the base class implementation: 
   base.SetContext(context); 

   // Add event handlers here, for example: 
   this.Context.IDO.PreUpdateCollection += this.PreUpdateCollection; 
} 
```

When you create an extension class assembly from source, or you extend and replace one, you must not override SetContext. Instead, use attributes on the methods to add event handlers, as shown in this example:

```
[IDOAddEventHandler( IDOEvent.PostInvokeMethod )]
private void ExtPostInvokeMethod( object sender, IDOInvokeEventArgs args )
{
   if ( args.InvokeRequest.MethodName == "MyTestMethod" )
   {

   }
}
```

## Event handler parameters

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/jqe1498807116620.html

The first parameter on an IDO event handler method is the **sender** parameter, which is simply a reference to the IDO that initiated the event. This is equivalent to the **IIDOExtensionClassContext.IDO** property.

The second parameter is an instance of the IDOEventArgs class which allows you to access the original IDO request that initiated the event, and for the Post events, the IDO response also.

```
public class IDOEventArgs : EventArgs 
{ 
   public PayloadBase RequestPayload { get; } 
   public PayloadBase ResponsePayload; 
} 
```

This table describes the contents of the IDOEventArgs parameter for each IDO event:

| Event | RequestPayload property | ResponsePayload field |
| --- | --- | --- |
| PreLoadCollection | Contains an instance of the LoadCollectionRequestData class that the IDO is processing | Nothing |
| PostLoadCollection | Contains an instance of the LoadCollectionRequestData class that the IDO processed | Contains an instance of the LoadCollectionResponseData class that will be returned to the caller |
| PreUpdateCollection | Contains an instance of the UpdateCollectionRequestData class that the IDO is processing | Nothing |
| PostUpdateCollection | Contains an instance of the UpdateCollectionRequestData class that the IDO processed | Contains an instance of the UpdateCollectionResponseData class that will be returned to the caller |

An event handler method can access the IDO request and response payloads as shown in this example:

```
private void HandlePreLoadCollection(object sender, IDOEventArgs args) 
{
   // Get the original request: 
   LoadCollectionRequestData loadRequest; 

   loadRequest = (LoadCollectionRequestData)args.RequestPayload; 

// ...Additional logic based on loadRequest. 
} 

private void HandlePostLoadCollection(object sender, IDOEventArgs args) 
{
   // Get the original request: 
   LoadCollectionRequestData loadRequest; 
   LoadCollectionResponseData loadResponse; 

   loadRequest = (LoadCollectionRequestData)args.RequestPayload; 
   loadResponse = (LoadCollectionResponseData)args.ResponsePayload; 

   // ...Additional logic based on loadRequest or loadResponse. 
} 

private void HandlePreUpdateCollection(object sender, IDOEventArgs args) 
{ 

   // Get the original request: 
   UpdateCollectionRequestData updateRequest; 
   updateRequest = (UpdateCollectionRequestData)args.RequestPayload; 

   // ...Additional logic based on updateRequest. 
} 

private void HandlePostUpdateCollection(object sender, IDOEventArgs args) 
{ 

   // Get the original request: 
   UpdateCollectionRequestData updateRequest; 
   UpdateCollectionResponseData updateResponse; 

   updateRequest = (UpdateCollectionRequestData)args.RequestPayload; 
   updateResponse = (UpdateCollectionResponseData)args.ResponsePayload; 

   // ...Additional logic based on loadRequest or loadResponse. 
} 
```

## Special cases for UpdateCollection events

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/kcw1498807117010.html

There are special cases when an IDO UpdateCollection request might not process all items in the update. For example, this might happen when a caller is saving hierarchical data, which is represented as an UpdateCollection request with nested UpdateCollection child requests. The framework first processes only the deleted items in the child requests, then all items in the parent, followed by the inserted or updated items in the child requests. This example shows how an event handler can determine if the framework is processing inserted, update and/or deleted items.

```
private void HandlePostUpdateCollection(object sender, IDOEventArgs args) 
{ 

   // Get the original request: 
   UpdateCollectionRequestData updateRequest; 
   UpdateCollectionResponseData updateResponse; 
   IDOUpdateEventArgs updateArgs; 

   updateArgs = (IDOUpdateEventArgs)args; 
   updateRequest = (UpdateCollectionRequestData)args.RequestPayload; 
   updateResponse = (UpdateCollectionResponseData)args.ResponsePayload; 

   if ((updateArgs.ActionMask & UpdateAction.Delete) == UpdateAction.Delete) 
   { 
 // ...Only perform this logic if processing deleted items: 
   } 

   if ((updateArgs.ActionMask & UpdateAction.Insert) == UpdateAction.Insert) 
   { 
 // ...Only perform this logic if processing inserted items: 
   } 

   if ((updateArgs.ActionMask & UpdateAction.Update) == UpdateAction.Update) 
   { 
 // ...Only perform this logic if processing updated items: 
   } 
 // ...Additional logic based on loadRequest or loadResponse. 
} 
```

### Using the ActionMask property

In the example above, the IDOUpdateEventArgs class inherits from IDOEventArgs, but has one additional property: ActionMask. The ActionMask property is declared as an UpdateAction, which is an enum, as shown here.

```
public enum UpdateAction : ushort 
{ 
   None = (ushort)0x0000, 
   Insert = (ushort)0x0001, 
   Update = (ushort)0x0002, 
   Delete = (ushort)0x0004, 
   All = (ushort)0xffff 
} 
```

The ActionMask property is usually a combination of Insert, Update, and Delete (All), meaning the UpdateCollection that was just performed executed all types of actions. However, there are certain circumstances when this can be a subset of Insert, Update and Delete, which means only the items that match the mask were actually saved. There are times when the IDO runtime service must save items in a particular order (with nested updates), and it might first process only deleted items. Then, in another pass, it executes all inserts and updates.

ActionMask is valid for both PreUpdateCollection and PostUpdateCollection. The PreUpdateCollection parameters are the same as the PostUpdateCollection parameters, but the action indicates which items are about to be saved, rather than which items were just saved.

## Replacing standard IDO processing with event handlers

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/nfg1498807117369.html

By adding event handlers, not only can you perform additional logic when a particular event fires, but, in the case of PreUpdateCollection and PreLoadCollection, you can also completely replace the default framework implementation by constructing your own response and setting that in the IDOEventArgs.ResponsePayload field. This example shows how this is done for an UpdateCollection request:

```
private void HandlePreUpdateCollection(object sender, IDOEventArgs args) 
{ 
   // Get the original request: 
   UpdateCollectionRequestData updateRequest; 
   UpdateCollectionResponseData updateResponse; 
   updateRequest = (UpdateCollectionRequestData)args.RequestPayload; 
   updateResponse = new UpdateCollectionResponseData(updateRequest); 
   // Process items in the request, filling in the response... 
   // Override the standard processing, returning my 
   // custom response instead: 
   args.ResponsePayload = updateResponse; 
} 
```

## Generating application events

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/nca1498807117743.html

The ExtensionClassBase class provides a method, named FireApplicationEvent, that can be used to generate an application event.

```
protected bool FireApplicationEvent(string eventName, 
   bool sychronous, 
   bool transactional, 
   ref string result, 
   ref ApplicationEventParameter[] parameters) 
{ 
} 
```

### Properties

| Property | Description |
| --- | --- |
| eventName | The name of the event to generate |
| synchronous | Determines if the event handlers should be executed synchronously (**True**) or asynchronously (**False**) |
| transactional | Determines if the event handlers should be executed in a transaction If passed as **False** and one of the synchronous handlers fails, any database activity performed by prior handlers remains committed. |
| result | The value of the last RESULT( ) keyword executed on a Finish or Fail action on any handler |
| parameters | An array of named parameters passed to the event handlers |

### Example

```
using Mongoose.IDO; 
using Mongoose.IDO.Protocol; 
using Mongoose.IDO.DataAccess; 
using Mongoose.Core.Common; 

[IDOExtensionClass("MyIDO")] 
public class TestFiringEvent : IDOExtensionClass 
{ 
   [IDOMethod(MethodFlags.None, "Infobar")] 
   public void FireMyEvent(string Parm1, long Parm2, ref string Infobar) 
   { 
      ApplicationEventParameter[] ParmList = new ApplicationEventParameter[2]; 
      string result = null; 
      ParmList[0] = new ApplicationEventParameter(); 
      ParmList[0].Name = "PString"; 
      ParmList[0].Value = Parm1; 
      ParmList[1] = new ApplicationEventParameter(); 
      ParmList[1].Name = "PNumeric"; 
      ParmList[1].Value = Parm2.ToString(); 
      if (!FireApplicationEvent("MyEvent", true, true, out result, ref ParmList))
      { 
         Infobar = result; 
      } 
   } 
} 
```

## ApplicationDB class

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/zzz1498807099164.html

The ApplicationDB class, part of the Mongoose.IDO.DataAccess namespace, provides direct access to the application database, plus access to common framework features such as application messages and session variables. You can create a new instance of this class by calling the CreateApplicationDB method, which is implemented by the IDOExtensionClass class.

```
AppDB db = Mongoose.IDO.IDORuntime.Context.CreateApplicationDB(); 
```

## Application database connections

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/yoc1498807119600.html

In general, the best practice to access the database to execute queries, updates or stored procedure calls is to go through the Mongoose framework using IDO requests. However, there might be times when it is necessary or more efficient to access the database directly (for example, when building and executing dynamic SQL or iterating through records from an extremely large query result set). Direct database access is accomplished using the standard .NET framework database interfaces: IDbConnection and IDbCommand. For more information on these classes, see the Microsoft .NET Framework documentation.

### Opening a connection to the application database

The ApplicationDB.Connection property provides an opened SqlConnection instance pointing to the application database. By going through the ApplicationDB.Connection property, the framework is able to open and initialize the connection based on the calling user's session information.

### Executing database commands

The IDbCommand class is used to execute stored procedures, queries, updates, or any other T-SQL command. The IDbCommand must be created by using the ApplicationDB.CreateCommand( ) method, setting the CommandType and CommandText properties, and adding any parameters to the Parameters property. The parameters are added by using the ApplicationDB.AddCommandParameterWithValue or ApplicationDB.AddCommandParameter methods. When the command is executed, use the ApplicationDB.ExecuteScalar, ApplicationDB.ExecuteNonQuery, or ApplicationDB.ExecuteReader methods. Using any of these three methods allows you to leverage the framework infrastructure for executing SQL commands including logging and exception-message translation.

## Application messages

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/rhq1498807121831.html

Access to translatable strings and messages stored in the application database message tables is implemented by the ApplicationDB class. The strings and messages that are returned are queried and constructed according to the calling session's regional settings. Access is provided through the IMessageProvider interface and makes use of application database messaging stored procedures such as MsgAppSp.

These methods are published by the IMessageProvider interface:

- Method · Description
- **Method:** 

  ```
  public string GetMessage(
     string msgID) 
  ```

   · **Description:** Gets a string or message by message ID
- **Method:** 

  ```
  public string AppendMessage(
     string message,
     string msgID)
  ```

   · **Description:** Appends a string or message by message ID
- **Method:** 

  ```
  public string AppendMessage(
     string message,
     string msgID,
    params object[] args)
  ```

   · **Description:** Appends a string or message by message ID with substitution parameters
- **Method:** 

  ```
  public string GetErrorMessage(
     string objectName,
     AppMessageType messageType) 
  ```

   · **Description:** Gets a constraint error message by object name and type
- **Method:** 

  ```
  public string GetErrorMessage(
     string objectName,
     AppMessageType messageType,
     params object[] args)
  ```

   · **Description:** Gets a constraint error message by object name and type with substitution parameters

### Message lookup using the ApplicationDB class

This example shows how to use the ApplicationDB class to retrieve messages:

```
IMessageProvider messageProvider = null;
using (ApplicationDB appDB = this.CreateApplicationDB()) 
{ 
   messageProvider = appDB.GetMessageProvider(); 
   Infobar = messageProvider.AppendMessage(Infobar, "I=CmdMustPerform", 
   "@:PostPendingMaterialTransactions"); 
} 
```

If you are writing code in an extension class method for a class that derives from IDOExtensionClass, you can simply call the IDOExtensionClass.GetMessageProvider method as a shortcut to getting a reference to the IMessageProvider interface, as shown in this example:

```
IMessageProvider messageProvider = null; 
messageProvider = this.GetMessageProvider(); 
```

## Session variables

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/xgu1498807122205.html

The AppDB class publishes these methods for manipulating session variables for the caller's session:

- Method · Description
- **Method:** 

  ```
  public void SetSessionVariable(
     string name,
     string varValue)
  ```

   · **Description:** Sets the value of a session variable
- **Method:** 

  ```
  public string GetSessionVariable(
     string name)
  ```

   · **Description:** Gets the value of a session variable
- **Method:** 

  ```
  public string GetSessionVariable(
     string name,
     string defaultValue)
  ```

   · **Description:** Gets the value of a session variable, returning the specified default value if it does not exist
- **Method:** 

  ```
  public string GetSessionVariable(
     string name,
     string defaultValue,
     bool delete)
  ```

   · **Description:** Gets the value of a session variable, returning the specified default value if it does not exist, and deleting it if it does exist
- **Method:** 

  ```
  public void 
  DeleteSessionVariable(
     string name)
  ```

   · **Description:** Deletes a session variable

## Process variables

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/ngn1498807115279.html

Process variables are similar to session variables, except that the scope is tied to a single database connection. This is unlike sessions, which span any number of database connections. A process variable declared before one method call could be in a different scope than a later method call which was run on a different database connection.

- Method · Description
- **Method:** 

  ```
  public void SetProcessVariable(
     string name,
    string varValue) 
  ```

   · **Description:** Creates or updates a process variable in the database
- **Method:** 

  ```
  public void SetProcessVariable(
     string name,
     string varValue,
     bool ignoreError) 
  ```

   · **Description:** Sets the value of a process variable
- **Method:** 

  ```
  public string GetProcessVariable(
     string name) 
  ```

   · **Description:** Gets the value of a process variable
- **Method:** 

  ```
  public string GetProcessVariable( 
     string name,
     string defaultValue)
  ```

   · **Description:** Gets the value of a process variable, using the default value if a value does not exist
- **Method:** 

  ```
  public string GetProcessVariable(
     string name,
     string defaultValue,
     bool deleteVariable)
  ```

   · **Description:** Gets the value of a process variable, using the default value if a value does not exist; deletes the process variable after retrieving the value
- **Method:** 

  ```
  public void 
  DeleteProcessVariable(
     string name)
  ```

   · **Description:** Deletes the process variable

## Using ApplicationDB in an extension class method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/cys1498807122595.html

This example shows how to use ApplicationDB in an extension class:

```
public int MyMethod() 
{ 
   using (ApplicationDB appDB = this.CreateApplicationDB()) 
   { 
      // Use appDB here... 
   } 
} 
```

**Note:** The ApplicationDB instance is created as part of the Using…End Using block. This ensures that the ApplicationDB instance is disposed of and any resources it is holding are released as soon as the instance goes out of scope. For more information on the Using statement, see the .NET Framework documentation.

## Using remote IDO method calls

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/eeu1632772296275.html

The **RemoteMethod** static class under the **Mongoose.IDO** namespace encapsulates the methods and APIs that can be used within an extension class to remotely call IDO methods and retrieve values from one site to another. These calls can consist either of extension class code or stored procedures.

The context used for remote method calls depends on the current session, whether the current site uses Microsoft Distributed Transaction Coordinator (MSDTC) or not.

If MSDTC is disabled, the current context reuses the existing connection profile and switches the context’s site pointing to the target site.

If MSDTC is enabled, the source site remotely calls a method to a target site that resides in a different database or server.

**Note:** In the source site’s **Configuration Manager**, the **Use Distributed Transactions (DTC)** check box must be selected.

For remote method calls that has been invoked to target sites that resides on a different database or server, the IDO method that uses a stored procedure must be present into the target site’s database or server. For IDO method that uses an IDO extension class code, the remote method call uses the source site’s IDO extension class code.

This section provides information about how to use remote IDO method calls.

## Invoke method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/okc1632772727818.html

To invoke an IDO method remotely, on a specified target site, use the **Invoke** method.

The **Invoke** remote IDO method is equivalent to the RemoteMethodCallSp stored procedure that is used to call another stored procedure at a remote site. However, instead of supporting only stored procedures, this method also supports IDO methods, using extension class code.

**Note:** This method does not return any values from the remote method being called. To do that, use the [InvokeTransactional method](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/xmc1632775598741.html) or the [LoadCollection method](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/snm1632776374967.html).

### Transaction or Delayed Replication?

This method can be used for both **Transactional** and **Delayed Replication** interval types, as defined in the replication rules.

For transactional replication, this method reuses the connection of the current site. By switching the context to point to the target site, it executes the code remotely at the target site. If the target site is the same as the source site, no alternate context is created, and the method executes directly to the current context of the source site.

**Note:** Support for Distributed Transaction Coordinator (DTC) is not included, because the transactional IDO method call is performed using the same connection as the current site and by switching the context of the current site into the target site.

For delayed replication, this method executes the RemoteMethodCallSp stored procedure, to stage the request data into the replication tables (for example, ReplicatedRows3\_mst and ShadowValues). Then the Replicator service checks the replication tables, retrieves any existing rows, and queues the request to the MSMQ. The Replication Queue Listener service then checks the Queue Server (MSMQ) to determine whether there are any queued messages to be transformed. If there are any such messages, the Replication Queue Listener service transforms the request and handles the IDO method call at the remote site.

### Parameters required by this method

To be used correctly, these are the parameters that this method requires:

| Parameter | Data Type | Description |
| --- | --- | --- |
| Target Site | System.String | This is the name of the site where the IDO method is to be called. |
| IDO Name | System.String | This is the name of the IDO on the target site where the remote IDO method resides. |
| Method Name | System.String | This is the name of the IDO method that is to be called at the target site. |
| Parameters | Correspond to the data types of the arguments to be passed, as expected by the remote method | This is a list of a variable number of arguments to be passed to the IDO method being called. |

This example invokes an IDO method at a remote site:

```
var targetSite = "CA";
var idoName = "Products";
var idoMethodName = "ProcessProductStatus";
var arg1 = 100001;
var arg2 = "Product1";

//Call the IDO method into the specified target site.
RemoteMethod.Invoke( targetSite, idoName, idoMethodName, arg1, arg2 );
```

## InvokeToAllTargetSites method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/pdd1632775047897.html

To invoke an IDO method at all the target sites defined in the replication rules, use the InvokeToAllTargetSites method.

This method is equivalent to the RemoteMethodForReplicationTargetsSp stored procedure. It follows the same behavior or process as the [Invoke method](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/okc1632772727818.html) method for both transactional and delayed replication.

### Parameters required by this method

To be used correctly, these are the parameters that this method requires:

| Parameter | Data Type | Description |
| --- | --- | --- |
| IDO Name | System.String | This is the name of the IDO on the target site where the remote IDO method resides. |
| Method Name | System.String | This is the name of the IDO method that is to be called at the target site. |
| Parameters | Correspond to the data types of the arguments to be passed, as expected by the remote method | This is a list of a variable number of arguments to be passed to the IDO method being called. |

This example invokes an IDO method at all remote sites:

```
var idoName = "ProductInfo";
var idoMethodName = "ProcessProductStatus";
var arg1 = -1;
var arg2 = "AllProducts";

//Call the IDO method to all target sites mapped with the current site.
RemoteMethod.InvokeToAllTargetSites( idoName, idoMethodName, arg1, arg2 );
```

## InvokeTransactional method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/xmc1632775598741.html

The **InvokeTransactional** method is the same as the [Invoke method](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/okc1632772727818.html), except that this method also returns values from the remote method that is being invoked.

The return value type of this method is **Mongoose.IDO.Protocol.InvokeResponseData**.

You can use this method only if the replication interval type is **Transactional**. If you attempt to use a **Delayed Replication** interval type, the system throws an error.

**Note:** This method follows the same process to invoke the remote method as an Invoke method that uses the Transactional replication interval type.

### Parameters required by this method

To be used correctly, these are the parameters that this method requires:

| Parameter | Data Type | Description |
| --- | --- | --- |
| Target Site | System.String | This is the name of the site where the IDO method is to be called. |
| IDO Name | System.String | This is the name of the IDO on the target site where the remote IDO method resides. |
| Method Name | System.String | This is the name of the IDO method that is to be called at the target site. |
| Parameters | Correspond to the data types of the arguments to be passed, as expected by the remote method | This is a list of a variable number of arguments to be passed to the IDO method being called. |

This example invokes a standard method at a remote site and returns response data that contains the value from the standard method:

```
var targetSite = "CA";
var idoName = "Products";
var idoMethodName = "GetProductStatus";
var arg1 = 100001;

//Call the standard method into the specified target site and
//return an InvokeResponseData which contains the return value of the standard method.
var returnValue = RemoteMethod.InvokeTransactional( targetSite, idoName, idoMethodName, arg1 );
```

## LoadCollection method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/snm1632776374967.html

To retrieve table data by invoking a custom load IDO method remotely, at a specific target site, use the **LoadCollection** method.

The return value type of this method is **Mongoose.IDO.Protocol.LoadCollectionResponseData**.

You can use this method only if the replication interval type is **Transactional**. If you attempt to use a **Delayed Replication** interval type, the system throws an error.

### Parameters required by this method

To be used correctly, these are the parameters that this method requires:

- Parameter · Data Type · Description
- **Parameter:** Target Site · **Data Type:** System.String · **Description:** This is the name of the site where the IDO method is to be called.
- **Parameter:** Request · **Data Type:** Mongoose.IDO.Protocol.LoadCollectionRequestData

  Properties required to be provided with value:

  - **PropertyList**: Mongoose.IDO.Protocol.PropertyList
  - **IDOName**: System.String
  - **CustomLoadMethod**:
    - **Name**: System.String
    - **Parameters**: Mongoose.IDO.Protocol.InvokeParameterList

  · **Description:** This is the request for the data to be returned from the custom load method being invoked for a specific IDO:
  - **PropertyList**: This list contains the properties that the custom load method is expected to use to designate the data being retrieved.
  - **IDOName**: This is the name of the IDO on the target site where the remote IDO method resides.
  - **CustomLoadMethod**: This is the name of the custom load method to be invoked, along with its parameters to be passed to the custom load method in an **InvokeParameterList**.

This example instantiates the classes required to retrieve data from a remote method LoadCollection request and then returns a data result set:

```
var targetSite = "CA";
var arg1 = "New_";

//Instantiate a LoadCollectionRequestData class;
var request = new LoadCollectionRequestData();

//Instantiate a PropertyList class and
//add the properties mapped with the result set of the custom load method.
var propList = new PropertyList();
propList.Add( "Name" );
propList.Add( "Description" );

//Specify the IDO name.
request.IDOName = "Products";

//Specify the PropertyList created
request.PropertyList = propList;

//Instantiate an InvokeParameterList class and
//add the arguments to be passed in the custom load method's parameters.
var paramList = new InvokeParameterList();
paramList.Add( arg1 );

//Provide the custom load method name and the InvokeParameterList.
request.CustomLoadMethod = new CustomLoadMethod() { Name = "GetProductInfo", Parameters = paramList };

//Call the custom load method into the specified target site and
//return a LoadCollectionResponseData which contains the result set returned by the custom load method.
var response = RemoteMethod.LoadCollection( targetSite, request );
```

## Disposing of IDO extension classes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/dxm1498807122954.html

If an IDO extension class implements the IDisposable interface, the Dispose method will be called by the IDO runtime when it is finished with each instance. The IDOExtensionClass class implements IDisposable and provides a virtual method which you can override in a derived class to get control when an instance is disposed.

```
protected virtual void Dispose( bool disposing );
```

For more information on the IDisposable interface, see the .NET Framework documentation.

## Translation/localization considerations

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/rjl1498807123328.html

[NOT RETRIEVED: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/rjl1498807123328.html — Article body is empty]

## Type conversions

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/jhx1498807123718.html

The built-in VB functions for data type conversions (CStr, CDate, CInt, etc.) are sensitive to the regional settings for the application or local machine, and therefore should not be used for type conversions in IDO extension class methods.

The Mongoose framework stores all property values internally as strings regardless of their data type. In the framework, this is also true for values stored in components, variables and IDO collections. The internal string format is culture independent so the built-in string conversion functions might not work, or might work inconsistently depending on the data or the current culture settings. The internal formatted string value is always available, but when accessing numeric, date or Guid property values programmatically, you should use the APIs provided by the framework that will convert the values from internal string format to the proper “strong” data types.

### IDORequest/Response Property Values (IDOProtocol classes)

Property values in IDO Request and Response classes are represented using the Mongoose.IDO.Protocol.IDOValueType class, or a class that inherits from this class.

This example accesses properties in a LoadCollectionResponseData instance:

```
LoadCollectionResponseData responseData; 
string name = null; 
DateTime recordDate; 
decimal cost; 
decimal newCost = Convert.ToDecimal(100.0); 
Guid id; 

// Perform LoadCollection: 
// Access internal value for strings: 
name = responseData[0, "Name"].Value; 

// Convert internal date to DateTime: 
recordDate = responseData[0, "RecordDate"].GetValue<DateTime>(); 

// Convert to Decimal, specifying a default if the property is null: 
cost = responseData[0, "Cost"].GetValue<decimal>(Convert.ToDecimal(0.0)); 
id = responseData[0, "ID"].GetValue<Guid>(); 

// Assign a new value to cost: 
responseData[0, "Cost"].SetValue(newCost); 
```

Note that the Name property simply gets the internal format, since string values do not need conversion. Also note that the GetValue call for the cost property specifies an optional default value to return if the property is null. You can also check for null values using the IsNull property.

The last line assigns a new value to the 'Cost' property. Passing in a decimal value to the SetValue method allows the framework to perform the conversion to the internal string format automatically.

## Testing extension class assemblies locally

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/nso1498807124108.html

To test a new version of an extension class assembly locally before checking it in, copy the new version of the extension class assembly to a folder named:

`appName`/idoxca/`configName `

where:

- `appName` is the application root folder, usually C:\\Program Files\\Infor\\`MongooseApp`.
- idoxca is a directory you must set up specifically for testing your application and configurations.
- `configName` is the name of the configuration being used to test the DLL.

The IDO runtime checks this location first when it loads an assembly.

This might also be useful to developers working on different classes in the same assembly, since only one developer can have an assembly checked out at a time.

You might need to discard the IDO metadata cache to force the IDO runtime to load the new version.

**Note:** This section applies only if you have a Visual Studio version other than the “Express” edition.

## Debugging extension classes

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/ubj1498807124483.html

IDO extension class code can be debugged using the Visual Studio debugger. To debug an extension class, you must:

1. Build a debug version of the extension class assembly.
2. Import the assembly (DLL) and the symbols (PDB) into the objects database using the **IDO Custom Assemblies** form (first checking out the assembly, if it has been checked in).
3. Run the IDO Runtime Development Server (IDORuntimeHost.exe) on your local machine.

   Alternatively, you can use the technique described in [Testing extension class assemblies locally](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/nso1498807124108.html).
4. Run a client that is configured to access the IDO Runtime Development Server on your local machine.
5. Open Visual Studio and select **Attach to Process** from the **Debug** menu.
6. Select IDORuntimeHost.exe in the list of available processes and click **Attach**.

   \[Image: image without caption or alt text\]

You should now be able to set breakpoints in the Visual Studio debugger and step through your code.

## Logging diagnostic messages

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/iit1498807124873.html

IDO extension class methods can send messages to the common logging facility IDO Runtime Development Server (IDORuntimeHost.exe) by calling one of the overloaded IDORuntime.LogUserMessage methods.

### Example

This sample sends a message to the log each time the ValidateCreditCard method is called:

- The first parameter is `messageSource` (String).

  This is the source identifier that displays in the log viewer.
- The second parameter is `messageType` (Mongose.IDO.UserDefinedMessageType).

  This is the type identifier that displays in the log viewer.
- The third parameter is `message` (String).

  This is the text of the message to be logged.

```
[IDOMethod(MethodFlags.None, "infobar")] 
public int ValidateCreditCard( 
   string cardNumber, 
   DateTime expires, 
   decimal amount, 
   string infobar) 
{ 

   int result = 0; 

   // Call a Web service to validate the CC info: 
   IDORuntime.LogUserMessage( 
      "MyExtensionClass", 
      UserDefinedMessageType.UserDefined0, 
      "ValidateCreditCard called by user " + IDORuntime.Context.UserName); 

   return result; 
} 
```

## Code samples

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/fut1498807118633.html

**Note:** These examples assume you are writing code in an IDO extension class that inherits from the Mongoose .IDO.ExtensionClassBase class.

## LoadCollection examples

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/cqk1498807125621.html

### Loading a collection and returning properties

This sample code demonstrates executing a LoadCollection for the SLTtJobtMatPosts IDO, bringing back the TransNum and TransSeq properties.

```
LoadCollectionResponseData loadResponse; 
loadResponse =     .Context.Commands.LoadCollection( 
   "SLTtJobtMatPosts", 
   "TransNum,TransSeq", 
   [filter], 
         .Empty, 0);
```

### Loading a collection for an IDO extension class

This sample demonstrates executing a LoadCollection for the IDO that the extension class belongs to (the current instance of the executing IDO).

```
LoadCollectionResponseData loadResponse; 
loadResponse =     .LoadCollection( 
   "TransNum, EmpNum, EmpEmpType, EmpDept, DerJobPWcDept ", 
   [filter], 
   "Posted, LowLevel DESC, Job, Suffix, CloseJob, TransNum", 0);
```

### Iterating through items and accessing property values

This sample demonstrates one way to iterate through items in a LoadCollectionResponseData instance returned from a LoadCollection request, and how to access property values.

```
       empNum = null; 

    (    index = 0; index <= responseData.Items.Count; index++) 
{ 
      (!responseData[index, "EmpNum"].IsNull) 
   { 
      empNum = responseData[index, "EmpNum"].Value; 
      
   } 
}
```

## UpdateCollection examples

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/eko1498807126027.html

### Inserting a new item

This sample demonstrates inserting a new item:

```
UpdateCollectionRequestData request = 
UpdateCollectionRequestData(); 
UpdateCollectionResponseData response; 
IDOUpdateItem customerItem =     IDOUpdateItem(); 

request.IDOName = "SLCustomers"; 
request.RefreshAfterUpdate =     ; 
customerItem.Action = UpdateAction.Insert; 
customerItem.Properties.Add("CoNum", "C000100"); 
customerItem.Properties.Add("Name", "New Company"); 
customerItem.Properties.Add("CreditHold", 1); 
request.Items.Add(customerItem); 
response =     .Context.Commands.UpdateCollection(request); 
```

### Updating an existing item

This sample demonstrates updating an existing item queried through a LoadCollection request:

```
LoadCollectionResponseData loadResponse; 
UpdateCollectionRequestData request; 
UpdateCollectionResponseData response; 
IDOUpdateItem customerItem =     IDOUpdateItem(); 

loadResponse =     .Context.Commands.LoadCollection("SLCustomers", "CoNum, Name, CreditHold", "CoNum = N'C000100'", "", 1); 

if (loadResponse.Items.Count == 1) 
{ 
   request.IDOName = "SLCustomers"; 
   request.RefreshAfterUpdate =     ; 
   
   customerItem.ItemID = loadResponse.Items[0].ItemID; 
   customerItem.Action = UpdateAction.Update; 
   customerItem.Properties.Add("CreditHold", 0); 
   request.Items.Add(customerItem); 
   response =     .Context.Commands.UpdateCollection(request); 
}
```

## Invoke example

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgidg/cle1498807126464.html

This sample demonstrates invoking the JobtClsLogErrorSp method on the SLJobtCls IDO, passing two parameters and retrieving the output value for the second parameter.

```
InvokeResponseData invokeResponse =     InvokeResponseData(); 
string message =     ; 
invokeResponse =     .Context.Commands.Invoke("SLJobtCls", "JobtClsLogErrorSp", transNum, IDONull.Value); 
message = invokeResponse.Parameters[1].Value; 
```
