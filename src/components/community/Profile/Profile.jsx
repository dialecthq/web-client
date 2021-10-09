import styled from "styled-components";
import { Oval } from "@agney/react-loading";
import ProfileHeader from "./ProfileHeader";
import ProfileHero from "./ProfileHero";

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

const LoadingContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = ({ profile, loading }) => {
  return (
    <FeedContainer>
      <FeedWrapper>
        {!loading ? (
          <>
            <ProfileHeader profile={profile} />
            <ProfileHero profile={profile} />
          </>
        ) : (
          <LoadingContainer>
            <Oval color="#4F3FF0" width={48} />
          </LoadingContainer>
        )}
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Profile;
