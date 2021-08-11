/* eslint-disable max-len */
import React, { useState } from 'react'

import Footer from '@components/Exchange/components/Footer'
import AboutHero from './components/about/AboutHero'
import Header from './components/common/Header'
import CallToAction from './components/common/CallToAction'
import Team from './components/about/Team'

const App = () => (
  <div style={{ background: '#fff' }}>
    <Header />
    <AboutHero />
    <Team />
    <CallToAction />
    <Footer noBorder />
  </div>
)

export default App
