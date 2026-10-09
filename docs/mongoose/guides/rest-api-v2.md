# REST API Version 2 (generic and dynamic endpoints)

> Guide: Infor Mongoose IDO Integration with External Applications Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ook1576736580874.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Version 2

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ook1576736580874.html

This section presents the updated version of the Mongoose REST API.

### Base URL

All endpoints are accessible using HTTP(s) and are located at this URL:

http://\<`serverName`\>/IDORequestService/ido

### Generic API documentation

Generic swagger API documentation is available for the Mongoose REST API. This document fully describes each API operation and includes both required and optional parameters, Request Data examples, and so on. You can access this document using this endpoint:

http://\<`serverName`\>/IDORequestService/ido/api-docs

### Dynamic API documentation

Dynamic swagger collection documentation is also available for the REST API. This set contains references to individual IDO swagger documents which are generated using the **REST API Wizard**. You can access this set using this endpoint:

http://`serverName`/IDORequestService/ido/dynamic/api-docs-collection

Swagger API documentation for a specific IDO can also be accessed. The endpoint for this document returns an IDO swagger document that contains custom APIs specific for the given IDO. This document is generated using the **REST API Wizard**. You can access the document using this endpoint:

http://`serverName`/IDORequestService/ido/dynamic/api-docs-collection/`IDOName`

### Content type

Each endpoint requires the request and response data to either be empty or JSON-formatted. No other content types are supported.

## Version 2 Generic API endpoints

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ima1576737932037.html

This list shows the Mongoose REST version 2 generic API endpoints:

- DownloadDocumentObject
- DownloadFileStream
- FireAESEvent
- GetConfigurations
- GetDocumentObjects
- GetPropertyInformation
- GetSecurityToken
- InvokeIDOMethod
- LoadCollection
- UpdateCollection
- UploadDocumentObject
- UploadFileStream

All API calls, except GetConfigurations and GetSecurityToken APIs, must include an Authorization header that contains either a Mongoose security token or a valid OAuth 2.0 bearer token, depending on how the API is being called.

We recommend that you use the presented prototypes as examples when you create your API calls. All these prototype examples use C# code.

## DownloadDocumentObject

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jju1577916730177.html

The DownloadDocumentObject API downloads a streamed file from an IDO document object.

**Note:** This topic is for REST version 2\. See [DownloadDocumentObject](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/gzu1576647501472.html) for the REST version 1\.

- GET · `/docobj/{ido}`
- **GET / /docobj/{ido}:** http://localhost/IDORequestService/ido/docobj/UserNames?rowPointer\=8c66c936-d348-4c13-8684-69bc6fa10473\&name\=WeeklyReport\&refseq\=4

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the IDO collection |
| rowPointer | Query | Yes | The value of an IDO row pointer |
| name | Query | No | The name of the document object **Note:** This parameter is optional if the **refseq** parameter is used. |
| refseq | Query | No | The reference sequence number of the document object **Note:** This parameter is optional if the **name** parameter is used. |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data

Unencoded binary stream of the file, with content type of application/octet-stream.

### Example

This example code downloads a document object from the referenced IDO and IDO rowpointer.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string rowpointer = "4d6cb1eb-e4fc-4e12-aae8-95ff1086ee8c";
   string name = "WeeklyReport";
   string requestUrl = $"http://server/IDORequestService/ido/docobj/{ido}?rowPointer={rowpointer}&name={name}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## DownloadFileStream

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/oeb1576878767858.html

The DownloadFileStream API downloads a streamed file from an IDO collection. The IDO collection must have a property for storing binary data.

**Note:** This topic is for REST version 2\. See [DownloadFileStream](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/lau1576273010173.html) for the REST version 1\.

- GET · `/file/{ido}`
- **GET / /file/{ido}:** http://localhost/IDORequestService/ido/file/UserNames?property\=UserImage\&rowpointer\=4d6cbleb-e4fc-4e12-aae8-95ff1086ee8c

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the IDO collection |
| property | Query | Yes | The name of an IDO property for storing binary data |
| rp | Query | Yes | The value of an IDO row pointer |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data

Unencoded binary stream of the file, with content-type of application/octet-stream.

### Example

This example code downloads a user image from the users table.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string property = "UserImage";
   string rowpointer = "4d6cb1eb-e4fc-4e12-aae8-95ff1086ee8c";
   string requestUrl = $"http://server/IDORequestService/ido/file/{ido}?property={property}&rowPointer={rowpointer}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   // send the get request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## FireAESEvent

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/zzz1576869775308.html

The FireAESEvent fires an Application Event System (AES) event.

**Note:** This topic is for REST version 2\. See [FireAESEvent](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/iju1576220114963.html) for the REST version 1\.

- POST · `/aes/{eventname}`
- **POST / /aes/{eventname}:** http://localhost/IDORequestService/ido/aes/DivideNumbers

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| eventname | Path | Yes | The name of the AES event |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

```
[
      {
         "Name": "Num1",
         "Return": false,
         "Value": 120
      },
   {
      "Name": "Num2",
      "Return": false,
      "Value": 5
   },
      {
         "Name": "Quotient",
         "Return": true
      }
]
```

### Response data

```
{
  "Message": null,
  "Success": true,
  "EventName": "DivideNumbers",
  "Parameters": [
    {
      "Name": "Quotient",
      "Value": "1",
      "Return": true
    },
   {
      "Name": "Infobar",
      "Value": "success",
      "Return": true
   }
  ]
}
```

### Example

This example code executes an AES event that divides two numbers and returns the quotient as an output parameter.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string eventname = "DivideNumbers";
   string requestUrl = $"http://server/IDORequestService/ido/aes/{eventname}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   AESEventParameter num1 = new AESEventParameter
   {
      Name = "Num1",
      Return = false,
      Value = "4"
   };
 
   AESEventParameter num2 = new AESEventParameter
   {
      Name = "Num2",
      Return = false,
      Value = "4"
   };
 
   AESEventParameter[] parameters = new[] { num1, num2 };
 
   // pass the array of parameters as the request data
   string contentStr = JsonConvert.SerializeObject( parameters );
 
   // send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl.ToString(), new StringContent( contentStr, Encoding.UTF8, "application/json" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

