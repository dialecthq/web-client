import React from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import { FaGlobe } from 'react-icons/fa'
import rooms from '../../../Utils/data/rooms'
import strings from '../../../Utils/data/strings'
import LanguageContainer from '../../../Utils/state/languageContainer'
import HeaderLogo from '../../common/HeaderLogo'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 24px;
  background: #ffffff;
  z-index: 5;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
    align-items: center;
  }
`

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionTitle = styled.p`
  font-weight: 500;
  color: #1c1c1c;
  margin-bottom: 10px;
`

const SectionLink = styled.a`
  color: #1c1c1c80;
  font-weight: 400;
`

const SmallText = styled.p`
  color: #1c1c1c80;
  font-weight: 400;
  font-size: 0.8em;
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const Footer = () => {
  const { setLanguage } = LanguageContainer.useContainer()
  const changeLanguage = (language) => {
    setLanguage(language)
    strings.setLanguage(language)
  }

  return (
    <Container>
      <Wrapper>
        <SectionContainer>
          <Section>
            <SectionTitle>{strings.general.capitalize()}</SectionTitle>
            <SectionLink href="/about">{strings.about.capitalize()}</SectionLink>
            <SectionLink href="/pricing">{strings.pricing.capitalize()}</SectionLink>
            <SectionLink href="/blog">{strings.blog.capitalize()}</SectionLink>
          </Section>
          <Section>
            <SectionTitle>{strings.aboutDialect.capitalize()}</SectionTitle>
            <SectionLink href="https://twitter.com/DialectHQ" target="_blank">
              Twitter
            </SectionLink>
            <SectionLink href="https://github.com/dialecthq" target="_blank">
              GitHub
            </SectionLink>
          </Section>
          <Section>
            <SectionTitle>{strings.legal.capitalize()}</SectionTitle>
            <SectionLink href="/privacy">{strings.privacyPolicy.capitalize()}</SectionLink>
            <SectionLink href="/terms">{strings.termsOfService.capitalize()}</SectionLink>
          </Section>
        </SectionContainer>
        <BottomSection>
          <HeaderLogo />
          <SmallText style={{ marginTop: 20 }}>{strings.madeWith}</SmallText>
          <SmallText>
            {strings.copyright.capitalize()}
            {' '}
            2021 Dialect Technology Inc.
          </SmallText>
          <Select
            style={{ width: 150, marginTop: 30 }}
            suffixIcon={FaGlobe}
            defaultValue={
              rooms.filter((e) => strings.getInterfaceLanguage().includes(e.code))[0].value
            }
            onChange={changeLanguage}
          >
            {rooms.map((room) => (
              <Select.Option key={room.code} value={room.code}>
                {strings[room.value.toLowerCase()].capitalize()}
              </Select.Option>
            ))}
          </Select>
        </BottomSection>
      </Wrapper>
    </Container>
  )
}
export default Footer