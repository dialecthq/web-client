import React from "react"
import Footer from "../components/landing/common/Footer"
import Header from "../components/landing/common/Header"
import Content from "../components/landing/privacy/Content"
import CallToAction from "../components/landing/common/CallToAction"
import Seo from "../components/seo/Seo"
import LanguageContainer from "../utils/state/languageContainer"
import strings from "../utils/data/strings"

const Privacy = () => (
  <>
    <Seo
      title="Privacy Policy - Learn a new language today"
      description="Give the gift of language."
    />
    <Header />
    <Content />
    <CallToAction />
    <Footer />
  </>
)

export default Privacy
