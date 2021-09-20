/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

import Footer from "../components/landing/common/Footer"
import Header from "../components/landing/common/Header"
import CallToAction from "../components/landing/common/CallToAction"
import PricingHero from "../components/landing/pricing/PricingHero"
import PricingSection from "../components/landing/pricing/PricingSection"
import Seo from "../components/seo/Seo"
import LanguageContainer from "../utils/state/languageContainer"
import strings from "../utils/data/strings"

const Background = styled.div`
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNDkuNSIgY3k9IjUxOS41IiByPSIxNTkuNSIgZmlsbD0iIzQ1RkY4RiIgZmlsbC1vcGFjaXR5PSIwLjIyIi8+CjxwYXRoIGQ9Ik05MTkuMjYzIDExNi41QzkxOS4yNjMgMjA0LjU4OSA4NDcuODUyIDI3NiA3NTkuNzYzIDI3NkM2NzEuNjczIDI3NiA2MDAuMjYzIDIwNC41ODkgNjAwLjI2MyAxMTYuNUM2MDAuMjYzIDI4LjQxMDYgNjcxLjY3MyAtNDMgNzU5Ljc2MyAtNDNDODQ3Ljg1MiAtNDMgOTE5LjI2MyAyOC40MTA2IDkxOS4yNjMgMTE2LjVaIiBmaWxsPSIjNzVGRjQ1IiBmaWxsLW9wYWNpdHk9IjAuMjgiLz4KPGNpcmNsZSBjeD0iNTk5LjUiIGN5PSI3NzQuNSIgcj0iMTU5LjUiIGZpbGw9IiM0NUZGQTYiIGZpbGwtb3BhY2l0eT0iMC41NCIvPgo8Y2lyY2xlIGN4PSIyNDAuNSIgY3k9IjYzLjUiIHI9IjE1OS41IiBmaWxsPSIjNDVGRkU5IiBmaWxsLW9wYWNpdHk9IjAuMjgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
  background-size: cover;
  background-attachment: local;
`

const Pricing = () => {
  return (
    <Background>
      <Seo title="Pricing - Learn a new language today" description="Give the gift of language." />
      <Header />
      <PricingHero />
      <PricingSection />
      <CallToAction />
      <Footer />
    </Background>
  )
}

export default Pricing
