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
    console.log(req.body, "boidy");
    const pass = await hash(password, 12);
    console.log(pass);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        languageKeys: languageKeys,
        languageLevels: languageLevels,
        countryFrom: countryFrom,
        username: username,
        pass: password,
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
