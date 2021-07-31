import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Button } from 'antd'
import { FaUser, FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import HeaderLogo from '@components/common/HeaderLogo'

const ErrorContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #020117;
    color: #fff;
`

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px;
    min-width: 200px;
`

const Text = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 0px;
    text-align: center;
    letter-spacing: 0.05em;
`

const HeaderContainer = styled.div`
  
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

const HeaderWrapper = styled.div`
width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 1200px;
    padding: 8px 24px;
`

const Error = ({ imgLink, errorMessage }) => {
  const history = useHistory()
  return (
    <ErrorContainer>
      <HeaderContainer>
        <HeaderWrapper>
          <Button
            icon={<FaArrowLeft style={{ marginRight: 5 }} />}
            onClick={() => {
              history.push('/exchange')
            }}
          >
            Back
          </Button>
          <HeaderLogo />
        </HeaderWrapper>
      </HeaderContainer>

      <ErrorWrapper>
        <img src={imgLink} style={{ height: 200, width: 200 }} alt="link" />
        <Text>{errorMessage}</Text>
      </ErrorWrapper>
    </ErrorContainer>
  )
}

export default Error
