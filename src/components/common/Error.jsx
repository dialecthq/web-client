import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaUser, FaArrowLeft } from 'react-icons/fa'

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

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  transition: 0.2s opacity ease-in-out;
  position: absolute;
  top: 20px;
  left: 20px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const BackText = styled.p`
  font-weight: 500;
  font-size: 1em;
  margin-left: 5px;
`

const Error = ({ imgLink, errorMessage }) => (
  <ErrorContainer>
    <BackContainer
      onClick={() => {
        console.log('helllo')
      }}
    >
      <FaArrowLeft size={16} />
      <BackText>back</BackText>
    </BackContainer>
    <ErrorWrapper>
      <img src={imgLink} style={{ height: 200, width: 200 }} alt="link" />
      <Text>{errorMessage}</Text>
    </ErrorWrapper>
  </ErrorContainer>
)

export default Error
