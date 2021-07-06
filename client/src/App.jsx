import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@components/Landing/Home'
import Exchange from '@components/Exchange/Exchange'

import ExchangeState from '@utils/state/exchangeContainer'

const App = () => (
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

export default App
