import React from 'react'
import styled from 'styled-components'
import { Modal, Button, Tabs, Input, Tooltip, Divider, Select, Form } from 'antd'
import { AiOutlineEye } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

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
const SignIn = ({ visible, setVisible }) => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <AuthModal
            visible={visible}
            onCancel={() => { setVisible(false) }}
            title={"Log In"}
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
                        rules={[{ required: true, message: 'Please input your email.' }, { type: 'email', message: 'Please input a valid email.' }]}
                    >
                        <Input
                            placeholder="Email"
                            style={{ height: 40 }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your password.' }]}
                    >
                        <Input
                            placeholder="Password"
                            type="password"
                            style={{ height: 40 }}
                            suffix={
                                <Tooltip title="Extra information">
                                    <AiOutlineEye />
                                </Tooltip>
                            }
                        />
                    </Form.Item>
                    <TabRow>
                        <Text>Keep me logged in</Text>
                        <AuthLink>Forgot password?</AuthLink>
                    </TabRow>
                    <Form.Item style={{ marginBottom: 20 }}>
                        <Button
                            type="primary"
                            block
                            htmlType="submit"
                            style={{ height: 40 }}
                        >
                            <ButtonText>LOG IN</ButtonText>
                        </Button>
                    </Form.Item>
                    <Text style={{ marginBottom: 10 }}>No account yet? <AuthLink>Sign up</AuthLink></Text>
                    <Divider style={{ marginBottom: 10 }}><SmallText>or</SmallText></Divider>
                    <OauthContainer>
                        <IconButton>
                            <FaFacebook height={24} />
                        </IconButton>
                        <IconButton>
                            <FcGoogle height={24} />
                        </IconButton>
                    </OauthContainer>
                    <TermsContainer>
                        <Terms>By logging in or creating an account, you agree to langi's Terms of Service and Privacy Policy.</Terms>
                    </TermsContainer>
                </Form>
            </TabContent>
        </AuthModal>
    )
}
export default SignIn