import styled from "styled-components";
import Avatar from "../../common/Avatar";
import { useState } from "react";
import UserContainer from "../../../utils/state/userContainer";
import axios from "axios";
import UnfollowButton from "../Profile/UnfollowButton";
import FollowButton from "../Profile/FollowButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Name = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 8px;
`;

const Username = styled.p`
  font-size: 0.8em;
  font-weight: 500;
  color: #00000080;
  line-height: 8px;
`;

const SpacedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Spacer = styled.div`
  width: 48px;
`;

const Bio = styled.p`
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 1.1em;
`;

const FollowerText = styled.p`
  font-weight: 400;
  font-size: 1.1em;
  color: #00000080;
`;

const FollowerCount = styled.p`
  font-weight: 700;
  font-size: 1.1em;
  color: ;
`;

const Popover = ({ profile }) => {
  console.log(profile.followers);
  const { user } = UserContainer.useContainer();
  const isMyAccount = profile.id === user.id;
  const [isFollowing, setIsFollowing] = useState(
    profile.followers ? profile.followers.some((e) => e.id === user.id) : false
  );
  const [followers, setFollowers] = useState(
    profile.followers ? profile.followers.length : 0
  );

  const follow = () => {
    axios.post("/api/community/follow", { profile, user }).then(() => {
      setIsFollowing(true);
      setFollowers(followers + 1);
    });
  };

  const unfollow = () => {
    axios.post("/api/community/unfollow", { profile, user }).then(() => {
      setIsFollowing(false);
      setFollowers(followers - 1);
    });
  };

  return (
    <Container>
      <Wrapper>
        <SpacedRow>
          <Col>
            <Avatar size={48} user={profile} />
            <Name>{profile.name}</Name>
            <Username>@{profile.username}</Username>
          </Col>
          <Col style={{ marginLeft: 16 }}>
            {!isMyAccount ? (
              isFollowing ? (
                <UnfollowButton title="Unfollow" onClick={() => unfollow()} />
              ) : (
                <FollowButton title="Follow" onClick={() => follow()} />
              )
            ) : (
              <Spacer />
            )}
          </Col>
        </SpacedRow>
        <Row>
          <Bio>{profile.bio}</Bio>
        </Row>
        <Row>
          <FollowerCount style={{ marginRight: 8 }}>{followers}</FollowerCount>
          <FollowerText style={{ marginRight: 16 }}>Followers</FollowerText>
          <FollowerCount style={{ marginRight: 8 }}>
            {profile.following ? profile.following.length : 0}
          </FollowerCount>
          <FollowerText>Following</FollowerText>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Popover;
