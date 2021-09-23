import Loading from "../components/common/Loading"
import { useEffect } from "react"
import { useRouter } from "next/router"
import UserContainer from "../utils/state/userContainer"
import fire from "../utils/fire"
import { checkWaitingRoom, addToWaitingRoom, createRoom, joinRoom } from "../utils/apis/RoomAPI"
import rooms from "../utils/data/rooms"

const Join = () => {
  const router = useRouter()
  const { user } = UserContainer.useContainer()
  const { id } = router.query
  const language = rooms.filter((e) => e.key === parseInt(id, 10))[0]
  useEffect(() => {
    const subscriber = fire
      .firestore()
      .collection("audio-rooms")
      .where("active", "==", true)
      .where("participants", "array-contains", user.uid)
      .onSnapshot(async (querySnapshot) => {
        let roomID
        if (querySnapshot.docs[0]) {
          roomID = querySnapshot.docs[0].id
        } else {
          roomID = null
        }

        if (!roomID) {
          const partnerID = await checkWaitingRoom(user, language)
          if (!partnerID) {
            addToWaitingRoom(user, language)
          } else {
            roomID = await createRoom([user.uid, partnerID], language)
            if (!roomID) {
            } else {
              const newTokenResult = await joinRoom(user, language, roomID)
              if (!newTokenResult.data.token) {
              } else {
                router.push(`/room?token=${newTokenResult.data.token}`)
              }
            }
          }
        } else {
          const newTokenResult = await joinRoom(user, language, roomID)
          if (!newTokenResult.data.token) {
            console.log("nope")
          } else {
            router.push(`/room?token=${newTokenResult.data.token}`)
          }
        }
      })
    return () => subscriber()
  }, [])

  return <Loading />
}

export default Join
