import React from 'react'
import styled from 'styled-components'
import Logo from '@img/logo.svg'
import { useHistory } from 'react-router-dom'

const FooterContainer = styled.div`
  height: 60px;
  /* position: fixed;
    bottom: 0; */
  width: 100%;
  background-color: inherit;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 8px;
`

const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  border-top: ${(p) => (p.noBorder ? 'none' : '1px solid #eeeeee')};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterLink = styled.a`
  font-size: 0.9em;
  font-weight: 400;
  color: var(--text-color);
  margin-left: 10px;
`

const LogoIMG = styled.img`
  width: 42px;
  height: 42px;
  :hover {
    cursor: pointer;
  }
`

const Footer = ({ noBorder }) => {
  const history = useHistory()
  return (
    <FooterContainer>
      <FooterWrapper noBorder={noBorder}>
        <FooterContent>
          <LogoIMG
            src={Logo}
            alt="logo"
            onClick={() => {
              history.push('/')
            }}
          />
        </FooterContent>
        <FooterContent>
          <FooterLink>Home</FooterLink>
          <FooterLink>About</FooterLink>
          <FooterLink>Contact</FooterLink>
          <FooterLink>Terms</FooterLink>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
