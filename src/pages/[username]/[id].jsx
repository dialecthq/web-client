import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import { Helmet } from "react-helmet";
import UserContainer from "../../utils/state/userContainer";

import Nav from "../../components/community/Nav/Nav";
import Feed from "../../components/community/Feed/Feed";
import Status from "../../components/community/Status/Status";

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

const Post = ({ post }) => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Status post={post} />
        <Info />
      </Wrapper>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const result = await axios.get(
    "http://localhost:3000/api/community/get_post",
    {
      params: {
        uid: id,
      },
    }
  );

  if (!result.data) {
    console.log(result.data);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: result.data,
    }, // will be passed to the page component as props
  };
}

export default Post;
