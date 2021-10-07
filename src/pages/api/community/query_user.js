import fire from "../../../utils/fire";

async function handler(req, res) {
  const { username } = req.query;
  console.log(username);
  fire
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.docs.length > 0) {
        res.status(200).json({ user: querySnapshot.docs[0].data() });
      } else {
        res.status(500).json({ message: err });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export default handler;
