import React from 'react';
import styled from 'styled-components';
import { Oval } from '@agney/react-loading';

const LoadingContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px;
`;

const Text = styled.p`
    font-size: 1.2em;
    font-weight: 500;
    color: #454545;
    margin-top: 30px;
    margin-bottom: 0px;
    text-align: center;
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingWrapper>
      <Oval color="#1ce6d5" width="64" />
      <Text>Revolutionizing language acquisition, one exchange at a time</Text>
    </LoadingWrapper>
  </LoadingContainer>
);

export default Loading;
