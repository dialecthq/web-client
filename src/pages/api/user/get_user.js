import { v4 as uuid } from "uuid";
import axios from "axios";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  let { id, type } = req.query;
  if (type !== "email") {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        following: true,
        followers: true,
        likedPosts: true,
      },
    });
  } else {
    const user = await prisma.user.findUnique({
      where: {
        email: id,
      },
      include: {
        following: true,
        followers: true,
        likedPosts: true,
      },
    });
  }

  if (!user) {
    res.status(500);
    return;
  }

  res.status(200).json(user);
  return;
}

export default handler;
