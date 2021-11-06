import styled from "styled-components";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";

const FeedHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 6;
`;

const FeedHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 24px;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d4d4d480;
  background-color: #fff;
  position: fixed;
  width: calc(100vw - 300px);

  @media screen and (max-width: 1260px) {
    width: calc(100vw - 100px);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const HeaderTitle = styled.p`
  font-size: 1.4em;
  font-weight: 600;
  color: #000;
  margin-left: 24px;
`;

const IconButton = styled.div`
  padding: 4px;
  border-radius: 32px;
  height: 32px;
  width: 32px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  :hover {
    background-color: #d4d4d4 !important;
    cursor: pointer;
  }
`;

const FeedHeader = ({ profile }) => {
  return (
    <FeedHeaderContainer>
      <FeedHeaderWrapper>
        <Link href="/home" passHref>
          <a>
            <IconButton>
              <HiArrowNarrowLeft size={24} color="#000000" />
            </IconButton>
          </a>
        </Link>
        <HeaderTitle>{profile.name}</HeaderTitle>
      </FeedHeaderWrapper>
    </FeedHeaderContainer>
  );
};

export default FeedHeader;
