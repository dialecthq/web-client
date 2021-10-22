import { useEffect, useState } from "react";
import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import FeedInput from "./FeedInput";
import FeedPost from "./FeedPost";
import FeedLoading from "./FeedLoading";
import GetMorePosts from "./GetMorePosts";
import axios from "axios";
import UserContainer from "../../../utils/state/userContainer";

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
`;

const post = {
  author: {
    avatarURL:
      "https://firebasestorage.googleapis.com/v0/b/langi-a36fc.appspot.com/o/RdgXkVr9hvcdZJJMOF51jQGEh292%2Fprofile.png?alt=media&token=2cd96793-8fb6-4af2-8317-b55285aad9d8",
    bio: "hellohello",
    country: 215,
    email: "ryanbrew13@gmail.com",
    karma: 32,
    languages: [
      {
        key: 1,
        level: 7,
      },
      {
        key: 2,
        level: 2,
      },
    ],
    living: 142,
    name: "Ryan Brewer",
    rating: 4.932608695652174,
    rooms: 32,
    tokens: 20,
    uid: "RdgXkVr9hvcdZJJMOF51jQGEh292",
    unfinished: "",
    username: "ryanbrew13",
  },
  content: `Simple startup strategy...\n
  1. Build a fun culture\n
  2. Build a fun culture\n
  3. Build a fun culture\n
  4. Build a fun culture\n
  5. Build a fun culture`,
  dateCreated: 1633615754024,
  likers: {},
  uid: "273307de-3725-4546-a604-d8632c525b1a",
};

const Feed = () => {
  const { user } = UserContainer.useContainer();
  const nativeIndex = user.languageLevels.indexOf(7);
  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState(0);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(
    user.languageKeys[user.languageLevels.indexOf(7)]
  );

  const getPosts = (change, reload) => {
    if (reload) {
      setLoading(true);
    }
    axios
      .get("/api/community/get_posts", {
        params: {
          language: language,
          last: change ? 0 : last,
        },
      })
      .then((data) => {
        if (reload) {
          setLoading(false);
        }
        if (change) {
          setPosts([...data.data]);
          setLast(5);
        } else {
          setPosts([...posts, ...data.data]);
          setLast(last + data.data.length);
        }
      });
  };

  useEffect(() => {
    getPosts(true, true);
  }, [language]);

  return (
    <FeedContainer>
      <FeedWrapper>
        <FeedHeader language={language} setLanguage={setLanguage} />
        <FeedInput
          language={language}
          setPosts={setPosts}
          posts={posts}
          last={last}
          setLast={setLast}
        />
        {!loading ? (
          posts.map((post) => {
            return <FeedPost key={post.id} initialPost={post} />;
          })
        ) : (
          <FeedLoading />
        )}
        {!loading && <GetMorePosts getPosts={() => getPosts()} />}
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Feed;
