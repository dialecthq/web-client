import HeaderLogo from "../../common/HeaderLogo";
import styled from "styled-components";
import NavButton from "./NavButton";
import PrimaryButton from "./PrimaryButton";
import ProfileButton from "./ProfileButton";
import UserContainer from "../../../utils/state/userContainer";
import { useRouter } from "next/router";

import {
  HiHome,
  HiOutlineHome,
  HiBell,
  HiOutlineBell,
  HiMail,
  HiOutlineMail,
  HiUser,
  HiOutlineUser,
  HiLightningBolt,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  flex: 0.75;
  height: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-end;

  position: relative;
  @media screen and (max-width: 1260px) {
    width: 100px !important;
    min-width: 100px;
    max-width: 100px;
    justify-content: flex-start;
    align-items: center;
    padding: 0px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  overflow-y: auto;
  position: fixed;
  border-right: 0.5px solid #d4d4d470;
  padding-right: 24px;
  padding: 8px;
  z-index: 6;

  @media screen and (max-width: 1260px) {
    align-items: center;
    padding: 0px;
    padding-top: 8px;
  }
`;

const NavButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  right: 24px;
  margin-top: 24px;
`;

const SpaceWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 1260px) {
    align-items: center;
  }
`;

const Nav = () => {
  const router = useRouter();

  const { user } = UserContainer.useContainer();
  return (
    <NavContainer>
      <NavWrapper>
        <SpaceWrap>
          <HeaderLogo small />
          <NavButtonContainer>
            <NavButton
              style={{ marginTop: 48 }}
              name="Home"
              icon={<HiOutlineHome size={24} />}
              activeIcon={<HiHome size={24} />}
              active={router.pathname === "/home"}
              href="/home"
            />
            <NavButton
              name="Notifications"
              icon={<HiOutlineBell size={24} />}
              activeIcon={<HiBell size={24} />}
              active={router.pathname === "/notifications"}
              href="/notifications"
            />
            <NavButton
              name="Messages"
              icon={<HiOutlineMail size={24} />}
              activeIcon={<HiMail size={24} />}
              active={router.pathname === "/messages"}
              href="/messages"
            />
            <NavButton
              name="Profile"
              icon={<HiOutlineUser size={24} />}
              activeIcon={<HiUser size={24} />}
              active={router.query.username === user.username}
              href={`/${user.username}`}
            />
            <NavButton
              name="Conversations"
              icon={<HiOutlineLightningBolt size={24} />}
              activeIcon={<HiLightningBolt size={24} />}
              active={router.pathname === "/conversations"}
              href="/conversations"
            />
            <PrimaryButton
              title="Post"
              style={{ width: "100%", marginTop: 20 }}
            />
          </NavButtonContainer>
        </SpaceWrap>
        <SpaceWrap>
          <ProfileButton />
        </SpaceWrap>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;
