/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

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

const Background = styled.div`
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='1100' height='800' viewBox='0 0 1100 800' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Crect width='1100' height='800' fill='white'/%3E%3Ccircle cx='49.5' cy='519.5' r='159.5' fill='%2345C7FF' fill-opacity='0.22'/%3E%3Cpath d='M1304 338.5C1304 426.589 1232.59 498 1144.5 498C1056.41 498 985 426.589 985 338.5C985 250.411 1056.41 179 1144.5 179C1232.59 179 1304 250.411 1304 338.5Z' fill='%2345FF79' fill-opacity='0.28'/%3E%3Cpath d='M1154 594.5C1154 682.589 1082.59 754 994.5 754C906.411 754 835 682.589 835 594.5C835 506.411 906.411 435 994.5 435C1082.59 435 1154 506.411 1154 594.5Z' fill='%2345F4FF' fill-opacity='0.28'/%3E%3Cpath d='M536.437 801C536.437 889.089 465.027 960.499 376.937 960.499C288.848 960.499 217.438 889.089 217.438 801C217.438 712.911 288.848 641.5 376.937 641.5C465.027 641.5 536.437 712.911 536.437 801Z' fill='%23FF00B8' fill-opacity='0.11'/%3E%3Cpath d='M536.438 2.5C536.438 90.5894 465.027 162 376.938 162C288.848 162 217.438 90.5894 217.438 2.5C217.438 -85.5894 288.848 -157 376.938 -157C465.027 -157 536.438 -85.5894 536.438 2.5Z' fill='%23FF00B8' fill-opacity='0.11'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='1100' height='800' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  background-attachment: local;
`

const App = () => (
  <div style={{ background: '#fff' }}>
    <Background>
      <Header />
      <Hero />
      <HeroImage />
    </Background>
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
