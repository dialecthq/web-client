/* eslint-disable max-len */
import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Footer from './components/common/Footer'
import AboutHero from './components/about/AboutHero'
import Header from './components/common/Header'
import CallToAction from './components/common/CallToAction'
import Team from './components/about/Team'
import PricingHero from './components/pricing/PricingHero'
import PricingSection from './components/pricing/PricingSection'

const Background = styled.div`
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNDkuNSIgY3k9IjUxOS41IiByPSIxNTkuNSIgZmlsbD0iIzQ1RkY4RiIgZmlsbC1vcGFjaXR5PSIwLjIyIi8+CjxwYXRoIGQ9Ik05MTkuMjYzIDExNi41QzkxOS4yNjMgMjA0LjU4OSA4NDcuODUyIDI3NiA3NTkuNzYzIDI3NkM2NzEuNjczIDI3NiA2MDAuMjYzIDIwNC41ODkgNjAwLjI2MyAxMTYuNUM2MDAuMjYzIDI4LjQxMDYgNjcxLjY3MyAtNDMgNzU5Ljc2MyAtNDNDODQ3Ljg1MiAtNDMgOTE5LjI2MyAyOC40MTA2IDkxOS4yNjMgMTE2LjVaIiBmaWxsPSIjNzVGRjQ1IiBmaWxsLW9wYWNpdHk9IjAuMjgiLz4KPGNpcmNsZSBjeD0iNTk5LjUiIGN5PSI3NzQuNSIgcj0iMTU5LjUiIGZpbGw9IiM0NUZGQTYiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8Y2lyY2xlIGN4PSIyNDAuNSIgY3k9IjYzLjUiIHI9IjE1OS41IiBmaWxsPSIjNDVGRkU5IiBmaWxsLW9wYWNpdHk9IjAuMjgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=');
  background-size: cover;
`

const Pricing = () => (
  <Background>
    <Header />
    <PricingHero />
    <PricingSection />
    <CallToAction />
    <Footer />
  </Background>
)

export default Pricing
