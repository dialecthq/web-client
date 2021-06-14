import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal, Button, Input, Tooltip, Divider, Select, Form, Steps } from 'antd'
import { IoAt, IoLockClosedOutline, IoMailOutline, IoPersonOutline } from 'react-icons/io5'
import { AiOutlineEye } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// Data objects
import languageOptions from '../../Data/languageOptions.js'
import countryOptions from '../../Data/countryOptions.js'
import timezoneOptions from '../../Data/timezoneOptions'

// Validators
import emailValidator from '../../Validators/emailValidator'
import usernameValidator from '../../Validators/usernameValidator'

// Containers 
import User from '../../Containers/userContainer'

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
    width: 100%;
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

const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
`

const FormRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`

const FluencyButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: ${p => p.active ? '1px solid #9c77ff' : '1px solid #d4d4d4'};
    color: ${p => p.active ? '#9C77FF' : '#898989'};
    transition: 0.2s all ease-in-out;
    border-radius: 20px;
    :hover {
        cursor: pointer;
        border: 1px solid #9c77ff;
        color: #9c77ff;
    }
`

const FluencyButtonText = styled.p`
    margin-bottom: 0px;
    font-size: 12px;
    font-weight: 600;
`

const SignUp = ({ visible, setVisible, setSignInVisible }) => {
    const [page, setPage] = useState(0)
    const [tempUser, setTempUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [level, setLevel] = useState(1)

    let user = User.useContainer()
    const history = useHistory()

    const onFinishPage1 = (values) => {
        setTempUser({
            name: values.name,
            email: values.email,
            password: values.password,
            username: values.username
        })
        setPage(1)
    };

    const onFinishPage2 = (values) => {
        let newTempUser = {
            ...tempUser,
            target: [{key: languageOptions.filter((e) => e.value === values.target)[0].key, level: level}],
            native: [{key: languageOptions.filter((e) => e.value === values.native)[0].key, level: 7}],
            country: countryOptions.filter((e) => e.value === values.country)[0].key,
            timezone: timezoneOptions.filter((e) => e.value === values.timezone)[0].key,
        }
        setLoading(true)
        axios.post('http://localhost:9000/user/register', newTempUser)
            .then((data) => {
                setLoading(false)
                if (data.data.user) {
                    user.setUser(data.data.user)
                    setVisible(false)
                    setPage(0)
                    setTempUser(null)
                    history.push('/dashboard')
                }
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <AuthModal
            visible={visible}
            onCancel={() => { setVisible(false) }}
            title={"Register"}
            footer={null}
        >
            <Steps size="small" current={page} style={{ marginBottom: 25 }}>
                <Steps.Step title="Login Info" />
                <Steps.Step title="More Info" />
            </Steps>
            {page === 0 && (
                <TabContent>
                    <Form
                        name="login-info"
                        onFinish={onFinishPage1}
                        onFinishFailed={onFinishFailed}
                        style={{ width: '100%' }}
                    >
                        <Form.Item
                            name="name"
                            validateTrigger="onBlur"
                            rules={[{ required: true, message: 'Please input your name.' }]}
                            style={{ marginBottom: 25 }}
                        >
                            <Input
                                placeholder="Name"
                                style={{ height: 40 }}
                                prefix={<IoPersonOutline />}
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            validateTrigger="onBlur"
                            rules={[{ required: true, message: 'Please input your email.' }, { type: 'email', message: 'Please input a valid email.' }, { validator: emailValidator, message: 'email is already in use.' }]}
                            style={{ marginBottom: 25 }}
                        >
                            <Input
                                placeholder="Email"
                                style={{ height: 40 }}
                                prefix={<IoMailOutline />}
                            />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            validateTrigger="onBlur"
                            rules={[{ required: true, message: 'Please input your username.' }, { validator: usernameValidator, message: 'username is already in use.' }]}
                            style={{ marginBottom: 25 }}
                        >
                            <Input
                                placeholder="Username"
                                style={{ height: 40 }}
                                prefix={<IoAt />}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            validateTrigger="onBlur"
                            rules={[{ required: true, message: 'Please input your password.' }]}
                            style={{ marginBottom: 25 }}
                        >
                            <Input
                                placeholder="Password"
                                type="password"
                                style={{ height: 40 }}
                                prefix={<IoLockClosedOutline />}
                                suffix={
                                    <Tooltip title="Extra information">
                                        <AiOutlineEye />
                                    </Tooltip>
                                }
                            />
                        </Form.Item>
                        <Form.Item style={{ marginBottom: 20 }}>
                            <Button
                                type="primary"
                                block
                                htmlType="submit"
                                style={{ height: 40 }}
                            >
                                <ButtonText>Continue</ButtonText>
                            </Button>
                        </Form.Item>
                        <Text style={{ marginBottom: 10 }}>Already have an account? <AuthLink onClick={() => {
                            setVisible(false)
                            setSignInVisible(true)
                        }}>Sign in</AuthLink></Text>
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
                            <Terms>By logging in or creating an account, you agree to Dialect's Terms of Service and Privacy Policy.</Terms>
                        </TermsContainer>
                    </Form>
                </TabContent>
            )}
            {page === 1 && (
                <TabContent>
                    <Form
                        name="login-info"
                        onFinish={onFinishPage2}
                        onFinishFailed={onFinishFailed}
                        style={{ width: '100%' }}
                    >

                        <Label>Target Language</Label>

                        <Form.Item
                            name="target"
                            rules={[{ required: true, message: 'Please input your target language.' }]}
                        >
                            <Select
                                placeholder="Target Language"
                                showSearch
                                style={{ width: '100%' }}
                            >
                                {languageOptions.map((language) => {
                                    return <Select.Option value={language.value}>{language.value}</Select.Option>
                                })}

                            </Select>
                        </Form.Item>
                        <FormRow style={{justifyContent: 'space-between'}}>
                            <FluencyButton active={level === 1} onClick={() => {
                                setLevel(1)
                            }}>
                                <FluencyButtonText>
                                    Beginner
                                </FluencyButtonText>
                            </FluencyButton>
                            <FluencyButton active={level === 2} onClick={() => {
                                setLevel(2)
                            }}>
                                <FluencyButtonText>
                                    Elementary
                                </FluencyButtonText>
                            </FluencyButton>
                            <FluencyButton active={level === 3} onClick={() => {
                                setLevel(3)
                            }}>
                                <FluencyButtonText>
                                    Intermediate
                                </FluencyButtonText>
                            </FluencyButton>
                            <FluencyButton active={level === 5} onClick={() => {
                                setLevel(5)
                            }}>
                                <FluencyButtonText>
                                    Advanced
                                </FluencyButtonText>
                            </FluencyButton>

                        </FormRow>

                        <Label>Native Language</Label>
                        <Form.Item
                            name="native"
                            rules={[{ required: true, message: 'Please input your native language.' }]}>
                            <Select
                                placeholder="Native Language"
                                showSearch
                                style={{ width: '100%' }}
                            >
                                {languageOptions.map((language) => {
                                    return <Select.Option value={language.value}>{language.value}</Select.Option>
                                })}

                            </Select>
                        </Form.Item>

                        <Label>Country / Region</Label>
                        <Form.Item
                            name="country"
                            rules={[{ required: true, message: 'Please input your country / region.' }]}>
                            <Select
                                placeholder="Country / Region"
                                showSearch
                                style={{ width: '100%' }}
                            >
                                {countryOptions.map((country) => {
                                    return <Select.Option value={country.value}>{country.value}</Select.Option>
                                })}
                            </Select>
                        </Form.Item>
                        <Label>Timezone</Label>
                        <Form.Item
                            name="timezone"
                            rules={[{ required: true, message: 'Please input your timezone.' }]}>
                            <Select
                                placeholder="Timezone"
                                showSearch
                                style={{ width: '100%' }}
                            >
                                {timezoneOptions.map((timezone) => {
                                    return <Select.Option value={timezone.value}>{`${timezone.value} - ${timezone.text}`}</Select.Option>
                                })}
                            </Select>
                        </Form.Item>
                        <FormRow style={{marginTop: 50}}>
                            <Form.Item style={{ marginBottom: 20, width: '100%', paddingRight: 5 }}>
                                <Button
                                    block
                                    style={{ height: 40 }}
                                    onClick={() => {
                                        setPage(0)
                                    }}
                                >
                                    <ButtonText>Back</ButtonText>
                                </Button>
                            </Form.Item>
                            <Form.Item style={{ marginBottom: 20, width: '100%', paddingLeft: 5 }}>
                                <Button
                                    type="primary"
                                    block
                                    htmlType="submit"
                                    style={{ height: 40 }}
                                    loading={loading}
                                >
                                    <ButtonText>Continue</ButtonText>
                                </Button>
                            </Form.Item>
                        </FormRow>
                        <TermsContainer>
                            <Terms>By logging in or creating an account, you agree to Dialect's Terms of Service and Privacy Policy.</Terms>
                        </TermsContainer>
                    </Form>
                </TabContent>
            )
            }
        </AuthModal >
    )
}
export default SignUp