# Integration with other applications and Infor ION API

> Guide: Infor Mongoose Administration Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/iya1487704637472.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About integration with other applications

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/iya1487704637472.html

Applications that are based on the Mongoose framework can integrate with other applications using a variety of methods, including but not limited to these:

- Point-to-point access using web services.

  See the IDO Integration with External Applications section in the help.
- Business Object Documents (BODs) that are passed through ION to the other application.

  See the help topics about replication and BODs.
- Point-to-point access through ION APIs.

  See the IDO Integration with External Applications section in the help.
- XML documents other than BODs. Your Mongoose-based application can use non-transactional replication to send formatted files to a designated “site” for transfer to the other application.

  See the help topics about replication and BODs.
- Direct IDO communication with another application, for example, connection to Infor Document Management (IDM) and the Infor Data Lake.

## About external application parameters

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/nhp1488786676204.html

To maintain the user credentials for external applications, such as Infor Document Management (IDM), use the **External App Parameters** form. This form provides a central location for application connection credentials.

These parameters are needed to create a user profile for external applications:

| Parameter | Description |
| --- | --- |
| **Application Name** | The name of the connecting application |
| **Application Instance** | The name of the instance |
| **URL** | URL address |
| **User Name** or **Client Key** | Username credentials for the base URL. This field changes to Client Key whenever OAuth1 is selected as the authentication method |
| **Password** or **Client Secret** | Password credentials for the username account. This field changes to Client Secret whenever OAuth1 is selected as the authentication method |
| **Authentication** | List of system-defined authentication methods |
| **Signature Method** | List of system-defined signature methods. This field is shown if OAuth1 is selected as the authentication method |
| **ION API Server ID** | List of ION API servers |
| **Is Active** | Indicates it is an active record |

Only one active record should exist for each unique **Site Reference** and **Application Name** pair. For example, for SiteRefA and **AppName1**, where:

- Record 1: **Application Instance** is **InstanceName1** and **Is Active** check box is selected
- Record 2: **Application Instance** is **InstanceName2** and **Is Active** check box is cleared
- Record 3: **Application Instance** is **InstanceName3** and **Is Active** check box is cleared

These records are valid since there is only one active record in the system.

**Note:** For each **Site Reference** and **Application Name** pair, you can create one to many inactive records, but only zero to one active records can exist in the system.

The **Application Instance** must be unique for a **Site Reference** and **Application Name** pair. For example, for SiteRefA and **AppName1**, where:

- Record 1: **Application Instance** is **InstanceName1** and **Is Active** check box is selected
- Record 2: **Application Instance** is **InstanceName2** and **Is Active** check box is cleared
- Record 3: **Application Instance** is **InstanceName1** and **Is Active** check box is cleared

Record 3 is invalid since AppName1 has multiple instance name values of InstanceName1.

There can only be one active record for each unique **Site Reference** and **Application Name** pair. Other records must be marked inactive. These records are valid:

- Record 1: SiteRefA, **AppName1**, **InstanceName1**, Active
- Record 2: SiteRefA, **AppName1**, **InstanceName2**, Inactive
- Record 3: SiteRefA, **AppName1**, **InstanceName3**, Inactive
- Record 4: SiteRefA, **AppName2**, **InstanceName1**, Active
- Record 5: SiteRefB, **AppName1**, **InstanceName1**, Active

The **Application Name** and **Application Instance** is a unique pair within a **Site Reference**. Record 1 and Record 5 are both valid because they are on different sites.

For IDM, you can define multiple connections to multiple IDM instances, if present. These records are valid:

- Record 1: **Application Name** is **IDM**, **Application Instance** is **IDM Live**, and**Is Active** check box is selected
- Record 2: **Application Name** is **IDM**, **Application Instance** is **IDM Test**, and **Is Active** check box is cleared

These records are valid because only one **Application Name** is active. There can be many inactive application names.

## Creating a user profile for external applications

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/ktz1488788086802.html

1. Open the **External App Parameters** form, and initiate a new record.
2. Provide this information: 

   Application Name

   Provide a name for the connecting application, for example, **Infor Document Management (IDM)**.

   Application Instance

   Specify a name for the instance that is to be used for the connecting application.

   **Note:** You can create one to many instance names for each **Application Name**.

   URL

   Using the HTTPS format, specify the URL of the connecting application. For example, for IDM, you would specify **https://servername:port/ca**.

   User Name

   Specify the user ID that is used for logging into the connecting application.

   Password

   Specify the password for the connecting application username account.

   Client Key

   Specify the client key to use for logging into the connecting application. This field is shown whenever OAuth1 is selected as the authentication method.

   Client Secret

   Specify the client secret for the connecting application client key. This field is shown whenever OAuth1 is selected as the authentication method.
