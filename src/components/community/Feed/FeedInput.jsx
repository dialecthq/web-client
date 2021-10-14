import { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import UserContainer from "../../../utils/state/userContainer";
import Avatar from "../../common/Avatar";
import PostButton from "./PostButton";
import axios from "axios";

const FeedInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid #d4d4d480;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
  align-items: flex-end;
`;

const FeedInput = () => {
  const { user } = UserContainer.useContainer();
  const [content, setContent] = useState("");
  return (
    <FeedInputContainer>
      <Avatar user={user} size={48} />
      <InputWrapper>
        <Input.TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          autosize
        />
        <PostButton
          title="Post"
          style={{ marginTop: 12 }}
          onClick={() => {
            axios.post("/api/community/post", {
              authorId: user.id,
              body: content,
            });
          }}
        />
      </InputWrapper>
    </FeedInputContainer>
  );
};

export default FeedInput;
