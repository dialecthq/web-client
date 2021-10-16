import prisma from "../../../utils/prisma";
import fire from "../../../utils/fire";
import { v4 as uuid } from "uuid";

async function handler(req, res) {
  if (req.method === "POST") {
    const { file, userId } = req.body;

    const storage = fire.storage();
    const metadata = {
      contentType: file.type,
    };
    const storageRef = await storage.ref();
    const imgFile = storageRef.child(`${userId}/${uuid()}.png`);

    const image = await imgFile.put(file, metadata);

    if (!image) {
      res.status(500);
      return;
    }

    const avatarURL = await imgFile.getDownloadURL();

    if (!avatarURL) {
      res.status(500);
      return;
    }

    res.status(200).json({ url: avatarURL });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
}

export default handler;
