import styled from "styled-components";
import FollowButton from "../Profile/FollowButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-bottom: 48px;
`;

const GetPosts = ({ getPosts }) => {
  return (
    <Container>
      <FollowButton onClick={() => getPosts()} title="Load more" />
    </Container>
  );
};

export default GetPosts;
