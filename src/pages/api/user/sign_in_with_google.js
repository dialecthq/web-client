import prisma from "../../../utils/prisma";
import fire from "../../../utils/fire";
import firebase from "firebase";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import strings from "../../../utils/data/strings";

async function handler(req, res) {
  if (req.method === "POST") {
    const { id, name, username, email, tokens, languageLevels, languageKeys } =
      req.body;
    const user = await prisma.user.create({
      data: {
        id: id,
        name: name,
        username: username,
        email: email,
        tokens: tokens,
        languageLevels: languageLevels,
        languageKeys: languageKeys,
      },
    });

    res.status(200).json(user);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
}

export default handler;
