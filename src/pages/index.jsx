/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { FaGifts } from "react-icons/fa";
import Gift from "../../public/gift.svg";
import Messaging from "../../public/messaging.svg";
import strings from "../utils/data/strings";
import Footer from "../components/landing/common/Footer";
import Header from "../components/landing/common/Header";
import Hero from "../components/landing/home/Hero";
import HeroImage from "../components/landing/home/HeroImage";
import Info from "../components/landing/common/Info";
import CallToAction from "../components/landing/common/CallToAction";
import Seo from "../components/seo/Seo";
import LanguageContainer from "../utils/state/languageContainer";

const Background = styled.div`
  background-size: cover;
  background-attachment: local;
`;

const App = () => {
  return (
    <div style={{ background: "#fff" }}>
      <Seo
        title={`Dialect - Learn a new language today`}
        description="Give the gift of language."
      />
      <Background>
        <Header />
        <Hero />
        <HeroImage />
      </Background>
      <Info
        title={strings.oneClick}
        sub1={strings.oneClickDesc}
        image="/conversation.svg"
        imgLeft={false}
        style={{ paddingBottom: 100 }}
      />

      <Info
        title={strings.giveLanguage}
        sub1={strings.giveLanguageDesc}
        image="/gift.svg"
        imgLeft
        colored
      />

      <Info
        title={strings.shortAndConvenient}
        sub1={strings.shortAndConvenientDesc}
        image="/messaging.svg"
      />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
