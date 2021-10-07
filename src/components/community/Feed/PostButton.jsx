import styled from "styled-components";
import { HiOutlinePencilAlt } from "react-icons/hi";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4e3ff0;
  border-radius: 40px;
  transition: 0.2s all ease-in-out;
  padding: 6px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 8px;
  border-radius: 40px;

  :hover {
    cursor: pointer;
    background-color: #4e3ff080;
  }
`;

const ButtonTitle = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  color: #fff;
`;

const PostButton = ({ onClick, style, title }) => {
  return (
    <ButtonContainer style={{ ...style }} onClick={onClick}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

export default PostButton;
