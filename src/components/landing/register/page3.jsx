import { useState } from "react";
import { Input, Button, Form, Select } from "antd";
import styled from "styled-components";

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

const page3 = ({ setPage, info, setInfo }) => {
  const [targetLanguage, setTargetLanguage] = useState(info.targetLanguage);
  const [targetLanguageLevel, setTargetLanguageLevel] = useState(
    info.targetLanguageLevel
  );
  return (
    <>
      <Title>What is your target language?</Title>
      <Subtitle>What language do you want to learn</Subtitle>
      <InputContainer>
        <Form
          style={{ width: "100%" }}
          onFinish={() => {
            let tempInfo = { ...info };
            tempInfo.targetLanguageLevel = targetLanguageLevel;
            tempInfo.targetLanguage = targetLanguage;
            setInfo(tempInfo);
            setPage(3);
          }}
        >
          <InputLabel>Target Language</InputLabel>
          <Form.Item
            name="targetLanguage"
            validateTrigger="onBlur"
            type="targetLanguage"
            rules={[
              { required: true, message: "Please input your target language." },
            ]}
            style={{ marginBottom: 0, height: 77 }}
          >
            <Select
              size="large"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e)}
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
          <InputLabel>Level</InputLabel>
          <Form.Item
            name="targetLanguageLevel"
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: "Please input your target language level.",
              },
            ]}
            style={{ marginBottom: 18, height: 77 }}
          >
            <Select
              size="large"
              placeholder="Select your level"
              value={targetLanguageLevel}
              onChange={(e) => setTargetLanguageLevel(e)}
            >
              {levels.map((level) => {
                return (
                  <Select.Option key={level.key}>{level.value}</Select.Option>
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
            >
              <ButtonTitle>Continue</ButtonTitle>
            </Button>
          </Form.Item>
        </Form>
      </InputContainer>
    </>
  );
};

export default page3;
