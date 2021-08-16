import React from 'react'
import styled from 'styled-components'

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
    font-size: 3em;
    color: var(--dark-purple);
    font-weight: 700;
    text-align: center;
    max-width: 900px;

    @media screen and (max-width: 768px) {
        font-size: 2.1em;
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
    }
`

const PricingHero = () => (
  <Container>
    <Wrapper>
      <HeroText>Ran Out of Tokens?</HeroText>
      <Subtitle> Purchase a token pack and get back to learning. You can always join your native language room to earn the hard way</Subtitle>
    </Wrapper>
  </Container>
)

export default PricingHero
