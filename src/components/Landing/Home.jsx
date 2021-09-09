/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from 'react'

import Conversation from 'Img/conversation.svg'
import Gift from 'Img/gift.svg'
import Messaging from 'Img/messaging.svg'
import { FaGifts } from 'react-icons/fa'
import strings from 'Utils/data/strings'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Hero from './components/home/Hero'
import HeroImage from './components/home/HeroImage'
import Info from './components/common/Info'
import CallToAction from './components/common/CallToAction'

const App = () => (
  <div style={{ background: '#fff' }}>
    <Header />
    <Hero />
    <HeroImage />
    <Info
      title={strings.oneClick}
      sub1={strings.oneClickDesc}
      image={Conversation}
      imgLeft={false}
      style={{ paddingBottom: 100 }}
    />

    <Info
      title={strings.giveLanguage}
      sub1={strings.giveLanguageDesc}
      image={Gift}
      imgLeft
      colored
    />

    <Info
      title={strings.shortAndConvenient}
      sub1={strings.shortAndConvenientDesc}
      image={Messaging}
    />
    <CallToAction />
    <Footer />
  </div>
)

export default App
