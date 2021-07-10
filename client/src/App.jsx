import React, { useState, useEffect } from 'react'
import fire from '@utils/fire'
import User from '@utils/state/userContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@components/Landing/Home'
import Exchange from '@components/Exchange/Exchange'
import Loading from '@components/common/Loading'
import Room from '@components/Exchange/screens/Room'

import ExchangeState from '@utils/state/exchangeContainer'

const App = () => {
  const [initializing, setInitializing] = useState(true)
  const [loaded, setLoaded] = useState(0)
  const user = User.useContainer()

  const authListener = () => {
    setTimeout(() => {
      fire.auth().onAuthStateChanged(async (newUser) => {
        if (!newUser) {
          user.setUser(null)
          setInitializing(false)
        } else {
          const document = await fire.firestore().collection('users').doc(newUser.uid).get()
          if (!document) {
            user.setUser(null)
            setInitializing(false)
            return
          }
          user.setUser(document.data())
          setInitializing(false)
        }
      })
    }, 500)
  }

  useEffect(() => {
    authListener()
  }, [])

  // useEffect(() => {
  //   if (!fire.auth().currentUser) return false
  //   const subscriber = fire.firestore()
  //     .collection('users')
  //     .doc(fire.auth().currentUser.uid)
  //     .onSnapshot((document) => {
  //       user.setUser(document.data())
  //     })
  //   return () => subscriber()
  // }, [])

  if (initializing) {
    return <Loading loaded={loaded} setLoaded={setLoaded} />
  }
  return (
    <ExchangeState.Provider>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
          >
            <Home />
          </Route>
          <Route
            path="/exchange"
            exact
          >
            <Exchange />
          </Route>
          <Route
            path="/room"
            exact
          >
            <Room />
          </Route>
        </Switch>
      </BrowserRouter>
    </ExchangeState.Provider>
  )
}

export default App
