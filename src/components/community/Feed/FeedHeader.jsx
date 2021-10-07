import styled from "styled-components";

const FeedHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d4d4d480;
`;

const HeaderTitle = styled.p`
  font-size: 1.4em;
  font-weight: 600;
  color: #000;
`;

const FeedHeader = () => {
  return (
    <FeedHeaderContainer>
      <HeaderTitle>Home</HeaderTitle>
    </FeedHeaderContainer>
  );
};

export default FeedHeader;
