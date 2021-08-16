/* eslint-disable max-len */
import React, { useState, useRef } from 'react'

import Footer from './components/common/Footer'
import AboutHero from './components/about/AboutHero'
import Header from './components/common/Header'
import CallToAction from './components/common/CallToAction'
import Team from './components/about/Team'
import PricingHero from './components/pricing/PricingHero'

const Pricing = () => (
  <div style={{ background: '#fff' }}>
    <Header />
    <PricingHero />
    <Footer />
  </div>
)

export default Pricing
