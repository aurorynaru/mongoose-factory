# Background tasks

> Guide: Infor Mongoose Administration Guide, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/lsm1454147657138.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## About background tasks

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/lsm1454147657138.html

Background tasks are operations or activities that can be set up to run in the background. Many reports, utilities, and some activities can be scheduled to run daily, weekly, or monthly. After the process is scheduled, it runs automatically in the background at a set time, using your selection criteria and option settings.

Most reports that are run as background tasks are placed on a list of active background tasks, to be run as scheduled or demanded. You can also set up other tasks to run in the background. The Infor Framework TaskMan service regularly polls the list of active background tasks and executes any task that is posted as **READY** to be executed.

### Forms used with background tasks

These are the basic forms and utilities associated with background tasks:

- **Background Task Definitions**: Use this form to create records that define and identify background tasks for TaskMan. TaskMan then monitors the application database in order to execute these defined background tasks, either on demand or as scheduled.
- **Active Background Tasks**: Use this form to schedule background tasks and to view the statuses of background tasks that are waiting to execute or are in progress.
- **Background Task History**: Use this form to display information about background tasks that have been run, and whether they completed successfully. If not, this form also displays associated error messages.
- **Active Background Task Purge Utility**: Use this form to purge (usually) long-running active background tasks that are in **READY** or **RUNNING** status. This utility can be used for tasks that have become "hung" or that have been created accidentally and are no longer needed.
- **Background Queue**: Use this form to specify when and/or how often, the task from the 'parent' form is to run.

### Guidelines for creating background tasks

Background tasks must meet these requirements:

- The task name should match the form name, to make it easier to identify.
- Stored procedures must be written in SQL and reside in your SQL Application Database. Utility and activity forms generally use the **Executable Type**: **SP** (stored procedure).
- Executable programs must reside in a directory available to the directory where TaskMan resides.
- These types of reports are supported as background tasks:
  - **DATAVIEW**: Reports based on predefined DataViews and their layouts.
  - **FORM**: Reports created using the Report form type.
  - **SSRS**: (Deprecated) Reports created using Microsoft SQL Server Reporting Services (SSRS).

  **Note:** To enable the **Report Type** options, you must select **RPT** (Report) as the **Executable Type**.
- IDO methods, as background tasks, specify a method name (in the format `IDO.Method`--for example, **MyProgID.SLSites.MyTestMethod**)--and use the **Executable Type** **IDOMTH**. When processing tasks of this type, TaskMan requires a configuration with the same name as the site name. On the machine where TaskMan is running (typically the application server), you must create a configuration where the configuration name matches the database site name, if one does not already exist.

### Background task statuses

The status of an active or scheduled background task displays on the **Active Background Tasks** form. The status might be any of these, depending on how the task is defined and scheduled:

- **READY**: The task has been submitted and is ready to execute.
- **RUNNING**: The task is currently executing.
- **WAITING**: The task is scheduled and on hold until some requirement (usually the scheduled day/time) is met.
- **PROCESS**: The task is a scheduled task that has spawned a 'child' task that is either **READY** or **RUNNING**.

The status of a task that has already run or is currently running displays on the **Background Task History** form. The status indicates one of these cases:

- **Task Succeeded**
- **Task Failed \- Error -1**: The task failed to finish and generated an error. The explanation of the error is provided in the **Error Message** field.
- **Task Cancelled \- Error -2**: The task was cancelled at the request of a user. When this is the case, the explanation of the cancellation is provided in the **Error Message** field.

### Scheduling background tasks

Background tasks are set up using the **Background Task Definitions** form. They can also be scheduled to run on a once-only or recurring basis using the **Active Background Tasks** form or the **Background Queue** form.

**Note:** When scheduling background tasks, keep these facts in mind:

- Forms can only be scheduled to run as background tasks if they have the **Background** option available on the **Actions** menu.
- To schedule (and run) background tasks, you must have the Infor Framework Event Service configured and running.

Once scheduled, background tasks can only be deleted if they have a **Status** of **WAITING** on the **Active Background Tasks** form. Tasks that are in a status of **READY** or **RUNNING** can be canceled without deleting them.

## About background task definitions

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/tpn1662008545750.html

Background task definitions instruct the Infor Framework TaskMan service how to process background tasks when they run.

Create background tasks only for your organization's custom forms and reports. Where needed, background task definitions are already set up for standard forms and reports; and those background task definitions are listed on the **Background Task Definitions** form.

Use the **Background Task Definitions** form to create a record that identifies the background task to TaskMan. Every report and every utility or activity that can be run as a background process must be listed in this form.

