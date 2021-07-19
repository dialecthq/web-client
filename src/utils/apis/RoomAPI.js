/* eslint-disable max-len */
import axios from 'axios'
import fire from '@utils/fire'
import firebase from 'firebase'

export const checkNative = (user, language) => user.languages.filter((e) => (e.key === language.key && e.level > 5)).length > 0

export const addToWaitingRoom = (user, language) => fire.firestore().collection('rooms').doc(language.value)
  .update({
    waiting: firebase.firestore.FieldValue.arrayUnion(user.uid),
  })

export const checkWaiting = (user, language) => {
  const result = new Promise((resolve, reject) => {
    fire.firestore().collection('rooms').doc(language.value).get()
      .then((document) => {
        if (document.data().waiting[0]) {
          fire.firestore().collection('rooms').doc(language.value).update({
            waiting: firebase.firestore.FieldValue.arrayRemove(document.data().waiting[0])
          })
            .then(() => {
              fire.firestore().collection('rooms').doc(language.value).update({
                [document.data().waiting[0]]: [user.uid]
              })
                .then(() => {
                  resolve(document.data().waiting[0])
                })
                .catch((error) => {
                  reject(error)
                })
            })
            .catch((error) => {
              reject(error)
            })
        } else {
          reject(new Error(false))
        }
      })
  })
  return result
}

export const checkRoom = (user, language) => {
  const result = new Promise((resolve, reject) => {
    fire.firestore().collection('rooms').doc(language.value).get()
      .then((document) => {
        if (document.data()[user.uid]) {
          resolve(user.uid)
        } else {
          reject(new Error(false))
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
  return result
}

export const joinRoom = (user, roomID) => axios.get('http://localhost:9000/user/join', { params: { uid: user.uid, username: user.username, language: roomID } })

export const nativeJoin = (user, language) => {
  const result = new Promise((resolve, reject) => {
    checkRoom(user, language).then((roomID) => {
      joinRoom(user, roomID).then((data) => {
        resolve(data.data.token)
      })
    }).catch(() => {
      addToWaitingRoom(user, language)
      reject(new Error(false))
    })
  })
  return result
}

export const targetJoin = (user, language) => {
  const result = new Promise((resolve, reject) => {
    checkWaiting(user, language).then((roomID) => {
      joinRoom(user, roomID).then((data) => {
        resolve(data.data.token)
      }).catch(() => {
        reject(new Error(false))
      })
    }).catch(() => {
      console.log('waiting room empty')
    })
  })
  return result
}

export const join = (user, language) => {
  if (checkNative(user, language)) {
    return nativeJoin(user, language)
  }
  return targetJoin(user, language)
}