This class was used with the foregoing code snippet:

```
public class AESEventParameter
{
   public string Name { get; set; }
   public string Value { get; set; }
   public bool Return { get; set; }
}
```

## GetConfigurations

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/kes1576788430178.html

The GetConfigurations API returns a list of the application configuration names available on the server.

**Note:** This topic is for REST version 2\. See [GetConfigurations](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/neq1573184565846.html) for the REST version 1\.

- GET · `/configurations`
- **GET / /configurations:** http://localhost/IDORequestService/ido/configurations?configgroup\=DEV

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| configgroup | Query | No | The name of a configuration group This parameter is used to get the configurations from a specific configuration group. |

### Headers

None

### Request data

None

### Response data

```
{
   "Message": null,
   "Success": true,
   "Configurations": [
      "CSI_DALS",
      "CSI_EMEA",
      "CSI_LA"
   ]
}
```

### Example

This example code retrieves an array of configuration names from a specified configuration group using the ConfigServer.aspx page in IDORequestService.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string configGroup = "DEV";
   string requestUrl = $"http://server/IDORequestService/ido/configurations?configgroup={configGroup}";
 
   // send the get request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      // get the response containing the configuration list
      json = result.Result;
   }
}
```

## GetDocumentObjects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ycq1577906163875.html

The GetDocumentObjects API returns a list of document objects.

- GET · `/docobj/list`
- **GET / /docobj/list:** http://localhost/IDORequestService/ido/docobj/list?ido\=UserNames

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Query | No | The name of the IDO collection that contains the document objects |
| rowPointer | Query | No | The value of the IDO row pointer |
| docName | Query | No | The name of the document object to retrieve |
| docExt | Query | No | The file extension used for the document object to be retrieved |
| refSeq | Query | No | The reference sequence of the document object to retrieve |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data

```
{
  "Documents": [
   {
      "TableName": "Demo_Products",
      "TableRowPointer": "d629ebd6-974c-4969-be2e-145dd8d84da8",
      "DocumentName": "ultimate_choco_chip_cookies",
      "Description": null,
      "DocumentObject": "/9j/4AAQSkZJRgABAQAASABIAAD…Z",
      "DocumentExtension": "jpg",
      "MediaType": "image/jpeg",
      "RefSequence": "1",
      "_ItemId": "PBT=[DocumentObjectAndRefView] doc.ID=[0c4b201a-5ecd-4bf9-a242-86bf4c177727] doc.DT=[2018-10-12 09:52:12.153]"
   },
    {
      "TableName": "DemoSubmissionComments",
      "TableRowPointer": "67d4b6c8-3b67-4269-8f4f-7d7a7ee81f71",
      "DocumentName": "ayala_cinema_tickets_1508950029_6fccded3",
      "Description": null,
      "DocumentObject": "/9j/4AAQSkZJRgABAQAASABIAAD…Z",
      "DocumentExtension": "jpg",
      "MediaType": "image/jpeg",
      "RefSequence": "1",
      "_ItemId": "PBT=[DocumentObjectAndRefView] doc.ID=[d84729d2-8023-4624-8f02-5598def50073] doc.DT=[2018-10-12 10:07:34.433]"
    }
  ],
  "Success": true,
  "Message": null
}
```

### Example

This example code retrieves a list of document objects attached to the UserNames IDO.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/ido/docobj/list?ido={ido}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
   
   // send the get request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## GetPropertyInformation

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/mvx1576825661857.html

The GetPropertyInformation API returns a list of properties and their attributes from an IDO collection.

- GET · `/info/{ido}`
- **GET / /info/{ido}:** http://localhost/IDORequestService/ido/info/UserNames

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the IDO collection |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by the ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data

```
{
    "Message": null,
    "Success": false,
   "Keys": [
      "UserId"
   ],
    "Properties": [
        {
            "BooleanFalseValue": "",
            "BooleanTrueValue": "",
            "CaseFormat": "",
            "ClrTypeName": "Decimal",
            "ColumnDataType": "TokenType",
            "DataType": "Decimal",
            "DateFormat": "",
            "DecimalPos": 0,
            "DefaultIMECharset": "",
            "DefaultValue": "",
            "DomainIDOName": "",
            "DomainListProperties": "",
            "DomainProperty": "",
            "InputMask": "",
            "IsItemWarnings": false,
            "JustifyFormat": "R",
            "LabelStringID": "sUserID",
            "Length": 11,
            "Name": "UserId",
            "PropertyClass": "Token",
            "RORecord": false,
            "ReadOnly": true,
            "Required": true
        },
        { ... }
    ],
    "SubCollections": [
        {
            "IDOName": "MGCore.UserGroupMaps",
            "LinkBy": [
                {
                    "Child": "UserId",
                    "Parent": "UserId"
                }
            ],
            "Name": "UserGroupMaps"
        },
        {  ... }
    ]
}
```

### Example

This example code retrieves an array of properties and their attributes from a specified IDO.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/ido/info/{ido}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   // send the get request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## GetSecurityToken

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/cnb1576794444478.html

The GetSecurityToken API returns a Mongoose security token for a specific user, which can be used to authenticate requests when calling the API directly. You can also pass credentials in request headers, which is recommended for usernames and passwords with special characters.

**Note:** This topic is for REST version 2\. See [GetSecurityToken](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/cld1573187564306.html) for the REST version 1\.

### Endpoint

- **Path-based**

  - GET · `/token/{config}/{username}/{password}`
  - **GET / /token/{config}/{username}/{password}:** http://localhost/IDORequestService/ido/token/CSI\_DALS/sa/Passwe1rd
- **Header-based**

  - GET · `/token/{config}\ `
  - **GET / /token/{config}\\:** http://localhost/IDORequestService/ido/token/CSI\_DALS

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| config | Path | Yes | The name of a configuration available on the application server |
| username | Path/Header | Yes | The username for the Mongoose user |
| password | Path/Header | Required for Header-based request | The password for the Mongoose user |

### Headers

None

### Request data

None

### Response data

```
{
   "Message": null,
   "Success": true,
   "Token": "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…=="
}
```

### Example

This example code retrieves a Mongoose security token that can be used in succeeding requests.

```
string json = string.Empty;
 
