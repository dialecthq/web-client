import styled from "styled-components";
import FeedPost from "../Feed/FeedPost";
import PostHeader from "./PostHeader";
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
  return (
    <FeedContainer>
      <FeedWrapper>
        <PostHeader />
        <FeedPost post={post} />
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Status;
