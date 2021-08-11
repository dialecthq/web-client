/* eslint-disable max-len */
import React, { useState } from 'react'

import Footer from '@components/Exchange/components/Footer'
import Conversation from '@img/conversation.svg'
import Gift from '@img/gift.svg'
import Messaging from '@img/messaging.svg'
import { FaGifts } from 'react-icons/fa'
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
      title="One click, instant conversation"
      sub1="Just join any language room, and be "
      emph="instantly connected"
      sub2="to native speakers"
      image={Conversation}
      imgLeft={false}
      style={{ paddingBottom: 100 }}
    />

    <Info
      title="Give language, get language"
      sub1="Join your native language's room to "
      emph="receive tokens"
      sub2=" to use on your target language's room"
      image={Gift}
      imgLeft
      colored
    />

    <Info
      title="Short and convenient conversations"
      sub1="When you join a room, you have "
      emph="three minutes"
      sub2=" to talk to a native speaker and answer some questions"
      image={Messaging}
    />
    <CallToAction />
    <Footer noBorder />
  </div>

)

export default App
