import fire from "../../../utils/fire";
import firebase from "firebase";
import { v4 as uuid } from "uuid";

async function handler(req, res) {
  if (req.method === "POST") {
    const { user, postContent, post } = req.body;
    const uid = uuid();
    const dateCreated = new Date().getTime();
    fire
      .firestore()
      .collection("posts")
      .doc(uid)
      .set({
        uid,
        content: postContent,
        likers: [],
        dateCreated,
        author: user.uid,
        replyTo: {
          post: post.uid,
          author: post.author.uid,
        },
      })
      .then(() => {
        fire
          .firestore()
          .collection("posts")
          .doc(post.uid)
          .update({
            replies: firebase.firestore.FieldValue.arrayUnion({
              uid: uid,
              dateCreated,
              author: user.uid,
            }),
          })
          .then(() => {
            res.status(200).json({ completed: true });
          })
          .catch(() => {
            console.log(error);
            res.status(500).json({ error: error });
          });
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
