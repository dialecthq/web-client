import styled from "styled-components";
import { HiArrowNarrowLeft, HiOutlineTranslate } from "react-icons/hi";
import Link from "next/link";
import Avatar from "../../common/Avatar";
import FollowButton from "./FollowButton";
import {
  HiOutlineLocationMarker,
  HiOutlineHome,
  HiOutlineFingerPrint,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import rooms from "../../../utils/data/rooms";
import countryOptions from "../../../utils/data/CountryOptions";

const ProfileHeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 5;
`;

const ProfileHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  align-items: center;
  border-bottom: 1px solid #d4d4d480;
  background-color: #fff;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const SpaceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Name = styled.p`
  font-size: 1.6em;
  font-weight: 700;
  margin-top: 8px;
`;

const Username = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  color: #00000080;
  line-height: 8px;
`;

const Bio = styled.p`
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 1.1em;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const ProfileItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  line-height: 32px;
`;

const Info = styled.p`
  font-weight: 400;
  color: #00000080;
  font-size: 1em;
`;

const levels = {
  1: "A1",
  2: "A2",
  3: "B1",
  4: "B2",
  5: "C1",
  6: "C2",
  7: "N",
};

const ProfileHero = ({ profile }) => {
  return (
    <ProfileHeroContainer>
      <ProfileHeroWrapper>
        <SpaceRow>
          <Col>
            <Avatar size={104} user={profile} />
            <Name>{profile.name}</Name>
            <Username>@{profile.username}</Username>
          </Col>
          <FollowButton title="Follow" onClick={() => console.log("clicked")} />
        </SpaceRow>
        <Col>
          <Bio>{profile.bio}</Bio>
        </Col>
        <Row style={{ marginBottom: 12 }}>
          <ProfileItem>
            <HiOutlineHome
              size={18}
              color="#00000080"
              style={{ marginRight: 4 }}
            />
            <Info>
              {countryOptions.filter((e) => e.key == profile.country)[0].value}
            </Info>
          </ProfileItem>
          <ProfileItem>
            <HiOutlineLocationMarker
              size={18}
              color="#00000080"
              style={{ marginRight: 4 }}
            />
            <Info>
              {countryOptions.filter((e) => e.key == profile.living)[0].value}
            </Info>
          </ProfileItem>
          {profile.languages.map((language) => {
            return (
              <ProfileItem>
                <HiOutlineTranslate
                  size={18}
                  color="#00000080"
                  style={{ marginRight: 4 }}
                />
                <Info style={{ marginRight: 8 }}>
                  {`${rooms.filter((e) => e.key == language.key)[0].value} · ${
                    levels[language.level]
                  }`}
                </Info>
              </ProfileItem>
            );
          })}
        </Row>
        <Row>
          <p>Followers: {profile.followers ? profile.followers.length : 0}</p>
        </Row>
      </ProfileHeroWrapper>
    </ProfileHeroContainer>
  );
};

export default ProfileHero;
