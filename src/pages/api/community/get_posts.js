import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import axios from "axios";

async function handler(req, res) {
  let posts = [];
  let last = req.query.last;
  fire
    .firestore()
    .collection("posts")
    .orderBy("dateCreated", "desc")
    .startAfter(last)
    .limit(10)
    .get()
    .then((querySnapshot) => {
      const promise = new Promise((resolve, reject) => {
        querySnapshot.docs.forEach((doc, i) => {
          let temp = doc.data();
          axios
            .get("http://localhost:3000/api/community/get_user", {
              params: {
                uid: temp.author,
              },
            })
            .then((data) => {
              temp.author = data.data.user;
              var replyAuthor = null;
              if (temp.replyTo) {
                fire
                  .firestore()
                  .collection("users")
                  .doc(temp.replyTo.author)
                  .get()
                  .then((doc) => {
                    temp.replyAuthor = { ...doc.data() };
                    posts.push(temp);
                  })
                  .catch((err) => {
                    console.log(err);
                    reject();
                  });
              } else {
                posts.push(temp);
              }

              last = temp.dateCreated;
              if (i === querySnapshot.docs.length - 1) {
                console.log("HELLLLLL");
                posts.sort((a, b) => b.dateCreated - a.dateCreated);
                console.log(posts);
                resolve();
              }
            })
            .catch((err) => {
              console.log(err);
              reject();
            });
        });
      });

      promise.then(() => {
        res.status(200).json({ posts: posts, last: last });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export default handler;