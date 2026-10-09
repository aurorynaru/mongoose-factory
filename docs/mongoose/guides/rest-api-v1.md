# REST API Version 1 endpoints

> Guide: Infor Mongoose IDO Integration with External Applications Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/dxy1573182880771.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Version 1

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/dxy1573182880771.html

This section presents the original version of the Mongoose REST API.

### Base URL

All endpoints are accessible using HTTP(s) and are located at this URL:

http://\<`serverName`\>/IDORequestService/MGRESTService.svc

### API documentation

Swagger API documentation is available for the Mongoose REST API. This document fully describes each API operation and includes both required and optional parameters, Request Data examples, and so on. You can access this documentat using this endpoint:

http://\<`serverName`\>/IDORequestService/MGRESTService.svc/api-docs

The Swagger API documentation can be transformed into a rich user interface that you can use to browse through the API and try out some of the operations.

### Content type

You can use each endpoint to choose any of these content types for the request and response Request Data:

- XML
- JSON

No other content types are supported.

## Version 1 API endpoints

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/rfg1573184255109.html

This list shows the available Mongoose REST version 1 API endpoints:

- AddItem
  - AddItem with refresh
  - AddItems
  - AddItems with refresh
- DeleteItem
- DeleteItems
- DownloadDocumentObject
- DownloadFileStream
- FireAESEvent
- FireAESEventAdvanced
- GetConfigurations
- GetSecurityToken
- IDOInfo
- InvokeMethod
- LoadCollection
  - LoadCollection with properties
  - Advanced LoadCollection
  - Advanced LoadCollection with properties
- LoadPropertyValues
- UpdateItem
  - UpdateItem with refresh
  - UpdateItems
  - UpdateItems with refresh
- UploadDocumentObject
- UploadFileStream

All API calls, except GetConfigurations and GetSecurityToken APIs, are required to include an Authorization header that contain either a Mongoose security token or a valid OAuth 2.0 bearer token, depending on how the API is being called.

We recommend that you use the prototypes presented as examples when you create API calls. All these prototype examples use the C# code.

## AddItem

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/otw1576046207092.html

The AddItem API inserts a record into a specified IDO collection.

- POST · `/{responsetype}/{ido}/additem`
- **POST / /{responsetype}/{ido}/additem:** http://localhost/IDORequestService/MGRESTService.svc/xml/UserNames/additem

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<?xml version="1.0"?>
<IDOUpdateItem
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://www.infor.com">
  <Action>Insert</Action>
  <ItemId>PBT=[Usernames]</ItemId>
  <Properties>
    <UpdateProperty>
      <IsNull>false</IsNull>
      <Modified>true</Modified>
      <Name>Username</Name>
      <Value>jdelacruz</Value>
    </UpdateProperty>
    <UpdateProperty>
      <IsNull>false</IsNull>
      <Modified>true</Modified>
      <Name>UserDesc</Name>
      <Value>Juan Dela Cruz</Value>
    </UpdateProperty>
  </Properties>
</IDOUpdateItem>
```

### Request data in JSON format

```
{
	"Action": 1,
	"ItemId": "PBT=[Usernames]",
   "Properties": [
      {
         "IsNull": false,
         "Modified": true,
         "Name": "Username",
         "Value": "jdelacruz"
      },
      {
         "IsNull": false,
         "Modified": true,
         "Name": "UserDesc",
         "Value": "Juan Dela Cruz"
      }
   ]
}
```

### Response data in XML format

```
<MGRestUpdateResponse xmlns="http://schemas.datacontract.org/2004/07/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Insert successful.</Message>
  <MessageCode>200</MessageCode>
</MGRestUpdateResponse>
```

### Response data in JSON format

```
{
   "Message": "Insert successful.",
   "MessageCode": 200
}
```

### Example

This example code inserts **jdoe** as a new user.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/{ido}/additems";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   List<IDOUpdateItem> idoItems = new List<IDOUpdateItem>();
 
   UpdateProperty username = new UpdateProperty();
   username.Name = "Username";
   username.Value = "jdoe";
   username.IsNull = false;
   username.Modified = true;
 
   UpdateProperty userDesc = new UpdateProperty();
   userDesc.Name = "UserDesc";
   userDesc.Value = "John Doe";
   userDesc.IsNull = false;
   userDesc.Modified = true;
 
   IDOUpdateItem idoItem = new IDOUpdateItem();
   idoItem.Action = UpdateAction.Insert;
   idoItem.Properties = new[] { username, userDesc };
   idoItem.ItemId = "PBT=[UserNames]";
   idoItems.Add( idoItem );
 
   username = new UpdateProperty();
   username.Name = "Username";
   username.Value = "wsmith";
   username.IsNull = false;
   username.Modified = true;
 
   userDesc = new UpdateProperty();
   userDesc.Name = "UserDesc";
   userDesc.Value = "Will Smith";
   userDesc.IsNull = false;
   userDesc.Modified = true;
 
   idoItem = new IDOUpdateItem();
   idoItem.Action = UpdateAction.Insert;
   idoItem.Properties = new[] { username, userDesc };
   idoItem.ItemId = "PBT=[UserNames]";
   idoItems.Add( idoItem );
 
   // pass the List<IDOUpdateItem> as the request data
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItems.GetType() );
      serializer.WriteObject( writer, idoItems );
   }
 
   // send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## AddItem with refresh

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/tnk1576047653897.html

The AddItem with refresh API inserts a record into a specified IDO and then refreshes the collection.

- POST · `/{responsetype}/{ido}/additem/adv`
- **POST / /{responsetype}/{ido}/additem/adv:** http://localhost/IDORequestService/MGRESTService.svc/xml/UserNames/additem/adv?refresh\=ALL\&props\=Username,UserDesc

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection
- **Name:** refresh · **In:** Query · **Required?:** No · **Description:** Provides the instruction to refresh the collection

  Specify any of these values:

  - **ALL**: Refreshes the entire collection and all of its properties.
  - **PROPS**: Refreshes only the IDO properties.
- **Name:** props · **In:** Query · **Required?:** No · **Description:** A comma-delimited list of the properties to refresh

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<?xml version="1.0"?>
<IDOUpdateItem
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://www.infor.com">
  <Action>Insert</Action>
  <ItemId>PBT=[Usernames]</ItemId>
  <Properties>
    <UpdateProperty>
      <IsNull>false</IsNull>
      <Modified>true</Modified>
      <Name>Username</Name>
      <Value>jdelacruz</Value>
    </UpdateProperty>
    <UpdateProperty>
      <IsNull>false</IsNull>
      <Modified>true</Modified>
      <Name>UserDesc</Name>
      <Value>Juan Dela Cruz</Value>
    </UpdateProperty>
  </Properties>
</IDOUpdateItem>
```

### Request data in JSON format

```
{
	"Action": 1,
	"ItemId": "PBT=[Usernames]",
   "Properties": [
      {
         "IsNull": false,
         "Modified": true,
         "Name": "Username",
         "Value": "jdelacruz"
      },
      {
         "IsNull": false,
         "Modified": true,
         "Name": "UserDesc",
         "Value": "Juan Dela Cruz"
      }
   ]
}
```

### Response data in XML format

```
<MGRestUpdateResponse xmlns="http://schemas.datacontract.org/2004/07/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Insert successful.</Message>
  <MessageCode>200</MessageCode>
</MGRestUpdateResponse>
```

### Response data in JSON format

```
{
   "Message": "Insert successful.",
   "MessageCode": 200
}
```

### Example

This example code inserts **jdelacruz** as a new user and returns the updated property values.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string refresh = "ALL";
   string props = "Username,UserDesc";
   string requestUrl = $"http://localhost/IDORequestService/MGRESTService.svc/xml/{ido}/additem/adv?refresh={refresh}&props={props}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002…5vl903teP0jSDwkFs" );
 
   UpdateProperty username = new UpdateProperty
   {
      Name = "Username",
      Value = "jdelacruz",
      IsNull = false,
      Modified = true
   };
 
   UpdateProperty userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "Juan Dela Cruz",
      IsNull = false,
      Modified = true
   };
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Insert,
      Properties = new[] { username, userDesc },
      ItemId = "PBT=[UserNames]"
   };
 
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItem.GetType() );
      serializer.WriteObject( writer, idoItem );
   }
 
   // pass the IDOUpdateItem as the request data and send the insert request
   HttpResponseMessage response = client.PostAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## AddItems

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/vxx1576049008760.html

The AddItems API inserts multiple new records into a specified IDO collection.

