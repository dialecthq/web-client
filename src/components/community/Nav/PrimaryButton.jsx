import styled from "styled-components";
import { HiOutlinePencilAlt } from "react-icons/hi";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4e3ff0;
  border-radius: 40px;
  transition: 0.2s all ease-in-out;
  padding: 12px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 12px;
  border-radius: 40px;

  :hover {
    cursor: pointer;
    background-color: #4e3ff080;
  }
`;

const ButtonTitle = styled.p`
  font-size: 1.6em;
  font-weight: 600;
  color: #fff;
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const Icon = styled(HiOutlinePencilAlt)`
  display: none;

  @media screen and (max-width: 1260px) {
    display: flex;
  }
`;

const PrimaryButton = ({ onClick, style, title }) => {
  return (
    <ButtonContainer style={{ ...style }} onClick={onClick}>
      <ButtonTitle>{title}</ButtonTitle>
      <Icon size={24} color="#fff" />
    </ButtonContainer>
  );
};

export default PrimaryButton;
