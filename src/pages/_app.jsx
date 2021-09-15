/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import App from 'next/app'
import '../App.less'
import LanguageContainer from '../Utils/state/languageContainer'
import UserContainer from '../Utils/state/userContainer'
import Loading from '../components/common/Loading'
import fire from '../Utils/fire'
import strings from '../Utils/data/strings'

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
