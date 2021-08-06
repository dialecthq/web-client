import React from 'react'
import styled from 'styled-components'
import Action from '@img/action.png'

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

const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 90%;
    padding: 5px;
    border-radius: 30px;
    background: rgb(69,255,210);
    background: linear-gradient(90deg, rgba(69,255,210,1) 0%, rgba(69,255,233,1) 50%, rgba(0,212,255,1) 100%);
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const Img = styled.img`
    border-radius: 25px;
    width: 100%;
`

const HeroImage = () => (
  <Container>
    <Wrapper>
      <ImgWrap>
        <Img src={Action} alt="blah" />
      </ImgWrap>
    </Wrapper>
  </Container>
)

export default HeroImage
