import styled from "styled-components";

const FeedHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 5;
`;

const FeedHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d4d4d480;
  background-color: #fff;
  width: 100%;
  position: fixed;
  flex: 1;
`;

const HeaderTitle = styled.p`
  font-size: 1.4em;
  font-weight: 600;
  color: #000;
`;

const FeedHeader = () => {
  return (
    <FeedHeaderContainer>
      <FeedHeaderWrapper>
        <HeaderTitle>Home</HeaderTitle>
      </FeedHeaderWrapper>
    </FeedHeaderContainer>
  );
};

export default FeedHeader;
