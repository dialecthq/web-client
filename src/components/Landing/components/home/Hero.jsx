import React from 'react'
import styled from 'styled-components'
import ReactTypingEffect from 'react-typing-effect'
import { Button } from 'antd'
import strings from '@utils/data/strings'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  padding-top: 160px;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroText = styled.p`
  font-size: 3.2em;
  color: #1c1c1c;
  font-weight: 700;
`

const Language = styled.span`
  font-size: 3.2em;
  color: var(--dark-purple);
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`

const Subtitle = styled.p`
  margin-top: 15px;
  font-size: 1.8em;
  font-weight: 500;
  color: #1c1c1c;
  opacity: 0.6;
  max-width: 600px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.4em;
    max-width: 400px;
  }
`

const Typing = styled(ReactTypingEffect)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Mobile = styled.p`
  font-size: 2em;
  color: #1c1c1c;
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 769px) {
    display: none;
  }
`

const Hero = () => {
  const HeroTextString = strings.theBest
  const arr = strings.theBest.split('HDHKA')
  return (
    <Container>
      <Wrapper>
        <Typing
          speed={120}
          eraseSpeed={70}
          eraseDelay={1800}
          typingDelay={100}
          text={[
            strings.english,
            strings.russian,
            strings.chinese,
            strings.chinese,
            strings.french,
            strings.dutch,
            strings.indonesian,
            strings.arabic,
            strings.norwegian
          ]}
          cursorRenderer={(cursor) => <HeroText>{cursor}</HeroText>}
          displayTextRenderer={(text, i) => (
            <div style={{ display: 'flex', width: '100%' }}>
              <HeroText>{arr[0]}</HeroText>
              <Language style={{ marginLeft: 10, marginRight: 10 }}>{text}</Language>
              <HeroText>{arr[1]}</HeroText>
            </div>
          )}
        />
        <Mobile>
          {arr[0]}
          <Language>{strings.anyLanguage}</Language>
          {arr[1]}
        </Mobile>
        <Subtitle>{strings.heroText}</Subtitle>
        <Button type="primary" style={{ marginTop: 30, height: 50, width: 120 }}>
          {strings.getStarted}
        </Button>
      </Wrapper>
    </Container>
  )
}
export default Hero