- POST · `/{responsetype}/{ido}/additems`
- **POST / /{responsetype}/{ido}/additems:** http://localhost/IDORequestService/MGRESTService.svc/xml/UserNames/additems

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<?xml version="1.0"?>
<ArrayOfIDOUpdateItem xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.infor.com">
  <IDOUpdateItem>
    <Action>Insert</Action>
    <ItemId>PBT=[Usernames]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>Username</Name>
        <Value>jdoe</Value>
      </UpdateProperty>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>UserDesc</Name>
        <Value>John Doe </Value>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
  <IDOUpdateItem>
    <Action>Insert</Action>
    <ItemId>PBT=[Usernames]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>Username</Name>
        <Value>wsmith</Value>
      </UpdateProperty>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>UserDesc</Name>
        <Value>Will Smith</Value>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
</ArrayOfIDOUpdateItem>
```

### Request data in JSON format

```
 [
   {
      "Action": 1,
      "ItemId": "PBT=[Usernames]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": true,
            "Name": "Username",
            "Value": "jdoe"
         },
         {
            "IsNull": false,
            "Modified": true,
            "Name": "UserDesc",
            "Value": "John Doe"
         }
      ]
   },
   {
      "Action": 1,
      "ItemId": "PBT=[Usernames]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": true,
            "Name": "Username",
            "Value": "wsmith"
         },
         {
            "IsNull": false,
            "Modified": true,
            "Name": "UserDesc",
            "Value": "Will Smith "
         }
      ]
   }
]
```

### Response data in XML format

```
<MGRestUpdateResponse xmlns="http://schemas.datacontract.org/2004/07/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Insert successful.</Message>
  <MessageCode>200</MessageCode>
</MGRestUpdateResponse>
```

### Response data in JSON format

```
{
   "Message": "Insert successful.",
   "MessageCode": 200
}
```

### Example

This example code inserts users **jdoe** and **wsmith** as new users.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string requestUrl = $"http://localhost/IDORequestService/MGRESTService.svc/xml/{ido}/additems";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002…5vl903teP0jSDwkFs" );
 
   List<IDOUpdateItem> idoItems = new List<IDOUpdateItem>();
 
   UpdateProperty username = new UpdateProperty
   {
      Name = "Username",
      Value = "jdoe",
      IsNull = false,
      Modified = true
   };
 
   UpdateProperty userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "John Doe",
      IsNull = false,
      Modified = true
   };
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Insert,
      Properties = new[] { username, userDesc },
      ItemId = "PBT=[UserNames]"
   };
   idoItems.Add( idoItem );
 
   username = new UpdateProperty
   {
      Name = "Username",
      Value = "wsmith",
      IsNull = false,
      Modified = true
   };
 
   userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "Will Smith",
      IsNull = false,
      Modified = true
   };
 
   idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Insert,
      Properties = new[] { username, userDesc },
      ItemId = "PBT=[UserNames]"
   };
   idoItems.Add( idoItem );
   
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItems.GetType() );
      serializer.WriteObject( writer, idoItems );
   }
 
   // pass the List<IDOUpdateItem> as the request data and send the insert request
   HttpResponseMessage response = client.PostAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## AddItems with refresh

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ipq1576049925801.html

The AddItems with refresh API inserts multiple records into a specified IDO and then refreshes the collection.

- POST · `/{responsetype}/{ido}/additems/adv`
- **POST / /{responsetype}/{ido}/additems/adv:** http://localhost/IDORequestService/MGRESTService.svc/xml/UserNames/additems/adv?refresh\=ALL\&props\=Username,UserDesc

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection
- **Name:** refresh · **In:** Query · **Required?:** No · **Description:** Provides the instruction to refresh the collection

  Specify any of these values:

  - **ALL**: Refreshes the entire collection and all of its properties.
  - **PROPS**: Refreshes only the IDO properties.
- **Name:** props · **In:** Query · **Required?:** No · **Description:** A comma-delimited list of the properties to refresh

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<?xml version="1.0"?>
<ArrayOfIDOUpdateItem xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.infor.com">
  <IDOUpdateItem>
    <Action>Insert</Action>
    <ItemId>PBT=[Usernames]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>Username</Name>
        <Value>jdoe</Value>
      </UpdateProperty>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>UserDesc</Name>
        <Value>John Doe </Value>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
  <IDOUpdateItem>
    <Action>Insert</Action>
    <ItemId>PBT=[Usernames]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>Username</Name>
        <Value>wsmith</Value>
      </UpdateProperty>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>UserDesc</Name>
        <Value>Will Smith</Value>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
</ArrayOfIDOUpdateItem>
```

### Request data in JSON format

```
 [
   {
      "Action": 1,
      "ItemId": "PBT=[Usernames]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": true,
            "Name": "Username",
            "Value": "jdoe"
         },
         {
            "IsNull": false,
            "Modified": true,
            "Name": "UserDesc",
            "Value": "John Doe"
         }
      ]
   },
   {
      "Action": 1,
      "ItemId": "PBT=[Usernames]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": true,
            "Name": "Username",
            "Value": "wsmith"
         },
         {
            "IsNull": false,
            "Modified": true,
            "Name": "UserDesc",
            "Value": "Will Smith "
         }
      ]
   }
]
```

### Response data in XML format

```
<MGRestUpdateResponse xmlns="http://schemas.datacontract.org/2004/07/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Insert successful.</Message>
  <MessageCode>200</MessageCode>
</MGRestUpdateResponse>
```

### Response data in JSON format

```
{
   "Message": "Insert successful.",
   "MessageCode": 200
}
```

### Example

This example code inserts users **jdoe** and **wsmith** as new users and returns the updated property values.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string refresh = "ALL";
   string props = "Username,UserDesc";
   string requestUrl = $"http://localhost/IDORequestService/MGRESTService.svc/xml/{ido}/additems/adv?refresh={refresh}&props={props}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002…5vl903teP0jSDwkFs" );
 
   List<IDOUpdateItem> idoItems = new List<IDOUpdateItem>();
 
   UpdateProperty username = new UpdateProperty
   {
      Name = "Username",
      Value = "jdoe",
      IsNull = false,
      Modified = true
   };
 
   UpdateProperty userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "John Doe",
      IsNull = false,
      Modified = true
   };
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Insert,
      Properties = new[] { username, userDesc },
      ItemId = "PBT=[UserNames]"
   };
   idoItems.Add( idoItem );
 
   username = new UpdateProperty
   {
      Name = "Username",
      Value = "wsmith",
      IsNull = false,
      Modified = true
   };
 
   userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "Will Smith",
      IsNull = false,
      Modified = true
   };
 
   idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Insert,
      Properties = new[] { username, userDesc },
      ItemId = "PBT=[UserNames]"
   };
   idoItems.Add( idoItem );
 
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItems.GetType() );
      serializer.WriteObject( writer, idoItems );
   }
 
   // pass the List<IDOUpdateItem> as the request data and send the insert request
   HttpResponseMessage response = client.PostAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## DeleteItem

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/pfq1576216844290.html

The DeleteItem API removes a single record from a specified IDO collection.

- DELETE · `/{responsetype}/{ido}/deleteitem`
- **DELETE / /{responsetype}/{ido}/deleteitem:** http://localhost/IDORequestService/MGRESTService.svc/xml/UserNames/deleteitem?itemid\=PBT\=\[UserNames\] UserNames.DT\=\[2019-07-24 13:28:51.960\] UserNames.ID\=\[3faaaaab-47ef-4643-8255-756976238911\]

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection
- **Name:** itemid · **In:** Query · **Required?:** Yes · **Description:** The value of the IDO \_itemid property

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data in XML format

```
<MGRestUpdateResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Delete successful.</Message>
  <MessageCode>202</MessageCode>
</MGRestUpdateResponse
```

### Response data in JSON format

```
{
   "Message": "Delete successful.",
   "MessageCode": 202
}
```

### Example

This example code deletes a user that has the given \_ItemID property value.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type    
   string ido = "UserNames";
   string itemid = "PBT=[UserNames] UserNames.DT=[2019-07-19 09:35:11.153] UserNames.ID=[ece4f2a5-e155-49c6-b2bd-afee64303c3f]";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/{ido}/deleteitem?itemid={itemid}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   HttpResponseMessage response = client.DeleteAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## DeleteItems

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/svu1576217637466.html

The DeleteItems API removes multiple records from a specified IDO collection at one time.

