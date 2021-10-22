import styled from "styled-components";
import UserContainer from "../../../utils/state/userContainer";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../../landing/common/Footer";
import { FaDiscord, FaReddit } from "react-icons/fa";
import InfoHeader from "./InfoHeader";

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
import FollowButton from "../Profile/EditButton";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  flex: 1;
  height: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  @media screen and (max-width: 959px) {
    display: none;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  position: fixed;
  padding-left: 24px;
  padding: 8px;
  z-index: 6;
  width: calc(100% * 1 / 3.75);
  border-left: 0.5px solid #d4d4d470;
  padding-top: 88px;

  @media scren and (max-width: 1260px) {
    width: calc(100% * 1 / 3 - 100px);
  }

  @media screen and (max-width: 959px) {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  border-radius: 24px;
  background-color: #f7f9f9;
`;

const BoxTitle = styled.div`
  font-size: 1.3em;
  font-weight: 700;
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  :hover {
    background-color: #f7f9f990;
  }
`;

const BoxItemCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const IconButton = styled.div`
  padding: 8px;
  border-radius: 44px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  :hover {
    background-color: #d4d4d4 !important;
    cursor: pointer;
  }
`;

const Info = () => {
  const router = useRouter();

  const { user } = UserContainer.useContainer();
  return (
    <InfoContainer>
      <InfoHeader />
      <InfoWrapper>
        <Box>
          <BoxTitle>Join the community</BoxTitle>
          <BoxItem style={{ marginTop: 24 }}>
            <IconButton>
              <FaDiscord size={36} color="#404EED" />
            </IconButton>
            <IconButton>
              <FaReddit size={36} color="#FD4500" />
            </IconButton>
          </BoxItem>
        </Box>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
