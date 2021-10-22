import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button } from "antd";
import { Cross as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import UserContainer from "../../../utils/state/userContainer";
import HeaderLogo from "../../common/HeaderLogo";
import strings from "../../../utils/data/strings";
import LanguageContainer from "../../../utils/state/languageContainer";
import { logout } from "../../../utils/apis/UserAPI";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
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
  const { user } = UserContainer.useContainer();
  const { language, setLanguage } = LanguageContainer.useContainer();
  const router = useRouter();

  const [signInVisible, setSignInVisible] = useState(false);
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
            <HeaderSection desktop>
              <Link href="/about" passHref>
                <TextLink style={{ marginLeft: 40 }}>
                  {strings.about.capitalize()}
                </TextLink>
              </Link>
              {/* <Link href="/about">{strings.blog.uncapitalize()}</Link> */}
              {/* <Link href="/pricing">{strings.pricing.uncapitalize()}</Link> */}
            </HeaderSection>
          </HeaderSection>
          <HeaderSection desktop>
            {!user ? (
              <>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginRight: 10,
                  }}
                  onClick={() => {
                    setSignInVisible(true);
                  }}
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
                  onClick={() => {
                    logout();
                  }}
                >
                  {strings.signOut.capitalize()}
                </Button>
                <Button
                  type="primary"
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                  onClick={() => {
                    router.push("/exchange");
                  }}
                >
                  {strings.exchange.capitalize()}
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
        <MenuButton
          onClick={() => {
            setMenuVisible(false);
            router.push("/about");
          }}
        >
          <ButtonText>{strings.blog.capitalize()}</ButtonText>
        </MenuButton>
        <MenuButton
          onClick={() => {
            setMenuVisible(false);
            router.push("/about");
          }}
          style={{ marginBottom: 50 }}
        >
          <ButtonText>{strings.pricing.capitalize()}</ButtonText>
        </MenuButton>
        {!user ? (
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
                setSignInVisible(true);
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
                logout();
              }}
            >
              <ButtonText>{strings.signOut.capitalize()}</ButtonText>
            </Button>
            <Button
              type="primary"
              block
              style={{
                height: 60,
                display: "flex",
                flexDirection: "row-reverse",
              }}
              onClick={() => {
                setMenuVisible(false);
                router.push("/exchange");
              }}
            >
              <ButtonText>{strings.exchange.capitalize()}</ButtonText>
            </Button>
          </>
        )}
      </MenuModal>
      <SignUp
        visible={signUpVisible}
        setVisible={setSignUpVisible}
        setSignInVisible={setSignInVisible}
      />
      <SignIn
        visible={signInVisible}
        setVisible={setSignInVisible}
        setSignUpVisible={setSignUpVisible}
      />
    </>
  );
};

export default Header;
