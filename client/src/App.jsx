import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Exchange from './Pages/Exchange';

import ExchangeState from './Containers/exchangeContainer';

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
);

export default App;
