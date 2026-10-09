# Form Control

> Guide: Infor Mongoose Core Extensibility Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147708525.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About Form Control

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147708525.html

Form Control is a version-control tool for objects being developed for the presentation layer (client tier) of a Mongoose-based application. The Mongoose clients are form-presentation and -editing engines used to create and modify forms and global objects. These objects are stored in the forms and templates databases that are configured for your application.

Form Control is used to access the objects stored in these forms and templates databases. Form Control tracks versions of objects and supports access to a repository of versions and an archive of deleted objects. Although implementing Form Control is optional, this tool is particularly useful when several developers are working on an application, as it allows one developer to lock a form or global object while working on it, so that other developers cannot work on the same object at the same time.

Use Form Control to check out objects from the "master" databases (which contain the current versions of objects) to "run-time" databases (which temporarily store the objects) for editing. After editing the objects in a client, you then use Form Control to check the edited objects back in to the master databases. If you use a source control system, Form Control simultaneously checks objects in to source control when you check objects in to the master databases.

You can also delete objects from the master and run-time databases and can copy them to archive databases. These previous versions of objects are then available through source control.

**Note:**  You can use Form Control only with login IDs having Site Developer or Vendor Developer editing permissions. When you log in to Form Control, make sure you select **Site** in the **Scope** field.

Before any operation is performed on objects, Form Control checks the master and run-time databases for changes, and refreshes the cache before proceeding with any operation.

### Before you begin

Form Control functionality is accessed either from the **Form Control** form or (in on-premises installations) the **Form Control** stand-alone utility.

Before you can use Form Control, you must use the Configuration Manager utility to create at least one system configuration. Use Configuration Manager to create a configuration, including a tools login that is used to open Form Control and to track check-ins and check-outs. The tools login must have Vendor Developer editing permissions in your application.

**Note:** In most established Mongoose work environments, including a Multi-Tenant Cloud situation, an authorized system administrator will have already created any necessary configurations for your use. If you need to have a configuration created, and you do not have access to the Configuration Manager utility, request your authorized system administrator to create one for you.

For more information about setting up configurations, see the help for the Configuration Manager.

### The basic functionality of Form Control

This diagram illustrates the basic functionality of Form Control:

\[Image: FormControl flow diagram\]

Use Form Control to check out (from the master databases) any forms or global objects that you want to edit. Form Control places copies of the objects in the run-time database while you have them checked out.

After you check out an object, use the Web Designer to make the desired changes. You can also use your client to create new objects. In either case, saving changes in your application stores the changes in the run-time database copy.

When you are finished working with the object, use Form Control to check the object back in to the master database. You can check in at one time both any objects that you checked out and any new objects you have created.

While using Form Control, keep this information in mind:

- Form Control works only with the vendor and site default versions of a form or global object. Only developers with Site Developer or Vendor Developer editing permissions can create site or vendor default versions.
- Checking out an object locks it for your use and prevents other developers from checking it out or saving other changes to it.

  **Note:**  Other developers can view and work with the form or object in the Web Designer/Design Mode, but they cannot save their changes until you check it back in.
- Checking in objects that you checked out removes the lock on the object.
- If you create and save a new object, your Mongoose-based application saves the object in the appropriate run-time database. It cannot be overwritten, because the object does not yet exist in the master database (until you check it in).
- Checking in new objects adds them to the master databases and allows Form Control to track them.
- If you make and save changes to an object that is not checked out (to you or anyone else), your changes will be overwritten the next time anyone checks that object out. To help prevent this from happening, you can set a User Preference to warn developers about this type of situation.

### Tips

- If you cannot check out an object because it is locked, Form Control displays the user ID of the developer who has the object checked out.
- When you check out a form, you can see a list of all the associated global objects and can check out all or some of those objects at the same time.

  For more information, see [Checking Out Forms](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147995197.html).
- When you check out a form, you can also check out the form template associated with it.

  For more information, see [Checking Out Forms](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147995197.html).
- You can check out global objects independently, regardless of the forms they are associated with.

  For more information, see [Checking Out Global Objects](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147995400.html).
- You can display a report of all the objects you have checked out.

  For more information, see [Displaying the Current Status of Forms and Global Objects](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147988099.html).
- If you want to examine or test objects, you can get a copy of the current version of the object without checking it out. In this way, many developers can get the same object, even if the object is locked to a developer. If changes are made, however, they are not permanent because they cannot be checked in.
- You can archive a form or global object. Archiving deletes the object from both the master and run-time databases and moves it to the corresponding archive database.

  For more information, see [Archiving Forms](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147993387.html) or [Archiving Global Objects](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147993575.html).

## Form Control tasks

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147708728.html

Form Control is essentially a file- and version-control manager. You can use it to control who can work on certain forms or global objects in a multi-developer environment. Form Control is limited to these basic tasks:

- [Checking objects out](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147708884.html)
- [Checking objects in](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709399.html)
- [Getting objects](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709555.html)
- [Unlocking objects](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709726.html)
- [Archiving objects](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709898.html)
- [Restoring objects](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147710054.html)
- [Displaying status of objects](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147986445.html)

## Checking out objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147708884.html

