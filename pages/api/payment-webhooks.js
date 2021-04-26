import Pusher from "pusher";
const { PUSHER_API_KEY, PUSHER_API_SECRET } = process.env;

export default async function paymentWebhooks(req, res) {
  const pusher = new Pusher({
    appId: "1194378",
    key: PUSHER_API_KEY,
    secret: PUSHER_API_SECRET,
    cluster: "eu",
    useTLS: true,
  });

  if (req.method === "POST") {
    await req.body.map(async (webhook) => {
      console.log(
        "trigger with:",
        webhook.metadata.payDemandId,
        webhook.eventType
      );
      return await pusher.trigger(
        `payments-${webhook.metadata.payDemandId}`,
        `event-${webhook.eventType}`,
        {
          meta: req.body,
        }
      );
    });
  }

  if (req.method === "GET") {
    await pusher.trigger("test", "event", {
      hello: "world",
    });
  }

  res.status(200).json({ recieved: req.method });
}
