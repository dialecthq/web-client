import fire from "../../../utils/fire";
import firebase from "firebase";
import { v4 as uuid } from "uuid";

async function handler(req, res) {
  let { post, user } = req.body;

  fire
    .firestore()
    .collection("posts")
    .doc(post.uid)
    .update({
      likers: firebase.firestore.FieldValue.arrayRemove(user.uid),
    })
    .then((data) => {
      res.status(200).json({ success: true });
      return;
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ success: true });
      return;
    });
}

export default handler;
