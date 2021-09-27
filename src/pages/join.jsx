import Loading from "../components/common/Loading"
import { useEffect } from "react"
import { useRouter } from "next/router"
import UserContainer from "../utils/state/userContainer"
import fire from "../utils/fire"
import {
  checkWaitingRoom,
  addToWaitingRoom,
  createRoom,
  joinRoom,
  leaveWaitingRoom
} from "../utils/apis/RoomAPI"
import rooms from "../utils/data/rooms"
import axios from "axios"

const Join = () => {
  const router = useRouter()
  const { user } = UserContainer.useContainer()
  const { id } = router.query
  const language = rooms.filter((e) => e.key === parseInt(id, 10))[0]

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser)
    window.addEventListener("unload", () => handleEndWaiting(true))
    router.events.on("routeChangeStart", () => handleEndWaiting(false))
    return () => {
      window.removeEventListener("beforeunload", alertUser)
      window.removeEventListener("unload", () => handleEndWaiting(true))
      router.events.on("routeChangeStart", () => handleEndWaiting(false))
      handleEndWaiting()
    }
  }, [])

  const alertUser = (e) => {
    e.preventDefault()
    e.returnValue = ""
  }

  const handleEndWaiting = async (route) => {
    leaveWaitingRoom(user)
    if (!route) return
    router.push("/exchange")
  }

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
                axios.post("/api/set_timer", {
                  user: { ...user },
                  roomID,
                  language: { ...language }
                })
                router.push(`/room?token=${newTokenResult.data.token}`)
              }
            }
          }
        } else {
          const newTokenResult = await joinRoom(user, language, roomID)
          if (!newTokenResult.data.token) {
            console.log("nope")
          } else {
            axios.post("/api/set_timer", {
              user: { ...user },
              roomID,
              language: { ...language }
            })
            router.push(`/room?token=${newTokenResult.data.token}`)
          }
        }
      })
    return () => subscriber()
  }, [])

  return <Loading />
}

export default Join
