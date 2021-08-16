import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Logo from '@img/logo.svg'
import TextLogo from '@img/text-logo.svg'

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`

const Text = styled.img`
    filter: ${(p) => (p.light ? 'none' : 'invert(0.9)')};
`

export default ({ light }) => {
  const history = useHistory()
  return (
    <HeaderLogo onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      history.push('/')
    }}
    >
      <img src={Logo} style={{ height: 36, width: 36, }} alt="logo" />
      <Text src={TextLogo} style={{ height: 22, marginLeft: 10 }} alt="text" light={light} />
      {/* <Title light={light}>dialect</Title> */}
    </HeaderLogo>
  )
}
