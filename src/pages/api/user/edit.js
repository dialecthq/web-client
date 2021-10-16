import prisma from "../../../utils/prisma";
import fire from "../../../utils/fire";

async function handler(req, res) {
  if (req.method === "POST") {
    const {
      userId,
      name,
      username,
      bio,
      countryFrom,
      countryLivingIn,
      languageKeys,
      languageLevels,
      avatar,
    } = req.body;

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        languageKeys: languageKeys,
        languageLevels: languageLevels,
        countryFrom: countryFrom,
        bio: bio,
        countryFrom: countryFrom,
        countryLivingIn: countryLivingIn,
        username: username,
        avatar: avatar,
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
