/* eslint-disable max-len */
import React, { useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Skeleton } from "antd";
import Page from "../components/exchange/Page";
import rooms from "../utils/data/rooms";
import UserContainer from "../utils/state/userContainer";
import LanguageContainer from "../utils/state/languageContainer";
import strings from "../utils/data/strings";
import Loading from "../components/common/Loading";
import { useRouter } from "next/router";
import Seo from "../components/seo/Seo";
import Notifications from "../components/community/Notifications/Notifications";

import Nav from "../components/community/Nav/Nav";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellow;
  flex: 2;
  height: 100%;
  min-height: 100vh;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lime;
  flex: 1;
  height: 100%;
  min-height: 100vh;

  @media screen and (max-width: 959px) {
    display: none;
  }
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Notifications />
        <Info />
      </Wrapper>
    </Container>
  );
};

export default Home;
