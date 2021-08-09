import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    margin-top: 24px;
    background-color: #f8fafc;
`
const Wrapper = styled.div`
    width: 90%;
    padding: 24px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

const Title = styled.p`
    font-size: 2.8em;
    font-weight: 700;
    color: #1c1c1c;

    @media screen and (max-width: 768px) {
        font-size: 1.9em;
        text-align: center;
    }
`

const Subtitle = styled.div`
    margin-top: 5px;
    font-size: 1.7em;
    font-weight: 500;
    color: #777777;
    text-align: center;
    max-width: 700px;

    @media screen and (max-width: 768px) {
        font-size: 1.3em;
        
    }
`

const Emphasized = styled.span`
    color: #45FFE9;
`

const CallToAction = () => {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Learn a new language the right way</Title>
          <Subtitle>
            We&apos;ve created a platform focused on real conversations with native speakers. Get started today and get 10 tokens free when you sign up.
          </Subtitle>
          <Button
            type="primary"
            style={{ marginTop: 30, height: 50, width: 120 }}
            onClick={() => {
              setSignUpVisible(true)
            }}
          >
            Get Started
          </Button>
        </Wrapper>
      </Container>
      <SignIn
        visible={signInVisible}
        setVisible={setSignInVisible}
        setSignUpVisible={setSignUpVisible}
      />
      <SignUp
        visible={signUpVisible}
        setVisible={setSignUpVisible}
        setSignInVisible={setSignInVisible}
      />
    </>
  )
}

export default CallToAction
