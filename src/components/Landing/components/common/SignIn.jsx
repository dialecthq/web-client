/* eslint-disable max-len */
import React, { useState } from 'react'
import styled from 'styled-components'
import fire from 'Utils/fire'
import axios from 'axios'
import {
  Modal, Button, Input, Tooltip, Divider, Form, message
} from 'antd'
import { AiOutlineEye } from 'react-icons/ai'
import { FaFacebook, FaTimesCircle, FaCheckCircle } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import User from 'Utils/state/userContainer'
import strings from 'Utils/data/strings'
import { signInWithGoogle, login } from 'Utils/apis/UserAPI'

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
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
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
const IconButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #00000070;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const SignInText = styled.p`
  font-weight: 600;
  font-size: 14px;
`
const SignIn = ({ visible, setVisible, setSignUpVisible }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(null)
  const { user } = User.useContainer()
  const history = useHistory()

  const onFinish = (values) => {
    setLoading(true)
    login(values.email, values.password)
      .then(() => {
        setVisible(false)
        setLoading(false)
        history.push('/exchange')
      })
      .catch((e) => {
        message.error({
          content: e.message,
          icon: <FaTimesCircle size={24} color="#e86461" style={{ marginRight: 10 }} />
        })
        setLoading(false)
      })
  }

  const forgotPassword = (inputEmail) => {
    if (!inputEmail) {
      message.error({
        content: strings.pleaseInputEmail,
        icon: <FaTimesCircle size={24} color="#e86461" style={{ marginRight: 10 }} />
      })
    } else {
      fire
        .auth()
        .sendPasswordResetEmail(inputEmail)
        .then(() => {
          message.success({
            content: strings.successfullyUpdatedUser,
            icon: <FaCheckCircle size={24} color="#1ae398" style={{ marginRight: 10 }} />
          })
        })
        .catch((e) => {
          message.error({
            content: e.message,
            icon: <FaTimesCircle size={24} color="#e86461" style={{ marginRight: 10 }} />
          })
        })
    }
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
            onChange={(e) => {
              setEmail(e.target.value)
            }}
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
            <AuthLink
              style={{ opacity: 0.8 }}
              onClick={() => {
                forgotPassword(email)
              }}
            >
              {strings.forgotPassword.capitalize()}
            </AuthLink>
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
            <IconButton
              onClick={() => {
                signInWithGoogle()
              }}
            >
              <FcGoogle height={36} style={{ marginRight: 10 }} />
              <SignInText>Sign in with google</SignInText>
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
