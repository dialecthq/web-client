import styled from "styled-components";
import UserContainer from "../../../utils/state/userContainer";
import Avatar from "../../common/Avatar";
import { HiDotsHorizontal, HiOutlineDotsHorizontal } from "react-icons/hi";

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
  font-weight: 400;
  color: #dac9c9870;
`;

const Icon = styled(HiDotsHorizontal)`
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const ProfileButton = () => {
  const { user } = UserContainer.useContainer();
  return (
    <NavButtonContainer>
      <Avatar user={user} size={48} />
      <InfoContainer>
        <Name>{user.name}</Name>
        <Username>@{user.username}</Username>
      </InfoContainer>
      <Icon size={18} color="#000" />
    </NavButtonContainer>
  );
};

export default ProfileButton;