- DELETE · `/{responsetype}/{ido}/deleteitems`
- **DELETE / /{responsetype}/{ido}/deleteitems:** http://localhost/IDORequestService/MGRESTService.svc/xml/UserNames/deleteitems

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Reqiest data in XML format

```
<?xml version="1.0"?>
<ArrayOfIDOUpdateItem
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://www.infor.com">
  <IDOUpdateItem>
    <Action>Delete</Action>
    <ItemId>PBT=[UserNames] UserNames.DT=[2019-07-24 13:58:55.860] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>false</Modified>
        <Name>_ItemId</Name>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
  <IDOUpdateItem>
    <Action>Delete</Action>
    <ItemId>PBT=[UserNames] UserNames.DT=[2019-07-24 13:58:55.997] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>false</Modified>
        <Name>_ItemId</Name>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
</ArrayOfIDOUpdateItem>
```

### Request data in JSON format

```
[
   {
      "Action": 4,
      "ItemId": "PBT=[UserNames] UserNames.DT=[2019-07-24 13:58:55.860] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": false,
            "Name": "_ItemId",
            "Value": null
         }
      ]
   },
   {
      "Action": 4,
      "ItemId": "PBT=[UserNames] UserNames.DT=[2019-07-24 13:58:55.997] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": false,
            "Name": "_ItemId",
            "Value": null
         }
      ]
   }
]
```

### Response data in XML format

```
<MGRestUpdateResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Delete successful.</Message>
  <MessageCode>202</MessageCode>
</MGRestUpdateResponse>
```

### Response data in JSON format

```
{
   "Message": "Delete successful.",
   "MessageCode": 202
}
```

### Example

This example code deletes multiple users that have the given \_ItemID property values.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type        
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/{ido}/deleteitems";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   List<IDOUpdateItem> idoItems = new List<IDOUpdateItem>();
 
   UpdateProperty itemId = new UpdateProperty
   {
      Name = "ItemId",
      Value = null,
      IsNull = false,
      Modified = false
   };
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Delete,
      Properties = new[] { itemId },
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-07-24 13:58:55.860] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]"
   };
   idoItems.Add( idoItem );
 
   itemId = new UpdateProperty
   {
      Name = "ItemId",
      Value = null,
      IsNull = false,
      Modified = false
   };
 
   idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Delete,
      Properties = new[] { itemId },
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-07-24 13:58:55.997] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]"
   };
   idoItems.Add( idoItem );
 
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItems.GetType() );
      serializer.WriteObject( writer, idoItems );
   }
 
   // pass the List<IDOUpdateItem> as the request data and send the delete request
   HttpResponseMessage response = client.PostAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## DownloadDocumentObject

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/gzu1576647501472.html

The DownloadDocumentObject API downloads a streamed file from a document object.

**Note:** This topic is for REST version 1\. See [DownloadDocumentObject](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jju1577916730177.html) for the REST version 2\.

- GET · `/io/downloaddocobj`
- **GET / /io/downloaddocobj:** http://localhost/IDORequestService/MGRESTService.svc/xml/io/xml/downloaddocobj?ido\=UserNames\&\&rp\=7dbf8871-e688-44af-b4dd-111fce42395b\&docname\=WeeklyReport

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Query | Yes | The name of the IDO collection |
| rp | Query | No | The value of an IDO row pointer **Note:** This parameter is optional if the **filter** parameter is used. |
| docname | Query | No | The name of the document object **Note:** This parameter is optional if the **refseq** parameter is used. |
| refseq | Query | No | The reference sequence number of the document object **Note:** This parameter is optional if the **docname** parameter is used. |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data

Unencoded binary stream of the file, with the content-type of `application/octet-stream`

### Example

This example code downloads a document object from the referenced IDO and IDO rowpointer.

```
string xml = string.Empty;
 
using ( var client = new HttpClient() )
{
   string ido = "UserNames";
   string docname = "WeeklyReport";
   string rp = "2807a627-577b-462e-9494-aee568152c54";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/io/downloaddocobj/?ido={ido}&rp={rp}&docname={docname}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( var content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## DownloadFileStream

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/lau1576273010173.html

The DownloadFileStream API downloads a streamed file from an IDO collection. The IDO collection must have a property for storing binary data.

**Note:** This topic is for REST version 1\. See [DownloadFileStream](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/oeb1576878767858.html) for REST version 2\.

- GET · `/io/uploadfile`
- **GET / /io/uploadfile:** http://localhost/IDORequestService/MGRESTService.svc/io/downloadfile/?ido\=UserNames\&prop\=UserImage\&rp\=2807a627-577b-462e-9494-aee568152c54

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Query | Yes | The name of the IDO collection |
| prop | Query | Yes | The name of an IDO property |
| rp | Query | No | The value of an IDO row pointer **Note:** This parameter is optional if the **filter** parameter is used. |
| filter | Query | No | Applies a filter for the required row If multiple rows returned, the first row is selected. For optimal performance, use a filter that returns only one row.  **Note:** This parameter is optional if the **rp** parameter is used. |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data

Unencoded binary stream of the file, with the content-type of `application/octet-stream`

### Example

This example code downloads a user image from the users table.

```
var xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string prop = "UserImage";
   string rp = "2807a627-577b-462e-9494-aee568152c54";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/io/downloadfile/?ido={ido}&prop={prop}&rp={rp}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## FireAESEvent

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/iju1576220114963.html

The FireAESEvent API fires an Application Event System (AES) event and, optionally, returns all parameters.

**Note:** This topic is for REST version 1\. See [FireAESEvent](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/zzz1576869775308.html) for the REST version 2\.

- POST · `/{responsetype}/aes?eventname={eventname}&parms={parms}`
- **POST / /{responsetype}/aes?eventname\={eventname}\&parms\={parms}:** http://localhost/IDORequestService/MGRESTService.svc/xml/aes?eventname\=DivideNumbers\&parms\=Dec1(20),Dec2(5),ProductVal(0),Infobar()\&returnparms\=true\&debug\=true

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - js
- **Name:** eventname · **In:** Query · **Required?:** Yes · **Description:** The name of the AES event
- **Name:** parms · **In:** Query · **Required?:** No · **Description:** A comma-delimited list of event parameters

  Use this format for parameters: `parameter1(value), parameter2(value), ...`

  **Note:** If you have any parameters that include a comma as part of the parameter value, you must change the comma to the escape sequence **\\x2c** before using this API. If you do not, parsing errors occur when the AES event is fired.
- **Name:** returnparms · **In:** Query · **Required?:** No · **Description:** Used as a flag for returning parameter values

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data in XML format

```
<FireAESEventParmsInUrlXMLResponse xmlns="http://www.infor.com">
  <FireAESEventParmsInUrlXMLResult xmlns:a="http://schemas.datacontract.org/2004/07/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <a:EventName>DivideNumbers</a:EventName>
    <a:Message>
      Input Parameters:&#xD;
      Name: {Num1}, Value: {20}&#xD;
      Name: {Num2}, Value: {5}&#xD;
      Name: {Quotient}, Value: {0}&#xD;
      Event execution success: False&#xD;
      Output Parameters:&#xD;
      Name: {Num1}, Value: {20}&#xD;
      Name: {Num2}, Value: {5}&#xD;
      Name: {Quotient}, Value: {4}&#xD;
      AES Event execution complete&#xD;
    </a:Message>
    <a:MessageCode>600</a:MessageCode>
    <a:Parameters>
      <Parameter>
        <Name>Num1</Name>
        <Value>20</Value>
        <Return>true</Return>
      </Parameter>
      <Parameter>
        <Name>Num2</Name>
        <Value>5</Value>
        <Return>true</Return>
      </Parameter>
      <Parameter>
        <Name>Quotient</Name>
        <Value>4</Value>
        <Return>true</Return>
      </Parameter>
    </a:Parameters>
  </FireAESEventParmsInUrlXMLResult>
</FireAESEventParmsInUrlXMLResponse>
```

### Response data in JavaScript format

```
{
    "EventName": "DivideNumbers",
    "Parameters": [
        {
            "Name": "Num1",
            "Value": "20",
            "Return": true
        },
        {
            "Name": "Num2",
            "Value": "5",
            "Return": true
        },
      {
         "Name": "Quotient",
         "Value": "4",
         "Return": true
      }
    ],
    "Message": "\tInput Parameters:\r\n\tName: {Num1}, Value: {20}\r\n\tName: {Num2}, Value: {5}\r\n\tName: {Quotient}, Value: {0}\r\n\tEvent execution success: False\r\n\tOutput Parameters:\r\n\tName: {Num1}, Value: {20}\r\n\tName: {Num2}, Value: {5}\r\n\tName: {Quotient}, Value: {4}\r\n\tAES Event execution complete\r\n",
    "MessageCode": 600
}
```

