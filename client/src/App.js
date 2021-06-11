import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import fire from './fire'

import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'

import User from './Containers/userContainer'

const App = () => {
  const user = User.useContainer()

  useEffect(() => {
    console.log(fire.auth().currentUser)
  }, [user.user]);
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
