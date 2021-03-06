import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import Image from "next/image"
import strings from "../../../utils/data/strings"

const Animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
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

const Title = styled.p`
  font-size: 2.8em;
  color: #1c1c1c;
  font-weight: 600;
  text-align: center;
  max-width: 900px;

  @media screen and (max-width: 768px) {
    font-size: 1.9em;
  }
`

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  max-width: 900px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 15px;
  margin-top: 15px;
`

const TeamImage = styled.img`
  object-fit: contain;
  border-radius: 20px;
  width: 180px;
`

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: ${(p) => (p.hover ? 1 : 0)};
  border-radius: 20px;
  background: #1c1c1c80;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transition: 0.2s opacity ease-in-out;
  z-index: 4;
`

const OverlayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ProfileText = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  color: #fff;
`

const IconRow = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transition: 0.2s all ease-in-out;
    height: 24px;
    width: 24px;
    color: #fff;
  }

  :hover {
    cursor: pointer;
  }
`

const NameP = styled.div`
  font-size: 1.4em;
  font-weight: 600;
  color: #1c1c1c;
  opacity: 0.8;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const TeamMemberDiv = ({ Name, Image }) => {
  const [hover, setHover] = useState(false)
  return (
    <TeamMember>
      <ImgWrap onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Overlay hover={hover}>
          <OverlayWrapper>
            <ProfileText>{strings.profiles.capitalize()}</ProfileText>
            <IconRow>
              <Icon
                onClick={() => {
                  window.open("https://twitter.com/ryanbrwr", "_blank").focus()
                }}
              >
                <FaTwitter style={{ marginRight: 5 }} />
              </Icon>
              <Icon
                onClick={() => {
                  window.open("https://linkedin.com/in/ryanbrwr", "_blank").focus()
                }}
              >
                <FaLinkedin />
              </Icon>
            </IconRow>
          </OverlayWrapper>
        </Overlay>
        <TeamImage src="/ROSE14.jpg" alt="logo" />
      </ImgWrap>
      <NameP>Ryan Brewer</NameP>
    </TeamMember>
  )
}

const Team = () => (
  <Container>
    <Wrapper>
      <TeamContainer>
        <TeamMemberDiv />
      </TeamContainer>
    </Wrapper>
  </Container>
)

export default Team
