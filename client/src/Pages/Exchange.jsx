import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import User from '../Containers/userContainer';
import ExchangeState from '../Containers/exchangeContainer';

// Components
import Header from '../Components/Exchange/Header';
import Page from '../Components/Exchange/Page';
import Loading from './Loading';

// Screens
import Profile from '../Screens/Exchange/Profile';
import Home from '../Screens/Exchange/Home';
import Schedule from '../Screens/Exchange/Schedule';
import Find from '../Screens/Exchange/Find';

const DashboardContainer = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    overflow: scroll;
`;

const Exchange = () => {
  const user = User.useContainer();
  const exchangeState = ExchangeState.useContainer();
  const history = useHistory();

  useEffect(() => {
    if (!user.user) {
      setTimeout(() => {
        axios.get('http://localhost:9000/user').then((data) => {
          if (data.data.user) {
            user.setUser(data.data.user);
          } else {
            history.push('/');
          }
        }).catch(() => {
          history.push('/');
        });
      }, 1000);
    }
  }, [user, history]);

  return (
    !user.user
      ? (<Loading />)
      : (
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
  );
};

export default Exchange;
