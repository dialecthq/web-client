import React from 'react'
import styled from 'styled-components'
import HeaderLogo from '@components/common/HeaderLogo'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 24px;
    background: #fff;
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
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
`

const Footer = () => (
  <Container>
    <Wrapper>
      <SectionContainer>
        <Section>
          <SectionTitle>General</SectionTitle>
          <SectionLink>About</SectionLink>
          <SectionLink>Pricing</SectionLink>
          <SectionLink>Blog</SectionLink>
        </Section>
        <Section>
          <SectionTitle>About Dialect</SectionTitle>
          <SectionLink>Twitter</SectionLink>
          <SectionLink>GitHub</SectionLink>
        </Section>
        <Section>
          <SectionTitle>Legal</SectionTitle>
          <SectionLink>Privacy Policy</SectionLink>
          <SectionLink>Terms of Service</SectionLink>
        </Section>
      </SectionContainer>
      <BottomSection>
        <HeaderLogo />
        <SmallText style={{ marginTop: 20 }}>Made with ❤️ in New York</SmallText>
        <SmallText>Copyright © 2021 Dialect Inc.</SmallText>
      </BottomSection>
    </Wrapper>
  </Container>
)
export default Footer
