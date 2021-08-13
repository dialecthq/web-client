import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    margin-top: 24px;
    height: 100vh;
    min-height: 500px;
    max-height: 800px;
    background: ${(p) => (p.colored ? '#f8fafc' : '#fff')};

    @media screen and (max-width: 768px){
      height: auto;
      min-height: auto;
    }    
`

const Wrapper = styled.div`
    width: 90%;
    padding: 24px;
    max-width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: ${(p) => (p.imgLeft ? 'row-reverse' : 'row')};
    justify-content: space-between;
    align-items: center;
    

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        border-radius: 0px;
    }
`

const Section = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`

const SectionTitle = styled.p`
    font-size: 3.2em;
    font-weight: 700;
    color: #1c1c1c;

    @media screen and (max-width: 768px) {
        font-size: 2.1em;
        text-align: center;
    }
`

const Subtitle = styled.p`
    margin-top: 5px;
    font-size: 1.9em;
    font-weight: 500;
    color: #777777;

    @media screen and (max-width: 768px) {
        font-size: 1.5em;
        text-align: center;
    }
`
const Emphasized = styled.span`
    color: var(--dark-purple);
`

const ImgWrap = styled.div`
    display: flex;
    justify-content: ${(p) => (p.imgLeft ? 'flex-start' : 'flex-end')};
    align-items: center;
    overflow: hidden;
    padding: 5px;
    border-radius: 30px;
    width: 100%;
`

const Img = styled.img`
    width: 100%;
    max-width: 400px;
`

const Info = ({
  title, sub1, emph, sub2, image, imgLeft, colored
}) => (
  <Container colored={colored}>
    <Wrapper imgLeft={imgLeft}>
      <Section>
        <SectionTitle>{title}</SectionTitle>
        <Subtitle>
          {sub1}
          {' '}
          <Emphasized>{emph}</Emphasized>
          {' '}
          {sub2}
        </Subtitle>
      </Section>
      <Section>
        <ImgWrap imgLeft={imgLeft}>
          <Img src={image} alt="conversation" />
        </ImgWrap>
      </Section>
    </Wrapper>
  </Container>
)

export default Info
