import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import { Helmet } from "react-helmet";
import UserContainer from "../../utils/state/userContainer";

import Nav from "../../components/community/Nav/Nav";
import Feed from "../../components/community/Feed/Feed";
import Profile from "../../components/community/Profile/Profile";

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

const Post = ({ profile }) => {
  const { user, setUser, loading } = UserContainer.useContainer();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.replace("/");
    }
  });

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Profile profile={user.id === profile.id ? user : profile} />
      </Wrapper>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { username } = context.params;
  const result = await axios.get(
    "http://localhost:3000/api/community/query_user",
    {
      params: {
        username: username,
      },
    }
  );

  if (!result) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile: result.data,
    }, // will be passed to the page component as props
  };
}

export default Post;
