import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import prisma from "../../../utils/prisma";
import axios from "axios";

async function handler(req, res) {
  if (req.method === "POST") {
    const { body, authorId, postId, originalAuthorId, language } = req.body;
    const replyPost = await prisma.post.create({
      data: {
        body: body,
        language: language,
        author: {
          connect: {
            id: authorId,
          },
        },
        replyTo: {
          connect: {
            id: postId,
          },
        },
      },
    });

    if (!replyPost) {
      res.status(500);
      return;
    }

    if (authorId !== originalAuthorId) {
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

      const newUser = await prisma.user.update({
        where: {
          id: authorId,
        },
        data: {
          karma: {
            increment: 1,
          },
          tokens: {
            increment: 1,
          },
        },
      });

      if (!newUser) {
        res.status(500);
        return;
      }
    }

    const newPost = await axios.get(
      "http://localhost:3000/api/community/get_post",
      {
        params: { uid: replyPost.id },
      }
    );

    if (!newPost) {
      res.status(500);
      return;
    }

    res.status(200).json(newPost.data);
    return;
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

export default handler;
