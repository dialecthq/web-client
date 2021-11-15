import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";
import Avatar from "../../common/Avatar";
import { HiDotsHorizontal, HiOutlineDotsHorizontal } from "react-icons/hi";
import { Popover } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import { signOut } from "next-auth/react";

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  :hover {
    cursor: pointer;
    background-color: #d4d4d440;
  }
  padding: 12px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 12px;
  border-radius: 40px;
`;

const NavButtonTitle = styled.p`
  font-size: 1.6em;
  font-weight: ${(p) => (p.active ? 600 : 400)};
  color: #000;
  margin-left: 18px;

  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const Name = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  line-height: 10px;
`;

const Username = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: #00000080;
`;

const Icon = styled(HiDotsHorizontal)`
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const LogoutButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  transition: 0.2s all ease-in-out;
  padding: 8px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
`;

const ProfileButton = () => {
  const { user, isLoading, error } = useUser();
  const router = useRouter();
  return (
    <Popover
      placement="right"
      content={
        <LogoutButton
          onClick={async () => {
            signOut({ redirect: "http://localhost:3000/" });
          }}
        >
          <p>Logout @{user.app_metadata.username}</p>
        </LogoutButton>
      }
      title={null}
    >
      <NavButtonContainer>
        <Avatar user={user.app_metadata} size={48} />
        <InfoContainer>
          <Name>{user.app_metadata.name}</Name>
          <Username>@{user.app_metadata.username}</Username>
        </InfoContainer>
        <Icon size={18} color="#000" />
      </NavButtonContainer>
    </Popover>
  );
};

export default ProfileButton;
