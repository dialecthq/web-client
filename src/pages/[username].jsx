import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import { Helmet } from "react-helmet";
import UserContainer from "../utils/state/userContainer";

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

const Profile = styled.div`
  display: flex;
  flex: 2;
`;

const Post = () => {
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    axios
      .get("/api/community/query_user", {
        params: {
          username: username,
        },
      })
      .then((data) => {
        setProfile(data.data.user);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Profile>{profile.uid}</Profile>
        <Info />
      </Wrapper>
    </Container>
  );
};

export default Post;