### Example

This example code executes an AES event that divides two numbers and returns the quotient as an output parameter.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use js as the response type        
   string eventname = "DivideNumbers";
   string parms = "Num1(120), Num2(6), Quotient(0)";
   bool returnparms = true;
   bool debugmode = true;
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/aes/?eventname={eventname}&parms={parms}&returnparms={returnparms}&debugmode={debugmode}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   HttpResponseMessage response = client.PostAsync( requestUrl, null ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## FireAESEventAdvanced

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/hwa1576221632813.html

The FireAESEventAdvanced API fires an Application Event System (AES) event with the option to include parameters in the request body. This API is ideal for large amounts of data that must be sent when firing an event.

- POST · `/{responsetype}/aes/adv`
- **POST / /{responsetype}/aes/adv:** http://localhost/IDORequestService/MGRESTService.svc/xml/aes/adv?debug\=true

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
- **Name:** debug · **In:** Query · **Required?:** Yes · **Description:** Used as a flag for returning verbose debug and test information

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<FireAESEventRequest
	xmlns="http://www.infor.com"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EventName>DivideNumbers</EventName>
  <Parameters>
    <Parameter>
      <Name>Num1</Name>
      <Value>200</Value>
      <Return>false</Return>
    </Parameter>
    <Parameter>
      <Name>Num2</Name>
      <Value>25</Value>
      <Return>false</Return>
    </Parameter>
    <Parameter>
      <Name>Quotient</Name>
      <Value>0</Value>
      <Return>true</Return>
    </Parameter>
    <Parameter>
      <Name>Infobar</Name>
      <Value></Value>
      <Return>true</Return>
    </Parameter>
  </Parameters>
</FireAESEventRequest>
```

### Request data in JSON format

```
{
   "EventName": "DivideNumbers",
   "Parameters": [
      {
         "Name": "Num1",
         "Return": false,
         "Value": 200
      },
      {
         "Name": "Num2",
         "Return": false,
         "Value": 25
      },
      {
         "Name": "Quotient",
         "Return": true
      },
      {
         "Name": "Infobar",
         "Return": true
      }
   ]
}
```

### Response data in XML format

```
<MGFireEventResponse>
  <EventName>DivideNumbers</EventName>
  <Parameters>
    <Parameter>
      <Name>Quotient</Name>
      <Return>true</Return>
      <Value>8</Value>
    </Parameter>
    <Parameter>
      <Name>Infobar</Name>
      <Return>true</Return>
      <Value>success</Value>
    </Parameter>
  </Parameters>
  <Message>Success</Message>
  <MessageCode>600</MessageCode>
</MGFireEventResponse>
```

### Response data in JSON format

```
{
   "EventName": "DivideNumbers",
   "Parameters": [
      {
         "Name": "Quotient",
         "Value": "8",
         "Return": true
      },
      {
         "Name": "Infobar",
         "Value": "success",
         "Return": true
      }
   ],
   "Message": "Success",
   "MessageCode": 600
}
```

### Example

This example code executes an AES event that divides two numbers and returns the quotient as an output parameter. The AES event details are passed as a request payload instead of including it in the request URL.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   bool debug = true;
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/aes/adv/?debug={debug}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   AESEventParameter num1 = new AESEventParameter();
   num1.Name = "Num1";
   num1.Return = false;
   num1.Value = "200";
 
   AESEventParameter num2 = new AESEventParameter();
   num2.Name = "Num2";
   num2.Return = false;
   num2.Value = "25";
 
   AESEventParameter quotient = new AESEventParameter();
   quotient.Name = "Quotient";
   quotient.Return = true;
   quotient.Value = "0";
 
   AESEventParameter[] parameters = new[] { num1, num2, quotient };
   FireAESEventRequest payload = new FireAESEventRequest();
   payload.EventName = "DivideNumbers";
   payload.Parameters = parameters;
 
   XDocument xdoc = new XDocument();
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( payload.GetType() );
      serializer.WriteObject( writer, payload );
   }
 
   // pass the AES event name and parameters as the request data and send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/json" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## GetConfigurations

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/neq1573184565846.html

The GetConfigurations API returns a list of the application configuration names available on the server.

**Note:** This topic is for REST version 1\. See [GetConfigurations](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/kes1576788430178.html) for the REST version 2\.

- GET · `/{responsetype}/configurations`
- **GET / /{responsetype}/configurations:** http://localhost/IDORequestService/MGRESTService.svc/xml/configurations?configgroup\=DEV

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify either of these values:

  - xml
  - json
- **Name:** configgroup · **In:** Query · **Required?:** No · **Description:** The name of a configuration group

  Use this parameter to get the configurations from a specific configuration group.

### Headers

None

### Request data

None

### Response data in XML format

```
<ArrayOfstring xmlns="http://schemas.microsoft.com/2003/10/Serialization/Arrays" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <string>CSI_DALS</string>
  <string>CSI_EMEA</string>
  <string>CSI_LA</string>
</ArrayOfstring>
```

### Response data in JSON format

```
[
   "CSI_DALS",
   "CSI_EMEA",
   "CSI_LA"
]
```

### Example

This example code retrieves an array of configuration names from the specified configuration group through the ConfigServer.aspx page in IDORequestService:

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string configGroup = "DEV";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/configurations?configgroup={configGroup}";
 
   // send the request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      // get the xml response containing the configuration list
      xml = result.Result;
   }
}
```

## GetSecurityToken

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/cld1573187564306.html

The GetSecurityToken API returns a Mongoose security token for a specific user, which can be used to authenticate requests when calling the API directly.

**Note:** This topic is for REST version 1\. See [GetSecurityToken](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/cnb1576794444478.html) for the REST version 2\.

- GET · `/{responsetype}/token/{config}`
- **GET / /{responsetype}/token/{config}:** http://localhost/IDORequestService/MGRESTService.svc/js/token/CSI\_DALS

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
  - js
- **Name:** config · **In:** Path · **Required?:** Yes · **Description:** The name of a configuration available on the application server

### Headers

| Name | Description |
| --- | --- |
| userid | Mongoose username |
| password | Mongoose user password |

### Request data

None

### Response data in XML format

If successful, the call returns a neatly packaged security token.

```
<MGRestTokenResponse xmlns="http://schemas.datacontract.org/2004/07/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Success</Message>
  <Token>b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDb...YOdU2ThSw==</Token>
</MGRestTokenResponse>
```

### Response data in JSON format

If successful, the call returns a neatly packaged security token.

```
{
   "Message": "Success",
   "Token": "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDb...YOdU2ThSw=="
}
```

### Response data in JS format

If successful, the call returns the security token itself (no envelope).

```
b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDb...YOdU2ThSw== 
```

### Example

This example code retrieves a Mongoose security token for the given user ID, password, and configuration name.

```
string token = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // provide your Mongoose credentails in the request url
   string config = "CSI_DALS";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/js/token/{config}";
 
   // provide your Mongoose credentials as headers
   client.DefaultRequestHeaders.Add( "userid", "sa" );
   client.DefaultRequestHeaders.Add( "password", "" );
 
   // send the get request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      // this contains your token
      token = result.Result;
   }
}
```

## IDOInfo

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/amx1573535187446.html

The IDOInfo API returns the property metadata for an IDO collection.

- GET · `/{responsetype}/idoinfo/{ido}`
- **GET / /{responsetype}/idoinfo/{ido}:** http://localhost/IDORequestService/MGRESTService.svc/xml/idoinfo/UserNames

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify either of these values:

  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data in XML format

```
<ArrayOfRestIdoItemPropInfo xmlns="http://schemas.datacontract.org/2004/07/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <RestIdoItemPropInfo>
    <defaultValue/>
    <labelStringID>sUserID</labelStringID>
    <name>UserId</name>
    <required>true</required>
    <dataType>Decimal</dataType>
    <length>11</length>
    <readOnly>true</readOnly>
  </RestIdoItemPropInfo>
  <RestIdoItemPropInfo>
    <defaultValue/>
    <labelStringID>sUsername</labelStringID>
    <name>Username</name>
    <required>true</required>
    <dataType>String</dataType>
    <length>128</length>
    <readOnly>false</readOnly>
  </RestIdoItemPropInfo>
  <RestIdoItemPropInfo>
    ...
  </RestIdoItemPropInfo>
</ArrayOfRestIdoItemPropInfo>
```

### Response data in JSON format

```
 [
   {
      "defaultValue": "",
      "labelStringID": "sUserID",
      "name": "UserId",
      "required": true,
      "dataType": "Decimal",
      "length": 11,
      "readOnly": true
   },
	 {
		"defaultValue": "",
		"labelStringID": "sUsername",
		"name": "Username",
		"required": true,
		"dataType": "String",
		"length": 128,
		"readOnly": false
	 },
	 { ... }
]
```

### Example

This example code retrieves an array of properties and their attributes from a specified IDO.

```
string xml = string.Empty;
 
using ( var client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/idoinfo/{ido}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   // send the get request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      // get the xml response
      xml = result.Result;
   }
}
```

## InvokeMethod

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/dou1573771437358.html

The InvokeMethod API calls into use an IDO method.

- GET · `/{responsetype}/method/{ido}/{method}?parms={parms}`
- **GET / /{responsetype}/method/{ido}/{method}?parms\={parms}:** http://localhost/IDORequestService/MGRESTService.svc/xml/method/GetUserAttributes?parms\=sa,,,,

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format

  Specify any of these values:

  - xml
  - json
  - js
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection
- **Name:** method · **In:** Path · **Required?:** Yes · **Description:** The name of the method to be invoked
- **Name:** parms · **In:** Query · **Required?:** No · **Description:** A comma-delimited list of the paramters required by the method being invoked

  **Note:** If you have any parameters that include a comma as part of the parameter value, you must change the comma to the escape sequence **\\x2c** before using this API. If you do not, parsing errors occur when the method is invoked.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data in XML format

```
<MGRestInvokeMethodResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message i:nil="true" />
  <MessageCode>0</MessageCode>
  <Parameters>
    <p>sa</p>
    <p>4</p>
    <p>1</p>
    <p>CoreFormsAdmin</p>
    <p></p>
  </Parameters>
  <ReturnValue>0</ReturnValue>
</MGRestInvokeMethodResponse>
```

### Response data in JSON format

```
{
   "Message": null,
   "MessageCode": 0,
   "Parameters": [
      "sa",
      "4",
      "1",
      "CoreFormsAdmin",
      ""
   ],
   "ReturnValue": "0"
}
```

### Response data in JSON Stream format

```
{
   "Parameters": {
      "Username": "sa",
      "EditLevel": 4,
      "SuperUserFlag": 1,
      "FormGroupName": "",
      "Infobar": ""
   },
   "ReturnValue": "0",
   "Message": null,
   "MessageCode": 0
}
```

### Example

This example code determines the user attributes of the 'sa' user invoking the GetUserAttributes IDO method.

```
string xml = string.Empty;
 
using ( var client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string method = "GetUserAttributes";
   string parms = "sa,,,,";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/method/{ido}/{method}?parms={parms}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   // send the get request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      // get the xml response
      xml = result.Result;
   }
}
```

## LoadCollection

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/scb1573247746553.html

The LoadCollection API is a basic load collection API that returns the first 200 records of a specified IDO collection.

\[Image: LoadCollection\]

**Note:** This topic is for REST Version 1\. There is also an API for [REST Version 2](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/dwn1576796415221.html).

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.
- **Name:** props · **In:** Path · **Required?:** Yes · **Description:** This is a comma-delimited list of properties for which to return values. You can also use an asterisk (\*)

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by the ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

**Note:** LoadCollection has a number of variations that can load a collection with different query parameters:

- One variation of this API ([LoadCollection with Properties](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/atf1573249689569.html)) accepts a property list as a query parameter. This is useful for longer lists of properties that might exceed URL length restrictions.
- Another variation ([Advanced LoadCollection](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jzk1573452054107.html)) offers various options to filter the return results.
- A third variation ([Advanced LoadCollection with Properties](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jfc1573532249940.html)) accepts a property list as a query parameter, and offers various options to filter the return results. This is useful for longer lists of properties that might exceed URL length restrictions.

### Request data

None

### Response data in XML format

```
<MGRestResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Items>
    <item>
      <p>1</p>
      <p>sa</p>
      <p>System Admin</p>
    </item>
    <item>
      <p>2</p>
      <p>jdoe</p>
      <p>John Doe</p>
    </item>
  </Items>
  <Message i:nil="true"/>
  <MessageCode>0</MessageCode>
</MGRestResponse>
```

### Response data in JSON format

```
{
   "Items": [
      [ "1", "sa", "System Admin" ],
      [ "2", "jdoe", "John Doe" ]
   ],
   "Message": null,
   "MessageCode": 0
}
```

### Example

This example code retrieves records that contains the user ID, username, and user description from the Users table.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
           // optionally, you can use json as the response type
   string ido = "UserNames";
   string properties = "UserId, Username, UserDesc";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/{ido}/{properties}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDb...YOdU2ThSw==" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## LoadCollection with properties

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/atf1573249689569.html

This variation of the LoadCollection API is a basic load collection API that returns the first 200 records of a specified IDO collection. Unlike the basic LoadCollection API, this endpoint includes the property list as a query parameter instead of a path parameter.

\[Image: LoadCollection with properties\]

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply either of these values:
  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.
- **Name:** props · **In:** Query · **Required?:** No · **Description:** This is either a comma-delimited list of properties, or it is an asterisk (\*), which includes all properties except subcollection properties.

  If this parameter is excluded or left blank, the server retrieves data for all properties.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data in XML format

```
<MGRestResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Items>
    <item>
      <p>1</p>
      <p>sa</p>
      <p>System Admin</p>
    </item>
    <item>
      <p>2</p>
      <p>jdoe</p>
      <p>John Doe</p>
    </item>
  </Items>
  <Message i:nil="true"/>
  <MessageCode>0</MessageCode>
</MGRestResponse>
```

### Response data in JSON format

```
{
   "Items": [
      [ "1", "sa", "System Admin" ],
      [ "2", "jdoe", "John Doe" ]
   ],
   "Message": null,
   "MessageCode": 0
}
```

### Example

This example code retrieves records that contain the user ID, username, and user description from the Users table. Notice that the properties are provided in the request as a query parameter.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
          // optionally, you can use json as the response type
   string ido = "UserNames";
   string properties = "UserId, Username, UserDesc";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/{ido}?props={properties}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDb...YOdU2ThSw==" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## Advanced LoadCollection

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jzk1573452054107.html

This variation of the LoadCollection API returns the records of a specified IDO collection. Unlike the basic LoadCollection API and the LoadCollection with properties API, this variation offers various options to filter the return results.

\[Image: LoadCollection, Advanced\]

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json
  - js
  - schema
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.
- **Name:** props · **In:** Path · **Required?:** Yes · **Description:** This is a comma-delimited list of properties.
- **Name:** filter · **In:** Query · **Required?:** No · **Description:** This parameter restricts the result set. Specific approved SQL functions are allowed in filter expressions. Currently, the supported functions are `GETDATE()` and `DATEADD()`. All other SQL functions, including aggregate functions are blocked.

  Unsupported functions, `GROUP BY`, `HAVING`, sub-queries, or any non-white-listed expression will result in an `IllegalFilterException`.
- **Name:** orderby · **In:** Query · **Required?:** No · **Description:** This parameter is a comma-delimited list of properties that specifies the order in which the result set should be sorted. To have a property sorted in descending order, use the DESC keyword after the property name.
- **Name:** recordcap · **In:** Query · **Required?:** No · **Description:** This parameter specifies how many records are to be retrieved in each request. These are the valid values:
  - **-1**\- This specifies that the system default record cap is to be used. This is typically **200**, but it can be any number as set by the system administrator.
  - **0** \- This value specifies that all records are to be retrieved, regardless of any record cap settings.
  - Any other positive integer specifies the number of records that are to be retrieved.
- **Name:** distinct · **In:** Query · **Required?:** No · **Description:** This parameter specifies that a set of data that represents only distinct combinations of requested properties is to be returned.
- **Name:** clm · **In:** Query · **Required?:** No · **Description:** This parameter is the name of a custom load method.

  This parameter can be used in conjunction with the clmparms parameter.
- **Name:** clmparms · **In:** Query · **Required?:** No · **Description:** This parameter is used for a comma-delimited list of custom load methods.
- **Name:** loadtype · **In:** Query · **Required?:** No · **Description:** This parameter is used for load collection paging. It is used in conjunction with the bookmark parameter.

  To use, specify one of these types:

  - FIRST
  - NEXT
  - PREV
  - LAST
- **Name:** bookmark · **In:** Query · **Required?:** No · **Description:** This parameter is for the bookmark ID. Bookmark IDs serve as a reference when you want to get to the next or previous records in a collection.

  The “bookmark” value uses this format:

  `<B><P><p>UserId</p></P><D><f>false</f></D><F><v>1</v></F><L><v>2</v></L></B> `

  where:

  - `<B></B>` is the bookmark envelope tag.
  - `<P></P>` is the property name of the primary key.
  - `<D></D>` is a flag that, if TRUE, specifies that records are to be read in descending order.
  - `<f></f>` is the value of the `<D></D>` element (TRUE or FALSE).
  - `<F></F>` is the first row in the collection.
  - `<L></L>` is the last row in the collection.
  - `<v><v>` is the value of the row for the given property name.

  For an example of this, see [Example: Bookmark IDs in LoadCollection responses](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ooc1576799884898.html).
- **Name:** pqc · **In:** Query · **Required?:** No · **Description:** This parameter specifies a method to execute once for each row in the result set after the query is completed.

  This is the equivalent of the WinStudio **PQ** option in Load/Save Overrides and uses the same syntax.
- **Name:** ro · **In:** Query · **Required?:** No · **Description:** This parameter specifies that the return results are to be marked as "Read Only".

  When this is set to **True**, retrieved records do not include the **\_ItemID** property, which can be substantial for update and delete operations.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data in XML format

```
<MGRestResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Items>
    <item>
      <p>1</p>
      <p>sa</p>
    </item>
  </Items>
  <Message i:nil="true"/>
  <MessageCode>0</MessageCode>
</MGRestResponse>
```

### Response data in JSON format

```
{
   "Items": [
      [ "1", "sa" ]
   ],
   "Message": null,
   "MessageCode": 0
}
```

### Response data in JSON Stream format

```
{
	"Message": "Success",
	"MessageCode": 0,
	"Items": [
      {
         "UserId": 1,
         "Username": "sa"
      }
	]
}
```

### Response data in Full Schema format

```
<NewDataSet>
  <xs:schema id="NewDataSet" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
    <xs:element name="NewDataSet" msdata:IsDataSet="true" msdata:MainDataTable="UserNames" msdata:UseCurrentLocale="true">
      <xs:complexType>
        <xs:choice minOccurs="0" maxOccurs="unbounded">
          <xs:element name="UserNames">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="UserId" msdata:Caption="sUserID" type="xs:decimal"/>
                <xs:element name="Username" msdata:Caption="sUsername" type="xs:string"/>
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:choice>
      </xs:complexType>
    </xs:element>
  </xs:schema>
  <UserNames>
    <UserId>1</UserId>
    <Username>sa</Username>
  </UserNames>
</NewDataSet>
```

### Example

This example code retrieves the user ID, username, and user description from the Users table for the 'sa' user and uses the filter parameter.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string properties = "UserId, Username, UserDesc";
   string filter = "Username%20LIKE%20'sa'";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/{ido}/{properties}/adv?filter={filter}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## Advanced LoadCollection with properties

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jfc1573532249940.html

This variation of the LoadCollection API returns the records of the specified IDO collection. This endpoint includes the property list as a query parameter instead of a path parameter. Unlike the basic LoadCollection API and the LoadCollection with properties API, this variation offers various options to filter the result.

\[Image: LoadCollection, Advanced, with properties\]

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json
  - js
  - schema
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.
- **Name:** props · **In:** Query · **Required?:** Yes · **Description:** This is a comma-delimited list of properties.
- **Name:** filter · **In:** Query · **Required?:** No · **Description:** This parameter restricts the result set. Specific approved SQL functions are allowed in filter expressions. Currently, the supported functions are `GETDATE()` and `DATEADD()`. All other SQL functions, including aggregate functions are blocked.

  Unsupported functions, `GROUP BY`, `HAVING`, sub-queries, or any non-white-listed expression will result in an `IllegalFilterException`.
- **Name:** orderby · **In:** Query · **Required?:** No · **Description:** This parameter is a comma-delimited list of properties that specifies the order in which the result set should be sorted. To have a property sorted in descending order, use the DESC keyword after the property name.
- **Name:** recordcap · **In:** Query · **Required?:** No · **Description:** This parameter specifies how many records are to be retrieved in each request. These are the valid values:
  - **-1**\- This specifies that the system default record cap is to be used. This is typically **200**, but it can be any number as set by the system administrator.
  - **0** \- This value specifies that all records are to be retrieved, regardless of any record cap settings.
  - Any other positive integer specifies the number of records that are to be retrieved.
- **Name:** distinct · **In:** Query · **Required?:** No · **Description:** This parameter specifies that a set of data that represents only distinct combinations of requested properties is to be returned.
- **Name:** clm · **In:** Query · **Required?:** No · **Description:** This parameter is the name of a custom load method.

  This parameter can be used in conjunction with the clmparms parameter.
- **Name:** clmparms · **In:** Query · **Required?:** No · **Description:** This parameter is used for a comma-delimited list of custom load methods.
- **Name:** loadtype · **In:** Query · **Required?:** No · **Description:** This parameter is used for load collection paging. It is used in conjunction with the bookmark parameter.

  To use, specify one of these types:

  - FIRST
  - NEXT
  - PREV
  - LAST
- **Name:** bookmark · **In:** Query · **Required?:** No · **Description:** This parameter is for the bookmark ID. Bookmark IDs serve as a reference when you want to get to the next or previous records in a collection.

  The “bookmark” value uses this format:

  `<B><P><p>UserId</p></P><D><f>false</f></D><F><v>1</v></F><L><v>2</v></L></B> `

  where:

  - `<B></B>` is the bookmark envelope tag.
  - `<P></P>` is the property name of the primary key.
  - `<D></D>` is a flag that, if TRUE, specifies that records are to be read in descending order.
  - `<f></f>` is the value of the `<D></D>` element (TRUE or FALSE).
  - `<F></F>` is the first row in the collection.
  - `<L></L>` is the last row in the collection.
  - `<v><v>` is the value of the row for the given property name.

  For an example of this, see [Example: Bookmark IDs in LoadCollection responses](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ooc1576799884898.html).
- **Name:** pqc · **In:** Query · **Required?:** No · **Description:** This parameter specifies a method to execute once for each row in the result set after the query is completed.

  This is the equivalent of the WinStudio **PQ** option in Load/Save Overrides and uses the same syntax.
- **Name:** ro · **In:** Query · **Required?:** No · **Description:** This parameter specifies that the return results are to be marked as "Read Only".

  When this is set to **True**, retrieved records do not include the **\_ItemID** property, which can be substantial for update and delete operations.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data in XML format

```
<MGRestResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Items>
    <item>
      <p>1</p>
      <p>sa</p>
    </item>
  </Items>
  <Message i:nil="true"/>
  <MessageCode>0</MessageCode>
</MGRestResponse>
```

### Response data in JSON format

```
{
   "Items": [
      [ "1", "sa" ]
   ],
   "Message": null,
   "MessageCode": 0
}
```

### Response data in JSON Stream format

```
{
   "Message": "Success",
   "MessageCode": 0,
   "Items": [
      {
         "UserId": 1,
         "Username": "sa"
      }
   ]
}
```

### Response data in Full Schema format

```
<NewDataSet>
  <xs:schema id="NewDataSet" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
    <xs:element name="NewDataSet" msdata:IsDataSet="true" msdata:MainDataTable="UserNames" msdata:UseCurrentLocale="true">
      <xs:complexType>
        <xs:choice minOccurs="0" maxOccurs="unbounded">
          <xs:element name="UserNames">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="UserId" msdata:Caption="sUserID" type="xs:decimal"/>
                <xs:element name="Username" msdata:Caption="sUsername" type="xs:string"/>
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:choice>
      </xs:complexType>
    </xs:element>
  </xs:schema>
  <UserNames>
    <UserId>1</UserId>
    <Username>sa</Username>
  </UserNames>
</NewDataSet>
```

### Example

This example code retrieves the user ID, username, and user description of the 'sa' user from the Users table. Notice that the properties are provided as a query parameter.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string properties = "UserId, Username, UserDesc";
   string filter = "Username%20LIKE%20'sa'";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/xml/{ido}/adv?props={properties}&filter={filter}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## Load Property Values

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/zva1573533973391.html

The Load Property Values API is a load collection API that returns a list of values for a single property.

\[Image: Load Property Values\]

### Parameters

- Name · In · Required? · Description
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.
- **Name:** prop · **In:** Path · **Required?:** Yes · **Description:** This is the name of an IDO property.
- **Name:** filter · **In:** Query · **Required?:** No · **Description:** This parameter restricts the result set. This can be any valid SQL WHERE clause.
- **Name:** orderby · **In:** Query · **Required?:** No · **Description:** This parameter is a comma-delimited list of properties that specifies the order in which the result set should be sorted. To have a property sorted in descending order, use the DESC keyword after the property name.
- **Name:** rowcap · **In:** Query · **Required?:** No · **Description:** This parameter specifies how many records are to be retrieved in each request. These are the valid values:
  - **-1**\- This specifies that the system default record cap is to be used. This is typically **200**, but it can be any number as set by the system administrator.
  - **0** \- This value specifies that all records are to be retrieved, regardless of any record cap settings.
  - Any other positive integer specifies the number of records that are to be retrieved.
- **Name:** distinct · **In:** Query · **Required?:** No · **Description:** This parameter specifies that a set of data that represents only distinct combinations of requested properties is to be returned.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data

```
[
   "jdelacruz",
   "jdoe"
]
```

### Example

This example code returns a list of values for the specified property.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string prop = "Username";
   string filter = "EditLevel%20LIKE%202";
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/jsonlist/{ido}/{prop}/adv?filter={filter}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## UpdateItem

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/pbk1576100793499.html

The UpdateItem API inserts updates a single record in a specified IDO collection.

\[Image: UpdateItem\]

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<?xml version="1.0"?>
<IDOUpdateItem
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://www.infor.com">
  <Action>Update</Action>
  <ItemId>PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.930] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]</ItemId>
  <Properties>
    <UpdateProperty>
      <IsNull>false</IsNull>
      <Modified>true</Modified>
      <Name>UserDesc</Name>
      <Value>John Doe Sr.</Value>
    </UpdateProperty>
  </Properties>
