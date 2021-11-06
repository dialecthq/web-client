import fire from "../../../utils/fire";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import prisma from "../../../utils/prisma";

async function handler(req, res) {
  if (req.method === "POST") {
    let { id } = req.body;

    try {
      const deletedPost = await prisma.post.delete({
        where: {
          id: id,
        },
      });

      if (!deletedPost) {
        res.status(500);
        return;
      }
      res.status(200).json({ err: 1 });
    } catch (e) {
      res.status(500).json(e);
      return;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
}

export default handler;
