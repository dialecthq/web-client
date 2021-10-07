import fire from "../../../utils/fire";

async function handler(req, res) {
  const { uid } = req.query;
  fire
    .firestore()
    .collection("users")
    .doc(uid)
    .get()
    .then((document) => {
      res.status(200).json({ user: document.data() });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export default handler;