</IDOUpdateItem>
```

### Request data in JSON format

```
{
   "Action": 2,
   "ItemId": "PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.930] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]",
   "Properties": [
      {
         "IsNull": false,
         "Modified": true,
         "Name": "UserDesc",
         "Value": "John Doe Sr."
      }
   ]
}
```

### Response data in XML format

```
<?xml version="1.0"?>
<MGRestUpdateResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Update successful.</Message>
  <MessageCode>201</MessageCode>
</MGRestUpdateResponse>
```

### Response data in JSON format

```
{
   "Message": "Update successful.",
   "MessageCode": 201
}
```

### Example

This example code updates the description of user **jdoe**.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string requestUrl = $"http://localhost/IDORequestService/MGRESTService.svc/xml/{ido}/updateitem";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002…5vl903teP0jSDwkFs" );
 
   UpdateProperty userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "John Doe Sr.",
      IsNull = false,
      Modified = true
   };
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Update,
      Properties = new[] { userDesc },
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.930] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]"
   };
 
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItem.GetType() );
      serializer.WriteObject( writer, idoItem );
   }
 
   // pass the IDOUpdateItem as the request data and send the update request
   HttpResponseMessage response = client.PutAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## UpdateItem with refresh

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jyn1576143889823.html

The UpdateItem with refresh API inserts updates a single record in a specified IDO collection and then refreshes the collection.

\[Image: UpdateItem with refresh\]

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.
- **Name:** refresh · **In:** Query · **Required?:** No · **Description:** This parameter provides the instruction to refresh the collection. Supply either of these values:
  - **ALL** \- Refreshes the entire collection and all of its properties.
  - **PROPS** \- Refreshes only the IDO properties.
- **Name:** props · **In:** Query · **Required?:** No · **Description:** This is a comma-delimited list of the properties to refresh.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<?xml version="1.0"?>
<IDOUpdateItem
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://www.infor.com">
  <Action>Update</Action>
  <ItemId>PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.930] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]</ItemId>
  <Properties>
    <UpdateProperty>
      <IsNull>false</IsNull>
      <Modified>true</Modified>
      <Name>UserDesc</Name>
      <Value>John Doe Sr.</Value>
    </UpdateProperty>
  </Properties>
</IDOUpdateItem>
```