using ( var client = new HttpClient() )
{
   string config = "MG_DEV";
   string username = "sa";
   string password = string.Empty;
   string requestUrl = $"http://server/IDORequestService/ido/token/{config}/{username}/{password}";
 
   // send the get request
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      // get the response containing the token
      json = result.Result;
   }
}
```

## InvokeIDOMethod

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/cxe1576868620363.html

The InvokeIDOMethod API returns a list of properties and their attributes from an IDO collection.

- POST · `/invoke/{ido}`
- **POST / /invoke/{ido}:** http://localhost/IDORequestService/invoke/UserNames?method\=GetUserAttributes

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the IDO collection |
| method | Query | Yes | The name of the IDO method |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by the ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

```
[
   "sa",
   null,
   null,
   null,
   null
]
```

### Response data

```
{
   "Message": null,
   "Success": true,
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

### Example

This example code determines the user attributes of user **sa** using the IDO method GetUserAttributes.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string method = "GetUserAttributes";
   string requestUrl = $"http://server/IDORequestService/ido/invoke/{ido}?method={method}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   string[] parameters = new[] { "sa", "", "", "", "" };
 
   // pass the array of parameters as the request data
   string contentStr = JsonConvert.SerializeObject( parameters );
   
   // send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl.ToString(), new StringContent( contentStr, Encoding.UTF8, "application/json" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## LoadCollection

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/dwn1576796415221.html

The LoadCollection API is a basic load collection API that returns a set of records from an IDO collection.

**Note:** This topic is for REST version 2\. See [LoadCollection](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/scb1573247746553.html) for the REST version 1\.

- GET · `/load/{ido}`
- **GET / /load/{ido}:** http://localhost/IDORequestService/ido/load/UserNames?properties\=UserId,Username,UserDesc

### Parameters

- Name · In · Required? · Description
- **Name:** ido · **In:** Path · **Required?:** Yes · **Description:** The name of the IDO collection
- **Name:** properties · **In:** Query · **Required?:** No · **Description:** A comma-delimited list of properties for which to return values

  You can also use an asterisk (\*) to include all properties except subcollection properties.

  If this parameter is excluded or left blank, the server retrieves data with all the parameters.
- **Name:** filter · **In:** Query · **Required?:** No · **Description:** This parameter restricts the result set. Specific approved SQL functions are allowed in filter expressions. Currently, the supported functions are `GETDATE()` and `DATEADD()`. All other SQL functions, including aggregate functions are blocked.

  Unsupported functions, `GROUP BY`, `HAVING`, sub-queries, or any non-white-listed expression will result in an `IllegalFilterException`.
- **Name:** orderby · **In:** Query · **Required?:** No · **Description:** A comma-delimited list of properties that specifies how the result set is to be sorted

  Use the `DESC` keyword after a property name to sort that property in descending order.
- **Name:** recordcap · **In:** Query · **Required?:** No · **Description:** Determines how many records are to be retrieved in one request

  This list shows the valid values:

  - **-1** returns 200 records.
  - **0** returns all records.

  Any other number specifies the number of records to be retrieved.
- **Name:** distinct · **In:** Query · **Required?:** No · **Description:** Specifies that the set of data to be returned must represent only distinct combinations of properties
- **Name:** clm · **In:** Query · **Required?:** No · **Description:** The name of a custom load method

  This parameter works in conjunction with the clmparam parameter.
- **Name:** clmparam · **In:** Query · **Required?:** No · **Description:** A comma-delimited list of custom load method parameters
- **Name:** loadtype · **In:** Query · **Required?:** No · **Description:** This parameter is used for load collection paging.

  This parameter is used in conjunction with the bookmark parameter.

  This list shows the valid values:

  - FIRST
  - NEXT
  - PREV
  - LAST
- **Name:** bookmark · **In:** Query · **Required?:** No · **Description:** This parameter is used for the bookmark ID. Bookmark IDs serve as a reference when you go to the next or previous records in a collection.

  The bookmark value uses this format:

  `<B><P><p>UserId</p></P><D><f>false</f></D><F><v>1</v></F><L><v>2</v></L></B> `

  where:

  - `<B></B>` is the bookmark envelope tag.
  - `<P></P>` is the property name of the primary key.
  - `<D></D>` is a flag that, if True, specifies that records are to be read in descending order.
  - `<f></f>` is the value of the `<D></D>` element. This value can be True or False.
  - `<F></F>` is the first row in the collection.
  - `<L></L>` is the last row in the collection.
  - `<v><v>` is the value of the row for the given property name.

  See [Example: Bookmark IDs in LoadCollection responses](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ooc1576799884898.html).
- **Name:** pqc · **In:** Query · **Required?:** No · **Description:** Specifies a method to execute once for each row in the result set after the query is completed

  This parameter is the equivalent of the Design Mode PQ option in **Load/Save Overrides** property and uses the same syntax.
- **Name:** readonly · **In:** Query · **Required?:** No · **Description:** When set to True, this parameter specifies that retrieved records must not include the \_ItemID property, which is substantial for update and delete operations.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by the ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server. This header is required only when using the Mongoose API through the ION API. |

### Request data

None

### Response data

```
{
  "Items": [
   {
      "UserId": "1",
      "Username": "sa",
      "UserDesc": "System Admin"
   },
    {
      "UserId": "2",
      "Username": "jdoe",
      "UserDesc": "John Doe"
    }
  ],
  "Bookmark": "<B><P><p>CollectionName</p><p>DevelopmentFlag</p></P><D><f>false</f><f>false</f></D><F><v>ABDataServices</v><v>0</v></F><L><v>ABProjectRoles</v><v>0</v></L></B>",
  "MoreRowsExist": true,
  "Success": true,
  "Message": null
}
```

### Example

This example code retrieves records that contain the user ID, username, and user description from the Users table.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/ido/load/{ido}?properties=UserId,Username,UserDesc";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );

   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## UpdateCollection

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/rrd1576802617893.html

The UpdateCollection API is used to insert, update, or delete one or more records from an IDO colleciton.

- POST · `/update/{ido}`
- **POST / /update/{ido}:** http://localhost/IDORequestService/ido/update/UserNames?efresh\=true

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the IDO collection |
| refresh | Query | No | Instructs the system to refresh the collection after the update is complete Valid values are True or False. |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by the ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data for an Insert action

```
{
  "Changes": [
   {
      "Action": 1,
      "ItemId": "PBT=[UserNames]",
      "Properties": [
         {
            "Name": "Username",
            "Value": "jdelacruz",
            "Modified": true,
            "IsNull": false
         },
         {
            "Name": "UserDesc",
            "Value": "Juan Dela Cruz",
            "Modified": true,
            "IsNull": false
         }
      ],
      "UpdateLocking": 1
   }
  ]
}
```

### Request data for an Update action

```
{
   "Changes": [
      {
         "Action": 2,
         "ItemId": "PBT=[UserNames] UserNames.DT=[2018-10-02 15:39:02.060] UserNames.ID=[4c9a96d0-ba3c-4de4-8657-6d262f9dcd3f]",
         "Properties": [
            {
               "Name": "UserDesc",
               "Value": "John Doe Sr.",
               "Modified": true,
               "IsNull": false
            }
         ],
         "UpdateLocking": 1
      }
   ]
}
```

**Note:** If `"ItemId"` is empty, then the key properties are used to update the row, and optimistic locking is not used. All key properties must be included in the request when `"ItemId"` is empty.

### Request data for a Delete action

```
{
   "Changes": [
 
      {
         "Action": 4,
         "ItemId": "PBT=[UserNames] UserNames.DT=[2018-12-14 13:52:27.737] u.ID=[265df7d2-802c-4582-a774-a81b675a91a1]"
      }
   ]
}
```

**Note:** If `"ItemId"` is empty, then the key properties are used to update the row, and optimistic locking is not used. All key properties must be included in the request when `"ItemId"` is empty.

### Response data for an Insert action

```
{
    "Message": null,
    "Success": true,
    "RefreshItems": [
      {
         "Action": 1,
         "ItemId": "PBT=[UserNames] UserNames.DT=[2019-05-03 13:24:07.080] UserNames.ID=[dd896b24-e1dd-47df-ad4f-f0378243c202]",
         "ItemNo": 0,
         "Properties": [
            {
               "IsNestedCollection": false,
               "IsNull": false,
               "Modified": false,
               "Name": "Username",
               "OriginalValue": null,
               "Value": "jdelacruz"
            },
            {
               "IsNestedCollection": false,
               "IsNull": false,
               "Modified": false,
               "Name": "UserDesc",
               "OriginalValue": null,
               "Value": "Juan Dela Cruz"
            }
         ],
         "UpdateLocking": 0
      }
    ]
}
```

### Response data for an Update action

```
{
   "Message": null,
   "Success": true,
   "RefreshItems": [
      {
         "Action": 2,
         "ItemId": "PBT=[UserNames] UserNames.DT=[2019-05-03 13:24:07.080] UserNames.ID=[dd896b24-e1dd-47df-ad4f-f0378243c202]",
         "ItemNo": 0,
         "Properties": [
            {
               "IsNestedCollection": false,
               "IsNull": false,
               "Modified": false,
               "Name": "UserDesc",
               "OriginalValue": null,
               "Value": "John Doe Sr."
            }
         ],
         "UpdateLocking": 0
      }
   ]
}
```

### Response data for a Delete action

```
{
   "Message": null,
   "Success": true,
   "RefreshItems": null
}
```

### Example 1 \- Insert using UpdateCollection

This example code inserts **jdelacruz** as a new user.

```
string json = string.Empty;
 
using ( var client = new HttpClient() )
{
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/ido/update/{ido}?refresh=true";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
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
 
   UpdateCollectionRequest request = new UpdateCollectionRequest { Changes = new[] { idoItem } };
 
   // pass the UpdateCollectionRequest as the request data
   string contentStr = JsonConvert.SerializeObject( request );
 
   // send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl.ToString(), new StringContent( contentStr, Encoding.UTF8, "application/json" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

### Example 2 \- Update using UpdateCollection

This example code updates the description of user **jdoe**.

```
string json = string.Empty;
 
using ( var client = new HttpClient() )
{
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/ido/update/{ido}?refresh=true";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
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
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-05-03 13:24:07.080] UserNames.ID=[f33ef708-19bb-4ab9-aade-88a6e8853742]"
   };
 
   UpdateCollectionRequest request = new UpdateCollectionRequest { Changes = new[] { idoItem } };
 
   // pass the UpdateCollectionRequest as the request data
   string contentStr = JsonConvert.SerializeObject( request );
 
   // send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl.ToString(), new StringContent( contentStr, Encoding.UTF8, "application/json" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

