import fire from "../../../utils/fire";
import firebase from "firebase";
import { v4 as uuid } from "uuid";

async function handler(req, res) {
  let { profile, user } = req.body;

  const newUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      following: {
        connect: {
          id: profile.id,
        },
      },
    },
  });

  if (!newUser) {
    res.status(500);
    return;
  }

  res.status(200).json(newUser);
}

export default handler;
