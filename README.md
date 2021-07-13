# Crezco Demo App

A demo app which allows a user to:

- Onboard to Crezco
- Create an Invoice
- Create Crezco payment link and QR
- Recieve notification of payment via a webhook

## How to use

`yarn dev`
Starts the development server.

`yarn build`
Builds the app for production.

`yarn start`
Runs the built app in production mode.

# User journey

1. User is passed to Crezco to create an account - [index.js#L30-L32](https://github.com/Crezco-Limited/crezco-demo/blob/main/pages/index.js#L30-L32)
2. User is passed back to demo app with user UUID as query param
  - Middleware fetches user info - [get-user-props.js](https://github.com/Crezco-Limited/crezco-demo/blob/main/lib/get-user-props.js)
3. User inputs invoice details - [create-invoice.js](https://github.com/Crezco-Limited/crezco-demo/blob/main/pages/create-invoice.js)
  - This info is used to create a Pay Demand - [create-pay-demand.js](https://github.com/Crezco-Limited/crezco-demo/blob/main/lib/create-pay-demand.js)
4. Pay demand details presented to user — [invoice/\[id\].js](https://github.com/Crezco-Limited/crezco-demo/blob/main/pages/invoice/%5Bid%5D.js)
  - Pay demand details fetched from api — [get-pay-demand.js](https://github.com/Crezco-Limited/crezco-demo/blob/main/lib/get-pay-demand.js)
  - Page uses [Pusher] to listen on websocket for payment event. - [invoice/\[id\].js#L16-L31](https://github.com/Crezco-Limited/crezco-demo/blob/main/pages/invoice/%5Bid%5D.js#L16-L31)
  - A webhook has been configured to POST to an API endpoint when the payment is made which triggers a event - [api/payment-webhooks.js](https://github.com/Crezco-Limited/crezco-demo/blob/main/pages/api/payment-webhooks.js)


[Pusher]: https://www.pusher.com
