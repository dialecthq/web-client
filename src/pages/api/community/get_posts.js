import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import axios from "axios";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  const { language, last } = req.query;
  const posts = await prisma.post.findMany({
    skip: parseInt(last, 10),
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    where: {
      language: parseInt(language, 10),
      replyTo: {
        none: {},
      },
    },
    include: {
      likes: true,
      author: {
        include: {
          followers: true,
          following: true,
        },
      },
      replyTo: true,
      replies: true,
    },
  });

  if (!posts) {
    res.status(500);
    return;
  }
  res.status(200).json(posts);
}

export default handler;
