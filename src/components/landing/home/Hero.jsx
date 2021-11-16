import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import strings from "../../../utils/data/strings";
import { useRouter } from "next/router";

// import SignIn from "../common/SignIn";
// import SignUp from "../common/SignUp";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  padding-top: 160px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroText = styled.p`
  font-size: 4.1em;
  color: #1c1c1c;
  font-weight: 700;
  text-align: center;
`;

const Language = styled.span`
  font-weight: 700;
  background: -webkit-linear-gradient(
    left,
    #45ff8f,
    #45ffd2,
    #45ffe9,
    #45deff,
    #45bcff
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const Subtitle = styled.p`
  margin-top: 15px;
  font-size: 1.8em;
  font-weight: 500;
  color: #1c1c1c;
  opacity: 0.6;
  max-width: 700px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.4em;
    max-width: 400px;
  }
`;

const Mobile = styled.p`
  font-size: 4.2em;
  color: #1c1c1c;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2em;
  }
`;

const Hero = () => {
  const router = useRouter();
  const arr = strings.theBest.split("HDHKA");
  return (
    <>
      <Container>
        <Wrapper>
          <Mobile>
            {arr[0]}
            <Language>{strings.anyLanguage}</Language>
            {arr[1]}
          </Mobile>
          <Subtitle>{strings.heroText}</Subtitle>
          <Button
            type="primary"
            style={{ marginTop: 30, height: 50, width: 120 }}
            onClick={() => router.push("/register")}
          >
            {strings.getStarted}
          </Button>
        </Wrapper>
      </Container>
      {/* <SignUp
        visible={signUpVisible}
        setVisible={setSignUpVisible}
        setSignInVisible={setSignInVisible}
      />
      <SignIn
        visible={signInVisible}
        setVisible={setSignInVisible}
        setSignUpVisible={setSignUpVisible}
      /> */}
    </>
  );
};
export default Hero;