3. Select the **Authentication** method. 

   Although other authentication methods are listed, only Basic and OAuth1 are currently supported.

   **Note:** For IDM, OAuth1 method accepts the consumer key as the username and the secret key as the password. Basic authentication uses a domain account. OAuth1 is chosen as a backend service account so that impersonation can be implemented, rather than have every IDM's CreatedBy and UpdatedBy value applied to the same user.
4. Optionally, Select the **Signature Method**

   **Note:** This field is shown whenever OAuth1 is selected as the authentication method.
5. Optionally, Select the **ION API Server ID**.

   **Note:** Once the ION API Server ID is selected, the **URL**, **Username**, **Password**, and **Authentication** fields, as well as the **Verify** button are disabled.
6. If the record is to be active, select the **Is Active** check box.
7. Optionally, to confirm that the login information and credentials are valid, click **Verify**. 

   If the login information and credentials are not valid, the application generates a failure message.
8. Save.

## About Infor ION API

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/tvd1664917517408.html

**ION API Gateway** is an Infor product that aggregates APIs from various products into a single clearing house, with a common security model, monitoring, throttling, and so on. ION API also has a UI component that accompanies the gateway, where you can add and see APIs that are exposed by the gateway, set up authorized clients that can access the APIs, look at the logs, test the APIs, among other tasks.

Mongoose includes functionality that allows administrators to set up a reference to the gateway by means of an ION API server; and then use an IDO method to make calls to APIs through that server. In the cloud, when a tenant is provisioned with an ION API app reference in their Mongoose-based application (done in CSP), the ION API server reference to the gateway in the cloud is set up automatically. Other servers can be set up manually; for example, in a cloud Mongoose instance referring to a gateway on-premises, or vice versa.

The **ION API Servers** form contains some basic info needed to access the gateway by means of the ION API server. There are two modes of authenticating users to the gateway, referred to as “SSO” (Single Sign-On) and “non-SSO”. Using non-SSO authentication requires additional setup on the ION API side. At the end of that setup process an .ionapi file is produced. This .ionapi file must then be uploaded using the **ION API servers** form.

**Note:** If you add a brand new server, the **ION API servers** form auto-fills some values for the URLs that are not correct. This is a known bug. It does not, however, interfere with existing values, assuming that they are correct.

Use of the remaining ION API-related forms are not, strictly speaking, necessary to use the gateway through the IDO method. Their primary purpose is to enable easier no-code testing of the APIs. “ION API server suites” correspond roughly to the APIs exposed by the gateway. In each suite, then, there are individual methods that can be called in the API. Those related forms describe the suites or methods you might want to access; but be aware that they do not have to be in the forms to be usable. The forms simply enable the drop-down functionality in the **Test ION API Invoke** form, so that you can choose the suite and method without typing them in. Also, those forms have buttons that can query the gateway for available suites and methods in the suite.

## Adding an ION API server

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/xzs1495674615555.html

To be able to access and use the resources of an ION API server, that server must first be "registered" in your base application.

1. Open the **ION API Servers** form and initiate a new record.
2. Provide this information: 

   Server ID

   This field is automatically populated, but you can change it. Typically, this ID is a non-negative integer, with zero (0) being reserved for the default ION API server.

   **Note:** If you are using the server to enable the **Data Lake IDO Wizard**, you must designate the server as the default ION API server. To do this, set this field to **0** (zero).

   Description

   Optionally, specify a helpful description for the server.

   Server URL

   Optionally, specify the URL of the ION API server.

   This field is for documentation purposes only. The actual URL is derived from the .ionapi file.

   STS URL

   Specify the address of the WS-Trust STS (Security Token Service) endpoint. This is available from the environment’s `idp.properties` file, under the property name `idp.wstrust.sts.url`.

   Token URL

   Specify the address of the OAuth token endpoint. This is available from the environment’s `idp.properties` file, under the property name **idp.oauth.token.url**.

   Import .ionapi file

   Use this button to browse for an .ionapi file.

   You can get the .ionapi file from the Infor ION API provisioning page.

   **Note:** The **.ionapi exists** check box is automatically selected once the .ionapi file is imported.

   Import Private Key

   Use this button to browse for a private key, in .json format.

   You must import a .ionapi first to enable this button.

   **Note:** The **Private Key Exist** check box is automatically selected once the record is saved.

   Import Suites

   Optionally, use this button to search for and select an ION API server suite. When a suite is imported, information about the suite displays in the **Suites** grid.

   Suites

   Optionally, use this button to launch the **ION API Suites** form, in which you can define a suite (or group) of ION API servers.

   When you create a suite using that form and save it, it is automatically added to this form and information about it displays in the **Suites** grid when you refresh the form.
3. Save.

## Adding an ION API server suite

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/tam1496020811606.html

Use this procedure to create your own API server suite. To import an existing server suite, see [Importing an ION API server suite](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/afi1568865819720.html).

