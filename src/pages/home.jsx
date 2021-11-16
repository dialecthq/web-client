/* eslint-disable max-len */
import React, { useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Skeleton } from "antd";
import rooms from "../utils/data/rooms";
import UserContainer from "../utils/state/userContainer";
import LanguageContainer from "../utils/state/languageContainer";
import strings from "../utils/data/strings";
import Loading from "../components/common/Loading";
import { useRouter } from "next/router";
import Seo from "../components/seo/Seo";
import Info from "../components/community/Info/Info";

import Nav from "../components/community/Nav/Nav";
import Feed from "../components/community/Feed/Feed";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Home = () => {
  const { user } = UserContainer.useContainer();
  const { language } = LanguageContainer.useContainer();
  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Feed />
      </Wrapper>
    </Container>
  );
};

export default Home;
