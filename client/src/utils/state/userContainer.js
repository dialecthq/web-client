/* eslint-disable max-len */
import { useState } from 'react'
import { createContainer } from 'unstated-next'
import fire from '@utils/fire'

function useUser() {
  const [user, setUser] = useState(null)

  const userAPI = {
    register: async (newUser, setVisible, setPage, setLoading, setTempUser, history) => {
      const userCredential = await fire.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      if (!userCredential) {
        console.log('no user credential')
        return false
      }

      const data = await fire.firestore().collection('users').doc(userCredential.user.uid).set({
        name: newUser.name,
        email: newUser.email,
        languages: newUser.languages,
        country: newUser.country,
        timezone: newUser.timezone,
        username: newUser.username
      })
      if (!data) {
        console.log('no data help')
        return false
      }
      return data
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
    edit: async (parameters) => {
      const data = await fire.firestore().collection('users').doc(fire.auth().currentUser.uid).update(parameters)
      if (!data) {
        return false
      }
      return data
    }
  }

  return {
    user, setUser, userAPI
  }
}

const User = createContainer(useUser)

export default User
