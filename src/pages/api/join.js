import { AccessToken } from "livekit-server-sdk"
import fire from "../../utils/fire"

/* GET users listing. */
const join = async (req, res) => {
  let { user, roomID, isNative } = req.query
  user = JSON.parse(user)
  const roomMeta = await fire.firestore().collection("audio-rooms").doc(roomID).get()

  const meta = {
    user: user,
    roomMeta: roomMeta.data()
  }
  const at = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_SECRET_KEY, {
    identity: user.uid,
    metadata: JSON.stringify(meta)
  })
  at.addGrant({ roomJoin: true, room: roomID })

  const token = at.toJwt()
  res.json({ token: token })
}

export default join
