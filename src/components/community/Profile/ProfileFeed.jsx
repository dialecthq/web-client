import styled from "styled-components";
import { useState, useEffect } from "react";
import FeedPost from "../Feed/FeedPost";
import FeedLoading from "../Feed/FeedLoading";
import axios from "axios";
import GetPosts from "../Feed/GetMorePosts";

const ProfileFeed = ({ profile }) => {
  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState(0);
  const [loading, setLoading] = useState(false);

  const getPosts = (reload) => {
    if (reload) {
      setLoading(true);
    }
    axios
      .get("/api/community/get_user_posts", {
        params: {
          id: profile.id,
          last: last,
        },
      })
      .then((data) => {
        if (reload) {
          setLoading(false);
        }

        setPosts([...posts, ...data.data]);
        setLast(last + data.data.length);
      });
  };

  useEffect(() => {
    getPosts(true);
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
              redirect
              flag
            />
          );
        })
      ) : (
        <FeedLoading />
      )}
      {!loading && <GetPosts getPosts={() => getPosts()} />}
    </>
  );
};

export default ProfileFeed;
