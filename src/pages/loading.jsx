import Loading from "../components/common/Loading"
import { useRouter } from "next/router"
import { useEffect } from "react"
import axios from "axios"
import UserContainer from "../utils/state/userContainer"

const Loader = () => {
  const router = useRouter()
  const { user, loading } = UserContainer.useContainer()
  useEffect(async () => {
    const { success, session_id } = router.query
    if (!loading) {
      if (success && session_id && user) {
        const result = await axios.post("/api/subscribe", {
          session_id,
          uid: user.uid
        })
        if (result.data.completed) {
          router.push("/exchange")
        } else {
          router.push("/")
        }
      } else if (success && session_id) {
        const result = await axios.post("/api/create_min_user", { session_id })
        if (result.data.completed) {
          router.push("/exchange")
        } else {
          router.push("/")
        }
      }
    }
  }, [router.query, loading])

  return (
    <>
      <Loading />
    </>
  )
}

export default Loader
