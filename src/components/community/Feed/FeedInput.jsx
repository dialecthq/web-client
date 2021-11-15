import { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import Avatar from "../../common/Avatar";
import PostButton from "./PostButton";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";

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

const FeedInput = ({
  style,
  onGo,
  language,
  setPosts,
  posts,
  last,
  setLast,
  modal,
}) => {
  const { user, isLoading, error } = useUser();
  const [content, setContent] = useState("");
  return (
    <FeedInputContainer style={style}>
      <Avatar user={user.app_metadata} size={48} />
      <InputWrapper>
        <Input.TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          autoSize={{ minRows: 2, maxRows: 4 }}
          maxLength={500}
          bordered={false}
          style={{ fontSize: 18 }}
        />
        <PostButton
          title="Post"
          style={{ marginTop: 12 }}
          onClick={async () => {
            const post = await axios.post("/api/community/post", {
              author: session.user,
              body: content,
              language: language,
            });
            if (!modal && post.data) {
              setPosts([post.data, ...posts]);
              setContent("");
              setLast(last + 1);
            }
            if (onGo) {
              onGo();
            }
          }}
        />
      </InputWrapper>
    </FeedInputContainer>
  );
};

export default FeedInput;
