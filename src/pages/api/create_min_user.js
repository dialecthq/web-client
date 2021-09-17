import fire from "../../utils/fire"
import strings from "../../utils/data/strings"
import rooms from "../../utils/data/rooms"
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

async function handler(req, res) {
  if (req.method === "POST") {
    const { session_id } = req.body
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id)
      if (session.customer) {
        try {
          const authRef = await fire
            .auth()
            .createUserWithEmailAndPassword(
              session.customer_details.email,
              Math.random().toString(36).slice(2) +
                Math.random().toString(36).toUpperCase().slice(2)
            )
          const { user } = authRef
          const username = uniqueNamesGenerator({
            dictionaries: [adjectives, colors, animals],
            separator: "-",
            length: 3
          })
          const inferredNativeLanguage = rooms.filter((e) =>
            strings.getLanguage().includes(e.code)
          )[0]
          const languages = [{ key: inferredNativeLanguage.key, level: 7 }]
          try {
            const userObj = {
              uid: user.uid,
              name: session.customer_name || "Joe Smith",
              username,
              email: user.email,
              tokens: 10,
              languages,
              stripe_id: session.customer,
              subscription_id: session.subscription
            }
            const docRef = await fire.firestore().collection("users").doc(user.uid).set(userObj)
            res.status(200).json({ completed: true, user: userObj })
          } catch (err) {
            console.log(err)
            res.status(err.statusCode || 500).json(err.message)
          }
        } catch (err) {
          console.log(err)
          res.status(err.statusCode || 500).json(err.message)
        }
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
