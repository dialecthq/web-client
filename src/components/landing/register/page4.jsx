import { useState } from "react";
import { Input, Button, Form, Select } from "antd";
import styled from "styled-components";
import axios from "axios";

//data
import * as languages from "../../../utils/data/languages.json";
import languageArray from "../../../utils/data/LanguageOptions";
import levels from "../../../utils/data/levelOptions";

const Title = styled.p`
  font-size: 2.2em;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1c1c1c;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  color: #1c1c1c40;
  margin-bottom: 48px;
`;

const ButtonTitle = styled.p`
  color: #fff;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const InputLabel = styled.p`
  font-weight: 500;
  font-size: 1;
  color: #1c1c1c;
  margin-bottom: 8px;
`;

const page4 = ({ setPage, info, setInfo }) => {
  const [nativeLanguage, setnativeLanguage] = useState(info.nativeLanguage);
  const [nativeLanguageLevel, setnativeLanguageLevel] = useState(
    info.nativeLanguageLevel
  );
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Title>What is your native language?</Title>
      <Subtitle>You can always add another later</Subtitle>
      <InputContainer>
        <Form
          style={{ width: "100%" }}
          onFinish={() => {
            setLoading(true);
            let tempInfo = { ...info };
            tempInfo.nativeLanguageLevel = nativeLanguageLevel;
            tempInfo.nativeLanguage = nativeLanguage;
            console.log(tempInfo);
            axios
              .post("http://localhost:3000/api/auth/register", {
                name: tempInfo.fullName,
                email: tempInfo.email,
                languageKeys: [
                  parseInt(tempInfo.nativeLanguage, 10),
                  parseInt(tempInfo.targetLanguage, 10),
                ],
                languageLevels: [
                  parseInt(tempInfo.nativeLanguageLevel, 10),
                  parseInt(tempInfo.targetLanguageLevel, 10),
                ],
                username: tempInfo.username,
                password: tempInfo.password,
              })
              .then(() => {
                setLoading(false);
              })
              .catch(() => {
                setLoading(false);
              });
          }}
        >
          <InputLabel>Native Language</InputLabel>
          <Form.Item
            name="nativeLanguage"
            validateTrigger="onBlur"
            type="nativeLanguage"
            rules={[
              { required: true, message: "Please input your native language." },
            ]}
            style={{ marginBottom: 0, height: 77 }}
          >
            <Select
              size="large"
              value={nativeLanguage}
              onChange={(e) => setnativeLanguage(e)}
              placeholder="Select your language"
            >
              {languageArray.map((language) => {
                return (
                  <Select.Option key={language.key}>
                    {languages[language.key]}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block={true}
              htmlType="submit"
              style={{ height: 48 }}
              loading={loading}
            >
              <ButtonTitle>Register</ButtonTitle>
            </Button>
          </Form.Item>
        </Form>
      </InputContainer>
    </>
  );
};

export default page4;
