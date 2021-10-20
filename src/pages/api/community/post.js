import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  if (req.method === "POST") {
    const { body, authorId } = req.body;
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

    res.status(200).json(post);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

export default handler;