### Example 3 \- Delete using UpdateCollection

This example code deletes the user with the given \_ItemID property value.

```
string json = string.Empty;
 
using ( var client = new HttpClient() )
{
   string ido = "UserNames";
   string requestUrl = $"http://server/IDORequestService/ido/update/{ido}?refresh=true";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
   IDOUpdateItem idoItem = new IDOUpdateItem
   {
      Action = UpdateAction.Delete,
      ItemId = "PBT=[UserNames] UserNames.DT=[2019-05-03 13:24:07.080] UserNames.ID=[dd896b24-e1dd-47df-ad4f-f0378243c202]"
   };
 
   UpdateCollectionRequest request = new UpdateCollectionRequest { Changes = new[] { idoItem } };
 
   // pass the UpdateCollectionRequest as the request data
   string contentStr = JsonConvert.SerializeObject( request );
 
   // send the post request
   HttpResponseMessage response = client.PostAsync( requestUrl.ToString(), new StringContent( contentStr, Encoding.UTF8, "application/json" ) ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

You can use these classes to construct the Request Data as demonstrated in the previous code snippets:

```
public class UpdateCollectionRequest
{
   public IDOUpdateItem[] Changes { get; set; }
   public bool RefreshAfterSave { get; set; }
   public string CustomInsert { get; set; }
   public string CustomUpdate { get; set; }
   public string CustomDelete { get; set; }
}
 
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

