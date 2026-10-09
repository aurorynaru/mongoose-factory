# Editing scope, versions and customization

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/hkj1708999482039.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## Customizing deployed applications

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/hkj1708999482039.html

Even after a Mongoose-based application has been deployed, it can be modified and customized to meet your or your organization's needs.

This can be as simple as changing the overall look-and-feel of the application using a theme, or as complex as adding fields to forms and even alternate versions of forms.

## Customizing Mongoose-based applications

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148010001.html

Authorized users can use Mongoose functionality to customize forms and global objects (including creation of new forms) in a deployed application.

Customized objects are tagged in the forms database as versions different from vendor-supplied objects. The application determines the version of a form or global object by using the editing scope of the developer who saves the form or global object.

When a new vendor-supplied version of an application is to be installed, developers use FormSync to preserve their customizations while updating their forms database with new vendor default versions. For more information, see the online help for FormSync (or the **FormSync** form).

To customize a deployed Mongoose-based application, you must have Basic, Full User, or Site Developer editing permissions. The application administrator assigns editing permission when the developer's user profile is created.

Editing permissions determine the scope of customizations, including your ability to use all the functions in the designer (or only a subset of those available) and your ability to save customizations as a particular version in the forms database.

- Developers with Basic or Full User editing permissions can create user versions only for their own user IDs.
- Developers with Site Developer editing permissions can create user versions for any user ID, group versions for an identified group, or site versions that are displayed to all users on the system. Site Developer editing permissions also allow developers to set up public and user folders in the Explorer.

## Editing permissions

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148010344.html

This table lists and describes the levels of editing permissions that users can be assigned in Mongoose-based applications.

- Editing permission level · Customization permissions · Explorer permissions
- **Editing permission level:** **None**

  Used in deployed applications for most end users.

   · **Customization permissions:** Cannot use the designer.

  Cannot make customizations to forms.

   · **Explorer permissions:** Can view and use the **Master Explorer** and public folders.

  Can customize their own **My Folders**.
- **Editing permission level:** **Basic**

  Used in deployed applications for minimal, personal customizations that affect only that user.

   · **Customization permissions:** Cannot create or delete forms.

  Can make minimal changes to their own user version of a form.

  Cannot perform editing operations on global (non-form specific) objects, so the designer is disabled when no form is active.

   · **Explorer permissions:** Can view and use the **Master Explorer** and public folders.

  Can customize their own **My Folders**.
- **Editing permission level:** **Full User**

  Used in deployed applications for more extensive personal customizations that affect only that user.

   · **Customization permissions:** Can use the designer to make customizations but only for their own user versions.

  Cannot create new forms or delete existing forms.

   · **Explorer permissions:** Can view and use the **Master Explorer** and public folders.

  Can customize their own **My Folders**.
- **Editing permission level:** **Site Developer**

  Used in deployed applications, usually only by system administrators, to affect changes at any level of editing scope.

   · **Customization permissions:** Can use the designer to make any customizations for any user version, for any group version, or for a site version.

  Can create and delete forms.

   · **Explorer permissions:** Can view and use the **Master Explorer**.

  Can customize public folders, user folders, and their own **My Folders**.

  Can impersonate any user or group member and then view or edit the associated user or group versions.
- **Editing permission level:** **Vendor Developer**

  Used to develop applications, usually by Infor, .Infor business partners, or other Mongoose-based application developers.

   · **Customization permissions:** Has acces to all the capabilities of the designer, including creating and deleting forms.

  All work is saved as a Vendor Default version.

   · **Explorer permissions:** Can create and edit the **Master Explorer**.

  Can customize their own **My Folders**.

  Cannot view public or inidividual user folders.

  Cannot view user or group versions of forms, even if these are associated with the Vendor Developer's own user ID.

## About editing scope

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148010500.html

In a Mongoose-based application, the term "editing scope" refers to the interaction between a developer's editing permission and the ability to save forms and global objects at a given level of the user-group-site hierarchy.

- To create an application, developers require Vendor Developer editing permissions in order to create Vendor Default versions of forms and global objects in the Forms database.
- To customize a deployed application, developers require Basic, Full User, or Site Developer editing permissions in order to create user, group, or site versions of forms and global objects.

You can set your editing scope whether or not you are in the designer. After you edit at one level, you can change your editing scope to save customizations at another level.

**Note:** Before you edit a form that you opened during the current session, be sure to close the form and refresh the IDO metadata cache. This procedure ensures that when you reopen the form under a different editing scope, the form is the version defined for the new editing scope in the forms database. Removing the form from memory is required because the application by default opens the locally cached version that was last closed, regardless of the current Site Developer impersonation.

