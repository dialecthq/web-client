import fire from "../../../utils/fire";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  if (req.method === "POST") {
    let { postId, userId } = req.body;
    console.log(postId);
    const newPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: {
          connect: {
            id: userId,
          },
        },
      },
    });

    if (!newPost) {
      res.status(500);
      return;
    }
    res.status(200).json(newPost);
    return;
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
}

export default handler;
