const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

async function handler(req, res) {
  console.log(process.env.STRIPE_SECRET_KEY)
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: "price_1JaArKHYzxnQtDKl8l3LDRMQ",
            quantity: 1
          }
        ],
        payment_method_types: ["card"],
        mode: "subscription",
        success_url: `${req.headers.origin}/loading?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`
      })

      res.setHeader("Access-Control-Allow-Origin", "*")
      return res.json({ url: session.url })
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