## About version control in the forms database

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148010672.html

Initially, a Forms database includes only the vendor-supplied forms, components, and global objects. All of these elements are tagged as Vendor Default versions in the Forms database and constitute a Mongoose-based application.

Customizations made with Basic, Full User, or Site Developer editing permissions create versions for one user, for a group of users, or for all users at a site. A customized Forms database can include more than one version of the same form or global object.

### Vendor Default version

The Vendor Default version of a form or global object is tagged as version 0 in the database and is unaffected by future customizations because those changes are tagged and saved as other versions.

### Site version

The Site version of a form or global object is a customized version that is accessed by all users at a customer site (unless it is superseded by a Group or User version). It is tagged as version 1 in the database.

### Group version

A Group version of a form or global object is a customized version that is accessed by all users in a user group (unless it is superseded by a User version). It is tagged as version 2 in the database and has a unique group name.

### User version

The User version of a form or global object is a customized version that is accessed by a single user. It is tagged as version 3 in the database and has a unique user name associated with it.

## Determining which version is displayed

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148010828.html

If more than one version of a form or global object exists in the forms database, the user-group-site hierarchy (in combination with the user ID) determines which version is displayed.

| Version | Description |
| --- | --- |
| User | This version displays to only one user. If it exists, a user version is always displayed and overrides any other version that exists.  **Note:** Vendor developers do not see user versions. |
| Group | This version is displayed to only the users in one group. If no user version exists for any user in the group, the group version is displayed and overrides the Site and Vendor default versions.  **Note:** Vendor developers do not see group versions. |
| Site | This version is displayed to all users at a site if no User or Group version exists. If User or Group versions exist, they override this one. This version overrides only the Vendor Default version.  **Note:** Vendor developers do not see Site versions. |
| Vendor Default | This version is displayed to all users at a site only if no User, Group or Site version exists. All other versions of forms override this one. **Note:** Vendor developers can view only this version. |

## Reverted forms and global objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148011000.html

You can revert a custom version of a form or global object to remove it from the Forms database. The user-group-site hierarchy determines which version remains after you revert a version.

| Version being reverted: | Version that remains and is displayed: |
| --- | --- |
| A user version | A Group version is displayed (if one exists for the user ID). |
| A group version | A Site version is displayed (if one exists). |
| A site version | The Vendor Default version is displayed. Vendor Default versions cannot be removed. |

**Note:** We recommend that you create a backup of a form or global object before you revert it. If you have Site Developer editing permissions, you can copy a customized form to a new form name before you revert the form. Alternatively, with FormSync, you can copy the form or global object to another forms database or create a SQL script that contains a definition of the form or object. For more information, see the help for FormSync (or the **FormSync** form).

## Identifying your editing scope

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148011156.html

To identify your editing scope, select **Help** \> **About This Application**. The information box identifies your user ID and what type of editing permissions you have.

## Identifying the version of a form, object, or global script

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148011296.html

To identify the version of a form, select **Help \> About This Form**. The information box indicates whether the form is a vendor version, a site version, a group version, or a user version.

In the designer, the version of an object displays as a property in the grid or in the caption of the dialog. The version is also indicated when you view or edit global scripts.

## Unloading global form objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148011436.html

When you close a form, your Mongoose-based application keeps in memory the form and any associated global objects. If you have Site Developer editing permissions and change your editing scope by impersonating a different user, you must clear these forms and global objects from memory in order to display the versions that correspond to your new editing scope.

The option to unload global objects is found on the **Form** menu, **Definition** submenu.

**Note:** In addition to clearing form-related objects from memory, the **Unload All Global Form Objects** command can clear the IDO metadata cache. Clearing the cache is useful in IDO development with the IDO editing forms. Enable this option in the **User Preferences** window.

## Editing scope

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148144546.html

In WinStudio, the interaction between a developer's editing permission and his or her ability to save forms and global objects at a given level of the user-group-site hierarchy.

- To create an application, developers require Vendor developer editing permissions in order to create Vendor default versions of forms and global objects in the forms database.
- To customize a deployed application, developers require basic, full user, or site developer editing permissions in order to create user, group, or site versions of forms and global objects.

## User version

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148159866.html

In WinStudio, a form or global object customized with scope set to User. The version is associated with one user name in the system, and it is accessible only by that user. The version can be customized by the named user with Basic editing permission or Full User editing permission. It can also be customized by a user with Site Developer editing permission; in this case, the developer sets scope to User and specifies the user name.
