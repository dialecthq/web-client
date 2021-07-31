import React from 'react'
import { Helmet } from 'react-helmet'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './App.less'

import User from './utils/state/userContainer'

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>🎤 Dialect - the easiest way to learn a new language</title>
    </Helmet>
    <User.Provider>
      <App />
    </User.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
