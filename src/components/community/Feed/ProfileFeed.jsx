import styled from "styled-components";
import { useState, useEffect } from "react";
import FeedPost from "../Feed/FeedPost";
import FeedLoading from "../Feed/FeedLoading";
import axios from "axios";

const ProfileFeed = ({ profile }) => {
  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState("");
  const [loading, setLoading] = useState(false);
  const getPosts = () => {
    setLoading(true);
    axios
      .get("/api/community/get_user_posts", {
        params: {
          id: profile.id,
        },
      })
      .then((data) => {
        setLoading(false);
        setPosts([...posts, ...data.data]);
        setLast(data.data || null);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {!loading ? (
        posts.map((post) => {
          return (
            <FeedPost
              key={post.id}
              initialPost={post}
              posts={posts}
              setPosts={setPosts}
            />
          );
        })
      ) : (
        <FeedLoading />
      )}
    </>
  );
};

export default ProfileFeed;
