import fire from "../../../utils/fire";
import axios from "axios";

async function handler(req, res) {
  const { uid } = req.query;
  fire
    .firestore()
    .collection("posts")
    .doc(uid)
    .get()
    .then((document) => {
      let temp = document.data();
      axios
        .get("http://localhost:3000/api/community/get_user", {
          params: {
            uid: temp.author,
          },
        })
        .then((data) => {
          temp.author = data.data.user;
          res.status(200).json({ post: temp });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export default handler;
