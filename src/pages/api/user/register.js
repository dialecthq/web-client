import prisma from "../../../utils/prisma";
import fire from "../../../utils/fire";

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

    const userCredential = await fire
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (!userCredential) {
      res.status(500);
      return;
    }

    const user = await prisma.user.create({
      data: {
        id: userCredential.user.uid,
        name: name,
        email: email,
        languageKeys: languageKeys,
        languageLevels: languageLevels,
        countryFrom: countryFrom,
        username: username,
        tokens: 10,
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
