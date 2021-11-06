/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import {
  Modal,
  Button,
  Input,
  Tooltip,
  Divider,
  Select,
  Form,
  Steps,
} from "antd";
import {
  IoAt,
  IoLockClosedOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

import axios from "axios";

// Data objects
import countryOptions from "../../../utils/data/CountryOptions";
import timezoneOptions from "../../../utils/data/TimezoneOptions";
import rooms from "../../../utils/data/rooms";

// Containers
import User from "../../../utils/state/userContainer";
import strings from "../../../utils/data/strings";
import firebase from "firebase";
import fire from "../../../utils/fire";

import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthModal = styled(Modal)`
  width: 425px !important;

  @media screen and (max-width: 768px) {
    width: 100% !important;
  }
`;

const ButtonText = styled.span`
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const AuthLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  opacity: 0.9;
  vertical-align: middle;
  margin-bottom: 0px;
  text-align: center;
`;

const SmallText = styled.p`
  font-size: 10px;
  opacity: 0.6;
  font-weight: 600;
  vertical-align: middle;
  margin-bottom: 0px;
`;

const OauthContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TermsContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Terms = styled.p`
  font-size: 12px;
  font-weight: 400;
  width: 100%;
`;

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
`;

const SignInText = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const FluencyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: ${(p) => (p.active ? "1px solid #9c77ff" : "1px solid #d4d4d4")};
  color: ${(p) => (p.active ? "#9C77FF" : "#898989")};
  transition: 0.2s all ease-in-out;
  border-radius: 20px;
  :hover {
    cursor: pointer;
    border: 1px solid #9c77ff;
    color: #9c77ff;
  }
`;

const FluencyButtonText = styled.p`
  margin-bottom: 0px;
  font-size: 12px;
  font-weight: 600;
`;

const SignUp = ({ visible, setVisible, setSignInVisible }) => {
  const [page, setPage] = useState(0);
  const [tempUser, setTempUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState(1);

  const { user, setUser } = User.useContainer();
  const router = useRouter();

  const onFinishPage1 = (values) => {
    setTempUser({
      name: values.name,
      email: values.email,
      password: values.password,
      username: values.username,
    });
    setPage(1);
  };

  const onFinishPage2 = (values) => {
    const newTempUser = {
      ...tempUser,
      languageKeys: [
        rooms.filter((e) => e.value === values.target)[0].key,
        rooms.filter((e) => e.value === values.native)[0].key,
      ],
      languageLevels: [level, 7],
      countryFrom: countryOptions.filter((e) => e.value === values.country)[0]
        .key,
    };
    setLoading(true);
    axios
      .post("/api/user/register", {
        ...newTempUser,
      })
      .then((result) => {
        setVisible(false);
        setPage(0);
        setLoading(false);
        setUser(result.data);
        setTempUser(null);
        console.log("1");
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthModal
      visible={visible}
      onCancel={() => {
        setVisible(false);
      }}
      title={strings.register.capitalize()}
      footer={null}
    >
      <Steps size="small" current={page} style={{ marginBottom: 25 }}>
        <Steps.Step title={strings.loginInfo} />
        <Steps.Step title={strings.moreInfo} />
      </Steps>
      {page === 0 && (
        <TabContent>
          <Form
            name="login-info"
            onFinish={onFinishPage1}
            onFinishFailed={onFinishFailed}
            style={{ width: "100%" }}
          >
            <Form.Item
              name="name"
              validateTrigger="onBlur"
              rules={[{ required: true, message: strings.pleaseInputName }]}
              style={{ marginBottom: 25 }}
            >
              <Input
                placeholder={strings.name.capitalize()}
                style={{ height: 40 }}
                prefix={<IoPersonOutline />}
              />
            </Form.Item>
            <Form.Item
              name="email"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: strings.pleaseInputEmail },
                { type: "email", message: strings.pleaseInputValidEmail },
                // {
                //   validator: (_, value) => validate(_, value, "email"),
                //   message: strings.emailAlreadyInUse,
                // },
              ]}
              style={{ marginBottom: 25 }}
            >
              <Input
                placeholder={strings.email.capitalize()}
                style={{ height: 40 }}
                prefix={<IoMailOutline />}
              />
            </Form.Item>
            <Form.Item
              name="username"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: strings.pleaseInputUsername },
                {
                  // validator: (_, value) => validate(_, value, "username"),
                  message: strings.usernameAlreadyInUse,
                },
              ]}
              style={{ marginBottom: 25 }}
            >
              <Input
                placeholder={strings.username.capitalize()}
                style={{ height: 40 }}
                prefix={<IoAt />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateTrigger="onBlur"
              rules={[{ required: true, message: strings.pleaseInputPass }]}
              style={{ marginBottom: 25 }}
            >
              <Input
                placeholder={strings.password.capitalize()}
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
                <ButtonText>{strings.continue.capitalize()}</ButtonText>
              </Button>
            </Form.Item>
            <Text style={{ marginBottom: 10 }}>
              {strings.alreadyHaveAccount}
              <AuthLink
                style={{ marginLeft: 5 }}
                onClick={() => {
                  setVisible(false);
                  setSignInVisible(true);
                }}
              >
                {strings.signIn}
              </AuthLink>
            </Text>
            <Divider style={{ marginBottom: 10 }}>
              <SmallText>{strings.or}</SmallText>
            </Divider>
            <OauthContainer>
              <IconButton
                onClick={async () => {
                  const provider = new firebase.auth.GoogleAuthProvider();
                  fire
                    .auth()
                    .signInWithPopup(provider)
                    .then(async (result) => {
                      const { additionalUserInfo, user } = result;
                      const username = uniqueNamesGenerator({
                        dictionaries: [adjectives, colors, animals],
                        separator: "-",
                        length: 3,
                      });
                      const inferredNativeLanguage = rooms.filter((e) =>
                        strings.getLanguage().includes(e.code)
                      )[0];
                      const languageKeys = [inferredNativeLanguage.key];
                      const languageLevels = [7];
                      if (additionalUserInfo.isNewUser) {
                        const newUser = await axios.post(
                          "/api/user/sign_in_with_google",
                          {
                            id: user.uid,
                            name: additionalUserInfo.profile.name,
                            username: username,
                            email: user.email,
                            tokens: 10,
                            languageLevels: languageLevels,
                            languageKeys: languageKeys,
                          }
                        );
                        setUser(newUser.data);
                      } else {
                        const result = await axios.get("/api/user/get_user", {
                          params: {
                            id: user.uid,
                          },
                        });
                        setUser(result.data);
                      }
                      router.push("/home");
                    })
                    .catch((error) => {
                      console.log(error.message);
                    });
                }}
              >
                <FcGoogle height={36} style={{ marginRight: 10 }} />
                <SignInText>{strings.signInWithGoogle.capitalize()}</SignInText>
              </IconButton>
            </OauthContainer>
          </Form>
          <TermsContainer>
            <Terms>{strings.byLoggingIn}</Terms>
          </TermsContainer>
        </TabContent>
      )}
      {page === 1 && (
        <TabContent>
          <Form
            name="login-info"
            onFinish={onFinishPage2}
            onFinishFailed={onFinishFailed}
            style={{ width: "100%" }}
          >
            <Label>Target Language</Label>

            <Form.Item
              name="target"
              rules={[
                { required: true, message: strings.pleaseInputTargetLanguage },
              ]}
            >
              <Select
                placeholder={strings.targetLanguage.capitalize()}
                showSearch
                style={{ width: "100%" }}
              >
                {rooms.map((language) => (
                  <Select.Option value={language.value}>
                    {strings[language.value.toLowerCase()].capitalize()}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <FormRow style={{ justifyContent: "space-between" }}>
              <FluencyButton
                active={level === 1}
                onClick={() => {
                  setLevel(1);
                }}
              >
                <FluencyButtonText>
                  {strings.beginner.capitalize()}
                </FluencyButtonText>
              </FluencyButton>
              <FluencyButton
                active={level === 2}
                onClick={() => {
                  setLevel(2);
                }}
              >
                <FluencyButtonText>
                  {strings.elementary.capitalize()}
                </FluencyButtonText>
              </FluencyButton>
              <FluencyButton
                active={level === 3}
                onClick={() => {
                  setLevel(3);
                }}
              >
                <FluencyButtonText>
                  {strings.intermediate.capitalize()}
                </FluencyButtonText>
              </FluencyButton>
              <FluencyButton
                active={level === 5}
                onClick={() => {
                  setLevel(5);
                }}
              >
                <FluencyButtonText>
                  {strings.advanced.capitalize()}
                </FluencyButtonText>
              </FluencyButton>
            </FormRow>

            <Label>{strings.nativeLanguage}</Label>
            <Form.Item
              name="native"
              rules={[
                { required: true, message: strings.pleaseInputNativeLanguage },
              ]}
            >
              <Select
                placeholder={strings.nativeLanguage.capitalize()}
                showSearch
                style={{ width: "100%" }}
              >
                {rooms.map((language) => (
                  <Select.Option value={language.value}>
                    {strings[language.value.toLowerCase()].capitalize()}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Label>{strings.countryRegion}</Label>
            <Form.Item
              name="country"
              rules={[
                { required: true, message: strings.pleaseInputCountryRegion },
              ]}
            >
              <Select
                placeholder={strings.countryRegion}
                showSearch
                style={{ width: "100%" }}
              >
                {countryOptions.map((country) => (
                  <Select.Option value={country.value}>
                    {country.value}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <FormRow style={{ marginTop: 50 }}>
              <Form.Item
                style={{ marginBottom: 20, width: "100%", paddingRight: 5 }}
              >
                <Button
                  block
                  style={{ height: 40 }}
                  onClick={() => {
                    setPage(0);
                  }}
                >
                  <ButtonText>{strings.back.capitalize()}</ButtonText>
                </Button>
              </Form.Item>
              <Form.Item
                style={{ marginBottom: 20, width: "100%", paddingLeft: 5 }}
              >
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  style={{ height: 40 }}
                  loading={loading}
                >
                  <ButtonText>{strings.continue.capitalize()}</ButtonText>
                </Button>
              </Form.Item>
            </FormRow>
          </Form>
          <TermsContainer>
            <Terms>{strings.byLoggingIn}</Terms>
          </TermsContainer>
        </TabContent>
      )}
    </AuthModal>
  );
};
export default SignUp;
