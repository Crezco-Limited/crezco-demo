import Pusher from "pusher";
const { PUSHER_API_KEY, PUSHER_API_SECRET } = process.env;

export default function paymentWebhooks(req, res) {
  const pusher = new Pusher({
    appId: "1194378",
    key: PUSHER_API_KEY,
    secret: PUSHER_API_SECRET,
    cluster: "eu",
    useTLS: true,
  });

  if (req.method === "POST") {
    req.body.map((webhook) => {
      console.log(
        "trigger with:",
        webhook.metadata.payDemandId,
        webhook.eventType
      );
      return pusher.trigger(
        `payments-${webhook.metadata.payDemandId}`,
        `event-${webhook.eventType}`,
        {
          meta: req.body,
        }
      );
    });
  }

  if (req.method === "GET") {
    pusher.trigger("test", "event", {
      hello: "world",
    });
  }

  res.status(200).json({ recieved: req.method });
}
