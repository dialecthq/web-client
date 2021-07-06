import React, { useState, useEffect } from 'react'
import fire from '@utils/fire'
import User from '@utils/state/userContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@components/Landing/Home'
import Exchange from '@components/Exchange/Exchange'
import Loading from '@components/common/Loading'

import ExchangeState from '@utils/state/exchangeContainer'

const App = () => {
  const [initializing, setInitializing] = useState(true)
  const user = User.useContainer()

  const authListener = () => {
    fire.auth().onAuthStateChanged(async (newUser) => {
      if (!newUser) {
        user.setUser(null)
        setInitializing(false)
      } else {
        const document = await fire.firestore().collection('users').doc(newUser.uid).get()
        if (!document) {
          user.setUser(null)
          setInitializing(false)
        }
        user.setUser(document.data())
        setInitializing(false)
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  if (initializing) {
    return <Loading />
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
        </Switch>
      </BrowserRouter>
    </ExchangeState.Provider>
  )
}

export default App
