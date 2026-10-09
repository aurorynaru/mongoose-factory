# Form timer event

> Guide: Infor Mongoose Application and Form Development, Infor Mongoose 2026.x
> Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148067127.html
> Saved: 2026-10-09
> Trust: unverified (Infor documentation; not yet confirmed in this environment)
> Conversion: formatting only, original wording. Pages not retrieved: none

## StdFormTimerTick event

Source: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/lsm1454148067127.html

Occurs whenever the Timer interval is reached.

Forms that implement a timer must use an event handler of this type to trigger whatever action needs to be performed.

You can use any existing response type with this event.

When the timer is started, this event is raised even if the form is not currently active; that is, if you configure the response to refresh some collection on a form, the form is refreshed at the timer interval even if the form is not currently activated.
