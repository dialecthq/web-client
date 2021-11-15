import { useState } from "react";
import styled from "styled-components";
import { Input, Tooltip } from "antd";
import { useUser } from "@auth0/nextjs-auth0";
import Avatar from "../../common/Avatar";
import PostButton from "../Feed/PostButton";
import axios from "axios";
import { HiOutlineChat, HiOutlineClipboardCheck } from "react-icons/hi";

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
  align-items: flex-start;
`;

const CorrectionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

const ReplyTo = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: #00000080;
`;

const Icon = styled.div`
  padding: 4px;
  border-radius: 36px;

  height: 36px;
  width: 36px;
  transition: 0.2s all ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(p) => p.active && `${p.hoverColor}90`} !important;
  }
  background: ${(p) => (p.active ? `${p.hoverColor}20` : "#fff")};

  :hover {
    cursor: pointer;

    svg {
      color: ${(p) => `${p.hoverColor}90`} !important;
    }
  }
`;

const ClickContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  width: 100%;
`;

const RowGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedInput = ({ post, posts, setPosts }) => {
  const { user, isLoading, error } = useUser();
  const [content, setContent] = useState(post.body);
  const [type, setType] = useState("reply");
  return (
    <FeedInputContainer>
      <Avatar user={user.app_metadata} size={48} />
      <InputWrapper>
        <CorrectionTitle>
          <ReplyTo>
            {type === "reply" ? "replying to" : "correcting"}{" "}
            <span style={{ color: "blue" }}>@{post.author.username}</span>
          </ReplyTo>
        </CorrectionTitle>
        <Input.TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post your reply"
          autoSize={{ minRows: 3 }}
          maxLength={500}
          style={{ fontSize: 18 }}
        />
        <Row>
          <RowGroup>
            <Tooltip title="reply" placement="bottom">
              <ClickContentContainer
                hoverColor="#00E0FF"
                active={type === "reply"}
                onClick={() => setType("reply")}
              >
                <Icon hoverColor="#00E0FF" active={type === "reply"}>
                  <HiOutlineChat size={24} color="#00000080" />
                </Icon>
              </ClickContentContainer>
            </Tooltip>
            <Tooltip title="correction" placement="bottom">
              <ClickContentContainer
                hoverColor="#00ffb4"
                active={type === "correction"}
                onClick={() => setType("correction")}
              >
                <Icon hoverColor="#00ffb4" active={type === "correction"}>
                  <HiOutlineClipboardCheck size={24} color="#00000080" />
                </Icon>
              </ClickContentContainer>
            </Tooltip>
          </RowGroup>
          <PostButton
            title="Post"
            style={{ marginTop: 12 }}
            onClick={async () => {
              const newPost = await axios.post(
                "http://localhost:3000/api/community/reply",
                {
                  authorId: user.app_metadata.id,
                  body: content,
                  postId: post.id,
                  originalAuthorId: post.authorId,
                  language: post.language,
                  type: type,
                }
              );
              setPosts([newPost.data, ...posts]);
              setContent("");
            }}
          />
        </Row>
      </InputWrapper>
    </FeedInputContainer>
  );
};

export default FeedInput;
