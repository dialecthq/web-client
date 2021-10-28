import styled from "styled-components";
import FeedPost from "../Feed/FeedPost";
import PostHeader from "./PostHeader";
import { useState, useEffect } from "react";
import StatusInput from "./StatusInput";
import FeedLoading from "../Feed/FeedLoading";
import axios from "axios";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  flex: 2;
  height: 100%;
  min-height: 100vh;
  border-right: #d4d4d480;
`;

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Status = ({ post }) => {
  const [replys, setReplys] = useState(post.replies);
  return (
    <FeedContainer>
      <FeedWrapper>
        <PostHeader />
        <FeedPost
          initialPost={post}
          posts={replys}
          setPosts={setReplys}
          redirectOnDelete
        />
        <StatusInput post={post} posts={replys} setPosts={setReplys} />
        {replys.map((reply) => {
          return (
            <FeedPost
              key={reply.id}
              initialPost={reply}
              posts={replys}
              setPosts={setReplys}
            />
          );
        })}
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Status;