### Request data in JSON format

```
{
   "Action": 2,
   "ItemId": "PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.930] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]",
   "Properties": [
      {
         "IsNull": false,
         "Modified": true,
         "Name": "UserDesc",
         "Value": "John Doe Sr."
      }
   ]
}
```

### Response data in XML format

```
<?xml version="1.0"?>
<MGRestUpdateResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Update successful.</Message>
  <MessageCode>201</MessageCode>
</MGRestUpdateResponse>

```

### Response data in JSON format

```
{
   "Message": "Update successful.",
   "MessageCode": 201
}
```

### Example

This example code updates the description of user **jdoe**.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string refresh = "ALL";
   string props = "UserDesc";
   string requestUrl = $"http://localhost/IDORequestService/MGRESTService.svc/{responsetype}/{ido}/updateitem/adv?refresh={refresh}&props={props}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002…5vl903teP0jSDwkFs" );
 
   UpdateProperty userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "John Doe Sr.",
      IsNull = false,
      Modified = true
   };
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Update,
      Properties = new[] { userDesc },
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.930] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]"
   };
 
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItem.GetType() );
      serializer.WriteObject( writer, idoItem );
   }
 
   // pass the IDOUpdateItem as the request data and send the update request
   HttpResponseMessage response = client.PutAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## UpdateItems

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/fhk1576188946755.html

