import fire from "../../../utils/fire";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  const { username } = req.query;
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
    include: {
      following: true,
      followers: true,
      likedPosts: true,
    },
  });

  if (!user) {
    res.status(500);
    return;
  }

  res.status(200).json(user);
}

export default handler;
