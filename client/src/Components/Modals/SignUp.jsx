import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal, Button, Tabs, Input, Tooltip, Divider, Select, Form, Steps } from 'antd'
import { IoAdd } from 'react-icons/io5'
import { AiOutlineEye } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


import LanguageOptions from '../../Data/LanguageOptions.js'
import CountryOptions from '../../Data/CountryOptions.js'

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const AuthModal = styled(Modal)`
  width: ${p => p.page === 0 ? '400px' : '600px'} !important;
  transition: 0.2s all ease-in-out;


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

const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
`

const AddLanguageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    :hover {
        cursor: pointer;
    }
`
const AddLanguageButton = styled.div`
    padding: 5px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #8465FF;
    margin-right: 10px;
`

const AddLanguageText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #8465ff;
    margin: 0px;
`

const FormRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const SignUp = ({ visible, setVisible }) => {
    const [page, setPage] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [targets, setTargets] = useState([])
    const [knowns, setKnowns] = useState([])
    const [timezone, setTimezone] = useState([])
    const [country, setCountry] = useState([])

    const onFinish = (values) => {
        setName(values.name)
        setEmail(values.email)
        setPassword(values.password)
        setPage(1)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <AuthModal
            visible={visible}
            onCancel={() => { setVisible(false) }}
            title={"Register"}
            footer={null}
            page={page}
        >
            <Steps size="small" current={page} style={{ padding: 20 }}>
                <Steps.Step title="Login" />
                <Steps.Step title="More Info" />
            </Steps>
            {page === 0 && (
                <TabContent>
                    <Form
                        name="login-info"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        style={{ width: '100%' }}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your email.' }]}
                        >
                            <Input
                                placeholder="Name"
                                style={{ height: 40 }}
                            />
                        </Form.Item>
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
                            name="password"
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
                        <Form.Item style={{ marginBottom: 20 }}>
                            <Button
                                type="primary"
                                block
                                htmlType="submit"
                                style={{ height: 40 }}
                                onClick={() => {
                                    setPage(1)
                                }}
                            >
                                <ButtonText>Continue</ButtonText>
                            </Button>
                        </Form.Item>
                        <Text style={{ marginBottom: 10 }}>Already have an account? <AuthLink>Sign in</AuthLink></Text>
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
            )}
            {page === 1 && (
                <TabContent>
                    <Form
                        name="login-info"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        style={{ width: '100%' }}
                    >
                        <Form.Item
                            name="target-language"
                            rules={[{ required: true, message: 'Please input your password.' }]}>
                            <FormColumn>
                                <Label>Target Language</Label>
                                <Select
                                    placeholder="Known Language"
                                    style={{ width: '100%', height: 40 }}
                                >
                                    {LanguageOptions.map((language) => {
                                        return <Select.Option value={language.key}>{language.value}</Select.Option>
                                    })}
                                
                                </Select>
                                <AddLanguageContainer>
                                    <AddLanguageButton>
                                        <IoAdd size={16} color="#8465ff" />
                                    </AddLanguageButton>
                                    <AddLanguageText>Add another language</AddLanguageText>
                                </AddLanguageContainer>

                            </FormColumn>
                        </Form.Item>
                        <Form.Item
                            name="known-language"
                            rules={[{ required: true, message: 'Please input your password.' }]}>
                            <FormColumn>
                                <Label>Known Language</Label>
                                <Select
                                    placeholder="Known Language"
                                    style={{ width: '100%', height: 40 }}
                                >
                                    {LanguageOptions.map((language) => {
                                        return <Select.Option value={language.key}>{language.value}</Select.Option>
                                    })}
                                
                                </Select>
                                <AddLanguageContainer>
                                    <AddLanguageButton>
                                        <IoAdd size={16} color="#8465ff" />
                                    </AddLanguageButton>
                                    <AddLanguageText>Add another language</AddLanguageText>
                                </AddLanguageContainer>
                            </FormColumn>
                        </Form.Item>
                        <Form.Item
                            name="country"
                            rules={[{ required: true, message: 'Please input your country / region.' }]}>
                            <FormColumn>
                                <Label>Country / Region</Label>
                                <Select
                                    placeholder="Country / Region"
                                    style={{ width: '100%', height: 40 }}
                                >
                                    {CountryOptions.map((country) => {
                                        return <Select.Option value={country.key}>{country.value}</Select.Option>
                                    })}
                                </Select>
                            </FormColumn>
                        </Form.Item>
                        <Form.Item
                            name="timezone"
                            rules={[{ required: true, message: 'Please input your timezone.' }]}>
                            <FormColumn>
                                <Label>Timezone</Label>
                                <Select
                                    placeholder="Timezone"
                                    style={{ width: '100%', height: 40 }}
                                >
                                    <Select.Option value="English">English</Select.Option>
                                </Select>
                            </FormColumn>
                        </Form.Item>
                        <FormRow>
                            <Form.Item style={{ marginBottom: 20, width: '100%', paddingRight: 5}}>
                                <Button
                                    block
                                    style={{ height: 40}}
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
                                    onClick={() => {
                                        setPage(1)
                                    }}
                                >
                                    <ButtonText>Continue</ButtonText>
                                </Button>
                            </Form.Item>
                        </FormRow>
                    </Form>
                </TabContent>
            )
            }
        </AuthModal >
    )
}
export default SignUp