## UploadDocumentObject

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/qnh1577907419772.html

The UploadDocumentObject API uploads a streamed file to an IDO document object.

**Note:** This topic is for REST version 2\. See [Upload Document Object](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/fcc1576561502922.html) for the REST version 1\.

- POST · `/docobj/{ido}`
- **POST / /docobj/{ido}:** http://localhost/IDORequestService/ido/docobj/UserNames?rowPointer\=8c66c936-d348-4c13-8684-69bc6fa10473\&name\=WeeklyReport\&desc\=Weekly%20Report\&ext\=xls

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the referenced IDO collection |
| itemid | Query | Yes | The value of the \_ItemID property for the document object |
| rowPointer | Query | No | The value of the referenced IDO row pointer **Note:** Use this parameter to upload a new document object and link the object to the referenced IDO and row pointer. |
| name | Query | No | The name of the document object |
| desc | Query | No | The description of the document object |
| ext | Query | No | The file extension for the document objects |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |

### Request data

Unencoded binary stream of the file.

### Response data

```
{
   "Message": null,
   "Success": true,
   "ItemId": "PBT=[DocumentObjectAndRefView] doc.ID=[7018e6d1-7397-466a-be43-17c52d51c3d6] doc.DT=[2018-11-22 09:30:16.643]"
}
```

### Example

This example code uploads a file and attaches it as a document object of the referenced IDO and IDO row pointer.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string rowpointer = "4d6cb1eb-e4fc-4e12-aae8-95ff1086ee8c";
   string requestUrl = $"http://server/IDORequestService/ido/docobj/{ido}?rowpointer={rowpointer}&name=WeeklyReport&desc=Weekly%20report%20for%20this%20week&ext=docx";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
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
      json = result.Result;
   }
}
```

## UploadFileStream

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/xwi1576872161554.html

The UploadFileStream API uploads a streamed file to an IDO collection. The IDO collection must have a property for storing binary data.

**Note:** This topic is for REST version 2\. Seer [Upload File Stream](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/xau1576253393169.html) for the REST version 1\.

- POST · `/file/{ido}`
- **POST / /file/{ido}:** http://localhost/IDORequestService/ido/file/UserNames?property\=UserImage\&itemId\=PBT\=\[UserNames\] UserNames.DT\=\[2018-09-0511:01:00.167\] UserNames.ID\=\[7d38e4fb-e1a8-4af7-936b-50accee5d35b\]

### Parameters

| Name | In | Required? | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the IDO collection |
| property | Query | Yes | The name of the IDO property to be used for storing binary data |
| itemid | Query | Yes | The value of the \_itemID property |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then a Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server This header is required only when using the Mongoose API through the ION API. |
| X-IdoName | The name of the IDO collection |
| X-Property | The name of the IDO property |
| X-RowPointer | The value of the IDO row pointer |

### Request data

Unencoded binary stream of the file.

### Response data

```
{
   "Message": null,
   "Success": true
}
```

### Example

This example code uploads a user image to the Users table.

```
string json = string.Empty;
 
