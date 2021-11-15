import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import { Helmet } from "react-helmet";
import { useUser } from "@auth0/nextjs-auth0";

import Nav from "../../../components/community/Nav/Nav";
import Feed from "../../../components/community/Feed/Feed";
import Profile from "../../../components/community/Profile/Profile";
import Loading from "../../../components/common/Loading";
import { context } from "rc-image/lib/PreviewGroup";
import FeedLoading from "../../../components/community/Feed/FeedLoading";

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

const Post = () => {
  const { user, isLoading, error } = useUser();
  const router = useRouter();
  const { username } = router.query;
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const result = await axios.get(
      "http://localhost:3000/api/community/query_user",
      {
        params: {
          username: username,
        },
      }
    );
    setLoading(true);
    setProfile(result.data);
  });

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  });

  if (user && !isLoading) {
    return (
      <Container>
        <Wrapper>
          <Nav />
          {profile ? (
            <Profile
              profile={
                user.app_metadata.id === profile.id
                  ? user.app_metadata
                  : profile
              }
            />
          ) : (
            <FeedLoading />
          )}
        </Wrapper>
      </Container>
    );
  } else {
    return null;
  }
};

export default Post;
