import styled from "styled-components";
import { Input } from "antd";
import UserContainer from "../../../utils/state/userContainer";
import Avatar from "../../common/Avatar";
import PostButton from "./PostButton";

const FeedInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid #d4d4d480;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  align-items: flex-end;
`;

const FeedInput = () => {
  const { user } = UserContainer.useContainer();
  return (
    <FeedInputContainer>
      <Avatar user={user} size={54} />
      <InputWrapper>
        <Input.TextArea placeholder="What's on your mind?" autosize />
        <PostButton title="Post" style={{ marginTop: 12 }} />
      </InputWrapper>
    </FeedInputContainer>
  );
};

export default FeedInput;