Ensure that background tasks meet these requirements:

- The task name must match the form name to make it easier to identify.
- Some (older) reports are processed and generated using the Microsoft SQL Server Reporting Service (SSRS). For these reports, the output file must be placed in the **Reports** folder on the same Application Server where TaskMan is installed. Although the report uses a stored procedure or IDO, its **Executable Type** must be set to **RPT**.

## Creating a background task definition

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/scl1541562256920.html

To create a background task definition, use this procedure:

1. Open the **Background Task Definitions** form and execute Filter-In-Place.
2. Initiate a new task record.
3. Provide this information: 

   Task Name

   Specify a name for the task.

   Task Description

   Optionally, provide a helpful description of the task.

   Executable Name

   Specify the object to be executed as a background task:
   - For a stored procedure, specify the name of the stored procedure.
   - For a report, specify the name of the DataView to be used to generate the report.
   - For an IDO method, specify the name of the IDO method.

   Executable Type

   Select the type of object to be executed as a background task:
   - For a stored procedure, select **SP**.
   - For a report, select **RPT**.
   - For an IDO method, select **IDOMTH**.

   Exclusive

   To prevent more than one instance of the task from running simultaneously, select this option.

   Report Type

   Select which type of report generator is to be used to generate the report:

   **Note:** This field is enabled only if you select **RPT** as the **Executable Type**.

   - **DATAVIEW**: Reports based on DataViews and their layouts.

     When this report type is specified, the **Executable Name** field must contain the name of the predefined DataView, followed by a dash and the name of the DataView layout to be used for the report.

     For example, you might have a predefined DataView named "Customer Orders" and a layout named "Print" that you use to send the report output to a printer. In this case, you would specify the **Executable Name** as **Customer Orders-Print**.

     This report type supports output only to PDF or Excel formats.
   - **FORM**: Reports created using the Report form type.

     When using this report type, use the form name (not caption) in the **Executable Name** field.

     This report type supports output only to the PDF format.
   - **SSRS**: (Deprecated) Reports created using Microsoft SQL Server Reporting Services (SSRS).

     The report output file must be placed in TaskMan's reports subdirectory on the server. Although the report uses a stored procedure, its **Executable Type** must be set to **RDL**, since it requires special handling through SSRS.

   Report Options

   To launch the **Report Options** form, in which you can make various settings for the output of a report, click this button.

   **Note:** This button is enabled only if you select **RPT** as the **Executable Type**.

   Paper Size

   Select the size of paper to be used for the report output.

   For descriptions of the various paper sizes available, see [List of report paper size options](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/lsm1454147964060.html).

   **Note:** This field is enabled only if you select **RPT** as the **Executable Type**.

   Maximum Concurrent

   Specify the maximum number of concurrent instances of this task you want TaskMan to allow.

   The default value is **20**.

   Valid values are positive integers. A value of **-1** means any number of concurrent instances of this task are allowed to run, up to other limits imposed on all tasks.

   **Caution:** Do not attempt to use a value of zero (**0**), as it disables the task completely.

   Isolation Level

   Select the transaction isolation level to use when running stored procedure tasks (**Executable Type** is set to **SP**) or report stored procedures (**Executable Type** is set to **RPT**):
   - **COMMITTED**: All queries run from this stored procedure see only data for which the query can get a shared lock. No reads of uncommitted data are performed.
   - **UNCOMMITTED**: All queries run from this stored procedure can read uncommitted data. Use this option carefully, since it can display data that has not yet been committed in the database.

   If no isolation level is set in this form, the stored procedure uses the global Collection Read Mode value from the **Process Defaults** form. If that value does not exist, the stored procedure uses **COMMITTED** as the transaction isolation level.
4. Save.

## Managing background tasks

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/kit1541668027953.html

Use these forms to schedule some processes to run at certain times of day and at regular intervals:

- **Background Task Definitions**: Use this form to create definitions that identify each background task to TaskMan. TaskMan uses these definitions to monitor the Application Database in order to execute background tasks.

  Every report, and every utility or activity that can be run as a background process, must be listed and defined on this form.
- **Background Queue**: Use this form to specify when and/or how often, the task from the parent form is to run.

  This form can be accessed through the **Actions** menu on many reports, activities, and utilities. Each time the task runs, this form uses any search criteria you may have set up.
- **Active Background Tasks**: Use this form to schedule background tasks and to view the background tasks that are waiting to run or are in progress.

  This form provides many options for scheduling background tasks. This is especially important when scheduling background tasks that recur. Many of these scheduled background tasks are for reports that are to be produced on a regular basis. You can, however, also schedule other tasks, such as utilities that can run operations in the background.
