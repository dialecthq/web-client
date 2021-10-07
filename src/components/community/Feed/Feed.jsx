import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import FeedInput from "./FeedInput";

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
  overflow-y: scroll;
`;

const Feed = () => {
  return (
    <FeedContainer>
      <FeedWrapper>
        <FeedHeader />
        <FeedInput />
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Feed;
