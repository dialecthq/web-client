/* eslint-disable max-len */
import React, { useState, useRef } from 'react'

import Footer from './components/common/Footer'
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
    <Footer />
  </div>
)

export default App
