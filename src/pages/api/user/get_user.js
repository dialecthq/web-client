import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";
import axios from "axios";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  let { id } = req.query;
  const user = await prisma.user.findUnique({
    where: {
      id: "bab4acfd-aa15-4a9a-b94e-e30d3ef673c5",
    },
    include: {
      following: true,
      followers: true,
    },
  });

  if (!user) {
    console.log("no user found");
  }

  console.log(user.following);
  res.status(200).json(user);
}

export default handler;
