import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import axios from "axios";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  const { id, last } = req.query;
  const posts = await prisma.post.findMany({
    skip: parseInt(last, 10),
    take: 5,
    where: {
      authorId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      likes: true,
      author: {
        include: {
          followers: true,
          following: true,
        },
      },
      replies: true,
      replyTo: {
        include: {
          author: true,
        },
      },
    },
  });

  if (!posts) {
    res.status(500);
    return;
  }

  res.status(200).json(posts);
}

export default handler;
