/* eslint-disable max-len */
import axios from 'axios'
import fire from '@utils/fire'
import firebase from 'firebase'
import { uuid } from 'uuidv4'

export const checkNative = (user, language) => user.languages.filter((e) => (e.key === language.key && e.level > 5)).length > 0

export const addToWaitingRoom = (user, language) => {
  const result = new Promise((resolve, reject) => {
    const native = checkNative(user, language)
    fire.firestore().collection('waiting-rooms').doc(`${language.value}-${native ? 'native' : 'target'}`)
      .set({
        participants: firebase.firestore.FieldValue.arrayUnion(user.uid),
      }, { merge: true })
      .then(() => {
        resolve(true)
      })
      .catch((error) => {
        reject(error)
      })
  })
  return result
}

export const checkWaitingRoom = (user, language) => {
  const result = new Promise((resolve, reject) => {
    const native = checkNative(user, language)
    fire.firestore().collection('waiting-rooms').doc(`${language.value}-${native ? 'target' : 'native'}`).get()
      .then((document) => {
        if (document.data().participants.length > 0) {
          resolve(document.data().participants[0])
        } else {
          reject(new Error('Nobody in waiting room'))
        }
      })
      .catch((error) => {
        reject(error)
      })
  })

  return result
}

export const createRoom = (participants, language) => {
  const result = new Promise((resolve, reject) => {
    const roomID = uuid()
    fire.firestore().collection('audio-rooms').doc(roomID).set({
      active: true,
      participants,
      language: language.key
    })
      .then(() => {
        resolve(roomID)
      })
      .catch((error) => {
        reject(error)
      })
  })

  return result
}

export const checkRoom = (user) => {
  const result = new Promise((resolve, reject) => {
    fire.firestore().collection('audio-rooms')
      .where('participants', 'array-contains', user.uid)
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length === 1) {
          resolve(querySnapshot.docs[0].id)
        }

        reject(new Error('Could not find a room'))
      })
      .catch((error) => {
        reject(error)
      })
  })
  return result
}

export const joinRoom = (user, roomID) => axios.get('http://localhost:9000/rooms/join', { params: { uid: user.uid, username: user.username, roomID } })

export const join = (user, language) => {
  const result = new Promise((resolve, reject) => {
    checkRoom(user)
      .then((roomID) => {
        joinRoom(user, roomID).then((data) => {
          resolve(data.data.token)
        }).catch((error) => {
          reject(error)
        })
      })
      .catch(() => {
        checkWaitingRoom(user, language)
          .then((partnerID) => {
            createRoom([user.uid, partnerID], language)
              .then((roomID) => {
                joinRoom(user, roomID)
                  .then((data) => {
                    resolve(data.data.token)
                  }).catch((error) => {
                    reject(error)
                  })
              }).catch(() => {
                reject(new Error('could not create room'))
              })
          }).catch(() => {
            addToWaitingRoom(user, language)
              .then(() => {
                reject(new Error('you have been added to the waiting room'))
              }).catch(() => {
                reject(new Error('could not add to waiting room'))
              })
          })
      })
  })

  return result
}
