import fire from "../../utils/fire";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function handler(req, res) {
  if (req.method === "GET") {
    const { customer_id } = req.query;
    try {
      const customer = await stripe.customers.retrieve(customer_id);
      console.log(customer.subscriptions);
      res.send(200);
    } catch (err) {
      console.log(err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}

export default handler;
