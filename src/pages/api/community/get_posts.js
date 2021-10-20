import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import axios from "axios";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  const { language } = req.query;
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      language: language,
    },
    include: {
      likes: true,
      author: true,
      replyTo: true,
      replies: true,
      likes: true,
    },
  });

  if (!posts) {
    res.status(500);
    return;
  }

  res.status(200).json(posts);
}

export default handler;
