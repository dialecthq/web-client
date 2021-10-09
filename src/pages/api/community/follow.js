import fire from "../../../utils/fire";
import firebase from "firebase";
import { v4 as uuid } from "uuid";

async function handler(req, res) {
  let { profile, user } = req.body;

  fire
    .firestore()
    .collection("users")
    .doc(profile.uid)
    .update({
      followers: firebase.firestore.FieldValue.arrayUnion(user.uid),
    })
    .then((data) => {
      fire
        .firestore()
        .collection("users")
        .doc(user.uid)
        .update({
          following: firebase.firestore.FieldValue.arrayUnion(profile.uid),
        })
        .then(() => {
          res.status(200).json({ success: true });
          return;
        })
        .catch((err) => {
          console.log(err);
          res.status(200).json({ success: false });
          return;
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ success: false });
      return;
    });
}

export default handler;
