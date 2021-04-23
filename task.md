This is a coding assignment.

Please start by looking at our developer’s portal https://documentation.crezco.com/

This outlines our “Partner API” which we offer to various platforms.

We want you to build a demo, using this API. You are not restricted in terms of your choice of tools, languages, frameworks, etc. Use whatever you feel the most comfortable with.

The demo should:

- Offer the user to onboard with Crezco using the workflow described here:
  https://documentation.crezco.com/docs/partner/docs/Tutorials/F%20Full%20Onboarding.md
- For the onboarded user, allow them to create an “invoice” – with minimal required detail, just an amount and reference should do it.
- Create a QR code and link for this invoice and display them to the user
- Receive a notification of payment via a webhook that you will have set up, or, alternatively, poll for status updates.
- Display “Paid” message (probably only in case of polling)

I appreciate that setting up a webhook may be problematic if you’re running locally. There are some ideas on demonstrating that webhook you set up actually works here:
https://documentation.crezco.com/docs/partner/docs/Tutorials/Web-hooks.md#test-a-webhook

You will be assessed both on your ability to work with background APIs and also on your presentation work. We also expect to look at your code, so please make that presentable, too.
