import React, { useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import HeaderLogo from '@components/common/HeaderLogo'
import UserContainer from '@utils/state/userContainer'
import {
  FaArrowLeft, FaArrowRight, FaSignOutAlt, FaBars
} from 'react-icons/fa'
import { Button } from 'antd'
import { Cross as Hamburger } from 'hamburger-react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const MenuAnimation = keyframes`
  from {
    top: -1000px;
    opacity: 0.1;
  }
  to {
    top: 0px;
    opacity: 1;
  }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    padding: 8px 24px;
    background: #fff;
    position: fixed;
    z-index: 5;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Link = styled.a`
    color: #1c1c1c;
    font-size: 1em;
    font-weight: 500;
    margin-left: 20px;

    :hover {
        opacity: 0.8;
    }
`
const LogInText = styled.a`
    color: #1c1c1c;
    font-size: 1em;
    font-weight: 500;
    margin-right: 15px;

    :hover {
        opacity: 0.8;
    }
`

const HeaderSection = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: ${(p) => (p.desktop ? 'flex' : 'none')};

    @media screen and (max-width: 768px) {
      display: ${(p) => (p.mobile ? 'flex' : 'none')};
    }
`

const MenuModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
  background: #fff;
  display: ${(p) => (p.visible ? 'flex' : 'none')};
  animation: ${MenuAnimation} 0.2s ease-in-out;
  animation-fill-mode: forwards;
`

const Header = () => {
  const { user, userAPI } = UserContainer.useContainer()

  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <Container>
        <Wrapper>
          <HeaderSection desktop mobile>
            <HeaderLogo />
            <HeaderSection desktop>
              <Link href="/about" style={{ marginLeft: 40 }}>About</Link>
              <Link href="/about">Blog</Link>
              <Link href="/about">Pricing</Link>
            </HeaderSection>

          </HeaderSection>
          <HeaderSection desktop>
            {!user
              ? (
                <>
                  <Button
                    style={{
                      display: 'flex', flexDirection: 'row-reverse', marginRight: 10
                    }}
                    onClick={() => {
                      setSignInVisible(true)
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    style={{
                      display: 'flex', flexDirection: 'row-reverse'
                    }}
                    type="primary"
                    onClick={() => {
                      setSignUpVisible(true)
                    }}
                  >
                    Get started
                  </Button>
                </>
              )
              : (
                <Button
                  type="primary"
                  style={{
                    height: 50, width: 120, display: 'flex', flexDirection: 'row-reverse'
                  }}
                  onClick={() => {
                    userAPI.logout()
                  }}
                >
                  Sign out
                </Button>
              )}
          </HeaderSection>
          <HeaderSection mobile>
            <Hamburger rounded onToggle={() => setMenuVisible(!menuVisible)} />
          </HeaderSection>
        </Wrapper>
      </Container>
      <MenuModal visible={menuVisible} />
      <SignUp
        visible={signUpVisible}
        setVisible={setSignUpVisible}
        setSignInVisible={setSignInVisible}
      />
      <SignIn
        visible={signInVisible}
        setVisible={setSignInVisible}
        setSignInVisible={setSignUpVisible}
      />
    </>
  )
}

export default Header
