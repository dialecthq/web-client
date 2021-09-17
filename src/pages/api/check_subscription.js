import fire from "../../utils/fire"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

async function handler(req, res) {
  if (req.method === "GET") {
    const { subscription_id } = req.query
    try {
      const subscription = await stripe.subscriptions.retrieve(subscription_id)
      if (subscription.plan.active) {
        res.status(200).json({ active: true })
      } else {
        res.status(500).json({ active: false })
      }
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader("Allow", "GET")
    res.status(405).end("Method Not Allowed")
  }
}

export default handler
