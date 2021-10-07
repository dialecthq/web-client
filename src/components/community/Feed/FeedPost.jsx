import { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import Avatar from "../../common/Avatar";
import PostButton from "./PostButton";
import axios from "axios";
import { HiOutlineChat, HiOutlineHeart, HiOutlineShare } from "react-icons/hi";
import UserContainer from "../../../utils/state/userContainer";

const FeedPostContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 24px;
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
`;

const FeedPostInfoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PostAuthor = styled.p`
  font-size: 1em;
  font-weight: 600;
  margin-right: 4px;
`;

const PostUsername = styled.p`
  font-size: 1em;
  font-weight: 400;
  color: #00000080;
`;

const Content = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  margin-top: 4px;
  white-space: pre-line;
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

const FeedPost = ({ post, setPosts, posts }) => {
  const { user } = UserContainer.useContainer();
  const [likes, setLikes] = useState(post.likers.length || 0);
  const [liked, setLiked] = useState(post.likers.some((e) => e === user.uid));

  const likePost = () => {
    axios
      .post("/api/community/like_post", { user, post })
      .then((data) => {
        console.log(data);
      })
      .then((data) => {
        setLiked(true);
        setLikes(likes + 1);
      });
  };

  const unlikePost = () => {
    axios
      .post("/api/community/unlike_post", { user, post })
      .then((data) => {
        console.log(data);
      })
      .then((data) => {
        setLiked(false);
        setLikes(likes - 1);
      });
  };

  return (
    <FeedPostContainer>
      <FeedPostWrapper>
        <Avatar user={post.author} size={64} />
        <FeedContentWrap>
          <FeedPostInfoWrap>
            <PostAuthor>{post.author.name}</PostAuthor>
            <PostUsername>@{post.author.username}</PostUsername>
          </FeedPostInfoWrap>
          <Content>{post.content}</Content>
          <ActionBarContainer>
            <ClickContentContainer hoverColor="#00E0FF">
              <Icon hoverColor="#00E0FF">
                <HiOutlineChat size={24} color="#00000080" />
              </Icon>
            </ClickContentContainer>

            <ClickContentContainer hoverColor="#FF00E5">
              <Icon
                hoverColor="#FF00E5"
                liked={liked}
                onClick={() => {
                  if (!liked) {
                    likePost();
                  } else {
                    unlikePost();
                  }
                }}
              >
                <HiOutlineHeart size={24} color="#00000080" liked={liked} />
              </Icon>
              <Data>{likes}</Data>
            </ClickContentContainer>

            <ClickContentContainer hoverColor="#00FF38">
              <Icon hoverColor="#00FF38">
                <HiOutlineShare size={24} color="#00000080" />
              </Icon>
            </ClickContentContainer>
          </ActionBarContainer>
        </FeedContentWrap>
      </FeedPostWrapper>
    </FeedPostContainer>
  );
};

export default FeedPost;
