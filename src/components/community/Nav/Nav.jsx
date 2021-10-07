import HeaderLogo from "../../common/HeaderLogo";
import styled from "styled-components";
import NavButton from "./NavButton";
import PrimaryButton from "./PrimaryButton";
import ProfileButton from "./ProfileButton";
import { useRouter } from "next/router";

import {
  HiHome,
  HiOutlineHome,
  HiBell,
  HiOutlineBell,
  HiMail,
  HiOutlineMail,
} from "react-icons/hi";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  flex: 0.75;
  height: 100%;
  min-height: 100vh;
  padding: 8px;
  justify-content: flex-start;
  align-items: flex-end;
  padding-right: 24px;

  border-right: 0.5px solid #d4d4d470;
  positionm: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  @media screen and (max-width: 1260px) {
    width: 100px !important;
    min-width: 100px;
    max-width: 100px;
    justify-content: flex-start;
    align-items: center;
    padding-right: 8px;
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
  overflow-y: scroll;

  @media screen and (max-width: 1260px) {
    align-items: center;
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
  console.log(router.pathname);
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
            />
            <NavButton
              name="Notifications"
              icon={<HiOutlineBell size={24} />}
              activeIcon={<HiBell size={24} />}
              active={router.pathname === "/notifications"}
            />
            <NavButton
              name="Messages"
              icon={<HiOutlineMail size={24} />}
              activeIcon={<HiMail size={24} />}
              active={router.pathname === "/messages"}
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
