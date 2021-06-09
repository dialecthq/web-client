import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'

import User from './Containers/userContainer'

const App = () => {
  const user = User.useContainer()
  return (
    <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
          >
            <Home />
          </Route>
          <Route
          path="/dashboard"
          exact
          >
            {!user.user ? <Redirect to="/" /> : <Dashboard />}
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
