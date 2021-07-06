/* eslint-disable max-len */
import { useState } from 'react'
import { createContainer } from 'unstated-next'
import fire from '@utils/fire'

function useUser() {
  const [user, setUser] = useState(null)

  const userAPI = {
    register: (newUser, setVisible, setPage, setLoading, setTempUser, history) => {
      setLoading(true)
      fire.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((userCredential) => {
          fire.firestore().collection('users').doc(userCredential.user.uid).set({
            name: newUser.name,
            email: newUser.email,
            languages: newUser.languages,
            country: newUser.country,
            timezone: newUser.timezone,
            username: newUser.username
          })
            .then((data) => {
              setUser({
                name: newUser.name,
                email: newUser.email,
                languages: newUser.languages,
                country: newUser.country,
                timezone: newUser.timezone,
                username: newUser.username,
              })
              setVisible(false)
              setPage(0)
              setTempUser(null)
              history.push('/exchange')
            })
            .catch((error) => {
              setLoading(false)
              setUser(null)
            })
        })
        .catch((error) => {
          setLoading(false)
          setUser(null)
        })
    },
    checkEmail: async (_, email) => {
      if (!email) {
        return Promise.reject(new Error('error'))
      }

      const querySnapshot = await fire.firestore().collection('users').where('email', '==', email).get()
      const available = querySnapshot.docs.length === 0

      if (!available) {
        return Promise.reject(available)
      }

      return Promise.resolve(available)
    }
  }
  return {
    user, setUser, userAPI
  }
}

const User = createContainer(useUser)

export default User
