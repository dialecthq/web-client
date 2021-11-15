import { getUser } from "../../../utils/db";

async function handler(req, res) {
  let { email } = req.query;

  const newUser = await getUser(email);

  if (!newUser) {
    res.status(500);
    return;
  }

  res.status(200).json(newUser);
  return;
}

export default handler;
