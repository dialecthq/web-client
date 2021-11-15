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

const page2 = ({ setPage, info, setInfo }) => {
  const [email, setEmail] = useState(info.email);
  const [password, setPassword] = useState(info.password);
  return (
    <>
      <Title>How do you want to log in?</Title>
      <Subtitle>You can always change them later</Subtitle>
      <InputContainer>
        <Form
          style={{ width: "100%" }}
          onFinish={() => {
            let tempInfo = { ...info };
            tempInfo.username = password;
            tempInfo.email = email;
            setInfo(tempInfo);
            setPage(2);
          }}
        >
          <InputLabel>Email</InputLabel>
          <Form.Item
            name="email"
            validateTrigger="onBlur"
            type="email"
            rules={[{ required: true, message: "Please input your email." }]}
            style={{ marginBottom: 0, height: 77 }}
          >
            <Input
              style={{ height: 48 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@gmail.com"
              type="email"
            />
          </Form.Item>
          <InputLabel>Password</InputLabel>
          <Form.Item
            name="password"
            validateTrigger="onBlur"
            rules={[{ required: true, message: "Please input your password." }]}
            style={{ marginBottom: 18, height: 77 }}
            type="password"
          >
            <Input
              style={{ height: 48 }}
              placeholder="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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

export default page2;