using ( HttpClient client = new HttpClient() )
{
   string ido = "UserNames";
   string property = "UserImage";
   string itemid = "PBT=[UserNames] UserNames.DT=[2019-05-29 14:12:02.000] UserNames.ID=[4d6cb1eb-e4fc-4e12-aae8-95ff1086ee8c]";
   string requestUrl = $"http://server/IDORequestService/ido/file/{ido}?property={property}&itemid={itemid}";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQj…==" );
 
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
      json = result.Result;
   }
}
```

## Version 2 dynamic API endpoints

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/qix1658294567207.html

This list shows the Mongoose REST version 2 dynamic API endpoints:

- Get Swagger Collection Document
- Get IDO Swagger Document
- Execute IDO Swagger Document Get Operation
- Execute IDO Swagger Document Post Operation

If you consume these APIs directly from IDORequestService, you must include the X-Infor-MongooseConfig header. All API calls, except Get Swagger Collection Document and Get IDO Swagger Document, must include an Authorization header that contains a Mongoose security token.

If you consume these APIs from the ION API interface, all API calls, except Get Swagger Collection Document and Get IDO Swagger Document, must include the X-Infor-Mongoose Config header and the Authorization header that contains a valid OAuth2.0 bearer token.

If you consume these APIs in ION API through third-party applications, for example, Postman, you must include the X-Infor-MongooseConfig header and the Authorization header that contains a valid OAuth 2.0 bearer token.

We recommend that you use the presented prototypes as examples when you create your API calls. All these prototype examples use C# code.

## Get Swagger Collection Document

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/pqj1658295458551.html

The Get Swagger Collection Document API returns a swagger collection that contains references to individual IDO swagger documents.

- GET · `/dynamic/api-docs-collection`
- **GET / /dynamic/api-docs-collection:** http://localhost/IDORequestService/ido/dynamic/api-docs-collection?search\=UserNames

### Parameters

| Name | In | Required | Description |
| --- | --- | --- | --- |
| search | Query | No | Searches a string against the entity, category, swagger endpoint, or description within the swagger collection |
| pageNumber | Query | No | Specifies the page number If this parameter is excluded or left blank, the server defaults the value to 1\. |
| pageSize | Query | No | Specifies the number of items to show per page. If this parameter is excluded or left blank, the server defaults the value to 10\. |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server |

### Request data

None

### Response data

```
{
    "info": {
        "description": "Infor Mongoose",
        "title": "Infor Mongoose Swagger Collection",
        "version": "1.0"
    },
    "entityName": "Business Class",
    "entityType": "Business Class",
    "paging": {
        "total": 30,
        "pageNumber": 1,
        "pageSize": 30
    },
    "swaggerCollection": {
        "swagger": [
            {
                "category": "dynamic",
                "entity": "AccessAs",
                "desc": "Access As IDO",
                "swaggerEndpoint": "../api-docs-collection/AccessAs"
            },
            {
                "category": "dynamic",
                "entity": "ActiveBGTask",
                "desc": "ActiveBGTask",
                "swaggerEndpoint": "../api-docs-collection/ActiveBGTask"
            },
            {
                "category": "dynamic",
                "entity": "UserNames",
                "desc": "UserNames",
                "swaggerEndpoint": "../api-docs-collection/UserNames"
            }
        ]
    }
}
```

### Example

This example code retrieves the swagger collection that contains a list of IDO swagger document endpoints.

```
string json = string.Empty;
using ( HttpClient client = new HttpClient() )
{
   string requestUrl = $"http://localhost/IDORequestService/ido/dynamic/api-docs-collection";
 
   // provide the configuration name in the X-Infor-MongooseConfig header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
   "X-Infor-MongooseConfig",
   "Mongoose" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
} 
```

## Get IDO Swagger Document

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/pko1658298056899.html

The Get IDO Swagger Document API returns an IDO swagger document that contains strongly typed APIs. These strongly typed APIs are generated using the **REST API Wizard** for the specified IDO collection.

- GET · `/dynamic/api-docs-collection/{ido}`
- **GET / /dynamic/api-docs-collection/{ido}:** http://localhost/IDORequestService/ido/dynamic/api-docs-collection/UserNames

### Parameters

| Name | In | Required | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the IDO collection that is associated with the strongly typed API |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server |

### Request data

None

### Response data

```
{
   "swagger": "2.0",
   "info": {
      "description": "UserNames",
      "version": "v2",
      "title": "UserNames",
      "contact": {
         "name": "Infor",
         "url": "https://www.inforxtreme.com"
      }
   },
   "basePath": "/YEL1_DEV/MONGOOSE_DEV/IDORequestService/ido/dynamic",
   "tags": [
      {
         "name": "default",
         "description": ""
      }
   ],
   "schemes": [
      "https"
   ],
   "paths": {
      "/GetMyUserAttributes": {
         "post": {
            "tags": [
               "default"
            ],
            "summary": "GetMyUserAttributes",
            "description": "Get My User Attributes",
            "operationId": "GetMyUserAttributes",
            "consumes": [
               "application/json"
            ],
            "produces": [
               "application/json"
            ],
            "parameters": [
               {
                  "name": "X-Infor-MongooseConfig",
                  "in": "header",
                  "required": false,
                  "description": "Mongoose configuration to log into; required when using the service through ION API, not needed otherwise.",
                  "type": "string"
               }
            ],
            "responses": {
               "200": {
                  "description": "See Success and Message in the response for result status.",
                  "schema": {
                     "$ref": "#/definitions/InvokeMethodResponse"
                  }
               },
               "401": {
                  "$ref": "#/responses/Unauthorized"
               }
            }
         }
      },
      "/GetUserNames": {
         "get": {
            "tags": [
               "default"
            ],
            "summary": "GetUserNamesOnly",
            "description": "Get Usernames Only",
            "operationId": "GetUserNamesOnly",
            "produces": [
               "application/json"
            ],
            "parameters": [
               {
                  "name": "X-Infor-MongooseConfig",
                  "in": "header",
                  "required": false,
                  "description": "Mongoose configuration to log into; required when using the service through ION API, not needed otherwise.",
                  "type": "string"
               }
            ],
            "responses": {
               "200": {
                  "description": "See Success and Message in the response for result status.",
                  "schema": {
                     "$ref": "#/definitions/LoadCollectionResponse"
                  }
               },
               "401": {
                  "$ref": "#/responses/Unauthorized"
               }
            }
         }
      }
   },
   "definitions": { ... },
   "responses": { ... }
}
```

### Example

This example code retrieves the IDO swagger document that contains strongly typed APIs. These strongly typed APIs are generated for the AccessAs IDO.

```
string json = string.Empty;
using ( HttpClient client = new HttpClient() )
{
   string requestUrl = $"http://localhost/IDORequestService/ido/dynamic/api-docs-collection/AccessAs";
 
   // provide configuration name in the X-Infor-MongooseConfig header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
   "X-Infor-MongooseConfig",
   "Mongoose" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## Execute IDO Swagger Document Get Operation

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/kgn1658298693487.html

The Execute IDO Swagger Document Get Operation API executes a strongly typed API for the specified IDO collection. This API is only applicable for strongly typed APIs that are LoadCollection or GetPropertyInformation.

- GET · `/dynamic/api-docs-collection/{ido}/{operationID}`
- **GET / /dynamic/api-docs-collection/{ido}/{operationID}:** http://localhost/IDORequestService/ido/dynamic/api-docs-collection/UserNames/GetUserList

### Parameters

- Name · In · Required · Description
- **Name:** ido · **In:** Path · **Required:** Yes · **Description:** The name of the IDO collection that is associated with the strongly typed API
- **Name:** operationID · **In:** Path · **Required:** Yes · **Description:** The name of the strongly typed API to be executed
- **Name:** properties · **In:** Query · **Required:** No · **Description:** A comma-delimited list of properties for which to return values

  You can use an asterisk (\*) to include all properties, except subcollection properties.

  If this parameter is excluded or left blank, the server retrieves data with all the parameters.

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** filter · **In:** Query · **Required:** No · **Description:** Restricts the result set. Any valid `SQL WHERE` clause syntax is allowed

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** orderby · **In:** Query · **Required:** No · **Description:** A comma-delimited list of properties that specifies how the result set is to be sorted

  Use the `DESC` keyword after a property name to sort that property in descending order.

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** recordcap · **In:** Query · **Required:** No · **Description:** Determines how many records are to be retrieved in one request

  This list shows the valid values:

  - **-1** returns 200 records.
  - **0** returns all records.
  - Any other number specifies the number of records to be retrieved.

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** distinct · **In:** Query · **Required:** No · **Description:** Specifies that the set of data to be returned must represent only distinct combinations of properties

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** clm · **In:** Query · **Required:** No · **Description:** The name of a custom load method

  This parameter works in conjunction with the clmparam parameter.

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** clmparam · **In:** Query · **Required:** No · **Description:** A comma-delimited list of custom load method parameters

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** loadtype · **In:** Query · **Required:** No · **Description:** This parameter is used for load collection paging.

  This parameter is used in conjunction with the bookmark parameter.

  This list shows the valid values:

  - FIRST
  - NEXT
  - PREV
  - LAST

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** bookmark · **In:** Query · **Required:** No · **Description:** This parameter is used for the bookmark ID.

  Bookmark IDs serve as a reference when you get to the next or previous records in a collection.

  The bookmark value uses this format:

  `<B><P><p>UserId</p></P><D><f>false</f></D><F><v>1</v ></F><L><v>2</v></L></B>`

  where:

  - `<B></B>` is the bookmark envelope tag.
  - `<P></P>` is the property name of the primary key.
  - `<D></D>` is a flag that, if True, specifies that records are to be read in descending order.
  - `<f></f>` is the value of the `<D></D>` element. This value can be True or False.
  - `<F></F>` is the first row in the collection.
  - `<L></L>` is the last row in the collection.
  - `<v></v>` is the value of the row for the given property name.

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** pqc · **In:** Query · **Required:** No · **Description:** Specifies a method to execute once for each row in the result set, after the query is completed

  This parameter is equivalent to the Design Mode PQ option in the **Load/Save Overrides** property and uses the same syntax.

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.
- **Name:** readonly · **In:** Query · **Required:** No · **Description:** When set to True, this parameter specifies that retrieved records must not include the \_ItemID property, which is substantial for update and delete operations.

  **Note:** Use this parameter only if the strongly typed API is a LoadCollection API.

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server |

### Request data

None

### Response data when the strongly typed API is a GetPropertyInformation API

```
{
    "Message": null,
    "Success": false,
    "Keys": [
        "ID"
    ],
    "Properties": [
        {
            "BooleanFalseValue": "",
            "BooleanTrueValue": "",
            "CaseFormat": "",
            "ClrTypeName": "Guid",
            "ColumnDataType": "uniqueidentifier",
            "DataType": "GUID",
            "DateFormat": "",
            "DecimalPos": 0,
            "DefaultIMECharset": "",
            "DefaultValue": "NEWGUID()",
            "DomainIDOName": "",
            "DomainListProperties": "",
            "DomainProperty": "",
            "InputMask": "",
            "IsItemWarnings": false,
            "JustifyFormat": "",
            "LabelStringID": "sID",
            "Length": 0,
            "Name": "ID",
            "PropertyClass": "",
            "RORecord": false,
            "ReadOnly": false,
            "Required": true
        },
        { ... }
    ],
    "SubCollections": [
        {
            "IDOName": "DemoSubmissionComments",
            "LinkBy": [
                {
                    "Child": "SubmissionID",
                    "Parent": "ID"
                }
            ],
            "Name": "SubComments"
        },
        {
            "IDOName": "DemoSubmissionLikes",
            "LinkBy": [
                {
                    "Child": "SubmissionID",
                    "Parent": "ID"
                }
            ],
            "Name": "SubLikes"
        }
    ]
}
```

### Response data when the strongly typed API is a LoadCollection API

```
{
    "Items": [
        {
            "UserId": "1",
            "Username": "sa",
            "_ItemId": "PBT=[UserNames] UserNames.DT=[2022-05-19 11:13:29.047] UserNames.ID=[37d1b76a-4bf7-4523-9176-ae8ed460d903]"
        },
        {
            "UserId": "2",
            "Username": "jdelacruz",
            "_ItemId": "PBT=[UserNames] UserNames.DT=[2021-04-05 15:44:58.937] UserNames.ID=[f5f084a7-0049-4b69-9e74-a38095125eb3]"
        },
        {
            "UserId": "3",
            "Username": "jdoe",
            "_ItemId": "PBT=[UserNames] UserNames.DT=[2021-04-05 15:52:34.833] UserNames.ID=[7850b9c8-2421-4956-b4fb-983ef76d3e58]"
        }
    ],
    "Bookmark": "<B><P><p>UserId</p></P><D><f>false</f></D><F><v>1</v></F><L><v>50004</v></L></B>",
    "Success": true,
    "Message": null
}
```

### Example

This example code executes a strongly typed API that does load collection to retrieve the AccessAs IDO.

```
string json = string.Empty;
using ( HttpClient client = new HttpClient() )
{
   string requestUrl = $"http://localhost/IDORequestService/ido/dynamic/api-docs-collection/AccessAs/GetAccessAs";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQjm3w/=…" );
 
   HttpResponseMessage response = client.GetAsync( requestUrl ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## Execute IDO Swagger Document Post Operation

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/mlr1658300702842.html

The Execute IDO Swagger Document Post Operation API executes a strongly typed API for the specified IDO collection. This API is only applicable for strongly typed APIs that are UpdateCollection or InvokeIDOMethod.

- GET · `/dynamic/api-docs-collection/{ido}/{operationID}`
- **GET / /dynamic/api-docs-collection/{ido}/{operationID}:** http://localhost/IDORequestService/ido/dynamic/api-docs-collection/UserNames/CreateUser

### Parameters

| Name | In | Required | Description |
| --- | --- | --- | --- |
| ido | Path | Yes | The name of the IDO collection that is associated with the strongly typed API |
| operationID | Path | Yes | The name of the strongly typed API to be executed |
| refresh | Query | No | Instructs the system to refresh the collection after the update is complete Valid values are True or False. **Note:** Use this parameter only if the strongly typed API is an UpdateCollection API. |
| parameter1 to parameter50 | Query | No | Passes the parameters required by the method being invoke **Note:** Use these parameters only if the strongly typed API is an InvokeIDOMethod API. |

### Headers

| Name | Description |
| --- | --- |
| Authorization | If the API is called directly, then the Mongoose security token is obtained through a call to the GetSecurityToken API. If the API is called through the ION API, then a valid OAuth2.0 bearer token is provided by ION API. |
| X-Infor-MongooseConfig | The name of a configuration that is available on the application server |

### Request data

None

### Response data when the strongly typed API is an UpdateCollectio API

```
{
    "RefreshItems": [
        {
            "Action": 1,
            "ItemId": "PBT=[UserNames] UserNames.DT=[2022-05-23 11:42:40.977] UserNames.ID=[64e98785-32ed-44f1-82eb-16d3719299e9]",
            "ItemNo": 0,
            "Properties": [
                {
                    "Name": "Username",
                    "Value": "jdoe",
                    "OriginalValue": null,
                    "Modified": false,
                    "IsNull": false,
                    "IsNestedCollection": false
                },
                {
                    "Name": "InWorkflow",
                    "Value": "0",
                    "OriginalValue": null,
                    "Modified": false,
                    "IsNull": false,
                    "IsNestedCollection": false
                }
            ],
            "UpdateLocking": 0
        }
    ],
    "Success": true,
    "Message": null
}
```

### Response data when the strongly typed API is an InvokeIDOMethod API

```
{
    "ReturnValue": "0",
    "Parameters": [
        "mpalanca",
        "4",
        "1",
        "",
        ""
    ],
    "Success": true,
    "Message": null
}
```

### Example

This example code executes a strongly typed API that invokes the GetUserAttributes method from the UserNames IDO.

```
string json = string.Empty;
using ( HttpClient client = new HttpClient() )
{
   string requestUrl = $"http://localhost/IDORequestService/ido/dynamic/api-docs-collection/UserNames/GetUserAttributes?parameter1=sa&parameter2=&parameter3=&parameter4=&parameter5=";
 
   // provide token in the Authorization header
   client.DefaultRequestHeaders.TryAddWithoutValidation(
      "Authorization",
      "b/XdI6IQzCviZOGJ0E+002DoKUFOPmVDkwpQDbQjm3w/=…" );
 
   HttpResponseMessage response = client.PostAsync( requestUrl, null ).Result;
 
   using ( HttpContent content = response.Content )
   {
      Task<string> result = content.ReadAsStringAsync();
      json = result.Result;
   }
}
```

## Example: Bookmark IDs in LoadCollection responses

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ooc1576799884898.html

This topic shows an example of a bookmark ID used in a LoadCollection response to an API request.

This response includes the data that is requested from the UserNames IDO, such as UserID, UserName and UserDesc, and an initial bookmark ID.

```
               {
      "Bookmark": "<B><P><p>UserId</p></P><D><f>false</f></D><F><v>1</v></F><L><v>2</v></L></B>",
      "Items": [
      [
      {
      "Name": "UserId",
      "Value": "1"
      },
      {
      "Name": "Username",
      "Value": "sa"
      },
      {
      "Name": "UserDesc",
      "Value": "WinStudio Admin user"
      },
      {
      "Name": "_ItemId",
      "Value": "PBT=[UserNames] UserNames.DT=[2019-06-13 14:02:44.003] UserNames.ID=[407c7a60-c627-436f-88b0-2bd544a07208]"
      }
      ],
      [
      {
      "Name": "UserId",
      "Value": "2"
      },
      {
      "Name": "Username",
      "Value": "FTAutomation"
      },
      {
      "Name": "UserDesc",
      "Value": null
      },
      {
      "Name": "_ItemId",
      "Value": "PBT=[UserNames] UserNames.DT=[2019-06-13 14:02:44.070] UserNames.ID=[cfb7d823-0f3c-4c27-b61e-618ad8dc2b5f]"
      }
      ]
      ],
      "MoreRowsExist": true,
      "Message": "Success",
      "MessageCode": 0
      }
    
```

Since `rowcap=2` is specified, only two records are available initially. To get the next two records, specify the bookmark ID and the load type value `Next` in the next request:

http://server/IDORequestService/MGRESTService.svc/json/UserNames/adv?props\=UserId,Username,UserDesc\&rowcap\=2\&loadtype\=Next\&bookmark\=\<B\>\<P\>\<p\>UserId\</p\>\</P\>\<D\>\<f\>false\</f\>\</D\>\<F\>\<v\>1\</v\>\</F\>\<L\>\<v\>2\</v\>\</L\>\</B\>/

This request now returns the next two rows, a new bookmark ID value that you can use to navigate on your next request, and a `MoreRowsExist` flag.

The `MoreRowsExist` flag indicates that there are more rows that can be retrieved with a NEXT request. For custom load methods, the CLM must be written to support bookmarking.

```
{
    "Bookmark": "<B><P><p>UserId</p></P><D><f>false</f></D><F><v>3</v></F><L><v>4</v></L></B>",
    "Items": [
        [
            {
                "Name": "UserId",
                "Value": "3"
            },
            {
                "Name": "Username",
                "Value": "mpalanca"
            },
            {
                "Name": "UserDesc",
                "Value": null
            },
            {
                "Name": "_ItemId",
                "Value": "PBT=[UserNames] UserNames.DT=[2019-06-13 14:03:59.083] UserNames.ID=[c869bbbb-e5c0-4812-8e2a-b4447a1eceb9]"
            }
        ],
        [
            {
                "Name": "UserId",
                "Value": "4"
            },
            {
                "Name": "Username",
                "Value": "MarielElleynIna.Palanca@infor.com"
            },
            {
                "Name": "UserDesc",
                "Value": "MarielElleynIna Palanca"
            },
            {
                "Name": "_ItemId",
                "Value": "PBT=[UserNames] UserNames.DT=[2019-07-02 10:57:01.233] UserNames.ID=[b6bc0447-3621-4e21-9244-be4963eb3c5a]"
            }
        ]
    ],
    "MoreRowsExist": false,
    "Message": "Success",
    "MessageCode": 0
}
```

Once `MoreRowsExist` returns false, the last set of available records for this IDO is retrieved.
