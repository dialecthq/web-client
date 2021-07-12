import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory, Redirect } from 'react-router-dom'
import Loading from '@components/common/Loading'
import User from '@utils/state/userContainer'
import ExchangeState from '@utils/state/exchangeContainer'

// Components
import Header from './components/Header'
import Page from './components/Page'

// Screens
import Profile from './screens/Profile'
import Home from './screens/Home'
import Schedule from './screens/Schedule'
import Find from './screens/Find'

const DashboardContainer = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    overflow: scroll;
`

const Exchange = () => {
  const user = User.useContainer()
  const exchangeState = ExchangeState.useContainer()
  const history = useHistory()

  return (
    <DashboardContainer>
      <Header />
      <Page>
        {exchangeState.page === 'profile' && <Profile />}
        {exchangeState.page === 'home' && <Home />}
        {exchangeState.page === 'find' && <Find />}
        {exchangeState.page === 'schedule' && <Schedule />}
      </Page>
    </DashboardContainer>
  )
}

export default Exchange
