# Authorizations and security

> Guide: Infor Mongoose Administration Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/lsm1454147667434.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About user authorizations

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/lsm1454147667434.html

An individual user's access to and ability to use various forms and IDOs are controlled by these things (in order):

- The license modules that the user is assigned to
- The group or groups to which the user belongs
- Individual user authorizations

### License modules

Before a user can access any forms or other objects, that user must have the proper license modules assigned. For example, if the user is a form/application developer, that user would need to have the **MG Developer** license module assigned.

License modules are assigned to users on the **User Modules** form, which is accessed by clicking the **User Modules** button on the **Users** form.

### User groups

Once license modules (which provide basic access) have been assigned, the most common—and most recommended—way of assigning permissions to a user is by means of one or more user groups. User groups allow system administrators to assign permissions for a whole set of forms to everyone assigned to that group, without having to assign the permissions individually to each user.

The system ships with several user authorization groups already defined. You can view a listing of these groups (as well as any user groups you might have created) on the **Groups** form. For each group, this same form also displays a list of all the users who are members of that group.

You can also add your own user groups, using the same **Groups** form.

**Note:** We recommend that, when creating your own groups, you use a naming convention that clearly identifies the group as one that you (or someone else in your organization) created. For example, if you worked for the Acme Company, you might create a name like this: **Acme Sales**.

To see what forms and other objects (IDOs and file servers) are associated with and controlled by a particular group, select that group in the Grid View and then click **Group Authorizations**. This launches the **Object Authorization for Group** form. This form displays all the forms and other objects that belong to that group.

Use the **Object Authorization for Group** form also to modify the list of forms or other objects that a group can access or to modify its access permissions for objects.

### Individual user authorizations

A third way that you can set permissions for users is to set them for individual users. These are typically special cases, used when the user needs some permission not granted by group membership—OR needs a permission granted by group membership to be revoked. Individual user authorizations and permissions override group settings.

To set authorizations and permissions for individual users, use the **Object Authorization for User** form, which is accessible from both the **Users** form and the **Groups** form.

### Other means to control access and grant permissions

The framework also provides a variety of other means you can use to control access to forms and other objects, including these:

- Designating what basic type of user an individual user is when you create the user ID profile (whether **Basic**, **Full User**, **Site Developer**, or whatever).
- Setting row authorizations, which are settings that are used to filter on IDOs, so that users or groups can see a restricted set of data from that IDO.
- Using composite groups and subgroups to control multiple sets of users from a few settings.
- Copying user settings from one user to another user who needs the same (or similar) permissions.
- Creating authorizations for external "users" from web services. These web services "users" need to be granted authorization for any IDOs being called by the web service.

## Setting token authentication

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/lsm1454147666732.html

One option to increase security and control access to your system is to use a token-based authentication service in tandem with the normal application login credentials. With this type of system, users must enter not only their user IDs and passwords, but also a second password, or passcode, obtained from a hardware or software token.

To use a token-based authentication service in the application:

1. Purchase access to the RSA SecurID token authentication service. 

   At this time, the RSA SecurID service is the only token authentication service supported in this application. You are responsible for purchasing and setting up this service for your system.
2. Configure your application to work with the token authentication service. This involves these basic procedures: 

   - Install and configure the Token Authenticator Service on the Application Server, using the application's Configuration Wizard. This service is installed and run as an optional IIS service but is required for token authentication of applications. This service can be used by many Mongoose-based applications simultaneously.

     See the Infor Mongoose Installation Guide.
   - Configure the application in the Configuration Manager.
   - Set the passcode mapping for each user who will be using the service.
   - Let each user know how to use the token to sign in.

## About form-level security

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/kbr1539928869543.html

Form-level security is checked when a user opens a form. The application queries the Account Authorizations table to see what privileges are granted to the user or to the group to which the user belongs.

## About row-level security

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/jwh1543375378336.html

Row-level security is checked through the **Row Authorizations** form. This form allows you to create IDO-level filters that are used to restrict data that users can view.
