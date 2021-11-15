import { useState } from "react";
import { Input, Button, Form } from "antd";
import styled from "styled-components";

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

const page1 = ({ setPage, info, setInfo }) => {
  const [fullName, setFullName] = useState(info.fullName);
  const [username, setUsername] = useState(info.username);
  return (
    <>
      <Title>Welcome! First things first...</Title>
      <Subtitle>You can always change them later</Subtitle>
      <InputContainer>
        <Form
          style={{ width: "100%" }}
          onFinish={() => {
            let tempInfo = { ...info };
            tempInfo.username = username;
            tempInfo.fullName = fullName;
            setInfo(tempInfo);
            setPage(1);
          }}
        >
          <InputLabel>Full Name</InputLabel>
          <Form.Item
            name="fullName"
            validateTrigger="onBlur"
            rules={[
              { required: true, message: "Please input your full name." },
            ]}
            style={{ marginBottom: 0, height: 77 }}
          >
            <Input
              style={{ height: 48 }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Smith"
            />
          </Form.Item>
          <InputLabel>Username</InputLabel>
          <Form.Item
            name="username"
            validateTrigger="onBlur"
            rules={[{ required: true, message: "Please input your username." }]}
            style={{ marginBottom: 18, height: 77 }}
          >
            <Input
              style={{ height: 48 }}
              placeholder="johnsmith123"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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

export default page1;
