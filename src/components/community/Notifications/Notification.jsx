import { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import Avatar from "../../common/Avatar";
import axios from "axios";
import UserContainer from "../../../utils/state/userContainer";
import Link from "next/link";
import FeedLoading from "../../community/Feed/FeedLoading";
import * as months from "../../../utils/data/months.json";
import { AnimatePresence, motion } from "framer-motion";
import { HiHeart, HiUser, HiReply } from "react-icons/hi";

const FeedPostContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #d4d4d480;
  transition: 0.2s all ease-in-out;
  :hover {
    cursor: pointer;
    background-color: #d4d4d440;
  }

  }
`;
const FeedPostWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const FeedContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
  width: calc(100% - 64px);
`;

const FeedPostInfoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PostAuthor = styled.p`
  font-size: 1.1em;
  font-weight: 700;
  margin-right: 4px;
  color: #000;
`;

const PostUsername = styled.p`
  font-size: 1.1em;
  font-weight: 400;
  color: #00000080;
`;

const Content = styled.p`
  font-size: 1.2em;
  font-weight: 400;
  margin-top: 4px;
  white-space: pre-line;
  color: #000;
`;

const ActionBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  margin-top: 24px;
  margin-left: -12px;
`;

const Icon = styled.div`
  padding: 4px;
  margin-top: -8.5px;
  border-radius: 36px;

  height: 36px;
  width: 36px;
  transition: 0.2s all ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(p) => (p.liked ? `${p.hoverColor}90` : "#00000080")} !important;
    fill: ${(p) => (p.liked ? `${p.hoverColor}90` : "")} !important;
  }

  :hover {
    cursor: pointer;
    background: ${(p) => `${p.hoverColor}20`};

    svg {
      color: ${(p) => `${p.hoverColor}90`} !important;
    }
  }
`;

const ClickContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 48px;
`;

const Data = styled.p`
  font-size: 1em;
  font-weight: 600;
  color: #00000080;
`;

const ReplyTo = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: #00000080;
`;

const FeedPost = ({ initialPost }) => {
  const { user } = UserContainer.useContainer();
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const author = await axios.get("/api/user/get_user", {
      params: {
        id: initialPost.actionAuthorId,
      },
    });

    if (!author) {
      return;
    }

    let tempPost = { ...post };
    tempPost.author = author.data;
    setPost(tempPost);
    setLoading(false);
  }, []);

  if (!loading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ width: "100%" }}
        >
          <Link href={`/${post.author.username}`}>
            <a style={{ width: "100%" }}>
              <FeedPostContainer>
                <FeedPostWrapper>
                  {post.type === "like" ? (
                    <HiHeart size={48} color="#FF00E590" />
                  ) : post.type === "follow" ? (
                    <HiUser size={48} color="#00E0FF90" />
                  ) : post.type === "reply" ? (
                    <HiReply size={48} color="#00FF3890" />
                  ) : null}

                  <FeedContentWrap>
                    <Avatar size={48} user={post.author} />
                    <PostAuthor style={{ marginTop: 8 }}>
                      {post.author.name}
                      <span
                        style={{
                          color: "#00000080",
                          fontWeight: 400,
                          marginLeft: 4,
                        }}
                      >
                        {post.type === "like"
                          ? "liked your post"
                          : post.type === "follow"
                          ? "followed you"
                          : post.type === "reply"
                          ? "replied to your post"
                          : null}
                      </span>
                    </PostAuthor>
                    {post.body && <Content>{post.body}</Content>}
                  </FeedContentWrap>
                </FeedPostWrapper>
              </FeedPostContainer>
            </a>
          </Link>
        </motion.div>
      </AnimatePresence>
    );
  } else {
    return null;
  }
};

export default FeedPost;
