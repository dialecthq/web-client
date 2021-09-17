import fire from "../../utils/fire"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

async function handler(req, res) {
  if (req.method === "POST") {
    const { session_id, uid } = req.body
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id)
      if (session.customer) {
        fire
          .firestore()
          .collection("users")
          .doc(uid)
          .update({
            subscription_id: session.subscription,
            stripe_id: session.customer
          })
          .then(() => {
            res.status(200).json({ completed: true })
          })
          .catch(() => {
            res.status(500).json({ completed: false })
          })
      }
    } catch (err) {
      console.log(err)
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}

export default handler
