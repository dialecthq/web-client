/* eslint-disable max-len */
import axios from 'axios'
import fire from '@utils/fire'
import firebase from 'firebase'

const RoomAPI = {
  join: (user, language) => {
    const result = new Promise((resolve, reject) => {
      const isNative = user.languages.filter((e) => e.key === language.key && e.level > 5).length > 0
      const waitingRoomName = isNative ? 'nativeWaiting' : 'targetWaiting'
      const typeName = isNative ? 'native' : 'target'
      fire.firestore().collection('rooms').doc(language).update({
        [waitingRoomName]: firebase.firestore.FieldValue.arrayUnion(user.uid),
        [typeName]: firebase.firestore.FieldValue.arrayUnion(user.uid)
      })
        .then(() => {
          const { username, uid } = user
          axios.get('http://localhost:9000/user/join', { params: { username, uid, language } }).then((data) => {
            resolve(data.data.token)
          }).catch((error) => {
            reject(error)
          })
        })
        .catch((error) => {
          reject(error)
        })
    })
    return result
  }
}

export default RoomAPI