The UpdateItems API inserts updates multiple records in a specified IDO collection.

\[Image: UpdateItems\]

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<?xml version="1.0"?>
<?xml version="1.0"?>
<ArrayOfIDOUpdateItem
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://www.infor.com">
  <IDOUpdateItem>
    <Action>Update</Action>
    <ItemId>PBT=[UserNames] UserNames.DT=[2019-07-24 13:42:57.280] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>UserDesc</Name>
        <Value>John Doe Sr.</Value>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
  <IDOUpdateItem>
    <Action>Update</Action>
    <ItemId>PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.960] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>UserDesc</Name>
        <Value>Will Kevin Smith</Value>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
</ArrayOfIDOUpdateItem>
```

### Request data in JSON format

```
 [
   {
      "Action": 2,
      "ItemId": "PBT=[UserNames] UserNames.DT=[2019-07-24 13:42:57.280] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": true,
            "Name": "UserDesc",
            "Value": "John Doe Sr."
         }
      ]
   },
   {
      "Action": 2,
      "ItemId": "PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.960] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": true,
            "Name": "UserDesc",
            "Value": "Will Kevin Smith"
         }
      ]
   }
]
```

### Response data in XML format

```
<?xml version="1.0"?>
<MGRestUpdateResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Update successful.</Message>
  <MessageCode>201</MessageCode>
</MGRestUpdateResponse>
```

### Response data in JSON format

```
{
   "Message": "Update successful.",
   "MessageCode": 201
}
```

### Example

This example code updates the description of users **jdoe** and **wsmith**.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string requestUrl = $"http://localhost/IDORequestService/MGRESTService.svc/xml/{ido}/updateitems";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002…5vl903teP0jSDwkFs" );
 
   List<IDOUpdateItem> idoItems = new List<IDOUpdateItem>();
 
   UpdateProperty userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "John Doe Sr.",
      IsNull = false,
      Modified = true
   };
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Update,
      Properties = new[] { userDesc },
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-07-24 13:42:57.280] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]"
   };
   idoItems.Add( idoItem );
 
   userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "Will Kevin Smith",
      IsNull = false,
      Modified = true
   };
 
   idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Update,
      Properties = new[] { userDesc },
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.960] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]"
   };
   idoItems.Add( idoItem );
 
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItems.GetType() );
      serializer.WriteObject( writer, idoItems );
   }
 
   // pass the List<IDOUpdateItem> as the request data and send the update request
   HttpResponseMessage response = client.PutAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## UpdateItems with refresh

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/zdh1576216050011.html

The UpdateItems with refresh API updates multiple records in a specified IDO collection and then refreshes the collection.

\[Image: UpdateItems with refresh\]

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** This is the name of the IDO collection.
- **Name:** refresh · **In:** Query · **Required?:** No · **Description:** This parameter provides the instruction to refresh the collection. Supply either of these values:
  - **ALL** \- Refreshes the entire collection and all of its properties.
  - **PROPS** \- Refreshes only the IDO properties.
- **Name:** props · **In:** Query · **Required?:** No · **Description:** This is a comma-delimited list of the properties to refresh.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |

### Request data in XML format

```
<?xml version="1.0"?>
<ArrayOfIDOUpdateItem
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://www.infor.com">
  <IDOUpdateItem>
    <Action>Update</Action>
    <ItemId>PBT=[UserNames] UserNames.DT=[2019-07-24 13:42:57.280] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>UserDesc</Name>
        <Value>John Doe Sr.</Value>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
  <IDOUpdateItem>
    <Action>Update</Action>
    <ItemId> PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.960] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]</ItemId>
    <Properties>
      <UpdateProperty>
        <IsNull>false</IsNull>
        <Modified>true</Modified>
        <Name>UserDesc</Name>
        <Value>Will Kevin Smith</Value>
      </UpdateProperty>
    </Properties>
  </IDOUpdateItem>
