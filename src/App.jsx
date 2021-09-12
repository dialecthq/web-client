import React, { useState, useEffect } from 'react'
import fire from 'Utils/fire'
import User from 'Utils/state/userContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from 'Components/landing/Home'
import About from 'Components/landing/About'
import Loading from 'Components/common/Loading'
import Room from 'Components/exchange/rooms/Room'
import Exchange from 'Components/exchange/Exchange'
import Profile from 'Components/exchange/Profile'
import Error from 'Components/common/Error'
import Pricing from 'Components/landing/Pricing'
import Privacy from 'Components/landing/Privacy'
import TOS from 'Components/landing/TOS'
import svg404 from 'Img/404.svg'

import ExchangeState from 'Utils/state/exchangeContainer'
import LanguageContainer from 'Utils/state/languageContainer'
import strings from 'Utils/data/strings'

const App = () => {
  const [initializing, setInitializing] = useState(true)
  const user = User.useContainer()
  const { language, setLanguage } = LanguageContainer.useContainer()

  const authListener = () => {
    setTimeout(() => {
      fire.auth().onAuthStateChanged(async (newUser) => {
        if (!newUser) {
          window.$crisp = []
          window.CRISP_WEBSITE_ID = '47d59959-1645-4829-a5c8-f8ca00b9d8d9'
          user.setUser(null)
          setInitializing(false)
        } else {
          const document = await fire.firestore().collection('users').doc(newUser.uid).get()
          if (!document) {
            window.$crisp = []
            window.CRISP_WEBSITE_ID = '47d59959-1645-4829-a5c8-f8ca00b9d8d9'
            user.setUser(null)
            setInitializing(false)
            return
          }
          user.setUser(document.data())
          window.$crisp.push(['set', 'user:email', [document?.data()?.email]])
          window.$crisp.push(['set', 'user:nickname', [document?.data()?.name]])
          setInitializing(false)
        }
      })
    }, 500)
  }

  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '47d59959-1645-4829-a5c8-f8ca00b9d8d9';
    (function () {
      const d = document
      const s = d.createElement('script')

      s.src = 'https://client.crisp.chat/l.js'
      s.async = 1
      d.getElementsByTagName('head')[0].appendChild(s)
    }())

    authListener()
  }, [])

  useEffect(() => {
    strings.setLanguage(language)
    fire.auth().languageCode = language
  }, [language])

  if (initializing) {
    return <Loading />
  }

  return (
    <ExchangeState.Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/exchange" exact>
            <Exchange />
          </Route>
          <Route path="/join">
            <Room />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <TOS />
          </Route>
          <Route path="*">
            <Error errorMessage="Oops, that page doesn't exist" imgLink={svg404} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ExchangeState.Provider>
  )
}

export default App
