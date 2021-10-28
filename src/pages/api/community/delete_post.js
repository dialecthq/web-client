import fire from "../../../utils/fire";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  if (req.method === "POST") {
    let { id } = req.body;

    const deletedPost = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json(deletedPost);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
}

export default handler;
