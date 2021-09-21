import Loading from "../components/common/Loading"
import { useEffect } from "react"
import { useRouter } from "next/router"
import UserContainer from "../utils/state/userContainer"
import fire from "../utils/fire"
import { checkWaitingRoom, addToWaitingRoom, createRoom, joinRoom } from "../utils/apis/RoomAPI"

const Join = () => {
  const router = useRouter()
  const { user } = UserContainer.useContainer()
  let { language } = router.query
  language = JSON.parse(language)
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
