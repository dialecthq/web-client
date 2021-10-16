import prisma from "../../../utils/prisma";

async function handler(req, res) {
  const { userId } = req.query;
  const notifications = await prisma.notification.findMany({
    where: {
      notifyingUserId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!notifications) {
    res.status(500);
    return;
  }

  res.status(200).json(notifications);
}

export default handler;
