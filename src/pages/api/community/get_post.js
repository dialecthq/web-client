import fire from "../../../utils/fire";
import axios from "axios";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  const { uid } = req.query;
  const post = await prisma.post.findUnique({
    where: {
      id: uid,
    },
    include: {
      likes: true,
      author: true,
      replies: true,
      replyTo: true,
      likes: true,
    },
  });

  if (!post) {
    res.status(500);
    return;
  }
  res.status(200).json(post);
}

export default handler;
