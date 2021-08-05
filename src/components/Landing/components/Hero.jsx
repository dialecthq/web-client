import React from 'react'
import styled from 'styled-components'
import ReactTypingEffect from 'react-typing-effect'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    padding-top: 80px;
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
    font-size: 2.8em;
    color: #1c1c1c;
    font-weight: 700;
`

const Language = styled.span`
    color: var(--dark-purple);
    font-weight: 700;
`

const Subtitle = styled.p`
    margin-top: 20px;
    font-size: 1.8em;
    color: #1c1c1c;
    opacity: 0.6;
    max-width: 600px;
    text-align: center;
`

const Hero = () => (
  <Container>
    <Wrapper>
      <ReactTypingEffect
        speed={120}
        eraseSpeed={70}
        eraseDelay={1800}
        typingDelay={100}
        text={['English', 'Russian', 'Mandarin', 'Spanish', 'French', 'Dutch', 'Indonesian', 'Arabic', 'Norwegian']}
        cursorRenderer={(cursor) => <HeroText>{cursor}</HeroText>}
        displayTextRenderer={(text, i) => (
          <HeroText>
            The best place to learn
            {' '}
            <Language>{ text}</Language>
          </HeroText>
        )}
      />
      <Subtitle>Dialect allows you to have conversations with native speakers to build confidence and fluency</Subtitle>
    </Wrapper>
  </Container>

)
export default Hero
