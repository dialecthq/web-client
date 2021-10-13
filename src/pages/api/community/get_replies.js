import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import axios from "axios";

async function handler(req, res) {
  let posts = [];
  let { replies } = req.body;
  replies.forEach((reply, i) => {
    fire
      .firestore()
      .collection("posts")
      .doc(reply.uid)
      .get()
      .then((doc) => {
        let temp = doc.data();
        axios
          .get("http://localhost:3000/api/community/get_user", {
            params: {
              uid: reply.author,
            },
          })
          .then((data) => {
            temp.author = data.data.user;
            if (temp.replyTo) {
              fire
                .firestore()
                .collection("users")
                .doc(temp.replyTo.author)
                .get()
                .then((doc) => {
                  temp.rep = doc.data();
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).json({ message: err });
                });
            }
            posts.push(temp);
            let last = temp.dateCreated;
            if (i === replies.length - 1) {
              posts.sort((a, b) => b.dateCreated - a.dateCreated);
              res.status(200).json({ posts: posts, last: last });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
}

export default handler;
