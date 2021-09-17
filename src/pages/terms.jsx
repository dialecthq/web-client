import React from "react"
import Footer from "../components/landing/common/Footer"
import Header from "../components/landing/common/Header"
import Content from "../components/landing/tos/Content"
import CallToAction from "../components/landing/common/CallToAction"
import Seo from "../components/seo/Seo"

const TOS = () => (
  <>
    <Seo title="Profile - Learn a new language today" description="Give the gift of language." />
    <Header />
    <Content />
    <CallToAction />
    <Footer />
  </>
)

export default TOS
