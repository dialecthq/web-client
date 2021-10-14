import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import axios from "axios";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  const { id } = req.query;
  const posts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      likes: true,
      author: true,
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
