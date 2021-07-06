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
    validate: async (_, value, field) => {
      if (!value) {
        return Promise.reject(new Error('error'))
      }

      const querySnapshot = await fire.firestore().collection('users').where(field, '==', value).get()
      const available = querySnapshot.docs.length === 0

      if (!available) {
        return Promise.reject(available)
      }

      return Promise.resolve(available)
    },
    edit: (parameters) => {
      const result = new Promise((resolve, reject) => {
        fire.firestore().collection('users').doc(fire.auth().currentUser.uid).update(parameters)
          .then(() => {
            fire.firestore().collection('users').doc(fire.auth().currentUser.uid).get()
              .then((document) => {
                resolve(setUser(document.data()))
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
    logout: async () => {
      const loggedOut = await fire.auth().signOut()
      if (!loggedOut) {
        return false
      }
      return true
    },
    login: async (email, password) => {
      const loggedIn = await fire.auth().signInWithEmailAndPassword(email, password)
      if (!loggedIn) {
        return false
      }
      return true
    }
  }

  return {
    user, setUser, userAPI
  }
}

const User = createContainer(useUser)

export default User
