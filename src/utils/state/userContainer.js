/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { useState, useEffect } from "react"
import { createContainer } from "unstated-next"
import firebase from "firebase"
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator"
import fire from "../fire"
import strings from "../data/strings"
import rooms from "../data/rooms"
import axios from "axios"

function useUser() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [premium, setPremium] = useState(false)

  const authStateChanged = async (authState) => {
    if (!authState) {
      setUser(null)
      setLoading(false)
      return
    }

    if (user) return

    setLoading(true)
    const userRef = await fire.firestore().collection("users").doc(authState.uid).get()
    if (userRef.data().subscription_id) {
      const resultRef = await axios.get(
        `/api/check_subscription?subscription_id=${userRef.data().subscription_id}`
      )
      if (resultRef.data.active) {
        setPremium(true)
      }
    }

    setUser(userRef.data())
    setLoading(false)
  }

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, [])

  return {
    user,
    setUser,
    loading
  }
}

const User = createContainer(useUser)

export default User
