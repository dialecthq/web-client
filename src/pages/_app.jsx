/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import App from 'next/app'
import '../App.less'
import LanguageContainer from '../utils/state/languageContainer'
import UserContainer from '../utils/state/userContainer'
import Loading from '../components/common/Loading'
import fire from '../utils/fire'
import strings from '../utils/data/strings'

function MyApp({ Component, pageProps }) {
  const [initializing, setInitializing] = useState(true)

  return (
    <LanguageContainer.Provider>
      <UserContainer.Provider>
        <Component {...pageProps} />
      </UserContainer.Provider>
    </LanguageContainer.Provider>
  )
}

export default MyApp
