import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderLogo from '@components/common/HeaderLogo'
import UserContainer from '@utils/state/userContainer'
import { Button } from 'antd'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding: 8px 24px;
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
    display: flex;
    justify-content: center;
    align-items: center;
`
const Header = () => {
  const { user, userAPI } = UserContainer.useContainer()
  console.log(user)

  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)

  return (
    <>
      <Container>
        <Wrapper>
          <HeaderSection>
            <HeaderLogo />
            <Link href="/about" style={{ marginLeft: 40 }}>About</Link>
            <Link href="/about">Blog</Link>
            <Link href="/about">Pricing</Link>
          </HeaderSection>
          <HeaderSection>
            {!user
              ? (
                <>
                  <LogInText onClick={() => {
                    setSignInVisible(true)
                  }}
                  >
                    Log in
                  </LogInText>
                  <Button
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
                  onClick={() => {
                    userAPI.logout()
                  }}
                >
                  Sign out
                </Button>
              )}
          </HeaderSection>
        </Wrapper>
      </Container>
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
