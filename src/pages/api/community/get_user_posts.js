import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import axios from "axios";

async function handler(req, res) {
  let posts = [];
  let { last, uid } = req.query;

  axios
    .get("http://localhost:3000/api/community/get_user", {
      params: {
        uid: uid,
      },
    })
    .then((result) => {
      const author = result.data.user;
      fire
        .firestore()
        .collection("posts")
        .where("author", "==", uid)
        .orderBy("dateCreated", "desc")
        .startAfter(last)
        .limit(10)
        .get()
        .then((querySnapshot) => {
          const promise = new Promise((resolve, reject) => {
            querySnapshot.docs
              .forEach((doc, i) => {
                let temp = doc.data();
                temp.author = author;
                posts.push(temp);
                last = temp.dateCreated;
                if (i === querySnapshot.docs.length - 1) {
                  posts.sort((a, b) => b.dateCreated - a.dateCreated);
                  resolve();
                }
              })
              .catch((err) => {
                console.log(err);
                reject();
              });
          });
          promise.then(() => {
            res.status(200).json({ posts: posts, last: last });
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ ...err });
        });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export default handler;