- **Background Task History**: Use this form to display information about background tasks that have been run, and whether they have completed successfully.

  Return codes generated by background tasks display here.

  These types of tasks can be displayed:

  - Reports (**RPT**): Background tasks of the type **RPT** are for reports of any of the currently supported report types.

    **Note:** If the Report Server has been set up in the Application settings of the Configuration Manager, the server name, logical folder name, and file server path where the report output is written, display on this form. This information can be used to retrieve the file even if the configuration changes at a later time.
  - Stored procedures (**SP**): Developers supply the exit status for a stored procedure within the coding of the procedure. Generally, the exit status of the stored procedure functions as its return code, which is returned by TaskMan and displays on this form.
  - IDO methods (**IDOMTH**): IDO methods can be called by a background task, usually with parameters. The method code then returns a status of success or failure and, optionally, a message that can be displayed on this form. In this sense, the IDO method can be used in a way similar to the way stored procedure background tasks are used.

## Scheduling background tasks (developer or administrator)

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/lsm1454147676701.html

1. Use the **Background Task Definitions** form to create the background task. 

   If you already have a background task created that you want to schedule, skip this step.

   For the procedure to create a background task, see [Creating a background task definition](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/scl1541562256920.html).
2. Optionally, to schedule the task to run in the background, use the options on the **Background Queue** form to do the scheduling. 

   You can schedule the task to run only once or on a recurring daily, weekly, or monthly basis.

   **Note:** For scheduled background tasks to run, you must have the Infor Framework Event Service configured and running.
3. Use the **Background Task History** form to check and see if the task is running or waiting. 

   When TaskMan starts a task, it updates the **Started** field in the **Status Information** group box. If the **Completed** field is blank, the task is still running.

   **Note:** You can also use the **Active Background Tasks** form to see which tasks are currently running.
4. Optionally, view details about the completed task. 

   After TaskMan has completed the task, even if it fails, you can view details about its execution on the **Background Task History** form, which displays this information:
   - **Task Information**
   - **Status Information**
   - Other details about the task
   - Messages triggered by the task

## Modifying forms to submit tasks to the background queue

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/lsm1454147668807.html

The application runs reports as background tasks that are placed on a "queue" to be run in order. You can also set up other tasks to run in the background. The TaskMan service polls the list of **Active Background Tasks** and executes any new task that is posted to the queue with a status of **READY**.

1. To set up the form for which you want the background task to run: 
   1. Add a MenuItem component called **BackgroundQueue** to the form.
   2. On the **Behavior** tab, add **RunBackgroundQueue** as the primary event.
   3. Create a **RunBackgroundQueue** event of type **Run Form As Modal Child**. 

      The parameters for the event should be as shown in this example, where **GenerateReport** is the name of the form's **Run Background Task** event: `BackgroundQueue( SETVARVALUES(BGTaskName=V(BGTaskName), RunTaskEvent=GenerateReport) )`
   4. Add parameters to the end of the parameter string for the Run Background Task event that submits the task: 

      `TASKSTATUS(V(BGTaskStatus))TASKNUMBER(BGTaskNumber) `

      Use these keywords and parameters:

      - TASKSTATUS is an optional input parameter to BGTaskSubmit. If the TASKSTATUS keyword is omitted, or if its value is anything other than **WAITING**, the task is inserted into the ActiveBGTasks table with a status of **READY** and is run by TaskMan. If TASKSTATUS is set to **WAITING**, the task is entered in the ActiveBGTasks table with a status of **WAITING**. TaskMan ignores any records in this table with a status other than **READY** or **RUNNING**.
      - TASKNUMBER is an optional keyword used to specify the name of a variable that holds the TaskNumber generated when a record is inserted into the ActiveBGTasks table.
      - You can include substitution keywords that are replaced by appropriate values after the task is submitted to TaskMan.
2. Create a background task. 

   For the procedure, see [Creating a background task definition](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/scl1541562256920.html).
3. Configure the form event you created in Step 1 to run the background task you just created.
4. Save your work and test the form event to make sure it works as expected.

You can use the **Active Background Tasks** form to see which tasks are currently running.

After TaskMan has completed the task, even if it fails, you can view details about its execution on the **Background Task History** form. Details include:

- Task description
- Return status
- User who submitted the task
- Messages triggered by the task

## Running stored procedures and IDO methods

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/zrk1541564076963.html

In addition to running reports, you can use TaskMan to run stored procedures or IDO methods.
