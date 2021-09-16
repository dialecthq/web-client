import { AccessToken } from "livekit-server-sdk";
import fire from "../../utils/fire";

var API = "APINew5XQnFMJ5f";
var SECRET = "Aet3DQKAXhJTsE6e9OepHS9ay1I5sfr31itxhaTNrQhB";

/* GET users listing. */
const join = async (req, res) => {
  console.log(req);
  let { user, roomID, isNative } = req.query;
  user = JSON.parse(user);
  console.log(user, roomID, isNative);
  const roomMeta = await fire
    .firestore()
    .collection("audio-rooms")
    .doc(roomID)
    .get();

  const meta = {
    user: user,
    roomMeta: roomMeta.data(),
  };
  const at = new AccessToken(API, SECRET, {
    identity: user.uid,
    metadata: JSON.stringify(meta),
  });
  at.addGrant({ roomJoin: true, room: roomID });

  const token = at.toJwt();
  res.json({ token: token });
};

export default join;
