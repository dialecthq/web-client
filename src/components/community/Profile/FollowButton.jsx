import styled from "styled-components";
import { HiOutlinePencilAlt } from "react-icons/hi";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  transition: 0.2s all ease-in-out;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 12px;
  border-radius: 32px;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const ButtonTitle = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  color: #fff;
`;

const FollowButton = ({ onClick, style, title }) => {
  return (
    <ButtonContainer style={{ ...style }} onClick={onClick}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

export default FollowButton;
