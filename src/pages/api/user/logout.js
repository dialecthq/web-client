import fire from "../../../utils/fire";

async function handler(req, res) {
  if (req.method === "POST") {
    fire.auth().signOut();
    res.status(200).json(true);
    return;
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
}

export default handler;
