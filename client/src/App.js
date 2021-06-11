import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import fire from './fire'

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
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
