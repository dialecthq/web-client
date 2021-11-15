import prisma from "../../../utils/prisma";
import { hash } from "bcryptjs";

async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      email,
      languageKeys,
      languageLevels,
      countryFrom,
      username,
      password,
    } = req.body;
    const pass = await hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        languageKeys: [1, 3],
        languageLevels: [7, 1],
        countryFrom: countryFrom,
        username: username,
      },
    });

    if (!user) {
      res.status(500);
      return;
    }

    res.status(200).json(user);
    return;
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
}

export default handler;
