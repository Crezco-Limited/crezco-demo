import Pusher from "pusher";
const { PUSHER_API_KEY, PUSHER_API_SECRET } = process.env;

const pusher = new Pusher({
  appId: "1194378",
  key: PUSHER_API_KEY,
  secret: PUSHER_API_SECRET,
  cluster: "eu",
  useTLS: true,
});

export default function paymentWebhooks(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    req.body.map((webhook) => {
      console.log("trigger with:", webhook.id, webhook.eventType);
      pusher.trigger(`payments-${webhook.id}`, `event-${webhook.eventType}`, {
        meta: req.body,
      });
    });
  }

  res.status(200).json({ recieved: true });
}
