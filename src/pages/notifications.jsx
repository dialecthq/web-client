/* eslint-disable max-len */
import React, { useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Skeleton } from "antd";
import rooms from "../utils/data/rooms";
import { useUser } from "@auth0/nextjs-auth0";
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
  align-items: flex-start;
`;

const Home = () => {
  const { user, isLoading, error } = useUser();
  useEffect(() => {
    if (!user.app_metadata && !isLoading) {
      router.replace("/");
    }
  });

  if (!user.app_metadata) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Notifications />
      </Wrapper>
    </Container>
  );
};

export default Home;