1. Open the **ION API Servers** form.
2. Select an entry where a suite is to be added.
3. Click **Suites**.
4. In the **ION API Suites** form, initiate a new record.
5. Provide this information: 

   Name

   Provide a name for the suite.

   Description

   Optionally, provide a helpful description for this suite.

   Context

   Specify the API context that is to be appended to the base URL when calling methods from this suite.
6. Optionally, define or import one or more API methods to be used.
7. Save.

## About ION API Methods

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/flb1768891530379.html

The ION API Methods provides the core integration layer between the Mongoose runtime and the Infor ION API. These methods are used for SSO-based calls, token-based calls, token retrieval, and endpoint metadata.

| Method name | Description | Method type |
| --- | --- | --- |
| `CollectOutputFields` | This method processes the output fields from an ION API response and returns them in a structured format for IDO consumption. This method is used by Invoke methods to shape the returned data. | Extension class standard method |
| `GetBearerToken` | This method retrieves a bearer token using SSO and exchanges the Ming.le session for an OAuth token. This method includes retry logic when the token retrieval fails. | Extension class standard method |
| `GetBearerToken2` | This method is similar to the `GetBearerToken` method, and this method is supports updated response shapes or the newer OAuth behavior. | Extension class standard method |
| `GetIONAPIInfo` | This method retrieves the base ION API URL and the tenant ID required to build API calls. | Extension class standard method |
| `InvokeIONAPIMethod` | This method calls an ION API endpoint using an SSO based authentication. | Extension class standard method |
| `InvokeIONAPIMethod2` | This is the updated version of the `InvokeIONAPIMethod` with the expanded parameters and improved response handling. | Extension class standard method |
| `InvokeIONAPIMethodWithToken` | This method calls an ION API endpoint using a provided bearer token instead of an SSO. This method includes a recursive retry when the HTTP response codes are not successful. | Extension class standard method |
| `InvokeIONAPIWithToken2` | This is the update version of the `InvokeIONAPIWithToken` that supports binary responses and decompression logic. This method includes an expanded output indexes and a `binaryResponse` flag. | Extension class standard method |

## Adding an ION API method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/jsk1496022009089.html

Use this procedure to create your own API method definition. To import an existing method definition, see [Importing an ION API method](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/paw1568870604565.html).

1. Open the **ION API Servers** form.
2. Select the server profile to which you want to add the method.
3. Click **Suites**.
4. Select the suite to which you want to add the method.
5. Click **Methods**.
6. In the **ION API Methods** form, initiate a new record.
7. Provide this information: 

   HTTP Method

   Select the HTTP method.

   Method Name

   Specify a name for this method.

   Path

   Specify the relative URL path for this method.

   Description

   Optionally, specify a short description for this method.
8. Save.

The application adds the method profile to the suite profile. If it does not display automatically in the **ION API Suites** form, refresh that form.

## Testing an ION API method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/qok1496022925733.html

Use this procedure to test an API method definition.

1. Open the **Test ION API Invoke** form.
2. Provide this information: 

   Server ID

   Select the ION API server ID you want to test.

   Suite

   Select the ION API suite that has the method you want to test.

   HTTP Method

   Select the appropriate HTTP method.

   Method

   Select the method you want to test.

   Parameters

   Optionally, specify any parameters required by the selected method, in JSON format.

   Content Type

   Specify type if one of the parameters is of type "body" or "form."

   Timeout

   Specify the maximum length of time, in milliseconds, to wait for the result to be returned. The default is 10000 ms.

   Use SSO

   If the invoke method needs to authenticate with the user's Infor OS Portal SSO session credentials, select this option.
3. Click **Invoke**.

The application starts the test and returns any results to the **Response** section when the test is finished.

## Importing an ION API server suite

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/afi1568865819720.html

1. Open the **ION API Servers** form.
2. Select the server into which the suite is to be imported.
3. Click **Import Suites**.
4. In the **ION API Search Criteria** dialog box, specify the **Search Criteria**.

   To authenticate the search with Infor OS Portal SSO credentials, select the **Use SSO** option.
5. Click **Search**.
6. If more than one suite is returned, select one from the list and then click **OK**.
7. Save.

The application imports the selected API server suite and adds it to the selected API server. You might need to refresh the **ION API Servers** form to see the new suite in the display.

## Importing an ION API method

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/paw1568870604565.html

1. Open the **ION API Server** form.
2. Select the server into which you want to import the API method.
3. Click **Suites**.
4. In the **ION API Suites** form, select the suite into which you want to import the method.
5. Click **Import Methods**.
6. In the **ION API Search Criteria** dialog box, specify the **Search Criteria**.

   **Note:** To authenticate the search with Infor OS Portal SSO credentials, select the**Use SSO** option.
7. Click **Search**.
8. If more than one method is returned, select one from the list, and then click **OK**.
9. Save.

The application imports the selected API method and adds it to the selected API server suite. You might need to refresh the **ION API Suites** form to see the new method in the display.
