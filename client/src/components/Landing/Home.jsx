/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from '@utils/state/userContainer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const App = () => {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)
  const user = User.useContainer()

  useEffect(() => {
    if (!user.user) {
      axios.get('http://localhost:9000/user').then((data) => {
        if (data.data.user) {
          user.setUser(data.data.user)
        }
      })
    }
  }, [user])

  return (
    <>
      <button
        type="submit"
        onClick={() => {
          if (user.user) {
            axios.get('http://localhost:9000/user/signout').then(() => {
              user.setUser(null)
            }).catch((error) => {
              console.log(error)
            })
          } else {
            setSignInVisible(true)
          }
        }}
      >
        {user.user ? 'sign out' : 'sign in'}
      </button>
      {!user.user && (
        <button
          type="submit"
          onClick={() => {
            setSignUpVisible(true)
          }}
        >
          register
        </button>
      )}

      <SignIn visible={signInVisible} setVisible={setSignInVisible} setSignUpVisible={setSignUpVisible} />
      <SignUp visible={signUpVisible} setVisible={setSignUpVisible} setSignInVisible={setSignInVisible} />
      {user.user ? `@${user?.user?.username}` : 'not signed in'}
    </>

  )
}

export default App
