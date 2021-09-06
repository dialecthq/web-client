/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {
  Modal, Button, Input, Tooltip, Divider, Form
} from 'antd'
import { AiOutlineEye } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import User from '@utils/state/userContainer'
import strings from '@utils/data/strings'

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AuthModal = styled(Modal)`
  width: 425px !important;

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
`

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  opacity: 0.9;
  vertical-align: middle;
  margin-bottom: 0px;
  text-align: center;
`

const SmallText = styled.p`
  font-size: 10px;
  opacity: 0.6;
  font-weight: 600;
  vertical-align: middle;
  margin-bottom: 0px;
`

const OauthContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TermsContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Terms = styled.p`
  font-size: 12px;
  font-weight: 400;
  width: 70%;
`
const IconButton = styled.a`
  margin: 10px;
  svg {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    border: 0.5px solid #d4d4d4;
    transition: 0.2s all ease-in-out;
    :hover {
      border: 0.5px solid black;
    }
  }
`
const SignIn = ({ visible, setVisible, setSignUpVisible }) => {
  const [loading, setLoading] = useState(false)
  const user = User.useContainer()
  const history = useHistory()

  const onFinish = (values) => {
    setLoading(true)
    user.userAPI
      .login(values.email, values.password)
      .then(() => {
        setVisible(false)
        setLoading(false)
        history.push('/exchange')
      })
      .catch(() => {
        setLoading(false)
      })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <AuthModal
      visible={visible}
      onCancel={() => {
        setVisible(false)
      }}
      title={strings.logIn.capitalize()}
      footer={null}
    >
      <TabContent>
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: '100%' }}
        >
          <Form.Item
            name="email"
            validateTrigger="onBlur"
            rules={[
              { required: true, message: strings.pleaseInputEmail.capitalize() },
              { type: 'email', message: strings.pleaseInputValidEmail.capitalize() }
            ]}
          >
            <Input
              placeholder={strings.email.capitalize()}
              style={{ height: 40 }}
              prefix={<IoMailOutline />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            validateTrigger="onBlur"
            rules={[{ required: true, message: strings.pleaseInputValidEmail.capitalize() }]}
          >
            <Input
              placeholder={strings.password.capitalize()}
              type="password"
              style={{ height: 40 }}
              prefix={<IoLockClosedOutline />}
              suffix={(
                <Tooltip title="Extra information">
                  <AiOutlineEye />
                </Tooltip>
              )}
            />
          </Form.Item>
          <TabRow>
            <Text />
            <AuthLink style={{ opacity: 0.8 }}>{strings.forgotPassword.capitalize()}</AuthLink>
          </TabRow>
          <Form.Item style={{ marginBottom: 20 }}>
            <Button type="primary" block htmlType="submit" loading={loading} style={{ height: 40 }}>
              <ButtonText>{strings.logIn}</ButtonText>
            </Button>
          </Form.Item>
          <Text style={{ marginBottom: 10 }}>
            {strings.noAccountYet.capitalize()}
            <AuthLink
              style={{ marginLeft: 5 }}
              onClick={() => {
                setVisible(false)
                setSignUpVisible(true)
              }}
            >
              {strings.signUp.capitalize()}
            </AuthLink>
          </Text>
          <Divider style={{ marginBottom: 10 }}>
            <SmallText>or</SmallText>
          </Divider>
          <OauthContainer>
            <IconButton>
              <FaFacebook height={24} />
            </IconButton>
            <IconButton>
              <FcGoogle height={24} />
            </IconButton>
          </OauthContainer>
          <TermsContainer>
            <Terms>{strings.byLoggingIn.capitalize()}</Terms>
          </TermsContainer>
        </Form>
      </TabContent>
    </AuthModal>
  )
}
export default SignIn
