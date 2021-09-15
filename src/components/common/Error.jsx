import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import HeaderLogo from "./HeaderLogo";
import strings from "../../Utils/data/strings";

const ErrorContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-background);
  color: var(--text-color);
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  min-width: 200px;
`;

const Text = styled.p`
  font-size: 1.3em;
  font-weight: 500;
  opacity: 0.8;
  margin-top: 30px;
  margin-bottom: 0px;
  text-align: center;
  letter-spacing: 0.05em;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  padding: 8px 24px;
`;

const Error = ({ imgLink, errorMessage }) => {
  const router = useRouter();
  return (
    <ErrorContainer>
      <HeaderContainer>
        <HeaderWrapper>
          <Button
            style={{ marginRight: 20 }}
            icon={<FaArrowLeft style={{ marginRight: 5 }} />}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              router.push("/exchange");
            }}
          >
            {strings.back.capitalize()}
          </Button>
          <HeaderLogo />
        </HeaderWrapper>
      </HeaderContainer>

      <ErrorWrapper>
        <img
          src={imgLink || ""}
          style={{ height: 200, width: 200 }}
          alt="link"
        />
        <Text>❌{errorMessage}</Text>
      </ErrorWrapper>
    </ErrorContainer>
  );
};

export default Error;
