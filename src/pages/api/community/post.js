import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";

async function handler(req, res) {
  if (req.method === "POST") {
    const { user, postContent } = req.body;
    const uid = uuid();
    fire
      .firestore()
      .collection("posts")
      .doc(uid)
      .set({
        uid,
        content: postContent,
        likers: [],
        dateCreated: new Date().getTime(),
        author: user.uid,
      })
      .then(() => {
        res.status(200).json({ completed: true });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error });
      });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

export default handler;
