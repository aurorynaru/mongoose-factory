# IDOs

> Guide: Infor Mongoose Core Extensibility Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147697855.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About IDOs

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147697855.html

An Intelligent Data Object (IDO) is a business object that encapsulates units of information and logic that are called from the client layer to interact with data in the database. The basic job of the IDO is to transport collections of data back and forth between the client and the database, with any validation or rules needed.

### IDO elements

An IDO consists of these elements:

- A set of one or more SQL tables

  Each table contains the data for a specified part of the application and must include columns (representing properties) that the application requires to work properly.
- A set of properties

  A property may represent persistent data stored in the application database, derived data, or temporary data used to communicate information to the middle tier. A property may also represent a whole subcollection of data.
- A set of standard methods

  All IDOs implement these methods:

  - LoadCollection: Retrieves a collection of rows from the database
  - UpdateCollection: Takes a set of rows marked for insert, update, or delete, and executes the appropriate SQL code on the database
  - GetPropertyInfo: Returns detailed information about the properties supported by the IDO
  - Invoke: Allows the application to call and execute a custom method

Using "configurations", Application Databases are linked with an Objects Database and a Forms Database.

**Note:** These three types of data might be contained within a single "All-in-One" database.

### Defining an IDO

The IDO forms serve as the development environment for the definitions of IDOs. IDO definitions are stored as metadata in the Objects Database. You can create and edit this metadata using the IDO forms.

The **IDOs** form is commonly used as the starting point to define an IDO. IDO definitions include these elements:

- Attributes for the IDO itself
- References to tables in the Application Database
- Property definitions for table columns
- Metadata about methods defined for the IDO

You can access and develop all of these elements from the **IDOs** form. You can also access the row-level security that can be defined for IDOs.

The metadata that you edit in the **IDOs** form is stored in the Objects Database (or its equivalent in the All-in-One database).

Existing IDOs must be checked out before they can be edited. You can only check out IDOs that have the same **Access As** setting as your development environment.

You can also perform these tasks using the **IDOs** form:

- Add, edit, or delete an IDO.

  **Note:** You can use deletion rules to determine what is to happen when one or more records meet specified criteria for other IDOs that reference properties in the one you want to delete. Define these deletion rules on the **Rules** tab.
- View the elements and attributes of an IDO.
- Edit or remove an IDO table.
- Add a base or secondary table to an IDO.
- Add a property to an IDO.
- Edit an IDO property.
- Add a method to an IDO.
- Edit an IDO method.

### How IDOs are used

Forms use IDOs in multiple ways. Forms that interact with the data in the Application Database define collections based on IDOs. Many types of validators and list sources are built over IDOs.

The Application Event System (AES) also leverages IDOs. Many of the framework AES events are generated as the application operates on IDOs. Many of the actions that are provided in the AES operate on IDOs. This allows you to quickly define business processes, automation rules, or general server-side logic in your application.

**Note:** You can view the AES events that are associated with an IDO on the **Workflow Summary** tab.

## About extending and replacing IDOs

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147698026.html

This application allows for the creation of new IDOs (Intelligent Data Objects) that inherit all the properties, methods, tables, and extension classes from an existing IDO. The relationship between the newly created IDO and the original (base) IDO is called an "extended" relationship: The new IDO inherits these elements from the base IDO and adds to them.

You can optionally mark an extended IDO to be used as a replacement for the base IDO. When an extended IDO replaces its base IDO, the application reroutes all IDO requests that are targeted for the base IDO to the extended IDO instead. The requests affected by this rule include GetPropertyInfo, LoadCollection, UpdateCollection, and Invoke requests.

Use the **IDO Wizard** to extend or extend-and-replace an IDO. This wizard, which is accessible from the **IDOs** form, includes the **Extends** option and the **Extend and Replace** option. See [Adding an IDO](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/lsm1454147700039.html).

An extended IDO can only make additive changes to the base IDO. That is, new properties, methods, tables, or extension classes can be added, but none of the base properties, methods, tables, or extension classes can be modified or deleted. New properties can be bound to columns from tables in the extended IDO or in the base IDO. Likewise, new "derived properties" can reference properties in the extended IDO, as well as properties in the base IDO.

An extended IDO can itself be extended by one or more other IDOs. There is no hard limit to the number of levels in an inheritance chain. While any number of extended IDOs can share the same base IDO, no more than one sibling IDO can be used as a replacement for the base IDO.

When the IDO Runtime Service processes IDO requests, it generates events that might be handled by IDO extension classes. If an extended IDO has one or more base IDOs that have extension classes associated with them, the events fire in all extension classes, but the order in which they fire is indeterminate.

The base IDO and the **Extend and Replace** option can only be set when creating a new IDO. The attributes are read-only for existing IDOs.
