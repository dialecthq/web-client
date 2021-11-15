import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button } from "antd";
import { Cross as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";

import HeaderLogo from "../../common/HeaderLogo";
import strings from "../../../utils/data/strings";
import LanguageContainer from "../../../utils/state/languageContainer";
import UserContainer from "../../../utils/state/userContainer";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import Link from "next/link";
import fire from "../../../utils/fire";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  padding: 8px 24px;
  background: ${(p) => (p.scrollState ? "#fff" : "transparent")};
  position: fixed;
  z-index: 5;
  transition: 0.15s all ease-out;
  border-bottom: ${(p) => (p.scrollState ? "1px solid #d4d4d4" : "none")};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextLink = styled.a`
  color: #1c1c1c;
  font-size: 1em;
  font-weight: 500;
  margin-left: 20px;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSection = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: ${(p) => (p.desktop ? "flex" : "none")};

  @media screen and (max-width: 768px) {
    display: ${(p) => (p.mobile ? "flex" : "none")};
  }
`;

const MenuModal = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  padding-top: 120px;
  padding-left: 24px;
  padding-right: 24px;
  top: ${(p) => (p.visible ? "0px" : "-1000px")};
  opacity: ${(p) => (p.visible ? 1 : 0.1)};
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
  background: #fff;
  transition: 0.4s all ease-in-out;

  @media screen and (min-width: 769px) {
    top: -1000px;
  }
`;

const ButtonText = styled.span`
  font-weight: 500;
  font-size: 1.2em;
  color: ${(p) => (p.white ? "#fff" : "inherit")};
`;

const MenuButton = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Header = () => {
  const { stateUser } = UserContainer.useContainer();
  console.log("header user", stateUser);
  const { language, setLanguage } = LanguageContainer.useContainer();
  const router = useRouter();

  const [signUpVisible, setSignUpVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const listener = document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 85) {
        if (scrollState !== true) {
          setScrollState(true);
        }
      } else if (scrollState !== false) {
        setScrollState(false);
      }
    });
    return listener;
  });

  return (
    <>
      <Container scrollState={scrollState}>
        <Wrapper>
          <HeaderSection desktop mobile>
            <HeaderLogo />
            <Link href="/about" passHref>
              <TextLink style={{ marginRight: 40 }}>
                {strings.about.capitalize()}
              </TextLink>
            </Link>
          </HeaderSection>
          <HeaderSection desktop>
            {!stateUser ? (
              <>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginRight: 10,
                    fontWeight: "600",
                  }}
                  onClick={() => {
                    router.push("/api/auth/login");
                  }}
                  type="text"
                >
                  {strings.logIn.capitalize()}
                </Button>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                  type="primary"
                  onClick={() => {
                    setSignUpVisible(true);
                  }}
                >
                  {strings.getStarted.capitalize()}
                </Button>
              </>
            ) : (
              <>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginRight: 10,
                  }}
                  onClick={async () => {
                    router.push("/api/auth/logout");
                  }}
                  type="text"
                >
                  {strings.signOut.capitalize()}
                </Button>
              </>
            )}
          </HeaderSection>
          <HeaderSection mobile>
            <Hamburger
              rounded
              toggled={menuVisible}
              onToggle={() => setMenuVisible(!menuVisible)}
            />
          </HeaderSection>
        </Wrapper>
      </Container>
      <MenuModal visible={menuVisible}>
        <MenuButton
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setMenuVisible(false);
            router.push("/about");
          }}
        >
          <ButtonText>{strings.about.capitalize()}</ButtonText>
        </MenuButton>
        {/* <MenuButton
          onClick={() => {
            setMenuVisible(false);
            router.push("/about");
          }}
        >
          <ButtonText>{strings.blog.capitalize()}</ButtonText>
        </MenuButton> */}
        {/* <MenuButton
          onClick={() => {
            setMenuVisible(false);
            router.push("/about");
          }}
          style={{ marginBottom: 50 }}
        >
          <ButtonText>{strings.pricing.capitalize()}</ButtonText>
        </MenuButton> */}
        {!stateUser ? (
          <>
            <Button
              block
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginBottom: 20,
                height: 60,
              }}
              onClick={() => {
                setMenuVisible(false);
                router.push("/api/auth/login");
              }}
            >
              <ButtonText>{strings.logIn.capitalize()}</ButtonText>
            </Button>
            <Button
              block
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                height: 60,
              }}
              type="primary"
              onClick={() => {
                setMenuVisible(false);
                setSignUpVisible(true);
              }}
            >
              <ButtonText>{strings.getStarted.capitalize()}</ButtonText>
            </Button>
          </>
        ) : (
          <>
            <Button
              block
              style={{
                height: 60,
                display: "flex",
                flexDirection: "row-reverse",
                marginBottom: 20,
              }}
              onClick={() => {
                setMenuVisible(false);
                signOut();
                // router.push("/logout");
              }}
            >
              <ButtonText>{strings.signOut.capitalize()}</ButtonText>
            </Button>
          </>
        )}
      </MenuModal>
    </>
  );
};

export default Header;
