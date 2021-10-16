import prisma from "../../../utils/prisma";

async function handler(req, res) {
  const { userId } = req.query;
  prisma.notification.findMany({
    where: {
      notifyingUserId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default handler;
