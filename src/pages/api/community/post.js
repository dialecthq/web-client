import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import prisma from "../../../utils/prisma";
import axios from "axios";

async function handler(req, res) {
  if (req.method === "POST") {
    const { body, authorId, language } = req.body;
    console.log(body, authorId);
    const post = await prisma.post.create({
      data: {
        body: body,
        language: language,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });

    if (!post) {
      res.status(500);
      return;
    }

    const newPost = await axios.get(
      "http://localhost:3000/api/community/get_post",
      {
        params: { uid: post.id },
      }
    );

    if (!newPost) {
      res.status(500);
      return;
    }

    res.status(200).json(newPost.data);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

export default handler;
