import styled from "styled-components";
import NotificationsHeader from "./NotificationsHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import UserContainer from "../../../utils/state/userContainer";
import Notification from "./Notification";
import FeedLoading from "../Feed/FeedLoading";

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

const Profile = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = UserContainer.useContainer();

  useEffect(async () => {
    const result = await axios.get(
      "http://localhost:3000/api/user/get_notifications",
      {
        params: {
          userId: user.id,
        },
      }
    );
    if (!result.data) {
      setLoading(false);
      return;
    }

    setNotifications(result.data);
    setLoading(false);
  }, []);

  return (
    <FeedContainer>
      <FeedWrapper>
        <NotificationsHeader />
        {!loading ? (
          notifications.map((notification) => {
            return <Notification initialPost={notification} />;
          })
        ) : (
          <FeedLoading />
        )}
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Profile;
