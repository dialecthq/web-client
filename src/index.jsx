import React from 'react'
import { Helmet } from 'react-helmet'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './App.less'

import User from './Utils/state/userContainer'
import LanguageContainer from './Utils/state/languageContainer'

ReactDOM.render(
  <React.StrictMode>
    <LanguageContainer.Provider>
      <Helmet>
        <title>🎤 Dialect - the easiest way to learn a new language</title>
      </Helmet>
      <User.Provider>
        <App />
      </User.Provider>
    </LanguageContainer.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
