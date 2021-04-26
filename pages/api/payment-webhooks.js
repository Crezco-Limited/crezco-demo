import Pusher from "pusher";
const { PUSHER_API_KEY, PUSHER_API_SECRET } = process.env;

const pusher = new Pusher({
  appId: "1194378",
  key: PUSHER_API_KEY,
  secret: PUSHER_API_SECRET,
  cluster: "eu",
  useTLS: true,
});

export default async function paymentWebhooks(req, res) {
  if (req.method === "POST") {
    await Promise.all(
      req.body.map(async (webhook) => {
        return await pusher.trigger(
          `payments-${webhook.metadata.payDemandId}`,
          `event-${webhook.eventType}`
        );
      })
    );
  }

  res.status(200).json({ recieved: req.method });
}
