# IDO request interface, REST API overview and authentication

> Guide: Infor Mongoose IDO Integration with External Applications Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jpy1498808026716.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About the IDO request interface

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/jpy1498808026716.html

For Mongoose applications, the Intelligent Data Object (IDO) layer resides on the application server, in between the clients and the database. An IDO consists of references to tables in the Application database, definitions of properties, and definitions of specific methods.

IDO definitions are stored as metadata in an Objects database and are accessed through IDO editing forms. Through configurations, application databases are linked with an Objects database and a Forms database. Optionally, the objects and forms databases are embedded in the application database.

Developers can create logic associated with IDOs using the Application Event System (AES) and can incorporate .NET IDO extension class code as well; but the Mongoose framework implements the IDO request interface for all IDOs. This interface consists of these session and metadata operations:

- **Load Collection** generates and executes SQL to retrieve a collection of rows from the database.
- **Update Collection** takes a set of rows marked for insert, update, or delete, and generates and executes the appropriate SQL code against the database.
- **Invoke** allows you to execute a specific method defined for the IDO.

Each of the operations in the IDO request interface consists of a request and a response. The caller builds an IDO request and sends the request to the IDO runtime engine to be executed. The IDO runtime engine builds and returns a response to the caller that contains the results of the requested action.

The Mongoose user interface runs entirely by means of the IDO request interface, by using the IDO request XML schema with the use of HTTP(s).

Integrating to IDOs involves understanding this IDO request interface and leveraging this interface using the variety of technologies, such as REST, SOAP, .NET class library, XML or HTTP. The REST version of the IDO request interface is also provided in Infor's ION API repository.

To know how to integrate with IDOs, you must first understand the IDO request XML schema, as this schema is the native Mongoose interface. The other technologies all map to or from this interface.

## About the IDO Runtime Service

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/cje1498808027091.html

The application server for Mongoose is the IDO runtime, which is usually run as a service. Though for development, IDO runtime can also be run as an executable file that has its own user interface, named the **IDO Runtime Development Server** or IDORuntimeHost.exe.

This service has a front-end in Internet Information Services (IIS) and is the code that implements the IDO request interface.

Integrating with IDOs involves establishing communications to the IDO runtime through a URL and one of the technology options.

## Pinging the IDO Runtime Service

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/itc1649983115813.html

There have been cases where the IDO Runtime Service has been unavailable while the IDO Request Web Service has been available. To detect whether this situation is occurring on your system, you can perform a quick check of the IDO Runtime Service through the IDO Request Web Service.

This mechanism can be used to check a server instance that is running Internet Information Services (IIS), the IDO Request Web Service, and the IDO Runtime Service:

1. Open a web browser.
2. In the browser's address field, specify this URL: 

   https://`IDOServerName`/IDORequestService/Ping.aspx

   where `IDOServerName` is the domain name or the IP address of the web server that is hosting the IDO Request Web Service.

If IIS is running and the IDO Request Web Service is available, and the IDO Runtime Service is running, then the system returns a `200 - Success` message.

If IIS is running and the IDO Request Web Service is available, but the IDO Runtime Service is not running, the system returns a `503 - Service Unavailable` error message.

If either IIS is not running or the IDO Request Web Service is unavailable, the system returns a `404 - File Not Found` error message. In this case, it does not matter whether the IDO Runtime Service is running or not.

## Accessing the IDO request interface

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/wdj1528157869670.html

To access the IDO request interface, Mongoose provides these technology options:

- IDO request XML schema, using HTTP(s)
- REST API, including ION API
- SOAP web service
- Mongoose .NET client class library

## Permissions and licensing for the IDO request interface

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/xdm1498808038245.html

Sessions established with the Mongoose user interface involve a different model for permissions and licensing than sessions established programmatically using the IDO request interface.

For UI sessions, the user account must be granted authorizations or permissions, for each form the user attempts to run. Authorizations are granted at a group or user level in the **Groups** or **Users** form. Authorizations can also include policy as to which operations are enabled, and even field-level permissions. Similarly, the users must be granted at least one license module that contains the form that must be run, unless the Usage-Tracking-Only mode of licensing is in effect.

By contrast, for sessions created through an API, the user account permissions and licensing are checked against the IDOs being accessed, and not the forms. So, the user account for the session must be granted with permissions to the IDOs for which LoadCollection, UpdateCollection, and Invoke requests are made. Those permissions might further restrict which operations that user account can use for various IDOs, as well as property-level restrictions. Finally, the user account must be granted with at least one license module which includes the IDO being accessed, unless the Usage-Tracking-Only mode of licensing is in effect.

**Note:** When the REST option is used within the ION API, the user account is drawn from the browser, and single-sign-on occurs. The resulting user account, however, still requires IDO-level permissions and licensing.

To know more about configuring permissions and licensing, see the online help for the **Users** and **Groups** forms.

## Using the REST API

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/rwn1573170285401.html

You can use the REST API to access IDOs from a client-side web project, a mobile app, or an Internet of Things (IoT) device to perform IDO-related operations, such as loading or updating collections, or running methods.

REST API is another layer on top of the IDO request interface that uses the IDO request XML schema.

## Integration with ION API

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/lol1573178506544.html

The  REST APIs are shown to customers through Infor ION API, so the customers can have one common authentication mechanism and a consolidated view, and can consume the APIs from many Infor applications.

The REST APIs are developed so the ION API can consume them using the OAuth 1.0a zero-legged authentication mechanism.

To know how to use Infor ION API and how to interact with the swagger documentation for the API methods, see the Infor ION API Administration Guide.

## Authentication

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/uis1573179054690.html

The  REST API offers security by requiring that either a  security token or a valid OAuth 2.0 bearer token to be passed in the Authorization header of the API requests.

The  REST API currently supports these authentication schemes:

- Mongoose security token
- OAuth 1.0a zero-legged authentication

## Mongoose security token

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/xjt1573179367303.html

A  security token can be acquired by using the GetSecurityToken API. This API is used to authenticate requests when the REST API is being called directly.

security tokens are unique for each user and should be stored securely. These tokens only expire when the user or configuration becomes non-existent, or when the user changes the password.

## OAuth 1.0a zero-legged authentication

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/aat1573179601217.html

OAuth 1.0a authentication is a signature that is computed using a consumer key and a matching consumer secret, along with the details of the request.

For the  REST API, the OAuth 1.0 with HMAC-SHA1 algorithm is used when the REST API is being called through the ION API.

This authentication scheme uses these headers to create a  session using the workstation logon mechanism:

| Header | Description |
| --- | --- |
| **X-Infor-Identity2** | This header is a unique and immutable user identifier within a tenant. This header is provided by the ION API. |
| **X-Infor-MongooseConfig** | This header is the  configuration name. This header is provided by the user. |

These properties must be configured in the IDO Request Service’s web.config:

| Property name | Property value |
| --- | --- |
| enableRestWorkstationLogon | True |
| restOAuthConsumerKey | Consumer key provided by ION API |
| restOAuthConsumerSecret | Consumer secret provided by ION API |

## Versions

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/riw1573178627631.html

The original  REST API has grown over several years. As a result, REST APIs became overly complex and difficult to learn. While preserving REST APIs for backward-compatibility,  added a second version of the API.
