/* eslint-disable max-len */
import axios from 'axios'
import fire from '@utils/fire'
import firebase from 'firebase'
import { v4 as uuid } from 'uuid'
import User from '@utils/state/userContainer'

export const checkNative = (user, language) => user.languages.filter((e) => (e.key === language.key && e.level > 5)).length > 0

export const addToWaitingRoom = async (user, language) => {
  const native = checkNative(user, language)
  const result = await fire.firestore().collection('waiting-rooms').doc(`${language.value}-${native ? 'native' : 'target'}`)
    .set(
      {
        participants: firebase.firestore.FieldValue.arrayUnion(user.uid),
      },
      { merge: true }
    )
  return result
}

export const checkWaitingRoom = async (user, language) => {
  const native = checkNative(user, language)
  const document = await fire.firestore().collection('waiting-rooms').doc(`${language.value}-${native ? 'target' : 'native'}`).get()
  if (document.data()?.participants.length > 0) {
    return document.data().participants[0]
  }
  return false
}

export const createRoom = async (participants, language) => {
  const roomID = uuid()
  const startTime = new Date()
  const endTime = new Date()
  endTime.setSeconds(startTime.getSeconds() + 180)
  try {
    await fire.firestore().collection('audio-rooms').doc(roomID).set({
      active: true,
      participants,
      language: language.key,
      startTime: startTime.getTime(),
      endTime: endTime.getTime(),
    })
    return roomID
  } catch (error) {
    return false
  }
}

export const getRoom = async (room) => {
  try {
    const document = await fire.firestore().collection('audio-rooms').doc(room.name).get()
    return document.data()
  } catch (error) {
    return false
  }
}

export const checkRoom = async (user) => {
  const querySnapshot = await fire.firestore().collection('audio-rooms')
    .where('active', '==', true)
    .where('participants', 'array-contains', user.uid)
    .get()

  if (querySnapshot.docs.length === 1) {
    console.log(querySnapshot.docs[0].id)
    return querySnapshot.docs[0].id
  }

  return false
}

export const leaveWaitingRoom = async (user) => {
  const querySnapshot = await fire.firestore().collection('waiting-rooms').where('participants', 'array-contains', user.uid).get()
  querySnapshot.docs.forEach(async (document) => {
    const updated = await fire.firestore().collection('waiting-rooms').doc(document.id).update({
      participants: firebase.firestore.FieldValue.arrayRemove(user.uid)
    })
    console.log(updated)
  })
}

export const joinRoom = async (user, language, roomID) => {
  await leaveWaitingRoom(user, language)
  const isNative = await checkNative(user, language)
  return axios.get('http://localhost:9000/rooms/join', {
    params: {
      uid: user.uid, username: user.username, roomID, isNative
    }
  })
}

export const leaveRoom = async (user, room) => {
  room.disconnect()
  const roomID = room.name
  return fire.firestore().collection('audio-rooms').doc(roomID).update({
    active: false
  })
}

export const spendToken = async (user) => fire.firestore().collection('users').doc(user.uid).update({
  tokens: user.tokens - 1
})

export const leaveRoomEarly = async (user, room) => {
  room.disconnect()
  const roomID = room.name
  await spendToken(user)
  return fire.firestore().collection('audio-rooms').doc(roomID).update({
    active: false
  })
}
export const checkTokens = async (user) => {
  const document = await fire.firestore().collection('users').doc(user.uid).get()
  const { tokens } = document.data()
  return tokens > 0
}

export const addToken = async (user) => fire.firestore().collection('users').doc(user.uid).update({
  tokens: firebase.firestore.FieldValue.increment(1)
})
