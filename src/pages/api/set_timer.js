import {
  spendToken,
  addToken,
  finishRoom,
  getUser,
  leaveRoom,
  checkNative
} from "../../utils/apis/RoomAPI"
import { RoomServiceClient, Room } from "livekit-server-sdk"
const svc = new RoomServiceClient(
  "https://dialect-livekit.fly.dev",
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_SECRET_KEY
)

/* GET users listing. */
const set_timer = async (req, res) => {
  if (req.method === "POST") {
    const { user, roomID, language } = req.body
    console.log("language", language)
    const isNative = checkNative(user, language)
    setTimeout(async () => {
      console.log("existing rooms", data)
      if (!isNative) {
        await spendToken(user)
      } else {
        await addToken(user)
      }
      await finishRoom(roomName)
      await leaveRoom(user, room)
      res.status(200).json({ completed: true })
    }, 10000)
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}

export default set_timer