</ArrayOfIDOUpdateItem>
```

### Request data in JSON format

```
[
   {
      "Action": 2,
      "ItemId": "PBT=[UserNames] UserNames.DT=[2019-07-24 13:42:57.280] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": true,
            "Name": "UserDesc",
            "Value": "John Doe Sr."
         }
      ]
   },
   {
      "Action": 2,
      "ItemId": "PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.960] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]",
      "Properties": [
         {
            "IsNull": false,
            "Modified": true,
            "Name": "UserDesc",
            "Value": "Will Kevin Smith"
         }
      ]
   }
]
```

### Response data in XML format

```
<?xml version="1.0"?>
<MGRestUpdateResponse
	xmlns="http://schemas.datacontract.org/2004/07/"
	xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Message>Update successful.</Message>
  <MessageCode>201</MessageCode>
</MGRestUpdateResponse>
```

### Response data in JSON format

```
{
   "Message": "Update successful.",
   "MessageCode": 201
}
```

### Example

This example code updates the descriptions of users **jdoe** and **wsmith**, and then returns the updated property values.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string ido = "UserNames";
   string refresh = "ALL";
   string props = "UserDesc";
   string requestUrl = $"http://localhost/IDORequestService/MGRESTService.svc/xml/{ido}/updateitems/adv?refresh={refresh}&props={props}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002…5vl903teP0jSDwkFs" );
 
   List<IDOUpdateItem> idoItems = new List<IDOUpdateItem>();
 
   UpdateProperty userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "John Doe Sr.",
      IsNull = false,
      Modified = true
   };
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Update,
      Properties = new[] { userDesc },
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-07-24 13:42:57.280] UserNames.ID=[4b5b7da7-dd7c-47d7-8746-2ce193bfc43a]"
   };
   idoItems.Add( idoItem );
 
   userDesc = new UpdateProperty
   {
      Name = "UserDesc",
      Value = "Will Kevin Smith",
      IsNull = false,
      Modified = true
   };
 
   idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Update,
      Properties = new[] { userDesc },
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-07-24 13:28:51.960] UserNames.ID=[3faaaaab-47ef-4643-8255-756976238911]"
   };
   idoItems.Add( idoItem );
 
   XDocument xdoc = new XDocument( new XDeclaration( "1.0", "utf-8", "yes" ) );
   using ( XmlWriter writer = xdoc.CreateWriter() )
   {
      DataContractSerializer serializer = new DataContractSerializer( idoItems.GetType() );
      serializer.WriteObject( writer, idoItems );
   }
 
 
   // pass the List<IDOUpdateItem> as the request data and send the update request
   HttpResponseMessage response = client.PutAsync( requestUrl, new StringContent( xdoc.ToString(), Encoding.UTF8, "application/xml" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class IDOUpdateItem
{
   public UpdateAction Action { get; set; }
   public string ItemId { get; set; }
   public int ItemNo { get; set; }
   public UpdateProperty[] Properties { get; set; }
   public UpdateLocking UpdateLocking { get; set; }
}
 
public class UpdateProperty
{
   public string Name { get; set; }
   public string Value { get; set; }
   public string OriginalValue { get; set; }
   public bool Modified { get; set; }
   public bool IsNull { get; set; }
}
 
public enum UpdateAction
{
   Insert = 1,
   Update = 2,
   Delete = 4
}
 
public enum UpdateLocking
{
   Row = 0,
   Property = 1
}
```

## Upload File Stream

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/xau1576253393169.html

The Upload File Stream API uploads a streamed file to an IDO collection. The IDO collection must have a property for storing binary data.

\[Image: UploadFileStream\]

**Note:** This topic is for REST Version 1\. There is also an API for [REST Version 2](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/xwi1576872161554.html).

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |
| X-IdoName | This is the name of the IDO collection. |
| X-Property | This is the name of the IDO property. |
| X-RowPointer | This is the value of the IDO row pointer. |

### Request data

The request object is an unencoded binary stream from a file.

### Response data in XML format

```
<MGRestIOResponse>
  <Success>true</Success>
  <Message>
    Initializing file save;
    Updating BLOB to IDO;
    Updated item count: 1;
    Upload complete;
  </Message>
  <MessageCode>700</MessageCode>
</MGRestIOResponse>
```

### Response data in JSON format

```
{
   "Message": "\"Initializing file save",
   "Updating" "BLOB",
   "to" "IDO",
   "Updated" "item",
   "count": 1,
   "Upload" "complete\",",
   "MessageCode": 700,
   "Success": true
}
```

### Example

This example code uploads a user image to the users table.

```
string xml = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/io/xml/uploadfile";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   client.DefaultRequestHeaders.Add( "X-IdoName", "UserNames" );
   client.DefaultRequestHeaders.Add( "X-Property", "UserImage" );
   client.DefaultRequestHeaders.Add( "X-RowPointer", "2807a627-577b-462e-9494-aee568152c54" );
 
   // select an image or a file and include it as the request payload
   OpenFileDialog dialog = new OpenFileDialog();
   byte[] file = new byte[] { };
 
   if ( dialog.ShowDialog() == DialogResult.OK )
   {
      file = File.ReadAllBytes( dialog.FileName );
   }
 
   // pass the file as the request data and send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl, new ByteArrayContent( file ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```

## Upload Document Object

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/fcc1576561502922.html

The Upload Document Object API uploads a streamed file to an IDO document object.

\[Image: Upload Document Object\]

**Note:** This topic is for REST Version 1\. There is also an API for [REST Version 2](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/qnh1577907419772.html).

### Parameters

- Name · In · Required? · Description
- **Name:** responsetype · **In:** Path · **Required?:** Yes · **Description:** Response request data format: Supply any of these values:
  - xml
  - json

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | This is the name of a configuration that is available on the application server. This is required only when using the Mongoose API through the ION API. |
| X-IdoName | This is the name of the IDO collection. |
| X-RowPointer | This is the value of the IDO row pointer. |
| X-DocName | This is the name of the document object. |
| X-DocExt | This is the file extension used for the document object. |
| X-DocDesc | This is the description of the document object. |

### Request data

The request object is an unencoded binary stream of a file.

### Response data in XML format

```
<MGRestIOResponse>
  <Success>true</Success>
  <Message>
    Match count: 6
    Updated item count: 1
  </Message>
  <MessageCode>700</MessageCode>
</MGRestIOResponse>
```

### Response data in JSON format

```
{
   "Message": "Match count: 6 Updated item count: 1",
   "MessageCode": 700,
   "Success": true
}
```

### Example

This example code uploads a file and attaches it as a document object of the referenced IDO and IDO row pointer.

```
string xml = string.Empty;
 
using ( var client = new HttpClient() )
{
   // optionally, you can use json as the response type
   string requestUrl = $"http://server/IDORequestService/MGRESTService.svc/io/xml/uploaddocobj";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   client.DefaultRequestHeaders.Add( "X-IdoName", "UserNames" );
   client.DefaultRequestHeaders.Add( "X-RowPointer", "2807a627-577b-462e-9494-aee568152c54" );
   client.DefaultRequestHeaders.Add( "X-DocName", "WeeklyReport" );
   client.DefaultRequestHeaders.Add( "X-DocExt", "docx" );
   client.DefaultRequestHeaders.Add( "X-DocDesc", "Weekly Report" );
 
   // select an image or a file and include it as the request payload
   OpenFileDialog dialog = new OpenFileDialog();
   byte[] file = new byte[] { };
 
   if ( dialog.ShowDialog() == DialogResult.OK )
   {
      file = File.ReadAllBytes( dialog.FileName );
   }
 
   // pass the file as the request data and send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl, new ByteArrayContent( file ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      xml = result.Result;
   }
}
```
