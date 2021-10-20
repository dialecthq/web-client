import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  if (req.method === "POST") {
    const { body, authorId, postId, originalAuthorId, language } = req.body;
    console.log(authorId, postId, body);
    const replyPost = await prisma.post.create({
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

    if (!replyPost) {
      res.status(500);
      return;
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        replies: {
          connect: {
            id: replyPost.id,
          },
        },
      },
    });

    if (!updatedPost) {
      res.status(500);
      return;
    }

    const notification = await prisma.notification.create({
      data: {
        type: "reply",
        notifyingUser: {
          connect: {
            id: originalAuthorId,
          },
        },
        notifyingUserId: originalAuthorId,
        actionAuthor: {
          connect: {
            id: authorId,
          },
        },
        actionAuthorId: authorId,
        body: body,
      },
    });

    if (!notification) {
      res.status(500);
      return;
    }

    res.status(200).json(replyPost);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

export default handler;