Checking out a form or global object allows you make changes to the object, without having to worry about others overwriting your changes. When you check out an object, Form Control locks the object, so that no one else can make permanent changes to it until you check it back in or unlock it.

You can check out an object only if no one else already has it checked out.

You can check out these objects:

- Forms, with or without their associated templates and/or global objects
- Global objects, regardless of whether they are associated with forms

During a check-out procedure, Form Control performs these tasks:

- Verifies that no one else has the object checked out

  If an object is checked out already, the system displays a message that identifies who has it checked out. You cannot check out the object until the other developer checks it in.
- Warns if device types exist for a form but are not synchronized between databases.

  For more information, see [Utilities Tab](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147961969.html).
- Copies the object from the master database to the appropriate run-time database and locks it in the master database

  That is, the **LockBy** column contained in the forms or templates database is set to your user ID, indicating that you have the item checked out. Your Mongoose-based application prevents other developers from checking out or saving changes to any objects that you have checked out.

## Displaying and maintaining checked-out objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709056.html

You can display a list of everything you have checked out, and you can unlock or check in items from the list. This display can include only certain types of objects, such as forms, or it can display all objects. This list can also include objects that you have created but not yet checked in.

Once the list is displayed, you can select which objects you want to take further actions with. Those further actions can include checking in selected (or all) objects or unlocking them without checking them in. When unlocking objects, they revert to the state they were in when they were first checked out.

## Checking in objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709399.html

Checking in a form or global object replaces the original version in the master database with the edited version from the run-time database. This action effectively makes the changed object the official current version.

You can check in an object only if one of these situations is true:

- You have the object checked out.
- The object is new and does not yet exist in the master database.

You can check in these objects:

- Forms, with or without their associated templates and/or global objects

  **Note:** To check in associated templates and/or global objects, you must have those objects checked out as well.
- Global objects, regardless of whether they are associated with forms

During a check-in operation, Form Control performs these tasks:

- Verifies that any objects you are trying to check in were checked out to you, or that the objects are new and do not exist in the master databases.
- Copies the objects from the run-time databases to the appropriate master databases.
- If your system is integrated with a source control system, checks the objects into source control.

  Following check-in, Form Control displays a dialog box that indicates any generated files that were not checked in or added to source control.
- Unlocks the objects in both the master and run-time environments.

  That is, the **LockBy** column contained in the form and templates databases is set to an empty string, indicating that no one has the item checked out.

## Getting objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709555.html

"Getting" a global object allows you to retrieve a copy of the object without putting a lock on it or formally checking it out. Getting an object that no one has checked out enables several people to work with it at once, but no changes can be made permanent without actually checking out the object. So, typically, you would get an object (as opposed to checking it out) only when you want to make changes of an experimental nature without worrying about the changes becoming permanent.

**Note:** Both getting and checking out an object overwrite any existing copies in the run-time database with the version currently in the master database. This means that you cannot make changes made to a "get" version permanent, as you cannot check in a "get" version, and any changes you make are overwritten when you check it out.

You can get these objects:

- Forms, with or without their associated templates and/or global objects
- Global objects, regardless of whether or not they are associated with forms

During a get operation, Form Control performs these tasks:

- Verifies that no one has the object checked out.

  If an object is checked out by someone other than you, you cannot get it. (The **Execute Action** button is disabled in this case.)

  **Caution:** If the object is already checked out to you, you can get the object, but doing so overwrites whatever changes you have made to the object since checking it out. In effect, this reverts the object to the state it was in when you checked it out.
- Copies the object from the master database to the appropriate run-time database.

## Unlocking objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709726.html

Unlocking an object effectively reverts it to the state it had before you checked it out. If you are using a source control system, this also undoes the check-out for source control. This is typically most useful when you have made changes, and then you decide you do not want to keep them.

**Note:** You can unlock objects that you have previously checked out and objects that others have checked out. Other developers can also unlock objects that you have checked out.

You can unlock these objects:

- Forms, with or without their associated templates and/or global objects
- Global objects, regardless of whether they are associated with forms

During an unlocking operation, Form Control unlocks the objects in both the master and run-time environments. The **LockBy** column contained in the form and templates databases is set to an empty string, indicating that no one has the item checked out.

## Archiving objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147709898.html

Archiving a form or object removes it from the active development environment and places it in a special archive database. Generally, you archive objects only when you are no longer using them but want to keep copies for reference or possible later restoration.

You can archive objects only if they are not checked out by anyone.

You can archive these objects:

- Forms, with or without their associated templates and/or global objects
- Global objects, regardless of whether or not they are associated with forms

During an archive operation, Form Control performs these tasks:

- Moves the object to the appropriate archive form or templates database
- Deletes the object from the master and run-time databases

## Restoring objects

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147710054.html

Restoring a form or object retrieves it from the archive database and places it back in the appropriate master database.

You can restore only objects that have been previously archived.

You can restore these objects:

- Forms, with or without their associated templates and/or global objects
- Global objects, regardless of whether they are associated with forms

During a restore operation, Form Control performs these tasks:

- Retrieves the object from the appropriate archive form or form templates database
- Copies the object to the appropriate master database
