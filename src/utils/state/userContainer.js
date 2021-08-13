/* eslint-disable max-len */
import { useState } from 'react'
import { createContainer } from 'unstated-next'
import fire from '@utils/fire'

function useUser() {
  const [user, setUser] = useState(null)

  const userAPI = {
    register: (newUser) => {
      const result = new Promise((resolve, reject) => {
        fire.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((userCredential) => {
          fire.firestore().collection('users').doc(userCredential.user.uid).set({
            uid: userCredential.user.uid,
            name: newUser.name,
            email: newUser.email,
            languages: newUser.languages,
            country: newUser.country,
            timezone: newUser.timezone,
            username: newUser.username
          })
            .then((data) => {
              resolve(data)
            })
            .catch((error) => {
              reject(error)
            })
        }).catch((error) => {
          reject(error)
        })
      })

      return result
    },
    validate: (_, value, field) => {
      const result = new Promise((resolve, reject) => {
        if (!value) {
          resolve(true)
        }

        fire.firestore().collection('users').where(field, '==', value).get()
          .then((querySnapshot) => {
            const available = querySnapshot.docs.length === 0

            if (!available) {
              reject(new Error('not available'))
            }

            resolve(true)
          })
          .catch((error) => {
            reject(error)
          })
      })
      return result
    },
    edit: (parameters) => {
      const result = new Promise((resolve, reject) => {
        fire.firestore().collection('users').doc(fire.auth().currentUser.uid).update(parameters)
          .then(() => {
            fire.firestore().collection('users').doc(fire.auth().currentUser.uid).get()
              .then((document) => {
                setUser(document.data())
                resolve(true)
              })
              .catch((error) => {
                reject(error)
              })
          })
          .catch((error) => {
            reject(error)
          })
      })
      return result
    },
    logout: () => {
      const result = new Promise((resolve, reject) => {
        fire.auth().signOut().then((data) => {
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
      })
      return result
    },
    login: (email, password) => {
      const result = new Promise((resolve, reject) => {
        fire.auth().signInWithEmailAndPassword(email, password).then((data) => {
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
      })
      return result
    },
    removeAvatarURL: () => {
      fire.firestore().collection('users').doc(fire.auth().currentUser.uid).update({
        avatarURL: null
      })
        .then(() => {
          userAPI.getUser()
        })
    },
    getUser: async () => {
      const userRef = await fire.firestore().collection('users').doc(fire.auth().currentUser.uid).get()
      setUser(userRef.data())
    },
    deleteLanguage: async (key) => {
      console.log(key)
      await fire.firestore().collection('users').doc(fire.auth().currentUser.uid).update({
        languages: user.languages.filter((e) => (e.key !== key))
      })
      userAPI.getUser()
    },
    checkTokens: async () => {
      const document = await fire.firestore().collection('users').doc(fire.auth().currentUser.uid).get()
      const { tokens } = document.data()
      return tokens > 0
    }
  }

  return {
    user, setUser, userAPI
  }
}

const User = createContainer(useUser)

export default User
