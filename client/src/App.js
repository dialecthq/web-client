import React, { useState } from 'react';
import {Modal, Button, Tabs, Input, Tooltip, Divider, Select } from 'antd'
import {AiOutlineEye} from 'react-icons/ai'
import  styled from 'styled-components'
import './App.css';
import "antd/dist/antd.css"


const axios = require('axios');

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const AuthModal = styled(Modal)`
  width: 375px !important;

  @media screen and (max-width: 768px) {
    width: 100% !important;
  } 
`

const TabRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`

const ButtonText = styled.span`
  font-weight: 600;
  letter-spacing: 0.5px;
`

const AuthLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  color: #000 !important;
  opacity: 0.6;
  transition: 0.2s all ease-in-out;

  :hover {
    opacity: 0.9;
    color: #000 !important
  }
`

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  opacity: 0.9;
  vertical-align: middle;
  margin-bottom: 0px;
`

const SmallText = styled.p`
  font-size: 10px;
  opacity: 0.6;
  font-weight: 600;
  vertical-align: middle;
  margin-bottom: 0px;
`

const App = () =>  {
  const [signInVisible, setSignInVisible] = useState(false)
  return (
    <>
      <button onClick={() => {
        setSignInVisible(true)
      }}>sign in</button>
      <button>sign out</button>
      <AuthModal
          visible={signInVisible}
          onCancel={() => {setSignInVisible(false)}}
          title={"Log In"}
          footer={null}

        >
                <TabContent>
                <Input
                  placeholder="Email"
                  style={{marginBottom: 15, height: 40}}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  style={{marginBottom: 15, height: 40}}
                  suffix={
                    <Tooltip title="Extra information">
                      <AiOutlineEye />
                    </Tooltip>
                  }
                />
                <TabRow>
                  <Text>Keep me logged in</Text>
                 <AuthLink>Forgot password?</AuthLink>
                </TabRow>
                <Button type="primary" block style={{marginBottom: 20, height: 40}}>
                  <ButtonText>LOG In</ButtonText>
                </Button>
                  <Text style={{marginBottom: 10}}>No account yet? <AuthLink>Sign up</AuthLink></Text>
                  <Divider style={{marginBottom: 10}}><SmallText>or</SmallText></Divider>
              </TabContent>
        </AuthModal>
      </>


  )
}

export default App;
