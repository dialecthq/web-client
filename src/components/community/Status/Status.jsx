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
  const [replies, setReplies] = useState([]);
  const [last, setLast] = useState("");
  const [loading, setLoading] = useState(false);

  const getPosts = () => {
    console.log(post.replies);
    setLoading(true);
    axios
      .post("/api/community/get_replies", {
        replies: post.replies,
      })
      .then((data) => {
        console.log(1);
        setLoading(false);
        if (data.data.posts) {
          setReplies([...replies, ...data.data.posts]);
          setLast(data.data.last);
        } else {
          return;
        }
      })
      .catch(() => {
        setLoading(false);
        console.log("2");
      });
  };

  useEffect(() => {
    if (post.replies ? post.replies.length > 0 : false) {
      getPosts();
    }
  }, []);

  return (
    <FeedContainer>
      <FeedWrapper>
        <PostHeader />
        <FeedPost post={post} />
        <StatusInput post={post} />
        {!loading ? (
          replies.map((reply) => {
            return (
              <FeedPost
                key={reply.uid}
                post={reply}
                posts={replies}
                setPosts={setReplies}
              />
            );
          })
        ) : (
          <FeedLoading />
        )}
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Status;
