import { useState } from "react";
import { Steps, Button } from "antd";
import styled from "styled-components";
import HeaderLogo from "../components/common/HeaderLogo";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

//pages
import Page1 from "../components/landing/register/page1";
import Page2 from "../components/landing/register/page2";
import Page3 from "../components/landing/register/page3";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: 650px;
`;

const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BackButton = styled(Button)`
  position: absolute;
  top: 16px;
  left: 16px;
`;

const Register = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [info, setInfo] = useState({
    fullName: null,
    username: null,
    email: null,
    password: null,
    targetLanguage: null,
    targetLanguageLevel: null,
  });
  return (
    <Container>
      <Wrapper>
        <BackButton
          onClick={() => {
            router.push("/");
          }}
        >
          Back
        </BackButton>
        <HeaderLogo />
        <Steps style={{ marginTop: 32, marginBottom: 48 }} current={page}>
          <Steps.Step title="" />
          <Steps.Step title="" />
          <Steps.Step title="" />
          <Steps.Step title="" />
        </Steps>
        <AnimatePresence>
          {page === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Page1 setPage={setPage} info={info} setInfo={setInfo} />
            </motion.div>
          )}
          {page === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Page2 setPage={setPage} info={info} setInfo={setInfo} />
            </motion.div>
          )}
          {page === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Page3 setPage={setPage} info={info} setInfo={setInfo} />
            </motion.div>
          )}
          {page === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <p>2</p>
            </motion.div>
          )}
        </AnimatePresence>
      </Wrapper>
    </Container>
  );
};

export default Register;
