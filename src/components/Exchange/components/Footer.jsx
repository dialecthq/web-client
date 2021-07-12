import React from 'react'
import styled from 'styled-components'
import Logo from '@img/logo.svg'

const FooterContainer = styled.div`
    height: 60px;
    border-top: 1px solid #efefef;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 4;
    padding: 0 18px;
`

const FooterWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterLink = styled.a`
    font-size: 0.9em;
    font-weight: 400;
    color: #454545;
    margin-left: 10px;
`

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <FooterContent>
        <img src={Logo} style={{ height: 42, width: 42 }} alt="logo" />
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

export default Footer
