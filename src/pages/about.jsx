/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import Footer from "../components/landing/common/Footer";
import AboutHero from "../components/landing/about/AboutHero";
import Header from "../components/landing/common/Header";
import CallToAction from "../components/landing/common/CallToAction";
import Team from "../components/landing/about/Team";
import Seo from "../components/seo/Seo";
import LanguageContainer from "../utils/state/languageContainer";
import strings from "../utils/data/strings";

const Background = styled.div`
  background-size: cover;
  background-attachment: local;
`;

const App = () => {
  return (
    <div style={{ background: "#fff" }}>
      <Seo
        title={`About - Learn a new language today`}
        description="Give the gift of language."
      />
      <Background>
        <Header />
        <AboutHero />
        <Team />
      </Background>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
