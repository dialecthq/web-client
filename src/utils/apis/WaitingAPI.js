import firebase from "firebase"
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator"
import fire from "../fire"
import strings from "../data/strings"
import rooms from "../data/rooms"

export const getNum = async (languageName, languageKey) => {
  const promise = new Promise((resolve, reject) => {
    let sum = 0
    fire
      .firestore()
      .collection("waiting-rooms")
      .doc(languageName + "-native")
      .get()
      .then((docRef) => {
        sum += { ...docRef.data() }.participants?.length || 0
        fire
          .firestore()
          .collection("waiting-rooms")
          .doc(languageName + "-target")
          .get()
          .then((docRef) => {
            sum += { ...docRef.data() }.participants?.length || 0
            fire
              .firestore()
              .collection("audio-rooms")
              .where("language", "==", languageKey)
              .where("active", "==", true)
              .get()
              .then((querySnapshot) => {
                sum += querySnapshot.docs.length * 2
                console.log(sum)
                resolve(sum)
              })
              .catch((err) => {
                console.log(err)
              })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return promise
}
