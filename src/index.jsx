import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './App.less'

import User from './utils/state/userContainer'

ReactDOM.render(
  <React.StrictMode>
    <User.Provider>
      <App />
    </User.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
