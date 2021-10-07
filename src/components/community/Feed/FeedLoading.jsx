import styled from "styled-components";
import { Oval } from "@agney/react-loading";

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const FeedLoading = () => {
  return (
    <LoadingWrapper>
      <Oval color="#4F3FF0" width={36} style={{ marginTop: 20 }} />
    </LoadingWrapper>
  );
};

export default FeedLoading;
